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

export default class Tooltip extends Col {
  selectable = false;
  
  constructor(backgroundColor, ...components) {
    super(0, 0, 0, 0);

    this.addAll(...components);
    this.backgroundColor = backgroundColor || "rgba(255, 255, 255, 0.25)";
    this.disabled = true;
  }

  draw(context) {
    if(!this.disabled) {
      const canvas = context.canvas;
      const ctx = canvas.getContext("2d");
      ctx.save();

      if(this.x + this.width + 15 > canvas.width) {
        this.x -= (this.width + 15);
      }

      if(this.y + this.height + 15 > canvas.height) {
        this.y -= (this.height + 15);
      }
  
      ctx.fillStyle = this.backgroundColor;
      ctx.fillRect(this.x, this.y, this.width + 15, this.height + 15);
      super.draw(ctx);
      
      ctx.restore();
    }
  }
}