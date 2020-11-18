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
import Component from "./Component";

export default class Box extends Component {
  selectable = false;

  constructor(x, y, width, height, style) {
    super(x, y, width, height, style);
  }
  
  draw(context) {
    if(this.style && this.style.hidden) return;
    super.draw(context);

    const canvas = context.canvas;
    const ctx = canvas.getContext("2d");
    ctx.save();

    this.drawBackground(ctx);
    this.drawBorder(ctx);
    
    ctx.restore();
  }

  drawBackground(ctx) {
    const color = this.backgroundColor;
    
    if(color) {
      ctx.save();
  
      ctx.fillStyle = color;
      ctx.fillRect(Math.round(this.x), Math.round(this.y), Math.round(this.width), Math.round(this.height));

      ctx.restore();
    }
  }

  get backgroundColor() {
    let color = null;

    if(this.hovered && this.clicked && this.style.backgroundColorDown != null) {
      color = this.style.backgroundColorDown;
    } else if(this.hovered && this.style.backgroundColorHover != null) {
      color = this.style.backgroundColorHover;
    } else {
      color = this.style.backgroundColor;
    }

    return color;
  }

  drawBorder(ctx) {
    const color = this.borderColor;

    if(color && this.style.borderSize > 0) {
      ctx.save();
      
      ctx.strokeStyle = color;
      ctx.lineWidth = this.style.borderSize;
      
      ctx.strokeRect(Math.round(this.x), Math.round(this.y), Math.round(this.width), Math.round(this.height));
  
      ctx.restore();
    }
  }

  get borderColor() {
    let color = null;

    if(this.clicked && this.hovered && this.style.borderColorDown != null) {
      color = this.style.borderColorDown;
    } else if(!this.clicked && this.hovered && this.style.borderColorHover != null) {
      color = this.style.borderColorHover;
    } else if(this.selectable && this.selected && this.style.borderColorSelected != null) {
      color = this.style.borderColorSelected;
    } else {
      color = this.style.borderColor;
    }

    return color;
  }
}