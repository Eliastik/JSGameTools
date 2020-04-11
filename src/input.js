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

export default class Input extends Component {
  constructor(x, y, width, height, fontSize, fontFamily, backgroundColor, borderColor, fontColor, defaultText) {
    super(x, y, width, height);
    
    this.text = defaultText || "";
    this.fontSizeInitial = fontSize;
    this.fontSize = this.fontSizeInitial || Math.floor(Constants.Setting.FONT_SIZE / 1.25);
    this.height = this.height == undefined ? this.fontSize + this.fontSize / 2 : this.height;
    this.fontFamily = fontFamily || Constants.Setting.FONT_FAMILY;
    this.fontColor = fontColor || "#000000";
    this.backgroundColor = backgroundColor || "#ffffff";
    this.borderColor = borderColor || "#000000";
    this.disabled = false;

    this.input = document.createElement("input");
    this.input.setAttribute("type", "text");
    this.input.style.position = "absolute";
    this.input.style.left = "-9999px";
    this.input.addEventListener("input", () => this.text = this.input.value);
    document.body.appendChild(this.input);

    super.triggerClick = this.click;
  }

  draw(context) {
    super.draw(context);
    
    const canvas = context.canvas;
    const ctx = canvas.getContext("2d");
    ctx.save();

    ctx.fillStyle = this.backgroundColor;
    ctx.fillRect(Math.round(this.x), Math.round(this.y), Math.round(this.width), Math.round(this.height));
      
    ctx.strokeStyle = this.borderColor;
    ctx.lineWidth = 3;
    ctx.strokeRect(Math.round(this.x), Math.round(this.y), Math.round(this.width), Math.round(this.height));
      
    Utils.drawText(ctx, this.text, this.fontColor, this.fontSize, this.fontFamily, "default", "default", this.x + 5, this.y + this.fontSize, false);

    ctx.restore();
  }

  click() {
    this.input.focus();
  }
}