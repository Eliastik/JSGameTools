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

export default class Container extends Component {
  selectable = false;
  #components = [];

  constructor(x, y, maxWidth, maxHeight, alignement, verticalAlignement, padding, spaceBetweenComponents, disableAnimation, ...components) {
    super(x, y, maxWidth, maxHeight, alignement, verticalAlignement, disableAnimation);
    this.addAll(...components);
    this.padding = padding ? padding : 6;
    this.spaceBetweenComponents = spaceBetweenComponents ? spaceBetweenComponents : 6;
    this.canvasTmp = document.createElement("canvas");
  }

  draw(context) {
    this.components.forEach(component => {
      if(this.canvas) component.canvas = this.canvas;
    });

    super.draw(context);
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