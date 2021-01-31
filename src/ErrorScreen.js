/*
 * Copyright (C) 2020-2021 Eliastik (eliastiksofts.com)
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
import Scene from "./Scene";
import Constants from "./Constants";
import Style from "./Style";
import Menu from "./Menu";
import Label from "./Label";
import Button from "./Button";
import Row from "./Row";

export default class ErrorScreen extends Scene {
  constructor(canvas) {
    super();
    this.canvas = canvas;
    this.labelDetailsSceneError = new Label("", null, null, new Style({ "fontColor": "white", "alignement": "center", "fontSize": Constants.Setting.FONT_SIZE / 1.75 }));
    this.labelDetailsSceneError.hidden = true;

    const buttonSceneError = new Button(null, null, null, null, new Style({ "backgroundColor": Constants.Setting.BUTTON_DEFAULT_ALTERNATIVE_BACKGROUND }), new Label(Constants.String.RETRY, null, null, new Style({ "fontColor": "white", "alignement": "center" })));
    const buttonDetailsSceneError = new Button(null, null, null, null, new Style({ "backgroundColor": Constants.Setting.BUTTON_DEFAULT_ALTERNATIVE_BACKGROUND }), new Label(Constants.String.DETAILS, null, null, new Style({ "fontColor": "white", "alignement": "center" })));
    const colDetailsSceneError = new Row(null, null, null, 0, new Style({ "alignement": "center" }), this.labelDetailsSceneError);
    const menuSceneError = new Menu(new Style({ "spaceBetweenComponents": 15, "backgroundColor": Constants.Setting.ERROR_MENU_BACKGROUND_COLOR }), new Label(Constants.String.ERROR_MESSAGE_CANVAS_LABEL, null, null, new Style({ "fontColor": "white", "alignement": "center" })), colDetailsSceneError, new Row(null, null, null, null, new Style({ "alignement": "center" }), buttonSceneError, buttonDetailsSceneError));
    menuSceneError.enable();

    buttonSceneError.addClickAction(() => {
        this.canvas.hasError = false;
        this.canvas.scene = this.canvas.scenePrevious;
        this.labelDetailsSceneError.hidden = true;
        colDetailsSceneError.maxHeight = 0;
    });

    buttonDetailsSceneError.addClickAction(() => {
        this.labelDetailsSceneError.hidden = !this.labelDetailsSceneError.hidden;
        colDetailsSceneError.maxHeight = !this.labelDetailsSceneError.hidden ? 100 : 0;
    });

    this.add(menuSceneError);
  }

  set errorText(text) {
    this.labelDetailsSceneError.text = text;
  }

  get errorText() {
    return this.labelDetailsSceneError.text;
  }
}