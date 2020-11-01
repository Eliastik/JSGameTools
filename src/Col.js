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

export default class Col extends Container {
  selectable = false;

  constructor(x, y, alignement, verticalAlignement, disableAnimation, ...components) {
    super(x, y, null, null, alignement, verticalAlignement, disableAnimation, ...components);
  }

  draw(context) {
    super.draw(context);

    const canvas = context.canvas;
    const ctx = canvas.getContext("2d");
    ctx.save();
  
    if(super.components != null) {
      let currentY = this.y || 0;

      super.components.forEach(component => {
        if(component instanceof Component) {
          if(this.x) component.x = this.x + 5;
          component.y = currentY;
          component.enable();
          component.draw(ctx);
          currentY += component.height + 8;
        }
      });
    }
    
    ctx.restore();
  }

  get height() {
    let totalHeight = 0;
    super.components.forEach(component => totalHeight += component.height);
    return totalHeight;
  }

  get width() {
    let maxWidth = 0;
    super.components.forEach(component => { if(component.width > maxWidth) maxWidth = component.width; });
    return maxWidth;
  }
}