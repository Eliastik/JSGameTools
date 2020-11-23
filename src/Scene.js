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

    const inputs = super.components.filter(component => component && component instanceof Input);
    
    inputs && inputs.forEach(input => input.canvas = this.canvas); // Set inputs canvas
    this.drawComponents(ctx); // Draw sorted components

    ctx.restore();
  }

  drawComponents(ctx) {
    this.components.sort(Scene.compareComponents).forEach(component => component.draw(ctx));
  }

  get height() {
    return (this.canvas && this.canvas.height);
  }

  static compareComponents(component, other) {
    return component.compareTo(other);
  }

  getAllComponents(start = this) {
    const components = {
      "component": start,
      "childs": []
    };

    if(start.allComponents) {
      for(let i = 0; i < start.allComponents.length; i++) {
        components.childs.push(this.getAllComponents(start.allComponents[i]));
      }
    }

    return components;
  }
}