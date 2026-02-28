(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["JSGameTools"] = factory();
	else
		root["JSGameTools"] = factory();
})(Object(typeof self !== "undefined" ? self : this), () => {
return /******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/Arrow.js"
/*!**********************!*\
  !*** ./src/Arrow.js ***!
  \**********************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Arrow)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_helpers_get__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/get */ "./node_modules/@babel/runtime/helpers/esm/get.js");
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _Component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./Component */ "./src/Component.js");
/* harmony import */ var _Constants__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./Constants */ "./src/Constants.js");
/* harmony import */ var _Style__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./Style */ "./src/Style.js");
/* harmony import */ var _Utils__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./Utils */ "./src/Utils.js");







function _callSuper(t, o, e) { return o = (0,_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(o), (0,_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], (0,_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(t).constructor) : o.apply(t, e)); }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }
function _superPropGet(t, o, e, r) { var p = (0,_babel_runtime_helpers_get__WEBPACK_IMPORTED_MODULE_4__["default"])((0,_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(1 & r ? t.prototype : t), o, e); return 2 & r && "function" == typeof p ? function (t) { return p.apply(e, t); } : p; }
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




var Arrow = /*#__PURE__*/function (_Component) {
  function Arrow(x, y, toX, toY, style) {
    var _this;
    (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, Arrow);
    _this = _callSuper(this, Arrow, [x, y, null, null, style]);
    (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(_this, "selectable", false);
    _this.toX = toX;
    _this.toY = toY;
    return _this;
  }
  (0,_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5__["default"])(Arrow, _Component);
  return (0,_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(Arrow, [{
    key: "draw",
    value: function draw(context) {
      if (this.hidden) return;
      _superPropGet(Arrow, "draw", this, 3)([context]);
      var canvas = context.canvas;
      var ctx = canvas.getContext("2d");
      _Utils__WEBPACK_IMPORTED_MODULE_10__["default"].drawArrow(ctx, this.x, this.y, this.toX, this.toY, this.style.lineWidth, this.style.headSize, this.style.color, this.style.lineCap);
      this.init = true;
    }
  }, {
    key: "width",
    get: function get() {
      return Math.abs(this.x - this.toX);
    }
  }, {
    key: "height",
    get: function get() {
      return Math.abs(this.y - this.toY);
    }
  }, {
    key: "defaultStyle",
    get: function get() {
      return new _Style__WEBPACK_IMPORTED_MODULE_9__["default"]({
        "lineWidth": _Constants__WEBPACK_IMPORTED_MODULE_8__["default"].Setting.ARROW_DEFAULT_LINE_SIZE,
        "headSize": _Constants__WEBPACK_IMPORTED_MODULE_8__["default"].Setting.ARROW_DEFAULT_HEAD_SIZE,
        "color": _Constants__WEBPACK_IMPORTED_MODULE_8__["default"].Setting.ARROW_DEFAULT_COLOR,
        "lineCap": _Constants__WEBPACK_IMPORTED_MODULE_8__["default"].Setting.ARROW_DEFAULT_LINE_CAP
      });
    }
  }]);
}(_Component__WEBPACK_IMPORTED_MODULE_7__["default"]);


/***/ },

/***/ "./src/Box.js"
/*!********************!*\
  !*** ./src/Box.js ***!
  \********************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Box)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_helpers_get__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/get */ "./node_modules/@babel/runtime/helpers/esm/get.js");
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _Component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./Component */ "./src/Component.js");







function _callSuper(t, o, e) { return o = (0,_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(o), (0,_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], (0,_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(t).constructor) : o.apply(t, e)); }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }
function _superPropGet(t, o, e, r) { var p = (0,_babel_runtime_helpers_get__WEBPACK_IMPORTED_MODULE_4__["default"])((0,_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(1 & r ? t.prototype : t), o, e); return 2 & r && "function" == typeof p ? function (t) { return p.apply(e, t); } : p; }
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

var Box = /*#__PURE__*/function (_Component) {
  function Box(x, y, width, height, style) {
    var _this;
    (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, Box);
    _this = _callSuper(this, Box, [x, y, width, height, style]);
    (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(_this, "selectable", false);
    return _this;
  }
  (0,_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5__["default"])(Box, _Component);
  return (0,_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(Box, [{
    key: "draw",
    value: function draw(context) {
      if (this.hidden) return;
      _superPropGet(Box, "draw", this, 3)([context]);
      var canvas = context.canvas;
      var ctx = canvas.getContext("2d");
      ctx.save();
      this.drawBackground(ctx);
      this.drawBorder(ctx);
      ctx.restore();
    }
  }, {
    key: "drawBackground",
    value: function drawBackground(ctx) {
      var color = this.backgroundColor;
      if (color) {
        ctx.save();
        ctx.fillStyle = color;
        ctx.fillRect(Math.round(this.x), Math.round(this.y), Math.round(this.width), Math.round(this.height));
        ctx.restore();
      }
    }
  }, {
    key: "backgroundColor",
    get: function get() {
      var color = null;
      if (this.hovered && this.clicked && this.style.backgroundColorDown != null) {
        color = this.style.backgroundColorDown;
      } else if (this.hovered && this.style.backgroundColorHover != null) {
        color = this.style.backgroundColorHover;
      } else {
        color = this.style.backgroundColor;
      }
      return color;
    }
  }, {
    key: "drawBorder",
    value: function drawBorder(ctx) {
      var color = this.borderColor;
      if (color && this.style.borderSize > 0) {
        ctx.save();
        ctx.strokeStyle = color;
        ctx.lineWidth = this.style.borderSize;
        ctx.strokeRect(Math.round(this.x), Math.round(this.y), Math.round(this.width - this.style.borderSize / 2), Math.round(this.height - this.style.borderSize / 2));
        ctx.restore();
      }
    }
  }, {
    key: "borderColor",
    get: function get() {
      var color = null;
      if (this.clicked && this.hovered && this.style.borderColorDown != null) {
        color = this.style.borderColorDown;
      } else if (!this.clicked && this.hovered && this.style.borderColorHover != null) {
        color = this.style.borderColorHover;
      } else if (this.selectable && this.selected && this.style.borderColorSelected != null) {
        color = this.style.borderColorSelected;
      } else {
        color = this.style.borderColor;
      }
      return color;
    }
  }]);
}(_Component__WEBPACK_IMPORTED_MODULE_7__["default"]);


/***/ },

/***/ "./src/Button.js"
/*!***********************!*\
  !*** ./src/Button.js ***!
  \***********************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Button)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_helpers_get__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/get */ "./node_modules/@babel/runtime/helpers/esm/get.js");
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _Row__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./Row */ "./src/Row.js");
/* harmony import */ var _Constants__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./Constants */ "./src/Constants.js");
/* harmony import */ var _Style__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./Style */ "./src/Style.js");







function _callSuper(t, o, e) { return o = (0,_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(o), (0,_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], (0,_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(t).constructor) : o.apply(t, e)); }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }
function _superPropGet(t, o, e, r) { var p = (0,_babel_runtime_helpers_get__WEBPACK_IMPORTED_MODULE_4__["default"])((0,_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(1 & r ? t.prototype : t), o, e); return 2 & r && "function" == typeof p ? function (t) { return p.apply(e, t); } : p; }
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



var Button = /*#__PURE__*/function (_Row) {
  function Button(x, y, maxWidth, maxHeight, style) {
    var _this;
    (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, Button);
    for (var _len = arguments.length, components = new Array(_len > 5 ? _len - 5 : 0), _key = 5; _key < _len; _key++) {
      components[_key - 5] = arguments[_key];
    }
    _this = _callSuper(this, Button, [x, y, maxWidth, maxHeight, style].concat(components));
    (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(_this, "selectable", true);
    return _this;
  }
  (0,_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5__["default"])(Button, _Row);
  return (0,_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(Button, [{
    key: "draw",
    value: function draw(context) {
      if (this.hidden) return;
      _superPropGet(Button, "draw", this, 3)([context]);
      var canvas = context.canvas;
      var ctx = canvas.getContext("2d");
      ctx.save();
      this.drawComponents(ctx);
      ctx.restore();
    }
  }, {
    key: "drawComponents",
    value: function drawComponents(ctx) {
      _superPropGet(Button, "draw", this, 3)([ctx]);
    }
  }, {
    key: "height",
    get: function get() {
      return (this.maxHeight || _superPropGet(Button, "height", this, 1)) + this.style.padding;
    }
  }, {
    key: "width",
    get: function get() {
      return (this.maxWidth || _superPropGet(Button, "width", this, 1)) + this.style.padding;
    }
  }, {
    key: "defaultStyle",
    get: function get() {
      return new _Style__WEBPACK_IMPORTED_MODULE_9__["default"]({
        "backgroundColor": _Constants__WEBPACK_IMPORTED_MODULE_8__["default"].Setting.BUTTON_DEFAULT_BACKGROUND,
        "backgroundColorHover": _Constants__WEBPACK_IMPORTED_MODULE_8__["default"].Setting.BUTTON_DEFAULT_HOVER_BACKGROUND,
        "backgroundColorDown": _Constants__WEBPACK_IMPORTED_MODULE_8__["default"].Setting.BUTTON_DEFAULT_CLICK_BACKGROUND,
        "scrollXDisabled": true,
        "scrollYDisabled": true
      });
    }
  }]);
}(_Row__WEBPACK_IMPORTED_MODULE_7__["default"]);


/***/ },

/***/ "./src/ButtonImage.js"
/*!****************************!*\
  !*** ./src/ButtonImage.js ***!
  \****************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ ButtonImage)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_get__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/get */ "./node_modules/@babel/runtime/helpers/esm/get.js");
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_helpers_set__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/set */ "./node_modules/@babel/runtime/helpers/esm/set.js");
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime/helpers/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var _ImageContainer__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./ImageContainer */ "./src/ImageContainer.js");
/* harmony import */ var _Button__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./Button */ "./src/Button.js");
/* harmony import */ var _Style__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./Style */ "./src/Style.js");
/* harmony import */ var _Constants__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./Constants */ "./src/Constants.js");







function _callSuper(t, o, e) { return o = (0,_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__["default"])(o), (0,_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], (0,_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__["default"])(t).constructor) : o.apply(t, e)); }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }
function _superPropGet(t, o, e, r) { var p = (0,_babel_runtime_helpers_get__WEBPACK_IMPORTED_MODULE_3__["default"])((0,_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__["default"])(1 & r ? t.prototype : t), o, e); return 2 & r && "function" == typeof p ? function (t) { return p.apply(e, t); } : p; }
function _superPropSet(t, e, o, r, p, f) { return (0,_babel_runtime_helpers_set__WEBPACK_IMPORTED_MODULE_5__["default"])((0,_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__["default"])(f ? t.prototype : t), e, o, r, p); }
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




var ButtonImage = /*#__PURE__*/function (_Button) {
  function ButtonImage(imgSrc, x, y, alignement, verticalAlignement, width, height, backgroundColor, backgroundColorHover, imageLoader) {
    var _this;
    (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, ButtonImage);
    var style = new _Style__WEBPACK_IMPORTED_MODULE_9__["default"]({
      "alignement": alignement,
      "verticalAlignement": verticalAlignement,
      "backgroundColor": backgroundColor || _Constants__WEBPACK_IMPORTED_MODULE_10__["default"].Setting.BUTTON_DEFAULT_BACKGROUND,
      "backgroundColorHover": backgroundColorHover || _Constants__WEBPACK_IMPORTED_MODULE_10__["default"].Setting.BUTTON_DEFAULT_HOVER_BACKGROUND
    });
    _this = _callSuper(this, ButtonImage, [x, y, width, height, style]);
    _this.image = new _ImageContainer__WEBPACK_IMPORTED_MODULE_7__["default"](imgSrc, x, y, width, height, new _Style__WEBPACK_IMPORTED_MODULE_9__["default"]({
      "alignement": "center",
      "verticalAlignement": "center"
    }), imageLoader);
    _this.add(_this.image);
    console && console.warn && console.warn(_Constants__WEBPACK_IMPORTED_MODULE_10__["default"].String.NOTICE_MESSAGE + " " + _Constants__WEBPACK_IMPORTED_MODULE_10__["default"].String.BUTTON_IMAGE_DEPRECATED);
    return _this;
  }
  (0,_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_6__["default"])(ButtonImage, _Button);
  return (0,_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(ButtonImage, [{
    key: "loadImage",
    value: function loadImage(imageLoader) {
      if (this.components[0] instanceof _ImageContainer__WEBPACK_IMPORTED_MODULE_7__["default"]) this.components[0].loadImage(imageLoader);
    }
  }, {
    key: "minWidth",
    get: function get() {
      return _superPropGet(ButtonImage, "minWidth", this, 1);
    },
    set: function set(width) {
      this.image.width = width;
      _superPropSet(ButtonImage, "minWidth", width, this, 1, 1);
    }
  }, {
    key: "minHeight",
    get: function get() {
      return _superPropGet(ButtonImage, "minHeight", this, 1);
    },
    set: function set(height) {
      this.image.height = height;
      _superPropSet(ButtonImage, "minHeight", height, this, 1, 1);
    }
  }, {
    key: "maxWidth",
    get: function get() {
      return _superPropGet(ButtonImage, "maxWidth", this, 1);
    },
    set: function set(width) {
      this.image.width = width;
      _superPropSet(ButtonImage, "maxWidth", width, this, 1, 1);
    }
  }, {
    key: "maxHeight",
    get: function get() {
      return _superPropGet(ButtonImage, "maxHeight", this, 1);
    },
    set: function set(height) {
      this.image.height = height;
      _superPropSet(ButtonImage, "maxHeight", height, this, 1, 1);
    }
  }, {
    key: "width",
    get: function get() {
      return _superPropGet(ButtonImage, "width", this, 1);
    },
    set: function set(width) {
      this.minWidth = width;
      this.maxWidth = width;
    }
  }, {
    key: "height",
    get: function get() {
      return _superPropGet(ButtonImage, "height", this, 1);
    },
    set: function set(height) {
      this.minHeight = height;
      this.maxHeight = height;
    }
  }]);
}(_Button__WEBPACK_IMPORTED_MODULE_8__["default"]);


/***/ },

/***/ "./src/Canvas.js"
/*!***********************!*\
  !*** ./src/Canvas.js ***!
  \***********************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Canvas)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/toConsumableArray */ "./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _Constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Constants */ "./src/Constants.js");
/* harmony import */ var _Utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Utils */ "./src/Utils.js");
/* harmony import */ var _Scene__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Scene */ "./src/Scene.js");
/* harmony import */ var _ReactorCanvas__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./ReactorCanvas */ "./src/ReactorCanvas.js");
/* harmony import */ var _ErrorScreen__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./ErrorScreen */ "./src/ErrorScreen.js");



function _classPrivateFieldInitSpec(e, t, a) { _checkPrivateRedeclaration(e, t), t.set(e, a); }
function _checkPrivateRedeclaration(e, t) { if (t.has(e)) throw new TypeError("Cannot initialize the same private elements twice on an object"); }
function _classPrivateFieldGet(s, a) { return s.get(_assertClassBrand(s, a)); }
function _classPrivateFieldSet(s, a, r) { return s.set(_assertClassBrand(s, a), r), r; }
function _assertClassBrand(e, t, n) { if ("function" == typeof e ? e === t : e.has(t)) return arguments.length < 3 ? t : n; throw new TypeError("Private element is not present on this object"); }
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





var _lastFrameTime = /*#__PURE__*/new WeakMap();
var _width = /*#__PURE__*/new WeakMap();
var _height = /*#__PURE__*/new WeakMap();
var Canvas = /*#__PURE__*/function () {
  function Canvas(scene, canvas, width, height, autoResize, maxFPS) {
    (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, Canvas);
    _classPrivateFieldInitSpec(this, _lastFrameTime, void 0);
    _classPrivateFieldInitSpec(this, _width, void 0);
    _classPrivateFieldInitSpec(this, _height, void 0);
    this.canvas = canvas || document.createElement("canvas");
    this.container = document.createElement("div");
    this.width = width || _Constants__WEBPACK_IMPORTED_MODULE_3__["default"].Setting.CANVAS_WIDTH;
    this.height = height || _Constants__WEBPACK_IMPORTED_MODULE_3__["default"].Setting.CANVAS_HEIGHT;
    this.scene = scene;
    this.container.appendChild(this.canvas);
    this.started = false;
    this.init = false;
    this.maxFPS = maxFPS || -1;
    _classPrivateFieldSet(_lastFrameTime, this, 0);
    this.hasError = false;
    this.fullscreen = false;
    this.fullpage = false;

    // Error message screen
    this.sceneError = new _ErrorScreen__WEBPACK_IMPORTED_MODULE_7__["default"](this);
    this.scenePrevious = this.scene;

    // Reactors/events
    this.reactor = new _ReactorCanvas__WEBPACK_IMPORTED_MODULE_6__["default"]();
    this.reactor.registerEvent("mousemove");
    this.reactor.registerEvent("click");
    this.reactor.registerEvent("mousedown");
    this.reactor.registerEvent("mouseup");
    this.reactor.registerEvent("wheel");
    this.reactor.registerEvent("touchstart");
    this.reactor.registerEvent("touchend");
    this.reactor.registerEvent("touchmove");
    if (autoResize) this.autoResize();
    this.createEvents();
    if (_Constants__WEBPACK_IMPORTED_MODULE_3__["default"].Setting.DISABLE_OPTIMIZATIONS) {
      console && console.info(_Constants__WEBPACK_IMPORTED_MODULE_3__["default"].String.NOTICE_MESSAGE + " " + _Constants__WEBPACK_IMPORTED_MODULE_3__["default"].String.OPTIMIZATION_DISABLED);
    }
    if (_Constants__WEBPACK_IMPORTED_MODULE_3__["default"].Setting.DISABLE_CONTAINERS_CUTTING) {
      console && console.info(_Constants__WEBPACK_IMPORTED_MODULE_3__["default"].String.NOTICE_MESSAGE + " " + _Constants__WEBPACK_IMPORTED_MODULE_3__["default"].String.CONTAINER_CUTTING_DISABLED);
    }
  }
  return (0,_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2__["default"])(Canvas, [{
    key: "draw",
    value: function draw() {
      var ctx = this.canvas.getContext("2d");
      this.drawClear(ctx);
      this.drawScene(ctx);
    }
  }, {
    key: "drawScene",
    value: function drawScene(ctx) {
      if (this.scene) {
        this.scene.parent = this;
        this.scene.canvas = this;
        try {
          ctx.scale(_Constants__WEBPACK_IMPORTED_MODULE_3__["default"].Setting.PIXEL_RATIO, _Constants__WEBPACK_IMPORTED_MODULE_3__["default"].Setting.PIXEL_RATIO);
          this.scene.draw(ctx);
        } catch (e) {
          this.hasError = true;
          this.scene = this.sceneError;
          this.sceneError.errorText = "" + e.stack;
          console.error(_Constants__WEBPACK_IMPORTED_MODULE_3__["default"].String.ERROR_MESSAGE + " " + _Constants__WEBPACK_IMPORTED_MODULE_3__["default"].String.ERROR_MESSAGE_CANVAS + "\n", e);
        }
      }
    }
  }, {
    key: "drawClear",
    value: function drawClear(ctx) {
      _Utils__WEBPACK_IMPORTED_MODULE_4__["default"].clear(ctx);
    }
  }, {
    key: "startDraw",
    value: function startDraw(func) {
      var _this = this;
      this.started = true;
      requestAnimationFrame(function (time) {
        if (_this.started) {
          var offsetFrame = time - _classPrivateFieldGet(_lastFrameTime, _this);
          _this.fullscreen = document.fullscreenElement == _this.canvas || document.fullscreenElement == _this.container;
          if (_Constants__WEBPACK_IMPORTED_MODULE_3__["default"].Setting.ENABLE_PIXEL_RATIO_RESIZING) {
            _Constants__WEBPACK_IMPORTED_MODULE_3__["default"].Setting.PIXEL_RATIO = window.devicePixelRatio * _Constants__WEBPACK_IMPORTED_MODULE_3__["default"].Setting.RESOLUTION_SCALE; // Update the device pixel ratio, only in fullscreen mode/fullpage mode
          } else {
            _Constants__WEBPACK_IMPORTED_MODULE_3__["default"].Setting.PIXEL_RATIO = 1 * _Constants__WEBPACK_IMPORTED_MODULE_3__["default"].Setting.RESOLUTION_SCALE;
          }
          if (_this.maxFPS < 1 || offsetFrame > 1000 / _this.maxFPS) {
            _Utils__WEBPACK_IMPORTED_MODULE_4__["default"].autoDPI(_this.canvas);
            _classPrivateFieldSet(_lastFrameTime, _this, time);
            _this.draw();
          }
          _this.startDraw(func);
          if (func) func();
        }
      });
    }
  }, {
    key: "stopDraw",
    value: function stopDraw() {
      this.started = false;
    }
  }, {
    key: "appendTo",
    value: function appendTo(element) {
      element.appendChild(this.container);
    }
  }, {
    key: "remove",
    value: function remove(element) {
      element.removeChild(this.container);
      this.container.removeChild(this.canvas);
    }
  }, {
    key: "toggleFullscreen",
    value: function toggleFullscreen() {
      _Utils__WEBPACK_IMPORTED_MODULE_4__["default"].toggleFullscreen(this.canvas, this.container);
    }
  }, {
    key: "toggleFullpage",
    value: function toggleFullpage() {
      _Utils__WEBPACK_IMPORTED_MODULE_4__["default"].toggleFullpage(this.canvas, this.container);
      this.fullpage = !this.fullpage;
    }
  }, {
    key: "autoResize",
    value: function autoResize() {
      _Utils__WEBPACK_IMPORTED_MODULE_4__["default"].enableAutoResizeCanvas(this.canvas, this.container, this.width, this.height);
    }
  }, {
    key: "x",
    get: function get() {
      return 0;
    }
  }, {
    key: "y",
    get: function get() {
      return 0;
    }
  }, {
    key: "width",
    get: function get() {
      return this.canvas ? _Utils__WEBPACK_IMPORTED_MODULE_4__["default"].getCanvasWidth(this.canvas) : _classPrivateFieldGet(_width, this);
    },
    set: function set(width) {
      if (width != _classPrivateFieldGet(_width, this)) {
        _classPrivateFieldSet(_width, this, width);
        this.canvas.width = width;
        this.scene && this.scene.reactor.dispatchEvent("onChange", this);
      }
    }
  }, {
    key: "height",
    get: function get() {
      return this.canvas ? _Utils__WEBPACK_IMPORTED_MODULE_4__["default"].getCanvasHeight(this.canvas) : _classPrivateFieldGet(_height, this);
    },
    set: function set(height) {
      if (height != _classPrivateFieldGet(_height, this)) {
        _classPrivateFieldSet(_height, this, height);
        this.canvas.height = height;
        this.scene && this.scene.reactor.dispatchEvent("onChange", this);
      }
    }
  }, {
    key: "style",
    get: function get() {
      return this.canvas ? this.canvas.style : null;
    }
  }, {
    key: "cursor",
    get: function get() {
      return this.canvas ? this.canvas.style.cursor : "";
    },
    set: function set(cursor) {
      if (this.canvas) this.canvas.style.cursor = cursor;
    }
  }, {
    key: "getContext",
    value: function getContext(context) {
      return this.canvas ? this.canvas.getContext(context ? context : "2d") : null;
    }
  }, {
    key: "createEvents",
    value: function createEvents() {
      var _this2 = this;
      if (!this.init && this.canvas) {
        ["mousemove", "click", "mousedown", "mouseup", "wheel"].forEach(function (eventName) {
          _this2.canvas.addEventListener(eventName, function (event) {
            var mousePosition = _this2.getMousePos(event);
            _this2.doEvents(event, eventName, mousePosition);
            event.preventDefault();
          }, false);
        });
        ["touchstart", "touchmove", "touchend"].forEach(function (eventName) {
          _this2.canvas.addEventListener(eventName, function (event) {
            var changedTouches = event.changedTouches[0];
            var position = _this2.getMousePos(changedTouches);
            _this2.doEvents(event, eventName, position);
          });
        });
        this.init = true;
      }
    }
  }, {
    key: "doEvents",
    value: function doEvents(event, eventName, position) {
      var _this3 = this;
      var components = this.getComponentsAtPosition(position); // Get all elements at the current position
      this.reactor.dispatchEvent(eventName, event, false); // Dispatch to all components to disable them (call with false)
      (0,_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__["default"])(components).reverse().forEach(function (component) {
        return _this3.reactor.dispatchEventComponent(eventName, component, event, true);
      }); // Dispatch to component detected to enable them (call with true)
    }
  }, {
    key: "addEventListener",
    value: function addEventListener(event, component, callback) {
      this.reactor.addEventListener(event, component, callback);
    }
  }, {
    key: "getMousePos",
    value: function getMousePos(event) {
      return _Utils__WEBPACK_IMPORTED_MODULE_4__["default"].getMousePos(this.canvas, event);
    }
  }, {
    key: "getAllComponents",
    value: function getAllComponents() {
      var start = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.scene;
      return this.scene.getAllComponents(start);
    }
  }, {
    key: "getComponentsAtPosition",
    value: function getComponentsAtPosition(mousePosition) {
      var _this4 = this;
      var start = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this.scene;
      var allComponents = this.scene.getComponentsTree(start);
      var result = [start];
      if (allComponents.childs) {
        allComponents.childs.sort(_Scene__WEBPACK_IMPORTED_MODULE_5__["default"].sortComponentsTree).reverse().some(function (child) {
          if (child.component.isInside(mousePosition) && !child.component.hidden && !child.component.disabled) {
            result.push.apply(result, (0,_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_this4.getComponentsAtPosition(mousePosition, child.component)));
            return true;
          }
        });
      }
      return result;
    }
  }]);
}();


/***/ },

/***/ "./src/Circle.js"
/*!***********************!*\
  !*** ./src/Circle.js ***!
  \***********************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Circle)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_set__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/set */ "./node_modules/@babel/runtime/helpers/esm/set.js");
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_helpers_get__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/get */ "./node_modules/@babel/runtime/helpers/esm/get.js");
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime/helpers/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _Component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./Component */ "./src/Component.js");
/* harmony import */ var _Constants__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./Constants */ "./src/Constants.js");
/* harmony import */ var _Utils__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./Utils */ "./src/Utils.js");
/* harmony import */ var _Style__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./Style */ "./src/Style.js");








function _callSuper(t, o, e) { return o = (0,_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__["default"])(o), (0,_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], (0,_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__["default"])(t).constructor) : o.apply(t, e)); }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }
function _superPropSet(t, e, o, r, p, f) { return (0,_babel_runtime_helpers_set__WEBPACK_IMPORTED_MODULE_3__["default"])((0,_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__["default"])(f ? t.prototype : t), e, o, r, p); }
function _superPropGet(t, o, e, r) { var p = (0,_babel_runtime_helpers_get__WEBPACK_IMPORTED_MODULE_5__["default"])((0,_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__["default"])(1 & r ? t.prototype : t), o, e); return 2 & r && "function" == typeof p ? function (t) { return p.apply(e, t); } : p; }
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




var Circle = /*#__PURE__*/function (_Component) {
  function Circle(x, y, width, style) {
    var _this;
    (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, Circle);
    _this = _callSuper(this, Circle, [x, y, width, width, style]);
    (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_7__["default"])(_this, "selectable", false);
    return _this;
  }
  (0,_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_6__["default"])(Circle, _Component);
  return (0,_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(Circle, [{
    key: "draw",
    value: function draw(context) {
      if (this.hidden) return;
      _superPropGet(Circle, "draw", this, 3)([context]);
      var canvas = context.canvas;
      var ctx = canvas.getContext("2d");
      _Utils__WEBPACK_IMPORTED_MODULE_10__["default"].drawCircle(ctx, this.x, this.y, this.width, this.style.lineWidth, this.style.color, this.style.lineCap, this.style.fill, this.style.fillColor);
      this.init = true;
    }
  }, {
    key: "width",
    get: function get() {
      return _superPropGet(Circle, "width", this, 1) + this.style.lineWidth;
    },
    set: function set(width) {
      _superPropSet(Circle, "width", width, this, 1, 1);
    }
  }, {
    key: "height",
    get: function get() {
      return _superPropGet(Circle, "height", this, 1) + this.style.lineWidth;
    },
    set: function set(height) {
      _superPropSet(Circle, "height", height, this, 1, 1);
    }
  }, {
    key: "defaultStyle",
    get: function get() {
      return new _Style__WEBPACK_IMPORTED_MODULE_11__["default"]({
        "lineWidth": _Constants__WEBPACK_IMPORTED_MODULE_9__["default"].Setting.CIRCLE_DEFAULT_LINE_SIZE,
        "color": _Constants__WEBPACK_IMPORTED_MODULE_9__["default"].Setting.CIRCLE_DEFAULT_COLOR,
        "fill": _Constants__WEBPACK_IMPORTED_MODULE_9__["default"].Setting.CIRCLE_DEFAULT_FILL,
        "lineCap": _Constants__WEBPACK_IMPORTED_MODULE_9__["default"].Setting.CIRCLE_DEFAULT_LINE_CAP,
        "fillColor": _Constants__WEBPACK_IMPORTED_MODULE_9__["default"].Setting.CIRCLE_DEFAULT_FILL_COLOR
      });
    }
  }]);
}(_Component__WEBPACK_IMPORTED_MODULE_8__["default"]);


/***/ },

/***/ "./src/Col.js"
/*!********************!*\
  !*** ./src/Col.js ***!
  \********************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Col)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_helpers_get__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/get */ "./node_modules/@babel/runtime/helpers/esm/get.js");
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _Component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./Component */ "./src/Component.js");
/* harmony import */ var _Container__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./Container */ "./src/Container.js");
/* harmony import */ var _Utils__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./Utils */ "./src/Utils.js");
/* harmony import */ var _Constants__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./Constants */ "./src/Constants.js");







function _callSuper(t, o, e) { return o = (0,_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(o), (0,_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], (0,_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(t).constructor) : o.apply(t, e)); }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }
function _superPropGet(t, o, e, r) { var p = (0,_babel_runtime_helpers_get__WEBPACK_IMPORTED_MODULE_4__["default"])((0,_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(1 & r ? t.prototype : t), o, e); return 2 & r && "function" == typeof p ? function (t) { return p.apply(e, t); } : p; }
function _classPrivateFieldInitSpec(e, t, a) { _checkPrivateRedeclaration(e, t), t.set(e, a); }
function _checkPrivateRedeclaration(e, t) { if (t.has(e)) throw new TypeError("Cannot initialize the same private elements twice on an object"); }
function _classPrivateFieldGet(s, a) { return s.get(_assertClassBrand(s, a)); }
function _classPrivateFieldSet(s, a, r) { return s.set(_assertClassBrand(s, a), r), r; }
function _assertClassBrand(e, t, n) { if ("function" == typeof e ? e === t : e.has(t)) return arguments.length < 3 ? t : n; throw new TypeError("Private element is not present on this object"); }
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




var _innerHeight = /*#__PURE__*/new WeakMap();
var _innerWidth = /*#__PURE__*/new WeakMap();
var Col = /*#__PURE__*/function (_Container) {
  function Col(x, y, maxWidth, maxHeight, style) {
    var _this;
    (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, Col);
    for (var _len = arguments.length, components = new Array(_len > 5 ? _len - 5 : 0), _key = 5; _key < _len; _key++) {
      components[_key - 5] = arguments[_key];
    }
    _this = _callSuper(this, Col, [x, y, maxWidth, maxHeight, style].concat(components));
    (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(_this, "selectable", false);
    _classPrivateFieldInitSpec(_this, _innerHeight, 0);
    _classPrivateFieldInitSpec(_this, _innerWidth, 0);
    if (!_Constants__WEBPACK_IMPORTED_MODULE_10__["default"].Setting.DISABLE_EXPERIMENTAL_OPTIMIZATIONS) {
      _this.updateInnerWidth();
      _this.updateInnerHeight();
      _this.addChangeAction(function () {
        _this.updateInnerWidth();
        _this.updateInnerHeight();
      });
    }
    return _this;
  }
  (0,_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5__["default"])(Col, _Container);
  return (0,_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(Col, [{
    key: "draw",
    value: function draw(context) {
      var _this2 = this;
      if (this.hidden) return;
      _superPropGet(Col, "draw", this, 3)([context]);
      var canvas = context.canvas;
      var ctx = canvas.getContext("2d");
      ctx.save();
      var ctxTemp = ctx;
      if (this.isCutting) {
        ctxTemp = this.canvasTmp.getContext("2d");
        ctxTemp.scale(_Constants__WEBPACK_IMPORTED_MODULE_10__["default"].Setting.PIXEL_RATIO, _Constants__WEBPACK_IMPORTED_MODULE_10__["default"].Setting.PIXEL_RATIO);
      }
      if (_superPropGet(Col, "components", this, 1) != null) {
        var currentY = this.style.padding;
        _superPropGet(Col, "components", this, 1).forEach(function (component) {
          currentY = _this2.drawComponent(component, currentY, ctxTemp);
        });
      }
      if (this.isCutting) {
        _Utils__WEBPACK_IMPORTED_MODULE_9__["default"].drawImageData(ctx, this.canvasTmp, this.x, this.y, this.width, this.height, this.x * _Constants__WEBPACK_IMPORTED_MODULE_10__["default"].Setting.PIXEL_RATIO, this.y * _Constants__WEBPACK_IMPORTED_MODULE_10__["default"].Setting.PIXEL_RATIO, this.width * _Constants__WEBPACK_IMPORTED_MODULE_10__["default"].Setting.PIXEL_RATIO, this.height * _Constants__WEBPACK_IMPORTED_MODULE_10__["default"].Setting.PIXEL_RATIO);
      }
      _superPropGet(Col, "drawScrollbars", this, 3)([ctx]);
      ctx.restore();
    }
  }, {
    key: "drawComponent",
    value: function drawComponent(component, currentY, ctx) {
      if (component instanceof _Component__WEBPACK_IMPORTED_MODULE_7__["default"]) {
        component.x = this.style.padding - this.offsetScrollX;
        component.y = currentY - this.offsetScrollY;
        if (!component.hidden) {
          if (this.isComponentVisible(component)) {
            component.draw(ctx);
          }
          currentY += component.height + this.style.spaceBetweenComponents;
        }
      }
      return currentY;
    }
  }, {
    key: "updateInnerHeight",
    value: function updateInnerHeight() {
      var totalHeight = 0;
      _superPropGet(Col, "components", this, 1).forEach(function (component) {
        if (!component.hidden) totalHeight += component.height;
      });
      _classPrivateFieldSet(_innerHeight, this, totalHeight + this.style.spaceBetweenComponents * (_superPropGet(Col, "components", this, 1).length - 1) + this.style.padding);
    }
  }, {
    key: "updateInnerWidth",
    value: function updateInnerWidth() {
      var maxWidth = 0;
      _superPropGet(Col, "components", this, 1).forEach(function (component) {
        if (component.width > maxWidth && !component.hidden) maxWidth = component.width;
      });
      _classPrivateFieldSet(_innerWidth, this, maxWidth + this.style.padding);
    }
  }, {
    key: "innerHeight",
    get: function get() {
      if (_Constants__WEBPACK_IMPORTED_MODULE_10__["default"].Setting.DISABLE_EXPERIMENTAL_OPTIMIZATIONS) this.updateInnerHeight();
      return _classPrivateFieldGet(_innerHeight, this);
    }
  }, {
    key: "innerWidth",
    get: function get() {
      if (_Constants__WEBPACK_IMPORTED_MODULE_10__["default"].Setting.DISABLE_EXPERIMENTAL_OPTIMIZATIONS) this.updateInnerWidth();
      return _classPrivateFieldGet(_innerWidth, this);
    }
  }, {
    key: "width",
    get: function get() {
      var width = this.innerWidth || this.parent && this.parent.width;
      var min = this.maxWidth != null ? Math.min(this.maxWidth, width) : null;
      return this.minWidth != null ? Math.max(this.minWidth, min != null ? min : width) : min != null ? min : width;
    }
  }, {
    key: "height",
    get: function get() {
      var height = this.innerHeight || this.parent && this.parent.height;
      var min = this.maxHeight != null ? Math.min(this.maxHeight, height) : null;
      return this.minHeight != null ? Math.max(this.minHeight, min != null ? min : height) : min != null ? min : height;
    }
  }, {
    key: "defaultStyle",
    get: function get() {
      return _superPropGet(Col, "defaultStyle", this, 1);
    }
  }]);
}(_Container__WEBPACK_IMPORTED_MODULE_8__["default"]);


/***/ },

/***/ "./src/Component.js"
/*!**************************!*\
  !*** ./src/Component.js ***!
  \**************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Component)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _Constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Constants */ "./src/Constants.js");
/* harmony import */ var _Style__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Style */ "./src/Style.js");
/* harmony import */ var _Reactor__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Reactor */ "./src/Reactor.js");



function _classPrivateFieldInitSpec(e, t, a) { _checkPrivateRedeclaration(e, t), t.set(e, a); }
function _checkPrivateRedeclaration(e, t) { if (t.has(e)) throw new TypeError("Cannot initialize the same private elements twice on an object"); }
function _classPrivateFieldGet(s, a) { return s.get(_assertClassBrand(s, a)); }
function _classPrivateFieldSet(s, a, r) { return s.set(_assertClassBrand(s, a), r), r; }
function _assertClassBrand(e, t, n) { if ("function" == typeof e ? e === t : e.has(t)) return arguments.length < 3 ? t : n; throw new TypeError("Private element is not present on this object"); }
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



var _width = /*#__PURE__*/new WeakMap();
var _height = /*#__PURE__*/new WeakMap();
var _x = /*#__PURE__*/new WeakMap();
var _y = /*#__PURE__*/new WeakMap();
var _disabled = /*#__PURE__*/new WeakMap();
var _selected = /*#__PURE__*/new WeakMap();
var _style = /*#__PURE__*/new WeakMap();
var Component = /*#__PURE__*/function () {
  function Component(x, y, width, height, style) {
    var _this = this;
    (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, Component);
    (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2__["default"])(this, "selectable", true);
    _classPrivateFieldInitSpec(this, _width, 0);
    _classPrivateFieldInitSpec(this, _height, 0);
    _classPrivateFieldInitSpec(this, _x, 0);
    _classPrivateFieldInitSpec(this, _y, 0);
    _classPrivateFieldInitSpec(this, _disabled, false);
    _classPrivateFieldInitSpec(this, _selected, false);
    _classPrivateFieldInitSpec(this, _style, void 0);
    _classPrivateFieldSet(_x, this, x || 0);
    _classPrivateFieldSet(_y, this, y || 0);
    this.deltaX = 0;
    this.deltaY = 0;
    _classPrivateFieldSet(_width, this, width);
    _classPrivateFieldSet(_height, this, height);
    this.canvas;
    this.parent;

    // Style
    this.style = style;

    // Functions triggered by events
    this.reactor = new _Reactor__WEBPACK_IMPORTED_MODULE_5__["default"]();
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
    _classPrivateFieldSet(_selected, this, false);
    this.clicked = false;
    this.hovered = false;
    _classPrivateFieldSet(_disabled, this, false);
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
    this.addMoveAction(function (deltaX, deltaY) {
      if (_this.movable && !_this.disabled && _this.clicked) {
        _this.deltaX -= deltaX;
        _this.deltaY -= deltaY;
      }
    });
  }
  return (0,_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(Component, [{
    key: "initEvents",
    value: function initEvents() {
      var _this2 = this;
      if (!this.hasInitEvents && this.canvas != null) {
        this.canvas.addEventListener("mousemove", this, function (event, result) {
          if (!_this2.disabled) {
            var mousePosition = _this2.getMousePos(event);
            _this2.moving = false;
            if (_this2.clicked) {
              var deltaX = _this2.moveEventStartX - mousePosition.x;
              var deltaY = _this2.moveEventStartY - mousePosition.y;
              _this2.offsetMoveX += deltaX;
              _this2.offsetMoveY += deltaY;
              if (_this2.reactor) {
                _this2.reactor.dispatchEvent("onMove", deltaX, deltaY, mousePosition);
              }
              _this2.moveEventStartX = mousePosition.x;
              _this2.moveEventStartY = mousePosition.y;
              if (_this2.movable) _this2.moving = true;
            }
            if (result) {
              if (_this2.reactor && !_this2.disabled) {
                _this2.reactor.dispatchEvent("onHover", mousePosition);
              }
              if (_this2.tooltip) {
                _this2.tooltip.x = mousePosition.x + 10;
                _this2.tooltip.y = mousePosition.y + 10;
                _this2.tooltip.enable();
              }
              _this2.hovered = true;
            } else {
              _this2.hovered = false;
              if (_this2.tooltip) _this2.tooltip.disable();
            }
          } else {
            _this2.hovered = false;
            _this2.clicked = false;
            if (_this2.tooltip) _this2.tooltip.disable();
          }
        });
        this.canvas.addEventListener("click", this, function (event, result) {
          if (!_this2.disabled) {
            var mousePosition = _this2.getMousePos(event);
            if (result && _this2.hovered) {
              if (!_this2.moving) {
                if (_this2.reactor) {
                  _this2.reactor.dispatchEvent("onClick", mousePosition);
                }
                _this2.selected = true;
              } else {
                _this2.moving = false;
              }
            } else {
              _this2.clicked = false;
              _this2.selected = false;
            }
          } else {
            _this2.hovered = false;
            _this2.clicked = false;
          }
        });
        this.canvas.addEventListener("mousedown", this, function (event, result) {
          if (!_this2.disabled) {
            var mousePosition = _this2.getMousePos(event);
            if (result && !_this2.moving) {
              if (_this2.reactor) {
                _this2.reactor.dispatchEvent("onDown", mousePosition);
              }
              _this2.clicked = true;
              _this2.moveEventStartX = mousePosition.x;
              _this2.moveEventStartY = mousePosition.y;
            }
          } else {
            _this2.hovered = false;
            _this2.clicked = false;
          }
        });
        this.canvas.addEventListener("mouseup", this, function (event) {
          if (!_this2.disabled) {
            var mousePosition = _this2.getMousePos(event);
            if (_this2.reactor) {
              _this2.reactor.dispatchEvent("onUp", mousePosition);
            }
            _this2.clicked = false;
          }
        });
        this.canvas.addEventListener("wheel", this, function (event) {
          if (_this2.hovered && !_this2.disabled && !_this2.scrollDisabled) {
            _this2.offsetScrollX += event.deltaX;
            _this2.offsetScrollY += event.deltaY;
            if (_this2.reactor) {
              _this2.reactor.dispatchEvent("onScroll", event.deltaX, event.deltaY);
            }
          }
        });
        var touchScrollEvent = function touchScrollEvent(event) {
          var changedTouches = event.changedTouches[0];
          var position = _this2.getMousePos(changedTouches);
          if (_this2.hovered && !_this2.disabled && !_this2.scrollDisabled) {
            var deltaX = _this2.touchEventStartX - position.x;
            var deltaY = _this2.touchEventStartY - position.y;
            _this2.offsetScrollX += deltaX;
            _this2.offsetScrollY += deltaY;
            if (_this2.reactor) {
              _this2.reactor.dispatchEvent("onScroll", deltaX, deltaY, position);
            }
            _this2.touchEventStartX = position.x;
            _this2.touchEventStartY = position.y;
          }
        };
        var touchStartEndEvent = function touchStartEndEvent(event, result) {
          var changedTouches = event.changedTouches[0];
          var position = _this2.getMousePos(changedTouches);
          if (result) {
            _this2.hovered = true;
            _this2.selected = true;
          } else {
            _this2.hovered = false;
            _this2.selected = false;
          }
          if (_this2.hovered && !_this2.disabled) {
            _this2.touchEventStartX = position.x;
            _this2.touchEventStartY = position.y;
            _this2.touchEventStartTimestamp = event.timestamp;
          }
        };
        this.canvas.addEventListener("touchstart", this, touchStartEndEvent);
        this.canvas.addEventListener("touchend", this, touchStartEndEvent);
        this.canvas.addEventListener("touchmove", this, function (event) {
          touchScrollEvent(event);
          event.preventDefault();
        });
        this.hasInitEvents = true;
      }
    }

    // eslint-disable-next-line no-unused-vars
  }, {
    key: "draw",
    value: function draw(context) {
      if (this.hidden) return;
      this.initEvents();
      if (this.disabled) {
        this.selected = false;
        this.clicked = false;
        this.hovered = false;
        if (this.tooltip) this.tooltip.disabled = true;
      } else if (this.movable && this.hovered) {
        this.canvas.cursor = "grab";
      }
    }
  }, {
    key: "getMousePos",
    value: function getMousePos(event) {
      return this.canvas.getMousePos(event);
    }
  }, {
    key: "isInside",
    value: function isInside(pos) {
      return pos.x > this.x && pos.x < this.x + this.width && pos.y < this.y + this.height && pos.y > this.y;
    }
  }, {
    key: "disable",
    value: function disable() {
      this.disabled = true;
      return true;
    }
  }, {
    key: "enable",
    value: function enable() {
      this.disabled = false;
      return true;
    }
  }, {
    key: "disabled",
    get: function get() {
      return _classPrivateFieldGet(_disabled, this) || this.parent && this.parent.disabled;
    },
    set: function set(disabled) {
      if (disabled != _classPrivateFieldGet(_disabled, this)) {
        _classPrivateFieldSet(_disabled, this, disabled);
        this.reactor && this.reactor.dispatchEvent("onChange", this);
      }
    }
  }, {
    key: "setClickAction",
    value: function setClickAction(trigger) {
      this.removeAllClickActions();
      this.addClickAction(trigger);
    }
  }, {
    key: "addClickAction",
    value: function addClickAction(trigger) {
      this.reactor.addEventListener("onClick", trigger);
    }
  }, {
    key: "removeClickAction",
    value: function removeClickAction(trigger) {
      this.reactor.removeEventListener("onClick", trigger);
    }
  }, {
    key: "removeAllClickActions",
    value: function removeAllClickActions() {
      this.reactor.removeAllEventListener("onClick");
    }
  }, {
    key: "setHoverAction",
    value: function setHoverAction(trigger) {
      this.removeAllHoverActions();
      this.addHoverAction(trigger);
    }
  }, {
    key: "addHoverAction",
    value: function addHoverAction(trigger) {
      this.reactor.addEventListener("onHover", trigger);
    }
  }, {
    key: "removeHoverAction",
    value: function removeHoverAction(trigger) {
      this.reactor.removeEventListener("onHover", trigger);
    }
  }, {
    key: "removeAllHoverActions",
    value: function removeAllHoverActions() {
      this.reactor.removeAllEventListener("onHover");
    }
  }, {
    key: "setDownAction",
    value: function setDownAction(trigger) {
      this.removeAllDownActions();
      this.addDownAction(trigger);
    }
  }, {
    key: "addDownAction",
    value: function addDownAction(trigger) {
      this.reactor.addEventListener("onDown", trigger);
    }
  }, {
    key: "removeDownAction",
    value: function removeDownAction(trigger) {
      this.reactor.removeEventListener("onDown", trigger);
    }
  }, {
    key: "removeAllDownActions",
    value: function removeAllDownActions() {
      this.reactor.removeAllEventListener("onDown");
    }
  }, {
    key: "setScrollAction",
    value: function setScrollAction(trigger) {
      this.removeAllScrollActions();
      this.addScrollAction(trigger);
    }
  }, {
    key: "addScrollAction",
    value: function addScrollAction(trigger) {
      this.reactor.addEventListener("onScroll", trigger);
    }
  }, {
    key: "removeScrollAction",
    value: function removeScrollAction(trigger) {
      this.reactor.removeEventListener("onScroll", trigger);
    }
  }, {
    key: "removeAllScrollActions",
    value: function removeAllScrollActions() {
      this.reactor.removeAllEventListener("onScroll");
    }
  }, {
    key: "setMoveAction",
    value: function setMoveAction(trigger) {
      this.removeAllMoveActions();
      this.addMoveAction(trigger);
    }
  }, {
    key: "addMoveAction",
    value: function addMoveAction(trigger) {
      this.reactor.addEventListener("onMove", trigger);
    }
  }, {
    key: "removeMoveAction",
    value: function removeMoveAction(trigger) {
      this.reactor.removeEventListener("onMove", trigger);
    }
  }, {
    key: "removeAllMoveActions",
    value: function removeAllMoveActions() {
      this.reactor.removeAllEventListener("onMove");
    }
  }, {
    key: "setChangeAction",
    value: function setChangeAction(trigger) {
      this.removeAllChangeActions();
      this.addChangeAction(trigger);
    }
  }, {
    key: "addChangeAction",
    value: function addChangeAction(trigger) {
      this.reactor.addEventListener("onChange", trigger);
    }
  }, {
    key: "removeChangeAction",
    value: function removeChangeAction(trigger) {
      this.reactor.removeEventListener("onChange", trigger);
    }
  }, {
    key: "removeAllChangeActions",
    value: function removeAllChangeActions() {
      this.reactor.removeAllEventListener("onChange");
    }
  }, {
    key: "setUpAction",
    value: function setUpAction(trigger) {
      this.removeAllUpActions();
      this.addUpAction(trigger);
    }
  }, {
    key: "addUpAction",
    value: function addUpAction(trigger) {
      this.reactor.addEventListener("onUp", trigger);
    }
  }, {
    key: "removeUpAction",
    value: function removeUpAction(trigger) {
      this.reactor.removeEventListener("onUp", trigger);
    }
  }, {
    key: "removeAllUpActions",
    value: function removeAllUpActions() {
      this.reactor.removeAllEventListener("onUp");
    }
  }, {
    key: "height",
    get: function get() {
      return _classPrivateFieldGet(_height, this);
    },
    set: function set(height) {
      if (height != _classPrivateFieldGet(_height, this)) {
        _classPrivateFieldSet(_height, this, height);
        this.reactor && this.reactor.dispatchEvent("onChange", this);
      }
    }
  }, {
    key: "width",
    get: function get() {
      return _classPrivateFieldGet(_width, this);
    },
    set: function set(width) {
      if (width != _classPrivateFieldGet(_width, this)) {
        _classPrivateFieldSet(_width, this, width);
        this.reactor && this.reactor.dispatchEvent("onChange", this);
      }
    }
  }, {
    key: "maxWidth",
    get: function get() {
      return this.width;
    }
  }, {
    key: "maxHeight",
    get: function get() {
      return this.height;
    }
  }, {
    key: "innerWidth",
    get: function get() {
      return this.width;
    }
  }, {
    key: "innerHeight",
    get: function get() {
      return this.height;
    }
  }, {
    key: "minWidth",
    get: function get() {
      return this.width;
    }
  }, {
    key: "minHeight",
    get: function get() {
      return this.height;
    }
  }, {
    key: "x",
    get: function get() {
      var parent = this.parent || this.canvas;
      if (this.style.alignement && parent) {
        var parentWidth = parent.width;
        var parentPadding = parent.style && parent.style.padding || 0;
        if (this.style.alignement == _Constants__WEBPACK_IMPORTED_MODULE_3__["default"].Alignement.CENTER) {
          return parent.x + parentWidth / 2 - this.width / 2 + this.deltaX;
        } else if (this.style.alignement == _Constants__WEBPACK_IMPORTED_MODULE_3__["default"].Alignement.RIGHT) {
          return parent.x + parentWidth - this.width - parentPadding + this.deltaX;
        } else if (this.style.alignement == _Constants__WEBPACK_IMPORTED_MODULE_3__["default"].Alignement.LEFT) {
          return parent.x + parentPadding + this.deltaX;
        }
      } else if (parent) {
        return parent.x + _classPrivateFieldGet(_x, this) + this.deltaX;
      }
      return _classPrivateFieldGet(_x, this) + this.deltaX;
    },
    set: function set(x) {
      _classPrivateFieldSet(_x, this, x);
      this.reactor && this.reactor.dispatchEvent("onChange", this);
    }
  }, {
    key: "y",
    get: function get() {
      var parent = this.parent || this.canvas;
      if (this.style.verticalAlignement && parent) {
        var parentHeight = parent.height;
        var parentPadding = parent.style && parent.style.padding || 0;
        if (this.style.verticalAlignement == _Constants__WEBPACK_IMPORTED_MODULE_3__["default"].VerticalAlignement.BOTTOM) {
          return parent.y + parentHeight - this.height - parentPadding + this.deltaY;
        } else if (this.style.verticalAlignement == _Constants__WEBPACK_IMPORTED_MODULE_3__["default"].VerticalAlignement.CENTER) {
          return parent.y + parentHeight / 2 - this.height / 2 + this.deltaY;
        } else if (this.style.verticalAlignement == _Constants__WEBPACK_IMPORTED_MODULE_3__["default"].VerticalAlignement.TOP) {
          return parent.y + parentPadding + this.deltaY;
        }
      } else if (parent) {
        return parent.y + _classPrivateFieldGet(_y, this) + this.deltaY;
      }
      return _classPrivateFieldGet(_y, this) + this.deltaY;
    },
    set: function set(y) {
      _classPrivateFieldSet(_y, this, y);
      this.reactor && this.reactor.dispatchEvent("onChange", this);
    }
  }, {
    key: "defaultStyle",
    get: function get() {
      return new _Style__WEBPACK_IMPORTED_MODULE_4__["default"]({
        "padding": _Constants__WEBPACK_IMPORTED_MODULE_3__["default"].Setting.DEFAULT_PADDING,
        "spaceBetweenComponents": _Constants__WEBPACK_IMPORTED_MODULE_3__["default"].Setting.DEFAULT_SPACING
      });
    }
  }, {
    key: "style",
    get: function get() {
      return _classPrivateFieldGet(_style, this) || this.defaultStyle;
    },
    set: function set(style) {
      _classPrivateFieldSet(_style, this, new _Style__WEBPACK_IMPORTED_MODULE_4__["default"]());
      _classPrivateFieldGet(_style, this).setAll(this.defaultStyle.getStyles());
      if (style && style instanceof _Style__WEBPACK_IMPORTED_MODULE_4__["default"]) {
        _classPrivateFieldGet(_style, this).setAll(style.getStyles());
      }
      _classPrivateFieldGet(_style, this).component = this;
      this.reactor && this.reactor.dispatchEvent("onChange", this);
    }
  }, {
    key: "hidden",
    get: function get() {
      return this.style && this.style.hidden;
    },
    set: function set(hidden) {
      if (hidden != this.disabled || hidden != this.style.hidden) {
        this.disabled = hidden;
        if (this.style) this.style.set("hidden", hidden);
        this.reactor && this.reactor.dispatchEvent("onChange", this);
      }
    }
  }, {
    key: "selected",
    get: function get() {
      return _classPrivateFieldGet(_selected, this);
    },
    set: function set(selected) {
      if (selected != _classPrivateFieldGet(_selected, this)) {
        _classPrivateFieldSet(_selected, this, selected);
        this.reactor && this.reactor.dispatchEvent("onChange", this);
      }
    }
  }, {
    key: "getAllParents",
    value: function getAllParents() {
      var parent = this.parent;
      var res = [];
      while (parent) {
        res.push(parent);
        parent = parent.parent;
      }
      return res;
    }
  }, {
    key: "compareTo",
    value: function compareTo(otherComponent) {
      var isForeground = this.style && this.style.foreground;
      var otherIsForeground = otherComponent.style && otherComponent.style.foreground;
      var zIndex = this.style && this.style.zIndex;
      var otherzIndex = otherComponent.style && otherComponent.style.zIndex;
      if (this.parent == otherComponent) {
        return 1;
      } else if (otherComponent.parent == this) {
        return -1;
      } else if (isForeground && !otherIsForeground) {
        return 1;
      } else if (!isForeground && otherIsForeground) {
        return -1;
      } else if (zIndex > otherzIndex) {
        return 1;
      } else if (zIndex < otherzIndex) {
        return -1;
      }
      return otherComponent.compareToComponent(this) || -this.compareToComponent(otherComponent);
    }

    // eslint-disable-next-line no-unused-vars
  }, {
    key: "compareToComponent",
    value: function compareToComponent(otherComponent) {
      return 0;
    }

    // eslint-disable-next-line no-unused-vars
  }, {
    key: "compareToMenu",
    value: function compareToMenu(otherComponent) {
      return -1;
    }

    // eslint-disable-next-line no-unused-vars
  }, {
    key: "compareToTooltip",
    value: function compareToTooltip(otherComponent) {
      return -1;
    }

    // eslint-disable-next-line no-unused-vars
  }, {
    key: "compareToNotification",
    value: function compareToNotification(otherComponent) {
      return -1;
    }

    // eslint-disable-next-line no-unused-vars
  }, {
    key: "compareToScrollbar",
    value: function compareToScrollbar(otherComponent) {
      return -1;
    }
  }], [{
    key: "compareComponents",
    value: function compareComponents(component, other) {
      return component.compareTo(other);
    }
  }]);
}();


/***/ },

/***/ "./src/Constants.js"
/*!**************************!*\
  !*** ./src/Constants.js ***!
  \**************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
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
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  Setting: {
    DISABLE_OPTIMIZATIONS: false,
    // true to disable optimizations, can fix some problems, disabling optimization reduces performance
    DISABLE_EXPERIMENTAL_OPTIMIZATIONS: false,
    // true to disable optimizations that are considered experimental
    DISABLE_IS_COMPONENT_VISIBLE_OPTIMIZATIONS: true,
    // true to disable optimizations of the Container.isComponentVisible method
    DISABLE_CONTAINERS_CUTTING: false,
    // disabling containers cutting allow to view the components of a container that are not totally visible, you can also disable optimizations to displays elements that are not drawn for optimization purposes
    ENABLE_PIXEL_RATIO_RESIZING: true,
    // enabling this allow resizing the canvas to match the screen pixel ratio
    PIXEL_RATIO: 1,
    // the current pixel ratio, automatically updated
    RESOLUTION_SCALE: 1,
    // the resolution scale
    FONT_FAMILY: "sans-serif",
    FONT_SIZE: 28,
    CANVAS_WIDTH: 600,
    CANVAS_HEIGHT: 400,
    DEFAULT_PADDING: 6,
    DEFAULT_SPACING: 6,
    BUTTON_DEFAULT_BACKGROUND: "rgba(0, 0, 0, 0)",
    BUTTON_DEFAULT_HOVER_BACKGROUND: "#95A5A6",
    BUTTON_DEFAULT_CLICK_BACKGROUND: "#727F80",
    BUTTON_DEFAULT_ALTERNATIVE_BACKGROUND: "#ACBEBF",
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
    NOTIFICATION_DEFAULT_ANIMATION_DURATION: 500,
    // ms
    PROGRESS_DEFAULT_BACKGROUND: "#bdc3c7",
    PROGRESS_DEFAULT_FOREGROUND: "#27ae60",
    PROGRESS_DEFAULT_ANIMATION_DURATION: 2000,
    // ms
    TOOLTIP_DEFAULT_BACKGROUND: "rgba(255, 255, 255, 0.25)",
    ARROW_DEFAULT_LINE_CAP: "round",
    ARROW_DEFAULT_COLOR: "#FF0000",
    ARROW_DEFAULT_LINE_SIZE: 8,
    ARROW_DEFAULT_HEAD_SIZE: 20,
    CROSS_DEFAULT_LINE_CAP: "round",
    CROSS_DEFAULT_COLOR: "#fff",
    CROSS_DEFAULT_LINE_SIZE: 3,
    SCROLLBAR_DEFAULT_BACKGROUND: "rgba(149, 165, 166, 0.75)",
    SCROLLBAR_DEFAULT_HOVER_BACKGROUND: "rgba(149, 165, 166, 0.9)",
    SCROLLBAR_DEFAULT_CLICK_BACKGROUND: "rgba(149, 165, 166, 0.5)",
    SCROLLBAR_DEFAULT_SIZE: 10,
    DEFAULT_BORDER_SIZE: 3,
    DEFAULT_BORDER_COLOR_SELECTED: "#a2cdd8",
    DEFAULT_ANIMATION_DURATION: 2000,
    // ms
    TRIANGLE_DEFAULT_LINE_CAP: "round",
    TRIANGLE_DEFAULT_COLOR: "#000",
    TRIANGLE_DEFAULT_FILL_COLOR: "#000",
    TRIANGLE_DEFAULT_LINE_SIZE: 3,
    TRIANGLE_DEFAULT_FILL: true,
    SELECT_DEFAULT_BACKGROUND: "#ecf0f1",
    SELECT_DEFAULT_HOVER_BACKGROUND: "#bdc3c7",
    SELECT_DEFAULT_CLICK_BACKGROUND: "#adb2b5",
    CIRCLE_DEFAULT_LINE_CAP: "round",
    CIRCLE_DEFAULT_COLOR: "#fff",
    CIRCLE_DEFAULT_FILL_COLOR: "#000",
    CIRCLE_DEFAULT_LINE_SIZE: 3,
    CIRCLE_DEFAULT_FILL: true,
    ERROR_MENU_BACKGROUND_COLOR: "#3498db"
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
  },
  String: {
    ERROR_MESSAGE_CANVAS: "A fatal error has occurred at the JSGameTools level.",
    ERROR_MESSAGE_CANVAS_LABEL: ":'(\nA fatal error has occurred at the JSGameTools level.",
    RETRY: "Retry",
    NOTICE_MESSAGE: "Notice:",
    WARNING_MESSAGE: "Warning:",
    ERROR_MESSAGE: "Error:",
    OPTIMIZATION_DISABLED: "Optimizations are disabled. You may notice low performance.",
    CONTAINER_CUTTING_DISABLED: "Containers cutting is disabled.",
    BUTTON_IMAGE_DEPRECATED: "JSGameTools.ButtonImage is deprecated. Please use a Button with an ImageContainer instead.",
    INPUT_FULLSCREEN: "The use of JSGameTools.Canvas is needed for Input components to properly work in fullscreen mode.",
    DETAILS: "Details"
  }
});

/***/ },

/***/ "./src/Container.js"
/*!**************************!*\
  !*** ./src/Container.js ***!
  \**************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Container)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_set__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/set */ "./node_modules/@babel/runtime/helpers/esm/set.js");
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_helpers_get__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/get */ "./node_modules/@babel/runtime/helpers/esm/get.js");
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime/helpers/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _Box__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./Box */ "./src/Box.js");
/* harmony import */ var _Component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./Component */ "./src/Component.js");
/* harmony import */ var _Constants__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./Constants */ "./src/Constants.js");
/* harmony import */ var _ScrollbarHorizontal__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./ScrollbarHorizontal */ "./src/ScrollbarHorizontal.js");
/* harmony import */ var _ScrollbarVertical__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./ScrollbarVertical */ "./src/ScrollbarVertical.js");
/* harmony import */ var _Style__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./Style */ "./src/Style.js");
/* harmony import */ var _Utils__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./Utils */ "./src/Utils.js");








function _callSuper(t, o, e) { return o = (0,_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__["default"])(o), (0,_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], (0,_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__["default"])(t).constructor) : o.apply(t, e)); }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }
function _superPropSet(t, e, o, r, p, f) { return (0,_babel_runtime_helpers_set__WEBPACK_IMPORTED_MODULE_3__["default"])((0,_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__["default"])(f ? t.prototype : t), e, o, r, p); }
function _superPropGet(t, o, e, r) { var p = (0,_babel_runtime_helpers_get__WEBPACK_IMPORTED_MODULE_5__["default"])((0,_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__["default"])(1 & r ? t.prototype : t), o, e); return 2 & r && "function" == typeof p ? function (t) { return p.apply(e, t); } : p; }
function _classPrivateFieldInitSpec(e, t, a) { _checkPrivateRedeclaration(e, t), t.set(e, a); }
function _checkPrivateRedeclaration(e, t) { if (t.has(e)) throw new TypeError("Cannot initialize the same private elements twice on an object"); }
function _classPrivateFieldGet(s, a) { return s.get(_assertClassBrand(s, a)); }
function _classPrivateFieldSet(s, a, r) { return s.set(_assertClassBrand(s, a), r), r; }
function _assertClassBrand(e, t, n) { if ("function" == typeof e ? e === t : e.has(t)) return arguments.length < 3 ? t : n; throw new TypeError("Private element is not present on this object"); }
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







var _components = /*#__PURE__*/new WeakMap();
var _maxWidth = /*#__PURE__*/new WeakMap();
var _maxHeight = /*#__PURE__*/new WeakMap();
var _minWidth = /*#__PURE__*/new WeakMap();
var _minHeight = /*#__PURE__*/new WeakMap();
var Container = /*#__PURE__*/function (_Box) {
  function Container(x, y, maxWidth, maxHeight, style) {
    var _this2;
    var _this;
    (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, Container);
    _this = _callSuper(this, Container, [x, y, null, null, style]);
    (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_7__["default"])(_this, "selectable", false);
    _classPrivateFieldInitSpec(_this, _components, []);
    _classPrivateFieldInitSpec(_this, _maxWidth, 0);
    _classPrivateFieldInitSpec(_this, _maxHeight, 0);
    _classPrivateFieldInitSpec(_this, _minWidth, 0);
    _classPrivateFieldInitSpec(_this, _minHeight, 0);
    (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_7__["default"])(_this, "eventChangeCallback", function () {
      return _this.reactor.dispatchEvent("onChange", _this);
    });
    for (var _len = arguments.length, components = new Array(_len > 5 ? _len - 5 : 0), _key = 5; _key < _len; _key++) {
      components[_key - 5] = arguments[_key];
    }
    (_this2 = _this).addAll.apply(_this2, components);
    _this.canvasTmp = document.createElement("canvas");
    _classPrivateFieldSet(_maxWidth, _this, maxWidth);
    _classPrivateFieldSet(_maxHeight, _this, maxHeight);
    _this.scrollbarHorizontal = new _ScrollbarHorizontal__WEBPACK_IMPORTED_MODULE_11__["default"](null, null, _this);
    _this.scrollbarVertical = new _ScrollbarVertical__WEBPACK_IMPORTED_MODULE_12__["default"](null, null, _this);
    _this.addScrollAction(function (deltaX, deltaY) {
      return _this.controlScrolling(deltaX, deltaY);
    });
    if (!_Constants__WEBPACK_IMPORTED_MODULE_10__["default"].Setting.DISABLE_EXPERIMENTAL_OPTIMIZATIONS) {
      _this.addChangeAction(function (componentChanged) {
        componentChanged == _this.parent && _this.components.forEach(function (component) {
          return component && component.reactor.dispatchEvent("onChange", _this);
        });
      });
    }
    return _this;
  }
  (0,_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_6__["default"])(Container, _Box);
  return (0,_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(Container, [{
    key: "draw",
    value: function draw(context) {
      var _this3 = this;
      if (this.hidden) return;
      var canvas = context.canvas;
      var ctx = canvas.getContext("2d");
      ctx.save();
      if (this.isCutting) {
        var ctxTemp = this.canvasTmp.getContext("2d");
        this.canvasTmp.width = _Utils__WEBPACK_IMPORTED_MODULE_14__["default"].getCanvasWidth(canvas) * _Constants__WEBPACK_IMPORTED_MODULE_10__["default"].Setting.PIXEL_RATIO;
        this.canvasTmp.height = _Utils__WEBPACK_IMPORTED_MODULE_14__["default"].getCanvasHeight(canvas) * _Constants__WEBPACK_IMPORTED_MODULE_10__["default"].Setting.PIXEL_RATIO;
        this.canvasTmp.style.width = _Utils__WEBPACK_IMPORTED_MODULE_14__["default"].getCanvasWidth(canvas);
        this.canvasTmp.style.height = _Utils__WEBPACK_IMPORTED_MODULE_14__["default"].getCanvasHeight(canvas);
        _Utils__WEBPACK_IMPORTED_MODULE_14__["default"].clear(ctxTemp);
      }
      this.components.forEach(function (component) {
        if (_this3.canvas) component.canvas = _this3.canvas;
      });
      this.controlScrolling(0, 0);
      _superPropGet(Container, "draw", this, 3)([context]);
      ctx.restore();
    }
  }, {
    key: "drawVerticalScrollBar",
    value: function drawVerticalScrollBar(ctx) {
      if (this.scrollbarVertical) {
        this.scrollbarVertical.canvas = this.canvas;
        this.scrollbarVertical.draw(ctx);
      }
    }
  }, {
    key: "drawHorizontalScrollBar",
    value: function drawHorizontalScrollBar(ctx) {
      if (this.scrollbarHorizontal) {
        this.scrollbarHorizontal.canvas = this.canvas;
        this.scrollbarHorizontal.draw(ctx);
      }
    }
  }, {
    key: "drawScrollbars",
    value: function drawScrollbars(ctx) {
      if (!this.style.scrollXDisabled) this.drawHorizontalScrollBar(ctx);
      if (!this.style.scrollYDisabled) this.drawVerticalScrollBar(ctx);
    }
  }, {
    key: "set",
    value: function set() {
      var _this4 = this;
      var hasChanged = false;
      for (var _len2 = arguments.length, components = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
        components[_key2] = arguments[_key2];
      }
      if (components.length == this.components.length) {
        components.forEach(function (component, i) {
          if (_this4.components[i] != component) hasChanged = true;
        });
      } else {
        hasChanged = true;
      }
      if (hasChanged) {
        this.clear();
        this.addAll.apply(this, components);
      }
    }
  }, {
    key: "add",
    value: function add(component) {
      _classPrivateFieldGet(_components, this).push(component);
      component.parent = this;
      if (this.canvas) component.canvas = this.canvas;
      component.addChangeAction(this.eventChangeCallback);
      this.reactor.dispatchEvent("onChange", this);
    }
  }, {
    key: "addAll",
    value: function addAll() {
      var _this5 = this;
      for (var _len3 = arguments.length, components = new Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
        components[_key3] = arguments[_key3];
      }
      components.forEach(function (component) {
        return _this5.add(component);
      });
    }
  }, {
    key: "remove",
    value: function remove(component) {
      if (_classPrivateFieldGet(_components, this).indexOf(component) != -1) {
        component.removeChangeAction(this.eventChangeCallback);
        _classPrivateFieldSet(_components, this, _classPrivateFieldGet(_components, this).filter(function (current) {
          return component != current;
        }));
        this.reactor.dispatchEvent("onChange", this);
      }
    }
  }, {
    key: "clear",
    value: function clear() {
      var _this6 = this;
      _classPrivateFieldGet(_components, this).forEach(function (component) {
        return _this6.remove(component);
      });
      this.reactor.dispatchEvent("onChange", this);
    }
  }, {
    key: "components",
    get: function get() {
      var components = [];
      _classPrivateFieldGet(_components, this).forEach(function (component) {
        return components.push(component);
      });
      return components;
    }
  }, {
    key: "allComponents",
    get: function get() {
      var components = this.components;
      components.push(this.scrollbarHorizontal);
      components.push(this.scrollbarVertical);
      return components;
    }
  }, {
    key: "getComponentsTree",
    value: function getComponentsTree() {
      var _this7 = this;
      var start = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this;
      var components = {
        "component": start,
        "childs": []
      };
      if (start.allComponents) {
        start.allComponents.forEach(function (component) {
          return components.childs.push(_this7.getComponentsTree(component));
        });
      }
      return components;
    }
  }, {
    key: "disable",
    value: function disable() {
      var changed = _superPropGet(Container, "disable", this, 3)([]);
      _classPrivateFieldGet(_components, this).forEach(function (component) {
        if (component && component.disable && component.disable()) {
          changed = true;
        }
      });
      if (changed) this.reactor.dispatchEvent("onChange", this);
    }
  }, {
    key: "enable",
    value: function enable() {
      var changed = _superPropGet(Container, "enable", this, 3)([]);
      _classPrivateFieldGet(_components, this).forEach(function (component) {
        if (component && component.enable && component.enable()) {
          changed = true;
        }
      });
      if (changed) this.reactor.dispatchEvent("onChange", this);
    }
  }, {
    key: "width",
    get: function get() {
      var width = this.parent && this.parent.width;
      var min = this.maxWidth != null ? Math.min(this.maxWidth, width) : null;
      return this.minWidth != null ? Math.max(this.minWidth, min != null ? min : width) : width;
    }
  }, {
    key: "height",
    get: function get() {
      var height = this.parent && this.parent.height;
      var min = this.maxWidth != null ? Math.min(this.maxHeight, height) : null;
      return this.minHeight != null ? Math.max(this.minHeight, min != null ? min : height) : height;
    }
  }, {
    key: "maxWidth",
    get: function get() {
      return _classPrivateFieldGet(_maxWidth, this);
    },
    set: function set(maxWidth) {
      if (maxWidth != _classPrivateFieldGet(_maxWidth, this)) {
        _classPrivateFieldSet(_maxWidth, this, maxWidth);
        this.reactor.dispatchEvent("onChange", this);
      }
    }
  }, {
    key: "maxHeight",
    get: function get() {
      return _classPrivateFieldGet(_maxHeight, this);
    },
    set: function set(maxHeight) {
      if (maxHeight != _classPrivateFieldGet(_maxHeight, this)) {
        _classPrivateFieldSet(_maxHeight, this, maxHeight);
        this.reactor.dispatchEvent("onChange", this);
      }
    }
  }, {
    key: "minWidth",
    get: function get() {
      return _classPrivateFieldGet(_minWidth, this);
    },
    set: function set(minWidth) {
      if (minWidth != _classPrivateFieldGet(_minWidth, this)) {
        _classPrivateFieldSet(_minWidth, this, minWidth);
        this.reactor.dispatchEvent("onChange", this);
      }
    }
  }, {
    key: "minHeight",
    get: function get() {
      return _classPrivateFieldGet(_minHeight, this);
    },
    set: function set(minHeight) {
      if (minHeight != _classPrivateFieldGet(_minHeight, this)) {
        _classPrivateFieldSet(_minHeight, this, minHeight);
        this.reactor.dispatchEvent("onChange", this);
      }
    }
  }, {
    key: "updateInnerHeight",
    value: function updateInnerHeight() {}
  }, {
    key: "updateInnerWidth",
    value: function updateInnerWidth() {}
  }, {
    key: "canvas",
    get: function get() {
      return _superPropGet(Container, "canvas", this, 1);
    },
    set: function set(canvas) {
      var _this8 = this;
      if (canvas != this.canvas) {
        _superPropSet(Container, "canvas", canvas, this, 1, 1);
        _classPrivateFieldGet(_components, this).forEach(function (component) {
          component.canvas = canvas;
          if (component.reactor) component.reactor.dispatchEvent("onChange", _this8);
        });
        this.reactor.dispatchEvent("onChange", this);
      }
    }
  }, {
    key: "getComponentId",
    value: function getComponentId(component) {
      var result = null;
      _classPrivateFieldGet(_components, this).forEach(function (c, i) {
        if (c == component) result = i;
      });
      return result;
    }
  }, {
    key: "scrollAreaSizeX",
    get: function get() {
      return this.innerWidth - this.width;
    }
  }, {
    key: "scrollAreaSizeY",
    get: function get() {
      return this.innerHeight - this.height;
    }
  }, {
    key: "controlScrolling",
    value: function controlScrolling(deltaX, deltaY) {
      if (!this.style.scrollYDisabled) {
        if (this.scrollAreaSizeY <= 0) {
          this.offsetScrollY = 0;
        } else {
          var percentScrollbarY = this.offsetScrollY / this.scrollAreaSizeY;
          if (percentScrollbarY <= 0 && deltaY <= 0) {
            this.offsetScrollY = Math.min(0, this.y);
          } else if (percentScrollbarY > 1 && deltaY >= 0) {
            this.offsetScrollY = this.scrollAreaSizeY;
          }
        }
      } else {
        this.offsetScrollY -= deltaY;
      }
      if (!this.style.scrollXDisabled) {
        if (this.scrollAreaSizeX <= 0) {
          this.offsetScrollX = 0;
        } else {
          var percentScrollbarX = this.offsetScrollX / this.scrollAreaSizeX;
          if (percentScrollbarX <= 0 && deltaX <= 0) {
            this.offsetScrollX = Math.min(0, this.x);
          } else if (percentScrollbarX > 1 && deltaX >= 0) {
            this.offsetScrollX = this.scrollAreaSizeX;
          }
        }
      } else {
        this.offsetScrollX -= deltaX;
      }
    }
  }, {
    key: "isComponentVisible",
    value: function isComponentVisible(component) {
      if (_Constants__WEBPACK_IMPORTED_MODULE_10__["default"].Setting.DISABLE_OPTIMIZATIONS) return true;
      if (component instanceof _Component__WEBPACK_IMPORTED_MODULE_9__["default"] && !component.hidden) {
        if (!_Constants__WEBPACK_IMPORTED_MODULE_10__["default"].Setting.DISABLE_IS_COMPONENT_VISIBLE_OPTIMIZATIONS && this.parent && this.parent.isComponentVisible && !this.parent.isComponentVisible(component)) {
          return false;
        }
        var width = this.width;
        var height = this.height;
        var componentWidth = component.width;
        var componentHeight = component.height;
        var canvasWidth = this.canvas && this.canvas.width || width;
        var canvasHeight = this.canvas && this.canvas.height || height;
        if (component.x + componentWidth >= this.x && component.x <= this.x + width && component.y + componentHeight >= this.y && component.y <= this.y + height && component.x + componentWidth >= 0 && component.x <= canvasWidth && component.y + componentHeight >= 0 && component.y <= canvasHeight) {
          return true;
        }
      }
      return false;
    }
  }, {
    key: "isCutting",
    get: function get() {
      return !_Constants__WEBPACK_IMPORTED_MODULE_10__["default"].Setting.DISABLE_CONTAINERS_CUTTING && (this.maxWidth && this.innerWidth > this.maxWidth || this.maxHeight && this.innerHeight > this.maxHeight) && this.canvasTmp != null;
    }
  }, {
    key: "defaultStyle",
    get: function get() {
      return new _Style__WEBPACK_IMPORTED_MODULE_13__["default"]({
        "padding": 0,
        "spaceBetweenComponents": _Constants__WEBPACK_IMPORTED_MODULE_10__["default"].Setting.DEFAULT_SPACING
      });
    }
  }], [{
    key: "sortComponentsTree",
    value: function sortComponentsTree(component, other) {
      return component.component.compareTo(other.component);
    }
  }]);
}(_Box__WEBPACK_IMPORTED_MODULE_8__["default"]);


/***/ },

/***/ "./src/Cross.js"
/*!**********************!*\
  !*** ./src/Cross.js ***!
  \**********************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Cross)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_set__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/set */ "./node_modules/@babel/runtime/helpers/esm/set.js");
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_helpers_get__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/get */ "./node_modules/@babel/runtime/helpers/esm/get.js");
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime/helpers/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _Component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./Component */ "./src/Component.js");
/* harmony import */ var _Constants__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./Constants */ "./src/Constants.js");
/* harmony import */ var _Utils__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./Utils */ "./src/Utils.js");
/* harmony import */ var _Style__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./Style */ "./src/Style.js");








function _callSuper(t, o, e) { return o = (0,_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__["default"])(o), (0,_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], (0,_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__["default"])(t).constructor) : o.apply(t, e)); }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }
function _superPropSet(t, e, o, r, p, f) { return (0,_babel_runtime_helpers_set__WEBPACK_IMPORTED_MODULE_3__["default"])((0,_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__["default"])(f ? t.prototype : t), e, o, r, p); }
function _superPropGet(t, o, e, r) { var p = (0,_babel_runtime_helpers_get__WEBPACK_IMPORTED_MODULE_5__["default"])((0,_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__["default"])(1 & r ? t.prototype : t), o, e); return 2 & r && "function" == typeof p ? function (t) { return p.apply(e, t); } : p; }
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




var Cross = /*#__PURE__*/function (_Component) {
  function Cross(x, y, width, height, style) {
    var _this;
    (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, Cross);
    _this = _callSuper(this, Cross, [x, y, width, height, style]);
    (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_7__["default"])(_this, "selectable", false);
    return _this;
  }
  (0,_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_6__["default"])(Cross, _Component);
  return (0,_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(Cross, [{
    key: "draw",
    value: function draw(context) {
      if (this.hidden) return;
      _superPropGet(Cross, "draw", this, 3)([context]);
      var canvas = context.canvas;
      var ctx = canvas.getContext("2d");
      _Utils__WEBPACK_IMPORTED_MODULE_10__["default"].drawCross(ctx, this.x, this.y, this.width, this.height, this.style.lineWidth, this.style.color, this.style.lineCap);
      this.init = true;
    }
  }, {
    key: "width",
    get: function get() {
      return _superPropGet(Cross, "width", this, 1) + this.style.lineWidth;
    },
    set: function set(width) {
      _superPropSet(Cross, "width", width, this, 1, 1);
    }
  }, {
    key: "height",
    get: function get() {
      return _superPropGet(Cross, "height", this, 1) + this.style.lineWidth;
    },
    set: function set(height) {
      _superPropSet(Cross, "height", height, this, 1, 1);
    }
  }, {
    key: "defaultStyle",
    get: function get() {
      return new _Style__WEBPACK_IMPORTED_MODULE_11__["default"]({
        "lineWidth": _Constants__WEBPACK_IMPORTED_MODULE_9__["default"].Setting.CROSS_DEFAULT_LINE_SIZE,
        "color": _Constants__WEBPACK_IMPORTED_MODULE_9__["default"].Setting.CROSS_DEFAULT_COLOR,
        "lineCap": _Constants__WEBPACK_IMPORTED_MODULE_9__["default"].Setting.CROSS_DEFAULT_LINE_CAP
      });
    }
  }]);
}(_Component__WEBPACK_IMPORTED_MODULE_8__["default"]);


/***/ },

/***/ "./src/EasingFunctions.js"
/*!********************************!*\
  !*** ./src/EasingFunctions.js ***!
  \********************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
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
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  easeInCubic: function easeInCubic(x) {
    return x * x * x;
  },
  easeOutBounce: function easeOutBounce(x) {
    var n1 = 7.5625;
    var d1 = 2.75;
    if (x < 1 / d1) {
      return n1 * x * x;
    } else if (x < 2 / d1) {
      return n1 * (x -= 1.5 / d1) * x + 0.75;
    } else if (x < 2.5 / d1) {
      return n1 * (x -= 2.25 / d1) * x + 0.9375;
    } else {
      return n1 * (x -= 2.625 / d1) * x + 0.984375;
    }
  },
  easeInOutCubic: function easeInOutCubic(x) {
    return x < 0.5 ? 4 * x * x * x : 1 - Math.pow(-2 * x + 2, 3) / 2;
  },
  easeInOutSine: function easeInOutSine(x) {
    return -(Math.cos(Math.PI * x) - 1) / 2;
  },
  easeInOutQuint: function easeInOutQuint(x) {
    return x < 0.5 ? 16 * x * x * x * x * x : 1 - Math.pow(-2 * x + 2, 5) / 2;
  },
  easeInOutCirc: function easeInOutCirc(x) {
    return x < 0.5 ? (1 - Math.sqrt(1 - Math.pow(2 * x, 2))) / 2 : (Math.sqrt(1 - Math.pow(-2 * x + 2, 2)) + 1) / 2;
  },
  easeInOutQuad: function easeInOutQuad(x) {
    return x < 0.5 ? 2 * x * x : 1 - Math.pow(-2 * x + 2, 2) / 2;
  },
  easeInOutQuart: function easeInOutQuart(x) {
    return x < 0.5 ? 8 * x * x * x * x : 1 - Math.pow(-2 * x + 2, 4) / 2;
  },
  easeInOutExpo: function easeInOutExpo(x) {
    return x === 0 ? 0 : x === 1 ? 1 : x < 0.5 ? Math.pow(2, 20 * x - 10) / 2 : (2 - Math.pow(2, -20 * x + 10)) / 2;
  },
  easeInOutBack: function easeInOutBack(x) {
    var c1 = 1.70158;
    var c2 = c1 * 1.525;
    return x < 0.5 ? Math.pow(2 * x, 2) * ((c2 + 1) * 2 * x - c2) / 2 : (Math.pow(2 * x - 2, 2) * ((c2 + 1) * (x * 2 - 2) + c2) + 2) / 2;
  }
});

/***/ },

/***/ "./src/ErrorScreen.js"
/*!****************************!*\
  !*** ./src/ErrorScreen.js ***!
  \****************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ ErrorScreen)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var _Scene__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Scene */ "./src/Scene.js");
/* harmony import */ var _Constants__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Constants */ "./src/Constants.js");
/* harmony import */ var _Style__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./Style */ "./src/Style.js");
/* harmony import */ var _Menu__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./Menu */ "./src/Menu.js");
/* harmony import */ var _Label__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./Label */ "./src/Label.js");
/* harmony import */ var _Button__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./Button */ "./src/Button.js");
/* harmony import */ var _Row__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./Row */ "./src/Row.js");





function _callSuper(t, o, e) { return o = (0,_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(o), (0,_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], (0,_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(t).constructor) : o.apply(t, e)); }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }
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







var ErrorScreen = /*#__PURE__*/function (_Scene) {
  function ErrorScreen(canvas) {
    var _this;
    (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, ErrorScreen);
    _this = _callSuper(this, ErrorScreen);
    _this.canvas = canvas;
    _this.labelDetailsSceneError = new _Label__WEBPACK_IMPORTED_MODULE_9__["default"]("", null, null, new _Style__WEBPACK_IMPORTED_MODULE_7__["default"]({
      "fontColor": "white",
      "alignement": "center",
      "fontSize": _Constants__WEBPACK_IMPORTED_MODULE_6__["default"].Setting.FONT_SIZE / 1.75
    }));
    _this.labelDetailsSceneError.hidden = true;
    var buttonSceneError = new _Button__WEBPACK_IMPORTED_MODULE_10__["default"](null, null, null, null, new _Style__WEBPACK_IMPORTED_MODULE_7__["default"]({
      "backgroundColor": _Constants__WEBPACK_IMPORTED_MODULE_6__["default"].Setting.BUTTON_DEFAULT_ALTERNATIVE_BACKGROUND
    }), new _Label__WEBPACK_IMPORTED_MODULE_9__["default"](_Constants__WEBPACK_IMPORTED_MODULE_6__["default"].String.RETRY, null, null, new _Style__WEBPACK_IMPORTED_MODULE_7__["default"]({
      "fontColor": "white",
      "alignement": "center"
    })));
    var buttonDetailsSceneError = new _Button__WEBPACK_IMPORTED_MODULE_10__["default"](null, null, null, null, new _Style__WEBPACK_IMPORTED_MODULE_7__["default"]({
      "backgroundColor": _Constants__WEBPACK_IMPORTED_MODULE_6__["default"].Setting.BUTTON_DEFAULT_ALTERNATIVE_BACKGROUND
    }), new _Label__WEBPACK_IMPORTED_MODULE_9__["default"](_Constants__WEBPACK_IMPORTED_MODULE_6__["default"].String.DETAILS, null, null, new _Style__WEBPACK_IMPORTED_MODULE_7__["default"]({
      "fontColor": "white",
      "alignement": "center"
    })));
    var colDetailsSceneError = new _Row__WEBPACK_IMPORTED_MODULE_11__["default"](null, null, null, 0, new _Style__WEBPACK_IMPORTED_MODULE_7__["default"]({
      "alignement": "center"
    }), _this.labelDetailsSceneError);
    var menuSceneError = new _Menu__WEBPACK_IMPORTED_MODULE_8__["default"](new _Style__WEBPACK_IMPORTED_MODULE_7__["default"]({
      "spaceBetweenComponents": 15,
      "backgroundColor": _Constants__WEBPACK_IMPORTED_MODULE_6__["default"].Setting.ERROR_MENU_BACKGROUND_COLOR
    }), new _Label__WEBPACK_IMPORTED_MODULE_9__["default"](_Constants__WEBPACK_IMPORTED_MODULE_6__["default"].String.ERROR_MESSAGE_CANVAS_LABEL, null, null, new _Style__WEBPACK_IMPORTED_MODULE_7__["default"]({
      "fontColor": "white",
      "alignement": "center"
    })), colDetailsSceneError, new _Row__WEBPACK_IMPORTED_MODULE_11__["default"](null, null, null, null, new _Style__WEBPACK_IMPORTED_MODULE_7__["default"]({
      "alignement": "center"
    }), buttonSceneError, buttonDetailsSceneError));
    menuSceneError.enable();
    buttonSceneError.addClickAction(function () {
      _this.canvas.hasError = false;
      _this.canvas.scene = _this.canvas.scenePrevious;
      _this.labelDetailsSceneError.hidden = true;
      colDetailsSceneError.maxHeight = 0;
    });
    buttonDetailsSceneError.addClickAction(function () {
      _this.labelDetailsSceneError.hidden = !_this.labelDetailsSceneError.hidden;
      colDetailsSceneError.maxHeight = !_this.labelDetailsSceneError.hidden ? 100 : 0;
    });
    _this.add(menuSceneError);
    return _this;
  }
  (0,_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(ErrorScreen, _Scene);
  return (0,_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(ErrorScreen, [{
    key: "errorText",
    get: function get() {
      return this.labelDetailsSceneError.text;
    },
    set: function set(text) {
      this.labelDetailsSceneError.text = text;
    }
  }]);
}(_Scene__WEBPACK_IMPORTED_MODULE_5__["default"]);


/***/ },

/***/ "./src/Event.js"
/*!**********************!*\
  !*** ./src/Event.js ***!
  \**********************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Event)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");


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
var Event = /*#__PURE__*/function () {
  function Event(name) {
    (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, Event);
    this.name = name;
    this.callbacks = [];
  }
  return (0,_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(Event, [{
    key: "registerCallback",
    value: function registerCallback(callback) {
      this.callbacks.push(callback);
    }
  }, {
    key: "removeCallback",
    value: function removeCallback(callback) {
      this.callbacks.filter(function (current) {
        return current != callback;
      });
    }
  }, {
    key: "removeAllCallbacks",
    value: function removeAllCallbacks() {
      this.callbacks = [];
    }
  }]);
}();


/***/ },

/***/ "./src/FPSMeter.js"
/*!*************************!*\
  !*** ./src/FPSMeter.js ***!
  \*************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ FPSMeter)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_helpers_get__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/get */ "./node_modules/@babel/runtime/helpers/esm/get.js");
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _Label__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./Label */ "./src/Label.js");







function _callSuper(t, o, e) { return o = (0,_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(o), (0,_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], (0,_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(t).constructor) : o.apply(t, e)); }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }
function _superPropGet(t, o, e, r) { var p = (0,_babel_runtime_helpers_get__WEBPACK_IMPORTED_MODULE_4__["default"])((0,_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(1 & r ? t.prototype : t), o, e); return 2 & r && "function" == typeof p ? function (t) { return p.apply(e, t); } : p; }
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

var FPSMeter = /*#__PURE__*/function (_Label) {
  function FPSMeter(displayFrames, x, y, style) {
    var _this;
    (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, FPSMeter);
    _this = _callSuper(this, FPSMeter, [null, x, y, style]);
    (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(_this, "selectable", false);
    _this.displayFrames = displayFrames || false;
    _this.frames = 0;
    _this.lastFrame = 0;
    _this.currentFPS = 0;
    _this.intervalCountFPS = setInterval(function () {
      return _this.countFPS();
    }, 1000);
    return _this;
  }
  (0,_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5__["default"])(FPSMeter, _Label);
  return (0,_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(FPSMeter, [{
    key: "draw",
    value: function draw(context) {
      if (this.hidden) return;
      this.text = "FPS: " + this.currentFPS + (this.displayFrames ? " / Frames: " + this.frames : "");
      _superPropGet(FPSMeter, "draw", this, 3)([context]);
      this.frames++;
    }
  }, {
    key: "countFPS",
    value: function countFPS() {
      if (this.lastFrame > 0) this.currentFPS = this.frames - this.lastFrame;
      this.lastFrame = this.frames;
    }
  }]);
}(_Label__WEBPACK_IMPORTED_MODULE_7__["default"]);


/***/ },

/***/ "./src/ImageContainer.js"
/*!*******************************!*\
  !*** ./src/ImageContainer.js ***!
  \*******************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ ImageContainer)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_set__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/set */ "./node_modules/@babel/runtime/helpers/esm/set.js");
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_helpers_get__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/get */ "./node_modules/@babel/runtime/helpers/esm/get.js");
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime/helpers/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _Utils__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./Utils */ "./src/Utils.js");
/* harmony import */ var _Component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./Component */ "./src/Component.js");








function _callSuper(t, o, e) { return o = (0,_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__["default"])(o), (0,_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], (0,_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__["default"])(t).constructor) : o.apply(t, e)); }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }
function _superPropSet(t, e, o, r, p, f) { return (0,_babel_runtime_helpers_set__WEBPACK_IMPORTED_MODULE_3__["default"])((0,_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__["default"])(f ? t.prototype : t), e, o, r, p); }
function _superPropGet(t, o, e, r) { var p = (0,_babel_runtime_helpers_get__WEBPACK_IMPORTED_MODULE_5__["default"])((0,_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__["default"])(1 & r ? t.prototype : t), o, e); return 2 & r && "function" == typeof p ? function (t) { return p.apply(e, t); } : p; }
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


var ImageContainer = /*#__PURE__*/function (_Component) {
  function ImageContainer(image, x, y, width, height, style, imageLoader) {
    var _this;
    (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, ImageContainer);
    _this = _callSuper(this, ImageContainer, [x, y, width, height, style]);
    (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_7__["default"])(_this, "selectable", false);
    _this.image;
    _this.imgSrc;
    _this.imageLoader = imageLoader;
    if (image instanceof Image) {
      _this.image = image;
      _this.imgSrc = image.src;
    } else {
      _this.imgSrc = image;
    }
    return _this;
  }
  (0,_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_6__["default"])(ImageContainer, _Component);
  return (0,_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(ImageContainer, [{
    key: "draw",
    value: function draw(context) {
      if (this.hidden) return;
      _superPropGet(ImageContainer, "draw", this, 3)([context]);
      var canvas = context.canvas;
      var ctx = canvas.getContext("2d");
      ctx.save();
      if (this.imgSrc != null && this.imageLoader != null) {
        this.loadImage(this.imageLoader);
      }
      if (this.image != null) {
        this.drawImage(ctx);
      }
      ctx.restore();
    }
  }, {
    key: "drawImage",
    value: function drawImage(ctx) {
      _Utils__WEBPACK_IMPORTED_MODULE_8__["default"].drawImage(ctx, this.image, Math.round(this.x), Math.round(this.y), Math.round(this.width), Math.round(this.height));
    }
  }, {
    key: "sizes",
    get: function get() {
      var imgWidth = _superPropGet(ImageContainer, "width", this, 1);
      var imgHeight = _superPropGet(ImageContainer, "height", this, 1);
      if (this.imageLoader) {
        this.loadImage(this.imageLoader);
      }
      if (this.image && (this.image.width > _superPropGet(ImageContainer, "width", this, 1) || this.image.height > _superPropGet(ImageContainer, "height", this, 1))) {
        var aspectRatio = this.image.width / this.image.height;
        imgWidth = Math.floor(_superPropGet(ImageContainer, "width", this, 1) / 1.25);
        imgHeight = Math.floor(imgWidth / aspectRatio);
      }
      return {
        width: imgWidth,
        height: imgHeight
      };
    }
  }, {
    key: "height",
    get: function get() {
      return this.sizes.height;
    },
    set: function set(height) {
      _superPropSet(ImageContainer, "height", height, this, 1, 1);
    }
  }, {
    key: "width",
    get: function get() {
      return this.sizes.width;
    },
    set: function set(width) {
      _superPropSet(ImageContainer, "width", width, this, 1, 1);
    }
  }, {
    key: "loadImage",
    value: function loadImage(imageLoader) {
      this.image = imageLoader.get(this.imgSrc);
    }
  }]);
}(_Component__WEBPACK_IMPORTED_MODULE_9__["default"]);


/***/ },

/***/ "./src/ImageLoader.js"
/*!****************************!*\
  !*** ./src/ImageLoader.js ***!
  \****************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ ImageLoader)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _Utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Utils */ "./src/Utils.js");


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

var ImageLoader = /*#__PURE__*/function () {
  function ImageLoader() {
    (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, ImageLoader);
    this.images = {};
    this.imagesResized = {};
    this.triedLoading = 0;
    this.hasError = false;
    this.nbImagesToLoad = 1;
    this.firstImage = true;
  }
  return (0,_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(ImageLoader, [{
    key: "load",
    value: function load(img, func) {
      var _this = this;
      if (this.firstImage) {
        this.nbImagesToLoad = img.length;
        this.firstImage = false;
      }
      if (img.length > 0) {
        this.loadImage(img[0], function (result) {
          if (result == true) {
            img.shift();
            _this.load(img, func);
          } else {
            _this.hasError = true;
            return func();
          }
        });
      } else {
        return func();
      }
    }
  }, {
    key: "loadImage",
    value: function loadImage(src, func) {
      var _this2 = this;
      this.triedLoading++;
      var image = new Image();
      image.src = src;
      image.onload = function () {
        if (_this2.images != null) {
          _this2.images[src] = image;
        } else {
          return func(false);
        }
        _this2.triedLoading = 0;
        return func(true);
      };
      image.onerror = function () {
        if (_this2.triedLoading >= 5) {
          if (_this2.images != null) {
            _this2.images[src] = image;
          }
          _this2.triedLoading = 0;
          return func(false);
        }
        setTimeout(function () {
          _this2.loadImage(src, func);
        }, 250);
      };
    }
  }, {
    key: "get",
    value: function get(src, width, height) {
      if (this.images != null && Object.prototype.hasOwnProperty.call(this.images, src)) {
        var image = this.images[src];
        if ((width || height) && (image.width != width || image.height != height)) {
          var w = Math.round(width);
          var h = Math.round(height);
          var id = src + "@" + w + "-" + h;
          if (!Object.prototype.hasOwnProperty.call(this.imagesResized, id)) {
            var canvasTmp = document.createElement("canvas");
            var ctx = canvasTmp.getContext("2d");
            canvasTmp.width = w;
            canvasTmp.height = h;
            _Utils__WEBPACK_IMPORTED_MODULE_2__["default"].drawImage(ctx, image, 0, 0, w, h, 0, 0, image.width, image.height);
            this.imagesResized[id] = canvasTmp;
          }
          return this.imagesResized[id];
        } else {
          return image;
        }
      } else {
        return null;
      }
    }
  }, {
    key: "clear",
    value: function clear() {
      this.images = null;
    }
  }]);
}();


/***/ },

/***/ "./src/Input.js"
/*!**********************!*\
  !*** ./src/Input.js ***!
  \**********************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Input)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_helpers_get__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/get */ "./node_modules/@babel/runtime/helpers/esm/get.js");
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _Constants__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./Constants */ "./src/Constants.js");
/* harmony import */ var _Utils__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./Utils */ "./src/Utils.js");
/* harmony import */ var _Box__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./Box */ "./src/Box.js");
/* harmony import */ var _Style__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./Style */ "./src/Style.js");







function _callSuper(t, o, e) { return o = (0,_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(o), (0,_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], (0,_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(t).constructor) : o.apply(t, e)); }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }
function _superPropGet(t, o, e, r) { var p = (0,_babel_runtime_helpers_get__WEBPACK_IMPORTED_MODULE_4__["default"])((0,_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(1 & r ? t.prototype : t), o, e); return 2 & r && "function" == typeof p ? function (t) { return p.apply(e, t); } : p; }
function _classPrivateFieldInitSpec(e, t, a) { _checkPrivateRedeclaration(e, t), t.set(e, a); }
function _checkPrivateRedeclaration(e, t) { if (t.has(e)) throw new TypeError("Cannot initialize the same private elements twice on an object"); }
function _classPrivateFieldGet(s, a) { return s.get(_assertClassBrand(s, a)); }
function _classPrivateFieldSet(s, a, r) { return s.set(_assertClassBrand(s, a), r), r; }
function _assertClassBrand(e, t, n) { if ("function" == typeof e ? e === t : e.has(t)) return arguments.length < 3 ? t : n; throw new TypeError("Private element is not present on this object"); }
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




var _positionStart = /*#__PURE__*/new WeakMap();
var _positionStartClick = /*#__PURE__*/new WeakMap();
var _positionEnd = /*#__PURE__*/new WeakMap();
var Input = /*#__PURE__*/function (_Box) {
  function Input(x, y, width, height, style, defaultText) {
    var _this;
    (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, Input);
    _this = _callSuper(this, Input, [x, y, width, height, style]);
    (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(_this, "selectable", true);
    _classPrivateFieldInitSpec(_this, _positionStart, 0);
    _classPrivateFieldInitSpec(_this, _positionStartClick, 0);
    _classPrivateFieldInitSpec(_this, _positionEnd, 0);
    _this.text = defaultText || "";
    _classPrivateFieldSet(_positionStart, _this, 0);
    _classPrivateFieldSet(_positionEnd, _this, 0);
    _classPrivateFieldSet(_positionStartClick, _this, 0);
    _this.lastInputText = false;
    _this.offsetX = 0;
    _this.lastTime = 0;
    _this.totalTime = 0;
    _this.clickCurrentPosition = null;
    _this.textCache = null;
    _this.input = document.createElement("input");
    _this.input.setAttribute("type", "text");
    _this.input.style.position = "absolute";
    _this.input.style.left = "-9999px";
    _this.input.tabIndex = -1;
    _this.input.value = _this.text;
    _this.input.addEventListener("blur", function () {
      return _this.selected = false;
    });
    _this.input.addEventListener("focus", function () {
      return _this.selected = true;
    });
    _this.input.addEventListener("input", function () {
      _this.totalTime = 0;
      _this.lastInputText = true;
      _this.positionStart = _this.input.selectionStart;
      _this.positionEnd = _this.input.selectionEnd;
    });
    document.body.appendChild(_this.input);
    _this.appendToCanvas = false;
    _this.noticeLogged = false;
    _this.canvasTmp = document.createElement("canvas");
    var moveActionCallback = function moveActionCallback(deltaX, deltaY, position) {
      if (position) {
        var iClick = _this.getLetterClicked(position);
        if (iClick != null) {
          if (iClick > _this.positionStartClick) {
            _this.setSelectionRange(_this.positionStartClick, iClick, "forward");
          } else if (iClick < _this.positionStartClick) {
            _this.setSelectionRange(iClick, _this.positionStartClick, "backward");
          }
        }
      }
    };
    _this.addDownAction(function (position) {
      var iClick = _this.getLetterClicked(position);
      if (iClick != null) {
        _this.positionStartClick = iClick;
        _this.setSelectionRange(iClick, iClick, "forward");
      }
      _this.totalTime = 0;
    });
    _this.addClickAction(function () {
      return _this.click();
    });
    _this.addMoveAction(moveActionCallback);
    _this.addScrollAction(moveActionCallback);
    return _this;
  }
  (0,_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5__["default"])(Input, _Box);
  return (0,_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(Input, [{
    key: "draw",
    value: function draw(context) {
      if (this.hidden) return;
      _superPropGet(Input, "draw", this, 3)([context]);
      var canvas = context.canvas;
      var ctx = canvas.getContext("2d");
      ctx.save();
      if (this.input.selectionEnd != this.positionEnd) this.totalTime = 0;
      if (this.canvas && this.canvas.container && !this.appendToCanvas) {
        document.body.removeChild(this.input);
        this.canvas.container.appendChild(this.input);
        this.appendToCanvas = true;
      } else if (!this.canvas && !this.noticeLogged) {
        console && console.warn && console.warn(_Constants__WEBPACK_IMPORTED_MODULE_7__["default"].String.WARNING_MESSAGE + " " + _Constants__WEBPACK_IMPORTED_MODULE_7__["default"].String.INPUT_FULLSCREEN);
        this.noticeLogged = true;
      }
      if (this.selected && !this.disabled) {
        this.click();
      } else {
        this.blur();
      }
      this.text = this.input.value;
      this.positionStart = this.input.selectionStart;
      this.positionEnd = this.input.selectionEnd;
      var time = performance.now();
      var offsetTime = 0;
      if (this.lastTime > 0) offsetTime = time - this.lastTime;
      this.lastTime = time;
      this.totalTime += offsetTime;
      this.drawBackground(ctx);
      this.drawBorder(ctx);
      this.canvasTmp.width = _Utils__WEBPACK_IMPORTED_MODULE_8__["default"].getCanvasWidth(canvas) * _Constants__WEBPACK_IMPORTED_MODULE_7__["default"].Setting.PIXEL_RATIO;
      this.canvasTmp.height = _Utils__WEBPACK_IMPORTED_MODULE_8__["default"].getCanvasHeight(canvas) * _Constants__WEBPACK_IMPORTED_MODULE_7__["default"].Setting.PIXEL_RATIO;
      this.canvasTmp.style.width = _Utils__WEBPACK_IMPORTED_MODULE_8__["default"].getCanvasWidth(canvas);
      this.canvasTmp.style.height = _Utils__WEBPACK_IMPORTED_MODULE_8__["default"].getCanvasHeight(canvas);
      var ctxText = this.canvasTmp.getContext("2d");
      _Utils__WEBPACK_IMPORTED_MODULE_8__["default"].clear(ctxText);
      ctxText.scale(_Constants__WEBPACK_IMPORTED_MODULE_7__["default"].Setting.PIXEL_RATIO, _Constants__WEBPACK_IMPORTED_MODULE_7__["default"].Setting.PIXEL_RATIO);
      this.updateTextCache(this.x + 5);
      this.autoScroll();
      this.drawText(ctxText, this.x + 5);
      _Utils__WEBPACK_IMPORTED_MODULE_8__["default"].drawImageData(ctx, this.canvasTmp, this.x + this.style.borderSize, this.y + this.style.borderSize, this.width - this.style.borderSize * 2, this.height - this.style.borderSize * 2, (this.x + this.style.borderSize) * _Constants__WEBPACK_IMPORTED_MODULE_7__["default"].Setting.PIXEL_RATIO, (this.y + this.style.borderSize) * _Constants__WEBPACK_IMPORTED_MODULE_7__["default"].Setting.PIXEL_RATIO, (this.width - this.style.borderSize * 2) * _Constants__WEBPACK_IMPORTED_MODULE_7__["default"].Setting.PIXEL_RATIO, (this.height - this.style.borderSize * 2) * _Constants__WEBPACK_IMPORTED_MODULE_7__["default"].Setting.PIXEL_RATIO);
      if ((this.hovered || this.clicked) && this.canvas) this.canvas.cursor = "text";
      if (!this.selected) {
        this.totalTime = 0;
      }
      ctx.restore();
    }
  }, {
    key: "drawText",
    value: function drawText(ctxText, currentX) {
      for (var i = -1; i < this.text.length; i++) {
        if (i > -1) {
          var sizes = this.textCache.letters[i].sizes;
          var xDraw = currentX - this.offsetX;
          var yDraw = this.y + this.style.borderSize;
          if (this.isLetterVisible(i)) {
            // Don't draw the text if it is outside the input (overflow)
            if (this.positionStart != this.positionEnd && i >= this.positionStart && i < this.positionEnd) {
              this.drawHighlight(ctxText, currentX, sizes);
            }
            _Utils__WEBPACK_IMPORTED_MODULE_8__["default"].drawText(ctxText, this.text[i], this.style.fontColor, this.style.fontSize, this.style.fontFamily, "default", "default", xDraw, yDraw, false);
          }
          currentX += sizes["width"] + this.style.spaceBetweenComponents;
        }
        if (this.positionEnd == i + 1 && this.selected) {
          if (this.totalTime <= 500) {
            this.drawCursor(ctxText, currentX);
          } else if (this.totalTime > 1000) {
            this.totalTime = 0;
          }
        }
      }
      return currentX;
    }
  }, {
    key: "drawCursor",
    value: function drawCursor(ctxText, currentX) {
      ctxText.strokeStyle = this.style.borderColor;
      ctxText.lineWidth = 1;
      ctxText.beginPath();
      ctxText.moveTo(currentX - this.offsetX, this.y + 3);
      ctxText.lineTo(currentX - this.offsetX, this.y + this.style.fontSize);
      ctxText.stroke();
    }
  }, {
    key: "drawHighlight",
    value: function drawHighlight(ctxText, currentX, sizes) {
      ctxText.fillStyle = this.style.selectColor;
      ctxText.fillRect(currentX - this.offsetX, this.y + this.style.borderSize, sizes["width"] + 2, this.height - this.style.borderSize * 2 - 1);
    }
  }, {
    key: "updateTextCache",
    value: function updateTextCache(currentX) {
      var ctx = this.canvas ? this.canvas.getContext("2d") : null;
      var parent = this.canvas && this.canvas.scene || this.canvas || ctx && ctx.canvas;
      if (ctx && (_Constants__WEBPACK_IMPORTED_MODULE_7__["default"].Setting.DISABLE_OPTIMIZATIONS || !this.textCache || this.textCache.fontSize != this.style.fontSize || this.textCache.fontFamily != this.style.fontFamily || this.text != this.textCache.text || parent && parent.width != this.textCache.parentWidth)) {
        this.textCache = {
          "fontSize": this.style.fontSize,
          "fontFamily": this.style.fontFamily,
          "text": this.text,
          "parentWidth": parent.width,
          "letters": []
        };
        for (var i = 0; i < this.text.length; i++) {
          var sizes = _Utils__WEBPACK_IMPORTED_MODULE_8__["default"].wrapTextLines(ctx, this.text[i], this.width, this.style.fontSize, this.style.fontFamily, true);
          this.textCache.letters[i] = {
            "text": this.text[i],
            "currentX": currentX,
            "sizes": sizes
          };
          currentX += sizes["width"] + this.style.spaceBetweenComponents;
        }
      }
    }
  }, {
    key: "isClickCurrentPosition",
    value: function isClickCurrentPosition(position, currentX, sizes) {
      if (position.x + this.offsetX <= currentX + sizes["width"] + this.style.spaceBetweenComponents && position.x + this.offsetX >= currentX) {
        return true;
      }
      return false;
    }
  }, {
    key: "isClickAfterPosition",
    value: function isClickAfterPosition(position, currentX, sizes) {
      if (position.x + this.offsetX >= currentX + sizes["width"] + this.style.spaceBetweenComponents) {
        return true;
      }
      return false;
    }
  }, {
    key: "getLetterClicked",
    value: function getLetterClicked(position) {
      if (this.textCache) {
        for (var i = 0; i < this.text.length; i++) {
          var letter = this.textCache.letters[i];
          if (this.isClickCurrentPosition(position, Math.round(letter.currentX), letter.sizes)) {
            return i;
          } else if (i >= this.text.length - 1 && this.isClickAfterPosition(position, Math.round(letter.currentX), letter.sizes)) {
            return i + 1;
          }
        }
      }
    }
  }, {
    key: "cursorPosition",
    get: function get() {
      if (this.textCache) {
        var position = this.positionEnd - 1;
        if (this.positionEnd != this.positionStart && this.positionEnd == this.positionStartClick && this.positionStart < this.positionStartClick) {
          position = this.positionStart - 1;
        }
        if (position < 0) {
          return {
            "currentLetter": this.textCache.letters[0],
            "x": this.x + this.style.borderSize
          };
        }
        var currentLetter = this.textCache.letters[position];
        if (currentLetter) {
          return {
            "currentLetter": currentLetter,
            "x": currentLetter.currentX
          };
        }
      }
      return null;
    }
  }, {
    key: "isLetterVisible",
    value: function isLetterVisible(letterId) {
      if (this.textCache) {
        var letter = this.textCache.letters[letterId];
        if (letter) {
          var xDraw = letter.currentX - this.offsetX;
          if (xDraw >= this.x - letter.sizes["width"] && xDraw <= this.x + this.width) {
            return true;
          }
        }
      }
      return false;
    }
  }, {
    key: "autoScroll",
    value: function autoScroll() {
      if (this.textCache) {
        var cursorPosition = this.cursorPosition;
        var currentLetterSize = cursorPosition.currentLetter ? cursorPosition.currentLetter.sizes["width"] : 0;
        var cursorPositionPos = cursorPosition.x + currentLetterSize + this.style.spaceBetweenComponents;
        var cursorPositionNeg = cursorPosition.x - currentLetterSize - this.style.spaceBetweenComponents;
        var offsetX = Math.max(0, Math.round(cursorPositionPos - this.x - this.width + this.style.borderSize + this.style.spaceBetweenComponents * 2));
        var offsetXNeg = Math.max(0, Math.round(cursorPositionNeg - this.x - this.style.borderSize - this.style.spaceBetweenComponents * 2));
        if (this.offsetX < 0) {
          this.offsetX = 0;
        }
        if (cursorPositionPos - this.offsetX >= this.x + this.width - this.style.borderSize) {
          this.offsetX = offsetX;
          return offsetX;
        } else if (cursorPositionNeg - this.offsetX <= this.x + this.style.borderSize) {
          this.offsetX = offsetXNeg;
          return offsetXNeg;
        }
      }
      return false;
    }
  }, {
    key: "click",
    value: function click() {
      this.input.focus();
    }
  }, {
    key: "blur",
    value: function blur() {
      this.input.blur();
    }
  }, {
    key: "positionStart",
    get: function get() {
      return _classPrivateFieldGet(_positionStart, this);
    },
    set: function set(position) {
      this.input.selectionStart = position;
      _classPrivateFieldSet(_positionStart, this, position);
    }
  }, {
    key: "positionStartClick",
    get: function get() {
      return _classPrivateFieldGet(_positionStartClick, this);
    },
    set: function set(position) {
      _classPrivateFieldSet(_positionStartClick, this, position);
    }
  }, {
    key: "positionEnd",
    get: function get() {
      return _classPrivateFieldGet(_positionEnd, this);
    },
    set: function set(position) {
      this.input.selectionEnd = position;
      _classPrivateFieldSet(_positionEnd, this, position);
    }
  }, {
    key: "setSelectionRange",
    value: function setSelectionRange(start, end, direction) {
      this.input.setSelectionRange(start, end, direction);
      this.positionStart = start;
      this.positionEnd = end;
    }
  }, {
    key: "height",
    get: function get() {
      var borderSize = this.style && this.style.borderSize ? this.style.borderSize : 0;
      return _superPropGet(Input, "height", this, 1) ? _superPropGet(Input, "height", this, 1) : this.style.fontSize + borderSize * 2;
    }
  }, {
    key: "defaultStyle",
    get: function get() {
      return new _Style__WEBPACK_IMPORTED_MODULE_10__["default"]({
        "fontSize": Math.floor(_Constants__WEBPACK_IMPORTED_MODULE_7__["default"].Setting.FONT_SIZE / 1.25),
        "fontFamily": _Constants__WEBPACK_IMPORTED_MODULE_7__["default"].Setting.FONT_FAMILY,
        "fontColor": _Constants__WEBPACK_IMPORTED_MODULE_7__["default"].Setting.INPUT_DEFAULT_FONT_COLOR,
        "backgroundColor": _Constants__WEBPACK_IMPORTED_MODULE_7__["default"].Setting.INPUT_DEFAULT_BACKGROUND_COLOR,
        "borderColor": _Constants__WEBPACK_IMPORTED_MODULE_7__["default"].Setting.INPUT_DEFAULT_BORDER_COLOR,
        "borderColorSelected": _Constants__WEBPACK_IMPORTED_MODULE_7__["default"].Setting.INPUT_DEFAULT_BORDER_COLOR_SELECTED,
        "selectColor": _Constants__WEBPACK_IMPORTED_MODULE_7__["default"].Setting.INPUT_DEFAULT_SELECT_COLOR,
        "spaceBetweenComponents": 1
      });
    }
  }]);
}(_Box__WEBPACK_IMPORTED_MODULE_9__["default"]);


/***/ },

/***/ "./src/Label.js"
/*!**********************!*\
  !*** ./src/Label.js ***!
  \**********************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Label)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_helpers_get__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/get */ "./node_modules/@babel/runtime/helpers/esm/get.js");
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _Constants__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./Constants */ "./src/Constants.js");
/* harmony import */ var _Utils__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./Utils */ "./src/Utils.js");
/* harmony import */ var _Component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./Component */ "./src/Component.js");
/* harmony import */ var _Style__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./Style */ "./src/Style.js");







function _callSuper(t, o, e) { return o = (0,_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(o), (0,_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], (0,_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(t).constructor) : o.apply(t, e)); }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }
function _superPropGet(t, o, e, r) { var p = (0,_babel_runtime_helpers_get__WEBPACK_IMPORTED_MODULE_4__["default"])((0,_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(1 & r ? t.prototype : t), o, e); return 2 & r && "function" == typeof p ? function (t) { return p.apply(e, t); } : p; }
function _classPrivateFieldInitSpec(e, t, a) { _checkPrivateRedeclaration(e, t), t.set(e, a); }
function _checkPrivateRedeclaration(e, t) { if (t.has(e)) throw new TypeError("Cannot initialize the same private elements twice on an object"); }
function _classPrivateFieldSet(s, a, r) { return s.set(_assertClassBrand(s, a), r), r; }
function _classPrivateFieldGet(s, a) { return s.get(_assertClassBrand(s, a)); }
function _assertClassBrand(e, t, n) { if ("function" == typeof e ? e === t : e.has(t)) return arguments.length < 3 ? t : n; throw new TypeError("Private element is not present on this object"); }
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




var _text = /*#__PURE__*/new WeakMap();
var Label = /*#__PURE__*/function (_Component) {
  function Label(text, x, y, style) {
    var _this;
    (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, Label);
    _this = _callSuper(this, Label, [x, y, null, null, style]);
    (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(_this, "selectable", false);
    _classPrivateFieldInitSpec(_this, _text, "");
    _this.text = text;
    _this.sizesCache = null;
    if (!_Constants__WEBPACK_IMPORTED_MODULE_7__["default"].Setting.DISABLE_EXPERIMENTAL_OPTIMIZATIONS) {
      _this.updateSizes();
      _this.addChangeAction(function (componentChanged) {
        _this.updateSizes();
        componentChanged != _this.parent && _this.parent && _this.parent.reactor && _this.parent.reactor.dispatchEvent("onChange", _this);
      });
    }
    return _this;
  }
  (0,_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5__["default"])(Label, _Component);
  return (0,_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(Label, [{
    key: "draw",
    value: function draw(context) {
      if (this.hidden) return;
      _superPropGet(Label, "draw", this, 3)([context]);
      var canvas = context.canvas;
      var ctx = canvas.getContext("2d");
      ctx.save();
      _Utils__WEBPACK_IMPORTED_MODULE_8__["default"].drawText(ctx, this.text, this.style.fontColor, this.style.fontSize, this.style.fontFamily, this.style.alignement, this.style.verticalAlignement, this.x, this.y, this.style.wrap, this.style.bold, this.style.underline, null, this.parent);
      ctx.restore();
    }
  }, {
    key: "text",
    get: function get() {
      return _classPrivateFieldGet(_text, this);
    },
    set: function set(text) {
      if (text != _classPrivateFieldGet(_text, this)) {
        _classPrivateFieldSet(_text, this, text);
        this.reactor.dispatchEvent("onChange", this);
      }
    }
  }, {
    key: "updateSizes",
    value: function updateSizes() {
      var ctx = this.canvas ? this.canvas.getContext("2d") : null;
      var parent = this.canvas && this.canvas.scene || this.canvas || ctx && ctx.canvas || this.parent;
      if (ctx && (_Constants__WEBPACK_IMPORTED_MODULE_7__["default"].Setting.DISABLE_OPTIMIZATIONS || !this.sizesCache || this.sizesCache.fontSize != this.style.fontSize || this.sizesCache.fontFamily != this.style.fontFamily || this.sizesCache.wrap != this.style.wrap || this.text != this.sizesCache.text || parent && parent.width != this.sizesCache.parentWidth || this.sizesCache.value == null)) {
        var sizes = _Utils__WEBPACK_IMPORTED_MODULE_8__["default"].wrapTextLines(ctx, this.text, null, this.style.fontSize, this.style.fontFamily, !this.style.wrap);
        if (parent) {
          this.sizesCache = {
            "fontSize": this.style.fontSize,
            "fontFamily": this.style.fontFamily,
            "wrap": this.style.wrap,
            "text": this.text,
            "parentWidth": parent.width,
            "value": sizes
          };
          parent.reactor.dispatchEvent("onChange", this);
        }
      }
      return this.sizesCache && this.sizesCache.value;
    }
  }, {
    key: "sizes",
    get: function get() {
      if (_Constants__WEBPACK_IMPORTED_MODULE_7__["default"].Setting.DISABLE_EXPERIMENTAL_OPTIMIZATIONS) this.updateSizes();
      return this.sizesCache ? this.sizesCache.value : null;
    }
  }, {
    key: "height",
    get: function get() {
      var sizes = this.sizes;
      return sizes && sizes["height"];
    }
  }, {
    key: "width",
    get: function get() {
      var sizes = this.sizes;
      return sizes && sizes["width"];
    }
  }, {
    key: "defaultStyle",
    get: function get() {
      return new _Style__WEBPACK_IMPORTED_MODULE_10__["default"]({
        "fontColor": _Constants__WEBPACK_IMPORTED_MODULE_7__["default"].Setting.LABEL_DEFAULT_FONT_COLOR,
        "wrap": true,
        "bold": false,
        "underline": false
      });
    }
  }]);
}(_Component__WEBPACK_IMPORTED_MODULE_9__["default"]);


/***/ },

/***/ "./src/Link.js"
/*!*********************!*\
  !*** ./src/Link.js ***!
  \*********************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Link)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_helpers_get__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/get */ "./node_modules/@babel/runtime/helpers/esm/get.js");
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _Constants__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./Constants */ "./src/Constants.js");
/* harmony import */ var _Label__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./Label */ "./src/Label.js");
/* harmony import */ var _Style__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./Style */ "./src/Style.js");







function _callSuper(t, o, e) { return o = (0,_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(o), (0,_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], (0,_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(t).constructor) : o.apply(t, e)); }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }
function _superPropGet(t, o, e, r) { var p = (0,_babel_runtime_helpers_get__WEBPACK_IMPORTED_MODULE_4__["default"])((0,_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(1 & r ? t.prototype : t), o, e); return 2 & r && "function" == typeof p ? function (t) { return p.apply(e, t); } : p; }
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



var Link = /*#__PURE__*/function (_Label) {
  function Link(text, x, y, style) {
    var _this;
    (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, Link);
    _this = _callSuper(this, Link, [text, x, y, style]);
    (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(_this, "selectable", true);
    _this.initialColor = _this.style.fontColor;
    _this.initialUnderline = _this.style.underline;
    return _this;
  }
  (0,_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5__["default"])(Link, _Label);
  return (0,_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(Link, [{
    key: "draw",
    value: function draw(context) {
      if (this.hidden) return;
      _superPropGet(Link, "draw", this, 3)([context]);
      if (this.clicked) {
        this.style.set("underline", false);
        this.style.set("fontColor", this.style.fontColorDown);
        if (!this.movable) this.canvas.cursor = "pointer";
      } else if (this.hovered || this.selected) {
        this.style.set("underline", false);
        this.style.set("fontColor", this.style.fontColorHover);
        if (this.hovered && !this.movable) this.canvas.cursor = "pointer";
      } else {
        this.style.set("underline", this.initialUnderline);
        this.style.set("fontColor", this.initialColor);
      }
      this.init = true;
    }
  }, {
    key: "defaultStyle",
    get: function get() {
      return new _Style__WEBPACK_IMPORTED_MODULE_9__["default"]({
        "fontColor": _Constants__WEBPACK_IMPORTED_MODULE_7__["default"].Setting.LINK_DEFAULT_COLOR,
        "fontColorHover": _Constants__WEBPACK_IMPORTED_MODULE_7__["default"].Setting.LINK_DEFAULT_HOVER_COLOR,
        "fontColorDown": _Constants__WEBPACK_IMPORTED_MODULE_7__["default"].Setting.LINK_DEFAULT_CLICK_COLOR,
        "wrap": true,
        "bold": false,
        "underline": true
      });
    }
  }]);
}(_Label__WEBPACK_IMPORTED_MODULE_8__["default"]);


/***/ },

/***/ "./src/Menu.js"
/*!*********************!*\
  !*** ./src/Menu.js ***!
  \*********************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Menu)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_set__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/set */ "./node_modules/@babel/runtime/helpers/esm/set.js");
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_helpers_get__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/get */ "./node_modules/@babel/runtime/helpers/esm/get.js");
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime/helpers/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _Constants__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./Constants */ "./src/Constants.js");
/* harmony import */ var _Utils__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./Utils */ "./src/Utils.js");
/* harmony import */ var _Component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./Component */ "./src/Component.js");
/* harmony import */ var _Col__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./Col */ "./src/Col.js");
/* harmony import */ var _Style__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./Style */ "./src/Style.js");








function _callSuper(t, o, e) { return o = (0,_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__["default"])(o), (0,_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], (0,_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__["default"])(t).constructor) : o.apply(t, e)); }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }
function _superPropSet(t, e, o, r, p, f) { return (0,_babel_runtime_helpers_set__WEBPACK_IMPORTED_MODULE_3__["default"])((0,_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__["default"])(f ? t.prototype : t), e, o, r, p); }
function _superPropGet(t, o, e, r) { var p = (0,_babel_runtime_helpers_get__WEBPACK_IMPORTED_MODULE_5__["default"])((0,_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__["default"])(1 & r ? t.prototype : t), o, e); return 2 & r && "function" == typeof p ? function (t) { return p.apply(e, t); } : p; }
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





var Menu = /*#__PURE__*/function (_Col) {
  function Menu(style) {
    var _this;
    (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, Menu);
    for (var _len = arguments.length, components = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      components[_key - 1] = arguments[_key];
    }
    _this = _callSuper(this, Menu, [0, 0, null, null, style].concat(components));
    (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_7__["default"])(_this, "selectable", false);
    _this.lastKey = _this.lastKey == undefined ? -1 : _this.lastKey;
    _this.selectedComponent = _this.selectedComponent == undefined ? 0 : _this.selectedComponent;
    _this.disable();
    return _this;
  }
  (0,_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_6__["default"])(Menu, _Col);
  return (0,_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(Menu, [{
    key: "draw",
    value: function draw(context) {
      var _this2 = this;
      if (this.hidden) return;
      var canvas = context.canvas;
      var ctx = canvas.getContext("2d");
      if (this.style.blurBackground) {
        this.drawBlur(ctx);
      }
      ctx.save();
      this.drawComponents(ctx);
      if (!this.init) {
        document.addEventListener("keydown", function (event) {
          if (!_this2.disabled) {
            _this2.lastKey = event.keyCode;
            if (_this2.lastKey == _Constants__WEBPACK_IMPORTED_MODULE_8__["default"].Key.UP || _this2.lastKey == _Constants__WEBPACK_IMPORTED_MODULE_8__["default"].Key.BOTTOM) event.preventDefault();
          }
        });
        this.init = true;
      }
      var keyAction = false;
      if (this.components != null) {
        if (this.lastKey == _Constants__WEBPACK_IMPORTED_MODULE_8__["default"].Key.UP) {
          this.select(this.selectedComponent - 1);
          keyAction = true;
        } else if (this.lastKey == _Constants__WEBPACK_IMPORTED_MODULE_8__["default"].Key.BOTTOM) {
          this.select(this.selectedComponent + 1);
          keyAction = true;
        } else if (this.lastKey == _Constants__WEBPACK_IMPORTED_MODULE_8__["default"].Key.ECHAP) {
          this.disable();
          keyAction = true;
        } else {
          this.components.forEach(function (component, i) {
            if (component.selected) _this2.select(i);
          });
        }
        this.components.forEach(function (component, i) {
          if (component instanceof _Component__WEBPACK_IMPORTED_MODULE_10__["default"]) {
            if (keyAction) {
              if (_this2.selectedComponent == i) {
                if (component.selectable) {
                  component.selected = true;
                }
                if (!_this2.isComponentVisible(component)) {
                  var componentHeight = component.height;
                  var deltaY = _this2.maxHeight - _this2.offsetScrollY - (component.y + componentHeight);
                  _this2.offsetScrollY = -deltaY;
                  _this2.controlScrolling(null, -deltaY);
                }
              } else {
                component.selected = false;
              }
            }
            if (_this2.selectedComponent == i && _this2.lastKey == _Constants__WEBPACK_IMPORTED_MODULE_8__["default"].Key.ENTER && component.reactor && !component.disabled) {
              _this2.lastKey = -1;
              _this2.selectedComponent = 0;
              component.reactor.dispatchEvent("onClick");
              return;
            }
          }
        });
      }
      ctx.restore();
      this.lastKey = -1;
    }
  }, {
    key: "drawComponents",
    value: function drawComponents(ctx) {
      _superPropGet(Menu, "draw", this, 3)([ctx]);
    }
  }, {
    key: "drawBlur",
    value: function drawBlur(ctx) {
      _Utils__WEBPACK_IMPORTED_MODULE_9__["default"].blurCanvas(ctx, 5);
    }
  }, {
    key: "drawBackground",
    value: function drawBackground(ctx) {
      ctx.fillStyle = this.style.backgroundColor;
      ctx.fillRect(this.parent ? this.parent.x : 0, this.parent ? this.parent.y : 0, this.maxWidth, this.maxHeight);
    }
  }, {
    key: "disable",
    value: function disable() {
      _superPropGet(Menu, "disable", this, 3)([]);
      this.components.forEach(function (component) {
        return component && component.disable && component.disable();
      });
    }
  }, {
    key: "enable",
    value: function enable() {
      _superPropGet(Menu, "enable", this, 3)([]);
      this.components.forEach(function (component) {
        return component && component.enable && component.enable();
      });
    }
  }, {
    key: "select",
    value: function select(index) {
      this.selectedComponent = index;
      var selectableComponents = this.components.filter(function (component) {
        return component.selectable;
      });
      if (selectableComponents.length <= 0) return;
      if (this.selectedComponent >= this.components.length) {
        this.selectedComponent = 0;
      } else if (this.selectedComponent < 0) {
        this.selectedComponent = this.components.length - 1;
      }
      if (this.components[this.selectedComponent] && !this.components[this.selectedComponent].selectable) {
        if (this.lastKey == _Constants__WEBPACK_IMPORTED_MODULE_8__["default"].Key.UP) {
          return this.select(this.selectedComponent - 1);
        } else if (this.lastKey == _Constants__WEBPACK_IMPORTED_MODULE_8__["default"].Key.BOTTOM) {
          return this.select(this.selectedComponent + 1);
        }
      }
    }
  }, {
    key: "scrollAreaSizeX",
    get: function get() {
      return this.innerWidth - this.maxWidth;
    }
  }, {
    key: "scrollAreaSizeY",
    get: function get() {
      return this.innerHeight - this.maxHeight;
    }
  }, {
    key: "maxHeight",
    get: function get() {
      return _superPropGet(Menu, "maxHeight", this, 1) || this.canvas && this.canvas.scene && this.canvas.scene.height;
    }
  }, {
    key: "maxWidth",
    get: function get() {
      return this.canvas && this.canvas.scene && this.canvas.scene.width;
    }
  }, {
    key: "minWidth",
    get: function get() {
      return this.parent ? this.parent.width : 0;
    }
  }, {
    key: "defaultStyle",
    get: function get() {
      return new _Style__WEBPACK_IMPORTED_MODULE_12__["default"]({
        "blurBackground": _Constants__WEBPACK_IMPORTED_MODULE_8__["default"].Setting.MENU_DEFAULT_BLUR_BACKGROUND,
        "backgroundColor": _Constants__WEBPACK_IMPORTED_MODULE_8__["default"].Setting.MENU_DEFAULT_BACKGROUND,
        "verticalAlignement": _Constants__WEBPACK_IMPORTED_MODULE_8__["default"].VerticalAlignement.CENTER,
        "scrollXDisabled": true
      });
    }
  }, {
    key: "compareToComponent",
    value: function compareToComponent(otherComponent) {
      return otherComponent.compareToMenu(this);
    }

    // eslint-disable-next-line no-unused-vars
  }, {
    key: "compareToMenu",
    value: function compareToMenu(otherComponent) {
      return 0;
    }

    // eslint-disable-next-line no-unused-vars
  }, {
    key: "compareToTooltip",
    value: function compareToTooltip(otherComponent) {
      return -1;
    }

    // eslint-disable-next-line no-unused-vars
  }, {
    key: "compareToNotification",
    value: function compareToNotification(otherComponent) {
      return 1;
    }
  }, {
    key: "hidden",
    get: function get() {
      return _superPropGet(Menu, "hidden", this, 1) || this.disabled;
    },
    set: function set(hidden) {
      _superPropSet(Menu, "hidden", hidden, this, 1, 1);
      this.disabled = hidden;
    }

    // eslint-disable-next-line no-unused-vars
  }, {
    key: "isInside",
    value: function isInside(pos) {
      return !this.hidden;
    }
  }]);
}(_Col__WEBPACK_IMPORTED_MODULE_11__["default"]);


/***/ },

/***/ "./src/NotificationMessage.js"
/*!************************************!*\
  !*** ./src/NotificationMessage.js ***!
  \************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ NotificationMessage)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_construct__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/construct */ "./node_modules/@babel/runtime/helpers/esm/construct.js");
/* harmony import */ var _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/toConsumableArray */ "./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_get__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/get */ "./node_modules/@babel/runtime/helpers/esm/get.js");
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_helpers_set__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime/helpers/set */ "./node_modules/@babel/runtime/helpers/esm/set.js");
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @babel/runtime/helpers/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _Constants__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./Constants */ "./src/Constants.js");
/* harmony import */ var _Col__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./Col */ "./src/Col.js");
/* harmony import */ var _Button__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./Button */ "./src/Button.js");
/* harmony import */ var _Cross__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./Cross */ "./src/Cross.js");
/* harmony import */ var _Style__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./Style */ "./src/Style.js");










function _callSuper(t, o, e) { return o = (0,_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__["default"])(o), (0,_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__["default"])(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], (0,_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__["default"])(t).constructor) : o.apply(t, e)); }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }
function _superPropGet(t, o, e, r) { var p = (0,_babel_runtime_helpers_get__WEBPACK_IMPORTED_MODULE_5__["default"])((0,_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__["default"])(1 & r ? t.prototype : t), o, e); return 2 & r && "function" == typeof p ? function (t) { return p.apply(e, t); } : p; }
function _superPropSet(t, e, o, r, p, f) { return (0,_babel_runtime_helpers_set__WEBPACK_IMPORTED_MODULE_7__["default"])((0,_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__["default"])(f ? t.prototype : t), e, o, r, p); }
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





var NotificationMessage = /*#__PURE__*/function (_Col) {
  function NotificationMessage(style, delayBeforeClosing, easingFunction) {
    var _this;
    (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2__["default"])(this, NotificationMessage);
    for (var _len = arguments.length, components = new Array(_len > 3 ? _len - 3 : 0), _key = 3; _key < _len; _key++) {
      components[_key - 3] = arguments[_key];
    }
    _this = _callSuper(this, NotificationMessage, [0, 0, null, null, style].concat(components));
    (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_9__["default"])(_this, "selectable", false);
    _this.delayBeforeClosing = delayBeforeClosing == undefined ? 5 : delayBeforeClosing; // second
    _this.timeLastFrame = 0;
    _this.animationTime = 0;
    _this.closed = true;
    _this.closing = false;
    _this.easingFunction = easingFunction;
    _this.closeButton = new _Button__WEBPACK_IMPORTED_MODULE_12__["default"](null, null, null, null, new _Style__WEBPACK_IMPORTED_MODULE_14__["default"]({
      "alignement": _Constants__WEBPACK_IMPORTED_MODULE_10__["default"].Alignement.RIGHT,
      "verticalAlignement": _Constants__WEBPACK_IMPORTED_MODULE_10__["default"].VerticalAlignement.TOP,
      "padding": 10
    }), new _Cross__WEBPACK_IMPORTED_MODULE_13__["default"](null, null, 10, 10));
    _this.add(_this.closeButton);
    return _this;
  }
  (0,_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_8__["default"])(NotificationMessage, _Col);
  return (0,_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_3__["default"])(NotificationMessage, [{
    key: "draw",
    value: function draw(context) {
      var _this2 = this;
      if (this.hidden) return;
      this.closeButton.canvas = this.canvas;
      var canvas = context.canvas;
      var ctx = canvas.getContext("2d");
      ctx.save();
      if (!this.init) {
        this.timeLastFrame = performance.now();
      }
      if (this.closeButton != null) {
        this.closeButton.setClickAction(function () {
          _this2.close();
        });
      }
      var offsetTime = performance.now() - this.timeLastFrame;
      this.timeLastFrame = performance.now();
      if (this.animationTime >= this.delayBeforeClosing * 1000 && !this.closing && !this.closed) {
        this.close();
      }
      if (!this.closing) {
        this.animationTime += offsetTime;
      } else {
        if (this.style.disableAnimation) {
          this.animationTime = -1;
        } else {
          this.animationTime -= offsetTime;
        }
      }
      if (this.animationTime < 0) {
        this.closed = true;
        this.closing = false;
      }
      if (!this.closed) {
        this.drawComponents(ctx);
        if (this.closeButton != null) {
          this.closeButton.y = this.y + this.style.padding / 2;
          this.closeButton.draw(ctx);
        }
        this.enableCloseButton();
      } else {
        this.disableCloseButton();
      }
      ctx.restore();
      this.init = true;
    }
  }, {
    key: "offsetY",
    get: function get() {
      var offsetY = 1;
      if (!this.style.disableAnimation) {
        offsetY = this.animationTime / this.style.animationDuration;
        if (this.easingFunction) {
          offsetY = this.easingFunction(offsetY);
        }
      }
      return offsetY;
    }
  }, {
    key: "y",
    get: function get() {
      var offsetY = this.offsetY;
      if (this.style.verticalAlignement == _Constants__WEBPACK_IMPORTED_MODULE_10__["default"].VerticalAlignement.TOP) {
        return this.height * (offsetY <= 1 ? offsetY : 1) - this.height;
      }
      return this.canvas.scene.height - this.height * (offsetY <= 1 ? offsetY : 1);
    },
    set: function set(y) {
      _superPropSet(NotificationMessage, "y", y, this, 1, 1);
    }
  }, {
    key: "drawComponents",
    value: function drawComponents(ctx) {
      _superPropGet(NotificationMessage, "draw", this, 3)([ctx]);
    }
  }, {
    key: "close",
    value: function close() {
      this.disableCloseButton();
      if (!this.closing) {
        this.closing = true;
        this.animationTime = this.style.animationDuration;
      }
    }
  }, {
    key: "open",
    value: function open() {
      this.timeLastFrame = 0;
      this.animationTime = 0;
      this.init = false;
      this.closed = false;
      this.closing = false;
    }
  }, {
    key: "disableCloseButton",
    value: function disableCloseButton() {
      if (this.closeButton != undefined && this.closeButton != null && this.closeButton instanceof _Button__WEBPACK_IMPORTED_MODULE_12__["default"]) {
        this.closeButton.disable();
      }
    }
  }, {
    key: "enableCloseButton",
    value: function enableCloseButton() {
      if (this.closeButton != undefined && this.closeButton != null && this.closeButton instanceof _Button__WEBPACK_IMPORTED_MODULE_12__["default"]) {
        this.closeButton.enable();
      }
    }
  }, {
    key: "copy",
    value: function copy() {
      return (0,_babel_runtime_helpers_construct__WEBPACK_IMPORTED_MODULE_0__["default"])(NotificationMessage, [this.style.copy(), this.delayBeforeClosing, this.easingFunction].concat((0,_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__["default"])(this.components)));
    }
  }, {
    key: "width",
    get: function get() {
      return this.canvas && this.canvas.scene ? this.canvas.scene.width : null;
    }
  }, {
    key: "height",
    get: function get() {
      return _superPropGet(NotificationMessage, "height", this, 1) - (this.closeButton ? this.closeButton.height : 0);
    }
  }, {
    key: "defaultStyle",
    get: function get() {
      return new _Style__WEBPACK_IMPORTED_MODULE_14__["default"]({
        "alignement": _Constants__WEBPACK_IMPORTED_MODULE_10__["default"].Alignement.CENTER,
        "backgroundColor": _Constants__WEBPACK_IMPORTED_MODULE_10__["default"].Setting.NOTIFICATION_DEFAULT_BACKGROUND,
        "animationDuration": _Constants__WEBPACK_IMPORTED_MODULE_10__["default"].Setting.NOTIFICATION_DEFAULT_ANIMATION_DURATION
      });
    }
  }, {
    key: "hidden",
    get: function get() {
      return _superPropGet(NotificationMessage, "hidden", this, 1) || this.closed;
    },
    set: function set(hidden) {
      _superPropSet(NotificationMessage, "hidden", hidden, this, 1, 1);
      if (hidden) {
        this.forceClose();
      } else {
        this.open();
      }
    }
  }, {
    key: "compareToComponent",
    value: function compareToComponent(otherComponent) {
      return otherComponent.compareToNotification(this);
    }

    // eslint-disable-next-line no-unused-vars
  }, {
    key: "compareToTooltip",
    value: function compareToTooltip(otherComponent) {
      return -1;
    }

    // eslint-disable-next-line no-unused-vars
  }, {
    key: "compareToNotification",
    value: function compareToNotification(otherComponent) {
      return 0;
    }

    // eslint-disable-next-line no-unused-vars
  }, {
    key: "compareToMenu",
    value: function compareToMenu(otherComponent) {
      return -1;
    }
  }]);
}(_Col__WEBPACK_IMPORTED_MODULE_11__["default"]);


/***/ },

/***/ "./src/ProgressBar.js"
/*!****************************!*\
  !*** ./src/ProgressBar.js ***!
  \****************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ ProgressBar)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_helpers_get__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/get */ "./node_modules/@babel/runtime/helpers/esm/get.js");
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _Box__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./Box */ "./src/Box.js");
/* harmony import */ var _Constants__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./Constants */ "./src/Constants.js");
/* harmony import */ var _Style__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./Style */ "./src/Style.js");







function _callSuper(t, o, e) { return o = (0,_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(o), (0,_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], (0,_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(t).constructor) : o.apply(t, e)); }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }
function _superPropGet(t, o, e, r) { var p = (0,_babel_runtime_helpers_get__WEBPACK_IMPORTED_MODULE_4__["default"])((0,_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(1 & r ? t.prototype : t), o, e); return 2 & r && "function" == typeof p ? function (t) { return p.apply(e, t); } : p; }
function _classPrivateFieldInitSpec(e, t, a) { _checkPrivateRedeclaration(e, t), t.set(e, a); }
function _checkPrivateRedeclaration(e, t) { if (t.has(e)) throw new TypeError("Cannot initialize the same private elements twice on an object"); }
function _classPrivateFieldGet(s, a) { return s.get(_assertClassBrand(s, a)); }
function _classPrivateFieldSet(s, a, r) { return s.set(_assertClassBrand(s, a), r), r; }
function _assertClassBrand(e, t, n) { if ("function" == typeof e ? e === t : e.has(t)) return arguments.length < 3 ? t : n; throw new TypeError("Private element is not present on this object"); }
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



var _precPercent = /*#__PURE__*/new WeakMap();
var ProgressBar = /*#__PURE__*/function (_Box) {
  function ProgressBar(x, y, width, height, style, defaultPercent, easingFunction) {
    var _this;
    (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, ProgressBar);
    _this = _callSuper(this, ProgressBar, [x, y, width, height, style]);
    _classPrivateFieldInitSpec(_this, _precPercent, 0);
    (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(_this, "selectable", false);
    _this.percent = defaultPercent == undefined ? 0 : defaultPercent;
    _classPrivateFieldSet(_precPercent, _this, _this.percent);
    _this.easingFunction = easingFunction;
    _this.lastTime = 0;
    _this.totalTime = 0;
    return _this;
  }
  (0,_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5__["default"])(ProgressBar, _Box);
  return (0,_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(ProgressBar, [{
    key: "draw",
    value: function draw(context) {
      if (this.hidden) return;
      _superPropGet(ProgressBar, "draw", this, 3)([context]);
      var canvas = context.canvas;
      var ctx = canvas.getContext("2d");
      ctx.save();
      var time = performance.now();
      var offsetTime = 0;
      if (_classPrivateFieldGet(_precPercent, this) != this.percent && !this.style.disableAnimation) {
        if (this.lastTime > 0) offsetTime = time - this.lastTime;
        this.totalTime += offsetTime;
        if (this.totalTime >= this.style.animationDuration) {
          _classPrivateFieldSet(_precPercent, this, this.percent);
          this.totalTime = 0;
          this.lastTime = 0;
        } else {
          this.lastTime = time;
        }
      } else {
        this.totalTime = 0;
        this.lastTime = 0;
      }
      this.drawBackground(ctx);
      this.drawForeground(ctx, this.widthForeground);
      ctx.restore();
    }
  }, {
    key: "animationPercent",
    get: function get() {
      var animationPercent = _classPrivateFieldGet(_precPercent, this) != this.percent && !this.style.disableAnimation ? this.totalTime / this.style.animationDuration : 1;
      if (this.easingFunction) {
        animationPercent = this.easingFunction(animationPercent);
      }
      return animationPercent;
    }
  }, {
    key: "widthForeground",
    get: function get() {
      return Math.max(0, Math.min(this.width, this.width * (_classPrivateFieldGet(_precPercent, this) + (this.percent - _classPrivateFieldGet(_precPercent, this)) * this.animationPercent)));
    }
  }, {
    key: "drawForeground",
    value: function drawForeground(ctx, widthForeground) {
      ctx.save();
      ctx.fillStyle = this.style.foregroundColor;
      ctx.fillRect(this.x, this.y, widthForeground, this.height);
      ctx.restore();
    }
  }, {
    key: "defaultStyle",
    get: function get() {
      return new _Style__WEBPACK_IMPORTED_MODULE_9__["default"]({
        "backgroundColor": _Constants__WEBPACK_IMPORTED_MODULE_8__["default"].Setting.PROGRESS_DEFAULT_BACKGROUND,
        "foregroundColor": _Constants__WEBPACK_IMPORTED_MODULE_8__["default"].Setting.PROGRESS_DEFAULT_FOREGROUND,
        "animationDuration": _Constants__WEBPACK_IMPORTED_MODULE_8__["default"].Setting.PROGRESS_DEFAULT_ANIMATION_DURATION
      });
    }
  }]);
}(_Box__WEBPACK_IMPORTED_MODULE_7__["default"]);


/***/ },

/***/ "./src/Reactor.js"
/*!************************!*\
  !*** ./src/Reactor.js ***!
  \************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Reactor)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _Event__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Event */ "./src/Event.js");


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

var Reactor = /*#__PURE__*/function () {
  function Reactor() {
    (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, Reactor);
    this.events = {};
  }
  return (0,_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(Reactor, [{
    key: "registerEvent",
    value: function registerEvent(eventName) {
      this.events[eventName] = new _Event__WEBPACK_IMPORTED_MODULE_2__["default"](eventName);
    }
  }, {
    key: "dispatchEvent",
    value: function dispatchEvent(eventName) {
      for (var _len = arguments.length, eventArgs = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
        eventArgs[_key - 1] = arguments[_key];
      }
      if (this.events[eventName]) {
        var callbacks = this.events[eventName].callbacks;
        callbacks.forEach(function (callback) {
          return callback && callback.apply(void 0, eventArgs);
        });
      }
    }
  }, {
    key: "addEventListener",
    value: function addEventListener(eventName, callback) {
      if (this.events[eventName]) this.events[eventName].registerCallback(callback);
    }
  }, {
    key: "removeEventListener",
    value: function removeEventListener(eventName, callback) {
      if (this.events[eventName]) this.events[eventName].removeCallback(callback);
    }
  }, {
    key: "removeAllEventListener",
    value: function removeAllEventListener(eventName) {
      if (this.events[eventName]) this.events[eventName].removeAllCallbacks();
    }
  }]);
}();


/***/ },

/***/ "./src/ReactorCanvas.js"
/*!******************************!*\
  !*** ./src/ReactorCanvas.js ***!
  \******************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ ReactorCanvas)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var _Reactor__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Reactor */ "./src/Reactor.js");





function _callSuper(t, o, e) { return o = (0,_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(o), (0,_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], (0,_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(t).constructor) : o.apply(t, e)); }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }
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

var ReactorCanvas = /*#__PURE__*/function (_Reactor) {
  function ReactorCanvas() {
    (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, ReactorCanvas);
    return _callSuper(this, ReactorCanvas, arguments);
  }
  (0,_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(ReactorCanvas, _Reactor);
  return (0,_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(ReactorCanvas, [{
    key: "registerEvent",
    value: function registerEvent(eventName) {
      if (!this.events[eventName]) this.events[eventName] = [];
    }
  }, {
    key: "dispatchEvent",
    value: function dispatchEvent(eventName) {
      for (var _len = arguments.length, eventArgs = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
        eventArgs[_key - 1] = arguments[_key];
      }
      if (this.events[eventName]) {
        var events = this.events[eventName];
        events.forEach(function (event) {
          return event && event.callback && event.callback.apply(event, eventArgs);
        });
      }
    }
  }, {
    key: "dispatchEventComponent",
    value: function dispatchEventComponent(eventName, component) {
      for (var _len2 = arguments.length, eventArgs = new Array(_len2 > 2 ? _len2 - 2 : 0), _key2 = 2; _key2 < _len2; _key2++) {
        eventArgs[_key2 - 2] = arguments[_key2];
      }
      if (this.events[eventName]) {
        var events = this.events[eventName];
        events.forEach(function (event) {
          return event && event.callback && event.component == component && event.callback.apply(event, eventArgs);
        });
      }
    }
  }, {
    key: "addEventListener",
    value: function addEventListener(eventName, component, callback) {
      if (this.events[eventName]) {
        this.events[eventName].push({
          "component": component,
          "callback": callback
        });
      }
    }
  }, {
    key: "removeEventListener",
    value: function removeEventListener(eventName, callback) {
      if (this.events[eventName]) this.events[eventName].filter(function (event) {
        return event && event.callback != callback;
      });
    }
  }, {
    key: "removeEventListenerComponent",
    value: function removeEventListenerComponent(eventName, component) {
      if (this.events[eventName]) this.events[eventName].filter(function (event) {
        return event && event.component != component;
      });
    }
  }, {
    key: "removeAllEventListener",
    value: function removeAllEventListener() {
      this.events = [];
    }
  }]);
}(_Reactor__WEBPACK_IMPORTED_MODULE_5__["default"]);


/***/ },

/***/ "./src/Row.js"
/*!********************!*\
  !*** ./src/Row.js ***!
  \********************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Row)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_helpers_get__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/get */ "./node_modules/@babel/runtime/helpers/esm/get.js");
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _Component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./Component */ "./src/Component.js");
/* harmony import */ var _Container__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./Container */ "./src/Container.js");
/* harmony import */ var _Utils__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./Utils */ "./src/Utils.js");
/* harmony import */ var _Constants__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./Constants */ "./src/Constants.js");







function _callSuper(t, o, e) { return o = (0,_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(o), (0,_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], (0,_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(t).constructor) : o.apply(t, e)); }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }
function _superPropGet(t, o, e, r) { var p = (0,_babel_runtime_helpers_get__WEBPACK_IMPORTED_MODULE_4__["default"])((0,_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(1 & r ? t.prototype : t), o, e); return 2 & r && "function" == typeof p ? function (t) { return p.apply(e, t); } : p; }
function _classPrivateFieldInitSpec(e, t, a) { _checkPrivateRedeclaration(e, t), t.set(e, a); }
function _checkPrivateRedeclaration(e, t) { if (t.has(e)) throw new TypeError("Cannot initialize the same private elements twice on an object"); }
function _classPrivateFieldGet(s, a) { return s.get(_assertClassBrand(s, a)); }
function _classPrivateFieldSet(s, a, r) { return s.set(_assertClassBrand(s, a), r), r; }
function _assertClassBrand(e, t, n) { if ("function" == typeof e ? e === t : e.has(t)) return arguments.length < 3 ? t : n; throw new TypeError("Private element is not present on this object"); }
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




var _innerHeight = /*#__PURE__*/new WeakMap();
var _innerWidth = /*#__PURE__*/new WeakMap();
var Row = /*#__PURE__*/function (_Container) {
  function Row(x, y, maxWidth, maxHeight, style) {
    var _this;
    (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, Row);
    for (var _len = arguments.length, components = new Array(_len > 5 ? _len - 5 : 0), _key = 5; _key < _len; _key++) {
      components[_key - 5] = arguments[_key];
    }
    _this = _callSuper(this, Row, [x, y, maxWidth, maxHeight, style].concat(components));
    (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(_this, "selectable", false);
    _classPrivateFieldInitSpec(_this, _innerHeight, 0);
    _classPrivateFieldInitSpec(_this, _innerWidth, 0);
    if (!_Constants__WEBPACK_IMPORTED_MODULE_10__["default"].Setting.DISABLE_EXPERIMENTAL_OPTIMIZATIONS) {
      _this.updateInnerWidth();
      _this.updateInnerHeight();
      _this.addChangeAction(function () {
        _this.updateInnerWidth();
        _this.updateInnerHeight();
      });
    }
    return _this;
  }
  (0,_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5__["default"])(Row, _Container);
  return (0,_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(Row, [{
    key: "draw",
    value: function draw(context) {
      var _this2 = this;
      if (this.hidden) return;
      _superPropGet(Row, "draw", this, 3)([context]);
      var canvas = context.canvas;
      var ctx = canvas.getContext("2d");
      ctx.save();
      var ctxTemp = ctx;
      if (this.isCutting) {
        ctxTemp = this.canvasTmp.getContext("2d");
        ctxTemp.scale(_Constants__WEBPACK_IMPORTED_MODULE_10__["default"].Setting.PIXEL_RATIO, _Constants__WEBPACK_IMPORTED_MODULE_10__["default"].Setting.PIXEL_RATIO);
      }
      if (_superPropGet(Row, "components", this, 1) != null) {
        var currentX = this.style.padding;
        _superPropGet(Row, "components", this, 1).forEach(function (component) {
          currentX = _this2.drawComponent(component, currentX, ctxTemp);
        });
      }
      if (this.isCutting) {
        _Utils__WEBPACK_IMPORTED_MODULE_9__["default"].drawImageData(ctx, this.canvasTmp, this.x, this.y, this.width, this.height, this.x * _Constants__WEBPACK_IMPORTED_MODULE_10__["default"].Setting.PIXEL_RATIO, this.y * _Constants__WEBPACK_IMPORTED_MODULE_10__["default"].Setting.PIXEL_RATIO, this.width * _Constants__WEBPACK_IMPORTED_MODULE_10__["default"].Setting.PIXEL_RATIO, this.height * _Constants__WEBPACK_IMPORTED_MODULE_10__["default"].Setting.PIXEL_RATIO);
      }
      _superPropGet(Row, "drawScrollbars", this, 3)([ctx]);
      ctx.restore();
    }
  }, {
    key: "drawComponent",
    value: function drawComponent(component, currentX, ctx) {
      if (component instanceof _Component__WEBPACK_IMPORTED_MODULE_7__["default"]) {
        component.x = currentX - this.offsetScrollX;
        component.y = this.style.padding - this.offsetScrollY;
        if (!component.hidden) {
          if (this.isComponentVisible(component)) {
            component.draw(ctx);
          }
          currentX += component.width + this.style.spaceBetweenComponents;
        }
      }
      return currentX;
    }
  }, {
    key: "updateInnerHeight",
    value: function updateInnerHeight() {
      var maxHeight = 0;
      _superPropGet(Row, "components", this, 1).forEach(function (component) {
        if (component.height > maxHeight && !component.hidden) maxHeight = component.height;
      });
      _classPrivateFieldSet(_innerHeight, this, maxHeight + this.style.padding);
    }
  }, {
    key: "updateInnerWidth",
    value: function updateInnerWidth() {
      var totalWidth = 0;
      _superPropGet(Row, "components", this, 1).forEach(function (component) {
        if (!component.hidden) totalWidth += component.width;
      });
      _classPrivateFieldSet(_innerWidth, this, totalWidth + this.style.spaceBetweenComponents * (_superPropGet(Row, "components", this, 1).length - 1) + this.style.padding);
    }
  }, {
    key: "innerHeight",
    get: function get() {
      if (_Constants__WEBPACK_IMPORTED_MODULE_10__["default"].Setting.DISABLE_EXPERIMENTAL_OPTIMIZATIONS) this.updateInnerHeight();
      return _classPrivateFieldGet(_innerHeight, this);
    }
  }, {
    key: "innerWidth",
    get: function get() {
      if (_Constants__WEBPACK_IMPORTED_MODULE_10__["default"].Setting.DISABLE_EXPERIMENTAL_OPTIMIZATIONS) this.updateInnerWidth();
      return _classPrivateFieldGet(_innerWidth, this);
    }
  }, {
    key: "width",
    get: function get() {
      var width = this.innerWidth || this.parent && this.parent.width;
      var min = this.maxWidth != null ? Math.min(this.maxWidth, width) : null;
      return this.minWidth != null ? Math.max(this.minWidth, min != null ? min : width) : min != null ? min : width;
    }
  }, {
    key: "height",
    get: function get() {
      var height = this.innerHeight || this.parent && this.parent.height;
      var min = this.maxHeight != null ? Math.min(this.maxHeight, height) : null;
      return this.minHeight != null ? Math.max(this.minHeight, min != null ? min : height) : min != null ? min : height;
    }
  }, {
    key: "defaultStyle",
    get: function get() {
      return _superPropGet(Row, "defaultStyle", this, 1);
    }
  }]);
}(_Container__WEBPACK_IMPORTED_MODULE_8__["default"]);


/***/ },

/***/ "./src/Scene.js"
/*!**********************!*\
  !*** ./src/Scene.js ***!
  \**********************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Scene)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_helpers_get__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/get */ "./node_modules/@babel/runtime/helpers/esm/get.js");
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _Container__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./Container */ "./src/Container.js");
/* harmony import */ var _Utils__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./Utils */ "./src/Utils.js");
/* harmony import */ var _Style__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./Style */ "./src/Style.js");
/* harmony import */ var _Constants__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./Constants */ "./src/Constants.js");







function _callSuper(t, o, e) { return o = (0,_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(o), (0,_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], (0,_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(t).constructor) : o.apply(t, e)); }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }
function _superPropGet(t, o, e, r) { var p = (0,_babel_runtime_helpers_get__WEBPACK_IMPORTED_MODULE_4__["default"])((0,_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(1 & r ? t.prototype : t), o, e); return 2 & r && "function" == typeof p ? function (t) { return p.apply(e, t); } : p; }
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




var Scene = /*#__PURE__*/function (_Container) {
  function Scene() {
    var _this2;
    var _this;
    (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, Scene);
    _this = _callSuper(this, Scene);
    (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(_this, "selectable", false);
    (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(_this, "enableEvents", false);
    (_this2 = _this).addAll.apply(_this2, arguments);
    return _this;
  }
  (0,_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5__["default"])(Scene, _Container);
  return (0,_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(Scene, [{
    key: "draw",
    value: function draw(context) {
      if (this.hidden) return;
      _superPropGet(Scene, "draw", this, 3)([context]);
      var canvas = context.canvas;
      var ctx = canvas.getContext("2d");
      ctx.save();
      this.canvas.cursor = "default";
      var ctxTemp = ctx;
      if (this.maxWidth || this.maxHeight) ctxTemp = this.canvasTmp.getContext("2d");
      this.drawComponents(ctxTemp); // Draw sorted components

      if (this.maxWidth || this.maxHeight) _Utils__WEBPACK_IMPORTED_MODULE_8__["default"].drawImageData(ctx, this.canvasTmp, this.x, this.y, this.width, this.height, this.x, this.y, this.width, this.height);
      _superPropGet(Scene, "drawScrollbars", this, 3)([ctx]);
      ctx.restore();
    }
  }, {
    key: "drawComponents",
    value: function drawComponents(ctx) {
      this.components.sort(Scene.compareComponents).forEach(function (component) {
        return component.draw(ctx);
      });
    }
  }, {
    key: "defaultStyle",
    get: function get() {
      return new _Style__WEBPACK_IMPORTED_MODULE_9__["default"]({
        "padding": _Constants__WEBPACK_IMPORTED_MODULE_10__["default"].Setting.DEFAULT_PADDING
      });
    }
  }]);
}(_Container__WEBPACK_IMPORTED_MODULE_7__["default"]);


/***/ },

/***/ "./src/Scrollbar.js"
/*!**************************!*\
  !*** ./src/Scrollbar.js ***!
  \**************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Scrollbar)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_helpers_get__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/get */ "./node_modules/@babel/runtime/helpers/esm/get.js");
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _Constants__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./Constants */ "./src/Constants.js");
/* harmony import */ var _Box__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./Box */ "./src/Box.js");
/* harmony import */ var _Style__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./Style */ "./src/Style.js");







function _callSuper(t, o, e) { return o = (0,_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(o), (0,_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], (0,_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(t).constructor) : o.apply(t, e)); }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }
function _superPropGet(t, o, e, r) { var p = (0,_babel_runtime_helpers_get__WEBPACK_IMPORTED_MODULE_4__["default"])((0,_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(1 & r ? t.prototype : t), o, e); return 2 & r && "function" == typeof p ? function (t) { return p.apply(e, t); } : p; }
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



var Scrollbar = /*#__PURE__*/function (_Box) {
  function Scrollbar(size, style, parent) {
    var _this;
    (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, Scrollbar);
    _this = _callSuper(this, Scrollbar, [null, null, null, null, style]);
    (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(_this, "selectable", true);
    _this.parent = parent;
    _this.size = size || _Constants__WEBPACK_IMPORTED_MODULE_7__["default"].Setting.SCROLLBAR_DEFAULT_SIZE;
    return _this;
  }
  (0,_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5__["default"])(Scrollbar, _Box);
  return (0,_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(Scrollbar, [{
    key: "draw",
    value: function draw(context) {
      if (this.hidden) return;
      if (this.clicked) {
        this.hovered = true;
      }
      _superPropGet(Scrollbar, "draw", this, 3)([context]);
    }
  }, {
    key: "maxWidthParent",
    get: function get() {
      return this.parent ? this.parent.maxWidth - Math.abs(Math.min(0, this.parent.x)) : 0;
    }
  }, {
    key: "maxHeightParent",
    get: function get() {
      return this.parent ? this.parent.maxHeight - Math.abs(Math.min(0, this.parent.y)) : 0;
    }
  }, {
    key: "innerWidthParent",
    get: function get() {
      return this.parent ? this.parent.innerWidth - Math.abs(Math.min(0, this.parent.x)) : 0;
    }
  }, {
    key: "innerHeightParent",
    get: function get() {
      return this.parent ? this.parent.innerHeight - Math.abs(Math.min(0, this.parent.y)) : 0;
    }
  }, {
    key: "maxWidth",
    get: function get() {
      return this.width;
    }
  }, {
    key: "maxHeight",
    get: function get() {
      return this.height;
    }
  }, {
    key: "contentRatioX",
    get: function get() {
      return this.parent ? this.maxWidthParent / this.innerWidthParent : 0;
    }
  }, {
    key: "contentRatioY",
    get: function get() {
      return this.parent ? this.maxHeightParent / this.innerHeightParent : 0;
    }
  }, {
    key: "width",
    get: function get() {
      return this.maxWidthParent * this.contentRatioX;
    }
  }, {
    key: "height",
    get: function get() {
      return this.maxHeightParent * this.contentRatioY;
    }
  }, {
    key: "windowScrollSizeX",
    get: function get() {
      return this.innerWidthParent - this.maxWidthParent;
    }
  }, {
    key: "windowScrollSizeY",
    get: function get() {
      return this.innerHeightParent - this.maxHeightParent;
    }
  }, {
    key: "percentScrollbarX",
    get: function get() {
      return this.parent ? this.parent.offsetScrollX / this.windowScrollSizeX : 0;
    }
  }, {
    key: "percentScrollbarY",
    get: function get() {
      return this.parent ? this.parent.offsetScrollY / this.windowScrollSizeY : 0;
    }
  }, {
    key: "scrollAreaSizeX",
    get: function get() {
      return this.maxWidthParent - this.width;
    }
  }, {
    key: "scrollAreaSizeY",
    get: function get() {
      return this.maxHeightParent - this.height;
    }
  }, {
    key: "x",
    get: function get() {
      return this.parent ? Math.abs(this.parent.x) + this.scrollAreaSizeX * this.percentScrollbarX : 0;
    }
  }, {
    key: "y",
    get: function get() {
      return this.parent ? Math.abs(this.parent.y) + this.scrollAreaSizeY * this.percentScrollbarY : 0;
    }
  }, {
    key: "defaultStyle",
    get: function get() {
      return new _Style__WEBPACK_IMPORTED_MODULE_9__["default"]({
        "backgroundColor": _Constants__WEBPACK_IMPORTED_MODULE_7__["default"].Setting.SCROLLBAR_DEFAULT_BACKGROUND,
        "backgroundColorHover": _Constants__WEBPACK_IMPORTED_MODULE_7__["default"].Setting.SCROLLBAR_DEFAULT_HOVER_BACKGROUND,
        "backgroundColorDown": _Constants__WEBPACK_IMPORTED_MODULE_7__["default"].Setting.SCROLLBAR_DEFAULT_CLICK_BACKGROUND,
        "borderSize": 0
      });
    }
  }, {
    key: "compareToComponent",
    value: function compareToComponent(otherComponent) {
      return otherComponent.compareToScrollbar(this);
    }

    // eslint-disable-next-line no-unused-vars
  }, {
    key: "compareToScrollbar",
    value: function compareToScrollbar(otherComponent) {
      return 0;
    }
  }]);
}(_Box__WEBPACK_IMPORTED_MODULE_8__["default"]);


/***/ },

/***/ "./src/ScrollbarHorizontal.js"
/*!************************************!*\
  !*** ./src/ScrollbarHorizontal.js ***!
  \************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ ScrollbarHorizontal)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_helpers_get__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/get */ "./node_modules/@babel/runtime/helpers/esm/get.js");
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _Scrollbar__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./Scrollbar */ "./src/Scrollbar.js");







function _callSuper(t, o, e) { return o = (0,_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(o), (0,_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], (0,_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(t).constructor) : o.apply(t, e)); }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }
function _superPropGet(t, o, e, r) { var p = (0,_babel_runtime_helpers_get__WEBPACK_IMPORTED_MODULE_4__["default"])((0,_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(1 & r ? t.prototype : t), o, e); return 2 & r && "function" == typeof p ? function (t) { return p.apply(e, t); } : p; }
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

var ScrollbarHorizontal = /*#__PURE__*/function (_Scrollbar) {
  function ScrollbarHorizontal(size, style, parent) {
    var _this;
    (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, ScrollbarHorizontal);
    _this = _callSuper(this, ScrollbarHorizontal, [size, style, parent]);
    (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(_this, "selectable", true);
    _this.addMoveAction(function (deltaX) {
      if (_this.parent) {
        var percentScrollbarNext = Math.abs((_this.parent.x - Math.max(_this.parent.x, _this.x + -deltaX)) / (_this.parent.width - _this.width));
        var newDeltaX = _this.windowScrollSizeX * percentScrollbarNext - _this.parent.offsetScrollX;
        _this.parent.offsetScrollX += newDeltaX;
        if (_this.parent.reactor) {
          _this.parent.reactor.dispatchEvent("onScroll", newDeltaX, 0);
        }
      }
    });
    return _this;
  }
  (0,_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5__["default"])(ScrollbarHorizontal, _Scrollbar);
  return (0,_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(ScrollbarHorizontal, [{
    key: "draw",
    value: function draw(context) {
      if (this.scrollAreaSizeX > 0) {
        _superPropGet(ScrollbarHorizontal, "draw", this, 3)([context]);
      }
    }
  }, {
    key: "height",
    get: function get() {
      return this.size;
    }
  }, {
    key: "y",
    get: function get() {
      return this.parent ? this.parent.y + this.parent.height - this.size : null;
    }
  }]);
}(_Scrollbar__WEBPACK_IMPORTED_MODULE_7__["default"]);


/***/ },

/***/ "./src/ScrollbarVertical.js"
/*!**********************************!*\
  !*** ./src/ScrollbarVertical.js ***!
  \**********************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ ScrollbarVertical)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_helpers_get__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/get */ "./node_modules/@babel/runtime/helpers/esm/get.js");
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _Scrollbar__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./Scrollbar */ "./src/Scrollbar.js");







function _callSuper(t, o, e) { return o = (0,_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(o), (0,_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], (0,_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(t).constructor) : o.apply(t, e)); }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }
function _superPropGet(t, o, e, r) { var p = (0,_babel_runtime_helpers_get__WEBPACK_IMPORTED_MODULE_4__["default"])((0,_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(1 & r ? t.prototype : t), o, e); return 2 & r && "function" == typeof p ? function (t) { return p.apply(e, t); } : p; }
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

var ScrollbarVertical = /*#__PURE__*/function (_Scrollbar) {
  function ScrollbarVertical(size, style, parent) {
    var _this;
    (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, ScrollbarVertical);
    _this = _callSuper(this, ScrollbarVertical, [size, style, parent]);
    (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(_this, "selectable", true);
    _this.addMoveAction(function (deltaX, deltaY) {
      if (_this.parent) {
        var percentScrollbarNext = Math.abs((_this.parent.y - Math.max(_this.parent.y, _this.y + -deltaY)) / (_this.parent.height - _this.height));
        var newDeltaY = _this.windowScrollSizeY * percentScrollbarNext - _this.parent.offsetScrollY;
        _this.parent.offsetScrollY += newDeltaY;
        if (_this.parent.reactor) {
          _this.parent.reactor.dispatchEvent("onScroll", 0, newDeltaY);
        }
      }
    });
    return _this;
  }
  (0,_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5__["default"])(ScrollbarVertical, _Scrollbar);
  return (0,_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(ScrollbarVertical, [{
    key: "draw",
    value: function draw(context) {
      if (this.scrollAreaSizeY > 0) {
        _superPropGet(ScrollbarVertical, "draw", this, 3)([context]);
      }
    }
  }, {
    key: "width",
    get: function get() {
      return this.size;
    }
  }, {
    key: "x",
    get: function get() {
      return this.parent ? this.parent.x + this.parent.width - this.size : 0;
    }
  }]);
}(_Scrollbar__WEBPACK_IMPORTED_MODULE_7__["default"]);


/***/ },

/***/ "./src/Select.js"
/*!***********************!*\
  !*** ./src/Select.js ***!
  \***********************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Select)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/toConsumableArray */ "./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_set__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/set */ "./node_modules/@babel/runtime/helpers/esm/set.js");
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_helpers_get__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime/helpers/get */ "./node_modules/@babel/runtime/helpers/esm/get.js");
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime/helpers/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var _Label__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./Label */ "./src/Label.js");
/* harmony import */ var _Button__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./Button */ "./src/Button.js");
/* harmony import */ var _Triangle__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./Triangle */ "./src/Triangle.js");
/* harmony import */ var _Style__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./Style */ "./src/Style.js");
/* harmony import */ var _Constants__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./Constants */ "./src/Constants.js");








function _callSuper(t, o, e) { return o = (0,_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__["default"])(o), (0,_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__["default"])(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], (0,_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__["default"])(t).constructor) : o.apply(t, e)); }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }
function _superPropSet(t, e, o, r, p, f) { return (0,_babel_runtime_helpers_set__WEBPACK_IMPORTED_MODULE_4__["default"])((0,_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__["default"])(f ? t.prototype : t), e, o, r, p); }
function _superPropGet(t, o, e, r) { var p = (0,_babel_runtime_helpers_get__WEBPACK_IMPORTED_MODULE_6__["default"])((0,_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__["default"])(1 & r ? t.prototype : t), o, e); return 2 & r && "function" == typeof p ? function (t) { return p.apply(e, t); } : p; }
function _classPrivateFieldInitSpec(e, t, a) { _checkPrivateRedeclaration(e, t), t.set(e, a); }
function _checkPrivateRedeclaration(e, t) { if (t.has(e)) throw new TypeError("Cannot initialize the same private elements twice on an object"); }
function _classPrivateFieldGet(s, a) { return s.get(_assertClassBrand(s, a)); }
function _classPrivateFieldSet(s, a, r) { return s.set(_assertClassBrand(s, a), r), r; }
function _assertClassBrand(e, t, n) { if ("function" == typeof e ? e === t : e.has(t)) return arguments.length < 3 ? t : n; throw new TypeError("Private element is not present on this object"); }
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





var _width = /*#__PURE__*/new WeakMap();
var Select = /*#__PURE__*/function (_Button) {
  function Select(x, y, maxWidth, maxHeight, style, optionContainer, defaultOption) {
    var _this;
    (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, Select);
    _this = _callSuper(this, Select, [x, y, maxWidth, maxHeight, style]);
    _classPrivateFieldInitSpec(_this, _width, 0);
    _this.optionContainer = optionContainer;
    if (defaultOption) _this.selectedOption = defaultOption;
    _this.label = new _Label__WEBPACK_IMPORTED_MODULE_8__["default"]("", x, y, style);
    _this.label.style.setAll({
      "alignement": _Constants__WEBPACK_IMPORTED_MODULE_12__["default"].Alignement.LEFT,
      "verticalAlignement": _Constants__WEBPACK_IMPORTED_MODULE_12__["default"].VerticalAlignement.CENTER
    });
    _this.triangle = new _Triangle__WEBPACK_IMPORTED_MODULE_10__["default"](null, null, 8, 8, style);
    _this.triangle.style.setAll({
      "alignement": _Constants__WEBPACK_IMPORTED_MODULE_12__["default"].Alignement.RIGHT,
      "verticalAlignement": _Constants__WEBPACK_IMPORTED_MODULE_12__["default"].VerticalAlignement.CENTER
    });
    _this.addAll(_this.label, _this.triangle);
    _this.addClickAction(function () {
      if (_this.optionContainer) {
        _this.optionContainer.hidden = false;
      }
    });
    if (!_Constants__WEBPACK_IMPORTED_MODULE_12__["default"].Setting.DISABLE_EXPERIMENTAL_OPTIMIZATIONS) {
      _this.updateWidth();
      _this.addChangeAction(function () {
        return _this.updateWidth();
      });
    }
    return _this;
  }
  (0,_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_7__["default"])(Select, _Button);
  return (0,_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2__["default"])(Select, [{
    key: "draw",
    value: function draw(context) {
      if (this.hidden) return;
      if (this.selectedOption && this.selectedOption.label) {
        this.label.text = this.selectedOption.label.text;
      }
      _superPropGet(Select, "draw", this, 3)([context]);
      if (this.optionContainer) {
        this.optionContainer.select = this;
      }
    }
  }, {
    key: "selectedOption",
    get: function get() {
      return this.optionContainer ? this.optionContainer.components[this.optionContainer.selectedOption] : null;
    },
    set: function set(id) {
      if (id != this.optionContainer.selectedOption) {
        this.optionContainer.selectedOption = id;
        this.reactor.dispatchEvent("onChange", this);
      }
    }
  }, {
    key: "text",
    get: function get() {
      return this.selectedOption && this.selectedOption.label ? this.selectedOption.label.text : null;
    }
  }, {
    key: "updateWidth",
    value: function updateWidth() {
      var maxWidth = this.label.width;
      if (this.optionContainer) {
        this.optionContainer.components.forEach(function (component) {
          var label = component.label;
          if (label) {
            if (label.updateSizes) label.updateSizes();
            if (label.width > maxWidth) maxWidth = label.width;
          }
        });
      }
      _classPrivateFieldSet(_width, this, maxWidth + this.style.padding + this.triangle.width + 15);
    }
  }, {
    key: "width",
    get: function get() {
      if (_Constants__WEBPACK_IMPORTED_MODULE_12__["default"].Setting.DISABLE_EXPERIMENTAL_OPTIMIZATIONS) this.updateWidth();
      return _classPrivateFieldGet(_width, this);
    }
  }, {
    key: "allComponents",
    get: function get() {
      var components = [];
      components.push.apply(components, (0,_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_superPropGet(Select, "allComponents", this, 1)));
      return components;
    }
  }, {
    key: "defaultStyle",
    get: function get() {
      return new _Style__WEBPACK_IMPORTED_MODULE_11__["default"]({
        "backgroundColor": _Constants__WEBPACK_IMPORTED_MODULE_12__["default"].Setting.SELECT_DEFAULT_BACKGROUND,
        "backgroundColorHover": _Constants__WEBPACK_IMPORTED_MODULE_12__["default"].Setting.SELECT_DEFAULT_HOVER_BACKGROUND,
        "backgroundColorDown": _Constants__WEBPACK_IMPORTED_MODULE_12__["default"].Setting.SELECT_DEFAULT_CLICK_BACKGROUND,
        "padding": _Constants__WEBPACK_IMPORTED_MODULE_12__["default"].Setting.DEFAULT_PADDING
      });
    }
  }, {
    key: "selected",
    get: function get() {
      return _superPropGet(Select, "selected", this, 1) || this.optionContainer.selected;
    },
    set: function set(selected) {
      _superPropSet(Select, "selected", selected, this, 1, 1);
    }
  }]);
}(_Button__WEBPACK_IMPORTED_MODULE_9__["default"]);


/***/ },

/***/ "./src/SelectOption.js"
/*!*****************************!*\
  !*** ./src/SelectOption.js ***!
  \*****************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ SelectOption)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_helpers_get__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/get */ "./node_modules/@babel/runtime/helpers/esm/get.js");
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var _Button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Button */ "./src/Button.js");
/* harmony import */ var _Constants__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./Constants */ "./src/Constants.js");
/* harmony import */ var _Label__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./Label */ "./src/Label.js");
/* harmony import */ var _Style__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./Style */ "./src/Style.js");






function _callSuper(t, o, e) { return o = (0,_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(o), (0,_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], (0,_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(t).constructor) : o.apply(t, e)); }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }
function _superPropGet(t, o, e, r) { var p = (0,_babel_runtime_helpers_get__WEBPACK_IMPORTED_MODULE_4__["default"])((0,_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(1 & r ? t.prototype : t), o, e); return 2 & r && "function" == typeof p ? function (t) { return p.apply(e, t); } : p; }
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




var SelectOption = /*#__PURE__*/function (_Button) {
  function SelectOption(label, style) {
    var _this;
    (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, SelectOption);
    var defaultLabel = new _Label__WEBPACK_IMPORTED_MODULE_8__["default"]("Option");
    _this = _callSuper(this, SelectOption, [null, null, null, null, style, label || defaultLabel]);
    _this.label = label || defaultLabel;
    return _this;
  }
  (0,_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5__["default"])(SelectOption, _Button);
  return (0,_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(SelectOption, [{
    key: "add",
    value: function add(component) {
      if (component instanceof _Label__WEBPACK_IMPORTED_MODULE_8__["default"]) {
        this.clear();
        _superPropGet(SelectOption, "add", this, 3)([component]);
      }
    }
  }, {
    key: "width",
    get: function get() {
      return this.parent && this.parent.width;
    }
  }, {
    key: "defaultStyle",
    get: function get() {
      return new _Style__WEBPACK_IMPORTED_MODULE_9__["default"]({
        "backgroundColor": _Constants__WEBPACK_IMPORTED_MODULE_7__["default"].Setting.SELECT_DEFAULT_BACKGROUND,
        "backgroundColorHover": _Constants__WEBPACK_IMPORTED_MODULE_7__["default"].Setting.SELECT_DEFAULT_HOVER_BACKGROUND,
        "backgroundColorDown": _Constants__WEBPACK_IMPORTED_MODULE_7__["default"].Setting.SELECT_DEFAULT_CLICK_BACKGROUND,
        "padding": _Constants__WEBPACK_IMPORTED_MODULE_7__["default"].Setting.DEFAULT_PADDING
      });
    }
  }]);
}(_Button__WEBPACK_IMPORTED_MODULE_6__["default"]);


/***/ },

/***/ "./src/SelectOptionsContainer.js"
/*!***************************************!*\
  !*** ./src/SelectOptionsContainer.js ***!
  \***************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ SelectDropdown)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_set__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/set */ "./node_modules/@babel/runtime/helpers/esm/set.js");
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_helpers_get__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/get */ "./node_modules/@babel/runtime/helpers/esm/get.js");
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime/helpers/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _Col__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./Col */ "./src/Col.js");
/* harmony import */ var _Style__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./Style */ "./src/Style.js");
/* harmony import */ var _Constants__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./Constants */ "./src/Constants.js");








function _callSuper(t, o, e) { return o = (0,_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__["default"])(o), (0,_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], (0,_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__["default"])(t).constructor) : o.apply(t, e)); }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }
function _superPropSet(t, e, o, r, p, f) { return (0,_babel_runtime_helpers_set__WEBPACK_IMPORTED_MODULE_3__["default"])((0,_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__["default"])(f ? t.prototype : t), e, o, r, p); }
function _superPropGet(t, o, e, r) { var p = (0,_babel_runtime_helpers_get__WEBPACK_IMPORTED_MODULE_5__["default"])((0,_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__["default"])(1 & r ? t.prototype : t), o, e); return 2 & r && "function" == typeof p ? function (t) { return p.apply(e, t); } : p; }
function _classPrivateFieldInitSpec(e, t, a) { _checkPrivateRedeclaration(e, t), t.set(e, a); }
function _checkPrivateRedeclaration(e, t) { if (t.has(e)) throw new TypeError("Cannot initialize the same private elements twice on an object"); }
function _classPrivateFieldGet(s, a) { return s.get(_assertClassBrand(s, a)); }
function _classPrivateFieldSet(s, a, r) { return s.set(_assertClassBrand(s, a), r), r; }
function _assertClassBrand(e, t, n) { if ("function" == typeof e ? e === t : e.has(t)) return arguments.length < 3 ? t : n; throw new TypeError("Private element is not present on this object"); }
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



var _selectedOption = /*#__PURE__*/new WeakMap();
var SelectDropdown = /*#__PURE__*/function (_Col) {
  function SelectDropdown(maxHeightDropdown, style) {
    var _this;
    (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, SelectDropdown);
    for (var _len = arguments.length, options = new Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
      options[_key - 2] = arguments[_key];
    }
    _this = _callSuper(this, SelectDropdown, [null, null, null, maxHeightDropdown, style].concat(options));
    _classPrivateFieldInitSpec(_this, _selectedOption, void 0);
    (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_7__["default"])(_this, "selectable", false);
    _classPrivateFieldSet(_selectedOption, _this, 0);
    _this.select = null;
    return _this;
  }
  (0,_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_6__["default"])(SelectDropdown, _Col);
  return (0,_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(SelectDropdown, [{
    key: "draw",
    value: function draw(context) {
      _superPropGet(SelectDropdown, "draw", this, 3)([context]);
    }
  }, {
    key: "x",
    get: function get() {
      return this.select && this.select.x;
    }
  }, {
    key: "y",
    get: function get() {
      var selectHeight = this.select && this.select.height;
      var height = this.height;
      var y = this.select && this.select.y;
      if (this.canvas && this.canvas.scene && y + selectHeight + height >= this.canvas.scene.height) {
        return y - height;
      }
      return y + selectHeight;
    }
  }, {
    key: "width",
    get: function get() {
      return this.select && this.select.width;
    }
  }, {
    key: "selectedOption",
    get: function get() {
      return Math.max(0, Math.min(this.components.length - 1, _classPrivateFieldGet(_selectedOption, this)));
    },
    set: function set(id) {
      if (id != _classPrivateFieldGet(_selectedOption, this)) {
        _classPrivateFieldSet(_selectedOption, this, id);
        this.reactor.dispatchEvent("onChange", this);
      }
    }
  }, {
    key: "add",
    value: function add(component) {
      var _this2 = this;
      _superPropGet(SelectDropdown, "add", this, 3)([component]);
      component.addClickAction(function () {
        _classPrivateFieldSet(_selectedOption, _this2, _this2.getComponentId(component));
        _this2.selected = false;
        _this2.hidden = true;
        if (_this2.select) _this2.select.selected = false;
      });
    }
  }, {
    key: "defaultStyle",
    get: function get() {
      return new _Style__WEBPACK_IMPORTED_MODULE_9__["default"]({
        "padding": 0,
        "spaceBetweenComponents": 0,
        "backgroundColor": _Constants__WEBPACK_IMPORTED_MODULE_10__["default"].Setting.SELECT_DEFAULT_BACKGROUND,
        "backgroundColorHover": null,
        "backgroundColorDown": null,
        "scrollXDisabled": false,
        "scrollYDisabled": false
      });
    }
  }, {
    key: "hidden",
    get: function get() {
      return _superPropGet(SelectDropdown, "hidden", this, 1) || this.select && !this.select.selected || !this.select;
    },
    set: function set(hidden) {
      _superPropSet(SelectDropdown, "hidden", hidden, this, 1, 1);
    }
  }]);
}(_Col__WEBPACK_IMPORTED_MODULE_8__["default"]);


/***/ },

/***/ "./src/Style.js"
/*!**********************!*\
  !*** ./src/Style.js ***!
  \**********************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Style)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _Constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Constants */ "./src/Constants.js");



function _classPrivateFieldInitSpec(e, t, a) { _checkPrivateRedeclaration(e, t), t.set(e, a); }
function _checkPrivateRedeclaration(e, t) { if (t.has(e)) throw new TypeError("Cannot initialize the same private elements twice on an object"); }
function _classPrivateFieldGet(s, a) { return s.get(_assertClassBrand(s, a)); }
function _assertClassBrand(e, t, n) { if ("function" == typeof e ? e === t : e.has(t)) return arguments.length < 3 ? t : n; throw new TypeError("Private element is not present on this object"); }
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

var _styles = /*#__PURE__*/new WeakMap();
var Style = /*#__PURE__*/function () {
  function Style(styles) {
    (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, Style);
    _classPrivateFieldInitSpec(this, _styles, {});
    (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2__["default"])(this, "component", void 0);
    this.setAll(styles);
  }
  return (0,_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(Style, [{
    key: "fontColor",
    get: function get() {
      return _classPrivateFieldGet(_styles, this).fontColor;
    }
  }, {
    key: "fontColorHover",
    get: function get() {
      return _classPrivateFieldGet(_styles, this).fontColorHover;
    }
  }, {
    key: "fontColorDown",
    get: function get() {
      return _classPrivateFieldGet(_styles, this).fontColorDown;
    }
  }, {
    key: "fontFamily",
    get: function get() {
      return _classPrivateFieldGet(_styles, this).fontFamily != null ? _classPrivateFieldGet(_styles, this).fontFamily : _Constants__WEBPACK_IMPORTED_MODULE_3__["default"].Setting.FONT_FAMILY;
    }
  }, {
    key: "fontSize",
    get: function get() {
      return _classPrivateFieldGet(_styles, this).fontSize != null ? _classPrivateFieldGet(_styles, this).fontSize : _Constants__WEBPACK_IMPORTED_MODULE_3__["default"].Setting.FONT_SIZE;
    }
  }, {
    key: "bold",
    get: function get() {
      return _classPrivateFieldGet(_styles, this).bold;
    }
  }, {
    key: "underline",
    get: function get() {
      return _classPrivateFieldGet(_styles, this).underline;
    }
  }, {
    key: "wrap",
    get: function get() {
      return _classPrivateFieldGet(_styles, this).wrap;
    }
  }, {
    key: "backgroundColor",
    get: function get() {
      return _classPrivateFieldGet(_styles, this).backgroundColor;
    }
  }, {
    key: "foregroundColor",
    get: function get() {
      return _classPrivateFieldGet(_styles, this).foregroundColor;
    }
  }, {
    key: "backgroundColorHover",
    get: function get() {
      return _classPrivateFieldGet(_styles, this).backgroundColorHover;
    }
  }, {
    key: "backgroundColorDown",
    get: function get() {
      return _classPrivateFieldGet(_styles, this).backgroundColorDown;
    }
  }, {
    key: "borderColor",
    get: function get() {
      return _classPrivateFieldGet(_styles, this).borderColor;
    }
  }, {
    key: "borderColorHover",
    get: function get() {
      return _classPrivateFieldGet(_styles, this).borderColorHover;
    }
  }, {
    key: "borderColorDown",
    get: function get() {
      return _classPrivateFieldGet(_styles, this).borderColorDown;
    }
  }, {
    key: "borderColorSelected",
    get: function get() {
      return _classPrivateFieldGet(_styles, this).borderColorSelected != null ? _classPrivateFieldGet(_styles, this).borderColorSelected : _Constants__WEBPACK_IMPORTED_MODULE_3__["default"].Setting.DEFAULT_BORDER_COLOR_SELECTED;
    }
  }, {
    key: "borderSize",
    get: function get() {
      return _classPrivateFieldGet(_styles, this).borderSize != null ? _classPrivateFieldGet(_styles, this).borderSize : _Constants__WEBPACK_IMPORTED_MODULE_3__["default"].Setting.DEFAULT_BORDER_SIZE;
    }
  }, {
    key: "selectColor",
    get: function get() {
      return _classPrivateFieldGet(_styles, this).selectColor;
    }
  }, {
    key: "alignement",
    get: function get() {
      return _classPrivateFieldGet(_styles, this).alignement;
    }
  }, {
    key: "verticalAlignement",
    get: function get() {
      return _classPrivateFieldGet(_styles, this).verticalAlignement;
    }
  }, {
    key: "disableAnimation",
    get: function get() {
      return _classPrivateFieldGet(_styles, this).disableAnimation;
    }
  }, {
    key: "scrollXDisabled",
    get: function get() {
      return _classPrivateFieldGet(_styles, this).scrollXDisabled;
    }
  }, {
    key: "scrollYDisabled",
    get: function get() {
      return _classPrivateFieldGet(_styles, this).scrollYDisabled;
    }
  }, {
    key: "padding",
    get: function get() {
      return _classPrivateFieldGet(_styles, this).padding != null ? _classPrivateFieldGet(_styles, this).padding : _Constants__WEBPACK_IMPORTED_MODULE_3__["default"].Setting.DEFAULT_PADDING;
    }
  }, {
    key: "spaceBetweenComponents",
    get: function get() {
      return _classPrivateFieldGet(_styles, this).spaceBetweenComponents != null ? _classPrivateFieldGet(_styles, this).spaceBetweenComponents : _Constants__WEBPACK_IMPORTED_MODULE_3__["default"].Setting.DEFAULT_SPACING;
    }
  }, {
    key: "hidden",
    get: function get() {
      return _classPrivateFieldGet(_styles, this).hidden;
    }
  }, {
    key: "blurBackground",
    get: function get() {
      return _classPrivateFieldGet(_styles, this).blurBackground;
    }
  }, {
    key: "lineWidth",
    get: function get() {
      return _classPrivateFieldGet(_styles, this).lineWidth;
    }
  }, {
    key: "animationDuration",
    get: function get() {
      return _classPrivateFieldGet(_styles, this).animationDuration != null ? _classPrivateFieldGet(_styles, this).animationDuration : _Constants__WEBPACK_IMPORTED_MODULE_3__["default"].Setting.DEFAULT_ANIMATION_DURATION;
    }
  }, {
    key: "foreground",
    get: function get() {
      return _classPrivateFieldGet(_styles, this).foreground;
    }
  }, {
    key: "zIndex",
    get: function get() {
      return _classPrivateFieldGet(_styles, this).zIndex != null ? _classPrivateFieldGet(_styles, this).zIndex : 0;
    }
  }, {
    key: "lineCap",
    get: function get() {
      return _classPrivateFieldGet(_styles, this).lineCap;
    }
  }, {
    key: "fill",
    get: function get() {
      return _classPrivateFieldGet(_styles, this).fill;
    }
  }, {
    key: "fillColor",
    get: function get() {
      return _classPrivateFieldGet(_styles, this).fillColor;
    }
  }, {
    key: "color",
    get: function get() {
      return _classPrivateFieldGet(_styles, this).color;
    }
  }, {
    key: "movable",
    get: function get() {
      return _classPrivateFieldGet(_styles, this).movable || false;
    }
  }, {
    key: "set",
    value: function set(style, value) {
      if (_classPrivateFieldGet(_styles, this)[style] != value) {
        _classPrivateFieldGet(_styles, this)[style] = value;
        if (this.component && this.component.reactor) this.component.reactor.dispatchEvent("onChange", this);
      }
    }
  }, {
    key: "setAll",
    value: function setAll(styles) {
      if (styles) {
        for (var style in styles) {
          if (Object.prototype.hasOwnProperty.call(styles, style)) {
            this.set(style, styles[style]);
          }
        }
      }
    }
  }, {
    key: "copy",
    value: function copy() {
      return new Style(_classPrivateFieldGet(_styles, this));
    }
  }, {
    key: "getStyles",
    value: function getStyles() {
      var styles = {};
      for (var style in _classPrivateFieldGet(_styles, this)) {
        if (Object.prototype.hasOwnProperty.call(_classPrivateFieldGet(_styles, this), style)) {
          styles[style] = _classPrivateFieldGet(_styles, this)[style];
        }
      }
      return styles;
    }
  }]);
}();


/***/ },

/***/ "./src/Tooltip.js"
/*!************************!*\
  !*** ./src/Tooltip.js ***!
  \************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Tooltip)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_set__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/set */ "./node_modules/@babel/runtime/helpers/esm/set.js");
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_helpers_get__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/get */ "./node_modules/@babel/runtime/helpers/esm/get.js");
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime/helpers/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _Col__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./Col */ "./src/Col.js");
/* harmony import */ var _Constants__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./Constants */ "./src/Constants.js");
/* harmony import */ var _Style__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./Style */ "./src/Style.js");








function _callSuper(t, o, e) { return o = (0,_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__["default"])(o), (0,_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], (0,_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__["default"])(t).constructor) : o.apply(t, e)); }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }
function _superPropSet(t, e, o, r, p, f) { return (0,_babel_runtime_helpers_set__WEBPACK_IMPORTED_MODULE_3__["default"])((0,_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__["default"])(f ? t.prototype : t), e, o, r, p); }
function _superPropGet(t, o, e, r) { var p = (0,_babel_runtime_helpers_get__WEBPACK_IMPORTED_MODULE_5__["default"])((0,_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__["default"])(1 & r ? t.prototype : t), o, e); return 2 & r && "function" == typeof p ? function (t) { return p.apply(e, t); } : p; }
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



var Tooltip = /*#__PURE__*/function (_Col) {
  function Tooltip(style) {
    var _this;
    (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, Tooltip);
    for (var _len = arguments.length, components = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      components[_key - 1] = arguments[_key];
    }
    _this = _callSuper(this, Tooltip, [null, null, null, null, style].concat(components));
    (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_7__["default"])(_this, "selectable", false);
    _this.disabled = true;
    return _this;
  }
  (0,_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_6__["default"])(Tooltip, _Col);
  return (0,_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(Tooltip, [{
    key: "draw",
    value: function draw(context) {
      if (this.hidden) return;
      var canvas = context.canvas;
      var ctx = canvas.getContext("2d");
      ctx.save();
      if (this.x + this.width + this.style.padding > this.parent.width) {
        this.x -= this.width + this.style.padding;
      }
      if (this.y + this.height + this.style.padding > this.parent.height) {
        this.y -= this.height + this.style.padding;
      }
      _superPropGet(Tooltip, "draw", this, 3)([ctx]);
      ctx.restore();
    }
  }, {
    key: "width",
    get: function get() {
      return _superPropGet(Tooltip, "width", this, 1) + this.style.padding;
    },
    set: function set(width) {
      _superPropSet(Tooltip, "width", width, this, 1, 1);
    }
  }, {
    key: "height",
    get: function get() {
      return _superPropGet(Tooltip, "height", this, 1) + this.style.padding;
    },
    set: function set(height) {
      _superPropSet(Tooltip, "height", height, this, 1, 1);
    }
  }, {
    key: "defaultStyle",
    get: function get() {
      return new _Style__WEBPACK_IMPORTED_MODULE_10__["default"]({
        "backgroundColor": _Constants__WEBPACK_IMPORTED_MODULE_9__["default"].Setting.TOOLTIP_DEFAULT_BACKGROUND
      });
    }
  }, {
    key: "compareToComponent",
    value: function compareToComponent(otherComponent) {
      return otherComponent.compareToTooltip(this);
    }

    // eslint-disable-next-line no-unused-vars
  }, {
    key: "compareToMenu",
    value: function compareToMenu(otherComponent) {
      return 1;
    }

    // eslint-disable-next-line no-unused-vars
  }, {
    key: "compareToTooltip",
    value: function compareToTooltip(otherComponent) {
      return 0;
    }

    // eslint-disable-next-line no-unused-vars
  }, {
    key: "compareToNotification",
    value: function compareToNotification(otherComponent) {
      return 1;
    }
  }, {
    key: "hidden",
    get: function get() {
      return _superPropGet(Tooltip, "hidden", this, 1) || this.disabled;
    },
    set: function set(hidden) {
      _superPropSet(Tooltip, "hidden", hidden, this, 1, 1);
      this.disabled = hidden;
    }
  }]);
}(_Col__WEBPACK_IMPORTED_MODULE_8__["default"]);


/***/ },

/***/ "./src/Triangle.js"
/*!*************************!*\
  !*** ./src/Triangle.js ***!
  \*************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Triangle)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_set__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/set */ "./node_modules/@babel/runtime/helpers/esm/set.js");
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_helpers_get__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/get */ "./node_modules/@babel/runtime/helpers/esm/get.js");
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime/helpers/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _Component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./Component */ "./src/Component.js");
/* harmony import */ var _Constants__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./Constants */ "./src/Constants.js");
/* harmony import */ var _Utils__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./Utils */ "./src/Utils.js");
/* harmony import */ var _Style__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./Style */ "./src/Style.js");








function _callSuper(t, o, e) { return o = (0,_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__["default"])(o), (0,_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], (0,_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__["default"])(t).constructor) : o.apply(t, e)); }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }
function _superPropSet(t, e, o, r, p, f) { return (0,_babel_runtime_helpers_set__WEBPACK_IMPORTED_MODULE_3__["default"])((0,_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__["default"])(f ? t.prototype : t), e, o, r, p); }
function _superPropGet(t, o, e, r) { var p = (0,_babel_runtime_helpers_get__WEBPACK_IMPORTED_MODULE_5__["default"])((0,_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__["default"])(1 & r ? t.prototype : t), o, e); return 2 & r && "function" == typeof p ? function (t) { return p.apply(e, t); } : p; }
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




var Triangle = /*#__PURE__*/function (_Component) {
  function Triangle(x, y, width, height, style) {
    var _this;
    (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, Triangle);
    _this = _callSuper(this, Triangle, [x, y, width, height, style]);
    (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_7__["default"])(_this, "selectable", false);
    return _this;
  }
  (0,_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_6__["default"])(Triangle, _Component);
  return (0,_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(Triangle, [{
    key: "draw",
    value: function draw(context) {
      if (this.hidden) return;
      _superPropGet(Triangle, "draw", this, 3)([context]);
      var canvas = context.canvas;
      var ctx = canvas.getContext("2d");
      _Utils__WEBPACK_IMPORTED_MODULE_10__["default"].drawTriangle(ctx, this.x, this.y, this.width, this.height, this.style.lineWidth, this.style.color, this.style.lineCap, this.style.fill, this.style.fillColor);
      this.init = true;
    }
  }, {
    key: "width",
    get: function get() {
      return _superPropGet(Triangle, "width", this, 1) + this.style.lineWidth;
    },
    set: function set(width) {
      _superPropSet(Triangle, "width", width, this, 1, 1);
    }
  }, {
    key: "height",
    get: function get() {
      return _superPropGet(Triangle, "height", this, 1) + this.style.lineWidth;
    },
    set: function set(height) {
      _superPropSet(Triangle, "height", height, this, 1, 1);
    }
  }, {
    key: "defaultStyle",
    get: function get() {
      return new _Style__WEBPACK_IMPORTED_MODULE_11__["default"]({
        "lineWidth": _Constants__WEBPACK_IMPORTED_MODULE_9__["default"].Setting.TRIANGLE_DEFAULT_LINE_SIZE,
        "color": _Constants__WEBPACK_IMPORTED_MODULE_9__["default"].Setting.TRIANGLE_DEFAULT_COLOR,
        "fill": _Constants__WEBPACK_IMPORTED_MODULE_9__["default"].Setting.TRIANGLE_DEFAULT_FILL,
        "lineCap": _Constants__WEBPACK_IMPORTED_MODULE_9__["default"].Setting.TRIANGLE_DEFAULT_LINE_CAP,
        "fillColor": _Constants__WEBPACK_IMPORTED_MODULE_9__["default"].Setting.TRIANGLE_DEFAULT_FILL_COLOR
      });
    }
  }]);
}(_Component__WEBPACK_IMPORTED_MODULE_8__["default"]);


/***/ },

/***/ "./src/Utils.js"
/*!**********************!*\
  !*** ./src/Utils.js ***!
  \**********************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Constants */ "./src/Constants.js");
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

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  preRenderedFont: {},
  lastKey: -1,
  preRenderFont: function preRenderFont(cars, size, color, fontFamily) {
    cars.push("?");
    cars.push(" ");
    cars.push("A");
    for (var i = 0; i < cars.length; i++) {
      var canvasTmp = document.createElement("canvas");
      var ctxTmp = canvasTmp.getContext("2d");
      ctxTmp.font = size + "px " + fontFamily;
      var width = ctxTmp.measureText(cars[i]).width;
      canvasTmp.width = width;
      canvasTmp.height = size + size / 6;
      ctxTmp.font = size + "px " + fontFamily;
      ctxTmp.fillStyle = color;
      ctxTmp.textBaseline = "top";
      ctxTmp.fillText(cars[i], 0, 0);
      this.preRenderedFont[cars[i]] = canvasTmp;
    }
  },
  drawImage: function drawImage(ctx, image, x, y, width, height, sx, sy, sWidth, sHeight, eraseBelow, degrees) {
    this.drawImageWrapper(ctx, image, x, y, width, height, sx, sy, sWidth, sHeight, eraseBelow, degrees);
  },
  drawImageData: function drawImageData(ctx, imageData, x, y, width, height, sx, sy, sWidth, sHeight, eraseBelow, degrees) {
    this.drawImageWrapper(ctx, imageData, x, y, width, height, sx, sy, sWidth, sHeight, eraseBelow, degrees);
  },
  drawImageWrapper: function drawImageWrapper(ctx, image, x, y, width, height, sx, sy, sWidth, sHeight, eraseBelow, degrees) {
    x = x == undefined || isNaN(x) ? null : Math.round(x);
    y = y == undefined || isNaN(y) ? null : Math.round(y);
    width = width == undefined || isNaN(width) ? null : Math.round(width);
    height = height == undefined || isNaN(height) ? null : Math.round(height);
    sx = sx == undefined || isNaN(sx) ? null : Math.round(sx);
    sy = sy == undefined || isNaN(sy) ? null : Math.round(sy);
    sWidth = sWidth == undefined || isNaN(sWidth) ? null : Math.round(sWidth);
    sHeight = sHeight == undefined || isNaN(sHeight) ? null : Math.round(sHeight);
    eraseBelow = eraseBelow == undefined ? false : eraseBelow;
    degrees = degrees == undefined || isNaN(degrees) ? null : degrees;
    if (degrees != undefined) {
      ctx.save();
      ctx.translate(x + width / 2, y + height / 2);
      ctx.rotate(degrees * Math.PI / 180);
      x = -(width / 2);
      y = -(height / 2);
    }
    if (eraseBelow) {
      ctx.clearRect(x, y, width, height);
    }
    if (ctx != undefined && image != undefined) {
      if (image.width > 0 && image.height > 0) {
        if (sx != undefined && sy != undefined && sWidth != undefined && sHeight != undefined) {
          ctx.drawImage(image, sx, sy, sWidth, sHeight, x, y, width, height);
        } else {
          ctx.drawImage(image, x, y, width, height);
        }
      }
    }
    if (degrees != undefined) {
      ctx.restore();
    }
  },
  drawText: function drawText(ctx, text, color, size, fontFamily, alignement, verticalAlignement, x, y, wrap, bold, underline, textBaseline, parent) {
    if (ctx) {
      ctx.save();
      if (!Array.isArray(color)) {
        ctx.fillStyle = color;
        ctx.strokeStyle = color;
      }
      ctx.font = (bold ? "bold " : "") + size + "px " + fontFamily;
      ctx.textBaseline = textBaseline || "bottom";
      ctx.filter = "none";
      if (wrap) {
        text = this.wrapTextLines(ctx, text)["text"];
      }
      var lines = text.split("\n");
      var maxWidth = 0;
      var xCurrent = Math.round(x);
      var yCurrent = Math.round(y) + size;
      var yFirst = 0;
      if (!y) {
        if (verticalAlignement == _Constants__WEBPACK_IMPORTED_MODULE_0__["default"].VerticalAlignement.CENTER) {
          yCurrent += Math.round((parent && parent.height ? parent.height : this.getCanvasHeight(ctx.canvas)) / 2 - size * lines.length / 2);
        } else if (verticalAlignement == _Constants__WEBPACK_IMPORTED_MODULE_0__["default"].VerticalAlignement.BOTTOM) {
          yCurrent += Math.round((parent && parent.height ? parent.height : this.getCanvasHeight(ctx.canvas)) - size * lines.length / 2 - size / 5);
        }
      }
      for (var i = 0; i < lines.length; i++) {
        var currentText = lines[i];
        var currentWidth = ctx.measureText(currentText).width;
        if (Array.isArray(color)) {
          var colorIndex = i;
          if (colorIndex > color.length - 1) {
            colorIndex = color.length - 1;
          }
          ctx.fillStyle = color[colorIndex];
          ctx.strokeStyle = color[colorIndex];
        }
        if (alignement == _Constants__WEBPACK_IMPORTED_MODULE_0__["default"].Alignement.CENTER) {
          xCurrent = Math.round(parent && parent.x ? parent.x : 0) + Math.round((parent && parent.width ? parent.width : this.getCanvasWidth(ctx.canvas)) / 2 - ctx.measureText(currentText).width / 2);
        } else if (alignement == _Constants__WEBPACK_IMPORTED_MODULE_0__["default"].Alignement.RIGHT) {
          xCurrent = Math.round(parent && parent.x ? parent.x : 0) + Math.round((parent && parent.width ? parent.width : this.getCanvasWidth(ctx.canvas)) - ctx.measureText(currentText).width - (parent && parent.spaceBetweenComponents ? parent.spaceBetweenComponents : _Constants__WEBPACK_IMPORTED_MODULE_0__["default"].Setting.DEFAULT_SPACING));
        }
        ctx.fillText(currentText, xCurrent, yCurrent);
        if (underline) {
          ctx.lineWidth = 1;
          ctx.beginPath();
          ctx.moveTo(xCurrent, yCurrent - 2);
          ctx.lineTo(Math.round(xCurrent + currentWidth), yCurrent - 2);
          ctx.stroke();
        }
        if (currentWidth > maxWidth) maxWidth = currentWidth;
        if (i == 0) yFirst = yCurrent;
        yCurrent += size;
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
  wrapText: function wrapText(text, limit) {
    if (text.length > limit) {
      var p = limit;
      for (; p > 0 && text[p] != " "; p--);
      if (p > 0) {
        var left = text.substring(0, p);
        var right = text.substring(p + 1);
        return left + "\n" + this.wrapText(right, limit);
      }
    }
    return text;
  },
  wrapTextLines: function wrapTextLines(ctx, text, width, fontSize, fontFamily, disableWrap) {
    if (ctx && text) {
      ctx.save();
      ctx.font = Math.round(fontSize) + "px " + fontFamily;
      ctx.imageSmoothingEnabled = false;
      var lines = text.split("\n");
      var newText = "";
      var widthCar = width || ctx.measureText("A").width;
      var nbCarLine = Math.round(this.getCanvasWidth(ctx.canvas) / widthCar);
      var heightTotal = 0;
      var maxWidth = 0;
      for (var i = 0; i < lines.length; i++) {
        var lineWrap = disableWrap ? lines[i] : this.wrapText(lines[i], nbCarLine);
        newText += lineWrap;
        if (i < lines.length - 1) {
          newText += "\n";
        }
        for (var j = 0; j < lineWrap.split("\n").length; j++) {
          var widthText = ctx.measureText(lineWrap.split("\n")[j]).width;
          heightTotal += fontSize;
          if (widthText > maxWidth) maxWidth = widthText;
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
  drawArrow: function drawArrow(ctx, fromx, fromy, tox, toy, lineWidth, headSize, color, lineCap) {
    ctx.save();
    ctx.lineCap = lineCap || _Constants__WEBPACK_IMPORTED_MODULE_0__["default"].Setting.ARROW_DEFAULT_LINE_CAP;
    ctx.lineWidth = lineWidth || _Constants__WEBPACK_IMPORTED_MODULE_0__["default"].Setting.ARROW_DEFAULT_LINE_SIZE;
    ctx.strokeStyle = color || _Constants__WEBPACK_IMPORTED_MODULE_0__["default"].Setting.ARROW_DEFAULT_COLOR;
    ctx.filter = "";
    ctx.beginPath();
    var headlen = headSize || _Constants__WEBPACK_IMPORTED_MODULE_0__["default"].Setting.ARROW_DEFAULT_HEAD_SIZE;
    var dx = tox - fromx;
    var dy = toy - fromy;
    var angle = Math.atan2(dy, dx);
    ctx.moveTo(fromx, fromy);
    ctx.lineTo(tox, toy);
    ctx.moveTo(tox, toy);
    ctx.lineTo(tox - headlen * Math.cos(angle - Math.PI / 6), toy - headlen * Math.sin(angle - Math.PI / 6));
    ctx.moveTo(tox, toy);
    ctx.lineTo(tox - headlen * Math.cos(angle + Math.PI / 6), toy - headlen * Math.sin(angle + Math.PI / 6));
    ctx.stroke();
    ctx.restore();
  },
  drawCross: function drawCross(ctx, x, y, width, height, lineWidth, color, lineCap) {
    ctx.save();
    ctx.lineCap = lineCap || _Constants__WEBPACK_IMPORTED_MODULE_0__["default"].Setting.CROSS_DEFAULT_LINE_CAP;
    ctx.lineWidth = lineWidth || _Constants__WEBPACK_IMPORTED_MODULE_0__["default"].Setting.CROSS_DEFAULT_LINE_SIZE;
    ctx.strokeStyle = color || _Constants__WEBPACK_IMPORTED_MODULE_0__["default"].Setting.CROSS_DEFAULT_COLOR;
    ctx.filter = "";
    ctx.beginPath();
    ctx.moveTo(x, y);
    ctx.lineTo(x + width, y + height);
    ctx.moveTo(x + width, y);
    ctx.lineTo(x, y + height);
    ctx.stroke();
    ctx.restore();
  },
  drawTriangle: function drawTriangle(ctx, x, y, width, height, lineWidth, color, lineCap) {
    var fill = arguments.length > 8 && arguments[8] !== undefined ? arguments[8] : _Constants__WEBPACK_IMPORTED_MODULE_0__["default"].Setting.TRIANGLE_DEFAULT_FILL;
    var fillColor = arguments.length > 9 ? arguments[9] : undefined;
    ctx.save();
    ctx.lineCap = lineCap || _Constants__WEBPACK_IMPORTED_MODULE_0__["default"].Setting.TRIANGLE_DEFAULT_LINE_CAP;
    ctx.lineWidth = lineWidth || _Constants__WEBPACK_IMPORTED_MODULE_0__["default"].Setting.TRIANGLE_DEFAULT_LINE_SIZE;
    ctx.filter = "";
    if (fill) {
      ctx.fillStyle = fillColor || _Constants__WEBPACK_IMPORTED_MODULE_0__["default"].Setting.TRIANGLE_DEFAULT_FILL_COLOR;
      ctx.strokeStyle = color || _Constants__WEBPACK_IMPORTED_MODULE_0__["default"].Setting.TRIANGLE_DEFAULT_COLOR;
    } else {
      ctx.strokeStyle = color || _Constants__WEBPACK_IMPORTED_MODULE_0__["default"].Setting.TRIANGLE_DEFAULT_COLOR;
    }
    ctx.beginPath();
    ctx.moveTo(x, y);
    ctx.lineTo(x + width, y);
    ctx.lineTo(x + width / 2, y + height);
    ctx.lineTo(x, y);
    if (fill) {
      ctx.fill();
      ctx.stroke();
    } else {
      ctx.stroke();
    }
    ctx.restore();
  },
  drawCircle: function drawCircle(ctx, x, y, radius, lineWidth, color, lineCap) {
    var fill = arguments.length > 7 && arguments[7] !== undefined ? arguments[7] : _Constants__WEBPACK_IMPORTED_MODULE_0__["default"].Setting.CIRCLE_DEFAULT_FILL;
    var fillColor = arguments.length > 8 ? arguments[8] : undefined;
    ctx.save();
    ctx.lineCap = lineCap || _Constants__WEBPACK_IMPORTED_MODULE_0__["default"].Setting.CIRCLE_DEFAULT_LINE_CAP;
    ctx.lineWidth = lineWidth || _Constants__WEBPACK_IMPORTED_MODULE_0__["default"].Setting.CIRCLE_DEFAULT_LINE_SIZE;
    ctx.filter = "";
    if (fill) {
      ctx.fillStyle = fillColor || _Constants__WEBPACK_IMPORTED_MODULE_0__["default"].Setting.CIRCLE_DEFAULT_FILL_COLOR;
      ctx.strokeStyle = color || _Constants__WEBPACK_IMPORTED_MODULE_0__["default"].Setting.CIRCLE_DEFAULT_COLOR;
    } else {
      ctx.strokeStyle = color || _Constants__WEBPACK_IMPORTED_MODULE_0__["default"].Setting.CIRCLE_DEFAULT_COLOR;
    }
    ctx.beginPath();
    ctx.arc(x + radius / 2, y + radius / 2, radius / 2, 0, 2 * Math.PI, false);
    if (fill) {
      ctx.fill();
      ctx.stroke();
    } else {
      ctx.stroke();
    }
    ctx.restore();
  },
  clear: function clear(ctx) {
    ctx.clearRect(0, 0, this.getCanvasWidth(ctx.canvas), this.getCanvasHeight(ctx.canvas));
  },
  isFilterHueAvailable: function isFilterHueAvailable() {
    var canvas = document.createElement("canvas");
    canvas.width = 5;
    canvas.height = 5;
    var ctx = canvas.getContext("2d");
    ctx.save();
    ctx.fillStyle = "#FF0000";
    ctx.filter = "hue-rotate(90deg)";
    ctx.fillRect(0, 0, 5, 5);
    var color = ctx.getImageData(0, 0, 1, 1).data;
    ctx.restore();
    if (color[0] == 255 && color[1] == 0 && color[2] == 0) {
      return false;
    }
    return true;
  },
  blurCanvas: function blurCanvas(ctx, length) {
    ctx.save();
    ctx.filter = "blur(" + length + "px)";
    this.drawImageData(ctx, ctx.canvas, 0, 0, this.getCanvasWidth(ctx.canvas), this.getCanvasHeight(ctx.canvas));
    ctx.restore();
  },
  parseNumber: function parseNumber(str) {
    return str ? parseInt(str.match(/\d+/), 10) : 0;
  },
  getFontSize: function getFontSize(ctx) {
    return Math.floor(this.parseNumber(ctx.font) / 1.25);
  },
  getCanvasWidth: function getCanvasWidth(canvas) {
    return this.parseNumber(canvas.style.width) || canvas.width;
  },
  getCanvasHeight: function getCanvasHeight(canvas) {
    return this.parseNumber(canvas.style.height) || canvas.height;
  },
  autoDPI: function autoDPI(canvas) {
    var rect = canvas.getBoundingClientRect();
    canvas.width = rect.width * _Constants__WEBPACK_IMPORTED_MODULE_0__["default"].Setting.PIXEL_RATIO;
    canvas.height = rect.height * _Constants__WEBPACK_IMPORTED_MODULE_0__["default"].Setting.PIXEL_RATIO;
    canvas.style.width = rect.width + "px";
    canvas.style.height = rect.height + "px";
  },
  autoResizeCanvas: function autoResizeCanvas(canvas, container, initialWidth, initialHeight) {
    if (!document.fullscreenElement) {
      if (initialWidth >= document.documentElement.clientWidth * 0.85) {
        var ratio = initialWidth / initialHeight;
        canvas.width = document.documentElement.clientWidth * 0.85;
        canvas.height = canvas.width / ratio;
        if (canvas.style) {
          canvas.style.width = canvas.width + "px";
          canvas.style.height = canvas.height + "px";
        }
      } else {
        canvas.width = initialWidth;
        canvas.height = initialHeight;
        if (canvas.style) {
          canvas.style.width = initialWidth + "px";
          canvas.style.height = initialHeight + "px";
        }
      }
    } else if (document.fullscreenElement == canvas || document.fullscreenElement == container) {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      if (canvas.style) {
        canvas.style.width = window.innerWidth + "px";
        canvas.style.height = window.innerHeight + "px";
      }
      if (container) {
        container.width = window.innerWidth;
        container.height = window.innerHeight;
      }
    } else {
      canvas.width = initialWidth;
      canvas.height = initialHeight;
      if (canvas.style) {
        canvas.style.width = initialWidth + "px";
        canvas.style.height = initialHeight + "px";
      }
    }
  },
  enableAutoResizeCanvas: function enableAutoResizeCanvas(canvas, container, initialWidth, initialHeight) {
    var _this = this;
    if (canvas && canvas.getAttribute("autoresize-canvas-event") != "true") {
      this.autoResizeCanvas(canvas, container, initialWidth, initialHeight);
      window.addEventListener("resize", function () {
        canvas.setAttribute("autoresize-canvas-event", "true");
        _this.autoResizeCanvas(canvas, container, initialWidth, initialHeight);
      });
    }
  },
  autoResizeCanvasFullscreen: function autoResizeCanvasFullscreen(canvas, container) {
    if (document.fullscreenElement == canvas || document.fullscreenElement == container) {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      if (canvas.style) {
        canvas.style.width = window.innerWidth + "px";
        canvas.style.height = window.innerHeight + "px";
      }
      if (container) {
        container.width = window.innerWidth;
        container.height = window.innerHeight;
      }
    }
  },
  enableAutoResizeCanvasFullscreen: function enableAutoResizeCanvasFullscreen(canvas, container) {
    var _this2 = this;
    if (canvas && canvas.getAttribute("autoresizefullscreen-canvas-event") != "true") {
      this.autoResizeCanvasFullscreen(canvas, container);
      window.addEventListener("resize", function () {
        canvas.setAttribute("autoresizefullscreen-canvas-event", "true");
        _this2.autoResizeCanvasFullscreen(canvas, container);
      });
    }
  },
  autoResizeCanvasFullpage: function autoResizeCanvasFullpage(canvas, container) {
    if (canvas && canvas.getAttribute("fullpage-canvas-enable") == "true") {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      if (canvas.style) {
        canvas.style.width = window.innerWidth + "px";
        canvas.style.height = window.innerHeight + "px";
      }
      if (container) {
        container.width = window.innerWidth;
        container.height = window.innerHeight;
        container.style.margin = 0;
        container.style.padding = 0;
      }
      document.body.style.margin = 0;
      document.body.style.padding = 0;
    }
  },
  enableAutoResizeCanvasFullpage: function enableAutoResizeCanvasFullpage(canvas, container) {
    var _this3 = this;
    if (canvas && canvas.getAttribute("autoresizefullpage-canvas-event") != "true") {
      this.autoResizeCanvasFullpage(canvas, container);
      window.addEventListener("resize", function () {
        canvas.setAttribute("autoresizefullpage-canvas-event", "true");
        _this3.autoResizeCanvasFullpage(canvas, container);
      });
    }
  },
  toggleFullscreen: function toggleFullscreen(canvas, container) {
    if (canvas) {
      var initialWidth = canvas.width;
      var initialHeight = canvas.height;
      if (container) {
        container.width = initialWidth;
        container.height = initialHeight;
      }
      if (!document.fullscreenElement) {
        if ((container || canvas).requestFullscreen) {
          (container || canvas).requestFullscreen();
        } else if ((container || canvas).mozRequestFullScreen) {
          (container || canvas).mozRequestFullScreen();
        } else if ((container || canvas).webkitRequestFullscreen) {
          (container || canvas).webkitRequestFullscreen();
        } else if ((container || canvas).msRequestFullscreen) {
          (container || canvas).msRequestFullscreen();
        } else if ((container || canvas).oRequestFullscreen) {
          (container || canvas).oRequestFullscreen();
        }
      } else {
        if (document.exitFullscreen) {
          document.exitFullscreen();
        }
      }
      this.enableAutoResizeCanvasFullscreen(canvas, container);
      if (canvas.getAttribute("fullscreenchange-canvas-event") != "true") {
        canvas.setAttribute("fullscreenchange-canvas-event", "true");
        var onfullscreenchange = function onfullscreenchange() {
          if (document.fullscreenElement != (container || canvas)) {
            canvas.width = initialWidth;
            canvas.height = initialHeight;
            if (container) {
              container.width = initialWidth;
              container.height = initialHeight;
            }
          }
        };
        if (typeof document.onfullscreenchange !== "undefined") {
          document.onfullscreenchange = onfullscreenchange;
        } else if (typeof document.onmsfullscreenchange !== "undefined") {
          document.onmsfullscreenchange = onfullscreenchange;
        } else if (typeof document.onmozfullscreenchange !== "undefined") {
          document.onmozfullscreenchange = onfullscreenchange;
        } else if (typeof document.onwebkitfullscreenchange !== "undefined") {
          document.onwebkitfullscreenchange = onfullscreenchange;
        } else if (typeof document.onokitfullscreenchange !== "undefined") {
          document.onofullscreenchange = onfullscreenchange;
        }
      }
    }
  },
  toggleFullpage: function toggleFullpage(canvas, container) {
    if (canvas) {
      var initialWidth = canvas.width;
      var initialHeight = canvas.height;
      if (container) {
        container.width = initialWidth;
        container.height = initialHeight;
      }
      if (!canvas.getAttribute("fullpage-canvas-enable") || canvas.getAttribute("fullpage-canvas-enable") == "false") {
        canvas.setAttribute("fullpage-canvas-enable", "true");
      } else {
        canvas.setAttribute("fullpage-canvas-enable", "false");
      }
      this.enableAutoResizeCanvasFullpage(canvas, container);
    }
  },
  getMousePos: function getMousePos(canvas, event) {
    var rect = canvas.getBoundingClientRect();
    return {
      x: event.clientX - rect.left,
      y: event.clientY - rect.top
    };
  }
});

/***/ },

/***/ "./node_modules/@babel/runtime/helpers/esm/arrayLikeToArray.js"
/*!*********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/arrayLikeToArray.js ***!
  \*********************************************************************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _arrayLikeToArray)
/* harmony export */ });
function _arrayLikeToArray(r, a) {
  (null == a || a > r.length) && (a = r.length);
  for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e];
  return n;
}


/***/ },

/***/ "./node_modules/@babel/runtime/helpers/esm/arrayWithoutHoles.js"
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/arrayWithoutHoles.js ***!
  \**********************************************************************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _arrayWithoutHoles)
/* harmony export */ });
/* harmony import */ var _arrayLikeToArray_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./arrayLikeToArray.js */ "./node_modules/@babel/runtime/helpers/esm/arrayLikeToArray.js");

function _arrayWithoutHoles(r) {
  if (Array.isArray(r)) return (0,_arrayLikeToArray_js__WEBPACK_IMPORTED_MODULE_0__["default"])(r);
}


/***/ },

/***/ "./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js"
/*!**************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js ***!
  \**************************************************************************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _assertThisInitialized)
/* harmony export */ });
function _assertThisInitialized(e) {
  if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}


/***/ },

/***/ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js"
/*!*******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js ***!
  \*******************************************************************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _classCallCheck)
/* harmony export */ });
function _classCallCheck(a, n) {
  if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function");
}


/***/ },

/***/ "./node_modules/@babel/runtime/helpers/esm/construct.js"
/*!**************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/construct.js ***!
  \**************************************************************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _construct)
/* harmony export */ });
/* harmony import */ var _isNativeReflectConstruct_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./isNativeReflectConstruct.js */ "./node_modules/@babel/runtime/helpers/esm/isNativeReflectConstruct.js");
/* harmony import */ var _setPrototypeOf_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./setPrototypeOf.js */ "./node_modules/@babel/runtime/helpers/esm/setPrototypeOf.js");


function _construct(t, e, r) {
  if ((0,_isNativeReflectConstruct_js__WEBPACK_IMPORTED_MODULE_0__["default"])()) return Reflect.construct.apply(null, arguments);
  var o = [null];
  o.push.apply(o, e);
  var p = new (t.bind.apply(t, o))();
  return r && (0,_setPrototypeOf_js__WEBPACK_IMPORTED_MODULE_1__["default"])(p, r.prototype), p;
}


/***/ },

/***/ "./node_modules/@babel/runtime/helpers/esm/createClass.js"
/*!****************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/createClass.js ***!
  \****************************************************************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _createClass)
/* harmony export */ });
/* harmony import */ var _toPropertyKey_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./toPropertyKey.js */ "./node_modules/@babel/runtime/helpers/esm/toPropertyKey.js");

function _defineProperties(e, r) {
  for (var t = 0; t < r.length; t++) {
    var o = r[t];
    o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, (0,_toPropertyKey_js__WEBPACK_IMPORTED_MODULE_0__["default"])(o.key), o);
  }
}
function _createClass(e, r, t) {
  return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", {
    writable: !1
  }), e;
}


/***/ },

/***/ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js"
/*!*******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/defineProperty.js ***!
  \*******************************************************************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _defineProperty)
/* harmony export */ });
/* harmony import */ var _toPropertyKey_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./toPropertyKey.js */ "./node_modules/@babel/runtime/helpers/esm/toPropertyKey.js");

function _defineProperty(e, r, t) {
  return (r = (0,_toPropertyKey_js__WEBPACK_IMPORTED_MODULE_0__["default"])(r)) in e ? Object.defineProperty(e, r, {
    value: t,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[r] = t, e;
}


/***/ },

/***/ "./node_modules/@babel/runtime/helpers/esm/get.js"
/*!********************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/get.js ***!
  \********************************************************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _get)
/* harmony export */ });
/* harmony import */ var _superPropBase_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./superPropBase.js */ "./node_modules/@babel/runtime/helpers/esm/superPropBase.js");

function _get() {
  return _get = "undefined" != typeof Reflect && Reflect.get ? Reflect.get.bind() : function (e, t, r) {
    var p = (0,_superPropBase_js__WEBPACK_IMPORTED_MODULE_0__["default"])(e, t);
    if (p) {
      var n = Object.getOwnPropertyDescriptor(p, t);
      return n.get ? n.get.call(arguments.length < 3 ? e : r) : n.value;
    }
  }, _get.apply(null, arguments);
}


/***/ },

/***/ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js"
/*!*******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js ***!
  \*******************************************************************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _getPrototypeOf)
/* harmony export */ });
function _getPrototypeOf(t) {
  return _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function (t) {
    return t.__proto__ || Object.getPrototypeOf(t);
  }, _getPrototypeOf(t);
}


/***/ },

/***/ "./node_modules/@babel/runtime/helpers/esm/inherits.js"
/*!*************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/inherits.js ***!
  \*************************************************************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _inherits)
/* harmony export */ });
/* harmony import */ var _setPrototypeOf_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./setPrototypeOf.js */ "./node_modules/@babel/runtime/helpers/esm/setPrototypeOf.js");

function _inherits(t, e) {
  if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
  t.prototype = Object.create(e && e.prototype, {
    constructor: {
      value: t,
      writable: !0,
      configurable: !0
    }
  }), Object.defineProperty(t, "prototype", {
    writable: !1
  }), e && (0,_setPrototypeOf_js__WEBPACK_IMPORTED_MODULE_0__["default"])(t, e);
}


/***/ },

/***/ "./node_modules/@babel/runtime/helpers/esm/isNativeReflectConstruct.js"
/*!*****************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/isNativeReflectConstruct.js ***!
  \*****************************************************************************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _isNativeReflectConstruct)
/* harmony export */ });
function _isNativeReflectConstruct() {
  try {
    var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
  } catch (t) {}
  return (_isNativeReflectConstruct = function _isNativeReflectConstruct() {
    return !!t;
  })();
}


/***/ },

/***/ "./node_modules/@babel/runtime/helpers/esm/iterableToArray.js"
/*!********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/iterableToArray.js ***!
  \********************************************************************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _iterableToArray)
/* harmony export */ });
function _iterableToArray(r) {
  if ("undefined" != typeof Symbol && null != r[Symbol.iterator] || null != r["@@iterator"]) return Array.from(r);
}


/***/ },

/***/ "./node_modules/@babel/runtime/helpers/esm/nonIterableSpread.js"
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/nonIterableSpread.js ***!
  \**********************************************************************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _nonIterableSpread)
/* harmony export */ });
function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}


/***/ },

/***/ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js"
/*!******************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js ***!
  \******************************************************************************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _possibleConstructorReturn)
/* harmony export */ });
/* harmony import */ var _typeof_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./typeof.js */ "./node_modules/@babel/runtime/helpers/esm/typeof.js");
/* harmony import */ var _assertThisInitialized_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./assertThisInitialized.js */ "./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js");


function _possibleConstructorReturn(t, e) {
  if (e && ("object" == (0,_typeof_js__WEBPACK_IMPORTED_MODULE_0__["default"])(e) || "function" == typeof e)) return e;
  if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined");
  return (0,_assertThisInitialized_js__WEBPACK_IMPORTED_MODULE_1__["default"])(t);
}


/***/ },

/***/ "./node_modules/@babel/runtime/helpers/esm/set.js"
/*!********************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/set.js ***!
  \********************************************************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _set)
/* harmony export */ });
/* harmony import */ var _superPropBase_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./superPropBase.js */ "./node_modules/@babel/runtime/helpers/esm/superPropBase.js");
/* harmony import */ var _defineProperty_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./defineProperty.js */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");


function set(e, r, t, o) {
  return set = "undefined" != typeof Reflect && Reflect.set ? Reflect.set : function (e, r, t, o) {
    var f,
      i = (0,_superPropBase_js__WEBPACK_IMPORTED_MODULE_0__["default"])(e, r);
    if (i) {
      if ((f = Object.getOwnPropertyDescriptor(i, r)).set) return f.set.call(o, t), !0;
      if (!f.writable) return !1;
    }
    if (f = Object.getOwnPropertyDescriptor(o, r)) {
      if (!f.writable) return !1;
      f.value = t, Object.defineProperty(o, r, f);
    } else (0,_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__["default"])(o, r, t);
    return !0;
  }, set(e, r, t, o);
}
function _set(e, r, t, o, f) {
  if (!set(e, r, t, o || e) && f) throw new TypeError("failed to set property");
  return t;
}


/***/ },

/***/ "./node_modules/@babel/runtime/helpers/esm/setPrototypeOf.js"
/*!*******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/setPrototypeOf.js ***!
  \*******************************************************************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _setPrototypeOf)
/* harmony export */ });
function _setPrototypeOf(t, e) {
  return _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (t, e) {
    return t.__proto__ = e, t;
  }, _setPrototypeOf(t, e);
}


/***/ },

/***/ "./node_modules/@babel/runtime/helpers/esm/superPropBase.js"
/*!******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/superPropBase.js ***!
  \******************************************************************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _superPropBase)
/* harmony export */ });
/* harmony import */ var _getPrototypeOf_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./getPrototypeOf.js */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");

function _superPropBase(t, o) {
  for (; !{}.hasOwnProperty.call(t, o) && null !== (t = (0,_getPrototypeOf_js__WEBPACK_IMPORTED_MODULE_0__["default"])(t)););
  return t;
}


/***/ },

/***/ "./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js"
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js ***!
  \**********************************************************************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _toConsumableArray)
/* harmony export */ });
/* harmony import */ var _arrayWithoutHoles_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./arrayWithoutHoles.js */ "./node_modules/@babel/runtime/helpers/esm/arrayWithoutHoles.js");
/* harmony import */ var _iterableToArray_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./iterableToArray.js */ "./node_modules/@babel/runtime/helpers/esm/iterableToArray.js");
/* harmony import */ var _unsupportedIterableToArray_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./unsupportedIterableToArray.js */ "./node_modules/@babel/runtime/helpers/esm/unsupportedIterableToArray.js");
/* harmony import */ var _nonIterableSpread_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./nonIterableSpread.js */ "./node_modules/@babel/runtime/helpers/esm/nonIterableSpread.js");




function _toConsumableArray(r) {
  return (0,_arrayWithoutHoles_js__WEBPACK_IMPORTED_MODULE_0__["default"])(r) || (0,_iterableToArray_js__WEBPACK_IMPORTED_MODULE_1__["default"])(r) || (0,_unsupportedIterableToArray_js__WEBPACK_IMPORTED_MODULE_2__["default"])(r) || (0,_nonIterableSpread_js__WEBPACK_IMPORTED_MODULE_3__["default"])();
}


/***/ },

/***/ "./node_modules/@babel/runtime/helpers/esm/toPrimitive.js"
/*!****************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/toPrimitive.js ***!
  \****************************************************************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ toPrimitive)
/* harmony export */ });
/* harmony import */ var _typeof_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./typeof.js */ "./node_modules/@babel/runtime/helpers/esm/typeof.js");

function toPrimitive(t, r) {
  if ("object" != (0,_typeof_js__WEBPACK_IMPORTED_MODULE_0__["default"])(t) || !t) return t;
  var e = t[Symbol.toPrimitive];
  if (void 0 !== e) {
    var i = e.call(t, r || "default");
    if ("object" != (0,_typeof_js__WEBPACK_IMPORTED_MODULE_0__["default"])(i)) return i;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return ("string" === r ? String : Number)(t);
}


/***/ },

/***/ "./node_modules/@babel/runtime/helpers/esm/toPropertyKey.js"
/*!******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/toPropertyKey.js ***!
  \******************************************************************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ toPropertyKey)
/* harmony export */ });
/* harmony import */ var _typeof_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./typeof.js */ "./node_modules/@babel/runtime/helpers/esm/typeof.js");
/* harmony import */ var _toPrimitive_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./toPrimitive.js */ "./node_modules/@babel/runtime/helpers/esm/toPrimitive.js");


function toPropertyKey(t) {
  var i = (0,_toPrimitive_js__WEBPACK_IMPORTED_MODULE_1__["default"])(t, "string");
  return "symbol" == (0,_typeof_js__WEBPACK_IMPORTED_MODULE_0__["default"])(i) ? i : i + "";
}


/***/ },

/***/ "./node_modules/@babel/runtime/helpers/esm/typeof.js"
/*!***********************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/typeof.js ***!
  \***********************************************************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _typeof)
/* harmony export */ });
function _typeof(o) {
  "@babel/helpers - typeof";

  return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) {
    return typeof o;
  } : function (o) {
    return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o;
  }, _typeof(o);
}


/***/ },

/***/ "./node_modules/@babel/runtime/helpers/esm/unsupportedIterableToArray.js"
/*!*******************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/unsupportedIterableToArray.js ***!
  \*******************************************************************************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _unsupportedIterableToArray)
/* harmony export */ });
/* harmony import */ var _arrayLikeToArray_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./arrayLikeToArray.js */ "./node_modules/@babel/runtime/helpers/esm/arrayLikeToArray.js");

function _unsupportedIterableToArray(r, a) {
  if (r) {
    if ("string" == typeof r) return (0,_arrayLikeToArray_js__WEBPACK_IMPORTED_MODULE_0__["default"])(r, a);
    var t = {}.toString.call(r).slice(8, -1);
    return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? (0,_arrayLikeToArray_js__WEBPACK_IMPORTED_MODULE_0__["default"])(r, a) : void 0;
  }
}


/***/ }

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		if (!(moduleId in __webpack_modules__)) {
/******/ 			delete __webpack_module_cache__[moduleId];
/******/ 			var e = new Error("Cannot find module '" + moduleId + "'");
/******/ 			e.code = 'MODULE_NOT_FOUND';
/******/ 			throw e;
/******/ 		}
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry needs to be wrapped in an IIFE because it needs to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Arrow: () => (/* reexport safe */ _Arrow__WEBPACK_IMPORTED_MODULE_21__["default"]),
/* harmony export */   Box: () => (/* reexport safe */ _Box__WEBPACK_IMPORTED_MODULE_26__["default"]),
/* harmony export */   Button: () => (/* reexport safe */ _Button__WEBPACK_IMPORTED_MODULE_1__["default"]),
/* harmony export */   ButtonImage: () => (/* reexport safe */ _ButtonImage__WEBPACK_IMPORTED_MODULE_2__["default"]),
/* harmony export */   Canvas: () => (/* reexport safe */ _Canvas__WEBPACK_IMPORTED_MODULE_14__["default"]),
/* harmony export */   Circle: () => (/* reexport safe */ _Circle__WEBPACK_IMPORTED_MODULE_32__["default"]),
/* harmony export */   Col: () => (/* reexport safe */ _Col__WEBPACK_IMPORTED_MODULE_17__["default"]),
/* harmony export */   Component: () => (/* reexport safe */ _Component__WEBPACK_IMPORTED_MODULE_15__["default"]),
/* harmony export */   Constants: () => (/* reexport safe */ _Constants__WEBPACK_IMPORTED_MODULE_0__["default"]),
/* harmony export */   Container: () => (/* reexport safe */ _Container__WEBPACK_IMPORTED_MODULE_18__["default"]),
/* harmony export */   Cross: () => (/* reexport safe */ _Cross__WEBPACK_IMPORTED_MODULE_22__["default"]),
/* harmony export */   EasingFunctions: () => (/* reexport safe */ _EasingFunctions__WEBPACK_IMPORTED_MODULE_16__["default"]),
/* harmony export */   ErrorScreen: () => (/* reexport safe */ _ErrorScreen__WEBPACK_IMPORTED_MODULE_36__["default"]),
/* harmony export */   Event: () => (/* reexport safe */ _Event__WEBPACK_IMPORTED_MODULE_34__["default"]),
/* harmony export */   FPSMeter: () => (/* reexport safe */ _FPSMeter__WEBPACK_IMPORTED_MODULE_12__["default"]),
/* harmony export */   ImageContainer: () => (/* reexport safe */ _ImageContainer__WEBPACK_IMPORTED_MODULE_20__["default"]),
/* harmony export */   ImageLoader: () => (/* reexport safe */ _ImageLoader__WEBPACK_IMPORTED_MODULE_3__["default"]),
/* harmony export */   Input: () => (/* reexport safe */ _Input__WEBPACK_IMPORTED_MODULE_7__["default"]),
/* harmony export */   Label: () => (/* reexport safe */ _Label__WEBPACK_IMPORTED_MODULE_8__["default"]),
/* harmony export */   Link: () => (/* reexport safe */ _Link__WEBPACK_IMPORTED_MODULE_9__["default"]),
/* harmony export */   Menu: () => (/* reexport safe */ _Menu__WEBPACK_IMPORTED_MODULE_6__["default"]),
/* harmony export */   NotificationMessage: () => (/* reexport safe */ _NotificationMessage__WEBPACK_IMPORTED_MODULE_4__["default"]),
/* harmony export */   ProgressBar: () => (/* reexport safe */ _ProgressBar__WEBPACK_IMPORTED_MODULE_13__["default"]),
/* harmony export */   Reactor: () => (/* reexport safe */ _Reactor__WEBPACK_IMPORTED_MODULE_33__["default"]),
/* harmony export */   ReactorCanvas: () => (/* reexport safe */ _ReactorCanvas__WEBPACK_IMPORTED_MODULE_35__["default"]),
/* harmony export */   Row: () => (/* reexport safe */ _Row__WEBPACK_IMPORTED_MODULE_19__["default"]),
/* harmony export */   Scene: () => (/* reexport safe */ _Scene__WEBPACK_IMPORTED_MODULE_11__["default"]),
/* harmony export */   Scrollbar: () => (/* reexport safe */ _Scrollbar__WEBPACK_IMPORTED_MODULE_23__["default"]),
/* harmony export */   ScrollbarHorizontal: () => (/* reexport safe */ _ScrollbarHorizontal__WEBPACK_IMPORTED_MODULE_25__["default"]),
/* harmony export */   ScrollbarVertical: () => (/* reexport safe */ _ScrollbarVertical__WEBPACK_IMPORTED_MODULE_24__["default"]),
/* harmony export */   Select: () => (/* reexport safe */ _Select__WEBPACK_IMPORTED_MODULE_28__["default"]),
/* harmony export */   SelectOption: () => (/* reexport safe */ _SelectOption__WEBPACK_IMPORTED_MODULE_29__["default"]),
/* harmony export */   SelectOptionsContainer: () => (/* reexport safe */ _SelectOptionsContainer__WEBPACK_IMPORTED_MODULE_30__["default"]),
/* harmony export */   Style: () => (/* reexport safe */ _Style__WEBPACK_IMPORTED_MODULE_27__["default"]),
/* harmony export */   Tooltip: () => (/* reexport safe */ _Tooltip__WEBPACK_IMPORTED_MODULE_10__["default"]),
/* harmony export */   Triangle: () => (/* reexport safe */ _Triangle__WEBPACK_IMPORTED_MODULE_31__["default"]),
/* harmony export */   Utils: () => (/* reexport safe */ _Utils__WEBPACK_IMPORTED_MODULE_5__["default"])
/* harmony export */ });
/* harmony import */ var _Constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Constants */ "./src/Constants.js");
/* harmony import */ var _Button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Button */ "./src/Button.js");
/* harmony import */ var _ButtonImage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ButtonImage */ "./src/ButtonImage.js");
/* harmony import */ var _ImageLoader__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ImageLoader */ "./src/ImageLoader.js");
/* harmony import */ var _NotificationMessage__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./NotificationMessage */ "./src/NotificationMessage.js");
/* harmony import */ var _Utils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Utils */ "./src/Utils.js");
/* harmony import */ var _Menu__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Menu */ "./src/Menu.js");
/* harmony import */ var _Input__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./Input */ "./src/Input.js");
/* harmony import */ var _Label__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./Label */ "./src/Label.js");
/* harmony import */ var _Link__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./Link */ "./src/Link.js");
/* harmony import */ var _Tooltip__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./Tooltip */ "./src/Tooltip.js");
/* harmony import */ var _Scene__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./Scene */ "./src/Scene.js");
/* harmony import */ var _FPSMeter__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./FPSMeter */ "./src/FPSMeter.js");
/* harmony import */ var _ProgressBar__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./ProgressBar */ "./src/ProgressBar.js");
/* harmony import */ var _Canvas__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./Canvas */ "./src/Canvas.js");
/* harmony import */ var _Component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./Component */ "./src/Component.js");
/* harmony import */ var _EasingFunctions__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./EasingFunctions */ "./src/EasingFunctions.js");
/* harmony import */ var _Col__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./Col */ "./src/Col.js");
/* harmony import */ var _Container__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./Container */ "./src/Container.js");
/* harmony import */ var _Row__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./Row */ "./src/Row.js");
/* harmony import */ var _ImageContainer__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./ImageContainer */ "./src/ImageContainer.js");
/* harmony import */ var _Arrow__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./Arrow */ "./src/Arrow.js");
/* harmony import */ var _Cross__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./Cross */ "./src/Cross.js");
/* harmony import */ var _Scrollbar__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./Scrollbar */ "./src/Scrollbar.js");
/* harmony import */ var _ScrollbarVertical__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./ScrollbarVertical */ "./src/ScrollbarVertical.js");
/* harmony import */ var _ScrollbarHorizontal__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./ScrollbarHorizontal */ "./src/ScrollbarHorizontal.js");
/* harmony import */ var _Box__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./Box */ "./src/Box.js");
/* harmony import */ var _Style__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./Style */ "./src/Style.js");
/* harmony import */ var _Select__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./Select */ "./src/Select.js");
/* harmony import */ var _SelectOption__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./SelectOption */ "./src/SelectOption.js");
/* harmony import */ var _SelectOptionsContainer__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./SelectOptionsContainer */ "./src/SelectOptionsContainer.js");
/* harmony import */ var _Triangle__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./Triangle */ "./src/Triangle.js");
/* harmony import */ var _Circle__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ./Circle */ "./src/Circle.js");
/* harmony import */ var _Reactor__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ./Reactor */ "./src/Reactor.js");
/* harmony import */ var _Event__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! ./Event */ "./src/Event.js");
/* harmony import */ var _ReactorCanvas__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! ./ReactorCanvas */ "./src/ReactorCanvas.js");
/* harmony import */ var _ErrorScreen__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! ./ErrorScreen */ "./src/ErrorScreen.js");
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






































})();

/******/ 	return __webpack_exports__;
/******/ })()
;
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiSlNHYW1lVG9vbHMuZGV2LmpzIiwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRCxPOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ1ZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNvQztBQUNBO0FBQ1I7QUFDQTtBQUFBLElBRVBJLEtBQUssMEJBQUFDLFVBQUE7RUFHeEIsU0FBQUQsTUFBWUUsQ0FBQyxFQUFFQyxDQUFDLEVBQUVDLEdBQUcsRUFBRUMsR0FBRyxFQUFFQyxLQUFLLEVBQUU7SUFBQSxJQUFBQyxLQUFBO0lBQUFDLGlGQUFBLE9BQUFSLEtBQUE7SUFDakNPLEtBQUEsR0FBQUUsVUFBQSxPQUFBVCxLQUFBLEdBQU1FLENBQUMsRUFBRUMsQ0FBQyxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUVHLEtBQUs7SUFBRUksaUZBQUEsQ0FBQUgsS0FBQSxnQkFIcEIsS0FBSztJQUtoQkEsS0FBQSxDQUFLSCxHQUFHLEdBQUdBLEdBQUc7SUFDZEcsS0FBQSxDQUFLRixHQUFHLEdBQUdBLEdBQUc7SUFBQyxPQUFBRSxLQUFBO0VBQ2pCO0VBQUNJLDJFQUFBLENBQUFYLEtBQUEsRUFBQUMsVUFBQTtFQUFBLE9BQUFXLDhFQUFBLENBQUFaLEtBQUE7SUFBQWEsR0FBQTtJQUFBQyxLQUFBLEVBRUQsU0FBQUMsSUFBSUEsQ0FBQ0MsT0FBTyxFQUFFO01BQ1osSUFBRyxJQUFJLENBQUNDLE1BQU0sRUFBRTtNQUNoQkMsYUFBQSxDQUFBbEIsS0FBQSxvQkFBV2dCLE9BQU87TUFFbEIsSUFBTUcsTUFBTSxHQUFHSCxPQUFPLENBQUNHLE1BQU07TUFDN0IsSUFBTUMsR0FBRyxHQUFHRCxNQUFNLENBQUNFLFVBQVUsQ0FBQyxJQUFJLENBQUM7TUFFbkN0QiwrQ0FBSyxDQUFDdUIsU0FBUyxDQUFDRixHQUFHLEVBQUUsSUFBSSxDQUFDbEIsQ0FBQyxFQUFFLElBQUksQ0FBQ0MsQ0FBQyxFQUFFLElBQUksQ0FBQ0MsR0FBRyxFQUFFLElBQUksQ0FBQ0MsR0FBRyxFQUFFLElBQUksQ0FBQ0MsS0FBSyxDQUFDaUIsU0FBUyxFQUFFLElBQUksQ0FBQ2pCLEtBQUssQ0FBQ2tCLFFBQVEsRUFBRSxJQUFJLENBQUNsQixLQUFLLENBQUNtQixLQUFLLEVBQUUsSUFBSSxDQUFDbkIsS0FBSyxDQUFDb0IsT0FBTyxDQUFDO01BRXpJLElBQUksQ0FBQ0MsSUFBSSxHQUFHLElBQUk7SUFDbEI7RUFBQztJQUFBZCxHQUFBO0lBQUFlLEdBQUEsRUFFRCxTQUFBQSxJQUFBLEVBQVk7TUFDVixPQUFPQyxJQUFJLENBQUNDLEdBQUcsQ0FBQyxJQUFJLENBQUM1QixDQUFDLEdBQUcsSUFBSSxDQUFDRSxHQUFHLENBQUM7SUFDcEM7RUFBQztJQUFBUyxHQUFBO0lBQUFlLEdBQUEsRUFFRCxTQUFBQSxJQUFBLEVBQWE7TUFDWCxPQUFPQyxJQUFJLENBQUNDLEdBQUcsQ0FBQyxJQUFJLENBQUMzQixDQUFDLEdBQUcsSUFBSSxDQUFDRSxHQUFHLENBQUM7SUFDcEM7RUFBQztJQUFBUSxHQUFBO0lBQUFlLEdBQUEsRUFFRCxTQUFBQSxJQUFBLEVBQW1CO01BQ2pCLE9BQU8sSUFBSTlCLDhDQUFLLENBQUM7UUFDZixXQUFXLEVBQUVELGtEQUFTLENBQUNrQyxPQUFPLENBQUNDLHVCQUF1QjtRQUN0RCxVQUFVLEVBQUVuQyxrREFBUyxDQUFDa0MsT0FBTyxDQUFDRSx1QkFBdUI7UUFDckQsT0FBTyxFQUFFcEMsa0RBQVMsQ0FBQ2tDLE9BQU8sQ0FBQ0csbUJBQW1CO1FBQzlDLFNBQVMsRUFBRXJDLGtEQUFTLENBQUNrQyxPQUFPLENBQUNJO01BQy9CLENBQUMsQ0FBQztJQUNKO0VBQUM7QUFBQSxFQXJDZ0N2QyxrREFBUzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDdkI1QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDb0M7QUFBQSxJQUVmeUMsR0FBRywwQkFBQXBDLFVBQUE7RUFHdEIsU0FBQW9DLElBQVluQyxDQUFDLEVBQUVDLENBQUMsRUFBRW1DLEtBQUssRUFBRUMsTUFBTSxFQUFFakMsS0FBSyxFQUFFO0lBQUEsSUFBQUMsS0FBQTtJQUFBQyxpRkFBQSxPQUFBNkIsR0FBQTtJQUN0QzlCLEtBQUEsR0FBQUUsVUFBQSxPQUFBNEIsR0FBQSxHQUFNbkMsQ0FBQyxFQUFFQyxDQUFDLEVBQUVtQyxLQUFLLEVBQUVDLE1BQU0sRUFBRWpDLEtBQUs7SUFBRUksaUZBQUEsQ0FBQUgsS0FBQSxnQkFIdkIsS0FBSztJQUFBLE9BQUFBLEtBQUE7RUFJbEI7RUFBQ0ksMkVBQUEsQ0FBQTBCLEdBQUEsRUFBQXBDLFVBQUE7RUFBQSxPQUFBVyw4RUFBQSxDQUFBeUIsR0FBQTtJQUFBeEIsR0FBQTtJQUFBQyxLQUFBLEVBRUQsU0FBQUMsSUFBSUEsQ0FBQ0MsT0FBTyxFQUFFO01BQ1osSUFBRyxJQUFJLENBQUNDLE1BQU0sRUFBRTtNQUNoQkMsYUFBQSxDQUFBbUIsR0FBQSxvQkFBV3JCLE9BQU87TUFFbEIsSUFBTUcsTUFBTSxHQUFHSCxPQUFPLENBQUNHLE1BQU07TUFDN0IsSUFBTUMsR0FBRyxHQUFHRCxNQUFNLENBQUNFLFVBQVUsQ0FBQyxJQUFJLENBQUM7TUFDbkNELEdBQUcsQ0FBQ29CLElBQUksQ0FBQyxDQUFDO01BRVYsSUFBSSxDQUFDQyxjQUFjLENBQUNyQixHQUFHLENBQUM7TUFDeEIsSUFBSSxDQUFDc0IsVUFBVSxDQUFDdEIsR0FBRyxDQUFDO01BRXBCQSxHQUFHLENBQUN1QixPQUFPLENBQUMsQ0FBQztJQUNmO0VBQUM7SUFBQTlCLEdBQUE7SUFBQUMsS0FBQSxFQUVELFNBQUEyQixjQUFjQSxDQUFDckIsR0FBRyxFQUFFO01BQ2xCLElBQU1LLEtBQUssR0FBRyxJQUFJLENBQUNtQixlQUFlO01BRWxDLElBQUduQixLQUFLLEVBQUU7UUFDUkwsR0FBRyxDQUFDb0IsSUFBSSxDQUFDLENBQUM7UUFFVnBCLEdBQUcsQ0FBQ3lCLFNBQVMsR0FBR3BCLEtBQUs7UUFDckJMLEdBQUcsQ0FBQzBCLFFBQVEsQ0FBQ2pCLElBQUksQ0FBQ2tCLEtBQUssQ0FBQyxJQUFJLENBQUM3QyxDQUFDLENBQUMsRUFBRTJCLElBQUksQ0FBQ2tCLEtBQUssQ0FBQyxJQUFJLENBQUM1QyxDQUFDLENBQUMsRUFBRTBCLElBQUksQ0FBQ2tCLEtBQUssQ0FBQyxJQUFJLENBQUNULEtBQUssQ0FBQyxFQUFFVCxJQUFJLENBQUNrQixLQUFLLENBQUMsSUFBSSxDQUFDUixNQUFNLENBQUMsQ0FBQztRQUVyR25CLEdBQUcsQ0FBQ3VCLE9BQU8sQ0FBQyxDQUFDO01BQ2Y7SUFDRjtFQUFDO0lBQUE5QixHQUFBO0lBQUFlLEdBQUEsRUFFRCxTQUFBQSxJQUFBLEVBQXNCO01BQ3BCLElBQUlILEtBQUssR0FBRyxJQUFJO01BRWhCLElBQUcsSUFBSSxDQUFDdUIsT0FBTyxJQUFJLElBQUksQ0FBQ0MsT0FBTyxJQUFJLElBQUksQ0FBQzNDLEtBQUssQ0FBQzRDLG1CQUFtQixJQUFJLElBQUksRUFBRTtRQUN6RXpCLEtBQUssR0FBRyxJQUFJLENBQUNuQixLQUFLLENBQUM0QyxtQkFBbUI7TUFDeEMsQ0FBQyxNQUFNLElBQUcsSUFBSSxDQUFDRixPQUFPLElBQUksSUFBSSxDQUFDMUMsS0FBSyxDQUFDNkMsb0JBQW9CLElBQUksSUFBSSxFQUFFO1FBQ2pFMUIsS0FBSyxHQUFHLElBQUksQ0FBQ25CLEtBQUssQ0FBQzZDLG9CQUFvQjtNQUN6QyxDQUFDLE1BQU07UUFDTDFCLEtBQUssR0FBRyxJQUFJLENBQUNuQixLQUFLLENBQUNzQyxlQUFlO01BQ3BDO01BRUEsT0FBT25CLEtBQUs7SUFDZDtFQUFDO0lBQUFaLEdBQUE7SUFBQUMsS0FBQSxFQUVELFNBQUE0QixVQUFVQSxDQUFDdEIsR0FBRyxFQUFFO01BQ2QsSUFBTUssS0FBSyxHQUFHLElBQUksQ0FBQzJCLFdBQVc7TUFFOUIsSUFBRzNCLEtBQUssSUFBSSxJQUFJLENBQUNuQixLQUFLLENBQUMrQyxVQUFVLEdBQUcsQ0FBQyxFQUFFO1FBQ3JDakMsR0FBRyxDQUFDb0IsSUFBSSxDQUFDLENBQUM7UUFFVnBCLEdBQUcsQ0FBQ2tDLFdBQVcsR0FBRzdCLEtBQUs7UUFDdkJMLEdBQUcsQ0FBQ0csU0FBUyxHQUFHLElBQUksQ0FBQ2pCLEtBQUssQ0FBQytDLFVBQVU7UUFFckNqQyxHQUFHLENBQUNtQyxVQUFVLENBQUMxQixJQUFJLENBQUNrQixLQUFLLENBQUMsSUFBSSxDQUFDN0MsQ0FBQyxDQUFDLEVBQUUyQixJQUFJLENBQUNrQixLQUFLLENBQUMsSUFBSSxDQUFDNUMsQ0FBQyxDQUFDLEVBQUUwQixJQUFJLENBQUNrQixLQUFLLENBQUMsSUFBSSxDQUFDVCxLQUFLLEdBQUcsSUFBSSxDQUFDaEMsS0FBSyxDQUFDK0MsVUFBVSxHQUFHLENBQUMsQ0FBQyxFQUFFeEIsSUFBSSxDQUFDa0IsS0FBSyxDQUFDLElBQUksQ0FBQ1IsTUFBTSxHQUFHLElBQUksQ0FBQ2pDLEtBQUssQ0FBQytDLFVBQVUsR0FBRyxDQUFDLENBQUMsQ0FBQztRQUUvSmpDLEdBQUcsQ0FBQ3VCLE9BQU8sQ0FBQyxDQUFDO01BQ2Y7SUFDRjtFQUFDO0lBQUE5QixHQUFBO0lBQUFlLEdBQUEsRUFFRCxTQUFBQSxJQUFBLEVBQWtCO01BQ2hCLElBQUlILEtBQUssR0FBRyxJQUFJO01BRWhCLElBQUcsSUFBSSxDQUFDd0IsT0FBTyxJQUFJLElBQUksQ0FBQ0QsT0FBTyxJQUFJLElBQUksQ0FBQzFDLEtBQUssQ0FBQ2tELGVBQWUsSUFBSSxJQUFJLEVBQUU7UUFDckUvQixLQUFLLEdBQUcsSUFBSSxDQUFDbkIsS0FBSyxDQUFDa0QsZUFBZTtNQUNwQyxDQUFDLE1BQU0sSUFBRyxDQUFDLElBQUksQ0FBQ1AsT0FBTyxJQUFJLElBQUksQ0FBQ0QsT0FBTyxJQUFJLElBQUksQ0FBQzFDLEtBQUssQ0FBQ21ELGdCQUFnQixJQUFJLElBQUksRUFBRTtRQUM5RWhDLEtBQUssR0FBRyxJQUFJLENBQUNuQixLQUFLLENBQUNtRCxnQkFBZ0I7TUFDckMsQ0FBQyxNQUFNLElBQUcsSUFBSSxDQUFDQyxVQUFVLElBQUksSUFBSSxDQUFDQyxRQUFRLElBQUksSUFBSSxDQUFDckQsS0FBSyxDQUFDc0QsbUJBQW1CLElBQUksSUFBSSxFQUFFO1FBQ3BGbkMsS0FBSyxHQUFHLElBQUksQ0FBQ25CLEtBQUssQ0FBQ3NELG1CQUFtQjtNQUN4QyxDQUFDLE1BQU07UUFDTG5DLEtBQUssR0FBRyxJQUFJLENBQUNuQixLQUFLLENBQUM4QyxXQUFXO01BQ2hDO01BRUEsT0FBTzNCLEtBQUs7SUFDZDtFQUFDO0FBQUEsRUE3RThCN0Isa0RBQVM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDcEIxQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDd0I7QUFDWTtBQUNSO0FBQUEsSUFFUGtFLE1BQU0sMEJBQUFDLElBQUE7RUFHekIsU0FBQUQsT0FBWTVELENBQUMsRUFBRUMsQ0FBQyxFQUFFNkQsUUFBUSxFQUFFQyxTQUFTLEVBQUUzRCxLQUFLLEVBQWlCO0lBQUEsSUFBQUMsS0FBQTtJQUFBQyxpRkFBQSxPQUFBc0QsTUFBQTtJQUFBLFNBQUFJLElBQUEsR0FBQUMsU0FBQSxDQUFBQyxNQUFBLEVBQVpDLFVBQVUsT0FBQUMsS0FBQSxDQUFBSixJQUFBLE9BQUFBLElBQUEsV0FBQUssSUFBQSxNQUFBQSxJQUFBLEdBQUFMLElBQUEsRUFBQUssSUFBQTtNQUFWRixVQUFVLENBQUFFLElBQUEsUUFBQUosU0FBQSxDQUFBSSxJQUFBO0lBQUE7SUFDekRoRSxLQUFBLEdBQUFFLFVBQUEsT0FBQXFELE1BQUEsR0FBTTVELENBQUMsRUFBRUMsQ0FBQyxFQUFFNkQsUUFBUSxFQUFFQyxTQUFTLEVBQUUzRCxLQUFLLEVBQUFrRSxNQUFBLENBQUtILFVBQVU7SUFBRTNELGlGQUFBLENBQUFILEtBQUEsZ0JBSDVDLElBQUk7SUFBQSxPQUFBQSxLQUFBO0VBSWpCO0VBQUNJLDJFQUFBLENBQUFtRCxNQUFBLEVBQUFDLElBQUE7RUFBQSxPQUFBbkQsOEVBQUEsQ0FBQWtELE1BQUE7SUFBQWpELEdBQUE7SUFBQUMsS0FBQSxFQUVELFNBQUFDLElBQUlBLENBQUNDLE9BQU8sRUFBRTtNQUNaLElBQUcsSUFBSSxDQUFDQyxNQUFNLEVBQUU7TUFDaEJDLGFBQUEsQ0FBQTRDLE1BQUEsb0JBQVc5QyxPQUFPO01BRWxCLElBQU1HLE1BQU0sR0FBR0gsT0FBTyxDQUFDRyxNQUFNO01BQzdCLElBQU1DLEdBQUcsR0FBR0QsTUFBTSxDQUFDRSxVQUFVLENBQUMsSUFBSSxDQUFDO01BQ25DRCxHQUFHLENBQUNvQixJQUFJLENBQUMsQ0FBQztNQUVWLElBQUksQ0FBQ2lDLGNBQWMsQ0FBQ3JELEdBQUcsQ0FBQztNQUV4QkEsR0FBRyxDQUFDdUIsT0FBTyxDQUFDLENBQUM7SUFDZjtFQUFDO0lBQUE5QixHQUFBO0lBQUFDLEtBQUEsRUFFRCxTQUFBMkQsY0FBY0EsQ0FBQ3JELEdBQUcsRUFBRTtNQUNsQkYsYUFBQSxDQUFBNEMsTUFBQSxvQkFBVzFDLEdBQUc7SUFDaEI7RUFBQztJQUFBUCxHQUFBO0lBQUFlLEdBQUEsRUFFRCxTQUFBQSxJQUFBLEVBQWE7TUFDWCxPQUFPLENBQUMsSUFBSSxDQUFDcUMsU0FBUyxJQUFBL0MsYUFBQSxDQUFBNEMsTUFBQSxvQkFBZ0IsSUFBSSxJQUFJLENBQUN4RCxLQUFLLENBQUNvRSxPQUFPO0lBQzlEO0VBQUM7SUFBQTdELEdBQUE7SUFBQWUsR0FBQSxFQUVELFNBQUFBLElBQUEsRUFBWTtNQUNWLE9BQU8sQ0FBQyxJQUFJLENBQUNvQyxRQUFRLElBQUE5QyxhQUFBLENBQUE0QyxNQUFBLG1CQUFlLElBQUksSUFBSSxDQUFDeEQsS0FBSyxDQUFDb0UsT0FBTztJQUM1RDtFQUFDO0lBQUE3RCxHQUFBO0lBQUFlLEdBQUEsRUFFRCxTQUFBQSxJQUFBLEVBQW1CO01BQ2pCLE9BQU8sSUFBSTlCLDhDQUFLLENBQUM7UUFDZixpQkFBaUIsRUFBRUQsa0RBQVMsQ0FBQ2tDLE9BQU8sQ0FBQzRDLHlCQUF5QjtRQUM5RCxzQkFBc0IsRUFBRTlFLGtEQUFTLENBQUNrQyxPQUFPLENBQUM2QywrQkFBK0I7UUFDekUscUJBQXFCLEVBQUUvRSxrREFBUyxDQUFDa0MsT0FBTyxDQUFDOEMsK0JBQStCO1FBQ3hFLGlCQUFpQixFQUFFLElBQUk7UUFDdkIsaUJBQWlCLEVBQUU7TUFDckIsQ0FBQyxDQUFDO0lBQ0o7RUFBQztBQUFBLEVBeENpQ2hCLDRDQUFHOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDdEJ2QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDOEM7QUFDaEI7QUFDRjtBQUNRO0FBQUEsSUFFZmtCLFdBQVcsMEJBQUFDLE9BQUE7RUFDOUIsU0FBQUQsWUFBWUUsTUFBTSxFQUFFL0UsQ0FBQyxFQUFFQyxDQUFDLEVBQUUrRSxVQUFVLEVBQUVDLGtCQUFrQixFQUFFN0MsS0FBSyxFQUFFQyxNQUFNLEVBQUVLLGVBQWUsRUFBRU8sb0JBQW9CLEVBQUVpQyxXQUFXLEVBQUU7SUFBQSxJQUFBN0UsS0FBQTtJQUFBQyxpRkFBQSxPQUFBdUUsV0FBQTtJQUMzSCxJQUFNekUsS0FBSyxHQUFHLElBQUlSLDhDQUFLLENBQUM7TUFDdEIsWUFBWSxFQUFFb0YsVUFBVTtNQUN4QixvQkFBb0IsRUFBRUMsa0JBQWtCO01BQ3hDLGlCQUFpQixFQUFFdkMsZUFBZSxJQUFJL0MsbURBQVMsQ0FBQ2tDLE9BQU8sQ0FBQzRDLHlCQUF5QjtNQUNqRixzQkFBc0IsRUFBRXhCLG9CQUFvQixJQUFJdEQsbURBQVMsQ0FBQ2tDLE9BQU8sQ0FBQzZDO0lBQ3BFLENBQUMsQ0FBQztJQUVGckUsS0FBQSxHQUFBRSxVQUFBLE9BQUFzRSxXQUFBLEdBQU03RSxDQUFDLEVBQUVDLENBQUMsRUFBRW1DLEtBQUssRUFBRUMsTUFBTSxFQUFFakMsS0FBSztJQUNoQ0MsS0FBQSxDQUFLOEUsS0FBSyxHQUFHLElBQUlQLHVEQUFjLENBQUNHLE1BQU0sRUFBRS9FLENBQUMsRUFBRUMsQ0FBQyxFQUFFbUMsS0FBSyxFQUFFQyxNQUFNLEVBQUUsSUFBSXpDLDhDQUFLLENBQUM7TUFBRSxZQUFZLEVBQUUsUUFBUTtNQUFFLG9CQUFvQixFQUFFO0lBQVMsQ0FBQyxDQUFDLEVBQUVzRixXQUFXLENBQUM7SUFDaEo3RSxLQUFBLENBQUsrRSxHQUFHLENBQUMvRSxLQUFBLENBQUs4RSxLQUFLLENBQUM7SUFFcEJFLE9BQU8sSUFBSUEsT0FBTyxDQUFDQyxJQUFJLElBQUlELE9BQU8sQ0FBQ0MsSUFBSSxDQUFDM0YsbURBQVMsQ0FBQzRGLE1BQU0sQ0FBQ0MsY0FBYyxHQUFHLEdBQUcsR0FBRzdGLG1EQUFTLENBQUM0RixNQUFNLENBQUNFLHVCQUF1QixDQUFDO0lBQUMsT0FBQXBGLEtBQUE7RUFDNUg7RUFBQ0ksMkVBQUEsQ0FBQW9FLFdBQUEsRUFBQUMsT0FBQTtFQUFBLE9BQUFwRSw4RUFBQSxDQUFBbUUsV0FBQTtJQUFBbEUsR0FBQTtJQUFBQyxLQUFBLEVBRUQsU0FBQThFLFNBQVNBLENBQUNSLFdBQVcsRUFBRTtNQUNyQixJQUFHLElBQUksQ0FBQ2YsVUFBVSxDQUFDLENBQUMsQ0FBQyxZQUFZUyx1REFBYyxFQUFFLElBQUksQ0FBQ1QsVUFBVSxDQUFDLENBQUMsQ0FBQyxDQUFDdUIsU0FBUyxDQUFDUixXQUFXLENBQUM7SUFDNUY7RUFBQztJQUFBdkUsR0FBQTtJQUFBZSxHQUFBLEVBWUQsU0FBQUEsSUFBQSxFQUFlO01BQ2IsT0FBQVYsYUFBQSxDQUFBNkQsV0FBQTtJQUNGLENBQUM7SUFBQWMsR0FBQSxFQVpELFNBQUFBLElBQWF2RCxLQUFLLEVBQUU7TUFDbEIsSUFBSSxDQUFDK0MsS0FBSyxDQUFDL0MsS0FBSyxHQUFHQSxLQUFLO01BQ3hCd0QsYUFBQSxDQUFBZixXQUFBLGNBQWlCekMsS0FBSztJQUN4QjtFQUFDO0lBQUF6QixHQUFBO0lBQUFlLEdBQUEsRUFXRCxTQUFBQSxJQUFBLEVBQWdCO01BQ2QsT0FBQVYsYUFBQSxDQUFBNkQsV0FBQTtJQUNGLENBQUM7SUFBQWMsR0FBQSxFQVhELFNBQUFBLElBQWN0RCxNQUFNLEVBQUU7TUFDcEIsSUFBSSxDQUFDOEMsS0FBSyxDQUFDOUMsTUFBTSxHQUFHQSxNQUFNO01BQzFCdUQsYUFBQSxDQUFBZixXQUFBLGVBQWtCeEMsTUFBTTtJQUMxQjtFQUFDO0lBQUExQixHQUFBO0lBQUFlLEdBQUEsRUFvQkQsU0FBQUEsSUFBQSxFQUFlO01BQ2IsT0FBQVYsYUFBQSxDQUFBNkQsV0FBQTtJQUNGLENBQUM7SUFBQWMsR0FBQSxFQVpELFNBQUFBLElBQWF2RCxLQUFLLEVBQUU7TUFDbEIsSUFBSSxDQUFDK0MsS0FBSyxDQUFDL0MsS0FBSyxHQUFHQSxLQUFLO01BQ3hCd0QsYUFBQSxDQUFBZixXQUFBLGNBQWlCekMsS0FBSztJQUN4QjtFQUFDO0lBQUF6QixHQUFBO0lBQUFlLEdBQUEsRUFXRCxTQUFBQSxJQUFBLEVBQWdCO01BQ2QsT0FBQVYsYUFBQSxDQUFBNkQsV0FBQTtJQUNGLENBQUM7SUFBQWMsR0FBQSxFQVhELFNBQUFBLElBQWN0RCxNQUFNLEVBQUU7TUFDcEIsSUFBSSxDQUFDOEMsS0FBSyxDQUFDOUMsTUFBTSxHQUFHQSxNQUFNO01BQzFCdUQsYUFBQSxDQUFBZixXQUFBLGVBQWtCeEMsTUFBTTtJQUMxQjtFQUFDO0lBQUExQixHQUFBO0lBQUFlLEdBQUEsRUFlRCxTQUFBQSxJQUFBLEVBQVk7TUFDVixPQUFBVixhQUFBLENBQUE2RCxXQUFBO0lBQ0YsQ0FBQztJQUFBYyxHQUFBLEVBUEQsU0FBQUEsSUFBVXZELEtBQUssRUFBRTtNQUNmLElBQUksQ0FBQ3lELFFBQVEsR0FBR3pELEtBQUs7TUFDckIsSUFBSSxDQUFDMEIsUUFBUSxHQUFHMUIsS0FBSztJQUN2QjtFQUFDO0lBQUF6QixHQUFBO0lBQUFlLEdBQUEsRUFXRCxTQUFBQSxJQUFBLEVBQWE7TUFDWCxPQUFBVixhQUFBLENBQUE2RCxXQUFBO0lBQ0YsQ0FBQztJQUFBYyxHQUFBLEVBUEQsU0FBQUEsSUFBV3RELE1BQU0sRUFBRTtNQUNqQixJQUFJLENBQUN5RCxTQUFTLEdBQUd6RCxNQUFNO01BQ3ZCLElBQUksQ0FBQzBCLFNBQVMsR0FBRzFCLE1BQU07SUFDekI7RUFBQztBQUFBLEVBcEVzQ3VCLCtDQUFNOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDdkIvQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDb0M7QUFDUjtBQUNBO0FBQ2dCO0FBQ0o7QUFBQSxJQUFBc0MsY0FBQSxvQkFBQUMsT0FBQTtBQUFBLElBQUFDLE1BQUEsb0JBQUFELE9BQUE7QUFBQSxJQUFBRSxPQUFBLG9CQUFBRixPQUFBO0FBQUEsSUFFbkJHLE1BQU07RUFLekIsU0FBQUEsT0FBWUMsS0FBSyxFQUFFdEYsTUFBTSxFQUFFbUIsS0FBSyxFQUFFQyxNQUFNLEVBQUVtRSxVQUFVLEVBQUVDLE1BQU0sRUFBRTtJQUFBbkcsaUZBQUEsT0FBQWdHLE1BQUE7SUFKOURJLDBCQUFBLE9BQUFSLGNBQWM7SUFDZFEsMEJBQUEsT0FBQU4sTUFBTztJQUNQTSwwQkFBQSxPQUFBTCxPQUFRO0lBR04sSUFBSSxDQUFDcEYsTUFBTSxHQUFHQSxNQUFNLElBQUkwRixRQUFRLENBQUNDLGFBQWEsQ0FBQyxRQUFRLENBQUM7SUFDeEQsSUFBSSxDQUFDQyxTQUFTLEdBQUdGLFFBQVEsQ0FBQ0MsYUFBYSxDQUFDLEtBQUssQ0FBQztJQUM5QyxJQUFJLENBQUN4RSxLQUFLLEdBQUdBLEtBQUssSUFBSXpDLGtEQUFTLENBQUNrQyxPQUFPLENBQUNpRixZQUFZO0lBQ3BELElBQUksQ0FBQ3pFLE1BQU0sR0FBR0EsTUFBTSxJQUFJMUMsa0RBQVMsQ0FBQ2tDLE9BQU8sQ0FBQ2tGLGFBQWE7SUFDdkQsSUFBSSxDQUFDUixLQUFLLEdBQUdBLEtBQUs7SUFDbEIsSUFBSSxDQUFDTSxTQUFTLENBQUNHLFdBQVcsQ0FBQyxJQUFJLENBQUMvRixNQUFNLENBQUM7SUFDdkMsSUFBSSxDQUFDZ0csT0FBTyxHQUFHLEtBQUs7SUFDcEIsSUFBSSxDQUFDeEYsSUFBSSxHQUFHLEtBQUs7SUFDakIsSUFBSSxDQUFDZ0YsTUFBTSxHQUFHQSxNQUFNLElBQUksQ0FBQyxDQUFDO0lBQzFCUyxxQkFBQSxDQUFLaEIsY0FBYyxFQUFuQixJQUFJLEVBQWtCLENBQUosQ0FBQztJQUNuQixJQUFJLENBQUNpQixRQUFRLEdBQUcsS0FBSztJQUNyQixJQUFJLENBQUNDLFVBQVUsR0FBRyxLQUFLO0lBQ3ZCLElBQUksQ0FBQ0MsUUFBUSxHQUFHLEtBQUs7O0lBRXJCO0lBQ0EsSUFBSSxDQUFDQyxVQUFVLEdBQUcsSUFBSXJCLG9EQUFXLENBQUMsSUFBSSxDQUFDO0lBQ3ZDLElBQUksQ0FBQ3NCLGFBQWEsR0FBRyxJQUFJLENBQUNoQixLQUFLOztJQUUvQjtJQUNBLElBQUksQ0FBQ2lCLE9BQU8sR0FBRyxJQUFJeEIsc0RBQWEsQ0FBQyxDQUFDO0lBQ2xDLElBQUksQ0FBQ3dCLE9BQU8sQ0FBQ0MsYUFBYSxDQUFDLFdBQVcsQ0FBQztJQUN2QyxJQUFJLENBQUNELE9BQU8sQ0FBQ0MsYUFBYSxDQUFDLE9BQU8sQ0FBQztJQUNuQyxJQUFJLENBQUNELE9BQU8sQ0FBQ0MsYUFBYSxDQUFDLFdBQVcsQ0FBQztJQUN2QyxJQUFJLENBQUNELE9BQU8sQ0FBQ0MsYUFBYSxDQUFDLFNBQVMsQ0FBQztJQUNyQyxJQUFJLENBQUNELE9BQU8sQ0FBQ0MsYUFBYSxDQUFDLE9BQU8sQ0FBQztJQUNuQyxJQUFJLENBQUNELE9BQU8sQ0FBQ0MsYUFBYSxDQUFDLFlBQVksQ0FBQztJQUN4QyxJQUFJLENBQUNELE9BQU8sQ0FBQ0MsYUFBYSxDQUFDLFVBQVUsQ0FBQztJQUN0QyxJQUFJLENBQUNELE9BQU8sQ0FBQ0MsYUFBYSxDQUFDLFdBQVcsQ0FBQztJQUV2QyxJQUFHakIsVUFBVSxFQUFFLElBQUksQ0FBQ0EsVUFBVSxDQUFDLENBQUM7SUFDaEMsSUFBSSxDQUFDa0IsWUFBWSxDQUFDLENBQUM7SUFFbkIsSUFBRy9ILGtEQUFTLENBQUNrQyxPQUFPLENBQUM4RixxQkFBcUIsRUFBRTtNQUMxQ3RDLE9BQU8sSUFBSUEsT0FBTyxDQUFDdUMsSUFBSSxDQUFDakksa0RBQVMsQ0FBQzRGLE1BQU0sQ0FBQ0MsY0FBYyxHQUFHLEdBQUcsR0FBRzdGLGtEQUFTLENBQUM0RixNQUFNLENBQUNzQyxxQkFBcUIsQ0FBQztJQUN6RztJQUVBLElBQUdsSSxrREFBUyxDQUFDa0MsT0FBTyxDQUFDaUcsMEJBQTBCLEVBQUU7TUFDL0N6QyxPQUFPLElBQUlBLE9BQU8sQ0FBQ3VDLElBQUksQ0FBQ2pJLGtEQUFTLENBQUM0RixNQUFNLENBQUNDLGNBQWMsR0FBRyxHQUFHLEdBQUc3RixrREFBUyxDQUFDNEYsTUFBTSxDQUFDd0MsMEJBQTBCLENBQUM7SUFDOUc7RUFDRjtFQUFDLE9BQUFySCw4RUFBQSxDQUFBNEYsTUFBQTtJQUFBM0YsR0FBQTtJQUFBQyxLQUFBLEVBRUQsU0FBQUMsSUFBSUEsQ0FBQSxFQUFHO01BQ0wsSUFBTUssR0FBRyxHQUFHLElBQUksQ0FBQ0QsTUFBTSxDQUFDRSxVQUFVLENBQUMsSUFBSSxDQUFDO01BQ3hDLElBQUksQ0FBQzZHLFNBQVMsQ0FBQzlHLEdBQUcsQ0FBQztNQUNuQixJQUFJLENBQUMrRyxTQUFTLENBQUMvRyxHQUFHLENBQUM7SUFDckI7RUFBQztJQUFBUCxHQUFBO0lBQUFDLEtBQUEsRUFFRCxTQUFBcUgsU0FBU0EsQ0FBQy9HLEdBQUcsRUFBRTtNQUNiLElBQUcsSUFBSSxDQUFDcUYsS0FBSyxFQUFFO1FBQ2IsSUFBSSxDQUFDQSxLQUFLLENBQUMyQixNQUFNLEdBQUcsSUFBSTtRQUN4QixJQUFJLENBQUMzQixLQUFLLENBQUN0RixNQUFNLEdBQUcsSUFBSTtRQUV4QixJQUFJO1VBQ0ZDLEdBQUcsQ0FBQ2lILEtBQUssQ0FBQ3hJLGtEQUFTLENBQUNrQyxPQUFPLENBQUN1RyxXQUFXLEVBQUV6SSxrREFBUyxDQUFDa0MsT0FBTyxDQUFDdUcsV0FBVyxDQUFDO1VBQ3ZFLElBQUksQ0FBQzdCLEtBQUssQ0FBQzFGLElBQUksQ0FBQ0ssR0FBRyxDQUFDO1FBQ3RCLENBQUMsQ0FBQyxPQUFNbUgsQ0FBQyxFQUFFO1VBQ1QsSUFBSSxDQUFDbEIsUUFBUSxHQUFHLElBQUk7VUFDcEIsSUFBSSxDQUFDWixLQUFLLEdBQUcsSUFBSSxDQUFDZSxVQUFVO1VBQzVCLElBQUksQ0FBQ0EsVUFBVSxDQUFDZ0IsU0FBUyxHQUFHLEVBQUUsR0FBR0QsQ0FBQyxDQUFDRSxLQUFLO1VBQ3hDbEQsT0FBTyxDQUFDbUQsS0FBSyxDQUFDN0ksa0RBQVMsQ0FBQzRGLE1BQU0sQ0FBQ2tELGFBQWEsR0FBRyxHQUFHLEdBQUc5SSxrREFBUyxDQUFDNEYsTUFBTSxDQUFDbUQsb0JBQW9CLEdBQUcsSUFBSSxFQUFFTCxDQUFDLENBQUM7UUFDdkc7TUFDRjtJQUNGO0VBQUM7SUFBQTFILEdBQUE7SUFBQUMsS0FBQSxFQUVELFNBQUFvSCxTQUFTQSxDQUFDOUcsR0FBRyxFQUFFO01BQ2JyQiw4Q0FBSyxDQUFDOEksS0FBSyxDQUFDekgsR0FBRyxDQUFDO0lBQ2xCO0VBQUM7SUFBQVAsR0FBQTtJQUFBQyxLQUFBLEVBRUQsU0FBQWdJLFNBQVNBLENBQUNDLElBQUksRUFBRTtNQUFBLElBQUF4SSxLQUFBO01BQ2QsSUFBSSxDQUFDNEcsT0FBTyxHQUFHLElBQUk7TUFFbkI2QixxQkFBcUIsQ0FBQyxVQUFBQyxJQUFJLEVBQUk7UUFDNUIsSUFBRzFJLEtBQUksQ0FBQzRHLE9BQU8sRUFBRTtVQUNmLElBQU0rQixXQUFXLEdBQUdELElBQUksR0FBR0UscUJBQUEsQ0FBSy9DLGNBQWMsRUFBbkI3RixLQUFrQixDQUFDO1VBRTlDQSxLQUFJLENBQUMrRyxVQUFVLEdBQUdULFFBQVEsQ0FBQ3VDLGlCQUFpQixJQUFJN0ksS0FBSSxDQUFDWSxNQUFNLElBQUkwRixRQUFRLENBQUN1QyxpQkFBaUIsSUFBSTdJLEtBQUksQ0FBQ3dHLFNBQVM7VUFFM0csSUFBR2xILGtEQUFTLENBQUNrQyxPQUFPLENBQUNzSCwyQkFBMkIsRUFBRTtZQUNoRHhKLGtEQUFTLENBQUNrQyxPQUFPLENBQUN1RyxXQUFXLEdBQUdnQixNQUFNLENBQUNDLGdCQUFnQixHQUFHMUosa0RBQVMsQ0FBQ2tDLE9BQU8sQ0FBQ3lILGdCQUFnQixDQUFDLENBQUM7VUFDaEcsQ0FBQyxNQUFNO1lBQ0wzSixrREFBUyxDQUFDa0MsT0FBTyxDQUFDdUcsV0FBVyxHQUFHLENBQUMsR0FBR3pJLGtEQUFTLENBQUNrQyxPQUFPLENBQUN5SCxnQkFBZ0I7VUFDeEU7VUFFQSxJQUFHakosS0FBSSxDQUFDb0csTUFBTSxHQUFHLENBQUMsSUFBSXVDLFdBQVcsR0FBRyxJQUFJLEdBQUczSSxLQUFJLENBQUNvRyxNQUFNLEVBQUU7WUFDdEQ1Ryw4Q0FBSyxDQUFDMEosT0FBTyxDQUFDbEosS0FBSSxDQUFDWSxNQUFNLENBQUM7WUFDMUJpRyxxQkFBQSxDQUFLaEIsY0FBYyxFQUFuQjdGLEtBQUksRUFBa0IwSSxJQUFKLENBQUM7WUFDbkIxSSxLQUFJLENBQUNRLElBQUksQ0FBQyxDQUFDO1VBQ2I7VUFFQVIsS0FBSSxDQUFDdUksU0FBUyxDQUFDQyxJQUFJLENBQUM7VUFDcEIsSUFBR0EsSUFBSSxFQUFFQSxJQUFJLENBQUMsQ0FBQztRQUNqQjtNQUNGLENBQUMsQ0FBQztJQUNKO0VBQUM7SUFBQWxJLEdBQUE7SUFBQUMsS0FBQSxFQUVELFNBQUE0SSxRQUFRQSxDQUFBLEVBQUc7TUFDVCxJQUFJLENBQUN2QyxPQUFPLEdBQUcsS0FBSztJQUN0QjtFQUFDO0lBQUF0RyxHQUFBO0lBQUFDLEtBQUEsRUFFRCxTQUFBNkksUUFBUUEsQ0FBQ0MsT0FBTyxFQUFFO01BQ2hCQSxPQUFPLENBQUMxQyxXQUFXLENBQUMsSUFBSSxDQUFDSCxTQUFTLENBQUM7SUFDckM7RUFBQztJQUFBbEcsR0FBQTtJQUFBQyxLQUFBLEVBRUQsU0FBQStJLE1BQU1BLENBQUNELE9BQU8sRUFBRTtNQUNkQSxPQUFPLENBQUNFLFdBQVcsQ0FBQyxJQUFJLENBQUMvQyxTQUFTLENBQUM7TUFDbkMsSUFBSSxDQUFDQSxTQUFTLENBQUMrQyxXQUFXLENBQUMsSUFBSSxDQUFDM0ksTUFBTSxDQUFDO0lBQ3pDO0VBQUM7SUFBQU4sR0FBQTtJQUFBQyxLQUFBLEVBRUQsU0FBQWlKLGdCQUFnQkEsQ0FBQSxFQUFHO01BQ2pCaEssOENBQUssQ0FBQ2dLLGdCQUFnQixDQUFDLElBQUksQ0FBQzVJLE1BQU0sRUFBRSxJQUFJLENBQUM0RixTQUFTLENBQUM7SUFDckQ7RUFBQztJQUFBbEcsR0FBQTtJQUFBQyxLQUFBLEVBRUQsU0FBQWtKLGNBQWNBLENBQUEsRUFBRztNQUNmakssOENBQUssQ0FBQ2lLLGNBQWMsQ0FBQyxJQUFJLENBQUM3SSxNQUFNLEVBQUUsSUFBSSxDQUFDNEYsU0FBUyxDQUFDO01BQ2pELElBQUksQ0FBQ1EsUUFBUSxHQUFHLENBQUMsSUFBSSxDQUFDQSxRQUFRO0lBQ2hDO0VBQUM7SUFBQTFHLEdBQUE7SUFBQUMsS0FBQSxFQUVELFNBQUE0RixVQUFVQSxDQUFBLEVBQUc7TUFDWDNHLDhDQUFLLENBQUNrSyxzQkFBc0IsQ0FBQyxJQUFJLENBQUM5SSxNQUFNLEVBQUUsSUFBSSxDQUFDNEYsU0FBUyxFQUFFLElBQUksQ0FBQ3pFLEtBQUssRUFBRSxJQUFJLENBQUNDLE1BQU0sQ0FBQztJQUNwRjtFQUFDO0lBQUExQixHQUFBO0lBQUFlLEdBQUEsRUFFRCxTQUFBQSxJQUFBLEVBQVE7TUFDTixPQUFPLENBQUM7SUFDVjtFQUFDO0lBQUFmLEdBQUE7SUFBQWUsR0FBQSxFQUVELFNBQUFBLElBQUEsRUFBUTtNQUNOLE9BQU8sQ0FBQztJQUNWO0VBQUM7SUFBQWYsR0FBQTtJQUFBZSxHQUFBLEVBRUQsU0FBQUEsSUFBQSxFQUFZO01BQ1YsT0FBTyxJQUFJLENBQUNULE1BQU0sR0FBR3BCLDhDQUFLLENBQUNtSyxjQUFjLENBQUMsSUFBSSxDQUFDL0ksTUFBTSxDQUFDLEdBQUdnSSxxQkFBQSxDQUFLN0MsTUFBTyxFQUFaLElBQVcsQ0FBQztJQUN2RSxDQUFDO0lBQUFULEdBQUEsRUFVRCxTQUFBQSxJQUFVdkQsS0FBSyxFQUFFO01BQ2YsSUFBR0EsS0FBSyxJQUFJNkcscUJBQUEsQ0FBSzdDLE1BQU8sRUFBWixJQUFXLENBQUMsRUFBRTtRQUN4QmMscUJBQUEsQ0FBS2QsTUFBTyxFQUFaLElBQUksRUFBV2hFLEtBQUosQ0FBQztRQUNaLElBQUksQ0FBQ25CLE1BQU0sQ0FBQ21CLEtBQUssR0FBR0EsS0FBSztRQUN6QixJQUFJLENBQUNtRSxLQUFLLElBQUksSUFBSSxDQUFDQSxLQUFLLENBQUNpQixPQUFPLENBQUN5QyxhQUFhLENBQUMsVUFBVSxFQUFFLElBQUksQ0FBQztNQUNsRTtJQUNGO0VBQUM7SUFBQXRKLEdBQUE7SUFBQWUsR0FBQSxFQWRELFNBQUFBLElBQUEsRUFBYTtNQUNYLE9BQU8sSUFBSSxDQUFDVCxNQUFNLEdBQUdwQiw4Q0FBSyxDQUFDcUssZUFBZSxDQUFDLElBQUksQ0FBQ2pKLE1BQU0sQ0FBQyxHQUFHZ0kscUJBQUEsQ0FBSzVDLE9BQVEsRUFBYixJQUFZLENBQUM7SUFDekUsQ0FBQztJQUFBVixHQUFBLEVBY0QsU0FBQUEsSUFBV3RELE1BQU0sRUFBRTtNQUNqQixJQUFHQSxNQUFNLElBQUk0RyxxQkFBQSxDQUFLNUMsT0FBUSxFQUFiLElBQVksQ0FBQyxFQUFFO1FBQzFCYSxxQkFBQSxDQUFLYixPQUFRLEVBQWIsSUFBSSxFQUFZaEUsTUFBSixDQUFDO1FBQ2IsSUFBSSxDQUFDcEIsTUFBTSxDQUFDb0IsTUFBTSxHQUFHQSxNQUFNO1FBQzNCLElBQUksQ0FBQ2tFLEtBQUssSUFBSSxJQUFJLENBQUNBLEtBQUssQ0FBQ2lCLE9BQU8sQ0FBQ3lDLGFBQWEsQ0FBQyxVQUFVLEVBQUUsSUFBSSxDQUFDO01BQ2xFO0lBQ0Y7RUFBQztJQUFBdEosR0FBQTtJQUFBZSxHQUFBLEVBbEJELFNBQUFBLElBQUEsRUFBWTtNQUNWLE9BQU8sSUFBSSxDQUFDVCxNQUFNLEdBQUcsSUFBSSxDQUFDQSxNQUFNLENBQUNiLEtBQUssR0FBRyxJQUFJO0lBQy9DO0VBQUM7SUFBQU8sR0FBQTtJQUFBZSxHQUFBLEVBc0JELFNBQUFBLElBQUEsRUFBYTtNQUNYLE9BQU8sSUFBSSxDQUFDVCxNQUFNLEdBQUcsSUFBSSxDQUFDQSxNQUFNLENBQUNiLEtBQUssQ0FBQytKLE1BQU0sR0FBRyxFQUFFO0lBQ3BELENBQUM7SUFBQXhFLEdBQUEsRUFORCxTQUFBQSxJQUFXd0UsTUFBTSxFQUFFO01BQ2pCLElBQUcsSUFBSSxDQUFDbEosTUFBTSxFQUFFLElBQUksQ0FBQ0EsTUFBTSxDQUFDYixLQUFLLENBQUMrSixNQUFNLEdBQUdBLE1BQU07SUFDbkQ7RUFBQztJQUFBeEosR0FBQTtJQUFBQyxLQUFBLEVBTUQsU0FBQU8sVUFBVUEsQ0FBQ0wsT0FBTyxFQUFFO01BQ2xCLE9BQU8sSUFBSSxDQUFDRyxNQUFNLEdBQUcsSUFBSSxDQUFDQSxNQUFNLENBQUNFLFVBQVUsQ0FBQ0wsT0FBTyxHQUFHQSxPQUFPLEdBQUcsSUFBSSxDQUFDLEdBQUcsSUFBSTtJQUM5RTtFQUFDO0lBQUFILEdBQUE7SUFBQUMsS0FBQSxFQUVELFNBQUE4RyxZQUFZQSxDQUFBLEVBQUc7TUFBQSxJQUFBMEMsTUFBQTtNQUNiLElBQUcsQ0FBQyxJQUFJLENBQUMzSSxJQUFJLElBQUksSUFBSSxDQUFDUixNQUFNLEVBQUU7UUFDNUIsQ0FBQyxXQUFXLEVBQUUsT0FBTyxFQUFFLFdBQVcsRUFBRSxTQUFTLEVBQUUsT0FBTyxDQUFDLENBQUNvSixPQUFPLENBQUMsVUFBQUMsU0FBUyxFQUFJO1VBQzNFRixNQUFJLENBQUNuSixNQUFNLENBQUNzSixnQkFBZ0IsQ0FBQ0QsU0FBUyxFQUFFLFVBQUFFLEtBQUssRUFBSTtZQUMvQyxJQUFNQyxhQUFhLEdBQUdMLE1BQUksQ0FBQ00sV0FBVyxDQUFDRixLQUFLLENBQUM7WUFDN0NKLE1BQUksQ0FBQ08sUUFBUSxDQUFDSCxLQUFLLEVBQUVGLFNBQVMsRUFBRUcsYUFBYSxDQUFDO1lBQzlDRCxLQUFLLENBQUNJLGNBQWMsQ0FBQyxDQUFDO1VBQ3hCLENBQUMsRUFBRSxLQUFLLENBQUM7UUFDWCxDQUFDLENBQUM7UUFFRixDQUFDLFlBQVksRUFBRSxXQUFXLEVBQUUsVUFBVSxDQUFDLENBQUNQLE9BQU8sQ0FBQyxVQUFBQyxTQUFTLEVBQUk7VUFDM0RGLE1BQUksQ0FBQ25KLE1BQU0sQ0FBQ3NKLGdCQUFnQixDQUFDRCxTQUFTLEVBQUUsVUFBQUUsS0FBSyxFQUFJO1lBQy9DLElBQU1LLGNBQWMsR0FBR0wsS0FBSyxDQUFDSyxjQUFjLENBQUMsQ0FBQyxDQUFDO1lBQzlDLElBQU1DLFFBQVEsR0FBR1YsTUFBSSxDQUFDTSxXQUFXLENBQUNHLGNBQWMsQ0FBQztZQUNqRFQsTUFBSSxDQUFDTyxRQUFRLENBQUNILEtBQUssRUFBRUYsU0FBUyxFQUFFUSxRQUFRLENBQUM7VUFDM0MsQ0FBQyxDQUFDO1FBQ0osQ0FBQyxDQUFDO1FBRUYsSUFBSSxDQUFDckosSUFBSSxHQUFHLElBQUk7TUFDbEI7SUFDRjtFQUFDO0lBQUFkLEdBQUE7SUFBQUMsS0FBQSxFQUVELFNBQUErSixRQUFRQSxDQUFDSCxLQUFLLEVBQUVGLFNBQVMsRUFBRVEsUUFBUSxFQUFFO01BQUEsSUFBQUMsTUFBQTtNQUNuQyxJQUFNNUcsVUFBVSxHQUFHLElBQUksQ0FBQzZHLHVCQUF1QixDQUFDRixRQUFRLENBQUMsQ0FBQyxDQUFDO01BQzNELElBQUksQ0FBQ3RELE9BQU8sQ0FBQ3lDLGFBQWEsQ0FBQ0ssU0FBUyxFQUFFRSxLQUFLLEVBQUUsS0FBSyxDQUFDLENBQUMsQ0FBQztNQUNyRFMsb0ZBQUEsQ0FBSTlHLFVBQVUsRUFBRStHLE9BQU8sQ0FBQyxDQUFDLENBQUNiLE9BQU8sQ0FBQyxVQUFBYyxTQUFTO1FBQUEsT0FBSUosTUFBSSxDQUFDdkQsT0FBTyxDQUFDNEQsc0JBQXNCLENBQUNkLFNBQVMsRUFBRWEsU0FBUyxFQUFFWCxLQUFLLEVBQUUsSUFBSSxDQUFDO01BQUEsRUFBQyxDQUFDLENBQUM7SUFDMUg7RUFBQztJQUFBN0osR0FBQTtJQUFBQyxLQUFBLEVBRUQsU0FBQTJKLGdCQUFnQkEsQ0FBQ0MsS0FBSyxFQUFFVyxTQUFTLEVBQUVFLFFBQVEsRUFBRTtNQUMzQyxJQUFJLENBQUM3RCxPQUFPLENBQUMrQyxnQkFBZ0IsQ0FBQ0MsS0FBSyxFQUFFVyxTQUFTLEVBQUVFLFFBQVEsQ0FBQztJQUMzRDtFQUFDO0lBQUExSyxHQUFBO0lBQUFDLEtBQUEsRUFFRCxTQUFBOEosV0FBV0EsQ0FBQ0YsS0FBSyxFQUFFO01BQ2pCLE9BQU8zSyw4Q0FBSyxDQUFDNkssV0FBVyxDQUFDLElBQUksQ0FBQ3pKLE1BQU0sRUFBRXVKLEtBQUssQ0FBQztJQUM5QztFQUFDO0lBQUE3SixHQUFBO0lBQUFDLEtBQUEsRUFFRCxTQUFBMEssZ0JBQWdCQSxDQUFBLEVBQXFCO01BQUEsSUFBcEJDLEtBQUssR0FBQXRILFNBQUEsQ0FBQUMsTUFBQSxRQUFBRCxTQUFBLFFBQUF1SCxTQUFBLEdBQUF2SCxTQUFBLE1BQUcsSUFBSSxDQUFDc0MsS0FBSztNQUNqQyxPQUFPLElBQUksQ0FBQ0EsS0FBSyxDQUFDK0UsZ0JBQWdCLENBQUNDLEtBQUssQ0FBQztJQUMzQztFQUFDO0lBQUE1SyxHQUFBO0lBQUFDLEtBQUEsRUFFRCxTQUFBb0ssdUJBQXVCQSxDQUFDUCxhQUFhLEVBQXNCO01BQUEsSUFBQWdCLE1BQUE7TUFBQSxJQUFwQkYsS0FBSyxHQUFBdEgsU0FBQSxDQUFBQyxNQUFBLFFBQUFELFNBQUEsUUFBQXVILFNBQUEsR0FBQXZILFNBQUEsTUFBRyxJQUFJLENBQUNzQyxLQUFLO01BQ3ZELElBQU1tRixhQUFhLEdBQUcsSUFBSSxDQUFDbkYsS0FBSyxDQUFDb0YsaUJBQWlCLENBQUNKLEtBQUssQ0FBQztNQUN6RCxJQUFNSyxNQUFNLEdBQUcsQ0FBQ0wsS0FBSyxDQUFDO01BRXRCLElBQUdHLGFBQWEsQ0FBQ0csTUFBTSxFQUFFO1FBQ3ZCSCxhQUFhLENBQUNHLE1BQU0sQ0FBQ0MsSUFBSSxDQUFDL0YsOENBQUssQ0FBQ2dHLGtCQUFrQixDQUFDLENBQUNiLE9BQU8sQ0FBQyxDQUFDLENBQUNjLElBQUksQ0FBQyxVQUFBQyxLQUFLLEVBQUk7VUFDMUUsSUFBR0EsS0FBSyxDQUFDZCxTQUFTLENBQUNlLFFBQVEsQ0FBQ3pCLGFBQWEsQ0FBQyxJQUFJLENBQUN3QixLQUFLLENBQUNkLFNBQVMsQ0FBQ3BLLE1BQU0sSUFBSSxDQUFDa0wsS0FBSyxDQUFDZCxTQUFTLENBQUNnQixRQUFRLEVBQUU7WUFDbEdQLE1BQU0sQ0FBQ1EsSUFBSSxDQUFBQyxLQUFBLENBQVhULE1BQU0sRUFBQVgsb0ZBQUEsQ0FBU1EsTUFBSSxDQUFDVCx1QkFBdUIsQ0FBQ1AsYUFBYSxFQUFFd0IsS0FBSyxDQUFDZCxTQUFTLENBQUMsRUFBQztZQUM1RSxPQUFPLElBQUk7VUFDYjtRQUNGLENBQUMsQ0FBQztNQUNKO01BRUEsT0FBT1MsTUFBTTtJQUNmO0VBQUM7QUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDN1BIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNvQztBQUNBO0FBQ1I7QUFDQTtBQUFBLElBRVBVLE1BQU0sMEJBQUF2TSxVQUFBO0VBR3pCLFNBQUF1TSxPQUFZdE0sQ0FBQyxFQUFFQyxDQUFDLEVBQUVtQyxLQUFLLEVBQUVoQyxLQUFLLEVBQUU7SUFBQSxJQUFBQyxLQUFBO0lBQUFDLGlGQUFBLE9BQUFnTSxNQUFBO0lBQzlCak0sS0FBQSxHQUFBRSxVQUFBLE9BQUErTCxNQUFBLEdBQU10TSxDQUFDLEVBQUVDLENBQUMsRUFBRW1DLEtBQUssRUFBRUEsS0FBSyxFQUFFaEMsS0FBSztJQUFFSSxpRkFBQSxDQUFBSCxLQUFBLGdCQUh0QixLQUFLO0lBQUEsT0FBQUEsS0FBQTtFQUlsQjtFQUFDSSwyRUFBQSxDQUFBNkwsTUFBQSxFQUFBdk0sVUFBQTtFQUFBLE9BQUFXLDhFQUFBLENBQUE0TCxNQUFBO0lBQUEzTCxHQUFBO0lBQUFDLEtBQUEsRUFFRCxTQUFBQyxJQUFJQSxDQUFDQyxPQUFPLEVBQUU7TUFDWixJQUFHLElBQUksQ0FBQ0MsTUFBTSxFQUFFO01BQ2hCQyxhQUFBLENBQUFzTCxNQUFBLG9CQUFXeEwsT0FBTztNQUVsQixJQUFNRyxNQUFNLEdBQUdILE9BQU8sQ0FBQ0csTUFBTTtNQUM3QixJQUFNQyxHQUFHLEdBQUdELE1BQU0sQ0FBQ0UsVUFBVSxDQUFDLElBQUksQ0FBQztNQUVuQ3RCLCtDQUFLLENBQUMwTSxVQUFVLENBQUNyTCxHQUFHLEVBQUUsSUFBSSxDQUFDbEIsQ0FBQyxFQUFFLElBQUksQ0FBQ0MsQ0FBQyxFQUFFLElBQUksQ0FBQ21DLEtBQUssRUFBRSxJQUFJLENBQUNoQyxLQUFLLENBQUNpQixTQUFTLEVBQUUsSUFBSSxDQUFDakIsS0FBSyxDQUFDbUIsS0FBSyxFQUFFLElBQUksQ0FBQ25CLEtBQUssQ0FBQ29CLE9BQU8sRUFBRSxJQUFJLENBQUNwQixLQUFLLENBQUNvTSxJQUFJLEVBQUUsSUFBSSxDQUFDcE0sS0FBSyxDQUFDcU0sU0FBUyxDQUFDO01BRXBKLElBQUksQ0FBQ2hMLElBQUksR0FBRyxJQUFJO0lBQ2xCO0VBQUM7SUFBQWQsR0FBQTtJQUFBZSxHQUFBLEVBRUQsU0FBQUEsSUFBQSxFQUFZO01BQ1YsT0FBT1YsYUFBQSxDQUFBc0wsTUFBQSxzQkFBYyxJQUFJLENBQUNsTSxLQUFLLENBQUNpQixTQUFTO0lBQzNDLENBQUM7SUFBQXNFLEdBQUEsRUFNRCxTQUFBQSxJQUFVdkQsS0FBSyxFQUFFO01BQ2Z3RCxhQUFBLENBQUEwRyxNQUFBLFdBQWNsSyxLQUFLO0lBQ3JCO0VBQUM7SUFBQXpCLEdBQUE7SUFBQWUsR0FBQSxFQU5ELFNBQUFBLElBQUEsRUFBYTtNQUNYLE9BQU9WLGFBQUEsQ0FBQXNMLE1BQUEsdUJBQWUsSUFBSSxDQUFDbE0sS0FBSyxDQUFDaUIsU0FBUztJQUM1QyxDQUFDO0lBQUFzRSxHQUFBLEVBTUQsU0FBQUEsSUFBV3RELE1BQU0sRUFBRTtNQUNqQnVELGFBQUEsQ0FBQTBHLE1BQUEsWUFBZWpLLE1BQU07SUFDdkI7RUFBQztJQUFBMUIsR0FBQTtJQUFBZSxHQUFBLEVBRUQsU0FBQUEsSUFBQSxFQUFtQjtNQUNqQixPQUFPLElBQUk5QiwrQ0FBSyxDQUFDO1FBQ2YsV0FBVyxFQUFFRCxrREFBUyxDQUFDa0MsT0FBTyxDQUFDNkssd0JBQXdCO1FBQ3ZELE9BQU8sRUFBRS9NLGtEQUFTLENBQUNrQyxPQUFPLENBQUM4SyxvQkFBb0I7UUFDL0MsTUFBTSxFQUFFaE4sa0RBQVMsQ0FBQ2tDLE9BQU8sQ0FBQytLLG1CQUFtQjtRQUM3QyxTQUFTLEVBQUVqTixrREFBUyxDQUFDa0MsT0FBTyxDQUFDZ0wsdUJBQXVCO1FBQ3BELFdBQVcsRUFBRWxOLGtEQUFTLENBQUNrQyxPQUFPLENBQUNpTDtNQUNqQyxDQUFDLENBQUM7SUFDSjtFQUFDO0FBQUEsRUEzQ2lDcE4sa0RBQVM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDdkI3QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDb0M7QUFDQTtBQUNSO0FBQ1E7QUFBQSxJQUFBc04sWUFBQSxvQkFBQTdHLE9BQUE7QUFBQSxJQUFBOEcsV0FBQSxvQkFBQTlHLE9BQUE7QUFBQSxJQUVmK0csR0FBRywwQkFBQUMsVUFBQTtFQUt0QixTQUFBRCxJQUFZbE4sQ0FBQyxFQUFFQyxDQUFDLEVBQUU2RCxRQUFRLEVBQUVDLFNBQVMsRUFBRTNELEtBQUssRUFBaUI7SUFBQSxJQUFBQyxLQUFBO0lBQUFDLGlGQUFBLE9BQUE0TSxHQUFBO0lBQUEsU0FBQWxKLElBQUEsR0FBQUMsU0FBQSxDQUFBQyxNQUFBLEVBQVpDLFVBQVUsT0FBQUMsS0FBQSxDQUFBSixJQUFBLE9BQUFBLElBQUEsV0FBQUssSUFBQSxNQUFBQSxJQUFBLEdBQUFMLElBQUEsRUFBQUssSUFBQTtNQUFWRixVQUFVLENBQUFFLElBQUEsUUFBQUosU0FBQSxDQUFBSSxJQUFBO0lBQUE7SUFDekRoRSxLQUFBLEdBQUFFLFVBQUEsT0FBQTJNLEdBQUEsR0FBTWxOLENBQUMsRUFBRUMsQ0FBQyxFQUFFNkQsUUFBUSxFQUFFQyxTQUFTLEVBQUUzRCxLQUFLLEVBQUFrRSxNQUFBLENBQUtILFVBQVU7SUFBRTNELGlGQUFBLENBQUFILEtBQUEsZ0JBTDVDLEtBQUs7SUFDbEJxRywwQkFBQSxDQUFBckcsS0FBQSxFQUFBMk0sWUFBYSxFQUFHLENBQUM7SUFDakJ0RywwQkFBQSxDQUFBckcsS0FBQSxFQUFBNE0sV0FBWSxFQUFHLENBQUM7SUFLZCxJQUFHLENBQUN0TixtREFBUyxDQUFDa0MsT0FBTyxDQUFDdUwsa0NBQWtDLEVBQUU7TUFDeEQvTSxLQUFBLENBQUtnTixnQkFBZ0IsQ0FBQyxDQUFDO01BQ3ZCaE4sS0FBQSxDQUFLaU4saUJBQWlCLENBQUMsQ0FBQztNQUV4QmpOLEtBQUEsQ0FBS2tOLGVBQWUsQ0FBQyxZQUFNO1FBQ3pCbE4sS0FBQSxDQUFLZ04sZ0JBQWdCLENBQUMsQ0FBQztRQUN2QmhOLEtBQUEsQ0FBS2lOLGlCQUFpQixDQUFDLENBQUM7TUFDMUIsQ0FBQyxDQUFDO0lBQ0o7SUFBQyxPQUFBak4sS0FBQTtFQUNIO0VBQUNJLDJFQUFBLENBQUF5TSxHQUFBLEVBQUFDLFVBQUE7RUFBQSxPQUFBek0sOEVBQUEsQ0FBQXdNLEdBQUE7SUFBQXZNLEdBQUE7SUFBQUMsS0FBQSxFQUVELFNBQUFDLElBQUlBLENBQUNDLE9BQU8sRUFBRTtNQUFBLElBQUFzSixNQUFBO01BQ1osSUFBRyxJQUFJLENBQUNySixNQUFNLEVBQUU7TUFDaEJDLGFBQUEsQ0FBQWtNLEdBQUEsb0JBQVdwTSxPQUFPO01BRWxCLElBQU1HLE1BQU0sR0FBR0gsT0FBTyxDQUFDRyxNQUFNO01BQzdCLElBQU1DLEdBQUcsR0FBR0QsTUFBTSxDQUFDRSxVQUFVLENBQUMsSUFBSSxDQUFDO01BQ25DRCxHQUFHLENBQUNvQixJQUFJLENBQUMsQ0FBQztNQUVWLElBQUlrTCxPQUFPLEdBQUd0TSxHQUFHO01BRWpCLElBQUcsSUFBSSxDQUFDdU0sU0FBUyxFQUFFO1FBQ2pCRCxPQUFPLEdBQUcsSUFBSSxDQUFDRSxTQUFTLENBQUN2TSxVQUFVLENBQUMsSUFBSSxDQUFDO1FBQ3pDcU0sT0FBTyxDQUFDckYsS0FBSyxDQUFDeEksbURBQVMsQ0FBQ2tDLE9BQU8sQ0FBQ3VHLFdBQVcsRUFBRXpJLG1EQUFTLENBQUNrQyxPQUFPLENBQUN1RyxXQUFXLENBQUM7TUFDN0U7TUFFQSxJQUFHcEgsYUFBQSxDQUFBa00sR0FBQSw0QkFBb0IsSUFBSSxFQUFFO1FBQzNCLElBQUlTLFFBQVEsR0FBRyxJQUFJLENBQUN2TixLQUFLLENBQUNvRSxPQUFPO1FBRWpDeEQsYUFBQSxDQUFBa00sR0FBQSx5QkFBaUI3QyxPQUFPLENBQUMsVUFBQWMsU0FBUyxFQUFJO1VBQ3BDd0MsUUFBUSxHQUFHdkQsTUFBSSxDQUFDd0QsYUFBYSxDQUFDekMsU0FBUyxFQUFFd0MsUUFBUSxFQUFFSCxPQUFPLENBQUM7UUFDN0QsQ0FBQyxDQUFDO01BQ0o7TUFFQSxJQUFHLElBQUksQ0FBQ0MsU0FBUyxFQUFFO1FBQ2pCNU4sOENBQUssQ0FBQ2dPLGFBQWEsQ0FBQzNNLEdBQUcsRUFBRSxJQUFJLENBQUN3TSxTQUFTLEVBQUUsSUFBSSxDQUFDMU4sQ0FBQyxFQUFFLElBQUksQ0FBQ0MsQ0FBQyxFQUFFLElBQUksQ0FBQ21DLEtBQUssRUFBRSxJQUFJLENBQUNDLE1BQU0sRUFBRSxJQUFJLENBQUNyQyxDQUFDLEdBQUdMLG1EQUFTLENBQUNrQyxPQUFPLENBQUN1RyxXQUFXLEVBQUUsSUFBSSxDQUFDbkksQ0FBQyxHQUFHTixtREFBUyxDQUFDa0MsT0FBTyxDQUFDdUcsV0FBVyxFQUFFLElBQUksQ0FBQ2hHLEtBQUssR0FBR3pDLG1EQUFTLENBQUNrQyxPQUFPLENBQUN1RyxXQUFXLEVBQUUsSUFBSSxDQUFDL0YsTUFBTSxHQUFHMUMsbURBQVMsQ0FBQ2tDLE9BQU8sQ0FBQ3VHLFdBQVcsQ0FBQztNQUM1UDtNQUVBcEgsYUFBQSxDQUFBa00sR0FBQSw4QkFBcUJoTSxHQUFHO01BRXhCQSxHQUFHLENBQUN1QixPQUFPLENBQUMsQ0FBQztJQUNmO0VBQUM7SUFBQTlCLEdBQUE7SUFBQUMsS0FBQSxFQUVELFNBQUFnTixhQUFhQSxDQUFDekMsU0FBUyxFQUFFd0MsUUFBUSxFQUFFek0sR0FBRyxFQUFFO01BQ3RDLElBQUdpSyxTQUFTLFlBQVl6TCxrREFBUyxFQUFFO1FBQ2pDeUwsU0FBUyxDQUFDbkwsQ0FBQyxHQUFHLElBQUksQ0FBQ0ksS0FBSyxDQUFDb0UsT0FBTyxHQUFHLElBQUksQ0FBQ3NKLGFBQWE7UUFDckQzQyxTQUFTLENBQUNsTCxDQUFDLEdBQUcwTixRQUFRLEdBQUcsSUFBSSxDQUFDSSxhQUFhO1FBRTNDLElBQUcsQ0FBQzVDLFNBQVMsQ0FBQ3BLLE1BQU0sRUFBRTtVQUNwQixJQUFHLElBQUksQ0FBQ2lOLGtCQUFrQixDQUFDN0MsU0FBUyxDQUFDLEVBQUU7WUFDckNBLFNBQVMsQ0FBQ3RLLElBQUksQ0FBQ0ssR0FBRyxDQUFDO1VBQ3JCO1VBRUF5TSxRQUFRLElBQUl4QyxTQUFTLENBQUM5SSxNQUFNLEdBQUcsSUFBSSxDQUFDakMsS0FBSyxDQUFDNk4sc0JBQXNCO1FBQ2xFO01BQ0Y7TUFFQSxPQUFPTixRQUFRO0lBQ2pCO0VBQUM7SUFBQWhOLEdBQUE7SUFBQUMsS0FBQSxFQUVELFNBQUEwTSxpQkFBaUJBLENBQUEsRUFBRztNQUNsQixJQUFJWSxXQUFXLEdBQUcsQ0FBQztNQUNuQmxOLGFBQUEsQ0FBQWtNLEdBQUEseUJBQWlCN0MsT0FBTyxDQUFDLFVBQUFjLFNBQVMsRUFBSTtRQUFFLElBQUcsQ0FBQ0EsU0FBUyxDQUFDcEssTUFBTSxFQUFFbU4sV0FBVyxJQUFJL0MsU0FBUyxDQUFDOUksTUFBTTtNQUFFLENBQUMsQ0FBQztNQUNqRzZFLHFCQUFBLENBQUs4RixZQUFhLEVBQWxCLElBQUksRUFBaUJrQixXQUFXLEdBQUcsSUFBSSxDQUFDOU4sS0FBSyxDQUFDNk4sc0JBQXNCLElBQUlqTixhQUFBLENBQUFrTSxHQUFBLHlCQUFpQmhKLE1BQU0sR0FBRyxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUM5RCxLQUFLLENBQUNvRSxPQUFqRyxDQUFDO0lBQ3BCO0VBQUM7SUFBQTdELEdBQUE7SUFBQUMsS0FBQSxFQUVELFNBQUF5TSxnQkFBZ0JBLENBQUEsRUFBRztNQUNqQixJQUFJdkosUUFBUSxHQUFHLENBQUM7TUFDaEI5QyxhQUFBLENBQUFrTSxHQUFBLHlCQUFpQjdDLE9BQU8sQ0FBQyxVQUFBYyxTQUFTLEVBQUk7UUFBRSxJQUFHQSxTQUFTLENBQUMvSSxLQUFLLEdBQUcwQixRQUFRLElBQUksQ0FBQ3FILFNBQVMsQ0FBQ3BLLE1BQU0sRUFBRStDLFFBQVEsR0FBR3FILFNBQVMsQ0FBQy9JLEtBQUs7TUFBRSxDQUFDLENBQUM7TUFDMUg4RSxxQkFBQSxDQUFLK0YsV0FBWSxFQUFqQixJQUFJLEVBQWdCbkosUUFBUSxHQUFHLElBQUksQ0FBQzFELEtBQUssQ0FBQ29FLE9BQTFCLENBQUM7SUFDbkI7RUFBQztJQUFBN0QsR0FBQTtJQUFBZSxHQUFBLEVBRUQsU0FBQUEsSUFBQSxFQUFrQjtNQUNoQixJQUFHL0IsbURBQVMsQ0FBQ2tDLE9BQU8sQ0FBQ3VMLGtDQUFrQyxFQUFFLElBQUksQ0FBQ0UsaUJBQWlCLENBQUMsQ0FBQztNQUNqRixPQUFPckUscUJBQUEsQ0FBSytELFlBQWEsRUFBbEIsSUFBaUIsQ0FBQztJQUMzQjtFQUFDO0lBQUFyTSxHQUFBO0lBQUFlLEdBQUEsRUFFRCxTQUFBQSxJQUFBLEVBQWlCO01BQ2YsSUFBRy9CLG1EQUFTLENBQUNrQyxPQUFPLENBQUN1TCxrQ0FBa0MsRUFBRSxJQUFJLENBQUNDLGdCQUFnQixDQUFDLENBQUM7TUFDaEYsT0FBT3BFLHFCQUFBLENBQUtnRSxXQUFZLEVBQWpCLElBQWdCLENBQUM7SUFDMUI7RUFBQztJQUFBdE0sR0FBQTtJQUFBZSxHQUFBLEVBRUQsU0FBQUEsSUFBQSxFQUFZO01BQ1YsSUFBTVUsS0FBSyxHQUFHLElBQUksQ0FBQytMLFVBQVUsSUFBSyxJQUFJLENBQUNqRyxNQUFNLElBQUksSUFBSSxDQUFDQSxNQUFNLENBQUM5RixLQUFNO01BQ25FLElBQU1nTSxHQUFHLEdBQUcsSUFBSSxDQUFDdEssUUFBUSxJQUFJLElBQUksR0FBR25DLElBQUksQ0FBQ3lNLEdBQUcsQ0FBQyxJQUFJLENBQUN0SyxRQUFRLEVBQUUxQixLQUFLLENBQUMsR0FBRyxJQUFJO01BQ3pFLE9BQU8sSUFBSSxDQUFDeUQsUUFBUSxJQUFJLElBQUksR0FBR2xFLElBQUksQ0FBQzBNLEdBQUcsQ0FBQyxJQUFJLENBQUN4SSxRQUFRLEVBQUV1SSxHQUFHLElBQUksSUFBSSxHQUFHQSxHQUFHLEdBQUdoTSxLQUFLLENBQUMsR0FBR2dNLEdBQUcsSUFBSSxJQUFJLEdBQUdBLEdBQUcsR0FBR2hNLEtBQUs7SUFDL0c7RUFBQztJQUFBekIsR0FBQTtJQUFBZSxHQUFBLEVBRUQsU0FBQUEsSUFBQSxFQUFhO01BQ1gsSUFBTVcsTUFBTSxHQUFHLElBQUksQ0FBQ2lNLFdBQVcsSUFBSyxJQUFJLENBQUNwRyxNQUFNLElBQUksSUFBSSxDQUFDQSxNQUFNLENBQUM3RixNQUFPO01BQ3RFLElBQU0rTCxHQUFHLEdBQUcsSUFBSSxDQUFDckssU0FBUyxJQUFJLElBQUksR0FBR3BDLElBQUksQ0FBQ3lNLEdBQUcsQ0FBQyxJQUFJLENBQUNySyxTQUFTLEVBQUUxQixNQUFNLENBQUMsR0FBRyxJQUFJO01BQzVFLE9BQU8sSUFBSSxDQUFDeUQsU0FBUyxJQUFJLElBQUksR0FBR25FLElBQUksQ0FBQzBNLEdBQUcsQ0FBQyxJQUFJLENBQUN2SSxTQUFTLEVBQUVzSSxHQUFHLElBQUksSUFBSSxHQUFHQSxHQUFHLEdBQUcvTCxNQUFNLENBQUMsR0FBRytMLEdBQUcsSUFBSSxJQUFJLEdBQUdBLEdBQUcsR0FBRy9MLE1BQU07SUFDbkg7RUFBQztJQUFBMUIsR0FBQTtJQUFBZSxHQUFBLEVBRUQsU0FBQUEsSUFBQSxFQUFtQjtNQUNqQixPQUFBVixhQUFBLENBQUFrTSxHQUFBO0lBQ0Y7RUFBQztBQUFBLEVBeEc4Qkgsa0RBQVM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDdkIxQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDb0M7QUFDUjtBQUNJO0FBQUEsSUFBQTNHLE1BQUEsb0JBQUFELE9BQUE7QUFBQSxJQUFBRSxPQUFBLG9CQUFBRixPQUFBO0FBQUEsSUFBQXFJLEVBQUEsb0JBQUFySSxPQUFBO0FBQUEsSUFBQXNJLEVBQUEsb0JBQUF0SSxPQUFBO0FBQUEsSUFBQXVJLFNBQUEsb0JBQUF2SSxPQUFBO0FBQUEsSUFBQXdJLFNBQUEsb0JBQUF4SSxPQUFBO0FBQUEsSUFBQXlJLE1BQUEsb0JBQUF6SSxPQUFBO0FBQUEsSUFFWHpHLFNBQVM7RUFVNUIsU0FBQUEsVUFBWU0sQ0FBQyxFQUFFQyxDQUFDLEVBQUVtQyxLQUFLLEVBQUVDLE1BQU0sRUFBRWpDLEtBQUssRUFBRTtJQUFBLElBQUFDLEtBQUE7SUFBQUMsaUZBQUEsT0FBQVosU0FBQTtJQUFBYyxpRkFBQSxxQkFUM0IsSUFBSTtJQUNqQmtHLDBCQUFBLE9BQUFOLE1BQU8sRUFBRyxDQUFDO0lBQ1hNLDBCQUFBLE9BQUFMLE9BQVEsRUFBRyxDQUFDO0lBQ1pLLDBCQUFBLE9BQUE4SCxFQUFHLEVBQUcsQ0FBQztJQUNQOUgsMEJBQUEsT0FBQStILEVBQUcsRUFBRyxDQUFDO0lBQ1AvSCwwQkFBQSxPQUFBZ0ksU0FBVSxFQUFHLEtBQUs7SUFDbEJoSSwwQkFBQSxPQUFBaUksU0FBVSxFQUFHLEtBQUs7SUFDbEJqSSwwQkFBQSxPQUFBa0ksTUFBTztJQUdMMUgscUJBQUEsQ0FBS3NILEVBQUcsRUFBUixJQUFJLEVBQU94TyxDQUFDLElBQUksQ0FBVCxDQUFDO0lBQ1JrSCxxQkFBQSxDQUFLdUgsRUFBRyxFQUFSLElBQUksRUFBT3hPLENBQUMsSUFBSSxDQUFULENBQUM7SUFDUixJQUFJLENBQUM0TyxNQUFNLEdBQUcsQ0FBQztJQUNmLElBQUksQ0FBQ0MsTUFBTSxHQUFHLENBQUM7SUFDZjVILHFCQUFBLENBQUtkLE1BQU8sRUFBWixJQUFJLEVBQVdoRSxLQUFKLENBQUM7SUFDWjhFLHFCQUFBLENBQUtiLE9BQVEsRUFBYixJQUFJLEVBQVloRSxNQUFKLENBQUM7SUFDYixJQUFJLENBQUNwQixNQUFNO0lBQ1gsSUFBSSxDQUFDaUgsTUFBTTs7SUFFWDtJQUNBLElBQUksQ0FBQzlILEtBQUssR0FBR0EsS0FBSzs7SUFFbEI7SUFDQSxJQUFJLENBQUNvSCxPQUFPLEdBQUcsSUFBSStHLGdEQUFPLENBQUMsQ0FBQztJQUM1QixJQUFJLENBQUMvRyxPQUFPLENBQUNDLGFBQWEsQ0FBQyxTQUFTLENBQUM7SUFDckMsSUFBSSxDQUFDRCxPQUFPLENBQUNDLGFBQWEsQ0FBQyxTQUFTLENBQUM7SUFDckMsSUFBSSxDQUFDRCxPQUFPLENBQUNDLGFBQWEsQ0FBQyxRQUFRLENBQUM7SUFDcEMsSUFBSSxDQUFDRCxPQUFPLENBQUNDLGFBQWEsQ0FBQyxVQUFVLENBQUM7SUFDdEMsSUFBSSxDQUFDRCxPQUFPLENBQUNDLGFBQWEsQ0FBQyxRQUFRLENBQUM7SUFDcEMsSUFBSSxDQUFDRCxPQUFPLENBQUNDLGFBQWEsQ0FBQyxNQUFNLENBQUM7SUFDbEMsSUFBSSxDQUFDRCxPQUFPLENBQUNDLGFBQWEsQ0FBQyxVQUFVLENBQUM7O0lBRXRDO0lBQ0EsSUFBSSxDQUFDaEcsSUFBSSxHQUFHLEtBQUs7SUFDakIsSUFBSSxDQUFDc04sYUFBYSxHQUFHLEtBQUs7SUFDMUI3SCxxQkFBQSxDQUFLeUgsU0FBVSxFQUFmLElBQUksRUFBYyxLQUFKLENBQUM7SUFDZixJQUFJLENBQUM1TCxPQUFPLEdBQUcsS0FBSztJQUNwQixJQUFJLENBQUNELE9BQU8sR0FBRyxLQUFLO0lBQ3BCb0UscUJBQUEsQ0FBS3dILFNBQVUsRUFBZixJQUFJLEVBQWMsS0FBSixDQUFDO0lBQ2YsSUFBSSxDQUFDTSxPQUFPLEdBQUcsS0FBSztJQUNwQixJQUFJLENBQUNDLE1BQU0sR0FBRyxLQUFLOztJQUVuQjtJQUNBLElBQUksQ0FBQ25CLGFBQWEsR0FBRyxDQUFDO0lBQ3RCLElBQUksQ0FBQ0MsYUFBYSxHQUFHLENBQUM7O0lBRXRCO0lBQ0EsSUFBSSxDQUFDbUIsV0FBVyxHQUFHLENBQUM7SUFDcEIsSUFBSSxDQUFDQyxXQUFXLEdBQUcsQ0FBQztJQUNwQixJQUFJLENBQUNDLGVBQWUsR0FBRyxDQUFDO0lBQ3hCLElBQUksQ0FBQ0MsZUFBZSxHQUFHLENBQUM7O0lBRXhCO0lBQ0EsSUFBSSxDQUFDQyxnQkFBZ0IsR0FBRyxDQUFDO0lBQ3pCLElBQUksQ0FBQ0MsZ0JBQWdCLEdBQUcsQ0FBQztJQUN6QixJQUFJLENBQUNDLHdCQUF3QixHQUFHLENBQUM7SUFFakMsSUFBSSxDQUFDQyxPQUFPO0lBQ1osSUFBSSxDQUFDQyxVQUFVLENBQUMsQ0FBQztJQUVqQixJQUFJLENBQUNDLGFBQWEsQ0FBQyxVQUFDZCxNQUFNLEVBQUVDLE1BQU0sRUFBSztNQUNyQyxJQUFHek8sS0FBSSxDQUFDMk8sT0FBTyxJQUFJLENBQUMzTyxLQUFJLENBQUM4TCxRQUFRLElBQUk5TCxLQUFJLENBQUMwQyxPQUFPLEVBQUU7UUFDakQxQyxLQUFJLENBQUN3TyxNQUFNLElBQUlBLE1BQU07UUFDckJ4TyxLQUFJLENBQUN5TyxNQUFNLElBQUlBLE1BQU07TUFDdkI7SUFDRixDQUFDLENBQUM7RUFDSjtFQUFDLE9BQUFwTyw4RUFBQSxDQUFBaEIsU0FBQTtJQUFBaUIsR0FBQTtJQUFBQyxLQUFBLEVBRUQsU0FBQThPLFVBQVVBLENBQUEsRUFBRztNQUFBLElBQUF0RixNQUFBO01BQ1gsSUFBRyxDQUFDLElBQUksQ0FBQzJFLGFBQWEsSUFBSSxJQUFJLENBQUM5TixNQUFNLElBQUksSUFBSSxFQUFFO1FBQzdDLElBQUksQ0FBQ0EsTUFBTSxDQUFDc0osZ0JBQWdCLENBQUMsV0FBVyxFQUFFLElBQUksRUFBRSxVQUFDQyxLQUFLLEVBQUVvQixNQUFNLEVBQUs7VUFDakUsSUFBRyxDQUFDeEIsTUFBSSxDQUFDK0IsUUFBUSxFQUFFO1lBQ2pCLElBQU0xQixhQUFhLEdBQUdMLE1BQUksQ0FBQ00sV0FBVyxDQUFDRixLQUFLLENBQUM7WUFDN0NKLE1BQUksQ0FBQzZFLE1BQU0sR0FBRyxLQUFLO1lBRW5CLElBQUc3RSxNQUFJLENBQUNySCxPQUFPLEVBQUU7Y0FDZixJQUFNOEwsTUFBTSxHQUFHekUsTUFBSSxDQUFDZ0YsZUFBZSxHQUFHM0UsYUFBYSxDQUFDekssQ0FBQztjQUNyRCxJQUFNOE8sTUFBTSxHQUFHMUUsTUFBSSxDQUFDaUYsZUFBZSxHQUFHNUUsYUFBYSxDQUFDeEssQ0FBQztjQUVyRG1LLE1BQUksQ0FBQzhFLFdBQVcsSUFBSUwsTUFBTTtjQUMxQnpFLE1BQUksQ0FBQytFLFdBQVcsSUFBSUwsTUFBTTtjQUUxQixJQUFHMUUsTUFBSSxDQUFDNUMsT0FBTyxFQUFFO2dCQUNmNEMsTUFBSSxDQUFDNUMsT0FBTyxDQUFDeUMsYUFBYSxDQUFDLFFBQVEsRUFBRTRFLE1BQU0sRUFBRUMsTUFBTSxFQUFFckUsYUFBYSxDQUFDO2NBQ3JFO2NBRUFMLE1BQUksQ0FBQ2dGLGVBQWUsR0FBRzNFLGFBQWEsQ0FBQ3pLLENBQUM7Y0FDdENvSyxNQUFJLENBQUNpRixlQUFlLEdBQUc1RSxhQUFhLENBQUN4SyxDQUFDO2NBQ3RDLElBQUdtSyxNQUFJLENBQUM0RSxPQUFPLEVBQUU1RSxNQUFJLENBQUM2RSxNQUFNLEdBQUcsSUFBSTtZQUNyQztZQUVBLElBQUdyRCxNQUFNLEVBQUU7Y0FDVCxJQUFHeEIsTUFBSSxDQUFDNUMsT0FBTyxJQUFJLENBQUM0QyxNQUFJLENBQUMrQixRQUFRLEVBQUU7Z0JBQ2pDL0IsTUFBSSxDQUFDNUMsT0FBTyxDQUFDeUMsYUFBYSxDQUFDLFNBQVMsRUFBRVEsYUFBYSxDQUFDO2NBQ3REO2NBRUEsSUFBR0wsTUFBSSxDQUFDcUYsT0FBTyxFQUFFO2dCQUNmckYsTUFBSSxDQUFDcUYsT0FBTyxDQUFDelAsQ0FBQyxHQUFHeUssYUFBYSxDQUFDekssQ0FBQyxHQUFHLEVBQUU7Z0JBQ3JDb0ssTUFBSSxDQUFDcUYsT0FBTyxDQUFDeFAsQ0FBQyxHQUFHd0ssYUFBYSxDQUFDeEssQ0FBQyxHQUFHLEVBQUU7Z0JBQ3JDbUssTUFBSSxDQUFDcUYsT0FBTyxDQUFDRyxNQUFNLENBQUMsQ0FBQztjQUN2QjtjQUVBeEYsTUFBSSxDQUFDdEgsT0FBTyxHQUFHLElBQUk7WUFDckIsQ0FBQyxNQUFNO2NBQ0xzSCxNQUFJLENBQUN0SCxPQUFPLEdBQUcsS0FBSztjQUNwQixJQUFHc0gsTUFBSSxDQUFDcUYsT0FBTyxFQUFFckYsTUFBSSxDQUFDcUYsT0FBTyxDQUFDSSxPQUFPLENBQUMsQ0FBQztZQUN6QztVQUNGLENBQUMsTUFBTTtZQUNMekYsTUFBSSxDQUFDdEgsT0FBTyxHQUFHLEtBQUs7WUFDcEJzSCxNQUFJLENBQUNySCxPQUFPLEdBQUcsS0FBSztZQUNwQixJQUFHcUgsTUFBSSxDQUFDcUYsT0FBTyxFQUFFckYsTUFBSSxDQUFDcUYsT0FBTyxDQUFDSSxPQUFPLENBQUMsQ0FBQztVQUN6QztRQUNGLENBQUMsQ0FBQztRQUVGLElBQUksQ0FBQzVPLE1BQU0sQ0FBQ3NKLGdCQUFnQixDQUFDLE9BQU8sRUFBRSxJQUFJLEVBQUUsVUFBQ0MsS0FBSyxFQUFFb0IsTUFBTSxFQUFLO1VBQzdELElBQUcsQ0FBQ3hCLE1BQUksQ0FBQytCLFFBQVEsRUFBRTtZQUNqQixJQUFNMUIsYUFBYSxHQUFHTCxNQUFJLENBQUNNLFdBQVcsQ0FBQ0YsS0FBSyxDQUFDO1lBRTdDLElBQUdvQixNQUFNLElBQUl4QixNQUFJLENBQUN0SCxPQUFPLEVBQUU7Y0FDekIsSUFBRyxDQUFDc0gsTUFBSSxDQUFDNkUsTUFBTSxFQUFFO2dCQUNmLElBQUc3RSxNQUFJLENBQUM1QyxPQUFPLEVBQUU7a0JBQ2Y0QyxNQUFJLENBQUM1QyxPQUFPLENBQUN5QyxhQUFhLENBQUMsU0FBUyxFQUFFUSxhQUFhLENBQUM7Z0JBQ3REO2dCQUVBTCxNQUFJLENBQUMzRyxRQUFRLEdBQUcsSUFBSTtjQUN0QixDQUFDLE1BQU07Z0JBQ0wyRyxNQUFJLENBQUM2RSxNQUFNLEdBQUcsS0FBSztjQUNyQjtZQUNGLENBQUMsTUFBTTtjQUNMN0UsTUFBSSxDQUFDckgsT0FBTyxHQUFHLEtBQUs7Y0FDcEJxSCxNQUFJLENBQUMzRyxRQUFRLEdBQUcsS0FBSztZQUN2QjtVQUNGLENBQUMsTUFBTTtZQUNMMkcsTUFBSSxDQUFDdEgsT0FBTyxHQUFHLEtBQUs7WUFDcEJzSCxNQUFJLENBQUNySCxPQUFPLEdBQUcsS0FBSztVQUN0QjtRQUNGLENBQUMsQ0FBQztRQUVGLElBQUksQ0FBQzlCLE1BQU0sQ0FBQ3NKLGdCQUFnQixDQUFDLFdBQVcsRUFBRSxJQUFJLEVBQUUsVUFBQ0MsS0FBSyxFQUFFb0IsTUFBTSxFQUFLO1VBQ2pFLElBQUcsQ0FBQ3hCLE1BQUksQ0FBQytCLFFBQVEsRUFBRTtZQUNqQixJQUFNMUIsYUFBYSxHQUFHTCxNQUFJLENBQUNNLFdBQVcsQ0FBQ0YsS0FBSyxDQUFDO1lBRTdDLElBQUdvQixNQUFNLElBQUksQ0FBQ3hCLE1BQUksQ0FBQzZFLE1BQU0sRUFBRTtjQUN6QixJQUFHN0UsTUFBSSxDQUFDNUMsT0FBTyxFQUFFO2dCQUNmNEMsTUFBSSxDQUFDNUMsT0FBTyxDQUFDeUMsYUFBYSxDQUFDLFFBQVEsRUFBRVEsYUFBYSxDQUFDO2NBQ3JEO2NBRUFMLE1BQUksQ0FBQ3JILE9BQU8sR0FBRyxJQUFJO2NBQ25CcUgsTUFBSSxDQUFDZ0YsZUFBZSxHQUFHM0UsYUFBYSxDQUFDekssQ0FBQztjQUN0Q29LLE1BQUksQ0FBQ2lGLGVBQWUsR0FBRzVFLGFBQWEsQ0FBQ3hLLENBQUM7WUFDeEM7VUFDRixDQUFDLE1BQU07WUFDTG1LLE1BQUksQ0FBQ3RILE9BQU8sR0FBRyxLQUFLO1lBQ3BCc0gsTUFBSSxDQUFDckgsT0FBTyxHQUFHLEtBQUs7VUFDdEI7UUFDRixDQUFDLENBQUM7UUFFRixJQUFJLENBQUM5QixNQUFNLENBQUNzSixnQkFBZ0IsQ0FBQyxTQUFTLEVBQUUsSUFBSSxFQUFFLFVBQUNDLEtBQUssRUFBSztVQUN2RCxJQUFHLENBQUNKLE1BQUksQ0FBQytCLFFBQVEsRUFBRTtZQUNqQixJQUFNMUIsYUFBYSxHQUFHTCxNQUFJLENBQUNNLFdBQVcsQ0FBQ0YsS0FBSyxDQUFDO1lBRTdDLElBQUdKLE1BQUksQ0FBQzVDLE9BQU8sRUFBRTtjQUNmNEMsTUFBSSxDQUFDNUMsT0FBTyxDQUFDeUMsYUFBYSxDQUFDLE1BQU0sRUFBRVEsYUFBYSxDQUFDO1lBQ25EO1lBRUFMLE1BQUksQ0FBQ3JILE9BQU8sR0FBRyxLQUFLO1VBQ3RCO1FBQ0YsQ0FBQyxDQUFDO1FBRUYsSUFBSSxDQUFDOUIsTUFBTSxDQUFDc0osZ0JBQWdCLENBQUMsT0FBTyxFQUFFLElBQUksRUFBRSxVQUFDQyxLQUFLLEVBQUs7VUFDckQsSUFBR0osTUFBSSxDQUFDdEgsT0FBTyxJQUFJLENBQUNzSCxNQUFJLENBQUMrQixRQUFRLElBQUksQ0FBQy9CLE1BQUksQ0FBQzBGLGNBQWMsRUFBRTtZQUN6RDFGLE1BQUksQ0FBQzBELGFBQWEsSUFBSXRELEtBQUssQ0FBQ3FFLE1BQU07WUFDbEN6RSxNQUFJLENBQUMyRCxhQUFhLElBQUl2RCxLQUFLLENBQUNzRSxNQUFNO1lBRWxDLElBQUcxRSxNQUFJLENBQUM1QyxPQUFPLEVBQUU7Y0FDZjRDLE1BQUksQ0FBQzVDLE9BQU8sQ0FBQ3lDLGFBQWEsQ0FBQyxVQUFVLEVBQUVPLEtBQUssQ0FBQ3FFLE1BQU0sRUFBRXJFLEtBQUssQ0FBQ3NFLE1BQU0sQ0FBQztZQUNwRTtVQUNGO1FBQ0YsQ0FBQyxDQUFDO1FBRUYsSUFBTWlCLGdCQUFnQixHQUFHLFNBQW5CQSxnQkFBZ0JBLENBQUl2RixLQUFLLEVBQUs7VUFDbEMsSUFBTUssY0FBYyxHQUFHTCxLQUFLLENBQUNLLGNBQWMsQ0FBQyxDQUFDLENBQUM7VUFDOUMsSUFBTUMsUUFBUSxHQUFHVixNQUFJLENBQUNNLFdBQVcsQ0FBQ0csY0FBYyxDQUFDO1VBRWpELElBQUdULE1BQUksQ0FBQ3RILE9BQU8sSUFBSSxDQUFDc0gsTUFBSSxDQUFDK0IsUUFBUSxJQUFJLENBQUMvQixNQUFJLENBQUMwRixjQUFjLEVBQUU7WUFDekQsSUFBTWpCLE1BQU0sR0FBR3pFLE1BQUksQ0FBQ2tGLGdCQUFnQixHQUFHeEUsUUFBUSxDQUFDOUssQ0FBQztZQUNqRCxJQUFNOE8sTUFBTSxHQUFHMUUsTUFBSSxDQUFDbUYsZ0JBQWdCLEdBQUd6RSxRQUFRLENBQUM3SyxDQUFDO1lBRWpEbUssTUFBSSxDQUFDMEQsYUFBYSxJQUFJZSxNQUFNO1lBQzVCekUsTUFBSSxDQUFDMkQsYUFBYSxJQUFJZSxNQUFNO1lBRTVCLElBQUcxRSxNQUFJLENBQUM1QyxPQUFPLEVBQUU7Y0FDZjRDLE1BQUksQ0FBQzVDLE9BQU8sQ0FBQ3lDLGFBQWEsQ0FBQyxVQUFVLEVBQUU0RSxNQUFNLEVBQUVDLE1BQU0sRUFBRWhFLFFBQVEsQ0FBQztZQUNsRTtZQUVBVixNQUFJLENBQUNrRixnQkFBZ0IsR0FBR3hFLFFBQVEsQ0FBQzlLLENBQUM7WUFDbENvSyxNQUFJLENBQUNtRixnQkFBZ0IsR0FBR3pFLFFBQVEsQ0FBQzdLLENBQUM7VUFDcEM7UUFDRixDQUFDO1FBRUQsSUFBTStQLGtCQUFrQixHQUFHLFNBQXJCQSxrQkFBa0JBLENBQUl4RixLQUFLLEVBQUVvQixNQUFNLEVBQUs7VUFDNUMsSUFBTWYsY0FBYyxHQUFHTCxLQUFLLENBQUNLLGNBQWMsQ0FBQyxDQUFDLENBQUM7VUFDOUMsSUFBTUMsUUFBUSxHQUFHVixNQUFJLENBQUNNLFdBQVcsQ0FBQ0csY0FBYyxDQUFDO1VBRWpELElBQUdlLE1BQU0sRUFBRTtZQUNUeEIsTUFBSSxDQUFDdEgsT0FBTyxHQUFHLElBQUk7WUFDbkJzSCxNQUFJLENBQUMzRyxRQUFRLEdBQUcsSUFBSTtVQUN0QixDQUFDLE1BQU07WUFDTDJHLE1BQUksQ0FBQ3RILE9BQU8sR0FBRyxLQUFLO1lBQ3BCc0gsTUFBSSxDQUFDM0csUUFBUSxHQUFHLEtBQUs7VUFDdkI7VUFFQSxJQUFHMkcsTUFBSSxDQUFDdEgsT0FBTyxJQUFJLENBQUNzSCxNQUFJLENBQUMrQixRQUFRLEVBQUU7WUFDakMvQixNQUFJLENBQUNrRixnQkFBZ0IsR0FBR3hFLFFBQVEsQ0FBQzlLLENBQUM7WUFDbENvSyxNQUFJLENBQUNtRixnQkFBZ0IsR0FBR3pFLFFBQVEsQ0FBQzdLLENBQUM7WUFDbENtSyxNQUFJLENBQUNvRix3QkFBd0IsR0FBR2hGLEtBQUssQ0FBQ3lGLFNBQVM7VUFDakQ7UUFDRixDQUFDO1FBRUQsSUFBSSxDQUFDaFAsTUFBTSxDQUFDc0osZ0JBQWdCLENBQUMsWUFBWSxFQUFFLElBQUksRUFBRXlGLGtCQUFrQixDQUFDO1FBQ3BFLElBQUksQ0FBQy9PLE1BQU0sQ0FBQ3NKLGdCQUFnQixDQUFDLFVBQVUsRUFBRSxJQUFJLEVBQUV5RixrQkFBa0IsQ0FBQztRQUVsRSxJQUFJLENBQUMvTyxNQUFNLENBQUNzSixnQkFBZ0IsQ0FBQyxXQUFXLEVBQUUsSUFBSSxFQUFFLFVBQUNDLEtBQUssRUFBSztVQUN6RHVGLGdCQUFnQixDQUFDdkYsS0FBSyxDQUFDO1VBQ3ZCQSxLQUFLLENBQUNJLGNBQWMsQ0FBQyxDQUFDO1FBQ3hCLENBQUMsQ0FBQztRQUVGLElBQUksQ0FBQ21FLGFBQWEsR0FBRyxJQUFJO01BQzNCO0lBQ0Y7O0lBRUE7RUFBQTtJQUFBcE8sR0FBQTtJQUFBQyxLQUFBLEVBQ0EsU0FBQUMsSUFBSUEsQ0FBQ0MsT0FBTyxFQUFFO01BQ1osSUFBRyxJQUFJLENBQUNDLE1BQU0sRUFBRTtNQUNoQixJQUFJLENBQUMyTyxVQUFVLENBQUMsQ0FBQztNQUVqQixJQUFHLElBQUksQ0FBQ3ZELFFBQVEsRUFBRTtRQUNoQixJQUFJLENBQUMxSSxRQUFRLEdBQUcsS0FBSztRQUNyQixJQUFJLENBQUNWLE9BQU8sR0FBRyxLQUFLO1FBQ3BCLElBQUksQ0FBQ0QsT0FBTyxHQUFHLEtBQUs7UUFDcEIsSUFBRyxJQUFJLENBQUMyTSxPQUFPLEVBQUUsSUFBSSxDQUFDQSxPQUFPLENBQUN0RCxRQUFRLEdBQUcsSUFBSTtNQUMvQyxDQUFDLE1BQU0sSUFBRyxJQUFJLENBQUM2QyxPQUFPLElBQUksSUFBSSxDQUFDbE0sT0FBTyxFQUFFO1FBQ3RDLElBQUksQ0FBQzdCLE1BQU0sQ0FBQ2tKLE1BQU0sR0FBRyxNQUFNO01BQzdCO0lBQ0Y7RUFBQztJQUFBeEosR0FBQTtJQUFBQyxLQUFBLEVBRUQsU0FBQThKLFdBQVdBLENBQUNGLEtBQUssRUFBRTtNQUNqQixPQUFPLElBQUksQ0FBQ3ZKLE1BQU0sQ0FBQ3lKLFdBQVcsQ0FBQ0YsS0FBSyxDQUFDO0lBQ3ZDO0VBQUM7SUFBQTdKLEdBQUE7SUFBQUMsS0FBQSxFQUVELFNBQUFzTCxRQUFRQSxDQUFDZ0UsR0FBRyxFQUFFO01BQ1osT0FBT0EsR0FBRyxDQUFDbFEsQ0FBQyxHQUFHLElBQUksQ0FBQ0EsQ0FBQyxJQUFJa1EsR0FBRyxDQUFDbFEsQ0FBQyxHQUFHLElBQUksQ0FBQ0EsQ0FBQyxHQUFHLElBQUksQ0FBQ29DLEtBQUssSUFBSThOLEdBQUcsQ0FBQ2pRLENBQUMsR0FBRyxJQUFJLENBQUNBLENBQUMsR0FBRyxJQUFJLENBQUNvQyxNQUFNLElBQUk2TixHQUFHLENBQUNqUSxDQUFDLEdBQUcsSUFBSSxDQUFDQSxDQUFDO0lBQ3hHO0VBQUM7SUFBQVUsR0FBQTtJQUFBQyxLQUFBLEVBRUQsU0FBQWlQLE9BQU9BLENBQUEsRUFBRztNQUNSLElBQUksQ0FBQzFELFFBQVEsR0FBRyxJQUFJO01BQ3BCLE9BQU8sSUFBSTtJQUNiO0VBQUM7SUFBQXhMLEdBQUE7SUFBQUMsS0FBQSxFQUVELFNBQUFnUCxNQUFNQSxDQUFBLEVBQUc7TUFDUCxJQUFJLENBQUN6RCxRQUFRLEdBQUcsS0FBSztNQUNyQixPQUFPLElBQUk7SUFDYjtFQUFDO0lBQUF4TCxHQUFBO0lBQUFlLEdBQUEsRUFFRCxTQUFBQSxJQUFBLEVBQWU7TUFDYixPQUFPdUgscUJBQUEsQ0FBS3lGLFNBQVUsRUFBZixJQUFjLENBQUMsSUFBSyxJQUFJLENBQUN4RyxNQUFNLElBQUksSUFBSSxDQUFDQSxNQUFNLENBQUNpRSxRQUFTO0lBQ2pFLENBQUM7SUFBQXhHLEdBQUEsRUFFRCxTQUFBQSxJQUFhd0csUUFBUSxFQUFFO01BQ3JCLElBQUdBLFFBQVEsSUFBSWxELHFCQUFBLENBQUt5RixTQUFVLEVBQWYsSUFBYyxDQUFDLEVBQUU7UUFDOUJ4SCxxQkFBQSxDQUFLd0gsU0FBVSxFQUFmLElBQUksRUFBY3ZDLFFBQUosQ0FBQztRQUNmLElBQUksQ0FBQzNFLE9BQU8sSUFBSSxJQUFJLENBQUNBLE9BQU8sQ0FBQ3lDLGFBQWEsQ0FBQyxVQUFVLEVBQUUsSUFBSSxDQUFDO01BQzlEO0lBQ0Y7RUFBQztJQUFBdEosR0FBQTtJQUFBQyxLQUFBLEVBRUQsU0FBQXVQLGNBQWNBLENBQUNDLE9BQU8sRUFBRTtNQUN0QixJQUFJLENBQUNDLHFCQUFxQixDQUFDLENBQUM7TUFDNUIsSUFBSSxDQUFDQyxjQUFjLENBQUNGLE9BQU8sQ0FBQztJQUM5QjtFQUFDO0lBQUF6UCxHQUFBO0lBQUFDLEtBQUEsRUFFRCxTQUFBMFAsY0FBY0EsQ0FBQ0YsT0FBTyxFQUFFO01BQ3RCLElBQUksQ0FBQzVJLE9BQU8sQ0FBQytDLGdCQUFnQixDQUFDLFNBQVMsRUFBRTZGLE9BQU8sQ0FBQztJQUNuRDtFQUFDO0lBQUF6UCxHQUFBO0lBQUFDLEtBQUEsRUFFRCxTQUFBMlAsaUJBQWlCQSxDQUFDSCxPQUFPLEVBQUU7TUFDekIsSUFBSSxDQUFDNUksT0FBTyxDQUFDZ0osbUJBQW1CLENBQUMsU0FBUyxFQUFFSixPQUFPLENBQUM7SUFDdEQ7RUFBQztJQUFBelAsR0FBQTtJQUFBQyxLQUFBLEVBRUQsU0FBQXlQLHFCQUFxQkEsQ0FBQSxFQUFHO01BQ3RCLElBQUksQ0FBQzdJLE9BQU8sQ0FBQ2lKLHNCQUFzQixDQUFDLFNBQVMsQ0FBQztJQUNoRDtFQUFDO0lBQUE5UCxHQUFBO0lBQUFDLEtBQUEsRUFFRCxTQUFBOFAsY0FBY0EsQ0FBQ04sT0FBTyxFQUFFO01BQ3RCLElBQUksQ0FBQ08scUJBQXFCLENBQUMsQ0FBQztNQUM1QixJQUFJLENBQUNDLGNBQWMsQ0FBQ1IsT0FBTyxDQUFDO0lBQzlCO0VBQUM7SUFBQXpQLEdBQUE7SUFBQUMsS0FBQSxFQUVELFNBQUFnUSxjQUFjQSxDQUFDUixPQUFPLEVBQUU7TUFDdEIsSUFBSSxDQUFDNUksT0FBTyxDQUFDK0MsZ0JBQWdCLENBQUMsU0FBUyxFQUFFNkYsT0FBTyxDQUFDO0lBQ25EO0VBQUM7SUFBQXpQLEdBQUE7SUFBQUMsS0FBQSxFQUVELFNBQUFpUSxpQkFBaUJBLENBQUNULE9BQU8sRUFBRTtNQUN6QixJQUFJLENBQUM1SSxPQUFPLENBQUNnSixtQkFBbUIsQ0FBQyxTQUFTLEVBQUVKLE9BQU8sQ0FBQztJQUN0RDtFQUFDO0lBQUF6UCxHQUFBO0lBQUFDLEtBQUEsRUFFRCxTQUFBK1AscUJBQXFCQSxDQUFBLEVBQUc7TUFDdEIsSUFBSSxDQUFDbkosT0FBTyxDQUFDaUosc0JBQXNCLENBQUMsU0FBUyxDQUFDO0lBQ2hEO0VBQUM7SUFBQTlQLEdBQUE7SUFBQUMsS0FBQSxFQUVELFNBQUFrUSxhQUFhQSxDQUFDVixPQUFPLEVBQUU7TUFDckIsSUFBSSxDQUFDVyxvQkFBb0IsQ0FBQyxDQUFDO01BQzNCLElBQUksQ0FBQ0MsYUFBYSxDQUFDWixPQUFPLENBQUM7SUFDN0I7RUFBQztJQUFBelAsR0FBQTtJQUFBQyxLQUFBLEVBRUQsU0FBQW9RLGFBQWFBLENBQUNaLE9BQU8sRUFBRTtNQUNyQixJQUFJLENBQUM1SSxPQUFPLENBQUMrQyxnQkFBZ0IsQ0FBQyxRQUFRLEVBQUU2RixPQUFPLENBQUM7SUFDbEQ7RUFBQztJQUFBelAsR0FBQTtJQUFBQyxLQUFBLEVBRUQsU0FBQXFRLGdCQUFnQkEsQ0FBQ2IsT0FBTyxFQUFFO01BQ3hCLElBQUksQ0FBQzVJLE9BQU8sQ0FBQ2dKLG1CQUFtQixDQUFDLFFBQVEsRUFBRUosT0FBTyxDQUFDO0lBQ3JEO0VBQUM7SUFBQXpQLEdBQUE7SUFBQUMsS0FBQSxFQUVELFNBQUFtUSxvQkFBb0JBLENBQUEsRUFBRztNQUNyQixJQUFJLENBQUN2SixPQUFPLENBQUNpSixzQkFBc0IsQ0FBQyxRQUFRLENBQUM7SUFDL0M7RUFBQztJQUFBOVAsR0FBQTtJQUFBQyxLQUFBLEVBRUQsU0FBQXNRLGVBQWVBLENBQUNkLE9BQU8sRUFBRTtNQUN2QixJQUFJLENBQUNlLHNCQUFzQixDQUFDLENBQUM7TUFDN0IsSUFBSSxDQUFDQyxlQUFlLENBQUNoQixPQUFPLENBQUM7SUFDL0I7RUFBQztJQUFBelAsR0FBQTtJQUFBQyxLQUFBLEVBRUQsU0FBQXdRLGVBQWVBLENBQUNoQixPQUFPLEVBQUU7TUFDdkIsSUFBSSxDQUFDNUksT0FBTyxDQUFDK0MsZ0JBQWdCLENBQUMsVUFBVSxFQUFFNkYsT0FBTyxDQUFDO0lBQ3BEO0VBQUM7SUFBQXpQLEdBQUE7SUFBQUMsS0FBQSxFQUVELFNBQUF5USxrQkFBa0JBLENBQUNqQixPQUFPLEVBQUU7TUFDMUIsSUFBSSxDQUFDNUksT0FBTyxDQUFDZ0osbUJBQW1CLENBQUMsVUFBVSxFQUFFSixPQUFPLENBQUM7SUFDdkQ7RUFBQztJQUFBelAsR0FBQTtJQUFBQyxLQUFBLEVBRUQsU0FBQXVRLHNCQUFzQkEsQ0FBQSxFQUFHO01BQ3ZCLElBQUksQ0FBQzNKLE9BQU8sQ0FBQ2lKLHNCQUFzQixDQUFDLFVBQVUsQ0FBQztJQUNqRDtFQUFDO0lBQUE5UCxHQUFBO0lBQUFDLEtBQUEsRUFFRCxTQUFBMFEsYUFBYUEsQ0FBQ2xCLE9BQU8sRUFBRTtNQUNyQixJQUFJLENBQUNtQixvQkFBb0IsQ0FBQyxDQUFDO01BQzNCLElBQUksQ0FBQzVCLGFBQWEsQ0FBQ1MsT0FBTyxDQUFDO0lBQzdCO0VBQUM7SUFBQXpQLEdBQUE7SUFBQUMsS0FBQSxFQUVELFNBQUErTyxhQUFhQSxDQUFDUyxPQUFPLEVBQUU7TUFDckIsSUFBSSxDQUFDNUksT0FBTyxDQUFDK0MsZ0JBQWdCLENBQUMsUUFBUSxFQUFFNkYsT0FBTyxDQUFDO0lBQ2xEO0VBQUM7SUFBQXpQLEdBQUE7SUFBQUMsS0FBQSxFQUVELFNBQUE0USxnQkFBZ0JBLENBQUNwQixPQUFPLEVBQUU7TUFDeEIsSUFBSSxDQUFDNUksT0FBTyxDQUFDZ0osbUJBQW1CLENBQUMsUUFBUSxFQUFFSixPQUFPLENBQUM7SUFDckQ7RUFBQztJQUFBelAsR0FBQTtJQUFBQyxLQUFBLEVBRUQsU0FBQTJRLG9CQUFvQkEsQ0FBQSxFQUFHO01BQ3JCLElBQUksQ0FBQy9KLE9BQU8sQ0FBQ2lKLHNCQUFzQixDQUFDLFFBQVEsQ0FBQztJQUMvQztFQUFDO0lBQUE5UCxHQUFBO0lBQUFDLEtBQUEsRUFFRCxTQUFBNlEsZUFBZUEsQ0FBQ3JCLE9BQU8sRUFBRTtNQUN2QixJQUFJLENBQUNzQixzQkFBc0IsQ0FBQyxDQUFDO01BQzdCLElBQUksQ0FBQ25FLGVBQWUsQ0FBQzZDLE9BQU8sQ0FBQztJQUMvQjtFQUFDO0lBQUF6UCxHQUFBO0lBQUFDLEtBQUEsRUFFRCxTQUFBMk0sZUFBZUEsQ0FBQzZDLE9BQU8sRUFBRTtNQUN2QixJQUFJLENBQUM1SSxPQUFPLENBQUMrQyxnQkFBZ0IsQ0FBQyxVQUFVLEVBQUU2RixPQUFPLENBQUM7SUFDcEQ7RUFBQztJQUFBelAsR0FBQTtJQUFBQyxLQUFBLEVBRUQsU0FBQStRLGtCQUFrQkEsQ0FBQ3ZCLE9BQU8sRUFBRTtNQUMxQixJQUFJLENBQUM1SSxPQUFPLENBQUNnSixtQkFBbUIsQ0FBQyxVQUFVLEVBQUVKLE9BQU8sQ0FBQztJQUN2RDtFQUFDO0lBQUF6UCxHQUFBO0lBQUFDLEtBQUEsRUFFRCxTQUFBOFEsc0JBQXNCQSxDQUFBLEVBQUc7TUFDdkIsSUFBSSxDQUFDbEssT0FBTyxDQUFDaUosc0JBQXNCLENBQUMsVUFBVSxDQUFDO0lBQ2pEO0VBQUM7SUFBQTlQLEdBQUE7SUFBQUMsS0FBQSxFQUVELFNBQUFnUixXQUFXQSxDQUFDeEIsT0FBTyxFQUFFO01BQ25CLElBQUksQ0FBQ3lCLGtCQUFrQixDQUFDLENBQUM7TUFDekIsSUFBSSxDQUFDQyxXQUFXLENBQUMxQixPQUFPLENBQUM7SUFDM0I7RUFBQztJQUFBelAsR0FBQTtJQUFBQyxLQUFBLEVBRUQsU0FBQWtSLFdBQVdBLENBQUMxQixPQUFPLEVBQUU7TUFDbkIsSUFBSSxDQUFDNUksT0FBTyxDQUFDK0MsZ0JBQWdCLENBQUMsTUFBTSxFQUFFNkYsT0FBTyxDQUFDO0lBQ2hEO0VBQUM7SUFBQXpQLEdBQUE7SUFBQUMsS0FBQSxFQUVELFNBQUFtUixjQUFjQSxDQUFDM0IsT0FBTyxFQUFFO01BQ3RCLElBQUksQ0FBQzVJLE9BQU8sQ0FBQ2dKLG1CQUFtQixDQUFDLE1BQU0sRUFBRUosT0FBTyxDQUFDO0lBQ25EO0VBQUM7SUFBQXpQLEdBQUE7SUFBQUMsS0FBQSxFQUVELFNBQUFpUixrQkFBa0JBLENBQUEsRUFBRztNQUNuQixJQUFJLENBQUNySyxPQUFPLENBQUNpSixzQkFBc0IsQ0FBQyxNQUFNLENBQUM7SUFDN0M7RUFBQztJQUFBOVAsR0FBQTtJQUFBZSxHQUFBLEVBRUQsU0FBQUEsSUFBQSxFQUFhO01BQ1gsT0FBT3VILHFCQUFBLENBQUs1QyxPQUFRLEVBQWIsSUFBWSxDQUFDO0lBQ3RCLENBQUM7SUFBQVYsR0FBQSxFQWFELFNBQUFBLElBQVd0RCxNQUFNLEVBQUU7TUFDakIsSUFBR0EsTUFBTSxJQUFJNEcscUJBQUEsQ0FBSzVDLE9BQVEsRUFBYixJQUFZLENBQUMsRUFBRTtRQUMxQmEscUJBQUEsQ0FBS2IsT0FBUSxFQUFiLElBQUksRUFBWWhFLE1BQUosQ0FBQztRQUNiLElBQUksQ0FBQ21GLE9BQU8sSUFBSSxJQUFJLENBQUNBLE9BQU8sQ0FBQ3lDLGFBQWEsQ0FBQyxVQUFVLEVBQUUsSUFBSSxDQUFDO01BQzlEO0lBQ0Y7RUFBQztJQUFBdEosR0FBQTtJQUFBZSxHQUFBLEVBaEJELFNBQUFBLElBQUEsRUFBWTtNQUNWLE9BQU91SCxxQkFBQSxDQUFLN0MsTUFBTyxFQUFaLElBQVcsQ0FBQztJQUNyQixDQUFDO0lBQUFULEdBQUEsRUFFRCxTQUFBQSxJQUFVdkQsS0FBSyxFQUFFO01BQ2YsSUFBR0EsS0FBSyxJQUFJNkcscUJBQUEsQ0FBSzdDLE1BQU8sRUFBWixJQUFXLENBQUMsRUFBRTtRQUN4QmMscUJBQUEsQ0FBS2QsTUFBTyxFQUFaLElBQUksRUFBV2hFLEtBQUosQ0FBQztRQUNaLElBQUksQ0FBQ29GLE9BQU8sSUFBSSxJQUFJLENBQUNBLE9BQU8sQ0FBQ3lDLGFBQWEsQ0FBQyxVQUFVLEVBQUUsSUFBSSxDQUFDO01BQzlEO0lBQ0Y7RUFBQztJQUFBdEosR0FBQTtJQUFBZSxHQUFBLEVBU0QsU0FBQUEsSUFBQSxFQUFlO01BQ2IsT0FBTyxJQUFJLENBQUNVLEtBQUs7SUFDbkI7RUFBQztJQUFBekIsR0FBQTtJQUFBZSxHQUFBLEVBRUQsU0FBQUEsSUFBQSxFQUFnQjtNQUNkLE9BQU8sSUFBSSxDQUFDVyxNQUFNO0lBQ3BCO0VBQUM7SUFBQTFCLEdBQUE7SUFBQWUsR0FBQSxFQUVELFNBQUFBLElBQUEsRUFBaUI7TUFDZixPQUFPLElBQUksQ0FBQ1UsS0FBSztJQUNuQjtFQUFDO0lBQUF6QixHQUFBO0lBQUFlLEdBQUEsRUFFRCxTQUFBQSxJQUFBLEVBQWtCO01BQ2hCLE9BQU8sSUFBSSxDQUFDVyxNQUFNO0lBQ3BCO0VBQUM7SUFBQTFCLEdBQUE7SUFBQWUsR0FBQSxFQUVELFNBQUFBLElBQUEsRUFBZTtNQUNiLE9BQU8sSUFBSSxDQUFDVSxLQUFLO0lBQ25CO0VBQUM7SUFBQXpCLEdBQUE7SUFBQWUsR0FBQSxFQUVELFNBQUFBLElBQUEsRUFBZ0I7TUFDZCxPQUFPLElBQUksQ0FBQ1csTUFBTTtJQUNwQjtFQUFDO0lBQUExQixHQUFBO0lBQUFlLEdBQUEsRUFFRCxTQUFBQSxJQUFBLEVBQVE7TUFDTixJQUFNd0csTUFBTSxHQUFHLElBQUksQ0FBQ0EsTUFBTSxJQUFJLElBQUksQ0FBQ2pILE1BQU07TUFFekMsSUFBRyxJQUFJLENBQUNiLEtBQUssQ0FBQzRFLFVBQVUsSUFBSWtELE1BQU0sRUFBRTtRQUNsQyxJQUFNOEosV0FBVyxHQUFHOUosTUFBTSxDQUFDOUYsS0FBSztRQUNoQyxJQUFNNlAsYUFBYSxHQUFJL0osTUFBTSxDQUFDOUgsS0FBSyxJQUFJOEgsTUFBTSxDQUFDOUgsS0FBSyxDQUFDb0UsT0FBTyxJQUFLLENBQUM7UUFFakUsSUFBRyxJQUFJLENBQUNwRSxLQUFLLENBQUM0RSxVQUFVLElBQUlyRixrREFBUyxDQUFDdVMsVUFBVSxDQUFDQyxNQUFNLEVBQUU7VUFDdkQsT0FBT2pLLE1BQU0sQ0FBQ2xJLENBQUMsR0FBSWdTLFdBQVcsR0FBRyxDQUFFLEdBQUksSUFBSSxDQUFDNVAsS0FBSyxHQUFHLENBQUUsR0FBRyxJQUFJLENBQUN5TSxNQUFNO1FBQ3RFLENBQUMsTUFBTSxJQUFHLElBQUksQ0FBQ3pPLEtBQUssQ0FBQzRFLFVBQVUsSUFBSXJGLGtEQUFTLENBQUN1UyxVQUFVLENBQUNFLEtBQUssRUFBRTtVQUM3RCxPQUFPbEssTUFBTSxDQUFDbEksQ0FBQyxHQUFJZ1MsV0FBWSxHQUFJLElBQUksQ0FBQzVQLEtBQU0sR0FBRzZQLGFBQWEsR0FBRyxJQUFJLENBQUNwRCxNQUFNO1FBQzlFLENBQUMsTUFBTSxJQUFHLElBQUksQ0FBQ3pPLEtBQUssQ0FBQzRFLFVBQVUsSUFBSXJGLGtEQUFTLENBQUN1UyxVQUFVLENBQUNHLElBQUksRUFBRTtVQUM1RCxPQUFPbkssTUFBTSxDQUFDbEksQ0FBQyxHQUFHaVMsYUFBYSxHQUFHLElBQUksQ0FBQ3BELE1BQU07UUFDL0M7TUFDRixDQUFDLE1BQU0sSUFBRzNHLE1BQU0sRUFBRTtRQUNoQixPQUFPQSxNQUFNLENBQUNsSSxDQUFDLEdBQUdpSixxQkFBQSxDQUFLdUYsRUFBRyxFQUFSLElBQU8sQ0FBQyxHQUFHLElBQUksQ0FBQ0ssTUFBTTtNQUMxQztNQUVBLE9BQU81RixxQkFBQSxDQUFLdUYsRUFBRyxFQUFSLElBQU8sQ0FBQyxHQUFHLElBQUksQ0FBQ0ssTUFBTTtJQUMvQixDQUFDO0lBQUFsSixHQUFBLEVBRUQsU0FBQUEsSUFBTTNGLENBQUMsRUFBRTtNQUNQa0gscUJBQUEsQ0FBS3NILEVBQUcsRUFBUixJQUFJLEVBQU94TyxDQUFKLENBQUM7TUFDUixJQUFJLENBQUN3SCxPQUFPLElBQUksSUFBSSxDQUFDQSxPQUFPLENBQUN5QyxhQUFhLENBQUMsVUFBVSxFQUFFLElBQUksQ0FBQztJQUM5RDtFQUFDO0lBQUF0SixHQUFBO0lBQUFlLEdBQUEsRUFFRCxTQUFBQSxJQUFBLEVBQVE7TUFDTixJQUFNd0csTUFBTSxHQUFHLElBQUksQ0FBQ0EsTUFBTSxJQUFJLElBQUksQ0FBQ2pILE1BQU07TUFFekMsSUFBRyxJQUFJLENBQUNiLEtBQUssQ0FBQzZFLGtCQUFrQixJQUFJaUQsTUFBTSxFQUFFO1FBQzFDLElBQU1vSyxZQUFZLEdBQUdwSyxNQUFNLENBQUM3RixNQUFNO1FBQ2xDLElBQU00UCxhQUFhLEdBQUkvSixNQUFNLENBQUM5SCxLQUFLLElBQUk4SCxNQUFNLENBQUM5SCxLQUFLLENBQUNvRSxPQUFPLElBQUssQ0FBQztRQUVqRSxJQUFHLElBQUksQ0FBQ3BFLEtBQUssQ0FBQzZFLGtCQUFrQixJQUFJdEYsa0RBQVMsQ0FBQzRTLGtCQUFrQixDQUFDQyxNQUFNLEVBQUU7VUFDdkUsT0FBT3RLLE1BQU0sQ0FBQ2pJLENBQUMsR0FBSXFTLFlBQWEsR0FBSSxJQUFJLENBQUNqUSxNQUFPLEdBQUc0UCxhQUFhLEdBQUcsSUFBSSxDQUFDbkQsTUFBTTtRQUNoRixDQUFDLE1BQU0sSUFBRyxJQUFJLENBQUMxTyxLQUFLLENBQUM2RSxrQkFBa0IsSUFBSXRGLGtEQUFTLENBQUM0UyxrQkFBa0IsQ0FBQ0osTUFBTSxFQUFFO1VBQzlFLE9BQU9qSyxNQUFNLENBQUNqSSxDQUFDLEdBQUlxUyxZQUFZLEdBQUcsQ0FBRSxHQUFJLElBQUksQ0FBQ2pRLE1BQU0sR0FBRyxDQUFFLEdBQUcsSUFBSSxDQUFDeU0sTUFBTTtRQUN4RSxDQUFDLE1BQU0sSUFBRyxJQUFJLENBQUMxTyxLQUFLLENBQUM2RSxrQkFBa0IsSUFBSXRGLGtEQUFTLENBQUM0UyxrQkFBa0IsQ0FBQ0UsR0FBRyxFQUFFO1VBQzNFLE9BQU92SyxNQUFNLENBQUNqSSxDQUFDLEdBQUdnUyxhQUFhLEdBQUcsSUFBSSxDQUFDbkQsTUFBTTtRQUMvQztNQUNGLENBQUMsTUFBTSxJQUFHNUcsTUFBTSxFQUFFO1FBQ2hCLE9BQU9BLE1BQU0sQ0FBQ2pJLENBQUMsR0FBR2dKLHFCQUFBLENBQUt3RixFQUFHLEVBQVIsSUFBTyxDQUFDLEdBQUcsSUFBSSxDQUFDSyxNQUFNO01BQzFDO01BRUEsT0FBTzdGLHFCQUFBLENBQUt3RixFQUFHLEVBQVIsSUFBTyxDQUFDLEdBQUcsSUFBSSxDQUFDSyxNQUFNO0lBQy9CLENBQUM7SUFBQW5KLEdBQUEsRUFFRCxTQUFBQSxJQUFNMUYsQ0FBQyxFQUFFO01BQ1BpSCxxQkFBQSxDQUFLdUgsRUFBRyxFQUFSLElBQUksRUFBT3hPLENBQUosQ0FBQztNQUNSLElBQUksQ0FBQ3VILE9BQU8sSUFBSSxJQUFJLENBQUNBLE9BQU8sQ0FBQ3lDLGFBQWEsQ0FBQyxVQUFVLEVBQUUsSUFBSSxDQUFDO0lBQzlEO0VBQUM7SUFBQXRKLEdBQUE7SUFBQWUsR0FBQSxFQUVELFNBQUFBLElBQUEsRUFBbUI7TUFDakIsT0FBTyxJQUFJOUIsOENBQUssQ0FBQztRQUNmLFNBQVMsRUFBRUQsa0RBQVMsQ0FBQ2tDLE9BQU8sQ0FBQzZRLGVBQWU7UUFDNUMsd0JBQXdCLEVBQUUvUyxrREFBUyxDQUFDa0MsT0FBTyxDQUFDOFE7TUFDOUMsQ0FBQyxDQUFDO0lBQ0o7RUFBQztJQUFBaFMsR0FBQTtJQUFBZSxHQUFBLEVBRUQsU0FBQUEsSUFBQSxFQUFZO01BQ1YsT0FBT3VILHFCQUFBLENBQUsyRixNQUFPLEVBQVosSUFBVyxDQUFDLElBQUksSUFBSSxDQUFDZ0UsWUFBWTtJQUMxQyxDQUFDO0lBQUFqTixHQUFBLEVBRUQsU0FBQUEsSUFBVXZGLEtBQUssRUFBRTtNQUNmOEcscUJBQUEsQ0FBSzBILE1BQU8sRUFBWixJQUFJLEVBQVcsSUFBSWhQLDhDQUFLLENBQUMsQ0FBZCxDQUFDO01BQ1pxSixxQkFBQSxDQUFLMkYsTUFBTyxFQUFaLElBQVcsQ0FBQyxDQUFDaUUsTUFBTSxDQUFDLElBQUksQ0FBQ0QsWUFBWSxDQUFDRSxTQUFTLENBQUMsQ0FBQyxDQUFDO01BRWxELElBQUcxUyxLQUFLLElBQUlBLEtBQUssWUFBWVIsOENBQUssRUFBRTtRQUNsQ3FKLHFCQUFBLENBQUsyRixNQUFPLEVBQVosSUFBVyxDQUFDLENBQUNpRSxNQUFNLENBQUN6UyxLQUFLLENBQUMwUyxTQUFTLENBQUMsQ0FBQyxDQUFDO01BQ3hDO01BRUE3SixxQkFBQSxDQUFLMkYsTUFBTyxFQUFaLElBQVcsQ0FBQyxDQUFDekQsU0FBUyxHQUFHLElBQUk7TUFDN0IsSUFBSSxDQUFDM0QsT0FBTyxJQUFJLElBQUksQ0FBQ0EsT0FBTyxDQUFDeUMsYUFBYSxDQUFDLFVBQVUsRUFBRSxJQUFJLENBQUM7SUFDOUQ7RUFBQztJQUFBdEosR0FBQTtJQUFBZSxHQUFBLEVBRUQsU0FBQUEsSUFBQSxFQUFhO01BQ1gsT0FBUSxJQUFJLENBQUN0QixLQUFLLElBQUksSUFBSSxDQUFDQSxLQUFLLENBQUNXLE1BQU07SUFDekMsQ0FBQztJQUFBNEUsR0FBQSxFQUVELFNBQUFBLElBQVc1RSxNQUFNLEVBQUU7TUFDakIsSUFBR0EsTUFBTSxJQUFJLElBQUksQ0FBQ29MLFFBQVEsSUFBSXBMLE1BQU0sSUFBSSxJQUFJLENBQUNYLEtBQUssQ0FBQ1csTUFBTSxFQUFFO1FBQ3pELElBQUksQ0FBQ29MLFFBQVEsR0FBR3BMLE1BQU07UUFDdEIsSUFBRyxJQUFJLENBQUNYLEtBQUssRUFBRSxJQUFJLENBQUNBLEtBQUssQ0FBQ3VGLEdBQUcsQ0FBQyxRQUFRLEVBQUU1RSxNQUFNLENBQUM7UUFDL0MsSUFBSSxDQUFDeUcsT0FBTyxJQUFJLElBQUksQ0FBQ0EsT0FBTyxDQUFDeUMsYUFBYSxDQUFDLFVBQVUsRUFBRSxJQUFJLENBQUM7TUFDOUQ7SUFDRjtFQUFDO0lBQUF0SixHQUFBO0lBQUFlLEdBQUEsRUFFRCxTQUFBQSxJQUFBLEVBQWU7TUFDYixPQUFPdUgscUJBQUEsQ0FBSzBGLFNBQVUsRUFBZixJQUFjLENBQUM7SUFDeEIsQ0FBQztJQUFBaEosR0FBQSxFQUVELFNBQUFBLElBQWFsQyxRQUFRLEVBQUU7TUFDckIsSUFBR0EsUUFBUSxJQUFJd0YscUJBQUEsQ0FBSzBGLFNBQVUsRUFBZixJQUFjLENBQUMsRUFBRTtRQUM5QnpILHFCQUFBLENBQUt5SCxTQUFVLEVBQWYsSUFBSSxFQUFjbEwsUUFBSixDQUFDO1FBQ2YsSUFBSSxDQUFDK0QsT0FBTyxJQUFJLElBQUksQ0FBQ0EsT0FBTyxDQUFDeUMsYUFBYSxDQUFDLFVBQVUsRUFBRSxJQUFJLENBQUM7TUFDOUQ7SUFDRjtFQUFDO0lBQUF0SixHQUFBO0lBQUFDLEtBQUEsRUFFRCxTQUFBbVMsYUFBYUEsQ0FBQSxFQUFHO01BQ2QsSUFBSTdLLE1BQU0sR0FBRyxJQUFJLENBQUNBLE1BQU07TUFDeEIsSUFBSThLLEdBQUcsR0FBRyxFQUFFO01BRVosT0FBTTlLLE1BQU0sRUFBRTtRQUNaOEssR0FBRyxDQUFDNUcsSUFBSSxDQUFDbEUsTUFBTSxDQUFDO1FBQ2hCQSxNQUFNLEdBQUdBLE1BQU0sQ0FBQ0EsTUFBTTtNQUN4QjtNQUVBLE9BQU84SyxHQUFHO0lBQ1o7RUFBQztJQUFBclMsR0FBQTtJQUFBQyxLQUFBLEVBTUQsU0FBQXFTLFNBQVNBLENBQUNDLGNBQWMsRUFBRTtNQUN4QixJQUFNQyxZQUFZLEdBQUcsSUFBSSxDQUFDL1MsS0FBSyxJQUFJLElBQUksQ0FBQ0EsS0FBSyxDQUFDZ1QsVUFBVTtNQUN4RCxJQUFNQyxpQkFBaUIsR0FBR0gsY0FBYyxDQUFDOVMsS0FBSyxJQUFJOFMsY0FBYyxDQUFDOVMsS0FBSyxDQUFDZ1QsVUFBVTtNQUNqRixJQUFNRSxNQUFNLEdBQUcsSUFBSSxDQUFDbFQsS0FBSyxJQUFJLElBQUksQ0FBQ0EsS0FBSyxDQUFDa1QsTUFBTTtNQUM5QyxJQUFNQyxXQUFXLEdBQUdMLGNBQWMsQ0FBQzlTLEtBQUssSUFBSThTLGNBQWMsQ0FBQzlTLEtBQUssQ0FBQ2tULE1BQU07TUFFdkUsSUFBRyxJQUFJLENBQUNwTCxNQUFNLElBQUlnTCxjQUFjLEVBQUU7UUFDaEMsT0FBTyxDQUFDO01BQ1YsQ0FBQyxNQUFNLElBQUdBLGNBQWMsQ0FBQ2hMLE1BQU0sSUFBSSxJQUFJLEVBQUU7UUFDdkMsT0FBTyxDQUFDLENBQUM7TUFDWCxDQUFDLE1BQU0sSUFBR2lMLFlBQVksSUFBSSxDQUFDRSxpQkFBaUIsRUFBRTtRQUM1QyxPQUFPLENBQUM7TUFDVixDQUFDLE1BQU0sSUFBRyxDQUFDRixZQUFZLElBQUlFLGlCQUFpQixFQUFFO1FBQzVDLE9BQU8sQ0FBQyxDQUFDO01BQ1gsQ0FBQyxNQUFNLElBQUdDLE1BQU0sR0FBR0MsV0FBVyxFQUFFO1FBQzlCLE9BQU8sQ0FBQztNQUNWLENBQUMsTUFBTSxJQUFHRCxNQUFNLEdBQUdDLFdBQVcsRUFBRTtRQUM5QixPQUFPLENBQUMsQ0FBQztNQUNYO01BRUEsT0FBT0wsY0FBYyxDQUFDTSxrQkFBa0IsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQ0Esa0JBQWtCLENBQUNOLGNBQWMsQ0FBQztJQUM1Rjs7SUFFQTtFQUFBO0lBQUF2UyxHQUFBO0lBQUFDLEtBQUEsRUFDQSxTQUFBNFMsa0JBQWtCQSxDQUFDTixjQUFjLEVBQUU7TUFDakMsT0FBTyxDQUFDO0lBQ1Y7O0lBRUE7RUFBQTtJQUFBdlMsR0FBQTtJQUFBQyxLQUFBLEVBQ0EsU0FBQTZTLGFBQWFBLENBQUNQLGNBQWMsRUFBRTtNQUM1QixPQUFPLENBQUMsQ0FBQztJQUNYOztJQUVBO0VBQUE7SUFBQXZTLEdBQUE7SUFBQUMsS0FBQSxFQUNBLFNBQUE4UyxnQkFBZ0JBLENBQUNSLGNBQWMsRUFBRTtNQUMvQixPQUFPLENBQUMsQ0FBQztJQUNYOztJQUVBO0VBQUE7SUFBQXZTLEdBQUE7SUFBQUMsS0FBQSxFQUNBLFNBQUErUyxxQkFBcUJBLENBQUNULGNBQWMsRUFBRTtNQUNwQyxPQUFPLENBQUMsQ0FBQztJQUNYOztJQUVBO0VBQUE7SUFBQXZTLEdBQUE7SUFBQUMsS0FBQSxFQUNBLFNBQUFnVCxrQkFBa0JBLENBQUNWLGNBQWMsRUFBRTtNQUNqQyxPQUFPLENBQUMsQ0FBQztJQUNYO0VBQUM7SUFBQXZTLEdBQUE7SUFBQUMsS0FBQSxFQWxERCxTQUFPaVQsaUJBQWlCQSxDQUFDMUksU0FBUyxFQUFFMkksS0FBSyxFQUFFO01BQ3pDLE9BQU8zSSxTQUFTLENBQUM4SCxTQUFTLENBQUNhLEtBQUssQ0FBQztJQUNuQztFQUFDO0FBQUE7Ozs7Ozs7Ozs7Ozs7OztBQy9qQkg7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUVBQWU7RUFDYmpTLE9BQU8sRUFBRTtJQUNQOEYscUJBQXFCLEVBQUUsS0FBSztJQUFFO0lBQzlCeUYsa0NBQWtDLEVBQUUsS0FBSztJQUFFO0lBQzNDMkcsMENBQTBDLEVBQUUsSUFBSTtJQUFFO0lBQ2xEak0sMEJBQTBCLEVBQUUsS0FBSztJQUFFO0lBQ25DcUIsMkJBQTJCLEVBQUUsSUFBSTtJQUFFO0lBQ25DZixXQUFXLEVBQUUsQ0FBQztJQUFFO0lBQ2hCa0IsZ0JBQWdCLEVBQUUsQ0FBQztJQUFFO0lBQ3JCMEssV0FBVyxFQUFFLFlBQVk7SUFDekJDLFNBQVMsRUFBRSxFQUFFO0lBQ2JuTixZQUFZLEVBQUUsR0FBRztJQUNqQkMsYUFBYSxFQUFFLEdBQUc7SUFDbEIyTCxlQUFlLEVBQUUsQ0FBQztJQUNsQkMsZUFBZSxFQUFFLENBQUM7SUFDbEJsTyx5QkFBeUIsRUFBRSxrQkFBa0I7SUFDN0NDLCtCQUErQixFQUFFLFNBQVM7SUFDMUNDLCtCQUErQixFQUFFLFNBQVM7SUFDMUN1UCxxQ0FBcUMsRUFBRSxTQUFTO0lBQ2hEQyx3QkFBd0IsRUFBRSxNQUFNO0lBQ2hDQyw4QkFBOEIsRUFBRSxNQUFNO0lBQ3RDQywwQkFBMEIsRUFBRSxNQUFNO0lBQ2xDQyxtQ0FBbUMsRUFBRSxTQUFTO0lBQzlDQywwQkFBMEIsRUFBRSxTQUFTO0lBQ3JDQyx3QkFBd0IsRUFBRSxNQUFNO0lBQ2hDQyxrQkFBa0IsRUFBRSxTQUFTO0lBQzdCQyx3QkFBd0IsRUFBRSxTQUFTO0lBQ25DQyx3QkFBd0IsRUFBRSxTQUFTO0lBQ25DQyx1QkFBdUIsRUFBRSx3QkFBd0I7SUFDakRDLDRCQUE0QixFQUFFLEtBQUs7SUFDbkNDLCtCQUErQixFQUFFLHlCQUF5QjtJQUMxREMsdUNBQXVDLEVBQUUsR0FBRztJQUFFO0lBQzlDQywyQkFBMkIsRUFBRSxTQUFTO0lBQ3RDQywyQkFBMkIsRUFBRSxTQUFTO0lBQ3RDQyxtQ0FBbUMsRUFBRSxJQUFJO0lBQUU7SUFDM0NDLDBCQUEwQixFQUFFLDJCQUEyQjtJQUN2RGxULHNCQUFzQixFQUFFLE9BQU87SUFDL0JELG1CQUFtQixFQUFFLFNBQVM7SUFDOUJGLHVCQUF1QixFQUFFLENBQUM7SUFDMUJDLHVCQUF1QixFQUFFLEVBQUU7SUFDM0JxVCxzQkFBc0IsRUFBRSxPQUFPO0lBQy9CQyxtQkFBbUIsRUFBRSxNQUFNO0lBQzNCQyx1QkFBdUIsRUFBRSxDQUFDO0lBQzFCQyw0QkFBNEIsRUFBRSwyQkFBMkI7SUFDekRDLGtDQUFrQyxFQUFFLDBCQUEwQjtJQUM5REMsa0NBQWtDLEVBQUUsMEJBQTBCO0lBQzlEQyxzQkFBc0IsRUFBRSxFQUFFO0lBQzFCQyxtQkFBbUIsRUFBRSxDQUFDO0lBQ3RCQyw2QkFBNkIsRUFBRSxTQUFTO0lBQ3hDQywwQkFBMEIsRUFBRSxJQUFJO0lBQUU7SUFDbENDLHlCQUF5QixFQUFFLE9BQU87SUFDbENDLHNCQUFzQixFQUFFLE1BQU07SUFDOUJDLDJCQUEyQixFQUFFLE1BQU07SUFDbkNDLDBCQUEwQixFQUFFLENBQUM7SUFDN0JDLHFCQUFxQixFQUFFLElBQUk7SUFDM0JDLHlCQUF5QixFQUFFLFNBQVM7SUFDcENDLCtCQUErQixFQUFFLFNBQVM7SUFDMUNDLCtCQUErQixFQUFFLFNBQVM7SUFDMUN4Six1QkFBdUIsRUFBRSxPQUFPO0lBQ2hDRixvQkFBb0IsRUFBRSxNQUFNO0lBQzVCRyx5QkFBeUIsRUFBRSxNQUFNO0lBQ2pDSix3QkFBd0IsRUFBRSxDQUFDO0lBQzNCRSxtQkFBbUIsRUFBRSxJQUFJO0lBQ3pCMEosMkJBQTJCLEVBQUU7RUFDL0IsQ0FBQztFQUNEQyxHQUFHLEVBQUU7SUFDSEMsRUFBRSxFQUFFLEVBQUU7SUFDTnBFLEtBQUssRUFBRSxFQUFFO0lBQ1RJLE1BQU0sRUFBRSxFQUFFO0lBQ1ZILElBQUksRUFBRSxFQUFFO0lBQ1JvRSxLQUFLLEVBQUUsRUFBRTtJQUNUQyxLQUFLLEVBQUUsRUFBRTtJQUNUQyxHQUFHLEVBQUU7RUFDUCxDQUFDO0VBQ0R6RSxVQUFVLEVBQUU7SUFDVkUsS0FBSyxFQUFFLE9BQU87SUFDZEMsSUFBSSxFQUFFLE1BQU07SUFDWkYsTUFBTSxFQUFFLFFBQVE7SUFDaEJ5RSxPQUFPLEVBQUU7RUFDWCxDQUFDO0VBQ0RyRSxrQkFBa0IsRUFBRTtJQUNsQkUsR0FBRyxFQUFFLEtBQUs7SUFDVk4sTUFBTSxFQUFFLFFBQVE7SUFDaEJLLE1BQU0sRUFBRSxRQUFRO0lBQ2hCb0UsT0FBTyxFQUFFO0VBQ1gsQ0FBQztFQUNEclIsTUFBTSxFQUFFO0lBQ05tRCxvQkFBb0IsRUFBRSxzREFBc0Q7SUFDNUVtTywwQkFBMEIsRUFBRywyREFBMkQ7SUFDeEZDLEtBQUssRUFBRSxPQUFPO0lBQ2R0UixjQUFjLEVBQUUsU0FBUztJQUN6QnVSLGVBQWUsRUFBRSxVQUFVO0lBQzNCdE8sYUFBYSxFQUFFLFFBQVE7SUFDdkJaLHFCQUFxQixFQUFFLDZEQUE2RDtJQUNwRkUsMEJBQTBCLEVBQUUsaUNBQWlDO0lBQzdEdEMsdUJBQXVCLEVBQUUsNEZBQTRGO0lBQ3JIdVIsZ0JBQWdCLEVBQUUsbUdBQW1HO0lBQ3JIQyxPQUFPLEVBQUU7RUFDWDtBQUNGLENBQUMsRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3JIRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDd0I7QUFDWTtBQUNBO0FBQ29CO0FBQ0o7QUFDeEI7QUFDQTtBQUFBLElBQUFHLFdBQUEsb0JBQUFqUixPQUFBO0FBQUEsSUFBQWtSLFNBQUEsb0JBQUFsUixPQUFBO0FBQUEsSUFBQW1SLFVBQUEsb0JBQUFuUixPQUFBO0FBQUEsSUFBQW9SLFNBQUEsb0JBQUFwUixPQUFBO0FBQUEsSUFBQXFSLFVBQUEsb0JBQUFyUixPQUFBO0FBQUEsSUFFUDRHLFNBQVMsMEJBQUEwSyxJQUFBO0VBUzVCLFNBQUExSyxVQUFZL00sQ0FBQyxFQUFFQyxDQUFDLEVBQUU2RCxRQUFRLEVBQUVDLFNBQVMsRUFBRTNELEtBQUssRUFBaUI7SUFBQSxJQUFBZ0ssTUFBQTtJQUFBLElBQUEvSixLQUFBO0lBQUFDLGlGQUFBLE9BQUF5TSxTQUFBO0lBQzNEMU0sS0FBQSxHQUFBRSxVQUFBLE9BQUF3TSxTQUFBLEdBQU0vTSxDQUFDLEVBQUVDLENBQUMsRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFRyxLQUFLO0lBQUVJLGlGQUFBLENBQUFILEtBQUEsZ0JBVHBCLEtBQUs7SUFDbEJxRywwQkFBQSxDQUFBckcsS0FBQSxFQUFBK1csV0FBVyxFQUFHLEVBQUU7SUFDaEIxUSwwQkFBQSxDQUFBckcsS0FBQSxFQUFBZ1gsU0FBVSxFQUFHLENBQUM7SUFDZDNRLDBCQUFBLENBQUFyRyxLQUFBLEVBQUFpWCxVQUFXLEVBQUcsQ0FBQztJQUNmNVEsMEJBQUEsQ0FBQXJHLEtBQUEsRUFBQWtYLFNBQVUsRUFBRyxDQUFDO0lBQ2Q3USwwQkFBQSxDQUFBckcsS0FBQSxFQUFBbVgsVUFBVyxFQUFHLENBQUM7SUFBQ2hYLGlGQUFBLENBQUFILEtBQUEseUJBQ007TUFBQSxPQUFNQSxLQUFBLENBQUttSCxPQUFPLENBQUN5QyxhQUFhLENBQUMsVUFBVSxFQUFBNUosS0FBTSxDQUFDO0lBQUE7SUFBQSxTQUFBMkQsSUFBQSxHQUFBQyxTQUFBLENBQUFDLE1BQUEsRUFFdkJDLFVBQVUsT0FBQUMsS0FBQSxDQUFBSixJQUFBLE9BQUFBLElBQUEsV0FBQUssSUFBQSxNQUFBQSxJQUFBLEdBQUFMLElBQUEsRUFBQUssSUFBQTtNQUFWRixVQUFVLENBQUFFLElBQUEsUUFBQUosU0FBQSxDQUFBSSxJQUFBO0lBQUE7SUFHekQsQ0FBQStGLE1BQUEsR0FBQS9KLEtBQUEsRUFBS3FYLE1BQU0sQ0FBQXJMLEtBQUEsQ0FBQWpDLE1BQUEsRUFBSWpHLFVBQVUsQ0FBQztJQUMxQjlELEtBQUEsQ0FBS3FOLFNBQVMsR0FBRy9HLFFBQVEsQ0FBQ0MsYUFBYSxDQUFDLFFBQVEsQ0FBQztJQUNqRE0scUJBQUEsQ0FBS21RLFNBQVUsRUFBQWhYLEtBQUEsRUFBR3lELFFBQUosQ0FBQztJQUNmb0QscUJBQUEsQ0FBS29RLFVBQVcsRUFBQWpYLEtBQUEsRUFBRzBELFNBQUosQ0FBQztJQUNoQjFELEtBQUEsQ0FBS3NYLG1CQUFtQixHQUFHLElBQUlULDZEQUFtQixDQUFDLElBQUksRUFBRSxJQUFJLEVBQUE3VyxLQUFNLENBQUM7SUFDcEVBLEtBQUEsQ0FBS3VYLGlCQUFpQixHQUFHLElBQUlULDJEQUFpQixDQUFDLElBQUksRUFBRSxJQUFJLEVBQUE5VyxLQUFNLENBQUM7SUFFaEVBLEtBQUEsQ0FBSytRLGVBQWUsQ0FBQyxVQUFDdkMsTUFBTSxFQUFFQyxNQUFNO01BQUEsT0FBS3pPLEtBQUEsQ0FBS3dYLGdCQUFnQixDQUFDaEosTUFBTSxFQUFFQyxNQUFNLENBQUM7SUFBQSxFQUFDO0lBRS9FLElBQUcsQ0FBQ25QLG1EQUFTLENBQUNrQyxPQUFPLENBQUN1TCxrQ0FBa0MsRUFBRTtNQUN4RC9NLEtBQUEsQ0FBS2tOLGVBQWUsQ0FBQyxVQUFBdUssZ0JBQWdCLEVBQUk7UUFDdkNBLGdCQUFnQixJQUFJelgsS0FBQSxDQUFLNkgsTUFBTSxJQUFJN0gsS0FBQSxDQUFLOEQsVUFBVSxDQUFDa0csT0FBTyxDQUFDLFVBQUFjLFNBQVM7VUFBQSxPQUFJQSxTQUFTLElBQUlBLFNBQVMsQ0FBQzNELE9BQU8sQ0FBQ3lDLGFBQWEsQ0FBQyxVQUFVLEVBQUE1SixLQUFNLENBQUM7UUFBQSxFQUFDO01BQ3pJLENBQUMsQ0FBQztJQUNKO0lBQUMsT0FBQUEsS0FBQTtFQUNIO0VBQUNJLDJFQUFBLENBQUFzTSxTQUFBLEVBQUEwSyxJQUFBO0VBQUEsT0FBQS9XLDhFQUFBLENBQUFxTSxTQUFBO0lBQUFwTSxHQUFBO0lBQUFDLEtBQUEsRUFFRCxTQUFBQyxJQUFJQSxDQUFDQyxPQUFPLEVBQUU7TUFBQSxJQUFBaUssTUFBQTtNQUNaLElBQUcsSUFBSSxDQUFDaEssTUFBTSxFQUFFO01BQ2hCLElBQU1FLE1BQU0sR0FBR0gsT0FBTyxDQUFDRyxNQUFNO01BQzdCLElBQU1DLEdBQUcsR0FBR0QsTUFBTSxDQUFDRSxVQUFVLENBQUMsSUFBSSxDQUFDO01BQ25DRCxHQUFHLENBQUNvQixJQUFJLENBQUMsQ0FBQztNQUVWLElBQUcsSUFBSSxDQUFDbUwsU0FBUyxFQUFFO1FBQ2pCLElBQU1ELE9BQU8sR0FBRyxJQUFJLENBQUNFLFNBQVMsQ0FBQ3ZNLFVBQVUsQ0FBQyxJQUFJLENBQUM7UUFDL0MsSUFBSSxDQUFDdU0sU0FBUyxDQUFDdEwsS0FBSyxHQUFHdkMsK0NBQUssQ0FBQ21LLGNBQWMsQ0FBQy9JLE1BQU0sQ0FBQyxHQUFHdEIsbURBQVMsQ0FBQ2tDLE9BQU8sQ0FBQ3VHLFdBQVc7UUFDbkYsSUFBSSxDQUFDc0YsU0FBUyxDQUFDckwsTUFBTSxHQUFHeEMsK0NBQUssQ0FBQ3FLLGVBQWUsQ0FBQ2pKLE1BQU0sQ0FBQyxHQUFHdEIsbURBQVMsQ0FBQ2tDLE9BQU8sQ0FBQ3VHLFdBQVc7UUFDckYsSUFBSSxDQUFDc0YsU0FBUyxDQUFDdE4sS0FBSyxDQUFDZ0MsS0FBSyxHQUFHdkMsK0NBQUssQ0FBQ21LLGNBQWMsQ0FBQy9JLE1BQU0sQ0FBQztRQUN6RCxJQUFJLENBQUN5TSxTQUFTLENBQUN0TixLQUFLLENBQUNpQyxNQUFNLEdBQUd4QywrQ0FBSyxDQUFDcUssZUFBZSxDQUFDakosTUFBTSxDQUFDO1FBQzNEcEIsK0NBQUssQ0FBQzhJLEtBQUssQ0FBQzZFLE9BQU8sQ0FBQztNQUN0QjtNQUVBLElBQUksQ0FBQ3JKLFVBQVUsQ0FBQ2tHLE9BQU8sQ0FBQyxVQUFBYyxTQUFTLEVBQUk7UUFDbkMsSUFBR0osTUFBSSxDQUFDOUosTUFBTSxFQUFFa0ssU0FBUyxDQUFDbEssTUFBTSxHQUFHOEosTUFBSSxDQUFDOUosTUFBTTtNQUNoRCxDQUFDLENBQUM7TUFFRixJQUFJLENBQUM0VyxnQkFBZ0IsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDO01BQzNCN1csYUFBQSxDQUFBK0wsU0FBQSxvQkFBV2pNLE9BQU87TUFFbEJJLEdBQUcsQ0FBQ3VCLE9BQU8sQ0FBQyxDQUFDO0lBQ2Y7RUFBQztJQUFBOUIsR0FBQTtJQUFBQyxLQUFBLEVBRUQsU0FBQW1YLHFCQUFxQkEsQ0FBQzdXLEdBQUcsRUFBRTtNQUN6QixJQUFHLElBQUksQ0FBQzBXLGlCQUFpQixFQUFFO1FBQ3pCLElBQUksQ0FBQ0EsaUJBQWlCLENBQUMzVyxNQUFNLEdBQUcsSUFBSSxDQUFDQSxNQUFNO1FBQzNDLElBQUksQ0FBQzJXLGlCQUFpQixDQUFDL1csSUFBSSxDQUFDSyxHQUFHLENBQUM7TUFDbEM7SUFDRjtFQUFDO0lBQUFQLEdBQUE7SUFBQUMsS0FBQSxFQUVELFNBQUFvWCx1QkFBdUJBLENBQUM5VyxHQUFHLEVBQUU7TUFDM0IsSUFBRyxJQUFJLENBQUN5VyxtQkFBbUIsRUFBRTtRQUMzQixJQUFJLENBQUNBLG1CQUFtQixDQUFDMVcsTUFBTSxHQUFHLElBQUksQ0FBQ0EsTUFBTTtRQUM3QyxJQUFJLENBQUMwVyxtQkFBbUIsQ0FBQzlXLElBQUksQ0FBQ0ssR0FBRyxDQUFDO01BQ3BDO0lBQ0Y7RUFBQztJQUFBUCxHQUFBO0lBQUFDLEtBQUEsRUFFRCxTQUFBcVgsY0FBY0EsQ0FBQy9XLEdBQUcsRUFBRTtNQUNsQixJQUFHLENBQUMsSUFBSSxDQUFDZCxLQUFLLENBQUM4WCxlQUFlLEVBQUUsSUFBSSxDQUFDRix1QkFBdUIsQ0FBQzlXLEdBQUcsQ0FBQztNQUNqRSxJQUFHLENBQUMsSUFBSSxDQUFDZCxLQUFLLENBQUMrWCxlQUFlLEVBQUUsSUFBSSxDQUFDSixxQkFBcUIsQ0FBQzdXLEdBQUcsQ0FBQztJQUNqRTtFQUFDO0lBQUFQLEdBQUE7SUFBQUMsS0FBQSxFQUVELFNBQUErRSxHQUFHQSxDQUFBLEVBQWdCO01BQUEsSUFBQThGLE1BQUE7TUFDakIsSUFBSTJNLFVBQVUsR0FBRyxLQUFLO01BQUMsU0FBQUMsS0FBQSxHQUFBcFUsU0FBQSxDQUFBQyxNQUFBLEVBRGxCQyxVQUFVLE9BQUFDLEtBQUEsQ0FBQWlVLEtBQUEsR0FBQUMsS0FBQSxNQUFBQSxLQUFBLEdBQUFELEtBQUEsRUFBQUMsS0FBQTtRQUFWblUsVUFBVSxDQUFBbVUsS0FBQSxJQUFBclUsU0FBQSxDQUFBcVUsS0FBQTtNQUFBO01BR2YsSUFBR25VLFVBQVUsQ0FBQ0QsTUFBTSxJQUFJLElBQUksQ0FBQ0MsVUFBVSxDQUFDRCxNQUFNLEVBQUU7UUFDOUNDLFVBQVUsQ0FBQ2tHLE9BQU8sQ0FBQyxVQUFDYyxTQUFTLEVBQUVvTixDQUFDLEVBQUs7VUFDbkMsSUFBRzlNLE1BQUksQ0FBQ3RILFVBQVUsQ0FBQ29VLENBQUMsQ0FBQyxJQUFJcE4sU0FBUyxFQUFFaU4sVUFBVSxHQUFHLElBQUk7UUFDdkQsQ0FBQyxDQUFDO01BQ0osQ0FBQyxNQUFNO1FBQ0xBLFVBQVUsR0FBRyxJQUFJO01BQ25CO01BRUEsSUFBR0EsVUFBVSxFQUFFO1FBQ2IsSUFBSSxDQUFDelAsS0FBSyxDQUFDLENBQUM7UUFDWixJQUFJLENBQUMrTyxNQUFNLENBQUFyTCxLQUFBLENBQVgsSUFBSSxFQUFXbEksVUFBVSxDQUFDO01BQzVCO0lBQ0Y7RUFBQztJQUFBeEQsR0FBQTtJQUFBQyxLQUFBLEVBRUQsU0FBQXdFLEdBQUdBLENBQUMrRixTQUFTLEVBQUU7TUFDYmxDLHFCQUFBLENBQUttTyxXQUFXLEVBQWhCLElBQWUsQ0FBQyxDQUFDaEwsSUFBSSxDQUFDakIsU0FBUyxDQUFDO01BQ2hDQSxTQUFTLENBQUNqRCxNQUFNLEdBQUcsSUFBSTtNQUN2QixJQUFHLElBQUksQ0FBQ2pILE1BQU0sRUFBRWtLLFNBQVMsQ0FBQ2xLLE1BQU0sR0FBRyxJQUFJLENBQUNBLE1BQU07TUFDOUNrSyxTQUFTLENBQUNvQyxlQUFlLENBQUMsSUFBSSxDQUFDaUwsbUJBQW1CLENBQUM7TUFDbkQsSUFBSSxDQUFDaFIsT0FBTyxDQUFDeUMsYUFBYSxDQUFDLFVBQVUsRUFBRSxJQUFJLENBQUM7SUFDOUM7RUFBQztJQUFBdEosR0FBQTtJQUFBQyxLQUFBLEVBRUQsU0FBQThXLE1BQU1BLENBQUEsRUFBZ0I7TUFBQSxJQUFBZSxNQUFBO01BQUEsU0FBQUMsS0FBQSxHQUFBelUsU0FBQSxDQUFBQyxNQUFBLEVBQVpDLFVBQVUsT0FBQUMsS0FBQSxDQUFBc1UsS0FBQSxHQUFBQyxLQUFBLE1BQUFBLEtBQUEsR0FBQUQsS0FBQSxFQUFBQyxLQUFBO1FBQVZ4VSxVQUFVLENBQUF3VSxLQUFBLElBQUExVSxTQUFBLENBQUEwVSxLQUFBO01BQUE7TUFDbEJ4VSxVQUFVLENBQUNrRyxPQUFPLENBQUMsVUFBQWMsU0FBUztRQUFBLE9BQUlzTixNQUFJLENBQUNyVCxHQUFHLENBQUMrRixTQUFTLENBQUM7TUFBQSxFQUFDO0lBQ3REO0VBQUM7SUFBQXhLLEdBQUE7SUFBQUMsS0FBQSxFQUVELFNBQUErSSxNQUFNQSxDQUFDd0IsU0FBUyxFQUFFO01BQ2hCLElBQUdsQyxxQkFBQSxDQUFLbU8sV0FBVyxFQUFoQixJQUFlLENBQUMsQ0FBQ3dCLE9BQU8sQ0FBQ3pOLFNBQVMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxFQUFFO1FBQzVDQSxTQUFTLENBQUN3RyxrQkFBa0IsQ0FBQyxJQUFJLENBQUM2RyxtQkFBbUIsQ0FBQztRQUN0RHRSLHFCQUFBLENBQUtrUSxXQUFXLEVBQWhCLElBQUksRUFBZW5PLHFCQUFBLENBQUttTyxXQUFXLEVBQWhCLElBQWUsQ0FBQyxDQUFDeUIsTUFBTSxDQUFDLFVBQUFDLE9BQU87VUFBQSxPQUFJM04sU0FBUyxJQUFJMk4sT0FBTztRQUFBLEVBQTNELENBQUM7UUFDaEIsSUFBSSxDQUFDdFIsT0FBTyxDQUFDeUMsYUFBYSxDQUFDLFVBQVUsRUFBRSxJQUFJLENBQUM7TUFDOUM7SUFDRjtFQUFDO0lBQUF0SixHQUFBO0lBQUFDLEtBQUEsRUFFRCxTQUFBK0gsS0FBS0EsQ0FBQSxFQUFHO01BQUEsSUFBQW9RLE1BQUE7TUFDTjlQLHFCQUFBLENBQUttTyxXQUFXLEVBQWhCLElBQWUsQ0FBQyxDQUFDL00sT0FBTyxDQUFDLFVBQUFjLFNBQVM7UUFBQSxPQUFJNE4sTUFBSSxDQUFDcFAsTUFBTSxDQUFDd0IsU0FBUyxDQUFDO01BQUEsRUFBQztNQUM3RCxJQUFJLENBQUMzRCxPQUFPLENBQUN5QyxhQUFhLENBQUMsVUFBVSxFQUFFLElBQUksQ0FBQztJQUM5QztFQUFDO0lBQUF0SixHQUFBO0lBQUFlLEdBQUEsRUFFRCxTQUFBQSxJQUFBLEVBQWlCO01BQ2YsSUFBTXlDLFVBQVUsR0FBRyxFQUFFO01BQ3JCOEUscUJBQUEsQ0FBS21PLFdBQVcsRUFBaEIsSUFBZSxDQUFDLENBQUMvTSxPQUFPLENBQUMsVUFBQWMsU0FBUztRQUFBLE9BQUloSCxVQUFVLENBQUNpSSxJQUFJLENBQUNqQixTQUFTLENBQUM7TUFBQSxFQUFDO01BQ2pFLE9BQU9oSCxVQUFVO0lBQ25CO0VBQUM7SUFBQXhELEdBQUE7SUFBQWUsR0FBQSxFQUVELFNBQUFBLElBQUEsRUFBb0I7TUFDbEIsSUFBTXlDLFVBQVUsR0FBRyxJQUFJLENBQUNBLFVBQVU7TUFDbENBLFVBQVUsQ0FBQ2lJLElBQUksQ0FBQyxJQUFJLENBQUN1TCxtQkFBbUIsQ0FBQztNQUN6Q3hULFVBQVUsQ0FBQ2lJLElBQUksQ0FBQyxJQUFJLENBQUN3TCxpQkFBaUIsQ0FBQztNQUN2QyxPQUFPelQsVUFBVTtJQUNuQjtFQUFDO0lBQUF4RCxHQUFBO0lBQUFDLEtBQUEsRUFFRCxTQUFBK0ssaUJBQWlCQSxDQUFBLEVBQWU7TUFBQSxJQUFBcU4sTUFBQTtNQUFBLElBQWR6TixLQUFLLEdBQUF0SCxTQUFBLENBQUFDLE1BQUEsUUFBQUQsU0FBQSxRQUFBdUgsU0FBQSxHQUFBdkgsU0FBQSxNQUFHLElBQUk7TUFDNUIsSUFBTUUsVUFBVSxHQUFHO1FBQ2pCLFdBQVcsRUFBRW9ILEtBQUs7UUFDbEIsUUFBUSxFQUFFO01BQ1osQ0FBQztNQUVELElBQUdBLEtBQUssQ0FBQ0csYUFBYSxFQUFFO1FBQ3RCSCxLQUFLLENBQUNHLGFBQWEsQ0FBQ3JCLE9BQU8sQ0FBQyxVQUFBYyxTQUFTO1VBQUEsT0FBSWhILFVBQVUsQ0FBQzBILE1BQU0sQ0FBQ08sSUFBSSxDQUFDNE0sTUFBSSxDQUFDck4saUJBQWlCLENBQUNSLFNBQVMsQ0FBQyxDQUFDO1FBQUEsRUFBQztNQUNyRztNQUVBLE9BQU9oSCxVQUFVO0lBQ25CO0VBQUM7SUFBQXhELEdBQUE7SUFBQUMsS0FBQSxFQU1ELFNBQUFpUCxPQUFPQSxDQUFBLEVBQUc7TUFDUixJQUFJb0osT0FBTyxHQUFBalksYUFBQSxDQUFBK0wsU0FBQSx5QkFBa0I7TUFFN0I5RCxxQkFBQSxDQUFLbU8sV0FBVyxFQUFoQixJQUFlLENBQUMsQ0FBQy9NLE9BQU8sQ0FBQyxVQUFBYyxTQUFTLEVBQUk7UUFDcEMsSUFBR0EsU0FBUyxJQUFJQSxTQUFTLENBQUMwRSxPQUFPLElBQUkxRSxTQUFTLENBQUMwRSxPQUFPLENBQUMsQ0FBQyxFQUFFO1VBQ3hEb0osT0FBTyxHQUFHLElBQUk7UUFDaEI7TUFDRixDQUFDLENBQUM7TUFFRixJQUFHQSxPQUFPLEVBQUUsSUFBSSxDQUFDelIsT0FBTyxDQUFDeUMsYUFBYSxDQUFDLFVBQVUsRUFBRSxJQUFJLENBQUM7SUFDMUQ7RUFBQztJQUFBdEosR0FBQTtJQUFBQyxLQUFBLEVBRUQsU0FBQWdQLE1BQU1BLENBQUEsRUFBRztNQUNQLElBQUlxSixPQUFPLEdBQUFqWSxhQUFBLENBQUErTCxTQUFBLHdCQUFpQjtNQUU1QjlELHFCQUFBLENBQUttTyxXQUFXLEVBQWhCLElBQWUsQ0FBQyxDQUFDL00sT0FBTyxDQUFDLFVBQUFjLFNBQVMsRUFBSTtRQUNwQyxJQUFHQSxTQUFTLElBQUlBLFNBQVMsQ0FBQ3lFLE1BQU0sSUFBSXpFLFNBQVMsQ0FBQ3lFLE1BQU0sQ0FBQyxDQUFDLEVBQUU7VUFDdERxSixPQUFPLEdBQUcsSUFBSTtRQUNoQjtNQUNGLENBQUMsQ0FBQztNQUVGLElBQUdBLE9BQU8sRUFBRSxJQUFJLENBQUN6UixPQUFPLENBQUN5QyxhQUFhLENBQUMsVUFBVSxFQUFFLElBQUksQ0FBQztJQUMxRDtFQUFDO0lBQUF0SixHQUFBO0lBQUFlLEdBQUEsRUFFRCxTQUFBQSxJQUFBLEVBQVk7TUFDVixJQUFNVSxLQUFLLEdBQUksSUFBSSxDQUFDOEYsTUFBTSxJQUFJLElBQUksQ0FBQ0EsTUFBTSxDQUFDOUYsS0FBTTtNQUNoRCxJQUFNZ00sR0FBRyxHQUFHLElBQUksQ0FBQ3RLLFFBQVEsSUFBSSxJQUFJLEdBQUduQyxJQUFJLENBQUN5TSxHQUFHLENBQUMsSUFBSSxDQUFDdEssUUFBUSxFQUFFMUIsS0FBSyxDQUFDLEdBQUcsSUFBSTtNQUN6RSxPQUFPLElBQUksQ0FBQ3lELFFBQVEsSUFBSSxJQUFJLEdBQUdsRSxJQUFJLENBQUMwTSxHQUFHLENBQUMsSUFBSSxDQUFDeEksUUFBUSxFQUFFdUksR0FBRyxJQUFJLElBQUksR0FBR0EsR0FBRyxHQUFHaE0sS0FBSyxDQUFDLEdBQUdBLEtBQUs7SUFDM0Y7RUFBQztJQUFBekIsR0FBQTtJQUFBZSxHQUFBLEVBRUQsU0FBQUEsSUFBQSxFQUFhO01BQ1gsSUFBTVcsTUFBTSxHQUFJLElBQUksQ0FBQzZGLE1BQU0sSUFBSSxJQUFJLENBQUNBLE1BQU0sQ0FBQzdGLE1BQU87TUFDbEQsSUFBTStMLEdBQUcsR0FBRyxJQUFJLENBQUN0SyxRQUFRLElBQUksSUFBSSxHQUFHbkMsSUFBSSxDQUFDeU0sR0FBRyxDQUFDLElBQUksQ0FBQ3JLLFNBQVMsRUFBRTFCLE1BQU0sQ0FBQyxHQUFHLElBQUk7TUFDM0UsT0FBTyxJQUFJLENBQUN5RCxTQUFTLElBQUksSUFBSSxHQUFHbkUsSUFBSSxDQUFDME0sR0FBRyxDQUFDLElBQUksQ0FBQ3ZJLFNBQVMsRUFBRXNJLEdBQUcsSUFBSSxJQUFJLEdBQUdBLEdBQUcsR0FBRy9MLE1BQU0sQ0FBQyxHQUFHQSxNQUFNO0lBQy9GO0VBQUM7SUFBQTFCLEdBQUE7SUFBQWUsR0FBQSxFQUVELFNBQUFBLElBQUEsRUFBZTtNQUNiLE9BQU91SCxxQkFBQSxDQUFLb08sU0FBVSxFQUFmLElBQWMsQ0FBQztJQUN4QixDQUFDO0lBQUExUixHQUFBLEVBTUQsU0FBQUEsSUFBYTdCLFFBQVEsRUFBRTtNQUNyQixJQUFHQSxRQUFRLElBQUltRixxQkFBQSxDQUFLb08sU0FBVSxFQUFmLElBQWMsQ0FBQyxFQUFFO1FBQzlCblEscUJBQUEsQ0FBS21RLFNBQVUsRUFBZixJQUFJLEVBQWN2VCxRQUFKLENBQUM7UUFDZixJQUFJLENBQUMwRCxPQUFPLENBQUN5QyxhQUFhLENBQUMsVUFBVSxFQUFFLElBQUksQ0FBQztNQUM5QztJQUNGO0VBQUM7SUFBQXRKLEdBQUE7SUFBQWUsR0FBQSxFQVRELFNBQUFBLElBQUEsRUFBZ0I7TUFDZCxPQUFPdUgscUJBQUEsQ0FBS3FPLFVBQVcsRUFBaEIsSUFBZSxDQUFDO0lBQ3pCLENBQUM7SUFBQTNSLEdBQUEsRUFTRCxTQUFBQSxJQUFjNUIsU0FBUyxFQUFFO01BQ3ZCLElBQUdBLFNBQVMsSUFBSWtGLHFCQUFBLENBQUtxTyxVQUFXLEVBQWhCLElBQWUsQ0FBQyxFQUFFO1FBQ2hDcFEscUJBQUEsQ0FBS29RLFVBQVcsRUFBaEIsSUFBSSxFQUFldlQsU0FBSixDQUFDO1FBQ2hCLElBQUksQ0FBQ3lELE9BQU8sQ0FBQ3lDLGFBQWEsQ0FBQyxVQUFVLEVBQUUsSUFBSSxDQUFDO01BQzlDO0lBQ0Y7RUFBQztJQUFBdEosR0FBQTtJQUFBZSxHQUFBLEVBRUQsU0FBQUEsSUFBQSxFQUFlO01BQ2IsT0FBT3VILHFCQUFBLENBQUtzTyxTQUFVLEVBQWYsSUFBYyxDQUFDO0lBQ3hCLENBQUM7SUFBQTVSLEdBQUEsRUFNRCxTQUFBQSxJQUFhRSxRQUFRLEVBQUU7TUFDckIsSUFBR0EsUUFBUSxJQUFJb0QscUJBQUEsQ0FBS3NPLFNBQVUsRUFBZixJQUFjLENBQUMsRUFBRTtRQUM5QnJRLHFCQUFBLENBQUtxUSxTQUFVLEVBQWYsSUFBSSxFQUFjMVIsUUFBSixDQUFDO1FBQ2YsSUFBSSxDQUFDMkIsT0FBTyxDQUFDeUMsYUFBYSxDQUFDLFVBQVUsRUFBRSxJQUFJLENBQUM7TUFDOUM7SUFDRjtFQUFDO0lBQUF0SixHQUFBO0lBQUFlLEdBQUEsRUFURCxTQUFBQSxJQUFBLEVBQWdCO01BQ2QsT0FBT3VILHFCQUFBLENBQUt1TyxVQUFXLEVBQWhCLElBQWUsQ0FBQztJQUN6QixDQUFDO0lBQUE3UixHQUFBLEVBU0QsU0FBQUEsSUFBY0csU0FBUyxFQUFFO01BQ3ZCLElBQUdBLFNBQVMsSUFBSW1ELHFCQUFBLENBQUt1TyxVQUFXLEVBQWhCLElBQWUsQ0FBQyxFQUFFO1FBQ2hDdFEscUJBQUEsQ0FBS3NRLFVBQVcsRUFBaEIsSUFBSSxFQUFlMVIsU0FBSixDQUFDO1FBQ2hCLElBQUksQ0FBQzBCLE9BQU8sQ0FBQ3lDLGFBQWEsQ0FBQyxVQUFVLEVBQUUsSUFBSSxDQUFDO01BQzlDO0lBQ0Y7RUFBQztJQUFBdEosR0FBQTtJQUFBQyxLQUFBLEVBRUQsU0FBQTBNLGlCQUFpQkEsQ0FBQSxFQUFHLENBQUU7RUFBQztJQUFBM00sR0FBQTtJQUFBQyxLQUFBLEVBRXZCLFNBQUF5TSxnQkFBZ0JBLENBQUEsRUFBRyxDQUFFO0VBQUM7SUFBQTFNLEdBQUE7SUFBQWUsR0FBQSxFQWV0QixTQUFBQSxJQUFBLEVBQWE7TUFDWCxPQUFBVixhQUFBLENBQUErTCxTQUFBO0lBQ0YsQ0FBQztJQUFBcEgsR0FBQSxFQWZELFNBQUFBLElBQVcxRSxNQUFNLEVBQUU7TUFBQSxJQUFBaVksTUFBQTtNQUNqQixJQUFHalksTUFBTSxJQUFJLElBQUksQ0FBQ0EsTUFBTSxFQUFFO1FBQ3hCMkUsYUFBQSxDQUFBbUgsU0FBQSxZQUFlOUwsTUFBTTtRQUVyQmdJLHFCQUFBLENBQUttTyxXQUFXLEVBQWhCLElBQWUsQ0FBQyxDQUFDL00sT0FBTyxDQUFDLFVBQUFjLFNBQVMsRUFBSTtVQUNwQ0EsU0FBUyxDQUFDbEssTUFBTSxHQUFHQSxNQUFNO1VBQ3pCLElBQUdrSyxTQUFTLENBQUMzRCxPQUFPLEVBQUUyRCxTQUFTLENBQUMzRCxPQUFPLENBQUN5QyxhQUFhLENBQUMsVUFBVSxFQUFFaVAsTUFBSSxDQUFDO1FBQ3pFLENBQUMsQ0FBQztRQUVGLElBQUksQ0FBQzFSLE9BQU8sQ0FBQ3lDLGFBQWEsQ0FBQyxVQUFVLEVBQUUsSUFBSSxDQUFDO01BQzlDO0lBQ0Y7RUFBQztJQUFBdEosR0FBQTtJQUFBQyxLQUFBLEVBTUQsU0FBQXVZLGNBQWNBLENBQUNoTyxTQUFTLEVBQUU7TUFDeEIsSUFBSVMsTUFBTSxHQUFHLElBQUk7TUFFakIzQyxxQkFBQSxDQUFLbU8sV0FBVyxFQUFoQixJQUFlLENBQUMsQ0FBQy9NLE9BQU8sQ0FBQyxVQUFDK08sQ0FBQyxFQUFFYixDQUFDLEVBQUs7UUFDakMsSUFBR2EsQ0FBQyxJQUFJak8sU0FBUyxFQUFFUyxNQUFNLEdBQUcyTSxDQUFDO01BQy9CLENBQUMsQ0FBQztNQUVGLE9BQU8zTSxNQUFNO0lBQ2Y7RUFBQztJQUFBakwsR0FBQTtJQUFBZSxHQUFBLEVBRUQsU0FBQUEsSUFBQSxFQUFzQjtNQUNwQixPQUFPLElBQUksQ0FBQ3lNLFVBQVUsR0FBRyxJQUFJLENBQUMvTCxLQUFLO0lBQ3JDO0VBQUM7SUFBQXpCLEdBQUE7SUFBQWUsR0FBQSxFQUVELFNBQUFBLElBQUEsRUFBc0I7TUFDcEIsT0FBTyxJQUFJLENBQUM0TSxXQUFXLEdBQUcsSUFBSSxDQUFDak0sTUFBTTtJQUN2QztFQUFDO0lBQUExQixHQUFBO0lBQUFDLEtBQUEsRUFFRCxTQUFBaVgsZ0JBQWdCQSxDQUFDaEosTUFBTSxFQUFFQyxNQUFNLEVBQUU7TUFDL0IsSUFBRyxDQUFDLElBQUksQ0FBQzFPLEtBQUssQ0FBQytYLGVBQWUsRUFBRTtRQUM5QixJQUFHLElBQUksQ0FBQ2tCLGVBQWUsSUFBSSxDQUFDLEVBQUU7VUFDNUIsSUFBSSxDQUFDdEwsYUFBYSxHQUFHLENBQUM7UUFDeEIsQ0FBQyxNQUFNO1VBQ0wsSUFBTXVMLGlCQUFpQixHQUFHLElBQUksQ0FBQ3ZMLGFBQWEsR0FBRyxJQUFJLENBQUNzTCxlQUFlO1VBRW5FLElBQUdDLGlCQUFpQixJQUFJLENBQUMsSUFBSXhLLE1BQU0sSUFBSSxDQUFDLEVBQUU7WUFDeEMsSUFBSSxDQUFDZixhQUFhLEdBQUdwTSxJQUFJLENBQUN5TSxHQUFHLENBQUMsQ0FBQyxFQUFFLElBQUksQ0FBQ25PLENBQUMsQ0FBQztVQUMxQyxDQUFDLE1BQU0sSUFBR3FaLGlCQUFpQixHQUFHLENBQUMsSUFBSXhLLE1BQU0sSUFBSSxDQUFDLEVBQUU7WUFDOUMsSUFBSSxDQUFDZixhQUFhLEdBQUcsSUFBSSxDQUFDc0wsZUFBZTtVQUMzQztRQUNGO01BQ0YsQ0FBQyxNQUFNO1FBQ0wsSUFBSSxDQUFDdEwsYUFBYSxJQUFJZSxNQUFNO01BQzlCO01BRUEsSUFBRyxDQUFDLElBQUksQ0FBQzFPLEtBQUssQ0FBQzhYLGVBQWUsRUFBRTtRQUM5QixJQUFHLElBQUksQ0FBQ3FCLGVBQWUsSUFBSSxDQUFDLEVBQUU7VUFDNUIsSUFBSSxDQUFDekwsYUFBYSxHQUFHLENBQUM7UUFDeEIsQ0FBQyxNQUFNO1VBQ0wsSUFBTTBMLGlCQUFpQixHQUFHLElBQUksQ0FBQzFMLGFBQWEsR0FBRyxJQUFJLENBQUN5TCxlQUFlO1VBRW5FLElBQUdDLGlCQUFpQixJQUFJLENBQUMsSUFBSTNLLE1BQU0sSUFBSSxDQUFDLEVBQUU7WUFDeEMsSUFBSSxDQUFDZixhQUFhLEdBQUduTSxJQUFJLENBQUN5TSxHQUFHLENBQUMsQ0FBQyxFQUFFLElBQUksQ0FBQ3BPLENBQUMsQ0FBQztVQUMxQyxDQUFDLE1BQU0sSUFBR3daLGlCQUFpQixHQUFHLENBQUMsSUFBSTNLLE1BQU0sSUFBSSxDQUFDLEVBQUU7WUFDOUMsSUFBSSxDQUFDZixhQUFhLEdBQUcsSUFBSSxDQUFDeUwsZUFBZTtVQUMzQztRQUNGO01BQ0YsQ0FBQyxNQUFNO1FBQ0wsSUFBSSxDQUFDekwsYUFBYSxJQUFJZSxNQUFNO01BQzlCO0lBQ0Y7RUFBQztJQUFBbE8sR0FBQTtJQUFBQyxLQUFBLEVBRUQsU0FBQW9OLGtCQUFrQkEsQ0FBQzdDLFNBQVMsRUFBRTtNQUM1QixJQUFHeEwsbURBQVMsQ0FBQ2tDLE9BQU8sQ0FBQzhGLHFCQUFxQixFQUFFLE9BQU8sSUFBSTtNQUV2RCxJQUFHd0QsU0FBUyxZQUFZekwsa0RBQVMsSUFBSSxDQUFDeUwsU0FBUyxDQUFDcEssTUFBTSxFQUFFO1FBQ3RELElBQUcsQ0FBQ3BCLG1EQUFTLENBQUNrQyxPQUFPLENBQUNrUywwQ0FBMEMsSUFBSSxJQUFJLENBQUM3TCxNQUFNLElBQUksSUFBSSxDQUFDQSxNQUFNLENBQUM4RixrQkFBa0IsSUFBSSxDQUFDLElBQUksQ0FBQzlGLE1BQU0sQ0FBQzhGLGtCQUFrQixDQUFDN0MsU0FBUyxDQUFDLEVBQUU7VUFDL0osT0FBTyxLQUFLO1FBQ2Q7UUFFQSxJQUFNL0ksS0FBSyxHQUFHLElBQUksQ0FBQ0EsS0FBSztRQUN4QixJQUFNQyxNQUFNLEdBQUcsSUFBSSxDQUFDQSxNQUFNO1FBQzFCLElBQU1vWCxjQUFjLEdBQUd0TyxTQUFTLENBQUMvSSxLQUFLO1FBQ3RDLElBQU1zWCxlQUFlLEdBQUd2TyxTQUFTLENBQUM5SSxNQUFNO1FBQ3hDLElBQU1zWCxXQUFXLEdBQUksSUFBSSxDQUFDMVksTUFBTSxJQUFJLElBQUksQ0FBQ0EsTUFBTSxDQUFDbUIsS0FBSyxJQUFLQSxLQUFLO1FBQy9ELElBQU13WCxZQUFZLEdBQUksSUFBSSxDQUFDM1ksTUFBTSxJQUFJLElBQUksQ0FBQ0EsTUFBTSxDQUFDb0IsTUFBTSxJQUFLQSxNQUFNO1FBRWxFLElBQUc4SSxTQUFTLENBQUNuTCxDQUFDLEdBQUd5WixjQUFjLElBQUksSUFBSSxDQUFDelosQ0FBQyxJQUFJbUwsU0FBUyxDQUFDbkwsQ0FBQyxJQUFJLElBQUksQ0FBQ0EsQ0FBQyxHQUFHb0MsS0FBSyxJQUFJK0ksU0FBUyxDQUFDbEwsQ0FBQyxHQUFHeVosZUFBZSxJQUFJLElBQUksQ0FBQ3paLENBQUMsSUFBSWtMLFNBQVMsQ0FBQ2xMLENBQUMsSUFBSSxJQUFJLENBQUNBLENBQUMsR0FBR29DLE1BQU0sSUFBSThJLFNBQVMsQ0FBQ25MLENBQUMsR0FBR3laLGNBQWMsSUFBSSxDQUFDLElBQUl0TyxTQUFTLENBQUNuTCxDQUFDLElBQUkyWixXQUFXLElBQUl4TyxTQUFTLENBQUNsTCxDQUFDLEdBQUd5WixlQUFlLElBQUksQ0FBQyxJQUFJdk8sU0FBUyxDQUFDbEwsQ0FBQyxJQUFJMlosWUFBWSxFQUFFO1VBQy9SLE9BQU8sSUFBSTtRQUNiO01BQ0Y7TUFFQSxPQUFPLEtBQUs7SUFDZDtFQUFDO0lBQUFqWixHQUFBO0lBQUFlLEdBQUEsRUFFRCxTQUFBQSxJQUFBLEVBQWdCO01BQ2QsT0FBTyxDQUFDL0IsbURBQVMsQ0FBQ2tDLE9BQU8sQ0FBQ2lHLDBCQUEwQixLQUFPLElBQUksQ0FBQ2hFLFFBQVEsSUFBSSxJQUFJLENBQUNxSyxVQUFVLEdBQUcsSUFBSSxDQUFDckssUUFBUSxJQUFNLElBQUksQ0FBQ0MsU0FBUyxJQUFJLElBQUksQ0FBQ3VLLFdBQVcsR0FBRyxJQUFJLENBQUN2SyxTQUFVLENBQUUsSUFBSSxJQUFJLENBQUMySixTQUFTLElBQUksSUFBSTtJQUNuTTtFQUFDO0lBQUEvTSxHQUFBO0lBQUFlLEdBQUEsRUFFRCxTQUFBQSxJQUFBLEVBQW1CO01BQ2pCLE9BQU8sSUFBSTlCLCtDQUFLLENBQUM7UUFDZixTQUFTLEVBQUUsQ0FBQztRQUNaLHdCQUF3QixFQUFFRCxtREFBUyxDQUFDa0MsT0FBTyxDQUFDOFE7TUFDOUMsQ0FBQyxDQUFDO0lBQ0o7RUFBQztJQUFBaFMsR0FBQTtJQUFBQyxLQUFBLEVBN0xELFNBQU9tTCxrQkFBa0JBLENBQUNaLFNBQVMsRUFBRTJJLEtBQUssRUFBRTtNQUMxQyxPQUFPM0ksU0FBUyxDQUFDQSxTQUFTLENBQUM4SCxTQUFTLENBQUNhLEtBQUssQ0FBQzNJLFNBQVMsQ0FBQztJQUN2RDtFQUFDO0FBQUEsRUE5SW9DaEosNENBQUc7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzFCMUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ29DO0FBQ0E7QUFDUjtBQUNBO0FBQUEsSUFFUDBYLEtBQUssMEJBQUE5WixVQUFBO0VBR3hCLFNBQUE4WixNQUFZN1osQ0FBQyxFQUFFQyxDQUFDLEVBQUVtQyxLQUFLLEVBQUVDLE1BQU0sRUFBRWpDLEtBQUssRUFBRTtJQUFBLElBQUFDLEtBQUE7SUFBQUMsaUZBQUEsT0FBQXVaLEtBQUE7SUFDdEN4WixLQUFBLEdBQUFFLFVBQUEsT0FBQXNaLEtBQUEsR0FBTTdaLENBQUMsRUFBRUMsQ0FBQyxFQUFFbUMsS0FBSyxFQUFFQyxNQUFNLEVBQUVqQyxLQUFLO0lBQUVJLGlGQUFBLENBQUFILEtBQUEsZ0JBSHZCLEtBQUs7SUFBQSxPQUFBQSxLQUFBO0VBSWxCO0VBQUNJLDJFQUFBLENBQUFvWixLQUFBLEVBQUE5WixVQUFBO0VBQUEsT0FBQVcsOEVBQUEsQ0FBQW1aLEtBQUE7SUFBQWxaLEdBQUE7SUFBQUMsS0FBQSxFQUVELFNBQUFDLElBQUlBLENBQUNDLE9BQU8sRUFBRTtNQUNaLElBQUcsSUFBSSxDQUFDQyxNQUFNLEVBQUU7TUFDaEJDLGFBQUEsQ0FBQTZZLEtBQUEsb0JBQVcvWSxPQUFPO01BRWxCLElBQU1HLE1BQU0sR0FBR0gsT0FBTyxDQUFDRyxNQUFNO01BQzdCLElBQU1DLEdBQUcsR0FBR0QsTUFBTSxDQUFDRSxVQUFVLENBQUMsSUFBSSxDQUFDO01BRW5DdEIsK0NBQUssQ0FBQ2lhLFNBQVMsQ0FBQzVZLEdBQUcsRUFBRSxJQUFJLENBQUNsQixDQUFDLEVBQUUsSUFBSSxDQUFDQyxDQUFDLEVBQUUsSUFBSSxDQUFDbUMsS0FBSyxFQUFFLElBQUksQ0FBQ0MsTUFBTSxFQUFFLElBQUksQ0FBQ2pDLEtBQUssQ0FBQ2lCLFNBQVMsRUFBRSxJQUFJLENBQUNqQixLQUFLLENBQUNtQixLQUFLLEVBQUUsSUFBSSxDQUFDbkIsS0FBSyxDQUFDb0IsT0FBTyxDQUFDO01BRXpILElBQUksQ0FBQ0MsSUFBSSxHQUFHLElBQUk7SUFDbEI7RUFBQztJQUFBZCxHQUFBO0lBQUFlLEdBQUEsRUFFRCxTQUFBQSxJQUFBLEVBQVk7TUFDVixPQUFPVixhQUFBLENBQUE2WSxLQUFBLHNCQUFjLElBQUksQ0FBQ3paLEtBQUssQ0FBQ2lCLFNBQVM7SUFDM0MsQ0FBQztJQUFBc0UsR0FBQSxFQU1ELFNBQUFBLElBQVV2RCxLQUFLLEVBQUU7TUFDZndELGFBQUEsQ0FBQWlVLEtBQUEsV0FBY3pYLEtBQUs7SUFDckI7RUFBQztJQUFBekIsR0FBQTtJQUFBZSxHQUFBLEVBTkQsU0FBQUEsSUFBQSxFQUFhO01BQ1gsT0FBT1YsYUFBQSxDQUFBNlksS0FBQSx1QkFBZSxJQUFJLENBQUN6WixLQUFLLENBQUNpQixTQUFTO0lBQzVDLENBQUM7SUFBQXNFLEdBQUEsRUFNRCxTQUFBQSxJQUFXdEQsTUFBTSxFQUFFO01BQ2pCdUQsYUFBQSxDQUFBaVUsS0FBQSxZQUFleFgsTUFBTTtJQUN2QjtFQUFDO0lBQUExQixHQUFBO0lBQUFlLEdBQUEsRUFFRCxTQUFBQSxJQUFBLEVBQW1CO01BQ2pCLE9BQU8sSUFBSTlCLCtDQUFLLENBQUM7UUFDZixXQUFXLEVBQUVELGtEQUFTLENBQUNrQyxPQUFPLENBQUN5VCx1QkFBdUI7UUFDdEQsT0FBTyxFQUFFM1Ysa0RBQVMsQ0FBQ2tDLE9BQU8sQ0FBQ3dULG1CQUFtQjtRQUM5QyxTQUFTLEVBQUUxVixrREFBUyxDQUFDa0MsT0FBTyxDQUFDdVQ7TUFDL0IsQ0FBQyxDQUFDO0lBQ0o7RUFBQztBQUFBLEVBekNnQzFWLGtEQUFTOzs7Ozs7Ozs7Ozs7Ozs7QUN2QjVDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlFQUFlO0VBQ2JxYSxXQUFXLFdBQVhBLFdBQVdBLENBQUMvWixDQUFDLEVBQUU7SUFDYixPQUFPQSxDQUFDLEdBQUdBLENBQUMsR0FBR0EsQ0FBQztFQUNsQixDQUFDO0VBQ0RnYSxhQUFhLFdBQWJBLGFBQWFBLENBQUNoYSxDQUFDLEVBQUU7SUFDZixJQUFNaWEsRUFBRSxHQUFHLE1BQU07SUFDakIsSUFBTUMsRUFBRSxHQUFHLElBQUk7SUFFZixJQUFHbGEsQ0FBQyxHQUFHLENBQUMsR0FBR2thLEVBQUUsRUFBRTtNQUNiLE9BQU9ELEVBQUUsR0FBR2phLENBQUMsR0FBR0EsQ0FBQztJQUNuQixDQUFDLE1BQU0sSUFBR0EsQ0FBQyxHQUFHLENBQUMsR0FBR2thLEVBQUUsRUFBRTtNQUNwQixPQUFPRCxFQUFFLElBQUlqYSxDQUFDLElBQUksR0FBRyxHQUFHa2EsRUFBRSxDQUFDLEdBQUdsYSxDQUFDLEdBQUcsSUFBSTtJQUN4QyxDQUFDLE1BQU0sSUFBR0EsQ0FBQyxHQUFHLEdBQUcsR0FBR2thLEVBQUUsRUFBRTtNQUN0QixPQUFPRCxFQUFFLElBQUlqYSxDQUFDLElBQUksSUFBSSxHQUFHa2EsRUFBRSxDQUFDLEdBQUdsYSxDQUFDLEdBQUcsTUFBTTtJQUMzQyxDQUFDLE1BQU07TUFDTCxPQUFPaWEsRUFBRSxJQUFJamEsQ0FBQyxJQUFJLEtBQUssR0FBR2thLEVBQUUsQ0FBQyxHQUFHbGEsQ0FBQyxHQUFHLFFBQVE7SUFDOUM7RUFDRixDQUFDO0VBQ0RtYSxjQUFjLFdBQWRBLGNBQWNBLENBQUNuYSxDQUFDLEVBQUU7SUFDaEIsT0FBT0EsQ0FBQyxHQUFHLEdBQUcsR0FBRyxDQUFDLEdBQUdBLENBQUMsR0FBR0EsQ0FBQyxHQUFHQSxDQUFDLEdBQUcsQ0FBQyxHQUFHMkIsSUFBSSxDQUFDeVksR0FBRyxDQUFDLENBQUMsQ0FBQyxHQUFHcGEsQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLENBQUMsR0FBRyxDQUFDO0VBQ2xFLENBQUM7RUFDRHFhLGFBQWEsV0FBYkEsYUFBYUEsQ0FBQ3JhLENBQUMsRUFBRTtJQUNmLE9BQU8sRUFBRTJCLElBQUksQ0FBQzJZLEdBQUcsQ0FBQzNZLElBQUksQ0FBQzRZLEVBQUUsR0FBR3ZhLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxHQUFHLENBQUM7RUFDekMsQ0FBQztFQUNEd2EsY0FBYyxXQUFkQSxjQUFjQSxDQUFDeGEsQ0FBQyxFQUFFO0lBQ2hCLE9BQU9BLENBQUMsR0FBRyxHQUFHLEdBQUcsRUFBRSxHQUFHQSxDQUFDLEdBQUdBLENBQUMsR0FBR0EsQ0FBQyxHQUFHQSxDQUFDLEdBQUdBLENBQUMsR0FBRyxDQUFDLEdBQUcyQixJQUFJLENBQUN5WSxHQUFHLENBQUMsQ0FBQyxDQUFDLEdBQUdwYSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsQ0FBQyxHQUFHLENBQUM7RUFDM0UsQ0FBQztFQUNEeWEsYUFBYSxXQUFiQSxhQUFhQSxDQUFDemEsQ0FBQyxFQUFFO0lBQ2YsT0FBT0EsQ0FBQyxHQUFHLEdBQUcsR0FBRyxDQUFDLENBQUMsR0FBRzJCLElBQUksQ0FBQytZLElBQUksQ0FBQyxDQUFDLEdBQUcvWSxJQUFJLENBQUN5WSxHQUFHLENBQUMsQ0FBQyxHQUFHcGEsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMyQixJQUFJLENBQUMrWSxJQUFJLENBQUMsQ0FBQyxHQUFHL1ksSUFBSSxDQUFDeVksR0FBRyxDQUFDLENBQUMsQ0FBQyxHQUFHcGEsQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDO0VBQ2pILENBQUM7RUFDRDJhLGFBQWEsV0FBYkEsYUFBYUEsQ0FBQzNhLENBQUMsRUFBRTtJQUNmLE9BQU9BLENBQUMsR0FBRyxHQUFHLEdBQUcsQ0FBQyxHQUFHQSxDQUFDLEdBQUdBLENBQUMsR0FBRyxDQUFDLEdBQUcyQixJQUFJLENBQUN5WSxHQUFHLENBQUMsQ0FBQyxDQUFDLEdBQUdwYSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsQ0FBQyxHQUFHLENBQUM7RUFDOUQsQ0FBQztFQUNENGEsY0FBYyxXQUFkQSxjQUFjQSxDQUFDNWEsQ0FBQyxFQUFFO0lBQ2hCLE9BQU9BLENBQUMsR0FBRyxHQUFHLEdBQUcsQ0FBQyxHQUFHQSxDQUFDLEdBQUdBLENBQUMsR0FBR0EsQ0FBQyxHQUFHQSxDQUFDLEdBQUcsQ0FBQyxHQUFHMkIsSUFBSSxDQUFDeVksR0FBRyxDQUFDLENBQUMsQ0FBQyxHQUFHcGEsQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLENBQUMsR0FBRyxDQUFDO0VBQ3RFLENBQUM7RUFDRDZhLGFBQWEsV0FBYkEsYUFBYUEsQ0FBQzdhLENBQUMsRUFBRTtJQUNmLE9BQU9BLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxHQUFHQSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsR0FBR0EsQ0FBQyxHQUFHLEdBQUcsR0FBRzJCLElBQUksQ0FBQ3lZLEdBQUcsQ0FBQyxDQUFDLEVBQUUsRUFBRSxHQUFHcGEsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUMsR0FBRzJCLElBQUksQ0FBQ3lZLEdBQUcsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLEdBQUdwYSxDQUFDLEdBQUcsRUFBRSxDQUFDLElBQUksQ0FBQztFQUNqSCxDQUFDO0VBQ0Q4YSxhQUFhLFdBQWJBLGFBQWFBLENBQUM5YSxDQUFDLEVBQUU7SUFDZixJQUFNK2EsRUFBRSxHQUFHLE9BQU87SUFDbEIsSUFBTUMsRUFBRSxHQUFHRCxFQUFFLEdBQUcsS0FBSztJQUVyQixPQUFPL2EsQ0FBQyxHQUFHLEdBQUcsR0FBSTJCLElBQUksQ0FBQ3lZLEdBQUcsQ0FBQyxDQUFDLEdBQUdwYSxDQUFDLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQ2diLEVBQUUsR0FBRyxDQUFDLElBQUksQ0FBQyxHQUFHaGIsQ0FBQyxHQUFHZ2IsRUFBRSxDQUFDLEdBQUksQ0FBQyxHQUFHLENBQUNyWixJQUFJLENBQUN5WSxHQUFHLENBQUMsQ0FBQyxHQUFHcGEsQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDZ2IsRUFBRSxHQUFHLENBQUMsS0FBS2hiLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQUdnYixFQUFFLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQztFQUN4STtBQUNGLENBQUMsRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDL0REO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUM0QjtBQUNRO0FBQ1I7QUFDRjtBQUNFO0FBQ0U7QUFDTjtBQUFBLElBRUgvVSxXQUFXLDBCQUFBa1YsTUFBQTtFQUM5QixTQUFBbFYsWUFBWWhGLE1BQU0sRUFBRTtJQUFBLElBQUFaLEtBQUE7SUFBQUMsaUZBQUEsT0FBQTJGLFdBQUE7SUFDbEI1RixLQUFBLEdBQUFFLFVBQUEsT0FBQTBGLFdBQUE7SUFDQTVGLEtBQUEsQ0FBS1ksTUFBTSxHQUFHQSxNQUFNO0lBQ3BCWixLQUFBLENBQUsrYSxzQkFBc0IsR0FBRyxJQUFJRiw4Q0FBSyxDQUFDLEVBQUUsRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUl0Yiw4Q0FBSyxDQUFDO01BQUUsV0FBVyxFQUFFLE9BQU87TUFBRSxZQUFZLEVBQUUsUUFBUTtNQUFFLFVBQVUsRUFBRUQsa0RBQVMsQ0FBQ2tDLE9BQU8sQ0FBQ29TLFNBQVMsR0FBRztJQUFLLENBQUMsQ0FBQyxDQUFDO0lBQ3BLNVQsS0FBQSxDQUFLK2Esc0JBQXNCLENBQUNyYSxNQUFNLEdBQUcsSUFBSTtJQUV6QyxJQUFNc2EsZ0JBQWdCLEdBQUcsSUFBSXpYLGdEQUFNLENBQUMsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUloRSw4Q0FBSyxDQUFDO01BQUUsaUJBQWlCLEVBQUVELGtEQUFTLENBQUNrQyxPQUFPLENBQUNxUztJQUFzQyxDQUFDLENBQUMsRUFBRSxJQUFJZ0gsOENBQUssQ0FBQ3ZiLGtEQUFTLENBQUM0RixNQUFNLENBQUN1UixLQUFLLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJbFgsOENBQUssQ0FBQztNQUFFLFdBQVcsRUFBRSxPQUFPO01BQUUsWUFBWSxFQUFFO0lBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUNsUSxJQUFNMGIsdUJBQXVCLEdBQUcsSUFBSTFYLGdEQUFNLENBQUMsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUloRSw4Q0FBSyxDQUFDO01BQUUsaUJBQWlCLEVBQUVELGtEQUFTLENBQUNrQyxPQUFPLENBQUNxUztJQUFzQyxDQUFDLENBQUMsRUFBRSxJQUFJZ0gsOENBQUssQ0FBQ3ZiLGtEQUFTLENBQUM0RixNQUFNLENBQUMwUixPQUFPLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJclgsOENBQUssQ0FBQztNQUFFLFdBQVcsRUFBRSxPQUFPO01BQUUsWUFBWSxFQUFFO0lBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUMzUSxJQUFNMmIsb0JBQW9CLEdBQUcsSUFBSTVYLDZDQUFHLENBQUMsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsQ0FBQyxFQUFFLElBQUkvRCw4Q0FBSyxDQUFDO01BQUUsWUFBWSxFQUFFO0lBQVMsQ0FBQyxDQUFDLEVBQUVTLEtBQUEsQ0FBSythLHNCQUFzQixDQUFDO0lBQzdILElBQU1JLGNBQWMsR0FBRyxJQUFJUCw2Q0FBSSxDQUFDLElBQUlyYiw4Q0FBSyxDQUFDO01BQUUsd0JBQXdCLEVBQUUsRUFBRTtNQUFFLGlCQUFpQixFQUFFRCxrREFBUyxDQUFDa0MsT0FBTyxDQUFDeVU7SUFBNEIsQ0FBQyxDQUFDLEVBQUUsSUFBSTRFLDhDQUFLLENBQUN2YixrREFBUyxDQUFDNEYsTUFBTSxDQUFDc1IsMEJBQTBCLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJalgsOENBQUssQ0FBQztNQUFFLFdBQVcsRUFBRSxPQUFPO01BQUUsWUFBWSxFQUFFO0lBQVMsQ0FBQyxDQUFDLENBQUMsRUFBRTJiLG9CQUFvQixFQUFFLElBQUk1WCw2Q0FBRyxDQUFDLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJL0QsOENBQUssQ0FBQztNQUFFLFlBQVksRUFBRTtJQUFTLENBQUMsQ0FBQyxFQUFFeWIsZ0JBQWdCLEVBQUVDLHVCQUF1QixDQUFDLENBQUM7SUFDeFpFLGNBQWMsQ0FBQzVMLE1BQU0sQ0FBQyxDQUFDO0lBRXZCeUwsZ0JBQWdCLENBQUMvSyxjQUFjLENBQUMsWUFBTTtNQUNwQ2pRLEtBQUEsQ0FBS1ksTUFBTSxDQUFDa0csUUFBUSxHQUFHLEtBQUs7TUFDNUI5RyxLQUFBLENBQUtZLE1BQU0sQ0FBQ3NGLEtBQUssR0FBR2xHLEtBQUEsQ0FBS1ksTUFBTSxDQUFDc0csYUFBYTtNQUM3Q2xILEtBQUEsQ0FBSythLHNCQUFzQixDQUFDcmEsTUFBTSxHQUFHLElBQUk7TUFDekN3YSxvQkFBb0IsQ0FBQ3hYLFNBQVMsR0FBRyxDQUFDO0lBQ3BDLENBQUMsQ0FBQztJQUVGdVgsdUJBQXVCLENBQUNoTCxjQUFjLENBQUMsWUFBTTtNQUMzQ2pRLEtBQUEsQ0FBSythLHNCQUFzQixDQUFDcmEsTUFBTSxHQUFHLENBQUNWLEtBQUEsQ0FBSythLHNCQUFzQixDQUFDcmEsTUFBTTtNQUN4RXdhLG9CQUFvQixDQUFDeFgsU0FBUyxHQUFHLENBQUMxRCxLQUFBLENBQUsrYSxzQkFBc0IsQ0FBQ3JhLE1BQU0sR0FBRyxHQUFHLEdBQUcsQ0FBQztJQUNoRixDQUFDLENBQUM7SUFFRlYsS0FBQSxDQUFLK0UsR0FBRyxDQUFDb1csY0FBYyxDQUFDO0lBQUMsT0FBQW5iLEtBQUE7RUFDM0I7RUFBQ0ksMkVBQUEsQ0FBQXdGLFdBQUEsRUFBQWtWLE1BQUE7RUFBQSxPQUFBemEsOEVBQUEsQ0FBQXVGLFdBQUE7SUFBQXRGLEdBQUE7SUFBQWUsR0FBQSxFQU1ELFNBQUFBLElBQUEsRUFBZ0I7TUFDZCxPQUFPLElBQUksQ0FBQzBaLHNCQUFzQixDQUFDSyxJQUFJO0lBQ3pDLENBQUM7SUFBQTlWLEdBQUEsRUFORCxTQUFBQSxJQUFjOFYsSUFBSSxFQUFFO01BQ2xCLElBQUksQ0FBQ0wsc0JBQXNCLENBQUNLLElBQUksR0FBR0EsSUFBSTtJQUN6QztFQUFDO0FBQUEsRUE5QnNDMVYsOENBQUs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUMxQjlDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQWpCQSxJQWtCcUIyVixLQUFLO0VBQ3hCLFNBQUFBLE1BQVlDLElBQUksRUFBRTtJQUFBcmIsaUZBQUEsT0FBQW9iLEtBQUE7SUFDaEIsSUFBSSxDQUFDQyxJQUFJLEdBQUdBLElBQUk7SUFDaEIsSUFBSSxDQUFDQyxTQUFTLEdBQUcsRUFBRTtFQUNyQjtFQUFDLE9BQUFsYiw4RUFBQSxDQUFBZ2IsS0FBQTtJQUFBL2EsR0FBQTtJQUFBQyxLQUFBLEVBRUQsU0FBQWliLGdCQUFnQkEsQ0FBQ3hRLFFBQVEsRUFBRTtNQUN6QixJQUFJLENBQUN1USxTQUFTLENBQUN4UCxJQUFJLENBQUNmLFFBQVEsQ0FBQztJQUMvQjtFQUFDO0lBQUExSyxHQUFBO0lBQUFDLEtBQUEsRUFFRCxTQUFBa2IsY0FBY0EsQ0FBQ3pRLFFBQVEsRUFBRTtNQUN2QixJQUFJLENBQUN1USxTQUFTLENBQUMvQyxNQUFNLENBQUMsVUFBQUMsT0FBTztRQUFBLE9BQUlBLE9BQU8sSUFBSXpOLFFBQVE7TUFBQSxFQUFDO0lBQ3ZEO0VBQUM7SUFBQTFLLEdBQUE7SUFBQUMsS0FBQSxFQUVELFNBQUFtYixrQkFBa0JBLENBQUEsRUFBRztNQUNuQixJQUFJLENBQUNILFNBQVMsR0FBRyxFQUFFO0lBQ3JCO0VBQUM7QUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDbENIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUM0QjtBQUFBLElBRVBJLFFBQVEsMEJBQUFDLE1BQUE7RUFHM0IsU0FBQUQsU0FBWUUsYUFBYSxFQUFFbGMsQ0FBQyxFQUFFQyxDQUFDLEVBQUVHLEtBQUssRUFBRTtJQUFBLElBQUFDLEtBQUE7SUFBQUMsaUZBQUEsT0FBQTBiLFFBQUE7SUFDdEMzYixLQUFBLEdBQUFFLFVBQUEsT0FBQXliLFFBQUEsR0FBTSxJQUFJLEVBQUVoYyxDQUFDLEVBQUVDLENBQUMsRUFBRUcsS0FBSztJQUFFSSxpRkFBQSxDQUFBSCxLQUFBLGdCQUhkLEtBQUs7SUFLaEJBLEtBQUEsQ0FBSzZiLGFBQWEsR0FBR0EsYUFBYSxJQUFJLEtBQUs7SUFDM0M3YixLQUFBLENBQUs4YixNQUFNLEdBQUcsQ0FBQztJQUNmOWIsS0FBQSxDQUFLK2IsU0FBUyxHQUFHLENBQUM7SUFDbEIvYixLQUFBLENBQUtnYyxVQUFVLEdBQUcsQ0FBQztJQUVuQmhjLEtBQUEsQ0FBS2ljLGdCQUFnQixHQUFHQyxXQUFXLENBQUM7TUFBQSxPQUFNbGMsS0FBQSxDQUFLbWMsUUFBUSxDQUFDLENBQUM7SUFBQSxHQUFFLElBQUksQ0FBQztJQUFDLE9BQUFuYyxLQUFBO0VBQ25FO0VBQUNJLDJFQUFBLENBQUF1YixRQUFBLEVBQUFDLE1BQUE7RUFBQSxPQUFBdmIsOEVBQUEsQ0FBQXNiLFFBQUE7SUFBQXJiLEdBQUE7SUFBQUMsS0FBQSxFQUVELFNBQUFDLElBQUlBLENBQUNDLE9BQU8sRUFBRTtNQUNaLElBQUcsSUFBSSxDQUFDQyxNQUFNLEVBQUU7TUFDaEIsSUFBSSxDQUFDMGEsSUFBSSxHQUFHLE9BQU8sR0FBRyxJQUFJLENBQUNZLFVBQVUsSUFBSSxJQUFJLENBQUNILGFBQWEsR0FBRyxhQUFhLEdBQUcsSUFBSSxDQUFDQyxNQUFNLEdBQUcsRUFBRSxDQUFDO01BQy9GbmIsYUFBQSxDQUFBZ2IsUUFBQSxvQkFBV2xiLE9BQU87TUFDbEIsSUFBSSxDQUFDcWIsTUFBTSxFQUFFO0lBQ2Y7RUFBQztJQUFBeGIsR0FBQTtJQUFBQyxLQUFBLEVBRUQsU0FBQTRiLFFBQVFBLENBQUEsRUFBRztNQUNULElBQUcsSUFBSSxDQUFDSixTQUFTLEdBQUcsQ0FBQyxFQUFFLElBQUksQ0FBQ0MsVUFBVSxHQUFHLElBQUksQ0FBQ0YsTUFBTSxHQUFHLElBQUksQ0FBQ0MsU0FBUztNQUNyRSxJQUFJLENBQUNBLFNBQVMsR0FBRyxJQUFJLENBQUNELE1BQU07SUFDOUI7RUFBQztBQUFBLEVBeEJtQ2pCLDhDQUFLOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDcEIzQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDNEI7QUFDUTtBQUFBLElBRWZ0VyxjQUFjLDBCQUFBN0UsVUFBQTtFQUdqQyxTQUFBNkUsZUFBWU8sS0FBSyxFQUFFbkYsQ0FBQyxFQUFFQyxDQUFDLEVBQUVtQyxLQUFLLEVBQUVDLE1BQU0sRUFBRWpDLEtBQUssRUFBRThFLFdBQVcsRUFBRTtJQUFBLElBQUE3RSxLQUFBO0lBQUFDLGlGQUFBLE9BQUFzRSxjQUFBO0lBQzFEdkUsS0FBQSxHQUFBRSxVQUFBLE9BQUFxRSxjQUFBLEdBQU01RSxDQUFDLEVBQUVDLENBQUMsRUFBRW1DLEtBQUssRUFBRUMsTUFBTSxFQUFFakMsS0FBSztJQUFFSSxpRkFBQSxDQUFBSCxLQUFBLGdCQUh2QixLQUFLO0lBSWhCQSxLQUFBLENBQUs4RSxLQUFLO0lBQ1Y5RSxLQUFBLENBQUswRSxNQUFNO0lBQ1gxRSxLQUFBLENBQUs2RSxXQUFXLEdBQUdBLFdBQVc7SUFFOUIsSUFBR0MsS0FBSyxZQUFZc1gsS0FBSyxFQUFFO01BQ3pCcGMsS0FBQSxDQUFLOEUsS0FBSyxHQUFHQSxLQUFLO01BQ2xCOUUsS0FBQSxDQUFLMEUsTUFBTSxHQUFHSSxLQUFLLENBQUN1WCxHQUFHO0lBQ3pCLENBQUMsTUFBTTtNQUNMcmMsS0FBQSxDQUFLMEUsTUFBTSxHQUFHSSxLQUFLO0lBQ3JCO0lBQUMsT0FBQTlFLEtBQUE7RUFDSDtFQUFDSSwyRUFBQSxDQUFBbUUsY0FBQSxFQUFBN0UsVUFBQTtFQUFBLE9BQUFXLDhFQUFBLENBQUFrRSxjQUFBO0lBQUFqRSxHQUFBO0lBQUFDLEtBQUEsRUFFRCxTQUFBQyxJQUFJQSxDQUFDQyxPQUFPLEVBQUU7TUFDWixJQUFHLElBQUksQ0FBQ0MsTUFBTSxFQUFFO01BQ2hCQyxhQUFBLENBQUE0RCxjQUFBLG9CQUFXOUQsT0FBTztNQUVsQixJQUFNRyxNQUFNLEdBQUdILE9BQU8sQ0FBQ0csTUFBTTtNQUM3QixJQUFNQyxHQUFHLEdBQUdELE1BQU0sQ0FBQ0UsVUFBVSxDQUFDLElBQUksQ0FBQztNQUNuQ0QsR0FBRyxDQUFDb0IsSUFBSSxDQUFDLENBQUM7TUFFVixJQUFHLElBQUksQ0FBQ3lDLE1BQU0sSUFBSSxJQUFJLElBQUksSUFBSSxDQUFDRyxXQUFXLElBQUksSUFBSSxFQUFFO1FBQ2xELElBQUksQ0FBQ1EsU0FBUyxDQUFDLElBQUksQ0FBQ1IsV0FBVyxDQUFDO01BQ2xDO01BRUEsSUFBRyxJQUFJLENBQUNDLEtBQUssSUFBSSxJQUFJLEVBQUU7UUFDckIsSUFBSSxDQUFDd1gsU0FBUyxDQUFDemIsR0FBRyxDQUFDO01BQ3JCO01BRUFBLEdBQUcsQ0FBQ3VCLE9BQU8sQ0FBQyxDQUFDO0lBQ2Y7RUFBQztJQUFBOUIsR0FBQTtJQUFBQyxLQUFBLEVBRUQsU0FBQStiLFNBQVNBLENBQUN6YixHQUFHLEVBQUU7TUFDYnJCLDhDQUFLLENBQUM4YyxTQUFTLENBQUN6YixHQUFHLEVBQUUsSUFBSSxDQUFDaUUsS0FBSyxFQUFFeEQsSUFBSSxDQUFDa0IsS0FBSyxDQUFDLElBQUksQ0FBQzdDLENBQUMsQ0FBQyxFQUFFMkIsSUFBSSxDQUFDa0IsS0FBSyxDQUFDLElBQUksQ0FBQzVDLENBQUMsQ0FBQyxFQUFFMEIsSUFBSSxDQUFDa0IsS0FBSyxDQUFDLElBQUksQ0FBQ1QsS0FBSyxDQUFDLEVBQUVULElBQUksQ0FBQ2tCLEtBQUssQ0FBQyxJQUFJLENBQUNSLE1BQU0sQ0FBQyxDQUFDO0lBQzNIO0VBQUM7SUFBQTFCLEdBQUE7SUFBQWUsR0FBQSxFQUVELFNBQUFBLElBQUEsRUFBWTtNQUNWLElBQUlrYixRQUFRLEdBQUE1YixhQUFBLENBQUE0RCxjQUFBLG1CQUFjO01BQzFCLElBQUlpWSxTQUFTLEdBQUE3YixhQUFBLENBQUE0RCxjQUFBLG9CQUFlO01BRTVCLElBQUcsSUFBSSxDQUFDTSxXQUFXLEVBQUU7UUFDbkIsSUFBSSxDQUFDUSxTQUFTLENBQUMsSUFBSSxDQUFDUixXQUFXLENBQUM7TUFDbEM7TUFFQSxJQUFHLElBQUksQ0FBQ0MsS0FBSyxLQUFLLElBQUksQ0FBQ0EsS0FBSyxDQUFDL0MsS0FBSyxHQUFBcEIsYUFBQSxDQUFBNEQsY0FBQSxtQkFBYyxJQUFJLElBQUksQ0FBQ08sS0FBSyxDQUFDOUMsTUFBTSxHQUFBckIsYUFBQSxDQUFBNEQsY0FBQSxvQkFBZSxDQUFDLEVBQUU7UUFDckYsSUFBTWtZLFdBQVcsR0FBRyxJQUFJLENBQUMzWCxLQUFLLENBQUMvQyxLQUFLLEdBQUcsSUFBSSxDQUFDK0MsS0FBSyxDQUFDOUMsTUFBTTtRQUN4RHVhLFFBQVEsR0FBR2piLElBQUksQ0FBQ29iLEtBQUssQ0FBQy9iLGFBQUEsQ0FBQTRELGNBQUEsc0JBQWMsSUFBSSxDQUFDO1FBQ3pDaVksU0FBUyxHQUFHbGIsSUFBSSxDQUFDb2IsS0FBSyxDQUFDSCxRQUFRLEdBQUdFLFdBQVcsQ0FBQztNQUNoRDtNQUVBLE9BQU87UUFDTDFhLEtBQUssRUFBRXdhLFFBQVE7UUFDZnZhLE1BQU0sRUFBRXdhO01BQ1YsQ0FBQztJQUNIO0VBQUM7SUFBQWxjLEdBQUE7SUFBQWUsR0FBQSxFQUVELFNBQUFBLElBQUEsRUFBYTtNQUNYLE9BQU8sSUFBSSxDQUFDc2IsS0FBSyxDQUFDM2EsTUFBTTtJQUMxQixDQUFDO0lBQUFzRCxHQUFBLEVBVUQsU0FBQUEsSUFBV3RELE1BQU0sRUFBRTtNQUNqQnVELGFBQUEsQ0FBQWhCLGNBQUEsWUFBZXZDLE1BQU07SUFDdkI7RUFBQztJQUFBMUIsR0FBQTtJQUFBZSxHQUFBLEVBVkQsU0FBQUEsSUFBQSxFQUFZO01BQ1YsT0FBTyxJQUFJLENBQUNzYixLQUFLLENBQUM1YSxLQUFLO0lBQ3pCLENBQUM7SUFBQXVELEdBQUEsRUFFRCxTQUFBQSxJQUFVdkQsS0FBSyxFQUFFO01BQ2Z3RCxhQUFBLENBQUFoQixjQUFBLFdBQWN4QyxLQUFLO0lBQ3JCO0VBQUM7SUFBQXpCLEdBQUE7SUFBQUMsS0FBQSxFQU1ELFNBQUE4RSxTQUFTQSxDQUFDUixXQUFXLEVBQUU7TUFDckIsSUFBSSxDQUFDQyxLQUFLLEdBQUdELFdBQVcsQ0FBQ3hELEdBQUcsQ0FBQyxJQUFJLENBQUNxRCxNQUFNLENBQUM7SUFDM0M7RUFBQztBQUFBLEVBOUV5Q3JGLGtEQUFTOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3JCckQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQzRCO0FBQUEsSUFFUHVkLFdBQVc7RUFDOUIsU0FBQUEsWUFBQSxFQUFjO0lBQUEzYyxpRkFBQSxPQUFBMmMsV0FBQTtJQUNaLElBQUksQ0FBQ0MsTUFBTSxHQUFHLENBQUMsQ0FBQztJQUNoQixJQUFJLENBQUNDLGFBQWEsR0FBRyxDQUFDLENBQUM7SUFDdkIsSUFBSSxDQUFDQyxZQUFZLEdBQUcsQ0FBQztJQUNyQixJQUFJLENBQUNqVyxRQUFRLEdBQUcsS0FBSztJQUNyQixJQUFJLENBQUNrVyxjQUFjLEdBQUcsQ0FBQztJQUN2QixJQUFJLENBQUNDLFVBQVUsR0FBRyxJQUFJO0VBQ3hCO0VBQUMsT0FBQTVjLDhFQUFBLENBQUF1YyxXQUFBO0lBQUF0YyxHQUFBO0lBQUFDLEtBQUEsRUFFRCxTQUFBMmMsSUFBSUEsQ0FBQ0MsR0FBRyxFQUFFM1UsSUFBSSxFQUFFO01BQUEsSUFBQXhJLEtBQUE7TUFDZCxJQUFHLElBQUksQ0FBQ2lkLFVBQVUsRUFBRTtRQUNsQixJQUFJLENBQUNELGNBQWMsR0FBR0csR0FBRyxDQUFDdFosTUFBTTtRQUNoQyxJQUFJLENBQUNvWixVQUFVLEdBQUcsS0FBSztNQUN6QjtNQUVBLElBQUdFLEdBQUcsQ0FBQ3RaLE1BQU0sR0FBRyxDQUFDLEVBQUU7UUFDakIsSUFBSSxDQUFDd0IsU0FBUyxDQUFDOFgsR0FBRyxDQUFDLENBQUMsQ0FBQyxFQUFFLFVBQUE1UixNQUFNLEVBQUk7VUFDL0IsSUFBR0EsTUFBTSxJQUFJLElBQUksRUFBRTtZQUNqQjRSLEdBQUcsQ0FBQ0MsS0FBSyxDQUFDLENBQUM7WUFDWHBkLEtBQUksQ0FBQ2tkLElBQUksQ0FBQ0MsR0FBRyxFQUFFM1UsSUFBSSxDQUFDO1VBQ3RCLENBQUMsTUFBTTtZQUNMeEksS0FBSSxDQUFDOEcsUUFBUSxHQUFHLElBQUk7WUFDcEIsT0FBTzBCLElBQUksQ0FBQyxDQUFDO1VBQ2Y7UUFDRixDQUFDLENBQUM7TUFDSixDQUFDLE1BQU07UUFDTCxPQUFPQSxJQUFJLENBQUMsQ0FBQztNQUNmO0lBQ0Y7RUFBQztJQUFBbEksR0FBQTtJQUFBQyxLQUFBLEVBRUQsU0FBQThFLFNBQVNBLENBQUNnWCxHQUFHLEVBQUU3VCxJQUFJLEVBQUU7TUFBQSxJQUFBdUIsTUFBQTtNQUNuQixJQUFJLENBQUNnVCxZQUFZLEVBQUU7TUFFbkIsSUFBTWpZLEtBQUssR0FBRyxJQUFJc1gsS0FBSyxDQUFDLENBQUM7TUFDekJ0WCxLQUFLLENBQUN1WCxHQUFHLEdBQUdBLEdBQUc7TUFFZnZYLEtBQUssQ0FBQ3VZLE1BQU0sR0FBRyxZQUFNO1FBQ25CLElBQUd0VCxNQUFJLENBQUM4UyxNQUFNLElBQUksSUFBSSxFQUFFO1VBQ3RCOVMsTUFBSSxDQUFDOFMsTUFBTSxDQUFDUixHQUFHLENBQUMsR0FBR3ZYLEtBQUs7UUFDMUIsQ0FBQyxNQUFNO1VBQ0wsT0FBTzBELElBQUksQ0FBQyxLQUFLLENBQUM7UUFDcEI7UUFFQXVCLE1BQUksQ0FBQ2dULFlBQVksR0FBRyxDQUFDO1FBQ3JCLE9BQU92VSxJQUFJLENBQUMsSUFBSSxDQUFDO01BQ25CLENBQUM7TUFFRDFELEtBQUssQ0FBQ3dZLE9BQU8sR0FBRyxZQUFNO1FBQ3BCLElBQUd2VCxNQUFJLENBQUNnVCxZQUFZLElBQUksQ0FBQyxFQUFFO1VBQ3pCLElBQUdoVCxNQUFJLENBQUM4UyxNQUFNLElBQUksSUFBSSxFQUFFO1lBQ3RCOVMsTUFBSSxDQUFDOFMsTUFBTSxDQUFDUixHQUFHLENBQUMsR0FBR3ZYLEtBQUs7VUFDMUI7VUFFQWlGLE1BQUksQ0FBQ2dULFlBQVksR0FBRyxDQUFDO1VBQ3JCLE9BQU92VSxJQUFJLENBQUMsS0FBSyxDQUFDO1FBQ3BCO1FBRUErVSxVQUFVLENBQUMsWUFBTTtVQUNmeFQsTUFBSSxDQUFDMUUsU0FBUyxDQUFDZ1gsR0FBRyxFQUFFN1QsSUFBSSxDQUFDO1FBQzNCLENBQUMsRUFBRSxHQUFHLENBQUM7TUFDVCxDQUFDO0lBQ0g7RUFBQztJQUFBbEksR0FBQTtJQUFBQyxLQUFBLEVBRUQsU0FBQWMsR0FBR0EsQ0FBQ2diLEdBQUcsRUFBRXRhLEtBQUssRUFBRUMsTUFBTSxFQUFFO01BQ3RCLElBQUcsSUFBSSxDQUFDNmEsTUFBTSxJQUFJLElBQUksSUFBSVcsTUFBTSxDQUFDQyxTQUFTLENBQUNDLGNBQWMsQ0FBQ0MsSUFBSSxDQUFDLElBQUksQ0FBQ2QsTUFBTSxFQUFFUixHQUFHLENBQUMsRUFBRTtRQUNoRixJQUFNdlgsS0FBSyxHQUFHLElBQUksQ0FBQytYLE1BQU0sQ0FBQ1IsR0FBRyxDQUFDO1FBRTlCLElBQUcsQ0FBQ3RhLEtBQUssSUFBSUMsTUFBTSxNQUFNOEMsS0FBSyxDQUFDL0MsS0FBSyxJQUFJQSxLQUFLLElBQUkrQyxLQUFLLENBQUM5QyxNQUFNLElBQUlBLE1BQU0sQ0FBQyxFQUFFO1VBQ3hFLElBQU00YixDQUFDLEdBQUd0YyxJQUFJLENBQUNrQixLQUFLLENBQUNULEtBQUssQ0FBQztVQUMzQixJQUFNOGIsQ0FBQyxHQUFHdmMsSUFBSSxDQUFDa0IsS0FBSyxDQUFDUixNQUFNLENBQUM7VUFDNUIsSUFBTThiLEVBQUUsR0FBR3pCLEdBQUcsR0FBRyxHQUFHLEdBQUd1QixDQUFDLEdBQUcsR0FBRyxHQUFHQyxDQUFDO1VBRWxDLElBQUcsQ0FBQ0wsTUFBTSxDQUFDQyxTQUFTLENBQUNDLGNBQWMsQ0FBQ0MsSUFBSSxDQUFDLElBQUksQ0FBQ2IsYUFBYSxFQUFFZ0IsRUFBRSxDQUFDLEVBQUU7WUFDaEUsSUFBTXpRLFNBQVMsR0FBRy9HLFFBQVEsQ0FBQ0MsYUFBYSxDQUFDLFFBQVEsQ0FBQztZQUNsRCxJQUFNMUYsR0FBRyxHQUFHd00sU0FBUyxDQUFDdk0sVUFBVSxDQUFDLElBQUksQ0FBQztZQUN0Q3VNLFNBQVMsQ0FBQ3RMLEtBQUssR0FBRzZiLENBQUM7WUFDbkJ2USxTQUFTLENBQUNyTCxNQUFNLEdBQUc2YixDQUFDO1lBRXBCcmUsOENBQUssQ0FBQzhjLFNBQVMsQ0FBQ3piLEdBQUcsRUFBRWlFLEtBQUssRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFOFksQ0FBQyxFQUFFQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRS9ZLEtBQUssQ0FBQy9DLEtBQUssRUFBRStDLEtBQUssQ0FBQzlDLE1BQU0sQ0FBQztZQUN4RSxJQUFJLENBQUM4YSxhQUFhLENBQUNnQixFQUFFLENBQUMsR0FBR3pRLFNBQVM7VUFDcEM7VUFFQSxPQUFPLElBQUksQ0FBQ3lQLGFBQWEsQ0FBQ2dCLEVBQUUsQ0FBQztRQUMvQixDQUFDLE1BQU07VUFDTCxPQUFPaFosS0FBSztRQUNkO01BQ0YsQ0FBQyxNQUFNO1FBQ0wsT0FBTyxJQUFJO01BQ2I7SUFDRjtFQUFDO0lBQUF4RSxHQUFBO0lBQUFDLEtBQUEsRUFFRCxTQUFBK0gsS0FBS0EsQ0FBQSxFQUFHO01BQ04sSUFBSSxDQUFDdVUsTUFBTSxHQUFHLElBQUk7SUFDcEI7RUFBQztBQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2xISDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDb0M7QUFDUjtBQUNKO0FBQ0k7QUFBQSxJQUFBa0IsY0FBQSxvQkFBQWpZLE9BQUE7QUFBQSxJQUFBa1ksbUJBQUEsb0JBQUFsWSxPQUFBO0FBQUEsSUFBQW1ZLFlBQUEsb0JBQUFuWSxPQUFBO0FBQUEsSUFFUG9ZLEtBQUssMEJBQUE5RyxJQUFBO0VBTXhCLFNBQUE4RyxNQUFZdmUsQ0FBQyxFQUFFQyxDQUFDLEVBQUVtQyxLQUFLLEVBQUVDLE1BQU0sRUFBRWpDLEtBQUssRUFBRW9lLFdBQVcsRUFBRTtJQUFBLElBQUFuZSxLQUFBO0lBQUFDLGlGQUFBLE9BQUFpZSxLQUFBO0lBQ25EbGUsS0FBQSxHQUFBRSxVQUFBLE9BQUFnZSxLQUFBLEdBQU12ZSxDQUFDLEVBQUVDLENBQUMsRUFBRW1DLEtBQUssRUFBRUMsTUFBTSxFQUFFakMsS0FBSztJQUFFSSxpRkFBQSxDQUFBSCxLQUFBLGdCQU52QixJQUFJO0lBQ2pCcUcsMEJBQUEsQ0FBQXJHLEtBQUEsRUFBQStkLGNBQWUsRUFBRyxDQUFDO0lBQ25CMVgsMEJBQUEsQ0FBQXJHLEtBQUEsRUFBQWdlLG1CQUFvQixFQUFHLENBQUM7SUFDeEIzWCwwQkFBQSxDQUFBckcsS0FBQSxFQUFBaWUsWUFBYSxFQUFHLENBQUM7SUFLZmplLEtBQUEsQ0FBS29iLElBQUksR0FBRytDLFdBQVcsSUFBSSxFQUFFO0lBQzdCdFgscUJBQUEsQ0FBS2tYLGNBQWUsRUFBQS9kLEtBQUEsRUFBRyxDQUFKLENBQUM7SUFDcEI2RyxxQkFBQSxDQUFLb1gsWUFBYSxFQUFBamUsS0FBQSxFQUFHLENBQUosQ0FBQztJQUNsQjZHLHFCQUFBLENBQUttWCxtQkFBb0IsRUFBQWhlLEtBQUEsRUFBRyxDQUFKLENBQUM7SUFDekJBLEtBQUEsQ0FBS29lLGFBQWEsR0FBRyxLQUFLO0lBQzFCcGUsS0FBQSxDQUFLcWUsT0FBTyxHQUFHLENBQUM7SUFDaEJyZSxLQUFBLENBQUtzZSxRQUFRLEdBQUcsQ0FBQztJQUNqQnRlLEtBQUEsQ0FBS3VlLFNBQVMsR0FBRyxDQUFDO0lBQ2xCdmUsS0FBQSxDQUFLd2Usb0JBQW9CLEdBQUcsSUFBSTtJQUNoQ3hlLEtBQUEsQ0FBS3llLFNBQVMsR0FBRyxJQUFJO0lBRXJCemUsS0FBQSxDQUFLMGUsS0FBSyxHQUFHcFksUUFBUSxDQUFDQyxhQUFhLENBQUMsT0FBTyxDQUFDO0lBQzVDdkcsS0FBQSxDQUFLMGUsS0FBSyxDQUFDQyxZQUFZLENBQUMsTUFBTSxFQUFFLE1BQU0sQ0FBQztJQUN2QzNlLEtBQUEsQ0FBSzBlLEtBQUssQ0FBQzNlLEtBQUssQ0FBQzBLLFFBQVEsR0FBRyxVQUFVO0lBQ3RDekssS0FBQSxDQUFLMGUsS0FBSyxDQUFDM2UsS0FBSyxDQUFDNmUsSUFBSSxHQUFHLFNBQVM7SUFDakM1ZSxLQUFBLENBQUswZSxLQUFLLENBQUNHLFFBQVEsR0FBRyxDQUFDLENBQUM7SUFDeEI3ZSxLQUFBLENBQUswZSxLQUFLLENBQUNuZSxLQUFLLEdBQUdQLEtBQUEsQ0FBS29iLElBQUk7SUFDNUJwYixLQUFBLENBQUswZSxLQUFLLENBQUN4VSxnQkFBZ0IsQ0FBQyxNQUFNLEVBQUU7TUFBQSxPQUFNbEssS0FBQSxDQUFLb0QsUUFBUSxHQUFHLEtBQUs7SUFBQSxFQUFDO0lBQ2hFcEQsS0FBQSxDQUFLMGUsS0FBSyxDQUFDeFUsZ0JBQWdCLENBQUMsT0FBTyxFQUFFO01BQUEsT0FBTWxLLEtBQUEsQ0FBS29ELFFBQVEsR0FBRyxJQUFJO0lBQUEsRUFBQztJQUNoRXBELEtBQUEsQ0FBSzBlLEtBQUssQ0FBQ3hVLGdCQUFnQixDQUFDLE9BQU8sRUFBRSxZQUFNO01BQ3pDbEssS0FBQSxDQUFLdWUsU0FBUyxHQUFHLENBQUM7TUFDbEJ2ZSxLQUFBLENBQUtvZSxhQUFhLEdBQUcsSUFBSTtNQUN6QnBlLEtBQUEsQ0FBSzhlLGFBQWEsR0FBRzllLEtBQUEsQ0FBSzBlLEtBQUssQ0FBQ0ssY0FBYztNQUM5Qy9lLEtBQUEsQ0FBS2dmLFdBQVcsR0FBR2hmLEtBQUEsQ0FBSzBlLEtBQUssQ0FBQ08sWUFBWTtJQUM1QyxDQUFDLENBQUM7SUFFRjNZLFFBQVEsQ0FBQzRZLElBQUksQ0FBQ3ZZLFdBQVcsQ0FBQzNHLEtBQUEsQ0FBSzBlLEtBQUssQ0FBQztJQUVyQzFlLEtBQUEsQ0FBS21mLGNBQWMsR0FBRyxLQUFLO0lBQzNCbmYsS0FBQSxDQUFLb2YsWUFBWSxHQUFHLEtBQUs7SUFFekJwZixLQUFBLENBQUtxTixTQUFTLEdBQUcvRyxRQUFRLENBQUNDLGFBQWEsQ0FBQyxRQUFRLENBQUM7SUFFakQsSUFBTThZLGtCQUFrQixHQUFHLFNBQXJCQSxrQkFBa0JBLENBQUk3USxNQUFNLEVBQUVDLE1BQU0sRUFBRWhFLFFBQVEsRUFBSztNQUN2RCxJQUFHQSxRQUFRLEVBQUU7UUFDWCxJQUFNNlUsTUFBTSxHQUFHdGYsS0FBQSxDQUFLdWYsZ0JBQWdCLENBQUM5VSxRQUFRLENBQUM7UUFFOUMsSUFBRzZVLE1BQU0sSUFBSSxJQUFJLEVBQUU7VUFDakIsSUFBR0EsTUFBTSxHQUFHdGYsS0FBQSxDQUFLd2Ysa0JBQWtCLEVBQUU7WUFDbkN4ZixLQUFBLENBQUt5ZixpQkFBaUIsQ0FBQ3pmLEtBQUEsQ0FBS3dmLGtCQUFrQixFQUFFRixNQUFNLEVBQUUsU0FBUyxDQUFDO1VBQ3BFLENBQUMsTUFBTSxJQUFHQSxNQUFNLEdBQUd0ZixLQUFBLENBQUt3ZixrQkFBa0IsRUFBRTtZQUMxQ3hmLEtBQUEsQ0FBS3lmLGlCQUFpQixDQUFDSCxNQUFNLEVBQUV0ZixLQUFBLENBQUt3ZixrQkFBa0IsRUFBRSxVQUFVLENBQUM7VUFDckU7UUFDRjtNQUNGO0lBQ0YsQ0FBQztJQUVEeGYsS0FBQSxDQUFLMlEsYUFBYSxDQUFDLFVBQUFsRyxRQUFRLEVBQUk7TUFDN0IsSUFBTTZVLE1BQU0sR0FBR3RmLEtBQUEsQ0FBS3VmLGdCQUFnQixDQUFDOVUsUUFBUSxDQUFDO01BRTlDLElBQUc2VSxNQUFNLElBQUksSUFBSSxFQUFFO1FBQ2pCdGYsS0FBQSxDQUFLd2Ysa0JBQWtCLEdBQUdGLE1BQU07UUFDaEN0ZixLQUFBLENBQUt5ZixpQkFBaUIsQ0FBQ0gsTUFBTSxFQUFFQSxNQUFNLEVBQUUsU0FBUyxDQUFDO01BQ25EO01BRUF0ZixLQUFBLENBQUt1ZSxTQUFTLEdBQUcsQ0FBQztJQUNwQixDQUFDLENBQUM7SUFFRnZlLEtBQUEsQ0FBS2lRLGNBQWMsQ0FBQztNQUFBLE9BQU1qUSxLQUFBLENBQUswZixLQUFLLENBQUMsQ0FBQztJQUFBLEVBQUM7SUFDdkMxZixLQUFBLENBQUtzUCxhQUFhLENBQUMrUCxrQkFBa0IsQ0FBQztJQUN0Q3JmLEtBQUEsQ0FBSytRLGVBQWUsQ0FBQ3NPLGtCQUFrQixDQUFDO0lBQUMsT0FBQXJmLEtBQUE7RUFDM0M7RUFBQ0ksMkVBQUEsQ0FBQThkLEtBQUEsRUFBQTlHLElBQUE7RUFBQSxPQUFBL1csOEVBQUEsQ0FBQTZkLEtBQUE7SUFBQTVkLEdBQUE7SUFBQUMsS0FBQSxFQUVELFNBQUFDLElBQUlBLENBQUNDLE9BQU8sRUFBRTtNQUNaLElBQUcsSUFBSSxDQUFDQyxNQUFNLEVBQUU7TUFDaEJDLGFBQUEsQ0FBQXVkLEtBQUEsb0JBQVd6ZCxPQUFPO01BRWxCLElBQU1HLE1BQU0sR0FBR0gsT0FBTyxDQUFDRyxNQUFNO01BQzdCLElBQU1DLEdBQUcsR0FBR0QsTUFBTSxDQUFDRSxVQUFVLENBQUMsSUFBSSxDQUFDO01BQ25DRCxHQUFHLENBQUNvQixJQUFJLENBQUMsQ0FBQztNQUVWLElBQUcsSUFBSSxDQUFDeWMsS0FBSyxDQUFDTyxZQUFZLElBQUksSUFBSSxDQUFDRCxXQUFXLEVBQUUsSUFBSSxDQUFDVCxTQUFTLEdBQUcsQ0FBQztNQUVsRSxJQUFHLElBQUksQ0FBQzNkLE1BQU0sSUFBSSxJQUFJLENBQUNBLE1BQU0sQ0FBQzRGLFNBQVMsSUFBSSxDQUFDLElBQUksQ0FBQzJZLGNBQWMsRUFBRTtRQUMvRDdZLFFBQVEsQ0FBQzRZLElBQUksQ0FBQzNWLFdBQVcsQ0FBQyxJQUFJLENBQUNtVixLQUFLLENBQUM7UUFDckMsSUFBSSxDQUFDOWQsTUFBTSxDQUFDNEYsU0FBUyxDQUFDRyxXQUFXLENBQUMsSUFBSSxDQUFDK1gsS0FBSyxDQUFDO1FBQzdDLElBQUksQ0FBQ1MsY0FBYyxHQUFHLElBQUk7TUFDNUIsQ0FBQyxNQUFNLElBQUcsQ0FBQyxJQUFJLENBQUN2ZSxNQUFNLElBQUksQ0FBQyxJQUFJLENBQUN3ZSxZQUFZLEVBQUU7UUFDNUNwYSxPQUFPLElBQUlBLE9BQU8sQ0FBQ0MsSUFBSSxJQUFJRCxPQUFPLENBQUNDLElBQUksQ0FBQzNGLGtEQUFTLENBQUM0RixNQUFNLENBQUN3UixlQUFlLEdBQUcsR0FBRyxHQUFHcFgsa0RBQVMsQ0FBQzRGLE1BQU0sQ0FBQ3lSLGdCQUFnQixDQUFDO1FBQ25ILElBQUksQ0FBQ3lJLFlBQVksR0FBRyxJQUFJO01BQzFCO01BRUEsSUFBRyxJQUFJLENBQUNoYyxRQUFRLElBQUksQ0FBQyxJQUFJLENBQUMwSSxRQUFRLEVBQUU7UUFDbEMsSUFBSSxDQUFDNFQsS0FBSyxDQUFDLENBQUM7TUFDZCxDQUFDLE1BQU07UUFDTCxJQUFJLENBQUNDLElBQUksQ0FBQyxDQUFDO01BQ2I7TUFFQSxJQUFJLENBQUN2RSxJQUFJLEdBQUcsSUFBSSxDQUFDc0QsS0FBSyxDQUFDbmUsS0FBSztNQUM1QixJQUFJLENBQUN1ZSxhQUFhLEdBQUcsSUFBSSxDQUFDSixLQUFLLENBQUNLLGNBQWM7TUFDOUMsSUFBSSxDQUFDQyxXQUFXLEdBQUcsSUFBSSxDQUFDTixLQUFLLENBQUNPLFlBQVk7TUFFMUMsSUFBTXZXLElBQUksR0FBR2tYLFdBQVcsQ0FBQ0MsR0FBRyxDQUFDLENBQUM7TUFDOUIsSUFBSUMsVUFBVSxHQUFHLENBQUM7TUFFbEIsSUFBRyxJQUFJLENBQUN4QixRQUFRLEdBQUcsQ0FBQyxFQUFFd0IsVUFBVSxHQUFHcFgsSUFBSSxHQUFHLElBQUksQ0FBQzRWLFFBQVE7TUFDdkQsSUFBSSxDQUFDQSxRQUFRLEdBQUc1VixJQUFJO01BQ3BCLElBQUksQ0FBQzZWLFNBQVMsSUFBSXVCLFVBQVU7TUFFNUIsSUFBSSxDQUFDNWQsY0FBYyxDQUFDckIsR0FBRyxDQUFDO01BQ3hCLElBQUksQ0FBQ3NCLFVBQVUsQ0FBQ3RCLEdBQUcsQ0FBQztNQUVwQixJQUFJLENBQUN3TSxTQUFTLENBQUN0TCxLQUFLLEdBQUd2Qyw4Q0FBSyxDQUFDbUssY0FBYyxDQUFDL0ksTUFBTSxDQUFDLEdBQUd0QixrREFBUyxDQUFDa0MsT0FBTyxDQUFDdUcsV0FBVztNQUNuRixJQUFJLENBQUNzRixTQUFTLENBQUNyTCxNQUFNLEdBQUd4Qyw4Q0FBSyxDQUFDcUssZUFBZSxDQUFDakosTUFBTSxDQUFDLEdBQUd0QixrREFBUyxDQUFDa0MsT0FBTyxDQUFDdUcsV0FBVztNQUNyRixJQUFJLENBQUNzRixTQUFTLENBQUN0TixLQUFLLENBQUNnQyxLQUFLLEdBQUd2Qyw4Q0FBSyxDQUFDbUssY0FBYyxDQUFDL0ksTUFBTSxDQUFDO01BQ3pELElBQUksQ0FBQ3lNLFNBQVMsQ0FBQ3ROLEtBQUssQ0FBQ2lDLE1BQU0sR0FBR3hDLDhDQUFLLENBQUNxSyxlQUFlLENBQUNqSixNQUFNLENBQUM7TUFDM0QsSUFBTW1mLE9BQU8sR0FBRyxJQUFJLENBQUMxUyxTQUFTLENBQUN2TSxVQUFVLENBQUMsSUFBSSxDQUFDO01BQy9DdEIsOENBQUssQ0FBQzhJLEtBQUssQ0FBQ3lYLE9BQU8sQ0FBQztNQUNwQkEsT0FBTyxDQUFDalksS0FBSyxDQUFDeEksa0RBQVMsQ0FBQ2tDLE9BQU8sQ0FBQ3VHLFdBQVcsRUFBRXpJLGtEQUFTLENBQUNrQyxPQUFPLENBQUN1RyxXQUFXLENBQUM7TUFFM0UsSUFBSSxDQUFDaVksZUFBZSxDQUFDLElBQUksQ0FBQ3JnQixDQUFDLEdBQUcsQ0FBQyxDQUFDO01BQ2hDLElBQUksQ0FBQ3NnQixVQUFVLENBQUMsQ0FBQztNQUNqQixJQUFJLENBQUNDLFFBQVEsQ0FBQ0gsT0FBTyxFQUFFLElBQUksQ0FBQ3BnQixDQUFDLEdBQUcsQ0FBQyxDQUFDO01BRWxDSCw4Q0FBSyxDQUFDZ08sYUFBYSxDQUFDM00sR0FBRyxFQUFFLElBQUksQ0FBQ3dNLFNBQVMsRUFBRSxJQUFJLENBQUMxTixDQUFDLEdBQUcsSUFBSSxDQUFDSSxLQUFLLENBQUMrQyxVQUFVLEVBQUUsSUFBSSxDQUFDbEQsQ0FBQyxHQUFHLElBQUksQ0FBQ0csS0FBSyxDQUFDK0MsVUFBVSxFQUFFLElBQUksQ0FBQ2YsS0FBSyxHQUFHLElBQUksQ0FBQ2hDLEtBQUssQ0FBQytDLFVBQVUsR0FBRyxDQUFDLEVBQUUsSUFBSSxDQUFDZCxNQUFNLEdBQUcsSUFBSSxDQUFDakMsS0FBSyxDQUFDK0MsVUFBVSxHQUFHLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQ25ELENBQUMsR0FBRyxJQUFJLENBQUNJLEtBQUssQ0FBQytDLFVBQVUsSUFBSXhELGtEQUFTLENBQUNrQyxPQUFPLENBQUN1RyxXQUFXLEVBQUUsQ0FBQyxJQUFJLENBQUNuSSxDQUFDLEdBQUcsSUFBSSxDQUFDRyxLQUFLLENBQUMrQyxVQUFVLElBQUl4RCxrREFBUyxDQUFDa0MsT0FBTyxDQUFDdUcsV0FBVyxFQUFFLENBQUMsSUFBSSxDQUFDaEcsS0FBSyxHQUFHLElBQUksQ0FBQ2hDLEtBQUssQ0FBQytDLFVBQVUsR0FBRyxDQUFDLElBQUt4RCxrREFBUyxDQUFDa0MsT0FBTyxDQUFDdUcsV0FBVyxFQUFFLENBQUMsSUFBSSxDQUFDL0YsTUFBTSxHQUFHLElBQUksQ0FBQ2pDLEtBQUssQ0FBQytDLFVBQVUsR0FBRyxDQUFDLElBQUl4RCxrREFBUyxDQUFDa0MsT0FBTyxDQUFDdUcsV0FBVyxDQUFDO01BRW5kLElBQUcsQ0FBQyxJQUFJLENBQUN0RixPQUFPLElBQUksSUFBSSxDQUFDQyxPQUFPLEtBQUssSUFBSSxDQUFDOUIsTUFBTSxFQUFFLElBQUksQ0FBQ0EsTUFBTSxDQUFDa0osTUFBTSxHQUFHLE1BQU07TUFFN0UsSUFBRyxDQUFDLElBQUksQ0FBQzFHLFFBQVEsRUFBRTtRQUNqQixJQUFJLENBQUNtYixTQUFTLEdBQUcsQ0FBQztNQUNwQjtNQUVBMWQsR0FBRyxDQUFDdUIsT0FBTyxDQUFDLENBQUM7SUFDZjtFQUFDO0lBQUE5QixHQUFBO0lBQUFDLEtBQUEsRUFFRCxTQUFBMmYsUUFBUUEsQ0FBQ0gsT0FBTyxFQUFFSSxRQUFRLEVBQUU7TUFDMUIsS0FBSSxJQUFJakksQ0FBQyxHQUFHLENBQUMsQ0FBQyxFQUFFQSxDQUFDLEdBQUcsSUFBSSxDQUFDa0QsSUFBSSxDQUFDdlgsTUFBTSxFQUFFcVUsQ0FBQyxFQUFFLEVBQUU7UUFDekMsSUFBR0EsQ0FBQyxHQUFHLENBQUMsQ0FBQyxFQUFFO1VBQ1QsSUFBTXlFLEtBQUssR0FBRyxJQUFJLENBQUM4QixTQUFTLENBQUMyQixPQUFPLENBQUNsSSxDQUFDLENBQUMsQ0FBQ3lFLEtBQUs7VUFFN0MsSUFBTTBELEtBQUssR0FBR0YsUUFBUSxHQUFHLElBQUksQ0FBQzlCLE9BQU87VUFDckMsSUFBTWlDLEtBQUssR0FBRyxJQUFJLENBQUMxZ0IsQ0FBQyxHQUFHLElBQUksQ0FBQ0csS0FBSyxDQUFDK0MsVUFBVTtVQUU1QyxJQUFHLElBQUksQ0FBQ3lkLGVBQWUsQ0FBQ3JJLENBQUMsQ0FBQyxFQUFFO1lBQUU7WUFDNUIsSUFBRyxJQUFJLENBQUM0RyxhQUFhLElBQUksSUFBSSxDQUFDRSxXQUFXLElBQUk5RyxDQUFDLElBQUksSUFBSSxDQUFDNEcsYUFBYSxJQUFJNUcsQ0FBQyxHQUFHLElBQUksQ0FBQzhHLFdBQVcsRUFBRTtjQUM1RixJQUFJLENBQUN3QixhQUFhLENBQUNULE9BQU8sRUFBRUksUUFBUSxFQUFFeEQsS0FBSyxDQUFDO1lBQzlDO1lBRUFuZCw4Q0FBSyxDQUFDMGdCLFFBQVEsQ0FBQ0gsT0FBTyxFQUFFLElBQUksQ0FBQzNFLElBQUksQ0FBQ2xELENBQUMsQ0FBQyxFQUFFLElBQUksQ0FBQ25ZLEtBQUssQ0FBQzBnQixTQUFTLEVBQUUsSUFBSSxDQUFDMWdCLEtBQUssQ0FBQzJnQixRQUFRLEVBQUUsSUFBSSxDQUFDM2dCLEtBQUssQ0FBQzRnQixVQUFVLEVBQUUsU0FBUyxFQUFFLFNBQVMsRUFBRU4sS0FBSyxFQUFFQyxLQUFLLEVBQUUsS0FBSyxDQUFDO1VBQ3BKO1VBRUFILFFBQVEsSUFBSXhELEtBQUssQ0FBQyxPQUFPLENBQUMsR0FBRyxJQUFJLENBQUM1YyxLQUFLLENBQUM2TixzQkFBc0I7UUFDaEU7UUFFQSxJQUFHLElBQUksQ0FBQ29SLFdBQVcsSUFBSTlHLENBQUMsR0FBRyxDQUFDLElBQUksSUFBSSxDQUFDOVUsUUFBUSxFQUFFO1VBQzdDLElBQUcsSUFBSSxDQUFDbWIsU0FBUyxJQUFJLEdBQUcsRUFBRTtZQUN4QixJQUFJLENBQUNxQyxVQUFVLENBQUNiLE9BQU8sRUFBRUksUUFBUSxDQUFDO1VBQ3BDLENBQUMsTUFBTSxJQUFHLElBQUksQ0FBQzVCLFNBQVMsR0FBRyxJQUFJLEVBQUU7WUFDL0IsSUFBSSxDQUFDQSxTQUFTLEdBQUcsQ0FBQztVQUNwQjtRQUNGO01BQ0Y7TUFFQSxPQUFPNEIsUUFBUTtJQUNqQjtFQUFDO0lBQUE3ZixHQUFBO0lBQUFDLEtBQUEsRUFFRCxTQUFBcWdCLFVBQVVBLENBQUNiLE9BQU8sRUFBRUksUUFBUSxFQUFFO01BQzVCSixPQUFPLENBQUNoZCxXQUFXLEdBQUcsSUFBSSxDQUFDaEQsS0FBSyxDQUFDOEMsV0FBVztNQUM1Q2tkLE9BQU8sQ0FBQy9lLFNBQVMsR0FBRyxDQUFDO01BQ3JCK2UsT0FBTyxDQUFDYyxTQUFTLENBQUMsQ0FBQztNQUNuQmQsT0FBTyxDQUFDZSxNQUFNLENBQUNYLFFBQVEsR0FBRyxJQUFJLENBQUM5QixPQUFPLEVBQUUsSUFBSSxDQUFDemUsQ0FBQyxHQUFHLENBQUMsQ0FBQztNQUNuRG1nQixPQUFPLENBQUNnQixNQUFNLENBQUNaLFFBQVEsR0FBRyxJQUFJLENBQUM5QixPQUFPLEVBQUUsSUFBSSxDQUFDemUsQ0FBQyxHQUFHLElBQUksQ0FBQ0csS0FBSyxDQUFDMmdCLFFBQVEsQ0FBQztNQUNyRVgsT0FBTyxDQUFDaUIsTUFBTSxDQUFDLENBQUM7SUFDbEI7RUFBQztJQUFBMWdCLEdBQUE7SUFBQUMsS0FBQSxFQUVELFNBQUFpZ0IsYUFBYUEsQ0FBQ1QsT0FBTyxFQUFFSSxRQUFRLEVBQUV4RCxLQUFLLEVBQUU7TUFDdENvRCxPQUFPLENBQUN6ZCxTQUFTLEdBQUcsSUFBSSxDQUFDdkMsS0FBSyxDQUFDa2hCLFdBQVc7TUFDMUNsQixPQUFPLENBQUN4ZCxRQUFRLENBQUM0ZCxRQUFRLEdBQUcsSUFBSSxDQUFDOUIsT0FBTyxFQUFFLElBQUksQ0FBQ3plLENBQUMsR0FBRyxJQUFJLENBQUNHLEtBQUssQ0FBQytDLFVBQVUsRUFBRTZaLEtBQUssQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLEVBQUUsSUFBSSxDQUFDM2EsTUFBTSxHQUFHLElBQUksQ0FBQ2pDLEtBQUssQ0FBQytDLFVBQVUsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDO0lBQzVJO0VBQUM7SUFBQXhDLEdBQUE7SUFBQUMsS0FBQSxFQUVELFNBQUF5ZixlQUFlQSxDQUFDRyxRQUFRLEVBQUU7TUFDeEIsSUFBTXRmLEdBQUcsR0FBRyxJQUFJLENBQUNELE1BQU0sR0FBRyxJQUFJLENBQUNBLE1BQU0sQ0FBQ0UsVUFBVSxDQUFDLElBQUksQ0FBQyxHQUFHLElBQUk7TUFDN0QsSUFBTStHLE1BQU0sR0FBSSxJQUFJLENBQUNqSCxNQUFNLElBQUksSUFBSSxDQUFDQSxNQUFNLENBQUNzRixLQUFLLElBQUssSUFBSSxDQUFDdEYsTUFBTSxJQUFLQyxHQUFHLElBQUlBLEdBQUcsQ0FBQ0QsTUFBTztNQUV2RixJQUFHQyxHQUFHLEtBQUt2QixrREFBUyxDQUFDa0MsT0FBTyxDQUFDOEYscUJBQXFCLElBQUksQ0FBQyxJQUFJLENBQUNtWCxTQUFTLElBQUksSUFBSSxDQUFDQSxTQUFTLENBQUNpQyxRQUFRLElBQUksSUFBSSxDQUFDM2dCLEtBQUssQ0FBQzJnQixRQUFRLElBQUksSUFBSSxDQUFDakMsU0FBUyxDQUFDa0MsVUFBVSxJQUFJLElBQUksQ0FBQzVnQixLQUFLLENBQUM0Z0IsVUFBVSxJQUFJLElBQUksQ0FBQ3ZGLElBQUksSUFBSSxJQUFJLENBQUNxRCxTQUFTLENBQUNyRCxJQUFJLElBQUt2VCxNQUFNLElBQUlBLE1BQU0sQ0FBQzlGLEtBQUssSUFBSSxJQUFJLENBQUMwYyxTQUFTLENBQUM5TSxXQUFZLENBQUMsRUFBRTtRQUM1USxJQUFJLENBQUM4TSxTQUFTLEdBQUc7VUFBRSxVQUFVLEVBQUUsSUFBSSxDQUFDMWUsS0FBSyxDQUFDMmdCLFFBQVE7VUFBRSxZQUFZLEVBQUUsSUFBSSxDQUFDM2dCLEtBQUssQ0FBQzRnQixVQUFVO1VBQUUsTUFBTSxFQUFFLElBQUksQ0FBQ3ZGLElBQUk7VUFBRSxhQUFhLEVBQUV2VCxNQUFNLENBQUM5RixLQUFLO1VBQUUsU0FBUyxFQUFFO1FBQUcsQ0FBQztRQUV4SixLQUFJLElBQUltVyxDQUFDLEdBQUcsQ0FBQyxFQUFFQSxDQUFDLEdBQUcsSUFBSSxDQUFDa0QsSUFBSSxDQUFDdlgsTUFBTSxFQUFFcVUsQ0FBQyxFQUFFLEVBQUU7VUFDeEMsSUFBTXlFLEtBQUssR0FBR25kLDhDQUFLLENBQUMwaEIsYUFBYSxDQUFDcmdCLEdBQUcsRUFBRSxJQUFJLENBQUN1YSxJQUFJLENBQUNsRCxDQUFDLENBQUMsRUFBRSxJQUFJLENBQUNuVyxLQUFLLEVBQUUsSUFBSSxDQUFDaEMsS0FBSyxDQUFDMmdCLFFBQVEsRUFBRSxJQUFJLENBQUMzZ0IsS0FBSyxDQUFDNGdCLFVBQVUsRUFBRSxJQUFJLENBQUM7VUFDbEgsSUFBSSxDQUFDbEMsU0FBUyxDQUFDMkIsT0FBTyxDQUFDbEksQ0FBQyxDQUFDLEdBQUc7WUFBQyxNQUFNLEVBQUUsSUFBSSxDQUFDa0QsSUFBSSxDQUFDbEQsQ0FBQyxDQUFDO1lBQUUsVUFBVSxFQUFFaUksUUFBUTtZQUFFLE9BQU8sRUFBRXhEO1VBQU0sQ0FBQztVQUN6RndELFFBQVEsSUFBSXhELEtBQUssQ0FBQyxPQUFPLENBQUMsR0FBRyxJQUFJLENBQUM1YyxLQUFLLENBQUM2TixzQkFBc0I7UUFDaEU7TUFDRjtJQUNGO0VBQUM7SUFBQXROLEdBQUE7SUFBQUMsS0FBQSxFQUVELFNBQUE0Z0Isc0JBQXNCQSxDQUFDMVcsUUFBUSxFQUFFMFYsUUFBUSxFQUFFeEQsS0FBSyxFQUFFO01BQ2hELElBQUdsUyxRQUFRLENBQUM5SyxDQUFDLEdBQUcsSUFBSSxDQUFDMGUsT0FBTyxJQUFJOEIsUUFBUSxHQUFHeEQsS0FBSyxDQUFDLE9BQU8sQ0FBQyxHQUFHLElBQUksQ0FBQzVjLEtBQUssQ0FBQzZOLHNCQUFzQixJQUFJbkQsUUFBUSxDQUFDOUssQ0FBQyxHQUFHLElBQUksQ0FBQzBlLE9BQU8sSUFBSThCLFFBQVEsRUFBRTtRQUN0SSxPQUFPLElBQUk7TUFDYjtNQUVBLE9BQU8sS0FBSztJQUNkO0VBQUM7SUFBQTdmLEdBQUE7SUFBQUMsS0FBQSxFQUVELFNBQUE2Z0Isb0JBQW9CQSxDQUFDM1csUUFBUSxFQUFFMFYsUUFBUSxFQUFFeEQsS0FBSyxFQUFFO01BQzlDLElBQUdsUyxRQUFRLENBQUM5SyxDQUFDLEdBQUcsSUFBSSxDQUFDMGUsT0FBTyxJQUFJOEIsUUFBUSxHQUFHeEQsS0FBSyxDQUFDLE9BQU8sQ0FBQyxHQUFHLElBQUksQ0FBQzVjLEtBQUssQ0FBQzZOLHNCQUFzQixFQUFFO1FBQzdGLE9BQU8sSUFBSTtNQUNiO01BRUEsT0FBTyxLQUFLO0lBQ2Q7RUFBQztJQUFBdE4sR0FBQTtJQUFBQyxLQUFBLEVBRUQsU0FBQWdmLGdCQUFnQkEsQ0FBQzlVLFFBQVEsRUFBRTtNQUN6QixJQUFHLElBQUksQ0FBQ2dVLFNBQVMsRUFBRTtRQUNqQixLQUFJLElBQUl2RyxDQUFDLEdBQUcsQ0FBQyxFQUFFQSxDQUFDLEdBQUcsSUFBSSxDQUFDa0QsSUFBSSxDQUFDdlgsTUFBTSxFQUFFcVUsQ0FBQyxFQUFFLEVBQUU7VUFDeEMsSUFBTW1KLE1BQU0sR0FBRyxJQUFJLENBQUM1QyxTQUFTLENBQUMyQixPQUFPLENBQUNsSSxDQUFDLENBQUM7VUFFeEMsSUFBRyxJQUFJLENBQUNpSixzQkFBc0IsQ0FBQzFXLFFBQVEsRUFBRW5KLElBQUksQ0FBQ2tCLEtBQUssQ0FBQzZlLE1BQU0sQ0FBQ2xCLFFBQVEsQ0FBQyxFQUFFa0IsTUFBTSxDQUFDMUUsS0FBSyxDQUFDLEVBQUU7WUFDbkYsT0FBT3pFLENBQUM7VUFDVixDQUFDLE1BQU0sSUFBR0EsQ0FBQyxJQUFJLElBQUksQ0FBQ2tELElBQUksQ0FBQ3ZYLE1BQU0sR0FBRyxDQUFDLElBQUksSUFBSSxDQUFDdWQsb0JBQW9CLENBQUMzVyxRQUFRLEVBQUVuSixJQUFJLENBQUNrQixLQUFLLENBQUM2ZSxNQUFNLENBQUNsQixRQUFRLENBQUMsRUFBRWtCLE1BQU0sQ0FBQzFFLEtBQUssQ0FBQyxFQUFFO1lBQ3JILE9BQU96RSxDQUFDLEdBQUcsQ0FBQztVQUNkO1FBQ0Y7TUFDRjtJQUNGO0VBQUM7SUFBQTVYLEdBQUE7SUFBQWUsR0FBQSxFQUVELFNBQUFBLElBQUEsRUFBcUI7TUFDbkIsSUFBRyxJQUFJLENBQUNvZCxTQUFTLEVBQUU7UUFDakIsSUFBSWhVLFFBQVEsR0FBRyxJQUFJLENBQUN1VSxXQUFXLEdBQUcsQ0FBQztRQUVuQyxJQUFHLElBQUksQ0FBQ0EsV0FBVyxJQUFJLElBQUksQ0FBQ0YsYUFBYSxJQUFJLElBQUksQ0FBQ0UsV0FBVyxJQUFJLElBQUksQ0FBQ1Esa0JBQWtCLElBQUksSUFBSSxDQUFDVixhQUFhLEdBQUcsSUFBSSxDQUFDVSxrQkFBa0IsRUFBRTtVQUN4SS9VLFFBQVEsR0FBRyxJQUFJLENBQUNxVSxhQUFhLEdBQUcsQ0FBQztRQUNuQztRQUVBLElBQUdyVSxRQUFRLEdBQUcsQ0FBQyxFQUFFO1VBQ2YsT0FBTztZQUNMLGVBQWUsRUFBRSxJQUFJLENBQUNnVSxTQUFTLENBQUMyQixPQUFPLENBQUMsQ0FBQyxDQUFDO1lBQzFDLEdBQUcsRUFBRSxJQUFJLENBQUN6Z0IsQ0FBQyxHQUFHLElBQUksQ0FBQ0ksS0FBSyxDQUFDK0M7VUFDM0IsQ0FBQztRQUNIO1FBRUEsSUFBTXdlLGFBQWEsR0FBRyxJQUFJLENBQUM3QyxTQUFTLENBQUMyQixPQUFPLENBQUMzVixRQUFRLENBQUM7UUFFdEQsSUFBRzZXLGFBQWEsRUFBRTtVQUNoQixPQUFPO1lBQ0wsZUFBZSxFQUFFQSxhQUFhO1lBQzlCLEdBQUcsRUFBRUEsYUFBYSxDQUFDbkI7VUFDckIsQ0FBQztRQUNIO01BQ0Y7TUFFQSxPQUFPLElBQUk7SUFDYjtFQUFDO0lBQUE3ZixHQUFBO0lBQUFDLEtBQUEsRUFFRCxTQUFBZ2dCLGVBQWVBLENBQUNnQixRQUFRLEVBQUU7TUFDeEIsSUFBRyxJQUFJLENBQUM5QyxTQUFTLEVBQUU7UUFDakIsSUFBTTRDLE1BQU0sR0FBRyxJQUFJLENBQUM1QyxTQUFTLENBQUMyQixPQUFPLENBQUNtQixRQUFRLENBQUM7UUFFL0MsSUFBR0YsTUFBTSxFQUFFO1VBQ1QsSUFBTWhCLEtBQUssR0FBR2dCLE1BQU0sQ0FBQ2xCLFFBQVEsR0FBRyxJQUFJLENBQUM5QixPQUFPO1VBRTVDLElBQUdnQyxLQUFLLElBQUksSUFBSSxDQUFDMWdCLENBQUMsR0FBRzBoQixNQUFNLENBQUMxRSxLQUFLLENBQUMsT0FBTyxDQUFDLElBQUkwRCxLQUFLLElBQUksSUFBSSxDQUFDMWdCLENBQUMsR0FBRyxJQUFJLENBQUNvQyxLQUFLLEVBQUU7WUFDMUUsT0FBTyxJQUFJO1VBQ2I7UUFDRjtNQUNGO01BRUEsT0FBTyxLQUFLO0lBQ2Q7RUFBQztJQUFBekIsR0FBQTtJQUFBQyxLQUFBLEVBRUQsU0FBQTBmLFVBQVVBLENBQUEsRUFBRztNQUNYLElBQUcsSUFBSSxDQUFDeEIsU0FBUyxFQUFFO1FBQ2pCLElBQU0rQyxjQUFjLEdBQUcsSUFBSSxDQUFDQSxjQUFjO1FBQzFDLElBQU1DLGlCQUFpQixHQUFHRCxjQUFjLENBQUNGLGFBQWEsR0FBR0UsY0FBYyxDQUFDRixhQUFhLENBQUMzRSxLQUFLLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQztRQUN4RyxJQUFNK0UsaUJBQWlCLEdBQUdGLGNBQWMsQ0FBQzdoQixDQUFDLEdBQUc4aEIsaUJBQWlCLEdBQUcsSUFBSSxDQUFDMWhCLEtBQUssQ0FBQzZOLHNCQUFzQjtRQUNsRyxJQUFNK1QsaUJBQWlCLEdBQUdILGNBQWMsQ0FBQzdoQixDQUFDLEdBQUc4aEIsaUJBQWlCLEdBQUcsSUFBSSxDQUFDMWhCLEtBQUssQ0FBQzZOLHNCQUFzQjtRQUVsRyxJQUFNeVEsT0FBTyxHQUFHL2MsSUFBSSxDQUFDME0sR0FBRyxDQUFDLENBQUMsRUFBRTFNLElBQUksQ0FBQ2tCLEtBQUssQ0FBQ2tmLGlCQUFpQixHQUFHLElBQUksQ0FBQy9oQixDQUFDLEdBQUcsSUFBSSxDQUFDb0MsS0FBSyxHQUFHLElBQUksQ0FBQ2hDLEtBQUssQ0FBQytDLFVBQVUsR0FBRyxJQUFJLENBQUMvQyxLQUFLLENBQUM2TixzQkFBc0IsR0FBRyxDQUFDLENBQUMsQ0FBQztRQUNoSixJQUFNZ1UsVUFBVSxHQUFHdGdCLElBQUksQ0FBQzBNLEdBQUcsQ0FBQyxDQUFDLEVBQUUxTSxJQUFJLENBQUNrQixLQUFLLENBQUNtZixpQkFBaUIsR0FBRyxJQUFJLENBQUNoaUIsQ0FBQyxHQUFHLElBQUksQ0FBQ0ksS0FBSyxDQUFDK0MsVUFBVSxHQUFHLElBQUksQ0FBQy9DLEtBQUssQ0FBQzZOLHNCQUFzQixHQUFHLENBQUMsQ0FBQyxDQUFDO1FBRXRJLElBQUcsSUFBSSxDQUFDeVEsT0FBTyxHQUFHLENBQUMsRUFBRTtVQUNuQixJQUFJLENBQUNBLE9BQU8sR0FBRyxDQUFDO1FBQ2xCO1FBRUEsSUFBR3FELGlCQUFpQixHQUFHLElBQUksQ0FBQ3JELE9BQU8sSUFBSSxJQUFJLENBQUMxZSxDQUFDLEdBQUcsSUFBSSxDQUFDb0MsS0FBSyxHQUFHLElBQUksQ0FBQ2hDLEtBQUssQ0FBQytDLFVBQVUsRUFBRTtVQUNsRixJQUFJLENBQUN1YixPQUFPLEdBQUdBLE9BQU87VUFDdEIsT0FBT0EsT0FBTztRQUNoQixDQUFDLE1BQU0sSUFBR3NELGlCQUFpQixHQUFHLElBQUksQ0FBQ3RELE9BQU8sSUFBSSxJQUFJLENBQUMxZSxDQUFDLEdBQUcsSUFBSSxDQUFDSSxLQUFLLENBQUMrQyxVQUFVLEVBQUU7VUFDNUUsSUFBSSxDQUFDdWIsT0FBTyxHQUFHdUQsVUFBVTtVQUN6QixPQUFPQSxVQUFVO1FBQ25CO01BQ0Y7TUFFQSxPQUFPLEtBQUs7SUFDZDtFQUFDO0lBQUF0aEIsR0FBQTtJQUFBQyxLQUFBLEVBRUQsU0FBQW1mLEtBQUtBLENBQUEsRUFBRztNQUNOLElBQUksQ0FBQ2hCLEtBQUssQ0FBQ21ELEtBQUssQ0FBQyxDQUFDO0lBQ3BCO0VBQUM7SUFBQXZoQixHQUFBO0lBQUFDLEtBQUEsRUFFRCxTQUFBb2YsSUFBSUEsQ0FBQSxFQUFHO01BQ0wsSUFBSSxDQUFDakIsS0FBSyxDQUFDaUIsSUFBSSxDQUFDLENBQUM7SUFDbkI7RUFBQztJQUFBcmYsR0FBQTtJQUFBZSxHQUFBLEVBRUQsU0FBQUEsSUFBQSxFQUFvQjtNQUNsQixPQUFPdUgscUJBQUEsQ0FBS21WLGNBQWUsRUFBcEIsSUFBbUIsQ0FBQztJQUM3QixDQUFDO0lBQUF6WSxHQUFBLEVBVUQsU0FBQUEsSUFBa0JtRixRQUFRLEVBQUU7TUFDMUIsSUFBSSxDQUFDaVUsS0FBSyxDQUFDSyxjQUFjLEdBQUd0VSxRQUFRO01BQ3BDNUQscUJBQUEsQ0FBS2tYLGNBQWUsRUFBcEIsSUFBSSxFQUFtQnRULFFBQUosQ0FBQztJQUN0QjtFQUFDO0lBQUFuSyxHQUFBO0lBQUFlLEdBQUEsRUFYRCxTQUFBQSxJQUFBLEVBQXlCO01BQ3ZCLE9BQU91SCxxQkFBQSxDQUFLb1YsbUJBQW9CLEVBQXpCLElBQXdCLENBQUM7SUFDbEMsQ0FBQztJQUFBMVksR0FBQSxFQVdELFNBQUFBLElBQXVCbUYsUUFBUSxFQUFFO01BQy9CNUQscUJBQUEsQ0FBS21YLG1CQUFvQixFQUF6QixJQUFJLEVBQXdCdlQsUUFBSixDQUFDO0lBQzNCO0VBQUM7SUFBQW5LLEdBQUE7SUFBQWUsR0FBQSxFQVhELFNBQUFBLElBQUEsRUFBa0I7TUFDaEIsT0FBT3VILHFCQUFBLENBQUtxVixZQUFhLEVBQWxCLElBQWlCLENBQUM7SUFDM0IsQ0FBQztJQUFBM1ksR0FBQSxFQVdELFNBQUFBLElBQWdCbUYsUUFBUSxFQUFFO01BQ3hCLElBQUksQ0FBQ2lVLEtBQUssQ0FBQ08sWUFBWSxHQUFHeFUsUUFBUTtNQUNsQzVELHFCQUFBLENBQUtvWCxZQUFhLEVBQWxCLElBQUksRUFBaUJ4VCxRQUFKLENBQUM7SUFDcEI7RUFBQztJQUFBbkssR0FBQTtJQUFBQyxLQUFBLEVBRUQsU0FBQWtmLGlCQUFpQkEsQ0FBQ3ZVLEtBQUssRUFBRTRXLEdBQUcsRUFBRUMsU0FBUyxFQUFFO01BQ3ZDLElBQUksQ0FBQ3JELEtBQUssQ0FBQ2UsaUJBQWlCLENBQUN2VSxLQUFLLEVBQUU0VyxHQUFHLEVBQUVDLFNBQVMsQ0FBQztNQUNuRCxJQUFJLENBQUNqRCxhQUFhLEdBQUc1VCxLQUFLO01BQzFCLElBQUksQ0FBQzhULFdBQVcsR0FBRzhDLEdBQUc7SUFDeEI7RUFBQztJQUFBeGhCLEdBQUE7SUFBQWUsR0FBQSxFQUVELFNBQUFBLElBQUEsRUFBYTtNQUNYLElBQU15QixVQUFVLEdBQUcsSUFBSSxDQUFDL0MsS0FBSyxJQUFJLElBQUksQ0FBQ0EsS0FBSyxDQUFDK0MsVUFBVSxHQUFHLElBQUksQ0FBQy9DLEtBQUssQ0FBQytDLFVBQVUsR0FBRyxDQUFDO01BQ2xGLE9BQU9uQyxhQUFBLENBQUF1ZCxLQUFBLHVCQUFBdmQsYUFBQSxDQUFBdWQsS0FBQSx1QkFBOEIsSUFBSSxDQUFDbmUsS0FBSyxDQUFDMmdCLFFBQVEsR0FBRzVkLFVBQVUsR0FBRyxDQUFDO0lBQzNFO0VBQUM7SUFBQXhDLEdBQUE7SUFBQWUsR0FBQSxFQUVELFNBQUFBLElBQUEsRUFBbUI7TUFDakIsT0FBTyxJQUFJOUIsK0NBQUssQ0FBQztRQUNmLFVBQVUsRUFBRStCLElBQUksQ0FBQ29iLEtBQUssQ0FBQ3BkLGtEQUFTLENBQUNrQyxPQUFPLENBQUNvUyxTQUFTLEdBQUcsSUFBSSxDQUFDO1FBQzFELFlBQVksRUFBRXRVLGtEQUFTLENBQUNrQyxPQUFPLENBQUNtUyxXQUFXO1FBQzNDLFdBQVcsRUFBRXJVLGtEQUFTLENBQUNrQyxPQUFPLENBQUNzUyx3QkFBd0I7UUFDdkQsaUJBQWlCLEVBQUV4VSxrREFBUyxDQUFDa0MsT0FBTyxDQUFDdVMsOEJBQThCO1FBQ25FLGFBQWEsRUFBRXpVLGtEQUFTLENBQUNrQyxPQUFPLENBQUN3UywwQkFBMEI7UUFDM0QscUJBQXFCLEVBQUUxVSxrREFBUyxDQUFDa0MsT0FBTyxDQUFDeVMsbUNBQW1DO1FBQzVFLGFBQWEsRUFBRTNVLGtEQUFTLENBQUNrQyxPQUFPLENBQUMwUywwQkFBMEI7UUFDM0Qsd0JBQXdCLEVBQUU7TUFDNUIsQ0FBQyxDQUFDO0lBQ0o7RUFBQztBQUFBLEVBOVZnQ3BTLDRDQUFHOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3ZCdEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ29DO0FBQ1I7QUFDUTtBQUNSO0FBQUEsSUFBQWtnQixLQUFBLG9CQUFBbGMsT0FBQTtBQUFBLElBRVArVSxLQUFLLDBCQUFBbmIsVUFBQTtFQUl4QixTQUFBbWIsTUFBWU8sSUFBSSxFQUFFemIsQ0FBQyxFQUFFQyxDQUFDLEVBQUVHLEtBQUssRUFBRTtJQUFBLElBQUFDLEtBQUE7SUFBQUMsaUZBQUEsT0FBQTRhLEtBQUE7SUFDN0I3YSxLQUFBLEdBQUFFLFVBQUEsT0FBQTJhLEtBQUEsR0FBTWxiLENBQUMsRUFBRUMsQ0FBQyxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUVHLEtBQUs7SUFBRUksaUZBQUEsQ0FBQUgsS0FBQSxnQkFKcEIsS0FBSztJQUNsQnFHLDBCQUFBLENBQUFyRyxLQUFBLEVBQUFnaUIsS0FBTSxFQUFHLEVBQUU7SUFJVGhpQixLQUFBLENBQUtvYixJQUFJLEdBQUdBLElBQUk7SUFDaEJwYixLQUFBLENBQUtpaUIsVUFBVSxHQUFHLElBQUk7SUFFdEIsSUFBRyxDQUFDM2lCLGtEQUFTLENBQUNrQyxPQUFPLENBQUN1TCxrQ0FBa0MsRUFBRTtNQUN4RC9NLEtBQUEsQ0FBS2tpQixXQUFXLENBQUMsQ0FBQztNQUVsQmxpQixLQUFBLENBQUtrTixlQUFlLENBQUMsVUFBQXVLLGdCQUFnQixFQUFJO1FBQ3ZDelgsS0FBQSxDQUFLa2lCLFdBQVcsQ0FBQyxDQUFDO1FBQ2xCekssZ0JBQWdCLElBQUl6WCxLQUFBLENBQUs2SCxNQUFNLElBQUk3SCxLQUFBLENBQUs2SCxNQUFNLElBQUk3SCxLQUFBLENBQUs2SCxNQUFNLENBQUNWLE9BQU8sSUFBSW5ILEtBQUEsQ0FBSzZILE1BQU0sQ0FBQ1YsT0FBTyxDQUFDeUMsYUFBYSxDQUFDLFVBQVUsRUFBQTVKLEtBQU0sQ0FBQztNQUM5SCxDQUFDLENBQUM7SUFDSjtJQUFDLE9BQUFBLEtBQUE7RUFDSDtFQUFDSSwyRUFBQSxDQUFBeWEsS0FBQSxFQUFBbmIsVUFBQTtFQUFBLE9BQUFXLDhFQUFBLENBQUF3YSxLQUFBO0lBQUF2YSxHQUFBO0lBQUFDLEtBQUEsRUFFRCxTQUFBQyxJQUFJQSxDQUFDQyxPQUFPLEVBQUU7TUFDWixJQUFHLElBQUksQ0FBQ0MsTUFBTSxFQUFFO01BQ2hCQyxhQUFBLENBQUFrYSxLQUFBLG9CQUFXcGEsT0FBTztNQUVsQixJQUFNRyxNQUFNLEdBQUdILE9BQU8sQ0FBQ0csTUFBTTtNQUM3QixJQUFNQyxHQUFHLEdBQUdELE1BQU0sQ0FBQ0UsVUFBVSxDQUFDLElBQUksQ0FBQztNQUNuQ0QsR0FBRyxDQUFDb0IsSUFBSSxDQUFDLENBQUM7TUFFVnpDLDhDQUFLLENBQUMwZ0IsUUFBUSxDQUFDcmYsR0FBRyxFQUFFLElBQUksQ0FBQ3VhLElBQUksRUFBRSxJQUFJLENBQUNyYixLQUFLLENBQUMwZ0IsU0FBUyxFQUFFLElBQUksQ0FBQzFnQixLQUFLLENBQUMyZ0IsUUFBUSxFQUFFLElBQUksQ0FBQzNnQixLQUFLLENBQUM0Z0IsVUFBVSxFQUFFLElBQUksQ0FBQzVnQixLQUFLLENBQUM0RSxVQUFVLEVBQUUsSUFBSSxDQUFDNUUsS0FBSyxDQUFDNkUsa0JBQWtCLEVBQUUsSUFBSSxDQUFDakYsQ0FBQyxFQUFFLElBQUksQ0FBQ0MsQ0FBQyxFQUFFLElBQUksQ0FBQ0csS0FBSyxDQUFDb2lCLElBQUksRUFBRSxJQUFJLENBQUNwaUIsS0FBSyxDQUFDcWlCLElBQUksRUFBRSxJQUFJLENBQUNyaUIsS0FBSyxDQUFDc2lCLFNBQVMsRUFBRSxJQUFJLEVBQUUsSUFBSSxDQUFDeGEsTUFBTSxDQUFDO01BRWpQaEgsR0FBRyxDQUFDdUIsT0FBTyxDQUFDLENBQUM7SUFDZjtFQUFDO0lBQUE5QixHQUFBO0lBQUFlLEdBQUEsRUFTRCxTQUFBQSxJQUFBLEVBQVc7TUFDVCxPQUFPdUgscUJBQUEsQ0FBS29aLEtBQU0sRUFBWCxJQUFVLENBQUM7SUFDcEIsQ0FBQztJQUFBMWMsR0FBQSxFQVRELFNBQUFBLElBQVM4VixJQUFJLEVBQUU7TUFDYixJQUFHQSxJQUFJLElBQUl4UyxxQkFBQSxDQUFLb1osS0FBTSxFQUFYLElBQVUsQ0FBQyxFQUFFO1FBQ3RCbmIscUJBQUEsQ0FBS21iLEtBQU0sRUFBWCxJQUFJLEVBQVU1RyxJQUFKLENBQUM7UUFDWCxJQUFJLENBQUNqVSxPQUFPLENBQUN5QyxhQUFhLENBQUMsVUFBVSxFQUFFLElBQUksQ0FBQztNQUM5QztJQUNGO0VBQUM7SUFBQXRKLEdBQUE7SUFBQUMsS0FBQSxFQU1ELFNBQUEyaEIsV0FBV0EsQ0FBQSxFQUFHO01BQ1osSUFBTXJoQixHQUFHLEdBQUcsSUFBSSxDQUFDRCxNQUFNLEdBQUcsSUFBSSxDQUFDQSxNQUFNLENBQUNFLFVBQVUsQ0FBQyxJQUFJLENBQUMsR0FBRyxJQUFJO01BQzdELElBQU0rRyxNQUFNLEdBQUksSUFBSSxDQUFDakgsTUFBTSxJQUFJLElBQUksQ0FBQ0EsTUFBTSxDQUFDc0YsS0FBSyxJQUFLLElBQUksQ0FBQ3RGLE1BQU0sSUFBS0MsR0FBRyxJQUFJQSxHQUFHLENBQUNELE1BQU8sSUFBSSxJQUFJLENBQUNpSCxNQUFNO01BRXRHLElBQUdoSCxHQUFHLEtBQUt2QixrREFBUyxDQUFDa0MsT0FBTyxDQUFDOEYscUJBQXFCLElBQUksQ0FBQyxJQUFJLENBQUMyYSxVQUFVLElBQUksSUFBSSxDQUFDQSxVQUFVLENBQUN2QixRQUFRLElBQUksSUFBSSxDQUFDM2dCLEtBQUssQ0FBQzJnQixRQUFRLElBQUksSUFBSSxDQUFDdUIsVUFBVSxDQUFDdEIsVUFBVSxJQUFJLElBQUksQ0FBQzVnQixLQUFLLENBQUM0Z0IsVUFBVSxJQUFJLElBQUksQ0FBQ3NCLFVBQVUsQ0FBQ0UsSUFBSSxJQUFJLElBQUksQ0FBQ3BpQixLQUFLLENBQUNvaUIsSUFBSSxJQUFJLElBQUksQ0FBQy9HLElBQUksSUFBSSxJQUFJLENBQUM2RyxVQUFVLENBQUM3RyxJQUFJLElBQUt2VCxNQUFNLElBQUlBLE1BQU0sQ0FBQzlGLEtBQUssSUFBSSxJQUFJLENBQUNrZ0IsVUFBVSxDQUFDdFEsV0FBWSxJQUFJLElBQUksQ0FBQ3NRLFVBQVUsQ0FBQzFoQixLQUFLLElBQUksSUFBSSxDQUFDLEVBQUU7UUFDN1YsSUFBTW9jLEtBQUssR0FBR25kLDhDQUFLLENBQUMwaEIsYUFBYSxDQUFDcmdCLEdBQUcsRUFBRSxJQUFJLENBQUN1YSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksQ0FBQ3JiLEtBQUssQ0FBQzJnQixRQUFRLEVBQUUsSUFBSSxDQUFDM2dCLEtBQUssQ0FBQzRnQixVQUFVLEVBQUUsQ0FBQyxJQUFJLENBQUM1Z0IsS0FBSyxDQUFDb2lCLElBQUksQ0FBQztRQUVySCxJQUFHdGEsTUFBTSxFQUFFO1VBQ1QsSUFBSSxDQUFDb2EsVUFBVSxHQUFHO1lBQUUsVUFBVSxFQUFFLElBQUksQ0FBQ2xpQixLQUFLLENBQUMyZ0IsUUFBUTtZQUFFLFlBQVksRUFBRSxJQUFJLENBQUMzZ0IsS0FBSyxDQUFDNGdCLFVBQVU7WUFBRSxNQUFNLEVBQUUsSUFBSSxDQUFDNWdCLEtBQUssQ0FBQ29pQixJQUFJO1lBQUUsTUFBTSxFQUFFLElBQUksQ0FBQy9HLElBQUk7WUFBRSxhQUFhLEVBQUV2VCxNQUFNLENBQUM5RixLQUFLO1lBQUUsT0FBTyxFQUFFNGE7VUFBTSxDQUFDO1VBQ25MOVUsTUFBTSxDQUFDVixPQUFPLENBQUN5QyxhQUFhLENBQUMsVUFBVSxFQUFFLElBQUksQ0FBQztRQUNoRDtNQUNGO01BRUEsT0FBTyxJQUFJLENBQUNxWSxVQUFVLElBQUksSUFBSSxDQUFDQSxVQUFVLENBQUMxaEIsS0FBSztJQUNqRDtFQUFDO0lBQUFELEdBQUE7SUFBQWUsR0FBQSxFQUVELFNBQUFBLElBQUEsRUFBWTtNQUNWLElBQUcvQixrREFBUyxDQUFDa0MsT0FBTyxDQUFDdUwsa0NBQWtDLEVBQUUsSUFBSSxDQUFDbVYsV0FBVyxDQUFDLENBQUM7TUFDM0UsT0FBTyxJQUFJLENBQUNELFVBQVUsR0FBRyxJQUFJLENBQUNBLFVBQVUsQ0FBQzFoQixLQUFLLEdBQUcsSUFBSTtJQUN2RDtFQUFDO0lBQUFELEdBQUE7SUFBQWUsR0FBQSxFQUVELFNBQUFBLElBQUEsRUFBYTtNQUNYLElBQU1zYixLQUFLLEdBQUcsSUFBSSxDQUFDQSxLQUFLO01BQ3hCLE9BQU9BLEtBQUssSUFBSUEsS0FBSyxDQUFDLFFBQVEsQ0FBQztJQUNqQztFQUFDO0lBQUFyYyxHQUFBO0lBQUFlLEdBQUEsRUFFRCxTQUFBQSxJQUFBLEVBQVk7TUFDVixJQUFNc2IsS0FBSyxHQUFHLElBQUksQ0FBQ0EsS0FBSztNQUN4QixPQUFPQSxLQUFLLElBQUlBLEtBQUssQ0FBQyxPQUFPLENBQUM7SUFDaEM7RUFBQztJQUFBcmMsR0FBQTtJQUFBZSxHQUFBLEVBRUQsU0FBQUEsSUFBQSxFQUFtQjtNQUNqQixPQUFPLElBQUk5QiwrQ0FBSyxDQUFDO1FBQ2YsV0FBVyxFQUFFRCxrREFBUyxDQUFDa0MsT0FBTyxDQUFDMlMsd0JBQXdCO1FBQ3ZELE1BQU0sRUFBRSxJQUFJO1FBQ1osTUFBTSxFQUFFLEtBQUs7UUFDYixXQUFXLEVBQUU7TUFDZixDQUFDLENBQUM7SUFDSjtFQUFDO0FBQUEsRUFqRmdDOVUsa0RBQVM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDdkI1QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDb0M7QUFDUjtBQUNBO0FBQUEsSUFFUGlqQixJQUFJLDBCQUFBMUcsTUFBQTtFQUd2QixTQUFBMEcsS0FBWWxILElBQUksRUFBRXpiLENBQUMsRUFBRUMsQ0FBQyxFQUFFRyxLQUFLLEVBQUU7SUFBQSxJQUFBQyxLQUFBO0lBQUFDLGlGQUFBLE9BQUFxaUIsSUFBQTtJQUM3QnRpQixLQUFBLEdBQUFFLFVBQUEsT0FBQW9pQixJQUFBLEdBQU1sSCxJQUFJLEVBQUV6YixDQUFDLEVBQUVDLENBQUMsRUFBRUcsS0FBSztJQUFFSSxpRkFBQSxDQUFBSCxLQUFBLGdCQUhkLElBQUk7SUFLZkEsS0FBQSxDQUFLdWlCLFlBQVksR0FBR3ZpQixLQUFBLENBQUtELEtBQUssQ0FBQzBnQixTQUFTO0lBQ3hDemdCLEtBQUEsQ0FBS3dpQixnQkFBZ0IsR0FBR3hpQixLQUFBLENBQUtELEtBQUssQ0FBQ3NpQixTQUFTO0lBQUMsT0FBQXJpQixLQUFBO0VBQy9DO0VBQUNJLDJFQUFBLENBQUFraUIsSUFBQSxFQUFBMUcsTUFBQTtFQUFBLE9BQUF2Yiw4RUFBQSxDQUFBaWlCLElBQUE7SUFBQWhpQixHQUFBO0lBQUFDLEtBQUEsRUFFRCxTQUFBQyxJQUFJQSxDQUFDQyxPQUFPLEVBQUU7TUFDWixJQUFHLElBQUksQ0FBQ0MsTUFBTSxFQUFFO01BQ2hCQyxhQUFBLENBQUEyaEIsSUFBQSxvQkFBVzdoQixPQUFPO01BRWxCLElBQUcsSUFBSSxDQUFDaUMsT0FBTyxFQUFFO1FBQ2YsSUFBSSxDQUFDM0MsS0FBSyxDQUFDdUYsR0FBRyxDQUFDLFdBQVcsRUFBRSxLQUFLLENBQUM7UUFDbEMsSUFBSSxDQUFDdkYsS0FBSyxDQUFDdUYsR0FBRyxDQUFDLFdBQVcsRUFBRSxJQUFJLENBQUN2RixLQUFLLENBQUMwaUIsYUFBYSxDQUFDO1FBQ3JELElBQUcsQ0FBQyxJQUFJLENBQUM5VCxPQUFPLEVBQUUsSUFBSSxDQUFDL04sTUFBTSxDQUFDa0osTUFBTSxHQUFHLFNBQVM7TUFDbEQsQ0FBQyxNQUFNLElBQUcsSUFBSSxDQUFDckgsT0FBTyxJQUFJLElBQUksQ0FBQ1csUUFBUSxFQUFFO1FBQ3ZDLElBQUksQ0FBQ3JELEtBQUssQ0FBQ3VGLEdBQUcsQ0FBQyxXQUFXLEVBQUUsS0FBSyxDQUFDO1FBQ2xDLElBQUksQ0FBQ3ZGLEtBQUssQ0FBQ3VGLEdBQUcsQ0FBQyxXQUFXLEVBQUUsSUFBSSxDQUFDdkYsS0FBSyxDQUFDMmlCLGNBQWMsQ0FBQztRQUN0RCxJQUFHLElBQUksQ0FBQ2pnQixPQUFPLElBQUksQ0FBQyxJQUFJLENBQUNrTSxPQUFPLEVBQUUsSUFBSSxDQUFDL04sTUFBTSxDQUFDa0osTUFBTSxHQUFHLFNBQVM7TUFDbEUsQ0FBQyxNQUFNO1FBQ0wsSUFBSSxDQUFDL0osS0FBSyxDQUFDdUYsR0FBRyxDQUFDLFdBQVcsRUFBRSxJQUFJLENBQUNrZCxnQkFBZ0IsQ0FBQztRQUNsRCxJQUFJLENBQUN6aUIsS0FBSyxDQUFDdUYsR0FBRyxDQUFDLFdBQVcsRUFBRSxJQUFJLENBQUNpZCxZQUFZLENBQUM7TUFDaEQ7TUFFQSxJQUFJLENBQUNuaEIsSUFBSSxHQUFHLElBQUk7SUFDbEI7RUFBQztJQUFBZCxHQUFBO0lBQUFlLEdBQUEsRUFFRCxTQUFBQSxJQUFBLEVBQW1CO01BQ2pCLE9BQU8sSUFBSTlCLDhDQUFLLENBQUM7UUFDZixXQUFXLEVBQUVELGtEQUFTLENBQUNrQyxPQUFPLENBQUM0UyxrQkFBa0I7UUFDakQsZ0JBQWdCLEVBQUU5VSxrREFBUyxDQUFDa0MsT0FBTyxDQUFDNlMsd0JBQXdCO1FBQzVELGVBQWUsRUFBRS9VLGtEQUFTLENBQUNrQyxPQUFPLENBQUM4Uyx3QkFBd0I7UUFDM0QsTUFBTSxFQUFFLElBQUk7UUFDWixNQUFNLEVBQUUsS0FBSztRQUNiLFdBQVcsRUFBRTtNQUNmLENBQUMsQ0FBQztJQUNKO0VBQUM7QUFBQSxFQXZDK0J1Ryw4Q0FBSzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3RCdkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ29DO0FBQ1I7QUFDUTtBQUNaO0FBQ0k7QUFBQSxJQUVQRCxJQUFJLDBCQUFBK0gsSUFBQTtFQUd2QixTQUFBL0gsS0FBWTdhLEtBQUssRUFBaUI7SUFBQSxJQUFBQyxLQUFBO0lBQUFDLGlGQUFBLE9BQUEyYSxJQUFBO0lBQUEsU0FBQWpYLElBQUEsR0FBQUMsU0FBQSxDQUFBQyxNQUFBLEVBQVpDLFVBQVUsT0FBQUMsS0FBQSxDQUFBSixJQUFBLE9BQUFBLElBQUEsV0FBQUssSUFBQSxNQUFBQSxJQUFBLEdBQUFMLElBQUEsRUFBQUssSUFBQTtNQUFWRixVQUFVLENBQUFFLElBQUEsUUFBQUosU0FBQSxDQUFBSSxJQUFBO0lBQUE7SUFDOUJoRSxLQUFBLEdBQUFFLFVBQUEsT0FBQTBhLElBQUEsR0FBTSxDQUFDLEVBQUUsQ0FBQyxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUU3YSxLQUFLLEVBQUFrRSxNQUFBLENBQUtILFVBQVU7SUFBRTNELGlGQUFBLENBQUFILEtBQUEsZ0JBSG5DLEtBQUs7SUFLaEJBLEtBQUEsQ0FBSzRpQixPQUFPLEdBQUc1aUIsS0FBQSxDQUFLNGlCLE9BQU8sSUFBSXpYLFNBQVMsR0FBRyxDQUFDLENBQUMsR0FBR25MLEtBQUEsQ0FBSzRpQixPQUFPO0lBQzVENWlCLEtBQUEsQ0FBSzZpQixpQkFBaUIsR0FBRzdpQixLQUFBLENBQUs2aUIsaUJBQWlCLElBQUkxWCxTQUFTLEdBQUcsQ0FBQyxHQUFHbkwsS0FBQSxDQUFLNmlCLGlCQUFpQjtJQUV6RjdpQixLQUFBLENBQUt3UCxPQUFPLENBQUMsQ0FBQztJQUFDLE9BQUF4UCxLQUFBO0VBQ2pCO0VBQUNJLDJFQUFBLENBQUF3YSxJQUFBLEVBQUErSCxJQUFBO0VBQUEsT0FBQXRpQiw4RUFBQSxDQUFBdWEsSUFBQTtJQUFBdGEsR0FBQTtJQUFBQyxLQUFBLEVBRUQsU0FBQUMsSUFBSUEsQ0FBQ0MsT0FBTyxFQUFFO01BQUEsSUFBQXNKLE1BQUE7TUFDWixJQUFHLElBQUksQ0FBQ3JKLE1BQU0sRUFBRTtNQUNoQixJQUFNRSxNQUFNLEdBQUdILE9BQU8sQ0FBQ0csTUFBTTtNQUM3QixJQUFNQyxHQUFHLEdBQUdELE1BQU0sQ0FBQ0UsVUFBVSxDQUFDLElBQUksQ0FBQztNQUVuQyxJQUFHLElBQUksQ0FBQ2YsS0FBSyxDQUFDK2lCLGNBQWMsRUFBRTtRQUM1QixJQUFJLENBQUNDLFFBQVEsQ0FBQ2xpQixHQUFHLENBQUM7TUFDcEI7TUFFQUEsR0FBRyxDQUFDb0IsSUFBSSxDQUFDLENBQUM7TUFFVixJQUFJLENBQUNpQyxjQUFjLENBQUNyRCxHQUFHLENBQUM7TUFFeEIsSUFBRyxDQUFDLElBQUksQ0FBQ08sSUFBSSxFQUFFO1FBQ2JrRixRQUFRLENBQUM0RCxnQkFBZ0IsQ0FBQyxTQUFTLEVBQUUsVUFBQUMsS0FBSyxFQUFJO1VBQzVDLElBQUcsQ0FBQ0osTUFBSSxDQUFDK0IsUUFBUSxFQUFFO1lBQ2pCL0IsTUFBSSxDQUFDNlksT0FBTyxHQUFHelksS0FBSyxDQUFDNlksT0FBTztZQUM1QixJQUFHalosTUFBSSxDQUFDNlksT0FBTyxJQUFJdGpCLGtEQUFTLENBQUM0VyxHQUFHLENBQUNDLEVBQUUsSUFBSXBNLE1BQUksQ0FBQzZZLE9BQU8sSUFBSXRqQixrREFBUyxDQUFDNFcsR0FBRyxDQUFDL0QsTUFBTSxFQUFFaEksS0FBSyxDQUFDSSxjQUFjLENBQUMsQ0FBQztVQUNyRztRQUNGLENBQUMsQ0FBQztRQUVGLElBQUksQ0FBQ25KLElBQUksR0FBRyxJQUFJO01BQ2xCO01BRUEsSUFBSTZoQixTQUFTLEdBQUcsS0FBSztNQUVyQixJQUFHLElBQUksQ0FBQ25mLFVBQVUsSUFBSSxJQUFJLEVBQUU7UUFDMUIsSUFBRyxJQUFJLENBQUM4ZSxPQUFPLElBQUl0akIsa0RBQVMsQ0FBQzRXLEdBQUcsQ0FBQ0MsRUFBRSxFQUFFO1VBQ25DLElBQUksQ0FBQytNLE1BQU0sQ0FBQyxJQUFJLENBQUNMLGlCQUFpQixHQUFHLENBQUMsQ0FBQztVQUN2Q0ksU0FBUyxHQUFHLElBQUk7UUFDbEIsQ0FBQyxNQUFNLElBQUcsSUFBSSxDQUFDTCxPQUFPLElBQUl0akIsa0RBQVMsQ0FBQzRXLEdBQUcsQ0FBQy9ELE1BQU0sRUFBRTtVQUM5QyxJQUFJLENBQUMrUSxNQUFNLENBQUMsSUFBSSxDQUFDTCxpQkFBaUIsR0FBRyxDQUFDLENBQUM7VUFDdkNJLFNBQVMsR0FBRyxJQUFJO1FBQ2xCLENBQUMsTUFBTSxJQUFHLElBQUksQ0FBQ0wsT0FBTyxJQUFJdGpCLGtEQUFTLENBQUM0VyxHQUFHLENBQUNHLEtBQUssRUFBRTtVQUM3QyxJQUFJLENBQUM3RyxPQUFPLENBQUMsQ0FBQztVQUNkeVQsU0FBUyxHQUFHLElBQUk7UUFDbEIsQ0FBQyxNQUFNO1VBQ0wsSUFBSSxDQUFDbmYsVUFBVSxDQUFDa0csT0FBTyxDQUFDLFVBQUNjLFNBQVMsRUFBRW9OLENBQUMsRUFBSztZQUN4QyxJQUFHcE4sU0FBUyxDQUFDMUgsUUFBUSxFQUFFMkcsTUFBSSxDQUFDbVosTUFBTSxDQUFDaEwsQ0FBQyxDQUFDO1VBQ3ZDLENBQUMsQ0FBQztRQUNKO1FBRUEsSUFBSSxDQUFDcFUsVUFBVSxDQUFDa0csT0FBTyxDQUFDLFVBQUNjLFNBQVMsRUFBRW9OLENBQUMsRUFBSztVQUN4QyxJQUFHcE4sU0FBUyxZQUFZekwsbURBQVMsRUFBRTtZQUNqQyxJQUFHNGpCLFNBQVMsRUFBRTtjQUNaLElBQUdsWixNQUFJLENBQUM4WSxpQkFBaUIsSUFBSTNLLENBQUMsRUFBRTtnQkFDOUIsSUFBR3BOLFNBQVMsQ0FBQzNILFVBQVUsRUFBRTtrQkFDdkIySCxTQUFTLENBQUMxSCxRQUFRLEdBQUcsSUFBSTtnQkFDM0I7Z0JBRUEsSUFBRyxDQUFDMkcsTUFBSSxDQUFDNEQsa0JBQWtCLENBQUM3QyxTQUFTLENBQUMsRUFBRTtrQkFDdEMsSUFBTXVPLGVBQWUsR0FBR3ZPLFNBQVMsQ0FBQzlJLE1BQU07a0JBQ3hDLElBQU15TSxNQUFNLEdBQUkxRSxNQUFJLENBQUNyRyxTQUFTLEdBQUdxRyxNQUFJLENBQUMyRCxhQUFhLElBQUs1QyxTQUFTLENBQUNsTCxDQUFDLEdBQUd5WixlQUFlLENBQUM7a0JBQ3RGdFAsTUFBSSxDQUFDMkQsYUFBYSxHQUFHLENBQUNlLE1BQU07a0JBRTVCMUUsTUFBSSxDQUFDeU4sZ0JBQWdCLENBQUMsSUFBSSxFQUFFLENBQUMvSSxNQUFNLENBQUM7Z0JBQ3RDO2NBQ0YsQ0FBQyxNQUFNO2dCQUNMM0QsU0FBUyxDQUFDMUgsUUFBUSxHQUFHLEtBQUs7Y0FDNUI7WUFDRjtZQUVBLElBQUcyRyxNQUFJLENBQUM4WSxpQkFBaUIsSUFBSTNLLENBQUMsSUFBSW5PLE1BQUksQ0FBQzZZLE9BQU8sSUFBSXRqQixrREFBUyxDQUFDNFcsR0FBRyxDQUFDRSxLQUFLLElBQUl0TCxTQUFTLENBQUMzRCxPQUFPLElBQUksQ0FBQzJELFNBQVMsQ0FBQ2dCLFFBQVEsRUFBRTtjQUNqSC9CLE1BQUksQ0FBQzZZLE9BQU8sR0FBRyxDQUFDLENBQUM7Y0FDakI3WSxNQUFJLENBQUM4WSxpQkFBaUIsR0FBRyxDQUFDO2NBQzFCL1gsU0FBUyxDQUFDM0QsT0FBTyxDQUFDeUMsYUFBYSxDQUFDLFNBQVMsQ0FBQztjQUMxQztZQUNGO1VBQ0Y7UUFDRixDQUFDLENBQUM7TUFDSjtNQUVBL0ksR0FBRyxDQUFDdUIsT0FBTyxDQUFDLENBQUM7TUFDYixJQUFJLENBQUN3Z0IsT0FBTyxHQUFHLENBQUMsQ0FBQztJQUNuQjtFQUFDO0lBQUF0aUIsR0FBQTtJQUFBQyxLQUFBLEVBRUQsU0FBQTJELGNBQWNBLENBQUNyRCxHQUFHLEVBQUU7TUFDbEJGLGFBQUEsQ0FBQWlhLElBQUEsb0JBQVcvWixHQUFHO0lBQ2hCO0VBQUM7SUFBQVAsR0FBQTtJQUFBQyxLQUFBLEVBRUQsU0FBQXdpQixRQUFRQSxDQUFDbGlCLEdBQUcsRUFBRTtNQUNackIsOENBQUssQ0FBQzJqQixVQUFVLENBQUN0aUIsR0FBRyxFQUFFLENBQUMsQ0FBQztJQUMxQjtFQUFDO0lBQUFQLEdBQUE7SUFBQUMsS0FBQSxFQUVELFNBQUEyQixjQUFjQSxDQUFDckIsR0FBRyxFQUFFO01BQ2xCQSxHQUFHLENBQUN5QixTQUFTLEdBQUcsSUFBSSxDQUFDdkMsS0FBSyxDQUFDc0MsZUFBZTtNQUMxQ3hCLEdBQUcsQ0FBQzBCLFFBQVEsQ0FBQyxJQUFJLENBQUNzRixNQUFNLEdBQUcsSUFBSSxDQUFDQSxNQUFNLENBQUNsSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLElBQUksQ0FBQ2tJLE1BQU0sR0FBRyxJQUFJLENBQUNBLE1BQU0sQ0FBQ2pJLENBQUMsR0FBRyxDQUFDLEVBQUUsSUFBSSxDQUFDNkQsUUFBUSxFQUFFLElBQUksQ0FBQ0MsU0FBUyxDQUFDO0lBQy9HO0VBQUM7SUFBQXBELEdBQUE7SUFBQUMsS0FBQSxFQUVELFNBQUFpUCxPQUFPQSxDQUFBLEVBQUc7TUFDUjdPLGFBQUEsQ0FBQWlhLElBQUE7TUFDQSxJQUFJLENBQUM5VyxVQUFVLENBQUNrRyxPQUFPLENBQUMsVUFBQWMsU0FBUztRQUFBLE9BQUlBLFNBQVMsSUFBSUEsU0FBUyxDQUFDMEUsT0FBTyxJQUFJMUUsU0FBUyxDQUFDMEUsT0FBTyxDQUFDLENBQUM7TUFBQSxFQUFDO0lBQzdGO0VBQUM7SUFBQWxQLEdBQUE7SUFBQUMsS0FBQSxFQUVELFNBQUFnUCxNQUFNQSxDQUFBLEVBQUc7TUFDUDVPLGFBQUEsQ0FBQWlhLElBQUE7TUFDQSxJQUFJLENBQUM5VyxVQUFVLENBQUNrRyxPQUFPLENBQUMsVUFBQWMsU0FBUztRQUFBLE9BQUlBLFNBQVMsSUFBSUEsU0FBUyxDQUFDeUUsTUFBTSxJQUFJekUsU0FBUyxDQUFDeUUsTUFBTSxDQUFDLENBQUM7TUFBQSxFQUFDO0lBQzNGO0VBQUM7SUFBQWpQLEdBQUE7SUFBQUMsS0FBQSxFQUVELFNBQUEyaUIsTUFBTUEsQ0FBQ0UsS0FBSyxFQUFFO01BQ1osSUFBSSxDQUFDUCxpQkFBaUIsR0FBR08sS0FBSztNQUU5QixJQUFNQyxvQkFBb0IsR0FBRyxJQUFJLENBQUN2ZixVQUFVLENBQUMwVSxNQUFNLENBQUMsVUFBQTFOLFNBQVM7UUFBQSxPQUFJQSxTQUFTLENBQUMzSCxVQUFVO01BQUEsRUFBQztNQUN0RixJQUFHa2dCLG9CQUFvQixDQUFDeGYsTUFBTSxJQUFJLENBQUMsRUFBRTtNQUVyQyxJQUFHLElBQUksQ0FBQ2dmLGlCQUFpQixJQUFJLElBQUksQ0FBQy9lLFVBQVUsQ0FBQ0QsTUFBTSxFQUFFO1FBQ25ELElBQUksQ0FBQ2dmLGlCQUFpQixHQUFHLENBQUM7TUFDNUIsQ0FBQyxNQUFNLElBQUcsSUFBSSxDQUFDQSxpQkFBaUIsR0FBRyxDQUFDLEVBQUU7UUFDcEMsSUFBSSxDQUFDQSxpQkFBaUIsR0FBRyxJQUFJLENBQUMvZSxVQUFVLENBQUNELE1BQU0sR0FBRyxDQUFDO01BQ3JEO01BRUEsSUFBRyxJQUFJLENBQUNDLFVBQVUsQ0FBQyxJQUFJLENBQUMrZSxpQkFBaUIsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDL2UsVUFBVSxDQUFDLElBQUksQ0FBQytlLGlCQUFpQixDQUFDLENBQUMxZixVQUFVLEVBQUU7UUFDakcsSUFBRyxJQUFJLENBQUN5ZixPQUFPLElBQUl0akIsa0RBQVMsQ0FBQzRXLEdBQUcsQ0FBQ0MsRUFBRSxFQUFFO1VBQ25DLE9BQU8sSUFBSSxDQUFDK00sTUFBTSxDQUFDLElBQUksQ0FBQ0wsaUJBQWlCLEdBQUcsQ0FBQyxDQUFDO1FBQ2hELENBQUMsTUFBTSxJQUFHLElBQUksQ0FBQ0QsT0FBTyxJQUFJdGpCLGtEQUFTLENBQUM0VyxHQUFHLENBQUMvRCxNQUFNLEVBQUU7VUFDOUMsT0FBTyxJQUFJLENBQUMrUSxNQUFNLENBQUMsSUFBSSxDQUFDTCxpQkFBaUIsR0FBRyxDQUFDLENBQUM7UUFDaEQ7TUFDRjtJQUNGO0VBQUM7SUFBQXZpQixHQUFBO0lBQUFlLEdBQUEsRUFFRCxTQUFBQSxJQUFBLEVBQXNCO01BQ3BCLE9BQU8sSUFBSSxDQUFDeU0sVUFBVSxHQUFHLElBQUksQ0FBQ3JLLFFBQVE7SUFDeEM7RUFBQztJQUFBbkQsR0FBQTtJQUFBZSxHQUFBLEVBRUQsU0FBQUEsSUFBQSxFQUFzQjtNQUNwQixPQUFPLElBQUksQ0FBQzRNLFdBQVcsR0FBRyxJQUFJLENBQUN2SyxTQUFTO0lBQzFDO0VBQUM7SUFBQXBELEdBQUE7SUFBQWUsR0FBQSxFQUVELFNBQUFBLElBQUEsRUFBZ0I7TUFDZCxPQUFPVixhQUFBLENBQUFpYSxJQUFBLDJCQUFvQixJQUFJLENBQUNoYSxNQUFNLElBQUksSUFBSSxDQUFDQSxNQUFNLENBQUNzRixLQUFLLElBQUksSUFBSSxDQUFDdEYsTUFBTSxDQUFDc0YsS0FBSyxDQUFDbEUsTUFBTztJQUMxRjtFQUFDO0lBQUExQixHQUFBO0lBQUFlLEdBQUEsRUFFRCxTQUFBQSxJQUFBLEVBQWU7TUFDYixPQUFRLElBQUksQ0FBQ1QsTUFBTSxJQUFJLElBQUksQ0FBQ0EsTUFBTSxDQUFDc0YsS0FBSyxJQUFJLElBQUksQ0FBQ3RGLE1BQU0sQ0FBQ3NGLEtBQUssQ0FBQ25FLEtBQUs7SUFDckU7RUFBQztJQUFBekIsR0FBQTtJQUFBZSxHQUFBLEVBRUQsU0FBQUEsSUFBQSxFQUFlO01BQ2IsT0FBTyxJQUFJLENBQUN3RyxNQUFNLEdBQUcsSUFBSSxDQUFDQSxNQUFNLENBQUM5RixLQUFLLEdBQUcsQ0FBQztJQUM1QztFQUFDO0lBQUF6QixHQUFBO0lBQUFlLEdBQUEsRUFFRCxTQUFBQSxJQUFBLEVBQW1CO01BQ2pCLE9BQU8sSUFBSTlCLCtDQUFLLENBQUM7UUFDZixnQkFBZ0IsRUFBRUQsa0RBQVMsQ0FBQ2tDLE9BQU8sQ0FBQ2dULDRCQUE0QjtRQUNoRSxpQkFBaUIsRUFBRWxWLGtEQUFTLENBQUNrQyxPQUFPLENBQUMrUyx1QkFBdUI7UUFDNUQsb0JBQW9CLEVBQUVqVixrREFBUyxDQUFDNFMsa0JBQWtCLENBQUNKLE1BQU07UUFDekQsaUJBQWlCLEVBQUU7TUFDckIsQ0FBQyxDQUFDO0lBQ0o7RUFBQztJQUFBeFIsR0FBQTtJQUFBQyxLQUFBLEVBRUQsU0FBQTRTLGtCQUFrQkEsQ0FBQ04sY0FBYyxFQUFFO01BQ2pDLE9BQU9BLGNBQWMsQ0FBQ08sYUFBYSxDQUFDLElBQUksQ0FBQztJQUMzQzs7SUFFQTtFQUFBO0lBQUE5UyxHQUFBO0lBQUFDLEtBQUEsRUFDQSxTQUFBNlMsYUFBYUEsQ0FBQ1AsY0FBYyxFQUFFO01BQzVCLE9BQU8sQ0FBQztJQUNWOztJQUVBO0VBQUE7SUFBQXZTLEdBQUE7SUFBQUMsS0FBQSxFQUNBLFNBQUE4UyxnQkFBZ0JBLENBQUNSLGNBQWMsRUFBRTtNQUMvQixPQUFPLENBQUMsQ0FBQztJQUNYOztJQUVBO0VBQUE7SUFBQXZTLEdBQUE7SUFBQUMsS0FBQSxFQUNBLFNBQUErUyxxQkFBcUJBLENBQUNULGNBQWMsRUFBRTtNQUNwQyxPQUFPLENBQUM7SUFDVjtFQUFDO0lBQUF2UyxHQUFBO0lBQUFlLEdBQUEsRUFFRCxTQUFBQSxJQUFBLEVBQWE7TUFDWCxPQUFPVixhQUFBLENBQUFpYSxJQUFBLHdCQUFnQixJQUFJLENBQUM5TyxRQUFRO0lBQ3RDLENBQUM7SUFBQXhHLEdBQUEsRUFFRCxTQUFBQSxJQUFXNUUsTUFBTSxFQUFFO01BQ2pCNkUsYUFBQSxDQUFBcVYsSUFBQSxZQUFlbGEsTUFBTTtNQUNyQixJQUFJLENBQUNvTCxRQUFRLEdBQUdwTCxNQUFNO0lBQ3hCOztJQUVBO0VBQUE7SUFBQUosR0FBQTtJQUFBQyxLQUFBLEVBQ0EsU0FBQXNMLFFBQVFBLENBQUNnRSxHQUFHLEVBQUU7TUFDWixPQUFPLENBQUMsSUFBSSxDQUFDblAsTUFBTTtJQUNyQjtFQUFDO0FBQUEsRUFoTStCbU0sNkNBQUc7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDeEJyQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDb0M7QUFDWjtBQUNNO0FBQ0Y7QUFDQTtBQUFBLElBRVB5VyxtQkFBbUIsMEJBQUFYLElBQUE7RUFHdEMsU0FBQVcsb0JBQVl2akIsS0FBSyxFQUFFd2pCLGtCQUFrQixFQUFFQyxjQUFjLEVBQWlCO0lBQUEsSUFBQXhqQixLQUFBO0lBQUFDLGlGQUFBLE9BQUFxakIsbUJBQUE7SUFBQSxTQUFBM2YsSUFBQSxHQUFBQyxTQUFBLENBQUFDLE1BQUEsRUFBWkMsVUFBVSxPQUFBQyxLQUFBLENBQUFKLElBQUEsT0FBQUEsSUFBQSxXQUFBSyxJQUFBLE1BQUFBLElBQUEsR0FBQUwsSUFBQSxFQUFBSyxJQUFBO01BQVZGLFVBQVUsQ0FBQUUsSUFBQSxRQUFBSixTQUFBLENBQUFJLElBQUE7SUFBQTtJQUNsRWhFLEtBQUEsR0FBQUUsVUFBQSxPQUFBb2pCLG1CQUFBLEdBQU0sQ0FBQyxFQUFFLENBQUMsRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFdmpCLEtBQUssRUFBQWtFLE1BQUEsQ0FBS0gsVUFBVTtJQUFFM0QsaUZBQUEsQ0FBQUgsS0FBQSxnQkFIbkMsS0FBSztJQUtoQkEsS0FBQSxDQUFLdWpCLGtCQUFrQixHQUFHQSxrQkFBa0IsSUFBSXBZLFNBQVMsR0FBRyxDQUFDLEdBQUdvWSxrQkFBa0IsQ0FBQyxDQUFDO0lBQ3BGdmpCLEtBQUEsQ0FBS3lqQixhQUFhLEdBQUcsQ0FBQztJQUN0QnpqQixLQUFBLENBQUswakIsYUFBYSxHQUFHLENBQUM7SUFDdEIxakIsS0FBQSxDQUFLMmpCLE1BQU0sR0FBRyxJQUFJO0lBQ2xCM2pCLEtBQUEsQ0FBSzRqQixPQUFPLEdBQUcsS0FBSztJQUNwQjVqQixLQUFBLENBQUt3akIsY0FBYyxHQUFHQSxjQUFjO0lBRXBDeGpCLEtBQUEsQ0FBSzZqQixXQUFXLEdBQUcsSUFBSXRnQixnREFBTSxDQUFDLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJaEUsK0NBQUssQ0FBQztNQUFDLFlBQVksRUFBRUQsbURBQVMsQ0FBQ3VTLFVBQVUsQ0FBQ0UsS0FBSztNQUFFLG9CQUFvQixFQUFFelMsbURBQVMsQ0FBQzRTLGtCQUFrQixDQUFDRSxHQUFHO01BQUUsU0FBUyxFQUFFO0lBQUcsQ0FBQyxDQUFDLEVBQUUsSUFBSW9ILCtDQUFLLENBQUMsSUFBSSxFQUFFLElBQUksRUFBRSxFQUFFLEVBQUUsRUFBRSxDQUFDLENBQUM7SUFDbk54WixLQUFBLENBQUsrRSxHQUFHLENBQUMvRSxLQUFBLENBQUs2akIsV0FBVyxDQUFDO0lBQUMsT0FBQTdqQixLQUFBO0VBQzdCO0VBQUNJLDJFQUFBLENBQUFrakIsbUJBQUEsRUFBQVgsSUFBQTtFQUFBLE9BQUF0aUIsOEVBQUEsQ0FBQWlqQixtQkFBQTtJQUFBaGpCLEdBQUE7SUFBQUMsS0FBQSxFQUVELFNBQUFDLElBQUlBLENBQUNDLE9BQU8sRUFBRTtNQUFBLElBQUFzSixNQUFBO01BQ1osSUFBRyxJQUFJLENBQUNySixNQUFNLEVBQUU7TUFDaEIsSUFBSSxDQUFDbWpCLFdBQVcsQ0FBQ2pqQixNQUFNLEdBQUcsSUFBSSxDQUFDQSxNQUFNO01BRXJDLElBQU1BLE1BQU0sR0FBR0gsT0FBTyxDQUFDRyxNQUFNO01BQzdCLElBQU1DLEdBQUcsR0FBR0QsTUFBTSxDQUFDRSxVQUFVLENBQUMsSUFBSSxDQUFDO01BRW5DRCxHQUFHLENBQUNvQixJQUFJLENBQUMsQ0FBQztNQUVWLElBQUcsQ0FBQyxJQUFJLENBQUNiLElBQUksRUFBRTtRQUNiLElBQUksQ0FBQ3FpQixhQUFhLEdBQUc3RCxXQUFXLENBQUNDLEdBQUcsQ0FBQyxDQUFDO01BQ3hDO01BRUEsSUFBRyxJQUFJLENBQUNnRSxXQUFXLElBQUksSUFBSSxFQUFFO1FBQzNCLElBQUksQ0FBQ0EsV0FBVyxDQUFDL1QsY0FBYyxDQUFDLFlBQU07VUFDcEMvRixNQUFJLENBQUMrWixLQUFLLENBQUMsQ0FBQztRQUNkLENBQUMsQ0FBQztNQUNKO01BRUEsSUFBTWhFLFVBQVUsR0FBR0YsV0FBVyxDQUFDQyxHQUFHLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQzRELGFBQWE7TUFDekQsSUFBSSxDQUFDQSxhQUFhLEdBQUc3RCxXQUFXLENBQUNDLEdBQUcsQ0FBQyxDQUFDO01BRXRDLElBQUcsSUFBSSxDQUFDNkQsYUFBYSxJQUFJLElBQUksQ0FBQ0gsa0JBQWtCLEdBQUcsSUFBSSxJQUFJLENBQUMsSUFBSSxDQUFDSyxPQUFPLElBQUksQ0FBQyxJQUFJLENBQUNELE1BQU0sRUFBRTtRQUN4RixJQUFJLENBQUNHLEtBQUssQ0FBQyxDQUFDO01BQ2Q7TUFFQSxJQUFHLENBQUMsSUFBSSxDQUFDRixPQUFPLEVBQUU7UUFDaEIsSUFBSSxDQUFDRixhQUFhLElBQUk1RCxVQUFVO01BQ2xDLENBQUMsTUFBTTtRQUNMLElBQUcsSUFBSSxDQUFDL2YsS0FBSyxDQUFDZ2tCLGdCQUFnQixFQUFFO1VBQzlCLElBQUksQ0FBQ0wsYUFBYSxHQUFHLENBQUMsQ0FBQztRQUN6QixDQUFDLE1BQU07VUFDTCxJQUFJLENBQUNBLGFBQWEsSUFBSTVELFVBQVU7UUFDbEM7TUFDRjtNQUVBLElBQUcsSUFBSSxDQUFDNEQsYUFBYSxHQUFHLENBQUMsRUFBRTtRQUN6QixJQUFJLENBQUNDLE1BQU0sR0FBRyxJQUFJO1FBQ2xCLElBQUksQ0FBQ0MsT0FBTyxHQUFHLEtBQUs7TUFDdEI7TUFFQSxJQUFHLENBQUMsSUFBSSxDQUFDRCxNQUFNLEVBQUU7UUFDZixJQUFJLENBQUN6ZixjQUFjLENBQUNyRCxHQUFHLENBQUM7UUFFeEIsSUFBRyxJQUFJLENBQUNnakIsV0FBVyxJQUFJLElBQUksRUFBRTtVQUMzQixJQUFJLENBQUNBLFdBQVcsQ0FBQ2prQixDQUFDLEdBQUcsSUFBSSxDQUFDQSxDQUFDLEdBQUcsSUFBSSxDQUFDRyxLQUFLLENBQUNvRSxPQUFPLEdBQUcsQ0FBQztVQUNwRCxJQUFJLENBQUMwZixXQUFXLENBQUNyakIsSUFBSSxDQUFDSyxHQUFHLENBQUM7UUFDNUI7UUFFQSxJQUFJLENBQUNtakIsaUJBQWlCLENBQUMsQ0FBQztNQUMxQixDQUFDLE1BQU07UUFDTCxJQUFJLENBQUNDLGtCQUFrQixDQUFDLENBQUM7TUFDM0I7TUFFQXBqQixHQUFHLENBQUN1QixPQUFPLENBQUMsQ0FBQztNQUViLElBQUksQ0FBQ2hCLElBQUksR0FBRyxJQUFJO0lBQ2xCO0VBQUM7SUFBQWQsR0FBQTtJQUFBZSxHQUFBLEVBRUQsU0FBQUEsSUFBQSxFQUFjO01BQ1osSUFBSTZpQixPQUFPLEdBQUcsQ0FBQztNQUVmLElBQUcsQ0FBQyxJQUFJLENBQUNua0IsS0FBSyxDQUFDZ2tCLGdCQUFnQixFQUFFO1FBQy9CRyxPQUFPLEdBQUcsSUFBSSxDQUFDUixhQUFhLEdBQUcsSUFBSSxDQUFDM2pCLEtBQUssQ0FBQ29rQixpQkFBaUI7UUFFM0QsSUFBRyxJQUFJLENBQUNYLGNBQWMsRUFBRTtVQUN0QlUsT0FBTyxHQUFHLElBQUksQ0FBQ1YsY0FBYyxDQUFDVSxPQUFPLENBQUM7UUFDeEM7TUFDRjtNQUVBLE9BQU9BLE9BQU87SUFDaEI7RUFBQztJQUFBNWpCLEdBQUE7SUFBQWUsR0FBQSxFQUVELFNBQUFBLElBQUEsRUFBUTtNQUNOLElBQU02aUIsT0FBTyxHQUFHLElBQUksQ0FBQ0EsT0FBTztNQUU1QixJQUFHLElBQUksQ0FBQ25rQixLQUFLLENBQUM2RSxrQkFBa0IsSUFBSXRGLG1EQUFTLENBQUM0UyxrQkFBa0IsQ0FBQ0UsR0FBRyxFQUFFO1FBQ3BFLE9BQVEsSUFBSSxDQUFDcFEsTUFBTSxJQUFJa2lCLE9BQU8sSUFBSSxDQUFDLEdBQUdBLE9BQU8sR0FBRyxDQUFDLENBQUMsR0FBSSxJQUFJLENBQUNsaUIsTUFBTTtNQUNuRTtNQUVBLE9BQU8sSUFBSSxDQUFDcEIsTUFBTSxDQUFDc0YsS0FBSyxDQUFDbEUsTUFBTSxHQUFJLElBQUksQ0FBQ0EsTUFBTSxJQUFJa2lCLE9BQU8sSUFBSSxDQUFDLEdBQUdBLE9BQU8sR0FBRyxDQUFDLENBQUU7SUFDaEYsQ0FBQztJQUFBNWUsR0FBQSxFQUVELFNBQUFBLElBQU0xRixDQUFDLEVBQUU7TUFDUDJGLGFBQUEsQ0FBQStkLG1CQUFBLE9BQVUxakIsQ0FBQztJQUNiO0VBQUM7SUFBQVUsR0FBQTtJQUFBQyxLQUFBLEVBRUQsU0FBQTJELGNBQWNBLENBQUNyRCxHQUFHLEVBQUU7TUFDbEJGLGFBQUEsQ0FBQTJpQixtQkFBQSxvQkFBV3ppQixHQUFHO0lBQ2hCO0VBQUM7SUFBQVAsR0FBQTtJQUFBQyxLQUFBLEVBRUQsU0FBQXVqQixLQUFLQSxDQUFBLEVBQUc7TUFDTixJQUFJLENBQUNHLGtCQUFrQixDQUFDLENBQUM7TUFFekIsSUFBRyxDQUFDLElBQUksQ0FBQ0wsT0FBTyxFQUFFO1FBQ2hCLElBQUksQ0FBQ0EsT0FBTyxHQUFHLElBQUk7UUFDbkIsSUFBSSxDQUFDRixhQUFhLEdBQUcsSUFBSSxDQUFDM2pCLEtBQUssQ0FBQ29rQixpQkFBaUI7TUFDbkQ7SUFDRjtFQUFDO0lBQUE3akIsR0FBQTtJQUFBQyxLQUFBLEVBRUQsU0FBQTZqQixJQUFJQSxDQUFBLEVBQUc7TUFDTCxJQUFJLENBQUNYLGFBQWEsR0FBRyxDQUFDO01BQ3RCLElBQUksQ0FBQ0MsYUFBYSxHQUFHLENBQUM7TUFDdEIsSUFBSSxDQUFDdGlCLElBQUksR0FBRyxLQUFLO01BQ2pCLElBQUksQ0FBQ3VpQixNQUFNLEdBQUcsS0FBSztNQUNuQixJQUFJLENBQUNDLE9BQU8sR0FBRyxLQUFLO0lBQ3RCO0VBQUM7SUFBQXRqQixHQUFBO0lBQUFDLEtBQUEsRUFFRCxTQUFBMGpCLGtCQUFrQkEsQ0FBQSxFQUFHO01BQ25CLElBQUcsSUFBSSxDQUFDSixXQUFXLElBQUkxWSxTQUFTLElBQUksSUFBSSxDQUFDMFksV0FBVyxJQUFJLElBQUksSUFBSSxJQUFJLENBQUNBLFdBQVcsWUFBWXRnQixnREFBTSxFQUFFO1FBQ2xHLElBQUksQ0FBQ3NnQixXQUFXLENBQUNyVSxPQUFPLENBQUMsQ0FBQztNQUM1QjtJQUNGO0VBQUM7SUFBQWxQLEdBQUE7SUFBQUMsS0FBQSxFQUVELFNBQUF5akIsaUJBQWlCQSxDQUFBLEVBQUc7TUFDbEIsSUFBRyxJQUFJLENBQUNILFdBQVcsSUFBSTFZLFNBQVMsSUFBSSxJQUFJLENBQUMwWSxXQUFXLElBQUksSUFBSSxJQUFJLElBQUksQ0FBQ0EsV0FBVyxZQUFZdGdCLGdEQUFNLEVBQUU7UUFDbEcsSUFBSSxDQUFDc2dCLFdBQVcsQ0FBQ3RVLE1BQU0sQ0FBQyxDQUFDO01BQzNCO0lBQ0Y7RUFBQztJQUFBalAsR0FBQTtJQUFBQyxLQUFBLEVBRUQsU0FBQThqQixJQUFJQSxDQUFBLEVBQUc7TUFDTCxPQUFBQyw0RUFBQSxDQUFXaEIsbUJBQW1CLEdBQUMsSUFBSSxDQUFDdmpCLEtBQUssQ0FBQ3NrQixJQUFJLENBQUMsQ0FBQyxFQUFFLElBQUksQ0FBQ2Qsa0JBQWtCLEVBQUUsSUFBSSxDQUFDQyxjQUFjLEVBQUF2ZixNQUFBLENBQUEyRyxvRkFBQSxDQUFLLElBQUksQ0FBQzlHLFVBQVU7SUFDcEg7RUFBQztJQUFBeEQsR0FBQTtJQUFBZSxHQUFBLEVBRUQsU0FBQUEsSUFBQSxFQUFZO01BQ1YsT0FBTyxJQUFJLENBQUNULE1BQU0sSUFBSSxJQUFJLENBQUNBLE1BQU0sQ0FBQ3NGLEtBQUssR0FBRyxJQUFJLENBQUN0RixNQUFNLENBQUNzRixLQUFLLENBQUNuRSxLQUFLLEdBQUcsSUFBSTtJQUMxRTtFQUFDO0lBQUF6QixHQUFBO0lBQUFlLEdBQUEsRUFFRCxTQUFBQSxJQUFBLEVBQWE7TUFDWCxPQUFPVixhQUFBLENBQUEyaUIsbUJBQUEsd0JBQWdCLElBQUksQ0FBQ08sV0FBVyxHQUFHLElBQUksQ0FBQ0EsV0FBVyxDQUFDN2hCLE1BQU0sR0FBRyxDQUFDLENBQUM7SUFDeEU7RUFBQztJQUFBMUIsR0FBQTtJQUFBZSxHQUFBLEVBRUQsU0FBQUEsSUFBQSxFQUFtQjtNQUNqQixPQUFPLElBQUk5QiwrQ0FBSyxDQUFDO1FBQ2YsWUFBWSxFQUFFRCxtREFBUyxDQUFDdVMsVUFBVSxDQUFDQyxNQUFNO1FBQ3pDLGlCQUFpQixFQUFFeFMsbURBQVMsQ0FBQ2tDLE9BQU8sQ0FBQ2lULCtCQUErQjtRQUNwRSxtQkFBbUIsRUFBRW5WLG1EQUFTLENBQUNrQyxPQUFPLENBQUNrVDtNQUN6QyxDQUFDLENBQUM7SUFDSjtFQUFDO0lBQUFwVSxHQUFBO0lBQUFlLEdBQUEsRUFFRCxTQUFBQSxJQUFBLEVBQWE7TUFDWCxPQUFPVixhQUFBLENBQUEyaUIsbUJBQUEsd0JBQWdCLElBQUksQ0FBQ0ssTUFBTTtJQUNwQyxDQUFDO0lBQUFyZSxHQUFBLEVBRUQsU0FBQUEsSUFBVzVFLE1BQU0sRUFBRTtNQUNqQjZFLGFBQUEsQ0FBQStkLG1CQUFBLFlBQWU1aUIsTUFBTTtNQUVyQixJQUFHQSxNQUFNLEVBQUU7UUFDVCxJQUFJLENBQUM2akIsVUFBVSxDQUFDLENBQUM7TUFDbkIsQ0FBQyxNQUFNO1FBQ0wsSUFBSSxDQUFDSCxJQUFJLENBQUMsQ0FBQztNQUNiO0lBQ0Y7RUFBQztJQUFBOWpCLEdBQUE7SUFBQUMsS0FBQSxFQUVELFNBQUE0UyxrQkFBa0JBLENBQUNOLGNBQWMsRUFBRTtNQUNqQyxPQUFPQSxjQUFjLENBQUNTLHFCQUFxQixDQUFDLElBQUksQ0FBQztJQUNuRDs7SUFFQTtFQUFBO0lBQUFoVCxHQUFBO0lBQUFDLEtBQUEsRUFDQSxTQUFBOFMsZ0JBQWdCQSxDQUFDUixjQUFjLEVBQUU7TUFDL0IsT0FBTyxDQUFDLENBQUM7SUFDWDs7SUFFQTtFQUFBO0lBQUF2UyxHQUFBO0lBQUFDLEtBQUEsRUFDQSxTQUFBK1MscUJBQXFCQSxDQUFDVCxjQUFjLEVBQUU7TUFDcEMsT0FBTyxDQUFDO0lBQ1Y7O0lBRUE7RUFBQTtJQUFBdlMsR0FBQTtJQUFBQyxLQUFBLEVBQ0EsU0FBQTZTLGFBQWFBLENBQUNQLGNBQWMsRUFBRTtNQUM1QixPQUFPLENBQUMsQ0FBQztJQUNYO0VBQUM7QUFBQSxFQTVMOENoRyw2Q0FBRzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3hCcEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ3dCO0FBQ1k7QUFDUjtBQUFBLElBQUEyWCxZQUFBLG9CQUFBMWUsT0FBQTtBQUFBLElBRVAyZSxXQUFXLDBCQUFBck4sSUFBQTtFQUk5QixTQUFBcU4sWUFBWTlrQixDQUFDLEVBQUVDLENBQUMsRUFBRW1DLEtBQUssRUFBRUMsTUFBTSxFQUFFakMsS0FBSyxFQUFFMmtCLGNBQWMsRUFBRWxCLGNBQWMsRUFBRTtJQUFBLElBQUF4akIsS0FBQTtJQUFBQyxpRkFBQSxPQUFBd2tCLFdBQUE7SUFDdEV6a0IsS0FBQSxHQUFBRSxVQUFBLE9BQUF1a0IsV0FBQSxHQUFNOWtCLENBQUMsRUFBRUMsQ0FBQyxFQUFFbUMsS0FBSyxFQUFFQyxNQUFNLEVBQUVqQyxLQUFLO0lBSmxDc0csMEJBQUEsQ0FBQXJHLEtBQUEsRUFBQXdrQixZQUFZLEVBQUcsQ0FBQztJQUFDcmtCLGlGQUFBLENBQUFILEtBQUEsZ0JBQ0osS0FBSztJQUtoQkEsS0FBQSxDQUFLMmtCLE9BQU8sR0FBR0QsY0FBYyxJQUFJdlosU0FBUyxHQUFHLENBQUMsR0FBR3VaLGNBQWM7SUFDL0Q3ZCxxQkFBQSxDQUFLMmQsWUFBWSxFQUFBeGtCLEtBQUEsRUFBR0EsS0FBQSxDQUFLMmtCLE9BQVQsQ0FBQztJQUNqQjNrQixLQUFBLENBQUt3akIsY0FBYyxHQUFHQSxjQUFjO0lBRXBDeGpCLEtBQUEsQ0FBS3NlLFFBQVEsR0FBRyxDQUFDO0lBQ2pCdGUsS0FBQSxDQUFLdWUsU0FBUyxHQUFHLENBQUM7SUFBQyxPQUFBdmUsS0FBQTtFQUNyQjtFQUFDSSwyRUFBQSxDQUFBcWtCLFdBQUEsRUFBQXJOLElBQUE7RUFBQSxPQUFBL1csOEVBQUEsQ0FBQW9rQixXQUFBO0lBQUFua0IsR0FBQTtJQUFBQyxLQUFBLEVBRUQsU0FBQUMsSUFBSUEsQ0FBQ0MsT0FBTyxFQUFFO01BQ1osSUFBRyxJQUFJLENBQUNDLE1BQU0sRUFBRTtNQUNoQkMsYUFBQSxDQUFBOGpCLFdBQUEsb0JBQVdoa0IsT0FBTztNQUVsQixJQUFNRyxNQUFNLEdBQUdILE9BQU8sQ0FBQ0csTUFBTTtNQUM3QixJQUFNQyxHQUFHLEdBQUdELE1BQU0sQ0FBQ0UsVUFBVSxDQUFDLElBQUksQ0FBQztNQUNuQ0QsR0FBRyxDQUFDb0IsSUFBSSxDQUFDLENBQUM7TUFFVixJQUFNeUcsSUFBSSxHQUFHa1gsV0FBVyxDQUFDQyxHQUFHLENBQUMsQ0FBQztNQUM5QixJQUFJQyxVQUFVLEdBQUcsQ0FBQztNQUVsQixJQUFHbFgscUJBQUEsQ0FBSzRiLFlBQVksRUFBakIsSUFBZ0IsQ0FBQyxJQUFJLElBQUksQ0FBQ0csT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDNWtCLEtBQUssQ0FBQ2drQixnQkFBZ0IsRUFBRTtRQUNwRSxJQUFHLElBQUksQ0FBQ3pGLFFBQVEsR0FBRyxDQUFDLEVBQUV3QixVQUFVLEdBQUdwWCxJQUFJLEdBQUcsSUFBSSxDQUFDNFYsUUFBUTtRQUN2RCxJQUFJLENBQUNDLFNBQVMsSUFBSXVCLFVBQVU7UUFFNUIsSUFBRyxJQUFJLENBQUN2QixTQUFTLElBQUksSUFBSSxDQUFDeGUsS0FBSyxDQUFDb2tCLGlCQUFpQixFQUFFO1VBQ2pEdGQscUJBQUEsQ0FBSzJkLFlBQVksRUFBakIsSUFBSSxFQUFnQixJQUFJLENBQUNHLE9BQVQsQ0FBQztVQUNqQixJQUFJLENBQUNwRyxTQUFTLEdBQUcsQ0FBQztVQUNsQixJQUFJLENBQUNELFFBQVEsR0FBRyxDQUFDO1FBQ25CLENBQUMsTUFBTTtVQUNMLElBQUksQ0FBQ0EsUUFBUSxHQUFHNVYsSUFBSTtRQUN0QjtNQUNGLENBQUMsTUFBTTtRQUNMLElBQUksQ0FBQzZWLFNBQVMsR0FBRyxDQUFDO1FBQ2xCLElBQUksQ0FBQ0QsUUFBUSxHQUFHLENBQUM7TUFDbkI7TUFFQSxJQUFJLENBQUNwYyxjQUFjLENBQUNyQixHQUFHLENBQUM7TUFDeEIsSUFBSSxDQUFDK2pCLGNBQWMsQ0FBQy9qQixHQUFHLEVBQUUsSUFBSSxDQUFDZ2tCLGVBQWUsQ0FBQztNQUU5Q2hrQixHQUFHLENBQUN1QixPQUFPLENBQUMsQ0FBQztJQUNmO0VBQUM7SUFBQTlCLEdBQUE7SUFBQWUsR0FBQSxFQUVELFNBQUFBLElBQUEsRUFBdUI7TUFDckIsSUFBSXlqQixnQkFBZ0IsR0FBSWxjLHFCQUFBLENBQUs0YixZQUFZLEVBQWpCLElBQWdCLENBQUMsSUFBSSxJQUFJLENBQUNHLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQzVrQixLQUFLLENBQUNna0IsZ0JBQWdCLEdBQUcsSUFBSSxDQUFDeEYsU0FBUyxHQUFJLElBQUksQ0FBQ3hlLEtBQUssQ0FBQ29rQixpQkFBa0IsR0FBRyxDQUFFO01BRWhKLElBQUcsSUFBSSxDQUFDWCxjQUFjLEVBQUU7UUFDdEJzQixnQkFBZ0IsR0FBRyxJQUFJLENBQUN0QixjQUFjLENBQUNzQixnQkFBZ0IsQ0FBQztNQUMxRDtNQUVBLE9BQU9BLGdCQUFnQjtJQUN6QjtFQUFDO0lBQUF4a0IsR0FBQTtJQUFBZSxHQUFBLEVBRUQsU0FBQUEsSUFBQSxFQUFzQjtNQUNwQixPQUFPQyxJQUFJLENBQUMwTSxHQUFHLENBQUMsQ0FBQyxFQUFFMU0sSUFBSSxDQUFDeU0sR0FBRyxDQUFDLElBQUksQ0FBQ2hNLEtBQUssRUFBRSxJQUFJLENBQUNBLEtBQUssSUFBSTZHLHFCQUFBLENBQUs0YixZQUFZLEVBQWpCLElBQWdCLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQ0csT0FBTyxHQUFHL2IscUJBQUEsQ0FBSzRiLFlBQVksRUFBakIsSUFBZ0IsQ0FBQyxJQUFJLElBQUksQ0FBQ00sZ0JBQWdCLENBQUMsQ0FBQyxDQUFDO0lBQ3pJO0VBQUM7SUFBQXhrQixHQUFBO0lBQUFDLEtBQUEsRUFFRCxTQUFBcWtCLGNBQWNBLENBQUMvakIsR0FBRyxFQUFFZ2tCLGVBQWUsRUFBRTtNQUNuQ2hrQixHQUFHLENBQUNvQixJQUFJLENBQUMsQ0FBQztNQUVWcEIsR0FBRyxDQUFDeUIsU0FBUyxHQUFHLElBQUksQ0FBQ3ZDLEtBQUssQ0FBQ2dsQixlQUFlO01BQzFDbGtCLEdBQUcsQ0FBQzBCLFFBQVEsQ0FBQyxJQUFJLENBQUM1QyxDQUFDLEVBQUUsSUFBSSxDQUFDQyxDQUFDLEVBQUVpbEIsZUFBZSxFQUFFLElBQUksQ0FBQzdpQixNQUFNLENBQUM7TUFFMURuQixHQUFHLENBQUN1QixPQUFPLENBQUMsQ0FBQztJQUNmO0VBQUM7SUFBQTlCLEdBQUE7SUFBQWUsR0FBQSxFQUVELFNBQUFBLElBQUEsRUFBbUI7TUFDakIsT0FBTyxJQUFJOUIsOENBQUssQ0FBQztRQUNmLGlCQUFpQixFQUFFRCxrREFBUyxDQUFDa0MsT0FBTyxDQUFDbVQsMkJBQTJCO1FBQ2hFLGlCQUFpQixFQUFFclYsa0RBQVMsQ0FBQ2tDLE9BQU8sQ0FBQ29ULDJCQUEyQjtRQUNoRSxtQkFBbUIsRUFBRXRWLGtEQUFTLENBQUNrQyxPQUFPLENBQUNxVDtNQUN6QyxDQUFDLENBQUM7SUFDSjtFQUFDO0FBQUEsRUE3RXNDL1MsNENBQUc7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDdEI1QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDNEI7QUFBQSxJQUVQb00sT0FBTztFQUMxQixTQUFBQSxRQUFBLEVBQWM7SUFBQWpPLGlGQUFBLE9BQUFpTyxPQUFBO0lBQ1osSUFBSSxDQUFDOFcsTUFBTSxHQUFHLENBQUMsQ0FBQztFQUNsQjtFQUFDLE9BQUEza0IsOEVBQUEsQ0FBQTZOLE9BQUE7SUFBQTVOLEdBQUE7SUFBQUMsS0FBQSxFQUVELFNBQUE2RyxhQUFhQSxDQUFDNkMsU0FBUyxFQUFFO01BQ3ZCLElBQUksQ0FBQythLE1BQU0sQ0FBQy9hLFNBQVMsQ0FBQyxHQUFHLElBQUlvUiw4Q0FBSyxDQUFDcFIsU0FBUyxDQUFDO0lBQy9DO0VBQUM7SUFBQTNKLEdBQUE7SUFBQUMsS0FBQSxFQUVELFNBQUFxSixhQUFhQSxDQUFDSyxTQUFTLEVBQWdCO01BQUEsU0FBQXRHLElBQUEsR0FBQUMsU0FBQSxDQUFBQyxNQUFBLEVBQVhvaEIsU0FBUyxPQUFBbGhCLEtBQUEsQ0FBQUosSUFBQSxPQUFBQSxJQUFBLFdBQUFLLElBQUEsTUFBQUEsSUFBQSxHQUFBTCxJQUFBLEVBQUFLLElBQUE7UUFBVGloQixTQUFTLENBQUFqaEIsSUFBQSxRQUFBSixTQUFBLENBQUFJLElBQUE7TUFBQTtNQUNuQyxJQUFHLElBQUksQ0FBQ2doQixNQUFNLENBQUMvYSxTQUFTLENBQUMsRUFBRTtRQUN6QixJQUFNc1IsU0FBUyxHQUFHLElBQUksQ0FBQ3lKLE1BQU0sQ0FBQy9hLFNBQVMsQ0FBQyxDQUFDc1IsU0FBUztRQUNsREEsU0FBUyxDQUFDdlIsT0FBTyxDQUFDLFVBQUFnQixRQUFRO1VBQUEsT0FBSUEsUUFBUSxJQUFJQSxRQUFRLENBQUFnQixLQUFBLFNBQUlpWixTQUFTLENBQUM7UUFBQSxFQUFDO01BQ25FO0lBQ0Y7RUFBQztJQUFBM2tCLEdBQUE7SUFBQUMsS0FBQSxFQUVELFNBQUEySixnQkFBZ0JBLENBQUNELFNBQVMsRUFBRWUsUUFBUSxFQUFFO01BQ3BDLElBQUcsSUFBSSxDQUFDZ2EsTUFBTSxDQUFDL2EsU0FBUyxDQUFDLEVBQUUsSUFBSSxDQUFDK2EsTUFBTSxDQUFDL2EsU0FBUyxDQUFDLENBQUN1UixnQkFBZ0IsQ0FBQ3hRLFFBQVEsQ0FBQztJQUM5RTtFQUFDO0lBQUExSyxHQUFBO0lBQUFDLEtBQUEsRUFFRCxTQUFBNFAsbUJBQW1CQSxDQUFDbEcsU0FBUyxFQUFFZSxRQUFRLEVBQUU7TUFDdkMsSUFBRyxJQUFJLENBQUNnYSxNQUFNLENBQUMvYSxTQUFTLENBQUMsRUFBRSxJQUFJLENBQUMrYSxNQUFNLENBQUMvYSxTQUFTLENBQUMsQ0FBQ3dSLGNBQWMsQ0FBQ3pRLFFBQVEsQ0FBQztJQUM1RTtFQUFDO0lBQUExSyxHQUFBO0lBQUFDLEtBQUEsRUFFRCxTQUFBNlAsc0JBQXNCQSxDQUFDbkcsU0FBUyxFQUFFO01BQ2hDLElBQUcsSUFBSSxDQUFDK2EsTUFBTSxDQUFDL2EsU0FBUyxDQUFDLEVBQUUsSUFBSSxDQUFDK2EsTUFBTSxDQUFDL2EsU0FBUyxDQUFDLENBQUN5UixrQkFBa0IsQ0FBQyxDQUFDO0lBQ3hFO0VBQUM7QUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzlDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDZ0M7QUFBQSxJQUVYL1YsYUFBYSwwQkFBQXVmLFFBQUE7RUFBQSxTQUFBdmYsY0FBQTtJQUFBMUYsaUZBQUEsT0FBQTBGLGFBQUE7SUFBQSxPQUFBekYsVUFBQSxPQUFBeUYsYUFBQSxFQUFBL0IsU0FBQTtFQUFBO0VBQUF4RCwyRUFBQSxDQUFBdUYsYUFBQSxFQUFBdWYsUUFBQTtFQUFBLE9BQUE3a0IsOEVBQUEsQ0FBQXNGLGFBQUE7SUFBQXJGLEdBQUE7SUFBQUMsS0FBQSxFQUNoQyxTQUFBNkcsYUFBYUEsQ0FBQzZDLFNBQVMsRUFBRTtNQUN2QixJQUFHLENBQUMsSUFBSSxDQUFDK2EsTUFBTSxDQUFDL2EsU0FBUyxDQUFDLEVBQUUsSUFBSSxDQUFDK2EsTUFBTSxDQUFDL2EsU0FBUyxDQUFDLEdBQUcsRUFBRTtJQUN6RDtFQUFDO0lBQUEzSixHQUFBO0lBQUFDLEtBQUEsRUFFRCxTQUFBcUosYUFBYUEsQ0FBQ0ssU0FBUyxFQUFnQjtNQUFBLFNBQUF0RyxJQUFBLEdBQUFDLFNBQUEsQ0FBQUMsTUFBQSxFQUFYb2hCLFNBQVMsT0FBQWxoQixLQUFBLENBQUFKLElBQUEsT0FBQUEsSUFBQSxXQUFBSyxJQUFBLE1BQUFBLElBQUEsR0FBQUwsSUFBQSxFQUFBSyxJQUFBO1FBQVRpaEIsU0FBUyxDQUFBamhCLElBQUEsUUFBQUosU0FBQSxDQUFBSSxJQUFBO01BQUE7TUFDbkMsSUFBRyxJQUFJLENBQUNnaEIsTUFBTSxDQUFDL2EsU0FBUyxDQUFDLEVBQUU7UUFDekIsSUFBTSthLE1BQU0sR0FBRyxJQUFJLENBQUNBLE1BQU0sQ0FBQy9hLFNBQVMsQ0FBQztRQUNyQythLE1BQU0sQ0FBQ2hiLE9BQU8sQ0FBQyxVQUFBRyxLQUFLO1VBQUEsT0FBSUEsS0FBSyxJQUFJQSxLQUFLLENBQUNhLFFBQVEsSUFBSWIsS0FBSyxDQUFDYSxRQUFRLENBQUFnQixLQUFBLENBQWQ3QixLQUFLLEVBQWE4YSxTQUFTLENBQUM7UUFBQSxFQUFDO01BQ2xGO0lBQ0Y7RUFBQztJQUFBM2tCLEdBQUE7SUFBQUMsS0FBQSxFQUVELFNBQUF3SyxzQkFBc0JBLENBQUNkLFNBQVMsRUFBRWEsU0FBUyxFQUFnQjtNQUFBLFNBQUFrTixLQUFBLEdBQUFwVSxTQUFBLENBQUFDLE1BQUEsRUFBWG9oQixTQUFTLE9BQUFsaEIsS0FBQSxDQUFBaVUsS0FBQSxPQUFBQSxLQUFBLFdBQUFDLEtBQUEsTUFBQUEsS0FBQSxHQUFBRCxLQUFBLEVBQUFDLEtBQUE7UUFBVGdOLFNBQVMsQ0FBQWhOLEtBQUEsUUFBQXJVLFNBQUEsQ0FBQXFVLEtBQUE7TUFBQTtNQUN2RCxJQUFHLElBQUksQ0FBQytNLE1BQU0sQ0FBQy9hLFNBQVMsQ0FBQyxFQUFFO1FBQ3pCLElBQU0rYSxNQUFNLEdBQUcsSUFBSSxDQUFDQSxNQUFNLENBQUMvYSxTQUFTLENBQUM7UUFDckMrYSxNQUFNLENBQUNoYixPQUFPLENBQUMsVUFBQUcsS0FBSztVQUFBLE9BQUlBLEtBQUssSUFBSUEsS0FBSyxDQUFDYSxRQUFRLElBQUliLEtBQUssQ0FBQ1csU0FBUyxJQUFJQSxTQUFTLElBQUlYLEtBQUssQ0FBQ2EsUUFBUSxDQUFBZ0IsS0FBQSxDQUFkN0IsS0FBSyxFQUFhOGEsU0FBUyxDQUFDO1FBQUEsRUFBQztNQUNsSDtJQUNGO0VBQUM7SUFBQTNrQixHQUFBO0lBQUFDLEtBQUEsRUFFRCxTQUFBMkosZ0JBQWdCQSxDQUFDRCxTQUFTLEVBQUVhLFNBQVMsRUFBRUUsUUFBUSxFQUFFO01BQy9DLElBQUcsSUFBSSxDQUFDZ2EsTUFBTSxDQUFDL2EsU0FBUyxDQUFDLEVBQUU7UUFDekIsSUFBSSxDQUFDK2EsTUFBTSxDQUFDL2EsU0FBUyxDQUFDLENBQUM4QixJQUFJLENBQUM7VUFDMUIsV0FBVyxFQUFFakIsU0FBUztVQUN0QixVQUFVLEVBQUVFO1FBQ2QsQ0FBQyxDQUFDO01BQ0o7SUFDRjtFQUFDO0lBQUExSyxHQUFBO0lBQUFDLEtBQUEsRUFFRCxTQUFBNFAsbUJBQW1CQSxDQUFDbEcsU0FBUyxFQUFFZSxRQUFRLEVBQUU7TUFDdkMsSUFBRyxJQUFJLENBQUNnYSxNQUFNLENBQUMvYSxTQUFTLENBQUMsRUFBRSxJQUFJLENBQUMrYSxNQUFNLENBQUMvYSxTQUFTLENBQUMsQ0FBQ3VPLE1BQU0sQ0FBQyxVQUFBck8sS0FBSztRQUFBLE9BQUlBLEtBQUssSUFBSUEsS0FBSyxDQUFDYSxRQUFRLElBQUlBLFFBQVE7TUFBQSxFQUFDO0lBQ3hHO0VBQUM7SUFBQTFLLEdBQUE7SUFBQUMsS0FBQSxFQUVELFNBQUE0a0IsNEJBQTRCQSxDQUFDbGIsU0FBUyxFQUFFYSxTQUFTLEVBQUU7TUFDakQsSUFBRyxJQUFJLENBQUNrYSxNQUFNLENBQUMvYSxTQUFTLENBQUMsRUFBRSxJQUFJLENBQUMrYSxNQUFNLENBQUMvYSxTQUFTLENBQUMsQ0FBQ3VPLE1BQU0sQ0FBQyxVQUFBck8sS0FBSztRQUFBLE9BQUlBLEtBQUssSUFBSUEsS0FBSyxDQUFDVyxTQUFTLElBQUlBLFNBQVM7TUFBQSxFQUFDO0lBQzFHO0VBQUM7SUFBQXhLLEdBQUE7SUFBQUMsS0FBQSxFQUVELFNBQUE2UCxzQkFBc0JBLENBQUEsRUFBRztNQUN2QixJQUFJLENBQUM0VSxNQUFNLEdBQUcsRUFBRTtJQUNsQjtFQUFDO0FBQUEsRUF0Q3dDOVcsZ0RBQU87Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDcEJsRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDb0M7QUFDQTtBQUNSO0FBQ1E7QUFBQSxJQUFBdkIsWUFBQSxvQkFBQTdHLE9BQUE7QUFBQSxJQUFBOEcsV0FBQSxvQkFBQTlHLE9BQUE7QUFBQSxJQUVmeEMsR0FBRywwQkFBQXdKLFVBQUE7RUFLdEIsU0FBQXhKLElBQVkzRCxDQUFDLEVBQUVDLENBQUMsRUFBRTZELFFBQVEsRUFBRUMsU0FBUyxFQUFFM0QsS0FBSyxFQUFpQjtJQUFBLElBQUFDLEtBQUE7SUFBQUMsaUZBQUEsT0FBQXFELEdBQUE7SUFBQSxTQUFBSyxJQUFBLEdBQUFDLFNBQUEsQ0FBQUMsTUFBQSxFQUFaQyxVQUFVLE9BQUFDLEtBQUEsQ0FBQUosSUFBQSxPQUFBQSxJQUFBLFdBQUFLLElBQUEsTUFBQUEsSUFBQSxHQUFBTCxJQUFBLEVBQUFLLElBQUE7TUFBVkYsVUFBVSxDQUFBRSxJQUFBLFFBQUFKLFNBQUEsQ0FBQUksSUFBQTtJQUFBO0lBQ3pEaEUsS0FBQSxHQUFBRSxVQUFBLE9BQUFvRCxHQUFBLEdBQU0zRCxDQUFDLEVBQUVDLENBQUMsRUFBRTZELFFBQVEsRUFBRUMsU0FBUyxFQUFFM0QsS0FBSyxFQUFBa0UsTUFBQSxDQUFLSCxVQUFVO0lBQUUzRCxpRkFBQSxDQUFBSCxLQUFBLGdCQUw1QyxLQUFLO0lBQ2xCcUcsMEJBQUEsQ0FBQXJHLEtBQUEsRUFBQTJNLFlBQWEsRUFBRyxDQUFDO0lBQ2pCdEcsMEJBQUEsQ0FBQXJHLEtBQUEsRUFBQTRNLFdBQVksRUFBRyxDQUFDO0lBS2QsSUFBRyxDQUFDdE4sbURBQVMsQ0FBQ2tDLE9BQU8sQ0FBQ3VMLGtDQUFrQyxFQUFFO01BQ3hEL00sS0FBQSxDQUFLZ04sZ0JBQWdCLENBQUMsQ0FBQztNQUN2QmhOLEtBQUEsQ0FBS2lOLGlCQUFpQixDQUFDLENBQUM7TUFFeEJqTixLQUFBLENBQUtrTixlQUFlLENBQUMsWUFBTTtRQUN6QmxOLEtBQUEsQ0FBS2dOLGdCQUFnQixDQUFDLENBQUM7UUFDdkJoTixLQUFBLENBQUtpTixpQkFBaUIsQ0FBQyxDQUFDO01BQzFCLENBQUMsQ0FBQztJQUNKO0lBQUMsT0FBQWpOLEtBQUE7RUFDSDtFQUFDSSwyRUFBQSxDQUFBa0QsR0FBQSxFQUFBd0osVUFBQTtFQUFBLE9BQUF6TSw4RUFBQSxDQUFBaUQsR0FBQTtJQUFBaEQsR0FBQTtJQUFBQyxLQUFBLEVBRUQsU0FBQUMsSUFBSUEsQ0FBQ0MsT0FBTyxFQUFFO01BQUEsSUFBQXNKLE1BQUE7TUFDWixJQUFHLElBQUksQ0FBQ3JKLE1BQU0sRUFBRTtNQUNoQkMsYUFBQSxDQUFBMkMsR0FBQSxvQkFBVzdDLE9BQU87TUFFbEIsSUFBTUcsTUFBTSxHQUFHSCxPQUFPLENBQUNHLE1BQU07TUFDN0IsSUFBTUMsR0FBRyxHQUFHRCxNQUFNLENBQUNFLFVBQVUsQ0FBQyxJQUFJLENBQUM7TUFDbkNELEdBQUcsQ0FBQ29CLElBQUksQ0FBQyxDQUFDO01BRVYsSUFBSWtMLE9BQU8sR0FBR3RNLEdBQUc7TUFFakIsSUFBRyxJQUFJLENBQUN1TSxTQUFTLEVBQUU7UUFDakJELE9BQU8sR0FBRyxJQUFJLENBQUNFLFNBQVMsQ0FBQ3ZNLFVBQVUsQ0FBQyxJQUFJLENBQUM7UUFDekNxTSxPQUFPLENBQUNyRixLQUFLLENBQUN4SSxtREFBUyxDQUFDa0MsT0FBTyxDQUFDdUcsV0FBVyxFQUFFekksbURBQVMsQ0FBQ2tDLE9BQU8sQ0FBQ3VHLFdBQVcsQ0FBQztNQUM3RTtNQUVBLElBQUdwSCxhQUFBLENBQUEyQyxHQUFBLDRCQUFvQixJQUFJLEVBQUU7UUFDM0IsSUFBSTZjLFFBQVEsR0FBRyxJQUFJLENBQUNwZ0IsS0FBSyxDQUFDb0UsT0FBTztRQUVqQ3hELGFBQUEsQ0FBQTJDLEdBQUEseUJBQWlCMEcsT0FBTyxDQUFDLFVBQUFjLFNBQVMsRUFBSTtVQUNwQ3FWLFFBQVEsR0FBR3BXLE1BQUksQ0FBQ3dELGFBQWEsQ0FBQ3pDLFNBQVMsRUFBRXFWLFFBQVEsRUFBRWhULE9BQU8sQ0FBQztRQUM3RCxDQUFDLENBQUM7TUFDSjtNQUVBLElBQUcsSUFBSSxDQUFDQyxTQUFTLEVBQUU7UUFDakI1Tiw4Q0FBSyxDQUFDZ08sYUFBYSxDQUFDM00sR0FBRyxFQUFFLElBQUksQ0FBQ3dNLFNBQVMsRUFBRSxJQUFJLENBQUMxTixDQUFDLEVBQUUsSUFBSSxDQUFDQyxDQUFDLEVBQUUsSUFBSSxDQUFDbUMsS0FBSyxFQUFFLElBQUksQ0FBQ0MsTUFBTSxFQUFFLElBQUksQ0FBQ3JDLENBQUMsR0FBR0wsbURBQVMsQ0FBQ2tDLE9BQU8sQ0FBQ3VHLFdBQVcsRUFBRSxJQUFJLENBQUNuSSxDQUFDLEdBQUdOLG1EQUFTLENBQUNrQyxPQUFPLENBQUN1RyxXQUFXLEVBQUUsSUFBSSxDQUFDaEcsS0FBSyxHQUFHekMsbURBQVMsQ0FBQ2tDLE9BQU8sQ0FBQ3VHLFdBQVcsRUFBRSxJQUFJLENBQUMvRixNQUFNLEdBQUcxQyxtREFBUyxDQUFDa0MsT0FBTyxDQUFDdUcsV0FBVyxDQUFDO01BQzVQO01BRUFwSCxhQUFBLENBQUEyQyxHQUFBLDhCQUFxQnpDLEdBQUc7TUFFeEJBLEdBQUcsQ0FBQ3VCLE9BQU8sQ0FBQyxDQUFDO0lBQ2Y7RUFBQztJQUFBOUIsR0FBQTtJQUFBQyxLQUFBLEVBRUQsU0FBQWdOLGFBQWFBLENBQUN6QyxTQUFTLEVBQUVxVixRQUFRLEVBQUV0ZixHQUFHLEVBQUU7TUFDdEMsSUFBR2lLLFNBQVMsWUFBWXpMLGtEQUFTLEVBQUU7UUFDakN5TCxTQUFTLENBQUNuTCxDQUFDLEdBQUd3Z0IsUUFBUSxHQUFHLElBQUksQ0FBQzFTLGFBQWE7UUFDM0MzQyxTQUFTLENBQUNsTCxDQUFDLEdBQUcsSUFBSSxDQUFDRyxLQUFLLENBQUNvRSxPQUFPLEdBQUcsSUFBSSxDQUFDdUosYUFBYTtRQUVyRCxJQUFHLENBQUM1QyxTQUFTLENBQUNwSyxNQUFNLEVBQUU7VUFDcEIsSUFBRyxJQUFJLENBQUNpTixrQkFBa0IsQ0FBQzdDLFNBQVMsQ0FBQyxFQUFFO1lBQ3JDQSxTQUFTLENBQUN0SyxJQUFJLENBQUNLLEdBQUcsQ0FBQztVQUNyQjtVQUVBc2YsUUFBUSxJQUFJclYsU0FBUyxDQUFDL0ksS0FBSyxHQUFHLElBQUksQ0FBQ2hDLEtBQUssQ0FBQzZOLHNCQUFzQjtRQUNqRTtNQUNGO01BRUEsT0FBT3VTLFFBQVE7SUFDakI7RUFBQztJQUFBN2YsR0FBQTtJQUFBQyxLQUFBLEVBRUQsU0FBQTBNLGlCQUFpQkEsQ0FBQSxFQUFHO01BQ2xCLElBQUl2SixTQUFTLEdBQUcsQ0FBQztNQUNqQi9DLGFBQUEsQ0FBQTJDLEdBQUEseUJBQWlCMEcsT0FBTyxDQUFDLFVBQUFjLFNBQVMsRUFBSTtRQUFFLElBQUdBLFNBQVMsQ0FBQzlJLE1BQU0sR0FBRzBCLFNBQVMsSUFBSSxDQUFDb0gsU0FBUyxDQUFDcEssTUFBTSxFQUFFZ0QsU0FBUyxHQUFHb0gsU0FBUyxDQUFDOUksTUFBTTtNQUFFLENBQUMsQ0FBQztNQUM5SDZFLHFCQUFBLENBQUs4RixZQUFhLEVBQWxCLElBQUksRUFBaUJqSixTQUFTLEdBQUcsSUFBSSxDQUFDM0QsS0FBSyxDQUFDb0UsT0FBM0IsQ0FBQztJQUNwQjtFQUFDO0lBQUE3RCxHQUFBO0lBQUFDLEtBQUEsRUFFRCxTQUFBeU0sZ0JBQWdCQSxDQUFBLEVBQUc7TUFDakIsSUFBSW9ZLFVBQVUsR0FBRyxDQUFDO01BQ2xCemtCLGFBQUEsQ0FBQTJDLEdBQUEseUJBQWlCMEcsT0FBTyxDQUFDLFVBQUFjLFNBQVMsRUFBSTtRQUFFLElBQUcsQ0FBQ0EsU0FBUyxDQUFDcEssTUFBTSxFQUFFMGtCLFVBQVUsSUFBSXRhLFNBQVMsQ0FBQy9JLEtBQUs7TUFBRSxDQUFDLENBQUM7TUFDL0Y4RSxxQkFBQSxDQUFLK0YsV0FBWSxFQUFqQixJQUFJLEVBQWdCd1ksVUFBVSxHQUFHLElBQUksQ0FBQ3JsQixLQUFLLENBQUM2TixzQkFBc0IsSUFBSWpOLGFBQUEsQ0FBQTJDLEdBQUEseUJBQWlCTyxNQUFNLEdBQUcsQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDOUQsS0FBSyxDQUFDb0UsT0FBaEcsQ0FBQztJQUNuQjtFQUFDO0lBQUE3RCxHQUFBO0lBQUFlLEdBQUEsRUFFRCxTQUFBQSxJQUFBLEVBQWtCO01BQ2hCLElBQUcvQixtREFBUyxDQUFDa0MsT0FBTyxDQUFDdUwsa0NBQWtDLEVBQUUsSUFBSSxDQUFDRSxpQkFBaUIsQ0FBQyxDQUFDO01BQ2pGLE9BQU9yRSxxQkFBQSxDQUFLK0QsWUFBYSxFQUFsQixJQUFpQixDQUFDO0lBQzNCO0VBQUM7SUFBQXJNLEdBQUE7SUFBQWUsR0FBQSxFQUVELFNBQUFBLElBQUEsRUFBaUI7TUFDZixJQUFHL0IsbURBQVMsQ0FBQ2tDLE9BQU8sQ0FBQ3VMLGtDQUFrQyxFQUFFLElBQUksQ0FBQ0MsZ0JBQWdCLENBQUMsQ0FBQztNQUNoRixPQUFPcEUscUJBQUEsQ0FBS2dFLFdBQVksRUFBakIsSUFBZ0IsQ0FBQztJQUMxQjtFQUFDO0lBQUF0TSxHQUFBO0lBQUFlLEdBQUEsRUFFRCxTQUFBQSxJQUFBLEVBQVk7TUFDVixJQUFNVSxLQUFLLEdBQUcsSUFBSSxDQUFDK0wsVUFBVSxJQUFLLElBQUksQ0FBQ2pHLE1BQU0sSUFBSSxJQUFJLENBQUNBLE1BQU0sQ0FBQzlGLEtBQU07TUFDbkUsSUFBTWdNLEdBQUcsR0FBRyxJQUFJLENBQUN0SyxRQUFRLElBQUksSUFBSSxHQUFHbkMsSUFBSSxDQUFDeU0sR0FBRyxDQUFDLElBQUksQ0FBQ3RLLFFBQVEsRUFBRTFCLEtBQUssQ0FBQyxHQUFHLElBQUk7TUFDekUsT0FBTyxJQUFJLENBQUN5RCxRQUFRLElBQUksSUFBSSxHQUFHbEUsSUFBSSxDQUFDME0sR0FBRyxDQUFDLElBQUksQ0FBQ3hJLFFBQVEsRUFBRXVJLEdBQUcsSUFBSSxJQUFJLEdBQUdBLEdBQUcsR0FBR2hNLEtBQUssQ0FBQyxHQUFHZ00sR0FBRyxJQUFJLElBQUksR0FBR0EsR0FBRyxHQUFHaE0sS0FBSztJQUMvRztFQUFDO0lBQUF6QixHQUFBO0lBQUFlLEdBQUEsRUFFRCxTQUFBQSxJQUFBLEVBQWE7TUFDWCxJQUFNVyxNQUFNLEdBQUcsSUFBSSxDQUFDaU0sV0FBVyxJQUFLLElBQUksQ0FBQ3BHLE1BQU0sSUFBSSxJQUFJLENBQUNBLE1BQU0sQ0FBQzdGLE1BQU87TUFDdEUsSUFBTStMLEdBQUcsR0FBRyxJQUFJLENBQUNySyxTQUFTLElBQUksSUFBSSxHQUFHcEMsSUFBSSxDQUFDeU0sR0FBRyxDQUFDLElBQUksQ0FBQ3JLLFNBQVMsRUFBRTFCLE1BQU0sQ0FBQyxHQUFHLElBQUk7TUFDNUUsT0FBTyxJQUFJLENBQUN5RCxTQUFTLElBQUksSUFBSSxHQUFHbkUsSUFBSSxDQUFDME0sR0FBRyxDQUFDLElBQUksQ0FBQ3ZJLFNBQVMsRUFBRXNJLEdBQUcsSUFBSSxJQUFJLEdBQUdBLEdBQUcsR0FBRy9MLE1BQU0sQ0FBQyxHQUFHK0wsR0FBRyxJQUFJLElBQUksR0FBR0EsR0FBRyxHQUFHL0wsTUFBTTtJQUNuSDtFQUFDO0lBQUExQixHQUFBO0lBQUFlLEdBQUEsRUFFRCxTQUFBQSxJQUFBLEVBQW1CO01BQ2pCLE9BQUFWLGFBQUEsQ0FBQTJDLEdBQUE7SUFDRjtFQUFDO0FBQUEsRUF4RzhCb0osa0RBQVM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3ZCMUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ29DO0FBQ1I7QUFDQTtBQUNRO0FBQUEsSUFFZmhILEtBQUssMEJBQUFvSCxVQUFBO0VBSXhCLFNBQUFwSCxNQUFBLEVBQTJCO0lBQUEsSUFBQXFFLE1BQUE7SUFBQSxJQUFBL0osS0FBQTtJQUFBQyxpRkFBQSxPQUFBeUYsS0FBQTtJQUN6QjFGLEtBQUEsR0FBQUUsVUFBQSxPQUFBd0YsS0FBQTtJQUFRdkYsaUZBQUEsQ0FBQUgsS0FBQSxnQkFKRyxLQUFLO0lBQUFHLGlGQUFBLENBQUFILEtBQUEsa0JBQ0gsS0FBSztJQUlsQixDQUFBK0osTUFBQSxHQUFBL0osS0FBQSxFQUFLcVgsTUFBTSxDQUFBckwsS0FBQSxDQUFBakMsTUFBQSxFQUFBbkcsU0FBYyxDQUFDO0lBQUMsT0FBQTVELEtBQUE7RUFDN0I7RUFBQ0ksMkVBQUEsQ0FBQXNGLEtBQUEsRUFBQW9ILFVBQUE7RUFBQSxPQUFBek0sOEVBQUEsQ0FBQXFGLEtBQUE7SUFBQXBGLEdBQUE7SUFBQUMsS0FBQSxFQUVELFNBQUFDLElBQUlBLENBQUNDLE9BQU8sRUFBRTtNQUNaLElBQUcsSUFBSSxDQUFDQyxNQUFNLEVBQUU7TUFDaEJDLGFBQUEsQ0FBQStFLEtBQUEsb0JBQVdqRixPQUFPO01BRWxCLElBQU1HLE1BQU0sR0FBR0gsT0FBTyxDQUFDRyxNQUFNO01BQzdCLElBQU1DLEdBQUcsR0FBR0QsTUFBTSxDQUFDRSxVQUFVLENBQUMsSUFBSSxDQUFDO01BQ25DRCxHQUFHLENBQUNvQixJQUFJLENBQUMsQ0FBQztNQUNWLElBQUksQ0FBQ3JCLE1BQU0sQ0FBQ2tKLE1BQU0sR0FBRyxTQUFTO01BRTlCLElBQUlxRCxPQUFPLEdBQUd0TSxHQUFHO01BQ2pCLElBQUcsSUFBSSxDQUFDNEMsUUFBUSxJQUFJLElBQUksQ0FBQ0MsU0FBUyxFQUFFeUosT0FBTyxHQUFHLElBQUksQ0FBQ0UsU0FBUyxDQUFDdk0sVUFBVSxDQUFDLElBQUksQ0FBQztNQUU3RSxJQUFJLENBQUNvRCxjQUFjLENBQUNpSixPQUFPLENBQUMsQ0FBQyxDQUFDOztNQUU5QixJQUFHLElBQUksQ0FBQzFKLFFBQVEsSUFBSSxJQUFJLENBQUNDLFNBQVMsRUFBRWxFLDhDQUFLLENBQUNnTyxhQUFhLENBQUMzTSxHQUFHLEVBQUUsSUFBSSxDQUFDd00sU0FBUyxFQUFFLElBQUksQ0FBQzFOLENBQUMsRUFBRSxJQUFJLENBQUNDLENBQUMsRUFBRSxJQUFJLENBQUNtQyxLQUFLLEVBQUUsSUFBSSxDQUFDQyxNQUFNLEVBQUUsSUFBSSxDQUFDckMsQ0FBQyxFQUFFLElBQUksQ0FBQ0MsQ0FBQyxFQUFFLElBQUksQ0FBQ21DLEtBQUssRUFBRSxJQUFJLENBQUNDLE1BQU0sQ0FBQztNQUM5SnJCLGFBQUEsQ0FBQStFLEtBQUEsOEJBQXFCN0UsR0FBRztNQUV4QkEsR0FBRyxDQUFDdUIsT0FBTyxDQUFDLENBQUM7SUFDZjtFQUFDO0lBQUE5QixHQUFBO0lBQUFDLEtBQUEsRUFFRCxTQUFBMkQsY0FBY0EsQ0FBQ3JELEdBQUcsRUFBRTtNQUNsQixJQUFJLENBQUNpRCxVQUFVLENBQUMySCxJQUFJLENBQUMvRixLQUFLLENBQUM4TixpQkFBaUIsQ0FBQyxDQUFDeEosT0FBTyxDQUFDLFVBQUFjLFNBQVM7UUFBQSxPQUFJQSxTQUFTLENBQUN0SyxJQUFJLENBQUNLLEdBQUcsQ0FBQztNQUFBLEVBQUM7SUFDekY7RUFBQztJQUFBUCxHQUFBO0lBQUFlLEdBQUEsRUFFRCxTQUFBQSxJQUFBLEVBQW1CO01BQ2pCLE9BQU8sSUFBSTlCLDhDQUFLLENBQUM7UUFDZixTQUFTLEVBQUVELG1EQUFTLENBQUNrQyxPQUFPLENBQUM2UTtNQUMvQixDQUFDLENBQUM7SUFDSjtFQUFDO0FBQUEsRUFyQ2dDM0Ysa0RBQVM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDdkI1QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDb0M7QUFDWjtBQUNJO0FBQUEsSUFFUDJZLFNBQVMsMEJBQUFqTyxJQUFBO0VBRzVCLFNBQUFpTyxVQUFZQyxJQUFJLEVBQUV2bEIsS0FBSyxFQUFFOEgsTUFBTSxFQUFFO0lBQUEsSUFBQTdILEtBQUE7SUFBQUMsaUZBQUEsT0FBQW9sQixTQUFBO0lBQy9CcmxCLEtBQUEsR0FBQUUsVUFBQSxPQUFBbWxCLFNBQUEsR0FBTSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUV0bEIsS0FBSztJQUFFSSxpRkFBQSxDQUFBSCxLQUFBLGdCQUgxQixJQUFJO0lBSWZBLEtBQUEsQ0FBSzZILE1BQU0sR0FBR0EsTUFBTTtJQUNwQjdILEtBQUEsQ0FBS3NsQixJQUFJLEdBQUdBLElBQUksSUFBSWhtQixrREFBUyxDQUFDa0MsT0FBTyxDQUFDNlQsc0JBQXNCO0lBQUMsT0FBQXJWLEtBQUE7RUFDL0Q7RUFBQ0ksMkVBQUEsQ0FBQWlsQixTQUFBLEVBQUFqTyxJQUFBO0VBQUEsT0FBQS9XLDhFQUFBLENBQUFnbEIsU0FBQTtJQUFBL2tCLEdBQUE7SUFBQUMsS0FBQSxFQUVELFNBQUFDLElBQUlBLENBQUNDLE9BQU8sRUFBRTtNQUNaLElBQUcsSUFBSSxDQUFDQyxNQUFNLEVBQUU7TUFDaEIsSUFBRyxJQUFJLENBQUNnQyxPQUFPLEVBQUU7UUFDZixJQUFJLENBQUNELE9BQU8sR0FBRyxJQUFJO01BQ3JCO01BRUE5QixhQUFBLENBQUEwa0IsU0FBQSxvQkFBVzVrQixPQUFPO0lBQ3BCO0VBQUM7SUFBQUgsR0FBQTtJQUFBZSxHQUFBLEVBRUQsU0FBQUEsSUFBQSxFQUFxQjtNQUNuQixPQUFPLElBQUksQ0FBQ3dHLE1BQU0sR0FBRyxJQUFJLENBQUNBLE1BQU0sQ0FBQ3BFLFFBQVEsR0FBR25DLElBQUksQ0FBQ0MsR0FBRyxDQUFDRCxJQUFJLENBQUN5TSxHQUFHLENBQUMsQ0FBQyxFQUFFLElBQUksQ0FBQ2xHLE1BQU0sQ0FBQ2xJLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQztJQUN0RjtFQUFDO0lBQUFXLEdBQUE7SUFBQWUsR0FBQSxFQUVELFNBQUFBLElBQUEsRUFBc0I7TUFDcEIsT0FBTyxJQUFJLENBQUN3RyxNQUFNLEdBQUcsSUFBSSxDQUFDQSxNQUFNLENBQUNuRSxTQUFTLEdBQUdwQyxJQUFJLENBQUNDLEdBQUcsQ0FBQ0QsSUFBSSxDQUFDeU0sR0FBRyxDQUFDLENBQUMsRUFBRSxJQUFJLENBQUNsRyxNQUFNLENBQUNqSSxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUM7SUFDdkY7RUFBQztJQUFBVSxHQUFBO0lBQUFlLEdBQUEsRUFFRCxTQUFBQSxJQUFBLEVBQXVCO01BQ3JCLE9BQU8sSUFBSSxDQUFDd0csTUFBTSxHQUFHLElBQUksQ0FBQ0EsTUFBTSxDQUFDaUcsVUFBVSxHQUFHeE0sSUFBSSxDQUFDQyxHQUFHLENBQUNELElBQUksQ0FBQ3lNLEdBQUcsQ0FBQyxDQUFDLEVBQUUsSUFBSSxDQUFDbEcsTUFBTSxDQUFDbEksQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDO0lBQ3hGO0VBQUM7SUFBQVcsR0FBQTtJQUFBZSxHQUFBLEVBRUQsU0FBQUEsSUFBQSxFQUF3QjtNQUN0QixPQUFPLElBQUksQ0FBQ3dHLE1BQU0sR0FBRyxJQUFJLENBQUNBLE1BQU0sQ0FBQ29HLFdBQVcsR0FBRzNNLElBQUksQ0FBQ0MsR0FBRyxDQUFDRCxJQUFJLENBQUN5TSxHQUFHLENBQUMsQ0FBQyxFQUFFLElBQUksQ0FBQ2xHLE1BQU0sQ0FBQ2pJLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQztJQUN6RjtFQUFDO0lBQUFVLEdBQUE7SUFBQWUsR0FBQSxFQUVELFNBQUFBLElBQUEsRUFBZTtNQUNiLE9BQU8sSUFBSSxDQUFDVSxLQUFLO0lBQ25CO0VBQUM7SUFBQXpCLEdBQUE7SUFBQWUsR0FBQSxFQUVELFNBQUFBLElBQUEsRUFBZ0I7TUFDZCxPQUFPLElBQUksQ0FBQ1csTUFBTTtJQUNwQjtFQUFDO0lBQUExQixHQUFBO0lBQUFlLEdBQUEsRUFFRCxTQUFBQSxJQUFBLEVBQW9CO01BQ2xCLE9BQU8sSUFBSSxDQUFDd0csTUFBTSxHQUFHLElBQUksQ0FBQzBkLGNBQWMsR0FBRyxJQUFJLENBQUNDLGdCQUFnQixHQUFHLENBQUM7SUFDdEU7RUFBQztJQUFBbGxCLEdBQUE7SUFBQWUsR0FBQSxFQUVELFNBQUFBLElBQUEsRUFBb0I7TUFDbEIsT0FBTyxJQUFJLENBQUN3RyxNQUFNLEdBQUcsSUFBSSxDQUFDNGQsZUFBZSxHQUFHLElBQUksQ0FBQ0MsaUJBQWlCLEdBQUcsQ0FBQztJQUN4RTtFQUFDO0lBQUFwbEIsR0FBQTtJQUFBZSxHQUFBLEVBRUQsU0FBQUEsSUFBQSxFQUFZO01BQ1YsT0FBTyxJQUFJLENBQUNra0IsY0FBYyxHQUFHLElBQUksQ0FBQ0ksYUFBYTtJQUNqRDtFQUFDO0lBQUFybEIsR0FBQTtJQUFBZSxHQUFBLEVBRUQsU0FBQUEsSUFBQSxFQUFhO01BQ1gsT0FBTyxJQUFJLENBQUNva0IsZUFBZSxHQUFHLElBQUksQ0FBQ0csYUFBYTtJQUNsRDtFQUFDO0lBQUF0bEIsR0FBQTtJQUFBZSxHQUFBLEVBRUQsU0FBQUEsSUFBQSxFQUF3QjtNQUN0QixPQUFPLElBQUksQ0FBQ21rQixnQkFBZ0IsR0FBRyxJQUFJLENBQUNELGNBQWM7SUFDcEQ7RUFBQztJQUFBamxCLEdBQUE7SUFBQWUsR0FBQSxFQUVELFNBQUFBLElBQUEsRUFBd0I7TUFDdEIsT0FBTyxJQUFJLENBQUNxa0IsaUJBQWlCLEdBQUcsSUFBSSxDQUFDRCxlQUFlO0lBQ3REO0VBQUM7SUFBQW5sQixHQUFBO0lBQUFlLEdBQUEsRUFFRCxTQUFBQSxJQUFBLEVBQXdCO01BQ3RCLE9BQU8sSUFBSSxDQUFDd0csTUFBTSxHQUFHLElBQUksQ0FBQ0EsTUFBTSxDQUFDNEYsYUFBYSxHQUFHLElBQUksQ0FBQ29ZLGlCQUFpQixHQUFHLENBQUM7SUFDN0U7RUFBQztJQUFBdmxCLEdBQUE7SUFBQWUsR0FBQSxFQUVELFNBQUFBLElBQUEsRUFBd0I7TUFDdEIsT0FBTyxJQUFJLENBQUN3RyxNQUFNLEdBQUcsSUFBSSxDQUFDQSxNQUFNLENBQUM2RixhQUFhLEdBQUcsSUFBSSxDQUFDb1ksaUJBQWlCLEdBQUcsQ0FBQztJQUM3RTtFQUFDO0lBQUF4bEIsR0FBQTtJQUFBZSxHQUFBLEVBRUQsU0FBQUEsSUFBQSxFQUFzQjtNQUNwQixPQUFPLElBQUksQ0FBQ2trQixjQUFjLEdBQUcsSUFBSSxDQUFDeGpCLEtBQUs7SUFDekM7RUFBQztJQUFBekIsR0FBQTtJQUFBZSxHQUFBLEVBRUQsU0FBQUEsSUFBQSxFQUFzQjtNQUNwQixPQUFPLElBQUksQ0FBQ29rQixlQUFlLEdBQUcsSUFBSSxDQUFDempCLE1BQU07SUFDM0M7RUFBQztJQUFBMUIsR0FBQTtJQUFBZSxHQUFBLEVBRUQsU0FBQUEsSUFBQSxFQUFRO01BQ04sT0FBTyxJQUFJLENBQUN3RyxNQUFNLEdBQUd2RyxJQUFJLENBQUNDLEdBQUcsQ0FBQyxJQUFJLENBQUNzRyxNQUFNLENBQUNsSSxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUN1WixlQUFlLEdBQUcsSUFBSSxDQUFDQyxpQkFBaUIsR0FBRyxDQUFDO0lBQ2xHO0VBQUM7SUFBQTdZLEdBQUE7SUFBQWUsR0FBQSxFQUVELFNBQUFBLElBQUEsRUFBUTtNQUNOLE9BQU8sSUFBSSxDQUFDd0csTUFBTSxHQUFHdkcsSUFBSSxDQUFDQyxHQUFHLENBQUMsSUFBSSxDQUFDc0csTUFBTSxDQUFDakksQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDb1osZUFBZSxHQUFHLElBQUksQ0FBQ0MsaUJBQWlCLEdBQUcsQ0FBQztJQUNsRztFQUFDO0lBQUEzWSxHQUFBO0lBQUFlLEdBQUEsRUFFRCxTQUFBQSxJQUFBLEVBQW1CO01BQ2pCLE9BQU8sSUFBSTlCLDhDQUFLLENBQUM7UUFDZixpQkFBaUIsRUFBRUQsa0RBQVMsQ0FBQ2tDLE9BQU8sQ0FBQzBULDRCQUE0QjtRQUNqRSxzQkFBc0IsRUFBRTVWLGtEQUFTLENBQUNrQyxPQUFPLENBQUMyVCxrQ0FBa0M7UUFDNUUscUJBQXFCLEVBQUU3VixrREFBUyxDQUFDa0MsT0FBTyxDQUFDNFQsa0NBQWtDO1FBQzNFLFlBQVksRUFBRTtNQUNoQixDQUFDLENBQUM7SUFDSjtFQUFDO0lBQUE5VSxHQUFBO0lBQUFDLEtBQUEsRUFFRCxTQUFBNFMsa0JBQWtCQSxDQUFDTixjQUFjLEVBQUU7TUFDakMsT0FBT0EsY0FBYyxDQUFDVSxrQkFBa0IsQ0FBQyxJQUFJLENBQUM7SUFDaEQ7O0lBRUE7RUFBQTtJQUFBalQsR0FBQTtJQUFBQyxLQUFBLEVBQ0EsU0FBQWdULGtCQUFrQkEsQ0FBQ1YsY0FBYyxFQUFFO01BQ2pDLE9BQU8sQ0FBQztJQUNWO0VBQUM7QUFBQSxFQTFHb0MvUSw0Q0FBRzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDdEIxQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDb0M7QUFBQSxJQUVmK1UsbUJBQW1CLDBCQUFBa1AsVUFBQTtFQUd0QyxTQUFBbFAsb0JBQVl5TyxJQUFJLEVBQUV2bEIsS0FBSyxFQUFFOEgsTUFBTSxFQUFFO0lBQUEsSUFBQTdILEtBQUE7SUFBQUMsaUZBQUEsT0FBQTRXLG1CQUFBO0lBQy9CN1csS0FBQSxHQUFBRSxVQUFBLE9BQUEyVyxtQkFBQSxHQUFNeU8sSUFBSSxFQUFFdmxCLEtBQUssRUFBRThILE1BQU07SUFBRTFILGlGQUFBLENBQUFILEtBQUEsZ0JBSGhCLElBQUk7SUFLZkEsS0FBQSxDQUFLc1AsYUFBYSxDQUFDLFVBQUNkLE1BQU0sRUFBSztNQUM3QixJQUFHeE8sS0FBQSxDQUFLNkgsTUFBTSxFQUFFO1FBQ2QsSUFBTW1lLG9CQUFvQixHQUFHMWtCLElBQUksQ0FBQ0MsR0FBRyxDQUFDLENBQUN2QixLQUFBLENBQUs2SCxNQUFNLENBQUNsSSxDQUFDLEdBQUcyQixJQUFJLENBQUMwTSxHQUFHLENBQUNoTyxLQUFBLENBQUs2SCxNQUFNLENBQUNsSSxDQUFDLEVBQUVLLEtBQUEsQ0FBS0wsQ0FBQyxHQUFHLENBQUM2TyxNQUFNLENBQUMsS0FBS3hPLEtBQUEsQ0FBSzZILE1BQU0sQ0FBQzlGLEtBQUssR0FBRy9CLEtBQUEsQ0FBSytCLEtBQUssQ0FBQyxDQUFDO1FBQ3JJLElBQU1ra0IsU0FBUyxHQUFJam1CLEtBQUEsQ0FBSzZsQixpQkFBaUIsR0FBR0csb0JBQW9CLEdBQUlobUIsS0FBQSxDQUFLNkgsTUFBTSxDQUFDNEYsYUFBYTtRQUM3RnpOLEtBQUEsQ0FBSzZILE1BQU0sQ0FBQzRGLGFBQWEsSUFBSXdZLFNBQVM7UUFFdEMsSUFBR2ptQixLQUFBLENBQUs2SCxNQUFNLENBQUNWLE9BQU8sRUFBRTtVQUN0Qm5ILEtBQUEsQ0FBSzZILE1BQU0sQ0FBQ1YsT0FBTyxDQUFDeUMsYUFBYSxDQUFDLFVBQVUsRUFBRXFjLFNBQVMsRUFBRSxDQUFDLENBQUM7UUFDN0Q7TUFDRjtJQUNGLENBQUMsQ0FBQztJQUFDLE9BQUFqbUIsS0FBQTtFQUNMO0VBQUNJLDJFQUFBLENBQUF5VyxtQkFBQSxFQUFBa1AsVUFBQTtFQUFBLE9BQUExbEIsOEVBQUEsQ0FBQXdXLG1CQUFBO0lBQUF2VyxHQUFBO0lBQUFDLEtBQUEsRUFFRCxTQUFBQyxJQUFJQSxDQUFDQyxPQUFPLEVBQUU7TUFDWixJQUFHLElBQUksQ0FBQ3lZLGVBQWUsR0FBRyxDQUFDLEVBQUU7UUFDM0J2WSxhQUFBLENBQUFrVyxtQkFBQSxvQkFBV3BXLE9BQU87TUFDcEI7SUFDRjtFQUFDO0lBQUFILEdBQUE7SUFBQWUsR0FBQSxFQUVELFNBQUFBLElBQUEsRUFBYTtNQUNYLE9BQU8sSUFBSSxDQUFDaWtCLElBQUk7SUFDbEI7RUFBQztJQUFBaGxCLEdBQUE7SUFBQWUsR0FBQSxFQUVELFNBQUFBLElBQUEsRUFBUTtNQUNOLE9BQU8sSUFBSSxDQUFDd0csTUFBTSxHQUFHLElBQUksQ0FBQ0EsTUFBTSxDQUFDakksQ0FBQyxHQUFHLElBQUksQ0FBQ2lJLE1BQU0sQ0FBQzdGLE1BQU0sR0FBRyxJQUFJLENBQUNzakIsSUFBSSxHQUFHLElBQUk7SUFDNUU7RUFBQztBQUFBLEVBL0I4Q0Qsa0RBQVM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3BCMUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ29DO0FBQUEsSUFFZnZPLGlCQUFpQiwwQkFBQWlQLFVBQUE7RUFHcEMsU0FBQWpQLGtCQUFZd08sSUFBSSxFQUFFdmxCLEtBQUssRUFBRThILE1BQU0sRUFBRTtJQUFBLElBQUE3SCxLQUFBO0lBQUFDLGlGQUFBLE9BQUE2VyxpQkFBQTtJQUMvQjlXLEtBQUEsR0FBQUUsVUFBQSxPQUFBNFcsaUJBQUEsR0FBTXdPLElBQUksRUFBRXZsQixLQUFLLEVBQUU4SCxNQUFNO0lBQUUxSCxpRkFBQSxDQUFBSCxLQUFBLGdCQUhoQixJQUFJO0lBS2ZBLEtBQUEsQ0FBS3NQLGFBQWEsQ0FBQyxVQUFDZCxNQUFNLEVBQUVDLE1BQU0sRUFBSztNQUNyQyxJQUFHek8sS0FBQSxDQUFLNkgsTUFBTSxFQUFFO1FBQ2QsSUFBTW1lLG9CQUFvQixHQUFHMWtCLElBQUksQ0FBQ0MsR0FBRyxDQUFDLENBQUN2QixLQUFBLENBQUs2SCxNQUFNLENBQUNqSSxDQUFDLEdBQUcwQixJQUFJLENBQUMwTSxHQUFHLENBQUNoTyxLQUFBLENBQUs2SCxNQUFNLENBQUNqSSxDQUFDLEVBQUVJLEtBQUEsQ0FBS0osQ0FBQyxHQUFHLENBQUM2TyxNQUFNLENBQUMsS0FBS3pPLEtBQUEsQ0FBSzZILE1BQU0sQ0FBQzdGLE1BQU0sR0FBR2hDLEtBQUEsQ0FBS2dDLE1BQU0sQ0FBQyxDQUFDO1FBQ3ZJLElBQU1ra0IsU0FBUyxHQUFJbG1CLEtBQUEsQ0FBSzhsQixpQkFBaUIsR0FBR0Usb0JBQW9CLEdBQUlobUIsS0FBQSxDQUFLNkgsTUFBTSxDQUFDNkYsYUFBYTtRQUM3RjFOLEtBQUEsQ0FBSzZILE1BQU0sQ0FBQzZGLGFBQWEsSUFBSXdZLFNBQVM7UUFFdEMsSUFBR2xtQixLQUFBLENBQUs2SCxNQUFNLENBQUNWLE9BQU8sRUFBRTtVQUN0Qm5ILEtBQUEsQ0FBSzZILE1BQU0sQ0FBQ1YsT0FBTyxDQUFDeUMsYUFBYSxDQUFDLFVBQVUsRUFBRSxDQUFDLEVBQUVzYyxTQUFTLENBQUM7UUFDN0Q7TUFDRjtJQUNGLENBQUMsQ0FBQztJQUFDLE9BQUFsbUIsS0FBQTtFQUNMO0VBQUNJLDJFQUFBLENBQUEwVyxpQkFBQSxFQUFBaVAsVUFBQTtFQUFBLE9BQUExbEIsOEVBQUEsQ0FBQXlXLGlCQUFBO0lBQUF4VyxHQUFBO0lBQUFDLEtBQUEsRUFFRCxTQUFBQyxJQUFJQSxDQUFDQyxPQUFPLEVBQUU7TUFDWixJQUFHLElBQUksQ0FBQ3VZLGVBQWUsR0FBRyxDQUFDLEVBQUU7UUFDM0JyWSxhQUFBLENBQUFtVyxpQkFBQSxvQkFBV3JXLE9BQU87TUFDcEI7SUFDRjtFQUFDO0lBQUFILEdBQUE7SUFBQWUsR0FBQSxFQUVELFNBQUFBLElBQUEsRUFBWTtNQUNWLE9BQU8sSUFBSSxDQUFDaWtCLElBQUk7SUFDbEI7RUFBQztJQUFBaGxCLEdBQUE7SUFBQWUsR0FBQSxFQUVELFNBQUFBLElBQUEsRUFBUTtNQUNOLE9BQU8sSUFBSSxDQUFDd0csTUFBTSxHQUFHLElBQUksQ0FBQ0EsTUFBTSxDQUFDbEksQ0FBQyxHQUFHLElBQUksQ0FBQ2tJLE1BQU0sQ0FBQzlGLEtBQUssR0FBRyxJQUFJLENBQUN1akIsSUFBSSxHQUFHLENBQUM7SUFDeEU7RUFBQztBQUFBLEVBL0I0Q0Qsa0RBQVM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3BCeEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQzRCO0FBQ0U7QUFDSTtBQUNOO0FBQ1E7QUFBQSxJQUFBdGYsTUFBQSxvQkFBQUQsT0FBQTtBQUFBLElBRWZzZ0IsTUFBTSwwQkFBQTNoQixPQUFBO0VBR3pCLFNBQUEyaEIsT0FBWXptQixDQUFDLEVBQUVDLENBQUMsRUFBRTZELFFBQVEsRUFBRUMsU0FBUyxFQUFFM0QsS0FBSyxFQUFFc21CLGVBQWUsRUFBRUMsYUFBYSxFQUFFO0lBQUEsSUFBQXRtQixLQUFBO0lBQUFDLGlGQUFBLE9BQUFtbUIsTUFBQTtJQUM1RXBtQixLQUFBLEdBQUFFLFVBQUEsT0FBQWttQixNQUFBLEdBQU16bUIsQ0FBQyxFQUFFQyxDQUFDLEVBQUU2RCxRQUFRLEVBQUVDLFNBQVMsRUFBRTNELEtBQUs7SUFIeENzRywwQkFBQSxDQUFBckcsS0FBQSxFQUFBK0YsTUFBTyxFQUFHLENBQUM7SUFLVC9GLEtBQUEsQ0FBS3FtQixlQUFlLEdBQUdBLGVBQWU7SUFDdEMsSUFBR0MsYUFBYSxFQUFFdG1CLEtBQUEsQ0FBS3VtQixjQUFjLEdBQUdELGFBQWE7SUFFckR0bUIsS0FBQSxDQUFLd21CLEtBQUssR0FBRyxJQUFJM0wsOENBQUssQ0FBQyxFQUFFLEVBQUVsYixDQUFDLEVBQUVDLENBQUMsRUFBRUcsS0FBSyxDQUFDO0lBQ3ZDQyxLQUFBLENBQUt3bUIsS0FBSyxDQUFDem1CLEtBQUssQ0FBQ3lTLE1BQU0sQ0FBQztNQUFFLFlBQVksRUFBRWxULG1EQUFTLENBQUN1UyxVQUFVLENBQUNHLElBQUk7TUFBRSxvQkFBb0IsRUFBRTFTLG1EQUFTLENBQUM0UyxrQkFBa0IsQ0FBQ0o7SUFBTyxDQUFDLENBQUM7SUFDL0g5UixLQUFBLENBQUt5bUIsUUFBUSxHQUFHLElBQUlOLGtEQUFRLENBQUMsSUFBSSxFQUFFLElBQUksRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFcG1CLEtBQUssQ0FBQztJQUNyREMsS0FBQSxDQUFLeW1CLFFBQVEsQ0FBQzFtQixLQUFLLENBQUN5UyxNQUFNLENBQUM7TUFBRSxZQUFZLEVBQUVsVCxtREFBUyxDQUFDdVMsVUFBVSxDQUFDRSxLQUFLO01BQUUsb0JBQW9CLEVBQUV6UyxtREFBUyxDQUFDNFMsa0JBQWtCLENBQUNKO0lBQU8sQ0FBQyxDQUFDO0lBRW5JOVIsS0FBQSxDQUFLcVgsTUFBTSxDQUFDclgsS0FBQSxDQUFLd21CLEtBQUssRUFBRXhtQixLQUFBLENBQUt5bUIsUUFBUSxDQUFDO0lBRXRDem1CLEtBQUEsQ0FBS2lRLGNBQWMsQ0FBQyxZQUFNO01BQ3hCLElBQUdqUSxLQUFBLENBQUtxbUIsZUFBZSxFQUFFO1FBQ3ZCcm1CLEtBQUEsQ0FBS3FtQixlQUFlLENBQUMzbEIsTUFBTSxHQUFHLEtBQUs7TUFDckM7SUFDRixDQUFDLENBQUM7SUFFRixJQUFHLENBQUNwQixtREFBUyxDQUFDa0MsT0FBTyxDQUFDdUwsa0NBQWtDLEVBQUU7TUFDeEQvTSxLQUFBLENBQUswbUIsV0FBVyxDQUFDLENBQUM7TUFDbEIxbUIsS0FBQSxDQUFLa04sZUFBZSxDQUFDO1FBQUEsT0FBTWxOLEtBQUEsQ0FBSzBtQixXQUFXLENBQUMsQ0FBQztNQUFBLEVBQUM7SUFDaEQ7SUFBQyxPQUFBMW1CLEtBQUE7RUFDSDtFQUFDSSwyRUFBQSxDQUFBZ21CLE1BQUEsRUFBQTNoQixPQUFBO0VBQUEsT0FBQXBFLDhFQUFBLENBQUErbEIsTUFBQTtJQUFBOWxCLEdBQUE7SUFBQUMsS0FBQSxFQUVELFNBQUFDLElBQUlBLENBQUNDLE9BQU8sRUFBRTtNQUNaLElBQUcsSUFBSSxDQUFDQyxNQUFNLEVBQUU7TUFDaEIsSUFBRyxJQUFJLENBQUM2bEIsY0FBYyxJQUFJLElBQUksQ0FBQ0EsY0FBYyxDQUFDQyxLQUFLLEVBQUU7UUFDbkQsSUFBSSxDQUFDQSxLQUFLLENBQUNwTCxJQUFJLEdBQUcsSUFBSSxDQUFDbUwsY0FBYyxDQUFDQyxLQUFLLENBQUNwTCxJQUFJO01BQ2xEO01BRUF6YSxhQUFBLENBQUF5bEIsTUFBQSxvQkFBVzNsQixPQUFPO01BRWxCLElBQUcsSUFBSSxDQUFDNGxCLGVBQWUsRUFBRTtRQUN2QixJQUFJLENBQUNBLGVBQWUsQ0FBQ25ELE1BQU0sR0FBRyxJQUFJO01BQ3BDO0lBQ0Y7RUFBQztJQUFBNWlCLEdBQUE7SUFBQWUsR0FBQSxFQUVELFNBQUFBLElBQUEsRUFBcUI7TUFDbkIsT0FBTyxJQUFJLENBQUNnbEIsZUFBZSxHQUFHLElBQUksQ0FBQ0EsZUFBZSxDQUFDdmlCLFVBQVUsQ0FBQyxJQUFJLENBQUN1aUIsZUFBZSxDQUFDRSxjQUFjLENBQUMsR0FBRyxJQUFJO0lBQzNHLENBQUM7SUFBQWpoQixHQUFBLEVBRUQsU0FBQUEsSUFBbUJ3WSxFQUFFLEVBQUU7TUFDckIsSUFBR0EsRUFBRSxJQUFJLElBQUksQ0FBQ3VJLGVBQWUsQ0FBQ0UsY0FBYyxFQUFFO1FBQzVDLElBQUksQ0FBQ0YsZUFBZSxDQUFDRSxjQUFjLEdBQUd6SSxFQUFFO1FBQ3hDLElBQUksQ0FBQzNXLE9BQU8sQ0FBQ3lDLGFBQWEsQ0FBQyxVQUFVLEVBQUUsSUFBSSxDQUFDO01BQzlDO0lBQ0Y7RUFBQztJQUFBdEosR0FBQTtJQUFBZSxHQUFBLEVBRUQsU0FBQUEsSUFBQSxFQUFXO01BQ1QsT0FBTyxJQUFJLENBQUNrbEIsY0FBYyxJQUFJLElBQUksQ0FBQ0EsY0FBYyxDQUFDQyxLQUFLLEdBQUcsSUFBSSxDQUFDRCxjQUFjLENBQUNDLEtBQUssQ0FBQ3BMLElBQUksR0FBRyxJQUFJO0lBQ2pHO0VBQUM7SUFBQTlhLEdBQUE7SUFBQUMsS0FBQSxFQUVELFNBQUFtbUIsV0FBV0EsQ0FBQSxFQUFHO01BQ1osSUFBSWpqQixRQUFRLEdBQUcsSUFBSSxDQUFDK2lCLEtBQUssQ0FBQ3prQixLQUFLO01BRS9CLElBQUcsSUFBSSxDQUFDc2tCLGVBQWUsRUFBRTtRQUN2QixJQUFJLENBQUNBLGVBQWUsQ0FBQ3ZpQixVQUFVLENBQUNrRyxPQUFPLENBQUMsVUFBQWMsU0FBUyxFQUFJO1VBQ25ELElBQU0wYixLQUFLLEdBQUcxYixTQUFTLENBQUMwYixLQUFLO1VBRTdCLElBQUdBLEtBQUssRUFBRTtZQUNSLElBQUdBLEtBQUssQ0FBQ3RFLFdBQVcsRUFBRXNFLEtBQUssQ0FBQ3RFLFdBQVcsQ0FBQyxDQUFDO1lBQ3pDLElBQUdzRSxLQUFLLENBQUN6a0IsS0FBSyxHQUFHMEIsUUFBUSxFQUFFQSxRQUFRLEdBQUcraUIsS0FBSyxDQUFDemtCLEtBQUs7VUFDbkQ7UUFDRixDQUFDLENBQUM7TUFDSjtNQUVBOEUscUJBQUEsQ0FBS2QsTUFBTyxFQUFaLElBQUksRUFBV3RDLFFBQVEsR0FBRyxJQUFJLENBQUMxRCxLQUFLLENBQUNvRSxPQUFPLEdBQUcsSUFBSSxDQUFDc2lCLFFBQVEsQ0FBQzFrQixLQUFLLEdBQUcsRUFBMUQsQ0FBQztJQUNkO0VBQUM7SUFBQXpCLEdBQUE7SUFBQWUsR0FBQSxFQUVELFNBQUFBLElBQUEsRUFBWTtNQUNWLElBQUcvQixtREFBUyxDQUFDa0MsT0FBTyxDQUFDdUwsa0NBQWtDLEVBQUUsSUFBSSxDQUFDMlosV0FBVyxDQUFDLENBQUM7TUFDM0UsT0FBTzlkLHFCQUFBLENBQUs3QyxNQUFPLEVBQVosSUFBVyxDQUFDO0lBQ3JCO0VBQUM7SUFBQXpGLEdBQUE7SUFBQWUsR0FBQSxFQUVELFNBQUFBLElBQUEsRUFBb0I7TUFDbEIsSUFBTXlDLFVBQVUsR0FBRyxFQUFFO01BQ3JCQSxVQUFVLENBQUNpSSxJQUFJLENBQUFDLEtBQUEsQ0FBZmxJLFVBQVUsRUFBQThHLG9GQUFBLENBQUFqSyxhQUFBLENBQUF5bEIsTUFBQSw0QkFBNEIsQ0FBQztNQUN2QyxPQUFPdGlCLFVBQVU7SUFDbkI7RUFBQztJQUFBeEQsR0FBQTtJQUFBZSxHQUFBLEVBRUQsU0FBQUEsSUFBQSxFQUFtQjtNQUNqQixPQUFPLElBQUk5QiwrQ0FBSyxDQUFDO1FBQ2YsaUJBQWlCLEVBQUVELG1EQUFTLENBQUNrQyxPQUFPLENBQUNzVSx5QkFBeUI7UUFDOUQsc0JBQXNCLEVBQUV4VyxtREFBUyxDQUFDa0MsT0FBTyxDQUFDdVUsK0JBQStCO1FBQ3pFLHFCQUFxQixFQUFFelcsbURBQVMsQ0FBQ2tDLE9BQU8sQ0FBQ3dVLCtCQUErQjtRQUN4RSxTQUFTLEVBQUUxVyxtREFBUyxDQUFDa0MsT0FBTyxDQUFDNlE7TUFDL0IsQ0FBQyxDQUFDO0lBQ0o7RUFBQztJQUFBL1IsR0FBQTtJQUFBZSxHQUFBLEVBRUQsU0FBQUEsSUFBQSxFQUFlO01BQ2IsT0FBT1YsYUFBQSxDQUFBeWxCLE1BQUEsMEJBQWtCLElBQUksQ0FBQ0MsZUFBZSxDQUFDampCLFFBQVE7SUFDeEQsQ0FBQztJQUFBa0MsR0FBQSxFQUVELFNBQUFBLElBQWFsQyxRQUFRLEVBQUU7TUFDckJtQyxhQUFBLENBQUE2Z0IsTUFBQSxjQUFpQmhqQixRQUFRO0lBQzNCO0VBQUM7QUFBQSxFQW5HaUNHLCtDQUFNOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDeEIxQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDOEI7QUFDTTtBQUNSO0FBQ0E7QUFBQSxJQUVQb2pCLFlBQVksMEJBQUFsaUIsT0FBQTtFQUMvQixTQUFBa2lCLGFBQVlILEtBQUssRUFBRXptQixLQUFLLEVBQUU7SUFBQSxJQUFBQyxLQUFBO0lBQUFDLGlGQUFBLE9BQUEwbUIsWUFBQTtJQUN4QixJQUFNQyxZQUFZLEdBQUcsSUFBSS9MLDhDQUFLLENBQUMsUUFBUSxDQUFDO0lBQ3hDN2EsS0FBQSxHQUFBRSxVQUFBLE9BQUF5bUIsWUFBQSxHQUFNLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRTVtQixLQUFLLEVBQUV5bUIsS0FBSyxJQUFJSSxZQUFZO0lBQzFENW1CLEtBQUEsQ0FBS3dtQixLQUFLLEdBQUdBLEtBQUssSUFBSUksWUFBWTtJQUFDLE9BQUE1bUIsS0FBQTtFQUNyQztFQUFDSSwyRUFBQSxDQUFBdW1CLFlBQUEsRUFBQWxpQixPQUFBO0VBQUEsT0FBQXBFLDhFQUFBLENBQUFzbUIsWUFBQTtJQUFBcm1CLEdBQUE7SUFBQUMsS0FBQSxFQUVELFNBQUF3RSxHQUFHQSxDQUFDK0YsU0FBUyxFQUFFO01BQ2IsSUFBR0EsU0FBUyxZQUFZK1AsOENBQUssRUFBRTtRQUM3QixJQUFJLENBQUN2UyxLQUFLLENBQUMsQ0FBQztRQUNaM0gsYUFBQSxDQUFBZ21CLFlBQUEsbUJBQVU3YixTQUFTO01BQ3JCO0lBQ0Y7RUFBQztJQUFBeEssR0FBQTtJQUFBZSxHQUFBLEVBRUQsU0FBQUEsSUFBQSxFQUFZO01BQ1YsT0FBTyxJQUFJLENBQUN3RyxNQUFNLElBQUksSUFBSSxDQUFDQSxNQUFNLENBQUM5RixLQUFLO0lBQ3pDO0VBQUM7SUFBQXpCLEdBQUE7SUFBQWUsR0FBQSxFQUVELFNBQUFBLElBQUEsRUFBbUI7TUFDakIsT0FBTyxJQUFJOUIsOENBQUssQ0FBQztRQUNmLGlCQUFpQixFQUFFRCxrREFBUyxDQUFDa0MsT0FBTyxDQUFDc1UseUJBQXlCO1FBQzlELHNCQUFzQixFQUFFeFcsa0RBQVMsQ0FBQ2tDLE9BQU8sQ0FBQ3VVLCtCQUErQjtRQUN6RSxxQkFBcUIsRUFBRXpXLGtEQUFTLENBQUNrQyxPQUFPLENBQUN3VSwrQkFBK0I7UUFDeEUsU0FBUyxFQUFFMVcsa0RBQVMsQ0FBQ2tDLE9BQU8sQ0FBQzZRO01BQy9CLENBQUMsQ0FBQztJQUNKO0VBQUM7QUFBQSxFQXpCdUM5TywrQ0FBTTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3ZCaEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ3dCO0FBQ0k7QUFDUTtBQUFBLElBQUFzakIsZUFBQSxvQkFBQS9nQixPQUFBO0FBQUEsSUFFZmdoQixjQUFjLDBCQUFBbkUsSUFBQTtFQUlqQyxTQUFBbUUsZUFBWUMsaUJBQWlCLEVBQUVobkIsS0FBSyxFQUFjO0lBQUEsSUFBQUMsS0FBQTtJQUFBQyxpRkFBQSxPQUFBNm1CLGNBQUE7SUFBQSxTQUFBbmpCLElBQUEsR0FBQUMsU0FBQSxDQUFBQyxNQUFBLEVBQVRtakIsT0FBTyxPQUFBampCLEtBQUEsQ0FBQUosSUFBQSxPQUFBQSxJQUFBLFdBQUFLLElBQUEsTUFBQUEsSUFBQSxHQUFBTCxJQUFBLEVBQUFLLElBQUE7TUFBUGdqQixPQUFPLENBQUFoakIsSUFBQSxRQUFBSixTQUFBLENBQUFJLElBQUE7SUFBQTtJQUM5Q2hFLEtBQUEsR0FBQUUsVUFBQSxPQUFBNG1CLGNBQUEsR0FBTSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRUMsaUJBQWlCLEVBQUVobkIsS0FBSyxFQUFBa0UsTUFBQSxDQUFLK2lCLE9BQU87SUFKOUQzZ0IsMEJBQUEsQ0FBQXJHLEtBQUEsRUFBQTZtQixlQUFnQjtJQUFDMW1CLGlGQUFBLENBQUFILEtBQUEsZ0JBQ0osS0FBSztJQUloQjZHLHFCQUFBLENBQUtnZ0IsZUFBZ0IsRUFBQTdtQixLQUFBLEVBQUcsQ0FBSixDQUFDO0lBQ3JCQSxLQUFBLENBQUtrakIsTUFBTSxHQUFHLElBQUk7SUFBQyxPQUFBbGpCLEtBQUE7RUFDckI7RUFBQ0ksMkVBQUEsQ0FBQTBtQixjQUFBLEVBQUFuRSxJQUFBO0VBQUEsT0FBQXRpQiw4RUFBQSxDQUFBeW1CLGNBQUE7SUFBQXhtQixHQUFBO0lBQUFDLEtBQUEsRUFFRCxTQUFBQyxJQUFJQSxDQUFDQyxPQUFPLEVBQUU7TUFDWkUsYUFBQSxDQUFBbW1CLGNBQUEsb0JBQVdybUIsT0FBTztJQUNwQjtFQUFDO0lBQUFILEdBQUE7SUFBQWUsR0FBQSxFQUVELFNBQUFBLElBQUEsRUFBUTtNQUNOLE9BQU8sSUFBSSxDQUFDNmhCLE1BQU0sSUFBSSxJQUFJLENBQUNBLE1BQU0sQ0FBQ3ZqQixDQUFDO0lBQ3JDO0VBQUM7SUFBQVcsR0FBQTtJQUFBZSxHQUFBLEVBRUQsU0FBQUEsSUFBQSxFQUFRO01BQ04sSUFBTTRsQixZQUFZLEdBQUksSUFBSSxDQUFDL0QsTUFBTSxJQUFJLElBQUksQ0FBQ0EsTUFBTSxDQUFDbGhCLE1BQU87TUFDeEQsSUFBTUEsTUFBTSxHQUFHLElBQUksQ0FBQ0EsTUFBTTtNQUMxQixJQUFNcEMsQ0FBQyxHQUFHLElBQUksQ0FBQ3NqQixNQUFNLElBQUksSUFBSSxDQUFDQSxNQUFNLENBQUN0akIsQ0FBQztNQUV0QyxJQUFHLElBQUksQ0FBQ2dCLE1BQU0sSUFBSSxJQUFJLENBQUNBLE1BQU0sQ0FBQ3NGLEtBQUssSUFBSXRHLENBQUMsR0FBR3FuQixZQUFZLEdBQUdqbEIsTUFBTSxJQUFJLElBQUksQ0FBQ3BCLE1BQU0sQ0FBQ3NGLEtBQUssQ0FBQ2xFLE1BQU0sRUFBRTtRQUM1RixPQUFPcEMsQ0FBQyxHQUFHb0MsTUFBTTtNQUNuQjtNQUVBLE9BQU9wQyxDQUFDLEdBQUdxbkIsWUFBWTtJQUN6QjtFQUFDO0lBQUEzbUIsR0FBQTtJQUFBZSxHQUFBLEVBRUQsU0FBQUEsSUFBQSxFQUFZO01BQ1YsT0FBTyxJQUFJLENBQUM2aEIsTUFBTSxJQUFJLElBQUksQ0FBQ0EsTUFBTSxDQUFDbmhCLEtBQUs7SUFDekM7RUFBQztJQUFBekIsR0FBQTtJQUFBZSxHQUFBLEVBRUQsU0FBQUEsSUFBQSxFQUFxQjtNQUNuQixPQUFPQyxJQUFJLENBQUMwTSxHQUFHLENBQUMsQ0FBQyxFQUFFMU0sSUFBSSxDQUFDeU0sR0FBRyxDQUFDLElBQUksQ0FBQ2pLLFVBQVUsQ0FBQ0QsTUFBTSxHQUFHLENBQUMsRUFBRStFLHFCQUFBLENBQUtpZSxlQUFnQixFQUFyQixJQUFvQixDQUFDLENBQUMsQ0FBQztJQUNqRixDQUFDO0lBQUF2aEIsR0FBQSxFQUVELFNBQUFBLElBQW1Cd1ksRUFBRSxFQUFFO01BQ3JCLElBQUdBLEVBQUUsSUFBSWxWLHFCQUFBLENBQUtpZSxlQUFnQixFQUFyQixJQUFvQixDQUFDLEVBQUU7UUFDOUJoZ0IscUJBQUEsQ0FBS2dnQixlQUFnQixFQUFyQixJQUFJLEVBQW9CL0ksRUFBSixDQUFDO1FBQ3JCLElBQUksQ0FBQzNXLE9BQU8sQ0FBQ3lDLGFBQWEsQ0FBQyxVQUFVLEVBQUUsSUFBSSxDQUFDO01BQzlDO0lBQ0Y7RUFBQztJQUFBdEosR0FBQTtJQUFBQyxLQUFBLEVBRUQsU0FBQXdFLEdBQUdBLENBQUMrRixTQUFTLEVBQUU7TUFBQSxJQUFBZixNQUFBO01BQ2JwSixhQUFBLENBQUFtbUIsY0FBQSxtQkFBVWhjLFNBQVM7TUFFbkJBLFNBQVMsQ0FBQ21GLGNBQWMsQ0FBQyxZQUFNO1FBQzdCcEoscUJBQUEsQ0FBS2dnQixlQUFnQixFQUFyQjljLE1BQUksRUFBb0JBLE1BQUksQ0FBQytPLGNBQWMsQ0FBQ2hPLFNBQVMsQ0FBakMsQ0FBQztRQUNyQmYsTUFBSSxDQUFDM0csUUFBUSxHQUFHLEtBQUs7UUFDckIyRyxNQUFJLENBQUNySixNQUFNLEdBQUcsSUFBSTtRQUNsQixJQUFHcUosTUFBSSxDQUFDbVosTUFBTSxFQUFFblosTUFBSSxDQUFDbVosTUFBTSxDQUFDOWYsUUFBUSxHQUFHLEtBQUs7TUFDOUMsQ0FBQyxDQUFDO0lBQ0o7RUFBQztJQUFBOUMsR0FBQTtJQUFBZSxHQUFBLEVBRUQsU0FBQUEsSUFBQSxFQUFtQjtNQUNqQixPQUFPLElBQUk5Qiw4Q0FBSyxDQUFDO1FBQ2YsU0FBUyxFQUFFLENBQUM7UUFDWix3QkFBd0IsRUFBRSxDQUFDO1FBQzNCLGlCQUFpQixFQUFFRCxtREFBUyxDQUFDa0MsT0FBTyxDQUFDc1UseUJBQXlCO1FBQzlELHNCQUFzQixFQUFFLElBQUk7UUFDNUIscUJBQXFCLEVBQUUsSUFBSTtRQUMzQixpQkFBaUIsRUFBRSxLQUFLO1FBQ3hCLGlCQUFpQixFQUFFO01BQ3JCLENBQUMsQ0FBQztJQUNKO0VBQUM7SUFBQXhWLEdBQUE7SUFBQWUsR0FBQSxFQUVELFNBQUFBLElBQUEsRUFBYTtNQUNYLE9BQU9WLGFBQUEsQ0FBQW1tQixjQUFBLHdCQUFpQixJQUFJLENBQUM1RCxNQUFNLElBQUksQ0FBQyxJQUFJLENBQUNBLE1BQU0sQ0FBQzlmLFFBQVMsSUFBSSxDQUFDLElBQUksQ0FBQzhmLE1BQU07SUFDL0UsQ0FBQztJQUFBNWQsR0FBQSxFQUVELFNBQUFBLElBQVc1RSxNQUFNLEVBQUU7TUFDakI2RSxhQUFBLENBQUF1aEIsY0FBQSxZQUFlcG1CLE1BQU07SUFDdkI7RUFBQztBQUFBLEVBMUV5Q21NLDRDQUFHOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3RCL0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ29DO0FBQUEsSUFBQXFhLE9BQUEsb0JBQUFwaEIsT0FBQTtBQUFBLElBRWZ2RyxLQUFLO0VBSXhCLFNBQUFBLE1BQVk0bkIsTUFBTSxFQUFFO0lBQUFsbkIsaUZBQUEsT0FBQVYsS0FBQTtJQUhwQjhHLDBCQUFBLE9BQUE2Z0IsT0FBTyxFQUFHLENBQUMsQ0FBQztJQUFDL21CLGlGQUFBO0lBSVgsSUFBSSxDQUFDcVMsTUFBTSxDQUFDMlUsTUFBTSxDQUFDO0VBQ3JCO0VBQUMsT0FBQTltQiw4RUFBQSxDQUFBZCxLQUFBO0lBQUFlLEdBQUE7SUFBQWUsR0FBQSxFQUVELFNBQUFBLElBQUEsRUFBZ0I7TUFDZCxPQUFPdUgscUJBQUEsQ0FBS3NlLE9BQU8sRUFBWixJQUFXLENBQUMsQ0FBQ3pHLFNBQVM7SUFDL0I7RUFBQztJQUFBbmdCLEdBQUE7SUFBQWUsR0FBQSxFQUVELFNBQUFBLElBQUEsRUFBcUI7TUFDbkIsT0FBT3VILHFCQUFBLENBQUtzZSxPQUFPLEVBQVosSUFBVyxDQUFDLENBQUN4RSxjQUFjO0lBQ3BDO0VBQUM7SUFBQXBpQixHQUFBO0lBQUFlLEdBQUEsRUFFRCxTQUFBQSxJQUFBLEVBQW9CO01BQ2xCLE9BQU91SCxxQkFBQSxDQUFLc2UsT0FBTyxFQUFaLElBQVcsQ0FBQyxDQUFDekUsYUFBYTtJQUNuQztFQUFDO0lBQUFuaUIsR0FBQTtJQUFBZSxHQUFBLEVBRUQsU0FBQUEsSUFBQSxFQUFpQjtNQUNmLE9BQU91SCxxQkFBQSxDQUFLc2UsT0FBTyxFQUFaLElBQVcsQ0FBQyxDQUFDdkcsVUFBVSxJQUFJLElBQUksR0FBRy9YLHFCQUFBLENBQUtzZSxPQUFPLEVBQVosSUFBVyxDQUFDLENBQUN2RyxVQUFVLEdBQUdyaEIsa0RBQVMsQ0FBQ2tDLE9BQU8sQ0FBQ21TLFdBQVc7SUFDbEc7RUFBQztJQUFBclQsR0FBQTtJQUFBZSxHQUFBLEVBRUQsU0FBQUEsSUFBQSxFQUFlO01BQ2IsT0FBT3VILHFCQUFBLENBQUtzZSxPQUFPLEVBQVosSUFBVyxDQUFDLENBQUN4RyxRQUFRLElBQUksSUFBSSxHQUFHOVgscUJBQUEsQ0FBS3NlLE9BQU8sRUFBWixJQUFXLENBQUMsQ0FBQ3hHLFFBQVEsR0FBR3BoQixrREFBUyxDQUFDa0MsT0FBTyxDQUFDb1MsU0FBUztJQUM1RjtFQUFDO0lBQUF0VCxHQUFBO0lBQUFlLEdBQUEsRUFFRCxTQUFBQSxJQUFBLEVBQVc7TUFDVCxPQUFPdUgscUJBQUEsQ0FBS3NlLE9BQU8sRUFBWixJQUFXLENBQUMsQ0FBQzlFLElBQUk7SUFDMUI7RUFBQztJQUFBOWhCLEdBQUE7SUFBQWUsR0FBQSxFQUVELFNBQUFBLElBQUEsRUFBZ0I7TUFDZCxPQUFPdUgscUJBQUEsQ0FBS3NlLE9BQU8sRUFBWixJQUFXLENBQUMsQ0FBQzdFLFNBQVM7SUFDL0I7RUFBQztJQUFBL2hCLEdBQUE7SUFBQWUsR0FBQSxFQUVELFNBQUFBLElBQUEsRUFBVztNQUNULE9BQU91SCxxQkFBQSxDQUFLc2UsT0FBTyxFQUFaLElBQVcsQ0FBQyxDQUFDL0UsSUFBSTtJQUMxQjtFQUFDO0lBQUE3aEIsR0FBQTtJQUFBZSxHQUFBLEVBRUQsU0FBQUEsSUFBQSxFQUFzQjtNQUNwQixPQUFPdUgscUJBQUEsQ0FBS3NlLE9BQU8sRUFBWixJQUFXLENBQUMsQ0FBQzdrQixlQUFlO0lBQ3JDO0VBQUM7SUFBQS9CLEdBQUE7SUFBQWUsR0FBQSxFQUVELFNBQUFBLElBQUEsRUFBc0I7TUFDcEIsT0FBT3VILHFCQUFBLENBQUtzZSxPQUFPLEVBQVosSUFBVyxDQUFDLENBQUNuQyxlQUFlO0lBQ3JDO0VBQUM7SUFBQXprQixHQUFBO0lBQUFlLEdBQUEsRUFFRCxTQUFBQSxJQUFBLEVBQTJCO01BQ3pCLE9BQU91SCxxQkFBQSxDQUFLc2UsT0FBTyxFQUFaLElBQVcsQ0FBQyxDQUFDdGtCLG9CQUFvQjtJQUMxQztFQUFDO0lBQUF0QyxHQUFBO0lBQUFlLEdBQUEsRUFFRCxTQUFBQSxJQUFBLEVBQTBCO01BQ3hCLE9BQU91SCxxQkFBQSxDQUFLc2UsT0FBTyxFQUFaLElBQVcsQ0FBQyxDQUFDdmtCLG1CQUFtQjtJQUN6QztFQUFDO0lBQUFyQyxHQUFBO0lBQUFlLEdBQUEsRUFFRCxTQUFBQSxJQUFBLEVBQWtCO01BQ2hCLE9BQU91SCxxQkFBQSxDQUFLc2UsT0FBTyxFQUFaLElBQVcsQ0FBQyxDQUFDcmtCLFdBQVc7SUFDakM7RUFBQztJQUFBdkMsR0FBQTtJQUFBZSxHQUFBLEVBRUQsU0FBQUEsSUFBQSxFQUF1QjtNQUNyQixPQUFPdUgscUJBQUEsQ0FBS3NlLE9BQU8sRUFBWixJQUFXLENBQUMsQ0FBQ2hrQixnQkFBZ0I7SUFDdEM7RUFBQztJQUFBNUMsR0FBQTtJQUFBZSxHQUFBLEVBRUQsU0FBQUEsSUFBQSxFQUFzQjtNQUNwQixPQUFPdUgscUJBQUEsQ0FBS3NlLE9BQU8sRUFBWixJQUFXLENBQUMsQ0FBQ2prQixlQUFlO0lBQ3JDO0VBQUM7SUFBQTNDLEdBQUE7SUFBQWUsR0FBQSxFQUVELFNBQUFBLElBQUEsRUFBMEI7TUFDeEIsT0FBT3VILHFCQUFBLENBQUtzZSxPQUFPLEVBQVosSUFBVyxDQUFDLENBQUM3akIsbUJBQW1CLElBQUksSUFBSSxHQUFHdUYscUJBQUEsQ0FBS3NlLE9BQU8sRUFBWixJQUFXLENBQUMsQ0FBQzdqQixtQkFBbUIsR0FBRy9ELGtEQUFTLENBQUNrQyxPQUFPLENBQUMrVCw2QkFBNkI7SUFDdEk7RUFBQztJQUFBalYsR0FBQTtJQUFBZSxHQUFBLEVBRUQsU0FBQUEsSUFBQSxFQUFpQjtNQUNmLE9BQU91SCxxQkFBQSxDQUFLc2UsT0FBTyxFQUFaLElBQVcsQ0FBQyxDQUFDcGtCLFVBQVUsSUFBSSxJQUFJLEdBQUc4RixxQkFBQSxDQUFLc2UsT0FBTyxFQUFaLElBQVcsQ0FBQyxDQUFDcGtCLFVBQVUsR0FBR3hELGtEQUFTLENBQUNrQyxPQUFPLENBQUM4VCxtQkFBbUI7SUFDMUc7RUFBQztJQUFBaFYsR0FBQTtJQUFBZSxHQUFBLEVBRUQsU0FBQUEsSUFBQSxFQUFrQjtNQUNoQixPQUFPdUgscUJBQUEsQ0FBS3NlLE9BQU8sRUFBWixJQUFXLENBQUMsQ0FBQ2pHLFdBQVc7SUFDakM7RUFBQztJQUFBM2dCLEdBQUE7SUFBQWUsR0FBQSxFQUVELFNBQUFBLElBQUEsRUFBaUI7TUFDZixPQUFPdUgscUJBQUEsQ0FBS3NlLE9BQU8sRUFBWixJQUFXLENBQUMsQ0FBQ3ZpQixVQUFVO0lBQ2hDO0VBQUM7SUFBQXJFLEdBQUE7SUFBQWUsR0FBQSxFQUVELFNBQUFBLElBQUEsRUFBeUI7TUFDdkIsT0FBT3VILHFCQUFBLENBQUtzZSxPQUFPLEVBQVosSUFBVyxDQUFDLENBQUN0aUIsa0JBQWtCO0lBQ3hDO0VBQUM7SUFBQXRFLEdBQUE7SUFBQWUsR0FBQSxFQUVELFNBQUFBLElBQUEsRUFBdUI7TUFDckIsT0FBT3VILHFCQUFBLENBQUtzZSxPQUFPLEVBQVosSUFBVyxDQUFDLENBQUNuRCxnQkFBZ0I7SUFDdEM7RUFBQztJQUFBempCLEdBQUE7SUFBQWUsR0FBQSxFQUVELFNBQUFBLElBQUEsRUFBc0I7TUFDcEIsT0FBT3VILHFCQUFBLENBQUtzZSxPQUFPLEVBQVosSUFBVyxDQUFDLENBQUNyUCxlQUFlO0lBQ3JDO0VBQUM7SUFBQXZYLEdBQUE7SUFBQWUsR0FBQSxFQUVELFNBQUFBLElBQUEsRUFBc0I7TUFDcEIsT0FBT3VILHFCQUFBLENBQUtzZSxPQUFPLEVBQVosSUFBVyxDQUFDLENBQUNwUCxlQUFlO0lBQ3JDO0VBQUM7SUFBQXhYLEdBQUE7SUFBQWUsR0FBQSxFQUVELFNBQUFBLElBQUEsRUFBYztNQUNaLE9BQU91SCxxQkFBQSxDQUFLc2UsT0FBTyxFQUFaLElBQVcsQ0FBQyxDQUFDL2lCLE9BQU8sSUFBSSxJQUFJLEdBQUd5RSxxQkFBQSxDQUFLc2UsT0FBTyxFQUFaLElBQVcsQ0FBQyxDQUFDL2lCLE9BQU8sR0FBRzdFLGtEQUFTLENBQUNrQyxPQUFPLENBQUM2USxlQUFlO0lBQ2hHO0VBQUM7SUFBQS9SLEdBQUE7SUFBQWUsR0FBQSxFQUVELFNBQUFBLElBQUEsRUFBNkI7TUFDM0IsT0FBT3VILHFCQUFBLENBQUtzZSxPQUFPLEVBQVosSUFBVyxDQUFDLENBQUN0WixzQkFBc0IsSUFBSSxJQUFJLEdBQUdoRixxQkFBQSxDQUFLc2UsT0FBTyxFQUFaLElBQVcsQ0FBQyxDQUFDdFosc0JBQXNCLEdBQUd0TyxrREFBUyxDQUFDa0MsT0FBTyxDQUFDOFEsZUFBZTtJQUM5SDtFQUFDO0lBQUFoUyxHQUFBO0lBQUFlLEdBQUEsRUFFRCxTQUFBQSxJQUFBLEVBQWE7TUFDWCxPQUFPdUgscUJBQUEsQ0FBS3NlLE9BQU8sRUFBWixJQUFXLENBQUMsQ0FBQ3htQixNQUFNO0lBQzVCO0VBQUM7SUFBQUosR0FBQTtJQUFBZSxHQUFBLEVBRUQsU0FBQUEsSUFBQSxFQUFxQjtNQUNuQixPQUFPdUgscUJBQUEsQ0FBS3NlLE9BQU8sRUFBWixJQUFXLENBQUMsQ0FBQ3BFLGNBQWM7SUFDcEM7RUFBQztJQUFBeGlCLEdBQUE7SUFBQWUsR0FBQSxFQUVELFNBQUFBLElBQUEsRUFBZ0I7TUFDZCxPQUFPdUgscUJBQUEsQ0FBS3NlLE9BQU8sRUFBWixJQUFXLENBQUMsQ0FBQ2xtQixTQUFTO0lBQy9CO0VBQUM7SUFBQVYsR0FBQTtJQUFBZSxHQUFBLEVBRUQsU0FBQUEsSUFBQSxFQUF3QjtNQUN0QixPQUFPdUgscUJBQUEsQ0FBS3NlLE9BQU8sRUFBWixJQUFXLENBQUMsQ0FBQy9DLGlCQUFpQixJQUFJLElBQUksR0FBR3ZiLHFCQUFBLENBQUtzZSxPQUFPLEVBQVosSUFBVyxDQUFDLENBQUMvQyxpQkFBaUIsR0FBRzdrQixrREFBUyxDQUFDa0MsT0FBTyxDQUFDZ1UsMEJBQTBCO0lBQy9IO0VBQUM7SUFBQWxWLEdBQUE7SUFBQWUsR0FBQSxFQUVELFNBQUFBLElBQUEsRUFBaUI7TUFDZixPQUFPdUgscUJBQUEsQ0FBS3NlLE9BQU8sRUFBWixJQUFXLENBQUMsQ0FBQ25VLFVBQVU7SUFDaEM7RUFBQztJQUFBelMsR0FBQTtJQUFBZSxHQUFBLEVBRUQsU0FBQUEsSUFBQSxFQUFhO01BQ1gsT0FBT3VILHFCQUFBLENBQUtzZSxPQUFPLEVBQVosSUFBVyxDQUFDLENBQUNqVSxNQUFNLElBQUksSUFBSSxHQUFHcksscUJBQUEsQ0FBS3NlLE9BQU8sRUFBWixJQUFXLENBQUMsQ0FBQ2pVLE1BQU0sR0FBRyxDQUFDO0lBQzlEO0VBQUM7SUFBQTNTLEdBQUE7SUFBQWUsR0FBQSxFQUVELFNBQUFBLElBQUEsRUFBYztNQUNaLE9BQU91SCxxQkFBQSxDQUFLc2UsT0FBTyxFQUFaLElBQVcsQ0FBQyxDQUFDL2xCLE9BQU87SUFDN0I7RUFBQztJQUFBYixHQUFBO0lBQUFlLEdBQUEsRUFFRCxTQUFBQSxJQUFBLEVBQVc7TUFDVCxPQUFPdUgscUJBQUEsQ0FBS3NlLE9BQU8sRUFBWixJQUFXLENBQUMsQ0FBQy9hLElBQUk7SUFDMUI7RUFBQztJQUFBN0wsR0FBQTtJQUFBZSxHQUFBLEVBRUQsU0FBQUEsSUFBQSxFQUFnQjtNQUNkLE9BQU91SCxxQkFBQSxDQUFLc2UsT0FBTyxFQUFaLElBQVcsQ0FBQyxDQUFDOWEsU0FBUztJQUMvQjtFQUFDO0lBQUE5TCxHQUFBO0lBQUFlLEdBQUEsRUFFRCxTQUFBQSxJQUFBLEVBQVk7TUFDVixPQUFPdUgscUJBQUEsQ0FBS3NlLE9BQU8sRUFBWixJQUFXLENBQUMsQ0FBQ2htQixLQUFLO0lBQzNCO0VBQUM7SUFBQVosR0FBQTtJQUFBZSxHQUFBLEVBRUQsU0FBQUEsSUFBQSxFQUFjO01BQ1osT0FBT3VILHFCQUFBLENBQUtzZSxPQUFPLEVBQVosSUFBVyxDQUFDLENBQUN2WSxPQUFPLElBQUksS0FBSztJQUN0QztFQUFDO0lBQUFyTyxHQUFBO0lBQUFDLEtBQUEsRUFFRCxTQUFBK0UsR0FBR0EsQ0FBQ3ZGLEtBQUssRUFBRVEsS0FBSyxFQUFFO01BQ2hCLElBQUdxSSxxQkFBQSxDQUFLc2UsT0FBTyxFQUFaLElBQVcsQ0FBQyxDQUFDbm5CLEtBQUssQ0FBQyxJQUFJUSxLQUFLLEVBQUU7UUFDL0JxSSxxQkFBQSxDQUFLc2UsT0FBTyxFQUFaLElBQVcsQ0FBQyxDQUFDbm5CLEtBQUssQ0FBQyxHQUFHUSxLQUFLO1FBQzNCLElBQUcsSUFBSSxDQUFDdUssU0FBUyxJQUFJLElBQUksQ0FBQ0EsU0FBUyxDQUFDM0QsT0FBTyxFQUFFLElBQUksQ0FBQzJELFNBQVMsQ0FBQzNELE9BQU8sQ0FBQ3lDLGFBQWEsQ0FBQyxVQUFVLEVBQUUsSUFBSSxDQUFDO01BQ3JHO0lBQ0Y7RUFBQztJQUFBdEosR0FBQTtJQUFBQyxLQUFBLEVBRUQsU0FBQWlTLE1BQU1BLENBQUMyVSxNQUFNLEVBQUU7TUFDYixJQUFHQSxNQUFNLEVBQUU7UUFDVCxLQUFJLElBQU1wbkIsS0FBSyxJQUFJb25CLE1BQU0sRUFBRTtVQUN6QixJQUFHM0osTUFBTSxDQUFDQyxTQUFTLENBQUNDLGNBQWMsQ0FBQ0MsSUFBSSxDQUFDd0osTUFBTSxFQUFFcG5CLEtBQUssQ0FBQyxFQUFFO1lBQ3RELElBQUksQ0FBQ3VGLEdBQUcsQ0FBQ3ZGLEtBQUssRUFBRW9uQixNQUFNLENBQUNwbkIsS0FBSyxDQUFDLENBQUM7VUFDaEM7UUFDRjtNQUNGO0lBQ0Y7RUFBQztJQUFBTyxHQUFBO0lBQUFDLEtBQUEsRUFFRCxTQUFBOGpCLElBQUlBLENBQUEsRUFBRztNQUNMLE9BQU8sSUFBSTlrQixLQUFLLENBQUNxSixxQkFBQSxDQUFLc2UsT0FBTyxFQUFaLElBQVcsQ0FBQyxDQUFDO0lBQ2hDO0VBQUM7SUFBQTVtQixHQUFBO0lBQUFDLEtBQUEsRUFFRCxTQUFBa1MsU0FBU0EsQ0FBQSxFQUFHO01BQ1YsSUFBTTBVLE1BQU0sR0FBRyxDQUFDLENBQUM7TUFFakIsS0FBSSxJQUFNcG5CLEtBQUssSUFBSTZJLHFCQUFBLENBQUtzZSxPQUFPLEVBQVosSUFBVyxDQUFDLEVBQUU7UUFDL0IsSUFBRzFKLE1BQU0sQ0FBQ0MsU0FBUyxDQUFDQyxjQUFjLENBQUNDLElBQUksQ0FBQy9VLHFCQUFBLENBQUtzZSxPQUFPLEVBQVosSUFBVyxDQUFDLEVBQUVubkIsS0FBSyxDQUFDLEVBQUU7VUFDNURvbkIsTUFBTSxDQUFDcG5CLEtBQUssQ0FBQyxHQUFHNkkscUJBQUEsQ0FBS3NlLE9BQU8sRUFBWixJQUFXLENBQUMsQ0FBQ25uQixLQUFLLENBQUM7UUFDckM7TUFDRjtNQUVBLE9BQU9vbkIsTUFBTTtJQUNmO0VBQUM7QUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUMzTUg7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ3dCO0FBQ1k7QUFDUjtBQUFBLElBRVBDLE9BQU8sMEJBQUF6RSxJQUFBO0VBRzFCLFNBQUF5RSxRQUFZcm5CLEtBQUssRUFBaUI7SUFBQSxJQUFBQyxLQUFBO0lBQUFDLGlGQUFBLE9BQUFtbkIsT0FBQTtJQUFBLFNBQUF6akIsSUFBQSxHQUFBQyxTQUFBLENBQUFDLE1BQUEsRUFBWkMsVUFBVSxPQUFBQyxLQUFBLENBQUFKLElBQUEsT0FBQUEsSUFBQSxXQUFBSyxJQUFBLE1BQUFBLElBQUEsR0FBQUwsSUFBQSxFQUFBSyxJQUFBO01BQVZGLFVBQVUsQ0FBQUUsSUFBQSxRQUFBSixTQUFBLENBQUFJLElBQUE7SUFBQTtJQUM5QmhFLEtBQUEsR0FBQUUsVUFBQSxPQUFBa25CLE9BQUEsR0FBTSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUVybkIsS0FBSyxFQUFBa0UsTUFBQSxDQUFLSCxVQUFVO0lBQUUzRCxpRkFBQSxDQUFBSCxLQUFBLGdCQUh6QyxLQUFLO0lBSWhCQSxLQUFBLENBQUs4TCxRQUFRLEdBQUcsSUFBSTtJQUFDLE9BQUE5TCxLQUFBO0VBQ3ZCO0VBQUNJLDJFQUFBLENBQUFnbkIsT0FBQSxFQUFBekUsSUFBQTtFQUFBLE9BQUF0aUIsOEVBQUEsQ0FBQSttQixPQUFBO0lBQUE5bUIsR0FBQTtJQUFBQyxLQUFBLEVBRUQsU0FBQUMsSUFBSUEsQ0FBQ0MsT0FBTyxFQUFFO01BQ1osSUFBRyxJQUFJLENBQUNDLE1BQU0sRUFBRTtNQUNoQixJQUFNRSxNQUFNLEdBQUdILE9BQU8sQ0FBQ0csTUFBTTtNQUM3QixJQUFNQyxHQUFHLEdBQUdELE1BQU0sQ0FBQ0UsVUFBVSxDQUFDLElBQUksQ0FBQztNQUNuQ0QsR0FBRyxDQUFDb0IsSUFBSSxDQUFDLENBQUM7TUFFVixJQUFHLElBQUksQ0FBQ3RDLENBQUMsR0FBRyxJQUFJLENBQUNvQyxLQUFLLEdBQUcsSUFBSSxDQUFDaEMsS0FBSyxDQUFDb0UsT0FBTyxHQUFHLElBQUksQ0FBQzBELE1BQU0sQ0FBQzlGLEtBQUssRUFBRTtRQUMvRCxJQUFJLENBQUNwQyxDQUFDLElBQUssSUFBSSxDQUFDb0MsS0FBSyxHQUFHLElBQUksQ0FBQ2hDLEtBQUssQ0FBQ29FLE9BQVE7TUFDN0M7TUFFQSxJQUFHLElBQUksQ0FBQ3ZFLENBQUMsR0FBRyxJQUFJLENBQUNvQyxNQUFNLEdBQUcsSUFBSSxDQUFDakMsS0FBSyxDQUFDb0UsT0FBTyxHQUFHLElBQUksQ0FBQzBELE1BQU0sQ0FBQzdGLE1BQU0sRUFBRTtRQUNqRSxJQUFJLENBQUNwQyxDQUFDLElBQUssSUFBSSxDQUFDb0MsTUFBTSxHQUFHLElBQUksQ0FBQ2pDLEtBQUssQ0FBQ29FLE9BQVE7TUFDOUM7TUFFQXhELGFBQUEsQ0FBQXltQixPQUFBLG9CQUFXdm1CLEdBQUc7TUFFZEEsR0FBRyxDQUFDdUIsT0FBTyxDQUFDLENBQUM7SUFDZjtFQUFDO0lBQUE5QixHQUFBO0lBQUFlLEdBQUEsRUFFRCxTQUFBQSxJQUFBLEVBQVk7TUFDVixPQUFPVixhQUFBLENBQUF5bUIsT0FBQSxzQkFBYyxJQUFJLENBQUNybkIsS0FBSyxDQUFDb0UsT0FBTztJQUN6QyxDQUFDO0lBQUFtQixHQUFBLEVBTUQsU0FBQUEsSUFBVXZELEtBQUssRUFBRTtNQUNmd0QsYUFBQSxDQUFBNmhCLE9BQUEsV0FBY3JsQixLQUFLO0lBQ3JCO0VBQUM7SUFBQXpCLEdBQUE7SUFBQWUsR0FBQSxFQU5ELFNBQUFBLElBQUEsRUFBYTtNQUNYLE9BQU9WLGFBQUEsQ0FBQXltQixPQUFBLHVCQUFlLElBQUksQ0FBQ3JuQixLQUFLLENBQUNvRSxPQUFPO0lBQzFDLENBQUM7SUFBQW1CLEdBQUEsRUFNRCxTQUFBQSxJQUFXdEQsTUFBTSxFQUFFO01BQ2pCdUQsYUFBQSxDQUFBNmhCLE9BQUEsWUFBZXBsQixNQUFNO0lBQ3ZCO0VBQUM7SUFBQTFCLEdBQUE7SUFBQWUsR0FBQSxFQUVELFNBQUFBLElBQUEsRUFBbUI7TUFDakIsT0FBTyxJQUFJOUIsK0NBQUssQ0FBQztRQUNmLGlCQUFpQixFQUFFRCxrREFBUyxDQUFDa0MsT0FBTyxDQUFDc1Q7TUFDdkMsQ0FBQyxDQUFDO0lBQ0o7RUFBQztJQUFBeFUsR0FBQTtJQUFBQyxLQUFBLEVBRUQsU0FBQTRTLGtCQUFrQkEsQ0FBQ04sY0FBYyxFQUFFO01BQ2pDLE9BQU9BLGNBQWMsQ0FBQ1EsZ0JBQWdCLENBQUMsSUFBSSxDQUFDO0lBQzlDOztJQUVBO0VBQUE7SUFBQS9TLEdBQUE7SUFBQUMsS0FBQSxFQUNBLFNBQUE2UyxhQUFhQSxDQUFDUCxjQUFjLEVBQUU7TUFDNUIsT0FBTyxDQUFDO0lBQ1Y7O0lBRUE7RUFBQTtJQUFBdlMsR0FBQTtJQUFBQyxLQUFBLEVBQ0EsU0FBQThTLGdCQUFnQkEsQ0FBQ1IsY0FBYyxFQUFFO01BQy9CLE9BQU8sQ0FBQztJQUNWOztJQUVBO0VBQUE7SUFBQXZTLEdBQUE7SUFBQUMsS0FBQSxFQUNBLFNBQUErUyxxQkFBcUJBLENBQUNULGNBQWMsRUFBRTtNQUNwQyxPQUFPLENBQUM7SUFDVjtFQUFDO0lBQUF2UyxHQUFBO0lBQUFlLEdBQUEsRUFFRCxTQUFBQSxJQUFBLEVBQWE7TUFDWCxPQUFPVixhQUFBLENBQUF5bUIsT0FBQSx3QkFBZ0IsSUFBSSxDQUFDdGIsUUFBUTtJQUN0QyxDQUFDO0lBQUF4RyxHQUFBLEVBRUQsU0FBQUEsSUFBVzVFLE1BQU0sRUFBRTtNQUNqQjZFLGFBQUEsQ0FBQTZoQixPQUFBLFlBQWUxbUIsTUFBTTtNQUNyQixJQUFJLENBQUNvTCxRQUFRLEdBQUdwTCxNQUFNO0lBQ3hCO0VBQUM7QUFBQSxFQTNFa0NtTSw0Q0FBRzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDdEJ4QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDb0M7QUFDQTtBQUNSO0FBQ0E7QUFBQSxJQUVQc1osUUFBUSwwQkFBQXptQixVQUFBO0VBRzNCLFNBQUF5bUIsU0FBWXhtQixDQUFDLEVBQUVDLENBQUMsRUFBRW1DLEtBQUssRUFBRUMsTUFBTSxFQUFFakMsS0FBSyxFQUFFO0lBQUEsSUFBQUMsS0FBQTtJQUFBQyxpRkFBQSxPQUFBa21CLFFBQUE7SUFDdENubUIsS0FBQSxHQUFBRSxVQUFBLE9BQUFpbUIsUUFBQSxHQUFNeG1CLENBQUMsRUFBRUMsQ0FBQyxFQUFFbUMsS0FBSyxFQUFFQyxNQUFNLEVBQUVqQyxLQUFLO0lBQUVJLGlGQUFBLENBQUFILEtBQUEsZ0JBSHZCLEtBQUs7SUFBQSxPQUFBQSxLQUFBO0VBSWxCO0VBQUNJLDJFQUFBLENBQUErbEIsUUFBQSxFQUFBem1CLFVBQUE7RUFBQSxPQUFBVyw4RUFBQSxDQUFBOGxCLFFBQUE7SUFBQTdsQixHQUFBO0lBQUFDLEtBQUEsRUFFRCxTQUFBQyxJQUFJQSxDQUFDQyxPQUFPLEVBQUU7TUFDWixJQUFHLElBQUksQ0FBQ0MsTUFBTSxFQUFFO01BQ2hCQyxhQUFBLENBQUF3bEIsUUFBQSxvQkFBVzFsQixPQUFPO01BRWxCLElBQU1HLE1BQU0sR0FBR0gsT0FBTyxDQUFDRyxNQUFNO01BQzdCLElBQU1DLEdBQUcsR0FBR0QsTUFBTSxDQUFDRSxVQUFVLENBQUMsSUFBSSxDQUFDO01BRW5DdEIsK0NBQUssQ0FBQzZuQixZQUFZLENBQUN4bUIsR0FBRyxFQUFFLElBQUksQ0FBQ2xCLENBQUMsRUFBRSxJQUFJLENBQUNDLENBQUMsRUFBRSxJQUFJLENBQUNtQyxLQUFLLEVBQUUsSUFBSSxDQUFDQyxNQUFNLEVBQUUsSUFBSSxDQUFDakMsS0FBSyxDQUFDaUIsU0FBUyxFQUFFLElBQUksQ0FBQ2pCLEtBQUssQ0FBQ21CLEtBQUssRUFBRSxJQUFJLENBQUNuQixLQUFLLENBQUNvQixPQUFPLEVBQUUsSUFBSSxDQUFDcEIsS0FBSyxDQUFDb00sSUFBSSxFQUFFLElBQUksQ0FBQ3BNLEtBQUssQ0FBQ3FNLFNBQVMsQ0FBQztNQUVuSyxJQUFJLENBQUNoTCxJQUFJLEdBQUcsSUFBSTtJQUNsQjtFQUFDO0lBQUFkLEdBQUE7SUFBQWUsR0FBQSxFQUVELFNBQUFBLElBQUEsRUFBWTtNQUNWLE9BQU9WLGFBQUEsQ0FBQXdsQixRQUFBLHNCQUFjLElBQUksQ0FBQ3BtQixLQUFLLENBQUNpQixTQUFTO0lBQzNDLENBQUM7SUFBQXNFLEdBQUEsRUFNRCxTQUFBQSxJQUFVdkQsS0FBSyxFQUFFO01BQ2Z3RCxhQUFBLENBQUE0Z0IsUUFBQSxXQUFjcGtCLEtBQUs7SUFDckI7RUFBQztJQUFBekIsR0FBQTtJQUFBZSxHQUFBLEVBTkQsU0FBQUEsSUFBQSxFQUFhO01BQ1gsT0FBT1YsYUFBQSxDQUFBd2xCLFFBQUEsdUJBQWUsSUFBSSxDQUFDcG1CLEtBQUssQ0FBQ2lCLFNBQVM7SUFDNUMsQ0FBQztJQUFBc0UsR0FBQSxFQU1ELFNBQUFBLElBQVd0RCxNQUFNLEVBQUU7TUFDakJ1RCxhQUFBLENBQUE0Z0IsUUFBQSxZQUFlbmtCLE1BQU07SUFDdkI7RUFBQztJQUFBMUIsR0FBQTtJQUFBZSxHQUFBLEVBRUQsU0FBQUEsSUFBQSxFQUFtQjtNQUNqQixPQUFPLElBQUk5QiwrQ0FBSyxDQUFDO1FBQ2YsV0FBVyxFQUFFRCxrREFBUyxDQUFDa0MsT0FBTyxDQUFDb1UsMEJBQTBCO1FBQ3pELE9BQU8sRUFBRXRXLGtEQUFTLENBQUNrQyxPQUFPLENBQUNrVSxzQkFBc0I7UUFDakQsTUFBTSxFQUFFcFcsa0RBQVMsQ0FBQ2tDLE9BQU8sQ0FBQ3FVLHFCQUFxQjtRQUMvQyxTQUFTLEVBQUV2VyxrREFBUyxDQUFDa0MsT0FBTyxDQUFDaVUseUJBQXlCO1FBQ3RELFdBQVcsRUFBRW5XLGtEQUFTLENBQUNrQyxPQUFPLENBQUNtVTtNQUNqQyxDQUFDLENBQUM7SUFDSjtFQUFDO0FBQUEsRUEzQ21DdFcsa0RBQVM7Ozs7Ozs7Ozs7Ozs7Ozs7QUN2Qi9DO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNvQztBQUVwQyxpRUFBZTtFQUNiaW9CLGVBQWUsRUFBRSxDQUFDLENBQUM7RUFDbkIxRSxPQUFPLEVBQUUsQ0FBQyxDQUFDO0VBQ1gyRSxhQUFhLEVBQUUsU0FBZkEsYUFBYUEsQ0FBV0MsSUFBSSxFQUFFbEMsSUFBSSxFQUFFcGtCLEtBQUssRUFBRXlmLFVBQVUsRUFBRTtJQUNyRDZHLElBQUksQ0FBQ3piLElBQUksQ0FBQyxHQUFHLENBQUM7SUFBRXliLElBQUksQ0FBQ3piLElBQUksQ0FBQyxHQUFHLENBQUM7SUFBRXliLElBQUksQ0FBQ3piLElBQUksQ0FBQyxHQUFHLENBQUM7SUFFOUMsS0FBSSxJQUFJbU0sQ0FBQyxHQUFHLENBQUMsRUFBRUEsQ0FBQyxHQUFHc1AsSUFBSSxDQUFDM2pCLE1BQU0sRUFBRXFVLENBQUMsRUFBRSxFQUFFO01BQ25DLElBQU03SyxTQUFTLEdBQUcvRyxRQUFRLENBQUNDLGFBQWEsQ0FBQyxRQUFRLENBQUM7TUFDbEQsSUFBTWtoQixNQUFNLEdBQUdwYSxTQUFTLENBQUN2TSxVQUFVLENBQUMsSUFBSSxDQUFDO01BQ3pDMm1CLE1BQU0sQ0FBQ0MsSUFBSSxHQUFHcEMsSUFBSSxHQUFHLEtBQUssR0FBRzNFLFVBQVU7TUFDdkMsSUFBTTVlLEtBQUssR0FBRzBsQixNQUFNLENBQUNFLFdBQVcsQ0FBQ0gsSUFBSSxDQUFDdFAsQ0FBQyxDQUFDLENBQUMsQ0FBQ25XLEtBQUs7TUFFL0NzTCxTQUFTLENBQUN0TCxLQUFLLEdBQUdBLEtBQUs7TUFDdkJzTCxTQUFTLENBQUNyTCxNQUFNLEdBQUdzakIsSUFBSSxHQUFJQSxJQUFJLEdBQUcsQ0FBRTtNQUVwQ21DLE1BQU0sQ0FBQ0MsSUFBSSxHQUFHcEMsSUFBSSxHQUFHLEtBQUssR0FBRzNFLFVBQVU7TUFDdkM4RyxNQUFNLENBQUNubEIsU0FBUyxHQUFHcEIsS0FBSztNQUN4QnVtQixNQUFNLENBQUNHLFlBQVksR0FBRyxLQUFLO01BQzNCSCxNQUFNLENBQUNJLFFBQVEsQ0FBQ0wsSUFBSSxDQUFDdFAsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQztNQUU5QixJQUFJLENBQUNvUCxlQUFlLENBQUNFLElBQUksQ0FBQ3RQLENBQUMsQ0FBQyxDQUFDLEdBQUc3SyxTQUFTO0lBQzNDO0VBQ0YsQ0FBQztFQUNEaVAsU0FBUyxFQUFFLFNBQVhBLFNBQVNBLENBQVd6YixHQUFHLEVBQUVpRSxLQUFLLEVBQUVuRixDQUFDLEVBQUVDLENBQUMsRUFBRW1DLEtBQUssRUFBRUMsTUFBTSxFQUFFOGxCLEVBQUUsRUFBRUMsRUFBRSxFQUFFQyxNQUFNLEVBQUVDLE9BQU8sRUFBRUMsVUFBVSxFQUFFQyxPQUFPLEVBQUU7SUFDakcsSUFBSSxDQUFDQyxnQkFBZ0IsQ0FBQ3ZuQixHQUFHLEVBQUVpRSxLQUFLLEVBQUVuRixDQUFDLEVBQUVDLENBQUMsRUFBRW1DLEtBQUssRUFBRUMsTUFBTSxFQUFFOGxCLEVBQUUsRUFBRUMsRUFBRSxFQUFFQyxNQUFNLEVBQUVDLE9BQU8sRUFBRUMsVUFBVSxFQUFFQyxPQUFPLENBQUM7RUFDdEcsQ0FBQztFQUNEM2EsYUFBYSxFQUFFLFNBQWZBLGFBQWFBLENBQVczTSxHQUFHLEVBQUV3bkIsU0FBUyxFQUFFMW9CLENBQUMsRUFBRUMsQ0FBQyxFQUFFbUMsS0FBSyxFQUFFQyxNQUFNLEVBQUU4bEIsRUFBRSxFQUFFQyxFQUFFLEVBQUVDLE1BQU0sRUFBRUMsT0FBTyxFQUFFQyxVQUFVLEVBQUVDLE9BQU8sRUFBRTtJQUN6RyxJQUFJLENBQUNDLGdCQUFnQixDQUFDdm5CLEdBQUcsRUFBRXduQixTQUFTLEVBQUUxb0IsQ0FBQyxFQUFFQyxDQUFDLEVBQUVtQyxLQUFLLEVBQUVDLE1BQU0sRUFBRThsQixFQUFFLEVBQUVDLEVBQUUsRUFBRUMsTUFBTSxFQUFFQyxPQUFPLEVBQUVDLFVBQVUsRUFBRUMsT0FBTyxDQUFDO0VBQzFHLENBQUM7RUFDREMsZ0JBQWdCLEVBQUUsU0FBbEJBLGdCQUFnQkEsQ0FBV3ZuQixHQUFHLEVBQUVpRSxLQUFLLEVBQUVuRixDQUFDLEVBQUVDLENBQUMsRUFBRW1DLEtBQUssRUFBRUMsTUFBTSxFQUFFOGxCLEVBQUUsRUFBRUMsRUFBRSxFQUFFQyxNQUFNLEVBQUVDLE9BQU8sRUFBRUMsVUFBVSxFQUFFQyxPQUFPLEVBQUU7SUFDeEd4b0IsQ0FBQyxHQUFJQSxDQUFDLElBQUl3TCxTQUFTLElBQUltZCxLQUFLLENBQUMzb0IsQ0FBQyxDQUFDLEdBQUksSUFBSSxHQUFHMkIsSUFBSSxDQUFDa0IsS0FBSyxDQUFDN0MsQ0FBQyxDQUFDO0lBQ3ZEQyxDQUFDLEdBQUlBLENBQUMsSUFBSXVMLFNBQVMsSUFBSW1kLEtBQUssQ0FBQzFvQixDQUFDLENBQUMsR0FBSSxJQUFJLEdBQUcwQixJQUFJLENBQUNrQixLQUFLLENBQUM1QyxDQUFDLENBQUM7SUFDdkRtQyxLQUFLLEdBQUlBLEtBQUssSUFBSW9KLFNBQVMsSUFBSW1kLEtBQUssQ0FBQ3ZtQixLQUFLLENBQUMsR0FBSSxJQUFJLEdBQUdULElBQUksQ0FBQ2tCLEtBQUssQ0FBQ1QsS0FBSyxDQUFDO0lBQ3ZFQyxNQUFNLEdBQUlBLE1BQU0sSUFBSW1KLFNBQVMsSUFBSW1kLEtBQUssQ0FBQ3RtQixNQUFNLENBQUMsR0FBSSxJQUFJLEdBQUdWLElBQUksQ0FBQ2tCLEtBQUssQ0FBQ1IsTUFBTSxDQUFDO0lBQzNFOGxCLEVBQUUsR0FBSUEsRUFBRSxJQUFJM2MsU0FBUyxJQUFJbWQsS0FBSyxDQUFDUixFQUFFLENBQUMsR0FBSSxJQUFJLEdBQUd4bUIsSUFBSSxDQUFDa0IsS0FBSyxDQUFDc2xCLEVBQUUsQ0FBQztJQUMzREMsRUFBRSxHQUFJQSxFQUFFLElBQUk1YyxTQUFTLElBQUltZCxLQUFLLENBQUNQLEVBQUUsQ0FBQyxHQUFJLElBQUksR0FBR3ptQixJQUFJLENBQUNrQixLQUFLLENBQUN1bEIsRUFBRSxDQUFDO0lBQzNEQyxNQUFNLEdBQUlBLE1BQU0sSUFBSTdjLFNBQVMsSUFBSW1kLEtBQUssQ0FBQ04sTUFBTSxDQUFDLEdBQUksSUFBSSxHQUFHMW1CLElBQUksQ0FBQ2tCLEtBQUssQ0FBQ3dsQixNQUFNLENBQUM7SUFDM0VDLE9BQU8sR0FBSUEsT0FBTyxJQUFJOWMsU0FBUyxJQUFJbWQsS0FBSyxDQUFDTCxPQUFPLENBQUMsR0FBSSxJQUFJLEdBQUczbUIsSUFBSSxDQUFDa0IsS0FBSyxDQUFDeWxCLE9BQU8sQ0FBQztJQUMvRUMsVUFBVSxHQUFHQSxVQUFVLElBQUkvYyxTQUFTLEdBQUcsS0FBSyxHQUFHK2MsVUFBVTtJQUN6REMsT0FBTyxHQUFJQSxPQUFPLElBQUloZCxTQUFTLElBQUltZCxLQUFLLENBQUNILE9BQU8sQ0FBQyxHQUFJLElBQUksR0FBR0EsT0FBTztJQUVuRSxJQUFHQSxPQUFPLElBQUloZCxTQUFTLEVBQUU7TUFDdkJ0SyxHQUFHLENBQUNvQixJQUFJLENBQUMsQ0FBQztNQUNWcEIsR0FBRyxDQUFDMG5CLFNBQVMsQ0FBQzVvQixDQUFDLEdBQUdvQyxLQUFLLEdBQUcsQ0FBQyxFQUFFbkMsQ0FBQyxHQUFHb0MsTUFBTSxHQUFHLENBQUMsQ0FBQztNQUM1Q25CLEdBQUcsQ0FBQzJuQixNQUFNLENBQUNMLE9BQU8sR0FBRzdtQixJQUFJLENBQUM0WSxFQUFFLEdBQUcsR0FBRyxDQUFDO01BQ25DdmEsQ0FBQyxHQUFHLEVBQUVvQyxLQUFLLEdBQUcsQ0FBQyxDQUFDO01BQ2hCbkMsQ0FBQyxHQUFHLEVBQUVvQyxNQUFNLEdBQUcsQ0FBQyxDQUFDO0lBQ25CO0lBRUEsSUFBR2ttQixVQUFVLEVBQUU7TUFDYnJuQixHQUFHLENBQUM0bkIsU0FBUyxDQUFDOW9CLENBQUMsRUFBRUMsQ0FBQyxFQUFFbUMsS0FBSyxFQUFFQyxNQUFNLENBQUM7SUFDcEM7SUFFQSxJQUFHbkIsR0FBRyxJQUFJc0ssU0FBUyxJQUFJckcsS0FBSyxJQUFJcUcsU0FBUyxFQUFFO01BQ3pDLElBQUdyRyxLQUFLLENBQUMvQyxLQUFLLEdBQUcsQ0FBQyxJQUFJK0MsS0FBSyxDQUFDOUMsTUFBTSxHQUFHLENBQUMsRUFBRTtRQUN0QyxJQUFHOGxCLEVBQUUsSUFBSTNjLFNBQVMsSUFBSTRjLEVBQUUsSUFBSTVjLFNBQVMsSUFBSTZjLE1BQU0sSUFBSTdjLFNBQVMsSUFBSThjLE9BQU8sSUFBSTljLFNBQVMsRUFBRTtVQUNwRnRLLEdBQUcsQ0FBQ3liLFNBQVMsQ0FBQ3hYLEtBQUssRUFBRWdqQixFQUFFLEVBQUVDLEVBQUUsRUFBRUMsTUFBTSxFQUFFQyxPQUFPLEVBQUV0b0IsQ0FBQyxFQUFFQyxDQUFDLEVBQUVtQyxLQUFLLEVBQUVDLE1BQU0sQ0FBQztRQUNwRSxDQUFDLE1BQU07VUFDTG5CLEdBQUcsQ0FBQ3liLFNBQVMsQ0FBQ3hYLEtBQUssRUFBRW5GLENBQUMsRUFBRUMsQ0FBQyxFQUFFbUMsS0FBSyxFQUFFQyxNQUFNLENBQUM7UUFDM0M7TUFDRjtJQUNGO0lBRUEsSUFBR21tQixPQUFPLElBQUloZCxTQUFTLEVBQUU7TUFDdkJ0SyxHQUFHLENBQUN1QixPQUFPLENBQUMsQ0FBQztJQUNmO0VBQ0YsQ0FBQztFQUNEOGQsUUFBUSxFQUFFLFNBQVZBLFFBQVFBLENBQVdyZixHQUFHLEVBQUV1YSxJQUFJLEVBQUVsYSxLQUFLLEVBQUVva0IsSUFBSSxFQUFFM0UsVUFBVSxFQUFFaGMsVUFBVSxFQUFFQyxrQkFBa0IsRUFBRWpGLENBQUMsRUFBRUMsQ0FBQyxFQUFFdWlCLElBQUksRUFBRUMsSUFBSSxFQUFFQyxTQUFTLEVBQUV1RixZQUFZLEVBQUUvZixNQUFNLEVBQUU7SUFDeEksSUFBR2hILEdBQUcsRUFBRTtNQUNOQSxHQUFHLENBQUNvQixJQUFJLENBQUMsQ0FBQztNQUVWLElBQUcsQ0FBQzhCLEtBQUssQ0FBQzJrQixPQUFPLENBQUN4bkIsS0FBSyxDQUFDLEVBQUU7UUFDeEJMLEdBQUcsQ0FBQ3lCLFNBQVMsR0FBR3BCLEtBQUs7UUFDckJMLEdBQUcsQ0FBQ2tDLFdBQVcsR0FBRzdCLEtBQUs7TUFDekI7TUFFQUwsR0FBRyxDQUFDNm1CLElBQUksR0FBRyxDQUFDdEYsSUFBSSxHQUFHLE9BQU8sR0FBRyxFQUFFLElBQUlrRCxJQUFJLEdBQUcsS0FBSyxHQUFHM0UsVUFBVTtNQUM1RDlmLEdBQUcsQ0FBQyttQixZQUFZLEdBQUdBLFlBQVksSUFBSSxRQUFRO01BQzNDL21CLEdBQUcsQ0FBQzJYLE1BQU0sR0FBRyxNQUFNO01BRW5CLElBQUcySixJQUFJLEVBQUU7UUFDUC9HLElBQUksR0FBRyxJQUFJLENBQUM4RixhQUFhLENBQUNyZ0IsR0FBRyxFQUFFdWEsSUFBSSxDQUFDLENBQUMsTUFBTSxDQUFDO01BQzlDO01BRUEsSUFBTXVOLEtBQUssR0FBR3ZOLElBQUksQ0FBQ3dOLEtBQUssQ0FBQyxJQUFJLENBQUM7TUFDOUIsSUFBSW5sQixRQUFRLEdBQUcsQ0FBQztNQUNoQixJQUFJb2xCLFFBQVEsR0FBR3ZuQixJQUFJLENBQUNrQixLQUFLLENBQUM3QyxDQUFDLENBQUM7TUFDNUIsSUFBSW1wQixRQUFRLEdBQUd4bkIsSUFBSSxDQUFDa0IsS0FBSyxDQUFDNUMsQ0FBQyxDQUFDLEdBQUcwbEIsSUFBSTtNQUNuQyxJQUFJeUQsTUFBTSxHQUFHLENBQUM7TUFFZCxJQUFHLENBQUNucEIsQ0FBQyxFQUFFO1FBQ0wsSUFBR2dGLGtCQUFrQixJQUFJdEYsa0RBQVMsQ0FBQzRTLGtCQUFrQixDQUFDSixNQUFNLEVBQUU7VUFDNURnWCxRQUFRLElBQUl4bkIsSUFBSSxDQUFDa0IsS0FBSyxDQUFFLENBQUNxRixNQUFNLElBQUlBLE1BQU0sQ0FBQzdGLE1BQU0sR0FBRzZGLE1BQU0sQ0FBQzdGLE1BQU0sR0FBRyxJQUFJLENBQUM2SCxlQUFlLENBQUNoSixHQUFHLENBQUNELE1BQU0sQ0FBQyxJQUFJLENBQUMsR0FBSzBrQixJQUFJLEdBQUdxRCxLQUFLLENBQUM5a0IsTUFBTSxHQUFHLENBQUUsQ0FBQztRQUN4SSxDQUFDLE1BQU0sSUFBR2Usa0JBQWtCLElBQUl0RixrREFBUyxDQUFDNFMsa0JBQWtCLENBQUNDLE1BQU0sRUFBRTtVQUNuRTJXLFFBQVEsSUFBSXhuQixJQUFJLENBQUNrQixLQUFLLENBQUMsQ0FBRXFGLE1BQU0sSUFBSUEsTUFBTSxDQUFDN0YsTUFBTSxHQUFHNkYsTUFBTSxDQUFDN0YsTUFBTSxHQUFHLElBQUksQ0FBQzZILGVBQWUsQ0FBQ2hKLEdBQUcsQ0FBQ0QsTUFBTSxDQUFDLElBQU0wa0IsSUFBSSxHQUFHcUQsS0FBSyxDQUFDOWtCLE1BQU0sR0FBSSxDQUFDLEdBQUd5aEIsSUFBSSxHQUFHLENBQUMsQ0FBQztRQUMvSTtNQUNGO01BRUEsS0FBSSxJQUFJcE4sQ0FBQyxHQUFHLENBQUMsRUFBRUEsQ0FBQyxHQUFHeVEsS0FBSyxDQUFDOWtCLE1BQU0sRUFBRXFVLENBQUMsRUFBRSxFQUFFO1FBQ3BDLElBQU04USxXQUFXLEdBQUdMLEtBQUssQ0FBQ3pRLENBQUMsQ0FBQztRQUM1QixJQUFNK1EsWUFBWSxHQUFHcG9CLEdBQUcsQ0FBQzhtQixXQUFXLENBQUNxQixXQUFXLENBQUMsQ0FBQ2puQixLQUFLO1FBRXZELElBQUdnQyxLQUFLLENBQUMya0IsT0FBTyxDQUFDeG5CLEtBQUssQ0FBQyxFQUFFO1VBQ3ZCLElBQUlnb0IsVUFBVSxHQUFHaFIsQ0FBQztVQUVsQixJQUFHZ1IsVUFBVSxHQUFHaG9CLEtBQUssQ0FBQzJDLE1BQU0sR0FBRyxDQUFDLEVBQUU7WUFDaENxbEIsVUFBVSxHQUFHaG9CLEtBQUssQ0FBQzJDLE1BQU0sR0FBRyxDQUFDO1VBQy9CO1VBRUFoRCxHQUFHLENBQUN5QixTQUFTLEdBQUdwQixLQUFLLENBQUNnb0IsVUFBVSxDQUFDO1VBQ2pDcm9CLEdBQUcsQ0FBQ2tDLFdBQVcsR0FBRzdCLEtBQUssQ0FBQ2dvQixVQUFVLENBQUM7UUFDckM7UUFFQSxJQUFHdmtCLFVBQVUsSUFBSXJGLGtEQUFTLENBQUN1UyxVQUFVLENBQUNDLE1BQU0sRUFBRTtVQUM1QytXLFFBQVEsR0FBR3ZuQixJQUFJLENBQUNrQixLQUFLLENBQUVxRixNQUFNLElBQUlBLE1BQU0sQ0FBQ2xJLENBQUMsR0FBR2tJLE1BQU0sQ0FBQ2xJLENBQUMsR0FBRyxDQUFFLENBQUMsR0FBRzJCLElBQUksQ0FBQ2tCLEtBQUssQ0FBRSxDQUFDcUYsTUFBTSxJQUFJQSxNQUFNLENBQUM5RixLQUFLLEdBQUc4RixNQUFNLENBQUM5RixLQUFLLEdBQUcsSUFBSSxDQUFDNEgsY0FBYyxDQUFDOUksR0FBRyxDQUFDRCxNQUFNLENBQUMsSUFBSSxDQUFDLEdBQUtDLEdBQUcsQ0FBQzhtQixXQUFXLENBQUNxQixXQUFXLENBQUMsQ0FBQ2puQixLQUFLLEdBQUcsQ0FBRSxDQUFDO1FBQ3JNLENBQUMsTUFBTSxJQUFHNEMsVUFBVSxJQUFJckYsa0RBQVMsQ0FBQ3VTLFVBQVUsQ0FBQ0UsS0FBSyxFQUFFO1VBQ2xEOFcsUUFBUSxHQUFHdm5CLElBQUksQ0FBQ2tCLEtBQUssQ0FBRXFGLE1BQU0sSUFBSUEsTUFBTSxDQUFDbEksQ0FBQyxHQUFHa0ksTUFBTSxDQUFDbEksQ0FBQyxHQUFHLENBQUUsQ0FBQyxHQUFHMkIsSUFBSSxDQUFDa0IsS0FBSyxDQUFDLENBQUNxRixNQUFNLElBQUlBLE1BQU0sQ0FBQzlGLEtBQUssR0FBRzhGLE1BQU0sQ0FBQzlGLEtBQUssR0FBRyxJQUFJLENBQUM0SCxjQUFjLENBQUM5SSxHQUFHLENBQUNELE1BQU0sQ0FBQyxJQUFLQyxHQUFHLENBQUM4bUIsV0FBVyxDQUFDcUIsV0FBVyxDQUFDLENBQUNqbkIsS0FBTSxJQUFJOEYsTUFBTSxJQUFJQSxNQUFNLENBQUMrRixzQkFBc0IsR0FBRy9GLE1BQU0sQ0FBQytGLHNCQUFzQixHQUFHdE8sa0RBQVMsQ0FBQ2tDLE9BQU8sQ0FBQzhRLGVBQWUsQ0FBQyxDQUFDO1FBQzNTO1FBRUF6UixHQUFHLENBQUNnbkIsUUFBUSxDQUFDbUIsV0FBVyxFQUFFSCxRQUFRLEVBQUVDLFFBQVEsQ0FBQztRQUU3QyxJQUFHekcsU0FBUyxFQUFFO1VBQ1p4aEIsR0FBRyxDQUFDRyxTQUFTLEdBQUcsQ0FBQztVQUNqQkgsR0FBRyxDQUFDZ2dCLFNBQVMsQ0FBQyxDQUFDO1VBQ2ZoZ0IsR0FBRyxDQUFDaWdCLE1BQU0sQ0FBQytILFFBQVEsRUFBRUMsUUFBUSxHQUFHLENBQUMsQ0FBQztVQUNsQ2pvQixHQUFHLENBQUNrZ0IsTUFBTSxDQUFDemYsSUFBSSxDQUFDa0IsS0FBSyxDQUFDcW1CLFFBQVEsR0FBR0ksWUFBWSxDQUFDLEVBQUVILFFBQVEsR0FBRyxDQUFDLENBQUM7VUFDN0Rqb0IsR0FBRyxDQUFDbWdCLE1BQU0sQ0FBQyxDQUFDO1FBQ2Q7UUFFQSxJQUFHaUksWUFBWSxHQUFHeGxCLFFBQVEsRUFBRUEsUUFBUSxHQUFHd2xCLFlBQVk7UUFDbkQsSUFBRy9RLENBQUMsSUFBSSxDQUFDLEVBQUU2USxNQUFNLEdBQUdELFFBQVE7UUFFNUJBLFFBQVEsSUFBSXhELElBQUk7TUFDbEI7TUFFQXprQixHQUFHLENBQUN1QixPQUFPLENBQUMsQ0FBQztNQUViLE9BQU87UUFDTHpDLENBQUMsRUFBRWtwQixRQUFRO1FBQ1hqcEIsQ0FBQyxFQUFFbXBCLE1BQU07UUFDVC9tQixNQUFNLEVBQUVzakIsSUFBSSxHQUFHcUQsS0FBSyxDQUFDOWtCLE1BQU07UUFDM0I5QixLQUFLLEVBQUUwQjtNQUNULENBQUM7SUFDSDtFQUNGLENBQUM7RUFDRDBsQixRQUFRLEVBQUUsU0FBVkEsUUFBUUEsQ0FBVy9OLElBQUksRUFBRWdPLEtBQUssRUFBRTtJQUM5QixJQUFHaE8sSUFBSSxDQUFDdlgsTUFBTSxHQUFHdWxCLEtBQUssRUFBRTtNQUN0QixJQUFJQyxDQUFDLEdBQUdELEtBQUs7TUFFYixPQUFNQyxDQUFDLEdBQUcsQ0FBQyxJQUFJak8sSUFBSSxDQUFDaU8sQ0FBQyxDQUFDLElBQUksR0FBRyxFQUFFQSxDQUFDLEVBQUUsQ0FBQztNQUVuQyxJQUFHQSxDQUFDLEdBQUcsQ0FBQyxFQUFFO1FBQ1IsSUFBTXpLLElBQUksR0FBR3hELElBQUksQ0FBQ2tPLFNBQVMsQ0FBQyxDQUFDLEVBQUVELENBQUMsQ0FBQztRQUNqQyxJQUFNRSxLQUFLLEdBQUduTyxJQUFJLENBQUNrTyxTQUFTLENBQUNELENBQUMsR0FBRyxDQUFDLENBQUM7UUFDbkMsT0FBT3pLLElBQUksR0FBRyxJQUFJLEdBQUcsSUFBSSxDQUFDdUssUUFBUSxDQUFDSSxLQUFLLEVBQUVILEtBQUssQ0FBQztNQUNsRDtJQUNGO0lBRUEsT0FBT2hPLElBQUk7RUFDYixDQUFDO0VBQ0Q4RixhQUFhLEVBQUUsU0FBZkEsYUFBYUEsQ0FBV3JnQixHQUFHLEVBQUV1YSxJQUFJLEVBQUVyWixLQUFLLEVBQUUyZSxRQUFRLEVBQUVDLFVBQVUsRUFBRTZJLFdBQVcsRUFBRTtJQUMzRSxJQUFHM29CLEdBQUcsSUFBSXVhLElBQUksRUFBRTtNQUNkdmEsR0FBRyxDQUFDb0IsSUFBSSxDQUFDLENBQUM7TUFDVnBCLEdBQUcsQ0FBQzZtQixJQUFJLEdBQUdwbUIsSUFBSSxDQUFDa0IsS0FBSyxDQUFDa2UsUUFBUSxDQUFDLEdBQUcsS0FBSyxHQUFHQyxVQUFVO01BQ3BEOWYsR0FBRyxDQUFDNG9CLHFCQUFxQixHQUFHLEtBQUs7TUFFakMsSUFBTWQsS0FBSyxHQUFHdk4sSUFBSSxDQUFDd04sS0FBSyxDQUFDLElBQUksQ0FBQztNQUM5QixJQUFJYyxPQUFPLEdBQUcsRUFBRTtNQUNoQixJQUFNQyxRQUFRLEdBQUc1bkIsS0FBSyxJQUFJbEIsR0FBRyxDQUFDOG1CLFdBQVcsQ0FBQyxHQUFHLENBQUMsQ0FBQzVsQixLQUFLO01BQ3BELElBQU02bkIsU0FBUyxHQUFHdG9CLElBQUksQ0FBQ2tCLEtBQUssQ0FBQyxJQUFJLENBQUNtSCxjQUFjLENBQUM5SSxHQUFHLENBQUNELE1BQU0sQ0FBQyxHQUFHK29CLFFBQVEsQ0FBQztNQUV4RSxJQUFJRSxXQUFXLEdBQUcsQ0FBQztNQUNuQixJQUFJcG1CLFFBQVEsR0FBRyxDQUFDO01BRWhCLEtBQUksSUFBSXlVLENBQUMsR0FBRyxDQUFDLEVBQUVBLENBQUMsR0FBR3lRLEtBQUssQ0FBQzlrQixNQUFNLEVBQUVxVSxDQUFDLEVBQUUsRUFBRTtRQUNwQyxJQUFNNFIsUUFBUSxHQUFHTixXQUFXLEdBQUdiLEtBQUssQ0FBQ3pRLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQ2lSLFFBQVEsQ0FBQ1IsS0FBSyxDQUFDelEsQ0FBQyxDQUFDLEVBQUUwUixTQUFTLENBQUM7UUFDNUVGLE9BQU8sSUFBSUksUUFBUTtRQUVuQixJQUFHNVIsQ0FBQyxHQUFHeVEsS0FBSyxDQUFDOWtCLE1BQU0sR0FBRyxDQUFDLEVBQUU7VUFDdkI2bEIsT0FBTyxJQUFJLElBQUk7UUFDakI7UUFFQSxLQUFJLElBQUlLLENBQUMsR0FBRyxDQUFDLEVBQUVBLENBQUMsR0FBR0QsUUFBUSxDQUFDbEIsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDL2tCLE1BQU0sRUFBRWttQixDQUFDLEVBQUUsRUFBRTtVQUNuRCxJQUFNQyxTQUFTLEdBQUducEIsR0FBRyxDQUFDOG1CLFdBQVcsQ0FBQ21DLFFBQVEsQ0FBQ2xCLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQ21CLENBQUMsQ0FBQyxDQUFDLENBQUNob0IsS0FBSztVQUNoRThuQixXQUFXLElBQUluSixRQUFRO1VBQ3ZCLElBQUdzSixTQUFTLEdBQUd2bUIsUUFBUSxFQUFFQSxRQUFRLEdBQUd1bUIsU0FBUztRQUMvQztNQUNGO01BRUFucEIsR0FBRyxDQUFDdUIsT0FBTyxDQUFDLENBQUM7TUFFYixPQUFPO1FBQ0xnWixJQUFJLEVBQUVzTyxPQUFPO1FBQ2IxbkIsTUFBTSxFQUFFNm5CLFdBQVc7UUFDbkI5bkIsS0FBSyxFQUFFMEIsUUFBUTtRQUNmd21CLFFBQVEsRUFBRU47TUFDWixDQUFDO0lBQ0gsQ0FBQyxNQUFNO01BQ0wsT0FBTztRQUNMdk8sSUFBSSxFQUFFLEVBQUU7UUFDUnBaLE1BQU0sRUFBRSxDQUFDO1FBQ1RELEtBQUssRUFBRSxDQUFDO1FBQ1Jrb0IsUUFBUSxFQUFFO01BQ1osQ0FBQztJQUNIO0VBQ0YsQ0FBQztFQUNEbHBCLFNBQVMsRUFBRSxTQUFYQSxTQUFTQSxDQUFXRixHQUFHLEVBQUVxcEIsS0FBSyxFQUFFQyxLQUFLLEVBQUVDLEdBQUcsRUFBRUMsR0FBRyxFQUFFcnBCLFNBQVMsRUFBRUMsUUFBUSxFQUFFQyxLQUFLLEVBQUVDLE9BQU8sRUFBRTtJQUNwRk4sR0FBRyxDQUFDb0IsSUFBSSxDQUFDLENBQUM7SUFFVnBCLEdBQUcsQ0FBQ00sT0FBTyxHQUFHQSxPQUFPLElBQUk3QixrREFBUyxDQUFDa0MsT0FBTyxDQUFDSSxzQkFBc0I7SUFDakVmLEdBQUcsQ0FBQ0csU0FBUyxHQUFHQSxTQUFTLElBQUkxQixrREFBUyxDQUFDa0MsT0FBTyxDQUFDQyx1QkFBdUI7SUFDdEVaLEdBQUcsQ0FBQ2tDLFdBQVcsR0FBRzdCLEtBQUssSUFBSTVCLGtEQUFTLENBQUNrQyxPQUFPLENBQUNHLG1CQUFtQjtJQUNoRWQsR0FBRyxDQUFDMlgsTUFBTSxHQUFHLEVBQUU7SUFFZjNYLEdBQUcsQ0FBQ2dnQixTQUFTLENBQUMsQ0FBQztJQUNmLElBQU15SixPQUFPLEdBQUdycEIsUUFBUSxJQUFJM0Isa0RBQVMsQ0FBQ2tDLE9BQU8sQ0FBQ0UsdUJBQXVCO0lBQ3JFLElBQU02b0IsRUFBRSxHQUFHSCxHQUFHLEdBQUdGLEtBQUs7SUFDdEIsSUFBTU0sRUFBRSxHQUFHSCxHQUFHLEdBQUdGLEtBQUs7SUFDdEIsSUFBTU0sS0FBSyxHQUFHbnBCLElBQUksQ0FBQ29wQixLQUFLLENBQUNGLEVBQUUsRUFBRUQsRUFBRSxDQUFDO0lBQ2hDMXBCLEdBQUcsQ0FBQ2lnQixNQUFNLENBQUNvSixLQUFLLEVBQUVDLEtBQUssQ0FBQztJQUN4QnRwQixHQUFHLENBQUNrZ0IsTUFBTSxDQUFDcUosR0FBRyxFQUFFQyxHQUFHLENBQUM7SUFDcEJ4cEIsR0FBRyxDQUFDaWdCLE1BQU0sQ0FBQ3NKLEdBQUcsRUFBRUMsR0FBRyxDQUFDO0lBQ3BCeHBCLEdBQUcsQ0FBQ2tnQixNQUFNLENBQUNxSixHQUFHLEdBQUdFLE9BQU8sR0FBR2hwQixJQUFJLENBQUMyWSxHQUFHLENBQUN3USxLQUFLLEdBQUducEIsSUFBSSxDQUFDNFksRUFBRSxHQUFHLENBQUMsQ0FBQyxFQUFFbVEsR0FBRyxHQUFHQyxPQUFPLEdBQUdocEIsSUFBSSxDQUFDcXBCLEdBQUcsQ0FBQ0YsS0FBSyxHQUFHbnBCLElBQUksQ0FBQzRZLEVBQUUsR0FBRyxDQUFDLENBQUMsQ0FBQztJQUN4R3JaLEdBQUcsQ0FBQ2lnQixNQUFNLENBQUNzSixHQUFHLEVBQUVDLEdBQUcsQ0FBQztJQUNwQnhwQixHQUFHLENBQUNrZ0IsTUFBTSxDQUFDcUosR0FBRyxHQUFHRSxPQUFPLEdBQUdocEIsSUFBSSxDQUFDMlksR0FBRyxDQUFDd1EsS0FBSyxHQUFHbnBCLElBQUksQ0FBQzRZLEVBQUUsR0FBRyxDQUFDLENBQUMsRUFBRW1RLEdBQUcsR0FBR0MsT0FBTyxHQUFHaHBCLElBQUksQ0FBQ3FwQixHQUFHLENBQUNGLEtBQUssR0FBR25wQixJQUFJLENBQUM0WSxFQUFFLEdBQUcsQ0FBQyxDQUFDLENBQUM7SUFDeEdyWixHQUFHLENBQUNtZ0IsTUFBTSxDQUFDLENBQUM7SUFFWm5nQixHQUFHLENBQUN1QixPQUFPLENBQUMsQ0FBQztFQUNmLENBQUM7RUFDRHFYLFNBQVMsRUFBRSxTQUFYQSxTQUFTQSxDQUFXNVksR0FBRyxFQUFFbEIsQ0FBQyxFQUFFQyxDQUFDLEVBQUVtQyxLQUFLLEVBQUVDLE1BQU0sRUFBRWhCLFNBQVMsRUFBRUUsS0FBSyxFQUFFQyxPQUFPLEVBQUU7SUFDdkVOLEdBQUcsQ0FBQ29CLElBQUksQ0FBQyxDQUFDO0lBRVZwQixHQUFHLENBQUNNLE9BQU8sR0FBR0EsT0FBTyxJQUFJN0Isa0RBQVMsQ0FBQ2tDLE9BQU8sQ0FBQ3VULHNCQUFzQjtJQUNqRWxVLEdBQUcsQ0FBQ0csU0FBUyxHQUFHQSxTQUFTLElBQUkxQixrREFBUyxDQUFDa0MsT0FBTyxDQUFDeVQsdUJBQXVCO0lBQ3RFcFUsR0FBRyxDQUFDa0MsV0FBVyxHQUFHN0IsS0FBSyxJQUFJNUIsa0RBQVMsQ0FBQ2tDLE9BQU8sQ0FBQ3dULG1CQUFtQjtJQUNoRW5VLEdBQUcsQ0FBQzJYLE1BQU0sR0FBRyxFQUFFO0lBRWYzWCxHQUFHLENBQUNnZ0IsU0FBUyxDQUFDLENBQUM7SUFDZmhnQixHQUFHLENBQUNpZ0IsTUFBTSxDQUFDbmhCLENBQUMsRUFBRUMsQ0FBQyxDQUFDO0lBQ2hCaUIsR0FBRyxDQUFDa2dCLE1BQU0sQ0FBQ3BoQixDQUFDLEdBQUdvQyxLQUFLLEVBQUVuQyxDQUFDLEdBQUdvQyxNQUFNLENBQUM7SUFDakNuQixHQUFHLENBQUNpZ0IsTUFBTSxDQUFDbmhCLENBQUMsR0FBR29DLEtBQUssRUFBRW5DLENBQUMsQ0FBQztJQUN4QmlCLEdBQUcsQ0FBQ2tnQixNQUFNLENBQUNwaEIsQ0FBQyxFQUFFQyxDQUFDLEdBQUdvQyxNQUFNLENBQUM7SUFDekJuQixHQUFHLENBQUNtZ0IsTUFBTSxDQUFDLENBQUM7SUFFWm5nQixHQUFHLENBQUN1QixPQUFPLENBQUMsQ0FBQztFQUNmLENBQUM7RUFDRGlsQixZQUFZLEVBQUUsU0FBZEEsWUFBWUEsQ0FBV3htQixHQUFHLEVBQUVsQixDQUFDLEVBQUVDLENBQUMsRUFBRW1DLEtBQUssRUFBRUMsTUFBTSxFQUFFaEIsU0FBUyxFQUFFRSxLQUFLLEVBQUVDLE9BQU8sRUFBNkQ7SUFBQSxJQUEzRGdMLElBQUksR0FBQXZJLFNBQUEsQ0FBQUMsTUFBQSxRQUFBRCxTQUFBLFFBQUF1SCxTQUFBLEdBQUF2SCxTQUFBLE1BQUd0RSxrREFBUyxDQUFDa0MsT0FBTyxDQUFDcVUscUJBQXFCO0lBQUEsSUFBRXpKLFNBQVMsR0FBQXhJLFNBQUEsQ0FBQUMsTUFBQSxPQUFBRCxTQUFBLE1BQUF1SCxTQUFBO0lBQ25JdEssR0FBRyxDQUFDb0IsSUFBSSxDQUFDLENBQUM7SUFFVnBCLEdBQUcsQ0FBQ00sT0FBTyxHQUFHQSxPQUFPLElBQUk3QixrREFBUyxDQUFDa0MsT0FBTyxDQUFDaVUseUJBQXlCO0lBQ3BFNVUsR0FBRyxDQUFDRyxTQUFTLEdBQUdBLFNBQVMsSUFBSTFCLGtEQUFTLENBQUNrQyxPQUFPLENBQUNvVSwwQkFBMEI7SUFDekUvVSxHQUFHLENBQUMyWCxNQUFNLEdBQUcsRUFBRTtJQUVmLElBQUdyTSxJQUFJLEVBQUU7TUFDUHRMLEdBQUcsQ0FBQ3lCLFNBQVMsR0FBRzhKLFNBQVMsSUFBSTlNLGtEQUFTLENBQUNrQyxPQUFPLENBQUNtVSwyQkFBMkI7TUFDMUU5VSxHQUFHLENBQUNrQyxXQUFXLEdBQUc3QixLQUFLLElBQUk1QixrREFBUyxDQUFDa0MsT0FBTyxDQUFDa1Usc0JBQXNCO0lBQ3JFLENBQUMsTUFBTTtNQUNMN1UsR0FBRyxDQUFDa0MsV0FBVyxHQUFHN0IsS0FBSyxJQUFJNUIsa0RBQVMsQ0FBQ2tDLE9BQU8sQ0FBQ2tVLHNCQUFzQjtJQUNyRTtJQUVBN1UsR0FBRyxDQUFDZ2dCLFNBQVMsQ0FBQyxDQUFDO0lBQ2ZoZ0IsR0FBRyxDQUFDaWdCLE1BQU0sQ0FBQ25oQixDQUFDLEVBQUVDLENBQUMsQ0FBQztJQUNoQmlCLEdBQUcsQ0FBQ2tnQixNQUFNLENBQUNwaEIsQ0FBQyxHQUFHb0MsS0FBSyxFQUFFbkMsQ0FBQyxDQUFDO0lBQ3hCaUIsR0FBRyxDQUFDa2dCLE1BQU0sQ0FBQ3BoQixDQUFDLEdBQUdvQyxLQUFLLEdBQUcsQ0FBQyxFQUFFbkMsQ0FBQyxHQUFHb0MsTUFBTSxDQUFDO0lBQ3JDbkIsR0FBRyxDQUFDa2dCLE1BQU0sQ0FBQ3BoQixDQUFDLEVBQUVDLENBQUMsQ0FBQztJQUVoQixJQUFHdU0sSUFBSSxFQUFFO01BQ1B0TCxHQUFHLENBQUNzTCxJQUFJLENBQUMsQ0FBQztNQUNWdEwsR0FBRyxDQUFDbWdCLE1BQU0sQ0FBQyxDQUFDO0lBQ2QsQ0FBQyxNQUFNO01BQ0xuZ0IsR0FBRyxDQUFDbWdCLE1BQU0sQ0FBQyxDQUFDO0lBQ2Q7SUFFQW5nQixHQUFHLENBQUN1QixPQUFPLENBQUMsQ0FBQztFQUNmLENBQUM7RUFDRDhKLFVBQVUsRUFBRSxTQUFaQSxVQUFVQSxDQUFXckwsR0FBRyxFQUFFbEIsQ0FBQyxFQUFFQyxDQUFDLEVBQUVnckIsTUFBTSxFQUFFNXBCLFNBQVMsRUFBRUUsS0FBSyxFQUFFQyxPQUFPLEVBQTJEO0lBQUEsSUFBekRnTCxJQUFJLEdBQUF2SSxTQUFBLENBQUFDLE1BQUEsUUFBQUQsU0FBQSxRQUFBdUgsU0FBQSxHQUFBdkgsU0FBQSxNQUFHdEUsa0RBQVMsQ0FBQ2tDLE9BQU8sQ0FBQytLLG1CQUFtQjtJQUFBLElBQUVILFNBQVMsR0FBQXhJLFNBQUEsQ0FBQUMsTUFBQSxPQUFBRCxTQUFBLE1BQUF1SCxTQUFBO0lBQ3hIdEssR0FBRyxDQUFDb0IsSUFBSSxDQUFDLENBQUM7SUFFVnBCLEdBQUcsQ0FBQ00sT0FBTyxHQUFHQSxPQUFPLElBQUk3QixrREFBUyxDQUFDa0MsT0FBTyxDQUFDZ0wsdUJBQXVCO0lBQ2xFM0wsR0FBRyxDQUFDRyxTQUFTLEdBQUdBLFNBQVMsSUFBSTFCLGtEQUFTLENBQUNrQyxPQUFPLENBQUM2Syx3QkFBd0I7SUFDdkV4TCxHQUFHLENBQUMyWCxNQUFNLEdBQUcsRUFBRTtJQUVmLElBQUdyTSxJQUFJLEVBQUU7TUFDUHRMLEdBQUcsQ0FBQ3lCLFNBQVMsR0FBRzhKLFNBQVMsSUFBSTlNLGtEQUFTLENBQUNrQyxPQUFPLENBQUNpTCx5QkFBeUI7TUFDeEU1TCxHQUFHLENBQUNrQyxXQUFXLEdBQUc3QixLQUFLLElBQUk1QixrREFBUyxDQUFDa0MsT0FBTyxDQUFDOEssb0JBQW9CO0lBQ25FLENBQUMsTUFBTTtNQUNMekwsR0FBRyxDQUFDa0MsV0FBVyxHQUFHN0IsS0FBSyxJQUFJNUIsa0RBQVMsQ0FBQ2tDLE9BQU8sQ0FBQzhLLG9CQUFvQjtJQUNuRTtJQUVBekwsR0FBRyxDQUFDZ2dCLFNBQVMsQ0FBQyxDQUFDO0lBQ2ZoZ0IsR0FBRyxDQUFDZ3FCLEdBQUcsQ0FBQ2xyQixDQUFDLEdBQUdpckIsTUFBTSxHQUFHLENBQUMsRUFBRWhyQixDQUFDLEdBQUdnckIsTUFBTSxHQUFHLENBQUMsRUFBRUEsTUFBTSxHQUFHLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxHQUFHdHBCLElBQUksQ0FBQzRZLEVBQUUsRUFBRSxLQUFLLENBQUM7SUFFMUUsSUFBRy9OLElBQUksRUFBRTtNQUNQdEwsR0FBRyxDQUFDc0wsSUFBSSxDQUFDLENBQUM7TUFDVnRMLEdBQUcsQ0FBQ21nQixNQUFNLENBQUMsQ0FBQztJQUNkLENBQUMsTUFBTTtNQUNMbmdCLEdBQUcsQ0FBQ21nQixNQUFNLENBQUMsQ0FBQztJQUNkO0lBRUFuZ0IsR0FBRyxDQUFDdUIsT0FBTyxDQUFDLENBQUM7RUFDZixDQUFDO0VBQ0RrRyxLQUFLLEVBQUUsU0FBUEEsS0FBS0EsQ0FBV3pILEdBQUcsRUFBRTtJQUNuQkEsR0FBRyxDQUFDNG5CLFNBQVMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLElBQUksQ0FBQzllLGNBQWMsQ0FBQzlJLEdBQUcsQ0FBQ0QsTUFBTSxDQUFDLEVBQUUsSUFBSSxDQUFDaUosZUFBZSxDQUFDaEosR0FBRyxDQUFDRCxNQUFNLENBQUMsQ0FBQztFQUN4RixDQUFDO0VBQ0RrcUIsb0JBQW9CLEVBQUUsU0FBdEJBLG9CQUFvQkEsQ0FBQSxFQUFhO0lBQy9CLElBQU1scUIsTUFBTSxHQUFHMEYsUUFBUSxDQUFDQyxhQUFhLENBQUMsUUFBUSxDQUFDO0lBQy9DM0YsTUFBTSxDQUFDbUIsS0FBSyxHQUFHLENBQUM7SUFDaEJuQixNQUFNLENBQUNvQixNQUFNLEdBQUcsQ0FBQztJQUNqQixJQUFNbkIsR0FBRyxHQUFHRCxNQUFNLENBQUNFLFVBQVUsQ0FBQyxJQUFJLENBQUM7SUFDbkNELEdBQUcsQ0FBQ29CLElBQUksQ0FBQyxDQUFDO0lBRVZwQixHQUFHLENBQUN5QixTQUFTLEdBQUcsU0FBUztJQUN6QnpCLEdBQUcsQ0FBQzJYLE1BQU0sR0FBRyxtQkFBbUI7SUFDaEMzWCxHQUFHLENBQUMwQixRQUFRLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDO0lBQ3hCLElBQU1yQixLQUFLLEdBQUdMLEdBQUcsQ0FBQ2txQixZQUFZLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUNDLElBQUk7SUFDL0NucUIsR0FBRyxDQUFDdUIsT0FBTyxDQUFDLENBQUM7SUFFYixJQUFHbEIsS0FBSyxDQUFDLENBQUMsQ0FBQyxJQUFJLEdBQUcsSUFBSUEsS0FBSyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSUEsS0FBSyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsRUFBRTtNQUNwRCxPQUFPLEtBQUs7SUFDZDtJQUVBLE9BQU8sSUFBSTtFQUNiLENBQUM7RUFDRGlpQixVQUFVLEVBQUUsU0FBWkEsVUFBVUEsQ0FBV3RpQixHQUFHLEVBQUVnRCxNQUFNLEVBQUU7SUFDaENoRCxHQUFHLENBQUNvQixJQUFJLENBQUMsQ0FBQztJQUNWcEIsR0FBRyxDQUFDMlgsTUFBTSxHQUFHLE9BQU8sR0FBRzNVLE1BQU0sR0FBSSxLQUFLO0lBQ3RDLElBQUksQ0FBQzJKLGFBQWEsQ0FBQzNNLEdBQUcsRUFBRUEsR0FBRyxDQUFDRCxNQUFNLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxJQUFJLENBQUMrSSxjQUFjLENBQUM5SSxHQUFHLENBQUNELE1BQU0sQ0FBQyxFQUFFLElBQUksQ0FBQ2lKLGVBQWUsQ0FBQ2hKLEdBQUcsQ0FBQ0QsTUFBTSxDQUFDLENBQUM7SUFDNUdDLEdBQUcsQ0FBQ3VCLE9BQU8sQ0FBQyxDQUFDO0VBQ2YsQ0FBQztFQUNENm9CLFdBQVcsRUFBRSxTQUFiQSxXQUFXQSxDQUFXQyxHQUFHLEVBQUU7SUFDekIsT0FBT0EsR0FBRyxHQUFHQyxRQUFRLENBQUNELEdBQUcsQ0FBQ0UsS0FBSyxDQUFDLEtBQUssQ0FBQyxFQUFFLEVBQUUsQ0FBQyxHQUFHLENBQUM7RUFDakQsQ0FBQztFQUNEQyxXQUFXLEVBQUUsU0FBYkEsV0FBV0EsQ0FBV3hxQixHQUFHLEVBQUU7SUFDekIsT0FBT1MsSUFBSSxDQUFDb2IsS0FBSyxDQUFDLElBQUksQ0FBQ3VPLFdBQVcsQ0FBQ3BxQixHQUFHLENBQUM2bUIsSUFBSSxDQUFDLEdBQUcsSUFBSSxDQUFDO0VBQ3RELENBQUM7RUFDRC9kLGNBQWMsV0FBZEEsY0FBY0EsQ0FBQy9JLE1BQU0sRUFBRTtJQUNyQixPQUFPLElBQUksQ0FBQ3FxQixXQUFXLENBQUNycUIsTUFBTSxDQUFDYixLQUFLLENBQUNnQyxLQUFLLENBQUMsSUFBSW5CLE1BQU0sQ0FBQ21CLEtBQUs7RUFDN0QsQ0FBQztFQUNEOEgsZUFBZSxXQUFmQSxlQUFlQSxDQUFDakosTUFBTSxFQUFFO0lBQ3RCLE9BQU8sSUFBSSxDQUFDcXFCLFdBQVcsQ0FBQ3JxQixNQUFNLENBQUNiLEtBQUssQ0FBQ2lDLE1BQU0sQ0FBQyxJQUFJcEIsTUFBTSxDQUFDb0IsTUFBTTtFQUMvRCxDQUFDO0VBQ0RrSCxPQUFPLFdBQVBBLE9BQU9BLENBQUN0SSxNQUFNLEVBQUU7SUFDZCxJQUFNMHFCLElBQUksR0FBRzFxQixNQUFNLENBQUMycUIscUJBQXFCLENBQUMsQ0FBQztJQUUzQzNxQixNQUFNLENBQUNtQixLQUFLLEdBQUd1cEIsSUFBSSxDQUFDdnBCLEtBQUssR0FBR3pDLGtEQUFTLENBQUNrQyxPQUFPLENBQUN1RyxXQUFXO0lBQ3pEbkgsTUFBTSxDQUFDb0IsTUFBTSxHQUFHc3BCLElBQUksQ0FBQ3RwQixNQUFNLEdBQUcxQyxrREFBUyxDQUFDa0MsT0FBTyxDQUFDdUcsV0FBVztJQUUzRG5ILE1BQU0sQ0FBQ2IsS0FBSyxDQUFDZ0MsS0FBSyxHQUFHdXBCLElBQUksQ0FBQ3ZwQixLQUFLLEdBQUcsSUFBSTtJQUN0Q25CLE1BQU0sQ0FBQ2IsS0FBSyxDQUFDaUMsTUFBTSxHQUFJc3BCLElBQUksQ0FBQ3RwQixNQUFNLEdBQUcsSUFBSTtFQUMzQyxDQUFDO0VBQ0R3cEIsZ0JBQWdCLEVBQUUsU0FBbEJBLGdCQUFnQkEsQ0FBVzVxQixNQUFNLEVBQUU0RixTQUFTLEVBQUVpbEIsWUFBWSxFQUFFQyxhQUFhLEVBQUU7SUFDekUsSUFBRyxDQUFDcGxCLFFBQVEsQ0FBQ3VDLGlCQUFpQixFQUFFO01BQzlCLElBQUc0aUIsWUFBWSxJQUFJbmxCLFFBQVEsQ0FBQ3FsQixlQUFlLENBQUNDLFdBQVcsR0FBRyxJQUFJLEVBQUU7UUFDOUQsSUFBSUMsS0FBSyxHQUFHSixZQUFZLEdBQUdDLGFBQWE7UUFDeEM5cUIsTUFBTSxDQUFDbUIsS0FBSyxHQUFHdUUsUUFBUSxDQUFDcWxCLGVBQWUsQ0FBQ0MsV0FBVyxHQUFHLElBQUk7UUFDMURockIsTUFBTSxDQUFDb0IsTUFBTSxHQUFHcEIsTUFBTSxDQUFDbUIsS0FBSyxHQUFHOHBCLEtBQUs7UUFFcEMsSUFBR2pyQixNQUFNLENBQUNiLEtBQUssRUFBRTtVQUNmYSxNQUFNLENBQUNiLEtBQUssQ0FBQ2dDLEtBQUssR0FBR25CLE1BQU0sQ0FBQ21CLEtBQUssR0FBRyxJQUFJO1VBQ3hDbkIsTUFBTSxDQUFDYixLQUFLLENBQUNpQyxNQUFNLEdBQUdwQixNQUFNLENBQUNvQixNQUFNLEdBQUcsSUFBSTtRQUM1QztNQUNGLENBQUMsTUFBTTtRQUNMcEIsTUFBTSxDQUFDbUIsS0FBSyxHQUFHMHBCLFlBQVk7UUFDM0I3cUIsTUFBTSxDQUFDb0IsTUFBTSxHQUFHMHBCLGFBQWE7UUFFN0IsSUFBRzlxQixNQUFNLENBQUNiLEtBQUssRUFBRTtVQUNmYSxNQUFNLENBQUNiLEtBQUssQ0FBQ2dDLEtBQUssR0FBRzBwQixZQUFZLEdBQUcsSUFBSTtVQUN4QzdxQixNQUFNLENBQUNiLEtBQUssQ0FBQ2lDLE1BQU0sR0FBRzBwQixhQUFhLEdBQUcsSUFBSTtRQUM1QztNQUNGO0lBQ0YsQ0FBQyxNQUFNLElBQUdwbEIsUUFBUSxDQUFDdUMsaUJBQWlCLElBQUlqSSxNQUFNLElBQUkwRixRQUFRLENBQUN1QyxpQkFBaUIsSUFBSXJDLFNBQVMsRUFBRTtNQUN6RjVGLE1BQU0sQ0FBQ21CLEtBQUssR0FBR2dILE1BQU0sQ0FBQytFLFVBQVU7TUFDaENsTixNQUFNLENBQUNvQixNQUFNLEdBQUcrRyxNQUFNLENBQUNrRixXQUFXO01BRWxDLElBQUdyTixNQUFNLENBQUNiLEtBQUssRUFBRTtRQUNmYSxNQUFNLENBQUNiLEtBQUssQ0FBQ2dDLEtBQUssR0FBR2dILE1BQU0sQ0FBQytFLFVBQVUsR0FBRyxJQUFJO1FBQzdDbE4sTUFBTSxDQUFDYixLQUFLLENBQUNpQyxNQUFNLEdBQUcrRyxNQUFNLENBQUNrRixXQUFXLEdBQUcsSUFBSTtNQUNqRDtNQUVBLElBQUd6SCxTQUFTLEVBQUU7UUFDWkEsU0FBUyxDQUFDekUsS0FBSyxHQUFHZ0gsTUFBTSxDQUFDK0UsVUFBVTtRQUNuQ3RILFNBQVMsQ0FBQ3hFLE1BQU0sR0FBRytHLE1BQU0sQ0FBQ2tGLFdBQVc7TUFDdkM7SUFDRixDQUFDLE1BQU07TUFDTHJOLE1BQU0sQ0FBQ21CLEtBQUssR0FBRzBwQixZQUFZO01BQzNCN3FCLE1BQU0sQ0FBQ29CLE1BQU0sR0FBRzBwQixhQUFhO01BRTdCLElBQUc5cUIsTUFBTSxDQUFDYixLQUFLLEVBQUU7UUFDZmEsTUFBTSxDQUFDYixLQUFLLENBQUNnQyxLQUFLLEdBQUcwcEIsWUFBWSxHQUFHLElBQUk7UUFDeEM3cUIsTUFBTSxDQUFDYixLQUFLLENBQUNpQyxNQUFNLEdBQUcwcEIsYUFBYSxHQUFHLElBQUk7TUFDNUM7SUFDRjtFQUNGLENBQUM7RUFDRGhpQixzQkFBc0IsRUFBRSxTQUF4QkEsc0JBQXNCQSxDQUFXOUksTUFBTSxFQUFFNEYsU0FBUyxFQUFFaWxCLFlBQVksRUFBRUMsYUFBYSxFQUFFO0lBQUEsSUFBQTFyQixLQUFBO0lBQy9FLElBQUdZLE1BQU0sSUFBSUEsTUFBTSxDQUFDa3JCLFlBQVksQ0FBQyx5QkFBeUIsQ0FBQyxJQUFJLE1BQU0sRUFBRTtNQUNyRSxJQUFJLENBQUNOLGdCQUFnQixDQUFDNXFCLE1BQU0sRUFBRTRGLFNBQVMsRUFBRWlsQixZQUFZLEVBQUVDLGFBQWEsQ0FBQztNQUVyRTNpQixNQUFNLENBQUNtQixnQkFBZ0IsQ0FBQyxRQUFRLEVBQUUsWUFBTTtRQUN0Q3RKLE1BQU0sQ0FBQytkLFlBQVksQ0FBQyx5QkFBeUIsRUFBRSxNQUFNLENBQUM7UUFDdEQzZSxLQUFJLENBQUN3ckIsZ0JBQWdCLENBQUM1cUIsTUFBTSxFQUFFNEYsU0FBUyxFQUFFaWxCLFlBQVksRUFBRUMsYUFBYSxDQUFDO01BQ3ZFLENBQUMsQ0FBQztJQUNKO0VBQ0YsQ0FBQztFQUNESywwQkFBMEIsRUFBRSxTQUE1QkEsMEJBQTBCQSxDQUFXbnJCLE1BQU0sRUFBRTRGLFNBQVMsRUFBRTtJQUN0RCxJQUFHRixRQUFRLENBQUN1QyxpQkFBaUIsSUFBSWpJLE1BQU0sSUFBSTBGLFFBQVEsQ0FBQ3VDLGlCQUFpQixJQUFJckMsU0FBUyxFQUFFO01BQ2xGNUYsTUFBTSxDQUFDbUIsS0FBSyxHQUFHZ0gsTUFBTSxDQUFDK0UsVUFBVTtNQUNoQ2xOLE1BQU0sQ0FBQ29CLE1BQU0sR0FBRytHLE1BQU0sQ0FBQ2tGLFdBQVc7TUFFbEMsSUFBR3JOLE1BQU0sQ0FBQ2IsS0FBSyxFQUFFO1FBQ2ZhLE1BQU0sQ0FBQ2IsS0FBSyxDQUFDZ0MsS0FBSyxHQUFHZ0gsTUFBTSxDQUFDK0UsVUFBVSxHQUFHLElBQUk7UUFDN0NsTixNQUFNLENBQUNiLEtBQUssQ0FBQ2lDLE1BQU0sR0FBRytHLE1BQU0sQ0FBQ2tGLFdBQVcsR0FBRyxJQUFJO01BQ2pEO01BRUEsSUFBR3pILFNBQVMsRUFBRTtRQUNaQSxTQUFTLENBQUN6RSxLQUFLLEdBQUdnSCxNQUFNLENBQUMrRSxVQUFVO1FBQ25DdEgsU0FBUyxDQUFDeEUsTUFBTSxHQUFHK0csTUFBTSxDQUFDa0YsV0FBVztNQUN2QztJQUNGO0VBQ0YsQ0FBQztFQUNEK2QsZ0NBQWdDLEVBQUUsU0FBbENBLGdDQUFnQ0EsQ0FBV3ByQixNQUFNLEVBQUU0RixTQUFTLEVBQUU7SUFBQSxJQUFBdUQsTUFBQTtJQUM1RCxJQUFHbkosTUFBTSxJQUFJQSxNQUFNLENBQUNrckIsWUFBWSxDQUFDLG1DQUFtQyxDQUFDLElBQUksTUFBTSxFQUFFO01BQy9FLElBQUksQ0FBQ0MsMEJBQTBCLENBQUNuckIsTUFBTSxFQUFFNEYsU0FBUyxDQUFDO01BRWxEdUMsTUFBTSxDQUFDbUIsZ0JBQWdCLENBQUMsUUFBUSxFQUFFLFlBQU07UUFDdEN0SixNQUFNLENBQUMrZCxZQUFZLENBQUMsbUNBQW1DLEVBQUUsTUFBTSxDQUFDO1FBQ2hFNVUsTUFBSSxDQUFDZ2lCLDBCQUEwQixDQUFDbnJCLE1BQU0sRUFBRTRGLFNBQVMsQ0FBQztNQUNwRCxDQUFDLENBQUM7SUFDSjtFQUNGLENBQUM7RUFDRHlsQix3QkFBd0IsRUFBRSxTQUExQkEsd0JBQXdCQSxDQUFXcnJCLE1BQU0sRUFBRTRGLFNBQVMsRUFBRTtJQUNwRCxJQUFHNUYsTUFBTSxJQUFJQSxNQUFNLENBQUNrckIsWUFBWSxDQUFDLHdCQUF3QixDQUFDLElBQUksTUFBTSxFQUFFO01BQ3BFbHJCLE1BQU0sQ0FBQ21CLEtBQUssR0FBR2dILE1BQU0sQ0FBQytFLFVBQVU7TUFDaENsTixNQUFNLENBQUNvQixNQUFNLEdBQUcrRyxNQUFNLENBQUNrRixXQUFXO01BRWxDLElBQUdyTixNQUFNLENBQUNiLEtBQUssRUFBRTtRQUNmYSxNQUFNLENBQUNiLEtBQUssQ0FBQ2dDLEtBQUssR0FBR2dILE1BQU0sQ0FBQytFLFVBQVUsR0FBRyxJQUFJO1FBQzdDbE4sTUFBTSxDQUFDYixLQUFLLENBQUNpQyxNQUFNLEdBQUcrRyxNQUFNLENBQUNrRixXQUFXLEdBQUcsSUFBSTtNQUNqRDtNQUVBLElBQUd6SCxTQUFTLEVBQUU7UUFDWkEsU0FBUyxDQUFDekUsS0FBSyxHQUFHZ0gsTUFBTSxDQUFDK0UsVUFBVTtRQUNuQ3RILFNBQVMsQ0FBQ3hFLE1BQU0sR0FBRytHLE1BQU0sQ0FBQ2tGLFdBQVc7UUFDckN6SCxTQUFTLENBQUN6RyxLQUFLLENBQUNtc0IsTUFBTSxHQUFHLENBQUM7UUFDMUIxbEIsU0FBUyxDQUFDekcsS0FBSyxDQUFDb0UsT0FBTyxHQUFHLENBQUM7TUFDN0I7TUFFQW1DLFFBQVEsQ0FBQzRZLElBQUksQ0FBQ25mLEtBQUssQ0FBQ21zQixNQUFNLEdBQUcsQ0FBQztNQUM5QjVsQixRQUFRLENBQUM0WSxJQUFJLENBQUNuZixLQUFLLENBQUNvRSxPQUFPLEdBQUcsQ0FBQztJQUNqQztFQUNGLENBQUM7RUFDRGdvQiw4QkFBOEIsRUFBRSxTQUFoQ0EsOEJBQThCQSxDQUFXdnJCLE1BQU0sRUFBRTRGLFNBQVMsRUFBRTtJQUFBLElBQUFrRSxNQUFBO0lBQzFELElBQUc5SixNQUFNLElBQUlBLE1BQU0sQ0FBQ2tyQixZQUFZLENBQUMsaUNBQWlDLENBQUMsSUFBSSxNQUFNLEVBQUU7TUFDN0UsSUFBSSxDQUFDRyx3QkFBd0IsQ0FBQ3JyQixNQUFNLEVBQUU0RixTQUFTLENBQUM7TUFFaER1QyxNQUFNLENBQUNtQixnQkFBZ0IsQ0FBQyxRQUFRLEVBQUUsWUFBTTtRQUN0Q3RKLE1BQU0sQ0FBQytkLFlBQVksQ0FBQyxpQ0FBaUMsRUFBRSxNQUFNLENBQUM7UUFDOURqVSxNQUFJLENBQUN1aEIsd0JBQXdCLENBQUNyckIsTUFBTSxFQUFFNEYsU0FBUyxDQUFDO01BQ2xELENBQUMsQ0FBQztJQUNKO0VBQ0YsQ0FBQztFQUNEZ0QsZ0JBQWdCLEVBQUUsU0FBbEJBLGdCQUFnQkEsQ0FBVzVJLE1BQU0sRUFBRTRGLFNBQVMsRUFBRTtJQUM1QyxJQUFHNUYsTUFBTSxFQUFFO01BQ1QsSUFBTTZxQixZQUFZLEdBQUc3cUIsTUFBTSxDQUFDbUIsS0FBSztNQUNqQyxJQUFNMnBCLGFBQWEsR0FBRzlxQixNQUFNLENBQUNvQixNQUFNO01BRW5DLElBQUd3RSxTQUFTLEVBQUU7UUFDWkEsU0FBUyxDQUFDekUsS0FBSyxHQUFHMHBCLFlBQVk7UUFDOUJqbEIsU0FBUyxDQUFDeEUsTUFBTSxHQUFHMHBCLGFBQWE7TUFDbEM7TUFFQSxJQUFHLENBQUNwbEIsUUFBUSxDQUFDdUMsaUJBQWlCLEVBQUU7UUFDOUIsSUFBRyxDQUFDckMsU0FBUyxJQUFJNUYsTUFBTSxFQUFFd3JCLGlCQUFpQixFQUFFO1VBQzFDLENBQUM1bEIsU0FBUyxJQUFJNUYsTUFBTSxFQUFFd3JCLGlCQUFpQixDQUFDLENBQUM7UUFDM0MsQ0FBQyxNQUFNLElBQUcsQ0FBQzVsQixTQUFTLElBQUk1RixNQUFNLEVBQUV5ckIsb0JBQW9CLEVBQUU7VUFDcEQsQ0FBQzdsQixTQUFTLElBQUk1RixNQUFNLEVBQUV5ckIsb0JBQW9CLENBQUMsQ0FBQztRQUM5QyxDQUFDLE1BQU0sSUFBRyxDQUFDN2xCLFNBQVMsSUFBSTVGLE1BQU0sRUFBRTByQix1QkFBdUIsRUFBRTtVQUN2RCxDQUFDOWxCLFNBQVMsSUFBSTVGLE1BQU0sRUFBRTByQix1QkFBdUIsQ0FBQyxDQUFDO1FBQ2pELENBQUMsTUFBTSxJQUFHLENBQUM5bEIsU0FBUyxJQUFJNUYsTUFBTSxFQUFFMnJCLG1CQUFtQixFQUFFO1VBQ25ELENBQUMvbEIsU0FBUyxJQUFJNUYsTUFBTSxFQUFFMnJCLG1CQUFtQixDQUFDLENBQUM7UUFDN0MsQ0FBQyxNQUFNLElBQUcsQ0FBQy9sQixTQUFTLElBQUk1RixNQUFNLEVBQUU0ckIsa0JBQWtCLEVBQUU7VUFDbEQsQ0FBQ2htQixTQUFTLElBQUk1RixNQUFNLEVBQUU0ckIsa0JBQWtCLENBQUMsQ0FBQztRQUM1QztNQUNGLENBQUMsTUFBTTtRQUNMLElBQUdsbUIsUUFBUSxDQUFDbW1CLGNBQWMsRUFBRTtVQUMxQm5tQixRQUFRLENBQUNtbUIsY0FBYyxDQUFDLENBQUM7UUFDM0I7TUFDRjtNQUVBLElBQUksQ0FBQ1QsZ0NBQWdDLENBQUNwckIsTUFBTSxFQUFFNEYsU0FBUyxDQUFDO01BRXhELElBQUc1RixNQUFNLENBQUNrckIsWUFBWSxDQUFDLCtCQUErQixDQUFDLElBQUksTUFBTSxFQUFFO1FBQ2pFbHJCLE1BQU0sQ0FBQytkLFlBQVksQ0FBQywrQkFBK0IsRUFBRSxNQUFNLENBQUM7UUFFNUQsSUFBTStOLGtCQUFrQixHQUFHLFNBQXJCQSxrQkFBa0JBLENBQUEsRUFBUztVQUMvQixJQUFHcG1CLFFBQVEsQ0FBQ3VDLGlCQUFpQixLQUFLckMsU0FBUyxJQUFJNUYsTUFBTSxDQUFDLEVBQUU7WUFDdERBLE1BQU0sQ0FBQ21CLEtBQUssR0FBRzBwQixZQUFZO1lBQzNCN3FCLE1BQU0sQ0FBQ29CLE1BQU0sR0FBRzBwQixhQUFhO1lBRTdCLElBQUdsbEIsU0FBUyxFQUFFO2NBQ1pBLFNBQVMsQ0FBQ3pFLEtBQUssR0FBRzBwQixZQUFZO2NBQzlCamxCLFNBQVMsQ0FBQ3hFLE1BQU0sR0FBRzBwQixhQUFhO1lBQ2xDO1VBQ0Y7UUFDRixDQUFDO1FBRUQsSUFBRyxPQUFPcGxCLFFBQVEsQ0FBQ29tQixrQkFBbUIsS0FBSyxXQUFXLEVBQUU7VUFDdERwbUIsUUFBUSxDQUFDb21CLGtCQUFrQixHQUFHQSxrQkFBa0I7UUFDbEQsQ0FBQyxNQUFNLElBQUcsT0FBT3BtQixRQUFRLENBQUNxbUIsb0JBQXFCLEtBQUssV0FBVyxFQUFFO1VBQy9Ecm1CLFFBQVEsQ0FBQ3FtQixvQkFBb0IsR0FBR0Qsa0JBQWtCO1FBQ3BELENBQUMsTUFBTSxJQUFHLE9BQU9wbUIsUUFBUSxDQUFDc21CLHFCQUFzQixLQUFLLFdBQVcsRUFBRTtVQUNoRXRtQixRQUFRLENBQUNzbUIscUJBQXFCLEdBQUdGLGtCQUFrQjtRQUNyRCxDQUFDLE1BQU0sSUFBRyxPQUFPcG1CLFFBQVEsQ0FBQ3VtQix3QkFBeUIsS0FBSyxXQUFXLEVBQUU7VUFDbkV2bUIsUUFBUSxDQUFDdW1CLHdCQUF3QixHQUFHSCxrQkFBa0I7UUFDeEQsQ0FBQyxNQUFNLElBQUcsT0FBT3BtQixRQUFRLENBQUN3bUIsc0JBQXVCLEtBQUssV0FBVyxFQUFFO1VBQ2pFeG1CLFFBQVEsQ0FBQ3ltQixtQkFBbUIsR0FBR0wsa0JBQWtCO1FBQ25EO01BQ0Y7SUFDRjtFQUNGLENBQUM7RUFDRGpqQixjQUFjLEVBQUUsU0FBaEJBLGNBQWNBLENBQVc3SSxNQUFNLEVBQUU0RixTQUFTLEVBQUU7SUFDMUMsSUFBRzVGLE1BQU0sRUFBRTtNQUNULElBQU02cUIsWUFBWSxHQUFHN3FCLE1BQU0sQ0FBQ21CLEtBQUs7TUFDakMsSUFBTTJwQixhQUFhLEdBQUc5cUIsTUFBTSxDQUFDb0IsTUFBTTtNQUVuQyxJQUFHd0UsU0FBUyxFQUFFO1FBQ1pBLFNBQVMsQ0FBQ3pFLEtBQUssR0FBRzBwQixZQUFZO1FBQzlCamxCLFNBQVMsQ0FBQ3hFLE1BQU0sR0FBRzBwQixhQUFhO01BQ2xDO01BRUEsSUFBRyxDQUFDOXFCLE1BQU0sQ0FBQ2tyQixZQUFZLENBQUMsd0JBQXdCLENBQUMsSUFBSWxyQixNQUFNLENBQUNrckIsWUFBWSxDQUFDLHdCQUF3QixDQUFDLElBQUksT0FBTyxFQUFFO1FBQzdHbHJCLE1BQU0sQ0FBQytkLFlBQVksQ0FBQyx3QkFBd0IsRUFBRSxNQUFNLENBQUM7TUFDdkQsQ0FBQyxNQUFNO1FBQ0wvZCxNQUFNLENBQUMrZCxZQUFZLENBQUMsd0JBQXdCLEVBQUUsT0FBTyxDQUFDO01BQ3hEO01BRUEsSUFBSSxDQUFDd04sOEJBQThCLENBQUN2ckIsTUFBTSxFQUFFNEYsU0FBUyxDQUFDO0lBQ3hEO0VBQ0YsQ0FBQztFQUNENkQsV0FBVyxXQUFYQSxXQUFXQSxDQUFDekosTUFBTSxFQUFFdUosS0FBSyxFQUFFO0lBQ3pCLElBQU1taEIsSUFBSSxHQUFHMXFCLE1BQU0sQ0FBQzJxQixxQkFBcUIsQ0FBQyxDQUFDO0lBRTNDLE9BQU87TUFDTDVyQixDQUFDLEVBQUV3SyxLQUFLLENBQUM2aUIsT0FBTyxHQUFHMUIsSUFBSSxDQUFDMU0sSUFBSTtNQUM1QmhmLENBQUMsRUFBRXVLLEtBQUssQ0FBQzhpQixPQUFPLEdBQUczQixJQUFJLENBQUM0QjtJQUMxQixDQUFDO0VBQ0g7QUFDRixDQUFDLEU7Ozs7Ozs7Ozs7Ozs7O0FDdGpCRDtBQUNBO0FBQ0EsZ0NBQWdDLE9BQU87QUFDdkM7QUFDQTs7Ozs7Ozs7Ozs7Ozs7OztBQ0pxRDtBQUNyRDtBQUNBLCtCQUErQixnRUFBZ0I7QUFDL0M7Ozs7Ozs7Ozs7Ozs7OztBQ0hBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7QUNIQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDRnFFO0FBQ3BCO0FBQ2pEO0FBQ0EsTUFBTSx3RUFBd0I7QUFDOUI7QUFDQTtBQUNBO0FBQ0EsY0FBYyw4REFBYztBQUM1Qjs7Ozs7Ozs7Ozs7Ozs7OztBQ1IrQztBQUMvQztBQUNBLGtCQUFrQixjQUFjO0FBQ2hDO0FBQ0Esd0hBQXdILDZEQUFhO0FBQ3JJO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7Ozs7Ozs7Ozs7Ozs7Ozs7QUNYK0M7QUFDL0M7QUFDQSxjQUFjLDZEQUFhO0FBQzNCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIOzs7Ozs7Ozs7Ozs7Ozs7O0FDUitDO0FBQy9DO0FBQ0E7QUFDQSxZQUFZLDZEQUFhO0FBQ3pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIOzs7Ozs7Ozs7Ozs7Ozs7QUNUQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7Ozs7Ozs7Ozs7Ozs7Ozs7QUNKaUQ7QUFDakQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBLEdBQUcsUUFBUSw4REFBYztBQUN6Qjs7Ozs7Ozs7Ozs7Ozs7O0FDWkE7QUFDQTtBQUNBLHlGQUF5RjtBQUN6RixJQUFJO0FBQ0o7QUFDQTtBQUNBLEdBQUc7QUFDSDs7Ozs7Ozs7Ozs7Ozs7O0FDUEE7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7QUNGQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDRmtDO0FBQzZCO0FBQy9EO0FBQ0Esd0JBQXdCLHNEQUFPO0FBQy9CO0FBQ0EsU0FBUyxxRUFBcUI7QUFDOUI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDTitDO0FBQ0U7QUFDakQ7QUFDQTtBQUNBO0FBQ0EsVUFBVSw2REFBYTtBQUN2QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU0sS0FBSyw4REFBYztBQUN6QjtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7QUNwQkE7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIOzs7Ozs7Ozs7Ozs7Ozs7O0FDSmlEO0FBQ2pEO0FBQ0EsU0FBUyxHQUFHLDRDQUE0Qyw4REFBYyxLQUFLO0FBQzNFO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNKdUQ7QUFDSjtBQUNzQjtBQUNsQjtBQUN2RDtBQUNBLFNBQVMsaUVBQWlCLE9BQU8sK0RBQWUsT0FBTywwRUFBMEIsT0FBTyxpRUFBaUI7QUFDekc7Ozs7Ozs7Ozs7Ozs7Ozs7QUNOa0M7QUFDbEM7QUFDQSxrQkFBa0Isc0RBQU87QUFDekI7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CLHNEQUFPO0FBQzNCO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7OztBQ1ZrQztBQUNTO0FBQzNDO0FBQ0EsVUFBVSwyREFBVztBQUNyQixxQkFBcUIsc0RBQU87QUFDNUI7Ozs7Ozs7Ozs7Ozs7OztBQ0xBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBLEdBQUc7QUFDSDs7Ozs7Ozs7Ozs7Ozs7OztBQ1JxRDtBQUNyRDtBQUNBO0FBQ0EscUNBQXFDLGdFQUFnQjtBQUNyRCxjQUFjO0FBQ2QsK0xBQStMLGdFQUFnQjtBQUMvTTtBQUNBOzs7Ozs7O1VDUEE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0M1QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQSxFOzs7OztXQ1BBLHdGOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RCxFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNOQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDb0M7QUFDTjtBQUNVO0FBQ0E7QUFDZ0I7QUFDNUI7QUFDRjtBQUNFO0FBQ0E7QUFDRjtBQUNNO0FBQ0o7QUFDTTtBQUNNO0FBQ1Y7QUFDTTtBQUNZO0FBQ3hCO0FBQ1k7QUFDWjtBQUNzQjtBQUNsQjtBQUNBO0FBQ1E7QUFDZ0I7QUFDSTtBQUNoQztBQUNJO0FBQ0U7QUFDWTtBQUNvQjtBQUM1QjtBQUNKO0FBQ0U7QUFDSjtBQUNnQjtBQUNKIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vSlNHYW1lVG9vbHMvd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwid2VicGFjazovL0pTR2FtZVRvb2xzLy4vc3JjL0Fycm93LmpzIiwid2VicGFjazovL0pTR2FtZVRvb2xzLy4vc3JjL0JveC5qcyIsIndlYnBhY2s6Ly9KU0dhbWVUb29scy8uL3NyYy9CdXR0b24uanMiLCJ3ZWJwYWNrOi8vSlNHYW1lVG9vbHMvLi9zcmMvQnV0dG9uSW1hZ2UuanMiLCJ3ZWJwYWNrOi8vSlNHYW1lVG9vbHMvLi9zcmMvQ2FudmFzLmpzIiwid2VicGFjazovL0pTR2FtZVRvb2xzLy4vc3JjL0NpcmNsZS5qcyIsIndlYnBhY2s6Ly9KU0dhbWVUb29scy8uL3NyYy9Db2wuanMiLCJ3ZWJwYWNrOi8vSlNHYW1lVG9vbHMvLi9zcmMvQ29tcG9uZW50LmpzIiwid2VicGFjazovL0pTR2FtZVRvb2xzLy4vc3JjL0NvbnN0YW50cy5qcyIsIndlYnBhY2s6Ly9KU0dhbWVUb29scy8uL3NyYy9Db250YWluZXIuanMiLCJ3ZWJwYWNrOi8vSlNHYW1lVG9vbHMvLi9zcmMvQ3Jvc3MuanMiLCJ3ZWJwYWNrOi8vSlNHYW1lVG9vbHMvLi9zcmMvRWFzaW5nRnVuY3Rpb25zLmpzIiwid2VicGFjazovL0pTR2FtZVRvb2xzLy4vc3JjL0Vycm9yU2NyZWVuLmpzIiwid2VicGFjazovL0pTR2FtZVRvb2xzLy4vc3JjL0V2ZW50LmpzIiwid2VicGFjazovL0pTR2FtZVRvb2xzLy4vc3JjL0ZQU01ldGVyLmpzIiwid2VicGFjazovL0pTR2FtZVRvb2xzLy4vc3JjL0ltYWdlQ29udGFpbmVyLmpzIiwid2VicGFjazovL0pTR2FtZVRvb2xzLy4vc3JjL0ltYWdlTG9hZGVyLmpzIiwid2VicGFjazovL0pTR2FtZVRvb2xzLy4vc3JjL0lucHV0LmpzIiwid2VicGFjazovL0pTR2FtZVRvb2xzLy4vc3JjL0xhYmVsLmpzIiwid2VicGFjazovL0pTR2FtZVRvb2xzLy4vc3JjL0xpbmsuanMiLCJ3ZWJwYWNrOi8vSlNHYW1lVG9vbHMvLi9zcmMvTWVudS5qcyIsIndlYnBhY2s6Ly9KU0dhbWVUb29scy8uL3NyYy9Ob3RpZmljYXRpb25NZXNzYWdlLmpzIiwid2VicGFjazovL0pTR2FtZVRvb2xzLy4vc3JjL1Byb2dyZXNzQmFyLmpzIiwid2VicGFjazovL0pTR2FtZVRvb2xzLy4vc3JjL1JlYWN0b3IuanMiLCJ3ZWJwYWNrOi8vSlNHYW1lVG9vbHMvLi9zcmMvUmVhY3RvckNhbnZhcy5qcyIsIndlYnBhY2s6Ly9KU0dhbWVUb29scy8uL3NyYy9Sb3cuanMiLCJ3ZWJwYWNrOi8vSlNHYW1lVG9vbHMvLi9zcmMvU2NlbmUuanMiLCJ3ZWJwYWNrOi8vSlNHYW1lVG9vbHMvLi9zcmMvU2Nyb2xsYmFyLmpzIiwid2VicGFjazovL0pTR2FtZVRvb2xzLy4vc3JjL1Njcm9sbGJhckhvcml6b250YWwuanMiLCJ3ZWJwYWNrOi8vSlNHYW1lVG9vbHMvLi9zcmMvU2Nyb2xsYmFyVmVydGljYWwuanMiLCJ3ZWJwYWNrOi8vSlNHYW1lVG9vbHMvLi9zcmMvU2VsZWN0LmpzIiwid2VicGFjazovL0pTR2FtZVRvb2xzLy4vc3JjL1NlbGVjdE9wdGlvbi5qcyIsIndlYnBhY2s6Ly9KU0dhbWVUb29scy8uL3NyYy9TZWxlY3RPcHRpb25zQ29udGFpbmVyLmpzIiwid2VicGFjazovL0pTR2FtZVRvb2xzLy4vc3JjL1N0eWxlLmpzIiwid2VicGFjazovL0pTR2FtZVRvb2xzLy4vc3JjL1Rvb2x0aXAuanMiLCJ3ZWJwYWNrOi8vSlNHYW1lVG9vbHMvLi9zcmMvVHJpYW5nbGUuanMiLCJ3ZWJwYWNrOi8vSlNHYW1lVG9vbHMvLi9zcmMvVXRpbHMuanMiLCJ3ZWJwYWNrOi8vSlNHYW1lVG9vbHMvLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vYXJyYXlMaWtlVG9BcnJheS5qcyIsIndlYnBhY2s6Ly9KU0dhbWVUb29scy8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9hcnJheVdpdGhvdXRIb2xlcy5qcyIsIndlYnBhY2s6Ly9KU0dhbWVUb29scy8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQuanMiLCJ3ZWJwYWNrOi8vSlNHYW1lVG9vbHMvLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vY2xhc3NDYWxsQ2hlY2suanMiLCJ3ZWJwYWNrOi8vSlNHYW1lVG9vbHMvLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vY29uc3RydWN0LmpzIiwid2VicGFjazovL0pTR2FtZVRvb2xzLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL2NyZWF0ZUNsYXNzLmpzIiwid2VicGFjazovL0pTR2FtZVRvb2xzLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL2RlZmluZVByb3BlcnR5LmpzIiwid2VicGFjazovL0pTR2FtZVRvb2xzLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL2dldC5qcyIsIndlYnBhY2s6Ly9KU0dhbWVUb29scy8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9nZXRQcm90b3R5cGVPZi5qcyIsIndlYnBhY2s6Ly9KU0dhbWVUb29scy8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9pbmhlcml0cy5qcyIsIndlYnBhY2s6Ly9KU0dhbWVUb29scy8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9pc05hdGl2ZVJlZmxlY3RDb25zdHJ1Y3QuanMiLCJ3ZWJwYWNrOi8vSlNHYW1lVG9vbHMvLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vaXRlcmFibGVUb0FycmF5LmpzIiwid2VicGFjazovL0pTR2FtZVRvb2xzLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL25vbkl0ZXJhYmxlU3ByZWFkLmpzIiwid2VicGFjazovL0pTR2FtZVRvb2xzLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4uanMiLCJ3ZWJwYWNrOi8vSlNHYW1lVG9vbHMvLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vc2V0LmpzIiwid2VicGFjazovL0pTR2FtZVRvb2xzLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL3NldFByb3RvdHlwZU9mLmpzIiwid2VicGFjazovL0pTR2FtZVRvb2xzLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL3N1cGVyUHJvcEJhc2UuanMiLCJ3ZWJwYWNrOi8vSlNHYW1lVG9vbHMvLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vdG9Db25zdW1hYmxlQXJyYXkuanMiLCJ3ZWJwYWNrOi8vSlNHYW1lVG9vbHMvLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vdG9QcmltaXRpdmUuanMiLCJ3ZWJwYWNrOi8vSlNHYW1lVG9vbHMvLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vdG9Qcm9wZXJ0eUtleS5qcyIsIndlYnBhY2s6Ly9KU0dhbWVUb29scy8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS90eXBlb2YuanMiLCJ3ZWJwYWNrOi8vSlNHYW1lVG9vbHMvLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vdW5zdXBwb3J0ZWRJdGVyYWJsZVRvQXJyYXkuanMiLCJ3ZWJwYWNrOi8vSlNHYW1lVG9vbHMvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vSlNHYW1lVG9vbHMvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL0pTR2FtZVRvb2xzL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vSlNHYW1lVG9vbHMvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9KU0dhbWVUb29scy8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gd2VicGFja1VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24ocm9vdCwgZmFjdG9yeSkge1xuXHRpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcgJiYgdHlwZW9mIG1vZHVsZSA9PT0gJ29iamVjdCcpXG5cdFx0bW9kdWxlLmV4cG9ydHMgPSBmYWN0b3J5KCk7XG5cdGVsc2UgaWYodHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kKVxuXHRcdGRlZmluZShbXSwgZmFjdG9yeSk7XG5cdGVsc2UgaWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnKVxuXHRcdGV4cG9ydHNbXCJKU0dhbWVUb29sc1wiXSA9IGZhY3RvcnkoKTtcblx0ZWxzZVxuXHRcdHJvb3RbXCJKU0dhbWVUb29sc1wiXSA9IGZhY3RvcnkoKTtcbn0pKE9iamVjdCh0eXBlb2Ygc2VsZiAhPT0gXCJ1bmRlZmluZWRcIiA/IHNlbGYgOiB0aGlzKSwgKCkgPT4ge1xucmV0dXJuICIsIi8qXG4gKiBDb3B5cmlnaHQgKEMpIDIwMjAgRWxpYXN0aWsgKGVsaWFzdGlrc29mdHMuY29tKVxuICpcbiAqIFRoaXMgZmlsZSBpcyBwYXJ0IG9mIFwiSlNHYW1lVG9vbHNcIi5cbiAqXG4gKiBcIkpTR2FtZVRvb2xzXCIgaXMgZnJlZSBzb2Z0d2FyZTogeW91IGNhbiByZWRpc3RyaWJ1dGUgaXQgYW5kL29yIG1vZGlmeVxuICogaXQgdW5kZXIgdGhlIHRlcm1zIG9mIHRoZSBHTlUgR2VuZXJhbCBQdWJsaWMgTGljZW5zZSBhcyBwdWJsaXNoZWQgYnlcbiAqIHRoZSBGcmVlIFNvZnR3YXJlIEZvdW5kYXRpb24sIGVpdGhlciB2ZXJzaW9uIDMgb2YgdGhlIExpY2Vuc2UsIG9yXG4gKiAoYXQgeW91ciBvcHRpb24pIGFueSBsYXRlciB2ZXJzaW9uLlxuICpcbiAqIFwiSlNHYW1lVG9vbHNcIiBpcyBkaXN0cmlidXRlZCBpbiB0aGUgaG9wZSB0aGF0IGl0IHdpbGwgYmUgdXNlZnVsLFxuICogYnV0IFdJVEhPVVQgQU5ZIFdBUlJBTlRZOyB3aXRob3V0IGV2ZW4gdGhlIGltcGxpZWQgd2FycmFudHkgb2ZcbiAqIE1FUkNIQU5UQUJJTElUWSBvciBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRS4gIFNlZSB0aGVcbiAqIEdOVSBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlIGZvciBtb3JlIGRldGFpbHMuXG4gKlxuICogWW91IHNob3VsZCBoYXZlIHJlY2VpdmVkIGEgY29weSBvZiB0aGUgR05VIEdlbmVyYWwgUHVibGljIExpY2Vuc2VcbiAqIGFsb25nIHdpdGggXCJKU0dhbWVUb29sc1wiLiAgSWYgbm90LCBzZWUgPGh0dHA6Ly93d3cuZ251Lm9yZy9saWNlbnNlcy8+LlxuICovXG5pbXBvcnQgQ29tcG9uZW50IGZyb20gXCIuL0NvbXBvbmVudFwiO1xuaW1wb3J0IENvbnN0YW50cyBmcm9tIFwiLi9Db25zdGFudHNcIjtcbmltcG9ydCBTdHlsZSBmcm9tIFwiLi9TdHlsZVwiO1xuaW1wb3J0IFV0aWxzIGZyb20gXCIuL1V0aWxzXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEFycm93IGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgc2VsZWN0YWJsZSA9IGZhbHNlO1xuXG4gIGNvbnN0cnVjdG9yKHgsIHksIHRvWCwgdG9ZLCBzdHlsZSkge1xuICAgIHN1cGVyKHgsIHksIG51bGwsIG51bGwsIHN0eWxlKTtcblxuICAgIHRoaXMudG9YID0gdG9YO1xuICAgIHRoaXMudG9ZID0gdG9ZO1xuICB9XG5cbiAgZHJhdyhjb250ZXh0KSB7XG4gICAgaWYodGhpcy5oaWRkZW4pIHJldHVybjtcbiAgICBzdXBlci5kcmF3KGNvbnRleHQpO1xuXG4gICAgY29uc3QgY2FudmFzID0gY29udGV4dC5jYW52YXM7XG4gICAgY29uc3QgY3R4ID0gY2FudmFzLmdldENvbnRleHQoXCIyZFwiKTtcbiAgICBcbiAgICBVdGlscy5kcmF3QXJyb3coY3R4LCB0aGlzLngsIHRoaXMueSwgdGhpcy50b1gsIHRoaXMudG9ZLCB0aGlzLnN0eWxlLmxpbmVXaWR0aCwgdGhpcy5zdHlsZS5oZWFkU2l6ZSwgdGhpcy5zdHlsZS5jb2xvciwgdGhpcy5zdHlsZS5saW5lQ2FwKTtcblxuICAgIHRoaXMuaW5pdCA9IHRydWU7XG4gIH1cblxuICBnZXQgd2lkdGgoKSB7XG4gICAgcmV0dXJuIE1hdGguYWJzKHRoaXMueCAtIHRoaXMudG9YKTtcbiAgfVxuXG4gIGdldCBoZWlnaHQoKSB7XG4gICAgcmV0dXJuIE1hdGguYWJzKHRoaXMueSAtIHRoaXMudG9ZKTtcbiAgfVxuXG4gIGdldCBkZWZhdWx0U3R5bGUoKSB7XG4gICAgcmV0dXJuIG5ldyBTdHlsZSh7XG4gICAgICBcImxpbmVXaWR0aFwiOiBDb25zdGFudHMuU2V0dGluZy5BUlJPV19ERUZBVUxUX0xJTkVfU0laRSxcbiAgICAgIFwiaGVhZFNpemVcIjogQ29uc3RhbnRzLlNldHRpbmcuQVJST1dfREVGQVVMVF9IRUFEX1NJWkUsXG4gICAgICBcImNvbG9yXCI6IENvbnN0YW50cy5TZXR0aW5nLkFSUk9XX0RFRkFVTFRfQ09MT1IsXG4gICAgICBcImxpbmVDYXBcIjogQ29uc3RhbnRzLlNldHRpbmcuQVJST1dfREVGQVVMVF9MSU5FX0NBUFxuICAgIH0pO1xuICB9XG59IiwiLypcbiAqIENvcHlyaWdodCAoQykgMjAyMCBFbGlhc3RpayAoZWxpYXN0aWtzb2Z0cy5jb20pXG4gKlxuICogVGhpcyBmaWxlIGlzIHBhcnQgb2YgXCJKU0dhbWVUb29sc1wiLlxuICpcbiAqIFwiSlNHYW1lVG9vbHNcIiBpcyBmcmVlIHNvZnR3YXJlOiB5b3UgY2FuIHJlZGlzdHJpYnV0ZSBpdCBhbmQvb3IgbW9kaWZ5XG4gKiBpdCB1bmRlciB0aGUgdGVybXMgb2YgdGhlIEdOVSBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlIGFzIHB1Ymxpc2hlZCBieVxuICogdGhlIEZyZWUgU29mdHdhcmUgRm91bmRhdGlvbiwgZWl0aGVyIHZlcnNpb24gMyBvZiB0aGUgTGljZW5zZSwgb3JcbiAqIChhdCB5b3VyIG9wdGlvbikgYW55IGxhdGVyIHZlcnNpb24uXG4gKlxuICogXCJKU0dhbWVUb29sc1wiIGlzIGRpc3RyaWJ1dGVkIGluIHRoZSBob3BlIHRoYXQgaXQgd2lsbCBiZSB1c2VmdWwsXG4gKiBidXQgV0lUSE9VVCBBTlkgV0FSUkFOVFk7IHdpdGhvdXQgZXZlbiB0aGUgaW1wbGllZCB3YXJyYW50eSBvZlxuICogTUVSQ0hBTlRBQklMSVRZIG9yIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFLiAgU2VlIHRoZVxuICogR05VIEdlbmVyYWwgUHVibGljIExpY2Vuc2UgZm9yIG1vcmUgZGV0YWlscy5cbiAqXG4gKiBZb3Ugc2hvdWxkIGhhdmUgcmVjZWl2ZWQgYSBjb3B5IG9mIHRoZSBHTlUgR2VuZXJhbCBQdWJsaWMgTGljZW5zZVxuICogYWxvbmcgd2l0aCBcIkpTR2FtZVRvb2xzXCIuICBJZiBub3QsIHNlZSA8aHR0cDovL3d3dy5nbnUub3JnL2xpY2Vuc2VzLz4uXG4gKi9cbmltcG9ydCBDb21wb25lbnQgZnJvbSBcIi4vQ29tcG9uZW50XCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEJveCBleHRlbmRzIENvbXBvbmVudCB7XG4gIHNlbGVjdGFibGUgPSBmYWxzZTtcblxuICBjb25zdHJ1Y3Rvcih4LCB5LCB3aWR0aCwgaGVpZ2h0LCBzdHlsZSkge1xuICAgIHN1cGVyKHgsIHksIHdpZHRoLCBoZWlnaHQsIHN0eWxlKTtcbiAgfVxuICBcbiAgZHJhdyhjb250ZXh0KSB7XG4gICAgaWYodGhpcy5oaWRkZW4pIHJldHVybjtcbiAgICBzdXBlci5kcmF3KGNvbnRleHQpO1xuXG4gICAgY29uc3QgY2FudmFzID0gY29udGV4dC5jYW52YXM7XG4gICAgY29uc3QgY3R4ID0gY2FudmFzLmdldENvbnRleHQoXCIyZFwiKTtcbiAgICBjdHguc2F2ZSgpO1xuXG4gICAgdGhpcy5kcmF3QmFja2dyb3VuZChjdHgpO1xuICAgIHRoaXMuZHJhd0JvcmRlcihjdHgpO1xuICAgIFxuICAgIGN0eC5yZXN0b3JlKCk7XG4gIH1cblxuICBkcmF3QmFja2dyb3VuZChjdHgpIHtcbiAgICBjb25zdCBjb2xvciA9IHRoaXMuYmFja2dyb3VuZENvbG9yO1xuXG4gICAgaWYoY29sb3IpIHtcbiAgICAgIGN0eC5zYXZlKCk7XG4gIFxuICAgICAgY3R4LmZpbGxTdHlsZSA9IGNvbG9yO1xuICAgICAgY3R4LmZpbGxSZWN0KE1hdGgucm91bmQodGhpcy54KSwgTWF0aC5yb3VuZCh0aGlzLnkpLCBNYXRoLnJvdW5kKHRoaXMud2lkdGgpLCBNYXRoLnJvdW5kKHRoaXMuaGVpZ2h0KSk7XG5cbiAgICAgIGN0eC5yZXN0b3JlKCk7XG4gICAgfVxuICB9XG5cbiAgZ2V0IGJhY2tncm91bmRDb2xvcigpIHtcbiAgICBsZXQgY29sb3IgPSBudWxsO1xuXG4gICAgaWYodGhpcy5ob3ZlcmVkICYmIHRoaXMuY2xpY2tlZCAmJiB0aGlzLnN0eWxlLmJhY2tncm91bmRDb2xvckRvd24gIT0gbnVsbCkge1xuICAgICAgY29sb3IgPSB0aGlzLnN0eWxlLmJhY2tncm91bmRDb2xvckRvd247XG4gICAgfSBlbHNlIGlmKHRoaXMuaG92ZXJlZCAmJiB0aGlzLnN0eWxlLmJhY2tncm91bmRDb2xvckhvdmVyICE9IG51bGwpIHtcbiAgICAgIGNvbG9yID0gdGhpcy5zdHlsZS5iYWNrZ3JvdW5kQ29sb3JIb3ZlcjtcbiAgICB9IGVsc2Uge1xuICAgICAgY29sb3IgPSB0aGlzLnN0eWxlLmJhY2tncm91bmRDb2xvcjtcbiAgICB9XG5cbiAgICByZXR1cm4gY29sb3I7XG4gIH1cblxuICBkcmF3Qm9yZGVyKGN0eCkge1xuICAgIGNvbnN0IGNvbG9yID0gdGhpcy5ib3JkZXJDb2xvcjtcblxuICAgIGlmKGNvbG9yICYmIHRoaXMuc3R5bGUuYm9yZGVyU2l6ZSA+IDApIHtcbiAgICAgIGN0eC5zYXZlKCk7XG4gICAgICBcbiAgICAgIGN0eC5zdHJva2VTdHlsZSA9IGNvbG9yO1xuICAgICAgY3R4LmxpbmVXaWR0aCA9IHRoaXMuc3R5bGUuYm9yZGVyU2l6ZTtcbiAgICAgIFxuICAgICAgY3R4LnN0cm9rZVJlY3QoTWF0aC5yb3VuZCh0aGlzLngpLCBNYXRoLnJvdW5kKHRoaXMueSksIE1hdGgucm91bmQodGhpcy53aWR0aCAtIHRoaXMuc3R5bGUuYm9yZGVyU2l6ZSAvIDIpLCBNYXRoLnJvdW5kKHRoaXMuaGVpZ2h0IC0gdGhpcy5zdHlsZS5ib3JkZXJTaXplIC8gMikpO1xuICBcbiAgICAgIGN0eC5yZXN0b3JlKCk7XG4gICAgfVxuICB9XG5cbiAgZ2V0IGJvcmRlckNvbG9yKCkge1xuICAgIGxldCBjb2xvciA9IG51bGw7XG5cbiAgICBpZih0aGlzLmNsaWNrZWQgJiYgdGhpcy5ob3ZlcmVkICYmIHRoaXMuc3R5bGUuYm9yZGVyQ29sb3JEb3duICE9IG51bGwpIHtcbiAgICAgIGNvbG9yID0gdGhpcy5zdHlsZS5ib3JkZXJDb2xvckRvd247XG4gICAgfSBlbHNlIGlmKCF0aGlzLmNsaWNrZWQgJiYgdGhpcy5ob3ZlcmVkICYmIHRoaXMuc3R5bGUuYm9yZGVyQ29sb3JIb3ZlciAhPSBudWxsKSB7XG4gICAgICBjb2xvciA9IHRoaXMuc3R5bGUuYm9yZGVyQ29sb3JIb3ZlcjtcbiAgICB9IGVsc2UgaWYodGhpcy5zZWxlY3RhYmxlICYmIHRoaXMuc2VsZWN0ZWQgJiYgdGhpcy5zdHlsZS5ib3JkZXJDb2xvclNlbGVjdGVkICE9IG51bGwpIHtcbiAgICAgIGNvbG9yID0gdGhpcy5zdHlsZS5ib3JkZXJDb2xvclNlbGVjdGVkO1xuICAgIH0gZWxzZSB7XG4gICAgICBjb2xvciA9IHRoaXMuc3R5bGUuYm9yZGVyQ29sb3I7XG4gICAgfVxuXG4gICAgcmV0dXJuIGNvbG9yO1xuICB9XG59IiwiLypcbiAqIENvcHlyaWdodCAoQykgMjAyMCBFbGlhc3RpayAoZWxpYXN0aWtzb2Z0cy5jb20pXG4gKlxuICogVGhpcyBmaWxlIGlzIHBhcnQgb2YgXCJKU0dhbWVUb29sc1wiLlxuICpcbiAqIFwiSlNHYW1lVG9vbHNcIiBpcyBmcmVlIHNvZnR3YXJlOiB5b3UgY2FuIHJlZGlzdHJpYnV0ZSBpdCBhbmQvb3IgbW9kaWZ5XG4gKiBpdCB1bmRlciB0aGUgdGVybXMgb2YgdGhlIEdOVSBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlIGFzIHB1Ymxpc2hlZCBieVxuICogdGhlIEZyZWUgU29mdHdhcmUgRm91bmRhdGlvbiwgZWl0aGVyIHZlcnNpb24gMyBvZiB0aGUgTGljZW5zZSwgb3JcbiAqIChhdCB5b3VyIG9wdGlvbikgYW55IGxhdGVyIHZlcnNpb24uXG4gKlxuICogXCJKU0dhbWVUb29sc1wiIGlzIGRpc3RyaWJ1dGVkIGluIHRoZSBob3BlIHRoYXQgaXQgd2lsbCBiZSB1c2VmdWwsXG4gKiBidXQgV0lUSE9VVCBBTlkgV0FSUkFOVFk7IHdpdGhvdXQgZXZlbiB0aGUgaW1wbGllZCB3YXJyYW50eSBvZlxuICogTUVSQ0hBTlRBQklMSVRZIG9yIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFLiAgU2VlIHRoZVxuICogR05VIEdlbmVyYWwgUHVibGljIExpY2Vuc2UgZm9yIG1vcmUgZGV0YWlscy5cbiAqXG4gKiBZb3Ugc2hvdWxkIGhhdmUgcmVjZWl2ZWQgYSBjb3B5IG9mIHRoZSBHTlUgR2VuZXJhbCBQdWJsaWMgTGljZW5zZVxuICogYWxvbmcgd2l0aCBcIkpTR2FtZVRvb2xzXCIuICBJZiBub3QsIHNlZSA8aHR0cDovL3d3dy5nbnUub3JnL2xpY2Vuc2VzLz4uXG4gKi9cbmltcG9ydCBSb3cgZnJvbSBcIi4vUm93XCI7XG5pbXBvcnQgQ29uc3RhbnRzIGZyb20gXCIuL0NvbnN0YW50c1wiO1xuaW1wb3J0IFN0eWxlIGZyb20gXCIuL1N0eWxlXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEJ1dHRvbiBleHRlbmRzIFJvdyB7XG4gIHNlbGVjdGFibGUgPSB0cnVlO1xuXG4gIGNvbnN0cnVjdG9yKHgsIHksIG1heFdpZHRoLCBtYXhIZWlnaHQsIHN0eWxlLCAuLi5jb21wb25lbnRzKSB7XG4gICAgc3VwZXIoeCwgeSwgbWF4V2lkdGgsIG1heEhlaWdodCwgc3R5bGUsIC4uLmNvbXBvbmVudHMpO1xuICB9XG4gIFxuICBkcmF3KGNvbnRleHQpIHtcbiAgICBpZih0aGlzLmhpZGRlbikgcmV0dXJuO1xuICAgIHN1cGVyLmRyYXcoY29udGV4dCk7XG5cbiAgICBjb25zdCBjYW52YXMgPSBjb250ZXh0LmNhbnZhcztcbiAgICBjb25zdCBjdHggPSBjYW52YXMuZ2V0Q29udGV4dChcIjJkXCIpO1xuICAgIGN0eC5zYXZlKCk7XG4gICAgXG4gICAgdGhpcy5kcmF3Q29tcG9uZW50cyhjdHgpO1xuICAgIFxuICAgIGN0eC5yZXN0b3JlKCk7XG4gIH1cblxuICBkcmF3Q29tcG9uZW50cyhjdHgpIHtcbiAgICBzdXBlci5kcmF3KGN0eCk7XG4gIH1cblxuICBnZXQgaGVpZ2h0KCkge1xuICAgIHJldHVybiAodGhpcy5tYXhIZWlnaHQgfHwgc3VwZXIuaGVpZ2h0KSArIHRoaXMuc3R5bGUucGFkZGluZztcbiAgfVxuXG4gIGdldCB3aWR0aCgpIHtcbiAgICByZXR1cm4gKHRoaXMubWF4V2lkdGggfHwgc3VwZXIud2lkdGgpICsgdGhpcy5zdHlsZS5wYWRkaW5nO1xuICB9XG5cbiAgZ2V0IGRlZmF1bHRTdHlsZSgpIHtcbiAgICByZXR1cm4gbmV3IFN0eWxlKHtcbiAgICAgIFwiYmFja2dyb3VuZENvbG9yXCI6IENvbnN0YW50cy5TZXR0aW5nLkJVVFRPTl9ERUZBVUxUX0JBQ0tHUk9VTkQsXG4gICAgICBcImJhY2tncm91bmRDb2xvckhvdmVyXCI6IENvbnN0YW50cy5TZXR0aW5nLkJVVFRPTl9ERUZBVUxUX0hPVkVSX0JBQ0tHUk9VTkQsXG4gICAgICBcImJhY2tncm91bmRDb2xvckRvd25cIjogQ29uc3RhbnRzLlNldHRpbmcuQlVUVE9OX0RFRkFVTFRfQ0xJQ0tfQkFDS0dST1VORCxcbiAgICAgIFwic2Nyb2xsWERpc2FibGVkXCI6IHRydWUsXG4gICAgICBcInNjcm9sbFlEaXNhYmxlZFwiOiB0cnVlXG4gICAgfSk7XG4gIH1cbn0iLCIvKlxuICogQ29weXJpZ2h0IChDKSAyMDIwIEVsaWFzdGlrIChlbGlhc3Rpa3NvZnRzLmNvbSlcbiAqXG4gKiBUaGlzIGZpbGUgaXMgcGFydCBvZiBcIkpTR2FtZVRvb2xzXCIuXG4gKlxuICogXCJKU0dhbWVUb29sc1wiIGlzIGZyZWUgc29mdHdhcmU6IHlvdSBjYW4gcmVkaXN0cmlidXRlIGl0IGFuZC9vciBtb2RpZnlcbiAqIGl0IHVuZGVyIHRoZSB0ZXJtcyBvZiB0aGUgR05VIEdlbmVyYWwgUHVibGljIExpY2Vuc2UgYXMgcHVibGlzaGVkIGJ5XG4gKiB0aGUgRnJlZSBTb2Z0d2FyZSBGb3VuZGF0aW9uLCBlaXRoZXIgdmVyc2lvbiAzIG9mIHRoZSBMaWNlbnNlLCBvclxuICogKGF0IHlvdXIgb3B0aW9uKSBhbnkgbGF0ZXIgdmVyc2lvbi5cbiAqXG4gKiBcIkpTR2FtZVRvb2xzXCIgaXMgZGlzdHJpYnV0ZWQgaW4gdGhlIGhvcGUgdGhhdCBpdCB3aWxsIGJlIHVzZWZ1bCxcbiAqIGJ1dCBXSVRIT1VUIEFOWSBXQVJSQU5UWTsgd2l0aG91dCBldmVuIHRoZSBpbXBsaWVkIHdhcnJhbnR5IG9mXG4gKiBNRVJDSEFOVEFCSUxJVFkgb3IgRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UuICBTZWUgdGhlXG4gKiBHTlUgR2VuZXJhbCBQdWJsaWMgTGljZW5zZSBmb3IgbW9yZSBkZXRhaWxzLlxuICpcbiAqIFlvdSBzaG91bGQgaGF2ZSByZWNlaXZlZCBhIGNvcHkgb2YgdGhlIEdOVSBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlXG4gKiBhbG9uZyB3aXRoIFwiSlNHYW1lVG9vbHNcIi4gIElmIG5vdCwgc2VlIDxodHRwOi8vd3d3LmdudS5vcmcvbGljZW5zZXMvPi5cbiAqL1xuaW1wb3J0IEltYWdlQ29udGFpbmVyIGZyb20gXCIuL0ltYWdlQ29udGFpbmVyXCI7XG5pbXBvcnQgQnV0dG9uIGZyb20gXCIuL0J1dHRvblwiO1xuaW1wb3J0IFN0eWxlIGZyb20gXCIuL1N0eWxlXCI7XG5pbXBvcnQgQ29uc3RhbnRzIGZyb20gXCIuL0NvbnN0YW50c1wiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBCdXR0b25JbWFnZSBleHRlbmRzIEJ1dHRvbiB7XG4gIGNvbnN0cnVjdG9yKGltZ1NyYywgeCwgeSwgYWxpZ25lbWVudCwgdmVydGljYWxBbGlnbmVtZW50LCB3aWR0aCwgaGVpZ2h0LCBiYWNrZ3JvdW5kQ29sb3IsIGJhY2tncm91bmRDb2xvckhvdmVyLCBpbWFnZUxvYWRlcikge1xuICAgIGNvbnN0IHN0eWxlID0gbmV3IFN0eWxlKHtcbiAgICAgIFwiYWxpZ25lbWVudFwiOiBhbGlnbmVtZW50LFxuICAgICAgXCJ2ZXJ0aWNhbEFsaWduZW1lbnRcIjogdmVydGljYWxBbGlnbmVtZW50LFxuICAgICAgXCJiYWNrZ3JvdW5kQ29sb3JcIjogYmFja2dyb3VuZENvbG9yIHx8IENvbnN0YW50cy5TZXR0aW5nLkJVVFRPTl9ERUZBVUxUX0JBQ0tHUk9VTkQsXG4gICAgICBcImJhY2tncm91bmRDb2xvckhvdmVyXCI6IGJhY2tncm91bmRDb2xvckhvdmVyIHx8IENvbnN0YW50cy5TZXR0aW5nLkJVVFRPTl9ERUZBVUxUX0hPVkVSX0JBQ0tHUk9VTkRcbiAgICB9KTtcblxuICAgIHN1cGVyKHgsIHksIHdpZHRoLCBoZWlnaHQsIHN0eWxlKTtcbiAgICB0aGlzLmltYWdlID0gbmV3IEltYWdlQ29udGFpbmVyKGltZ1NyYywgeCwgeSwgd2lkdGgsIGhlaWdodCwgbmV3IFN0eWxlKHsgXCJhbGlnbmVtZW50XCI6IFwiY2VudGVyXCIsIFwidmVydGljYWxBbGlnbmVtZW50XCI6IFwiY2VudGVyXCIgfSksIGltYWdlTG9hZGVyKTtcbiAgICB0aGlzLmFkZCh0aGlzLmltYWdlKTtcblxuICAgIGNvbnNvbGUgJiYgY29uc29sZS53YXJuICYmIGNvbnNvbGUud2FybihDb25zdGFudHMuU3RyaW5nLk5PVElDRV9NRVNTQUdFICsgXCIgXCIgKyBDb25zdGFudHMuU3RyaW5nLkJVVFRPTl9JTUFHRV9ERVBSRUNBVEVEKTtcbiAgfVxuXG4gIGxvYWRJbWFnZShpbWFnZUxvYWRlcikge1xuICAgIGlmKHRoaXMuY29tcG9uZW50c1swXSBpbnN0YW5jZW9mIEltYWdlQ29udGFpbmVyKSB0aGlzLmNvbXBvbmVudHNbMF0ubG9hZEltYWdlKGltYWdlTG9hZGVyKTtcbiAgfVxuXG4gIHNldCBtaW5XaWR0aCh3aWR0aCkge1xuICAgIHRoaXMuaW1hZ2Uud2lkdGggPSB3aWR0aDtcbiAgICBzdXBlci5taW5XaWR0aCA9IHdpZHRoO1xuICB9XG5cbiAgc2V0IG1pbkhlaWdodChoZWlnaHQpIHtcbiAgICB0aGlzLmltYWdlLmhlaWdodCA9IGhlaWdodDtcbiAgICBzdXBlci5taW5IZWlnaHQgPSBoZWlnaHQ7XG4gIH1cblxuICBnZXQgbWluV2lkdGgoKSB7XG4gICAgcmV0dXJuIHN1cGVyLm1pbldpZHRoO1xuICB9XG5cbiAgZ2V0IG1pbkhlaWdodCgpIHtcbiAgICByZXR1cm4gc3VwZXIubWluSGVpZ2h0O1xuICB9XG5cbiAgc2V0IG1heFdpZHRoKHdpZHRoKSB7XG4gICAgdGhpcy5pbWFnZS53aWR0aCA9IHdpZHRoO1xuICAgIHN1cGVyLm1heFdpZHRoID0gd2lkdGg7XG4gIH1cblxuICBzZXQgbWF4SGVpZ2h0KGhlaWdodCkge1xuICAgIHRoaXMuaW1hZ2UuaGVpZ2h0ID0gaGVpZ2h0O1xuICAgIHN1cGVyLm1heEhlaWdodCA9IGhlaWdodDtcbiAgfVxuXG4gIGdldCBtYXhXaWR0aCgpIHtcbiAgICByZXR1cm4gc3VwZXIubWF4V2lkdGg7XG4gIH1cblxuICBnZXQgbWF4SGVpZ2h0KCkge1xuICAgIHJldHVybiBzdXBlci5tYXhIZWlnaHQ7XG4gIH1cblxuICBzZXQgd2lkdGgod2lkdGgpIHtcbiAgICB0aGlzLm1pbldpZHRoID0gd2lkdGg7XG4gICAgdGhpcy5tYXhXaWR0aCA9IHdpZHRoO1xuICB9XG5cbiAgZ2V0IHdpZHRoKCkge1xuICAgIHJldHVybiBzdXBlci53aWR0aDtcbiAgfVxuXG4gIHNldCBoZWlnaHQoaGVpZ2h0KSB7XG4gICAgdGhpcy5taW5IZWlnaHQgPSBoZWlnaHQ7XG4gICAgdGhpcy5tYXhIZWlnaHQgPSBoZWlnaHQ7XG4gIH1cblxuICBnZXQgaGVpZ2h0KCkge1xuICAgIHJldHVybiBzdXBlci5oZWlnaHQ7XG4gIH1cbn0iLCIvKlxuICogQ29weXJpZ2h0IChDKSAyMDIwIEVsaWFzdGlrIChlbGlhc3Rpa3NvZnRzLmNvbSlcbiAqXG4gKiBUaGlzIGZpbGUgaXMgcGFydCBvZiBcIkpTR2FtZVRvb2xzXCIuXG4gKlxuICogXCJKU0dhbWVUb29sc1wiIGlzIGZyZWUgc29mdHdhcmU6IHlvdSBjYW4gcmVkaXN0cmlidXRlIGl0IGFuZC9vciBtb2RpZnlcbiAqIGl0IHVuZGVyIHRoZSB0ZXJtcyBvZiB0aGUgR05VIEdlbmVyYWwgUHVibGljIExpY2Vuc2UgYXMgcHVibGlzaGVkIGJ5XG4gKiB0aGUgRnJlZSBTb2Z0d2FyZSBGb3VuZGF0aW9uLCBlaXRoZXIgdmVyc2lvbiAzIG9mIHRoZSBMaWNlbnNlLCBvclxuICogKGF0IHlvdXIgb3B0aW9uKSBhbnkgbGF0ZXIgdmVyc2lvbi5cbiAqXG4gKiBcIkpTR2FtZVRvb2xzXCIgaXMgZGlzdHJpYnV0ZWQgaW4gdGhlIGhvcGUgdGhhdCBpdCB3aWxsIGJlIHVzZWZ1bCxcbiAqIGJ1dCBXSVRIT1VUIEFOWSBXQVJSQU5UWTsgd2l0aG91dCBldmVuIHRoZSBpbXBsaWVkIHdhcnJhbnR5IG9mXG4gKiBNRVJDSEFOVEFCSUxJVFkgb3IgRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UuICBTZWUgdGhlXG4gKiBHTlUgR2VuZXJhbCBQdWJsaWMgTGljZW5zZSBmb3IgbW9yZSBkZXRhaWxzLlxuICpcbiAqIFlvdSBzaG91bGQgaGF2ZSByZWNlaXZlZCBhIGNvcHkgb2YgdGhlIEdOVSBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlXG4gKiBhbG9uZyB3aXRoIFwiSlNHYW1lVG9vbHNcIi4gIElmIG5vdCwgc2VlIDxodHRwOi8vd3d3LmdudS5vcmcvbGljZW5zZXMvPi5cbiAqL1xuaW1wb3J0IENvbnN0YW50cyBmcm9tIFwiLi9Db25zdGFudHNcIjtcbmltcG9ydCBVdGlscyBmcm9tIFwiLi9VdGlsc1wiO1xuaW1wb3J0IFNjZW5lIGZyb20gXCIuL1NjZW5lXCI7XG5pbXBvcnQgUmVhY3RvckNhbnZhcyBmcm9tIFwiLi9SZWFjdG9yQ2FudmFzXCI7XG5pbXBvcnQgRXJyb3JTY3JlZW4gZnJvbSBcIi4vRXJyb3JTY3JlZW5cIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ2FudmFzIHtcbiAgI2xhc3RGcmFtZVRpbWU7XG4gICNfd2lkdGg7XG4gICNfaGVpZ2h0O1xuXG4gIGNvbnN0cnVjdG9yKHNjZW5lLCBjYW52YXMsIHdpZHRoLCBoZWlnaHQsIGF1dG9SZXNpemUsIG1heEZQUykge1xuICAgIHRoaXMuY2FudmFzID0gY2FudmFzIHx8IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJjYW52YXNcIik7XG4gICAgdGhpcy5jb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIHRoaXMud2lkdGggPSB3aWR0aCB8fCBDb25zdGFudHMuU2V0dGluZy5DQU5WQVNfV0lEVEg7XG4gICAgdGhpcy5oZWlnaHQgPSBoZWlnaHQgfHwgQ29uc3RhbnRzLlNldHRpbmcuQ0FOVkFTX0hFSUdIVDtcbiAgICB0aGlzLnNjZW5lID0gc2NlbmU7XG4gICAgdGhpcy5jb250YWluZXIuYXBwZW5kQ2hpbGQodGhpcy5jYW52YXMpO1xuICAgIHRoaXMuc3RhcnRlZCA9IGZhbHNlO1xuICAgIHRoaXMuaW5pdCA9IGZhbHNlO1xuICAgIHRoaXMubWF4RlBTID0gbWF4RlBTIHx8IC0xO1xuICAgIHRoaXMuI2xhc3RGcmFtZVRpbWUgPSAwO1xuICAgIHRoaXMuaGFzRXJyb3IgPSBmYWxzZTtcbiAgICB0aGlzLmZ1bGxzY3JlZW4gPSBmYWxzZTtcbiAgICB0aGlzLmZ1bGxwYWdlID0gZmFsc2U7XG5cbiAgICAvLyBFcnJvciBtZXNzYWdlIHNjcmVlblxuICAgIHRoaXMuc2NlbmVFcnJvciA9IG5ldyBFcnJvclNjcmVlbih0aGlzKTtcbiAgICB0aGlzLnNjZW5lUHJldmlvdXMgPSB0aGlzLnNjZW5lO1xuICAgIFxuICAgIC8vIFJlYWN0b3JzL2V2ZW50c1xuICAgIHRoaXMucmVhY3RvciA9IG5ldyBSZWFjdG9yQ2FudmFzKCk7XG4gICAgdGhpcy5yZWFjdG9yLnJlZ2lzdGVyRXZlbnQoXCJtb3VzZW1vdmVcIik7XG4gICAgdGhpcy5yZWFjdG9yLnJlZ2lzdGVyRXZlbnQoXCJjbGlja1wiKTtcbiAgICB0aGlzLnJlYWN0b3IucmVnaXN0ZXJFdmVudChcIm1vdXNlZG93blwiKTtcbiAgICB0aGlzLnJlYWN0b3IucmVnaXN0ZXJFdmVudChcIm1vdXNldXBcIik7XG4gICAgdGhpcy5yZWFjdG9yLnJlZ2lzdGVyRXZlbnQoXCJ3aGVlbFwiKTtcbiAgICB0aGlzLnJlYWN0b3IucmVnaXN0ZXJFdmVudChcInRvdWNoc3RhcnRcIik7XG4gICAgdGhpcy5yZWFjdG9yLnJlZ2lzdGVyRXZlbnQoXCJ0b3VjaGVuZFwiKTtcbiAgICB0aGlzLnJlYWN0b3IucmVnaXN0ZXJFdmVudChcInRvdWNobW92ZVwiKTtcblxuICAgIGlmKGF1dG9SZXNpemUpIHRoaXMuYXV0b1Jlc2l6ZSgpO1xuICAgIHRoaXMuY3JlYXRlRXZlbnRzKCk7XG5cbiAgICBpZihDb25zdGFudHMuU2V0dGluZy5ESVNBQkxFX09QVElNSVpBVElPTlMpIHtcbiAgICAgIGNvbnNvbGUgJiYgY29uc29sZS5pbmZvKENvbnN0YW50cy5TdHJpbmcuTk9USUNFX01FU1NBR0UgKyBcIiBcIiArIENvbnN0YW50cy5TdHJpbmcuT1BUSU1JWkFUSU9OX0RJU0FCTEVEKTtcbiAgICB9XG5cbiAgICBpZihDb25zdGFudHMuU2V0dGluZy5ESVNBQkxFX0NPTlRBSU5FUlNfQ1VUVElORykge1xuICAgICAgY29uc29sZSAmJiBjb25zb2xlLmluZm8oQ29uc3RhbnRzLlN0cmluZy5OT1RJQ0VfTUVTU0FHRSArIFwiIFwiICsgQ29uc3RhbnRzLlN0cmluZy5DT05UQUlORVJfQ1VUVElOR19ESVNBQkxFRCk7XG4gICAgfVxuICB9XG5cbiAgZHJhdygpIHtcbiAgICBjb25zdCBjdHggPSB0aGlzLmNhbnZhcy5nZXRDb250ZXh0KFwiMmRcIik7XG4gICAgdGhpcy5kcmF3Q2xlYXIoY3R4KTtcbiAgICB0aGlzLmRyYXdTY2VuZShjdHgpO1xuICB9XG5cbiAgZHJhd1NjZW5lKGN0eCkge1xuICAgIGlmKHRoaXMuc2NlbmUpIHtcbiAgICAgIHRoaXMuc2NlbmUucGFyZW50ID0gdGhpcztcbiAgICAgIHRoaXMuc2NlbmUuY2FudmFzID0gdGhpcztcblxuICAgICAgdHJ5IHtcbiAgICAgICAgY3R4LnNjYWxlKENvbnN0YW50cy5TZXR0aW5nLlBJWEVMX1JBVElPLCBDb25zdGFudHMuU2V0dGluZy5QSVhFTF9SQVRJTyk7XG4gICAgICAgIHRoaXMuc2NlbmUuZHJhdyhjdHgpO1xuICAgICAgfSBjYXRjaChlKSB7XG4gICAgICAgIHRoaXMuaGFzRXJyb3IgPSB0cnVlO1xuICAgICAgICB0aGlzLnNjZW5lID0gdGhpcy5zY2VuZUVycm9yO1xuICAgICAgICB0aGlzLnNjZW5lRXJyb3IuZXJyb3JUZXh0ID0gXCJcIiArIGUuc3RhY2s7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoQ29uc3RhbnRzLlN0cmluZy5FUlJPUl9NRVNTQUdFICsgXCIgXCIgKyBDb25zdGFudHMuU3RyaW5nLkVSUk9SX01FU1NBR0VfQ0FOVkFTICsgXCJcXG5cIiwgZSk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgZHJhd0NsZWFyKGN0eCkge1xuICAgIFV0aWxzLmNsZWFyKGN0eCk7XG4gIH1cblxuICBzdGFydERyYXcoZnVuYykge1xuICAgIHRoaXMuc3RhcnRlZCA9IHRydWU7XG5cbiAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUodGltZSA9PiB7XG4gICAgICBpZih0aGlzLnN0YXJ0ZWQpIHtcbiAgICAgICAgY29uc3Qgb2Zmc2V0RnJhbWUgPSB0aW1lIC0gdGhpcy4jbGFzdEZyYW1lVGltZTtcblxuICAgICAgICB0aGlzLmZ1bGxzY3JlZW4gPSBkb2N1bWVudC5mdWxsc2NyZWVuRWxlbWVudCA9PSB0aGlzLmNhbnZhcyB8fCBkb2N1bWVudC5mdWxsc2NyZWVuRWxlbWVudCA9PSB0aGlzLmNvbnRhaW5lcjtcblxuICAgICAgICBpZihDb25zdGFudHMuU2V0dGluZy5FTkFCTEVfUElYRUxfUkFUSU9fUkVTSVpJTkcpIHtcbiAgICAgICAgICBDb25zdGFudHMuU2V0dGluZy5QSVhFTF9SQVRJTyA9IHdpbmRvdy5kZXZpY2VQaXhlbFJhdGlvICogQ29uc3RhbnRzLlNldHRpbmcuUkVTT0xVVElPTl9TQ0FMRTsgLy8gVXBkYXRlIHRoZSBkZXZpY2UgcGl4ZWwgcmF0aW8sIG9ubHkgaW4gZnVsbHNjcmVlbiBtb2RlL2Z1bGxwYWdlIG1vZGVcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBDb25zdGFudHMuU2V0dGluZy5QSVhFTF9SQVRJTyA9IDEgKiBDb25zdGFudHMuU2V0dGluZy5SRVNPTFVUSU9OX1NDQUxFO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYodGhpcy5tYXhGUFMgPCAxIHx8IG9mZnNldEZyYW1lID4gMTAwMCAvIHRoaXMubWF4RlBTKSB7XG4gICAgICAgICAgVXRpbHMuYXV0b0RQSSh0aGlzLmNhbnZhcyk7XG4gICAgICAgICAgdGhpcy4jbGFzdEZyYW1lVGltZSA9IHRpbWU7XG4gICAgICAgICAgdGhpcy5kcmF3KCk7XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgIHRoaXMuc3RhcnREcmF3KGZ1bmMpO1xuICAgICAgICBpZihmdW5jKSBmdW5jKCk7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICBzdG9wRHJhdygpIHtcbiAgICB0aGlzLnN0YXJ0ZWQgPSBmYWxzZTtcbiAgfVxuXG4gIGFwcGVuZFRvKGVsZW1lbnQpIHtcbiAgICBlbGVtZW50LmFwcGVuZENoaWxkKHRoaXMuY29udGFpbmVyKTtcbiAgfVxuXG4gIHJlbW92ZShlbGVtZW50KSB7XG4gICAgZWxlbWVudC5yZW1vdmVDaGlsZCh0aGlzLmNvbnRhaW5lcik7XG4gICAgdGhpcy5jb250YWluZXIucmVtb3ZlQ2hpbGQodGhpcy5jYW52YXMpO1xuICB9XG5cbiAgdG9nZ2xlRnVsbHNjcmVlbigpIHtcbiAgICBVdGlscy50b2dnbGVGdWxsc2NyZWVuKHRoaXMuY2FudmFzLCB0aGlzLmNvbnRhaW5lcik7XG4gIH1cblxuICB0b2dnbGVGdWxscGFnZSgpIHtcbiAgICBVdGlscy50b2dnbGVGdWxscGFnZSh0aGlzLmNhbnZhcywgdGhpcy5jb250YWluZXIpO1xuICAgIHRoaXMuZnVsbHBhZ2UgPSAhdGhpcy5mdWxscGFnZTtcbiAgfVxuXG4gIGF1dG9SZXNpemUoKSB7XG4gICAgVXRpbHMuZW5hYmxlQXV0b1Jlc2l6ZUNhbnZhcyh0aGlzLmNhbnZhcywgdGhpcy5jb250YWluZXIsIHRoaXMud2lkdGgsIHRoaXMuaGVpZ2h0KTtcbiAgfVxuXG4gIGdldCB4KCkge1xuICAgIHJldHVybiAwO1xuICB9XG5cbiAgZ2V0IHkoKSB7XG4gICAgcmV0dXJuIDA7XG4gIH1cblxuICBnZXQgd2lkdGgoKSB7XG4gICAgcmV0dXJuIHRoaXMuY2FudmFzID8gVXRpbHMuZ2V0Q2FudmFzV2lkdGgodGhpcy5jYW52YXMpIDogdGhpcy4jX3dpZHRoO1xuICB9XG5cbiAgZ2V0IGhlaWdodCgpIHtcbiAgICByZXR1cm4gdGhpcy5jYW52YXMgPyBVdGlscy5nZXRDYW52YXNIZWlnaHQodGhpcy5jYW52YXMpIDogdGhpcy4jX2hlaWdodDtcbiAgfVxuXG4gIGdldCBzdHlsZSgpIHtcbiAgICByZXR1cm4gdGhpcy5jYW52YXMgPyB0aGlzLmNhbnZhcy5zdHlsZSA6IG51bGw7XG4gIH1cblxuICBzZXQgd2lkdGgod2lkdGgpIHtcbiAgICBpZih3aWR0aCAhPSB0aGlzLiNfd2lkdGgpIHtcbiAgICAgIHRoaXMuI193aWR0aCA9IHdpZHRoO1xuICAgICAgdGhpcy5jYW52YXMud2lkdGggPSB3aWR0aDtcbiAgICAgIHRoaXMuc2NlbmUgJiYgdGhpcy5zY2VuZS5yZWFjdG9yLmRpc3BhdGNoRXZlbnQoXCJvbkNoYW5nZVwiLCB0aGlzKTtcbiAgICB9XG4gIH1cblxuICBzZXQgaGVpZ2h0KGhlaWdodCkge1xuICAgIGlmKGhlaWdodCAhPSB0aGlzLiNfaGVpZ2h0KSB7XG4gICAgICB0aGlzLiNfaGVpZ2h0ID0gaGVpZ2h0O1xuICAgICAgdGhpcy5jYW52YXMuaGVpZ2h0ID0gaGVpZ2h0O1xuICAgICAgdGhpcy5zY2VuZSAmJiB0aGlzLnNjZW5lLnJlYWN0b3IuZGlzcGF0Y2hFdmVudChcIm9uQ2hhbmdlXCIsIHRoaXMpO1xuICAgIH1cbiAgfVxuXG4gIHNldCBjdXJzb3IoY3Vyc29yKSB7XG4gICAgaWYodGhpcy5jYW52YXMpIHRoaXMuY2FudmFzLnN0eWxlLmN1cnNvciA9IGN1cnNvcjtcbiAgfVxuXG4gIGdldCBjdXJzb3IoKSB7XG4gICAgcmV0dXJuIHRoaXMuY2FudmFzID8gdGhpcy5jYW52YXMuc3R5bGUuY3Vyc29yIDogXCJcIjtcbiAgfVxuXG4gIGdldENvbnRleHQoY29udGV4dCkge1xuICAgIHJldHVybiB0aGlzLmNhbnZhcyA/IHRoaXMuY2FudmFzLmdldENvbnRleHQoY29udGV4dCA/IGNvbnRleHQgOiBcIjJkXCIpIDogbnVsbDtcbiAgfVxuXG4gIGNyZWF0ZUV2ZW50cygpIHtcbiAgICBpZighdGhpcy5pbml0ICYmIHRoaXMuY2FudmFzKSB7XG4gICAgICBbXCJtb3VzZW1vdmVcIiwgXCJjbGlja1wiLCBcIm1vdXNlZG93blwiLCBcIm1vdXNldXBcIiwgXCJ3aGVlbFwiXS5mb3JFYWNoKGV2ZW50TmFtZSA9PiB7XG4gICAgICAgIHRoaXMuY2FudmFzLmFkZEV2ZW50TGlzdGVuZXIoZXZlbnROYW1lLCBldmVudCA9PiB7XG4gICAgICAgICAgY29uc3QgbW91c2VQb3NpdGlvbiA9IHRoaXMuZ2V0TW91c2VQb3MoZXZlbnQpO1xuICAgICAgICAgIHRoaXMuZG9FdmVudHMoZXZlbnQsIGV2ZW50TmFtZSwgbW91c2VQb3NpdGlvbik7XG4gICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgfSwgZmFsc2UpO1xuICAgICAgfSk7XG5cbiAgICAgIFtcInRvdWNoc3RhcnRcIiwgXCJ0b3VjaG1vdmVcIiwgXCJ0b3VjaGVuZFwiXS5mb3JFYWNoKGV2ZW50TmFtZSA9PiB7XG4gICAgICAgIHRoaXMuY2FudmFzLmFkZEV2ZW50TGlzdGVuZXIoZXZlbnROYW1lLCBldmVudCA9PiB7XG4gICAgICAgICAgY29uc3QgY2hhbmdlZFRvdWNoZXMgPSBldmVudC5jaGFuZ2VkVG91Y2hlc1swXTtcbiAgICAgICAgICBjb25zdCBwb3NpdGlvbiA9IHRoaXMuZ2V0TW91c2VQb3MoY2hhbmdlZFRvdWNoZXMpO1xuICAgICAgICAgIHRoaXMuZG9FdmVudHMoZXZlbnQsIGV2ZW50TmFtZSwgcG9zaXRpb24pO1xuICAgICAgICB9KTtcbiAgICAgIH0pO1xuXG4gICAgICB0aGlzLmluaXQgPSB0cnVlO1xuICAgIH1cbiAgfVxuXG4gIGRvRXZlbnRzKGV2ZW50LCBldmVudE5hbWUsIHBvc2l0aW9uKSB7XG4gICAgY29uc3QgY29tcG9uZW50cyA9IHRoaXMuZ2V0Q29tcG9uZW50c0F0UG9zaXRpb24ocG9zaXRpb24pOyAvLyBHZXQgYWxsIGVsZW1lbnRzIGF0IHRoZSBjdXJyZW50IHBvc2l0aW9uXG4gICAgdGhpcy5yZWFjdG9yLmRpc3BhdGNoRXZlbnQoZXZlbnROYW1lLCBldmVudCwgZmFsc2UpOyAvLyBEaXNwYXRjaCB0byBhbGwgY29tcG9uZW50cyB0byBkaXNhYmxlIHRoZW0gKGNhbGwgd2l0aCBmYWxzZSlcbiAgICBbLi4uY29tcG9uZW50c10ucmV2ZXJzZSgpLmZvckVhY2goY29tcG9uZW50ID0+IHRoaXMucmVhY3Rvci5kaXNwYXRjaEV2ZW50Q29tcG9uZW50KGV2ZW50TmFtZSwgY29tcG9uZW50LCBldmVudCwgdHJ1ZSkpOyAvLyBEaXNwYXRjaCB0byBjb21wb25lbnQgZGV0ZWN0ZWQgdG8gZW5hYmxlIHRoZW0gKGNhbGwgd2l0aCB0cnVlKVxuICB9XG5cbiAgYWRkRXZlbnRMaXN0ZW5lcihldmVudCwgY29tcG9uZW50LCBjYWxsYmFjaykge1xuICAgIHRoaXMucmVhY3Rvci5hZGRFdmVudExpc3RlbmVyKGV2ZW50LCBjb21wb25lbnQsIGNhbGxiYWNrKTtcbiAgfVxuICBcbiAgZ2V0TW91c2VQb3MoZXZlbnQpIHtcbiAgICByZXR1cm4gVXRpbHMuZ2V0TW91c2VQb3ModGhpcy5jYW52YXMsIGV2ZW50KTtcbiAgfVxuXG4gIGdldEFsbENvbXBvbmVudHMoc3RhcnQgPSB0aGlzLnNjZW5lKSB7XG4gICAgcmV0dXJuIHRoaXMuc2NlbmUuZ2V0QWxsQ29tcG9uZW50cyhzdGFydCk7XG4gIH1cblxuICBnZXRDb21wb25lbnRzQXRQb3NpdGlvbihtb3VzZVBvc2l0aW9uLCBzdGFydCA9IHRoaXMuc2NlbmUpIHtcbiAgICBjb25zdCBhbGxDb21wb25lbnRzID0gdGhpcy5zY2VuZS5nZXRDb21wb25lbnRzVHJlZShzdGFydCk7XG4gICAgY29uc3QgcmVzdWx0ID0gW3N0YXJ0XTtcblxuICAgIGlmKGFsbENvbXBvbmVudHMuY2hpbGRzKSB7XG4gICAgICBhbGxDb21wb25lbnRzLmNoaWxkcy5zb3J0KFNjZW5lLnNvcnRDb21wb25lbnRzVHJlZSkucmV2ZXJzZSgpLnNvbWUoY2hpbGQgPT4ge1xuICAgICAgICBpZihjaGlsZC5jb21wb25lbnQuaXNJbnNpZGUobW91c2VQb3NpdGlvbikgJiYgIWNoaWxkLmNvbXBvbmVudC5oaWRkZW4gJiYgIWNoaWxkLmNvbXBvbmVudC5kaXNhYmxlZCkge1xuICAgICAgICAgIHJlc3VsdC5wdXNoKC4uLnRoaXMuZ2V0Q29tcG9uZW50c0F0UG9zaXRpb24obW91c2VQb3NpdGlvbiwgY2hpbGQuY29tcG9uZW50KSk7XG4gICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH1cblxuICAgIHJldHVybiByZXN1bHQ7XG4gIH1cbn0iLCIvKlxuICogQ29weXJpZ2h0IChDKSAyMDIwIEVsaWFzdGlrIChlbGlhc3Rpa3NvZnRzLmNvbSlcbiAqXG4gKiBUaGlzIGZpbGUgaXMgcGFydCBvZiBcIkpTR2FtZVRvb2xzXCIuXG4gKlxuICogXCJKU0dhbWVUb29sc1wiIGlzIGZyZWUgc29mdHdhcmU6IHlvdSBjYW4gcmVkaXN0cmlidXRlIGl0IGFuZC9vciBtb2RpZnlcbiAqIGl0IHVuZGVyIHRoZSB0ZXJtcyBvZiB0aGUgR05VIEdlbmVyYWwgUHVibGljIExpY2Vuc2UgYXMgcHVibGlzaGVkIGJ5XG4gKiB0aGUgRnJlZSBTb2Z0d2FyZSBGb3VuZGF0aW9uLCBlaXRoZXIgdmVyc2lvbiAzIG9mIHRoZSBMaWNlbnNlLCBvclxuICogKGF0IHlvdXIgb3B0aW9uKSBhbnkgbGF0ZXIgdmVyc2lvbi5cbiAqXG4gKiBcIkpTR2FtZVRvb2xzXCIgaXMgZGlzdHJpYnV0ZWQgaW4gdGhlIGhvcGUgdGhhdCBpdCB3aWxsIGJlIHVzZWZ1bCxcbiAqIGJ1dCBXSVRIT1VUIEFOWSBXQVJSQU5UWTsgd2l0aG91dCBldmVuIHRoZSBpbXBsaWVkIHdhcnJhbnR5IG9mXG4gKiBNRVJDSEFOVEFCSUxJVFkgb3IgRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UuICBTZWUgdGhlXG4gKiBHTlUgR2VuZXJhbCBQdWJsaWMgTGljZW5zZSBmb3IgbW9yZSBkZXRhaWxzLlxuICpcbiAqIFlvdSBzaG91bGQgaGF2ZSByZWNlaXZlZCBhIGNvcHkgb2YgdGhlIEdOVSBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlXG4gKiBhbG9uZyB3aXRoIFwiSlNHYW1lVG9vbHNcIi4gIElmIG5vdCwgc2VlIDxodHRwOi8vd3d3LmdudS5vcmcvbGljZW5zZXMvPi5cbiAqL1xuaW1wb3J0IENvbXBvbmVudCBmcm9tIFwiLi9Db21wb25lbnRcIjtcbmltcG9ydCBDb25zdGFudHMgZnJvbSBcIi4vQ29uc3RhbnRzXCI7XG5pbXBvcnQgVXRpbHMgZnJvbSBcIi4vVXRpbHNcIjtcbmltcG9ydCBTdHlsZSBmcm9tIFwiLi9TdHlsZVwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDaXJjbGUgZXh0ZW5kcyBDb21wb25lbnQge1xuICBzZWxlY3RhYmxlID0gZmFsc2U7XG5cbiAgY29uc3RydWN0b3IoeCwgeSwgd2lkdGgsIHN0eWxlKSB7XG4gICAgc3VwZXIoeCwgeSwgd2lkdGgsIHdpZHRoLCBzdHlsZSk7XG4gIH1cblxuICBkcmF3KGNvbnRleHQpIHtcbiAgICBpZih0aGlzLmhpZGRlbikgcmV0dXJuO1xuICAgIHN1cGVyLmRyYXcoY29udGV4dCk7XG5cbiAgICBjb25zdCBjYW52YXMgPSBjb250ZXh0LmNhbnZhcztcbiAgICBjb25zdCBjdHggPSBjYW52YXMuZ2V0Q29udGV4dChcIjJkXCIpO1xuICAgIFxuICAgIFV0aWxzLmRyYXdDaXJjbGUoY3R4LCB0aGlzLngsIHRoaXMueSwgdGhpcy53aWR0aCwgdGhpcy5zdHlsZS5saW5lV2lkdGgsIHRoaXMuc3R5bGUuY29sb3IsIHRoaXMuc3R5bGUubGluZUNhcCwgdGhpcy5zdHlsZS5maWxsLCB0aGlzLnN0eWxlLmZpbGxDb2xvcik7XG5cbiAgICB0aGlzLmluaXQgPSB0cnVlO1xuICB9XG5cbiAgZ2V0IHdpZHRoKCkge1xuICAgIHJldHVybiBzdXBlci53aWR0aCArIHRoaXMuc3R5bGUubGluZVdpZHRoO1xuICB9XG5cbiAgZ2V0IGhlaWdodCgpIHtcbiAgICByZXR1cm4gc3VwZXIuaGVpZ2h0ICsgdGhpcy5zdHlsZS5saW5lV2lkdGg7XG4gIH1cblxuICBzZXQgd2lkdGgod2lkdGgpIHtcbiAgICBzdXBlci53aWR0aCA9IHdpZHRoO1xuICB9XG5cbiAgc2V0IGhlaWdodChoZWlnaHQpIHtcbiAgICBzdXBlci5oZWlnaHQgPSBoZWlnaHQ7XG4gIH1cblxuICBnZXQgZGVmYXVsdFN0eWxlKCkge1xuICAgIHJldHVybiBuZXcgU3R5bGUoe1xuICAgICAgXCJsaW5lV2lkdGhcIjogQ29uc3RhbnRzLlNldHRpbmcuQ0lSQ0xFX0RFRkFVTFRfTElORV9TSVpFLFxuICAgICAgXCJjb2xvclwiOiBDb25zdGFudHMuU2V0dGluZy5DSVJDTEVfREVGQVVMVF9DT0xPUixcbiAgICAgIFwiZmlsbFwiOiBDb25zdGFudHMuU2V0dGluZy5DSVJDTEVfREVGQVVMVF9GSUxMLFxuICAgICAgXCJsaW5lQ2FwXCI6IENvbnN0YW50cy5TZXR0aW5nLkNJUkNMRV9ERUZBVUxUX0xJTkVfQ0FQLFxuICAgICAgXCJmaWxsQ29sb3JcIjogQ29uc3RhbnRzLlNldHRpbmcuQ0lSQ0xFX0RFRkFVTFRfRklMTF9DT0xPUlxuICAgIH0pO1xuICB9XG59IiwiLypcbiAqIENvcHlyaWdodCAoQykgMjAyMCBFbGlhc3RpayAoZWxpYXN0aWtzb2Z0cy5jb20pXG4gKlxuICogVGhpcyBmaWxlIGlzIHBhcnQgb2YgXCJKU0dhbWVUb29sc1wiLlxuICpcbiAqIFwiSlNHYW1lVG9vbHNcIiBpcyBmcmVlIHNvZnR3YXJlOiB5b3UgY2FuIHJlZGlzdHJpYnV0ZSBpdCBhbmQvb3IgbW9kaWZ5XG4gKiBpdCB1bmRlciB0aGUgdGVybXMgb2YgdGhlIEdOVSBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlIGFzIHB1Ymxpc2hlZCBieVxuICogdGhlIEZyZWUgU29mdHdhcmUgRm91bmRhdGlvbiwgZWl0aGVyIHZlcnNpb24gMyBvZiB0aGUgTGljZW5zZSwgb3JcbiAqIChhdCB5b3VyIG9wdGlvbikgYW55IGxhdGVyIHZlcnNpb24uXG4gKlxuICogXCJKU0dhbWVUb29sc1wiIGlzIGRpc3RyaWJ1dGVkIGluIHRoZSBob3BlIHRoYXQgaXQgd2lsbCBiZSB1c2VmdWwsXG4gKiBidXQgV0lUSE9VVCBBTlkgV0FSUkFOVFk7IHdpdGhvdXQgZXZlbiB0aGUgaW1wbGllZCB3YXJyYW50eSBvZlxuICogTUVSQ0hBTlRBQklMSVRZIG9yIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFLiAgU2VlIHRoZVxuICogR05VIEdlbmVyYWwgUHVibGljIExpY2Vuc2UgZm9yIG1vcmUgZGV0YWlscy5cbiAqXG4gKiBZb3Ugc2hvdWxkIGhhdmUgcmVjZWl2ZWQgYSBjb3B5IG9mIHRoZSBHTlUgR2VuZXJhbCBQdWJsaWMgTGljZW5zZVxuICogYWxvbmcgd2l0aCBcIkpTR2FtZVRvb2xzXCIuICBJZiBub3QsIHNlZSA8aHR0cDovL3d3dy5nbnUub3JnL2xpY2Vuc2VzLz4uXG4gKi9cbmltcG9ydCBDb21wb25lbnQgZnJvbSBcIi4vQ29tcG9uZW50XCI7XG5pbXBvcnQgQ29udGFpbmVyIGZyb20gXCIuL0NvbnRhaW5lclwiO1xuaW1wb3J0IFV0aWxzIGZyb20gXCIuL1V0aWxzXCI7XG5pbXBvcnQgQ29uc3RhbnRzIGZyb20gXCIuL0NvbnN0YW50c1wiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDb2wgZXh0ZW5kcyBDb250YWluZXIge1xuICBzZWxlY3RhYmxlID0gZmFsc2U7XG4gICNfaW5uZXJIZWlnaHQgPSAwO1xuICAjX2lubmVyV2lkdGggPSAwO1xuXG4gIGNvbnN0cnVjdG9yKHgsIHksIG1heFdpZHRoLCBtYXhIZWlnaHQsIHN0eWxlLCAuLi5jb21wb25lbnRzKSB7XG4gICAgc3VwZXIoeCwgeSwgbWF4V2lkdGgsIG1heEhlaWdodCwgc3R5bGUsIC4uLmNvbXBvbmVudHMpO1xuXG4gICAgaWYoIUNvbnN0YW50cy5TZXR0aW5nLkRJU0FCTEVfRVhQRVJJTUVOVEFMX09QVElNSVpBVElPTlMpIHtcbiAgICAgIHRoaXMudXBkYXRlSW5uZXJXaWR0aCgpO1xuICAgICAgdGhpcy51cGRhdGVJbm5lckhlaWdodCgpO1xuICBcbiAgICAgIHRoaXMuYWRkQ2hhbmdlQWN0aW9uKCgpID0+IHtcbiAgICAgICAgdGhpcy51cGRhdGVJbm5lcldpZHRoKCk7XG4gICAgICAgIHRoaXMudXBkYXRlSW5uZXJIZWlnaHQoKTtcbiAgICAgIH0pO1xuICAgIH1cbiAgfVxuXG4gIGRyYXcoY29udGV4dCkge1xuICAgIGlmKHRoaXMuaGlkZGVuKSByZXR1cm47XG4gICAgc3VwZXIuZHJhdyhjb250ZXh0KTtcblxuICAgIGNvbnN0IGNhbnZhcyA9IGNvbnRleHQuY2FudmFzO1xuICAgIGNvbnN0IGN0eCA9IGNhbnZhcy5nZXRDb250ZXh0KFwiMmRcIik7XG4gICAgY3R4LnNhdmUoKTtcblxuICAgIGxldCBjdHhUZW1wID0gY3R4O1xuXG4gICAgaWYodGhpcy5pc0N1dHRpbmcpIHtcbiAgICAgIGN0eFRlbXAgPSB0aGlzLmNhbnZhc1RtcC5nZXRDb250ZXh0KFwiMmRcIik7XG4gICAgICBjdHhUZW1wLnNjYWxlKENvbnN0YW50cy5TZXR0aW5nLlBJWEVMX1JBVElPLCBDb25zdGFudHMuU2V0dGluZy5QSVhFTF9SQVRJTyk7XG4gICAgfVxuICBcbiAgICBpZihzdXBlci5jb21wb25lbnRzICE9IG51bGwpIHtcbiAgICAgIGxldCBjdXJyZW50WSA9IHRoaXMuc3R5bGUucGFkZGluZztcblxuICAgICAgc3VwZXIuY29tcG9uZW50cy5mb3JFYWNoKGNvbXBvbmVudCA9PiB7XG4gICAgICAgIGN1cnJlbnRZID0gdGhpcy5kcmF3Q29tcG9uZW50KGNvbXBvbmVudCwgY3VycmVudFksIGN0eFRlbXApO1xuICAgICAgfSk7XG4gICAgfVxuICAgIFxuICAgIGlmKHRoaXMuaXNDdXR0aW5nKSB7XG4gICAgICBVdGlscy5kcmF3SW1hZ2VEYXRhKGN0eCwgdGhpcy5jYW52YXNUbXAsIHRoaXMueCwgdGhpcy55LCB0aGlzLndpZHRoLCB0aGlzLmhlaWdodCwgdGhpcy54ICogQ29uc3RhbnRzLlNldHRpbmcuUElYRUxfUkFUSU8sIHRoaXMueSAqIENvbnN0YW50cy5TZXR0aW5nLlBJWEVMX1JBVElPLCB0aGlzLndpZHRoICogQ29uc3RhbnRzLlNldHRpbmcuUElYRUxfUkFUSU8sIHRoaXMuaGVpZ2h0ICogQ29uc3RhbnRzLlNldHRpbmcuUElYRUxfUkFUSU8pO1xuICAgIH1cbiAgICBcbiAgICBzdXBlci5kcmF3U2Nyb2xsYmFycyhjdHgpO1xuICAgIFxuICAgIGN0eC5yZXN0b3JlKCk7XG4gIH1cblxuICBkcmF3Q29tcG9uZW50KGNvbXBvbmVudCwgY3VycmVudFksIGN0eCkge1xuICAgIGlmKGNvbXBvbmVudCBpbnN0YW5jZW9mIENvbXBvbmVudCkge1xuICAgICAgY29tcG9uZW50LnggPSB0aGlzLnN0eWxlLnBhZGRpbmcgLSB0aGlzLm9mZnNldFNjcm9sbFg7XG4gICAgICBjb21wb25lbnQueSA9IGN1cnJlbnRZIC0gdGhpcy5vZmZzZXRTY3JvbGxZO1xuICAgICAgXG4gICAgICBpZighY29tcG9uZW50LmhpZGRlbikge1xuICAgICAgICBpZih0aGlzLmlzQ29tcG9uZW50VmlzaWJsZShjb21wb25lbnQpKSB7XG4gICAgICAgICAgY29tcG9uZW50LmRyYXcoY3R4KTtcbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgY3VycmVudFkgKz0gY29tcG9uZW50LmhlaWdodCArIHRoaXMuc3R5bGUuc3BhY2VCZXR3ZWVuQ29tcG9uZW50cztcbiAgICAgIH1cbiAgICB9XG4gICAgXG4gICAgcmV0dXJuIGN1cnJlbnRZO1xuICB9XG5cbiAgdXBkYXRlSW5uZXJIZWlnaHQoKSB7XG4gICAgbGV0IHRvdGFsSGVpZ2h0ID0gMDtcbiAgICBzdXBlci5jb21wb25lbnRzLmZvckVhY2goY29tcG9uZW50ID0+IHsgaWYoIWNvbXBvbmVudC5oaWRkZW4pIHRvdGFsSGVpZ2h0ICs9IGNvbXBvbmVudC5oZWlnaHQ7IH0pO1xuICAgIHRoaXMuI19pbm5lckhlaWdodCA9IHRvdGFsSGVpZ2h0ICsgdGhpcy5zdHlsZS5zcGFjZUJldHdlZW5Db21wb25lbnRzICogKHN1cGVyLmNvbXBvbmVudHMubGVuZ3RoIC0gMSkgKyB0aGlzLnN0eWxlLnBhZGRpbmc7XG4gIH1cblxuICB1cGRhdGVJbm5lcldpZHRoKCkge1xuICAgIGxldCBtYXhXaWR0aCA9IDA7XG4gICAgc3VwZXIuY29tcG9uZW50cy5mb3JFYWNoKGNvbXBvbmVudCA9PiB7IGlmKGNvbXBvbmVudC53aWR0aCA+IG1heFdpZHRoICYmICFjb21wb25lbnQuaGlkZGVuKSBtYXhXaWR0aCA9IGNvbXBvbmVudC53aWR0aDsgfSk7XG4gICAgdGhpcy4jX2lubmVyV2lkdGggPSBtYXhXaWR0aCArIHRoaXMuc3R5bGUucGFkZGluZztcbiAgfVxuXG4gIGdldCBpbm5lckhlaWdodCgpIHtcbiAgICBpZihDb25zdGFudHMuU2V0dGluZy5ESVNBQkxFX0VYUEVSSU1FTlRBTF9PUFRJTUlaQVRJT05TKSB0aGlzLnVwZGF0ZUlubmVySGVpZ2h0KCk7XG4gICAgcmV0dXJuIHRoaXMuI19pbm5lckhlaWdodDtcbiAgfVxuXG4gIGdldCBpbm5lcldpZHRoKCkge1xuICAgIGlmKENvbnN0YW50cy5TZXR0aW5nLkRJU0FCTEVfRVhQRVJJTUVOVEFMX09QVElNSVpBVElPTlMpIHRoaXMudXBkYXRlSW5uZXJXaWR0aCgpO1xuICAgIHJldHVybiB0aGlzLiNfaW5uZXJXaWR0aDtcbiAgfVxuXG4gIGdldCB3aWR0aCgpIHtcbiAgICBjb25zdCB3aWR0aCA9IHRoaXMuaW5uZXJXaWR0aCB8fCAodGhpcy5wYXJlbnQgJiYgdGhpcy5wYXJlbnQud2lkdGgpO1xuICAgIGNvbnN0IG1pbiA9IHRoaXMubWF4V2lkdGggIT0gbnVsbCA/IE1hdGgubWluKHRoaXMubWF4V2lkdGgsIHdpZHRoKSA6IG51bGw7XG4gICAgcmV0dXJuIHRoaXMubWluV2lkdGggIT0gbnVsbCA/IE1hdGgubWF4KHRoaXMubWluV2lkdGgsIG1pbiAhPSBudWxsID8gbWluIDogd2lkdGgpIDogbWluICE9IG51bGwgPyBtaW4gOiB3aWR0aDtcbiAgfVxuXG4gIGdldCBoZWlnaHQoKSB7XG4gICAgY29uc3QgaGVpZ2h0ID0gdGhpcy5pbm5lckhlaWdodCB8fCAodGhpcy5wYXJlbnQgJiYgdGhpcy5wYXJlbnQuaGVpZ2h0KTtcbiAgICBjb25zdCBtaW4gPSB0aGlzLm1heEhlaWdodCAhPSBudWxsID8gTWF0aC5taW4odGhpcy5tYXhIZWlnaHQsIGhlaWdodCkgOiBudWxsO1xuICAgIHJldHVybiB0aGlzLm1pbkhlaWdodCAhPSBudWxsID8gTWF0aC5tYXgodGhpcy5taW5IZWlnaHQsIG1pbiAhPSBudWxsID8gbWluIDogaGVpZ2h0KSA6IG1pbiAhPSBudWxsID8gbWluIDogaGVpZ2h0O1xuICB9XG5cbiAgZ2V0IGRlZmF1bHRTdHlsZSgpIHtcbiAgICByZXR1cm4gc3VwZXIuZGVmYXVsdFN0eWxlO1xuICB9XG59IiwiLypcbiAqIENvcHlyaWdodCAoQykgMjAyMCBFbGlhc3RpayAoZWxpYXN0aWtzb2Z0cy5jb20pXG4gKlxuICogVGhpcyBmaWxlIGlzIHBhcnQgb2YgXCJKU0dhbWVUb29sc1wiLlxuICpcbiAqIFwiSlNHYW1lVG9vbHNcIiBpcyBmcmVlIHNvZnR3YXJlOiB5b3UgY2FuIHJlZGlzdHJpYnV0ZSBpdCBhbmQvb3IgbW9kaWZ5XG4gKiBpdCB1bmRlciB0aGUgdGVybXMgb2YgdGhlIEdOVSBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlIGFzIHB1Ymxpc2hlZCBieVxuICogdGhlIEZyZWUgU29mdHdhcmUgRm91bmRhdGlvbiwgZWl0aGVyIHZlcnNpb24gMyBvZiB0aGUgTGljZW5zZSwgb3JcbiAqIChhdCB5b3VyIG9wdGlvbikgYW55IGxhdGVyIHZlcnNpb24uXG4gKlxuICogXCJKU0dhbWVUb29sc1wiIGlzIGRpc3RyaWJ1dGVkIGluIHRoZSBob3BlIHRoYXQgaXQgd2lsbCBiZSB1c2VmdWwsXG4gKiBidXQgV0lUSE9VVCBBTlkgV0FSUkFOVFk7IHdpdGhvdXQgZXZlbiB0aGUgaW1wbGllZCB3YXJyYW50eSBvZlxuICogTUVSQ0hBTlRBQklMSVRZIG9yIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFLiAgU2VlIHRoZVxuICogR05VIEdlbmVyYWwgUHVibGljIExpY2Vuc2UgZm9yIG1vcmUgZGV0YWlscy5cbiAqXG4gKiBZb3Ugc2hvdWxkIGhhdmUgcmVjZWl2ZWQgYSBjb3B5IG9mIHRoZSBHTlUgR2VuZXJhbCBQdWJsaWMgTGljZW5zZVxuICogYWxvbmcgd2l0aCBcIkpTR2FtZVRvb2xzXCIuICBJZiBub3QsIHNlZSA8aHR0cDovL3d3dy5nbnUub3JnL2xpY2Vuc2VzLz4uXG4gKi9cbmltcG9ydCBDb25zdGFudHMgZnJvbSBcIi4vQ29uc3RhbnRzXCI7XG5pbXBvcnQgU3R5bGUgZnJvbSBcIi4vU3R5bGVcIjtcbmltcG9ydCBSZWFjdG9yIGZyb20gXCIuL1JlYWN0b3JcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ29tcG9uZW50IHtcbiAgc2VsZWN0YWJsZSA9IHRydWU7XG4gICNfd2lkdGggPSAwO1xuICAjX2hlaWdodCA9IDA7XG4gICNfeCA9IDA7XG4gICNfeSA9IDA7XG4gICNfZGlzYWJsZWQgPSBmYWxzZTtcbiAgI19zZWxlY3RlZCA9IGZhbHNlO1xuICAjX3N0eWxlO1xuXG4gIGNvbnN0cnVjdG9yKHgsIHksIHdpZHRoLCBoZWlnaHQsIHN0eWxlKSB7XG4gICAgdGhpcy4jX3ggPSB4IHx8IDA7XG4gICAgdGhpcy4jX3kgPSB5IHx8IDA7XG4gICAgdGhpcy5kZWx0YVggPSAwO1xuICAgIHRoaXMuZGVsdGFZID0gMDtcbiAgICB0aGlzLiNfd2lkdGggPSB3aWR0aDtcbiAgICB0aGlzLiNfaGVpZ2h0ID0gaGVpZ2h0O1xuICAgIHRoaXMuY2FudmFzO1xuICAgIHRoaXMucGFyZW50O1xuXG4gICAgLy8gU3R5bGVcbiAgICB0aGlzLnN0eWxlID0gc3R5bGU7XG4gICAgXG4gICAgLy8gRnVuY3Rpb25zIHRyaWdnZXJlZCBieSBldmVudHNcbiAgICB0aGlzLnJlYWN0b3IgPSBuZXcgUmVhY3RvcigpO1xuICAgIHRoaXMucmVhY3Rvci5yZWdpc3RlckV2ZW50KFwib25DbGlja1wiKTtcbiAgICB0aGlzLnJlYWN0b3IucmVnaXN0ZXJFdmVudChcIm9uSG92ZXJcIik7XG4gICAgdGhpcy5yZWFjdG9yLnJlZ2lzdGVyRXZlbnQoXCJvbkRvd25cIik7XG4gICAgdGhpcy5yZWFjdG9yLnJlZ2lzdGVyRXZlbnQoXCJvblNjcm9sbFwiKTtcbiAgICB0aGlzLnJlYWN0b3IucmVnaXN0ZXJFdmVudChcIm9uTW92ZVwiKTtcbiAgICB0aGlzLnJlYWN0b3IucmVnaXN0ZXJFdmVudChcIm9uVXBcIik7XG4gICAgdGhpcy5yZWFjdG9yLnJlZ2lzdGVyRXZlbnQoXCJvbkNoYW5nZVwiKTtcblxuICAgIC8vIFN0YXRlXG4gICAgdGhpcy5pbml0ID0gZmFsc2U7XG4gICAgdGhpcy5oYXNJbml0RXZlbnRzID0gZmFsc2U7XG4gICAgdGhpcy4jX3NlbGVjdGVkID0gZmFsc2U7XG4gICAgdGhpcy5jbGlja2VkID0gZmFsc2U7XG4gICAgdGhpcy5ob3ZlcmVkID0gZmFsc2U7XG4gICAgdGhpcy4jX2Rpc2FibGVkID0gZmFsc2U7XG4gICAgdGhpcy5tb3ZhYmxlID0gZmFsc2U7XG4gICAgdGhpcy5tb3ZpbmcgPSBmYWxzZTtcblxuICAgIC8vIFNjcm9sbCBzdGF0ZVxuICAgIHRoaXMub2Zmc2V0U2Nyb2xsWCA9IDA7XG4gICAgdGhpcy5vZmZzZXRTY3JvbGxZID0gMDtcblxuICAgIC8vIE1vdmUgZXZlbnRcbiAgICB0aGlzLm9mZnNldE1vdmVYID0gMDtcbiAgICB0aGlzLm9mZnNldE1vdmVZID0gMDtcbiAgICB0aGlzLm1vdmVFdmVudFN0YXJ0WCA9IDA7XG4gICAgdGhpcy5tb3ZlRXZlbnRTdGFydFkgPSAwO1xuXG4gICAgLy8gVG91Y2ggZXZlbnRzXG4gICAgdGhpcy50b3VjaEV2ZW50U3RhcnRYID0gMDtcbiAgICB0aGlzLnRvdWNoRXZlbnRTdGFydFkgPSAwO1xuICAgIHRoaXMudG91Y2hFdmVudFN0YXJ0VGltZXN0YW1wID0gMDtcblxuICAgIHRoaXMudG9vbHRpcDtcbiAgICB0aGlzLmluaXRFdmVudHMoKTtcblxuICAgIHRoaXMuYWRkTW92ZUFjdGlvbigoZGVsdGFYLCBkZWx0YVkpID0+IHtcbiAgICAgIGlmKHRoaXMubW92YWJsZSAmJiAhdGhpcy5kaXNhYmxlZCAmJiB0aGlzLmNsaWNrZWQpIHtcbiAgICAgICAgdGhpcy5kZWx0YVggLT0gZGVsdGFYO1xuICAgICAgICB0aGlzLmRlbHRhWSAtPSBkZWx0YVk7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICBpbml0RXZlbnRzKCkge1xuICAgIGlmKCF0aGlzLmhhc0luaXRFdmVudHMgJiYgdGhpcy5jYW52YXMgIT0gbnVsbCkge1xuICAgICAgdGhpcy5jYW52YXMuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlbW92ZVwiLCB0aGlzLCAoZXZlbnQsIHJlc3VsdCkgPT4ge1xuICAgICAgICBpZighdGhpcy5kaXNhYmxlZCkge1xuICAgICAgICAgIGNvbnN0IG1vdXNlUG9zaXRpb24gPSB0aGlzLmdldE1vdXNlUG9zKGV2ZW50KTtcbiAgICAgICAgICB0aGlzLm1vdmluZyA9IGZhbHNlO1xuXG4gICAgICAgICAgaWYodGhpcy5jbGlja2VkKSB7XG4gICAgICAgICAgICBjb25zdCBkZWx0YVggPSB0aGlzLm1vdmVFdmVudFN0YXJ0WCAtIG1vdXNlUG9zaXRpb24ueDtcbiAgICAgICAgICAgIGNvbnN0IGRlbHRhWSA9IHRoaXMubW92ZUV2ZW50U3RhcnRZIC0gbW91c2VQb3NpdGlvbi55O1xuXG4gICAgICAgICAgICB0aGlzLm9mZnNldE1vdmVYICs9IGRlbHRhWDtcbiAgICAgICAgICAgIHRoaXMub2Zmc2V0TW92ZVkgKz0gZGVsdGFZO1xuXG4gICAgICAgICAgICBpZih0aGlzLnJlYWN0b3IpIHtcbiAgICAgICAgICAgICAgdGhpcy5yZWFjdG9yLmRpc3BhdGNoRXZlbnQoXCJvbk1vdmVcIiwgZGVsdGFYLCBkZWx0YVksIG1vdXNlUG9zaXRpb24pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgXG4gICAgICAgICAgICB0aGlzLm1vdmVFdmVudFN0YXJ0WCA9IG1vdXNlUG9zaXRpb24ueDtcbiAgICAgICAgICAgIHRoaXMubW92ZUV2ZW50U3RhcnRZID0gbW91c2VQb3NpdGlvbi55O1xuICAgICAgICAgICAgaWYodGhpcy5tb3ZhYmxlKSB0aGlzLm1vdmluZyA9IHRydWU7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgaWYocmVzdWx0KSB7XG4gICAgICAgICAgICBpZih0aGlzLnJlYWN0b3IgJiYgIXRoaXMuZGlzYWJsZWQpIHtcbiAgICAgICAgICAgICAgdGhpcy5yZWFjdG9yLmRpc3BhdGNoRXZlbnQoXCJvbkhvdmVyXCIsIG1vdXNlUG9zaXRpb24pO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZih0aGlzLnRvb2x0aXApIHtcbiAgICAgICAgICAgICAgdGhpcy50b29sdGlwLnggPSBtb3VzZVBvc2l0aW9uLnggKyAxMDtcbiAgICAgICAgICAgICAgdGhpcy50b29sdGlwLnkgPSBtb3VzZVBvc2l0aW9uLnkgKyAxMDtcbiAgICAgICAgICAgICAgdGhpcy50b29sdGlwLmVuYWJsZSgpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgXG4gICAgICAgICAgICB0aGlzLmhvdmVyZWQgPSB0cnVlO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLmhvdmVyZWQgPSBmYWxzZTtcbiAgICAgICAgICAgIGlmKHRoaXMudG9vbHRpcCkgdGhpcy50b29sdGlwLmRpc2FibGUoKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdGhpcy5ob3ZlcmVkID0gZmFsc2U7XG4gICAgICAgICAgdGhpcy5jbGlja2VkID0gZmFsc2U7XG4gICAgICAgICAgaWYodGhpcy50b29sdGlwKSB0aGlzLnRvb2x0aXAuZGlzYWJsZSgpO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICAgIFxuICAgICAgdGhpcy5jYW52YXMuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIHRoaXMsIChldmVudCwgcmVzdWx0KSA9PiB7XG4gICAgICAgIGlmKCF0aGlzLmRpc2FibGVkKSB7XG4gICAgICAgICAgY29uc3QgbW91c2VQb3NpdGlvbiA9IHRoaXMuZ2V0TW91c2VQb3MoZXZlbnQpO1xuXG4gICAgICAgICAgaWYocmVzdWx0ICYmIHRoaXMuaG92ZXJlZCkge1xuICAgICAgICAgICAgaWYoIXRoaXMubW92aW5nKSB7XG4gICAgICAgICAgICAgIGlmKHRoaXMucmVhY3Rvcikge1xuICAgICAgICAgICAgICAgIHRoaXMucmVhY3Rvci5kaXNwYXRjaEV2ZW50KFwib25DbGlja1wiLCBtb3VzZVBvc2l0aW9uKTtcbiAgICAgICAgICAgICAgfVxuICBcbiAgICAgICAgICAgICAgdGhpcy5zZWxlY3RlZCA9IHRydWU7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICB0aGlzLm1vdmluZyA9IGZhbHNlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLmNsaWNrZWQgPSBmYWxzZTtcbiAgICAgICAgICAgIHRoaXMuc2VsZWN0ZWQgPSBmYWxzZTtcbiAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdGhpcy5ob3ZlcmVkID0gZmFsc2U7XG4gICAgICAgICAgdGhpcy5jbGlja2VkID0gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgICAgXG4gICAgICB0aGlzLmNhbnZhcy5hZGRFdmVudExpc3RlbmVyKFwibW91c2Vkb3duXCIsIHRoaXMsIChldmVudCwgcmVzdWx0KSA9PiB7XG4gICAgICAgIGlmKCF0aGlzLmRpc2FibGVkKSB7XG4gICAgICAgICAgY29uc3QgbW91c2VQb3NpdGlvbiA9IHRoaXMuZ2V0TW91c2VQb3MoZXZlbnQpO1xuXG4gICAgICAgICAgaWYocmVzdWx0ICYmICF0aGlzLm1vdmluZykge1xuICAgICAgICAgICAgaWYodGhpcy5yZWFjdG9yKSB7XG4gICAgICAgICAgICAgIHRoaXMucmVhY3Rvci5kaXNwYXRjaEV2ZW50KFwib25Eb3duXCIsIG1vdXNlUG9zaXRpb24pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgXG4gICAgICAgICAgICB0aGlzLmNsaWNrZWQgPSB0cnVlO1xuICAgICAgICAgICAgdGhpcy5tb3ZlRXZlbnRTdGFydFggPSBtb3VzZVBvc2l0aW9uLng7XG4gICAgICAgICAgICB0aGlzLm1vdmVFdmVudFN0YXJ0WSA9IG1vdXNlUG9zaXRpb24ueTtcbiAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdGhpcy5ob3ZlcmVkID0gZmFsc2U7XG4gICAgICAgICAgdGhpcy5jbGlja2VkID0gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgICAgXG4gICAgICB0aGlzLmNhbnZhcy5hZGRFdmVudExpc3RlbmVyKFwibW91c2V1cFwiLCB0aGlzLCAoZXZlbnQpID0+IHtcbiAgICAgICAgaWYoIXRoaXMuZGlzYWJsZWQpIHtcbiAgICAgICAgICBjb25zdCBtb3VzZVBvc2l0aW9uID0gdGhpcy5nZXRNb3VzZVBvcyhldmVudCk7XG5cbiAgICAgICAgICBpZih0aGlzLnJlYWN0b3IpIHtcbiAgICAgICAgICAgIHRoaXMucmVhY3Rvci5kaXNwYXRjaEV2ZW50KFwib25VcFwiLCBtb3VzZVBvc2l0aW9uKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgXG4gICAgICAgICAgdGhpcy5jbGlja2VkID0gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuXG4gICAgICB0aGlzLmNhbnZhcy5hZGRFdmVudExpc3RlbmVyKFwid2hlZWxcIiwgdGhpcywgKGV2ZW50KSA9PiB7XG4gICAgICAgIGlmKHRoaXMuaG92ZXJlZCAmJiAhdGhpcy5kaXNhYmxlZCAmJiAhdGhpcy5zY3JvbGxEaXNhYmxlZCkge1xuICAgICAgICAgIHRoaXMub2Zmc2V0U2Nyb2xsWCArPSBldmVudC5kZWx0YVg7XG4gICAgICAgICAgdGhpcy5vZmZzZXRTY3JvbGxZICs9IGV2ZW50LmRlbHRhWTtcblxuICAgICAgICAgIGlmKHRoaXMucmVhY3Rvcikge1xuICAgICAgICAgICAgdGhpcy5yZWFjdG9yLmRpc3BhdGNoRXZlbnQoXCJvblNjcm9sbFwiLCBldmVudC5kZWx0YVgsIGV2ZW50LmRlbHRhWSk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9KTtcblxuICAgICAgY29uc3QgdG91Y2hTY3JvbGxFdmVudCA9IChldmVudCkgPT4ge1xuICAgICAgICBjb25zdCBjaGFuZ2VkVG91Y2hlcyA9IGV2ZW50LmNoYW5nZWRUb3VjaGVzWzBdO1xuICAgICAgICBjb25zdCBwb3NpdGlvbiA9IHRoaXMuZ2V0TW91c2VQb3MoY2hhbmdlZFRvdWNoZXMpO1xuXG4gICAgICAgIGlmKHRoaXMuaG92ZXJlZCAmJiAhdGhpcy5kaXNhYmxlZCAmJiAhdGhpcy5zY3JvbGxEaXNhYmxlZCkge1xuICAgICAgICAgIGNvbnN0IGRlbHRhWCA9IHRoaXMudG91Y2hFdmVudFN0YXJ0WCAtIHBvc2l0aW9uLng7XG4gICAgICAgICAgY29uc3QgZGVsdGFZID0gdGhpcy50b3VjaEV2ZW50U3RhcnRZIC0gcG9zaXRpb24ueTtcblxuICAgICAgICAgIHRoaXMub2Zmc2V0U2Nyb2xsWCArPSBkZWx0YVg7XG4gICAgICAgICAgdGhpcy5vZmZzZXRTY3JvbGxZICs9IGRlbHRhWTtcblxuICAgICAgICAgIGlmKHRoaXMucmVhY3Rvcikge1xuICAgICAgICAgICAgdGhpcy5yZWFjdG9yLmRpc3BhdGNoRXZlbnQoXCJvblNjcm9sbFwiLCBkZWx0YVgsIGRlbHRhWSwgcG9zaXRpb24pO1xuICAgICAgICAgIH1cbiAgICAgICAgICBcbiAgICAgICAgICB0aGlzLnRvdWNoRXZlbnRTdGFydFggPSBwb3NpdGlvbi54O1xuICAgICAgICAgIHRoaXMudG91Y2hFdmVudFN0YXJ0WSA9IHBvc2l0aW9uLnk7XG4gICAgICAgIH1cbiAgICAgIH07XG5cbiAgICAgIGNvbnN0IHRvdWNoU3RhcnRFbmRFdmVudCA9IChldmVudCwgcmVzdWx0KSA9PiB7XG4gICAgICAgIGNvbnN0IGNoYW5nZWRUb3VjaGVzID0gZXZlbnQuY2hhbmdlZFRvdWNoZXNbMF07XG4gICAgICAgIGNvbnN0IHBvc2l0aW9uID0gdGhpcy5nZXRNb3VzZVBvcyhjaGFuZ2VkVG91Y2hlcyk7XG4gICAgICAgIFxuICAgICAgICBpZihyZXN1bHQpIHtcbiAgICAgICAgICB0aGlzLmhvdmVyZWQgPSB0cnVlO1xuICAgICAgICAgIHRoaXMuc2VsZWN0ZWQgPSB0cnVlO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHRoaXMuaG92ZXJlZCA9IGZhbHNlO1xuICAgICAgICAgIHRoaXMuc2VsZWN0ZWQgPSBmYWxzZTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmKHRoaXMuaG92ZXJlZCAmJiAhdGhpcy5kaXNhYmxlZCkge1xuICAgICAgICAgIHRoaXMudG91Y2hFdmVudFN0YXJ0WCA9IHBvc2l0aW9uLng7XG4gICAgICAgICAgdGhpcy50b3VjaEV2ZW50U3RhcnRZID0gcG9zaXRpb24ueTtcbiAgICAgICAgICB0aGlzLnRvdWNoRXZlbnRTdGFydFRpbWVzdGFtcCA9IGV2ZW50LnRpbWVzdGFtcDtcbiAgICAgICAgfVxuICAgICAgfTtcblxuICAgICAgdGhpcy5jYW52YXMuYWRkRXZlbnRMaXN0ZW5lcihcInRvdWNoc3RhcnRcIiwgdGhpcywgdG91Y2hTdGFydEVuZEV2ZW50KTtcbiAgICAgIHRoaXMuY2FudmFzLmFkZEV2ZW50TGlzdGVuZXIoXCJ0b3VjaGVuZFwiLCB0aGlzLCB0b3VjaFN0YXJ0RW5kRXZlbnQpO1xuXG4gICAgICB0aGlzLmNhbnZhcy5hZGRFdmVudExpc3RlbmVyKFwidG91Y2htb3ZlXCIsIHRoaXMsIChldmVudCkgPT4ge1xuICAgICAgICB0b3VjaFNjcm9sbEV2ZW50KGV2ZW50KTtcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgIH0pO1xuXG4gICAgICB0aGlzLmhhc0luaXRFdmVudHMgPSB0cnVlO1xuICAgIH1cbiAgfVxuXG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bnVzZWQtdmFyc1xuICBkcmF3KGNvbnRleHQpIHtcbiAgICBpZih0aGlzLmhpZGRlbikgcmV0dXJuO1xuICAgIHRoaXMuaW5pdEV2ZW50cygpO1xuXG4gICAgaWYodGhpcy5kaXNhYmxlZCkge1xuICAgICAgdGhpcy5zZWxlY3RlZCA9IGZhbHNlO1xuICAgICAgdGhpcy5jbGlja2VkID0gZmFsc2U7XG4gICAgICB0aGlzLmhvdmVyZWQgPSBmYWxzZTtcbiAgICAgIGlmKHRoaXMudG9vbHRpcCkgdGhpcy50b29sdGlwLmRpc2FibGVkID0gdHJ1ZTtcbiAgICB9IGVsc2UgaWYodGhpcy5tb3ZhYmxlICYmIHRoaXMuaG92ZXJlZCkge1xuICAgICAgdGhpcy5jYW52YXMuY3Vyc29yID0gXCJncmFiXCI7XG4gICAgfVxuICB9XG4gIFxuICBnZXRNb3VzZVBvcyhldmVudCkge1xuICAgIHJldHVybiB0aGlzLmNhbnZhcy5nZXRNb3VzZVBvcyhldmVudCk7XG4gIH1cbiAgXG4gIGlzSW5zaWRlKHBvcykge1xuICAgIHJldHVybiBwb3MueCA+IHRoaXMueCAmJiBwb3MueCA8IHRoaXMueCArIHRoaXMud2lkdGggJiYgcG9zLnkgPCB0aGlzLnkgKyB0aGlzLmhlaWdodCAmJiBwb3MueSA+IHRoaXMueTtcbiAgfVxuICBcbiAgZGlzYWJsZSgpIHtcbiAgICB0aGlzLmRpc2FibGVkID0gdHJ1ZTtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuICBcbiAgZW5hYmxlKCkge1xuICAgIHRoaXMuZGlzYWJsZWQgPSBmYWxzZTtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuXG4gIGdldCBkaXNhYmxlZCgpIHtcbiAgICByZXR1cm4gdGhpcy4jX2Rpc2FibGVkIHx8ICh0aGlzLnBhcmVudCAmJiB0aGlzLnBhcmVudC5kaXNhYmxlZCk7XG4gIH1cblxuICBzZXQgZGlzYWJsZWQoZGlzYWJsZWQpIHtcbiAgICBpZihkaXNhYmxlZCAhPSB0aGlzLiNfZGlzYWJsZWQpIHtcbiAgICAgIHRoaXMuI19kaXNhYmxlZCA9IGRpc2FibGVkO1xuICAgICAgdGhpcy5yZWFjdG9yICYmIHRoaXMucmVhY3Rvci5kaXNwYXRjaEV2ZW50KFwib25DaGFuZ2VcIiwgdGhpcyk7XG4gICAgfVxuICB9XG5cbiAgc2V0Q2xpY2tBY3Rpb24odHJpZ2dlcikge1xuICAgIHRoaXMucmVtb3ZlQWxsQ2xpY2tBY3Rpb25zKCk7XG4gICAgdGhpcy5hZGRDbGlja0FjdGlvbih0cmlnZ2VyKTtcbiAgfVxuICBcbiAgYWRkQ2xpY2tBY3Rpb24odHJpZ2dlcikge1xuICAgIHRoaXMucmVhY3Rvci5hZGRFdmVudExpc3RlbmVyKFwib25DbGlja1wiLCB0cmlnZ2VyKTtcbiAgfVxuICBcbiAgcmVtb3ZlQ2xpY2tBY3Rpb24odHJpZ2dlcikge1xuICAgIHRoaXMucmVhY3Rvci5yZW1vdmVFdmVudExpc3RlbmVyKFwib25DbGlja1wiLCB0cmlnZ2VyKTtcbiAgfVxuXG4gIHJlbW92ZUFsbENsaWNrQWN0aW9ucygpIHtcbiAgICB0aGlzLnJlYWN0b3IucmVtb3ZlQWxsRXZlbnRMaXN0ZW5lcihcIm9uQ2xpY2tcIik7XG4gIH1cblxuICBzZXRIb3ZlckFjdGlvbih0cmlnZ2VyKSB7XG4gICAgdGhpcy5yZW1vdmVBbGxIb3ZlckFjdGlvbnMoKTtcbiAgICB0aGlzLmFkZEhvdmVyQWN0aW9uKHRyaWdnZXIpO1xuICB9XG4gIFxuICBhZGRIb3ZlckFjdGlvbih0cmlnZ2VyKSB7XG4gICAgdGhpcy5yZWFjdG9yLmFkZEV2ZW50TGlzdGVuZXIoXCJvbkhvdmVyXCIsIHRyaWdnZXIpO1xuICB9XG4gIFxuICByZW1vdmVIb3ZlckFjdGlvbih0cmlnZ2VyKSB7XG4gICAgdGhpcy5yZWFjdG9yLnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJvbkhvdmVyXCIsIHRyaWdnZXIpO1xuICB9XG5cbiAgcmVtb3ZlQWxsSG92ZXJBY3Rpb25zKCkge1xuICAgIHRoaXMucmVhY3Rvci5yZW1vdmVBbGxFdmVudExpc3RlbmVyKFwib25Ib3ZlclwiKTtcbiAgfVxuXG4gIHNldERvd25BY3Rpb24odHJpZ2dlcikge1xuICAgIHRoaXMucmVtb3ZlQWxsRG93bkFjdGlvbnMoKTtcbiAgICB0aGlzLmFkZERvd25BY3Rpb24odHJpZ2dlcik7XG4gIH1cbiAgXG4gIGFkZERvd25BY3Rpb24odHJpZ2dlcikge1xuICAgIHRoaXMucmVhY3Rvci5hZGRFdmVudExpc3RlbmVyKFwib25Eb3duXCIsIHRyaWdnZXIpO1xuICB9XG4gIFxuICByZW1vdmVEb3duQWN0aW9uKHRyaWdnZXIpIHtcbiAgICB0aGlzLnJlYWN0b3IucmVtb3ZlRXZlbnRMaXN0ZW5lcihcIm9uRG93blwiLCB0cmlnZ2VyKTtcbiAgfVxuXG4gIHJlbW92ZUFsbERvd25BY3Rpb25zKCkge1xuICAgIHRoaXMucmVhY3Rvci5yZW1vdmVBbGxFdmVudExpc3RlbmVyKFwib25Eb3duXCIpO1xuICB9XG5cbiAgc2V0U2Nyb2xsQWN0aW9uKHRyaWdnZXIpIHtcbiAgICB0aGlzLnJlbW92ZUFsbFNjcm9sbEFjdGlvbnMoKTtcbiAgICB0aGlzLmFkZFNjcm9sbEFjdGlvbih0cmlnZ2VyKTtcbiAgfVxuICBcbiAgYWRkU2Nyb2xsQWN0aW9uKHRyaWdnZXIpIHtcbiAgICB0aGlzLnJlYWN0b3IuYWRkRXZlbnRMaXN0ZW5lcihcIm9uU2Nyb2xsXCIsIHRyaWdnZXIpO1xuICB9XG4gIFxuICByZW1vdmVTY3JvbGxBY3Rpb24odHJpZ2dlcikge1xuICAgIHRoaXMucmVhY3Rvci5yZW1vdmVFdmVudExpc3RlbmVyKFwib25TY3JvbGxcIiwgdHJpZ2dlcik7XG4gIH1cblxuICByZW1vdmVBbGxTY3JvbGxBY3Rpb25zKCkge1xuICAgIHRoaXMucmVhY3Rvci5yZW1vdmVBbGxFdmVudExpc3RlbmVyKFwib25TY3JvbGxcIik7XG4gIH1cblxuICBzZXRNb3ZlQWN0aW9uKHRyaWdnZXIpIHtcbiAgICB0aGlzLnJlbW92ZUFsbE1vdmVBY3Rpb25zKCk7XG4gICAgdGhpcy5hZGRNb3ZlQWN0aW9uKHRyaWdnZXIpO1xuICB9XG4gIFxuICBhZGRNb3ZlQWN0aW9uKHRyaWdnZXIpIHtcbiAgICB0aGlzLnJlYWN0b3IuYWRkRXZlbnRMaXN0ZW5lcihcIm9uTW92ZVwiLCB0cmlnZ2VyKTtcbiAgfVxuICBcbiAgcmVtb3ZlTW92ZUFjdGlvbih0cmlnZ2VyKSB7XG4gICAgdGhpcy5yZWFjdG9yLnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJvbk1vdmVcIiwgdHJpZ2dlcik7XG4gIH1cblxuICByZW1vdmVBbGxNb3ZlQWN0aW9ucygpIHtcbiAgICB0aGlzLnJlYWN0b3IucmVtb3ZlQWxsRXZlbnRMaXN0ZW5lcihcIm9uTW92ZVwiKTtcbiAgfVxuICBcbiAgc2V0Q2hhbmdlQWN0aW9uKHRyaWdnZXIpIHtcbiAgICB0aGlzLnJlbW92ZUFsbENoYW5nZUFjdGlvbnMoKTtcbiAgICB0aGlzLmFkZENoYW5nZUFjdGlvbih0cmlnZ2VyKTtcbiAgfVxuICBcbiAgYWRkQ2hhbmdlQWN0aW9uKHRyaWdnZXIpIHtcbiAgICB0aGlzLnJlYWN0b3IuYWRkRXZlbnRMaXN0ZW5lcihcIm9uQ2hhbmdlXCIsIHRyaWdnZXIpO1xuICB9XG4gIFxuICByZW1vdmVDaGFuZ2VBY3Rpb24odHJpZ2dlcikge1xuICAgIHRoaXMucmVhY3Rvci5yZW1vdmVFdmVudExpc3RlbmVyKFwib25DaGFuZ2VcIiwgdHJpZ2dlcik7XG4gIH1cblxuICByZW1vdmVBbGxDaGFuZ2VBY3Rpb25zKCkge1xuICAgIHRoaXMucmVhY3Rvci5yZW1vdmVBbGxFdmVudExpc3RlbmVyKFwib25DaGFuZ2VcIik7XG4gIH1cblxuICBzZXRVcEFjdGlvbih0cmlnZ2VyKSB7XG4gICAgdGhpcy5yZW1vdmVBbGxVcEFjdGlvbnMoKTtcbiAgICB0aGlzLmFkZFVwQWN0aW9uKHRyaWdnZXIpO1xuICB9XG4gIFxuICBhZGRVcEFjdGlvbih0cmlnZ2VyKSB7XG4gICAgdGhpcy5yZWFjdG9yLmFkZEV2ZW50TGlzdGVuZXIoXCJvblVwXCIsIHRyaWdnZXIpO1xuICB9XG4gIFxuICByZW1vdmVVcEFjdGlvbih0cmlnZ2VyKSB7XG4gICAgdGhpcy5yZWFjdG9yLnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJvblVwXCIsIHRyaWdnZXIpO1xuICB9XG5cbiAgcmVtb3ZlQWxsVXBBY3Rpb25zKCkge1xuICAgIHRoaXMucmVhY3Rvci5yZW1vdmVBbGxFdmVudExpc3RlbmVyKFwib25VcFwiKTtcbiAgfVxuXG4gIGdldCBoZWlnaHQoKSB7XG4gICAgcmV0dXJuIHRoaXMuI19oZWlnaHQ7XG4gIH1cblxuICBnZXQgd2lkdGgoKSB7XG4gICAgcmV0dXJuIHRoaXMuI193aWR0aDtcbiAgfVxuXG4gIHNldCB3aWR0aCh3aWR0aCkge1xuICAgIGlmKHdpZHRoICE9IHRoaXMuI193aWR0aCkge1xuICAgICAgdGhpcy4jX3dpZHRoID0gd2lkdGg7XG4gICAgICB0aGlzLnJlYWN0b3IgJiYgdGhpcy5yZWFjdG9yLmRpc3BhdGNoRXZlbnQoXCJvbkNoYW5nZVwiLCB0aGlzKTtcbiAgICB9XG4gIH1cblxuICBzZXQgaGVpZ2h0KGhlaWdodCkge1xuICAgIGlmKGhlaWdodCAhPSB0aGlzLiNfaGVpZ2h0KSB7XG4gICAgICB0aGlzLiNfaGVpZ2h0ID0gaGVpZ2h0O1xuICAgICAgdGhpcy5yZWFjdG9yICYmIHRoaXMucmVhY3Rvci5kaXNwYXRjaEV2ZW50KFwib25DaGFuZ2VcIiwgdGhpcyk7XG4gICAgfVxuICB9XG5cbiAgZ2V0IG1heFdpZHRoKCkge1xuICAgIHJldHVybiB0aGlzLndpZHRoO1xuICB9XG5cbiAgZ2V0IG1heEhlaWdodCgpIHtcbiAgICByZXR1cm4gdGhpcy5oZWlnaHQ7XG4gIH1cblxuICBnZXQgaW5uZXJXaWR0aCgpIHtcbiAgICByZXR1cm4gdGhpcy53aWR0aDtcbiAgfVxuXG4gIGdldCBpbm5lckhlaWdodCgpIHtcbiAgICByZXR1cm4gdGhpcy5oZWlnaHQ7XG4gIH1cblxuICBnZXQgbWluV2lkdGgoKSB7XG4gICAgcmV0dXJuIHRoaXMud2lkdGg7XG4gIH1cblxuICBnZXQgbWluSGVpZ2h0KCkge1xuICAgIHJldHVybiB0aGlzLmhlaWdodDtcbiAgfVxuXG4gIGdldCB4KCkge1xuICAgIGNvbnN0IHBhcmVudCA9IHRoaXMucGFyZW50IHx8IHRoaXMuY2FudmFzO1xuXG4gICAgaWYodGhpcy5zdHlsZS5hbGlnbmVtZW50ICYmIHBhcmVudCkge1xuICAgICAgY29uc3QgcGFyZW50V2lkdGggPSBwYXJlbnQud2lkdGg7XG4gICAgICBjb25zdCBwYXJlbnRQYWRkaW5nID0gKHBhcmVudC5zdHlsZSAmJiBwYXJlbnQuc3R5bGUucGFkZGluZykgfHwgMDtcblxuICAgICAgaWYodGhpcy5zdHlsZS5hbGlnbmVtZW50ID09IENvbnN0YW50cy5BbGlnbmVtZW50LkNFTlRFUikge1xuICAgICAgICByZXR1cm4gcGFyZW50LnggKyAocGFyZW50V2lkdGggLyAyKSAtICh0aGlzLndpZHRoIC8gMikgKyB0aGlzLmRlbHRhWDtcbiAgICAgIH0gZWxzZSBpZih0aGlzLnN0eWxlLmFsaWduZW1lbnQgPT0gQ29uc3RhbnRzLkFsaWduZW1lbnQuUklHSFQpIHtcbiAgICAgICAgcmV0dXJuIHBhcmVudC54ICsgKHBhcmVudFdpZHRoKSAtICh0aGlzLndpZHRoKSAtIHBhcmVudFBhZGRpbmcgKyB0aGlzLmRlbHRhWDtcbiAgICAgIH0gZWxzZSBpZih0aGlzLnN0eWxlLmFsaWduZW1lbnQgPT0gQ29uc3RhbnRzLkFsaWduZW1lbnQuTEVGVCkge1xuICAgICAgICByZXR1cm4gcGFyZW50LnggKyBwYXJlbnRQYWRkaW5nICsgdGhpcy5kZWx0YVg7XG4gICAgICB9XG4gICAgfSBlbHNlIGlmKHBhcmVudCkge1xuICAgICAgcmV0dXJuIHBhcmVudC54ICsgdGhpcy4jX3ggKyB0aGlzLmRlbHRhWDtcbiAgICB9XG4gICAgXG4gICAgcmV0dXJuIHRoaXMuI194ICsgdGhpcy5kZWx0YVg7XG4gIH1cblxuICBzZXQgeCh4KSB7XG4gICAgdGhpcy4jX3ggPSB4O1xuICAgIHRoaXMucmVhY3RvciAmJiB0aGlzLnJlYWN0b3IuZGlzcGF0Y2hFdmVudChcIm9uQ2hhbmdlXCIsIHRoaXMpO1xuICB9XG5cbiAgZ2V0IHkoKSB7XG4gICAgY29uc3QgcGFyZW50ID0gdGhpcy5wYXJlbnQgfHwgdGhpcy5jYW52YXM7XG5cbiAgICBpZih0aGlzLnN0eWxlLnZlcnRpY2FsQWxpZ25lbWVudCAmJiBwYXJlbnQpIHtcbiAgICAgIGNvbnN0IHBhcmVudEhlaWdodCA9IHBhcmVudC5oZWlnaHQ7XG4gICAgICBjb25zdCBwYXJlbnRQYWRkaW5nID0gKHBhcmVudC5zdHlsZSAmJiBwYXJlbnQuc3R5bGUucGFkZGluZykgfHwgMDtcblxuICAgICAgaWYodGhpcy5zdHlsZS52ZXJ0aWNhbEFsaWduZW1lbnQgPT0gQ29uc3RhbnRzLlZlcnRpY2FsQWxpZ25lbWVudC5CT1RUT00pIHtcbiAgICAgICAgcmV0dXJuIHBhcmVudC55ICsgKHBhcmVudEhlaWdodCkgLSAodGhpcy5oZWlnaHQpIC0gcGFyZW50UGFkZGluZyArIHRoaXMuZGVsdGFZO1xuICAgICAgfSBlbHNlIGlmKHRoaXMuc3R5bGUudmVydGljYWxBbGlnbmVtZW50ID09IENvbnN0YW50cy5WZXJ0aWNhbEFsaWduZW1lbnQuQ0VOVEVSKSB7XG4gICAgICAgIHJldHVybiBwYXJlbnQueSArIChwYXJlbnRIZWlnaHQgLyAyKSAtICh0aGlzLmhlaWdodCAvIDIpICsgdGhpcy5kZWx0YVk7XG4gICAgICB9IGVsc2UgaWYodGhpcy5zdHlsZS52ZXJ0aWNhbEFsaWduZW1lbnQgPT0gQ29uc3RhbnRzLlZlcnRpY2FsQWxpZ25lbWVudC5UT1ApIHtcbiAgICAgICAgcmV0dXJuIHBhcmVudC55ICsgcGFyZW50UGFkZGluZyArIHRoaXMuZGVsdGFZO1xuICAgICAgfVxuICAgIH0gZWxzZSBpZihwYXJlbnQpIHtcbiAgICAgIHJldHVybiBwYXJlbnQueSArIHRoaXMuI195ICsgdGhpcy5kZWx0YVk7XG4gICAgfVxuICAgIFxuICAgIHJldHVybiB0aGlzLiNfeSArIHRoaXMuZGVsdGFZO1xuICB9XG5cbiAgc2V0IHkoeSkge1xuICAgIHRoaXMuI195ID0geTtcbiAgICB0aGlzLnJlYWN0b3IgJiYgdGhpcy5yZWFjdG9yLmRpc3BhdGNoRXZlbnQoXCJvbkNoYW5nZVwiLCB0aGlzKTtcbiAgfVxuXG4gIGdldCBkZWZhdWx0U3R5bGUoKSB7XG4gICAgcmV0dXJuIG5ldyBTdHlsZSh7XG4gICAgICBcInBhZGRpbmdcIjogQ29uc3RhbnRzLlNldHRpbmcuREVGQVVMVF9QQURESU5HLFxuICAgICAgXCJzcGFjZUJldHdlZW5Db21wb25lbnRzXCI6IENvbnN0YW50cy5TZXR0aW5nLkRFRkFVTFRfU1BBQ0lOR1xuICAgIH0pO1xuICB9XG5cbiAgZ2V0IHN0eWxlKCkge1xuICAgIHJldHVybiB0aGlzLiNfc3R5bGUgfHwgdGhpcy5kZWZhdWx0U3R5bGU7XG4gIH1cblxuICBzZXQgc3R5bGUoc3R5bGUpIHtcbiAgICB0aGlzLiNfc3R5bGUgPSBuZXcgU3R5bGUoKTtcbiAgICB0aGlzLiNfc3R5bGUuc2V0QWxsKHRoaXMuZGVmYXVsdFN0eWxlLmdldFN0eWxlcygpKTtcblxuICAgIGlmKHN0eWxlICYmIHN0eWxlIGluc3RhbmNlb2YgU3R5bGUpIHtcbiAgICAgIHRoaXMuI19zdHlsZS5zZXRBbGwoc3R5bGUuZ2V0U3R5bGVzKCkpO1xuICAgIH1cblxuICAgIHRoaXMuI19zdHlsZS5jb21wb25lbnQgPSB0aGlzO1xuICAgIHRoaXMucmVhY3RvciAmJiB0aGlzLnJlYWN0b3IuZGlzcGF0Y2hFdmVudChcIm9uQ2hhbmdlXCIsIHRoaXMpO1xuICB9XG5cbiAgZ2V0IGhpZGRlbigpIHtcbiAgICByZXR1cm4gKHRoaXMuc3R5bGUgJiYgdGhpcy5zdHlsZS5oaWRkZW4pO1xuICB9XG5cbiAgc2V0IGhpZGRlbihoaWRkZW4pIHtcbiAgICBpZihoaWRkZW4gIT0gdGhpcy5kaXNhYmxlZCB8fCBoaWRkZW4gIT0gdGhpcy5zdHlsZS5oaWRkZW4pIHtcbiAgICAgIHRoaXMuZGlzYWJsZWQgPSBoaWRkZW47XG4gICAgICBpZih0aGlzLnN0eWxlKSB0aGlzLnN0eWxlLnNldChcImhpZGRlblwiLCBoaWRkZW4pO1xuICAgICAgdGhpcy5yZWFjdG9yICYmIHRoaXMucmVhY3Rvci5kaXNwYXRjaEV2ZW50KFwib25DaGFuZ2VcIiwgdGhpcyk7XG4gICAgfVxuICB9XG5cbiAgZ2V0IHNlbGVjdGVkKCkge1xuICAgIHJldHVybiB0aGlzLiNfc2VsZWN0ZWQ7XG4gIH1cblxuICBzZXQgc2VsZWN0ZWQoc2VsZWN0ZWQpIHtcbiAgICBpZihzZWxlY3RlZCAhPSB0aGlzLiNfc2VsZWN0ZWQpIHtcbiAgICAgIHRoaXMuI19zZWxlY3RlZCA9IHNlbGVjdGVkO1xuICAgICAgdGhpcy5yZWFjdG9yICYmIHRoaXMucmVhY3Rvci5kaXNwYXRjaEV2ZW50KFwib25DaGFuZ2VcIiwgdGhpcyk7XG4gICAgfVxuICB9XG5cbiAgZ2V0QWxsUGFyZW50cygpIHtcbiAgICBsZXQgcGFyZW50ID0gdGhpcy5wYXJlbnQ7XG4gICAgbGV0IHJlcyA9IFtdO1xuXG4gICAgd2hpbGUocGFyZW50KSB7XG4gICAgICByZXMucHVzaChwYXJlbnQpO1xuICAgICAgcGFyZW50ID0gcGFyZW50LnBhcmVudDtcbiAgICB9XG5cbiAgICByZXR1cm4gcmVzO1xuICB9XG5cbiAgc3RhdGljIGNvbXBhcmVDb21wb25lbnRzKGNvbXBvbmVudCwgb3RoZXIpIHtcbiAgICByZXR1cm4gY29tcG9uZW50LmNvbXBhcmVUbyhvdGhlcik7XG4gIH1cblxuICBjb21wYXJlVG8ob3RoZXJDb21wb25lbnQpIHtcbiAgICBjb25zdCBpc0ZvcmVncm91bmQgPSB0aGlzLnN0eWxlICYmIHRoaXMuc3R5bGUuZm9yZWdyb3VuZDtcbiAgICBjb25zdCBvdGhlcklzRm9yZWdyb3VuZCA9IG90aGVyQ29tcG9uZW50LnN0eWxlICYmIG90aGVyQ29tcG9uZW50LnN0eWxlLmZvcmVncm91bmQ7XG4gICAgY29uc3QgekluZGV4ID0gdGhpcy5zdHlsZSAmJiB0aGlzLnN0eWxlLnpJbmRleDtcbiAgICBjb25zdCBvdGhlcnpJbmRleCA9IG90aGVyQ29tcG9uZW50LnN0eWxlICYmIG90aGVyQ29tcG9uZW50LnN0eWxlLnpJbmRleDtcblxuICAgIGlmKHRoaXMucGFyZW50ID09IG90aGVyQ29tcG9uZW50KSB7XG4gICAgICByZXR1cm4gMTtcbiAgICB9IGVsc2UgaWYob3RoZXJDb21wb25lbnQucGFyZW50ID09IHRoaXMpIHtcbiAgICAgIHJldHVybiAtMTtcbiAgICB9IGVsc2UgaWYoaXNGb3JlZ3JvdW5kICYmICFvdGhlcklzRm9yZWdyb3VuZCkge1xuICAgICAgcmV0dXJuIDE7XG4gICAgfSBlbHNlIGlmKCFpc0ZvcmVncm91bmQgJiYgb3RoZXJJc0ZvcmVncm91bmQpIHtcbiAgICAgIHJldHVybiAtMTtcbiAgICB9IGVsc2UgaWYoekluZGV4ID4gb3RoZXJ6SW5kZXgpIHtcbiAgICAgIHJldHVybiAxO1xuICAgIH0gZWxzZSBpZih6SW5kZXggPCBvdGhlcnpJbmRleCkge1xuICAgICAgcmV0dXJuIC0xO1xuICAgIH1cblxuICAgIHJldHVybiBvdGhlckNvbXBvbmVudC5jb21wYXJlVG9Db21wb25lbnQodGhpcykgfHwgLXRoaXMuY29tcGFyZVRvQ29tcG9uZW50KG90aGVyQ29tcG9uZW50KTtcbiAgfVxuXG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bnVzZWQtdmFyc1xuICBjb21wYXJlVG9Db21wb25lbnQob3RoZXJDb21wb25lbnQpIHtcbiAgICByZXR1cm4gMDtcbiAgfVxuXG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bnVzZWQtdmFyc1xuICBjb21wYXJlVG9NZW51KG90aGVyQ29tcG9uZW50KSB7XG4gICAgcmV0dXJuIC0xO1xuICB9XG5cbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVudXNlZC12YXJzXG4gIGNvbXBhcmVUb1Rvb2x0aXAob3RoZXJDb21wb25lbnQpIHtcbiAgICByZXR1cm4gLTE7XG4gIH1cblxuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdW51c2VkLXZhcnNcbiAgY29tcGFyZVRvTm90aWZpY2F0aW9uKG90aGVyQ29tcG9uZW50KSB7XG4gICAgcmV0dXJuIC0xO1xuICB9XG5cbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVudXNlZC12YXJzXG4gIGNvbXBhcmVUb1Njcm9sbGJhcihvdGhlckNvbXBvbmVudCkge1xuICAgIHJldHVybiAtMTtcbiAgfVxufSIsIi8qXG4gKiBDb3B5cmlnaHQgKEMpIDIwMjAgRWxpYXN0aWsgKGVsaWFzdGlrc29mdHMuY29tKVxuICpcbiAqIFRoaXMgZmlsZSBpcyBwYXJ0IG9mIFwiSlNHYW1lVG9vbHNcIi5cbiAqXG4gKiBcIkpTR2FtZVRvb2xzXCIgaXMgZnJlZSBzb2Z0d2FyZTogeW91IGNhbiByZWRpc3RyaWJ1dGUgaXQgYW5kL29yIG1vZGlmeVxuICogaXQgdW5kZXIgdGhlIHRlcm1zIG9mIHRoZSBHTlUgR2VuZXJhbCBQdWJsaWMgTGljZW5zZSBhcyBwdWJsaXNoZWQgYnlcbiAqIHRoZSBGcmVlIFNvZnR3YXJlIEZvdW5kYXRpb24sIGVpdGhlciB2ZXJzaW9uIDMgb2YgdGhlIExpY2Vuc2UsIG9yXG4gKiAoYXQgeW91ciBvcHRpb24pIGFueSBsYXRlciB2ZXJzaW9uLlxuICpcbiAqIFwiSlNHYW1lVG9vbHNcIiBpcyBkaXN0cmlidXRlZCBpbiB0aGUgaG9wZSB0aGF0IGl0IHdpbGwgYmUgdXNlZnVsLFxuICogYnV0IFdJVEhPVVQgQU5ZIFdBUlJBTlRZOyB3aXRob3V0IGV2ZW4gdGhlIGltcGxpZWQgd2FycmFudHkgb2ZcbiAqIE1FUkNIQU5UQUJJTElUWSBvciBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRS4gIFNlZSB0aGVcbiAqIEdOVSBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlIGZvciBtb3JlIGRldGFpbHMuXG4gKlxuICogWW91IHNob3VsZCBoYXZlIHJlY2VpdmVkIGEgY29weSBvZiB0aGUgR05VIEdlbmVyYWwgUHVibGljIExpY2Vuc2VcbiAqIGFsb25nIHdpdGggXCJKU0dhbWVUb29sc1wiLiAgSWYgbm90LCBzZWUgPGh0dHA6Ly93d3cuZ251Lm9yZy9saWNlbnNlcy8+LlxuICovXG5leHBvcnQgZGVmYXVsdCB7XG4gIFNldHRpbmc6IHtcbiAgICBESVNBQkxFX09QVElNSVpBVElPTlM6IGZhbHNlLCAvLyB0cnVlIHRvIGRpc2FibGUgb3B0aW1pemF0aW9ucywgY2FuIGZpeCBzb21lIHByb2JsZW1zLCBkaXNhYmxpbmcgb3B0aW1pemF0aW9uIHJlZHVjZXMgcGVyZm9ybWFuY2VcbiAgICBESVNBQkxFX0VYUEVSSU1FTlRBTF9PUFRJTUlaQVRJT05TOiBmYWxzZSwgLy8gdHJ1ZSB0byBkaXNhYmxlIG9wdGltaXphdGlvbnMgdGhhdCBhcmUgY29uc2lkZXJlZCBleHBlcmltZW50YWxcbiAgICBESVNBQkxFX0lTX0NPTVBPTkVOVF9WSVNJQkxFX09QVElNSVpBVElPTlM6IHRydWUsIC8vIHRydWUgdG8gZGlzYWJsZSBvcHRpbWl6YXRpb25zIG9mIHRoZSBDb250YWluZXIuaXNDb21wb25lbnRWaXNpYmxlIG1ldGhvZFxuICAgIERJU0FCTEVfQ09OVEFJTkVSU19DVVRUSU5HOiBmYWxzZSwgLy8gZGlzYWJsaW5nIGNvbnRhaW5lcnMgY3V0dGluZyBhbGxvdyB0byB2aWV3IHRoZSBjb21wb25lbnRzIG9mIGEgY29udGFpbmVyIHRoYXQgYXJlIG5vdCB0b3RhbGx5IHZpc2libGUsIHlvdSBjYW4gYWxzbyBkaXNhYmxlIG9wdGltaXphdGlvbnMgdG8gZGlzcGxheXMgZWxlbWVudHMgdGhhdCBhcmUgbm90IGRyYXduIGZvciBvcHRpbWl6YXRpb24gcHVycG9zZXNcbiAgICBFTkFCTEVfUElYRUxfUkFUSU9fUkVTSVpJTkc6IHRydWUsIC8vIGVuYWJsaW5nIHRoaXMgYWxsb3cgcmVzaXppbmcgdGhlIGNhbnZhcyB0byBtYXRjaCB0aGUgc2NyZWVuIHBpeGVsIHJhdGlvXG4gICAgUElYRUxfUkFUSU86IDEsIC8vIHRoZSBjdXJyZW50IHBpeGVsIHJhdGlvLCBhdXRvbWF0aWNhbGx5IHVwZGF0ZWRcbiAgICBSRVNPTFVUSU9OX1NDQUxFOiAxLCAvLyB0aGUgcmVzb2x1dGlvbiBzY2FsZVxuICAgIEZPTlRfRkFNSUxZOiBcInNhbnMtc2VyaWZcIixcbiAgICBGT05UX1NJWkU6IDI4LFxuICAgIENBTlZBU19XSURUSDogNjAwLFxuICAgIENBTlZBU19IRUlHSFQ6IDQwMCxcbiAgICBERUZBVUxUX1BBRERJTkc6IDYsXG4gICAgREVGQVVMVF9TUEFDSU5HOiA2LFxuICAgIEJVVFRPTl9ERUZBVUxUX0JBQ0tHUk9VTkQ6IFwicmdiYSgwLCAwLCAwLCAwKVwiLFxuICAgIEJVVFRPTl9ERUZBVUxUX0hPVkVSX0JBQ0tHUk9VTkQ6IFwiIzk1QTVBNlwiLFxuICAgIEJVVFRPTl9ERUZBVUxUX0NMSUNLX0JBQ0tHUk9VTkQ6IFwiIzcyN0Y4MFwiLFxuICAgIEJVVFRPTl9ERUZBVUxUX0FMVEVSTkFUSVZFX0JBQ0tHUk9VTkQ6IFwiI0FDQkVCRlwiLFxuICAgIElOUFVUX0RFRkFVTFRfRk9OVF9DT0xPUjogXCIjMDAwXCIsXG4gICAgSU5QVVRfREVGQVVMVF9CQUNLR1JPVU5EX0NPTE9SOiBcIiNmZmZcIixcbiAgICBJTlBVVF9ERUZBVUxUX0JPUkRFUl9DT0xPUjogXCIjMDAwXCIsXG4gICAgSU5QVVRfREVGQVVMVF9CT1JERVJfQ09MT1JfU0VMRUNURUQ6IFwiI2EyY2RkOFwiLFxuICAgIElOUFVUX0RFRkFVTFRfU0VMRUNUX0NPTE9SOiBcIiMyOTgwYjlcIixcbiAgICBMQUJFTF9ERUZBVUxUX0ZPTlRfQ09MT1I6IFwiIzAwMFwiLFxuICAgIExJTktfREVGQVVMVF9DT0xPUjogXCIjMDAwMEVFXCIsXG4gICAgTElOS19ERUZBVUxUX0hPVkVSX0NPTE9SOiBcIiM0RDRERkZcIixcbiAgICBMSU5LX0RFRkFVTFRfQ0xJQ0tfQ09MT1I6IFwiI0VFNzcwMFwiLFxuICAgIE1FTlVfREVGQVVMVF9CQUNLR1JPVU5EOiBcInJnYmEoNDQsIDYyLCA4MCwgMC43NSlcIixcbiAgICBNRU5VX0RFRkFVTFRfQkxVUl9CQUNLR1JPVU5EOiBmYWxzZSxcbiAgICBOT1RJRklDQVRJT05fREVGQVVMVF9CQUNLR1JPVU5EOiBcInJnYmEoNDYsIDIwNCwgMTEzLCAwLjUpXCIsXG4gICAgTk9USUZJQ0FUSU9OX0RFRkFVTFRfQU5JTUFUSU9OX0RVUkFUSU9OOiA1MDAsIC8vIG1zXG4gICAgUFJPR1JFU1NfREVGQVVMVF9CQUNLR1JPVU5EOiBcIiNiZGMzYzdcIixcbiAgICBQUk9HUkVTU19ERUZBVUxUX0ZPUkVHUk9VTkQ6IFwiIzI3YWU2MFwiLFxuICAgIFBST0dSRVNTX0RFRkFVTFRfQU5JTUFUSU9OX0RVUkFUSU9OOiAyMDAwLCAvLyBtc1xuICAgIFRPT0xUSVBfREVGQVVMVF9CQUNLR1JPVU5EOiBcInJnYmEoMjU1LCAyNTUsIDI1NSwgMC4yNSlcIixcbiAgICBBUlJPV19ERUZBVUxUX0xJTkVfQ0FQOiBcInJvdW5kXCIsXG4gICAgQVJST1dfREVGQVVMVF9DT0xPUjogXCIjRkYwMDAwXCIsXG4gICAgQVJST1dfREVGQVVMVF9MSU5FX1NJWkU6IDgsXG4gICAgQVJST1dfREVGQVVMVF9IRUFEX1NJWkU6IDIwLFxuICAgIENST1NTX0RFRkFVTFRfTElORV9DQVA6IFwicm91bmRcIixcbiAgICBDUk9TU19ERUZBVUxUX0NPTE9SOiBcIiNmZmZcIixcbiAgICBDUk9TU19ERUZBVUxUX0xJTkVfU0laRTogMyxcbiAgICBTQ1JPTExCQVJfREVGQVVMVF9CQUNLR1JPVU5EOiBcInJnYmEoMTQ5LCAxNjUsIDE2NiwgMC43NSlcIixcbiAgICBTQ1JPTExCQVJfREVGQVVMVF9IT1ZFUl9CQUNLR1JPVU5EOiBcInJnYmEoMTQ5LCAxNjUsIDE2NiwgMC45KVwiLFxuICAgIFNDUk9MTEJBUl9ERUZBVUxUX0NMSUNLX0JBQ0tHUk9VTkQ6IFwicmdiYSgxNDksIDE2NSwgMTY2LCAwLjUpXCIsXG4gICAgU0NST0xMQkFSX0RFRkFVTFRfU0laRTogMTAsXG4gICAgREVGQVVMVF9CT1JERVJfU0laRTogMyxcbiAgICBERUZBVUxUX0JPUkRFUl9DT0xPUl9TRUxFQ1RFRDogXCIjYTJjZGQ4XCIsXG4gICAgREVGQVVMVF9BTklNQVRJT05fRFVSQVRJT046IDIwMDAsIC8vIG1zXG4gICAgVFJJQU5HTEVfREVGQVVMVF9MSU5FX0NBUDogXCJyb3VuZFwiLFxuICAgIFRSSUFOR0xFX0RFRkFVTFRfQ09MT1I6IFwiIzAwMFwiLFxuICAgIFRSSUFOR0xFX0RFRkFVTFRfRklMTF9DT0xPUjogXCIjMDAwXCIsXG4gICAgVFJJQU5HTEVfREVGQVVMVF9MSU5FX1NJWkU6IDMsXG4gICAgVFJJQU5HTEVfREVGQVVMVF9GSUxMOiB0cnVlLFxuICAgIFNFTEVDVF9ERUZBVUxUX0JBQ0tHUk9VTkQ6IFwiI2VjZjBmMVwiLFxuICAgIFNFTEVDVF9ERUZBVUxUX0hPVkVSX0JBQ0tHUk9VTkQ6IFwiI2JkYzNjN1wiLFxuICAgIFNFTEVDVF9ERUZBVUxUX0NMSUNLX0JBQ0tHUk9VTkQ6IFwiI2FkYjJiNVwiLFxuICAgIENJUkNMRV9ERUZBVUxUX0xJTkVfQ0FQOiBcInJvdW5kXCIsXG4gICAgQ0lSQ0xFX0RFRkFVTFRfQ09MT1I6IFwiI2ZmZlwiLFxuICAgIENJUkNMRV9ERUZBVUxUX0ZJTExfQ09MT1I6IFwiIzAwMFwiLFxuICAgIENJUkNMRV9ERUZBVUxUX0xJTkVfU0laRTogMyxcbiAgICBDSVJDTEVfREVGQVVMVF9GSUxMOiB0cnVlLFxuICAgIEVSUk9SX01FTlVfQkFDS0dST1VORF9DT0xPUjogXCIjMzQ5OGRiXCJcbiAgfSxcbiAgS2V5OiB7XG4gICAgVVA6IDM4LFxuICAgIFJJR0hUOiAzOSxcbiAgICBCT1RUT006IDQwLFxuICAgIExFRlQ6IDM3LFxuICAgIEVOVEVSOiAxMyxcbiAgICBFQ0hBUDogMjcsXG4gICAgVEFCOiA5XG4gIH0sXG4gIEFsaWduZW1lbnQ6IHtcbiAgICBSSUdIVDogXCJyaWdodFwiLFxuICAgIExFRlQ6IFwibGVmdFwiLFxuICAgIENFTlRFUjogXCJjZW50ZXJcIixcbiAgICBERUZBVUxUOiBcImRlZmF1bHRcIlxuICB9LFxuICBWZXJ0aWNhbEFsaWduZW1lbnQ6IHtcbiAgICBUT1A6IFwidG9wXCIsXG4gICAgQ0VOVEVSOiBcImNlbnRlclwiLFxuICAgIEJPVFRPTTogXCJib3R0b21cIixcbiAgICBERUZBVUxUOiBcImRlZmF1bHRcIlxuICB9LFxuICBTdHJpbmc6IHtcbiAgICBFUlJPUl9NRVNTQUdFX0NBTlZBUzogXCJBIGZhdGFsIGVycm9yIGhhcyBvY2N1cnJlZCBhdCB0aGUgSlNHYW1lVG9vbHMgbGV2ZWwuXCIsXG4gICAgRVJST1JfTUVTU0FHRV9DQU5WQVNfTEFCRUwgOiBcIjonKFxcbkEgZmF0YWwgZXJyb3IgaGFzIG9jY3VycmVkIGF0IHRoZSBKU0dhbWVUb29scyBsZXZlbC5cIixcbiAgICBSRVRSWTogXCJSZXRyeVwiLFxuICAgIE5PVElDRV9NRVNTQUdFOiBcIk5vdGljZTpcIixcbiAgICBXQVJOSU5HX01FU1NBR0U6IFwiV2FybmluZzpcIixcbiAgICBFUlJPUl9NRVNTQUdFOiBcIkVycm9yOlwiLFxuICAgIE9QVElNSVpBVElPTl9ESVNBQkxFRDogXCJPcHRpbWl6YXRpb25zIGFyZSBkaXNhYmxlZC4gWW91IG1heSBub3RpY2UgbG93IHBlcmZvcm1hbmNlLlwiLFxuICAgIENPTlRBSU5FUl9DVVRUSU5HX0RJU0FCTEVEOiBcIkNvbnRhaW5lcnMgY3V0dGluZyBpcyBkaXNhYmxlZC5cIixcbiAgICBCVVRUT05fSU1BR0VfREVQUkVDQVRFRDogXCJKU0dhbWVUb29scy5CdXR0b25JbWFnZSBpcyBkZXByZWNhdGVkLiBQbGVhc2UgdXNlIGEgQnV0dG9uIHdpdGggYW4gSW1hZ2VDb250YWluZXIgaW5zdGVhZC5cIixcbiAgICBJTlBVVF9GVUxMU0NSRUVOOiBcIlRoZSB1c2Ugb2YgSlNHYW1lVG9vbHMuQ2FudmFzIGlzIG5lZWRlZCBmb3IgSW5wdXQgY29tcG9uZW50cyB0byBwcm9wZXJseSB3b3JrIGluIGZ1bGxzY3JlZW4gbW9kZS5cIixcbiAgICBERVRBSUxTOiBcIkRldGFpbHNcIlxuICB9XG59OyIsIi8qXG4gKiBDb3B5cmlnaHQgKEMpIDIwMjAgRWxpYXN0aWsgKGVsaWFzdGlrc29mdHMuY29tKVxuICpcbiAqIFRoaXMgZmlsZSBpcyBwYXJ0IG9mIFwiSlNHYW1lVG9vbHNcIi5cbiAqXG4gKiBcIkpTR2FtZVRvb2xzXCIgaXMgZnJlZSBzb2Z0d2FyZTogeW91IGNhbiByZWRpc3RyaWJ1dGUgaXQgYW5kL29yIG1vZGlmeVxuICogaXQgdW5kZXIgdGhlIHRlcm1zIG9mIHRoZSBHTlUgR2VuZXJhbCBQdWJsaWMgTGljZW5zZSBhcyBwdWJsaXNoZWQgYnlcbiAqIHRoZSBGcmVlIFNvZnR3YXJlIEZvdW5kYXRpb24sIGVpdGhlciB2ZXJzaW9uIDMgb2YgdGhlIExpY2Vuc2UsIG9yXG4gKiAoYXQgeW91ciBvcHRpb24pIGFueSBsYXRlciB2ZXJzaW9uLlxuICpcbiAqIFwiSlNHYW1lVG9vbHNcIiBpcyBkaXN0cmlidXRlZCBpbiB0aGUgaG9wZSB0aGF0IGl0IHdpbGwgYmUgdXNlZnVsLFxuICogYnV0IFdJVEhPVVQgQU5ZIFdBUlJBTlRZOyB3aXRob3V0IGV2ZW4gdGhlIGltcGxpZWQgd2FycmFudHkgb2ZcbiAqIE1FUkNIQU5UQUJJTElUWSBvciBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRS4gIFNlZSB0aGVcbiAqIEdOVSBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlIGZvciBtb3JlIGRldGFpbHMuXG4gKlxuICogWW91IHNob3VsZCBoYXZlIHJlY2VpdmVkIGEgY29weSBvZiB0aGUgR05VIEdlbmVyYWwgUHVibGljIExpY2Vuc2VcbiAqIGFsb25nIHdpdGggXCJKU0dhbWVUb29sc1wiLiAgSWYgbm90LCBzZWUgPGh0dHA6Ly93d3cuZ251Lm9yZy9saWNlbnNlcy8+LlxuICovXG5pbXBvcnQgQm94IGZyb20gXCIuL0JveFwiO1xuaW1wb3J0IENvbXBvbmVudCBmcm9tIFwiLi9Db21wb25lbnRcIjtcbmltcG9ydCBDb25zdGFudHMgZnJvbSBcIi4vQ29uc3RhbnRzXCI7XG5pbXBvcnQgU2Nyb2xsYmFySG9yaXpvbnRhbCBmcm9tIFwiLi9TY3JvbGxiYXJIb3Jpem9udGFsXCI7XG5pbXBvcnQgU2Nyb2xsYmFyVmVydGljYWwgZnJvbSBcIi4vU2Nyb2xsYmFyVmVydGljYWxcIjtcbmltcG9ydCBTdHlsZSBmcm9tIFwiLi9TdHlsZVwiO1xuaW1wb3J0IFV0aWxzIGZyb20gXCIuL1V0aWxzXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIENvbnRhaW5lciBleHRlbmRzIEJveCB7XG4gIHNlbGVjdGFibGUgPSBmYWxzZTtcbiAgI2NvbXBvbmVudHMgPSBbXTtcbiAgI19tYXhXaWR0aCA9IDA7XG4gICNfbWF4SGVpZ2h0ID0gMDtcbiAgI19taW5XaWR0aCA9IDA7XG4gICNfbWluSGVpZ2h0ID0gMDtcbiAgZXZlbnRDaGFuZ2VDYWxsYmFjayA9ICgpID0+IHRoaXMucmVhY3Rvci5kaXNwYXRjaEV2ZW50KFwib25DaGFuZ2VcIiwgdGhpcyk7XG5cbiAgY29uc3RydWN0b3IoeCwgeSwgbWF4V2lkdGgsIG1heEhlaWdodCwgc3R5bGUsIC4uLmNvbXBvbmVudHMpIHtcbiAgICBzdXBlcih4LCB5LCBudWxsLCBudWxsLCBzdHlsZSk7XG5cbiAgICB0aGlzLmFkZEFsbCguLi5jb21wb25lbnRzKTtcbiAgICB0aGlzLmNhbnZhc1RtcCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJjYW52YXNcIik7XG4gICAgdGhpcy4jX21heFdpZHRoID0gbWF4V2lkdGg7XG4gICAgdGhpcy4jX21heEhlaWdodCA9IG1heEhlaWdodDtcbiAgICB0aGlzLnNjcm9sbGJhckhvcml6b250YWwgPSBuZXcgU2Nyb2xsYmFySG9yaXpvbnRhbChudWxsLCBudWxsLCB0aGlzKTtcbiAgICB0aGlzLnNjcm9sbGJhclZlcnRpY2FsID0gbmV3IFNjcm9sbGJhclZlcnRpY2FsKG51bGwsIG51bGwsIHRoaXMpO1xuXG4gICAgdGhpcy5hZGRTY3JvbGxBY3Rpb24oKGRlbHRhWCwgZGVsdGFZKSA9PiB0aGlzLmNvbnRyb2xTY3JvbGxpbmcoZGVsdGFYLCBkZWx0YVkpKTtcblxuICAgIGlmKCFDb25zdGFudHMuU2V0dGluZy5ESVNBQkxFX0VYUEVSSU1FTlRBTF9PUFRJTUlaQVRJT05TKSB7XG4gICAgICB0aGlzLmFkZENoYW5nZUFjdGlvbihjb21wb25lbnRDaGFuZ2VkID0+IHtcbiAgICAgICAgY29tcG9uZW50Q2hhbmdlZCA9PSB0aGlzLnBhcmVudCAmJiB0aGlzLmNvbXBvbmVudHMuZm9yRWFjaChjb21wb25lbnQgPT4gY29tcG9uZW50ICYmIGNvbXBvbmVudC5yZWFjdG9yLmRpc3BhdGNoRXZlbnQoXCJvbkNoYW5nZVwiLCB0aGlzKSk7XG4gICAgICB9KTtcbiAgICB9XG4gIH1cblxuICBkcmF3KGNvbnRleHQpIHtcbiAgICBpZih0aGlzLmhpZGRlbikgcmV0dXJuO1xuICAgIGNvbnN0IGNhbnZhcyA9IGNvbnRleHQuY2FudmFzO1xuICAgIGNvbnN0IGN0eCA9IGNhbnZhcy5nZXRDb250ZXh0KFwiMmRcIik7XG4gICAgY3R4LnNhdmUoKTtcblxuICAgIGlmKHRoaXMuaXNDdXR0aW5nKSB7XG4gICAgICBjb25zdCBjdHhUZW1wID0gdGhpcy5jYW52YXNUbXAuZ2V0Q29udGV4dChcIjJkXCIpO1xuICAgICAgdGhpcy5jYW52YXNUbXAud2lkdGggPSBVdGlscy5nZXRDYW52YXNXaWR0aChjYW52YXMpICogQ29uc3RhbnRzLlNldHRpbmcuUElYRUxfUkFUSU87XG4gICAgICB0aGlzLmNhbnZhc1RtcC5oZWlnaHQgPSBVdGlscy5nZXRDYW52YXNIZWlnaHQoY2FudmFzKSAqIENvbnN0YW50cy5TZXR0aW5nLlBJWEVMX1JBVElPO1xuICAgICAgdGhpcy5jYW52YXNUbXAuc3R5bGUud2lkdGggPSBVdGlscy5nZXRDYW52YXNXaWR0aChjYW52YXMpO1xuICAgICAgdGhpcy5jYW52YXNUbXAuc3R5bGUuaGVpZ2h0ID0gVXRpbHMuZ2V0Q2FudmFzSGVpZ2h0KGNhbnZhcyk7XG4gICAgICBVdGlscy5jbGVhcihjdHhUZW1wKTtcbiAgICB9XG4gICAgXG4gICAgdGhpcy5jb21wb25lbnRzLmZvckVhY2goY29tcG9uZW50ID0+IHtcbiAgICAgIGlmKHRoaXMuY2FudmFzKSBjb21wb25lbnQuY2FudmFzID0gdGhpcy5jYW52YXM7XG4gICAgfSk7XG4gICAgXG4gICAgdGhpcy5jb250cm9sU2Nyb2xsaW5nKDAsIDApO1xuICAgIHN1cGVyLmRyYXcoY29udGV4dCk7XG5cbiAgICBjdHgucmVzdG9yZSgpO1xuICB9XG5cbiAgZHJhd1ZlcnRpY2FsU2Nyb2xsQmFyKGN0eCkge1xuICAgIGlmKHRoaXMuc2Nyb2xsYmFyVmVydGljYWwpIHtcbiAgICAgIHRoaXMuc2Nyb2xsYmFyVmVydGljYWwuY2FudmFzID0gdGhpcy5jYW52YXM7XG4gICAgICB0aGlzLnNjcm9sbGJhclZlcnRpY2FsLmRyYXcoY3R4KTtcbiAgICB9XG4gIH1cblxuICBkcmF3SG9yaXpvbnRhbFNjcm9sbEJhcihjdHgpIHtcbiAgICBpZih0aGlzLnNjcm9sbGJhckhvcml6b250YWwpIHtcbiAgICAgIHRoaXMuc2Nyb2xsYmFySG9yaXpvbnRhbC5jYW52YXMgPSB0aGlzLmNhbnZhcztcbiAgICAgIHRoaXMuc2Nyb2xsYmFySG9yaXpvbnRhbC5kcmF3KGN0eCk7XG4gICAgfVxuICB9XG5cbiAgZHJhd1Njcm9sbGJhcnMoY3R4KSB7XG4gICAgaWYoIXRoaXMuc3R5bGUuc2Nyb2xsWERpc2FibGVkKSB0aGlzLmRyYXdIb3Jpem9udGFsU2Nyb2xsQmFyKGN0eCk7XG4gICAgaWYoIXRoaXMuc3R5bGUuc2Nyb2xsWURpc2FibGVkKSB0aGlzLmRyYXdWZXJ0aWNhbFNjcm9sbEJhcihjdHgpO1xuICB9XG5cbiAgc2V0KC4uLmNvbXBvbmVudHMpIHtcbiAgICBsZXQgaGFzQ2hhbmdlZCA9IGZhbHNlO1xuXG4gICAgaWYoY29tcG9uZW50cy5sZW5ndGggPT0gdGhpcy5jb21wb25lbnRzLmxlbmd0aCkge1xuICAgICAgY29tcG9uZW50cy5mb3JFYWNoKChjb21wb25lbnQsIGkpID0+IHtcbiAgICAgICAgaWYodGhpcy5jb21wb25lbnRzW2ldICE9IGNvbXBvbmVudCkgaGFzQ2hhbmdlZCA9IHRydWU7XG4gICAgICB9KTtcbiAgICB9IGVsc2Uge1xuICAgICAgaGFzQ2hhbmdlZCA9IHRydWU7XG4gICAgfVxuXG4gICAgaWYoaGFzQ2hhbmdlZCkge1xuICAgICAgdGhpcy5jbGVhcigpO1xuICAgICAgdGhpcy5hZGRBbGwoLi4uY29tcG9uZW50cyk7XG4gICAgfVxuICB9XG5cbiAgYWRkKGNvbXBvbmVudCkge1xuICAgIHRoaXMuI2NvbXBvbmVudHMucHVzaChjb21wb25lbnQpO1xuICAgIGNvbXBvbmVudC5wYXJlbnQgPSB0aGlzO1xuICAgIGlmKHRoaXMuY2FudmFzKSBjb21wb25lbnQuY2FudmFzID0gdGhpcy5jYW52YXM7XG4gICAgY29tcG9uZW50LmFkZENoYW5nZUFjdGlvbih0aGlzLmV2ZW50Q2hhbmdlQ2FsbGJhY2spO1xuICAgIHRoaXMucmVhY3Rvci5kaXNwYXRjaEV2ZW50KFwib25DaGFuZ2VcIiwgdGhpcyk7XG4gIH1cblxuICBhZGRBbGwoLi4uY29tcG9uZW50cykge1xuICAgIGNvbXBvbmVudHMuZm9yRWFjaChjb21wb25lbnQgPT4gdGhpcy5hZGQoY29tcG9uZW50KSk7XG4gIH1cblxuICByZW1vdmUoY29tcG9uZW50KSB7XG4gICAgaWYodGhpcy4jY29tcG9uZW50cy5pbmRleE9mKGNvbXBvbmVudCkgIT0gLTEpIHtcbiAgICAgIGNvbXBvbmVudC5yZW1vdmVDaGFuZ2VBY3Rpb24odGhpcy5ldmVudENoYW5nZUNhbGxiYWNrKTtcbiAgICAgIHRoaXMuI2NvbXBvbmVudHMgPSB0aGlzLiNjb21wb25lbnRzLmZpbHRlcihjdXJyZW50ID0+IGNvbXBvbmVudCAhPSBjdXJyZW50KTtcbiAgICAgIHRoaXMucmVhY3Rvci5kaXNwYXRjaEV2ZW50KFwib25DaGFuZ2VcIiwgdGhpcyk7XG4gICAgfVxuICB9XG5cbiAgY2xlYXIoKSB7XG4gICAgdGhpcy4jY29tcG9uZW50cy5mb3JFYWNoKGNvbXBvbmVudCA9PiB0aGlzLnJlbW92ZShjb21wb25lbnQpKTtcbiAgICB0aGlzLnJlYWN0b3IuZGlzcGF0Y2hFdmVudChcIm9uQ2hhbmdlXCIsIHRoaXMpO1xuICB9XG5cbiAgZ2V0IGNvbXBvbmVudHMoKSB7XG4gICAgY29uc3QgY29tcG9uZW50cyA9IFtdO1xuICAgIHRoaXMuI2NvbXBvbmVudHMuZm9yRWFjaChjb21wb25lbnQgPT4gY29tcG9uZW50cy5wdXNoKGNvbXBvbmVudCkpO1xuICAgIHJldHVybiBjb21wb25lbnRzO1xuICB9XG5cbiAgZ2V0IGFsbENvbXBvbmVudHMoKSB7XG4gICAgY29uc3QgY29tcG9uZW50cyA9IHRoaXMuY29tcG9uZW50cztcbiAgICBjb21wb25lbnRzLnB1c2godGhpcy5zY3JvbGxiYXJIb3Jpem9udGFsKTtcbiAgICBjb21wb25lbnRzLnB1c2godGhpcy5zY3JvbGxiYXJWZXJ0aWNhbCk7XG4gICAgcmV0dXJuIGNvbXBvbmVudHM7XG4gIH1cblxuICBnZXRDb21wb25lbnRzVHJlZShzdGFydCA9IHRoaXMpIHtcbiAgICBjb25zdCBjb21wb25lbnRzID0ge1xuICAgICAgXCJjb21wb25lbnRcIjogc3RhcnQsXG4gICAgICBcImNoaWxkc1wiOiBbXVxuICAgIH07XG5cbiAgICBpZihzdGFydC5hbGxDb21wb25lbnRzKSB7XG4gICAgICBzdGFydC5hbGxDb21wb25lbnRzLmZvckVhY2goY29tcG9uZW50ID0+IGNvbXBvbmVudHMuY2hpbGRzLnB1c2godGhpcy5nZXRDb21wb25lbnRzVHJlZShjb21wb25lbnQpKSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGNvbXBvbmVudHM7XG4gIH1cblxuICBzdGF0aWMgc29ydENvbXBvbmVudHNUcmVlKGNvbXBvbmVudCwgb3RoZXIpIHtcbiAgICByZXR1cm4gY29tcG9uZW50LmNvbXBvbmVudC5jb21wYXJlVG8ob3RoZXIuY29tcG9uZW50KTtcbiAgfVxuXG4gIGRpc2FibGUoKSB7XG4gICAgbGV0IGNoYW5nZWQgPSBzdXBlci5kaXNhYmxlKCk7XG5cbiAgICB0aGlzLiNjb21wb25lbnRzLmZvckVhY2goY29tcG9uZW50ID0+IHtcbiAgICAgIGlmKGNvbXBvbmVudCAmJiBjb21wb25lbnQuZGlzYWJsZSAmJiBjb21wb25lbnQuZGlzYWJsZSgpKSB7XG4gICAgICAgIGNoYW5nZWQgPSB0cnVlO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgaWYoY2hhbmdlZCkgdGhpcy5yZWFjdG9yLmRpc3BhdGNoRXZlbnQoXCJvbkNoYW5nZVwiLCB0aGlzKTtcbiAgfVxuXG4gIGVuYWJsZSgpIHtcbiAgICBsZXQgY2hhbmdlZCA9IHN1cGVyLmVuYWJsZSgpO1xuXG4gICAgdGhpcy4jY29tcG9uZW50cy5mb3JFYWNoKGNvbXBvbmVudCA9PiB7XG4gICAgICBpZihjb21wb25lbnQgJiYgY29tcG9uZW50LmVuYWJsZSAmJiBjb21wb25lbnQuZW5hYmxlKCkpIHtcbiAgICAgICAgY2hhbmdlZCA9IHRydWU7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICBpZihjaGFuZ2VkKSB0aGlzLnJlYWN0b3IuZGlzcGF0Y2hFdmVudChcIm9uQ2hhbmdlXCIsIHRoaXMpO1xuICB9XG5cbiAgZ2V0IHdpZHRoKCkge1xuICAgIGNvbnN0IHdpZHRoID0gKHRoaXMucGFyZW50ICYmIHRoaXMucGFyZW50LndpZHRoKTtcbiAgICBjb25zdCBtaW4gPSB0aGlzLm1heFdpZHRoICE9IG51bGwgPyBNYXRoLm1pbih0aGlzLm1heFdpZHRoLCB3aWR0aCkgOiBudWxsO1xuICAgIHJldHVybiB0aGlzLm1pbldpZHRoICE9IG51bGwgPyBNYXRoLm1heCh0aGlzLm1pbldpZHRoLCBtaW4gIT0gbnVsbCA/IG1pbiA6IHdpZHRoKSA6IHdpZHRoO1xuICB9XG5cbiAgZ2V0IGhlaWdodCgpIHtcbiAgICBjb25zdCBoZWlnaHQgPSAodGhpcy5wYXJlbnQgJiYgdGhpcy5wYXJlbnQuaGVpZ2h0KTtcbiAgICBjb25zdCBtaW4gPSB0aGlzLm1heFdpZHRoICE9IG51bGwgPyBNYXRoLm1pbih0aGlzLm1heEhlaWdodCwgaGVpZ2h0KSA6IG51bGw7XG4gICAgcmV0dXJuIHRoaXMubWluSGVpZ2h0ICE9IG51bGwgPyBNYXRoLm1heCh0aGlzLm1pbkhlaWdodCwgbWluICE9IG51bGwgPyBtaW4gOiBoZWlnaHQpIDogaGVpZ2h0O1xuICB9XG5cbiAgZ2V0IG1heFdpZHRoKCkge1xuICAgIHJldHVybiB0aGlzLiNfbWF4V2lkdGg7XG4gIH1cblxuICBnZXQgbWF4SGVpZ2h0KCkge1xuICAgIHJldHVybiB0aGlzLiNfbWF4SGVpZ2h0O1xuICB9XG5cbiAgc2V0IG1heFdpZHRoKG1heFdpZHRoKSB7XG4gICAgaWYobWF4V2lkdGggIT0gdGhpcy4jX21heFdpZHRoKSB7XG4gICAgICB0aGlzLiNfbWF4V2lkdGggPSBtYXhXaWR0aDtcbiAgICAgIHRoaXMucmVhY3Rvci5kaXNwYXRjaEV2ZW50KFwib25DaGFuZ2VcIiwgdGhpcyk7XG4gICAgfVxuICB9XG5cbiAgc2V0IG1heEhlaWdodChtYXhIZWlnaHQpIHtcbiAgICBpZihtYXhIZWlnaHQgIT0gdGhpcy4jX21heEhlaWdodCkge1xuICAgICAgdGhpcy4jX21heEhlaWdodCA9IG1heEhlaWdodDtcbiAgICAgIHRoaXMucmVhY3Rvci5kaXNwYXRjaEV2ZW50KFwib25DaGFuZ2VcIiwgdGhpcyk7XG4gICAgfVxuICB9XG5cbiAgZ2V0IG1pbldpZHRoKCkge1xuICAgIHJldHVybiB0aGlzLiNfbWluV2lkdGg7XG4gIH1cblxuICBnZXQgbWluSGVpZ2h0KCkge1xuICAgIHJldHVybiB0aGlzLiNfbWluSGVpZ2h0O1xuICB9XG5cbiAgc2V0IG1pbldpZHRoKG1pbldpZHRoKSB7XG4gICAgaWYobWluV2lkdGggIT0gdGhpcy4jX21pbldpZHRoKSB7XG4gICAgICB0aGlzLiNfbWluV2lkdGggPSBtaW5XaWR0aDtcbiAgICAgIHRoaXMucmVhY3Rvci5kaXNwYXRjaEV2ZW50KFwib25DaGFuZ2VcIiwgdGhpcyk7XG4gICAgfVxuICB9XG5cbiAgc2V0IG1pbkhlaWdodChtaW5IZWlnaHQpIHtcbiAgICBpZihtaW5IZWlnaHQgIT0gdGhpcy4jX21pbkhlaWdodCkge1xuICAgICAgdGhpcy4jX21pbkhlaWdodCA9IG1pbkhlaWdodDtcbiAgICAgIHRoaXMucmVhY3Rvci5kaXNwYXRjaEV2ZW50KFwib25DaGFuZ2VcIiwgdGhpcyk7XG4gICAgfVxuICB9XG5cbiAgdXBkYXRlSW5uZXJIZWlnaHQoKSB7IH1cblxuICB1cGRhdGVJbm5lcldpZHRoKCkgeyB9XG5cbiAgc2V0IGNhbnZhcyhjYW52YXMpIHtcbiAgICBpZihjYW52YXMgIT0gdGhpcy5jYW52YXMpIHtcbiAgICAgIHN1cGVyLmNhbnZhcyA9IGNhbnZhcztcbiAgXG4gICAgICB0aGlzLiNjb21wb25lbnRzLmZvckVhY2goY29tcG9uZW50ID0+IHtcbiAgICAgICAgY29tcG9uZW50LmNhbnZhcyA9IGNhbnZhcztcbiAgICAgICAgaWYoY29tcG9uZW50LnJlYWN0b3IpIGNvbXBvbmVudC5yZWFjdG9yLmRpc3BhdGNoRXZlbnQoXCJvbkNoYW5nZVwiLCB0aGlzKTtcbiAgICAgIH0pO1xuICBcbiAgICAgIHRoaXMucmVhY3Rvci5kaXNwYXRjaEV2ZW50KFwib25DaGFuZ2VcIiwgdGhpcyk7XG4gICAgfVxuICB9XG5cbiAgZ2V0IGNhbnZhcygpIHtcbiAgICByZXR1cm4gc3VwZXIuY2FudmFzO1xuICB9XG5cbiAgZ2V0Q29tcG9uZW50SWQoY29tcG9uZW50KSB7XG4gICAgbGV0IHJlc3VsdCA9IG51bGw7XG5cbiAgICB0aGlzLiNjb21wb25lbnRzLmZvckVhY2goKGMsIGkpID0+IHtcbiAgICAgIGlmKGMgPT0gY29tcG9uZW50KSByZXN1bHQgPSBpO1xuICAgIH0pO1xuXG4gICAgcmV0dXJuIHJlc3VsdDtcbiAgfVxuXG4gIGdldCBzY3JvbGxBcmVhU2l6ZVgoKSB7XG4gICAgcmV0dXJuIHRoaXMuaW5uZXJXaWR0aCAtIHRoaXMud2lkdGg7XG4gIH1cblxuICBnZXQgc2Nyb2xsQXJlYVNpemVZKCkge1xuICAgIHJldHVybiB0aGlzLmlubmVySGVpZ2h0IC0gdGhpcy5oZWlnaHQ7XG4gIH1cblxuICBjb250cm9sU2Nyb2xsaW5nKGRlbHRhWCwgZGVsdGFZKSB7XG4gICAgaWYoIXRoaXMuc3R5bGUuc2Nyb2xsWURpc2FibGVkKSB7XG4gICAgICBpZih0aGlzLnNjcm9sbEFyZWFTaXplWSA8PSAwKSB7XG4gICAgICAgIHRoaXMub2Zmc2V0U2Nyb2xsWSA9IDA7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBjb25zdCBwZXJjZW50U2Nyb2xsYmFyWSA9IHRoaXMub2Zmc2V0U2Nyb2xsWSAvIHRoaXMuc2Nyb2xsQXJlYVNpemVZO1xuICBcbiAgICAgICAgaWYocGVyY2VudFNjcm9sbGJhclkgPD0gMCAmJiBkZWx0YVkgPD0gMCkge1xuICAgICAgICAgIHRoaXMub2Zmc2V0U2Nyb2xsWSA9IE1hdGgubWluKDAsIHRoaXMueSk7XG4gICAgICAgIH0gZWxzZSBpZihwZXJjZW50U2Nyb2xsYmFyWSA+IDEgJiYgZGVsdGFZID49IDApIHtcbiAgICAgICAgICB0aGlzLm9mZnNldFNjcm9sbFkgPSB0aGlzLnNjcm9sbEFyZWFTaXplWTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLm9mZnNldFNjcm9sbFkgLT0gZGVsdGFZO1xuICAgIH1cblxuICAgIGlmKCF0aGlzLnN0eWxlLnNjcm9sbFhEaXNhYmxlZCkge1xuICAgICAgaWYodGhpcy5zY3JvbGxBcmVhU2l6ZVggPD0gMCkge1xuICAgICAgICB0aGlzLm9mZnNldFNjcm9sbFggPSAwO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgY29uc3QgcGVyY2VudFNjcm9sbGJhclggPSB0aGlzLm9mZnNldFNjcm9sbFggLyB0aGlzLnNjcm9sbEFyZWFTaXplWDtcbiAgXG4gICAgICAgIGlmKHBlcmNlbnRTY3JvbGxiYXJYIDw9IDAgJiYgZGVsdGFYIDw9IDApIHtcbiAgICAgICAgICB0aGlzLm9mZnNldFNjcm9sbFggPSBNYXRoLm1pbigwLCB0aGlzLngpO1xuICAgICAgICB9IGVsc2UgaWYocGVyY2VudFNjcm9sbGJhclggPiAxICYmIGRlbHRhWCA+PSAwKSB7XG4gICAgICAgICAgdGhpcy5vZmZzZXRTY3JvbGxYID0gdGhpcy5zY3JvbGxBcmVhU2l6ZVg7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5vZmZzZXRTY3JvbGxYIC09IGRlbHRhWDtcbiAgICB9XG4gIH1cblxuICBpc0NvbXBvbmVudFZpc2libGUoY29tcG9uZW50KSB7XG4gICAgaWYoQ29uc3RhbnRzLlNldHRpbmcuRElTQUJMRV9PUFRJTUlaQVRJT05TKSByZXR1cm4gdHJ1ZTtcbiAgICBcbiAgICBpZihjb21wb25lbnQgaW5zdGFuY2VvZiBDb21wb25lbnQgJiYgIWNvbXBvbmVudC5oaWRkZW4pIHtcbiAgICAgIGlmKCFDb25zdGFudHMuU2V0dGluZy5ESVNBQkxFX0lTX0NPTVBPTkVOVF9WSVNJQkxFX09QVElNSVpBVElPTlMgJiYgdGhpcy5wYXJlbnQgJiYgdGhpcy5wYXJlbnQuaXNDb21wb25lbnRWaXNpYmxlICYmICF0aGlzLnBhcmVudC5pc0NvbXBvbmVudFZpc2libGUoY29tcG9uZW50KSkge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICB9XG5cbiAgICAgIGNvbnN0IHdpZHRoID0gdGhpcy53aWR0aDtcbiAgICAgIGNvbnN0IGhlaWdodCA9IHRoaXMuaGVpZ2h0O1xuICAgICAgY29uc3QgY29tcG9uZW50V2lkdGggPSBjb21wb25lbnQud2lkdGg7XG4gICAgICBjb25zdCBjb21wb25lbnRIZWlnaHQgPSBjb21wb25lbnQuaGVpZ2h0O1xuICAgICAgY29uc3QgY2FudmFzV2lkdGggPSAodGhpcy5jYW52YXMgJiYgdGhpcy5jYW52YXMud2lkdGgpIHx8IHdpZHRoO1xuICAgICAgY29uc3QgY2FudmFzSGVpZ2h0ID0gKHRoaXMuY2FudmFzICYmIHRoaXMuY2FudmFzLmhlaWdodCkgfHwgaGVpZ2h0O1xuXG4gICAgICBpZihjb21wb25lbnQueCArIGNvbXBvbmVudFdpZHRoID49IHRoaXMueCAmJiBjb21wb25lbnQueCA8PSB0aGlzLnggKyB3aWR0aCAmJiBjb21wb25lbnQueSArIGNvbXBvbmVudEhlaWdodCA+PSB0aGlzLnkgJiYgY29tcG9uZW50LnkgPD0gdGhpcy55ICsgaGVpZ2h0ICYmIGNvbXBvbmVudC54ICsgY29tcG9uZW50V2lkdGggPj0gMCAmJiBjb21wb25lbnQueCA8PSBjYW52YXNXaWR0aCAmJiBjb21wb25lbnQueSArIGNvbXBvbmVudEhlaWdodCA+PSAwICYmIGNvbXBvbmVudC55IDw9IGNhbnZhc0hlaWdodCkge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBnZXQgaXNDdXR0aW5nKCkge1xuICAgIHJldHVybiAhQ29uc3RhbnRzLlNldHRpbmcuRElTQUJMRV9DT05UQUlORVJTX0NVVFRJTkcgJiYgKCgodGhpcy5tYXhXaWR0aCAmJiB0aGlzLmlubmVyV2lkdGggPiB0aGlzLm1heFdpZHRoKSB8fCAodGhpcy5tYXhIZWlnaHQgJiYgdGhpcy5pbm5lckhlaWdodCA+IHRoaXMubWF4SGVpZ2h0KSkpICYmIHRoaXMuY2FudmFzVG1wICE9IG51bGw7XG4gIH1cblxuICBnZXQgZGVmYXVsdFN0eWxlKCkge1xuICAgIHJldHVybiBuZXcgU3R5bGUoe1xuICAgICAgXCJwYWRkaW5nXCI6IDAsXG4gICAgICBcInNwYWNlQmV0d2VlbkNvbXBvbmVudHNcIjogQ29uc3RhbnRzLlNldHRpbmcuREVGQVVMVF9TUEFDSU5HXG4gICAgfSk7XG4gIH1cbn0iLCIvKlxuICogQ29weXJpZ2h0IChDKSAyMDIwIEVsaWFzdGlrIChlbGlhc3Rpa3NvZnRzLmNvbSlcbiAqXG4gKiBUaGlzIGZpbGUgaXMgcGFydCBvZiBcIkpTR2FtZVRvb2xzXCIuXG4gKlxuICogXCJKU0dhbWVUb29sc1wiIGlzIGZyZWUgc29mdHdhcmU6IHlvdSBjYW4gcmVkaXN0cmlidXRlIGl0IGFuZC9vciBtb2RpZnlcbiAqIGl0IHVuZGVyIHRoZSB0ZXJtcyBvZiB0aGUgR05VIEdlbmVyYWwgUHVibGljIExpY2Vuc2UgYXMgcHVibGlzaGVkIGJ5XG4gKiB0aGUgRnJlZSBTb2Z0d2FyZSBGb3VuZGF0aW9uLCBlaXRoZXIgdmVyc2lvbiAzIG9mIHRoZSBMaWNlbnNlLCBvclxuICogKGF0IHlvdXIgb3B0aW9uKSBhbnkgbGF0ZXIgdmVyc2lvbi5cbiAqXG4gKiBcIkpTR2FtZVRvb2xzXCIgaXMgZGlzdHJpYnV0ZWQgaW4gdGhlIGhvcGUgdGhhdCBpdCB3aWxsIGJlIHVzZWZ1bCxcbiAqIGJ1dCBXSVRIT1VUIEFOWSBXQVJSQU5UWTsgd2l0aG91dCBldmVuIHRoZSBpbXBsaWVkIHdhcnJhbnR5IG9mXG4gKiBNRVJDSEFOVEFCSUxJVFkgb3IgRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UuICBTZWUgdGhlXG4gKiBHTlUgR2VuZXJhbCBQdWJsaWMgTGljZW5zZSBmb3IgbW9yZSBkZXRhaWxzLlxuICpcbiAqIFlvdSBzaG91bGQgaGF2ZSByZWNlaXZlZCBhIGNvcHkgb2YgdGhlIEdOVSBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlXG4gKiBhbG9uZyB3aXRoIFwiSlNHYW1lVG9vbHNcIi4gIElmIG5vdCwgc2VlIDxodHRwOi8vd3d3LmdudS5vcmcvbGljZW5zZXMvPi5cbiAqL1xuaW1wb3J0IENvbXBvbmVudCBmcm9tIFwiLi9Db21wb25lbnRcIjtcbmltcG9ydCBDb25zdGFudHMgZnJvbSBcIi4vQ29uc3RhbnRzXCI7XG5pbXBvcnQgVXRpbHMgZnJvbSBcIi4vVXRpbHNcIjtcbmltcG9ydCBTdHlsZSBmcm9tIFwiLi9TdHlsZVwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDcm9zcyBleHRlbmRzIENvbXBvbmVudCB7XG4gIHNlbGVjdGFibGUgPSBmYWxzZTtcblxuICBjb25zdHJ1Y3Rvcih4LCB5LCB3aWR0aCwgaGVpZ2h0LCBzdHlsZSkge1xuICAgIHN1cGVyKHgsIHksIHdpZHRoLCBoZWlnaHQsIHN0eWxlKTtcbiAgfVxuXG4gIGRyYXcoY29udGV4dCkge1xuICAgIGlmKHRoaXMuaGlkZGVuKSByZXR1cm47XG4gICAgc3VwZXIuZHJhdyhjb250ZXh0KTtcblxuICAgIGNvbnN0IGNhbnZhcyA9IGNvbnRleHQuY2FudmFzO1xuICAgIGNvbnN0IGN0eCA9IGNhbnZhcy5nZXRDb250ZXh0KFwiMmRcIik7XG4gICAgXG4gICAgVXRpbHMuZHJhd0Nyb3NzKGN0eCwgdGhpcy54LCB0aGlzLnksIHRoaXMud2lkdGgsIHRoaXMuaGVpZ2h0LCB0aGlzLnN0eWxlLmxpbmVXaWR0aCwgdGhpcy5zdHlsZS5jb2xvciwgdGhpcy5zdHlsZS5saW5lQ2FwKTtcblxuICAgIHRoaXMuaW5pdCA9IHRydWU7XG4gIH1cblxuICBnZXQgd2lkdGgoKSB7XG4gICAgcmV0dXJuIHN1cGVyLndpZHRoICsgdGhpcy5zdHlsZS5saW5lV2lkdGg7XG4gIH1cblxuICBnZXQgaGVpZ2h0KCkge1xuICAgIHJldHVybiBzdXBlci5oZWlnaHQgKyB0aGlzLnN0eWxlLmxpbmVXaWR0aDtcbiAgfVxuXG4gIHNldCB3aWR0aCh3aWR0aCkge1xuICAgIHN1cGVyLndpZHRoID0gd2lkdGg7XG4gIH1cblxuICBzZXQgaGVpZ2h0KGhlaWdodCkge1xuICAgIHN1cGVyLmhlaWdodCA9IGhlaWdodDtcbiAgfVxuXG4gIGdldCBkZWZhdWx0U3R5bGUoKSB7XG4gICAgcmV0dXJuIG5ldyBTdHlsZSh7XG4gICAgICBcImxpbmVXaWR0aFwiOiBDb25zdGFudHMuU2V0dGluZy5DUk9TU19ERUZBVUxUX0xJTkVfU0laRSxcbiAgICAgIFwiY29sb3JcIjogQ29uc3RhbnRzLlNldHRpbmcuQ1JPU1NfREVGQVVMVF9DT0xPUixcbiAgICAgIFwibGluZUNhcFwiOiBDb25zdGFudHMuU2V0dGluZy5DUk9TU19ERUZBVUxUX0xJTkVfQ0FQXG4gICAgfSk7XG4gIH1cbn0iLCIvKlxuICogQ29weXJpZ2h0IChDKSAyMDIwIEVsaWFzdGlrIChlbGlhc3Rpa3NvZnRzLmNvbSlcbiAqXG4gKiBUaGlzIGZpbGUgaXMgcGFydCBvZiBcIkpTR2FtZVRvb2xzXCIuXG4gKlxuICogXCJKU0dhbWVUb29sc1wiIGlzIGZyZWUgc29mdHdhcmU6IHlvdSBjYW4gcmVkaXN0cmlidXRlIGl0IGFuZC9vciBtb2RpZnlcbiAqIGl0IHVuZGVyIHRoZSB0ZXJtcyBvZiB0aGUgR05VIEdlbmVyYWwgUHVibGljIExpY2Vuc2UgYXMgcHVibGlzaGVkIGJ5XG4gKiB0aGUgRnJlZSBTb2Z0d2FyZSBGb3VuZGF0aW9uLCBlaXRoZXIgdmVyc2lvbiAzIG9mIHRoZSBMaWNlbnNlLCBvclxuICogKGF0IHlvdXIgb3B0aW9uKSBhbnkgbGF0ZXIgdmVyc2lvbi5cbiAqXG4gKiBcIkpTR2FtZVRvb2xzXCIgaXMgZGlzdHJpYnV0ZWQgaW4gdGhlIGhvcGUgdGhhdCBpdCB3aWxsIGJlIHVzZWZ1bCxcbiAqIGJ1dCBXSVRIT1VUIEFOWSBXQVJSQU5UWTsgd2l0aG91dCBldmVuIHRoZSBpbXBsaWVkIHdhcnJhbnR5IG9mXG4gKiBNRVJDSEFOVEFCSUxJVFkgb3IgRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UuICBTZWUgdGhlXG4gKiBHTlUgR2VuZXJhbCBQdWJsaWMgTGljZW5zZSBmb3IgbW9yZSBkZXRhaWxzLlxuICpcbiAqIFlvdSBzaG91bGQgaGF2ZSByZWNlaXZlZCBhIGNvcHkgb2YgdGhlIEdOVSBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlXG4gKiBhbG9uZyB3aXRoIFwiSlNHYW1lVG9vbHNcIi4gIElmIG5vdCwgc2VlIDxodHRwOi8vd3d3LmdudS5vcmcvbGljZW5zZXMvPi5cbiAqL1xuZXhwb3J0IGRlZmF1bHQge1xuICBlYXNlSW5DdWJpYyh4KSB7XG4gICAgcmV0dXJuIHggKiB4ICogeDtcbiAgfSxcbiAgZWFzZU91dEJvdW5jZSh4KSB7XG4gICAgY29uc3QgbjEgPSA3LjU2MjU7XG4gICAgY29uc3QgZDEgPSAyLjc1O1xuICAgIFxuICAgIGlmKHggPCAxIC8gZDEpIHtcbiAgICAgIHJldHVybiBuMSAqIHggKiB4O1xuICAgIH0gZWxzZSBpZih4IDwgMiAvIGQxKSB7XG4gICAgICByZXR1cm4gbjEgKiAoeCAtPSAxLjUgLyBkMSkgKiB4ICsgMC43NTtcbiAgICB9IGVsc2UgaWYoeCA8IDIuNSAvIGQxKSB7XG4gICAgICByZXR1cm4gbjEgKiAoeCAtPSAyLjI1IC8gZDEpICogeCArIDAuOTM3NTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIG4xICogKHggLT0gMi42MjUgLyBkMSkgKiB4ICsgMC45ODQzNzU7XG4gICAgfVxuICB9LFxuICBlYXNlSW5PdXRDdWJpYyh4KSB7XG4gICAgcmV0dXJuIHggPCAwLjUgPyA0ICogeCAqIHggKiB4IDogMSAtIE1hdGgucG93KC0yICogeCArIDIsIDMpIC8gMjtcbiAgfSxcbiAgZWFzZUluT3V0U2luZSh4KSB7XG4gICAgcmV0dXJuIC0oTWF0aC5jb3MoTWF0aC5QSSAqIHgpIC0gMSkgLyAyO1xuICB9LFxuICBlYXNlSW5PdXRRdWludCh4KSB7XG4gICAgcmV0dXJuIHggPCAwLjUgPyAxNiAqIHggKiB4ICogeCAqIHggKiB4IDogMSAtIE1hdGgucG93KC0yICogeCArIDIsIDUpIC8gMjtcbiAgfSxcbiAgZWFzZUluT3V0Q2lyYyh4KSB7XG4gICAgcmV0dXJuIHggPCAwLjUgPyAoMSAtIE1hdGguc3FydCgxIC0gTWF0aC5wb3coMiAqIHgsIDIpKSkgLyAyIDogKE1hdGguc3FydCgxIC0gTWF0aC5wb3coLTIgKiB4ICsgMiwgMikpICsgMSkgLyAyO1xuICB9LFxuICBlYXNlSW5PdXRRdWFkKHgpIHtcbiAgICByZXR1cm4geCA8IDAuNSA/IDIgKiB4ICogeCA6IDEgLSBNYXRoLnBvdygtMiAqIHggKyAyLCAyKSAvIDI7XG4gIH0sXG4gIGVhc2VJbk91dFF1YXJ0KHgpIHtcbiAgICByZXR1cm4geCA8IDAuNSA/IDggKiB4ICogeCAqIHggKiB4IDogMSAtIE1hdGgucG93KC0yICogeCArIDIsIDQpIC8gMjtcbiAgfSxcbiAgZWFzZUluT3V0RXhwbyh4KSB7XG4gICAgcmV0dXJuIHggPT09IDAgPyAwIDogeCA9PT0gMSA/IDEgOiB4IDwgMC41ID8gTWF0aC5wb3coMiwgMjAgKiB4IC0gMTApIC8gMiA6ICgyIC0gTWF0aC5wb3coMiwgLTIwICogeCArIDEwKSkgLyAyO1xuICB9LFxuICBlYXNlSW5PdXRCYWNrKHgpIHtcbiAgICBjb25zdCBjMSA9IDEuNzAxNTg7XG4gICAgY29uc3QgYzIgPSBjMSAqIDEuNTI1O1xuICAgIFxuICAgIHJldHVybiB4IDwgMC41ID8gKE1hdGgucG93KDIgKiB4LCAyKSAqICgoYzIgKyAxKSAqIDIgKiB4IC0gYzIpKSAvIDIgOiAoTWF0aC5wb3coMiAqIHggLSAyLCAyKSAqICgoYzIgKyAxKSAqICh4ICogMiAtIDIpICsgYzIpICsgMikgLyAyO1xuICB9XG59OyIsIi8qXG4gKiBDb3B5cmlnaHQgKEMpIDIwMjAtMjAyMSBFbGlhc3RpayAoZWxpYXN0aWtzb2Z0cy5jb20pXG4gKlxuICogVGhpcyBmaWxlIGlzIHBhcnQgb2YgXCJKU0dhbWVUb29sc1wiLlxuICpcbiAqIFwiSlNHYW1lVG9vbHNcIiBpcyBmcmVlIHNvZnR3YXJlOiB5b3UgY2FuIHJlZGlzdHJpYnV0ZSBpdCBhbmQvb3IgbW9kaWZ5XG4gKiBpdCB1bmRlciB0aGUgdGVybXMgb2YgdGhlIEdOVSBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlIGFzIHB1Ymxpc2hlZCBieVxuICogdGhlIEZyZWUgU29mdHdhcmUgRm91bmRhdGlvbiwgZWl0aGVyIHZlcnNpb24gMyBvZiB0aGUgTGljZW5zZSwgb3JcbiAqIChhdCB5b3VyIG9wdGlvbikgYW55IGxhdGVyIHZlcnNpb24uXG4gKlxuICogXCJKU0dhbWVUb29sc1wiIGlzIGRpc3RyaWJ1dGVkIGluIHRoZSBob3BlIHRoYXQgaXQgd2lsbCBiZSB1c2VmdWwsXG4gKiBidXQgV0lUSE9VVCBBTlkgV0FSUkFOVFk7IHdpdGhvdXQgZXZlbiB0aGUgaW1wbGllZCB3YXJyYW50eSBvZlxuICogTUVSQ0hBTlRBQklMSVRZIG9yIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFLiAgU2VlIHRoZVxuICogR05VIEdlbmVyYWwgUHVibGljIExpY2Vuc2UgZm9yIG1vcmUgZGV0YWlscy5cbiAqXG4gKiBZb3Ugc2hvdWxkIGhhdmUgcmVjZWl2ZWQgYSBjb3B5IG9mIHRoZSBHTlUgR2VuZXJhbCBQdWJsaWMgTGljZW5zZVxuICogYWxvbmcgd2l0aCBcIkpTR2FtZVRvb2xzXCIuICBJZiBub3QsIHNlZSA8aHR0cDovL3d3dy5nbnUub3JnL2xpY2Vuc2VzLz4uXG4gKi9cbmltcG9ydCBTY2VuZSBmcm9tIFwiLi9TY2VuZVwiO1xuaW1wb3J0IENvbnN0YW50cyBmcm9tIFwiLi9Db25zdGFudHNcIjtcbmltcG9ydCBTdHlsZSBmcm9tIFwiLi9TdHlsZVwiO1xuaW1wb3J0IE1lbnUgZnJvbSBcIi4vTWVudVwiO1xuaW1wb3J0IExhYmVsIGZyb20gXCIuL0xhYmVsXCI7XG5pbXBvcnQgQnV0dG9uIGZyb20gXCIuL0J1dHRvblwiO1xuaW1wb3J0IFJvdyBmcm9tIFwiLi9Sb3dcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRXJyb3JTY3JlZW4gZXh0ZW5kcyBTY2VuZSB7XG4gIGNvbnN0cnVjdG9yKGNhbnZhcykge1xuICAgIHN1cGVyKCk7XG4gICAgdGhpcy5jYW52YXMgPSBjYW52YXM7XG4gICAgdGhpcy5sYWJlbERldGFpbHNTY2VuZUVycm9yID0gbmV3IExhYmVsKFwiXCIsIG51bGwsIG51bGwsIG5ldyBTdHlsZSh7IFwiZm9udENvbG9yXCI6IFwid2hpdGVcIiwgXCJhbGlnbmVtZW50XCI6IFwiY2VudGVyXCIsIFwiZm9udFNpemVcIjogQ29uc3RhbnRzLlNldHRpbmcuRk9OVF9TSVpFIC8gMS43NSB9KSk7XG4gICAgdGhpcy5sYWJlbERldGFpbHNTY2VuZUVycm9yLmhpZGRlbiA9IHRydWU7XG5cbiAgICBjb25zdCBidXR0b25TY2VuZUVycm9yID0gbmV3IEJ1dHRvbihudWxsLCBudWxsLCBudWxsLCBudWxsLCBuZXcgU3R5bGUoeyBcImJhY2tncm91bmRDb2xvclwiOiBDb25zdGFudHMuU2V0dGluZy5CVVRUT05fREVGQVVMVF9BTFRFUk5BVElWRV9CQUNLR1JPVU5EIH0pLCBuZXcgTGFiZWwoQ29uc3RhbnRzLlN0cmluZy5SRVRSWSwgbnVsbCwgbnVsbCwgbmV3IFN0eWxlKHsgXCJmb250Q29sb3JcIjogXCJ3aGl0ZVwiLCBcImFsaWduZW1lbnRcIjogXCJjZW50ZXJcIiB9KSkpO1xuICAgIGNvbnN0IGJ1dHRvbkRldGFpbHNTY2VuZUVycm9yID0gbmV3IEJ1dHRvbihudWxsLCBudWxsLCBudWxsLCBudWxsLCBuZXcgU3R5bGUoeyBcImJhY2tncm91bmRDb2xvclwiOiBDb25zdGFudHMuU2V0dGluZy5CVVRUT05fREVGQVVMVF9BTFRFUk5BVElWRV9CQUNLR1JPVU5EIH0pLCBuZXcgTGFiZWwoQ29uc3RhbnRzLlN0cmluZy5ERVRBSUxTLCBudWxsLCBudWxsLCBuZXcgU3R5bGUoeyBcImZvbnRDb2xvclwiOiBcIndoaXRlXCIsIFwiYWxpZ25lbWVudFwiOiBcImNlbnRlclwiIH0pKSk7XG4gICAgY29uc3QgY29sRGV0YWlsc1NjZW5lRXJyb3IgPSBuZXcgUm93KG51bGwsIG51bGwsIG51bGwsIDAsIG5ldyBTdHlsZSh7IFwiYWxpZ25lbWVudFwiOiBcImNlbnRlclwiIH0pLCB0aGlzLmxhYmVsRGV0YWlsc1NjZW5lRXJyb3IpO1xuICAgIGNvbnN0IG1lbnVTY2VuZUVycm9yID0gbmV3IE1lbnUobmV3IFN0eWxlKHsgXCJzcGFjZUJldHdlZW5Db21wb25lbnRzXCI6IDE1LCBcImJhY2tncm91bmRDb2xvclwiOiBDb25zdGFudHMuU2V0dGluZy5FUlJPUl9NRU5VX0JBQ0tHUk9VTkRfQ09MT1IgfSksIG5ldyBMYWJlbChDb25zdGFudHMuU3RyaW5nLkVSUk9SX01FU1NBR0VfQ0FOVkFTX0xBQkVMLCBudWxsLCBudWxsLCBuZXcgU3R5bGUoeyBcImZvbnRDb2xvclwiOiBcIndoaXRlXCIsIFwiYWxpZ25lbWVudFwiOiBcImNlbnRlclwiIH0pKSwgY29sRGV0YWlsc1NjZW5lRXJyb3IsIG5ldyBSb3cobnVsbCwgbnVsbCwgbnVsbCwgbnVsbCwgbmV3IFN0eWxlKHsgXCJhbGlnbmVtZW50XCI6IFwiY2VudGVyXCIgfSksIGJ1dHRvblNjZW5lRXJyb3IsIGJ1dHRvbkRldGFpbHNTY2VuZUVycm9yKSk7XG4gICAgbWVudVNjZW5lRXJyb3IuZW5hYmxlKCk7XG5cbiAgICBidXR0b25TY2VuZUVycm9yLmFkZENsaWNrQWN0aW9uKCgpID0+IHtcbiAgICAgIHRoaXMuY2FudmFzLmhhc0Vycm9yID0gZmFsc2U7XG4gICAgICB0aGlzLmNhbnZhcy5zY2VuZSA9IHRoaXMuY2FudmFzLnNjZW5lUHJldmlvdXM7XG4gICAgICB0aGlzLmxhYmVsRGV0YWlsc1NjZW5lRXJyb3IuaGlkZGVuID0gdHJ1ZTtcbiAgICAgIGNvbERldGFpbHNTY2VuZUVycm9yLm1heEhlaWdodCA9IDA7XG4gICAgfSk7XG5cbiAgICBidXR0b25EZXRhaWxzU2NlbmVFcnJvci5hZGRDbGlja0FjdGlvbigoKSA9PiB7XG4gICAgICB0aGlzLmxhYmVsRGV0YWlsc1NjZW5lRXJyb3IuaGlkZGVuID0gIXRoaXMubGFiZWxEZXRhaWxzU2NlbmVFcnJvci5oaWRkZW47XG4gICAgICBjb2xEZXRhaWxzU2NlbmVFcnJvci5tYXhIZWlnaHQgPSAhdGhpcy5sYWJlbERldGFpbHNTY2VuZUVycm9yLmhpZGRlbiA/IDEwMCA6IDA7XG4gICAgfSk7XG5cbiAgICB0aGlzLmFkZChtZW51U2NlbmVFcnJvcik7XG4gIH1cblxuICBzZXQgZXJyb3JUZXh0KHRleHQpIHtcbiAgICB0aGlzLmxhYmVsRGV0YWlsc1NjZW5lRXJyb3IudGV4dCA9IHRleHQ7XG4gIH1cblxuICBnZXQgZXJyb3JUZXh0KCkge1xuICAgIHJldHVybiB0aGlzLmxhYmVsRGV0YWlsc1NjZW5lRXJyb3IudGV4dDtcbiAgfVxufSIsIi8qXG4gKiBDb3B5cmlnaHQgKEMpIDIwMjAgRWxpYXN0aWsgKGVsaWFzdGlrc29mdHMuY29tKVxuICpcbiAqIFRoaXMgZmlsZSBpcyBwYXJ0IG9mIFwiSlNHYW1lVG9vbHNcIi5cbiAqXG4gKiBcIkpTR2FtZVRvb2xzXCIgaXMgZnJlZSBzb2Z0d2FyZTogeW91IGNhbiByZWRpc3RyaWJ1dGUgaXQgYW5kL29yIG1vZGlmeVxuICogaXQgdW5kZXIgdGhlIHRlcm1zIG9mIHRoZSBHTlUgR2VuZXJhbCBQdWJsaWMgTGljZW5zZSBhcyBwdWJsaXNoZWQgYnlcbiAqIHRoZSBGcmVlIFNvZnR3YXJlIEZvdW5kYXRpb24sIGVpdGhlciB2ZXJzaW9uIDMgb2YgdGhlIExpY2Vuc2UsIG9yXG4gKiAoYXQgeW91ciBvcHRpb24pIGFueSBsYXRlciB2ZXJzaW9uLlxuICpcbiAqIFwiSlNHYW1lVG9vbHNcIiBpcyBkaXN0cmlidXRlZCBpbiB0aGUgaG9wZSB0aGF0IGl0IHdpbGwgYmUgdXNlZnVsLFxuICogYnV0IFdJVEhPVVQgQU5ZIFdBUlJBTlRZOyB3aXRob3V0IGV2ZW4gdGhlIGltcGxpZWQgd2FycmFudHkgb2ZcbiAqIE1FUkNIQU5UQUJJTElUWSBvciBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRS4gIFNlZSB0aGVcbiAqIEdOVSBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlIGZvciBtb3JlIGRldGFpbHMuXG4gKlxuICogWW91IHNob3VsZCBoYXZlIHJlY2VpdmVkIGEgY29weSBvZiB0aGUgR05VIEdlbmVyYWwgUHVibGljIExpY2Vuc2VcbiAqIGFsb25nIHdpdGggXCJKU0dhbWVUb29sc1wiLiAgSWYgbm90LCBzZWUgPGh0dHA6Ly93d3cuZ251Lm9yZy9saWNlbnNlcy8+LlxuICovXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBFdmVudCB7XG4gIGNvbnN0cnVjdG9yKG5hbWUpIHtcbiAgICB0aGlzLm5hbWUgPSBuYW1lO1xuICAgIHRoaXMuY2FsbGJhY2tzID0gW107XG4gIH1cblxuICByZWdpc3RlckNhbGxiYWNrKGNhbGxiYWNrKSB7XG4gICAgdGhpcy5jYWxsYmFja3MucHVzaChjYWxsYmFjayk7XG4gIH1cblxuICByZW1vdmVDYWxsYmFjayhjYWxsYmFjaykge1xuICAgIHRoaXMuY2FsbGJhY2tzLmZpbHRlcihjdXJyZW50ID0+IGN1cnJlbnQgIT0gY2FsbGJhY2spO1xuICB9XG5cbiAgcmVtb3ZlQWxsQ2FsbGJhY2tzKCkge1xuICAgIHRoaXMuY2FsbGJhY2tzID0gW107XG4gIH1cbn0iLCIvKlxuICogQ29weXJpZ2h0IChDKSAyMDIwIEVsaWFzdGlrIChlbGlhc3Rpa3NvZnRzLmNvbSlcbiAqXG4gKiBUaGlzIGZpbGUgaXMgcGFydCBvZiBcIkpTR2FtZVRvb2xzXCIuXG4gKlxuICogXCJKU0dhbWVUb29sc1wiIGlzIGZyZWUgc29mdHdhcmU6IHlvdSBjYW4gcmVkaXN0cmlidXRlIGl0IGFuZC9vciBtb2RpZnlcbiAqIGl0IHVuZGVyIHRoZSB0ZXJtcyBvZiB0aGUgR05VIEdlbmVyYWwgUHVibGljIExpY2Vuc2UgYXMgcHVibGlzaGVkIGJ5XG4gKiB0aGUgRnJlZSBTb2Z0d2FyZSBGb3VuZGF0aW9uLCBlaXRoZXIgdmVyc2lvbiAzIG9mIHRoZSBMaWNlbnNlLCBvclxuICogKGF0IHlvdXIgb3B0aW9uKSBhbnkgbGF0ZXIgdmVyc2lvbi5cbiAqXG4gKiBcIkpTR2FtZVRvb2xzXCIgaXMgZGlzdHJpYnV0ZWQgaW4gdGhlIGhvcGUgdGhhdCBpdCB3aWxsIGJlIHVzZWZ1bCxcbiAqIGJ1dCBXSVRIT1VUIEFOWSBXQVJSQU5UWTsgd2l0aG91dCBldmVuIHRoZSBpbXBsaWVkIHdhcnJhbnR5IG9mXG4gKiBNRVJDSEFOVEFCSUxJVFkgb3IgRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UuICBTZWUgdGhlXG4gKiBHTlUgR2VuZXJhbCBQdWJsaWMgTGljZW5zZSBmb3IgbW9yZSBkZXRhaWxzLlxuICpcbiAqIFlvdSBzaG91bGQgaGF2ZSByZWNlaXZlZCBhIGNvcHkgb2YgdGhlIEdOVSBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlXG4gKiBhbG9uZyB3aXRoIFwiSlNHYW1lVG9vbHNcIi4gIElmIG5vdCwgc2VlIDxodHRwOi8vd3d3LmdudS5vcmcvbGljZW5zZXMvPi5cbiAqL1xuaW1wb3J0IExhYmVsIGZyb20gXCIuL0xhYmVsXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEZQU01ldGVyIGV4dGVuZHMgTGFiZWwge1xuICBzZWxlY3RhYmxlID0gZmFsc2U7XG5cbiAgY29uc3RydWN0b3IoZGlzcGxheUZyYW1lcywgeCwgeSwgc3R5bGUpIHtcbiAgICBzdXBlcihudWxsLCB4LCB5LCBzdHlsZSk7XG5cbiAgICB0aGlzLmRpc3BsYXlGcmFtZXMgPSBkaXNwbGF5RnJhbWVzIHx8IGZhbHNlO1xuICAgIHRoaXMuZnJhbWVzID0gMDtcbiAgICB0aGlzLmxhc3RGcmFtZSA9IDA7XG4gICAgdGhpcy5jdXJyZW50RlBTID0gMDtcblxuICAgIHRoaXMuaW50ZXJ2YWxDb3VudEZQUyA9IHNldEludGVydmFsKCgpID0+IHRoaXMuY291bnRGUFMoKSwgMTAwMCk7XG4gIH1cblxuICBkcmF3KGNvbnRleHQpIHtcbiAgICBpZih0aGlzLmhpZGRlbikgcmV0dXJuO1xuICAgIHRoaXMudGV4dCA9IFwiRlBTOiBcIiArIHRoaXMuY3VycmVudEZQUyArICh0aGlzLmRpc3BsYXlGcmFtZXMgPyBcIiAvIEZyYW1lczogXCIgKyB0aGlzLmZyYW1lcyA6IFwiXCIpO1xuICAgIHN1cGVyLmRyYXcoY29udGV4dCk7XG4gICAgdGhpcy5mcmFtZXMrKztcbiAgfVxuXG4gIGNvdW50RlBTKCkge1xuICAgIGlmKHRoaXMubGFzdEZyYW1lID4gMCkgdGhpcy5jdXJyZW50RlBTID0gdGhpcy5mcmFtZXMgLSB0aGlzLmxhc3RGcmFtZTtcbiAgICB0aGlzLmxhc3RGcmFtZSA9IHRoaXMuZnJhbWVzO1xuICB9XG59IiwiLypcbiAqIENvcHlyaWdodCAoQykgMjAyMCBFbGlhc3RpayAoZWxpYXN0aWtzb2Z0cy5jb20pXG4gKlxuICogVGhpcyBmaWxlIGlzIHBhcnQgb2YgXCJKU0dhbWVUb29sc1wiLlxuICpcbiAqIFwiSlNHYW1lVG9vbHNcIiBpcyBmcmVlIHNvZnR3YXJlOiB5b3UgY2FuIHJlZGlzdHJpYnV0ZSBpdCBhbmQvb3IgbW9kaWZ5XG4gKiBpdCB1bmRlciB0aGUgdGVybXMgb2YgdGhlIEdOVSBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlIGFzIHB1Ymxpc2hlZCBieVxuICogdGhlIEZyZWUgU29mdHdhcmUgRm91bmRhdGlvbiwgZWl0aGVyIHZlcnNpb24gMyBvZiB0aGUgTGljZW5zZSwgb3JcbiAqIChhdCB5b3VyIG9wdGlvbikgYW55IGxhdGVyIHZlcnNpb24uXG4gKlxuICogXCJKU0dhbWVUb29sc1wiIGlzIGRpc3RyaWJ1dGVkIGluIHRoZSBob3BlIHRoYXQgaXQgd2lsbCBiZSB1c2VmdWwsXG4gKiBidXQgV0lUSE9VVCBBTlkgV0FSUkFOVFk7IHdpdGhvdXQgZXZlbiB0aGUgaW1wbGllZCB3YXJyYW50eSBvZlxuICogTUVSQ0hBTlRBQklMSVRZIG9yIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFLiAgU2VlIHRoZVxuICogR05VIEdlbmVyYWwgUHVibGljIExpY2Vuc2UgZm9yIG1vcmUgZGV0YWlscy5cbiAqXG4gKiBZb3Ugc2hvdWxkIGhhdmUgcmVjZWl2ZWQgYSBjb3B5IG9mIHRoZSBHTlUgR2VuZXJhbCBQdWJsaWMgTGljZW5zZVxuICogYWxvbmcgd2l0aCBcIkpTR2FtZVRvb2xzXCIuICBJZiBub3QsIHNlZSA8aHR0cDovL3d3dy5nbnUub3JnL2xpY2Vuc2VzLz4uXG4gKi9cbmltcG9ydCBVdGlscyBmcm9tIFwiLi9VdGlsc1wiO1xuaW1wb3J0IENvbXBvbmVudCBmcm9tIFwiLi9Db21wb25lbnRcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgSW1hZ2VDb250YWluZXIgZXh0ZW5kcyBDb21wb25lbnQge1xuICBzZWxlY3RhYmxlID0gZmFsc2U7XG5cbiAgY29uc3RydWN0b3IoaW1hZ2UsIHgsIHksIHdpZHRoLCBoZWlnaHQsIHN0eWxlLCBpbWFnZUxvYWRlcikge1xuICAgIHN1cGVyKHgsIHksIHdpZHRoLCBoZWlnaHQsIHN0eWxlKTtcbiAgICB0aGlzLmltYWdlO1xuICAgIHRoaXMuaW1nU3JjO1xuICAgIHRoaXMuaW1hZ2VMb2FkZXIgPSBpbWFnZUxvYWRlcjtcblxuICAgIGlmKGltYWdlIGluc3RhbmNlb2YgSW1hZ2UpIHtcbiAgICAgIHRoaXMuaW1hZ2UgPSBpbWFnZTtcbiAgICAgIHRoaXMuaW1nU3JjID0gaW1hZ2Uuc3JjO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmltZ1NyYyA9IGltYWdlO1xuICAgIH1cbiAgfVxuXG4gIGRyYXcoY29udGV4dCkge1xuICAgIGlmKHRoaXMuaGlkZGVuKSByZXR1cm47XG4gICAgc3VwZXIuZHJhdyhjb250ZXh0KTtcbiAgICBcbiAgICBjb25zdCBjYW52YXMgPSBjb250ZXh0LmNhbnZhcztcbiAgICBjb25zdCBjdHggPSBjYW52YXMuZ2V0Q29udGV4dChcIjJkXCIpO1xuICAgIGN0eC5zYXZlKCk7XG4gICAgXG4gICAgaWYodGhpcy5pbWdTcmMgIT0gbnVsbCAmJiB0aGlzLmltYWdlTG9hZGVyICE9IG51bGwpIHtcbiAgICAgIHRoaXMubG9hZEltYWdlKHRoaXMuaW1hZ2VMb2FkZXIpO1xuICAgIH1cblxuICAgIGlmKHRoaXMuaW1hZ2UgIT0gbnVsbCkge1xuICAgICAgdGhpcy5kcmF3SW1hZ2UoY3R4KTtcbiAgICB9XG5cbiAgICBjdHgucmVzdG9yZSgpO1xuICB9XG5cbiAgZHJhd0ltYWdlKGN0eCkge1xuICAgIFV0aWxzLmRyYXdJbWFnZShjdHgsIHRoaXMuaW1hZ2UsIE1hdGgucm91bmQodGhpcy54KSwgTWF0aC5yb3VuZCh0aGlzLnkpLCBNYXRoLnJvdW5kKHRoaXMud2lkdGgpLCBNYXRoLnJvdW5kKHRoaXMuaGVpZ2h0KSk7XG4gIH1cblxuICBnZXQgc2l6ZXMoKSB7XG4gICAgbGV0IGltZ1dpZHRoID0gc3VwZXIud2lkdGg7XG4gICAgbGV0IGltZ0hlaWdodCA9IHN1cGVyLmhlaWdodDtcblxuICAgIGlmKHRoaXMuaW1hZ2VMb2FkZXIpIHtcbiAgICAgIHRoaXMubG9hZEltYWdlKHRoaXMuaW1hZ2VMb2FkZXIpO1xuICAgIH1cbiAgICBcbiAgICBpZih0aGlzLmltYWdlICYmICh0aGlzLmltYWdlLndpZHRoID4gc3VwZXIud2lkdGggfHwgdGhpcy5pbWFnZS5oZWlnaHQgPiBzdXBlci5oZWlnaHQpKSB7XG4gICAgICBjb25zdCBhc3BlY3RSYXRpbyA9IHRoaXMuaW1hZ2Uud2lkdGggLyB0aGlzLmltYWdlLmhlaWdodDtcbiAgICAgIGltZ1dpZHRoID0gTWF0aC5mbG9vcihzdXBlci53aWR0aCAvIDEuMjUpO1xuICAgICAgaW1nSGVpZ2h0ID0gTWF0aC5mbG9vcihpbWdXaWR0aCAvIGFzcGVjdFJhdGlvKTtcbiAgICB9XG5cbiAgICByZXR1cm4ge1xuICAgICAgd2lkdGg6IGltZ1dpZHRoLFxuICAgICAgaGVpZ2h0OiBpbWdIZWlnaHRcbiAgICB9O1xuICB9XG5cbiAgZ2V0IGhlaWdodCgpIHtcbiAgICByZXR1cm4gdGhpcy5zaXplcy5oZWlnaHQ7XG4gIH1cblxuICBnZXQgd2lkdGgoKSB7XG4gICAgcmV0dXJuIHRoaXMuc2l6ZXMud2lkdGg7XG4gIH1cblxuICBzZXQgd2lkdGgod2lkdGgpIHtcbiAgICBzdXBlci53aWR0aCA9IHdpZHRoO1xuICB9XG5cbiAgc2V0IGhlaWdodChoZWlnaHQpIHtcbiAgICBzdXBlci5oZWlnaHQgPSBoZWlnaHQ7XG4gIH1cbiAgXG4gIGxvYWRJbWFnZShpbWFnZUxvYWRlcikge1xuICAgIHRoaXMuaW1hZ2UgPSBpbWFnZUxvYWRlci5nZXQodGhpcy5pbWdTcmMpO1xuICB9XG59IiwiLypcbiAqIENvcHlyaWdodCAoQykgMjAyMCBFbGlhc3RpayAoZWxpYXN0aWtzb2Z0cy5jb20pXG4gKlxuICogVGhpcyBmaWxlIGlzIHBhcnQgb2YgXCJKU0dhbWVUb29sc1wiLlxuICpcbiAqIFwiSlNHYW1lVG9vbHNcIiBpcyBmcmVlIHNvZnR3YXJlOiB5b3UgY2FuIHJlZGlzdHJpYnV0ZSBpdCBhbmQvb3IgbW9kaWZ5XG4gKiBpdCB1bmRlciB0aGUgdGVybXMgb2YgdGhlIEdOVSBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlIGFzIHB1Ymxpc2hlZCBieVxuICogdGhlIEZyZWUgU29mdHdhcmUgRm91bmRhdGlvbiwgZWl0aGVyIHZlcnNpb24gMyBvZiB0aGUgTGljZW5zZSwgb3JcbiAqIChhdCB5b3VyIG9wdGlvbikgYW55IGxhdGVyIHZlcnNpb24uXG4gKlxuICogXCJKU0dhbWVUb29sc1wiIGlzIGRpc3RyaWJ1dGVkIGluIHRoZSBob3BlIHRoYXQgaXQgd2lsbCBiZSB1c2VmdWwsXG4gKiBidXQgV0lUSE9VVCBBTlkgV0FSUkFOVFk7IHdpdGhvdXQgZXZlbiB0aGUgaW1wbGllZCB3YXJyYW50eSBvZlxuICogTUVSQ0hBTlRBQklMSVRZIG9yIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFLiAgU2VlIHRoZVxuICogR05VIEdlbmVyYWwgUHVibGljIExpY2Vuc2UgZm9yIG1vcmUgZGV0YWlscy5cbiAqXG4gKiBZb3Ugc2hvdWxkIGhhdmUgcmVjZWl2ZWQgYSBjb3B5IG9mIHRoZSBHTlUgR2VuZXJhbCBQdWJsaWMgTGljZW5zZVxuICogYWxvbmcgd2l0aCBcIkpTR2FtZVRvb2xzXCIuICBJZiBub3QsIHNlZSA8aHR0cDovL3d3dy5nbnUub3JnL2xpY2Vuc2VzLz4uXG4gKi9cbmltcG9ydCBVdGlscyBmcm9tIFwiLi9VdGlsc1wiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBJbWFnZUxvYWRlciB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHRoaXMuaW1hZ2VzID0ge307XG4gICAgdGhpcy5pbWFnZXNSZXNpemVkID0ge307XG4gICAgdGhpcy50cmllZExvYWRpbmcgPSAwO1xuICAgIHRoaXMuaGFzRXJyb3IgPSBmYWxzZTtcbiAgICB0aGlzLm5iSW1hZ2VzVG9Mb2FkID0gMTtcbiAgICB0aGlzLmZpcnN0SW1hZ2UgPSB0cnVlO1xuICB9XG5cbiAgbG9hZChpbWcsIGZ1bmMpIHtcbiAgICBpZih0aGlzLmZpcnN0SW1hZ2UpIHtcbiAgICAgIHRoaXMubmJJbWFnZXNUb0xvYWQgPSBpbWcubGVuZ3RoO1xuICAgICAgdGhpcy5maXJzdEltYWdlID0gZmFsc2U7XG4gICAgfVxuICAgIFxuICAgIGlmKGltZy5sZW5ndGggPiAwKSB7XG4gICAgICB0aGlzLmxvYWRJbWFnZShpbWdbMF0sIHJlc3VsdCA9PiB7XG4gICAgICAgIGlmKHJlc3VsdCA9PSB0cnVlKSB7XG4gICAgICAgICAgaW1nLnNoaWZ0KCk7XG4gICAgICAgICAgdGhpcy5sb2FkKGltZywgZnVuYyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdGhpcy5oYXNFcnJvciA9IHRydWU7XG4gICAgICAgICAgcmV0dXJuIGZ1bmMoKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiBmdW5jKCk7XG4gICAgfVxuICB9XG5cbiAgbG9hZEltYWdlKHNyYywgZnVuYykge1xuICAgIHRoaXMudHJpZWRMb2FkaW5nKys7XG4gIFxuICAgIGNvbnN0IGltYWdlID0gbmV3IEltYWdlKCk7XG4gICAgaW1hZ2Uuc3JjID0gc3JjO1xuICBcbiAgICBpbWFnZS5vbmxvYWQgPSAoKSA9PiB7XG4gICAgICBpZih0aGlzLmltYWdlcyAhPSBudWxsKSB7XG4gICAgICAgIHRoaXMuaW1hZ2VzW3NyY10gPSBpbWFnZTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiBmdW5jKGZhbHNlKTtcbiAgICAgIH1cbiAgXG4gICAgICB0aGlzLnRyaWVkTG9hZGluZyA9IDA7XG4gICAgICByZXR1cm4gZnVuYyh0cnVlKTtcbiAgICB9O1xuICBcbiAgICBpbWFnZS5vbmVycm9yID0gKCkgPT4ge1xuICAgICAgaWYodGhpcy50cmllZExvYWRpbmcgPj0gNSkge1xuICAgICAgICBpZih0aGlzLmltYWdlcyAhPSBudWxsKSB7XG4gICAgICAgICAgdGhpcy5pbWFnZXNbc3JjXSA9IGltYWdlO1xuICAgICAgICB9XG4gIFxuICAgICAgICB0aGlzLnRyaWVkTG9hZGluZyA9IDA7XG4gICAgICAgIHJldHVybiBmdW5jKGZhbHNlKTtcbiAgICAgIH1cbiAgXG4gICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgdGhpcy5sb2FkSW1hZ2Uoc3JjLCBmdW5jKTtcbiAgICAgIH0sIDI1MCk7XG4gICAgfTtcbiAgfVxuXG4gIGdldChzcmMsIHdpZHRoLCBoZWlnaHQpIHtcbiAgICBpZih0aGlzLmltYWdlcyAhPSBudWxsICYmIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbCh0aGlzLmltYWdlcywgc3JjKSkge1xuICAgICAgY29uc3QgaW1hZ2UgPSB0aGlzLmltYWdlc1tzcmNdO1xuXG4gICAgICBpZigod2lkdGggfHwgaGVpZ2h0KSAmJiAoaW1hZ2Uud2lkdGggIT0gd2lkdGggfHwgaW1hZ2UuaGVpZ2h0ICE9IGhlaWdodCkpIHtcbiAgICAgICAgY29uc3QgdyA9IE1hdGgucm91bmQod2lkdGgpO1xuICAgICAgICBjb25zdCBoID0gTWF0aC5yb3VuZChoZWlnaHQpO1xuICAgICAgICBjb25zdCBpZCA9IHNyYyArIFwiQFwiICsgdyArIFwiLVwiICsgaDtcblxuICAgICAgICBpZighT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHRoaXMuaW1hZ2VzUmVzaXplZCwgaWQpKSB7XG4gICAgICAgICAgY29uc3QgY2FudmFzVG1wID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImNhbnZhc1wiKTtcbiAgICAgICAgICBjb25zdCBjdHggPSBjYW52YXNUbXAuZ2V0Q29udGV4dChcIjJkXCIpO1xuICAgICAgICAgIGNhbnZhc1RtcC53aWR0aCA9IHc7XG4gICAgICAgICAgY2FudmFzVG1wLmhlaWdodCA9IGg7XG5cbiAgICAgICAgICBVdGlscy5kcmF3SW1hZ2UoY3R4LCBpbWFnZSwgMCwgMCwgdywgaCwgMCwgMCwgaW1hZ2Uud2lkdGgsIGltYWdlLmhlaWdodCk7XG4gICAgICAgICAgdGhpcy5pbWFnZXNSZXNpemVkW2lkXSA9IGNhbnZhc1RtcDtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB0aGlzLmltYWdlc1Jlc2l6ZWRbaWRdO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIGltYWdlO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG4gIH1cblxuICBjbGVhcigpIHtcbiAgICB0aGlzLmltYWdlcyA9IG51bGw7XG4gIH1cbn0iLCIvKlxuICogQ29weXJpZ2h0IChDKSAyMDIwIEVsaWFzdGlrIChlbGlhc3Rpa3NvZnRzLmNvbSlcbiAqXG4gKiBUaGlzIGZpbGUgaXMgcGFydCBvZiBcIkpTR2FtZVRvb2xzXCIuXG4gKlxuICogXCJKU0dhbWVUb29sc1wiIGlzIGZyZWUgc29mdHdhcmU6IHlvdSBjYW4gcmVkaXN0cmlidXRlIGl0IGFuZC9vciBtb2RpZnlcbiAqIGl0IHVuZGVyIHRoZSB0ZXJtcyBvZiB0aGUgR05VIEdlbmVyYWwgUHVibGljIExpY2Vuc2UgYXMgcHVibGlzaGVkIGJ5XG4gKiB0aGUgRnJlZSBTb2Z0d2FyZSBGb3VuZGF0aW9uLCBlaXRoZXIgdmVyc2lvbiAzIG9mIHRoZSBMaWNlbnNlLCBvclxuICogKGF0IHlvdXIgb3B0aW9uKSBhbnkgbGF0ZXIgdmVyc2lvbi5cbiAqXG4gKiBcIkpTR2FtZVRvb2xzXCIgaXMgZGlzdHJpYnV0ZWQgaW4gdGhlIGhvcGUgdGhhdCBpdCB3aWxsIGJlIHVzZWZ1bCxcbiAqIGJ1dCBXSVRIT1VUIEFOWSBXQVJSQU5UWTsgd2l0aG91dCBldmVuIHRoZSBpbXBsaWVkIHdhcnJhbnR5IG9mXG4gKiBNRVJDSEFOVEFCSUxJVFkgb3IgRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UuICBTZWUgdGhlXG4gKiBHTlUgR2VuZXJhbCBQdWJsaWMgTGljZW5zZSBmb3IgbW9yZSBkZXRhaWxzLlxuICpcbiAqIFlvdSBzaG91bGQgaGF2ZSByZWNlaXZlZCBhIGNvcHkgb2YgdGhlIEdOVSBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlXG4gKiBhbG9uZyB3aXRoIFwiSlNHYW1lVG9vbHNcIi4gIElmIG5vdCwgc2VlIDxodHRwOi8vd3d3LmdudS5vcmcvbGljZW5zZXMvPi5cbiAqL1xuaW1wb3J0IENvbnN0YW50cyBmcm9tIFwiLi9Db25zdGFudHNcIjtcbmltcG9ydCBVdGlscyBmcm9tIFwiLi9VdGlsc1wiO1xuaW1wb3J0IEJveCBmcm9tIFwiLi9Cb3hcIjtcbmltcG9ydCBTdHlsZSBmcm9tIFwiLi9TdHlsZVwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBJbnB1dCBleHRlbmRzIEJveCB7XG4gIHNlbGVjdGFibGUgPSB0cnVlO1xuICAjX3Bvc2l0aW9uU3RhcnQgPSAwO1xuICAjX3Bvc2l0aW9uU3RhcnRDbGljayA9IDA7XG4gICNfcG9zaXRpb25FbmQgPSAwO1xuXG4gIGNvbnN0cnVjdG9yKHgsIHksIHdpZHRoLCBoZWlnaHQsIHN0eWxlLCBkZWZhdWx0VGV4dCkge1xuICAgIHN1cGVyKHgsIHksIHdpZHRoLCBoZWlnaHQsIHN0eWxlKTtcbiAgICBcbiAgICB0aGlzLnRleHQgPSBkZWZhdWx0VGV4dCB8fCBcIlwiO1xuICAgIHRoaXMuI19wb3NpdGlvblN0YXJ0ID0gMDtcbiAgICB0aGlzLiNfcG9zaXRpb25FbmQgPSAwO1xuICAgIHRoaXMuI19wb3NpdGlvblN0YXJ0Q2xpY2sgPSAwO1xuICAgIHRoaXMubGFzdElucHV0VGV4dCA9IGZhbHNlO1xuICAgIHRoaXMub2Zmc2V0WCA9IDA7XG4gICAgdGhpcy5sYXN0VGltZSA9IDA7XG4gICAgdGhpcy50b3RhbFRpbWUgPSAwO1xuICAgIHRoaXMuY2xpY2tDdXJyZW50UG9zaXRpb24gPSBudWxsO1xuICAgIHRoaXMudGV4dENhY2hlID0gbnVsbDtcblxuICAgIHRoaXMuaW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XG4gICAgdGhpcy5pbnB1dC5zZXRBdHRyaWJ1dGUoXCJ0eXBlXCIsIFwidGV4dFwiKTtcbiAgICB0aGlzLmlucHV0LnN0eWxlLnBvc2l0aW9uID0gXCJhYnNvbHV0ZVwiO1xuICAgIHRoaXMuaW5wdXQuc3R5bGUubGVmdCA9IFwiLTk5OTlweFwiO1xuICAgIHRoaXMuaW5wdXQudGFiSW5kZXggPSAtMTtcbiAgICB0aGlzLmlucHV0LnZhbHVlID0gdGhpcy50ZXh0O1xuICAgIHRoaXMuaW5wdXQuYWRkRXZlbnRMaXN0ZW5lcihcImJsdXJcIiwgKCkgPT4gdGhpcy5zZWxlY3RlZCA9IGZhbHNlKTtcbiAgICB0aGlzLmlucHV0LmFkZEV2ZW50TGlzdGVuZXIoXCJmb2N1c1wiLCAoKSA9PiB0aGlzLnNlbGVjdGVkID0gdHJ1ZSk7XG4gICAgdGhpcy5pbnB1dC5hZGRFdmVudExpc3RlbmVyKFwiaW5wdXRcIiwgKCkgPT4ge1xuICAgICAgdGhpcy50b3RhbFRpbWUgPSAwO1xuICAgICAgdGhpcy5sYXN0SW5wdXRUZXh0ID0gdHJ1ZTtcbiAgICAgIHRoaXMucG9zaXRpb25TdGFydCA9IHRoaXMuaW5wdXQuc2VsZWN0aW9uU3RhcnQ7XG4gICAgICB0aGlzLnBvc2l0aW9uRW5kID0gdGhpcy5pbnB1dC5zZWxlY3Rpb25FbmQ7XG4gICAgfSk7XG5cbiAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKHRoaXMuaW5wdXQpO1xuXG4gICAgdGhpcy5hcHBlbmRUb0NhbnZhcyA9IGZhbHNlO1xuICAgIHRoaXMubm90aWNlTG9nZ2VkID0gZmFsc2U7XG5cbiAgICB0aGlzLmNhbnZhc1RtcCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJjYW52YXNcIik7XG5cbiAgICBjb25zdCBtb3ZlQWN0aW9uQ2FsbGJhY2sgPSAoZGVsdGFYLCBkZWx0YVksIHBvc2l0aW9uKSA9PiB7XG4gICAgICBpZihwb3NpdGlvbikge1xuICAgICAgICBjb25zdCBpQ2xpY2sgPSB0aGlzLmdldExldHRlckNsaWNrZWQocG9zaXRpb24pO1xuICBcbiAgICAgICAgaWYoaUNsaWNrICE9IG51bGwpIHtcbiAgICAgICAgICBpZihpQ2xpY2sgPiB0aGlzLnBvc2l0aW9uU3RhcnRDbGljaykge1xuICAgICAgICAgICAgdGhpcy5zZXRTZWxlY3Rpb25SYW5nZSh0aGlzLnBvc2l0aW9uU3RhcnRDbGljaywgaUNsaWNrLCBcImZvcndhcmRcIik7XG4gICAgICAgICAgfSBlbHNlIGlmKGlDbGljayA8IHRoaXMucG9zaXRpb25TdGFydENsaWNrKSB7XG4gICAgICAgICAgICB0aGlzLnNldFNlbGVjdGlvblJhbmdlKGlDbGljaywgdGhpcy5wb3NpdGlvblN0YXJ0Q2xpY2ssIFwiYmFja3dhcmRcIik7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfTtcblxuICAgIHRoaXMuYWRkRG93bkFjdGlvbihwb3NpdGlvbiA9PiB7XG4gICAgICBjb25zdCBpQ2xpY2sgPSB0aGlzLmdldExldHRlckNsaWNrZWQocG9zaXRpb24pO1xuXG4gICAgICBpZihpQ2xpY2sgIT0gbnVsbCkge1xuICAgICAgICB0aGlzLnBvc2l0aW9uU3RhcnRDbGljayA9IGlDbGljaztcbiAgICAgICAgdGhpcy5zZXRTZWxlY3Rpb25SYW5nZShpQ2xpY2ssIGlDbGljaywgXCJmb3J3YXJkXCIpO1xuICAgICAgfVxuXG4gICAgICB0aGlzLnRvdGFsVGltZSA9IDA7XG4gICAgfSk7XG5cbiAgICB0aGlzLmFkZENsaWNrQWN0aW9uKCgpID0+IHRoaXMuY2xpY2soKSk7XG4gICAgdGhpcy5hZGRNb3ZlQWN0aW9uKG1vdmVBY3Rpb25DYWxsYmFjayk7XG4gICAgdGhpcy5hZGRTY3JvbGxBY3Rpb24obW92ZUFjdGlvbkNhbGxiYWNrKTtcbiAgfVxuXG4gIGRyYXcoY29udGV4dCkge1xuICAgIGlmKHRoaXMuaGlkZGVuKSByZXR1cm47XG4gICAgc3VwZXIuZHJhdyhjb250ZXh0KTtcbiAgICBcbiAgICBjb25zdCBjYW52YXMgPSBjb250ZXh0LmNhbnZhcztcbiAgICBjb25zdCBjdHggPSBjYW52YXMuZ2V0Q29udGV4dChcIjJkXCIpO1xuICAgIGN0eC5zYXZlKCk7XG5cbiAgICBpZih0aGlzLmlucHV0LnNlbGVjdGlvbkVuZCAhPSB0aGlzLnBvc2l0aW9uRW5kKSB0aGlzLnRvdGFsVGltZSA9IDA7XG5cbiAgICBpZih0aGlzLmNhbnZhcyAmJiB0aGlzLmNhbnZhcy5jb250YWluZXIgJiYgIXRoaXMuYXBwZW5kVG9DYW52YXMpIHtcbiAgICAgIGRvY3VtZW50LmJvZHkucmVtb3ZlQ2hpbGQodGhpcy5pbnB1dCk7XG4gICAgICB0aGlzLmNhbnZhcy5jb250YWluZXIuYXBwZW5kQ2hpbGQodGhpcy5pbnB1dCk7XG4gICAgICB0aGlzLmFwcGVuZFRvQ2FudmFzID0gdHJ1ZTtcbiAgICB9IGVsc2UgaWYoIXRoaXMuY2FudmFzICYmICF0aGlzLm5vdGljZUxvZ2dlZCkge1xuICAgICAgY29uc29sZSAmJiBjb25zb2xlLndhcm4gJiYgY29uc29sZS53YXJuKENvbnN0YW50cy5TdHJpbmcuV0FSTklOR19NRVNTQUdFICsgXCIgXCIgKyBDb25zdGFudHMuU3RyaW5nLklOUFVUX0ZVTExTQ1JFRU4pO1xuICAgICAgdGhpcy5ub3RpY2VMb2dnZWQgPSB0cnVlO1xuICAgIH1cblxuICAgIGlmKHRoaXMuc2VsZWN0ZWQgJiYgIXRoaXMuZGlzYWJsZWQpIHtcbiAgICAgIHRoaXMuY2xpY2soKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5ibHVyKCk7XG4gICAgfVxuXG4gICAgdGhpcy50ZXh0ID0gdGhpcy5pbnB1dC52YWx1ZTtcbiAgICB0aGlzLnBvc2l0aW9uU3RhcnQgPSB0aGlzLmlucHV0LnNlbGVjdGlvblN0YXJ0O1xuICAgIHRoaXMucG9zaXRpb25FbmQgPSB0aGlzLmlucHV0LnNlbGVjdGlvbkVuZDtcblxuICAgIGNvbnN0IHRpbWUgPSBwZXJmb3JtYW5jZS5ub3coKTtcbiAgICBsZXQgb2Zmc2V0VGltZSA9IDA7XG5cbiAgICBpZih0aGlzLmxhc3RUaW1lID4gMCkgb2Zmc2V0VGltZSA9IHRpbWUgLSB0aGlzLmxhc3RUaW1lO1xuICAgIHRoaXMubGFzdFRpbWUgPSB0aW1lO1xuICAgIHRoaXMudG90YWxUaW1lICs9IG9mZnNldFRpbWU7XG5cbiAgICB0aGlzLmRyYXdCYWNrZ3JvdW5kKGN0eCk7XG4gICAgdGhpcy5kcmF3Qm9yZGVyKGN0eCk7XG5cbiAgICB0aGlzLmNhbnZhc1RtcC53aWR0aCA9IFV0aWxzLmdldENhbnZhc1dpZHRoKGNhbnZhcykgKiBDb25zdGFudHMuU2V0dGluZy5QSVhFTF9SQVRJTztcbiAgICB0aGlzLmNhbnZhc1RtcC5oZWlnaHQgPSBVdGlscy5nZXRDYW52YXNIZWlnaHQoY2FudmFzKSAqIENvbnN0YW50cy5TZXR0aW5nLlBJWEVMX1JBVElPO1xuICAgIHRoaXMuY2FudmFzVG1wLnN0eWxlLndpZHRoID0gVXRpbHMuZ2V0Q2FudmFzV2lkdGgoY2FudmFzKTtcbiAgICB0aGlzLmNhbnZhc1RtcC5zdHlsZS5oZWlnaHQgPSBVdGlscy5nZXRDYW52YXNIZWlnaHQoY2FudmFzKTtcbiAgICBjb25zdCBjdHhUZXh0ID0gdGhpcy5jYW52YXNUbXAuZ2V0Q29udGV4dChcIjJkXCIpO1xuICAgIFV0aWxzLmNsZWFyKGN0eFRleHQpO1xuICAgIGN0eFRleHQuc2NhbGUoQ29uc3RhbnRzLlNldHRpbmcuUElYRUxfUkFUSU8sIENvbnN0YW50cy5TZXR0aW5nLlBJWEVMX1JBVElPKTtcblxuICAgIHRoaXMudXBkYXRlVGV4dENhY2hlKHRoaXMueCArIDUpO1xuICAgIHRoaXMuYXV0b1Njcm9sbCgpO1xuICAgIHRoaXMuZHJhd1RleHQoY3R4VGV4dCwgdGhpcy54ICsgNSk7XG5cbiAgICBVdGlscy5kcmF3SW1hZ2VEYXRhKGN0eCwgdGhpcy5jYW52YXNUbXAsIHRoaXMueCArIHRoaXMuc3R5bGUuYm9yZGVyU2l6ZSwgdGhpcy55ICsgdGhpcy5zdHlsZS5ib3JkZXJTaXplLCB0aGlzLndpZHRoIC0gdGhpcy5zdHlsZS5ib3JkZXJTaXplICogMiwgdGhpcy5oZWlnaHQgLSB0aGlzLnN0eWxlLmJvcmRlclNpemUgKiAyLCAodGhpcy54ICsgdGhpcy5zdHlsZS5ib3JkZXJTaXplKSAqIENvbnN0YW50cy5TZXR0aW5nLlBJWEVMX1JBVElPLCAodGhpcy55ICsgdGhpcy5zdHlsZS5ib3JkZXJTaXplKSAqIENvbnN0YW50cy5TZXR0aW5nLlBJWEVMX1JBVElPLCAodGhpcy53aWR0aCAtIHRoaXMuc3R5bGUuYm9yZGVyU2l6ZSAqIDIpICAqIENvbnN0YW50cy5TZXR0aW5nLlBJWEVMX1JBVElPLCAodGhpcy5oZWlnaHQgLSB0aGlzLnN0eWxlLmJvcmRlclNpemUgKiAyKSAqIENvbnN0YW50cy5TZXR0aW5nLlBJWEVMX1JBVElPKTtcblxuICAgIGlmKCh0aGlzLmhvdmVyZWQgfHwgdGhpcy5jbGlja2VkKSAmJiB0aGlzLmNhbnZhcykgdGhpcy5jYW52YXMuY3Vyc29yID0gXCJ0ZXh0XCI7XG5cbiAgICBpZighdGhpcy5zZWxlY3RlZCkge1xuICAgICAgdGhpcy50b3RhbFRpbWUgPSAwO1xuICAgIH1cblxuICAgIGN0eC5yZXN0b3JlKCk7XG4gIH1cblxuICBkcmF3VGV4dChjdHhUZXh0LCBjdXJyZW50WCkge1xuICAgIGZvcihsZXQgaSA9IC0xOyBpIDwgdGhpcy50ZXh0Lmxlbmd0aDsgaSsrKSB7XG4gICAgICBpZihpID4gLTEpIHtcbiAgICAgICAgY29uc3Qgc2l6ZXMgPSB0aGlzLnRleHRDYWNoZS5sZXR0ZXJzW2ldLnNpemVzO1xuXG4gICAgICAgIGNvbnN0IHhEcmF3ID0gY3VycmVudFggLSB0aGlzLm9mZnNldFg7XG4gICAgICAgIGNvbnN0IHlEcmF3ID0gdGhpcy55ICsgdGhpcy5zdHlsZS5ib3JkZXJTaXplO1xuXG4gICAgICAgIGlmKHRoaXMuaXNMZXR0ZXJWaXNpYmxlKGkpKSB7IC8vIERvbid0IGRyYXcgdGhlIHRleHQgaWYgaXQgaXMgb3V0c2lkZSB0aGUgaW5wdXQgKG92ZXJmbG93KVxuICAgICAgICAgIGlmKHRoaXMucG9zaXRpb25TdGFydCAhPSB0aGlzLnBvc2l0aW9uRW5kICYmIGkgPj0gdGhpcy5wb3NpdGlvblN0YXJ0ICYmIGkgPCB0aGlzLnBvc2l0aW9uRW5kKSB7XG4gICAgICAgICAgICB0aGlzLmRyYXdIaWdobGlnaHQoY3R4VGV4dCwgY3VycmVudFgsIHNpemVzKTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBVdGlscy5kcmF3VGV4dChjdHhUZXh0LCB0aGlzLnRleHRbaV0sIHRoaXMuc3R5bGUuZm9udENvbG9yLCB0aGlzLnN0eWxlLmZvbnRTaXplLCB0aGlzLnN0eWxlLmZvbnRGYW1pbHksIFwiZGVmYXVsdFwiLCBcImRlZmF1bHRcIiwgeERyYXcsIHlEcmF3LCBmYWxzZSk7XG4gICAgICAgIH1cblxuICAgICAgICBjdXJyZW50WCArPSBzaXplc1tcIndpZHRoXCJdICsgdGhpcy5zdHlsZS5zcGFjZUJldHdlZW5Db21wb25lbnRzO1xuICAgICAgfVxuXG4gICAgICBpZih0aGlzLnBvc2l0aW9uRW5kID09IGkgKyAxICYmIHRoaXMuc2VsZWN0ZWQpIHtcbiAgICAgICAgaWYodGhpcy50b3RhbFRpbWUgPD0gNTAwKSB7XG4gICAgICAgICAgdGhpcy5kcmF3Q3Vyc29yKGN0eFRleHQsIGN1cnJlbnRYKTtcbiAgICAgICAgfSBlbHNlIGlmKHRoaXMudG90YWxUaW1lID4gMTAwMCkge1xuICAgICAgICAgIHRoaXMudG90YWxUaW1lID0gMDtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBjdXJyZW50WDtcbiAgfVxuXG4gIGRyYXdDdXJzb3IoY3R4VGV4dCwgY3VycmVudFgpIHtcbiAgICBjdHhUZXh0LnN0cm9rZVN0eWxlID0gdGhpcy5zdHlsZS5ib3JkZXJDb2xvcjtcbiAgICBjdHhUZXh0LmxpbmVXaWR0aCA9IDE7XG4gICAgY3R4VGV4dC5iZWdpblBhdGgoKTtcbiAgICBjdHhUZXh0Lm1vdmVUbyhjdXJyZW50WCAtIHRoaXMub2Zmc2V0WCwgdGhpcy55ICsgMyk7XG4gICAgY3R4VGV4dC5saW5lVG8oY3VycmVudFggLSB0aGlzLm9mZnNldFgsIHRoaXMueSArIHRoaXMuc3R5bGUuZm9udFNpemUpO1xuICAgIGN0eFRleHQuc3Ryb2tlKCk7XG4gIH1cblxuICBkcmF3SGlnaGxpZ2h0KGN0eFRleHQsIGN1cnJlbnRYLCBzaXplcykge1xuICAgIGN0eFRleHQuZmlsbFN0eWxlID0gdGhpcy5zdHlsZS5zZWxlY3RDb2xvcjtcbiAgICBjdHhUZXh0LmZpbGxSZWN0KGN1cnJlbnRYIC0gdGhpcy5vZmZzZXRYLCB0aGlzLnkgKyB0aGlzLnN0eWxlLmJvcmRlclNpemUsIHNpemVzW1wid2lkdGhcIl0gKyAyLCB0aGlzLmhlaWdodCAtIHRoaXMuc3R5bGUuYm9yZGVyU2l6ZSAqIDIgLSAxKTtcbiAgfVxuXG4gIHVwZGF0ZVRleHRDYWNoZShjdXJyZW50WCkge1xuICAgIGNvbnN0IGN0eCA9IHRoaXMuY2FudmFzID8gdGhpcy5jYW52YXMuZ2V0Q29udGV4dChcIjJkXCIpIDogbnVsbDtcbiAgICBjb25zdCBwYXJlbnQgPSAodGhpcy5jYW52YXMgJiYgdGhpcy5jYW52YXMuc2NlbmUpIHx8IHRoaXMuY2FudmFzIHx8IChjdHggJiYgY3R4LmNhbnZhcyk7XG5cbiAgICBpZihjdHggJiYgKENvbnN0YW50cy5TZXR0aW5nLkRJU0FCTEVfT1BUSU1JWkFUSU9OUyB8fCAhdGhpcy50ZXh0Q2FjaGUgfHwgdGhpcy50ZXh0Q2FjaGUuZm9udFNpemUgIT0gdGhpcy5zdHlsZS5mb250U2l6ZSB8fCB0aGlzLnRleHRDYWNoZS5mb250RmFtaWx5ICE9IHRoaXMuc3R5bGUuZm9udEZhbWlseSB8fCB0aGlzLnRleHQgIT0gdGhpcy50ZXh0Q2FjaGUudGV4dCB8fCAocGFyZW50ICYmIHBhcmVudC53aWR0aCAhPSB0aGlzLnRleHRDYWNoZS5wYXJlbnRXaWR0aCkpKSB7XG4gICAgICB0aGlzLnRleHRDYWNoZSA9IHsgXCJmb250U2l6ZVwiOiB0aGlzLnN0eWxlLmZvbnRTaXplLCBcImZvbnRGYW1pbHlcIjogdGhpcy5zdHlsZS5mb250RmFtaWx5LCBcInRleHRcIjogdGhpcy50ZXh0LCBcInBhcmVudFdpZHRoXCI6IHBhcmVudC53aWR0aCwgXCJsZXR0ZXJzXCI6IFtdIH07XG5cbiAgICAgIGZvcihsZXQgaSA9IDA7IGkgPCB0aGlzLnRleHQubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgY29uc3Qgc2l6ZXMgPSBVdGlscy53cmFwVGV4dExpbmVzKGN0eCwgdGhpcy50ZXh0W2ldLCB0aGlzLndpZHRoLCB0aGlzLnN0eWxlLmZvbnRTaXplLCB0aGlzLnN0eWxlLmZvbnRGYW1pbHksIHRydWUpO1xuICAgICAgICB0aGlzLnRleHRDYWNoZS5sZXR0ZXJzW2ldID0ge1widGV4dFwiOiB0aGlzLnRleHRbaV0sIFwiY3VycmVudFhcIjogY3VycmVudFgsIFwic2l6ZXNcIjogc2l6ZXMgfTsgXG4gICAgICAgIGN1cnJlbnRYICs9IHNpemVzW1wid2lkdGhcIl0gKyB0aGlzLnN0eWxlLnNwYWNlQmV0d2VlbkNvbXBvbmVudHM7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgaXNDbGlja0N1cnJlbnRQb3NpdGlvbihwb3NpdGlvbiwgY3VycmVudFgsIHNpemVzKSB7XG4gICAgaWYocG9zaXRpb24ueCArIHRoaXMub2Zmc2V0WCA8PSBjdXJyZW50WCArIHNpemVzW1wid2lkdGhcIl0gKyB0aGlzLnN0eWxlLnNwYWNlQmV0d2VlbkNvbXBvbmVudHMgJiYgcG9zaXRpb24ueCArIHRoaXMub2Zmc2V0WCA+PSBjdXJyZW50WCkge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuXG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgaXNDbGlja0FmdGVyUG9zaXRpb24ocG9zaXRpb24sIGN1cnJlbnRYLCBzaXplcykge1xuICAgIGlmKHBvc2l0aW9uLnggKyB0aGlzLm9mZnNldFggPj0gY3VycmVudFggKyBzaXplc1tcIndpZHRoXCJdICsgdGhpcy5zdHlsZS5zcGFjZUJldHdlZW5Db21wb25lbnRzKSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG5cbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBnZXRMZXR0ZXJDbGlja2VkKHBvc2l0aW9uKSB7XG4gICAgaWYodGhpcy50ZXh0Q2FjaGUpIHtcbiAgICAgIGZvcihsZXQgaSA9IDA7IGkgPCB0aGlzLnRleHQubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgY29uc3QgbGV0dGVyID0gdGhpcy50ZXh0Q2FjaGUubGV0dGVyc1tpXTtcbiAgICAgICAgXG4gICAgICAgIGlmKHRoaXMuaXNDbGlja0N1cnJlbnRQb3NpdGlvbihwb3NpdGlvbiwgTWF0aC5yb3VuZChsZXR0ZXIuY3VycmVudFgpLCBsZXR0ZXIuc2l6ZXMpKSB7XG4gICAgICAgICAgcmV0dXJuIGk7XG4gICAgICAgIH0gZWxzZSBpZihpID49IHRoaXMudGV4dC5sZW5ndGggLSAxICYmIHRoaXMuaXNDbGlja0FmdGVyUG9zaXRpb24ocG9zaXRpb24sIE1hdGgucm91bmQobGV0dGVyLmN1cnJlbnRYKSwgbGV0dGVyLnNpemVzKSkge1xuICAgICAgICAgIHJldHVybiBpICsgMTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIGdldCBjdXJzb3JQb3NpdGlvbigpIHtcbiAgICBpZih0aGlzLnRleHRDYWNoZSkge1xuICAgICAgbGV0IHBvc2l0aW9uID0gdGhpcy5wb3NpdGlvbkVuZCAtIDE7XG5cbiAgICAgIGlmKHRoaXMucG9zaXRpb25FbmQgIT0gdGhpcy5wb3NpdGlvblN0YXJ0ICYmIHRoaXMucG9zaXRpb25FbmQgPT0gdGhpcy5wb3NpdGlvblN0YXJ0Q2xpY2sgJiYgdGhpcy5wb3NpdGlvblN0YXJ0IDwgdGhpcy5wb3NpdGlvblN0YXJ0Q2xpY2spIHtcbiAgICAgICAgcG9zaXRpb24gPSB0aGlzLnBvc2l0aW9uU3RhcnQgLSAxO1xuICAgICAgfVxuICAgICAgXG4gICAgICBpZihwb3NpdGlvbiA8IDApIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICBcImN1cnJlbnRMZXR0ZXJcIjogdGhpcy50ZXh0Q2FjaGUubGV0dGVyc1swXSxcbiAgICAgICAgICBcInhcIjogdGhpcy54ICsgdGhpcy5zdHlsZS5ib3JkZXJTaXplXG4gICAgICAgIH07XG4gICAgICB9XG5cbiAgICAgIGNvbnN0IGN1cnJlbnRMZXR0ZXIgPSB0aGlzLnRleHRDYWNoZS5sZXR0ZXJzW3Bvc2l0aW9uXTtcblxuICAgICAgaWYoY3VycmVudExldHRlcikge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgIFwiY3VycmVudExldHRlclwiOiBjdXJyZW50TGV0dGVyLFxuICAgICAgICAgIFwieFwiOiBjdXJyZW50TGV0dGVyLmN1cnJlbnRYXG4gICAgICAgIH07XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIG51bGw7XG4gIH1cblxuICBpc0xldHRlclZpc2libGUobGV0dGVySWQpIHtcbiAgICBpZih0aGlzLnRleHRDYWNoZSkge1xuICAgICAgY29uc3QgbGV0dGVyID0gdGhpcy50ZXh0Q2FjaGUubGV0dGVyc1tsZXR0ZXJJZF07XG5cbiAgICAgIGlmKGxldHRlcikge1xuICAgICAgICBjb25zdCB4RHJhdyA9IGxldHRlci5jdXJyZW50WCAtIHRoaXMub2Zmc2V0WDtcbiAgXG4gICAgICAgIGlmKHhEcmF3ID49IHRoaXMueCAtIGxldHRlci5zaXplc1tcIndpZHRoXCJdICYmIHhEcmF3IDw9IHRoaXMueCArIHRoaXMud2lkdGgpIHtcbiAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIGF1dG9TY3JvbGwoKSB7XG4gICAgaWYodGhpcy50ZXh0Q2FjaGUpIHtcbiAgICAgIGNvbnN0IGN1cnNvclBvc2l0aW9uID0gdGhpcy5jdXJzb3JQb3NpdGlvbjtcbiAgICAgIGNvbnN0IGN1cnJlbnRMZXR0ZXJTaXplID0gY3Vyc29yUG9zaXRpb24uY3VycmVudExldHRlciA/IGN1cnNvclBvc2l0aW9uLmN1cnJlbnRMZXR0ZXIuc2l6ZXNbXCJ3aWR0aFwiXSA6IDA7XG4gICAgICBjb25zdCBjdXJzb3JQb3NpdGlvblBvcyA9IGN1cnNvclBvc2l0aW9uLnggKyBjdXJyZW50TGV0dGVyU2l6ZSArIHRoaXMuc3R5bGUuc3BhY2VCZXR3ZWVuQ29tcG9uZW50cztcbiAgICAgIGNvbnN0IGN1cnNvclBvc2l0aW9uTmVnID0gY3Vyc29yUG9zaXRpb24ueCAtIGN1cnJlbnRMZXR0ZXJTaXplIC0gdGhpcy5zdHlsZS5zcGFjZUJldHdlZW5Db21wb25lbnRzO1xuXG4gICAgICBjb25zdCBvZmZzZXRYID0gTWF0aC5tYXgoMCwgTWF0aC5yb3VuZChjdXJzb3JQb3NpdGlvblBvcyAtIHRoaXMueCAtIHRoaXMud2lkdGggKyB0aGlzLnN0eWxlLmJvcmRlclNpemUgKyB0aGlzLnN0eWxlLnNwYWNlQmV0d2VlbkNvbXBvbmVudHMgKiAyKSk7XG4gICAgICBjb25zdCBvZmZzZXRYTmVnID0gTWF0aC5tYXgoMCwgTWF0aC5yb3VuZChjdXJzb3JQb3NpdGlvbk5lZyAtIHRoaXMueCAtIHRoaXMuc3R5bGUuYm9yZGVyU2l6ZSAtIHRoaXMuc3R5bGUuc3BhY2VCZXR3ZWVuQ29tcG9uZW50cyAqIDIpKTtcblxuICAgICAgaWYodGhpcy5vZmZzZXRYIDwgMCkge1xuICAgICAgICB0aGlzLm9mZnNldFggPSAwO1xuICAgICAgfVxuXG4gICAgICBpZihjdXJzb3JQb3NpdGlvblBvcyAtIHRoaXMub2Zmc2V0WCA+PSB0aGlzLnggKyB0aGlzLndpZHRoIC0gdGhpcy5zdHlsZS5ib3JkZXJTaXplKSB7XG4gICAgICAgIHRoaXMub2Zmc2V0WCA9IG9mZnNldFg7XG4gICAgICAgIHJldHVybiBvZmZzZXRYO1xuICAgICAgfSBlbHNlIGlmKGN1cnNvclBvc2l0aW9uTmVnIC0gdGhpcy5vZmZzZXRYIDw9IHRoaXMueCArIHRoaXMuc3R5bGUuYm9yZGVyU2l6ZSkge1xuICAgICAgICB0aGlzLm9mZnNldFggPSBvZmZzZXRYTmVnO1xuICAgICAgICByZXR1cm4gb2Zmc2V0WE5lZztcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBjbGljaygpIHtcbiAgICB0aGlzLmlucHV0LmZvY3VzKCk7XG4gIH1cblxuICBibHVyKCkge1xuICAgIHRoaXMuaW5wdXQuYmx1cigpO1xuICB9XG5cbiAgZ2V0IHBvc2l0aW9uU3RhcnQoKSB7XG4gICAgcmV0dXJuIHRoaXMuI19wb3NpdGlvblN0YXJ0O1xuICB9XG5cbiAgZ2V0IHBvc2l0aW9uU3RhcnRDbGljaygpIHtcbiAgICByZXR1cm4gdGhpcy4jX3Bvc2l0aW9uU3RhcnRDbGljaztcbiAgfVxuXG4gIGdldCBwb3NpdGlvbkVuZCgpIHtcbiAgICByZXR1cm4gdGhpcy4jX3Bvc2l0aW9uRW5kO1xuICB9XG5cbiAgc2V0IHBvc2l0aW9uU3RhcnQocG9zaXRpb24pIHtcbiAgICB0aGlzLmlucHV0LnNlbGVjdGlvblN0YXJ0ID0gcG9zaXRpb247XG4gICAgdGhpcy4jX3Bvc2l0aW9uU3RhcnQgPSBwb3NpdGlvbjtcbiAgfVxuXG4gIHNldCBwb3NpdGlvblN0YXJ0Q2xpY2socG9zaXRpb24pIHtcbiAgICB0aGlzLiNfcG9zaXRpb25TdGFydENsaWNrID0gcG9zaXRpb247XG4gIH1cblxuICBzZXQgcG9zaXRpb25FbmQocG9zaXRpb24pIHtcbiAgICB0aGlzLmlucHV0LnNlbGVjdGlvbkVuZCA9IHBvc2l0aW9uO1xuICAgIHRoaXMuI19wb3NpdGlvbkVuZCA9IHBvc2l0aW9uO1xuICB9XG5cbiAgc2V0U2VsZWN0aW9uUmFuZ2Uoc3RhcnQsIGVuZCwgZGlyZWN0aW9uKSB7XG4gICAgdGhpcy5pbnB1dC5zZXRTZWxlY3Rpb25SYW5nZShzdGFydCwgZW5kLCBkaXJlY3Rpb24pO1xuICAgIHRoaXMucG9zaXRpb25TdGFydCA9IHN0YXJ0O1xuICAgIHRoaXMucG9zaXRpb25FbmQgPSBlbmQ7XG4gIH1cblxuICBnZXQgaGVpZ2h0KCkge1xuICAgIGNvbnN0IGJvcmRlclNpemUgPSB0aGlzLnN0eWxlICYmIHRoaXMuc3R5bGUuYm9yZGVyU2l6ZSA/IHRoaXMuc3R5bGUuYm9yZGVyU2l6ZSA6IDA7XG4gICAgcmV0dXJuIHN1cGVyLmhlaWdodCA/IHN1cGVyLmhlaWdodCA6IHRoaXMuc3R5bGUuZm9udFNpemUgKyBib3JkZXJTaXplICogMjtcbiAgfVxuXG4gIGdldCBkZWZhdWx0U3R5bGUoKSB7XG4gICAgcmV0dXJuIG5ldyBTdHlsZSh7XG4gICAgICBcImZvbnRTaXplXCI6IE1hdGguZmxvb3IoQ29uc3RhbnRzLlNldHRpbmcuRk9OVF9TSVpFIC8gMS4yNSksXG4gICAgICBcImZvbnRGYW1pbHlcIjogQ29uc3RhbnRzLlNldHRpbmcuRk9OVF9GQU1JTFksXG4gICAgICBcImZvbnRDb2xvclwiOiBDb25zdGFudHMuU2V0dGluZy5JTlBVVF9ERUZBVUxUX0ZPTlRfQ09MT1IsXG4gICAgICBcImJhY2tncm91bmRDb2xvclwiOiBDb25zdGFudHMuU2V0dGluZy5JTlBVVF9ERUZBVUxUX0JBQ0tHUk9VTkRfQ09MT1IsXG4gICAgICBcImJvcmRlckNvbG9yXCI6IENvbnN0YW50cy5TZXR0aW5nLklOUFVUX0RFRkFVTFRfQk9SREVSX0NPTE9SLFxuICAgICAgXCJib3JkZXJDb2xvclNlbGVjdGVkXCI6IENvbnN0YW50cy5TZXR0aW5nLklOUFVUX0RFRkFVTFRfQk9SREVSX0NPTE9SX1NFTEVDVEVELFxuICAgICAgXCJzZWxlY3RDb2xvclwiOiBDb25zdGFudHMuU2V0dGluZy5JTlBVVF9ERUZBVUxUX1NFTEVDVF9DT0xPUixcbiAgICAgIFwic3BhY2VCZXR3ZWVuQ29tcG9uZW50c1wiOiAxXG4gICAgfSk7XG4gIH1cbn0iLCIvKlxuICogQ29weXJpZ2h0IChDKSAyMDIwIEVsaWFzdGlrIChlbGlhc3Rpa3NvZnRzLmNvbSlcbiAqXG4gKiBUaGlzIGZpbGUgaXMgcGFydCBvZiBcIkpTR2FtZVRvb2xzXCIuXG4gKlxuICogXCJKU0dhbWVUb29sc1wiIGlzIGZyZWUgc29mdHdhcmU6IHlvdSBjYW4gcmVkaXN0cmlidXRlIGl0IGFuZC9vciBtb2RpZnlcbiAqIGl0IHVuZGVyIHRoZSB0ZXJtcyBvZiB0aGUgR05VIEdlbmVyYWwgUHVibGljIExpY2Vuc2UgYXMgcHVibGlzaGVkIGJ5XG4gKiB0aGUgRnJlZSBTb2Z0d2FyZSBGb3VuZGF0aW9uLCBlaXRoZXIgdmVyc2lvbiAzIG9mIHRoZSBMaWNlbnNlLCBvclxuICogKGF0IHlvdXIgb3B0aW9uKSBhbnkgbGF0ZXIgdmVyc2lvbi5cbiAqXG4gKiBcIkpTR2FtZVRvb2xzXCIgaXMgZGlzdHJpYnV0ZWQgaW4gdGhlIGhvcGUgdGhhdCBpdCB3aWxsIGJlIHVzZWZ1bCxcbiAqIGJ1dCBXSVRIT1VUIEFOWSBXQVJSQU5UWTsgd2l0aG91dCBldmVuIHRoZSBpbXBsaWVkIHdhcnJhbnR5IG9mXG4gKiBNRVJDSEFOVEFCSUxJVFkgb3IgRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UuICBTZWUgdGhlXG4gKiBHTlUgR2VuZXJhbCBQdWJsaWMgTGljZW5zZSBmb3IgbW9yZSBkZXRhaWxzLlxuICpcbiAqIFlvdSBzaG91bGQgaGF2ZSByZWNlaXZlZCBhIGNvcHkgb2YgdGhlIEdOVSBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlXG4gKiBhbG9uZyB3aXRoIFwiSlNHYW1lVG9vbHNcIi4gIElmIG5vdCwgc2VlIDxodHRwOi8vd3d3LmdudS5vcmcvbGljZW5zZXMvPi5cbiAqL1xuaW1wb3J0IENvbnN0YW50cyBmcm9tIFwiLi9Db25zdGFudHNcIjtcbmltcG9ydCBVdGlscyBmcm9tIFwiLi9VdGlsc1wiO1xuaW1wb3J0IENvbXBvbmVudCBmcm9tIFwiLi9Db21wb25lbnRcIjtcbmltcG9ydCBTdHlsZSBmcm9tIFwiLi9TdHlsZVwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBMYWJlbCBleHRlbmRzIENvbXBvbmVudCB7XG4gIHNlbGVjdGFibGUgPSBmYWxzZTtcbiAgI190ZXh0ID0gXCJcIjtcblxuICBjb25zdHJ1Y3Rvcih0ZXh0LCB4LCB5LCBzdHlsZSkge1xuICAgIHN1cGVyKHgsIHksIG51bGwsIG51bGwsIHN0eWxlKTtcbiAgICB0aGlzLnRleHQgPSB0ZXh0O1xuICAgIHRoaXMuc2l6ZXNDYWNoZSA9IG51bGw7XG5cbiAgICBpZighQ29uc3RhbnRzLlNldHRpbmcuRElTQUJMRV9FWFBFUklNRU5UQUxfT1BUSU1JWkFUSU9OUykge1xuICAgICAgdGhpcy51cGRhdGVTaXplcygpO1xuXG4gICAgICB0aGlzLmFkZENoYW5nZUFjdGlvbihjb21wb25lbnRDaGFuZ2VkID0+IHtcbiAgICAgICAgdGhpcy51cGRhdGVTaXplcygpO1xuICAgICAgICBjb21wb25lbnRDaGFuZ2VkICE9IHRoaXMucGFyZW50ICYmIHRoaXMucGFyZW50ICYmIHRoaXMucGFyZW50LnJlYWN0b3IgJiYgdGhpcy5wYXJlbnQucmVhY3Rvci5kaXNwYXRjaEV2ZW50KFwib25DaGFuZ2VcIiwgdGhpcyk7XG4gICAgICB9KTtcbiAgICB9XG4gIH1cblxuICBkcmF3KGNvbnRleHQpIHtcbiAgICBpZih0aGlzLmhpZGRlbikgcmV0dXJuO1xuICAgIHN1cGVyLmRyYXcoY29udGV4dCk7XG4gICAgXG4gICAgY29uc3QgY2FudmFzID0gY29udGV4dC5jYW52YXM7XG4gICAgY29uc3QgY3R4ID0gY2FudmFzLmdldENvbnRleHQoXCIyZFwiKTtcbiAgICBjdHguc2F2ZSgpO1xuXG4gICAgVXRpbHMuZHJhd1RleHQoY3R4LCB0aGlzLnRleHQsIHRoaXMuc3R5bGUuZm9udENvbG9yLCB0aGlzLnN0eWxlLmZvbnRTaXplLCB0aGlzLnN0eWxlLmZvbnRGYW1pbHksIHRoaXMuc3R5bGUuYWxpZ25lbWVudCwgdGhpcy5zdHlsZS52ZXJ0aWNhbEFsaWduZW1lbnQsIHRoaXMueCwgdGhpcy55LCB0aGlzLnN0eWxlLndyYXAsIHRoaXMuc3R5bGUuYm9sZCwgdGhpcy5zdHlsZS51bmRlcmxpbmUsIG51bGwsIHRoaXMucGFyZW50KTtcblxuICAgIGN0eC5yZXN0b3JlKCk7XG4gIH1cblxuICBzZXQgdGV4dCh0ZXh0KSB7XG4gICAgaWYodGV4dCAhPSB0aGlzLiNfdGV4dCkge1xuICAgICAgdGhpcy4jX3RleHQgPSB0ZXh0O1xuICAgICAgdGhpcy5yZWFjdG9yLmRpc3BhdGNoRXZlbnQoXCJvbkNoYW5nZVwiLCB0aGlzKTtcbiAgICB9XG4gIH1cblxuICBnZXQgdGV4dCgpIHtcbiAgICByZXR1cm4gdGhpcy4jX3RleHQ7XG4gIH1cblxuICB1cGRhdGVTaXplcygpIHtcbiAgICBjb25zdCBjdHggPSB0aGlzLmNhbnZhcyA/IHRoaXMuY2FudmFzLmdldENvbnRleHQoXCIyZFwiKSA6IG51bGw7XG4gICAgY29uc3QgcGFyZW50ID0gKHRoaXMuY2FudmFzICYmIHRoaXMuY2FudmFzLnNjZW5lKSB8fCB0aGlzLmNhbnZhcyB8fCAoY3R4ICYmIGN0eC5jYW52YXMpIHx8IHRoaXMucGFyZW50O1xuICAgIFxuICAgIGlmKGN0eCAmJiAoQ29uc3RhbnRzLlNldHRpbmcuRElTQUJMRV9PUFRJTUlaQVRJT05TIHx8ICF0aGlzLnNpemVzQ2FjaGUgfHwgdGhpcy5zaXplc0NhY2hlLmZvbnRTaXplICE9IHRoaXMuc3R5bGUuZm9udFNpemUgfHwgdGhpcy5zaXplc0NhY2hlLmZvbnRGYW1pbHkgIT0gdGhpcy5zdHlsZS5mb250RmFtaWx5IHx8IHRoaXMuc2l6ZXNDYWNoZS53cmFwICE9IHRoaXMuc3R5bGUud3JhcCB8fCB0aGlzLnRleHQgIT0gdGhpcy5zaXplc0NhY2hlLnRleHQgfHwgKHBhcmVudCAmJiBwYXJlbnQud2lkdGggIT0gdGhpcy5zaXplc0NhY2hlLnBhcmVudFdpZHRoKSB8fCB0aGlzLnNpemVzQ2FjaGUudmFsdWUgPT0gbnVsbCkpIHtcbiAgICAgIGNvbnN0IHNpemVzID0gVXRpbHMud3JhcFRleHRMaW5lcyhjdHgsIHRoaXMudGV4dCwgbnVsbCwgdGhpcy5zdHlsZS5mb250U2l6ZSwgdGhpcy5zdHlsZS5mb250RmFtaWx5LCAhdGhpcy5zdHlsZS53cmFwKTtcbiAgICAgIFxuICAgICAgaWYocGFyZW50KSB7XG4gICAgICAgIHRoaXMuc2l6ZXNDYWNoZSA9IHsgXCJmb250U2l6ZVwiOiB0aGlzLnN0eWxlLmZvbnRTaXplLCBcImZvbnRGYW1pbHlcIjogdGhpcy5zdHlsZS5mb250RmFtaWx5LCBcIndyYXBcIjogdGhpcy5zdHlsZS53cmFwLCBcInRleHRcIjogdGhpcy50ZXh0LCBcInBhcmVudFdpZHRoXCI6IHBhcmVudC53aWR0aCwgXCJ2YWx1ZVwiOiBzaXplcyB9O1xuICAgICAgICBwYXJlbnQucmVhY3Rvci5kaXNwYXRjaEV2ZW50KFwib25DaGFuZ2VcIiwgdGhpcyk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHRoaXMuc2l6ZXNDYWNoZSAmJiB0aGlzLnNpemVzQ2FjaGUudmFsdWU7XG4gIH1cblxuICBnZXQgc2l6ZXMoKSB7XG4gICAgaWYoQ29uc3RhbnRzLlNldHRpbmcuRElTQUJMRV9FWFBFUklNRU5UQUxfT1BUSU1JWkFUSU9OUykgdGhpcy51cGRhdGVTaXplcygpO1xuICAgIHJldHVybiB0aGlzLnNpemVzQ2FjaGUgPyB0aGlzLnNpemVzQ2FjaGUudmFsdWUgOiBudWxsO1xuICB9XG5cbiAgZ2V0IGhlaWdodCgpIHtcbiAgICBjb25zdCBzaXplcyA9IHRoaXMuc2l6ZXM7XG4gICAgcmV0dXJuIHNpemVzICYmIHNpemVzW1wiaGVpZ2h0XCJdO1xuICB9XG5cbiAgZ2V0IHdpZHRoKCkge1xuICAgIGNvbnN0IHNpemVzID0gdGhpcy5zaXplcztcbiAgICByZXR1cm4gc2l6ZXMgJiYgc2l6ZXNbXCJ3aWR0aFwiXTtcbiAgfVxuXG4gIGdldCBkZWZhdWx0U3R5bGUoKSB7XG4gICAgcmV0dXJuIG5ldyBTdHlsZSh7XG4gICAgICBcImZvbnRDb2xvclwiOiBDb25zdGFudHMuU2V0dGluZy5MQUJFTF9ERUZBVUxUX0ZPTlRfQ09MT1IsXG4gICAgICBcIndyYXBcIjogdHJ1ZSxcbiAgICAgIFwiYm9sZFwiOiBmYWxzZSxcbiAgICAgIFwidW5kZXJsaW5lXCI6IGZhbHNlXG4gICAgfSk7XG4gIH1cbn0iLCIvKlxuICogQ29weXJpZ2h0IChDKSAyMDIwIEVsaWFzdGlrIChlbGlhc3Rpa3NvZnRzLmNvbSlcbiAqXG4gKiBUaGlzIGZpbGUgaXMgcGFydCBvZiBcIkpTR2FtZVRvb2xzXCIuXG4gKlxuICogXCJKU0dhbWVUb29sc1wiIGlzIGZyZWUgc29mdHdhcmU6IHlvdSBjYW4gcmVkaXN0cmlidXRlIGl0IGFuZC9vciBtb2RpZnlcbiAqIGl0IHVuZGVyIHRoZSB0ZXJtcyBvZiB0aGUgR05VIEdlbmVyYWwgUHVibGljIExpY2Vuc2UgYXMgcHVibGlzaGVkIGJ5XG4gKiB0aGUgRnJlZSBTb2Z0d2FyZSBGb3VuZGF0aW9uLCBlaXRoZXIgdmVyc2lvbiAzIG9mIHRoZSBMaWNlbnNlLCBvclxuICogKGF0IHlvdXIgb3B0aW9uKSBhbnkgbGF0ZXIgdmVyc2lvbi5cbiAqXG4gKiBcIkpTR2FtZVRvb2xzXCIgaXMgZGlzdHJpYnV0ZWQgaW4gdGhlIGhvcGUgdGhhdCBpdCB3aWxsIGJlIHVzZWZ1bCxcbiAqIGJ1dCBXSVRIT1VUIEFOWSBXQVJSQU5UWTsgd2l0aG91dCBldmVuIHRoZSBpbXBsaWVkIHdhcnJhbnR5IG9mXG4gKiBNRVJDSEFOVEFCSUxJVFkgb3IgRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UuICBTZWUgdGhlXG4gKiBHTlUgR2VuZXJhbCBQdWJsaWMgTGljZW5zZSBmb3IgbW9yZSBkZXRhaWxzLlxuICpcbiAqIFlvdSBzaG91bGQgaGF2ZSByZWNlaXZlZCBhIGNvcHkgb2YgdGhlIEdOVSBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlXG4gKiBhbG9uZyB3aXRoIFwiSlNHYW1lVG9vbHNcIi4gIElmIG5vdCwgc2VlIDxodHRwOi8vd3d3LmdudS5vcmcvbGljZW5zZXMvPi5cbiAqL1xuaW1wb3J0IENvbnN0YW50cyBmcm9tIFwiLi9Db25zdGFudHNcIjtcbmltcG9ydCBMYWJlbCBmcm9tIFwiLi9MYWJlbFwiO1xuaW1wb3J0IFN0eWxlIGZyb20gXCIuL1N0eWxlXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIExpbmsgZXh0ZW5kcyBMYWJlbCB7XG4gIHNlbGVjdGFibGUgPSB0cnVlO1xuXG4gIGNvbnN0cnVjdG9yKHRleHQsIHgsIHksIHN0eWxlKSB7XG4gICAgc3VwZXIodGV4dCwgeCwgeSwgc3R5bGUpO1xuXG4gICAgdGhpcy5pbml0aWFsQ29sb3IgPSB0aGlzLnN0eWxlLmZvbnRDb2xvcjtcbiAgICB0aGlzLmluaXRpYWxVbmRlcmxpbmUgPSB0aGlzLnN0eWxlLnVuZGVybGluZTtcbiAgfVxuXG4gIGRyYXcoY29udGV4dCkge1xuICAgIGlmKHRoaXMuaGlkZGVuKSByZXR1cm47XG4gICAgc3VwZXIuZHJhdyhjb250ZXh0KTtcblxuICAgIGlmKHRoaXMuY2xpY2tlZCkge1xuICAgICAgdGhpcy5zdHlsZS5zZXQoXCJ1bmRlcmxpbmVcIiwgZmFsc2UpO1xuICAgICAgdGhpcy5zdHlsZS5zZXQoXCJmb250Q29sb3JcIiwgdGhpcy5zdHlsZS5mb250Q29sb3JEb3duKTtcbiAgICAgIGlmKCF0aGlzLm1vdmFibGUpIHRoaXMuY2FudmFzLmN1cnNvciA9IFwicG9pbnRlclwiO1xuICAgIH0gZWxzZSBpZih0aGlzLmhvdmVyZWQgfHwgdGhpcy5zZWxlY3RlZCkge1xuICAgICAgdGhpcy5zdHlsZS5zZXQoXCJ1bmRlcmxpbmVcIiwgZmFsc2UpO1xuICAgICAgdGhpcy5zdHlsZS5zZXQoXCJmb250Q29sb3JcIiwgdGhpcy5zdHlsZS5mb250Q29sb3JIb3Zlcik7XG4gICAgICBpZih0aGlzLmhvdmVyZWQgJiYgIXRoaXMubW92YWJsZSkgdGhpcy5jYW52YXMuY3Vyc29yID0gXCJwb2ludGVyXCI7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuc3R5bGUuc2V0KFwidW5kZXJsaW5lXCIsIHRoaXMuaW5pdGlhbFVuZGVybGluZSk7XG4gICAgICB0aGlzLnN0eWxlLnNldChcImZvbnRDb2xvclwiLCB0aGlzLmluaXRpYWxDb2xvcik7XG4gICAgfVxuXG4gICAgdGhpcy5pbml0ID0gdHJ1ZTtcbiAgfVxuXG4gIGdldCBkZWZhdWx0U3R5bGUoKSB7XG4gICAgcmV0dXJuIG5ldyBTdHlsZSh7XG4gICAgICBcImZvbnRDb2xvclwiOiBDb25zdGFudHMuU2V0dGluZy5MSU5LX0RFRkFVTFRfQ09MT1IsXG4gICAgICBcImZvbnRDb2xvckhvdmVyXCI6IENvbnN0YW50cy5TZXR0aW5nLkxJTktfREVGQVVMVF9IT1ZFUl9DT0xPUixcbiAgICAgIFwiZm9udENvbG9yRG93blwiOiBDb25zdGFudHMuU2V0dGluZy5MSU5LX0RFRkFVTFRfQ0xJQ0tfQ09MT1IsXG4gICAgICBcIndyYXBcIjogdHJ1ZSxcbiAgICAgIFwiYm9sZFwiOiBmYWxzZSxcbiAgICAgIFwidW5kZXJsaW5lXCI6IHRydWVcbiAgICB9KTtcbiAgfVxufSIsIi8qXG4gKiBDb3B5cmlnaHQgKEMpIDIwMjAgRWxpYXN0aWsgKGVsaWFzdGlrc29mdHMuY29tKVxuICpcbiAqIFRoaXMgZmlsZSBpcyBwYXJ0IG9mIFwiSlNHYW1lVG9vbHNcIi5cbiAqXG4gKiBcIkpTR2FtZVRvb2xzXCIgaXMgZnJlZSBzb2Z0d2FyZTogeW91IGNhbiByZWRpc3RyaWJ1dGUgaXQgYW5kL29yIG1vZGlmeVxuICogaXQgdW5kZXIgdGhlIHRlcm1zIG9mIHRoZSBHTlUgR2VuZXJhbCBQdWJsaWMgTGljZW5zZSBhcyBwdWJsaXNoZWQgYnlcbiAqIHRoZSBGcmVlIFNvZnR3YXJlIEZvdW5kYXRpb24sIGVpdGhlciB2ZXJzaW9uIDMgb2YgdGhlIExpY2Vuc2UsIG9yXG4gKiAoYXQgeW91ciBvcHRpb24pIGFueSBsYXRlciB2ZXJzaW9uLlxuICpcbiAqIFwiSlNHYW1lVG9vbHNcIiBpcyBkaXN0cmlidXRlZCBpbiB0aGUgaG9wZSB0aGF0IGl0IHdpbGwgYmUgdXNlZnVsLFxuICogYnV0IFdJVEhPVVQgQU5ZIFdBUlJBTlRZOyB3aXRob3V0IGV2ZW4gdGhlIGltcGxpZWQgd2FycmFudHkgb2ZcbiAqIE1FUkNIQU5UQUJJTElUWSBvciBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRS4gIFNlZSB0aGVcbiAqIEdOVSBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlIGZvciBtb3JlIGRldGFpbHMuXG4gKlxuICogWW91IHNob3VsZCBoYXZlIHJlY2VpdmVkIGEgY29weSBvZiB0aGUgR05VIEdlbmVyYWwgUHVibGljIExpY2Vuc2VcbiAqIGFsb25nIHdpdGggXCJKU0dhbWVUb29sc1wiLiAgSWYgbm90LCBzZWUgPGh0dHA6Ly93d3cuZ251Lm9yZy9saWNlbnNlcy8+LlxuICovXG5pbXBvcnQgQ29uc3RhbnRzIGZyb20gXCIuL0NvbnN0YW50c1wiO1xuaW1wb3J0IFV0aWxzIGZyb20gXCIuL1V0aWxzXCI7XG5pbXBvcnQgQ29tcG9uZW50IGZyb20gXCIuL0NvbXBvbmVudFwiO1xuaW1wb3J0IENvbCBmcm9tIFwiLi9Db2xcIjtcbmltcG9ydCBTdHlsZSBmcm9tIFwiLi9TdHlsZVwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBNZW51IGV4dGVuZHMgQ29sIHtcbiAgc2VsZWN0YWJsZSA9IGZhbHNlO1xuXG4gIGNvbnN0cnVjdG9yKHN0eWxlLCAuLi5jb21wb25lbnRzKSB7XG4gICAgc3VwZXIoMCwgMCwgbnVsbCwgbnVsbCwgc3R5bGUsIC4uLmNvbXBvbmVudHMpO1xuXG4gICAgdGhpcy5sYXN0S2V5ID0gdGhpcy5sYXN0S2V5ID09IHVuZGVmaW5lZCA/IC0xIDogdGhpcy5sYXN0S2V5O1xuICAgIHRoaXMuc2VsZWN0ZWRDb21wb25lbnQgPSB0aGlzLnNlbGVjdGVkQ29tcG9uZW50ID09IHVuZGVmaW5lZCA/IDAgOiB0aGlzLnNlbGVjdGVkQ29tcG9uZW50O1xuXG4gICAgdGhpcy5kaXNhYmxlKCk7XG4gIH1cblxuICBkcmF3KGNvbnRleHQpIHtcbiAgICBpZih0aGlzLmhpZGRlbikgcmV0dXJuO1xuICAgIGNvbnN0IGNhbnZhcyA9IGNvbnRleHQuY2FudmFzO1xuICAgIGNvbnN0IGN0eCA9IGNhbnZhcy5nZXRDb250ZXh0KFwiMmRcIik7XG5cbiAgICBpZih0aGlzLnN0eWxlLmJsdXJCYWNrZ3JvdW5kKSB7XG4gICAgICB0aGlzLmRyYXdCbHVyKGN0eCk7XG4gICAgfVxuXG4gICAgY3R4LnNhdmUoKTtcblxuICAgIHRoaXMuZHJhd0NvbXBvbmVudHMoY3R4KTtcbiAgICBcbiAgICBpZighdGhpcy5pbml0KSB7XG4gICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwia2V5ZG93blwiLCBldmVudCA9PiB7XG4gICAgICAgIGlmKCF0aGlzLmRpc2FibGVkKSB7XG4gICAgICAgICAgdGhpcy5sYXN0S2V5ID0gZXZlbnQua2V5Q29kZTtcbiAgICAgICAgICBpZih0aGlzLmxhc3RLZXkgPT0gQ29uc3RhbnRzLktleS5VUCB8fCB0aGlzLmxhc3RLZXkgPT0gQ29uc3RhbnRzLktleS5CT1RUT00pIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuXG4gICAgICB0aGlzLmluaXQgPSB0cnVlO1xuICAgIH1cblxuICAgIGxldCBrZXlBY3Rpb24gPSBmYWxzZTtcbiAgXG4gICAgaWYodGhpcy5jb21wb25lbnRzICE9IG51bGwpIHtcbiAgICAgIGlmKHRoaXMubGFzdEtleSA9PSBDb25zdGFudHMuS2V5LlVQKSB7XG4gICAgICAgIHRoaXMuc2VsZWN0KHRoaXMuc2VsZWN0ZWRDb21wb25lbnQgLSAxKTtcbiAgICAgICAga2V5QWN0aW9uID0gdHJ1ZTtcbiAgICAgIH0gZWxzZSBpZih0aGlzLmxhc3RLZXkgPT0gQ29uc3RhbnRzLktleS5CT1RUT00pIHtcbiAgICAgICAgdGhpcy5zZWxlY3QodGhpcy5zZWxlY3RlZENvbXBvbmVudCArIDEpO1xuICAgICAgICBrZXlBY3Rpb24gPSB0cnVlO1xuICAgICAgfSBlbHNlIGlmKHRoaXMubGFzdEtleSA9PSBDb25zdGFudHMuS2V5LkVDSEFQKSB7XG4gICAgICAgIHRoaXMuZGlzYWJsZSgpO1xuICAgICAgICBrZXlBY3Rpb24gPSB0cnVlO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5jb21wb25lbnRzLmZvckVhY2goKGNvbXBvbmVudCwgaSkgPT4ge1xuICAgICAgICAgIGlmKGNvbXBvbmVudC5zZWxlY3RlZCkgdGhpcy5zZWxlY3QoaSk7XG4gICAgICAgIH0pO1xuICAgICAgfVxuXG4gICAgICB0aGlzLmNvbXBvbmVudHMuZm9yRWFjaCgoY29tcG9uZW50LCBpKSA9PiB7XG4gICAgICAgIGlmKGNvbXBvbmVudCBpbnN0YW5jZW9mIENvbXBvbmVudCkge1xuICAgICAgICAgIGlmKGtleUFjdGlvbikge1xuICAgICAgICAgICAgaWYodGhpcy5zZWxlY3RlZENvbXBvbmVudCA9PSBpKSB7XG4gICAgICAgICAgICAgIGlmKGNvbXBvbmVudC5zZWxlY3RhYmxlKSB7XG4gICAgICAgICAgICAgICAgY29tcG9uZW50LnNlbGVjdGVkID0gdHJ1ZTtcbiAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgIGlmKCF0aGlzLmlzQ29tcG9uZW50VmlzaWJsZShjb21wb25lbnQpKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgY29tcG9uZW50SGVpZ2h0ID0gY29tcG9uZW50LmhlaWdodDtcbiAgICAgICAgICAgICAgICBjb25zdCBkZWx0YVkgPSAodGhpcy5tYXhIZWlnaHQgLSB0aGlzLm9mZnNldFNjcm9sbFkpIC0gKGNvbXBvbmVudC55ICsgY29tcG9uZW50SGVpZ2h0KTtcbiAgICAgICAgICAgICAgICB0aGlzLm9mZnNldFNjcm9sbFkgPSAtZGVsdGFZO1xuXG4gICAgICAgICAgICAgICAgdGhpcy5jb250cm9sU2Nyb2xsaW5nKG51bGwsIC1kZWx0YVkpO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICBjb21wb25lbnQuc2VsZWN0ZWQgPSBmYWxzZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgXG4gICAgICAgICAgaWYodGhpcy5zZWxlY3RlZENvbXBvbmVudCA9PSBpICYmIHRoaXMubGFzdEtleSA9PSBDb25zdGFudHMuS2V5LkVOVEVSICYmIGNvbXBvbmVudC5yZWFjdG9yICYmICFjb21wb25lbnQuZGlzYWJsZWQpIHtcbiAgICAgICAgICAgIHRoaXMubGFzdEtleSA9IC0xO1xuICAgICAgICAgICAgdGhpcy5zZWxlY3RlZENvbXBvbmVudCA9IDA7XG4gICAgICAgICAgICBjb21wb25lbnQucmVhY3Rvci5kaXNwYXRjaEV2ZW50KFwib25DbGlja1wiKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH1cbiAgICBcbiAgICBjdHgucmVzdG9yZSgpO1xuICAgIHRoaXMubGFzdEtleSA9IC0xO1xuICB9XG5cbiAgZHJhd0NvbXBvbmVudHMoY3R4KSB7XG4gICAgc3VwZXIuZHJhdyhjdHgpO1xuICB9XG5cbiAgZHJhd0JsdXIoY3R4KSB7XG4gICAgVXRpbHMuYmx1ckNhbnZhcyhjdHgsIDUpO1xuICB9XG5cbiAgZHJhd0JhY2tncm91bmQoY3R4KSB7XG4gICAgY3R4LmZpbGxTdHlsZSA9IHRoaXMuc3R5bGUuYmFja2dyb3VuZENvbG9yO1xuICAgIGN0eC5maWxsUmVjdCh0aGlzLnBhcmVudCA/IHRoaXMucGFyZW50LnggOiAwLCB0aGlzLnBhcmVudCA/IHRoaXMucGFyZW50LnkgOiAwLCB0aGlzLm1heFdpZHRoLCB0aGlzLm1heEhlaWdodCk7XG4gIH1cblxuICBkaXNhYmxlKCkge1xuICAgIHN1cGVyLmRpc2FibGUoKTtcbiAgICB0aGlzLmNvbXBvbmVudHMuZm9yRWFjaChjb21wb25lbnQgPT4gY29tcG9uZW50ICYmIGNvbXBvbmVudC5kaXNhYmxlICYmIGNvbXBvbmVudC5kaXNhYmxlKCkpO1xuICB9XG5cbiAgZW5hYmxlKCkge1xuICAgIHN1cGVyLmVuYWJsZSgpO1xuICAgIHRoaXMuY29tcG9uZW50cy5mb3JFYWNoKGNvbXBvbmVudCA9PiBjb21wb25lbnQgJiYgY29tcG9uZW50LmVuYWJsZSAmJiBjb21wb25lbnQuZW5hYmxlKCkpO1xuICB9XG5cbiAgc2VsZWN0KGluZGV4KSB7XG4gICAgdGhpcy5zZWxlY3RlZENvbXBvbmVudCA9IGluZGV4O1xuXG4gICAgY29uc3Qgc2VsZWN0YWJsZUNvbXBvbmVudHMgPSB0aGlzLmNvbXBvbmVudHMuZmlsdGVyKGNvbXBvbmVudCA9PiBjb21wb25lbnQuc2VsZWN0YWJsZSk7XG4gICAgaWYoc2VsZWN0YWJsZUNvbXBvbmVudHMubGVuZ3RoIDw9IDApIHJldHVybjtcblxuICAgIGlmKHRoaXMuc2VsZWN0ZWRDb21wb25lbnQgPj0gdGhpcy5jb21wb25lbnRzLmxlbmd0aCkge1xuICAgICAgdGhpcy5zZWxlY3RlZENvbXBvbmVudCA9IDA7XG4gICAgfSBlbHNlIGlmKHRoaXMuc2VsZWN0ZWRDb21wb25lbnQgPCAwKSB7XG4gICAgICB0aGlzLnNlbGVjdGVkQ29tcG9uZW50ID0gdGhpcy5jb21wb25lbnRzLmxlbmd0aCAtIDE7XG4gICAgfVxuXG4gICAgaWYodGhpcy5jb21wb25lbnRzW3RoaXMuc2VsZWN0ZWRDb21wb25lbnRdICYmICF0aGlzLmNvbXBvbmVudHNbdGhpcy5zZWxlY3RlZENvbXBvbmVudF0uc2VsZWN0YWJsZSkge1xuICAgICAgaWYodGhpcy5sYXN0S2V5ID09IENvbnN0YW50cy5LZXkuVVApIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuc2VsZWN0KHRoaXMuc2VsZWN0ZWRDb21wb25lbnQgLSAxKTtcbiAgICAgIH0gZWxzZSBpZih0aGlzLmxhc3RLZXkgPT0gQ29uc3RhbnRzLktleS5CT1RUT00pIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuc2VsZWN0KHRoaXMuc2VsZWN0ZWRDb21wb25lbnQgKyAxKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBnZXQgc2Nyb2xsQXJlYVNpemVYKCkge1xuICAgIHJldHVybiB0aGlzLmlubmVyV2lkdGggLSB0aGlzLm1heFdpZHRoO1xuICB9XG5cbiAgZ2V0IHNjcm9sbEFyZWFTaXplWSgpIHtcbiAgICByZXR1cm4gdGhpcy5pbm5lckhlaWdodCAtIHRoaXMubWF4SGVpZ2h0O1xuICB9XG5cbiAgZ2V0IG1heEhlaWdodCgpIHtcbiAgICByZXR1cm4gc3VwZXIubWF4SGVpZ2h0IHx8ICh0aGlzLmNhbnZhcyAmJiB0aGlzLmNhbnZhcy5zY2VuZSAmJiB0aGlzLmNhbnZhcy5zY2VuZS5oZWlnaHQpO1xuICB9XG5cbiAgZ2V0IG1heFdpZHRoKCkge1xuICAgIHJldHVybiAodGhpcy5jYW52YXMgJiYgdGhpcy5jYW52YXMuc2NlbmUgJiYgdGhpcy5jYW52YXMuc2NlbmUud2lkdGgpO1xuICB9XG5cbiAgZ2V0IG1pbldpZHRoKCkge1xuICAgIHJldHVybiB0aGlzLnBhcmVudCA/IHRoaXMucGFyZW50LndpZHRoIDogMDtcbiAgfVxuXG4gIGdldCBkZWZhdWx0U3R5bGUoKSB7XG4gICAgcmV0dXJuIG5ldyBTdHlsZSh7XG4gICAgICBcImJsdXJCYWNrZ3JvdW5kXCI6IENvbnN0YW50cy5TZXR0aW5nLk1FTlVfREVGQVVMVF9CTFVSX0JBQ0tHUk9VTkQsXG4gICAgICBcImJhY2tncm91bmRDb2xvclwiOiBDb25zdGFudHMuU2V0dGluZy5NRU5VX0RFRkFVTFRfQkFDS0dST1VORCxcbiAgICAgIFwidmVydGljYWxBbGlnbmVtZW50XCI6IENvbnN0YW50cy5WZXJ0aWNhbEFsaWduZW1lbnQuQ0VOVEVSLFxuICAgICAgXCJzY3JvbGxYRGlzYWJsZWRcIjogdHJ1ZVxuICAgIH0pO1xuICB9XG5cbiAgY29tcGFyZVRvQ29tcG9uZW50KG90aGVyQ29tcG9uZW50KSB7XG4gICAgcmV0dXJuIG90aGVyQ29tcG9uZW50LmNvbXBhcmVUb01lbnUodGhpcyk7XG4gIH1cblxuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdW51c2VkLXZhcnNcbiAgY29tcGFyZVRvTWVudShvdGhlckNvbXBvbmVudCkge1xuICAgIHJldHVybiAwO1xuICB9XG5cbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVudXNlZC12YXJzXG4gIGNvbXBhcmVUb1Rvb2x0aXAob3RoZXJDb21wb25lbnQpIHtcbiAgICByZXR1cm4gLTE7XG4gIH1cblxuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdW51c2VkLXZhcnNcbiAgY29tcGFyZVRvTm90aWZpY2F0aW9uKG90aGVyQ29tcG9uZW50KSB7XG4gICAgcmV0dXJuIDE7XG4gIH1cblxuICBnZXQgaGlkZGVuKCkge1xuICAgIHJldHVybiBzdXBlci5oaWRkZW4gfHwgdGhpcy5kaXNhYmxlZDtcbiAgfVxuXG4gIHNldCBoaWRkZW4oaGlkZGVuKSB7XG4gICAgc3VwZXIuaGlkZGVuID0gaGlkZGVuO1xuICAgIHRoaXMuZGlzYWJsZWQgPSBoaWRkZW47XG4gIH1cblxuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdW51c2VkLXZhcnNcbiAgaXNJbnNpZGUocG9zKSB7XG4gICAgcmV0dXJuICF0aGlzLmhpZGRlbjtcbiAgfVxufSIsIi8qXG4gKiBDb3B5cmlnaHQgKEMpIDIwMjAgRWxpYXN0aWsgKGVsaWFzdGlrc29mdHMuY29tKVxuICpcbiAqIFRoaXMgZmlsZSBpcyBwYXJ0IG9mIFwiSlNHYW1lVG9vbHNcIi5cbiAqXG4gKiBcIkpTR2FtZVRvb2xzXCIgaXMgZnJlZSBzb2Z0d2FyZTogeW91IGNhbiByZWRpc3RyaWJ1dGUgaXQgYW5kL29yIG1vZGlmeVxuICogaXQgdW5kZXIgdGhlIHRlcm1zIG9mIHRoZSBHTlUgR2VuZXJhbCBQdWJsaWMgTGljZW5zZSBhcyBwdWJsaXNoZWQgYnlcbiAqIHRoZSBGcmVlIFNvZnR3YXJlIEZvdW5kYXRpb24sIGVpdGhlciB2ZXJzaW9uIDMgb2YgdGhlIExpY2Vuc2UsIG9yXG4gKiAoYXQgeW91ciBvcHRpb24pIGFueSBsYXRlciB2ZXJzaW9uLlxuICpcbiAqIFwiSlNHYW1lVG9vbHNcIiBpcyBkaXN0cmlidXRlZCBpbiB0aGUgaG9wZSB0aGF0IGl0IHdpbGwgYmUgdXNlZnVsLFxuICogYnV0IFdJVEhPVVQgQU5ZIFdBUlJBTlRZOyB3aXRob3V0IGV2ZW4gdGhlIGltcGxpZWQgd2FycmFudHkgb2ZcbiAqIE1FUkNIQU5UQUJJTElUWSBvciBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRS4gIFNlZSB0aGVcbiAqIEdOVSBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlIGZvciBtb3JlIGRldGFpbHMuXG4gKlxuICogWW91IHNob3VsZCBoYXZlIHJlY2VpdmVkIGEgY29weSBvZiB0aGUgR05VIEdlbmVyYWwgUHVibGljIExpY2Vuc2VcbiAqIGFsb25nIHdpdGggXCJKU0dhbWVUb29sc1wiLiAgSWYgbm90LCBzZWUgPGh0dHA6Ly93d3cuZ251Lm9yZy9saWNlbnNlcy8+LlxuICovXG5pbXBvcnQgQ29uc3RhbnRzIGZyb20gXCIuL0NvbnN0YW50c1wiO1xuaW1wb3J0IENvbCBmcm9tIFwiLi9Db2xcIjtcbmltcG9ydCBCdXR0b24gZnJvbSBcIi4vQnV0dG9uXCI7XG5pbXBvcnQgQ3Jvc3MgZnJvbSBcIi4vQ3Jvc3NcIjtcbmltcG9ydCBTdHlsZSBmcm9tIFwiLi9TdHlsZVwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBOb3RpZmljYXRpb25NZXNzYWdlIGV4dGVuZHMgQ29sIHtcbiAgc2VsZWN0YWJsZSA9IGZhbHNlO1xuXG4gIGNvbnN0cnVjdG9yKHN0eWxlLCBkZWxheUJlZm9yZUNsb3NpbmcsIGVhc2luZ0Z1bmN0aW9uLCAuLi5jb21wb25lbnRzKSB7XG4gICAgc3VwZXIoMCwgMCwgbnVsbCwgbnVsbCwgc3R5bGUsIC4uLmNvbXBvbmVudHMpO1xuXG4gICAgdGhpcy5kZWxheUJlZm9yZUNsb3NpbmcgPSBkZWxheUJlZm9yZUNsb3NpbmcgPT0gdW5kZWZpbmVkID8gNSA6IGRlbGF5QmVmb3JlQ2xvc2luZzsgLy8gc2Vjb25kXG4gICAgdGhpcy50aW1lTGFzdEZyYW1lID0gMDtcbiAgICB0aGlzLmFuaW1hdGlvblRpbWUgPSAwO1xuICAgIHRoaXMuY2xvc2VkID0gdHJ1ZTtcbiAgICB0aGlzLmNsb3NpbmcgPSBmYWxzZTtcbiAgICB0aGlzLmVhc2luZ0Z1bmN0aW9uID0gZWFzaW5nRnVuY3Rpb247XG5cbiAgICB0aGlzLmNsb3NlQnV0dG9uID0gbmV3IEJ1dHRvbihudWxsLCBudWxsLCBudWxsLCBudWxsLCBuZXcgU3R5bGUoe1wiYWxpZ25lbWVudFwiOiBDb25zdGFudHMuQWxpZ25lbWVudC5SSUdIVCwgXCJ2ZXJ0aWNhbEFsaWduZW1lbnRcIjogQ29uc3RhbnRzLlZlcnRpY2FsQWxpZ25lbWVudC5UT1AsIFwicGFkZGluZ1wiOiAxMCB9KSwgbmV3IENyb3NzKG51bGwsIG51bGwsIDEwLCAxMCkpO1xuICAgIHRoaXMuYWRkKHRoaXMuY2xvc2VCdXR0b24pO1xuICB9XG4gIFxuICBkcmF3KGNvbnRleHQpIHtcbiAgICBpZih0aGlzLmhpZGRlbikgcmV0dXJuO1xuICAgIHRoaXMuY2xvc2VCdXR0b24uY2FudmFzID0gdGhpcy5jYW52YXM7XG5cbiAgICBjb25zdCBjYW52YXMgPSBjb250ZXh0LmNhbnZhcztcbiAgICBjb25zdCBjdHggPSBjYW52YXMuZ2V0Q29udGV4dChcIjJkXCIpO1xuXG4gICAgY3R4LnNhdmUoKTtcblxuICAgIGlmKCF0aGlzLmluaXQpIHtcbiAgICAgIHRoaXMudGltZUxhc3RGcmFtZSA9IHBlcmZvcm1hbmNlLm5vdygpO1xuICAgIH1cbiAgICBcbiAgICBpZih0aGlzLmNsb3NlQnV0dG9uICE9IG51bGwpIHtcbiAgICAgIHRoaXMuY2xvc2VCdXR0b24uc2V0Q2xpY2tBY3Rpb24oKCkgPT4ge1xuICAgICAgICB0aGlzLmNsb3NlKCk7XG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBjb25zdCBvZmZzZXRUaW1lID0gcGVyZm9ybWFuY2Uubm93KCkgLSB0aGlzLnRpbWVMYXN0RnJhbWU7XG4gICAgdGhpcy50aW1lTGFzdEZyYW1lID0gcGVyZm9ybWFuY2Uubm93KCk7XG5cbiAgICBpZih0aGlzLmFuaW1hdGlvblRpbWUgPj0gdGhpcy5kZWxheUJlZm9yZUNsb3NpbmcgKiAxMDAwICYmICF0aGlzLmNsb3NpbmcgJiYgIXRoaXMuY2xvc2VkKSB7XG4gICAgICB0aGlzLmNsb3NlKCk7XG4gICAgfVxuXG4gICAgaWYoIXRoaXMuY2xvc2luZykge1xuICAgICAgdGhpcy5hbmltYXRpb25UaW1lICs9IG9mZnNldFRpbWU7XG4gICAgfSBlbHNlIHtcbiAgICAgIGlmKHRoaXMuc3R5bGUuZGlzYWJsZUFuaW1hdGlvbikge1xuICAgICAgICB0aGlzLmFuaW1hdGlvblRpbWUgPSAtMTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuYW5pbWF0aW9uVGltZSAtPSBvZmZzZXRUaW1lO1xuICAgICAgfVxuICAgIH1cblxuICAgIGlmKHRoaXMuYW5pbWF0aW9uVGltZSA8IDApIHtcbiAgICAgIHRoaXMuY2xvc2VkID0gdHJ1ZTtcbiAgICAgIHRoaXMuY2xvc2luZyA9IGZhbHNlO1xuICAgIH1cblxuICAgIGlmKCF0aGlzLmNsb3NlZCkge1xuICAgICAgdGhpcy5kcmF3Q29tcG9uZW50cyhjdHgpO1xuXG4gICAgICBpZih0aGlzLmNsb3NlQnV0dG9uICE9IG51bGwpIHtcbiAgICAgICAgdGhpcy5jbG9zZUJ1dHRvbi55ID0gdGhpcy55ICsgdGhpcy5zdHlsZS5wYWRkaW5nIC8gMjtcbiAgICAgICAgdGhpcy5jbG9zZUJ1dHRvbi5kcmF3KGN0eCk7XG4gICAgICB9XG5cbiAgICAgIHRoaXMuZW5hYmxlQ2xvc2VCdXR0b24oKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5kaXNhYmxlQ2xvc2VCdXR0b24oKTtcbiAgICB9XG5cbiAgICBjdHgucmVzdG9yZSgpO1xuXG4gICAgdGhpcy5pbml0ID0gdHJ1ZTtcbiAgfVxuICBcbiAgZ2V0IG9mZnNldFkoKSB7XG4gICAgbGV0IG9mZnNldFkgPSAxO1xuXG4gICAgaWYoIXRoaXMuc3R5bGUuZGlzYWJsZUFuaW1hdGlvbikge1xuICAgICAgb2Zmc2V0WSA9IHRoaXMuYW5pbWF0aW9uVGltZSAvIHRoaXMuc3R5bGUuYW5pbWF0aW9uRHVyYXRpb247XG5cbiAgICAgIGlmKHRoaXMuZWFzaW5nRnVuY3Rpb24pIHtcbiAgICAgICAgb2Zmc2V0WSA9IHRoaXMuZWFzaW5nRnVuY3Rpb24ob2Zmc2V0WSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIG9mZnNldFk7XG4gIH1cblxuICBnZXQgeSgpIHtcbiAgICBjb25zdCBvZmZzZXRZID0gdGhpcy5vZmZzZXRZO1xuXG4gICAgaWYodGhpcy5zdHlsZS52ZXJ0aWNhbEFsaWduZW1lbnQgPT0gQ29uc3RhbnRzLlZlcnRpY2FsQWxpZ25lbWVudC5UT1ApIHtcbiAgICAgIHJldHVybiAodGhpcy5oZWlnaHQgKiAob2Zmc2V0WSA8PSAxID8gb2Zmc2V0WSA6IDEpKSAtIHRoaXMuaGVpZ2h0O1xuICAgIH0gXG4gICAgXG4gICAgcmV0dXJuIHRoaXMuY2FudmFzLnNjZW5lLmhlaWdodCAtICh0aGlzLmhlaWdodCAqIChvZmZzZXRZIDw9IDEgPyBvZmZzZXRZIDogMSkpO1xuICB9XG5cbiAgc2V0IHkoeSkge1xuICAgIHN1cGVyLnkgPSB5O1xuICB9XG5cbiAgZHJhd0NvbXBvbmVudHMoY3R4KSB7XG4gICAgc3VwZXIuZHJhdyhjdHgpO1xuICB9XG5cbiAgY2xvc2UoKSB7XG4gICAgdGhpcy5kaXNhYmxlQ2xvc2VCdXR0b24oKTtcbiAgXG4gICAgaWYoIXRoaXMuY2xvc2luZykge1xuICAgICAgdGhpcy5jbG9zaW5nID0gdHJ1ZTtcbiAgICAgIHRoaXMuYW5pbWF0aW9uVGltZSA9IHRoaXMuc3R5bGUuYW5pbWF0aW9uRHVyYXRpb247XG4gICAgfVxuICB9XG4gIFxuICBvcGVuKCkge1xuICAgIHRoaXMudGltZUxhc3RGcmFtZSA9IDA7XG4gICAgdGhpcy5hbmltYXRpb25UaW1lID0gMDtcbiAgICB0aGlzLmluaXQgPSBmYWxzZTtcbiAgICB0aGlzLmNsb3NlZCA9IGZhbHNlO1xuICAgIHRoaXMuY2xvc2luZyA9IGZhbHNlO1xuICB9XG4gIFxuICBkaXNhYmxlQ2xvc2VCdXR0b24oKSB7XG4gICAgaWYodGhpcy5jbG9zZUJ1dHRvbiAhPSB1bmRlZmluZWQgJiYgdGhpcy5jbG9zZUJ1dHRvbiAhPSBudWxsICYmIHRoaXMuY2xvc2VCdXR0b24gaW5zdGFuY2VvZiBCdXR0b24pIHtcbiAgICAgIHRoaXMuY2xvc2VCdXR0b24uZGlzYWJsZSgpO1xuICAgIH1cbiAgfVxuICBcbiAgZW5hYmxlQ2xvc2VCdXR0b24oKSB7XG4gICAgaWYodGhpcy5jbG9zZUJ1dHRvbiAhPSB1bmRlZmluZWQgJiYgdGhpcy5jbG9zZUJ1dHRvbiAhPSBudWxsICYmIHRoaXMuY2xvc2VCdXR0b24gaW5zdGFuY2VvZiBCdXR0b24pIHtcbiAgICAgIHRoaXMuY2xvc2VCdXR0b24uZW5hYmxlKCk7XG4gICAgfVxuICB9O1xuICBcbiAgY29weSgpIHtcbiAgICByZXR1cm4gbmV3IE5vdGlmaWNhdGlvbk1lc3NhZ2UodGhpcy5zdHlsZS5jb3B5KCksIHRoaXMuZGVsYXlCZWZvcmVDbG9zaW5nLCB0aGlzLmVhc2luZ0Z1bmN0aW9uLCAuLi50aGlzLmNvbXBvbmVudHMpO1xuICB9XG5cbiAgZ2V0IHdpZHRoKCkge1xuICAgIHJldHVybiB0aGlzLmNhbnZhcyAmJiB0aGlzLmNhbnZhcy5zY2VuZSA/IHRoaXMuY2FudmFzLnNjZW5lLndpZHRoIDogbnVsbDtcbiAgfVxuXG4gIGdldCBoZWlnaHQoKSB7XG4gICAgcmV0dXJuIHN1cGVyLmhlaWdodCAtICh0aGlzLmNsb3NlQnV0dG9uID8gdGhpcy5jbG9zZUJ1dHRvbi5oZWlnaHQgOiAwKTtcbiAgfVxuXG4gIGdldCBkZWZhdWx0U3R5bGUoKSB7XG4gICAgcmV0dXJuIG5ldyBTdHlsZSh7XG4gICAgICBcImFsaWduZW1lbnRcIjogQ29uc3RhbnRzLkFsaWduZW1lbnQuQ0VOVEVSLFxuICAgICAgXCJiYWNrZ3JvdW5kQ29sb3JcIjogQ29uc3RhbnRzLlNldHRpbmcuTk9USUZJQ0FUSU9OX0RFRkFVTFRfQkFDS0dST1VORCxcbiAgICAgIFwiYW5pbWF0aW9uRHVyYXRpb25cIjogQ29uc3RhbnRzLlNldHRpbmcuTk9USUZJQ0FUSU9OX0RFRkFVTFRfQU5JTUFUSU9OX0RVUkFUSU9OXG4gICAgfSk7XG4gIH1cblxuICBnZXQgaGlkZGVuKCkge1xuICAgIHJldHVybiBzdXBlci5oaWRkZW4gfHwgdGhpcy5jbG9zZWQ7XG4gIH1cblxuICBzZXQgaGlkZGVuKGhpZGRlbikge1xuICAgIHN1cGVyLmhpZGRlbiA9IGhpZGRlbjtcblxuICAgIGlmKGhpZGRlbikge1xuICAgICAgdGhpcy5mb3JjZUNsb3NlKCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMub3BlbigpO1xuICAgIH1cbiAgfVxuXG4gIGNvbXBhcmVUb0NvbXBvbmVudChvdGhlckNvbXBvbmVudCkge1xuICAgIHJldHVybiBvdGhlckNvbXBvbmVudC5jb21wYXJlVG9Ob3RpZmljYXRpb24odGhpcyk7XG4gIH1cbiAgXG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bnVzZWQtdmFyc1xuICBjb21wYXJlVG9Ub29sdGlwKG90aGVyQ29tcG9uZW50KSB7XG4gICAgcmV0dXJuIC0xO1xuICB9XG5cbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVudXNlZC12YXJzXG4gIGNvbXBhcmVUb05vdGlmaWNhdGlvbihvdGhlckNvbXBvbmVudCkge1xuICAgIHJldHVybiAwO1xuICB9XG5cbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVudXNlZC12YXJzXG4gIGNvbXBhcmVUb01lbnUob3RoZXJDb21wb25lbnQpIHtcbiAgICByZXR1cm4gLTE7XG4gIH1cbn0iLCIvKlxuICogQ29weXJpZ2h0IChDKSAyMDIwIEVsaWFzdGlrIChlbGlhc3Rpa3NvZnRzLmNvbSlcbiAqXG4gKiBUaGlzIGZpbGUgaXMgcGFydCBvZiBcIkpTR2FtZVRvb2xzXCIuXG4gKlxuICogXCJKU0dhbWVUb29sc1wiIGlzIGZyZWUgc29mdHdhcmU6IHlvdSBjYW4gcmVkaXN0cmlidXRlIGl0IGFuZC9vciBtb2RpZnlcbiAqIGl0IHVuZGVyIHRoZSB0ZXJtcyBvZiB0aGUgR05VIEdlbmVyYWwgUHVibGljIExpY2Vuc2UgYXMgcHVibGlzaGVkIGJ5XG4gKiB0aGUgRnJlZSBTb2Z0d2FyZSBGb3VuZGF0aW9uLCBlaXRoZXIgdmVyc2lvbiAzIG9mIHRoZSBMaWNlbnNlLCBvclxuICogKGF0IHlvdXIgb3B0aW9uKSBhbnkgbGF0ZXIgdmVyc2lvbi5cbiAqXG4gKiBcIkpTR2FtZVRvb2xzXCIgaXMgZGlzdHJpYnV0ZWQgaW4gdGhlIGhvcGUgdGhhdCBpdCB3aWxsIGJlIHVzZWZ1bCxcbiAqIGJ1dCBXSVRIT1VUIEFOWSBXQVJSQU5UWTsgd2l0aG91dCBldmVuIHRoZSBpbXBsaWVkIHdhcnJhbnR5IG9mXG4gKiBNRVJDSEFOVEFCSUxJVFkgb3IgRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UuICBTZWUgdGhlXG4gKiBHTlUgR2VuZXJhbCBQdWJsaWMgTGljZW5zZSBmb3IgbW9yZSBkZXRhaWxzLlxuICpcbiAqIFlvdSBzaG91bGQgaGF2ZSByZWNlaXZlZCBhIGNvcHkgb2YgdGhlIEdOVSBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlXG4gKiBhbG9uZyB3aXRoIFwiSlNHYW1lVG9vbHNcIi4gIElmIG5vdCwgc2VlIDxodHRwOi8vd3d3LmdudS5vcmcvbGljZW5zZXMvPi5cbiAqL1xuaW1wb3J0IEJveCBmcm9tIFwiLi9Cb3hcIjtcbmltcG9ydCBDb25zdGFudHMgZnJvbSBcIi4vQ29uc3RhbnRzXCI7XG5pbXBvcnQgU3R5bGUgZnJvbSBcIi4vU3R5bGVcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUHJvZ3Jlc3NCYXIgZXh0ZW5kcyBCb3gge1xuICAjcHJlY1BlcmNlbnQgPSAwO1xuICBzZWxlY3RhYmxlID0gZmFsc2U7XG5cbiAgY29uc3RydWN0b3IoeCwgeSwgd2lkdGgsIGhlaWdodCwgc3R5bGUsIGRlZmF1bHRQZXJjZW50LCBlYXNpbmdGdW5jdGlvbikge1xuICAgIHN1cGVyKHgsIHksIHdpZHRoLCBoZWlnaHQsIHN0eWxlKTtcblxuICAgIHRoaXMucGVyY2VudCA9IGRlZmF1bHRQZXJjZW50ID09IHVuZGVmaW5lZCA/IDAgOiBkZWZhdWx0UGVyY2VudDtcbiAgICB0aGlzLiNwcmVjUGVyY2VudCA9IHRoaXMucGVyY2VudDtcbiAgICB0aGlzLmVhc2luZ0Z1bmN0aW9uID0gZWFzaW5nRnVuY3Rpb247XG5cbiAgICB0aGlzLmxhc3RUaW1lID0gMDtcbiAgICB0aGlzLnRvdGFsVGltZSA9IDA7XG4gIH1cblxuICBkcmF3KGNvbnRleHQpIHtcbiAgICBpZih0aGlzLmhpZGRlbikgcmV0dXJuO1xuICAgIHN1cGVyLmRyYXcoY29udGV4dCk7XG5cbiAgICBjb25zdCBjYW52YXMgPSBjb250ZXh0LmNhbnZhcztcbiAgICBjb25zdCBjdHggPSBjYW52YXMuZ2V0Q29udGV4dChcIjJkXCIpO1xuICAgIGN0eC5zYXZlKCk7XG5cbiAgICBjb25zdCB0aW1lID0gcGVyZm9ybWFuY2Uubm93KCk7XG4gICAgbGV0IG9mZnNldFRpbWUgPSAwO1xuXG4gICAgaWYodGhpcy4jcHJlY1BlcmNlbnQgIT0gdGhpcy5wZXJjZW50ICYmICF0aGlzLnN0eWxlLmRpc2FibGVBbmltYXRpb24pIHtcbiAgICAgIGlmKHRoaXMubGFzdFRpbWUgPiAwKSBvZmZzZXRUaW1lID0gdGltZSAtIHRoaXMubGFzdFRpbWU7XG4gICAgICB0aGlzLnRvdGFsVGltZSArPSBvZmZzZXRUaW1lO1xuXG4gICAgICBpZih0aGlzLnRvdGFsVGltZSA+PSB0aGlzLnN0eWxlLmFuaW1hdGlvbkR1cmF0aW9uKSB7XG4gICAgICAgIHRoaXMuI3ByZWNQZXJjZW50ID0gdGhpcy5wZXJjZW50O1xuICAgICAgICB0aGlzLnRvdGFsVGltZSA9IDA7XG4gICAgICAgIHRoaXMubGFzdFRpbWUgPSAwO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5sYXN0VGltZSA9IHRpbWU7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMudG90YWxUaW1lID0gMDtcbiAgICAgIHRoaXMubGFzdFRpbWUgPSAwO1xuICAgIH1cblxuICAgIHRoaXMuZHJhd0JhY2tncm91bmQoY3R4KTtcbiAgICB0aGlzLmRyYXdGb3JlZ3JvdW5kKGN0eCwgdGhpcy53aWR0aEZvcmVncm91bmQpO1xuXG4gICAgY3R4LnJlc3RvcmUoKTtcbiAgfVxuXG4gIGdldCBhbmltYXRpb25QZXJjZW50KCkge1xuICAgIGxldCBhbmltYXRpb25QZXJjZW50ID0gKHRoaXMuI3ByZWNQZXJjZW50ICE9IHRoaXMucGVyY2VudCAmJiAhdGhpcy5zdHlsZS5kaXNhYmxlQW5pbWF0aW9uID8gdGhpcy50b3RhbFRpbWUgLyAodGhpcy5zdHlsZS5hbmltYXRpb25EdXJhdGlvbikgOiAxKTtcblxuICAgIGlmKHRoaXMuZWFzaW5nRnVuY3Rpb24pIHtcbiAgICAgIGFuaW1hdGlvblBlcmNlbnQgPSB0aGlzLmVhc2luZ0Z1bmN0aW9uKGFuaW1hdGlvblBlcmNlbnQpO1xuICAgIH1cblxuICAgIHJldHVybiBhbmltYXRpb25QZXJjZW50O1xuICB9XG5cbiAgZ2V0IHdpZHRoRm9yZWdyb3VuZCgpIHtcbiAgICByZXR1cm4gTWF0aC5tYXgoMCwgTWF0aC5taW4odGhpcy53aWR0aCwgdGhpcy53aWR0aCAqICh0aGlzLiNwcmVjUGVyY2VudCArICh0aGlzLnBlcmNlbnQgLSB0aGlzLiNwcmVjUGVyY2VudCkgKiB0aGlzLmFuaW1hdGlvblBlcmNlbnQpKSk7XG4gIH1cblxuICBkcmF3Rm9yZWdyb3VuZChjdHgsIHdpZHRoRm9yZWdyb3VuZCkge1xuICAgIGN0eC5zYXZlKCk7XG5cbiAgICBjdHguZmlsbFN0eWxlID0gdGhpcy5zdHlsZS5mb3JlZ3JvdW5kQ29sb3I7XG4gICAgY3R4LmZpbGxSZWN0KHRoaXMueCwgdGhpcy55LCB3aWR0aEZvcmVncm91bmQsIHRoaXMuaGVpZ2h0KTtcblxuICAgIGN0eC5yZXN0b3JlKCk7XG4gIH1cblxuICBnZXQgZGVmYXVsdFN0eWxlKCkge1xuICAgIHJldHVybiBuZXcgU3R5bGUoe1xuICAgICAgXCJiYWNrZ3JvdW5kQ29sb3JcIjogQ29uc3RhbnRzLlNldHRpbmcuUFJPR1JFU1NfREVGQVVMVF9CQUNLR1JPVU5ELFxuICAgICAgXCJmb3JlZ3JvdW5kQ29sb3JcIjogQ29uc3RhbnRzLlNldHRpbmcuUFJPR1JFU1NfREVGQVVMVF9GT1JFR1JPVU5ELFxuICAgICAgXCJhbmltYXRpb25EdXJhdGlvblwiOiBDb25zdGFudHMuU2V0dGluZy5QUk9HUkVTU19ERUZBVUxUX0FOSU1BVElPTl9EVVJBVElPTlxuICAgIH0pO1xuICB9XG59IiwiLypcbiAqIENvcHlyaWdodCAoQykgMjAyMCBFbGlhc3RpayAoZWxpYXN0aWtzb2Z0cy5jb20pXG4gKlxuICogVGhpcyBmaWxlIGlzIHBhcnQgb2YgXCJKU0dhbWVUb29sc1wiLlxuICpcbiAqIFwiSlNHYW1lVG9vbHNcIiBpcyBmcmVlIHNvZnR3YXJlOiB5b3UgY2FuIHJlZGlzdHJpYnV0ZSBpdCBhbmQvb3IgbW9kaWZ5XG4gKiBpdCB1bmRlciB0aGUgdGVybXMgb2YgdGhlIEdOVSBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlIGFzIHB1Ymxpc2hlZCBieVxuICogdGhlIEZyZWUgU29mdHdhcmUgRm91bmRhdGlvbiwgZWl0aGVyIHZlcnNpb24gMyBvZiB0aGUgTGljZW5zZSwgb3JcbiAqIChhdCB5b3VyIG9wdGlvbikgYW55IGxhdGVyIHZlcnNpb24uXG4gKlxuICogXCJKU0dhbWVUb29sc1wiIGlzIGRpc3RyaWJ1dGVkIGluIHRoZSBob3BlIHRoYXQgaXQgd2lsbCBiZSB1c2VmdWwsXG4gKiBidXQgV0lUSE9VVCBBTlkgV0FSUkFOVFk7IHdpdGhvdXQgZXZlbiB0aGUgaW1wbGllZCB3YXJyYW50eSBvZlxuICogTUVSQ0hBTlRBQklMSVRZIG9yIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFLiAgU2VlIHRoZVxuICogR05VIEdlbmVyYWwgUHVibGljIExpY2Vuc2UgZm9yIG1vcmUgZGV0YWlscy5cbiAqXG4gKiBZb3Ugc2hvdWxkIGhhdmUgcmVjZWl2ZWQgYSBjb3B5IG9mIHRoZSBHTlUgR2VuZXJhbCBQdWJsaWMgTGljZW5zZVxuICogYWxvbmcgd2l0aCBcIkpTR2FtZVRvb2xzXCIuICBJZiBub3QsIHNlZSA8aHR0cDovL3d3dy5nbnUub3JnL2xpY2Vuc2VzLz4uXG4gKi9cbmltcG9ydCBFdmVudCBmcm9tIFwiLi9FdmVudFwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBSZWFjdG9yIHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgdGhpcy5ldmVudHMgPSB7fTtcbiAgfVxuXG4gIHJlZ2lzdGVyRXZlbnQoZXZlbnROYW1lKSB7XG4gICAgdGhpcy5ldmVudHNbZXZlbnROYW1lXSA9IG5ldyBFdmVudChldmVudE5hbWUpO1xuICB9XG5cbiAgZGlzcGF0Y2hFdmVudChldmVudE5hbWUsIC4uLmV2ZW50QXJncykge1xuICAgIGlmKHRoaXMuZXZlbnRzW2V2ZW50TmFtZV0pIHtcbiAgICAgIGNvbnN0IGNhbGxiYWNrcyA9IHRoaXMuZXZlbnRzW2V2ZW50TmFtZV0uY2FsbGJhY2tzO1xuICAgICAgY2FsbGJhY2tzLmZvckVhY2goY2FsbGJhY2sgPT4gY2FsbGJhY2sgJiYgY2FsbGJhY2soLi4uZXZlbnRBcmdzKSk7XG4gICAgfVxuICB9XG5cbiAgYWRkRXZlbnRMaXN0ZW5lcihldmVudE5hbWUsIGNhbGxiYWNrKSB7XG4gICAgaWYodGhpcy5ldmVudHNbZXZlbnROYW1lXSkgdGhpcy5ldmVudHNbZXZlbnROYW1lXS5yZWdpc3RlckNhbGxiYWNrKGNhbGxiYWNrKTtcbiAgfVxuXG4gIHJlbW92ZUV2ZW50TGlzdGVuZXIoZXZlbnROYW1lLCBjYWxsYmFjaykge1xuICAgIGlmKHRoaXMuZXZlbnRzW2V2ZW50TmFtZV0pIHRoaXMuZXZlbnRzW2V2ZW50TmFtZV0ucmVtb3ZlQ2FsbGJhY2soY2FsbGJhY2spO1xuICB9XG5cbiAgcmVtb3ZlQWxsRXZlbnRMaXN0ZW5lcihldmVudE5hbWUpIHtcbiAgICBpZih0aGlzLmV2ZW50c1tldmVudE5hbWVdKSB0aGlzLmV2ZW50c1tldmVudE5hbWVdLnJlbW92ZUFsbENhbGxiYWNrcygpO1xuICB9XG59IiwiLypcbiAqIENvcHlyaWdodCAoQykgMjAyMCBFbGlhc3RpayAoZWxpYXN0aWtzb2Z0cy5jb20pXG4gKlxuICogVGhpcyBmaWxlIGlzIHBhcnQgb2YgXCJKU0dhbWVUb29sc1wiLlxuICpcbiAqIFwiSlNHYW1lVG9vbHNcIiBpcyBmcmVlIHNvZnR3YXJlOiB5b3UgY2FuIHJlZGlzdHJpYnV0ZSBpdCBhbmQvb3IgbW9kaWZ5XG4gKiBpdCB1bmRlciB0aGUgdGVybXMgb2YgdGhlIEdOVSBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlIGFzIHB1Ymxpc2hlZCBieVxuICogdGhlIEZyZWUgU29mdHdhcmUgRm91bmRhdGlvbiwgZWl0aGVyIHZlcnNpb24gMyBvZiB0aGUgTGljZW5zZSwgb3JcbiAqIChhdCB5b3VyIG9wdGlvbikgYW55IGxhdGVyIHZlcnNpb24uXG4gKlxuICogXCJKU0dhbWVUb29sc1wiIGlzIGRpc3RyaWJ1dGVkIGluIHRoZSBob3BlIHRoYXQgaXQgd2lsbCBiZSB1c2VmdWwsXG4gKiBidXQgV0lUSE9VVCBBTlkgV0FSUkFOVFk7IHdpdGhvdXQgZXZlbiB0aGUgaW1wbGllZCB3YXJyYW50eSBvZlxuICogTUVSQ0hBTlRBQklMSVRZIG9yIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFLiAgU2VlIHRoZVxuICogR05VIEdlbmVyYWwgUHVibGljIExpY2Vuc2UgZm9yIG1vcmUgZGV0YWlscy5cbiAqXG4gKiBZb3Ugc2hvdWxkIGhhdmUgcmVjZWl2ZWQgYSBjb3B5IG9mIHRoZSBHTlUgR2VuZXJhbCBQdWJsaWMgTGljZW5zZVxuICogYWxvbmcgd2l0aCBcIkpTR2FtZVRvb2xzXCIuICBJZiBub3QsIHNlZSA8aHR0cDovL3d3dy5nbnUub3JnL2xpY2Vuc2VzLz4uXG4gKi9cbmltcG9ydCBSZWFjdG9yIGZyb20gXCIuL1JlYWN0b3JcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUmVhY3RvckNhbnZhcyBleHRlbmRzIFJlYWN0b3Ige1xuICByZWdpc3RlckV2ZW50KGV2ZW50TmFtZSkge1xuICAgIGlmKCF0aGlzLmV2ZW50c1tldmVudE5hbWVdKSB0aGlzLmV2ZW50c1tldmVudE5hbWVdID0gW107XG4gIH1cblxuICBkaXNwYXRjaEV2ZW50KGV2ZW50TmFtZSwgLi4uZXZlbnRBcmdzKSB7XG4gICAgaWYodGhpcy5ldmVudHNbZXZlbnROYW1lXSkge1xuICAgICAgY29uc3QgZXZlbnRzID0gdGhpcy5ldmVudHNbZXZlbnROYW1lXTtcbiAgICAgIGV2ZW50cy5mb3JFYWNoKGV2ZW50ID0+IGV2ZW50ICYmIGV2ZW50LmNhbGxiYWNrICYmIGV2ZW50LmNhbGxiYWNrKC4uLmV2ZW50QXJncykpO1xuICAgIH1cbiAgfVxuXG4gIGRpc3BhdGNoRXZlbnRDb21wb25lbnQoZXZlbnROYW1lLCBjb21wb25lbnQsIC4uLmV2ZW50QXJncykge1xuICAgIGlmKHRoaXMuZXZlbnRzW2V2ZW50TmFtZV0pIHtcbiAgICAgIGNvbnN0IGV2ZW50cyA9IHRoaXMuZXZlbnRzW2V2ZW50TmFtZV07XG4gICAgICBldmVudHMuZm9yRWFjaChldmVudCA9PiBldmVudCAmJiBldmVudC5jYWxsYmFjayAmJiBldmVudC5jb21wb25lbnQgPT0gY29tcG9uZW50ICYmIGV2ZW50LmNhbGxiYWNrKC4uLmV2ZW50QXJncykpO1xuICAgIH1cbiAgfVxuXG4gIGFkZEV2ZW50TGlzdGVuZXIoZXZlbnROYW1lLCBjb21wb25lbnQsIGNhbGxiYWNrKSB7XG4gICAgaWYodGhpcy5ldmVudHNbZXZlbnROYW1lXSkge1xuICAgICAgdGhpcy5ldmVudHNbZXZlbnROYW1lXS5wdXNoKHtcbiAgICAgICAgXCJjb21wb25lbnRcIjogY29tcG9uZW50LFxuICAgICAgICBcImNhbGxiYWNrXCI6IGNhbGxiYWNrXG4gICAgICB9KTtcbiAgICB9XG4gIH1cblxuICByZW1vdmVFdmVudExpc3RlbmVyKGV2ZW50TmFtZSwgY2FsbGJhY2spIHtcbiAgICBpZih0aGlzLmV2ZW50c1tldmVudE5hbWVdKSB0aGlzLmV2ZW50c1tldmVudE5hbWVdLmZpbHRlcihldmVudCA9PiBldmVudCAmJiBldmVudC5jYWxsYmFjayAhPSBjYWxsYmFjayk7XG4gIH1cblxuICByZW1vdmVFdmVudExpc3RlbmVyQ29tcG9uZW50KGV2ZW50TmFtZSwgY29tcG9uZW50KSB7XG4gICAgaWYodGhpcy5ldmVudHNbZXZlbnROYW1lXSkgdGhpcy5ldmVudHNbZXZlbnROYW1lXS5maWx0ZXIoZXZlbnQgPT4gZXZlbnQgJiYgZXZlbnQuY29tcG9uZW50ICE9IGNvbXBvbmVudCk7XG4gIH1cblxuICByZW1vdmVBbGxFdmVudExpc3RlbmVyKCkge1xuICAgIHRoaXMuZXZlbnRzID0gW107XG4gIH1cbn0iLCIvKlxuICogQ29weXJpZ2h0IChDKSAyMDIwIEVsaWFzdGlrIChlbGlhc3Rpa3NvZnRzLmNvbSlcbiAqXG4gKiBUaGlzIGZpbGUgaXMgcGFydCBvZiBcIkpTR2FtZVRvb2xzXCIuXG4gKlxuICogXCJKU0dhbWVUb29sc1wiIGlzIGZyZWUgc29mdHdhcmU6IHlvdSBjYW4gcmVkaXN0cmlidXRlIGl0IGFuZC9vciBtb2RpZnlcbiAqIGl0IHVuZGVyIHRoZSB0ZXJtcyBvZiB0aGUgR05VIEdlbmVyYWwgUHVibGljIExpY2Vuc2UgYXMgcHVibGlzaGVkIGJ5XG4gKiB0aGUgRnJlZSBTb2Z0d2FyZSBGb3VuZGF0aW9uLCBlaXRoZXIgdmVyc2lvbiAzIG9mIHRoZSBMaWNlbnNlLCBvclxuICogKGF0IHlvdXIgb3B0aW9uKSBhbnkgbGF0ZXIgdmVyc2lvbi5cbiAqXG4gKiBcIkpTR2FtZVRvb2xzXCIgaXMgZGlzdHJpYnV0ZWQgaW4gdGhlIGhvcGUgdGhhdCBpdCB3aWxsIGJlIHVzZWZ1bCxcbiAqIGJ1dCBXSVRIT1VUIEFOWSBXQVJSQU5UWTsgd2l0aG91dCBldmVuIHRoZSBpbXBsaWVkIHdhcnJhbnR5IG9mXG4gKiBNRVJDSEFOVEFCSUxJVFkgb3IgRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UuICBTZWUgdGhlXG4gKiBHTlUgR2VuZXJhbCBQdWJsaWMgTGljZW5zZSBmb3IgbW9yZSBkZXRhaWxzLlxuICpcbiAqIFlvdSBzaG91bGQgaGF2ZSByZWNlaXZlZCBhIGNvcHkgb2YgdGhlIEdOVSBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlXG4gKiBhbG9uZyB3aXRoIFwiSlNHYW1lVG9vbHNcIi4gIElmIG5vdCwgc2VlIDxodHRwOi8vd3d3LmdudS5vcmcvbGljZW5zZXMvPi5cbiAqL1xuaW1wb3J0IENvbXBvbmVudCBmcm9tIFwiLi9Db21wb25lbnRcIjtcbmltcG9ydCBDb250YWluZXIgZnJvbSBcIi4vQ29udGFpbmVyXCI7XG5pbXBvcnQgVXRpbHMgZnJvbSBcIi4vVXRpbHNcIjtcbmltcG9ydCBDb25zdGFudHMgZnJvbSBcIi4vQ29uc3RhbnRzXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFJvdyBleHRlbmRzIENvbnRhaW5lciB7XG4gIHNlbGVjdGFibGUgPSBmYWxzZTtcbiAgI19pbm5lckhlaWdodCA9IDA7XG4gICNfaW5uZXJXaWR0aCA9IDA7XG5cbiAgY29uc3RydWN0b3IoeCwgeSwgbWF4V2lkdGgsIG1heEhlaWdodCwgc3R5bGUsIC4uLmNvbXBvbmVudHMpIHtcbiAgICBzdXBlcih4LCB5LCBtYXhXaWR0aCwgbWF4SGVpZ2h0LCBzdHlsZSwgLi4uY29tcG9uZW50cyk7XG5cbiAgICBpZighQ29uc3RhbnRzLlNldHRpbmcuRElTQUJMRV9FWFBFUklNRU5UQUxfT1BUSU1JWkFUSU9OUykge1xuICAgICAgdGhpcy51cGRhdGVJbm5lcldpZHRoKCk7XG4gICAgICB0aGlzLnVwZGF0ZUlubmVySGVpZ2h0KCk7XG4gIFxuICAgICAgdGhpcy5hZGRDaGFuZ2VBY3Rpb24oKCkgPT4ge1xuICAgICAgICB0aGlzLnVwZGF0ZUlubmVyV2lkdGgoKTtcbiAgICAgICAgdGhpcy51cGRhdGVJbm5lckhlaWdodCgpO1xuICAgICAgfSk7XG4gICAgfVxuICB9XG5cbiAgZHJhdyhjb250ZXh0KSB7XG4gICAgaWYodGhpcy5oaWRkZW4pIHJldHVybjtcbiAgICBzdXBlci5kcmF3KGNvbnRleHQpO1xuXG4gICAgY29uc3QgY2FudmFzID0gY29udGV4dC5jYW52YXM7XG4gICAgY29uc3QgY3R4ID0gY2FudmFzLmdldENvbnRleHQoXCIyZFwiKTtcbiAgICBjdHguc2F2ZSgpO1xuXG4gICAgbGV0IGN0eFRlbXAgPSBjdHg7XG4gICAgXG4gICAgaWYodGhpcy5pc0N1dHRpbmcpIHtcbiAgICAgIGN0eFRlbXAgPSB0aGlzLmNhbnZhc1RtcC5nZXRDb250ZXh0KFwiMmRcIik7XG4gICAgICBjdHhUZW1wLnNjYWxlKENvbnN0YW50cy5TZXR0aW5nLlBJWEVMX1JBVElPLCBDb25zdGFudHMuU2V0dGluZy5QSVhFTF9SQVRJTyk7XG4gICAgfVxuICBcbiAgICBpZihzdXBlci5jb21wb25lbnRzICE9IG51bGwpIHtcbiAgICAgIGxldCBjdXJyZW50WCA9IHRoaXMuc3R5bGUucGFkZGluZztcblxuICAgICAgc3VwZXIuY29tcG9uZW50cy5mb3JFYWNoKGNvbXBvbmVudCA9PiB7XG4gICAgICAgIGN1cnJlbnRYID0gdGhpcy5kcmF3Q29tcG9uZW50KGNvbXBvbmVudCwgY3VycmVudFgsIGN0eFRlbXApO1xuICAgICAgfSk7XG4gICAgfVxuICAgIFxuICAgIGlmKHRoaXMuaXNDdXR0aW5nKSB7XG4gICAgICBVdGlscy5kcmF3SW1hZ2VEYXRhKGN0eCwgdGhpcy5jYW52YXNUbXAsIHRoaXMueCwgdGhpcy55LCB0aGlzLndpZHRoLCB0aGlzLmhlaWdodCwgdGhpcy54ICogQ29uc3RhbnRzLlNldHRpbmcuUElYRUxfUkFUSU8sIHRoaXMueSAqIENvbnN0YW50cy5TZXR0aW5nLlBJWEVMX1JBVElPLCB0aGlzLndpZHRoICogQ29uc3RhbnRzLlNldHRpbmcuUElYRUxfUkFUSU8sIHRoaXMuaGVpZ2h0ICogQ29uc3RhbnRzLlNldHRpbmcuUElYRUxfUkFUSU8pO1xuICAgIH1cblxuICAgIHN1cGVyLmRyYXdTY3JvbGxiYXJzKGN0eCk7XG5cbiAgICBjdHgucmVzdG9yZSgpO1xuICB9XG5cbiAgZHJhd0NvbXBvbmVudChjb21wb25lbnQsIGN1cnJlbnRYLCBjdHgpIHtcbiAgICBpZihjb21wb25lbnQgaW5zdGFuY2VvZiBDb21wb25lbnQpIHtcbiAgICAgIGNvbXBvbmVudC54ID0gY3VycmVudFggLSB0aGlzLm9mZnNldFNjcm9sbFg7XG4gICAgICBjb21wb25lbnQueSA9IHRoaXMuc3R5bGUucGFkZGluZyAtIHRoaXMub2Zmc2V0U2Nyb2xsWTtcbiAgICAgIFxuICAgICAgaWYoIWNvbXBvbmVudC5oaWRkZW4pIHtcbiAgICAgICAgaWYodGhpcy5pc0NvbXBvbmVudFZpc2libGUoY29tcG9uZW50KSkge1xuICAgICAgICAgIGNvbXBvbmVudC5kcmF3KGN0eCk7XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgIGN1cnJlbnRYICs9IGNvbXBvbmVudC53aWR0aCArIHRoaXMuc3R5bGUuc3BhY2VCZXR3ZWVuQ29tcG9uZW50cztcbiAgICAgIH1cbiAgICB9XG4gICAgXG4gICAgcmV0dXJuIGN1cnJlbnRYO1xuICB9XG5cbiAgdXBkYXRlSW5uZXJIZWlnaHQoKSB7XG4gICAgbGV0IG1heEhlaWdodCA9IDA7XG4gICAgc3VwZXIuY29tcG9uZW50cy5mb3JFYWNoKGNvbXBvbmVudCA9PiB7IGlmKGNvbXBvbmVudC5oZWlnaHQgPiBtYXhIZWlnaHQgJiYgIWNvbXBvbmVudC5oaWRkZW4pIG1heEhlaWdodCA9IGNvbXBvbmVudC5oZWlnaHQ7IH0pO1xuICAgIHRoaXMuI19pbm5lckhlaWdodCA9IG1heEhlaWdodCArIHRoaXMuc3R5bGUucGFkZGluZztcbiAgfVxuXG4gIHVwZGF0ZUlubmVyV2lkdGgoKSB7XG4gICAgbGV0IHRvdGFsV2lkdGggPSAwO1xuICAgIHN1cGVyLmNvbXBvbmVudHMuZm9yRWFjaChjb21wb25lbnQgPT4geyBpZighY29tcG9uZW50LmhpZGRlbikgdG90YWxXaWR0aCArPSBjb21wb25lbnQud2lkdGg7IH0pO1xuICAgIHRoaXMuI19pbm5lcldpZHRoID0gdG90YWxXaWR0aCArIHRoaXMuc3R5bGUuc3BhY2VCZXR3ZWVuQ29tcG9uZW50cyAqIChzdXBlci5jb21wb25lbnRzLmxlbmd0aCAtIDEpICsgdGhpcy5zdHlsZS5wYWRkaW5nO1xuICB9XG5cbiAgZ2V0IGlubmVySGVpZ2h0KCkge1xuICAgIGlmKENvbnN0YW50cy5TZXR0aW5nLkRJU0FCTEVfRVhQRVJJTUVOVEFMX09QVElNSVpBVElPTlMpIHRoaXMudXBkYXRlSW5uZXJIZWlnaHQoKTtcbiAgICByZXR1cm4gdGhpcy4jX2lubmVySGVpZ2h0O1xuICB9XG5cbiAgZ2V0IGlubmVyV2lkdGgoKSB7XG4gICAgaWYoQ29uc3RhbnRzLlNldHRpbmcuRElTQUJMRV9FWFBFUklNRU5UQUxfT1BUSU1JWkFUSU9OUykgdGhpcy51cGRhdGVJbm5lcldpZHRoKCk7XG4gICAgcmV0dXJuIHRoaXMuI19pbm5lcldpZHRoO1xuICB9XG5cbiAgZ2V0IHdpZHRoKCkge1xuICAgIGNvbnN0IHdpZHRoID0gdGhpcy5pbm5lcldpZHRoIHx8ICh0aGlzLnBhcmVudCAmJiB0aGlzLnBhcmVudC53aWR0aCk7XG4gICAgY29uc3QgbWluID0gdGhpcy5tYXhXaWR0aCAhPSBudWxsID8gTWF0aC5taW4odGhpcy5tYXhXaWR0aCwgd2lkdGgpIDogbnVsbDtcbiAgICByZXR1cm4gdGhpcy5taW5XaWR0aCAhPSBudWxsID8gTWF0aC5tYXgodGhpcy5taW5XaWR0aCwgbWluICE9IG51bGwgPyBtaW4gOiB3aWR0aCkgOiBtaW4gIT0gbnVsbCA/IG1pbiA6IHdpZHRoO1xuICB9XG5cbiAgZ2V0IGhlaWdodCgpIHtcbiAgICBjb25zdCBoZWlnaHQgPSB0aGlzLmlubmVySGVpZ2h0IHx8ICh0aGlzLnBhcmVudCAmJiB0aGlzLnBhcmVudC5oZWlnaHQpO1xuICAgIGNvbnN0IG1pbiA9IHRoaXMubWF4SGVpZ2h0ICE9IG51bGwgPyBNYXRoLm1pbih0aGlzLm1heEhlaWdodCwgaGVpZ2h0KSA6IG51bGw7XG4gICAgcmV0dXJuIHRoaXMubWluSGVpZ2h0ICE9IG51bGwgPyBNYXRoLm1heCh0aGlzLm1pbkhlaWdodCwgbWluICE9IG51bGwgPyBtaW4gOiBoZWlnaHQpIDogbWluICE9IG51bGwgPyBtaW4gOiBoZWlnaHQ7XG4gIH1cblxuICBnZXQgZGVmYXVsdFN0eWxlKCkge1xuICAgIHJldHVybiBzdXBlci5kZWZhdWx0U3R5bGU7XG4gIH1cbn0iLCIvKlxuICogQ29weXJpZ2h0IChDKSAyMDIwIEVsaWFzdGlrIChlbGlhc3Rpa3NvZnRzLmNvbSlcbiAqXG4gKiBUaGlzIGZpbGUgaXMgcGFydCBvZiBcIkpTR2FtZVRvb2xzXCIuXG4gKlxuICogXCJKU0dhbWVUb29sc1wiIGlzIGZyZWUgc29mdHdhcmU6IHlvdSBjYW4gcmVkaXN0cmlidXRlIGl0IGFuZC9vciBtb2RpZnlcbiAqIGl0IHVuZGVyIHRoZSB0ZXJtcyBvZiB0aGUgR05VIEdlbmVyYWwgUHVibGljIExpY2Vuc2UgYXMgcHVibGlzaGVkIGJ5XG4gKiB0aGUgRnJlZSBTb2Z0d2FyZSBGb3VuZGF0aW9uLCBlaXRoZXIgdmVyc2lvbiAzIG9mIHRoZSBMaWNlbnNlLCBvclxuICogKGF0IHlvdXIgb3B0aW9uKSBhbnkgbGF0ZXIgdmVyc2lvbi5cbiAqXG4gKiBcIkpTR2FtZVRvb2xzXCIgaXMgZGlzdHJpYnV0ZWQgaW4gdGhlIGhvcGUgdGhhdCBpdCB3aWxsIGJlIHVzZWZ1bCxcbiAqIGJ1dCBXSVRIT1VUIEFOWSBXQVJSQU5UWTsgd2l0aG91dCBldmVuIHRoZSBpbXBsaWVkIHdhcnJhbnR5IG9mXG4gKiBNRVJDSEFOVEFCSUxJVFkgb3IgRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UuICBTZWUgdGhlXG4gKiBHTlUgR2VuZXJhbCBQdWJsaWMgTGljZW5zZSBmb3IgbW9yZSBkZXRhaWxzLlxuICpcbiAqIFlvdSBzaG91bGQgaGF2ZSByZWNlaXZlZCBhIGNvcHkgb2YgdGhlIEdOVSBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlXG4gKiBhbG9uZyB3aXRoIFwiSlNHYW1lVG9vbHNcIi4gIElmIG5vdCwgc2VlIDxodHRwOi8vd3d3LmdudS5vcmcvbGljZW5zZXMvPi5cbiAqL1xuaW1wb3J0IENvbnRhaW5lciBmcm9tIFwiLi9Db250YWluZXJcIjtcbmltcG9ydCBVdGlscyBmcm9tIFwiLi9VdGlsc1wiO1xuaW1wb3J0IFN0eWxlIGZyb20gXCIuL1N0eWxlXCI7XG5pbXBvcnQgQ29uc3RhbnRzIGZyb20gXCIuL0NvbnN0YW50c1wiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTY2VuZSBleHRlbmRzIENvbnRhaW5lciB7XG4gIHNlbGVjdGFibGUgPSBmYWxzZTtcbiAgZW5hYmxlRXZlbnRzID0gZmFsc2U7XG5cbiAgY29uc3RydWN0b3IoLi4uY29tcG9uZW50cykge1xuICAgIHN1cGVyKCk7XG4gICAgdGhpcy5hZGRBbGwoLi4uY29tcG9uZW50cyk7XG4gIH1cblxuICBkcmF3KGNvbnRleHQpIHtcbiAgICBpZih0aGlzLmhpZGRlbikgcmV0dXJuO1xuICAgIHN1cGVyLmRyYXcoY29udGV4dCk7XG5cbiAgICBjb25zdCBjYW52YXMgPSBjb250ZXh0LmNhbnZhcztcbiAgICBjb25zdCBjdHggPSBjYW52YXMuZ2V0Q29udGV4dChcIjJkXCIpO1xuICAgIGN0eC5zYXZlKCk7XG4gICAgdGhpcy5jYW52YXMuY3Vyc29yID0gXCJkZWZhdWx0XCI7XG5cbiAgICBsZXQgY3R4VGVtcCA9IGN0eDtcbiAgICBpZih0aGlzLm1heFdpZHRoIHx8IHRoaXMubWF4SGVpZ2h0KSBjdHhUZW1wID0gdGhpcy5jYW52YXNUbXAuZ2V0Q29udGV4dChcIjJkXCIpO1xuXG4gICAgdGhpcy5kcmF3Q29tcG9uZW50cyhjdHhUZW1wKTsgLy8gRHJhdyBzb3J0ZWQgY29tcG9uZW50c1xuICAgIFxuICAgIGlmKHRoaXMubWF4V2lkdGggfHwgdGhpcy5tYXhIZWlnaHQpIFV0aWxzLmRyYXdJbWFnZURhdGEoY3R4LCB0aGlzLmNhbnZhc1RtcCwgdGhpcy54LCB0aGlzLnksIHRoaXMud2lkdGgsIHRoaXMuaGVpZ2h0LCB0aGlzLngsIHRoaXMueSwgdGhpcy53aWR0aCwgdGhpcy5oZWlnaHQpO1xuICAgIHN1cGVyLmRyYXdTY3JvbGxiYXJzKGN0eCk7XG5cbiAgICBjdHgucmVzdG9yZSgpO1xuICB9XG5cbiAgZHJhd0NvbXBvbmVudHMoY3R4KSB7XG4gICAgdGhpcy5jb21wb25lbnRzLnNvcnQoU2NlbmUuY29tcGFyZUNvbXBvbmVudHMpLmZvckVhY2goY29tcG9uZW50ID0+IGNvbXBvbmVudC5kcmF3KGN0eCkpO1xuICB9XG5cbiAgZ2V0IGRlZmF1bHRTdHlsZSgpIHtcbiAgICByZXR1cm4gbmV3IFN0eWxlKHtcbiAgICAgIFwicGFkZGluZ1wiOiBDb25zdGFudHMuU2V0dGluZy5ERUZBVUxUX1BBRERJTkdcbiAgICB9KTtcbiAgfVxufSIsIi8qXG4gKiBDb3B5cmlnaHQgKEMpIDIwMjAgRWxpYXN0aWsgKGVsaWFzdGlrc29mdHMuY29tKVxuICpcbiAqIFRoaXMgZmlsZSBpcyBwYXJ0IG9mIFwiSlNHYW1lVG9vbHNcIi5cbiAqXG4gKiBcIkpTR2FtZVRvb2xzXCIgaXMgZnJlZSBzb2Z0d2FyZTogeW91IGNhbiByZWRpc3RyaWJ1dGUgaXQgYW5kL29yIG1vZGlmeVxuICogaXQgdW5kZXIgdGhlIHRlcm1zIG9mIHRoZSBHTlUgR2VuZXJhbCBQdWJsaWMgTGljZW5zZSBhcyBwdWJsaXNoZWQgYnlcbiAqIHRoZSBGcmVlIFNvZnR3YXJlIEZvdW5kYXRpb24sIGVpdGhlciB2ZXJzaW9uIDMgb2YgdGhlIExpY2Vuc2UsIG9yXG4gKiAoYXQgeW91ciBvcHRpb24pIGFueSBsYXRlciB2ZXJzaW9uLlxuICpcbiAqIFwiSlNHYW1lVG9vbHNcIiBpcyBkaXN0cmlidXRlZCBpbiB0aGUgaG9wZSB0aGF0IGl0IHdpbGwgYmUgdXNlZnVsLFxuICogYnV0IFdJVEhPVVQgQU5ZIFdBUlJBTlRZOyB3aXRob3V0IGV2ZW4gdGhlIGltcGxpZWQgd2FycmFudHkgb2ZcbiAqIE1FUkNIQU5UQUJJTElUWSBvciBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRS4gIFNlZSB0aGVcbiAqIEdOVSBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlIGZvciBtb3JlIGRldGFpbHMuXG4gKlxuICogWW91IHNob3VsZCBoYXZlIHJlY2VpdmVkIGEgY29weSBvZiB0aGUgR05VIEdlbmVyYWwgUHVibGljIExpY2Vuc2VcbiAqIGFsb25nIHdpdGggXCJKU0dhbWVUb29sc1wiLiAgSWYgbm90LCBzZWUgPGh0dHA6Ly93d3cuZ251Lm9yZy9saWNlbnNlcy8+LlxuICovXG5pbXBvcnQgQ29uc3RhbnRzIGZyb20gXCIuL0NvbnN0YW50c1wiO1xuaW1wb3J0IEJveCBmcm9tIFwiLi9Cb3hcIjtcbmltcG9ydCBTdHlsZSBmcm9tIFwiLi9TdHlsZVwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTY3JvbGxiYXIgZXh0ZW5kcyBCb3gge1xuICBzZWxlY3RhYmxlID0gdHJ1ZTtcblxuICBjb25zdHJ1Y3RvcihzaXplLCBzdHlsZSwgcGFyZW50KSB7XG4gICAgc3VwZXIobnVsbCwgbnVsbCwgbnVsbCwgbnVsbCwgc3R5bGUpO1xuICAgIHRoaXMucGFyZW50ID0gcGFyZW50O1xuICAgIHRoaXMuc2l6ZSA9IHNpemUgfHwgQ29uc3RhbnRzLlNldHRpbmcuU0NST0xMQkFSX0RFRkFVTFRfU0laRTtcbiAgfVxuICBcbiAgZHJhdyhjb250ZXh0KSB7XG4gICAgaWYodGhpcy5oaWRkZW4pIHJldHVybjtcbiAgICBpZih0aGlzLmNsaWNrZWQpIHtcbiAgICAgIHRoaXMuaG92ZXJlZCA9IHRydWU7XG4gICAgfVxuICAgIFxuICAgIHN1cGVyLmRyYXcoY29udGV4dCk7XG4gIH1cblxuICBnZXQgbWF4V2lkdGhQYXJlbnQoKSB7XG4gICAgcmV0dXJuIHRoaXMucGFyZW50ID8gdGhpcy5wYXJlbnQubWF4V2lkdGggLSBNYXRoLmFicyhNYXRoLm1pbigwLCB0aGlzLnBhcmVudC54KSkgOiAwO1xuICB9XG5cbiAgZ2V0IG1heEhlaWdodFBhcmVudCgpIHtcbiAgICByZXR1cm4gdGhpcy5wYXJlbnQgPyB0aGlzLnBhcmVudC5tYXhIZWlnaHQgLSBNYXRoLmFicyhNYXRoLm1pbigwLCB0aGlzLnBhcmVudC55KSkgOiAwO1xuICB9XG5cbiAgZ2V0IGlubmVyV2lkdGhQYXJlbnQoKSB7XG4gICAgcmV0dXJuIHRoaXMucGFyZW50ID8gdGhpcy5wYXJlbnQuaW5uZXJXaWR0aCAtIE1hdGguYWJzKE1hdGgubWluKDAsIHRoaXMucGFyZW50LngpKSA6IDA7XG4gIH1cblxuICBnZXQgaW5uZXJIZWlnaHRQYXJlbnQoKSB7XG4gICAgcmV0dXJuIHRoaXMucGFyZW50ID8gdGhpcy5wYXJlbnQuaW5uZXJIZWlnaHQgLSBNYXRoLmFicyhNYXRoLm1pbigwLCB0aGlzLnBhcmVudC55KSkgOiAwO1xuICB9XG5cbiAgZ2V0IG1heFdpZHRoKCkge1xuICAgIHJldHVybiB0aGlzLndpZHRoO1xuICB9XG5cbiAgZ2V0IG1heEhlaWdodCgpIHtcbiAgICByZXR1cm4gdGhpcy5oZWlnaHQ7XG4gIH1cblxuICBnZXQgY29udGVudFJhdGlvWCgpIHtcbiAgICByZXR1cm4gdGhpcy5wYXJlbnQgPyB0aGlzLm1heFdpZHRoUGFyZW50IC8gdGhpcy5pbm5lcldpZHRoUGFyZW50IDogMDtcbiAgfVxuXG4gIGdldCBjb250ZW50UmF0aW9ZKCkge1xuICAgIHJldHVybiB0aGlzLnBhcmVudCA/IHRoaXMubWF4SGVpZ2h0UGFyZW50IC8gdGhpcy5pbm5lckhlaWdodFBhcmVudCA6IDA7XG4gIH1cblxuICBnZXQgd2lkdGgoKSB7XG4gICAgcmV0dXJuIHRoaXMubWF4V2lkdGhQYXJlbnQgKiB0aGlzLmNvbnRlbnRSYXRpb1g7XG4gIH1cblxuICBnZXQgaGVpZ2h0KCkge1xuICAgIHJldHVybiB0aGlzLm1heEhlaWdodFBhcmVudCAqIHRoaXMuY29udGVudFJhdGlvWTtcbiAgfVxuXG4gIGdldCB3aW5kb3dTY3JvbGxTaXplWCgpIHtcbiAgICByZXR1cm4gdGhpcy5pbm5lcldpZHRoUGFyZW50IC0gdGhpcy5tYXhXaWR0aFBhcmVudDtcbiAgfVxuXG4gIGdldCB3aW5kb3dTY3JvbGxTaXplWSgpIHtcbiAgICByZXR1cm4gdGhpcy5pbm5lckhlaWdodFBhcmVudCAtIHRoaXMubWF4SGVpZ2h0UGFyZW50O1xuICB9XG5cbiAgZ2V0IHBlcmNlbnRTY3JvbGxiYXJYKCkge1xuICAgIHJldHVybiB0aGlzLnBhcmVudCA/IHRoaXMucGFyZW50Lm9mZnNldFNjcm9sbFggLyB0aGlzLndpbmRvd1Njcm9sbFNpemVYIDogMDtcbiAgfVxuXG4gIGdldCBwZXJjZW50U2Nyb2xsYmFyWSgpIHtcbiAgICByZXR1cm4gdGhpcy5wYXJlbnQgPyB0aGlzLnBhcmVudC5vZmZzZXRTY3JvbGxZIC8gdGhpcy53aW5kb3dTY3JvbGxTaXplWSA6IDA7XG4gIH1cblxuICBnZXQgc2Nyb2xsQXJlYVNpemVYKCkge1xuICAgIHJldHVybiB0aGlzLm1heFdpZHRoUGFyZW50IC0gdGhpcy53aWR0aDtcbiAgfVxuXG4gIGdldCBzY3JvbGxBcmVhU2l6ZVkoKSB7XG4gICAgcmV0dXJuIHRoaXMubWF4SGVpZ2h0UGFyZW50IC0gdGhpcy5oZWlnaHQ7XG4gIH1cblxuICBnZXQgeCgpIHtcbiAgICByZXR1cm4gdGhpcy5wYXJlbnQgPyBNYXRoLmFicyh0aGlzLnBhcmVudC54KSArIHRoaXMuc2Nyb2xsQXJlYVNpemVYICogdGhpcy5wZXJjZW50U2Nyb2xsYmFyWCA6IDA7XG4gIH1cblxuICBnZXQgeSgpIHtcbiAgICByZXR1cm4gdGhpcy5wYXJlbnQgPyBNYXRoLmFicyh0aGlzLnBhcmVudC55KSArIHRoaXMuc2Nyb2xsQXJlYVNpemVZICogdGhpcy5wZXJjZW50U2Nyb2xsYmFyWSA6IDA7XG4gIH1cblxuICBnZXQgZGVmYXVsdFN0eWxlKCkge1xuICAgIHJldHVybiBuZXcgU3R5bGUoe1xuICAgICAgXCJiYWNrZ3JvdW5kQ29sb3JcIjogQ29uc3RhbnRzLlNldHRpbmcuU0NST0xMQkFSX0RFRkFVTFRfQkFDS0dST1VORCxcbiAgICAgIFwiYmFja2dyb3VuZENvbG9ySG92ZXJcIjogQ29uc3RhbnRzLlNldHRpbmcuU0NST0xMQkFSX0RFRkFVTFRfSE9WRVJfQkFDS0dST1VORCxcbiAgICAgIFwiYmFja2dyb3VuZENvbG9yRG93blwiOiBDb25zdGFudHMuU2V0dGluZy5TQ1JPTExCQVJfREVGQVVMVF9DTElDS19CQUNLR1JPVU5ELFxuICAgICAgXCJib3JkZXJTaXplXCI6IDBcbiAgICB9KTtcbiAgfVxuXG4gIGNvbXBhcmVUb0NvbXBvbmVudChvdGhlckNvbXBvbmVudCkge1xuICAgIHJldHVybiBvdGhlckNvbXBvbmVudC5jb21wYXJlVG9TY3JvbGxiYXIodGhpcyk7XG4gIH1cblxuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdW51c2VkLXZhcnNcbiAgY29tcGFyZVRvU2Nyb2xsYmFyKG90aGVyQ29tcG9uZW50KSB7XG4gICAgcmV0dXJuIDA7XG4gIH1cbn0iLCIvKlxuICogQ29weXJpZ2h0IChDKSAyMDIwIEVsaWFzdGlrIChlbGlhc3Rpa3NvZnRzLmNvbSlcbiAqXG4gKiBUaGlzIGZpbGUgaXMgcGFydCBvZiBcIkpTR2FtZVRvb2xzXCIuXG4gKlxuICogXCJKU0dhbWVUb29sc1wiIGlzIGZyZWUgc29mdHdhcmU6IHlvdSBjYW4gcmVkaXN0cmlidXRlIGl0IGFuZC9vciBtb2RpZnlcbiAqIGl0IHVuZGVyIHRoZSB0ZXJtcyBvZiB0aGUgR05VIEdlbmVyYWwgUHVibGljIExpY2Vuc2UgYXMgcHVibGlzaGVkIGJ5XG4gKiB0aGUgRnJlZSBTb2Z0d2FyZSBGb3VuZGF0aW9uLCBlaXRoZXIgdmVyc2lvbiAzIG9mIHRoZSBMaWNlbnNlLCBvclxuICogKGF0IHlvdXIgb3B0aW9uKSBhbnkgbGF0ZXIgdmVyc2lvbi5cbiAqXG4gKiBcIkpTR2FtZVRvb2xzXCIgaXMgZGlzdHJpYnV0ZWQgaW4gdGhlIGhvcGUgdGhhdCBpdCB3aWxsIGJlIHVzZWZ1bCxcbiAqIGJ1dCBXSVRIT1VUIEFOWSBXQVJSQU5UWTsgd2l0aG91dCBldmVuIHRoZSBpbXBsaWVkIHdhcnJhbnR5IG9mXG4gKiBNRVJDSEFOVEFCSUxJVFkgb3IgRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UuICBTZWUgdGhlXG4gKiBHTlUgR2VuZXJhbCBQdWJsaWMgTGljZW5zZSBmb3IgbW9yZSBkZXRhaWxzLlxuICpcbiAqIFlvdSBzaG91bGQgaGF2ZSByZWNlaXZlZCBhIGNvcHkgb2YgdGhlIEdOVSBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlXG4gKiBhbG9uZyB3aXRoIFwiSlNHYW1lVG9vbHNcIi4gIElmIG5vdCwgc2VlIDxodHRwOi8vd3d3LmdudS5vcmcvbGljZW5zZXMvPi5cbiAqL1xuaW1wb3J0IFNjcm9sbGJhciBmcm9tIFwiLi9TY3JvbGxiYXJcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU2Nyb2xsYmFySG9yaXpvbnRhbCBleHRlbmRzIFNjcm9sbGJhciB7XG4gIHNlbGVjdGFibGUgPSB0cnVlO1xuXG4gIGNvbnN0cnVjdG9yKHNpemUsIHN0eWxlLCBwYXJlbnQpIHtcbiAgICBzdXBlcihzaXplLCBzdHlsZSwgcGFyZW50KTtcblxuICAgIHRoaXMuYWRkTW92ZUFjdGlvbigoZGVsdGFYKSA9PiB7XG4gICAgICBpZih0aGlzLnBhcmVudCkge1xuICAgICAgICBjb25zdCBwZXJjZW50U2Nyb2xsYmFyTmV4dCA9IE1hdGguYWJzKCh0aGlzLnBhcmVudC54IC0gTWF0aC5tYXgodGhpcy5wYXJlbnQueCwgdGhpcy54ICsgLWRlbHRhWCkpIC8gKHRoaXMucGFyZW50LndpZHRoIC0gdGhpcy53aWR0aCkpO1xuICAgICAgICBjb25zdCBuZXdEZWx0YVggPSAodGhpcy53aW5kb3dTY3JvbGxTaXplWCAqIHBlcmNlbnRTY3JvbGxiYXJOZXh0KSAtIHRoaXMucGFyZW50Lm9mZnNldFNjcm9sbFg7XG4gICAgICAgIHRoaXMucGFyZW50Lm9mZnNldFNjcm9sbFggKz0gbmV3RGVsdGFYO1xuXG4gICAgICAgIGlmKHRoaXMucGFyZW50LnJlYWN0b3IpIHtcbiAgICAgICAgICB0aGlzLnBhcmVudC5yZWFjdG9yLmRpc3BhdGNoRXZlbnQoXCJvblNjcm9sbFwiLCBuZXdEZWx0YVgsIDApO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSk7XG4gIH1cbiAgXG4gIGRyYXcoY29udGV4dCkge1xuICAgIGlmKHRoaXMuc2Nyb2xsQXJlYVNpemVYID4gMCkge1xuICAgICAgc3VwZXIuZHJhdyhjb250ZXh0KTtcbiAgICB9XG4gIH1cblxuICBnZXQgaGVpZ2h0KCkge1xuICAgIHJldHVybiB0aGlzLnNpemU7XG4gIH1cblxuICBnZXQgeSgpIHtcbiAgICByZXR1cm4gdGhpcy5wYXJlbnQgPyB0aGlzLnBhcmVudC55ICsgdGhpcy5wYXJlbnQuaGVpZ2h0IC0gdGhpcy5zaXplIDogbnVsbDtcbiAgfVxufSIsIi8qXG4gKiBDb3B5cmlnaHQgKEMpIDIwMjAgRWxpYXN0aWsgKGVsaWFzdGlrc29mdHMuY29tKVxuICpcbiAqIFRoaXMgZmlsZSBpcyBwYXJ0IG9mIFwiSlNHYW1lVG9vbHNcIi5cbiAqXG4gKiBcIkpTR2FtZVRvb2xzXCIgaXMgZnJlZSBzb2Z0d2FyZTogeW91IGNhbiByZWRpc3RyaWJ1dGUgaXQgYW5kL29yIG1vZGlmeVxuICogaXQgdW5kZXIgdGhlIHRlcm1zIG9mIHRoZSBHTlUgR2VuZXJhbCBQdWJsaWMgTGljZW5zZSBhcyBwdWJsaXNoZWQgYnlcbiAqIHRoZSBGcmVlIFNvZnR3YXJlIEZvdW5kYXRpb24sIGVpdGhlciB2ZXJzaW9uIDMgb2YgdGhlIExpY2Vuc2UsIG9yXG4gKiAoYXQgeW91ciBvcHRpb24pIGFueSBsYXRlciB2ZXJzaW9uLlxuICpcbiAqIFwiSlNHYW1lVG9vbHNcIiBpcyBkaXN0cmlidXRlZCBpbiB0aGUgaG9wZSB0aGF0IGl0IHdpbGwgYmUgdXNlZnVsLFxuICogYnV0IFdJVEhPVVQgQU5ZIFdBUlJBTlRZOyB3aXRob3V0IGV2ZW4gdGhlIGltcGxpZWQgd2FycmFudHkgb2ZcbiAqIE1FUkNIQU5UQUJJTElUWSBvciBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRS4gIFNlZSB0aGVcbiAqIEdOVSBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlIGZvciBtb3JlIGRldGFpbHMuXG4gKlxuICogWW91IHNob3VsZCBoYXZlIHJlY2VpdmVkIGEgY29weSBvZiB0aGUgR05VIEdlbmVyYWwgUHVibGljIExpY2Vuc2VcbiAqIGFsb25nIHdpdGggXCJKU0dhbWVUb29sc1wiLiAgSWYgbm90LCBzZWUgPGh0dHA6Ly93d3cuZ251Lm9yZy9saWNlbnNlcy8+LlxuICovXG5pbXBvcnQgU2Nyb2xsYmFyIGZyb20gXCIuL1Njcm9sbGJhclwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTY3JvbGxiYXJWZXJ0aWNhbCBleHRlbmRzIFNjcm9sbGJhciB7XG4gIHNlbGVjdGFibGUgPSB0cnVlO1xuXG4gIGNvbnN0cnVjdG9yKHNpemUsIHN0eWxlLCBwYXJlbnQpIHtcbiAgICBzdXBlcihzaXplLCBzdHlsZSwgcGFyZW50KTtcbiAgICBcbiAgICB0aGlzLmFkZE1vdmVBY3Rpb24oKGRlbHRhWCwgZGVsdGFZKSA9PiB7XG4gICAgICBpZih0aGlzLnBhcmVudCkge1xuICAgICAgICBjb25zdCBwZXJjZW50U2Nyb2xsYmFyTmV4dCA9IE1hdGguYWJzKCh0aGlzLnBhcmVudC55IC0gTWF0aC5tYXgodGhpcy5wYXJlbnQueSwgdGhpcy55ICsgLWRlbHRhWSkpIC8gKHRoaXMucGFyZW50LmhlaWdodCAtIHRoaXMuaGVpZ2h0KSk7XG4gICAgICAgIGNvbnN0IG5ld0RlbHRhWSA9ICh0aGlzLndpbmRvd1Njcm9sbFNpemVZICogcGVyY2VudFNjcm9sbGJhck5leHQpIC0gdGhpcy5wYXJlbnQub2Zmc2V0U2Nyb2xsWTtcbiAgICAgICAgdGhpcy5wYXJlbnQub2Zmc2V0U2Nyb2xsWSArPSBuZXdEZWx0YVk7XG5cbiAgICAgICAgaWYodGhpcy5wYXJlbnQucmVhY3Rvcikge1xuICAgICAgICAgIHRoaXMucGFyZW50LnJlYWN0b3IuZGlzcGF0Y2hFdmVudChcIm9uU2Nyb2xsXCIsIDAsIG5ld0RlbHRhWSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuICBcbiAgZHJhdyhjb250ZXh0KSB7XG4gICAgaWYodGhpcy5zY3JvbGxBcmVhU2l6ZVkgPiAwKSB7XG4gICAgICBzdXBlci5kcmF3KGNvbnRleHQpO1xuICAgIH1cbiAgfVxuXG4gIGdldCB3aWR0aCgpIHtcbiAgICByZXR1cm4gdGhpcy5zaXplO1xuICB9XG5cbiAgZ2V0IHgoKSB7XG4gICAgcmV0dXJuIHRoaXMucGFyZW50ID8gdGhpcy5wYXJlbnQueCArIHRoaXMucGFyZW50LndpZHRoIC0gdGhpcy5zaXplIDogMDtcbiAgfVxufSIsIi8qXG4gKiBDb3B5cmlnaHQgKEMpIDIwMjAgRWxpYXN0aWsgKGVsaWFzdGlrc29mdHMuY29tKVxuICpcbiAqIFRoaXMgZmlsZSBpcyBwYXJ0IG9mIFwiSlNHYW1lVG9vbHNcIi5cbiAqXG4gKiBcIkpTR2FtZVRvb2xzXCIgaXMgZnJlZSBzb2Z0d2FyZTogeW91IGNhbiByZWRpc3RyaWJ1dGUgaXQgYW5kL29yIG1vZGlmeVxuICogaXQgdW5kZXIgdGhlIHRlcm1zIG9mIHRoZSBHTlUgR2VuZXJhbCBQdWJsaWMgTGljZW5zZSBhcyBwdWJsaXNoZWQgYnlcbiAqIHRoZSBGcmVlIFNvZnR3YXJlIEZvdW5kYXRpb24sIGVpdGhlciB2ZXJzaW9uIDMgb2YgdGhlIExpY2Vuc2UsIG9yXG4gKiAoYXQgeW91ciBvcHRpb24pIGFueSBsYXRlciB2ZXJzaW9uLlxuICpcbiAqIFwiSlNHYW1lVG9vbHNcIiBpcyBkaXN0cmlidXRlZCBpbiB0aGUgaG9wZSB0aGF0IGl0IHdpbGwgYmUgdXNlZnVsLFxuICogYnV0IFdJVEhPVVQgQU5ZIFdBUlJBTlRZOyB3aXRob3V0IGV2ZW4gdGhlIGltcGxpZWQgd2FycmFudHkgb2ZcbiAqIE1FUkNIQU5UQUJJTElUWSBvciBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRS4gIFNlZSB0aGVcbiAqIEdOVSBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlIGZvciBtb3JlIGRldGFpbHMuXG4gKlxuICogWW91IHNob3VsZCBoYXZlIHJlY2VpdmVkIGEgY29weSBvZiB0aGUgR05VIEdlbmVyYWwgUHVibGljIExpY2Vuc2VcbiAqIGFsb25nIHdpdGggXCJKU0dhbWVUb29sc1wiLiAgSWYgbm90LCBzZWUgPGh0dHA6Ly93d3cuZ251Lm9yZy9saWNlbnNlcy8+LlxuICovXG5pbXBvcnQgTGFiZWwgZnJvbSBcIi4vTGFiZWxcIjtcbmltcG9ydCBCdXR0b24gZnJvbSBcIi4vQnV0dG9uXCI7XG5pbXBvcnQgVHJpYW5nbGUgZnJvbSBcIi4vVHJpYW5nbGVcIjtcbmltcG9ydCBTdHlsZSBmcm9tIFwiLi9TdHlsZVwiO1xuaW1wb3J0IENvbnN0YW50cyBmcm9tIFwiLi9Db25zdGFudHNcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU2VsZWN0IGV4dGVuZHMgQnV0dG9uIHtcbiAgI193aWR0aCA9IDA7XG5cbiAgY29uc3RydWN0b3IoeCwgeSwgbWF4V2lkdGgsIG1heEhlaWdodCwgc3R5bGUsIG9wdGlvbkNvbnRhaW5lciwgZGVmYXVsdE9wdGlvbikge1xuICAgIHN1cGVyKHgsIHksIG1heFdpZHRoLCBtYXhIZWlnaHQsIHN0eWxlKTtcblxuICAgIHRoaXMub3B0aW9uQ29udGFpbmVyID0gb3B0aW9uQ29udGFpbmVyO1xuICAgIGlmKGRlZmF1bHRPcHRpb24pIHRoaXMuc2VsZWN0ZWRPcHRpb24gPSBkZWZhdWx0T3B0aW9uO1xuXG4gICAgdGhpcy5sYWJlbCA9IG5ldyBMYWJlbChcIlwiLCB4LCB5LCBzdHlsZSk7XG4gICAgdGhpcy5sYWJlbC5zdHlsZS5zZXRBbGwoeyBcImFsaWduZW1lbnRcIjogQ29uc3RhbnRzLkFsaWduZW1lbnQuTEVGVCwgXCJ2ZXJ0aWNhbEFsaWduZW1lbnRcIjogQ29uc3RhbnRzLlZlcnRpY2FsQWxpZ25lbWVudC5DRU5URVIgfSk7XG4gICAgdGhpcy50cmlhbmdsZSA9IG5ldyBUcmlhbmdsZShudWxsLCBudWxsLCA4LCA4LCBzdHlsZSk7XG4gICAgdGhpcy50cmlhbmdsZS5zdHlsZS5zZXRBbGwoeyBcImFsaWduZW1lbnRcIjogQ29uc3RhbnRzLkFsaWduZW1lbnQuUklHSFQsIFwidmVydGljYWxBbGlnbmVtZW50XCI6IENvbnN0YW50cy5WZXJ0aWNhbEFsaWduZW1lbnQuQ0VOVEVSIH0pO1xuXG4gICAgdGhpcy5hZGRBbGwodGhpcy5sYWJlbCwgdGhpcy50cmlhbmdsZSk7XG5cbiAgICB0aGlzLmFkZENsaWNrQWN0aW9uKCgpID0+IHtcbiAgICAgIGlmKHRoaXMub3B0aW9uQ29udGFpbmVyKSB7XG4gICAgICAgIHRoaXMub3B0aW9uQ29udGFpbmVyLmhpZGRlbiA9IGZhbHNlO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgaWYoIUNvbnN0YW50cy5TZXR0aW5nLkRJU0FCTEVfRVhQRVJJTUVOVEFMX09QVElNSVpBVElPTlMpIHtcbiAgICAgIHRoaXMudXBkYXRlV2lkdGgoKTtcbiAgICAgIHRoaXMuYWRkQ2hhbmdlQWN0aW9uKCgpID0+IHRoaXMudXBkYXRlV2lkdGgoKSk7XG4gICAgfVxuICB9XG5cbiAgZHJhdyhjb250ZXh0KSB7XG4gICAgaWYodGhpcy5oaWRkZW4pIHJldHVybjtcbiAgICBpZih0aGlzLnNlbGVjdGVkT3B0aW9uICYmIHRoaXMuc2VsZWN0ZWRPcHRpb24ubGFiZWwpIHtcbiAgICAgIHRoaXMubGFiZWwudGV4dCA9IHRoaXMuc2VsZWN0ZWRPcHRpb24ubGFiZWwudGV4dDtcbiAgICB9XG5cbiAgICBzdXBlci5kcmF3KGNvbnRleHQpO1xuXG4gICAgaWYodGhpcy5vcHRpb25Db250YWluZXIpIHtcbiAgICAgIHRoaXMub3B0aW9uQ29udGFpbmVyLnNlbGVjdCA9IHRoaXM7XG4gICAgfVxuICB9XG5cbiAgZ2V0IHNlbGVjdGVkT3B0aW9uKCkge1xuICAgIHJldHVybiB0aGlzLm9wdGlvbkNvbnRhaW5lciA/IHRoaXMub3B0aW9uQ29udGFpbmVyLmNvbXBvbmVudHNbdGhpcy5vcHRpb25Db250YWluZXIuc2VsZWN0ZWRPcHRpb25dIDogbnVsbDtcbiAgfVxuXG4gIHNldCBzZWxlY3RlZE9wdGlvbihpZCkge1xuICAgIGlmKGlkICE9IHRoaXMub3B0aW9uQ29udGFpbmVyLnNlbGVjdGVkT3B0aW9uKSB7XG4gICAgICB0aGlzLm9wdGlvbkNvbnRhaW5lci5zZWxlY3RlZE9wdGlvbiA9IGlkO1xuICAgICAgdGhpcy5yZWFjdG9yLmRpc3BhdGNoRXZlbnQoXCJvbkNoYW5nZVwiLCB0aGlzKTtcbiAgICB9XG4gIH1cblxuICBnZXQgdGV4dCgpIHtcbiAgICByZXR1cm4gdGhpcy5zZWxlY3RlZE9wdGlvbiAmJiB0aGlzLnNlbGVjdGVkT3B0aW9uLmxhYmVsID8gdGhpcy5zZWxlY3RlZE9wdGlvbi5sYWJlbC50ZXh0IDogbnVsbDtcbiAgfVxuXG4gIHVwZGF0ZVdpZHRoKCkge1xuICAgIGxldCBtYXhXaWR0aCA9IHRoaXMubGFiZWwud2lkdGg7XG5cbiAgICBpZih0aGlzLm9wdGlvbkNvbnRhaW5lcikge1xuICAgICAgdGhpcy5vcHRpb25Db250YWluZXIuY29tcG9uZW50cy5mb3JFYWNoKGNvbXBvbmVudCA9PiB7XG4gICAgICAgIGNvbnN0IGxhYmVsID0gY29tcG9uZW50LmxhYmVsO1xuXG4gICAgICAgIGlmKGxhYmVsKSB7XG4gICAgICAgICAgaWYobGFiZWwudXBkYXRlU2l6ZXMpIGxhYmVsLnVwZGF0ZVNpemVzKCk7XG4gICAgICAgICAgaWYobGFiZWwud2lkdGggPiBtYXhXaWR0aCkgbWF4V2lkdGggPSBsYWJlbC53aWR0aDtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgdGhpcy4jX3dpZHRoID0gbWF4V2lkdGggKyB0aGlzLnN0eWxlLnBhZGRpbmcgKyB0aGlzLnRyaWFuZ2xlLndpZHRoICsgMTU7XG4gIH1cblxuICBnZXQgd2lkdGgoKSB7XG4gICAgaWYoQ29uc3RhbnRzLlNldHRpbmcuRElTQUJMRV9FWFBFUklNRU5UQUxfT1BUSU1JWkFUSU9OUykgdGhpcy51cGRhdGVXaWR0aCgpO1xuICAgIHJldHVybiB0aGlzLiNfd2lkdGg7XG4gIH1cblxuICBnZXQgYWxsQ29tcG9uZW50cygpIHtcbiAgICBjb25zdCBjb21wb25lbnRzID0gW107XG4gICAgY29tcG9uZW50cy5wdXNoKC4uLnN1cGVyLmFsbENvbXBvbmVudHMpO1xuICAgIHJldHVybiBjb21wb25lbnRzO1xuICB9XG5cbiAgZ2V0IGRlZmF1bHRTdHlsZSgpIHtcbiAgICByZXR1cm4gbmV3IFN0eWxlKHtcbiAgICAgIFwiYmFja2dyb3VuZENvbG9yXCI6IENvbnN0YW50cy5TZXR0aW5nLlNFTEVDVF9ERUZBVUxUX0JBQ0tHUk9VTkQsXG4gICAgICBcImJhY2tncm91bmRDb2xvckhvdmVyXCI6IENvbnN0YW50cy5TZXR0aW5nLlNFTEVDVF9ERUZBVUxUX0hPVkVSX0JBQ0tHUk9VTkQsXG4gICAgICBcImJhY2tncm91bmRDb2xvckRvd25cIjogQ29uc3RhbnRzLlNldHRpbmcuU0VMRUNUX0RFRkFVTFRfQ0xJQ0tfQkFDS0dST1VORCxcbiAgICAgIFwicGFkZGluZ1wiOiBDb25zdGFudHMuU2V0dGluZy5ERUZBVUxUX1BBRERJTkdcbiAgICB9KTtcbiAgfVxuXG4gIGdldCBzZWxlY3RlZCgpIHtcbiAgICByZXR1cm4gc3VwZXIuc2VsZWN0ZWQgfHwgdGhpcy5vcHRpb25Db250YWluZXIuc2VsZWN0ZWQ7XG4gIH1cblxuICBzZXQgc2VsZWN0ZWQoc2VsZWN0ZWQpIHtcbiAgICBzdXBlci5zZWxlY3RlZCA9IHNlbGVjdGVkO1xuICB9XG59IiwiLypcbiAqIENvcHlyaWdodCAoQykgMjAyMCBFbGlhc3RpayAoZWxpYXN0aWtzb2Z0cy5jb20pXG4gKlxuICogVGhpcyBmaWxlIGlzIHBhcnQgb2YgXCJKU0dhbWVUb29sc1wiLlxuICpcbiAqIFwiSlNHYW1lVG9vbHNcIiBpcyBmcmVlIHNvZnR3YXJlOiB5b3UgY2FuIHJlZGlzdHJpYnV0ZSBpdCBhbmQvb3IgbW9kaWZ5XG4gKiBpdCB1bmRlciB0aGUgdGVybXMgb2YgdGhlIEdOVSBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlIGFzIHB1Ymxpc2hlZCBieVxuICogdGhlIEZyZWUgU29mdHdhcmUgRm91bmRhdGlvbiwgZWl0aGVyIHZlcnNpb24gMyBvZiB0aGUgTGljZW5zZSwgb3JcbiAqIChhdCB5b3VyIG9wdGlvbikgYW55IGxhdGVyIHZlcnNpb24uXG4gKlxuICogXCJKU0dhbWVUb29sc1wiIGlzIGRpc3RyaWJ1dGVkIGluIHRoZSBob3BlIHRoYXQgaXQgd2lsbCBiZSB1c2VmdWwsXG4gKiBidXQgV0lUSE9VVCBBTlkgV0FSUkFOVFk7IHdpdGhvdXQgZXZlbiB0aGUgaW1wbGllZCB3YXJyYW50eSBvZlxuICogTUVSQ0hBTlRBQklMSVRZIG9yIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFLiAgU2VlIHRoZVxuICogR05VIEdlbmVyYWwgUHVibGljIExpY2Vuc2UgZm9yIG1vcmUgZGV0YWlscy5cbiAqXG4gKiBZb3Ugc2hvdWxkIGhhdmUgcmVjZWl2ZWQgYSBjb3B5IG9mIHRoZSBHTlUgR2VuZXJhbCBQdWJsaWMgTGljZW5zZVxuICogYWxvbmcgd2l0aCBcIkpTR2FtZVRvb2xzXCIuICBJZiBub3QsIHNlZSA8aHR0cDovL3d3dy5nbnUub3JnL2xpY2Vuc2VzLz4uXG4gKi9cbmltcG9ydCBCdXR0b24gZnJvbSBcIi4vQnV0dG9uXCI7XG5pbXBvcnQgQ29uc3RhbnRzIGZyb20gXCIuL0NvbnN0YW50c1wiO1xuaW1wb3J0IExhYmVsIGZyb20gXCIuL0xhYmVsXCI7XG5pbXBvcnQgU3R5bGUgZnJvbSBcIi4vU3R5bGVcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU2VsZWN0T3B0aW9uIGV4dGVuZHMgQnV0dG9uIHtcbiAgY29uc3RydWN0b3IobGFiZWwsIHN0eWxlKSB7XG4gICAgY29uc3QgZGVmYXVsdExhYmVsID0gbmV3IExhYmVsKFwiT3B0aW9uXCIpO1xuICAgIHN1cGVyKG51bGwsIG51bGwsIG51bGwsIG51bGwsIHN0eWxlLCBsYWJlbCB8fCBkZWZhdWx0TGFiZWwpO1xuICAgIHRoaXMubGFiZWwgPSBsYWJlbCB8fCBkZWZhdWx0TGFiZWw7XG4gIH1cblxuICBhZGQoY29tcG9uZW50KSB7XG4gICAgaWYoY29tcG9uZW50IGluc3RhbmNlb2YgTGFiZWwpIHtcbiAgICAgIHRoaXMuY2xlYXIoKTtcbiAgICAgIHN1cGVyLmFkZChjb21wb25lbnQpO1xuICAgIH1cbiAgfVxuXG4gIGdldCB3aWR0aCgpIHtcbiAgICByZXR1cm4gdGhpcy5wYXJlbnQgJiYgdGhpcy5wYXJlbnQud2lkdGg7XG4gIH1cblxuICBnZXQgZGVmYXVsdFN0eWxlKCkge1xuICAgIHJldHVybiBuZXcgU3R5bGUoe1xuICAgICAgXCJiYWNrZ3JvdW5kQ29sb3JcIjogQ29uc3RhbnRzLlNldHRpbmcuU0VMRUNUX0RFRkFVTFRfQkFDS0dST1VORCxcbiAgICAgIFwiYmFja2dyb3VuZENvbG9ySG92ZXJcIjogQ29uc3RhbnRzLlNldHRpbmcuU0VMRUNUX0RFRkFVTFRfSE9WRVJfQkFDS0dST1VORCxcbiAgICAgIFwiYmFja2dyb3VuZENvbG9yRG93blwiOiBDb25zdGFudHMuU2V0dGluZy5TRUxFQ1RfREVGQVVMVF9DTElDS19CQUNLR1JPVU5ELFxuICAgICAgXCJwYWRkaW5nXCI6IENvbnN0YW50cy5TZXR0aW5nLkRFRkFVTFRfUEFERElOR1xuICAgIH0pO1xuICB9XG59IiwiLypcbiAqIENvcHlyaWdodCAoQykgMjAyMCBFbGlhc3RpayAoZWxpYXN0aWtzb2Z0cy5jb20pXG4gKlxuICogVGhpcyBmaWxlIGlzIHBhcnQgb2YgXCJKU0dhbWVUb29sc1wiLlxuICpcbiAqIFwiSlNHYW1lVG9vbHNcIiBpcyBmcmVlIHNvZnR3YXJlOiB5b3UgY2FuIHJlZGlzdHJpYnV0ZSBpdCBhbmQvb3IgbW9kaWZ5XG4gKiBpdCB1bmRlciB0aGUgdGVybXMgb2YgdGhlIEdOVSBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlIGFzIHB1Ymxpc2hlZCBieVxuICogdGhlIEZyZWUgU29mdHdhcmUgRm91bmRhdGlvbiwgZWl0aGVyIHZlcnNpb24gMyBvZiB0aGUgTGljZW5zZSwgb3JcbiAqIChhdCB5b3VyIG9wdGlvbikgYW55IGxhdGVyIHZlcnNpb24uXG4gKlxuICogXCJKU0dhbWVUb29sc1wiIGlzIGRpc3RyaWJ1dGVkIGluIHRoZSBob3BlIHRoYXQgaXQgd2lsbCBiZSB1c2VmdWwsXG4gKiBidXQgV0lUSE9VVCBBTlkgV0FSUkFOVFk7IHdpdGhvdXQgZXZlbiB0aGUgaW1wbGllZCB3YXJyYW50eSBvZlxuICogTUVSQ0hBTlRBQklMSVRZIG9yIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFLiAgU2VlIHRoZVxuICogR05VIEdlbmVyYWwgUHVibGljIExpY2Vuc2UgZm9yIG1vcmUgZGV0YWlscy5cbiAqXG4gKiBZb3Ugc2hvdWxkIGhhdmUgcmVjZWl2ZWQgYSBjb3B5IG9mIHRoZSBHTlUgR2VuZXJhbCBQdWJsaWMgTGljZW5zZVxuICogYWxvbmcgd2l0aCBcIkpTR2FtZVRvb2xzXCIuICBJZiBub3QsIHNlZSA8aHR0cDovL3d3dy5nbnUub3JnL2xpY2Vuc2VzLz4uXG4gKi9cbmltcG9ydCBDb2wgZnJvbSBcIi4vQ29sXCI7XG5pbXBvcnQgU3R5bGUgZnJvbSBcIi4vU3R5bGVcIjtcbmltcG9ydCBDb25zdGFudHMgZnJvbSBcIi4vQ29uc3RhbnRzXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFNlbGVjdERyb3Bkb3duIGV4dGVuZHMgQ29sIHtcbiAgI19zZWxlY3RlZE9wdGlvbjtcbiAgc2VsZWN0YWJsZSA9IGZhbHNlO1xuXG4gIGNvbnN0cnVjdG9yKG1heEhlaWdodERyb3Bkb3duLCBzdHlsZSwgLi4ub3B0aW9ucykge1xuICAgIHN1cGVyKG51bGwsIG51bGwsIG51bGwsIG1heEhlaWdodERyb3Bkb3duLCBzdHlsZSwgLi4ub3B0aW9ucyk7XG4gICAgdGhpcy4jX3NlbGVjdGVkT3B0aW9uID0gMDtcbiAgICB0aGlzLnNlbGVjdCA9IG51bGw7XG4gIH1cblxuICBkcmF3KGNvbnRleHQpIHtcbiAgICBzdXBlci5kcmF3KGNvbnRleHQpO1xuICB9XG5cbiAgZ2V0IHgoKSB7XG4gICAgcmV0dXJuIHRoaXMuc2VsZWN0ICYmIHRoaXMuc2VsZWN0Lng7XG4gIH1cblxuICBnZXQgeSgpIHtcbiAgICBjb25zdCBzZWxlY3RIZWlnaHQgPSAodGhpcy5zZWxlY3QgJiYgdGhpcy5zZWxlY3QuaGVpZ2h0KTtcbiAgICBjb25zdCBoZWlnaHQgPSB0aGlzLmhlaWdodDtcbiAgICBjb25zdCB5ID0gdGhpcy5zZWxlY3QgJiYgdGhpcy5zZWxlY3QueTtcblxuICAgIGlmKHRoaXMuY2FudmFzICYmIHRoaXMuY2FudmFzLnNjZW5lICYmIHkgKyBzZWxlY3RIZWlnaHQgKyBoZWlnaHQgPj0gdGhpcy5jYW52YXMuc2NlbmUuaGVpZ2h0KSB7XG4gICAgICByZXR1cm4geSAtIGhlaWdodDtcbiAgICB9XG5cbiAgICByZXR1cm4geSArIHNlbGVjdEhlaWdodDtcbiAgfVxuXG4gIGdldCB3aWR0aCgpIHtcbiAgICByZXR1cm4gdGhpcy5zZWxlY3QgJiYgdGhpcy5zZWxlY3Qud2lkdGg7XG4gIH1cblxuICBnZXQgc2VsZWN0ZWRPcHRpb24oKSB7XG4gICAgcmV0dXJuIE1hdGgubWF4KDAsIE1hdGgubWluKHRoaXMuY29tcG9uZW50cy5sZW5ndGggLSAxLCB0aGlzLiNfc2VsZWN0ZWRPcHRpb24pKTtcbiAgfVxuXG4gIHNldCBzZWxlY3RlZE9wdGlvbihpZCkge1xuICAgIGlmKGlkICE9IHRoaXMuI19zZWxlY3RlZE9wdGlvbikge1xuICAgICAgdGhpcy4jX3NlbGVjdGVkT3B0aW9uID0gaWQ7XG4gICAgICB0aGlzLnJlYWN0b3IuZGlzcGF0Y2hFdmVudChcIm9uQ2hhbmdlXCIsIHRoaXMpO1xuICAgIH1cbiAgfVxuXG4gIGFkZChjb21wb25lbnQpIHtcbiAgICBzdXBlci5hZGQoY29tcG9uZW50KTtcblxuICAgIGNvbXBvbmVudC5hZGRDbGlja0FjdGlvbigoKSA9PiB7XG4gICAgICB0aGlzLiNfc2VsZWN0ZWRPcHRpb24gPSB0aGlzLmdldENvbXBvbmVudElkKGNvbXBvbmVudCk7XG4gICAgICB0aGlzLnNlbGVjdGVkID0gZmFsc2U7XG4gICAgICB0aGlzLmhpZGRlbiA9IHRydWU7XG4gICAgICBpZih0aGlzLnNlbGVjdCkgdGhpcy5zZWxlY3Quc2VsZWN0ZWQgPSBmYWxzZTtcbiAgICB9KTtcbiAgfVxuXG4gIGdldCBkZWZhdWx0U3R5bGUoKSB7XG4gICAgcmV0dXJuIG5ldyBTdHlsZSh7XG4gICAgICBcInBhZGRpbmdcIjogMCxcbiAgICAgIFwic3BhY2VCZXR3ZWVuQ29tcG9uZW50c1wiOiAwLFxuICAgICAgXCJiYWNrZ3JvdW5kQ29sb3JcIjogQ29uc3RhbnRzLlNldHRpbmcuU0VMRUNUX0RFRkFVTFRfQkFDS0dST1VORCxcbiAgICAgIFwiYmFja2dyb3VuZENvbG9ySG92ZXJcIjogbnVsbCxcbiAgICAgIFwiYmFja2dyb3VuZENvbG9yRG93blwiOiBudWxsLFxuICAgICAgXCJzY3JvbGxYRGlzYWJsZWRcIjogZmFsc2UsXG4gICAgICBcInNjcm9sbFlEaXNhYmxlZFwiOiBmYWxzZVxuICAgIH0pO1xuICB9XG5cbiAgZ2V0IGhpZGRlbigpIHtcbiAgICByZXR1cm4gc3VwZXIuaGlkZGVuIHx8ICh0aGlzLnNlbGVjdCAmJiAhdGhpcy5zZWxlY3Quc2VsZWN0ZWQpIHx8ICF0aGlzLnNlbGVjdDtcbiAgfVxuXG4gIHNldCBoaWRkZW4oaGlkZGVuKSB7XG4gICAgc3VwZXIuaGlkZGVuID0gaGlkZGVuO1xuICB9XG59IiwiLypcbiAqIENvcHlyaWdodCAoQykgMjAyMCBFbGlhc3RpayAoZWxpYXN0aWtzb2Z0cy5jb20pXG4gKlxuICogVGhpcyBmaWxlIGlzIHBhcnQgb2YgXCJKU0dhbWVUb29sc1wiLlxuICpcbiAqIFwiSlNHYW1lVG9vbHNcIiBpcyBmcmVlIHNvZnR3YXJlOiB5b3UgY2FuIHJlZGlzdHJpYnV0ZSBpdCBhbmQvb3IgbW9kaWZ5XG4gKiBpdCB1bmRlciB0aGUgdGVybXMgb2YgdGhlIEdOVSBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlIGFzIHB1Ymxpc2hlZCBieVxuICogdGhlIEZyZWUgU29mdHdhcmUgRm91bmRhdGlvbiwgZWl0aGVyIHZlcnNpb24gMyBvZiB0aGUgTGljZW5zZSwgb3JcbiAqIChhdCB5b3VyIG9wdGlvbikgYW55IGxhdGVyIHZlcnNpb24uXG4gKlxuICogXCJKU0dhbWVUb29sc1wiIGlzIGRpc3RyaWJ1dGVkIGluIHRoZSBob3BlIHRoYXQgaXQgd2lsbCBiZSB1c2VmdWwsXG4gKiBidXQgV0lUSE9VVCBBTlkgV0FSUkFOVFk7IHdpdGhvdXQgZXZlbiB0aGUgaW1wbGllZCB3YXJyYW50eSBvZlxuICogTUVSQ0hBTlRBQklMSVRZIG9yIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFLiAgU2VlIHRoZVxuICogR05VIEdlbmVyYWwgUHVibGljIExpY2Vuc2UgZm9yIG1vcmUgZGV0YWlscy5cbiAqXG4gKiBZb3Ugc2hvdWxkIGhhdmUgcmVjZWl2ZWQgYSBjb3B5IG9mIHRoZSBHTlUgR2VuZXJhbCBQdWJsaWMgTGljZW5zZVxuICogYWxvbmcgd2l0aCBcIkpTR2FtZVRvb2xzXCIuICBJZiBub3QsIHNlZSA8aHR0cDovL3d3dy5nbnUub3JnL2xpY2Vuc2VzLz4uXG4gKi9cbmltcG9ydCBDb25zdGFudHMgZnJvbSBcIi4vQ29uc3RhbnRzXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFN0eWxlIHtcbiAgI3N0eWxlcyA9IHt9O1xuICBjb21wb25lbnQ7XG5cbiAgY29uc3RydWN0b3Ioc3R5bGVzKSB7XG4gICAgdGhpcy5zZXRBbGwoc3R5bGVzKTtcbiAgfVxuXG4gIGdldCBmb250Q29sb3IoKSB7XG4gICAgcmV0dXJuIHRoaXMuI3N0eWxlcy5mb250Q29sb3I7XG4gIH1cblxuICBnZXQgZm9udENvbG9ySG92ZXIoKSB7XG4gICAgcmV0dXJuIHRoaXMuI3N0eWxlcy5mb250Q29sb3JIb3ZlcjtcbiAgfVxuXG4gIGdldCBmb250Q29sb3JEb3duKCkge1xuICAgIHJldHVybiB0aGlzLiNzdHlsZXMuZm9udENvbG9yRG93bjtcbiAgfVxuXG4gIGdldCBmb250RmFtaWx5KCkge1xuICAgIHJldHVybiB0aGlzLiNzdHlsZXMuZm9udEZhbWlseSAhPSBudWxsID8gdGhpcy4jc3R5bGVzLmZvbnRGYW1pbHkgOiBDb25zdGFudHMuU2V0dGluZy5GT05UX0ZBTUlMWTtcbiAgfVxuXG4gIGdldCBmb250U2l6ZSgpIHtcbiAgICByZXR1cm4gdGhpcy4jc3R5bGVzLmZvbnRTaXplICE9IG51bGwgPyB0aGlzLiNzdHlsZXMuZm9udFNpemUgOiBDb25zdGFudHMuU2V0dGluZy5GT05UX1NJWkU7XG4gIH1cblxuICBnZXQgYm9sZCgpIHtcbiAgICByZXR1cm4gdGhpcy4jc3R5bGVzLmJvbGQ7XG4gIH1cblxuICBnZXQgdW5kZXJsaW5lKCkge1xuICAgIHJldHVybiB0aGlzLiNzdHlsZXMudW5kZXJsaW5lO1xuICB9XG5cbiAgZ2V0IHdyYXAoKSB7XG4gICAgcmV0dXJuIHRoaXMuI3N0eWxlcy53cmFwO1xuICB9XG5cbiAgZ2V0IGJhY2tncm91bmRDb2xvcigpIHtcbiAgICByZXR1cm4gdGhpcy4jc3R5bGVzLmJhY2tncm91bmRDb2xvcjtcbiAgfVxuXG4gIGdldCBmb3JlZ3JvdW5kQ29sb3IoKSB7XG4gICAgcmV0dXJuIHRoaXMuI3N0eWxlcy5mb3JlZ3JvdW5kQ29sb3I7XG4gIH1cblxuICBnZXQgYmFja2dyb3VuZENvbG9ySG92ZXIoKSB7XG4gICAgcmV0dXJuIHRoaXMuI3N0eWxlcy5iYWNrZ3JvdW5kQ29sb3JIb3ZlcjtcbiAgfVxuXG4gIGdldCBiYWNrZ3JvdW5kQ29sb3JEb3duKCkge1xuICAgIHJldHVybiB0aGlzLiNzdHlsZXMuYmFja2dyb3VuZENvbG9yRG93bjtcbiAgfVxuXG4gIGdldCBib3JkZXJDb2xvcigpIHtcbiAgICByZXR1cm4gdGhpcy4jc3R5bGVzLmJvcmRlckNvbG9yO1xuICB9XG5cbiAgZ2V0IGJvcmRlckNvbG9ySG92ZXIoKSB7XG4gICAgcmV0dXJuIHRoaXMuI3N0eWxlcy5ib3JkZXJDb2xvckhvdmVyO1xuICB9XG5cbiAgZ2V0IGJvcmRlckNvbG9yRG93bigpIHtcbiAgICByZXR1cm4gdGhpcy4jc3R5bGVzLmJvcmRlckNvbG9yRG93bjtcbiAgfVxuXG4gIGdldCBib3JkZXJDb2xvclNlbGVjdGVkKCkge1xuICAgIHJldHVybiB0aGlzLiNzdHlsZXMuYm9yZGVyQ29sb3JTZWxlY3RlZCAhPSBudWxsID8gdGhpcy4jc3R5bGVzLmJvcmRlckNvbG9yU2VsZWN0ZWQgOiBDb25zdGFudHMuU2V0dGluZy5ERUZBVUxUX0JPUkRFUl9DT0xPUl9TRUxFQ1RFRDtcbiAgfVxuXG4gIGdldCBib3JkZXJTaXplKCkge1xuICAgIHJldHVybiB0aGlzLiNzdHlsZXMuYm9yZGVyU2l6ZSAhPSBudWxsID8gdGhpcy4jc3R5bGVzLmJvcmRlclNpemUgOiBDb25zdGFudHMuU2V0dGluZy5ERUZBVUxUX0JPUkRFUl9TSVpFO1xuICB9XG5cbiAgZ2V0IHNlbGVjdENvbG9yKCkge1xuICAgIHJldHVybiB0aGlzLiNzdHlsZXMuc2VsZWN0Q29sb3I7XG4gIH1cblxuICBnZXQgYWxpZ25lbWVudCgpIHtcbiAgICByZXR1cm4gdGhpcy4jc3R5bGVzLmFsaWduZW1lbnQ7XG4gIH1cblxuICBnZXQgdmVydGljYWxBbGlnbmVtZW50KCkge1xuICAgIHJldHVybiB0aGlzLiNzdHlsZXMudmVydGljYWxBbGlnbmVtZW50O1xuICB9XG5cbiAgZ2V0IGRpc2FibGVBbmltYXRpb24oKSB7XG4gICAgcmV0dXJuIHRoaXMuI3N0eWxlcy5kaXNhYmxlQW5pbWF0aW9uO1xuICB9XG5cbiAgZ2V0IHNjcm9sbFhEaXNhYmxlZCgpIHtcbiAgICByZXR1cm4gdGhpcy4jc3R5bGVzLnNjcm9sbFhEaXNhYmxlZDtcbiAgfVxuXG4gIGdldCBzY3JvbGxZRGlzYWJsZWQoKSB7XG4gICAgcmV0dXJuIHRoaXMuI3N0eWxlcy5zY3JvbGxZRGlzYWJsZWQ7XG4gIH1cblxuICBnZXQgcGFkZGluZygpIHtcbiAgICByZXR1cm4gdGhpcy4jc3R5bGVzLnBhZGRpbmcgIT0gbnVsbCA/IHRoaXMuI3N0eWxlcy5wYWRkaW5nIDogQ29uc3RhbnRzLlNldHRpbmcuREVGQVVMVF9QQURESU5HO1xuICB9XG5cbiAgZ2V0IHNwYWNlQmV0d2VlbkNvbXBvbmVudHMoKSB7XG4gICAgcmV0dXJuIHRoaXMuI3N0eWxlcy5zcGFjZUJldHdlZW5Db21wb25lbnRzICE9IG51bGwgPyB0aGlzLiNzdHlsZXMuc3BhY2VCZXR3ZWVuQ29tcG9uZW50cyA6IENvbnN0YW50cy5TZXR0aW5nLkRFRkFVTFRfU1BBQ0lORztcbiAgfVxuXG4gIGdldCBoaWRkZW4oKSB7XG4gICAgcmV0dXJuIHRoaXMuI3N0eWxlcy5oaWRkZW47XG4gIH1cblxuICBnZXQgYmx1ckJhY2tncm91bmQoKSB7XG4gICAgcmV0dXJuIHRoaXMuI3N0eWxlcy5ibHVyQmFja2dyb3VuZDtcbiAgfVxuXG4gIGdldCBsaW5lV2lkdGgoKSB7XG4gICAgcmV0dXJuIHRoaXMuI3N0eWxlcy5saW5lV2lkdGg7XG4gIH1cblxuICBnZXQgYW5pbWF0aW9uRHVyYXRpb24oKSB7XG4gICAgcmV0dXJuIHRoaXMuI3N0eWxlcy5hbmltYXRpb25EdXJhdGlvbiAhPSBudWxsID8gdGhpcy4jc3R5bGVzLmFuaW1hdGlvbkR1cmF0aW9uIDogQ29uc3RhbnRzLlNldHRpbmcuREVGQVVMVF9BTklNQVRJT05fRFVSQVRJT047XG4gIH1cblxuICBnZXQgZm9yZWdyb3VuZCgpIHtcbiAgICByZXR1cm4gdGhpcy4jc3R5bGVzLmZvcmVncm91bmQ7XG4gIH1cblxuICBnZXQgekluZGV4KCkge1xuICAgIHJldHVybiB0aGlzLiNzdHlsZXMuekluZGV4ICE9IG51bGwgPyB0aGlzLiNzdHlsZXMuekluZGV4IDogMDtcbiAgfVxuICBcbiAgZ2V0IGxpbmVDYXAoKSB7XG4gICAgcmV0dXJuIHRoaXMuI3N0eWxlcy5saW5lQ2FwO1xuICB9XG4gIFxuICBnZXQgZmlsbCgpIHtcbiAgICByZXR1cm4gdGhpcy4jc3R5bGVzLmZpbGw7XG4gIH1cblxuICBnZXQgZmlsbENvbG9yKCkge1xuICAgIHJldHVybiB0aGlzLiNzdHlsZXMuZmlsbENvbG9yO1xuICB9XG5cbiAgZ2V0IGNvbG9yKCkge1xuICAgIHJldHVybiB0aGlzLiNzdHlsZXMuY29sb3I7XG4gIH1cblxuICBnZXQgbW92YWJsZSgpIHtcbiAgICByZXR1cm4gdGhpcy4jc3R5bGVzLm1vdmFibGUgfHwgZmFsc2U7XG4gIH1cblxuICBzZXQoc3R5bGUsIHZhbHVlKSB7XG4gICAgaWYodGhpcy4jc3R5bGVzW3N0eWxlXSAhPSB2YWx1ZSkge1xuICAgICAgdGhpcy4jc3R5bGVzW3N0eWxlXSA9IHZhbHVlO1xuICAgICAgaWYodGhpcy5jb21wb25lbnQgJiYgdGhpcy5jb21wb25lbnQucmVhY3RvcikgdGhpcy5jb21wb25lbnQucmVhY3Rvci5kaXNwYXRjaEV2ZW50KFwib25DaGFuZ2VcIiwgdGhpcyk7XG4gICAgfVxuICB9XG5cbiAgc2V0QWxsKHN0eWxlcykge1xuICAgIGlmKHN0eWxlcykge1xuICAgICAgZm9yKGNvbnN0IHN0eWxlIGluIHN0eWxlcykge1xuICAgICAgICBpZihPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoc3R5bGVzLCBzdHlsZSkpIHtcbiAgICAgICAgICB0aGlzLnNldChzdHlsZSwgc3R5bGVzW3N0eWxlXSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBjb3B5KCkge1xuICAgIHJldHVybiBuZXcgU3R5bGUodGhpcy4jc3R5bGVzKTtcbiAgfVxuXG4gIGdldFN0eWxlcygpIHtcbiAgICBjb25zdCBzdHlsZXMgPSB7fTtcblxuICAgIGZvcihjb25zdCBzdHlsZSBpbiB0aGlzLiNzdHlsZXMpIHtcbiAgICAgIGlmKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbCh0aGlzLiNzdHlsZXMsIHN0eWxlKSkge1xuICAgICAgICBzdHlsZXNbc3R5bGVdID0gdGhpcy4jc3R5bGVzW3N0eWxlXTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gc3R5bGVzO1xuICB9XG59IiwiLypcbiAqIENvcHlyaWdodCAoQykgMjAyMCBFbGlhc3RpayAoZWxpYXN0aWtzb2Z0cy5jb20pXG4gKlxuICogVGhpcyBmaWxlIGlzIHBhcnQgb2YgXCJKU0dhbWVUb29sc1wiLlxuICpcbiAqIFwiSlNHYW1lVG9vbHNcIiBpcyBmcmVlIHNvZnR3YXJlOiB5b3UgY2FuIHJlZGlzdHJpYnV0ZSBpdCBhbmQvb3IgbW9kaWZ5XG4gKiBpdCB1bmRlciB0aGUgdGVybXMgb2YgdGhlIEdOVSBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlIGFzIHB1Ymxpc2hlZCBieVxuICogdGhlIEZyZWUgU29mdHdhcmUgRm91bmRhdGlvbiwgZWl0aGVyIHZlcnNpb24gMyBvZiB0aGUgTGljZW5zZSwgb3JcbiAqIChhdCB5b3VyIG9wdGlvbikgYW55IGxhdGVyIHZlcnNpb24uXG4gKlxuICogXCJKU0dhbWVUb29sc1wiIGlzIGRpc3RyaWJ1dGVkIGluIHRoZSBob3BlIHRoYXQgaXQgd2lsbCBiZSB1c2VmdWwsXG4gKiBidXQgV0lUSE9VVCBBTlkgV0FSUkFOVFk7IHdpdGhvdXQgZXZlbiB0aGUgaW1wbGllZCB3YXJyYW50eSBvZlxuICogTUVSQ0hBTlRBQklMSVRZIG9yIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFLiAgU2VlIHRoZVxuICogR05VIEdlbmVyYWwgUHVibGljIExpY2Vuc2UgZm9yIG1vcmUgZGV0YWlscy5cbiAqXG4gKiBZb3Ugc2hvdWxkIGhhdmUgcmVjZWl2ZWQgYSBjb3B5IG9mIHRoZSBHTlUgR2VuZXJhbCBQdWJsaWMgTGljZW5zZVxuICogYWxvbmcgd2l0aCBcIkpTR2FtZVRvb2xzXCIuICBJZiBub3QsIHNlZSA8aHR0cDovL3d3dy5nbnUub3JnL2xpY2Vuc2VzLz4uXG4gKi9cbmltcG9ydCBDb2wgZnJvbSBcIi4vQ29sXCI7XG5pbXBvcnQgQ29uc3RhbnRzIGZyb20gXCIuL0NvbnN0YW50c1wiO1xuaW1wb3J0IFN0eWxlIGZyb20gXCIuL1N0eWxlXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFRvb2x0aXAgZXh0ZW5kcyBDb2wge1xuICBzZWxlY3RhYmxlID0gZmFsc2U7XG4gIFxuICBjb25zdHJ1Y3RvcihzdHlsZSwgLi4uY29tcG9uZW50cykge1xuICAgIHN1cGVyKG51bGwsIG51bGwsIG51bGwsIG51bGwsIHN0eWxlLCAuLi5jb21wb25lbnRzKTtcbiAgICB0aGlzLmRpc2FibGVkID0gdHJ1ZTtcbiAgfVxuXG4gIGRyYXcoY29udGV4dCkge1xuICAgIGlmKHRoaXMuaGlkZGVuKSByZXR1cm47XG4gICAgY29uc3QgY2FudmFzID0gY29udGV4dC5jYW52YXM7XG4gICAgY29uc3QgY3R4ID0gY2FudmFzLmdldENvbnRleHQoXCIyZFwiKTtcbiAgICBjdHguc2F2ZSgpO1xuXG4gICAgaWYodGhpcy54ICsgdGhpcy53aWR0aCArIHRoaXMuc3R5bGUucGFkZGluZyA+IHRoaXMucGFyZW50LndpZHRoKSB7XG4gICAgICB0aGlzLnggLT0gKHRoaXMud2lkdGggKyB0aGlzLnN0eWxlLnBhZGRpbmcpO1xuICAgIH1cblxuICAgIGlmKHRoaXMueSArIHRoaXMuaGVpZ2h0ICsgdGhpcy5zdHlsZS5wYWRkaW5nID4gdGhpcy5wYXJlbnQuaGVpZ2h0KSB7XG4gICAgICB0aGlzLnkgLT0gKHRoaXMuaGVpZ2h0ICsgdGhpcy5zdHlsZS5wYWRkaW5nKTtcbiAgICB9XG5cbiAgICBzdXBlci5kcmF3KGN0eCk7XG4gICAgXG4gICAgY3R4LnJlc3RvcmUoKTtcbiAgfVxuXG4gIGdldCB3aWR0aCgpIHtcbiAgICByZXR1cm4gc3VwZXIud2lkdGggKyB0aGlzLnN0eWxlLnBhZGRpbmc7XG4gIH1cblxuICBnZXQgaGVpZ2h0KCkge1xuICAgIHJldHVybiBzdXBlci5oZWlnaHQgKyB0aGlzLnN0eWxlLnBhZGRpbmc7XG4gIH1cblxuICBzZXQgd2lkdGgod2lkdGgpIHtcbiAgICBzdXBlci53aWR0aCA9IHdpZHRoO1xuICB9XG5cbiAgc2V0IGhlaWdodChoZWlnaHQpIHtcbiAgICBzdXBlci5oZWlnaHQgPSBoZWlnaHQ7XG4gIH1cblxuICBnZXQgZGVmYXVsdFN0eWxlKCkge1xuICAgIHJldHVybiBuZXcgU3R5bGUoe1xuICAgICAgXCJiYWNrZ3JvdW5kQ29sb3JcIjogQ29uc3RhbnRzLlNldHRpbmcuVE9PTFRJUF9ERUZBVUxUX0JBQ0tHUk9VTkRcbiAgICB9KTtcbiAgfVxuXG4gIGNvbXBhcmVUb0NvbXBvbmVudChvdGhlckNvbXBvbmVudCkge1xuICAgIHJldHVybiBvdGhlckNvbXBvbmVudC5jb21wYXJlVG9Ub29sdGlwKHRoaXMpO1xuICB9XG5cbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVudXNlZC12YXJzXG4gIGNvbXBhcmVUb01lbnUob3RoZXJDb21wb25lbnQpIHtcbiAgICByZXR1cm4gMTtcbiAgfVxuXG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bnVzZWQtdmFyc1xuICBjb21wYXJlVG9Ub29sdGlwKG90aGVyQ29tcG9uZW50KSB7XG4gICAgcmV0dXJuIDA7XG4gIH1cblxuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdW51c2VkLXZhcnNcbiAgY29tcGFyZVRvTm90aWZpY2F0aW9uKG90aGVyQ29tcG9uZW50KSB7XG4gICAgcmV0dXJuIDE7XG4gIH1cblxuICBnZXQgaGlkZGVuKCkge1xuICAgIHJldHVybiBzdXBlci5oaWRkZW4gfHwgdGhpcy5kaXNhYmxlZDtcbiAgfVxuXG4gIHNldCBoaWRkZW4oaGlkZGVuKSB7XG4gICAgc3VwZXIuaGlkZGVuID0gaGlkZGVuO1xuICAgIHRoaXMuZGlzYWJsZWQgPSBoaWRkZW47XG4gIH1cbn0iLCIvKlxuICogQ29weXJpZ2h0IChDKSAyMDIwIEVsaWFzdGlrIChlbGlhc3Rpa3NvZnRzLmNvbSlcbiAqXG4gKiBUaGlzIGZpbGUgaXMgcGFydCBvZiBcIkpTR2FtZVRvb2xzXCIuXG4gKlxuICogXCJKU0dhbWVUb29sc1wiIGlzIGZyZWUgc29mdHdhcmU6IHlvdSBjYW4gcmVkaXN0cmlidXRlIGl0IGFuZC9vciBtb2RpZnlcbiAqIGl0IHVuZGVyIHRoZSB0ZXJtcyBvZiB0aGUgR05VIEdlbmVyYWwgUHVibGljIExpY2Vuc2UgYXMgcHVibGlzaGVkIGJ5XG4gKiB0aGUgRnJlZSBTb2Z0d2FyZSBGb3VuZGF0aW9uLCBlaXRoZXIgdmVyc2lvbiAzIG9mIHRoZSBMaWNlbnNlLCBvclxuICogKGF0IHlvdXIgb3B0aW9uKSBhbnkgbGF0ZXIgdmVyc2lvbi5cbiAqXG4gKiBcIkpTR2FtZVRvb2xzXCIgaXMgZGlzdHJpYnV0ZWQgaW4gdGhlIGhvcGUgdGhhdCBpdCB3aWxsIGJlIHVzZWZ1bCxcbiAqIGJ1dCBXSVRIT1VUIEFOWSBXQVJSQU5UWTsgd2l0aG91dCBldmVuIHRoZSBpbXBsaWVkIHdhcnJhbnR5IG9mXG4gKiBNRVJDSEFOVEFCSUxJVFkgb3IgRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UuICBTZWUgdGhlXG4gKiBHTlUgR2VuZXJhbCBQdWJsaWMgTGljZW5zZSBmb3IgbW9yZSBkZXRhaWxzLlxuICpcbiAqIFlvdSBzaG91bGQgaGF2ZSByZWNlaXZlZCBhIGNvcHkgb2YgdGhlIEdOVSBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlXG4gKiBhbG9uZyB3aXRoIFwiSlNHYW1lVG9vbHNcIi4gIElmIG5vdCwgc2VlIDxodHRwOi8vd3d3LmdudS5vcmcvbGljZW5zZXMvPi5cbiAqL1xuaW1wb3J0IENvbXBvbmVudCBmcm9tIFwiLi9Db21wb25lbnRcIjtcbmltcG9ydCBDb25zdGFudHMgZnJvbSBcIi4vQ29uc3RhbnRzXCI7XG5pbXBvcnQgVXRpbHMgZnJvbSBcIi4vVXRpbHNcIjtcbmltcG9ydCBTdHlsZSBmcm9tIFwiLi9TdHlsZVwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBUcmlhbmdsZSBleHRlbmRzIENvbXBvbmVudCB7XG4gIHNlbGVjdGFibGUgPSBmYWxzZTtcblxuICBjb25zdHJ1Y3Rvcih4LCB5LCB3aWR0aCwgaGVpZ2h0LCBzdHlsZSkge1xuICAgIHN1cGVyKHgsIHksIHdpZHRoLCBoZWlnaHQsIHN0eWxlKTtcbiAgfVxuXG4gIGRyYXcoY29udGV4dCkge1xuICAgIGlmKHRoaXMuaGlkZGVuKSByZXR1cm47XG4gICAgc3VwZXIuZHJhdyhjb250ZXh0KTtcblxuICAgIGNvbnN0IGNhbnZhcyA9IGNvbnRleHQuY2FudmFzO1xuICAgIGNvbnN0IGN0eCA9IGNhbnZhcy5nZXRDb250ZXh0KFwiMmRcIik7XG4gICAgXG4gICAgVXRpbHMuZHJhd1RyaWFuZ2xlKGN0eCwgdGhpcy54LCB0aGlzLnksIHRoaXMud2lkdGgsIHRoaXMuaGVpZ2h0LCB0aGlzLnN0eWxlLmxpbmVXaWR0aCwgdGhpcy5zdHlsZS5jb2xvciwgdGhpcy5zdHlsZS5saW5lQ2FwLCB0aGlzLnN0eWxlLmZpbGwsIHRoaXMuc3R5bGUuZmlsbENvbG9yKTtcblxuICAgIHRoaXMuaW5pdCA9IHRydWU7XG4gIH1cblxuICBnZXQgd2lkdGgoKSB7XG4gICAgcmV0dXJuIHN1cGVyLndpZHRoICsgdGhpcy5zdHlsZS5saW5lV2lkdGg7XG4gIH1cblxuICBnZXQgaGVpZ2h0KCkge1xuICAgIHJldHVybiBzdXBlci5oZWlnaHQgKyB0aGlzLnN0eWxlLmxpbmVXaWR0aDtcbiAgfVxuXG4gIHNldCB3aWR0aCh3aWR0aCkge1xuICAgIHN1cGVyLndpZHRoID0gd2lkdGg7XG4gIH1cblxuICBzZXQgaGVpZ2h0KGhlaWdodCkge1xuICAgIHN1cGVyLmhlaWdodCA9IGhlaWdodDtcbiAgfVxuXG4gIGdldCBkZWZhdWx0U3R5bGUoKSB7XG4gICAgcmV0dXJuIG5ldyBTdHlsZSh7XG4gICAgICBcImxpbmVXaWR0aFwiOiBDb25zdGFudHMuU2V0dGluZy5UUklBTkdMRV9ERUZBVUxUX0xJTkVfU0laRSxcbiAgICAgIFwiY29sb3JcIjogQ29uc3RhbnRzLlNldHRpbmcuVFJJQU5HTEVfREVGQVVMVF9DT0xPUixcbiAgICAgIFwiZmlsbFwiOiBDb25zdGFudHMuU2V0dGluZy5UUklBTkdMRV9ERUZBVUxUX0ZJTEwsXG4gICAgICBcImxpbmVDYXBcIjogQ29uc3RhbnRzLlNldHRpbmcuVFJJQU5HTEVfREVGQVVMVF9MSU5FX0NBUCxcbiAgICAgIFwiZmlsbENvbG9yXCI6IENvbnN0YW50cy5TZXR0aW5nLlRSSUFOR0xFX0RFRkFVTFRfRklMTF9DT0xPUlxuICAgIH0pO1xuICB9XG59IiwiLypcbiAqIENvcHlyaWdodCAoQykgMjAyMCBFbGlhc3RpayAoZWxpYXN0aWtzb2Z0cy5jb20pXG4gKlxuICogVGhpcyBmaWxlIGlzIHBhcnQgb2YgXCJKU0dhbWVUb29sc1wiLlxuICpcbiAqIFwiSlNHYW1lVG9vbHNcIiBpcyBmcmVlIHNvZnR3YXJlOiB5b3UgY2FuIHJlZGlzdHJpYnV0ZSBpdCBhbmQvb3IgbW9kaWZ5XG4gKiBpdCB1bmRlciB0aGUgdGVybXMgb2YgdGhlIEdOVSBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlIGFzIHB1Ymxpc2hlZCBieVxuICogdGhlIEZyZWUgU29mdHdhcmUgRm91bmRhdGlvbiwgZWl0aGVyIHZlcnNpb24gMyBvZiB0aGUgTGljZW5zZSwgb3JcbiAqIChhdCB5b3VyIG9wdGlvbikgYW55IGxhdGVyIHZlcnNpb24uXG4gKlxuICogXCJKU0dhbWVUb29sc1wiIGlzIGRpc3RyaWJ1dGVkIGluIHRoZSBob3BlIHRoYXQgaXQgd2lsbCBiZSB1c2VmdWwsXG4gKiBidXQgV0lUSE9VVCBBTlkgV0FSUkFOVFk7IHdpdGhvdXQgZXZlbiB0aGUgaW1wbGllZCB3YXJyYW50eSBvZlxuICogTUVSQ0hBTlRBQklMSVRZIG9yIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFLiAgU2VlIHRoZVxuICogR05VIEdlbmVyYWwgUHVibGljIExpY2Vuc2UgZm9yIG1vcmUgZGV0YWlscy5cbiAqXG4gKiBZb3Ugc2hvdWxkIGhhdmUgcmVjZWl2ZWQgYSBjb3B5IG9mIHRoZSBHTlUgR2VuZXJhbCBQdWJsaWMgTGljZW5zZVxuICogYWxvbmcgd2l0aCBcIkpTR2FtZVRvb2xzXCIuICBJZiBub3QsIHNlZSA8aHR0cDovL3d3dy5nbnUub3JnL2xpY2Vuc2VzLz4uXG4gKi9cbmltcG9ydCBDb25zdGFudHMgZnJvbSBcIi4vQ29uc3RhbnRzXCI7XG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgcHJlUmVuZGVyZWRGb250OiB7fSxcbiAgbGFzdEtleTogLTEsXG4gIHByZVJlbmRlckZvbnQ6IGZ1bmN0aW9uKGNhcnMsIHNpemUsIGNvbG9yLCBmb250RmFtaWx5KSB7XG4gICAgY2Fycy5wdXNoKFwiP1wiKTsgY2Fycy5wdXNoKFwiIFwiKTsgY2Fycy5wdXNoKFwiQVwiKTtcbiAgICBcbiAgICBmb3IobGV0IGkgPSAwOyBpIDwgY2Fycy5sZW5ndGg7IGkrKykge1xuICAgICAgY29uc3QgY2FudmFzVG1wID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImNhbnZhc1wiKTtcbiAgICAgIGNvbnN0IGN0eFRtcCA9IGNhbnZhc1RtcC5nZXRDb250ZXh0KFwiMmRcIik7XG4gICAgICBjdHhUbXAuZm9udCA9IHNpemUgKyBcInB4IFwiICsgZm9udEZhbWlseTtcbiAgICAgIGNvbnN0IHdpZHRoID0gY3R4VG1wLm1lYXN1cmVUZXh0KGNhcnNbaV0pLndpZHRoO1xuICAgICAgXG4gICAgICBjYW52YXNUbXAud2lkdGggPSB3aWR0aDtcbiAgICAgIGNhbnZhc1RtcC5oZWlnaHQgPSBzaXplICsgKHNpemUgLyA2KTtcbiAgICAgIFxuICAgICAgY3R4VG1wLmZvbnQgPSBzaXplICsgXCJweCBcIiArIGZvbnRGYW1pbHk7XG4gICAgICBjdHhUbXAuZmlsbFN0eWxlID0gY29sb3I7XG4gICAgICBjdHhUbXAudGV4dEJhc2VsaW5lID0gXCJ0b3BcIjtcbiAgICAgIGN0eFRtcC5maWxsVGV4dChjYXJzW2ldLCAwLCAwKTtcbiAgICAgIFxuICAgICAgdGhpcy5wcmVSZW5kZXJlZEZvbnRbY2Fyc1tpXV0gPSBjYW52YXNUbXA7XG4gICAgfVxuICB9LFxuICBkcmF3SW1hZ2U6IGZ1bmN0aW9uKGN0eCwgaW1hZ2UsIHgsIHksIHdpZHRoLCBoZWlnaHQsIHN4LCBzeSwgc1dpZHRoLCBzSGVpZ2h0LCBlcmFzZUJlbG93LCBkZWdyZWVzKSB7XG4gICAgdGhpcy5kcmF3SW1hZ2VXcmFwcGVyKGN0eCwgaW1hZ2UsIHgsIHksIHdpZHRoLCBoZWlnaHQsIHN4LCBzeSwgc1dpZHRoLCBzSGVpZ2h0LCBlcmFzZUJlbG93LCBkZWdyZWVzKTtcbiAgfSxcbiAgZHJhd0ltYWdlRGF0YTogZnVuY3Rpb24oY3R4LCBpbWFnZURhdGEsIHgsIHksIHdpZHRoLCBoZWlnaHQsIHN4LCBzeSwgc1dpZHRoLCBzSGVpZ2h0LCBlcmFzZUJlbG93LCBkZWdyZWVzKSB7XG4gICAgdGhpcy5kcmF3SW1hZ2VXcmFwcGVyKGN0eCwgaW1hZ2VEYXRhLCB4LCB5LCB3aWR0aCwgaGVpZ2h0LCBzeCwgc3ksIHNXaWR0aCwgc0hlaWdodCwgZXJhc2VCZWxvdywgZGVncmVlcyk7XG4gIH0sXG4gIGRyYXdJbWFnZVdyYXBwZXI6IGZ1bmN0aW9uKGN0eCwgaW1hZ2UsIHgsIHksIHdpZHRoLCBoZWlnaHQsIHN4LCBzeSwgc1dpZHRoLCBzSGVpZ2h0LCBlcmFzZUJlbG93LCBkZWdyZWVzKSB7XG4gICAgeCA9ICh4ID09IHVuZGVmaW5lZCB8fCBpc05hTih4KSkgPyBudWxsIDogTWF0aC5yb3VuZCh4KTtcbiAgICB5ID0gKHkgPT0gdW5kZWZpbmVkIHx8IGlzTmFOKHkpKSA/IG51bGwgOiBNYXRoLnJvdW5kKHkpO1xuICAgIHdpZHRoID0gKHdpZHRoID09IHVuZGVmaW5lZCB8fCBpc05hTih3aWR0aCkpID8gbnVsbCA6IE1hdGgucm91bmQod2lkdGgpO1xuICAgIGhlaWdodCA9IChoZWlnaHQgPT0gdW5kZWZpbmVkIHx8IGlzTmFOKGhlaWdodCkpID8gbnVsbCA6IE1hdGgucm91bmQoaGVpZ2h0KTtcbiAgICBzeCA9IChzeCA9PSB1bmRlZmluZWQgfHwgaXNOYU4oc3gpKSA/IG51bGwgOiBNYXRoLnJvdW5kKHN4KTtcbiAgICBzeSA9IChzeSA9PSB1bmRlZmluZWQgfHwgaXNOYU4oc3kpKSA/IG51bGwgOiBNYXRoLnJvdW5kKHN5KTtcbiAgICBzV2lkdGggPSAoc1dpZHRoID09IHVuZGVmaW5lZCB8fCBpc05hTihzV2lkdGgpKSA/IG51bGwgOiBNYXRoLnJvdW5kKHNXaWR0aCk7XG4gICAgc0hlaWdodCA9IChzSGVpZ2h0ID09IHVuZGVmaW5lZCB8fCBpc05hTihzSGVpZ2h0KSkgPyBudWxsIDogTWF0aC5yb3VuZChzSGVpZ2h0KTtcbiAgICBlcmFzZUJlbG93ID0gZXJhc2VCZWxvdyA9PSB1bmRlZmluZWQgPyBmYWxzZSA6IGVyYXNlQmVsb3c7XG4gICAgZGVncmVlcyA9IChkZWdyZWVzID09IHVuZGVmaW5lZCB8fCBpc05hTihkZWdyZWVzKSkgPyBudWxsIDogZGVncmVlcztcbiAgXG4gICAgaWYoZGVncmVlcyAhPSB1bmRlZmluZWQpIHtcbiAgICAgIGN0eC5zYXZlKCk7XG4gICAgICBjdHgudHJhbnNsYXRlKHggKyB3aWR0aCAvIDIsIHkgKyBoZWlnaHQgLyAyKTtcbiAgICAgIGN0eC5yb3RhdGUoZGVncmVlcyAqIE1hdGguUEkgLyAxODApO1xuICAgICAgeCA9IC0od2lkdGggLyAyKTtcbiAgICAgIHkgPSAtKGhlaWdodCAvIDIpO1xuICAgIH1cbiAgXG4gICAgaWYoZXJhc2VCZWxvdykge1xuICAgICAgY3R4LmNsZWFyUmVjdCh4LCB5LCB3aWR0aCwgaGVpZ2h0KTtcbiAgICB9XG4gIFxuICAgIGlmKGN0eCAhPSB1bmRlZmluZWQgJiYgaW1hZ2UgIT0gdW5kZWZpbmVkKSB7XG4gICAgICBpZihpbWFnZS53aWR0aCA+IDAgJiYgaW1hZ2UuaGVpZ2h0ID4gMCkge1xuICAgICAgICBpZihzeCAhPSB1bmRlZmluZWQgJiYgc3kgIT0gdW5kZWZpbmVkICYmIHNXaWR0aCAhPSB1bmRlZmluZWQgJiYgc0hlaWdodCAhPSB1bmRlZmluZWQpIHtcbiAgICAgICAgICBjdHguZHJhd0ltYWdlKGltYWdlLCBzeCwgc3ksIHNXaWR0aCwgc0hlaWdodCwgeCwgeSwgd2lkdGgsIGhlaWdodCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgY3R4LmRyYXdJbWFnZShpbWFnZSwgeCwgeSwgd2lkdGgsIGhlaWdodCk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIFxuICAgIGlmKGRlZ3JlZXMgIT0gdW5kZWZpbmVkKSB7XG4gICAgICBjdHgucmVzdG9yZSgpO1xuICAgIH1cbiAgfSxcbiAgZHJhd1RleHQ6IGZ1bmN0aW9uKGN0eCwgdGV4dCwgY29sb3IsIHNpemUsIGZvbnRGYW1pbHksIGFsaWduZW1lbnQsIHZlcnRpY2FsQWxpZ25lbWVudCwgeCwgeSwgd3JhcCwgYm9sZCwgdW5kZXJsaW5lLCB0ZXh0QmFzZWxpbmUsIHBhcmVudCkge1xuICAgIGlmKGN0eCkge1xuICAgICAgY3R4LnNhdmUoKTtcblxuICAgICAgaWYoIUFycmF5LmlzQXJyYXkoY29sb3IpKSB7XG4gICAgICAgIGN0eC5maWxsU3R5bGUgPSBjb2xvcjtcbiAgICAgICAgY3R4LnN0cm9rZVN0eWxlID0gY29sb3I7XG4gICAgICB9XG4gIFxuICAgICAgY3R4LmZvbnQgPSAoYm9sZCA/IFwiYm9sZCBcIiA6IFwiXCIpICsgc2l6ZSArIFwicHggXCIgKyBmb250RmFtaWx5O1xuICAgICAgY3R4LnRleHRCYXNlbGluZSA9IHRleHRCYXNlbGluZSB8fCBcImJvdHRvbVwiO1xuICAgICAgY3R4LmZpbHRlciA9IFwibm9uZVwiO1xuICBcbiAgICAgIGlmKHdyYXApIHtcbiAgICAgICAgdGV4dCA9IHRoaXMud3JhcFRleHRMaW5lcyhjdHgsIHRleHQpW1widGV4dFwiXTtcbiAgICAgIH1cbiAgICAgIFxuICAgICAgY29uc3QgbGluZXMgPSB0ZXh0LnNwbGl0KFwiXFxuXCIpO1xuICAgICAgbGV0IG1heFdpZHRoID0gMDtcbiAgICAgIGxldCB4Q3VycmVudCA9IE1hdGgucm91bmQoeCk7XG4gICAgICBsZXQgeUN1cnJlbnQgPSBNYXRoLnJvdW5kKHkpICsgc2l6ZTtcbiAgICAgIGxldCB5Rmlyc3QgPSAwO1xuXG4gICAgICBpZigheSkge1xuICAgICAgICBpZih2ZXJ0aWNhbEFsaWduZW1lbnQgPT0gQ29uc3RhbnRzLlZlcnRpY2FsQWxpZ25lbWVudC5DRU5URVIpIHtcbiAgICAgICAgICB5Q3VycmVudCArPSBNYXRoLnJvdW5kKCgocGFyZW50ICYmIHBhcmVudC5oZWlnaHQgPyBwYXJlbnQuaGVpZ2h0IDogdGhpcy5nZXRDYW52YXNIZWlnaHQoY3R4LmNhbnZhcykpIC8gMikgLSAoc2l6ZSAqIGxpbmVzLmxlbmd0aCAvIDIpKTtcbiAgICAgICAgfSBlbHNlIGlmKHZlcnRpY2FsQWxpZ25lbWVudCA9PSBDb25zdGFudHMuVmVydGljYWxBbGlnbmVtZW50LkJPVFRPTSkge1xuICAgICAgICAgIHlDdXJyZW50ICs9IE1hdGgucm91bmQoKChwYXJlbnQgJiYgcGFyZW50LmhlaWdodCA/IHBhcmVudC5oZWlnaHQgOiB0aGlzLmdldENhbnZhc0hlaWdodChjdHguY2FudmFzKSkpIC0gKHNpemUgKiBsaW5lcy5sZW5ndGgpIC8gMiAtIHNpemUgLyA1KTtcbiAgICAgICAgfVxuICAgICAgfVxuICBcbiAgICAgIGZvcihsZXQgaSA9IDA7IGkgPCBsaW5lcy5sZW5ndGg7IGkrKykge1xuICAgICAgICBjb25zdCBjdXJyZW50VGV4dCA9IGxpbmVzW2ldO1xuICAgICAgICBjb25zdCBjdXJyZW50V2lkdGggPSBjdHgubWVhc3VyZVRleHQoY3VycmVudFRleHQpLndpZHRoO1xuICBcbiAgICAgICAgaWYoQXJyYXkuaXNBcnJheShjb2xvcikpIHtcbiAgICAgICAgICBsZXQgY29sb3JJbmRleCA9IGk7XG4gIFxuICAgICAgICAgIGlmKGNvbG9ySW5kZXggPiBjb2xvci5sZW5ndGggLSAxKSB7XG4gICAgICAgICAgICBjb2xvckluZGV4ID0gY29sb3IubGVuZ3RoIC0gMTtcbiAgICAgICAgICB9XG4gIFxuICAgICAgICAgIGN0eC5maWxsU3R5bGUgPSBjb2xvcltjb2xvckluZGV4XTtcbiAgICAgICAgICBjdHguc3Ryb2tlU3R5bGUgPSBjb2xvcltjb2xvckluZGV4XTtcbiAgICAgICAgfVxuICBcbiAgICAgICAgaWYoYWxpZ25lbWVudCA9PSBDb25zdGFudHMuQWxpZ25lbWVudC5DRU5URVIpIHtcbiAgICAgICAgICB4Q3VycmVudCA9IE1hdGgucm91bmQoKHBhcmVudCAmJiBwYXJlbnQueCA/IHBhcmVudC54IDogMCkpICsgTWF0aC5yb3VuZCgoKHBhcmVudCAmJiBwYXJlbnQud2lkdGggPyBwYXJlbnQud2lkdGggOiB0aGlzLmdldENhbnZhc1dpZHRoKGN0eC5jYW52YXMpKSAvIDIpIC0gKGN0eC5tZWFzdXJlVGV4dChjdXJyZW50VGV4dCkud2lkdGggLyAyKSk7XG4gICAgICAgIH0gZWxzZSBpZihhbGlnbmVtZW50ID09IENvbnN0YW50cy5BbGlnbmVtZW50LlJJR0hUKSB7XG4gICAgICAgICAgeEN1cnJlbnQgPSBNYXRoLnJvdW5kKChwYXJlbnQgJiYgcGFyZW50LnggPyBwYXJlbnQueCA6IDApKSArIE1hdGgucm91bmQoKHBhcmVudCAmJiBwYXJlbnQud2lkdGggPyBwYXJlbnQud2lkdGggOiB0aGlzLmdldENhbnZhc1dpZHRoKGN0eC5jYW52YXMpKSAtIChjdHgubWVhc3VyZVRleHQoY3VycmVudFRleHQpLndpZHRoKSAtIChwYXJlbnQgJiYgcGFyZW50LnNwYWNlQmV0d2VlbkNvbXBvbmVudHMgPyBwYXJlbnQuc3BhY2VCZXR3ZWVuQ29tcG9uZW50cyA6IENvbnN0YW50cy5TZXR0aW5nLkRFRkFVTFRfU1BBQ0lORykpO1xuICAgICAgICB9XG5cbiAgICAgICAgY3R4LmZpbGxUZXh0KGN1cnJlbnRUZXh0LCB4Q3VycmVudCwgeUN1cnJlbnQpO1xuICBcbiAgICAgICAgaWYodW5kZXJsaW5lKSB7XG4gICAgICAgICAgY3R4LmxpbmVXaWR0aCA9IDE7XG4gICAgICAgICAgY3R4LmJlZ2luUGF0aCgpO1xuICAgICAgICAgIGN0eC5tb3ZlVG8oeEN1cnJlbnQsIHlDdXJyZW50IC0gMik7XG4gICAgICAgICAgY3R4LmxpbmVUbyhNYXRoLnJvdW5kKHhDdXJyZW50ICsgY3VycmVudFdpZHRoKSwgeUN1cnJlbnQgLSAyKTtcbiAgICAgICAgICBjdHguc3Ryb2tlKCk7XG4gICAgICAgIH1cbiAgXG4gICAgICAgIGlmKGN1cnJlbnRXaWR0aCA+IG1heFdpZHRoKSBtYXhXaWR0aCA9IGN1cnJlbnRXaWR0aDtcbiAgICAgICAgaWYoaSA9PSAwKSB5Rmlyc3QgPSB5Q3VycmVudDtcblxuICAgICAgICB5Q3VycmVudCArPSBzaXplO1xuICAgICAgfVxuICBcbiAgICAgIGN0eC5yZXN0b3JlKCk7XG4gIFxuICAgICAgcmV0dXJuIHtcbiAgICAgICAgeDogeEN1cnJlbnQsXG4gICAgICAgIHk6IHlGaXJzdCxcbiAgICAgICAgaGVpZ2h0OiBzaXplICogbGluZXMubGVuZ3RoLFxuICAgICAgICB3aWR0aDogbWF4V2lkdGhcbiAgICAgIH07XG4gICAgfVxuICB9LFxuICB3cmFwVGV4dDogZnVuY3Rpb24odGV4dCwgbGltaXQpIHtcbiAgICBpZih0ZXh0Lmxlbmd0aCA+IGxpbWl0KSB7XG4gICAgICBsZXQgcCA9IGxpbWl0O1xuXG4gICAgICBmb3IoOyBwID4gMCAmJiB0ZXh0W3BdICE9IFwiIFwiOyBwLS0pO1xuXG4gICAgICBpZihwID4gMCkge1xuICAgICAgICBjb25zdCBsZWZ0ID0gdGV4dC5zdWJzdHJpbmcoMCwgcCk7XG4gICAgICAgIGNvbnN0IHJpZ2h0ID0gdGV4dC5zdWJzdHJpbmcocCArIDEpO1xuICAgICAgICByZXR1cm4gbGVmdCArIFwiXFxuXCIgKyB0aGlzLndyYXBUZXh0KHJpZ2h0LCBsaW1pdCk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHRleHQ7XG4gIH0sXG4gIHdyYXBUZXh0TGluZXM6IGZ1bmN0aW9uKGN0eCwgdGV4dCwgd2lkdGgsIGZvbnRTaXplLCBmb250RmFtaWx5LCBkaXNhYmxlV3JhcCkge1xuICAgIGlmKGN0eCAmJiB0ZXh0KSB7XG4gICAgICBjdHguc2F2ZSgpO1xuICAgICAgY3R4LmZvbnQgPSBNYXRoLnJvdW5kKGZvbnRTaXplKSArIFwicHggXCIgKyBmb250RmFtaWx5O1xuICAgICAgY3R4LmltYWdlU21vb3RoaW5nRW5hYmxlZCA9IGZhbHNlO1xuICBcbiAgICAgIGNvbnN0IGxpbmVzID0gdGV4dC5zcGxpdChcIlxcblwiKTtcbiAgICAgIGxldCBuZXdUZXh0ID0gXCJcIjtcbiAgICAgIGNvbnN0IHdpZHRoQ2FyID0gd2lkdGggfHwgY3R4Lm1lYXN1cmVUZXh0KFwiQVwiKS53aWR0aDtcbiAgICAgIGNvbnN0IG5iQ2FyTGluZSA9IE1hdGgucm91bmQodGhpcy5nZXRDYW52YXNXaWR0aChjdHguY2FudmFzKSAvIHdpZHRoQ2FyKTtcbiAgXG4gICAgICBsZXQgaGVpZ2h0VG90YWwgPSAwO1xuICAgICAgbGV0IG1heFdpZHRoID0gMDtcbiAgXG4gICAgICBmb3IobGV0IGkgPSAwOyBpIDwgbGluZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgY29uc3QgbGluZVdyYXAgPSBkaXNhYmxlV3JhcCA/IGxpbmVzW2ldIDogdGhpcy53cmFwVGV4dChsaW5lc1tpXSwgbmJDYXJMaW5lKTtcbiAgICAgICAgbmV3VGV4dCArPSBsaW5lV3JhcDtcbiAgXG4gICAgICAgIGlmKGkgPCBsaW5lcy5sZW5ndGggLSAxKSB7XG4gICAgICAgICAgbmV3VGV4dCArPSBcIlxcblwiO1xuICAgICAgICB9XG4gIFxuICAgICAgICBmb3IobGV0IGogPSAwOyBqIDwgbGluZVdyYXAuc3BsaXQoXCJcXG5cIikubGVuZ3RoOyBqKyspIHtcbiAgICAgICAgICBjb25zdCB3aWR0aFRleHQgPSBjdHgubWVhc3VyZVRleHQobGluZVdyYXAuc3BsaXQoXCJcXG5cIilbal0pLndpZHRoO1xuICAgICAgICAgIGhlaWdodFRvdGFsICs9IGZvbnRTaXplO1xuICAgICAgICAgIGlmKHdpZHRoVGV4dCA+IG1heFdpZHRoKSBtYXhXaWR0aCA9IHdpZHRoVGV4dDtcbiAgICAgICAgfVxuICAgICAgfVxuICBcbiAgICAgIGN0eC5yZXN0b3JlKCk7XG5cbiAgICAgIHJldHVybiB7XG4gICAgICAgIHRleHQ6IG5ld1RleHQsXG4gICAgICAgIGhlaWdodDogaGVpZ2h0VG90YWwsXG4gICAgICAgIHdpZHRoOiBtYXhXaWR0aCxcbiAgICAgICAgY2FyV2lkdGg6IHdpZHRoQ2FyXG4gICAgICB9O1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICB0ZXh0OiBcIlwiLFxuICAgICAgICBoZWlnaHQ6IDAsXG4gICAgICAgIHdpZHRoOiAwLFxuICAgICAgICBjYXJXaWR0aDogMFxuICAgICAgfTtcbiAgICB9XG4gIH0sXG4gIGRyYXdBcnJvdzogZnVuY3Rpb24oY3R4LCBmcm9teCwgZnJvbXksIHRveCwgdG95LCBsaW5lV2lkdGgsIGhlYWRTaXplLCBjb2xvciwgbGluZUNhcCkge1xuICAgIGN0eC5zYXZlKCk7XG5cbiAgICBjdHgubGluZUNhcCA9IGxpbmVDYXAgfHwgQ29uc3RhbnRzLlNldHRpbmcuQVJST1dfREVGQVVMVF9MSU5FX0NBUDtcbiAgICBjdHgubGluZVdpZHRoID0gbGluZVdpZHRoIHx8IENvbnN0YW50cy5TZXR0aW5nLkFSUk9XX0RFRkFVTFRfTElORV9TSVpFO1xuICAgIGN0eC5zdHJva2VTdHlsZSA9IGNvbG9yIHx8IENvbnN0YW50cy5TZXR0aW5nLkFSUk9XX0RFRkFVTFRfQ09MT1I7XG4gICAgY3R4LmZpbHRlciA9IFwiXCI7XG4gIFxuICAgIGN0eC5iZWdpblBhdGgoKTtcbiAgICBjb25zdCBoZWFkbGVuID0gaGVhZFNpemUgfHwgQ29uc3RhbnRzLlNldHRpbmcuQVJST1dfREVGQVVMVF9IRUFEX1NJWkU7XG4gICAgY29uc3QgZHggPSB0b3ggLSBmcm9teDtcbiAgICBjb25zdCBkeSA9IHRveSAtIGZyb215O1xuICAgIGNvbnN0IGFuZ2xlID0gTWF0aC5hdGFuMihkeSwgZHgpO1xuICAgIGN0eC5tb3ZlVG8oZnJvbXgsIGZyb215KTtcbiAgICBjdHgubGluZVRvKHRveCwgdG95KTtcbiAgICBjdHgubW92ZVRvKHRveCwgdG95KTtcbiAgICBjdHgubGluZVRvKHRveCAtIGhlYWRsZW4gKiBNYXRoLmNvcyhhbmdsZSAtIE1hdGguUEkgLyA2KSwgdG95IC0gaGVhZGxlbiAqIE1hdGguc2luKGFuZ2xlIC0gTWF0aC5QSSAvIDYpKTtcbiAgICBjdHgubW92ZVRvKHRveCwgdG95KTtcbiAgICBjdHgubGluZVRvKHRveCAtIGhlYWRsZW4gKiBNYXRoLmNvcyhhbmdsZSArIE1hdGguUEkgLyA2KSwgdG95IC0gaGVhZGxlbiAqIE1hdGguc2luKGFuZ2xlICsgTWF0aC5QSSAvIDYpKTtcbiAgICBjdHguc3Ryb2tlKCk7XG4gICAgXG4gICAgY3R4LnJlc3RvcmUoKTtcbiAgfSxcbiAgZHJhd0Nyb3NzOiBmdW5jdGlvbihjdHgsIHgsIHksIHdpZHRoLCBoZWlnaHQsIGxpbmVXaWR0aCwgY29sb3IsIGxpbmVDYXApIHtcbiAgICBjdHguc2F2ZSgpO1xuXG4gICAgY3R4LmxpbmVDYXAgPSBsaW5lQ2FwIHx8IENvbnN0YW50cy5TZXR0aW5nLkNST1NTX0RFRkFVTFRfTElORV9DQVA7XG4gICAgY3R4LmxpbmVXaWR0aCA9IGxpbmVXaWR0aCB8fCBDb25zdGFudHMuU2V0dGluZy5DUk9TU19ERUZBVUxUX0xJTkVfU0laRTtcbiAgICBjdHguc3Ryb2tlU3R5bGUgPSBjb2xvciB8fCBDb25zdGFudHMuU2V0dGluZy5DUk9TU19ERUZBVUxUX0NPTE9SO1xuICAgIGN0eC5maWx0ZXIgPSBcIlwiO1xuICBcbiAgICBjdHguYmVnaW5QYXRoKCk7XG4gICAgY3R4Lm1vdmVUbyh4LCB5KTtcbiAgICBjdHgubGluZVRvKHggKyB3aWR0aCwgeSArIGhlaWdodCk7XG4gICAgY3R4Lm1vdmVUbyh4ICsgd2lkdGgsIHkpO1xuICAgIGN0eC5saW5lVG8oeCwgeSArIGhlaWdodCk7XG4gICAgY3R4LnN0cm9rZSgpO1xuICAgIFxuICAgIGN0eC5yZXN0b3JlKCk7XG4gIH0sXG4gIGRyYXdUcmlhbmdsZTogZnVuY3Rpb24oY3R4LCB4LCB5LCB3aWR0aCwgaGVpZ2h0LCBsaW5lV2lkdGgsIGNvbG9yLCBsaW5lQ2FwLCBmaWxsID0gQ29uc3RhbnRzLlNldHRpbmcuVFJJQU5HTEVfREVGQVVMVF9GSUxMLCBmaWxsQ29sb3IpIHtcbiAgICBjdHguc2F2ZSgpO1xuXG4gICAgY3R4LmxpbmVDYXAgPSBsaW5lQ2FwIHx8IENvbnN0YW50cy5TZXR0aW5nLlRSSUFOR0xFX0RFRkFVTFRfTElORV9DQVA7XG4gICAgY3R4LmxpbmVXaWR0aCA9IGxpbmVXaWR0aCB8fCBDb25zdGFudHMuU2V0dGluZy5UUklBTkdMRV9ERUZBVUxUX0xJTkVfU0laRTtcbiAgICBjdHguZmlsdGVyID0gXCJcIjtcblxuICAgIGlmKGZpbGwpIHtcbiAgICAgIGN0eC5maWxsU3R5bGUgPSBmaWxsQ29sb3IgfHwgQ29uc3RhbnRzLlNldHRpbmcuVFJJQU5HTEVfREVGQVVMVF9GSUxMX0NPTE9SO1xuICAgICAgY3R4LnN0cm9rZVN0eWxlID0gY29sb3IgfHwgQ29uc3RhbnRzLlNldHRpbmcuVFJJQU5HTEVfREVGQVVMVF9DT0xPUjtcbiAgICB9IGVsc2Uge1xuICAgICAgY3R4LnN0cm9rZVN0eWxlID0gY29sb3IgfHwgQ29uc3RhbnRzLlNldHRpbmcuVFJJQU5HTEVfREVGQVVMVF9DT0xPUjtcbiAgICB9XG4gIFxuICAgIGN0eC5iZWdpblBhdGgoKTtcbiAgICBjdHgubW92ZVRvKHgsIHkpO1xuICAgIGN0eC5saW5lVG8oeCArIHdpZHRoLCB5KTtcbiAgICBjdHgubGluZVRvKHggKyB3aWR0aCAvIDIsIHkgKyBoZWlnaHQpO1xuICAgIGN0eC5saW5lVG8oeCwgeSk7XG5cbiAgICBpZihmaWxsKSB7XG4gICAgICBjdHguZmlsbCgpO1xuICAgICAgY3R4LnN0cm9rZSgpO1xuICAgIH0gZWxzZSB7XG4gICAgICBjdHguc3Ryb2tlKCk7XG4gICAgfVxuICAgIFxuICAgIGN0eC5yZXN0b3JlKCk7XG4gIH0sXG4gIGRyYXdDaXJjbGU6IGZ1bmN0aW9uKGN0eCwgeCwgeSwgcmFkaXVzLCBsaW5lV2lkdGgsIGNvbG9yLCBsaW5lQ2FwLCBmaWxsID0gQ29uc3RhbnRzLlNldHRpbmcuQ0lSQ0xFX0RFRkFVTFRfRklMTCwgZmlsbENvbG9yKSB7XG4gICAgY3R4LnNhdmUoKTtcblxuICAgIGN0eC5saW5lQ2FwID0gbGluZUNhcCB8fCBDb25zdGFudHMuU2V0dGluZy5DSVJDTEVfREVGQVVMVF9MSU5FX0NBUDtcbiAgICBjdHgubGluZVdpZHRoID0gbGluZVdpZHRoIHx8IENvbnN0YW50cy5TZXR0aW5nLkNJUkNMRV9ERUZBVUxUX0xJTkVfU0laRTtcbiAgICBjdHguZmlsdGVyID0gXCJcIjtcblxuICAgIGlmKGZpbGwpIHtcbiAgICAgIGN0eC5maWxsU3R5bGUgPSBmaWxsQ29sb3IgfHwgQ29uc3RhbnRzLlNldHRpbmcuQ0lSQ0xFX0RFRkFVTFRfRklMTF9DT0xPUjtcbiAgICAgIGN0eC5zdHJva2VTdHlsZSA9IGNvbG9yIHx8IENvbnN0YW50cy5TZXR0aW5nLkNJUkNMRV9ERUZBVUxUX0NPTE9SO1xuICAgIH0gZWxzZSB7XG4gICAgICBjdHguc3Ryb2tlU3R5bGUgPSBjb2xvciB8fCBDb25zdGFudHMuU2V0dGluZy5DSVJDTEVfREVGQVVMVF9DT0xPUjtcbiAgICB9XG4gICAgXG4gICAgY3R4LmJlZ2luUGF0aCgpO1xuICAgIGN0eC5hcmMoeCArIHJhZGl1cyAvIDIsIHkgKyByYWRpdXMgLyAyLCByYWRpdXMgLyAyLCAwLCAyICogTWF0aC5QSSwgZmFsc2UpO1xuXG4gICAgaWYoZmlsbCkge1xuICAgICAgY3R4LmZpbGwoKTtcbiAgICAgIGN0eC5zdHJva2UoKTtcbiAgICB9IGVsc2Uge1xuICAgICAgY3R4LnN0cm9rZSgpO1xuICAgIH1cbiAgICBcbiAgICBjdHgucmVzdG9yZSgpO1xuICB9LFxuICBjbGVhcjogZnVuY3Rpb24oY3R4KSB7XG4gICAgY3R4LmNsZWFyUmVjdCgwLCAwLCB0aGlzLmdldENhbnZhc1dpZHRoKGN0eC5jYW52YXMpLCB0aGlzLmdldENhbnZhc0hlaWdodChjdHguY2FudmFzKSk7XG4gIH0sXG4gIGlzRmlsdGVySHVlQXZhaWxhYmxlOiBmdW5jdGlvbigpIHtcbiAgICBjb25zdCBjYW52YXMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiY2FudmFzXCIpO1xuICAgIGNhbnZhcy53aWR0aCA9IDU7XG4gICAgY2FudmFzLmhlaWdodCA9IDU7XG4gICAgY29uc3QgY3R4ID0gY2FudmFzLmdldENvbnRleHQoXCIyZFwiKTtcbiAgICBjdHguc2F2ZSgpO1xuICBcbiAgICBjdHguZmlsbFN0eWxlID0gXCIjRkYwMDAwXCI7XG4gICAgY3R4LmZpbHRlciA9IFwiaHVlLXJvdGF0ZSg5MGRlZylcIjtcbiAgICBjdHguZmlsbFJlY3QoMCwgMCwgNSwgNSk7XG4gICAgY29uc3QgY29sb3IgPSBjdHguZ2V0SW1hZ2VEYXRhKDAsIDAsIDEsIDEpLmRhdGE7XG4gICAgY3R4LnJlc3RvcmUoKTtcbiAgXG4gICAgaWYoY29sb3JbMF0gPT0gMjU1ICYmIGNvbG9yWzFdID09IDAgJiYgY29sb3JbMl0gPT0gMCkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgXG4gICAgcmV0dXJuIHRydWU7XG4gIH0sXG4gIGJsdXJDYW52YXM6IGZ1bmN0aW9uKGN0eCwgbGVuZ3RoKSB7XG4gICAgY3R4LnNhdmUoKTtcbiAgICBjdHguZmlsdGVyID0gXCJibHVyKFwiICsgbGVuZ3RoICArIFwicHgpXCI7XG4gICAgdGhpcy5kcmF3SW1hZ2VEYXRhKGN0eCwgY3R4LmNhbnZhcywgMCwgMCwgdGhpcy5nZXRDYW52YXNXaWR0aChjdHguY2FudmFzKSwgdGhpcy5nZXRDYW52YXNIZWlnaHQoY3R4LmNhbnZhcykpO1xuICAgIGN0eC5yZXN0b3JlKCk7XG4gIH0sXG4gIHBhcnNlTnVtYmVyOiBmdW5jdGlvbihzdHIpIHtcbiAgICByZXR1cm4gc3RyID8gcGFyc2VJbnQoc3RyLm1hdGNoKC9cXGQrLyksIDEwKSA6IDA7XG4gIH0sXG4gIGdldEZvbnRTaXplOiBmdW5jdGlvbihjdHgpIHtcbiAgICByZXR1cm4gTWF0aC5mbG9vcih0aGlzLnBhcnNlTnVtYmVyKGN0eC5mb250KSAvIDEuMjUpO1xuICB9LFxuICBnZXRDYW52YXNXaWR0aChjYW52YXMpIHtcbiAgICByZXR1cm4gdGhpcy5wYXJzZU51bWJlcihjYW52YXMuc3R5bGUud2lkdGgpIHx8IGNhbnZhcy53aWR0aDtcbiAgfSxcbiAgZ2V0Q2FudmFzSGVpZ2h0KGNhbnZhcykge1xuICAgIHJldHVybiB0aGlzLnBhcnNlTnVtYmVyKGNhbnZhcy5zdHlsZS5oZWlnaHQpIHx8IGNhbnZhcy5oZWlnaHQ7XG4gIH0sXG4gIGF1dG9EUEkoY2FudmFzKSB7XG4gICAgY29uc3QgcmVjdCA9IGNhbnZhcy5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcblxuICAgIGNhbnZhcy53aWR0aCA9IHJlY3Qud2lkdGggKiBDb25zdGFudHMuU2V0dGluZy5QSVhFTF9SQVRJTztcbiAgICBjYW52YXMuaGVpZ2h0ID0gcmVjdC5oZWlnaHQgKiBDb25zdGFudHMuU2V0dGluZy5QSVhFTF9SQVRJTztcbiAgICBcbiAgICBjYW52YXMuc3R5bGUud2lkdGggPSByZWN0LndpZHRoICsgXCJweFwiO1xuICAgIGNhbnZhcy5zdHlsZS5oZWlnaHQgPSAgcmVjdC5oZWlnaHQgKyBcInB4XCI7XG4gIH0sXG4gIGF1dG9SZXNpemVDYW52YXM6IGZ1bmN0aW9uKGNhbnZhcywgY29udGFpbmVyLCBpbml0aWFsV2lkdGgsIGluaXRpYWxIZWlnaHQpIHtcbiAgICBpZighZG9jdW1lbnQuZnVsbHNjcmVlbkVsZW1lbnQpIHtcbiAgICAgIGlmKGluaXRpYWxXaWR0aCA+PSBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuY2xpZW50V2lkdGggKiAwLjg1KSB7XG4gICAgICAgIHZhciByYXRpbyA9IGluaXRpYWxXaWR0aCAvIGluaXRpYWxIZWlnaHQ7XG4gICAgICAgIGNhbnZhcy53aWR0aCA9IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5jbGllbnRXaWR0aCAqIDAuODU7XG4gICAgICAgIGNhbnZhcy5oZWlnaHQgPSBjYW52YXMud2lkdGggLyByYXRpbztcblxuICAgICAgICBpZihjYW52YXMuc3R5bGUpIHtcbiAgICAgICAgICBjYW52YXMuc3R5bGUud2lkdGggPSBjYW52YXMud2lkdGggKyBcInB4XCI7XG4gICAgICAgICAgY2FudmFzLnN0eWxlLmhlaWdodCA9IGNhbnZhcy5oZWlnaHQgKyBcInB4XCI7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGNhbnZhcy53aWR0aCA9IGluaXRpYWxXaWR0aDtcbiAgICAgICAgY2FudmFzLmhlaWdodCA9IGluaXRpYWxIZWlnaHQ7XG5cbiAgICAgICAgaWYoY2FudmFzLnN0eWxlKSB7XG4gICAgICAgICAgY2FudmFzLnN0eWxlLndpZHRoID0gaW5pdGlhbFdpZHRoICsgXCJweFwiO1xuICAgICAgICAgIGNhbnZhcy5zdHlsZS5oZWlnaHQgPSBpbml0aWFsSGVpZ2h0ICsgXCJweFwiO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSBlbHNlIGlmKGRvY3VtZW50LmZ1bGxzY3JlZW5FbGVtZW50ID09IGNhbnZhcyB8fCBkb2N1bWVudC5mdWxsc2NyZWVuRWxlbWVudCA9PSBjb250YWluZXIpIHtcbiAgICAgIGNhbnZhcy53aWR0aCA9IHdpbmRvdy5pbm5lcldpZHRoO1xuICAgICAgY2FudmFzLmhlaWdodCA9IHdpbmRvdy5pbm5lckhlaWdodDtcblxuICAgICAgaWYoY2FudmFzLnN0eWxlKSB7XG4gICAgICAgIGNhbnZhcy5zdHlsZS53aWR0aCA9IHdpbmRvdy5pbm5lcldpZHRoICsgXCJweFwiO1xuICAgICAgICBjYW52YXMuc3R5bGUuaGVpZ2h0ID0gd2luZG93LmlubmVySGVpZ2h0ICsgXCJweFwiO1xuICAgICAgfVxuXG4gICAgICBpZihjb250YWluZXIpIHtcbiAgICAgICAgY29udGFpbmVyLndpZHRoID0gd2luZG93LmlubmVyV2lkdGg7XG4gICAgICAgIGNvbnRhaW5lci5oZWlnaHQgPSB3aW5kb3cuaW5uZXJIZWlnaHQ7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIGNhbnZhcy53aWR0aCA9IGluaXRpYWxXaWR0aDtcbiAgICAgIGNhbnZhcy5oZWlnaHQgPSBpbml0aWFsSGVpZ2h0O1xuXG4gICAgICBpZihjYW52YXMuc3R5bGUpIHtcbiAgICAgICAgY2FudmFzLnN0eWxlLndpZHRoID0gaW5pdGlhbFdpZHRoICsgXCJweFwiO1xuICAgICAgICBjYW52YXMuc3R5bGUuaGVpZ2h0ID0gaW5pdGlhbEhlaWdodCArIFwicHhcIjtcbiAgICAgIH1cbiAgICB9XG4gIH0sXG4gIGVuYWJsZUF1dG9SZXNpemVDYW52YXM6IGZ1bmN0aW9uKGNhbnZhcywgY29udGFpbmVyLCBpbml0aWFsV2lkdGgsIGluaXRpYWxIZWlnaHQpIHtcbiAgICBpZihjYW52YXMgJiYgY2FudmFzLmdldEF0dHJpYnV0ZShcImF1dG9yZXNpemUtY2FudmFzLWV2ZW50XCIpICE9IFwidHJ1ZVwiKSB7XG4gICAgICB0aGlzLmF1dG9SZXNpemVDYW52YXMoY2FudmFzLCBjb250YWluZXIsIGluaXRpYWxXaWR0aCwgaW5pdGlhbEhlaWdodCk7XG4gIFxuICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJyZXNpemVcIiwgKCkgPT4ge1xuICAgICAgICBjYW52YXMuc2V0QXR0cmlidXRlKFwiYXV0b3Jlc2l6ZS1jYW52YXMtZXZlbnRcIiwgXCJ0cnVlXCIpO1xuICAgICAgICB0aGlzLmF1dG9SZXNpemVDYW52YXMoY2FudmFzLCBjb250YWluZXIsIGluaXRpYWxXaWR0aCwgaW5pdGlhbEhlaWdodCk7XG4gICAgICB9KTtcbiAgICB9XG4gIH0sXG4gIGF1dG9SZXNpemVDYW52YXNGdWxsc2NyZWVuOiBmdW5jdGlvbihjYW52YXMsIGNvbnRhaW5lcikge1xuICAgIGlmKGRvY3VtZW50LmZ1bGxzY3JlZW5FbGVtZW50ID09IGNhbnZhcyB8fCBkb2N1bWVudC5mdWxsc2NyZWVuRWxlbWVudCA9PSBjb250YWluZXIpIHtcbiAgICAgIGNhbnZhcy53aWR0aCA9IHdpbmRvdy5pbm5lcldpZHRoO1xuICAgICAgY2FudmFzLmhlaWdodCA9IHdpbmRvdy5pbm5lckhlaWdodDtcblxuICAgICAgaWYoY2FudmFzLnN0eWxlKSB7XG4gICAgICAgIGNhbnZhcy5zdHlsZS53aWR0aCA9IHdpbmRvdy5pbm5lcldpZHRoICsgXCJweFwiO1xuICAgICAgICBjYW52YXMuc3R5bGUuaGVpZ2h0ID0gd2luZG93LmlubmVySGVpZ2h0ICsgXCJweFwiO1xuICAgICAgfVxuICAgICAgXG4gICAgICBpZihjb250YWluZXIpIHtcbiAgICAgICAgY29udGFpbmVyLndpZHRoID0gd2luZG93LmlubmVyV2lkdGg7XG4gICAgICAgIGNvbnRhaW5lci5oZWlnaHQgPSB3aW5kb3cuaW5uZXJIZWlnaHQ7XG4gICAgICB9XG4gICAgfVxuICB9LFxuICBlbmFibGVBdXRvUmVzaXplQ2FudmFzRnVsbHNjcmVlbjogZnVuY3Rpb24oY2FudmFzLCBjb250YWluZXIpIHtcbiAgICBpZihjYW52YXMgJiYgY2FudmFzLmdldEF0dHJpYnV0ZShcImF1dG9yZXNpemVmdWxsc2NyZWVuLWNhbnZhcy1ldmVudFwiKSAhPSBcInRydWVcIikge1xuICAgICAgdGhpcy5hdXRvUmVzaXplQ2FudmFzRnVsbHNjcmVlbihjYW52YXMsIGNvbnRhaW5lcik7XG4gIFxuICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJyZXNpemVcIiwgKCkgPT4ge1xuICAgICAgICBjYW52YXMuc2V0QXR0cmlidXRlKFwiYXV0b3Jlc2l6ZWZ1bGxzY3JlZW4tY2FudmFzLWV2ZW50XCIsIFwidHJ1ZVwiKTtcbiAgICAgICAgdGhpcy5hdXRvUmVzaXplQ2FudmFzRnVsbHNjcmVlbihjYW52YXMsIGNvbnRhaW5lcik7XG4gICAgICB9KTtcbiAgICB9XG4gIH0sXG4gIGF1dG9SZXNpemVDYW52YXNGdWxscGFnZTogZnVuY3Rpb24oY2FudmFzLCBjb250YWluZXIpIHtcbiAgICBpZihjYW52YXMgJiYgY2FudmFzLmdldEF0dHJpYnV0ZShcImZ1bGxwYWdlLWNhbnZhcy1lbmFibGVcIikgPT0gXCJ0cnVlXCIpIHtcbiAgICAgIGNhbnZhcy53aWR0aCA9IHdpbmRvdy5pbm5lcldpZHRoO1xuICAgICAgY2FudmFzLmhlaWdodCA9IHdpbmRvdy5pbm5lckhlaWdodDtcbiAgICAgIFxuICAgICAgaWYoY2FudmFzLnN0eWxlKSB7XG4gICAgICAgIGNhbnZhcy5zdHlsZS53aWR0aCA9IHdpbmRvdy5pbm5lcldpZHRoICsgXCJweFwiO1xuICAgICAgICBjYW52YXMuc3R5bGUuaGVpZ2h0ID0gd2luZG93LmlubmVySGVpZ2h0ICsgXCJweFwiO1xuICAgICAgfVxuICAgICAgXG4gICAgICBpZihjb250YWluZXIpIHtcbiAgICAgICAgY29udGFpbmVyLndpZHRoID0gd2luZG93LmlubmVyV2lkdGg7XG4gICAgICAgIGNvbnRhaW5lci5oZWlnaHQgPSB3aW5kb3cuaW5uZXJIZWlnaHQ7XG4gICAgICAgIGNvbnRhaW5lci5zdHlsZS5tYXJnaW4gPSAwO1xuICAgICAgICBjb250YWluZXIuc3R5bGUucGFkZGluZyA9IDA7XG4gICAgICB9XG5cbiAgICAgIGRvY3VtZW50LmJvZHkuc3R5bGUubWFyZ2luID0gMDtcbiAgICAgIGRvY3VtZW50LmJvZHkuc3R5bGUucGFkZGluZyA9IDA7XG4gICAgfVxuICB9LFxuICBlbmFibGVBdXRvUmVzaXplQ2FudmFzRnVsbHBhZ2U6IGZ1bmN0aW9uKGNhbnZhcywgY29udGFpbmVyKSB7XG4gICAgaWYoY2FudmFzICYmIGNhbnZhcy5nZXRBdHRyaWJ1dGUoXCJhdXRvcmVzaXplZnVsbHBhZ2UtY2FudmFzLWV2ZW50XCIpICE9IFwidHJ1ZVwiKSB7XG4gICAgICB0aGlzLmF1dG9SZXNpemVDYW52YXNGdWxscGFnZShjYW52YXMsIGNvbnRhaW5lcik7XG4gIFxuICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJyZXNpemVcIiwgKCkgPT4ge1xuICAgICAgICBjYW52YXMuc2V0QXR0cmlidXRlKFwiYXV0b3Jlc2l6ZWZ1bGxwYWdlLWNhbnZhcy1ldmVudFwiLCBcInRydWVcIik7XG4gICAgICAgIHRoaXMuYXV0b1Jlc2l6ZUNhbnZhc0Z1bGxwYWdlKGNhbnZhcywgY29udGFpbmVyKTtcbiAgICAgIH0pO1xuICAgIH1cbiAgfSxcbiAgdG9nZ2xlRnVsbHNjcmVlbjogZnVuY3Rpb24oY2FudmFzLCBjb250YWluZXIpIHtcbiAgICBpZihjYW52YXMpIHtcbiAgICAgIGNvbnN0IGluaXRpYWxXaWR0aCA9IGNhbnZhcy53aWR0aDtcbiAgICAgIGNvbnN0IGluaXRpYWxIZWlnaHQgPSBjYW52YXMuaGVpZ2h0O1xuXG4gICAgICBpZihjb250YWluZXIpIHtcbiAgICAgICAgY29udGFpbmVyLndpZHRoID0gaW5pdGlhbFdpZHRoO1xuICAgICAgICBjb250YWluZXIuaGVpZ2h0ID0gaW5pdGlhbEhlaWdodDtcbiAgICAgIH1cblxuICAgICAgaWYoIWRvY3VtZW50LmZ1bGxzY3JlZW5FbGVtZW50KSB7XG4gICAgICAgIGlmKChjb250YWluZXIgfHwgY2FudmFzKS5yZXF1ZXN0RnVsbHNjcmVlbikge1xuICAgICAgICAgIChjb250YWluZXIgfHwgY2FudmFzKS5yZXF1ZXN0RnVsbHNjcmVlbigpO1xuICAgICAgICB9IGVsc2UgaWYoKGNvbnRhaW5lciB8fCBjYW52YXMpLm1velJlcXVlc3RGdWxsU2NyZWVuKSB7XG4gICAgICAgICAgKGNvbnRhaW5lciB8fCBjYW52YXMpLm1velJlcXVlc3RGdWxsU2NyZWVuKCk7XG4gICAgICAgIH0gZWxzZSBpZigoY29udGFpbmVyIHx8IGNhbnZhcykud2Via2l0UmVxdWVzdEZ1bGxzY3JlZW4pIHtcbiAgICAgICAgICAoY29udGFpbmVyIHx8IGNhbnZhcykud2Via2l0UmVxdWVzdEZ1bGxzY3JlZW4oKTtcbiAgICAgICAgfSBlbHNlIGlmKChjb250YWluZXIgfHwgY2FudmFzKS5tc1JlcXVlc3RGdWxsc2NyZWVuKSB7XG4gICAgICAgICAgKGNvbnRhaW5lciB8fCBjYW52YXMpLm1zUmVxdWVzdEZ1bGxzY3JlZW4oKTtcbiAgICAgICAgfSBlbHNlIGlmKChjb250YWluZXIgfHwgY2FudmFzKS5vUmVxdWVzdEZ1bGxzY3JlZW4pIHtcbiAgICAgICAgICAoY29udGFpbmVyIHx8IGNhbnZhcykub1JlcXVlc3RGdWxsc2NyZWVuKCk7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGlmKGRvY3VtZW50LmV4aXRGdWxsc2NyZWVuKSB7XG4gICAgICAgICAgZG9jdW1lbnQuZXhpdEZ1bGxzY3JlZW4oKTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICB0aGlzLmVuYWJsZUF1dG9SZXNpemVDYW52YXNGdWxsc2NyZWVuKGNhbnZhcywgY29udGFpbmVyKTtcblxuICAgICAgaWYoY2FudmFzLmdldEF0dHJpYnV0ZShcImZ1bGxzY3JlZW5jaGFuZ2UtY2FudmFzLWV2ZW50XCIpICE9IFwidHJ1ZVwiKSB7XG4gICAgICAgIGNhbnZhcy5zZXRBdHRyaWJ1dGUoXCJmdWxsc2NyZWVuY2hhbmdlLWNhbnZhcy1ldmVudFwiLCBcInRydWVcIik7XG5cbiAgICAgICAgY29uc3Qgb25mdWxsc2NyZWVuY2hhbmdlID0gKCkgPT4ge1xuICAgICAgICAgIGlmKGRvY3VtZW50LmZ1bGxzY3JlZW5FbGVtZW50ICE9IChjb250YWluZXIgfHwgY2FudmFzKSkge1xuICAgICAgICAgICAgY2FudmFzLndpZHRoID0gaW5pdGlhbFdpZHRoO1xuICAgICAgICAgICAgY2FudmFzLmhlaWdodCA9IGluaXRpYWxIZWlnaHQ7XG4gICAgICBcbiAgICAgICAgICAgIGlmKGNvbnRhaW5lcikge1xuICAgICAgICAgICAgICBjb250YWluZXIud2lkdGggPSBpbml0aWFsV2lkdGg7XG4gICAgICAgICAgICAgIGNvbnRhaW5lci5oZWlnaHQgPSBpbml0aWFsSGVpZ2h0O1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICBcbiAgICAgICAgaWYodHlwZW9mKGRvY3VtZW50Lm9uZnVsbHNjcmVlbmNoYW5nZSkgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBkb2N1bWVudC5vbmZ1bGxzY3JlZW5jaGFuZ2UgPSBvbmZ1bGxzY3JlZW5jaGFuZ2U7XG4gICAgICAgIH0gZWxzZSBpZih0eXBlb2YoZG9jdW1lbnQub25tc2Z1bGxzY3JlZW5jaGFuZ2UpICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgZG9jdW1lbnQub25tc2Z1bGxzY3JlZW5jaGFuZ2UgPSBvbmZ1bGxzY3JlZW5jaGFuZ2U7XG4gICAgICAgIH0gZWxzZSBpZih0eXBlb2YoZG9jdW1lbnQub25tb3pmdWxsc2NyZWVuY2hhbmdlKSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGRvY3VtZW50Lm9ubW96ZnVsbHNjcmVlbmNoYW5nZSA9IG9uZnVsbHNjcmVlbmNoYW5nZTtcbiAgICAgICAgfSBlbHNlIGlmKHR5cGVvZihkb2N1bWVudC5vbndlYmtpdGZ1bGxzY3JlZW5jaGFuZ2UpICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgZG9jdW1lbnQub253ZWJraXRmdWxsc2NyZWVuY2hhbmdlID0gb25mdWxsc2NyZWVuY2hhbmdlO1xuICAgICAgICB9IGVsc2UgaWYodHlwZW9mKGRvY3VtZW50Lm9ub2tpdGZ1bGxzY3JlZW5jaGFuZ2UpICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgZG9jdW1lbnQub25vZnVsbHNjcmVlbmNoYW5nZSA9IG9uZnVsbHNjcmVlbmNoYW5nZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfSxcbiAgdG9nZ2xlRnVsbHBhZ2U6IGZ1bmN0aW9uKGNhbnZhcywgY29udGFpbmVyKSB7XG4gICAgaWYoY2FudmFzKSB7XG4gICAgICBjb25zdCBpbml0aWFsV2lkdGggPSBjYW52YXMud2lkdGg7XG4gICAgICBjb25zdCBpbml0aWFsSGVpZ2h0ID0gY2FudmFzLmhlaWdodDtcblxuICAgICAgaWYoY29udGFpbmVyKSB7XG4gICAgICAgIGNvbnRhaW5lci53aWR0aCA9IGluaXRpYWxXaWR0aDtcbiAgICAgICAgY29udGFpbmVyLmhlaWdodCA9IGluaXRpYWxIZWlnaHQ7XG4gICAgICB9XG5cbiAgICAgIGlmKCFjYW52YXMuZ2V0QXR0cmlidXRlKFwiZnVsbHBhZ2UtY2FudmFzLWVuYWJsZVwiKSB8fCBjYW52YXMuZ2V0QXR0cmlidXRlKFwiZnVsbHBhZ2UtY2FudmFzLWVuYWJsZVwiKSA9PSBcImZhbHNlXCIpIHtcbiAgICAgICAgY2FudmFzLnNldEF0dHJpYnV0ZShcImZ1bGxwYWdlLWNhbnZhcy1lbmFibGVcIiwgXCJ0cnVlXCIpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgY2FudmFzLnNldEF0dHJpYnV0ZShcImZ1bGxwYWdlLWNhbnZhcy1lbmFibGVcIiwgXCJmYWxzZVwiKTtcbiAgICAgIH1cblxuICAgICAgdGhpcy5lbmFibGVBdXRvUmVzaXplQ2FudmFzRnVsbHBhZ2UoY2FudmFzLCBjb250YWluZXIpO1xuICAgIH1cbiAgfSxcbiAgZ2V0TW91c2VQb3MoY2FudmFzLCBldmVudCkge1xuICAgIGNvbnN0IHJlY3QgPSBjYW52YXMuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG4gICAgXG4gICAgcmV0dXJuIHtcbiAgICAgIHg6IGV2ZW50LmNsaWVudFggLSByZWN0LmxlZnQsXG4gICAgICB5OiBldmVudC5jbGllbnRZIC0gcmVjdC50b3BcbiAgICB9O1xuICB9XG59OyIsImZ1bmN0aW9uIF9hcnJheUxpa2VUb0FycmF5KHIsIGEpIHtcbiAgKG51bGwgPT0gYSB8fCBhID4gci5sZW5ndGgpICYmIChhID0gci5sZW5ndGgpO1xuICBmb3IgKHZhciBlID0gMCwgbiA9IEFycmF5KGEpOyBlIDwgYTsgZSsrKSBuW2VdID0gcltlXTtcbiAgcmV0dXJuIG47XG59XG5leHBvcnQgeyBfYXJyYXlMaWtlVG9BcnJheSBhcyBkZWZhdWx0IH07IiwiaW1wb3J0IGFycmF5TGlrZVRvQXJyYXkgZnJvbSBcIi4vYXJyYXlMaWtlVG9BcnJheS5qc1wiO1xuZnVuY3Rpb24gX2FycmF5V2l0aG91dEhvbGVzKHIpIHtcbiAgaWYgKEFycmF5LmlzQXJyYXkocikpIHJldHVybiBhcnJheUxpa2VUb0FycmF5KHIpO1xufVxuZXhwb3J0IHsgX2FycmF5V2l0aG91dEhvbGVzIGFzIGRlZmF1bHQgfTsiLCJmdW5jdGlvbiBfYXNzZXJ0VGhpc0luaXRpYWxpemVkKGUpIHtcbiAgaWYgKHZvaWQgMCA9PT0gZSkgdGhyb3cgbmV3IFJlZmVyZW5jZUVycm9yKFwidGhpcyBoYXNuJ3QgYmVlbiBpbml0aWFsaXNlZCAtIHN1cGVyKCkgaGFzbid0IGJlZW4gY2FsbGVkXCIpO1xuICByZXR1cm4gZTtcbn1cbmV4cG9ydCB7IF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQgYXMgZGVmYXVsdCB9OyIsImZ1bmN0aW9uIF9jbGFzc0NhbGxDaGVjayhhLCBuKSB7XG4gIGlmICghKGEgaW5zdGFuY2VvZiBuKSkgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblwiKTtcbn1cbmV4cG9ydCB7IF9jbGFzc0NhbGxDaGVjayBhcyBkZWZhdWx0IH07IiwiaW1wb3J0IGlzTmF0aXZlUmVmbGVjdENvbnN0cnVjdCBmcm9tIFwiLi9pc05hdGl2ZVJlZmxlY3RDb25zdHJ1Y3QuanNcIjtcbmltcG9ydCBzZXRQcm90b3R5cGVPZiBmcm9tIFwiLi9zZXRQcm90b3R5cGVPZi5qc1wiO1xuZnVuY3Rpb24gX2NvbnN0cnVjdCh0LCBlLCByKSB7XG4gIGlmIChpc05hdGl2ZVJlZmxlY3RDb25zdHJ1Y3QoKSkgcmV0dXJuIFJlZmxlY3QuY29uc3RydWN0LmFwcGx5KG51bGwsIGFyZ3VtZW50cyk7XG4gIHZhciBvID0gW251bGxdO1xuICBvLnB1c2guYXBwbHkobywgZSk7XG4gIHZhciBwID0gbmV3ICh0LmJpbmQuYXBwbHkodCwgbykpKCk7XG4gIHJldHVybiByICYmIHNldFByb3RvdHlwZU9mKHAsIHIucHJvdG90eXBlKSwgcDtcbn1cbmV4cG9ydCB7IF9jb25zdHJ1Y3QgYXMgZGVmYXVsdCB9OyIsImltcG9ydCB0b1Byb3BlcnR5S2V5IGZyb20gXCIuL3RvUHJvcGVydHlLZXkuanNcIjtcbmZ1bmN0aW9uIF9kZWZpbmVQcm9wZXJ0aWVzKGUsIHIpIHtcbiAgZm9yICh2YXIgdCA9IDA7IHQgPCByLmxlbmd0aDsgdCsrKSB7XG4gICAgdmFyIG8gPSByW3RdO1xuICAgIG8uZW51bWVyYWJsZSA9IG8uZW51bWVyYWJsZSB8fCAhMSwgby5jb25maWd1cmFibGUgPSAhMCwgXCJ2YWx1ZVwiIGluIG8gJiYgKG8ud3JpdGFibGUgPSAhMCksIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShlLCB0b1Byb3BlcnR5S2V5KG8ua2V5KSwgbyk7XG4gIH1cbn1cbmZ1bmN0aW9uIF9jcmVhdGVDbGFzcyhlLCByLCB0KSB7XG4gIHJldHVybiByICYmIF9kZWZpbmVQcm9wZXJ0aWVzKGUucHJvdG90eXBlLCByKSwgdCAmJiBfZGVmaW5lUHJvcGVydGllcyhlLCB0KSwgT2JqZWN0LmRlZmluZVByb3BlcnR5KGUsIFwicHJvdG90eXBlXCIsIHtcbiAgICB3cml0YWJsZTogITFcbiAgfSksIGU7XG59XG5leHBvcnQgeyBfY3JlYXRlQ2xhc3MgYXMgZGVmYXVsdCB9OyIsImltcG9ydCB0b1Byb3BlcnR5S2V5IGZyb20gXCIuL3RvUHJvcGVydHlLZXkuanNcIjtcbmZ1bmN0aW9uIF9kZWZpbmVQcm9wZXJ0eShlLCByLCB0KSB7XG4gIHJldHVybiAociA9IHRvUHJvcGVydHlLZXkocikpIGluIGUgPyBPYmplY3QuZGVmaW5lUHJvcGVydHkoZSwgciwge1xuICAgIHZhbHVlOiB0LFxuICAgIGVudW1lcmFibGU6ICEwLFxuICAgIGNvbmZpZ3VyYWJsZTogITAsXG4gICAgd3JpdGFibGU6ICEwXG4gIH0pIDogZVtyXSA9IHQsIGU7XG59XG5leHBvcnQgeyBfZGVmaW5lUHJvcGVydHkgYXMgZGVmYXVsdCB9OyIsImltcG9ydCBzdXBlclByb3BCYXNlIGZyb20gXCIuL3N1cGVyUHJvcEJhc2UuanNcIjtcbmZ1bmN0aW9uIF9nZXQoKSB7XG4gIHJldHVybiBfZ2V0ID0gXCJ1bmRlZmluZWRcIiAhPSB0eXBlb2YgUmVmbGVjdCAmJiBSZWZsZWN0LmdldCA/IFJlZmxlY3QuZ2V0LmJpbmQoKSA6IGZ1bmN0aW9uIChlLCB0LCByKSB7XG4gICAgdmFyIHAgPSBzdXBlclByb3BCYXNlKGUsIHQpO1xuICAgIGlmIChwKSB7XG4gICAgICB2YXIgbiA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IocCwgdCk7XG4gICAgICByZXR1cm4gbi5nZXQgPyBuLmdldC5jYWxsKGFyZ3VtZW50cy5sZW5ndGggPCAzID8gZSA6IHIpIDogbi52YWx1ZTtcbiAgICB9XG4gIH0sIF9nZXQuYXBwbHkobnVsbCwgYXJndW1lbnRzKTtcbn1cbmV4cG9ydCB7IF9nZXQgYXMgZGVmYXVsdCB9OyIsImZ1bmN0aW9uIF9nZXRQcm90b3R5cGVPZih0KSB7XG4gIHJldHVybiBfZ2V0UHJvdG90eXBlT2YgPSBPYmplY3Quc2V0UHJvdG90eXBlT2YgPyBPYmplY3QuZ2V0UHJvdG90eXBlT2YuYmluZCgpIDogZnVuY3Rpb24gKHQpIHtcbiAgICByZXR1cm4gdC5fX3Byb3RvX18gfHwgT2JqZWN0LmdldFByb3RvdHlwZU9mKHQpO1xuICB9LCBfZ2V0UHJvdG90eXBlT2YodCk7XG59XG5leHBvcnQgeyBfZ2V0UHJvdG90eXBlT2YgYXMgZGVmYXVsdCB9OyIsImltcG9ydCBzZXRQcm90b3R5cGVPZiBmcm9tIFwiLi9zZXRQcm90b3R5cGVPZi5qc1wiO1xuZnVuY3Rpb24gX2luaGVyaXRzKHQsIGUpIHtcbiAgaWYgKFwiZnVuY3Rpb25cIiAhPSB0eXBlb2YgZSAmJiBudWxsICE9PSBlKSB0aHJvdyBuZXcgVHlwZUVycm9yKFwiU3VwZXIgZXhwcmVzc2lvbiBtdXN0IGVpdGhlciBiZSBudWxsIG9yIGEgZnVuY3Rpb25cIik7XG4gIHQucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShlICYmIGUucHJvdG90eXBlLCB7XG4gICAgY29uc3RydWN0b3I6IHtcbiAgICAgIHZhbHVlOiB0LFxuICAgICAgd3JpdGFibGU6ICEwLFxuICAgICAgY29uZmlndXJhYmxlOiAhMFxuICAgIH1cbiAgfSksIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0LCBcInByb3RvdHlwZVwiLCB7XG4gICAgd3JpdGFibGU6ICExXG4gIH0pLCBlICYmIHNldFByb3RvdHlwZU9mKHQsIGUpO1xufVxuZXhwb3J0IHsgX2luaGVyaXRzIGFzIGRlZmF1bHQgfTsiLCJmdW5jdGlvbiBfaXNOYXRpdmVSZWZsZWN0Q29uc3RydWN0KCkge1xuICB0cnkge1xuICAgIHZhciB0ID0gIUJvb2xlYW4ucHJvdG90eXBlLnZhbHVlT2YuY2FsbChSZWZsZWN0LmNvbnN0cnVjdChCb29sZWFuLCBbXSwgZnVuY3Rpb24gKCkge30pKTtcbiAgfSBjYXRjaCAodCkge31cbiAgcmV0dXJuIChfaXNOYXRpdmVSZWZsZWN0Q29uc3RydWN0ID0gZnVuY3Rpb24gX2lzTmF0aXZlUmVmbGVjdENvbnN0cnVjdCgpIHtcbiAgICByZXR1cm4gISF0O1xuICB9KSgpO1xufVxuZXhwb3J0IHsgX2lzTmF0aXZlUmVmbGVjdENvbnN0cnVjdCBhcyBkZWZhdWx0IH07IiwiZnVuY3Rpb24gX2l0ZXJhYmxlVG9BcnJheShyKSB7XG4gIGlmIChcInVuZGVmaW5lZFwiICE9IHR5cGVvZiBTeW1ib2wgJiYgbnVsbCAhPSByW1N5bWJvbC5pdGVyYXRvcl0gfHwgbnVsbCAhPSByW1wiQEBpdGVyYXRvclwiXSkgcmV0dXJuIEFycmF5LmZyb20ocik7XG59XG5leHBvcnQgeyBfaXRlcmFibGVUb0FycmF5IGFzIGRlZmF1bHQgfTsiLCJmdW5jdGlvbiBfbm9uSXRlcmFibGVTcHJlYWQoKSB7XG4gIHRocm93IG5ldyBUeXBlRXJyb3IoXCJJbnZhbGlkIGF0dGVtcHQgdG8gc3ByZWFkIG5vbi1pdGVyYWJsZSBpbnN0YW5jZS5cXG5JbiBvcmRlciB0byBiZSBpdGVyYWJsZSwgbm9uLWFycmF5IG9iamVjdHMgbXVzdCBoYXZlIGEgW1N5bWJvbC5pdGVyYXRvcl0oKSBtZXRob2QuXCIpO1xufVxuZXhwb3J0IHsgX25vbkl0ZXJhYmxlU3ByZWFkIGFzIGRlZmF1bHQgfTsiLCJpbXBvcnQgX3R5cGVvZiBmcm9tIFwiLi90eXBlb2YuanNcIjtcbmltcG9ydCBhc3NlcnRUaGlzSW5pdGlhbGl6ZWQgZnJvbSBcIi4vYXNzZXJ0VGhpc0luaXRpYWxpemVkLmpzXCI7XG5mdW5jdGlvbiBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybih0LCBlKSB7XG4gIGlmIChlICYmIChcIm9iamVjdFwiID09IF90eXBlb2YoZSkgfHwgXCJmdW5jdGlvblwiID09IHR5cGVvZiBlKSkgcmV0dXJuIGU7XG4gIGlmICh2b2lkIDAgIT09IGUpIHRocm93IG5ldyBUeXBlRXJyb3IoXCJEZXJpdmVkIGNvbnN0cnVjdG9ycyBtYXkgb25seSByZXR1cm4gb2JqZWN0IG9yIHVuZGVmaW5lZFwiKTtcbiAgcmV0dXJuIGFzc2VydFRoaXNJbml0aWFsaXplZCh0KTtcbn1cbmV4cG9ydCB7IF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuIGFzIGRlZmF1bHQgfTsiLCJpbXBvcnQgc3VwZXJQcm9wQmFzZSBmcm9tIFwiLi9zdXBlclByb3BCYXNlLmpzXCI7XG5pbXBvcnQgZGVmaW5lUHJvcGVydHkgZnJvbSBcIi4vZGVmaW5lUHJvcGVydHkuanNcIjtcbmZ1bmN0aW9uIHNldChlLCByLCB0LCBvKSB7XG4gIHJldHVybiBzZXQgPSBcInVuZGVmaW5lZFwiICE9IHR5cGVvZiBSZWZsZWN0ICYmIFJlZmxlY3Quc2V0ID8gUmVmbGVjdC5zZXQgOiBmdW5jdGlvbiAoZSwgciwgdCwgbykge1xuICAgIHZhciBmLFxuICAgICAgaSA9IHN1cGVyUHJvcEJhc2UoZSwgcik7XG4gICAgaWYgKGkpIHtcbiAgICAgIGlmICgoZiA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IoaSwgcikpLnNldCkgcmV0dXJuIGYuc2V0LmNhbGwobywgdCksICEwO1xuICAgICAgaWYgKCFmLndyaXRhYmxlKSByZXR1cm4gITE7XG4gICAgfVxuICAgIGlmIChmID0gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihvLCByKSkge1xuICAgICAgaWYgKCFmLndyaXRhYmxlKSByZXR1cm4gITE7XG4gICAgICBmLnZhbHVlID0gdCwgT2JqZWN0LmRlZmluZVByb3BlcnR5KG8sIHIsIGYpO1xuICAgIH0gZWxzZSBkZWZpbmVQcm9wZXJ0eShvLCByLCB0KTtcbiAgICByZXR1cm4gITA7XG4gIH0sIHNldChlLCByLCB0LCBvKTtcbn1cbmZ1bmN0aW9uIF9zZXQoZSwgciwgdCwgbywgZikge1xuICBpZiAoIXNldChlLCByLCB0LCBvIHx8IGUpICYmIGYpIHRocm93IG5ldyBUeXBlRXJyb3IoXCJmYWlsZWQgdG8gc2V0IHByb3BlcnR5XCIpO1xuICByZXR1cm4gdDtcbn1cbmV4cG9ydCB7IF9zZXQgYXMgZGVmYXVsdCB9OyIsImZ1bmN0aW9uIF9zZXRQcm90b3R5cGVPZih0LCBlKSB7XG4gIHJldHVybiBfc2V0UHJvdG90eXBlT2YgPSBPYmplY3Quc2V0UHJvdG90eXBlT2YgPyBPYmplY3Quc2V0UHJvdG90eXBlT2YuYmluZCgpIDogZnVuY3Rpb24gKHQsIGUpIHtcbiAgICByZXR1cm4gdC5fX3Byb3RvX18gPSBlLCB0O1xuICB9LCBfc2V0UHJvdG90eXBlT2YodCwgZSk7XG59XG5leHBvcnQgeyBfc2V0UHJvdG90eXBlT2YgYXMgZGVmYXVsdCB9OyIsImltcG9ydCBnZXRQcm90b3R5cGVPZiBmcm9tIFwiLi9nZXRQcm90b3R5cGVPZi5qc1wiO1xuZnVuY3Rpb24gX3N1cGVyUHJvcEJhc2UodCwgbykge1xuICBmb3IgKDsgIXt9Lmhhc093blByb3BlcnR5LmNhbGwodCwgbykgJiYgbnVsbCAhPT0gKHQgPSBnZXRQcm90b3R5cGVPZih0KSk7KTtcbiAgcmV0dXJuIHQ7XG59XG5leHBvcnQgeyBfc3VwZXJQcm9wQmFzZSBhcyBkZWZhdWx0IH07IiwiaW1wb3J0IGFycmF5V2l0aG91dEhvbGVzIGZyb20gXCIuL2FycmF5V2l0aG91dEhvbGVzLmpzXCI7XG5pbXBvcnQgaXRlcmFibGVUb0FycmF5IGZyb20gXCIuL2l0ZXJhYmxlVG9BcnJheS5qc1wiO1xuaW1wb3J0IHVuc3VwcG9ydGVkSXRlcmFibGVUb0FycmF5IGZyb20gXCIuL3Vuc3VwcG9ydGVkSXRlcmFibGVUb0FycmF5LmpzXCI7XG5pbXBvcnQgbm9uSXRlcmFibGVTcHJlYWQgZnJvbSBcIi4vbm9uSXRlcmFibGVTcHJlYWQuanNcIjtcbmZ1bmN0aW9uIF90b0NvbnN1bWFibGVBcnJheShyKSB7XG4gIHJldHVybiBhcnJheVdpdGhvdXRIb2xlcyhyKSB8fCBpdGVyYWJsZVRvQXJyYXkocikgfHwgdW5zdXBwb3J0ZWRJdGVyYWJsZVRvQXJyYXkocikgfHwgbm9uSXRlcmFibGVTcHJlYWQoKTtcbn1cbmV4cG9ydCB7IF90b0NvbnN1bWFibGVBcnJheSBhcyBkZWZhdWx0IH07IiwiaW1wb3J0IF90eXBlb2YgZnJvbSBcIi4vdHlwZW9mLmpzXCI7XG5mdW5jdGlvbiB0b1ByaW1pdGl2ZSh0LCByKSB7XG4gIGlmIChcIm9iamVjdFwiICE9IF90eXBlb2YodCkgfHwgIXQpIHJldHVybiB0O1xuICB2YXIgZSA9IHRbU3ltYm9sLnRvUHJpbWl0aXZlXTtcbiAgaWYgKHZvaWQgMCAhPT0gZSkge1xuICAgIHZhciBpID0gZS5jYWxsKHQsIHIgfHwgXCJkZWZhdWx0XCIpO1xuICAgIGlmIChcIm9iamVjdFwiICE9IF90eXBlb2YoaSkpIHJldHVybiBpO1xuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJAQHRvUHJpbWl0aXZlIG11c3QgcmV0dXJuIGEgcHJpbWl0aXZlIHZhbHVlLlwiKTtcbiAgfVxuICByZXR1cm4gKFwic3RyaW5nXCIgPT09IHIgPyBTdHJpbmcgOiBOdW1iZXIpKHQpO1xufVxuZXhwb3J0IHsgdG9QcmltaXRpdmUgYXMgZGVmYXVsdCB9OyIsImltcG9ydCBfdHlwZW9mIGZyb20gXCIuL3R5cGVvZi5qc1wiO1xuaW1wb3J0IHRvUHJpbWl0aXZlIGZyb20gXCIuL3RvUHJpbWl0aXZlLmpzXCI7XG5mdW5jdGlvbiB0b1Byb3BlcnR5S2V5KHQpIHtcbiAgdmFyIGkgPSB0b1ByaW1pdGl2ZSh0LCBcInN0cmluZ1wiKTtcbiAgcmV0dXJuIFwic3ltYm9sXCIgPT0gX3R5cGVvZihpKSA/IGkgOiBpICsgXCJcIjtcbn1cbmV4cG9ydCB7IHRvUHJvcGVydHlLZXkgYXMgZGVmYXVsdCB9OyIsImZ1bmN0aW9uIF90eXBlb2Yobykge1xuICBcIkBiYWJlbC9oZWxwZXJzIC0gdHlwZW9mXCI7XG5cbiAgcmV0dXJuIF90eXBlb2YgPSBcImZ1bmN0aW9uXCIgPT0gdHlwZW9mIFN5bWJvbCAmJiBcInN5bWJvbFwiID09IHR5cGVvZiBTeW1ib2wuaXRlcmF0b3IgPyBmdW5jdGlvbiAobykge1xuICAgIHJldHVybiB0eXBlb2YgbztcbiAgfSA6IGZ1bmN0aW9uIChvKSB7XG4gICAgcmV0dXJuIG8gJiYgXCJmdW5jdGlvblwiID09IHR5cGVvZiBTeW1ib2wgJiYgby5jb25zdHJ1Y3RvciA9PT0gU3ltYm9sICYmIG8gIT09IFN5bWJvbC5wcm90b3R5cGUgPyBcInN5bWJvbFwiIDogdHlwZW9mIG87XG4gIH0sIF90eXBlb2Yobyk7XG59XG5leHBvcnQgeyBfdHlwZW9mIGFzIGRlZmF1bHQgfTsiLCJpbXBvcnQgYXJyYXlMaWtlVG9BcnJheSBmcm9tIFwiLi9hcnJheUxpa2VUb0FycmF5LmpzXCI7XG5mdW5jdGlvbiBfdW5zdXBwb3J0ZWRJdGVyYWJsZVRvQXJyYXkociwgYSkge1xuICBpZiAocikge1xuICAgIGlmIChcInN0cmluZ1wiID09IHR5cGVvZiByKSByZXR1cm4gYXJyYXlMaWtlVG9BcnJheShyLCBhKTtcbiAgICB2YXIgdCA9IHt9LnRvU3RyaW5nLmNhbGwocikuc2xpY2UoOCwgLTEpO1xuICAgIHJldHVybiBcIk9iamVjdFwiID09PSB0ICYmIHIuY29uc3RydWN0b3IgJiYgKHQgPSByLmNvbnN0cnVjdG9yLm5hbWUpLCBcIk1hcFwiID09PSB0IHx8IFwiU2V0XCIgPT09IHQgPyBBcnJheS5mcm9tKHIpIDogXCJBcmd1bWVudHNcIiA9PT0gdCB8fCAvXig/OlVpfEkpbnQoPzo4fDE2fDMyKSg/OkNsYW1wZWQpP0FycmF5JC8udGVzdCh0KSA/IGFycmF5TGlrZVRvQXJyYXkociwgYSkgOiB2b2lkIDA7XG4gIH1cbn1cbmV4cG9ydCB7IF91bnN1cHBvcnRlZEl0ZXJhYmxlVG9BcnJheSBhcyBkZWZhdWx0IH07IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRpZiAoIShtb2R1bGVJZCBpbiBfX3dlYnBhY2tfbW9kdWxlc19fKSkge1xuXHRcdGRlbGV0ZSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRcdHZhciBlID0gbmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIiArIG1vZHVsZUlkICsgXCInXCIpO1xuXHRcdGUuY29kZSA9ICdNT0RVTEVfTk9UX0ZPVU5EJztcblx0XHR0aHJvdyBlO1xuXHR9XG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIi8qXG4gKiBDb3B5cmlnaHQgKEMpIDIwMjAgRWxpYXN0aWsgKGVsaWFzdGlrc29mdHMuY29tKVxuICpcbiAqIFRoaXMgZmlsZSBpcyBwYXJ0IG9mIFwiSlNHYW1lVG9vbHNcIi5cbiAqXG4gKiBcIkpTR2FtZVRvb2xzXCIgaXMgZnJlZSBzb2Z0d2FyZTogeW91IGNhbiByZWRpc3RyaWJ1dGUgaXQgYW5kL29yIG1vZGlmeVxuICogaXQgdW5kZXIgdGhlIHRlcm1zIG9mIHRoZSBHTlUgR2VuZXJhbCBQdWJsaWMgTGljZW5zZSBhcyBwdWJsaXNoZWQgYnlcbiAqIHRoZSBGcmVlIFNvZnR3YXJlIEZvdW5kYXRpb24sIGVpdGhlciB2ZXJzaW9uIDMgb2YgdGhlIExpY2Vuc2UsIG9yXG4gKiAoYXQgeW91ciBvcHRpb24pIGFueSBsYXRlciB2ZXJzaW9uLlxuICpcbiAqIFwiSlNHYW1lVG9vbHNcIiBpcyBkaXN0cmlidXRlZCBpbiB0aGUgaG9wZSB0aGF0IGl0IHdpbGwgYmUgdXNlZnVsLFxuICogYnV0IFdJVEhPVVQgQU5ZIFdBUlJBTlRZOyB3aXRob3V0IGV2ZW4gdGhlIGltcGxpZWQgd2FycmFudHkgb2ZcbiAqIE1FUkNIQU5UQUJJTElUWSBvciBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRS4gIFNlZSB0aGVcbiAqIEdOVSBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlIGZvciBtb3JlIGRldGFpbHMuXG4gKlxuICogWW91IHNob3VsZCBoYXZlIHJlY2VpdmVkIGEgY29weSBvZiB0aGUgR05VIEdlbmVyYWwgUHVibGljIExpY2Vuc2VcbiAqIGFsb25nIHdpdGggXCJKU0dhbWVUb29sc1wiLiAgSWYgbm90LCBzZWUgPGh0dHA6Ly93d3cuZ251Lm9yZy9saWNlbnNlcy8+LlxuICovXG5pbXBvcnQgQ29uc3RhbnRzIGZyb20gXCIuL0NvbnN0YW50c1wiO1xuaW1wb3J0IEJ1dHRvbiBmcm9tIFwiLi9CdXR0b25cIjtcbmltcG9ydCBCdXR0b25JbWFnZSBmcm9tIFwiLi9CdXR0b25JbWFnZVwiO1xuaW1wb3J0IEltYWdlTG9hZGVyIGZyb20gXCIuL0ltYWdlTG9hZGVyXCI7XG5pbXBvcnQgTm90aWZpY2F0aW9uTWVzc2FnZSBmcm9tIFwiLi9Ob3RpZmljYXRpb25NZXNzYWdlXCI7XG5pbXBvcnQgVXRpbHMgZnJvbSBcIi4vVXRpbHNcIjtcbmltcG9ydCBNZW51IGZyb20gXCIuL01lbnVcIjtcbmltcG9ydCBJbnB1dCBmcm9tIFwiLi9JbnB1dFwiO1xuaW1wb3J0IExhYmVsIGZyb20gXCIuL0xhYmVsXCI7XG5pbXBvcnQgTGluayBmcm9tIFwiLi9MaW5rXCI7XG5pbXBvcnQgVG9vbHRpcCBmcm9tIFwiLi9Ub29sdGlwXCI7XG5pbXBvcnQgU2NlbmUgZnJvbSBcIi4vU2NlbmVcIjtcbmltcG9ydCBGUFNNZXRlciBmcm9tIFwiLi9GUFNNZXRlclwiO1xuaW1wb3J0IFByb2dyZXNzQmFyIGZyb20gXCIuL1Byb2dyZXNzQmFyXCI7XG5pbXBvcnQgQ2FudmFzIGZyb20gXCIuL0NhbnZhc1wiO1xuaW1wb3J0IENvbXBvbmVudCBmcm9tIFwiLi9Db21wb25lbnRcIjtcbmltcG9ydCBFYXNpbmdGdW5jdGlvbnMgZnJvbSBcIi4vRWFzaW5nRnVuY3Rpb25zXCI7XG5pbXBvcnQgQ29sIGZyb20gXCIuL0NvbFwiO1xuaW1wb3J0IENvbnRhaW5lciBmcm9tIFwiLi9Db250YWluZXJcIjtcbmltcG9ydCBSb3cgZnJvbSBcIi4vUm93XCI7XG5pbXBvcnQgSW1hZ2VDb250YWluZXIgZnJvbSBcIi4vSW1hZ2VDb250YWluZXJcIjtcbmltcG9ydCBBcnJvdyBmcm9tIFwiLi9BcnJvd1wiO1xuaW1wb3J0IENyb3NzIGZyb20gXCIuL0Nyb3NzXCI7XG5pbXBvcnQgU2Nyb2xsYmFyIGZyb20gXCIuL1Njcm9sbGJhclwiO1xuaW1wb3J0IFNjcm9sbGJhclZlcnRpY2FsIGZyb20gXCIuL1Njcm9sbGJhclZlcnRpY2FsXCI7XG5pbXBvcnQgU2Nyb2xsYmFySG9yaXpvbnRhbCBmcm9tIFwiLi9TY3JvbGxiYXJIb3Jpem9udGFsXCI7XG5pbXBvcnQgQm94IGZyb20gXCIuL0JveFwiO1xuaW1wb3J0IFN0eWxlIGZyb20gXCIuL1N0eWxlXCI7XG5pbXBvcnQgU2VsZWN0IGZyb20gXCIuL1NlbGVjdFwiO1xuaW1wb3J0IFNlbGVjdE9wdGlvbiBmcm9tIFwiLi9TZWxlY3RPcHRpb25cIjtcbmltcG9ydCBTZWxlY3RPcHRpb25zQ29udGFpbmVyIGZyb20gXCIuL1NlbGVjdE9wdGlvbnNDb250YWluZXJcIjtcbmltcG9ydCBUcmlhbmdsZSBmcm9tIFwiLi9UcmlhbmdsZVwiO1xuaW1wb3J0IENpcmNsZSBmcm9tIFwiLi9DaXJjbGVcIjtcbmltcG9ydCBSZWFjdG9yIGZyb20gXCIuL1JlYWN0b3JcIjtcbmltcG9ydCBFdmVudCBmcm9tIFwiLi9FdmVudFwiO1xuaW1wb3J0IFJlYWN0b3JDYW52YXMgZnJvbSBcIi4vUmVhY3RvckNhbnZhc1wiO1xuaW1wb3J0IEVycm9yU2NyZWVuIGZyb20gXCIuL0Vycm9yU2NyZWVuXCI7XG5cbmV4cG9ydCB7IENvbnN0YW50cywgQnV0dG9uLCBCdXR0b25JbWFnZSwgSW1hZ2VMb2FkZXIsIE5vdGlmaWNhdGlvbk1lc3NhZ2UsIFV0aWxzLCBNZW51LCBJbnB1dCwgTGFiZWwsIExpbmssIFRvb2x0aXAsIFNjZW5lLCBGUFNNZXRlciwgUHJvZ3Jlc3NCYXIsIENhbnZhcywgQ29tcG9uZW50LCBFYXNpbmdGdW5jdGlvbnMsIENvbCwgQ29udGFpbmVyLCBSb3csIEltYWdlQ29udGFpbmVyLCBBcnJvdywgQ3Jvc3MsIFNjcm9sbGJhciwgU2Nyb2xsYmFyVmVydGljYWwsIFNjcm9sbGJhckhvcml6b250YWwsIEJveCwgU3R5bGUsIFNlbGVjdCwgU2VsZWN0T3B0aW9uLCBTZWxlY3RPcHRpb25zQ29udGFpbmVyLCBUcmlhbmdsZSwgQ2lyY2xlLCBSZWFjdG9yLCBFdmVudCwgUmVhY3RvckNhbnZhcywgRXJyb3JTY3JlZW4gfTsiXSwibmFtZXMiOlsiQ29tcG9uZW50IiwiQ29uc3RhbnRzIiwiU3R5bGUiLCJVdGlscyIsIkFycm93IiwiX0NvbXBvbmVudCIsIngiLCJ5IiwidG9YIiwidG9ZIiwic3R5bGUiLCJfdGhpcyIsIl9jbGFzc0NhbGxDaGVjayIsIl9jYWxsU3VwZXIiLCJfZGVmaW5lUHJvcGVydHkiLCJfaW5oZXJpdHMiLCJfY3JlYXRlQ2xhc3MiLCJrZXkiLCJ2YWx1ZSIsImRyYXciLCJjb250ZXh0IiwiaGlkZGVuIiwiX3N1cGVyUHJvcEdldCIsImNhbnZhcyIsImN0eCIsImdldENvbnRleHQiLCJkcmF3QXJyb3ciLCJsaW5lV2lkdGgiLCJoZWFkU2l6ZSIsImNvbG9yIiwibGluZUNhcCIsImluaXQiLCJnZXQiLCJNYXRoIiwiYWJzIiwiU2V0dGluZyIsIkFSUk9XX0RFRkFVTFRfTElORV9TSVpFIiwiQVJST1dfREVGQVVMVF9IRUFEX1NJWkUiLCJBUlJPV19ERUZBVUxUX0NPTE9SIiwiQVJST1dfREVGQVVMVF9MSU5FX0NBUCIsImRlZmF1bHQiLCJCb3giLCJ3aWR0aCIsImhlaWdodCIsInNhdmUiLCJkcmF3QmFja2dyb3VuZCIsImRyYXdCb3JkZXIiLCJyZXN0b3JlIiwiYmFja2dyb3VuZENvbG9yIiwiZmlsbFN0eWxlIiwiZmlsbFJlY3QiLCJyb3VuZCIsImhvdmVyZWQiLCJjbGlja2VkIiwiYmFja2dyb3VuZENvbG9yRG93biIsImJhY2tncm91bmRDb2xvckhvdmVyIiwiYm9yZGVyQ29sb3IiLCJib3JkZXJTaXplIiwic3Ryb2tlU3R5bGUiLCJzdHJva2VSZWN0IiwiYm9yZGVyQ29sb3JEb3duIiwiYm9yZGVyQ29sb3JIb3ZlciIsInNlbGVjdGFibGUiLCJzZWxlY3RlZCIsImJvcmRlckNvbG9yU2VsZWN0ZWQiLCJSb3ciLCJCdXR0b24iLCJfUm93IiwibWF4V2lkdGgiLCJtYXhIZWlnaHQiLCJfbGVuIiwiYXJndW1lbnRzIiwibGVuZ3RoIiwiY29tcG9uZW50cyIsIkFycmF5IiwiX2tleSIsImNvbmNhdCIsImRyYXdDb21wb25lbnRzIiwicGFkZGluZyIsIkJVVFRPTl9ERUZBVUxUX0JBQ0tHUk9VTkQiLCJCVVRUT05fREVGQVVMVF9IT1ZFUl9CQUNLR1JPVU5EIiwiQlVUVE9OX0RFRkFVTFRfQ0xJQ0tfQkFDS0dST1VORCIsIkltYWdlQ29udGFpbmVyIiwiQnV0dG9uSW1hZ2UiLCJfQnV0dG9uIiwiaW1nU3JjIiwiYWxpZ25lbWVudCIsInZlcnRpY2FsQWxpZ25lbWVudCIsImltYWdlTG9hZGVyIiwiaW1hZ2UiLCJhZGQiLCJjb25zb2xlIiwid2FybiIsIlN0cmluZyIsIk5PVElDRV9NRVNTQUdFIiwiQlVUVE9OX0lNQUdFX0RFUFJFQ0FURUQiLCJsb2FkSW1hZ2UiLCJzZXQiLCJfc3VwZXJQcm9wU2V0IiwibWluV2lkdGgiLCJtaW5IZWlnaHQiLCJTY2VuZSIsIlJlYWN0b3JDYW52YXMiLCJFcnJvclNjcmVlbiIsIl9sYXN0RnJhbWVUaW1lIiwiV2Vha01hcCIsIl93aWR0aCIsIl9oZWlnaHQiLCJDYW52YXMiLCJzY2VuZSIsImF1dG9SZXNpemUiLCJtYXhGUFMiLCJfY2xhc3NQcml2YXRlRmllbGRJbml0U3BlYyIsImRvY3VtZW50IiwiY3JlYXRlRWxlbWVudCIsImNvbnRhaW5lciIsIkNBTlZBU19XSURUSCIsIkNBTlZBU19IRUlHSFQiLCJhcHBlbmRDaGlsZCIsInN0YXJ0ZWQiLCJfY2xhc3NQcml2YXRlRmllbGRTZXQiLCJoYXNFcnJvciIsImZ1bGxzY3JlZW4iLCJmdWxscGFnZSIsInNjZW5lRXJyb3IiLCJzY2VuZVByZXZpb3VzIiwicmVhY3RvciIsInJlZ2lzdGVyRXZlbnQiLCJjcmVhdGVFdmVudHMiLCJESVNBQkxFX09QVElNSVpBVElPTlMiLCJpbmZvIiwiT1BUSU1JWkFUSU9OX0RJU0FCTEVEIiwiRElTQUJMRV9DT05UQUlORVJTX0NVVFRJTkciLCJDT05UQUlORVJfQ1VUVElOR19ESVNBQkxFRCIsImRyYXdDbGVhciIsImRyYXdTY2VuZSIsInBhcmVudCIsInNjYWxlIiwiUElYRUxfUkFUSU8iLCJlIiwiZXJyb3JUZXh0Iiwic3RhY2siLCJlcnJvciIsIkVSUk9SX01FU1NBR0UiLCJFUlJPUl9NRVNTQUdFX0NBTlZBUyIsImNsZWFyIiwic3RhcnREcmF3IiwiZnVuYyIsInJlcXVlc3RBbmltYXRpb25GcmFtZSIsInRpbWUiLCJvZmZzZXRGcmFtZSIsIl9jbGFzc1ByaXZhdGVGaWVsZEdldCIsImZ1bGxzY3JlZW5FbGVtZW50IiwiRU5BQkxFX1BJWEVMX1JBVElPX1JFU0laSU5HIiwid2luZG93IiwiZGV2aWNlUGl4ZWxSYXRpbyIsIlJFU09MVVRJT05fU0NBTEUiLCJhdXRvRFBJIiwic3RvcERyYXciLCJhcHBlbmRUbyIsImVsZW1lbnQiLCJyZW1vdmUiLCJyZW1vdmVDaGlsZCIsInRvZ2dsZUZ1bGxzY3JlZW4iLCJ0b2dnbGVGdWxscGFnZSIsImVuYWJsZUF1dG9SZXNpemVDYW52YXMiLCJnZXRDYW52YXNXaWR0aCIsImRpc3BhdGNoRXZlbnQiLCJnZXRDYW52YXNIZWlnaHQiLCJjdXJzb3IiLCJfdGhpczIiLCJmb3JFYWNoIiwiZXZlbnROYW1lIiwiYWRkRXZlbnRMaXN0ZW5lciIsImV2ZW50IiwibW91c2VQb3NpdGlvbiIsImdldE1vdXNlUG9zIiwiZG9FdmVudHMiLCJwcmV2ZW50RGVmYXVsdCIsImNoYW5nZWRUb3VjaGVzIiwicG9zaXRpb24iLCJfdGhpczMiLCJnZXRDb21wb25lbnRzQXRQb3NpdGlvbiIsIl90b0NvbnN1bWFibGVBcnJheSIsInJldmVyc2UiLCJjb21wb25lbnQiLCJkaXNwYXRjaEV2ZW50Q29tcG9uZW50IiwiY2FsbGJhY2siLCJnZXRBbGxDb21wb25lbnRzIiwic3RhcnQiLCJ1bmRlZmluZWQiLCJfdGhpczQiLCJhbGxDb21wb25lbnRzIiwiZ2V0Q29tcG9uZW50c1RyZWUiLCJyZXN1bHQiLCJjaGlsZHMiLCJzb3J0Iiwic29ydENvbXBvbmVudHNUcmVlIiwic29tZSIsImNoaWxkIiwiaXNJbnNpZGUiLCJkaXNhYmxlZCIsInB1c2giLCJhcHBseSIsIkNpcmNsZSIsImRyYXdDaXJjbGUiLCJmaWxsIiwiZmlsbENvbG9yIiwiQ0lSQ0xFX0RFRkFVTFRfTElORV9TSVpFIiwiQ0lSQ0xFX0RFRkFVTFRfQ09MT1IiLCJDSVJDTEVfREVGQVVMVF9GSUxMIiwiQ0lSQ0xFX0RFRkFVTFRfTElORV9DQVAiLCJDSVJDTEVfREVGQVVMVF9GSUxMX0NPTE9SIiwiQ29udGFpbmVyIiwiX2lubmVySGVpZ2h0IiwiX2lubmVyV2lkdGgiLCJDb2wiLCJfQ29udGFpbmVyIiwiRElTQUJMRV9FWFBFUklNRU5UQUxfT1BUSU1JWkFUSU9OUyIsInVwZGF0ZUlubmVyV2lkdGgiLCJ1cGRhdGVJbm5lckhlaWdodCIsImFkZENoYW5nZUFjdGlvbiIsImN0eFRlbXAiLCJpc0N1dHRpbmciLCJjYW52YXNUbXAiLCJjdXJyZW50WSIsImRyYXdDb21wb25lbnQiLCJkcmF3SW1hZ2VEYXRhIiwib2Zmc2V0U2Nyb2xsWCIsIm9mZnNldFNjcm9sbFkiLCJpc0NvbXBvbmVudFZpc2libGUiLCJzcGFjZUJldHdlZW5Db21wb25lbnRzIiwidG90YWxIZWlnaHQiLCJpbm5lcldpZHRoIiwibWluIiwibWF4IiwiaW5uZXJIZWlnaHQiLCJSZWFjdG9yIiwiX3giLCJfeSIsIl9kaXNhYmxlZCIsIl9zZWxlY3RlZCIsIl9zdHlsZSIsImRlbHRhWCIsImRlbHRhWSIsImhhc0luaXRFdmVudHMiLCJtb3ZhYmxlIiwibW92aW5nIiwib2Zmc2V0TW92ZVgiLCJvZmZzZXRNb3ZlWSIsIm1vdmVFdmVudFN0YXJ0WCIsIm1vdmVFdmVudFN0YXJ0WSIsInRvdWNoRXZlbnRTdGFydFgiLCJ0b3VjaEV2ZW50U3RhcnRZIiwidG91Y2hFdmVudFN0YXJ0VGltZXN0YW1wIiwidG9vbHRpcCIsImluaXRFdmVudHMiLCJhZGRNb3ZlQWN0aW9uIiwiZW5hYmxlIiwiZGlzYWJsZSIsInNjcm9sbERpc2FibGVkIiwidG91Y2hTY3JvbGxFdmVudCIsInRvdWNoU3RhcnRFbmRFdmVudCIsInRpbWVzdGFtcCIsInBvcyIsInNldENsaWNrQWN0aW9uIiwidHJpZ2dlciIsInJlbW92ZUFsbENsaWNrQWN0aW9ucyIsImFkZENsaWNrQWN0aW9uIiwicmVtb3ZlQ2xpY2tBY3Rpb24iLCJyZW1vdmVFdmVudExpc3RlbmVyIiwicmVtb3ZlQWxsRXZlbnRMaXN0ZW5lciIsInNldEhvdmVyQWN0aW9uIiwicmVtb3ZlQWxsSG92ZXJBY3Rpb25zIiwiYWRkSG92ZXJBY3Rpb24iLCJyZW1vdmVIb3ZlckFjdGlvbiIsInNldERvd25BY3Rpb24iLCJyZW1vdmVBbGxEb3duQWN0aW9ucyIsImFkZERvd25BY3Rpb24iLCJyZW1vdmVEb3duQWN0aW9uIiwic2V0U2Nyb2xsQWN0aW9uIiwicmVtb3ZlQWxsU2Nyb2xsQWN0aW9ucyIsImFkZFNjcm9sbEFjdGlvbiIsInJlbW92ZVNjcm9sbEFjdGlvbiIsInNldE1vdmVBY3Rpb24iLCJyZW1vdmVBbGxNb3ZlQWN0aW9ucyIsInJlbW92ZU1vdmVBY3Rpb24iLCJzZXRDaGFuZ2VBY3Rpb24iLCJyZW1vdmVBbGxDaGFuZ2VBY3Rpb25zIiwicmVtb3ZlQ2hhbmdlQWN0aW9uIiwic2V0VXBBY3Rpb24iLCJyZW1vdmVBbGxVcEFjdGlvbnMiLCJhZGRVcEFjdGlvbiIsInJlbW92ZVVwQWN0aW9uIiwicGFyZW50V2lkdGgiLCJwYXJlbnRQYWRkaW5nIiwiQWxpZ25lbWVudCIsIkNFTlRFUiIsIlJJR0hUIiwiTEVGVCIsInBhcmVudEhlaWdodCIsIlZlcnRpY2FsQWxpZ25lbWVudCIsIkJPVFRPTSIsIlRPUCIsIkRFRkFVTFRfUEFERElORyIsIkRFRkFVTFRfU1BBQ0lORyIsImRlZmF1bHRTdHlsZSIsInNldEFsbCIsImdldFN0eWxlcyIsImdldEFsbFBhcmVudHMiLCJyZXMiLCJjb21wYXJlVG8iLCJvdGhlckNvbXBvbmVudCIsImlzRm9yZWdyb3VuZCIsImZvcmVncm91bmQiLCJvdGhlcklzRm9yZWdyb3VuZCIsInpJbmRleCIsIm90aGVyekluZGV4IiwiY29tcGFyZVRvQ29tcG9uZW50IiwiY29tcGFyZVRvTWVudSIsImNvbXBhcmVUb1Rvb2x0aXAiLCJjb21wYXJlVG9Ob3RpZmljYXRpb24iLCJjb21wYXJlVG9TY3JvbGxiYXIiLCJjb21wYXJlQ29tcG9uZW50cyIsIm90aGVyIiwiRElTQUJMRV9JU19DT01QT05FTlRfVklTSUJMRV9PUFRJTUlaQVRJT05TIiwiRk9OVF9GQU1JTFkiLCJGT05UX1NJWkUiLCJCVVRUT05fREVGQVVMVF9BTFRFUk5BVElWRV9CQUNLR1JPVU5EIiwiSU5QVVRfREVGQVVMVF9GT05UX0NPTE9SIiwiSU5QVVRfREVGQVVMVF9CQUNLR1JPVU5EX0NPTE9SIiwiSU5QVVRfREVGQVVMVF9CT1JERVJfQ09MT1IiLCJJTlBVVF9ERUZBVUxUX0JPUkRFUl9DT0xPUl9TRUxFQ1RFRCIsIklOUFVUX0RFRkFVTFRfU0VMRUNUX0NPTE9SIiwiTEFCRUxfREVGQVVMVF9GT05UX0NPTE9SIiwiTElOS19ERUZBVUxUX0NPTE9SIiwiTElOS19ERUZBVUxUX0hPVkVSX0NPTE9SIiwiTElOS19ERUZBVUxUX0NMSUNLX0NPTE9SIiwiTUVOVV9ERUZBVUxUX0JBQ0tHUk9VTkQiLCJNRU5VX0RFRkFVTFRfQkxVUl9CQUNLR1JPVU5EIiwiTk9USUZJQ0FUSU9OX0RFRkFVTFRfQkFDS0dST1VORCIsIk5PVElGSUNBVElPTl9ERUZBVUxUX0FOSU1BVElPTl9EVVJBVElPTiIsIlBST0dSRVNTX0RFRkFVTFRfQkFDS0dST1VORCIsIlBST0dSRVNTX0RFRkFVTFRfRk9SRUdST1VORCIsIlBST0dSRVNTX0RFRkFVTFRfQU5JTUFUSU9OX0RVUkFUSU9OIiwiVE9PTFRJUF9ERUZBVUxUX0JBQ0tHUk9VTkQiLCJDUk9TU19ERUZBVUxUX0xJTkVfQ0FQIiwiQ1JPU1NfREVGQVVMVF9DT0xPUiIsIkNST1NTX0RFRkFVTFRfTElORV9TSVpFIiwiU0NST0xMQkFSX0RFRkFVTFRfQkFDS0dST1VORCIsIlNDUk9MTEJBUl9ERUZBVUxUX0hPVkVSX0JBQ0tHUk9VTkQiLCJTQ1JPTExCQVJfREVGQVVMVF9DTElDS19CQUNLR1JPVU5EIiwiU0NST0xMQkFSX0RFRkFVTFRfU0laRSIsIkRFRkFVTFRfQk9SREVSX1NJWkUiLCJERUZBVUxUX0JPUkRFUl9DT0xPUl9TRUxFQ1RFRCIsIkRFRkFVTFRfQU5JTUFUSU9OX0RVUkFUSU9OIiwiVFJJQU5HTEVfREVGQVVMVF9MSU5FX0NBUCIsIlRSSUFOR0xFX0RFRkFVTFRfQ09MT1IiLCJUUklBTkdMRV9ERUZBVUxUX0ZJTExfQ09MT1IiLCJUUklBTkdMRV9ERUZBVUxUX0xJTkVfU0laRSIsIlRSSUFOR0xFX0RFRkFVTFRfRklMTCIsIlNFTEVDVF9ERUZBVUxUX0JBQ0tHUk9VTkQiLCJTRUxFQ1RfREVGQVVMVF9IT1ZFUl9CQUNLR1JPVU5EIiwiU0VMRUNUX0RFRkFVTFRfQ0xJQ0tfQkFDS0dST1VORCIsIkVSUk9SX01FTlVfQkFDS0dST1VORF9DT0xPUiIsIktleSIsIlVQIiwiRU5URVIiLCJFQ0hBUCIsIlRBQiIsIkRFRkFVTFQiLCJFUlJPUl9NRVNTQUdFX0NBTlZBU19MQUJFTCIsIlJFVFJZIiwiV0FSTklOR19NRVNTQUdFIiwiSU5QVVRfRlVMTFNDUkVFTiIsIkRFVEFJTFMiLCJTY3JvbGxiYXJIb3Jpem9udGFsIiwiU2Nyb2xsYmFyVmVydGljYWwiLCJfY29tcG9uZW50cyIsIl9tYXhXaWR0aCIsIl9tYXhIZWlnaHQiLCJfbWluV2lkdGgiLCJfbWluSGVpZ2h0IiwiX0JveCIsImFkZEFsbCIsInNjcm9sbGJhckhvcml6b250YWwiLCJzY3JvbGxiYXJWZXJ0aWNhbCIsImNvbnRyb2xTY3JvbGxpbmciLCJjb21wb25lbnRDaGFuZ2VkIiwiZHJhd1ZlcnRpY2FsU2Nyb2xsQmFyIiwiZHJhd0hvcml6b250YWxTY3JvbGxCYXIiLCJkcmF3U2Nyb2xsYmFycyIsInNjcm9sbFhEaXNhYmxlZCIsInNjcm9sbFlEaXNhYmxlZCIsImhhc0NoYW5nZWQiLCJfbGVuMiIsIl9rZXkyIiwiaSIsImV2ZW50Q2hhbmdlQ2FsbGJhY2siLCJfdGhpczUiLCJfbGVuMyIsIl9rZXkzIiwiaW5kZXhPZiIsImZpbHRlciIsImN1cnJlbnQiLCJfdGhpczYiLCJfdGhpczciLCJjaGFuZ2VkIiwiX3RoaXM4IiwiZ2V0Q29tcG9uZW50SWQiLCJjIiwic2Nyb2xsQXJlYVNpemVZIiwicGVyY2VudFNjcm9sbGJhclkiLCJzY3JvbGxBcmVhU2l6ZVgiLCJwZXJjZW50U2Nyb2xsYmFyWCIsImNvbXBvbmVudFdpZHRoIiwiY29tcG9uZW50SGVpZ2h0IiwiY2FudmFzV2lkdGgiLCJjYW52YXNIZWlnaHQiLCJDcm9zcyIsImRyYXdDcm9zcyIsImVhc2VJbkN1YmljIiwiZWFzZU91dEJvdW5jZSIsIm4xIiwiZDEiLCJlYXNlSW5PdXRDdWJpYyIsInBvdyIsImVhc2VJbk91dFNpbmUiLCJjb3MiLCJQSSIsImVhc2VJbk91dFF1aW50IiwiZWFzZUluT3V0Q2lyYyIsInNxcnQiLCJlYXNlSW5PdXRRdWFkIiwiZWFzZUluT3V0UXVhcnQiLCJlYXNlSW5PdXRFeHBvIiwiZWFzZUluT3V0QmFjayIsImMxIiwiYzIiLCJNZW51IiwiTGFiZWwiLCJfU2NlbmUiLCJsYWJlbERldGFpbHNTY2VuZUVycm9yIiwiYnV0dG9uU2NlbmVFcnJvciIsImJ1dHRvbkRldGFpbHNTY2VuZUVycm9yIiwiY29sRGV0YWlsc1NjZW5lRXJyb3IiLCJtZW51U2NlbmVFcnJvciIsInRleHQiLCJFdmVudCIsIm5hbWUiLCJjYWxsYmFja3MiLCJyZWdpc3RlckNhbGxiYWNrIiwicmVtb3ZlQ2FsbGJhY2siLCJyZW1vdmVBbGxDYWxsYmFja3MiLCJGUFNNZXRlciIsIl9MYWJlbCIsImRpc3BsYXlGcmFtZXMiLCJmcmFtZXMiLCJsYXN0RnJhbWUiLCJjdXJyZW50RlBTIiwiaW50ZXJ2YWxDb3VudEZQUyIsInNldEludGVydmFsIiwiY291bnRGUFMiLCJJbWFnZSIsInNyYyIsImRyYXdJbWFnZSIsImltZ1dpZHRoIiwiaW1nSGVpZ2h0IiwiYXNwZWN0UmF0aW8iLCJmbG9vciIsInNpemVzIiwiSW1hZ2VMb2FkZXIiLCJpbWFnZXMiLCJpbWFnZXNSZXNpemVkIiwidHJpZWRMb2FkaW5nIiwibmJJbWFnZXNUb0xvYWQiLCJmaXJzdEltYWdlIiwibG9hZCIsImltZyIsInNoaWZ0Iiwib25sb2FkIiwib25lcnJvciIsInNldFRpbWVvdXQiLCJPYmplY3QiLCJwcm90b3R5cGUiLCJoYXNPd25Qcm9wZXJ0eSIsImNhbGwiLCJ3IiwiaCIsImlkIiwiX3Bvc2l0aW9uU3RhcnQiLCJfcG9zaXRpb25TdGFydENsaWNrIiwiX3Bvc2l0aW9uRW5kIiwiSW5wdXQiLCJkZWZhdWx0VGV4dCIsImxhc3RJbnB1dFRleHQiLCJvZmZzZXRYIiwibGFzdFRpbWUiLCJ0b3RhbFRpbWUiLCJjbGlja0N1cnJlbnRQb3NpdGlvbiIsInRleHRDYWNoZSIsImlucHV0Iiwic2V0QXR0cmlidXRlIiwibGVmdCIsInRhYkluZGV4IiwicG9zaXRpb25TdGFydCIsInNlbGVjdGlvblN0YXJ0IiwicG9zaXRpb25FbmQiLCJzZWxlY3Rpb25FbmQiLCJib2R5IiwiYXBwZW5kVG9DYW52YXMiLCJub3RpY2VMb2dnZWQiLCJtb3ZlQWN0aW9uQ2FsbGJhY2siLCJpQ2xpY2siLCJnZXRMZXR0ZXJDbGlja2VkIiwicG9zaXRpb25TdGFydENsaWNrIiwic2V0U2VsZWN0aW9uUmFuZ2UiLCJjbGljayIsImJsdXIiLCJwZXJmb3JtYW5jZSIsIm5vdyIsIm9mZnNldFRpbWUiLCJjdHhUZXh0IiwidXBkYXRlVGV4dENhY2hlIiwiYXV0b1Njcm9sbCIsImRyYXdUZXh0IiwiY3VycmVudFgiLCJsZXR0ZXJzIiwieERyYXciLCJ5RHJhdyIsImlzTGV0dGVyVmlzaWJsZSIsImRyYXdIaWdobGlnaHQiLCJmb250Q29sb3IiLCJmb250U2l6ZSIsImZvbnRGYW1pbHkiLCJkcmF3Q3Vyc29yIiwiYmVnaW5QYXRoIiwibW92ZVRvIiwibGluZVRvIiwic3Ryb2tlIiwic2VsZWN0Q29sb3IiLCJ3cmFwVGV4dExpbmVzIiwiaXNDbGlja0N1cnJlbnRQb3NpdGlvbiIsImlzQ2xpY2tBZnRlclBvc2l0aW9uIiwibGV0dGVyIiwiY3VycmVudExldHRlciIsImxldHRlcklkIiwiY3Vyc29yUG9zaXRpb24iLCJjdXJyZW50TGV0dGVyU2l6ZSIsImN1cnNvclBvc2l0aW9uUG9zIiwiY3Vyc29yUG9zaXRpb25OZWciLCJvZmZzZXRYTmVnIiwiZm9jdXMiLCJlbmQiLCJkaXJlY3Rpb24iLCJfdGV4dCIsInNpemVzQ2FjaGUiLCJ1cGRhdGVTaXplcyIsIndyYXAiLCJib2xkIiwidW5kZXJsaW5lIiwiTGluayIsImluaXRpYWxDb2xvciIsImluaXRpYWxVbmRlcmxpbmUiLCJmb250Q29sb3JEb3duIiwiZm9udENvbG9ySG92ZXIiLCJfQ29sIiwibGFzdEtleSIsInNlbGVjdGVkQ29tcG9uZW50IiwiYmx1ckJhY2tncm91bmQiLCJkcmF3Qmx1ciIsImtleUNvZGUiLCJrZXlBY3Rpb24iLCJzZWxlY3QiLCJibHVyQ2FudmFzIiwiaW5kZXgiLCJzZWxlY3RhYmxlQ29tcG9uZW50cyIsIk5vdGlmaWNhdGlvbk1lc3NhZ2UiLCJkZWxheUJlZm9yZUNsb3NpbmciLCJlYXNpbmdGdW5jdGlvbiIsInRpbWVMYXN0RnJhbWUiLCJhbmltYXRpb25UaW1lIiwiY2xvc2VkIiwiY2xvc2luZyIsImNsb3NlQnV0dG9uIiwiY2xvc2UiLCJkaXNhYmxlQW5pbWF0aW9uIiwiZW5hYmxlQ2xvc2VCdXR0b24iLCJkaXNhYmxlQ2xvc2VCdXR0b24iLCJvZmZzZXRZIiwiYW5pbWF0aW9uRHVyYXRpb24iLCJvcGVuIiwiY29weSIsIl9jb25zdHJ1Y3QiLCJmb3JjZUNsb3NlIiwiX3ByZWNQZXJjZW50IiwiUHJvZ3Jlc3NCYXIiLCJkZWZhdWx0UGVyY2VudCIsInBlcmNlbnQiLCJkcmF3Rm9yZWdyb3VuZCIsIndpZHRoRm9yZWdyb3VuZCIsImFuaW1hdGlvblBlcmNlbnQiLCJmb3JlZ3JvdW5kQ29sb3IiLCJldmVudHMiLCJldmVudEFyZ3MiLCJfUmVhY3RvciIsInJlbW92ZUV2ZW50TGlzdGVuZXJDb21wb25lbnQiLCJ0b3RhbFdpZHRoIiwiU2Nyb2xsYmFyIiwic2l6ZSIsIm1heFdpZHRoUGFyZW50IiwiaW5uZXJXaWR0aFBhcmVudCIsIm1heEhlaWdodFBhcmVudCIsImlubmVySGVpZ2h0UGFyZW50IiwiY29udGVudFJhdGlvWCIsImNvbnRlbnRSYXRpb1kiLCJ3aW5kb3dTY3JvbGxTaXplWCIsIndpbmRvd1Njcm9sbFNpemVZIiwiX1Njcm9sbGJhciIsInBlcmNlbnRTY3JvbGxiYXJOZXh0IiwibmV3RGVsdGFYIiwibmV3RGVsdGFZIiwiVHJpYW5nbGUiLCJTZWxlY3QiLCJvcHRpb25Db250YWluZXIiLCJkZWZhdWx0T3B0aW9uIiwic2VsZWN0ZWRPcHRpb24iLCJsYWJlbCIsInRyaWFuZ2xlIiwidXBkYXRlV2lkdGgiLCJTZWxlY3RPcHRpb24iLCJkZWZhdWx0TGFiZWwiLCJfc2VsZWN0ZWRPcHRpb24iLCJTZWxlY3REcm9wZG93biIsIm1heEhlaWdodERyb3Bkb3duIiwib3B0aW9ucyIsInNlbGVjdEhlaWdodCIsIl9zdHlsZXMiLCJzdHlsZXMiLCJUb29sdGlwIiwiZHJhd1RyaWFuZ2xlIiwicHJlUmVuZGVyZWRGb250IiwicHJlUmVuZGVyRm9udCIsImNhcnMiLCJjdHhUbXAiLCJmb250IiwibWVhc3VyZVRleHQiLCJ0ZXh0QmFzZWxpbmUiLCJmaWxsVGV4dCIsInN4Iiwic3kiLCJzV2lkdGgiLCJzSGVpZ2h0IiwiZXJhc2VCZWxvdyIsImRlZ3JlZXMiLCJkcmF3SW1hZ2VXcmFwcGVyIiwiaW1hZ2VEYXRhIiwiaXNOYU4iLCJ0cmFuc2xhdGUiLCJyb3RhdGUiLCJjbGVhclJlY3QiLCJpc0FycmF5IiwibGluZXMiLCJzcGxpdCIsInhDdXJyZW50IiwieUN1cnJlbnQiLCJ5Rmlyc3QiLCJjdXJyZW50VGV4dCIsImN1cnJlbnRXaWR0aCIsImNvbG9ySW5kZXgiLCJ3cmFwVGV4dCIsImxpbWl0IiwicCIsInN1YnN0cmluZyIsInJpZ2h0IiwiZGlzYWJsZVdyYXAiLCJpbWFnZVNtb290aGluZ0VuYWJsZWQiLCJuZXdUZXh0Iiwid2lkdGhDYXIiLCJuYkNhckxpbmUiLCJoZWlnaHRUb3RhbCIsImxpbmVXcmFwIiwiaiIsIndpZHRoVGV4dCIsImNhcldpZHRoIiwiZnJvbXgiLCJmcm9teSIsInRveCIsInRveSIsImhlYWRsZW4iLCJkeCIsImR5IiwiYW5nbGUiLCJhdGFuMiIsInNpbiIsInJhZGl1cyIsImFyYyIsImlzRmlsdGVySHVlQXZhaWxhYmxlIiwiZ2V0SW1hZ2VEYXRhIiwiZGF0YSIsInBhcnNlTnVtYmVyIiwic3RyIiwicGFyc2VJbnQiLCJtYXRjaCIsImdldEZvbnRTaXplIiwicmVjdCIsImdldEJvdW5kaW5nQ2xpZW50UmVjdCIsImF1dG9SZXNpemVDYW52YXMiLCJpbml0aWFsV2lkdGgiLCJpbml0aWFsSGVpZ2h0IiwiZG9jdW1lbnRFbGVtZW50IiwiY2xpZW50V2lkdGgiLCJyYXRpbyIsImdldEF0dHJpYnV0ZSIsImF1dG9SZXNpemVDYW52YXNGdWxsc2NyZWVuIiwiZW5hYmxlQXV0b1Jlc2l6ZUNhbnZhc0Z1bGxzY3JlZW4iLCJhdXRvUmVzaXplQ2FudmFzRnVsbHBhZ2UiLCJtYXJnaW4iLCJlbmFibGVBdXRvUmVzaXplQ2FudmFzRnVsbHBhZ2UiLCJyZXF1ZXN0RnVsbHNjcmVlbiIsIm1velJlcXVlc3RGdWxsU2NyZWVuIiwid2Via2l0UmVxdWVzdEZ1bGxzY3JlZW4iLCJtc1JlcXVlc3RGdWxsc2NyZWVuIiwib1JlcXVlc3RGdWxsc2NyZWVuIiwiZXhpdEZ1bGxzY3JlZW4iLCJvbmZ1bGxzY3JlZW5jaGFuZ2UiLCJvbm1zZnVsbHNjcmVlbmNoYW5nZSIsIm9ubW96ZnVsbHNjcmVlbmNoYW5nZSIsIm9ud2Via2l0ZnVsbHNjcmVlbmNoYW5nZSIsIm9ub2tpdGZ1bGxzY3JlZW5jaGFuZ2UiLCJvbm9mdWxsc2NyZWVuY2hhbmdlIiwiY2xpZW50WCIsImNsaWVudFkiLCJ0b3AiLCJFYXNpbmdGdW5jdGlvbnMiLCJTZWxlY3RPcHRpb25zQ29udGFpbmVyIl0sInNvdXJjZVJvb3QiOiIifQ==