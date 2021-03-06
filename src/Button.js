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
import Row from "./Row";
import Constants from "./Constants";
import Style from "./Style";

export default class Button extends Row {
  selectable = true;

  constructor(x, y, maxWidth, maxHeight, style, ...components) {
    super(x, y, maxWidth, maxHeight, style, ...components);
  }
  
  draw(context) {
    if(this.hidden) return;
    super.draw(context);

    const canvas = context.canvas;
    const ctx = canvas.getContext("2d");
    ctx.save();
    
    this.drawComponents(ctx);
    
    ctx.restore();
  }

  drawComponents(ctx) {
    super.draw(ctx);
  }

  get height() {
    return (this.maxHeight || super.height) + this.style.padding;
  }

  get width() {
    return (this.maxWidth || super.width) + this.style.padding;
  }

  get defaultStyle() {
    return new Style({
      "backgroundColor": Constants.Setting.BUTTON_DEFAULT_BACKGROUND,
      "backgroundColorHover": Constants.Setting.BUTTON_DEFAULT_HOVER_BACKGROUND,
      "backgroundColorDown": Constants.Setting.BUTTON_DEFAULT_CLICK_BACKGROUND,
      "scrollXDisabled": true,
      "scrollYDisabled": true
    });
  }
}