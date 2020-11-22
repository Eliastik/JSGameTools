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
  }

  draw(context) {
    /*if(this.selected && this.parent) {
      this.parent.selected = true;
    }*/

    if(!this.hidden) {
      super.draw(context);
    }
  }

  get x() {
    return this.parent && this.parent.x;
  }

  get y() {
    const parentHeight = (this.parent && this.parent.height);
    const height = this.height;
    const y = this.parent && this.parent.y;

    if(this.canvas && this.canvas.scene && y + parentHeight + height >= this.canvas.scene.height) {
      return y - height;
    }

    return y + parentHeight;
  }

  get width() {
    return this.parent && this.parent.width;
  }

  get canvas() {
    return this.parent && this.parent.canvas;
  }

  get style() {
    const style = this.parent && this.parent.style && this.parent.style.copy();

    if(style) {
      style.setAll(this.defaultStyle.getStyles());
      return style;
    }
    
    return this.defaultStyle;
  }

  set style(style) {
    if(this.parent) this.parent.style = style;
  }

  get selectedOption() {
    return this.#_selectedOption;
  }

  set selectedOption(id) {
    this.#_selectedOption = id;
  }

  add(component) {
    super.add(component);

    component.addClickAction(() => {
      this.#_selectedOption = this.getComponentId(component);
      this.selected = false;
      if(this.parent) this.parent.selected = false;
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
    return super.hidden || (this.parent && !this.parent.selected) || !this.parent;
  }
}