/*
 * Copyright (C) 2020 Eliastik (eliastiksofts.com)
 *
 * This file is part of "JSGameTools".
 *
 * "JSGameTools" is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * "JSGameTools" is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with "JSGameTools".  If not, see <http://www.gnu.org/licenses/>.
 */
import Utils from "./Utils";

export default class ImageLoader {
  constructor() {
    this.images = {};
    this.imagesResized = {};
    this.triedLoading = 0;
    this.hasError = false;
    this.nbImagesToLoad = 1;
    this.firstImage = true;
  }

  load(img, func) {
    if(this.firstImage) {
      this.nbImagesToLoad = img.length;
      this.firstImage = false;
    }
    
    if(img.length > 0) {
      this.loadImage(img[0], result => {
        if(result == true) {
          img.shift();
          this.load(img, func);
        } else {
          this.hasError = true;
          return func();
        }
      });
    } else {
      return func();
    }
  }

  loadImage(src, func) {
    this.triedLoading++;
  
    const image = new Image();
    image.src = src;
  
    image.onload = () => {
      if(this.images != null) {
        this.images[src] = image;
      } else {
        return func(false);
      }
  
      this.triedLoading = 0;
      return func(true);
    };
  
    image.onerror = () => {
      if(this.triedLoading >= 5) {
        if(this.images != null) {
          this.images[src] = image;
        }
  
        this.triedLoading = 0;
        return func(false);
      }
  
      setTimeout(() => {
        this.loadImage(src, func);
      }, 250);
    }
  }

  get(src, width, height) {
    if(this.images != null && this.images.hasOwnProperty(src)) {
      const image = this.images[src];

      if((width || height) && (image.width != width || image.height != height)) {
        const w = Math.round(width);
        const h = Math.round(height);
        const id = src + "@" + w + "-" + h;

        if(!this.imagesResized.hasOwnProperty(id)) {
          const canvasTmp = document.createElement("canvas");
          const ctx = canvasTmp.getContext("2d");
          canvasTmp.width = w;
          canvasTmp.height = h;

          Utils.drawImage(ctx, image, 0, 0, w, h, 0, 0, image.width, image.height);
          this.imagesResized[id] = canvasTmp;
        }

        return this.imagesResized[id];
      } else {
        return image;
      }
    } else {
      return null;
    }
  }

  clear() {
    this.images = null;
  }
}