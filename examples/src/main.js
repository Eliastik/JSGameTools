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

const buttonStyle = new JGT.Style({
  "backgroundColor": "#2ecc71",
  "backgroundColorHover": "#1abc9c",
  "backgroundColorDown": "#16a085"
});

const buttonStyleRed = new JGT.Style({
  "backgroundColor": "#CC2F2F",
  "backgroundColorHover": "#F23838",
  "backgroundColorDown": "#A62626"
});

const labelStyle = new JGT.Style({
  "fontColor": "white"
});

const labelStyleCenter = new JGT.Style({
  "fontColor": "white",
  "alignement": "center"
});

const labelStyleVerticalCenter = new JGT.Style({
  "fontColor": "white",
  "verticalAlignement": "center"
});

const buttonText = new JGT.Button(5, 5, null, null, buttonStyle, new JGT.Label("Show a notification", null, null, labelStyle));
const buttonText2 = new JGT.Button(5, 150, null, null, buttonStyle, new JGT.Label("Long text button ........... This should be on next line", null, null, labelStyle));
buttonText2.style.set("alignement", "right");
const pauseImage = new JGT.ImageContainer("pause.png", null, null, 64, 64, new JGT.Style({ "verticalAlignement": "center", "alignement": "left" }));
const buttonImage = new JGT.Button(null, 50, null, null, new JGT.Style({ "alignement": "left" }), new JGT.Row(5, 250, null, null, null, pauseImage, new JGT.Label("Pause", null, null, labelStyleVerticalCenter)));
const buttonTextFullscreen = new JGT.Button(5, 75, null, null, buttonStyle, new JGT.Label("Toggle fullscreen", null, null, labelStyle));
buttonTextFullscreen.style.set("alignement", "center");
const notification = new JGT.NotificationMessage(null, null, null, new JGT.Label("A notification", null, null, labelStyleCenter), new JGT.Row(null, null, null, null, null, new JGT.Label("Label : ", null, null, labelStyleVerticalCenter), new JGT.Button(null, null, null, null, null, new JGT.Label("Button", null, null, labelStyle))));

const buttonMenu1 = new JGT.Button(5, 5, null, null, buttonStyle, new JGT.Label("A button, aligned to the left", null, null, labelStyle));
buttonMenu1.style.set("alignement", "left");
const buttonMenu5 = new JGT.Button(5, 5, null, null, buttonStyle, new JGT.Label("Display a notification", null, null, labelStyle));
const buttonMenu2 = new JGT.Button(5, 5, null, null, buttonStyle, new JGT.Label("Another button, aligned to the right", null, null, labelStyle));
buttonMenu2.style.set("alignement", "right");
const buttonMenu3 = new JGT.Button(5, 5, null, null, buttonStyle, new JGT.Label("A long buttonnnnnnnnnnnnnnnnnnnnnnnnnn", null, null, labelStyle));
buttonMenu3.style.set("alignement", "right");
const buttonMenu4 = new JGT.Button(5, 5, null, null, buttonStyleRed, new JGT.Label("Close (centered)", null, null, labelStyle));
buttonMenu4.style.set("alignement", "center");
const buttonMenu6 = new JGT.Button(5, 5, null, null, buttonStyle, new JGT.Label("Disable/enable high DPI", null, null, labelStyle));
buttonMenu6.style.set("alignement", "center");
const menuLabel = new JGT.Label("Pause menu\nYou can use the arrow keys, press enter to select", null, null, labelStyle, "center");
menuLabel.style.set("alignement", "center");
const menu = new JGT.Menu(null, menuLabel, buttonMenu1, buttonMenu5, buttonMenu2, buttonMenu3, buttonMenu6, buttonMenu4, new JGT.Input(null, null, 150, null, new JGT.Style({"alignement": JGT.Constants.Alignement.CENTER })), new JGT.Input(null, null, 150, null, new JGT.Style({"alignement": JGT.Constants.Alignement.CENTER })));

const notification2 = new JGT.NotificationMessage(new JGT.Style({ "backgroundColor": "rgba(46, 204, 225, 0.85)", "foreground": true }), null, null, new JGT.Label("Hi!", null, null, labelStyleCenter));
const textField = new JGT.Input(5, 250, 150);
const label1 = new JGT.Label("A label", 5, 325);
const row1 = new JGT.Row(5, 250, null, null, null, label1, textField);
const link1 = new JGT.Link("A long link", 5, 300);
link1.movable = true;
const tooltip1 = new JGT.Tooltip(null, new JGT.Label("A tooltip\nSecond line", null, null, labelStyle), new JGT.Row(null, null, null, null, null, new JGT.Label("Label : ", null, null, labelStyleVerticalCenter), new JGT.Button(5, 150, null, null, buttonStyleRed, new JGT.Label("Button", null, null, labelStyle))));
label1.tooltip = tooltip1;
const tooltip2 = new JGT.Tooltip(null, new JGT.Label("A tooltip .... .. .. ...... Autowrap\nNew line", null, null, labelStyle));
buttonText2.tooltip = tooltip2;
const fpsMeter = new JGT.FPSMeter(false, null, null, new JGT.Style({ "alignement": "right", "verticalAlignement": "bottom"}));
const progress = new JGT.ProgressBar(300, 5, 200, 25, null, null, JGT.EasingFunctions.easeInOutCubic);
progress.percent = 1;
const tooltip3 = new JGT.Tooltip(null, new JGT.Label("Current: " + (Math.round(progress.percent * 100) / 100) * 100 + "%", null, null, labelStyle));
progress.tooltip = tooltip3;
const buttonArrow = new JGT.Button(5, 150, null, null, buttonStyle, new JGT.Arrow(null, null, 100, 200, new JGT.Style({ "color": "white" })));
const colScrollable = new JGT.Col(255, 250, 250, 42, new JGT.Style({ "backgroundColor": "#fff"}), new JGT.Row(null, null, null, null, null, new JGT.Label("Test1"), new JGT.Label("Test2"), new JGT.Label("Test3"), new JGT.Label("Test4")), new JGT.Row(null, null, null, null, null, new JGT.Label("Test5"), new JGT.Label("Test6"), new JGT.Label("Test7"), new JGT.Label("Test8")), new JGT.Row(null, null, null, null, null, new JGT.Label("Test9"), new JGT.Label("Test10"), new JGT.Label("Test11"), new JGT.Label("Test12"), new JGT.Label("Test")));
colScrollable.style.set("padding", 10);
colScrollable.style.set("spaceBetweenComponents", 0);
const optionLast = new JGT.SelectOption(new JGT.Label("Removed in 5s"));
const options = new JGT.SelectOptionsContainer(75, null, new JGT.SelectOption(new JGT.Label("First choice")), new JGT.SelectOption(new JGT.Label("Second choice")), new JGT.SelectOption(new JGT.Label("Third choice")), optionLast);
const select = new JGT.Select(255, 315, null, null, new JGT.Style({ "verticalAlignement": "bottom" }), options);
select.movable = true;

// Custom component
class Box extends JGT.Component {
  constructor(style) {
    super(null, null, null, null, style);
  }

  draw(context) {
    super.draw(context);
    
    const canvas = context.canvas;
    const ctx = canvas.getContext("2d");
    ctx.save();

    ctx.fillStyle = this.style.backgroundColor;
    ctx.fillRect(this.x, this.y, this.parent.width, this.parent.height);

    ctx.restore();
  }
}

// Create scene (containing components) and canvas
const box = new Box(new JGT.Style({ "backgroundColor": "#888888" }));
const scene = new JGT.Scene(box, buttonText, buttonText2, buttonImage, buttonTextFullscreen, notification, menu, notification2, row1, link1, tooltip1, tooltip2, fpsMeter, progress, tooltip3, buttonArrow, colScrollable, select, options);
const canvas = new JGT.Canvas(scene, document.getElementById("canvas"), null, null, true);
canvas.appendTo(document.getElementById("canvasContainer"));

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

buttonMenu6.addClickAction(() => {
  JGT.Constants.Setting.ENABLE_PIXEL_RATIO_RESIZING = !JGT.Constants.Setting.ENABLE_PIXEL_RATIO_RESIZING;
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

  // Remove the last option element
  setTimeout(() => {
    options.remove(optionLast);
  }, 5000);
});