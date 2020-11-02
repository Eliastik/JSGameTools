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
    super(null, null, null, null, padding ? padding : Constants.Setting.DEFAULT_PADDING, spaceBetweenComponents, false, ...components);
    this.backgroundColor = backgroundColor || Constants.Setting.TOOLTIP_DEFAULT_BACKGROUND;
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
  
      ctx.fillStyle = this.backgroundColor;
      ctx.fillRect(this.x, this.y, this.width + this.padding, this.height + this.padding);
      super.draw(ctx);
      
      ctx.restore();
    }
  }
}