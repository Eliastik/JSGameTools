/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./examples/src/main.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./examples/src/main.js":
/*!******************************!*\
  !*** ./examples/src/main.js ***!
  \******************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_get__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/get */ "./node_modules/@babel/runtime/helpers/get.js");
/* harmony import */ var _babel_runtime_helpers_get__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_get__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/inherits */ "./node_modules/@babel/runtime/helpers/inherits.js");
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__);







function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5___default()(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5___default()(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4___default()(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

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
select.movable = true; // Custom component

var Box = /*#__PURE__*/function (_JGT$Component) {
  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_3___default()(Box, _JGT$Component);

  var _super = _createSuper(Box);

  function Box(style) {
    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, Box);

    return _super.call(this, null, null, null, null, style);
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(Box, [{
    key: "draw",
    value: function draw(context) {
      _babel_runtime_helpers_get__WEBPACK_IMPORTED_MODULE_2___default()(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5___default()(Box.prototype), "draw", this).call(this, context);

      var canvas = context.canvas;
      var ctx = canvas.getContext("2d");
      ctx.save();
      ctx.fillStyle = this.style.backgroundColor;
      ctx.fillRect(this.x, this.y, this.parent.width, this.parent.height);
      ctx.restore();
    }
  }]);

  return Box;
}(JGT.Component); // Create scene (containing components) and canvas


var box = new Box(new JGT.Style({
  "backgroundColor": "#888888"
}));
var scene = new JGT.Scene(box, buttonText, buttonText2, buttonImage, buttonTextFullscreen, notification, menu, notification2, row1, link1, tooltip1, tooltip2, fpsMeter, progress, tooltip3, buttonArrow, colScrollable, select, options);
var canvas = new JGT.Canvas(scene, document.getElementById("canvas"), null, null, true);
canvas.appendTo(document.getElementById("canvasContainer")); // Events

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
}); // Load pause image and start the canvas rendering

imageLoader.load(["pause.png"], function () {
  pauseImage.loadImage(imageLoader);
  canvas.startDraw(); // Randomly change the progress value

  setInterval(function () {
    if (progress.percent < 1) {
      progress.percent = Math.random();
    } else if (progress.percent >= 1) {
      progress.percent = Math.random();
    }

    tooltip3.components[0].text = "Current: " + Math.round(Math.round(progress.percent * 100) / 100 * 100) + "%";
  }, 3000); // Remove the last option element

  setTimeout(function () {
    options.remove(optionLast);
  }, 5000);
});

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/assertThisInitialized.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/assertThisInitialized.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

module.exports = _assertThisInitialized;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/classCallCheck.js":
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/classCallCheck.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

module.exports = _classCallCheck;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/createClass.js":
/*!************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/createClass.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

module.exports = _createClass;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/get.js":
/*!****************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/get.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var superPropBase = __webpack_require__(/*! ./superPropBase */ "./node_modules/@babel/runtime/helpers/superPropBase.js");

function _get(target, property, receiver) {
  if (typeof Reflect !== "undefined" && Reflect.get) {
    module.exports = _get = Reflect.get;
  } else {
    module.exports = _get = function _get(target, property, receiver) {
      var base = superPropBase(target, property);
      if (!base) return;
      var desc = Object.getOwnPropertyDescriptor(base, property);

      if (desc.get) {
        return desc.get.call(receiver);
      }

      return desc.value;
    };
  }

  return _get(target, property, receiver || target);
}

module.exports = _get;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/getPrototypeOf.js":
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/getPrototypeOf.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _getPrototypeOf(o) {
  module.exports = _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  };
  return _getPrototypeOf(o);
}

module.exports = _getPrototypeOf;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/inherits.js":
/*!*********************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/inherits.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var setPrototypeOf = __webpack_require__(/*! ./setPrototypeOf */ "./node_modules/@babel/runtime/helpers/setPrototypeOf.js");

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  if (superClass) setPrototypeOf(subClass, superClass);
}

module.exports = _inherits;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js":
/*!**************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _typeof = __webpack_require__(/*! @babel/runtime/helpers/typeof */ "./node_modules/@babel/runtime/helpers/typeof.js");

var assertThisInitialized = __webpack_require__(/*! ./assertThisInitialized */ "./node_modules/@babel/runtime/helpers/assertThisInitialized.js");

function _possibleConstructorReturn(self, call) {
  if (call && (_typeof(call) === "object" || typeof call === "function")) {
    return call;
  }

  return assertThisInitialized(self);
}

module.exports = _possibleConstructorReturn;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/setPrototypeOf.js":
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/setPrototypeOf.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _setPrototypeOf(o, p) {
  module.exports = _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}

module.exports = _setPrototypeOf;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/superPropBase.js":
/*!**************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/superPropBase.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var getPrototypeOf = __webpack_require__(/*! ./getPrototypeOf */ "./node_modules/@babel/runtime/helpers/getPrototypeOf.js");

function _superPropBase(object, property) {
  while (!Object.prototype.hasOwnProperty.call(object, property)) {
    object = getPrototypeOf(object);
    if (object === null) break;
  }

  return object;
}

module.exports = _superPropBase;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/typeof.js":
/*!*******************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/typeof.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _typeof(obj) {
  "@babel/helpers - typeof";

  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    module.exports = _typeof = function _typeof(obj) {
      return typeof obj;
    };
  } else {
    module.exports = _typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
  }

  return _typeof(obj);
}

module.exports = _typeof;

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vZXhhbXBsZXMvc3JjL21haW4uanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvYXNzZXJ0VGhpc0luaXRpYWxpemVkLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2NsYXNzQ2FsbENoZWNrLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2NyZWF0ZUNsYXNzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2dldC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9nZXRQcm90b3R5cGVPZi5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9pbmhlcml0cy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL3NldFByb3RvdHlwZU9mLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL3N1cGVyUHJvcEJhc2UuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvdHlwZW9mLmpzIl0sIm5hbWVzIjpbIkpHVCIsIkpTR2FtZVRvb2xzIiwiaW1hZ2VMb2FkZXIiLCJJbWFnZUxvYWRlciIsImJ1dHRvblN0eWxlIiwiU3R5bGUiLCJidXR0b25TdHlsZVJlZCIsImxhYmVsU3R5bGUiLCJsYWJlbFN0eWxlQ2VudGVyIiwibGFiZWxTdHlsZVZlcnRpY2FsQ2VudGVyIiwiYnV0dG9uVGV4dCIsIkJ1dHRvbiIsIkxhYmVsIiwiYnV0dG9uVGV4dDIiLCJzdHlsZSIsInNldCIsInBhdXNlSW1hZ2UiLCJJbWFnZUNvbnRhaW5lciIsImJ1dHRvbkltYWdlIiwiUm93IiwibW92YWJsZSIsImJ1dHRvblRleHRGdWxsc2NyZWVuIiwibm90aWZpY2F0aW9uIiwiTm90aWZpY2F0aW9uTWVzc2FnZSIsImJ1dHRvbk1lbnUxIiwiYnV0dG9uTWVudTUiLCJidXR0b25NZW51MiIsImJ1dHRvbk1lbnUzIiwiYnV0dG9uTWVudTQiLCJidXR0b25NZW51NiIsIm1lbnVMYWJlbCIsIm1lbnUiLCJNZW51IiwiSW5wdXQiLCJDb25zdGFudHMiLCJBbGlnbmVtZW50IiwiQ0VOVEVSIiwibm90aWZpY2F0aW9uMiIsInRleHRGaWVsZCIsImxhYmVsMSIsInJvdzEiLCJsaW5rMSIsIkxpbmsiLCJ0b29sdGlwMSIsIlRvb2x0aXAiLCJ0b29sdGlwIiwidG9vbHRpcDIiLCJmcHNNZXRlciIsIkZQU01ldGVyIiwicHJvZ3Jlc3MiLCJQcm9ncmVzc0JhciIsIkVhc2luZ0Z1bmN0aW9ucyIsImVhc2VJbk91dEN1YmljIiwicGVyY2VudCIsInRvb2x0aXAzIiwiTWF0aCIsInJvdW5kIiwiYnV0dG9uQXJyb3ciLCJBcnJvdyIsImNvbFNjcm9sbGFibGUiLCJDb2wiLCJvcHRpb25MYXN0IiwiU2VsZWN0T3B0aW9uIiwib3B0aW9ucyIsIlNlbGVjdE9wdGlvbnNDb250YWluZXIiLCJzZWxlY3QiLCJTZWxlY3QiLCJCb3giLCJjb250ZXh0IiwiY2FudmFzIiwiY3R4IiwiZ2V0Q29udGV4dCIsInNhdmUiLCJmaWxsU3R5bGUiLCJiYWNrZ3JvdW5kQ29sb3IiLCJmaWxsUmVjdCIsIngiLCJ5IiwicGFyZW50Iiwid2lkdGgiLCJoZWlnaHQiLCJyZXN0b3JlIiwiQ29tcG9uZW50IiwiYm94Iiwic2NlbmUiLCJTY2VuZSIsIkNhbnZhcyIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJhcHBlbmRUbyIsImFkZENsaWNrQWN0aW9uIiwib3BlbiIsInRvZ2dsZUZ1bGxzY3JlZW4iLCJlbmFibGUiLCJkaXNhYmxlIiwiU2V0dGluZyIsIkVOQUJMRV9QSVhFTF9SQVRJT19SRVNJWklORyIsImxvYWQiLCJsb2FkSW1hZ2UiLCJzdGFydERyYXciLCJzZXRJbnRlcnZhbCIsInJhbmRvbSIsImNvbXBvbmVudHMiLCJ0ZXh0Iiwic2V0VGltZW91dCIsInJlbW92ZSJdLCJtYXBwaW5ncyI6IjtRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EseUNBQXlDLGlDQUFpQztRQUMxRSxnSEFBZ0gsbUJBQW1CLEVBQUU7UUFDckk7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwyQkFBMkIsMEJBQTBCLEVBQUU7UUFDdkQsaUNBQWlDLGVBQWU7UUFDaEQ7UUFDQTtRQUNBOztRQUVBO1FBQ0Esc0RBQXNELCtEQUErRDs7UUFFckg7UUFDQTs7O1FBR0E7UUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2xGQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQU1BLEdBQUcsR0FBR0MsV0FBWjtBQUVBLElBQU1DLFdBQVcsR0FBRyxJQUFJRixHQUFHLENB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Q0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBLHlCIiwiZmlsZSI6Im1haW4uanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL2V4YW1wbGVzL3NyYy9tYWluLmpzXCIpO1xuIiwiLypcbiAqIENvcHlyaWdodCAoQykgMjAyMCBFbGlhc3RpayAoZWxpYXN0aWtzb2Z0cy5jb20pXG4gKlxuICogVGhpcyBmaWxlIGlzIHBhcnQgb2YgXCJKU0dhbWVUb29sc1wiLlxuICpcbiAqIFwiSlNHYW1lVG9vbHNcIiBpcyBmcmVlIHNvZnR3YXJlOiB5b3UgY2FuIHJlZGlzdHJpYnV0ZSBpdCBhbmQvb3IgbW9kaWZ5XG4gKiBpdCB1bmRlciB0aGUgdGVybXMgb2YgdGhlIEdOVSBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlIGFzIHB1Ymxpc2hlZCBieVxuICogdGhlIEZyZWUgU29mdHdhcmUgRm91bmRhdGlvbiwgZWl0aGVyIHZlcnNpb24gMyBvZiB0aGUgTGljZW5zZSwgb3JcbiAqIChhdCB5b3VyIG9wdGlvbikgYW55IGxhdGVyIHZlcnNpb24uXG4gKlxuICogXCJKU0dhbWVUb29sc1wiIGlzIGRpc3RyaWJ1dGVkIGluIHRoZSBob3BlIHRoYXQgaXQgd2lsbCBiZSB1c2VmdWwsXG4gKiBidXQgV0lUSE9VVCBBTlkgV0FSUkFOVFk7IHdpdGhvdXQgZXZlbiB0aGUgaW1wbGllZCB3YXJyYW50eSBvZlxuICogTUVSQ0hBTlRBQklMSVRZIG9yIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFLiAgU2VlIHRoZVxuICogR05VIEdlbmVyYWwgUHVibGljIExpY2Vuc2UgZm9yIG1vcmUgZGV0YWlscy5cbiAqXG4gKiBZb3Ugc2hvdWxkIGhhdmUgcmVjZWl2ZWQgYSBjb3B5IG9mIHRoZSBHTlUgR2VuZXJhbCBQdWJsaWMgTGljZW5zZVxuICogYWxvbmcgd2l0aCBcIkpTR2FtZVRvb2xzXCIuICBJZiBub3QsIHNlZSA8aHR0cDovL3d3dy5nbnUub3JnL2xpY2Vuc2VzLz4uXG4gKi9cbi8vIENyZWF0ZSBjb21wb25lbnRzXG5jb25zdCBKR1QgPSBKU0dhbWVUb29scztcblxuY29uc3QgaW1hZ2VMb2FkZXIgPSBuZXcgSkdULkltYWdlTG9hZGVyKCk7XG5cbmNvbnN0IGJ1dHRvblN0eWxlID0gbmV3IEpHVC5TdHlsZSh7XG4gIFwiYmFja2dyb3VuZENvbG9yXCI6IFwiIzJlY2M3MVwiLFxuICBcImJhY2tncm91bmRDb2xvckhvdmVyXCI6IFwiIzFhYmM5Y1wiLFxuICBcImJhY2tncm91bmRDb2xvckRvd25cIjogXCIjMTZhMDg1XCJcbn0pO1xuXG5jb25zdCBidXR0b25TdHlsZVJlZCA9IG5ldyBKR1QuU3R5bGUoe1xuICBcImJhY2tncm91bmRDb2xvclwiOiBcIiNDQzJGMkZcIixcbiAgXCJiYWNrZ3JvdW5kQ29sb3JIb3ZlclwiOiBcIiNGMjM4MzhcIixcbiAgXCJiYWNrZ3JvdW5kQ29sb3JEb3duXCI6IFwiI0E2MjYyNlwiXG59KTtcblxuY29uc3QgbGFiZWxTdHlsZSA9IG5ldyBKR1QuU3R5bGUoe1xuICBcImZvbnRDb2xvclwiOiBcIndoaXRlXCJcbn0pO1xuXG5jb25zdCBsYWJlbFN0eWxlQ2VudGVyID0gbmV3IEpHVC5TdHlsZSh7XG4gIFwiZm9udENvbG9yXCI6IFwid2hpdGVcIixcbiAgXCJhbGlnbmVtZW50XCI6IFwiY2VudGVyXCJcbn0pO1xuXG5jb25zdCBsYWJlbFN0eWxlVmVydGljYWxDZW50ZXIgPSBuZXcgSkdULlN0eWxlKHtcbiAgXCJmb250Q29sb3JcIjogXCJ3aGl0ZVwiLFxuICBcInZlcnRpY2FsQWxpZ25lbWVudFwiOiBcImNlbnRlclwiXG59KTtcblxuY29uc3QgYnV0dG9uVGV4dCA9IG5ldyBKR1QuQnV0dG9uKDUsIDUsIG51bGwsIG51bGwsIGJ1dHRvblN0eWxlLCBuZXcgSkdULkxhYmVsKFwiU2hvdyBhIG5vdGlmaWNhdGlvblwiLCBudWxsLCBudWxsLCBsYWJlbFN0eWxlKSk7XG5jb25zdCBidXR0b25UZXh0MiA9IG5ldyBKR1QuQnV0dG9uKDUsIDE1MCwgbnVsbCwgbnVsbCwgYnV0dG9uU3R5bGUsIG5ldyBKR1QuTGFiZWwoXCJMb25nIHRleHQgYnV0dG9uIC4uLi4uLi4uLi4uIFRoaXMgc2hvdWxkIGJlIG9uIG5leHQgbGluZVwiLCBudWxsLCBudWxsLCBsYWJlbFN0eWxlKSk7XG5idXR0b25UZXh0Mi5zdHlsZS5zZXQoXCJhbGlnbmVtZW50XCIsIFwicmlnaHRcIik7XG5jb25zdCBwYXVzZUltYWdlID0gbmV3IEpHVC5JbWFnZUNvbnRhaW5lcihcInBhdXNlLnBuZ1wiLCBudWxsLCBudWxsLCA2NCwgNjQsIG5ldyBKR1QuU3R5bGUoeyBcInZlcnRpY2FsQWxpZ25lbWVudFwiOiBcImNlbnRlclwiLCBcImFsaWduZW1lbnRcIjogXCJsZWZ0XCIgfSkpO1xuY29uc3QgYnV0dG9uSW1hZ2UgPSBuZXcgSkdULkJ1dHRvbihudWxsLCA1MCwgbnVsbCwgbnVsbCwgbmV3IEpHVC5TdHlsZSh7IFwiYWxpZ25lbWVudFwiOiBcImxlZnRcIiB9KSwgbmV3IEpHVC5Sb3coNSwgMjUwLCBudWxsLCBudWxsLCBudWxsLCBwYXVzZUltYWdlLCBuZXcgSkdULkxhYmVsKFwiUGF1c2VcIiwgbnVsbCwgbnVsbCwgbGFiZWxTdHlsZVZlcnRpY2FsQ2VudGVyKSkpO1xuYnV0dG9uSW1hZ2UubW92YWJsZSA9IHRydWU7XG5jb25zdCBidXR0b25UZXh0RnVsbHNjcmVlbiA9IG5ldyBKR1QuQnV0dG9uKDUsIDc1LCBudWxsLCBudWxsLCBidXR0b25TdHlsZSwgbmV3IEpHVC5MYWJlbChcIlRvZ2dsZSBmdWxsc2NyZWVuXCIsIG51bGwsIG51bGwsIGxhYmVsU3R5bGUpKTtcbmJ1dHRvblRleHRGdWxsc2NyZWVuLnN0eWxlLnNldChcImFsaWduZW1lbnRcIiwgXCJjZW50ZXJcIik7XG5jb25zdCBub3RpZmljYXRpb24gPSBuZXcgSkdULk5vdGlmaWNhdGlvbk1lc3NhZ2UobnVsbCwgbnVsbCwgbnVsbCwgbmV3IEpHVC5MYWJlbChcIkEgbm90aWZpY2F0aW9uXCIsIG51bGwsIG51bGwsIGxhYmVsU3R5bGVDZW50ZXIpLCBuZXcgSkdULlJvdyhudWxsLCBudWxsLCBudWxsLCBudWxsLCBudWxsLCBuZXcgSkdULkxhYmVsKFwiTGFiZWwgOiBcIiwgbnVsbCwgbnVsbCwgbGFiZWxTdHlsZVZlcnRpY2FsQ2VudGVyKSwgbmV3IEpHVC5CdXR0b24obnVsbCwgbnVsbCwgbnVsbCwgbnVsbCwgbnVsbCwgbmV3IEpHVC5MYWJlbChcIkJ1dHRvblwiLCBudWxsLCBudWxsLCBsYWJlbFN0eWxlKSkpKTtcblxuY29uc3QgYnV0dG9uTWVudTEgPSBuZXcgSkdULkJ1dHRvbig1LCA1LCBudWxsLCBudWxsLCBidXR0b25TdHlsZSwgbmV3IEpHVC5MYWJlbChcIkEgYnV0dG9uLCBhbGlnbmVkIHRvIHRoZSBsZWZ0XCIsIG51bGwsIG51bGwsIGxhYmVsU3R5bGUpKTtcbmJ1dHRvbk1lbnUxLnN0eWxlLnNldChcImFsaWduZW1lbnRcIiwgXCJsZWZ0XCIpO1xuY29uc3QgYnV0dG9uTWVudTUgPSBuZXcgSkdULkJ1dHRvbig1LCA1LCBudWxsLCBudWxsLCBidXR0b25TdHlsZSwgbmV3IEpHVC5MYWJlbChcIkRpc3BsYXkgYSBub3RpZmljYXRpb25cIiwgbnVsbCwgbnVsbCwgbGFiZWxTdHlsZSkpO1xuY29uc3QgYnV0dG9uTWVudTIgPSBuZXcgSkdULkJ1dHRvbig1LCA1LCBudWxsLCBudWxsLCBidXR0b25TdHlsZSwgbmV3IEpHVC5MYWJlbChcIkFub3RoZXIgYnV0dG9uLCBhbGlnbmVkIHRvIHRoZSByaWdodFwiLCBudWxsLCBudWxsLCBsYWJlbFN0eWxlKSk7XG5idXR0b25NZW51Mi5zdHlsZS5zZXQoXCJhbGlnbmVtZW50XCIsIFwicmlnaHRcIik7XG5jb25zdCBidXR0b25NZW51MyA9IG5ldyBKR1QuQnV0dG9uKDUsIDUsIG51bGwsIG51bGwsIGJ1dHRvblN0eWxlLCBuZXcgSkdULkxhYmVsKFwiQSBsb25nIGJ1dHRvbm5ubm5ubm5ubm5ubm5ubm5ubm5ubm5ubm5cIiwgbnVsbCwgbnVsbCwgbGFiZWxTdHlsZSkpO1xuYnV0dG9uTWVudTMuc3R5bGUuc2V0KFwiYWxpZ25lbWVudFwiLCBcInJpZ2h0XCIpO1xuY29uc3QgYnV0dG9uTWVudTQgPSBuZXcgSkdULkJ1dHRvbig1LCA1LCBudWxsLCBudWxsLCBidXR0b25TdHlsZVJlZCwgbmV3IEpHVC5MYWJlbChcIkNsb3NlIChjZW50ZXJlZClcIiwgbnVsbCwgbnVsbCwgbGFiZWxTdHlsZSkpO1xuYnV0dG9uTWVudTQuc3R5bGUuc2V0KFwiYWxpZ25lbWVudFwiLCBcImNlbnRlclwiKTtcbmNvbnN0IGJ1dHRvbk1lbnU2ID0gbmV3IEpHVC5CdXR0b24oNSwgNSwgbnVsbCwgbnVsbCwgYnV0dG9uU3R5bGUsIG5ldyBKR1QuTGFiZWwoXCJEaXNhYmxlL2VuYWJsZSBoaWdoIERQSVwiLCBudWxsLCBudWxsLCBsYWJlbFN0eWxlKSk7XG5idXR0b25NZW51Ni5zdHlsZS5zZXQoXCJhbGlnbmVtZW50XCIsIFwiY2VudGVyXCIpO1xuY29uc3QgbWVudUxhYmVsID0gbmV3IEpHVC5MYWJlbChcIlBhdXNlIG1lbnVcXG5Zb3UgY2FuIHVzZSB0aGUgYXJyb3cga2V5cywgcHJlc3MgZW50ZXIgdG8gc2VsZWN0XCIsIG51bGwsIG51bGwsIGxhYmVsU3R5bGUsIFwiY2VudGVyXCIpO1xubWVudUxhYmVsLnN0eWxlLnNldChcImFsaWduZW1lbnRcIiwgXCJjZW50ZXJcIik7XG5jb25zdCBtZW51ID0gbmV3IEpHVC5NZW51KG51bGwsIG1lbnVMYWJlbCwgYnV0dG9uTWVudTEsIGJ1dHRvbk1lbnU1LCBidXR0b25NZW51MiwgYnV0dG9uTWVudTMsIGJ1dHRvbk1lbnU2LCBidXR0b25NZW51NCwgbmV3IEpHVC5JbnB1dChudWxsLCBudWxsLCAxNTAsIG51bGwsIG5ldyBKR1QuU3R5bGUoe1wiYWxpZ25lbWVudFwiOiBKR1QuQ29uc3RhbnRzLkFsaWduZW1lbnQuQ0VOVEVSIH0pKSwgbmV3IEpHVC5JbnB1dChudWxsLCBudWxsLCAxNTAsIG51bGwsIG5ldyBKR1QuU3R5bGUoe1wiYWxpZ25lbWVudFwiOiBKR1QuQ29uc3RhbnRzLkFsaWduZW1lbnQuQ0VOVEVSIH0pKSk7XG5cbmNvbnN0IG5vdGlmaWNhdGlvbjIgPSBuZXcgSkdULk5vdGlmaWNhdGlvbk1lc3NhZ2UobmV3IEpHVC5TdHlsZSh7IFwiYmFja2dyb3VuZENvbG9yXCI6IFwicmdiYSg0NiwgMjA0LCAyMjUsIDAuODUpXCIsIFwiZm9yZWdyb3VuZFwiOiB0cnVlIH0pLCBudWxsLCBudWxsLCBuZXcgSkdULkxhYmVsKFwiSGkhXCIsIG51bGwsIG51bGwsIGxhYmVsU3R5bGVDZW50ZXIpKTtcbmNvbnN0IHRleHRGaWVsZCA9IG5ldyBKR1QuSW5wdXQoNSwgMjUwLCAxNTApO1xuY29uc3QgbGFiZWwxID0gbmV3IEpHVC5MYWJlbChcIkEgbGFiZWxcIiwgNSwgMzI1KTtcbmxhYmVsMS5tb3ZhYmxlID0gdHJ1ZTtcbmNvbnN0IHJvdzEgPSBuZXcgSkdULlJvdyg1LCAyNTAsIG51bGwsIG51bGwsIG51bGwsIGxhYmVsMSwgdGV4dEZpZWxkKTtcbmNvbnN0IGxpbmsxID0gbmV3IEpHVC5MaW5rKFwiQSBsb25nIGxpbmtcIiwgNSwgMzAwKTtcbmNvbnN0IHRvb2x0aXAxID0gbmV3IEpHVC5Ub29sdGlwKG51bGwsIG5ldyBKR1QuTGFiZWwoXCJBIHRvb2x0aXBcXG5TZWNvbmQgbGluZVwiLCBudWxsLCBudWxsLCBsYWJlbFN0eWxlKSwgbmV3IEpHVC5Sb3cobnVsbCwgbnVsbCwgbnVsbCwgbnVsbCwgbnVsbCwgbmV3IEpHVC5MYWJlbChcIkxhYmVsIDogXCIsIG51bGwsIG51bGwsIGxhYmVsU3R5bGVWZXJ0aWNhbENlbnRlciksIG5ldyBKR1QuQnV0dG9uKDUsIDE1MCwgbnVsbCwgbnVsbCwgYnV0dG9uU3R5bGVSZWQsIG5ldyBKR1QuTGFiZWwoXCJCdXR0b25cIiwgbnVsbCwgbnVsbCwgbGFiZWxTdHlsZSkpKSk7XG5sYWJlbDEudG9vbHRpcCA9IHRvb2x0aXAxO1xuY29uc3QgdG9vbHRpcDIgPSBuZXcgSkdULlRvb2x0aXAobnVsbCwgbmV3IEpHVC5MYWJlbChcIkEgdG9vbHRpcCAuLi4uIC4uIC4uIC4uLi4uLiBBdXRvd3JhcFxcbk5ldyBsaW5lXCIsIG51bGwsIG51bGwsIGxhYmVsU3R5bGUpKTtcbmJ1dHRvblRleHQyLnRvb2x0aXAgPSB0b29sdGlwMjtcbmNvbnN0IGZwc01ldGVyID0gbmV3IEpHVC5GUFNNZXRlcihmYWxzZSwgbnVsbCwgbnVsbCwgbmV3IEpHVC5TdHlsZSh7IFwiYWxpZ25lbWVudFwiOiBcInJpZ2h0XCIsIFwidmVydGljYWxBbGlnbmVtZW50XCI6IFwiYm90dG9tXCJ9KSk7XG5mcHNNZXRlci5tb3ZhYmxlID0gdHJ1ZTtcbmNvbnN0IHByb2dyZXNzID0gbmV3IEpHVC5Qcm9ncmVzc0JhcigzMDAsIDUsIDIwMCwgMjUsIG51bGwsIG51bGwsIEpHVC5FYXNpbmdGdW5jdGlvbnMuZWFzZUluT3V0Q3ViaWMpO1xucHJvZ3Jlc3MucGVyY2VudCA9IDE7XG5wcm9ncmVzcy5tb3ZhYmxlID0gdHJ1ZTtcbmNvbnN0IHRvb2x0aXAzID0gbmV3IEpHVC5Ub29sdGlwKG51bGwsIG5ldyBKR1QuTGFiZWwoXCJDdXJyZW50OiBcIiArIChNYXRoLnJvdW5kKHByb2dyZXNzLnBlcmNlbnQgKiAxMDApIC8gMTAwKSAqIDEwMCArIFwiJVwiLCBudWxsLCBudWxsLCBsYWJlbFN0eWxlKSk7XG5wcm9ncmVzcy50b29sdGlwID0gdG9vbHRpcDM7XG5jb25zdCBidXR0b25BcnJvdyA9IG5ldyBKR1QuQnV0dG9uKDUsIDE1MCwgbnVsbCwgbnVsbCwgYnV0dG9uU3R5bGUsIG5ldyBKR1QuQXJyb3cobnVsbCwgbnVsbCwgMTAwLCAyMDAsIG5ldyBKR1QuU3R5bGUoeyBcImNvbG9yXCI6IFwid2hpdGVcIiB9KSkpO1xuY29uc3QgY29sU2Nyb2xsYWJsZSA9IG5ldyBKR1QuQ29sKDI1NSwgMjUwLCAyNTAsIDQyLCBuZXcgSkdULlN0eWxlKHsgXCJiYWNrZ3JvdW5kQ29sb3JcIjogXCIjZmZmXCJ9KSwgbmV3IEpHVC5Sb3cobnVsbCwgbnVsbCwgbnVsbCwgbnVsbCwgbnVsbCwgbmV3IEpHVC5MYWJlbChcIlRlc3QxXCIpLCBuZXcgSkdULkxhYmVsKFwiVGVzdDJcIiksIG5ldyBKR1QuTGFiZWwoXCJUZXN0M1wiKSwgbmV3IEpHVC5MYWJlbChcIlRlc3Q0XCIpKSwgbmV3IEpHVC5Sb3cobnVsbCwgbnVsbCwgbnVsbCwgbnVsbCwgbnVsbCwgbmV3IEpHVC5MYWJlbChcIlRlc3Q1XCIpLCBuZXcgSkdULkxhYmVsKFwiVGVzdDZcIiksIG5ldyBKR1QuTGFiZWwoXCJUZXN0N1wiKSwgbmV3IEpHVC5MYWJlbChcIlRlc3Q4XCIpKSwgbmV3IEpHVC5Sb3cobnVsbCwgbnVsbCwgbnVsbCwgbnVsbCwgbnVsbCwgbmV3IEpHVC5MYWJlbChcIlRlc3Q5XCIpLCBuZXcgSkdULkxhYmVsKFwiVGVzdDEwXCIpLCBuZXcgSkdULkxhYmVsKFwiVGVzdDExXCIpLCBuZXcgSkdULkxhYmVsKFwiVGVzdDEyXCIpLCBuZXcgSkdULkxhYmVsKFwiVGVzdFwiKSkpO1xuY29sU2Nyb2xsYWJsZS5zdHlsZS5zZXQoXCJwYWRkaW5nXCIsIDEwKTtcbmNvbFNjcm9sbGFibGUuc3R5bGUuc2V0KFwic3BhY2VCZXR3ZWVuQ29tcG9uZW50c1wiLCAwKTtcbmNvbnN0IG9wdGlvbkxhc3QgPSBuZXcgSkdULlNlbGVjdE9wdGlvbihuZXcgSkdULkxhYmVsKFwiUmVtb3ZlZCBpbiA1c1wiKSk7XG5jb25zdCBvcHRpb25zID0gbmV3IEpHVC5TZWxlY3RPcHRpb25zQ29udGFpbmVyKDc1LCBudWxsLCBuZXcgSkdULlNlbGVjdE9wdGlvbihuZXcgSkdULkxhYmVsKFwiRmlyc3QgY2hvaWNlXCIpKSwgbmV3IEpHVC5TZWxlY3RPcHRpb24obmV3IEpHVC5MYWJlbChcIlNlY29uZCBjaG9pY2VcIikpLCBuZXcgSkdULlNlbGVjdE9wdGlvbihuZXcgSkdULkxhYmVsKFwiVGhpcmQgY2hvaWNlXCIpKSwgb3B0aW9uTGFzdCk7XG5jb25zdCBzZWxlY3QgPSBuZXcgSkdULlNlbGVjdCgyNTUsIDMxNSwgbnVsbCwgbnVsbCwgbmV3IEpHVC5TdHlsZSh7IFwidmVydGljYWxBbGlnbmVtZW50XCI6IFwiYm90dG9tXCIgfSksIG9wdGlvbnMpO1xuc2VsZWN0Lm1vdmFibGUgPSB0cnVlO1xuXG4vLyBDdXN0b20gY29tcG9uZW50XG5jbGFzcyBCb3ggZXh0ZW5kcyBKR1QuQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3Ioc3R5bGUpIHtcbiAgICBzdXBlcihudWxsLCBudWxsLCBudWxsLCBudWxsLCBzdHlsZSk7XG4gIH1cblxuICBkcmF3KGNvbnRleHQpIHtcbiAgICBzdXBlci5kcmF3KGNvbnRleHQpO1xuICAgIFxuICAgIGNvbnN0IGNhbnZhcyA9IGNvbnRleHQuY2FudmFzO1xuICAgIGNvbnN0IGN0eCA9IGNhbnZhcy5nZXRDb250ZXh0KFwiMmRcIik7XG4gICAgY3R4LnNhdmUoKTtcblxuICAgIGN0eC5maWxsU3R5bGUgPSB0aGlzLnN0eWxlLmJhY2tncm91bmRDb2xvcjtcbiAgICBjdHguZmlsbFJlY3QodGhpcy54LCB0aGlzLnksIHRoaXMucGFyZW50LndpZHRoLCB0aGlzLnBhcmVudC5oZWlnaHQpO1xuXG4gICAgY3R4LnJlc3RvcmUoKTtcbiAgfVxufVxuXG4vLyBDcmVhdGUgc2NlbmUgKGNvbnRhaW5pbmcgY29tcG9uZW50cykgYW5kIGNhbnZhc1xuY29uc3QgYm94ID0gbmV3IEJveChuZXcgSkdULlN0eWxlKHsgXCJiYWNrZ3JvdW5kQ29sb3JcIjogXCIjODg4ODg4XCIgfSkpO1xuY29uc3Qgc2NlbmUgPSBuZXcgSkdULlNjZW5lKGJveCwgYnV0dG9uVGV4dCwgYnV0dG9uVGV4dDIsIGJ1dHRvbkltYWdlLCBidXR0b25UZXh0RnVsbHNjcmVlbiwgbm90aWZpY2F0aW9uLCBtZW51LCBub3RpZmljYXRpb24yLCByb3cxLCBsaW5rMSwgdG9vbHRpcDEsIHRvb2x0aXAyLCBmcHNNZXRlciwgcHJvZ3Jlc3MsIHRvb2x0aXAzLCBidXR0b25BcnJvdywgY29sU2Nyb2xsYWJsZSwgc2VsZWN0LCBvcHRpb25zKTtcbmNvbnN0IGNhbnZhcyA9IG5ldyBKR1QuQ2FudmFzKHNjZW5lLCBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNhbnZhc1wiKSwgbnVsbCwgbnVsbCwgdHJ1ZSk7XG5jYW52YXMuYXBwZW5kVG8oZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjYW52YXNDb250YWluZXJcIikpO1xuXG4vLyBFdmVudHNcbmJ1dHRvblRleHQuYWRkQ2xpY2tBY3Rpb24oKCkgPT4ge1xuICBub3RpZmljYXRpb24ub3BlbigpO1xufSk7XG5cbmJ1dHRvblRleHRGdWxsc2NyZWVuLmFkZENsaWNrQWN0aW9uKCgpID0+IHtcbiAgY2FudmFzLnRvZ2dsZUZ1bGxzY3JlZW4oKTtcbn0pO1xuXG5idXR0b25JbWFnZS5hZGRDbGlja0FjdGlvbigoKSA9PiB7XG4gIG1lbnUuZW5hYmxlKCk7XG59KTtcblxuYnV0dG9uTWVudTQuYWRkQ2xpY2tBY3Rpb24oKCkgPT4ge1xuICBtZW51LmRpc2FibGUoKTtcbn0pO1xuXG5idXR0b25NZW51NS5hZGRDbGlja0FjdGlvbigoKSA9PiB7XG4gIG5vdGlmaWNhdGlvbjIub3BlbigpO1xufSk7XG5cbmJ1dHRvbk1lbnU2LmFkZENsaWNrQWN0aW9uKCgpID0+IHtcbiAgSkdULkNvbnN0YW50cy5TZXR0aW5nLkVOQUJMRV9QSVhFTF9SQVRJT19SRVNJWklORyA9ICFKR1QuQ29uc3RhbnRzLlNldHRpbmcuRU5BQkxFX1BJWEVMX1JBVElPX1JFU0laSU5HO1xufSk7XG5cbmxpbmsxLmFkZENsaWNrQWN0aW9uKCgpID0+IHtcbiAgbm90aWZpY2F0aW9uLm9wZW4oKTtcbn0pO1xuXG4vLyBMb2FkIHBhdXNlIGltYWdlIGFuZCBzdGFydCB0aGUgY2FudmFzIHJlbmRlcmluZ1xuaW1hZ2VMb2FkZXIubG9hZChbXCJwYXVzZS5wbmdcIl0sICgpID0+IHtcbiAgcGF1c2VJbWFnZS5sb2FkSW1hZ2UoaW1hZ2VMb2FkZXIpO1xuICBjYW52YXMuc3RhcnREcmF3KCk7XG5cbiAgLy8gUmFuZG9tbHkgY2hhbmdlIHRoZSBwcm9ncmVzcyB2YWx1ZVxuICBzZXRJbnRlcnZhbCgoKSA9PiB7XG4gICAgaWYocHJvZ3Jlc3MucGVyY2VudCA8IDEpIHtcbiAgICAgIHByb2dyZXNzLnBlcmNlbnQgPSBNYXRoLnJhbmRvbSgpO1xuICAgIH0gZWxzZSBpZihwcm9ncmVzcy5wZXJjZW50ID49IDEpIHtcbiAgICAgIHByb2dyZXNzLnBlcmNlbnQgPSBNYXRoLnJhbmRvbSgpO1xuICAgIH1cblxuICAgIHRvb2x0aXAzLmNvbXBvbmVudHNbMF0udGV4dCA9IFwiQ3VycmVudDogXCIgKyBNYXRoLnJvdW5kKChNYXRoLnJvdW5kKHByb2dyZXNzLnBlcmNlbnQgKiAxMDApIC8gMTAwKSAqIDEwMCkgKyBcIiVcIjtcbiAgfSwgMzAwMCk7XG5cbiAgLy8gUmVtb3ZlIHRoZSBsYXN0IG9wdGlvbiBlbGVtZW50XG4gIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgIG9wdGlvbnMucmVtb3ZlKG9wdGlvbkxhc3QpO1xuICB9LCA1MDAwKTtcbn0pOyIsImZ1bmN0aW9uIF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoc2VsZikge1xuICBpZiAoc2VsZiA9PT0gdm9pZCAwKSB7XG4gICAgdGhyb3cgbmV3IFJlZmVyZW5jZUVycm9yKFwidGhpcyBoYXNuJ3QgYmVlbiBpbml0aWFsaXNlZCAtIHN1cGVyKCkgaGFzbid0IGJlZW4gY2FsbGVkXCIpO1xuICB9XG5cbiAgcmV0dXJuIHNlbGY7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX2Fzc2VydFRoaXNJbml0aWFsaXplZDsiLCJmdW5jdGlvbiBfY2xhc3NDYWxsQ2hlY2soaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7XG4gIGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7XG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblwiKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9jbGFzc0NhbGxDaGVjazsiLCJmdW5jdGlvbiBfZGVmaW5lUHJvcGVydGllcyh0YXJnZXQsIHByb3BzKSB7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgcHJvcHMubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgZGVzY3JpcHRvciA9IHByb3BzW2ldO1xuICAgIGRlc2NyaXB0b3IuZW51bWVyYWJsZSA9IGRlc2NyaXB0b3IuZW51bWVyYWJsZSB8fCBmYWxzZTtcbiAgICBkZXNjcmlwdG9yLmNvbmZpZ3VyYWJsZSA9IHRydWU7XG4gICAgaWYgKFwidmFsdWVcIiBpbiBkZXNjcmlwdG9yKSBkZXNjcmlwdG9yLndyaXRhYmxlID0gdHJ1ZTtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBkZXNjcmlwdG9yLmtleSwgZGVzY3JpcHRvcik7XG4gIH1cbn1cblxuZnVuY3Rpb24gX2NyZWF0ZUNsYXNzKENvbnN0cnVjdG9yLCBwcm90b1Byb3BzLCBzdGF0aWNQcm9wcykge1xuICBpZiAocHJvdG9Qcm9wcykgX2RlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IucHJvdG90eXBlLCBwcm90b1Byb3BzKTtcbiAgaWYgKHN0YXRpY1Byb3BzKSBfZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvciwgc3RhdGljUHJvcHMpO1xuICByZXR1cm4gQ29uc3RydWN0b3I7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX2NyZWF0ZUNsYXNzOyIsInZhciBzdXBlclByb3BCYXNlID0gcmVxdWlyZShcIi4vc3VwZXJQcm9wQmFzZVwiKTtcblxuZnVuY3Rpb24gX2dldCh0YXJnZXQsIHByb3BlcnR5LCByZWNlaXZlcikge1xuICBpZiAodHlwZW9mIFJlZmxlY3QgIT09IFwidW5kZWZpbmVkXCIgJiYgUmVmbGVjdC5nZXQpIHtcbiAgICBtb2R1bGUuZXhwb3J0cyA9IF9nZXQgPSBSZWZsZWN0LmdldDtcbiAgfSBlbHNlIHtcbiAgICBtb2R1bGUuZXhwb3J0cyA9IF9nZXQgPSBmdW5jdGlvbiBfZ2V0KHRhcmdldCwgcHJvcGVydHksIHJlY2VpdmVyKSB7XG4gICAgICB2YXIgYmFzZSA9IHN1cGVyUHJvcEJhc2UodGFyZ2V0LCBwcm9wZXJ0eSk7XG4gICAgICBpZiAoIWJhc2UpIHJldHVybjtcbiAgICAgIHZhciBkZXNjID0gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihiYXNlLCBwcm9wZXJ0eSk7XG5cbiAgICAgIGlmIChkZXNjLmdldCkge1xuICAgICAgICByZXR1cm4gZGVzYy5nZXQuY2FsbChyZWNlaXZlcik7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBkZXNjLnZhbHVlO1xuICAgIH07XG4gIH1cblxuICByZXR1cm4gX2dldCh0YXJnZXQsIHByb3BlcnR5LCByZWNlaXZlciB8fCB0YXJnZXQpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9nZXQ7IiwiZnVuY3Rpb24gX2dldFByb3RvdHlwZU9mKG8pIHtcbiAgbW9kdWxlLmV4cG9ydHMgPSBfZ2V0UHJvdG90eXBlT2YgPSBPYmplY3Quc2V0UHJvdG90eXBlT2YgPyBPYmplY3QuZ2V0UHJvdG90eXBlT2YgOiBmdW5jdGlvbiBfZ2V0UHJvdG90eXBlT2Yobykge1xuICAgIHJldHVybiBvLl9fcHJvdG9fXyB8fCBPYmplY3QuZ2V0UHJvdG90eXBlT2Yobyk7XG4gIH07XG4gIHJldHVybiBfZ2V0UHJvdG90eXBlT2Yobyk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX2dldFByb3RvdHlwZU9mOyIsInZhciBzZXRQcm90b3R5cGVPZiA9IHJlcXVpcmUoXCIuL3NldFByb3RvdHlwZU9mXCIpO1xuXG5mdW5jdGlvbiBfaW5oZXJpdHMoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpIHtcbiAgaWYgKHR5cGVvZiBzdXBlckNsYXNzICE9PSBcImZ1bmN0aW9uXCIgJiYgc3VwZXJDbGFzcyAhPT0gbnVsbCkge1xuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJTdXBlciBleHByZXNzaW9uIG11c3QgZWl0aGVyIGJlIG51bGwgb3IgYSBmdW5jdGlvblwiKTtcbiAgfVxuXG4gIHN1YkNsYXNzLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoc3VwZXJDbGFzcyAmJiBzdXBlckNsYXNzLnByb3RvdHlwZSwge1xuICAgIGNvbnN0cnVjdG9yOiB7XG4gICAgICB2YWx1ZTogc3ViQ2xhc3MsXG4gICAgICB3cml0YWJsZTogdHJ1ZSxcbiAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICAgIH1cbiAgfSk7XG4gIGlmIChzdXBlckNsYXNzKSBzZXRQcm90b3R5cGVPZihzdWJDbGFzcywgc3VwZXJDbGFzcyk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX2luaGVyaXRzOyIsInZhciBfdHlwZW9mID0gcmVxdWlyZShcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvdHlwZW9mXCIpO1xuXG52YXIgYXNzZXJ0VGhpc0luaXRpYWxpemVkID0gcmVxdWlyZShcIi4vYXNzZXJ0VGhpc0luaXRpYWxpemVkXCIpO1xuXG5mdW5jdGlvbiBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybihzZWxmLCBjYWxsKSB7XG4gIGlmIChjYWxsICYmIChfdHlwZW9mKGNhbGwpID09PSBcIm9iamVjdFwiIHx8IHR5cGVvZiBjYWxsID09PSBcImZ1bmN0aW9uXCIpKSB7XG4gICAgcmV0dXJuIGNhbGw7XG4gIH1cblxuICByZXR1cm4gYXNzZXJ0VGhpc0luaXRpYWxpemVkKHNlbGYpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuOyIsImZ1bmN0aW9uIF9zZXRQcm90b3R5cGVPZihvLCBwKSB7XG4gIG1vZHVsZS5leHBvcnRzID0gX3NldFByb3RvdHlwZU9mID0gT2JqZWN0LnNldFByb3RvdHlwZU9mIHx8IGZ1bmN0aW9uIF9zZXRQcm90b3R5cGVPZihvLCBwKSB7XG4gICAgby5fX3Byb3RvX18gPSBwO1xuICAgIHJldHVybiBvO1xuICB9O1xuXG4gIHJldHVybiBfc2V0UHJvdG90eXBlT2YobywgcCk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX3NldFByb3RvdHlwZU9mOyIsInZhciBnZXRQcm90b3R5cGVPZiA9IHJlcXVpcmUoXCIuL2dldFByb3RvdHlwZU9mXCIpO1xuXG5mdW5jdGlvbiBfc3VwZXJQcm9wQmFzZShvYmplY3QsIHByb3BlcnR5KSB7XG4gIHdoaWxlICghT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpKSB7XG4gICAgb2JqZWN0ID0gZ2V0UHJvdG90eXBlT2Yob2JqZWN0KTtcbiAgICBpZiAob2JqZWN0ID09PSBudWxsKSBicmVhaztcbiAgfVxuXG4gIHJldHVybiBvYmplY3Q7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX3N1cGVyUHJvcEJhc2U7IiwiZnVuY3Rpb24gX3R5cGVvZihvYmopIHtcbiAgXCJAYmFiZWwvaGVscGVycyAtIHR5cGVvZlwiO1xuXG4gIGlmICh0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgdHlwZW9mIFN5bWJvbC5pdGVyYXRvciA9PT0gXCJzeW1ib2xcIikge1xuICAgIG1vZHVsZS5leHBvcnRzID0gX3R5cGVvZiA9IGZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7XG4gICAgICByZXR1cm4gdHlwZW9mIG9iajtcbiAgICB9O1xuICB9IGVsc2Uge1xuICAgIG1vZHVsZS5leHBvcnRzID0gX3R5cGVvZiA9IGZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7XG4gICAgICByZXR1cm4gb2JqICYmIHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiBvYmouY29uc3RydWN0b3IgPT09IFN5bWJvbCAmJiBvYmogIT09IFN5bWJvbC5wcm90b3R5cGUgPyBcInN5bWJvbFwiIDogdHlwZW9mIG9iajtcbiAgICB9O1xuICB9XG5cbiAgcmV0dXJuIF90eXBlb2Yob2JqKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfdHlwZW9mOyJdLCJzb3VyY2VSb290IjoiIn0=