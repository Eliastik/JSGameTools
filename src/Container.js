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
import Constants from "./Constants";
import ScrollbarHorizontal from "./ScrollbarHorizontal";
import ScrollbarVertical from "./ScrollbarVertical";
import Style from "./Style";

export default class Container extends Box {
  selectable = false;
  #components = [];
  #_maxWidth = 0;
  #_maxHeight = 0;

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
    const canvas = context.canvas;
    const ctx = canvas.getContext("2d");
    ctx.save();
    
    this.components.forEach(component => {
      if(this.canvas) component.canvas = this.canvas;
    });
    
    this.controlScrolling(0, 0);
    super.draw(context);

    ctx.restore();
  }

  drawVerticalScrollBar(ctx) {
    if(this.scrollbarVertical) this.scrollbarVertical.draw(ctx);
  }

  drawHorizontalScrollBar(ctx) {
    if(this.scrollbarHorizontal) this.scrollbarHorizontal.draw(ctx);
  }

  drawScrollbars(ctx) {
    if(!this.style.scrollXDisabled) this.drawVerticalScrollBar(ctx);
    if(!this.style.scrollYDisabled) this.drawHorizontalScrollBar(ctx);
  }

  set(...components) {
    this.clear();
    this.addAll(...components);
    this.enable();
  }

  add(component) {
    this.addAll(component);
  }

  addAll(...components) {
    components.forEach(component => {
      this.#components.push(component);
      component.parent = this;
      if(super.canvas) component.canvas = super.canvas;
    });
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

  disable() {
    super.disable();
    this.#components.forEach(component => component && component.disable && component.disable());
  }

  enable() {
    super.enable();
    this.#components.forEach(component => component && component.enable && component.enable());
  }

  get width() {
    return this.parent.width;
  }

  get height() {
    return this.parent.height;
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

  set canvas(canvas) {
    super.canvas = canvas;

    this.#components.forEach(component => {
      component.canvas = canvas;
    });
  }

  get canvas() {
    return super.canvas;
  }

  controlScrolling(deltaX, deltaY) {
    const scrollAreaSizeY = this.height - this.maxHeight;
    const scrollAreaSizeX = this.width - this.maxWidth;

    if(!this.style.scrollYDisabled) {
      if(scrollAreaSizeY <= 0) {
        this.offsetScrollY = 0;
      } else {
        const percentScrollbarY = this.offsetScrollY / scrollAreaSizeY;
  
        if(percentScrollbarY <= 0 && deltaY < 0) {
          this.offsetScrollY = Math.min(0, this.y);
        } else if(percentScrollbarY > 1 && deltaY > 0) {
          this.offsetScrollY = scrollAreaSizeY;
        }
      }
    } else {
      this.offsetScrollY -= deltaY;
    }

    if(!this.style.scrollXDisabled) {
      if(scrollAreaSizeX <= 0) {
        this.offsetScrollX = 0;
      } else {
        const percentScrollbarX = this.offsetScrollX / scrollAreaSizeX;
  
        if(percentScrollbarX <= 0 && deltaX < 0) {
          this.offsetScrollX = Math.min(0, this.x);
        } else if(percentScrollbarX > 1 && deltaX > 0) {
          this.offsetScrollX = scrollAreaSizeX;
        }
      }
    } else {
      this.offsetScrollX -= deltaX;
    }
  }

  get defaultStyle() {
    return new Style({
      "padding": 0,
      "spaceBetweenComponents": Constants.Setting.DEFAULT_SPACING
    });
  }
}