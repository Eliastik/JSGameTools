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

export default class ScrollbarHorizontal extends Scrollbar {
  selectable = true;

  constructor(size, style, parent) {
    super(size, style, parent);

    this.addMoveAction((deltaX) => {
      if(this.parent) {
        const percentScrollbarNext = Math.abs((this.parent.x - Math.max(this.parent.x, this.x + -deltaX)) / (this.parent.width - this.width));
        const newDeltaX = (this.windowScrollSizeX * percentScrollbarNext) - this.parent.offsetScrollX;
        this.parent.offsetScrollX += newDeltaX;

        if(this.parent.reactor) {
          this.parent.reactor.dispatchEvent("onScroll", newDeltaX, 0);
        }
      }
    });
  }
  
  draw(context) {
    if(this.scrollAreaSizeX > 0) {
      super.draw(context);
    }
  }

  get height() {
    return this.size;
  }

  get y() {
    return this.parent ? this.parent.y + this.parent.height - this.size : null;
  }
}