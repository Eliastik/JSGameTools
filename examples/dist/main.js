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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vZXhhbXBsZXMvc3JjL21haW4uanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvYXNzZXJ0VGhpc0luaXRpYWxpemVkLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2NsYXNzQ2FsbENoZWNrLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2NyZWF0ZUNsYXNzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2dldC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9nZXRQcm90b3R5cGVPZi5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9pbmhlcml0cy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL3NldFByb3RvdHlwZU9mLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL3N1cGVyUHJvcEJhc2UuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvdHlwZW9mLmpzIl0sIm5hbWVzIjpbIkpHVCIsIkpTR2FtZVRvb2xzIiwiaW1hZ2VMb2FkZXIiLCJJbWFnZUxvYWRlciIsImJ1dHRvblN0eWxlIiwiU3R5bGUiLCJidXR0b25TdHlsZVJlZCIsImxhYmVsU3R5bGUiLCJsYWJlbFN0eWxlQ2VudGVyIiwibGFiZWxTdHlsZVZlcnRpY2FsQ2VudGVyIiwiYnV0dG9uVGV4dCIsIkJ1dHRvbiIsIkxhYmVsIiwiYnV0dG9uVGV4dDIiLCJzdHlsZSIsInNldCIsInBhdXNlSW1hZ2UiLCJJbWFnZUNvbnRhaW5lciIsImJ1dHRvbkltYWdlIiwiUm93IiwibW92YWJsZSIsImJ1dHRvblRleHRGdWxsc2NyZWVuIiwibm90aWZpY2F0aW9uIiwiTm90aWZpY2F0aW9uTWVzc2FnZSIsImJ1dHRvbk1lbnUxIiwiYnV0dG9uTWVudTUiLCJidXR0b25NZW51MiIsImJ1dHRvbk1lbnUzIiwiYnV0dG9uTWVudTQiLCJidXR0b25NZW51NiIsIm1lbnVMYWJlbCIsIm1lbnUiLCJNZW51IiwiSW5wdXQiLCJDb25zdGFudHMiLCJBbGlnbmVtZW50IiwiQ0VOVEVSIiwibm90aWZpY2F0aW9uMiIsInRleHRGaWVsZCIsImxhYmVsMSIsInJvdzEiLCJsaW5rMSIsIkxpbmsiLCJ0b29sdGlwMSIsIlRvb2x0aXAiLCJ0b29sdGlwIiwidG9vbHRpcDIiLCJmcHNNZXRlciIsIkZQU01ldGVyIiwicHJvZ3Jlc3MiLCJQcm9ncmVzc0JhciIsIkVhc2luZ0Z1bmN0aW9ucyIsImVhc2VJbk91dEN1YmljIiwicGVyY2VudCIsInRvb2x0aXAzIiwiTWF0aCIsInJvdW5kIiwiYnV0dG9uQXJyb3ciLCJBcnJvdyIsImNvbFNjcm9sbGFibGUiLCJDb2wiLCJvcHRpb25MYXN0IiwiU2VsZWN0T3B0aW9uIiwib3B0aW9ucyIsIlNlbGVjdE9wdGlvbnNDb250YWluZXIiLCJzZWxlY3QiLCJTZWxlY3QiLCJCb3giLCJjb250ZXh0IiwiY2FudmFzIiwiY3R4IiwiZ2V0Q29udGV4dCIsInNhdmUiLCJmaWxsU3R5bGUiLCJiYWNrZ3JvdW5kQ29sb3IiLCJmaWxsUmVjdCIsIngiLCJ5IiwicGFyZW50Iiwid2lkdGgiLCJoZWlnaHQiLCJyZXN0b3JlIiwiQ29tcG9uZW50IiwiYm94Iiwic2NlbmUiLCJTY2VuZSIsIkNhbnZhcyIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJhcHBlbmRUbyIsImFkZENsaWNrQWN0aW9uIiwib3BlbiIsInRvZ2dsZUZ1bGxzY3JlZW4iLCJlbmFibGUiLCJkaXNhYmxlIiwiU2V0dGluZyIsIkVOQUJMRV9QSVhFTF9SQVRJT19SRVNJWklORyIsImxvYWQiLCJsb2FkSW1hZ2UiLCJzdGFydERyYXciLCJzZXRJbnRlcnZhbCIsInJhbmRvbSIsImNvbXBvbmVudHMiLCJ0ZXh0Iiwic2V0VGltZW91dCIsInJlbW92ZSJdLCJtYXBwaW5ncyI6IjtRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EseUNBQXlDLGlDQUFpQztRQUMxRSxnSEFBZ0gsbUJBQW1CLEVBQUU7UUFDckk7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwyQkFBMkIsMEJBQTBCLEVBQUU7UUFDdkQsaUNBQWlDLGVBQWU7UUFDaEQ7UUFDQTtRQUNBOztRQUVBO1FBQ0Esc0RBQXNELCtEQUErRDs7UUFFckg7UUFDQTs7O1FBR0E7UUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2xGQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQU1BLEdBQUcsR0FBR0MsV0FBWjtBQUVBLElBQU1DLFdBQVcsR0FBRyxJQUFJRixHQUFHLENB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QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQSx5QiIsImZpbGUiOiJtYWluLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9leGFtcGxlcy9zcmMvbWFpbi5qc1wiKTtcbiIsIi8qXG4gKiBDb3B5cmlnaHQgKEMpIDIwMjAgRWxpYXN0aWsgKGVsaWFzdGlrc29mdHMuY29tKVxuICpcbiAqIFRoaXMgZmlsZSBpcyBwYXJ0IG9mIFwiSlNHYW1lVG9vbHNcIi5cbiAqXG4gKiBcIkpTR2FtZVRvb2xzXCIgaXMgZnJlZSBzb2Z0d2FyZTogeW91IGNhbiByZWRpc3RyaWJ1dGUgaXQgYW5kL29yIG1vZGlmeVxuICogaXQgdW5kZXIgdGhlIHRlcm1zIG9mIHRoZSBHTlUgR2VuZXJhbCBQdWJsaWMgTGljZW5zZSBhcyBwdWJsaXNoZWQgYnlcbiAqIHRoZSBGcmVlIFNvZnR3YXJlIEZvdW5kYXRpb24sIGVpdGhlciB2ZXJzaW9uIDMgb2YgdGhlIExpY2Vuc2UsIG9yXG4gKiAoYXQgeW91ciBvcHRpb24pIGFueSBsYXRlciB2ZXJzaW9uLlxuICpcbiAqIFwiSlNHYW1lVG9vbHNcIiBpcyBkaXN0cmlidXRlZCBpbiB0aGUgaG9wZSB0aGF0IGl0IHdpbGwgYmUgdXNlZnVsLFxuICogYnV0IFdJVEhPVVQgQU5ZIFdBUlJBTlRZOyB3aXRob3V0IGV2ZW4gdGhlIGltcGxpZWQgd2FycmFudHkgb2ZcbiAqIE1FUkNIQU5UQUJJTElUWSBvciBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRS4gIFNlZSB0aGVcbiAqIEdOVSBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlIGZvciBtb3JlIGRldGFpbHMuXG4gKlxuICogWW91IHNob3VsZCBoYXZlIHJlY2VpdmVkIGEgY29weSBvZiB0aGUgR05VIEdlbmVyYWwgUHVibGljIExpY2Vuc2VcbiAqIGFsb25nIHdpdGggXCJKU0dhbWVUb29sc1wiLiAgSWYgbm90LCBzZWUgPGh0dHA6Ly93d3cuZ251Lm9yZy9saWNlbnNlcy8+LlxuICovXG4vLyBDcmVhdGUgY29tcG9uZW50c1xuY29uc3QgSkdUID0gSlNHYW1lVG9vbHM7XG5cbmNvbnN0IGltYWdlTG9hZGVyID0gbmV3IEpHVC5JbWFnZUxvYWRlcigpO1xuXG5jb25zdCBidXR0b25TdHlsZSA9IG5ldyBKR1QuU3R5bGUoe1xuICBcImJhY2tncm91bmRDb2xvclwiOiBcIiMyZWNjNzFcIixcbiAgXCJiYWNrZ3JvdW5kQ29sb3JIb3ZlclwiOiBcIiMxYWJjOWNcIixcbiAgXCJiYWNrZ3JvdW5kQ29sb3JEb3duXCI6IFwiIzE2YTA4NVwiXG59KTtcblxuY29uc3QgYnV0dG9uU3R5bGVSZWQgPSBuZXcgSkdULlN0eWxlKHtcbiAgXCJiYWNrZ3JvdW5kQ29sb3JcIjogXCIjQ0MyRjJGXCIsXG4gIFwiYmFja2dyb3VuZENvbG9ySG92ZXJcIjogXCIjRjIzODM4XCIsXG4gIFwiYmFja2dyb3VuZENvbG9yRG93blwiOiBcIiNBNjI2MjZcIlxufSk7XG5cbmNvbnN0IGxhYmVsU3R5bGUgPSBuZXcgSkdULlN0eWxlKHtcbiAgXCJmb250Q29sb3JcIjogXCJ3aGl0ZVwiXG59KTtcblxuY29uc3QgbGFiZWxTdHlsZUNlbnRlciA9IG5ldyBKR1QuU3R5bGUoe1xuICBcImZvbnRDb2xvclwiOiBcIndoaXRlXCIsXG4gIFwiYWxpZ25lbWVudFwiOiBcImNlbnRlclwiXG59KTtcblxuY29uc3QgbGFiZWxTdHlsZVZlcnRpY2FsQ2VudGVyID0gbmV3IEpHVC5TdHlsZSh7XG4gIFwiZm9udENvbG9yXCI6IFwid2hpdGVcIixcbiAgXCJ2ZXJ0aWNhbEFsaWduZW1lbnRcIjogXCJjZW50ZXJcIlxufSk7XG5cbmNvbnN0IGJ1dHRvblRleHQgPSBuZXcgSkdULkJ1dHRvbig1LCA1LCBudWxsLCBudWxsLCBidXR0b25TdHlsZSwgbmV3IEpHVC5MYWJlbChcIlNob3cgYSBub3RpZmljYXRpb25cIiwgbnVsbCwgbnVsbCwgbGFiZWxTdHlsZSkpO1xuY29uc3QgYnV0dG9uVGV4dDIgPSBuZXcgSkdULkJ1dHRvbig1LCAxNTAsIG51bGwsIG51bGwsIGJ1dHRvblN0eWxlLCBuZXcgSkdULkxhYmVsKFwiTG9uZyB0ZXh0IGJ1dHRvbiAuLi4uLi4uLi4uLiBUaGlzIHNob3VsZCBiZSBvbiBuZXh0IGxpbmVcIiwgbnVsbCwgbnVsbCwgbGFiZWxTdHlsZSkpO1xuYnV0dG9uVGV4dDIuc3R5bGUuc2V0KFwiYWxpZ25lbWVudFwiLCBcInJpZ2h0XCIpO1xuY29uc3QgcGF1c2VJbWFnZSA9IG5ldyBKR1QuSW1hZ2VDb250YWluZXIoXCJwYXVzZS5wbmdcIiwgbnVsbCwgbnVsbCwgNjQsIDY0LCBuZXcgSkdULlN0eWxlKHsgXCJ2ZXJ0aWNhbEFsaWduZW1lbnRcIjogXCJjZW50ZXJcIiwgXCJhbGlnbmVtZW50XCI6IFwibGVmdFwiIH0pKTtcbmNvbnN0IGJ1dHRvbkltYWdlID0gbmV3IEpHVC5CdXR0b24obnVsbCwgNTAsIG51bGwsIG51bGwsIG5ldyBKR1QuU3R5bGUoeyBcImFsaWduZW1lbnRcIjogXCJsZWZ0XCIgfSksIG5ldyBKR1QuUm93KDUsIDI1MCwgbnVsbCwgbnVsbCwgbnVsbCwgcGF1c2VJbWFnZSwgbmV3IEpHVC5MYWJlbChcIlBhdXNlXCIsIG51bGwsIG51bGwsIGxhYmVsU3R5bGVWZXJ0aWNhbENlbnRlcikpKTtcbmJ1dHRvbkltYWdlLm1vdmFibGUgPSB0cnVlO1xuY29uc3QgYnV0dG9uVGV4dEZ1bGxzY3JlZW4gPSBuZXcgSkdULkJ1dHRvbig1LCA3NSwgbnVsbCwgbnVsbCwgYnV0dG9uU3R5bGUsIG5ldyBKR1QuTGFiZWwoXCJUb2dnbGUgZnVsbHNjcmVlblwiLCBudWxsLCBudWxsLCBsYWJlbFN0eWxlKSk7XG5idXR0b25UZXh0RnVsbHNjcmVlbi5zdHlsZS5zZXQoXCJhbGlnbmVtZW50XCIsIFwiY2VudGVyXCIpO1xuY29uc3Qgbm90aWZpY2F0aW9uID0gbmV3IEpHVC5Ob3RpZmljYXRpb25NZXNzYWdlKG51bGwsIG51bGwsIG51bGwsIG5ldyBKR1QuTGFiZWwoXCJBIG5vdGlmaWNhdGlvblwiLCBudWxsLCBudWxsLCBsYWJlbFN0eWxlQ2VudGVyKSwgbmV3IEpHVC5Sb3cobnVsbCwgbnVsbCwgbnVsbCwgbnVsbCwgbnVsbCwgbmV3IEpHVC5MYWJlbChcIkxhYmVsIDogXCIsIG51bGwsIG51bGwsIGxhYmVsU3R5bGVWZXJ0aWNhbENlbnRlciksIG5ldyBKR1QuQnV0dG9uKG51bGwsIG51bGwsIG51bGwsIG51bGwsIG51bGwsIG5ldyBKR1QuTGFiZWwoXCJCdXR0b25cIiwgbnVsbCwgbnVsbCwgbGFiZWxTdHlsZSkpKSk7XG5cbmNvbnN0IGJ1dHRvbk1lbnUxID0gbmV3IEpHVC5CdXR0b24oNSwgNSwgbnVsbCwgbnVsbCwgYnV0dG9uU3R5bGUsIG5ldyBKR1QuTGFiZWwoXCJBIGJ1dHRvbiwgYWxpZ25lZCB0byB0aGUgbGVmdFwiLCBudWxsLCBudWxsLCBsYWJlbFN0eWxlKSk7XG5idXR0b25NZW51MS5zdHlsZS5zZXQoXCJhbGlnbmVtZW50XCIsIFwibGVmdFwiKTtcbmNvbnN0IGJ1dHRvbk1lbnU1ID0gbmV3IEpHVC5CdXR0b24oNSwgNSwgbnVsbCwgbnVsbCwgYnV0dG9uU3R5bGUsIG5ldyBKR1QuTGFiZWwoXCJEaXNwbGF5IGEgbm90aWZpY2F0aW9uXCIsIG51bGwsIG51bGwsIGxhYmVsU3R5bGUpKTtcbmNvbnN0IGJ1dHRvbk1lbnUyID0gbmV3IEpHVC5CdXR0b24oNSwgNSwgbnVsbCwgbnVsbCwgYnV0dG9uU3R5bGUsIG5ldyBKR1QuTGFiZWwoXCJBbm90aGVyIGJ1dHRvbiwgYWxpZ25lZCB0byB0aGUgcmlnaHRcIiwgbnVsbCwgbnVsbCwgbGFiZWxTdHlsZSkpO1xuYnV0dG9uTWVudTIuc3R5bGUuc2V0KFwiYWxpZ25lbWVudFwiLCBcInJpZ2h0XCIpO1xuY29uc3QgYnV0dG9uTWVudTMgPSBuZXcgSkdULkJ1dHRvbig1LCA1LCBudWxsLCBudWxsLCBidXR0b25TdHlsZSwgbmV3IEpHVC5MYWJlbChcIkEgbG9uZyBidXR0b25ubm5ubm5ubm5ubm5ubm5ubm5ubm5ubm5uXCIsIG51bGwsIG51bGwsIGxhYmVsU3R5bGUpKTtcbmJ1dHRvbk1lbnUzLnN0eWxlLnNldChcImFsaWduZW1lbnRcIiwgXCJyaWdodFwiKTtcbmNvbnN0IGJ1dHRvbk1lbnU0ID0gbmV3IEpHVC5CdXR0b24oNSwgNSwgbnVsbCwgbnVsbCwgYnV0dG9uU3R5bGVSZWQsIG5ldyBKR1QuTGFiZWwoXCJDbG9zZSAoY2VudGVyZWQpXCIsIG51bGwsIG51bGwsIGxhYmVsU3R5bGUpKTtcbmJ1dHRvbk1lbnU0LnN0eWxlLnNldChcImFsaWduZW1lbnRcIiwgXCJjZW50ZXJcIik7XG5jb25zdCBidXR0b25NZW51NiA9IG5ldyBKR1QuQnV0dG9uKDUsIDUsIG51bGwsIG51bGwsIGJ1dHRvblN0eWxlLCBuZXcgSkdULkxhYmVsKFwiRGlzYWJsZS9lbmFibGUgaGlnaCBEUElcIiwgbnVsbCwgbnVsbCwgbGFiZWxTdHlsZSkpO1xuYnV0dG9uTWVudTYuc3R5bGUuc2V0KFwiYWxpZ25lbWVudFwiLCBcImNlbnRlclwiKTtcbmNvbnN0IG1lbnVMYWJlbCA9IG5ldyBKR1QuTGFiZWwoXCJQYXVzZSBtZW51XFxuWW91IGNhbiB1c2UgdGhlIGFycm93IGtleXMsIHByZXNzIGVudGVyIHRvIHNlbGVjdFwiLCBudWxsLCBudWxsLCBsYWJlbFN0eWxlLCBcImNlbnRlclwiKTtcbm1lbnVMYWJlbC5zdHlsZS5zZXQoXCJhbGlnbmVtZW50XCIsIFwiY2VudGVyXCIpO1xuY29uc3QgbWVudSA9IG5ldyBKR1QuTWVudShudWxsLCBtZW51TGFiZWwsIGJ1dHRvbk1lbnUxLCBidXR0b25NZW51NSwgYnV0dG9uTWVudTIsIGJ1dHRvbk1lbnUzLCBidXR0b25NZW51NiwgYnV0dG9uTWVudTQsIG5ldyBKR1QuSW5wdXQobnVsbCwgbnVsbCwgMTUwLCBudWxsLCBuZXcgSkdULlN0eWxlKHtcImFsaWduZW1lbnRcIjogSkdULkNvbnN0YW50cy5BbGlnbmVtZW50LkNFTlRFUiB9KSksIG5ldyBKR1QuSW5wdXQobnVsbCwgbnVsbCwgMTUwLCBudWxsLCBuZXcgSkdULlN0eWxlKHtcImFsaWduZW1lbnRcIjogSkdULkNvbnN0YW50cy5BbGlnbmVtZW50LkNFTlRFUiB9KSkpO1xuXG5jb25zdCBub3RpZmljYXRpb24yID0gbmV3IEpHVC5Ob3RpZmljYXRpb25NZXNzYWdlKG5ldyBKR1QuU3R5bGUoeyBcImJhY2tncm91bmRDb2xvclwiOiBcInJnYmEoNDYsIDIwNCwgMjI1LCAwLjg1KVwiLCBcImZvcmVncm91bmRcIjogdHJ1ZSB9KSwgbnVsbCwgbnVsbCwgbmV3IEpHVC5MYWJlbChcIkhpIVwiLCBudWxsLCBudWxsLCBsYWJlbFN0eWxlQ2VudGVyKSk7XG5jb25zdCB0ZXh0RmllbGQgPSBuZXcgSkdULklucHV0KDUsIDI1MCwgMTUwKTtcbmNvbnN0IGxhYmVsMSA9IG5ldyBKR1QuTGFiZWwoXCJBIGxhYmVsXCIsIDUsIDMyNSk7XG5sYWJlbDEubW92YWJsZSA9IHRydWU7XG5jb25zdCByb3cxID0gbmV3IEpHVC5Sb3coNSwgMjUwLCBudWxsLCBudWxsLCBudWxsLCBsYWJlbDEsIHRleHRGaWVsZCk7XG5jb25zdCBsaW5rMSA9IG5ldyBKR1QuTGluayhcIkEgbG9uZyBsaW5rXCIsIDUsIDMwMCk7XG5jb25zdCB0b29sdGlwMSA9IG5ldyBKR1QuVG9vbHRpcChudWxsLCBuZXcgSkdULkxhYmVsKFwiQSB0b29sdGlwXFxuU2Vjb25kIGxpbmVcIiwgbnVsbCwgbnVsbCwgbGFiZWxTdHlsZSksIG5ldyBKR1QuUm93KG51bGwsIG51bGwsIG51bGwsIG51bGwsIG51bGwsIG5ldyBKR1QuTGFiZWwoXCJMYWJlbCA6IFwiLCBudWxsLCBudWxsLCBsYWJlbFN0eWxlVmVydGljYWxDZW50ZXIpLCBuZXcgSkdULkJ1dHRvbig1LCAxNTAsIG51bGwsIG51bGwsIGJ1dHRvblN0eWxlUmVkLCBuZXcgSkdULkxhYmVsKFwiQnV0dG9uXCIsIG51bGwsIG51bGwsIGxhYmVsU3R5bGUpKSkpO1xubGFiZWwxLnRvb2x0aXAgPSB0b29sdGlwMTtcbmNvbnN0IHRvb2x0aXAyID0gbmV3IEpHVC5Ub29sdGlwKG51bGwsIG5ldyBKR1QuTGFiZWwoXCJBIHRvb2x0aXAgLi4uLiAuLiAuLiAuLi4uLi4gQXV0b3dyYXBcXG5OZXcgbGluZVwiLCBudWxsLCBudWxsLCBsYWJlbFN0eWxlKSk7XG5idXR0b25UZXh0Mi50b29sdGlwID0gdG9vbHRpcDI7XG5jb25zdCBmcHNNZXRlciA9IG5ldyBKR1QuRlBTTWV0ZXIoZmFsc2UsIG51bGwsIG51bGwsIG5ldyBKR1QuU3R5bGUoeyBcImFsaWduZW1lbnRcIjogXCJyaWdodFwiLCBcInZlcnRpY2FsQWxpZ25lbWVudFwiOiBcImJvdHRvbVwifSkpO1xuZnBzTWV0ZXIubW92YWJsZSA9IHRydWU7XG5jb25zdCBwcm9ncmVzcyA9IG5ldyBKR1QuUHJvZ3Jlc3NCYXIoMzAwLCA1LCAyMDAsIDI1LCBudWxsLCBudWxsLCBKR1QuRWFzaW5nRnVuY3Rpb25zLmVhc2VJbk91dEN1YmljKTtcbnByb2dyZXNzLnBlcmNlbnQgPSAxO1xucHJvZ3Jlc3MubW92YWJsZSA9IHRydWU7XG5jb25zdCB0b29sdGlwMyA9IG5ldyBKR1QuVG9vbHRpcChudWxsLCBuZXcgSkdULkxhYmVsKFwiQ3VycmVudDogXCIgKyAoTWF0aC5yb3VuZChwcm9ncmVzcy5wZXJjZW50ICogMTAwKSAvIDEwMCkgKiAxMDAgKyBcIiVcIiwgbnVsbCwgbnVsbCwgbGFiZWxTdHlsZSkpO1xucHJvZ3Jlc3MudG9vbHRpcCA9IHRvb2x0aXAzO1xuY29uc3QgYnV0dG9uQXJyb3cgPSBuZXcgSkdULkJ1dHRvbig1LCAxNTAsIG51bGwsIG51bGwsIGJ1dHRvblN0eWxlLCBuZXcgSkdULkFycm93KG51bGwsIG51bGwsIDEwMCwgMjAwLCBuZXcgSkdULlN0eWxlKHsgXCJjb2xvclwiOiBcIndoaXRlXCIgfSkpKTtcbmNvbnN0IGNvbFNjcm9sbGFibGUgPSBuZXcgSkdULkNvbCgyNTUsIDI1MCwgMjUwLCA0MiwgbmV3IEpHVC5TdHlsZSh7IFwiYmFja2dyb3VuZENvbG9yXCI6IFwiI2ZmZlwifSksIG5ldyBKR1QuUm93KG51bGwsIG51bGwsIG51bGwsIG51bGwsIG51bGwsIG5ldyBKR1QuTGFiZWwoXCJUZXN0MVwiKSwgbmV3IEpHVC5MYWJlbChcIlRlc3QyXCIpLCBuZXcgSkdULkxhYmVsKFwiVGVzdDNcIiksIG5ldyBKR1QuTGFiZWwoXCJUZXN0NFwiKSksIG5ldyBKR1QuUm93KG51bGwsIG51bGwsIG51bGwsIG51bGwsIG51bGwsIG5ldyBKR1QuTGFiZWwoXCJUZXN0NVwiKSwgbmV3IEpHVC5MYWJlbChcIlRlc3Q2XCIpLCBuZXcgSkdULkxhYmVsKFwiVGVzdDdcIiksIG5ldyBKR1QuTGFiZWwoXCJUZXN0OFwiKSksIG5ldyBKR1QuUm93KG51bGwsIG51bGwsIG51bGwsIG51bGwsIG51bGwsIG5ldyBKR1QuTGFiZWwoXCJUZXN0OVwiKSwgbmV3IEpHVC5MYWJlbChcIlRlc3QxMFwiKSwgbmV3IEpHVC5MYWJlbChcIlRlc3QxMVwiKSwgbmV3IEpHVC5MYWJlbChcIlRlc3QxMlwiKSwgbmV3IEpHVC5MYWJlbChcIlRlc3RcIikpKTtcbmNvbFNjcm9sbGFibGUuc3R5bGUuc2V0KFwicGFkZGluZ1wiLCAxMCk7XG5jb2xTY3JvbGxhYmxlLnN0eWxlLnNldChcInNwYWNlQmV0d2VlbkNvbXBvbmVudHNcIiwgMCk7XG5jb25zdCBvcHRpb25MYXN0ID0gbmV3IEpHVC5TZWxlY3RPcHRpb24obmV3IEpHVC5MYWJlbChcIlJlbW92ZWQgaW4gNXNcIikpO1xuY29uc3Qgb3B0aW9ucyA9IG5ldyBKR1QuU2VsZWN0T3B0aW9uc0NvbnRhaW5lcig3NSwgbnVsbCwgbmV3IEpHVC5TZWxlY3RPcHRpb24obmV3IEpHVC5MYWJlbChcIkZpcnN0IGNob2ljZVwiKSksIG5ldyBKR1QuU2VsZWN0T3B0aW9uKG5ldyBKR1QuTGFiZWwoXCJTZWNvbmQgY2hvaWNlXCIpKSwgbmV3IEpHVC5TZWxlY3RPcHRpb24obmV3IEpHVC5MYWJlbChcIlRoaXJkIGNob2ljZVwiKSksIG9wdGlvbkxhc3QpO1xuY29uc3Qgc2VsZWN0ID0gbmV3IEpHVC5TZWxlY3QoMjU1LCAzMTUsIG51bGwsIG51bGwsIG5ldyBKR1QuU3R5bGUoeyBcInZlcnRpY2FsQWxpZ25lbWVudFwiOiBcImJvdHRvbVwiIH0pLCBvcHRpb25zKTtcbnNlbGVjdC5tb3ZhYmxlID0gdHJ1ZTtcblxuLy8gQ3VzdG9tIGNvbXBvbmVudFxuY2xhc3MgQm94IGV4dGVuZHMgSkdULkNvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKHN0eWxlKSB7XG4gICAgc3VwZXIobnVsbCwgbnVsbCwgbnVsbCwgbnVsbCwgc3R5bGUpO1xuICB9XG5cbiAgZHJhdyhjb250ZXh0KSB7XG4gICAgc3VwZXIuZHJhdyhjb250ZXh0KTtcbiAgICBcbiAgICBjb25zdCBjYW52YXMgPSBjb250ZXh0LmNhbnZhcztcbiAgICBjb25zdCBjdHggPSBjYW52YXMuZ2V0Q29udGV4dChcIjJkXCIpO1xuICAgIGN0eC5zYXZlKCk7XG5cbiAgICBjdHguZmlsbFN0eWxlID0gdGhpcy5zdHlsZS5iYWNrZ3JvdW5kQ29sb3I7XG4gICAgY3R4LmZpbGxSZWN0KHRoaXMueCwgdGhpcy55LCB0aGlzLnBhcmVudC53aWR0aCwgdGhpcy5wYXJlbnQuaGVpZ2h0KTtcblxuICAgIGN0eC5yZXN0b3JlKCk7XG4gIH1cbn1cblxuLy8gQ3JlYXRlIHNjZW5lIChjb250YWluaW5nIGNvbXBvbmVudHMpIGFuZCBjYW52YXNcbmNvbnN0IGJveCA9IG5ldyBCb3gobmV3IEpHVC5TdHlsZSh7IFwiYmFja2dyb3VuZENvbG9yXCI6IFwiIzg4ODg4OFwiIH0pKTtcbmNvbnN0IHNjZW5lID0gbmV3IEpHVC5TY2VuZShib3gsIGJ1dHRvblRleHQsIGJ1dHRvblRleHQyLCBidXR0b25JbWFnZSwgYnV0dG9uVGV4dEZ1bGxzY3JlZW4sIG5vdGlmaWNhdGlvbiwgbWVudSwgbm90aWZpY2F0aW9uMiwgcm93MSwgbGluazEsIHRvb2x0aXAxLCB0b29sdGlwMiwgZnBzTWV0ZXIsIHByb2dyZXNzLCB0b29sdGlwMywgYnV0dG9uQXJyb3csIGNvbFNjcm9sbGFibGUsIHNlbGVjdCwgb3B0aW9ucyk7XG5jb25zdCBjYW52YXMgPSBuZXcgSkdULkNhbnZhcyhzY2VuZSwgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjYW52YXNcIiksIG51bGwsIG51bGwsIHRydWUpO1xuY2FudmFzLmFwcGVuZFRvKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY2FudmFzQ29udGFpbmVyXCIpKTtcblxuLy8gRXZlbnRzXG5idXR0b25UZXh0LmFkZENsaWNrQWN0aW9uKCgpID0+IHtcbiAgbm90aWZpY2F0aW9uLm9wZW4oKTtcbn0pO1xuXG5idXR0b25UZXh0RnVsbHNjcmVlbi5hZGRDbGlja0FjdGlvbigoKSA9PiB7XG4gIGNhbnZhcy50b2dnbGVGdWxsc2NyZWVuKCk7XG59KTtcblxuYnV0dG9uSW1hZ2UuYWRkQ2xpY2tBY3Rpb24oKCkgPT4ge1xuICBtZW51LmVuYWJsZSgpO1xufSk7XG5cbmJ1dHRvbk1lbnU0LmFkZENsaWNrQWN0aW9uKCgpID0+IHtcbiAgbWVudS5kaXNhYmxlKCk7XG59KTtcblxuYnV0dG9uTWVudTUuYWRkQ2xpY2tBY3Rpb24oKCkgPT4ge1xuICBub3RpZmljYXRpb24yLm9wZW4oKTtcbn0pO1xuXG5idXR0b25NZW51Ni5hZGRDbGlja0FjdGlvbigoKSA9PiB7XG4gIEpHVC5Db25zdGFudHMuU2V0dGluZy5FTkFCTEVfUElYRUxfUkFUSU9fUkVTSVpJTkcgPSAhSkdULkNvbnN0YW50cy5TZXR0aW5nLkVOQUJMRV9QSVhFTF9SQVRJT19SRVNJWklORztcbn0pO1xuXG5saW5rMS5hZGRDbGlja0FjdGlvbigoKSA9PiB7XG4gIG5vdGlmaWNhdGlvbi5vcGVuKCk7XG59KTtcblxuLy8gTG9hZCBwYXVzZSBpbWFnZSBhbmQgc3RhcnQgdGhlIGNhbnZhcyByZW5kZXJpbmdcbmltYWdlTG9hZGVyLmxvYWQoW1wicGF1c2UucG5nXCJdLCAoKSA9PiB7XG4gIHBhdXNlSW1hZ2UubG9hZEltYWdlKGltYWdlTG9hZGVyKTtcbiAgY2FudmFzLnN0YXJ0RHJhdygpO1xuXG4gIC8vIFJhbmRvbWx5IGNoYW5nZSB0aGUgcHJvZ3Jlc3MgdmFsdWVcbiAgc2V0SW50ZXJ2YWwoKCkgPT4ge1xuICAgIGlmKHByb2dyZXNzLnBlcmNlbnQgPCAxKSB7XG4gICAgICBwcm9ncmVzcy5wZXJjZW50ID0gTWF0aC5yYW5kb20oKTtcbiAgICB9IGVsc2UgaWYocHJvZ3Jlc3MucGVyY2VudCA+PSAxKSB7XG4gICAgICBwcm9ncmVzcy5wZXJjZW50ID0gTWF0aC5yYW5kb20oKTtcbiAgICB9XG5cbiAgICB0b29sdGlwMy5jb21wb25lbnRzWzBdLnRleHQgPSBcIkN1cnJlbnQ6IFwiICsgTWF0aC5yb3VuZCgoTWF0aC5yb3VuZChwcm9ncmVzcy5wZXJjZW50ICogMTAwKSAvIDEwMCkgKiAxMDApICsgXCIlXCI7XG4gIH0sIDMwMDApO1xuXG4gIC8vIFJlbW92ZSB0aGUgbGFzdCBvcHRpb24gZWxlbWVudFxuICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICBvcHRpb25zLnJlbW92ZShvcHRpb25MYXN0KTtcbiAgfSwgNTAwMCk7XG59KTsiLCJmdW5jdGlvbiBfYXNzZXJ0VGhpc0luaXRpYWxpemVkKHNlbGYpIHtcbiAgaWYgKHNlbGYgPT09IHZvaWQgMCkge1xuICAgIHRocm93IG5ldyBSZWZlcmVuY2VFcnJvcihcInRoaXMgaGFzbid0IGJlZW4gaW5pdGlhbGlzZWQgLSBzdXBlcigpIGhhc24ndCBiZWVuIGNhbGxlZFwiKTtcbiAgfVxuXG4gIHJldHVybiBzZWxmO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQ7IiwiZnVuY3Rpb24gX2NsYXNzQ2FsbENoZWNrKGluc3RhbmNlLCBDb25zdHJ1Y3Rvcikge1xuICBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkge1xuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb25cIik7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfY2xhc3NDYWxsQ2hlY2s7IiwiZnVuY3Rpb24gX2RlZmluZVByb3BlcnRpZXModGFyZ2V0LCBwcm9wcykge1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHByb3BzLmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGRlc2NyaXB0b3IgPSBwcm9wc1tpXTtcbiAgICBkZXNjcmlwdG9yLmVudW1lcmFibGUgPSBkZXNjcmlwdG9yLmVudW1lcmFibGUgfHwgZmFsc2U7XG4gICAgZGVzY3JpcHRvci5jb25maWd1cmFibGUgPSB0cnVlO1xuICAgIGlmIChcInZhbHVlXCIgaW4gZGVzY3JpcHRvcikgZGVzY3JpcHRvci53cml0YWJsZSA9IHRydWU7XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwgZGVzY3JpcHRvci5rZXksIGRlc2NyaXB0b3IpO1xuICB9XG59XG5cbmZ1bmN0aW9uIF9jcmVhdGVDbGFzcyhDb25zdHJ1Y3RvciwgcHJvdG9Qcm9wcywgc3RhdGljUHJvcHMpIHtcbiAgaWYgKHByb3RvUHJvcHMpIF9kZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLnByb3RvdHlwZSwgcHJvdG9Qcm9wcyk7XG4gIGlmIChzdGF0aWNQcm9wcykgX2RlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IsIHN0YXRpY1Byb3BzKTtcbiAgcmV0dXJuIENvbnN0cnVjdG9yO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9jcmVhdGVDbGFzczsiLCJ2YXIgc3VwZXJQcm9wQmFzZSA9IHJlcXVpcmUoXCIuL3N1cGVyUHJvcEJhc2VcIik7XG5cbmZ1bmN0aW9uIF9nZXQodGFyZ2V0LCBwcm9wZXJ0eSwgcmVjZWl2ZXIpIHtcbiAgaWYgKHR5cGVvZiBSZWZsZWN0ICE9PSBcInVuZGVmaW5lZFwiICYmIFJlZmxlY3QuZ2V0KSB7XG4gICAgbW9kdWxlLmV4cG9ydHMgPSBfZ2V0ID0gUmVmbGVjdC5nZXQ7XG4gIH0gZWxzZSB7XG4gICAgbW9kdWxlLmV4cG9ydHMgPSBfZ2V0ID0gZnVuY3Rpb24gX2dldCh0YXJnZXQsIHByb3BlcnR5LCByZWNlaXZlcikge1xuICAgICAgdmFyIGJhc2UgPSBzdXBlclByb3BCYXNlKHRhcmdldCwgcHJvcGVydHkpO1xuICAgICAgaWYgKCFiYXNlKSByZXR1cm47XG4gICAgICB2YXIgZGVzYyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IoYmFzZSwgcHJvcGVydHkpO1xuXG4gICAgICBpZiAoZGVzYy5nZXQpIHtcbiAgICAgICAgcmV0dXJuIGRlc2MuZ2V0LmNhbGwocmVjZWl2ZXIpO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gZGVzYy52YWx1ZTtcbiAgICB9O1xuICB9XG5cbiAgcmV0dXJuIF9nZXQodGFyZ2V0LCBwcm9wZXJ0eSwgcmVjZWl2ZXIgfHwgdGFyZ2V0KTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfZ2V0OyIsImZ1bmN0aW9uIF9nZXRQcm90b3R5cGVPZihvKSB7XG4gIG1vZHVsZS5leHBvcnRzID0gX2dldFByb3RvdHlwZU9mID0gT2JqZWN0LnNldFByb3RvdHlwZU9mID8gT2JqZWN0LmdldFByb3RvdHlwZU9mIDogZnVuY3Rpb24gX2dldFByb3RvdHlwZU9mKG8pIHtcbiAgICByZXR1cm4gby5fX3Byb3RvX18gfHwgT2JqZWN0LmdldFByb3RvdHlwZU9mKG8pO1xuICB9O1xuICByZXR1cm4gX2dldFByb3RvdHlwZU9mKG8pO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9nZXRQcm90b3R5cGVPZjsiLCJ2YXIgc2V0UHJvdG90eXBlT2YgPSByZXF1aXJlKFwiLi9zZXRQcm90b3R5cGVPZlwiKTtcblxuZnVuY3Rpb24gX2luaGVyaXRzKHN1YkNsYXNzLCBzdXBlckNsYXNzKSB7XG4gIGlmICh0eXBlb2Ygc3VwZXJDbGFzcyAhPT0gXCJmdW5jdGlvblwiICYmIHN1cGVyQ2xhc3MgIT09IG51bGwpIHtcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiU3VwZXIgZXhwcmVzc2lvbiBtdXN0IGVpdGhlciBiZSBudWxsIG9yIGEgZnVuY3Rpb25cIik7XG4gIH1cblxuICBzdWJDbGFzcy5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKHN1cGVyQ2xhc3MgJiYgc3VwZXJDbGFzcy5wcm90b3R5cGUsIHtcbiAgICBjb25zdHJ1Y3Rvcjoge1xuICAgICAgdmFsdWU6IHN1YkNsYXNzLFxuICAgICAgd3JpdGFibGU6IHRydWUsXG4gICAgICBjb25maWd1cmFibGU6IHRydWVcbiAgICB9XG4gIH0pO1xuICBpZiAoc3VwZXJDbGFzcykgc2V0UHJvdG90eXBlT2Yoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9pbmhlcml0czsiLCJ2YXIgX3R5cGVvZiA9IHJlcXVpcmUoXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL3R5cGVvZlwiKTtcblxudmFyIGFzc2VydFRoaXNJbml0aWFsaXplZCA9IHJlcXVpcmUoXCIuL2Fzc2VydFRoaXNJbml0aWFsaXplZFwiKTtcblxuZnVuY3Rpb24gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4oc2VsZiwgY2FsbCkge1xuICBpZiAoY2FsbCAmJiAoX3R5cGVvZihjYWxsKSA9PT0gXCJvYmplY3RcIiB8fCB0eXBlb2YgY2FsbCA9PT0gXCJmdW5jdGlvblwiKSkge1xuICAgIHJldHVybiBjYWxsO1xuICB9XG5cbiAgcmV0dXJuIGFzc2VydFRoaXNJbml0aWFsaXplZChzZWxmKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybjsiLCJmdW5jdGlvbiBfc2V0UHJvdG90eXBlT2YobywgcCkge1xuICBtb2R1bGUuZXhwb3J0cyA9IF9zZXRQcm90b3R5cGVPZiA9IE9iamVjdC5zZXRQcm90b3R5cGVPZiB8fCBmdW5jdGlvbiBfc2V0UHJvdG90eXBlT2YobywgcCkge1xuICAgIG8uX19wcm90b19fID0gcDtcbiAgICByZXR1cm4gbztcbiAgfTtcblxuICByZXR1cm4gX3NldFByb3RvdHlwZU9mKG8sIHApO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9zZXRQcm90b3R5cGVPZjsiLCJ2YXIgZ2V0UHJvdG90eXBlT2YgPSByZXF1aXJlKFwiLi9nZXRQcm90b3R5cGVPZlwiKTtcblxuZnVuY3Rpb24gX3N1cGVyUHJvcEJhc2Uob2JqZWN0LCBwcm9wZXJ0eSkge1xuICB3aGlsZSAoIU9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KSkge1xuICAgIG9iamVjdCA9IGdldFByb3RvdHlwZU9mKG9iamVjdCk7XG4gICAgaWYgKG9iamVjdCA9PT0gbnVsbCkgYnJlYWs7XG4gIH1cblxuICByZXR1cm4gb2JqZWN0O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9zdXBlclByb3BCYXNlOyIsImZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7XG4gIFwiQGJhYmVsL2hlbHBlcnMgLSB0eXBlb2ZcIjtcblxuICBpZiAodHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIHR5cGVvZiBTeW1ib2wuaXRlcmF0b3IgPT09IFwic3ltYm9sXCIpIHtcbiAgICBtb2R1bGUuZXhwb3J0cyA9IF90eXBlb2YgPSBmdW5jdGlvbiBfdHlwZW9mKG9iaikge1xuICAgICAgcmV0dXJuIHR5cGVvZiBvYmo7XG4gICAgfTtcbiAgfSBlbHNlIHtcbiAgICBtb2R1bGUuZXhwb3J0cyA9IF90eXBlb2YgPSBmdW5jdGlvbiBfdHlwZW9mKG9iaikge1xuICAgICAgcmV0dXJuIG9iaiAmJiB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgb2JqLmNvbnN0cnVjdG9yID09PSBTeW1ib2wgJiYgb2JqICE9PSBTeW1ib2wucHJvdG90eXBlID8gXCJzeW1ib2xcIiA6IHR5cGVvZiBvYmo7XG4gICAgfTtcbiAgfVxuXG4gIHJldHVybiBfdHlwZW9mKG9iaik7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX3R5cGVvZjsiXSwic291cmNlUm9vdCI6IiJ9