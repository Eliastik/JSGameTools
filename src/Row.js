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

export default class Row extends Container {
  selectable = false;

  constructor(x, y, alignement, verticalAlignement, padding, spaceBetweenComponents, disableAnimation, ...components) {
    super(x, y, null, null, alignement, verticalAlignement, padding, spaceBetweenComponents, disableAnimation, ...components);
  }

  draw(context) {
    const canvas = context.canvas;
    const ctx = canvas.getContext("2d");
    ctx.save();

    let ctxTemp;

    if(this.maxWidth || this.maxHeight) {
      this.canvasTmp.width = canvas.width;
      this.canvasTmp.height = canvas.height;
      ctxTemp = this.canvasTmp.getContext("2d");
      Utils.clear(ctxTemp);
    } else {
      ctxTemp = ctx;
    }
  
    if(super.components != null) {
      let currentX = (this.x + this.padding) || this.padding;

      super.components.forEach(component => {
        currentX = this.drawComponent(component, currentX, ctxTemp);
      });
    }

    if(this.maxWidth || this.maxHeight) Utils.drawImageData(ctx, this.canvasTmp, this.x, this.y, this.maxWidth, this.maxHeight, this.x, this.y, this.maxWidth, this.maxHeight);

    super.draw(ctx);
    ctx.restore();
  }

  drawComponent(component, currentX, ctx) {
    if(component instanceof Component) {
      component.x = currentX - this.offsetScrollX;
      if(this.y) component.y = (this.y + this.padding) - this.offsetScrollY;
      component.enable();
      component.draw(ctx);
      currentX += component.width + this.spaceBetweenComponents;
    }
    
    return currentX;
  }

  get height() {
    let maxHeight = 0;
    super.components.forEach(component => { if(component.height > maxHeight) maxHeight = component.height; });
    return maxHeight + this.padding;
  }

  get width() {
    let totalWidth = 0;
    super.components.forEach(component => totalWidth += component.width);
    return totalWidth + this.spaceBetweenComponents * (super.components.length - 1) + this.padding;
  }
}