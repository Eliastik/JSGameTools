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
const buttonText2 = new JSGameTools.Button("Long text button ............... This should be on next line", 5, 250, null, "#2ecc71", "#1abc9c", "#16a085");
const buttonImage = new JSGameTools.ButtonImage("pause.png", 5, 50, null, null, 64, 64);
const notification = new JSGameTools.NotificationMessage("A notification");
notification.closed = true;

buttonText.addClickAction(() => {
  notification.open();
});

function draw() {
  requestAnimationFrame(() => {
    ctx.fillStyle = "#888888";
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    buttonText.draw(ctx);
    buttonText2.draw(ctx);
    buttonImage.draw(ctx);
    notification.draw(ctx);

    draw();
  });
}

imageLoader.load(["pause.png"], () => {
  ctx.font = "32px sans-serif";
  buttonImage.loadImage(imageLoader);
  draw();
});