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

export default class Arrow extends Component {
  selectable = false;

  constructor(x, y, toX, toY, lineWidth, headSize, color, alignement, verticalAlignement) {
    super(x, y, null, null, alignement, verticalAlignement);

    this.toX = toX;
    this.toY = toY;
    this.lineWidth = lineWidth || Constants.Setting.ARROW_DEFAULT_LINE_SIZE;
    this.headSize = headSize || Constants.Setting.ARROW_DEFAULT_HEAD_SIZE;
    this.color = color || Constants.Setting.ARROW_DEFAULT_COLOR;
  }

  draw(context) {
    super.draw(context);

    const canvas = context.canvas;
    const ctx = canvas.getContext("2d");
    
    Utils.drawArrow(ctx, this.x, this.y, this.toX, this.toY, this.lineWidth, this.headSize, this.color);

    this.init = true;
  }

  get width() {
    return Math.abs(this.x - this.toX);
  }

  get height() {
    return Math.abs(this.y - this.toY);
  }
}