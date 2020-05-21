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
export default class Component {
  constructor(x, y, width, height, alignement, verticalAlignement, disableAnimation, scrollDisabled) {
    this.x = x || 0;
    this.y = y || 0;
    this.initialX = x;
    this.initialY = y;
    this._width = width;
    this._height = height;
    this.alignement = alignement || "default";
    this.verticalAlignement = verticalAlignement || "default";
    this.canvasContext2d;
    
    // Functions triggered by events
    this.triggersClick = [];
    this.triggersHover = [];
    this.triggersDown = [];
    this.triggersScroll = [];

    // State
    this.init = false;
    this.initEvents = false;
    this.selected = false;
    this.clicked = false;
    this.hovered = false;
    this.disabled = false;
    this.disableAnimation = disableAnimation || false;
    this.scrollDisabled = scrollDisabled || false;

    // Scroll state
    this.offsetScrollX = 0;
    this.offsetScrollY = 0;

    // Touch events
    this.touchEventStartX = 0;
    this.touchEventStartY = 0;
    this.touchEventStartTimestamp = 0;

    this.tooltip;
  }

  draw(context) {
    const canvas = context.canvas;
    const ctx = canvas.getContext("2d");

    this.canvasContext2d = ctx;

    if(!this.initEvent && ctx != null) {
      canvas.addEventListener("mousemove", event => {
        if(!this.disabled) {
          if(this.isInside(this.getMousePos(canvas, event))) {
            if(this.triggersHover != null && !this.disabled) {
              this.triggersHover.forEach(trigger => trigger());
            }

            if(this.tooltip) {
              const mousePosition = this.getMousePos(canvas, event);
              this.tooltip.x = mousePosition.x + 10;
              this.tooltip.y = mousePosition.y + 10;
              this.tooltip.disabled = false;
            }
            
            this.hovered = true;
          } else {
            this.hovered = false;
            if(this.tooltip) this.tooltip.disabled = true;
          }
        } else {
          this.hovered = false;
          this.clicked = false;
          if(this.tooltip) this.tooltip.disabled = true;
        }
      }, false);
      
      canvas.addEventListener("click", event => {
        if(!this.disabled) {
          if(this.isInside(this.getMousePos(canvas, event))) {
            if(this.triggersClick != null) {
              this.triggersClick.forEach(trigger => trigger());
            }

            this.selected = true;
          } else {
            this.clicked = false;
            this.selected = false;
          }
        } else {
          this.hovered = false;
          this.clicked = false;
        }
      }, false);
      
      canvas.addEventListener("mousedown", event => {
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
      
      canvas.addEventListener("mouseup", () => {
        this.clicked = false;
      }, false);

      canvas.addEventListener("wheel", event => {
        if(this.hovered && !this.disabled && !this.scrollDisabled) {
          this.offsetScrollX += event.deltaX;
          this.offsetScrollY += event.deltaY;

          if(this.triggersScroll != null) {
            this.triggersScroll.forEach(trigger => trigger(event.deltaX, event.deltaY));
          }
        }
      });

      canvas.addEventListener("touchstart", event => {
        const changedTouches = event.changedTouches[0];
        const position = this.getMousePos(canvas, changedTouches);
        
        if(this.isInside(position)) {
          this.hovered = true;
          this.selected = true;
        } else {
          this.hovered = false;
          this.selected = false;
        }

        if(this.hovered && !this.disabled) {
          this.touchEventStartX = position.x;
          this.touchEventStartY = position.y;
          this.touchEventStartTimestamp = event.timestamp;
        }
      });

      const touchScrollEvent =  event => {
        const changedTouches = event.changedTouches[0];
        const position = this.getMousePos(canvas, changedTouches);

        if(this.hovered && !this.disabled && !this.scrollDisabled) {
          this.offsetScrollX += this.touchEventStartX - position.x;
          this.offsetScrollY += this.touchEventStartY - position.y;

          if(this.triggersScroll != null) {
            this.triggersScroll.forEach(trigger => trigger(this.touchEventStartX - position.x, this.touchEventStartY - position.y));
          }
          
          this.touchEventStartX = position.x;
          this.touchEventStartY = position.y;
        }
      };

      canvas.addEventListener("touchend", touchScrollEvent);
      canvas.addEventListener("touchmove", event => {
        touchScrollEvent(event);
        event.preventDefault();
      });
    }

    if(this.disabled) {
      this.selected = false;
      this.clicked = false;
      this.hovered = false;
      if(this.tooltip) this.tooltip.disabled = true;
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
  
  disable() {
    this.disabled = true;
  }
  
  enable() {
    this.disabled = false;
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

  setScrollAction(trigger) {
    this.triggersScroll = [trigger];
  }
  
  addScrollAction(trigger) {
    this.triggersScroll.push(trigger);
  }
  
  removeScrollAction(trigger) {
    this.triggersScroll = this.triggersScroll.filter(elem => elem != trigger);
  }

  removeAllScrollActions() {
    this.triggersScroll = [];
  }

  get height() {
    return this._height;
  }

  get width() {
    return this._width;
  }

  set width(width) {
    this._width = width;
  }

  set height(height) {
    this._height = height;
  }
}