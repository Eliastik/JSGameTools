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
import Reactor from "./Reactor";

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
    this.deltaX = 0;
    this.deltaY = 0;
    this.#_width = width;
    this.#_height = height;
    this.canvas;
    this.parent;

    // Style
    this.style = style;
    
    // Functions triggered by events
    this.reactor = new Reactor();
    this.reactor.registerEvent("onClick");
    this.reactor.registerEvent("onHover");
    this.reactor.registerEvent("onDown");
    this.reactor.registerEvent("onScroll");
    this.reactor.registerEvent("onMove");
    this.reactor.registerEvent("onUp");
    this.reactor.registerEvent("onChange");

    // State
    this.init = false;
    this.hasInitEvents = false;
    this.#_selected = false;
    this.clicked = false;
    this.hovered = false;
    this.#_disabled = false;
    this.movable = false;
    this.moving = false;

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

    this.addMoveAction((deltaX, deltaY) => {
      if(this.movable && !this.disabled && this.clicked) {
        this.deltaX -= deltaX;
        this.deltaY -= deltaY;
      }
    });
  }

  initEvents() {
    if(!this.hasInitEvents && this.canvas != null) {
      this.canvas.addEventListener("mousemove", this, (event, result) => {
        if(!this.disabled) {
          const mousePosition = this.getMousePos(event);
          this.moving = false;

          if(this.clicked) {
            const deltaX = this.moveEventStartX - mousePosition.x;
            const deltaY = this.moveEventStartY - mousePosition.y;

            this.offsetMoveX += deltaX;
            this.offsetMoveY += deltaY;

            if(this.reactor) {
              this.reactor.dispatchEvent("onMove", deltaX, deltaY, mousePosition);
            }
            
            this.moveEventStartX = mousePosition.x;
            this.moveEventStartY = mousePosition.y;
            this.moving = true;
          }

          if(result) {
            if(this.reactor && !this.disabled) {
              this.reactor.dispatchEvent("onHover", mousePosition);
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
            if(!this.moving) {
              if(this.reactor) {
                this.reactor.dispatchEvent("onClick", mousePosition);
              }
  
              this.selected = true;
            } else {
              this.moving = false;
            }
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

          if(result && !this.moving) {
            if(this.reactor) {
              this.reactor.dispatchEvent("onDown", mousePosition);
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

          if(this.reactor) {
            this.reactor.dispatchEvent("onUp", mousePosition);
          }
          
          this.clicked = false;
        }
      });

      this.canvas.addEventListener("wheel", this, (event) => {
        if(this.hovered && !this.disabled && !this.scrollDisabled) {
          this.offsetScrollX += event.deltaX;
          this.offsetScrollY += event.deltaY;

          if(this.reactor) {
            this.reactor.dispatchEvent("onScroll", event.deltaX, event.deltaY);
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

          if(this.reactor) {
            this.reactor.dispatchEvent("onScroll", deltaX, deltaY, position);
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
    } else if(this.movable && this.hovered) {
      this.canvas.cursor = "grab";
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
    return true;
  }
  
  enable() {
    this.disabled = false;
    return true;
  }

  get disabled() {
    return this.#_disabled || (this.parent && this.parent.disabled);
  }

  set disabled(disabled) {
    if(disabled != this.#_disabled) {
      this.#_disabled = disabled;
      this.reactor && this.reactor.dispatchEvent("onChange", this);
    }
  }

  setClickAction(trigger) {
    this.removeAllClickActions();
    this.addClickAction(trigger);
  }
  
  addClickAction(trigger) {
    this.reactor.addEventListener("onClick", trigger);
  }
  
  removeClickAction(trigger) {
    this.reactor.removeEventListener("onClick", trigger);
  }

  removeAllClickActions() {
    this.reactor.removeAllEventListener("onClick");
  }

  setHoverAction(trigger) {
    this.removeAllHoverActions();
    this.addHoverAction(trigger);
  }
  
  addHoverAction(trigger) {
    this.reactor.addEventListener("onHover", trigger);
  }
  
  removeHoverAction(trigger) {
    this.reactor.removeEventListener("onHover", trigger);
  }

  removeAllHoverActions() {
    this.reactor.removeAllEventListener("onHover");
  }

  setDownAction(trigger) {
    this.removeAllDownActions();
    this.addDownAction(trigger);
  }
  
  addDownAction(trigger) {
    this.reactor.addEventListener("onDown", trigger);
  }
  
  removeDownAction(trigger) {
    this.reactor.removeEventListener("onDown", trigger);
  }

  removeAllDownActions() {
    this.reactor.removeAllEventListener("onDown");
  }

  setScrollAction(trigger) {
    this.removeAllScrollActions();
    this.addScrollAction(trigger);
  }
  
  addScrollAction(trigger) {
    this.reactor.addEventListener("onScroll", trigger);
  }
  
  removeScrollAction(trigger) {
    this.reactor.removeEventListener("onScroll", trigger);
  }

  removeAllScrollActions() {
    this.reactor.removeAllEventListener("onScroll");
  }

  setMoveAction(trigger) {
    this.removeAllMoveActions();
    this.addMoveAction(trigger);
  }
  
  addMoveAction(trigger) {
    this.reactor.addEventListener("onMove", trigger);
  }
  
  removeMoveAction(trigger) {
    this.reactor.removeEventListener("onMove", trigger);
  }

  removeAllMoveActions() {
    this.reactor.removeAllEventListener("onMove");
  }
  
  setChangeAction(trigger) {
    this.removeAllChangeActions();
    this.addChangeAction(trigger);
  }
  
  addChangeAction(trigger) {
    this.reactor.addEventListener("onChange", trigger);
  }
  
  removeChangeAction(trigger) {
    this.reactor.removeEventListener("onChange", trigger);
  }

  removeAllChangeActions() {
    this.reactor.removeAllEventListener("onChange");
  }

  setUpAction(trigger) {
    this.removeAllUpActions();
    this.addUpAction(trigger);
  }
  
  addUpAction(trigger) {
    this.reactor.addEventListener("onUp", trigger);
  }
  
  removeUpAction(trigger) {
    this.reactor.removeEventListener("onUp", trigger);
  }

  removeAllUpActions() {
    this.reactor.removeAllEventListener("onUp");
  }

  get height() {
    return this.#_height;
  }

  get width() {
    return this.#_width;
  }

  set width(width) {
    if(width != this.#_width) {
      this.#_width = width;
      this.reactor && this.reactor.dispatchEvent("onChange", this);
    }
  }

  set height(height) {
    if(height != this.#_height) {
      this.#_height = height;
      this.reactor && this.reactor.dispatchEvent("onChange", this);
    }
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
        return parent.x + (parentWidth / 2) - (this.width / 2) + this.deltaX;
      } else if(this.style.alignement == Constants.Alignement.RIGHT) {
        return parent.x + (parentWidth) - (this.width) - parentPadding + this.deltaX;
      } else if(this.style.alignement == Constants.Alignement.LEFT) {
        return parent.x + parentPadding + this.deltaX;
      }
    } else if(parent) {
      return parent.x + this.#_x + this.deltaX;
    }
    
    return this.#_x + this.deltaX;
  }

  set x(x) {
    this.#_x = x;
    this.reactor && this.reactor.dispatchEvent("onChange", this);
  }

  get y() {
    const parent = this.parent || this.canvas;

    if(this.style.verticalAlignement && parent) {
      const parentHeight = parent.height;
      const parentPadding = (parent.style && parent.style.padding) || 0;

      if(this.style.verticalAlignement == Constants.VerticalAlignement.BOTTOM) {
        return parent.y + (parentHeight) - (this.height) - parentPadding + this.deltaY;
      } else if(this.style.verticalAlignement == Constants.VerticalAlignement.CENTER) {
        return parent.y + (parentHeight / 2) - (this.height / 2) + this.deltaY;
      } else if(this.style.verticalAlignement == Constants.VerticalAlignement.TOP) {
        return parent.y + parentPadding + this.deltaY;
      }
    } else if(parent) {
      return parent.y + this.#_y + this.deltaY;
    }
    
    return this.#_y + this.deltaY;
  }

  set y(y) {
    this.#_y = y;
    this.reactor && this.reactor.dispatchEvent("onChange", this);
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

    this.#_style.component = this;
    this.reactor && this.reactor.dispatchEvent("onChange", this);
  }

  get hidden() {
    return (this.style && this.style.hidden) || (this.parent && this.parent.hidden);
  }

  set hidden(hidden) {
    if(hidden != this.disabled || hidden != this.style.hidden) {
      this.disabled = hidden;
      if(this.style) this.style.set("hidden", hidden);
      this.reactor && this.reactor.dispatchEvent("onChange", this);
    }
  }

  get selected() {
    return this.#_selected;
  }

  set selected(selected) {
    if(selected != this.#_selected) {
      this.#_selected = selected;
      this.reactor && this.reactor.dispatchEvent("onChange", this);
    }
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