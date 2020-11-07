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

  constructor(x, y, maxWidth, maxHeight, alignement, verticalAlignement, backgroundColor, backgroundColorHover, backgroundColorDown, padding, spaceBetweenComponents, disableAnimation, scrollXDisabled, scrollYDisabled, ...components) {
    super(x, y, maxWidth, maxHeight, alignement, verticalAlignement, backgroundColor, backgroundColorHover, backgroundColorDown, padding, spaceBetweenComponents, disableAnimation, scrollXDisabled, scrollYDisabled, ...components);
  }

  draw(context) {
    super.draw(context);

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
      let currentY = (this.y + this.padding) || this.padding;

      super.components.forEach(component => {
        currentY = this.drawComponent(component, currentY, ctxTemp);
      });
    }
    
    if(this.maxWidth || this.maxHeight) Utils.drawImageData(ctx, this.canvasTmp, this.x, this.y, this.maxWidth, this.maxHeight, this.x, this.y, this.maxWidth, this.maxHeight);
    super.drawScrollbars(ctx);
    
    ctx.restore();
  }

  drawComponent(component, currentY, ctx) {
    if(component instanceof Component) {
      if(this.x) component.x = (this.x + this.padding) - this.offsetScrollX;
      component.y = currentY - this.offsetScrollY;
      component.enable();
      component.draw(ctx);
      currentY += component.height + this.spaceBetweenComponents;
    }
    
    return currentY;
  }

  get height() {
    let totalHeight = 0;
    super.components.forEach(component => totalHeight += component.height);
    return totalHeight + this.spaceBetweenComponents * (super.components.length - 1) + this.padding;
  }

  get width() {
    let maxWidth = 0;
    super.components.forEach(component => { if(component.width > maxWidth) maxWidth = component.width; });
    return maxWidth + this.padding;
  }
}