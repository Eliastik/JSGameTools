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
import Component from "./Component";

export default class ImageContainer extends Component {
  selectable = false;

  constructor(imgSrc, x, y, width, height, alignement, verticalAlignement, imageLoader) {
    super(x, y, width, height, alignement, verticalAlignement);
    this.image;
    this.imgSrc = imgSrc;
    this.imageLoader = imageLoader;
  }

  draw(context) {
    super.draw(context);
    
    const canvas = context.canvas;
    const ctx = canvas.getContext("2d");
    ctx.save();
    
    if(this.imgSrc != null && this.imageLoader != null) {
      this.loadImage(this.imageLoader);
    }

    if(this.image != null) {
      this.drawImage(ctx);
    }

    ctx.restore();
  }

  drawImage(ctx) {
    Utils.drawImage(ctx, this.image, Math.round(this.x), Math.round(this.y), Math.round(this.width), Math.round(this.height));
  }

  get sizes() {
    let imgWidth = super.width;
    let imgHeight = super.height;
    
    if(this.image && (this.image.width > super.width || this.image.height > super.height)) {
      const aspectRatio = this.image.width / this.image.height;
      imgWidth = Math.floor(super.width / 1.25);
      imgHeight = Math.floor(imgWidth / aspectRatio);
    }

    return {
      width: imgWidth,
      height: imgHeight
    }
  }

  get height() {
    return this.sizes.height;
  }

  get width() {
    return this.sizes.width;
  }

  set width(width) {
    super.width = width;
  }

  set height(height) {
    super.height = height;
  }
  
  loadImage(imageLoader) {
    this.image = imageLoader.get(this.imgSrc);
  }
}