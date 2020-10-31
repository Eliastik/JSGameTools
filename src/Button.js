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
import Constants from "./Constants";
import Utils from "./Utils";
import Component from "./Component";

class Button extends Component {
  constructor(text, x, y, alignement, color, colorHover, colorDown, width, height, fontSize, fontFamily, fontColor, imgSrc, imageLoader, verticalAlignement) {
    super(x, y, width, height, alignement, verticalAlignement);
    this.autoWidth = (this.width == undefined ? true : false);
    this.autoHeight = (this.height == undefined ? true : false);
    this.text = text;
    this.fontSizeInitial = fontSize;
    this.fontSize = this.fontSizeInitial || Math.floor(Constants.Setting.FONT_SIZE / 1.25);
    this.fontFamily = fontFamily || Constants.Setting.FONT_FAMILY;
    this.fontColor = fontColor || "white";
    this.color = color || "rgba(0, 0, 0, 0)";
    this.colorHover = colorHover || "#95a5a6";
    this.colorDown = colorDown || "#727F80"
    this.image;
    this.imgSrc = imgSrc;
    this.imageLoader = imageLoader;
  }
  
  draw(context) {
    super.draw(context);

    const canvas = context.canvas;
    const ctx = canvas.getContext("2d");
    ctx.save();

    this.fontSize = this.fontSizeInitial || Math.floor(Constants.Setting.FONT_SIZE / 1.25);

    ctx.font = this.fontSize + "px " + this.fontFamily;

    const textWrapped = this.textWrapped;
    const textLines = textWrapped["text"].split("\n").length;
    const widthText = textWrapped["width"];

    if(this.imgSrc != null && this.imageLoader != null) {
      this.loadImage(this.imageLoader);
    }

    if(this.hovered && this.clicked) {
      ctx.fillStyle = this.colorDown;
    } else if(this.hovered) {
      ctx.fillStyle = this.colorHover;
    } else {
      ctx.fillStyle = this.color;
    }

    ctx.fillRect(Math.round(this.x), Math.round(this.y), Math.round(this.width), Math.round(this.height));

    if(this.selected) {
      const initialStrokeStyle = ctx.strokeStyle;
      const initialLineWidth = ctx.lineWidth;
      
      ctx.strokeStyle = "#a2cdd8";
      ctx.lineWidth = 3;
      
      ctx.strokeRect(Math.round(this.x), Math.round(this.y), Math.round(this.width), Math.round(this.height));
      
      ctx.strokeStyle = initialStrokeStyle;
      ctx.lineWidth = initialLineWidth;
    }

    if(this.image != null) {
      let imgWidth;
      let imgHeight;
      
      if(this.image.width > this.width || this.image.height > this.height) {
        const aspectRatio = this.image.width / this.image.height;
        imgWidth = Math.floor(this.width / 1.25);
        imgHeight = Math.floor(imgWidth / aspectRatio);
      }
      
      const imgX = this.x + (this.width / 2) - (imgWidth / 2);
      const imgY = this.y + (this.height / 2) - (imgHeight / 2);
      
      Utils.drawImage(ctx, this.image, Math.round(imgX), Math.round(imgY), Math.round(imgWidth), Math.round(imgHeight));
    } else if(this.text != null) {
      ctx.textBaseline = "middle";
      ctx.fillStyle = this.fontColor;
      
      const textX = this.x + (this.width / 2) - (widthText / 2);
      const textY = this.y + (this.height / 2) - (textLines - 1) * (this.fontSize / 2);
      
      Utils.drawText(ctx, this.text, this.fontColor, this.fontSize, this.fontFamily, (this.alignement == "center" ? "center" : "default"), "default", Math.round(textX), Math.round(textY), true);
    }
    
    ctx.restore();
  }

  get textWrapped() {
    return Utils.wrapTextLines(this.canvasContext2d, this.text, null, this.fontSize, this.fontFamily);
  }

  get height() {
    if(this.image) {
      let imgHeight = this.image.height;

      if(this.autoHeight) {
        return imgHeight * 1.5;
      }
    } else if(this.text) {
      const textWrapped = this.textWrapped;
      const heightText = textWrapped["height"];

      if(this.autoHeight) {
        return heightText + this.fontSize / 1.5;
      }
    }

    return super.height;
  }

  get width() {
    if(this.image) {
      let imgWidth = this.image.width;

      if(this.autoWidth) {
        return imgWidth * 1.25;
      }
    } else if(this.text) {
      const textWrapped = this.textWrapped;
      const widthText = textWrapped["width"];

      if(this.autoWidth) {
        return widthText + textWrapped["carWidth"] * 2;
      }
    }

    return super.width;
  }

  set width(width) {
    super.width = width;
    this.autoWidth = false;
  }

  set height(height) {
    super.height = height;
    this.autoHeight = false;
  }
  
  loadImage(imageLoader) {
    this.image = imageLoader.get(this.imgSrc);
  }
}

class ButtonImage extends Button {
  constructor(imgSrc, x, y, alignement, verticalAlignement, width, height, color, colorHover, imageLoader) {
    super(null, x, y, alignement, color, colorHover, null, width, height, null, null, null, imgSrc, imageLoader, verticalAlignement);
  }
}

export { Button, ButtonImage };