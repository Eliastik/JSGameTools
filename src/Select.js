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
import Label from "./Label";
import Button from "./Button";
import SelectDropdown from "./SelectDropdown";
import SelectOption from "./SelectOption";
import Triangle from "./Triangle";
import Style from "./Style";
import Row from "./Row";

export default class Select extends Button {
  #optionContainer;

  constructor(x, y, maxWidth, maxHeight, maxHeightDropdown, style, ...options) {
    super(x, y, maxWidth, maxHeight, style);

    this.#optionContainer = new SelectDropdown(maxHeightDropdown, ...options);
    this.#optionContainer.parent = this;
    this.label = new Label("", x, y, style);
    this.triangle = new Triangle(null, null, 12, 12, new Style({ "alignement": "right", "verticalAlignement": "center" }));

    super.add(new Row(null, null, null, null, new Style({ "spaceBetweenComponents": 15 }), this.label, this.triangle));
  }

  draw(context) {
    if(this.style && this.style.hidden) return;
    if(this.selectedOption && this.selectedOption.label) {
      this.label.text = this.selectedOption.label.text;
    }

    super.draw(context);
    this.#optionContainer.draw(context);
  }

  get selectedOption() {
    return this.#optionContainer.components[this.#optionContainer.selectedOption];
  }

  set selectedOption(id) {
    this.#optionContainer.selectedOption = id;
  }

  add(component) {
    if(component instanceof SelectOption) {
      this.#optionContainer.add(component);
    }
  }
}