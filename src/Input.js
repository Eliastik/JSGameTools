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
import Box from "./Box";
import Style from "./Style";

export default class Input extends Box {
  selectable = true;
  #_positionStart = 0;
  #_positionEnd = 0;

  constructor(x, y, width, height, style, defaultText) {
    super(x, y, width, height, style);
    
    this.text = defaultText || "";
    this.#_positionStart = 0;
    this.#_positionEnd = 0;
    this.offsetX = 0;
    this.lastTime = 0;
    this.totalTime = 0;
    this.clickStartPosition = null;
    this.clickStopPosition = null;

    this.input = document.createElement("input");
    this.input.setAttribute("type", "text");
    this.input.style.position = "absolute";
    this.input.style.left = "-9999px";
    this.input.tabIndex = -1;
    this.input.addEventListener("input", () => this.totalTime = 0);
    this.input.addEventListener("blur", () => this.selected = false);
    this.input.addEventListener("focus", () => this.selected = true);
    document.body.appendChild(this.input);

    this.appendToCanvas = false;
    this.noticeLogged = false;

    this.canvasTmp = document.createElement("canvas");

    this.addClickAction(() => this.click());
    this.addDownAction(position => this.clickStartPosition = position);
    this.addUpAction(position => this.clickStopPosition = position);
  }

  draw(context) {
    if(this.style && this.style.hidden) return;
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

    this.drawBackground(ctx);
    this.drawBorder(ctx);

    this.canvasTmp.width = canvas.width;
    this.canvasTmp.height = canvas.height;
    const ctxText = this.canvasTmp.getContext("2d");
    Utils.clear(ctxText);

    let currentX = this.x + 5;

    currentX = this.drawText(ctxText, currentX);

    Utils.drawImageData(ctx, this.canvasTmp, this.x + this.style.borderSize, this.y + this.style.borderSize, this.width - this.style.borderSize * 2, this.height - this.style.borderSize * 2, this.x + this.style.borderSize, this.y + this.style.borderSize, this.width - this.style.borderSize * 2, this.height - this.style.borderSize * 2);

    if(this.hovered || this.clicked) {
      if(this.canvas && this.canvas.canvas) {
        this.canvas.canvas.style.cursor = "text";
      } else {
        canvas.style.cursor = "text";
      }
    }

    if(!this.selected) {
      this.totalTime = 0;
    }

    ctx.restore();
  }

  drawText(ctxText, currentX) {
    for(let i = -1; i < this.text.length; i++) {
      if(i > -1) {
        const sizes = Utils.wrapTextLines(ctxText, this.text[i], this.width, this.style.fontSize, this.style.fontFamily, true);

        const xDraw = currentX - this.offsetX;
        const yDraw = this.y + this.style.borderSize;

        if(xDraw >= this.x - sizes["width"] && xDraw <= this.x + this.width) { // Don't draw the text if it is outside the input (overflow)
          if(this.positionStart != this.positionEnd && i >= this.positionStart && i <= this.positionEnd) {
            this.drawHighlight(ctxText, currentX, sizes);
          }

          if(this.clickStopPosition) {
            if(this.clickStopPosition.x + this.offsetX >= currentX && this.clickStopPosition.x + this.offsetX <= currentX + sizes["width"] + 1) {
              this.positionStart = i;
              this.positionEnd = i;
              this.clickStopPosition = null;
            }
          }

          Utils.drawText(ctxText, this.text[i], this.style.fontColor, this.style.fontSize, this.style.fontFamily, "default", "default", xDraw, yDraw, false);
        }

        currentX += sizes["width"] + 1;
      }

      if(this.positionEnd == i + 1 && this.selected) {
        if(this.totalTime <= 500) {
          this.drawCursor(ctxText, currentX);
        } else if(this.totalTime > 1000) {
          this.totalTime = 0;
        }
        
        this.offsetX = Math.max(0, Math.round(currentX - this.x - this.width + 8));
      }
    }

    if(this.clickStopPosition && this.clickStopPosition.x > currentX) {
      this.positionStart = this.text.length + 1;
      this.positionEnd = this.text.length + 1;
      this.clickStopPosition = null;
    }

    return currentX;
  }

  drawCursor(ctxText, currentX) {
    ctxText.strokeStyle = this.style.borderColor;
    ctxText.lineWidth = 1;
    ctxText.beginPath();
    ctxText.moveTo(currentX - this.offsetX, this.y + 3);
    ctxText.lineTo(currentX - this.offsetX, this.y + this.style.fontSize);
    ctxText.stroke();
  }

  drawHighlight(ctxText, currentX, sizes) {
    ctxText.fillStyle = this.style.selectColor;
    ctxText.fillRect(currentX - this.offsetX, this.y + this.style.borderSize, sizes["width"] + 2, this.height - this.style.borderSize * 2);
  }

  click() {
    this.input.focus();
  }

  blur() {
    this.input.blur();
  }

  get positionStart() {
    return this.#_positionStart;
  }

  get positionEnd() {
    return this.#_positionEnd;
  }

  set positionStart(position) {
    this.input.selectionStart = position;
    this.#_positionStart = position;
  }

  set positionEnd(position) {
    this.input.selectionEnd = position;
    this.#_positionEnd = position;
  }

  get height() {
    return super.height ? super.height : this.style.fontSize + this.style.borderSize * 2;
  }

  get defaultStyle() {
    return new Style({
      "fontSize": Math.floor(Constants.Setting.FONT_SIZE / 1.25),
      "fontFamily": Constants.Setting.FONT_FAMILY,
      "fontColor": Constants.Setting.INPUT_DEFAULT_FONT_COLOR,
      "backgroundColor": Constants.Setting.INPUT_DEFAULT_BACKGROUND_COLOR,
      "borderColor": Constants.Setting.INPUT_DEFAULT_BORDER_COLOR,
      "borderColorSelected": Constants.Setting.INPUT_DEFAULT_BORDER_COLOR_SELECTED,
      "selectColor": Constants.Setting.INPUT_DEFAULT_SELECT_COLOR
    });
  }
}