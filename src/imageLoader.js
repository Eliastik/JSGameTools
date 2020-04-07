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
export default class ImageLoader {
  constructor() {
    this.images = {};
    this.triedLoading = 0;
    this.hasError = false;
    this.nbImagesToLoad = 1;
    this.firstImage = true;
  }

  load(img, func, game) {
    var self = this;
  
    if(this.firstImage) {
      this.nbImagesToLoad = img.length;
      this.firstImage = false;
    }
  
    if(img.length > 0) {
      this.loadImage(img[0], function(result) {
        if(result == true) {
          img.shift();
          self.load(img, func, game);
        } else {
          self.hasError = true;
          return func();
        }
      });
    } else {
      return func();
    }
  }

  loadImage(src, func) {
    var self = this;
    
    this.triedLoading++;
  
    var image = new Image();
    image.src = src;
  
    image.onload = function() {
      if(self.images != null) {
        self.images[src] = image;
      } else {
        return func(false);
      }
  
      self.triedLoading = 0;
      return func(true);
    };
  
    image.onerror = function() {
      if(self.triedLoading >= 5) {
        if(self.images != null) {
          self.images[src] = image;
        }
  
        self.triedLoading = 0;
        return func(false);
      }
  
      setTimeout(function() {
        self.loadImage(src, func);
      }, 250);
    }
  }

  get(src) {
    if(this.images != null) {
      return this.images[src];
    } else {
      return null;
    }
  }

  clear() {
    this.images = null;
  }
}