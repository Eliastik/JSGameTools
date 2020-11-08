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

export default class Button extends Col {
  selectable = true;

  constructor(x, y, maxWidth, maxHeight, backgroundColor, backgroundColorHover, backgroundColorDown, alignement, verticalAlignement, padding, ...components) {
    super(x, y, maxWidth, maxHeight, alignement, verticalAlignement, backgroundColor || Constants.Setting.BUTTON_DEFAULT_BACKGROUND, backgroundColorHover || Constants.Setting.BUTTON_DEFAULT_HOVER_BACKGROUND, backgroundColorDown || Constants.Setting.BUTTON_DEFAULT_CLICK_BACKGROUND, padding ? padding : Constants.Setting.DEFAULT_PADDING, padding ? padding : Constants.Setting.DEFAULT_SPACING, false, true, true, ...components);
    this.autoWidth = (this.width == undefined ? true : false);
    this.autoHeight = (this.height == undefined ? true : false);
  }
  
  draw(context) {
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
    return super.height + this.padding;
  }

  get width() {
    return super.width + this.padding;
  }

  set width(width) {
    super.width = width;
    this.autoWidth = false;
  }

  set height(height) {
    super.height = height;
    this.autoHeight = false;
  }

  get maxWidth() {
    return super.maxWidth ? super.maxWidth : this.width;
  }

  get maxHeight() {
    return super.maxHeight ? super.maxHeight : this.height;
  }
}