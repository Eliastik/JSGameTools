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
import Button from "./Button";
import Constants from "./Constants";
import Label from "./Label";
import Style from "./Style";

export default class SelectOption extends Button {
  constructor(label, style) {
    const defaultLabel = new Label("Option");
    super(null, null, null, null, style, label || defaultLabel);
    this.label = label || defaultLabel;
  }

  add(component) {
    if(component instanceof Label) {
      this.clear();
      super.add(component);
    }
  }

  get width() {
    return this.parent && this.parent.width;
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