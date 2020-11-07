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
import Utils from "./Utils";

export default class Cross extends Component {
  selectable = false;

  constructor(x, y, width, height, lineWidth, color, alignement, verticalAlignement) {
    super(x, y, width, height, alignement, verticalAlignement);

    this.lineWidth = lineWidth || Constants.Setting.CROSS_DEFAULT_LINE_SIZE;
    this.color = color || Constants.Setting.CROSS_DEFAULT_COLOR;
  }

  draw(context) {
    super.draw(context);

    const canvas = context.canvas;
    const ctx = canvas.getContext("2d");
    
    Utils.drawCross(ctx, this.x, this.y, this.width, this.height, this.lineWidth, this.color);

    this.init = true;
  }

  get width() {
    return super.width + this.lineWidth;
  }

  get height() {
    return super.height + this.lineWidth;
  }

  set width(width) {
    super.width = width;
  }

  set height(height) {
    super.height = height;
  }
}