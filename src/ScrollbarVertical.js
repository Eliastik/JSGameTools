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
import Scrollbar from "./Scrollbar";

export default class ScrollbarVertical extends Scrollbar {
  selectable = true;

  constructor(size, style, parent) {
    super(size, style, parent);
    
    this.addMoveAction((deltaX, deltaY) => {
      if(this.parent) {
        const percentScrollbarNext = Math.abs((this.parent.y - Math.max(this.parent.y, this.y + -deltaY)) / (this.parent.height - this.height));
        const newDeltaY = (this.windowScrollSizeY * percentScrollbarNext) - this.parent.offsetScrollY;
        this.parent.offsetScrollY += newDeltaY;

        if(this.parent.reactor) {
          this.parent.reactor.dispatchEvent("onScroll", 0, newDeltaY);
        }
      }
    });
  }
  
  draw(context) {
    if(this.scrollAreaSizeY > 0) {
      super.draw(context);
    }
  }

  get width() {
    return this.size;
  }

  get x() {
    return this.parent ? this.parent.x + this.parent.width - this.size : 0;
  }
}