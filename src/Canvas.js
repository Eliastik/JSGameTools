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
import ReactorCanvas from "./ReactorCanvas";
import Menu from "./Menu";
import Label from "./Label";
import Style from "./Style";
import Button from "./Button";

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
    this.hasError = false;
    this.fullscreen = false;
    this.fullpage = false;

    // Error message screen
    const buttonSceneError = new Button(null, null, null, null, new Style({ "alignement": "center", "backgroundColor": Constants.Setting.BUTTON_DEFAULT_ALTERNATIVE_BACKGROUND }), new Label(Constants.String.RETRY, null, null, new Style({ "fontColor": "white", "alignement": "center" })));
    const menuSceneError = new Menu(new Style({ "spaceBetweenComponents": 15 }), new Label(Constants.String.ERROR_MESSAGE_CANVAS_LABEL, null, null, new Style({ "fontColor": "white", "alignement": "center" })), buttonSceneError);
    menuSceneError.enable();

    this.sceneError = new Scene(menuSceneError);
    this.scenePrevious = this.scene;

    buttonSceneError.addClickAction(() => {
      this.hasError = false;
      this.scene = this.scenePrevious
    });
    
    // Reactors/events
    this.reactor = new ReactorCanvas();
    this.reactor.registerEvent("mousemove");
    this.reactor.registerEvent("click");
    this.reactor.registerEvent("mousedown");
    this.reactor.registerEvent("mouseup");
    this.reactor.registerEvent("wheel");
    this.reactor.registerEvent("touchstart");
    this.reactor.registerEvent("touchend");
    this.reactor.registerEvent("touchmove");

    if(autoResize) this.autoResize();
    this.createEvents();

    if(Constants.Setting.DISABLE_OPTIMIZATIONS) {
      console && console.info(Constants.String.NOTICE_MESSAGE + " " + Constants.String.OPTIMIZATION_DISABLED);
    }

    if(Constants.Setting.DISABLE_CONTAINERS_CUTTING) {
      console && console.info(Constants.String.NOTICE_MESSAGE + " " + Constants.String.CONTAINER_CUTTING_DISABLED);
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

      try {
        ctx.scale(Constants.Setting.PIXEL_RATIO, Constants.Setting.PIXEL_RATIO);
        this.scene.draw(ctx);
      } catch(e) {
        this.hasError = true;
        this.scene = this.sceneError;
        console.error(Constants.String.ERROR_MESSAGE + " " + Constants.String.ERROR_MESSAGE_CANVAS + "\n", e);
      }
    }
  }

  drawClear(ctx) {
    Utils.clear(ctx);
  }

  startDraw(func) {
    this.started = true;

    requestAnimationFrame(time => {
      if(this.started) {
        const offsetFrame = time - this.#lastFrameTime;

        this.fullscreen = document.fullscreenElement == this.canvas || document.fullscreenElement == this.container;

        if(Constants.Setting.ENABLE_PIXEL_RATIO_RESIZING) {
          Constants.Setting.PIXEL_RATIO = window.devicePixelRatio; // Update the device pixel ratio, only in fullscreen mode/fullpage mode
        } else {
          Constants.Setting.PIXEL_RATIO = 1;
        }

        Utils.autoDPI(this.canvas);

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

  remove(element) {
    element.removeChild(this.container);
    this.container.removeChild(this.canvas);
  }

  toggleFullscreen() {
    Utils.toggleFullscreen(this.canvas, this.container);
  }

  toggleFullpage() {
    Utils.toggleFullpage(this.canvas, this.container);
    this.fullpage = !this.fullpage;
  }

  autoResize() {
    Utils.enableAutoResizeCanvas(this.canvas, this.container, this.width, this.height);
  }

  get x() {
    return 0;
  }

  get y() {
    return 0;
  }

  get width() {
    return this.canvas ? Utils.getCanvasWidth(this.canvas) : this.#_width;
  }

  get height() {
    return this.canvas ? Utils.getCanvasHeight(this.canvas) : this.#_height;
  }

  get style() {
    return this.canvas ? this.canvas.style : null;
  }

  set width(width) {
    if(width != this.#_width) {
      this.#_width = width;
      this.canvas.width = width;
      this.scene && this.scene.reactor.dispatchEvent("onChange", this);
    }
  }

  set height(height) {
    if(height != this.#_height) {
      this.#_height = height;
      this.canvas.height = height;
      this.scene && this.scene.reactor.dispatchEvent("onChange", this);
    }
  }

  getContext(context) {
    return this.canvas ? this.canvas.getContext(context ? context : "2d") : null;
  }

  createEvents() {
    if(!this.init && this.canvas) {
      ["mousemove", "click", "mousedown", "mouseup", "wheel"].forEach(eventName => {
        this.canvas.addEventListener(eventName, event => {
          const mousePosition = this.getMousePos(event);
          this.doEvents(event, eventName, mousePosition);
          event.preventDefault();
        }, false);
      });

      ["touchstart", "touchmove", "touchend"].forEach(eventName => {
        this.canvas.addEventListener(eventName, event => {
          const changedTouches = event.changedTouches[0];
          const position = this.getMousePos(changedTouches);
          this.doEvents(event, eventName, position);
        });
      });

      this.init = true;
    }
  }

  doEvents(event, eventName, position) {
    const components = this.getComponentsAtPosition(position); // Get all elements at the current position
    this.reactor.dispatchEvent(eventName, event, false); // Dispatch to all components to disable them (call with false)
    [...components].reverse().forEach(component => this.reactor.dispatchEventComponent(eventName, component, event, true)); // Dispatch to component detected to enable them (call with true)
  }

  addEventListener(event, component, callback) {
    this.reactor.addEventListener(event, component, callback);
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