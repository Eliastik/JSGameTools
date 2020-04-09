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
import Constants from "./constants";
import Utils from "./utils";

class Button {
  constructor(text, x, y, alignement, color, colorHover, colorDown, width, height, fontSize, fontFamily, fontColor, imgSrc, imageLoader, verticalAlignement) {
    this.x = x || 0;
    this.y = y || 0;
    this.initialX = x;
    this.initialY = y;
    this.width = width || "auto";
    this.height = height || "auto";
    this.autoWidth = (this.width == "auto" ? true : false);
    this.autoHeight = (this.height == "auto" ? true : false);
    this.clicked = false;
    this.hovered = false;
    this.text = text;
    this.fontSizeInitial = fontSize;
    this.fontSize = this.fontSizeInitial || Math.floor(Constants.Setting.FONT_SIZE / 1.25);
    this.fontFamily = fontFamily || Constants.Setting.FONT_FAMILY;
    this.fontColor = fontColor || "white";
    this.color = color || "rgba(0, 0, 0, 0)";
    this.colorHover = colorHover || "#95a5a6";
    this.colorDown = colorDown || "#727F80"
    this.triggerClick;
    this.triggerHover;
    this.triggerDown;
    this.init = false;
    this.disabled = false;
    this.alignement = alignement || "default";
    this.image;
    this.imgSrc = imgSrc;
    this.verticalAlignement = verticalAlignement || "default";
    this.selected = false;
    this.imageLoader = imageLoader;
  }
  
  draw(context) {
    const canvas = context.canvas;
    const ctx = canvas.getContext("2d");
    ctx.save();

    this.fontSize = this.fontSizeInitial || Math.floor(Constants.Setting.FONT_SIZE / 1.25);

    ctx.font = this.fontSize + "px " + this.fontFamily;

    const textWrapped = Utils.wrapTextLines(ctx, this.text, null, this.fontSize, this.fontFamily);
    const heightText = textWrapped["height"];
    const widthText = textWrapped["width"];

    if(this.imgSrc != null && this.imageLoader != null) {
      this.loadImage(this.imageLoader);
    }

    if(this.image != null) {
      let imgWidth = this.image.width;
      let imgHeight = this.image.height;

      if(this.autoWidth) {
        this.width = imgWidth * 1.25;
      }

      if(this.autoHeight) {
        this.height = imgHeight * 1.5;
      }
    } else if(this.text != null) {
      if(this.autoWidth) {
        this.width = widthText + textWrapped["carWidth"] * 2;
      }

      if(this.autoHeight) {
        this.height = heightText + this.fontSize / 1.5;
      }
    }

    if(this.alignement == "center") {
      this.x = (canvas.width / 2) - (this.width / 2) - this.initialX;
    } else if(this.alignement == "right") {
      this.x = (canvas.width) - (this.width) - 5 - this.initialX;
    } else if(this.alignement == "left") {
      this.x = 5;
    }

    if(this.verticalAlignement == "bottom") {
      this.y = (canvas.height) - (this.height) - 5 - this.initialY;
    } else if(this.verticalAlignement == "center") {
      this.y = (canvas.height / 2) - (this.height / 2) - this.initialY;
    } else if(this.verticalAlignement == "top") {
      this.y = 15;
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
      
      ctx.drawImage(this.image, Math.round(imgX), Math.round(imgY), Math.round(imgWidth), Math.round(imgHeight));
    } else if(this.text != null) {
      ctx.fillStyle = this.fontColor;
      
      const textX = this.x + (this.width / 2) - (widthText / 2);
      const textY = this.y + this.fontSize + this.fontSize / 5;
      
      Utils.drawText(ctx, this.text, this.fontColor, this.fontSize, this.fontFamily, (this.alignement == "center" ? "center" : "default"), "default", Math.round(textX), Math.round(textY), true);
    }
    
    ctx.restore();

    if(!this.init && ctx != null) {
      ctx.canvas.addEventListener("mousemove", event => {
        if(!this.disabled) {
          if(this.isInside(this.getMousePos(ctx.canvas, event))) {
            if(this.triggerHover != null && !this.disabled) {
              this.triggerHover();
            }
            
            this.hovered = true;
          } else {
            this.hovered = false;
          }
        } else {
          this.hovered = false;
          this.clicked = false;
        }
      }, false);
      
      ctx.canvas.addEventListener("click", event => {
        if(!this.disabled) {
          if(this.isInside(this.getMousePos(canvas, event))) {
            if(this.triggerClick != null) {
              this.triggerClick();
            }
          } else {
            this.clicked = false;
          }
        } else {
          this.hovered = false;
          this.clicked = false;
        }
      }, false);
      
      ctx.canvas.addEventListener("mousedown", event => {
        if(!this.disabled) {
          if(this.isInside(this.getMousePos(canvas, event))) {
            if(this.triggerDown != null) {
              this.triggerDown();
            }
            
            this.clicked = true;
          } else {
            this.clicked = false;
          }
        } else {
          this.hovered = false;
          this.clicked = false;
        }
      }, false);
      
      ctx.canvas.addEventListener("mouseup", () => {
        this.clicked = false;
      }, false);
    }

    this.init = true;
  }
  
  getMousePos(canvas, event) {
    const rect = canvas.getBoundingClientRect();

    return {
      x: event.clientX - rect.left,
      y: event.clientY - rect.top
    };
  }
  
  isInside(pos) {
    return pos.x > this.x && pos.x < this.x + this.width && pos.y < this.y + this.height && pos.y > this.y;
  }
  
  addClickAction(trigger) {
    this.triggerClick = trigger;
  }
  
  removeClickAction() {
    this.triggerClick = null;
  }
  
  addMouseOverAction(trigger) {
    this.triggerHover = trigger;
  }
  
  removeHoverAction() {
    this.triggerHover = null;
  }
  
  addMouseDownAction(trigger) {
    this.triggerDown = trigger;
  }
  
  removeDownAction() {
    this.triggerDown = null;
  }
  
  disable() {
    this.disabled = true;
  }
  
  enable() {
    this.disabled = false;
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