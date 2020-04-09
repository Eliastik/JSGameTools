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
export default class ClickableComponent {
  constructor(x, y, width, height) {
    this.x = x || 0;
    this.y = y || 0;
    this.initialX = x;
    this.initialY = y;
    this.width = width;
    this.height = height;
    
    this.triggerClick;
    this.triggerHover;
    this.triggerDown;
    this.selected = false;
    this.clicked = false;
    this.hovered = false;
    this.init = false;
  }

  draw(context) {
    const canvas = context.canvas;
    const ctx = canvas.getContext("2d");

    if(!this.init && ctx != null) {
      ctx.canvas.addEventListener("mousemove", event => {
        if(!this.disabled) {
          if(this.isInside(this.getMousePos(ctx.canvas, event))) {
            if(this.triggerHover != null && !this.disabled) {
              this.triggerHover();
            }
            
            this.hovered = true;
          } else {
            this.hovered = false;
          }
        } else {
          this.hovered = false;
          this.clicked = false;
        }
      }, false);
      
      ctx.canvas.addEventListener("click", event => {
        if(!this.disabled) {
          if(this.isInside(this.getMousePos(canvas, event))) {
            if(this.triggerClick != null) {
              this.triggerClick();
            }
          } else {
            this.clicked = false;
          }
        } else {
          this.hovered = false;
          this.clicked = false;
        }
      }, false);
      
      ctx.canvas.addEventListener("mousedown", event => {
        if(!this.disabled) {
          if(this.isInside(this.getMousePos(canvas, event))) {
            if(this.triggerDown != null) {
              this.triggerDown();
            }
            
            this.clicked = true;
          } else {
            this.clicked = false;
          }
        } else {
          this.hovered = false;
          this.clicked = false;
        }
      }, false);
      
      ctx.canvas.addEventListener("mouseup", () => {
        this.clicked = false;
      }, false);
    }

    this.init = true;
  }
  
  getMousePos(canvas, event) {
    const rect = canvas.getBoundingClientRect();
    
    return {
      x: event.clientX - rect.left,
      y: event.clientY - rect.top
    };
  }
  
  isInside(pos) {
    return pos.x > this.x && pos.x < this.x + this.width && pos.y < this.y + this.height && pos.y > this.y;
  }
  
  addClickAction(trigger) {
    this.triggerClick = trigger;
  }
  
  removeClickAction() {
    this.triggerClick = null;
  }
  
  addMouseOverAction(trigger) {
    this.triggerHover = trigger;
  }
  
  removeHoverAction() {
    this.triggerHover = null;
  }
  
  addMouseDownAction(trigger) {
    this.triggerDown = trigger;
  }
  
  removeDownAction() {
    this.triggerDown = null;
  }
}