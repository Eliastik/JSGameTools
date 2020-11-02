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
  selectable = false;

  constructor(backgroundColor, blurCanvas, ...components) {
    super(0, 0, null, Constants.VerticalAlignement.CENTER, null, null, false, ...components);

    this.backgroundColor = backgroundColor || Constants.Setting.MENU_DEFAULT_BACKGROUND;
    this.blurCanvas = blurCanvas || Constants.Setting.MENU_DEFAULT_BLUR_BACKGROUND;
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

      let keyAction = false;
    
      if(this.components != null) {
        if(this.lastKey == Constants.Key.UP) {
          this.select(this.selectedComponent - 1);
          keyAction = true;
        } else if(this.lastKey == Constants.Key.BOTTOM) {
          this.select(this.selectedComponent + 1);
          keyAction = true;
        } else if(this.lastKey == Constants.Key.ECHAP) {
          this.disable();
          keyAction = true;
        } else {
          this.components.forEach((component, i) => {
            if(component.selected) this.select(i);
          });
        }

        this.components.forEach((component, i) => {
          if(component instanceof Component) {
            if(keyAction) {
              if(this.selectedComponent == i) {
                if(component.selectable) {
                  component.selected = true;
                }
              } else {
                component.selected = false;
              }
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

  select(index) {
    this.selectedComponent = index;

    if(this.selectedComponent >= this.components.length) {
      this.selectedComponent = 0;
    } else if(this.selectedComponent < 0) {
      this.selectedComponent = this.components.length - 1;
    }

    if(this.components[this.selectedComponent] && !this.components[this.selectedComponent].selectable) {
      if(this.lastKey == Constants.Key.UP) {
        return this.select(this.selectedComponent - 1);
      } else if(this.lastKey == Constants.Key.BOTTOM) {
        return this.select(this.selectedComponent + 1);
      }
    }
  }

  get width() {
    return this.parent.width;
  }
}