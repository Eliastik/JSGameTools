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

export default class Input extends Component {
  selectable = true;

  constructor(x, y, width, height, alignement, verticalAlignement, fontSize, fontFamily, backgroundColor, borderColor, borderColorHover, borderSize, fontColor, selectColor, defaultText) {
    super(x, y, width, height, alignement, verticalAlignement);
    
    this.text = defaultText || "";
    this.fontSizeInitial = fontSize;
    this.fontSize = this.fontSizeInitial || Math.floor(Constants.Setting.FONT_SIZE / 1.25);
    this.fontFamily = fontFamily || Constants.Setting.FONT_FAMILY;
    this.fontColor = fontColor || Constants.Setting.INPUT_DEFAULT_FONT_COLOR;
    this.backgroundColor = backgroundColor || Constants.Setting.INPUT_DEFAULT_BACKGROUND_COLOR;
    this.borderColor = borderColor || Constants.Setting.INPUT_DEFAULT_BORDER_COLOR;
    this.borderColorHover = borderColorHover || Constants.Setting.INPUT_DEFAULT_BORDER_COLOR_HOVER;
    this.selectColor = selectColor || Constants.Setting.INPUT_DEFAULT_SELECT_COLOR;
    this.borderSize = borderSize || 3;
    this.height = this.height == undefined ? this.fontSize + this.borderSize * 2 : this.height;

    this.positionStart = 0;
    this.positionEnd = 0;
    this.offsetX = 0;
    this.lastTime = 0;
    this.totalTime = 0;

    this.input = document.createElement("input");
    this.input.setAttribute("type", "text");
    this.input.style.position = "absolute";
    this.input.style.left = "-9999px";
    this.input.addEventListener("input", () => this.totalTime = 0);
    this.input.addEventListener("blur", () => this.selected = false);
    this.input.addEventListener("focus", () => this.selected = true);
    document.body.appendChild(this.input);

    this.appendToCanvas = false;
    this.noticeLogged = false;

    this.canvasTmp = document.createElement("canvas");

    super.addClickAction(() => this.click());
  }

  draw(context) {
    super.draw(context);
    
    const canvas = context.canvas;
    const ctx = canvas.getContext("2d");
    ctx.save();

    if(this.input.selectionEnd != this.positionEnd) this.totalTime = 0;

    if(this.canvas && this.canvas.container && !this.appendToCanvas) {
      document.body.removeChild(this.input);
      this.canvas.container.appendChild(this.input);
      this.appendToCanvas = true;
    } else if(!this.canvas && !this.noticeLogged) {
      console && console.warn && console.warn("Notice: the use of JSGameTools.Canvas is needed for Input components to properly work in fullscreen mode.");
      this.noticeLogged = true;
    }

    if(this.selected && !this.disabled) {
      this.click();
    } else {
      this.blur();
    }

    this.text = this.input.value;
    this.positionStart = this.input.selectionStart;
    this.positionEnd = this.input.selectionEnd;

    const time = performance.now();
    let offsetTime = 0;

    if(this.lastTime > 0) offsetTime = time - this.lastTime;
    this.lastTime = time;
    this.totalTime += offsetTime;

    ctx.fillStyle = this.backgroundColor;
    ctx.fillRect(Math.round(this.x), Math.round(this.y), Math.round(this.width), Math.round(this.height));
      
    ctx.strokeStyle = this.selected ? this.borderColorHover : this.borderColor;
    ctx.lineWidth = this.borderSize;
    ctx.strokeRect(Math.round(this.x), Math.round(this.y), Math.round(this.width), Math.round(this.height));

    this.canvasTmp.width = canvas.width;
    this.canvasTmp.height = canvas.height;
    const ctxText = this.canvasTmp.getContext("2d");

    let currentX = this.x + 5;

    for(let i = -1; i < this.text.length; i++) {
      if(i > -1) {
        const sizes = Utils.wrapTextLines(ctxText, this.text[i], this.width, this.fontSize, this.fontFamily, true);

        if(this.positionStart != this.positionEnd && i >= this.positionStart && i <= this.positionEnd) {
          ctxText.fillStyle = this.selectColor;
          ctxText.fillRect(currentX - this.offsetX, this.y + this.borderSize, sizes["width"] + 2, this.height - this.borderSize * 2);
        }
        
        Utils.drawText(ctxText, this.text[i], this.fontColor, this.fontSize, this.fontFamily, "default", "default", currentX - this.offsetX, this.y + this.borderSize, false);
        currentX += sizes["width"] + 1;
      }

      if(this.positionEnd == i + 1 && this.selected) {
        if(this.totalTime <= 500) {
          ctxText.strokeStyle = this.borderColor;
          ctxText.lineWidth = 1;
          ctxText.beginPath();
          ctxText.moveTo(currentX - this.offsetX, this.y + 3);
          ctxText.lineTo(currentX - this.offsetX, this.y + this.fontSize);
          ctxText.stroke();
        } else if(this.totalTime > 1000) {
          this.totalTime = 0;
        }

        this.offsetX = Math.max(0, Math.round(currentX - this.x - this.width + 8));
      }
    }

    Utils.drawImageData(ctx, this.canvasTmp, this.x + this.borderSize, this.y + this.borderSize, this.width - this.borderSize * 2, this.height - this.borderSize * 2, this.x + this.borderSize, this.y + this.borderSize, this.width - this.borderSize * 2, this.height - this.borderSize * 2);

    if(this.hovered || this.clicked) {
      canvas.style.cursor = "text";
    }

    if(!this.selected) {
      this.totalTime = 0;
    }

    ctx.restore();
  }

  click() {
    this.input.focus();
  }

  blur() {
    this.input.blur();
  }
}