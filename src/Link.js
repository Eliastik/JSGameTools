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
import Label from "./Label";

export default class Link extends Label {
  selectable = true;

  constructor(text, x, y, size, fontFamily, color, colorHover, colorDown, alignement, verticalAlignement, wrap, bold, underline) {
    super(text, x, y, size, fontFamily, color || "#0000EE", alignement, verticalAlignement, wrap, bold, underline || true);

    this.colorHover = colorHover || "#4D4DFF";
    this.colorDown = colorDown || "#EE7700";
    this.initialColor = this.color;
    this.initialUnderline = this.underline;
  }

  draw(context) {
    super.draw(context);

    const canvas = context.canvas;

    if(this.clicked) {
      this.underline = false;
      this.color = this.colorDown;
      canvas.style.cursor = "pointer";
    } else if(this.hovered) {
      this.underline = false;
      this.color = this.colorHover;
      canvas.style.cursor = "pointer";
    } else {
      this.underline = this.initialUnderline;
      this.color = this.initialColor;
    }

    this.init = true;
  }
}