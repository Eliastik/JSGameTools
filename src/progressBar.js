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
import Constants from "./constants";
import Utils from "./utils";
import Component from "./component";

export default class ProgressBar extends Component {
  #precPercent = 0;
  #animationPercent = 0;

  constructor(x, y, width, height, backgroundColor, foregroundColor, defaultPercent, animationDuration, disableAnimation, alignement, verticalAlignement) {
    super(x, y, width, height, alignement, verticalAlignement, disableAnimation);

    this.backgroundColor = backgroundColor || "#bdc3c7";
    this.foregroundColor = foregroundColor || "#27ae60";
    this.percent = defaultPercent == undefined ? 0 : defaultPercent;
    this.#precPercent = this.percent;

    this.animationDuration = animationDuration || 2;
    this.lastTime = 0;
    this.totalTime = 0;
  }

  draw(context) {
    super.draw(context);

    const canvas = context.canvas;
    const ctx = canvas.getContext("2d");
    ctx.save();

    const time = Date.now();
    let offsetTime = 0;

    const widthForeground = Math.round(Math.min(this.width, this.width * this.percent * (this.#precPercent != this.percent && !this.disableAnimation ? this.totalTime / (this.animationDuration * 1000) : 1)));

    if(this.#precPercent != this.percent && !this.disableAnimation) {
      if(this.lastTime > 0) offsetTime = time - this.lastTime;
      this.totalTime += offsetTime;

      if(this.totalTime >= this.animationDuration * 1000) {
        this.#precPercent = this.percent;
        this.totalTime = 0;
        this.lastTime = 0;
      } else {
        this.lastTime = time;
      }
    } else {
      this.totalTime = 0;
      this.lastTime = 0;
    }

    let x = this.x;
    let y = this.y;

    if(this.alignement == "center") {
      x = Math.round((ctx.canvas.width / 2) - (this.width / 2));
    } else if(this.alignement == "right") {
      x = Math.round((ctx.canvas.width) - (this.width - 15));
    } else if(this.alignement == "left") {
      x = 5;
    }

    if(this.verticalAlignement == "center") {
      y = Math.round((ctx.canvas.height / 2) - (this.height / 2));
    } else if(this.verticalAlignement == "top") {
      y = 5;
    } else if(this.verticalAlignement == "bottom") {
      y = Math.round(ctx.canvas.height - this.height - 5);
    }

    ctx.fillStyle = this.backgroundColor;
    ctx.fillRect(x, y, this.width, this.height); // Background

    ctx.fillStyle = this.foregroundColor;
    ctx.fillRect(x, y, widthForeground, this.height); // Foreground

    ctx.restore();
  }
}