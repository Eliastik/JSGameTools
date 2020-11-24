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
import Style from "./Style";

export default class Menu extends Col {
  selectable = false;

  constructor(style, ...components) {
    super(0, 0, null, null, style, ...components);

    this.lastKey = this.lastKey == undefined ? -1 : this.lastKey;
    this.selectedComponent = this.selectedComponent == undefined ? 0 : this.selectedComponent;

    this.disable();
  }

  draw(context) {
    if(this.hidden) return;
    const canvas = context.canvas;
    const ctx = canvas.getContext("2d");

    if(this.style.blurBackground) {
      this.drawBlur(ctx);
    }

    ctx.save();

    this.drawComponents(ctx);

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

              if(!this.isComponentVisible(component)) {
                const componentHeight = component.height;
                const deltaY = (this.maxHeight - this.offsetScrollY) - (component.y + componentHeight);
                this.offsetScrollY = -deltaY;

                this.controlScrolling(null, -deltaY);
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
    this.lastKey = -1;
  }

  drawComponents(ctx) {
    super.draw(ctx);
  }

  drawBlur(ctx) {
    Utils.blurCanvas(ctx, 5);
  }

  drawBackground(ctx) {
    ctx.fillStyle = this.style.backgroundColor;
    ctx.fillRect(this.parent ? this.parent.x : 0, this.parent ? this.parent.y : 0, this.maxWidth, this.maxHeight);
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

  get height() {
    return this.innerHeight || this.parent.height;
  }

  get scrollAreaSizeX() {
    return this.innerWidth - this.maxWidth;
  }

  get scrollAreaSizeY() {
    return this.innerHeight - this.maxHeight;
  }

  get maxHeight() {
    return super.maxHeight || (this.canvas && this.canvas.scene && this.canvas.scene.height);
  }

  get maxWidth() {
    return (this.canvas && this.canvas.scene && this.canvas.scene.width);
  }

  get y() {
    return Math.max(0, super.y);
  }

  get defaultStyle() {
    return new Style({
      "blurBackground": Constants.Setting.MENU_DEFAULT_BLUR_BACKGROUND,
      "backgroundColor": Constants.Setting.MENU_DEFAULT_BACKGROUND,
      "verticalAlignement": Constants.VerticalAlignement.CENTER,
      "scrollXDisabled": true
    });
  }

  compareToComponent(otherComponent) {
    return otherComponent.compareToMenu(this);
  }

  compareToMenu(otherComponent) {
    return 0;
  }

  compareToTooltip(otherComponent) {
    return -1;
  }

  compareToNotification(otherComponent) {
    return 1;
  }

  get hidden() {
    return super.hidden || this.disabled;
  }

  set hidden(hidden) {
    super.hidden = hidden;
    this.disabled = hidden;
  }
}