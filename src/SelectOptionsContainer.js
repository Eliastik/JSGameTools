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
import Col from "./Col";
import Style from "./Style";
import Constants from "./Constants";

export default class SelectDropdown extends Col {
  #_selectedOption;

  constructor(maxHeightDropdown, style, ...options) {
    super(null, null, null, maxHeightDropdown, style, ...options);
    this.#_selectedOption = 0;
    this.select = null;
  }

  draw(context) {
    super.draw(context);

    if(this.selected && this.selected) {
      this.select.selected = true;
    }
  }

  get x() {
    return this.select && this.select.x;
  }

  get y() {
    const selectHeight = (this.select && this.select.height);
    const height = this.height;
    const y = this.select && this.select.y;

    if(this.canvas && this.canvas.scene && y + selectHeight + height >= this.canvas.scene.height) {
      return y - height;
    }

    return y + selectHeight;
  }

  get width() {
    return this.select && this.select.width;
  }

  get selectedOption() {
    return Math.max(0, Math.min(this.components.length - 1, this.#_selectedOption));
  }

  set selectedOption(id) {
    if(id != this.#_selectedOption) {
      this.#_selectedOption = id;
      this.reactor.dispatchEvent("onChange", this);
    }
  }

  add(component) {
    super.add(component);

    component.addClickAction(() => {
      this.#_selectedOption = this.getComponentId(component);
      this.selected = false;
      this.hidden = true;
      if(this.select) this.select.selected = false;
    });
  }

  get defaultStyle() {
    return new Style({
      "padding": 0,
      "spaceBetweenComponents": 0,
      "backgroundColor": Constants.Setting.SELECT_DEFAULT_BACKGROUND,
      "backgroundColorHover": null,
      "backgroundColorDown": null,
      "scrollXDisabled": false,
      "scrollYDisabled": false
    });
  }

  get hidden() {
    return super.hidden || (this.select && !this.select.selected) || !this.select;
  }

  set hidden(hidden) {
    return super.hidden = hidden;
  }

  get selected() {
    return super.selected || (this.select && this.select.selected);
  }

  set selected(selected) {
    super.selected = selected;
  }
}