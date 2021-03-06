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
import Style from "./Style";
import Utils from "./Utils";

export default class Arrow extends Component {
  selectable = false;

  constructor(x, y, toX, toY, style) {
    super(x, y, null, null, style);

    this.toX = toX;
    this.toY = toY;
  }

  draw(context) {
    if(this.hidden) return;
    super.draw(context);

    const canvas = context.canvas;
    const ctx = canvas.getContext("2d");
    
    Utils.drawArrow(ctx, this.x, this.y, this.toX, this.toY, this.style.lineWidth, this.style.headSize, this.style.color, this.style.lineCap);

    this.init = true;
  }

  get width() {
    return Math.abs(this.x - this.toX);
  }

  get height() {
    return Math.abs(this.y - this.toY);
  }

  get defaultStyle() {
    return new Style({
      "lineWidth": Constants.Setting.ARROW_DEFAULT_LINE_SIZE,
      "headSize": Constants.Setting.ARROW_DEFAULT_HEAD_SIZE,
      "color": Constants.Setting.ARROW_DEFAULT_COLOR,
      "lineCap": Constants.Setting.ARROW_DEFAULT_LINE_CAP
    });
  }
}