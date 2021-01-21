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
var progress = new JGT.ProgressBar(300, 5, 200, 25, null, null, JGT.EasingFunctions.easeInOutCubic);
progress.percent = 1;
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
}), options); // Custom component

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vZXhhbXBsZXMvc3JjL21haW4uanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvYXNzZXJ0VGhpc0luaXRpYWxpemVkLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2NsYXNzQ2FsbENoZWNrLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2NyZWF0ZUNsYXNzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2dldC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9nZXRQcm90b3R5cGVPZi5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9pbmhlcml0cy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL3NldFByb3RvdHlwZU9mLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL3N1cGVyUHJvcEJhc2UuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvdHlwZW9mLmpzIl0sIm5hbWVzIjpbIkpHVCIsIkpTR2FtZVRvb2xzIiwiaW1hZ2VMb2FkZXIiLCJJbWFnZUxvYWRlciIsImJ1dHRvblN0eWxlIiwiU3R5bGUiLCJidXR0b25TdHlsZVJlZCIsImxhYmVsU3R5bGUiLCJsYWJlbFN0eWxlQ2VudGVyIiwibGFiZWxTdHlsZVZlcnRpY2FsQ2VudGVyIiwiYnV0dG9uVGV4dCIsIkJ1dHRvbiIsIkxhYmVsIiwiYnV0dG9uVGV4dDIiLCJzdHlsZSIsInNldCIsInBhdXNlSW1hZ2UiLCJJbWFnZUNvbnRhaW5lciIsImJ1dHRvbkltYWdlIiwiUm93IiwiYnV0dG9uVGV4dEZ1bGxzY3JlZW4iLCJub3RpZmljYXRpb24iLCJOb3RpZmljYXRpb25NZXNzYWdlIiwiYnV0dG9uTWVudTEiLCJidXR0b25NZW51NSIsImJ1dHRvbk1lbnUyIiwiYnV0dG9uTWVudTMiLCJidXR0b25NZW51NCIsImJ1dHRvbk1lbnU2IiwibWVudUxhYmVsIiwibWVudSIsIk1lbnUiLCJJbnB1dCIsIkNvbnN0YW50cyIsIkFsaWduZW1lbnQiLCJDRU5URVIiLCJub3RpZmljYXRpb24yIiwidGV4dEZpZWxkIiwibGFiZWwxIiwicm93MSIsImxpbmsxIiwiTGluayIsInRvb2x0aXAxIiwiVG9vbHRpcCIsInRvb2x0aXAiLCJ0b29sdGlwMiIsImZwc01ldGVyIiwiRlBTTWV0ZXIiLCJwcm9ncmVzcyIsIlByb2dyZXNzQmFyIiwiRWFzaW5nRnVuY3Rpb25zIiwiZWFzZUluT3V0Q3ViaWMiLCJwZXJjZW50IiwidG9vbHRpcDMiLCJNYXRoIiwicm91bmQiLCJidXR0b25BcnJvdyIsIkFycm93IiwiY29sU2Nyb2xsYWJsZSIsIkNvbCIsIm9wdGlvbkxhc3QiLCJTZWxlY3RPcHRpb24iLCJvcHRpb25zIiwiU2VsZWN0T3B0aW9uc0NvbnRhaW5lciIsInNlbGVjdCIsIlNlbGVjdCIsIkJveCIsImNvbnRleHQiLCJjYW52YXMiLCJjdHgiLCJnZXRDb250ZXh0Iiwic2F2ZSIsImZpbGxTdHlsZSIsImJhY2tncm91bmRDb2xvciIsImZpbGxSZWN0IiwieCIsInkiLCJwYXJlbnQiLCJ3aWR0aCIsImhlaWdodCIsInJlc3RvcmUiLCJDb21wb25lbnQiLCJib3giLCJzY2VuZSIsIlNjZW5lIiwiQ2FudmFzIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsImFwcGVuZFRvIiwiYWRkQ2xpY2tBY3Rpb24iLCJvcGVuIiwidG9nZ2xlRnVsbHNjcmVlbiIsImVuYWJsZSIsImRpc2FibGUiLCJTZXR0aW5nIiwiRU5BQkxFX1BJWEVMX1JBVElPX1JFU0laSU5HIiwibG9hZCIsImxvYWRJbWFnZSIsInN0YXJ0RHJhdyIsInNldEludGVydmFsIiwicmFuZG9tIiwiY29tcG9uZW50cyIsInRleHQiLCJzZXRUaW1lb3V0IiwicmVtb3ZlIl0sIm1hcHBpbmdzIjoiO1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSx5Q0FBeUMsaUNBQWlDO1FBQzFFLGdIQUFnSCxtQkFBbUIsRUFBRTtRQUNySTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDJCQUEyQiwwQkFBMEIsRUFBRTtRQUN2RCxpQ0FBaUMsZUFBZTtRQUNoRDtRQUNBO1FBQ0E7O1FBRUE7UUFDQSxzREFBc0QsK0RBQStEOztRQUVySDtRQUNBOzs7UUFHQTtRQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDbEZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBTUEsR0FBRyxHQUFHQyxXQUFaO0FBRUEsSUFBTUMsV0FBVyxHQUFHLElBQUlGLEdBQUcsQ0FBQ0csV0FBUixF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QSxpQzs7Ozs7Ozs7Ozs7QUNOQTtBQUNBLGlCQUFpQixrQkFBa0I7QUFDbkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSw4Qjs7Ozs7Ozs7Ozs7QUNoQkEsb0JBQW9CLG1CQUFPLENBQUMsK0VBQWlCOztBQUU3QztBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBLHNCOzs7Ozs7Ozs7OztBQ3RCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsaUM7Ozs7Ozs7Ozs7O0FDUEEscUJBQXFCLG1CQUFPLENBQUMsaUZBQWtCOztBQUUvQztBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTs7QUFFQSwyQjs7Ozs7Ozs7Ozs7QUNqQkEsY0FBYyxtQkFBTyxDQUFDLHNGQUErQjs7QUFFckQsNEJBQTRCLG1CQUFPLENBQUMsK0ZBQXlCOztBQUU3RDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBLDRDOzs7Ozs7Ozs7OztBQ1pBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQSxpQzs7Ozs7Ozs7Ozs7QUNUQSxxQkFBcUIsbUJBQU8sQ0FBQyxpRkFBa0I7O0FBRS9DO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQSxnQzs7Ozs7Ozs7Ozs7QUNYQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUEseUIiLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vZXhhbXBsZXMvc3JjL21haW4uanNcIik7XG4iLCIvKlxuICogQ29weXJpZ2h0IChDKSAyMDIwIEVsaWFzdGlrIChlbGlhc3Rpa3NvZnRzLmNvbSlcbiAqXG4gKiBUaGlzIGZpbGUgaXMgcGFydCBvZiBcIkpTR2FtZVRvb2xzXCIuXG4gKlxuICogXCJKU0dhbWVUb29sc1wiIGlzIGZyZWUgc29mdHdhcmU6IHlvdSBjYW4gcmVkaXN0cmlidXRlIGl0IGFuZC9vciBtb2RpZnlcbiAqIGl0IHVuZGVyIHRoZSB0ZXJtcyBvZiB0aGUgR05VIEdlbmVyYWwgUHVibGljIExpY2Vuc2UgYXMgcHVibGlzaGVkIGJ5XG4gKiB0aGUgRnJlZSBTb2Z0d2FyZSBGb3VuZGF0aW9uLCBlaXRoZXIgdmVyc2lvbiAzIG9mIHRoZSBMaWNlbnNlLCBvclxuICogKGF0IHlvdXIgb3B0aW9uKSBhbnkgbGF0ZXIgdmVyc2lvbi5cbiAqXG4gKiBcIkpTR2FtZVRvb2xzXCIgaXMgZGlzdHJpYnV0ZWQgaW4gdGhlIGhvcGUgdGhhdCBpdCB3aWxsIGJlIHVzZWZ1bCxcbiAqIGJ1dCBXSVRIT1VUIEFOWSBXQVJSQU5UWTsgd2l0aG91dCBldmVuIHRoZSBpbXBsaWVkIHdhcnJhbnR5IG9mXG4gKiBNRVJDSEFOVEFCSUxJVFkgb3IgRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UuICBTZWUgdGhlXG4gKiBHTlUgR2VuZXJhbCBQdWJsaWMgTGljZW5zZSBmb3IgbW9yZSBkZXRhaWxzLlxuICpcbiAqIFlvdSBzaG91bGQgaGF2ZSByZWNlaXZlZCBhIGNvcHkgb2YgdGhlIEdOVSBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlXG4gKiBhbG9uZyB3aXRoIFwiSlNHYW1lVG9vbHNcIi4gIElmIG5vdCwgc2VlIDxodHRwOi8vd3d3LmdudS5vcmcvbGljZW5zZXMvPi5cbiAqL1xuLy8gQ3JlYXRlIGNvbXBvbmVudHNcbmNvbnN0IEpHVCA9IEpTR2FtZVRvb2xzO1xuXG5jb25zdCBpbWFnZUxvYWRlciA9IG5ldyBKR1QuSW1hZ2VMb2FkZXIoKTtcblxuY29uc3QgYnV0dG9uU3R5bGUgPSBuZXcgSkdULlN0eWxlKHtcbiAgXCJiYWNrZ3JvdW5kQ29sb3JcIjogXCIjMmVjYzcxXCIsXG4gIFwiYmFja2dyb3VuZENvbG9ySG92ZXJcIjogXCIjMWFiYzljXCIsXG4gIFwiYmFja2dyb3VuZENvbG9yRG93blwiOiBcIiMxNmEwODVcIlxufSk7XG5cbmNvbnN0IGJ1dHRvblN0eWxlUmVkID0gbmV3IEpHVC5TdHlsZSh7XG4gIFwiYmFja2dyb3VuZENvbG9yXCI6IFwiI0NDMkYyRlwiLFxuICBcImJhY2tncm91bmRDb2xvckhvdmVyXCI6IFwiI0YyMzgzOFwiLFxuICBcImJhY2tncm91bmRDb2xvckRvd25cIjogXCIjQTYyNjI2XCJcbn0pO1xuXG5jb25zdCBsYWJlbFN0eWxlID0gbmV3IEpHVC5TdHlsZSh7XG4gIFwiZm9udENvbG9yXCI6IFwid2hpdGVcIlxufSk7XG5cbmNvbnN0IGxhYmVsU3R5bGVDZW50ZXIgPSBuZXcgSkdULlN0eWxlKHtcbiAgXCJmb250Q29sb3JcIjogXCJ3aGl0ZVwiLFxuICBcImFsaWduZW1lbnRcIjogXCJjZW50ZXJcIlxufSk7XG5cbmNvbnN0IGxhYmVsU3R5bGVWZXJ0aWNhbENlbnRlciA9IG5ldyBKR1QuU3R5bGUoe1xuICBcImZvbnRDb2xvclwiOiBcIndoaXRlXCIsXG4gIFwidmVydGljYWxBbGlnbmVtZW50XCI6IFwiY2VudGVyXCJcbn0pO1xuXG5jb25zdCBidXR0b25UZXh0ID0gbmV3IEpHVC5CdXR0b24oNSwgNSwgbnVsbCwgbnVsbCwgYnV0dG9uU3R5bGUsIG5ldyBKR1QuTGFiZWwoXCJTaG93IGEgbm90aWZpY2F0aW9uXCIsIG51bGwsIG51bGwsIGxhYmVsU3R5bGUpKTtcbmNvbnN0IGJ1dHRvblRleHQyID0gbmV3IEpHVC5CdXR0b24oNSwgMTUwLCBudWxsLCBudWxsLCBidXR0b25TdHlsZSwgbmV3IEpHVC5MYWJlbChcIkxvbmcgdGV4dCBidXR0b24gLi4uLi4uLi4uLi4gVGhpcyBzaG91bGQgYmUgb24gbmV4dCBsaW5lXCIsIG51bGwsIG51bGwsIGxhYmVsU3R5bGUpKTtcbmJ1dHRvblRleHQyLnN0eWxlLnNldChcImFsaWduZW1lbnRcIiwgXCJyaWdodFwiKTtcbmNvbnN0IHBhdXNlSW1hZ2UgPSBuZXcgSkdULkltYWdlQ29udGFpbmVyKFwicGF1c2UucG5nXCIsIG51bGwsIG51bGwsIDY0LCA2NCwgbmV3IEpHVC5TdHlsZSh7IFwidmVydGljYWxBbGlnbmVtZW50XCI6IFwiY2VudGVyXCIsIFwiYWxpZ25lbWVudFwiOiBcImxlZnRcIiB9KSk7XG5jb25zdCBidXR0b25JbWFnZSA9IG5ldyBKR1QuQnV0dG9uKG51bGwsIDUwLCBudWxsLCBudWxsLCBuZXcgSkdULlN0eWxlKHsgXCJhbGlnbmVtZW50XCI6IFwibGVmdFwiIH0pLCBuZXcgSkdULlJvdyg1LCAyNTAsIG51bGwsIG51bGwsIG51bGwsIHBhdXNlSW1hZ2UsIG5ldyBKR1QuTGFiZWwoXCJQYXVzZVwiLCBudWxsLCBudWxsLCBsYWJlbFN0eWxlVmVydGljYWxDZW50ZXIpKSk7XG5jb25zdCBidXR0b25UZXh0RnVsbHNjcmVlbiA9IG5ldyBKR1QuQnV0dG9uKDUsIDc1LCBudWxsLCBudWxsLCBidXR0b25TdHlsZSwgbmV3IEpHVC5MYWJlbChcIlRvZ2dsZSBmdWxsc2NyZWVuXCIsIG51bGwsIG51bGwsIGxhYmVsU3R5bGUpKTtcbmJ1dHRvblRleHRGdWxsc2NyZWVuLnN0eWxlLnNldChcImFsaWduZW1lbnRcIiwgXCJjZW50ZXJcIik7XG5jb25zdCBub3RpZmljYXRpb24gPSBuZXcgSkdULk5vdGlmaWNhdGlvbk1lc3NhZ2UobnVsbCwgbnVsbCwgbnVsbCwgbmV3IEpHVC5MYWJlbChcIkEgbm90aWZpY2F0aW9uXCIsIG51bGwsIG51bGwsIGxhYmVsU3R5bGVDZW50ZXIpLCBuZXcgSkdULlJvdyhudWxsLCBudWxsLCBudWxsLCBudWxsLCBudWxsLCBuZXcgSkdULkxhYmVsKFwiTGFiZWwgOiBcIiwgbnVsbCwgbnVsbCwgbGFiZWxTdHlsZVZlcnRpY2FsQ2VudGVyKSwgbmV3IEpHVC5CdXR0b24obnVsbCwgbnVsbCwgbnVsbCwgbnVsbCwgbnVsbCwgbmV3IEpHVC5MYWJlbChcIkJ1dHRvblwiLCBudWxsLCBudWxsLCBsYWJlbFN0eWxlKSkpKTtcblxuY29uc3QgYnV0dG9uTWVudTEgPSBuZXcgSkdULkJ1dHRvbig1LCA1LCBudWxsLCBudWxsLCBidXR0b25TdHlsZSwgbmV3IEpHVC5MYWJlbChcIkEgYnV0dG9uLCBhbGlnbmVkIHRvIHRoZSBsZWZ0XCIsIG51bGwsIG51bGwsIGxhYmVsU3R5bGUpKTtcbmJ1dHRvbk1lbnUxLnN0eWxlLnNldChcImFsaWduZW1lbnRcIiwgXCJsZWZ0XCIpO1xuY29uc3QgYnV0dG9uTWVudTUgPSBuZXcgSkdULkJ1dHRvbig1LCA1LCBudWxsLCBudWxsLCBidXR0b25TdHlsZSwgbmV3IEpHVC5MYWJlbChcIkRpc3BsYXkgYSBub3RpZmljYXRpb25cIiwgbnVsbCwgbnVsbCwgbGFiZWxTdHlsZSkpO1xuY29uc3QgYnV0dG9uTWVudTIgPSBuZXcgSkdULkJ1dHRvbig1LCA1LCBudWxsLCBudWxsLCBidXR0b25TdHlsZSwgbmV3IEpHVC5MYWJlbChcIkFub3RoZXIgYnV0dG9uLCBhbGlnbmVkIHRvIHRoZSByaWdodFwiLCBudWxsLCBudWxsLCBsYWJlbFN0eWxlKSk7XG5idXR0b25NZW51Mi5zdHlsZS5zZXQoXCJhbGlnbmVtZW50XCIsIFwicmlnaHRcIik7XG5jb25zdCBidXR0b25NZW51MyA9IG5ldyBKR1QuQnV0dG9uKDUsIDUsIG51bGwsIG51bGwsIGJ1dHRvblN0eWxlLCBuZXcgSkdULkxhYmVsKFwiQSBsb25nIGJ1dHRvbm5ubm5ubm5ubm5ubm5ubm5ubm5ubm5ubm5cIiwgbnVsbCwgbnVsbCwgbGFiZWxTdHlsZSkpO1xuYnV0dG9uTWVudTMuc3R5bGUuc2V0KFwiYWxpZ25lbWVudFwiLCBcInJpZ2h0XCIpO1xuY29uc3QgYnV0dG9uTWVudTQgPSBuZXcgSkdULkJ1dHRvbig1LCA1LCBudWxsLCBudWxsLCBidXR0b25TdHlsZVJlZCwgbmV3IEpHVC5MYWJlbChcIkNsb3NlIChjZW50ZXJlZClcIiwgbnVsbCwgbnVsbCwgbGFiZWxTdHlsZSkpO1xuYnV0dG9uTWVudTQuc3R5bGUuc2V0KFwiYWxpZ25lbWVudFwiLCBcImNlbnRlclwiKTtcbmNvbnN0IGJ1dHRvbk1lbnU2ID0gbmV3IEpHVC5CdXR0b24oNSwgNSwgbnVsbCwgbnVsbCwgYnV0dG9uU3R5bGUsIG5ldyBKR1QuTGFiZWwoXCJEaXNhYmxlL2VuYWJsZSBoaWdoIERQSVwiLCBudWxsLCBudWxsLCBsYWJlbFN0eWxlKSk7XG5idXR0b25NZW51Ni5zdHlsZS5zZXQoXCJhbGlnbmVtZW50XCIsIFwiY2VudGVyXCIpO1xuY29uc3QgbWVudUxhYmVsID0gbmV3IEpHVC5MYWJlbChcIlBhdXNlIG1lbnVcXG5Zb3UgY2FuIHVzZSB0aGUgYXJyb3cga2V5cywgcHJlc3MgZW50ZXIgdG8gc2VsZWN0XCIsIG51bGwsIG51bGwsIGxhYmVsU3R5bGUsIFwiY2VudGVyXCIpO1xubWVudUxhYmVsLnN0eWxlLnNldChcImFsaWduZW1lbnRcIiwgXCJjZW50ZXJcIik7XG5jb25zdCBtZW51ID0gbmV3IEpHVC5NZW51KG51bGwsIG1lbnVMYWJlbCwgYnV0dG9uTWVudTEsIGJ1dHRvbk1lbnU1LCBidXR0b25NZW51MiwgYnV0dG9uTWVudTMsIGJ1dHRvbk1lbnU2LCBidXR0b25NZW51NCwgbmV3IEpHVC5JbnB1dChudWxsLCBudWxsLCAxNTAsIG51bGwsIG5ldyBKR1QuU3R5bGUoe1wiYWxpZ25lbWVudFwiOiBKR1QuQ29uc3RhbnRzLkFsaWduZW1lbnQuQ0VOVEVSIH0pKSwgbmV3IEpHVC5JbnB1dChudWxsLCBudWxsLCAxNTAsIG51bGwsIG5ldyBKR1QuU3R5bGUoe1wiYWxpZ25lbWVudFwiOiBKR1QuQ29uc3RhbnRzLkFsaWduZW1lbnQuQ0VOVEVSIH0pKSk7XG5cbmNvbnN0IG5vdGlmaWNhdGlvbjIgPSBuZXcgSkdULk5vdGlmaWNhdGlvbk1lc3NhZ2UobmV3IEpHVC5TdHlsZSh7IFwiYmFja2dyb3VuZENvbG9yXCI6IFwicmdiYSg0NiwgMjA0LCAyMjUsIDAuODUpXCIsIFwiZm9yZWdyb3VuZFwiOiB0cnVlIH0pLCBudWxsLCBudWxsLCBuZXcgSkdULkxhYmVsKFwiSGkhXCIsIG51bGwsIG51bGwsIGxhYmVsU3R5bGVDZW50ZXIpKTtcbmNvbnN0IHRleHRGaWVsZCA9IG5ldyBKR1QuSW5wdXQoNSwgMjUwLCAxNTApO1xuY29uc3QgbGFiZWwxID0gbmV3IEpHVC5MYWJlbChcIkEgbGFiZWxcIiwgNSwgMzI1KTtcbmNvbnN0IHJvdzEgPSBuZXcgSkdULlJvdyg1LCAyNTAsIG51bGwsIG51bGwsIG51bGwsIGxhYmVsMSwgdGV4dEZpZWxkKTtcbmNvbnN0IGxpbmsxID0gbmV3IEpHVC5MaW5rKFwiQSBsb25nIGxpbmtcIiwgNSwgMzAwKTtcbmNvbnN0IHRvb2x0aXAxID0gbmV3IEpHVC5Ub29sdGlwKG51bGwsIG5ldyBKR1QuTGFiZWwoXCJBIHRvb2x0aXBcXG5TZWNvbmQgbGluZVwiLCBudWxsLCBudWxsLCBsYWJlbFN0eWxlKSwgbmV3IEpHVC5Sb3cobnVsbCwgbnVsbCwgbnVsbCwgbnVsbCwgbnVsbCwgbmV3IEpHVC5MYWJlbChcIkxhYmVsIDogXCIsIG51bGwsIG51bGwsIGxhYmVsU3R5bGVWZXJ0aWNhbENlbnRlciksIG5ldyBKR1QuQnV0dG9uKDUsIDE1MCwgbnVsbCwgbnVsbCwgYnV0dG9uU3R5bGVSZWQsIG5ldyBKR1QuTGFiZWwoXCJCdXR0b25cIiwgbnVsbCwgbnVsbCwgbGFiZWxTdHlsZSkpKSk7XG5sYWJlbDEudG9vbHRpcCA9IHRvb2x0aXAxO1xuY29uc3QgdG9vbHRpcDIgPSBuZXcgSkdULlRvb2x0aXAobnVsbCwgbmV3IEpHVC5MYWJlbChcIkEgdG9vbHRpcCAuLi4uIC4uIC4uIC4uLi4uLiBBdXRvd3JhcFxcbk5ldyBsaW5lXCIsIG51bGwsIG51bGwsIGxhYmVsU3R5bGUpKTtcbmJ1dHRvblRleHQyLnRvb2x0aXAgPSB0b29sdGlwMjtcbmNvbnN0IGZwc01ldGVyID0gbmV3IEpHVC5GUFNNZXRlcihmYWxzZSwgbnVsbCwgbnVsbCwgbmV3IEpHVC5TdHlsZSh7IFwiYWxpZ25lbWVudFwiOiBcInJpZ2h0XCIsIFwidmVydGljYWxBbGlnbmVtZW50XCI6IFwiYm90dG9tXCJ9KSk7XG5jb25zdCBwcm9ncmVzcyA9IG5ldyBKR1QuUHJvZ3Jlc3NCYXIoMzAwLCA1LCAyMDAsIDI1LCBudWxsLCBudWxsLCBKR1QuRWFzaW5nRnVuY3Rpb25zLmVhc2VJbk91dEN1YmljKTtcbnByb2dyZXNzLnBlcmNlbnQgPSAxO1xuY29uc3QgdG9vbHRpcDMgPSBuZXcgSkdULlRvb2x0aXAobnVsbCwgbmV3IEpHVC5MYWJlbChcIkN1cnJlbnQ6IFwiICsgKE1hdGgucm91bmQocHJvZ3Jlc3MucGVyY2VudCAqIDEwMCkgLyAxMDApICogMTAwICsgXCIlXCIsIG51bGwsIG51bGwsIGxhYmVsU3R5bGUpKTtcbnByb2dyZXNzLnRvb2x0aXAgPSB0b29sdGlwMztcbmNvbnN0IGJ1dHRvbkFycm93ID0gbmV3IEpHVC5CdXR0b24oNSwgMTUwLCBudWxsLCBudWxsLCBidXR0b25TdHlsZSwgbmV3IEpHVC5BcnJvdyhudWxsLCBudWxsLCAxMDAsIDIwMCwgbmV3IEpHVC5TdHlsZSh7IFwiY29sb3JcIjogXCJ3aGl0ZVwiIH0pKSk7XG5jb25zdCBjb2xTY3JvbGxhYmxlID0gbmV3IEpHVC5Db2woMjU1LCAyNTAsIDI1MCwgNDIsIG5ldyBKR1QuU3R5bGUoeyBcImJhY2tncm91bmRDb2xvclwiOiBcIiNmZmZcIn0pLCBuZXcgSkdULlJvdyhudWxsLCBudWxsLCBudWxsLCBudWxsLCBudWxsLCBuZXcgSkdULkxhYmVsKFwiVGVzdDFcIiksIG5ldyBKR1QuTGFiZWwoXCJUZXN0MlwiKSwgbmV3IEpHVC5MYWJlbChcIlRlc3QzXCIpLCBuZXcgSkdULkxhYmVsKFwiVGVzdDRcIikpLCBuZXcgSkdULlJvdyhudWxsLCBudWxsLCBudWxsLCBudWxsLCBudWxsLCBuZXcgSkdULkxhYmVsKFwiVGVzdDVcIiksIG5ldyBKR1QuTGFiZWwoXCJUZXN0NlwiKSwgbmV3IEpHVC5MYWJlbChcIlRlc3Q3XCIpLCBuZXcgSkdULkxhYmVsKFwiVGVzdDhcIikpLCBuZXcgSkdULlJvdyhudWxsLCBudWxsLCBudWxsLCBudWxsLCBudWxsLCBuZXcgSkdULkxhYmVsKFwiVGVzdDlcIiksIG5ldyBKR1QuTGFiZWwoXCJUZXN0MTBcIiksIG5ldyBKR1QuTGFiZWwoXCJUZXN0MTFcIiksIG5ldyBKR1QuTGFiZWwoXCJUZXN0MTJcIiksIG5ldyBKR1QuTGFiZWwoXCJUZXN0XCIpKSk7XG5jb2xTY3JvbGxhYmxlLnN0eWxlLnNldChcInBhZGRpbmdcIiwgMTApO1xuY29sU2Nyb2xsYWJsZS5zdHlsZS5zZXQoXCJzcGFjZUJldHdlZW5Db21wb25lbnRzXCIsIDApO1xuY29uc3Qgb3B0aW9uTGFzdCA9IG5ldyBKR1QuU2VsZWN0T3B0aW9uKG5ldyBKR1QuTGFiZWwoXCJSZW1vdmVkIGluIDVzXCIpKTtcbmNvbnN0IG9wdGlvbnMgPSBuZXcgSkdULlNlbGVjdE9wdGlvbnNDb250YWluZXIoNzUsIG51bGwsIG5ldyBKR1QuU2VsZWN0T3B0aW9uKG5ldyBKR1QuTGFiZWwoXCJGaXJzdCBjaG9pY2VcIikpLCBuZXcgSkdULlNlbGVjdE9wdGlvbihuZXcgSkdULkxhYmVsKFwiU2Vjb25kIGNob2ljZVwiKSksIG5ldyBKR1QuU2VsZWN0T3B0aW9uKG5ldyBKR1QuTGFiZWwoXCJUaGlyZCBjaG9pY2VcIikpLCBvcHRpb25MYXN0KTtcbmNvbnN0IHNlbGVjdCA9IG5ldyBKR1QuU2VsZWN0KDI1NSwgMzE1LCBudWxsLCBudWxsLCBuZXcgSkdULlN0eWxlKHsgXCJ2ZXJ0aWNhbEFsaWduZW1lbnRcIjogXCJib3R0b21cIiB9KSwgb3B0aW9ucyk7XG5cbi8vIEN1c3RvbSBjb21wb25lbnRcbmNsYXNzIEJveCBleHRlbmRzIEpHVC5Db21wb25lbnQge1xuICBjb25zdHJ1Y3RvcihzdHlsZSkge1xuICAgIHN1cGVyKG51bGwsIG51bGwsIG51bGwsIG51bGwsIHN0eWxlKTtcbiAgfVxuXG4gIGRyYXcoY29udGV4dCkge1xuICAgIHN1cGVyLmRyYXcoY29udGV4dCk7XG4gICAgXG4gICAgY29uc3QgY2FudmFzID0gY29udGV4dC5jYW52YXM7XG4gICAgY29uc3QgY3R4ID0gY2FudmFzLmdldENvbnRleHQoXCIyZFwiKTtcbiAgICBjdHguc2F2ZSgpO1xuXG4gICAgY3R4LmZpbGxTdHlsZSA9IHRoaXMuc3R5bGUuYmFja2dyb3VuZENvbG9yO1xuICAgIGN0eC5maWxsUmVjdCh0aGlzLngsIHRoaXMueSwgdGhpcy5wYXJlbnQud2lkdGgsIHRoaXMucGFyZW50LmhlaWdodCk7XG5cbiAgICBjdHgucmVzdG9yZSgpO1xuICB9XG59XG5cbi8vIENyZWF0ZSBzY2VuZSAoY29udGFpbmluZyBjb21wb25lbnRzKSBhbmQgY2FudmFzXG5jb25zdCBib3ggPSBuZXcgQm94KG5ldyBKR1QuU3R5bGUoeyBcImJhY2tncm91bmRDb2xvclwiOiBcIiM4ODg4ODhcIiB9KSk7XG5jb25zdCBzY2VuZSA9IG5ldyBKR1QuU2NlbmUoYm94LCBidXR0b25UZXh0LCBidXR0b25UZXh0MiwgYnV0dG9uSW1hZ2UsIGJ1dHRvblRleHRGdWxsc2NyZWVuLCBub3RpZmljYXRpb24sIG1lbnUsIG5vdGlmaWNhdGlvbjIsIHJvdzEsIGxpbmsxLCB0b29sdGlwMSwgdG9vbHRpcDIsIGZwc01ldGVyLCBwcm9ncmVzcywgdG9vbHRpcDMsIGJ1dHRvbkFycm93LCBjb2xTY3JvbGxhYmxlLCBzZWxlY3QsIG9wdGlvbnMpO1xuY29uc3QgY2FudmFzID0gbmV3IEpHVC5DYW52YXMoc2NlbmUsIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY2FudmFzXCIpLCBudWxsLCBudWxsLCB0cnVlKTtcbmNhbnZhcy5hcHBlbmRUbyhkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNhbnZhc0NvbnRhaW5lclwiKSk7XG5cbi8vIEV2ZW50c1xuYnV0dG9uVGV4dC5hZGRDbGlja0FjdGlvbigoKSA9PiB7XG4gIG5vdGlmaWNhdGlvbi5vcGVuKCk7XG59KTtcblxuYnV0dG9uVGV4dEZ1bGxzY3JlZW4uYWRkQ2xpY2tBY3Rpb24oKCkgPT4ge1xuICBjYW52YXMudG9nZ2xlRnVsbHNjcmVlbigpO1xufSk7XG5cbmJ1dHRvbkltYWdlLmFkZENsaWNrQWN0aW9uKCgpID0+IHtcbiAgbWVudS5lbmFibGUoKTtcbn0pO1xuXG5idXR0b25NZW51NC5hZGRDbGlja0FjdGlvbigoKSA9PiB7XG4gIG1lbnUuZGlzYWJsZSgpO1xufSk7XG5cbmJ1dHRvbk1lbnU1LmFkZENsaWNrQWN0aW9uKCgpID0+IHtcbiAgbm90aWZpY2F0aW9uMi5vcGVuKCk7XG59KTtcblxuYnV0dG9uTWVudTYuYWRkQ2xpY2tBY3Rpb24oKCkgPT4ge1xuICBKR1QuQ29uc3RhbnRzLlNldHRpbmcuRU5BQkxFX1BJWEVMX1JBVElPX1JFU0laSU5HID0gIUpHVC5Db25zdGFudHMuU2V0dGluZy5FTkFCTEVfUElYRUxfUkFUSU9fUkVTSVpJTkc7XG59KTtcblxubGluazEuYWRkQ2xpY2tBY3Rpb24oKCkgPT4ge1xuICBub3RpZmljYXRpb24ub3BlbigpO1xufSk7XG5cbi8vIExvYWQgcGF1c2UgaW1hZ2UgYW5kIHN0YXJ0IHRoZSBjYW52YXMgcmVuZGVyaW5nXG5pbWFnZUxvYWRlci5sb2FkKFtcInBhdXNlLnBuZ1wiXSwgKCkgPT4ge1xuICBwYXVzZUltYWdlLmxvYWRJbWFnZShpbWFnZUxvYWRlcik7XG4gIGNhbnZhcy5zdGFydERyYXcoKTtcblxuICAvLyBSYW5kb21seSBjaGFuZ2UgdGhlIHByb2dyZXNzIHZhbHVlXG4gIHNldEludGVydmFsKCgpID0+IHtcbiAgICBpZihwcm9ncmVzcy5wZXJjZW50IDwgMSkge1xuICAgICAgcHJvZ3Jlc3MucGVyY2VudCA9IE1hdGgucmFuZG9tKCk7XG4gICAgfSBlbHNlIGlmKHByb2dyZXNzLnBlcmNlbnQgPj0gMSkge1xuICAgICAgcHJvZ3Jlc3MucGVyY2VudCA9IE1hdGgucmFuZG9tKCk7XG4gICAgfVxuXG4gICAgdG9vbHRpcDMuY29tcG9uZW50c1swXS50ZXh0ID0gXCJDdXJyZW50OiBcIiArIE1hdGgucm91bmQoKE1hdGgucm91bmQocHJvZ3Jlc3MucGVyY2VudCAqIDEwMCkgLyAxMDApICogMTAwKSArIFwiJVwiO1xuICB9LCAzMDAwKTtcblxuICAvLyBSZW1vdmUgdGhlIGxhc3Qgb3B0aW9uIGVsZW1lbnRcbiAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgb3B0aW9ucy5yZW1vdmUob3B0aW9uTGFzdCk7XG4gIH0sIDUwMDApO1xufSk7IiwiZnVuY3Rpb24gX2Fzc2VydFRoaXNJbml0aWFsaXplZChzZWxmKSB7XG4gIGlmIChzZWxmID09PSB2b2lkIDApIHtcbiAgICB0aHJvdyBuZXcgUmVmZXJlbmNlRXJyb3IoXCJ0aGlzIGhhc24ndCBiZWVuIGluaXRpYWxpc2VkIC0gc3VwZXIoKSBoYXNuJ3QgYmVlbiBjYWxsZWRcIik7XG4gIH1cblxuICByZXR1cm4gc2VsZjtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfYXNzZXJ0VGhpc0luaXRpYWxpemVkOyIsImZ1bmN0aW9uIF9jbGFzc0NhbGxDaGVjayhpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHtcbiAgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHtcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXCIpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX2NsYXNzQ2FsbENoZWNrOyIsImZ1bmN0aW9uIF9kZWZpbmVQcm9wZXJ0aWVzKHRhcmdldCwgcHJvcHMpIHtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBwcm9wcy5sZW5ndGg7IGkrKykge1xuICAgIHZhciBkZXNjcmlwdG9yID0gcHJvcHNbaV07XG4gICAgZGVzY3JpcHRvci5lbnVtZXJhYmxlID0gZGVzY3JpcHRvci5lbnVtZXJhYmxlIHx8IGZhbHNlO1xuICAgIGRlc2NyaXB0b3IuY29uZmlndXJhYmxlID0gdHJ1ZTtcbiAgICBpZiAoXCJ2YWx1ZVwiIGluIGRlc2NyaXB0b3IpIGRlc2NyaXB0b3Iud3JpdGFibGUgPSB0cnVlO1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGRlc2NyaXB0b3Iua2V5LCBkZXNjcmlwdG9yKTtcbiAgfVxufVxuXG5mdW5jdGlvbiBfY3JlYXRlQ2xhc3MoQ29uc3RydWN0b3IsIHByb3RvUHJvcHMsIHN0YXRpY1Byb3BzKSB7XG4gIGlmIChwcm90b1Byb3BzKSBfZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvci5wcm90b3R5cGUsIHByb3RvUHJvcHMpO1xuICBpZiAoc3RhdGljUHJvcHMpIF9kZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLCBzdGF0aWNQcm9wcyk7XG4gIHJldHVybiBDb25zdHJ1Y3Rvcjtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfY3JlYXRlQ2xhc3M7IiwidmFyIHN1cGVyUHJvcEJhc2UgPSByZXF1aXJlKFwiLi9zdXBlclByb3BCYXNlXCIpO1xuXG5mdW5jdGlvbiBfZ2V0KHRhcmdldCwgcHJvcGVydHksIHJlY2VpdmVyKSB7XG4gIGlmICh0eXBlb2YgUmVmbGVjdCAhPT0gXCJ1bmRlZmluZWRcIiAmJiBSZWZsZWN0LmdldCkge1xuICAgIG1vZHVsZS5leHBvcnRzID0gX2dldCA9IFJlZmxlY3QuZ2V0O1xuICB9IGVsc2Uge1xuICAgIG1vZHVsZS5leHBvcnRzID0gX2dldCA9IGZ1bmN0aW9uIF9nZXQodGFyZ2V0LCBwcm9wZXJ0eSwgcmVjZWl2ZXIpIHtcbiAgICAgIHZhciBiYXNlID0gc3VwZXJQcm9wQmFzZSh0YXJnZXQsIHByb3BlcnR5KTtcbiAgICAgIGlmICghYmFzZSkgcmV0dXJuO1xuICAgICAgdmFyIGRlc2MgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKGJhc2UsIHByb3BlcnR5KTtcblxuICAgICAgaWYgKGRlc2MuZ2V0KSB7XG4gICAgICAgIHJldHVybiBkZXNjLmdldC5jYWxsKHJlY2VpdmVyKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGRlc2MudmFsdWU7XG4gICAgfTtcbiAgfVxuXG4gIHJldHVybiBfZ2V0KHRhcmdldCwgcHJvcGVydHksIHJlY2VpdmVyIHx8IHRhcmdldCk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX2dldDsiLCJmdW5jdGlvbiBfZ2V0UHJvdG90eXBlT2Yobykge1xuICBtb2R1bGUuZXhwb3J0cyA9IF9nZXRQcm90b3R5cGVPZiA9IE9iamVjdC5zZXRQcm90b3R5cGVPZiA/IE9iamVjdC5nZXRQcm90b3R5cGVPZiA6IGZ1bmN0aW9uIF9nZXRQcm90b3R5cGVPZihvKSB7XG4gICAgcmV0dXJuIG8uX19wcm90b19fIHx8IE9iamVjdC5nZXRQcm90b3R5cGVPZihvKTtcbiAgfTtcbiAgcmV0dXJuIF9nZXRQcm90b3R5cGVPZihvKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfZ2V0UHJvdG90eXBlT2Y7IiwidmFyIHNldFByb3RvdHlwZU9mID0gcmVxdWlyZShcIi4vc2V0UHJvdG90eXBlT2ZcIik7XG5cbmZ1bmN0aW9uIF9pbmhlcml0cyhzdWJDbGFzcywgc3VwZXJDbGFzcykge1xuICBpZiAodHlwZW9mIHN1cGVyQ2xhc3MgIT09IFwiZnVuY3Rpb25cIiAmJiBzdXBlckNsYXNzICE9PSBudWxsKSB7XG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlN1cGVyIGV4cHJlc3Npb24gbXVzdCBlaXRoZXIgYmUgbnVsbCBvciBhIGZ1bmN0aW9uXCIpO1xuICB9XG5cbiAgc3ViQ2xhc3MucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShzdXBlckNsYXNzICYmIHN1cGVyQ2xhc3MucHJvdG90eXBlLCB7XG4gICAgY29uc3RydWN0b3I6IHtcbiAgICAgIHZhbHVlOiBzdWJDbGFzcyxcbiAgICAgIHdyaXRhYmxlOiB0cnVlLFxuICAgICAgY29uZmlndXJhYmxlOiB0cnVlXG4gICAgfVxuICB9KTtcbiAgaWYgKHN1cGVyQ2xhc3MpIHNldFByb3RvdHlwZU9mKHN1YkNsYXNzLCBzdXBlckNsYXNzKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfaW5oZXJpdHM7IiwidmFyIF90eXBlb2YgPSByZXF1aXJlKFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy90eXBlb2ZcIik7XG5cbnZhciBhc3NlcnRUaGlzSW5pdGlhbGl6ZWQgPSByZXF1aXJlKFwiLi9hc3NlcnRUaGlzSW5pdGlhbGl6ZWRcIik7XG5cbmZ1bmN0aW9uIF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHNlbGYsIGNhbGwpIHtcbiAgaWYgKGNhbGwgJiYgKF90eXBlb2YoY2FsbCkgPT09IFwib2JqZWN0XCIgfHwgdHlwZW9mIGNhbGwgPT09IFwiZnVuY3Rpb25cIikpIHtcbiAgICByZXR1cm4gY2FsbDtcbiAgfVxuXG4gIHJldHVybiBhc3NlcnRUaGlzSW5pdGlhbGl6ZWQoc2VsZik7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm47IiwiZnVuY3Rpb24gX3NldFByb3RvdHlwZU9mKG8sIHApIHtcbiAgbW9kdWxlLmV4cG9ydHMgPSBfc2V0UHJvdG90eXBlT2YgPSBPYmplY3Quc2V0UHJvdG90eXBlT2YgfHwgZnVuY3Rpb24gX3NldFByb3RvdHlwZU9mKG8sIHApIHtcbiAgICBvLl9fcHJvdG9fXyA9IHA7XG4gICAgcmV0dXJuIG87XG4gIH07XG5cbiAgcmV0dXJuIF9zZXRQcm90b3R5cGVPZihvLCBwKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfc2V0UHJvdG90eXBlT2Y7IiwidmFyIGdldFByb3RvdHlwZU9mID0gcmVxdWlyZShcIi4vZ2V0UHJvdG90eXBlT2ZcIik7XG5cbmZ1bmN0aW9uIF9zdXBlclByb3BCYXNlKG9iamVjdCwgcHJvcGVydHkpIHtcbiAgd2hpbGUgKCFPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSkpIHtcbiAgICBvYmplY3QgPSBnZXRQcm90b3R5cGVPZihvYmplY3QpO1xuICAgIGlmIChvYmplY3QgPT09IG51bGwpIGJyZWFrO1xuICB9XG5cbiAgcmV0dXJuIG9iamVjdDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfc3VwZXJQcm9wQmFzZTsiLCJmdW5jdGlvbiBfdHlwZW9mKG9iaikge1xuICBcIkBiYWJlbC9oZWxwZXJzIC0gdHlwZW9mXCI7XG5cbiAgaWYgKHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiB0eXBlb2YgU3ltYm9sLml0ZXJhdG9yID09PSBcInN5bWJvbFwiKSB7XG4gICAgbW9kdWxlLmV4cG9ydHMgPSBfdHlwZW9mID0gZnVuY3Rpb24gX3R5cGVvZihvYmopIHtcbiAgICAgIHJldHVybiB0eXBlb2Ygb2JqO1xuICAgIH07XG4gIH0gZWxzZSB7XG4gICAgbW9kdWxlLmV4cG9ydHMgPSBfdHlwZW9mID0gZnVuY3Rpb24gX3R5cGVvZihvYmopIHtcbiAgICAgIHJldHVybiBvYmogJiYgdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIG9iai5jb25zdHJ1Y3RvciA9PT0gU3ltYm9sICYmIG9iaiAhPT0gU3ltYm9sLnByb3RvdHlwZSA/IFwic3ltYm9sXCIgOiB0eXBlb2Ygb2JqO1xuICAgIH07XG4gIH1cblxuICByZXR1cm4gX3R5cGVvZihvYmopO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF90eXBlb2Y7Il0sInNvdXJjZVJvb3QiOiIifQ==