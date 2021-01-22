(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["JSGameTools"] = factory();
	else
		root["JSGameTools"] = factory();
})(typeof self !== "undefined" ? self : this, function() {
return /******/ (function(modules) { // webpackBootstrap
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/@babel/runtime/helpers/arrayLikeToArray.js":
/*!*****************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/arrayLikeToArray.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;

  for (var i = 0, arr2 = new Array(len); i < len; i++) {
    arr2[i] = arr[i];
  }

  return arr2;
}

module.exports = _arrayLikeToArray;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/arrayWithoutHoles.js":
/*!******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/arrayWithoutHoles.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var arrayLikeToArray = __webpack_require__(/*! ./arrayLikeToArray */ "./node_modules/@babel/runtime/helpers/arrayLikeToArray.js");

function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr)) return arrayLikeToArray(arr);
}

module.exports = _arrayWithoutHoles;

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

/***/ "./node_modules/@babel/runtime/helpers/classPrivateFieldGet.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/classPrivateFieldGet.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _classPrivateFieldGet(receiver, privateMap) {
  var descriptor = privateMap.get(receiver);

  if (!descriptor) {
    throw new TypeError("attempted to get private field on non-instance");
  }

  if (descriptor.get) {
    return descriptor.get.call(receiver);
  }

  return descriptor.value;
}

module.exports = _classPrivateFieldGet;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/classPrivateFieldSet.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/classPrivateFieldSet.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _classPrivateFieldSet(receiver, privateMap, value) {
  var descriptor = privateMap.get(receiver);

  if (!descriptor) {
    throw new TypeError("attempted to set private field on non-instance");
  }

  if (descriptor.set) {
    descriptor.set.call(receiver, value);
  } else {
    if (!descriptor.writable) {
      throw new TypeError("attempted to set read only private field");
    }

    descriptor.value = value;
  }

  return value;
}

module.exports = _classPrivateFieldSet;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/construct.js":
/*!**********************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/construct.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var setPrototypeOf = __webpack_require__(/*! ./setPrototypeOf */ "./node_modules/@babel/runtime/helpers/setPrototypeOf.js");

var isNativeReflectConstruct = __webpack_require__(/*! ./isNativeReflectConstruct */ "./node_modules/@babel/runtime/helpers/isNativeReflectConstruct.js");

function _construct(Parent, args, Class) {
  if (isNativeReflectConstruct()) {
    module.exports = _construct = Reflect.construct;
  } else {
    module.exports = _construct = function _construct(Parent, args, Class) {
      var a = [null];
      a.push.apply(a, args);
      var Constructor = Function.bind.apply(Parent, a);
      var instance = new Constructor();
      if (Class) setPrototypeOf(instance, Class.prototype);
      return instance;
    };
  }

  return _construct.apply(null, arguments);
}

module.exports = _construct;

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

/***/ "./node_modules/@babel/runtime/helpers/defineProperty.js":
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/defineProperty.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

module.exports = _defineProperty;

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

/***/ "./node_modules/@babel/runtime/helpers/isNativeReflectConstruct.js":
/*!*************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/isNativeReflectConstruct.js ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _isNativeReflectConstruct() {
  if (typeof Reflect === "undefined" || !Reflect.construct) return false;
  if (Reflect.construct.sham) return false;
  if (typeof Proxy === "function") return true;

  try {
    Date.prototype.toString.call(Reflect.construct(Date, [], function () {}));
    return true;
  } catch (e) {
    return false;
  }
}

module.exports = _isNativeReflectConstruct;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/iterableToArray.js":
/*!****************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/iterableToArray.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _iterableToArray(iter) {
  if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter);
}

module.exports = _iterableToArray;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/nonIterableSpread.js":
/*!******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/nonIterableSpread.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

module.exports = _nonIterableSpread;

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

/***/ "./node_modules/@babel/runtime/helpers/set.js":
/*!****************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/set.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var superPropBase = __webpack_require__(/*! ./superPropBase */ "./node_modules/@babel/runtime/helpers/superPropBase.js");

var defineProperty = __webpack_require__(/*! ./defineProperty */ "./node_modules/@babel/runtime/helpers/defineProperty.js");

function set(target, property, value, receiver) {
  if (typeof Reflect !== "undefined" && Reflect.set) {
    set = Reflect.set;
  } else {
    set = function set(target, property, value, receiver) {
      var base = superPropBase(target, property);
      var desc;

      if (base) {
        desc = Object.getOwnPropertyDescriptor(base, property);

        if (desc.set) {
          desc.set.call(receiver, value);
          return true;
        } else if (!desc.writable) {
          return false;
        }
      }

      desc = Object.getOwnPropertyDescriptor(receiver, property);

      if (desc) {
        if (!desc.writable) {
          return false;
        }

        desc.value = value;
        Object.defineProperty(receiver, property, desc);
      } else {
        defineProperty(receiver, property, value);
      }

      return true;
    };
  }

  return set(target, property, value, receiver);
}

function _set(target, property, value, receiver, isStrict) {
  var s = set(target, property, value, receiver || target);

  if (!s && isStrict) {
    throw new Error('failed to set property');
  }

  return value;
}

module.exports = _set;

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

/***/ "./node_modules/@babel/runtime/helpers/toConsumableArray.js":
/*!******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/toConsumableArray.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var arrayWithoutHoles = __webpack_require__(/*! ./arrayWithoutHoles */ "./node_modules/@babel/runtime/helpers/arrayWithoutHoles.js");

var iterableToArray = __webpack_require__(/*! ./iterableToArray */ "./node_modules/@babel/runtime/helpers/iterableToArray.js");

var unsupportedIterableToArray = __webpack_require__(/*! ./unsupportedIterableToArray */ "./node_modules/@babel/runtime/helpers/unsupportedIterableToArray.js");

var nonIterableSpread = __webpack_require__(/*! ./nonIterableSpread */ "./node_modules/@babel/runtime/helpers/nonIterableSpread.js");

function _toConsumableArray(arr) {
  return arrayWithoutHoles(arr) || iterableToArray(arr) || unsupportedIterableToArray(arr) || nonIterableSpread();
}

module.exports = _toConsumableArray;

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

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/unsupportedIterableToArray.js":
/*!***************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/unsupportedIterableToArray.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var arrayLikeToArray = __webpack_require__(/*! ./arrayLikeToArray */ "./node_modules/@babel/runtime/helpers/arrayLikeToArray.js");

function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return arrayLikeToArray(o, minLen);
}

module.exports = _unsupportedIterableToArray;

/***/ }),

/***/ "./src/Arrow.js":
/*!**********************!*\
  !*** ./src/Arrow.js ***!
  \**********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Arrow; });
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/assertThisInitialized */ "./node_modules/@babel/runtime/helpers/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_helpers_get__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/get */ "./node_modules/@babel/runtime/helpers/get.js");
/* harmony import */ var _babel_runtime_helpers_get__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_get__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/inherits */ "./node_modules/@babel/runtime/helpers/inherits.js");
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _Component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./Component */ "./src/Component.js");
/* harmony import */ var _Constants__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./Constants */ "./src/Constants.js");
/* harmony import */ var _Style__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./Style */ "./src/Style.js");
/* harmony import */ var _Utils__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./Utils */ "./src/Utils.js");









function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6___default()(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6___default()(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5___default()(this, result); }; }

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





var Arrow = /*#__PURE__*/function (_Component) {
  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4___default()(Arrow, _Component);

  var _super = _createSuper(Arrow);

  function Arrow(x, y, toX, toY, style) {
    var _this;

    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, Arrow);

    _this = _super.call(this, x, y, null, null, style);

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_7___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2___default()(_this), "selectable", false);

    _this.toX = toX;
    _this.toY = toY;
    return _this;
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(Arrow, [{
    key: "draw",
    value: function draw(context) {
      if (this.hidden) return;

      _babel_runtime_helpers_get__WEBPACK_IMPORTED_MODULE_3___default()(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6___default()(Arrow.prototype), "draw", this).call(this, context);

      var canvas = context.canvas;
      var ctx = canvas.getContext("2d");
      _Utils__WEBPACK_IMPORTED_MODULE_11__["default"].drawArrow(ctx, this.x, this.y, this.toX, this.toY, this.style.lineWidth, this.style.headSize, this.style.color, this.style.lineCap);
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
      return new _Style__WEBPACK_IMPORTED_MODULE_10__["default"]({
        "lineWidth": _Constants__WEBPACK_IMPORTED_MODULE_9__["default"].Setting.ARROW_DEFAULT_LINE_SIZE,
        "headSize": _Constants__WEBPACK_IMPORTED_MODULE_9__["default"].Setting.ARROW_DEFAULT_HEAD_SIZE,
        "color": _Constants__WEBPACK_IMPORTED_MODULE_9__["default"].Setting.ARROW_DEFAULT_COLOR,
        "lineCap": _Constants__WEBPACK_IMPORTED_MODULE_9__["default"].Setting.ARROW_DEFAULT_LINE_CAP
      });
    }
  }]);

  return Arrow;
}(_Component__WEBPACK_IMPORTED_MODULE_8__["default"]);



/***/ }),

/***/ "./src/Box.js":
/*!********************!*\
  !*** ./src/Box.js ***!
  \********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Box; });
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/assertThisInitialized */ "./node_modules/@babel/runtime/helpers/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_helpers_get__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/get */ "./node_modules/@babel/runtime/helpers/get.js");
/* harmony import */ var _babel_runtime_helpers_get__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_get__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/inherits */ "./node_modules/@babel/runtime/helpers/inherits.js");
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _Component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./Component */ "./src/Component.js");









function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6___default()(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6___default()(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5___default()(this, result); }; }

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


var Box = /*#__PURE__*/function (_Component) {
  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4___default()(Box, _Component);

  var _super = _createSuper(Box);

  function Box(x, y, width, height, style) {
    var _this;

    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, Box);

    _this = _super.call(this, x, y, width, height, style);

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_7___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2___default()(_this), "selectable", false);

    return _this;
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(Box, [{
    key: "draw",
    value: function draw(context) {
      if (this.hidden) return;

      _babel_runtime_helpers_get__WEBPACK_IMPORTED_MODULE_3___default()(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6___default()(Box.prototype), "draw", this).call(this, context);

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

  return Box;
}(_Component__WEBPACK_IMPORTED_MODULE_8__["default"]);



/***/ }),

/***/ "./src/Button.js":
/*!***********************!*\
  !*** ./src/Button.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Button; });
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/assertThisInitialized */ "./node_modules/@babel/runtime/helpers/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_helpers_get__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/get */ "./node_modules/@babel/runtime/helpers/get.js");
/* harmony import */ var _babel_runtime_helpers_get__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_get__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/inherits */ "./node_modules/@babel/runtime/helpers/inherits.js");
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _Row__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./Row */ "./src/Row.js");
/* harmony import */ var _Constants__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./Constants */ "./src/Constants.js");
/* harmony import */ var _Style__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./Style */ "./src/Style.js");









function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6___default()(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6___default()(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5___default()(this, result); }; }

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




var Button = /*#__PURE__*/function (_Row) {
  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4___default()(Button, _Row);

  var _super = _createSuper(Button);

  function Button(x, y, maxWidth, maxHeight, style) {
    var _this;

    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, Button);

    for (var _len = arguments.length, components = new Array(_len > 5 ? _len - 5 : 0), _key = 5; _key < _len; _key++) {
      components[_key - 5] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this, x, y, maxWidth, maxHeight, style].concat(components));

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_7___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2___default()(_this), "selectable", true);

    return _this;
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(Button, [{
    key: "draw",
    value: function draw(context) {
      if (this.hidden) return;

      _babel_runtime_helpers_get__WEBPACK_IMPORTED_MODULE_3___default()(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6___default()(Button.prototype), "draw", this).call(this, context);

      var canvas = context.canvas;
      var ctx = canvas.getContext("2d");
      ctx.save();
      this.drawComponents(ctx);
      ctx.restore();
    }
  }, {
    key: "drawComponents",
    value: function drawComponents(ctx) {
      _babel_runtime_helpers_get__WEBPACK_IMPORTED_MODULE_3___default()(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6___default()(Button.prototype), "draw", this).call(this, ctx);
    }
  }, {
    key: "height",
    get: function get() {
      return (this.maxHeight || _babel_runtime_helpers_get__WEBPACK_IMPORTED_MODULE_3___default()(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6___default()(Button.prototype), "height", this)) + this.style.padding;
    }
  }, {
    key: "width",
    get: function get() {
      return (this.maxWidth || _babel_runtime_helpers_get__WEBPACK_IMPORTED_MODULE_3___default()(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6___default()(Button.prototype), "width", this)) + this.style.padding;
    }
  }, {
    key: "defaultStyle",
    get: function get() {
      return new _Style__WEBPACK_IMPORTED_MODULE_10__["default"]({
        "backgroundColor": _Constants__WEBPACK_IMPORTED_MODULE_9__["default"].Setting.BUTTON_DEFAULT_BACKGROUND,
        "backgroundColorHover": _Constants__WEBPACK_IMPORTED_MODULE_9__["default"].Setting.BUTTON_DEFAULT_HOVER_BACKGROUND,
        "backgroundColorDown": _Constants__WEBPACK_IMPORTED_MODULE_9__["default"].Setting.BUTTON_DEFAULT_CLICK_BACKGROUND,
        "scrollXDisabled": true,
        "scrollYDisabled": true
      });
    }
  }]);

  return Button;
}(_Row__WEBPACK_IMPORTED_MODULE_8__["default"]);



/***/ }),

/***/ "./src/ButtonImage.js":
/*!****************************!*\
  !*** ./src/ButtonImage.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ButtonImage; });
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_get__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/get */ "./node_modules/@babel/runtime/helpers/get.js");
/* harmony import */ var _babel_runtime_helpers_get__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_get__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_helpers_set__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/set */ "./node_modules/@babel/runtime/helpers/set.js");
/* harmony import */ var _babel_runtime_helpers_set__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_set__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/inherits */ "./node_modules/@babel/runtime/helpers/inherits.js");
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _ImageContainer__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./ImageContainer */ "./src/ImageContainer.js");
/* harmony import */ var _Button__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./Button */ "./src/Button.js");
/* harmony import */ var _Style__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./Style */ "./src/Style.js");
/* harmony import */ var _Constants__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./Constants */ "./src/Constants.js");








function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6___default()(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6___default()(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5___default()(this, result); }; }

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





var ButtonImage = /*#__PURE__*/function (_Button) {
  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4___default()(ButtonImage, _Button);

  var _super = _createSuper(ButtonImage);

  function ButtonImage(imgSrc, x, y, alignement, verticalAlignement, width, height, backgroundColor, backgroundColorHover, imageLoader) {
    var _this;

    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, ButtonImage);

    var style = new _Style__WEBPACK_IMPORTED_MODULE_9__["default"]({
      "alignement": alignement,
      "verticalAlignement": verticalAlignement,
      "backgroundColor": backgroundColor || _Constants__WEBPACK_IMPORTED_MODULE_10__["default"].Setting.BUTTON_DEFAULT_BACKGROUND,
      "backgroundColorHover": backgroundColorHover || _Constants__WEBPACK_IMPORTED_MODULE_10__["default"].Setting.BUTTON_DEFAULT_HOVER_BACKGROUND
    });
    _this = _super.call(this, x, y, width, height, style);
    _this.image = new _ImageContainer__WEBPACK_IMPORTED_MODULE_7__["default"](imgSrc, x, y, width, height, new _Style__WEBPACK_IMPORTED_MODULE_9__["default"]({
      "alignement": "center",
      "verticalAlignement": "center"
    }), imageLoader);

    _this.add(_this.image);

    console && console.warn && console.warn(_Constants__WEBPACK_IMPORTED_MODULE_10__["default"].String.NOTICE_MESSAGE + " " + _Constants__WEBPACK_IMPORTED_MODULE_10__["default"].String.BUTTON_IMAGE_DEPRECATED);
    return _this;
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(ButtonImage, [{
    key: "loadImage",
    value: function loadImage(imageLoader) {
      if (this.components[0] instanceof _ImageContainer__WEBPACK_IMPORTED_MODULE_7__["default"]) this.components[0].loadImage(imageLoader);
    }
  }, {
    key: "minWidth",
    set: function set(width) {
      this.image.width = width;

      _babel_runtime_helpers_set__WEBPACK_IMPORTED_MODULE_3___default()(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6___default()(ButtonImage.prototype), "minWidth", width, this, true);
    },
    get: function get() {
      return _babel_runtime_helpers_get__WEBPACK_IMPORTED_MODULE_2___default()(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6___default()(ButtonImage.prototype), "minWidth", this);
    }
  }, {
    key: "minHeight",
    set: function set(height) {
      this.image.height = height;

      _babel_runtime_helpers_set__WEBPACK_IMPORTED_MODULE_3___default()(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6___default()(ButtonImage.prototype), "minHeight", height, this, true);
    },
    get: function get() {
      return _babel_runtime_helpers_get__WEBPACK_IMPORTED_MODULE_2___default()(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6___default()(ButtonImage.prototype), "minHeight", this);
    }
  }, {
    key: "maxWidth",
    set: function set(width) {
      this.image.width = width;

      _babel_runtime_helpers_set__WEBPACK_IMPORTED_MODULE_3___default()(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6___default()(ButtonImage.prototype), "maxWidth", width, this, true);
    },
    get: function get() {
      return _babel_runtime_helpers_get__WEBPACK_IMPORTED_MODULE_2___default()(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6___default()(ButtonImage.prototype), "maxWidth", this);
    }
  }, {
    key: "maxHeight",
    set: function set(height) {
      this.image.height = height;

      _babel_runtime_helpers_set__WEBPACK_IMPORTED_MODULE_3___default()(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6___default()(ButtonImage.prototype), "maxHeight", height, this, true);
    },
    get: function get() {
      return _babel_runtime_helpers_get__WEBPACK_IMPORTED_MODULE_2___default()(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6___default()(ButtonImage.prototype), "maxHeight", this);
    }
  }, {
    key: "width",
    set: function set(width) {
      this.minWidth = width;
      this.maxWidth = width;
    },
    get: function get() {
      return _babel_runtime_helpers_get__WEBPACK_IMPORTED_MODULE_2___default()(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6___default()(ButtonImage.prototype), "width", this);
    }
  }, {
    key: "height",
    set: function set(height) {
      this.minHeight = height;
      this.maxHeight = height;
    },
    get: function get() {
      return _babel_runtime_helpers_get__WEBPACK_IMPORTED_MODULE_2___default()(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6___default()(ButtonImage.prototype), "height", this);
    }
  }]);

  return ButtonImage;
}(_Button__WEBPACK_IMPORTED_MODULE_8__["default"]);



/***/ }),

/***/ "./src/Canvas.js":
/*!***********************!*\
  !*** ./src/Canvas.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Canvas; });
/* harmony import */ var _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/toConsumableArray */ "./node_modules/@babel/runtime/helpers/toConsumableArray.js");
/* harmony import */ var _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_helpers_classPrivateFieldGet__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/classPrivateFieldGet */ "./node_modules/@babel/runtime/helpers/classPrivateFieldGet.js");
/* harmony import */ var _babel_runtime_helpers_classPrivateFieldGet__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classPrivateFieldGet__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_helpers_classPrivateFieldSet__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/classPrivateFieldSet */ "./node_modules/@babel/runtime/helpers/classPrivateFieldSet.js");
/* harmony import */ var _babel_runtime_helpers_classPrivateFieldSet__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classPrivateFieldSet__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _Constants__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Constants */ "./src/Constants.js");
/* harmony import */ var _Utils__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Utils */ "./src/Utils.js");
/* harmony import */ var _Scene__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./Scene */ "./src/Scene.js");
/* harmony import */ var _ReactorCanvas__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./ReactorCanvas */ "./src/ReactorCanvas.js");
/* harmony import */ var _Menu__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./Menu */ "./src/Menu.js");
/* harmony import */ var _Label__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./Label */ "./src/Label.js");
/* harmony import */ var _Style__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./Style */ "./src/Style.js");
/* harmony import */ var _Button__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./Button */ "./src/Button.js");






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









var _lastFrameTime = new WeakMap();

var _width = new WeakMap();

var _height = new WeakMap();

var Canvas = /*#__PURE__*/function () {
  function Canvas(scene, canvas, width, height, autoResize, maxFPS) {
    var _this = this;

    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1___default()(this, Canvas);

    _lastFrameTime.set(this, {
      writable: true,
      value: void 0
    });

    _width.set(this, {
      writable: true,
      value: void 0
    });

    _height.set(this, {
      writable: true,
      value: void 0
    });

    this.canvas = canvas || document.createElement("canvas");
    this.container = document.createElement("div");
    this.width = width || _Constants__WEBPACK_IMPORTED_MODULE_5__["default"].Setting.CANVAS_WIDTH;
    this.height = height || _Constants__WEBPACK_IMPORTED_MODULE_5__["default"].Setting.CANVAS_HEIGHT;
    this.scene = scene;
    this.container.appendChild(this.canvas);
    this.started = false;
    this.init = false;
    this.maxFPS = maxFPS || -1;

    _babel_runtime_helpers_classPrivateFieldSet__WEBPACK_IMPORTED_MODULE_4___default()(this, _lastFrameTime, 0);

    this.hasError = false;
    this.fullscreen = false;
    this.fullpage = false; // Error message screen

    var buttonSceneError = new _Button__WEBPACK_IMPORTED_MODULE_12__["default"](null, null, null, null, new _Style__WEBPACK_IMPORTED_MODULE_11__["default"]({
      "alignement": "center",
      "backgroundColor": _Constants__WEBPACK_IMPORTED_MODULE_5__["default"].Setting.BUTTON_DEFAULT_ALTERNATIVE_BACKGROUND
    }), new _Label__WEBPACK_IMPORTED_MODULE_10__["default"](_Constants__WEBPACK_IMPORTED_MODULE_5__["default"].String.RETRY, null, null, new _Style__WEBPACK_IMPORTED_MODULE_11__["default"]({
      "fontColor": "white",
      "alignement": "center"
    })));
    var menuSceneError = new _Menu__WEBPACK_IMPORTED_MODULE_9__["default"](new _Style__WEBPACK_IMPORTED_MODULE_11__["default"]({
      "spaceBetweenComponents": 15
    }), new _Label__WEBPACK_IMPORTED_MODULE_10__["default"](_Constants__WEBPACK_IMPORTED_MODULE_5__["default"].String.ERROR_MESSAGE_CANVAS_LABEL, null, null, new _Style__WEBPACK_IMPORTED_MODULE_11__["default"]({
      "fontColor": "white",
      "alignement": "center"
    })), buttonSceneError);
    menuSceneError.enable();
    this.sceneError = new _Scene__WEBPACK_IMPORTED_MODULE_7__["default"](menuSceneError);
    this.scenePrevious = this.scene;
    buttonSceneError.addClickAction(function () {
      _this.hasError = false;
      _this.scene = _this.scenePrevious;
    }); // Reactors/events

    this.reactor = new _ReactorCanvas__WEBPACK_IMPORTED_MODULE_8__["default"]();
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

    if (_Constants__WEBPACK_IMPORTED_MODULE_5__["default"].Setting.DISABLE_OPTIMIZATIONS) {
      console && console.info(_Constants__WEBPACK_IMPORTED_MODULE_5__["default"].String.NOTICE_MESSAGE + " " + _Constants__WEBPACK_IMPORTED_MODULE_5__["default"].String.OPTIMIZATION_DISABLED);
    }

    if (_Constants__WEBPACK_IMPORTED_MODULE_5__["default"].Setting.DISABLE_CONTAINERS_CUTTING) {
      console && console.info(_Constants__WEBPACK_IMPORTED_MODULE_5__["default"].String.NOTICE_MESSAGE + " " + _Constants__WEBPACK_IMPORTED_MODULE_5__["default"].String.CONTAINER_CUTTING_DISABLED);
    }
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2___default()(Canvas, [{
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
          ctx.scale(_Constants__WEBPACK_IMPORTED_MODULE_5__["default"].Setting.PIXEL_RATIO, _Constants__WEBPACK_IMPORTED_MODULE_5__["default"].Setting.PIXEL_RATIO);
          this.scene.draw(ctx);
        } catch (e) {
          this.hasError = true;
          this.scene = this.sceneError;
          console.error(_Constants__WEBPACK_IMPORTED_MODULE_5__["default"].String.ERROR_MESSAGE + " " + _Constants__WEBPACK_IMPORTED_MODULE_5__["default"].String.ERROR_MESSAGE_CANVAS + "\n", e);
        }
      }
    }
  }, {
    key: "drawClear",
    value: function drawClear(ctx) {
      _Utils__WEBPACK_IMPORTED_MODULE_6__["default"].clear(ctx);
    }
  }, {
    key: "startDraw",
    value: function startDraw(func) {
      var _this2 = this;

      this.started = true;
      requestAnimationFrame(function (time) {
        if (_this2.started) {
          var offsetFrame = time - _babel_runtime_helpers_classPrivateFieldGet__WEBPACK_IMPORTED_MODULE_3___default()(_this2, _lastFrameTime);

          _this2.fullscreen = document.fullscreenElement == _this2.canvas || document.fullscreenElement == _this2.container;

          if (_Constants__WEBPACK_IMPORTED_MODULE_5__["default"].Setting.ENABLE_PIXEL_RATIO_RESIZING) {
            _Constants__WEBPACK_IMPORTED_MODULE_5__["default"].Setting.PIXEL_RATIO = window.devicePixelRatio; // Update the device pixel ratio, only in fullscreen mode/fullpage mode
          } else {
            _Constants__WEBPACK_IMPORTED_MODULE_5__["default"].Setting.PIXEL_RATIO = 1;
          }

          _Utils__WEBPACK_IMPORTED_MODULE_6__["default"].autoDPI(_this2.canvas);

          if (_this2.maxFPS < 1 || offsetFrame > 1000 / _this2.maxFPS) {
            _babel_runtime_helpers_classPrivateFieldSet__WEBPACK_IMPORTED_MODULE_4___default()(_this2, _lastFrameTime, time);

            _this2.draw();
          }

          _this2.startDraw(func);

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
      _Utils__WEBPACK_IMPORTED_MODULE_6__["default"].toggleFullscreen(this.canvas, this.container);
    }
  }, {
    key: "toggleFullpage",
    value: function toggleFullpage() {
      _Utils__WEBPACK_IMPORTED_MODULE_6__["default"].toggleFullpage(this.canvas, this.container);
      this.fullpage = !this.fullpage;
    }
  }, {
    key: "autoResize",
    value: function autoResize() {
      _Utils__WEBPACK_IMPORTED_MODULE_6__["default"].enableAutoResizeCanvas(this.canvas, this.container, this.width, this.height);
    }
  }, {
    key: "getContext",
    value: function getContext(context) {
      return this.canvas ? this.canvas.getContext(context ? context : "2d") : null;
    }
  }, {
    key: "createEvents",
    value: function createEvents() {
      var _this3 = this;

      if (!this.init && this.canvas) {
        ["mousemove", "click", "mousedown", "mouseup", "wheel"].forEach(function (eventName) {
          _this3.canvas.addEventListener(eventName, function (event) {
            var mousePosition = _this3.getMousePos(event);

            _this3.doEvents(event, eventName, mousePosition);

            event.preventDefault();
          }, false);
        });
        ["touchstart", "touchmove", "touchend"].forEach(function (eventName) {
          _this3.canvas.addEventListener(eventName, function (event) {
            var changedTouches = event.changedTouches[0];

            var position = _this3.getMousePos(changedTouches);

            _this3.doEvents(event, eventName, position);
          });
        });
        this.init = true;
      }
    }
  }, {
    key: "doEvents",
    value: function doEvents(event, eventName, position) {
      var _this4 = this;

      var components = this.getComponentsAtPosition(position); // Get all elements at the current position

      this.reactor.dispatchEvent(eventName, event, false); // Dispatch to all components to disable them (call with false)

      _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0___default()(components).reverse().forEach(function (component) {
        return _this4.reactor.dispatchEventComponent(eventName, component, event, true);
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
      return _Utils__WEBPACK_IMPORTED_MODULE_6__["default"].getMousePos(this.canvas, event);
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
      var _this5 = this;

      var start = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this.scene;
      var allComponents = this.scene.getComponentsTree(start);
      var result = [start];

      if (allComponents.childs) {
        allComponents.childs.sort(_Scene__WEBPACK_IMPORTED_MODULE_7__["default"].sortComponentsTree).reverse().some(function (child) {
          if (child.component.isInside(mousePosition) && !child.component.hidden && !child.component.disabled) {
            result.push.apply(result, _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0___default()(_this5.getComponentsAtPosition(mousePosition, child.component)));
            return true;
          }
        });
      }

      return result;
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
      return this.canvas ? _Utils__WEBPACK_IMPORTED_MODULE_6__["default"].getCanvasWidth(this.canvas) : _babel_runtime_helpers_classPrivateFieldGet__WEBPACK_IMPORTED_MODULE_3___default()(this, _width);
    },
    set: function set(width) {
      if (width != _babel_runtime_helpers_classPrivateFieldGet__WEBPACK_IMPORTED_MODULE_3___default()(this, _width)) {
        _babel_runtime_helpers_classPrivateFieldSet__WEBPACK_IMPORTED_MODULE_4___default()(this, _width, width);

        this.canvas.width = width;
        this.scene && this.scene.reactor.dispatchEvent("onChange", this);
      }
    }
  }, {
    key: "height",
    get: function get() {
      return this.canvas ? _Utils__WEBPACK_IMPORTED_MODULE_6__["default"].getCanvasHeight(this.canvas) : _babel_runtime_helpers_classPrivateFieldGet__WEBPACK_IMPORTED_MODULE_3___default()(this, _height);
    },
    set: function set(height) {
      if (height != _babel_runtime_helpers_classPrivateFieldGet__WEBPACK_IMPORTED_MODULE_3___default()(this, _height)) {
        _babel_runtime_helpers_classPrivateFieldSet__WEBPACK_IMPORTED_MODULE_4___default()(this, _height, height);

        this.canvas.height = height;
        this.scene && this.scene.reactor.dispatchEvent("onChange", this);
      }
    }
  }, {
    key: "style",
    get: function get() {
      return this.canvas ? this.canvas.style : null;
    }
  }]);

  return Canvas;
}();



/***/ }),

/***/ "./src/Circle.js":
/*!***********************!*\
  !*** ./src/Circle.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Circle; });
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/assertThisInitialized */ "./node_modules/@babel/runtime/helpers/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_helpers_set__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/set */ "./node_modules/@babel/runtime/helpers/set.js");
/* harmony import */ var _babel_runtime_helpers_set__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_set__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_helpers_get__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/get */ "./node_modules/@babel/runtime/helpers/get.js");
/* harmony import */ var _babel_runtime_helpers_get__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_get__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/inherits */ "./node_modules/@babel/runtime/helpers/inherits.js");
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _Component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./Component */ "./src/Component.js");
/* harmony import */ var _Constants__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./Constants */ "./src/Constants.js");
/* harmony import */ var _Utils__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./Utils */ "./src/Utils.js");
/* harmony import */ var _Style__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./Style */ "./src/Style.js");










function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_7___default()(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_7___default()(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_6___default()(this, result); }; }

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





var Circle = /*#__PURE__*/function (_Component) {
  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5___default()(Circle, _Component);

  var _super = _createSuper(Circle);

  function Circle(x, y, width, style) {
    var _this;

    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, Circle);

    _this = _super.call(this, x, y, width, width, style);

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_8___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2___default()(_this), "selectable", false);

    return _this;
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(Circle, [{
    key: "draw",
    value: function draw(context) {
      if (this.hidden) return;

      _babel_runtime_helpers_get__WEBPACK_IMPORTED_MODULE_4___default()(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_7___default()(Circle.prototype), "draw", this).call(this, context);

      var canvas = context.canvas;
      var ctx = canvas.getContext("2d");
      _Utils__WEBPACK_IMPORTED_MODULE_11__["default"].drawCircle(ctx, this.x, this.y, this.width, this.style.lineWidth, this.style.color, this.style.lineCap, this.style.fill, this.style.fillColor);
      this.init = true;
    }
  }, {
    key: "width",
    get: function get() {
      return _babel_runtime_helpers_get__WEBPACK_IMPORTED_MODULE_4___default()(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_7___default()(Circle.prototype), "width", this) + this.style.lineWidth;
    },
    set: function set(width) {
      _babel_runtime_helpers_set__WEBPACK_IMPORTED_MODULE_3___default()(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_7___default()(Circle.prototype), "width", width, this, true);
    }
  }, {
    key: "height",
    get: function get() {
      return _babel_runtime_helpers_get__WEBPACK_IMPORTED_MODULE_4___default()(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_7___default()(Circle.prototype), "height", this) + this.style.lineWidth;
    },
    set: function set(height) {
      _babel_runtime_helpers_set__WEBPACK_IMPORTED_MODULE_3___default()(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_7___default()(Circle.prototype), "height", height, this, true);
    }
  }, {
    key: "defaultStyle",
    get: function get() {
      return new _Style__WEBPACK_IMPORTED_MODULE_12__["default"]({
        "lineWidth": _Constants__WEBPACK_IMPORTED_MODULE_10__["default"].Setting.CIRCLE_DEFAULT_LINE_SIZE,
        "color": _Constants__WEBPACK_IMPORTED_MODULE_10__["default"].Setting.CIRCLE_DEFAULT_COLOR,
        "fill": _Constants__WEBPACK_IMPORTED_MODULE_10__["default"].Setting.CIRCLE_DEFAULT_FILL,
        "lineCap": _Constants__WEBPACK_IMPORTED_MODULE_10__["default"].Setting.CIRCLE_DEFAULT_LINE_CAP,
        "fillColor": _Constants__WEBPACK_IMPORTED_MODULE_10__["default"].Setting.CIRCLE_DEFAULT_FILL_COLOR
      });
    }
  }]);

  return Circle;
}(_Component__WEBPACK_IMPORTED_MODULE_9__["default"]);



/***/ }),

/***/ "./src/Col.js":
/*!********************!*\
  !*** ./src/Col.js ***!
  \********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Col; });
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/assertThisInitialized */ "./node_modules/@babel/runtime/helpers/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_helpers_get__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/get */ "./node_modules/@babel/runtime/helpers/get.js");
/* harmony import */ var _babel_runtime_helpers_get__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_get__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/inherits */ "./node_modules/@babel/runtime/helpers/inherits.js");
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _babel_runtime_helpers_classPrivateFieldGet__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @babel/runtime/helpers/classPrivateFieldGet */ "./node_modules/@babel/runtime/helpers/classPrivateFieldGet.js");
/* harmony import */ var _babel_runtime_helpers_classPrivateFieldGet__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classPrivateFieldGet__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _babel_runtime_helpers_classPrivateFieldSet__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @babel/runtime/helpers/classPrivateFieldSet */ "./node_modules/@babel/runtime/helpers/classPrivateFieldSet.js");
/* harmony import */ var _babel_runtime_helpers_classPrivateFieldSet__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classPrivateFieldSet__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _Component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./Component */ "./src/Component.js");
/* harmony import */ var _Container__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./Container */ "./src/Container.js");
/* harmony import */ var _Utils__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./Utils */ "./src/Utils.js");
/* harmony import */ var _Constants__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./Constants */ "./src/Constants.js");











function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6___default()(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6___default()(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5___default()(this, result); }; }

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





var _innerHeight = new WeakMap();

var _innerWidth = new WeakMap();

var Col = /*#__PURE__*/function (_Container) {
  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4___default()(Col, _Container);

  var _super = _createSuper(Col);

  function Col(x, y, maxWidth, maxHeight, style) {
    var _this;

    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, Col);

    for (var _len = arguments.length, components = new Array(_len > 5 ? _len - 5 : 0), _key = 5; _key < _len; _key++) {
      components[_key - 5] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this, x, y, maxWidth, maxHeight, style].concat(components));

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_7___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2___default()(_this), "selectable", false);

    _innerHeight.set(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2___default()(_this), {
      writable: true,
      value: 0
    });

    _innerWidth.set(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2___default()(_this), {
      writable: true,
      value: 0
    });

    if (!_Constants__WEBPACK_IMPORTED_MODULE_13__["default"].Setting.DISABLE_EXPERIMENTAL_OPTIMIZATIONS) {
      _this.updateInnerWidth();

      _this.updateInnerHeight();

      _this.addChangeAction(function () {
        _this.updateInnerWidth();

        _this.updateInnerHeight();
      });
    }

    return _this;
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(Col, [{
    key: "draw",
    value: function draw(context) {
      var _this2 = this;

      if (this.hidden) return;

      _babel_runtime_helpers_get__WEBPACK_IMPORTED_MODULE_3___default()(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6___default()(Col.prototype), "draw", this).call(this, context);

      var canvas = context.canvas;
      var ctx = canvas.getContext("2d");
      ctx.save();
      var ctxTemp = ctx;

      if (this.isCutting) {
        ctxTemp = this.canvasTmp.getContext("2d");
        ctxTemp.scale(_Constants__WEBPACK_IMPORTED_MODULE_13__["default"].Setting.PIXEL_RATIO, _Constants__WEBPACK_IMPORTED_MODULE_13__["default"].Setting.PIXEL_RATIO);
      }

      if (_babel_runtime_helpers_get__WEBPACK_IMPORTED_MODULE_3___default()(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6___default()(Col.prototype), "components", this) != null) {
        var currentY = this.style.padding;

        _babel_runtime_helpers_get__WEBPACK_IMPORTED_MODULE_3___default()(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6___default()(Col.prototype), "components", this).forEach(function (component) {
          currentY = _this2.drawComponent(component, currentY, ctxTemp);
        });
      }

      if (this.isCutting) {
        _Utils__WEBPACK_IMPORTED_MODULE_12__["default"].drawImageData(ctx, this.canvasTmp, this.x, this.y, this.width, this.height, this.x * _Constants__WEBPACK_IMPORTED_MODULE_13__["default"].Setting.PIXEL_RATIO, this.y * _Constants__WEBPACK_IMPORTED_MODULE_13__["default"].Setting.PIXEL_RATIO, this.width * _Constants__WEBPACK_IMPORTED_MODULE_13__["default"].Setting.PIXEL_RATIO, this.height * _Constants__WEBPACK_IMPORTED_MODULE_13__["default"].Setting.PIXEL_RATIO);
      }

      _babel_runtime_helpers_get__WEBPACK_IMPORTED_MODULE_3___default()(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6___default()(Col.prototype), "drawScrollbars", this).call(this, ctx);

      ctx.restore();
    }
  }, {
    key: "drawComponent",
    value: function drawComponent(component, currentY, ctx) {
      if (component instanceof _Component__WEBPACK_IMPORTED_MODULE_10__["default"]) {
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

      _babel_runtime_helpers_get__WEBPACK_IMPORTED_MODULE_3___default()(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6___default()(Col.prototype), "components", this).forEach(function (component) {
        if (!component.hidden) totalHeight += component.height;
      });

      _babel_runtime_helpers_classPrivateFieldSet__WEBPACK_IMPORTED_MODULE_9___default()(this, _innerHeight, totalHeight + this.style.spaceBetweenComponents * (_babel_runtime_helpers_get__WEBPACK_IMPORTED_MODULE_3___default()(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6___default()(Col.prototype), "components", this).length - 1) + this.style.padding);
    }
  }, {
    key: "updateInnerWidth",
    value: function updateInnerWidth() {
      var maxWidth = 0;

      _babel_runtime_helpers_get__WEBPACK_IMPORTED_MODULE_3___default()(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6___default()(Col.prototype), "components", this).forEach(function (component) {
        if (component.width > maxWidth && !component.hidden) maxWidth = component.width;
      });

      _babel_runtime_helpers_classPrivateFieldSet__WEBPACK_IMPORTED_MODULE_9___default()(this, _innerWidth, maxWidth + this.style.padding);
    }
  }, {
    key: "innerHeight",
    get: function get() {
      if (_Constants__WEBPACK_IMPORTED_MODULE_13__["default"].Setting.DISABLE_EXPERIMENTAL_OPTIMIZATIONS) this.updateInnerHeight();
      return _babel_runtime_helpers_classPrivateFieldGet__WEBPACK_IMPORTED_MODULE_8___default()(this, _innerHeight);
    }
  }, {
    key: "innerWidth",
    get: function get() {
      if (_Constants__WEBPACK_IMPORTED_MODULE_13__["default"].Setting.DISABLE_EXPERIMENTAL_OPTIMIZATIONS) this.updateInnerWidth();
      return _babel_runtime_helpers_classPrivateFieldGet__WEBPACK_IMPORTED_MODULE_8___default()(this, _innerWidth);
    }
  }, {
    key: "width",
    get: function get() {
      var width = this.innerWidth || this.parent && this.parent.width;
      var min = this.maxWidth ? Math.min(this.maxWidth, width) : null;
      return this.minWidth ? Math.max(this.minWidth, min || width) : min || width;
    }
  }, {
    key: "height",
    get: function get() {
      var height = this.innerHeight || this.parent && this.parent.height;
      var min = this.maxHeight ? Math.min(this.maxHeight, height) : null;
      return this.minHeight ? Math.max(this.minHeight, min || height) : min || height;
    }
  }, {
    key: "defaultStyle",
    get: function get() {
      return _babel_runtime_helpers_get__WEBPACK_IMPORTED_MODULE_3___default()(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6___default()(Col.prototype), "defaultStyle", this);
    }
  }]);

  return Col;
}(_Container__WEBPACK_IMPORTED_MODULE_11__["default"]);



/***/ }),

/***/ "./src/Component.js":
/*!**************************!*\
  !*** ./src/Component.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Component; });
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_helpers_classPrivateFieldGet__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/classPrivateFieldGet */ "./node_modules/@babel/runtime/helpers/classPrivateFieldGet.js");
/* harmony import */ var _babel_runtime_helpers_classPrivateFieldGet__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classPrivateFieldGet__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_helpers_classPrivateFieldSet__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/classPrivateFieldSet */ "./node_modules/@babel/runtime/helpers/classPrivateFieldSet.js");
/* harmony import */ var _babel_runtime_helpers_classPrivateFieldSet__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classPrivateFieldSet__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _Constants__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Constants */ "./src/Constants.js");
/* harmony import */ var _Style__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Style */ "./src/Style.js");
/* harmony import */ var _Reactor__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./Reactor */ "./src/Reactor.js");






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




var _width = new WeakMap();

var _height = new WeakMap();

var _x = new WeakMap();

var _y = new WeakMap();

var _disabled = new WeakMap();

var _selected = new WeakMap();

var _style = new WeakMap();

var Component = /*#__PURE__*/function () {
  function Component(x, y, width, height, style) {
    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, Component);

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2___default()(this, "selectable", true);

    _width.set(this, {
      writable: true,
      value: 0
    });

    _height.set(this, {
      writable: true,
      value: 0
    });

    _x.set(this, {
      writable: true,
      value: 0
    });

    _y.set(this, {
      writable: true,
      value: 0
    });

    _disabled.set(this, {
      writable: true,
      value: false
    });

    _selected.set(this, {
      writable: true,
      value: false
    });

    _style.set(this, {
      writable: true,
      value: void 0
    });

    _babel_runtime_helpers_classPrivateFieldSet__WEBPACK_IMPORTED_MODULE_4___default()(this, _x, x || 0);

    _babel_runtime_helpers_classPrivateFieldSet__WEBPACK_IMPORTED_MODULE_4___default()(this, _y, y || 0);

    _babel_runtime_helpers_classPrivateFieldSet__WEBPACK_IMPORTED_MODULE_4___default()(this, _width, width);

    _babel_runtime_helpers_classPrivateFieldSet__WEBPACK_IMPORTED_MODULE_4___default()(this, _height, height);

    this.canvas;
    this.parent; // Style

    this.style = style; // Functions triggered by events

    this.reactor = new _Reactor__WEBPACK_IMPORTED_MODULE_7__["default"]();
    this.reactor.registerEvent("onClick");
    this.reactor.registerEvent("onHover");
    this.reactor.registerEvent("onDown");
    this.reactor.registerEvent("onScroll");
    this.reactor.registerEvent("onMove");
    this.reactor.registerEvent("onUp");
    this.reactor.registerEvent("onChange"); // State

    this.init = false;
    this.hasInitEvents = false;

    _babel_runtime_helpers_classPrivateFieldSet__WEBPACK_IMPORTED_MODULE_4___default()(this, _selected, false);

    this.clicked = false;
    this.hovered = false;

    _babel_runtime_helpers_classPrivateFieldSet__WEBPACK_IMPORTED_MODULE_4___default()(this, _disabled, false); // Scroll state


    this.offsetScrollX = 0;
    this.offsetScrollY = 0; // Move event

    this.offsetMoveX = 0;
    this.offsetMoveY = 0;
    this.moveEventStartX = 0;
    this.moveEventStartY = 0; // Touch events

    this.touchEventStartX = 0;
    this.touchEventStartY = 0;
    this.touchEventStartTimestamp = 0;
    this.tooltip;
    this.initEvents();
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(Component, [{
    key: "initEvents",
    value: function initEvents() {
      var _this = this;

      if (!this.hasInitEvents && this.canvas != null) {
        this.canvas.addEventListener("mousemove", this, function (event, result) {
          if (!_this.disabled) {
            var mousePosition = _this.getMousePos(event);

            if (_this.clicked) {
              var deltaX = -event.movementX;
              var deltaY = -event.movementY;
              _this.offsetMoveX += deltaX;
              _this.offsetMoveY += deltaY;

              if (_this.reactor) {
                _this.reactor.dispatchEvent("onMove", deltaX, deltaY, mousePosition);
              }

              _this.moveEventStartX = mousePosition.x;
              _this.moveEventStartY = mousePosition.y;
            }

            if (result) {
              if (_this.reactor && !_this.disabled) {
                _this.reactor.dispatchEvent("onHover", mousePosition);
              }

              if (_this.tooltip) {
                _this.tooltip.x = mousePosition.x + 10;
                _this.tooltip.y = mousePosition.y + 10;

                _this.tooltip.enable();
              }

              _this.hovered = true;
            } else {
              _this.hovered = false;
              if (_this.tooltip) _this.tooltip.disable();
            }
          } else {
            _this.hovered = false;
            _this.clicked = false;
            if (_this.tooltip) _this.tooltip.disable();
          }
        });
        this.canvas.addEventListener("click", this, function (event, result) {
          if (!_this.disabled) {
            var mousePosition = _this.getMousePos(event);

            if (result && _this.hovered) {
              if (_this.reactor) {
                _this.reactor.dispatchEvent("onClick", mousePosition);
              }

              _this.selected = true;
            } else {
              _this.clicked = false;
              _this.selected = false;
            }
          } else {
            _this.hovered = false;
            _this.clicked = false;
          }
        });
        this.canvas.addEventListener("mousedown", this, function (event, result) {
          if (!_this.disabled) {
            var mousePosition = _this.getMousePos(event);

            if (result) {
              if (_this.reactor) {
                _this.reactor.dispatchEvent("onDown", mousePosition);
              }

              _this.clicked = true;
              _this.moveEventStartX = mousePosition.x;
              _this.moveEventStartY = mousePosition.y;
            }
          } else {
            _this.hovered = false;
            _this.clicked = false;
          }
        });
        this.canvas.addEventListener("mouseup", this, function (event) {
          if (!_this.disabled) {
            var mousePosition = _this.getMousePos(event);

            if (_this.reactor) {
              _this.reactor.dispatchEvent("onUp", mousePosition);
            }

            _this.clicked = false;
          }
        });
        this.canvas.addEventListener("wheel", this, function (event) {
          if (_this.hovered && !_this.disabled && !_this.scrollDisabled) {
            _this.offsetScrollX += event.deltaX;
            _this.offsetScrollY += event.deltaY;

            if (_this.reactor) {
              _this.reactor.dispatchEvent("onScroll", event.deltaX, event.deltaY);
            }
          }
        });

        var touchScrollEvent = function touchScrollEvent(event) {
          var changedTouches = event.changedTouches[0];

          var position = _this.getMousePos(changedTouches);

          if (_this.hovered && !_this.disabled && !_this.scrollDisabled) {
            var deltaX = _this.touchEventStartX - position.x;
            var deltaY = _this.touchEventStartY - position.y;
            _this.offsetScrollX += deltaX;
            _this.offsetScrollY += deltaY;

            if (_this.reactor) {
              _this.reactor.dispatchEvent("onScroll", deltaX, deltaY, position);
            }

            _this.touchEventStartX = position.x;
            _this.touchEventStartY = position.y;
          }
        };

        var touchStartEndEvent = function touchStartEndEvent(event, result) {
          var changedTouches = event.changedTouches[0];

          var position = _this.getMousePos(changedTouches);

          if (result) {
            _this.hovered = true;
            _this.selected = true;
          } else {
            _this.hovered = false;
            _this.selected = false;
          }

          if (_this.hovered && !_this.disabled) {
            _this.touchEventStartX = position.x;
            _this.touchEventStartY = position.y;
            _this.touchEventStartTimestamp = event.timestamp;
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
  }, {
    key: "compareToComponent",
    value: function compareToComponent(otherComponent) {
      return 0;
    }
  }, {
    key: "compareToMenu",
    value: function compareToMenu(otherComponent) {
      return -1;
    }
  }, {
    key: "compareToTooltip",
    value: function compareToTooltip(otherComponent) {
      return -1;
    }
  }, {
    key: "compareToNotification",
    value: function compareToNotification(otherComponent) {
      return -1;
    }
  }, {
    key: "compareToScrollbar",
    value: function compareToScrollbar(otherComponent) {
      return -1;
    }
  }, {
    key: "disabled",
    get: function get() {
      return _babel_runtime_helpers_classPrivateFieldGet__WEBPACK_IMPORTED_MODULE_3___default()(this, _disabled) || this.parent && this.parent.disabled;
    },
    set: function set(disabled) {
      if (disabled != _babel_runtime_helpers_classPrivateFieldGet__WEBPACK_IMPORTED_MODULE_3___default()(this, _disabled)) {
        _babel_runtime_helpers_classPrivateFieldSet__WEBPACK_IMPORTED_MODULE_4___default()(this, _disabled, disabled);

        this.reactor && this.reactor.dispatchEvent("onChange", this);
      }
    }
  }, {
    key: "height",
    get: function get() {
      return _babel_runtime_helpers_classPrivateFieldGet__WEBPACK_IMPORTED_MODULE_3___default()(this, _height);
    },
    set: function set(height) {
      if (height != _babel_runtime_helpers_classPrivateFieldGet__WEBPACK_IMPORTED_MODULE_3___default()(this, _height)) {
        _babel_runtime_helpers_classPrivateFieldSet__WEBPACK_IMPORTED_MODULE_4___default()(this, _height, height);

        this.reactor && this.reactor.dispatchEvent("onChange", this);
      }
    }
  }, {
    key: "width",
    get: function get() {
      return _babel_runtime_helpers_classPrivateFieldGet__WEBPACK_IMPORTED_MODULE_3___default()(this, _width);
    },
    set: function set(width) {
      if (width != _babel_runtime_helpers_classPrivateFieldGet__WEBPACK_IMPORTED_MODULE_3___default()(this, _width)) {
        _babel_runtime_helpers_classPrivateFieldSet__WEBPACK_IMPORTED_MODULE_4___default()(this, _width, width);

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

        if (this.style.alignement == _Constants__WEBPACK_IMPORTED_MODULE_5__["default"].Alignement.CENTER) {
          return parent.x + parentWidth / 2 - this.width / 2;
        } else if (this.style.alignement == _Constants__WEBPACK_IMPORTED_MODULE_5__["default"].Alignement.RIGHT) {
          return parent.x + parentWidth - this.width - parentPadding;
        } else if (this.style.alignement == _Constants__WEBPACK_IMPORTED_MODULE_5__["default"].Alignement.LEFT) {
          return parent.x + parentPadding;
        }
      } else if (parent) {
        return parent.x + _babel_runtime_helpers_classPrivateFieldGet__WEBPACK_IMPORTED_MODULE_3___default()(this, _x);
      }

      return _babel_runtime_helpers_classPrivateFieldGet__WEBPACK_IMPORTED_MODULE_3___default()(this, _x);
    },
    set: function set(x) {
      _babel_runtime_helpers_classPrivateFieldSet__WEBPACK_IMPORTED_MODULE_4___default()(this, _x, x);

      this.reactor && this.reactor.dispatchEvent("onChange", this);
    }
  }, {
    key: "y",
    get: function get() {
      var parent = this.parent || this.canvas;

      if (this.style.verticalAlignement && parent) {
        var parentHeight = parent.height;
        var parentPadding = parent.style && parent.style.padding || 0;

        if (this.style.verticalAlignement == _Constants__WEBPACK_IMPORTED_MODULE_5__["default"].VerticalAlignement.BOTTOM) {
          return parent.y + parentHeight - this.height - parentPadding;
        } else if (this.style.verticalAlignement == _Constants__WEBPACK_IMPORTED_MODULE_5__["default"].VerticalAlignement.CENTER) {
          return parent.y + parentHeight / 2 - this.height / 2;
        } else if (this.style.verticalAlignement == _Constants__WEBPACK_IMPORTED_MODULE_5__["default"].VerticalAlignement.TOP) {
          return parent.y + parentPadding;
        }
      } else if (parent) {
        return parent.y + _babel_runtime_helpers_classPrivateFieldGet__WEBPACK_IMPORTED_MODULE_3___default()(this, _y);
      }

      return _babel_runtime_helpers_classPrivateFieldGet__WEBPACK_IMPORTED_MODULE_3___default()(this, _y);
    },
    set: function set(y) {
      _babel_runtime_helpers_classPrivateFieldSet__WEBPACK_IMPORTED_MODULE_4___default()(this, _y, y);

      this.reactor && this.reactor.dispatchEvent("onChange", this);
    }
  }, {
    key: "defaultStyle",
    get: function get() {
      return new _Style__WEBPACK_IMPORTED_MODULE_6__["default"]({
        "padding": _Constants__WEBPACK_IMPORTED_MODULE_5__["default"].Setting.DEFAULT_PADDING,
        "spaceBetweenComponents": _Constants__WEBPACK_IMPORTED_MODULE_5__["default"].Setting.DEFAULT_SPACING
      });
    }
  }, {
    key: "style",
    get: function get() {
      return _babel_runtime_helpers_classPrivateFieldGet__WEBPACK_IMPORTED_MODULE_3___default()(this, _style) || this.defaultStyle;
    },
    set: function set(style) {
      _babel_runtime_helpers_classPrivateFieldSet__WEBPACK_IMPORTED_MODULE_4___default()(this, _style, new _Style__WEBPACK_IMPORTED_MODULE_6__["default"]());

      _babel_runtime_helpers_classPrivateFieldGet__WEBPACK_IMPORTED_MODULE_3___default()(this, _style).setAll(this.defaultStyle.getStyles());

      if (style && style instanceof _Style__WEBPACK_IMPORTED_MODULE_6__["default"]) {
        _babel_runtime_helpers_classPrivateFieldGet__WEBPACK_IMPORTED_MODULE_3___default()(this, _style).setAll(style.getStyles());
      }

      _babel_runtime_helpers_classPrivateFieldGet__WEBPACK_IMPORTED_MODULE_3___default()(this, _style).component = this;
      this.reactor && this.reactor.dispatchEvent("onChange", this);
    }
  }, {
    key: "hidden",
    get: function get() {
      return this.style && this.style.hidden || this.parent && this.parent.hidden;
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
      return _babel_runtime_helpers_classPrivateFieldGet__WEBPACK_IMPORTED_MODULE_3___default()(this, _selected);
    },
    set: function set(selected) {
      if (selected != _babel_runtime_helpers_classPrivateFieldGet__WEBPACK_IMPORTED_MODULE_3___default()(this, _selected)) {
        _babel_runtime_helpers_classPrivateFieldSet__WEBPACK_IMPORTED_MODULE_4___default()(this, _selected, selected);

        this.reactor && this.reactor.dispatchEvent("onChange", this);
      }
    }
  }], [{
    key: "compareComponents",
    value: function compareComponents(component, other) {
      return component.compareTo(other);
    }
  }]);

  return Component;
}();



/***/ }),

/***/ "./src/Constants.js":
/*!**************************!*\
  !*** ./src/Constants.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
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
/* harmony default export */ __webpack_exports__["default"] = ({
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
    CIRCLE_DEFAULT_FILL: true
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
    INPUT_FULLSCREEN: "The use of JSGameTools.Canvas is needed for Input components to properly work in fullscreen mode."
  }
});

/***/ }),

/***/ "./src/Container.js":
/*!**************************!*\
  !*** ./src/Container.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Container; });
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/assertThisInitialized */ "./node_modules/@babel/runtime/helpers/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_helpers_set__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/set */ "./node_modules/@babel/runtime/helpers/set.js");
/* harmony import */ var _babel_runtime_helpers_set__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_set__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_helpers_get__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/get */ "./node_modules/@babel/runtime/helpers/get.js");
/* harmony import */ var _babel_runtime_helpers_get__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_get__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/inherits */ "./node_modules/@babel/runtime/helpers/inherits.js");
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _babel_runtime_helpers_classPrivateFieldGet__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @babel/runtime/helpers/classPrivateFieldGet */ "./node_modules/@babel/runtime/helpers/classPrivateFieldGet.js");
/* harmony import */ var _babel_runtime_helpers_classPrivateFieldGet__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classPrivateFieldGet__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _babel_runtime_helpers_classPrivateFieldSet__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @babel/runtime/helpers/classPrivateFieldSet */ "./node_modules/@babel/runtime/helpers/classPrivateFieldSet.js");
/* harmony import */ var _babel_runtime_helpers_classPrivateFieldSet__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classPrivateFieldSet__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _Box__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./Box */ "./src/Box.js");
/* harmony import */ var _Component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./Component */ "./src/Component.js");
/* harmony import */ var _Constants__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./Constants */ "./src/Constants.js");
/* harmony import */ var _ScrollbarHorizontal__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./ScrollbarHorizontal */ "./src/ScrollbarHorizontal.js");
/* harmony import */ var _ScrollbarVertical__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./ScrollbarVertical */ "./src/ScrollbarVertical.js");
/* harmony import */ var _Style__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./Style */ "./src/Style.js");
/* harmony import */ var _Utils__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./Utils */ "./src/Utils.js");












function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_7___default()(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_7___default()(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_6___default()(this, result); }; }

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








var _components = new WeakMap();

var _maxWidth = new WeakMap();

var _maxHeight = new WeakMap();

var _minWidth = new WeakMap();

var _minHeight = new WeakMap();

var Container = /*#__PURE__*/function (_Box) {
  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5___default()(Container, _Box);

  var _super = _createSuper(Container);

  function Container(x, y, maxWidth, maxHeight, style) {
    var _this2;

    var _this;

    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, Container);

    _this = _super.call(this, x, y, null, null, style);

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_8___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2___default()(_this), "selectable", false);

    _components.set(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2___default()(_this), {
      writable: true,
      value: []
    });

    _maxWidth.set(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2___default()(_this), {
      writable: true,
      value: 0
    });

    _maxHeight.set(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2___default()(_this), {
      writable: true,
      value: 0
    });

    _minWidth.set(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2___default()(_this), {
      writable: true,
      value: 0
    });

    _minHeight.set(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2___default()(_this), {
      writable: true,
      value: 0
    });

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_8___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2___default()(_this), "eventChangeCallback", function () {
      return _this.reactor.dispatchEvent("onChange", _babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2___default()(_this));
    });

    for (var _len = arguments.length, components = new Array(_len > 5 ? _len - 5 : 0), _key = 5; _key < _len; _key++) {
      components[_key - 5] = arguments[_key];
    }

    (_this2 = _this).addAll.apply(_this2, components);

    _this.canvasTmp = document.createElement("canvas");

    _babel_runtime_helpers_classPrivateFieldSet__WEBPACK_IMPORTED_MODULE_10___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2___default()(_this), _maxWidth, maxWidth);

    _babel_runtime_helpers_classPrivateFieldSet__WEBPACK_IMPORTED_MODULE_10___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2___default()(_this), _maxHeight, maxHeight);

    _this.scrollbarHorizontal = new _ScrollbarHorizontal__WEBPACK_IMPORTED_MODULE_14__["default"](null, null, _babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2___default()(_this));
    _this.scrollbarVertical = new _ScrollbarVertical__WEBPACK_IMPORTED_MODULE_15__["default"](null, null, _babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2___default()(_this));

    _this.addScrollAction(function (deltaX, deltaY) {
      return _this.controlScrolling(deltaX, deltaY);
    });

    if (!_Constants__WEBPACK_IMPORTED_MODULE_13__["default"].Setting.DISABLE_EXPERIMENTAL_OPTIMIZATIONS) {
      _this.addChangeAction(function (componentChanged) {
        componentChanged == _this.parent && _this.components.forEach(function (component) {
          return component && component.reactor.dispatchEvent("onChange", _babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2___default()(_this));
        });
      });
    }

    return _this;
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(Container, [{
    key: "draw",
    value: function draw(context) {
      var _this3 = this;

      if (this.hidden) return;
      var canvas = context.canvas;
      var ctx = canvas.getContext("2d");
      ctx.save();

      if (this.isCutting) {
        var ctxTemp = this.canvasTmp.getContext("2d");
        this.canvasTmp.width = _Utils__WEBPACK_IMPORTED_MODULE_17__["default"].getCanvasWidth(canvas) * _Constants__WEBPACK_IMPORTED_MODULE_13__["default"].Setting.PIXEL_RATIO;
        this.canvasTmp.height = _Utils__WEBPACK_IMPORTED_MODULE_17__["default"].getCanvasHeight(canvas) * _Constants__WEBPACK_IMPORTED_MODULE_13__["default"].Setting.PIXEL_RATIO;
        this.canvasTmp.style.width = _Utils__WEBPACK_IMPORTED_MODULE_17__["default"].getCanvasWidth(canvas);
        this.canvasTmp.style.height = _Utils__WEBPACK_IMPORTED_MODULE_17__["default"].getCanvasHeight(canvas);
        _Utils__WEBPACK_IMPORTED_MODULE_17__["default"].clear(ctxTemp);
      }

      this.components.forEach(function (component) {
        if (_this3.canvas) component.canvas = _this3.canvas;
      });
      this.controlScrolling(0, 0);

      _babel_runtime_helpers_get__WEBPACK_IMPORTED_MODULE_4___default()(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_7___default()(Container.prototype), "draw", this).call(this, context);

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
      this.clear();
      this.addAll.apply(this, arguments);
      this.enable();
    }
  }, {
    key: "add",
    value: function add(component) {
      _babel_runtime_helpers_classPrivateFieldGet__WEBPACK_IMPORTED_MODULE_9___default()(this, _components).push(component);

      component.parent = this;
      if (this.canvas) component.canvas = this.canvas;
      component.addChangeAction(this.eventChangeCallback);
      this.reactor.dispatchEvent("onChange", this);
    }
  }, {
    key: "addAll",
    value: function addAll() {
      var _this4 = this;

      for (var _len2 = arguments.length, components = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
        components[_key2] = arguments[_key2];
      }

      components.forEach(function (component) {
        return _this4.add(component);
      });
    }
  }, {
    key: "remove",
    value: function remove(component) {
      if (_babel_runtime_helpers_classPrivateFieldGet__WEBPACK_IMPORTED_MODULE_9___default()(this, _components).indexOf(component) != -1) {
        component.removeChangeAction(this.eventChangeCallback);

        _babel_runtime_helpers_classPrivateFieldSet__WEBPACK_IMPORTED_MODULE_10___default()(this, _components, _babel_runtime_helpers_classPrivateFieldGet__WEBPACK_IMPORTED_MODULE_9___default()(this, _components).filter(function (current) {
          return component != current;
        }));

        this.reactor.dispatchEvent("onChange", this);
      }
    }
  }, {
    key: "clear",
    value: function clear() {
      var _this5 = this;

      _babel_runtime_helpers_classPrivateFieldGet__WEBPACK_IMPORTED_MODULE_9___default()(this, _components).forEach(function (component) {
        return _this5.remove(component);
      });

      this.reactor.dispatchEvent("onChange", this);
    }
  }, {
    key: "getComponentsTree",
    value: function getComponentsTree() {
      var _this6 = this;

      var start = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this;
      var components = {
        "component": start,
        "childs": []
      };

      if (start.allComponents) {
        start.allComponents.forEach(function (component) {
          return components.childs.push(_this6.getComponentsTree(component));
        });
      }

      return components;
    }
  }, {
    key: "disable",
    value: function disable() {
      var changed = _babel_runtime_helpers_get__WEBPACK_IMPORTED_MODULE_4___default()(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_7___default()(Container.prototype), "disable", this).call(this);

      _babel_runtime_helpers_classPrivateFieldGet__WEBPACK_IMPORTED_MODULE_9___default()(this, _components).forEach(function (component) {
        if (component && component.disable && component.disable()) {
          changed = true;
        }
      });

      if (changed) this.reactor.dispatchEvent("onChange", this);
    }
  }, {
    key: "enable",
    value: function enable() {
      var changed = _babel_runtime_helpers_get__WEBPACK_IMPORTED_MODULE_4___default()(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_7___default()(Container.prototype), "enable", this).call(this);

      _babel_runtime_helpers_classPrivateFieldGet__WEBPACK_IMPORTED_MODULE_9___default()(this, _components).forEach(function (component) {
        if (component && component.enable && component.enable()) {
          changed = true;
        }
      });

      if (changed) this.reactor.dispatchEvent("onChange", this);
    }
  }, {
    key: "updateInnerHeight",
    value: function updateInnerHeight() {}
  }, {
    key: "updateInnerWidth",
    value: function updateInnerWidth() {}
  }, {
    key: "getComponentId",
    value: function getComponentId(component) {
      var result = null;

      _babel_runtime_helpers_classPrivateFieldGet__WEBPACK_IMPORTED_MODULE_9___default()(this, _components).forEach(function (c, i) {
        if (c == component) result = i;
      });

      return result;
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
      if (_Constants__WEBPACK_IMPORTED_MODULE_13__["default"].Setting.DISABLE_OPTIMIZATIONS) return true;

      if (component instanceof _Component__WEBPACK_IMPORTED_MODULE_12__["default"] && !component.hidden) {
        if (!_Constants__WEBPACK_IMPORTED_MODULE_13__["default"].Setting.DISABLE_IS_COMPONENT_VISIBLE_OPTIMIZATIONS && this.parent && this.parent.isComponentVisible && !this.parent.isComponentVisible(component)) {
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
    key: "components",
    get: function get() {
      var components = [];

      _babel_runtime_helpers_classPrivateFieldGet__WEBPACK_IMPORTED_MODULE_9___default()(this, _components).forEach(function (component) {
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
    key: "width",
    get: function get() {
      var width = this.parent && this.parent.width;
      var min = this.maxWidth ? Math.min(this.maxWidth, width) : null;
      return this.minWidth ? Math.max(this.minWidth, min || width) : width;
    }
  }, {
    key: "height",
    get: function get() {
      var height = this.parent && this.parent.height;
      var min = this.maxWidth ? Math.min(this.maxHeight, height) : null;
      return this.minHeight ? Math.max(this.minHeight, min || height) : height;
    }
  }, {
    key: "maxWidth",
    get: function get() {
      return _babel_runtime_helpers_classPrivateFieldGet__WEBPACK_IMPORTED_MODULE_9___default()(this, _maxWidth);
    },
    set: function set(maxWidth) {
      if (maxWidth != _babel_runtime_helpers_classPrivateFieldGet__WEBPACK_IMPORTED_MODULE_9___default()(this, _maxWidth)) {
        _babel_runtime_helpers_classPrivateFieldSet__WEBPACK_IMPORTED_MODULE_10___default()(this, _maxWidth, maxWidth);

        this.reactor.dispatchEvent("onChange", this);
      }
    }
  }, {
    key: "maxHeight",
    get: function get() {
      return _babel_runtime_helpers_classPrivateFieldGet__WEBPACK_IMPORTED_MODULE_9___default()(this, _maxHeight);
    },
    set: function set(maxHeight) {
      if (maxHeight != _babel_runtime_helpers_classPrivateFieldGet__WEBPACK_IMPORTED_MODULE_9___default()(this, _maxHeight)) {
        _babel_runtime_helpers_classPrivateFieldSet__WEBPACK_IMPORTED_MODULE_10___default()(this, _maxHeight, maxHeight);

        this.reactor.dispatchEvent("onChange", this);
      }
    }
  }, {
    key: "minWidth",
    get: function get() {
      return _babel_runtime_helpers_classPrivateFieldGet__WEBPACK_IMPORTED_MODULE_9___default()(this, _minWidth);
    },
    set: function set(minWidth) {
      if (minWidth != _babel_runtime_helpers_classPrivateFieldGet__WEBPACK_IMPORTED_MODULE_9___default()(this, _minWidth)) {
        _babel_runtime_helpers_classPrivateFieldSet__WEBPACK_IMPORTED_MODULE_10___default()(this, _minWidth, minWidth);

        this.reactor.dispatchEvent("onChange", this);
      }
    }
  }, {
    key: "minHeight",
    get: function get() {
      return _babel_runtime_helpers_classPrivateFieldGet__WEBPACK_IMPORTED_MODULE_9___default()(this, _minHeight);
    },
    set: function set(minHeight) {
      if (minHeight != _babel_runtime_helpers_classPrivateFieldGet__WEBPACK_IMPORTED_MODULE_9___default()(this, _minHeight)) {
        _babel_runtime_helpers_classPrivateFieldSet__WEBPACK_IMPORTED_MODULE_10___default()(this, _minHeight, minHeight);

        this.reactor.dispatchEvent("onChange", this);
      }
    }
  }, {
    key: "canvas",
    set: function set(canvas) {
      var _this7 = this;

      if (canvas != this.canvas) {
        _babel_runtime_helpers_set__WEBPACK_IMPORTED_MODULE_3___default()(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_7___default()(Container.prototype), "canvas", canvas, this, true);

        _babel_runtime_helpers_classPrivateFieldGet__WEBPACK_IMPORTED_MODULE_9___default()(this, _components).forEach(function (component) {
          component.canvas = canvas;
          if (component.reactor) component.reactor.dispatchEvent("onChange", _this7);
        });

        this.reactor.dispatchEvent("onChange", this);
      }
    },
    get: function get() {
      return _babel_runtime_helpers_get__WEBPACK_IMPORTED_MODULE_4___default()(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_7___default()(Container.prototype), "canvas", this);
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
    key: "isCutting",
    get: function get() {
      return !_Constants__WEBPACK_IMPORTED_MODULE_13__["default"].Setting.DISABLE_CONTAINERS_CUTTING && (this.maxWidth && this.innerWidth > this.maxWidth || this.maxHeight && this.innerHeight > this.maxHeight) && this.canvasTmp != null;
    }
  }, {
    key: "defaultStyle",
    get: function get() {
      return new _Style__WEBPACK_IMPORTED_MODULE_16__["default"]({
        "padding": 0,
        "spaceBetweenComponents": _Constants__WEBPACK_IMPORTED_MODULE_13__["default"].Setting.DEFAULT_SPACING
      });
    }
  }], [{
    key: "sortComponentsTree",
    value: function sortComponentsTree(component, other) {
      return component.component.compareTo(other.component);
    }
  }]);

  return Container;
}(_Box__WEBPACK_IMPORTED_MODULE_11__["default"]);



/***/ }),

/***/ "./src/Cross.js":
/*!**********************!*\
  !*** ./src/Cross.js ***!
  \**********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Cross; });
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/assertThisInitialized */ "./node_modules/@babel/runtime/helpers/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_helpers_set__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/set */ "./node_modules/@babel/runtime/helpers/set.js");
/* harmony import */ var _babel_runtime_helpers_set__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_set__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_helpers_get__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/get */ "./node_modules/@babel/runtime/helpers/get.js");
/* harmony import */ var _babel_runtime_helpers_get__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_get__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/inherits */ "./node_modules/@babel/runtime/helpers/inherits.js");
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _Component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./Component */ "./src/Component.js");
/* harmony import */ var _Constants__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./Constants */ "./src/Constants.js");
/* harmony import */ var _Utils__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./Utils */ "./src/Utils.js");
/* harmony import */ var _Style__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./Style */ "./src/Style.js");










function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_7___default()(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_7___default()(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_6___default()(this, result); }; }

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





var Cross = /*#__PURE__*/function (_Component) {
  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5___default()(Cross, _Component);

  var _super = _createSuper(Cross);

  function Cross(x, y, width, height, style) {
    var _this;

    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, Cross);

    _this = _super.call(this, x, y, width, height, style);

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_8___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2___default()(_this), "selectable", false);

    return _this;
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(Cross, [{
    key: "draw",
    value: function draw(context) {
      if (this.hidden) return;

      _babel_runtime_helpers_get__WEBPACK_IMPORTED_MODULE_4___default()(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_7___default()(Cross.prototype), "draw", this).call(this, context);

      var canvas = context.canvas;
      var ctx = canvas.getContext("2d");
      _Utils__WEBPACK_IMPORTED_MODULE_11__["default"].drawCross(ctx, this.x, this.y, this.width, this.height, this.style.lineWidth, this.style.color, this.style.lineCap);
      this.init = true;
    }
  }, {
    key: "width",
    get: function get() {
      return _babel_runtime_helpers_get__WEBPACK_IMPORTED_MODULE_4___default()(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_7___default()(Cross.prototype), "width", this) + this.style.lineWidth;
    },
    set: function set(width) {
      _babel_runtime_helpers_set__WEBPACK_IMPORTED_MODULE_3___default()(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_7___default()(Cross.prototype), "width", width, this, true);
    }
  }, {
    key: "height",
    get: function get() {
      return _babel_runtime_helpers_get__WEBPACK_IMPORTED_MODULE_4___default()(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_7___default()(Cross.prototype), "height", this) + this.style.lineWidth;
    },
    set: function set(height) {
      _babel_runtime_helpers_set__WEBPACK_IMPORTED_MODULE_3___default()(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_7___default()(Cross.prototype), "height", height, this, true);
    }
  }, {
    key: "defaultStyle",
    get: function get() {
      return new _Style__WEBPACK_IMPORTED_MODULE_12__["default"]({
        "lineWidth": _Constants__WEBPACK_IMPORTED_MODULE_10__["default"].Setting.CROSS_DEFAULT_LINE_SIZE,
        "color": _Constants__WEBPACK_IMPORTED_MODULE_10__["default"].Setting.CROSS_DEFAULT_COLOR,
        "lineCap": _Constants__WEBPACK_IMPORTED_MODULE_10__["default"].Setting.CROSS_DEFAULT_LINE_CAP
      });
    }
  }]);

  return Cross;
}(_Component__WEBPACK_IMPORTED_MODULE_9__["default"]);



/***/ }),

/***/ "./src/EasingFunctions.js":
/*!********************************!*\
  !*** ./src/EasingFunctions.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
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
/* harmony default export */ __webpack_exports__["default"] = ({
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

/***/ }),

/***/ "./src/Event.js":
/*!**********************!*\
  !*** ./src/Event.js ***!
  \**********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Event; });
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__);



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
    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, Event);

    this.name = name;
    this.callbacks = [];
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(Event, [{
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

  return Event;
}();



/***/ }),

/***/ "./src/FPSMeter.js":
/*!*************************!*\
  !*** ./src/FPSMeter.js ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return FPSMeter; });
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/assertThisInitialized */ "./node_modules/@babel/runtime/helpers/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_helpers_get__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/get */ "./node_modules/@babel/runtime/helpers/get.js");
/* harmony import */ var _babel_runtime_helpers_get__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_get__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/inherits */ "./node_modules/@babel/runtime/helpers/inherits.js");
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _Label__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./Label */ "./src/Label.js");









function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6___default()(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6___default()(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5___default()(this, result); }; }

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


var FPSMeter = /*#__PURE__*/function (_Label) {
  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4___default()(FPSMeter, _Label);

  var _super = _createSuper(FPSMeter);

  function FPSMeter(displayFrames, x, y, style) {
    var _this;

    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, FPSMeter);

    _this = _super.call(this, null, x, y, style);

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_7___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2___default()(_this), "selectable", false);

    _this.displayFrames = displayFrames || false;
    _this.frames = 0;
    _this.lastFrame = 0;
    _this.currentFPS = 0;
    _this.intervalCountFPS = setInterval(function () {
      return _this.countFPS();
    }, 1000);
    return _this;
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(FPSMeter, [{
    key: "draw",
    value: function draw(context) {
      if (this.hidden) return;
      this.text = "FPS: " + this.currentFPS + (this.displayFrames ? " / Frames: " + this.frames : "");

      _babel_runtime_helpers_get__WEBPACK_IMPORTED_MODULE_3___default()(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6___default()(FPSMeter.prototype), "draw", this).call(this, context);

      this.frames++;
    }
  }, {
    key: "countFPS",
    value: function countFPS() {
      if (this.lastFrame > 0) this.currentFPS = this.frames - this.lastFrame;
      this.lastFrame = this.frames;
    }
  }]);

  return FPSMeter;
}(_Label__WEBPACK_IMPORTED_MODULE_8__["default"]);



/***/ }),

/***/ "./src/ImageContainer.js":
/*!*******************************!*\
  !*** ./src/ImageContainer.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ImageContainer; });
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/assertThisInitialized */ "./node_modules/@babel/runtime/helpers/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_helpers_set__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/set */ "./node_modules/@babel/runtime/helpers/set.js");
/* harmony import */ var _babel_runtime_helpers_set__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_set__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_helpers_get__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/get */ "./node_modules/@babel/runtime/helpers/get.js");
/* harmony import */ var _babel_runtime_helpers_get__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_get__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/inherits */ "./node_modules/@babel/runtime/helpers/inherits.js");
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _Utils__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./Utils */ "./src/Utils.js");
/* harmony import */ var _Component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./Component */ "./src/Component.js");










function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_7___default()(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_7___default()(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_6___default()(this, result); }; }

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



var ImageContainer = /*#__PURE__*/function (_Component) {
  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5___default()(ImageContainer, _Component);

  var _super = _createSuper(ImageContainer);

  function ImageContainer(image, x, y, width, height, style, imageLoader) {
    var _this;

    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, ImageContainer);

    _this = _super.call(this, x, y, width, height, style);

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_8___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2___default()(_this), "selectable", false);

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

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(ImageContainer, [{
    key: "draw",
    value: function draw(context) {
      if (this.hidden) return;

      _babel_runtime_helpers_get__WEBPACK_IMPORTED_MODULE_4___default()(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_7___default()(ImageContainer.prototype), "draw", this).call(this, context);

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
      _Utils__WEBPACK_IMPORTED_MODULE_9__["default"].drawImage(ctx, this.image, Math.round(this.x), Math.round(this.y), Math.round(this.width), Math.round(this.height));
    }
  }, {
    key: "loadImage",
    value: function loadImage(imageLoader) {
      this.image = imageLoader.get(this.imgSrc);
    }
  }, {
    key: "sizes",
    get: function get() {
      var imgWidth = _babel_runtime_helpers_get__WEBPACK_IMPORTED_MODULE_4___default()(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_7___default()(ImageContainer.prototype), "width", this);

      var imgHeight = _babel_runtime_helpers_get__WEBPACK_IMPORTED_MODULE_4___default()(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_7___default()(ImageContainer.prototype), "height", this);

      if (this.imageLoader) {
        this.loadImage(this.imageLoader);
      }

      if (this.image && (this.image.width > _babel_runtime_helpers_get__WEBPACK_IMPORTED_MODULE_4___default()(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_7___default()(ImageContainer.prototype), "width", this) || this.image.height > _babel_runtime_helpers_get__WEBPACK_IMPORTED_MODULE_4___default()(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_7___default()(ImageContainer.prototype), "height", this))) {
        var aspectRatio = this.image.width / this.image.height;
        imgWidth = Math.floor(_babel_runtime_helpers_get__WEBPACK_IMPORTED_MODULE_4___default()(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_7___default()(ImageContainer.prototype), "width", this) / 1.25);
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
      _babel_runtime_helpers_set__WEBPACK_IMPORTED_MODULE_3___default()(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_7___default()(ImageContainer.prototype), "height", height, this, true);
    }
  }, {
    key: "width",
    get: function get() {
      return this.sizes.width;
    },
    set: function set(width) {
      _babel_runtime_helpers_set__WEBPACK_IMPORTED_MODULE_3___default()(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_7___default()(ImageContainer.prototype), "width", width, this, true);
    }
  }]);

  return ImageContainer;
}(_Component__WEBPACK_IMPORTED_MODULE_10__["default"]);



/***/ }),

/***/ "./src/ImageLoader.js":
/*!****************************!*\
  !*** ./src/ImageLoader.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ImageLoader; });
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__);
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
    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, ImageLoader);

    this.images = {};
    this.imagesResized = {};
    this.triedLoading = 0;
    this.hasError = false;
    this.nbImagesToLoad = 1;
    this.firstImage = true;
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(ImageLoader, [{
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
      if (this.images != null && this.images.hasOwnProperty(src)) {
        var image = this.images[src];

        if ((width || height) && (image.width != width || image.height != height)) {
          var w = Math.round(width);
          var h = Math.round(height);
          var id = src + "@" + w + "-" + h;

          if (!this.imagesResized.hasOwnProperty(id)) {
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

  return ImageLoader;
}();



/***/ }),

/***/ "./src/Input.js":
/*!**********************!*\
  !*** ./src/Input.js ***!
  \**********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Input; });
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/assertThisInitialized */ "./node_modules/@babel/runtime/helpers/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_helpers_get__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/get */ "./node_modules/@babel/runtime/helpers/get.js");
/* harmony import */ var _babel_runtime_helpers_get__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_get__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/inherits */ "./node_modules/@babel/runtime/helpers/inherits.js");
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _babel_runtime_helpers_classPrivateFieldGet__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @babel/runtime/helpers/classPrivateFieldGet */ "./node_modules/@babel/runtime/helpers/classPrivateFieldGet.js");
/* harmony import */ var _babel_runtime_helpers_classPrivateFieldGet__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classPrivateFieldGet__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _babel_runtime_helpers_classPrivateFieldSet__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @babel/runtime/helpers/classPrivateFieldSet */ "./node_modules/@babel/runtime/helpers/classPrivateFieldSet.js");
/* harmony import */ var _babel_runtime_helpers_classPrivateFieldSet__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classPrivateFieldSet__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _Constants__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./Constants */ "./src/Constants.js");
/* harmony import */ var _Utils__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./Utils */ "./src/Utils.js");
/* harmony import */ var _Box__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./Box */ "./src/Box.js");
/* harmony import */ var _Style__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./Style */ "./src/Style.js");











function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6___default()(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6___default()(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5___default()(this, result); }; }

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





var _positionStart = new WeakMap();

var _positionStartClick = new WeakMap();

var _positionEnd = new WeakMap();

var Input = /*#__PURE__*/function (_Box) {
  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4___default()(Input, _Box);

  var _super = _createSuper(Input);

  function Input(x, y, width, height, style, defaultText) {
    var _this;

    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, Input);

    _this = _super.call(this, x, y, width, height, style);

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_7___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2___default()(_this), "selectable", true);

    _positionStart.set(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2___default()(_this), {
      writable: true,
      value: 0
    });

    _positionStartClick.set(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2___default()(_this), {
      writable: true,
      value: 0
    });

    _positionEnd.set(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2___default()(_this), {
      writable: true,
      value: 0
    });

    _this.text = defaultText || "";

    _babel_runtime_helpers_classPrivateFieldSet__WEBPACK_IMPORTED_MODULE_9___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2___default()(_this), _positionStart, 0);

    _babel_runtime_helpers_classPrivateFieldSet__WEBPACK_IMPORTED_MODULE_9___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2___default()(_this), _positionEnd, 0);

    _babel_runtime_helpers_classPrivateFieldSet__WEBPACK_IMPORTED_MODULE_9___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2___default()(_this), _positionStartClick, 0);

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

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(Input, [{
    key: "draw",
    value: function draw(context) {
      if (this.hidden) return;

      _babel_runtime_helpers_get__WEBPACK_IMPORTED_MODULE_3___default()(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6___default()(Input.prototype), "draw", this).call(this, context);

      var canvas = context.canvas;
      var ctx = canvas.getContext("2d");
      ctx.save();
      if (this.input.selectionEnd != this.positionEnd) this.totalTime = 0;

      if (this.canvas && this.canvas.container && !this.appendToCanvas) {
        document.body.removeChild(this.input);
        this.canvas.container.appendChild(this.input);
        this.appendToCanvas = true;
      } else if (!this.canvas && !this.noticeLogged) {
        console && console.warn && console.warn(_Constants__WEBPACK_IMPORTED_MODULE_10__["default"].String.WARNING_MESSAGE + " " + _Constants__WEBPACK_IMPORTED_MODULE_10__["default"].String.INPUT_FULLSCREEN);
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
      this.canvasTmp.width = _Utils__WEBPACK_IMPORTED_MODULE_11__["default"].getCanvasWidth(canvas) * _Constants__WEBPACK_IMPORTED_MODULE_10__["default"].Setting.PIXEL_RATIO;
      this.canvasTmp.height = _Utils__WEBPACK_IMPORTED_MODULE_11__["default"].getCanvasHeight(canvas) * _Constants__WEBPACK_IMPORTED_MODULE_10__["default"].Setting.PIXEL_RATIO;
      this.canvasTmp.style.width = _Utils__WEBPACK_IMPORTED_MODULE_11__["default"].getCanvasWidth(canvas);
      this.canvasTmp.style.height = _Utils__WEBPACK_IMPORTED_MODULE_11__["default"].getCanvasHeight(canvas);
      var ctxText = this.canvasTmp.getContext("2d");
      _Utils__WEBPACK_IMPORTED_MODULE_11__["default"].clear(ctxText);
      ctxText.scale(_Constants__WEBPACK_IMPORTED_MODULE_10__["default"].Setting.PIXEL_RATIO, _Constants__WEBPACK_IMPORTED_MODULE_10__["default"].Setting.PIXEL_RATIO);
      this.updateTextCache(this.x + 5);
      this.autoScroll();
      this.drawText(ctxText, this.x + 5);
      _Utils__WEBPACK_IMPORTED_MODULE_11__["default"].drawImageData(ctx, this.canvasTmp, this.x + this.style.borderSize, this.y + this.style.borderSize, this.width - this.style.borderSize * 2, this.height - this.style.borderSize * 2, (this.x + this.style.borderSize) * _Constants__WEBPACK_IMPORTED_MODULE_10__["default"].Setting.PIXEL_RATIO, (this.y + this.style.borderSize) * _Constants__WEBPACK_IMPORTED_MODULE_10__["default"].Setting.PIXEL_RATIO, (this.width - this.style.borderSize * 2) * _Constants__WEBPACK_IMPORTED_MODULE_10__["default"].Setting.PIXEL_RATIO, (this.height - this.style.borderSize * 2) * _Constants__WEBPACK_IMPORTED_MODULE_10__["default"].Setting.PIXEL_RATIO);

      if (this.hovered || this.clicked) {
        if (this.canvas && this.canvas.canvas) {
          this.canvas.canvas.style.cursor = "text";
        } else {
          canvas.style.cursor = "default";
        }
      }

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

            _Utils__WEBPACK_IMPORTED_MODULE_11__["default"].drawText(ctxText, this.text[i], this.style.fontColor, this.style.fontSize, this.style.fontFamily, "default", "default", xDraw, yDraw, false);
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

      if (ctx && (_Constants__WEBPACK_IMPORTED_MODULE_10__["default"].Setting.DISABLE_OPTIMIZATIONS || !this.textCache || this.textCache.fontSize != this.style.fontSize || this.textCache.fontFamily != this.style.fontFamily || this.text != this.textCache.text || parent && parent.width != this.textCache.parentWidth)) {
        this.textCache = {
          "fontSize": this.style.fontSize,
          "fontFamily": this.style.fontFamily,
          "text": this.text,
          "parentWidth": parent.width,
          "letters": []
        };

        for (var i = 0; i < this.text.length; i++) {
          var sizes = _Utils__WEBPACK_IMPORTED_MODULE_11__["default"].wrapTextLines(ctx, this.text[i], this.width, this.style.fontSize, this.style.fontFamily, true);
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
    key: "setSelectionRange",
    value: function setSelectionRange(start, end, direction) {
      this.input.setSelectionRange(start, end, direction);
      this.positionStart = start;
      this.positionEnd = end;
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
    }
  }, {
    key: "positionStart",
    get: function get() {
      return _babel_runtime_helpers_classPrivateFieldGet__WEBPACK_IMPORTED_MODULE_8___default()(this, _positionStart);
    },
    set: function set(position) {
      this.input.selectionStart = position;

      _babel_runtime_helpers_classPrivateFieldSet__WEBPACK_IMPORTED_MODULE_9___default()(this, _positionStart, position);
    }
  }, {
    key: "positionStartClick",
    get: function get() {
      return _babel_runtime_helpers_classPrivateFieldGet__WEBPACK_IMPORTED_MODULE_8___default()(this, _positionStartClick);
    },
    set: function set(position) {
      _babel_runtime_helpers_classPrivateFieldSet__WEBPACK_IMPORTED_MODULE_9___default()(this, _positionStartClick, position);
    }
  }, {
    key: "positionEnd",
    get: function get() {
      return _babel_runtime_helpers_classPrivateFieldGet__WEBPACK_IMPORTED_MODULE_8___default()(this, _positionEnd);
    },
    set: function set(position) {
      this.input.selectionEnd = position;

      _babel_runtime_helpers_classPrivateFieldSet__WEBPACK_IMPORTED_MODULE_9___default()(this, _positionEnd, position);
    }
  }, {
    key: "height",
    get: function get() {
      var borderSize = this.style && this.style.borderSize ? this.style.borderSize : 0;
      return _babel_runtime_helpers_get__WEBPACK_IMPORTED_MODULE_3___default()(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6___default()(Input.prototype), "height", this) ? _babel_runtime_helpers_get__WEBPACK_IMPORTED_MODULE_3___default()(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6___default()(Input.prototype), "height", this) : this.style.fontSize + borderSize * 2;
    }
  }, {
    key: "defaultStyle",
    get: function get() {
      return new _Style__WEBPACK_IMPORTED_MODULE_13__["default"]({
        "fontSize": Math.floor(_Constants__WEBPACK_IMPORTED_MODULE_10__["default"].Setting.FONT_SIZE / 1.25),
        "fontFamily": _Constants__WEBPACK_IMPORTED_MODULE_10__["default"].Setting.FONT_FAMILY,
        "fontColor": _Constants__WEBPACK_IMPORTED_MODULE_10__["default"].Setting.INPUT_DEFAULT_FONT_COLOR,
        "backgroundColor": _Constants__WEBPACK_IMPORTED_MODULE_10__["default"].Setting.INPUT_DEFAULT_BACKGROUND_COLOR,
        "borderColor": _Constants__WEBPACK_IMPORTED_MODULE_10__["default"].Setting.INPUT_DEFAULT_BORDER_COLOR,
        "borderColorSelected": _Constants__WEBPACK_IMPORTED_MODULE_10__["default"].Setting.INPUT_DEFAULT_BORDER_COLOR_SELECTED,
        "selectColor": _Constants__WEBPACK_IMPORTED_MODULE_10__["default"].Setting.INPUT_DEFAULT_SELECT_COLOR,
        "spaceBetweenComponents": 1
      });
    }
  }]);

  return Input;
}(_Box__WEBPACK_IMPORTED_MODULE_12__["default"]);



/***/ }),

/***/ "./src/Label.js":
/*!**********************!*\
  !*** ./src/Label.js ***!
  \**********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Label; });
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/assertThisInitialized */ "./node_modules/@babel/runtime/helpers/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_helpers_get__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/get */ "./node_modules/@babel/runtime/helpers/get.js");
/* harmony import */ var _babel_runtime_helpers_get__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_get__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/inherits */ "./node_modules/@babel/runtime/helpers/inherits.js");
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _babel_runtime_helpers_classPrivateFieldSet__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @babel/runtime/helpers/classPrivateFieldSet */ "./node_modules/@babel/runtime/helpers/classPrivateFieldSet.js");
/* harmony import */ var _babel_runtime_helpers_classPrivateFieldSet__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classPrivateFieldSet__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _babel_runtime_helpers_classPrivateFieldGet__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @babel/runtime/helpers/classPrivateFieldGet */ "./node_modules/@babel/runtime/helpers/classPrivateFieldGet.js");
/* harmony import */ var _babel_runtime_helpers_classPrivateFieldGet__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classPrivateFieldGet__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _Constants__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./Constants */ "./src/Constants.js");
/* harmony import */ var _Utils__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./Utils */ "./src/Utils.js");
/* harmony import */ var _Component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./Component */ "./src/Component.js");
/* harmony import */ var _Style__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./Style */ "./src/Style.js");











function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6___default()(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6___default()(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5___default()(this, result); }; }

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





var _text = new WeakMap();

var Label = /*#__PURE__*/function (_Component) {
  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4___default()(Label, _Component);

  var _super = _createSuper(Label);

  function Label(text, x, y, style) {
    var _this;

    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, Label);

    _this = _super.call(this, x, y, null, null, style);

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_7___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2___default()(_this), "selectable", false);

    _text.set(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2___default()(_this), {
      writable: true,
      value: ""
    });

    _this.text = text;
    _this.sizesCache = null;

    if (!_Constants__WEBPACK_IMPORTED_MODULE_10__["default"].Setting.DISABLE_EXPERIMENTAL_OPTIMIZATIONS) {
      _this.updateSizes();

      _this.addChangeAction(function (componentChanged) {
        _this.updateSizes();

        componentChanged != _this.parent && _this.parent && _this.parent.reactor && _this.parent.reactor.dispatchEvent("onChange", _babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2___default()(_this));
      });
    }

    return _this;
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(Label, [{
    key: "draw",
    value: function draw(context) {
      if (this.hidden) return;

      _babel_runtime_helpers_get__WEBPACK_IMPORTED_MODULE_3___default()(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6___default()(Label.prototype), "draw", this).call(this, context);

      var canvas = context.canvas;
      var ctx = canvas.getContext("2d");
      ctx.save();
      _Utils__WEBPACK_IMPORTED_MODULE_11__["default"].drawText(ctx, this.text, this.style.fontColor, this.style.fontSize, this.style.fontFamily, this.style.alignement, this.style.verticalAlignement, this.x, this.y, this.style.wrap, this.style.bold, this.style.underline, null, this.parent);
      ctx.restore();
    }
  }, {
    key: "updateSizes",
    value: function updateSizes() {
      var ctx = this.canvas ? this.canvas.getContext("2d") : null;
      var parent = this.canvas && this.canvas.scene || this.canvas || ctx && ctx.canvas || this.parent;

      if (ctx && (_Constants__WEBPACK_IMPORTED_MODULE_10__["default"].Setting.DISABLE_OPTIMIZATIONS || !this.sizesCache || this.sizesCache.fontSize != this.style.fontSize || this.sizesCache.fontFamily != this.style.fontFamily || this.sizesCache.wrap != this.style.wrap || this.text != this.sizesCache.text || parent && parent.width != this.sizesCache.parentWidth || this.sizesCache.value == null)) {
        var sizes = _Utils__WEBPACK_IMPORTED_MODULE_11__["default"].wrapTextLines(ctx, this.text, null, this.style.fontSize, this.style.fontFamily, !this.style.wrap);

        if (parent) {
          this.sizesCache = {
            "fontSize": this.style.fontSize,
            "fontFamily": this.style.fontFamily,
            "wrap": this.style.wrap,
            "text": this.text,
            "parentWidth": parent.width,
            "value": sizes
          };
          this.reactor.dispatchEvent("onChange", this);
        }
      }

      return this.sizesCache && this.sizesCache.value;
    }
  }, {
    key: "text",
    set: function set(text) {
      if (text != _babel_runtime_helpers_classPrivateFieldGet__WEBPACK_IMPORTED_MODULE_9___default()(this, _text)) {
        _babel_runtime_helpers_classPrivateFieldSet__WEBPACK_IMPORTED_MODULE_8___default()(this, _text, text);

        this.reactor.dispatchEvent("onChange", this);
      }
    },
    get: function get() {
      return _babel_runtime_helpers_classPrivateFieldGet__WEBPACK_IMPORTED_MODULE_9___default()(this, _text);
    }
  }, {
    key: "sizes",
    get: function get() {
      if (_Constants__WEBPACK_IMPORTED_MODULE_10__["default"].Setting.DISABLE_EXPERIMENTAL_OPTIMIZATIONS) this.updateSizes();
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
      return new _Style__WEBPACK_IMPORTED_MODULE_13__["default"]({
        "fontColor": _Constants__WEBPACK_IMPORTED_MODULE_10__["default"].Setting.LABEL_DEFAULT_FONT_COLOR,
        "wrap": true,
        "bold": false,
        "underline": false
      });
    }
  }]);

  return Label;
}(_Component__WEBPACK_IMPORTED_MODULE_12__["default"]);



/***/ }),

/***/ "./src/Link.js":
/*!*********************!*\
  !*** ./src/Link.js ***!
  \*********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Link; });
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/assertThisInitialized */ "./node_modules/@babel/runtime/helpers/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_helpers_get__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/get */ "./node_modules/@babel/runtime/helpers/get.js");
/* harmony import */ var _babel_runtime_helpers_get__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_get__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/inherits */ "./node_modules/@babel/runtime/helpers/inherits.js");
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _Constants__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./Constants */ "./src/Constants.js");
/* harmony import */ var _Label__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./Label */ "./src/Label.js");
/* harmony import */ var _Style__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./Style */ "./src/Style.js");
/* harmony import */ var _Utils__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./Utils */ "./src/Utils.js");









function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6___default()(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6___default()(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5___default()(this, result); }; }

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





var Link = /*#__PURE__*/function (_Label) {
  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4___default()(Link, _Label);

  var _super = _createSuper(Link);

  function Link(text, x, y, style) {
    var _this;

    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, Link);

    _this = _super.call(this, text, x, y, style);

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_7___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2___default()(_this), "selectable", true);

    _this.initialColor = _this.style.fontColor;
    _this.initialUnderline = _this.style.underline;
    return _this;
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(Link, [{
    key: "draw",
    value: function draw(context) {
      if (this.hidden) return;

      _babel_runtime_helpers_get__WEBPACK_IMPORTED_MODULE_3___default()(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6___default()(Link.prototype), "draw", this).call(this, context);

      var canvas = context.canvas;

      if (this.clicked) {
        this.style.set("underline", false);
        this.style.set("fontColor", this.style.fontColorDown);
        canvas.style.cursor = "pointer";
      } else if (this.hovered || this.selected) {
        this.style.set("underline", false);
        this.style.set("fontColor", this.style.fontColorHover);
        if (this.hovered) canvas.style.cursor = "pointer";
      } else {
        this.style.set("underline", this.initialUnderline);
        this.style.set("fontColor", this.initialColor);
      }

      this.init = true;
    }
  }, {
    key: "defaultStyle",
    get: function get() {
      return new _Style__WEBPACK_IMPORTED_MODULE_10__["default"]({
        "fontColor": _Constants__WEBPACK_IMPORTED_MODULE_8__["default"].Setting.LINK_DEFAULT_COLOR,
        "fontColorHover": _Constants__WEBPACK_IMPORTED_MODULE_8__["default"].Setting.LINK_DEFAULT_HOVER_COLOR,
        "fontColorDown": _Constants__WEBPACK_IMPORTED_MODULE_8__["default"].Setting.LINK_DEFAULT_CLICK_COLOR,
        "wrap": true,
        "bold": false,
        "underline": true
      });
    }
  }]);

  return Link;
}(_Label__WEBPACK_IMPORTED_MODULE_9__["default"]);



/***/ }),

/***/ "./src/Menu.js":
/*!*********************!*\
  !*** ./src/Menu.js ***!
  \*********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Menu; });
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/assertThisInitialized */ "./node_modules/@babel/runtime/helpers/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_helpers_set__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/set */ "./node_modules/@babel/runtime/helpers/set.js");
/* harmony import */ var _babel_runtime_helpers_set__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_set__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_helpers_get__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/get */ "./node_modules/@babel/runtime/helpers/get.js");
/* harmony import */ var _babel_runtime_helpers_get__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_get__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/inherits */ "./node_modules/@babel/runtime/helpers/inherits.js");
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _Constants__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./Constants */ "./src/Constants.js");
/* harmony import */ var _Utils__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./Utils */ "./src/Utils.js");
/* harmony import */ var _Component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./Component */ "./src/Component.js");
/* harmony import */ var _Col__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./Col */ "./src/Col.js");
/* harmony import */ var _Style__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./Style */ "./src/Style.js");










function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_7___default()(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_7___default()(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_6___default()(this, result); }; }

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






var Menu = /*#__PURE__*/function (_Col) {
  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5___default()(Menu, _Col);

  var _super = _createSuper(Menu);

  function Menu(style) {
    var _this;

    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, Menu);

    for (var _len = arguments.length, components = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      components[_key - 1] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this, 0, 0, null, null, style].concat(components));

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_8___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2___default()(_this), "selectable", false);

    _this.lastKey = _this.lastKey == undefined ? -1 : _this.lastKey;
    _this.selectedComponent = _this.selectedComponent == undefined ? 0 : _this.selectedComponent;

    _this.disable();

    return _this;
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(Menu, [{
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
            if (_this2.lastKey == _Constants__WEBPACK_IMPORTED_MODULE_9__["default"].Key.UP || _this2.lastKey == _Constants__WEBPACK_IMPORTED_MODULE_9__["default"].Key.BOTTOM) event.preventDefault();
          }
        });
        this.init = true;
      }

      var keyAction = false;

      if (this.components != null) {
        if (this.lastKey == _Constants__WEBPACK_IMPORTED_MODULE_9__["default"].Key.UP) {
          this.select(this.selectedComponent - 1);
          keyAction = true;
        } else if (this.lastKey == _Constants__WEBPACK_IMPORTED_MODULE_9__["default"].Key.BOTTOM) {
          this.select(this.selectedComponent + 1);
          keyAction = true;
        } else if (this.lastKey == _Constants__WEBPACK_IMPORTED_MODULE_9__["default"].Key.ECHAP) {
          this.disable();
          keyAction = true;
        } else {
          this.components.forEach(function (component, i) {
            if (component.selected) _this2.select(i);
          });
        }

        this.components.forEach(function (component, i) {
          if (component instanceof _Component__WEBPACK_IMPORTED_MODULE_11__["default"]) {
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

            if (_this2.selectedComponent == i && _this2.lastKey == _Constants__WEBPACK_IMPORTED_MODULE_9__["default"].Key.ENTER && component.reactor && !component.disabled) {
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
      _babel_runtime_helpers_get__WEBPACK_IMPORTED_MODULE_4___default()(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_7___default()(Menu.prototype), "draw", this).call(this, ctx);
    }
  }, {
    key: "drawBlur",
    value: function drawBlur(ctx) {
      _Utils__WEBPACK_IMPORTED_MODULE_10__["default"].blurCanvas(ctx, 5);
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
      _babel_runtime_helpers_get__WEBPACK_IMPORTED_MODULE_4___default()(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_7___default()(Menu.prototype), "disable", this).call(this);

      this.components.forEach(function (component) {
        return component && component.disable && component.disable();
      });
    }
  }, {
    key: "enable",
    value: function enable() {
      _babel_runtime_helpers_get__WEBPACK_IMPORTED_MODULE_4___default()(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_7___default()(Menu.prototype), "enable", this).call(this);

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
        if (this.lastKey == _Constants__WEBPACK_IMPORTED_MODULE_9__["default"].Key.UP) {
          return this.select(this.selectedComponent - 1);
        } else if (this.lastKey == _Constants__WEBPACK_IMPORTED_MODULE_9__["default"].Key.BOTTOM) {
          return this.select(this.selectedComponent + 1);
        }
      }
    }
  }, {
    key: "compareToComponent",
    value: function compareToComponent(otherComponent) {
      return otherComponent.compareToMenu(this);
    }
  }, {
    key: "compareToMenu",
    value: function compareToMenu(otherComponent) {
      return 0;
    }
  }, {
    key: "compareToTooltip",
    value: function compareToTooltip(otherComponent) {
      return -1;
    }
  }, {
    key: "compareToNotification",
    value: function compareToNotification(otherComponent) {
      return 1;
    }
  }, {
    key: "isInside",
    value: function isInside(pos) {
      return !this.hidden;
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
      return _babel_runtime_helpers_get__WEBPACK_IMPORTED_MODULE_4___default()(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_7___default()(Menu.prototype), "maxHeight", this) || this.canvas && this.canvas.scene && this.canvas.scene.height;
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
      return new _Style__WEBPACK_IMPORTED_MODULE_13__["default"]({
        "blurBackground": _Constants__WEBPACK_IMPORTED_MODULE_9__["default"].Setting.MENU_DEFAULT_BLUR_BACKGROUND,
        "backgroundColor": _Constants__WEBPACK_IMPORTED_MODULE_9__["default"].Setting.MENU_DEFAULT_BACKGROUND,
        "verticalAlignement": _Constants__WEBPACK_IMPORTED_MODULE_9__["default"].VerticalAlignement.CENTER,
        "scrollXDisabled": true
      });
    }
  }, {
    key: "hidden",
    get: function get() {
      return _babel_runtime_helpers_get__WEBPACK_IMPORTED_MODULE_4___default()(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_7___default()(Menu.prototype), "hidden", this) || this.disabled;
    },
    set: function set(hidden) {
      _babel_runtime_helpers_set__WEBPACK_IMPORTED_MODULE_3___default()(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_7___default()(Menu.prototype), "hidden", hidden, this, true);

      this.disabled = hidden;
    }
  }]);

  return Menu;
}(_Col__WEBPACK_IMPORTED_MODULE_12__["default"]);



/***/ }),

/***/ "./src/NotificationMessage.js":
/*!************************************!*\
  !*** ./src/NotificationMessage.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return NotificationMessage; });
/* harmony import */ var _babel_runtime_helpers_construct__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/construct */ "./node_modules/@babel/runtime/helpers/construct.js");
/* harmony import */ var _babel_runtime_helpers_construct__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_construct__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/toConsumableArray */ "./node_modules/@babel/runtime/helpers/toConsumableArray.js");
/* harmony import */ var _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/assertThisInitialized */ "./node_modules/@babel/runtime/helpers/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _babel_runtime_helpers_get__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/get */ "./node_modules/@babel/runtime/helpers/get.js");
/* harmony import */ var _babel_runtime_helpers_get__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_get__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _babel_runtime_helpers_set__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime/helpers/set */ "./node_modules/@babel/runtime/helpers/set.js");
/* harmony import */ var _babel_runtime_helpers_set__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_set__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime/helpers/inherits */ "./node_modules/@babel/runtime/helpers/inherits.js");
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _Constants__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./Constants */ "./src/Constants.js");
/* harmony import */ var _Col__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./Col */ "./src/Col.js");
/* harmony import */ var _Button__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./Button */ "./src/Button.js");
/* harmony import */ var _Cross__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./Cross */ "./src/Cross.js");
/* harmony import */ var _Style__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./Style */ "./src/Style.js");












function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_9___default()(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_9___default()(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_8___default()(this, result); }; }

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






var NotificationMessage = /*#__PURE__*/function (_Col) {
  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_7___default()(NotificationMessage, _Col);

  var _super = _createSuper(NotificationMessage);

  function NotificationMessage(style, delayBeforeClosing, easingFunction) {
    var _this;

    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2___default()(this, NotificationMessage);

    for (var _len = arguments.length, components = new Array(_len > 3 ? _len - 3 : 0), _key = 3; _key < _len; _key++) {
      components[_key - 3] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this, 0, 0, null, null, style].concat(components));

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_10___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4___default()(_this), "selectable", false);

    _this.delayBeforeClosing = delayBeforeClosing == undefined ? 5 : delayBeforeClosing; // second

    _this.timeLastFrame = 0;
    _this.animationTime = 0;
    _this.closed = true;
    _this.closing = false;
    _this.easingFunction = easingFunction;
    _this.closeButton = new _Button__WEBPACK_IMPORTED_MODULE_13__["default"](null, null, null, null, new _Style__WEBPACK_IMPORTED_MODULE_15__["default"]({
      "alignement": _Constants__WEBPACK_IMPORTED_MODULE_11__["default"].Alignement.RIGHT,
      "verticalAlignement": _Constants__WEBPACK_IMPORTED_MODULE_11__["default"].VerticalAlignement.TOP,
      "padding": 10
    }), new _Cross__WEBPACK_IMPORTED_MODULE_14__["default"](null, null, 10, 10));

    _this.add(_this.closeButton);

    return _this;
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_3___default()(NotificationMessage, [{
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
    key: "drawComponents",
    value: function drawComponents(ctx) {
      _babel_runtime_helpers_get__WEBPACK_IMPORTED_MODULE_5___default()(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_9___default()(NotificationMessage.prototype), "draw", this).call(this, ctx);
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
      if (this.closeButton != undefined && this.closeButton != null && this.closeButton instanceof _Button__WEBPACK_IMPORTED_MODULE_13__["default"]) {
        this.closeButton.disable();
      }
    }
  }, {
    key: "enableCloseButton",
    value: function enableCloseButton() {
      if (this.closeButton != undefined && this.closeButton != null && this.closeButton instanceof _Button__WEBPACK_IMPORTED_MODULE_13__["default"]) {
        this.closeButton.enable();
      }
    }
  }, {
    key: "copy",
    value: function copy() {
      return _babel_runtime_helpers_construct__WEBPACK_IMPORTED_MODULE_0___default()(NotificationMessage, [this.style.copy(), this.delayBeforeClosing, this.easingFunction].concat(_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_1___default()(this.components)));
    }
  }, {
    key: "compareToComponent",
    value: function compareToComponent(otherComponent) {
      return otherComponent.compareToNotification(this);
    }
  }, {
    key: "compareToTooltip",
    value: function compareToTooltip(otherComponent) {
      return -1;
    }
  }, {
    key: "compareToNotification",
    value: function compareToNotification(otherComponent) {
      return 0;
    }
  }, {
    key: "compareToMenu",
    value: function compareToMenu(otherComponent) {
      return -1;
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

      if (this.style.verticalAlignement == _Constants__WEBPACK_IMPORTED_MODULE_11__["default"].VerticalAlignement.TOP) {
        return this.height * (offsetY <= 1 ? offsetY : 1) - this.height;
      }

      return this.canvas.scene.height - this.height * (offsetY <= 1 ? offsetY : 1);
    },
    set: function set(y) {
      _babel_runtime_helpers_set__WEBPACK_IMPORTED_MODULE_6___default()(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_9___default()(NotificationMessage.prototype), "y", y, this, true);
    }
  }, {
    key: "width",
    get: function get() {
      return this.canvas && this.canvas.scene ? this.canvas.scene.width : null;
    }
  }, {
    key: "height",
    get: function get() {
      return _babel_runtime_helpers_get__WEBPACK_IMPORTED_MODULE_5___default()(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_9___default()(NotificationMessage.prototype), "height", this) - (this.closeButton ? this.closeButton.height : 0);
    }
  }, {
    key: "defaultStyle",
    get: function get() {
      return new _Style__WEBPACK_IMPORTED_MODULE_15__["default"]({
        "alignement": _Constants__WEBPACK_IMPORTED_MODULE_11__["default"].Alignement.CENTER,
        "backgroundColor": _Constants__WEBPACK_IMPORTED_MODULE_11__["default"].Setting.NOTIFICATION_DEFAULT_BACKGROUND,
        "animationDuration": _Constants__WEBPACK_IMPORTED_MODULE_11__["default"].Setting.NOTIFICATION_DEFAULT_ANIMATION_DURATION
      });
    }
  }, {
    key: "hidden",
    get: function get() {
      return _babel_runtime_helpers_get__WEBPACK_IMPORTED_MODULE_5___default()(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_9___default()(NotificationMessage.prototype), "hidden", this) || this.closed;
    },
    set: function set(hidden) {
      _babel_runtime_helpers_set__WEBPACK_IMPORTED_MODULE_6___default()(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_9___default()(NotificationMessage.prototype), "hidden", hidden, this, true);

      if (hidden) {
        this.forceClose();
      } else {
        this.open();
      }
    }
  }]);

  return NotificationMessage;
}(_Col__WEBPACK_IMPORTED_MODULE_12__["default"]);



/***/ }),

/***/ "./src/ProgressBar.js":
/*!****************************!*\
  !*** ./src/ProgressBar.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ProgressBar; });
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/assertThisInitialized */ "./node_modules/@babel/runtime/helpers/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_helpers_get__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/get */ "./node_modules/@babel/runtime/helpers/get.js");
/* harmony import */ var _babel_runtime_helpers_get__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_get__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/inherits */ "./node_modules/@babel/runtime/helpers/inherits.js");
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _babel_runtime_helpers_classPrivateFieldGet__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @babel/runtime/helpers/classPrivateFieldGet */ "./node_modules/@babel/runtime/helpers/classPrivateFieldGet.js");
/* harmony import */ var _babel_runtime_helpers_classPrivateFieldGet__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classPrivateFieldGet__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _babel_runtime_helpers_classPrivateFieldSet__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @babel/runtime/helpers/classPrivateFieldSet */ "./node_modules/@babel/runtime/helpers/classPrivateFieldSet.js");
/* harmony import */ var _babel_runtime_helpers_classPrivateFieldSet__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classPrivateFieldSet__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _Box__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./Box */ "./src/Box.js");
/* harmony import */ var _Constants__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./Constants */ "./src/Constants.js");
/* harmony import */ var _Style__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./Style */ "./src/Style.js");











function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6___default()(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6___default()(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5___default()(this, result); }; }

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




var _precPercent = new WeakMap();

var ProgressBar = /*#__PURE__*/function (_Box) {
  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4___default()(ProgressBar, _Box);

  var _super = _createSuper(ProgressBar);

  function ProgressBar(x, y, width, height, style, defaultPercent, easingFunction) {
    var _this;

    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, ProgressBar);

    _this = _super.call(this, x, y, width, height, style);

    _precPercent.set(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2___default()(_this), {
      writable: true,
      value: 0
    });

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_7___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2___default()(_this), "selectable", false);

    _this.percent = defaultPercent == undefined ? 0 : defaultPercent;

    _babel_runtime_helpers_classPrivateFieldSet__WEBPACK_IMPORTED_MODULE_9___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2___default()(_this), _precPercent, _this.percent);

    _this.easingFunction = easingFunction;
    _this.lastTime = 0;
    _this.totalTime = 0;
    return _this;
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(ProgressBar, [{
    key: "draw",
    value: function draw(context) {
      if (this.hidden) return;

      _babel_runtime_helpers_get__WEBPACK_IMPORTED_MODULE_3___default()(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6___default()(ProgressBar.prototype), "draw", this).call(this, context);

      var canvas = context.canvas;
      var ctx = canvas.getContext("2d");
      ctx.save();
      var time = performance.now();
      var offsetTime = 0;

      if (_babel_runtime_helpers_classPrivateFieldGet__WEBPACK_IMPORTED_MODULE_8___default()(this, _precPercent) != this.percent && !this.style.disableAnimation) {
        if (this.lastTime > 0) offsetTime = time - this.lastTime;
        this.totalTime += offsetTime;

        if (this.totalTime >= this.style.animationDuration) {
          _babel_runtime_helpers_classPrivateFieldSet__WEBPACK_IMPORTED_MODULE_9___default()(this, _precPercent, this.percent);

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
    key: "drawForeground",
    value: function drawForeground(ctx, widthForeground) {
      ctx.save();
      ctx.fillStyle = this.style.foregroundColor;
      ctx.fillRect(this.x, this.y, widthForeground, this.height);
      ctx.restore();
    }
  }, {
    key: "animationPercent",
    get: function get() {
      var animationPercent = _babel_runtime_helpers_classPrivateFieldGet__WEBPACK_IMPORTED_MODULE_8___default()(this, _precPercent) != this.percent && !this.style.disableAnimation ? this.totalTime / this.style.animationDuration : 1;

      if (this.easingFunction) {
        animationPercent = this.easingFunction(animationPercent);
      }

      return animationPercent;
    }
  }, {
    key: "widthForeground",
    get: function get() {
      return Math.max(0, Math.min(this.width, this.width * (_babel_runtime_helpers_classPrivateFieldGet__WEBPACK_IMPORTED_MODULE_8___default()(this, _precPercent) + (this.percent - _babel_runtime_helpers_classPrivateFieldGet__WEBPACK_IMPORTED_MODULE_8___default()(this, _precPercent)) * this.animationPercent)));
    }
  }, {
    key: "defaultStyle",
    get: function get() {
      return new _Style__WEBPACK_IMPORTED_MODULE_12__["default"]({
        "backgroundColor": _Constants__WEBPACK_IMPORTED_MODULE_11__["default"].Setting.PROGRESS_DEFAULT_BACKGROUND,
        "foregroundColor": _Constants__WEBPACK_IMPORTED_MODULE_11__["default"].Setting.PROGRESS_DEFAULT_FOREGROUND,
        "animationDuration": _Constants__WEBPACK_IMPORTED_MODULE_11__["default"].Setting.PROGRESS_DEFAULT_ANIMATION_DURATION
      });
    }
  }]);

  return ProgressBar;
}(_Box__WEBPACK_IMPORTED_MODULE_10__["default"]);



/***/ }),

/***/ "./src/Reactor.js":
/*!************************!*\
  !*** ./src/Reactor.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Reactor; });
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__);
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
    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, Reactor);

    this.events = {};
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(Reactor, [{
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

  return Reactor;
}();



/***/ }),

/***/ "./src/ReactorCanvas.js":
/*!******************************!*\
  !*** ./src/ReactorCanvas.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ReactorCanvas; });
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/inherits */ "./node_modules/@babel/runtime/helpers/inherits.js");
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _Reactor__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Reactor */ "./src/Reactor.js");






function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4___default()(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4___default()(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3___default()(this, result); }; }

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


var ReactorCanvas = /*#__PURE__*/function (_Reactor) {
  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_2___default()(ReactorCanvas, _Reactor);

  var _super = _createSuper(ReactorCanvas);

  function ReactorCanvas() {
    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, ReactorCanvas);

    return _super.apply(this, arguments);
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(ReactorCanvas, [{
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

  return ReactorCanvas;
}(_Reactor__WEBPACK_IMPORTED_MODULE_5__["default"]);



/***/ }),

/***/ "./src/Row.js":
/*!********************!*\
  !*** ./src/Row.js ***!
  \********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Row; });
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/assertThisInitialized */ "./node_modules/@babel/runtime/helpers/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_helpers_get__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/get */ "./node_modules/@babel/runtime/helpers/get.js");
/* harmony import */ var _babel_runtime_helpers_get__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_get__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/inherits */ "./node_modules/@babel/runtime/helpers/inherits.js");
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _babel_runtime_helpers_classPrivateFieldGet__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @babel/runtime/helpers/classPrivateFieldGet */ "./node_modules/@babel/runtime/helpers/classPrivateFieldGet.js");
/* harmony import */ var _babel_runtime_helpers_classPrivateFieldGet__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classPrivateFieldGet__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _babel_runtime_helpers_classPrivateFieldSet__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @babel/runtime/helpers/classPrivateFieldSet */ "./node_modules/@babel/runtime/helpers/classPrivateFieldSet.js");
/* harmony import */ var _babel_runtime_helpers_classPrivateFieldSet__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classPrivateFieldSet__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _Component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./Component */ "./src/Component.js");
/* harmony import */ var _Container__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./Container */ "./src/Container.js");
/* harmony import */ var _Utils__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./Utils */ "./src/Utils.js");
/* harmony import */ var _Constants__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./Constants */ "./src/Constants.js");











function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6___default()(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6___default()(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5___default()(this, result); }; }

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





var _innerHeight = new WeakMap();

var _innerWidth = new WeakMap();

var Row = /*#__PURE__*/function (_Container) {
  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4___default()(Row, _Container);

  var _super = _createSuper(Row);

  function Row(x, y, maxWidth, maxHeight, style) {
    var _this;

    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, Row);

    for (var _len = arguments.length, components = new Array(_len > 5 ? _len - 5 : 0), _key = 5; _key < _len; _key++) {
      components[_key - 5] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this, x, y, maxWidth, maxHeight, style].concat(components));

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_7___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2___default()(_this), "selectable", false);

    _innerHeight.set(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2___default()(_this), {
      writable: true,
      value: 0
    });

    _innerWidth.set(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2___default()(_this), {
      writable: true,
      value: 0
    });

    if (!_Constants__WEBPACK_IMPORTED_MODULE_13__["default"].Setting.DISABLE_EXPERIMENTAL_OPTIMIZATIONS) {
      _this.updateInnerWidth();

      _this.updateInnerHeight();

      _this.addChangeAction(function () {
        _this.updateInnerWidth();

        _this.updateInnerHeight();
      });
    }

    return _this;
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(Row, [{
    key: "draw",
    value: function draw(context) {
      var _this2 = this;

      if (this.hidden) return;

      _babel_runtime_helpers_get__WEBPACK_IMPORTED_MODULE_3___default()(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6___default()(Row.prototype), "draw", this).call(this, context);

      var canvas = context.canvas;
      var ctx = canvas.getContext("2d");
      ctx.save();
      var ctxTemp = ctx;

      if (this.isCutting) {
        ctxTemp = this.canvasTmp.getContext("2d");
        ctxTemp.scale(_Constants__WEBPACK_IMPORTED_MODULE_13__["default"].Setting.PIXEL_RATIO, _Constants__WEBPACK_IMPORTED_MODULE_13__["default"].Setting.PIXEL_RATIO);
      }

      if (_babel_runtime_helpers_get__WEBPACK_IMPORTED_MODULE_3___default()(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6___default()(Row.prototype), "components", this) != null) {
        var currentX = this.style.padding;

        _babel_runtime_helpers_get__WEBPACK_IMPORTED_MODULE_3___default()(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6___default()(Row.prototype), "components", this).forEach(function (component) {
          currentX = _this2.drawComponent(component, currentX, ctxTemp);
        });
      }

      if (this.isCutting) {
        _Utils__WEBPACK_IMPORTED_MODULE_12__["default"].drawImageData(ctx, this.canvasTmp, this.x, this.y, this.width, this.height, this.x * _Constants__WEBPACK_IMPORTED_MODULE_13__["default"].Setting.PIXEL_RATIO, this.y * _Constants__WEBPACK_IMPORTED_MODULE_13__["default"].Setting.PIXEL_RATIO, this.width * _Constants__WEBPACK_IMPORTED_MODULE_13__["default"].Setting.PIXEL_RATIO, this.height * _Constants__WEBPACK_IMPORTED_MODULE_13__["default"].Setting.PIXEL_RATIO);
      }

      _babel_runtime_helpers_get__WEBPACK_IMPORTED_MODULE_3___default()(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6___default()(Row.prototype), "drawScrollbars", this).call(this, ctx);

      ctx.restore();
    }
  }, {
    key: "drawComponent",
    value: function drawComponent(component, currentX, ctx) {
      if (component instanceof _Component__WEBPACK_IMPORTED_MODULE_10__["default"]) {
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

      _babel_runtime_helpers_get__WEBPACK_IMPORTED_MODULE_3___default()(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6___default()(Row.prototype), "components", this).forEach(function (component) {
        if (component.height > maxHeight && !component.hidden) maxHeight = component.height;
      });

      _babel_runtime_helpers_classPrivateFieldSet__WEBPACK_IMPORTED_MODULE_9___default()(this, _innerHeight, maxHeight + this.style.padding);
    }
  }, {
    key: "updateInnerWidth",
    value: function updateInnerWidth() {
      var totalWidth = 0;

      _babel_runtime_helpers_get__WEBPACK_IMPORTED_MODULE_3___default()(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6___default()(Row.prototype), "components", this).forEach(function (component) {
        if (!component.hidden) totalWidth += component.width;
      });

      _babel_runtime_helpers_classPrivateFieldSet__WEBPACK_IMPORTED_MODULE_9___default()(this, _innerWidth, totalWidth + this.style.spaceBetweenComponents * (_babel_runtime_helpers_get__WEBPACK_IMPORTED_MODULE_3___default()(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6___default()(Row.prototype), "components", this).length - 1) + this.style.padding);
    }
  }, {
    key: "innerHeight",
    get: function get() {
      if (_Constants__WEBPACK_IMPORTED_MODULE_13__["default"].Setting.DISABLE_EXPERIMENTAL_OPTIMIZATIONS) this.updateInnerHeight();
      return _babel_runtime_helpers_classPrivateFieldGet__WEBPACK_IMPORTED_MODULE_8___default()(this, _innerHeight);
    }
  }, {
    key: "innerWidth",
    get: function get() {
      if (_Constants__WEBPACK_IMPORTED_MODULE_13__["default"].Setting.DISABLE_EXPERIMENTAL_OPTIMIZATIONS) this.updateInnerWidth();
      return _babel_runtime_helpers_classPrivateFieldGet__WEBPACK_IMPORTED_MODULE_8___default()(this, _innerWidth);
    }
  }, {
    key: "width",
    get: function get() {
      var width = this.innerWidth || this.parent && this.parent.width;
      var min = this.maxWidth ? Math.min(this.maxWidth, width) : null;
      return this.minWidth ? Math.max(this.minWidth, min || width) : min || width;
    }
  }, {
    key: "height",
    get: function get() {
      var height = this.innerHeight || this.parent && this.parent.height;
      var min = this.maxHeight ? Math.min(this.maxHeight, height) : null;
      return this.minHeight ? Math.max(this.minHeight, min || height) : min || height;
    }
  }, {
    key: "defaultStyle",
    get: function get() {
      return _babel_runtime_helpers_get__WEBPACK_IMPORTED_MODULE_3___default()(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6___default()(Row.prototype), "defaultStyle", this);
    }
  }]);

  return Row;
}(_Container__WEBPACK_IMPORTED_MODULE_11__["default"]);



/***/ }),

/***/ "./src/Scene.js":
/*!**********************!*\
  !*** ./src/Scene.js ***!
  \**********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Scene; });
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/assertThisInitialized */ "./node_modules/@babel/runtime/helpers/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_helpers_get__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/get */ "./node_modules/@babel/runtime/helpers/get.js");
/* harmony import */ var _babel_runtime_helpers_get__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_get__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/inherits */ "./node_modules/@babel/runtime/helpers/inherits.js");
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _Input__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./Input */ "./src/Input.js");
/* harmony import */ var _Container__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./Container */ "./src/Container.js");
/* harmony import */ var _Utils__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./Utils */ "./src/Utils.js");
/* harmony import */ var _Style__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./Style */ "./src/Style.js");
/* harmony import */ var _Constants__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./Constants */ "./src/Constants.js");









function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6___default()(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6___default()(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5___default()(this, result); }; }

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






var Scene = /*#__PURE__*/function (_Container) {
  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4___default()(Scene, _Container);

  var _super = _createSuper(Scene);

  function Scene() {
    var _this2;

    var _this;

    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, Scene);

    _this = _super.call(this);

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_7___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2___default()(_this), "selectable", false);

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_7___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2___default()(_this), "enableEvents", false);

    (_this2 = _this).addAll.apply(_this2, arguments);

    return _this;
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(Scene, [{
    key: "draw",
    value: function draw(context) {
      if (this.hidden) return;

      _babel_runtime_helpers_get__WEBPACK_IMPORTED_MODULE_3___default()(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6___default()(Scene.prototype), "draw", this).call(this, context);

      var canvas = context.canvas;
      var ctx = canvas.getContext("2d");
      ctx.save();
      canvas.style.cursor = "default";
      var ctxTemp = ctx;
      if (this.maxWidth || this.maxHeight) ctxTemp = this.canvasTmp.getContext("2d");
      this.drawComponents(ctxTemp); // Draw sorted components

      if (this.maxWidth || this.maxHeight) _Utils__WEBPACK_IMPORTED_MODULE_10__["default"].drawImageData(ctx, this.canvasTmp, this.x, this.y, this.width, this.height, this.x, this.y, this.width, this.height);

      _babel_runtime_helpers_get__WEBPACK_IMPORTED_MODULE_3___default()(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6___default()(Scene.prototype), "drawScrollbars", this).call(this, ctx);

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
      return new _Style__WEBPACK_IMPORTED_MODULE_11__["default"]({
        "padding": _Constants__WEBPACK_IMPORTED_MODULE_12__["default"].Setting.DEFAULT_PADDING
      });
    }
  }]);

  return Scene;
}(_Container__WEBPACK_IMPORTED_MODULE_9__["default"]);



/***/ }),

/***/ "./src/Scrollbar.js":
/*!**************************!*\
  !*** ./src/Scrollbar.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Scrollbar; });
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/assertThisInitialized */ "./node_modules/@babel/runtime/helpers/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_helpers_get__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/get */ "./node_modules/@babel/runtime/helpers/get.js");
/* harmony import */ var _babel_runtime_helpers_get__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_get__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/inherits */ "./node_modules/@babel/runtime/helpers/inherits.js");
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _Constants__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./Constants */ "./src/Constants.js");
/* harmony import */ var _Box__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./Box */ "./src/Box.js");
/* harmony import */ var _Style__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./Style */ "./src/Style.js");









function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6___default()(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6___default()(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5___default()(this, result); }; }

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




var Scrollbar = /*#__PURE__*/function (_Box) {
  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4___default()(Scrollbar, _Box);

  var _super = _createSuper(Scrollbar);

  function Scrollbar(size, style, parent) {
    var _this;

    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, Scrollbar);

    _this = _super.call(this, null, null, null, null, style);

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_7___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2___default()(_this), "selectable", true);

    _this.parent = parent;
    _this.size = size || _Constants__WEBPACK_IMPORTED_MODULE_8__["default"].Setting.SCROLLBAR_DEFAULT_SIZE;
    return _this;
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(Scrollbar, [{
    key: "draw",
    value: function draw(context) {
      if (this.hidden) return;

      if (this.clicked) {
        this.hovered = true;
      }

      _babel_runtime_helpers_get__WEBPACK_IMPORTED_MODULE_3___default()(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6___default()(Scrollbar.prototype), "draw", this).call(this, context);
    }
  }, {
    key: "compareToComponent",
    value: function compareToComponent(otherComponent) {
      return otherComponent.compareToScrollbar(this);
    }
  }, {
    key: "compareToScrollbar",
    value: function compareToScrollbar(otherComponent) {
      return 0;
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
      return new _Style__WEBPACK_IMPORTED_MODULE_10__["default"]({
        "backgroundColor": _Constants__WEBPACK_IMPORTED_MODULE_8__["default"].Setting.SCROLLBAR_DEFAULT_BACKGROUND,
        "backgroundColorHover": _Constants__WEBPACK_IMPORTED_MODULE_8__["default"].Setting.SCROLLBAR_DEFAULT_HOVER_BACKGROUND,
        "backgroundColorDown": _Constants__WEBPACK_IMPORTED_MODULE_8__["default"].Setting.SCROLLBAR_DEFAULT_CLICK_BACKGROUND,
        "borderSize": 0
      });
    }
  }]);

  return Scrollbar;
}(_Box__WEBPACK_IMPORTED_MODULE_9__["default"]);



/***/ }),

/***/ "./src/ScrollbarHorizontal.js":
/*!************************************!*\
  !*** ./src/ScrollbarHorizontal.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ScrollbarHorizontal; });
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/assertThisInitialized */ "./node_modules/@babel/runtime/helpers/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_helpers_get__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/get */ "./node_modules/@babel/runtime/helpers/get.js");
/* harmony import */ var _babel_runtime_helpers_get__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_get__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/inherits */ "./node_modules/@babel/runtime/helpers/inherits.js");
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _Scrollbar__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./Scrollbar */ "./src/Scrollbar.js");









function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6___default()(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6___default()(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5___default()(this, result); }; }

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


var ScrollbarHorizontal = /*#__PURE__*/function (_Scrollbar) {
  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4___default()(ScrollbarHorizontal, _Scrollbar);

  var _super = _createSuper(ScrollbarHorizontal);

  function ScrollbarHorizontal(size, style, parent) {
    var _this;

    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, ScrollbarHorizontal);

    _this = _super.call(this, size, style, parent);

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_7___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2___default()(_this), "selectable", true);

    _this.addMoveAction(function (deltaX) {
      if (_this.parent) {
        _this.parent.offsetScrollX -= deltaX;

        if (_this.parent.reactor) {
          _this.parent.reactor.dispatchEvent("onScroll", -deltaX, 0);
        }
      }
    });

    return _this;
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(ScrollbarHorizontal, [{
    key: "draw",
    value: function draw(context) {
      if (this.scrollAreaSizeX > 0) {
        _babel_runtime_helpers_get__WEBPACK_IMPORTED_MODULE_3___default()(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6___default()(ScrollbarHorizontal.prototype), "draw", this).call(this, context);
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

  return ScrollbarHorizontal;
}(_Scrollbar__WEBPACK_IMPORTED_MODULE_8__["default"]);



/***/ }),

/***/ "./src/ScrollbarVertical.js":
/*!**********************************!*\
  !*** ./src/ScrollbarVertical.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ScrollbarVertical; });
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/assertThisInitialized */ "./node_modules/@babel/runtime/helpers/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_helpers_get__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/get */ "./node_modules/@babel/runtime/helpers/get.js");
/* harmony import */ var _babel_runtime_helpers_get__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_get__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/inherits */ "./node_modules/@babel/runtime/helpers/inherits.js");
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _Scrollbar__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./Scrollbar */ "./src/Scrollbar.js");









function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6___default()(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6___default()(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5___default()(this, result); }; }

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


var ScrollbarVertical = /*#__PURE__*/function (_Scrollbar) {
  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4___default()(ScrollbarVertical, _Scrollbar);

  var _super = _createSuper(ScrollbarVertical);

  function ScrollbarVertical(size, style, parent) {
    var _this;

    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, ScrollbarVertical);

    _this = _super.call(this, size, style, parent);

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_7___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2___default()(_this), "selectable", true);

    _this.addMoveAction(function (deltaX, deltaY) {
      if (_this.parent) {
        _this.parent.offsetScrollY -= deltaY;

        if (_this.parent.reactor) {
          _this.parent.reactor.dispatchEvent("onScroll", 0, -deltaY);
        }
      }
    });

    return _this;
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(ScrollbarVertical, [{
    key: "draw",
    value: function draw(context) {
      if (this.scrollAreaSizeY > 0) {
        _babel_runtime_helpers_get__WEBPACK_IMPORTED_MODULE_3___default()(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6___default()(ScrollbarVertical.prototype), "draw", this).call(this, context);
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

  return ScrollbarVertical;
}(_Scrollbar__WEBPACK_IMPORTED_MODULE_8__["default"]);



/***/ }),

/***/ "./src/Select.js":
/*!***********************!*\
  !*** ./src/Select.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Select; });
/* harmony import */ var _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/toConsumableArray */ "./node_modules/@babel/runtime/helpers/toConsumableArray.js");
/* harmony import */ var _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/assertThisInitialized */ "./node_modules/@babel/runtime/helpers/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_helpers_set__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/set */ "./node_modules/@babel/runtime/helpers/set.js");
/* harmony import */ var _babel_runtime_helpers_set__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_set__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _babel_runtime_helpers_get__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/get */ "./node_modules/@babel/runtime/helpers/get.js");
/* harmony import */ var _babel_runtime_helpers_get__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_get__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime/helpers/inherits */ "./node_modules/@babel/runtime/helpers/inherits.js");
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _babel_runtime_helpers_classPrivateFieldGet__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @babel/runtime/helpers/classPrivateFieldGet */ "./node_modules/@babel/runtime/helpers/classPrivateFieldGet.js");
/* harmony import */ var _babel_runtime_helpers_classPrivateFieldGet__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classPrivateFieldGet__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _babel_runtime_helpers_classPrivateFieldSet__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @babel/runtime/helpers/classPrivateFieldSet */ "./node_modules/@babel/runtime/helpers/classPrivateFieldSet.js");
/* harmony import */ var _babel_runtime_helpers_classPrivateFieldSet__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classPrivateFieldSet__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _Label__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./Label */ "./src/Label.js");
/* harmony import */ var _Button__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./Button */ "./src/Button.js");
/* harmony import */ var _Triangle__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./Triangle */ "./src/Triangle.js");
/* harmony import */ var _Style__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./Style */ "./src/Style.js");
/* harmony import */ var _Constants__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./Constants */ "./src/Constants.js");












function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_8___default()(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_8___default()(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_7___default()(this, result); }; }

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






var _width = new WeakMap();

var Select = /*#__PURE__*/function (_Button) {
  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_6___default()(Select, _Button);

  var _super = _createSuper(Select);

  function Select(x, y, maxWidth, maxHeight, style, optionContainer, defaultOption) {
    var _this;

    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1___default()(this, Select);

    _this = _super.call(this, x, y, maxWidth, maxHeight, style);

    _width.set(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3___default()(_this), {
      writable: true,
      value: 0
    });

    _this.optionContainer = optionContainer;
    if (defaultOption) _this.selectedOption = defaultOption;
    _this.label = new _Label__WEBPACK_IMPORTED_MODULE_11__["default"]("", x, y, style);

    _this.label.style.setAll({
      "alignement": _Constants__WEBPACK_IMPORTED_MODULE_15__["default"].Alignement.LEFT,
      "verticalAlignement": _Constants__WEBPACK_IMPORTED_MODULE_15__["default"].VerticalAlignement.CENTER
    });

    _this.triangle = new _Triangle__WEBPACK_IMPORTED_MODULE_13__["default"](null, null, 8, 8, style);

    _this.triangle.style.setAll({
      "alignement": _Constants__WEBPACK_IMPORTED_MODULE_15__["default"].Alignement.RIGHT,
      "verticalAlignement": _Constants__WEBPACK_IMPORTED_MODULE_15__["default"].VerticalAlignement.CENTER
    });

    _this.addAll(_this.label, _this.triangle);

    _this.addClickAction(function () {
      if (_this.optionContainer) {
        _this.optionContainer.hidden = false;
      }
    });

    if (!_Constants__WEBPACK_IMPORTED_MODULE_15__["default"].Setting.DISABLE_EXPERIMENTAL_OPTIMIZATIONS) {
      _this.updateWidth();

      _this.addChangeAction(function () {
        return _this.updateWidth();
      });
    }

    return _this;
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2___default()(Select, [{
    key: "draw",
    value: function draw(context) {
      if (this.hidden) return;

      if (this.selectedOption && this.selectedOption.label) {
        this.label.text = this.selectedOption.label.text;
      }

      _babel_runtime_helpers_get__WEBPACK_IMPORTED_MODULE_5___default()(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_8___default()(Select.prototype), "draw", this).call(this, context);

      if (this.optionContainer) {
        this.optionContainer.select = this;
      }
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

      _babel_runtime_helpers_classPrivateFieldSet__WEBPACK_IMPORTED_MODULE_10___default()(this, _width, maxWidth + this.style.padding + this.triangle.width + 15);
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
    key: "width",
    get: function get() {
      if (_Constants__WEBPACK_IMPORTED_MODULE_15__["default"].Setting.DISABLE_EXPERIMENTAL_OPTIMIZATIONS) this.updateWidth();
      return _babel_runtime_helpers_classPrivateFieldGet__WEBPACK_IMPORTED_MODULE_9___default()(this, _width);
    }
  }, {
    key: "allComponents",
    get: function get() {
      var components = [];
      components.push.apply(components, _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0___default()(_babel_runtime_helpers_get__WEBPACK_IMPORTED_MODULE_5___default()(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_8___default()(Select.prototype), "allComponents", this)));
      return components;
    }
  }, {
    key: "defaultStyle",
    get: function get() {
      return new _Style__WEBPACK_IMPORTED_MODULE_14__["default"]({
        "backgroundColor": _Constants__WEBPACK_IMPORTED_MODULE_15__["default"].Setting.SELECT_DEFAULT_BACKGROUND,
        "backgroundColorHover": _Constants__WEBPACK_IMPORTED_MODULE_15__["default"].Setting.SELECT_DEFAULT_HOVER_BACKGROUND,
        "backgroundColorDown": _Constants__WEBPACK_IMPORTED_MODULE_15__["default"].Setting.SELECT_DEFAULT_CLICK_BACKGROUND,
        "padding": _Constants__WEBPACK_IMPORTED_MODULE_15__["default"].Setting.DEFAULT_PADDING
      });
    }
  }, {
    key: "selected",
    get: function get() {
      return _babel_runtime_helpers_get__WEBPACK_IMPORTED_MODULE_5___default()(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_8___default()(Select.prototype), "selected", this) || this.optionContainer.selected;
    },
    set: function set(selected) {
      _babel_runtime_helpers_set__WEBPACK_IMPORTED_MODULE_4___default()(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_8___default()(Select.prototype), "selected", selected, this, true);
    }
  }]);

  return Select;
}(_Button__WEBPACK_IMPORTED_MODULE_12__["default"]);



/***/ }),

/***/ "./src/SelectOption.js":
/*!*****************************!*\
  !*** ./src/SelectOption.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return SelectOption; });
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
/* harmony import */ var _Button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Button */ "./src/Button.js");
/* harmony import */ var _Constants__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./Constants */ "./src/Constants.js");
/* harmony import */ var _Label__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./Label */ "./src/Label.js");
/* harmony import */ var _Style__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./Style */ "./src/Style.js");







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





var SelectOption = /*#__PURE__*/function (_Button) {
  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_3___default()(SelectOption, _Button);

  var _super = _createSuper(SelectOption);

  function SelectOption(label, style) {
    var _this;

    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, SelectOption);

    var defaultLabel = new _Label__WEBPACK_IMPORTED_MODULE_8__["default"]("Option");
    _this = _super.call(this, null, null, null, null, style, label || defaultLabel);
    _this.label = label || defaultLabel;
    return _this;
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(SelectOption, [{
    key: "add",
    value: function add(component) {
      if (component instanceof _Label__WEBPACK_IMPORTED_MODULE_8__["default"]) {
        this.clear();

        _babel_runtime_helpers_get__WEBPACK_IMPORTED_MODULE_2___default()(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5___default()(SelectOption.prototype), "add", this).call(this, component);
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

  return SelectOption;
}(_Button__WEBPACK_IMPORTED_MODULE_6__["default"]);



/***/ }),

/***/ "./src/SelectOptionsContainer.js":
/*!***************************************!*\
  !*** ./src/SelectOptionsContainer.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return SelectDropdown; });
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/assertThisInitialized */ "./node_modules/@babel/runtime/helpers/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_helpers_set__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/set */ "./node_modules/@babel/runtime/helpers/set.js");
/* harmony import */ var _babel_runtime_helpers_set__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_set__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_helpers_get__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/get */ "./node_modules/@babel/runtime/helpers/get.js");
/* harmony import */ var _babel_runtime_helpers_get__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_get__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/inherits */ "./node_modules/@babel/runtime/helpers/inherits.js");
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _babel_runtime_helpers_classPrivateFieldGet__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @babel/runtime/helpers/classPrivateFieldGet */ "./node_modules/@babel/runtime/helpers/classPrivateFieldGet.js");
/* harmony import */ var _babel_runtime_helpers_classPrivateFieldGet__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classPrivateFieldGet__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _babel_runtime_helpers_classPrivateFieldSet__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @babel/runtime/helpers/classPrivateFieldSet */ "./node_modules/@babel/runtime/helpers/classPrivateFieldSet.js");
/* harmony import */ var _babel_runtime_helpers_classPrivateFieldSet__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classPrivateFieldSet__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _Col__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./Col */ "./src/Col.js");
/* harmony import */ var _Style__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./Style */ "./src/Style.js");
/* harmony import */ var _Constants__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./Constants */ "./src/Constants.js");












function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_7___default()(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_7___default()(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_6___default()(this, result); }; }

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




var _selectedOption = new WeakMap();

var SelectDropdown = /*#__PURE__*/function (_Col) {
  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5___default()(SelectDropdown, _Col);

  var _super = _createSuper(SelectDropdown);

  function SelectDropdown(maxHeightDropdown, style) {
    var _this;

    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, SelectDropdown);

    for (var _len = arguments.length, options = new Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
      options[_key - 2] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this, null, null, null, maxHeightDropdown, style].concat(options));

    _selectedOption.set(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2___default()(_this), {
      writable: true,
      value: void 0
    });

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_8___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2___default()(_this), "selectable", false);

    _babel_runtime_helpers_classPrivateFieldSet__WEBPACK_IMPORTED_MODULE_10___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2___default()(_this), _selectedOption, 0);

    _this.select = null;
    return _this;
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(SelectDropdown, [{
    key: "draw",
    value: function draw(context) {
      _babel_runtime_helpers_get__WEBPACK_IMPORTED_MODULE_4___default()(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_7___default()(SelectDropdown.prototype), "draw", this).call(this, context);
    }
  }, {
    key: "add",
    value: function add(component) {
      var _this2 = this;

      _babel_runtime_helpers_get__WEBPACK_IMPORTED_MODULE_4___default()(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_7___default()(SelectDropdown.prototype), "add", this).call(this, component);

      component.addClickAction(function () {
        _babel_runtime_helpers_classPrivateFieldSet__WEBPACK_IMPORTED_MODULE_10___default()(_this2, _selectedOption, _this2.getComponentId(component));

        _this2.selected = false;
        _this2.hidden = true;
        if (_this2.select) _this2.select.selected = false;
      });
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
      return Math.max(0, Math.min(this.components.length - 1, _babel_runtime_helpers_classPrivateFieldGet__WEBPACK_IMPORTED_MODULE_9___default()(this, _selectedOption)));
    },
    set: function set(id) {
      if (id != _babel_runtime_helpers_classPrivateFieldGet__WEBPACK_IMPORTED_MODULE_9___default()(this, _selectedOption)) {
        _babel_runtime_helpers_classPrivateFieldSet__WEBPACK_IMPORTED_MODULE_10___default()(this, _selectedOption, id);

        this.reactor.dispatchEvent("onChange", this);
      }
    }
  }, {
    key: "defaultStyle",
    get: function get() {
      return new _Style__WEBPACK_IMPORTED_MODULE_12__["default"]({
        "padding": 0,
        "spaceBetweenComponents": 0,
        "backgroundColor": _Constants__WEBPACK_IMPORTED_MODULE_13__["default"].Setting.SELECT_DEFAULT_BACKGROUND,
        "backgroundColorHover": null,
        "backgroundColorDown": null,
        "scrollXDisabled": false,
        "scrollYDisabled": false
      });
    }
  }, {
    key: "hidden",
    get: function get() {
      return _babel_runtime_helpers_get__WEBPACK_IMPORTED_MODULE_4___default()(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_7___default()(SelectDropdown.prototype), "hidden", this) || this.select && !this.select.selected || !this.select;
    },
    set: function set(hidden) {
      return _babel_runtime_helpers_set__WEBPACK_IMPORTED_MODULE_3___default()(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_7___default()(SelectDropdown.prototype), "hidden", hidden, this, true);
    }
  }]);

  return SelectDropdown;
}(_Col__WEBPACK_IMPORTED_MODULE_11__["default"]);



/***/ }),

/***/ "./src/Style.js":
/*!**********************!*\
  !*** ./src/Style.js ***!
  \**********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Style; });
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_helpers_classPrivateFieldGet__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/classPrivateFieldGet */ "./node_modules/@babel/runtime/helpers/classPrivateFieldGet.js");
/* harmony import */ var _babel_runtime_helpers_classPrivateFieldGet__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classPrivateFieldGet__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _Constants__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Constants */ "./src/Constants.js");





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


var _styles = new WeakMap();

var Style = /*#__PURE__*/function () {
  function Style(styles) {
    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, Style);

    _styles.set(this, {
      writable: true,
      value: {}
    });

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2___default()(this, "component", void 0);

    this.setAll(styles);
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(Style, [{
    key: "set",
    value: function set(style, value) {
      if (_babel_runtime_helpers_classPrivateFieldGet__WEBPACK_IMPORTED_MODULE_3___default()(this, _styles)[style] != value) {
        _babel_runtime_helpers_classPrivateFieldGet__WEBPACK_IMPORTED_MODULE_3___default()(this, _styles)[style] = value;
        if (this.component && this.component.reactor) this.component.reactor.dispatchEvent("onChange", this);
      }
    }
  }, {
    key: "setAll",
    value: function setAll(styles) {
      if (styles) {
        for (var style in styles) {
          if (styles.hasOwnProperty(style)) {
            this.set(style, styles[style]);
          }
        }
      }
    }
  }, {
    key: "copy",
    value: function copy() {
      return new Style(_babel_runtime_helpers_classPrivateFieldGet__WEBPACK_IMPORTED_MODULE_3___default()(this, _styles));
    }
  }, {
    key: "getStyles",
    value: function getStyles() {
      var styles = {};

      for (var style in _babel_runtime_helpers_classPrivateFieldGet__WEBPACK_IMPORTED_MODULE_3___default()(this, _styles)) {
        if (_babel_runtime_helpers_classPrivateFieldGet__WEBPACK_IMPORTED_MODULE_3___default()(this, _styles).hasOwnProperty(style)) {
          styles[style] = _babel_runtime_helpers_classPrivateFieldGet__WEBPACK_IMPORTED_MODULE_3___default()(this, _styles)[style];
        }
      }

      return styles;
    }
  }, {
    key: "fontColor",
    get: function get() {
      return _babel_runtime_helpers_classPrivateFieldGet__WEBPACK_IMPORTED_MODULE_3___default()(this, _styles).fontColor;
    }
  }, {
    key: "fontColorHover",
    get: function get() {
      return _babel_runtime_helpers_classPrivateFieldGet__WEBPACK_IMPORTED_MODULE_3___default()(this, _styles).fontColorHover;
    }
  }, {
    key: "fontColorDown",
    get: function get() {
      return _babel_runtime_helpers_classPrivateFieldGet__WEBPACK_IMPORTED_MODULE_3___default()(this, _styles).fontColorDown;
    }
  }, {
    key: "fontFamily",
    get: function get() {
      return _babel_runtime_helpers_classPrivateFieldGet__WEBPACK_IMPORTED_MODULE_3___default()(this, _styles).fontFamily != null ? _babel_runtime_helpers_classPrivateFieldGet__WEBPACK_IMPORTED_MODULE_3___default()(this, _styles).fontFamily : _Constants__WEBPACK_IMPORTED_MODULE_4__["default"].Setting.FONT_FAMILY;
    }
  }, {
    key: "fontSize",
    get: function get() {
      return _babel_runtime_helpers_classPrivateFieldGet__WEBPACK_IMPORTED_MODULE_3___default()(this, _styles).fontSize != null ? _babel_runtime_helpers_classPrivateFieldGet__WEBPACK_IMPORTED_MODULE_3___default()(this, _styles).fontSize : _Constants__WEBPACK_IMPORTED_MODULE_4__["default"].Setting.FONT_SIZE;
    }
  }, {
    key: "bold",
    get: function get() {
      return _babel_runtime_helpers_classPrivateFieldGet__WEBPACK_IMPORTED_MODULE_3___default()(this, _styles).bold;
    }
  }, {
    key: "underline",
    get: function get() {
      return _babel_runtime_helpers_classPrivateFieldGet__WEBPACK_IMPORTED_MODULE_3___default()(this, _styles).underline;
    }
  }, {
    key: "wrap",
    get: function get() {
      return _babel_runtime_helpers_classPrivateFieldGet__WEBPACK_IMPORTED_MODULE_3___default()(this, _styles).wrap;
    }
  }, {
    key: "backgroundColor",
    get: function get() {
      return _babel_runtime_helpers_classPrivateFieldGet__WEBPACK_IMPORTED_MODULE_3___default()(this, _styles).backgroundColor;
    }
  }, {
    key: "foregroundColor",
    get: function get() {
      return _babel_runtime_helpers_classPrivateFieldGet__WEBPACK_IMPORTED_MODULE_3___default()(this, _styles).foregroundColor;
    }
  }, {
    key: "backgroundColorHover",
    get: function get() {
      return _babel_runtime_helpers_classPrivateFieldGet__WEBPACK_IMPORTED_MODULE_3___default()(this, _styles).backgroundColorHover;
    }
  }, {
    key: "backgroundColorDown",
    get: function get() {
      return _babel_runtime_helpers_classPrivateFieldGet__WEBPACK_IMPORTED_MODULE_3___default()(this, _styles).backgroundColorDown;
    }
  }, {
    key: "borderColor",
    get: function get() {
      return _babel_runtime_helpers_classPrivateFieldGet__WEBPACK_IMPORTED_MODULE_3___default()(this, _styles).borderColor;
    }
  }, {
    key: "borderColorHover",
    get: function get() {
      return _babel_runtime_helpers_classPrivateFieldGet__WEBPACK_IMPORTED_MODULE_3___default()(this, _styles).borderColorHover;
    }
  }, {
    key: "borderColorDown",
    get: function get() {
      return _babel_runtime_helpers_classPrivateFieldGet__WEBPACK_IMPORTED_MODULE_3___default()(this, _styles).borderColorDown;
    }
  }, {
    key: "borderColorSelected",
    get: function get() {
      return _babel_runtime_helpers_classPrivateFieldGet__WEBPACK_IMPORTED_MODULE_3___default()(this, _styles).borderColorSelected != null ? _babel_runtime_helpers_classPrivateFieldGet__WEBPACK_IMPORTED_MODULE_3___default()(this, _styles).borderColorSelected : _Constants__WEBPACK_IMPORTED_MODULE_4__["default"].Setting.DEFAULT_BORDER_COLOR_SELECTED;
    }
  }, {
    key: "borderSize",
    get: function get() {
      return _babel_runtime_helpers_classPrivateFieldGet__WEBPACK_IMPORTED_MODULE_3___default()(this, _styles).borderSize != null ? _babel_runtime_helpers_classPrivateFieldGet__WEBPACK_IMPORTED_MODULE_3___default()(this, _styles).borderSize : _Constants__WEBPACK_IMPORTED_MODULE_4__["default"].Setting.DEFAULT_BORDER_SIZE;
    }
  }, {
    key: "selectColor",
    get: function get() {
      return _babel_runtime_helpers_classPrivateFieldGet__WEBPACK_IMPORTED_MODULE_3___default()(this, _styles).selectColor;
    }
  }, {
    key: "alignement",
    get: function get() {
      return _babel_runtime_helpers_classPrivateFieldGet__WEBPACK_IMPORTED_MODULE_3___default()(this, _styles).alignement;
    }
  }, {
    key: "verticalAlignement",
    get: function get() {
      return _babel_runtime_helpers_classPrivateFieldGet__WEBPACK_IMPORTED_MODULE_3___default()(this, _styles).verticalAlignement;
    }
  }, {
    key: "disableAnimation",
    get: function get() {
      return _babel_runtime_helpers_classPrivateFieldGet__WEBPACK_IMPORTED_MODULE_3___default()(this, _styles).disableAnimation;
    }
  }, {
    key: "scrollXDisabled",
    get: function get() {
      return _babel_runtime_helpers_classPrivateFieldGet__WEBPACK_IMPORTED_MODULE_3___default()(this, _styles).scrollXDisabled;
    }
  }, {
    key: "scrollYDisabled",
    get: function get() {
      return _babel_runtime_helpers_classPrivateFieldGet__WEBPACK_IMPORTED_MODULE_3___default()(this, _styles).scrollYDisabled;
    }
  }, {
    key: "padding",
    get: function get() {
      return _babel_runtime_helpers_classPrivateFieldGet__WEBPACK_IMPORTED_MODULE_3___default()(this, _styles).padding != null ? _babel_runtime_helpers_classPrivateFieldGet__WEBPACK_IMPORTED_MODULE_3___default()(this, _styles).padding : _Constants__WEBPACK_IMPORTED_MODULE_4__["default"].Setting.DEFAULT_PADDING;
    }
  }, {
    key: "spaceBetweenComponents",
    get: function get() {
      return _babel_runtime_helpers_classPrivateFieldGet__WEBPACK_IMPORTED_MODULE_3___default()(this, _styles).spaceBetweenComponents != null ? _babel_runtime_helpers_classPrivateFieldGet__WEBPACK_IMPORTED_MODULE_3___default()(this, _styles).spaceBetweenComponents : _Constants__WEBPACK_IMPORTED_MODULE_4__["default"].Setting.DEFAULT_SPACING;
    }
  }, {
    key: "hidden",
    get: function get() {
      return _babel_runtime_helpers_classPrivateFieldGet__WEBPACK_IMPORTED_MODULE_3___default()(this, _styles).hidden;
    }
  }, {
    key: "blurBackground",
    get: function get() {
      return _babel_runtime_helpers_classPrivateFieldGet__WEBPACK_IMPORTED_MODULE_3___default()(this, _styles).blurBackground;
    }
  }, {
    key: "lineWidth",
    get: function get() {
      return _babel_runtime_helpers_classPrivateFieldGet__WEBPACK_IMPORTED_MODULE_3___default()(this, _styles).lineWidth;
    }
  }, {
    key: "animationDuration",
    get: function get() {
      return _babel_runtime_helpers_classPrivateFieldGet__WEBPACK_IMPORTED_MODULE_3___default()(this, _styles).animationDuration != null ? _babel_runtime_helpers_classPrivateFieldGet__WEBPACK_IMPORTED_MODULE_3___default()(this, _styles).animationDuration : _Constants__WEBPACK_IMPORTED_MODULE_4__["default"].Setting.DEFAULT_ANIMATION_DURATION;
    }
  }, {
    key: "foreground",
    get: function get() {
      return _babel_runtime_helpers_classPrivateFieldGet__WEBPACK_IMPORTED_MODULE_3___default()(this, _styles).foreground;
    }
  }, {
    key: "zIndex",
    get: function get() {
      return _babel_runtime_helpers_classPrivateFieldGet__WEBPACK_IMPORTED_MODULE_3___default()(this, _styles).zIndex != null ? _babel_runtime_helpers_classPrivateFieldGet__WEBPACK_IMPORTED_MODULE_3___default()(this, _styles).zIndex : 0;
    }
  }, {
    key: "lineCap",
    get: function get() {
      return _babel_runtime_helpers_classPrivateFieldGet__WEBPACK_IMPORTED_MODULE_3___default()(this, _styles).lineCap;
    }
  }, {
    key: "fill",
    get: function get() {
      return _babel_runtime_helpers_classPrivateFieldGet__WEBPACK_IMPORTED_MODULE_3___default()(this, _styles).fill;
    }
  }, {
    key: "fillColor",
    get: function get() {
      return _babel_runtime_helpers_classPrivateFieldGet__WEBPACK_IMPORTED_MODULE_3___default()(this, _styles).fillColor;
    }
  }, {
    key: "color",
    get: function get() {
      return _babel_runtime_helpers_classPrivateFieldGet__WEBPACK_IMPORTED_MODULE_3___default()(this, _styles).color;
    }
  }, {
    key: "movable",
    get: function get() {
      return _babel_runtime_helpers_classPrivateFieldGet__WEBPACK_IMPORTED_MODULE_3___default()(this, _styles).movable || false;
    }
  }]);

  return Style;
}();



/***/ }),

/***/ "./src/Tooltip.js":
/*!************************!*\
  !*** ./src/Tooltip.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Tooltip; });
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/assertThisInitialized */ "./node_modules/@babel/runtime/helpers/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_helpers_set__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/set */ "./node_modules/@babel/runtime/helpers/set.js");
/* harmony import */ var _babel_runtime_helpers_set__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_set__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_helpers_get__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/get */ "./node_modules/@babel/runtime/helpers/get.js");
/* harmony import */ var _babel_runtime_helpers_get__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_get__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/inherits */ "./node_modules/@babel/runtime/helpers/inherits.js");
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _Col__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./Col */ "./src/Col.js");
/* harmony import */ var _Constants__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./Constants */ "./src/Constants.js");
/* harmony import */ var _Style__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./Style */ "./src/Style.js");










function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_7___default()(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_7___default()(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_6___default()(this, result); }; }

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




var Tooltip = /*#__PURE__*/function (_Col) {
  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5___default()(Tooltip, _Col);

  var _super = _createSuper(Tooltip);

  function Tooltip(style) {
    var _this;

    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, Tooltip);

    for (var _len = arguments.length, components = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      components[_key - 1] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this, null, null, null, null, style].concat(components));

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_8___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2___default()(_this), "selectable", false);

    _this.disabled = true;
    return _this;
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(Tooltip, [{
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

      _babel_runtime_helpers_get__WEBPACK_IMPORTED_MODULE_4___default()(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_7___default()(Tooltip.prototype), "draw", this).call(this, ctx);

      ctx.restore();
    }
  }, {
    key: "compareToComponent",
    value: function compareToComponent(otherComponent) {
      return otherComponent.compareToTooltip(this);
    }
  }, {
    key: "compareToMenu",
    value: function compareToMenu(otherComponent) {
      return 1;
    }
  }, {
    key: "compareToTooltip",
    value: function compareToTooltip(otherComponent) {
      return 0;
    }
  }, {
    key: "compareToNotification",
    value: function compareToNotification(otherComponent) {
      return 1;
    }
  }, {
    key: "width",
    get: function get() {
      return _babel_runtime_helpers_get__WEBPACK_IMPORTED_MODULE_4___default()(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_7___default()(Tooltip.prototype), "width", this) + this.style.padding;
    },
    set: function set(width) {
      _babel_runtime_helpers_set__WEBPACK_IMPORTED_MODULE_3___default()(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_7___default()(Tooltip.prototype), "width", width, this, true);
    }
  }, {
    key: "height",
    get: function get() {
      return _babel_runtime_helpers_get__WEBPACK_IMPORTED_MODULE_4___default()(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_7___default()(Tooltip.prototype), "height", this) + this.style.padding;
    },
    set: function set(height) {
      _babel_runtime_helpers_set__WEBPACK_IMPORTED_MODULE_3___default()(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_7___default()(Tooltip.prototype), "height", height, this, true);
    }
  }, {
    key: "defaultStyle",
    get: function get() {
      return new _Style__WEBPACK_IMPORTED_MODULE_11__["default"]({
        "backgroundColor": _Constants__WEBPACK_IMPORTED_MODULE_10__["default"].Setting.TOOLTIP_DEFAULT_BACKGROUND
      });
    }
  }, {
    key: "hidden",
    get: function get() {
      return _babel_runtime_helpers_get__WEBPACK_IMPORTED_MODULE_4___default()(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_7___default()(Tooltip.prototype), "hidden", this) || this.disabled;
    },
    set: function set(hidden) {
      _babel_runtime_helpers_set__WEBPACK_IMPORTED_MODULE_3___default()(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_7___default()(Tooltip.prototype), "hidden", hidden, this, true);

      this.disabled = hidden;
    }
  }]);

  return Tooltip;
}(_Col__WEBPACK_IMPORTED_MODULE_9__["default"]);



/***/ }),

/***/ "./src/Triangle.js":
/*!*************************!*\
  !*** ./src/Triangle.js ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Triangle; });
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/assertThisInitialized */ "./node_modules/@babel/runtime/helpers/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_helpers_set__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/set */ "./node_modules/@babel/runtime/helpers/set.js");
/* harmony import */ var _babel_runtime_helpers_set__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_set__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_helpers_get__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/get */ "./node_modules/@babel/runtime/helpers/get.js");
/* harmony import */ var _babel_runtime_helpers_get__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_get__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/inherits */ "./node_modules/@babel/runtime/helpers/inherits.js");
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _Component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./Component */ "./src/Component.js");
/* harmony import */ var _Constants__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./Constants */ "./src/Constants.js");
/* harmony import */ var _Utils__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./Utils */ "./src/Utils.js");
/* harmony import */ var _Style__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./Style */ "./src/Style.js");










function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_7___default()(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_7___default()(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_6___default()(this, result); }; }

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





var Triangle = /*#__PURE__*/function (_Component) {
  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5___default()(Triangle, _Component);

  var _super = _createSuper(Triangle);

  function Triangle(x, y, width, height, style) {
    var _this;

    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, Triangle);

    _this = _super.call(this, x, y, width, height, style);

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_8___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2___default()(_this), "selectable", false);

    return _this;
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(Triangle, [{
    key: "draw",
    value: function draw(context) {
      if (this.hidden) return;

      _babel_runtime_helpers_get__WEBPACK_IMPORTED_MODULE_4___default()(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_7___default()(Triangle.prototype), "draw", this).call(this, context);

      var canvas = context.canvas;
      var ctx = canvas.getContext("2d");
      _Utils__WEBPACK_IMPORTED_MODULE_11__["default"].drawTriangle(ctx, this.x, this.y, this.width, this.height, this.style.lineWidth, this.style.color, this.style.lineCap, this.style.fill, this.style.fillColor);
      this.init = true;
    }
  }, {
    key: "width",
    get: function get() {
      return _babel_runtime_helpers_get__WEBPACK_IMPORTED_MODULE_4___default()(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_7___default()(Triangle.prototype), "width", this) + this.style.lineWidth;
    },
    set: function set(width) {
      _babel_runtime_helpers_set__WEBPACK_IMPORTED_MODULE_3___default()(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_7___default()(Triangle.prototype), "width", width, this, true);
    }
  }, {
    key: "height",
    get: function get() {
      return _babel_runtime_helpers_get__WEBPACK_IMPORTED_MODULE_4___default()(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_7___default()(Triangle.prototype), "height", this) + this.style.lineWidth;
    },
    set: function set(height) {
      _babel_runtime_helpers_set__WEBPACK_IMPORTED_MODULE_3___default()(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_7___default()(Triangle.prototype), "height", height, this, true);
    }
  }, {
    key: "defaultStyle",
    get: function get() {
      return new _Style__WEBPACK_IMPORTED_MODULE_12__["default"]({
        "lineWidth": _Constants__WEBPACK_IMPORTED_MODULE_10__["default"].Setting.TRIANGLE_DEFAULT_LINE_SIZE,
        "color": _Constants__WEBPACK_IMPORTED_MODULE_10__["default"].Setting.TRIANGLE_DEFAULT_COLOR,
        "fill": _Constants__WEBPACK_IMPORTED_MODULE_10__["default"].Setting.TRIANGLE_DEFAULT_FILL,
        "lineCap": _Constants__WEBPACK_IMPORTED_MODULE_10__["default"].Setting.TRIANGLE_DEFAULT_LINE_CAP,
        "fillColor": _Constants__WEBPACK_IMPORTED_MODULE_10__["default"].Setting.TRIANGLE_DEFAULT_FILL_COLOR
      });
    }
  }]);

  return Triangle;
}(_Component__WEBPACK_IMPORTED_MODULE_9__["default"]);



/***/ }),

/***/ "./src/Utils.js":
/*!**********************!*\
  !*** ./src/Utils.js ***!
  \**********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
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

/* harmony default export */ __webpack_exports__["default"] = ({
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

      for (; p > 0 && text[p] != " "; p--) {
        ;
      }

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
    return Math.floor(parseNumber(ctx.font) / 1.25);
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

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! exports provided: Constants, Button, ButtonImage, ImageLoader, NotificationMessage, Utils, Menu, Input, Label, Link, Tooltip, Scene, FPSMeter, ProgressBar, Canvas, Component, EasingFunctions, Col, Container, Row, ImageContainer, Arrow, Cross, Scrollbar, ScrollbarVertical, ScrollbarHorizontal, Box, Style, Select, SelectOption, SelectOptionsContainer, Triangle, Circle, Reactor, Event, ReactorCanvas */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Constants */ "./src/Constants.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Constants", function() { return _Constants__WEBPACK_IMPORTED_MODULE_0__["default"]; });

/* harmony import */ var _Button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Button */ "./src/Button.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Button", function() { return _Button__WEBPACK_IMPORTED_MODULE_1__["default"]; });

/* harmony import */ var _ButtonImage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ButtonImage */ "./src/ButtonImage.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ButtonImage", function() { return _ButtonImage__WEBPACK_IMPORTED_MODULE_2__["default"]; });

/* harmony import */ var _ImageLoader__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ImageLoader */ "./src/ImageLoader.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ImageLoader", function() { return _ImageLoader__WEBPACK_IMPORTED_MODULE_3__["default"]; });

/* harmony import */ var _NotificationMessage__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./NotificationMessage */ "./src/NotificationMessage.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "NotificationMessage", function() { return _NotificationMessage__WEBPACK_IMPORTED_MODULE_4__["default"]; });

/* harmony import */ var _Utils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Utils */ "./src/Utils.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Utils", function() { return _Utils__WEBPACK_IMPORTED_MODULE_5__["default"]; });

/* harmony import */ var _Menu__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Menu */ "./src/Menu.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Menu", function() { return _Menu__WEBPACK_IMPORTED_MODULE_6__["default"]; });

/* harmony import */ var _Input__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./Input */ "./src/Input.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Input", function() { return _Input__WEBPACK_IMPORTED_MODULE_7__["default"]; });

/* harmony import */ var _Label__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./Label */ "./src/Label.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Label", function() { return _Label__WEBPACK_IMPORTED_MODULE_8__["default"]; });

/* harmony import */ var _Link__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./Link */ "./src/Link.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Link", function() { return _Link__WEBPACK_IMPORTED_MODULE_9__["default"]; });

/* harmony import */ var _Tooltip__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./Tooltip */ "./src/Tooltip.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Tooltip", function() { return _Tooltip__WEBPACK_IMPORTED_MODULE_10__["default"]; });

/* harmony import */ var _Scene__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./Scene */ "./src/Scene.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Scene", function() { return _Scene__WEBPACK_IMPORTED_MODULE_11__["default"]; });

/* harmony import */ var _FPSMeter__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./FPSMeter */ "./src/FPSMeter.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "FPSMeter", function() { return _FPSMeter__WEBPACK_IMPORTED_MODULE_12__["default"]; });

/* harmony import */ var _ProgressBar__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./ProgressBar */ "./src/ProgressBar.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ProgressBar", function() { return _ProgressBar__WEBPACK_IMPORTED_MODULE_13__["default"]; });

/* harmony import */ var _Canvas__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./Canvas */ "./src/Canvas.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Canvas", function() { return _Canvas__WEBPACK_IMPORTED_MODULE_14__["default"]; });

/* harmony import */ var _Component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./Component */ "./src/Component.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Component", function() { return _Component__WEBPACK_IMPORTED_MODULE_15__["default"]; });

/* harmony import */ var _EasingFunctions__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./EasingFunctions */ "./src/EasingFunctions.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "EasingFunctions", function() { return _EasingFunctions__WEBPACK_IMPORTED_MODULE_16__["default"]; });

/* harmony import */ var _Col__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./Col */ "./src/Col.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Col", function() { return _Col__WEBPACK_IMPORTED_MODULE_17__["default"]; });

/* harmony import */ var _Container__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./Container */ "./src/Container.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Container", function() { return _Container__WEBPACK_IMPORTED_MODULE_18__["default"]; });

/* harmony import */ var _Row__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./Row */ "./src/Row.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Row", function() { return _Row__WEBPACK_IMPORTED_MODULE_19__["default"]; });

/* harmony import */ var _ImageContainer__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./ImageContainer */ "./src/ImageContainer.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ImageContainer", function() { return _ImageContainer__WEBPACK_IMPORTED_MODULE_20__["default"]; });

/* harmony import */ var _Arrow__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./Arrow */ "./src/Arrow.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Arrow", function() { return _Arrow__WEBPACK_IMPORTED_MODULE_21__["default"]; });

/* harmony import */ var _Cross__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./Cross */ "./src/Cross.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Cross", function() { return _Cross__WEBPACK_IMPORTED_MODULE_22__["default"]; });

/* harmony import */ var _Scrollbar__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./Scrollbar */ "./src/Scrollbar.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Scrollbar", function() { return _Scrollbar__WEBPACK_IMPORTED_MODULE_23__["default"]; });

/* harmony import */ var _ScrollbarVertical__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./ScrollbarVertical */ "./src/ScrollbarVertical.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ScrollbarVertical", function() { return _ScrollbarVertical__WEBPACK_IMPORTED_MODULE_24__["default"]; });

/* harmony import */ var _ScrollbarHorizontal__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./ScrollbarHorizontal */ "./src/ScrollbarHorizontal.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ScrollbarHorizontal", function() { return _ScrollbarHorizontal__WEBPACK_IMPORTED_MODULE_25__["default"]; });

/* harmony import */ var _Box__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./Box */ "./src/Box.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Box", function() { return _Box__WEBPACK_IMPORTED_MODULE_26__["default"]; });

/* harmony import */ var _Style__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./Style */ "./src/Style.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Style", function() { return _Style__WEBPACK_IMPORTED_MODULE_27__["default"]; });

/* harmony import */ var _Select__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./Select */ "./src/Select.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Select", function() { return _Select__WEBPACK_IMPORTED_MODULE_28__["default"]; });

/* harmony import */ var _SelectOption__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./SelectOption */ "./src/SelectOption.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SelectOption", function() { return _SelectOption__WEBPACK_IMPORTED_MODULE_29__["default"]; });

/* harmony import */ var _SelectOptionsContainer__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./SelectOptionsContainer */ "./src/SelectOptionsContainer.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SelectOptionsContainer", function() { return _SelectOptionsContainer__WEBPACK_IMPORTED_MODULE_30__["default"]; });

/* harmony import */ var _Triangle__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./Triangle */ "./src/Triangle.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Triangle", function() { return _Triangle__WEBPACK_IMPORTED_MODULE_31__["default"]; });

/* harmony import */ var _Circle__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ./Circle */ "./src/Circle.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Circle", function() { return _Circle__WEBPACK_IMPORTED_MODULE_32__["default"]; });

/* harmony import */ var _Reactor__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ./Reactor */ "./src/Reactor.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Reactor", function() { return _Reactor__WEBPACK_IMPORTED_MODULE_33__["default"]; });

/* harmony import */ var _Event__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! ./Event */ "./src/Event.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Event", function() { return _Event__WEBPACK_IMPORTED_MODULE_34__["default"]; });

/* harmony import */ var _ReactorCanvas__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! ./ReactorCanvas */ "./src/ReactorCanvas.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ReactorCanvas", function() { return _ReactorCanvas__WEBPACK_IMPORTED_MODULE_35__["default"]; });

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






































/***/ })

/******/ });
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9KU0dhbWVUb29scy93ZWJwYWNrL3VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24iLCJ3ZWJwYWNrOi8vSlNHYW1lVG9vbHMvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vSlNHYW1lVG9vbHMvLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9hcnJheUxpa2VUb0FycmF5LmpzIiwid2VicGFjazovL0pTR2FtZVRvb2xzLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvYXJyYXlXaXRob3V0SG9sZXMuanMiLCJ3ZWJwYWNrOi8vSlNHYW1lVG9vbHMvLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQuanMiLCJ3ZWJwYWNrOi8vSlNHYW1lVG9vbHMvLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9jbGFzc0NhbGxDaGVjay5qcyIsIndlYnBhY2s6Ly9KU0dhbWVUb29scy8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2NsYXNzUHJpdmF0ZUZpZWxkR2V0LmpzIiwid2VicGFjazovL0pTR2FtZVRvb2xzLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvY2xhc3NQcml2YXRlRmllbGRTZXQuanMiLCJ3ZWJwYWNrOi8vSlNHYW1lVG9vbHMvLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9jb25zdHJ1Y3QuanMiLCJ3ZWJwYWNrOi8vSlNHYW1lVG9vbHMvLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9jcmVhdGVDbGFzcy5qcyIsIndlYnBhY2s6Ly9KU0dhbWVUb29scy8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2RlZmluZVByb3BlcnR5LmpzIiwid2VicGFjazovL0pTR2FtZVRvb2xzLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZ2V0LmpzIiwid2VicGFjazovL0pTR2FtZVRvb2xzLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZ2V0UHJvdG90eXBlT2YuanMiLCJ3ZWJwYWNrOi8vSlNHYW1lVG9vbHMvLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9pbmhlcml0cy5qcyIsIndlYnBhY2s6Ly9KU0dhbWVUb29scy8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2lzTmF0aXZlUmVmbGVjdENvbnN0cnVjdC5qcyIsIndlYnBhY2s6Ly9KU0dhbWVUb29scy8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2l0ZXJhYmxlVG9BcnJheS5qcyIsIndlYnBhY2s6Ly9KU0dhbWVUb29scy8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL25vbkl0ZXJhYmxlU3ByZWFkLmpzIiwid2VicGFjazovL0pTR2FtZVRvb2xzLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvcG9zc2libGVDb25zdHJ1Y3RvclJldHVybi5qcyIsIndlYnBhY2s6Ly9KU0dhbWVUb29scy8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL3NldC5qcyIsIndlYnBhY2s6Ly9KU0dhbWVUb29scy8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL3NldFByb3RvdHlwZU9mLmpzIiwid2VicGFjazovL0pTR2FtZVRvb2xzLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvc3VwZXJQcm9wQmFzZS5qcyIsIndlYnBhY2s6Ly9KU0dhbWVUb29scy8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL3RvQ29uc3VtYWJsZUFycmF5LmpzIiwid2VicGFjazovL0pTR2FtZVRvb2xzLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvdHlwZW9mLmpzIiwid2VicGFjazovL0pTR2FtZVRvb2xzLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvdW5zdXBwb3J0ZWRJdGVyYWJsZVRvQXJyYXkuanMiLCJ3ZWJwYWNrOi8vSlNHYW1lVG9vbHMvLi9zcmMvQXJyb3cuanMiLCJ3ZWJwYWNrOi8vSlNHYW1lVG9vbHMvLi9zcmMvQm94LmpzIiwid2VicGFjazovL0pTR2FtZVRvb2xzLy4vc3JjL0J1dHRvbi5qcyIsIndlYnBhY2s6Ly9KU0dhbWVUb29scy8uL3NyYy9CdXR0b25JbWFnZS5qcyIsIndlYnBhY2s6Ly9KU0dhbWVUb29scy8uL3NyYy9DYW52YXMuanMiLCJ3ZWJwYWNrOi8vSlNHYW1lVG9vbHMvLi9zcmMvQ2lyY2xlLmpzIiwid2VicGFjazovL0pTR2FtZVRvb2xzLy4vc3JjL0NvbC5qcyIsIndlYnBhY2s6Ly9KU0dhbWVUb29scy8uL3NyYy9Db21wb25lbnQuanMiLCJ3ZWJwYWNrOi8vSlNHYW1lVG9vbHMvLi9zcmMvQ29uc3RhbnRzLmpzIiwid2VicGFjazovL0pTR2FtZVRvb2xzLy4vc3JjL0NvbnRhaW5lci5qcyIsIndlYnBhY2s6Ly9KU0dhbWVUb29scy8uL3NyYy9Dcm9zcy5qcyIsIndlYnBhY2s6Ly9KU0dhbWVUb29scy8uL3NyYy9FYXNpbmdGdW5jdGlvbnMuanMiLCJ3ZWJwYWNrOi8vSlNHYW1lVG9vbHMvLi9zcmMvRXZlbnQuanMiLCJ3ZWJwYWNrOi8vSlNHYW1lVG9vbHMvLi9zcmMvRlBTTWV0ZXIuanMiLCJ3ZWJwYWNrOi8vSlNHYW1lVG9vbHMvLi9zcmMvSW1hZ2VDb250YWluZXIuanMiLCJ3ZWJwYWNrOi8vSlNHYW1lVG9vbHMvLi9zcmMvSW1hZ2VMb2FkZXIuanMiLCJ3ZWJwYWNrOi8vSlNHYW1lVG9vbHMvLi9zcmMvSW5wdXQuanMiLCJ3ZWJwYWNrOi8vSlNHYW1lVG9vbHMvLi9zcmMvTGFiZWwuanMiLCJ3ZWJwYWNrOi8vSlNHYW1lVG9vbHMvLi9zcmMvTGluay5qcyIsIndlYnBhY2s6Ly9KU0dhbWVUb29scy8uL3NyYy9NZW51LmpzIiwid2VicGFjazovL0pTR2FtZVRvb2xzLy4vc3JjL05vdGlmaWNhdGlvbk1lc3NhZ2UuanMiLCJ3ZWJwYWNrOi8vSlNHYW1lVG9vbHMvLi9zcmMvUHJvZ3Jlc3NCYXIuanMiLCJ3ZWJwYWNrOi8vSlNHYW1lVG9vbHMvLi9zcmMvUmVhY3Rvci5qcyIsIndlYnBhY2s6Ly9KU0dhbWVUb29scy8uL3NyYy9SZWFjdG9yQ2FudmFzLmpzIiwid2VicGFjazovL0pTR2FtZVRvb2xzLy4vc3JjL1Jvdy5qcyIsIndlYnBhY2s6Ly9KU0dhbWVUb29scy8uL3NyYy9TY2VuZS5qcyIsIndlYnBhY2s6Ly9KU0dhbWVUb29scy8uL3NyYy9TY3JvbGxiYXIuanMiLCJ3ZWJwYWNrOi8vSlNHYW1lVG9vbHMvLi9zcmMvU2Nyb2xsYmFySG9yaXpvbnRhbC5qcyIsIndlYnBhY2s6Ly9KU0dhbWVUb29scy8uL3NyYy9TY3JvbGxiYXJWZXJ0aWNhbC5qcyIsIndlYnBhY2s6Ly9KU0dhbWVUb29scy8uL3NyYy9TZWxlY3QuanMiLCJ3ZWJwYWNrOi8vSlNHYW1lVG9vbHMvLi9zcmMvU2VsZWN0T3B0aW9uLmpzIiwid2VicGFjazovL0pTR2FtZVRvb2xzLy4vc3JjL1NlbGVjdE9wdGlvbnNDb250YWluZXIuanMiLCJ3ZWJwYWNrOi8vSlNHYW1lVG9vbHMvLi9zcmMvU3R5bGUuanMiLCJ3ZWJwYWNrOi8vSlNHYW1lVG9vbHMvLi9zcmMvVG9vbHRpcC5qcyIsIndlYnBhY2s6Ly9KU0dhbWVUb29scy8uL3NyYy9UcmlhbmdsZS5qcyIsIndlYnBhY2s6Ly9KU0dhbWVUb29scy8uL3NyYy9VdGlscy5qcyIsIndlYnBhY2s6Ly9KU0dhbWVUb29scy8uL3NyYy9pbmRleC5qcyJdLCJuYW1lcyI6WyJBcnJvdyIsIngiLCJ5IiwidG9YIiwidG9ZIiwic3R5bGUiLCJjb250ZXh0IiwiaGlkZGVuIiwiY2FudmFzIiwiY3R4IiwiZ2V0Q29udGV4dCIsIlV0aWxzIiwiZHJhd0Fycm93IiwibGluZVdpZHRoIiwiaGVhZFNpemUiLCJjb2xvciIsImxpbmVDYXAiLCJpbml0IiwiTWF0aCIsImFicyIsIlN0eWxlIiwiQ29uc3RhbnRzIiwiU2V0dGluZyIsIkFSUk9XX0RFRkFVTFRfTElORV9TSVpFIiwiQVJST1dfREVGQVVMVF9IRUFEX1NJWkUiLCJBUlJPV19ERUZBVUxUX0NPTE9SIiwiQVJST1dfREVGQVVMVF9MSU5FX0NBUCIsIkNvbXBvbmVudCIsIkJveCIsIndpZHRoIiwiaGVpZ2h0Iiwic2F2ZSIsImRyYXdCYWNrZ3JvdW5kIiwiZHJhd0JvcmRlciIsInJlc3RvcmUiLCJiYWNrZ3JvdW5kQ29sb3IiLCJmaWxsU3R5bGUiLCJmaWxsUmVjdCIsInJvdW5kIiwiYm9yZGVyQ29sb3IiLCJib3JkZXJTaXplIiwic3Ryb2tlU3R5bGUiLCJzdHJva2VSZWN0IiwiaG92ZXJlZCIsImNsaWNrZWQiLCJiYWNrZ3JvdW5kQ29sb3JEb3duIiwiYmFja2dyb3VuZENvbG9ySG92ZXIiLCJib3JkZXJDb2xvckRvd24iLCJib3JkZXJDb2xvckhvdmVyIiwic2VsZWN0YWJsZSIsInNlbGVjdGVkIiwiYm9yZGVyQ29sb3JTZWxlY3RlZCIsIkJ1dHRvbiIsIm1heFdpZHRoIiwibWF4SGVpZ2h0IiwiY29tcG9uZW50cyIsImRyYXdDb21wb25lbnRzIiwicGFkZGluZyIsIkJVVFRPTl9ERUZBVUxUX0JBQ0tHUk9VTkQiLCJCVVRUT05fREVGQVVMVF9IT1ZFUl9CQUNLR1JPVU5EIiwiQlVUVE9OX0RFRkFVTFRfQ0xJQ0tfQkFDS0dST1VORCIsIlJvdyIsIkJ1dHRvbkltYWdlIiwiaW1nU3JjIiwiYWxpZ25lbWVudCIsInZlcnRpY2FsQWxpZ25lbWVudCIsImltYWdlTG9hZGVyIiwiaW1hZ2UiLCJJbWFnZUNvbnRhaW5lciIsImFkZCIsImNvbnNvbGUiLCJ3YXJuIiwiU3RyaW5nIiwiTk9USUNFX01FU1NBR0UiLCJCVVRUT05fSU1BR0VfREVQUkVDQVRFRCIsImxvYWRJbWFnZSIsIm1pbldpZHRoIiwibWluSGVpZ2h0IiwiQ2FudmFzIiwic2NlbmUiLCJhdXRvUmVzaXplIiwibWF4RlBTIiwiZG9jdW1lbnQiLCJjcmVhdGVFbGVtZW50IiwiY29udGFpbmVyIiwiQ0FOVkFTX1dJRFRIIiwiQ0FOVkFTX0hFSUdIVCIsImFwcGVuZENoaWxkIiwic3RhcnRlZCIsImhhc0Vycm9yIiwiZnVsbHNjcmVlbiIsImZ1bGxwYWdlIiwiYnV0dG9uU2NlbmVFcnJvciIsIkJVVFRPTl9ERUZBVUxUX0FMVEVSTkFUSVZFX0JBQ0tHUk9VTkQiLCJMYWJlbCIsIlJFVFJZIiwibWVudVNjZW5lRXJyb3IiLCJNZW51IiwiRVJST1JfTUVTU0FHRV9DQU5WQVNfTEFCRUwiLCJlbmFibGUiLCJzY2VuZUVycm9yIiwiU2NlbmUiLCJzY2VuZVByZXZpb3VzIiwiYWRkQ2xpY2tBY3Rpb24iLCJyZWFjdG9yIiwiUmVhY3RvckNhbnZhcyIsInJlZ2lzdGVyRXZlbnQiLCJjcmVhdGVFdmVudHMiLCJESVNBQkxFX09QVElNSVpBVElPTlMiLCJpbmZvIiwiT1BUSU1JWkFUSU9OX0RJU0FCTEVEIiwiRElTQUJMRV9DT05UQUlORVJTX0NVVFRJTkciLCJDT05UQUlORVJfQ1VUVElOR19ESVNBQkxFRCIsImRyYXdDbGVhciIsImRyYXdTY2VuZSIsInBhcmVudCIsInNjYWxlIiwiUElYRUxfUkFUSU8iLCJkcmF3IiwiZSIsImVycm9yIiwiRVJST1JfTUVTU0FHRSIsIkVSUk9SX01FU1NBR0VfQ0FOVkFTIiwiY2xlYXIiLCJmdW5jIiwicmVxdWVzdEFuaW1hdGlvbkZyYW1lIiwidGltZSIsIm9mZnNldEZyYW1lIiwiZnVsbHNjcmVlbkVsZW1lbnQiLCJFTkFCTEVfUElYRUxfUkFUSU9fUkVTSVpJTkciLCJ3aW5kb3ciLCJkZXZpY2VQaXhlbFJhdGlvIiwiYXV0b0RQSSIsInN0YXJ0RHJhdyIsImVsZW1lbnQiLCJyZW1vdmVDaGlsZCIsInRvZ2dsZUZ1bGxzY3JlZW4iLCJ0b2dnbGVGdWxscGFnZSIsImVuYWJsZUF1dG9SZXNpemVDYW52YXMiLCJmb3JFYWNoIiwiZXZlbnROYW1lIiwiYWRkRXZlbnRMaXN0ZW5lciIsImV2ZW50IiwibW91c2VQb3NpdGlvbiIsImdldE1vdXNlUG9zIiwiZG9FdmVudHMiLCJwcmV2ZW50RGVmYXVsdCIsImNoYW5nZWRUb3VjaGVzIiwicG9zaXRpb24iLCJnZXRDb21wb25lbnRzQXRQb3NpdGlvbiIsImRpc3BhdGNoRXZlbnQiLCJyZXZlcnNlIiwiY29tcG9uZW50IiwiZGlzcGF0Y2hFdmVudENvbXBvbmVudCIsImNhbGxiYWNrIiwic3RhcnQiLCJnZXRBbGxDb21wb25lbnRzIiwiYWxsQ29tcG9uZW50cyIsImdldENvbXBvbmVudHNUcmVlIiwicmVzdWx0IiwiY2hpbGRzIiwic29ydCIsInNvcnRDb21wb25lbnRzVHJlZSIsInNvbWUiLCJjaGlsZCIsImlzSW5zaWRlIiwiZGlzYWJsZWQiLCJwdXNoIiwiZ2V0Q2FudmFzV2lkdGgiLCJnZXRDYW52YXNIZWlnaHQiLCJDaXJjbGUiLCJkcmF3Q2lyY2xlIiwiZmlsbCIsImZpbGxDb2xvciIsIkNJUkNMRV9ERUZBVUxUX0xJTkVfU0laRSIsIkNJUkNMRV9ERUZBVUxUX0NPTE9SIiwiQ0lSQ0xFX0RFRkFVTFRfRklMTCIsIkNJUkNMRV9ERUZBVUxUX0xJTkVfQ0FQIiwiQ0lSQ0xFX0RFRkFVTFRfRklMTF9DT0xPUiIsIkNvbCIsIkRJU0FCTEVfRVhQRVJJTUVOVEFMX09QVElNSVpBVElPTlMiLCJ1cGRhdGVJbm5lcldpZHRoIiwidXBkYXRlSW5uZXJIZWlnaHQiLCJhZGRDaGFuZ2VBY3Rpb24iLCJjdHhUZW1wIiwiaXNDdXR0aW5nIiwiY2FudmFzVG1wIiwiY3VycmVudFkiLCJkcmF3Q29tcG9uZW50IiwiZHJhd0ltYWdlRGF0YSIsIm9mZnNldFNjcm9sbFgiLCJvZmZzZXRTY3JvbGxZIiwiaXNDb21wb25lbnRWaXNpYmxlIiwic3BhY2VCZXR3ZWVuQ29tcG9uZW50cyIsInRvdGFsSGVpZ2h0IiwibGVuZ3RoIiwiaW5uZXJXaWR0aCIsIm1pbiIsIm1heCIsImlubmVySGVpZ2h0IiwiQ29udGFpbmVyIiwiUmVhY3RvciIsImhhc0luaXRFdmVudHMiLCJvZmZzZXRNb3ZlWCIsIm9mZnNldE1vdmVZIiwibW92ZUV2ZW50U3RhcnRYIiwibW92ZUV2ZW50U3RhcnRZIiwidG91Y2hFdmVudFN0YXJ0WCIsInRvdWNoRXZlbnRTdGFydFkiLCJ0b3VjaEV2ZW50U3RhcnRUaW1lc3RhbXAiLCJ0b29sdGlwIiwiaW5pdEV2ZW50cyIsImRlbHRhWCIsIm1vdmVtZW50WCIsImRlbHRhWSIsIm1vdmVtZW50WSIsImRpc2FibGUiLCJzY3JvbGxEaXNhYmxlZCIsInRvdWNoU2Nyb2xsRXZlbnQiLCJ0b3VjaFN0YXJ0RW5kRXZlbnQiLCJ0aW1lc3RhbXAiLCJwb3MiLCJ0cmlnZ2VyIiwicmVtb3ZlQWxsQ2xpY2tBY3Rpb25zIiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsInJlbW92ZUFsbEV2ZW50TGlzdGVuZXIiLCJyZW1vdmVBbGxIb3ZlckFjdGlvbnMiLCJhZGRIb3ZlckFjdGlvbiIsInJlbW92ZUFsbERvd25BY3Rpb25zIiwiYWRkRG93bkFjdGlvbiIsInJlbW92ZUFsbFNjcm9sbEFjdGlvbnMiLCJhZGRTY3JvbGxBY3Rpb24iLCJyZW1vdmVBbGxNb3ZlQWN0aW9ucyIsImFkZE1vdmVBY3Rpb24iLCJyZW1vdmVBbGxDaGFuZ2VBY3Rpb25zIiwicmVtb3ZlQWxsVXBBY3Rpb25zIiwiYWRkVXBBY3Rpb24iLCJyZXMiLCJvdGhlckNvbXBvbmVudCIsImlzRm9yZWdyb3VuZCIsImZvcmVncm91bmQiLCJvdGhlcklzRm9yZWdyb3VuZCIsInpJbmRleCIsIm90aGVyekluZGV4IiwiY29tcGFyZVRvQ29tcG9uZW50IiwicGFyZW50V2lkdGgiLCJwYXJlbnRQYWRkaW5nIiwiQWxpZ25lbWVudCIsIkNFTlRFUiIsIlJJR0hUIiwiTEVGVCIsInBhcmVudEhlaWdodCIsIlZlcnRpY2FsQWxpZ25lbWVudCIsIkJPVFRPTSIsIlRPUCIsIkRFRkFVTFRfUEFERElORyIsIkRFRkFVTFRfU1BBQ0lORyIsImRlZmF1bHRTdHlsZSIsInNldEFsbCIsImdldFN0eWxlcyIsInNldCIsIm90aGVyIiwiY29tcGFyZVRvIiwiRElTQUJMRV9JU19DT01QT05FTlRfVklTSUJMRV9PUFRJTUlaQVRJT05TIiwiRk9OVF9GQU1JTFkiLCJGT05UX1NJWkUiLCJJTlBVVF9ERUZBVUxUX0ZPTlRfQ09MT1IiLCJJTlBVVF9ERUZBVUxUX0JBQ0tHUk9VTkRfQ09MT1IiLCJJTlBVVF9ERUZBVUxUX0JPUkRFUl9DT0xPUiIsIklOUFVUX0RFRkFVTFRfQk9SREVSX0NPTE9SX1NFTEVDVEVEIiwiSU5QVVRfREVGQVVMVF9TRUxFQ1RfQ09MT1IiLCJMQUJFTF9ERUZBVUxUX0ZPTlRfQ09MT1IiLCJMSU5LX0RFRkFVTFRfQ09MT1IiLCJMSU5LX0RFRkFVTFRfSE9WRVJfQ09MT1IiLCJMSU5LX0RFRkFVTFRfQ0xJQ0tfQ09MT1IiLCJNRU5VX0RFRkFVTFRfQkFDS0dST1VORCIsIk1FTlVfREVGQVVMVF9CTFVSX0JBQ0tHUk9VTkQiLCJOT1RJRklDQVRJT05fREVGQVVMVF9CQUNLR1JPVU5EIiwiTk9USUZJQ0FUSU9OX0RFRkFVTFRfQU5JTUFUSU9OX0RVUkFUSU9OIiwiUFJPR1JFU1NfREVGQVVMVF9CQUNLR1JPVU5EIiwiUFJPR1JFU1NfREVGQVVMVF9GT1JFR1JPVU5EIiwiUFJPR1JFU1NfREVGQVVMVF9BTklNQVRJT05fRFVSQVRJT04iLCJUT09MVElQX0RFRkFVTFRfQkFDS0dST1VORCIsIkNST1NTX0RFRkFVTFRfTElORV9DQVAiLCJDUk9TU19ERUZBVUxUX0NPTE9SIiwiQ1JPU1NfREVGQVVMVF9MSU5FX1NJWkUiLCJTQ1JPTExCQVJfREVGQVVMVF9CQUNLR1JPVU5EIiwiU0NST0xMQkFSX0RFRkFVTFRfSE9WRVJfQkFDS0dST1VORCIsIlNDUk9MTEJBUl9ERUZBVUxUX0NMSUNLX0JBQ0tHUk9VTkQiLCJTQ1JPTExCQVJfREVGQVVMVF9TSVpFIiwiREVGQVVMVF9CT1JERVJfU0laRSIsIkRFRkFVTFRfQk9SREVSX0NPTE9SX1NFTEVDVEVEIiwiREVGQVVMVF9BTklNQVRJT05fRFVSQVRJT04iLCJUUklBTkdMRV9ERUZBVUxUX0xJTkVfQ0FQIiwiVFJJQU5HTEVfREVGQVVMVF9DT0xPUiIsIlRSSUFOR0xFX0RFRkFVTFRfRklMTF9DT0xPUiIsIlRSSUFOR0xFX0RFRkFVTFRfTElORV9TSVpFIiwiVFJJQU5HTEVfREVGQVVMVF9GSUxMIiwiU0VMRUNUX0RFRkFVTFRfQkFDS0dST1VORCIsIlNFTEVDVF9ERUZBVUxUX0hPVkVSX0JBQ0tHUk9VTkQiLCJTRUxFQ1RfREVGQVVMVF9DTElDS19CQUNLR1JPVU5EIiwiS2V5IiwiVVAiLCJFTlRFUiIsIkVDSEFQIiwiVEFCIiwiREVGQVVMVCIsIldBUk5JTkdfTUVTU0FHRSIsIklOUFVUX0ZVTExTQ1JFRU4iLCJhZGRBbGwiLCJzY3JvbGxiYXJIb3Jpem9udGFsIiwiU2Nyb2xsYmFySG9yaXpvbnRhbCIsInNjcm9sbGJhclZlcnRpY2FsIiwiU2Nyb2xsYmFyVmVydGljYWwiLCJjb250cm9sU2Nyb2xsaW5nIiwiY29tcG9uZW50Q2hhbmdlZCIsInNjcm9sbFhEaXNhYmxlZCIsImRyYXdIb3Jpem9udGFsU2Nyb2xsQmFyIiwic2Nyb2xsWURpc2FibGVkIiwiZHJhd1ZlcnRpY2FsU2Nyb2xsQmFyIiwiZXZlbnRDaGFuZ2VDYWxsYmFjayIsImluZGV4T2YiLCJyZW1vdmVDaGFuZ2VBY3Rpb24iLCJmaWx0ZXIiLCJjdXJyZW50IiwicmVtb3ZlIiwiY2hhbmdlZCIsImMiLCJpIiwic2Nyb2xsQXJlYVNpemVZIiwicGVyY2VudFNjcm9sbGJhclkiLCJzY3JvbGxBcmVhU2l6ZVgiLCJwZXJjZW50U2Nyb2xsYmFyWCIsImNvbXBvbmVudFdpZHRoIiwiY29tcG9uZW50SGVpZ2h0IiwiY2FudmFzV2lkdGgiLCJjYW52YXNIZWlnaHQiLCJDcm9zcyIsImRyYXdDcm9zcyIsImVhc2VJbkN1YmljIiwiZWFzZU91dEJvdW5jZSIsIm4xIiwiZDEiLCJlYXNlSW5PdXRDdWJpYyIsInBvdyIsImVhc2VJbk91dFNpbmUiLCJjb3MiLCJQSSIsImVhc2VJbk91dFF1aW50IiwiZWFzZUluT3V0Q2lyYyIsInNxcnQiLCJlYXNlSW5PdXRRdWFkIiwiZWFzZUluT3V0UXVhcnQiLCJlYXNlSW5PdXRFeHBvIiwiZWFzZUluT3V0QmFjayIsImMxIiwiYzIiLCJFdmVudCIsIm5hbWUiLCJjYWxsYmFja3MiLCJGUFNNZXRlciIsImRpc3BsYXlGcmFtZXMiLCJmcmFtZXMiLCJsYXN0RnJhbWUiLCJjdXJyZW50RlBTIiwiaW50ZXJ2YWxDb3VudEZQUyIsInNldEludGVydmFsIiwiY291bnRGUFMiLCJ0ZXh0IiwiSW1hZ2UiLCJzcmMiLCJkcmF3SW1hZ2UiLCJnZXQiLCJpbWdXaWR0aCIsImltZ0hlaWdodCIsImFzcGVjdFJhdGlvIiwiZmxvb3IiLCJzaXplcyIsIkltYWdlTG9hZGVyIiwiaW1hZ2VzIiwiaW1hZ2VzUmVzaXplZCIsInRyaWVkTG9hZGluZyIsIm5iSW1hZ2VzVG9Mb2FkIiwiZmlyc3RJbWFnZSIsImltZyIsInNoaWZ0IiwibG9hZCIsIm9ubG9hZCIsIm9uZXJyb3IiLCJzZXRUaW1lb3V0IiwiaGFzT3duUHJvcGVydHkiLCJ3IiwiaCIsImlkIiwiSW5wdXQiLCJkZWZhdWx0VGV4dCIsImxhc3RJbnB1dFRleHQiLCJvZmZzZXRYIiwibGFzdFRpbWUiLCJ0b3RhbFRpbWUiLCJjbGlja0N1cnJlbnRQb3NpdGlvbiIsInRleHRDYWNoZSIsImlucHV0Iiwic2V0QXR0cmlidXRlIiwibGVmdCIsInRhYkluZGV4IiwidmFsdWUiLCJwb3NpdGlvblN0YXJ0Iiwic2VsZWN0aW9uU3RhcnQiLCJwb3NpdGlvbkVuZCIsInNlbGVjdGlvbkVuZCIsImJvZHkiLCJhcHBlbmRUb0NhbnZhcyIsIm5vdGljZUxvZ2dlZCIsIm1vdmVBY3Rpb25DYWxsYmFjayIsImlDbGljayIsImdldExldHRlckNsaWNrZWQiLCJwb3NpdGlvblN0YXJ0Q2xpY2siLCJzZXRTZWxlY3Rpb25SYW5nZSIsImNsaWNrIiwiYmx1ciIsInBlcmZvcm1hbmNlIiwibm93Iiwib2Zmc2V0VGltZSIsImN0eFRleHQiLCJ1cGRhdGVUZXh0Q2FjaGUiLCJhdXRvU2Nyb2xsIiwiZHJhd1RleHQiLCJjdXJzb3IiLCJjdXJyZW50WCIsImxldHRlcnMiLCJ4RHJhdyIsInlEcmF3IiwiaXNMZXR0ZXJWaXNpYmxlIiwiZHJhd0hpZ2hsaWdodCIsImZvbnRDb2xvciIsImZvbnRTaXplIiwiZm9udEZhbWlseSIsImRyYXdDdXJzb3IiLCJiZWdpblBhdGgiLCJtb3ZlVG8iLCJsaW5lVG8iLCJzdHJva2UiLCJzZWxlY3RDb2xvciIsIndyYXBUZXh0TGluZXMiLCJsZXR0ZXIiLCJpc0NsaWNrQ3VycmVudFBvc2l0aW9uIiwiaXNDbGlja0FmdGVyUG9zaXRpb24iLCJsZXR0ZXJJZCIsImN1cnNvclBvc2l0aW9uIiwiY3VycmVudExldHRlclNpemUiLCJjdXJyZW50TGV0dGVyIiwiY3Vyc29yUG9zaXRpb25Qb3MiLCJjdXJzb3JQb3NpdGlvbk5lZyIsIm9mZnNldFhOZWciLCJmb2N1cyIsImVuZCIsImRpcmVjdGlvbiIsInNpemVzQ2FjaGUiLCJ1cGRhdGVTaXplcyIsIndyYXAiLCJib2xkIiwidW5kZXJsaW5lIiwiTGluayIsImluaXRpYWxDb2xvciIsImluaXRpYWxVbmRlcmxpbmUiLCJmb250Q29sb3JEb3duIiwiZm9udENvbG9ySG92ZXIiLCJsYXN0S2V5IiwidW5kZWZpbmVkIiwic2VsZWN0ZWRDb21wb25lbnQiLCJibHVyQmFja2dyb3VuZCIsImRyYXdCbHVyIiwia2V5Q29kZSIsImtleUFjdGlvbiIsInNlbGVjdCIsImJsdXJDYW52YXMiLCJpbmRleCIsInNlbGVjdGFibGVDb21wb25lbnRzIiwiY29tcGFyZVRvTWVudSIsIk5vdGlmaWNhdGlvbk1lc3NhZ2UiLCJkZWxheUJlZm9yZUNsb3NpbmciLCJlYXNpbmdGdW5jdGlvbiIsInRpbWVMYXN0RnJhbWUiLCJhbmltYXRpb25UaW1lIiwiY2xvc2VkIiwiY2xvc2luZyIsImNsb3NlQnV0dG9uIiwic2V0Q2xpY2tBY3Rpb24iLCJjbG9zZSIsImRpc2FibGVBbmltYXRpb24iLCJlbmFibGVDbG9zZUJ1dHRvbiIsImRpc2FibGVDbG9zZUJ1dHRvbiIsImFuaW1hdGlvbkR1cmF0aW9uIiwiY29weSIsImNvbXBhcmVUb05vdGlmaWNhdGlvbiIsIm9mZnNldFkiLCJmb3JjZUNsb3NlIiwib3BlbiIsIlByb2dyZXNzQmFyIiwiZGVmYXVsdFBlcmNlbnQiLCJwZXJjZW50IiwiZHJhd0ZvcmVncm91bmQiLCJ3aWR0aEZvcmVncm91bmQiLCJmb3JlZ3JvdW5kQ29sb3IiLCJhbmltYXRpb25QZXJjZW50IiwiZXZlbnRzIiwiZXZlbnRBcmdzIiwicmVnaXN0ZXJDYWxsYmFjayIsInJlbW92ZUNhbGxiYWNrIiwicmVtb3ZlQWxsQ2FsbGJhY2tzIiwidG90YWxXaWR0aCIsImNvbXBhcmVDb21wb25lbnRzIiwiU2Nyb2xsYmFyIiwic2l6ZSIsImNvbXBhcmVUb1Njcm9sbGJhciIsIm1heFdpZHRoUGFyZW50IiwiaW5uZXJXaWR0aFBhcmVudCIsIm1heEhlaWdodFBhcmVudCIsImlubmVySGVpZ2h0UGFyZW50IiwiY29udGVudFJhdGlvWCIsImNvbnRlbnRSYXRpb1kiLCJ3aW5kb3dTY3JvbGxTaXplWCIsIndpbmRvd1Njcm9sbFNpemVZIiwiU2VsZWN0Iiwib3B0aW9uQ29udGFpbmVyIiwiZGVmYXVsdE9wdGlvbiIsInNlbGVjdGVkT3B0aW9uIiwibGFiZWwiLCJ0cmlhbmdsZSIsIlRyaWFuZ2xlIiwidXBkYXRlV2lkdGgiLCJTZWxlY3RPcHRpb24iLCJkZWZhdWx0TGFiZWwiLCJTZWxlY3REcm9wZG93biIsIm1heEhlaWdodERyb3Bkb3duIiwib3B0aW9ucyIsImdldENvbXBvbmVudElkIiwic2VsZWN0SGVpZ2h0Iiwic3R5bGVzIiwibW92YWJsZSIsIlRvb2x0aXAiLCJjb21wYXJlVG9Ub29sdGlwIiwiZHJhd1RyaWFuZ2xlIiwicHJlUmVuZGVyZWRGb250IiwicHJlUmVuZGVyRm9udCIsImNhcnMiLCJjdHhUbXAiLCJmb250IiwibWVhc3VyZVRleHQiLCJ0ZXh0QmFzZWxpbmUiLCJmaWxsVGV4dCIsInN4Iiwic3kiLCJzV2lkdGgiLCJzSGVpZ2h0IiwiZXJhc2VCZWxvdyIsImRlZ3JlZXMiLCJkcmF3SW1hZ2VXcmFwcGVyIiwiaW1hZ2VEYXRhIiwiaXNOYU4iLCJ0cmFuc2xhdGUiLCJyb3RhdGUiLCJjbGVhclJlY3QiLCJBcnJheSIsImlzQXJyYXkiLCJsaW5lcyIsInNwbGl0IiwieEN1cnJlbnQiLCJ5Q3VycmVudCIsInlGaXJzdCIsImN1cnJlbnRUZXh0IiwiY3VycmVudFdpZHRoIiwiY29sb3JJbmRleCIsIndyYXBUZXh0IiwibGltaXQiLCJwIiwic3Vic3RyaW5nIiwicmlnaHQiLCJkaXNhYmxlV3JhcCIsImltYWdlU21vb3RoaW5nRW5hYmxlZCIsIm5ld1RleHQiLCJ3aWR0aENhciIsIm5iQ2FyTGluZSIsImhlaWdodFRvdGFsIiwibGluZVdyYXAiLCJqIiwid2lkdGhUZXh0IiwiY2FyV2lkdGgiLCJmcm9teCIsImZyb215IiwidG94IiwidG95IiwiaGVhZGxlbiIsImR4IiwiZHkiLCJhbmdsZSIsImF0YW4yIiwic2luIiwicmFkaXVzIiwiYXJjIiwiaXNGaWx0ZXJIdWVBdmFpbGFibGUiLCJnZXRJbWFnZURhdGEiLCJkYXRhIiwicGFyc2VOdW1iZXIiLCJzdHIiLCJwYXJzZUludCIsIm1hdGNoIiwiZ2V0Rm9udFNpemUiLCJyZWN0IiwiZ2V0Qm91bmRpbmdDbGllbnRSZWN0IiwiYXV0b1Jlc2l6ZUNhbnZhcyIsImluaXRpYWxXaWR0aCIsImluaXRpYWxIZWlnaHQiLCJkb2N1bWVudEVsZW1lbnQiLCJjbGllbnRXaWR0aCIsInJhdGlvIiwiZ2V0QXR0cmlidXRlIiwiYXV0b1Jlc2l6ZUNhbnZhc0Z1bGxzY3JlZW4iLCJlbmFibGVBdXRvUmVzaXplQ2FudmFzRnVsbHNjcmVlbiIsImF1dG9SZXNpemVDYW52YXNGdWxscGFnZSIsIm1hcmdpbiIsImVuYWJsZUF1dG9SZXNpemVDYW52YXNGdWxscGFnZSIsInJlcXVlc3RGdWxsc2NyZWVuIiwibW96UmVxdWVzdEZ1bGxTY3JlZW4iLCJ3ZWJraXRSZXF1ZXN0RnVsbHNjcmVlbiIsIm1zUmVxdWVzdEZ1bGxzY3JlZW4iLCJvUmVxdWVzdEZ1bGxzY3JlZW4iLCJleGl0RnVsbHNjcmVlbiIsIm9uZnVsbHNjcmVlbmNoYW5nZSIsIm9ubXNmdWxsc2NyZWVuY2hhbmdlIiwib25tb3pmdWxsc2NyZWVuY2hhbmdlIiwib253ZWJraXRmdWxsc2NyZWVuY2hhbmdlIiwib25va2l0ZnVsbHNjcmVlbmNoYW5nZSIsIm9ub2Z1bGxzY3JlZW5jaGFuZ2UiLCJjbGllbnRYIiwiY2xpZW50WSIsInRvcCJdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNELE87UUNWQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLHlDQUF5QyxpQ0FBaUM7UUFDMUUsZ0hBQWdILG1CQUFtQixFQUFFO1FBQ3JJO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMkJBQTJCLDBCQUEwQixFQUFFO1FBQ3ZELGlDQUFpQyxlQUFlO1FBQ2hEO1FBQ0E7UUFDQTs7UUFFQTtRQUNBLHNEQUFzRCwrREFBK0Q7O1FBRXJIO1FBQ0E7OztRQUdBO1FBQ0E7Ozs7Ozs7Ozs7OztBQ2xGQTtBQUNBOztBQUVBLHdDQUF3QyxTQUFTO0FBQ2pEO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQSxtQzs7Ozs7Ozs7Ozs7QUNWQSx1QkFBdUIsbUJBQU8s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LmpzIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIHdlYnBhY2tVbml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uKHJvb3QsIGZhY3RvcnkpIHtcblx0aWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnICYmIHR5cGVvZiBtb2R1bGUgPT09ICdvYmplY3QnKVxuXHRcdG1vZHVsZS5leHBvcnRzID0gZmFjdG9yeSgpO1xuXHRlbHNlIGlmKHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZClcblx0XHRkZWZpbmUoW10sIGZhY3RvcnkpO1xuXHRlbHNlIGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0Jylcblx0XHRleHBvcnRzW1wiSlNHYW1lVG9vbHNcIl0gPSBmYWN0b3J5KCk7XG5cdGVsc2Vcblx0XHRyb290W1wiSlNHYW1lVG9vbHNcIl0gPSBmYWN0b3J5KCk7XG59KSh0eXBlb2Ygc2VsZiAhPT0gXCJ1bmRlZmluZWRcIiA/IHNlbGYgOiB0aGlzLCBmdW5jdGlvbigpIHtcbnJldHVybiAiLCIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3NyYy9pbmRleC5qc1wiKTtcbiIsImZ1bmN0aW9uIF9hcnJheUxpa2VUb0FycmF5KGFyciwgbGVuKSB7XG4gIGlmIChsZW4gPT0gbnVsbCB8fCBsZW4gPiBhcnIubGVuZ3RoKSBsZW4gPSBhcnIubGVuZ3RoO1xuXG4gIGZvciAodmFyIGkgPSAwLCBhcnIyID0gbmV3IEFycmF5KGxlbik7IGkgPCBsZW47IGkrKykge1xuICAgIGFycjJbaV0gPSBhcnJbaV07XG4gIH1cblxuICByZXR1cm4gYXJyMjtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfYXJyYXlMaWtlVG9BcnJheTsiLCJ2YXIgYXJyYXlMaWtlVG9BcnJheSA9IHJlcXVpcmUoXCIuL2FycmF5TGlrZVRvQXJyYXlcIik7XG5cbmZ1bmN0aW9uIF9hcnJheVdpdGhvdXRIb2xlcyhhcnIpIHtcbiAgaWYgKEFycmF5LmlzQXJyYXkoYXJyKSkgcmV0dXJuIGFycmF5TGlrZVRvQXJyYXkoYXJyKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfYXJyYXlXaXRob3V0SG9sZXM7IiwiZnVuY3Rpb24gX2Fzc2VydFRoaXNJbml0aWFsaXplZChzZWxmKSB7XG4gIGlmIChzZWxmID09PSB2b2lkIDApIHtcbiAgICB0aHJvdyBuZXcgUmVmZXJlbmNlRXJyb3IoXCJ0aGlzIGhhc24ndCBiZWVuIGluaXRpYWxpc2VkIC0gc3VwZXIoKSBoYXNuJ3QgYmVlbiBjYWxsZWRcIik7XG4gIH1cblxuICByZXR1cm4gc2VsZjtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfYXNzZXJ0VGhpc0luaXRpYWxpemVkOyIsImZ1bmN0aW9uIF9jbGFzc0NhbGxDaGVjayhpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHtcbiAgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHtcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXCIpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX2NsYXNzQ2FsbENoZWNrOyIsImZ1bmN0aW9uIF9jbGFzc1ByaXZhdGVGaWVsZEdldChyZWNlaXZlciwgcHJpdmF0ZU1hcCkge1xuICB2YXIgZGVzY3JpcHRvciA9IHByaXZhdGVNYXAuZ2V0KHJlY2VpdmVyKTtcblxuICBpZiAoIWRlc2NyaXB0b3IpIHtcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiYXR0ZW1wdGVkIHRvIGdldCBwcml2YXRlIGZpZWxkIG9uIG5vbi1pbnN0YW5jZVwiKTtcbiAgfVxuXG4gIGlmIChkZXNjcmlwdG9yLmdldCkge1xuICAgIHJldHVybiBkZXNjcmlwdG9yLmdldC5jYWxsKHJlY2VpdmVyKTtcbiAgfVxuXG4gIHJldHVybiBkZXNjcmlwdG9yLnZhbHVlO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9jbGFzc1ByaXZhdGVGaWVsZEdldDsiLCJmdW5jdGlvbiBfY2xhc3NQcml2YXRlRmllbGRTZXQocmVjZWl2ZXIsIHByaXZhdGVNYXAsIHZhbHVlKSB7XG4gIHZhciBkZXNjcmlwdG9yID0gcHJpdmF0ZU1hcC5nZXQocmVjZWl2ZXIpO1xuXG4gIGlmICghZGVzY3JpcHRvcikge1xuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJhdHRlbXB0ZWQgdG8gc2V0IHByaXZhdGUgZmllbGQgb24gbm9uLWluc3RhbmNlXCIpO1xuICB9XG5cbiAgaWYgKGRlc2NyaXB0b3Iuc2V0KSB7XG4gICAgZGVzY3JpcHRvci5zZXQuY2FsbChyZWNlaXZlciwgdmFsdWUpO1xuICB9IGVsc2Uge1xuICAgIGlmICghZGVzY3JpcHRvci53cml0YWJsZSkge1xuICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcImF0dGVtcHRlZCB0byBzZXQgcmVhZCBvbmx5IHByaXZhdGUgZmllbGRcIik7XG4gICAgfVxuXG4gICAgZGVzY3JpcHRvci52YWx1ZSA9IHZhbHVlO1xuICB9XG5cbiAgcmV0dXJuIHZhbHVlO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9jbGFzc1ByaXZhdGVGaWVsZFNldDsiLCJ2YXIgc2V0UHJvdG90eXBlT2YgPSByZXF1aXJlKFwiLi9zZXRQcm90b3R5cGVPZlwiKTtcblxudmFyIGlzTmF0aXZlUmVmbGVjdENvbnN0cnVjdCA9IHJlcXVpcmUoXCIuL2lzTmF0aXZlUmVmbGVjdENvbnN0cnVjdFwiKTtcblxuZnVuY3Rpb24gX2NvbnN0cnVjdChQYXJlbnQsIGFyZ3MsIENsYXNzKSB7XG4gIGlmIChpc05hdGl2ZVJlZmxlY3RDb25zdHJ1Y3QoKSkge1xuICAgIG1vZHVsZS5leHBvcnRzID0gX2NvbnN0cnVjdCA9IFJlZmxlY3QuY29uc3RydWN0O1xuICB9IGVsc2Uge1xuICAgIG1vZHVsZS5leHBvcnRzID0gX2NvbnN0cnVjdCA9IGZ1bmN0aW9uIF9jb25zdHJ1Y3QoUGFyZW50LCBhcmdzLCBDbGFzcykge1xuICAgICAgdmFyIGEgPSBbbnVsbF07XG4gICAgICBhLnB1c2guYXBwbHkoYSwgYXJncyk7XG4gICAgICB2YXIgQ29uc3RydWN0b3IgPSBGdW5jdGlvbi5iaW5kLmFwcGx5KFBhcmVudCwgYSk7XG4gICAgICB2YXIgaW5zdGFuY2UgPSBuZXcgQ29uc3RydWN0b3IoKTtcbiAgICAgIGlmIChDbGFzcykgc2V0UHJvdG90eXBlT2YoaW5zdGFuY2UsIENsYXNzLnByb3RvdHlwZSk7XG4gICAgICByZXR1cm4gaW5zdGFuY2U7XG4gICAgfTtcbiAgfVxuXG4gIHJldHVybiBfY29uc3RydWN0LmFwcGx5KG51bGwsIGFyZ3VtZW50cyk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX2NvbnN0cnVjdDsiLCJmdW5jdGlvbiBfZGVmaW5lUHJvcGVydGllcyh0YXJnZXQsIHByb3BzKSB7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgcHJvcHMubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgZGVzY3JpcHRvciA9IHByb3BzW2ldO1xuICAgIGRlc2NyaXB0b3IuZW51bWVyYWJsZSA9IGRlc2NyaXB0b3IuZW51bWVyYWJsZSB8fCBmYWxzZTtcbiAgICBkZXNjcmlwdG9yLmNvbmZpZ3VyYWJsZSA9IHRydWU7XG4gICAgaWYgKFwidmFsdWVcIiBpbiBkZXNjcmlwdG9yKSBkZXNjcmlwdG9yLndyaXRhYmxlID0gdHJ1ZTtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBkZXNjcmlwdG9yLmtleSwgZGVzY3JpcHRvcik7XG4gIH1cbn1cblxuZnVuY3Rpb24gX2NyZWF0ZUNsYXNzKENvbnN0cnVjdG9yLCBwcm90b1Byb3BzLCBzdGF0aWNQcm9wcykge1xuICBpZiAocHJvdG9Qcm9wcykgX2RlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IucHJvdG90eXBlLCBwcm90b1Byb3BzKTtcbiAgaWYgKHN0YXRpY1Byb3BzKSBfZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvciwgc3RhdGljUHJvcHMpO1xuICByZXR1cm4gQ29uc3RydWN0b3I7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX2NyZWF0ZUNsYXNzOyIsImZ1bmN0aW9uIF9kZWZpbmVQcm9wZXJ0eShvYmosIGtleSwgdmFsdWUpIHtcbiAgaWYgKGtleSBpbiBvYmopIHtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkob2JqLCBrZXksIHtcbiAgICAgIHZhbHVlOiB2YWx1ZSxcbiAgICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgICBjb25maWd1cmFibGU6IHRydWUsXG4gICAgICB3cml0YWJsZTogdHJ1ZVxuICAgIH0pO1xuICB9IGVsc2Uge1xuICAgIG9ialtrZXldID0gdmFsdWU7XG4gIH1cblxuICByZXR1cm4gb2JqO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9kZWZpbmVQcm9wZXJ0eTsiLCJ2YXIgc3VwZXJQcm9wQmFzZSA9IHJlcXVpcmUoXCIuL3N1cGVyUHJvcEJhc2VcIik7XG5cbmZ1bmN0aW9uIF9nZXQodGFyZ2V0LCBwcm9wZXJ0eSwgcmVjZWl2ZXIpIHtcbiAgaWYgKHR5cGVvZiBSZWZsZWN0ICE9PSBcInVuZGVmaW5lZFwiICYmIFJlZmxlY3QuZ2V0KSB7XG4gICAgbW9kdWxlLmV4cG9ydHMgPSBfZ2V0ID0gUmVmbGVjdC5nZXQ7XG4gIH0gZWxzZSB7XG4gICAgbW9kdWxlLmV4cG9ydHMgPSBfZ2V0ID0gZnVuY3Rpb24gX2dldCh0YXJnZXQsIHByb3BlcnR5LCByZWNlaXZlcikge1xuICAgICAgdmFyIGJhc2UgPSBzdXBlclByb3BCYXNlKHRhcmdldCwgcHJvcGVydHkpO1xuICAgICAgaWYgKCFiYXNlKSByZXR1cm47XG4gICAgICB2YXIgZGVzYyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IoYmFzZSwgcHJvcGVydHkpO1xuXG4gICAgICBpZiAoZGVzYy5nZXQpIHtcbiAgICAgICAgcmV0dXJuIGRlc2MuZ2V0LmNhbGwocmVjZWl2ZXIpO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gZGVzYy52YWx1ZTtcbiAgICB9O1xuICB9XG5cbiAgcmV0dXJuIF9nZXQodGFyZ2V0LCBwcm9wZXJ0eSwgcmVjZWl2ZXIgfHwgdGFyZ2V0KTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfZ2V0OyIsImZ1bmN0aW9uIF9nZXRQcm90b3R5cGVPZihvKSB7XG4gIG1vZHVsZS5leHBvcnRzID0gX2dldFByb3RvdHlwZU9mID0gT2JqZWN0LnNldFByb3RvdHlwZU9mID8gT2JqZWN0LmdldFByb3RvdHlwZU9mIDogZnVuY3Rpb24gX2dldFByb3RvdHlwZU9mKG8pIHtcbiAgICByZXR1cm4gby5fX3Byb3RvX18gfHwgT2JqZWN0LmdldFByb3RvdHlwZU9mKG8pO1xuICB9O1xuICByZXR1cm4gX2dldFByb3RvdHlwZU9mKG8pO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9nZXRQcm90b3R5cGVPZjsiLCJ2YXIgc2V0UHJvdG90eXBlT2YgPSByZXF1aXJlKFwiLi9zZXRQcm90b3R5cGVPZlwiKTtcblxuZnVuY3Rpb24gX2luaGVyaXRzKHN1YkNsYXNzLCBzdXBlckNsYXNzKSB7XG4gIGlmICh0eXBlb2Ygc3VwZXJDbGFzcyAhPT0gXCJmdW5jdGlvblwiICYmIHN1cGVyQ2xhc3MgIT09IG51bGwpIHtcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiU3VwZXIgZXhwcmVzc2lvbiBtdXN0IGVpdGhlciBiZSBudWxsIG9yIGEgZnVuY3Rpb25cIik7XG4gIH1cblxuICBzdWJDbGFzcy5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKHN1cGVyQ2xhc3MgJiYgc3VwZXJDbGFzcy5wcm90b3R5cGUsIHtcbiAgICBjb25zdHJ1Y3Rvcjoge1xuICAgICAgdmFsdWU6IHN1YkNsYXNzLFxuICAgICAgd3JpdGFibGU6IHRydWUsXG4gICAgICBjb25maWd1cmFibGU6IHRydWVcbiAgICB9XG4gIH0pO1xuICBpZiAoc3VwZXJDbGFzcykgc2V0UHJvdG90eXBlT2Yoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9pbmhlcml0czsiLCJmdW5jdGlvbiBfaXNOYXRpdmVSZWZsZWN0Q29uc3RydWN0KCkge1xuICBpZiAodHlwZW9mIFJlZmxlY3QgPT09IFwidW5kZWZpbmVkXCIgfHwgIVJlZmxlY3QuY29uc3RydWN0KSByZXR1cm4gZmFsc2U7XG4gIGlmIChSZWZsZWN0LmNvbnN0cnVjdC5zaGFtKSByZXR1cm4gZmFsc2U7XG4gIGlmICh0eXBlb2YgUHJveHkgPT09IFwiZnVuY3Rpb25cIikgcmV0dXJuIHRydWU7XG5cbiAgdHJ5IHtcbiAgICBEYXRlLnByb3RvdHlwZS50b1N0cmluZy5jYWxsKFJlZmxlY3QuY29uc3RydWN0KERhdGUsIFtdLCBmdW5jdGlvbiAoKSB7fSkpO1xuICAgIHJldHVybiB0cnVlO1xuICB9IGNhdGNoIChlKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX2lzTmF0aXZlUmVmbGVjdENvbnN0cnVjdDsiLCJmdW5jdGlvbiBfaXRlcmFibGVUb0FycmF5KGl0ZXIpIHtcbiAgaWYgKHR5cGVvZiBTeW1ib2wgIT09IFwidW5kZWZpbmVkXCIgJiYgU3ltYm9sLml0ZXJhdG9yIGluIE9iamVjdChpdGVyKSkgcmV0dXJuIEFycmF5LmZyb20oaXRlcik7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX2l0ZXJhYmxlVG9BcnJheTsiLCJmdW5jdGlvbiBfbm9uSXRlcmFibGVTcHJlYWQoKSB7XG4gIHRocm93IG5ldyBUeXBlRXJyb3IoXCJJbnZhbGlkIGF0dGVtcHQgdG8gc3ByZWFkIG5vbi1pdGVyYWJsZSBpbnN0YW5jZS5cXG5JbiBvcmRlciB0byBiZSBpdGVyYWJsZSwgbm9uLWFycmF5IG9iamVjdHMgbXVzdCBoYXZlIGEgW1N5bWJvbC5pdGVyYXRvcl0oKSBtZXRob2QuXCIpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9ub25JdGVyYWJsZVNwcmVhZDsiLCJ2YXIgX3R5cGVvZiA9IHJlcXVpcmUoXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL3R5cGVvZlwiKTtcblxudmFyIGFzc2VydFRoaXNJbml0aWFsaXplZCA9IHJlcXVpcmUoXCIuL2Fzc2VydFRoaXNJbml0aWFsaXplZFwiKTtcblxuZnVuY3Rpb24gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4oc2VsZiwgY2FsbCkge1xuICBpZiAoY2FsbCAmJiAoX3R5cGVvZihjYWxsKSA9PT0gXCJvYmplY3RcIiB8fCB0eXBlb2YgY2FsbCA9PT0gXCJmdW5jdGlvblwiKSkge1xuICAgIHJldHVybiBjYWxsO1xuICB9XG5cbiAgcmV0dXJuIGFzc2VydFRoaXNJbml0aWFsaXplZChzZWxmKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybjsiLCJ2YXIgc3VwZXJQcm9wQmFzZSA9IHJlcXVpcmUoXCIuL3N1cGVyUHJvcEJhc2VcIik7XG5cbnZhciBkZWZpbmVQcm9wZXJ0eSA9IHJlcXVpcmUoXCIuL2RlZmluZVByb3BlcnR5XCIpO1xuXG5mdW5jdGlvbiBzZXQodGFyZ2V0LCBwcm9wZXJ0eSwgdmFsdWUsIHJlY2VpdmVyKSB7XG4gIGlmICh0eXBlb2YgUmVmbGVjdCAhPT0gXCJ1bmRlZmluZWRcIiAmJiBSZWZsZWN0LnNldCkge1xuICAgIHNldCA9IFJlZmxlY3Quc2V0O1xuICB9IGVsc2Uge1xuICAgIHNldCA9IGZ1bmN0aW9uIHNldCh0YXJnZXQsIHByb3BlcnR5LCB2YWx1ZSwgcmVjZWl2ZXIpIHtcbiAgICAgIHZhciBiYXNlID0gc3VwZXJQcm9wQmFzZSh0YXJnZXQsIHByb3BlcnR5KTtcbiAgICAgIHZhciBkZXNjO1xuXG4gICAgICBpZiAoYmFzZSkge1xuICAgICAgICBkZXNjID0gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihiYXNlLCBwcm9wZXJ0eSk7XG5cbiAgICAgICAgaWYgKGRlc2Muc2V0KSB7XG4gICAgICAgICAgZGVzYy5zZXQuY2FsbChyZWNlaXZlciwgdmFsdWUpO1xuICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9IGVsc2UgaWYgKCFkZXNjLndyaXRhYmxlKSB7XG4gICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGRlc2MgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKHJlY2VpdmVyLCBwcm9wZXJ0eSk7XG5cbiAgICAgIGlmIChkZXNjKSB7XG4gICAgICAgIGlmICghZGVzYy53cml0YWJsZSkge1xuICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuXG4gICAgICAgIGRlc2MudmFsdWUgPSB2YWx1ZTtcbiAgICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KHJlY2VpdmVyLCBwcm9wZXJ0eSwgZGVzYyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBkZWZpbmVQcm9wZXJ0eShyZWNlaXZlciwgcHJvcGVydHksIHZhbHVlKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfTtcbiAgfVxuXG4gIHJldHVybiBzZXQodGFyZ2V0LCBwcm9wZXJ0eSwgdmFsdWUsIHJlY2VpdmVyKTtcbn1cblxuZnVuY3Rpb24gX3NldCh0YXJnZXQsIHByb3BlcnR5LCB2YWx1ZSwgcmVjZWl2ZXIsIGlzU3RyaWN0KSB7XG4gIHZhciBzID0gc2V0KHRhcmdldCwgcHJvcGVydHksIHZhbHVlLCByZWNlaXZlciB8fCB0YXJnZXQpO1xuXG4gIGlmICghcyAmJiBpc1N0cmljdCkge1xuICAgIHRocm93IG5ldyBFcnJvcignZmFpbGVkIHRvIHNldCBwcm9wZXJ0eScpO1xuICB9XG5cbiAgcmV0dXJuIHZhbHVlO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9zZXQ7IiwiZnVuY3Rpb24gX3NldFByb3RvdHlwZU9mKG8sIHApIHtcbiAgbW9kdWxlLmV4cG9ydHMgPSBfc2V0UHJvdG90eXBlT2YgPSBPYmplY3Quc2V0UHJvdG90eXBlT2YgfHwgZnVuY3Rpb24gX3NldFByb3RvdHlwZU9mKG8sIHApIHtcbiAgICBvLl9fcHJvdG9fXyA9IHA7XG4gICAgcmV0dXJuIG87XG4gIH07XG5cbiAgcmV0dXJuIF9zZXRQcm90b3R5cGVPZihvLCBwKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfc2V0UHJvdG90eXBlT2Y7IiwidmFyIGdldFByb3RvdHlwZU9mID0gcmVxdWlyZShcIi4vZ2V0UHJvdG90eXBlT2ZcIik7XG5cbmZ1bmN0aW9uIF9zdXBlclByb3BCYXNlKG9iamVjdCwgcHJvcGVydHkpIHtcbiAgd2hpbGUgKCFPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSkpIHtcbiAgICBvYmplY3QgPSBnZXRQcm90b3R5cGVPZihvYmplY3QpO1xuICAgIGlmIChvYmplY3QgPT09IG51bGwpIGJyZWFrO1xuICB9XG5cbiAgcmV0dXJuIG9iamVjdDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfc3VwZXJQcm9wQmFzZTsiLCJ2YXIgYXJyYXlXaXRob3V0SG9sZXMgPSByZXF1aXJlKFwiLi9hcnJheVdpdGhvdXRIb2xlc1wiKTtcblxudmFyIGl0ZXJhYmxlVG9BcnJheSA9IHJlcXVpcmUoXCIuL2l0ZXJhYmxlVG9BcnJheVwiKTtcblxudmFyIHVuc3VwcG9ydGVkSXRlcmFibGVUb0FycmF5ID0gcmVxdWlyZShcIi4vdW5zdXBwb3J0ZWRJdGVyYWJsZVRvQXJyYXlcIik7XG5cbnZhciBub25JdGVyYWJsZVNwcmVhZCA9IHJlcXVpcmUoXCIuL25vbkl0ZXJhYmxlU3ByZWFkXCIpO1xuXG5mdW5jdGlvbiBfdG9Db25zdW1hYmxlQXJyYXkoYXJyKSB7XG4gIHJldHVybiBhcnJheVdpdGhvdXRIb2xlcyhhcnIpIHx8IGl0ZXJhYmxlVG9BcnJheShhcnIpIHx8IHVuc3VwcG9ydGVkSXRlcmFibGVUb0FycmF5KGFycikgfHwgbm9uSXRlcmFibGVTcHJlYWQoKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfdG9Db25zdW1hYmxlQXJyYXk7IiwiZnVuY3Rpb24gX3R5cGVvZihvYmopIHtcbiAgXCJAYmFiZWwvaGVscGVycyAtIHR5cGVvZlwiO1xuXG4gIGlmICh0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgdHlwZW9mIFN5bWJvbC5pdGVyYXRvciA9PT0gXCJzeW1ib2xcIikge1xuICAgIG1vZHVsZS5leHBvcnRzID0gX3R5cGVvZiA9IGZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7XG4gICAgICByZXR1cm4gdHlwZW9mIG9iajtcbiAgICB9O1xuICB9IGVsc2Uge1xuICAgIG1vZHVsZS5leHBvcnRzID0gX3R5cGVvZiA9IGZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7XG4gICAgICByZXR1cm4gb2JqICYmIHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiBvYmouY29uc3RydWN0b3IgPT09IFN5bWJvbCAmJiBvYmogIT09IFN5bWJvbC5wcm90b3R5cGUgPyBcInN5bWJvbFwiIDogdHlwZW9mIG9iajtcbiAgICB9O1xuICB9XG5cbiAgcmV0dXJuIF90eXBlb2Yob2JqKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfdHlwZW9mOyIsInZhciBhcnJheUxpa2VUb0FycmF5ID0gcmVxdWlyZShcIi4vYXJyYXlMaWtlVG9BcnJheVwiKTtcblxuZnVuY3Rpb24gX3Vuc3VwcG9ydGVkSXRlcmFibGVUb0FycmF5KG8sIG1pbkxlbikge1xuICBpZiAoIW8pIHJldHVybjtcbiAgaWYgKHR5cGVvZiBvID09PSBcInN0cmluZ1wiKSByZXR1cm4gYXJyYXlMaWtlVG9BcnJheShvLCBtaW5MZW4pO1xuICB2YXIgbiA9IE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChvKS5zbGljZSg4LCAtMSk7XG4gIGlmIChuID09PSBcIk9iamVjdFwiICYmIG8uY29uc3RydWN0b3IpIG4gPSBvLmNvbnN0cnVjdG9yLm5hbWU7XG4gIGlmIChuID09PSBcIk1hcFwiIHx8IG4gPT09IFwiU2V0XCIpIHJldHVybiBBcnJheS5mcm9tKG8pO1xuICBpZiAobiA9PT0gXCJBcmd1bWVudHNcIiB8fCAvXig/OlVpfEkpbnQoPzo4fDE2fDMyKSg/OkNsYW1wZWQpP0FycmF5JC8udGVzdChuKSkgcmV0dXJuIGFycmF5TGlrZVRvQXJyYXkobywgbWluTGVuKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfdW5zdXBwb3J0ZWRJdGVyYWJsZVRvQXJyYXk7IiwiLypcbiAqIENvcHlyaWdodCAoQykgMjAyMCBFbGlhc3RpayAoZWxpYXN0aWtzb2Z0cy5jb20pXG4gKlxuICogVGhpcyBmaWxlIGlzIHBhcnQgb2YgXCJKU0dhbWVUb29sc1wiLlxuICpcbiAqIFwiSlNHYW1lVG9vbHNcIiBpcyBmcmVlIHNvZnR3YXJlOiB5b3UgY2FuIHJlZGlzdHJpYnV0ZSBpdCBhbmQvb3IgbW9kaWZ5XG4gKiBpdCB1bmRlciB0aGUgdGVybXMgb2YgdGhlIEdOVSBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlIGFzIHB1Ymxpc2hlZCBieVxuICogdGhlIEZyZWUgU29mdHdhcmUgRm91bmRhdGlvbiwgZWl0aGVyIHZlcnNpb24gMyBvZiB0aGUgTGljZW5zZSwgb3JcbiAqIChhdCB5b3VyIG9wdGlvbikgYW55IGxhdGVyIHZlcnNpb24uXG4gKlxuICogXCJKU0dhbWVUb29sc1wiIGlzIGRpc3RyaWJ1dGVkIGluIHRoZSBob3BlIHRoYXQgaXQgd2lsbCBiZSB1c2VmdWwsXG4gKiBidXQgV0lUSE9VVCBBTlkgV0FSUkFOVFk7IHdpdGhvdXQgZXZlbiB0aGUgaW1wbGllZCB3YXJyYW50eSBvZlxuICogTUVSQ0hBTlRBQklMSVRZIG9yIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFLiAgU2VlIHRoZVxuICogR05VIEdlbmVyYWwgUHVibGljIExpY2Vuc2UgZm9yIG1vcmUgZGV0YWlscy5cbiAqXG4gKiBZb3Ugc2hvdWxkIGhhdmUgcmVjZWl2ZWQgYSBjb3B5IG9mIHRoZSBHTlUgR2VuZXJhbCBQdWJsaWMgTGljZW5zZVxuICogYWxvbmcgd2l0aCBcIkpTR2FtZVRvb2xzXCIuICBJZiBub3QsIHNlZSA8aHR0cDovL3d3dy5nbnUub3JnL2xpY2Vuc2VzLz4uXG4gKi9cbmltcG9ydCBDb21wb25lbnQgZnJvbSBcIi4vQ29tcG9uZW50XCI7XG5pbXBvcnQgQ29uc3RhbnRzIGZyb20gXCIuL0NvbnN0YW50c1wiO1xuaW1wb3J0IFN0eWxlIGZyb20gXCIuL1N0eWxlXCI7XG5pbXBvcnQgVXRpbHMgZnJvbSBcIi4vVXRpbHNcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQXJyb3cgZXh0ZW5kcyBDb21wb25lbnQge1xuICBzZWxlY3RhYmxlID0gZmFsc2U7XG5cbiAgY29uc3RydWN0b3IoeCwgeSwgdG9YLCB0b1ksIHN0eWxlKSB7XG4gICAgc3VwZXIoeCwgeSwgbnVsbCwgbnVsbCwgc3R5bGUpO1xuXG4gICAgdGhpcy50b1ggPSB0b1g7XG4gICAgdGhpcy50b1kgPSB0b1k7XG4gIH1cblxuICBkcmF3KGNvbnRleHQpIHtcbiAgICBpZih0aGlzLmhpZGRlbikgcmV0dXJuO1xuICAgIHN1cGVyLmRyYXcoY29udGV4dCk7XG5cbiAgICBjb25zdCBjYW52YXMgPSBjb250ZXh0LmNhbnZhcztcbiAgICBjb25zdCBjdHggPSBjYW52YXMuZ2V0Q29udGV4dChcIjJkXCIpO1xuICAgIFxuICAgIFV0aWxzLmRyYXdBcnJvdyhjdHgsIHRoaXMueCwgdGhpcy55LCB0aGlzLnRvWCwgdGhpcy50b1ksIHRoaXMuc3R5bGUubGluZVdpZHRoLCB0aGlzLnN0eWxlLmhlYWRTaXplLCB0aGlzLnN0eWxlLmNvbG9yLCB0aGlzLnN0eWxlLmxpbmVDYXApO1xuXG4gICAgdGhpcy5pbml0ID0gdHJ1ZTtcbiAgfVxuXG4gIGdldCB3aWR0aCgpIHtcbiAgICByZXR1cm4gTWF0aC5hYnModGhpcy54IC0gdGhpcy50b1gpO1xuICB9XG5cbiAgZ2V0IGhlaWdodCgpIHtcbiAgICByZXR1cm4gTWF0aC5hYnModGhpcy55IC0gdGhpcy50b1kpO1xuICB9XG5cbiAgZ2V0IGRlZmF1bHRTdHlsZSgpIHtcbiAgICByZXR1cm4gbmV3IFN0eWxlKHtcbiAgICAgIFwibGluZVdpZHRoXCI6IENvbnN0YW50cy5TZXR0aW5nLkFSUk9XX0RFRkFVTFRfTElORV9TSVpFLFxuICAgICAgXCJoZWFkU2l6ZVwiOiBDb25zdGFudHMuU2V0dGluZy5BUlJPV19ERUZBVUxUX0hFQURfU0laRSxcbiAgICAgIFwiY29sb3JcIjogQ29uc3RhbnRzLlNldHRpbmcuQVJST1dfREVGQVVMVF9DT0xPUixcbiAgICAgIFwibGluZUNhcFwiOiBDb25zdGFudHMuU2V0dGluZy5BUlJPV19ERUZBVUxUX0xJTkVfQ0FQXG4gICAgfSk7XG4gIH1cbn0iLCIvKlxuICogQ29weXJpZ2h0IChDKSAyMDIwIEVsaWFzdGlrIChlbGlhc3Rpa3NvZnRzLmNvbSlcbiAqXG4gKiBUaGlzIGZpbGUgaXMgcGFydCBvZiBcIkpTR2FtZVRvb2xzXCIuXG4gKlxuICogXCJKU0dhbWVUb29sc1wiIGlzIGZyZWUgc29mdHdhcmU6IHlvdSBjYW4gcmVkaXN0cmlidXRlIGl0IGFuZC9vciBtb2RpZnlcbiAqIGl0IHVuZGVyIHRoZSB0ZXJtcyBvZiB0aGUgR05VIEdlbmVyYWwgUHVibGljIExpY2Vuc2UgYXMgcHVibGlzaGVkIGJ5XG4gKiB0aGUgRnJlZSBTb2Z0d2FyZSBGb3VuZGF0aW9uLCBlaXRoZXIgdmVyc2lvbiAzIG9mIHRoZSBMaWNlbnNlLCBvclxuICogKGF0IHlvdXIgb3B0aW9uKSBhbnkgbGF0ZXIgdmVyc2lvbi5cbiAqXG4gKiBcIkpTR2FtZVRvb2xzXCIgaXMgZGlzdHJpYnV0ZWQgaW4gdGhlIGhvcGUgdGhhdCBpdCB3aWxsIGJlIHVzZWZ1bCxcbiAqIGJ1dCBXSVRIT1VUIEFOWSBXQVJSQU5UWTsgd2l0aG91dCBldmVuIHRoZSBpbXBsaWVkIHdhcnJhbnR5IG9mXG4gKiBNRVJDSEFOVEFCSUxJVFkgb3IgRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UuICBTZWUgdGhlXG4gKiBHTlUgR2VuZXJhbCBQdWJsaWMgTGljZW5zZSBmb3IgbW9yZSBkZXRhaWxzLlxuICpcbiAqIFlvdSBzaG91bGQgaGF2ZSByZWNlaXZlZCBhIGNvcHkgb2YgdGhlIEdOVSBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlXG4gKiBhbG9uZyB3aXRoIFwiSlNHYW1lVG9vbHNcIi4gIElmIG5vdCwgc2VlIDxodHRwOi8vd3d3LmdudS5vcmcvbGljZW5zZXMvPi5cbiAqL1xuaW1wb3J0IENvbXBvbmVudCBmcm9tIFwiLi9Db21wb25lbnRcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQm94IGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgc2VsZWN0YWJsZSA9IGZhbHNlO1xuXG4gIGNvbnN0cnVjdG9yKHgsIHksIHdpZHRoLCBoZWlnaHQsIHN0eWxlKSB7XG4gICAgc3VwZXIoeCwgeSwgd2lkdGgsIGhlaWdodCwgc3R5bGUpO1xuICB9XG4gIFxuICBkcmF3KGNvbnRleHQpIHtcbiAgICBpZih0aGlzLmhpZGRlbikgcmV0dXJuO1xuICAgIHN1cGVyLmRyYXcoY29udGV4dCk7XG5cbiAgICBjb25zdCBjYW52YXMgPSBjb250ZXh0LmNhbnZhcztcbiAgICBjb25zdCBjdHggPSBjYW52YXMuZ2V0Q29udGV4dChcIjJkXCIpO1xuICAgIGN0eC5zYXZlKCk7XG5cbiAgICB0aGlzLmRyYXdCYWNrZ3JvdW5kKGN0eCk7XG4gICAgdGhpcy5kcmF3Qm9yZGVyKGN0eCk7XG4gICAgXG4gICAgY3R4LnJlc3RvcmUoKTtcbiAgfVxuXG4gIGRyYXdCYWNrZ3JvdW5kKGN0eCkge1xuICAgIGNvbnN0IGNvbG9yID0gdGhpcy5iYWNrZ3JvdW5kQ29sb3I7XG5cbiAgICBpZihjb2xvcikge1xuICAgICAgY3R4LnNhdmUoKTtcbiAgXG4gICAgICBjdHguZmlsbFN0eWxlID0gY29sb3I7XG4gICAgICBjdHguZmlsbFJlY3QoTWF0aC5yb3VuZCh0aGlzLngpLCBNYXRoLnJvdW5kKHRoaXMueSksIE1hdGgucm91bmQodGhpcy53aWR0aCksIE1hdGgucm91bmQodGhpcy5oZWlnaHQpKTtcblxuICAgICAgY3R4LnJlc3RvcmUoKTtcbiAgICB9XG4gIH1cblxuICBnZXQgYmFja2dyb3VuZENvbG9yKCkge1xuICAgIGxldCBjb2xvciA9IG51bGw7XG5cbiAgICBpZih0aGlzLmhvdmVyZWQgJiYgdGhpcy5jbGlja2VkICYmIHRoaXMuc3R5bGUuYmFja2dyb3VuZENvbG9yRG93biAhPSBudWxsKSB7XG4gICAgICBjb2xvciA9IHRoaXMuc3R5bGUuYmFja2dyb3VuZENvbG9yRG93bjtcbiAgICB9IGVsc2UgaWYodGhpcy5ob3ZlcmVkICYmIHRoaXMuc3R5bGUuYmFja2dyb3VuZENvbG9ySG92ZXIgIT0gbnVsbCkge1xuICAgICAgY29sb3IgPSB0aGlzLnN0eWxlLmJhY2tncm91bmRDb2xvckhvdmVyO1xuICAgIH0gZWxzZSB7XG4gICAgICBjb2xvciA9IHRoaXMuc3R5bGUuYmFja2dyb3VuZENvbG9yO1xuICAgIH1cblxuICAgIHJldHVybiBjb2xvcjtcbiAgfVxuXG4gIGRyYXdCb3JkZXIoY3R4KSB7XG4gICAgY29uc3QgY29sb3IgPSB0aGlzLmJvcmRlckNvbG9yO1xuXG4gICAgaWYoY29sb3IgJiYgdGhpcy5zdHlsZS5ib3JkZXJTaXplID4gMCkge1xuICAgICAgY3R4LnNhdmUoKTtcbiAgICAgIFxuICAgICAgY3R4LnN0cm9rZVN0eWxlID0gY29sb3I7XG4gICAgICBjdHgubGluZVdpZHRoID0gdGhpcy5zdHlsZS5ib3JkZXJTaXplO1xuICAgICAgXG4gICAgICBjdHguc3Ryb2tlUmVjdChNYXRoLnJvdW5kKHRoaXMueCksIE1hdGgucm91bmQodGhpcy55KSwgTWF0aC5yb3VuZCh0aGlzLndpZHRoIC0gdGhpcy5zdHlsZS5ib3JkZXJTaXplIC8gMiksIE1hdGgucm91bmQodGhpcy5oZWlnaHQgLSB0aGlzLnN0eWxlLmJvcmRlclNpemUgLyAyKSk7XG4gIFxuICAgICAgY3R4LnJlc3RvcmUoKTtcbiAgICB9XG4gIH1cblxuICBnZXQgYm9yZGVyQ29sb3IoKSB7XG4gICAgbGV0IGNvbG9yID0gbnVsbDtcblxuICAgIGlmKHRoaXMuY2xpY2tlZCAmJiB0aGlzLmhvdmVyZWQgJiYgdGhpcy5zdHlsZS5ib3JkZXJDb2xvckRvd24gIT0gbnVsbCkge1xuICAgICAgY29sb3IgPSB0aGlzLnN0eWxlLmJvcmRlckNvbG9yRG93bjtcbiAgICB9IGVsc2UgaWYoIXRoaXMuY2xpY2tlZCAmJiB0aGlzLmhvdmVyZWQgJiYgdGhpcy5zdHlsZS5ib3JkZXJDb2xvckhvdmVyICE9IG51bGwpIHtcbiAgICAgIGNvbG9yID0gdGhpcy5zdHlsZS5ib3JkZXJDb2xvckhvdmVyO1xuICAgIH0gZWxzZSBpZih0aGlzLnNlbGVjdGFibGUgJiYgdGhpcy5zZWxlY3RlZCAmJiB0aGlzLnN0eWxlLmJvcmRlckNvbG9yU2VsZWN0ZWQgIT0gbnVsbCkge1xuICAgICAgY29sb3IgPSB0aGlzLnN0eWxlLmJvcmRlckNvbG9yU2VsZWN0ZWQ7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbG9yID0gdGhpcy5zdHlsZS5ib3JkZXJDb2xvcjtcbiAgICB9XG5cbiAgICByZXR1cm4gY29sb3I7XG4gIH1cbn0iLCIvKlxuICogQ29weXJpZ2h0IChDKSAyMDIwIEVsaWFzdGlrIChlbGlhc3Rpa3NvZnRzLmNvbSlcbiAqXG4gKiBUaGlzIGZpbGUgaXMgcGFydCBvZiBcIkpTR2FtZVRvb2xzXCIuXG4gKlxuICogXCJKU0dhbWVUb29sc1wiIGlzIGZyZWUgc29mdHdhcmU6IHlvdSBjYW4gcmVkaXN0cmlidXRlIGl0IGFuZC9vciBtb2RpZnlcbiAqIGl0IHVuZGVyIHRoZSB0ZXJtcyBvZiB0aGUgR05VIEdlbmVyYWwgUHVibGljIExpY2Vuc2UgYXMgcHVibGlzaGVkIGJ5XG4gKiB0aGUgRnJlZSBTb2Z0d2FyZSBGb3VuZGF0aW9uLCBlaXRoZXIgdmVyc2lvbiAzIG9mIHRoZSBMaWNlbnNlLCBvclxuICogKGF0IHlvdXIgb3B0aW9uKSBhbnkgbGF0ZXIgdmVyc2lvbi5cbiAqXG4gKiBcIkpTR2FtZVRvb2xzXCIgaXMgZGlzdHJpYnV0ZWQgaW4gdGhlIGhvcGUgdGhhdCBpdCB3aWxsIGJlIHVzZWZ1bCxcbiAqIGJ1dCBXSVRIT1VUIEFOWSBXQVJSQU5UWTsgd2l0aG91dCBldmVuIHRoZSBpbXBsaWVkIHdhcnJhbnR5IG9mXG4gKiBNRVJDSEFOVEFCSUxJVFkgb3IgRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UuICBTZWUgdGhlXG4gKiBHTlUgR2VuZXJhbCBQdWJsaWMgTGljZW5zZSBmb3IgbW9yZSBkZXRhaWxzLlxuICpcbiAqIFlvdSBzaG91bGQgaGF2ZSByZWNlaXZlZCBhIGNvcHkgb2YgdGhlIEdOVSBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlXG4gKiBhbG9uZyB3aXRoIFwiSlNHYW1lVG9vbHNcIi4gIElmIG5vdCwgc2VlIDxodHRwOi8vd3d3LmdudS5vcmcvbGljZW5zZXMvPi5cbiAqL1xuaW1wb3J0IFJvdyBmcm9tIFwiLi9Sb3dcIjtcbmltcG9ydCBDb25zdGFudHMgZnJvbSBcIi4vQ29uc3RhbnRzXCI7XG5pbXBvcnQgU3R5bGUgZnJvbSBcIi4vU3R5bGVcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQnV0dG9uIGV4dGVuZHMgUm93IHtcbiAgc2VsZWN0YWJsZSA9IHRydWU7XG5cbiAgY29uc3RydWN0b3IoeCwgeSwgbWF4V2lkdGgsIG1heEhlaWdodCwgc3R5bGUsIC4uLmNvbXBvbmVudHMpIHtcbiAgICBzdXBlcih4LCB5LCBtYXhXaWR0aCwgbWF4SGVpZ2h0LCBzdHlsZSwgLi4uY29tcG9uZW50cyk7XG4gIH1cbiAgXG4gIGRyYXcoY29udGV4dCkge1xuICAgIGlmKHRoaXMuaGlkZGVuKSByZXR1cm47XG4gICAgc3VwZXIuZHJhdyhjb250ZXh0KTtcblxuICAgIGNvbnN0IGNhbnZhcyA9IGNvbnRleHQuY2FudmFzO1xuICAgIGNvbnN0IGN0eCA9IGNhbnZhcy5nZXRDb250ZXh0KFwiMmRcIik7XG4gICAgY3R4LnNhdmUoKTtcbiAgICBcbiAgICB0aGlzLmRyYXdDb21wb25lbnRzKGN0eCk7XG4gICAgXG4gICAgY3R4LnJlc3RvcmUoKTtcbiAgfVxuXG4gIGRyYXdDb21wb25lbnRzKGN0eCkge1xuICAgIHN1cGVyLmRyYXcoY3R4KTtcbiAgfVxuXG4gIGdldCBoZWlnaHQoKSB7XG4gICAgcmV0dXJuICh0aGlzLm1heEhlaWdodCB8fCBzdXBlci5oZWlnaHQpICsgdGhpcy5zdHlsZS5wYWRkaW5nO1xuICB9XG5cbiAgZ2V0IHdpZHRoKCkge1xuICAgIHJldHVybiAodGhpcy5tYXhXaWR0aCB8fCBzdXBlci53aWR0aCkgKyB0aGlzLnN0eWxlLnBhZGRpbmc7XG4gIH1cblxuICBnZXQgZGVmYXVsdFN0eWxlKCkge1xuICAgIHJldHVybiBuZXcgU3R5bGUoe1xuICAgICAgXCJiYWNrZ3JvdW5kQ29sb3JcIjogQ29uc3RhbnRzLlNldHRpbmcuQlVUVE9OX0RFRkFVTFRfQkFDS0dST1VORCxcbiAgICAgIFwiYmFja2dyb3VuZENvbG9ySG92ZXJcIjogQ29uc3RhbnRzLlNldHRpbmcuQlVUVE9OX0RFRkFVTFRfSE9WRVJfQkFDS0dST1VORCxcbiAgICAgIFwiYmFja2dyb3VuZENvbG9yRG93blwiOiBDb25zdGFudHMuU2V0dGluZy5CVVRUT05fREVGQVVMVF9DTElDS19CQUNLR1JPVU5ELFxuICAgICAgXCJzY3JvbGxYRGlzYWJsZWRcIjogdHJ1ZSxcbiAgICAgIFwic2Nyb2xsWURpc2FibGVkXCI6IHRydWVcbiAgICB9KTtcbiAgfVxufSIsIi8qXG4gKiBDb3B5cmlnaHQgKEMpIDIwMjAgRWxpYXN0aWsgKGVsaWFzdGlrc29mdHMuY29tKVxuICpcbiAqIFRoaXMgZmlsZSBpcyBwYXJ0IG9mIFwiSlNHYW1lVG9vbHNcIi5cbiAqXG4gKiBcIkpTR2FtZVRvb2xzXCIgaXMgZnJlZSBzb2Z0d2FyZTogeW91IGNhbiByZWRpc3RyaWJ1dGUgaXQgYW5kL29yIG1vZGlmeVxuICogaXQgdW5kZXIgdGhlIHRlcm1zIG9mIHRoZSBHTlUgR2VuZXJhbCBQdWJsaWMgTGljZW5zZSBhcyBwdWJsaXNoZWQgYnlcbiAqIHRoZSBGcmVlIFNvZnR3YXJlIEZvdW5kYXRpb24sIGVpdGhlciB2ZXJzaW9uIDMgb2YgdGhlIExpY2Vuc2UsIG9yXG4gKiAoYXQgeW91ciBvcHRpb24pIGFueSBsYXRlciB2ZXJzaW9uLlxuICpcbiAqIFwiSlNHYW1lVG9vbHNcIiBpcyBkaXN0cmlidXRlZCBpbiB0aGUgaG9wZSB0aGF0IGl0IHdpbGwgYmUgdXNlZnVsLFxuICogYnV0IFdJVEhPVVQgQU5ZIFdBUlJBTlRZOyB3aXRob3V0IGV2ZW4gdGhlIGltcGxpZWQgd2FycmFudHkgb2ZcbiAqIE1FUkNIQU5UQUJJTElUWSBvciBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRS4gIFNlZSB0aGVcbiAqIEdOVSBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlIGZvciBtb3JlIGRldGFpbHMuXG4gKlxuICogWW91IHNob3VsZCBoYXZlIHJlY2VpdmVkIGEgY29weSBvZiB0aGUgR05VIEdlbmVyYWwgUHVibGljIExpY2Vuc2VcbiAqIGFsb25nIHdpdGggXCJKU0dhbWVUb29sc1wiLiAgSWYgbm90LCBzZWUgPGh0dHA6Ly93d3cuZ251Lm9yZy9saWNlbnNlcy8+LlxuICovXG5pbXBvcnQgSW1hZ2VDb250YWluZXIgZnJvbSBcIi4vSW1hZ2VDb250YWluZXJcIjtcbmltcG9ydCBCdXR0b24gZnJvbSBcIi4vQnV0dG9uXCI7XG5pbXBvcnQgU3R5bGUgZnJvbSBcIi4vU3R5bGVcIjtcbmltcG9ydCBDb25zdGFudHMgZnJvbSBcIi4vQ29uc3RhbnRzXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEJ1dHRvbkltYWdlIGV4dGVuZHMgQnV0dG9uIHtcbiAgY29uc3RydWN0b3IoaW1nU3JjLCB4LCB5LCBhbGlnbmVtZW50LCB2ZXJ0aWNhbEFsaWduZW1lbnQsIHdpZHRoLCBoZWlnaHQsIGJhY2tncm91bmRDb2xvciwgYmFja2dyb3VuZENvbG9ySG92ZXIsIGltYWdlTG9hZGVyKSB7XG4gICAgY29uc3Qgc3R5bGUgPSBuZXcgU3R5bGUoe1xuICAgICAgXCJhbGlnbmVtZW50XCI6IGFsaWduZW1lbnQsXG4gICAgICBcInZlcnRpY2FsQWxpZ25lbWVudFwiOiB2ZXJ0aWNhbEFsaWduZW1lbnQsXG4gICAgICBcImJhY2tncm91bmRDb2xvclwiOiBiYWNrZ3JvdW5kQ29sb3IgfHwgQ29uc3RhbnRzLlNldHRpbmcuQlVUVE9OX0RFRkFVTFRfQkFDS0dST1VORCxcbiAgICAgIFwiYmFja2dyb3VuZENvbG9ySG92ZXJcIjogYmFja2dyb3VuZENvbG9ySG92ZXIgfHwgQ29uc3RhbnRzLlNldHRpbmcuQlVUVE9OX0RFRkFVTFRfSE9WRVJfQkFDS0dST1VORFxuICAgIH0pO1xuXG4gICAgc3VwZXIoeCwgeSwgd2lkdGgsIGhlaWdodCwgc3R5bGUpO1xuICAgIHRoaXMuaW1hZ2UgPSBuZXcgSW1hZ2VDb250YWluZXIoaW1nU3JjLCB4LCB5LCB3aWR0aCwgaGVpZ2h0LCBuZXcgU3R5bGUoeyBcImFsaWduZW1lbnRcIjogXCJjZW50ZXJcIiwgXCJ2ZXJ0aWNhbEFsaWduZW1lbnRcIjogXCJjZW50ZXJcIiB9KSwgaW1hZ2VMb2FkZXIpO1xuICAgIHRoaXMuYWRkKHRoaXMuaW1hZ2UpO1xuXG4gICAgY29uc29sZSAmJiBjb25zb2xlLndhcm4gJiYgY29uc29sZS53YXJuKENvbnN0YW50cy5TdHJpbmcuTk9USUNFX01FU1NBR0UgKyBcIiBcIiArIENvbnN0YW50cy5TdHJpbmcuQlVUVE9OX0lNQUdFX0RFUFJFQ0FURUQpO1xuICB9XG5cbiAgbG9hZEltYWdlKGltYWdlTG9hZGVyKSB7XG4gICAgaWYodGhpcy5jb21wb25lbnRzWzBdIGluc3RhbmNlb2YgSW1hZ2VDb250YWluZXIpIHRoaXMuY29tcG9uZW50c1swXS5sb2FkSW1hZ2UoaW1hZ2VMb2FkZXIpO1xuICB9XG5cbiAgc2V0IG1pbldpZHRoKHdpZHRoKSB7XG4gICAgdGhpcy5pbWFnZS53aWR0aCA9IHdpZHRoO1xuICAgIHN1cGVyLm1pbldpZHRoID0gd2lkdGg7XG4gIH1cblxuICBzZXQgbWluSGVpZ2h0KGhlaWdodCkge1xuICAgIHRoaXMuaW1hZ2UuaGVpZ2h0ID0gaGVpZ2h0O1xuICAgIHN1cGVyLm1pbkhlaWdodCA9IGhlaWdodDtcbiAgfVxuXG4gIGdldCBtaW5XaWR0aCgpIHtcbiAgICByZXR1cm4gc3VwZXIubWluV2lkdGg7XG4gIH1cblxuICBnZXQgbWluSGVpZ2h0KCkge1xuICAgIHJldHVybiBzdXBlci5taW5IZWlnaHQ7XG4gIH1cblxuICBzZXQgbWF4V2lkdGgod2lkdGgpIHtcbiAgICB0aGlzLmltYWdlLndpZHRoID0gd2lkdGg7XG4gICAgc3VwZXIubWF4V2lkdGggPSB3aWR0aDtcbiAgfVxuXG4gIHNldCBtYXhIZWlnaHQoaGVpZ2h0KSB7XG4gICAgdGhpcy5pbWFnZS5oZWlnaHQgPSBoZWlnaHQ7XG4gICAgc3VwZXIubWF4SGVpZ2h0ID0gaGVpZ2h0O1xuICB9XG5cbiAgZ2V0IG1heFdpZHRoKCkge1xuICAgIHJldHVybiBzdXBlci5tYXhXaWR0aDtcbiAgfVxuXG4gIGdldCBtYXhIZWlnaHQoKSB7XG4gICAgcmV0dXJuIHN1cGVyLm1heEhlaWdodDtcbiAgfVxuXG4gIHNldCB3aWR0aCh3aWR0aCkge1xuICAgIHRoaXMubWluV2lkdGggPSB3aWR0aDtcbiAgICB0aGlzLm1heFdpZHRoID0gd2lkdGg7XG4gIH1cblxuICBnZXQgd2lkdGgoKSB7XG4gICAgcmV0dXJuIHN1cGVyLndpZHRoO1xuICB9XG5cbiAgc2V0IGhlaWdodChoZWlnaHQpIHtcbiAgICB0aGlzLm1pbkhlaWdodCA9IGhlaWdodDtcbiAgICB0aGlzLm1heEhlaWdodCA9IGhlaWdodDtcbiAgfVxuXG4gIGdldCBoZWlnaHQoKSB7XG4gICAgcmV0dXJuIHN1cGVyLmhlaWdodDtcbiAgfVxufSIsIi8qXG4gKiBDb3B5cmlnaHQgKEMpIDIwMjAgRWxpYXN0aWsgKGVsaWFzdGlrc29mdHMuY29tKVxuICpcbiAqIFRoaXMgZmlsZSBpcyBwYXJ0IG9mIFwiSlNHYW1lVG9vbHNcIi5cbiAqXG4gKiBcIkpTR2FtZVRvb2xzXCIgaXMgZnJlZSBzb2Z0d2FyZTogeW91IGNhbiByZWRpc3RyaWJ1dGUgaXQgYW5kL29yIG1vZGlmeVxuICogaXQgdW5kZXIgdGhlIHRlcm1zIG9mIHRoZSBHTlUgR2VuZXJhbCBQdWJsaWMgTGljZW5zZSBhcyBwdWJsaXNoZWQgYnlcbiAqIHRoZSBGcmVlIFNvZnR3YXJlIEZvdW5kYXRpb24sIGVpdGhlciB2ZXJzaW9uIDMgb2YgdGhlIExpY2Vuc2UsIG9yXG4gKiAoYXQgeW91ciBvcHRpb24pIGFueSBsYXRlciB2ZXJzaW9uLlxuICpcbiAqIFwiSlNHYW1lVG9vbHNcIiBpcyBkaXN0cmlidXRlZCBpbiB0aGUgaG9wZSB0aGF0IGl0IHdpbGwgYmUgdXNlZnVsLFxuICogYnV0IFdJVEhPVVQgQU5ZIFdBUlJBTlRZOyB3aXRob3V0IGV2ZW4gdGhlIGltcGxpZWQgd2FycmFudHkgb2ZcbiAqIE1FUkNIQU5UQUJJTElUWSBvciBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRS4gIFNlZSB0aGVcbiAqIEdOVSBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlIGZvciBtb3JlIGRldGFpbHMuXG4gKlxuICogWW91IHNob3VsZCBoYXZlIHJlY2VpdmVkIGEgY29weSBvZiB0aGUgR05VIEdlbmVyYWwgUHVibGljIExpY2Vuc2VcbiAqIGFsb25nIHdpdGggXCJKU0dhbWVUb29sc1wiLiAgSWYgbm90LCBzZWUgPGh0dHA6Ly93d3cuZ251Lm9yZy9saWNlbnNlcy8+LlxuICovXG5pbXBvcnQgQ29uc3RhbnRzIGZyb20gXCIuL0NvbnN0YW50c1wiO1xuaW1wb3J0IFV0aWxzIGZyb20gXCIuL1V0aWxzXCI7XG5pbXBvcnQgU2NlbmUgZnJvbSBcIi4vU2NlbmVcIjtcbmltcG9ydCBSZWFjdG9yQ2FudmFzIGZyb20gXCIuL1JlYWN0b3JDYW52YXNcIjtcbmltcG9ydCBNZW51IGZyb20gXCIuL01lbnVcIjtcbmltcG9ydCBMYWJlbCBmcm9tIFwiLi9MYWJlbFwiO1xuaW1wb3J0IFN0eWxlIGZyb20gXCIuL1N0eWxlXCI7XG5pbXBvcnQgQnV0dG9uIGZyb20gXCIuL0J1dHRvblwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDYW52YXMge1xuICAjbGFzdEZyYW1lVGltZTtcbiAgI193aWR0aDtcbiAgI19oZWlnaHQ7XG5cbiAgY29uc3RydWN0b3Ioc2NlbmUsIGNhbnZhcywgd2lkdGgsIGhlaWdodCwgYXV0b1Jlc2l6ZSwgbWF4RlBTKSB7XG4gICAgdGhpcy5jYW52YXMgPSBjYW52YXMgfHwgZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImNhbnZhc1wiKTtcbiAgICB0aGlzLmNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgdGhpcy53aWR0aCA9IHdpZHRoIHx8IENvbnN0YW50cy5TZXR0aW5nLkNBTlZBU19XSURUSDtcbiAgICB0aGlzLmhlaWdodCA9IGhlaWdodCB8fCBDb25zdGFudHMuU2V0dGluZy5DQU5WQVNfSEVJR0hUO1xuICAgIHRoaXMuc2NlbmUgPSBzY2VuZTtcbiAgICB0aGlzLmNvbnRhaW5lci5hcHBlbmRDaGlsZCh0aGlzLmNhbnZhcyk7XG4gICAgdGhpcy5zdGFydGVkID0gZmFsc2U7XG4gICAgdGhpcy5pbml0ID0gZmFsc2U7XG4gICAgdGhpcy5tYXhGUFMgPSBtYXhGUFMgfHwgLTE7XG4gICAgdGhpcy4jbGFzdEZyYW1lVGltZSA9IDA7XG4gICAgdGhpcy5oYXNFcnJvciA9IGZhbHNlO1xuICAgIHRoaXMuZnVsbHNjcmVlbiA9IGZhbHNlO1xuICAgIHRoaXMuZnVsbHBhZ2UgPSBmYWxzZTtcblxuICAgIC8vIEVycm9yIG1lc3NhZ2Ugc2NyZWVuXG4gICAgY29uc3QgYnV0dG9uU2NlbmVFcnJvciA9IG5ldyBCdXR0b24obnVsbCwgbnVsbCwgbnVsbCwgbnVsbCwgbmV3IFN0eWxlKHsgXCJhbGlnbmVtZW50XCI6IFwiY2VudGVyXCIsIFwiYmFja2dyb3VuZENvbG9yXCI6IENvbnN0YW50cy5TZXR0aW5nLkJVVFRPTl9ERUZBVUxUX0FMVEVSTkFUSVZFX0JBQ0tHUk9VTkQgfSksIG5ldyBMYWJlbChDb25zdGFudHMuU3RyaW5nLlJFVFJZLCBudWxsLCBudWxsLCBuZXcgU3R5bGUoeyBcImZvbnRDb2xvclwiOiBcIndoaXRlXCIsIFwiYWxpZ25lbWVudFwiOiBcImNlbnRlclwiIH0pKSk7XG4gICAgY29uc3QgbWVudVNjZW5lRXJyb3IgPSBuZXcgTWVudShuZXcgU3R5bGUoeyBcInNwYWNlQmV0d2VlbkNvbXBvbmVudHNcIjogMTUgfSksIG5ldyBMYWJlbChDb25zdGFudHMuU3RyaW5nLkVSUk9SX01FU1NBR0VfQ0FOVkFTX0xBQkVMLCBudWxsLCBudWxsLCBuZXcgU3R5bGUoeyBcImZvbnRDb2xvclwiOiBcIndoaXRlXCIsIFwiYWxpZ25lbWVudFwiOiBcImNlbnRlclwiIH0pKSwgYnV0dG9uU2NlbmVFcnJvcik7XG4gICAgbWVudVNjZW5lRXJyb3IuZW5hYmxlKCk7XG5cbiAgICB0aGlzLnNjZW5lRXJyb3IgPSBuZXcgU2NlbmUobWVudVNjZW5lRXJyb3IpO1xuICAgIHRoaXMuc2NlbmVQcmV2aW91cyA9IHRoaXMuc2NlbmU7XG5cbiAgICBidXR0b25TY2VuZUVycm9yLmFkZENsaWNrQWN0aW9uKCgpID0+IHtcbiAgICAgIHRoaXMuaGFzRXJyb3IgPSBmYWxzZTtcbiAgICAgIHRoaXMuc2NlbmUgPSB0aGlzLnNjZW5lUHJldmlvdXNcbiAgICB9KTtcbiAgICBcbiAgICAvLyBSZWFjdG9ycy9ldmVudHNcbiAgICB0aGlzLnJlYWN0b3IgPSBuZXcgUmVhY3RvckNhbnZhcygpO1xuICAgIHRoaXMucmVhY3Rvci5yZWdpc3RlckV2ZW50KFwibW91c2Vtb3ZlXCIpO1xuICAgIHRoaXMucmVhY3Rvci5yZWdpc3RlckV2ZW50KFwiY2xpY2tcIik7XG4gICAgdGhpcy5yZWFjdG9yLnJlZ2lzdGVyRXZlbnQoXCJtb3VzZWRvd25cIik7XG4gICAgdGhpcy5yZWFjdG9yLnJlZ2lzdGVyRXZlbnQoXCJtb3VzZXVwXCIpO1xuICAgIHRoaXMucmVhY3Rvci5yZWdpc3RlckV2ZW50KFwid2hlZWxcIik7XG4gICAgdGhpcy5yZWFjdG9yLnJlZ2lzdGVyRXZlbnQoXCJ0b3VjaHN0YXJ0XCIpO1xuICAgIHRoaXMucmVhY3Rvci5yZWdpc3RlckV2ZW50KFwidG91Y2hlbmRcIik7XG4gICAgdGhpcy5yZWFjdG9yLnJlZ2lzdGVyRXZlbnQoXCJ0b3VjaG1vdmVcIik7XG5cbiAgICBpZihhdXRvUmVzaXplKSB0aGlzLmF1dG9SZXNpemUoKTtcbiAgICB0aGlzLmNyZWF0ZUV2ZW50cygpO1xuXG4gICAgaWYoQ29uc3RhbnRzLlNldHRpbmcuRElTQUJMRV9PUFRJTUlaQVRJT05TKSB7XG4gICAgICBjb25zb2xlICYmIGNvbnNvbGUuaW5mbyhDb25zdGFudHMuU3RyaW5nLk5PVElDRV9NRVNTQUdFICsgXCIgXCIgKyBDb25zdGFudHMuU3RyaW5nLk9QVElNSVpBVElPTl9ESVNBQkxFRCk7XG4gICAgfVxuXG4gICAgaWYoQ29uc3RhbnRzLlNldHRpbmcuRElTQUJMRV9DT05UQUlORVJTX0NVVFRJTkcpIHtcbiAgICAgIGNvbnNvbGUgJiYgY29uc29sZS5pbmZvKENvbnN0YW50cy5TdHJpbmcuTk9USUNFX01FU1NBR0UgKyBcIiBcIiArIENvbnN0YW50cy5TdHJpbmcuQ09OVEFJTkVSX0NVVFRJTkdfRElTQUJMRUQpO1xuICAgIH1cbiAgfVxuXG4gIGRyYXcoKSB7XG4gICAgY29uc3QgY3R4ID0gdGhpcy5jYW52YXMuZ2V0Q29udGV4dChcIjJkXCIpO1xuICAgIHRoaXMuZHJhd0NsZWFyKGN0eCk7XG4gICAgdGhpcy5kcmF3U2NlbmUoY3R4KTtcbiAgfVxuXG4gIGRyYXdTY2VuZShjdHgpIHtcbiAgICBpZih0aGlzLnNjZW5lKSB7XG4gICAgICB0aGlzLnNjZW5lLnBhcmVudCA9IHRoaXM7XG4gICAgICB0aGlzLnNjZW5lLmNhbnZhcyA9IHRoaXM7XG5cbiAgICAgIHRyeSB7XG4gICAgICAgIGN0eC5zY2FsZShDb25zdGFudHMuU2V0dGluZy5QSVhFTF9SQVRJTywgQ29uc3RhbnRzLlNldHRpbmcuUElYRUxfUkFUSU8pO1xuICAgICAgICB0aGlzLnNjZW5lLmRyYXcoY3R4KTtcbiAgICAgIH0gY2F0Y2goZSkge1xuICAgICAgICB0aGlzLmhhc0Vycm9yID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5zY2VuZSA9IHRoaXMuc2NlbmVFcnJvcjtcbiAgICAgICAgY29uc29sZS5lcnJvcihDb25zdGFudHMuU3RyaW5nLkVSUk9SX01FU1NBR0UgKyBcIiBcIiArIENvbnN0YW50cy5TdHJpbmcuRVJST1JfTUVTU0FHRV9DQU5WQVMgKyBcIlxcblwiLCBlKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBkcmF3Q2xlYXIoY3R4KSB7XG4gICAgVXRpbHMuY2xlYXIoY3R4KTtcbiAgfVxuXG4gIHN0YXJ0RHJhdyhmdW5jKSB7XG4gICAgdGhpcy5zdGFydGVkID0gdHJ1ZTtcblxuICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZSh0aW1lID0+IHtcbiAgICAgIGlmKHRoaXMuc3RhcnRlZCkge1xuICAgICAgICBjb25zdCBvZmZzZXRGcmFtZSA9IHRpbWUgLSB0aGlzLiNsYXN0RnJhbWVUaW1lO1xuXG4gICAgICAgIHRoaXMuZnVsbHNjcmVlbiA9IGRvY3VtZW50LmZ1bGxzY3JlZW5FbGVtZW50ID09IHRoaXMuY2FudmFzIHx8IGRvY3VtZW50LmZ1bGxzY3JlZW5FbGVtZW50ID09IHRoaXMuY29udGFpbmVyO1xuXG4gICAgICAgIGlmKENvbnN0YW50cy5TZXR0aW5nLkVOQUJMRV9QSVhFTF9SQVRJT19SRVNJWklORykge1xuICAgICAgICAgIENvbnN0YW50cy5TZXR0aW5nLlBJWEVMX1JBVElPID0gd2luZG93LmRldmljZVBpeGVsUmF0aW87IC8vIFVwZGF0ZSB0aGUgZGV2aWNlIHBpeGVsIHJhdGlvLCBvbmx5IGluIGZ1bGxzY3JlZW4gbW9kZS9mdWxscGFnZSBtb2RlXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgQ29uc3RhbnRzLlNldHRpbmcuUElYRUxfUkFUSU8gPSAxO1xuICAgICAgICB9XG5cbiAgICAgICAgVXRpbHMuYXV0b0RQSSh0aGlzLmNhbnZhcyk7XG5cbiAgICAgICAgaWYodGhpcy5tYXhGUFMgPCAxIHx8IG9mZnNldEZyYW1lID4gMTAwMCAvIHRoaXMubWF4RlBTKSB7XG4gICAgICAgICAgdGhpcy4jbGFzdEZyYW1lVGltZSA9IHRpbWU7XG4gICAgICAgICAgdGhpcy5kcmF3KCk7XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgIHRoaXMuc3RhcnREcmF3KGZ1bmMpO1xuICAgICAgICBpZihmdW5jKSBmdW5jKCk7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICBzdG9wRHJhdygpIHtcbiAgICB0aGlzLnN0YXJ0ZWQgPSBmYWxzZTtcbiAgfVxuXG4gIGFwcGVuZFRvKGVsZW1lbnQpIHtcbiAgICBlbGVtZW50LmFwcGVuZENoaWxkKHRoaXMuY29udGFpbmVyKTtcbiAgfVxuXG4gIHJlbW92ZShlbGVtZW50KSB7XG4gICAgZWxlbWVudC5yZW1vdmVDaGlsZCh0aGlzLmNvbnRhaW5lcik7XG4gICAgdGhpcy5jb250YWluZXIucmVtb3ZlQ2hpbGQodGhpcy5jYW52YXMpO1xuICB9XG5cbiAgdG9nZ2xlRnVsbHNjcmVlbigpIHtcbiAgICBVdGlscy50b2dnbGVGdWxsc2NyZWVuKHRoaXMuY2FudmFzLCB0aGlzLmNvbnRhaW5lcik7XG4gIH1cblxuICB0b2dnbGVGdWxscGFnZSgpIHtcbiAgICBVdGlscy50b2dnbGVGdWxscGFnZSh0aGlzLmNhbnZhcywgdGhpcy5jb250YWluZXIpO1xuICAgIHRoaXMuZnVsbHBhZ2UgPSAhdGhpcy5mdWxscGFnZTtcbiAgfVxuXG4gIGF1dG9SZXNpemUoKSB7XG4gICAgVXRpbHMuZW5hYmxlQXV0b1Jlc2l6ZUNhbnZhcyh0aGlzLmNhbnZhcywgdGhpcy5jb250YWluZXIsIHRoaXMud2lkdGgsIHRoaXMuaGVpZ2h0KTtcbiAgfVxuXG4gIGdldCB4KCkge1xuICAgIHJldHVybiAwO1xuICB9XG5cbiAgZ2V0IHkoKSB7XG4gICAgcmV0dXJuIDA7XG4gIH1cblxuICBnZXQgd2lkdGgoKSB7XG4gICAgcmV0dXJuIHRoaXMuY2FudmFzID8gVXRpbHMuZ2V0Q2FudmFzV2lkdGgodGhpcy5jYW52YXMpIDogdGhpcy4jX3dpZHRoO1xuICB9XG5cbiAgZ2V0IGhlaWdodCgpIHtcbiAgICByZXR1cm4gdGhpcy5jYW52YXMgPyBVdGlscy5nZXRDYW52YXNIZWlnaHQodGhpcy5jYW52YXMpIDogdGhpcy4jX2hlaWdodDtcbiAgfVxuXG4gIGdldCBzdHlsZSgpIHtcbiAgICByZXR1cm4gdGhpcy5jYW52YXMgPyB0aGlzLmNhbnZhcy5zdHlsZSA6IG51bGw7XG4gIH1cblxuICBzZXQgd2lkdGgod2lkdGgpIHtcbiAgICBpZih3aWR0aCAhPSB0aGlzLiNfd2lkdGgpIHtcbiAgICAgIHRoaXMuI193aWR0aCA9IHdpZHRoO1xuICAgICAgdGhpcy5jYW52YXMud2lkdGggPSB3aWR0aDtcbiAgICAgIHRoaXMuc2NlbmUgJiYgdGhpcy5zY2VuZS5yZWFjdG9yLmRpc3BhdGNoRXZlbnQoXCJvbkNoYW5nZVwiLCB0aGlzKTtcbiAgICB9XG4gIH1cblxuICBzZXQgaGVpZ2h0KGhlaWdodCkge1xuICAgIGlmKGhlaWdodCAhPSB0aGlzLiNfaGVpZ2h0KSB7XG4gICAgICB0aGlzLiNfaGVpZ2h0ID0gaGVpZ2h0O1xuICAgICAgdGhpcy5jYW52YXMuaGVpZ2h0ID0gaGVpZ2h0O1xuICAgICAgdGhpcy5zY2VuZSAmJiB0aGlzLnNjZW5lLnJlYWN0b3IuZGlzcGF0Y2hFdmVudChcIm9uQ2hhbmdlXCIsIHRoaXMpO1xuICAgIH1cbiAgfVxuXG4gIGdldENvbnRleHQoY29udGV4dCkge1xuICAgIHJldHVybiB0aGlzLmNhbnZhcyA/IHRoaXMuY2FudmFzLmdldENvbnRleHQoY29udGV4dCA/IGNvbnRleHQgOiBcIjJkXCIpIDogbnVsbDtcbiAgfVxuXG4gIGNyZWF0ZUV2ZW50cygpIHtcbiAgICBpZighdGhpcy5pbml0ICYmIHRoaXMuY2FudmFzKSB7XG4gICAgICBbXCJtb3VzZW1vdmVcIiwgXCJjbGlja1wiLCBcIm1vdXNlZG93blwiLCBcIm1vdXNldXBcIiwgXCJ3aGVlbFwiXS5mb3JFYWNoKGV2ZW50TmFtZSA9PiB7XG4gICAgICAgIHRoaXMuY2FudmFzLmFkZEV2ZW50TGlzdGVuZXIoZXZlbnROYW1lLCBldmVudCA9PiB7XG4gICAgICAgICAgY29uc3QgbW91c2VQb3NpdGlvbiA9IHRoaXMuZ2V0TW91c2VQb3MoZXZlbnQpO1xuICAgICAgICAgIHRoaXMuZG9FdmVudHMoZXZlbnQsIGV2ZW50TmFtZSwgbW91c2VQb3NpdGlvbik7XG4gICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgfSwgZmFsc2UpO1xuICAgICAgfSk7XG5cbiAgICAgIFtcInRvdWNoc3RhcnRcIiwgXCJ0b3VjaG1vdmVcIiwgXCJ0b3VjaGVuZFwiXS5mb3JFYWNoKGV2ZW50TmFtZSA9PiB7XG4gICAgICAgIHRoaXMuY2FudmFzLmFkZEV2ZW50TGlzdGVuZXIoZXZlbnROYW1lLCBldmVudCA9PiB7XG4gICAgICAgICAgY29uc3QgY2hhbmdlZFRvdWNoZXMgPSBldmVudC5jaGFuZ2VkVG91Y2hlc1swXTtcbiAgICAgICAgICBjb25zdCBwb3NpdGlvbiA9IHRoaXMuZ2V0TW91c2VQb3MoY2hhbmdlZFRvdWNoZXMpO1xuICAgICAgICAgIHRoaXMuZG9FdmVudHMoZXZlbnQsIGV2ZW50TmFtZSwgcG9zaXRpb24pO1xuICAgICAgICB9KTtcbiAgICAgIH0pO1xuXG4gICAgICB0aGlzLmluaXQgPSB0cnVlO1xuICAgIH1cbiAgfVxuXG4gIGRvRXZlbnRzKGV2ZW50LCBldmVudE5hbWUsIHBvc2l0aW9uKSB7XG4gICAgY29uc3QgY29tcG9uZW50cyA9IHRoaXMuZ2V0Q29tcG9uZW50c0F0UG9zaXRpb24ocG9zaXRpb24pOyAvLyBHZXQgYWxsIGVsZW1lbnRzIGF0IHRoZSBjdXJyZW50IHBvc2l0aW9uXG4gICAgdGhpcy5yZWFjdG9yLmRpc3BhdGNoRXZlbnQoZXZlbnROYW1lLCBldmVudCwgZmFsc2UpOyAvLyBEaXNwYXRjaCB0byBhbGwgY29tcG9uZW50cyB0byBkaXNhYmxlIHRoZW0gKGNhbGwgd2l0aCBmYWxzZSlcbiAgICBbLi4uY29tcG9uZW50c10ucmV2ZXJzZSgpLmZvckVhY2goY29tcG9uZW50ID0+IHRoaXMucmVhY3Rvci5kaXNwYXRjaEV2ZW50Q29tcG9uZW50KGV2ZW50TmFtZSwgY29tcG9uZW50LCBldmVudCwgdHJ1ZSkpOyAvLyBEaXNwYXRjaCB0byBjb21wb25lbnQgZGV0ZWN0ZWQgdG8gZW5hYmxlIHRoZW0gKGNhbGwgd2l0aCB0cnVlKVxuICB9XG5cbiAgYWRkRXZlbnRMaXN0ZW5lcihldmVudCwgY29tcG9uZW50LCBjYWxsYmFjaykge1xuICAgIHRoaXMucmVhY3Rvci5hZGRFdmVudExpc3RlbmVyKGV2ZW50LCBjb21wb25lbnQsIGNhbGxiYWNrKTtcbiAgfVxuICBcbiAgZ2V0TW91c2VQb3MoZXZlbnQpIHtcbiAgICByZXR1cm4gVXRpbHMuZ2V0TW91c2VQb3ModGhpcy5jYW52YXMsIGV2ZW50KTtcbiAgfVxuXG4gIGdldEFsbENvbXBvbmVudHMoc3RhcnQgPSB0aGlzLnNjZW5lKSB7XG4gICAgcmV0dXJuIHRoaXMuc2NlbmUuZ2V0QWxsQ29tcG9uZW50cyhzdGFydCk7XG4gIH1cblxuICBnZXRDb21wb25lbnRzQXRQb3NpdGlvbihtb3VzZVBvc2l0aW9uLCBzdGFydCA9IHRoaXMuc2NlbmUpIHtcbiAgICBjb25zdCBhbGxDb21wb25lbnRzID0gdGhpcy5zY2VuZS5nZXRDb21wb25lbnRzVHJlZShzdGFydCk7XG4gICAgY29uc3QgcmVzdWx0ID0gW3N0YXJ0XTtcblxuICAgIGlmKGFsbENvbXBvbmVudHMuY2hpbGRzKSB7XG4gICAgICBhbGxDb21wb25lbnRzLmNoaWxkcy5zb3J0KFNjZW5lLnNvcnRDb21wb25lbnRzVHJlZSkucmV2ZXJzZSgpLnNvbWUoY2hpbGQgPT4ge1xuICAgICAgICBpZihjaGlsZC5jb21wb25lbnQuaXNJbnNpZGUobW91c2VQb3NpdGlvbikgJiYgIWNoaWxkLmNvbXBvbmVudC5oaWRkZW4gJiYgIWNoaWxkLmNvbXBvbmVudC5kaXNhYmxlZCkge1xuICAgICAgICAgIHJlc3VsdC5wdXNoKC4uLnRoaXMuZ2V0Q29tcG9uZW50c0F0UG9zaXRpb24obW91c2VQb3NpdGlvbiwgY2hpbGQuY29tcG9uZW50KSk7XG4gICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH1cblxuICAgIHJldHVybiByZXN1bHQ7XG4gIH1cbn0iLCIvKlxuICogQ29weXJpZ2h0IChDKSAyMDIwIEVsaWFzdGlrIChlbGlhc3Rpa3NvZnRzLmNvbSlcbiAqXG4gKiBUaGlzIGZpbGUgaXMgcGFydCBvZiBcIkpTR2FtZVRvb2xzXCIuXG4gKlxuICogXCJKU0dhbWVUb29sc1wiIGlzIGZyZWUgc29mdHdhcmU6IHlvdSBjYW4gcmVkaXN0cmlidXRlIGl0IGFuZC9vciBtb2RpZnlcbiAqIGl0IHVuZGVyIHRoZSB0ZXJtcyBvZiB0aGUgR05VIEdlbmVyYWwgUHVibGljIExpY2Vuc2UgYXMgcHVibGlzaGVkIGJ5XG4gKiB0aGUgRnJlZSBTb2Z0d2FyZSBGb3VuZGF0aW9uLCBlaXRoZXIgdmVyc2lvbiAzIG9mIHRoZSBMaWNlbnNlLCBvclxuICogKGF0IHlvdXIgb3B0aW9uKSBhbnkgbGF0ZXIgdmVyc2lvbi5cbiAqXG4gKiBcIkpTR2FtZVRvb2xzXCIgaXMgZGlzdHJpYnV0ZWQgaW4gdGhlIGhvcGUgdGhhdCBpdCB3aWxsIGJlIHVzZWZ1bCxcbiAqIGJ1dCBXSVRIT1VUIEFOWSBXQVJSQU5UWTsgd2l0aG91dCBldmVuIHRoZSBpbXBsaWVkIHdhcnJhbnR5IG9mXG4gKiBNRVJDSEFOVEFCSUxJVFkgb3IgRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UuICBTZWUgdGhlXG4gKiBHTlUgR2VuZXJhbCBQdWJsaWMgTGljZW5zZSBmb3IgbW9yZSBkZXRhaWxzLlxuICpcbiAqIFlvdSBzaG91bGQgaGF2ZSByZWNlaXZlZCBhIGNvcHkgb2YgdGhlIEdOVSBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlXG4gKiBhbG9uZyB3aXRoIFwiSlNHYW1lVG9vbHNcIi4gIElmIG5vdCwgc2VlIDxodHRwOi8vd3d3LmdudS5vcmcvbGljZW5zZXMvPi5cbiAqL1xuaW1wb3J0IENvbXBvbmVudCBmcm9tIFwiLi9Db21wb25lbnRcIjtcbmltcG9ydCBDb25zdGFudHMgZnJvbSBcIi4vQ29uc3RhbnRzXCI7XG5pbXBvcnQgVXRpbHMgZnJvbSBcIi4vVXRpbHNcIjtcbmltcG9ydCBTdHlsZSBmcm9tIFwiLi9TdHlsZVwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDaXJjbGUgZXh0ZW5kcyBDb21wb25lbnQge1xuICBzZWxlY3RhYmxlID0gZmFsc2U7XG5cbiAgY29uc3RydWN0b3IoeCwgeSwgd2lkdGgsIHN0eWxlKSB7XG4gICAgc3VwZXIoeCwgeSwgd2lkdGgsIHdpZHRoLCBzdHlsZSk7XG4gIH1cblxuICBkcmF3KGNvbnRleHQpIHtcbiAgICBpZih0aGlzLmhpZGRlbikgcmV0dXJuO1xuICAgIHN1cGVyLmRyYXcoY29udGV4dCk7XG5cbiAgICBjb25zdCBjYW52YXMgPSBjb250ZXh0LmNhbnZhcztcbiAgICBjb25zdCBjdHggPSBjYW52YXMuZ2V0Q29udGV4dChcIjJkXCIpO1xuICAgIFxuICAgIFV0aWxzLmRyYXdDaXJjbGUoY3R4LCB0aGlzLngsIHRoaXMueSwgdGhpcy53aWR0aCwgdGhpcy5zdHlsZS5saW5lV2lkdGgsIHRoaXMuc3R5bGUuY29sb3IsIHRoaXMuc3R5bGUubGluZUNhcCwgdGhpcy5zdHlsZS5maWxsLCB0aGlzLnN0eWxlLmZpbGxDb2xvcik7XG5cbiAgICB0aGlzLmluaXQgPSB0cnVlO1xuICB9XG5cbiAgZ2V0IHdpZHRoKCkge1xuICAgIHJldHVybiBzdXBlci53aWR0aCArIHRoaXMuc3R5bGUubGluZVdpZHRoO1xuICB9XG5cbiAgZ2V0IGhlaWdodCgpIHtcbiAgICByZXR1cm4gc3VwZXIuaGVpZ2h0ICsgdGhpcy5zdHlsZS5saW5lV2lkdGg7XG4gIH1cblxuICBzZXQgd2lkdGgod2lkdGgpIHtcbiAgICBzdXBlci53aWR0aCA9IHdpZHRoO1xuICB9XG5cbiAgc2V0IGhlaWdodChoZWlnaHQpIHtcbiAgICBzdXBlci5oZWlnaHQgPSBoZWlnaHQ7XG4gIH1cblxuICBnZXQgZGVmYXVsdFN0eWxlKCkge1xuICAgIHJldHVybiBuZXcgU3R5bGUoe1xuICAgICAgXCJsaW5lV2lkdGhcIjogQ29uc3RhbnRzLlNldHRpbmcuQ0lSQ0xFX0RFRkFVTFRfTElORV9TSVpFLFxuICAgICAgXCJjb2xvclwiOiBDb25zdGFudHMuU2V0dGluZy5DSVJDTEVfREVGQVVMVF9DT0xPUixcbiAgICAgIFwiZmlsbFwiOiBDb25zdGFudHMuU2V0dGluZy5DSVJDTEVfREVGQVVMVF9GSUxMLFxuICAgICAgXCJsaW5lQ2FwXCI6IENvbnN0YW50cy5TZXR0aW5nLkNJUkNMRV9ERUZBVUxUX0xJTkVfQ0FQLFxuICAgICAgXCJmaWxsQ29sb3JcIjogQ29uc3RhbnRzLlNldHRpbmcuQ0lSQ0xFX0RFRkFVTFRfRklMTF9DT0xPUlxuICAgIH0pO1xuICB9XG59IiwiLypcbiAqIENvcHlyaWdodCAoQykgMjAyMCBFbGlhc3RpayAoZWxpYXN0aWtzb2Z0cy5jb20pXG4gKlxuICogVGhpcyBmaWxlIGlzIHBhcnQgb2YgXCJKU0dhbWVUb29sc1wiLlxuICpcbiAqIFwiSlNHYW1lVG9vbHNcIiBpcyBmcmVlIHNvZnR3YXJlOiB5b3UgY2FuIHJlZGlzdHJpYnV0ZSBpdCBhbmQvb3IgbW9kaWZ5XG4gKiBpdCB1bmRlciB0aGUgdGVybXMgb2YgdGhlIEdOVSBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlIGFzIHB1Ymxpc2hlZCBieVxuICogdGhlIEZyZWUgU29mdHdhcmUgRm91bmRhdGlvbiwgZWl0aGVyIHZlcnNpb24gMyBvZiB0aGUgTGljZW5zZSwgb3JcbiAqIChhdCB5b3VyIG9wdGlvbikgYW55IGxhdGVyIHZlcnNpb24uXG4gKlxuICogXCJKU0dhbWVUb29sc1wiIGlzIGRpc3RyaWJ1dGVkIGluIHRoZSBob3BlIHRoYXQgaXQgd2lsbCBiZSB1c2VmdWwsXG4gKiBidXQgV0lUSE9VVCBBTlkgV0FSUkFOVFk7IHdpdGhvdXQgZXZlbiB0aGUgaW1wbGllZCB3YXJyYW50eSBvZlxuICogTUVSQ0hBTlRBQklMSVRZIG9yIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFLiAgU2VlIHRoZVxuICogR05VIEdlbmVyYWwgUHVibGljIExpY2Vuc2UgZm9yIG1vcmUgZGV0YWlscy5cbiAqXG4gKiBZb3Ugc2hvdWxkIGhhdmUgcmVjZWl2ZWQgYSBjb3B5IG9mIHRoZSBHTlUgR2VuZXJhbCBQdWJsaWMgTGljZW5zZVxuICogYWxvbmcgd2l0aCBcIkpTR2FtZVRvb2xzXCIuICBJZiBub3QsIHNlZSA8aHR0cDovL3d3dy5nbnUub3JnL2xpY2Vuc2VzLz4uXG4gKi9cbmltcG9ydCBDb21wb25lbnQgZnJvbSBcIi4vQ29tcG9uZW50XCI7XG5pbXBvcnQgQ29udGFpbmVyIGZyb20gXCIuL0NvbnRhaW5lclwiO1xuaW1wb3J0IFV0aWxzIGZyb20gXCIuL1V0aWxzXCI7XG5pbXBvcnQgQ29uc3RhbnRzIGZyb20gXCIuL0NvbnN0YW50c1wiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDb2wgZXh0ZW5kcyBDb250YWluZXIge1xuICBzZWxlY3RhYmxlID0gZmFsc2U7XG4gICNfaW5uZXJIZWlnaHQgPSAwO1xuICAjX2lubmVyV2lkdGggPSAwO1xuXG4gIGNvbnN0cnVjdG9yKHgsIHksIG1heFdpZHRoLCBtYXhIZWlnaHQsIHN0eWxlLCAuLi5jb21wb25lbnRzKSB7XG4gICAgc3VwZXIoeCwgeSwgbWF4V2lkdGgsIG1heEhlaWdodCwgc3R5bGUsIC4uLmNvbXBvbmVudHMpO1xuXG4gICAgaWYoIUNvbnN0YW50cy5TZXR0aW5nLkRJU0FCTEVfRVhQRVJJTUVOVEFMX09QVElNSVpBVElPTlMpIHtcbiAgICAgIHRoaXMudXBkYXRlSW5uZXJXaWR0aCgpO1xuICAgICAgdGhpcy51cGRhdGVJbm5lckhlaWdodCgpO1xuICBcbiAgICAgIHRoaXMuYWRkQ2hhbmdlQWN0aW9uKCgpID0+IHtcbiAgICAgICAgdGhpcy51cGRhdGVJbm5lcldpZHRoKCk7XG4gICAgICAgIHRoaXMudXBkYXRlSW5uZXJIZWlnaHQoKTtcbiAgICAgIH0pO1xuICAgIH1cbiAgfVxuXG4gIGRyYXcoY29udGV4dCkge1xuICAgIGlmKHRoaXMuaGlkZGVuKSByZXR1cm47XG4gICAgc3VwZXIuZHJhdyhjb250ZXh0KTtcblxuICAgIGNvbnN0IGNhbnZhcyA9IGNvbnRleHQuY2FudmFzO1xuICAgIGNvbnN0IGN0eCA9IGNhbnZhcy5nZXRDb250ZXh0KFwiMmRcIik7XG4gICAgY3R4LnNhdmUoKTtcblxuICAgIGxldCBjdHhUZW1wID0gY3R4O1xuXG4gICAgaWYodGhpcy5pc0N1dHRpbmcpIHtcbiAgICAgIGN0eFRlbXAgPSB0aGlzLmNhbnZhc1RtcC5nZXRDb250ZXh0KFwiMmRcIik7XG4gICAgICBjdHhUZW1wLnNjYWxlKENvbnN0YW50cy5TZXR0aW5nLlBJWEVMX1JBVElPLCBDb25zdGFudHMuU2V0dGluZy5QSVhFTF9SQVRJTyk7XG4gICAgfVxuICBcbiAgICBpZihzdXBlci5jb21wb25lbnRzICE9IG51bGwpIHtcbiAgICAgIGxldCBjdXJyZW50WSA9IHRoaXMuc3R5bGUucGFkZGluZztcblxuICAgICAgc3VwZXIuY29tcG9uZW50cy5mb3JFYWNoKGNvbXBvbmVudCA9PiB7XG4gICAgICAgIGN1cnJlbnRZID0gdGhpcy5kcmF3Q29tcG9uZW50KGNvbXBvbmVudCwgY3VycmVudFksIGN0eFRlbXApO1xuICAgICAgfSk7XG4gICAgfVxuICAgIFxuICAgIGlmKHRoaXMuaXNDdXR0aW5nKSB7XG4gICAgICBVdGlscy5kcmF3SW1hZ2VEYXRhKGN0eCwgdGhpcy5jYW52YXNUbXAsIHRoaXMueCwgdGhpcy55LCB0aGlzLndpZHRoLCB0aGlzLmhlaWdodCwgdGhpcy54ICogQ29uc3RhbnRzLlNldHRpbmcuUElYRUxfUkFUSU8sIHRoaXMueSAqIENvbnN0YW50cy5TZXR0aW5nLlBJWEVMX1JBVElPLCB0aGlzLndpZHRoICogQ29uc3RhbnRzLlNldHRpbmcuUElYRUxfUkFUSU8sIHRoaXMuaGVpZ2h0ICogQ29uc3RhbnRzLlNldHRpbmcuUElYRUxfUkFUSU8pO1xuICAgIH1cbiAgICBcbiAgICBzdXBlci5kcmF3U2Nyb2xsYmFycyhjdHgpO1xuICAgIFxuICAgIGN0eC5yZXN0b3JlKCk7XG4gIH1cblxuICBkcmF3Q29tcG9uZW50KGNvbXBvbmVudCwgY3VycmVudFksIGN0eCkge1xuICAgIGlmKGNvbXBvbmVudCBpbnN0YW5jZW9mIENvbXBvbmVudCkge1xuICAgICAgY29tcG9uZW50LnggPSB0aGlzLnN0eWxlLnBhZGRpbmcgLSB0aGlzLm9mZnNldFNjcm9sbFg7XG4gICAgICBjb21wb25lbnQueSA9IGN1cnJlbnRZIC0gdGhpcy5vZmZzZXRTY3JvbGxZO1xuICAgICAgXG4gICAgICBpZighY29tcG9uZW50LmhpZGRlbikge1xuICAgICAgICBpZih0aGlzLmlzQ29tcG9uZW50VmlzaWJsZShjb21wb25lbnQpKSB7XG4gICAgICAgICAgY29tcG9uZW50LmRyYXcoY3R4KTtcbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgY3VycmVudFkgKz0gY29tcG9uZW50LmhlaWdodCArIHRoaXMuc3R5bGUuc3BhY2VCZXR3ZWVuQ29tcG9uZW50cztcbiAgICAgIH1cbiAgICB9XG4gICAgXG4gICAgcmV0dXJuIGN1cnJlbnRZO1xuICB9XG5cbiAgdXBkYXRlSW5uZXJIZWlnaHQoKSB7XG4gICAgbGV0IHRvdGFsSGVpZ2h0ID0gMDtcbiAgICBzdXBlci5jb21wb25lbnRzLmZvckVhY2goY29tcG9uZW50ID0+IHsgaWYoIWNvbXBvbmVudC5oaWRkZW4pIHRvdGFsSGVpZ2h0ICs9IGNvbXBvbmVudC5oZWlnaHQgfSk7XG4gICAgdGhpcy4jX2lubmVySGVpZ2h0ID0gdG90YWxIZWlnaHQgKyB0aGlzLnN0eWxlLnNwYWNlQmV0d2VlbkNvbXBvbmVudHMgKiAoc3VwZXIuY29tcG9uZW50cy5sZW5ndGggLSAxKSArIHRoaXMuc3R5bGUucGFkZGluZztcbiAgfVxuXG4gIHVwZGF0ZUlubmVyV2lkdGgoKSB7XG4gICAgbGV0IG1heFdpZHRoID0gMDtcbiAgICBzdXBlci5jb21wb25lbnRzLmZvckVhY2goY29tcG9uZW50ID0+IHsgaWYoY29tcG9uZW50LndpZHRoID4gbWF4V2lkdGggJiYgIWNvbXBvbmVudC5oaWRkZW4pIG1heFdpZHRoID0gY29tcG9uZW50LndpZHRoOyB9KTtcbiAgICB0aGlzLiNfaW5uZXJXaWR0aCA9IG1heFdpZHRoICsgdGhpcy5zdHlsZS5wYWRkaW5nO1xuICB9XG5cbiAgZ2V0IGlubmVySGVpZ2h0KCkge1xuICAgIGlmKENvbnN0YW50cy5TZXR0aW5nLkRJU0FCTEVfRVhQRVJJTUVOVEFMX09QVElNSVpBVElPTlMpIHRoaXMudXBkYXRlSW5uZXJIZWlnaHQoKTtcbiAgICByZXR1cm4gdGhpcy4jX2lubmVySGVpZ2h0O1xuICB9XG5cbiAgZ2V0IGlubmVyV2lkdGgoKSB7XG4gICAgaWYoQ29uc3RhbnRzLlNldHRpbmcuRElTQUJMRV9FWFBFUklNRU5UQUxfT1BUSU1JWkFUSU9OUykgdGhpcy51cGRhdGVJbm5lcldpZHRoKCk7XG4gICAgcmV0dXJuIHRoaXMuI19pbm5lcldpZHRoO1xuICB9XG5cbiAgZ2V0IHdpZHRoKCkge1xuICAgIGNvbnN0IHdpZHRoID0gdGhpcy5pbm5lcldpZHRoIHx8ICh0aGlzLnBhcmVudCAmJiB0aGlzLnBhcmVudC53aWR0aCk7XG4gICAgY29uc3QgbWluID0gdGhpcy5tYXhXaWR0aCA/IE1hdGgubWluKHRoaXMubWF4V2lkdGgsIHdpZHRoKSA6IG51bGw7XG4gICAgcmV0dXJuIHRoaXMubWluV2lkdGggPyBNYXRoLm1heCh0aGlzLm1pbldpZHRoLCBtaW4gfHwgd2lkdGgpIDogbWluIHx8IHdpZHRoO1xuICB9XG5cbiAgZ2V0IGhlaWdodCgpIHtcbiAgICBjb25zdCBoZWlnaHQgPSB0aGlzLmlubmVySGVpZ2h0IHx8ICh0aGlzLnBhcmVudCAmJiB0aGlzLnBhcmVudC5oZWlnaHQpO1xuICAgIGNvbnN0IG1pbiA9IHRoaXMubWF4SGVpZ2h0ID8gTWF0aC5taW4odGhpcy5tYXhIZWlnaHQsIGhlaWdodCkgOiBudWxsO1xuICAgIHJldHVybiB0aGlzLm1pbkhlaWdodCA/IE1hdGgubWF4KHRoaXMubWluSGVpZ2h0LCBtaW4gfHwgaGVpZ2h0KSA6IG1pbiB8fCBoZWlnaHQ7XG4gIH1cblxuICBnZXQgZGVmYXVsdFN0eWxlKCkge1xuICAgIHJldHVybiBzdXBlci5kZWZhdWx0U3R5bGU7XG4gIH1cbn0iLCIvKlxuICogQ29weXJpZ2h0IChDKSAyMDIwIEVsaWFzdGlrIChlbGlhc3Rpa3NvZnRzLmNvbSlcbiAqXG4gKiBUaGlzIGZpbGUgaXMgcGFydCBvZiBcIkpTR2FtZVRvb2xzXCIuXG4gKlxuICogXCJKU0dhbWVUb29sc1wiIGlzIGZyZWUgc29mdHdhcmU6IHlvdSBjYW4gcmVkaXN0cmlidXRlIGl0IGFuZC9vciBtb2RpZnlcbiAqIGl0IHVuZGVyIHRoZSB0ZXJtcyBvZiB0aGUgR05VIEdlbmVyYWwgUHVibGljIExpY2Vuc2UgYXMgcHVibGlzaGVkIGJ5XG4gKiB0aGUgRnJlZSBTb2Z0d2FyZSBGb3VuZGF0aW9uLCBlaXRoZXIgdmVyc2lvbiAzIG9mIHRoZSBMaWNlbnNlLCBvclxuICogKGF0IHlvdXIgb3B0aW9uKSBhbnkgbGF0ZXIgdmVyc2lvbi5cbiAqXG4gKiBcIkpTR2FtZVRvb2xzXCIgaXMgZGlzdHJpYnV0ZWQgaW4gdGhlIGhvcGUgdGhhdCBpdCB3aWxsIGJlIHVzZWZ1bCxcbiAqIGJ1dCBXSVRIT1VUIEFOWSBXQVJSQU5UWTsgd2l0aG91dCBldmVuIHRoZSBpbXBsaWVkIHdhcnJhbnR5IG9mXG4gKiBNRVJDSEFOVEFCSUxJVFkgb3IgRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UuICBTZWUgdGhlXG4gKiBHTlUgR2VuZXJhbCBQdWJsaWMgTGljZW5zZSBmb3IgbW9yZSBkZXRhaWxzLlxuICpcbiAqIFlvdSBzaG91bGQgaGF2ZSByZWNlaXZlZCBhIGNvcHkgb2YgdGhlIEdOVSBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlXG4gKiBhbG9uZyB3aXRoIFwiSlNHYW1lVG9vbHNcIi4gIElmIG5vdCwgc2VlIDxodHRwOi8vd3d3LmdudS5vcmcvbGljZW5zZXMvPi5cbiAqL1xuaW1wb3J0IENvbnN0YW50cyBmcm9tIFwiLi9Db25zdGFudHNcIjtcbmltcG9ydCBTdHlsZSBmcm9tIFwiLi9TdHlsZVwiO1xuaW1wb3J0IFJlYWN0b3IgZnJvbSBcIi4vUmVhY3RvclwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDb21wb25lbnQge1xuICBzZWxlY3RhYmxlID0gdHJ1ZTtcbiAgI193aWR0aCA9IDA7XG4gICNfaGVpZ2h0ID0gMDtcbiAgI194ID0gMDtcbiAgI195ID0gMDtcbiAgI19kaXNhYmxlZCA9IGZhbHNlO1xuICAjX3NlbGVjdGVkID0gZmFsc2U7XG4gICNfc3R5bGU7XG5cbiAgY29uc3RydWN0b3IoeCwgeSwgd2lkdGgsIGhlaWdodCwgc3R5bGUpIHtcbiAgICB0aGlzLiNfeCA9IHggfHwgMDtcbiAgICB0aGlzLiNfeSA9IHkgfHwgMDtcbiAgICB0aGlzLiNfd2lkdGggPSB3aWR0aDtcbiAgICB0aGlzLiNfaGVpZ2h0ID0gaGVpZ2h0O1xuICAgIHRoaXMuY2FudmFzO1xuICAgIHRoaXMucGFyZW50O1xuXG4gICAgLy8gU3R5bGVcbiAgICB0aGlzLnN0eWxlID0gc3R5bGU7XG4gICAgXG4gICAgLy8gRnVuY3Rpb25zIHRyaWdnZXJlZCBieSBldmVudHNcbiAgICB0aGlzLnJlYWN0b3IgPSBuZXcgUmVhY3RvcigpO1xuICAgIHRoaXMucmVhY3Rvci5yZWdpc3RlckV2ZW50KFwib25DbGlja1wiKTtcbiAgICB0aGlzLnJlYWN0b3IucmVnaXN0ZXJFdmVudChcIm9uSG92ZXJcIik7XG4gICAgdGhpcy5yZWFjdG9yLnJlZ2lzdGVyRXZlbnQoXCJvbkRvd25cIik7XG4gICAgdGhpcy5yZWFjdG9yLnJlZ2lzdGVyRXZlbnQoXCJvblNjcm9sbFwiKTtcbiAgICB0aGlzLnJlYWN0b3IucmVnaXN0ZXJFdmVudChcIm9uTW92ZVwiKTtcbiAgICB0aGlzLnJlYWN0b3IucmVnaXN0ZXJFdmVudChcIm9uVXBcIik7XG4gICAgdGhpcy5yZWFjdG9yLnJlZ2lzdGVyRXZlbnQoXCJvbkNoYW5nZVwiKTtcblxuICAgIC8vIFN0YXRlXG4gICAgdGhpcy5pbml0ID0gZmFsc2U7XG4gICAgdGhpcy5oYXNJbml0RXZlbnRzID0gZmFsc2U7XG4gICAgdGhpcy4jX3NlbGVjdGVkID0gZmFsc2U7XG4gICAgdGhpcy5jbGlja2VkID0gZmFsc2U7XG4gICAgdGhpcy5ob3ZlcmVkID0gZmFsc2U7XG4gICAgdGhpcy4jX2Rpc2FibGVkID0gZmFsc2U7XG5cbiAgICAvLyBTY3JvbGwgc3RhdGVcbiAgICB0aGlzLm9mZnNldFNjcm9sbFggPSAwO1xuICAgIHRoaXMub2Zmc2V0U2Nyb2xsWSA9IDA7XG5cbiAgICAvLyBNb3ZlIGV2ZW50XG4gICAgdGhpcy5vZmZzZXRNb3ZlWCA9IDA7XG4gICAgdGhpcy5vZmZzZXRNb3ZlWSA9IDA7XG4gICAgdGhpcy5tb3ZlRXZlbnRTdGFydFggPSAwO1xuICAgIHRoaXMubW92ZUV2ZW50U3RhcnRZID0gMDtcblxuICAgIC8vIFRvdWNoIGV2ZW50c1xuICAgIHRoaXMudG91Y2hFdmVudFN0YXJ0WCA9IDA7XG4gICAgdGhpcy50b3VjaEV2ZW50U3RhcnRZID0gMDtcbiAgICB0aGlzLnRvdWNoRXZlbnRTdGFydFRpbWVzdGFtcCA9IDA7XG5cbiAgICB0aGlzLnRvb2x0aXA7XG4gICAgdGhpcy5pbml0RXZlbnRzKCk7XG4gIH1cblxuICBpbml0RXZlbnRzKCkge1xuICAgIGlmKCF0aGlzLmhhc0luaXRFdmVudHMgJiYgdGhpcy5jYW52YXMgIT0gbnVsbCkge1xuICAgICAgdGhpcy5jYW52YXMuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlbW92ZVwiLCB0aGlzLCAoZXZlbnQsIHJlc3VsdCkgPT4ge1xuICAgICAgICBpZighdGhpcy5kaXNhYmxlZCkge1xuICAgICAgICAgIGNvbnN0IG1vdXNlUG9zaXRpb24gPSB0aGlzLmdldE1vdXNlUG9zKGV2ZW50KTtcblxuICAgICAgICAgIGlmKHRoaXMuY2xpY2tlZCkge1xuICAgICAgICAgICAgY29uc3QgZGVsdGFYID0gLWV2ZW50Lm1vdmVtZW50WDtcbiAgICAgICAgICAgIGNvbnN0IGRlbHRhWSA9IC1ldmVudC5tb3ZlbWVudFk7XG5cbiAgICAgICAgICAgIHRoaXMub2Zmc2V0TW92ZVggKz0gZGVsdGFYO1xuICAgICAgICAgICAgdGhpcy5vZmZzZXRNb3ZlWSArPSBkZWx0YVk7XG5cbiAgICAgICAgICAgIGlmKHRoaXMucmVhY3Rvcikge1xuICAgICAgICAgICAgICB0aGlzLnJlYWN0b3IuZGlzcGF0Y2hFdmVudChcIm9uTW92ZVwiLCBkZWx0YVgsIGRlbHRhWSwgbW91c2VQb3NpdGlvbik7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIHRoaXMubW92ZUV2ZW50U3RhcnRYID0gbW91c2VQb3NpdGlvbi54O1xuICAgICAgICAgICAgdGhpcy5tb3ZlRXZlbnRTdGFydFkgPSBtb3VzZVBvc2l0aW9uLnk7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgaWYocmVzdWx0KSB7XG4gICAgICAgICAgICBpZih0aGlzLnJlYWN0b3IgJiYgIXRoaXMuZGlzYWJsZWQpIHtcbiAgICAgICAgICAgICAgdGhpcy5yZWFjdG9yLmRpc3BhdGNoRXZlbnQoXCJvbkhvdmVyXCIsIG1vdXNlUG9zaXRpb24pO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZih0aGlzLnRvb2x0aXApIHtcbiAgICAgICAgICAgICAgdGhpcy50b29sdGlwLnggPSBtb3VzZVBvc2l0aW9uLnggKyAxMDtcbiAgICAgICAgICAgICAgdGhpcy50b29sdGlwLnkgPSBtb3VzZVBvc2l0aW9uLnkgKyAxMDtcbiAgICAgICAgICAgICAgdGhpcy50b29sdGlwLmVuYWJsZSgpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgXG4gICAgICAgICAgICB0aGlzLmhvdmVyZWQgPSB0cnVlO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLmhvdmVyZWQgPSBmYWxzZTtcbiAgICAgICAgICAgIGlmKHRoaXMudG9vbHRpcCkgdGhpcy50b29sdGlwLmRpc2FibGUoKVxuICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB0aGlzLmhvdmVyZWQgPSBmYWxzZTtcbiAgICAgICAgICB0aGlzLmNsaWNrZWQgPSBmYWxzZTtcbiAgICAgICAgICBpZih0aGlzLnRvb2x0aXApIHRoaXMudG9vbHRpcC5kaXNhYmxlKCk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgICAgXG4gICAgICB0aGlzLmNhbnZhcy5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgdGhpcywgKGV2ZW50LCByZXN1bHQpID0+IHtcbiAgICAgICAgaWYoIXRoaXMuZGlzYWJsZWQpIHtcbiAgICAgICAgICBjb25zdCBtb3VzZVBvc2l0aW9uID0gdGhpcy5nZXRNb3VzZVBvcyhldmVudCk7XG5cbiAgICAgICAgICBpZihyZXN1bHQgJiYgdGhpcy5ob3ZlcmVkKSB7XG4gICAgICAgICAgICBpZih0aGlzLnJlYWN0b3IpIHtcbiAgICAgICAgICAgICAgdGhpcy5yZWFjdG9yLmRpc3BhdGNoRXZlbnQoXCJvbkNsaWNrXCIsIG1vdXNlUG9zaXRpb24pO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB0aGlzLnNlbGVjdGVkID0gdHJ1ZTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5jbGlja2VkID0gZmFsc2U7XG4gICAgICAgICAgICB0aGlzLnNlbGVjdGVkID0gZmFsc2U7XG4gICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHRoaXMuaG92ZXJlZCA9IGZhbHNlO1xuICAgICAgICAgIHRoaXMuY2xpY2tlZCA9IGZhbHNlO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICAgIFxuICAgICAgdGhpcy5jYW52YXMuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlZG93blwiLCB0aGlzLCAoZXZlbnQsIHJlc3VsdCkgPT4ge1xuICAgICAgICBpZighdGhpcy5kaXNhYmxlZCkge1xuICAgICAgICAgIGNvbnN0IG1vdXNlUG9zaXRpb24gPSB0aGlzLmdldE1vdXNlUG9zKGV2ZW50KTtcblxuICAgICAgICAgIGlmKHJlc3VsdCkge1xuICAgICAgICAgICAgaWYodGhpcy5yZWFjdG9yKSB7XG4gICAgICAgICAgICAgIHRoaXMucmVhY3Rvci5kaXNwYXRjaEV2ZW50KFwib25Eb3duXCIsIG1vdXNlUG9zaXRpb24pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgXG4gICAgICAgICAgICB0aGlzLmNsaWNrZWQgPSB0cnVlO1xuICAgICAgICAgICAgdGhpcy5tb3ZlRXZlbnRTdGFydFggPSBtb3VzZVBvc2l0aW9uLng7XG4gICAgICAgICAgICB0aGlzLm1vdmVFdmVudFN0YXJ0WSA9IG1vdXNlUG9zaXRpb24ueTtcbiAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdGhpcy5ob3ZlcmVkID0gZmFsc2U7XG4gICAgICAgICAgdGhpcy5jbGlja2VkID0gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgICAgXG4gICAgICB0aGlzLmNhbnZhcy5hZGRFdmVudExpc3RlbmVyKFwibW91c2V1cFwiLCB0aGlzLCAoZXZlbnQpID0+IHtcbiAgICAgICAgaWYoIXRoaXMuZGlzYWJsZWQpIHtcbiAgICAgICAgICBjb25zdCBtb3VzZVBvc2l0aW9uID0gdGhpcy5nZXRNb3VzZVBvcyhldmVudCk7XG5cbiAgICAgICAgICBpZih0aGlzLnJlYWN0b3IpIHtcbiAgICAgICAgICAgIHRoaXMucmVhY3Rvci5kaXNwYXRjaEV2ZW50KFwib25VcFwiLCBtb3VzZVBvc2l0aW9uKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgXG4gICAgICAgICAgdGhpcy5jbGlja2VkID0gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuXG4gICAgICB0aGlzLmNhbnZhcy5hZGRFdmVudExpc3RlbmVyKFwid2hlZWxcIiwgdGhpcywgKGV2ZW50KSA9PiB7XG4gICAgICAgIGlmKHRoaXMuaG92ZXJlZCAmJiAhdGhpcy5kaXNhYmxlZCAmJiAhdGhpcy5zY3JvbGxEaXNhYmxlZCkge1xuICAgICAgICAgIHRoaXMub2Zmc2V0U2Nyb2xsWCArPSBldmVudC5kZWx0YVg7XG4gICAgICAgICAgdGhpcy5vZmZzZXRTY3JvbGxZICs9IGV2ZW50LmRlbHRhWTtcblxuICAgICAgICAgIGlmKHRoaXMucmVhY3Rvcikge1xuICAgICAgICAgICAgdGhpcy5yZWFjdG9yLmRpc3BhdGNoRXZlbnQoXCJvblNjcm9sbFwiLCBldmVudC5kZWx0YVgsIGV2ZW50LmRlbHRhWSk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9KTtcblxuICAgICAgY29uc3QgdG91Y2hTY3JvbGxFdmVudCA9IChldmVudCkgPT4ge1xuICAgICAgICBjb25zdCBjaGFuZ2VkVG91Y2hlcyA9IGV2ZW50LmNoYW5nZWRUb3VjaGVzWzBdO1xuICAgICAgICBjb25zdCBwb3NpdGlvbiA9IHRoaXMuZ2V0TW91c2VQb3MoY2hhbmdlZFRvdWNoZXMpO1xuXG4gICAgICAgIGlmKHRoaXMuaG92ZXJlZCAmJiAhdGhpcy5kaXNhYmxlZCAmJiAhdGhpcy5zY3JvbGxEaXNhYmxlZCkge1xuICAgICAgICAgIGNvbnN0IGRlbHRhWCA9IHRoaXMudG91Y2hFdmVudFN0YXJ0WCAtIHBvc2l0aW9uLng7XG4gICAgICAgICAgY29uc3QgZGVsdGFZID0gdGhpcy50b3VjaEV2ZW50U3RhcnRZIC0gcG9zaXRpb24ueTtcblxuICAgICAgICAgIHRoaXMub2Zmc2V0U2Nyb2xsWCArPSBkZWx0YVg7XG4gICAgICAgICAgdGhpcy5vZmZzZXRTY3JvbGxZICs9IGRlbHRhWTtcblxuICAgICAgICAgIGlmKHRoaXMucmVhY3Rvcikge1xuICAgICAgICAgICAgdGhpcy5yZWFjdG9yLmRpc3BhdGNoRXZlbnQoXCJvblNjcm9sbFwiLCBkZWx0YVgsIGRlbHRhWSwgcG9zaXRpb24pO1xuICAgICAgICAgIH1cbiAgICAgICAgICBcbiAgICAgICAgICB0aGlzLnRvdWNoRXZlbnRTdGFydFggPSBwb3NpdGlvbi54O1xuICAgICAgICAgIHRoaXMudG91Y2hFdmVudFN0YXJ0WSA9IHBvc2l0aW9uLnk7XG4gICAgICAgIH1cbiAgICAgIH07XG5cbiAgICAgIGNvbnN0IHRvdWNoU3RhcnRFbmRFdmVudCA9IChldmVudCwgcmVzdWx0KSA9PiB7XG4gICAgICAgIGNvbnN0IGNoYW5nZWRUb3VjaGVzID0gZXZlbnQuY2hhbmdlZFRvdWNoZXNbMF07XG4gICAgICAgIGNvbnN0IHBvc2l0aW9uID0gdGhpcy5nZXRNb3VzZVBvcyhjaGFuZ2VkVG91Y2hlcyk7XG4gICAgICAgIFxuICAgICAgICBpZihyZXN1bHQpIHtcbiAgICAgICAgICB0aGlzLmhvdmVyZWQgPSB0cnVlO1xuICAgICAgICAgIHRoaXMuc2VsZWN0ZWQgPSB0cnVlO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHRoaXMuaG92ZXJlZCA9IGZhbHNlO1xuICAgICAgICAgIHRoaXMuc2VsZWN0ZWQgPSBmYWxzZTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmKHRoaXMuaG92ZXJlZCAmJiAhdGhpcy5kaXNhYmxlZCkge1xuICAgICAgICAgIHRoaXMudG91Y2hFdmVudFN0YXJ0WCA9IHBvc2l0aW9uLng7XG4gICAgICAgICAgdGhpcy50b3VjaEV2ZW50U3RhcnRZID0gcG9zaXRpb24ueTtcbiAgICAgICAgICB0aGlzLnRvdWNoRXZlbnRTdGFydFRpbWVzdGFtcCA9IGV2ZW50LnRpbWVzdGFtcDtcbiAgICAgICAgfVxuICAgICAgfTtcblxuICAgICAgdGhpcy5jYW52YXMuYWRkRXZlbnRMaXN0ZW5lcihcInRvdWNoc3RhcnRcIiwgdGhpcywgdG91Y2hTdGFydEVuZEV2ZW50KTtcbiAgICAgIHRoaXMuY2FudmFzLmFkZEV2ZW50TGlzdGVuZXIoXCJ0b3VjaGVuZFwiLCB0aGlzLCB0b3VjaFN0YXJ0RW5kRXZlbnQpO1xuXG4gICAgICB0aGlzLmNhbnZhcy5hZGRFdmVudExpc3RlbmVyKFwidG91Y2htb3ZlXCIsIHRoaXMsIChldmVudCkgPT4ge1xuICAgICAgICB0b3VjaFNjcm9sbEV2ZW50KGV2ZW50KTtcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgIH0pO1xuXG4gICAgICB0aGlzLmhhc0luaXRFdmVudHMgPSB0cnVlO1xuICAgIH1cbiAgfVxuXG4gIGRyYXcoY29udGV4dCkge1xuICAgIGlmKHRoaXMuaGlkZGVuKSByZXR1cm47XG4gICAgdGhpcy5pbml0RXZlbnRzKCk7XG5cbiAgICBpZih0aGlzLmRpc2FibGVkKSB7XG4gICAgICB0aGlzLnNlbGVjdGVkID0gZmFsc2U7XG4gICAgICB0aGlzLmNsaWNrZWQgPSBmYWxzZTtcbiAgICAgIHRoaXMuaG92ZXJlZCA9IGZhbHNlO1xuICAgICAgaWYodGhpcy50b29sdGlwKSB0aGlzLnRvb2x0aXAuZGlzYWJsZWQgPSB0cnVlO1xuICAgIH1cbiAgfVxuICBcbiAgZ2V0TW91c2VQb3MoZXZlbnQpIHtcbiAgICByZXR1cm4gdGhpcy5jYW52YXMuZ2V0TW91c2VQb3MoZXZlbnQpO1xuICB9XG4gIFxuICBpc0luc2lkZShwb3MpIHtcbiAgICByZXR1cm4gcG9zLnggPiB0aGlzLnggJiYgcG9zLnggPCB0aGlzLnggKyB0aGlzLndpZHRoICYmIHBvcy55IDwgdGhpcy55ICsgdGhpcy5oZWlnaHQgJiYgcG9zLnkgPiB0aGlzLnk7XG4gIH1cbiAgXG4gIGRpc2FibGUoKSB7XG4gICAgdGhpcy5kaXNhYmxlZCA9IHRydWU7XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cbiAgXG4gIGVuYWJsZSgpIHtcbiAgICB0aGlzLmRpc2FibGVkID0gZmFsc2U7XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cblxuICBnZXQgZGlzYWJsZWQoKSB7XG4gICAgcmV0dXJuIHRoaXMuI19kaXNhYmxlZCB8fCAodGhpcy5wYXJlbnQgJiYgdGhpcy5wYXJlbnQuZGlzYWJsZWQpO1xuICB9XG5cbiAgc2V0IGRpc2FibGVkKGRpc2FibGVkKSB7XG4gICAgaWYoZGlzYWJsZWQgIT0gdGhpcy4jX2Rpc2FibGVkKSB7XG4gICAgICB0aGlzLiNfZGlzYWJsZWQgPSBkaXNhYmxlZDtcbiAgICAgIHRoaXMucmVhY3RvciAmJiB0aGlzLnJlYWN0b3IuZGlzcGF0Y2hFdmVudChcIm9uQ2hhbmdlXCIsIHRoaXMpO1xuICAgIH1cbiAgfVxuXG4gIHNldENsaWNrQWN0aW9uKHRyaWdnZXIpIHtcbiAgICB0aGlzLnJlbW92ZUFsbENsaWNrQWN0aW9ucygpO1xuICAgIHRoaXMuYWRkQ2xpY2tBY3Rpb24odHJpZ2dlcik7XG4gIH1cbiAgXG4gIGFkZENsaWNrQWN0aW9uKHRyaWdnZXIpIHtcbiAgICB0aGlzLnJlYWN0b3IuYWRkRXZlbnRMaXN0ZW5lcihcIm9uQ2xpY2tcIiwgdHJpZ2dlcik7XG4gIH1cbiAgXG4gIHJlbW92ZUNsaWNrQWN0aW9uKHRyaWdnZXIpIHtcbiAgICB0aGlzLnJlYWN0b3IucmVtb3ZlRXZlbnRMaXN0ZW5lcihcIm9uQ2xpY2tcIiwgdHJpZ2dlcik7XG4gIH1cblxuICByZW1vdmVBbGxDbGlja0FjdGlvbnMoKSB7XG4gICAgdGhpcy5yZWFjdG9yLnJlbW92ZUFsbEV2ZW50TGlzdGVuZXIoXCJvbkNsaWNrXCIpO1xuICB9XG5cbiAgc2V0SG92ZXJBY3Rpb24odHJpZ2dlcikge1xuICAgIHRoaXMucmVtb3ZlQWxsSG92ZXJBY3Rpb25zKCk7XG4gICAgdGhpcy5hZGRIb3ZlckFjdGlvbih0cmlnZ2VyKTtcbiAgfVxuICBcbiAgYWRkSG92ZXJBY3Rpb24odHJpZ2dlcikge1xuICAgIHRoaXMucmVhY3Rvci5hZGRFdmVudExpc3RlbmVyKFwib25Ib3ZlclwiLCB0cmlnZ2VyKTtcbiAgfVxuICBcbiAgcmVtb3ZlSG92ZXJBY3Rpb24odHJpZ2dlcikge1xuICAgIHRoaXMucmVhY3Rvci5yZW1vdmVFdmVudExpc3RlbmVyKFwib25Ib3ZlclwiLCB0cmlnZ2VyKTtcbiAgfVxuXG4gIHJlbW92ZUFsbEhvdmVyQWN0aW9ucygpIHtcbiAgICB0aGlzLnJlYWN0b3IucmVtb3ZlQWxsRXZlbnRMaXN0ZW5lcihcIm9uSG92ZXJcIik7XG4gIH1cblxuICBzZXREb3duQWN0aW9uKHRyaWdnZXIpIHtcbiAgICB0aGlzLnJlbW92ZUFsbERvd25BY3Rpb25zKCk7XG4gICAgdGhpcy5hZGREb3duQWN0aW9uKHRyaWdnZXIpO1xuICB9XG4gIFxuICBhZGREb3duQWN0aW9uKHRyaWdnZXIpIHtcbiAgICB0aGlzLnJlYWN0b3IuYWRkRXZlbnRMaXN0ZW5lcihcIm9uRG93blwiLCB0cmlnZ2VyKTtcbiAgfVxuICBcbiAgcmVtb3ZlRG93bkFjdGlvbih0cmlnZ2VyKSB7XG4gICAgdGhpcy5yZWFjdG9yLnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJvbkRvd25cIiwgdHJpZ2dlcik7XG4gIH1cblxuICByZW1vdmVBbGxEb3duQWN0aW9ucygpIHtcbiAgICB0aGlzLnJlYWN0b3IucmVtb3ZlQWxsRXZlbnRMaXN0ZW5lcihcIm9uRG93blwiKTtcbiAgfVxuXG4gIHNldFNjcm9sbEFjdGlvbih0cmlnZ2VyKSB7XG4gICAgdGhpcy5yZW1vdmVBbGxTY3JvbGxBY3Rpb25zKCk7XG4gICAgdGhpcy5hZGRTY3JvbGxBY3Rpb24odHJpZ2dlcik7XG4gIH1cbiAgXG4gIGFkZFNjcm9sbEFjdGlvbih0cmlnZ2VyKSB7XG4gICAgdGhpcy5yZWFjdG9yLmFkZEV2ZW50TGlzdGVuZXIoXCJvblNjcm9sbFwiLCB0cmlnZ2VyKTtcbiAgfVxuICBcbiAgcmVtb3ZlU2Nyb2xsQWN0aW9uKHRyaWdnZXIpIHtcbiAgICB0aGlzLnJlYWN0b3IucmVtb3ZlRXZlbnRMaXN0ZW5lcihcIm9uU2Nyb2xsXCIsIHRyaWdnZXIpO1xuICB9XG5cbiAgcmVtb3ZlQWxsU2Nyb2xsQWN0aW9ucygpIHtcbiAgICB0aGlzLnJlYWN0b3IucmVtb3ZlQWxsRXZlbnRMaXN0ZW5lcihcIm9uU2Nyb2xsXCIpO1xuICB9XG5cbiAgc2V0TW92ZUFjdGlvbih0cmlnZ2VyKSB7XG4gICAgdGhpcy5yZW1vdmVBbGxNb3ZlQWN0aW9ucygpO1xuICAgIHRoaXMuYWRkTW92ZUFjdGlvbih0cmlnZ2VyKTtcbiAgfVxuICBcbiAgYWRkTW92ZUFjdGlvbih0cmlnZ2VyKSB7XG4gICAgdGhpcy5yZWFjdG9yLmFkZEV2ZW50TGlzdGVuZXIoXCJvbk1vdmVcIiwgdHJpZ2dlcik7XG4gIH1cbiAgXG4gIHJlbW92ZU1vdmVBY3Rpb24odHJpZ2dlcikge1xuICAgIHRoaXMucmVhY3Rvci5yZW1vdmVFdmVudExpc3RlbmVyKFwib25Nb3ZlXCIsIHRyaWdnZXIpO1xuICB9XG5cbiAgcmVtb3ZlQWxsTW92ZUFjdGlvbnMoKSB7XG4gICAgdGhpcy5yZWFjdG9yLnJlbW92ZUFsbEV2ZW50TGlzdGVuZXIoXCJvbk1vdmVcIik7XG4gIH1cbiAgXG4gIHNldENoYW5nZUFjdGlvbih0cmlnZ2VyKSB7XG4gICAgdGhpcy5yZW1vdmVBbGxDaGFuZ2VBY3Rpb25zKCk7XG4gICAgdGhpcy5hZGRDaGFuZ2VBY3Rpb24odHJpZ2dlcik7XG4gIH1cbiAgXG4gIGFkZENoYW5nZUFjdGlvbih0cmlnZ2VyKSB7XG4gICAgdGhpcy5yZWFjdG9yLmFkZEV2ZW50TGlzdGVuZXIoXCJvbkNoYW5nZVwiLCB0cmlnZ2VyKTtcbiAgfVxuICBcbiAgcmVtb3ZlQ2hhbmdlQWN0aW9uKHRyaWdnZXIpIHtcbiAgICB0aGlzLnJlYWN0b3IucmVtb3ZlRXZlbnRMaXN0ZW5lcihcIm9uQ2hhbmdlXCIsIHRyaWdnZXIpO1xuICB9XG5cbiAgcmVtb3ZlQWxsQ2hhbmdlQWN0aW9ucygpIHtcbiAgICB0aGlzLnJlYWN0b3IucmVtb3ZlQWxsRXZlbnRMaXN0ZW5lcihcIm9uQ2hhbmdlXCIpO1xuICB9XG5cbiAgc2V0VXBBY3Rpb24odHJpZ2dlcikge1xuICAgIHRoaXMucmVtb3ZlQWxsVXBBY3Rpb25zKCk7XG4gICAgdGhpcy5hZGRVcEFjdGlvbih0cmlnZ2VyKTtcbiAgfVxuICBcbiAgYWRkVXBBY3Rpb24odHJpZ2dlcikge1xuICAgIHRoaXMucmVhY3Rvci5hZGRFdmVudExpc3RlbmVyKFwib25VcFwiLCB0cmlnZ2VyKTtcbiAgfVxuICBcbiAgcmVtb3ZlVXBBY3Rpb24odHJpZ2dlcikge1xuICAgIHRoaXMucmVhY3Rvci5yZW1vdmVFdmVudExpc3RlbmVyKFwib25VcFwiLCB0cmlnZ2VyKTtcbiAgfVxuXG4gIHJlbW92ZUFsbFVwQWN0aW9ucygpIHtcbiAgICB0aGlzLnJlYWN0b3IucmVtb3ZlQWxsRXZlbnRMaXN0ZW5lcihcIm9uVXBcIik7XG4gIH1cblxuICBnZXQgaGVpZ2h0KCkge1xuICAgIHJldHVybiB0aGlzLiNfaGVpZ2h0O1xuICB9XG5cbiAgZ2V0IHdpZHRoKCkge1xuICAgIHJldHVybiB0aGlzLiNfd2lkdGg7XG4gIH1cblxuICBzZXQgd2lkdGgod2lkdGgpIHtcbiAgICBpZih3aWR0aCAhPSB0aGlzLiNfd2lkdGgpIHtcbiAgICAgIHRoaXMuI193aWR0aCA9IHdpZHRoO1xuICAgICAgdGhpcy5yZWFjdG9yICYmIHRoaXMucmVhY3Rvci5kaXNwYXRjaEV2ZW50KFwib25DaGFuZ2VcIiwgdGhpcyk7XG4gICAgfVxuICB9XG5cbiAgc2V0IGhlaWdodChoZWlnaHQpIHtcbiAgICBpZihoZWlnaHQgIT0gdGhpcy4jX2hlaWdodCkge1xuICAgICAgdGhpcy4jX2hlaWdodCA9IGhlaWdodDtcbiAgICAgIHRoaXMucmVhY3RvciAmJiB0aGlzLnJlYWN0b3IuZGlzcGF0Y2hFdmVudChcIm9uQ2hhbmdlXCIsIHRoaXMpO1xuICAgIH1cbiAgfVxuXG4gIGdldCBtYXhXaWR0aCgpIHtcbiAgICByZXR1cm4gdGhpcy53aWR0aDtcbiAgfVxuXG4gIGdldCBtYXhIZWlnaHQoKSB7XG4gICAgcmV0dXJuIHRoaXMuaGVpZ2h0O1xuICB9XG5cbiAgZ2V0IGlubmVyV2lkdGgoKSB7XG4gICAgcmV0dXJuIHRoaXMud2lkdGg7XG4gIH1cblxuICBnZXQgaW5uZXJIZWlnaHQoKSB7XG4gICAgcmV0dXJuIHRoaXMuaGVpZ2h0O1xuICB9XG5cbiAgZ2V0IG1pbldpZHRoKCkge1xuICAgIHJldHVybiB0aGlzLndpZHRoO1xuICB9XG5cbiAgZ2V0IG1pbkhlaWdodCgpIHtcbiAgICByZXR1cm4gdGhpcy5oZWlnaHQ7XG4gIH1cblxuICBnZXQgeCgpIHtcbiAgICBjb25zdCBwYXJlbnQgPSB0aGlzLnBhcmVudCB8fCB0aGlzLmNhbnZhcztcblxuICAgIGlmKHRoaXMuc3R5bGUuYWxpZ25lbWVudCAmJiBwYXJlbnQpIHtcbiAgICAgIGNvbnN0IHBhcmVudFdpZHRoID0gcGFyZW50LndpZHRoO1xuICAgICAgY29uc3QgcGFyZW50UGFkZGluZyA9IChwYXJlbnQuc3R5bGUgJiYgcGFyZW50LnN0eWxlLnBhZGRpbmcpIHx8IDA7XG5cbiAgICAgIGlmKHRoaXMuc3R5bGUuYWxpZ25lbWVudCA9PSBDb25zdGFudHMuQWxpZ25lbWVudC5DRU5URVIpIHtcbiAgICAgICAgcmV0dXJuIHBhcmVudC54ICsgKHBhcmVudFdpZHRoIC8gMikgLSAodGhpcy53aWR0aCAvIDIpO1xuICAgICAgfSBlbHNlIGlmKHRoaXMuc3R5bGUuYWxpZ25lbWVudCA9PSBDb25zdGFudHMuQWxpZ25lbWVudC5SSUdIVCkge1xuICAgICAgICByZXR1cm4gcGFyZW50LnggKyAocGFyZW50V2lkdGgpIC0gKHRoaXMud2lkdGgpIC0gcGFyZW50UGFkZGluZztcbiAgICAgIH0gZWxzZSBpZih0aGlzLnN0eWxlLmFsaWduZW1lbnQgPT0gQ29uc3RhbnRzLkFsaWduZW1lbnQuTEVGVCkge1xuICAgICAgICByZXR1cm4gcGFyZW50LnggKyBwYXJlbnRQYWRkaW5nO1xuICAgICAgfVxuICAgIH0gZWxzZSBpZihwYXJlbnQpIHtcbiAgICAgIHJldHVybiBwYXJlbnQueCArIHRoaXMuI194O1xuICAgIH1cbiAgICBcbiAgICByZXR1cm4gdGhpcy4jX3g7XG4gIH1cblxuICBzZXQgeCh4KSB7XG4gICAgdGhpcy4jX3ggPSB4O1xuICAgIHRoaXMucmVhY3RvciAmJiB0aGlzLnJlYWN0b3IuZGlzcGF0Y2hFdmVudChcIm9uQ2hhbmdlXCIsIHRoaXMpO1xuICB9XG5cbiAgZ2V0IHkoKSB7XG4gICAgY29uc3QgcGFyZW50ID0gdGhpcy5wYXJlbnQgfHwgdGhpcy5jYW52YXM7XG5cbiAgICBpZih0aGlzLnN0eWxlLnZlcnRpY2FsQWxpZ25lbWVudCAmJiBwYXJlbnQpIHtcbiAgICAgIGNvbnN0IHBhcmVudEhlaWdodCA9IHBhcmVudC5oZWlnaHQ7XG4gICAgICBjb25zdCBwYXJlbnRQYWRkaW5nID0gKHBhcmVudC5zdHlsZSAmJiBwYXJlbnQuc3R5bGUucGFkZGluZykgfHwgMDtcblxuICAgICAgaWYodGhpcy5zdHlsZS52ZXJ0aWNhbEFsaWduZW1lbnQgPT0gQ29uc3RhbnRzLlZlcnRpY2FsQWxpZ25lbWVudC5CT1RUT00pIHtcbiAgICAgICAgcmV0dXJuIHBhcmVudC55ICsgKHBhcmVudEhlaWdodCkgLSAodGhpcy5oZWlnaHQpIC0gcGFyZW50UGFkZGluZztcbiAgICAgIH0gZWxzZSBpZih0aGlzLnN0eWxlLnZlcnRpY2FsQWxpZ25lbWVudCA9PSBDb25zdGFudHMuVmVydGljYWxBbGlnbmVtZW50LkNFTlRFUikge1xuICAgICAgICByZXR1cm4gcGFyZW50LnkgKyAocGFyZW50SGVpZ2h0IC8gMikgLSAodGhpcy5oZWlnaHQgLyAyKTtcbiAgICAgIH0gZWxzZSBpZih0aGlzLnN0eWxlLnZlcnRpY2FsQWxpZ25lbWVudCA9PSBDb25zdGFudHMuVmVydGljYWxBbGlnbmVtZW50LlRPUCkge1xuICAgICAgICByZXR1cm4gcGFyZW50LnkgKyBwYXJlbnRQYWRkaW5nO1xuICAgICAgfVxuICAgIH0gZWxzZSBpZihwYXJlbnQpIHtcbiAgICAgIHJldHVybiBwYXJlbnQueSArIHRoaXMuI195O1xuICAgIH1cbiAgICBcbiAgICByZXR1cm4gdGhpcy4jX3k7XG4gIH1cblxuICBzZXQgeSh5KSB7XG4gICAgdGhpcy4jX3kgPSB5O1xuICAgIHRoaXMucmVhY3RvciAmJiB0aGlzLnJlYWN0b3IuZGlzcGF0Y2hFdmVudChcIm9uQ2hhbmdlXCIsIHRoaXMpO1xuICB9XG5cbiAgZ2V0IGRlZmF1bHRTdHlsZSgpIHtcbiAgICByZXR1cm4gbmV3IFN0eWxlKHtcbiAgICAgIFwicGFkZGluZ1wiOiBDb25zdGFudHMuU2V0dGluZy5ERUZBVUxUX1BBRERJTkcsXG4gICAgICBcInNwYWNlQmV0d2VlbkNvbXBvbmVudHNcIjogQ29uc3RhbnRzLlNldHRpbmcuREVGQVVMVF9TUEFDSU5HXG4gICAgfSk7XG4gIH1cblxuICBnZXQgc3R5bGUoKSB7XG4gICAgcmV0dXJuIHRoaXMuI19zdHlsZSB8fCB0aGlzLmRlZmF1bHRTdHlsZTtcbiAgfVxuXG4gIHNldCBzdHlsZShzdHlsZSkge1xuICAgIHRoaXMuI19zdHlsZSA9IG5ldyBTdHlsZSgpO1xuICAgIHRoaXMuI19zdHlsZS5zZXRBbGwodGhpcy5kZWZhdWx0U3R5bGUuZ2V0U3R5bGVzKCkpO1xuXG4gICAgaWYoc3R5bGUgJiYgc3R5bGUgaW5zdGFuY2VvZiBTdHlsZSkge1xuICAgICAgdGhpcy4jX3N0eWxlLnNldEFsbChzdHlsZS5nZXRTdHlsZXMoKSk7XG4gICAgfVxuXG4gICAgdGhpcy4jX3N0eWxlLmNvbXBvbmVudCA9IHRoaXM7XG4gICAgdGhpcy5yZWFjdG9yICYmIHRoaXMucmVhY3Rvci5kaXNwYXRjaEV2ZW50KFwib25DaGFuZ2VcIiwgdGhpcyk7XG4gIH1cblxuICBnZXQgaGlkZGVuKCkge1xuICAgIHJldHVybiAodGhpcy5zdHlsZSAmJiB0aGlzLnN0eWxlLmhpZGRlbikgfHwgKHRoaXMucGFyZW50ICYmIHRoaXMucGFyZW50LmhpZGRlbik7XG4gIH1cblxuICBzZXQgaGlkZGVuKGhpZGRlbikge1xuICAgIGlmKGhpZGRlbiAhPSB0aGlzLmRpc2FibGVkIHx8IGhpZGRlbiAhPSB0aGlzLnN0eWxlLmhpZGRlbikge1xuICAgICAgdGhpcy5kaXNhYmxlZCA9IGhpZGRlbjtcbiAgICAgIGlmKHRoaXMuc3R5bGUpIHRoaXMuc3R5bGUuc2V0KFwiaGlkZGVuXCIsIGhpZGRlbik7XG4gICAgICB0aGlzLnJlYWN0b3IgJiYgdGhpcy5yZWFjdG9yLmRpc3BhdGNoRXZlbnQoXCJvbkNoYW5nZVwiLCB0aGlzKTtcbiAgICB9XG4gIH1cblxuICBnZXQgc2VsZWN0ZWQoKSB7XG4gICAgcmV0dXJuIHRoaXMuI19zZWxlY3RlZDtcbiAgfVxuXG4gIHNldCBzZWxlY3RlZChzZWxlY3RlZCkge1xuICAgIGlmKHNlbGVjdGVkICE9IHRoaXMuI19zZWxlY3RlZCkge1xuICAgICAgdGhpcy4jX3NlbGVjdGVkID0gc2VsZWN0ZWQ7XG4gICAgICB0aGlzLnJlYWN0b3IgJiYgdGhpcy5yZWFjdG9yLmRpc3BhdGNoRXZlbnQoXCJvbkNoYW5nZVwiLCB0aGlzKTtcbiAgICB9XG4gIH1cblxuICBnZXRBbGxQYXJlbnRzKCkge1xuICAgIGxldCBwYXJlbnQgPSB0aGlzLnBhcmVudDtcbiAgICBsZXQgcmVzID0gW107XG5cbiAgICB3aGlsZShwYXJlbnQpIHtcbiAgICAgIHJlcy5wdXNoKHBhcmVudCk7XG4gICAgICBwYXJlbnQgPSBwYXJlbnQucGFyZW50O1xuICAgIH1cblxuICAgIHJldHVybiByZXM7XG4gIH1cblxuICBzdGF0aWMgY29tcGFyZUNvbXBvbmVudHMoY29tcG9uZW50LCBvdGhlcikge1xuICAgIHJldHVybiBjb21wb25lbnQuY29tcGFyZVRvKG90aGVyKTtcbiAgfVxuXG4gIGNvbXBhcmVUbyhvdGhlckNvbXBvbmVudCkge1xuICAgIGNvbnN0IGlzRm9yZWdyb3VuZCA9IHRoaXMuc3R5bGUgJiYgdGhpcy5zdHlsZS5mb3JlZ3JvdW5kO1xuICAgIGNvbnN0IG90aGVySXNGb3JlZ3JvdW5kID0gb3RoZXJDb21wb25lbnQuc3R5bGUgJiYgb3RoZXJDb21wb25lbnQuc3R5bGUuZm9yZWdyb3VuZDtcbiAgICBjb25zdCB6SW5kZXggPSB0aGlzLnN0eWxlICYmIHRoaXMuc3R5bGUuekluZGV4O1xuICAgIGNvbnN0IG90aGVyekluZGV4ID0gb3RoZXJDb21wb25lbnQuc3R5bGUgJiYgb3RoZXJDb21wb25lbnQuc3R5bGUuekluZGV4O1xuXG4gICAgaWYodGhpcy5wYXJlbnQgPT0gb3RoZXJDb21wb25lbnQpIHtcbiAgICAgIHJldHVybiAxO1xuICAgIH0gZWxzZSBpZihvdGhlckNvbXBvbmVudC5wYXJlbnQgPT0gdGhpcykge1xuICAgICAgcmV0dXJuIC0xO1xuICAgIH0gZWxzZSBpZihpc0ZvcmVncm91bmQgJiYgIW90aGVySXNGb3JlZ3JvdW5kKSB7XG4gICAgICByZXR1cm4gMVxuICAgIH0gZWxzZSBpZighaXNGb3JlZ3JvdW5kICYmIG90aGVySXNGb3JlZ3JvdW5kKSB7XG4gICAgICByZXR1cm4gLTE7XG4gICAgfSBlbHNlIGlmKHpJbmRleCA+IG90aGVyekluZGV4KSB7XG4gICAgICByZXR1cm4gMTtcbiAgICB9IGVsc2UgaWYoekluZGV4IDwgb3RoZXJ6SW5kZXgpIHtcbiAgICAgIHJldHVybiAtMTtcbiAgICB9XG5cbiAgICByZXR1cm4gb3RoZXJDb21wb25lbnQuY29tcGFyZVRvQ29tcG9uZW50KHRoaXMpIHx8IC10aGlzLmNvbXBhcmVUb0NvbXBvbmVudChvdGhlckNvbXBvbmVudCk7XG4gIH1cblxuICBjb21wYXJlVG9Db21wb25lbnQob3RoZXJDb21wb25lbnQpIHtcbiAgICByZXR1cm4gMDtcbiAgfVxuXG4gIGNvbXBhcmVUb01lbnUob3RoZXJDb21wb25lbnQpIHtcbiAgICByZXR1cm4gLTE7XG4gIH1cblxuICBjb21wYXJlVG9Ub29sdGlwKG90aGVyQ29tcG9uZW50KSB7XG4gICAgcmV0dXJuIC0xO1xuICB9XG5cbiAgY29tcGFyZVRvTm90aWZpY2F0aW9uKG90aGVyQ29tcG9uZW50KSB7XG4gICAgcmV0dXJuIC0xO1xuICB9XG5cbiAgY29tcGFyZVRvU2Nyb2xsYmFyKG90aGVyQ29tcG9uZW50KSB7XG4gICAgcmV0dXJuIC0xO1xuICB9XG59IiwiLypcbiAqIENvcHlyaWdodCAoQykgMjAyMCBFbGlhc3RpayAoZWxpYXN0aWtzb2Z0cy5jb20pXG4gKlxuICogVGhpcyBmaWxlIGlzIHBhcnQgb2YgXCJKU0dhbWVUb29sc1wiLlxuICpcbiAqIFwiSlNHYW1lVG9vbHNcIiBpcyBmcmVlIHNvZnR3YXJlOiB5b3UgY2FuIHJlZGlzdHJpYnV0ZSBpdCBhbmQvb3IgbW9kaWZ5XG4gKiBpdCB1bmRlciB0aGUgdGVybXMgb2YgdGhlIEdOVSBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlIGFzIHB1Ymxpc2hlZCBieVxuICogdGhlIEZyZWUgU29mdHdhcmUgRm91bmRhdGlvbiwgZWl0aGVyIHZlcnNpb24gMyBvZiB0aGUgTGljZW5zZSwgb3JcbiAqIChhdCB5b3VyIG9wdGlvbikgYW55IGxhdGVyIHZlcnNpb24uXG4gKlxuICogXCJKU0dhbWVUb29sc1wiIGlzIGRpc3RyaWJ1dGVkIGluIHRoZSBob3BlIHRoYXQgaXQgd2lsbCBiZSB1c2VmdWwsXG4gKiBidXQgV0lUSE9VVCBBTlkgV0FSUkFOVFk7IHdpdGhvdXQgZXZlbiB0aGUgaW1wbGllZCB3YXJyYW50eSBvZlxuICogTUVSQ0hBTlRBQklMSVRZIG9yIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFLiAgU2VlIHRoZVxuICogR05VIEdlbmVyYWwgUHVibGljIExpY2Vuc2UgZm9yIG1vcmUgZGV0YWlscy5cbiAqXG4gKiBZb3Ugc2hvdWxkIGhhdmUgcmVjZWl2ZWQgYSBjb3B5IG9mIHRoZSBHTlUgR2VuZXJhbCBQdWJsaWMgTGljZW5zZVxuICogYWxvbmcgd2l0aCBcIkpTR2FtZVRvb2xzXCIuICBJZiBub3QsIHNlZSA8aHR0cDovL3d3dy5nbnUub3JnL2xpY2Vuc2VzLz4uXG4gKi9cbmV4cG9ydCBkZWZhdWx0IHtcbiAgU2V0dGluZzoge1xuICAgIERJU0FCTEVfT1BUSU1JWkFUSU9OUzogZmFsc2UsIC8vIHRydWUgdG8gZGlzYWJsZSBvcHRpbWl6YXRpb25zLCBjYW4gZml4IHNvbWUgcHJvYmxlbXMsIGRpc2FibGluZyBvcHRpbWl6YXRpb24gcmVkdWNlcyBwZXJmb3JtYW5jZVxuICAgIERJU0FCTEVfRVhQRVJJTUVOVEFMX09QVElNSVpBVElPTlM6IGZhbHNlLCAvLyB0cnVlIHRvIGRpc2FibGUgb3B0aW1pemF0aW9ucyB0aGF0IGFyZSBjb25zaWRlcmVkIGV4cGVyaW1lbnRhbFxuICAgIERJU0FCTEVfSVNfQ09NUE9ORU5UX1ZJU0lCTEVfT1BUSU1JWkFUSU9OUzogdHJ1ZSwgLy8gdHJ1ZSB0byBkaXNhYmxlIG9wdGltaXphdGlvbnMgb2YgdGhlIENvbnRhaW5lci5pc0NvbXBvbmVudFZpc2libGUgbWV0aG9kXG4gICAgRElTQUJMRV9DT05UQUlORVJTX0NVVFRJTkc6IGZhbHNlLCAvLyBkaXNhYmxpbmcgY29udGFpbmVycyBjdXR0aW5nIGFsbG93IHRvIHZpZXcgdGhlIGNvbXBvbmVudHMgb2YgYSBjb250YWluZXIgdGhhdCBhcmUgbm90IHRvdGFsbHkgdmlzaWJsZSwgeW91IGNhbiBhbHNvIGRpc2FibGUgb3B0aW1pemF0aW9ucyB0byBkaXNwbGF5cyBlbGVtZW50cyB0aGF0IGFyZSBub3QgZHJhd24gZm9yIG9wdGltaXphdGlvbiBwdXJwb3Nlc1xuICAgIEVOQUJMRV9QSVhFTF9SQVRJT19SRVNJWklORzogdHJ1ZSwgLy8gZW5hYmxpbmcgdGhpcyBhbGxvdyByZXNpemluZyB0aGUgY2FudmFzIHRvIG1hdGNoIHRoZSBzY3JlZW4gcGl4ZWwgcmF0aW9cbiAgICBQSVhFTF9SQVRJTzogMSwgLy8gdGhlIGN1cnJlbnQgcGl4ZWwgcmF0aW8sIGF1dG9tYXRpY2FsbHkgdXBkYXRlZFxuICAgIEZPTlRfRkFNSUxZOiBcInNhbnMtc2VyaWZcIixcbiAgICBGT05UX1NJWkU6IDI4LFxuICAgIENBTlZBU19XSURUSDogNjAwLFxuICAgIENBTlZBU19IRUlHSFQ6IDQwMCxcbiAgICBERUZBVUxUX1BBRERJTkc6IDYsXG4gICAgREVGQVVMVF9TUEFDSU5HOiA2LFxuICAgIEJVVFRPTl9ERUZBVUxUX0JBQ0tHUk9VTkQ6IFwicmdiYSgwLCAwLCAwLCAwKVwiLFxuICAgIEJVVFRPTl9ERUZBVUxUX0hPVkVSX0JBQ0tHUk9VTkQ6IFwiIzk1QTVBNlwiLFxuICAgIEJVVFRPTl9ERUZBVUxUX0NMSUNLX0JBQ0tHUk9VTkQ6IFwiIzcyN0Y4MFwiLFxuICAgIEJVVFRPTl9ERUZBVUxUX0FMVEVSTkFUSVZFX0JBQ0tHUk9VTkQ6IFwiI0FDQkVCRlwiLFxuICAgIElOUFVUX0RFRkFVTFRfRk9OVF9DT0xPUjogXCIjMDAwXCIsXG4gICAgSU5QVVRfREVGQVVMVF9CQUNLR1JPVU5EX0NPTE9SOiBcIiNmZmZcIixcbiAgICBJTlBVVF9ERUZBVUxUX0JPUkRFUl9DT0xPUjogXCIjMDAwXCIsXG4gICAgSU5QVVRfREVGQVVMVF9CT1JERVJfQ09MT1JfU0VMRUNURUQ6IFwiI2EyY2RkOFwiLFxuICAgIElOUFVUX0RFRkFVTFRfU0VMRUNUX0NPTE9SOiBcIiMyOTgwYjlcIixcbiAgICBMQUJFTF9ERUZBVUxUX0ZPTlRfQ09MT1I6IFwiIzAwMFwiLFxuICAgIExJTktfREVGQVVMVF9DT0xPUjogXCIjMDAwMEVFXCIsXG4gICAgTElOS19ERUZBVUxUX0hPVkVSX0NPTE9SOiBcIiM0RDRERkZcIixcbiAgICBMSU5LX0RFRkFVTFRfQ0xJQ0tfQ09MT1I6IFwiI0VFNzcwMFwiLFxuICAgIE1FTlVfREVGQVVMVF9CQUNLR1JPVU5EOiBcInJnYmEoNDQsIDYyLCA4MCwgMC43NSlcIixcbiAgICBNRU5VX0RFRkFVTFRfQkxVUl9CQUNLR1JPVU5EOiBmYWxzZSxcbiAgICBOT1RJRklDQVRJT05fREVGQVVMVF9CQUNLR1JPVU5EOiBcInJnYmEoNDYsIDIwNCwgMTEzLCAwLjUpXCIsXG4gICAgTk9USUZJQ0FUSU9OX0RFRkFVTFRfQU5JTUFUSU9OX0RVUkFUSU9OOiA1MDAsIC8vIG1zXG4gICAgUFJPR1JFU1NfREVGQVVMVF9CQUNLR1JPVU5EOiBcIiNiZGMzYzdcIixcbiAgICBQUk9HUkVTU19ERUZBVUxUX0ZPUkVHUk9VTkQ6IFwiIzI3YWU2MFwiLFxuICAgIFBST0dSRVNTX0RFRkFVTFRfQU5JTUFUSU9OX0RVUkFUSU9OOiAyMDAwLCAvLyBtc1xuICAgIFRPT0xUSVBfREVGQVVMVF9CQUNLR1JPVU5EOiBcInJnYmEoMjU1LCAyNTUsIDI1NSwgMC4yNSlcIixcbiAgICBBUlJPV19ERUZBVUxUX0xJTkVfQ0FQOiBcInJvdW5kXCIsXG4gICAgQVJST1dfREVGQVVMVF9DT0xPUjogXCIjRkYwMDAwXCIsXG4gICAgQVJST1dfREVGQVVMVF9MSU5FX1NJWkU6IDgsXG4gICAgQVJST1dfREVGQVVMVF9IRUFEX1NJWkU6IDIwLFxuICAgIENST1NTX0RFRkFVTFRfTElORV9DQVA6IFwicm91bmRcIixcbiAgICBDUk9TU19ERUZBVUxUX0NPTE9SOiBcIiNmZmZcIixcbiAgICBDUk9TU19ERUZBVUxUX0xJTkVfU0laRTogMyxcbiAgICBTQ1JPTExCQVJfREVGQVVMVF9CQUNLR1JPVU5EOiBcInJnYmEoMTQ5LCAxNjUsIDE2NiwgMC43NSlcIixcbiAgICBTQ1JPTExCQVJfREVGQVVMVF9IT1ZFUl9CQUNLR1JPVU5EOiBcInJnYmEoMTQ5LCAxNjUsIDE2NiwgMC45KVwiLFxuICAgIFNDUk9MTEJBUl9ERUZBVUxUX0NMSUNLX0JBQ0tHUk9VTkQ6IFwicmdiYSgxNDksIDE2NSwgMTY2LCAwLjUpXCIsXG4gICAgU0NST0xMQkFSX0RFRkFVTFRfU0laRTogMTAsXG4gICAgREVGQVVMVF9CT1JERVJfU0laRTogMyxcbiAgICBERUZBVUxUX0JPUkRFUl9DT0xPUl9TRUxFQ1RFRDogXCIjYTJjZGQ4XCIsXG4gICAgREVGQVVMVF9BTklNQVRJT05fRFVSQVRJT046IDIwMDAsIC8vIG1zXG4gICAgVFJJQU5HTEVfREVGQVVMVF9MSU5FX0NBUDogXCJyb3VuZFwiLFxuICAgIFRSSUFOR0xFX0RFRkFVTFRfQ09MT1I6IFwiIzAwMFwiLFxuICAgIFRSSUFOR0xFX0RFRkFVTFRfRklMTF9DT0xPUjogXCIjMDAwXCIsXG4gICAgVFJJQU5HTEVfREVGQVVMVF9MSU5FX1NJWkU6IDMsXG4gICAgVFJJQU5HTEVfREVGQVVMVF9GSUxMOiB0cnVlLFxuICAgIFNFTEVDVF9ERUZBVUxUX0JBQ0tHUk9VTkQ6IFwiI2VjZjBmMVwiLFxuICAgIFNFTEVDVF9ERUZBVUxUX0hPVkVSX0JBQ0tHUk9VTkQ6IFwiI2JkYzNjN1wiLFxuICAgIFNFTEVDVF9ERUZBVUxUX0NMSUNLX0JBQ0tHUk9VTkQ6IFwiI2FkYjJiNVwiLFxuICAgIENJUkNMRV9ERUZBVUxUX0xJTkVfQ0FQOiBcInJvdW5kXCIsXG4gICAgQ0lSQ0xFX0RFRkFVTFRfQ09MT1I6IFwiI2ZmZlwiLFxuICAgIENJUkNMRV9ERUZBVUxUX0ZJTExfQ09MT1I6IFwiIzAwMFwiLFxuICAgIENJUkNMRV9ERUZBVUxUX0xJTkVfU0laRTogMyxcbiAgICBDSVJDTEVfREVGQVVMVF9GSUxMOiB0cnVlLFxuICB9LFxuICBLZXk6IHtcbiAgICBVUDogMzgsXG4gICAgUklHSFQ6IDM5LFxuICAgIEJPVFRPTTogNDAsXG4gICAgTEVGVDogMzcsXG4gICAgRU5URVI6IDEzLFxuICAgIEVDSEFQOiAyNyxcbiAgICBUQUI6IDlcbiAgfSxcbiAgQWxpZ25lbWVudDoge1xuICAgIFJJR0hUOiBcInJpZ2h0XCIsXG4gICAgTEVGVDogXCJsZWZ0XCIsXG4gICAgQ0VOVEVSOiBcImNlbnRlclwiLFxuICAgIERFRkFVTFQ6IFwiZGVmYXVsdFwiXG4gIH0sXG4gIFZlcnRpY2FsQWxpZ25lbWVudDoge1xuICAgIFRPUDogXCJ0b3BcIixcbiAgICBDRU5URVI6IFwiY2VudGVyXCIsXG4gICAgQk9UVE9NOiBcImJvdHRvbVwiLFxuICAgIERFRkFVTFQ6IFwiZGVmYXVsdFwiXG4gIH0sXG4gIFN0cmluZzoge1xuICAgIEVSUk9SX01FU1NBR0VfQ0FOVkFTOiBcIkEgZmF0YWwgZXJyb3IgaGFzIG9jY3VycmVkIGF0IHRoZSBKU0dhbWVUb29scyBsZXZlbC5cIixcbiAgICBFUlJPUl9NRVNTQUdFX0NBTlZBU19MQUJFTCA6IFwiOicoXFxuQSBmYXRhbCBlcnJvciBoYXMgb2NjdXJyZWQgYXQgdGhlIEpTR2FtZVRvb2xzIGxldmVsLlwiLFxuICAgIFJFVFJZOiBcIlJldHJ5XCIsXG4gICAgTk9USUNFX01FU1NBR0U6IFwiTm90aWNlOlwiLFxuICAgIFdBUk5JTkdfTUVTU0FHRTogXCJXYXJuaW5nOlwiLFxuICAgIEVSUk9SX01FU1NBR0U6IFwiRXJyb3I6XCIsXG4gICAgT1BUSU1JWkFUSU9OX0RJU0FCTEVEOiBcIk9wdGltaXphdGlvbnMgYXJlIGRpc2FibGVkLiBZb3UgbWF5IG5vdGljZSBsb3cgcGVyZm9ybWFuY2UuXCIsXG4gICAgQ09OVEFJTkVSX0NVVFRJTkdfRElTQUJMRUQ6IFwiQ29udGFpbmVycyBjdXR0aW5nIGlzIGRpc2FibGVkLlwiLFxuICAgIEJVVFRPTl9JTUFHRV9ERVBSRUNBVEVEOiBcIkpTR2FtZVRvb2xzLkJ1dHRvbkltYWdlIGlzIGRlcHJlY2F0ZWQuIFBsZWFzZSB1c2UgYSBCdXR0b24gd2l0aCBhbiBJbWFnZUNvbnRhaW5lciBpbnN0ZWFkLlwiLFxuICAgIElOUFVUX0ZVTExTQ1JFRU46IFwiVGhlIHVzZSBvZiBKU0dhbWVUb29scy5DYW52YXMgaXMgbmVlZGVkIGZvciBJbnB1dCBjb21wb25lbnRzIHRvIHByb3Blcmx5IHdvcmsgaW4gZnVsbHNjcmVlbiBtb2RlLlwiXG4gIH1cbn07IiwiLypcbiAqIENvcHlyaWdodCAoQykgMjAyMCBFbGlhc3RpayAoZWxpYXN0aWtzb2Z0cy5jb20pXG4gKlxuICogVGhpcyBmaWxlIGlzIHBhcnQgb2YgXCJKU0dhbWVUb29sc1wiLlxuICpcbiAqIFwiSlNHYW1lVG9vbHNcIiBpcyBmcmVlIHNvZnR3YXJlOiB5b3UgY2FuIHJlZGlzdHJpYnV0ZSBpdCBhbmQvb3IgbW9kaWZ5XG4gKiBpdCB1bmRlciB0aGUgdGVybXMgb2YgdGhlIEdOVSBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlIGFzIHB1Ymxpc2hlZCBieVxuICogdGhlIEZyZWUgU29mdHdhcmUgRm91bmRhdGlvbiwgZWl0aGVyIHZlcnNpb24gMyBvZiB0aGUgTGljZW5zZSwgb3JcbiAqIChhdCB5b3VyIG9wdGlvbikgYW55IGxhdGVyIHZlcnNpb24uXG4gKlxuICogXCJKU0dhbWVUb29sc1wiIGlzIGRpc3RyaWJ1dGVkIGluIHRoZSBob3BlIHRoYXQgaXQgd2lsbCBiZSB1c2VmdWwsXG4gKiBidXQgV0lUSE9VVCBBTlkgV0FSUkFOVFk7IHdpdGhvdXQgZXZlbiB0aGUgaW1wbGllZCB3YXJyYW50eSBvZlxuICogTUVSQ0hBTlRBQklMSVRZIG9yIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFLiAgU2VlIHRoZVxuICogR05VIEdlbmVyYWwgUHVibGljIExpY2Vuc2UgZm9yIG1vcmUgZGV0YWlscy5cbiAqXG4gKiBZb3Ugc2hvdWxkIGhhdmUgcmVjZWl2ZWQgYSBjb3B5IG9mIHRoZSBHTlUgR2VuZXJhbCBQdWJsaWMgTGljZW5zZVxuICogYWxvbmcgd2l0aCBcIkpTR2FtZVRvb2xzXCIuICBJZiBub3QsIHNlZSA8aHR0cDovL3d3dy5nbnUub3JnL2xpY2Vuc2VzLz4uXG4gKi9cbmltcG9ydCBCb3ggZnJvbSBcIi4vQm94XCI7XG5pbXBvcnQgQ29tcG9uZW50IGZyb20gXCIuL0NvbXBvbmVudFwiO1xuaW1wb3J0IENvbnN0YW50cyBmcm9tIFwiLi9Db25zdGFudHNcIjtcbmltcG9ydCBTY3JvbGxiYXJIb3Jpem9udGFsIGZyb20gXCIuL1Njcm9sbGJhckhvcml6b250YWxcIjtcbmltcG9ydCBTY3JvbGxiYXJWZXJ0aWNhbCBmcm9tIFwiLi9TY3JvbGxiYXJWZXJ0aWNhbFwiO1xuaW1wb3J0IFN0eWxlIGZyb20gXCIuL1N0eWxlXCI7XG5pbXBvcnQgVXRpbHMgZnJvbSBcIi4vVXRpbHNcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ29udGFpbmVyIGV4dGVuZHMgQm94IHtcbiAgc2VsZWN0YWJsZSA9IGZhbHNlO1xuICAjY29tcG9uZW50cyA9IFtdO1xuICAjX21heFdpZHRoID0gMDtcbiAgI19tYXhIZWlnaHQgPSAwO1xuICAjX21pbldpZHRoID0gMDtcbiAgI19taW5IZWlnaHQgPSAwO1xuICBldmVudENoYW5nZUNhbGxiYWNrID0gKCkgPT4gdGhpcy5yZWFjdG9yLmRpc3BhdGNoRXZlbnQoXCJvbkNoYW5nZVwiLCB0aGlzKTtcblxuICBjb25zdHJ1Y3Rvcih4LCB5LCBtYXhXaWR0aCwgbWF4SGVpZ2h0LCBzdHlsZSwgLi4uY29tcG9uZW50cykge1xuICAgIHN1cGVyKHgsIHksIG51bGwsIG51bGwsIHN0eWxlKTtcblxuICAgIHRoaXMuYWRkQWxsKC4uLmNvbXBvbmVudHMpO1xuICAgIHRoaXMuY2FudmFzVG1wID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImNhbnZhc1wiKTtcbiAgICB0aGlzLiNfbWF4V2lkdGggPSBtYXhXaWR0aDtcbiAgICB0aGlzLiNfbWF4SGVpZ2h0ID0gbWF4SGVpZ2h0O1xuICAgIHRoaXMuc2Nyb2xsYmFySG9yaXpvbnRhbCA9IG5ldyBTY3JvbGxiYXJIb3Jpem9udGFsKG51bGwsIG51bGwsIHRoaXMpO1xuICAgIHRoaXMuc2Nyb2xsYmFyVmVydGljYWwgPSBuZXcgU2Nyb2xsYmFyVmVydGljYWwobnVsbCwgbnVsbCwgdGhpcyk7XG5cbiAgICB0aGlzLmFkZFNjcm9sbEFjdGlvbigoZGVsdGFYLCBkZWx0YVkpID0+IHRoaXMuY29udHJvbFNjcm9sbGluZyhkZWx0YVgsIGRlbHRhWSkpO1xuXG4gICAgaWYoIUNvbnN0YW50cy5TZXR0aW5nLkRJU0FCTEVfRVhQRVJJTUVOVEFMX09QVElNSVpBVElPTlMpIHtcbiAgICAgIHRoaXMuYWRkQ2hhbmdlQWN0aW9uKGNvbXBvbmVudENoYW5nZWQgPT4ge1xuICAgICAgICBjb21wb25lbnRDaGFuZ2VkID09IHRoaXMucGFyZW50ICYmIHRoaXMuY29tcG9uZW50cy5mb3JFYWNoKGNvbXBvbmVudCA9PiBjb21wb25lbnQgJiYgY29tcG9uZW50LnJlYWN0b3IuZGlzcGF0Y2hFdmVudChcIm9uQ2hhbmdlXCIsIHRoaXMpKTtcbiAgICAgIH0pO1xuICAgIH1cbiAgfVxuXG4gIGRyYXcoY29udGV4dCkge1xuICAgIGlmKHRoaXMuaGlkZGVuKSByZXR1cm47XG4gICAgY29uc3QgY2FudmFzID0gY29udGV4dC5jYW52YXM7XG4gICAgY29uc3QgY3R4ID0gY2FudmFzLmdldENvbnRleHQoXCIyZFwiKTtcbiAgICBjdHguc2F2ZSgpO1xuXG4gICAgaWYodGhpcy5pc0N1dHRpbmcpIHtcbiAgICAgIGNvbnN0IGN0eFRlbXAgPSB0aGlzLmNhbnZhc1RtcC5nZXRDb250ZXh0KFwiMmRcIik7XG4gICAgICB0aGlzLmNhbnZhc1RtcC53aWR0aCA9IFV0aWxzLmdldENhbnZhc1dpZHRoKGNhbnZhcykgKiBDb25zdGFudHMuU2V0dGluZy5QSVhFTF9SQVRJTztcbiAgICAgIHRoaXMuY2FudmFzVG1wLmhlaWdodCA9IFV0aWxzLmdldENhbnZhc0hlaWdodChjYW52YXMpICogQ29uc3RhbnRzLlNldHRpbmcuUElYRUxfUkFUSU87XG4gICAgICB0aGlzLmNhbnZhc1RtcC5zdHlsZS53aWR0aCA9IFV0aWxzLmdldENhbnZhc1dpZHRoKGNhbnZhcyk7XG4gICAgICB0aGlzLmNhbnZhc1RtcC5zdHlsZS5oZWlnaHQgPSBVdGlscy5nZXRDYW52YXNIZWlnaHQoY2FudmFzKTtcbiAgICAgIFV0aWxzLmNsZWFyKGN0eFRlbXApO1xuICAgIH1cbiAgICBcbiAgICB0aGlzLmNvbXBvbmVudHMuZm9yRWFjaChjb21wb25lbnQgPT4ge1xuICAgICAgaWYodGhpcy5jYW52YXMpIGNvbXBvbmVudC5jYW52YXMgPSB0aGlzLmNhbnZhcztcbiAgICB9KTtcbiAgICBcbiAgICB0aGlzLmNvbnRyb2xTY3JvbGxpbmcoMCwgMCk7XG4gICAgc3VwZXIuZHJhdyhjb250ZXh0KTtcblxuICAgIGN0eC5yZXN0b3JlKCk7XG4gIH1cblxuICBkcmF3VmVydGljYWxTY3JvbGxCYXIoY3R4KSB7XG4gICAgaWYodGhpcy5zY3JvbGxiYXJWZXJ0aWNhbCkge1xuICAgICAgdGhpcy5zY3JvbGxiYXJWZXJ0aWNhbC5jYW52YXMgPSB0aGlzLmNhbnZhcztcbiAgICAgIHRoaXMuc2Nyb2xsYmFyVmVydGljYWwuZHJhdyhjdHgpO1xuICAgIH1cbiAgfVxuXG4gIGRyYXdIb3Jpem9udGFsU2Nyb2xsQmFyKGN0eCkge1xuICAgIGlmKHRoaXMuc2Nyb2xsYmFySG9yaXpvbnRhbCkge1xuICAgICAgdGhpcy5zY3JvbGxiYXJIb3Jpem9udGFsLmNhbnZhcyA9IHRoaXMuY2FudmFzO1xuICAgICAgdGhpcy5zY3JvbGxiYXJIb3Jpem9udGFsLmRyYXcoY3R4KTtcbiAgICB9XG4gIH1cblxuICBkcmF3U2Nyb2xsYmFycyhjdHgpIHtcbiAgICBpZighdGhpcy5zdHlsZS5zY3JvbGxYRGlzYWJsZWQpIHRoaXMuZHJhd0hvcml6b250YWxTY3JvbGxCYXIoY3R4KTtcbiAgICBpZighdGhpcy5zdHlsZS5zY3JvbGxZRGlzYWJsZWQpIHRoaXMuZHJhd1ZlcnRpY2FsU2Nyb2xsQmFyKGN0eCk7XG4gIH1cblxuICBzZXQoLi4uY29tcG9uZW50cykge1xuICAgIHRoaXMuY2xlYXIoKTtcbiAgICB0aGlzLmFkZEFsbCguLi5jb21wb25lbnRzKTtcbiAgICB0aGlzLmVuYWJsZSgpO1xuICB9XG5cbiAgYWRkKGNvbXBvbmVudCkge1xuICAgIHRoaXMuI2NvbXBvbmVudHMucHVzaChjb21wb25lbnQpO1xuICAgIGNvbXBvbmVudC5wYXJlbnQgPSB0aGlzO1xuICAgIGlmKHRoaXMuY2FudmFzKSBjb21wb25lbnQuY2FudmFzID0gdGhpcy5jYW52YXM7XG4gICAgY29tcG9uZW50LmFkZENoYW5nZUFjdGlvbih0aGlzLmV2ZW50Q2hhbmdlQ2FsbGJhY2spO1xuICAgIHRoaXMucmVhY3Rvci5kaXNwYXRjaEV2ZW50KFwib25DaGFuZ2VcIiwgdGhpcyk7XG4gIH1cblxuICBhZGRBbGwoLi4uY29tcG9uZW50cykge1xuICAgIGNvbXBvbmVudHMuZm9yRWFjaChjb21wb25lbnQgPT4gdGhpcy5hZGQoY29tcG9uZW50KSk7XG4gIH1cblxuICByZW1vdmUoY29tcG9uZW50KSB7XG4gICAgaWYodGhpcy4jY29tcG9uZW50cy5pbmRleE9mKGNvbXBvbmVudCkgIT0gLTEpIHtcbiAgICAgIGNvbXBvbmVudC5yZW1vdmVDaGFuZ2VBY3Rpb24odGhpcy5ldmVudENoYW5nZUNhbGxiYWNrKTtcbiAgICAgIHRoaXMuI2NvbXBvbmVudHMgPSB0aGlzLiNjb21wb25lbnRzLmZpbHRlcihjdXJyZW50ID0+IGNvbXBvbmVudCAhPSBjdXJyZW50KTtcbiAgICAgIHRoaXMucmVhY3Rvci5kaXNwYXRjaEV2ZW50KFwib25DaGFuZ2VcIiwgdGhpcyk7XG4gICAgfVxuICB9XG5cbiAgY2xlYXIoKSB7XG4gICAgdGhpcy4jY29tcG9uZW50cy5mb3JFYWNoKGNvbXBvbmVudCA9PiB0aGlzLnJlbW92ZShjb21wb25lbnQpKTtcbiAgICB0aGlzLnJlYWN0b3IuZGlzcGF0Y2hFdmVudChcIm9uQ2hhbmdlXCIsIHRoaXMpO1xuICB9XG5cbiAgZ2V0IGNvbXBvbmVudHMoKSB7XG4gICAgY29uc3QgY29tcG9uZW50cyA9IFtdO1xuICAgIHRoaXMuI2NvbXBvbmVudHMuZm9yRWFjaChjb21wb25lbnQgPT4gY29tcG9uZW50cy5wdXNoKGNvbXBvbmVudCkpO1xuICAgIHJldHVybiBjb21wb25lbnRzO1xuICB9XG5cbiAgZ2V0IGFsbENvbXBvbmVudHMoKSB7XG4gICAgY29uc3QgY29tcG9uZW50cyA9IHRoaXMuY29tcG9uZW50cztcbiAgICBjb21wb25lbnRzLnB1c2godGhpcy5zY3JvbGxiYXJIb3Jpem9udGFsKTtcbiAgICBjb21wb25lbnRzLnB1c2godGhpcy5zY3JvbGxiYXJWZXJ0aWNhbCk7XG4gICAgcmV0dXJuIGNvbXBvbmVudHM7XG4gIH1cblxuICBnZXRDb21wb25lbnRzVHJlZShzdGFydCA9IHRoaXMpIHtcbiAgICBjb25zdCBjb21wb25lbnRzID0ge1xuICAgICAgXCJjb21wb25lbnRcIjogc3RhcnQsXG4gICAgICBcImNoaWxkc1wiOiBbXVxuICAgIH07XG5cbiAgICBpZihzdGFydC5hbGxDb21wb25lbnRzKSB7XG4gICAgICBzdGFydC5hbGxDb21wb25lbnRzLmZvckVhY2goY29tcG9uZW50ID0+IGNvbXBvbmVudHMuY2hpbGRzLnB1c2godGhpcy5nZXRDb21wb25lbnRzVHJlZShjb21wb25lbnQpKSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGNvbXBvbmVudHM7XG4gIH1cblxuICBzdGF0aWMgc29ydENvbXBvbmVudHNUcmVlKGNvbXBvbmVudCwgb3RoZXIpIHtcbiAgICByZXR1cm4gY29tcG9uZW50LmNvbXBvbmVudC5jb21wYXJlVG8ob3RoZXIuY29tcG9uZW50KTtcbiAgfVxuXG4gIGRpc2FibGUoKSB7XG4gICAgbGV0IGNoYW5nZWQgPSBzdXBlci5kaXNhYmxlKCk7XG5cbiAgICB0aGlzLiNjb21wb25lbnRzLmZvckVhY2goY29tcG9uZW50ID0+IHtcbiAgICAgIGlmKGNvbXBvbmVudCAmJiBjb21wb25lbnQuZGlzYWJsZSAmJiBjb21wb25lbnQuZGlzYWJsZSgpKSB7XG4gICAgICAgIGNoYW5nZWQgPSB0cnVlO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgaWYoY2hhbmdlZCkgdGhpcy5yZWFjdG9yLmRpc3BhdGNoRXZlbnQoXCJvbkNoYW5nZVwiLCB0aGlzKTtcbiAgfVxuXG4gIGVuYWJsZSgpIHtcbiAgICBsZXQgY2hhbmdlZCA9IHN1cGVyLmVuYWJsZSgpO1xuXG4gICAgdGhpcy4jY29tcG9uZW50cy5mb3JFYWNoKGNvbXBvbmVudCA9PiB7XG4gICAgICBpZihjb21wb25lbnQgJiYgY29tcG9uZW50LmVuYWJsZSAmJiBjb21wb25lbnQuZW5hYmxlKCkpIHtcbiAgICAgICAgY2hhbmdlZCA9IHRydWU7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICBpZihjaGFuZ2VkKSB0aGlzLnJlYWN0b3IuZGlzcGF0Y2hFdmVudChcIm9uQ2hhbmdlXCIsIHRoaXMpO1xuICB9XG5cbiAgZ2V0IHdpZHRoKCkge1xuICAgIGNvbnN0IHdpZHRoID0gKHRoaXMucGFyZW50ICYmIHRoaXMucGFyZW50LndpZHRoKTtcbiAgICBjb25zdCBtaW4gPSB0aGlzLm1heFdpZHRoID8gTWF0aC5taW4odGhpcy5tYXhXaWR0aCwgd2lkdGgpIDogbnVsbDtcbiAgICByZXR1cm4gdGhpcy5taW5XaWR0aCA/IE1hdGgubWF4KHRoaXMubWluV2lkdGgsIG1pbiB8fCB3aWR0aCkgOiB3aWR0aDtcbiAgfVxuXG4gIGdldCBoZWlnaHQoKSB7XG4gICAgY29uc3QgaGVpZ2h0ID0gKHRoaXMucGFyZW50ICYmIHRoaXMucGFyZW50LmhlaWdodCk7XG4gICAgY29uc3QgbWluID0gdGhpcy5tYXhXaWR0aCA/IE1hdGgubWluKHRoaXMubWF4SGVpZ2h0LCBoZWlnaHQpIDogbnVsbDtcbiAgICByZXR1cm4gdGhpcy5taW5IZWlnaHQgPyBNYXRoLm1heCh0aGlzLm1pbkhlaWdodCwgbWluIHx8IGhlaWdodCkgOiBoZWlnaHQ7XG4gIH1cblxuICBnZXQgbWF4V2lkdGgoKSB7XG4gICAgcmV0dXJuIHRoaXMuI19tYXhXaWR0aDtcbiAgfVxuXG4gIGdldCBtYXhIZWlnaHQoKSB7XG4gICAgcmV0dXJuIHRoaXMuI19tYXhIZWlnaHQ7XG4gIH1cblxuICBzZXQgbWF4V2lkdGgobWF4V2lkdGgpIHtcbiAgICBpZihtYXhXaWR0aCAhPSB0aGlzLiNfbWF4V2lkdGgpIHtcbiAgICAgIHRoaXMuI19tYXhXaWR0aCA9IG1heFdpZHRoO1xuICAgICAgdGhpcy5yZWFjdG9yLmRpc3BhdGNoRXZlbnQoXCJvbkNoYW5nZVwiLCB0aGlzKTtcbiAgICB9XG4gIH1cblxuICBzZXQgbWF4SGVpZ2h0KG1heEhlaWdodCkge1xuICAgIGlmKG1heEhlaWdodCAhPSB0aGlzLiNfbWF4SGVpZ2h0KSB7XG4gICAgICB0aGlzLiNfbWF4SGVpZ2h0ID0gbWF4SGVpZ2h0O1xuICAgICAgdGhpcy5yZWFjdG9yLmRpc3BhdGNoRXZlbnQoXCJvbkNoYW5nZVwiLCB0aGlzKTtcbiAgICB9XG4gIH1cblxuICBnZXQgbWluV2lkdGgoKSB7XG4gICAgcmV0dXJuIHRoaXMuI19taW5XaWR0aDtcbiAgfVxuXG4gIGdldCBtaW5IZWlnaHQoKSB7XG4gICAgcmV0dXJuIHRoaXMuI19taW5IZWlnaHQ7XG4gIH1cblxuICBzZXQgbWluV2lkdGgobWluV2lkdGgpIHtcbiAgICBpZihtaW5XaWR0aCAhPSB0aGlzLiNfbWluV2lkdGgpIHtcbiAgICAgIHRoaXMuI19taW5XaWR0aCA9IG1pbldpZHRoO1xuICAgICAgdGhpcy5yZWFjdG9yLmRpc3BhdGNoRXZlbnQoXCJvbkNoYW5nZVwiLCB0aGlzKTtcbiAgICB9XG4gIH1cblxuICBzZXQgbWluSGVpZ2h0KG1pbkhlaWdodCkge1xuICAgIGlmKG1pbkhlaWdodCAhPSB0aGlzLiNfbWluSGVpZ2h0KSB7XG4gICAgICB0aGlzLiNfbWluSGVpZ2h0ID0gbWluSGVpZ2h0O1xuICAgICAgdGhpcy5yZWFjdG9yLmRpc3BhdGNoRXZlbnQoXCJvbkNoYW5nZVwiLCB0aGlzKTtcbiAgICB9XG4gIH1cblxuICB1cGRhdGVJbm5lckhlaWdodCgpIHsgfVxuXG4gIHVwZGF0ZUlubmVyV2lkdGgoKSB7IH1cblxuICBzZXQgY2FudmFzKGNhbnZhcykge1xuICAgIGlmKGNhbnZhcyAhPSB0aGlzLmNhbnZhcykge1xuICAgICAgc3VwZXIuY2FudmFzID0gY2FudmFzO1xuICBcbiAgICAgIHRoaXMuI2NvbXBvbmVudHMuZm9yRWFjaChjb21wb25lbnQgPT4ge1xuICAgICAgICBjb21wb25lbnQuY2FudmFzID0gY2FudmFzO1xuICAgICAgICBpZihjb21wb25lbnQucmVhY3RvcikgY29tcG9uZW50LnJlYWN0b3IuZGlzcGF0Y2hFdmVudChcIm9uQ2hhbmdlXCIsIHRoaXMpO1xuICAgICAgfSk7XG4gIFxuICAgICAgdGhpcy5yZWFjdG9yLmRpc3BhdGNoRXZlbnQoXCJvbkNoYW5nZVwiLCB0aGlzKTtcbiAgICB9XG4gIH1cblxuICBnZXQgY2FudmFzKCkge1xuICAgIHJldHVybiBzdXBlci5jYW52YXM7XG4gIH1cblxuICBnZXRDb21wb25lbnRJZChjb21wb25lbnQpIHtcbiAgICBsZXQgcmVzdWx0ID0gbnVsbDtcblxuICAgIHRoaXMuI2NvbXBvbmVudHMuZm9yRWFjaCgoYywgaSkgPT4ge1xuICAgICAgaWYoYyA9PSBjb21wb25lbnQpIHJlc3VsdCA9IGk7XG4gICAgfSk7XG5cbiAgICByZXR1cm4gcmVzdWx0O1xuICB9XG5cbiAgZ2V0IHNjcm9sbEFyZWFTaXplWCgpIHtcbiAgICByZXR1cm4gdGhpcy5pbm5lcldpZHRoIC0gdGhpcy53aWR0aDtcbiAgfVxuXG4gIGdldCBzY3JvbGxBcmVhU2l6ZVkoKSB7XG4gICAgcmV0dXJuIHRoaXMuaW5uZXJIZWlnaHQgLSB0aGlzLmhlaWdodDtcbiAgfVxuXG4gIGNvbnRyb2xTY3JvbGxpbmcoZGVsdGFYLCBkZWx0YVkpIHtcbiAgICBpZighdGhpcy5zdHlsZS5zY3JvbGxZRGlzYWJsZWQpIHtcbiAgICAgIGlmKHRoaXMuc2Nyb2xsQXJlYVNpemVZIDw9IDApIHtcbiAgICAgICAgdGhpcy5vZmZzZXRTY3JvbGxZID0gMDtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGNvbnN0IHBlcmNlbnRTY3JvbGxiYXJZID0gdGhpcy5vZmZzZXRTY3JvbGxZIC8gdGhpcy5zY3JvbGxBcmVhU2l6ZVk7XG4gIFxuICAgICAgICBpZihwZXJjZW50U2Nyb2xsYmFyWSA8PSAwICYmIGRlbHRhWSA8PSAwKSB7XG4gICAgICAgICAgdGhpcy5vZmZzZXRTY3JvbGxZID0gTWF0aC5taW4oMCwgdGhpcy55KTtcbiAgICAgICAgfSBlbHNlIGlmKHBlcmNlbnRTY3JvbGxiYXJZID4gMSAmJiBkZWx0YVkgPj0gMCkge1xuICAgICAgICAgIHRoaXMub2Zmc2V0U2Nyb2xsWSA9IHRoaXMuc2Nyb2xsQXJlYVNpemVZO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMub2Zmc2V0U2Nyb2xsWSAtPSBkZWx0YVk7XG4gICAgfVxuXG4gICAgaWYoIXRoaXMuc3R5bGUuc2Nyb2xsWERpc2FibGVkKSB7XG4gICAgICBpZih0aGlzLnNjcm9sbEFyZWFTaXplWCA8PSAwKSB7XG4gICAgICAgIHRoaXMub2Zmc2V0U2Nyb2xsWCA9IDA7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBjb25zdCBwZXJjZW50U2Nyb2xsYmFyWCA9IHRoaXMub2Zmc2V0U2Nyb2xsWCAvIHRoaXMuc2Nyb2xsQXJlYVNpemVYO1xuICBcbiAgICAgICAgaWYocGVyY2VudFNjcm9sbGJhclggPD0gMCAmJiBkZWx0YVggPD0gMCkge1xuICAgICAgICAgIHRoaXMub2Zmc2V0U2Nyb2xsWCA9IE1hdGgubWluKDAsIHRoaXMueCk7XG4gICAgICAgIH0gZWxzZSBpZihwZXJjZW50U2Nyb2xsYmFyWCA+IDEgJiYgZGVsdGFYID49IDApIHtcbiAgICAgICAgICB0aGlzLm9mZnNldFNjcm9sbFggPSB0aGlzLnNjcm9sbEFyZWFTaXplWDtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLm9mZnNldFNjcm9sbFggLT0gZGVsdGFYO1xuICAgIH1cbiAgfVxuXG4gIGlzQ29tcG9uZW50VmlzaWJsZShjb21wb25lbnQpIHtcbiAgICBpZihDb25zdGFudHMuU2V0dGluZy5ESVNBQkxFX09QVElNSVpBVElPTlMpIHJldHVybiB0cnVlO1xuICAgIFxuICAgIGlmKGNvbXBvbmVudCBpbnN0YW5jZW9mIENvbXBvbmVudCAmJiAhY29tcG9uZW50LmhpZGRlbikge1xuICAgICAgaWYoIUNvbnN0YW50cy5TZXR0aW5nLkRJU0FCTEVfSVNfQ09NUE9ORU5UX1ZJU0lCTEVfT1BUSU1JWkFUSU9OUyAmJiB0aGlzLnBhcmVudCAmJiB0aGlzLnBhcmVudC5pc0NvbXBvbmVudFZpc2libGUgJiYgIXRoaXMucGFyZW50LmlzQ29tcG9uZW50VmlzaWJsZShjb21wb25lbnQpKSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgIH1cblxuICAgICAgY29uc3Qgd2lkdGggPSB0aGlzLndpZHRoO1xuICAgICAgY29uc3QgaGVpZ2h0ID0gdGhpcy5oZWlnaHQ7XG4gICAgICBjb25zdCBjb21wb25lbnRXaWR0aCA9IGNvbXBvbmVudC53aWR0aDtcbiAgICAgIGNvbnN0IGNvbXBvbmVudEhlaWdodCA9IGNvbXBvbmVudC5oZWlnaHQ7XG4gICAgICBjb25zdCBjYW52YXNXaWR0aCA9ICh0aGlzLmNhbnZhcyAmJiB0aGlzLmNhbnZhcy53aWR0aCkgfHwgd2lkdGg7XG4gICAgICBjb25zdCBjYW52YXNIZWlnaHQgPSAodGhpcy5jYW52YXMgJiYgdGhpcy5jYW52YXMuaGVpZ2h0KSB8fCBoZWlnaHQ7XG5cbiAgICAgIGlmKGNvbXBvbmVudC54ICsgY29tcG9uZW50V2lkdGggPj0gdGhpcy54ICYmIGNvbXBvbmVudC54IDw9IHRoaXMueCArIHdpZHRoICYmIGNvbXBvbmVudC55ICsgY29tcG9uZW50SGVpZ2h0ID49IHRoaXMueSAmJiBjb21wb25lbnQueSA8PSB0aGlzLnkgKyBoZWlnaHQgJiYgY29tcG9uZW50LnggKyBjb21wb25lbnRXaWR0aCA+PSAwICYmIGNvbXBvbmVudC54IDw9IGNhbnZhc1dpZHRoICYmIGNvbXBvbmVudC55ICsgY29tcG9uZW50SGVpZ2h0ID49IDAgJiYgY29tcG9uZW50LnkgPD0gY2FudmFzSGVpZ2h0KSB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIGdldCBpc0N1dHRpbmcoKSB7XG4gICAgcmV0dXJuICFDb25zdGFudHMuU2V0dGluZy5ESVNBQkxFX0NPTlRBSU5FUlNfQ1VUVElORyAmJiAoKCh0aGlzLm1heFdpZHRoICYmIHRoaXMuaW5uZXJXaWR0aCA+IHRoaXMubWF4V2lkdGgpIHx8ICh0aGlzLm1heEhlaWdodCAmJiB0aGlzLmlubmVySGVpZ2h0ID4gdGhpcy5tYXhIZWlnaHQpKSkgJiYgdGhpcy5jYW52YXNUbXAgIT0gbnVsbDtcbiAgfVxuXG4gIGdldCBkZWZhdWx0U3R5bGUoKSB7XG4gICAgcmV0dXJuIG5ldyBTdHlsZSh7XG4gICAgICBcInBhZGRpbmdcIjogMCxcbiAgICAgIFwic3BhY2VCZXR3ZWVuQ29tcG9uZW50c1wiOiBDb25zdGFudHMuU2V0dGluZy5ERUZBVUxUX1NQQUNJTkdcbiAgICB9KTtcbiAgfVxufSIsIi8qXG4gKiBDb3B5cmlnaHQgKEMpIDIwMjAgRWxpYXN0aWsgKGVsaWFzdGlrc29mdHMuY29tKVxuICpcbiAqIFRoaXMgZmlsZSBpcyBwYXJ0IG9mIFwiSlNHYW1lVG9vbHNcIi5cbiAqXG4gKiBcIkpTR2FtZVRvb2xzXCIgaXMgZnJlZSBzb2Z0d2FyZTogeW91IGNhbiByZWRpc3RyaWJ1dGUgaXQgYW5kL29yIG1vZGlmeVxuICogaXQgdW5kZXIgdGhlIHRlcm1zIG9mIHRoZSBHTlUgR2VuZXJhbCBQdWJsaWMgTGljZW5zZSBhcyBwdWJsaXNoZWQgYnlcbiAqIHRoZSBGcmVlIFNvZnR3YXJlIEZvdW5kYXRpb24sIGVpdGhlciB2ZXJzaW9uIDMgb2YgdGhlIExpY2Vuc2UsIG9yXG4gKiAoYXQgeW91ciBvcHRpb24pIGFueSBsYXRlciB2ZXJzaW9uLlxuICpcbiAqIFwiSlNHYW1lVG9vbHNcIiBpcyBkaXN0cmlidXRlZCBpbiB0aGUgaG9wZSB0aGF0IGl0IHdpbGwgYmUgdXNlZnVsLFxuICogYnV0IFdJVEhPVVQgQU5ZIFdBUlJBTlRZOyB3aXRob3V0IGV2ZW4gdGhlIGltcGxpZWQgd2FycmFudHkgb2ZcbiAqIE1FUkNIQU5UQUJJTElUWSBvciBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRS4gIFNlZSB0aGVcbiAqIEdOVSBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlIGZvciBtb3JlIGRldGFpbHMuXG4gKlxuICogWW91IHNob3VsZCBoYXZlIHJlY2VpdmVkIGEgY29weSBvZiB0aGUgR05VIEdlbmVyYWwgUHVibGljIExpY2Vuc2VcbiAqIGFsb25nIHdpdGggXCJKU0dhbWVUb29sc1wiLiAgSWYgbm90LCBzZWUgPGh0dHA6Ly93d3cuZ251Lm9yZy9saWNlbnNlcy8+LlxuICovXG5pbXBvcnQgQ29tcG9uZW50IGZyb20gXCIuL0NvbXBvbmVudFwiO1xuaW1wb3J0IENvbnN0YW50cyBmcm9tIFwiLi9Db25zdGFudHNcIjtcbmltcG9ydCBVdGlscyBmcm9tIFwiLi9VdGlsc1wiO1xuaW1wb3J0IFN0eWxlIGZyb20gXCIuL1N0eWxlXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIENyb3NzIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgc2VsZWN0YWJsZSA9IGZhbHNlO1xuXG4gIGNvbnN0cnVjdG9yKHgsIHksIHdpZHRoLCBoZWlnaHQsIHN0eWxlKSB7XG4gICAgc3VwZXIoeCwgeSwgd2lkdGgsIGhlaWdodCwgc3R5bGUpO1xuICB9XG5cbiAgZHJhdyhjb250ZXh0KSB7XG4gICAgaWYodGhpcy5oaWRkZW4pIHJldHVybjtcbiAgICBzdXBlci5kcmF3KGNvbnRleHQpO1xuXG4gICAgY29uc3QgY2FudmFzID0gY29udGV4dC5jYW52YXM7XG4gICAgY29uc3QgY3R4ID0gY2FudmFzLmdldENvbnRleHQoXCIyZFwiKTtcbiAgICBcbiAgICBVdGlscy5kcmF3Q3Jvc3MoY3R4LCB0aGlzLngsIHRoaXMueSwgdGhpcy53aWR0aCwgdGhpcy5oZWlnaHQsIHRoaXMuc3R5bGUubGluZVdpZHRoLCB0aGlzLnN0eWxlLmNvbG9yLCB0aGlzLnN0eWxlLmxpbmVDYXApO1xuXG4gICAgdGhpcy5pbml0ID0gdHJ1ZTtcbiAgfVxuXG4gIGdldCB3aWR0aCgpIHtcbiAgICByZXR1cm4gc3VwZXIud2lkdGggKyB0aGlzLnN0eWxlLmxpbmVXaWR0aDtcbiAgfVxuXG4gIGdldCBoZWlnaHQoKSB7XG4gICAgcmV0dXJuIHN1cGVyLmhlaWdodCArIHRoaXMuc3R5bGUubGluZVdpZHRoO1xuICB9XG5cbiAgc2V0IHdpZHRoKHdpZHRoKSB7XG4gICAgc3VwZXIud2lkdGggPSB3aWR0aDtcbiAgfVxuXG4gIHNldCBoZWlnaHQoaGVpZ2h0KSB7XG4gICAgc3VwZXIuaGVpZ2h0ID0gaGVpZ2h0O1xuICB9XG5cbiAgZ2V0IGRlZmF1bHRTdHlsZSgpIHtcbiAgICByZXR1cm4gbmV3IFN0eWxlKHtcbiAgICAgIFwibGluZVdpZHRoXCI6IENvbnN0YW50cy5TZXR0aW5nLkNST1NTX0RFRkFVTFRfTElORV9TSVpFLFxuICAgICAgXCJjb2xvclwiOiBDb25zdGFudHMuU2V0dGluZy5DUk9TU19ERUZBVUxUX0NPTE9SLFxuICAgICAgXCJsaW5lQ2FwXCI6IENvbnN0YW50cy5TZXR0aW5nLkNST1NTX0RFRkFVTFRfTElORV9DQVBcbiAgICB9KTtcbiAgfVxufSIsIi8qXG4gKiBDb3B5cmlnaHQgKEMpIDIwMjAgRWxpYXN0aWsgKGVsaWFzdGlrc29mdHMuY29tKVxuICpcbiAqIFRoaXMgZmlsZSBpcyBwYXJ0IG9mIFwiSlNHYW1lVG9vbHNcIi5cbiAqXG4gKiBcIkpTR2FtZVRvb2xzXCIgaXMgZnJlZSBzb2Z0d2FyZTogeW91IGNhbiByZWRpc3RyaWJ1dGUgaXQgYW5kL29yIG1vZGlmeVxuICogaXQgdW5kZXIgdGhlIHRlcm1zIG9mIHRoZSBHTlUgR2VuZXJhbCBQdWJsaWMgTGljZW5zZSBhcyBwdWJsaXNoZWQgYnlcbiAqIHRoZSBGcmVlIFNvZnR3YXJlIEZvdW5kYXRpb24sIGVpdGhlciB2ZXJzaW9uIDMgb2YgdGhlIExpY2Vuc2UsIG9yXG4gKiAoYXQgeW91ciBvcHRpb24pIGFueSBsYXRlciB2ZXJzaW9uLlxuICpcbiAqIFwiSlNHYW1lVG9vbHNcIiBpcyBkaXN0cmlidXRlZCBpbiB0aGUgaG9wZSB0aGF0IGl0IHdpbGwgYmUgdXNlZnVsLFxuICogYnV0IFdJVEhPVVQgQU5ZIFdBUlJBTlRZOyB3aXRob3V0IGV2ZW4gdGhlIGltcGxpZWQgd2FycmFudHkgb2ZcbiAqIE1FUkNIQU5UQUJJTElUWSBvciBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRS4gIFNlZSB0aGVcbiAqIEdOVSBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlIGZvciBtb3JlIGRldGFpbHMuXG4gKlxuICogWW91IHNob3VsZCBoYXZlIHJlY2VpdmVkIGEgY29weSBvZiB0aGUgR05VIEdlbmVyYWwgUHVibGljIExpY2Vuc2VcbiAqIGFsb25nIHdpdGggXCJKU0dhbWVUb29sc1wiLiAgSWYgbm90LCBzZWUgPGh0dHA6Ly93d3cuZ251Lm9yZy9saWNlbnNlcy8+LlxuICovXG5leHBvcnQgZGVmYXVsdCB7XG4gIGVhc2VJbkN1YmljKHgpIHtcbiAgICByZXR1cm4geCAqIHggKiB4O1xuICB9LFxuICBlYXNlT3V0Qm91bmNlKHgpIHtcbiAgICBjb25zdCBuMSA9IDcuNTYyNTtcbiAgICBjb25zdCBkMSA9IDIuNzU7XG4gICAgXG4gICAgaWYoeCA8IDEgLyBkMSkge1xuICAgICAgcmV0dXJuIG4xICogeCAqIHg7XG4gICAgfSBlbHNlIGlmKHggPCAyIC8gZDEpIHtcbiAgICAgIHJldHVybiBuMSAqICh4IC09IDEuNSAvIGQxKSAqIHggKyAwLjc1O1xuICAgIH0gZWxzZSBpZih4IDwgMi41IC8gZDEpIHtcbiAgICAgIHJldHVybiBuMSAqICh4IC09IDIuMjUgLyBkMSkgKiB4ICsgMC45Mzc1O1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gbjEgKiAoeCAtPSAyLjYyNSAvIGQxKSAqIHggKyAwLjk4NDM3NTtcbiAgICB9XG4gIH0sXG4gIGVhc2VJbk91dEN1YmljKHgpIHtcbiAgICByZXR1cm4geCA8IDAuNSA/IDQgKiB4ICogeCAqIHggOiAxIC0gTWF0aC5wb3coLTIgKiB4ICsgMiwgMykgLyAyO1xuICB9LFxuICBlYXNlSW5PdXRTaW5lKHgpIHtcbiAgICByZXR1cm4gLShNYXRoLmNvcyhNYXRoLlBJICogeCkgLSAxKSAvIDI7XG4gIH0sXG4gIGVhc2VJbk91dFF1aW50KHgpIHtcbiAgICByZXR1cm4geCA8IDAuNSA/IDE2ICogeCAqIHggKiB4ICogeCAqIHggOiAxIC0gTWF0aC5wb3coLTIgKiB4ICsgMiwgNSkgLyAyO1xuICB9LFxuICBlYXNlSW5PdXRDaXJjKHgpIHtcbiAgICByZXR1cm4geCA8IDAuNSA/ICgxIC0gTWF0aC5zcXJ0KDEgLSBNYXRoLnBvdygyICogeCwgMikpKSAvIDIgOiAoTWF0aC5zcXJ0KDEgLSBNYXRoLnBvdygtMiAqIHggKyAyLCAyKSkgKyAxKSAvIDI7XG4gIH0sXG4gIGVhc2VJbk91dFF1YWQoeCkge1xuICAgIHJldHVybiB4IDwgMC41ID8gMiAqIHggKiB4IDogMSAtIE1hdGgucG93KC0yICogeCArIDIsIDIpIC8gMjtcbiAgfSxcbiAgZWFzZUluT3V0UXVhcnQoeCkge1xuICAgIHJldHVybiB4IDwgMC41ID8gOCAqIHggKiB4ICogeCAqIHggOiAxIC0gTWF0aC5wb3coLTIgKiB4ICsgMiwgNCkgLyAyO1xuICB9LFxuICBlYXNlSW5PdXRFeHBvKHgpIHtcbiAgICByZXR1cm4geCA9PT0gMCA/IDAgOiB4ID09PSAxID8gMSA6IHggPCAwLjUgPyBNYXRoLnBvdygyLCAyMCAqIHggLSAxMCkgLyAyIDogKDIgLSBNYXRoLnBvdygyLCAtMjAgKiB4ICsgMTApKSAvIDI7XG4gIH0sXG4gIGVhc2VJbk91dEJhY2soeCkge1xuICAgIGNvbnN0IGMxID0gMS43MDE1ODtcbiAgICBjb25zdCBjMiA9IGMxICogMS41MjU7XG4gICAgXG4gICAgcmV0dXJuIHggPCAwLjUgPyAoTWF0aC5wb3coMiAqIHgsIDIpICogKChjMiArIDEpICogMiAqIHggLSBjMikpIC8gMiA6IChNYXRoLnBvdygyICogeCAtIDIsIDIpICogKChjMiArIDEpICogKHggKiAyIC0gMikgKyBjMikgKyAyKSAvIDI7XG4gIH1cbn07IiwiLypcbiAqIENvcHlyaWdodCAoQykgMjAyMCBFbGlhc3RpayAoZWxpYXN0aWtzb2Z0cy5jb20pXG4gKlxuICogVGhpcyBmaWxlIGlzIHBhcnQgb2YgXCJKU0dhbWVUb29sc1wiLlxuICpcbiAqIFwiSlNHYW1lVG9vbHNcIiBpcyBmcmVlIHNvZnR3YXJlOiB5b3UgY2FuIHJlZGlzdHJpYnV0ZSBpdCBhbmQvb3IgbW9kaWZ5XG4gKiBpdCB1bmRlciB0aGUgdGVybXMgb2YgdGhlIEdOVSBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlIGFzIHB1Ymxpc2hlZCBieVxuICogdGhlIEZyZWUgU29mdHdhcmUgRm91bmRhdGlvbiwgZWl0aGVyIHZlcnNpb24gMyBvZiB0aGUgTGljZW5zZSwgb3JcbiAqIChhdCB5b3VyIG9wdGlvbikgYW55IGxhdGVyIHZlcnNpb24uXG4gKlxuICogXCJKU0dhbWVUb29sc1wiIGlzIGRpc3RyaWJ1dGVkIGluIHRoZSBob3BlIHRoYXQgaXQgd2lsbCBiZSB1c2VmdWwsXG4gKiBidXQgV0lUSE9VVCBBTlkgV0FSUkFOVFk7IHdpdGhvdXQgZXZlbiB0aGUgaW1wbGllZCB3YXJyYW50eSBvZlxuICogTUVSQ0hBTlRBQklMSVRZIG9yIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFLiAgU2VlIHRoZVxuICogR05VIEdlbmVyYWwgUHVibGljIExpY2Vuc2UgZm9yIG1vcmUgZGV0YWlscy5cbiAqXG4gKiBZb3Ugc2hvdWxkIGhhdmUgcmVjZWl2ZWQgYSBjb3B5IG9mIHRoZSBHTlUgR2VuZXJhbCBQdWJsaWMgTGljZW5zZVxuICogYWxvbmcgd2l0aCBcIkpTR2FtZVRvb2xzXCIuICBJZiBub3QsIHNlZSA8aHR0cDovL3d3dy5nbnUub3JnL2xpY2Vuc2VzLz4uXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEV2ZW50IHtcbiAgY29uc3RydWN0b3IobmFtZSkge1xuICAgIHRoaXMubmFtZSA9IG5hbWU7XG4gICAgdGhpcy5jYWxsYmFja3MgPSBbXTtcbiAgfVxuXG4gIHJlZ2lzdGVyQ2FsbGJhY2soY2FsbGJhY2spIHtcbiAgICB0aGlzLmNhbGxiYWNrcy5wdXNoKGNhbGxiYWNrKTtcbiAgfVxuXG4gIHJlbW92ZUNhbGxiYWNrKGNhbGxiYWNrKSB7XG4gICAgdGhpcy5jYWxsYmFja3MuZmlsdGVyKGN1cnJlbnQgPT4gY3VycmVudCAhPSBjYWxsYmFjayk7XG4gIH1cblxuICByZW1vdmVBbGxDYWxsYmFja3MoKSB7XG4gICAgdGhpcy5jYWxsYmFja3MgPSBbXTtcbiAgfVxufSIsIi8qXG4gKiBDb3B5cmlnaHQgKEMpIDIwMjAgRWxpYXN0aWsgKGVsaWFzdGlrc29mdHMuY29tKVxuICpcbiAqIFRoaXMgZmlsZSBpcyBwYXJ0IG9mIFwiSlNHYW1lVG9vbHNcIi5cbiAqXG4gKiBcIkpTR2FtZVRvb2xzXCIgaXMgZnJlZSBzb2Z0d2FyZTogeW91IGNhbiByZWRpc3RyaWJ1dGUgaXQgYW5kL29yIG1vZGlmeVxuICogaXQgdW5kZXIgdGhlIHRlcm1zIG9mIHRoZSBHTlUgR2VuZXJhbCBQdWJsaWMgTGljZW5zZSBhcyBwdWJsaXNoZWQgYnlcbiAqIHRoZSBGcmVlIFNvZnR3YXJlIEZvdW5kYXRpb24sIGVpdGhlciB2ZXJzaW9uIDMgb2YgdGhlIExpY2Vuc2UsIG9yXG4gKiAoYXQgeW91ciBvcHRpb24pIGFueSBsYXRlciB2ZXJzaW9uLlxuICpcbiAqIFwiSlNHYW1lVG9vbHNcIiBpcyBkaXN0cmlidXRlZCBpbiB0aGUgaG9wZSB0aGF0IGl0IHdpbGwgYmUgdXNlZnVsLFxuICogYnV0IFdJVEhPVVQgQU5ZIFdBUlJBTlRZOyB3aXRob3V0IGV2ZW4gdGhlIGltcGxpZWQgd2FycmFudHkgb2ZcbiAqIE1FUkNIQU5UQUJJTElUWSBvciBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRS4gIFNlZSB0aGVcbiAqIEdOVSBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlIGZvciBtb3JlIGRldGFpbHMuXG4gKlxuICogWW91IHNob3VsZCBoYXZlIHJlY2VpdmVkIGEgY29weSBvZiB0aGUgR05VIEdlbmVyYWwgUHVibGljIExpY2Vuc2VcbiAqIGFsb25nIHdpdGggXCJKU0dhbWVUb29sc1wiLiAgSWYgbm90LCBzZWUgPGh0dHA6Ly93d3cuZ251Lm9yZy9saWNlbnNlcy8+LlxuICovXG5pbXBvcnQgTGFiZWwgZnJvbSBcIi4vTGFiZWxcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRlBTTWV0ZXIgZXh0ZW5kcyBMYWJlbCB7XG4gIHNlbGVjdGFibGUgPSBmYWxzZTtcblxuICBjb25zdHJ1Y3RvcihkaXNwbGF5RnJhbWVzLCB4LCB5LCBzdHlsZSkge1xuICAgIHN1cGVyKG51bGwsIHgsIHksIHN0eWxlKTtcblxuICAgIHRoaXMuZGlzcGxheUZyYW1lcyA9IGRpc3BsYXlGcmFtZXMgfHwgZmFsc2U7XG4gICAgdGhpcy5mcmFtZXMgPSAwO1xuICAgIHRoaXMubGFzdEZyYW1lID0gMDtcbiAgICB0aGlzLmN1cnJlbnRGUFMgPSAwO1xuXG4gICAgdGhpcy5pbnRlcnZhbENvdW50RlBTID0gc2V0SW50ZXJ2YWwoKCkgPT4gdGhpcy5jb3VudEZQUygpLCAxMDAwKTtcbiAgfVxuXG4gIGRyYXcoY29udGV4dCkge1xuICAgIGlmKHRoaXMuaGlkZGVuKSByZXR1cm47XG4gICAgdGhpcy50ZXh0ID0gXCJGUFM6IFwiICsgdGhpcy5jdXJyZW50RlBTICsgKHRoaXMuZGlzcGxheUZyYW1lcyA/IFwiIC8gRnJhbWVzOiBcIiArIHRoaXMuZnJhbWVzIDogXCJcIik7XG4gICAgc3VwZXIuZHJhdyhjb250ZXh0KTtcbiAgICB0aGlzLmZyYW1lcysrO1xuICB9XG5cbiAgY291bnRGUFMoKSB7XG4gICAgaWYodGhpcy5sYXN0RnJhbWUgPiAwKSB0aGlzLmN1cnJlbnRGUFMgPSB0aGlzLmZyYW1lcyAtIHRoaXMubGFzdEZyYW1lO1xuICAgIHRoaXMubGFzdEZyYW1lID0gdGhpcy5mcmFtZXM7XG4gIH1cbn0iLCIvKlxuICogQ29weXJpZ2h0IChDKSAyMDIwIEVsaWFzdGlrIChlbGlhc3Rpa3NvZnRzLmNvbSlcbiAqXG4gKiBUaGlzIGZpbGUgaXMgcGFydCBvZiBcIkpTR2FtZVRvb2xzXCIuXG4gKlxuICogXCJKU0dhbWVUb29sc1wiIGlzIGZyZWUgc29mdHdhcmU6IHlvdSBjYW4gcmVkaXN0cmlidXRlIGl0IGFuZC9vciBtb2RpZnlcbiAqIGl0IHVuZGVyIHRoZSB0ZXJtcyBvZiB0aGUgR05VIEdlbmVyYWwgUHVibGljIExpY2Vuc2UgYXMgcHVibGlzaGVkIGJ5XG4gKiB0aGUgRnJlZSBTb2Z0d2FyZSBGb3VuZGF0aW9uLCBlaXRoZXIgdmVyc2lvbiAzIG9mIHRoZSBMaWNlbnNlLCBvclxuICogKGF0IHlvdXIgb3B0aW9uKSBhbnkgbGF0ZXIgdmVyc2lvbi5cbiAqXG4gKiBcIkpTR2FtZVRvb2xzXCIgaXMgZGlzdHJpYnV0ZWQgaW4gdGhlIGhvcGUgdGhhdCBpdCB3aWxsIGJlIHVzZWZ1bCxcbiAqIGJ1dCBXSVRIT1VUIEFOWSBXQVJSQU5UWTsgd2l0aG91dCBldmVuIHRoZSBpbXBsaWVkIHdhcnJhbnR5IG9mXG4gKiBNRVJDSEFOVEFCSUxJVFkgb3IgRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UuICBTZWUgdGhlXG4gKiBHTlUgR2VuZXJhbCBQdWJsaWMgTGljZW5zZSBmb3IgbW9yZSBkZXRhaWxzLlxuICpcbiAqIFlvdSBzaG91bGQgaGF2ZSByZWNlaXZlZCBhIGNvcHkgb2YgdGhlIEdOVSBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlXG4gKiBhbG9uZyB3aXRoIFwiSlNHYW1lVG9vbHNcIi4gIElmIG5vdCwgc2VlIDxodHRwOi8vd3d3LmdudS5vcmcvbGljZW5zZXMvPi5cbiAqL1xuaW1wb3J0IFV0aWxzIGZyb20gXCIuL1V0aWxzXCI7XG5pbXBvcnQgQ29tcG9uZW50IGZyb20gXCIuL0NvbXBvbmVudFwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBJbWFnZUNvbnRhaW5lciBleHRlbmRzIENvbXBvbmVudCB7XG4gIHNlbGVjdGFibGUgPSBmYWxzZTtcblxuICBjb25zdHJ1Y3RvcihpbWFnZSwgeCwgeSwgd2lkdGgsIGhlaWdodCwgc3R5bGUsIGltYWdlTG9hZGVyKSB7XG4gICAgc3VwZXIoeCwgeSwgd2lkdGgsIGhlaWdodCwgc3R5bGUpO1xuICAgIHRoaXMuaW1hZ2U7XG4gICAgdGhpcy5pbWdTcmM7XG4gICAgdGhpcy5pbWFnZUxvYWRlciA9IGltYWdlTG9hZGVyO1xuXG4gICAgaWYoaW1hZ2UgaW5zdGFuY2VvZiBJbWFnZSkge1xuICAgICAgdGhpcy5pbWFnZSA9IGltYWdlO1xuICAgICAgdGhpcy5pbWdTcmMgPSBpbWFnZS5zcmM7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuaW1nU3JjID0gaW1hZ2U7XG4gICAgfVxuICB9XG5cbiAgZHJhdyhjb250ZXh0KSB7XG4gICAgaWYodGhpcy5oaWRkZW4pIHJldHVybjtcbiAgICBzdXBlci5kcmF3KGNvbnRleHQpO1xuICAgIFxuICAgIGNvbnN0IGNhbnZhcyA9IGNvbnRleHQuY2FudmFzO1xuICAgIGNvbnN0IGN0eCA9IGNhbnZhcy5nZXRDb250ZXh0KFwiMmRcIik7XG4gICAgY3R4LnNhdmUoKTtcbiAgICBcbiAgICBpZih0aGlzLmltZ1NyYyAhPSBudWxsICYmIHRoaXMuaW1hZ2VMb2FkZXIgIT0gbnVsbCkge1xuICAgICAgdGhpcy5sb2FkSW1hZ2UodGhpcy5pbWFnZUxvYWRlcik7XG4gICAgfVxuXG4gICAgaWYodGhpcy5pbWFnZSAhPSBudWxsKSB7XG4gICAgICB0aGlzLmRyYXdJbWFnZShjdHgpO1xuICAgIH1cblxuICAgIGN0eC5yZXN0b3JlKCk7XG4gIH1cblxuICBkcmF3SW1hZ2UoY3R4KSB7XG4gICAgVXRpbHMuZHJhd0ltYWdlKGN0eCwgdGhpcy5pbWFnZSwgTWF0aC5yb3VuZCh0aGlzLngpLCBNYXRoLnJvdW5kKHRoaXMueSksIE1hdGgucm91bmQodGhpcy53aWR0aCksIE1hdGgucm91bmQodGhpcy5oZWlnaHQpKTtcbiAgfVxuXG4gIGdldCBzaXplcygpIHtcbiAgICBsZXQgaW1nV2lkdGggPSBzdXBlci53aWR0aDtcbiAgICBsZXQgaW1nSGVpZ2h0ID0gc3VwZXIuaGVpZ2h0O1xuXG4gICAgaWYodGhpcy5pbWFnZUxvYWRlcikge1xuICAgICAgdGhpcy5sb2FkSW1hZ2UodGhpcy5pbWFnZUxvYWRlcik7XG4gICAgfVxuICAgIFxuICAgIGlmKHRoaXMuaW1hZ2UgJiYgKHRoaXMuaW1hZ2Uud2lkdGggPiBzdXBlci53aWR0aCB8fCB0aGlzLmltYWdlLmhlaWdodCA+IHN1cGVyLmhlaWdodCkpIHtcbiAgICAgIGNvbnN0IGFzcGVjdFJhdGlvID0gdGhpcy5pbWFnZS53aWR0aCAvIHRoaXMuaW1hZ2UuaGVpZ2h0O1xuICAgICAgaW1nV2lkdGggPSBNYXRoLmZsb29yKHN1cGVyLndpZHRoIC8gMS4yNSk7XG4gICAgICBpbWdIZWlnaHQgPSBNYXRoLmZsb29yKGltZ1dpZHRoIC8gYXNwZWN0UmF0aW8pO1xuICAgIH1cblxuICAgIHJldHVybiB7XG4gICAgICB3aWR0aDogaW1nV2lkdGgsXG4gICAgICBoZWlnaHQ6IGltZ0hlaWdodFxuICAgIH1cbiAgfVxuXG4gIGdldCBoZWlnaHQoKSB7XG4gICAgcmV0dXJuIHRoaXMuc2l6ZXMuaGVpZ2h0O1xuICB9XG5cbiAgZ2V0IHdpZHRoKCkge1xuICAgIHJldHVybiB0aGlzLnNpemVzLndpZHRoO1xuICB9XG5cbiAgc2V0IHdpZHRoKHdpZHRoKSB7XG4gICAgc3VwZXIud2lkdGggPSB3aWR0aDtcbiAgfVxuXG4gIHNldCBoZWlnaHQoaGVpZ2h0KSB7XG4gICAgc3VwZXIuaGVpZ2h0ID0gaGVpZ2h0O1xuICB9XG4gIFxuICBsb2FkSW1hZ2UoaW1hZ2VMb2FkZXIpIHtcbiAgICB0aGlzLmltYWdlID0gaW1hZ2VMb2FkZXIuZ2V0KHRoaXMuaW1nU3JjKTtcbiAgfVxufSIsIi8qXG4gKiBDb3B5cmlnaHQgKEMpIDIwMjAgRWxpYXN0aWsgKGVsaWFzdGlrc29mdHMuY29tKVxuICpcbiAqIFRoaXMgZmlsZSBpcyBwYXJ0IG9mIFwiSlNHYW1lVG9vbHNcIi5cbiAqXG4gKiBcIkpTR2FtZVRvb2xzXCIgaXMgZnJlZSBzb2Z0d2FyZTogeW91IGNhbiByZWRpc3RyaWJ1dGUgaXQgYW5kL29yIG1vZGlmeVxuICogaXQgdW5kZXIgdGhlIHRlcm1zIG9mIHRoZSBHTlUgR2VuZXJhbCBQdWJsaWMgTGljZW5zZSBhcyBwdWJsaXNoZWQgYnlcbiAqIHRoZSBGcmVlIFNvZnR3YXJlIEZvdW5kYXRpb24sIGVpdGhlciB2ZXJzaW9uIDMgb2YgdGhlIExpY2Vuc2UsIG9yXG4gKiAoYXQgeW91ciBvcHRpb24pIGFueSBsYXRlciB2ZXJzaW9uLlxuICpcbiAqIFwiSlNHYW1lVG9vbHNcIiBpcyBkaXN0cmlidXRlZCBpbiB0aGUgaG9wZSB0aGF0IGl0IHdpbGwgYmUgdXNlZnVsLFxuICogYnV0IFdJVEhPVVQgQU5ZIFdBUlJBTlRZOyB3aXRob3V0IGV2ZW4gdGhlIGltcGxpZWQgd2FycmFudHkgb2ZcbiAqIE1FUkNIQU5UQUJJTElUWSBvciBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRS4gIFNlZSB0aGVcbiAqIEdOVSBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlIGZvciBtb3JlIGRldGFpbHMuXG4gKlxuICogWW91IHNob3VsZCBoYXZlIHJlY2VpdmVkIGEgY29weSBvZiB0aGUgR05VIEdlbmVyYWwgUHVibGljIExpY2Vuc2VcbiAqIGFsb25nIHdpdGggXCJKU0dhbWVUb29sc1wiLiAgSWYgbm90LCBzZWUgPGh0dHA6Ly93d3cuZ251Lm9yZy9saWNlbnNlcy8+LlxuICovXG5pbXBvcnQgVXRpbHMgZnJvbSBcIi4vVXRpbHNcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgSW1hZ2VMb2FkZXIge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICB0aGlzLmltYWdlcyA9IHt9O1xuICAgIHRoaXMuaW1hZ2VzUmVzaXplZCA9IHt9O1xuICAgIHRoaXMudHJpZWRMb2FkaW5nID0gMDtcbiAgICB0aGlzLmhhc0Vycm9yID0gZmFsc2U7XG4gICAgdGhpcy5uYkltYWdlc1RvTG9hZCA9IDE7XG4gICAgdGhpcy5maXJzdEltYWdlID0gdHJ1ZTtcbiAgfVxuXG4gIGxvYWQoaW1nLCBmdW5jKSB7XG4gICAgaWYodGhpcy5maXJzdEltYWdlKSB7XG4gICAgICB0aGlzLm5iSW1hZ2VzVG9Mb2FkID0gaW1nLmxlbmd0aDtcbiAgICAgIHRoaXMuZmlyc3RJbWFnZSA9IGZhbHNlO1xuICAgIH1cbiAgICBcbiAgICBpZihpbWcubGVuZ3RoID4gMCkge1xuICAgICAgdGhpcy5sb2FkSW1hZ2UoaW1nWzBdLCByZXN1bHQgPT4ge1xuICAgICAgICBpZihyZXN1bHQgPT0gdHJ1ZSkge1xuICAgICAgICAgIGltZy5zaGlmdCgpO1xuICAgICAgICAgIHRoaXMubG9hZChpbWcsIGZ1bmMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHRoaXMuaGFzRXJyb3IgPSB0cnVlO1xuICAgICAgICAgIHJldHVybiBmdW5jKCk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gZnVuYygpO1xuICAgIH1cbiAgfVxuXG4gIGxvYWRJbWFnZShzcmMsIGZ1bmMpIHtcbiAgICB0aGlzLnRyaWVkTG9hZGluZysrO1xuICBcbiAgICBjb25zdCBpbWFnZSA9IG5ldyBJbWFnZSgpO1xuICAgIGltYWdlLnNyYyA9IHNyYztcbiAgXG4gICAgaW1hZ2Uub25sb2FkID0gKCkgPT4ge1xuICAgICAgaWYodGhpcy5pbWFnZXMgIT0gbnVsbCkge1xuICAgICAgICB0aGlzLmltYWdlc1tzcmNdID0gaW1hZ2U7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gZnVuYyhmYWxzZSk7XG4gICAgICB9XG4gIFxuICAgICAgdGhpcy50cmllZExvYWRpbmcgPSAwO1xuICAgICAgcmV0dXJuIGZ1bmModHJ1ZSk7XG4gICAgfTtcbiAgXG4gICAgaW1hZ2Uub25lcnJvciA9ICgpID0+IHtcbiAgICAgIGlmKHRoaXMudHJpZWRMb2FkaW5nID49IDUpIHtcbiAgICAgICAgaWYodGhpcy5pbWFnZXMgIT0gbnVsbCkge1xuICAgICAgICAgIHRoaXMuaW1hZ2VzW3NyY10gPSBpbWFnZTtcbiAgICAgICAgfVxuICBcbiAgICAgICAgdGhpcy50cmllZExvYWRpbmcgPSAwO1xuICAgICAgICByZXR1cm4gZnVuYyhmYWxzZSk7XG4gICAgICB9XG4gIFxuICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgIHRoaXMubG9hZEltYWdlKHNyYywgZnVuYyk7XG4gICAgICB9LCAyNTApO1xuICAgIH1cbiAgfVxuXG4gIGdldChzcmMsIHdpZHRoLCBoZWlnaHQpIHtcbiAgICBpZih0aGlzLmltYWdlcyAhPSBudWxsICYmIHRoaXMuaW1hZ2VzLmhhc093blByb3BlcnR5KHNyYykpIHtcbiAgICAgIGNvbnN0IGltYWdlID0gdGhpcy5pbWFnZXNbc3JjXTtcblxuICAgICAgaWYoKHdpZHRoIHx8IGhlaWdodCkgJiYgKGltYWdlLndpZHRoICE9IHdpZHRoIHx8IGltYWdlLmhlaWdodCAhPSBoZWlnaHQpKSB7XG4gICAgICAgIGNvbnN0IHcgPSBNYXRoLnJvdW5kKHdpZHRoKTtcbiAgICAgICAgY29uc3QgaCA9IE1hdGgucm91bmQoaGVpZ2h0KTtcbiAgICAgICAgY29uc3QgaWQgPSBzcmMgKyBcIkBcIiArIHcgKyBcIi1cIiArIGg7XG5cbiAgICAgICAgaWYoIXRoaXMuaW1hZ2VzUmVzaXplZC5oYXNPd25Qcm9wZXJ0eShpZCkpIHtcbiAgICAgICAgICBjb25zdCBjYW52YXNUbXAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiY2FudmFzXCIpO1xuICAgICAgICAgIGNvbnN0IGN0eCA9IGNhbnZhc1RtcC5nZXRDb250ZXh0KFwiMmRcIik7XG4gICAgICAgICAgY2FudmFzVG1wLndpZHRoID0gdztcbiAgICAgICAgICBjYW52YXNUbXAuaGVpZ2h0ID0gaDtcblxuICAgICAgICAgIFV0aWxzLmRyYXdJbWFnZShjdHgsIGltYWdlLCAwLCAwLCB3LCBoLCAwLCAwLCBpbWFnZS53aWR0aCwgaW1hZ2UuaGVpZ2h0KTtcbiAgICAgICAgICB0aGlzLmltYWdlc1Jlc2l6ZWRbaWRdID0gY2FudmFzVG1wO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHRoaXMuaW1hZ2VzUmVzaXplZFtpZF07XG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gaW1hZ2U7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cbiAgfVxuXG4gIGNsZWFyKCkge1xuICAgIHRoaXMuaW1hZ2VzID0gbnVsbDtcbiAgfVxufSIsIi8qXG4gKiBDb3B5cmlnaHQgKEMpIDIwMjAgRWxpYXN0aWsgKGVsaWFzdGlrc29mdHMuY29tKVxuICpcbiAqIFRoaXMgZmlsZSBpcyBwYXJ0IG9mIFwiSlNHYW1lVG9vbHNcIi5cbiAqXG4gKiBcIkpTR2FtZVRvb2xzXCIgaXMgZnJlZSBzb2Z0d2FyZTogeW91IGNhbiByZWRpc3RyaWJ1dGUgaXQgYW5kL29yIG1vZGlmeVxuICogaXQgdW5kZXIgdGhlIHRlcm1zIG9mIHRoZSBHTlUgR2VuZXJhbCBQdWJsaWMgTGljZW5zZSBhcyBwdWJsaXNoZWQgYnlcbiAqIHRoZSBGcmVlIFNvZnR3YXJlIEZvdW5kYXRpb24sIGVpdGhlciB2ZXJzaW9uIDMgb2YgdGhlIExpY2Vuc2UsIG9yXG4gKiAoYXQgeW91ciBvcHRpb24pIGFueSBsYXRlciB2ZXJzaW9uLlxuICpcbiAqIFwiSlNHYW1lVG9vbHNcIiBpcyBkaXN0cmlidXRlZCBpbiB0aGUgaG9wZSB0aGF0IGl0IHdpbGwgYmUgdXNlZnVsLFxuICogYnV0IFdJVEhPVVQgQU5ZIFdBUlJBTlRZOyB3aXRob3V0IGV2ZW4gdGhlIGltcGxpZWQgd2FycmFudHkgb2ZcbiAqIE1FUkNIQU5UQUJJTElUWSBvciBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRS4gIFNlZSB0aGVcbiAqIEdOVSBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlIGZvciBtb3JlIGRldGFpbHMuXG4gKlxuICogWW91IHNob3VsZCBoYXZlIHJlY2VpdmVkIGEgY29weSBvZiB0aGUgR05VIEdlbmVyYWwgUHVibGljIExpY2Vuc2VcbiAqIGFsb25nIHdpdGggXCJKU0dhbWVUb29sc1wiLiAgSWYgbm90LCBzZWUgPGh0dHA6Ly93d3cuZ251Lm9yZy9saWNlbnNlcy8+LlxuICovXG5pbXBvcnQgQ29uc3RhbnRzIGZyb20gXCIuL0NvbnN0YW50c1wiO1xuaW1wb3J0IFV0aWxzIGZyb20gXCIuL1V0aWxzXCI7XG5pbXBvcnQgQm94IGZyb20gXCIuL0JveFwiO1xuaW1wb3J0IFN0eWxlIGZyb20gXCIuL1N0eWxlXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIElucHV0IGV4dGVuZHMgQm94IHtcbiAgc2VsZWN0YWJsZSA9IHRydWU7XG4gICNfcG9zaXRpb25TdGFydCA9IDA7XG4gICNfcG9zaXRpb25TdGFydENsaWNrID0gMDtcbiAgI19wb3NpdGlvbkVuZCA9IDA7XG5cbiAgY29uc3RydWN0b3IoeCwgeSwgd2lkdGgsIGhlaWdodCwgc3R5bGUsIGRlZmF1bHRUZXh0KSB7XG4gICAgc3VwZXIoeCwgeSwgd2lkdGgsIGhlaWdodCwgc3R5bGUpO1xuICAgIFxuICAgIHRoaXMudGV4dCA9IGRlZmF1bHRUZXh0IHx8IFwiXCI7XG4gICAgdGhpcy4jX3Bvc2l0aW9uU3RhcnQgPSAwO1xuICAgIHRoaXMuI19wb3NpdGlvbkVuZCA9IDA7XG4gICAgdGhpcy4jX3Bvc2l0aW9uU3RhcnRDbGljayA9IDA7XG4gICAgdGhpcy5sYXN0SW5wdXRUZXh0ID0gZmFsc2U7XG4gICAgdGhpcy5vZmZzZXRYID0gMDtcbiAgICB0aGlzLmxhc3RUaW1lID0gMDtcbiAgICB0aGlzLnRvdGFsVGltZSA9IDA7XG4gICAgdGhpcy5jbGlja0N1cnJlbnRQb3NpdGlvbiA9IG51bGw7XG4gICAgdGhpcy50ZXh0Q2FjaGUgPSBudWxsO1xuXG4gICAgdGhpcy5pbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcbiAgICB0aGlzLmlucHV0LnNldEF0dHJpYnV0ZShcInR5cGVcIiwgXCJ0ZXh0XCIpO1xuICAgIHRoaXMuaW5wdXQuc3R5bGUucG9zaXRpb24gPSBcImFic29sdXRlXCI7XG4gICAgdGhpcy5pbnB1dC5zdHlsZS5sZWZ0ID0gXCItOTk5OXB4XCI7XG4gICAgdGhpcy5pbnB1dC50YWJJbmRleCA9IC0xO1xuICAgIHRoaXMuaW5wdXQudmFsdWUgPSB0aGlzLnRleHQ7XG4gICAgdGhpcy5pbnB1dC5hZGRFdmVudExpc3RlbmVyKFwiYmx1clwiLCAoKSA9PiB0aGlzLnNlbGVjdGVkID0gZmFsc2UpO1xuICAgIHRoaXMuaW5wdXQuYWRkRXZlbnRMaXN0ZW5lcihcImZvY3VzXCIsICgpID0+IHRoaXMuc2VsZWN0ZWQgPSB0cnVlKTtcbiAgICB0aGlzLmlucHV0LmFkZEV2ZW50TGlzdGVuZXIoXCJpbnB1dFwiLCAoKSA9PiB7XG4gICAgICB0aGlzLnRvdGFsVGltZSA9IDBcbiAgICAgIHRoaXMubGFzdElucHV0VGV4dCA9IHRydWU7XG4gICAgICB0aGlzLnBvc2l0aW9uU3RhcnQgPSB0aGlzLmlucHV0LnNlbGVjdGlvblN0YXJ0O1xuICAgICAgdGhpcy5wb3NpdGlvbkVuZCA9IHRoaXMuaW5wdXQuc2VsZWN0aW9uRW5kO1xuICAgIH0pO1xuXG4gICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZCh0aGlzLmlucHV0KTtcblxuICAgIHRoaXMuYXBwZW5kVG9DYW52YXMgPSBmYWxzZTtcbiAgICB0aGlzLm5vdGljZUxvZ2dlZCA9IGZhbHNlO1xuXG4gICAgdGhpcy5jYW52YXNUbXAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiY2FudmFzXCIpO1xuXG4gICAgY29uc3QgbW92ZUFjdGlvbkNhbGxiYWNrID0gKGRlbHRhWCwgZGVsdGFZLCBwb3NpdGlvbikgPT4ge1xuICAgICAgaWYocG9zaXRpb24pIHtcbiAgICAgICAgY29uc3QgaUNsaWNrID0gdGhpcy5nZXRMZXR0ZXJDbGlja2VkKHBvc2l0aW9uKTtcbiAgXG4gICAgICAgIGlmKGlDbGljayAhPSBudWxsKSB7XG4gICAgICAgICAgaWYoaUNsaWNrID4gdGhpcy5wb3NpdGlvblN0YXJ0Q2xpY2spIHtcbiAgICAgICAgICAgIHRoaXMuc2V0U2VsZWN0aW9uUmFuZ2UodGhpcy5wb3NpdGlvblN0YXJ0Q2xpY2ssIGlDbGljaywgXCJmb3J3YXJkXCIpO1xuICAgICAgICAgIH0gZWxzZSBpZihpQ2xpY2sgPCB0aGlzLnBvc2l0aW9uU3RhcnRDbGljaykge1xuICAgICAgICAgICAgdGhpcy5zZXRTZWxlY3Rpb25SYW5nZShpQ2xpY2ssIHRoaXMucG9zaXRpb25TdGFydENsaWNrLCBcImJhY2t3YXJkXCIpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH07XG5cbiAgICB0aGlzLmFkZERvd25BY3Rpb24ocG9zaXRpb24gPT4ge1xuICAgICAgY29uc3QgaUNsaWNrID0gdGhpcy5nZXRMZXR0ZXJDbGlja2VkKHBvc2l0aW9uKTtcblxuICAgICAgaWYoaUNsaWNrICE9IG51bGwpIHtcbiAgICAgICAgdGhpcy5wb3NpdGlvblN0YXJ0Q2xpY2sgPSBpQ2xpY2s7XG4gICAgICAgIHRoaXMuc2V0U2VsZWN0aW9uUmFuZ2UoaUNsaWNrLCBpQ2xpY2ssIFwiZm9yd2FyZFwiKTtcbiAgICAgIH1cblxuICAgICAgdGhpcy50b3RhbFRpbWUgPSAwO1xuICAgIH0pO1xuXG4gICAgdGhpcy5hZGRDbGlja0FjdGlvbigoKSA9PiB0aGlzLmNsaWNrKCkpO1xuICAgIHRoaXMuYWRkTW92ZUFjdGlvbihtb3ZlQWN0aW9uQ2FsbGJhY2spO1xuICAgIHRoaXMuYWRkU2Nyb2xsQWN0aW9uKG1vdmVBY3Rpb25DYWxsYmFjayk7XG4gIH1cblxuICBkcmF3KGNvbnRleHQpIHtcbiAgICBpZih0aGlzLmhpZGRlbikgcmV0dXJuO1xuICAgIHN1cGVyLmRyYXcoY29udGV4dCk7XG4gICAgXG4gICAgY29uc3QgY2FudmFzID0gY29udGV4dC5jYW52YXM7XG4gICAgY29uc3QgY3R4ID0gY2FudmFzLmdldENvbnRleHQoXCIyZFwiKTtcbiAgICBjdHguc2F2ZSgpO1xuXG4gICAgaWYodGhpcy5pbnB1dC5zZWxlY3Rpb25FbmQgIT0gdGhpcy5wb3NpdGlvbkVuZCkgdGhpcy50b3RhbFRpbWUgPSAwO1xuXG4gICAgaWYodGhpcy5jYW52YXMgJiYgdGhpcy5jYW52YXMuY29udGFpbmVyICYmICF0aGlzLmFwcGVuZFRvQ2FudmFzKSB7XG4gICAgICBkb2N1bWVudC5ib2R5LnJlbW92ZUNoaWxkKHRoaXMuaW5wdXQpO1xuICAgICAgdGhpcy5jYW52YXMuY29udGFpbmVyLmFwcGVuZENoaWxkKHRoaXMuaW5wdXQpO1xuICAgICAgdGhpcy5hcHBlbmRUb0NhbnZhcyA9IHRydWU7XG4gICAgfSBlbHNlIGlmKCF0aGlzLmNhbnZhcyAmJiAhdGhpcy5ub3RpY2VMb2dnZWQpIHtcbiAgICAgIGNvbnNvbGUgJiYgY29uc29sZS53YXJuICYmIGNvbnNvbGUud2FybihDb25zdGFudHMuU3RyaW5nLldBUk5JTkdfTUVTU0FHRSArIFwiIFwiICsgQ29uc3RhbnRzLlN0cmluZy5JTlBVVF9GVUxMU0NSRUVOKTtcbiAgICAgIHRoaXMubm90aWNlTG9nZ2VkID0gdHJ1ZTtcbiAgICB9XG5cbiAgICBpZih0aGlzLnNlbGVjdGVkICYmICF0aGlzLmRpc2FibGVkKSB7XG4gICAgICB0aGlzLmNsaWNrKCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuYmx1cigpO1xuICAgIH1cblxuICAgIHRoaXMudGV4dCA9IHRoaXMuaW5wdXQudmFsdWU7XG4gICAgdGhpcy5wb3NpdGlvblN0YXJ0ID0gdGhpcy5pbnB1dC5zZWxlY3Rpb25TdGFydDtcbiAgICB0aGlzLnBvc2l0aW9uRW5kID0gdGhpcy5pbnB1dC5zZWxlY3Rpb25FbmQ7XG5cbiAgICBjb25zdCB0aW1lID0gcGVyZm9ybWFuY2Uubm93KCk7XG4gICAgbGV0IG9mZnNldFRpbWUgPSAwO1xuXG4gICAgaWYodGhpcy5sYXN0VGltZSA+IDApIG9mZnNldFRpbWUgPSB0aW1lIC0gdGhpcy5sYXN0VGltZTtcbiAgICB0aGlzLmxhc3RUaW1lID0gdGltZTtcbiAgICB0aGlzLnRvdGFsVGltZSArPSBvZmZzZXRUaW1lO1xuXG4gICAgdGhpcy5kcmF3QmFja2dyb3VuZChjdHgpO1xuICAgIHRoaXMuZHJhd0JvcmRlcihjdHgpO1xuXG4gICAgdGhpcy5jYW52YXNUbXAud2lkdGggPSBVdGlscy5nZXRDYW52YXNXaWR0aChjYW52YXMpICogQ29uc3RhbnRzLlNldHRpbmcuUElYRUxfUkFUSU87XG4gICAgdGhpcy5jYW52YXNUbXAuaGVpZ2h0ID0gVXRpbHMuZ2V0Q2FudmFzSGVpZ2h0KGNhbnZhcykgKiBDb25zdGFudHMuU2V0dGluZy5QSVhFTF9SQVRJTztcbiAgICB0aGlzLmNhbnZhc1RtcC5zdHlsZS53aWR0aCA9IFV0aWxzLmdldENhbnZhc1dpZHRoKGNhbnZhcyk7XG4gICAgdGhpcy5jYW52YXNUbXAuc3R5bGUuaGVpZ2h0ID0gVXRpbHMuZ2V0Q2FudmFzSGVpZ2h0KGNhbnZhcyk7XG4gICAgY29uc3QgY3R4VGV4dCA9IHRoaXMuY2FudmFzVG1wLmdldENvbnRleHQoXCIyZFwiKTtcbiAgICBVdGlscy5jbGVhcihjdHhUZXh0KTtcbiAgICBjdHhUZXh0LnNjYWxlKENvbnN0YW50cy5TZXR0aW5nLlBJWEVMX1JBVElPLCBDb25zdGFudHMuU2V0dGluZy5QSVhFTF9SQVRJTyk7XG5cbiAgICB0aGlzLnVwZGF0ZVRleHRDYWNoZSh0aGlzLnggKyA1KTtcbiAgICB0aGlzLmF1dG9TY3JvbGwoKTtcbiAgICB0aGlzLmRyYXdUZXh0KGN0eFRleHQsIHRoaXMueCArIDUpO1xuXG4gICAgVXRpbHMuZHJhd0ltYWdlRGF0YShjdHgsIHRoaXMuY2FudmFzVG1wLCB0aGlzLnggKyB0aGlzLnN0eWxlLmJvcmRlclNpemUsIHRoaXMueSArIHRoaXMuc3R5bGUuYm9yZGVyU2l6ZSwgdGhpcy53aWR0aCAtIHRoaXMuc3R5bGUuYm9yZGVyU2l6ZSAqIDIsIHRoaXMuaGVpZ2h0IC0gdGhpcy5zdHlsZS5ib3JkZXJTaXplICogMiwgKHRoaXMueCArIHRoaXMuc3R5bGUuYm9yZGVyU2l6ZSkgKiBDb25zdGFudHMuU2V0dGluZy5QSVhFTF9SQVRJTywgKHRoaXMueSArIHRoaXMuc3R5bGUuYm9yZGVyU2l6ZSkgKiBDb25zdGFudHMuU2V0dGluZy5QSVhFTF9SQVRJTywgKHRoaXMud2lkdGggLSB0aGlzLnN0eWxlLmJvcmRlclNpemUgKiAyKSAgKiBDb25zdGFudHMuU2V0dGluZy5QSVhFTF9SQVRJTywgKHRoaXMuaGVpZ2h0IC0gdGhpcy5zdHlsZS5ib3JkZXJTaXplICogMikgKiBDb25zdGFudHMuU2V0dGluZy5QSVhFTF9SQVRJTyk7XG5cbiAgICBpZih0aGlzLmhvdmVyZWQgfHwgdGhpcy5jbGlja2VkKSB7XG4gICAgICBpZih0aGlzLmNhbnZhcyAmJiB0aGlzLmNhbnZhcy5jYW52YXMpIHtcbiAgICAgICAgdGhpcy5jYW52YXMuY2FudmFzLnN0eWxlLmN1cnNvciA9IFwidGV4dFwiO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgY2FudmFzLnN0eWxlLmN1cnNvciA9IFwiZGVmYXVsdFwiO1xuICAgICAgfVxuICAgIH1cblxuICAgIGlmKCF0aGlzLnNlbGVjdGVkKSB7XG4gICAgICB0aGlzLnRvdGFsVGltZSA9IDA7XG4gICAgfVxuXG4gICAgY3R4LnJlc3RvcmUoKTtcbiAgfVxuXG4gIGRyYXdUZXh0KGN0eFRleHQsIGN1cnJlbnRYKSB7XG4gICAgZm9yKGxldCBpID0gLTE7IGkgPCB0aGlzLnRleHQubGVuZ3RoOyBpKyspIHtcbiAgICAgIGlmKGkgPiAtMSkge1xuICAgICAgICBjb25zdCBzaXplcyA9IHRoaXMudGV4dENhY2hlLmxldHRlcnNbaV0uc2l6ZXM7XG5cbiAgICAgICAgY29uc3QgeERyYXcgPSBjdXJyZW50WCAtIHRoaXMub2Zmc2V0WDtcbiAgICAgICAgY29uc3QgeURyYXcgPSB0aGlzLnkgKyB0aGlzLnN0eWxlLmJvcmRlclNpemU7XG5cbiAgICAgICAgaWYodGhpcy5pc0xldHRlclZpc2libGUoaSkpIHsgLy8gRG9uJ3QgZHJhdyB0aGUgdGV4dCBpZiBpdCBpcyBvdXRzaWRlIHRoZSBpbnB1dCAob3ZlcmZsb3cpXG4gICAgICAgICAgaWYodGhpcy5wb3NpdGlvblN0YXJ0ICE9IHRoaXMucG9zaXRpb25FbmQgJiYgaSA+PSB0aGlzLnBvc2l0aW9uU3RhcnQgJiYgaSA8IHRoaXMucG9zaXRpb25FbmQpIHtcbiAgICAgICAgICAgIHRoaXMuZHJhd0hpZ2hsaWdodChjdHhUZXh0LCBjdXJyZW50WCwgc2l6ZXMpO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIFV0aWxzLmRyYXdUZXh0KGN0eFRleHQsIHRoaXMudGV4dFtpXSwgdGhpcy5zdHlsZS5mb250Q29sb3IsIHRoaXMuc3R5bGUuZm9udFNpemUsIHRoaXMuc3R5bGUuZm9udEZhbWlseSwgXCJkZWZhdWx0XCIsIFwiZGVmYXVsdFwiLCB4RHJhdywgeURyYXcsIGZhbHNlKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGN1cnJlbnRYICs9IHNpemVzW1wid2lkdGhcIl0gKyB0aGlzLnN0eWxlLnNwYWNlQmV0d2VlbkNvbXBvbmVudHM7XG4gICAgICB9XG5cbiAgICAgIGlmKHRoaXMucG9zaXRpb25FbmQgPT0gaSArIDEgJiYgdGhpcy5zZWxlY3RlZCkge1xuICAgICAgICBpZih0aGlzLnRvdGFsVGltZSA8PSA1MDApIHtcbiAgICAgICAgICB0aGlzLmRyYXdDdXJzb3IoY3R4VGV4dCwgY3VycmVudFgpO1xuICAgICAgICB9IGVsc2UgaWYodGhpcy50b3RhbFRpbWUgPiAxMDAwKSB7XG4gICAgICAgICAgdGhpcy50b3RhbFRpbWUgPSAwO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIGN1cnJlbnRYO1xuICB9XG5cbiAgZHJhd0N1cnNvcihjdHhUZXh0LCBjdXJyZW50WCkge1xuICAgIGN0eFRleHQuc3Ryb2tlU3R5bGUgPSB0aGlzLnN0eWxlLmJvcmRlckNvbG9yO1xuICAgIGN0eFRleHQubGluZVdpZHRoID0gMTtcbiAgICBjdHhUZXh0LmJlZ2luUGF0aCgpO1xuICAgIGN0eFRleHQubW92ZVRvKGN1cnJlbnRYIC0gdGhpcy5vZmZzZXRYLCB0aGlzLnkgKyAzKTtcbiAgICBjdHhUZXh0LmxpbmVUbyhjdXJyZW50WCAtIHRoaXMub2Zmc2V0WCwgdGhpcy55ICsgdGhpcy5zdHlsZS5mb250U2l6ZSk7XG4gICAgY3R4VGV4dC5zdHJva2UoKTtcbiAgfVxuXG4gIGRyYXdIaWdobGlnaHQoY3R4VGV4dCwgY3VycmVudFgsIHNpemVzKSB7XG4gICAgY3R4VGV4dC5maWxsU3R5bGUgPSB0aGlzLnN0eWxlLnNlbGVjdENvbG9yO1xuICAgIGN0eFRleHQuZmlsbFJlY3QoY3VycmVudFggLSB0aGlzLm9mZnNldFgsIHRoaXMueSArIHRoaXMuc3R5bGUuYm9yZGVyU2l6ZSwgc2l6ZXNbXCJ3aWR0aFwiXSArIDIsIHRoaXMuaGVpZ2h0IC0gdGhpcy5zdHlsZS5ib3JkZXJTaXplICogMiAtIDEpO1xuICB9XG5cbiAgdXBkYXRlVGV4dENhY2hlKGN1cnJlbnRYKSB7XG4gICAgY29uc3QgY3R4ID0gdGhpcy5jYW52YXMgPyB0aGlzLmNhbnZhcy5nZXRDb250ZXh0KFwiMmRcIikgOiBudWxsO1xuICAgIGNvbnN0IHBhcmVudCA9ICh0aGlzLmNhbnZhcyAmJiB0aGlzLmNhbnZhcy5zY2VuZSkgfHwgdGhpcy5jYW52YXMgfHwgKGN0eCAmJiBjdHguY2FudmFzKTtcblxuICAgIGlmKGN0eCAmJiAoQ29uc3RhbnRzLlNldHRpbmcuRElTQUJMRV9PUFRJTUlaQVRJT05TIHx8ICF0aGlzLnRleHRDYWNoZSB8fCB0aGlzLnRleHRDYWNoZS5mb250U2l6ZSAhPSB0aGlzLnN0eWxlLmZvbnRTaXplIHx8IHRoaXMudGV4dENhY2hlLmZvbnRGYW1pbHkgIT0gdGhpcy5zdHlsZS5mb250RmFtaWx5IHx8IHRoaXMudGV4dCAhPSB0aGlzLnRleHRDYWNoZS50ZXh0IHx8IChwYXJlbnQgJiYgcGFyZW50LndpZHRoICE9IHRoaXMudGV4dENhY2hlLnBhcmVudFdpZHRoKSkpIHtcbiAgICAgIHRoaXMudGV4dENhY2hlID0geyBcImZvbnRTaXplXCI6IHRoaXMuc3R5bGUuZm9udFNpemUsIFwiZm9udEZhbWlseVwiOiB0aGlzLnN0eWxlLmZvbnRGYW1pbHksIFwidGV4dFwiOiB0aGlzLnRleHQsIFwicGFyZW50V2lkdGhcIjogcGFyZW50LndpZHRoLCBcImxldHRlcnNcIjogW10gfTtcblxuICAgICAgZm9yKGxldCBpID0gMDsgaSA8IHRoaXMudGV4dC5sZW5ndGg7IGkrKykge1xuICAgICAgICBjb25zdCBzaXplcyA9IFV0aWxzLndyYXBUZXh0TGluZXMoY3R4LCB0aGlzLnRleHRbaV0sIHRoaXMud2lkdGgsIHRoaXMuc3R5bGUuZm9udFNpemUsIHRoaXMuc3R5bGUuZm9udEZhbWlseSwgdHJ1ZSk7XG4gICAgICAgIHRoaXMudGV4dENhY2hlLmxldHRlcnNbaV0gPSB7XCJ0ZXh0XCI6IHRoaXMudGV4dFtpXSwgXCJjdXJyZW50WFwiOiBjdXJyZW50WCwgXCJzaXplc1wiOiBzaXplcyB9OyBcbiAgICAgICAgY3VycmVudFggKz0gc2l6ZXNbXCJ3aWR0aFwiXSArIHRoaXMuc3R5bGUuc3BhY2VCZXR3ZWVuQ29tcG9uZW50cztcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBpc0NsaWNrQ3VycmVudFBvc2l0aW9uKHBvc2l0aW9uLCBjdXJyZW50WCwgc2l6ZXMpIHtcbiAgICBpZihwb3NpdGlvbi54ICsgdGhpcy5vZmZzZXRYIDw9IGN1cnJlbnRYICsgc2l6ZXNbXCJ3aWR0aFwiXSArIHRoaXMuc3R5bGUuc3BhY2VCZXR3ZWVuQ29tcG9uZW50cyAmJiBwb3NpdGlvbi54ICsgdGhpcy5vZmZzZXRYID49IGN1cnJlbnRYKSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG5cbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBpc0NsaWNrQWZ0ZXJQb3NpdGlvbihwb3NpdGlvbiwgY3VycmVudFgsIHNpemVzKSB7XG4gICAgaWYocG9zaXRpb24ueCArIHRoaXMub2Zmc2V0WCA+PSBjdXJyZW50WCArIHNpemVzW1wid2lkdGhcIl0gKyB0aGlzLnN0eWxlLnNwYWNlQmV0d2VlbkNvbXBvbmVudHMpIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cblxuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIGdldExldHRlckNsaWNrZWQocG9zaXRpb24pIHtcbiAgICBpZih0aGlzLnRleHRDYWNoZSkge1xuICAgICAgZm9yKGxldCBpID0gMDsgaSA8IHRoaXMudGV4dC5sZW5ndGg7IGkrKykge1xuICAgICAgICBjb25zdCBsZXR0ZXIgPSB0aGlzLnRleHRDYWNoZS5sZXR0ZXJzW2ldO1xuICAgICAgICBcbiAgICAgICAgaWYodGhpcy5pc0NsaWNrQ3VycmVudFBvc2l0aW9uKHBvc2l0aW9uLCBNYXRoLnJvdW5kKGxldHRlci5jdXJyZW50WCksIGxldHRlci5zaXplcykpIHtcbiAgICAgICAgICByZXR1cm4gaTtcbiAgICAgICAgfSBlbHNlIGlmKGkgPj0gdGhpcy50ZXh0Lmxlbmd0aCAtIDEgJiYgdGhpcy5pc0NsaWNrQWZ0ZXJQb3NpdGlvbihwb3NpdGlvbiwgTWF0aC5yb3VuZChsZXR0ZXIuY3VycmVudFgpLCBsZXR0ZXIuc2l6ZXMpKSB7XG4gICAgICAgICAgcmV0dXJuIGkgKyAxO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgZ2V0IGN1cnNvclBvc2l0aW9uKCkge1xuICAgIGlmKHRoaXMudGV4dENhY2hlKSB7XG4gICAgICBsZXQgcG9zaXRpb24gPSB0aGlzLnBvc2l0aW9uRW5kIC0gMTtcblxuICAgICAgaWYodGhpcy5wb3NpdGlvbkVuZCAhPSB0aGlzLnBvc2l0aW9uU3RhcnQgJiYgdGhpcy5wb3NpdGlvbkVuZCA9PSB0aGlzLnBvc2l0aW9uU3RhcnRDbGljayAmJiB0aGlzLnBvc2l0aW9uU3RhcnQgPCB0aGlzLnBvc2l0aW9uU3RhcnRDbGljaykge1xuICAgICAgICBwb3NpdGlvbiA9IHRoaXMucG9zaXRpb25TdGFydCAtIDE7XG4gICAgICB9XG4gICAgICBcbiAgICAgIGlmKHBvc2l0aW9uIDwgMCkge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgIFwiY3VycmVudExldHRlclwiOiB0aGlzLnRleHRDYWNoZS5sZXR0ZXJzWzBdLFxuICAgICAgICAgIFwieFwiOiB0aGlzLnggKyB0aGlzLnN0eWxlLmJvcmRlclNpemVcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBjb25zdCBjdXJyZW50TGV0dGVyID0gdGhpcy50ZXh0Q2FjaGUubGV0dGVyc1twb3NpdGlvbl07XG5cbiAgICAgIGlmKGN1cnJlbnRMZXR0ZXIpIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICBcImN1cnJlbnRMZXR0ZXJcIjogY3VycmVudExldHRlcixcbiAgICAgICAgICBcInhcIjogY3VycmVudExldHRlci5jdXJyZW50WFxuICAgICAgICB9O1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIGlzTGV0dGVyVmlzaWJsZShsZXR0ZXJJZCkge1xuICAgIGlmKHRoaXMudGV4dENhY2hlKSB7XG4gICAgICBjb25zdCBsZXR0ZXIgPSB0aGlzLnRleHRDYWNoZS5sZXR0ZXJzW2xldHRlcklkXTtcblxuICAgICAgaWYobGV0dGVyKSB7XG4gICAgICAgIGNvbnN0IHhEcmF3ID0gbGV0dGVyLmN1cnJlbnRYIC0gdGhpcy5vZmZzZXRYO1xuICBcbiAgICAgICAgaWYoeERyYXcgPj0gdGhpcy54IC0gbGV0dGVyLnNpemVzW1wid2lkdGhcIl0gJiYgeERyYXcgPD0gdGhpcy54ICsgdGhpcy53aWR0aCkge1xuICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgYXV0b1Njcm9sbCgpIHtcbiAgICBpZih0aGlzLnRleHRDYWNoZSkge1xuICAgICAgY29uc3QgY3Vyc29yUG9zaXRpb24gPSB0aGlzLmN1cnNvclBvc2l0aW9uO1xuICAgICAgY29uc3QgY3VycmVudExldHRlclNpemUgPSBjdXJzb3JQb3NpdGlvbi5jdXJyZW50TGV0dGVyID8gY3Vyc29yUG9zaXRpb24uY3VycmVudExldHRlci5zaXplc1tcIndpZHRoXCJdIDogMDtcbiAgICAgIGNvbnN0IGN1cnNvclBvc2l0aW9uUG9zID0gY3Vyc29yUG9zaXRpb24ueCArIGN1cnJlbnRMZXR0ZXJTaXplICsgdGhpcy5zdHlsZS5zcGFjZUJldHdlZW5Db21wb25lbnRzO1xuICAgICAgY29uc3QgY3Vyc29yUG9zaXRpb25OZWcgPSBjdXJzb3JQb3NpdGlvbi54IC0gY3VycmVudExldHRlclNpemUgLSB0aGlzLnN0eWxlLnNwYWNlQmV0d2VlbkNvbXBvbmVudHM7XG5cbiAgICAgIGNvbnN0IG9mZnNldFggPSBNYXRoLm1heCgwLCBNYXRoLnJvdW5kKGN1cnNvclBvc2l0aW9uUG9zIC0gdGhpcy54IC0gdGhpcy53aWR0aCArIHRoaXMuc3R5bGUuYm9yZGVyU2l6ZSArIHRoaXMuc3R5bGUuc3BhY2VCZXR3ZWVuQ29tcG9uZW50cyAqIDIpKTtcbiAgICAgIGNvbnN0IG9mZnNldFhOZWcgPSBNYXRoLm1heCgwLCBNYXRoLnJvdW5kKGN1cnNvclBvc2l0aW9uTmVnIC0gdGhpcy54IC0gdGhpcy5zdHlsZS5ib3JkZXJTaXplIC0gdGhpcy5zdHlsZS5zcGFjZUJldHdlZW5Db21wb25lbnRzICogMikpO1xuXG4gICAgICBpZih0aGlzLm9mZnNldFggPCAwKSB7XG4gICAgICAgIHRoaXMub2Zmc2V0WCA9IDA7XG4gICAgICB9XG5cbiAgICAgIGlmKGN1cnNvclBvc2l0aW9uUG9zIC0gdGhpcy5vZmZzZXRYID49IHRoaXMueCArIHRoaXMud2lkdGggLSB0aGlzLnN0eWxlLmJvcmRlclNpemUpIHtcbiAgICAgICAgdGhpcy5vZmZzZXRYID0gb2Zmc2V0WDtcbiAgICAgICAgcmV0dXJuIG9mZnNldFg7XG4gICAgICB9IGVsc2UgaWYoY3Vyc29yUG9zaXRpb25OZWcgLSB0aGlzLm9mZnNldFggPD0gdGhpcy54ICsgdGhpcy5zdHlsZS5ib3JkZXJTaXplKSB7XG4gICAgICAgIHRoaXMub2Zmc2V0WCA9IG9mZnNldFhOZWc7XG4gICAgICAgIHJldHVybiBvZmZzZXRYTmVnO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIGNsaWNrKCkge1xuICAgIHRoaXMuaW5wdXQuZm9jdXMoKTtcbiAgfVxuXG4gIGJsdXIoKSB7XG4gICAgdGhpcy5pbnB1dC5ibHVyKCk7XG4gIH1cblxuICBnZXQgcG9zaXRpb25TdGFydCgpIHtcbiAgICByZXR1cm4gdGhpcy4jX3Bvc2l0aW9uU3RhcnQ7XG4gIH1cblxuICBnZXQgcG9zaXRpb25TdGFydENsaWNrKCkge1xuICAgIHJldHVybiB0aGlzLiNfcG9zaXRpb25TdGFydENsaWNrO1xuICB9XG5cbiAgZ2V0IHBvc2l0aW9uRW5kKCkge1xuICAgIHJldHVybiB0aGlzLiNfcG9zaXRpb25FbmQ7XG4gIH1cblxuICBzZXQgcG9zaXRpb25TdGFydChwb3NpdGlvbikge1xuICAgIHRoaXMuaW5wdXQuc2VsZWN0aW9uU3RhcnQgPSBwb3NpdGlvbjtcbiAgICB0aGlzLiNfcG9zaXRpb25TdGFydCA9IHBvc2l0aW9uO1xuICB9XG5cbiAgc2V0IHBvc2l0aW9uU3RhcnRDbGljayhwb3NpdGlvbikge1xuICAgIHRoaXMuI19wb3NpdGlvblN0YXJ0Q2xpY2sgPSBwb3NpdGlvbjtcbiAgfVxuXG4gIHNldCBwb3NpdGlvbkVuZChwb3NpdGlvbikge1xuICAgIHRoaXMuaW5wdXQuc2VsZWN0aW9uRW5kID0gcG9zaXRpb247XG4gICAgdGhpcy4jX3Bvc2l0aW9uRW5kID0gcG9zaXRpb247XG4gIH1cblxuICBzZXRTZWxlY3Rpb25SYW5nZShzdGFydCwgZW5kLCBkaXJlY3Rpb24pIHtcbiAgICB0aGlzLmlucHV0LnNldFNlbGVjdGlvblJhbmdlKHN0YXJ0LCBlbmQsIGRpcmVjdGlvbik7XG4gICAgdGhpcy5wb3NpdGlvblN0YXJ0ID0gc3RhcnQ7XG4gICAgdGhpcy5wb3NpdGlvbkVuZCA9IGVuZDtcbiAgfVxuXG4gIGdldCBoZWlnaHQoKSB7XG4gICAgY29uc3QgYm9yZGVyU2l6ZSA9IHRoaXMuc3R5bGUgJiYgdGhpcy5zdHlsZS5ib3JkZXJTaXplID8gdGhpcy5zdHlsZS5ib3JkZXJTaXplIDogMDtcbiAgICByZXR1cm4gc3VwZXIuaGVpZ2h0ID8gc3VwZXIuaGVpZ2h0IDogdGhpcy5zdHlsZS5mb250U2l6ZSArIGJvcmRlclNpemUgKiAyO1xuICB9XG5cbiAgZ2V0IGRlZmF1bHRTdHlsZSgpIHtcbiAgICByZXR1cm4gbmV3IFN0eWxlKHtcbiAgICAgIFwiZm9udFNpemVcIjogTWF0aC5mbG9vcihDb25zdGFudHMuU2V0dGluZy5GT05UX1NJWkUgLyAxLjI1KSxcbiAgICAgIFwiZm9udEZhbWlseVwiOiBDb25zdGFudHMuU2V0dGluZy5GT05UX0ZBTUlMWSxcbiAgICAgIFwiZm9udENvbG9yXCI6IENvbnN0YW50cy5TZXR0aW5nLklOUFVUX0RFRkFVTFRfRk9OVF9DT0xPUixcbiAgICAgIFwiYmFja2dyb3VuZENvbG9yXCI6IENvbnN0YW50cy5TZXR0aW5nLklOUFVUX0RFRkFVTFRfQkFDS0dST1VORF9DT0xPUixcbiAgICAgIFwiYm9yZGVyQ29sb3JcIjogQ29uc3RhbnRzLlNldHRpbmcuSU5QVVRfREVGQVVMVF9CT1JERVJfQ09MT1IsXG4gICAgICBcImJvcmRlckNvbG9yU2VsZWN0ZWRcIjogQ29uc3RhbnRzLlNldHRpbmcuSU5QVVRfREVGQVVMVF9CT1JERVJfQ09MT1JfU0VMRUNURUQsXG4gICAgICBcInNlbGVjdENvbG9yXCI6IENvbnN0YW50cy5TZXR0aW5nLklOUFVUX0RFRkFVTFRfU0VMRUNUX0NPTE9SLFxuICAgICAgXCJzcGFjZUJldHdlZW5Db21wb25lbnRzXCI6IDFcbiAgICB9KTtcbiAgfVxufSIsIi8qXG4gKiBDb3B5cmlnaHQgKEMpIDIwMjAgRWxpYXN0aWsgKGVsaWFzdGlrc29mdHMuY29tKVxuICpcbiAqIFRoaXMgZmlsZSBpcyBwYXJ0IG9mIFwiSlNHYW1lVG9vbHNcIi5cbiAqXG4gKiBcIkpTR2FtZVRvb2xzXCIgaXMgZnJlZSBzb2Z0d2FyZTogeW91IGNhbiByZWRpc3RyaWJ1dGUgaXQgYW5kL29yIG1vZGlmeVxuICogaXQgdW5kZXIgdGhlIHRlcm1zIG9mIHRoZSBHTlUgR2VuZXJhbCBQdWJsaWMgTGljZW5zZSBhcyBwdWJsaXNoZWQgYnlcbiAqIHRoZSBGcmVlIFNvZnR3YXJlIEZvdW5kYXRpb24sIGVpdGhlciB2ZXJzaW9uIDMgb2YgdGhlIExpY2Vuc2UsIG9yXG4gKiAoYXQgeW91ciBvcHRpb24pIGFueSBsYXRlciB2ZXJzaW9uLlxuICpcbiAqIFwiSlNHYW1lVG9vbHNcIiBpcyBkaXN0cmlidXRlZCBpbiB0aGUgaG9wZSB0aGF0IGl0IHdpbGwgYmUgdXNlZnVsLFxuICogYnV0IFdJVEhPVVQgQU5ZIFdBUlJBTlRZOyB3aXRob3V0IGV2ZW4gdGhlIGltcGxpZWQgd2FycmFudHkgb2ZcbiAqIE1FUkNIQU5UQUJJTElUWSBvciBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRS4gIFNlZSB0aGVcbiAqIEdOVSBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlIGZvciBtb3JlIGRldGFpbHMuXG4gKlxuICogWW91IHNob3VsZCBoYXZlIHJlY2VpdmVkIGEgY29weSBvZiB0aGUgR05VIEdlbmVyYWwgUHVibGljIExpY2Vuc2VcbiAqIGFsb25nIHdpdGggXCJKU0dhbWVUb29sc1wiLiAgSWYgbm90LCBzZWUgPGh0dHA6Ly93d3cuZ251Lm9yZy9saWNlbnNlcy8+LlxuICovXG5pbXBvcnQgQ29uc3RhbnRzIGZyb20gXCIuL0NvbnN0YW50c1wiO1xuaW1wb3J0IFV0aWxzIGZyb20gXCIuL1V0aWxzXCI7XG5pbXBvcnQgQ29tcG9uZW50IGZyb20gXCIuL0NvbXBvbmVudFwiO1xuaW1wb3J0IFN0eWxlIGZyb20gXCIuL1N0eWxlXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIExhYmVsIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgc2VsZWN0YWJsZSA9IGZhbHNlO1xuICAjX3RleHQgPSBcIlwiO1xuXG4gIGNvbnN0cnVjdG9yKHRleHQsIHgsIHksIHN0eWxlKSB7XG4gICAgc3VwZXIoeCwgeSwgbnVsbCwgbnVsbCwgc3R5bGUpO1xuICAgIHRoaXMudGV4dCA9IHRleHQ7XG4gICAgdGhpcy5zaXplc0NhY2hlID0gbnVsbDtcblxuICAgIGlmKCFDb25zdGFudHMuU2V0dGluZy5ESVNBQkxFX0VYUEVSSU1FTlRBTF9PUFRJTUlaQVRJT05TKSB7XG4gICAgICB0aGlzLnVwZGF0ZVNpemVzKCk7XG5cbiAgICAgIHRoaXMuYWRkQ2hhbmdlQWN0aW9uKGNvbXBvbmVudENoYW5nZWQgPT4ge1xuICAgICAgICB0aGlzLnVwZGF0ZVNpemVzKCk7XG4gICAgICAgIGNvbXBvbmVudENoYW5nZWQgIT0gdGhpcy5wYXJlbnQgJiYgdGhpcy5wYXJlbnQgJiYgdGhpcy5wYXJlbnQucmVhY3RvciAmJiB0aGlzLnBhcmVudC5yZWFjdG9yLmRpc3BhdGNoRXZlbnQoXCJvbkNoYW5nZVwiLCB0aGlzKTtcbiAgICAgIH0pO1xuICAgIH1cbiAgfVxuXG4gIGRyYXcoY29udGV4dCkge1xuICAgIGlmKHRoaXMuaGlkZGVuKSByZXR1cm47XG4gICAgc3VwZXIuZHJhdyhjb250ZXh0KTtcbiAgICBcbiAgICBjb25zdCBjYW52YXMgPSBjb250ZXh0LmNhbnZhcztcbiAgICBjb25zdCBjdHggPSBjYW52YXMuZ2V0Q29udGV4dChcIjJkXCIpO1xuICAgIGN0eC5zYXZlKCk7XG5cbiAgICBVdGlscy5kcmF3VGV4dChjdHgsIHRoaXMudGV4dCwgdGhpcy5zdHlsZS5mb250Q29sb3IsIHRoaXMuc3R5bGUuZm9udFNpemUsIHRoaXMuc3R5bGUuZm9udEZhbWlseSwgdGhpcy5zdHlsZS5hbGlnbmVtZW50LCB0aGlzLnN0eWxlLnZlcnRpY2FsQWxpZ25lbWVudCwgdGhpcy54LCB0aGlzLnksIHRoaXMuc3R5bGUud3JhcCwgdGhpcy5zdHlsZS5ib2xkLCB0aGlzLnN0eWxlLnVuZGVybGluZSwgbnVsbCwgdGhpcy5wYXJlbnQpO1xuXG4gICAgY3R4LnJlc3RvcmUoKTtcbiAgfVxuXG4gIHNldCB0ZXh0KHRleHQpIHtcbiAgICBpZih0ZXh0ICE9IHRoaXMuI190ZXh0KSB7XG4gICAgICB0aGlzLiNfdGV4dCA9IHRleHQ7XG4gICAgICB0aGlzLnJlYWN0b3IuZGlzcGF0Y2hFdmVudChcIm9uQ2hhbmdlXCIsIHRoaXMpO1xuICAgIH1cbiAgfVxuXG4gIGdldCB0ZXh0KCkge1xuICAgIHJldHVybiB0aGlzLiNfdGV4dDtcbiAgfVxuXG4gIHVwZGF0ZVNpemVzKCkge1xuICAgIGNvbnN0IGN0eCA9IHRoaXMuY2FudmFzID8gdGhpcy5jYW52YXMuZ2V0Q29udGV4dChcIjJkXCIpIDogbnVsbDtcbiAgICBjb25zdCBwYXJlbnQgPSAodGhpcy5jYW52YXMgJiYgdGhpcy5jYW52YXMuc2NlbmUpIHx8IHRoaXMuY2FudmFzIHx8IChjdHggJiYgY3R4LmNhbnZhcykgfHwgdGhpcy5wYXJlbnQ7XG4gICAgXG4gICAgaWYoY3R4ICYmIChDb25zdGFudHMuU2V0dGluZy5ESVNBQkxFX09QVElNSVpBVElPTlMgfHwgIXRoaXMuc2l6ZXNDYWNoZSB8fCB0aGlzLnNpemVzQ2FjaGUuZm9udFNpemUgIT0gdGhpcy5zdHlsZS5mb250U2l6ZSB8fCB0aGlzLnNpemVzQ2FjaGUuZm9udEZhbWlseSAhPSB0aGlzLnN0eWxlLmZvbnRGYW1pbHkgfHwgdGhpcy5zaXplc0NhY2hlLndyYXAgIT0gdGhpcy5zdHlsZS53cmFwIHx8IHRoaXMudGV4dCAhPSB0aGlzLnNpemVzQ2FjaGUudGV4dCB8fCAocGFyZW50ICYmIHBhcmVudC53aWR0aCAhPSB0aGlzLnNpemVzQ2FjaGUucGFyZW50V2lkdGgpIHx8IHRoaXMuc2l6ZXNDYWNoZS52YWx1ZSA9PSBudWxsKSkge1xuICAgICAgY29uc3Qgc2l6ZXMgPSBVdGlscy53cmFwVGV4dExpbmVzKGN0eCwgdGhpcy50ZXh0LCBudWxsLCB0aGlzLnN0eWxlLmZvbnRTaXplLCB0aGlzLnN0eWxlLmZvbnRGYW1pbHksICF0aGlzLnN0eWxlLndyYXApO1xuICAgICAgXG4gICAgICBpZihwYXJlbnQpIHtcbiAgICAgICAgdGhpcy5zaXplc0NhY2hlID0geyBcImZvbnRTaXplXCI6IHRoaXMuc3R5bGUuZm9udFNpemUsIFwiZm9udEZhbWlseVwiOiB0aGlzLnN0eWxlLmZvbnRGYW1pbHksIFwid3JhcFwiOiB0aGlzLnN0eWxlLndyYXAsIFwidGV4dFwiOiB0aGlzLnRleHQsIFwicGFyZW50V2lkdGhcIjogcGFyZW50LndpZHRoLCBcInZhbHVlXCI6IHNpemVzIH07XG4gICAgICAgIHRoaXMucmVhY3Rvci5kaXNwYXRjaEV2ZW50KFwib25DaGFuZ2VcIiwgdGhpcyk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHRoaXMuc2l6ZXNDYWNoZSAmJiB0aGlzLnNpemVzQ2FjaGUudmFsdWU7XG4gIH1cblxuICBnZXQgc2l6ZXMoKSB7XG4gICAgaWYoQ29uc3RhbnRzLlNldHRpbmcuRElTQUJMRV9FWFBFUklNRU5UQUxfT1BUSU1JWkFUSU9OUykgdGhpcy51cGRhdGVTaXplcygpO1xuICAgIHJldHVybiB0aGlzLnNpemVzQ2FjaGUgPyB0aGlzLnNpemVzQ2FjaGUudmFsdWUgOiBudWxsO1xuICB9XG5cbiAgZ2V0IGhlaWdodCgpIHtcbiAgICBjb25zdCBzaXplcyA9IHRoaXMuc2l6ZXM7XG4gICAgcmV0dXJuIHNpemVzICYmIHNpemVzW1wiaGVpZ2h0XCJdO1xuICB9XG5cbiAgZ2V0IHdpZHRoKCkge1xuICAgIGNvbnN0IHNpemVzID0gdGhpcy5zaXplcztcbiAgICByZXR1cm4gc2l6ZXMgJiYgc2l6ZXNbXCJ3aWR0aFwiXTtcbiAgfVxuXG4gIGdldCBkZWZhdWx0U3R5bGUoKSB7XG4gICAgcmV0dXJuIG5ldyBTdHlsZSh7XG4gICAgICBcImZvbnRDb2xvclwiOiBDb25zdGFudHMuU2V0dGluZy5MQUJFTF9ERUZBVUxUX0ZPTlRfQ09MT1IsXG4gICAgICBcIndyYXBcIjogdHJ1ZSxcbiAgICAgIFwiYm9sZFwiOiBmYWxzZSxcbiAgICAgIFwidW5kZXJsaW5lXCI6IGZhbHNlXG4gICAgfSk7XG4gIH1cbn0iLCIvKlxuICogQ29weXJpZ2h0IChDKSAyMDIwIEVsaWFzdGlrIChlbGlhc3Rpa3NvZnRzLmNvbSlcbiAqXG4gKiBUaGlzIGZpbGUgaXMgcGFydCBvZiBcIkpTR2FtZVRvb2xzXCIuXG4gKlxuICogXCJKU0dhbWVUb29sc1wiIGlzIGZyZWUgc29mdHdhcmU6IHlvdSBjYW4gcmVkaXN0cmlidXRlIGl0IGFuZC9vciBtb2RpZnlcbiAqIGl0IHVuZGVyIHRoZSB0ZXJtcyBvZiB0aGUgR05VIEdlbmVyYWwgUHVibGljIExpY2Vuc2UgYXMgcHVibGlzaGVkIGJ5XG4gKiB0aGUgRnJlZSBTb2Z0d2FyZSBGb3VuZGF0aW9uLCBlaXRoZXIgdmVyc2lvbiAzIG9mIHRoZSBMaWNlbnNlLCBvclxuICogKGF0IHlvdXIgb3B0aW9uKSBhbnkgbGF0ZXIgdmVyc2lvbi5cbiAqXG4gKiBcIkpTR2FtZVRvb2xzXCIgaXMgZGlzdHJpYnV0ZWQgaW4gdGhlIGhvcGUgdGhhdCBpdCB3aWxsIGJlIHVzZWZ1bCxcbiAqIGJ1dCBXSVRIT1VUIEFOWSBXQVJSQU5UWTsgd2l0aG91dCBldmVuIHRoZSBpbXBsaWVkIHdhcnJhbnR5IG9mXG4gKiBNRVJDSEFOVEFCSUxJVFkgb3IgRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UuICBTZWUgdGhlXG4gKiBHTlUgR2VuZXJhbCBQdWJsaWMgTGljZW5zZSBmb3IgbW9yZSBkZXRhaWxzLlxuICpcbiAqIFlvdSBzaG91bGQgaGF2ZSByZWNlaXZlZCBhIGNvcHkgb2YgdGhlIEdOVSBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlXG4gKiBhbG9uZyB3aXRoIFwiSlNHYW1lVG9vbHNcIi4gIElmIG5vdCwgc2VlIDxodHRwOi8vd3d3LmdudS5vcmcvbGljZW5zZXMvPi5cbiAqL1xuaW1wb3J0IENvbnN0YW50cyBmcm9tIFwiLi9Db25zdGFudHNcIjtcbmltcG9ydCBMYWJlbCBmcm9tIFwiLi9MYWJlbFwiO1xuaW1wb3J0IFN0eWxlIGZyb20gXCIuL1N0eWxlXCI7XG5pbXBvcnQgVXRpbHMgZnJvbSBcIi4vVXRpbHNcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTGluayBleHRlbmRzIExhYmVsIHtcbiAgc2VsZWN0YWJsZSA9IHRydWU7XG5cbiAgY29uc3RydWN0b3IodGV4dCwgeCwgeSwgc3R5bGUpIHtcbiAgICBzdXBlcih0ZXh0LCB4LCB5LCBzdHlsZSk7XG5cbiAgICB0aGlzLmluaXRpYWxDb2xvciA9IHRoaXMuc3R5bGUuZm9udENvbG9yO1xuICAgIHRoaXMuaW5pdGlhbFVuZGVybGluZSA9IHRoaXMuc3R5bGUudW5kZXJsaW5lO1xuICB9XG5cbiAgZHJhdyhjb250ZXh0KSB7XG4gICAgaWYodGhpcy5oaWRkZW4pIHJldHVybjtcbiAgICBzdXBlci5kcmF3KGNvbnRleHQpO1xuXG4gICAgY29uc3QgY2FudmFzID0gY29udGV4dC5jYW52YXM7XG5cbiAgICBpZih0aGlzLmNsaWNrZWQpIHtcbiAgICAgIHRoaXMuc3R5bGUuc2V0KFwidW5kZXJsaW5lXCIsIGZhbHNlKTtcbiAgICAgIHRoaXMuc3R5bGUuc2V0KFwiZm9udENvbG9yXCIsIHRoaXMuc3R5bGUuZm9udENvbG9yRG93bik7XG4gICAgICBjYW52YXMuc3R5bGUuY3Vyc29yID0gXCJwb2ludGVyXCI7XG4gICAgfSBlbHNlIGlmKHRoaXMuaG92ZXJlZCB8fCB0aGlzLnNlbGVjdGVkKSB7XG4gICAgICB0aGlzLnN0eWxlLnNldChcInVuZGVybGluZVwiLCBmYWxzZSk7XG4gICAgICB0aGlzLnN0eWxlLnNldChcImZvbnRDb2xvclwiLCB0aGlzLnN0eWxlLmZvbnRDb2xvckhvdmVyKTtcbiAgICAgIGlmKHRoaXMuaG92ZXJlZCkgY2FudmFzLnN0eWxlLmN1cnNvciA9IFwicG9pbnRlclwiO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnN0eWxlLnNldChcInVuZGVybGluZVwiLCB0aGlzLmluaXRpYWxVbmRlcmxpbmUpO1xuICAgICAgdGhpcy5zdHlsZS5zZXQoXCJmb250Q29sb3JcIiwgdGhpcy5pbml0aWFsQ29sb3IpO1xuICAgIH1cblxuICAgIHRoaXMuaW5pdCA9IHRydWU7XG4gIH1cblxuICBnZXQgZGVmYXVsdFN0eWxlKCkge1xuICAgIHJldHVybiBuZXcgU3R5bGUoe1xuICAgICAgXCJmb250Q29sb3JcIjogQ29uc3RhbnRzLlNldHRpbmcuTElOS19ERUZBVUxUX0NPTE9SLFxuICAgICAgXCJmb250Q29sb3JIb3ZlclwiOiBDb25zdGFudHMuU2V0dGluZy5MSU5LX0RFRkFVTFRfSE9WRVJfQ09MT1IsXG4gICAgICBcImZvbnRDb2xvckRvd25cIjogQ29uc3RhbnRzLlNldHRpbmcuTElOS19ERUZBVUxUX0NMSUNLX0NPTE9SLFxuICAgICAgXCJ3cmFwXCI6IHRydWUsXG4gICAgICBcImJvbGRcIjogZmFsc2UsXG4gICAgICBcInVuZGVybGluZVwiOiB0cnVlXG4gICAgfSk7XG4gIH1cbn0iLCIvKlxuICogQ29weXJpZ2h0IChDKSAyMDIwIEVsaWFzdGlrIChlbGlhc3Rpa3NvZnRzLmNvbSlcbiAqXG4gKiBUaGlzIGZpbGUgaXMgcGFydCBvZiBcIkpTR2FtZVRvb2xzXCIuXG4gKlxuICogXCJKU0dhbWVUb29sc1wiIGlzIGZyZWUgc29mdHdhcmU6IHlvdSBjYW4gcmVkaXN0cmlidXRlIGl0IGFuZC9vciBtb2RpZnlcbiAqIGl0IHVuZGVyIHRoZSB0ZXJtcyBvZiB0aGUgR05VIEdlbmVyYWwgUHVibGljIExpY2Vuc2UgYXMgcHVibGlzaGVkIGJ5XG4gKiB0aGUgRnJlZSBTb2Z0d2FyZSBGb3VuZGF0aW9uLCBlaXRoZXIgdmVyc2lvbiAzIG9mIHRoZSBMaWNlbnNlLCBvclxuICogKGF0IHlvdXIgb3B0aW9uKSBhbnkgbGF0ZXIgdmVyc2lvbi5cbiAqXG4gKiBcIkpTR2FtZVRvb2xzXCIgaXMgZGlzdHJpYnV0ZWQgaW4gdGhlIGhvcGUgdGhhdCBpdCB3aWxsIGJlIHVzZWZ1bCxcbiAqIGJ1dCBXSVRIT1VUIEFOWSBXQVJSQU5UWTsgd2l0aG91dCBldmVuIHRoZSBpbXBsaWVkIHdhcnJhbnR5IG9mXG4gKiBNRVJDSEFOVEFCSUxJVFkgb3IgRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UuICBTZWUgdGhlXG4gKiBHTlUgR2VuZXJhbCBQdWJsaWMgTGljZW5zZSBmb3IgbW9yZSBkZXRhaWxzLlxuICpcbiAqIFlvdSBzaG91bGQgaGF2ZSByZWNlaXZlZCBhIGNvcHkgb2YgdGhlIEdOVSBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlXG4gKiBhbG9uZyB3aXRoIFwiSlNHYW1lVG9vbHNcIi4gIElmIG5vdCwgc2VlIDxodHRwOi8vd3d3LmdudS5vcmcvbGljZW5zZXMvPi5cbiAqL1xuaW1wb3J0IENvbnN0YW50cyBmcm9tIFwiLi9Db25zdGFudHNcIjtcbmltcG9ydCBVdGlscyBmcm9tIFwiLi9VdGlsc1wiO1xuaW1wb3J0IENvbXBvbmVudCBmcm9tIFwiLi9Db21wb25lbnRcIjtcbmltcG9ydCBDb2wgZnJvbSBcIi4vQ29sXCI7XG5pbXBvcnQgU3R5bGUgZnJvbSBcIi4vU3R5bGVcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTWVudSBleHRlbmRzIENvbCB7XG4gIHNlbGVjdGFibGUgPSBmYWxzZTtcblxuICBjb25zdHJ1Y3RvcihzdHlsZSwgLi4uY29tcG9uZW50cykge1xuICAgIHN1cGVyKDAsIDAsIG51bGwsIG51bGwsIHN0eWxlLCAuLi5jb21wb25lbnRzKTtcblxuICAgIHRoaXMubGFzdEtleSA9IHRoaXMubGFzdEtleSA9PSB1bmRlZmluZWQgPyAtMSA6IHRoaXMubGFzdEtleTtcbiAgICB0aGlzLnNlbGVjdGVkQ29tcG9uZW50ID0gdGhpcy5zZWxlY3RlZENvbXBvbmVudCA9PSB1bmRlZmluZWQgPyAwIDogdGhpcy5zZWxlY3RlZENvbXBvbmVudDtcblxuICAgIHRoaXMuZGlzYWJsZSgpO1xuICB9XG5cbiAgZHJhdyhjb250ZXh0KSB7XG4gICAgaWYodGhpcy5oaWRkZW4pIHJldHVybjtcbiAgICBjb25zdCBjYW52YXMgPSBjb250ZXh0LmNhbnZhcztcbiAgICBjb25zdCBjdHggPSBjYW52YXMuZ2V0Q29udGV4dChcIjJkXCIpO1xuXG4gICAgaWYodGhpcy5zdHlsZS5ibHVyQmFja2dyb3VuZCkge1xuICAgICAgdGhpcy5kcmF3Qmx1cihjdHgpO1xuICAgIH1cblxuICAgIGN0eC5zYXZlKCk7XG5cbiAgICB0aGlzLmRyYXdDb21wb25lbnRzKGN0eCk7XG4gICAgXG4gICAgaWYoIXRoaXMuaW5pdCkge1xuICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcImtleWRvd25cIiwgZXZlbnQgPT4ge1xuICAgICAgICBpZighdGhpcy5kaXNhYmxlZCkge1xuICAgICAgICAgIHRoaXMubGFzdEtleSA9IGV2ZW50LmtleUNvZGU7XG4gICAgICAgICAgaWYodGhpcy5sYXN0S2V5ID09IENvbnN0YW50cy5LZXkuVVAgfHwgdGhpcy5sYXN0S2V5ID09IENvbnN0YW50cy5LZXkuQk9UVE9NKSBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICB9XG4gICAgICB9KTtcblxuICAgICAgdGhpcy5pbml0ID0gdHJ1ZTtcbiAgICB9XG5cbiAgICBsZXQga2V5QWN0aW9uID0gZmFsc2U7XG4gIFxuICAgIGlmKHRoaXMuY29tcG9uZW50cyAhPSBudWxsKSB7XG4gICAgICBpZih0aGlzLmxhc3RLZXkgPT0gQ29uc3RhbnRzLktleS5VUCkge1xuICAgICAgICB0aGlzLnNlbGVjdCh0aGlzLnNlbGVjdGVkQ29tcG9uZW50IC0gMSk7XG4gICAgICAgIGtleUFjdGlvbiA9IHRydWU7XG4gICAgICB9IGVsc2UgaWYodGhpcy5sYXN0S2V5ID09IENvbnN0YW50cy5LZXkuQk9UVE9NKSB7XG4gICAgICAgIHRoaXMuc2VsZWN0KHRoaXMuc2VsZWN0ZWRDb21wb25lbnQgKyAxKTtcbiAgICAgICAga2V5QWN0aW9uID0gdHJ1ZTtcbiAgICAgIH0gZWxzZSBpZih0aGlzLmxhc3RLZXkgPT0gQ29uc3RhbnRzLktleS5FQ0hBUCkge1xuICAgICAgICB0aGlzLmRpc2FibGUoKTtcbiAgICAgICAga2V5QWN0aW9uID0gdHJ1ZTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuY29tcG9uZW50cy5mb3JFYWNoKChjb21wb25lbnQsIGkpID0+IHtcbiAgICAgICAgICBpZihjb21wb25lbnQuc2VsZWN0ZWQpIHRoaXMuc2VsZWN0KGkpO1xuICAgICAgICB9KTtcbiAgICAgIH1cblxuICAgICAgdGhpcy5jb21wb25lbnRzLmZvckVhY2goKGNvbXBvbmVudCwgaSkgPT4ge1xuICAgICAgICBpZihjb21wb25lbnQgaW5zdGFuY2VvZiBDb21wb25lbnQpIHtcbiAgICAgICAgICBpZihrZXlBY3Rpb24pIHtcbiAgICAgICAgICAgIGlmKHRoaXMuc2VsZWN0ZWRDb21wb25lbnQgPT0gaSkge1xuICAgICAgICAgICAgICBpZihjb21wb25lbnQuc2VsZWN0YWJsZSkge1xuICAgICAgICAgICAgICAgIGNvbXBvbmVudC5zZWxlY3RlZCA9IHRydWU7XG4gICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICBpZighdGhpcy5pc0NvbXBvbmVudFZpc2libGUoY29tcG9uZW50KSkge1xuICAgICAgICAgICAgICAgIGNvbnN0IGNvbXBvbmVudEhlaWdodCA9IGNvbXBvbmVudC5oZWlnaHQ7XG4gICAgICAgICAgICAgICAgY29uc3QgZGVsdGFZID0gKHRoaXMubWF4SGVpZ2h0IC0gdGhpcy5vZmZzZXRTY3JvbGxZKSAtIChjb21wb25lbnQueSArIGNvbXBvbmVudEhlaWdodCk7XG4gICAgICAgICAgICAgICAgdGhpcy5vZmZzZXRTY3JvbGxZID0gLWRlbHRhWTtcblxuICAgICAgICAgICAgICAgIHRoaXMuY29udHJvbFNjcm9sbGluZyhudWxsLCAtZGVsdGFZKTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgY29tcG9uZW50LnNlbGVjdGVkID0gZmFsc2U7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgIFxuICAgICAgICAgIGlmKHRoaXMuc2VsZWN0ZWRDb21wb25lbnQgPT0gaSAmJiB0aGlzLmxhc3RLZXkgPT0gQ29uc3RhbnRzLktleS5FTlRFUiAmJiBjb21wb25lbnQucmVhY3RvciAmJiAhY29tcG9uZW50LmRpc2FibGVkKSB7XG4gICAgICAgICAgICB0aGlzLmxhc3RLZXkgPSAtMTtcbiAgICAgICAgICAgIHRoaXMuc2VsZWN0ZWRDb21wb25lbnQgPSAwO1xuICAgICAgICAgICAgY29tcG9uZW50LnJlYWN0b3IuZGlzcGF0Y2hFdmVudChcIm9uQ2xpY2tcIik7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9XG4gICAgXG4gICAgY3R4LnJlc3RvcmUoKTtcbiAgICB0aGlzLmxhc3RLZXkgPSAtMTtcbiAgfVxuXG4gIGRyYXdDb21wb25lbnRzKGN0eCkge1xuICAgIHN1cGVyLmRyYXcoY3R4KTtcbiAgfVxuXG4gIGRyYXdCbHVyKGN0eCkge1xuICAgIFV0aWxzLmJsdXJDYW52YXMoY3R4LCA1KTtcbiAgfVxuXG4gIGRyYXdCYWNrZ3JvdW5kKGN0eCkge1xuICAgIGN0eC5maWxsU3R5bGUgPSB0aGlzLnN0eWxlLmJhY2tncm91bmRDb2xvcjtcbiAgICBjdHguZmlsbFJlY3QodGhpcy5wYXJlbnQgPyB0aGlzLnBhcmVudC54IDogMCwgdGhpcy5wYXJlbnQgPyB0aGlzLnBhcmVudC55IDogMCwgdGhpcy5tYXhXaWR0aCwgdGhpcy5tYXhIZWlnaHQpO1xuICB9XG5cbiAgZGlzYWJsZSgpIHtcbiAgICBzdXBlci5kaXNhYmxlKCk7XG4gICAgdGhpcy5jb21wb25lbnRzLmZvckVhY2goY29tcG9uZW50ID0+IGNvbXBvbmVudCAmJiBjb21wb25lbnQuZGlzYWJsZSAmJiBjb21wb25lbnQuZGlzYWJsZSgpKTtcbiAgfVxuXG4gIGVuYWJsZSgpIHtcbiAgICBzdXBlci5lbmFibGUoKTtcbiAgICB0aGlzLmNvbXBvbmVudHMuZm9yRWFjaChjb21wb25lbnQgPT4gY29tcG9uZW50ICYmIGNvbXBvbmVudC5lbmFibGUgJiYgY29tcG9uZW50LmVuYWJsZSgpKTtcbiAgfVxuXG4gIHNlbGVjdChpbmRleCkge1xuICAgIHRoaXMuc2VsZWN0ZWRDb21wb25lbnQgPSBpbmRleDtcblxuICAgIGNvbnN0IHNlbGVjdGFibGVDb21wb25lbnRzID0gdGhpcy5jb21wb25lbnRzLmZpbHRlcihjb21wb25lbnQgPT4gY29tcG9uZW50LnNlbGVjdGFibGUpO1xuICAgIGlmKHNlbGVjdGFibGVDb21wb25lbnRzLmxlbmd0aCA8PSAwKSByZXR1cm47XG5cbiAgICBpZih0aGlzLnNlbGVjdGVkQ29tcG9uZW50ID49IHRoaXMuY29tcG9uZW50cy5sZW5ndGgpIHtcbiAgICAgIHRoaXMuc2VsZWN0ZWRDb21wb25lbnQgPSAwO1xuICAgIH0gZWxzZSBpZih0aGlzLnNlbGVjdGVkQ29tcG9uZW50IDwgMCkge1xuICAgICAgdGhpcy5zZWxlY3RlZENvbXBvbmVudCA9IHRoaXMuY29tcG9uZW50cy5sZW5ndGggLSAxO1xuICAgIH1cblxuICAgIGlmKHRoaXMuY29tcG9uZW50c1t0aGlzLnNlbGVjdGVkQ29tcG9uZW50XSAmJiAhdGhpcy5jb21wb25lbnRzW3RoaXMuc2VsZWN0ZWRDb21wb25lbnRdLnNlbGVjdGFibGUpIHtcbiAgICAgIGlmKHRoaXMubGFzdEtleSA9PSBDb25zdGFudHMuS2V5LlVQKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnNlbGVjdCh0aGlzLnNlbGVjdGVkQ29tcG9uZW50IC0gMSk7XG4gICAgICB9IGVsc2UgaWYodGhpcy5sYXN0S2V5ID09IENvbnN0YW50cy5LZXkuQk9UVE9NKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnNlbGVjdCh0aGlzLnNlbGVjdGVkQ29tcG9uZW50ICsgMSk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgZ2V0IHNjcm9sbEFyZWFTaXplWCgpIHtcbiAgICByZXR1cm4gdGhpcy5pbm5lcldpZHRoIC0gdGhpcy5tYXhXaWR0aDtcbiAgfVxuXG4gIGdldCBzY3JvbGxBcmVhU2l6ZVkoKSB7XG4gICAgcmV0dXJuIHRoaXMuaW5uZXJIZWlnaHQgLSB0aGlzLm1heEhlaWdodDtcbiAgfVxuXG4gIGdldCBtYXhIZWlnaHQoKSB7XG4gICAgcmV0dXJuIHN1cGVyLm1heEhlaWdodCB8fCAodGhpcy5jYW52YXMgJiYgdGhpcy5jYW52YXMuc2NlbmUgJiYgdGhpcy5jYW52YXMuc2NlbmUuaGVpZ2h0KTtcbiAgfVxuXG4gIGdldCBtYXhXaWR0aCgpIHtcbiAgICByZXR1cm4gKHRoaXMuY2FudmFzICYmIHRoaXMuY2FudmFzLnNjZW5lICYmIHRoaXMuY2FudmFzLnNjZW5lLndpZHRoKTtcbiAgfVxuXG4gIGdldCBtaW5XaWR0aCgpIHtcbiAgICByZXR1cm4gdGhpcy5wYXJlbnQgPyB0aGlzLnBhcmVudC53aWR0aCA6IDA7XG4gIH1cblxuICBnZXQgZGVmYXVsdFN0eWxlKCkge1xuICAgIHJldHVybiBuZXcgU3R5bGUoe1xuICAgICAgXCJibHVyQmFja2dyb3VuZFwiOiBDb25zdGFudHMuU2V0dGluZy5NRU5VX0RFRkFVTFRfQkxVUl9CQUNLR1JPVU5ELFxuICAgICAgXCJiYWNrZ3JvdW5kQ29sb3JcIjogQ29uc3RhbnRzLlNldHRpbmcuTUVOVV9ERUZBVUxUX0JBQ0tHUk9VTkQsXG4gICAgICBcInZlcnRpY2FsQWxpZ25lbWVudFwiOiBDb25zdGFudHMuVmVydGljYWxBbGlnbmVtZW50LkNFTlRFUixcbiAgICAgIFwic2Nyb2xsWERpc2FibGVkXCI6IHRydWVcbiAgICB9KTtcbiAgfVxuXG4gIGNvbXBhcmVUb0NvbXBvbmVudChvdGhlckNvbXBvbmVudCkge1xuICAgIHJldHVybiBvdGhlckNvbXBvbmVudC5jb21wYXJlVG9NZW51KHRoaXMpO1xuICB9XG5cbiAgY29tcGFyZVRvTWVudShvdGhlckNvbXBvbmVudCkge1xuICAgIHJldHVybiAwO1xuICB9XG5cbiAgY29tcGFyZVRvVG9vbHRpcChvdGhlckNvbXBvbmVudCkge1xuICAgIHJldHVybiAtMTtcbiAgfVxuXG4gIGNvbXBhcmVUb05vdGlmaWNhdGlvbihvdGhlckNvbXBvbmVudCkge1xuICAgIHJldHVybiAxO1xuICB9XG5cbiAgZ2V0IGhpZGRlbigpIHtcbiAgICByZXR1cm4gc3VwZXIuaGlkZGVuIHx8IHRoaXMuZGlzYWJsZWQ7XG4gIH1cblxuICBzZXQgaGlkZGVuKGhpZGRlbikge1xuICAgIHN1cGVyLmhpZGRlbiA9IGhpZGRlbjtcbiAgICB0aGlzLmRpc2FibGVkID0gaGlkZGVuO1xuICB9XG5cbiAgaXNJbnNpZGUocG9zKSB7XG4gICAgcmV0dXJuICF0aGlzLmhpZGRlbjtcbiAgfVxufSIsIi8qXG4gKiBDb3B5cmlnaHQgKEMpIDIwMjAgRWxpYXN0aWsgKGVsaWFzdGlrc29mdHMuY29tKVxuICpcbiAqIFRoaXMgZmlsZSBpcyBwYXJ0IG9mIFwiSlNHYW1lVG9vbHNcIi5cbiAqXG4gKiBcIkpTR2FtZVRvb2xzXCIgaXMgZnJlZSBzb2Z0d2FyZTogeW91IGNhbiByZWRpc3RyaWJ1dGUgaXQgYW5kL29yIG1vZGlmeVxuICogaXQgdW5kZXIgdGhlIHRlcm1zIG9mIHRoZSBHTlUgR2VuZXJhbCBQdWJsaWMgTGljZW5zZSBhcyBwdWJsaXNoZWQgYnlcbiAqIHRoZSBGcmVlIFNvZnR3YXJlIEZvdW5kYXRpb24sIGVpdGhlciB2ZXJzaW9uIDMgb2YgdGhlIExpY2Vuc2UsIG9yXG4gKiAoYXQgeW91ciBvcHRpb24pIGFueSBsYXRlciB2ZXJzaW9uLlxuICpcbiAqIFwiSlNHYW1lVG9vbHNcIiBpcyBkaXN0cmlidXRlZCBpbiB0aGUgaG9wZSB0aGF0IGl0IHdpbGwgYmUgdXNlZnVsLFxuICogYnV0IFdJVEhPVVQgQU5ZIFdBUlJBTlRZOyB3aXRob3V0IGV2ZW4gdGhlIGltcGxpZWQgd2FycmFudHkgb2ZcbiAqIE1FUkNIQU5UQUJJTElUWSBvciBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRS4gIFNlZSB0aGVcbiAqIEdOVSBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlIGZvciBtb3JlIGRldGFpbHMuXG4gKlxuICogWW91IHNob3VsZCBoYXZlIHJlY2VpdmVkIGEgY29weSBvZiB0aGUgR05VIEdlbmVyYWwgUHVibGljIExpY2Vuc2VcbiAqIGFsb25nIHdpdGggXCJKU0dhbWVUb29sc1wiLiAgSWYgbm90LCBzZWUgPGh0dHA6Ly93d3cuZ251Lm9yZy9saWNlbnNlcy8+LlxuICovXG5pbXBvcnQgQ29uc3RhbnRzIGZyb20gXCIuL0NvbnN0YW50c1wiO1xuaW1wb3J0IENvbCBmcm9tIFwiLi9Db2xcIjtcbmltcG9ydCBCdXR0b24gZnJvbSBcIi4vQnV0dG9uXCI7XG5pbXBvcnQgQ3Jvc3MgZnJvbSBcIi4vQ3Jvc3NcIjtcbmltcG9ydCBTdHlsZSBmcm9tIFwiLi9TdHlsZVwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBOb3RpZmljYXRpb25NZXNzYWdlIGV4dGVuZHMgQ29sIHtcbiAgc2VsZWN0YWJsZSA9IGZhbHNlO1xuXG4gIGNvbnN0cnVjdG9yKHN0eWxlLCBkZWxheUJlZm9yZUNsb3NpbmcsIGVhc2luZ0Z1bmN0aW9uLCAuLi5jb21wb25lbnRzKSB7XG4gICAgc3VwZXIoMCwgMCwgbnVsbCwgbnVsbCwgc3R5bGUsIC4uLmNvbXBvbmVudHMpO1xuXG4gICAgdGhpcy5kZWxheUJlZm9yZUNsb3NpbmcgPSBkZWxheUJlZm9yZUNsb3NpbmcgPT0gdW5kZWZpbmVkID8gNSA6IGRlbGF5QmVmb3JlQ2xvc2luZzsgLy8gc2Vjb25kXG4gICAgdGhpcy50aW1lTGFzdEZyYW1lID0gMDtcbiAgICB0aGlzLmFuaW1hdGlvblRpbWUgPSAwO1xuICAgIHRoaXMuY2xvc2VkID0gdHJ1ZTtcbiAgICB0aGlzLmNsb3NpbmcgPSBmYWxzZTtcbiAgICB0aGlzLmVhc2luZ0Z1bmN0aW9uID0gZWFzaW5nRnVuY3Rpb247XG5cbiAgICB0aGlzLmNsb3NlQnV0dG9uID0gbmV3IEJ1dHRvbihudWxsLCBudWxsLCBudWxsLCBudWxsLCBuZXcgU3R5bGUoe1wiYWxpZ25lbWVudFwiOiBDb25zdGFudHMuQWxpZ25lbWVudC5SSUdIVCwgXCJ2ZXJ0aWNhbEFsaWduZW1lbnRcIjogQ29uc3RhbnRzLlZlcnRpY2FsQWxpZ25lbWVudC5UT1AsIFwicGFkZGluZ1wiOiAxMCB9KSwgbmV3IENyb3NzKG51bGwsIG51bGwsIDEwLCAxMCkpO1xuICAgIHRoaXMuYWRkKHRoaXMuY2xvc2VCdXR0b24pO1xuICB9XG4gIFxuICBkcmF3KGNvbnRleHQpIHtcbiAgICBpZih0aGlzLmhpZGRlbikgcmV0dXJuO1xuICAgIHRoaXMuY2xvc2VCdXR0b24uY2FudmFzID0gdGhpcy5jYW52YXM7XG5cbiAgICBjb25zdCBjYW52YXMgPSBjb250ZXh0LmNhbnZhcztcbiAgICBjb25zdCBjdHggPSBjYW52YXMuZ2V0Q29udGV4dChcIjJkXCIpO1xuXG4gICAgY3R4LnNhdmUoKTtcblxuICAgIGlmKCF0aGlzLmluaXQpIHtcbiAgICAgIHRoaXMudGltZUxhc3RGcmFtZSA9IHBlcmZvcm1hbmNlLm5vdygpO1xuICAgIH1cbiAgICBcbiAgICBpZih0aGlzLmNsb3NlQnV0dG9uICE9IG51bGwpIHtcbiAgICAgIHRoaXMuY2xvc2VCdXR0b24uc2V0Q2xpY2tBY3Rpb24oKCkgPT4ge1xuICAgICAgICB0aGlzLmNsb3NlKCk7XG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBjb25zdCBvZmZzZXRUaW1lID0gcGVyZm9ybWFuY2Uubm93KCkgLSB0aGlzLnRpbWVMYXN0RnJhbWU7XG4gICAgdGhpcy50aW1lTGFzdEZyYW1lID0gcGVyZm9ybWFuY2Uubm93KCk7XG5cbiAgICBpZih0aGlzLmFuaW1hdGlvblRpbWUgPj0gdGhpcy5kZWxheUJlZm9yZUNsb3NpbmcgKiAxMDAwICYmICF0aGlzLmNsb3NpbmcgJiYgIXRoaXMuY2xvc2VkKSB7XG4gICAgICB0aGlzLmNsb3NlKCk7XG4gICAgfVxuXG4gICAgaWYoIXRoaXMuY2xvc2luZykge1xuICAgICAgdGhpcy5hbmltYXRpb25UaW1lICs9IG9mZnNldFRpbWU7XG4gICAgfSBlbHNlIHtcbiAgICAgIGlmKHRoaXMuc3R5bGUuZGlzYWJsZUFuaW1hdGlvbikge1xuICAgICAgICB0aGlzLmFuaW1hdGlvblRpbWUgPSAtMTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuYW5pbWF0aW9uVGltZSAtPSBvZmZzZXRUaW1lO1xuICAgICAgfVxuICAgIH1cblxuICAgIGlmKHRoaXMuYW5pbWF0aW9uVGltZSA8IDApIHtcbiAgICAgIHRoaXMuY2xvc2VkID0gdHJ1ZTtcbiAgICAgIHRoaXMuY2xvc2luZyA9IGZhbHNlO1xuICAgIH1cblxuICAgIGlmKCF0aGlzLmNsb3NlZCkge1xuICAgICAgdGhpcy5kcmF3Q29tcG9uZW50cyhjdHgpO1xuXG4gICAgICBpZih0aGlzLmNsb3NlQnV0dG9uICE9IG51bGwpIHtcbiAgICAgICAgdGhpcy5jbG9zZUJ1dHRvbi55ID0gdGhpcy55ICsgdGhpcy5zdHlsZS5wYWRkaW5nIC8gMjtcbiAgICAgICAgdGhpcy5jbG9zZUJ1dHRvbi5kcmF3KGN0eCk7XG4gICAgICB9XG5cbiAgICAgIHRoaXMuZW5hYmxlQ2xvc2VCdXR0b24oKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5kaXNhYmxlQ2xvc2VCdXR0b24oKTtcbiAgICB9XG5cbiAgICBjdHgucmVzdG9yZSgpO1xuXG4gICAgdGhpcy5pbml0ID0gdHJ1ZTtcbiAgfVxuICBcbiAgZ2V0IG9mZnNldFkoKSB7XG4gICAgbGV0IG9mZnNldFkgPSAxO1xuXG4gICAgaWYoIXRoaXMuc3R5bGUuZGlzYWJsZUFuaW1hdGlvbikge1xuICAgICAgb2Zmc2V0WSA9IHRoaXMuYW5pbWF0aW9uVGltZSAvIHRoaXMuc3R5bGUuYW5pbWF0aW9uRHVyYXRpb247XG5cbiAgICAgIGlmKHRoaXMuZWFzaW5nRnVuY3Rpb24pIHtcbiAgICAgICAgb2Zmc2V0WSA9IHRoaXMuZWFzaW5nRnVuY3Rpb24ob2Zmc2V0WSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIG9mZnNldFk7XG4gIH1cblxuICBnZXQgeSgpIHtcbiAgICBjb25zdCBvZmZzZXRZID0gdGhpcy5vZmZzZXRZO1xuXG4gICAgaWYodGhpcy5zdHlsZS52ZXJ0aWNhbEFsaWduZW1lbnQgPT0gQ29uc3RhbnRzLlZlcnRpY2FsQWxpZ25lbWVudC5UT1ApIHtcbiAgICAgIHJldHVybiAodGhpcy5oZWlnaHQgKiAob2Zmc2V0WSA8PSAxID8gb2Zmc2V0WSA6IDEpKSAtIHRoaXMuaGVpZ2h0O1xuICAgIH0gXG4gICAgXG4gICAgcmV0dXJuIHRoaXMuY2FudmFzLnNjZW5lLmhlaWdodCAtICh0aGlzLmhlaWdodCAqIChvZmZzZXRZIDw9IDEgPyBvZmZzZXRZIDogMSkpO1xuICB9XG5cbiAgc2V0IHkoeSkge1xuICAgIHN1cGVyLnkgPSB5O1xuICB9XG5cbiAgZHJhd0NvbXBvbmVudHMoY3R4KSB7XG4gICAgc3VwZXIuZHJhdyhjdHgpO1xuICB9XG5cbiAgY2xvc2UoKSB7XG4gICAgdGhpcy5kaXNhYmxlQ2xvc2VCdXR0b24oKTtcbiAgXG4gICAgaWYoIXRoaXMuY2xvc2luZykge1xuICAgICAgdGhpcy5jbG9zaW5nID0gdHJ1ZTtcbiAgICAgIHRoaXMuYW5pbWF0aW9uVGltZSA9IHRoaXMuc3R5bGUuYW5pbWF0aW9uRHVyYXRpb247XG4gICAgfVxuICB9XG4gIFxuICBvcGVuKCkge1xuICAgIHRoaXMudGltZUxhc3RGcmFtZSA9IDA7XG4gICAgdGhpcy5hbmltYXRpb25UaW1lID0gMDtcbiAgICB0aGlzLmluaXQgPSBmYWxzZTtcbiAgICB0aGlzLmNsb3NlZCA9IGZhbHNlO1xuICAgIHRoaXMuY2xvc2luZyA9IGZhbHNlO1xuICB9XG4gIFxuICBkaXNhYmxlQ2xvc2VCdXR0b24oKSB7XG4gICAgaWYodGhpcy5jbG9zZUJ1dHRvbiAhPSB1bmRlZmluZWQgJiYgdGhpcy5jbG9zZUJ1dHRvbiAhPSBudWxsICYmIHRoaXMuY2xvc2VCdXR0b24gaW5zdGFuY2VvZiBCdXR0b24pIHtcbiAgICAgIHRoaXMuY2xvc2VCdXR0b24uZGlzYWJsZSgpO1xuICAgIH1cbiAgfVxuICBcbiAgZW5hYmxlQ2xvc2VCdXR0b24oKSB7XG4gICAgaWYodGhpcy5jbG9zZUJ1dHRvbiAhPSB1bmRlZmluZWQgJiYgdGhpcy5jbG9zZUJ1dHRvbiAhPSBudWxsICYmIHRoaXMuY2xvc2VCdXR0b24gaW5zdGFuY2VvZiBCdXR0b24pIHtcbiAgICAgIHRoaXMuY2xvc2VCdXR0b24uZW5hYmxlKCk7XG4gICAgfVxuICB9O1xuICBcbiAgY29weSgpIHtcbiAgICByZXR1cm4gbmV3IE5vdGlmaWNhdGlvbk1lc3NhZ2UodGhpcy5zdHlsZS5jb3B5KCksIHRoaXMuZGVsYXlCZWZvcmVDbG9zaW5nLCB0aGlzLmVhc2luZ0Z1bmN0aW9uLCAuLi50aGlzLmNvbXBvbmVudHMpO1xuICB9XG5cbiAgZ2V0IHdpZHRoKCkge1xuICAgIHJldHVybiB0aGlzLmNhbnZhcyAmJiB0aGlzLmNhbnZhcy5zY2VuZSA/IHRoaXMuY2FudmFzLnNjZW5lLndpZHRoIDogbnVsbDtcbiAgfVxuXG4gIGdldCBoZWlnaHQoKSB7XG4gICAgcmV0dXJuIHN1cGVyLmhlaWdodCAtICh0aGlzLmNsb3NlQnV0dG9uID8gdGhpcy5jbG9zZUJ1dHRvbi5oZWlnaHQgOiAwKTtcbiAgfVxuXG4gIGdldCBkZWZhdWx0U3R5bGUoKSB7XG4gICAgcmV0dXJuIG5ldyBTdHlsZSh7XG4gICAgICBcImFsaWduZW1lbnRcIjogQ29uc3RhbnRzLkFsaWduZW1lbnQuQ0VOVEVSLFxuICAgICAgXCJiYWNrZ3JvdW5kQ29sb3JcIjogQ29uc3RhbnRzLlNldHRpbmcuTk9USUZJQ0FUSU9OX0RFRkFVTFRfQkFDS0dST1VORCxcbiAgICAgIFwiYW5pbWF0aW9uRHVyYXRpb25cIjogQ29uc3RhbnRzLlNldHRpbmcuTk9USUZJQ0FUSU9OX0RFRkFVTFRfQU5JTUFUSU9OX0RVUkFUSU9OXG4gICAgfSk7XG4gIH1cblxuICBnZXQgaGlkZGVuKCkge1xuICAgIHJldHVybiBzdXBlci5oaWRkZW4gfHwgdGhpcy5jbG9zZWQ7XG4gIH1cblxuICBzZXQgaGlkZGVuKGhpZGRlbikge1xuICAgIHN1cGVyLmhpZGRlbiA9IGhpZGRlbjtcblxuICAgIGlmKGhpZGRlbikge1xuICAgICAgdGhpcy5mb3JjZUNsb3NlKCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMub3BlbigpO1xuICAgIH1cbiAgfVxuXG4gIGNvbXBhcmVUb0NvbXBvbmVudChvdGhlckNvbXBvbmVudCkge1xuICAgIHJldHVybiBvdGhlckNvbXBvbmVudC5jb21wYXJlVG9Ob3RpZmljYXRpb24odGhpcyk7XG4gIH1cblxuICBjb21wYXJlVG9Ub29sdGlwKG90aGVyQ29tcG9uZW50KSB7XG4gICAgcmV0dXJuIC0xO1xuICB9XG5cbiAgY29tcGFyZVRvTm90aWZpY2F0aW9uKG90aGVyQ29tcG9uZW50KSB7XG4gICAgcmV0dXJuIDA7XG4gIH1cblxuICBjb21wYXJlVG9NZW51KG90aGVyQ29tcG9uZW50KSB7XG4gICAgcmV0dXJuIC0xO1xuICB9XG59IiwiLypcbiAqIENvcHlyaWdodCAoQykgMjAyMCBFbGlhc3RpayAoZWxpYXN0aWtzb2Z0cy5jb20pXG4gKlxuICogVGhpcyBmaWxlIGlzIHBhcnQgb2YgXCJKU0dhbWVUb29sc1wiLlxuICpcbiAqIFwiSlNHYW1lVG9vbHNcIiBpcyBmcmVlIHNvZnR3YXJlOiB5b3UgY2FuIHJlZGlzdHJpYnV0ZSBpdCBhbmQvb3IgbW9kaWZ5XG4gKiBpdCB1bmRlciB0aGUgdGVybXMgb2YgdGhlIEdOVSBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlIGFzIHB1Ymxpc2hlZCBieVxuICogdGhlIEZyZWUgU29mdHdhcmUgRm91bmRhdGlvbiwgZWl0aGVyIHZlcnNpb24gMyBvZiB0aGUgTGljZW5zZSwgb3JcbiAqIChhdCB5b3VyIG9wdGlvbikgYW55IGxhdGVyIHZlcnNpb24uXG4gKlxuICogXCJKU0dhbWVUb29sc1wiIGlzIGRpc3RyaWJ1dGVkIGluIHRoZSBob3BlIHRoYXQgaXQgd2lsbCBiZSB1c2VmdWwsXG4gKiBidXQgV0lUSE9VVCBBTlkgV0FSUkFOVFk7IHdpdGhvdXQgZXZlbiB0aGUgaW1wbGllZCB3YXJyYW50eSBvZlxuICogTUVSQ0hBTlRBQklMSVRZIG9yIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFLiAgU2VlIHRoZVxuICogR05VIEdlbmVyYWwgUHVibGljIExpY2Vuc2UgZm9yIG1vcmUgZGV0YWlscy5cbiAqXG4gKiBZb3Ugc2hvdWxkIGhhdmUgcmVjZWl2ZWQgYSBjb3B5IG9mIHRoZSBHTlUgR2VuZXJhbCBQdWJsaWMgTGljZW5zZVxuICogYWxvbmcgd2l0aCBcIkpTR2FtZVRvb2xzXCIuICBJZiBub3QsIHNlZSA8aHR0cDovL3d3dy5nbnUub3JnL2xpY2Vuc2VzLz4uXG4gKi9cbmltcG9ydCBCb3ggZnJvbSBcIi4vQm94XCI7XG5pbXBvcnQgQ29uc3RhbnRzIGZyb20gXCIuL0NvbnN0YW50c1wiO1xuaW1wb3J0IFN0eWxlIGZyb20gXCIuL1N0eWxlXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFByb2dyZXNzQmFyIGV4dGVuZHMgQm94IHtcbiAgI3ByZWNQZXJjZW50ID0gMDtcbiAgc2VsZWN0YWJsZSA9IGZhbHNlO1xuXG4gIGNvbnN0cnVjdG9yKHgsIHksIHdpZHRoLCBoZWlnaHQsIHN0eWxlLCBkZWZhdWx0UGVyY2VudCwgZWFzaW5nRnVuY3Rpb24pIHtcbiAgICBzdXBlcih4LCB5LCB3aWR0aCwgaGVpZ2h0LCBzdHlsZSk7XG5cbiAgICB0aGlzLnBlcmNlbnQgPSBkZWZhdWx0UGVyY2VudCA9PSB1bmRlZmluZWQgPyAwIDogZGVmYXVsdFBlcmNlbnQ7XG4gICAgdGhpcy4jcHJlY1BlcmNlbnQgPSB0aGlzLnBlcmNlbnQ7XG4gICAgdGhpcy5lYXNpbmdGdW5jdGlvbiA9IGVhc2luZ0Z1bmN0aW9uO1xuXG4gICAgdGhpcy5sYXN0VGltZSA9IDA7XG4gICAgdGhpcy50b3RhbFRpbWUgPSAwO1xuICB9XG5cbiAgZHJhdyhjb250ZXh0KSB7XG4gICAgaWYodGhpcy5oaWRkZW4pIHJldHVybjtcbiAgICBzdXBlci5kcmF3KGNvbnRleHQpO1xuXG4gICAgY29uc3QgY2FudmFzID0gY29udGV4dC5jYW52YXM7XG4gICAgY29uc3QgY3R4ID0gY2FudmFzLmdldENvbnRleHQoXCIyZFwiKTtcbiAgICBjdHguc2F2ZSgpO1xuXG4gICAgY29uc3QgdGltZSA9IHBlcmZvcm1hbmNlLm5vdygpO1xuICAgIGxldCBvZmZzZXRUaW1lID0gMDtcblxuICAgIGlmKHRoaXMuI3ByZWNQZXJjZW50ICE9IHRoaXMucGVyY2VudCAmJiAhdGhpcy5zdHlsZS5kaXNhYmxlQW5pbWF0aW9uKSB7XG4gICAgICBpZih0aGlzLmxhc3RUaW1lID4gMCkgb2Zmc2V0VGltZSA9IHRpbWUgLSB0aGlzLmxhc3RUaW1lO1xuICAgICAgdGhpcy50b3RhbFRpbWUgKz0gb2Zmc2V0VGltZTtcblxuICAgICAgaWYodGhpcy50b3RhbFRpbWUgPj0gdGhpcy5zdHlsZS5hbmltYXRpb25EdXJhdGlvbikge1xuICAgICAgICB0aGlzLiNwcmVjUGVyY2VudCA9IHRoaXMucGVyY2VudDtcbiAgICAgICAgdGhpcy50b3RhbFRpbWUgPSAwO1xuICAgICAgICB0aGlzLmxhc3RUaW1lID0gMDtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMubGFzdFRpbWUgPSB0aW1lO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnRvdGFsVGltZSA9IDA7XG4gICAgICB0aGlzLmxhc3RUaW1lID0gMDtcbiAgICB9XG5cbiAgICB0aGlzLmRyYXdCYWNrZ3JvdW5kKGN0eCk7XG4gICAgdGhpcy5kcmF3Rm9yZWdyb3VuZChjdHgsIHRoaXMud2lkdGhGb3JlZ3JvdW5kKTtcblxuICAgIGN0eC5yZXN0b3JlKCk7XG4gIH1cblxuICBnZXQgYW5pbWF0aW9uUGVyY2VudCgpIHtcbiAgICBsZXQgYW5pbWF0aW9uUGVyY2VudCA9ICh0aGlzLiNwcmVjUGVyY2VudCAhPSB0aGlzLnBlcmNlbnQgJiYgIXRoaXMuc3R5bGUuZGlzYWJsZUFuaW1hdGlvbiA/IHRoaXMudG90YWxUaW1lIC8gKHRoaXMuc3R5bGUuYW5pbWF0aW9uRHVyYXRpb24pIDogMSk7XG5cbiAgICBpZih0aGlzLmVhc2luZ0Z1bmN0aW9uKSB7XG4gICAgICBhbmltYXRpb25QZXJjZW50ID0gdGhpcy5lYXNpbmdGdW5jdGlvbihhbmltYXRpb25QZXJjZW50KTtcbiAgICB9XG5cbiAgICByZXR1cm4gYW5pbWF0aW9uUGVyY2VudDtcbiAgfVxuXG4gIGdldCB3aWR0aEZvcmVncm91bmQoKSB7XG4gICAgcmV0dXJuIE1hdGgubWF4KDAsIE1hdGgubWluKHRoaXMud2lkdGgsIHRoaXMud2lkdGggKiAodGhpcy4jcHJlY1BlcmNlbnQgKyAodGhpcy5wZXJjZW50IC0gdGhpcy4jcHJlY1BlcmNlbnQpICogdGhpcy5hbmltYXRpb25QZXJjZW50KSkpO1xuICB9XG5cbiAgZHJhd0ZvcmVncm91bmQoY3R4LCB3aWR0aEZvcmVncm91bmQpIHtcbiAgICBjdHguc2F2ZSgpO1xuXG4gICAgY3R4LmZpbGxTdHlsZSA9IHRoaXMuc3R5bGUuZm9yZWdyb3VuZENvbG9yO1xuICAgIGN0eC5maWxsUmVjdCh0aGlzLngsIHRoaXMueSwgd2lkdGhGb3JlZ3JvdW5kLCB0aGlzLmhlaWdodCk7XG5cbiAgICBjdHgucmVzdG9yZSgpO1xuICB9XG5cbiAgZ2V0IGRlZmF1bHRTdHlsZSgpIHtcbiAgICByZXR1cm4gbmV3IFN0eWxlKHtcbiAgICAgIFwiYmFja2dyb3VuZENvbG9yXCI6IENvbnN0YW50cy5TZXR0aW5nLlBST0dSRVNTX0RFRkFVTFRfQkFDS0dST1VORCxcbiAgICAgIFwiZm9yZWdyb3VuZENvbG9yXCI6IENvbnN0YW50cy5TZXR0aW5nLlBST0dSRVNTX0RFRkFVTFRfRk9SRUdST1VORCxcbiAgICAgIFwiYW5pbWF0aW9uRHVyYXRpb25cIjogQ29uc3RhbnRzLlNldHRpbmcuUFJPR1JFU1NfREVGQVVMVF9BTklNQVRJT05fRFVSQVRJT05cbiAgICB9KTtcbiAgfVxufSIsIi8qXG4gKiBDb3B5cmlnaHQgKEMpIDIwMjAgRWxpYXN0aWsgKGVsaWFzdGlrc29mdHMuY29tKVxuICpcbiAqIFRoaXMgZmlsZSBpcyBwYXJ0IG9mIFwiSlNHYW1lVG9vbHNcIi5cbiAqXG4gKiBcIkpTR2FtZVRvb2xzXCIgaXMgZnJlZSBzb2Z0d2FyZTogeW91IGNhbiByZWRpc3RyaWJ1dGUgaXQgYW5kL29yIG1vZGlmeVxuICogaXQgdW5kZXIgdGhlIHRlcm1zIG9mIHRoZSBHTlUgR2VuZXJhbCBQdWJsaWMgTGljZW5zZSBhcyBwdWJsaXNoZWQgYnlcbiAqIHRoZSBGcmVlIFNvZnR3YXJlIEZvdW5kYXRpb24sIGVpdGhlciB2ZXJzaW9uIDMgb2YgdGhlIExpY2Vuc2UsIG9yXG4gKiAoYXQgeW91ciBvcHRpb24pIGFueSBsYXRlciB2ZXJzaW9uLlxuICpcbiAqIFwiSlNHYW1lVG9vbHNcIiBpcyBkaXN0cmlidXRlZCBpbiB0aGUgaG9wZSB0aGF0IGl0IHdpbGwgYmUgdXNlZnVsLFxuICogYnV0IFdJVEhPVVQgQU5ZIFdBUlJBTlRZOyB3aXRob3V0IGV2ZW4gdGhlIGltcGxpZWQgd2FycmFudHkgb2ZcbiAqIE1FUkNIQU5UQUJJTElUWSBvciBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRS4gIFNlZSB0aGVcbiAqIEdOVSBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlIGZvciBtb3JlIGRldGFpbHMuXG4gKlxuICogWW91IHNob3VsZCBoYXZlIHJlY2VpdmVkIGEgY29weSBvZiB0aGUgR05VIEdlbmVyYWwgUHVibGljIExpY2Vuc2VcbiAqIGFsb25nIHdpdGggXCJKU0dhbWVUb29sc1wiLiAgSWYgbm90LCBzZWUgPGh0dHA6Ly93d3cuZ251Lm9yZy9saWNlbnNlcy8+LlxuICovXG5pbXBvcnQgRXZlbnQgZnJvbSBcIi4vRXZlbnRcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUmVhY3RvciB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHRoaXMuZXZlbnRzID0ge307XG4gIH1cblxuICByZWdpc3RlckV2ZW50KGV2ZW50TmFtZSkge1xuICAgIHRoaXMuZXZlbnRzW2V2ZW50TmFtZV0gPSBuZXcgRXZlbnQoZXZlbnROYW1lKTtcbiAgfVxuXG4gIGRpc3BhdGNoRXZlbnQoZXZlbnROYW1lLCAuLi5ldmVudEFyZ3MpIHtcbiAgICBpZih0aGlzLmV2ZW50c1tldmVudE5hbWVdKSB7XG4gICAgICBjb25zdCBjYWxsYmFja3MgPSB0aGlzLmV2ZW50c1tldmVudE5hbWVdLmNhbGxiYWNrcztcbiAgICAgIGNhbGxiYWNrcy5mb3JFYWNoKGNhbGxiYWNrID0+IGNhbGxiYWNrICYmIGNhbGxiYWNrKC4uLmV2ZW50QXJncykpO1xuICAgIH1cbiAgfVxuXG4gIGFkZEV2ZW50TGlzdGVuZXIoZXZlbnROYW1lLCBjYWxsYmFjaykge1xuICAgIGlmKHRoaXMuZXZlbnRzW2V2ZW50TmFtZV0pIHRoaXMuZXZlbnRzW2V2ZW50TmFtZV0ucmVnaXN0ZXJDYWxsYmFjayhjYWxsYmFjayk7XG4gIH1cblxuICByZW1vdmVFdmVudExpc3RlbmVyKGV2ZW50TmFtZSwgY2FsbGJhY2spIHtcbiAgICBpZih0aGlzLmV2ZW50c1tldmVudE5hbWVdKSB0aGlzLmV2ZW50c1tldmVudE5hbWVdLnJlbW92ZUNhbGxiYWNrKGNhbGxiYWNrKTtcbiAgfVxuXG4gIHJlbW92ZUFsbEV2ZW50TGlzdGVuZXIoZXZlbnROYW1lKSB7XG4gICAgaWYodGhpcy5ldmVudHNbZXZlbnROYW1lXSkgdGhpcy5ldmVudHNbZXZlbnROYW1lXS5yZW1vdmVBbGxDYWxsYmFja3MoKTtcbiAgfVxufSIsIi8qXG4gKiBDb3B5cmlnaHQgKEMpIDIwMjAgRWxpYXN0aWsgKGVsaWFzdGlrc29mdHMuY29tKVxuICpcbiAqIFRoaXMgZmlsZSBpcyBwYXJ0IG9mIFwiSlNHYW1lVG9vbHNcIi5cbiAqXG4gKiBcIkpTR2FtZVRvb2xzXCIgaXMgZnJlZSBzb2Z0d2FyZTogeW91IGNhbiByZWRpc3RyaWJ1dGUgaXQgYW5kL29yIG1vZGlmeVxuICogaXQgdW5kZXIgdGhlIHRlcm1zIG9mIHRoZSBHTlUgR2VuZXJhbCBQdWJsaWMgTGljZW5zZSBhcyBwdWJsaXNoZWQgYnlcbiAqIHRoZSBGcmVlIFNvZnR3YXJlIEZvdW5kYXRpb24sIGVpdGhlciB2ZXJzaW9uIDMgb2YgdGhlIExpY2Vuc2UsIG9yXG4gKiAoYXQgeW91ciBvcHRpb24pIGFueSBsYXRlciB2ZXJzaW9uLlxuICpcbiAqIFwiSlNHYW1lVG9vbHNcIiBpcyBkaXN0cmlidXRlZCBpbiB0aGUgaG9wZSB0aGF0IGl0IHdpbGwgYmUgdXNlZnVsLFxuICogYnV0IFdJVEhPVVQgQU5ZIFdBUlJBTlRZOyB3aXRob3V0IGV2ZW4gdGhlIGltcGxpZWQgd2FycmFudHkgb2ZcbiAqIE1FUkNIQU5UQUJJTElUWSBvciBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRS4gIFNlZSB0aGVcbiAqIEdOVSBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlIGZvciBtb3JlIGRldGFpbHMuXG4gKlxuICogWW91IHNob3VsZCBoYXZlIHJlY2VpdmVkIGEgY29weSBvZiB0aGUgR05VIEdlbmVyYWwgUHVibGljIExpY2Vuc2VcbiAqIGFsb25nIHdpdGggXCJKU0dhbWVUb29sc1wiLiAgSWYgbm90LCBzZWUgPGh0dHA6Ly93d3cuZ251Lm9yZy9saWNlbnNlcy8+LlxuICovXG5pbXBvcnQgUmVhY3RvciBmcm9tIFwiLi9SZWFjdG9yXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFJlYWN0b3JDYW52YXMgZXh0ZW5kcyBSZWFjdG9yIHtcbiAgcmVnaXN0ZXJFdmVudChldmVudE5hbWUpIHtcbiAgICBpZighdGhpcy5ldmVudHNbZXZlbnROYW1lXSkgdGhpcy5ldmVudHNbZXZlbnROYW1lXSA9IFtdO1xuICB9XG5cbiAgZGlzcGF0Y2hFdmVudChldmVudE5hbWUsIC4uLmV2ZW50QXJncykge1xuICAgIGlmKHRoaXMuZXZlbnRzW2V2ZW50TmFtZV0pIHtcbiAgICAgIGNvbnN0IGV2ZW50cyA9IHRoaXMuZXZlbnRzW2V2ZW50TmFtZV07XG4gICAgICBldmVudHMuZm9yRWFjaChldmVudCA9PiBldmVudCAmJiBldmVudC5jYWxsYmFjayAmJiBldmVudC5jYWxsYmFjayguLi5ldmVudEFyZ3MpKTtcbiAgICB9XG4gIH1cblxuICBkaXNwYXRjaEV2ZW50Q29tcG9uZW50KGV2ZW50TmFtZSwgY29tcG9uZW50LCAuLi5ldmVudEFyZ3MpIHtcbiAgICBpZih0aGlzLmV2ZW50c1tldmVudE5hbWVdKSB7XG4gICAgICBjb25zdCBldmVudHMgPSB0aGlzLmV2ZW50c1tldmVudE5hbWVdO1xuICAgICAgZXZlbnRzLmZvckVhY2goZXZlbnQgPT4gZXZlbnQgJiYgZXZlbnQuY2FsbGJhY2sgJiYgZXZlbnQuY29tcG9uZW50ID09IGNvbXBvbmVudCAmJiBldmVudC5jYWxsYmFjayguLi5ldmVudEFyZ3MpKTtcbiAgICB9XG4gIH1cblxuICBhZGRFdmVudExpc3RlbmVyKGV2ZW50TmFtZSwgY29tcG9uZW50LCBjYWxsYmFjaykge1xuICAgIGlmKHRoaXMuZXZlbnRzW2V2ZW50TmFtZV0pIHtcbiAgICAgIHRoaXMuZXZlbnRzW2V2ZW50TmFtZV0ucHVzaCh7XG4gICAgICAgIFwiY29tcG9uZW50XCI6IGNvbXBvbmVudCxcbiAgICAgICAgXCJjYWxsYmFja1wiOiBjYWxsYmFja1xuICAgICAgfSk7XG4gICAgfVxuICB9XG5cbiAgcmVtb3ZlRXZlbnRMaXN0ZW5lcihldmVudE5hbWUsIGNhbGxiYWNrKSB7XG4gICAgaWYodGhpcy5ldmVudHNbZXZlbnROYW1lXSkgdGhpcy5ldmVudHNbZXZlbnROYW1lXS5maWx0ZXIoZXZlbnQgPT4gZXZlbnQgJiYgZXZlbnQuY2FsbGJhY2sgIT0gY2FsbGJhY2spO1xuICB9XG5cbiAgcmVtb3ZlRXZlbnRMaXN0ZW5lckNvbXBvbmVudChldmVudE5hbWUsIGNvbXBvbmVudCkge1xuICAgIGlmKHRoaXMuZXZlbnRzW2V2ZW50TmFtZV0pIHRoaXMuZXZlbnRzW2V2ZW50TmFtZV0uZmlsdGVyKGV2ZW50ID0+IGV2ZW50ICYmIGV2ZW50LmNvbXBvbmVudCAhPSBjb21wb25lbnQpO1xuICB9XG5cbiAgcmVtb3ZlQWxsRXZlbnRMaXN0ZW5lcigpIHtcbiAgICB0aGlzLmV2ZW50cyA9IFtdO1xuICB9XG59IiwiLypcbiAqIENvcHlyaWdodCAoQykgMjAyMCBFbGlhc3RpayAoZWxpYXN0aWtzb2Z0cy5jb20pXG4gKlxuICogVGhpcyBmaWxlIGlzIHBhcnQgb2YgXCJKU0dhbWVUb29sc1wiLlxuICpcbiAqIFwiSlNHYW1lVG9vbHNcIiBpcyBmcmVlIHNvZnR3YXJlOiB5b3UgY2FuIHJlZGlzdHJpYnV0ZSBpdCBhbmQvb3IgbW9kaWZ5XG4gKiBpdCB1bmRlciB0aGUgdGVybXMgb2YgdGhlIEdOVSBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlIGFzIHB1Ymxpc2hlZCBieVxuICogdGhlIEZyZWUgU29mdHdhcmUgRm91bmRhdGlvbiwgZWl0aGVyIHZlcnNpb24gMyBvZiB0aGUgTGljZW5zZSwgb3JcbiAqIChhdCB5b3VyIG9wdGlvbikgYW55IGxhdGVyIHZlcnNpb24uXG4gKlxuICogXCJKU0dhbWVUb29sc1wiIGlzIGRpc3RyaWJ1dGVkIGluIHRoZSBob3BlIHRoYXQgaXQgd2lsbCBiZSB1c2VmdWwsXG4gKiBidXQgV0lUSE9VVCBBTlkgV0FSUkFOVFk7IHdpdGhvdXQgZXZlbiB0aGUgaW1wbGllZCB3YXJyYW50eSBvZlxuICogTUVSQ0hBTlRBQklMSVRZIG9yIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFLiAgU2VlIHRoZVxuICogR05VIEdlbmVyYWwgUHVibGljIExpY2Vuc2UgZm9yIG1vcmUgZGV0YWlscy5cbiAqXG4gKiBZb3Ugc2hvdWxkIGhhdmUgcmVjZWl2ZWQgYSBjb3B5IG9mIHRoZSBHTlUgR2VuZXJhbCBQdWJsaWMgTGljZW5zZVxuICogYWxvbmcgd2l0aCBcIkpTR2FtZVRvb2xzXCIuICBJZiBub3QsIHNlZSA8aHR0cDovL3d3dy5nbnUub3JnL2xpY2Vuc2VzLz4uXG4gKi9cbmltcG9ydCBDb21wb25lbnQgZnJvbSBcIi4vQ29tcG9uZW50XCI7XG5pbXBvcnQgQ29udGFpbmVyIGZyb20gXCIuL0NvbnRhaW5lclwiO1xuaW1wb3J0IFV0aWxzIGZyb20gXCIuL1V0aWxzXCI7XG5pbXBvcnQgQ29uc3RhbnRzIGZyb20gXCIuL0NvbnN0YW50c1wiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBSb3cgZXh0ZW5kcyBDb250YWluZXIge1xuICBzZWxlY3RhYmxlID0gZmFsc2U7XG4gICNfaW5uZXJIZWlnaHQgPSAwO1xuICAjX2lubmVyV2lkdGggPSAwO1xuXG4gIGNvbnN0cnVjdG9yKHgsIHksIG1heFdpZHRoLCBtYXhIZWlnaHQsIHN0eWxlLCAuLi5jb21wb25lbnRzKSB7XG4gICAgc3VwZXIoeCwgeSwgbWF4V2lkdGgsIG1heEhlaWdodCwgc3R5bGUsIC4uLmNvbXBvbmVudHMpO1xuXG4gICAgaWYoIUNvbnN0YW50cy5TZXR0aW5nLkRJU0FCTEVfRVhQRVJJTUVOVEFMX09QVElNSVpBVElPTlMpIHtcbiAgICAgIHRoaXMudXBkYXRlSW5uZXJXaWR0aCgpO1xuICAgICAgdGhpcy51cGRhdGVJbm5lckhlaWdodCgpO1xuICBcbiAgICAgIHRoaXMuYWRkQ2hhbmdlQWN0aW9uKCgpID0+IHtcbiAgICAgICAgdGhpcy51cGRhdGVJbm5lcldpZHRoKCk7XG4gICAgICAgIHRoaXMudXBkYXRlSW5uZXJIZWlnaHQoKTtcbiAgICAgIH0pO1xuICAgIH1cbiAgfVxuXG4gIGRyYXcoY29udGV4dCkge1xuICAgIGlmKHRoaXMuaGlkZGVuKSByZXR1cm47XG4gICAgc3VwZXIuZHJhdyhjb250ZXh0KTtcblxuICAgIGNvbnN0IGNhbnZhcyA9IGNvbnRleHQuY2FudmFzO1xuICAgIGNvbnN0IGN0eCA9IGNhbnZhcy5nZXRDb250ZXh0KFwiMmRcIik7XG4gICAgY3R4LnNhdmUoKTtcblxuICAgIGxldCBjdHhUZW1wID0gY3R4O1xuICAgIFxuICAgIGlmKHRoaXMuaXNDdXR0aW5nKSB7XG4gICAgICBjdHhUZW1wID0gdGhpcy5jYW52YXNUbXAuZ2V0Q29udGV4dChcIjJkXCIpO1xuICAgICAgY3R4VGVtcC5zY2FsZShDb25zdGFudHMuU2V0dGluZy5QSVhFTF9SQVRJTywgQ29uc3RhbnRzLlNldHRpbmcuUElYRUxfUkFUSU8pO1xuICAgIH1cbiAgXG4gICAgaWYoc3VwZXIuY29tcG9uZW50cyAhPSBudWxsKSB7XG4gICAgICBsZXQgY3VycmVudFggPSB0aGlzLnN0eWxlLnBhZGRpbmc7XG5cbiAgICAgIHN1cGVyLmNvbXBvbmVudHMuZm9yRWFjaChjb21wb25lbnQgPT4ge1xuICAgICAgICBjdXJyZW50WCA9IHRoaXMuZHJhd0NvbXBvbmVudChjb21wb25lbnQsIGN1cnJlbnRYLCBjdHhUZW1wKTtcbiAgICAgIH0pO1xuICAgIH1cbiAgICBcbiAgICBpZih0aGlzLmlzQ3V0dGluZykge1xuICAgICAgVXRpbHMuZHJhd0ltYWdlRGF0YShjdHgsIHRoaXMuY2FudmFzVG1wLCB0aGlzLngsIHRoaXMueSwgdGhpcy53aWR0aCwgdGhpcy5oZWlnaHQsIHRoaXMueCAqIENvbnN0YW50cy5TZXR0aW5nLlBJWEVMX1JBVElPLCB0aGlzLnkgKiBDb25zdGFudHMuU2V0dGluZy5QSVhFTF9SQVRJTywgdGhpcy53aWR0aCAqIENvbnN0YW50cy5TZXR0aW5nLlBJWEVMX1JBVElPLCB0aGlzLmhlaWdodCAqIENvbnN0YW50cy5TZXR0aW5nLlBJWEVMX1JBVElPKTtcbiAgICB9XG5cbiAgICBzdXBlci5kcmF3U2Nyb2xsYmFycyhjdHgpO1xuXG4gICAgY3R4LnJlc3RvcmUoKTtcbiAgfVxuXG4gIGRyYXdDb21wb25lbnQoY29tcG9uZW50LCBjdXJyZW50WCwgY3R4KSB7XG4gICAgaWYoY29tcG9uZW50IGluc3RhbmNlb2YgQ29tcG9uZW50KSB7XG4gICAgICBjb21wb25lbnQueCA9IGN1cnJlbnRYIC0gdGhpcy5vZmZzZXRTY3JvbGxYO1xuICAgICAgY29tcG9uZW50LnkgPSB0aGlzLnN0eWxlLnBhZGRpbmcgLSB0aGlzLm9mZnNldFNjcm9sbFk7XG4gICAgICBcbiAgICAgIGlmKCFjb21wb25lbnQuaGlkZGVuKSB7XG4gICAgICAgIGlmKHRoaXMuaXNDb21wb25lbnRWaXNpYmxlKGNvbXBvbmVudCkpIHtcbiAgICAgICAgICBjb21wb25lbnQuZHJhdyhjdHgpO1xuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICBjdXJyZW50WCArPSBjb21wb25lbnQud2lkdGggKyB0aGlzLnN0eWxlLnNwYWNlQmV0d2VlbkNvbXBvbmVudHM7XG4gICAgICB9XG4gICAgfVxuICAgIFxuICAgIHJldHVybiBjdXJyZW50WDtcbiAgfVxuXG4gIHVwZGF0ZUlubmVySGVpZ2h0KCkge1xuICAgIGxldCBtYXhIZWlnaHQgPSAwO1xuICAgIHN1cGVyLmNvbXBvbmVudHMuZm9yRWFjaChjb21wb25lbnQgPT4geyBpZihjb21wb25lbnQuaGVpZ2h0ID4gbWF4SGVpZ2h0ICYmICFjb21wb25lbnQuaGlkZGVuKSBtYXhIZWlnaHQgPSBjb21wb25lbnQuaGVpZ2h0OyB9KTtcbiAgICB0aGlzLiNfaW5uZXJIZWlnaHQgPSBtYXhIZWlnaHQgKyB0aGlzLnN0eWxlLnBhZGRpbmc7XG4gIH1cblxuICB1cGRhdGVJbm5lcldpZHRoKCkge1xuICAgIGxldCB0b3RhbFdpZHRoID0gMDtcbiAgICBzdXBlci5jb21wb25lbnRzLmZvckVhY2goY29tcG9uZW50ID0+IHsgaWYoIWNvbXBvbmVudC5oaWRkZW4pIHRvdGFsV2lkdGggKz0gY29tcG9uZW50LndpZHRoIH0pO1xuICAgIHRoaXMuI19pbm5lcldpZHRoID0gdG90YWxXaWR0aCArIHRoaXMuc3R5bGUuc3BhY2VCZXR3ZWVuQ29tcG9uZW50cyAqIChzdXBlci5jb21wb25lbnRzLmxlbmd0aCAtIDEpICsgdGhpcy5zdHlsZS5wYWRkaW5nO1xuICB9XG5cbiAgZ2V0IGlubmVySGVpZ2h0KCkge1xuICAgIGlmKENvbnN0YW50cy5TZXR0aW5nLkRJU0FCTEVfRVhQRVJJTUVOVEFMX09QVElNSVpBVElPTlMpIHRoaXMudXBkYXRlSW5uZXJIZWlnaHQoKTtcbiAgICByZXR1cm4gdGhpcy4jX2lubmVySGVpZ2h0O1xuICB9XG5cbiAgZ2V0IGlubmVyV2lkdGgoKSB7XG4gICAgaWYoQ29uc3RhbnRzLlNldHRpbmcuRElTQUJMRV9FWFBFUklNRU5UQUxfT1BUSU1JWkFUSU9OUykgdGhpcy51cGRhdGVJbm5lcldpZHRoKCk7XG4gICAgcmV0dXJuIHRoaXMuI19pbm5lcldpZHRoO1xuICB9XG5cbiAgZ2V0IHdpZHRoKCkge1xuICAgIGNvbnN0IHdpZHRoID0gdGhpcy5pbm5lcldpZHRoIHx8ICh0aGlzLnBhcmVudCAmJiB0aGlzLnBhcmVudC53aWR0aCk7XG4gICAgY29uc3QgbWluID0gdGhpcy5tYXhXaWR0aCA/IE1hdGgubWluKHRoaXMubWF4V2lkdGgsIHdpZHRoKSA6IG51bGw7XG4gICAgcmV0dXJuIHRoaXMubWluV2lkdGggPyBNYXRoLm1heCh0aGlzLm1pbldpZHRoLCBtaW4gfHwgd2lkdGgpIDogbWluIHx8IHdpZHRoO1xuICB9XG5cbiAgZ2V0IGhlaWdodCgpIHtcbiAgICBjb25zdCBoZWlnaHQgPSB0aGlzLmlubmVySGVpZ2h0IHx8ICh0aGlzLnBhcmVudCAmJiB0aGlzLnBhcmVudC5oZWlnaHQpO1xuICAgIGNvbnN0IG1pbiA9IHRoaXMubWF4SGVpZ2h0ID8gTWF0aC5taW4odGhpcy5tYXhIZWlnaHQsIGhlaWdodCkgOiBudWxsO1xuICAgIHJldHVybiB0aGlzLm1pbkhlaWdodCA/IE1hdGgubWF4KHRoaXMubWluSGVpZ2h0LCBtaW4gfHwgaGVpZ2h0KSA6IG1pbiB8fCBoZWlnaHQ7XG4gIH1cblxuICBnZXQgZGVmYXVsdFN0eWxlKCkge1xuICAgIHJldHVybiBzdXBlci5kZWZhdWx0U3R5bGU7XG4gIH1cbn0iLCIvKlxuICogQ29weXJpZ2h0IChDKSAyMDIwIEVsaWFzdGlrIChlbGlhc3Rpa3NvZnRzLmNvbSlcbiAqXG4gKiBUaGlzIGZpbGUgaXMgcGFydCBvZiBcIkpTR2FtZVRvb2xzXCIuXG4gKlxuICogXCJKU0dhbWVUb29sc1wiIGlzIGZyZWUgc29mdHdhcmU6IHlvdSBjYW4gcmVkaXN0cmlidXRlIGl0IGFuZC9vciBtb2RpZnlcbiAqIGl0IHVuZGVyIHRoZSB0ZXJtcyBvZiB0aGUgR05VIEdlbmVyYWwgUHVibGljIExpY2Vuc2UgYXMgcHVibGlzaGVkIGJ5XG4gKiB0aGUgRnJlZSBTb2Z0d2FyZSBGb3VuZGF0aW9uLCBlaXRoZXIgdmVyc2lvbiAzIG9mIHRoZSBMaWNlbnNlLCBvclxuICogKGF0IHlvdXIgb3B0aW9uKSBhbnkgbGF0ZXIgdmVyc2lvbi5cbiAqXG4gKiBcIkpTR2FtZVRvb2xzXCIgaXMgZGlzdHJpYnV0ZWQgaW4gdGhlIGhvcGUgdGhhdCBpdCB3aWxsIGJlIHVzZWZ1bCxcbiAqIGJ1dCBXSVRIT1VUIEFOWSBXQVJSQU5UWTsgd2l0aG91dCBldmVuIHRoZSBpbXBsaWVkIHdhcnJhbnR5IG9mXG4gKiBNRVJDSEFOVEFCSUxJVFkgb3IgRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UuICBTZWUgdGhlXG4gKiBHTlUgR2VuZXJhbCBQdWJsaWMgTGljZW5zZSBmb3IgbW9yZSBkZXRhaWxzLlxuICpcbiAqIFlvdSBzaG91bGQgaGF2ZSByZWNlaXZlZCBhIGNvcHkgb2YgdGhlIEdOVSBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlXG4gKiBhbG9uZyB3aXRoIFwiSlNHYW1lVG9vbHNcIi4gIElmIG5vdCwgc2VlIDxodHRwOi8vd3d3LmdudS5vcmcvbGljZW5zZXMvPi5cbiAqL1xuaW1wb3J0IElucHV0IGZyb20gXCIuL0lucHV0XCI7XG5pbXBvcnQgQ29udGFpbmVyIGZyb20gXCIuL0NvbnRhaW5lclwiO1xuaW1wb3J0IFV0aWxzIGZyb20gXCIuL1V0aWxzXCI7XG5pbXBvcnQgU3R5bGUgZnJvbSBcIi4vU3R5bGVcIjtcbmltcG9ydCBDb25zdGFudHMgZnJvbSBcIi4vQ29uc3RhbnRzXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFNjZW5lIGV4dGVuZHMgQ29udGFpbmVyIHtcbiAgc2VsZWN0YWJsZSA9IGZhbHNlO1xuICBlbmFibGVFdmVudHMgPSBmYWxzZTtcblxuICBjb25zdHJ1Y3RvciguLi5jb21wb25lbnRzKSB7XG4gICAgc3VwZXIoKTtcbiAgICB0aGlzLmFkZEFsbCguLi5jb21wb25lbnRzKTtcbiAgfVxuXG4gIGRyYXcoY29udGV4dCkge1xuICAgIGlmKHRoaXMuaGlkZGVuKSByZXR1cm47XG4gICAgc3VwZXIuZHJhdyhjb250ZXh0KTtcblxuICAgIGNvbnN0IGNhbnZhcyA9IGNvbnRleHQuY2FudmFzO1xuICAgIGNvbnN0IGN0eCA9IGNhbnZhcy5nZXRDb250ZXh0KFwiMmRcIik7XG4gICAgY3R4LnNhdmUoKTtcbiAgICBjYW52YXMuc3R5bGUuY3Vyc29yID0gXCJkZWZhdWx0XCI7XG5cbiAgICBsZXQgY3R4VGVtcCA9IGN0eDtcbiAgICBpZih0aGlzLm1heFdpZHRoIHx8IHRoaXMubWF4SGVpZ2h0KSBjdHhUZW1wID0gdGhpcy5jYW52YXNUbXAuZ2V0Q29udGV4dChcIjJkXCIpO1xuXG4gICAgdGhpcy5kcmF3Q29tcG9uZW50cyhjdHhUZW1wKTsgLy8gRHJhdyBzb3J0ZWQgY29tcG9uZW50c1xuICAgIFxuICAgIGlmKHRoaXMubWF4V2lkdGggfHwgdGhpcy5tYXhIZWlnaHQpIFV0aWxzLmRyYXdJbWFnZURhdGEoY3R4LCB0aGlzLmNhbnZhc1RtcCwgdGhpcy54LCB0aGlzLnksIHRoaXMud2lkdGgsIHRoaXMuaGVpZ2h0LCB0aGlzLngsIHRoaXMueSwgdGhpcy53aWR0aCwgdGhpcy5oZWlnaHQpO1xuICAgIHN1cGVyLmRyYXdTY3JvbGxiYXJzKGN0eCk7XG5cbiAgICBjdHgucmVzdG9yZSgpO1xuICB9XG5cbiAgZHJhd0NvbXBvbmVudHMoY3R4KSB7XG4gICAgdGhpcy5jb21wb25lbnRzLnNvcnQoU2NlbmUuY29tcGFyZUNvbXBvbmVudHMpLmZvckVhY2goY29tcG9uZW50ID0+IGNvbXBvbmVudC5kcmF3KGN0eCkpO1xuICB9XG5cbiAgZ2V0IGRlZmF1bHRTdHlsZSgpIHtcbiAgICByZXR1cm4gbmV3IFN0eWxlKHtcbiAgICAgIFwicGFkZGluZ1wiOiBDb25zdGFudHMuU2V0dGluZy5ERUZBVUxUX1BBRERJTkdcbiAgICB9KTtcbiAgfVxufSIsIi8qXG4gKiBDb3B5cmlnaHQgKEMpIDIwMjAgRWxpYXN0aWsgKGVsaWFzdGlrc29mdHMuY29tKVxuICpcbiAqIFRoaXMgZmlsZSBpcyBwYXJ0IG9mIFwiSlNHYW1lVG9vbHNcIi5cbiAqXG4gKiBcIkpTR2FtZVRvb2xzXCIgaXMgZnJlZSBzb2Z0d2FyZTogeW91IGNhbiByZWRpc3RyaWJ1dGUgaXQgYW5kL29yIG1vZGlmeVxuICogaXQgdW5kZXIgdGhlIHRlcm1zIG9mIHRoZSBHTlUgR2VuZXJhbCBQdWJsaWMgTGljZW5zZSBhcyBwdWJsaXNoZWQgYnlcbiAqIHRoZSBGcmVlIFNvZnR3YXJlIEZvdW5kYXRpb24sIGVpdGhlciB2ZXJzaW9uIDMgb2YgdGhlIExpY2Vuc2UsIG9yXG4gKiAoYXQgeW91ciBvcHRpb24pIGFueSBsYXRlciB2ZXJzaW9uLlxuICpcbiAqIFwiSlNHYW1lVG9vbHNcIiBpcyBkaXN0cmlidXRlZCBpbiB0aGUgaG9wZSB0aGF0IGl0IHdpbGwgYmUgdXNlZnVsLFxuICogYnV0IFdJVEhPVVQgQU5ZIFdBUlJBTlRZOyB3aXRob3V0IGV2ZW4gdGhlIGltcGxpZWQgd2FycmFudHkgb2ZcbiAqIE1FUkNIQU5UQUJJTElUWSBvciBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRS4gIFNlZSB0aGVcbiAqIEdOVSBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlIGZvciBtb3JlIGRldGFpbHMuXG4gKlxuICogWW91IHNob3VsZCBoYXZlIHJlY2VpdmVkIGEgY29weSBvZiB0aGUgR05VIEdlbmVyYWwgUHVibGljIExpY2Vuc2VcbiAqIGFsb25nIHdpdGggXCJKU0dhbWVUb29sc1wiLiAgSWYgbm90LCBzZWUgPGh0dHA6Ly93d3cuZ251Lm9yZy9saWNlbnNlcy8+LlxuICovXG5pbXBvcnQgQ29uc3RhbnRzIGZyb20gXCIuL0NvbnN0YW50c1wiO1xuaW1wb3J0IEJveCBmcm9tIFwiLi9Cb3hcIjtcbmltcG9ydCBTdHlsZSBmcm9tIFwiLi9TdHlsZVwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTY3JvbGxiYXIgZXh0ZW5kcyBCb3gge1xuICBzZWxlY3RhYmxlID0gdHJ1ZTtcblxuICBjb25zdHJ1Y3RvcihzaXplLCBzdHlsZSwgcGFyZW50KSB7XG4gICAgc3VwZXIobnVsbCwgbnVsbCwgbnVsbCwgbnVsbCwgc3R5bGUpO1xuICAgIHRoaXMucGFyZW50ID0gcGFyZW50O1xuICAgIHRoaXMuc2l6ZSA9IHNpemUgfHwgQ29uc3RhbnRzLlNldHRpbmcuU0NST0xMQkFSX0RFRkFVTFRfU0laRTtcbiAgfVxuICBcbiAgZHJhdyhjb250ZXh0KSB7XG4gICAgaWYodGhpcy5oaWRkZW4pIHJldHVybjtcbiAgICBpZih0aGlzLmNsaWNrZWQpIHtcbiAgICAgIHRoaXMuaG92ZXJlZCA9IHRydWU7XG4gICAgfVxuICAgIFxuICAgIHN1cGVyLmRyYXcoY29udGV4dCk7XG4gIH1cblxuICBnZXQgbWF4V2lkdGhQYXJlbnQoKSB7XG4gICAgcmV0dXJuIHRoaXMucGFyZW50ID8gdGhpcy5wYXJlbnQubWF4V2lkdGggLSBNYXRoLmFicyhNYXRoLm1pbigwLCB0aGlzLnBhcmVudC54KSkgOiAwO1xuICB9XG5cbiAgZ2V0IG1heEhlaWdodFBhcmVudCgpIHtcbiAgICByZXR1cm4gdGhpcy5wYXJlbnQgPyB0aGlzLnBhcmVudC5tYXhIZWlnaHQgLSBNYXRoLmFicyhNYXRoLm1pbigwLCB0aGlzLnBhcmVudC55KSkgOiAwO1xuICB9XG5cbiAgZ2V0IGlubmVyV2lkdGhQYXJlbnQoKSB7XG4gICAgcmV0dXJuIHRoaXMucGFyZW50ID8gdGhpcy5wYXJlbnQuaW5uZXJXaWR0aCAtIE1hdGguYWJzKE1hdGgubWluKDAsIHRoaXMucGFyZW50LngpKSA6IDA7XG4gIH1cblxuICBnZXQgaW5uZXJIZWlnaHRQYXJlbnQoKSB7XG4gICAgcmV0dXJuIHRoaXMucGFyZW50ID8gdGhpcy5wYXJlbnQuaW5uZXJIZWlnaHQgLSBNYXRoLmFicyhNYXRoLm1pbigwLCB0aGlzLnBhcmVudC55KSkgOiAwO1xuICB9XG5cbiAgZ2V0IG1heFdpZHRoKCkge1xuICAgIHJldHVybiB0aGlzLndpZHRoO1xuICB9XG5cbiAgZ2V0IG1heEhlaWdodCgpIHtcbiAgICByZXR1cm4gdGhpcy5oZWlnaHQ7XG4gIH1cblxuICBnZXQgY29udGVudFJhdGlvWCgpIHtcbiAgICByZXR1cm4gdGhpcy5wYXJlbnQgPyB0aGlzLm1heFdpZHRoUGFyZW50IC8gdGhpcy5pbm5lcldpZHRoUGFyZW50IDogMDtcbiAgfVxuXG4gIGdldCBjb250ZW50UmF0aW9ZKCkge1xuICAgIHJldHVybiB0aGlzLnBhcmVudCA/IHRoaXMubWF4SGVpZ2h0UGFyZW50IC8gdGhpcy5pbm5lckhlaWdodFBhcmVudCA6IDA7XG4gIH1cblxuICBnZXQgd2lkdGgoKSB7XG4gICAgcmV0dXJuIHRoaXMubWF4V2lkdGhQYXJlbnQgKiB0aGlzLmNvbnRlbnRSYXRpb1g7XG4gIH1cblxuICBnZXQgaGVpZ2h0KCkge1xuICAgIHJldHVybiB0aGlzLm1heEhlaWdodFBhcmVudCAqIHRoaXMuY29udGVudFJhdGlvWTtcbiAgfVxuXG4gIGdldCB3aW5kb3dTY3JvbGxTaXplWCgpIHtcbiAgICByZXR1cm4gdGhpcy5pbm5lcldpZHRoUGFyZW50IC0gdGhpcy5tYXhXaWR0aFBhcmVudDtcbiAgfVxuXG4gIGdldCB3aW5kb3dTY3JvbGxTaXplWSgpIHtcbiAgICByZXR1cm4gdGhpcy5pbm5lckhlaWdodFBhcmVudCAtIHRoaXMubWF4SGVpZ2h0UGFyZW50O1xuICB9XG5cbiAgZ2V0IHBlcmNlbnRTY3JvbGxiYXJYKCkge1xuICAgIHJldHVybiB0aGlzLnBhcmVudCA/IHRoaXMucGFyZW50Lm9mZnNldFNjcm9sbFggLyB0aGlzLndpbmRvd1Njcm9sbFNpemVYIDogMDtcbiAgfVxuXG4gIGdldCBwZXJjZW50U2Nyb2xsYmFyWSgpIHtcbiAgICByZXR1cm4gdGhpcy5wYXJlbnQgPyB0aGlzLnBhcmVudC5vZmZzZXRTY3JvbGxZIC8gdGhpcy53aW5kb3dTY3JvbGxTaXplWSA6IDA7XG4gIH1cblxuICBnZXQgc2Nyb2xsQXJlYVNpemVYKCkge1xuICAgIHJldHVybiB0aGlzLm1heFdpZHRoUGFyZW50IC0gdGhpcy53aWR0aDtcbiAgfVxuXG4gIGdldCBzY3JvbGxBcmVhU2l6ZVkoKSB7XG4gICAgcmV0dXJuIHRoaXMubWF4SGVpZ2h0UGFyZW50IC0gdGhpcy5oZWlnaHQ7XG4gIH1cblxuICBnZXQgeCgpIHtcbiAgICByZXR1cm4gdGhpcy5wYXJlbnQgPyBNYXRoLmFicyh0aGlzLnBhcmVudC54KSArIHRoaXMuc2Nyb2xsQXJlYVNpemVYICogdGhpcy5wZXJjZW50U2Nyb2xsYmFyWCA6IDA7XG4gIH1cblxuICBnZXQgeSgpIHtcbiAgICByZXR1cm4gdGhpcy5wYXJlbnQgPyBNYXRoLmFicyh0aGlzLnBhcmVudC55KSArIHRoaXMuc2Nyb2xsQXJlYVNpemVZICogdGhpcy5wZXJjZW50U2Nyb2xsYmFyWSA6IDA7XG4gIH1cblxuICBnZXQgZGVmYXVsdFN0eWxlKCkge1xuICAgIHJldHVybiBuZXcgU3R5bGUoe1xuICAgICAgXCJiYWNrZ3JvdW5kQ29sb3JcIjogQ29uc3RhbnRzLlNldHRpbmcuU0NST0xMQkFSX0RFRkFVTFRfQkFDS0dST1VORCxcbiAgICAgIFwiYmFja2dyb3VuZENvbG9ySG92ZXJcIjogQ29uc3RhbnRzLlNldHRpbmcuU0NST0xMQkFSX0RFRkFVTFRfSE9WRVJfQkFDS0dST1VORCxcbiAgICAgIFwiYmFja2dyb3VuZENvbG9yRG93blwiOiBDb25zdGFudHMuU2V0dGluZy5TQ1JPTExCQVJfREVGQVVMVF9DTElDS19CQUNLR1JPVU5ELFxuICAgICAgXCJib3JkZXJTaXplXCI6IDBcbiAgICB9KTtcbiAgfVxuXG4gIGNvbXBhcmVUb0NvbXBvbmVudChvdGhlckNvbXBvbmVudCkge1xuICAgIHJldHVybiBvdGhlckNvbXBvbmVudC5jb21wYXJlVG9TY3JvbGxiYXIodGhpcyk7XG4gIH1cblxuICBjb21wYXJlVG9TY3JvbGxiYXIob3RoZXJDb21wb25lbnQpIHtcbiAgICByZXR1cm4gMDtcbiAgfVxufSIsIi8qXG4gKiBDb3B5cmlnaHQgKEMpIDIwMjAgRWxpYXN0aWsgKGVsaWFzdGlrc29mdHMuY29tKVxuICpcbiAqIFRoaXMgZmlsZSBpcyBwYXJ0IG9mIFwiSlNHYW1lVG9vbHNcIi5cbiAqXG4gKiBcIkpTR2FtZVRvb2xzXCIgaXMgZnJlZSBzb2Z0d2FyZTogeW91IGNhbiByZWRpc3RyaWJ1dGUgaXQgYW5kL29yIG1vZGlmeVxuICogaXQgdW5kZXIgdGhlIHRlcm1zIG9mIHRoZSBHTlUgR2VuZXJhbCBQdWJsaWMgTGljZW5zZSBhcyBwdWJsaXNoZWQgYnlcbiAqIHRoZSBGcmVlIFNvZnR3YXJlIEZvdW5kYXRpb24sIGVpdGhlciB2ZXJzaW9uIDMgb2YgdGhlIExpY2Vuc2UsIG9yXG4gKiAoYXQgeW91ciBvcHRpb24pIGFueSBsYXRlciB2ZXJzaW9uLlxuICpcbiAqIFwiSlNHYW1lVG9vbHNcIiBpcyBkaXN0cmlidXRlZCBpbiB0aGUgaG9wZSB0aGF0IGl0IHdpbGwgYmUgdXNlZnVsLFxuICogYnV0IFdJVEhPVVQgQU5ZIFdBUlJBTlRZOyB3aXRob3V0IGV2ZW4gdGhlIGltcGxpZWQgd2FycmFudHkgb2ZcbiAqIE1FUkNIQU5UQUJJTElUWSBvciBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRS4gIFNlZSB0aGVcbiAqIEdOVSBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlIGZvciBtb3JlIGRldGFpbHMuXG4gKlxuICogWW91IHNob3VsZCBoYXZlIHJlY2VpdmVkIGEgY29weSBvZiB0aGUgR05VIEdlbmVyYWwgUHVibGljIExpY2Vuc2VcbiAqIGFsb25nIHdpdGggXCJKU0dhbWVUb29sc1wiLiAgSWYgbm90LCBzZWUgPGh0dHA6Ly93d3cuZ251Lm9yZy9saWNlbnNlcy8+LlxuICovXG5pbXBvcnQgU2Nyb2xsYmFyIGZyb20gXCIuL1Njcm9sbGJhclwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTY3JvbGxiYXJIb3Jpem9udGFsIGV4dGVuZHMgU2Nyb2xsYmFyIHtcbiAgc2VsZWN0YWJsZSA9IHRydWU7XG5cbiAgY29uc3RydWN0b3Ioc2l6ZSwgc3R5bGUsIHBhcmVudCkge1xuICAgIHN1cGVyKHNpemUsIHN0eWxlLCBwYXJlbnQpO1xuXG4gICAgdGhpcy5hZGRNb3ZlQWN0aW9uKChkZWx0YVgpID0+IHtcbiAgICAgIGlmKHRoaXMucGFyZW50KSB7XG4gICAgICAgIHRoaXMucGFyZW50Lm9mZnNldFNjcm9sbFggLT0gZGVsdGFYO1xuXG4gICAgICAgIGlmKHRoaXMucGFyZW50LnJlYWN0b3IpIHtcbiAgICAgICAgICB0aGlzLnBhcmVudC5yZWFjdG9yLmRpc3BhdGNoRXZlbnQoXCJvblNjcm9sbFwiLCAtZGVsdGFYLCAwKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0pO1xuICB9XG4gIFxuICBkcmF3KGNvbnRleHQpIHtcbiAgICBpZih0aGlzLnNjcm9sbEFyZWFTaXplWCA+IDApIHtcbiAgICAgIHN1cGVyLmRyYXcoY29udGV4dCk7XG4gICAgfVxuICB9XG5cbiAgZ2V0IGhlaWdodCgpIHtcbiAgICByZXR1cm4gdGhpcy5zaXplO1xuICB9XG5cbiAgZ2V0IHkoKSB7XG4gICAgcmV0dXJuIHRoaXMucGFyZW50ID8gdGhpcy5wYXJlbnQueSArIHRoaXMucGFyZW50LmhlaWdodCAtIHRoaXMuc2l6ZSA6IG51bGw7XG4gIH1cbn0iLCIvKlxuICogQ29weXJpZ2h0IChDKSAyMDIwIEVsaWFzdGlrIChlbGlhc3Rpa3NvZnRzLmNvbSlcbiAqXG4gKiBUaGlzIGZpbGUgaXMgcGFydCBvZiBcIkpTR2FtZVRvb2xzXCIuXG4gKlxuICogXCJKU0dhbWVUb29sc1wiIGlzIGZyZWUgc29mdHdhcmU6IHlvdSBjYW4gcmVkaXN0cmlidXRlIGl0IGFuZC9vciBtb2RpZnlcbiAqIGl0IHVuZGVyIHRoZSB0ZXJtcyBvZiB0aGUgR05VIEdlbmVyYWwgUHVibGljIExpY2Vuc2UgYXMgcHVibGlzaGVkIGJ5XG4gKiB0aGUgRnJlZSBTb2Z0d2FyZSBGb3VuZGF0aW9uLCBlaXRoZXIgdmVyc2lvbiAzIG9mIHRoZSBMaWNlbnNlLCBvclxuICogKGF0IHlvdXIgb3B0aW9uKSBhbnkgbGF0ZXIgdmVyc2lvbi5cbiAqXG4gKiBcIkpTR2FtZVRvb2xzXCIgaXMgZGlzdHJpYnV0ZWQgaW4gdGhlIGhvcGUgdGhhdCBpdCB3aWxsIGJlIHVzZWZ1bCxcbiAqIGJ1dCBXSVRIT1VUIEFOWSBXQVJSQU5UWTsgd2l0aG91dCBldmVuIHRoZSBpbXBsaWVkIHdhcnJhbnR5IG9mXG4gKiBNRVJDSEFOVEFCSUxJVFkgb3IgRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UuICBTZWUgdGhlXG4gKiBHTlUgR2VuZXJhbCBQdWJsaWMgTGljZW5zZSBmb3IgbW9yZSBkZXRhaWxzLlxuICpcbiAqIFlvdSBzaG91bGQgaGF2ZSByZWNlaXZlZCBhIGNvcHkgb2YgdGhlIEdOVSBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlXG4gKiBhbG9uZyB3aXRoIFwiSlNHYW1lVG9vbHNcIi4gIElmIG5vdCwgc2VlIDxodHRwOi8vd3d3LmdudS5vcmcvbGljZW5zZXMvPi5cbiAqL1xuaW1wb3J0IFNjcm9sbGJhciBmcm9tIFwiLi9TY3JvbGxiYXJcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU2Nyb2xsYmFyVmVydGljYWwgZXh0ZW5kcyBTY3JvbGxiYXIge1xuICBzZWxlY3RhYmxlID0gdHJ1ZTtcblxuICBjb25zdHJ1Y3RvcihzaXplLCBzdHlsZSwgcGFyZW50KSB7XG4gICAgc3VwZXIoc2l6ZSwgc3R5bGUsIHBhcmVudCk7XG4gICAgXG4gICAgdGhpcy5hZGRNb3ZlQWN0aW9uKChkZWx0YVgsIGRlbHRhWSkgPT4ge1xuICAgICAgaWYodGhpcy5wYXJlbnQpIHtcbiAgICAgICAgdGhpcy5wYXJlbnQub2Zmc2V0U2Nyb2xsWSAtPSBkZWx0YVk7XG5cbiAgICAgICAgaWYodGhpcy5wYXJlbnQucmVhY3Rvcikge1xuICAgICAgICAgIHRoaXMucGFyZW50LnJlYWN0b3IuZGlzcGF0Y2hFdmVudChcIm9uU2Nyb2xsXCIsIDAsIC1kZWx0YVkpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSk7XG4gIH1cbiAgXG4gIGRyYXcoY29udGV4dCkge1xuICAgIGlmKHRoaXMuc2Nyb2xsQXJlYVNpemVZID4gMCkge1xuICAgICAgc3VwZXIuZHJhdyhjb250ZXh0KTtcbiAgICB9XG4gIH1cblxuICBnZXQgd2lkdGgoKSB7XG4gICAgcmV0dXJuIHRoaXMuc2l6ZTtcbiAgfVxuXG4gIGdldCB4KCkge1xuICAgIHJldHVybiB0aGlzLnBhcmVudCA/IHRoaXMucGFyZW50LnggKyB0aGlzLnBhcmVudC53aWR0aCAtIHRoaXMuc2l6ZSA6IDA7XG4gIH1cbn0iLCIvKlxuICogQ29weXJpZ2h0IChDKSAyMDIwIEVsaWFzdGlrIChlbGlhc3Rpa3NvZnRzLmNvbSlcbiAqXG4gKiBUaGlzIGZpbGUgaXMgcGFydCBvZiBcIkpTR2FtZVRvb2xzXCIuXG4gKlxuICogXCJKU0dhbWVUb29sc1wiIGlzIGZyZWUgc29mdHdhcmU6IHlvdSBjYW4gcmVkaXN0cmlidXRlIGl0IGFuZC9vciBtb2RpZnlcbiAqIGl0IHVuZGVyIHRoZSB0ZXJtcyBvZiB0aGUgR05VIEdlbmVyYWwgUHVibGljIExpY2Vuc2UgYXMgcHVibGlzaGVkIGJ5XG4gKiB0aGUgRnJlZSBTb2Z0d2FyZSBGb3VuZGF0aW9uLCBlaXRoZXIgdmVyc2lvbiAzIG9mIHRoZSBMaWNlbnNlLCBvclxuICogKGF0IHlvdXIgb3B0aW9uKSBhbnkgbGF0ZXIgdmVyc2lvbi5cbiAqXG4gKiBcIkpTR2FtZVRvb2xzXCIgaXMgZGlzdHJpYnV0ZWQgaW4gdGhlIGhvcGUgdGhhdCBpdCB3aWxsIGJlIHVzZWZ1bCxcbiAqIGJ1dCBXSVRIT1VUIEFOWSBXQVJSQU5UWTsgd2l0aG91dCBldmVuIHRoZSBpbXBsaWVkIHdhcnJhbnR5IG9mXG4gKiBNRVJDSEFOVEFCSUxJVFkgb3IgRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UuICBTZWUgdGhlXG4gKiBHTlUgR2VuZXJhbCBQdWJsaWMgTGljZW5zZSBmb3IgbW9yZSBkZXRhaWxzLlxuICpcbiAqIFlvdSBzaG91bGQgaGF2ZSByZWNlaXZlZCBhIGNvcHkgb2YgdGhlIEdOVSBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlXG4gKiBhbG9uZyB3aXRoIFwiSlNHYW1lVG9vbHNcIi4gIElmIG5vdCwgc2VlIDxodHRwOi8vd3d3LmdudS5vcmcvbGljZW5zZXMvPi5cbiAqL1xuaW1wb3J0IExhYmVsIGZyb20gXCIuL0xhYmVsXCI7XG5pbXBvcnQgQnV0dG9uIGZyb20gXCIuL0J1dHRvblwiO1xuaW1wb3J0IFRyaWFuZ2xlIGZyb20gXCIuL1RyaWFuZ2xlXCI7XG5pbXBvcnQgU3R5bGUgZnJvbSBcIi4vU3R5bGVcIjtcbmltcG9ydCBDb25zdGFudHMgZnJvbSBcIi4vQ29uc3RhbnRzXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFNlbGVjdCBleHRlbmRzIEJ1dHRvbiB7XG4gICNfd2lkdGggPSAwO1xuXG4gIGNvbnN0cnVjdG9yKHgsIHksIG1heFdpZHRoLCBtYXhIZWlnaHQsIHN0eWxlLCBvcHRpb25Db250YWluZXIsIGRlZmF1bHRPcHRpb24pIHtcbiAgICBzdXBlcih4LCB5LCBtYXhXaWR0aCwgbWF4SGVpZ2h0LCBzdHlsZSk7XG5cbiAgICB0aGlzLm9wdGlvbkNvbnRhaW5lciA9IG9wdGlvbkNvbnRhaW5lcjtcbiAgICBpZihkZWZhdWx0T3B0aW9uKSB0aGlzLnNlbGVjdGVkT3B0aW9uID0gZGVmYXVsdE9wdGlvbjtcblxuICAgIHRoaXMubGFiZWwgPSBuZXcgTGFiZWwoXCJcIiwgeCwgeSwgc3R5bGUpO1xuICAgIHRoaXMubGFiZWwuc3R5bGUuc2V0QWxsKHsgXCJhbGlnbmVtZW50XCI6IENvbnN0YW50cy5BbGlnbmVtZW50LkxFRlQsIFwidmVydGljYWxBbGlnbmVtZW50XCI6IENvbnN0YW50cy5WZXJ0aWNhbEFsaWduZW1lbnQuQ0VOVEVSIH0pO1xuICAgIHRoaXMudHJpYW5nbGUgPSBuZXcgVHJpYW5nbGUobnVsbCwgbnVsbCwgOCwgOCwgc3R5bGUpO1xuICAgIHRoaXMudHJpYW5nbGUuc3R5bGUuc2V0QWxsKHsgXCJhbGlnbmVtZW50XCI6IENvbnN0YW50cy5BbGlnbmVtZW50LlJJR0hULCBcInZlcnRpY2FsQWxpZ25lbWVudFwiOiBDb25zdGFudHMuVmVydGljYWxBbGlnbmVtZW50LkNFTlRFUiB9KTtcblxuICAgIHRoaXMuYWRkQWxsKHRoaXMubGFiZWwsIHRoaXMudHJpYW5nbGUpO1xuXG4gICAgdGhpcy5hZGRDbGlja0FjdGlvbigoKSA9PiB7XG4gICAgICBpZih0aGlzLm9wdGlvbkNvbnRhaW5lcikge1xuICAgICAgICB0aGlzLm9wdGlvbkNvbnRhaW5lci5oaWRkZW4gPSBmYWxzZTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIGlmKCFDb25zdGFudHMuU2V0dGluZy5ESVNBQkxFX0VYUEVSSU1FTlRBTF9PUFRJTUlaQVRJT05TKSB7XG4gICAgICB0aGlzLnVwZGF0ZVdpZHRoKCk7XG4gICAgICB0aGlzLmFkZENoYW5nZUFjdGlvbigoKSA9PiB0aGlzLnVwZGF0ZVdpZHRoKCkpO1xuICAgIH1cbiAgfVxuXG4gIGRyYXcoY29udGV4dCkge1xuICAgIGlmKHRoaXMuaGlkZGVuKSByZXR1cm47XG4gICAgaWYodGhpcy5zZWxlY3RlZE9wdGlvbiAmJiB0aGlzLnNlbGVjdGVkT3B0aW9uLmxhYmVsKSB7XG4gICAgICB0aGlzLmxhYmVsLnRleHQgPSB0aGlzLnNlbGVjdGVkT3B0aW9uLmxhYmVsLnRleHQ7XG4gICAgfVxuXG4gICAgc3VwZXIuZHJhdyhjb250ZXh0KTtcblxuICAgIGlmKHRoaXMub3B0aW9uQ29udGFpbmVyKSB7XG4gICAgICB0aGlzLm9wdGlvbkNvbnRhaW5lci5zZWxlY3QgPSB0aGlzO1xuICAgIH1cbiAgfVxuXG4gIGdldCBzZWxlY3RlZE9wdGlvbigpIHtcbiAgICByZXR1cm4gdGhpcy5vcHRpb25Db250YWluZXIgPyB0aGlzLm9wdGlvbkNvbnRhaW5lci5jb21wb25lbnRzW3RoaXMub3B0aW9uQ29udGFpbmVyLnNlbGVjdGVkT3B0aW9uXSA6IG51bGw7XG4gIH1cblxuICBzZXQgc2VsZWN0ZWRPcHRpb24oaWQpIHtcbiAgICBpZihpZCAhPSB0aGlzLm9wdGlvbkNvbnRhaW5lci5zZWxlY3RlZE9wdGlvbikge1xuICAgICAgdGhpcy5vcHRpb25Db250YWluZXIuc2VsZWN0ZWRPcHRpb24gPSBpZDtcbiAgICAgIHRoaXMucmVhY3Rvci5kaXNwYXRjaEV2ZW50KFwib25DaGFuZ2VcIiwgdGhpcyk7XG4gICAgfVxuICB9XG5cbiAgZ2V0IHRleHQoKSB7XG4gICAgcmV0dXJuIHRoaXMuc2VsZWN0ZWRPcHRpb24gJiYgdGhpcy5zZWxlY3RlZE9wdGlvbi5sYWJlbCA/IHRoaXMuc2VsZWN0ZWRPcHRpb24ubGFiZWwudGV4dCA6IG51bGw7XG4gIH1cblxuICB1cGRhdGVXaWR0aCgpIHtcbiAgICBsZXQgbWF4V2lkdGggPSB0aGlzLmxhYmVsLndpZHRoO1xuXG4gICAgaWYodGhpcy5vcHRpb25Db250YWluZXIpIHtcbiAgICAgIHRoaXMub3B0aW9uQ29udGFpbmVyLmNvbXBvbmVudHMuZm9yRWFjaChjb21wb25lbnQgPT4ge1xuICAgICAgICBjb25zdCBsYWJlbCA9IGNvbXBvbmVudC5sYWJlbDtcblxuICAgICAgICBpZihsYWJlbCkge1xuICAgICAgICAgIGlmKGxhYmVsLnVwZGF0ZVNpemVzKSBsYWJlbC51cGRhdGVTaXplcygpO1xuICAgICAgICAgIGlmKGxhYmVsLndpZHRoID4gbWF4V2lkdGgpIG1heFdpZHRoID0gbGFiZWwud2lkdGg7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH1cblxuICAgIHRoaXMuI193aWR0aCA9IG1heFdpZHRoICsgdGhpcy5zdHlsZS5wYWRkaW5nICsgdGhpcy50cmlhbmdsZS53aWR0aCArIDE1O1xuICB9XG5cbiAgZ2V0IHdpZHRoKCkge1xuICAgIGlmKENvbnN0YW50cy5TZXR0aW5nLkRJU0FCTEVfRVhQRVJJTUVOVEFMX09QVElNSVpBVElPTlMpIHRoaXMudXBkYXRlV2lkdGgoKTtcbiAgICByZXR1cm4gdGhpcy4jX3dpZHRoO1xuICB9XG5cbiAgZ2V0IGFsbENvbXBvbmVudHMoKSB7XG4gICAgY29uc3QgY29tcG9uZW50cyA9IFtdO1xuICAgIGNvbXBvbmVudHMucHVzaCguLi5zdXBlci5hbGxDb21wb25lbnRzKTtcbiAgICByZXR1cm4gY29tcG9uZW50cztcbiAgfVxuXG4gIGdldCBkZWZhdWx0U3R5bGUoKSB7XG4gICAgcmV0dXJuIG5ldyBTdHlsZSh7XG4gICAgICBcImJhY2tncm91bmRDb2xvclwiOiBDb25zdGFudHMuU2V0dGluZy5TRUxFQ1RfREVGQVVMVF9CQUNLR1JPVU5ELFxuICAgICAgXCJiYWNrZ3JvdW5kQ29sb3JIb3ZlclwiOiBDb25zdGFudHMuU2V0dGluZy5TRUxFQ1RfREVGQVVMVF9IT1ZFUl9CQUNLR1JPVU5ELFxuICAgICAgXCJiYWNrZ3JvdW5kQ29sb3JEb3duXCI6IENvbnN0YW50cy5TZXR0aW5nLlNFTEVDVF9ERUZBVUxUX0NMSUNLX0JBQ0tHUk9VTkQsXG4gICAgICBcInBhZGRpbmdcIjogQ29uc3RhbnRzLlNldHRpbmcuREVGQVVMVF9QQURESU5HXG4gICAgfSk7XG4gIH1cblxuICBnZXQgc2VsZWN0ZWQoKSB7XG4gICAgcmV0dXJuIHN1cGVyLnNlbGVjdGVkIHx8IHRoaXMub3B0aW9uQ29udGFpbmVyLnNlbGVjdGVkO1xuICB9XG5cbiAgc2V0IHNlbGVjdGVkKHNlbGVjdGVkKSB7XG4gICAgc3VwZXIuc2VsZWN0ZWQgPSBzZWxlY3RlZDtcbiAgfVxufSIsIi8qXG4gKiBDb3B5cmlnaHQgKEMpIDIwMjAgRWxpYXN0aWsgKGVsaWFzdGlrc29mdHMuY29tKVxuICpcbiAqIFRoaXMgZmlsZSBpcyBwYXJ0IG9mIFwiSlNHYW1lVG9vbHNcIi5cbiAqXG4gKiBcIkpTR2FtZVRvb2xzXCIgaXMgZnJlZSBzb2Z0d2FyZTogeW91IGNhbiByZWRpc3RyaWJ1dGUgaXQgYW5kL29yIG1vZGlmeVxuICogaXQgdW5kZXIgdGhlIHRlcm1zIG9mIHRoZSBHTlUgR2VuZXJhbCBQdWJsaWMgTGljZW5zZSBhcyBwdWJsaXNoZWQgYnlcbiAqIHRoZSBGcmVlIFNvZnR3YXJlIEZvdW5kYXRpb24sIGVpdGhlciB2ZXJzaW9uIDMgb2YgdGhlIExpY2Vuc2UsIG9yXG4gKiAoYXQgeW91ciBvcHRpb24pIGFueSBsYXRlciB2ZXJzaW9uLlxuICpcbiAqIFwiSlNHYW1lVG9vbHNcIiBpcyBkaXN0cmlidXRlZCBpbiB0aGUgaG9wZSB0aGF0IGl0IHdpbGwgYmUgdXNlZnVsLFxuICogYnV0IFdJVEhPVVQgQU5ZIFdBUlJBTlRZOyB3aXRob3V0IGV2ZW4gdGhlIGltcGxpZWQgd2FycmFudHkgb2ZcbiAqIE1FUkNIQU5UQUJJTElUWSBvciBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRS4gIFNlZSB0aGVcbiAqIEdOVSBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlIGZvciBtb3JlIGRldGFpbHMuXG4gKlxuICogWW91IHNob3VsZCBoYXZlIHJlY2VpdmVkIGEgY29weSBvZiB0aGUgR05VIEdlbmVyYWwgUHVibGljIExpY2Vuc2VcbiAqIGFsb25nIHdpdGggXCJKU0dhbWVUb29sc1wiLiAgSWYgbm90LCBzZWUgPGh0dHA6Ly93d3cuZ251Lm9yZy9saWNlbnNlcy8+LlxuICovXG5pbXBvcnQgQnV0dG9uIGZyb20gXCIuL0J1dHRvblwiO1xuaW1wb3J0IENvbnN0YW50cyBmcm9tIFwiLi9Db25zdGFudHNcIjtcbmltcG9ydCBMYWJlbCBmcm9tIFwiLi9MYWJlbFwiO1xuaW1wb3J0IFN0eWxlIGZyb20gXCIuL1N0eWxlXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFNlbGVjdE9wdGlvbiBleHRlbmRzIEJ1dHRvbiB7XG4gIGNvbnN0cnVjdG9yKGxhYmVsLCBzdHlsZSkge1xuICAgIGNvbnN0IGRlZmF1bHRMYWJlbCA9IG5ldyBMYWJlbChcIk9wdGlvblwiKTtcbiAgICBzdXBlcihudWxsLCBudWxsLCBudWxsLCBudWxsLCBzdHlsZSwgbGFiZWwgfHwgZGVmYXVsdExhYmVsKTtcbiAgICB0aGlzLmxhYmVsID0gbGFiZWwgfHwgZGVmYXVsdExhYmVsO1xuICB9XG5cbiAgYWRkKGNvbXBvbmVudCkge1xuICAgIGlmKGNvbXBvbmVudCBpbnN0YW5jZW9mIExhYmVsKSB7XG4gICAgICB0aGlzLmNsZWFyKCk7XG4gICAgICBzdXBlci5hZGQoY29tcG9uZW50KTtcbiAgICB9XG4gIH1cblxuICBnZXQgd2lkdGgoKSB7XG4gICAgcmV0dXJuIHRoaXMucGFyZW50ICYmIHRoaXMucGFyZW50LndpZHRoO1xuICB9XG5cbiAgZ2V0IGRlZmF1bHRTdHlsZSgpIHtcbiAgICByZXR1cm4gbmV3IFN0eWxlKHtcbiAgICAgIFwiYmFja2dyb3VuZENvbG9yXCI6IENvbnN0YW50cy5TZXR0aW5nLlNFTEVDVF9ERUZBVUxUX0JBQ0tHUk9VTkQsXG4gICAgICBcImJhY2tncm91bmRDb2xvckhvdmVyXCI6IENvbnN0YW50cy5TZXR0aW5nLlNFTEVDVF9ERUZBVUxUX0hPVkVSX0JBQ0tHUk9VTkQsXG4gICAgICBcImJhY2tncm91bmRDb2xvckRvd25cIjogQ29uc3RhbnRzLlNldHRpbmcuU0VMRUNUX0RFRkFVTFRfQ0xJQ0tfQkFDS0dST1VORCxcbiAgICAgIFwicGFkZGluZ1wiOiBDb25zdGFudHMuU2V0dGluZy5ERUZBVUxUX1BBRERJTkdcbiAgICB9KTtcbiAgfVxufSIsIi8qXG4gKiBDb3B5cmlnaHQgKEMpIDIwMjAgRWxpYXN0aWsgKGVsaWFzdGlrc29mdHMuY29tKVxuICpcbiAqIFRoaXMgZmlsZSBpcyBwYXJ0IG9mIFwiSlNHYW1lVG9vbHNcIi5cbiAqXG4gKiBcIkpTR2FtZVRvb2xzXCIgaXMgZnJlZSBzb2Z0d2FyZTogeW91IGNhbiByZWRpc3RyaWJ1dGUgaXQgYW5kL29yIG1vZGlmeVxuICogaXQgdW5kZXIgdGhlIHRlcm1zIG9mIHRoZSBHTlUgR2VuZXJhbCBQdWJsaWMgTGljZW5zZSBhcyBwdWJsaXNoZWQgYnlcbiAqIHRoZSBGcmVlIFNvZnR3YXJlIEZvdW5kYXRpb24sIGVpdGhlciB2ZXJzaW9uIDMgb2YgdGhlIExpY2Vuc2UsIG9yXG4gKiAoYXQgeW91ciBvcHRpb24pIGFueSBsYXRlciB2ZXJzaW9uLlxuICpcbiAqIFwiSlNHYW1lVG9vbHNcIiBpcyBkaXN0cmlidXRlZCBpbiB0aGUgaG9wZSB0aGF0IGl0IHdpbGwgYmUgdXNlZnVsLFxuICogYnV0IFdJVEhPVVQgQU5ZIFdBUlJBTlRZOyB3aXRob3V0IGV2ZW4gdGhlIGltcGxpZWQgd2FycmFudHkgb2ZcbiAqIE1FUkNIQU5UQUJJTElUWSBvciBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRS4gIFNlZSB0aGVcbiAqIEdOVSBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlIGZvciBtb3JlIGRldGFpbHMuXG4gKlxuICogWW91IHNob3VsZCBoYXZlIHJlY2VpdmVkIGEgY29weSBvZiB0aGUgR05VIEdlbmVyYWwgUHVibGljIExpY2Vuc2VcbiAqIGFsb25nIHdpdGggXCJKU0dhbWVUb29sc1wiLiAgSWYgbm90LCBzZWUgPGh0dHA6Ly93d3cuZ251Lm9yZy9saWNlbnNlcy8+LlxuICovXG5pbXBvcnQgQ29sIGZyb20gXCIuL0NvbFwiO1xuaW1wb3J0IFN0eWxlIGZyb20gXCIuL1N0eWxlXCI7XG5pbXBvcnQgQ29uc3RhbnRzIGZyb20gXCIuL0NvbnN0YW50c1wiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTZWxlY3REcm9wZG93biBleHRlbmRzIENvbCB7XG4gICNfc2VsZWN0ZWRPcHRpb247XG4gIHNlbGVjdGFibGUgPSBmYWxzZTtcblxuICBjb25zdHJ1Y3RvcihtYXhIZWlnaHREcm9wZG93biwgc3R5bGUsIC4uLm9wdGlvbnMpIHtcbiAgICBzdXBlcihudWxsLCBudWxsLCBudWxsLCBtYXhIZWlnaHREcm9wZG93biwgc3R5bGUsIC4uLm9wdGlvbnMpO1xuICAgIHRoaXMuI19zZWxlY3RlZE9wdGlvbiA9IDA7XG4gICAgdGhpcy5zZWxlY3QgPSBudWxsO1xuICB9XG5cbiAgZHJhdyhjb250ZXh0KSB7XG4gICAgc3VwZXIuZHJhdyhjb250ZXh0KTtcbiAgfVxuXG4gIGdldCB4KCkge1xuICAgIHJldHVybiB0aGlzLnNlbGVjdCAmJiB0aGlzLnNlbGVjdC54O1xuICB9XG5cbiAgZ2V0IHkoKSB7XG4gICAgY29uc3Qgc2VsZWN0SGVpZ2h0ID0gKHRoaXMuc2VsZWN0ICYmIHRoaXMuc2VsZWN0LmhlaWdodCk7XG4gICAgY29uc3QgaGVpZ2h0ID0gdGhpcy5oZWlnaHQ7XG4gICAgY29uc3QgeSA9IHRoaXMuc2VsZWN0ICYmIHRoaXMuc2VsZWN0Lnk7XG5cbiAgICBpZih0aGlzLmNhbnZhcyAmJiB0aGlzLmNhbnZhcy5zY2VuZSAmJiB5ICsgc2VsZWN0SGVpZ2h0ICsgaGVpZ2h0ID49IHRoaXMuY2FudmFzLnNjZW5lLmhlaWdodCkge1xuICAgICAgcmV0dXJuIHkgLSBoZWlnaHQ7XG4gICAgfVxuXG4gICAgcmV0dXJuIHkgKyBzZWxlY3RIZWlnaHQ7XG4gIH1cblxuICBnZXQgd2lkdGgoKSB7XG4gICAgcmV0dXJuIHRoaXMuc2VsZWN0ICYmIHRoaXMuc2VsZWN0LndpZHRoO1xuICB9XG5cbiAgZ2V0IHNlbGVjdGVkT3B0aW9uKCkge1xuICAgIHJldHVybiBNYXRoLm1heCgwLCBNYXRoLm1pbih0aGlzLmNvbXBvbmVudHMubGVuZ3RoIC0gMSwgdGhpcy4jX3NlbGVjdGVkT3B0aW9uKSk7XG4gIH1cblxuICBzZXQgc2VsZWN0ZWRPcHRpb24oaWQpIHtcbiAgICBpZihpZCAhPSB0aGlzLiNfc2VsZWN0ZWRPcHRpb24pIHtcbiAgICAgIHRoaXMuI19zZWxlY3RlZE9wdGlvbiA9IGlkO1xuICAgICAgdGhpcy5yZWFjdG9yLmRpc3BhdGNoRXZlbnQoXCJvbkNoYW5nZVwiLCB0aGlzKTtcbiAgICB9XG4gIH1cblxuICBhZGQoY29tcG9uZW50KSB7XG4gICAgc3VwZXIuYWRkKGNvbXBvbmVudCk7XG5cbiAgICBjb21wb25lbnQuYWRkQ2xpY2tBY3Rpb24oKCkgPT4ge1xuICAgICAgdGhpcy4jX3NlbGVjdGVkT3B0aW9uID0gdGhpcy5nZXRDb21wb25lbnRJZChjb21wb25lbnQpO1xuICAgICAgdGhpcy5zZWxlY3RlZCA9IGZhbHNlO1xuICAgICAgdGhpcy5oaWRkZW4gPSB0cnVlO1xuICAgICAgaWYodGhpcy5zZWxlY3QpIHRoaXMuc2VsZWN0LnNlbGVjdGVkID0gZmFsc2U7XG4gICAgfSk7XG4gIH1cblxuICBnZXQgZGVmYXVsdFN0eWxlKCkge1xuICAgIHJldHVybiBuZXcgU3R5bGUoe1xuICAgICAgXCJwYWRkaW5nXCI6IDAsXG4gICAgICBcInNwYWNlQmV0d2VlbkNvbXBvbmVudHNcIjogMCxcbiAgICAgIFwiYmFja2dyb3VuZENvbG9yXCI6IENvbnN0YW50cy5TZXR0aW5nLlNFTEVDVF9ERUZBVUxUX0JBQ0tHUk9VTkQsXG4gICAgICBcImJhY2tncm91bmRDb2xvckhvdmVyXCI6IG51bGwsXG4gICAgICBcImJhY2tncm91bmRDb2xvckRvd25cIjogbnVsbCxcbiAgICAgIFwic2Nyb2xsWERpc2FibGVkXCI6IGZhbHNlLFxuICAgICAgXCJzY3JvbGxZRGlzYWJsZWRcIjogZmFsc2VcbiAgICB9KTtcbiAgfVxuXG4gIGdldCBoaWRkZW4oKSB7XG4gICAgcmV0dXJuIHN1cGVyLmhpZGRlbiB8fCAodGhpcy5zZWxlY3QgJiYgIXRoaXMuc2VsZWN0LnNlbGVjdGVkKSB8fCAhdGhpcy5zZWxlY3Q7XG4gIH1cblxuICBzZXQgaGlkZGVuKGhpZGRlbikge1xuICAgIHJldHVybiBzdXBlci5oaWRkZW4gPSBoaWRkZW47XG4gIH1cbn0iLCIvKlxuICogQ29weXJpZ2h0IChDKSAyMDIwIEVsaWFzdGlrIChlbGlhc3Rpa3NvZnRzLmNvbSlcbiAqXG4gKiBUaGlzIGZpbGUgaXMgcGFydCBvZiBcIkpTR2FtZVRvb2xzXCIuXG4gKlxuICogXCJKU0dhbWVUb29sc1wiIGlzIGZyZWUgc29mdHdhcmU6IHlvdSBjYW4gcmVkaXN0cmlidXRlIGl0IGFuZC9vciBtb2RpZnlcbiAqIGl0IHVuZGVyIHRoZSB0ZXJtcyBvZiB0aGUgR05VIEdlbmVyYWwgUHVibGljIExpY2Vuc2UgYXMgcHVibGlzaGVkIGJ5XG4gKiB0aGUgRnJlZSBTb2Z0d2FyZSBGb3VuZGF0aW9uLCBlaXRoZXIgdmVyc2lvbiAzIG9mIHRoZSBMaWNlbnNlLCBvclxuICogKGF0IHlvdXIgb3B0aW9uKSBhbnkgbGF0ZXIgdmVyc2lvbi5cbiAqXG4gKiBcIkpTR2FtZVRvb2xzXCIgaXMgZGlzdHJpYnV0ZWQgaW4gdGhlIGhvcGUgdGhhdCBpdCB3aWxsIGJlIHVzZWZ1bCxcbiAqIGJ1dCBXSVRIT1VUIEFOWSBXQVJSQU5UWTsgd2l0aG91dCBldmVuIHRoZSBpbXBsaWVkIHdhcnJhbnR5IG9mXG4gKiBNRVJDSEFOVEFCSUxJVFkgb3IgRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UuICBTZWUgdGhlXG4gKiBHTlUgR2VuZXJhbCBQdWJsaWMgTGljZW5zZSBmb3IgbW9yZSBkZXRhaWxzLlxuICpcbiAqIFlvdSBzaG91bGQgaGF2ZSByZWNlaXZlZCBhIGNvcHkgb2YgdGhlIEdOVSBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlXG4gKiBhbG9uZyB3aXRoIFwiSlNHYW1lVG9vbHNcIi4gIElmIG5vdCwgc2VlIDxodHRwOi8vd3d3LmdudS5vcmcvbGljZW5zZXMvPi5cbiAqL1xuaW1wb3J0IENvbnN0YW50cyBmcm9tIFwiLi9Db25zdGFudHNcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU3R5bGUge1xuICAjc3R5bGVzID0ge307XG4gIGNvbXBvbmVudDtcblxuICBjb25zdHJ1Y3RvcihzdHlsZXMpIHtcbiAgICB0aGlzLnNldEFsbChzdHlsZXMpO1xuICB9XG5cbiAgZ2V0IGZvbnRDb2xvcigpIHtcbiAgICByZXR1cm4gdGhpcy4jc3R5bGVzLmZvbnRDb2xvcjtcbiAgfVxuXG4gIGdldCBmb250Q29sb3JIb3ZlcigpIHtcbiAgICByZXR1cm4gdGhpcy4jc3R5bGVzLmZvbnRDb2xvckhvdmVyO1xuICB9XG5cbiAgZ2V0IGZvbnRDb2xvckRvd24oKSB7XG4gICAgcmV0dXJuIHRoaXMuI3N0eWxlcy5mb250Q29sb3JEb3duO1xuICB9XG5cbiAgZ2V0IGZvbnRGYW1pbHkoKSB7XG4gICAgcmV0dXJuIHRoaXMuI3N0eWxlcy5mb250RmFtaWx5ICE9IG51bGwgPyB0aGlzLiNzdHlsZXMuZm9udEZhbWlseSA6IENvbnN0YW50cy5TZXR0aW5nLkZPTlRfRkFNSUxZO1xuICB9XG5cbiAgZ2V0IGZvbnRTaXplKCkge1xuICAgIHJldHVybiB0aGlzLiNzdHlsZXMuZm9udFNpemUgIT0gbnVsbCA/IHRoaXMuI3N0eWxlcy5mb250U2l6ZSA6IENvbnN0YW50cy5TZXR0aW5nLkZPTlRfU0laRTtcbiAgfVxuXG4gIGdldCBib2xkKCkge1xuICAgIHJldHVybiB0aGlzLiNzdHlsZXMuYm9sZDtcbiAgfVxuXG4gIGdldCB1bmRlcmxpbmUoKSB7XG4gICAgcmV0dXJuIHRoaXMuI3N0eWxlcy51bmRlcmxpbmU7XG4gIH1cblxuICBnZXQgd3JhcCgpIHtcbiAgICByZXR1cm4gdGhpcy4jc3R5bGVzLndyYXA7XG4gIH1cblxuICBnZXQgYmFja2dyb3VuZENvbG9yKCkge1xuICAgIHJldHVybiB0aGlzLiNzdHlsZXMuYmFja2dyb3VuZENvbG9yO1xuICB9XG5cbiAgZ2V0IGZvcmVncm91bmRDb2xvcigpIHtcbiAgICByZXR1cm4gdGhpcy4jc3R5bGVzLmZvcmVncm91bmRDb2xvcjtcbiAgfVxuXG4gIGdldCBiYWNrZ3JvdW5kQ29sb3JIb3ZlcigpIHtcbiAgICByZXR1cm4gdGhpcy4jc3R5bGVzLmJhY2tncm91bmRDb2xvckhvdmVyO1xuICB9XG5cbiAgZ2V0IGJhY2tncm91bmRDb2xvckRvd24oKSB7XG4gICAgcmV0dXJuIHRoaXMuI3N0eWxlcy5iYWNrZ3JvdW5kQ29sb3JEb3duO1xuICB9XG5cbiAgZ2V0IGJvcmRlckNvbG9yKCkge1xuICAgIHJldHVybiB0aGlzLiNzdHlsZXMuYm9yZGVyQ29sb3I7XG4gIH1cblxuICBnZXQgYm9yZGVyQ29sb3JIb3ZlcigpIHtcbiAgICByZXR1cm4gdGhpcy4jc3R5bGVzLmJvcmRlckNvbG9ySG92ZXI7XG4gIH1cblxuICBnZXQgYm9yZGVyQ29sb3JEb3duKCkge1xuICAgIHJldHVybiB0aGlzLiNzdHlsZXMuYm9yZGVyQ29sb3JEb3duO1xuICB9XG5cbiAgZ2V0IGJvcmRlckNvbG9yU2VsZWN0ZWQoKSB7XG4gICAgcmV0dXJuIHRoaXMuI3N0eWxlcy5ib3JkZXJDb2xvclNlbGVjdGVkICE9IG51bGwgPyB0aGlzLiNzdHlsZXMuYm9yZGVyQ29sb3JTZWxlY3RlZCA6IENvbnN0YW50cy5TZXR0aW5nLkRFRkFVTFRfQk9SREVSX0NPTE9SX1NFTEVDVEVEO1xuICB9XG5cbiAgZ2V0IGJvcmRlclNpemUoKSB7XG4gICAgcmV0dXJuIHRoaXMuI3N0eWxlcy5ib3JkZXJTaXplICE9IG51bGwgPyB0aGlzLiNzdHlsZXMuYm9yZGVyU2l6ZSA6IENvbnN0YW50cy5TZXR0aW5nLkRFRkFVTFRfQk9SREVSX1NJWkU7XG4gIH1cblxuICBnZXQgc2VsZWN0Q29sb3IoKSB7XG4gICAgcmV0dXJuIHRoaXMuI3N0eWxlcy5zZWxlY3RDb2xvcjtcbiAgfVxuXG4gIGdldCBhbGlnbmVtZW50KCkge1xuICAgIHJldHVybiB0aGlzLiNzdHlsZXMuYWxpZ25lbWVudDtcbiAgfVxuXG4gIGdldCB2ZXJ0aWNhbEFsaWduZW1lbnQoKSB7XG4gICAgcmV0dXJuIHRoaXMuI3N0eWxlcy52ZXJ0aWNhbEFsaWduZW1lbnQ7XG4gIH1cblxuICBnZXQgZGlzYWJsZUFuaW1hdGlvbigpIHtcbiAgICByZXR1cm4gdGhpcy4jc3R5bGVzLmRpc2FibGVBbmltYXRpb247XG4gIH1cblxuICBnZXQgc2Nyb2xsWERpc2FibGVkKCkge1xuICAgIHJldHVybiB0aGlzLiNzdHlsZXMuc2Nyb2xsWERpc2FibGVkO1xuICB9XG5cbiAgZ2V0IHNjcm9sbFlEaXNhYmxlZCgpIHtcbiAgICByZXR1cm4gdGhpcy4jc3R5bGVzLnNjcm9sbFlEaXNhYmxlZDtcbiAgfVxuXG4gIGdldCBwYWRkaW5nKCkge1xuICAgIHJldHVybiB0aGlzLiNzdHlsZXMucGFkZGluZyAhPSBudWxsID8gdGhpcy4jc3R5bGVzLnBhZGRpbmcgOiBDb25zdGFudHMuU2V0dGluZy5ERUZBVUxUX1BBRERJTkc7XG4gIH1cblxuICBnZXQgc3BhY2VCZXR3ZWVuQ29tcG9uZW50cygpIHtcbiAgICByZXR1cm4gdGhpcy4jc3R5bGVzLnNwYWNlQmV0d2VlbkNvbXBvbmVudHMgIT0gbnVsbCA/IHRoaXMuI3N0eWxlcy5zcGFjZUJldHdlZW5Db21wb25lbnRzIDogQ29uc3RhbnRzLlNldHRpbmcuREVGQVVMVF9TUEFDSU5HO1xuICB9XG5cbiAgZ2V0IGhpZGRlbigpIHtcbiAgICByZXR1cm4gdGhpcy4jc3R5bGVzLmhpZGRlbjtcbiAgfVxuXG4gIGdldCBibHVyQmFja2dyb3VuZCgpIHtcbiAgICByZXR1cm4gdGhpcy4jc3R5bGVzLmJsdXJCYWNrZ3JvdW5kO1xuICB9XG5cbiAgZ2V0IGxpbmVXaWR0aCgpIHtcbiAgICByZXR1cm4gdGhpcy4jc3R5bGVzLmxpbmVXaWR0aDtcbiAgfVxuXG4gIGdldCBhbmltYXRpb25EdXJhdGlvbigpIHtcbiAgICByZXR1cm4gdGhpcy4jc3R5bGVzLmFuaW1hdGlvbkR1cmF0aW9uICE9IG51bGwgPyB0aGlzLiNzdHlsZXMuYW5pbWF0aW9uRHVyYXRpb24gOiBDb25zdGFudHMuU2V0dGluZy5ERUZBVUxUX0FOSU1BVElPTl9EVVJBVElPTjtcbiAgfVxuXG4gIGdldCBmb3JlZ3JvdW5kKCkge1xuICAgIHJldHVybiB0aGlzLiNzdHlsZXMuZm9yZWdyb3VuZDtcbiAgfVxuXG4gIGdldCB6SW5kZXgoKSB7XG4gICAgcmV0dXJuIHRoaXMuI3N0eWxlcy56SW5kZXggIT0gbnVsbCA/IHRoaXMuI3N0eWxlcy56SW5kZXggOiAwO1xuICB9XG4gIFxuICBnZXQgbGluZUNhcCgpIHtcbiAgICByZXR1cm4gdGhpcy4jc3R5bGVzLmxpbmVDYXA7XG4gIH1cbiAgXG4gIGdldCBmaWxsKCkge1xuICAgIHJldHVybiB0aGlzLiNzdHlsZXMuZmlsbDtcbiAgfVxuXG4gIGdldCBmaWxsQ29sb3IoKSB7XG4gICAgcmV0dXJuIHRoaXMuI3N0eWxlcy5maWxsQ29sb3I7XG4gIH1cblxuICBnZXQgY29sb3IoKSB7XG4gICAgcmV0dXJuIHRoaXMuI3N0eWxlcy5jb2xvcjtcbiAgfVxuXG4gIGdldCBtb3ZhYmxlKCkge1xuICAgIHJldHVybiB0aGlzLiNzdHlsZXMubW92YWJsZSB8fCBmYWxzZTtcbiAgfVxuXG4gIHNldChzdHlsZSwgdmFsdWUpIHtcbiAgICBpZih0aGlzLiNzdHlsZXNbc3R5bGVdICE9IHZhbHVlKSB7XG4gICAgICB0aGlzLiNzdHlsZXNbc3R5bGVdID0gdmFsdWU7XG4gICAgICBpZih0aGlzLmNvbXBvbmVudCAmJiB0aGlzLmNvbXBvbmVudC5yZWFjdG9yKSB0aGlzLmNvbXBvbmVudC5yZWFjdG9yLmRpc3BhdGNoRXZlbnQoXCJvbkNoYW5nZVwiLCB0aGlzKTtcbiAgICB9XG4gIH1cblxuICBzZXRBbGwoc3R5bGVzKSB7XG4gICAgaWYoc3R5bGVzKSB7XG4gICAgICBmb3IoY29uc3Qgc3R5bGUgaW4gc3R5bGVzKSB7XG4gICAgICAgIGlmKHN0eWxlcy5oYXNPd25Qcm9wZXJ0eShzdHlsZSkpIHtcbiAgICAgICAgICB0aGlzLnNldChzdHlsZSwgc3R5bGVzW3N0eWxlXSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBjb3B5KCkge1xuICAgIHJldHVybiBuZXcgU3R5bGUodGhpcy4jc3R5bGVzKTtcbiAgfVxuXG4gIGdldFN0eWxlcygpIHtcbiAgICBjb25zdCBzdHlsZXMgPSB7fTtcblxuICAgIGZvcihjb25zdCBzdHlsZSBpbiB0aGlzLiNzdHlsZXMpIHtcbiAgICAgIGlmKHRoaXMuI3N0eWxlcy5oYXNPd25Qcm9wZXJ0eShzdHlsZSkpIHtcbiAgICAgICAgc3R5bGVzW3N0eWxlXSA9IHRoaXMuI3N0eWxlc1tzdHlsZV07XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHN0eWxlcztcbiAgfVxufSIsIi8qXG4gKiBDb3B5cmlnaHQgKEMpIDIwMjAgRWxpYXN0aWsgKGVsaWFzdGlrc29mdHMuY29tKVxuICpcbiAqIFRoaXMgZmlsZSBpcyBwYXJ0IG9mIFwiSlNHYW1lVG9vbHNcIi5cbiAqXG4gKiBcIkpTR2FtZVRvb2xzXCIgaXMgZnJlZSBzb2Z0d2FyZTogeW91IGNhbiByZWRpc3RyaWJ1dGUgaXQgYW5kL29yIG1vZGlmeVxuICogaXQgdW5kZXIgdGhlIHRlcm1zIG9mIHRoZSBHTlUgR2VuZXJhbCBQdWJsaWMgTGljZW5zZSBhcyBwdWJsaXNoZWQgYnlcbiAqIHRoZSBGcmVlIFNvZnR3YXJlIEZvdW5kYXRpb24sIGVpdGhlciB2ZXJzaW9uIDMgb2YgdGhlIExpY2Vuc2UsIG9yXG4gKiAoYXQgeW91ciBvcHRpb24pIGFueSBsYXRlciB2ZXJzaW9uLlxuICpcbiAqIFwiSlNHYW1lVG9vbHNcIiBpcyBkaXN0cmlidXRlZCBpbiB0aGUgaG9wZSB0aGF0IGl0IHdpbGwgYmUgdXNlZnVsLFxuICogYnV0IFdJVEhPVVQgQU5ZIFdBUlJBTlRZOyB3aXRob3V0IGV2ZW4gdGhlIGltcGxpZWQgd2FycmFudHkgb2ZcbiAqIE1FUkNIQU5UQUJJTElUWSBvciBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRS4gIFNlZSB0aGVcbiAqIEdOVSBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlIGZvciBtb3JlIGRldGFpbHMuXG4gKlxuICogWW91IHNob3VsZCBoYXZlIHJlY2VpdmVkIGEgY29weSBvZiB0aGUgR05VIEdlbmVyYWwgUHVibGljIExpY2Vuc2VcbiAqIGFsb25nIHdpdGggXCJKU0dhbWVUb29sc1wiLiAgSWYgbm90LCBzZWUgPGh0dHA6Ly93d3cuZ251Lm9yZy9saWNlbnNlcy8+LlxuICovXG5pbXBvcnQgQ29sIGZyb20gXCIuL0NvbFwiO1xuaW1wb3J0IENvbnN0YW50cyBmcm9tIFwiLi9Db25zdGFudHNcIjtcbmltcG9ydCBTdHlsZSBmcm9tIFwiLi9TdHlsZVwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBUb29sdGlwIGV4dGVuZHMgQ29sIHtcbiAgc2VsZWN0YWJsZSA9IGZhbHNlO1xuICBcbiAgY29uc3RydWN0b3Ioc3R5bGUsIC4uLmNvbXBvbmVudHMpIHtcbiAgICBzdXBlcihudWxsLCBudWxsLCBudWxsLCBudWxsLCBzdHlsZSwgLi4uY29tcG9uZW50cyk7XG4gICAgdGhpcy5kaXNhYmxlZCA9IHRydWU7XG4gIH1cblxuICBkcmF3KGNvbnRleHQpIHtcbiAgICBpZih0aGlzLmhpZGRlbikgcmV0dXJuO1xuICAgIGNvbnN0IGNhbnZhcyA9IGNvbnRleHQuY2FudmFzO1xuICAgIGNvbnN0IGN0eCA9IGNhbnZhcy5nZXRDb250ZXh0KFwiMmRcIik7XG4gICAgY3R4LnNhdmUoKTtcblxuICAgIGlmKHRoaXMueCArIHRoaXMud2lkdGggKyB0aGlzLnN0eWxlLnBhZGRpbmcgPiB0aGlzLnBhcmVudC53aWR0aCkge1xuICAgICAgdGhpcy54IC09ICh0aGlzLndpZHRoICsgdGhpcy5zdHlsZS5wYWRkaW5nKTtcbiAgICB9XG5cbiAgICBpZih0aGlzLnkgKyB0aGlzLmhlaWdodCArIHRoaXMuc3R5bGUucGFkZGluZyA+IHRoaXMucGFyZW50LmhlaWdodCkge1xuICAgICAgdGhpcy55IC09ICh0aGlzLmhlaWdodCArIHRoaXMuc3R5bGUucGFkZGluZyk7XG4gICAgfVxuXG4gICAgc3VwZXIuZHJhdyhjdHgpO1xuICAgIFxuICAgIGN0eC5yZXN0b3JlKCk7XG4gIH1cblxuICBnZXQgd2lkdGgoKSB7XG4gICAgcmV0dXJuIHN1cGVyLndpZHRoICsgdGhpcy5zdHlsZS5wYWRkaW5nO1xuICB9XG5cbiAgZ2V0IGhlaWdodCgpIHtcbiAgICByZXR1cm4gc3VwZXIuaGVpZ2h0ICsgdGhpcy5zdHlsZS5wYWRkaW5nO1xuICB9XG5cbiAgc2V0IHdpZHRoKHdpZHRoKSB7XG4gICAgc3VwZXIud2lkdGggPSB3aWR0aDtcbiAgfVxuXG4gIHNldCBoZWlnaHQoaGVpZ2h0KSB7XG4gICAgc3VwZXIuaGVpZ2h0ID0gaGVpZ2h0O1xuICB9XG5cbiAgZ2V0IGRlZmF1bHRTdHlsZSgpIHtcbiAgICByZXR1cm4gbmV3IFN0eWxlKHtcbiAgICAgIFwiYmFja2dyb3VuZENvbG9yXCI6IENvbnN0YW50cy5TZXR0aW5nLlRPT0xUSVBfREVGQVVMVF9CQUNLR1JPVU5EXG4gICAgfSk7XG4gIH1cblxuICBjb21wYXJlVG9Db21wb25lbnQob3RoZXJDb21wb25lbnQpIHtcbiAgICByZXR1cm4gb3RoZXJDb21wb25lbnQuY29tcGFyZVRvVG9vbHRpcCh0aGlzKTtcbiAgfVxuXG4gIGNvbXBhcmVUb01lbnUob3RoZXJDb21wb25lbnQpIHtcbiAgICByZXR1cm4gMTtcbiAgfVxuXG4gIGNvbXBhcmVUb1Rvb2x0aXAob3RoZXJDb21wb25lbnQpIHtcbiAgICByZXR1cm4gMDtcbiAgfVxuXG4gIGNvbXBhcmVUb05vdGlmaWNhdGlvbihvdGhlckNvbXBvbmVudCkge1xuICAgIHJldHVybiAxO1xuICB9XG5cbiAgZ2V0IGhpZGRlbigpIHtcbiAgICByZXR1cm4gc3VwZXIuaGlkZGVuIHx8IHRoaXMuZGlzYWJsZWQ7XG4gIH1cblxuICBzZXQgaGlkZGVuKGhpZGRlbikge1xuICAgIHN1cGVyLmhpZGRlbiA9IGhpZGRlbjtcbiAgICB0aGlzLmRpc2FibGVkID0gaGlkZGVuO1xuICB9XG59IiwiLypcbiAqIENvcHlyaWdodCAoQykgMjAyMCBFbGlhc3RpayAoZWxpYXN0aWtzb2Z0cy5jb20pXG4gKlxuICogVGhpcyBmaWxlIGlzIHBhcnQgb2YgXCJKU0dhbWVUb29sc1wiLlxuICpcbiAqIFwiSlNHYW1lVG9vbHNcIiBpcyBmcmVlIHNvZnR3YXJlOiB5b3UgY2FuIHJlZGlzdHJpYnV0ZSBpdCBhbmQvb3IgbW9kaWZ5XG4gKiBpdCB1bmRlciB0aGUgdGVybXMgb2YgdGhlIEdOVSBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlIGFzIHB1Ymxpc2hlZCBieVxuICogdGhlIEZyZWUgU29mdHdhcmUgRm91bmRhdGlvbiwgZWl0aGVyIHZlcnNpb24gMyBvZiB0aGUgTGljZW5zZSwgb3JcbiAqIChhdCB5b3VyIG9wdGlvbikgYW55IGxhdGVyIHZlcnNpb24uXG4gKlxuICogXCJKU0dhbWVUb29sc1wiIGlzIGRpc3RyaWJ1dGVkIGluIHRoZSBob3BlIHRoYXQgaXQgd2lsbCBiZSB1c2VmdWwsXG4gKiBidXQgV0lUSE9VVCBBTlkgV0FSUkFOVFk7IHdpdGhvdXQgZXZlbiB0aGUgaW1wbGllZCB3YXJyYW50eSBvZlxuICogTUVSQ0hBTlRBQklMSVRZIG9yIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFLiAgU2VlIHRoZVxuICogR05VIEdlbmVyYWwgUHVibGljIExpY2Vuc2UgZm9yIG1vcmUgZGV0YWlscy5cbiAqXG4gKiBZb3Ugc2hvdWxkIGhhdmUgcmVjZWl2ZWQgYSBjb3B5IG9mIHRoZSBHTlUgR2VuZXJhbCBQdWJsaWMgTGljZW5zZVxuICogYWxvbmcgd2l0aCBcIkpTR2FtZVRvb2xzXCIuICBJZiBub3QsIHNlZSA8aHR0cDovL3d3dy5nbnUub3JnL2xpY2Vuc2VzLz4uXG4gKi9cbmltcG9ydCBDb21wb25lbnQgZnJvbSBcIi4vQ29tcG9uZW50XCI7XG5pbXBvcnQgQ29uc3RhbnRzIGZyb20gXCIuL0NvbnN0YW50c1wiO1xuaW1wb3J0IFV0aWxzIGZyb20gXCIuL1V0aWxzXCI7XG5pbXBvcnQgU3R5bGUgZnJvbSBcIi4vU3R5bGVcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVHJpYW5nbGUgZXh0ZW5kcyBDb21wb25lbnQge1xuICBzZWxlY3RhYmxlID0gZmFsc2U7XG5cbiAgY29uc3RydWN0b3IoeCwgeSwgd2lkdGgsIGhlaWdodCwgc3R5bGUpIHtcbiAgICBzdXBlcih4LCB5LCB3aWR0aCwgaGVpZ2h0LCBzdHlsZSk7XG4gIH1cblxuICBkcmF3KGNvbnRleHQpIHtcbiAgICBpZih0aGlzLmhpZGRlbikgcmV0dXJuO1xuICAgIHN1cGVyLmRyYXcoY29udGV4dCk7XG5cbiAgICBjb25zdCBjYW52YXMgPSBjb250ZXh0LmNhbnZhcztcbiAgICBjb25zdCBjdHggPSBjYW52YXMuZ2V0Q29udGV4dChcIjJkXCIpO1xuICAgIFxuICAgIFV0aWxzLmRyYXdUcmlhbmdsZShjdHgsIHRoaXMueCwgdGhpcy55LCB0aGlzLndpZHRoLCB0aGlzLmhlaWdodCwgdGhpcy5zdHlsZS5saW5lV2lkdGgsIHRoaXMuc3R5bGUuY29sb3IsIHRoaXMuc3R5bGUubGluZUNhcCwgdGhpcy5zdHlsZS5maWxsLCB0aGlzLnN0eWxlLmZpbGxDb2xvcik7XG5cbiAgICB0aGlzLmluaXQgPSB0cnVlO1xuICB9XG5cbiAgZ2V0IHdpZHRoKCkge1xuICAgIHJldHVybiBzdXBlci53aWR0aCArIHRoaXMuc3R5bGUubGluZVdpZHRoO1xuICB9XG5cbiAgZ2V0IGhlaWdodCgpIHtcbiAgICByZXR1cm4gc3VwZXIuaGVpZ2h0ICsgdGhpcy5zdHlsZS5saW5lV2lkdGg7XG4gIH1cblxuICBzZXQgd2lkdGgod2lkdGgpIHtcbiAgICBzdXBlci53aWR0aCA9IHdpZHRoO1xuICB9XG5cbiAgc2V0IGhlaWdodChoZWlnaHQpIHtcbiAgICBzdXBlci5oZWlnaHQgPSBoZWlnaHQ7XG4gIH1cblxuICBnZXQgZGVmYXVsdFN0eWxlKCkge1xuICAgIHJldHVybiBuZXcgU3R5bGUoe1xuICAgICAgXCJsaW5lV2lkdGhcIjogQ29uc3RhbnRzLlNldHRpbmcuVFJJQU5HTEVfREVGQVVMVF9MSU5FX1NJWkUsXG4gICAgICBcImNvbG9yXCI6IENvbnN0YW50cy5TZXR0aW5nLlRSSUFOR0xFX0RFRkFVTFRfQ09MT1IsXG4gICAgICBcImZpbGxcIjogQ29uc3RhbnRzLlNldHRpbmcuVFJJQU5HTEVfREVGQVVMVF9GSUxMLFxuICAgICAgXCJsaW5lQ2FwXCI6IENvbnN0YW50cy5TZXR0aW5nLlRSSUFOR0xFX0RFRkFVTFRfTElORV9DQVAsXG4gICAgICBcImZpbGxDb2xvclwiOiBDb25zdGFudHMuU2V0dGluZy5UUklBTkdMRV9ERUZBVUxUX0ZJTExfQ09MT1JcbiAgICB9KTtcbiAgfVxufSIsIi8qXG4gKiBDb3B5cmlnaHQgKEMpIDIwMjAgRWxpYXN0aWsgKGVsaWFzdGlrc29mdHMuY29tKVxuICpcbiAqIFRoaXMgZmlsZSBpcyBwYXJ0IG9mIFwiSlNHYW1lVG9vbHNcIi5cbiAqXG4gKiBcIkpTR2FtZVRvb2xzXCIgaXMgZnJlZSBzb2Z0d2FyZTogeW91IGNhbiByZWRpc3RyaWJ1dGUgaXQgYW5kL29yIG1vZGlmeVxuICogaXQgdW5kZXIgdGhlIHRlcm1zIG9mIHRoZSBHTlUgR2VuZXJhbCBQdWJsaWMgTGljZW5zZSBhcyBwdWJsaXNoZWQgYnlcbiAqIHRoZSBGcmVlIFNvZnR3YXJlIEZvdW5kYXRpb24sIGVpdGhlciB2ZXJzaW9uIDMgb2YgdGhlIExpY2Vuc2UsIG9yXG4gKiAoYXQgeW91ciBvcHRpb24pIGFueSBsYXRlciB2ZXJzaW9uLlxuICpcbiAqIFwiSlNHYW1lVG9vbHNcIiBpcyBkaXN0cmlidXRlZCBpbiB0aGUgaG9wZSB0aGF0IGl0IHdpbGwgYmUgdXNlZnVsLFxuICogYnV0IFdJVEhPVVQgQU5ZIFdBUlJBTlRZOyB3aXRob3V0IGV2ZW4gdGhlIGltcGxpZWQgd2FycmFudHkgb2ZcbiAqIE1FUkNIQU5UQUJJTElUWSBvciBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRS4gIFNlZSB0aGVcbiAqIEdOVSBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlIGZvciBtb3JlIGRldGFpbHMuXG4gKlxuICogWW91IHNob3VsZCBoYXZlIHJlY2VpdmVkIGEgY29weSBvZiB0aGUgR05VIEdlbmVyYWwgUHVibGljIExpY2Vuc2VcbiAqIGFsb25nIHdpdGggXCJKU0dhbWVUb29sc1wiLiAgSWYgbm90LCBzZWUgPGh0dHA6Ly93d3cuZ251Lm9yZy9saWNlbnNlcy8+LlxuICovXG5pbXBvcnQgQ29uc3RhbnRzIGZyb20gXCIuL0NvbnN0YW50c1wiO1xuXG5leHBvcnQgZGVmYXVsdCB7XG4gIHByZVJlbmRlcmVkRm9udDoge30sXG4gIGxhc3RLZXk6IC0xLFxuICBwcmVSZW5kZXJGb250OiBmdW5jdGlvbihjYXJzLCBzaXplLCBjb2xvciwgZm9udEZhbWlseSkge1xuICAgIGNhcnMucHVzaChcIj9cIik7IGNhcnMucHVzaChcIiBcIik7IGNhcnMucHVzaChcIkFcIik7XG4gICAgXG4gICAgZm9yKGxldCBpID0gMDsgaSA8IGNhcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIGNvbnN0IGNhbnZhc1RtcCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJjYW52YXNcIik7XG4gICAgICBjb25zdCBjdHhUbXAgPSBjYW52YXNUbXAuZ2V0Q29udGV4dChcIjJkXCIpO1xuICAgICAgY3R4VG1wLmZvbnQgPSBzaXplICsgXCJweCBcIiArIGZvbnRGYW1pbHk7XG4gICAgICBjb25zdCB3aWR0aCA9IGN0eFRtcC5tZWFzdXJlVGV4dChjYXJzW2ldKS53aWR0aDtcbiAgICAgIFxuICAgICAgY2FudmFzVG1wLndpZHRoID0gd2lkdGg7XG4gICAgICBjYW52YXNUbXAuaGVpZ2h0ID0gc2l6ZSArIChzaXplIC8gNik7XG4gICAgICBcbiAgICAgIGN0eFRtcC5mb250ID0gc2l6ZSArIFwicHggXCIgKyBmb250RmFtaWx5O1xuICAgICAgY3R4VG1wLmZpbGxTdHlsZSA9IGNvbG9yO1xuICAgICAgY3R4VG1wLnRleHRCYXNlbGluZSA9IFwidG9wXCI7XG4gICAgICBjdHhUbXAuZmlsbFRleHQoY2Fyc1tpXSwgMCwgMCk7XG4gICAgICBcbiAgICAgIHRoaXMucHJlUmVuZGVyZWRGb250W2NhcnNbaV1dID0gY2FudmFzVG1wO1xuICAgIH1cbiAgfSxcbiAgZHJhd0ltYWdlOiBmdW5jdGlvbihjdHgsIGltYWdlLCB4LCB5LCB3aWR0aCwgaGVpZ2h0LCBzeCwgc3ksIHNXaWR0aCwgc0hlaWdodCwgZXJhc2VCZWxvdywgZGVncmVlcykge1xuICAgIHRoaXMuZHJhd0ltYWdlV3JhcHBlcihjdHgsIGltYWdlLCB4LCB5LCB3aWR0aCwgaGVpZ2h0LCBzeCwgc3ksIHNXaWR0aCwgc0hlaWdodCwgZXJhc2VCZWxvdywgZGVncmVlcyk7XG4gIH0sXG4gIGRyYXdJbWFnZURhdGE6IGZ1bmN0aW9uKGN0eCwgaW1hZ2VEYXRhLCB4LCB5LCB3aWR0aCwgaGVpZ2h0LCBzeCwgc3ksIHNXaWR0aCwgc0hlaWdodCwgZXJhc2VCZWxvdywgZGVncmVlcykge1xuICAgIHRoaXMuZHJhd0ltYWdlV3JhcHBlcihjdHgsIGltYWdlRGF0YSwgeCwgeSwgd2lkdGgsIGhlaWdodCwgc3gsIHN5LCBzV2lkdGgsIHNIZWlnaHQsIGVyYXNlQmVsb3csIGRlZ3JlZXMpO1xuICB9LFxuICBkcmF3SW1hZ2VXcmFwcGVyOiBmdW5jdGlvbihjdHgsIGltYWdlLCB4LCB5LCB3aWR0aCwgaGVpZ2h0LCBzeCwgc3ksIHNXaWR0aCwgc0hlaWdodCwgZXJhc2VCZWxvdywgZGVncmVlcykge1xuICAgIHggPSAoeCA9PSB1bmRlZmluZWQgfHwgaXNOYU4oeCkpID8gbnVsbCA6IE1hdGgucm91bmQoeCk7XG4gICAgeSA9ICh5ID09IHVuZGVmaW5lZCB8fCBpc05hTih5KSkgPyBudWxsIDogTWF0aC5yb3VuZCh5KTtcbiAgICB3aWR0aCA9ICh3aWR0aCA9PSB1bmRlZmluZWQgfHwgaXNOYU4od2lkdGgpKSA/IG51bGwgOiBNYXRoLnJvdW5kKHdpZHRoKTtcbiAgICBoZWlnaHQgPSAoaGVpZ2h0ID09IHVuZGVmaW5lZCB8fCBpc05hTihoZWlnaHQpKSA/IG51bGwgOiBNYXRoLnJvdW5kKGhlaWdodCk7XG4gICAgc3ggPSAoc3ggPT0gdW5kZWZpbmVkIHx8IGlzTmFOKHN4KSkgPyBudWxsIDogTWF0aC5yb3VuZChzeCk7XG4gICAgc3kgPSAoc3kgPT0gdW5kZWZpbmVkIHx8IGlzTmFOKHN5KSkgPyBudWxsIDogTWF0aC5yb3VuZChzeSk7XG4gICAgc1dpZHRoID0gKHNXaWR0aCA9PSB1bmRlZmluZWQgfHwgaXNOYU4oc1dpZHRoKSkgPyBudWxsIDogTWF0aC5yb3VuZChzV2lkdGgpO1xuICAgIHNIZWlnaHQgPSAoc0hlaWdodCA9PSB1bmRlZmluZWQgfHwgaXNOYU4oc0hlaWdodCkpID8gbnVsbCA6IE1hdGgucm91bmQoc0hlaWdodCk7XG4gICAgZXJhc2VCZWxvdyA9IGVyYXNlQmVsb3cgPT0gdW5kZWZpbmVkID8gZmFsc2UgOiBlcmFzZUJlbG93O1xuICAgIGRlZ3JlZXMgPSAoZGVncmVlcyA9PSB1bmRlZmluZWQgfHwgaXNOYU4oZGVncmVlcykpID8gbnVsbCA6IGRlZ3JlZXM7XG4gIFxuICAgIGlmKGRlZ3JlZXMgIT0gdW5kZWZpbmVkKSB7XG4gICAgICBjdHguc2F2ZSgpO1xuICAgICAgY3R4LnRyYW5zbGF0ZSh4ICsgd2lkdGggLyAyLCB5ICsgaGVpZ2h0IC8gMik7XG4gICAgICBjdHgucm90YXRlKGRlZ3JlZXMgKiBNYXRoLlBJIC8gMTgwKTtcbiAgICAgIHggPSAtKHdpZHRoIC8gMik7XG4gICAgICB5ID0gLShoZWlnaHQgLyAyKTtcbiAgICB9XG4gIFxuICAgIGlmKGVyYXNlQmVsb3cpIHtcbiAgICAgIGN0eC5jbGVhclJlY3QoeCwgeSwgd2lkdGgsIGhlaWdodCk7XG4gICAgfVxuICBcbiAgICBpZihjdHggIT0gdW5kZWZpbmVkICYmIGltYWdlICE9IHVuZGVmaW5lZCkge1xuICAgICAgaWYoaW1hZ2Uud2lkdGggPiAwICYmIGltYWdlLmhlaWdodCA+IDApIHtcbiAgICAgICAgaWYoc3ggIT0gdW5kZWZpbmVkICYmIHN5ICE9IHVuZGVmaW5lZCAmJiBzV2lkdGggIT0gdW5kZWZpbmVkICYmIHNIZWlnaHQgIT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgY3R4LmRyYXdJbWFnZShpbWFnZSwgc3gsIHN5LCBzV2lkdGgsIHNIZWlnaHQsIHgsIHksIHdpZHRoLCBoZWlnaHQpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGN0eC5kcmF3SW1hZ2UoaW1hZ2UsIHgsIHksIHdpZHRoLCBoZWlnaHQpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICBcbiAgICBpZihkZWdyZWVzICE9IHVuZGVmaW5lZCkge1xuICAgICAgY3R4LnJlc3RvcmUoKTtcbiAgICB9XG4gIH0sXG4gIGRyYXdUZXh0OiBmdW5jdGlvbihjdHgsIHRleHQsIGNvbG9yLCBzaXplLCBmb250RmFtaWx5LCBhbGlnbmVtZW50LCB2ZXJ0aWNhbEFsaWduZW1lbnQsIHgsIHksIHdyYXAsIGJvbGQsIHVuZGVybGluZSwgdGV4dEJhc2VsaW5lLCBwYXJlbnQpIHtcbiAgICBpZihjdHgpIHtcbiAgICAgIGN0eC5zYXZlKCk7XG5cbiAgICAgIGlmKCFBcnJheS5pc0FycmF5KGNvbG9yKSkge1xuICAgICAgICBjdHguZmlsbFN0eWxlID0gY29sb3I7XG4gICAgICAgIGN0eC5zdHJva2VTdHlsZSA9IGNvbG9yO1xuICAgICAgfVxuICBcbiAgICAgIGN0eC5mb250ID0gKGJvbGQgPyBcImJvbGQgXCIgOiBcIlwiKSArIHNpemUgKyBcInB4IFwiICsgZm9udEZhbWlseTtcbiAgICAgIGN0eC50ZXh0QmFzZWxpbmUgPSB0ZXh0QmFzZWxpbmUgfHwgXCJib3R0b21cIjtcbiAgICAgIGN0eC5maWx0ZXIgPSBcIm5vbmVcIjtcbiAgXG4gICAgICBpZih3cmFwKSB7XG4gICAgICAgIHRleHQgPSB0aGlzLndyYXBUZXh0TGluZXMoY3R4LCB0ZXh0KVtcInRleHRcIl07XG4gICAgICB9XG4gICAgICBcbiAgICAgIGNvbnN0IGxpbmVzID0gdGV4dC5zcGxpdChcIlxcblwiKTtcbiAgICAgIGxldCBtYXhXaWR0aCA9IDA7XG4gICAgICBsZXQgeEN1cnJlbnQgPSBNYXRoLnJvdW5kKHgpO1xuICAgICAgbGV0IHlDdXJyZW50ID0gTWF0aC5yb3VuZCh5KSArIHNpemU7XG4gICAgICBsZXQgeUZpcnN0ID0gMDtcblxuICAgICAgaWYoIXkpIHtcbiAgICAgICAgaWYodmVydGljYWxBbGlnbmVtZW50ID09IENvbnN0YW50cy5WZXJ0aWNhbEFsaWduZW1lbnQuQ0VOVEVSKSB7XG4gICAgICAgICAgeUN1cnJlbnQgKz0gTWF0aC5yb3VuZCgoKHBhcmVudCAmJiBwYXJlbnQuaGVpZ2h0ID8gcGFyZW50LmhlaWdodCA6IHRoaXMuZ2V0Q2FudmFzSGVpZ2h0KGN0eC5jYW52YXMpKSAvIDIpIC0gKHNpemUgKiBsaW5lcy5sZW5ndGggLyAyKSk7XG4gICAgICAgIH0gZWxzZSBpZih2ZXJ0aWNhbEFsaWduZW1lbnQgPT0gQ29uc3RhbnRzLlZlcnRpY2FsQWxpZ25lbWVudC5CT1RUT00pIHtcbiAgICAgICAgICB5Q3VycmVudCArPSBNYXRoLnJvdW5kKCgocGFyZW50ICYmIHBhcmVudC5oZWlnaHQgPyBwYXJlbnQuaGVpZ2h0IDogdGhpcy5nZXRDYW52YXNIZWlnaHQoY3R4LmNhbnZhcykpKSAtIChzaXplICogbGluZXMubGVuZ3RoKSAvIDIgLSBzaXplIC8gNSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgXG4gICAgICBmb3IobGV0IGkgPSAwOyBpIDwgbGluZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgY29uc3QgY3VycmVudFRleHQgPSBsaW5lc1tpXTtcbiAgICAgICAgY29uc3QgY3VycmVudFdpZHRoID0gY3R4Lm1lYXN1cmVUZXh0KGN1cnJlbnRUZXh0KS53aWR0aDtcbiAgXG4gICAgICAgIGlmKEFycmF5LmlzQXJyYXkoY29sb3IpKSB7XG4gICAgICAgICAgbGV0IGNvbG9ySW5kZXggPSBpO1xuICBcbiAgICAgICAgICBpZihjb2xvckluZGV4ID4gY29sb3IubGVuZ3RoIC0gMSkge1xuICAgICAgICAgICAgY29sb3JJbmRleCA9IGNvbG9yLmxlbmd0aCAtIDE7XG4gICAgICAgICAgfVxuICBcbiAgICAgICAgICBjdHguZmlsbFN0eWxlID0gY29sb3JbY29sb3JJbmRleF07XG4gICAgICAgICAgY3R4LnN0cm9rZVN0eWxlID0gY29sb3JbY29sb3JJbmRleF07XG4gICAgICAgIH1cbiAgXG4gICAgICAgIGlmKGFsaWduZW1lbnQgPT0gQ29uc3RhbnRzLkFsaWduZW1lbnQuQ0VOVEVSKSB7XG4gICAgICAgICAgeEN1cnJlbnQgPSBNYXRoLnJvdW5kKChwYXJlbnQgJiYgcGFyZW50LnggPyBwYXJlbnQueCA6IDApKSArIE1hdGgucm91bmQoKChwYXJlbnQgJiYgcGFyZW50LndpZHRoID8gcGFyZW50LndpZHRoIDogdGhpcy5nZXRDYW52YXNXaWR0aChjdHguY2FudmFzKSkgLyAyKSAtIChjdHgubWVhc3VyZVRleHQoY3VycmVudFRleHQpLndpZHRoIC8gMikpO1xuICAgICAgICB9IGVsc2UgaWYoYWxpZ25lbWVudCA9PSBDb25zdGFudHMuQWxpZ25lbWVudC5SSUdIVCkge1xuICAgICAgICAgIHhDdXJyZW50ID0gTWF0aC5yb3VuZCgocGFyZW50ICYmIHBhcmVudC54ID8gcGFyZW50LnggOiAwKSkgKyBNYXRoLnJvdW5kKChwYXJlbnQgJiYgcGFyZW50LndpZHRoID8gcGFyZW50LndpZHRoIDogdGhpcy5nZXRDYW52YXNXaWR0aChjdHguY2FudmFzKSkgLSAoY3R4Lm1lYXN1cmVUZXh0KGN1cnJlbnRUZXh0KS53aWR0aCkgLSAocGFyZW50ICYmIHBhcmVudC5zcGFjZUJldHdlZW5Db21wb25lbnRzID8gcGFyZW50LnNwYWNlQmV0d2VlbkNvbXBvbmVudHMgOiBDb25zdGFudHMuU2V0dGluZy5ERUZBVUxUX1NQQUNJTkcpKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGN0eC5maWxsVGV4dChjdXJyZW50VGV4dCwgeEN1cnJlbnQsIHlDdXJyZW50KTtcbiAgXG4gICAgICAgIGlmKHVuZGVybGluZSkge1xuICAgICAgICAgIGN0eC5saW5lV2lkdGggPSAxO1xuICAgICAgICAgIGN0eC5iZWdpblBhdGgoKTtcbiAgICAgICAgICBjdHgubW92ZVRvKHhDdXJyZW50LCB5Q3VycmVudCAtIDIpO1xuICAgICAgICAgIGN0eC5saW5lVG8oTWF0aC5yb3VuZCh4Q3VycmVudCArIGN1cnJlbnRXaWR0aCksIHlDdXJyZW50IC0gMik7XG4gICAgICAgICAgY3R4LnN0cm9rZSgpO1xuICAgICAgICB9XG4gIFxuICAgICAgICBpZihjdXJyZW50V2lkdGggPiBtYXhXaWR0aCkgbWF4V2lkdGggPSBjdXJyZW50V2lkdGg7XG4gICAgICAgIGlmKGkgPT0gMCkgeUZpcnN0ID0geUN1cnJlbnQ7XG5cbiAgICAgICAgeUN1cnJlbnQgKz0gc2l6ZTtcbiAgICAgIH1cbiAgXG4gICAgICBjdHgucmVzdG9yZSgpO1xuICBcbiAgICAgIHJldHVybiB7XG4gICAgICAgIHg6IHhDdXJyZW50LFxuICAgICAgICB5OiB5Rmlyc3QsXG4gICAgICAgIGhlaWdodDogc2l6ZSAqIGxpbmVzLmxlbmd0aCxcbiAgICAgICAgd2lkdGg6IG1heFdpZHRoXG4gICAgICB9O1xuICAgIH1cbiAgfSxcbiAgd3JhcFRleHQ6IGZ1bmN0aW9uKHRleHQsIGxpbWl0KSB7XG4gICAgaWYodGV4dC5sZW5ndGggPiBsaW1pdCkge1xuICAgICAgbGV0IHAgPSBsaW1pdDtcblxuICAgICAgZm9yKDsgcCA+IDAgJiYgdGV4dFtwXSAhPSBcIiBcIjsgcC0tKTtcblxuICAgICAgaWYocCA+IDApIHtcbiAgICAgICAgY29uc3QgbGVmdCA9IHRleHQuc3Vic3RyaW5nKDAsIHApO1xuICAgICAgICBjb25zdCByaWdodCA9IHRleHQuc3Vic3RyaW5nKHAgKyAxKTtcbiAgICAgICAgcmV0dXJuIGxlZnQgKyBcIlxcblwiICsgdGhpcy53cmFwVGV4dChyaWdodCwgbGltaXQpO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiB0ZXh0O1xuICB9LFxuICB3cmFwVGV4dExpbmVzOiBmdW5jdGlvbihjdHgsIHRleHQsIHdpZHRoLCBmb250U2l6ZSwgZm9udEZhbWlseSwgZGlzYWJsZVdyYXApIHtcbiAgICBpZihjdHggJiYgdGV4dCkge1xuICAgICAgY3R4LnNhdmUoKTtcbiAgICAgIGN0eC5mb250ID0gTWF0aC5yb3VuZChmb250U2l6ZSkgKyBcInB4IFwiICsgZm9udEZhbWlseTtcbiAgICAgIGN0eC5pbWFnZVNtb290aGluZ0VuYWJsZWQgPSBmYWxzZTtcbiAgXG4gICAgICBjb25zdCBsaW5lcyA9IHRleHQuc3BsaXQoXCJcXG5cIik7XG4gICAgICBsZXQgbmV3VGV4dCA9IFwiXCI7XG4gICAgICBjb25zdCB3aWR0aENhciA9IHdpZHRoIHx8IGN0eC5tZWFzdXJlVGV4dChcIkFcIikud2lkdGg7XG4gICAgICBjb25zdCBuYkNhckxpbmUgPSBNYXRoLnJvdW5kKHRoaXMuZ2V0Q2FudmFzV2lkdGgoY3R4LmNhbnZhcykgLyB3aWR0aENhcik7XG4gIFxuICAgICAgbGV0IGhlaWdodFRvdGFsID0gMDtcbiAgICAgIGxldCBtYXhXaWR0aCA9IDA7XG4gIFxuICAgICAgZm9yKGxldCBpID0gMDsgaSA8IGxpbmVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGNvbnN0IGxpbmVXcmFwID0gZGlzYWJsZVdyYXAgPyBsaW5lc1tpXSA6IHRoaXMud3JhcFRleHQobGluZXNbaV0sIG5iQ2FyTGluZSk7XG4gICAgICAgIG5ld1RleHQgKz0gbGluZVdyYXA7XG4gIFxuICAgICAgICBpZihpIDwgbGluZXMubGVuZ3RoIC0gMSkge1xuICAgICAgICAgIG5ld1RleHQgKz0gXCJcXG5cIjtcbiAgICAgICAgfVxuICBcbiAgICAgICAgZm9yKGxldCBqID0gMDsgaiA8IGxpbmVXcmFwLnNwbGl0KFwiXFxuXCIpLmxlbmd0aDsgaisrKSB7XG4gICAgICAgICAgY29uc3Qgd2lkdGhUZXh0ID0gY3R4Lm1lYXN1cmVUZXh0KGxpbmVXcmFwLnNwbGl0KFwiXFxuXCIpW2pdKS53aWR0aDtcbiAgICAgICAgICBoZWlnaHRUb3RhbCArPSBmb250U2l6ZTtcbiAgICAgICAgICBpZih3aWR0aFRleHQgPiBtYXhXaWR0aCkgbWF4V2lkdGggPSB3aWR0aFRleHQ7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgXG4gICAgICBjdHgucmVzdG9yZSgpO1xuXG4gICAgICByZXR1cm4ge1xuICAgICAgICB0ZXh0OiBuZXdUZXh0LFxuICAgICAgICBoZWlnaHQ6IGhlaWdodFRvdGFsLFxuICAgICAgICB3aWR0aDogbWF4V2lkdGgsXG4gICAgICAgIGNhcldpZHRoOiB3aWR0aENhclxuICAgICAgfTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgdGV4dDogXCJcIixcbiAgICAgICAgaGVpZ2h0OiAwLFxuICAgICAgICB3aWR0aDogMCxcbiAgICAgICAgY2FyV2lkdGg6IDBcbiAgICAgIH07XG4gICAgfVxuICB9LFxuICBkcmF3QXJyb3c6IGZ1bmN0aW9uKGN0eCwgZnJvbXgsIGZyb215LCB0b3gsIHRveSwgbGluZVdpZHRoLCBoZWFkU2l6ZSwgY29sb3IsIGxpbmVDYXApIHtcbiAgICBjdHguc2F2ZSgpO1xuXG4gICAgY3R4LmxpbmVDYXAgPSBsaW5lQ2FwIHx8IENvbnN0YW50cy5TZXR0aW5nLkFSUk9XX0RFRkFVTFRfTElORV9DQVA7XG4gICAgY3R4LmxpbmVXaWR0aCA9IGxpbmVXaWR0aCB8fCBDb25zdGFudHMuU2V0dGluZy5BUlJPV19ERUZBVUxUX0xJTkVfU0laRTtcbiAgICBjdHguc3Ryb2tlU3R5bGUgPSBjb2xvciB8fCBDb25zdGFudHMuU2V0dGluZy5BUlJPV19ERUZBVUxUX0NPTE9SO1xuICAgIGN0eC5maWx0ZXIgPSBcIlwiO1xuICBcbiAgICBjdHguYmVnaW5QYXRoKCk7XG4gICAgY29uc3QgaGVhZGxlbiA9IGhlYWRTaXplIHx8IENvbnN0YW50cy5TZXR0aW5nLkFSUk9XX0RFRkFVTFRfSEVBRF9TSVpFO1xuICAgIGNvbnN0IGR4ID0gdG94IC0gZnJvbXg7XG4gICAgY29uc3QgZHkgPSB0b3kgLSBmcm9teTtcbiAgICBjb25zdCBhbmdsZSA9IE1hdGguYXRhbjIoZHksIGR4KTtcbiAgICBjdHgubW92ZVRvKGZyb214LCBmcm9teSk7XG4gICAgY3R4LmxpbmVUbyh0b3gsIHRveSk7XG4gICAgY3R4Lm1vdmVUbyh0b3gsIHRveSk7XG4gICAgY3R4LmxpbmVUbyh0b3ggLSBoZWFkbGVuICogTWF0aC5jb3MoYW5nbGUgLSBNYXRoLlBJIC8gNiksIHRveSAtIGhlYWRsZW4gKiBNYXRoLnNpbihhbmdsZSAtIE1hdGguUEkgLyA2KSk7XG4gICAgY3R4Lm1vdmVUbyh0b3gsIHRveSk7XG4gICAgY3R4LmxpbmVUbyh0b3ggLSBoZWFkbGVuICogTWF0aC5jb3MoYW5nbGUgKyBNYXRoLlBJIC8gNiksIHRveSAtIGhlYWRsZW4gKiBNYXRoLnNpbihhbmdsZSArIE1hdGguUEkgLyA2KSk7XG4gICAgY3R4LnN0cm9rZSgpO1xuICAgIFxuICAgIGN0eC5yZXN0b3JlKCk7XG4gIH0sXG4gIGRyYXdDcm9zczogZnVuY3Rpb24oY3R4LCB4LCB5LCB3aWR0aCwgaGVpZ2h0LCBsaW5lV2lkdGgsIGNvbG9yLCBsaW5lQ2FwKSB7XG4gICAgY3R4LnNhdmUoKTtcblxuICAgIGN0eC5saW5lQ2FwID0gbGluZUNhcCB8fCBDb25zdGFudHMuU2V0dGluZy5DUk9TU19ERUZBVUxUX0xJTkVfQ0FQO1xuICAgIGN0eC5saW5lV2lkdGggPSBsaW5lV2lkdGggfHwgQ29uc3RhbnRzLlNldHRpbmcuQ1JPU1NfREVGQVVMVF9MSU5FX1NJWkU7XG4gICAgY3R4LnN0cm9rZVN0eWxlID0gY29sb3IgfHwgQ29uc3RhbnRzLlNldHRpbmcuQ1JPU1NfREVGQVVMVF9DT0xPUjtcbiAgICBjdHguZmlsdGVyID0gXCJcIjtcbiAgXG4gICAgY3R4LmJlZ2luUGF0aCgpO1xuICAgIGN0eC5tb3ZlVG8oeCwgeSk7XG4gICAgY3R4LmxpbmVUbyh4ICsgd2lkdGgsIHkgKyBoZWlnaHQpO1xuICAgIGN0eC5tb3ZlVG8oeCArIHdpZHRoLCB5KTtcbiAgICBjdHgubGluZVRvKHgsIHkgKyBoZWlnaHQpO1xuICAgIGN0eC5zdHJva2UoKTtcbiAgICBcbiAgICBjdHgucmVzdG9yZSgpO1xuICB9LFxuICBkcmF3VHJpYW5nbGU6IGZ1bmN0aW9uKGN0eCwgeCwgeSwgd2lkdGgsIGhlaWdodCwgbGluZVdpZHRoLCBjb2xvciwgbGluZUNhcCwgZmlsbCA9IENvbnN0YW50cy5TZXR0aW5nLlRSSUFOR0xFX0RFRkFVTFRfRklMTCwgZmlsbENvbG9yKSB7XG4gICAgY3R4LnNhdmUoKTtcblxuICAgIGN0eC5saW5lQ2FwID0gbGluZUNhcCB8fCBDb25zdGFudHMuU2V0dGluZy5UUklBTkdMRV9ERUZBVUxUX0xJTkVfQ0FQO1xuICAgIGN0eC5saW5lV2lkdGggPSBsaW5lV2lkdGggfHwgQ29uc3RhbnRzLlNldHRpbmcuVFJJQU5HTEVfREVGQVVMVF9MSU5FX1NJWkU7XG4gICAgY3R4LmZpbHRlciA9IFwiXCI7XG5cbiAgICBpZihmaWxsKSB7XG4gICAgICBjdHguZmlsbFN0eWxlID0gZmlsbENvbG9yIHx8IENvbnN0YW50cy5TZXR0aW5nLlRSSUFOR0xFX0RFRkFVTFRfRklMTF9DT0xPUjtcbiAgICAgIGN0eC5zdHJva2VTdHlsZSA9IGNvbG9yIHx8IENvbnN0YW50cy5TZXR0aW5nLlRSSUFOR0xFX0RFRkFVTFRfQ09MT1I7XG4gICAgfSBlbHNlIHtcbiAgICAgIGN0eC5zdHJva2VTdHlsZSA9IGNvbG9yIHx8IENvbnN0YW50cy5TZXR0aW5nLlRSSUFOR0xFX0RFRkFVTFRfQ09MT1I7XG4gICAgfVxuICBcbiAgICBjdHguYmVnaW5QYXRoKCk7XG4gICAgY3R4Lm1vdmVUbyh4LCB5KTtcbiAgICBjdHgubGluZVRvKHggKyB3aWR0aCwgeSk7XG4gICAgY3R4LmxpbmVUbyh4ICsgd2lkdGggLyAyLCB5ICsgaGVpZ2h0KTtcbiAgICBjdHgubGluZVRvKHgsIHkpO1xuXG4gICAgaWYoZmlsbCkge1xuICAgICAgY3R4LmZpbGwoKTtcbiAgICAgIGN0eC5zdHJva2UoKTtcbiAgICB9IGVsc2Uge1xuICAgICAgY3R4LnN0cm9rZSgpO1xuICAgIH1cbiAgICBcbiAgICBjdHgucmVzdG9yZSgpO1xuICB9LFxuICBkcmF3Q2lyY2xlOiBmdW5jdGlvbihjdHgsIHgsIHksIHJhZGl1cywgbGluZVdpZHRoLCBjb2xvciwgbGluZUNhcCwgZmlsbCA9IENvbnN0YW50cy5TZXR0aW5nLkNJUkNMRV9ERUZBVUxUX0ZJTEwsIGZpbGxDb2xvcikge1xuICAgIGN0eC5zYXZlKCk7XG5cbiAgICBjdHgubGluZUNhcCA9IGxpbmVDYXAgfHwgQ29uc3RhbnRzLlNldHRpbmcuQ0lSQ0xFX0RFRkFVTFRfTElORV9DQVA7XG4gICAgY3R4LmxpbmVXaWR0aCA9IGxpbmVXaWR0aCB8fCBDb25zdGFudHMuU2V0dGluZy5DSVJDTEVfREVGQVVMVF9MSU5FX1NJWkU7XG4gICAgY3R4LmZpbHRlciA9IFwiXCI7XG5cbiAgICBpZihmaWxsKSB7XG4gICAgICBjdHguZmlsbFN0eWxlID0gZmlsbENvbG9yIHx8IENvbnN0YW50cy5TZXR0aW5nLkNJUkNMRV9ERUZBVUxUX0ZJTExfQ09MT1I7XG4gICAgICBjdHguc3Ryb2tlU3R5bGUgPSBjb2xvciB8fCBDb25zdGFudHMuU2V0dGluZy5DSVJDTEVfREVGQVVMVF9DT0xPUjtcbiAgICB9IGVsc2Uge1xuICAgICAgY3R4LnN0cm9rZVN0eWxlID0gY29sb3IgfHwgQ29uc3RhbnRzLlNldHRpbmcuQ0lSQ0xFX0RFRkFVTFRfQ09MT1I7XG4gICAgfVxuICAgIFxuICAgIGN0eC5iZWdpblBhdGgoKTtcbiAgICBjdHguYXJjKHggKyByYWRpdXMgLyAyLCB5ICsgcmFkaXVzIC8gMiwgcmFkaXVzIC8gMiwgMCwgMiAqIE1hdGguUEksIGZhbHNlKTtcblxuICAgIGlmKGZpbGwpIHtcbiAgICAgIGN0eC5maWxsKCk7XG4gICAgICBjdHguc3Ryb2tlKCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGN0eC5zdHJva2UoKTtcbiAgICB9XG4gICAgXG4gICAgY3R4LnJlc3RvcmUoKTtcbiAgfSxcbiAgY2xlYXI6IGZ1bmN0aW9uKGN0eCkge1xuICAgIGN0eC5jbGVhclJlY3QoMCwgMCwgdGhpcy5nZXRDYW52YXNXaWR0aChjdHguY2FudmFzKSwgdGhpcy5nZXRDYW52YXNIZWlnaHQoY3R4LmNhbnZhcykpO1xuICB9LFxuICBpc0ZpbHRlckh1ZUF2YWlsYWJsZTogZnVuY3Rpb24oKSB7XG4gICAgY29uc3QgY2FudmFzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImNhbnZhc1wiKTtcbiAgICBjYW52YXMud2lkdGggPSA1O1xuICAgIGNhbnZhcy5oZWlnaHQgPSA1O1xuICAgIGNvbnN0IGN0eCA9IGNhbnZhcy5nZXRDb250ZXh0KFwiMmRcIik7XG4gICAgY3R4LnNhdmUoKTtcbiAgXG4gICAgY3R4LmZpbGxTdHlsZSA9IFwiI0ZGMDAwMFwiO1xuICAgIGN0eC5maWx0ZXIgPSBcImh1ZS1yb3RhdGUoOTBkZWcpXCI7XG4gICAgY3R4LmZpbGxSZWN0KDAsIDAsIDUsIDUpO1xuICAgIGNvbnN0IGNvbG9yID0gY3R4LmdldEltYWdlRGF0YSgwLCAwLCAxLCAxKS5kYXRhO1xuICAgIGN0eC5yZXN0b3JlKCk7XG4gIFxuICAgIGlmKGNvbG9yWzBdID09IDI1NSAmJiBjb2xvclsxXSA9PSAwICYmIGNvbG9yWzJdID09IDApIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gIFxuICAgIHJldHVybiB0cnVlO1xuICB9LFxuICBibHVyQ2FudmFzOiBmdW5jdGlvbihjdHgsIGxlbmd0aCkge1xuICAgIGN0eC5zYXZlKCk7XG4gICAgY3R4LmZpbHRlciA9IFwiYmx1cihcIiArIGxlbmd0aCAgKyBcInB4KVwiO1xuICAgIHRoaXMuZHJhd0ltYWdlRGF0YShjdHgsIGN0eC5jYW52YXMsIDAsIDAsIHRoaXMuZ2V0Q2FudmFzV2lkdGgoY3R4LmNhbnZhcyksIHRoaXMuZ2V0Q2FudmFzSGVpZ2h0KGN0eC5jYW52YXMpKTtcbiAgICBjdHgucmVzdG9yZSgpO1xuICB9LFxuICBwYXJzZU51bWJlcjogZnVuY3Rpb24oc3RyKSB7XG4gICAgcmV0dXJuIHN0ciA/IHBhcnNlSW50KHN0ci5tYXRjaCgvXFxkKy8pLCAxMCkgOiAwO1xuICB9LFxuICBnZXRGb250U2l6ZTogZnVuY3Rpb24oY3R4KSB7XG4gICAgcmV0dXJuIE1hdGguZmxvb3IocGFyc2VOdW1iZXIoY3R4LmZvbnQpIC8gMS4yNSk7XG4gIH0sXG4gIGdldENhbnZhc1dpZHRoKGNhbnZhcykge1xuICAgIHJldHVybiB0aGlzLnBhcnNlTnVtYmVyKGNhbnZhcy5zdHlsZS53aWR0aCkgfHwgY2FudmFzLndpZHRoO1xuICB9LFxuICBnZXRDYW52YXNIZWlnaHQoY2FudmFzKSB7XG4gICAgcmV0dXJuIHRoaXMucGFyc2VOdW1iZXIoY2FudmFzLnN0eWxlLmhlaWdodCkgfHwgY2FudmFzLmhlaWdodDtcbiAgfSxcbiAgYXV0b0RQSShjYW52YXMpIHtcbiAgICBjb25zdCByZWN0ID0gY2FudmFzLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuXG4gICAgY2FudmFzLndpZHRoID0gcmVjdC53aWR0aCAqIENvbnN0YW50cy5TZXR0aW5nLlBJWEVMX1JBVElPO1xuICAgIGNhbnZhcy5oZWlnaHQgPSByZWN0LmhlaWdodCAqIENvbnN0YW50cy5TZXR0aW5nLlBJWEVMX1JBVElPO1xuICAgIFxuICAgIGNhbnZhcy5zdHlsZS53aWR0aCA9IHJlY3Qud2lkdGggKyBcInB4XCI7XG4gICAgY2FudmFzLnN0eWxlLmhlaWdodCA9ICByZWN0LmhlaWdodCArIFwicHhcIjtcbiAgfSxcbiAgYXV0b1Jlc2l6ZUNhbnZhczogZnVuY3Rpb24oY2FudmFzLCBjb250YWluZXIsIGluaXRpYWxXaWR0aCwgaW5pdGlhbEhlaWdodCkge1xuICAgIGlmKCFkb2N1bWVudC5mdWxsc2NyZWVuRWxlbWVudCkge1xuICAgICAgaWYoaW5pdGlhbFdpZHRoID49IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5jbGllbnRXaWR0aCAqIDAuODUpIHtcbiAgICAgICAgdmFyIHJhdGlvID0gaW5pdGlhbFdpZHRoIC8gaW5pdGlhbEhlaWdodDtcbiAgICAgICAgY2FudmFzLndpZHRoID0gZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmNsaWVudFdpZHRoICogMC44NTtcbiAgICAgICAgY2FudmFzLmhlaWdodCA9IGNhbnZhcy53aWR0aCAvIHJhdGlvO1xuXG4gICAgICAgIGlmKGNhbnZhcy5zdHlsZSkge1xuICAgICAgICAgIGNhbnZhcy5zdHlsZS53aWR0aCA9IGNhbnZhcy53aWR0aCArIFwicHhcIjtcbiAgICAgICAgICBjYW52YXMuc3R5bGUuaGVpZ2h0ID0gY2FudmFzLmhlaWdodCArIFwicHhcIjtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgY2FudmFzLndpZHRoID0gaW5pdGlhbFdpZHRoO1xuICAgICAgICBjYW52YXMuaGVpZ2h0ID0gaW5pdGlhbEhlaWdodDtcblxuICAgICAgICBpZihjYW52YXMuc3R5bGUpIHtcbiAgICAgICAgICBjYW52YXMuc3R5bGUud2lkdGggPSBpbml0aWFsV2lkdGggKyBcInB4XCI7XG4gICAgICAgICAgY2FudmFzLnN0eWxlLmhlaWdodCA9IGluaXRpYWxIZWlnaHQgKyBcInB4XCI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9IGVsc2UgaWYoZG9jdW1lbnQuZnVsbHNjcmVlbkVsZW1lbnQgPT0gY2FudmFzIHx8IGRvY3VtZW50LmZ1bGxzY3JlZW5FbGVtZW50ID09IGNvbnRhaW5lcikge1xuICAgICAgY2FudmFzLndpZHRoID0gd2luZG93LmlubmVyV2lkdGg7XG4gICAgICBjYW52YXMuaGVpZ2h0ID0gd2luZG93LmlubmVySGVpZ2h0O1xuXG4gICAgICBpZihjYW52YXMuc3R5bGUpIHtcbiAgICAgICAgY2FudmFzLnN0eWxlLndpZHRoID0gd2luZG93LmlubmVyV2lkdGggKyBcInB4XCI7XG4gICAgICAgIGNhbnZhcy5zdHlsZS5oZWlnaHQgPSB3aW5kb3cuaW5uZXJIZWlnaHQgKyBcInB4XCI7XG4gICAgICB9XG5cbiAgICAgIGlmKGNvbnRhaW5lcikge1xuICAgICAgICBjb250YWluZXIud2lkdGggPSB3aW5kb3cuaW5uZXJXaWR0aDtcbiAgICAgICAgY29udGFpbmVyLmhlaWdodCA9IHdpbmRvdy5pbm5lckhlaWdodDtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgY2FudmFzLndpZHRoID0gaW5pdGlhbFdpZHRoO1xuICAgICAgY2FudmFzLmhlaWdodCA9IGluaXRpYWxIZWlnaHQ7XG5cbiAgICAgIGlmKGNhbnZhcy5zdHlsZSkge1xuICAgICAgICBjYW52YXMuc3R5bGUud2lkdGggPSBpbml0aWFsV2lkdGggKyBcInB4XCI7XG4gICAgICAgIGNhbnZhcy5zdHlsZS5oZWlnaHQgPSBpbml0aWFsSGVpZ2h0ICsgXCJweFwiO1xuICAgICAgfVxuICAgIH1cbiAgfSxcbiAgZW5hYmxlQXV0b1Jlc2l6ZUNhbnZhczogZnVuY3Rpb24oY2FudmFzLCBjb250YWluZXIsIGluaXRpYWxXaWR0aCwgaW5pdGlhbEhlaWdodCkge1xuICAgIGlmKGNhbnZhcyAmJiBjYW52YXMuZ2V0QXR0cmlidXRlKFwiYXV0b3Jlc2l6ZS1jYW52YXMtZXZlbnRcIikgIT0gXCJ0cnVlXCIpIHtcbiAgICAgIHRoaXMuYXV0b1Jlc2l6ZUNhbnZhcyhjYW52YXMsIGNvbnRhaW5lciwgaW5pdGlhbFdpZHRoLCBpbml0aWFsSGVpZ2h0KTtcbiAgXG4gICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcInJlc2l6ZVwiLCAoKSA9PiB7XG4gICAgICAgIGNhbnZhcy5zZXRBdHRyaWJ1dGUoXCJhdXRvcmVzaXplLWNhbnZhcy1ldmVudFwiLCBcInRydWVcIik7XG4gICAgICAgIHRoaXMuYXV0b1Jlc2l6ZUNhbnZhcyhjYW52YXMsIGNvbnRhaW5lciwgaW5pdGlhbFdpZHRoLCBpbml0aWFsSGVpZ2h0KTtcbiAgICAgIH0pO1xuICAgIH1cbiAgfSxcbiAgYXV0b1Jlc2l6ZUNhbnZhc0Z1bGxzY3JlZW46IGZ1bmN0aW9uKGNhbnZhcywgY29udGFpbmVyKSB7XG4gICAgaWYoZG9jdW1lbnQuZnVsbHNjcmVlbkVsZW1lbnQgPT0gY2FudmFzIHx8IGRvY3VtZW50LmZ1bGxzY3JlZW5FbGVtZW50ID09IGNvbnRhaW5lcikge1xuICAgICAgY2FudmFzLndpZHRoID0gd2luZG93LmlubmVyV2lkdGg7XG4gICAgICBjYW52YXMuaGVpZ2h0ID0gd2luZG93LmlubmVySGVpZ2h0O1xuXG4gICAgICBpZihjYW52YXMuc3R5bGUpIHtcbiAgICAgICAgY2FudmFzLnN0eWxlLndpZHRoID0gd2luZG93LmlubmVyV2lkdGggKyBcInB4XCI7XG4gICAgICAgIGNhbnZhcy5zdHlsZS5oZWlnaHQgPSB3aW5kb3cuaW5uZXJIZWlnaHQgKyBcInB4XCI7XG4gICAgICB9XG4gICAgICBcbiAgICAgIGlmKGNvbnRhaW5lcikge1xuICAgICAgICBjb250YWluZXIud2lkdGggPSB3aW5kb3cuaW5uZXJXaWR0aDtcbiAgICAgICAgY29udGFpbmVyLmhlaWdodCA9IHdpbmRvdy5pbm5lckhlaWdodDtcbiAgICAgIH1cbiAgICB9XG4gIH0sXG4gIGVuYWJsZUF1dG9SZXNpemVDYW52YXNGdWxsc2NyZWVuOiBmdW5jdGlvbihjYW52YXMsIGNvbnRhaW5lcikge1xuICAgIGlmKGNhbnZhcyAmJiBjYW52YXMuZ2V0QXR0cmlidXRlKFwiYXV0b3Jlc2l6ZWZ1bGxzY3JlZW4tY2FudmFzLWV2ZW50XCIpICE9IFwidHJ1ZVwiKSB7XG4gICAgICB0aGlzLmF1dG9SZXNpemVDYW52YXNGdWxsc2NyZWVuKGNhbnZhcywgY29udGFpbmVyKTtcbiAgXG4gICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcInJlc2l6ZVwiLCAoKSA9PiB7XG4gICAgICAgIGNhbnZhcy5zZXRBdHRyaWJ1dGUoXCJhdXRvcmVzaXplZnVsbHNjcmVlbi1jYW52YXMtZXZlbnRcIiwgXCJ0cnVlXCIpO1xuICAgICAgICB0aGlzLmF1dG9SZXNpemVDYW52YXNGdWxsc2NyZWVuKGNhbnZhcywgY29udGFpbmVyKTtcbiAgICAgIH0pO1xuICAgIH1cbiAgfSxcbiAgYXV0b1Jlc2l6ZUNhbnZhc0Z1bGxwYWdlOiBmdW5jdGlvbihjYW52YXMsIGNvbnRhaW5lcikge1xuICAgIGlmKGNhbnZhcyAmJiBjYW52YXMuZ2V0QXR0cmlidXRlKFwiZnVsbHBhZ2UtY2FudmFzLWVuYWJsZVwiKSA9PSBcInRydWVcIikge1xuICAgICAgY2FudmFzLndpZHRoID0gd2luZG93LmlubmVyV2lkdGg7XG4gICAgICBjYW52YXMuaGVpZ2h0ID0gd2luZG93LmlubmVySGVpZ2h0O1xuICAgICAgXG4gICAgICBpZihjYW52YXMuc3R5bGUpIHtcbiAgICAgICAgY2FudmFzLnN0eWxlLndpZHRoID0gd2luZG93LmlubmVyV2lkdGggKyBcInB4XCI7XG4gICAgICAgIGNhbnZhcy5zdHlsZS5oZWlnaHQgPSB3aW5kb3cuaW5uZXJIZWlnaHQgKyBcInB4XCI7XG4gICAgICB9XG4gICAgICBcbiAgICAgIGlmKGNvbnRhaW5lcikge1xuICAgICAgICBjb250YWluZXIud2lkdGggPSB3aW5kb3cuaW5uZXJXaWR0aDtcbiAgICAgICAgY29udGFpbmVyLmhlaWdodCA9IHdpbmRvdy5pbm5lckhlaWdodDtcbiAgICAgICAgY29udGFpbmVyLnN0eWxlLm1hcmdpbiA9IDA7XG4gICAgICAgIGNvbnRhaW5lci5zdHlsZS5wYWRkaW5nID0gMDtcbiAgICAgIH1cblxuICAgICAgZG9jdW1lbnQuYm9keS5zdHlsZS5tYXJnaW4gPSAwO1xuICAgICAgZG9jdW1lbnQuYm9keS5zdHlsZS5wYWRkaW5nID0gMDtcbiAgICB9XG4gIH0sXG4gIGVuYWJsZUF1dG9SZXNpemVDYW52YXNGdWxscGFnZTogZnVuY3Rpb24oY2FudmFzLCBjb250YWluZXIpIHtcbiAgICBpZihjYW52YXMgJiYgY2FudmFzLmdldEF0dHJpYnV0ZShcImF1dG9yZXNpemVmdWxscGFnZS1jYW52YXMtZXZlbnRcIikgIT0gXCJ0cnVlXCIpIHtcbiAgICAgIHRoaXMuYXV0b1Jlc2l6ZUNhbnZhc0Z1bGxwYWdlKGNhbnZhcywgY29udGFpbmVyKTtcbiAgXG4gICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcInJlc2l6ZVwiLCAoKSA9PiB7XG4gICAgICAgIGNhbnZhcy5zZXRBdHRyaWJ1dGUoXCJhdXRvcmVzaXplZnVsbHBhZ2UtY2FudmFzLWV2ZW50XCIsIFwidHJ1ZVwiKTtcbiAgICAgICAgdGhpcy5hdXRvUmVzaXplQ2FudmFzRnVsbHBhZ2UoY2FudmFzLCBjb250YWluZXIpO1xuICAgICAgfSk7XG4gICAgfVxuICB9LFxuICB0b2dnbGVGdWxsc2NyZWVuOiBmdW5jdGlvbihjYW52YXMsIGNvbnRhaW5lcikge1xuICAgIGlmKGNhbnZhcykge1xuICAgICAgY29uc3QgaW5pdGlhbFdpZHRoID0gY2FudmFzLndpZHRoO1xuICAgICAgY29uc3QgaW5pdGlhbEhlaWdodCA9IGNhbnZhcy5oZWlnaHQ7XG5cbiAgICAgIGlmKGNvbnRhaW5lcikge1xuICAgICAgICBjb250YWluZXIud2lkdGggPSBpbml0aWFsV2lkdGg7XG4gICAgICAgIGNvbnRhaW5lci5oZWlnaHQgPSBpbml0aWFsSGVpZ2h0O1xuICAgICAgfVxuXG4gICAgICBpZighZG9jdW1lbnQuZnVsbHNjcmVlbkVsZW1lbnQpIHtcbiAgICAgICAgaWYoKGNvbnRhaW5lciB8fCBjYW52YXMpLnJlcXVlc3RGdWxsc2NyZWVuKSB7XG4gICAgICAgICAgKGNvbnRhaW5lciB8fCBjYW52YXMpLnJlcXVlc3RGdWxsc2NyZWVuKCk7XG4gICAgICAgIH0gZWxzZSBpZigoY29udGFpbmVyIHx8IGNhbnZhcykubW96UmVxdWVzdEZ1bGxTY3JlZW4pIHtcbiAgICAgICAgICAoY29udGFpbmVyIHx8IGNhbnZhcykubW96UmVxdWVzdEZ1bGxTY3JlZW4oKTtcbiAgICAgICAgfSBlbHNlIGlmKChjb250YWluZXIgfHwgY2FudmFzKS53ZWJraXRSZXF1ZXN0RnVsbHNjcmVlbikge1xuICAgICAgICAgIChjb250YWluZXIgfHwgY2FudmFzKS53ZWJraXRSZXF1ZXN0RnVsbHNjcmVlbigpO1xuICAgICAgICB9IGVsc2UgaWYoKGNvbnRhaW5lciB8fCBjYW52YXMpLm1zUmVxdWVzdEZ1bGxzY3JlZW4pIHtcbiAgICAgICAgICAoY29udGFpbmVyIHx8IGNhbnZhcykubXNSZXF1ZXN0RnVsbHNjcmVlbigpO1xuICAgICAgICB9IGVsc2UgaWYoKGNvbnRhaW5lciB8fCBjYW52YXMpLm9SZXF1ZXN0RnVsbHNjcmVlbikge1xuICAgICAgICAgIChjb250YWluZXIgfHwgY2FudmFzKS5vUmVxdWVzdEZ1bGxzY3JlZW4oKTtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgaWYoZG9jdW1lbnQuZXhpdEZ1bGxzY3JlZW4pIHtcbiAgICAgICAgICBkb2N1bWVudC5leGl0RnVsbHNjcmVlbigpO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIHRoaXMuZW5hYmxlQXV0b1Jlc2l6ZUNhbnZhc0Z1bGxzY3JlZW4oY2FudmFzLCBjb250YWluZXIpO1xuXG4gICAgICBpZihjYW52YXMuZ2V0QXR0cmlidXRlKFwiZnVsbHNjcmVlbmNoYW5nZS1jYW52YXMtZXZlbnRcIikgIT0gXCJ0cnVlXCIpIHtcbiAgICAgICAgY2FudmFzLnNldEF0dHJpYnV0ZShcImZ1bGxzY3JlZW5jaGFuZ2UtY2FudmFzLWV2ZW50XCIsIFwidHJ1ZVwiKTtcblxuICAgICAgICBjb25zdCBvbmZ1bGxzY3JlZW5jaGFuZ2UgPSAoKSA9PiB7XG4gICAgICAgICAgaWYoZG9jdW1lbnQuZnVsbHNjcmVlbkVsZW1lbnQgIT0gKGNvbnRhaW5lciB8fCBjYW52YXMpKSB7XG4gICAgICAgICAgICBjYW52YXMud2lkdGggPSBpbml0aWFsV2lkdGg7XG4gICAgICAgICAgICBjYW52YXMuaGVpZ2h0ID0gaW5pdGlhbEhlaWdodDtcbiAgICAgIFxuICAgICAgICAgICAgaWYoY29udGFpbmVyKSB7XG4gICAgICAgICAgICAgIGNvbnRhaW5lci53aWR0aCA9IGluaXRpYWxXaWR0aDtcbiAgICAgICAgICAgICAgY29udGFpbmVyLmhlaWdodCA9IGluaXRpYWxIZWlnaHQ7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9O1xuICAgIFxuICAgICAgICBpZih0eXBlb2YoZG9jdW1lbnQub25mdWxsc2NyZWVuY2hhbmdlKSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGRvY3VtZW50Lm9uZnVsbHNjcmVlbmNoYW5nZSA9IG9uZnVsbHNjcmVlbmNoYW5nZTtcbiAgICAgICAgfSBlbHNlIGlmKHR5cGVvZihkb2N1bWVudC5vbm1zZnVsbHNjcmVlbmNoYW5nZSkgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBkb2N1bWVudC5vbm1zZnVsbHNjcmVlbmNoYW5nZSA9IG9uZnVsbHNjcmVlbmNoYW5nZTtcbiAgICAgICAgfSBlbHNlIGlmKHR5cGVvZihkb2N1bWVudC5vbm1vemZ1bGxzY3JlZW5jaGFuZ2UpICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgZG9jdW1lbnQub25tb3pmdWxsc2NyZWVuY2hhbmdlID0gb25mdWxsc2NyZWVuY2hhbmdlO1xuICAgICAgICB9IGVsc2UgaWYodHlwZW9mKGRvY3VtZW50Lm9ud2Via2l0ZnVsbHNjcmVlbmNoYW5nZSkgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBkb2N1bWVudC5vbndlYmtpdGZ1bGxzY3JlZW5jaGFuZ2UgPSBvbmZ1bGxzY3JlZW5jaGFuZ2U7XG4gICAgICAgIH0gZWxzZSBpZih0eXBlb2YoZG9jdW1lbnQub25va2l0ZnVsbHNjcmVlbmNoYW5nZSkgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBkb2N1bWVudC5vbm9mdWxsc2NyZWVuY2hhbmdlID0gb25mdWxsc2NyZWVuY2hhbmdlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9LFxuICB0b2dnbGVGdWxscGFnZTogZnVuY3Rpb24oY2FudmFzLCBjb250YWluZXIpIHtcbiAgICBpZihjYW52YXMpIHtcbiAgICAgIGNvbnN0IGluaXRpYWxXaWR0aCA9IGNhbnZhcy53aWR0aDtcbiAgICAgIGNvbnN0IGluaXRpYWxIZWlnaHQgPSBjYW52YXMuaGVpZ2h0O1xuXG4gICAgICBpZihjb250YWluZXIpIHtcbiAgICAgICAgY29udGFpbmVyLndpZHRoID0gaW5pdGlhbFdpZHRoO1xuICAgICAgICBjb250YWluZXIuaGVpZ2h0ID0gaW5pdGlhbEhlaWdodDtcbiAgICAgIH1cblxuICAgICAgaWYoIWNhbnZhcy5nZXRBdHRyaWJ1dGUoXCJmdWxscGFnZS1jYW52YXMtZW5hYmxlXCIpIHx8IGNhbnZhcy5nZXRBdHRyaWJ1dGUoXCJmdWxscGFnZS1jYW52YXMtZW5hYmxlXCIpID09IFwiZmFsc2VcIikge1xuICAgICAgICBjYW52YXMuc2V0QXR0cmlidXRlKFwiZnVsbHBhZ2UtY2FudmFzLWVuYWJsZVwiLCBcInRydWVcIik7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBjYW52YXMuc2V0QXR0cmlidXRlKFwiZnVsbHBhZ2UtY2FudmFzLWVuYWJsZVwiLCBcImZhbHNlXCIpO1xuICAgICAgfVxuXG4gICAgICB0aGlzLmVuYWJsZUF1dG9SZXNpemVDYW52YXNGdWxscGFnZShjYW52YXMsIGNvbnRhaW5lcik7XG4gICAgfVxuICB9LFxuICBnZXRNb3VzZVBvcyhjYW52YXMsIGV2ZW50KSB7XG4gICAgY29uc3QgcmVjdCA9IGNhbnZhcy5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcbiAgICBcbiAgICByZXR1cm4ge1xuICAgICAgeDogZXZlbnQuY2xpZW50WCAtIHJlY3QubGVmdCxcbiAgICAgIHk6IGV2ZW50LmNsaWVudFkgLSByZWN0LnRvcFxuICAgIH07XG4gIH1cbn07IiwiLypcbiAqIENvcHlyaWdodCAoQykgMjAyMCBFbGlhc3RpayAoZWxpYXN0aWtzb2Z0cy5jb20pXG4gKlxuICogVGhpcyBmaWxlIGlzIHBhcnQgb2YgXCJKU0dhbWVUb29sc1wiLlxuICpcbiAqIFwiSlNHYW1lVG9vbHNcIiBpcyBmcmVlIHNvZnR3YXJlOiB5b3UgY2FuIHJlZGlzdHJpYnV0ZSBpdCBhbmQvb3IgbW9kaWZ5XG4gKiBpdCB1bmRlciB0aGUgdGVybXMgb2YgdGhlIEdOVSBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlIGFzIHB1Ymxpc2hlZCBieVxuICogdGhlIEZyZWUgU29mdHdhcmUgRm91bmRhdGlvbiwgZWl0aGVyIHZlcnNpb24gMyBvZiB0aGUgTGljZW5zZSwgb3JcbiAqIChhdCB5b3VyIG9wdGlvbikgYW55IGxhdGVyIHZlcnNpb24uXG4gKlxuICogXCJKU0dhbWVUb29sc1wiIGlzIGRpc3RyaWJ1dGVkIGluIHRoZSBob3BlIHRoYXQgaXQgd2lsbCBiZSB1c2VmdWwsXG4gKiBidXQgV0lUSE9VVCBBTlkgV0FSUkFOVFk7IHdpdGhvdXQgZXZlbiB0aGUgaW1wbGllZCB3YXJyYW50eSBvZlxuICogTUVSQ0hBTlRBQklMSVRZIG9yIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFLiAgU2VlIHRoZVxuICogR05VIEdlbmVyYWwgUHVibGljIExpY2Vuc2UgZm9yIG1vcmUgZGV0YWlscy5cbiAqXG4gKiBZb3Ugc2hvdWxkIGhhdmUgcmVjZWl2ZWQgYSBjb3B5IG9mIHRoZSBHTlUgR2VuZXJhbCBQdWJsaWMgTGljZW5zZVxuICogYWxvbmcgd2l0aCBcIkpTR2FtZVRvb2xzXCIuICBJZiBub3QsIHNlZSA8aHR0cDovL3d3dy5nbnUub3JnL2xpY2Vuc2VzLz4uXG4gKi9cbmltcG9ydCBDb25zdGFudHMgZnJvbSBcIi4vQ29uc3RhbnRzXCI7XG5pbXBvcnQgQnV0dG9uIGZyb20gXCIuL0J1dHRvblwiO1xuaW1wb3J0IEJ1dHRvbkltYWdlIGZyb20gXCIuL0J1dHRvbkltYWdlXCI7XG5pbXBvcnQgSW1hZ2VMb2FkZXIgZnJvbSBcIi4vSW1hZ2VMb2FkZXJcIjtcbmltcG9ydCBOb3RpZmljYXRpb25NZXNzYWdlIGZyb20gXCIuL05vdGlmaWNhdGlvbk1lc3NhZ2VcIjtcbmltcG9ydCBVdGlscyBmcm9tIFwiLi9VdGlsc1wiO1xuaW1wb3J0IE1lbnUgZnJvbSBcIi4vTWVudVwiO1xuaW1wb3J0IElucHV0IGZyb20gXCIuL0lucHV0XCI7XG5pbXBvcnQgTGFiZWwgZnJvbSBcIi4vTGFiZWxcIjtcbmltcG9ydCBMaW5rIGZyb20gXCIuL0xpbmtcIjtcbmltcG9ydCBUb29sdGlwIGZyb20gXCIuL1Rvb2x0aXBcIjtcbmltcG9ydCBTY2VuZSBmcm9tIFwiLi9TY2VuZVwiO1xuaW1wb3J0IEZQU01ldGVyIGZyb20gXCIuL0ZQU01ldGVyXCI7XG5pbXBvcnQgUHJvZ3Jlc3NCYXIgZnJvbSBcIi4vUHJvZ3Jlc3NCYXJcIjtcbmltcG9ydCBDYW52YXMgZnJvbSBcIi4vQ2FudmFzXCI7XG5pbXBvcnQgQ29tcG9uZW50IGZyb20gXCIuL0NvbXBvbmVudFwiO1xuaW1wb3J0IEVhc2luZ0Z1bmN0aW9ucyBmcm9tIFwiLi9FYXNpbmdGdW5jdGlvbnNcIjtcbmltcG9ydCBDb2wgZnJvbSBcIi4vQ29sXCI7XG5pbXBvcnQgQ29udGFpbmVyIGZyb20gXCIuL0NvbnRhaW5lclwiO1xuaW1wb3J0IFJvdyBmcm9tIFwiLi9Sb3dcIjtcbmltcG9ydCBJbWFnZUNvbnRhaW5lciBmcm9tIFwiLi9JbWFnZUNvbnRhaW5lclwiO1xuaW1wb3J0IEFycm93IGZyb20gXCIuL0Fycm93XCI7XG5pbXBvcnQgQ3Jvc3MgZnJvbSBcIi4vQ3Jvc3NcIjtcbmltcG9ydCBTY3JvbGxiYXIgZnJvbSBcIi4vU2Nyb2xsYmFyXCI7XG5pbXBvcnQgU2Nyb2xsYmFyVmVydGljYWwgZnJvbSBcIi4vU2Nyb2xsYmFyVmVydGljYWxcIjtcbmltcG9ydCBTY3JvbGxiYXJIb3Jpem9udGFsIGZyb20gXCIuL1Njcm9sbGJhckhvcml6b250YWxcIjtcbmltcG9ydCBCb3ggZnJvbSBcIi4vQm94XCI7XG5pbXBvcnQgU3R5bGUgZnJvbSBcIi4vU3R5bGVcIjtcbmltcG9ydCBTZWxlY3QgZnJvbSBcIi4vU2VsZWN0XCI7XG5pbXBvcnQgU2VsZWN0T3B0aW9uIGZyb20gXCIuL1NlbGVjdE9wdGlvblwiO1xuaW1wb3J0IFNlbGVjdE9wdGlvbnNDb250YWluZXIgZnJvbSBcIi4vU2VsZWN0T3B0aW9uc0NvbnRhaW5lclwiO1xuaW1wb3J0IFRyaWFuZ2xlIGZyb20gXCIuL1RyaWFuZ2xlXCI7XG5pbXBvcnQgQ2lyY2xlIGZyb20gXCIuL0NpcmNsZVwiO1xuaW1wb3J0IFJlYWN0b3IgZnJvbSBcIi4vUmVhY3RvclwiO1xuaW1wb3J0IEV2ZW50IGZyb20gXCIuL0V2ZW50XCI7XG5pbXBvcnQgUmVhY3RvckNhbnZhcyBmcm9tIFwiLi9SZWFjdG9yQ2FudmFzXCI7XG5cbmV4cG9ydCB7IENvbnN0YW50cywgQnV0dG9uLCBCdXR0b25JbWFnZSwgSW1hZ2VMb2FkZXIsIE5vdGlmaWNhdGlvbk1lc3NhZ2UsIFV0aWxzLCBNZW51LCBJbnB1dCwgTGFiZWwsIExpbmssIFRvb2x0aXAsIFNjZW5lLCBGUFNNZXRlciwgUHJvZ3Jlc3NCYXIsIENhbnZhcywgQ29tcG9uZW50LCBFYXNpbmdGdW5jdGlvbnMsIENvbCwgQ29udGFpbmVyLCBSb3csIEltYWdlQ29udGFpbmVyLCBBcnJvdywgQ3Jvc3MsIFNjcm9sbGJhciwgU2Nyb2xsYmFyVmVydGljYWwsIFNjcm9sbGJhckhvcml6b250YWwsIEJveCwgU3R5bGUsIFNlbGVjdCwgU2VsZWN0T3B0aW9uLCBTZWxlY3RPcHRpb25zQ29udGFpbmVyLCBUcmlhbmdsZSwgQ2lyY2xlLCBSZWFjdG9yLCBFdmVudCwgUmVhY3RvckNhbnZhcyB9OyJdLCJzb3VyY2VSb290IjoiIn0=