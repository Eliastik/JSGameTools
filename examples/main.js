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
const JGT = JSGameTools;

const imageLoader = new JGT.ImageLoader();
const buttonText = new JGT.Button(5, 5, null, null, "#2ecc71", "#1abc9c", "#16a085", null, null, null, new JGT.Label("Show a notification", null, null, null, null, "white"));
const buttonText2 = new JGT.Button(5, 150, null, null,  "#2ecc71", "#1abc9c", "#16a085", "right", null, null, new JGT.Label("Long text button ........... This should be on next line", null, null, null, null, "white"));
const pauseImage = new JGT.Image("pause.png", null, null, 64, 64, null, "center");
const buttonImage = new JGT.Button(5, 50, null, null, null, null, null, "left", null, null, new JGT.Row(5, 250, null, null, null, null, false, pauseImage, new JGT.Label("Pause", null, null, null, null, "white", null, "center")));
const buttonTextFullscreen = new JGT.Button(5, 75, null, null, "#2ecc71", "#1abc9c", "#16a085", "center", null, null, new JGT.Label("Toggle fullscreen", null, null, null, null, "white"));
const notification = new JGT.NotificationMessage(null, false, null, null, null, null, null, null, null, new JGT.Label("A notification", null, null, null, null, "white", JGT.Constants.Alignement.CENTER),  new JGT.Row(null, null, null, null, null, null, false, new JGT.Label("Label : ", null, null, null, null, "white", null, "center"), new JGT.Button(null, null, null, null, null, null, null, null, null, null, new JGT.Label("Button", null, null, null, null, "white"))));

const buttonMenu1 = new JGT.Button(5, 5, null, null,  "#2ecc71", "#1abc9c", "#16a085", "left", null, null, new JGT.Label("A button, aligned to the left", null, null, null, null, "white"));
const buttonMenu5 = new JGT.Button(5, 5, null, null,  "#2ecc71", "#1abc9c", "#16a085", null, null, null, new JGT.Label("Display a notification", null, null, null, null, "white"));
const buttonMenu2 = new JGT.Button(5, 5, null, null,  "#2ecc71", "#1abc9c", "#16a085", "right", null, null, new JGT.Label("Another button, aligned to the right", null, null, null, null, "white"));
const buttonMenu3 = new JGT.Button(5, 5, null, null,  "#2ecc71", "#1abc9c", "#16a085", "right", null, null, new JGT.Label("A long buttonnnnnnnnnnnnnnnnnnnnnnnnnn", null, null, null, null, "white"));
const buttonMenu4 = new JGT.Button(5, 5, null, null,  "#CC2F2F", "#F23838", "#A62626", "center", null, null, new JGT.Label("Close (centered)", null, null, null, null, "white"));
const menu = new JGT.Menu(null, null, new JGT.Label("Pause menu\nYou can use the arrow keys, press enter to select", null, null, null, null, "white", "center"), buttonMenu1, buttonMenu5, buttonMenu2, buttonMenu3, buttonMenu4, new JGT.Input(null, null, 150, null, JGT.Constants.Alignement.CENTER));
const notification2 = new JGT.NotificationMessage("rgba(46, 204, 225, 0.85)", true, null, null, null, null, null, null, null, new JGT.Label("Hi!", null, null, null, null, "white", JGT.Constants.Alignement.CENTER));
const textField = new JGT.Input(5, 250, 150);
const label1 = new JGT.Label("A label", 5, 325);
const row1 = new JGT.Row(5, 250, null, null, null, null, false, label1, textField);
const link1 = new JGT.Link("A long link", 5, 300);
const tooltip1 = new JGT.Tooltip(null, null, null, new JGT.Label("A tooltip\nSecond line", null, null, null, null, "white"), new JGT.Row(null, null, null, null, null, null, false, new JGT.Label("Label : ", null, null, null, null, "white", null, "center"), 
new JGT.Button(5, 150, null, null,  "#CC2F2F", "#F23838", "#A62626", null, null, null, new JGT.Label("Button", null, null, null, null, "white"))));
label1.tooltip = tooltip1;
const tooltip2 = new JGT.Tooltip(null, null, null, new JGT.Label("A tooltip .... .. .. ...... Autowrap\nNew line", null, null, null, null, "white"));
buttonText2.tooltip = tooltip2;
const fpsMeter = new JGT.FPSMeter(false, null, null, null, null, null, "right", "bottom");
const progress = new JGT.ProgressBar(300, 5, 200, 25, null, null, 0.25);
progress.percent = 1;
const tooltip3 = new JGT.Tooltip(null, null, null, new JGT.Label("Current: " + (Math.round(progress.percent * 100) / 100) * 100 + "%", null, null, null, null, "white"));
progress.tooltip = tooltip3;
const buttonArrow = new JGT.Button(5, 150, null, null, "#2ecc71", "#1abc9c", "#16a085", null, null, null, new JGT.Arrow(null, null, 100, 200, null, null, "white"));

// Custom component
class Box extends JGT.Component {
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
const scene = new JGT.Scene(new Box(), buttonText, buttonText2, buttonImage, buttonTextFullscreen, notification, menu, notification2, row1, link1, tooltip1, tooltip2, fpsMeter, progress, tooltip3, buttonArrow);
const canvas = new JGT.Canvas(scene, document.getElementById("canvas"));
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
  pauseImage.loadImage(imageLoader);
  canvas.startDraw();

  // Randomly change the progress value
  setInterval(() => {
    if(progress.percent < 1) {
      progress.percent = Math.random();
    } else if(progress.percent >= 1) {
      progress.percent = Math.random();
    }

    tooltip3.components[0].text = "Current: " + Math.round((Math.round(progress.percent * 100) / 100) * 100) + "%";
  }, 3000);
});