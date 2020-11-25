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

  constructor(x, y, maxWidth, maxHeight, style, ...components) {
    super(x, y, null, null, style);

    this.addAll(...components);
    this.canvasTmp = document.createElement("canvas");
    this.#_maxWidth = maxWidth;
    this.#_maxHeight = maxHeight;
    this.scrollbarHorizontal = new ScrollbarHorizontal(null, null, this);
    this.scrollbarVertical = new ScrollbarVertical(null, null, this);

    this.addScrollAction((deltaX, deltaY) => this.controlScrolling(deltaX, deltaY));
  }

  draw(context) {
    if(this.hidden) return;
    const canvas = context.canvas;
    const ctx = canvas.getContext("2d");
    ctx.save();

    if((this.maxWidth || this.maxHeight) && this.canvasTmp) {
      this.canvasTmp.width = canvas.width;
      this.canvasTmp.height = canvas.height;
      Utils.clear(this.canvasTmp.getContext("2d"));
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
    this.clear();
    this.addAll(...components);
    this.enable();
  }

  add(component) {
    this.#components.push(component);
    component.parent = this;
    if(this.canvas) component.canvas = this.canvas;
  }

  addAll(...components) {
    components.forEach(component => this.add(component));
  }

  remove(component) {
    this.#components = this.#components.filter(current => component != current);
  }

  clear() {
    this.#components = [];
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
    super.disable();
    this.#components.forEach(component => component && component.disable && component.disable());
  }

  enable() {
    super.enable();
    this.#components.forEach(component => component && component.enable && component.enable());
  }

  get width() {
    const width = (this.parent && this.parent.width);
    const min = this.maxWidth ? Math.min(this.maxWidth, width) : null;
    return this.minWidth ? Math.max(this.minWidth, min || width) : width;
  }

  get height() {
    const height = (this.parent && this.parent.height);
    const min = this.maxWidth ? Math.min(this.maxHeight, height) : null;
    return this.minHeight ? Math.max(this.minHeight, min || height) : height;
  }

  get maxWidth() {
    return this.#_maxWidth;
  }

  get maxHeight() {
    return this.#_maxHeight;
  }

  set maxWidth(maxWidth) {
    this.#_maxWidth = maxWidth;
  }

  set maxHeight(maxHeight) {
    this.#_maxHeight = maxHeight;
  }

  get minWidth() {
    return this.#_minWidth;
  }

  get minHeight() {
    return this.#_minHeight;
  }

  set minWidth(minWidth) {
    this.#_minWidth = minWidth;
  }

  set minHeight(minHeight) {
    this.#_minHeight = minHeight;
  }

  set canvas(canvas) {
    super.canvas = canvas;

    this.#components.forEach(component => {
      component.canvas = canvas;
    });
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
      const width = this.width;
      const height = this.height;
      const componentWidth = component.width;
      const componentHeight = component.height;

      if(component.x + componentWidth >= this.x && component.x <= this.x + width && component.y + componentHeight >= this.y && component.y <= this.y + height) {
        return true;
      }
    }

    return false;
  }

  get defaultStyle() {
    return new Style({
      "padding": 0,
      "spaceBetweenComponents": Constants.Setting.DEFAULT_SPACING
    });
  }
}