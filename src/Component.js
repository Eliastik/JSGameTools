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
import Style from "./Style";

export default class Component {
  selectable = true;
  #_width = 0;
  #_height = 0;
  #_x = 0;
  #_y = 0;
  #_disabled = false;
  #_style;

  constructor(x, y, width, height, style) {
    this.#_x = x || 0;
    this.#_y = y || 0;
    this.#_width = width;
    this.#_height = height;
    this.canvas;
    this.parent;

    // Style
    this.style = style;
    
    // Functions triggered by events
    this.triggersClick = [];
    this.triggersHover = [];
    this.triggersDown = [];
    this.triggersScroll = [];
    this.triggersMove = [];

    // State
    this.init = false;
    this.initEvents = false;
    this.selected = false;
    this.clicked = false;
    this.hovered = false;
    this.#_disabled = false;

    // Scroll state
    this.offsetScrollX = 0;
    this.offsetScrollY = 0;

    // Move event
    this.offsetMoveX = 0;
    this.offsetMoveY = 0;
    this.moveEventStartX = 0;
    this.moveEventStartY = 0;

    // Touch events
    this.touchEventStartX = 0;
    this.touchEventStartY = 0;
    this.touchEventStartTimestamp = 0;

    this.tooltip;
  }

  draw(context) {
    const canvas = (this.canvas && this.canvas.canvas ? this.canvas.canvas : context.canvas);

    if(!this.initEvents && canvas != null) {
      canvas.addEventListener("mousemove", event => {
        if(!this.disabled) {
          const mousePosition = this.getMousePos(canvas, event);

          if(this.clicked) {
            const deltaX = this.moveEventStartX - mousePosition.x;
            const deltaY = this.moveEventStartY - mousePosition.y;

            this.offsetMoveX += deltaX;
            this.offsetMoveY += deltaY;

            if(this.triggersMove != null) {
              this.triggersMove.forEach(trigger => trigger(deltaX, deltaY));
            }
            
            this.moveEventStartX = mousePosition.x;
            this.moveEventStartY = mousePosition.y;
          }

          if(this.isInside(mousePosition)) {
            if(this.triggersHover != null && !this.disabled) {
              this.triggersHover.forEach(trigger => trigger());
            }

            if(this.tooltip) {
              this.tooltip.x = mousePosition.x + 10;
              this.tooltip.y = mousePosition.y + 10;
              this.tooltip.enable();
            }
            
            this.hovered = true;
          } else {
            this.hovered = false;
            if(this.tooltip) this.tooltip.disable()
          }
        } else {
          this.hovered = false;
          this.clicked = false;
          if(this.tooltip) this.tooltip.disable();
        }
      }, false);
      
      canvas.addEventListener("click", event => {
        if(!this.disabled) {
          const mousePosition = this.getMousePos(canvas, event);

          if(this.isInside(mousePosition)) {
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
          const mousePosition = this.getMousePos(canvas, event);

          if(this.isInside(mousePosition)) {
            if(this.triggersDown != null) {
              this.triggersDown.forEach(trigger => trigger());
            }
            
            this.clicked = true;
            this.moveEventStartX = mousePosition.x;
            this.moveEventStartY = mousePosition.y;
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

      const touchScrollEvent = event => {
        const changedTouches = event.changedTouches[0];
        const position = this.getMousePos(canvas, changedTouches);

        if(this.hovered && !this.disabled && !this.scrollDisabled) {
          const deltaX = this.touchEventStartX - position.x;
          const deltaY = this.touchEventStartY - position.y;

          this.offsetScrollX += deltaX;
          this.offsetScrollY += deltaY;

          if(this.triggersScroll != null) {
            this.triggersScroll.forEach(trigger => trigger(deltaX, deltaY));
          }
          
          this.touchEventStartX = position.x;
          this.touchEventStartY = position.y;
        }
      };

      const touchStartEndEvent = event => {
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
      };

      canvas.addEventListener("touchstart", touchStartEndEvent);
      canvas.addEventListener("touchend", touchStartEndEvent);

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

    this.initEvents = true;
  }
  
  getMousePos(canvas, event) {
    const rect = canvas.getBoundingClientRect();
    
    return {
      x: event.clientX - rect.left,
      y: event.clientY - rect.top
    };
  }
  
  isInside(pos) {
    return pos.x > this.x && pos.x < this.x + this.maxWidth && pos.y < this.y + this.maxHeight && pos.y > this.y;
  }
  
  disable() {
    this.disabled = true;
  }
  
  enable() {
    this.disabled = false;
  }

  get disabled() {
    return this.#_disabled || (this.parent && this.parent.disabled);
  }

  set disabled(disabled) {
    this.#_disabled = disabled;
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

  setMoveAction(trigger) {
    this.triggersMove = [trigger];
  }
  
  addMoveAction(trigger) {
    this.triggersMove.push(trigger);
  }
  
  removeMoveAction(trigger) {
    this.triggersMove = this.triggersMove.filter(elem => elem != trigger);
  }

  removeAllMoveActions() {
    this.triggersMove = [];
  }

  get height() {
    return this.#_height;
  }

  get width() {
    return this.#_width;
  }

  set width(width) {
    this.#_width = width;
  }

  set height(height) {
    this.#_height = height;
  }

  get x() {
    if(this.style.alignement && this.parent) {
      if(this.style.alignement == Constants.Alignement.CENTER) {
        return this.parent.x + (this.parent.width / 2) - (this.width / 2);
      } else if(this.style.alignement == Constants.Alignement.RIGHT) {
        return this.parent.x + (this.parent.width) - (this.width) - 5;
      } else if(this.style.alignement == Constants.Alignement.LEFT) {
        return this.parent.x + 5;
      }
    }
    
    return this.#_x;
  }

  set x(x) {
    this.#_x = x;
  }

  get y() {
    if(this.style.verticalAlignement && this.parent) {
      if(this.style.verticalAlignement == Constants.VerticalAlignement.BOTTOM) {
        return this.parent.y + (this.parent.height) - (this.height) - 5;
      } else if(this.style.verticalAlignement == Constants.VerticalAlignement.CENTER) {
        return this.parent.y + (this.parent.height / 2) - (this.height / 2);
      } else if(this.style.verticalAlignement == Constants.VerticalAlignement.TOP) {
        return this.parent.y + 5;
      }
    }
    
    return this.#_y;
  }

  set y(y) {
    this.#_y = y;
  }

  get maxWidth() {
    return this.width;
  }

  get maxHeight() {
    return this.height;
  }

  get defaultStyle() {
    return new Style({
      "padding": Constants.Setting.DEFAULT_PADDING,
      "spaceBetweenComponents": Constants.Setting.DEFAULT_SPACING
    });
  }

  get style() {
    return this.#_style || this.defaultStyle;
  }

  set style(style) {
    this.#_style = new Style();
    this.#_style.setAll(this.defaultStyle.getStyles());

    if(style && style instanceof Style) {
      this.#_style.setAll(style.getStyles());
    }
  }
}