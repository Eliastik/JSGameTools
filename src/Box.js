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
import Constants from "./Constants";

export default class Box extends Component {
  selectable = false;

  constructor(x, y, width, height, backgroundColor, backgroundColorHover, backgroundColorDown, alignement, verticalAlignement, disableAnimation, scrollXDisabled, scrollYDisabled) {
    super(x, y, width, height, alignement, verticalAlignement, disableAnimation, scrollXDisabled, scrollYDisabled);
    this.backgroundColor = backgroundColor;
    this.backgroundColorHover = backgroundColorHover;
    this.backgroundColorDown = backgroundColorDown;
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
    
    ctx.restore();
  }

  drawBackground(ctx) {
    ctx.save();

    let color = null;

    if(this.hovered && this.clicked && this.backgroundColorDown) {
      color = this.backgroundColorDown;
    } else if(this.hovered && this.backgroundColorHover) {
      color = this.backgroundColorHover;
    } else {
      color = this.backgroundColor;
    }
    
    if(color) {
      ctx.fillStyle = color;
      ctx.fillRect(Math.round(this.x), Math.round(this.y), Math.round(this.width), Math.round(this.height));
    }

    ctx.restore();
  }

  drawBorder(ctx) {
    if(this.selectable) {
      ctx.save();
      
      ctx.strokeStyle = Constants.Setting.BOX_DEFAULT_SELECT_BORDER;
      ctx.lineWidth = 3;
      
      ctx.strokeRect(Math.round(this.x), Math.round(this.y), Math.round(this.width), Math.round(this.height));
  
      ctx.restore();
    }
  }
}