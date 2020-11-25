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
import Container from "./Container";
import Utils from "./Utils";

export default class Col extends Container {
  selectable = false;

  constructor(x, y, maxWidth, maxHeight, style, ...components) {
    super(x, y, maxWidth, maxHeight, style, ...components);
  }

  draw(context) {
    if(this.hidden) return;
    super.draw(context);

    const canvas = context.canvas;
    const ctx = canvas.getContext("2d");
    ctx.save();

    let ctxTemp = ctx;
    if(this.maxWidth || this.maxHeight) ctxTemp = this.canvasTmp.getContext("2d");
  
    if(super.components != null) {
      let currentY = this.style.padding;

      super.components.forEach(component => {
        currentY = this.drawComponent(component, currentY, ctxTemp);
      });
    }
    
    if(this.maxWidth || this.maxHeight) Utils.drawImageData(ctx, this.canvasTmp, this.x, this.y, this.width, this.height, this.x, this.y, this.width, this.height);
    super.drawScrollbars(ctx);
    
    ctx.restore();
  }

  drawComponent(component, currentY, ctx) {
    if(component instanceof Component) {
      component.x = this.style.padding - this.offsetScrollX;
      component.y = currentY - this.offsetScrollY;
      
      if(this.isComponentVisible(component)) {
        component.enable();
        component.draw(ctx);
      } else {
        component.disable();
      }
      
      currentY += component.height + this.style.spaceBetweenComponents;
    }
    
    return currentY;
  }

  get innerHeight() {
    let totalHeight = 0;
    super.components.forEach(component => totalHeight += component.height);
    return totalHeight + this.style.spaceBetweenComponents * (super.components.length - 1) + this.style.padding;
  }

  get innerWidth() {
    let maxWidth = 0;
    super.components.forEach(component => { if(component.width > maxWidth) maxWidth = component.width; });
    return maxWidth + this.style.padding;
  }

  get width() {
    const width = this.innerWidth || (this.parent && this.parent.width);
    const min = this.maxWidth ? Math.min(this.maxWidth, width) : null;
    return this.minWidth ? Math.max(this.minWidth, min || width) : min || width;
  }

  get height() {
    const height = this.innerHeight || (this.parent && this.parent.height);
    const min = this.maxHeight ? Math.min(this.maxHeight, height) : null;
    return this.minHeight ? Math.max(this.minHeight, min || height) : min || height;
  }

  get defaultStyle() {
    return super.defaultStyle;
  }
}