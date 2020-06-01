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
import Utils from "./Utils";
import Component from "./Component";

export default class Tooltip extends Component {
  constructor(text, fontSize, fontFamily, backgroundColor, fontColor, wrap, bold, underline) {
    super(0, 0, 0, 0);

    this.text = text;
    this.backgroundColor = backgroundColor || "rgba(255, 255, 255, 0.25)";
    this.fontColor = fontColor || "#FFFFFF";
    this.fontSize = fontSize || Constants.Setting.FONT_SIZE;
    this.fontFamily = fontFamily || Constants.Setting.FONT_FAMILY;
    this.wrap = wrap || true;
    this.bold = bold || false;
    this.underline = underline || false;
    this.disabled = true;
  }

  draw(context) {
    super.draw(context);

    if(!this.disabled) {
      const canvas = context.canvas;
      const ctx = canvas.getContext("2d");
      ctx.save();

      if(this.x + this.width + 10 > canvas.width) {
        this.x -= (this.width + 10);
      }

      if(this.y + this.height + 10 > canvas.height) {
        this.y -= (this.height + 10);
      }
  
      ctx.fillStyle = this.backgroundColor;
      ctx.fillRect(this.x, this.y, this.width + 10, this.height + 10);
  
      const sizes = Utils.drawText(ctx, this.text, this.fontColor, this.fontSize, this.fontFamily, null, null, this.x + 5, this.y + this.fontSize, this.wrap, this.bold, this.underline);
      this.width = sizes["width"];
      this.height = sizes["height"];
  
      ctx.restore();
    }
  }
}