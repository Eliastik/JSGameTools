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
import Label from "./Label";
import Style from "./Style";

export default class Link extends Label {
  selectable = true;

  constructor(text, x, y, style) {
    super(text, x, y, style);

    this.initialColor = this.style.fontColor;
    this.initialUnderline = this.style.underline;
  }

  draw(context) {
    if(this.hidden) return;
    super.draw(context);

    const canvas = context.canvas;

    if(this.clicked) {
      this.style.set("underline", false);
      this.style.set("fontColor", this.style.fontColorDown);
      canvas.style.cursor = "pointer";
    } else if(this.hovered || this.selected) {
      this.style.set("underline", false);
      this.style.set("fontColor", this.style.fontColorHover);
      if(this.hovered) canvas.style.cursor = "pointer";
    } else {
      this.style.set("underline", this.initialUnderline);
      this.style.set("fontColor", this.initialColor);
    }

    this.init = true;
  }

  get defaultStyle() {
    return new Style({
      "fontSize": Constants.Setting.FONT_SIZE,
      "fontFamily": Constants.Setting.FONT_FAMILY,
      "fontColor": Constants.Setting.LINK_DEFAULT_COLOR,
      "fontColorHover": Constants.Setting.LINK_DEFAULT_HOVER_COLOR,
      "fontColorDown": Constants.Setting.LINK_DEFAULT_CLICK_COLOR,
      "wrap": true,
      "bold": false,
      "underline": true
    });
  }
}