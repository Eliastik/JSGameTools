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
import Component from "./Component";
import Constants from "./Constants";
import Style from "./Style";

export default class ProgressBar extends Component {
  #precPercent = 0;
  selectable = false;

  constructor(x, y, width, height, style, defaultPercent, easingFunction) {
    super(x, y, width, height, style);

    this.percent = defaultPercent == undefined ? 0 : defaultPercent;
    this.#precPercent = this.percent;
    this.easingFunction = easingFunction;

    this.lastTime = 0;
    this.totalTime = 0;
  }

  draw(context) {
    super.draw(context);

    const canvas = context.canvas;
    const ctx = canvas.getContext("2d");
    ctx.save();

    const time = performance.now();
    let offsetTime = 0;

    let animationPercent = (this.#precPercent != this.percent && !this.style.disableAnimation ? this.totalTime / (this.style.animationDuration) : 1);

    if(this.easingFunction) {
      animationPercent = this.easingFunction(animationPercent);
    }
    
    const widthForeground = Math.round(Math.min(this.width, this.width * (this.#precPercent + (this.percent - this.#precPercent) * animationPercent)));

    if(this.#precPercent != this.percent && !this.style.disableAnimation) {
      if(this.lastTime > 0) offsetTime = time - this.lastTime;
      this.totalTime += offsetTime;

      if(this.totalTime >= this.style.animationDuration) {
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

    this.drawBackground(ctx);
    this.drawForeground(ctx, widthForeground);

    ctx.restore();
  }

  drawBackground(ctx) {
    ctx.save();

    ctx.fillStyle = this.style.backgroundColor;
    ctx.fillRect(this.x, this.y, this.width, this.height);

    ctx.restore();
  }

  drawForeground(ctx, widthForeground) {
    ctx.save();

    ctx.fillStyle = this.style.foregroundColor;
    ctx.fillRect(this.x, this.y, widthForeground, this.height); // Foreground

    ctx.restore();
  }

  get defaultStyle() {
    return new Style({
      "backgroundColor": Constants.Setting.PROGRESS_DEFAULT_BACKGROUND,
      "foregroundColor": Constants.Setting.PROGRESS_DEFAULT_FOREGROUND,
      "animationDuration": Constants.Setting.PROGRESS_DEFAULT_ANIMATION_DURATION
    });
  }
}