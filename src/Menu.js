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
import Col from "./Col";

export default class Menu extends Col {
  constructor(backgroundColor, blurCanvas, ...components) {
    super(0, 0, null, Constants.VerticalAlignement.CENTER, false, ...components);

    this.backgroundColor = backgroundColor || "rgba(44, 62, 80, 0.75)";
    this.blurCanvas = blurCanvas || false;
    this.lastKey = this.lastKey == undefined ? -1 : this.lastKey;
    this.selectedComponent = this.selectedComponent == undefined ? 0 : this.selectedComponent;

    this.disable();
  }

  draw(context) {
    const canvas = context.canvas;
    const ctx = canvas.getContext("2d");

    if(!this.disabled) {
      if(this.blurCanvas) {
        Utils.blurCanvas(ctx, 5);
      }
  
      ctx.save();
  
      ctx.font = this.fontSize + "px " + this.fontFamily;
      ctx.fillStyle = this.backgroundColor;
      ctx.fillRect(0, 0, ctx.canvas.width, ctx.canvas.height);
  
      super.draw(ctx);

      if(!this.init) {
        document.addEventListener("keydown", event => {
          if(!this.disabled) {
            this.lastKey = event.keyCode;
          }
        });
  
        this.init = true;
      }
    
      if(this.components != null) {
        if(this.lastKey == Constants.Key.UP) {
          this.selectedComponent--;
        } else if(this.lastKey == Constants.Key.BOTTOM) {
          this.selectedComponent++;
        } else if(this.lastKey == Constants.Key.ECHAP) {
          this.disable();
        }
    
        if(this.selectedComponent >= this.components.length) {
          this.selectedComponent = 0;
        } else if(this.selectedComponent < 0) {
          this.selectedComponent = this.components.length - 1;
        }

        this.components.forEach((component, i) => {
          if(component instanceof Component) {
            if(this.selectedComponent == i) {
              component.selected = true;
            } else {
              component.selected = false;
            }
      
            if(this.selectedComponent == i && this.lastKey == Constants.Key.ENTER && component.triggersClick != null && component.triggersClick.length > 0 && !component.disabled) {
              this.lastKey = -1;
              this.selectedComponent = 0;
              component.triggersClick.forEach(trigger => trigger());
              return;
            }
          }
        });
      }
      
      ctx.restore();
    }
  
    this.lastKey = -1;
  }

  disable() {
    super.disable();
    this.components.forEach(component => component && component.disable && component.disable());
  }

  enable() {
    super.enable();
    this.components.forEach(component => component && component.enable && component.enable());
  }
}