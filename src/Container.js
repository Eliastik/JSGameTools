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
import Box from "./Box";
import Component from "./Component";
import Constants from "./Constants";
import ScrollbarHorizontal from "./ScrollbarHorizontal";
import ScrollbarVertical from "./ScrollbarVertical";
import Style from "./Style";
import Utils from "./Utils";

export default class Container extends Box {
  selectable = false;
  #components = [];
  #_maxWidth = 0;
  #_maxHeight = 0;
  #_minWidth = 0;
  #_minHeight = 0;
  eventChangeCallback = () => this.reactor.dispatchEvent("onChange", this);

  constructor(x, y, maxWidth, maxHeight, style, ...components) {
    super(x, y, null, null, style);

    this.addAll(...components);
    this.canvasTmp = document.createElement("canvas");
    this.#_maxWidth = maxWidth;
    this.#_maxHeight = maxHeight;
    this.scrollbarHorizontal = new ScrollbarHorizontal(null, null, this);
    this.scrollbarVertical = new ScrollbarVertical(null, null, this);

    this.addScrollAction((deltaX, deltaY) => this.controlScrolling(deltaX, deltaY));

    if(!Constants.Setting.DISABLE_EXPERIMENTAL_OPTIMIZATIONS) {
      this.addChangeAction(componentChanged => {
        componentChanged == this.parent && this.components.forEach(component => component && component.reactor.dispatchEvent("onChange", this));
      });
    }
  }

  draw(context) {
    if(this.hidden) return;
    const canvas = context.canvas;
    const ctx = canvas.getContext("2d");
    ctx.save();

    if(this.isCutting) {
      const ctxTemp = this.canvasTmp.getContext("2d");
      this.canvasTmp.width = Utils.getCanvasWidth(canvas) * Constants.Setting.PIXEL_RATIO;
      this.canvasTmp.height = Utils.getCanvasHeight(canvas) * Constants.Setting.PIXEL_RATIO;
      this.canvasTmp.style.width = Utils.getCanvasWidth(canvas);
      this.canvasTmp.style.height = Utils.getCanvasHeight(canvas);
      Utils.clear(ctxTemp);
    }
    
    this.components.forEach(component => {
      if(this.canvas) component.canvas = this.canvas;
    });
    
    this.controlScrolling(0, 0);
    super.draw(context);

    ctx.restore();
  }

  drawVerticalScrollBar(ctx) {
    if(this.scrollbarVertical) {
      this.scrollbarVertical.canvas = this.canvas;
      this.scrollbarVertical.draw(ctx);
    }
  }

  drawHorizontalScrollBar(ctx) {
    if(this.scrollbarHorizontal) {
      this.scrollbarHorizontal.canvas = this.canvas;
      this.scrollbarHorizontal.draw(ctx);
    }
  }

  drawScrollbars(ctx) {
    if(!this.style.scrollXDisabled) this.drawHorizontalScrollBar(ctx);
    if(!this.style.scrollYDisabled) this.drawVerticalScrollBar(ctx);
  }

  set(...components) {
    let hasChanged = false;

    if(components.length == this.components.length) {
      components.forEach((component, i) => {
        if(this.components[i] != component) hasChanged = true;
      });
    } else {
      hasChanged = true;
    }

    if(hasChanged) {
      this.clear();
      this.addAll(...components);
    }
  }

  add(component) {
    this.#components.push(component);
    component.parent = this;
    if(this.canvas) component.canvas = this.canvas;
    component.addChangeAction(this.eventChangeCallback);
    this.reactor.dispatchEvent("onChange", this);
  }

  addAll(...components) {
    components.forEach(component => this.add(component));
  }

  remove(component) {
    if(this.#components.indexOf(component) != -1) {
      component.removeChangeAction(this.eventChangeCallback);
      this.#components = this.#components.filter(current => component != current);
      this.reactor.dispatchEvent("onChange", this);
    }
  }

  clear() {
    this.#components.forEach(component => this.remove(component));
    this.reactor.dispatchEvent("onChange", this);
  }

  get components() {
    const components = [];
    this.#components.forEach(component => components.push(component));
    return components;
  }

  get allComponents() {
    const components = this.components;
    components.push(this.scrollbarHorizontal);
    components.push(this.scrollbarVertical);
    return components;
  }

  getComponentsTree(start = this) {
    const components = {
      "component": start,
      "childs": []
    };

    if(start.allComponents) {
      start.allComponents.forEach(component => components.childs.push(this.getComponentsTree(component)));
    }

    return components;
  }

  static sortComponentsTree(component, other) {
    return component.component.compareTo(other.component);
  }

  disable() {
    let changed = super.disable();

    this.#components.forEach(component => {
      if(component && component.disable && component.disable()) {
        changed = true;
      }
    });

    if(changed) this.reactor.dispatchEvent("onChange", this);
  }

  enable() {
    let changed = super.enable();

    this.#components.forEach(component => {
      if(component && component.enable && component.enable()) {
        changed = true;
      }
    });

    if(changed) this.reactor.dispatchEvent("onChange", this);
  }

  get width() {
    const width = (this.parent && this.parent.width);
    const min = this.maxWidth != null ? Math.min(this.maxWidth, width) : null;
    return this.minWidth != null ? Math.max(this.minWidth, min != null ? min : width) : width;
  }

  get height() {
    const height = (this.parent && this.parent.height);
    const min = this.maxWidth != null ? Math.min(this.maxHeight, height) : null;
    return this.minHeight != null ? Math.max(this.minHeight, min != null ? min : height) : height;
  }

  get maxWidth() {
    return this.#_maxWidth;
  }

  get maxHeight() {
    return this.#_maxHeight;
  }

  set maxWidth(maxWidth) {
    if(maxWidth != this.#_maxWidth) {
      this.#_maxWidth = maxWidth;
      this.reactor.dispatchEvent("onChange", this);
    }
  }

  set maxHeight(maxHeight) {
    if(maxHeight != this.#_maxHeight) {
      this.#_maxHeight = maxHeight;
      this.reactor.dispatchEvent("onChange", this);
    }
  }

  get minWidth() {
    return this.#_minWidth;
  }

  get minHeight() {
    return this.#_minHeight;
  }

  set minWidth(minWidth) {
    if(minWidth != this.#_minWidth) {
      this.#_minWidth = minWidth;
      this.reactor.dispatchEvent("onChange", this);
    }
  }

  set minHeight(minHeight) {
    if(minHeight != this.#_minHeight) {
      this.#_minHeight = minHeight;
      this.reactor.dispatchEvent("onChange", this);
    }
  }

  updateInnerHeight() { }

  updateInnerWidth() { }

  set canvas(canvas) {
    if(canvas != this.canvas) {
      super.canvas = canvas;
  
      this.#components.forEach(component => {
        component.canvas = canvas;
        if(component.reactor) component.reactor.dispatchEvent("onChange", this);
      });
  
      this.reactor.dispatchEvent("onChange", this);
    }
  }

  get canvas() {
    return super.canvas;
  }

  getComponentId(component) {
    let result = null;

    this.#components.forEach((c, i) => {
      if(c == component) result = i;
    });

    return result;
  }

  get scrollAreaSizeX() {
    return this.innerWidth - this.width;
  }

  get scrollAreaSizeY() {
    return this.innerHeight - this.height;
  }

  controlScrolling(deltaX, deltaY) {
    if(!this.style.scrollYDisabled) {
      if(this.scrollAreaSizeY <= 0) {
        this.offsetScrollY = 0;
      } else {
        const percentScrollbarY = this.offsetScrollY / this.scrollAreaSizeY;
  
        if(percentScrollbarY <= 0 && deltaY <= 0) {
          this.offsetScrollY = Math.min(0, this.y);
        } else if(percentScrollbarY > 1 && deltaY >= 0) {
          this.offsetScrollY = this.scrollAreaSizeY;
        }
      }
    } else {
      this.offsetScrollY -= deltaY;
    }

    if(!this.style.scrollXDisabled) {
      if(this.scrollAreaSizeX <= 0) {
        this.offsetScrollX = 0;
      } else {
        const percentScrollbarX = this.offsetScrollX / this.scrollAreaSizeX;
  
        if(percentScrollbarX <= 0 && deltaX <= 0) {
          this.offsetScrollX = Math.min(0, this.x);
        } else if(percentScrollbarX > 1 && deltaX >= 0) {
          this.offsetScrollX = this.scrollAreaSizeX;
        }
      }
    } else {
      this.offsetScrollX -= deltaX;
    }
  }

  isComponentVisible(component) {
    if(Constants.Setting.DISABLE_OPTIMIZATIONS) return true;
    
    if(component instanceof Component && !component.hidden) {
      if(!Constants.Setting.DISABLE_IS_COMPONENT_VISIBLE_OPTIMIZATIONS && this.parent && this.parent.isComponentVisible && !this.parent.isComponentVisible(component)) {
        return false;
      }

      const width = this.width;
      const height = this.height;
      const componentWidth = component.width;
      const componentHeight = component.height;
      const canvasWidth = (this.canvas && this.canvas.width) || width;
      const canvasHeight = (this.canvas && this.canvas.height) || height;

      if(component.x + componentWidth >= this.x && component.x <= this.x + width && component.y + componentHeight >= this.y && component.y <= this.y + height && component.x + componentWidth >= 0 && component.x <= canvasWidth && component.y + componentHeight >= 0 && component.y <= canvasHeight) {
        return true;
      }
    }

    return false;
  }

  get isCutting() {
    return !Constants.Setting.DISABLE_CONTAINERS_CUTTING && (((this.maxWidth && this.innerWidth > this.maxWidth) || (this.maxHeight && this.innerHeight > this.maxHeight))) && this.canvasTmp != null;
  }

  get defaultStyle() {
    return new Style({
      "padding": 0,
      "spaceBetweenComponents": Constants.Setting.DEFAULT_SPACING
    });
  }
}