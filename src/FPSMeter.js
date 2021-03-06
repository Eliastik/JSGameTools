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

export default class FPSMeter extends Label {
  selectable = false;

  constructor(displayFrames, x, y, style) {
    super(null, x, y, style);

    this.displayFrames = displayFrames || false;
    this.frames = 0;
    this.lastFrame = 0;
    this.currentFPS = 0;

    this.intervalCountFPS = setInterval(() => this.countFPS(), 1000);
  }

  draw(context) {
    if(this.hidden) return;
    this.text = "FPS: " + this.currentFPS + (this.displayFrames ? " / Frames: " + this.frames : "");
    super.draw(context);
    this.frames++;
  }

  countFPS() {
    if(this.lastFrame > 0) this.currentFPS = this.frames - this.lastFrame;
    this.lastFrame = this.frames;
  }
}