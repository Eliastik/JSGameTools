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
  Setting: {
    DISABLE_OPTIMIZATIONS: false, // true to disable optimizations, can fix some problems, disabling optimization reduces performance
    DISABLE_EXPERIMENTAL_OPTIMIZATIONS: true, // true to disable optimizations that are considered experimental
    DISABLE_CONTAINERS_CUTTING: false, // disabling containers cutting allow to view the components of a container that are not totally visible, you can also disable optimizations to displays elements that are not drawn for optimization purposes
    FONT_FAMILY: "sans-serif",
    FONT_SIZE: 28,
    CANVAS_WIDTH: 600,
    CANVAS_HEIGHT: 400,
    DEFAULT_PADDING: 6,
    DEFAULT_SPACING: 6,
    BUTTON_DEFAULT_BACKGROUND: "rgba(0, 0, 0, 0)",
    BUTTON_DEFAULT_HOVER_BACKGROUND: "#95a5a6",
    BUTTON_DEFAULT_CLICK_BACKGROUND: "#727F80",
    INPUT_DEFAULT_FONT_COLOR: "#000",
    INPUT_DEFAULT_BACKGROUND_COLOR: "#fff",
    INPUT_DEFAULT_BORDER_COLOR: "#000",
    INPUT_DEFAULT_BORDER_COLOR_SELECTED: "#a2cdd8",
    INPUT_DEFAULT_SELECT_COLOR: "#2980b9",
    LABEL_DEFAULT_FONT_COLOR: "#000",
    LINK_DEFAULT_COLOR: "#0000EE",
    LINK_DEFAULT_HOVER_COLOR: "#4D4DFF",
    LINK_DEFAULT_CLICK_COLOR: "#EE7700",
    MENU_DEFAULT_BACKGROUND: "rgba(44, 62, 80, 0.75)",
    MENU_DEFAULT_BLUR_BACKGROUND: false,
    NOTIFICATION_DEFAULT_BACKGROUND: "rgba(46, 204, 113, 0.5)",
    NOTIFICATION_DEFAULT_ANIMATION_DURATION: 500, // ms
    PROGRESS_DEFAULT_BACKGROUND: "#bdc3c7",
    PROGRESS_DEFAULT_FOREGROUND: "#27ae60",
    PROGRESS_DEFAULT_ANIMATION_DURATION: 2000, // ms
    TOOLTIP_DEFAULT_BACKGROUND: "rgba(255, 255, 255, 0.25)",
    ARROW_DEFAULT_COLOR: "#FF0000",
    ARROW_DEFAULT_LINE_SIZE: 8,
    ARROW_DEFAULT_HEAD_SIZE: 20,
    CROSS_DEFAULT_COLOR: "#fff",
    CROSS_DEFAULT_LINE_SIZE: 3,
    SCROLLBAR_DEFAULT_BACKGROUND: "rgb(149, 165, 166, 0.75)",
    SCROLLBAR_DEFAULT_HOVER_BACKGROUND: "rgb(149, 165, 166, 0.9)",
    SCROLLBAR_DEFAULT_CLICK_BACKGROUND: "rgb(149, 165, 166, 0.5)",
    SCROLLBAR_DEFAULT_SIZE: 10,
    DEFAULT_BORDER_SIZE: 3,
    DEFAULT_BORDER_COLOR_SELECTED: "#a2cdd8",
    DEFAULT_ANIMATION_DURATION: 2000, // ms
    TRIANGLE_DEFAULT_COLOR: "#fff",
    TRIANGLE_DEFAULT_LINE_SIZE: 3,
    SELECT_DEFAULT_BACKGROUND: "#ecf0f1",
    SELECT_DEFAULT_HOVER_BACKGROUND: "#bdc3c7",
    SELECT_DEFAULT_CLICK_BACKGROUND: "#adb2b5"
  },
  Key: {
    UP: 38,
    RIGHT: 39,
    BOTTOM: 40,
    LEFT: 37,
    ENTER: 13,
    ECHAP: 27,
    TAB: 9
  },
  Alignement: {
    RIGHT: "right",
    LEFT: "left",
    CENTER: "center",
    DEFAULT: "default"
  },
  VerticalAlignement: {
    TOP: "top",
    CENTER: "center",
    BOTTOM: "bottom",
    DEFAULT: "default"
  }
};