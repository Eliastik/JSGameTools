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
import Component from "./Component";
import Constants from "./Constants";

export default class Container extends Component {
  selectable = false;
  #components = [];
  #_maxWidth = 0;
  #_maxHeight = 0;

  constructor(x, y, maxWidth, maxHeight, alignement, verticalAlignement, padding, spaceBetweenComponents, disableAnimation, ...components) {
    super(x, y, null, null, alignement, verticalAlignement, disableAnimation);

    this.addAll(...components);
    this.padding = padding ? padding : 0;
    this.spaceBetweenComponents = spaceBetweenComponents ? spaceBetweenComponents : Constants.Setting.DEFAULT_SPACING;
    this.canvasTmp = document.createElement("canvas");
    this.#_maxWidth = maxWidth;
    this.#_maxHeight = maxHeight;
    this.scrollBarColor = "rgb(149, 165, 166, 0.75)";

    this.addScrollAction((deltaX, deltaY) => {
      const scrollAreaSizeY = this.height - this.maxHeight;
      const scrollAreaSizeX = this.width - this.maxWidth;

      if(!this.scrollYDisabled) {
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

      if(!this.scrollXDisabled) {
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
    });
  }

  draw(context) {
    const canvas = context.canvas;
    const ctx = canvas.getContext("2d");
    ctx.save();
    
    this.components.forEach(component => {
      if(this.canvas) component.canvas = this.canvas;
    });

    super.draw(context);
    if(!this.scrollXDisabled) this.drawVerticalScrollBar(ctx);
    if(!this.scrollYDisabled) this.drawHorizontalScrollBar(ctx);

    ctx.restore();
  }

  drawVerticalScrollBar(ctx) {
    const maxHeight = this.maxHeight - Math.abs(Math.min(0, this.y));
    const contentRatio = maxHeight / this.height;
    const barHeight = maxHeight * contentRatio;
    const windowScrollSize = this.height - maxHeight;
    const percentScrollbar = this.offsetScrollY / windowScrollSize;
    const scrollAreaSize = maxHeight - barHeight;
    const yBar = scrollAreaSize * percentScrollbar;

    // Scrollbar drawing
    if(scrollAreaSize > 0) {
      ctx.fillStyle = this.scrollBarColor;
      ctx.fillRect(this.x + Math.min(this.width, this.maxWidth) - 10, Math.abs(this.y) + yBar, 10, barHeight);
    }
  }

  drawHorizontalScrollBar(ctx) {
    const maxWidth = this.maxWidth - Math.abs(Math.min(0, this.x));
    const contentRatio = maxWidth / this.width;
    const barWidth = maxWidth * contentRatio;
    const windowScrollSize = this.width - maxWidth;
    const percentScrollbar = this.offsetScrollX / windowScrollSize;
    const scrollAreaSize = maxWidth - barWidth;
    const xBar = scrollAreaSize * percentScrollbar;

    // Scrollbar drawing
    if(scrollAreaSize > 0) {
      ctx.fillStyle = this.scrollBarColor;
      ctx.fillRect(Math.abs(this.x) + xBar, this.y + Math.min(this.height, this.maxHeight) - 10, barWidth, 10);
    }
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
    this.#components.forEach(component => component.disable());
  }

  enable() {
    super.enable();
    this.#components.forEach(component => component.enable());
  }

  get width() {
    return this.parent.width;
  }

  get height() {
    return this.parent.height;
  }

  get maxWidth() {
    return (this.#_maxWidth || (this.canvas && this.canvas.width)) + Math.abs(Math.min(0, this.x));
  }

  get maxHeight() {
    return (this.#_maxHeight || (this.canvas && this.canvas.height)) + Math.abs(Math.min(0, this.y));
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
}