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
import Utils from "./Utils";

export default class Component {
  selectable = true;
  #_width = 0;
  #_height = 0;
  #_x = 0;
  #_y = 0;
  #_disabled = false;
  #_selected = false;
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
    this.triggersUp = [];
    this.triggersOnChange = [];

    // State
    this.init = false;
    this.hasInitEvents = false;
    this.#_selected = false;
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
    this.initEvents();
  }

  initEvents() {
    if(!this.hasInitEvents && this.canvas != null) {
      this.canvas.addEventListener("mousemove", this, (event, result) => {
        if(!this.disabled) {
          const mousePosition = this.getMousePos(event);

          if(this.clicked) {
            const deltaX = this.moveEventStartX - mousePosition.x;
            const deltaY = this.moveEventStartY - mousePosition.y;

            this.offsetMoveX += deltaX;
            this.offsetMoveY += deltaY;

            if(this.triggersMove != null) {
              this.triggersMove.forEach(trigger => trigger(deltaX, deltaY, mousePosition));
            }
            
            this.moveEventStartX = mousePosition.x;
            this.moveEventStartY = mousePosition.y;
          }

          if(result) {
            if(this.triggersHover != null && !this.disabled) {
              this.triggersHover.forEach(trigger => trigger(mousePosition));
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
      });
      
      this.canvas.addEventListener("click", this, (event, result) => {
        if(!this.disabled) {
          const mousePosition = this.getMousePos(event);

          if(result && this.hovered) {
            if(this.triggersClick != null) {
              this.triggersClick.forEach(trigger => trigger(mousePosition));
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
      });
      
      this.canvas.addEventListener("mousedown", this, (event, result) => {
        if(!this.disabled) {
          const mousePosition = this.getMousePos(event);

          if(result) {
            if(this.triggersDown != null) {
              this.triggersDown.forEach(trigger => trigger(mousePosition));
            }
            
            this.clicked = true;
            this.moveEventStartX = mousePosition.x;
            this.moveEventStartY = mousePosition.y;
          }
        } else {
          this.hovered = false;
          this.clicked = false;
        }
      });
      
      this.canvas.addEventListener("mouseup", this, (event) => {
        if(!this.disabled) {
          const mousePosition = this.getMousePos(event);

          if(this.triggersUp != null) {
            this.triggersUp.forEach(trigger => trigger(mousePosition));
          }
          
          this.clicked = false;
        }
      });

      this.canvas.addEventListener("wheel", this, (event) => {
        if(this.hovered && !this.disabled && !this.scrollDisabled) {
          this.offsetScrollX += event.deltaX;
          this.offsetScrollY += event.deltaY;

          if(this.triggersScroll != null) {
            this.triggersScroll.forEach(trigger => trigger(event.deltaX, event.deltaY));
          }
        }
      });

      const touchScrollEvent = (event) => {
        const changedTouches = event.changedTouches[0];
        const position = this.getMousePos(changedTouches);

        if(this.hovered && !this.disabled && !this.scrollDisabled) {
          const deltaX = this.touchEventStartX - position.x;
          const deltaY = this.touchEventStartY - position.y;

          this.offsetScrollX += deltaX;
          this.offsetScrollY += deltaY;

          if(this.triggersScroll != null) {
            this.triggersScroll.forEach(trigger => trigger(deltaX, deltaY, position));
          }
          
          this.touchEventStartX = position.x;
          this.touchEventStartY = position.y;
        }
      };

      const touchStartEndEvent = (event, result) => {
        const changedTouches = event.changedTouches[0];
        const position = this.getMousePos(changedTouches);
        
        if(result) {
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

      this.canvas.addEventListener("touchstart", this, touchStartEndEvent);
      this.canvas.addEventListener("touchend", this, touchStartEndEvent);

      this.canvas.addEventListener("touchmove", this, (event) => {
        touchScrollEvent(event);
        event.preventDefault();
      });

      this.hasInitEvents = true;
    }
  }

  draw(context) {
    if(this.hidden) return;
    this.initEvents();

    if(this.disabled) {
      this.selected = false;
      this.clicked = false;
      this.hovered = false;
      if(this.tooltip) this.tooltip.disabled = true;
    }
  }
  
  getMousePos(event) {
    return this.canvas.getMousePos(event);
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
  
  addChangeAction(trigger) {
    this.triggersOnChange.push(trigger);
  }
  
  removeChangeAction(trigger) {
    this.triggersOnChange = this.triggersOnChange.filter(elem => elem != trigger);
  }

  removeAllChangeActions() {
    this.triggersOnChange = [];
  }
  
  addUpAction(trigger) {
    this.triggersUp.push(trigger);
  }
  
  removeUpAction(trigger) {
    this.triggersUp = this.triggersUp.filter(elem => elem != trigger);
  }

  removeAllUpActions() {
    this.triggersUp = [];
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

  get maxWidth() {
    return this.width;
  }

  get maxHeight() {
    return this.height;
  }

  get innerWidth() {
    return this.width;
  }

  get innerHeight() {
    return this.height;
  }

  get minWidth() {
    return this.width;
  }

  get minHeight() {
    return this.height;
  }

  get x() {
    const parent = this.parent || this.canvas;

    if(this.style.alignement && parent) {
      const parentWidth = parent.width;
      const parentPadding = (parent.style && parent.style.padding) || 0;

      if(this.style.alignement == Constants.Alignement.CENTER) {
        return parent.x + (parentWidth / 2) - (this.width / 2);
      } else if(this.style.alignement == Constants.Alignement.RIGHT) {
        return parent.x + (parentWidth) - (this.width) - parentPadding;
      } else if(this.style.alignement == Constants.Alignement.LEFT) {
        return parent.x + parentPadding;
      }
    } else if(parent) {
      return parent.x + this.#_x;
    }
    
    return this.#_x;
  }

  set x(x) {
    this.#_x = x;
  }

  get y() {
    const parent = this.parent || this.canvas;

    if(this.style.verticalAlignement && parent) {
      const parentHeight = parent.height;
      const parentPadding = (parent.style && parent.style.padding) || 0;

      if(this.style.verticalAlignement == Constants.VerticalAlignement.BOTTOM) {
        return parent.y + (parentHeight) - (this.height) - parentPadding;
      } else if(this.style.verticalAlignement == Constants.VerticalAlignement.CENTER) {
        return parent.y + (parentHeight / 2) - (this.height / 2);
      } else if(this.style.verticalAlignement == Constants.VerticalAlignement.TOP) {
        return parent.y + parentPadding;
      }
    } else if(parent) {
      return parent.y + this.#_y;
    }
    
    return this.#_y;
  }

  set y(y) {
    this.#_y = y;
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

  get hidden() {
    return (this.style && this.style.hidden) || (this.parent && this.parent.hidden);
  }

  set hidden(hidden) {
    this.disabled = hidden;
    if(this.style) this.style.set("hidden", hidden);
  }

  get selected() {
    return this.#_selected;
  }

  set selected(selected) {
    this.#_selected = selected;
  }

  getAllParents() {
    let parent = this.parent;
    let res = [];

    while(parent) {
      res.push(parent);
      parent = parent.parent;
    }

    return res;
  }

  static compareComponents(component, other) {
    return component.compareTo(other);
  }

  compareTo(otherComponent) {
    const isForeground = this.style && this.style.foreground;
    const otherIsForeground = otherComponent.style && otherComponent.style.foreground;
    const zIndex = this.style && this.style.zIndex;
    const otherzIndex = otherComponent.style && otherComponent.style.zIndex;

    if(this.parent == otherComponent) {
      return 1;
    } else if(otherComponent.parent == this) {
      return -1;
    } else if(isForeground && !otherIsForeground) {
      return 1
    } else if(!isForeground && otherIsForeground) {
      return -1;
    } else if(zIndex > otherzIndex) {
      return 1;
    } else if(zIndex < otherzIndex) {
      return -1;
    }

    return otherComponent.compareToComponent(this) || -this.compareToComponent(otherComponent);
  }

  compareToComponent(otherComponent) {
    return 0;
  }

  compareToMenu(otherComponent) {
    return -1;
  }

  compareToTooltip(otherComponent) {
    return -1;
  }

  compareToNotification(otherComponent) {
    return -1;
  }

  compareToScrollbar(otherComponent) {
    return -1;
  }
}