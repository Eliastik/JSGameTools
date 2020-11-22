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
import Constants from "./Constants";
import Box from "./Box";
import Style from "./Style";

export default class Scrollbar extends Box {
  selectable = true;

  constructor(size, style, parent) {
    super(null, null, null, null, style);
    this.parent = parent;
    this.size = size || Constants.Setting.SCROLLBAR_DEFAULT_SIZE;
  }
  
  draw(context) {
    if(this.hidden) return;
    if(this.clicked) {
      this.hovered = true;
    }
    
    super.draw(context);
  }

  get maxWidthParent() {
    return this.parent ? this.parent.maxWidth - Math.abs(Math.min(0, this.parent.x)) : 0;
  }

  get maxHeightParent() {
    return this.parent ? this.parent.maxHeight - Math.abs(Math.min(0, this.parent.y)) : 0;
  }

  get innerWidthParent() {
    return this.parent ? this.parent.innerWidth - Math.abs(Math.min(0, this.parent.x)) : 0;
  }

  get innerHeightParent() {
    return this.parent ? this.parent.innerHeight - Math.abs(Math.min(0, this.parent.y)) : 0;
  }

  get maxWidth() {
    return this.width;
  }

  get maxHeight() {
    return this.height;
  }

  get contentRatioX() {
    return this.parent ? this.maxWidthParent / this.innerWidthParent : 0;
  }

  get contentRatioY() {
    return this.parent ? this.maxHeightParent / this.innerHeightParent : 0;
  }

  get width() {
    return this.maxWidthParent * this.contentRatioX;
  }

  get height() {
    return this.maxHeightParent * this.contentRatioY;
  }

  get windowScrollSizeX() {
    return this.innerWidthParent - this.maxWidthParent;
  }

  get windowScrollSizeY() {
    return this.innerHeightParent - this.maxHeightParent;
  }

  get percentScrollbarX() {
    return this.parent ? this.parent.offsetScrollX / this.windowScrollSizeX : 0;
  }

  get percentScrollbarY() {
    return this.parent ? this.parent.offsetScrollY / this.windowScrollSizeY : 0;
  }

  get scrollAreaSizeX() {
    return this.maxWidthParent - this.width;
  }

  get scrollAreaSizeY() {
    return this.maxHeightParent - this.height;
  }

  get x() {
    return this.parent ? Math.abs(this.parent.x) + this.scrollAreaSizeX * this.percentScrollbarX : 0;
  }

  get y() {
    return this.parent ? Math.abs(this.parent.y) + this.scrollAreaSizeY * this.percentScrollbarY : 0;
  }

  get defaultStyle() {
    return new Style({
      "backgroundColor": Constants.Setting.SCROLLBAR_DEFAULT_BACKGROUND,
      "backgroundColorHover": Constants.Setting.SCROLLBAR_DEFAULT_HOVER_BACKGROUND,
      "backgroundColorDown": Constants.Setting.SCROLLBAR_DEFAULT_CLICK_BACKGROUND,
      "borderSize": 0
    });
  }
}