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
import ImageContainer from "./ImageContainer";
import Button from "./Button";
import Style from "./Style";
import Constants from "./Constants";

export default class ButtonImage extends Button {
  constructor(imgSrc, x, y, alignement, verticalAlignement, width, height, backgroundColor, backgroundColorHover, imageLoader) {
    const style = new Style({
      "alignement": alignement,
      "verticalAlignement": verticalAlignement,
      "backgroundColor": backgroundColor || Constants.Setting.BUTTON_DEFAULT_BACKGROUND,
      "backgroundColorHover": backgroundColorHover || Constants.Setting.BUTTON_DEFAULT_HOVER_BACKGROUND
    });

    super(x, y, width, height, style);
    this.image = new ImageContainer(imgSrc, x, y, width, height, new Style({ "alignement": "center", "verticalAlignement": "center" }), imageLoader);
    this.add(this.image);

    console && console.warn && console.warn(Constants.String.NOTICE_MESSAGE + " " + Constants.String.BUTTON_IMAGE_DEPRECATED);
  }

  loadImage(imageLoader) {
    if(this.components[0] instanceof ImageContainer) this.components[0].loadImage(imageLoader);
  }

  set minWidth(width) {
    this.image.width = width;
    super.minWidth = width;
  }

  set minHeight(height) {
    this.image.height = height;
    super.minHeight = height;
  }

  get minWidth() {
    return super.minWidth;
  }

  get minHeight() {
    return super.minHeight;
  }

  set maxWidth(width) {
    this.image.width = width;
    super.maxWidth = width;
  }

  set maxHeight(height) {
    this.image.height = height;
    super.maxHeight = height;
  }

  get maxWidth() {
    return super.maxWidth;
  }

  get maxHeight() {
    return super.maxHeight;
  }

  set width(width) {
    this.minWidth = width;
    this.maxWidth = width;
  }

  get width() {
    return super.width;
  }

  set height(height) {
    this.minHeight = height;
    this.maxHeight = height;
  }

  get height() {
    return super.height;
  }
}