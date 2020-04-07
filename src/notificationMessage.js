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
import { Button } from "./button";
import DrawUtils from "./drawUtils";

export default class NotificationMessage {
  constructor(text, textColor, backgroundColor, delayBeforeClosing, animationDelay, fontSize, fontFamily, foreGround, disableAnimation, closeButton) {
    this.text = text;
    this.textColor = textColor == undefined ? "rgba(255, 255, 255, 0.75)" : textColor;
    this.backgroundColor = backgroundColor == undefined ? "rgba(46, 204, 113, 0.5)" : backgroundColor;
    this.delayBeforeClosing = delayBeforeClosing == undefined ? 5 : delayBeforeClosing; // second
    this.fontSize = fontSize == undefined ? Math.floor(Constants.Setting.FONT_SIZE / 1.25) : fontSize;
    this.fontFamily = fontFamily == undefined ? Constants.Setting.FONT_FAMILY : fontFamily;
    this.animationDelay = animationDelay == undefined ? 500 : animationDelay;
    this.foreGround = foreGround == undefined ? false : foreGround;
    this.timeLastFrame = 0;
    this.animationTime = 0;
    this.init = false;
    this.closed = false;
    this.closing = false;
    this.disableAnimation = disableAnimation == undefined ? false : disableAnimation;
    this.closeButton = closeButton;
  }
  
  draw(context, closeButton) {
    if(this.text != null) {
      const canvas = context.canvas;
      const ctx = canvas.getContext("2d");

      ctx.save();
  
      if(!this.init) {
        this.timeLastFrame = Date.now();
      }
  
      this.closeButton = closeButton != null ? closeButton : this.closeButton;
      
      if(this.closeButton != null) {
        this.closeButton.addClickAction(() => {
          this.close();
        });
      }
  
      const offsetTime = Date.now() - this.timeLastFrame;
      this.timeLastFrame = Date.now();
  
      if(this.animationTime >= this.delayBeforeClosing * 1000 && !this.closing && !this.closed) {
        this.close();
      }
  
      this.fontSize = this.getFontSize(ctx) * 1.25;
  
      const heightText = DrawUtils.wrapTextLines(ctx, this.text, null, this.fontSize)["height"];
      const height = heightText + this.fontSize / 2;
      const width = canvas.width;
      let offsetY = 1;
  
      if(!this.closing) {
        this.animationTime += offsetTime;
      } else {
        if(this.disableAnimation) {
          this.animationTime = -1;
        } else {
          this.animationTime -= offsetTime;
        }
      }
  
      if(this.animationTime < 0) {
        this.closed = true;
        this.closing = false;
      }
  
      if(!this.closed) {
        if(!this.disableAnimation) {
          offsetY = this.animationTime / this.animationDelay;
        }
  
        const y = canvas.height - (height * (offsetY <= 1 ? offsetY : 1));
  
        ctx.fillStyle = this.backgroundColor;
        ctx.fillRect(0, y, width, height);
  
        DrawUtils.drawText(ctx, this.text, this.textColor, this.fontSize, this.fontFamily, "center", "default", null, y + this.fontSize, true);
  
        if(this.close != null && this.closeButton != null) {
          this.closeButton.y = y + 5;
        }
  
        if(this.closeButton != null) {
          this.closeButton.draw(ctx);
        }
  
        this.disableCloseButton();
      } else {
        this.disableCloseButton();
      }

      ctx.restore();
  
      this.init = true;
    }
  }
  
  close() {
    this.disableCloseButton();
  
    if(!this.closing) {
      this.closing = true;
      this.animationTime = this.animationDelay;
    }
  }
  
  open() {
    this.timeLastFrame = 0;
    this.animationTime = 0;
    this.init = false;
    this.closed = false;
    this.closing = false;
  }
  
  disableCloseButton() {
    if(this.closeButton != undefined && this.closeButton != null && this.closeButton instanceof Button) {
      this.closeButton.disable();
    }
  }
  
  enableCloseButton() {
    if(this.closeButton != undefined && this.closeButton != null && this.closeButton instanceof Button) {
      this.closeButton.enable();
    }
  };
  
  copy() {
    return new NotificationMessage(this.text, this.textColor, this.backgroundColor, this.delayBeforeClosing, this.animationDelay, this.fontSize, this.fontFamily, this.foreGround);
  }
  
  getFontSize(ctx) {
    return Math.floor(parseInt(ctx.font.match(/\d+/), 10) / 1.25);
  }
}