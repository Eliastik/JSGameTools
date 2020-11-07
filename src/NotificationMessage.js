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
import Col from "./Col";
import Button from "./Button";
import Cross from "./Cross";

export default class NotificationMessage extends Col {
  selectable = false;

  constructor(backgroundColor, foreGround, verticalAlignement, delayBeforeClosing, animationDelay, disableAnimation, easingFunction, padding, spaceBetweenComponents, ...components) {
    super(0, 0, null, null, Constants.Alignement.CENTER, null, backgroundColor == undefined ? Constants.Setting.NOTIFICATION_DEFAULT_BACKGROUND : backgroundColor, null, null, padding ? padding : Constants.Setting.DEFAULT_PADDING, spaceBetweenComponents ? spaceBetweenComponents : Constants.Setting.DEFAULT_SPACING, disableAnimation, false, false, ...components);

    this.delayBeforeClosing = delayBeforeClosing == undefined ? 5 : delayBeforeClosing; // second
    this.animationDelay = animationDelay == undefined ? 500 : animationDelay;
    this.foreGround = foreGround == undefined ? false : foreGround;
    this.timeLastFrame = 0;
    this.animationTime = 0;
    this.closed = true;
    this.closing = false;
    this.easingFunction = easingFunction;
    this.verticalPosition = verticalAlignement || Constants.VerticalAlignement.BOTTOM;

    this.closeButton = new Button(null, null, null, null, null, null, null, "right", "top", 10, new Cross(null, null, 10, 10));
    this.add(this.closeButton);
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

      if(this.verticalPosition == Constants.VerticalAlignement.TOP) {
        this.y = (this.height * (offsetY <= 1 ? offsetY : 1)) - this.height;
      } else {
        this.y = canvas.height - (this.height * (offsetY <= 1 ? offsetY : 1));
      }

      this.drawComponents(ctx);

      if(this.closeButton != null) {
        this.closeButton.y = this.y + this.padding / 2;
        this.closeButton.draw(ctx);
      }

      this.enableCloseButton();
    } else {
      this.disableCloseButton();
    }

    ctx.restore();

    this.init = true;
  }
  
  drawComponents(ctx) {
    super.draw(ctx);
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
    return new NotificationMessage(this.backgroundColor, this.delayBeforeClosing, this.animationDelay, this.foreGround, this.disableAnimation, this.easingFunction, this.padding, ...this.components);
  }

  get width() {
    return this.canvas ? this.canvas.width : null;
  }

  get height() {
    return super.height - this.closeButton.height;
  }
}