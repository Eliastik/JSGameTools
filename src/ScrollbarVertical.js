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

  constructor(size, backgroundColor, backgroundColorHover, backgroundColorDown, parent) {
    super(size, backgroundColor, backgroundColorHover, backgroundColorDown, parent);
    
    this.addMoveAction((deltaX, deltaY) => {
      if(this.parent) {
        this.parent.offsetScrollY -= deltaY;

        if(this.parent.triggersScroll != null) {
          this.parent.triggersScroll.forEach(trigger => trigger(0, -deltaY));
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
    return this.parent ? this.parent.x + Math.min(this.parent.width, this.parent.maxWidth) - this.size : 0;
  }
}