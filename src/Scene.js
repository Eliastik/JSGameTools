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
import Input from "./Input";
import Container from "./Container";
import Utils from "./Utils";
import Style from "./Style";
import Constants from "./Constants";

export default class Scene extends Container {
  selectable = false;
  enableEvents = false;

  constructor(...components) {
    super();
    this.addAll(...components);
  }

  draw(context) {
    if(this.hidden) return;
    super.draw(context);

    const canvas = context.canvas;
    const ctx = canvas.getContext("2d");
    ctx.save();
    canvas.style.cursor = "default";

    let ctxTemp = ctx;
    if(this.maxWidth || this.maxHeight) ctxTemp = this.canvasTmp.getContext("2d");

    const inputs = super.components.filter(component => component && component instanceof Input);
    inputs && inputs.forEach(input => input.canvas = this.canvas); // Set inputs canvas
    this.drawComponents(ctxTemp); // Draw sorted components
    
    if(this.maxWidth || this.maxHeight) Utils.drawImageData(ctx, this.canvasTmp, this.x, this.y, this.width, this.height, this.x, this.y, this.width, this.height);
    super.drawScrollbars(ctx);

    ctx.restore();
  }

  drawComponents(ctx) {
    this.components.sort(Scene.compareComponents).forEach(component => component.draw(ctx));
  }

  get defaultStyle() {
    return new Style({
      "padding": Constants.Setting.DEFAULT_PADDING
    });
  }
}