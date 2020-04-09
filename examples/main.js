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
const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

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
const menu = new JSGameTools.Menu([buttonMenu1, buttonMenu5, buttonMenu2, buttonMenu3, buttonMenu4], "Pause menu\nYou can use the arrow keys, press enter to select");
const notification2 = new JSGameTools.NotificationMessage("Hi!", null, "rgba(46, 204, 225, 0.85)");
const textField = new JSGameTools.Input(5, 250, 150);

buttonText.addClickAction(() => {
  notification.open();
});

buttonTextFullscreen.addClickAction(() => {
  JSGameTools.Utils.toggleFullscreen(canvas);
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

function draw() {
  requestAnimationFrame(() => {
    ctx.fillStyle = "#888888";
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    buttonText.draw(ctx);
    buttonText2.draw(ctx);
    buttonTextFullscreen.draw(ctx);
    buttonImage.draw(ctx);
    notification.draw(ctx);
    menu.draw(ctx);
    notification2.draw(ctx);
    textField.draw(ctx);

    if(!menu.disabled) {
      buttonText.disable();
      buttonText2.disable();
      buttonImage.disable();
      buttonTextFullscreen.disable();
    } else {
      buttonText.enable();
      buttonText2.enable();
      buttonImage.enable();
      buttonTextFullscreen.enable();
    }

    draw();
  });
}

imageLoader.load(["pause.png"], () => {
  buttonImage.loadImage(imageLoader);
  draw();
});