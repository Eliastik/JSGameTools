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
  constructor(x, y, width, height, fontSize, fontFamily, backgroundColor, borderColor, borderColorHover, borderSize, fontColor, defaultText) {
    super(x, y, width, height);
    
    this.text = defaultText || "";
    this.fontSizeInitial = fontSize;
    this.fontSize = this.fontSizeInitial || Math.floor(Constants.Setting.FONT_SIZE / 1.25);
    this.fontFamily = fontFamily || Constants.Setting.FONT_FAMILY;
    this.fontColor = fontColor || "#000000";
    this.backgroundColor = backgroundColor || "#ffffff";
    this.borderColor = borderColor || "#000000";
    this.borderColorHover = borderColorHover || "#a2cdd8";
    this.borderSize = borderSize || 3;
    this.height = this.height == undefined ? this.fontSize + this.borderSize * 2 : this.height;

    this.positionStart = 0;
    this.positionEnd = 0;
    this.offsetX = 0;

    this.input = document.createElement("input");
    this.input.setAttribute("type", "text");
    this.input.style.position = "absolute";
    this.input.style.left = "-9999px";
    this.input.addEventListener("blur", () => this.selected = false);
    this.input.addEventListener("focus", () => this.selected = true);
    document.body.appendChild(this.input);

    super.addClickAction(() => this.click());
  }

  draw(context) {
    super.draw(context);
    
    const canvas = context.canvas;
    const ctx = canvas.getContext("2d");
    ctx.save();

    this.text = this.input.value;
    this.positionStart = this.input.selectionStart;
    this.positionEnd = this.input.selectionEnd;

    ctx.fillStyle = this.backgroundColor;
    ctx.fillRect(Math.round(this.x), Math.round(this.y), Math.round(this.width), Math.round(this.height));
      
    ctx.strokeStyle = this.selected ? this.borderColorHover : this.borderColor;
    ctx.lineWidth = this.borderSize;
    ctx.strokeRect(Math.round(this.x), Math.round(this.y), Math.round(this.width), Math.round(this.height));

    const canvasText = document.createElement("canvas");
    canvasText.width = canvas.width;
    canvasText.height = canvas.height;
    const ctxText = canvasText.getContext("2d");

    let currentX = this.x + 5;

    for(let i = -1; i < this.text.length; i++) {
      if(i > -1) {
        const sizes = Utils.drawText(ctxText, this.text[i], this.fontColor, this.fontSize, this.fontFamily, "default", "default", currentX - this.offsetX, this.y + this.fontSize, false);
        currentX += sizes["width"] + 1;
      }

      if(this.positionEnd == i + 1 && this.selected) {
        ctxText.strokeStyle = this.borderColor;
        ctxText.lineWidth = 1;
        ctxText.beginPath();
        ctxText.moveTo(currentX - this.offsetX, this.y + 3);
        ctxText.lineTo(currentX - this.offsetX, this.y + this.fontSize);
        ctxText.stroke();
        this.offsetX = Math.max(0, Math.round(currentX - this.x - this.width + 8));
      }
    }

    Utils.drawImageData(ctx, canvasText, this.x + this.borderSize, this.y + this.borderSize, this.width - this.borderSize * 2, this.height - this.borderSize * 2, this.x + this.borderSize, this.y + this.borderSize, this.width - this.borderSize * 2, this.height - this.borderSize * 2);

    if(this.hovered || this.clicked) {
      canvas.style.cursor = "text";
    }

    ctx.restore();
  }

  click() {
    this.input.focus();
  }
}