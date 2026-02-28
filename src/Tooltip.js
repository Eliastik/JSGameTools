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
import Col from "./Col";
import Constants from "./Constants";
import Style from "./Style";

export default class Tooltip extends Col {
  selectable = false;
  
  constructor(style, ...components) {
    super(null, null, null, null, style, ...components);
    this.disabled = true;
  }

  draw(context) {
    if(this.hidden) return;
    const canvas = context.canvas;
    const ctx = canvas.getContext("2d");
    ctx.save();

    if(this.x + this.width + this.style.padding > this.parent.width) {
      this.x -= (this.width + this.style.padding);
    }

    if(this.y + this.height + this.style.padding > this.parent.height) {
      this.y -= (this.height + this.style.padding);
    }

    super.draw(ctx);
    
    ctx.restore();
  }

  get width() {
    return super.width + this.style.padding;
  }

  get height() {
    return super.height + this.style.padding;
  }

  set width(width) {
    super.width = width;
  }

  set height(height) {
    super.height = height;
  }

  get defaultStyle() {
    return new Style({
      "backgroundColor": Constants.Setting.TOOLTIP_DEFAULT_BACKGROUND
    });
  }

  compareToComponent(otherComponent) {
    return otherComponent.compareToTooltip(this);
  }

  // eslint-disable-next-line no-unused-vars
  compareToMenu(otherComponent) {
    return 1;
  }

  // eslint-disable-next-line no-unused-vars
  compareToTooltip(otherComponent) {
    return 0;
  }

  // eslint-disable-next-line no-unused-vars
  compareToNotification(otherComponent) {
    return 1;
  }

  get hidden() {
    return super.hidden || this.disabled;
  }

  set hidden(hidden) {
    super.hidden = hidden;
    this.disabled = hidden;
  }
}