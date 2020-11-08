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

export default class Tooltip extends Col {
  selectable = false;
  
  constructor(backgroundColor, padding, spaceBetweenComponents, ...components) {
    super(null, null, null, null, null, null, backgroundColor || Constants.Setting.TOOLTIP_DEFAULT_BACKGROUND, null, null, padding ? padding : Constants.Setting.DEFAULT_PADDING, spaceBetweenComponents, false, true, true, ...components);
    this.disabled = true;
  }

  draw(context) {
    if(!this.disabled) {
      const canvas = context.canvas;
      const ctx = canvas.getContext("2d");
      ctx.save();

      if(this.x + this.width + this.padding > canvas.width) {
        this.x -= (this.width + this.padding);
      }

      if(this.y + this.height + this.padding > canvas.height) {
        this.y -= (this.height + this.padding);
      }
  
      super.draw(ctx);
      
      ctx.restore();
    }
  }

  get width() {
    return super.width + this.padding;
  }

  get height() {
    return super.height + this.padding;
  }

  set width(width) {
    super.width = width;
  }

  set height(height) {
    super.height = height;
  }

  get maxWidth() {
    return this.width;
  }

  get maxHeight() {
    return this.height;
  }
}