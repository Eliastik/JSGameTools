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
import Scene from "./Scene";

export default class Canvas {
  #lastFrameTime;
  #_width;
  #_height;

  constructor(scene, canvas, width, height, autoResize, maxFPS) {
    this.canvas = canvas || document.createElement("canvas");
    this.container = document.createElement("div");
    this.width = width || Constants.Setting.CANVAS_WIDTH;
    this.height = height || Constants.Setting.CANVAS_HEIGHT;
    this.scene = scene;
    this.container.appendChild(this.canvas);
    this.started = false;
    this.init = false;
    this.maxFPS = maxFPS || -1;
    this.#lastFrameTime = 0;
    
    this.triggersClick = [];
    this.triggersHover = [];
    this.triggersDown = [];
    this.triggersWheel = [];
    this.triggersMove = [];
    this.triggersUp = [];
    this.triggersTouchStart = [];
    this.triggersTouchEnd = [];
    this.triggersTouchMove = [];

    if(autoResize) this.autoResize();
    this.createEvents();

    if(Constants.Setting.DISABLE_OPTIMIZATIONS) {
      console && console.warn("Notice: Optimizations are disabled. You may notice low performance.");
    }

    if(Constants.Setting.DISABLE_CONTAINERS_CUTTING) {
      console && console.warn("Notice: Containers cutting is disabled.");
    }
  }

  draw() {
    const ctx = this.canvas.getContext("2d");
    this.drawClear(ctx);
    this.drawScene(ctx);
  }

  drawScene(ctx) {
    if(this.scene) {
      this.scene.parent = this;
      this.scene.canvas = this;
    }

    scene.draw(ctx);
  }

  drawClear(ctx) {
    Utils.clear(ctx);
  }

  startDraw(func) {
    this.started = true;

    requestAnimationFrame(time => {
      if(this.started) {
        const offsetFrame = time - this.#lastFrameTime;

        if(this.maxFPS < 1 || offsetFrame > 1000 / this.maxFPS) {
          this.#lastFrameTime = time;
          this.draw();
        }
        
        this.startDraw(func);
        if(func) func();
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

  toggleFullpage() {
    Utils.toggleFullpage(this.canvas, this.container);
  }

  autoResize() {
    Utils.enableAutoResizeCanvas(this.canvas, this.width, this.height);
  }

  get x() {
    return 0;
  }

  get y() {
    return 0;
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

  createEvents() {
    if(!this.init && this.canvas) {
      this.canvas.addEventListener("mousemove", event => {
        const mousePosition = this.getMousePos(event);
        this.doEvents(event, this.triggersMove, mousePosition);
      }, false);

      this.canvas.addEventListener("click", event => {
        const mousePosition = this.getMousePos(event);
        this.doEvents(event, this.triggersClick, mousePosition);
      }, false);

      this.canvas.addEventListener("mousedown", event => {
        const mousePosition = this.getMousePos(event);
        this.doEvents(event, this.triggersDown, mousePosition);
      }, false);

      this.canvas.addEventListener("mouseup", event => {
        const mousePosition = this.getMousePos(event);
        this.doEvents(event, this.triggersUp, mousePosition);
      }, false);

      this.canvas.addEventListener("wheel", event => {
        const mousePosition = this.getMousePos(event);
        this.doEvents(event, this.triggersWheel, mousePosition);
      });

      this.canvas.addEventListener("touchstart", event => {
        const changedTouches = event.changedTouches[0];
        const position = this.getMousePos(changedTouches);
        this.doEvents(event, this.triggersTouchStart, position);
      });

      this.canvas.addEventListener("touchend", event => {
        const changedTouches = event.changedTouches[0];
        const position = this.getMousePos(changedTouches);
        this.doEvents(event, this.triggersTouchEnd, position);
      });

      this.canvas.addEventListener("touchmove", event => {
        const changedTouches = event.changedTouches[0];
        const position = this.getMousePos(changedTouches);
        this.doEvents(event, this.triggersTouchMove, position);
      });

      this.init = true;
    }
  }

  doEvents(event, triggers, mousePosition) {
    const components = this.getComponentsAtPosition(mousePosition);
    const triggersMap = triggers.map(element => element.component);

    triggers.forEach(trigger => {
      const func = trigger.trigger;
      func(event, false);
    });

    [...components].reverse().forEach(component => {
      if(triggersMap.indexOf(component) != -1) {
        const func = triggers[triggersMap.indexOf(component)].trigger;
        func(event, true);
      }
    });
  }

  addEventListener(event, component, trigger) {
    const o = {
      "component": component,
      "trigger": trigger
    };

    switch(event) {
      case "mousemove":
        this.triggersMove.push(o);
        break;
      case "click":
        this.triggersClick.push(o);
        break;
      case "mousedown":
        this.triggersDown.push(o);
        break;
      case "mouseup":
        this.triggersUp.push(o);
        break;
      case "wheel":
        this.triggersWheel.push(o);
        break;
      case "touchstart":
        this.triggersTouchStart.push(o);
        break;
      case "touchend":
        this.triggersTouchEnd.push(o);
        break;
      case "touchmove":
        this.triggersTouchMove.push(o);
        break;
    }
  }
  
  getMousePos(event) {
    return Utils.getMousePos(this.canvas, event);
  }

  getAllComponents(start = this.scene) {
    return this.scene.getAllComponents(start);
  }

  getComponentsAtPosition(mousePosition, start = this.scene) {
    const allComponents = this.scene.getComponentsTree(start);
    const result = [start];

    if(allComponents.childs) {
      allComponents.childs.sort(Scene.sortComponentsTree).reverse().some(child => {
        if(child.component.isInside(mousePosition) && !child.component.hidden && !child.component.disabled) {
          result.push(...this.getComponentsAtPosition(mousePosition, child.component));
          return true;
        }
      });
    }

    return result;
  }
}