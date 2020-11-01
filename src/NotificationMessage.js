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
import { Button, ButtonImage } from "./Button";
import Utils from "./Utils";
import Col from "./Col";

export default class NotificationMessage extends Col {
  constructor(backgroundColor, delayBeforeClosing, animationDelay, foreGround, disableAnimation, easingFunction, ...components) {
    super(0, 0, Constants.Alignement.CENTER, null, disableAnimation, ...components);

    this.backgroundColor = backgroundColor == undefined ? "rgba(46, 204, 113, 0.5)" : backgroundColor;
    this.delayBeforeClosing = delayBeforeClosing == undefined ? 5 : delayBeforeClosing; // second
    this.animationDelay = animationDelay == undefined ? 500 : animationDelay;
    this.foreGround = foreGround == undefined ? false : foreGround;
    this.timeLastFrame = 0;
    this.animationTime = 0;
    this.closed = true;
    this.closing = false;
    this.easingFunction = easingFunction;

    this.closeButton = new ButtonImage(null, null, 5, "right", null, 32, 32);
    this.closeButton.image = new Image();
    this.closeButton.image.src = Constants.Setting.CLOSE_ICON;
    this.closeButton.canvas = this.canvas;
  }
  
  draw(context) {
    this.closeButton.canvas = this.canvas;

    const canvas = context.canvas;
    const ctx = canvas.getContext("2d");

    ctx.save();

    if(!this.init) {
      this.timeLastFrame = performance.now();
    }
    
    if(this.closeButton != null) {
      this.closeButton.setClickAction(() => {
        this.close();
      });
    }

    const offsetTime = performance.now() - this.timeLastFrame;
    this.timeLastFrame = performance.now();

    if(this.animationTime >= this.delayBeforeClosing * 1000 && !this.closing && !this.closed) {
      this.close();
    }

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

      if(this.easingFunction) {
        offsetY = this.easingFunction(offsetY);
      }

      this.y = canvas.height - (this.height * (offsetY <= 1 ? offsetY : 1));

      ctx.fillStyle = this.backgroundColor;
      ctx.fillRect(0, this.y, this.width, this.height);

      super.draw(ctx);

      if(this.closeButton != null) {
        this.closeButton.y = this.y + 5;
        this.closeButton.draw(ctx);
      }

      this.enableCloseButton();
    } else {
      this.disableCloseButton();
    }

    ctx.restore();

    this.init = true;
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

  get width() {
    return this.canvas ? this.canvas.width : null;
  }

  get height() {
    return super.height + 8;
  }
}