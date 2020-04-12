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
import Constants from "./constants";
import Utils from "./utils";
import Component from "./component";

export default class Menu extends Component {
  constructor(buttons, text, colors, fontSize, fontFamily, alignement, x, backgroundColor, blurCanvas) {
    super(0, 0, 0, 0);

    this.buttons = buttons;
    this.text = text;
    this.colors = colors || "#FFFFFF";
    this.fontSizeInitial = fontSize;
    this.fontSize = this.fontSizeInitial || Math.floor(Constants.Setting.FONT_SIZE / 1.25);
    this.fontFamily = fontFamily || Constants.Setting.FONT_FAMILY;
    this.alignement = alignement || "center";
    this.x = x || 0;
    this.backgroundColor = backgroundColor == undefined ? "rgba(44, 62, 80, 0.75)" : backgroundColor;
    this.blurCanvas = blurCanvas == undefined ? false : blurCanvas;
    this.disabled = true;
    this.lastKey = this.lastKey == undefined ? -1 : this.lastKey;
    this.selectedButton = this.selectedButton == undefined ? 0 : this.selectedButton;
  }

  draw(context) {
    super.draw(context);

    const canvas = context.canvas;
    const ctx = canvas.getContext("2d");

    if(!this.disabled) {
      if(!this.init) {
        document.addEventListener("keydown", event => {
          if(!this.disabled) {
            this.lastKey = event.keyCode;
          }
        });
  
        this.init = true;
      }
  
      if(this.blurCanvas) {
        Utils.blurCanvas(ctx, 5);
      }

      ctx.save();
  
      ctx.font = this.fontSize + "px " + this.fontFamily;
      ctx.fillStyle = this.backgroundColor;
      ctx.fillRect(0, 0, ctx.canvas.width, ctx.canvas.height);
    
      const heightText = Utils.wrapTextLines(ctx, this.text, null, this.fontSize, this.fontFamily)["height"];
      let heightButtons = 0;
    
      if(this.buttons != null) {
        if(this.lastKey == Constants.Key.UP) {
          this.selectedButton--;
        } else if(this.lastKey == Constants.Key.BOTTOM) {
          this.selectedButton++;
        }
    
        if(this.selectedButton >= this.buttons.length) {
          this.selectedButton = 0;
        } else if(this.selectedButton < 0) {
          this.selectedButton = this.buttons.length - 1;
        }
    
        for(let i = 0; i < this.buttons.length; i++) {
          if(this.buttons[i].autoHeight) {
            heightButtons += Utils.wrapTextLines(ctx, this.buttons[i].text, null, this.fontSize, this.fontFamily)["height"] + 16;
          } else {
            heightButtons += this.buttons[i].height + 5;
          }
        }
      }
    
      const totalHeight = heightText + heightButtons;
      const startY = (ctx.canvas.height - totalHeight) / 2 + 8;
      let currentY = startY + heightText;
    
      Utils.drawText(ctx, this.text, this.colors, this.fontSize, this.fontFamily, this.alignement, "default", this.x, startY, true);
    
      if(this.buttons != null) {
        for(let i = 0; i < this.buttons.length; i++) {
          this.buttons[i].y = currentY;
    
          if(this.selectedButton == i) {
            this.buttons[i].selected = true;
          } else {
            this.buttons[i].selected = false;
          }
    
          this.buttons[i].enable();
          this.buttons[i].draw(ctx);
    
          if(this.selectedButton == i && this.lastKey == Constants.Key.ENTER && this.buttons[i].triggersClick != null && this.buttons[i].triggersClick.length > 0 && !this.buttons[i].disabled) {
            this.lastKey = -1;
            this.selectedButton = 0;
            this.buttons[i].triggersClick.forEach(trigger => trigger());
            break;
          }
    
          currentY += this.buttons[i].height + 8;
        }
      }
      
      ctx.restore();
    } else {
      this.buttons.forEach(button => button.disable());
    }
  
    this.lastKey = -1;
  }

  set(buttons, text, colors, alignement, x) {
    this.buttons = buttons;
    this.text = text;
    this.colors = colors;
    this.alignement = alignement || "center";
    this.x = x || 0;
    this.enable();
  }
}