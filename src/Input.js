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
  #_positionStartClick = 0;
  #_positionEnd = 0;

  constructor(x, y, width, height, style, defaultText) {
    super(x, y, width, height, style);
    
    this.text = defaultText || "";
    this.#_positionStart = 0;
    this.#_positionEnd = 0;
    this.#_positionStartClick = 0;
    this.lastInputText = false;
    this.offsetX = 0;
    this.lastTime = 0;
    this.totalTime = 0;
    this.clickCurrentPosition = null;
    this.textCache = null;

    this.input = document.createElement("input");
    this.input.setAttribute("type", "text");
    this.input.style.position = "absolute";
    this.input.style.left = "-9999px";
    this.input.tabIndex = -1;
    this.input.addEventListener("blur", () => this.selected = false);
    this.input.addEventListener("focus", () => this.selected = true);
    this.input.addEventListener("input", () => {
      this.totalTime = 0
      this.lastInputText = true;
      this.positionStart = this.input.selectionStart;
      this.positionEnd = this.input.selectionEnd;
    });

    document.body.appendChild(this.input);

    this.appendToCanvas = false;
    this.noticeLogged = false;

    this.canvasTmp = document.createElement("canvas");

    this.addClickAction(() => this.click());
    this.addMoveAction((deltaX, deltaY, position) => {
      const iClick = this.getLetterClicked(position);

      if(iClick != null) {
        if(iClick > this.positionStartClick) {
          this.setSelectionRange(this.positionStartClick, iClick, "forward");
        } else if(iClick < this.positionStartClick) {
          this.setSelectionRange(iClick, this.positionStartClick, "backward");
        }
      }
    });

    this.addDownAction(position => {
      const iClick = this.getLetterClicked(position);

      if(iClick != null) {
        this.positionStartClick = iClick;
        this.setSelectionRange(iClick, iClick, "forward");
      }

      this.totalTime = 0;
    });
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

    this.updateTextCache(this.x + 5);
    this.autoScroll();
    this.drawText(ctxText, this.x + 5);

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
        const sizes = this.textCache.letters[i].sizes;

        const xDraw = currentX - this.offsetX;
        const yDraw = this.y + this.style.borderSize;

        if(this.isLetterVisible(i)) { // Don't draw the text if it is outside the input (overflow)
          if(this.positionStart != this.positionEnd && i >= this.positionStart && i < this.positionEnd) {
            this.drawHighlight(ctxText, currentX, sizes);
          }

          Utils.drawText(ctxText, this.text[i], this.style.fontColor, this.style.fontSize, this.style.fontFamily, "default", "default", xDraw, yDraw, false);
        }

        currentX += sizes["width"] + this.style.spaceBetweenComponents;
      }

      if(this.positionEnd == i + 1 && this.selected) {
        if(this.totalTime <= 500) {
          this.drawCursor(ctxText, currentX);
        } else if(this.totalTime > 1000) {
          this.totalTime = 0;
        }
      }
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

  updateTextCache(currentX) {
    const ctx = this.canvas ? this.canvas.getContext("2d") : null;

    if(Constants.Setting.DISABLE_OPTIMIZATIONS || !this.textCache || this.textCache.fontSize != this.style.fontSize || this.textCache.fontFamily != this.style.fontFamily || this.text != this.textCache.text || (ctx && ctx.canvas.width != this.textCache.canvasWidth)) {
      this.textCache = {
        "fontSize": this.style.fontSize,
        "fontFamily": this.style.fontFamily,
        "text": this.text,
        "canvasWidth": ctx.canvas.width,
        "letters": []
      };

      for(let i = 0; i < this.text.length; i++) {
        const sizes = Utils.wrapTextLines(ctx, this.text[i], this.width, this.style.fontSize, this.style.fontFamily, true);
        this.textCache.letters[i] = {"text": this.text[i], "currentX": currentX, "sizes": sizes }; 
        currentX += sizes["width"] + this.style.spaceBetweenComponents;
      }
    }
  }

  isClickCurrentPosition(position, currentX, sizes) {
    if(position.x + this.offsetX <= currentX + sizes["width"] + this.style.spaceBetweenComponents && position.x + this.offsetX >= currentX) {
      return true;
    }

    return false;
  }

  isClickAfterPosition(position, currentX, sizes) {
    if(position.x + this.offsetX >= currentX + sizes["width"] + this.style.spaceBetweenComponents) {
      return true;
    }

    return false;
  }

  getLetterClicked(position) {
    if(this.textCache) {
      for(let i = 0; i < this.text.length; i++) {
        const letter = this.textCache.letters[i];
        
        if(this.isClickCurrentPosition(position, Math.round(letter.currentX), letter.sizes)) {
          return i;
        } else if(i >= this.text.length - 1 && this.isClickAfterPosition(position, Math.round(letter.currentX), letter.sizes)) {
          return i + 1;
        }
      }
    }
  }

  get cursorPosition() {
    if(this.textCache) {
      let position = this.positionEnd - 1;

      if(this.positionEnd != this.positionStart && this.positionEnd == this.positionStartClick && this.positionStart < this.positionStartClick) {
        position = this.positionStart - 1;
      }
      
      if(position < 0) {
        return this.x + this.style.borderSize;
      }

      if(this.textCache.letters[position]) {
        const currentLetter = this.textCache.letters[position];
        return currentLetter.currentX + currentLetter.sizes["width"] + this.style.spaceBetweenComponents;
      }
    }
  }

  isLetterVisible(letterId) {
    if(this.textCache) {
      const letter = this.textCache.letters[letterId];

      if(letter) {
        const xDraw = letter.currentX - this.offsetX;
  
        if(xDraw >= this.x - letter.sizes["width"] && xDraw <= this.x + this.width) {
          return true;
        }
      }
    }

    return false;
  }

  autoScroll() {
    if(this.textCache) {
      const cursorPosition = this.cursorPosition;
      const offsetX = Math.max(0, Math.round(cursorPosition - this.x - this.width + this.style.borderSize + this.style.spaceBetweenComponents * 2));
      const offsetXNeg = Math.max(0, Math.round(cursorPosition - this.x - this.style.borderSize - this.style.spaceBetweenComponents * 2));

      if(cursorPosition - this.offsetX >= this.x + this.width - this.style.borderSize) {
        this.offsetX = offsetX;
      } else if(cursorPosition - this.offsetX <= this.x + this.style.borderSize) {
        this.offsetX = offsetXNeg;
      }
    }

    return false;
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

  get positionStartClick() {
    return this.#_positionStartClick;
  }

  get positionEnd() {
    return this.#_positionEnd;
  }

  set positionStart(position) {
    this.input.selectionStart = position;
    this.#_positionStart = position;
  }

  set positionStartClick(position) {
    this.#_positionStartClick = position;
  }

  set positionEnd(position) {
    this.input.selectionEnd = position;
    this.#_positionEnd = position;
  }

  setSelectionRange(start, end, direction) {
    this.input.setSelectionRange(start, end, direction);
    this.positionStart = start;
    this.positionEnd = end;
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
      "selectColor": Constants.Setting.INPUT_DEFAULT_SELECT_COLOR,
      "spaceBetweenComponents": 1
    });
  }
}