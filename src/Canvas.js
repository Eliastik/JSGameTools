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
import Scene from "./Scene";
import Utils from "./Utils";

export default class Canvas {
  #lastFrameTime;
  #_width;
  #_height;

  constructor(scene, canvas, width, height, autoResize, maxFPS) {
    this.canvas = canvas || document.createElement("canvas");
    this.container = document.createElement("div");
    this.#_width = width || 600;
    this.#_height = height || 400;
    this.scene = scene;
    this.container.appendChild(this.canvas);
    this.started = false;
    this.maxFPS = maxFPS || -1;
    this.#lastFrameTime = 0;
    if(autoResize) this.autoResize();

    if(this.scene) {
      this.scene.parent = this;
      this.scene.canvas = this;
    }
  }

  draw() {
    const ctx = this.canvas.getContext("2d");
    
    if(this.scene) {
      this.scene.parent = this;
      this.scene.canvas = this;
    }

    Utils.clear(ctx);
    scene.draw(ctx);
  }

  startDraw() {
    this.started = true;

    requestAnimationFrame(time => {
      if(this.started) {
        const offsetFrame = time - this.#lastFrameTime;

        if(this.maxFPS < 1 || offsetFrame > 1000 / this.maxFPS) {
          this.#lastFrameTime = time;
          this.draw();
        }
        
        this.startDraw();
      }
    });
  }

  stopDraw() {
    this.started = false;
  }

  appendTo(element) {
    element.appendChild(this.container);
  }

  toggleFullscreen() {
    Utils.toggleFullscreen(this.canvas, this.container);
  }

  autoResize() {
    Utils.enableAutoResizeCanvas(this.canvas, this.width, this.height);
  }

  get width() {
    return this.canvas ? this.canvas.width : this.#_width;
  }

  get height() {
    return this.canvas ? this.canvas.height : this.#_height;
  }

  set width(width) {
    this.#_width = width;
    this.canvas.width = width;
  }

  set height(height) {
    this.#_height = height;
    this.canvas.height = height;
  }

  getContext(context) {
    return this.canvas ? this.canvas.getContext(context ? context : "2d") : null;
  }
}