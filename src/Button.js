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
import Col from "./Col";
import Constants from "./Constants";
import ImageContainer from "./ImageContainer";

class Button extends Col {
  selectable = true;

  constructor(x, y, maxWidth, maxHeight, backgroundColor, backgroundColorHover, backgroundColorDown, alignement, verticalAlignement, padding, ...components) {
    super(x, y, alignement, verticalAlignement, padding ? padding : Constants.Setting.DEFAULT_PADDING, padding ? padding : Constants.Setting.DEFAULT_SPACING, false, ...components);
    this.autoWidth = (this.width == undefined ? true : false);
    this.autoHeight = (this.height == undefined ? true : false);
    this.backgroundColor = backgroundColor || Constants.Setting.BUTTON_DEFAULT_BACKGROUND;
    this.backgroundColorHover = backgroundColorHover || Constants.Setting.BUTTON_DEFAULT_HOVER_BACKGROUND;
    this.backgroundColorDown = backgroundColorDown || Constants.Setting.BUTTON_DEFAULT_CLICK_BACKGROUND
    this.scrollXDisabled = true;
    this.scrollYDisabled = true;
  }
  
  draw(context) {
    super.draw(context);

    const canvas = context.canvas;
    const ctx = canvas.getContext("2d");
    ctx.save();

    this.drawBackground(ctx);

    if(this.selected) {
      this.drawBorder(ctx);
    }
    
    this.drawComponents(ctx);
    
    ctx.restore();
  }

  drawComponents(ctx) {
    super.draw(ctx);
  }

  drawBackground(ctx) {
    ctx.save();

    if(this.hovered && this.clicked) {
      ctx.fillStyle = this.backgroundColorDown;
    } else if(this.hovered) {
      ctx.fillStyle = this.backgroundColorHover;
    } else {
      ctx.fillStyle = this.backgroundColor;
    }

    ctx.fillRect(Math.round(this.x), Math.round(this.y), Math.round(this.width), Math.round(this.height));

    ctx.restore();
  }

  drawBorder(ctx) {
    ctx.save();
    
    ctx.strokeStyle = "#a2cdd8";
    ctx.lineWidth = 3;
    
    ctx.strokeRect(Math.round(this.x), Math.round(this.y), Math.round(this.width), Math.round(this.height));

    ctx.restore();
  }

  get height() {
    return super.height + this.padding;
  }

  get width() {
    return super.width + this.padding;
  }

  set width(width) {
    super.width = width;
    this.autoWidth = false;
  }

  set height(height) {
    super.height = height;
    this.autoHeight = false;
  }

  get maxWidth() {
    return this.width;
  }

  get maxHeight() {
    return this.height;
  }
}

class ButtonImage extends Button {
  constructor(imgSrc, x, y, alignement, verticalAlignement, width, height, backgroundColor, backgroundColorHover, imageLoader) {
    super(x, y, width, height, backgroundColor, backgroundColorHover, null, alignement, verticalAlignement, null, new ImageContainer(imgSrc, x, y, width, height, alignement, verticalAlignement, imageLoader));
  }

  loadImage(imageLoader) {
    if(this.components[0] instanceof ImageContainer) this.components[0].loadImage(imageLoader);
  }
}

export { Button, ButtonImage };