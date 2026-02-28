/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

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
/*!******************************!*\
  !*** ./examples/src/main.js ***!
  \******************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_helpers_get__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/get */ "./node_modules/@babel/runtime/helpers/esm/get.js");
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");






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
// Create components
var JGT = JSGameTools;
var imageLoader = new JGT.ImageLoader();
var buttonStyle = new JGT.Style({
  "backgroundColor": "#2ecc71",
  "backgroundColorHover": "#1abc9c",
  "backgroundColorDown": "#16a085"
});
var buttonStyleRed = new JGT.Style({
  "backgroundColor": "#CC2F2F",
  "backgroundColorHover": "#F23838",
  "backgroundColorDown": "#A62626"
});
var labelStyle = new JGT.Style({
  "fontColor": "white"
});
var labelStyleCenter = new JGT.Style({
  "fontColor": "white",
  "alignement": "center"
});
var labelStyleVerticalCenter = new JGT.Style({
  "fontColor": "white",
  "verticalAlignement": "center"
});
var buttonText = new JGT.Button(5, 5, null, null, buttonStyle, new JGT.Label("Show a notification", null, null, labelStyle));
var buttonText2 = new JGT.Button(5, 150, null, null, buttonStyle, new JGT.Label("Long text button ........... This should be on next line", null, null, labelStyle));
buttonText2.style.set("alignement", "right");
var pauseImage = new JGT.ImageContainer("pause.png", null, null, 64, 64, new JGT.Style({
  "verticalAlignement": "center",
  "alignement": "left"
}));
var buttonImage = new JGT.Button(null, 50, null, null, new JGT.Style({
  "alignement": "left"
}), new JGT.Row(5, 250, null, null, null, pauseImage, new JGT.Label("Pause", null, null, labelStyleVerticalCenter)));
buttonImage.movable = true;
var buttonTextFullscreen = new JGT.Button(5, 75, null, null, buttonStyle, new JGT.Label("Toggle fullscreen", null, null, labelStyle));
buttonTextFullscreen.style.set("alignement", "center");
var notification = new JGT.NotificationMessage(null, null, null, new JGT.Label("A notification", null, null, labelStyleCenter), new JGT.Row(null, null, null, null, null, new JGT.Label("Label : ", null, null, labelStyleVerticalCenter), new JGT.Button(null, null, null, null, null, new JGT.Label("Button", null, null, labelStyle))));
var buttonMenu1 = new JGT.Button(5, 5, null, null, buttonStyle, new JGT.Label("A button, aligned to the left", null, null, labelStyle));
buttonMenu1.style.set("alignement", "left");
var buttonMenu5 = new JGT.Button(5, 5, null, null, buttonStyle, new JGT.Label("Display a notification", null, null, labelStyle));
var buttonMenu2 = new JGT.Button(5, 5, null, null, buttonStyle, new JGT.Label("Another button, aligned to the right", null, null, labelStyle));
buttonMenu2.style.set("alignement", "right");
var buttonMenu3 = new JGT.Button(5, 5, null, null, buttonStyle, new JGT.Label("A long buttonnnnnnnnnnnnnnnnnnnnnnnnnn", null, null, labelStyle));
buttonMenu3.style.set("alignement", "right");
var buttonMenu4 = new JGT.Button(5, 5, null, null, buttonStyleRed, new JGT.Label("Close (centered)", null, null, labelStyle));
buttonMenu4.style.set("alignement", "center");
var buttonMenu6 = new JGT.Button(5, 5, null, null, buttonStyle, new JGT.Label("Disable/enable high DPI", null, null, labelStyle));
buttonMenu6.style.set("alignement", "center");
var menuLabel = new JGT.Label("Pause menu\nYou can use the arrow keys, press enter to select", null, null, labelStyle, "center");
menuLabel.style.set("alignement", "center");
var menu = new JGT.Menu(null, menuLabel, buttonMenu1, buttonMenu5, buttonMenu2, buttonMenu3, buttonMenu6, buttonMenu4, new JGT.Input(null, null, 150, null, new JGT.Style({
  "alignement": JGT.Constants.Alignement.CENTER
})), new JGT.Input(null, null, 150, null, new JGT.Style({
  "alignement": JGT.Constants.Alignement.CENTER
})));
var notification2 = new JGT.NotificationMessage(new JGT.Style({
  "backgroundColor": "rgba(46, 204, 225, 0.85)",
  "foreground": true
}), null, null, new JGT.Label("Hi!", null, null, labelStyleCenter));
var textField = new JGT.Input(5, 250, 150);
var label1 = new JGT.Label("A label", 5, 325);
label1.movable = true;
var row1 = new JGT.Row(5, 250, null, null, null, label1, textField);
var link1 = new JGT.Link("A long link", 5, 300);
var tooltip1 = new JGT.Tooltip(null, new JGT.Label("A tooltip\nSecond line", null, null, labelStyle), new JGT.Row(null, null, null, null, null, new JGT.Label("Label : ", null, null, labelStyleVerticalCenter), new JGT.Button(5, 150, null, null, buttonStyleRed, new JGT.Label("Button", null, null, labelStyle))));
label1.tooltip = tooltip1;
var tooltip2 = new JGT.Tooltip(null, new JGT.Label("A tooltip .... .. .. ...... Autowrap\nNew line", null, null, labelStyle));
buttonText2.tooltip = tooltip2;
var fpsMeter = new JGT.FPSMeter(false, null, null, new JGT.Style({
  "alignement": "right",
  "verticalAlignement": "bottom"
}));
fpsMeter.movable = true;
var progress = new JGT.ProgressBar(300, 5, 200, 25, null, null, JGT.EasingFunctions.easeInOutCubic);
progress.percent = 1;
progress.movable = true;
var tooltip3 = new JGT.Tooltip(null, new JGT.Label("Current: " + Math.round(progress.percent * 100) / 100 * 100 + "%", null, null, labelStyle));
progress.tooltip = tooltip3;
var buttonArrow = new JGT.Button(5, 150, null, null, buttonStyle, new JGT.Arrow(null, null, 100, 200, new JGT.Style({
  "color": "white"
})));
var colScrollable = new JGT.Col(255, 250, 250, 42, new JGT.Style({
  "backgroundColor": "#fff"
}), new JGT.Row(null, null, null, null, null, new JGT.Label("Test1"), new JGT.Label("Test2"), new JGT.Label("Test3"), new JGT.Label("Test4")), new JGT.Row(null, null, null, null, null, new JGT.Label("Test5"), new JGT.Label("Test6"), new JGT.Label("Test7"), new JGT.Label("Test8")), new JGT.Row(null, null, null, null, null, new JGT.Label("Test9"), new JGT.Label("Test10"), new JGT.Label("Test11"), new JGT.Label("Test12"), new JGT.Label("Test")));
colScrollable.style.set("padding", 10);
colScrollable.style.set("spaceBetweenComponents", 0);
var optionLast = new JGT.SelectOption(new JGT.Label("Removed in 5s"));
var options = new JGT.SelectOptionsContainer(75, null, new JGT.SelectOption(new JGT.Label("First choice")), new JGT.SelectOption(new JGT.Label("Second choice")), new JGT.SelectOption(new JGT.Label("Third choice")), optionLast);
var select = new JGT.Select(255, 315, null, null, new JGT.Style({
  "verticalAlignement": "bottom"
}), options);
select.movable = true;

// Custom component
var Box = /*#__PURE__*/function (_JGT$Component) {
  function Box(style) {
    (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, Box);
    return _callSuper(this, Box, [null, null, null, null, style]);
  }
  (0,_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5__["default"])(Box, _JGT$Component);
  return (0,_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(Box, [{
    key: "draw",
    value: function draw(context) {
      _superPropGet(Box, "draw", this, 3)([context]);
      var canvas = context.canvas;
      var ctx = canvas.getContext("2d");
      ctx.save();
      ctx.fillStyle = this.style.backgroundColor;
      ctx.fillRect(this.x, this.y, this.parent.width, this.parent.height);
      ctx.restore();
    }
  }]);
}(JGT.Component); // Create scene (containing components) and canvas
var box = new Box(new JGT.Style({
  "backgroundColor": "#888888"
}));
var scene = new JGT.Scene(box, buttonText, buttonText2, buttonImage, buttonTextFullscreen, notification, menu, notification2, row1, link1, tooltip1, tooltip2, fpsMeter, progress, tooltip3, buttonArrow, colScrollable, select, options);
var canvas = new JGT.Canvas(scene, document.getElementById("canvas"), null, null, true);
canvas.appendTo(document.getElementById("canvasContainer"));

// Events
buttonText.addClickAction(function () {
  notification.open();
});
buttonTextFullscreen.addClickAction(function () {
  canvas.toggleFullscreen();
});
buttonImage.addClickAction(function () {
  menu.enable();
});
buttonMenu4.addClickAction(function () {
  menu.disable();
});
buttonMenu5.addClickAction(function () {
  notification2.open();
});
buttonMenu6.addClickAction(function () {
  JGT.Constants.Setting.ENABLE_PIXEL_RATIO_RESIZING = !JGT.Constants.Setting.ENABLE_PIXEL_RATIO_RESIZING;
});
link1.addClickAction(function () {
  notification.open();
});

// Load pause image and start the canvas rendering
imageLoader.load(["pause.png"], function () {
  pauseImage.loadImage(imageLoader);
  canvas.startDraw();

  // Randomly change the progress value
  setInterval(function () {
    if (progress.percent < 1) {
      progress.percent = Math.random();
    } else if (progress.percent >= 1) {
      progress.percent = Math.random();
    }
    tooltip3.components[0].text = "Current: " + Math.round(Math.round(progress.percent * 100) / 100 * 100) + "%";
  }, 3000);

  // Remove the last option element
  setTimeout(function () {
    options.remove(optionLast);
  }, 5000);
});
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFDO0lBQ2xDLENBQUMsTUFBTSxJQUFHN0QsUUFBUSxDQUFDSSxPQUFPLElBQUksQ0FBQyxFQUFFO01BQy9CSixRQUFRLENBQUNJLE9BQU8sR0FBR0UsSUFBSSxDQUFDdUQsTUFBTSxDQUFDLENBQUM7SUFDbEM7SUFFQXhELFFBQVEsQ0FBQ3lELFVBQVUsQ0FBQyxDQUFDLENBQUMsQ0FBQ0MsSUFBSSxHQUFHLFdBQVcsR0FBR3pELElBQUksQ0FBQ0MsS0FBSyxDQUFFRCxJQUFJLENBQUNDLEtBQUssQ0FBQ1AsUUFBUSxDQUFDSSxPQUFPLEdBQUcsR0FBRyxDQUFDLEdBQUcsR0FBRyxHQUFJLEdBQUcsQ0FBQyxHQUFHLEdBQUc7RUFDaEgsQ0FBQyxFQUFFLElBQUksQ0FBQzs7RUFFUjtFQUNBNEQsVUFBVSxDQUFDLFlBQU07SUFDZmxELE9BQU8sQ0FBQ21ELE1BQU0sQ0FBQ3JELFVBQVUsQ0FBQztFQUM1QixDQUFDLEVBQUUsSUFBSSxDQUFDO0FBQ1YsQ0FBQyxDQUFDLEMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9qc2dhbWV0b29scy8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQuanMiLCJ3ZWJwYWNrOi8vanNnYW1ldG9vbHMvLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vY2xhc3NDYWxsQ2hlY2suanMiLCJ3ZWJwYWNrOi8vanNnYW1ldG9vbHMvLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vY3JlYXRlQ2xhc3MuanMiLCJ3ZWJwYWNrOi8vanNnYW1ldG9vbHMvLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vZ2V0LmpzIiwid2VicGFjazovL2pzZ2FtZXRvb2xzLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL2dldFByb3RvdHlwZU9mLmpzIiwid2VicGFjazovL2pzZ2FtZXRvb2xzLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL2luaGVyaXRzLmpzIiwid2VicGFjazovL2pzZ2FtZXRvb2xzLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4uanMiLCJ3ZWJwYWNrOi8vanNnYW1ldG9vbHMvLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vc2V0UHJvdG90eXBlT2YuanMiLCJ3ZWJwYWNrOi8vanNnYW1ldG9vbHMvLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vc3VwZXJQcm9wQmFzZS5qcyIsIndlYnBhY2s6Ly9qc2dhbWV0b29scy8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS90b1ByaW1pdGl2ZS5qcyIsIndlYnBhY2s6Ly9qc2dhbWV0b29scy8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS90b1Byb3BlcnR5S2V5LmpzIiwid2VicGFjazovL2pzZ2FtZXRvb2xzLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL3R5cGVvZi5qcyIsIndlYnBhY2s6Ly9qc2dhbWV0b29scy93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9qc2dhbWV0b29scy93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vanNnYW1ldG9vbHMvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9qc2dhbWV0b29scy93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL2pzZ2FtZXRvb2xzLy4vZXhhbXBsZXMvc3JjL21haW4uanMiXSwic291cmNlc0NvbnRlbnQiOlsiZnVuY3Rpb24gX2Fzc2VydFRoaXNJbml0aWFsaXplZChlKSB7XG4gIGlmICh2b2lkIDAgPT09IGUpIHRocm93IG5ldyBSZWZlcmVuY2VFcnJvcihcInRoaXMgaGFzbid0IGJlZW4gaW5pdGlhbGlzZWQgLSBzdXBlcigpIGhhc24ndCBiZWVuIGNhbGxlZFwiKTtcbiAgcmV0dXJuIGU7XG59XG5leHBvcnQgeyBfYXNzZXJ0VGhpc0luaXRpYWxpemVkIGFzIGRlZmF1bHQgfTsiLCJmdW5jdGlvbiBfY2xhc3NDYWxsQ2hlY2soYSwgbikge1xuICBpZiAoIShhIGluc3RhbmNlb2YgbikpIHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb25cIik7XG59XG5leHBvcnQgeyBfY2xhc3NDYWxsQ2hlY2sgYXMgZGVmYXVsdCB9OyIsImltcG9ydCB0b1Byb3BlcnR5S2V5IGZyb20gXCIuL3RvUHJvcGVydHlLZXkuanNcIjtcbmZ1bmN0aW9uIF9kZWZpbmVQcm9wZXJ0aWVzKGUsIHIpIHtcbiAgZm9yICh2YXIgdCA9IDA7IHQgPCByLmxlbmd0aDsgdCsrKSB7XG4gICAgdmFyIG8gPSByW3RdO1xuICAgIG8uZW51bWVyYWJsZSA9IG8uZW51bWVyYWJsZSB8fCAhMSwgby5jb25maWd1cmFibGUgPSAhMCwgXCJ2YWx1ZVwiIGluIG8gJiYgKG8ud3JpdGFibGUgPSAhMCksIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShlLCB0b1Byb3BlcnR5S2V5KG8ua2V5KSwgbyk7XG4gIH1cbn1cbmZ1bmN0aW9uIF9jcmVhdGVDbGFzcyhlLCByLCB0KSB7XG4gIHJldHVybiByICYmIF9kZWZpbmVQcm9wZXJ0aWVzKGUucHJvdG90eXBlLCByKSwgdCAmJiBfZGVmaW5lUHJvcGVydGllcyhlLCB0KSwgT2JqZWN0LmRlZmluZVByb3BlcnR5KGUsIFwicHJvdG90eXBlXCIsIHtcbiAgICB3cml0YWJsZTogITFcbiAgfSksIGU7XG59XG5leHBvcnQgeyBfY3JlYXRlQ2xhc3MgYXMgZGVmYXVsdCB9OyIsImltcG9ydCBzdXBlclByb3BCYXNlIGZyb20gXCIuL3N1cGVyUHJvcEJhc2UuanNcIjtcbmZ1bmN0aW9uIF9nZXQoKSB7XG4gIHJldHVybiBfZ2V0ID0gXCJ1bmRlZmluZWRcIiAhPSB0eXBlb2YgUmVmbGVjdCAmJiBSZWZsZWN0LmdldCA/IFJlZmxlY3QuZ2V0LmJpbmQoKSA6IGZ1bmN0aW9uIChlLCB0LCByKSB7XG4gICAgdmFyIHAgPSBzdXBlclByb3BCYXNlKGUsIHQpO1xuICAgIGlmIChwKSB7XG4gICAgICB2YXIgbiA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IocCwgdCk7XG4gICAgICByZXR1cm4gbi5nZXQgPyBuLmdldC5jYWxsKGFyZ3VtZW50cy5sZW5ndGggPCAzID8gZSA6IHIpIDogbi52YWx1ZTtcbiAgICB9XG4gIH0sIF9nZXQuYXBwbHkobnVsbCwgYXJndW1lbnRzKTtcbn1cbmV4cG9ydCB7IF9nZXQgYXMgZGVmYXVsdCB9OyIsImZ1bmN0aW9uIF9nZXRQcm90b3R5cGVPZih0KSB7XG4gIHJldHVybiBfZ2V0UHJvdG90eXBlT2YgPSBPYmplY3Quc2V0UHJvdG90eXBlT2YgPyBPYmplY3QuZ2V0UHJvdG90eXBlT2YuYmluZCgpIDogZnVuY3Rpb24gKHQpIHtcbiAgICByZXR1cm4gdC5fX3Byb3RvX18gfHwgT2JqZWN0LmdldFByb3RvdHlwZU9mKHQpO1xuICB9LCBfZ2V0UHJvdG90eXBlT2YodCk7XG59XG5leHBvcnQgeyBfZ2V0UHJvdG90eXBlT2YgYXMgZGVmYXVsdCB9OyIsImltcG9ydCBzZXRQcm90b3R5cGVPZiBmcm9tIFwiLi9zZXRQcm90b3R5cGVPZi5qc1wiO1xuZnVuY3Rpb24gX2luaGVyaXRzKHQsIGUpIHtcbiAgaWYgKFwiZnVuY3Rpb25cIiAhPSB0eXBlb2YgZSAmJiBudWxsICE9PSBlKSB0aHJvdyBuZXcgVHlwZUVycm9yKFwiU3VwZXIgZXhwcmVzc2lvbiBtdXN0IGVpdGhlciBiZSBudWxsIG9yIGEgZnVuY3Rpb25cIik7XG4gIHQucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShlICYmIGUucHJvdG90eXBlLCB7XG4gICAgY29uc3RydWN0b3I6IHtcbiAgICAgIHZhbHVlOiB0LFxuICAgICAgd3JpdGFibGU6ICEwLFxuICAgICAgY29uZmlndXJhYmxlOiAhMFxuICAgIH1cbiAgfSksIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0LCBcInByb3RvdHlwZVwiLCB7XG4gICAgd3JpdGFibGU6ICExXG4gIH0pLCBlICYmIHNldFByb3RvdHlwZU9mKHQsIGUpO1xufVxuZXhwb3J0IHsgX2luaGVyaXRzIGFzIGRlZmF1bHQgfTsiLCJpbXBvcnQgX3R5cGVvZiBmcm9tIFwiLi90eXBlb2YuanNcIjtcbmltcG9ydCBhc3NlcnRUaGlzSW5pdGlhbGl6ZWQgZnJvbSBcIi4vYXNzZXJ0VGhpc0luaXRpYWxpemVkLmpzXCI7XG5mdW5jdGlvbiBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybih0LCBlKSB7XG4gIGlmIChlICYmIChcIm9iamVjdFwiID09IF90eXBlb2YoZSkgfHwgXCJmdW5jdGlvblwiID09IHR5cGVvZiBlKSkgcmV0dXJuIGU7XG4gIGlmICh2b2lkIDAgIT09IGUpIHRocm93IG5ldyBUeXBlRXJyb3IoXCJEZXJpdmVkIGNvbnN0cnVjdG9ycyBtYXkgb25seSByZXR1cm4gb2JqZWN0IG9yIHVuZGVmaW5lZFwiKTtcbiAgcmV0dXJuIGFzc2VydFRoaXNJbml0aWFsaXplZCh0KTtcbn1cbmV4cG9ydCB7IF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuIGFzIGRlZmF1bHQgfTsiLCJmdW5jdGlvbiBfc2V0UHJvdG90eXBlT2YodCwgZSkge1xuICByZXR1cm4gX3NldFByb3RvdHlwZU9mID0gT2JqZWN0LnNldFByb3RvdHlwZU9mID8gT2JqZWN0LnNldFByb3RvdHlwZU9mLmJpbmQoKSA6IGZ1bmN0aW9uICh0LCBlKSB7XG4gICAgcmV0dXJuIHQuX19wcm90b19fID0gZSwgdDtcbiAgfSwgX3NldFByb3RvdHlwZU9mKHQsIGUpO1xufVxuZXhwb3J0IHsgX3NldFByb3RvdHlwZU9mIGFzIGRlZmF1bHQgfTsiLCJpbXBvcnQgZ2V0UHJvdG90eXBlT2YgZnJvbSBcIi4vZ2V0UHJvdG90eXBlT2YuanNcIjtcbmZ1bmN0aW9uIF9zdXBlclByb3BCYXNlKHQsIG8pIHtcbiAgZm9yICg7ICF7fS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHQsIG8pICYmIG51bGwgIT09ICh0ID0gZ2V0UHJvdG90eXBlT2YodCkpOyk7XG4gIHJldHVybiB0O1xufVxuZXhwb3J0IHsgX3N1cGVyUHJvcEJhc2UgYXMgZGVmYXVsdCB9OyIsImltcG9ydCBfdHlwZW9mIGZyb20gXCIuL3R5cGVvZi5qc1wiO1xuZnVuY3Rpb24gdG9QcmltaXRpdmUodCwgcikge1xuICBpZiAoXCJvYmplY3RcIiAhPSBfdHlwZW9mKHQpIHx8ICF0KSByZXR1cm4gdDtcbiAgdmFyIGUgPSB0W1N5bWJvbC50b1ByaW1pdGl2ZV07XG4gIGlmICh2b2lkIDAgIT09IGUpIHtcbiAgICB2YXIgaSA9IGUuY2FsbCh0LCByIHx8IFwiZGVmYXVsdFwiKTtcbiAgICBpZiAoXCJvYmplY3RcIiAhPSBfdHlwZW9mKGkpKSByZXR1cm4gaTtcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQEB0b1ByaW1pdGl2ZSBtdXN0IHJldHVybiBhIHByaW1pdGl2ZSB2YWx1ZS5cIik7XG4gIH1cbiAgcmV0dXJuIChcInN0cmluZ1wiID09PSByID8gU3RyaW5nIDogTnVtYmVyKSh0KTtcbn1cbmV4cG9ydCB7IHRvUHJpbWl0aXZlIGFzIGRlZmF1bHQgfTsiLCJpbXBvcnQgX3R5cGVvZiBmcm9tIFwiLi90eXBlb2YuanNcIjtcbmltcG9ydCB0b1ByaW1pdGl2ZSBmcm9tIFwiLi90b1ByaW1pdGl2ZS5qc1wiO1xuZnVuY3Rpb24gdG9Qcm9wZXJ0eUtleSh0KSB7XG4gIHZhciBpID0gdG9QcmltaXRpdmUodCwgXCJzdHJpbmdcIik7XG4gIHJldHVybiBcInN5bWJvbFwiID09IF90eXBlb2YoaSkgPyBpIDogaSArIFwiXCI7XG59XG5leHBvcnQgeyB0b1Byb3BlcnR5S2V5IGFzIGRlZmF1bHQgfTsiLCJmdW5jdGlvbiBfdHlwZW9mKG8pIHtcbiAgXCJAYmFiZWwvaGVscGVycyAtIHR5cGVvZlwiO1xuXG4gIHJldHVybiBfdHlwZW9mID0gXCJmdW5jdGlvblwiID09IHR5cGVvZiBTeW1ib2wgJiYgXCJzeW1ib2xcIiA9PSB0eXBlb2YgU3ltYm9sLml0ZXJhdG9yID8gZnVuY3Rpb24gKG8pIHtcbiAgICByZXR1cm4gdHlwZW9mIG87XG4gIH0gOiBmdW5jdGlvbiAobykge1xuICAgIHJldHVybiBvICYmIFwiZnVuY3Rpb25cIiA9PSB0eXBlb2YgU3ltYm9sICYmIG8uY29uc3RydWN0b3IgPT09IFN5bWJvbCAmJiBvICE9PSBTeW1ib2wucHJvdG90eXBlID8gXCJzeW1ib2xcIiA6IHR5cGVvZiBvO1xuICB9LCBfdHlwZW9mKG8pO1xufVxuZXhwb3J0IHsgX3R5cGVvZiBhcyBkZWZhdWx0IH07IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRpZiAoIShtb2R1bGVJZCBpbiBfX3dlYnBhY2tfbW9kdWxlc19fKSkge1xuXHRcdGRlbGV0ZSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRcdHZhciBlID0gbmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIiArIG1vZHVsZUlkICsgXCInXCIpO1xuXHRcdGUuY29kZSA9ICdNT0RVTEVfTk9UX0ZPVU5EJztcblx0XHR0aHJvdyBlO1xuXHR9XG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIi8qXG4gKiBDb3B5cmlnaHQgKEMpIDIwMjAgRWxpYXN0aWsgKGVsaWFzdGlrc29mdHMuY29tKVxuICpcbiAqIFRoaXMgZmlsZSBpcyBwYXJ0IG9mIFwiSlNHYW1lVG9vbHNcIi5cbiAqXG4gKiBcIkpTR2FtZVRvb2xzXCIgaXMgZnJlZSBzb2Z0d2FyZTogeW91IGNhbiByZWRpc3RyaWJ1dGUgaXQgYW5kL29yIG1vZGlmeVxuICogaXQgdW5kZXIgdGhlIHRlcm1zIG9mIHRoZSBHTlUgR2VuZXJhbCBQdWJsaWMgTGljZW5zZSBhcyBwdWJsaXNoZWQgYnlcbiAqIHRoZSBGcmVlIFNvZnR3YXJlIEZvdW5kYXRpb24sIGVpdGhlciB2ZXJzaW9uIDMgb2YgdGhlIExpY2Vuc2UsIG9yXG4gKiAoYXQgeW91ciBvcHRpb24pIGFueSBsYXRlciB2ZXJzaW9uLlxuICpcbiAqIFwiSlNHYW1lVG9vbHNcIiBpcyBkaXN0cmlidXRlZCBpbiB0aGUgaG9wZSB0aGF0IGl0IHdpbGwgYmUgdXNlZnVsLFxuICogYnV0IFdJVEhPVVQgQU5ZIFdBUlJBTlRZOyB3aXRob3V0IGV2ZW4gdGhlIGltcGxpZWQgd2FycmFudHkgb2ZcbiAqIE1FUkNIQU5UQUJJTElUWSBvciBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRS4gIFNlZSB0aGVcbiAqIEdOVSBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlIGZvciBtb3JlIGRldGFpbHMuXG4gKlxuICogWW91IHNob3VsZCBoYXZlIHJlY2VpdmVkIGEgY29weSBvZiB0aGUgR05VIEdlbmVyYWwgUHVibGljIExpY2Vuc2VcbiAqIGFsb25nIHdpdGggXCJKU0dhbWVUb29sc1wiLiAgSWYgbm90LCBzZWUgPGh0dHA6Ly93d3cuZ251Lm9yZy9saWNlbnNlcy8+LlxuICovXG4vLyBDcmVhdGUgY29tcG9uZW50c1xuY29uc3QgSkdUID0gSlNHYW1lVG9vbHM7XG5cbmNvbnN0IGltYWdlTG9hZGVyID0gbmV3IEpHVC5JbWFnZUxvYWRlcigpO1xuXG5jb25zdCBidXR0b25TdHlsZSA9IG5ldyBKR1QuU3R5bGUoe1xuICBcImJhY2tncm91bmRDb2xvclwiOiBcIiMyZWNjNzFcIixcbiAgXCJiYWNrZ3JvdW5kQ29sb3JIb3ZlclwiOiBcIiMxYWJjOWNcIixcbiAgXCJiYWNrZ3JvdW5kQ29sb3JEb3duXCI6IFwiIzE2YTA4NVwiXG59KTtcblxuY29uc3QgYnV0dG9uU3R5bGVSZWQgPSBuZXcgSkdULlN0eWxlKHtcbiAgXCJiYWNrZ3JvdW5kQ29sb3JcIjogXCIjQ0MyRjJGXCIsXG4gIFwiYmFja2dyb3VuZENvbG9ySG92ZXJcIjogXCIjRjIzODM4XCIsXG4gIFwiYmFja2dyb3VuZENvbG9yRG93blwiOiBcIiNBNjI2MjZcIlxufSk7XG5cbmNvbnN0IGxhYmVsU3R5bGUgPSBuZXcgSkdULlN0eWxlKHtcbiAgXCJmb250Q29sb3JcIjogXCJ3aGl0ZVwiXG59KTtcblxuY29uc3QgbGFiZWxTdHlsZUNlbnRlciA9IG5ldyBKR1QuU3R5bGUoe1xuICBcImZvbnRDb2xvclwiOiBcIndoaXRlXCIsXG4gIFwiYWxpZ25lbWVudFwiOiBcImNlbnRlclwiXG59KTtcblxuY29uc3QgbGFiZWxTdHlsZVZlcnRpY2FsQ2VudGVyID0gbmV3IEpHVC5TdHlsZSh7XG4gIFwiZm9udENvbG9yXCI6IFwid2hpdGVcIixcbiAgXCJ2ZXJ0aWNhbEFsaWduZW1lbnRcIjogXCJjZW50ZXJcIlxufSk7XG5cbmNvbnN0IGJ1dHRvblRleHQgPSBuZXcgSkdULkJ1dHRvbig1LCA1LCBudWxsLCBudWxsLCBidXR0b25TdHlsZSwgbmV3IEpHVC5MYWJlbChcIlNob3cgYSBub3RpZmljYXRpb25cIiwgbnVsbCwgbnVsbCwgbGFiZWxTdHlsZSkpO1xuY29uc3QgYnV0dG9uVGV4dDIgPSBuZXcgSkdULkJ1dHRvbig1LCAxNTAsIG51bGwsIG51bGwsIGJ1dHRvblN0eWxlLCBuZXcgSkdULkxhYmVsKFwiTG9uZyB0ZXh0IGJ1dHRvbiAuLi4uLi4uLi4uLiBUaGlzIHNob3VsZCBiZSBvbiBuZXh0IGxpbmVcIiwgbnVsbCwgbnVsbCwgbGFiZWxTdHlsZSkpO1xuYnV0dG9uVGV4dDIuc3R5bGUuc2V0KFwiYWxpZ25lbWVudFwiLCBcInJpZ2h0XCIpO1xuY29uc3QgcGF1c2VJbWFnZSA9IG5ldyBKR1QuSW1hZ2VDb250YWluZXIoXCJwYXVzZS5wbmdcIiwgbnVsbCwgbnVsbCwgNjQsIDY0LCBuZXcgSkdULlN0eWxlKHsgXCJ2ZXJ0aWNhbEFsaWduZW1lbnRcIjogXCJjZW50ZXJcIiwgXCJhbGlnbmVtZW50XCI6IFwibGVmdFwiIH0pKTtcbmNvbnN0IGJ1dHRvbkltYWdlID0gbmV3IEpHVC5CdXR0b24obnVsbCwgNTAsIG51bGwsIG51bGwsIG5ldyBKR1QuU3R5bGUoeyBcImFsaWduZW1lbnRcIjogXCJsZWZ0XCIgfSksIG5ldyBKR1QuUm93KDUsIDI1MCwgbnVsbCwgbnVsbCwgbnVsbCwgcGF1c2VJbWFnZSwgbmV3IEpHVC5MYWJlbChcIlBhdXNlXCIsIG51bGwsIG51bGwsIGxhYmVsU3R5bGVWZXJ0aWNhbENlbnRlcikpKTtcbmJ1dHRvbkltYWdlLm1vdmFibGUgPSB0cnVlO1xuY29uc3QgYnV0dG9uVGV4dEZ1bGxzY3JlZW4gPSBuZXcgSkdULkJ1dHRvbig1LCA3NSwgbnVsbCwgbnVsbCwgYnV0dG9uU3R5bGUsIG5ldyBKR1QuTGFiZWwoXCJUb2dnbGUgZnVsbHNjcmVlblwiLCBudWxsLCBudWxsLCBsYWJlbFN0eWxlKSk7XG5idXR0b25UZXh0RnVsbHNjcmVlbi5zdHlsZS5zZXQoXCJhbGlnbmVtZW50XCIsIFwiY2VudGVyXCIpO1xuY29uc3Qgbm90aWZpY2F0aW9uID0gbmV3IEpHVC5Ob3RpZmljYXRpb25NZXNzYWdlKG51bGwsIG51bGwsIG51bGwsIG5ldyBKR1QuTGFiZWwoXCJBIG5vdGlmaWNhdGlvblwiLCBudWxsLCBudWxsLCBsYWJlbFN0eWxlQ2VudGVyKSwgbmV3IEpHVC5Sb3cobnVsbCwgbnVsbCwgbnVsbCwgbnVsbCwgbnVsbCwgbmV3IEpHVC5MYWJlbChcIkxhYmVsIDogXCIsIG51bGwsIG51bGwsIGxhYmVsU3R5bGVWZXJ0aWNhbENlbnRlciksIG5ldyBKR1QuQnV0dG9uKG51bGwsIG51bGwsIG51bGwsIG51bGwsIG51bGwsIG5ldyBKR1QuTGFiZWwoXCJCdXR0b25cIiwgbnVsbCwgbnVsbCwgbGFiZWxTdHlsZSkpKSk7XG5cbmNvbnN0IGJ1dHRvbk1lbnUxID0gbmV3IEpHVC5CdXR0b24oNSwgNSwgbnVsbCwgbnVsbCwgYnV0dG9uU3R5bGUsIG5ldyBKR1QuTGFiZWwoXCJBIGJ1dHRvbiwgYWxpZ25lZCB0byB0aGUgbGVmdFwiLCBudWxsLCBudWxsLCBsYWJlbFN0eWxlKSk7XG5idXR0b25NZW51MS5zdHlsZS5zZXQoXCJhbGlnbmVtZW50XCIsIFwibGVmdFwiKTtcbmNvbnN0IGJ1dHRvbk1lbnU1ID0gbmV3IEpHVC5CdXR0b24oNSwgNSwgbnVsbCwgbnVsbCwgYnV0dG9uU3R5bGUsIG5ldyBKR1QuTGFiZWwoXCJEaXNwbGF5IGEgbm90aWZpY2F0aW9uXCIsIG51bGwsIG51bGwsIGxhYmVsU3R5bGUpKTtcbmNvbnN0IGJ1dHRvbk1lbnUyID0gbmV3IEpHVC5CdXR0b24oNSwgNSwgbnVsbCwgbnVsbCwgYnV0dG9uU3R5bGUsIG5ldyBKR1QuTGFiZWwoXCJBbm90aGVyIGJ1dHRvbiwgYWxpZ25lZCB0byB0aGUgcmlnaHRcIiwgbnVsbCwgbnVsbCwgbGFiZWxTdHlsZSkpO1xuYnV0dG9uTWVudTIuc3R5bGUuc2V0KFwiYWxpZ25lbWVudFwiLCBcInJpZ2h0XCIpO1xuY29uc3QgYnV0dG9uTWVudTMgPSBuZXcgSkdULkJ1dHRvbig1LCA1LCBudWxsLCBudWxsLCBidXR0b25TdHlsZSwgbmV3IEpHVC5MYWJlbChcIkEgbG9uZyBidXR0b25ubm5ubm5ubm5ubm5ubm5ubm5ubm5ubm5uXCIsIG51bGwsIG51bGwsIGxhYmVsU3R5bGUpKTtcbmJ1dHRvbk1lbnUzLnN0eWxlLnNldChcImFsaWduZW1lbnRcIiwgXCJyaWdodFwiKTtcbmNvbnN0IGJ1dHRvbk1lbnU0ID0gbmV3IEpHVC5CdXR0b24oNSwgNSwgbnVsbCwgbnVsbCwgYnV0dG9uU3R5bGVSZWQsIG5ldyBKR1QuTGFiZWwoXCJDbG9zZSAoY2VudGVyZWQpXCIsIG51bGwsIG51bGwsIGxhYmVsU3R5bGUpKTtcbmJ1dHRvbk1lbnU0LnN0eWxlLnNldChcImFsaWduZW1lbnRcIiwgXCJjZW50ZXJcIik7XG5jb25zdCBidXR0b25NZW51NiA9IG5ldyBKR1QuQnV0dG9uKDUsIDUsIG51bGwsIG51bGwsIGJ1dHRvblN0eWxlLCBuZXcgSkdULkxhYmVsKFwiRGlzYWJsZS9lbmFibGUgaGlnaCBEUElcIiwgbnVsbCwgbnVsbCwgbGFiZWxTdHlsZSkpO1xuYnV0dG9uTWVudTYuc3R5bGUuc2V0KFwiYWxpZ25lbWVudFwiLCBcImNlbnRlclwiKTtcbmNvbnN0IG1lbnVMYWJlbCA9IG5ldyBKR1QuTGFiZWwoXCJQYXVzZSBtZW51XFxuWW91IGNhbiB1c2UgdGhlIGFycm93IGtleXMsIHByZXNzIGVudGVyIHRvIHNlbGVjdFwiLCBudWxsLCBudWxsLCBsYWJlbFN0eWxlLCBcImNlbnRlclwiKTtcbm1lbnVMYWJlbC5zdHlsZS5zZXQoXCJhbGlnbmVtZW50XCIsIFwiY2VudGVyXCIpO1xuY29uc3QgbWVudSA9IG5ldyBKR1QuTWVudShudWxsLCBtZW51TGFiZWwsIGJ1dHRvbk1lbnUxLCBidXR0b25NZW51NSwgYnV0dG9uTWVudTIsIGJ1dHRvbk1lbnUzLCBidXR0b25NZW51NiwgYnV0dG9uTWVudTQsIG5ldyBKR1QuSW5wdXQobnVsbCwgbnVsbCwgMTUwLCBudWxsLCBuZXcgSkdULlN0eWxlKHtcImFsaWduZW1lbnRcIjogSkdULkNvbnN0YW50cy5BbGlnbmVtZW50LkNFTlRFUiB9KSksIG5ldyBKR1QuSW5wdXQobnVsbCwgbnVsbCwgMTUwLCBudWxsLCBuZXcgSkdULlN0eWxlKHtcImFsaWduZW1lbnRcIjogSkdULkNvbnN0YW50cy5BbGlnbmVtZW50LkNFTlRFUiB9KSkpO1xuXG5jb25zdCBub3RpZmljYXRpb24yID0gbmV3IEpHVC5Ob3RpZmljYXRpb25NZXNzYWdlKG5ldyBKR1QuU3R5bGUoeyBcImJhY2tncm91bmRDb2xvclwiOiBcInJnYmEoNDYsIDIwNCwgMjI1LCAwLjg1KVwiLCBcImZvcmVncm91bmRcIjogdHJ1ZSB9KSwgbnVsbCwgbnVsbCwgbmV3IEpHVC5MYWJlbChcIkhpIVwiLCBudWxsLCBudWxsLCBsYWJlbFN0eWxlQ2VudGVyKSk7XG5jb25zdCB0ZXh0RmllbGQgPSBuZXcgSkdULklucHV0KDUsIDI1MCwgMTUwKTtcbmNvbnN0IGxhYmVsMSA9IG5ldyBKR1QuTGFiZWwoXCJBIGxhYmVsXCIsIDUsIDMyNSk7XG5sYWJlbDEubW92YWJsZSA9IHRydWU7XG5jb25zdCByb3cxID0gbmV3IEpHVC5Sb3coNSwgMjUwLCBudWxsLCBudWxsLCBudWxsLCBsYWJlbDEsIHRleHRGaWVsZCk7XG5jb25zdCBsaW5rMSA9IG5ldyBKR1QuTGluayhcIkEgbG9uZyBsaW5rXCIsIDUsIDMwMCk7XG5jb25zdCB0b29sdGlwMSA9IG5ldyBKR1QuVG9vbHRpcChudWxsLCBuZXcgSkdULkxhYmVsKFwiQSB0b29sdGlwXFxuU2Vjb25kIGxpbmVcIiwgbnVsbCwgbnVsbCwgbGFiZWxTdHlsZSksIG5ldyBKR1QuUm93KG51bGwsIG51bGwsIG51bGwsIG51bGwsIG51bGwsIG5ldyBKR1QuTGFiZWwoXCJMYWJlbCA6IFwiLCBudWxsLCBudWxsLCBsYWJlbFN0eWxlVmVydGljYWxDZW50ZXIpLCBuZXcgSkdULkJ1dHRvbig1LCAxNTAsIG51bGwsIG51bGwsIGJ1dHRvblN0eWxlUmVkLCBuZXcgSkdULkxhYmVsKFwiQnV0dG9uXCIsIG51bGwsIG51bGwsIGxhYmVsU3R5bGUpKSkpO1xubGFiZWwxLnRvb2x0aXAgPSB0b29sdGlwMTtcbmNvbnN0IHRvb2x0aXAyID0gbmV3IEpHVC5Ub29sdGlwKG51bGwsIG5ldyBKR1QuTGFiZWwoXCJBIHRvb2x0aXAgLi4uLiAuLiAuLiAuLi4uLi4gQXV0b3dyYXBcXG5OZXcgbGluZVwiLCBudWxsLCBudWxsLCBsYWJlbFN0eWxlKSk7XG5idXR0b25UZXh0Mi50b29sdGlwID0gdG9vbHRpcDI7XG5jb25zdCBmcHNNZXRlciA9IG5ldyBKR1QuRlBTTWV0ZXIoZmFsc2UsIG51bGwsIG51bGwsIG5ldyBKR1QuU3R5bGUoeyBcImFsaWduZW1lbnRcIjogXCJyaWdodFwiLCBcInZlcnRpY2FsQWxpZ25lbWVudFwiOiBcImJvdHRvbVwifSkpO1xuZnBzTWV0ZXIubW92YWJsZSA9IHRydWU7XG5jb25zdCBwcm9ncmVzcyA9IG5ldyBKR1QuUHJvZ3Jlc3NCYXIoMzAwLCA1LCAyMDAsIDI1LCBudWxsLCBudWxsLCBKR1QuRWFzaW5nRnVuY3Rpb25zLmVhc2VJbk91dEN1YmljKTtcbnByb2dyZXNzLnBlcmNlbnQgPSAxO1xucHJvZ3Jlc3MubW92YWJsZSA9IHRydWU7XG5jb25zdCB0b29sdGlwMyA9IG5ldyBKR1QuVG9vbHRpcChudWxsLCBuZXcgSkdULkxhYmVsKFwiQ3VycmVudDogXCIgKyAoTWF0aC5yb3VuZChwcm9ncmVzcy5wZXJjZW50ICogMTAwKSAvIDEwMCkgKiAxMDAgKyBcIiVcIiwgbnVsbCwgbnVsbCwgbGFiZWxTdHlsZSkpO1xucHJvZ3Jlc3MudG9vbHRpcCA9IHRvb2x0aXAzO1xuY29uc3QgYnV0dG9uQXJyb3cgPSBuZXcgSkdULkJ1dHRvbig1LCAxNTAsIG51bGwsIG51bGwsIGJ1dHRvblN0eWxlLCBuZXcgSkdULkFycm93KG51bGwsIG51bGwsIDEwMCwgMjAwLCBuZXcgSkdULlN0eWxlKHsgXCJjb2xvclwiOiBcIndoaXRlXCIgfSkpKTtcbmNvbnN0IGNvbFNjcm9sbGFibGUgPSBuZXcgSkdULkNvbCgyNTUsIDI1MCwgMjUwLCA0MiwgbmV3IEpHVC5TdHlsZSh7IFwiYmFja2dyb3VuZENvbG9yXCI6IFwiI2ZmZlwifSksIG5ldyBKR1QuUm93KG51bGwsIG51bGwsIG51bGwsIG51bGwsIG51bGwsIG5ldyBKR1QuTGFiZWwoXCJUZXN0MVwiKSwgbmV3IEpHVC5MYWJlbChcIlRlc3QyXCIpLCBuZXcgSkdULkxhYmVsKFwiVGVzdDNcIiksIG5ldyBKR1QuTGFiZWwoXCJUZXN0NFwiKSksIG5ldyBKR1QuUm93KG51bGwsIG51bGwsIG51bGwsIG51bGwsIG51bGwsIG5ldyBKR1QuTGFiZWwoXCJUZXN0NVwiKSwgbmV3IEpHVC5MYWJlbChcIlRlc3Q2XCIpLCBuZXcgSkdULkxhYmVsKFwiVGVzdDdcIiksIG5ldyBKR1QuTGFiZWwoXCJUZXN0OFwiKSksIG5ldyBKR1QuUm93KG51bGwsIG51bGwsIG51bGwsIG51bGwsIG51bGwsIG5ldyBKR1QuTGFiZWwoXCJUZXN0OVwiKSwgbmV3IEpHVC5MYWJlbChcIlRlc3QxMFwiKSwgbmV3IEpHVC5MYWJlbChcIlRlc3QxMVwiKSwgbmV3IEpHVC5MYWJlbChcIlRlc3QxMlwiKSwgbmV3IEpHVC5MYWJlbChcIlRlc3RcIikpKTtcbmNvbFNjcm9sbGFibGUuc3R5bGUuc2V0KFwicGFkZGluZ1wiLCAxMCk7XG5jb2xTY3JvbGxhYmxlLnN0eWxlLnNldChcInNwYWNlQmV0d2VlbkNvbXBvbmVudHNcIiwgMCk7XG5jb25zdCBvcHRpb25MYXN0ID0gbmV3IEpHVC5TZWxlY3RPcHRpb24obmV3IEpHVC5MYWJlbChcIlJlbW92ZWQgaW4gNXNcIikpO1xuY29uc3Qgb3B0aW9ucyA9IG5ldyBKR1QuU2VsZWN0T3B0aW9uc0NvbnRhaW5lcig3NSwgbnVsbCwgbmV3IEpHVC5TZWxlY3RPcHRpb24obmV3IEpHVC5MYWJlbChcIkZpcnN0IGNob2ljZVwiKSksIG5ldyBKR1QuU2VsZWN0T3B0aW9uKG5ldyBKR1QuTGFiZWwoXCJTZWNvbmQgY2hvaWNlXCIpKSwgbmV3IEpHVC5TZWxlY3RPcHRpb24obmV3IEpHVC5MYWJlbChcIlRoaXJkIGNob2ljZVwiKSksIG9wdGlvbkxhc3QpO1xuY29uc3Qgc2VsZWN0ID0gbmV3IEpHVC5TZWxlY3QoMjU1LCAzMTUsIG51bGwsIG51bGwsIG5ldyBKR1QuU3R5bGUoeyBcInZlcnRpY2FsQWxpZ25lbWVudFwiOiBcImJvdHRvbVwiIH0pLCBvcHRpb25zKTtcbnNlbGVjdC5tb3ZhYmxlID0gdHJ1ZTtcblxuLy8gQ3VzdG9tIGNvbXBvbmVudFxuY2xhc3MgQm94IGV4dGVuZHMgSkdULkNvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKHN0eWxlKSB7XG4gICAgc3VwZXIobnVsbCwgbnVsbCwgbnVsbCwgbnVsbCwgc3R5bGUpO1xuICB9XG5cbiAgZHJhdyhjb250ZXh0KSB7XG4gICAgc3VwZXIuZHJhdyhjb250ZXh0KTtcbiAgICBcbiAgICBjb25zdCBjYW52YXMgPSBjb250ZXh0LmNhbnZhcztcbiAgICBjb25zdCBjdHggPSBjYW52YXMuZ2V0Q29udGV4dChcIjJkXCIpO1xuICAgIGN0eC5zYXZlKCk7XG5cbiAgICBjdHguZmlsbFN0eWxlID0gdGhpcy5zdHlsZS5iYWNrZ3JvdW5kQ29sb3I7XG4gICAgY3R4LmZpbGxSZWN0KHRoaXMueCwgdGhpcy55LCB0aGlzLnBhcmVudC53aWR0aCwgdGhpcy5wYXJlbnQuaGVpZ2h0KTtcblxuICAgIGN0eC5yZXN0b3JlKCk7XG4gIH1cbn1cblxuLy8gQ3JlYXRlIHNjZW5lIChjb250YWluaW5nIGNvbXBvbmVudHMpIGFuZCBjYW52YXNcbmNvbnN0IGJveCA9IG5ldyBCb3gobmV3IEpHVC5TdHlsZSh7IFwiYmFja2dyb3VuZENvbG9yXCI6IFwiIzg4ODg4OFwiIH0pKTtcbmNvbnN0IHNjZW5lID0gbmV3IEpHVC5TY2VuZShib3gsIGJ1dHRvblRleHQsIGJ1dHRvblRleHQyLCBidXR0b25JbWFnZSwgYnV0dG9uVGV4dEZ1bGxzY3JlZW4sIG5vdGlmaWNhdGlvbiwgbWVudSwgbm90aWZpY2F0aW9uMiwgcm93MSwgbGluazEsIHRvb2x0aXAxLCB0b29sdGlwMiwgZnBzTWV0ZXIsIHByb2dyZXNzLCB0b29sdGlwMywgYnV0dG9uQXJyb3csIGNvbFNjcm9sbGFibGUsIHNlbGVjdCwgb3B0aW9ucyk7XG5jb25zdCBjYW52YXMgPSBuZXcgSkdULkNhbnZhcyhzY2VuZSwgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjYW52YXNcIiksIG51bGwsIG51bGwsIHRydWUpO1xuY2FudmFzLmFwcGVuZFRvKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY2FudmFzQ29udGFpbmVyXCIpKTtcblxuLy8gRXZlbnRzXG5idXR0b25UZXh0LmFkZENsaWNrQWN0aW9uKCgpID0+IHtcbiAgbm90aWZpY2F0aW9uLm9wZW4oKTtcbn0pO1xuXG5idXR0b25UZXh0RnVsbHNjcmVlbi5hZGRDbGlja0FjdGlvbigoKSA9PiB7XG4gIGNhbnZhcy50b2dnbGVGdWxsc2NyZWVuKCk7XG59KTtcblxuYnV0dG9uSW1hZ2UuYWRkQ2xpY2tBY3Rpb24oKCkgPT4ge1xuICBtZW51LmVuYWJsZSgpO1xufSk7XG5cbmJ1dHRvbk1lbnU0LmFkZENsaWNrQWN0aW9uKCgpID0+IHtcbiAgbWVudS5kaXNhYmxlKCk7XG59KTtcblxuYnV0dG9uTWVudTUuYWRkQ2xpY2tBY3Rpb24oKCkgPT4ge1xuICBub3RpZmljYXRpb24yLm9wZW4oKTtcbn0pO1xuXG5idXR0b25NZW51Ni5hZGRDbGlja0FjdGlvbigoKSA9PiB7XG4gIEpHVC5Db25zdGFudHMuU2V0dGluZy5FTkFCTEVfUElYRUxfUkFUSU9fUkVTSVpJTkcgPSAhSkdULkNvbnN0YW50cy5TZXR0aW5nLkVOQUJMRV9QSVhFTF9SQVRJT19SRVNJWklORztcbn0pO1xuXG5saW5rMS5hZGRDbGlja0FjdGlvbigoKSA9PiB7XG4gIG5vdGlmaWNhdGlvbi5vcGVuKCk7XG59KTtcblxuLy8gTG9hZCBwYXVzZSBpbWFnZSBhbmQgc3RhcnQgdGhlIGNhbnZhcyByZW5kZXJpbmdcbmltYWdlTG9hZGVyLmxvYWQoW1wicGF1c2UucG5nXCJdLCAoKSA9PiB7XG4gIHBhdXNlSW1hZ2UubG9hZEltYWdlKGltYWdlTG9hZGVyKTtcbiAgY2FudmFzLnN0YXJ0RHJhdygpO1xuXG4gIC8vIFJhbmRvbWx5IGNoYW5nZSB0aGUgcHJvZ3Jlc3MgdmFsdWVcbiAgc2V0SW50ZXJ2YWwoKCkgPT4ge1xuICAgIGlmKHByb2dyZXNzLnBlcmNlbnQgPCAxKSB7XG4gICAgICBwcm9ncmVzcy5wZXJjZW50ID0gTWF0aC5yYW5kb20oKTtcbiAgICB9IGVsc2UgaWYocHJvZ3Jlc3MucGVyY2VudCA+PSAxKSB7XG4gICAgICBwcm9ncmVzcy5wZXJjZW50ID0gTWF0aC5yYW5kb20oKTtcbiAgICB9XG5cbiAgICB0b29sdGlwMy5jb21wb25lbnRzWzBdLnRleHQgPSBcIkN1cnJlbnQ6IFwiICsgTWF0aC5yb3VuZCgoTWF0aC5yb3VuZChwcm9ncmVzcy5wZXJjZW50ICogMTAwKSAvIDEwMCkgKiAxMDApICsgXCIlXCI7XG4gIH0sIDMwMDApO1xuXG4gIC8vIFJlbW92ZSB0aGUgbGFzdCBvcHRpb24gZWxlbWVudFxuICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICBvcHRpb25zLnJlbW92ZShvcHRpb25MYXN0KTtcbiAgfSwgNTAwMCk7XG59KTsiXSwibmFtZXMiOlsiSkdUIiwiSlNHYW1lVG9vbHMiLCJpbWFnZUxvYWRlciIsIkltYWdlTG9hZGVyIiwiYnV0dG9uU3R5bGUiLCJTdHlsZSIsImJ1dHRvblN0eWxlUmVkIiwibGFiZWxTdHlsZSIsImxhYmVsU3R5bGVDZW50ZXIiLCJsYWJlbFN0eWxlVmVydGljYWxDZW50ZXIiLCJidXR0b25UZXh0IiwiQnV0dG9uIiwiTGFiZWwiLCJidXR0b25UZXh0MiIsInN0eWxlIiwic2V0IiwicGF1c2VJbWFnZSIsIkltYWdlQ29udGFpbmVyIiwiYnV0dG9uSW1hZ2UiLCJSb3ciLCJtb3ZhYmxlIiwiYnV0dG9uVGV4dEZ1bGxzY3JlZW4iLCJub3RpZmljYXRpb24iLCJOb3RpZmljYXRpb25NZXNzYWdlIiwiYnV0dG9uTWVudTEiLCJidXR0b25NZW51NSIsImJ1dHRvbk1lbnUyIiwiYnV0dG9uTWVudTMiLCJidXR0b25NZW51NCIsImJ1dHRvbk1lbnU2IiwibWVudUxhYmVsIiwibWVudSIsIk1lbnUiLCJJbnB1dCIsIkNvbnN0YW50cyIsIkFsaWduZW1lbnQiLCJDRU5URVIiLCJub3RpZmljYXRpb24yIiwidGV4dEZpZWxkIiwibGFiZWwxIiwicm93MSIsImxpbmsxIiwiTGluayIsInRvb2x0aXAxIiwiVG9vbHRpcCIsInRvb2x0aXAiLCJ0b29sdGlwMiIsImZwc01ldGVyIiwiRlBTTWV0ZXIiLCJwcm9ncmVzcyIsIlByb2dyZXNzQmFyIiwiRWFzaW5nRnVuY3Rpb25zIiwiZWFzZUluT3V0Q3ViaWMiLCJwZXJjZW50IiwidG9vbHRpcDMiLCJNYXRoIiwicm91bmQiLCJidXR0b25BcnJvdyIsIkFycm93IiwiY29sU2Nyb2xsYWJsZSIsIkNvbCIsIm9wdGlvbkxhc3QiLCJTZWxlY3RPcHRpb24iLCJvcHRpb25zIiwiU2VsZWN0T3B0aW9uc0NvbnRhaW5lciIsInNlbGVjdCIsIlNlbGVjdCIsIkJveCIsIl9KR1QkQ29tcG9uZW50IiwiX2NsYXNzQ2FsbENoZWNrIiwiX2NhbGxTdXBlciIsIl9pbmhlcml0cyIsIl9jcmVhdGVDbGFzcyIsImtleSIsInZhbHVlIiwiZHJhdyIsImNvbnRleHQiLCJfc3VwZXJQcm9wR2V0IiwiY2FudmFzIiwiY3R4IiwiZ2V0Q29udGV4dCIsInNhdmUiLCJmaWxsU3R5bGUiLCJiYWNrZ3JvdW5kQ29sb3IiLCJmaWxsUmVjdCIsIngiLCJ5IiwicGFyZW50Iiwid2lkdGgiLCJoZWlnaHQiLCJyZXN0b3JlIiwiQ29tcG9uZW50IiwiYm94Iiwic2NlbmUiLCJTY2VuZSIsIkNhbnZhcyIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJhcHBlbmRUbyIsImFkZENsaWNrQWN0aW9uIiwib3BlbiIsInRvZ2dsZUZ1bGxzY3JlZW4iLCJlbmFibGUiLCJkaXNhYmxlIiwiU2V0dGluZyIsIkVOQUJMRV9QSVhFTF9SQVRJT19SRVNJWklORyIsImxvYWQiLCJsb2FkSW1hZ2UiLCJzdGFydERyYXciLCJzZXRJbnRlcnZhbCIsInJhbmRvbSIsImNvbXBvbmVudHMiLCJ0ZXh0Iiwic2V0VGltZW91dCIsInJlbW92ZSJdLCJzb3VyY2VSb290IjoiIn0=