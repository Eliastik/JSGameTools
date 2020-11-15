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

export default class ButtonImage extends Button {
  constructor(imgSrc, x, y, alignement, verticalAlignement, width, height, backgroundColor, backgroundColorHover, imageLoader) {
    const style = new Style({
      "alignement": alignement,
      "verticalAlignement": verticalAlignement,
      "backgroundColor": backgroundColor,
      "backgroundColorHover": backgroundColorHover
    });

    super(x, y, width, height, style, new ImageContainer(imgSrc, x, y, width, height, style, imageLoader));
    console && console.warn && console.warn("Notice: JSGameTools.ButtonImage is deprecated. Please use a Button with an ImageContainer instead.");
  }

  loadImage(imageLoader) {
    if(this.components[0] instanceof ImageContainer) this.components[0].loadImage(imageLoader);
  }
}