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
import Triangle from "./Triangle";
import Style from "./Style";
import Constants from "./Constants";

export default class Select extends Button {
  constructor(x, y, maxWidth, maxHeight, style, optionContainer, defaultOption) {
    super(x, y, maxWidth, maxHeight, style);

    this.optionContainer = optionContainer;
    if(defaultOption) this.selectedOption = defaultOption;

    this.label = new Label("", x, y, style);
    this.label.style.setAll({ "alignement": Constants.Alignement.LEFT, "verticalAlignement": Constants.VerticalAlignement.CENTER });
    this.triangle = new Triangle(null, null, 8, 8, style);
    this.triangle.style.setAll({ "alignement": Constants.Alignement.RIGHT, "verticalAlignement": Constants.VerticalAlignement.CENTER });

    this.addAll(this.label, this.triangle);
    this.addClickAction(() => {
      if(this.optionContainer) {
        this.optionContainer.hidden = false;
      }
    });
  }

  draw(context) {
    if(this.hidden) return;
    if(this.selectedOption && this.selectedOption.label) {
      this.label.text = this.selectedOption.label.text;
    }

    super.draw(context);

    if(this.optionContainer) {
      this.optionContainer.select = this;
    }
  }

  get selectedOption() {
    return this.optionContainer ? this.optionContainer.components[this.optionContainer.selectedOption] : null;
  }

  set selectedOption(id) {
    this.optionContainer.selectedOption = id;
    this.reactor.dispatchEvent("onChange", this);
  }

  get text() {
    return this.selectedOption && this.selectedOption.label ? this.selectedOption.label.text : null;
  }

  get width() {
    let maxWidth = this.label.width;

    if(this.optionContainer) {
      this.optionContainer.components.forEach(component => {
        const label = component.label;

        if(label) {
          if(label.width > maxWidth) maxWidth = label.width;
        }
      });
    }

    return maxWidth + this.style.padding + this.triangle.width + 15;
  }

  get allComponents() {
    const components = [];
    components.push(...super.allComponents);
    return components;
  }

  get defaultStyle() {
    return new Style({
      "backgroundColor": Constants.Setting.SELECT_DEFAULT_BACKGROUND,
      "backgroundColorHover": Constants.Setting.SELECT_DEFAULT_HOVER_BACKGROUND,
      "backgroundColorDown": Constants.Setting.SELECT_DEFAULT_CLICK_BACKGROUND,
      "padding": Constants.Setting.DEFAULT_PADDING
    });
  }
}