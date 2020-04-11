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
import Constants from "./constants";
import Utils from "./utils";
import Component from "./component";

export default class Label extends Component {
  constructor(text, x, y, color, size, fontFamily, alignement, verticalAlignement, wrap, bold, underline) {
    super(x, y, 0, 0);

    this.text = text;
    this.color = color || "#000000";
    this.size = size || Constants.Setting.FONT_SIZE;
    this.fontFamily = fontFamily || Constants.Setting.FONT_FAMILY;
    this.alignement = alignement || "default";
    this.verticalAlignement = verticalAlignement || "default";
    this.wrap = wrap || true;
    this.bold = bold || false;
    this.underline = underline || false;
  }

  draw(context) {
    super.draw(context);
    
    const canvas = context.canvas;
    const ctx = canvas.getContext("2d");
    ctx.save();

    const sizes = Utils.drawText(ctx, this.text, this.color, this.size, this.fontFamily, this.alignement, this.verticalAlignement, this.initialX, this.initialY, this.wrap, this.bold, this.underline);

    this.x = sizes["x"];
    this.y = sizes["y"];
    this.height = sizes["height"];
    this.width = sizes["width"];

    ctx.restore();
  }
}