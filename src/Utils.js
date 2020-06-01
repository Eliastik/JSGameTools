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
export default {
  preRenderedFont: {},
  lastKey: -1,
  preRenderFont: function(cars, size, color, fontFamily) {
    cars.push("?"); cars.push(" "); cars.push("A");
    
    for(let i = 0; i < cars.length; i++) {
      const canvasTmp = document.createElement("canvas");
      const ctxTmp = canvasTmp.getContext("2d");
      ctxTmp.font = size + "px " + fontFamily;
      const width = ctxTmp.measureText(cars[i]).width;
      
      canvasTmp.width = width;
      canvasTmp.height = size + (size / 6);
      
      ctxTmp.font = size + "px " + fontFamily;
      ctxTmp.fillStyle = color;
      ctxTmp.textBaseline = "top";
      ctxTmp.fillText(cars[i], 0, 0);
      
      this.preRenderedFont[cars[i]] = canvasTmp;
    }
  },
  drawImage: function(ctx, image, x, y, width, height, sx, sy, sWidth, sHeight, eraseBelow, degrees) {
    this.drawImageWrapper(ctx, image, x, y, width, height, sx, sy, sWidth, sHeight, eraseBelow, degrees);
  },
  drawImageData: function(ctx, imageData, x, y, width, height, sx, sy, sWidth, sHeight, eraseBelow, degrees) {
    this.drawImageWrapper(ctx, imageData, x, y, width, height, sx, sy, sWidth, sHeight, eraseBelow, degrees);
  },
  drawImageWrapper: function(ctx, image, x, y, width, height, sx, sy, sWidth, sHeight, eraseBelow, degrees) {
    x = (x == undefined || isNaN(x)) ? null : Math.round(x);
    y = (y == undefined || isNaN(y)) ? null : Math.round(y);
    width = (width == undefined || isNaN(width)) ? null : Math.round(width);
    height = (height == undefined || isNaN(height)) ? null : Math.round(height);
    sx = (sx == undefined || isNaN(sx)) ? null : Math.round(sx);
    sy = (sy == undefined || isNaN(sy)) ? null : Math.round(sy);
    sWidth = (sWidth == undefined || isNaN(sWidth)) ? null : Math.round(sWidth);
    sHeight = (sHeight == undefined || isNaN(sHeight)) ? null : Math.round(sHeight);
    eraseBelow = eraseBelow == undefined ? false : eraseBelow;
    degrees = (degrees == undefined || isNaN(degrees)) ? null : degrees;
  
    if(degrees != undefined) {
      ctx.save();
      ctx.translate(x + width / 2, y + height / 2);
      ctx.rotate(degrees * Math.PI / 180);
      x = -(width / 2);
      y = -(height / 2);
    }
  
    if(eraseBelow) {
      ctx.clearRect(x, y, width, height);
    }
  
    if(ctx != undefined && image != undefined) {
      if(sx != undefined && sy != undefined && sWidth != undefined && sHeight != undefined) {
        ctx.drawImage(image, sx, sy, sWidth, sHeight, x, y, width, height);
      } else {
        ctx.drawImage(image, x, y, width, height);
      }
    }
  
    if(degrees != undefined) {
      ctx.restore();
    }
  },
  drawText: function(ctx, text, color, size, fontFamily, alignement, verticalAlignement, x, y, wrap, bold, underline) {
    if(ctx) {
      ctx.save();

      if(!Array.isArray(color)) {
        ctx.fillStyle = color;
        ctx.strokeStyle = color;
      }
  
      ctx.font = (bold ? "bold " : "") + size + "px " + fontFamily;
      ctx.filter = "none";
  
      if(wrap) {
        text = this.wrapTextLines(ctx, text)["text"];
      }
      
      const lines = text.split("\n");
      let maxWidth = 0;
      let xCurrent = 0;
      let yFirst = 0;
  
      if(verticalAlignement == "center") {
        y = Math.round((ctx.canvas.height / 2) - (size * lines.length / 2));
      } else if(verticalAlignement == "top") {
        y = 5;
      } else if(verticalAlignement == "bottom") {
        y = Math.round((ctx.canvas.height) - (size * lines.length) / 2 - size / 5);
      }
  
      for(let i = 0; i < lines.length; i++) {
        const currentText = lines[i];
        const currentWidth = ctx.measureText(currentText).width;
        let yCurrent = 0;
  
        if(Array.isArray(color)) {
          let colorIndex = i;
  
          if(colorIndex > color.length - 1) {
            colorIndex = color.length - 1;
          }
  
          ctx.fillStyle = color[colorIndex];
          ctx.strokeStyle = color[colorIndex];
        }
  
        if(alignement == "center") {
          xCurrent = Math.round((ctx.canvas.width / 2) - (ctx.measureText(currentText).width / 2));
          yCurrent = Math.round(y + (size * i));
        } else if(alignement == "right") {
          xCurrent = Math.round((ctx.canvas.width) - (ctx.measureText(currentText).width) - 15);
          yCurrent = Math.round(y + (size * i));
        } else if(alignement == "left") {
          xCurrent = 5;
          yCurrent = Math.round(y + (size * i));
        } else {
          xCurrent = Math.round(x);
          yCurrent = Math.round(y + (size * i));
        }
  
        ctx.fillText(currentText, xCurrent, yCurrent);
  
        if(underline) {
          ctx.lineWidth = 1;
          ctx.beginPath();
          ctx.moveTo(xCurrent, yCurrent + 3);
          ctx.lineTo(Math.round(xCurrent + currentWidth), yCurrent + 3);
          ctx.stroke();
        }
  
        if(currentWidth > maxWidth) maxWidth = currentWidth;
        if(i == 0) yFirst = yCurrent;
      }
  
      ctx.restore();
  
      return {
        x: xCurrent,
        y: yFirst,
        height: size * lines.length,
        width: maxWidth
      };
    }
  },
  wrapText: function(text, limit) {
    if(text.length > limit) {
      let p = limit;

      for(; p > 0 && text[p] != " "; p--);

      if(p > 0) {
        const left = text.substring(0, p);
        const right = text.substring(p + 1);
        return left + "\n" + this.wrapText(right, limit);
      }
    }

    return text;
  },
  wrapTextLines: function(ctx, text, width, fontSize, fontFamily, disableWrap) {
    if(ctx && text) {
      ctx.save();
      ctx.font = fontSize + "px " + fontFamily;
  
      const lines = text.split("\n");
      let newText = "";
      const widthCar = width || ctx.measureText("A").width;
      const nbCarLine = Math.round(ctx.canvas.width / widthCar);
  
      let heightTotal = 0;
      let maxWidth = 0;
  
      for(let i = 0; i < lines.length; i++) {
        const lineWrap = this.wrapText(lines[i], nbCarLine);
        newText += lineWrap;
  
        if(i < lines.length - 1) {
          newText += "\n";
        }
  
        for(let j = 0; j < lineWrap.split("\n").length; j++) {
          const widthText = ctx.measureText(lineWrap.split("\n")[j]).width;
          heightTotal += fontSize;
          if(widthText > maxWidth) maxWidth = widthText;
        }
      }
  
      ctx.restore();

      return {
        text: newText,
        height: heightTotal,
        width: maxWidth,
        carWidth: widthCar
      };
    } else {
      return {
        text: "",
        height: 0,
        width: 0,
        carWidth: 0
      };
    }
  },
  drawArrow: function(ctx, fromx, fromy, tox, toy) {
    ctx.save();

    ctx.lineCap = "round";
    ctx.lineWidth = 8;
    ctx.strokeStyle = "#FF0000";
    ctx.filter = "";
  
    ctx.beginPath();
    const headlen = 20;
    const dx = tox - fromx;
    const dy = toy - fromy;
    const angle = Math.atan2(dy, dx);
    ctx.moveTo(fromx, fromy);
    ctx.lineTo(tox, toy);
    ctx.moveTo(tox, toy);
    ctx.lineTo(tox - headlen * Math.cos(angle - Math.PI / 6), toy - headlen * Math.sin(angle - Math.PI / 6));
    ctx.moveTo(tox, toy);
    ctx.lineTo(tox - headlen * Math.cos(angle + Math.PI / 6), toy - headlen * Math.sin(angle + Math.PI / 6));
    ctx.stroke();
    
    ctx.restore();
  },
  clear: function(ctx) {
    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
  },
  isFilterHueAvailable: function() {
    const canvas = document.createElement("canvas");
    canvas.width = 5;
    canvas.height = 5;
    const ctx = canvas.getContext("2d");
  
    ctx.fillStyle = "#FF0000";
    ctx.filter = "hue-rotate(90deg)";
    ctx.fillRect(0, 0, 5, 5);
    const color = ctx.getImageData(0, 0, 1, 1).data;
  
    if(color[0] == 255 && color[1] == 0 && color[2] == 0) {
      return false;
    }
  
    return true;
  },
  blurCanvas: function(ctx, length) {
    ctx.save();
    ctx.filter = "blur(" + length  + "px)";
    this.drawImageData(ctx, ctx.canvas, 0, 0, ctx.canvas.width, ctx.canvas.height);
    ctx.restore();
  },
  getFontSize: function(ctx) {
    return Math.floor(parseInt(ctx.font.match(/\d+/), 10) / 1.25);
  },
  autoResizeCanvas: function(canvas, initialWidth, initialHeight) {
    if(!document.fullscreenElement) {
      if(initialWidth >= document.documentElement.clientWidth * 0.85) {
        var ratio = initialWidth / initialHeight;
        canvas.width = document.documentElement.clientWidth * 0.85;
        canvas.height = canvas.width / ratio;
      } else {
        canvas.width = initialWidth;
        canvas.height = initialHeight;
      }
    } else if(document.fullscreenElement == canvas) {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    } else {
      canvas.width = initialWidth;
      canvas.height = initialHeight;
    }
  },
  enableAutoResizeCanvas: function(canvas, initialWidth, initialHeight) {
    if(canvas && canvas.getAttribute("autoresize-canvas-event") != "true") {
      this.autoResizeCanvas(canvas, initialWidth, initialHeight);
  
      window.addEventListener("resize", () => {
        canvas.setAttribute("autoresize-canvas-event", "true");
        this.autoResizeCanvas(canvas, initialWidth, initialHeight);
      });
    }
  },
  autoResizeCanvasFullscreen: function(canvas, container) {
    if(document.fullscreenElement == (container || canvas)) {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      
      if(container) {
        container.width = window.innerWidth;
        container.height = window.innerHeight;
      }
    }
  },
  enableAutoResizeCanvasFullscreen: function(canvas, container) {
    if(canvas && canvas.getAttribute("autoresizefullscreen-canvas-event") != "true") {
      this.autoResizeCanvasFullscreen(canvas, container);
  
      window.addEventListener("resize", () => {
        canvas.setAttribute("autoresizefullscreen-canvas-event", "true");
        this.autoResizeCanvasFullscreen(canvas, container);
      });
    }
  },
  toggleFullscreen: function(canvas, container) {
    if(canvas) {
      const initialWidth = canvas.width;
      const initialHeight = canvas.height;

      if(container) {
        container.width = initialWidth;
        container.height = initialHeight;
      }

      if(!document.fullscreenElement) {
        if((container || canvas).requestFullscreen) {
          (container || canvas).requestFullscreen();
        } else if((container || canvas).mozRequestFullScreen) {
          (container || canvas).mozRequestFullScreen();
        } else if((container || canvas).webkitRequestFullscreen) {
          (container || canvas).webkitRequestFullscreen();
        } else if((container || canvas).msRequestFullscreen) {
          (container || canvas).msRequestFullscreen();
        } else if((container || canvas).oRequestFullscreen) {
          (container || canvas).oRequestFullscreen();
        }
      } else {
        if(document.exitFullscreen) {
          document.exitFullscreen();
        }
      }

      this.enableAutoResizeCanvasFullscreen(canvas, container);

      if(canvas.getAttribute("fullscreenchange-canvas-event") != "true") {
        canvas.setAttribute("fullscreenchange-canvas-event", "true");

        const onfullscreenchange = () => {
          if(document.fullscreenElement != (container || canvas)) {
            canvas.width = initialWidth;
            canvas.height = initialHeight;
      
            if(container) {
              container.width = initialWidth;
              container.height = initialHeight;
            }
          }
        };
    
        if(typeof(document.onfullscreenchange) !== "undefined") {
          document.onfullscreenchange = onfullscreenchange;
        } else if(typeof(document.onmsfullscreenchange) !== "undefined") {
          document.onmsfullscreenchange = onfullscreenchange;
        } else if(typeof(document.onmozfullscreenchange) !== "undefined") {
          document.onmozfullscreenchange = onfullscreenchange;
        } else if(typeof(document.onwebkitfullscreenchange) !== "undefined") {
          document.onwebkitfullscreenchange = onfullscreenchange;
        } else if(typeof(document.onokitfullscreenchange) !== "undefined") {
          document.onofullscreenchange = onfullscreenchange;
        }
      }
    }
  }
};