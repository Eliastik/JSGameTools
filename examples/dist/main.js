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
link1.movable = true;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vZXhhbXBsZXMvc3JjL21haW4uanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvYXNzZXJ0VGhpc0luaXRpYWxpemVkLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2NsYXNzQ2FsbENoZWNrLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2NyZWF0ZUNsYXNzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2dldC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9nZXRQcm90b3R5cGVPZi5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9pbmhlcml0cy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL3NldFByb3RvdHlwZU9mLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL3N1cGVyUHJvcEJhc2UuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvdHlwZW9mLmpzIl0sIm5hbWVzIjpbIkpHVCIsIkpTR2FtZVRvb2xzIiwiaW1hZ2VMb2FkZXIiLCJJbWFnZUxvYWRlciIsImJ1dHRvblN0eWxlIiwiU3R5bGUiLCJidXR0b25TdHlsZVJlZCIsImxhYmVsU3R5bGUiLCJsYWJlbFN0eWxlQ2VudGVyIiwibGFiZWxTdHlsZVZlcnRpY2FsQ2VudGVyIiwiYnV0dG9uVGV4dCIsIkJ1dHRvbiIsIkxhYmVsIiwiYnV0dG9uVGV4dDIiLCJzdHlsZSIsInNldCIsInBhdXNlSW1hZ2UiLCJJbWFnZUNvbnRhaW5lciIsImJ1dHRvbkltYWdlIiwiUm93IiwiYnV0dG9uVGV4dEZ1bGxzY3JlZW4iLCJub3RpZmljYXRpb24iLCJOb3RpZmljYXRpb25NZXNzYWdlIiwiYnV0dG9uTWVudTEiLCJidXR0b25NZW51NSIsImJ1dHRvbk1lbnUyIiwiYnV0dG9uTWVudTMiLCJidXR0b25NZW51NCIsImJ1dHRvbk1lbnU2IiwibWVudUxhYmVsIiwibWVudSIsIk1lbnUiLCJJbnB1dCIsIkNvbnN0YW50cyIsIkFsaWduZW1lbnQiLCJDRU5URVIiLCJub3RpZmljYXRpb24yIiwidGV4dEZpZWxkIiwibGFiZWwxIiwicm93MSIsImxpbmsxIiwiTGluayIsIm1vdmFibGUiLCJ0b29sdGlwMSIsIlRvb2x0aXAiLCJ0b29sdGlwIiwidG9vbHRpcDIiLCJmcHNNZXRlciIsIkZQU01ldGVyIiwicHJvZ3Jlc3MiLCJQcm9ncmVzc0JhciIsIkVhc2luZ0Z1bmN0aW9ucyIsImVhc2VJbk91dEN1YmljIiwicGVyY2VudCIsInRvb2x0aXAzIiwiTWF0aCIsInJvdW5kIiwiYnV0dG9uQXJyb3ciLCJBcnJvdyIsImNvbFNjcm9sbGFibGUiLCJDb2wiLCJvcHRpb25MYXN0IiwiU2VsZWN0T3B0aW9uIiwib3B0aW9ucyIsIlNlbGVjdE9wdGlvbnNDb250YWluZXIiLCJzZWxlY3QiLCJTZWxlY3QiLCJCb3giLCJjb250ZXh0IiwiY2FudmFzIiwiY3R4IiwiZ2V0Q29udGV4dCIsInNhdmUiLCJmaWxsU3R5bGUiLCJiYWNrZ3JvdW5kQ29sb3IiLCJmaWxsUmVjdCIsIngiLCJ5IiwicGFyZW50Iiwid2lkdGgiLCJoZWlnaHQiLCJyZXN0b3JlIiwiQ29tcG9uZW50IiwiYm94Iiwic2NlbmUiLCJTY2VuZSIsIkNhbnZhcyIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJhcHBlbmRUbyIsImFkZENsaWNrQWN0aW9uIiwib3BlbiIsInRvZ2dsZUZ1bGxzY3JlZW4iLCJlbmFibGUiLCJkaXNhYmxlIiwiU2V0dGluZyIsIkVOQUJMRV9QSVhFTF9SQVRJT19SRVNJWklORyIsImxvYWQiLCJsb2FkSW1hZ2UiLCJzdGFydERyYXciLCJzZXRJbnRlcnZhbCIsInJhbmRvbSIsImNvbXBvbmVudHMiLCJ0ZXh0Iiwic2V0VGltZW91dCIsInJlbW92ZSJdLCJtYXBwaW5ncyI6IjtRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EseUNBQXlDLGlDQUFpQztRQUMxRSxnSEFBZ0gsbUJBQW1CLEVBQUU7UUFDckk7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwyQkFBMkIsMEJBQTBCLEVBQUU7UUFDdkQsaUNBQWlDLGVBQWU7UUFDaEQ7UUFDQTtRQUNBOztRQUVBO1FBQ0Esc0RBQXNELCtEQUErRDs7UUFFckg7UUFDQTs7O1FBR0E7UUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2xGQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQU1BLEdBQUcsR0FBR0MsV0FBWjtBQUVBLElBQU1DLFdBQVcsR0FBRyxJQUFJRixHQUFHLENBQUNHLFdBQVIsRUFBcEI7QUFFQSxJQUFNQyxXQUFXLEdBQUcsSUFBSUosR0FBRyxDQUFDSyxLQUFSLENBQWM7QUFDaEMscUJBQW1CLFNBRGE7QUFFaEMsMEJBQXdCLFNBRlE7QUFHaEMseUJBQXVCO0FBSFMsQ0FBZCxDQUFwQjtBQU1BLElBQU1DLGNBQWMsR0FBRyxJQUFJTixHQUFHLENBQUNLLEtBQVIsQ0FBYztBQUNuQyxxQkFBbUIsU0FEZ0I7QUFFbkMsMEJBQXdCLFNBRlc7QUFHbkMseUJBQXVCO0FBSFksQ0FBZCxDQUF2QjtBQU1BLElBQU1FLFVBQVUsR0FBRyxJQUFJUCxHQUFHLENBQUNLLEtBQVIsQ0FBYztBQUMvQixlQUFhO0FBRGtCLENBQWQsQ0FBbkI7QUFJQSxJQUFNRyxnQkFBZ0IsR0FBRyxJQUFJUixHQUFHLENBQUNLLEtBQVIsQ0FBYztBQUNyQyxlQUFhLE9BRHdCO0FBRXJDLGdCQUFjO0FBRnVCLENBQWQsQ0FBekI7QUFLQSxJQUFNSSx3QkFBd0IsR0FBRyxJQUFJVCxHQUFHLENBQUNLLEtBQVIsQ0FBYztBQUM3QyxlQUFhLE9BRGdDO0FBRTdDLHdCQUFzQjtBQUZ1QixDQUFkLENBQWpDO0FBS0EsSUFBTUssVUFBVSxHQUFHLElBQUlWLEdBQUcsQ0FBQ1csTUFBUixDQUFlLENBQWYsRUFBa0IsQ0FBbEIsRUFBcUIsSUFBckIsRUFBMkIsSUFBM0IsRUFBaUNQLFdBQWpDLEVBQThDLElBQUlKLEdBQUcsQ0FBQ1ksS0FBUixDQUFjLHFCQUFkLEVBQXFDLElBQXJDLEVBQTJDLElBQTNDLEVBQWlETCxVQUFqRCxDQUE5QyxDQUFuQjtBQUNBLElBQU1NLFdBQVcsR0FBRyxJQUFJYixHQUFHLENBQUNXLE1BQVIsQ0FBZSxDQUFmLEVBQWtCLEdBQWxCLEVBQXVCLElBQXZCLEVBQTZCLElBQTdCLEVBQW1DUCxXQUFuQyxFQUFnRCxJQUFJSixHQUFHLENBQUNZLEtBQVIsQ0FBYywwREFBZCxFQUEwRSxJQUExRSxFQUFnRixJQUFoRixFQUFzRkwsVUFBdEYsQ0FBaEQsQ0FBcEI7QUFDQU0sV0FBVyxDQUFDQyxLQUFaLENBQWtCQyxHQUFsQixDQUFzQixZQUF0QixFQUFvQyxPQUFwQztBQUNBLElBQU1DLFVBQVUsR0FBRyxJQUFJaEIsR0FBRyxDQUFDaUIsY0FBUixDQUF1QixXQUF2QixFQUFvQyxJQUFwQyxFQUEwQyxJQUExQyxFQUFnRCxFQUFoRCxFQUFvRCxFQUFwRCxFQUF3RCxJQUFJakIsR0FBRyxDQUFDSyxLQUFSLENBQWM7QUFBRSx3QkFBc0IsUUFBeEI7QUFBa0MsZ0JBQWM7QUFBaEQsQ0FBZCxDQUF4RCxDQUFuQjtBQUNBLElBQU1hLFdBQVcsR0FBRyxJQUFJbEIsR0FBRyxDQUFDVyxNQUFSLENBQWUsSUFBZixFQUFxQixFQUFyQixFQUF5QixJQUF6QixFQUErQixJQUEvQixFQUFxQyxJQUFJWCxHQUFHLENBQUNLLEtBQVIsQ0FBYztBQUFFLGdCQUFjO0FBQWhCLENBQWQsQ0FBckMsRUFBOEUsSUFBSUwsR0FBRyxDQUFDbUIsR0FBUixDQUFZLENBQVosRUFBZSxHQUFmLEVBQW9CLElBQXBCLEVBQTBCLElBQTFCLEVBQWdDLElBQWhDLEVBQXNDSCxVQUF0QyxFQUFrRCxJQUFJaEIsR0FBRyxDQUFDWSxLQUFSLENBQWMsT0FBZCxFQUF1QixJQUF2QixFQUE2QixJQUE3QixFQUFtQ0gsd0JBQW5DLENBQWxELENBQTlFLENBQXBCO0FBQ0EsSUFBTVcsb0JBQW9CLEdBQUcsSUFBSXBCLEdBQUcsQ0FBQ1csTUFBUixDQUFlLENBQWYsRUFBa0IsRUFBbEIsRUFBc0IsSUFBdEIsRUFBNEIsSUFBNUIsRUFBa0NQLFdBQWxDLEVBQStDLElBQUlKLEdBQUcsQ0FBQ1ksS0FBUixDQUFjLG1CQUFkLEVBQW1DLElBQW5DLEVBQXlDLElBQXpDLEVBQStDTCxVQUEvQyxDQUEvQyxDQUE3QjtBQUNBYSxvQkFBb0IsQ0FBQ04sS0FBckIsQ0FBMkJDLEdBQTNCLENBQStCLFlBQS9CLEVBQTZDLFFBQTdDO0FBQ0EsSUFBTU0sWUFBWSxHQUFHLElBQUlyQixHQUFHLENBQUNzQixtQkFBUixDQUE0QixJQUE1QixFQUFrQyxJQUFsQyxFQUF3QyxJQUF4QyxFQUE4QyxJQUFJdEIsR0FBRyxDQUFDWSxLQUFSLENBQWMsZ0JBQWQsRUFBZ0MsSUFBaEMsRUFBc0MsSUFBdEMsRUFBNENKLGdCQUE1QyxDQUE5QyxFQUE2RyxJQUFJUixHQUFHLENBQUNtQixHQUFSLENBQVksSUFBWixFQUFrQixJQUFsQixFQUF3QixJQUF4QixFQUE4QixJQUE5QixFQUFvQyxJQUFwQyxFQUEwQyxJQUFJbkIsR0FBRyxDQUFDWSxLQUFSLENBQWMsVUFBZCxFQUEwQixJQUExQixFQUFnQyxJQUFoQyxFQUFzQ0gsd0JBQXRDLENBQTFDLEVBQTJHLElBQUlULEdBQUcsQ0FBQ1csTUFBUixDQUFlLElBQWYsRUFBcUIsSUFBckIsRUFBMkIsSUFBM0IsRUFBaUMsSUFBakMsRUFBdUMsSUFBdkMsRUFBNkMsSUFBSVgsR0FBRyxDQUFDWSxLQUFSLENBQWMsUUFBZCxFQUF3QixJQUF4QixFQUE4QixJQUE5QixFQUFvQ0wsVUFBcEMsQ0FBN0MsQ0FBM0csQ0FBN0csQ0FBckI7QUFFQSxJQUFNZ0IsV0FBVyxHQUFHLElBQUl2QixHQUFHLENBQUNXLE1BQVIsQ0FBZSxDQUFmLEVBQWtCLENBQWxCLEVBQXFCLElBQXJCLEVBQTJCLElBQTNCLEVBQWlDUCxXQUFqQyxFQUE4QyxJQUFJSixHQUFHLENBQUNZLEtBQVIsQ0FBYywrQkFBZCxFQUErQyxJQUEvQyxFQUFxRCxJQUFyRCxFQUEyREwsVUFBM0QsQ0FBOUMsQ0FBcEI7QUFDQWdCLFdBQVcsQ0FBQ1QsS0FBWixDQUFrQkMsR0FBbEIsQ0FBc0IsWUFBdEIsRUFBb0MsTUFBcEM7QUFDQSxJQUFNUyxXQUFXLEdBQUcsSUFBSXhCLEdBQUcsQ0FBQ1csTUFBUixDQUFlLENBQWYsRUFBa0IsQ0FBbEIsRUFBcUIsSUFBckIsRUFBMkIsSUFBM0IsRUFBaUNQLFdBQWpDLEVBQThDLElBQUlKLEdBQUcsQ0FBQ1ksS0FBUixDQUFjLHdCQUFkLEVBQXdDLElBQXhDLEVBQThDLElBQTlDLEVBQW9ETCxVQUFwRCxDQUE5QyxDQUFwQjtBQUNBLElBQU1rQixXQUFXLEdBQUcsSUFBSXpCLEdBQUcsQ0FBQ1csTUFBUixDQUFlLENBQWYsRUFBa0IsQ0FBbEIsRUFBcUIsSUFBckIsRUFBMkIsSUFBM0IsRUFBaUNQLFdBQWpDLEVBQThDLElBQUlKLEdBQUcsQ0FBQ1ksS0FBUixDQUFjLHNDQUFkLEVBQXNELElBQXRELEVBQTRELElBQTVELEVBQWtFTCxVQUFsRSxDQUE5QyxDQUFwQjtBQUNBa0IsV0FBVyxDQUFDWCxLQUFaLENBQWtCQyxHQUFsQixDQUFzQixZQUF0QixFQUFvQyxPQUFwQztBQUNBLElBQU1XLFdBQVcsR0FBRyxJQUFJMUIsR0FBRyxDQUFDVyxNQUFSLENBQWUsQ0FBZixFQUFrQixDQUFsQixFQUFxQixJQUFyQixFQUEyQixJQUEzQixFQUFpQ1AsV0FBakMsRUFBOEMsSUFBSUosR0FBRyxDQUFDWSxLQUFSLENBQWMsd0NBQWQsRUFBd0QsSUFBeEQsRUFBOEQsSUFBOUQsRUFBb0VMLFVBQXBFLENBQTlDLENBQXBCO0FBQ0FtQixXQUFXLENBQUNaLEtBQVosQ0FBa0JDLEdBQWxCLENBQXNCLFlBQXRCLEVBQW9DLE9BQXBDO0FBQ0EsSUFBTVksV0FBVyxHQUFHLElBQUkzQixHQUFHLENBQUNXLE1BQVIsQ0FBZSxDQUFmLEVBQWtCLENBQWxCLEVBQXFCLElBQXJCLEVBQTJCLElBQTNCLEVBQWlDTCxjQUFqQyxFQUFpRCxJQUFJTixHQUFHLENBQUNZLEtBQVIsQ0FBYyxrQkFBZCxFQUFrQyxJQUFsQyxFQUF3QyxJQUF4QyxFQUE4Q0wsVUFBOUMsQ0FBakQsQ0FBcEI7QUFDQW9CLFdBQVcsQ0FBQ2IsS0FBWixDQUFrQkMsR0FBbEIsQ0FBc0IsWUFBdEIsRUFBb0MsUUFBcEM7QUFDQSxJQUFNYSxXQUFXLEdBQUcsSUFBSTVCLEdBQUcsQ0FBQ1csTUFBUixDQUFlLENBQWYsRUFBa0IsQ0FBbEIsRUFBcUIsSUFBckIsRUFBMkIsSUFBM0IsRUFBaUNQLFdBQWpDLEVBQThDLElBQUlKLEdBQUcsQ0FBQ1ksS0FBUixDQUFjLHlCQUFkLEVBQXlDLElBQXpDLEVBQStDLElBQS9DLEVBQXFETCxVQUFyRCxDQUE5QyxDQUFwQjtBQUNBcUIsV0FBVyxDQUFDZCxLQUFaLENBQWtCQyxHQUFsQixDQUFzQixZQUF0QixFQUFvQyxRQUFwQztBQUNBLElBQU1jLFNBQVMsR0FBRyxJQUFJN0IsR0FBRyxDQUFDWSxLQUFSLENBQWMsK0RBQWQsRUFBK0UsSUFBL0UsRUFBcUYsSUFBckYsRUFBMkZMLFVBQTNGLEVBQXVHLFFBQXZHLENBQWxCO0FBQ0FzQixTQUFTLENBQUNmLEtBQVYsQ0FBZ0JDLEdBQWhCLENBQW9CLFlBQXBCLEVBQWtDLFFBQWxDO0FBQ0EsSUFBTWUsSUFBSSxHQUFHLElBQUk5QixHQUFHLENBQUMrQixJQUFSLENBQWEsSUFBYixFQUFtQkYsU0FBbkIsRUFBOEJOLFdBQTlCLEVBQTJDQyxXQUEzQyxFQUF3REMsV0FBeEQsRUFBcUVDLFdBQXJFLEVBQWtGRSxXQUFsRixFQUErRkQsV0FBL0YsRUFBNEcsSUFBSTNCLEdBQUcsQ0FBQ2dDLEtBQVIsQ0FBYyxJQUFkLEVBQW9CLElBQXBCLEVBQTBCLEdBQTFCLEVBQStCLElBQS9CLEVBQXFDLElBQUloQyxHQUFHLENBQUNLLEtBQVIsQ0FBYztBQUFDLGdCQUFjTCxHQUFHLENBQUNpQyxTQUFKLENBQWNDLFVBQWQsQ0FBeUJDO0FBQXhDLENBQWQsQ0FBckMsQ0FBNUcsRUFBbU4sSUFBSW5DLEdBQUcsQ0FBQ2dDLEtBQVIsQ0FBYyxJQUFkLEVBQW9CLElBQXBCLEVBQTBCLEdBQTFCLEVBQStCLElBQS9CLEVBQXFDLElBQUloQyxHQUFHLENBQUNLLEtBQVIsQ0FBYztBQUFDLGdCQUFjTCxHQUFHLENBQUNpQyxTQUFKLENBQWNDLFVBQWQsQ0FBeUJDO0FBQXhDLENBQWQsQ0FBckMsQ0FBbk4sQ0FBYjtBQUVBLElBQU1DLGFBQWEsR0FBRyxJQUFJcEMsR0FBRyxDQUFDc0IsbUJBQVIsQ0FBNEIsSUFBSXRCLEdBQUcsQ0FBQ0ssS0FBUixDQUFjO0FBQUUscUJBQW1CLDBCQUFyQjtBQUFpRCxnQkFBYztBQUEvRCxDQUFkLENBQTVCLEVBQWtILElBQWxILEVBQXdILElBQXhILEVBQThILElBQUlMLEdBQUcsQ0FBQ1ksS0FBUixDQUFjLEtBQWQsRUFBcUIsSUFBckIsRUFBMkIsSUFBM0IsRUFBaUNKLGdCQUFqQyxDQUE5SCxDQUF0QjtBQUNBLElBQU02QixTQUFTLEdBQUcsSUFBSXJDLEdBQUcsQ0FBQ2dDLEtBQVIsQ0FBYyxDQUFkLEVBQWlCLEdBQWpCLEVBQXNCLEdBQXRCLENBQWxCO0FBQ0EsSUFBTU0sTUFBTSxHQUFHLElBQUl0QyxHQUFHLENBQUNZLEtBQVIsQ0FBYyxTQUFkLEVBQXlCLENBQXpCLEVBQTRCLEdBQTVCLENBQWY7QUFDQSxJQUFNMkIsSUFBSSxHQUFHLElBQUl2QyxHQUFHLENBQUNtQixHQUFSLENBQVksQ0FBWixFQUFlLEdBQWYsRUFBb0IsSUFBcEIsRUFBMEIsSUFBMUIsRUFBZ0MsSUFBaEMsRUFBc0NtQixNQUF0QyxFQUE4Q0QsU0FBOUMsQ0FBYjtBQUNBLElBQU1HLEtBQUssR0FBRyxJQUFJeEMsR0FBRyxDQUFDeUMsSUFBUixDQUFhLGFBQWIsRUFBNEIsQ0FBNUIsRUFBK0IsR0FBL0IsQ0FBZDtBQUNBRCxLQUFLLENBQUNFLE9BQU4sR0FBZ0IsSUFBaEI7QUFDQSxJQUFNQyxRQUFRLEdBQUcsSUFBSTNDLEdBQUcsQ0FBQzRDLE9BQVIsQ0FBZ0IsSUFBaEIsRUFBc0IsSUFBSTVDLEdBQUcsQ0FBQ1ksS0FBUixDQUFjLHdCQUFkLEVBQXdDLElBQXhDLEVBQThDLElBQTlDLEVBQW9ETCxVQUFwRCxDQUF0QixFQUF1RixJQUFJUCxHQUFHLENBQUNtQixHQUFSLENBQVksSUFBWixFQUFrQixJQUFsQixFQUF3QixJQUF4QixFQUE4QixJQUE5QixFQUFvQyxJQUFwQyxFQUEwQyxJQUFJbkIsR0FBRyxDQUFDWSxLQUFSLENBQWMsVUFBZCxFQUEwQixJQUExQixFQUFnQyxJQUFoQyxFQUFzQ0gsd0JBQXRDLENBQTFDLEVBQTJHLElBQUlULEdBQUcsQ0FBQ1csTUFBUixDQUFlLENBQWYsRUFBa0IsR0FBbEIsRUFBdUIsSUFBdkIsRUFBNkIsSUFBN0IsRUFBbUNMLGNBQW5DLEVBQW1ELElBQUlOLEdBQUcsQ0FBQ1ksS0FBUixDQUFjLFFBQWQsRUFBd0IsSUFBeEIsRUFBOEIsSUFBOUIsRUFBb0NMLFVBQXBDLENBQW5ELENBQTNHLENBQXZGLENBQWpCO0FBQ0ErQixNQUFNLENBQUNPLE9BQVAsR0FBaUJGLFFBQWpCO0FBQ0EsSUFBTUcsUUFBUSxHQUFHLElBQUk5QyxHQUFHLENBQUM0QyxPQUFSLENBQWdCLElBQWhCLEVBQXNCLElBQUk1QyxHQUFHLENBQUNZLEtBQVIsQ0FBYyxnREFBZCxFQUFnRSxJQUFoRSxFQUFzRSxJQUF0RSxFQUE0RUwsVUFBNUUsQ0FBdEIsQ0FBakI7QUFDQU0sV0FBVyxDQUFDZ0MsT0FBWixHQUFzQkMsUUFBdEI7QUFDQSxJQUFNQyxRQUFRLEdBQUcsSUFBSS9DLEdBQUcsQ0FBQ2dELFFBQVIsQ0FBaUIsS0FBakIsRUFBd0IsSUFBeEIsRUFBOEIsSUFBOUIsRUFBb0MsSUFBSWhELEdBQUcsQ0FBQ0ssS0FBUixDQUFjO0FBQUUsZ0JBQWMsT0FBaEI7QUFBeUIsd0JBQXNCO0FBQS9DLENBQWQsQ0FBcEMsQ0FBakI7QUFDQSxJQUFNNEMsUUFBUSxHQUFHLElBQUlqRCxHQUFHLENBQUNrRCxXQUFSLENBQW9CLEdBQXBCLEVBQXlCLENBQXpCLEVBQTRCLEdBQTVCLEVBQWlDLEVBQWpDLEVBQXFDLElBQXJDLEVBQTJDLElBQTNDLEVBQWlEbEQsR0FBRyxDQUFDbUQsZUFBSixDQUFvQkMsY0FBckUsQ0FBakI7QUFDQUgsUUFBUSxDQUFDSSxPQUFULEdBQW1CLENBQW5CO0FBQ0EsSUFBTUMsUUFBUSxHQUFHLElBQUl0RCxHQUFHLENBQUM0QyxPQUFSLENBQWdCLElBQWhCLEVBQXNCLElBQUk1QyxHQUFHLENBQUNZLEtBQVIsQ0FBYyxjQUFlMkMsSUFBSSxDQUFDQyxLQUFMLENBQVdQLFFBQVEsQ0FBQ0ksT0FBVCxHQUFtQixHQUE5QixJQUFxQyxHQUF0QyxHQUE2QyxHQUEzRCxHQUFpRSxHQUEvRSxFQUFvRixJQUFwRixFQUEwRixJQUExRixFQUFnRzlDLFVBQWhHLENBQXRCLENBQWpCO0FBQ0EwQyxRQUFRLENBQUNKLE9BQVQsR0FBbUJTLFFBQW5CO0FBQ0EsSUFBTUcsV0FBVyxHQUFHLElBQUl6RCxHQUFHLENBQUNXLE1BQVIsQ0FBZSxDQUFmLEVBQWtCLEdBQWxCLEVBQXVCLElBQXZCLEVBQTZCLElBQTdCLEVBQW1DUCxXQUFuQyxFQUFnRCxJQUFJSixHQUFHLENBQUMwRCxLQUFSLENBQWMsSUFBZCxFQUFvQixJQUFwQixFQUEwQixHQUExQixFQUErQixHQUEvQixFQUFvQyxJQUFJMUQsR0FBRyxDQUFDSyxLQUFSLENBQWM7QUFBRSxXQUFTO0FBQVgsQ0FBZCxDQUFwQyxDQUFoRCxDQUFwQjtBQUNBLElBQU1zRCxhQUFhLEdBQUcsSUFBSTNELEdBQUcsQ0FBQzRELEdBQVIsQ0FBWSxHQUFaLEVBQWlCLEdBQWpCLEVBQXNCLEdBQXRCLEVBQTJCLEVBQTNCLEVBQStCLElBQUk1RCxHQUFHLENBQUNLLEtBQVIsQ0FBYztBQUFFLHFCQUFtQjtBQUFyQixDQUFkLENBQS9CLEVBQTRFLElBQUlMLEdBQUcsQ0FBQ21CLEdBQVIsQ0FBWSxJQUFaLEVBQWtCLElBQWxCLEVBQXdCLElBQXhCLEVBQThCLElBQTlCLEVBQW9DLElBQXBDLEVBQTBDLElBQUluQixHQUFHLENBQUNZLEtBQVIsQ0FBYyxPQUFkLENBQTFDLEVBQWtFLElBQUlaLEdBQUcsQ0FBQ1ksS0FBUixDQUFjLE9BQWQsQ0FBbEUsRUFBMEYsSUFBSVosR0FBRyxDQUFDWSxLQUFSLENBQWMsT0FBZCxDQUExRixFQUFrSCxJQUFJWixHQUFHLENBQUNZLEtBQVIsQ0FBYyxPQUFkLENBQWxILENBQTVFLEVBQXVOLElBQUlaLEdBQUcsQ0FBQ21CLEdBQVIsQ0FBWSxJQUFaLEVBQWtCLElBQWxCLEVBQXdCLElBQXhCLEVBQThCLElBQTlCLEVBQW9DLElBQXBDLEVBQTBDLElBQUluQixHQUFHLENBQUNZLEtBQVIsQ0FBYyxPQUFkLENBQTFDLEVBQWtFLElBQUlaLEdBQUcsQ0FBQ1ksS0FBUixDQUFjLE9BQWQsQ0FBbEUsRUFBMEYsSUFBSVosR0FBRyxDQUFDWSxLQUFSLENBQWMsT0FBZCxDQUExRixFQUFrSCxJQUFJWixHQUFHLENBQUNZLEtBQVIsQ0FBYyxPQUFkLENBQWxILENBQXZOLEVBQWtXLElBQUlaLEdBQUcsQ0FBQ21CLEdBQVIsQ0FBWSxJQUFaLEVBQWtCLElBQWxCLEVBQXdCLElBQXhCLEVBQThCLElBQTlCLEVBQW9DLElBQXBDLEVBQTBDLElBQUluQixHQUFHLENBQUNZLEtBQVIsQ0FBYyxPQUFkLENBQTFDLEVBQWtFLElBQUlaLEdBQUcsQ0FBQ1ksS0FBUixDQUFjLFFBQWQsQ0FBbEUsRUFBMkYsSUFBSVosR0FBRyxDQUFDWSxLQUFSLENBQWMsUUFBZCxDQUEzRixFQUFvSCxJQUFJWixHQUFHLENBQUNZLEtBQVIsQ0FBYyxRQUFkLENBQXBILEVBQTZJLElBQUlaLEdBQUcsQ0FBQ1ksS0FBUixDQUFjLE1BQWQsQ0FBN0ksQ0FBbFcsQ0FBdEI7QUFDQStDLGFBQWEsQ0FBQzdDLEtBQWQsQ0FBb0JDLEdBQXBCLENBQXdCLFNBQXhCLEVBQW1DLEVBQW5DO0FBQ0E0QyxhQUFhLENBQUM3QyxLQUFkLENBQW9CQyxHQUFwQixDQUF3Qix3QkFBeEIsRUFBa0QsQ0FBbEQ7QUFDQSxJQUFNOEMsVUFBVSxHQUFHLElBQUk3RCxHQUFHLENBQUM4RCxZQUFSLENBQXFCLElBQUk5RCxHQUFHLENBQUNZLEtBQVIsQ0FBYyxlQUFkLENBQXJCLENBQW5CO0FBQ0EsSUFBTW1ELE9BQU8sR0FBRyxJQUFJL0QsR0FBRyxDQUFDZ0Usc0JBQVIsQ0FBK0IsRUFBL0IsRUFBbUMsSUFBbkMsRUFBeUMsSUFBSWhFLEdBQUcsQ0FBQzhELFlBQVIsQ0FBcUIsSUFBSTlELEdBQUcsQ0FBQ1ksS0FBUixDQUFjLGNBQWQsQ0FBckIsQ0FBekMsRUFBOEYsSUFBSVosR0FBRyxDQUFDOEQsWUFBUixDQUFxQixJQUFJOUQsR0FBRyxDQUFDWSxLQUFSLENBQWMsZUFBZCxDQUFyQixDQUE5RixFQUFvSixJQUFJWixHQUFHLENBQUM4RCxZQUFSLENBQXFCLElBQUk5RCxHQUFHLENBQUNZLEtBQVIsQ0FBYyxjQUFkLENBQXJCLENBQXBKLEVBQXlNaUQsVUFBek0sQ0FBaEI7QUFDQSxJQUFNSSxNQUFNLEdBQUcsSUFBSWpFLEdBQUcsQ0FBQ2tFLE1BQVIsQ0FBZSxHQUFmLEVBQW9CLEdBQXBCLEVBQXlCLElBQXpCLEVBQStCLElBQS9CLEVBQXFDLElBQUlsRSxHQUFHLENBQUNLLEtBQVIsQ0FBYztBQUFFLHdCQUFzQjtBQUF4QixDQUFkLENBQXJDLEVBQXdGMEQsT0FBeEYsQ0FBZjtBQUNBRSxNQUFNLENBQUN2QixPQUFQLEdBQWlCLElBQWpCLEMsQ0FFQTs7SUFDTXlCLEc7Ozs7O0FBQ0osZUFBWXJELEtBQVosRUFBbUI7QUFBQTs7QUFBQSw2QkFDWCxJQURXLEVBQ0wsSUFESyxFQUNDLElBREQsRUFDTyxJQURQLEVBQ2FBLEtBRGI7QUFFbEI7Ozs7eUJBRUlzRCxPLEVBQVM7QUFDWiw4TEFBV0EsT0FBWDs7QUFFQSxVQUFNQyxNQUFNLEdBQUdELE9BQU8sQ0FBQ0MsTUFBdkI7QUFDQSxVQUFNQyxHQUFHLEdBQUdELE1BQU0sQ0FBQ0UsVUFBUCxDQUFrQixJQUFsQixDQUFaO0FBQ0FELFNBQUcsQ0FBQ0UsSUFBSjtBQUVBRixTQUFHLENBQUNHLFNBQUosR0FBZ0IsS0FBSzNELEtBQUwsQ0FBVzRELGVBQTNCO0FBQ0FKLFNBQUcsQ0FBQ0ssUUFBSixDQUFhLEtBQUtDLENBQWxCLEVBQXFCLEtBQUtDLENBQTFCLEVBQTZCLEtBQUtDLE1BQUwsQ0FBWUMsS0FBekMsRUFBZ0QsS0FBS0QsTUFBTCxDQUFZRSxNQUE1RDtBQUVBVixTQUFHLENBQUNXLE9BQUo7QUFDRDs7OztFQWhCZWpGLEdBQUcsQ0FBQ2tGLFMsR0FtQnRCOzs7QUFDQSxJQUFNQyxHQUFHLEdBQUcsSUFBSWhCLEdBQUosQ0FBUSxJQUFJbkUsR0FBRyxDQUFDSyxLQUFSLENBQWM7QUFBRSxxQkFBbUI7QUFBckIsQ0FBZCxDQUFSLENBQVo7QUFDQSxJQUFNK0UsS0FBSyxHQUFHLElBQUlwRixHQUFHLENBQUNxRixLQUFSLENBQWNGLEdBQWQsRUFBbUJ6RSxVQUFuQixFQUErQkcsV0FBL0IsRUFBNENLLFdBQTVDLEVBQXlERSxvQkFBekQsRUFBK0VDLFlBQS9FLEVBQTZGUyxJQUE3RixFQUFtR00sYUFBbkcsRUFBa0hHLElBQWxILEVBQXdIQyxLQUF4SCxFQUErSEcsUUFBL0gsRUFBeUlHLFFBQXpJLEVBQW1KQyxRQUFuSixFQUE2SkUsUUFBN0osRUFBdUtLLFFBQXZLLEVBQWlMRyxXQUFqTCxFQUE4TEUsYUFBOUwsRUFBNk1NLE1BQTdNLEVBQXFORixPQUFyTixDQUFkO0FBQ0EsSUFBTU0sTUFBTSxHQUFHLElBQUlyRSxHQUFHLENBQUNzRixNQUFSLENBQWVGLEtBQWYsRUFBc0JHLFFBQVEsQ0FBQ0MsY0FBVCxDQUF3QixRQUF4QixDQUF0QixFQUF5RCxJQUF6RCxFQUErRCxJQUEvRCxFQUFxRSxJQUFyRSxDQUFmO0FBQ0FuQixNQUFNLENBQUNvQixRQUFQLENBQWdCRixRQUFRLENBQUNDLGNBQVQsQ0FBd0IsaUJBQXhCLENBQWhCLEUsQ0FFQTs7QUFDQTlFLFVBQVUsQ0FBQ2dGLGNBQVgsQ0FBMEIsWUFBTTtBQUM5QnJFLGNBQVksQ0FBQ3NFLElBQWI7QUFDRCxDQUZEO0FBSUF2RSxvQkFBb0IsQ0FBQ3NFLGNBQXJCLENBQW9DLFlBQU07QUFDeENyQixRQUFNLENBQUN1QixnQkFBUDtBQUNELENBRkQ7QUFJQTFFLFdBQVcsQ0FBQ3dFLGNBQVosQ0FBMkIsWUFBTTtBQUMvQjVELE1BQUksQ0FBQytELE1BQUw7QUFDRCxDQUZEO0FBSUFsRSxXQUFXLENBQUMrRCxjQUFaLENBQTJCLFlBQU07QUFDL0I1RCxNQUFJLENBQUNnRSxPQUFMO0FBQ0QsQ0FGRDtBQUlBdEUsV0FBVyxDQUFDa0UsY0FBWixDQUEyQixZQUFNO0FBQy9CdEQsZUFBYSxDQUFDdUQsSUFBZDtBQUNELENBRkQ7QUFJQS9ELFdBQVcsQ0FBQzhELGNBQVosQ0FBMkIsWUFBTTtBQUMvQjFGLEtBQUcsQ0FBQ2lDLFNBQUosQ0FBYzhELE9BQWQsQ0FBc0JDLDJCQUF0QixHQUFvRCxDQUFDaEcsR0FBRyxDQUFDaUMsU0FBSixDQUFjOEQsT0FBZCxDQUFzQkMsMkJBQTNFO0FBQ0QsQ0FGRDtBQUlBeEQsS0FBSyxDQUFDa0QsY0FBTixDQUFxQixZQUFNO0FBQ3pCckUsY0FBWSxDQUFDc0UsSUFBYjtBQUNELENBRkQsRSxDQUlBOztBQUNBekYsV0FBVyxDQUFDK0YsSUFBWixDQUFpQixDQUFDLFdBQUQsQ0FBakIsRUFBZ0MsWUFBTTtBQUNwQ2pGLFlBQVUsQ0FBQ2tGLFNBQVgsQ0FBcUJoRyxXQUFyQjtBQUNBbUUsUUFBTSxDQUFDOEIsU0FBUCxHQUZvQyxDQUlwQzs7QUFDQUMsYUFBVyxDQUFDLFlBQU07QUFDaEIsUUFBR25ELFFBQVEsQ0FBQ0ksT0FBVCxHQUFtQixDQUF0QixFQUF5QjtBQUN2QkosY0FBUSxDQUFDSSxPQUFULEdBQW1CRSxJQUFJLENBQUM4QyxNQUFMLEVBQW5CO0FBQ0QsS0FGRCxNQUVPLElBQUdwRCxRQUFRLENBQUNJLE9BQVQsSUFBb0IsQ0FBdkIsRUFBMEI7QUFDL0JKLGNBQVEsQ0FBQ0ksT0FBVCxHQUFtQkUsSUFBSSxDQUFDOEMsTUFBTCxFQUFuQjtBQUNEOztBQUVEL0MsWUFBUSxDQUFDZ0QsVUFBVCxDQUFvQixDQUFwQixFQUF1QkMsSUFBdkIsR0FBOEIsY0FBY2hELElBQUksQ0FBQ0MsS0FBTCxDQUFZRCxJQUFJLENBQUNDLEtBQUwsQ0FBV1AsUUFBUSxDQUFDSSxPQUFULEdBQW1CLEdBQTlCLElBQXFDLEdBQXRDLEdBQTZDLEdBQXhELENBQWQsR0FBNkUsR0FBM0c7QUFDRCxHQVJVLEVBUVIsSUFSUSxDQUFYLENBTG9DLENBZXBDOztBQUNBbUQsWUFBVSxDQUFDLFlBQU07QUFDZnpDLFdBQU8sQ0FBQzBDLE1BQVIsQ0FBZTVDLFVBQWY7QUFDRCxHQUZTLEVBRVAsSUFGTyxDQUFWO0FBR0QsQ0FuQkQsRTs7Ozs7Ozs7Ozs7QUN6SkE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQSx3Qzs7Ozs7Ozs7Ozs7QUNSQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLGlDOzs7Ozs7Ozs7OztBQ05BO0FBQ0EsaUJBQWlCLGtCQUFrQjtBQUNuQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLDhCOzs7Ozs7Ozs7OztBQ2hCQSxvQkFBb0IsbUJBQU8sQ0FBQywrRUFBaUI7O0FBRTdDO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUEsc0I7Ozs7Ozs7Ozs7O0FDdEJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxpQzs7Ozs7Ozs7Ozs7QUNQQSxxQkFBcUIsbUJBQU8sQ0FBQyxpRkFBa0I7O0FBRS9DO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBOztBQUVBLDJCOzs7Ozs7Ozs7OztBQ2pCQSxjQUFjLG1CQUFPLENBQUMsc0ZBQStCOztBQUVyRCw0QkFBNEIsbUJBQU8sQ0FBQywrRkFBeUI7O0FBRTdEO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUEsNEM7Ozs7Ozs7Ozs7O0FDWkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBLGlDOzs7Ozs7Ozs7OztBQ1RBLHFCQUFxQixtQkFBTyxDQUFDLGlGQUFrQjs7QUFFL0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBLGdDOzs7Ozs7Ozs7OztBQ1hBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQSx5QiIsImZpbGUiOiJtYWluLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9leGFtcGxlcy9zcmMvbWFpbi5qc1wiKTtcbiIsIi8qXG4gKiBDb3B5cmlnaHQgKEMpIDIwMjAgRWxpYXN0aWsgKGVsaWFzdGlrc29mdHMuY29tKVxuICpcbiAqIFRoaXMgZmlsZSBpcyBwYXJ0IG9mIFwiSlNHYW1lVG9vbHNcIi5cbiAqXG4gKiBcIkpTR2FtZVRvb2xzXCIgaXMgZnJlZSBzb2Z0d2FyZTogeW91IGNhbiByZWRpc3RyaWJ1dGUgaXQgYW5kL29yIG1vZGlmeVxuICogaXQgdW5kZXIgdGhlIHRlcm1zIG9mIHRoZSBHTlUgR2VuZXJhbCBQdWJsaWMgTGljZW5zZSBhcyBwdWJsaXNoZWQgYnlcbiAqIHRoZSBGcmVlIFNvZnR3YXJlIEZvdW5kYXRpb24sIGVpdGhlciB2ZXJzaW9uIDMgb2YgdGhlIExpY2Vuc2UsIG9yXG4gKiAoYXQgeW91ciBvcHRpb24pIGFueSBsYXRlciB2ZXJzaW9uLlxuICpcbiAqIFwiSlNHYW1lVG9vbHNcIiBpcyBkaXN0cmlidXRlZCBpbiB0aGUgaG9wZSB0aGF0IGl0IHdpbGwgYmUgdXNlZnVsLFxuICogYnV0IFdJVEhPVVQgQU5ZIFdBUlJBTlRZOyB3aXRob3V0IGV2ZW4gdGhlIGltcGxpZWQgd2FycmFudHkgb2ZcbiAqIE1FUkNIQU5UQUJJTElUWSBvciBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRS4gIFNlZSB0aGVcbiAqIEdOVSBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlIGZvciBtb3JlIGRldGFpbHMuXG4gKlxuICogWW91IHNob3VsZCBoYXZlIHJlY2VpdmVkIGEgY29weSBvZiB0aGUgR05VIEdlbmVyYWwgUHVibGljIExpY2Vuc2VcbiAqIGFsb25nIHdpdGggXCJKU0dhbWVUb29sc1wiLiAgSWYgbm90LCBzZWUgPGh0dHA6Ly93d3cuZ251Lm9yZy9saWNlbnNlcy8+LlxuICovXG4vLyBDcmVhdGUgY29tcG9uZW50c1xuY29uc3QgSkdUID0gSlNHYW1lVG9vbHM7XG5cbmNvbnN0IGltYWdlTG9hZGVyID0gbmV3IEpHVC5JbWFnZUxvYWRlcigpO1xuXG5jb25zdCBidXR0b25TdHlsZSA9IG5ldyBKR1QuU3R5bGUoe1xuICBcImJhY2tncm91bmRDb2xvclwiOiBcIiMyZWNjNzFcIixcbiAgXCJiYWNrZ3JvdW5kQ29sb3JIb3ZlclwiOiBcIiMxYWJjOWNcIixcbiAgXCJiYWNrZ3JvdW5kQ29sb3JEb3duXCI6IFwiIzE2YTA4NVwiXG59KTtcblxuY29uc3QgYnV0dG9uU3R5bGVSZWQgPSBuZXcgSkdULlN0eWxlKHtcbiAgXCJiYWNrZ3JvdW5kQ29sb3JcIjogXCIjQ0MyRjJGXCIsXG4gIFwiYmFja2dyb3VuZENvbG9ySG92ZXJcIjogXCIjRjIzODM4XCIsXG4gIFwiYmFja2dyb3VuZENvbG9yRG93blwiOiBcIiNBNjI2MjZcIlxufSk7XG5cbmNvbnN0IGxhYmVsU3R5bGUgPSBuZXcgSkdULlN0eWxlKHtcbiAgXCJmb250Q29sb3JcIjogXCJ3aGl0ZVwiXG59KTtcblxuY29uc3QgbGFiZWxTdHlsZUNlbnRlciA9IG5ldyBKR1QuU3R5bGUoe1xuICBcImZvbnRDb2xvclwiOiBcIndoaXRlXCIsXG4gIFwiYWxpZ25lbWVudFwiOiBcImNlbnRlclwiXG59KTtcblxuY29uc3QgbGFiZWxTdHlsZVZlcnRpY2FsQ2VudGVyID0gbmV3IEpHVC5TdHlsZSh7XG4gIFwiZm9udENvbG9yXCI6IFwid2hpdGVcIixcbiAgXCJ2ZXJ0aWNhbEFsaWduZW1lbnRcIjogXCJjZW50ZXJcIlxufSk7XG5cbmNvbnN0IGJ1dHRvblRleHQgPSBuZXcgSkdULkJ1dHRvbig1LCA1LCBudWxsLCBudWxsLCBidXR0b25TdHlsZSwgbmV3IEpHVC5MYWJlbChcIlNob3cgYSBub3RpZmljYXRpb25cIiwgbnVsbCwgbnVsbCwgbGFiZWxTdHlsZSkpO1xuY29uc3QgYnV0dG9uVGV4dDIgPSBuZXcgSkdULkJ1dHRvbig1LCAxNTAsIG51bGwsIG51bGwsIGJ1dHRvblN0eWxlLCBuZXcgSkdULkxhYmVsKFwiTG9uZyB0ZXh0IGJ1dHRvbiAuLi4uLi4uLi4uLiBUaGlzIHNob3VsZCBiZSBvbiBuZXh0IGxpbmVcIiwgbnVsbCwgbnVsbCwgbGFiZWxTdHlsZSkpO1xuYnV0dG9uVGV4dDIuc3R5bGUuc2V0KFwiYWxpZ25lbWVudFwiLCBcInJpZ2h0XCIpO1xuY29uc3QgcGF1c2VJbWFnZSA9IG5ldyBKR1QuSW1hZ2VDb250YWluZXIoXCJwYXVzZS5wbmdcIiwgbnVsbCwgbnVsbCwgNjQsIDY0LCBuZXcgSkdULlN0eWxlKHsgXCJ2ZXJ0aWNhbEFsaWduZW1lbnRcIjogXCJjZW50ZXJcIiwgXCJhbGlnbmVtZW50XCI6IFwibGVmdFwiIH0pKTtcbmNvbnN0IGJ1dHRvbkltYWdlID0gbmV3IEpHVC5CdXR0b24obnVsbCwgNTAsIG51bGwsIG51bGwsIG5ldyBKR1QuU3R5bGUoeyBcImFsaWduZW1lbnRcIjogXCJsZWZ0XCIgfSksIG5ldyBKR1QuUm93KDUsIDI1MCwgbnVsbCwgbnVsbCwgbnVsbCwgcGF1c2VJbWFnZSwgbmV3IEpHVC5MYWJlbChcIlBhdXNlXCIsIG51bGwsIG51bGwsIGxhYmVsU3R5bGVWZXJ0aWNhbENlbnRlcikpKTtcbmNvbnN0IGJ1dHRvblRleHRGdWxsc2NyZWVuID0gbmV3IEpHVC5CdXR0b24oNSwgNzUsIG51bGwsIG51bGwsIGJ1dHRvblN0eWxlLCBuZXcgSkdULkxhYmVsKFwiVG9nZ2xlIGZ1bGxzY3JlZW5cIiwgbnVsbCwgbnVsbCwgbGFiZWxTdHlsZSkpO1xuYnV0dG9uVGV4dEZ1bGxzY3JlZW4uc3R5bGUuc2V0KFwiYWxpZ25lbWVudFwiLCBcImNlbnRlclwiKTtcbmNvbnN0IG5vdGlmaWNhdGlvbiA9IG5ldyBKR1QuTm90aWZpY2F0aW9uTWVzc2FnZShudWxsLCBudWxsLCBudWxsLCBuZXcgSkdULkxhYmVsKFwiQSBub3RpZmljYXRpb25cIiwgbnVsbCwgbnVsbCwgbGFiZWxTdHlsZUNlbnRlciksIG5ldyBKR1QuUm93KG51bGwsIG51bGwsIG51bGwsIG51bGwsIG51bGwsIG5ldyBKR1QuTGFiZWwoXCJMYWJlbCA6IFwiLCBudWxsLCBudWxsLCBsYWJlbFN0eWxlVmVydGljYWxDZW50ZXIpLCBuZXcgSkdULkJ1dHRvbihudWxsLCBudWxsLCBudWxsLCBudWxsLCBudWxsLCBuZXcgSkdULkxhYmVsKFwiQnV0dG9uXCIsIG51bGwsIG51bGwsIGxhYmVsU3R5bGUpKSkpO1xuXG5jb25zdCBidXR0b25NZW51MSA9IG5ldyBKR1QuQnV0dG9uKDUsIDUsIG51bGwsIG51bGwsIGJ1dHRvblN0eWxlLCBuZXcgSkdULkxhYmVsKFwiQSBidXR0b24sIGFsaWduZWQgdG8gdGhlIGxlZnRcIiwgbnVsbCwgbnVsbCwgbGFiZWxTdHlsZSkpO1xuYnV0dG9uTWVudTEuc3R5bGUuc2V0KFwiYWxpZ25lbWVudFwiLCBcImxlZnRcIik7XG5jb25zdCBidXR0b25NZW51NSA9IG5ldyBKR1QuQnV0dG9uKDUsIDUsIG51bGwsIG51bGwsIGJ1dHRvblN0eWxlLCBuZXcgSkdULkxhYmVsKFwiRGlzcGxheSBhIG5vdGlmaWNhdGlvblwiLCBudWxsLCBudWxsLCBsYWJlbFN0eWxlKSk7XG5jb25zdCBidXR0b25NZW51MiA9IG5ldyBKR1QuQnV0dG9uKDUsIDUsIG51bGwsIG51bGwsIGJ1dHRvblN0eWxlLCBuZXcgSkdULkxhYmVsKFwiQW5vdGhlciBidXR0b24sIGFsaWduZWQgdG8gdGhlIHJpZ2h0XCIsIG51bGwsIG51bGwsIGxhYmVsU3R5bGUpKTtcbmJ1dHRvbk1lbnUyLnN0eWxlLnNldChcImFsaWduZW1lbnRcIiwgXCJyaWdodFwiKTtcbmNvbnN0IGJ1dHRvbk1lbnUzID0gbmV3IEpHVC5CdXR0b24oNSwgNSwgbnVsbCwgbnVsbCwgYnV0dG9uU3R5bGUsIG5ldyBKR1QuTGFiZWwoXCJBIGxvbmcgYnV0dG9ubm5ubm5ubm5ubm5ubm5ubm5ubm5ubm5ublwiLCBudWxsLCBudWxsLCBsYWJlbFN0eWxlKSk7XG5idXR0b25NZW51My5zdHlsZS5zZXQoXCJhbGlnbmVtZW50XCIsIFwicmlnaHRcIik7XG5jb25zdCBidXR0b25NZW51NCA9IG5ldyBKR1QuQnV0dG9uKDUsIDUsIG51bGwsIG51bGwsIGJ1dHRvblN0eWxlUmVkLCBuZXcgSkdULkxhYmVsKFwiQ2xvc2UgKGNlbnRlcmVkKVwiLCBudWxsLCBudWxsLCBsYWJlbFN0eWxlKSk7XG5idXR0b25NZW51NC5zdHlsZS5zZXQoXCJhbGlnbmVtZW50XCIsIFwiY2VudGVyXCIpO1xuY29uc3QgYnV0dG9uTWVudTYgPSBuZXcgSkdULkJ1dHRvbig1LCA1LCBudWxsLCBudWxsLCBidXR0b25TdHlsZSwgbmV3IEpHVC5MYWJlbChcIkRpc2FibGUvZW5hYmxlIGhpZ2ggRFBJXCIsIG51bGwsIG51bGwsIGxhYmVsU3R5bGUpKTtcbmJ1dHRvbk1lbnU2LnN0eWxlLnNldChcImFsaWduZW1lbnRcIiwgXCJjZW50ZXJcIik7XG5jb25zdCBtZW51TGFiZWwgPSBuZXcgSkdULkxhYmVsKFwiUGF1c2UgbWVudVxcbllvdSBjYW4gdXNlIHRoZSBhcnJvdyBrZXlzLCBwcmVzcyBlbnRlciB0byBzZWxlY3RcIiwgbnVsbCwgbnVsbCwgbGFiZWxTdHlsZSwgXCJjZW50ZXJcIik7XG5tZW51TGFiZWwuc3R5bGUuc2V0KFwiYWxpZ25lbWVudFwiLCBcImNlbnRlclwiKTtcbmNvbnN0IG1lbnUgPSBuZXcgSkdULk1lbnUobnVsbCwgbWVudUxhYmVsLCBidXR0b25NZW51MSwgYnV0dG9uTWVudTUsIGJ1dHRvbk1lbnUyLCBidXR0b25NZW51MywgYnV0dG9uTWVudTYsIGJ1dHRvbk1lbnU0LCBuZXcgSkdULklucHV0KG51bGwsIG51bGwsIDE1MCwgbnVsbCwgbmV3IEpHVC5TdHlsZSh7XCJhbGlnbmVtZW50XCI6IEpHVC5Db25zdGFudHMuQWxpZ25lbWVudC5DRU5URVIgfSkpLCBuZXcgSkdULklucHV0KG51bGwsIG51bGwsIDE1MCwgbnVsbCwgbmV3IEpHVC5TdHlsZSh7XCJhbGlnbmVtZW50XCI6IEpHVC5Db25zdGFudHMuQWxpZ25lbWVudC5DRU5URVIgfSkpKTtcblxuY29uc3Qgbm90aWZpY2F0aW9uMiA9IG5ldyBKR1QuTm90aWZpY2F0aW9uTWVzc2FnZShuZXcgSkdULlN0eWxlKHsgXCJiYWNrZ3JvdW5kQ29sb3JcIjogXCJyZ2JhKDQ2LCAyMDQsIDIyNSwgMC44NSlcIiwgXCJmb3JlZ3JvdW5kXCI6IHRydWUgfSksIG51bGwsIG51bGwsIG5ldyBKR1QuTGFiZWwoXCJIaSFcIiwgbnVsbCwgbnVsbCwgbGFiZWxTdHlsZUNlbnRlcikpO1xuY29uc3QgdGV4dEZpZWxkID0gbmV3IEpHVC5JbnB1dCg1LCAyNTAsIDE1MCk7XG5jb25zdCBsYWJlbDEgPSBuZXcgSkdULkxhYmVsKFwiQSBsYWJlbFwiLCA1LCAzMjUpO1xuY29uc3Qgcm93MSA9IG5ldyBKR1QuUm93KDUsIDI1MCwgbnVsbCwgbnVsbCwgbnVsbCwgbGFiZWwxLCB0ZXh0RmllbGQpO1xuY29uc3QgbGluazEgPSBuZXcgSkdULkxpbmsoXCJBIGxvbmcgbGlua1wiLCA1LCAzMDApO1xubGluazEubW92YWJsZSA9IHRydWU7XG5jb25zdCB0b29sdGlwMSA9IG5ldyBKR1QuVG9vbHRpcChudWxsLCBuZXcgSkdULkxhYmVsKFwiQSB0b29sdGlwXFxuU2Vjb25kIGxpbmVcIiwgbnVsbCwgbnVsbCwgbGFiZWxTdHlsZSksIG5ldyBKR1QuUm93KG51bGwsIG51bGwsIG51bGwsIG51bGwsIG51bGwsIG5ldyBKR1QuTGFiZWwoXCJMYWJlbCA6IFwiLCBudWxsLCBudWxsLCBsYWJlbFN0eWxlVmVydGljYWxDZW50ZXIpLCBuZXcgSkdULkJ1dHRvbig1LCAxNTAsIG51bGwsIG51bGwsIGJ1dHRvblN0eWxlUmVkLCBuZXcgSkdULkxhYmVsKFwiQnV0dG9uXCIsIG51bGwsIG51bGwsIGxhYmVsU3R5bGUpKSkpO1xubGFiZWwxLnRvb2x0aXAgPSB0b29sdGlwMTtcbmNvbnN0IHRvb2x0aXAyID0gbmV3IEpHVC5Ub29sdGlwKG51bGwsIG5ldyBKR1QuTGFiZWwoXCJBIHRvb2x0aXAgLi4uLiAuLiAuLiAuLi4uLi4gQXV0b3dyYXBcXG5OZXcgbGluZVwiLCBudWxsLCBudWxsLCBsYWJlbFN0eWxlKSk7XG5idXR0b25UZXh0Mi50b29sdGlwID0gdG9vbHRpcDI7XG5jb25zdCBmcHNNZXRlciA9IG5ldyBKR1QuRlBTTWV0ZXIoZmFsc2UsIG51bGwsIG51bGwsIG5ldyBKR1QuU3R5bGUoeyBcImFsaWduZW1lbnRcIjogXCJyaWdodFwiLCBcInZlcnRpY2FsQWxpZ25lbWVudFwiOiBcImJvdHRvbVwifSkpO1xuY29uc3QgcHJvZ3Jlc3MgPSBuZXcgSkdULlByb2dyZXNzQmFyKDMwMCwgNSwgMjAwLCAyNSwgbnVsbCwgbnVsbCwgSkdULkVhc2luZ0Z1bmN0aW9ucy5lYXNlSW5PdXRDdWJpYyk7XG5wcm9ncmVzcy5wZXJjZW50ID0gMTtcbmNvbnN0IHRvb2x0aXAzID0gbmV3IEpHVC5Ub29sdGlwKG51bGwsIG5ldyBKR1QuTGFiZWwoXCJDdXJyZW50OiBcIiArIChNYXRoLnJvdW5kKHByb2dyZXNzLnBlcmNlbnQgKiAxMDApIC8gMTAwKSAqIDEwMCArIFwiJVwiLCBudWxsLCBudWxsLCBsYWJlbFN0eWxlKSk7XG5wcm9ncmVzcy50b29sdGlwID0gdG9vbHRpcDM7XG5jb25zdCBidXR0b25BcnJvdyA9IG5ldyBKR1QuQnV0dG9uKDUsIDE1MCwgbnVsbCwgbnVsbCwgYnV0dG9uU3R5bGUsIG5ldyBKR1QuQXJyb3cobnVsbCwgbnVsbCwgMTAwLCAyMDAsIG5ldyBKR1QuU3R5bGUoeyBcImNvbG9yXCI6IFwid2hpdGVcIiB9KSkpO1xuY29uc3QgY29sU2Nyb2xsYWJsZSA9IG5ldyBKR1QuQ29sKDI1NSwgMjUwLCAyNTAsIDQyLCBuZXcgSkdULlN0eWxlKHsgXCJiYWNrZ3JvdW5kQ29sb3JcIjogXCIjZmZmXCJ9KSwgbmV3IEpHVC5Sb3cobnVsbCwgbnVsbCwgbnVsbCwgbnVsbCwgbnVsbCwgbmV3IEpHVC5MYWJlbChcIlRlc3QxXCIpLCBuZXcgSkdULkxhYmVsKFwiVGVzdDJcIiksIG5ldyBKR1QuTGFiZWwoXCJUZXN0M1wiKSwgbmV3IEpHVC5MYWJlbChcIlRlc3Q0XCIpKSwgbmV3IEpHVC5Sb3cobnVsbCwgbnVsbCwgbnVsbCwgbnVsbCwgbnVsbCwgbmV3IEpHVC5MYWJlbChcIlRlc3Q1XCIpLCBuZXcgSkdULkxhYmVsKFwiVGVzdDZcIiksIG5ldyBKR1QuTGFiZWwoXCJUZXN0N1wiKSwgbmV3IEpHVC5MYWJlbChcIlRlc3Q4XCIpKSwgbmV3IEpHVC5Sb3cobnVsbCwgbnVsbCwgbnVsbCwgbnVsbCwgbnVsbCwgbmV3IEpHVC5MYWJlbChcIlRlc3Q5XCIpLCBuZXcgSkdULkxhYmVsKFwiVGVzdDEwXCIpLCBuZXcgSkdULkxhYmVsKFwiVGVzdDExXCIpLCBuZXcgSkdULkxhYmVsKFwiVGVzdDEyXCIpLCBuZXcgSkdULkxhYmVsKFwiVGVzdFwiKSkpO1xuY29sU2Nyb2xsYWJsZS5zdHlsZS5zZXQoXCJwYWRkaW5nXCIsIDEwKTtcbmNvbFNjcm9sbGFibGUuc3R5bGUuc2V0KFwic3BhY2VCZXR3ZWVuQ29tcG9uZW50c1wiLCAwKTtcbmNvbnN0IG9wdGlvbkxhc3QgPSBuZXcgSkdULlNlbGVjdE9wdGlvbihuZXcgSkdULkxhYmVsKFwiUmVtb3ZlZCBpbiA1c1wiKSk7XG5jb25zdCBvcHRpb25zID0gbmV3IEpHVC5TZWxlY3RPcHRpb25zQ29udGFpbmVyKDc1LCBudWxsLCBuZXcgSkdULlNlbGVjdE9wdGlvbihuZXcgSkdULkxhYmVsKFwiRmlyc3QgY2hvaWNlXCIpKSwgbmV3IEpHVC5TZWxlY3RPcHRpb24obmV3IEpHVC5MYWJlbChcIlNlY29uZCBjaG9pY2VcIikpLCBuZXcgSkdULlNlbGVjdE9wdGlvbihuZXcgSkdULkxhYmVsKFwiVGhpcmQgY2hvaWNlXCIpKSwgb3B0aW9uTGFzdCk7XG5jb25zdCBzZWxlY3QgPSBuZXcgSkdULlNlbGVjdCgyNTUsIDMxNSwgbnVsbCwgbnVsbCwgbmV3IEpHVC5TdHlsZSh7IFwidmVydGljYWxBbGlnbmVtZW50XCI6IFwiYm90dG9tXCIgfSksIG9wdGlvbnMpO1xuc2VsZWN0Lm1vdmFibGUgPSB0cnVlO1xuXG4vLyBDdXN0b20gY29tcG9uZW50XG5jbGFzcyBCb3ggZXh0ZW5kcyBKR1QuQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3Ioc3R5bGUpIHtcbiAgICBzdXBlcihudWxsLCBudWxsLCBudWxsLCBudWxsLCBzdHlsZSk7XG4gIH1cblxuICBkcmF3KGNvbnRleHQpIHtcbiAgICBzdXBlci5kcmF3KGNvbnRleHQpO1xuICAgIFxuICAgIGNvbnN0IGNhbnZhcyA9IGNvbnRleHQuY2FudmFzO1xuICAgIGNvbnN0IGN0eCA9IGNhbnZhcy5nZXRDb250ZXh0KFwiMmRcIik7XG4gICAgY3R4LnNhdmUoKTtcblxuICAgIGN0eC5maWxsU3R5bGUgPSB0aGlzLnN0eWxlLmJhY2tncm91bmRDb2xvcjtcbiAgICBjdHguZmlsbFJlY3QodGhpcy54LCB0aGlzLnksIHRoaXMucGFyZW50LndpZHRoLCB0aGlzLnBhcmVudC5oZWlnaHQpO1xuXG4gICAgY3R4LnJlc3RvcmUoKTtcbiAgfVxufVxuXG4vLyBDcmVhdGUgc2NlbmUgKGNvbnRhaW5pbmcgY29tcG9uZW50cykgYW5kIGNhbnZhc1xuY29uc3QgYm94ID0gbmV3IEJveChuZXcgSkdULlN0eWxlKHsgXCJiYWNrZ3JvdW5kQ29sb3JcIjogXCIjODg4ODg4XCIgfSkpO1xuY29uc3Qgc2NlbmUgPSBuZXcgSkdULlNjZW5lKGJveCwgYnV0dG9uVGV4dCwgYnV0dG9uVGV4dDIsIGJ1dHRvbkltYWdlLCBidXR0b25UZXh0RnVsbHNjcmVlbiwgbm90aWZpY2F0aW9uLCBtZW51LCBub3RpZmljYXRpb24yLCByb3cxLCBsaW5rMSwgdG9vbHRpcDEsIHRvb2x0aXAyLCBmcHNNZXRlciwgcHJvZ3Jlc3MsIHRvb2x0aXAzLCBidXR0b25BcnJvdywgY29sU2Nyb2xsYWJsZSwgc2VsZWN0LCBvcHRpb25zKTtcbmNvbnN0IGNhbnZhcyA9IG5ldyBKR1QuQ2FudmFzKHNjZW5lLCBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNhbnZhc1wiKSwgbnVsbCwgbnVsbCwgdHJ1ZSk7XG5jYW52YXMuYXBwZW5kVG8oZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjYW52YXNDb250YWluZXJcIikpO1xuXG4vLyBFdmVudHNcbmJ1dHRvblRleHQuYWRkQ2xpY2tBY3Rpb24oKCkgPT4ge1xuICBub3RpZmljYXRpb24ub3BlbigpO1xufSk7XG5cbmJ1dHRvblRleHRGdWxsc2NyZWVuLmFkZENsaWNrQWN0aW9uKCgpID0+IHtcbiAgY2FudmFzLnRvZ2dsZUZ1bGxzY3JlZW4oKTtcbn0pO1xuXG5idXR0b25JbWFnZS5hZGRDbGlja0FjdGlvbigoKSA9PiB7XG4gIG1lbnUuZW5hYmxlKCk7XG59KTtcblxuYnV0dG9uTWVudTQuYWRkQ2xpY2tBY3Rpb24oKCkgPT4ge1xuICBtZW51LmRpc2FibGUoKTtcbn0pO1xuXG5idXR0b25NZW51NS5hZGRDbGlja0FjdGlvbigoKSA9PiB7XG4gIG5vdGlmaWNhdGlvbjIub3BlbigpO1xufSk7XG5cbmJ1dHRvbk1lbnU2LmFkZENsaWNrQWN0aW9uKCgpID0+IHtcbiAgSkdULkNvbnN0YW50cy5TZXR0aW5nLkVOQUJMRV9QSVhFTF9SQVRJT19SRVNJWklORyA9ICFKR1QuQ29uc3RhbnRzLlNldHRpbmcuRU5BQkxFX1BJWEVMX1JBVElPX1JFU0laSU5HO1xufSk7XG5cbmxpbmsxLmFkZENsaWNrQWN0aW9uKCgpID0+IHtcbiAgbm90aWZpY2F0aW9uLm9wZW4oKTtcbn0pO1xuXG4vLyBMb2FkIHBhdXNlIGltYWdlIGFuZCBzdGFydCB0aGUgY2FudmFzIHJlbmRlcmluZ1xuaW1hZ2VMb2FkZXIubG9hZChbXCJwYXVzZS5wbmdcIl0sICgpID0+IHtcbiAgcGF1c2VJbWFnZS5sb2FkSW1hZ2UoaW1hZ2VMb2FkZXIpO1xuICBjYW52YXMuc3RhcnREcmF3KCk7XG5cbiAgLy8gUmFuZG9tbHkgY2hhbmdlIHRoZSBwcm9ncmVzcyB2YWx1ZVxuICBzZXRJbnRlcnZhbCgoKSA9PiB7XG4gICAgaWYocHJvZ3Jlc3MucGVyY2VudCA8IDEpIHtcbiAgICAgIHByb2dyZXNzLnBlcmNlbnQgPSBNYXRoLnJhbmRvbSgpO1xuICAgIH0gZWxzZSBpZihwcm9ncmVzcy5wZXJjZW50ID49IDEpIHtcbiAgICAgIHByb2dyZXNzLnBlcmNlbnQgPSBNYXRoLnJhbmRvbSgpO1xuICAgIH1cblxuICAgIHRvb2x0aXAzLmNvbXBvbmVudHNbMF0udGV4dCA9IFwiQ3VycmVudDogXCIgKyBNYXRoLnJvdW5kKChNYXRoLnJvdW5kKHByb2dyZXNzLnBlcmNlbnQgKiAxMDApIC8gMTAwKSAqIDEwMCkgKyBcIiVcIjtcbiAgfSwgMzAwMCk7XG5cbiAgLy8gUmVtb3ZlIHRoZSBsYXN0IG9wdGlvbiBlbGVtZW50XG4gIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgIG9wdGlvbnMucmVtb3ZlKG9wdGlvbkxhc3QpO1xuICB9LCA1MDAwKTtcbn0pOyIsImZ1bmN0aW9uIF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoc2VsZikge1xuICBpZiAoc2VsZiA9PT0gdm9pZCAwKSB7XG4gICAgdGhyb3cgbmV3IFJlZmVyZW5jZUVycm9yKFwidGhpcyBoYXNuJ3QgYmVlbiBpbml0aWFsaXNlZCAtIHN1cGVyKCkgaGFzbid0IGJlZW4gY2FsbGVkXCIpO1xuICB9XG5cbiAgcmV0dXJuIHNlbGY7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX2Fzc2VydFRoaXNJbml0aWFsaXplZDsiLCJmdW5jdGlvbiBfY2xhc3NDYWxsQ2hlY2soaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7XG4gIGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7XG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblwiKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9jbGFzc0NhbGxDaGVjazsiLCJmdW5jdGlvbiBfZGVmaW5lUHJvcGVydGllcyh0YXJnZXQsIHByb3BzKSB7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgcHJvcHMubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgZGVzY3JpcHRvciA9IHByb3BzW2ldO1xuICAgIGRlc2NyaXB0b3IuZW51bWVyYWJsZSA9IGRlc2NyaXB0b3IuZW51bWVyYWJsZSB8fCBmYWxzZTtcbiAgICBkZXNjcmlwdG9yLmNvbmZpZ3VyYWJsZSA9IHRydWU7XG4gICAgaWYgKFwidmFsdWVcIiBpbiBkZXNjcmlwdG9yKSBkZXNjcmlwdG9yLndyaXRhYmxlID0gdHJ1ZTtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBkZXNjcmlwdG9yLmtleSwgZGVzY3JpcHRvcik7XG4gIH1cbn1cblxuZnVuY3Rpb24gX2NyZWF0ZUNsYXNzKENvbnN0cnVjdG9yLCBwcm90b1Byb3BzLCBzdGF0aWNQcm9wcykge1xuICBpZiAocHJvdG9Qcm9wcykgX2RlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IucHJvdG90eXBlLCBwcm90b1Byb3BzKTtcbiAgaWYgKHN0YXRpY1Byb3BzKSBfZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvciwgc3RhdGljUHJvcHMpO1xuICByZXR1cm4gQ29uc3RydWN0b3I7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX2NyZWF0ZUNsYXNzOyIsInZhciBzdXBlclByb3BCYXNlID0gcmVxdWlyZShcIi4vc3VwZXJQcm9wQmFzZVwiKTtcblxuZnVuY3Rpb24gX2dldCh0YXJnZXQsIHByb3BlcnR5LCByZWNlaXZlcikge1xuICBpZiAodHlwZW9mIFJlZmxlY3QgIT09IFwidW5kZWZpbmVkXCIgJiYgUmVmbGVjdC5nZXQpIHtcbiAgICBtb2R1bGUuZXhwb3J0cyA9IF9nZXQgPSBSZWZsZWN0LmdldDtcbiAgfSBlbHNlIHtcbiAgICBtb2R1bGUuZXhwb3J0cyA9IF9nZXQgPSBmdW5jdGlvbiBfZ2V0KHRhcmdldCwgcHJvcGVydHksIHJlY2VpdmVyKSB7XG4gICAgICB2YXIgYmFzZSA9IHN1cGVyUHJvcEJhc2UodGFyZ2V0LCBwcm9wZXJ0eSk7XG4gICAgICBpZiAoIWJhc2UpIHJldHVybjtcbiAgICAgIHZhciBkZXNjID0gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihiYXNlLCBwcm9wZXJ0eSk7XG5cbiAgICAgIGlmIChkZXNjLmdldCkge1xuICAgICAgICByZXR1cm4gZGVzYy5nZXQuY2FsbChyZWNlaXZlcik7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBkZXNjLnZhbHVlO1xuICAgIH07XG4gIH1cblxuICByZXR1cm4gX2dldCh0YXJnZXQsIHByb3BlcnR5LCByZWNlaXZlciB8fCB0YXJnZXQpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9nZXQ7IiwiZnVuY3Rpb24gX2dldFByb3RvdHlwZU9mKG8pIHtcbiAgbW9kdWxlLmV4cG9ydHMgPSBfZ2V0UHJvdG90eXBlT2YgPSBPYmplY3Quc2V0UHJvdG90eXBlT2YgPyBPYmplY3QuZ2V0UHJvdG90eXBlT2YgOiBmdW5jdGlvbiBfZ2V0UHJvdG90eXBlT2Yobykge1xuICAgIHJldHVybiBvLl9fcHJvdG9fXyB8fCBPYmplY3QuZ2V0UHJvdG90eXBlT2Yobyk7XG4gIH07XG4gIHJldHVybiBfZ2V0UHJvdG90eXBlT2Yobyk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX2dldFByb3RvdHlwZU9mOyIsInZhciBzZXRQcm90b3R5cGVPZiA9IHJlcXVpcmUoXCIuL3NldFByb3RvdHlwZU9mXCIpO1xuXG5mdW5jdGlvbiBfaW5oZXJpdHMoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpIHtcbiAgaWYgKHR5cGVvZiBzdXBlckNsYXNzICE9PSBcImZ1bmN0aW9uXCIgJiYgc3VwZXJDbGFzcyAhPT0gbnVsbCkge1xuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJTdXBlciBleHByZXNzaW9uIG11c3QgZWl0aGVyIGJlIG51bGwgb3IgYSBmdW5jdGlvblwiKTtcbiAgfVxuXG4gIHN1YkNsYXNzLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoc3VwZXJDbGFzcyAmJiBzdXBlckNsYXNzLnByb3RvdHlwZSwge1xuICAgIGNvbnN0cnVjdG9yOiB7XG4gICAgICB2YWx1ZTogc3ViQ2xhc3MsXG4gICAgICB3cml0YWJsZTogdHJ1ZSxcbiAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICAgIH1cbiAgfSk7XG4gIGlmIChzdXBlckNsYXNzKSBzZXRQcm90b3R5cGVPZihzdWJDbGFzcywgc3VwZXJDbGFzcyk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX2luaGVyaXRzOyIsInZhciBfdHlwZW9mID0gcmVxdWlyZShcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvdHlwZW9mXCIpO1xuXG52YXIgYXNzZXJ0VGhpc0luaXRpYWxpemVkID0gcmVxdWlyZShcIi4vYXNzZXJ0VGhpc0luaXRpYWxpemVkXCIpO1xuXG5mdW5jdGlvbiBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybihzZWxmLCBjYWxsKSB7XG4gIGlmIChjYWxsICYmIChfdHlwZW9mKGNhbGwpID09PSBcIm9iamVjdFwiIHx8IHR5cGVvZiBjYWxsID09PSBcImZ1bmN0aW9uXCIpKSB7XG4gICAgcmV0dXJuIGNhbGw7XG4gIH1cblxuICByZXR1cm4gYXNzZXJ0VGhpc0luaXRpYWxpemVkKHNlbGYpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuOyIsImZ1bmN0aW9uIF9zZXRQcm90b3R5cGVPZihvLCBwKSB7XG4gIG1vZHVsZS5leHBvcnRzID0gX3NldFByb3RvdHlwZU9mID0gT2JqZWN0LnNldFByb3RvdHlwZU9mIHx8IGZ1bmN0aW9uIF9zZXRQcm90b3R5cGVPZihvLCBwKSB7XG4gICAgby5fX3Byb3RvX18gPSBwO1xuICAgIHJldHVybiBvO1xuICB9O1xuXG4gIHJldHVybiBfc2V0UHJvdG90eXBlT2YobywgcCk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX3NldFByb3RvdHlwZU9mOyIsInZhciBnZXRQcm90b3R5cGVPZiA9IHJlcXVpcmUoXCIuL2dldFByb3RvdHlwZU9mXCIpO1xuXG5mdW5jdGlvbiBfc3VwZXJQcm9wQmFzZShvYmplY3QsIHByb3BlcnR5KSB7XG4gIHdoaWxlICghT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpKSB7XG4gICAgb2JqZWN0ID0gZ2V0UHJvdG90eXBlT2Yob2JqZWN0KTtcbiAgICBpZiAob2JqZWN0ID09PSBudWxsKSBicmVhaztcbiAgfVxuXG4gIHJldHVybiBvYmplY3Q7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX3N1cGVyUHJvcEJhc2U7IiwiZnVuY3Rpb24gX3R5cGVvZihvYmopIHtcbiAgXCJAYmFiZWwvaGVscGVycyAtIHR5cGVvZlwiO1xuXG4gIGlmICh0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgdHlwZW9mIFN5bWJvbC5pdGVyYXRvciA9PT0gXCJzeW1ib2xcIikge1xuICAgIG1vZHVsZS5leHBvcnRzID0gX3R5cGVvZiA9IGZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7XG4gICAgICByZXR1cm4gdHlwZW9mIG9iajtcbiAgICB9O1xuICB9IGVsc2Uge1xuICAgIG1vZHVsZS5leHBvcnRzID0gX3R5cGVvZiA9IGZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7XG4gICAgICByZXR1cm4gb2JqICYmIHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiBvYmouY29uc3RydWN0b3IgPT09IFN5bWJvbCAmJiBvYmogIT09IFN5bWJvbC5wcm90b3R5cGUgPyBcInN5bWJvbFwiIDogdHlwZW9mIG9iajtcbiAgICB9O1xuICB9XG5cbiAgcmV0dXJuIF90eXBlb2Yob2JqKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfdHlwZW9mOyJdLCJzb3VyY2VSb290IjoiIn0=