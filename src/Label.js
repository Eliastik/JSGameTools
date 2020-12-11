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
import Utils from "./Utils";
import Component from "./Component";
import Style from "./Style";

export default class Label extends Component {
  selectable = false;
  #_text = "";

  constructor(text, x, y, style) {
    super(x, y, null, null, style);
    this.text = text;
    this.sizesCache = null;

    this.addChangeAction(componentChanged => {
      this.updateSizes();
      componentChanged != this.parent && this.parent && this.parent.reactor && this.parent.reactor.dispatchEvent("onChange", this);
    });
  }

  draw(context) {
    if(this.hidden) return;
    super.draw(context);
    
    const canvas = context.canvas;
    const ctx = canvas.getContext("2d");
    ctx.save();

    Utils.drawText(ctx, this.text, this.style.fontColor, this.style.fontSize, this.style.fontFamily, this.style.alignement, this.style.verticalAlignement, this.x, this.y, this.style.wrap, this.style.bold, this.style.underline, null, this.parent);

    ctx.restore();
  }

  set text(text) {
    this.#_text = text;
    this.reactor.dispatchEvent("onChange", this);
  }

  get text() {
    return this.#_text;
  }

  updateSizes() {
    const ctx = this.canvas ? this.canvas.getContext("2d") : null;
    const parent = (this.canvas && this.canvas.scene) || this.canvas || (ctx && ctx.canvas);
    
    if(ctx && (Constants.Setting.DISABLE_OPTIMIZATIONS || !this.sizesCache || this.sizesCache.fontSize != this.style.fontSize || this.sizesCache.fontFamily != this.style.fontFamily || this.sizesCache.wrap != this.style.wrap || this.text != this.sizesCache.text || (parent && parent.width != this.sizesCache.parentWidth) || this.sizesCache.value == null)) {
      const sizes = Utils.wrapTextLines(ctx, this.text, null, this.style.fontSize, this.style.fontFamily, !this.style.wrap);
      
      if(parent) {
        this.sizesCache = { "fontSize": this.style.fontSize, "fontFamily": this.style.fontFamily, "wrap": this.style.wrap, "text": this.text, "parentWidth": parent.width, "value": sizes };
      }
    }

    return this.sizesCache && this.sizesCache.value;
  }

  get sizes() {
    if(Constants.Setting.DISABLE_EXPERIMENTAL_OPTIMIZATIONS) this.updateSizes();
    return this.sizesCache && this.sizesCache.value;
  }

  get height() {
    const sizes = this.sizes;
    return sizes && sizes["height"];
  }

  get width() {
    const sizes = this.sizes;
    return sizes && sizes["width"];
  }

  get defaultStyle() {
    return new Style({
      "fontSize": Constants.Setting.FONT_SIZE,
      "fontFamily": Constants.Setting.FONT_FAMILY,
      "fontColor": Constants.Setting.LABEL_DEFAULT_FONT_COLOR,
      "wrap": true,
      "bold": false,
      "underline": false
    });
  }
}