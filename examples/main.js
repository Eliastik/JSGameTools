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
// Create components
const imageLoader = new JSGameTools.ImageLoader();
const buttonText = new JSGameTools.Button("Show a notification", 5, 5, null, "#2ecc71", "#1abc9c", "#16a085");
const buttonText2 = new JSGameTools.Button("Long text button ............... This should be on next line", 5, 250, "right", "#2ecc71", "#1abc9c", "#16a085");
const buttonImage = new JSGameTools.ButtonImage("pause.png", 5, 50, null, null, 64, 64);
const buttonTextFullscreen = new JSGameTools.Button("Toggle fullscreen", 5, 150, "center", "#2ecc71", "#1abc9c", "#16a085");
const notification = new JSGameTools.NotificationMessage("A notification");

const buttonMenu1 = new JSGameTools.Button("A button, aligned to the left", 5, 5, "left", "#2ecc71", "#1abc9c", "#16a085");
const buttonMenu5 = new JSGameTools.Button("Display a notification", 5, 5, null, "#2ecc71", "#1abc9c", "#16a085");
const buttonMenu2 = new JSGameTools.Button("Another button, aligned to the right", 5, 5, "right", "#2ecc71", "#1abc9c", "#16a085");
const buttonMenu3 = new JSGameTools.Button("A long buttonnnnnnnnnnnnnnnnnnnnnnnnnn", 5, 5, "right", "#2ecc71", "#1abc9c", "#16a085");
const buttonMenu4 = new JSGameTools.Button("Close (centered)", 5, 5, "center", "#CC2F2F", "#F23838", "#A62626");
const menu = new JSGameTools.Menu(null, null, new JSGameTools.Label("Pause menu\nYou can use the arrow keys, press enter to select", null, null, null, null, "white", "center"), buttonMenu1, buttonMenu5, buttonMenu2, buttonMenu3, buttonMenu4);
const notification2 = new JSGameTools.NotificationMessage("Hi!", null, "rgba(46, 204, 225, 0.85)", null, null, null, null, true);
const textField = new JSGameTools.Input(5, 250, 150);
const label1 = new JSGameTools.Label("A label", 5, 325);
const link1 = new JSGameTools.Link("A long link", 5, 375);
const tooltip1 = new JSGameTools.Tooltip("A tooltip\nSecond line");
label1.tooltip = tooltip1;
const tooltip2 = new JSGameTools.Tooltip("A tooltip .... .. .. ...... Autowrap\nNew line");
buttonText2.tooltip = tooltip2;
const fpsMeter = new JSGameTools.FPSMeter(false, null, null, null, null, null, "right", "bottom");
const progress = new JSGameTools.ProgressBar(300, 5, 200, 25, null, null, 0.25);
progress.percent = 1;
const tooltip3 = new JSGameTools.Tooltip("Current: " + (Math.round(progress.percent * 100) / 100) * 100 + "%");
progress.tooltip = tooltip3;

// Custom component
class Box extends JSGameTools.Component {
  constructor() {
    super();
  }

  draw(context) {
    super.draw(context);
    
    const canvas = context.canvas;
    const ctx = canvas.getContext("2d");
    ctx.save();

    ctx.fillStyle = "#888888";
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    ctx.restore();
  }
}

// Create scene (containing components) and canvas
const scene = new JSGameTools.Scene(new Box(), buttonText, buttonText2, buttonImage, buttonTextFullscreen, notification, menu, notification2, textField, label1, link1, tooltip1, tooltip2, fpsMeter, progress, tooltip3);
const canvas = new JSGameTools.Canvas(scene, document.getElementById("canvas"));
canvas.appendTo(document.body);

// Events
buttonText.addClickAction(() => {
  notification.open();
});

buttonTextFullscreen.addClickAction(() => {
  canvas.toggleFullscreen();
});

buttonImage.addClickAction(() => {
  menu.enable();
});

buttonMenu4.addClickAction(() => {
  menu.disable();
});

buttonMenu5.addClickAction(() => {
  notification2.open();
});

link1.addClickAction(() => {
  notification.open();
});

// Load pause image and start the canvas rendering
imageLoader.load(["pause.png"], () => {
  buttonImage.loadImage(imageLoader);
  canvas.startDraw();

  // Randomly change the progress value
  setInterval(() => {
    if(progress.percent < 1) {
      progress.percent = Math.random();
    } else if(progress.percent >= 1) {
      progress.percent = Math.random();
    }

    tooltip3.text = "Current: " + (Math.round(progress.percent * 100) / 100) * 100 + "%";
  }, 3000);
});