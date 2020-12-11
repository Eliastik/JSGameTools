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
import Style from "./Style";

export default class Circle extends Component {
  selectable = false;

  constructor(x, y, width, style) {
    super(x, y, width, width, style);
  }

  draw(context) {
    if(this.hidden) return;
    super.draw(context);

    const canvas = context.canvas;
    const ctx = canvas.getContext("2d");
    
    Utils.drawCircle(ctx, this.x, this.y, this.width, this.style.lineWidth, this.style.color, this.style.lineCap, this.style.fill, this.style.fillColor);

    this.init = true;
  }

  get width() {
    return super.width + this.style.lineWidth;
  }

  get height() {
    return super.height + this.style.lineWidth;
  }

  set width(width) {
    super.width = width;
    this.reactor.dispatchEvent("onChange", this);
  }

  set height(height) {
    super.height = height;
    this.reactor.dispatchEvent("onChange", this);
  }

  get defaultStyle() {
    return new Style({
      "lineWidth": Constants.Setting.CIRCLE_DEFAULT_LINE_SIZE,
      "color": Constants.Setting.CIRCLE_DEFAULT_COLOR,
      "fill": Constants.Setting.CIRCLE_DEFAULT_FILL,
      "lineCap": Constants.Setting.CIRCLE_DEFAULT_LINE_CAP,
      "fillColor": Constants.Setting.CIRCLE_DEFAULT_FILL_COLOR
    });
  }
}