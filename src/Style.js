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
import Constants from "./Constants";

export default class Style {
  #styles = {};

  constructor(styles) {
    this.setAll(styles);
  }

  get fontColor() {
    return this.#styles.fontColor;
  }

  get fontColorHover() {
    return this.#styles.fontColorHover;
  }

  get fontColorDown() {
    return this.#styles.fontColorDown;
  }

  get fontFamily() {
    return this.#styles.fontFamily != null ? this.#styles.fontFamily : Constants.Setting.FONT_FAMILY;
  }

  get fontSize() {
    return this.#styles.fontSize != null ? this.#styles.fontSize : Constants.Setting.FONT_SIZE;
  }

  get bold() {
    return this.#styles.bold;
  }

  get underline() {
    return this.#styles.underline;
  }

  get wrap() {
    return this.#styles.wrap;
  }

  get backgroundColor() {
    return this.#styles.backgroundColor;
  }

  get foregroundColor() {
    return this.#styles.foregroundColor;
  }

  get backgroundColorHover() {
    return this.#styles.backgroundColorHover;
  }

  get backgroundColorDown() {
    return this.#styles.backgroundColorDown;
  }

  get borderColor() {
    return this.#styles.borderColor;
  }

  get borderColorHover() {
    return this.#styles.borderColorHover;
  }

  get borderColorDown() {
    return this.#styles.borderColorDown;
  }

  get borderColorSelected() {
    return this.#styles.borderColorSelected != null ? this.#styles.borderColorSelected : Constants.Setting.DEFAULT_BORDER_COLOR_SELECTED;
  }

  get borderSize() {
    return this.#styles.borderSize != null ? this.#styles.borderSize : Constants.Setting.DEFAULT_BORDER_SIZE;
  }

  get selectColor() {
    return this.#styles.selectColor;
  }

  get alignement() {
    return this.#styles.alignement;
  }

  get verticalAlignement() {
    return this.#styles.verticalAlignement;
  }

  get disableAnimation() {
    return this.#styles.disableAnimation;
  }

  get scrollXDisabled() {
    return this.#styles.scrollXDisabled;
  }

  get scrollYDisabled() {
    return this.#styles.scrollYDisabled;
  }

  get padding() {
    return this.#styles.padding != null ? this.#styles.padding : Constants.Setting.DEFAULT_PADDING;
  }

  get spaceBetweenComponents() {
    return this.#styles.spaceBetweenComponents != null ? this.#styles.spaceBetweenComponents : Constants.Setting.DEFAULT_SPACING;
  }

  get visible() {
    return this.#styles.visible;
  }

  get blurBackground() {
    return this.#styles.blurBackground;
  }

  get lineWidth() {
    return this.#styles.lineWidth;
  }

  get animationDuration() {
    return this.#styles.animationDuration != null ? this.#styles.animationDuration : Constants.Setting.DEFAULT_ANIMATION_DURATION;
  }

  get foreground() {
    return this.#styles.foreground;
  }

  set(style, value) {
    this.#styles[style] = value;
  }

  setAll(styles) {
    if(styles) {
      for(const style in styles) {
        if(styles.hasOwnProperty(style)) {
          this.set(style, styles[style]);
        }
      }
    }
  }

  copy() {
    return new Style(this.#styles);
  }

  getStyles() {
    const styles = {};

    for(const style in this.#styles) {
      if(this.#styles.hasOwnProperty(style)) {
        styles[style] = this.#styles[style];
      }
    }

    return styles;
  }
}