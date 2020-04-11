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
    
    this.triggersClick = [];
    this.triggersHover = [];
    this.triggersDown = [];
    this.initEvents = false;
    this.selected = false;
    this.clicked = false;
    this.hovered = false;
    this.init = false;
  }

  draw(context) {
    const canvas = context.canvas;
    const ctx = canvas.getContext("2d");

    if(!this.initEvent && ctx != null) {
      ctx.canvas.addEventListener("mousemove", event => {
        if(!this.disabled) {
          if(this.isInside(this.getMousePos(ctx.canvas, event))) {
            if(this.triggersHover != null && !this.disabled) {
              this.triggersHover.forEach(trigger => trigger());
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
            if(this.triggersClick != null) {
              this.triggersClick.forEach(trigger => trigger());
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
            if(this.triggersDown != null) {
              this.triggersDown.forEach(trigger => trigger());
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

    this.initEvent = true;
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

  setClickAction(trigger) {
    this.triggersClick = [trigger];
  }
  
  addClickAction(trigger) {
    this.triggersClick.push(trigger);
  }
  
  removeClickAction(trigger) {
    this.triggersClick = this.triggersClick.filter(elem => elem != trigger);
  }

  removeAllClickActions() {
    this.triggersClick = [];
  }

  setHoverAction(trigger) {
    this.triggersHover = [trigger];
  }
  
  addHoverAction(trigger) {
    this.triggersHover.push(trigger);
  }
  
  removeHoverAction(trigger) {
    this.triggersHover = this.triggersHover.filter(elem => elem != trigger);
  }

  removeAllHoverActions() {
    this.triggersHover = [];
  }

  setDownAction(trigger) {
    this.triggersDown = [trigger];
  }
  
  addDownAction(trigger) {
    this.triggersDown.push(trigger);
  }
  
  removeDownAction(trigger) {
    this.triggersDown = this.triggersDown.filter(elem => elem != trigger);
  }

  removeAllDownActions() {
    this.triggersDown = [];
  }
}