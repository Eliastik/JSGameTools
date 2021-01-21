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
            component.enable();
            component.draw(ctx);
          } else {
            component.disable();
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
        if (!_Constants__WEBPACK_IMPORTED_MODULE_13__["default"].Setting.DISABLE_EXPERIMENTAL_OPTIMIZATIONS && this.parent && this.parent.isComponentVisible && !this.parent.isComponentVisible(component)) {
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
      _babel_runtime_helpers_set__WEBPACK_IMPORTED_MODULE_3___default()(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_7___default()(Container.prototype), "canvas", canvas, this, true);

      _babel_runtime_helpers_classPrivateFieldGet__WEBPACK_IMPORTED_MODULE_9___default()(this, _components).forEach(function (component) {
        component.canvas = canvas;
      });
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
      var parent = this.canvas && this.canvas.scene || this.canvas || ctx && ctx.canvas;

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
      return this.sizesCache && this.sizesCache.value;
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
        console.log("ok", this);
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
        "fontSize": _Constants__WEBPACK_IMPORTED_MODULE_8__["default"].Setting.FONT_SIZE,
        "fontFamily": _Constants__WEBPACK_IMPORTED_MODULE_8__["default"].Setting.FONT_FAMILY,
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
            component.enable();
            component.draw(ctx);
          } else {
            component.disable();
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
      var _this3 = this;

      if (this.hidden) return;

      _babel_runtime_helpers_get__WEBPACK_IMPORTED_MODULE_3___default()(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6___default()(Scene.prototype), "draw", this).call(this, context);

      var canvas = context.canvas;
      var ctx = canvas.getContext("2d");
      ctx.save();
      canvas.style.cursor = "default";
      var ctxTemp = ctx;
      if (this.maxWidth || this.maxHeight) ctxTemp = this.canvasTmp.getContext("2d");

      var inputs = _babel_runtime_helpers_get__WEBPACK_IMPORTED_MODULE_3___default()(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6___default()(Scene.prototype), "components", this).filter(function (component) {
        return component && component instanceof _Input__WEBPACK_IMPORTED_MODULE_8__["default"];
      });

      inputs && inputs.forEach(function (input) {
        return input.canvas = _this3.canvas;
      }); // Set inputs canvas

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
/* harmony import */ var _babel_runtime_helpers_get__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/get */ "./node_modules/@babel/runtime/helpers/get.js");
/* harmony import */ var _babel_runtime_helpers_get__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_get__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/inherits */ "./node_modules/@babel/runtime/helpers/inherits.js");
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _babel_runtime_helpers_classPrivateFieldGet__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @babel/runtime/helpers/classPrivateFieldGet */ "./node_modules/@babel/runtime/helpers/classPrivateFieldGet.js");
/* harmony import */ var _babel_runtime_helpers_classPrivateFieldGet__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classPrivateFieldGet__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _babel_runtime_helpers_classPrivateFieldSet__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @babel/runtime/helpers/classPrivateFieldSet */ "./node_modules/@babel/runtime/helpers/classPrivateFieldSet.js");
/* harmony import */ var _babel_runtime_helpers_classPrivateFieldSet__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classPrivateFieldSet__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _Label__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./Label */ "./src/Label.js");
/* harmony import */ var _Button__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./Button */ "./src/Button.js");
/* harmony import */ var _Triangle__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./Triangle */ "./src/Triangle.js");
/* harmony import */ var _Style__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./Style */ "./src/Style.js");
/* harmony import */ var _Constants__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./Constants */ "./src/Constants.js");











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






var _width = new WeakMap();

var Select = /*#__PURE__*/function (_Button) {
  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5___default()(Select, _Button);

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
    _this.label = new _Label__WEBPACK_IMPORTED_MODULE_10__["default"]("", x, y, style);

    _this.label.style.setAll({
      "alignement": _Constants__WEBPACK_IMPORTED_MODULE_14__["default"].Alignement.LEFT,
      "verticalAlignement": _Constants__WEBPACK_IMPORTED_MODULE_14__["default"].VerticalAlignement.CENTER
    });

    _this.triangle = new _Triangle__WEBPACK_IMPORTED_MODULE_12__["default"](null, null, 8, 8, style);

    _this.triangle.style.setAll({
      "alignement": _Constants__WEBPACK_IMPORTED_MODULE_14__["default"].Alignement.RIGHT,
      "verticalAlignement": _Constants__WEBPACK_IMPORTED_MODULE_14__["default"].VerticalAlignement.CENTER
    });

    _this.addAll(_this.label, _this.triangle);

    _this.addClickAction(function () {
      if (_this.optionContainer) {
        _this.optionContainer.hidden = false;
      }
    });

    if (!_Constants__WEBPACK_IMPORTED_MODULE_14__["default"].Setting.DISABLE_EXPERIMENTAL_OPTIMIZATIONS) {
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

      _babel_runtime_helpers_get__WEBPACK_IMPORTED_MODULE_4___default()(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_7___default()(Select.prototype), "draw", this).call(this, context);

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

      _babel_runtime_helpers_classPrivateFieldSet__WEBPACK_IMPORTED_MODULE_9___default()(this, _width, maxWidth + this.style.padding + this.triangle.width + 15);
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
      if (_Constants__WEBPACK_IMPORTED_MODULE_14__["default"].Setting.DISABLE_EXPERIMENTAL_OPTIMIZATIONS) this.updateWidth();
      return _babel_runtime_helpers_classPrivateFieldGet__WEBPACK_IMPORTED_MODULE_8___default()(this, _width);
    }
  }, {
    key: "allComponents",
    get: function get() {
      var components = [];
      components.push.apply(components, _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0___default()(_babel_runtime_helpers_get__WEBPACK_IMPORTED_MODULE_4___default()(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_7___default()(Select.prototype), "allComponents", this)));
      return components;
    }
  }, {
    key: "defaultStyle",
    get: function get() {
      return new _Style__WEBPACK_IMPORTED_MODULE_13__["default"]({
        "backgroundColor": _Constants__WEBPACK_IMPORTED_MODULE_14__["default"].Setting.SELECT_DEFAULT_BACKGROUND,
        "backgroundColorHover": _Constants__WEBPACK_IMPORTED_MODULE_14__["default"].Setting.SELECT_DEFAULT_HOVER_BACKGROUND,
        "backgroundColorDown": _Constants__WEBPACK_IMPORTED_MODULE_14__["default"].Setting.SELECT_DEFAULT_CLICK_BACKGROUND,
        "padding": _Constants__WEBPACK_IMPORTED_MODULE_14__["default"].Setting.DEFAULT_PADDING
      });
    }
  }]);

  return Select;
}(_Button__WEBPACK_IMPORTED_MODULE_11__["default"]);



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
/* harmony import */ var _babel_runtime_helpers_classPrivateFieldGet__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @babel/runtime/helpers/classPrivateFieldGet */ "./node_modules/@babel/runtime/helpers/classPrivateFieldGet.js");
/* harmony import */ var _babel_runtime_helpers_classPrivateFieldGet__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classPrivateFieldGet__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _babel_runtime_helpers_classPrivateFieldSet__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @babel/runtime/helpers/classPrivateFieldSet */ "./node_modules/@babel/runtime/helpers/classPrivateFieldSet.js");
/* harmony import */ var _babel_runtime_helpers_classPrivateFieldSet__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classPrivateFieldSet__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _Col__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./Col */ "./src/Col.js");
/* harmony import */ var _Style__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./Style */ "./src/Style.js");
/* harmony import */ var _Constants__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./Constants */ "./src/Constants.js");











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

    _babel_runtime_helpers_classPrivateFieldSet__WEBPACK_IMPORTED_MODULE_9___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2___default()(_this), _selectedOption, 0);

    _this.select = null;
    return _this;
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(SelectDropdown, [{
    key: "draw",
    value: function draw(context) {
      _babel_runtime_helpers_get__WEBPACK_IMPORTED_MODULE_4___default()(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_7___default()(SelectDropdown.prototype), "draw", this).call(this, context);

      if (this.selected && this.selected) {
        this.select.selected = true;
      }
    }
  }, {
    key: "add",
    value: function add(component) {
      var _this2 = this;

      _babel_runtime_helpers_get__WEBPACK_IMPORTED_MODULE_4___default()(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_7___default()(SelectDropdown.prototype), "add", this).call(this, component);

      component.addClickAction(function () {
        _babel_runtime_helpers_classPrivateFieldSet__WEBPACK_IMPORTED_MODULE_9___default()(_this2, _selectedOption, _this2.getComponentId(component));

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
      return Math.max(0, Math.min(this.components.length - 1, _babel_runtime_helpers_classPrivateFieldGet__WEBPACK_IMPORTED_MODULE_8___default()(this, _selectedOption)));
    },
    set: function set(id) {
      if (id != _babel_runtime_helpers_classPrivateFieldGet__WEBPACK_IMPORTED_MODULE_8___default()(this, _selectedOption)) {
        _babel_runtime_helpers_classPrivateFieldSet__WEBPACK_IMPORTED_MODULE_9___default()(this, _selectedOption, id);

        this.reactor.dispatchEvent("onChange", this);
      }
    }
  }, {
    key: "defaultStyle",
    get: function get() {
      return new _Style__WEBPACK_IMPORTED_MODULE_11__["default"]({
        "padding": 0,
        "spaceBetweenComponents": 0,
        "backgroundColor": _Constants__WEBPACK_IMPORTED_MODULE_12__["default"].Setting.SELECT_DEFAULT_BACKGROUND,
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
  }, {
    key: "selected",
    get: function get() {
      return _babel_runtime_helpers_get__WEBPACK_IMPORTED_MODULE_4___default()(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_7___default()(SelectDropdown.prototype), "selected", this) || this.select && this.select.selected;
    },
    set: function set(selected) {
      _babel_runtime_helpers_set__WEBPACK_IMPORTED_MODULE_3___default()(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_7___default()(SelectDropdown.prototype), "selected", selected, this, true);
    }
  }]);

  return SelectDropdown;
}(_Col__WEBPACK_IMPORTED_MODULE_10__["default"]);



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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9KU0dhbWVUb29scy93ZWJwYWNrL3VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24iLCJ3ZWJwYWNrOi8vSlNHYW1lVG9vbHMvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vSlNHYW1lVG9vbHMvLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9hcnJheUxpa2VUb0FycmF5LmpzIiwid2VicGFjazovL0pTR2FtZVRvb2xzLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvYXJyYXlXaXRob3V0SG9sZXMuanMiLCJ3ZWJwYWNrOi8vSlNHYW1lVG9vbHMvLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQuanMiLCJ3ZWJwYWNrOi8vSlNHYW1lVG9vbHMvLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9jbGFzc0NhbGxDaGVjay5qcyIsIndlYnBhY2s6Ly9KU0dhbWVUb29scy8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2NsYXNzUHJpdmF0ZUZpZWxkR2V0LmpzIiwid2VicGFjazovL0pTR2FtZVRvb2xzLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvY2xhc3NQcml2YXRlRmllbGRTZXQuanMiLCJ3ZWJwYWNrOi8vSlNHYW1lVG9vbHMvLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9jb25zdHJ1Y3QuanMiLCJ3ZWJwYWNrOi8vSlNHYW1lVG9vbHMvLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9jcmVhdGVDbGFzcy5qcyIsIndlYnBhY2s6Ly9KU0dhbWVUb29scy8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2RlZmluZVByb3BlcnR5LmpzIiwid2VicGFjazovL0pTR2FtZVRvb2xzLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZ2V0LmpzIiwid2VicGFjazovL0pTR2FtZVRvb2xzLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZ2V0UHJvdG90eXBlT2YuanMiLCJ3ZWJwYWNrOi8vSlNHYW1lVG9vbHMvLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9pbmhlcml0cy5qcyIsIndlYnBhY2s6Ly9KU0dhbWVUb29scy8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2lzTmF0aXZlUmVmbGVjdENvbnN0cnVjdC5qcyIsIndlYnBhY2s6Ly9KU0dhbWVUb29scy8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2l0ZXJhYmxlVG9BcnJheS5qcyIsIndlYnBhY2s6Ly9KU0dhbWVUb29scy8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL25vbkl0ZXJhYmxlU3ByZWFkLmpzIiwid2VicGFjazovL0pTR2FtZVRvb2xzLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvcG9zc2libGVDb25zdHJ1Y3RvclJldHVybi5qcyIsIndlYnBhY2s6Ly9KU0dhbWVUb29scy8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL3NldC5qcyIsIndlYnBhY2s6Ly9KU0dhbWVUb29scy8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL3NldFByb3RvdHlwZU9mLmpzIiwid2VicGFjazovL0pTR2FtZVRvb2xzLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvc3VwZXJQcm9wQmFzZS5qcyIsIndlYnBhY2s6Ly9KU0dhbWVUb29scy8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL3RvQ29uc3VtYWJsZUFycmF5LmpzIiwid2VicGFjazovL0pTR2FtZVRvb2xzLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvdHlwZW9mLmpzIiwid2VicGFjazovL0pTR2FtZVRvb2xzLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvdW5zdXBwb3J0ZWRJdGVyYWJsZVRvQXJyYXkuanMiLCJ3ZWJwYWNrOi8vSlNHYW1lVG9vbHMvLi9zcmMvQXJyb3cuanMiLCJ3ZWJwYWNrOi8vSlNHYW1lVG9vbHMvLi9zcmMvQm94LmpzIiwid2VicGFjazovL0pTR2FtZVRvb2xzLy4vc3JjL0J1dHRvbi5qcyIsIndlYnBhY2s6Ly9KU0dhbWVUb29scy8uL3NyYy9CdXR0b25JbWFnZS5qcyIsIndlYnBhY2s6Ly9KU0dhbWVUb29scy8uL3NyYy9DYW52YXMuanMiLCJ3ZWJwYWNrOi8vSlNHYW1lVG9vbHMvLi9zcmMvQ2lyY2xlLmpzIiwid2VicGFjazovL0pTR2FtZVRvb2xzLy4vc3JjL0NvbC5qcyIsIndlYnBhY2s6Ly9KU0dhbWVUb29scy8uL3NyYy9Db21wb25lbnQuanMiLCJ3ZWJwYWNrOi8vSlNHYW1lVG9vbHMvLi9zcmMvQ29uc3RhbnRzLmpzIiwid2VicGFjazovL0pTR2FtZVRvb2xzLy4vc3JjL0NvbnRhaW5lci5qcyIsIndlYnBhY2s6Ly9KU0dhbWVUb29scy8uL3NyYy9Dcm9zcy5qcyIsIndlYnBhY2s6Ly9KU0dhbWVUb29scy8uL3NyYy9FYXNpbmdGdW5jdGlvbnMuanMiLCJ3ZWJwYWNrOi8vSlNHYW1lVG9vbHMvLi9zcmMvRXZlbnQuanMiLCJ3ZWJwYWNrOi8vSlNHYW1lVG9vbHMvLi9zcmMvRlBTTWV0ZXIuanMiLCJ3ZWJwYWNrOi8vSlNHYW1lVG9vbHMvLi9zcmMvSW1hZ2VDb250YWluZXIuanMiLCJ3ZWJwYWNrOi8vSlNHYW1lVG9vbHMvLi9zcmMvSW1hZ2VMb2FkZXIuanMiLCJ3ZWJwYWNrOi8vSlNHYW1lVG9vbHMvLi9zcmMvSW5wdXQuanMiLCJ3ZWJwYWNrOi8vSlNHYW1lVG9vbHMvLi9zcmMvTGFiZWwuanMiLCJ3ZWJwYWNrOi8vSlNHYW1lVG9vbHMvLi9zcmMvTGluay5qcyIsIndlYnBhY2s6Ly9KU0dhbWVUb29scy8uL3NyYy9NZW51LmpzIiwid2VicGFjazovL0pTR2FtZVRvb2xzLy4vc3JjL05vdGlmaWNhdGlvbk1lc3NhZ2UuanMiLCJ3ZWJwYWNrOi8vSlNHYW1lVG9vbHMvLi9zcmMvUHJvZ3Jlc3NCYXIuanMiLCJ3ZWJwYWNrOi8vSlNHYW1lVG9vbHMvLi9zcmMvUmVhY3Rvci5qcyIsIndlYnBhY2s6Ly9KU0dhbWVUb29scy8uL3NyYy9SZWFjdG9yQ2FudmFzLmpzIiwid2VicGFjazovL0pTR2FtZVRvb2xzLy4vc3JjL1Jvdy5qcyIsIndlYnBhY2s6Ly9KU0dhbWVUb29scy8uL3NyYy9TY2VuZS5qcyIsIndlYnBhY2s6Ly9KU0dhbWVUb29scy8uL3NyYy9TY3JvbGxiYXIuanMiLCJ3ZWJwYWNrOi8vSlNHYW1lVG9vbHMvLi9zcmMvU2Nyb2xsYmFySG9yaXpvbnRhbC5qcyIsIndlYnBhY2s6Ly9KU0dhbWVUb29scy8uL3NyYy9TY3JvbGxiYXJWZXJ0aWNhbC5qcyIsIndlYnBhY2s6Ly9KU0dhbWVUb29scy8uL3NyYy9TZWxlY3QuanMiLCJ3ZWJwYWNrOi8vSlNHYW1lVG9vbHMvLi9zcmMvU2VsZWN0T3B0aW9uLmpzIiwid2VicGFjazovL0pTR2FtZVRvb2xzLy4vc3JjL1NlbGVjdE9wdGlvbnNDb250YWluZXIuanMiLCJ3ZWJwYWNrOi8vSlNHYW1lVG9vbHMvLi9zcmMvU3R5bGUuanMiLCJ3ZWJwYWNrOi8vSlNHYW1lVG9vbHMvLi9zcmMvVG9vbHRpcC5qcyIsIndlYnBhY2s6Ly9KU0dhbWVUb29scy8uL3NyYy9UcmlhbmdsZS5qcyIsIndlYnBhY2s6Ly9KU0dhbWVUb29scy8uL3NyYy9VdGlscy5qcyIsIndlYnBhY2s6Ly9KU0dhbWVUb29scy8uL3NyYy9pbmRleC5qcyJdLCJuYW1lcyI6WyJBcnJvdyIsIngiLCJ5IiwidG9YIiwidG9ZIiwic3R5bGUiLCJjb250ZXh0IiwiaGlkZGVuIiwiY2FudmFzIiwiY3R4IiwiZ2V0Q29udGV4dCIsIlV0aWxzIiwiZHJhd0Fycm93IiwibGluZVdpZHRoIiwiaGVhZFNpemUiLCJjb2xvciIsImxpbmVDYXAiLCJpbml0IiwiTWF0aCIsImFicyIsIlN0eWxlIiwiQ29uc3RhbnRzIiwiU2V0dGluZyIsIkFSUk9XX0RFRkFVTFRfTElORV9TSVpFIiwiQVJST1dfREVGQVVMVF9IRUFEX1NJWkUiLCJBUlJPV19ERUZBVUxUX0NPTE9SIiwiQVJST1dfREVGQVVMVF9MSU5FX0NBUCIsIkNvbXBvbmVudCIsIkJveCIsIndpZHRoIiwiaGVpZ2h0Iiwic2F2ZSIsImRyYXdCYWNrZ3JvdW5kIiwiZHJhd0JvcmRlciIsInJlc3RvcmUiLCJiYWNrZ3JvdW5kQ29sb3IiLCJmaWxsU3R5bGUiLCJmaWxsUmVjdCIsInJvdW5kIiwiYm9yZGVyQ29sb3IiLCJib3JkZXJTaXplIiwic3Ryb2tlU3R5bGUiLCJzdHJva2VSZWN0IiwiaG92ZXJlZCIsImNsaWNrZWQiLCJiYWNrZ3JvdW5kQ29sb3JEb3duIiwiYmFja2dyb3VuZENvbG9ySG92ZXIiLCJib3JkZXJDb2xvckRvd24iLCJib3JkZXJDb2xvckhvdmVyIiwic2VsZWN0YWJsZSIsInNlbGVjdGVkIiwiYm9yZGVyQ29sb3JTZWxlY3RlZCIsIkJ1dHRvbiIsIm1heFdpZHRoIiwibWF4SGVpZ2h0IiwiY29tcG9uZW50cyIsImRyYXdDb21wb25lbnRzIiwicGFkZGluZyIsIkJVVFRPTl9ERUZBVUxUX0JBQ0tHUk9VTkQiLCJCVVRUT05fREVGQVVMVF9IT1ZFUl9CQUNLR1JPVU5EIiwiQlVUVE9OX0RFRkFVTFRfQ0xJQ0tfQkFDS0dST1VORCIsIlJvdyIsIkJ1dHRvbkltYWdlIiwiaW1nU3JjIiwiYWxpZ25lbWVudCIsInZlcnRpY2FsQWxpZ25lbWVudCIsImltYWdlTG9hZGVyIiwiaW1hZ2UiLCJJbWFnZUNvbnRhaW5lciIsImFkZCIsImNvbnNvbGUiLCJ3YXJuIiwiU3RyaW5nIiwiTk9USUNFX01FU1NBR0UiLCJCVVRUT05fSU1BR0VfREVQUkVDQVRFRCIsImxvYWRJbWFnZSIsIm1pbldpZHRoIiwibWluSGVpZ2h0IiwiQ2FudmFzIiwic2NlbmUiLCJhdXRvUmVzaXplIiwibWF4RlBTIiwiZG9jdW1lbnQiLCJjcmVhdGVFbGVtZW50IiwiY29udGFpbmVyIiwiQ0FOVkFTX1dJRFRIIiwiQ0FOVkFTX0hFSUdIVCIsImFwcGVuZENoaWxkIiwic3RhcnRlZCIsImhhc0Vycm9yIiwiZnVsbHNjcmVlbiIsImZ1bGxwYWdlIiwiYnV0dG9uU2NlbmVFcnJvciIsIkJVVFRPTl9ERUZBVUxUX0FMVEVSTkFUSVZFX0JBQ0tHUk9VTkQiLCJMYWJlbCIsIlJFVFJZIiwibWVudVNjZW5lRXJyb3IiLCJNZW51IiwiRVJST1JfTUVTU0FHRV9DQU5WQVNfTEFCRUwiLCJlbmFibGUiLCJzY2VuZUVycm9yIiwiU2NlbmUiLCJzY2VuZVByZXZpb3VzIiwiYWRkQ2xpY2tBY3Rpb24iLCJyZWFjdG9yIiwiUmVhY3RvckNhbnZhcyIsInJlZ2lzdGVyRXZlbnQiLCJjcmVhdGVFdmVudHMiLCJESVNBQkxFX09QVElNSVpBVElPTlMiLCJpbmZvIiwiT1BUSU1JWkFUSU9OX0RJU0FCTEVEIiwiRElTQUJMRV9DT05UQUlORVJTX0NVVFRJTkciLCJDT05UQUlORVJfQ1VUVElOR19ESVNBQkxFRCIsImRyYXdDbGVhciIsImRyYXdTY2VuZSIsInBhcmVudCIsInNjYWxlIiwiUElYRUxfUkFUSU8iLCJkcmF3IiwiZSIsImVycm9yIiwiRVJST1JfTUVTU0FHRSIsIkVSUk9SX01FU1NBR0VfQ0FOVkFTIiwiY2xlYXIiLCJmdW5jIiwicmVxdWVzdEFuaW1hdGlvbkZyYW1lIiwidGltZSIsIm9mZnNldEZyYW1lIiwiZnVsbHNjcmVlbkVsZW1lbnQiLCJFTkFCTEVfUElYRUxfUkFUSU9fUkVTSVpJTkciLCJ3aW5kb3ciLCJkZXZpY2VQaXhlbFJhdGlvIiwiYXV0b0RQSSIsInN0YXJ0RHJhdyIsImVsZW1lbnQiLCJyZW1vdmVDaGlsZCIsInRvZ2dsZUZ1bGxzY3JlZW4iLCJ0b2dnbGVGdWxscGFnZSIsImVuYWJsZUF1dG9SZXNpemVDYW52YXMiLCJmb3JFYWNoIiwiZXZlbnROYW1lIiwiYWRkRXZlbnRMaXN0ZW5lciIsImV2ZW50IiwibW91c2VQb3NpdGlvbiIsImdldE1vdXNlUG9zIiwiZG9FdmVudHMiLCJwcmV2ZW50RGVmYXVsdCIsImNoYW5nZWRUb3VjaGVzIiwicG9zaXRpb24iLCJnZXRDb21wb25lbnRzQXRQb3NpdGlvbiIsImRpc3BhdGNoRXZlbnQiLCJyZXZlcnNlIiwiY29tcG9uZW50IiwiZGlzcGF0Y2hFdmVudENvbXBvbmVudCIsImNhbGxiYWNrIiwic3RhcnQiLCJnZXRBbGxDb21wb25lbnRzIiwiYWxsQ29tcG9uZW50cyIsImdldENvbXBvbmVudHNUcmVlIiwicmVzdWx0IiwiY2hpbGRzIiwic29ydCIsInNvcnRDb21wb25lbnRzVHJlZSIsInNvbWUiLCJjaGlsZCIsImlzSW5zaWRlIiwiZGlzYWJsZWQiLCJwdXNoIiwiZ2V0Q2FudmFzV2lkdGgiLCJnZXRDYW52YXNIZWlnaHQiLCJDaXJjbGUiLCJkcmF3Q2lyY2xlIiwiZmlsbCIsImZpbGxDb2xvciIsIkNJUkNMRV9ERUZBVUxUX0xJTkVfU0laRSIsIkNJUkNMRV9ERUZBVUxUX0NPTE9SIiwiQ0lSQ0xFX0RFRkFVTFRfRklMTCIsIkNJUkNMRV9ERUZBVUxUX0xJTkVfQ0FQIiwiQ0lSQ0xFX0RFRkFVTFRfRklMTF9DT0xPUiIsIkNvbCIsIkRJU0FCTEVfRVhQRVJJTUVOVEFMX09QVElNSVpBVElPTlMiLCJ1cGRhdGVJbm5lcldpZHRoIiwidXBkYXRlSW5uZXJIZWlnaHQiLCJhZGRDaGFuZ2VBY3Rpb24iLCJjdHhUZW1wIiwiaXNDdXR0aW5nIiwiY2FudmFzVG1wIiwiY3VycmVudFkiLCJkcmF3Q29tcG9uZW50IiwiZHJhd0ltYWdlRGF0YSIsIm9mZnNldFNjcm9sbFgiLCJvZmZzZXRTY3JvbGxZIiwiaXNDb21wb25lbnRWaXNpYmxlIiwiZGlzYWJsZSIsInNwYWNlQmV0d2VlbkNvbXBvbmVudHMiLCJ0b3RhbEhlaWdodCIsImxlbmd0aCIsImlubmVyV2lkdGgiLCJtaW4iLCJtYXgiLCJpbm5lckhlaWdodCIsIkNvbnRhaW5lciIsIlJlYWN0b3IiLCJoYXNJbml0RXZlbnRzIiwib2Zmc2V0TW92ZVgiLCJvZmZzZXRNb3ZlWSIsIm1vdmVFdmVudFN0YXJ0WCIsIm1vdmVFdmVudFN0YXJ0WSIsInRvdWNoRXZlbnRTdGFydFgiLCJ0b3VjaEV2ZW50U3RhcnRZIiwidG91Y2hFdmVudFN0YXJ0VGltZXN0YW1wIiwidG9vbHRpcCIsImluaXRFdmVudHMiLCJkZWx0YVgiLCJtb3ZlbWVudFgiLCJkZWx0YVkiLCJtb3ZlbWVudFkiLCJzY3JvbGxEaXNhYmxlZCIsInRvdWNoU2Nyb2xsRXZlbnQiLCJ0b3VjaFN0YXJ0RW5kRXZlbnQiLCJ0aW1lc3RhbXAiLCJwb3MiLCJ0cmlnZ2VyIiwicmVtb3ZlQWxsQ2xpY2tBY3Rpb25zIiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsInJlbW92ZUFsbEV2ZW50TGlzdGVuZXIiLCJyZW1vdmVBbGxIb3ZlckFjdGlvbnMiLCJhZGRIb3ZlckFjdGlvbiIsInJlbW92ZUFsbERvd25BY3Rpb25zIiwiYWRkRG93bkFjdGlvbiIsInJlbW92ZUFsbFNjcm9sbEFjdGlvbnMiLCJhZGRTY3JvbGxBY3Rpb24iLCJyZW1vdmVBbGxNb3ZlQWN0aW9ucyIsImFkZE1vdmVBY3Rpb24iLCJyZW1vdmVBbGxDaGFuZ2VBY3Rpb25zIiwicmVtb3ZlQWxsVXBBY3Rpb25zIiwiYWRkVXBBY3Rpb24iLCJyZXMiLCJvdGhlckNvbXBvbmVudCIsImlzRm9yZWdyb3VuZCIsImZvcmVncm91bmQiLCJvdGhlcklzRm9yZWdyb3VuZCIsInpJbmRleCIsIm90aGVyekluZGV4IiwiY29tcGFyZVRvQ29tcG9uZW50IiwicGFyZW50V2lkdGgiLCJwYXJlbnRQYWRkaW5nIiwiQWxpZ25lbWVudCIsIkNFTlRFUiIsIlJJR0hUIiwiTEVGVCIsInBhcmVudEhlaWdodCIsIlZlcnRpY2FsQWxpZ25lbWVudCIsIkJPVFRPTSIsIlRPUCIsIkRFRkFVTFRfUEFERElORyIsIkRFRkFVTFRfU1BBQ0lORyIsImRlZmF1bHRTdHlsZSIsInNldEFsbCIsImdldFN0eWxlcyIsInNldCIsIm90aGVyIiwiY29tcGFyZVRvIiwiRk9OVF9GQU1JTFkiLCJGT05UX1NJWkUiLCJJTlBVVF9ERUZBVUxUX0ZPTlRfQ09MT1IiLCJJTlBVVF9ERUZBVUxUX0JBQ0tHUk9VTkRfQ09MT1IiLCJJTlBVVF9ERUZBVUxUX0JPUkRFUl9DT0xPUiIsIklOUFVUX0RFRkFVTFRfQk9SREVSX0NPTE9SX1NFTEVDVEVEIiwiSU5QVVRfREVGQVVMVF9TRUxFQ1RfQ09MT1IiLCJMQUJFTF9ERUZBVUxUX0ZPTlRfQ09MT1IiLCJMSU5LX0RFRkFVTFRfQ09MT1IiLCJMSU5LX0RFRkFVTFRfSE9WRVJfQ09MT1IiLCJMSU5LX0RFRkFVTFRfQ0xJQ0tfQ09MT1IiLCJNRU5VX0RFRkFVTFRfQkFDS0dST1VORCIsIk1FTlVfREVGQVVMVF9CTFVSX0JBQ0tHUk9VTkQiLCJOT1RJRklDQVRJT05fREVGQVVMVF9CQUNLR1JPVU5EIiwiTk9USUZJQ0FUSU9OX0RFRkFVTFRfQU5JTUFUSU9OX0RVUkFUSU9OIiwiUFJPR1JFU1NfREVGQVVMVF9CQUNLR1JPVU5EIiwiUFJPR1JFU1NfREVGQVVMVF9GT1JFR1JPVU5EIiwiUFJPR1JFU1NfREVGQVVMVF9BTklNQVRJT05fRFVSQVRJT04iLCJUT09MVElQX0RFRkFVTFRfQkFDS0dST1VORCIsIkNST1NTX0RFRkFVTFRfTElORV9DQVAiLCJDUk9TU19ERUZBVUxUX0NPTE9SIiwiQ1JPU1NfREVGQVVMVF9MSU5FX1NJWkUiLCJTQ1JPTExCQVJfREVGQVVMVF9CQUNLR1JPVU5EIiwiU0NST0xMQkFSX0RFRkFVTFRfSE9WRVJfQkFDS0dST1VORCIsIlNDUk9MTEJBUl9ERUZBVUxUX0NMSUNLX0JBQ0tHUk9VTkQiLCJTQ1JPTExCQVJfREVGQVVMVF9TSVpFIiwiREVGQVVMVF9CT1JERVJfU0laRSIsIkRFRkFVTFRfQk9SREVSX0NPTE9SX1NFTEVDVEVEIiwiREVGQVVMVF9BTklNQVRJT05fRFVSQVRJT04iLCJUUklBTkdMRV9ERUZBVUxUX0xJTkVfQ0FQIiwiVFJJQU5HTEVfREVGQVVMVF9DT0xPUiIsIlRSSUFOR0xFX0RFRkFVTFRfRklMTF9DT0xPUiIsIlRSSUFOR0xFX0RFRkFVTFRfTElORV9TSVpFIiwiVFJJQU5HTEVfREVGQVVMVF9GSUxMIiwiU0VMRUNUX0RFRkFVTFRfQkFDS0dST1VORCIsIlNFTEVDVF9ERUZBVUxUX0hPVkVSX0JBQ0tHUk9VTkQiLCJTRUxFQ1RfREVGQVVMVF9DTElDS19CQUNLR1JPVU5EIiwiS2V5IiwiVVAiLCJFTlRFUiIsIkVDSEFQIiwiVEFCIiwiREVGQVVMVCIsIldBUk5JTkdfTUVTU0FHRSIsIklOUFVUX0ZVTExTQ1JFRU4iLCJhZGRBbGwiLCJzY3JvbGxiYXJIb3Jpem9udGFsIiwiU2Nyb2xsYmFySG9yaXpvbnRhbCIsInNjcm9sbGJhclZlcnRpY2FsIiwiU2Nyb2xsYmFyVmVydGljYWwiLCJjb250cm9sU2Nyb2xsaW5nIiwiY29tcG9uZW50Q2hhbmdlZCIsInNjcm9sbFhEaXNhYmxlZCIsImRyYXdIb3Jpem9udGFsU2Nyb2xsQmFyIiwic2Nyb2xsWURpc2FibGVkIiwiZHJhd1ZlcnRpY2FsU2Nyb2xsQmFyIiwiZXZlbnRDaGFuZ2VDYWxsYmFjayIsImluZGV4T2YiLCJyZW1vdmVDaGFuZ2VBY3Rpb24iLCJmaWx0ZXIiLCJjdXJyZW50IiwicmVtb3ZlIiwiY2hhbmdlZCIsImMiLCJpIiwic2Nyb2xsQXJlYVNpemVZIiwicGVyY2VudFNjcm9sbGJhclkiLCJzY3JvbGxBcmVhU2l6ZVgiLCJwZXJjZW50U2Nyb2xsYmFyWCIsImNvbXBvbmVudFdpZHRoIiwiY29tcG9uZW50SGVpZ2h0IiwiY2FudmFzV2lkdGgiLCJjYW52YXNIZWlnaHQiLCJDcm9zcyIsImRyYXdDcm9zcyIsImVhc2VJbkN1YmljIiwiZWFzZU91dEJvdW5jZSIsIm4xIiwiZDEiLCJlYXNlSW5PdXRDdWJpYyIsInBvdyIsImVhc2VJbk91dFNpbmUiLCJjb3MiLCJQSSIsImVhc2VJbk91dFF1aW50IiwiZWFzZUluT3V0Q2lyYyIsInNxcnQiLCJlYXNlSW5PdXRRdWFkIiwiZWFzZUluT3V0UXVhcnQiLCJlYXNlSW5PdXRFeHBvIiwiZWFzZUluT3V0QmFjayIsImMxIiwiYzIiLCJFdmVudCIsIm5hbWUiLCJjYWxsYmFja3MiLCJGUFNNZXRlciIsImRpc3BsYXlGcmFtZXMiLCJmcmFtZXMiLCJsYXN0RnJhbWUiLCJjdXJyZW50RlBTIiwiaW50ZXJ2YWxDb3VudEZQUyIsInNldEludGVydmFsIiwiY291bnRGUFMiLCJ0ZXh0IiwiSW1hZ2UiLCJzcmMiLCJkcmF3SW1hZ2UiLCJnZXQiLCJpbWdXaWR0aCIsImltZ0hlaWdodCIsImFzcGVjdFJhdGlvIiwiZmxvb3IiLCJzaXplcyIsIkltYWdlTG9hZGVyIiwiaW1hZ2VzIiwiaW1hZ2VzUmVzaXplZCIsInRyaWVkTG9hZGluZyIsIm5iSW1hZ2VzVG9Mb2FkIiwiZmlyc3RJbWFnZSIsImltZyIsInNoaWZ0IiwibG9hZCIsIm9ubG9hZCIsIm9uZXJyb3IiLCJzZXRUaW1lb3V0IiwiaGFzT3duUHJvcGVydHkiLCJ3IiwiaCIsImlkIiwiSW5wdXQiLCJkZWZhdWx0VGV4dCIsImxhc3RJbnB1dFRleHQiLCJvZmZzZXRYIiwibGFzdFRpbWUiLCJ0b3RhbFRpbWUiLCJjbGlja0N1cnJlbnRQb3NpdGlvbiIsInRleHRDYWNoZSIsImlucHV0Iiwic2V0QXR0cmlidXRlIiwibGVmdCIsInRhYkluZGV4IiwidmFsdWUiLCJwb3NpdGlvblN0YXJ0Iiwic2VsZWN0aW9uU3RhcnQiLCJwb3NpdGlvbkVuZCIsInNlbGVjdGlvbkVuZCIsImJvZHkiLCJhcHBlbmRUb0NhbnZhcyIsIm5vdGljZUxvZ2dlZCIsIm1vdmVBY3Rpb25DYWxsYmFjayIsImlDbGljayIsImdldExldHRlckNsaWNrZWQiLCJwb3NpdGlvblN0YXJ0Q2xpY2siLCJzZXRTZWxlY3Rpb25SYW5nZSIsImNsaWNrIiwiYmx1ciIsInBlcmZvcm1hbmNlIiwibm93Iiwib2Zmc2V0VGltZSIsImN0eFRleHQiLCJ1cGRhdGVUZXh0Q2FjaGUiLCJhdXRvU2Nyb2xsIiwiZHJhd1RleHQiLCJjdXJzb3IiLCJjdXJyZW50WCIsImxldHRlcnMiLCJ4RHJhdyIsInlEcmF3IiwiaXNMZXR0ZXJWaXNpYmxlIiwiZHJhd0hpZ2hsaWdodCIsImZvbnRDb2xvciIsImZvbnRTaXplIiwiZm9udEZhbWlseSIsImRyYXdDdXJzb3IiLCJiZWdpblBhdGgiLCJtb3ZlVG8iLCJsaW5lVG8iLCJzdHJva2UiLCJzZWxlY3RDb2xvciIsIndyYXBUZXh0TGluZXMiLCJsZXR0ZXIiLCJpc0NsaWNrQ3VycmVudFBvc2l0aW9uIiwiaXNDbGlja0FmdGVyUG9zaXRpb24iLCJsZXR0ZXJJZCIsImN1cnNvclBvc2l0aW9uIiwiY3VycmVudExldHRlclNpemUiLCJjdXJyZW50TGV0dGVyIiwiY3Vyc29yUG9zaXRpb25Qb3MiLCJjdXJzb3JQb3NpdGlvbk5lZyIsIm9mZnNldFhOZWciLCJmb2N1cyIsImVuZCIsImRpcmVjdGlvbiIsInNpemVzQ2FjaGUiLCJ1cGRhdGVTaXplcyIsIndyYXAiLCJib2xkIiwidW5kZXJsaW5lIiwiTGluayIsImluaXRpYWxDb2xvciIsImluaXRpYWxVbmRlcmxpbmUiLCJmb250Q29sb3JEb3duIiwibG9nIiwiZm9udENvbG9ySG92ZXIiLCJsYXN0S2V5IiwidW5kZWZpbmVkIiwic2VsZWN0ZWRDb21wb25lbnQiLCJibHVyQmFja2dyb3VuZCIsImRyYXdCbHVyIiwia2V5Q29kZSIsImtleUFjdGlvbiIsInNlbGVjdCIsImJsdXJDYW52YXMiLCJpbmRleCIsInNlbGVjdGFibGVDb21wb25lbnRzIiwiY29tcGFyZVRvTWVudSIsIk5vdGlmaWNhdGlvbk1lc3NhZ2UiLCJkZWxheUJlZm9yZUNsb3NpbmciLCJlYXNpbmdGdW5jdGlvbiIsInRpbWVMYXN0RnJhbWUiLCJhbmltYXRpb25UaW1lIiwiY2xvc2VkIiwiY2xvc2luZyIsImNsb3NlQnV0dG9uIiwic2V0Q2xpY2tBY3Rpb24iLCJjbG9zZSIsImRpc2FibGVBbmltYXRpb24iLCJlbmFibGVDbG9zZUJ1dHRvbiIsImRpc2FibGVDbG9zZUJ1dHRvbiIsImFuaW1hdGlvbkR1cmF0aW9uIiwiY29weSIsImNvbXBhcmVUb05vdGlmaWNhdGlvbiIsIm9mZnNldFkiLCJmb3JjZUNsb3NlIiwib3BlbiIsIlByb2dyZXNzQmFyIiwiZGVmYXVsdFBlcmNlbnQiLCJwZXJjZW50IiwiZHJhd0ZvcmVncm91bmQiLCJ3aWR0aEZvcmVncm91bmQiLCJmb3JlZ3JvdW5kQ29sb3IiLCJhbmltYXRpb25QZXJjZW50IiwiZXZlbnRzIiwiZXZlbnRBcmdzIiwicmVnaXN0ZXJDYWxsYmFjayIsInJlbW92ZUNhbGxiYWNrIiwicmVtb3ZlQWxsQ2FsbGJhY2tzIiwidG90YWxXaWR0aCIsImlucHV0cyIsImNvbXBhcmVDb21wb25lbnRzIiwiU2Nyb2xsYmFyIiwic2l6ZSIsImNvbXBhcmVUb1Njcm9sbGJhciIsIm1heFdpZHRoUGFyZW50IiwiaW5uZXJXaWR0aFBhcmVudCIsIm1heEhlaWdodFBhcmVudCIsImlubmVySGVpZ2h0UGFyZW50IiwiY29udGVudFJhdGlvWCIsImNvbnRlbnRSYXRpb1kiLCJ3aW5kb3dTY3JvbGxTaXplWCIsIndpbmRvd1Njcm9sbFNpemVZIiwiU2VsZWN0Iiwib3B0aW9uQ29udGFpbmVyIiwiZGVmYXVsdE9wdGlvbiIsInNlbGVjdGVkT3B0aW9uIiwibGFiZWwiLCJ0cmlhbmdsZSIsIlRyaWFuZ2xlIiwidXBkYXRlV2lkdGgiLCJTZWxlY3RPcHRpb24iLCJkZWZhdWx0TGFiZWwiLCJTZWxlY3REcm9wZG93biIsIm1heEhlaWdodERyb3Bkb3duIiwib3B0aW9ucyIsImdldENvbXBvbmVudElkIiwic2VsZWN0SGVpZ2h0Iiwic3R5bGVzIiwibW92YWJsZSIsIlRvb2x0aXAiLCJjb21wYXJlVG9Ub29sdGlwIiwiZHJhd1RyaWFuZ2xlIiwicHJlUmVuZGVyZWRGb250IiwicHJlUmVuZGVyRm9udCIsImNhcnMiLCJjdHhUbXAiLCJmb250IiwibWVhc3VyZVRleHQiLCJ0ZXh0QmFzZWxpbmUiLCJmaWxsVGV4dCIsInN4Iiwic3kiLCJzV2lkdGgiLCJzSGVpZ2h0IiwiZXJhc2VCZWxvdyIsImRlZ3JlZXMiLCJkcmF3SW1hZ2VXcmFwcGVyIiwiaW1hZ2VEYXRhIiwiaXNOYU4iLCJ0cmFuc2xhdGUiLCJyb3RhdGUiLCJjbGVhclJlY3QiLCJBcnJheSIsImlzQXJyYXkiLCJsaW5lcyIsInNwbGl0IiwieEN1cnJlbnQiLCJ5Q3VycmVudCIsInlGaXJzdCIsImN1cnJlbnRUZXh0IiwiY3VycmVudFdpZHRoIiwiY29sb3JJbmRleCIsIndyYXBUZXh0IiwibGltaXQiLCJwIiwic3Vic3RyaW5nIiwicmlnaHQiLCJkaXNhYmxlV3JhcCIsImltYWdlU21vb3RoaW5nRW5hYmxlZCIsIm5ld1RleHQiLCJ3aWR0aENhciIsIm5iQ2FyTGluZSIsImhlaWdodFRvdGFsIiwibGluZVdyYXAiLCJqIiwid2lkdGhUZXh0IiwiY2FyV2lkdGgiLCJmcm9teCIsImZyb215IiwidG94IiwidG95IiwiaGVhZGxlbiIsImR4IiwiZHkiLCJhbmdsZSIsImF0YW4yIiwic2luIiwicmFkaXVzIiwiYXJjIiwiaXNGaWx0ZXJIdWVBdmFpbGFibGUiLCJnZXRJbWFnZURhdGEiLCJkYXRhIiwicGFyc2VOdW1iZXIiLCJzdHIiLCJwYXJzZUludCIsIm1hdGNoIiwiZ2V0Rm9udFNpemUiLCJyZWN0IiwiZ2V0Qm91bmRpbmdDbGllbnRSZWN0IiwiYXV0b1Jlc2l6ZUNhbnZhcyIsImluaXRpYWxXaWR0aCIsImluaXRpYWxIZWlnaHQiLCJkb2N1bWVudEVsZW1lbnQiLCJjbGllbnRXaWR0aCIsInJhdGlvIiwiZ2V0QXR0cmlidXRlIiwiYXV0b1Jlc2l6ZUNhbnZhc0Z1bGxzY3JlZW4iLCJlbmFibGVBdXRvUmVzaXplQ2FudmFzRnVsbHNjcmVlbiIsImF1dG9SZXNpemVDYW52YXNGdWxscGFnZSIsIm1hcmdpbiIsImVuYWJsZUF1dG9SZXNpemVDYW52YXNGdWxscGFnZSIsInJlcXVlc3RGdWxsc2NyZWVuIiwibW96UmVxdWVzdEZ1bGxTY3JlZW4iLCJ3ZWJraXRSZXF1ZXN0RnVsbHNjcmVlbiIsIm1zUmVxdWVzdEZ1bGxzY3JlZW4iLCJvUmVxdWVzdEZ1bGxzY3JlZW4iLCJleGl0RnVsbHNjcmVlbiIsIm9uZnVsbHNjcmVlbmNoYW5nZSIsIm9ubXNmdWxsc2NyZWVuY2hhbmdlIiwib25tb3pmdWxsc2NyZWVuY2hhbmdlIiwib253ZWJraXRmdWxsc2NyZWVuY2hhbmdlIiwib25va2l0ZnVsbHNjcmVlbmNoYW5nZSIsIm9ub2Z1bGxzY3JlZW5jaGFuZ2UiLCJjbGllbnRYIiwiY2xpZW50WSIsInRvcCJdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNELE87UUNWQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLHlDQUF5QyxpQ0FBaUM7UUFDMUUsZ0hBQWdILG1CQUFtQixFQUFFO1FBQ3JJO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMkJBQTJCLDBCQUEwQixFQUFFO1FBQ3ZELGlDQUFpQyxlQUFlO1FBQ2hEO1FBQ0E7UUFDQTs7UUFFQTtRQUNBLHNEQUFzRCwrREFBK0Q7O1FBRXJIO1FBQ0E7OztRQUdBO1FBQ0E7Ozs7Ozs7Ozs7OztBQ2xGQTtBQUNBOztBQUVBLHdDQUF3QyxTQUFTO0FBQ2pEO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQSxtQzs7Ozs7Ozs7Ozs7QUNWQSx1QkFBdUIsbUJBQU8sQ0FBQyxxRkFBb0I7O0FBRW5EO0FBQ0E7QUFDQTs7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Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6IkpTR2FtZVRvb2xzLmRldi5qcyIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiB3ZWJwYWNrVW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbihyb290LCBmYWN0b3J5KSB7XG5cdGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0JyAmJiB0eXBlb2YgbW9kdWxlID09PSAnb2JqZWN0Jylcblx0XHRtb2R1bGUuZXhwb3J0cyA9IGZhY3RvcnkoKTtcblx0ZWxzZSBpZih0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQpXG5cdFx0ZGVmaW5lKFtdLCBmYWN0b3J5KTtcblx0ZWxzZSBpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcpXG5cdFx0ZXhwb3J0c1tcIkpTR2FtZVRvb2xzXCJdID0gZmFjdG9yeSgpO1xuXHRlbHNlXG5cdFx0cm9vdFtcIkpTR2FtZVRvb2xzXCJdID0gZmFjdG9yeSgpO1xufSkodHlwZW9mIHNlbGYgIT09IFwidW5kZWZpbmVkXCIgPyBzZWxmIDogdGhpcywgZnVuY3Rpb24oKSB7XG5yZXR1cm4gIiwiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zcmMvaW5kZXguanNcIik7XG4iLCJmdW5jdGlvbiBfYXJyYXlMaWtlVG9BcnJheShhcnIsIGxlbikge1xuICBpZiAobGVuID09IG51bGwgfHwgbGVuID4gYXJyLmxlbmd0aCkgbGVuID0gYXJyLmxlbmd0aDtcblxuICBmb3IgKHZhciBpID0gMCwgYXJyMiA9IG5ldyBBcnJheShsZW4pOyBpIDwgbGVuOyBpKyspIHtcbiAgICBhcnIyW2ldID0gYXJyW2ldO1xuICB9XG5cbiAgcmV0dXJuIGFycjI7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX2FycmF5TGlrZVRvQXJyYXk7IiwidmFyIGFycmF5TGlrZVRvQXJyYXkgPSByZXF1aXJlKFwiLi9hcnJheUxpa2VUb0FycmF5XCIpO1xuXG5mdW5jdGlvbiBfYXJyYXlXaXRob3V0SG9sZXMoYXJyKSB7XG4gIGlmIChBcnJheS5pc0FycmF5KGFycikpIHJldHVybiBhcnJheUxpa2VUb0FycmF5KGFycik7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX2FycmF5V2l0aG91dEhvbGVzOyIsImZ1bmN0aW9uIF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoc2VsZikge1xuICBpZiAoc2VsZiA9PT0gdm9pZCAwKSB7XG4gICAgdGhyb3cgbmV3IFJlZmVyZW5jZUVycm9yKFwidGhpcyBoYXNuJ3QgYmVlbiBpbml0aWFsaXNlZCAtIHN1cGVyKCkgaGFzbid0IGJlZW4gY2FsbGVkXCIpO1xuICB9XG5cbiAgcmV0dXJuIHNlbGY7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX2Fzc2VydFRoaXNJbml0aWFsaXplZDsiLCJmdW5jdGlvbiBfY2xhc3NDYWxsQ2hlY2soaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7XG4gIGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7XG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblwiKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9jbGFzc0NhbGxDaGVjazsiLCJmdW5jdGlvbiBfY2xhc3NQcml2YXRlRmllbGRHZXQocmVjZWl2ZXIsIHByaXZhdGVNYXApIHtcbiAgdmFyIGRlc2NyaXB0b3IgPSBwcml2YXRlTWFwLmdldChyZWNlaXZlcik7XG5cbiAgaWYgKCFkZXNjcmlwdG9yKSB7XG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcImF0dGVtcHRlZCB0byBnZXQgcHJpdmF0ZSBmaWVsZCBvbiBub24taW5zdGFuY2VcIik7XG4gIH1cblxuICBpZiAoZGVzY3JpcHRvci5nZXQpIHtcbiAgICByZXR1cm4gZGVzY3JpcHRvci5nZXQuY2FsbChyZWNlaXZlcik7XG4gIH1cblxuICByZXR1cm4gZGVzY3JpcHRvci52YWx1ZTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfY2xhc3NQcml2YXRlRmllbGRHZXQ7IiwiZnVuY3Rpb24gX2NsYXNzUHJpdmF0ZUZpZWxkU2V0KHJlY2VpdmVyLCBwcml2YXRlTWFwLCB2YWx1ZSkge1xuICB2YXIgZGVzY3JpcHRvciA9IHByaXZhdGVNYXAuZ2V0KHJlY2VpdmVyKTtcblxuICBpZiAoIWRlc2NyaXB0b3IpIHtcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiYXR0ZW1wdGVkIHRvIHNldCBwcml2YXRlIGZpZWxkIG9uIG5vbi1pbnN0YW5jZVwiKTtcbiAgfVxuXG4gIGlmIChkZXNjcmlwdG9yLnNldCkge1xuICAgIGRlc2NyaXB0b3Iuc2V0LmNhbGwocmVjZWl2ZXIsIHZhbHVlKTtcbiAgfSBlbHNlIHtcbiAgICBpZiAoIWRlc2NyaXB0b3Iud3JpdGFibGUpIHtcbiAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJhdHRlbXB0ZWQgdG8gc2V0IHJlYWQgb25seSBwcml2YXRlIGZpZWxkXCIpO1xuICAgIH1cblxuICAgIGRlc2NyaXB0b3IudmFsdWUgPSB2YWx1ZTtcbiAgfVxuXG4gIHJldHVybiB2YWx1ZTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfY2xhc3NQcml2YXRlRmllbGRTZXQ7IiwidmFyIHNldFByb3RvdHlwZU9mID0gcmVxdWlyZShcIi4vc2V0UHJvdG90eXBlT2ZcIik7XG5cbnZhciBpc05hdGl2ZVJlZmxlY3RDb25zdHJ1Y3QgPSByZXF1aXJlKFwiLi9pc05hdGl2ZVJlZmxlY3RDb25zdHJ1Y3RcIik7XG5cbmZ1bmN0aW9uIF9jb25zdHJ1Y3QoUGFyZW50LCBhcmdzLCBDbGFzcykge1xuICBpZiAoaXNOYXRpdmVSZWZsZWN0Q29uc3RydWN0KCkpIHtcbiAgICBtb2R1bGUuZXhwb3J0cyA9IF9jb25zdHJ1Y3QgPSBSZWZsZWN0LmNvbnN0cnVjdDtcbiAgfSBlbHNlIHtcbiAgICBtb2R1bGUuZXhwb3J0cyA9IF9jb25zdHJ1Y3QgPSBmdW5jdGlvbiBfY29uc3RydWN0KFBhcmVudCwgYXJncywgQ2xhc3MpIHtcbiAgICAgIHZhciBhID0gW251bGxdO1xuICAgICAgYS5wdXNoLmFwcGx5KGEsIGFyZ3MpO1xuICAgICAgdmFyIENvbnN0cnVjdG9yID0gRnVuY3Rpb24uYmluZC5hcHBseShQYXJlbnQsIGEpO1xuICAgICAgdmFyIGluc3RhbmNlID0gbmV3IENvbnN0cnVjdG9yKCk7XG4gICAgICBpZiAoQ2xhc3MpIHNldFByb3RvdHlwZU9mKGluc3RhbmNlLCBDbGFzcy5wcm90b3R5cGUpO1xuICAgICAgcmV0dXJuIGluc3RhbmNlO1xuICAgIH07XG4gIH1cblxuICByZXR1cm4gX2NvbnN0cnVjdC5hcHBseShudWxsLCBhcmd1bWVudHMpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9jb25zdHJ1Y3Q7IiwiZnVuY3Rpb24gX2RlZmluZVByb3BlcnRpZXModGFyZ2V0LCBwcm9wcykge1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHByb3BzLmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGRlc2NyaXB0b3IgPSBwcm9wc1tpXTtcbiAgICBkZXNjcmlwdG9yLmVudW1lcmFibGUgPSBkZXNjcmlwdG9yLmVudW1lcmFibGUgfHwgZmFsc2U7XG4gICAgZGVzY3JpcHRvci5jb25maWd1cmFibGUgPSB0cnVlO1xuICAgIGlmIChcInZhbHVlXCIgaW4gZGVzY3JpcHRvcikgZGVzY3JpcHRvci53cml0YWJsZSA9IHRydWU7XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwgZGVzY3JpcHRvci5rZXksIGRlc2NyaXB0b3IpO1xuICB9XG59XG5cbmZ1bmN0aW9uIF9jcmVhdGVDbGFzcyhDb25zdHJ1Y3RvciwgcHJvdG9Qcm9wcywgc3RhdGljUHJvcHMpIHtcbiAgaWYgKHByb3RvUHJvcHMpIF9kZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLnByb3RvdHlwZSwgcHJvdG9Qcm9wcyk7XG4gIGlmIChzdGF0aWNQcm9wcykgX2RlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IsIHN0YXRpY1Byb3BzKTtcbiAgcmV0dXJuIENvbnN0cnVjdG9yO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9jcmVhdGVDbGFzczsiLCJmdW5jdGlvbiBfZGVmaW5lUHJvcGVydHkob2JqLCBrZXksIHZhbHVlKSB7XG4gIGlmIChrZXkgaW4gb2JqKSB7XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KG9iaiwga2V5LCB7XG4gICAgICB2YWx1ZTogdmFsdWUsXG4gICAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgICAgY29uZmlndXJhYmxlOiB0cnVlLFxuICAgICAgd3JpdGFibGU6IHRydWVcbiAgICB9KTtcbiAgfSBlbHNlIHtcbiAgICBvYmpba2V5XSA9IHZhbHVlO1xuICB9XG5cbiAgcmV0dXJuIG9iajtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfZGVmaW5lUHJvcGVydHk7IiwidmFyIHN1cGVyUHJvcEJhc2UgPSByZXF1aXJlKFwiLi9zdXBlclByb3BCYXNlXCIpO1xuXG5mdW5jdGlvbiBfZ2V0KHRhcmdldCwgcHJvcGVydHksIHJlY2VpdmVyKSB7XG4gIGlmICh0eXBlb2YgUmVmbGVjdCAhPT0gXCJ1bmRlZmluZWRcIiAmJiBSZWZsZWN0LmdldCkge1xuICAgIG1vZHVsZS5leHBvcnRzID0gX2dldCA9IFJlZmxlY3QuZ2V0O1xuICB9IGVsc2Uge1xuICAgIG1vZHVsZS5leHBvcnRzID0gX2dldCA9IGZ1bmN0aW9uIF9nZXQodGFyZ2V0LCBwcm9wZXJ0eSwgcmVjZWl2ZXIpIHtcbiAgICAgIHZhciBiYXNlID0gc3VwZXJQcm9wQmFzZSh0YXJnZXQsIHByb3BlcnR5KTtcbiAgICAgIGlmICghYmFzZSkgcmV0dXJuO1xuICAgICAgdmFyIGRlc2MgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKGJhc2UsIHByb3BlcnR5KTtcblxuICAgICAgaWYgKGRlc2MuZ2V0KSB7XG4gICAgICAgIHJldHVybiBkZXNjLmdldC5jYWxsKHJlY2VpdmVyKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGRlc2MudmFsdWU7XG4gICAgfTtcbiAgfVxuXG4gIHJldHVybiBfZ2V0KHRhcmdldCwgcHJvcGVydHksIHJlY2VpdmVyIHx8IHRhcmdldCk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX2dldDsiLCJmdW5jdGlvbiBfZ2V0UHJvdG90eXBlT2Yobykge1xuICBtb2R1bGUuZXhwb3J0cyA9IF9nZXRQcm90b3R5cGVPZiA9IE9iamVjdC5zZXRQcm90b3R5cGVPZiA/IE9iamVjdC5nZXRQcm90b3R5cGVPZiA6IGZ1bmN0aW9uIF9nZXRQcm90b3R5cGVPZihvKSB7XG4gICAgcmV0dXJuIG8uX19wcm90b19fIHx8IE9iamVjdC5nZXRQcm90b3R5cGVPZihvKTtcbiAgfTtcbiAgcmV0dXJuIF9nZXRQcm90b3R5cGVPZihvKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfZ2V0UHJvdG90eXBlT2Y7IiwidmFyIHNldFByb3RvdHlwZU9mID0gcmVxdWlyZShcIi4vc2V0UHJvdG90eXBlT2ZcIik7XG5cbmZ1bmN0aW9uIF9pbmhlcml0cyhzdWJDbGFzcywgc3VwZXJDbGFzcykge1xuICBpZiAodHlwZW9mIHN1cGVyQ2xhc3MgIT09IFwiZnVuY3Rpb25cIiAmJiBzdXBlckNsYXNzICE9PSBudWxsKSB7XG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlN1cGVyIGV4cHJlc3Npb24gbXVzdCBlaXRoZXIgYmUgbnVsbCBvciBhIGZ1bmN0aW9uXCIpO1xuICB9XG5cbiAgc3ViQ2xhc3MucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShzdXBlckNsYXNzICYmIHN1cGVyQ2xhc3MucHJvdG90eXBlLCB7XG4gICAgY29uc3RydWN0b3I6IHtcbiAgICAgIHZhbHVlOiBzdWJDbGFzcyxcbiAgICAgIHdyaXRhYmxlOiB0cnVlLFxuICAgICAgY29uZmlndXJhYmxlOiB0cnVlXG4gICAgfVxuICB9KTtcbiAgaWYgKHN1cGVyQ2xhc3MpIHNldFByb3RvdHlwZU9mKHN1YkNsYXNzLCBzdXBlckNsYXNzKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfaW5oZXJpdHM7IiwiZnVuY3Rpb24gX2lzTmF0aXZlUmVmbGVjdENvbnN0cnVjdCgpIHtcbiAgaWYgKHR5cGVvZiBSZWZsZWN0ID09PSBcInVuZGVmaW5lZFwiIHx8ICFSZWZsZWN0LmNvbnN0cnVjdCkgcmV0dXJuIGZhbHNlO1xuICBpZiAoUmVmbGVjdC5jb25zdHJ1Y3Quc2hhbSkgcmV0dXJuIGZhbHNlO1xuICBpZiAodHlwZW9mIFByb3h5ID09PSBcImZ1bmN0aW9uXCIpIHJldHVybiB0cnVlO1xuXG4gIHRyeSB7XG4gICAgRGF0ZS5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChSZWZsZWN0LmNvbnN0cnVjdChEYXRlLCBbXSwgZnVuY3Rpb24gKCkge30pKTtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfSBjYXRjaCAoZSkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9pc05hdGl2ZVJlZmxlY3RDb25zdHJ1Y3Q7IiwiZnVuY3Rpb24gX2l0ZXJhYmxlVG9BcnJheShpdGVyKSB7XG4gIGlmICh0eXBlb2YgU3ltYm9sICE9PSBcInVuZGVmaW5lZFwiICYmIFN5bWJvbC5pdGVyYXRvciBpbiBPYmplY3QoaXRlcikpIHJldHVybiBBcnJheS5mcm9tKGl0ZXIpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9pdGVyYWJsZVRvQXJyYXk7IiwiZnVuY3Rpb24gX25vbkl0ZXJhYmxlU3ByZWFkKCkge1xuICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiSW52YWxpZCBhdHRlbXB0IHRvIHNwcmVhZCBub24taXRlcmFibGUgaW5zdGFuY2UuXFxuSW4gb3JkZXIgdG8gYmUgaXRlcmFibGUsIG5vbi1hcnJheSBvYmplY3RzIG11c3QgaGF2ZSBhIFtTeW1ib2wuaXRlcmF0b3JdKCkgbWV0aG9kLlwiKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfbm9uSXRlcmFibGVTcHJlYWQ7IiwidmFyIF90eXBlb2YgPSByZXF1aXJlKFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy90eXBlb2ZcIik7XG5cbnZhciBhc3NlcnRUaGlzSW5pdGlhbGl6ZWQgPSByZXF1aXJlKFwiLi9hc3NlcnRUaGlzSW5pdGlhbGl6ZWRcIik7XG5cbmZ1bmN0aW9uIF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHNlbGYsIGNhbGwpIHtcbiAgaWYgKGNhbGwgJiYgKF90eXBlb2YoY2FsbCkgPT09IFwib2JqZWN0XCIgfHwgdHlwZW9mIGNhbGwgPT09IFwiZnVuY3Rpb25cIikpIHtcbiAgICByZXR1cm4gY2FsbDtcbiAgfVxuXG4gIHJldHVybiBhc3NlcnRUaGlzSW5pdGlhbGl6ZWQoc2VsZik7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm47IiwidmFyIHN1cGVyUHJvcEJhc2UgPSByZXF1aXJlKFwiLi9zdXBlclByb3BCYXNlXCIpO1xuXG52YXIgZGVmaW5lUHJvcGVydHkgPSByZXF1aXJlKFwiLi9kZWZpbmVQcm9wZXJ0eVwiKTtcblxuZnVuY3Rpb24gc2V0KHRhcmdldCwgcHJvcGVydHksIHZhbHVlLCByZWNlaXZlcikge1xuICBpZiAodHlwZW9mIFJlZmxlY3QgIT09IFwidW5kZWZpbmVkXCIgJiYgUmVmbGVjdC5zZXQpIHtcbiAgICBzZXQgPSBSZWZsZWN0LnNldDtcbiAgfSBlbHNlIHtcbiAgICBzZXQgPSBmdW5jdGlvbiBzZXQodGFyZ2V0LCBwcm9wZXJ0eSwgdmFsdWUsIHJlY2VpdmVyKSB7XG4gICAgICB2YXIgYmFzZSA9IHN1cGVyUHJvcEJhc2UodGFyZ2V0LCBwcm9wZXJ0eSk7XG4gICAgICB2YXIgZGVzYztcblxuICAgICAgaWYgKGJhc2UpIHtcbiAgICAgICAgZGVzYyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IoYmFzZSwgcHJvcGVydHkpO1xuXG4gICAgICAgIGlmIChkZXNjLnNldCkge1xuICAgICAgICAgIGRlc2Muc2V0LmNhbGwocmVjZWl2ZXIsIHZhbHVlKTtcbiAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfSBlbHNlIGlmICghZGVzYy53cml0YWJsZSkge1xuICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBkZXNjID0gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihyZWNlaXZlciwgcHJvcGVydHkpO1xuXG4gICAgICBpZiAoZGVzYykge1xuICAgICAgICBpZiAoIWRlc2Mud3JpdGFibGUpIHtcbiAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cblxuICAgICAgICBkZXNjLnZhbHVlID0gdmFsdWU7XG4gICAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShyZWNlaXZlciwgcHJvcGVydHksIGRlc2MpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgZGVmaW5lUHJvcGVydHkocmVjZWl2ZXIsIHByb3BlcnR5LCB2YWx1ZSk7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH07XG4gIH1cblxuICByZXR1cm4gc2V0KHRhcmdldCwgcHJvcGVydHksIHZhbHVlLCByZWNlaXZlcik7XG59XG5cbmZ1bmN0aW9uIF9zZXQodGFyZ2V0LCBwcm9wZXJ0eSwgdmFsdWUsIHJlY2VpdmVyLCBpc1N0cmljdCkge1xuICB2YXIgcyA9IHNldCh0YXJnZXQsIHByb3BlcnR5LCB2YWx1ZSwgcmVjZWl2ZXIgfHwgdGFyZ2V0KTtcblxuICBpZiAoIXMgJiYgaXNTdHJpY3QpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ2ZhaWxlZCB0byBzZXQgcHJvcGVydHknKTtcbiAgfVxuXG4gIHJldHVybiB2YWx1ZTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfc2V0OyIsImZ1bmN0aW9uIF9zZXRQcm90b3R5cGVPZihvLCBwKSB7XG4gIG1vZHVsZS5leHBvcnRzID0gX3NldFByb3RvdHlwZU9mID0gT2JqZWN0LnNldFByb3RvdHlwZU9mIHx8IGZ1bmN0aW9uIF9zZXRQcm90b3R5cGVPZihvLCBwKSB7XG4gICAgby5fX3Byb3RvX18gPSBwO1xuICAgIHJldHVybiBvO1xuICB9O1xuXG4gIHJldHVybiBfc2V0UHJvdG90eXBlT2YobywgcCk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX3NldFByb3RvdHlwZU9mOyIsInZhciBnZXRQcm90b3R5cGVPZiA9IHJlcXVpcmUoXCIuL2dldFByb3RvdHlwZU9mXCIpO1xuXG5mdW5jdGlvbiBfc3VwZXJQcm9wQmFzZShvYmplY3QsIHByb3BlcnR5KSB7XG4gIHdoaWxlICghT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpKSB7XG4gICAgb2JqZWN0ID0gZ2V0UHJvdG90eXBlT2Yob2JqZWN0KTtcbiAgICBpZiAob2JqZWN0ID09PSBudWxsKSBicmVhaztcbiAgfVxuXG4gIHJldHVybiBvYmplY3Q7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX3N1cGVyUHJvcEJhc2U7IiwidmFyIGFycmF5V2l0aG91dEhvbGVzID0gcmVxdWlyZShcIi4vYXJyYXlXaXRob3V0SG9sZXNcIik7XG5cbnZhciBpdGVyYWJsZVRvQXJyYXkgPSByZXF1aXJlKFwiLi9pdGVyYWJsZVRvQXJyYXlcIik7XG5cbnZhciB1bnN1cHBvcnRlZEl0ZXJhYmxlVG9BcnJheSA9IHJlcXVpcmUoXCIuL3Vuc3VwcG9ydGVkSXRlcmFibGVUb0FycmF5XCIpO1xuXG52YXIgbm9uSXRlcmFibGVTcHJlYWQgPSByZXF1aXJlKFwiLi9ub25JdGVyYWJsZVNwcmVhZFwiKTtcblxuZnVuY3Rpb24gX3RvQ29uc3VtYWJsZUFycmF5KGFycikge1xuICByZXR1cm4gYXJyYXlXaXRob3V0SG9sZXMoYXJyKSB8fCBpdGVyYWJsZVRvQXJyYXkoYXJyKSB8fCB1bnN1cHBvcnRlZEl0ZXJhYmxlVG9BcnJheShhcnIpIHx8IG5vbkl0ZXJhYmxlU3ByZWFkKCk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX3RvQ29uc3VtYWJsZUFycmF5OyIsImZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7XG4gIFwiQGJhYmVsL2hlbHBlcnMgLSB0eXBlb2ZcIjtcblxuICBpZiAodHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIHR5cGVvZiBTeW1ib2wuaXRlcmF0b3IgPT09IFwic3ltYm9sXCIpIHtcbiAgICBtb2R1bGUuZXhwb3J0cyA9IF90eXBlb2YgPSBmdW5jdGlvbiBfdHlwZW9mKG9iaikge1xuICAgICAgcmV0dXJuIHR5cGVvZiBvYmo7XG4gICAgfTtcbiAgfSBlbHNlIHtcbiAgICBtb2R1bGUuZXhwb3J0cyA9IF90eXBlb2YgPSBmdW5jdGlvbiBfdHlwZW9mKG9iaikge1xuICAgICAgcmV0dXJuIG9iaiAmJiB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgb2JqLmNvbnN0cnVjdG9yID09PSBTeW1ib2wgJiYgb2JqICE9PSBTeW1ib2wucHJvdG90eXBlID8gXCJzeW1ib2xcIiA6IHR5cGVvZiBvYmo7XG4gICAgfTtcbiAgfVxuXG4gIHJldHVybiBfdHlwZW9mKG9iaik7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX3R5cGVvZjsiLCJ2YXIgYXJyYXlMaWtlVG9BcnJheSA9IHJlcXVpcmUoXCIuL2FycmF5TGlrZVRvQXJyYXlcIik7XG5cbmZ1bmN0aW9uIF91bnN1cHBvcnRlZEl0ZXJhYmxlVG9BcnJheShvLCBtaW5MZW4pIHtcbiAgaWYgKCFvKSByZXR1cm47XG4gIGlmICh0eXBlb2YgbyA9PT0gXCJzdHJpbmdcIikgcmV0dXJuIGFycmF5TGlrZVRvQXJyYXkobywgbWluTGVuKTtcbiAgdmFyIG4gPSBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwobykuc2xpY2UoOCwgLTEpO1xuICBpZiAobiA9PT0gXCJPYmplY3RcIiAmJiBvLmNvbnN0cnVjdG9yKSBuID0gby5jb25zdHJ1Y3Rvci5uYW1lO1xuICBpZiAobiA9PT0gXCJNYXBcIiB8fCBuID09PSBcIlNldFwiKSByZXR1cm4gQXJyYXkuZnJvbShvKTtcbiAgaWYgKG4gPT09IFwiQXJndW1lbnRzXCIgfHwgL14oPzpVaXxJKW50KD86OHwxNnwzMikoPzpDbGFtcGVkKT9BcnJheSQvLnRlc3QobikpIHJldHVybiBhcnJheUxpa2VUb0FycmF5KG8sIG1pbkxlbik7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX3Vuc3VwcG9ydGVkSXRlcmFibGVUb0FycmF5OyIsIi8qXG4gKiBDb3B5cmlnaHQgKEMpIDIwMjAgRWxpYXN0aWsgKGVsaWFzdGlrc29mdHMuY29tKVxuICpcbiAqIFRoaXMgZmlsZSBpcyBwYXJ0IG9mIFwiSlNHYW1lVG9vbHNcIi5cbiAqXG4gKiBcIkpTR2FtZVRvb2xzXCIgaXMgZnJlZSBzb2Z0d2FyZTogeW91IGNhbiByZWRpc3RyaWJ1dGUgaXQgYW5kL29yIG1vZGlmeVxuICogaXQgdW5kZXIgdGhlIHRlcm1zIG9mIHRoZSBHTlUgR2VuZXJhbCBQdWJsaWMgTGljZW5zZSBhcyBwdWJsaXNoZWQgYnlcbiAqIHRoZSBGcmVlIFNvZnR3YXJlIEZvdW5kYXRpb24sIGVpdGhlciB2ZXJzaW9uIDMgb2YgdGhlIExpY2Vuc2UsIG9yXG4gKiAoYXQgeW91ciBvcHRpb24pIGFueSBsYXRlciB2ZXJzaW9uLlxuICpcbiAqIFwiSlNHYW1lVG9vbHNcIiBpcyBkaXN0cmlidXRlZCBpbiB0aGUgaG9wZSB0aGF0IGl0IHdpbGwgYmUgdXNlZnVsLFxuICogYnV0IFdJVEhPVVQgQU5ZIFdBUlJBTlRZOyB3aXRob3V0IGV2ZW4gdGhlIGltcGxpZWQgd2FycmFudHkgb2ZcbiAqIE1FUkNIQU5UQUJJTElUWSBvciBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRS4gIFNlZSB0aGVcbiAqIEdOVSBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlIGZvciBtb3JlIGRldGFpbHMuXG4gKlxuICogWW91IHNob3VsZCBoYXZlIHJlY2VpdmVkIGEgY29weSBvZiB0aGUgR05VIEdlbmVyYWwgUHVibGljIExpY2Vuc2VcbiAqIGFsb25nIHdpdGggXCJKU0dhbWVUb29sc1wiLiAgSWYgbm90LCBzZWUgPGh0dHA6Ly93d3cuZ251Lm9yZy9saWNlbnNlcy8+LlxuICovXG5pbXBvcnQgQ29tcG9uZW50IGZyb20gXCIuL0NvbXBvbmVudFwiO1xuaW1wb3J0IENvbnN0YW50cyBmcm9tIFwiLi9Db25zdGFudHNcIjtcbmltcG9ydCBTdHlsZSBmcm9tIFwiLi9TdHlsZVwiO1xuaW1wb3J0IFV0aWxzIGZyb20gXCIuL1V0aWxzXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEFycm93IGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgc2VsZWN0YWJsZSA9IGZhbHNlO1xuXG4gIGNvbnN0cnVjdG9yKHgsIHksIHRvWCwgdG9ZLCBzdHlsZSkge1xuICAgIHN1cGVyKHgsIHksIG51bGwsIG51bGwsIHN0eWxlKTtcblxuICAgIHRoaXMudG9YID0gdG9YO1xuICAgIHRoaXMudG9ZID0gdG9ZO1xuICB9XG5cbiAgZHJhdyhjb250ZXh0KSB7XG4gICAgaWYodGhpcy5oaWRkZW4pIHJldHVybjtcbiAgICBzdXBlci5kcmF3KGNvbnRleHQpO1xuXG4gICAgY29uc3QgY2FudmFzID0gY29udGV4dC5jYW52YXM7XG4gICAgY29uc3QgY3R4ID0gY2FudmFzLmdldENvbnRleHQoXCIyZFwiKTtcbiAgICBcbiAgICBVdGlscy5kcmF3QXJyb3coY3R4LCB0aGlzLngsIHRoaXMueSwgdGhpcy50b1gsIHRoaXMudG9ZLCB0aGlzLnN0eWxlLmxpbmVXaWR0aCwgdGhpcy5zdHlsZS5oZWFkU2l6ZSwgdGhpcy5zdHlsZS5jb2xvciwgdGhpcy5zdHlsZS5saW5lQ2FwKTtcblxuICAgIHRoaXMuaW5pdCA9IHRydWU7XG4gIH1cblxuICBnZXQgd2lkdGgoKSB7XG4gICAgcmV0dXJuIE1hdGguYWJzKHRoaXMueCAtIHRoaXMudG9YKTtcbiAgfVxuXG4gIGdldCBoZWlnaHQoKSB7XG4gICAgcmV0dXJuIE1hdGguYWJzKHRoaXMueSAtIHRoaXMudG9ZKTtcbiAgfVxuXG4gIGdldCBkZWZhdWx0U3R5bGUoKSB7XG4gICAgcmV0dXJuIG5ldyBTdHlsZSh7XG4gICAgICBcImxpbmVXaWR0aFwiOiBDb25zdGFudHMuU2V0dGluZy5BUlJPV19ERUZBVUxUX0xJTkVfU0laRSxcbiAgICAgIFwiaGVhZFNpemVcIjogQ29uc3RhbnRzLlNldHRpbmcuQVJST1dfREVGQVVMVF9IRUFEX1NJWkUsXG4gICAgICBcImNvbG9yXCI6IENvbnN0YW50cy5TZXR0aW5nLkFSUk9XX0RFRkFVTFRfQ09MT1IsXG4gICAgICBcImxpbmVDYXBcIjogQ29uc3RhbnRzLlNldHRpbmcuQVJST1dfREVGQVVMVF9MSU5FX0NBUFxuICAgIH0pO1xuICB9XG59IiwiLypcbiAqIENvcHlyaWdodCAoQykgMjAyMCBFbGlhc3RpayAoZWxpYXN0aWtzb2Z0cy5jb20pXG4gKlxuICogVGhpcyBmaWxlIGlzIHBhcnQgb2YgXCJKU0dhbWVUb29sc1wiLlxuICpcbiAqIFwiSlNHYW1lVG9vbHNcIiBpcyBmcmVlIHNvZnR3YXJlOiB5b3UgY2FuIHJlZGlzdHJpYnV0ZSBpdCBhbmQvb3IgbW9kaWZ5XG4gKiBpdCB1bmRlciB0aGUgdGVybXMgb2YgdGhlIEdOVSBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlIGFzIHB1Ymxpc2hlZCBieVxuICogdGhlIEZyZWUgU29mdHdhcmUgRm91bmRhdGlvbiwgZWl0aGVyIHZlcnNpb24gMyBvZiB0aGUgTGljZW5zZSwgb3JcbiAqIChhdCB5b3VyIG9wdGlvbikgYW55IGxhdGVyIHZlcnNpb24uXG4gKlxuICogXCJKU0dhbWVUb29sc1wiIGlzIGRpc3RyaWJ1dGVkIGluIHRoZSBob3BlIHRoYXQgaXQgd2lsbCBiZSB1c2VmdWwsXG4gKiBidXQgV0lUSE9VVCBBTlkgV0FSUkFOVFk7IHdpdGhvdXQgZXZlbiB0aGUgaW1wbGllZCB3YXJyYW50eSBvZlxuICogTUVSQ0hBTlRBQklMSVRZIG9yIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFLiAgU2VlIHRoZVxuICogR05VIEdlbmVyYWwgUHVibGljIExpY2Vuc2UgZm9yIG1vcmUgZGV0YWlscy5cbiAqXG4gKiBZb3Ugc2hvdWxkIGhhdmUgcmVjZWl2ZWQgYSBjb3B5IG9mIHRoZSBHTlUgR2VuZXJhbCBQdWJsaWMgTGljZW5zZVxuICogYWxvbmcgd2l0aCBcIkpTR2FtZVRvb2xzXCIuICBJZiBub3QsIHNlZSA8aHR0cDovL3d3dy5nbnUub3JnL2xpY2Vuc2VzLz4uXG4gKi9cbmltcG9ydCBDb21wb25lbnQgZnJvbSBcIi4vQ29tcG9uZW50XCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEJveCBleHRlbmRzIENvbXBvbmVudCB7XG4gIHNlbGVjdGFibGUgPSBmYWxzZTtcblxuICBjb25zdHJ1Y3Rvcih4LCB5LCB3aWR0aCwgaGVpZ2h0LCBzdHlsZSkge1xuICAgIHN1cGVyKHgsIHksIHdpZHRoLCBoZWlnaHQsIHN0eWxlKTtcbiAgfVxuICBcbiAgZHJhdyhjb250ZXh0KSB7XG4gICAgaWYodGhpcy5oaWRkZW4pIHJldHVybjtcbiAgICBzdXBlci5kcmF3KGNvbnRleHQpO1xuXG4gICAgY29uc3QgY2FudmFzID0gY29udGV4dC5jYW52YXM7XG4gICAgY29uc3QgY3R4ID0gY2FudmFzLmdldENvbnRleHQoXCIyZFwiKTtcbiAgICBjdHguc2F2ZSgpO1xuXG4gICAgdGhpcy5kcmF3QmFja2dyb3VuZChjdHgpO1xuICAgIHRoaXMuZHJhd0JvcmRlcihjdHgpO1xuICAgIFxuICAgIGN0eC5yZXN0b3JlKCk7XG4gIH1cblxuICBkcmF3QmFja2dyb3VuZChjdHgpIHtcbiAgICBjb25zdCBjb2xvciA9IHRoaXMuYmFja2dyb3VuZENvbG9yO1xuXG4gICAgaWYoY29sb3IpIHtcbiAgICAgIGN0eC5zYXZlKCk7XG4gIFxuICAgICAgY3R4LmZpbGxTdHlsZSA9IGNvbG9yO1xuICAgICAgY3R4LmZpbGxSZWN0KE1hdGgucm91bmQodGhpcy54KSwgTWF0aC5yb3VuZCh0aGlzLnkpLCBNYXRoLnJvdW5kKHRoaXMud2lkdGgpLCBNYXRoLnJvdW5kKHRoaXMuaGVpZ2h0KSk7XG5cbiAgICAgIGN0eC5yZXN0b3JlKCk7XG4gICAgfVxuICB9XG5cbiAgZ2V0IGJhY2tncm91bmRDb2xvcigpIHtcbiAgICBsZXQgY29sb3IgPSBudWxsO1xuXG4gICAgaWYodGhpcy5ob3ZlcmVkICYmIHRoaXMuY2xpY2tlZCAmJiB0aGlzLnN0eWxlLmJhY2tncm91bmRDb2xvckRvd24gIT0gbnVsbCkge1xuICAgICAgY29sb3IgPSB0aGlzLnN0eWxlLmJhY2tncm91bmRDb2xvckRvd247XG4gICAgfSBlbHNlIGlmKHRoaXMuaG92ZXJlZCAmJiB0aGlzLnN0eWxlLmJhY2tncm91bmRDb2xvckhvdmVyICE9IG51bGwpIHtcbiAgICAgIGNvbG9yID0gdGhpcy5zdHlsZS5iYWNrZ3JvdW5kQ29sb3JIb3ZlcjtcbiAgICB9IGVsc2Uge1xuICAgICAgY29sb3IgPSB0aGlzLnN0eWxlLmJhY2tncm91bmRDb2xvcjtcbiAgICB9XG5cbiAgICByZXR1cm4gY29sb3I7XG4gIH1cblxuICBkcmF3Qm9yZGVyKGN0eCkge1xuICAgIGNvbnN0IGNvbG9yID0gdGhpcy5ib3JkZXJDb2xvcjtcblxuICAgIGlmKGNvbG9yICYmIHRoaXMuc3R5bGUuYm9yZGVyU2l6ZSA+IDApIHtcbiAgICAgIGN0eC5zYXZlKCk7XG4gICAgICBcbiAgICAgIGN0eC5zdHJva2VTdHlsZSA9IGNvbG9yO1xuICAgICAgY3R4LmxpbmVXaWR0aCA9IHRoaXMuc3R5bGUuYm9yZGVyU2l6ZTtcbiAgICAgIFxuICAgICAgY3R4LnN0cm9rZVJlY3QoTWF0aC5yb3VuZCh0aGlzLngpLCBNYXRoLnJvdW5kKHRoaXMueSksIE1hdGgucm91bmQodGhpcy53aWR0aCAtIHRoaXMuc3R5bGUuYm9yZGVyU2l6ZSAvIDIpLCBNYXRoLnJvdW5kKHRoaXMuaGVpZ2h0IC0gdGhpcy5zdHlsZS5ib3JkZXJTaXplIC8gMikpO1xuICBcbiAgICAgIGN0eC5yZXN0b3JlKCk7XG4gICAgfVxuICB9XG5cbiAgZ2V0IGJvcmRlckNvbG9yKCkge1xuICAgIGxldCBjb2xvciA9IG51bGw7XG5cbiAgICBpZih0aGlzLmNsaWNrZWQgJiYgdGhpcy5ob3ZlcmVkICYmIHRoaXMuc3R5bGUuYm9yZGVyQ29sb3JEb3duICE9IG51bGwpIHtcbiAgICAgIGNvbG9yID0gdGhpcy5zdHlsZS5ib3JkZXJDb2xvckRvd247XG4gICAgfSBlbHNlIGlmKCF0aGlzLmNsaWNrZWQgJiYgdGhpcy5ob3ZlcmVkICYmIHRoaXMuc3R5bGUuYm9yZGVyQ29sb3JIb3ZlciAhPSBudWxsKSB7XG4gICAgICBjb2xvciA9IHRoaXMuc3R5bGUuYm9yZGVyQ29sb3JIb3ZlcjtcbiAgICB9IGVsc2UgaWYodGhpcy5zZWxlY3RhYmxlICYmIHRoaXMuc2VsZWN0ZWQgJiYgdGhpcy5zdHlsZS5ib3JkZXJDb2xvclNlbGVjdGVkICE9IG51bGwpIHtcbiAgICAgIGNvbG9yID0gdGhpcy5zdHlsZS5ib3JkZXJDb2xvclNlbGVjdGVkO1xuICAgIH0gZWxzZSB7XG4gICAgICBjb2xvciA9IHRoaXMuc3R5bGUuYm9yZGVyQ29sb3I7XG4gICAgfVxuXG4gICAgcmV0dXJuIGNvbG9yO1xuICB9XG59IiwiLypcbiAqIENvcHlyaWdodCAoQykgMjAyMCBFbGlhc3RpayAoZWxpYXN0aWtzb2Z0cy5jb20pXG4gKlxuICogVGhpcyBmaWxlIGlzIHBhcnQgb2YgXCJKU0dhbWVUb29sc1wiLlxuICpcbiAqIFwiSlNHYW1lVG9vbHNcIiBpcyBmcmVlIHNvZnR3YXJlOiB5b3UgY2FuIHJlZGlzdHJpYnV0ZSBpdCBhbmQvb3IgbW9kaWZ5XG4gKiBpdCB1bmRlciB0aGUgdGVybXMgb2YgdGhlIEdOVSBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlIGFzIHB1Ymxpc2hlZCBieVxuICogdGhlIEZyZWUgU29mdHdhcmUgRm91bmRhdGlvbiwgZWl0aGVyIHZlcnNpb24gMyBvZiB0aGUgTGljZW5zZSwgb3JcbiAqIChhdCB5b3VyIG9wdGlvbikgYW55IGxhdGVyIHZlcnNpb24uXG4gKlxuICogXCJKU0dhbWVUb29sc1wiIGlzIGRpc3RyaWJ1dGVkIGluIHRoZSBob3BlIHRoYXQgaXQgd2lsbCBiZSB1c2VmdWwsXG4gKiBidXQgV0lUSE9VVCBBTlkgV0FSUkFOVFk7IHdpdGhvdXQgZXZlbiB0aGUgaW1wbGllZCB3YXJyYW50eSBvZlxuICogTUVSQ0hBTlRBQklMSVRZIG9yIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFLiAgU2VlIHRoZVxuICogR05VIEdlbmVyYWwgUHVibGljIExpY2Vuc2UgZm9yIG1vcmUgZGV0YWlscy5cbiAqXG4gKiBZb3Ugc2hvdWxkIGhhdmUgcmVjZWl2ZWQgYSBjb3B5IG9mIHRoZSBHTlUgR2VuZXJhbCBQdWJsaWMgTGljZW5zZVxuICogYWxvbmcgd2l0aCBcIkpTR2FtZVRvb2xzXCIuICBJZiBub3QsIHNlZSA8aHR0cDovL3d3dy5nbnUub3JnL2xpY2Vuc2VzLz4uXG4gKi9cbmltcG9ydCBSb3cgZnJvbSBcIi4vUm93XCI7XG5pbXBvcnQgQ29uc3RhbnRzIGZyb20gXCIuL0NvbnN0YW50c1wiO1xuaW1wb3J0IFN0eWxlIGZyb20gXCIuL1N0eWxlXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEJ1dHRvbiBleHRlbmRzIFJvdyB7XG4gIHNlbGVjdGFibGUgPSB0cnVlO1xuXG4gIGNvbnN0cnVjdG9yKHgsIHksIG1heFdpZHRoLCBtYXhIZWlnaHQsIHN0eWxlLCAuLi5jb21wb25lbnRzKSB7XG4gICAgc3VwZXIoeCwgeSwgbWF4V2lkdGgsIG1heEhlaWdodCwgc3R5bGUsIC4uLmNvbXBvbmVudHMpO1xuICB9XG4gIFxuICBkcmF3KGNvbnRleHQpIHtcbiAgICBpZih0aGlzLmhpZGRlbikgcmV0dXJuO1xuICAgIHN1cGVyLmRyYXcoY29udGV4dCk7XG5cbiAgICBjb25zdCBjYW52YXMgPSBjb250ZXh0LmNhbnZhcztcbiAgICBjb25zdCBjdHggPSBjYW52YXMuZ2V0Q29udGV4dChcIjJkXCIpO1xuICAgIGN0eC5zYXZlKCk7XG4gICAgXG4gICAgdGhpcy5kcmF3Q29tcG9uZW50cyhjdHgpO1xuICAgIFxuICAgIGN0eC5yZXN0b3JlKCk7XG4gIH1cblxuICBkcmF3Q29tcG9uZW50cyhjdHgpIHtcbiAgICBzdXBlci5kcmF3KGN0eCk7XG4gIH1cblxuICBnZXQgaGVpZ2h0KCkge1xuICAgIHJldHVybiAodGhpcy5tYXhIZWlnaHQgfHwgc3VwZXIuaGVpZ2h0KSArIHRoaXMuc3R5bGUucGFkZGluZztcbiAgfVxuXG4gIGdldCB3aWR0aCgpIHtcbiAgICByZXR1cm4gKHRoaXMubWF4V2lkdGggfHwgc3VwZXIud2lkdGgpICsgdGhpcy5zdHlsZS5wYWRkaW5nO1xuICB9XG5cbiAgZ2V0IGRlZmF1bHRTdHlsZSgpIHtcbiAgICByZXR1cm4gbmV3IFN0eWxlKHtcbiAgICAgIFwiYmFja2dyb3VuZENvbG9yXCI6IENvbnN0YW50cy5TZXR0aW5nLkJVVFRPTl9ERUZBVUxUX0JBQ0tHUk9VTkQsXG4gICAgICBcImJhY2tncm91bmRDb2xvckhvdmVyXCI6IENvbnN0YW50cy5TZXR0aW5nLkJVVFRPTl9ERUZBVUxUX0hPVkVSX0JBQ0tHUk9VTkQsXG4gICAgICBcImJhY2tncm91bmRDb2xvckRvd25cIjogQ29uc3RhbnRzLlNldHRpbmcuQlVUVE9OX0RFRkFVTFRfQ0xJQ0tfQkFDS0dST1VORCxcbiAgICAgIFwic2Nyb2xsWERpc2FibGVkXCI6IHRydWUsXG4gICAgICBcInNjcm9sbFlEaXNhYmxlZFwiOiB0cnVlXG4gICAgfSk7XG4gIH1cbn0iLCIvKlxuICogQ29weXJpZ2h0IChDKSAyMDIwIEVsaWFzdGlrIChlbGlhc3Rpa3NvZnRzLmNvbSlcbiAqXG4gKiBUaGlzIGZpbGUgaXMgcGFydCBvZiBcIkpTR2FtZVRvb2xzXCIuXG4gKlxuICogXCJKU0dhbWVUb29sc1wiIGlzIGZyZWUgc29mdHdhcmU6IHlvdSBjYW4gcmVkaXN0cmlidXRlIGl0IGFuZC9vciBtb2RpZnlcbiAqIGl0IHVuZGVyIHRoZSB0ZXJtcyBvZiB0aGUgR05VIEdlbmVyYWwgUHVibGljIExpY2Vuc2UgYXMgcHVibGlzaGVkIGJ5XG4gKiB0aGUgRnJlZSBTb2Z0d2FyZSBGb3VuZGF0aW9uLCBlaXRoZXIgdmVyc2lvbiAzIG9mIHRoZSBMaWNlbnNlLCBvclxuICogKGF0IHlvdXIgb3B0aW9uKSBhbnkgbGF0ZXIgdmVyc2lvbi5cbiAqXG4gKiBcIkpTR2FtZVRvb2xzXCIgaXMgZGlzdHJpYnV0ZWQgaW4gdGhlIGhvcGUgdGhhdCBpdCB3aWxsIGJlIHVzZWZ1bCxcbiAqIGJ1dCBXSVRIT1VUIEFOWSBXQVJSQU5UWTsgd2l0aG91dCBldmVuIHRoZSBpbXBsaWVkIHdhcnJhbnR5IG9mXG4gKiBNRVJDSEFOVEFCSUxJVFkgb3IgRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UuICBTZWUgdGhlXG4gKiBHTlUgR2VuZXJhbCBQdWJsaWMgTGljZW5zZSBmb3IgbW9yZSBkZXRhaWxzLlxuICpcbiAqIFlvdSBzaG91bGQgaGF2ZSByZWNlaXZlZCBhIGNvcHkgb2YgdGhlIEdOVSBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlXG4gKiBhbG9uZyB3aXRoIFwiSlNHYW1lVG9vbHNcIi4gIElmIG5vdCwgc2VlIDxodHRwOi8vd3d3LmdudS5vcmcvbGljZW5zZXMvPi5cbiAqL1xuaW1wb3J0IEltYWdlQ29udGFpbmVyIGZyb20gXCIuL0ltYWdlQ29udGFpbmVyXCI7XG5pbXBvcnQgQnV0dG9uIGZyb20gXCIuL0J1dHRvblwiO1xuaW1wb3J0IFN0eWxlIGZyb20gXCIuL1N0eWxlXCI7XG5pbXBvcnQgQ29uc3RhbnRzIGZyb20gXCIuL0NvbnN0YW50c1wiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBCdXR0b25JbWFnZSBleHRlbmRzIEJ1dHRvbiB7XG4gIGNvbnN0cnVjdG9yKGltZ1NyYywgeCwgeSwgYWxpZ25lbWVudCwgdmVydGljYWxBbGlnbmVtZW50LCB3aWR0aCwgaGVpZ2h0LCBiYWNrZ3JvdW5kQ29sb3IsIGJhY2tncm91bmRDb2xvckhvdmVyLCBpbWFnZUxvYWRlcikge1xuICAgIGNvbnN0IHN0eWxlID0gbmV3IFN0eWxlKHtcbiAgICAgIFwiYWxpZ25lbWVudFwiOiBhbGlnbmVtZW50LFxuICAgICAgXCJ2ZXJ0aWNhbEFsaWduZW1lbnRcIjogdmVydGljYWxBbGlnbmVtZW50LFxuICAgICAgXCJiYWNrZ3JvdW5kQ29sb3JcIjogYmFja2dyb3VuZENvbG9yIHx8IENvbnN0YW50cy5TZXR0aW5nLkJVVFRPTl9ERUZBVUxUX0JBQ0tHUk9VTkQsXG4gICAgICBcImJhY2tncm91bmRDb2xvckhvdmVyXCI6IGJhY2tncm91bmRDb2xvckhvdmVyIHx8IENvbnN0YW50cy5TZXR0aW5nLkJVVFRPTl9ERUZBVUxUX0hPVkVSX0JBQ0tHUk9VTkRcbiAgICB9KTtcblxuICAgIHN1cGVyKHgsIHksIHdpZHRoLCBoZWlnaHQsIHN0eWxlKTtcbiAgICB0aGlzLmltYWdlID0gbmV3IEltYWdlQ29udGFpbmVyKGltZ1NyYywgeCwgeSwgd2lkdGgsIGhlaWdodCwgbmV3IFN0eWxlKHsgXCJhbGlnbmVtZW50XCI6IFwiY2VudGVyXCIsIFwidmVydGljYWxBbGlnbmVtZW50XCI6IFwiY2VudGVyXCIgfSksIGltYWdlTG9hZGVyKTtcbiAgICB0aGlzLmFkZCh0aGlzLmltYWdlKTtcblxuICAgIGNvbnNvbGUgJiYgY29uc29sZS53YXJuICYmIGNvbnNvbGUud2FybihDb25zdGFudHMuU3RyaW5nLk5PVElDRV9NRVNTQUdFICsgXCIgXCIgKyBDb25zdGFudHMuU3RyaW5nLkJVVFRPTl9JTUFHRV9ERVBSRUNBVEVEKTtcbiAgfVxuXG4gIGxvYWRJbWFnZShpbWFnZUxvYWRlcikge1xuICAgIGlmKHRoaXMuY29tcG9uZW50c1swXSBpbnN0YW5jZW9mIEltYWdlQ29udGFpbmVyKSB0aGlzLmNvbXBvbmVudHNbMF0ubG9hZEltYWdlKGltYWdlTG9hZGVyKTtcbiAgfVxuXG4gIHNldCBtaW5XaWR0aCh3aWR0aCkge1xuICAgIHRoaXMuaW1hZ2Uud2lkdGggPSB3aWR0aDtcbiAgICBzdXBlci5taW5XaWR0aCA9IHdpZHRoO1xuICB9XG5cbiAgc2V0IG1pbkhlaWdodChoZWlnaHQpIHtcbiAgICB0aGlzLmltYWdlLmhlaWdodCA9IGhlaWdodDtcbiAgICBzdXBlci5taW5IZWlnaHQgPSBoZWlnaHQ7XG4gIH1cblxuICBnZXQgbWluV2lkdGgoKSB7XG4gICAgcmV0dXJuIHN1cGVyLm1pbldpZHRoO1xuICB9XG5cbiAgZ2V0IG1pbkhlaWdodCgpIHtcbiAgICByZXR1cm4gc3VwZXIubWluSGVpZ2h0O1xuICB9XG5cbiAgc2V0IG1heFdpZHRoKHdpZHRoKSB7XG4gICAgdGhpcy5pbWFnZS53aWR0aCA9IHdpZHRoO1xuICAgIHN1cGVyLm1heFdpZHRoID0gd2lkdGg7XG4gIH1cblxuICBzZXQgbWF4SGVpZ2h0KGhlaWdodCkge1xuICAgIHRoaXMuaW1hZ2UuaGVpZ2h0ID0gaGVpZ2h0O1xuICAgIHN1cGVyLm1heEhlaWdodCA9IGhlaWdodDtcbiAgfVxuXG4gIGdldCBtYXhXaWR0aCgpIHtcbiAgICByZXR1cm4gc3VwZXIubWF4V2lkdGg7XG4gIH1cblxuICBnZXQgbWF4SGVpZ2h0KCkge1xuICAgIHJldHVybiBzdXBlci5tYXhIZWlnaHQ7XG4gIH1cblxuICBzZXQgd2lkdGgod2lkdGgpIHtcbiAgICB0aGlzLm1pbldpZHRoID0gd2lkdGg7XG4gICAgdGhpcy5tYXhXaWR0aCA9IHdpZHRoO1xuICB9XG5cbiAgZ2V0IHdpZHRoKCkge1xuICAgIHJldHVybiBzdXBlci53aWR0aDtcbiAgfVxuXG4gIHNldCBoZWlnaHQoaGVpZ2h0KSB7XG4gICAgdGhpcy5taW5IZWlnaHQgPSBoZWlnaHQ7XG4gICAgdGhpcy5tYXhIZWlnaHQgPSBoZWlnaHQ7XG4gIH1cblxuICBnZXQgaGVpZ2h0KCkge1xuICAgIHJldHVybiBzdXBlci5oZWlnaHQ7XG4gIH1cbn0iLCIvKlxuICogQ29weXJpZ2h0IChDKSAyMDIwIEVsaWFzdGlrIChlbGlhc3Rpa3NvZnRzLmNvbSlcbiAqXG4gKiBUaGlzIGZpbGUgaXMgcGFydCBvZiBcIkpTR2FtZVRvb2xzXCIuXG4gKlxuICogXCJKU0dhbWVUb29sc1wiIGlzIGZyZWUgc29mdHdhcmU6IHlvdSBjYW4gcmVkaXN0cmlidXRlIGl0IGFuZC9vciBtb2RpZnlcbiAqIGl0IHVuZGVyIHRoZSB0ZXJtcyBvZiB0aGUgR05VIEdlbmVyYWwgUHVibGljIExpY2Vuc2UgYXMgcHVibGlzaGVkIGJ5XG4gKiB0aGUgRnJlZSBTb2Z0d2FyZSBGb3VuZGF0aW9uLCBlaXRoZXIgdmVyc2lvbiAzIG9mIHRoZSBMaWNlbnNlLCBvclxuICogKGF0IHlvdXIgb3B0aW9uKSBhbnkgbGF0ZXIgdmVyc2lvbi5cbiAqXG4gKiBcIkpTR2FtZVRvb2xzXCIgaXMgZGlzdHJpYnV0ZWQgaW4gdGhlIGhvcGUgdGhhdCBpdCB3aWxsIGJlIHVzZWZ1bCxcbiAqIGJ1dCBXSVRIT1VUIEFOWSBXQVJSQU5UWTsgd2l0aG91dCBldmVuIHRoZSBpbXBsaWVkIHdhcnJhbnR5IG9mXG4gKiBNRVJDSEFOVEFCSUxJVFkgb3IgRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UuICBTZWUgdGhlXG4gKiBHTlUgR2VuZXJhbCBQdWJsaWMgTGljZW5zZSBmb3IgbW9yZSBkZXRhaWxzLlxuICpcbiAqIFlvdSBzaG91bGQgaGF2ZSByZWNlaXZlZCBhIGNvcHkgb2YgdGhlIEdOVSBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlXG4gKiBhbG9uZyB3aXRoIFwiSlNHYW1lVG9vbHNcIi4gIElmIG5vdCwgc2VlIDxodHRwOi8vd3d3LmdudS5vcmcvbGljZW5zZXMvPi5cbiAqL1xuaW1wb3J0IENvbnN0YW50cyBmcm9tIFwiLi9Db25zdGFudHNcIjtcbmltcG9ydCBVdGlscyBmcm9tIFwiLi9VdGlsc1wiO1xuaW1wb3J0IFNjZW5lIGZyb20gXCIuL1NjZW5lXCI7XG5pbXBvcnQgUmVhY3RvckNhbnZhcyBmcm9tIFwiLi9SZWFjdG9yQ2FudmFzXCI7XG5pbXBvcnQgTWVudSBmcm9tIFwiLi9NZW51XCI7XG5pbXBvcnQgTGFiZWwgZnJvbSBcIi4vTGFiZWxcIjtcbmltcG9ydCBTdHlsZSBmcm9tIFwiLi9TdHlsZVwiO1xuaW1wb3J0IEJ1dHRvbiBmcm9tIFwiLi9CdXR0b25cIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ2FudmFzIHtcbiAgI2xhc3RGcmFtZVRpbWU7XG4gICNfd2lkdGg7XG4gICNfaGVpZ2h0O1xuXG4gIGNvbnN0cnVjdG9yKHNjZW5lLCBjYW52YXMsIHdpZHRoLCBoZWlnaHQsIGF1dG9SZXNpemUsIG1heEZQUykge1xuICAgIHRoaXMuY2FudmFzID0gY2FudmFzIHx8IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJjYW52YXNcIik7XG4gICAgdGhpcy5jb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIHRoaXMud2lkdGggPSB3aWR0aCB8fCBDb25zdGFudHMuU2V0dGluZy5DQU5WQVNfV0lEVEg7XG4gICAgdGhpcy5oZWlnaHQgPSBoZWlnaHQgfHwgQ29uc3RhbnRzLlNldHRpbmcuQ0FOVkFTX0hFSUdIVDtcbiAgICB0aGlzLnNjZW5lID0gc2NlbmU7XG4gICAgdGhpcy5jb250YWluZXIuYXBwZW5kQ2hpbGQodGhpcy5jYW52YXMpO1xuICAgIHRoaXMuc3RhcnRlZCA9IGZhbHNlO1xuICAgIHRoaXMuaW5pdCA9IGZhbHNlO1xuICAgIHRoaXMubWF4RlBTID0gbWF4RlBTIHx8IC0xO1xuICAgIHRoaXMuI2xhc3RGcmFtZVRpbWUgPSAwO1xuICAgIHRoaXMuaGFzRXJyb3IgPSBmYWxzZTtcbiAgICB0aGlzLmZ1bGxzY3JlZW4gPSBmYWxzZTtcbiAgICB0aGlzLmZ1bGxwYWdlID0gZmFsc2U7XG5cbiAgICAvLyBFcnJvciBtZXNzYWdlIHNjcmVlblxuICAgIGNvbnN0IGJ1dHRvblNjZW5lRXJyb3IgPSBuZXcgQnV0dG9uKG51bGwsIG51bGwsIG51bGwsIG51bGwsIG5ldyBTdHlsZSh7IFwiYWxpZ25lbWVudFwiOiBcImNlbnRlclwiLCBcImJhY2tncm91bmRDb2xvclwiOiBDb25zdGFudHMuU2V0dGluZy5CVVRUT05fREVGQVVMVF9BTFRFUk5BVElWRV9CQUNLR1JPVU5EIH0pLCBuZXcgTGFiZWwoQ29uc3RhbnRzLlN0cmluZy5SRVRSWSwgbnVsbCwgbnVsbCwgbmV3IFN0eWxlKHsgXCJmb250Q29sb3JcIjogXCJ3aGl0ZVwiLCBcImFsaWduZW1lbnRcIjogXCJjZW50ZXJcIiB9KSkpO1xuICAgIGNvbnN0IG1lbnVTY2VuZUVycm9yID0gbmV3IE1lbnUobmV3IFN0eWxlKHsgXCJzcGFjZUJldHdlZW5Db21wb25lbnRzXCI6IDE1IH0pLCBuZXcgTGFiZWwoQ29uc3RhbnRzLlN0cmluZy5FUlJPUl9NRVNTQUdFX0NBTlZBU19MQUJFTCwgbnVsbCwgbnVsbCwgbmV3IFN0eWxlKHsgXCJmb250Q29sb3JcIjogXCJ3aGl0ZVwiLCBcImFsaWduZW1lbnRcIjogXCJjZW50ZXJcIiB9KSksIGJ1dHRvblNjZW5lRXJyb3IpO1xuICAgIG1lbnVTY2VuZUVycm9yLmVuYWJsZSgpO1xuXG4gICAgdGhpcy5zY2VuZUVycm9yID0gbmV3IFNjZW5lKG1lbnVTY2VuZUVycm9yKTtcbiAgICB0aGlzLnNjZW5lUHJldmlvdXMgPSB0aGlzLnNjZW5lO1xuXG4gICAgYnV0dG9uU2NlbmVFcnJvci5hZGRDbGlja0FjdGlvbigoKSA9PiB7XG4gICAgICB0aGlzLmhhc0Vycm9yID0gZmFsc2U7XG4gICAgICB0aGlzLnNjZW5lID0gdGhpcy5zY2VuZVByZXZpb3VzXG4gICAgfSk7XG4gICAgXG4gICAgLy8gUmVhY3RvcnMvZXZlbnRzXG4gICAgdGhpcy5yZWFjdG9yID0gbmV3IFJlYWN0b3JDYW52YXMoKTtcbiAgICB0aGlzLnJlYWN0b3IucmVnaXN0ZXJFdmVudChcIm1vdXNlbW92ZVwiKTtcbiAgICB0aGlzLnJlYWN0b3IucmVnaXN0ZXJFdmVudChcImNsaWNrXCIpO1xuICAgIHRoaXMucmVhY3Rvci5yZWdpc3RlckV2ZW50KFwibW91c2Vkb3duXCIpO1xuICAgIHRoaXMucmVhY3Rvci5yZWdpc3RlckV2ZW50KFwibW91c2V1cFwiKTtcbiAgICB0aGlzLnJlYWN0b3IucmVnaXN0ZXJFdmVudChcIndoZWVsXCIpO1xuICAgIHRoaXMucmVhY3Rvci5yZWdpc3RlckV2ZW50KFwidG91Y2hzdGFydFwiKTtcbiAgICB0aGlzLnJlYWN0b3IucmVnaXN0ZXJFdmVudChcInRvdWNoZW5kXCIpO1xuICAgIHRoaXMucmVhY3Rvci5yZWdpc3RlckV2ZW50KFwidG91Y2htb3ZlXCIpO1xuXG4gICAgaWYoYXV0b1Jlc2l6ZSkgdGhpcy5hdXRvUmVzaXplKCk7XG4gICAgdGhpcy5jcmVhdGVFdmVudHMoKTtcblxuICAgIGlmKENvbnN0YW50cy5TZXR0aW5nLkRJU0FCTEVfT1BUSU1JWkFUSU9OUykge1xuICAgICAgY29uc29sZSAmJiBjb25zb2xlLmluZm8oQ29uc3RhbnRzLlN0cmluZy5OT1RJQ0VfTUVTU0FHRSArIFwiIFwiICsgQ29uc3RhbnRzLlN0cmluZy5PUFRJTUlaQVRJT05fRElTQUJMRUQpO1xuICAgIH1cblxuICAgIGlmKENvbnN0YW50cy5TZXR0aW5nLkRJU0FCTEVfQ09OVEFJTkVSU19DVVRUSU5HKSB7XG4gICAgICBjb25zb2xlICYmIGNvbnNvbGUuaW5mbyhDb25zdGFudHMuU3RyaW5nLk5PVElDRV9NRVNTQUdFICsgXCIgXCIgKyBDb25zdGFudHMuU3RyaW5nLkNPTlRBSU5FUl9DVVRUSU5HX0RJU0FCTEVEKTtcbiAgICB9XG4gIH1cblxuICBkcmF3KCkge1xuICAgIGNvbnN0IGN0eCA9IHRoaXMuY2FudmFzLmdldENvbnRleHQoXCIyZFwiKTtcbiAgICB0aGlzLmRyYXdDbGVhcihjdHgpO1xuICAgIHRoaXMuZHJhd1NjZW5lKGN0eCk7XG4gIH1cblxuICBkcmF3U2NlbmUoY3R4KSB7XG4gICAgaWYodGhpcy5zY2VuZSkge1xuICAgICAgdGhpcy5zY2VuZS5wYXJlbnQgPSB0aGlzO1xuICAgICAgdGhpcy5zY2VuZS5jYW52YXMgPSB0aGlzO1xuXG4gICAgICB0cnkge1xuICAgICAgICBjdHguc2NhbGUoQ29uc3RhbnRzLlNldHRpbmcuUElYRUxfUkFUSU8sIENvbnN0YW50cy5TZXR0aW5nLlBJWEVMX1JBVElPKTtcbiAgICAgICAgdGhpcy5zY2VuZS5kcmF3KGN0eCk7XG4gICAgICB9IGNhdGNoKGUpIHtcbiAgICAgICAgdGhpcy5oYXNFcnJvciA9IHRydWU7XG4gICAgICAgIHRoaXMuc2NlbmUgPSB0aGlzLnNjZW5lRXJyb3I7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoQ29uc3RhbnRzLlN0cmluZy5FUlJPUl9NRVNTQUdFICsgXCIgXCIgKyBDb25zdGFudHMuU3RyaW5nLkVSUk9SX01FU1NBR0VfQ0FOVkFTICsgXCJcXG5cIiwgZSk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgZHJhd0NsZWFyKGN0eCkge1xuICAgIFV0aWxzLmNsZWFyKGN0eCk7XG4gIH1cblxuICBzdGFydERyYXcoZnVuYykge1xuICAgIHRoaXMuc3RhcnRlZCA9IHRydWU7XG5cbiAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUodGltZSA9PiB7XG4gICAgICBpZih0aGlzLnN0YXJ0ZWQpIHtcbiAgICAgICAgY29uc3Qgb2Zmc2V0RnJhbWUgPSB0aW1lIC0gdGhpcy4jbGFzdEZyYW1lVGltZTtcblxuICAgICAgICB0aGlzLmZ1bGxzY3JlZW4gPSBkb2N1bWVudC5mdWxsc2NyZWVuRWxlbWVudCA9PSB0aGlzLmNhbnZhcyB8fCBkb2N1bWVudC5mdWxsc2NyZWVuRWxlbWVudCA9PSB0aGlzLmNvbnRhaW5lcjtcblxuICAgICAgICBpZihDb25zdGFudHMuU2V0dGluZy5FTkFCTEVfUElYRUxfUkFUSU9fUkVTSVpJTkcpIHtcbiAgICAgICAgICBDb25zdGFudHMuU2V0dGluZy5QSVhFTF9SQVRJTyA9IHdpbmRvdy5kZXZpY2VQaXhlbFJhdGlvOyAvLyBVcGRhdGUgdGhlIGRldmljZSBwaXhlbCByYXRpbywgb25seSBpbiBmdWxsc2NyZWVuIG1vZGUvZnVsbHBhZ2UgbW9kZVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIENvbnN0YW50cy5TZXR0aW5nLlBJWEVMX1JBVElPID0gMTtcbiAgICAgICAgfVxuXG4gICAgICAgIFV0aWxzLmF1dG9EUEkodGhpcy5jYW52YXMpO1xuXG4gICAgICAgIGlmKHRoaXMubWF4RlBTIDwgMSB8fCBvZmZzZXRGcmFtZSA+IDEwMDAgLyB0aGlzLm1heEZQUykge1xuICAgICAgICAgIHRoaXMuI2xhc3RGcmFtZVRpbWUgPSB0aW1lO1xuICAgICAgICAgIHRoaXMuZHJhdygpO1xuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICB0aGlzLnN0YXJ0RHJhdyhmdW5jKTtcbiAgICAgICAgaWYoZnVuYykgZnVuYygpO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgc3RvcERyYXcoKSB7XG4gICAgdGhpcy5zdGFydGVkID0gZmFsc2U7XG4gIH1cblxuICBhcHBlbmRUbyhlbGVtZW50KSB7XG4gICAgZWxlbWVudC5hcHBlbmRDaGlsZCh0aGlzLmNvbnRhaW5lcik7XG4gIH1cblxuICByZW1vdmUoZWxlbWVudCkge1xuICAgIGVsZW1lbnQucmVtb3ZlQ2hpbGQodGhpcy5jb250YWluZXIpO1xuICAgIHRoaXMuY29udGFpbmVyLnJlbW92ZUNoaWxkKHRoaXMuY2FudmFzKTtcbiAgfVxuXG4gIHRvZ2dsZUZ1bGxzY3JlZW4oKSB7XG4gICAgVXRpbHMudG9nZ2xlRnVsbHNjcmVlbih0aGlzLmNhbnZhcywgdGhpcy5jb250YWluZXIpO1xuICB9XG5cbiAgdG9nZ2xlRnVsbHBhZ2UoKSB7XG4gICAgVXRpbHMudG9nZ2xlRnVsbHBhZ2UodGhpcy5jYW52YXMsIHRoaXMuY29udGFpbmVyKTtcbiAgICB0aGlzLmZ1bGxwYWdlID0gIXRoaXMuZnVsbHBhZ2U7XG4gIH1cblxuICBhdXRvUmVzaXplKCkge1xuICAgIFV0aWxzLmVuYWJsZUF1dG9SZXNpemVDYW52YXModGhpcy5jYW52YXMsIHRoaXMuY29udGFpbmVyLCB0aGlzLndpZHRoLCB0aGlzLmhlaWdodCk7XG4gIH1cblxuICBnZXQgeCgpIHtcbiAgICByZXR1cm4gMDtcbiAgfVxuXG4gIGdldCB5KCkge1xuICAgIHJldHVybiAwO1xuICB9XG5cbiAgZ2V0IHdpZHRoKCkge1xuICAgIHJldHVybiB0aGlzLmNhbnZhcyA/IFV0aWxzLmdldENhbnZhc1dpZHRoKHRoaXMuY2FudmFzKSA6IHRoaXMuI193aWR0aDtcbiAgfVxuXG4gIGdldCBoZWlnaHQoKSB7XG4gICAgcmV0dXJuIHRoaXMuY2FudmFzID8gVXRpbHMuZ2V0Q2FudmFzSGVpZ2h0KHRoaXMuY2FudmFzKSA6IHRoaXMuI19oZWlnaHQ7XG4gIH1cblxuICBnZXQgc3R5bGUoKSB7XG4gICAgcmV0dXJuIHRoaXMuY2FudmFzID8gdGhpcy5jYW52YXMuc3R5bGUgOiBudWxsO1xuICB9XG5cbiAgc2V0IHdpZHRoKHdpZHRoKSB7XG4gICAgaWYod2lkdGggIT0gdGhpcy4jX3dpZHRoKSB7XG4gICAgICB0aGlzLiNfd2lkdGggPSB3aWR0aDtcbiAgICAgIHRoaXMuY2FudmFzLndpZHRoID0gd2lkdGg7XG4gICAgICB0aGlzLnNjZW5lICYmIHRoaXMuc2NlbmUucmVhY3Rvci5kaXNwYXRjaEV2ZW50KFwib25DaGFuZ2VcIiwgdGhpcyk7XG4gICAgfVxuICB9XG5cbiAgc2V0IGhlaWdodChoZWlnaHQpIHtcbiAgICBpZihoZWlnaHQgIT0gdGhpcy4jX2hlaWdodCkge1xuICAgICAgdGhpcy4jX2hlaWdodCA9IGhlaWdodDtcbiAgICAgIHRoaXMuY2FudmFzLmhlaWdodCA9IGhlaWdodDtcbiAgICAgIHRoaXMuc2NlbmUgJiYgdGhpcy5zY2VuZS5yZWFjdG9yLmRpc3BhdGNoRXZlbnQoXCJvbkNoYW5nZVwiLCB0aGlzKTtcbiAgICB9XG4gIH1cblxuICBnZXRDb250ZXh0KGNvbnRleHQpIHtcbiAgICByZXR1cm4gdGhpcy5jYW52YXMgPyB0aGlzLmNhbnZhcy5nZXRDb250ZXh0KGNvbnRleHQgPyBjb250ZXh0IDogXCIyZFwiKSA6IG51bGw7XG4gIH1cblxuICBjcmVhdGVFdmVudHMoKSB7XG4gICAgaWYoIXRoaXMuaW5pdCAmJiB0aGlzLmNhbnZhcykge1xuICAgICAgW1wibW91c2Vtb3ZlXCIsIFwiY2xpY2tcIiwgXCJtb3VzZWRvd25cIiwgXCJtb3VzZXVwXCIsIFwid2hlZWxcIl0uZm9yRWFjaChldmVudE5hbWUgPT4ge1xuICAgICAgICB0aGlzLmNhbnZhcy5hZGRFdmVudExpc3RlbmVyKGV2ZW50TmFtZSwgZXZlbnQgPT4ge1xuICAgICAgICAgIGNvbnN0IG1vdXNlUG9zaXRpb24gPSB0aGlzLmdldE1vdXNlUG9zKGV2ZW50KTtcbiAgICAgICAgICB0aGlzLmRvRXZlbnRzKGV2ZW50LCBldmVudE5hbWUsIG1vdXNlUG9zaXRpb24pO1xuICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIH0sIGZhbHNlKTtcbiAgICAgIH0pO1xuXG4gICAgICBbXCJ0b3VjaHN0YXJ0XCIsIFwidG91Y2htb3ZlXCIsIFwidG91Y2hlbmRcIl0uZm9yRWFjaChldmVudE5hbWUgPT4ge1xuICAgICAgICB0aGlzLmNhbnZhcy5hZGRFdmVudExpc3RlbmVyKGV2ZW50TmFtZSwgZXZlbnQgPT4ge1xuICAgICAgICAgIGNvbnN0IGNoYW5nZWRUb3VjaGVzID0gZXZlbnQuY2hhbmdlZFRvdWNoZXNbMF07XG4gICAgICAgICAgY29uc3QgcG9zaXRpb24gPSB0aGlzLmdldE1vdXNlUG9zKGNoYW5nZWRUb3VjaGVzKTtcbiAgICAgICAgICB0aGlzLmRvRXZlbnRzKGV2ZW50LCBldmVudE5hbWUsIHBvc2l0aW9uKTtcbiAgICAgICAgfSk7XG4gICAgICB9KTtcblxuICAgICAgdGhpcy5pbml0ID0gdHJ1ZTtcbiAgICB9XG4gIH1cblxuICBkb0V2ZW50cyhldmVudCwgZXZlbnROYW1lLCBwb3NpdGlvbikge1xuICAgIGNvbnN0IGNvbXBvbmVudHMgPSB0aGlzLmdldENvbXBvbmVudHNBdFBvc2l0aW9uKHBvc2l0aW9uKTsgLy8gR2V0IGFsbCBlbGVtZW50cyBhdCB0aGUgY3VycmVudCBwb3NpdGlvblxuICAgIHRoaXMucmVhY3Rvci5kaXNwYXRjaEV2ZW50KGV2ZW50TmFtZSwgZXZlbnQsIGZhbHNlKTsgLy8gRGlzcGF0Y2ggdG8gYWxsIGNvbXBvbmVudHMgdG8gZGlzYWJsZSB0aGVtIChjYWxsIHdpdGggZmFsc2UpXG4gICAgWy4uLmNvbXBvbmVudHNdLnJldmVyc2UoKS5mb3JFYWNoKGNvbXBvbmVudCA9PiB0aGlzLnJlYWN0b3IuZGlzcGF0Y2hFdmVudENvbXBvbmVudChldmVudE5hbWUsIGNvbXBvbmVudCwgZXZlbnQsIHRydWUpKTsgLy8gRGlzcGF0Y2ggdG8gY29tcG9uZW50IGRldGVjdGVkIHRvIGVuYWJsZSB0aGVtIChjYWxsIHdpdGggdHJ1ZSlcbiAgfVxuXG4gIGFkZEV2ZW50TGlzdGVuZXIoZXZlbnQsIGNvbXBvbmVudCwgY2FsbGJhY2spIHtcbiAgICB0aGlzLnJlYWN0b3IuYWRkRXZlbnRMaXN0ZW5lcihldmVudCwgY29tcG9uZW50LCBjYWxsYmFjayk7XG4gIH1cbiAgXG4gIGdldE1vdXNlUG9zKGV2ZW50KSB7XG4gICAgcmV0dXJuIFV0aWxzLmdldE1vdXNlUG9zKHRoaXMuY2FudmFzLCBldmVudCk7XG4gIH1cblxuICBnZXRBbGxDb21wb25lbnRzKHN0YXJ0ID0gdGhpcy5zY2VuZSkge1xuICAgIHJldHVybiB0aGlzLnNjZW5lLmdldEFsbENvbXBvbmVudHMoc3RhcnQpO1xuICB9XG5cbiAgZ2V0Q29tcG9uZW50c0F0UG9zaXRpb24obW91c2VQb3NpdGlvbiwgc3RhcnQgPSB0aGlzLnNjZW5lKSB7XG4gICAgY29uc3QgYWxsQ29tcG9uZW50cyA9IHRoaXMuc2NlbmUuZ2V0Q29tcG9uZW50c1RyZWUoc3RhcnQpO1xuICAgIGNvbnN0IHJlc3VsdCA9IFtzdGFydF07XG5cbiAgICBpZihhbGxDb21wb25lbnRzLmNoaWxkcykge1xuICAgICAgYWxsQ29tcG9uZW50cy5jaGlsZHMuc29ydChTY2VuZS5zb3J0Q29tcG9uZW50c1RyZWUpLnJldmVyc2UoKS5zb21lKGNoaWxkID0+IHtcbiAgICAgICAgaWYoY2hpbGQuY29tcG9uZW50LmlzSW5zaWRlKG1vdXNlUG9zaXRpb24pICYmICFjaGlsZC5jb21wb25lbnQuaGlkZGVuICYmICFjaGlsZC5jb21wb25lbnQuZGlzYWJsZWQpIHtcbiAgICAgICAgICByZXN1bHQucHVzaCguLi50aGlzLmdldENvbXBvbmVudHNBdFBvc2l0aW9uKG1vdXNlUG9zaXRpb24sIGNoaWxkLmNvbXBvbmVudCkpO1xuICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9XG5cbiAgICByZXR1cm4gcmVzdWx0O1xuICB9XG59IiwiLypcbiAqIENvcHlyaWdodCAoQykgMjAyMCBFbGlhc3RpayAoZWxpYXN0aWtzb2Z0cy5jb20pXG4gKlxuICogVGhpcyBmaWxlIGlzIHBhcnQgb2YgXCJKU0dhbWVUb29sc1wiLlxuICpcbiAqIFwiSlNHYW1lVG9vbHNcIiBpcyBmcmVlIHNvZnR3YXJlOiB5b3UgY2FuIHJlZGlzdHJpYnV0ZSBpdCBhbmQvb3IgbW9kaWZ5XG4gKiBpdCB1bmRlciB0aGUgdGVybXMgb2YgdGhlIEdOVSBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlIGFzIHB1Ymxpc2hlZCBieVxuICogdGhlIEZyZWUgU29mdHdhcmUgRm91bmRhdGlvbiwgZWl0aGVyIHZlcnNpb24gMyBvZiB0aGUgTGljZW5zZSwgb3JcbiAqIChhdCB5b3VyIG9wdGlvbikgYW55IGxhdGVyIHZlcnNpb24uXG4gKlxuICogXCJKU0dhbWVUb29sc1wiIGlzIGRpc3RyaWJ1dGVkIGluIHRoZSBob3BlIHRoYXQgaXQgd2lsbCBiZSB1c2VmdWwsXG4gKiBidXQgV0lUSE9VVCBBTlkgV0FSUkFOVFk7IHdpdGhvdXQgZXZlbiB0aGUgaW1wbGllZCB3YXJyYW50eSBvZlxuICogTUVSQ0hBTlRBQklMSVRZIG9yIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFLiAgU2VlIHRoZVxuICogR05VIEdlbmVyYWwgUHVibGljIExpY2Vuc2UgZm9yIG1vcmUgZGV0YWlscy5cbiAqXG4gKiBZb3Ugc2hvdWxkIGhhdmUgcmVjZWl2ZWQgYSBjb3B5IG9mIHRoZSBHTlUgR2VuZXJhbCBQdWJsaWMgTGljZW5zZVxuICogYWxvbmcgd2l0aCBcIkpTR2FtZVRvb2xzXCIuICBJZiBub3QsIHNlZSA8aHR0cDovL3d3dy5nbnUub3JnL2xpY2Vuc2VzLz4uXG4gKi9cbmltcG9ydCBDb21wb25lbnQgZnJvbSBcIi4vQ29tcG9uZW50XCI7XG5pbXBvcnQgQ29uc3RhbnRzIGZyb20gXCIuL0NvbnN0YW50c1wiO1xuaW1wb3J0IFV0aWxzIGZyb20gXCIuL1V0aWxzXCI7XG5pbXBvcnQgU3R5bGUgZnJvbSBcIi4vU3R5bGVcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ2lyY2xlIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgc2VsZWN0YWJsZSA9IGZhbHNlO1xuXG4gIGNvbnN0cnVjdG9yKHgsIHksIHdpZHRoLCBzdHlsZSkge1xuICAgIHN1cGVyKHgsIHksIHdpZHRoLCB3aWR0aCwgc3R5bGUpO1xuICB9XG5cbiAgZHJhdyhjb250ZXh0KSB7XG4gICAgaWYodGhpcy5oaWRkZW4pIHJldHVybjtcbiAgICBzdXBlci5kcmF3KGNvbnRleHQpO1xuXG4gICAgY29uc3QgY2FudmFzID0gY29udGV4dC5jYW52YXM7XG4gICAgY29uc3QgY3R4ID0gY2FudmFzLmdldENvbnRleHQoXCIyZFwiKTtcbiAgICBcbiAgICBVdGlscy5kcmF3Q2lyY2xlKGN0eCwgdGhpcy54LCB0aGlzLnksIHRoaXMud2lkdGgsIHRoaXMuc3R5bGUubGluZVdpZHRoLCB0aGlzLnN0eWxlLmNvbG9yLCB0aGlzLnN0eWxlLmxpbmVDYXAsIHRoaXMuc3R5bGUuZmlsbCwgdGhpcy5zdHlsZS5maWxsQ29sb3IpO1xuXG4gICAgdGhpcy5pbml0ID0gdHJ1ZTtcbiAgfVxuXG4gIGdldCB3aWR0aCgpIHtcbiAgICByZXR1cm4gc3VwZXIud2lkdGggKyB0aGlzLnN0eWxlLmxpbmVXaWR0aDtcbiAgfVxuXG4gIGdldCBoZWlnaHQoKSB7XG4gICAgcmV0dXJuIHN1cGVyLmhlaWdodCArIHRoaXMuc3R5bGUubGluZVdpZHRoO1xuICB9XG5cbiAgc2V0IHdpZHRoKHdpZHRoKSB7XG4gICAgc3VwZXIud2lkdGggPSB3aWR0aDtcbiAgfVxuXG4gIHNldCBoZWlnaHQoaGVpZ2h0KSB7XG4gICAgc3VwZXIuaGVpZ2h0ID0gaGVpZ2h0O1xuICB9XG5cbiAgZ2V0IGRlZmF1bHRTdHlsZSgpIHtcbiAgICByZXR1cm4gbmV3IFN0eWxlKHtcbiAgICAgIFwibGluZVdpZHRoXCI6IENvbnN0YW50cy5TZXR0aW5nLkNJUkNMRV9ERUZBVUxUX0xJTkVfU0laRSxcbiAgICAgIFwiY29sb3JcIjogQ29uc3RhbnRzLlNldHRpbmcuQ0lSQ0xFX0RFRkFVTFRfQ09MT1IsXG4gICAgICBcImZpbGxcIjogQ29uc3RhbnRzLlNldHRpbmcuQ0lSQ0xFX0RFRkFVTFRfRklMTCxcbiAgICAgIFwibGluZUNhcFwiOiBDb25zdGFudHMuU2V0dGluZy5DSVJDTEVfREVGQVVMVF9MSU5FX0NBUCxcbiAgICAgIFwiZmlsbENvbG9yXCI6IENvbnN0YW50cy5TZXR0aW5nLkNJUkNMRV9ERUZBVUxUX0ZJTExfQ09MT1JcbiAgICB9KTtcbiAgfVxufSIsIi8qXG4gKiBDb3B5cmlnaHQgKEMpIDIwMjAgRWxpYXN0aWsgKGVsaWFzdGlrc29mdHMuY29tKVxuICpcbiAqIFRoaXMgZmlsZSBpcyBwYXJ0IG9mIFwiSlNHYW1lVG9vbHNcIi5cbiAqXG4gKiBcIkpTR2FtZVRvb2xzXCIgaXMgZnJlZSBzb2Z0d2FyZTogeW91IGNhbiByZWRpc3RyaWJ1dGUgaXQgYW5kL29yIG1vZGlmeVxuICogaXQgdW5kZXIgdGhlIHRlcm1zIG9mIHRoZSBHTlUgR2VuZXJhbCBQdWJsaWMgTGljZW5zZSBhcyBwdWJsaXNoZWQgYnlcbiAqIHRoZSBGcmVlIFNvZnR3YXJlIEZvdW5kYXRpb24sIGVpdGhlciB2ZXJzaW9uIDMgb2YgdGhlIExpY2Vuc2UsIG9yXG4gKiAoYXQgeW91ciBvcHRpb24pIGFueSBsYXRlciB2ZXJzaW9uLlxuICpcbiAqIFwiSlNHYW1lVG9vbHNcIiBpcyBkaXN0cmlidXRlZCBpbiB0aGUgaG9wZSB0aGF0IGl0IHdpbGwgYmUgdXNlZnVsLFxuICogYnV0IFdJVEhPVVQgQU5ZIFdBUlJBTlRZOyB3aXRob3V0IGV2ZW4gdGhlIGltcGxpZWQgd2FycmFudHkgb2ZcbiAqIE1FUkNIQU5UQUJJTElUWSBvciBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRS4gIFNlZSB0aGVcbiAqIEdOVSBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlIGZvciBtb3JlIGRldGFpbHMuXG4gKlxuICogWW91IHNob3VsZCBoYXZlIHJlY2VpdmVkIGEgY29weSBvZiB0aGUgR05VIEdlbmVyYWwgUHVibGljIExpY2Vuc2VcbiAqIGFsb25nIHdpdGggXCJKU0dhbWVUb29sc1wiLiAgSWYgbm90LCBzZWUgPGh0dHA6Ly93d3cuZ251Lm9yZy9saWNlbnNlcy8+LlxuICovXG5pbXBvcnQgQ29tcG9uZW50IGZyb20gXCIuL0NvbXBvbmVudFwiO1xuaW1wb3J0IENvbnRhaW5lciBmcm9tIFwiLi9Db250YWluZXJcIjtcbmltcG9ydCBVdGlscyBmcm9tIFwiLi9VdGlsc1wiO1xuaW1wb3J0IENvbnN0YW50cyBmcm9tIFwiLi9Db25zdGFudHNcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ29sIGV4dGVuZHMgQ29udGFpbmVyIHtcbiAgc2VsZWN0YWJsZSA9IGZhbHNlO1xuICAjX2lubmVySGVpZ2h0ID0gMDtcbiAgI19pbm5lcldpZHRoID0gMDtcblxuICBjb25zdHJ1Y3Rvcih4LCB5LCBtYXhXaWR0aCwgbWF4SGVpZ2h0LCBzdHlsZSwgLi4uY29tcG9uZW50cykge1xuICAgIHN1cGVyKHgsIHksIG1heFdpZHRoLCBtYXhIZWlnaHQsIHN0eWxlLCAuLi5jb21wb25lbnRzKTtcblxuICAgIGlmKCFDb25zdGFudHMuU2V0dGluZy5ESVNBQkxFX0VYUEVSSU1FTlRBTF9PUFRJTUlaQVRJT05TKSB7XG4gICAgICB0aGlzLnVwZGF0ZUlubmVyV2lkdGgoKTtcbiAgICAgIHRoaXMudXBkYXRlSW5uZXJIZWlnaHQoKTtcbiAgXG4gICAgICB0aGlzLmFkZENoYW5nZUFjdGlvbigoKSA9PiB7XG4gICAgICAgIHRoaXMudXBkYXRlSW5uZXJXaWR0aCgpO1xuICAgICAgICB0aGlzLnVwZGF0ZUlubmVySGVpZ2h0KCk7XG4gICAgICB9KTtcbiAgICB9XG4gIH1cblxuICBkcmF3KGNvbnRleHQpIHtcbiAgICBpZih0aGlzLmhpZGRlbikgcmV0dXJuO1xuICAgIHN1cGVyLmRyYXcoY29udGV4dCk7XG5cbiAgICBjb25zdCBjYW52YXMgPSBjb250ZXh0LmNhbnZhcztcbiAgICBjb25zdCBjdHggPSBjYW52YXMuZ2V0Q29udGV4dChcIjJkXCIpO1xuICAgIGN0eC5zYXZlKCk7XG5cbiAgICBsZXQgY3R4VGVtcCA9IGN0eDtcblxuICAgIGlmKHRoaXMuaXNDdXR0aW5nKSB7XG4gICAgICBjdHhUZW1wID0gdGhpcy5jYW52YXNUbXAuZ2V0Q29udGV4dChcIjJkXCIpO1xuICAgICAgY3R4VGVtcC5zY2FsZShDb25zdGFudHMuU2V0dGluZy5QSVhFTF9SQVRJTywgQ29uc3RhbnRzLlNldHRpbmcuUElYRUxfUkFUSU8pO1xuICAgIH1cbiAgXG4gICAgaWYoc3VwZXIuY29tcG9uZW50cyAhPSBudWxsKSB7XG4gICAgICBsZXQgY3VycmVudFkgPSB0aGlzLnN0eWxlLnBhZGRpbmc7XG5cbiAgICAgIHN1cGVyLmNvbXBvbmVudHMuZm9yRWFjaChjb21wb25lbnQgPT4ge1xuICAgICAgICBjdXJyZW50WSA9IHRoaXMuZHJhd0NvbXBvbmVudChjb21wb25lbnQsIGN1cnJlbnRZLCBjdHhUZW1wKTtcbiAgICAgIH0pO1xuICAgIH1cbiAgICBcbiAgICBpZih0aGlzLmlzQ3V0dGluZykge1xuICAgICAgVXRpbHMuZHJhd0ltYWdlRGF0YShjdHgsIHRoaXMuY2FudmFzVG1wLCB0aGlzLngsIHRoaXMueSwgdGhpcy53aWR0aCwgdGhpcy5oZWlnaHQsIHRoaXMueCAqIENvbnN0YW50cy5TZXR0aW5nLlBJWEVMX1JBVElPLCB0aGlzLnkgKiBDb25zdGFudHMuU2V0dGluZy5QSVhFTF9SQVRJTywgdGhpcy53aWR0aCAqIENvbnN0YW50cy5TZXR0aW5nLlBJWEVMX1JBVElPLCB0aGlzLmhlaWdodCAqIENvbnN0YW50cy5TZXR0aW5nLlBJWEVMX1JBVElPKTtcbiAgICB9XG4gICAgXG4gICAgc3VwZXIuZHJhd1Njcm9sbGJhcnMoY3R4KTtcbiAgICBcbiAgICBjdHgucmVzdG9yZSgpO1xuICB9XG5cbiAgZHJhd0NvbXBvbmVudChjb21wb25lbnQsIGN1cnJlbnRZLCBjdHgpIHtcbiAgICBpZihjb21wb25lbnQgaW5zdGFuY2VvZiBDb21wb25lbnQpIHtcbiAgICAgIGNvbXBvbmVudC54ID0gdGhpcy5zdHlsZS5wYWRkaW5nIC0gdGhpcy5vZmZzZXRTY3JvbGxYO1xuICAgICAgY29tcG9uZW50LnkgPSBjdXJyZW50WSAtIHRoaXMub2Zmc2V0U2Nyb2xsWTtcbiAgICAgIFxuICAgICAgaWYoIWNvbXBvbmVudC5oaWRkZW4pIHtcbiAgICAgICAgaWYodGhpcy5pc0NvbXBvbmVudFZpc2libGUoY29tcG9uZW50KSkge1xuICAgICAgICAgIGNvbXBvbmVudC5lbmFibGUoKTtcbiAgICAgICAgICBjb21wb25lbnQuZHJhdyhjdHgpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGNvbXBvbmVudC5kaXNhYmxlKCk7XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgIGN1cnJlbnRZICs9IGNvbXBvbmVudC5oZWlnaHQgKyB0aGlzLnN0eWxlLnNwYWNlQmV0d2VlbkNvbXBvbmVudHM7XG4gICAgICB9XG4gICAgfVxuICAgIFxuICAgIHJldHVybiBjdXJyZW50WTtcbiAgfVxuXG4gIHVwZGF0ZUlubmVySGVpZ2h0KCkge1xuICAgIGxldCB0b3RhbEhlaWdodCA9IDA7XG4gICAgc3VwZXIuY29tcG9uZW50cy5mb3JFYWNoKGNvbXBvbmVudCA9PiB7IGlmKCFjb21wb25lbnQuaGlkZGVuKSB0b3RhbEhlaWdodCArPSBjb21wb25lbnQuaGVpZ2h0IH0pO1xuICAgIHRoaXMuI19pbm5lckhlaWdodCA9IHRvdGFsSGVpZ2h0ICsgdGhpcy5zdHlsZS5zcGFjZUJldHdlZW5Db21wb25lbnRzICogKHN1cGVyLmNvbXBvbmVudHMubGVuZ3RoIC0gMSkgKyB0aGlzLnN0eWxlLnBhZGRpbmc7XG4gIH1cblxuICB1cGRhdGVJbm5lcldpZHRoKCkge1xuICAgIGxldCBtYXhXaWR0aCA9IDA7XG4gICAgc3VwZXIuY29tcG9uZW50cy5mb3JFYWNoKGNvbXBvbmVudCA9PiB7IGlmKGNvbXBvbmVudC53aWR0aCA+IG1heFdpZHRoICYmICFjb21wb25lbnQuaGlkZGVuKSBtYXhXaWR0aCA9IGNvbXBvbmVudC53aWR0aDsgfSk7XG4gICAgdGhpcy4jX2lubmVyV2lkdGggPSBtYXhXaWR0aCArIHRoaXMuc3R5bGUucGFkZGluZztcbiAgfVxuXG4gIGdldCBpbm5lckhlaWdodCgpIHtcbiAgICBpZihDb25zdGFudHMuU2V0dGluZy5ESVNBQkxFX0VYUEVSSU1FTlRBTF9PUFRJTUlaQVRJT05TKSB0aGlzLnVwZGF0ZUlubmVySGVpZ2h0KCk7XG4gICAgcmV0dXJuIHRoaXMuI19pbm5lckhlaWdodDtcbiAgfVxuXG4gIGdldCBpbm5lcldpZHRoKCkge1xuICAgIGlmKENvbnN0YW50cy5TZXR0aW5nLkRJU0FCTEVfRVhQRVJJTUVOVEFMX09QVElNSVpBVElPTlMpIHRoaXMudXBkYXRlSW5uZXJXaWR0aCgpO1xuICAgIHJldHVybiB0aGlzLiNfaW5uZXJXaWR0aDtcbiAgfVxuXG4gIGdldCB3aWR0aCgpIHtcbiAgICBjb25zdCB3aWR0aCA9IHRoaXMuaW5uZXJXaWR0aCB8fCAodGhpcy5wYXJlbnQgJiYgdGhpcy5wYXJlbnQud2lkdGgpO1xuICAgIGNvbnN0IG1pbiA9IHRoaXMubWF4V2lkdGggPyBNYXRoLm1pbih0aGlzLm1heFdpZHRoLCB3aWR0aCkgOiBudWxsO1xuICAgIHJldHVybiB0aGlzLm1pbldpZHRoID8gTWF0aC5tYXgodGhpcy5taW5XaWR0aCwgbWluIHx8IHdpZHRoKSA6IG1pbiB8fCB3aWR0aDtcbiAgfVxuXG4gIGdldCBoZWlnaHQoKSB7XG4gICAgY29uc3QgaGVpZ2h0ID0gdGhpcy5pbm5lckhlaWdodCB8fCAodGhpcy5wYXJlbnQgJiYgdGhpcy5wYXJlbnQuaGVpZ2h0KTtcbiAgICBjb25zdCBtaW4gPSB0aGlzLm1heEhlaWdodCA/IE1hdGgubWluKHRoaXMubWF4SGVpZ2h0LCBoZWlnaHQpIDogbnVsbDtcbiAgICByZXR1cm4gdGhpcy5taW5IZWlnaHQgPyBNYXRoLm1heCh0aGlzLm1pbkhlaWdodCwgbWluIHx8IGhlaWdodCkgOiBtaW4gfHwgaGVpZ2h0O1xuICB9XG5cbiAgZ2V0IGRlZmF1bHRTdHlsZSgpIHtcbiAgICByZXR1cm4gc3VwZXIuZGVmYXVsdFN0eWxlO1xuICB9XG59IiwiLypcbiAqIENvcHlyaWdodCAoQykgMjAyMCBFbGlhc3RpayAoZWxpYXN0aWtzb2Z0cy5jb20pXG4gKlxuICogVGhpcyBmaWxlIGlzIHBhcnQgb2YgXCJKU0dhbWVUb29sc1wiLlxuICpcbiAqIFwiSlNHYW1lVG9vbHNcIiBpcyBmcmVlIHNvZnR3YXJlOiB5b3UgY2FuIHJlZGlzdHJpYnV0ZSBpdCBhbmQvb3IgbW9kaWZ5XG4gKiBpdCB1bmRlciB0aGUgdGVybXMgb2YgdGhlIEdOVSBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlIGFzIHB1Ymxpc2hlZCBieVxuICogdGhlIEZyZWUgU29mdHdhcmUgRm91bmRhdGlvbiwgZWl0aGVyIHZlcnNpb24gMyBvZiB0aGUgTGljZW5zZSwgb3JcbiAqIChhdCB5b3VyIG9wdGlvbikgYW55IGxhdGVyIHZlcnNpb24uXG4gKlxuICogXCJKU0dhbWVUb29sc1wiIGlzIGRpc3RyaWJ1dGVkIGluIHRoZSBob3BlIHRoYXQgaXQgd2lsbCBiZSB1c2VmdWwsXG4gKiBidXQgV0lUSE9VVCBBTlkgV0FSUkFOVFk7IHdpdGhvdXQgZXZlbiB0aGUgaW1wbGllZCB3YXJyYW50eSBvZlxuICogTUVSQ0hBTlRBQklMSVRZIG9yIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFLiAgU2VlIHRoZVxuICogR05VIEdlbmVyYWwgUHVibGljIExpY2Vuc2UgZm9yIG1vcmUgZGV0YWlscy5cbiAqXG4gKiBZb3Ugc2hvdWxkIGhhdmUgcmVjZWl2ZWQgYSBjb3B5IG9mIHRoZSBHTlUgR2VuZXJhbCBQdWJsaWMgTGljZW5zZVxuICogYWxvbmcgd2l0aCBcIkpTR2FtZVRvb2xzXCIuICBJZiBub3QsIHNlZSA8aHR0cDovL3d3dy5nbnUub3JnL2xpY2Vuc2VzLz4uXG4gKi9cbmltcG9ydCBDb25zdGFudHMgZnJvbSBcIi4vQ29uc3RhbnRzXCI7XG5pbXBvcnQgU3R5bGUgZnJvbSBcIi4vU3R5bGVcIjtcbmltcG9ydCBSZWFjdG9yIGZyb20gXCIuL1JlYWN0b3JcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ29tcG9uZW50IHtcbiAgc2VsZWN0YWJsZSA9IHRydWU7XG4gICNfd2lkdGggPSAwO1xuICAjX2hlaWdodCA9IDA7XG4gICNfeCA9IDA7XG4gICNfeSA9IDA7XG4gICNfZGlzYWJsZWQgPSBmYWxzZTtcbiAgI19zZWxlY3RlZCA9IGZhbHNlO1xuICAjX3N0eWxlO1xuXG4gIGNvbnN0cnVjdG9yKHgsIHksIHdpZHRoLCBoZWlnaHQsIHN0eWxlKSB7XG4gICAgdGhpcy4jX3ggPSB4IHx8IDA7XG4gICAgdGhpcy4jX3kgPSB5IHx8IDA7XG4gICAgdGhpcy4jX3dpZHRoID0gd2lkdGg7XG4gICAgdGhpcy4jX2hlaWdodCA9IGhlaWdodDtcbiAgICB0aGlzLmNhbnZhcztcbiAgICB0aGlzLnBhcmVudDtcblxuICAgIC8vIFN0eWxlXG4gICAgdGhpcy5zdHlsZSA9IHN0eWxlO1xuICAgIFxuICAgIC8vIEZ1bmN0aW9ucyB0cmlnZ2VyZWQgYnkgZXZlbnRzXG4gICAgdGhpcy5yZWFjdG9yID0gbmV3IFJlYWN0b3IoKTtcbiAgICB0aGlzLnJlYWN0b3IucmVnaXN0ZXJFdmVudChcIm9uQ2xpY2tcIik7XG4gICAgdGhpcy5yZWFjdG9yLnJlZ2lzdGVyRXZlbnQoXCJvbkhvdmVyXCIpO1xuICAgIHRoaXMucmVhY3Rvci5yZWdpc3RlckV2ZW50KFwib25Eb3duXCIpO1xuICAgIHRoaXMucmVhY3Rvci5yZWdpc3RlckV2ZW50KFwib25TY3JvbGxcIik7XG4gICAgdGhpcy5yZWFjdG9yLnJlZ2lzdGVyRXZlbnQoXCJvbk1vdmVcIik7XG4gICAgdGhpcy5yZWFjdG9yLnJlZ2lzdGVyRXZlbnQoXCJvblVwXCIpO1xuICAgIHRoaXMucmVhY3Rvci5yZWdpc3RlckV2ZW50KFwib25DaGFuZ2VcIik7XG5cbiAgICAvLyBTdGF0ZVxuICAgIHRoaXMuaW5pdCA9IGZhbHNlO1xuICAgIHRoaXMuaGFzSW5pdEV2ZW50cyA9IGZhbHNlO1xuICAgIHRoaXMuI19zZWxlY3RlZCA9IGZhbHNlO1xuICAgIHRoaXMuY2xpY2tlZCA9IGZhbHNlO1xuICAgIHRoaXMuaG92ZXJlZCA9IGZhbHNlO1xuICAgIHRoaXMuI19kaXNhYmxlZCA9IGZhbHNlO1xuXG4gICAgLy8gU2Nyb2xsIHN0YXRlXG4gICAgdGhpcy5vZmZzZXRTY3JvbGxYID0gMDtcbiAgICB0aGlzLm9mZnNldFNjcm9sbFkgPSAwO1xuXG4gICAgLy8gTW92ZSBldmVudFxuICAgIHRoaXMub2Zmc2V0TW92ZVggPSAwO1xuICAgIHRoaXMub2Zmc2V0TW92ZVkgPSAwO1xuICAgIHRoaXMubW92ZUV2ZW50U3RhcnRYID0gMDtcbiAgICB0aGlzLm1vdmVFdmVudFN0YXJ0WSA9IDA7XG5cbiAgICAvLyBUb3VjaCBldmVudHNcbiAgICB0aGlzLnRvdWNoRXZlbnRTdGFydFggPSAwO1xuICAgIHRoaXMudG91Y2hFdmVudFN0YXJ0WSA9IDA7XG4gICAgdGhpcy50b3VjaEV2ZW50U3RhcnRUaW1lc3RhbXAgPSAwO1xuXG4gICAgdGhpcy50b29sdGlwO1xuICAgIHRoaXMuaW5pdEV2ZW50cygpO1xuICB9XG5cbiAgaW5pdEV2ZW50cygpIHtcbiAgICBpZighdGhpcy5oYXNJbml0RXZlbnRzICYmIHRoaXMuY2FudmFzICE9IG51bGwpIHtcbiAgICAgIHRoaXMuY2FudmFzLmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZW1vdmVcIiwgdGhpcywgKGV2ZW50LCByZXN1bHQpID0+IHtcbiAgICAgICAgaWYoIXRoaXMuZGlzYWJsZWQpIHtcbiAgICAgICAgICBjb25zdCBtb3VzZVBvc2l0aW9uID0gdGhpcy5nZXRNb3VzZVBvcyhldmVudCk7XG5cbiAgICAgICAgICBpZih0aGlzLmNsaWNrZWQpIHtcbiAgICAgICAgICAgIGNvbnN0IGRlbHRhWCA9IC1ldmVudC5tb3ZlbWVudFg7XG4gICAgICAgICAgICBjb25zdCBkZWx0YVkgPSAtZXZlbnQubW92ZW1lbnRZO1xuXG4gICAgICAgICAgICB0aGlzLm9mZnNldE1vdmVYICs9IGRlbHRhWDtcbiAgICAgICAgICAgIHRoaXMub2Zmc2V0TW92ZVkgKz0gZGVsdGFZO1xuXG4gICAgICAgICAgICBpZih0aGlzLnJlYWN0b3IpIHtcbiAgICAgICAgICAgICAgdGhpcy5yZWFjdG9yLmRpc3BhdGNoRXZlbnQoXCJvbk1vdmVcIiwgZGVsdGFYLCBkZWx0YVksIG1vdXNlUG9zaXRpb24pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgXG4gICAgICAgICAgICB0aGlzLm1vdmVFdmVudFN0YXJ0WCA9IG1vdXNlUG9zaXRpb24ueDtcbiAgICAgICAgICAgIHRoaXMubW92ZUV2ZW50U3RhcnRZID0gbW91c2VQb3NpdGlvbi55O1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGlmKHJlc3VsdCkge1xuICAgICAgICAgICAgaWYodGhpcy5yZWFjdG9yICYmICF0aGlzLmRpc2FibGVkKSB7XG4gICAgICAgICAgICAgIHRoaXMucmVhY3Rvci5kaXNwYXRjaEV2ZW50KFwib25Ib3ZlclwiLCBtb3VzZVBvc2l0aW9uKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYodGhpcy50b29sdGlwKSB7XG4gICAgICAgICAgICAgIHRoaXMudG9vbHRpcC54ID0gbW91c2VQb3NpdGlvbi54ICsgMTA7XG4gICAgICAgICAgICAgIHRoaXMudG9vbHRpcC55ID0gbW91c2VQb3NpdGlvbi55ICsgMTA7XG4gICAgICAgICAgICAgIHRoaXMudG9vbHRpcC5lbmFibGUoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIFxuICAgICAgICAgICAgdGhpcy5ob3ZlcmVkID0gdHJ1ZTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5ob3ZlcmVkID0gZmFsc2U7XG4gICAgICAgICAgICBpZih0aGlzLnRvb2x0aXApIHRoaXMudG9vbHRpcC5kaXNhYmxlKClcbiAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdGhpcy5ob3ZlcmVkID0gZmFsc2U7XG4gICAgICAgICAgdGhpcy5jbGlja2VkID0gZmFsc2U7XG4gICAgICAgICAgaWYodGhpcy50b29sdGlwKSB0aGlzLnRvb2x0aXAuZGlzYWJsZSgpO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICAgIFxuICAgICAgdGhpcy5jYW52YXMuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIHRoaXMsIChldmVudCwgcmVzdWx0KSA9PiB7XG4gICAgICAgIGlmKCF0aGlzLmRpc2FibGVkKSB7XG4gICAgICAgICAgY29uc3QgbW91c2VQb3NpdGlvbiA9IHRoaXMuZ2V0TW91c2VQb3MoZXZlbnQpO1xuXG4gICAgICAgICAgaWYocmVzdWx0ICYmIHRoaXMuaG92ZXJlZCkge1xuICAgICAgICAgICAgaWYodGhpcy5yZWFjdG9yKSB7XG4gICAgICAgICAgICAgIHRoaXMucmVhY3Rvci5kaXNwYXRjaEV2ZW50KFwib25DbGlja1wiLCBtb3VzZVBvc2l0aW9uKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgdGhpcy5zZWxlY3RlZCA9IHRydWU7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuY2xpY2tlZCA9IGZhbHNlO1xuICAgICAgICAgICAgdGhpcy5zZWxlY3RlZCA9IGZhbHNlO1xuICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB0aGlzLmhvdmVyZWQgPSBmYWxzZTtcbiAgICAgICAgICB0aGlzLmNsaWNrZWQgPSBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgICBcbiAgICAgIHRoaXMuY2FudmFzLmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZWRvd25cIiwgdGhpcywgKGV2ZW50LCByZXN1bHQpID0+IHtcbiAgICAgICAgaWYoIXRoaXMuZGlzYWJsZWQpIHtcbiAgICAgICAgICBjb25zdCBtb3VzZVBvc2l0aW9uID0gdGhpcy5nZXRNb3VzZVBvcyhldmVudCk7XG5cbiAgICAgICAgICBpZihyZXN1bHQpIHtcbiAgICAgICAgICAgIGlmKHRoaXMucmVhY3Rvcikge1xuICAgICAgICAgICAgICB0aGlzLnJlYWN0b3IuZGlzcGF0Y2hFdmVudChcIm9uRG93blwiLCBtb3VzZVBvc2l0aW9uKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIFxuICAgICAgICAgICAgdGhpcy5jbGlja2VkID0gdHJ1ZTtcbiAgICAgICAgICAgIHRoaXMubW92ZUV2ZW50U3RhcnRYID0gbW91c2VQb3NpdGlvbi54O1xuICAgICAgICAgICAgdGhpcy5tb3ZlRXZlbnRTdGFydFkgPSBtb3VzZVBvc2l0aW9uLnk7XG4gICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHRoaXMuaG92ZXJlZCA9IGZhbHNlO1xuICAgICAgICAgIHRoaXMuY2xpY2tlZCA9IGZhbHNlO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICAgIFxuICAgICAgdGhpcy5jYW52YXMuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNldXBcIiwgdGhpcywgKGV2ZW50KSA9PiB7XG4gICAgICAgIGlmKCF0aGlzLmRpc2FibGVkKSB7XG4gICAgICAgICAgY29uc3QgbW91c2VQb3NpdGlvbiA9IHRoaXMuZ2V0TW91c2VQb3MoZXZlbnQpO1xuXG4gICAgICAgICAgaWYodGhpcy5yZWFjdG9yKSB7XG4gICAgICAgICAgICB0aGlzLnJlYWN0b3IuZGlzcGF0Y2hFdmVudChcIm9uVXBcIiwgbW91c2VQb3NpdGlvbik7XG4gICAgICAgICAgfVxuICAgICAgICAgIFxuICAgICAgICAgIHRoaXMuY2xpY2tlZCA9IGZhbHNlO1xuICAgICAgICB9XG4gICAgICB9KTtcblxuICAgICAgdGhpcy5jYW52YXMuYWRkRXZlbnRMaXN0ZW5lcihcIndoZWVsXCIsIHRoaXMsIChldmVudCkgPT4ge1xuICAgICAgICBpZih0aGlzLmhvdmVyZWQgJiYgIXRoaXMuZGlzYWJsZWQgJiYgIXRoaXMuc2Nyb2xsRGlzYWJsZWQpIHtcbiAgICAgICAgICB0aGlzLm9mZnNldFNjcm9sbFggKz0gZXZlbnQuZGVsdGFYO1xuICAgICAgICAgIHRoaXMub2Zmc2V0U2Nyb2xsWSArPSBldmVudC5kZWx0YVk7XG5cbiAgICAgICAgICBpZih0aGlzLnJlYWN0b3IpIHtcbiAgICAgICAgICAgIHRoaXMucmVhY3Rvci5kaXNwYXRjaEV2ZW50KFwib25TY3JvbGxcIiwgZXZlbnQuZGVsdGFYLCBldmVudC5kZWx0YVkpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfSk7XG5cbiAgICAgIGNvbnN0IHRvdWNoU2Nyb2xsRXZlbnQgPSAoZXZlbnQpID0+IHtcbiAgICAgICAgY29uc3QgY2hhbmdlZFRvdWNoZXMgPSBldmVudC5jaGFuZ2VkVG91Y2hlc1swXTtcbiAgICAgICAgY29uc3QgcG9zaXRpb24gPSB0aGlzLmdldE1vdXNlUG9zKGNoYW5nZWRUb3VjaGVzKTtcblxuICAgICAgICBpZih0aGlzLmhvdmVyZWQgJiYgIXRoaXMuZGlzYWJsZWQgJiYgIXRoaXMuc2Nyb2xsRGlzYWJsZWQpIHtcbiAgICAgICAgICBjb25zdCBkZWx0YVggPSB0aGlzLnRvdWNoRXZlbnRTdGFydFggLSBwb3NpdGlvbi54O1xuICAgICAgICAgIGNvbnN0IGRlbHRhWSA9IHRoaXMudG91Y2hFdmVudFN0YXJ0WSAtIHBvc2l0aW9uLnk7XG5cbiAgICAgICAgICB0aGlzLm9mZnNldFNjcm9sbFggKz0gZGVsdGFYO1xuICAgICAgICAgIHRoaXMub2Zmc2V0U2Nyb2xsWSArPSBkZWx0YVk7XG5cbiAgICAgICAgICBpZih0aGlzLnJlYWN0b3IpIHtcbiAgICAgICAgICAgIHRoaXMucmVhY3Rvci5kaXNwYXRjaEV2ZW50KFwib25TY3JvbGxcIiwgZGVsdGFYLCBkZWx0YVksIHBvc2l0aW9uKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgXG4gICAgICAgICAgdGhpcy50b3VjaEV2ZW50U3RhcnRYID0gcG9zaXRpb24ueDtcbiAgICAgICAgICB0aGlzLnRvdWNoRXZlbnRTdGFydFkgPSBwb3NpdGlvbi55O1xuICAgICAgICB9XG4gICAgICB9O1xuXG4gICAgICBjb25zdCB0b3VjaFN0YXJ0RW5kRXZlbnQgPSAoZXZlbnQsIHJlc3VsdCkgPT4ge1xuICAgICAgICBjb25zdCBjaGFuZ2VkVG91Y2hlcyA9IGV2ZW50LmNoYW5nZWRUb3VjaGVzWzBdO1xuICAgICAgICBjb25zdCBwb3NpdGlvbiA9IHRoaXMuZ2V0TW91c2VQb3MoY2hhbmdlZFRvdWNoZXMpO1xuICAgICAgICBcbiAgICAgICAgaWYocmVzdWx0KSB7XG4gICAgICAgICAgdGhpcy5ob3ZlcmVkID0gdHJ1ZTtcbiAgICAgICAgICB0aGlzLnNlbGVjdGVkID0gdHJ1ZTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB0aGlzLmhvdmVyZWQgPSBmYWxzZTtcbiAgICAgICAgICB0aGlzLnNlbGVjdGVkID0gZmFsc2U7XG4gICAgICAgIH1cblxuICAgICAgICBpZih0aGlzLmhvdmVyZWQgJiYgIXRoaXMuZGlzYWJsZWQpIHtcbiAgICAgICAgICB0aGlzLnRvdWNoRXZlbnRTdGFydFggPSBwb3NpdGlvbi54O1xuICAgICAgICAgIHRoaXMudG91Y2hFdmVudFN0YXJ0WSA9IHBvc2l0aW9uLnk7XG4gICAgICAgICAgdGhpcy50b3VjaEV2ZW50U3RhcnRUaW1lc3RhbXAgPSBldmVudC50aW1lc3RhbXA7XG4gICAgICAgIH1cbiAgICAgIH07XG5cbiAgICAgIHRoaXMuY2FudmFzLmFkZEV2ZW50TGlzdGVuZXIoXCJ0b3VjaHN0YXJ0XCIsIHRoaXMsIHRvdWNoU3RhcnRFbmRFdmVudCk7XG4gICAgICB0aGlzLmNhbnZhcy5hZGRFdmVudExpc3RlbmVyKFwidG91Y2hlbmRcIiwgdGhpcywgdG91Y2hTdGFydEVuZEV2ZW50KTtcblxuICAgICAgdGhpcy5jYW52YXMuYWRkRXZlbnRMaXN0ZW5lcihcInRvdWNobW92ZVwiLCB0aGlzLCAoZXZlbnQpID0+IHtcbiAgICAgICAgdG91Y2hTY3JvbGxFdmVudChldmVudCk7XG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICB9KTtcblxuICAgICAgdGhpcy5oYXNJbml0RXZlbnRzID0gdHJ1ZTtcbiAgICB9XG4gIH1cblxuICBkcmF3KGNvbnRleHQpIHtcbiAgICBpZih0aGlzLmhpZGRlbikgcmV0dXJuO1xuICAgIHRoaXMuaW5pdEV2ZW50cygpO1xuXG4gICAgaWYodGhpcy5kaXNhYmxlZCkge1xuICAgICAgdGhpcy5zZWxlY3RlZCA9IGZhbHNlO1xuICAgICAgdGhpcy5jbGlja2VkID0gZmFsc2U7XG4gICAgICB0aGlzLmhvdmVyZWQgPSBmYWxzZTtcbiAgICAgIGlmKHRoaXMudG9vbHRpcCkgdGhpcy50b29sdGlwLmRpc2FibGVkID0gdHJ1ZTtcbiAgICB9XG4gIH1cbiAgXG4gIGdldE1vdXNlUG9zKGV2ZW50KSB7XG4gICAgcmV0dXJuIHRoaXMuY2FudmFzLmdldE1vdXNlUG9zKGV2ZW50KTtcbiAgfVxuICBcbiAgaXNJbnNpZGUocG9zKSB7XG4gICAgcmV0dXJuIHBvcy54ID4gdGhpcy54ICYmIHBvcy54IDwgdGhpcy54ICsgdGhpcy53aWR0aCAmJiBwb3MueSA8IHRoaXMueSArIHRoaXMuaGVpZ2h0ICYmIHBvcy55ID4gdGhpcy55O1xuICB9XG4gIFxuICBkaXNhYmxlKCkge1xuICAgIHRoaXMuZGlzYWJsZWQgPSB0cnVlO1xuICAgIHJldHVybiB0cnVlO1xuICB9XG4gIFxuICBlbmFibGUoKSB7XG4gICAgdGhpcy5kaXNhYmxlZCA9IGZhbHNlO1xuICAgIHJldHVybiB0cnVlO1xuICB9XG5cbiAgZ2V0IGRpc2FibGVkKCkge1xuICAgIHJldHVybiB0aGlzLiNfZGlzYWJsZWQgfHwgKHRoaXMucGFyZW50ICYmIHRoaXMucGFyZW50LmRpc2FibGVkKTtcbiAgfVxuXG4gIHNldCBkaXNhYmxlZChkaXNhYmxlZCkge1xuICAgIGlmKGRpc2FibGVkICE9IHRoaXMuI19kaXNhYmxlZCkge1xuICAgICAgdGhpcy4jX2Rpc2FibGVkID0gZGlzYWJsZWQ7XG4gICAgICB0aGlzLnJlYWN0b3IgJiYgdGhpcy5yZWFjdG9yLmRpc3BhdGNoRXZlbnQoXCJvbkNoYW5nZVwiLCB0aGlzKTtcbiAgICB9XG4gIH1cblxuICBzZXRDbGlja0FjdGlvbih0cmlnZ2VyKSB7XG4gICAgdGhpcy5yZW1vdmVBbGxDbGlja0FjdGlvbnMoKTtcbiAgICB0aGlzLmFkZENsaWNrQWN0aW9uKHRyaWdnZXIpO1xuICB9XG4gIFxuICBhZGRDbGlja0FjdGlvbih0cmlnZ2VyKSB7XG4gICAgdGhpcy5yZWFjdG9yLmFkZEV2ZW50TGlzdGVuZXIoXCJvbkNsaWNrXCIsIHRyaWdnZXIpO1xuICB9XG4gIFxuICByZW1vdmVDbGlja0FjdGlvbih0cmlnZ2VyKSB7XG4gICAgdGhpcy5yZWFjdG9yLnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJvbkNsaWNrXCIsIHRyaWdnZXIpO1xuICB9XG5cbiAgcmVtb3ZlQWxsQ2xpY2tBY3Rpb25zKCkge1xuICAgIHRoaXMucmVhY3Rvci5yZW1vdmVBbGxFdmVudExpc3RlbmVyKFwib25DbGlja1wiKTtcbiAgfVxuXG4gIHNldEhvdmVyQWN0aW9uKHRyaWdnZXIpIHtcbiAgICB0aGlzLnJlbW92ZUFsbEhvdmVyQWN0aW9ucygpO1xuICAgIHRoaXMuYWRkSG92ZXJBY3Rpb24odHJpZ2dlcik7XG4gIH1cbiAgXG4gIGFkZEhvdmVyQWN0aW9uKHRyaWdnZXIpIHtcbiAgICB0aGlzLnJlYWN0b3IuYWRkRXZlbnRMaXN0ZW5lcihcIm9uSG92ZXJcIiwgdHJpZ2dlcik7XG4gIH1cbiAgXG4gIHJlbW92ZUhvdmVyQWN0aW9uKHRyaWdnZXIpIHtcbiAgICB0aGlzLnJlYWN0b3IucmVtb3ZlRXZlbnRMaXN0ZW5lcihcIm9uSG92ZXJcIiwgdHJpZ2dlcik7XG4gIH1cblxuICByZW1vdmVBbGxIb3ZlckFjdGlvbnMoKSB7XG4gICAgdGhpcy5yZWFjdG9yLnJlbW92ZUFsbEV2ZW50TGlzdGVuZXIoXCJvbkhvdmVyXCIpO1xuICB9XG5cbiAgc2V0RG93bkFjdGlvbih0cmlnZ2VyKSB7XG4gICAgdGhpcy5yZW1vdmVBbGxEb3duQWN0aW9ucygpO1xuICAgIHRoaXMuYWRkRG93bkFjdGlvbih0cmlnZ2VyKTtcbiAgfVxuICBcbiAgYWRkRG93bkFjdGlvbih0cmlnZ2VyKSB7XG4gICAgdGhpcy5yZWFjdG9yLmFkZEV2ZW50TGlzdGVuZXIoXCJvbkRvd25cIiwgdHJpZ2dlcik7XG4gIH1cbiAgXG4gIHJlbW92ZURvd25BY3Rpb24odHJpZ2dlcikge1xuICAgIHRoaXMucmVhY3Rvci5yZW1vdmVFdmVudExpc3RlbmVyKFwib25Eb3duXCIsIHRyaWdnZXIpO1xuICB9XG5cbiAgcmVtb3ZlQWxsRG93bkFjdGlvbnMoKSB7XG4gICAgdGhpcy5yZWFjdG9yLnJlbW92ZUFsbEV2ZW50TGlzdGVuZXIoXCJvbkRvd25cIik7XG4gIH1cblxuICBzZXRTY3JvbGxBY3Rpb24odHJpZ2dlcikge1xuICAgIHRoaXMucmVtb3ZlQWxsU2Nyb2xsQWN0aW9ucygpO1xuICAgIHRoaXMuYWRkU2Nyb2xsQWN0aW9uKHRyaWdnZXIpO1xuICB9XG4gIFxuICBhZGRTY3JvbGxBY3Rpb24odHJpZ2dlcikge1xuICAgIHRoaXMucmVhY3Rvci5hZGRFdmVudExpc3RlbmVyKFwib25TY3JvbGxcIiwgdHJpZ2dlcik7XG4gIH1cbiAgXG4gIHJlbW92ZVNjcm9sbEFjdGlvbih0cmlnZ2VyKSB7XG4gICAgdGhpcy5yZWFjdG9yLnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJvblNjcm9sbFwiLCB0cmlnZ2VyKTtcbiAgfVxuXG4gIHJlbW92ZUFsbFNjcm9sbEFjdGlvbnMoKSB7XG4gICAgdGhpcy5yZWFjdG9yLnJlbW92ZUFsbEV2ZW50TGlzdGVuZXIoXCJvblNjcm9sbFwiKTtcbiAgfVxuXG4gIHNldE1vdmVBY3Rpb24odHJpZ2dlcikge1xuICAgIHRoaXMucmVtb3ZlQWxsTW92ZUFjdGlvbnMoKTtcbiAgICB0aGlzLmFkZE1vdmVBY3Rpb24odHJpZ2dlcik7XG4gIH1cbiAgXG4gIGFkZE1vdmVBY3Rpb24odHJpZ2dlcikge1xuICAgIHRoaXMucmVhY3Rvci5hZGRFdmVudExpc3RlbmVyKFwib25Nb3ZlXCIsIHRyaWdnZXIpO1xuICB9XG4gIFxuICByZW1vdmVNb3ZlQWN0aW9uKHRyaWdnZXIpIHtcbiAgICB0aGlzLnJlYWN0b3IucmVtb3ZlRXZlbnRMaXN0ZW5lcihcIm9uTW92ZVwiLCB0cmlnZ2VyKTtcbiAgfVxuXG4gIHJlbW92ZUFsbE1vdmVBY3Rpb25zKCkge1xuICAgIHRoaXMucmVhY3Rvci5yZW1vdmVBbGxFdmVudExpc3RlbmVyKFwib25Nb3ZlXCIpO1xuICB9XG4gIFxuICBzZXRDaGFuZ2VBY3Rpb24odHJpZ2dlcikge1xuICAgIHRoaXMucmVtb3ZlQWxsQ2hhbmdlQWN0aW9ucygpO1xuICAgIHRoaXMuYWRkQ2hhbmdlQWN0aW9uKHRyaWdnZXIpO1xuICB9XG4gIFxuICBhZGRDaGFuZ2VBY3Rpb24odHJpZ2dlcikge1xuICAgIHRoaXMucmVhY3Rvci5hZGRFdmVudExpc3RlbmVyKFwib25DaGFuZ2VcIiwgdHJpZ2dlcik7XG4gIH1cbiAgXG4gIHJlbW92ZUNoYW5nZUFjdGlvbih0cmlnZ2VyKSB7XG4gICAgdGhpcy5yZWFjdG9yLnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJvbkNoYW5nZVwiLCB0cmlnZ2VyKTtcbiAgfVxuXG4gIHJlbW92ZUFsbENoYW5nZUFjdGlvbnMoKSB7XG4gICAgdGhpcy5yZWFjdG9yLnJlbW92ZUFsbEV2ZW50TGlzdGVuZXIoXCJvbkNoYW5nZVwiKTtcbiAgfVxuXG4gIHNldFVwQWN0aW9uKHRyaWdnZXIpIHtcbiAgICB0aGlzLnJlbW92ZUFsbFVwQWN0aW9ucygpO1xuICAgIHRoaXMuYWRkVXBBY3Rpb24odHJpZ2dlcik7XG4gIH1cbiAgXG4gIGFkZFVwQWN0aW9uKHRyaWdnZXIpIHtcbiAgICB0aGlzLnJlYWN0b3IuYWRkRXZlbnRMaXN0ZW5lcihcIm9uVXBcIiwgdHJpZ2dlcik7XG4gIH1cbiAgXG4gIHJlbW92ZVVwQWN0aW9uKHRyaWdnZXIpIHtcbiAgICB0aGlzLnJlYWN0b3IucmVtb3ZlRXZlbnRMaXN0ZW5lcihcIm9uVXBcIiwgdHJpZ2dlcik7XG4gIH1cblxuICByZW1vdmVBbGxVcEFjdGlvbnMoKSB7XG4gICAgdGhpcy5yZWFjdG9yLnJlbW92ZUFsbEV2ZW50TGlzdGVuZXIoXCJvblVwXCIpO1xuICB9XG5cbiAgZ2V0IGhlaWdodCgpIHtcbiAgICByZXR1cm4gdGhpcy4jX2hlaWdodDtcbiAgfVxuXG4gIGdldCB3aWR0aCgpIHtcbiAgICByZXR1cm4gdGhpcy4jX3dpZHRoO1xuICB9XG5cbiAgc2V0IHdpZHRoKHdpZHRoKSB7XG4gICAgaWYod2lkdGggIT0gdGhpcy4jX3dpZHRoKSB7XG4gICAgICB0aGlzLiNfd2lkdGggPSB3aWR0aDtcbiAgICAgIHRoaXMucmVhY3RvciAmJiB0aGlzLnJlYWN0b3IuZGlzcGF0Y2hFdmVudChcIm9uQ2hhbmdlXCIsIHRoaXMpO1xuICAgIH1cbiAgfVxuXG4gIHNldCBoZWlnaHQoaGVpZ2h0KSB7XG4gICAgaWYoaGVpZ2h0ICE9IHRoaXMuI19oZWlnaHQpIHtcbiAgICAgIHRoaXMuI19oZWlnaHQgPSBoZWlnaHQ7XG4gICAgICB0aGlzLnJlYWN0b3IgJiYgdGhpcy5yZWFjdG9yLmRpc3BhdGNoRXZlbnQoXCJvbkNoYW5nZVwiLCB0aGlzKTtcbiAgICB9XG4gIH1cblxuICBnZXQgbWF4V2lkdGgoKSB7XG4gICAgcmV0dXJuIHRoaXMud2lkdGg7XG4gIH1cblxuICBnZXQgbWF4SGVpZ2h0KCkge1xuICAgIHJldHVybiB0aGlzLmhlaWdodDtcbiAgfVxuXG4gIGdldCBpbm5lcldpZHRoKCkge1xuICAgIHJldHVybiB0aGlzLndpZHRoO1xuICB9XG5cbiAgZ2V0IGlubmVySGVpZ2h0KCkge1xuICAgIHJldHVybiB0aGlzLmhlaWdodDtcbiAgfVxuXG4gIGdldCBtaW5XaWR0aCgpIHtcbiAgICByZXR1cm4gdGhpcy53aWR0aDtcbiAgfVxuXG4gIGdldCBtaW5IZWlnaHQoKSB7XG4gICAgcmV0dXJuIHRoaXMuaGVpZ2h0O1xuICB9XG5cbiAgZ2V0IHgoKSB7XG4gICAgY29uc3QgcGFyZW50ID0gdGhpcy5wYXJlbnQgfHwgdGhpcy5jYW52YXM7XG5cbiAgICBpZih0aGlzLnN0eWxlLmFsaWduZW1lbnQgJiYgcGFyZW50KSB7XG4gICAgICBjb25zdCBwYXJlbnRXaWR0aCA9IHBhcmVudC53aWR0aDtcbiAgICAgIGNvbnN0IHBhcmVudFBhZGRpbmcgPSAocGFyZW50LnN0eWxlICYmIHBhcmVudC5zdHlsZS5wYWRkaW5nKSB8fCAwO1xuXG4gICAgICBpZih0aGlzLnN0eWxlLmFsaWduZW1lbnQgPT0gQ29uc3RhbnRzLkFsaWduZW1lbnQuQ0VOVEVSKSB7XG4gICAgICAgIHJldHVybiBwYXJlbnQueCArIChwYXJlbnRXaWR0aCAvIDIpIC0gKHRoaXMud2lkdGggLyAyKTtcbiAgICAgIH0gZWxzZSBpZih0aGlzLnN0eWxlLmFsaWduZW1lbnQgPT0gQ29uc3RhbnRzLkFsaWduZW1lbnQuUklHSFQpIHtcbiAgICAgICAgcmV0dXJuIHBhcmVudC54ICsgKHBhcmVudFdpZHRoKSAtICh0aGlzLndpZHRoKSAtIHBhcmVudFBhZGRpbmc7XG4gICAgICB9IGVsc2UgaWYodGhpcy5zdHlsZS5hbGlnbmVtZW50ID09IENvbnN0YW50cy5BbGlnbmVtZW50LkxFRlQpIHtcbiAgICAgICAgcmV0dXJuIHBhcmVudC54ICsgcGFyZW50UGFkZGluZztcbiAgICAgIH1cbiAgICB9IGVsc2UgaWYocGFyZW50KSB7XG4gICAgICByZXR1cm4gcGFyZW50LnggKyB0aGlzLiNfeDtcbiAgICB9XG4gICAgXG4gICAgcmV0dXJuIHRoaXMuI194O1xuICB9XG5cbiAgc2V0IHgoeCkge1xuICAgIHRoaXMuI194ID0geDtcbiAgICB0aGlzLnJlYWN0b3IgJiYgdGhpcy5yZWFjdG9yLmRpc3BhdGNoRXZlbnQoXCJvbkNoYW5nZVwiLCB0aGlzKTtcbiAgfVxuXG4gIGdldCB5KCkge1xuICAgIGNvbnN0IHBhcmVudCA9IHRoaXMucGFyZW50IHx8IHRoaXMuY2FudmFzO1xuXG4gICAgaWYodGhpcy5zdHlsZS52ZXJ0aWNhbEFsaWduZW1lbnQgJiYgcGFyZW50KSB7XG4gICAgICBjb25zdCBwYXJlbnRIZWlnaHQgPSBwYXJlbnQuaGVpZ2h0O1xuICAgICAgY29uc3QgcGFyZW50UGFkZGluZyA9IChwYXJlbnQuc3R5bGUgJiYgcGFyZW50LnN0eWxlLnBhZGRpbmcpIHx8IDA7XG5cbiAgICAgIGlmKHRoaXMuc3R5bGUudmVydGljYWxBbGlnbmVtZW50ID09IENvbnN0YW50cy5WZXJ0aWNhbEFsaWduZW1lbnQuQk9UVE9NKSB7XG4gICAgICAgIHJldHVybiBwYXJlbnQueSArIChwYXJlbnRIZWlnaHQpIC0gKHRoaXMuaGVpZ2h0KSAtIHBhcmVudFBhZGRpbmc7XG4gICAgICB9IGVsc2UgaWYodGhpcy5zdHlsZS52ZXJ0aWNhbEFsaWduZW1lbnQgPT0gQ29uc3RhbnRzLlZlcnRpY2FsQWxpZ25lbWVudC5DRU5URVIpIHtcbiAgICAgICAgcmV0dXJuIHBhcmVudC55ICsgKHBhcmVudEhlaWdodCAvIDIpIC0gKHRoaXMuaGVpZ2h0IC8gMik7XG4gICAgICB9IGVsc2UgaWYodGhpcy5zdHlsZS52ZXJ0aWNhbEFsaWduZW1lbnQgPT0gQ29uc3RhbnRzLlZlcnRpY2FsQWxpZ25lbWVudC5UT1ApIHtcbiAgICAgICAgcmV0dXJuIHBhcmVudC55ICsgcGFyZW50UGFkZGluZztcbiAgICAgIH1cbiAgICB9IGVsc2UgaWYocGFyZW50KSB7XG4gICAgICByZXR1cm4gcGFyZW50LnkgKyB0aGlzLiNfeTtcbiAgICB9XG4gICAgXG4gICAgcmV0dXJuIHRoaXMuI195O1xuICB9XG5cbiAgc2V0IHkoeSkge1xuICAgIHRoaXMuI195ID0geTtcbiAgICB0aGlzLnJlYWN0b3IgJiYgdGhpcy5yZWFjdG9yLmRpc3BhdGNoRXZlbnQoXCJvbkNoYW5nZVwiLCB0aGlzKTtcbiAgfVxuXG4gIGdldCBkZWZhdWx0U3R5bGUoKSB7XG4gICAgcmV0dXJuIG5ldyBTdHlsZSh7XG4gICAgICBcInBhZGRpbmdcIjogQ29uc3RhbnRzLlNldHRpbmcuREVGQVVMVF9QQURESU5HLFxuICAgICAgXCJzcGFjZUJldHdlZW5Db21wb25lbnRzXCI6IENvbnN0YW50cy5TZXR0aW5nLkRFRkFVTFRfU1BBQ0lOR1xuICAgIH0pO1xuICB9XG5cbiAgZ2V0IHN0eWxlKCkge1xuICAgIHJldHVybiB0aGlzLiNfc3R5bGUgfHwgdGhpcy5kZWZhdWx0U3R5bGU7XG4gIH1cblxuICBzZXQgc3R5bGUoc3R5bGUpIHtcbiAgICB0aGlzLiNfc3R5bGUgPSBuZXcgU3R5bGUoKTtcbiAgICB0aGlzLiNfc3R5bGUuc2V0QWxsKHRoaXMuZGVmYXVsdFN0eWxlLmdldFN0eWxlcygpKTtcblxuICAgIGlmKHN0eWxlICYmIHN0eWxlIGluc3RhbmNlb2YgU3R5bGUpIHtcbiAgICAgIHRoaXMuI19zdHlsZS5zZXRBbGwoc3R5bGUuZ2V0U3R5bGVzKCkpO1xuICAgIH1cblxuICAgIHRoaXMuI19zdHlsZS5jb21wb25lbnQgPSB0aGlzO1xuICAgIHRoaXMucmVhY3RvciAmJiB0aGlzLnJlYWN0b3IuZGlzcGF0Y2hFdmVudChcIm9uQ2hhbmdlXCIsIHRoaXMpO1xuICB9XG5cbiAgZ2V0IGhpZGRlbigpIHtcbiAgICByZXR1cm4gKHRoaXMuc3R5bGUgJiYgdGhpcy5zdHlsZS5oaWRkZW4pIHx8ICh0aGlzLnBhcmVudCAmJiB0aGlzLnBhcmVudC5oaWRkZW4pO1xuICB9XG5cbiAgc2V0IGhpZGRlbihoaWRkZW4pIHtcbiAgICBpZihoaWRkZW4gIT0gdGhpcy5kaXNhYmxlZCB8fCBoaWRkZW4gIT0gdGhpcy5zdHlsZS5oaWRkZW4pIHtcbiAgICAgIHRoaXMuZGlzYWJsZWQgPSBoaWRkZW47XG4gICAgICBpZih0aGlzLnN0eWxlKSB0aGlzLnN0eWxlLnNldChcImhpZGRlblwiLCBoaWRkZW4pO1xuICAgICAgdGhpcy5yZWFjdG9yICYmIHRoaXMucmVhY3Rvci5kaXNwYXRjaEV2ZW50KFwib25DaGFuZ2VcIiwgdGhpcyk7XG4gICAgfVxuICB9XG5cbiAgZ2V0IHNlbGVjdGVkKCkge1xuICAgIHJldHVybiB0aGlzLiNfc2VsZWN0ZWQ7XG4gIH1cblxuICBzZXQgc2VsZWN0ZWQoc2VsZWN0ZWQpIHtcbiAgICBpZihzZWxlY3RlZCAhPSB0aGlzLiNfc2VsZWN0ZWQpIHtcbiAgICAgIHRoaXMuI19zZWxlY3RlZCA9IHNlbGVjdGVkO1xuICAgICAgdGhpcy5yZWFjdG9yICYmIHRoaXMucmVhY3Rvci5kaXNwYXRjaEV2ZW50KFwib25DaGFuZ2VcIiwgdGhpcyk7XG4gICAgfVxuICB9XG5cbiAgZ2V0QWxsUGFyZW50cygpIHtcbiAgICBsZXQgcGFyZW50ID0gdGhpcy5wYXJlbnQ7XG4gICAgbGV0IHJlcyA9IFtdO1xuXG4gICAgd2hpbGUocGFyZW50KSB7XG4gICAgICByZXMucHVzaChwYXJlbnQpO1xuICAgICAgcGFyZW50ID0gcGFyZW50LnBhcmVudDtcbiAgICB9XG5cbiAgICByZXR1cm4gcmVzO1xuICB9XG5cbiAgc3RhdGljIGNvbXBhcmVDb21wb25lbnRzKGNvbXBvbmVudCwgb3RoZXIpIHtcbiAgICByZXR1cm4gY29tcG9uZW50LmNvbXBhcmVUbyhvdGhlcik7XG4gIH1cblxuICBjb21wYXJlVG8ob3RoZXJDb21wb25lbnQpIHtcbiAgICBjb25zdCBpc0ZvcmVncm91bmQgPSB0aGlzLnN0eWxlICYmIHRoaXMuc3R5bGUuZm9yZWdyb3VuZDtcbiAgICBjb25zdCBvdGhlcklzRm9yZWdyb3VuZCA9IG90aGVyQ29tcG9uZW50LnN0eWxlICYmIG90aGVyQ29tcG9uZW50LnN0eWxlLmZvcmVncm91bmQ7XG4gICAgY29uc3QgekluZGV4ID0gdGhpcy5zdHlsZSAmJiB0aGlzLnN0eWxlLnpJbmRleDtcbiAgICBjb25zdCBvdGhlcnpJbmRleCA9IG90aGVyQ29tcG9uZW50LnN0eWxlICYmIG90aGVyQ29tcG9uZW50LnN0eWxlLnpJbmRleDtcblxuICAgIGlmKHRoaXMucGFyZW50ID09IG90aGVyQ29tcG9uZW50KSB7XG4gICAgICByZXR1cm4gMTtcbiAgICB9IGVsc2UgaWYob3RoZXJDb21wb25lbnQucGFyZW50ID09IHRoaXMpIHtcbiAgICAgIHJldHVybiAtMTtcbiAgICB9IGVsc2UgaWYoaXNGb3JlZ3JvdW5kICYmICFvdGhlcklzRm9yZWdyb3VuZCkge1xuICAgICAgcmV0dXJuIDFcbiAgICB9IGVsc2UgaWYoIWlzRm9yZWdyb3VuZCAmJiBvdGhlcklzRm9yZWdyb3VuZCkge1xuICAgICAgcmV0dXJuIC0xO1xuICAgIH0gZWxzZSBpZih6SW5kZXggPiBvdGhlcnpJbmRleCkge1xuICAgICAgcmV0dXJuIDE7XG4gICAgfSBlbHNlIGlmKHpJbmRleCA8IG90aGVyekluZGV4KSB7XG4gICAgICByZXR1cm4gLTE7XG4gICAgfVxuXG4gICAgcmV0dXJuIG90aGVyQ29tcG9uZW50LmNvbXBhcmVUb0NvbXBvbmVudCh0aGlzKSB8fCAtdGhpcy5jb21wYXJlVG9Db21wb25lbnQob3RoZXJDb21wb25lbnQpO1xuICB9XG5cbiAgY29tcGFyZVRvQ29tcG9uZW50KG90aGVyQ29tcG9uZW50KSB7XG4gICAgcmV0dXJuIDA7XG4gIH1cblxuICBjb21wYXJlVG9NZW51KG90aGVyQ29tcG9uZW50KSB7XG4gICAgcmV0dXJuIC0xO1xuICB9XG5cbiAgY29tcGFyZVRvVG9vbHRpcChvdGhlckNvbXBvbmVudCkge1xuICAgIHJldHVybiAtMTtcbiAgfVxuXG4gIGNvbXBhcmVUb05vdGlmaWNhdGlvbihvdGhlckNvbXBvbmVudCkge1xuICAgIHJldHVybiAtMTtcbiAgfVxuXG4gIGNvbXBhcmVUb1Njcm9sbGJhcihvdGhlckNvbXBvbmVudCkge1xuICAgIHJldHVybiAtMTtcbiAgfVxufSIsIi8qXG4gKiBDb3B5cmlnaHQgKEMpIDIwMjAgRWxpYXN0aWsgKGVsaWFzdGlrc29mdHMuY29tKVxuICpcbiAqIFRoaXMgZmlsZSBpcyBwYXJ0IG9mIFwiSlNHYW1lVG9vbHNcIi5cbiAqXG4gKiBcIkpTR2FtZVRvb2xzXCIgaXMgZnJlZSBzb2Z0d2FyZTogeW91IGNhbiByZWRpc3RyaWJ1dGUgaXQgYW5kL29yIG1vZGlmeVxuICogaXQgdW5kZXIgdGhlIHRlcm1zIG9mIHRoZSBHTlUgR2VuZXJhbCBQdWJsaWMgTGljZW5zZSBhcyBwdWJsaXNoZWQgYnlcbiAqIHRoZSBGcmVlIFNvZnR3YXJlIEZvdW5kYXRpb24sIGVpdGhlciB2ZXJzaW9uIDMgb2YgdGhlIExpY2Vuc2UsIG9yXG4gKiAoYXQgeW91ciBvcHRpb24pIGFueSBsYXRlciB2ZXJzaW9uLlxuICpcbiAqIFwiSlNHYW1lVG9vbHNcIiBpcyBkaXN0cmlidXRlZCBpbiB0aGUgaG9wZSB0aGF0IGl0IHdpbGwgYmUgdXNlZnVsLFxuICogYnV0IFdJVEhPVVQgQU5ZIFdBUlJBTlRZOyB3aXRob3V0IGV2ZW4gdGhlIGltcGxpZWQgd2FycmFudHkgb2ZcbiAqIE1FUkNIQU5UQUJJTElUWSBvciBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRS4gIFNlZSB0aGVcbiAqIEdOVSBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlIGZvciBtb3JlIGRldGFpbHMuXG4gKlxuICogWW91IHNob3VsZCBoYXZlIHJlY2VpdmVkIGEgY29weSBvZiB0aGUgR05VIEdlbmVyYWwgUHVibGljIExpY2Vuc2VcbiAqIGFsb25nIHdpdGggXCJKU0dhbWVUb29sc1wiLiAgSWYgbm90LCBzZWUgPGh0dHA6Ly93d3cuZ251Lm9yZy9saWNlbnNlcy8+LlxuICovXG5leHBvcnQgZGVmYXVsdCB7XG4gIFNldHRpbmc6IHtcbiAgICBESVNBQkxFX09QVElNSVpBVElPTlM6IGZhbHNlLCAvLyB0cnVlIHRvIGRpc2FibGUgb3B0aW1pemF0aW9ucywgY2FuIGZpeCBzb21lIHByb2JsZW1zLCBkaXNhYmxpbmcgb3B0aW1pemF0aW9uIHJlZHVjZXMgcGVyZm9ybWFuY2VcbiAgICBESVNBQkxFX0VYUEVSSU1FTlRBTF9PUFRJTUlaQVRJT05TOiBmYWxzZSwgLy8gdHJ1ZSB0byBkaXNhYmxlIG9wdGltaXphdGlvbnMgdGhhdCBhcmUgY29uc2lkZXJlZCBleHBlcmltZW50YWxcbiAgICBESVNBQkxFX0NPTlRBSU5FUlNfQ1VUVElORzogZmFsc2UsIC8vIGRpc2FibGluZyBjb250YWluZXJzIGN1dHRpbmcgYWxsb3cgdG8gdmlldyB0aGUgY29tcG9uZW50cyBvZiBhIGNvbnRhaW5lciB0aGF0IGFyZSBub3QgdG90YWxseSB2aXNpYmxlLCB5b3UgY2FuIGFsc28gZGlzYWJsZSBvcHRpbWl6YXRpb25zIHRvIGRpc3BsYXlzIGVsZW1lbnRzIHRoYXQgYXJlIG5vdCBkcmF3biBmb3Igb3B0aW1pemF0aW9uIHB1cnBvc2VzXG4gICAgRU5BQkxFX1BJWEVMX1JBVElPX1JFU0laSU5HOiB0cnVlLCAvLyBlbmFibGluZyB0aGlzIGFsbG93IHJlc2l6aW5nIHRoZSBjYW52YXMgdG8gbWF0Y2ggdGhlIHNjcmVlbiBwaXhlbCByYXRpb1xuICAgIFBJWEVMX1JBVElPOiAxLCAvLyB0aGUgY3VycmVudCBwaXhlbCByYXRpbywgYXV0b21hdGljYWxseSB1cGRhdGVkXG4gICAgRk9OVF9GQU1JTFk6IFwic2Fucy1zZXJpZlwiLFxuICAgIEZPTlRfU0laRTogMjgsXG4gICAgQ0FOVkFTX1dJRFRIOiA2MDAsXG4gICAgQ0FOVkFTX0hFSUdIVDogNDAwLFxuICAgIERFRkFVTFRfUEFERElORzogNixcbiAgICBERUZBVUxUX1NQQUNJTkc6IDYsXG4gICAgQlVUVE9OX0RFRkFVTFRfQkFDS0dST1VORDogXCJyZ2JhKDAsIDAsIDAsIDApXCIsXG4gICAgQlVUVE9OX0RFRkFVTFRfSE9WRVJfQkFDS0dST1VORDogXCIjOTVBNUE2XCIsXG4gICAgQlVUVE9OX0RFRkFVTFRfQ0xJQ0tfQkFDS0dST1VORDogXCIjNzI3RjgwXCIsXG4gICAgQlVUVE9OX0RFRkFVTFRfQUxURVJOQVRJVkVfQkFDS0dST1VORDogXCIjQUNCRUJGXCIsXG4gICAgSU5QVVRfREVGQVVMVF9GT05UX0NPTE9SOiBcIiMwMDBcIixcbiAgICBJTlBVVF9ERUZBVUxUX0JBQ0tHUk9VTkRfQ09MT1I6IFwiI2ZmZlwiLFxuICAgIElOUFVUX0RFRkFVTFRfQk9SREVSX0NPTE9SOiBcIiMwMDBcIixcbiAgICBJTlBVVF9ERUZBVUxUX0JPUkRFUl9DT0xPUl9TRUxFQ1RFRDogXCIjYTJjZGQ4XCIsXG4gICAgSU5QVVRfREVGQVVMVF9TRUxFQ1RfQ09MT1I6IFwiIzI5ODBiOVwiLFxuICAgIExBQkVMX0RFRkFVTFRfRk9OVF9DT0xPUjogXCIjMDAwXCIsXG4gICAgTElOS19ERUZBVUxUX0NPTE9SOiBcIiMwMDAwRUVcIixcbiAgICBMSU5LX0RFRkFVTFRfSE9WRVJfQ09MT1I6IFwiIzRENERGRlwiLFxuICAgIExJTktfREVGQVVMVF9DTElDS19DT0xPUjogXCIjRUU3NzAwXCIsXG4gICAgTUVOVV9ERUZBVUxUX0JBQ0tHUk9VTkQ6IFwicmdiYSg0NCwgNjIsIDgwLCAwLjc1KVwiLFxuICAgIE1FTlVfREVGQVVMVF9CTFVSX0JBQ0tHUk9VTkQ6IGZhbHNlLFxuICAgIE5PVElGSUNBVElPTl9ERUZBVUxUX0JBQ0tHUk9VTkQ6IFwicmdiYSg0NiwgMjA0LCAxMTMsIDAuNSlcIixcbiAgICBOT1RJRklDQVRJT05fREVGQVVMVF9BTklNQVRJT05fRFVSQVRJT046IDUwMCwgLy8gbXNcbiAgICBQUk9HUkVTU19ERUZBVUxUX0JBQ0tHUk9VTkQ6IFwiI2JkYzNjN1wiLFxuICAgIFBST0dSRVNTX0RFRkFVTFRfRk9SRUdST1VORDogXCIjMjdhZTYwXCIsXG4gICAgUFJPR1JFU1NfREVGQVVMVF9BTklNQVRJT05fRFVSQVRJT046IDIwMDAsIC8vIG1zXG4gICAgVE9PTFRJUF9ERUZBVUxUX0JBQ0tHUk9VTkQ6IFwicmdiYSgyNTUsIDI1NSwgMjU1LCAwLjI1KVwiLFxuICAgIEFSUk9XX0RFRkFVTFRfTElORV9DQVA6IFwicm91bmRcIixcbiAgICBBUlJPV19ERUZBVUxUX0NPTE9SOiBcIiNGRjAwMDBcIixcbiAgICBBUlJPV19ERUZBVUxUX0xJTkVfU0laRTogOCxcbiAgICBBUlJPV19ERUZBVUxUX0hFQURfU0laRTogMjAsXG4gICAgQ1JPU1NfREVGQVVMVF9MSU5FX0NBUDogXCJyb3VuZFwiLFxuICAgIENST1NTX0RFRkFVTFRfQ09MT1I6IFwiI2ZmZlwiLFxuICAgIENST1NTX0RFRkFVTFRfTElORV9TSVpFOiAzLFxuICAgIFNDUk9MTEJBUl9ERUZBVUxUX0JBQ0tHUk9VTkQ6IFwicmdiYSgxNDksIDE2NSwgMTY2LCAwLjc1KVwiLFxuICAgIFNDUk9MTEJBUl9ERUZBVUxUX0hPVkVSX0JBQ0tHUk9VTkQ6IFwicmdiYSgxNDksIDE2NSwgMTY2LCAwLjkpXCIsXG4gICAgU0NST0xMQkFSX0RFRkFVTFRfQ0xJQ0tfQkFDS0dST1VORDogXCJyZ2JhKDE0OSwgMTY1LCAxNjYsIDAuNSlcIixcbiAgICBTQ1JPTExCQVJfREVGQVVMVF9TSVpFOiAxMCxcbiAgICBERUZBVUxUX0JPUkRFUl9TSVpFOiAzLFxuICAgIERFRkFVTFRfQk9SREVSX0NPTE9SX1NFTEVDVEVEOiBcIiNhMmNkZDhcIixcbiAgICBERUZBVUxUX0FOSU1BVElPTl9EVVJBVElPTjogMjAwMCwgLy8gbXNcbiAgICBUUklBTkdMRV9ERUZBVUxUX0xJTkVfQ0FQOiBcInJvdW5kXCIsXG4gICAgVFJJQU5HTEVfREVGQVVMVF9DT0xPUjogXCIjMDAwXCIsXG4gICAgVFJJQU5HTEVfREVGQVVMVF9GSUxMX0NPTE9SOiBcIiMwMDBcIixcbiAgICBUUklBTkdMRV9ERUZBVUxUX0xJTkVfU0laRTogMyxcbiAgICBUUklBTkdMRV9ERUZBVUxUX0ZJTEw6IHRydWUsXG4gICAgU0VMRUNUX0RFRkFVTFRfQkFDS0dST1VORDogXCIjZWNmMGYxXCIsXG4gICAgU0VMRUNUX0RFRkFVTFRfSE9WRVJfQkFDS0dST1VORDogXCIjYmRjM2M3XCIsXG4gICAgU0VMRUNUX0RFRkFVTFRfQ0xJQ0tfQkFDS0dST1VORDogXCIjYWRiMmI1XCIsXG4gICAgQ0lSQ0xFX0RFRkFVTFRfTElORV9DQVA6IFwicm91bmRcIixcbiAgICBDSVJDTEVfREVGQVVMVF9DT0xPUjogXCIjZmZmXCIsXG4gICAgQ0lSQ0xFX0RFRkFVTFRfRklMTF9DT0xPUjogXCIjMDAwXCIsXG4gICAgQ0lSQ0xFX0RFRkFVTFRfTElORV9TSVpFOiAzLFxuICAgIENJUkNMRV9ERUZBVUxUX0ZJTEw6IHRydWUsXG4gIH0sXG4gIEtleToge1xuICAgIFVQOiAzOCxcbiAgICBSSUdIVDogMzksXG4gICAgQk9UVE9NOiA0MCxcbiAgICBMRUZUOiAzNyxcbiAgICBFTlRFUjogMTMsXG4gICAgRUNIQVA6IDI3LFxuICAgIFRBQjogOVxuICB9LFxuICBBbGlnbmVtZW50OiB7XG4gICAgUklHSFQ6IFwicmlnaHRcIixcbiAgICBMRUZUOiBcImxlZnRcIixcbiAgICBDRU5URVI6IFwiY2VudGVyXCIsXG4gICAgREVGQVVMVDogXCJkZWZhdWx0XCJcbiAgfSxcbiAgVmVydGljYWxBbGlnbmVtZW50OiB7XG4gICAgVE9QOiBcInRvcFwiLFxuICAgIENFTlRFUjogXCJjZW50ZXJcIixcbiAgICBCT1RUT006IFwiYm90dG9tXCIsXG4gICAgREVGQVVMVDogXCJkZWZhdWx0XCJcbiAgfSxcbiAgU3RyaW5nOiB7XG4gICAgRVJST1JfTUVTU0FHRV9DQU5WQVM6IFwiQSBmYXRhbCBlcnJvciBoYXMgb2NjdXJyZWQgYXQgdGhlIEpTR2FtZVRvb2xzIGxldmVsLlwiLFxuICAgIEVSUk9SX01FU1NBR0VfQ0FOVkFTX0xBQkVMIDogXCI6JyhcXG5BIGZhdGFsIGVycm9yIGhhcyBvY2N1cnJlZCBhdCB0aGUgSlNHYW1lVG9vbHMgbGV2ZWwuXCIsXG4gICAgUkVUUlk6IFwiUmV0cnlcIixcbiAgICBOT1RJQ0VfTUVTU0FHRTogXCJOb3RpY2U6XCIsXG4gICAgV0FSTklOR19NRVNTQUdFOiBcIldhcm5pbmc6XCIsXG4gICAgRVJST1JfTUVTU0FHRTogXCJFcnJvcjpcIixcbiAgICBPUFRJTUlaQVRJT05fRElTQUJMRUQ6IFwiT3B0aW1pemF0aW9ucyBhcmUgZGlzYWJsZWQuIFlvdSBtYXkgbm90aWNlIGxvdyBwZXJmb3JtYW5jZS5cIixcbiAgICBDT05UQUlORVJfQ1VUVElOR19ESVNBQkxFRDogXCJDb250YWluZXJzIGN1dHRpbmcgaXMgZGlzYWJsZWQuXCIsXG4gICAgQlVUVE9OX0lNQUdFX0RFUFJFQ0FURUQ6IFwiSlNHYW1lVG9vbHMuQnV0dG9uSW1hZ2UgaXMgZGVwcmVjYXRlZC4gUGxlYXNlIHVzZSBhIEJ1dHRvbiB3aXRoIGFuIEltYWdlQ29udGFpbmVyIGluc3RlYWQuXCIsXG4gICAgSU5QVVRfRlVMTFNDUkVFTjogXCJUaGUgdXNlIG9mIEpTR2FtZVRvb2xzLkNhbnZhcyBpcyBuZWVkZWQgZm9yIElucHV0IGNvbXBvbmVudHMgdG8gcHJvcGVybHkgd29yayBpbiBmdWxsc2NyZWVuIG1vZGUuXCJcbiAgfVxufTsiLCIvKlxuICogQ29weXJpZ2h0IChDKSAyMDIwIEVsaWFzdGlrIChlbGlhc3Rpa3NvZnRzLmNvbSlcbiAqXG4gKiBUaGlzIGZpbGUgaXMgcGFydCBvZiBcIkpTR2FtZVRvb2xzXCIuXG4gKlxuICogXCJKU0dhbWVUb29sc1wiIGlzIGZyZWUgc29mdHdhcmU6IHlvdSBjYW4gcmVkaXN0cmlidXRlIGl0IGFuZC9vciBtb2RpZnlcbiAqIGl0IHVuZGVyIHRoZSB0ZXJtcyBvZiB0aGUgR05VIEdlbmVyYWwgUHVibGljIExpY2Vuc2UgYXMgcHVibGlzaGVkIGJ5XG4gKiB0aGUgRnJlZSBTb2Z0d2FyZSBGb3VuZGF0aW9uLCBlaXRoZXIgdmVyc2lvbiAzIG9mIHRoZSBMaWNlbnNlLCBvclxuICogKGF0IHlvdXIgb3B0aW9uKSBhbnkgbGF0ZXIgdmVyc2lvbi5cbiAqXG4gKiBcIkpTR2FtZVRvb2xzXCIgaXMgZGlzdHJpYnV0ZWQgaW4gdGhlIGhvcGUgdGhhdCBpdCB3aWxsIGJlIHVzZWZ1bCxcbiAqIGJ1dCBXSVRIT1VUIEFOWSBXQVJSQU5UWTsgd2l0aG91dCBldmVuIHRoZSBpbXBsaWVkIHdhcnJhbnR5IG9mXG4gKiBNRVJDSEFOVEFCSUxJVFkgb3IgRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UuICBTZWUgdGhlXG4gKiBHTlUgR2VuZXJhbCBQdWJsaWMgTGljZW5zZSBmb3IgbW9yZSBkZXRhaWxzLlxuICpcbiAqIFlvdSBzaG91bGQgaGF2ZSByZWNlaXZlZCBhIGNvcHkgb2YgdGhlIEdOVSBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlXG4gKiBhbG9uZyB3aXRoIFwiSlNHYW1lVG9vbHNcIi4gIElmIG5vdCwgc2VlIDxodHRwOi8vd3d3LmdudS5vcmcvbGljZW5zZXMvPi5cbiAqL1xuaW1wb3J0IEJveCBmcm9tIFwiLi9Cb3hcIjtcbmltcG9ydCBDb21wb25lbnQgZnJvbSBcIi4vQ29tcG9uZW50XCI7XG5pbXBvcnQgQ29uc3RhbnRzIGZyb20gXCIuL0NvbnN0YW50c1wiO1xuaW1wb3J0IFNjcm9sbGJhckhvcml6b250YWwgZnJvbSBcIi4vU2Nyb2xsYmFySG9yaXpvbnRhbFwiO1xuaW1wb3J0IFNjcm9sbGJhclZlcnRpY2FsIGZyb20gXCIuL1Njcm9sbGJhclZlcnRpY2FsXCI7XG5pbXBvcnQgU3R5bGUgZnJvbSBcIi4vU3R5bGVcIjtcbmltcG9ydCBVdGlscyBmcm9tIFwiLi9VdGlsc1wiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDb250YWluZXIgZXh0ZW5kcyBCb3gge1xuICBzZWxlY3RhYmxlID0gZmFsc2U7XG4gICNjb21wb25lbnRzID0gW107XG4gICNfbWF4V2lkdGggPSAwO1xuICAjX21heEhlaWdodCA9IDA7XG4gICNfbWluV2lkdGggPSAwO1xuICAjX21pbkhlaWdodCA9IDA7XG4gIGV2ZW50Q2hhbmdlQ2FsbGJhY2sgPSAoKSA9PiB0aGlzLnJlYWN0b3IuZGlzcGF0Y2hFdmVudChcIm9uQ2hhbmdlXCIsIHRoaXMpO1xuXG4gIGNvbnN0cnVjdG9yKHgsIHksIG1heFdpZHRoLCBtYXhIZWlnaHQsIHN0eWxlLCAuLi5jb21wb25lbnRzKSB7XG4gICAgc3VwZXIoeCwgeSwgbnVsbCwgbnVsbCwgc3R5bGUpO1xuXG4gICAgdGhpcy5hZGRBbGwoLi4uY29tcG9uZW50cyk7XG4gICAgdGhpcy5jYW52YXNUbXAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiY2FudmFzXCIpO1xuICAgIHRoaXMuI19tYXhXaWR0aCA9IG1heFdpZHRoO1xuICAgIHRoaXMuI19tYXhIZWlnaHQgPSBtYXhIZWlnaHQ7XG4gICAgdGhpcy5zY3JvbGxiYXJIb3Jpem9udGFsID0gbmV3IFNjcm9sbGJhckhvcml6b250YWwobnVsbCwgbnVsbCwgdGhpcyk7XG4gICAgdGhpcy5zY3JvbGxiYXJWZXJ0aWNhbCA9IG5ldyBTY3JvbGxiYXJWZXJ0aWNhbChudWxsLCBudWxsLCB0aGlzKTtcblxuICAgIHRoaXMuYWRkU2Nyb2xsQWN0aW9uKChkZWx0YVgsIGRlbHRhWSkgPT4gdGhpcy5jb250cm9sU2Nyb2xsaW5nKGRlbHRhWCwgZGVsdGFZKSk7XG5cbiAgICBpZighQ29uc3RhbnRzLlNldHRpbmcuRElTQUJMRV9FWFBFUklNRU5UQUxfT1BUSU1JWkFUSU9OUykge1xuICAgICAgdGhpcy5hZGRDaGFuZ2VBY3Rpb24oY29tcG9uZW50Q2hhbmdlZCA9PiB7XG4gICAgICAgIGNvbXBvbmVudENoYW5nZWQgPT0gdGhpcy5wYXJlbnQgJiYgdGhpcy5jb21wb25lbnRzLmZvckVhY2goY29tcG9uZW50ID0+IGNvbXBvbmVudCAmJiBjb21wb25lbnQucmVhY3Rvci5kaXNwYXRjaEV2ZW50KFwib25DaGFuZ2VcIiwgdGhpcykpO1xuICAgICAgfSk7XG4gICAgfVxuICB9XG5cbiAgZHJhdyhjb250ZXh0KSB7XG4gICAgaWYodGhpcy5oaWRkZW4pIHJldHVybjtcbiAgICBjb25zdCBjYW52YXMgPSBjb250ZXh0LmNhbnZhcztcbiAgICBjb25zdCBjdHggPSBjYW52YXMuZ2V0Q29udGV4dChcIjJkXCIpO1xuICAgIGN0eC5zYXZlKCk7XG5cbiAgICBpZih0aGlzLmlzQ3V0dGluZykge1xuICAgICAgY29uc3QgY3R4VGVtcCA9IHRoaXMuY2FudmFzVG1wLmdldENvbnRleHQoXCIyZFwiKTtcbiAgICAgIHRoaXMuY2FudmFzVG1wLndpZHRoID0gVXRpbHMuZ2V0Q2FudmFzV2lkdGgoY2FudmFzKSAqIENvbnN0YW50cy5TZXR0aW5nLlBJWEVMX1JBVElPO1xuICAgICAgdGhpcy5jYW52YXNUbXAuaGVpZ2h0ID0gVXRpbHMuZ2V0Q2FudmFzSGVpZ2h0KGNhbnZhcykgKiBDb25zdGFudHMuU2V0dGluZy5QSVhFTF9SQVRJTztcbiAgICAgIHRoaXMuY2FudmFzVG1wLnN0eWxlLndpZHRoID0gVXRpbHMuZ2V0Q2FudmFzV2lkdGgoY2FudmFzKTtcbiAgICAgIHRoaXMuY2FudmFzVG1wLnN0eWxlLmhlaWdodCA9IFV0aWxzLmdldENhbnZhc0hlaWdodChjYW52YXMpO1xuICAgICAgVXRpbHMuY2xlYXIoY3R4VGVtcCk7XG4gICAgfVxuICAgIFxuICAgIHRoaXMuY29tcG9uZW50cy5mb3JFYWNoKGNvbXBvbmVudCA9PiB7XG4gICAgICBpZih0aGlzLmNhbnZhcykgY29tcG9uZW50LmNhbnZhcyA9IHRoaXMuY2FudmFzO1xuICAgIH0pO1xuICAgIFxuICAgIHRoaXMuY29udHJvbFNjcm9sbGluZygwLCAwKTtcbiAgICBzdXBlci5kcmF3KGNvbnRleHQpO1xuXG4gICAgY3R4LnJlc3RvcmUoKTtcbiAgfVxuXG4gIGRyYXdWZXJ0aWNhbFNjcm9sbEJhcihjdHgpIHtcbiAgICBpZih0aGlzLnNjcm9sbGJhclZlcnRpY2FsKSB7XG4gICAgICB0aGlzLnNjcm9sbGJhclZlcnRpY2FsLmNhbnZhcyA9IHRoaXMuY2FudmFzO1xuICAgICAgdGhpcy5zY3JvbGxiYXJWZXJ0aWNhbC5kcmF3KGN0eCk7XG4gICAgfVxuICB9XG5cbiAgZHJhd0hvcml6b250YWxTY3JvbGxCYXIoY3R4KSB7XG4gICAgaWYodGhpcy5zY3JvbGxiYXJIb3Jpem9udGFsKSB7XG4gICAgICB0aGlzLnNjcm9sbGJhckhvcml6b250YWwuY2FudmFzID0gdGhpcy5jYW52YXM7XG4gICAgICB0aGlzLnNjcm9sbGJhckhvcml6b250YWwuZHJhdyhjdHgpO1xuICAgIH1cbiAgfVxuXG4gIGRyYXdTY3JvbGxiYXJzKGN0eCkge1xuICAgIGlmKCF0aGlzLnN0eWxlLnNjcm9sbFhEaXNhYmxlZCkgdGhpcy5kcmF3SG9yaXpvbnRhbFNjcm9sbEJhcihjdHgpO1xuICAgIGlmKCF0aGlzLnN0eWxlLnNjcm9sbFlEaXNhYmxlZCkgdGhpcy5kcmF3VmVydGljYWxTY3JvbGxCYXIoY3R4KTtcbiAgfVxuXG4gIHNldCguLi5jb21wb25lbnRzKSB7XG4gICAgdGhpcy5jbGVhcigpO1xuICAgIHRoaXMuYWRkQWxsKC4uLmNvbXBvbmVudHMpO1xuICAgIHRoaXMuZW5hYmxlKCk7XG4gIH1cblxuICBhZGQoY29tcG9uZW50KSB7XG4gICAgdGhpcy4jY29tcG9uZW50cy5wdXNoKGNvbXBvbmVudCk7XG4gICAgY29tcG9uZW50LnBhcmVudCA9IHRoaXM7XG4gICAgaWYodGhpcy5jYW52YXMpIGNvbXBvbmVudC5jYW52YXMgPSB0aGlzLmNhbnZhcztcbiAgICBjb21wb25lbnQuYWRkQ2hhbmdlQWN0aW9uKHRoaXMuZXZlbnRDaGFuZ2VDYWxsYmFjayk7XG4gICAgdGhpcy5yZWFjdG9yLmRpc3BhdGNoRXZlbnQoXCJvbkNoYW5nZVwiLCB0aGlzKTtcbiAgfVxuXG4gIGFkZEFsbCguLi5jb21wb25lbnRzKSB7XG4gICAgY29tcG9uZW50cy5mb3JFYWNoKGNvbXBvbmVudCA9PiB0aGlzLmFkZChjb21wb25lbnQpKTtcbiAgfVxuXG4gIHJlbW92ZShjb21wb25lbnQpIHtcbiAgICBpZih0aGlzLiNjb21wb25lbnRzLmluZGV4T2YoY29tcG9uZW50KSAhPSAtMSkge1xuICAgICAgY29tcG9uZW50LnJlbW92ZUNoYW5nZUFjdGlvbih0aGlzLmV2ZW50Q2hhbmdlQ2FsbGJhY2spO1xuICAgICAgdGhpcy4jY29tcG9uZW50cyA9IHRoaXMuI2NvbXBvbmVudHMuZmlsdGVyKGN1cnJlbnQgPT4gY29tcG9uZW50ICE9IGN1cnJlbnQpO1xuICAgICAgdGhpcy5yZWFjdG9yLmRpc3BhdGNoRXZlbnQoXCJvbkNoYW5nZVwiLCB0aGlzKTtcbiAgICB9XG4gIH1cblxuICBjbGVhcigpIHtcbiAgICB0aGlzLiNjb21wb25lbnRzLmZvckVhY2goY29tcG9uZW50ID0+IHRoaXMucmVtb3ZlKGNvbXBvbmVudCkpO1xuICAgIHRoaXMucmVhY3Rvci5kaXNwYXRjaEV2ZW50KFwib25DaGFuZ2VcIiwgdGhpcyk7XG4gIH1cblxuICBnZXQgY29tcG9uZW50cygpIHtcbiAgICBjb25zdCBjb21wb25lbnRzID0gW107XG4gICAgdGhpcy4jY29tcG9uZW50cy5mb3JFYWNoKGNvbXBvbmVudCA9PiBjb21wb25lbnRzLnB1c2goY29tcG9uZW50KSk7XG4gICAgcmV0dXJuIGNvbXBvbmVudHM7XG4gIH1cblxuICBnZXQgYWxsQ29tcG9uZW50cygpIHtcbiAgICBjb25zdCBjb21wb25lbnRzID0gdGhpcy5jb21wb25lbnRzO1xuICAgIGNvbXBvbmVudHMucHVzaCh0aGlzLnNjcm9sbGJhckhvcml6b250YWwpO1xuICAgIGNvbXBvbmVudHMucHVzaCh0aGlzLnNjcm9sbGJhclZlcnRpY2FsKTtcbiAgICByZXR1cm4gY29tcG9uZW50cztcbiAgfVxuXG4gIGdldENvbXBvbmVudHNUcmVlKHN0YXJ0ID0gdGhpcykge1xuICAgIGNvbnN0IGNvbXBvbmVudHMgPSB7XG4gICAgICBcImNvbXBvbmVudFwiOiBzdGFydCxcbiAgICAgIFwiY2hpbGRzXCI6IFtdXG4gICAgfTtcblxuICAgIGlmKHN0YXJ0LmFsbENvbXBvbmVudHMpIHtcbiAgICAgIHN0YXJ0LmFsbENvbXBvbmVudHMuZm9yRWFjaChjb21wb25lbnQgPT4gY29tcG9uZW50cy5jaGlsZHMucHVzaCh0aGlzLmdldENvbXBvbmVudHNUcmVlKGNvbXBvbmVudCkpKTtcbiAgICB9XG5cbiAgICByZXR1cm4gY29tcG9uZW50cztcbiAgfVxuXG4gIHN0YXRpYyBzb3J0Q29tcG9uZW50c1RyZWUoY29tcG9uZW50LCBvdGhlcikge1xuICAgIHJldHVybiBjb21wb25lbnQuY29tcG9uZW50LmNvbXBhcmVUbyhvdGhlci5jb21wb25lbnQpO1xuICB9XG5cbiAgZGlzYWJsZSgpIHtcbiAgICBsZXQgY2hhbmdlZCA9IHN1cGVyLmRpc2FibGUoKTtcblxuICAgIHRoaXMuI2NvbXBvbmVudHMuZm9yRWFjaChjb21wb25lbnQgPT4ge1xuICAgICAgaWYoY29tcG9uZW50ICYmIGNvbXBvbmVudC5kaXNhYmxlICYmIGNvbXBvbmVudC5kaXNhYmxlKCkpIHtcbiAgICAgICAgY2hhbmdlZCA9IHRydWU7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICBpZihjaGFuZ2VkKSB0aGlzLnJlYWN0b3IuZGlzcGF0Y2hFdmVudChcIm9uQ2hhbmdlXCIsIHRoaXMpO1xuICB9XG5cbiAgZW5hYmxlKCkge1xuICAgIGxldCBjaGFuZ2VkID0gc3VwZXIuZW5hYmxlKCk7XG5cbiAgICB0aGlzLiNjb21wb25lbnRzLmZvckVhY2goY29tcG9uZW50ID0+IHtcbiAgICAgIGlmKGNvbXBvbmVudCAmJiBjb21wb25lbnQuZW5hYmxlICYmIGNvbXBvbmVudC5lbmFibGUoKSkge1xuICAgICAgICBjaGFuZ2VkID0gdHJ1ZTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIGlmKGNoYW5nZWQpIHRoaXMucmVhY3Rvci5kaXNwYXRjaEV2ZW50KFwib25DaGFuZ2VcIiwgdGhpcyk7XG4gIH1cblxuICBnZXQgd2lkdGgoKSB7XG4gICAgY29uc3Qgd2lkdGggPSAodGhpcy5wYXJlbnQgJiYgdGhpcy5wYXJlbnQud2lkdGgpO1xuICAgIGNvbnN0IG1pbiA9IHRoaXMubWF4V2lkdGggPyBNYXRoLm1pbih0aGlzLm1heFdpZHRoLCB3aWR0aCkgOiBudWxsO1xuICAgIHJldHVybiB0aGlzLm1pbldpZHRoID8gTWF0aC5tYXgodGhpcy5taW5XaWR0aCwgbWluIHx8IHdpZHRoKSA6IHdpZHRoO1xuICB9XG5cbiAgZ2V0IGhlaWdodCgpIHtcbiAgICBjb25zdCBoZWlnaHQgPSAodGhpcy5wYXJlbnQgJiYgdGhpcy5wYXJlbnQuaGVpZ2h0KTtcbiAgICBjb25zdCBtaW4gPSB0aGlzLm1heFdpZHRoID8gTWF0aC5taW4odGhpcy5tYXhIZWlnaHQsIGhlaWdodCkgOiBudWxsO1xuICAgIHJldHVybiB0aGlzLm1pbkhlaWdodCA/IE1hdGgubWF4KHRoaXMubWluSGVpZ2h0LCBtaW4gfHwgaGVpZ2h0KSA6IGhlaWdodDtcbiAgfVxuXG4gIGdldCBtYXhXaWR0aCgpIHtcbiAgICByZXR1cm4gdGhpcy4jX21heFdpZHRoO1xuICB9XG5cbiAgZ2V0IG1heEhlaWdodCgpIHtcbiAgICByZXR1cm4gdGhpcy4jX21heEhlaWdodDtcbiAgfVxuXG4gIHNldCBtYXhXaWR0aChtYXhXaWR0aCkge1xuICAgIGlmKG1heFdpZHRoICE9IHRoaXMuI19tYXhXaWR0aCkge1xuICAgICAgdGhpcy4jX21heFdpZHRoID0gbWF4V2lkdGg7XG4gICAgICB0aGlzLnJlYWN0b3IuZGlzcGF0Y2hFdmVudChcIm9uQ2hhbmdlXCIsIHRoaXMpO1xuICAgIH1cbiAgfVxuXG4gIHNldCBtYXhIZWlnaHQobWF4SGVpZ2h0KSB7XG4gICAgaWYobWF4SGVpZ2h0ICE9IHRoaXMuI19tYXhIZWlnaHQpIHtcbiAgICAgIHRoaXMuI19tYXhIZWlnaHQgPSBtYXhIZWlnaHQ7XG4gICAgICB0aGlzLnJlYWN0b3IuZGlzcGF0Y2hFdmVudChcIm9uQ2hhbmdlXCIsIHRoaXMpO1xuICAgIH1cbiAgfVxuXG4gIGdldCBtaW5XaWR0aCgpIHtcbiAgICByZXR1cm4gdGhpcy4jX21pbldpZHRoO1xuICB9XG5cbiAgZ2V0IG1pbkhlaWdodCgpIHtcbiAgICByZXR1cm4gdGhpcy4jX21pbkhlaWdodDtcbiAgfVxuXG4gIHNldCBtaW5XaWR0aChtaW5XaWR0aCkge1xuICAgIGlmKG1pbldpZHRoICE9IHRoaXMuI19taW5XaWR0aCkge1xuICAgICAgdGhpcy4jX21pbldpZHRoID0gbWluV2lkdGg7XG4gICAgICB0aGlzLnJlYWN0b3IuZGlzcGF0Y2hFdmVudChcIm9uQ2hhbmdlXCIsIHRoaXMpO1xuICAgIH1cbiAgfVxuXG4gIHNldCBtaW5IZWlnaHQobWluSGVpZ2h0KSB7XG4gICAgaWYobWluSGVpZ2h0ICE9IHRoaXMuI19taW5IZWlnaHQpIHtcbiAgICAgIHRoaXMuI19taW5IZWlnaHQgPSBtaW5IZWlnaHQ7XG4gICAgICB0aGlzLnJlYWN0b3IuZGlzcGF0Y2hFdmVudChcIm9uQ2hhbmdlXCIsIHRoaXMpO1xuICAgIH1cbiAgfVxuXG4gIHVwZGF0ZUlubmVySGVpZ2h0KCkgeyB9XG5cbiAgdXBkYXRlSW5uZXJXaWR0aCgpIHsgfVxuXG4gIHNldCBjYW52YXMoY2FudmFzKSB7XG4gICAgc3VwZXIuY2FudmFzID0gY2FudmFzO1xuXG4gICAgdGhpcy4jY29tcG9uZW50cy5mb3JFYWNoKGNvbXBvbmVudCA9PiB7XG4gICAgICBjb21wb25lbnQuY2FudmFzID0gY2FudmFzO1xuICAgIH0pO1xuICB9XG5cbiAgZ2V0IGNhbnZhcygpIHtcbiAgICByZXR1cm4gc3VwZXIuY2FudmFzO1xuICB9XG5cbiAgZ2V0Q29tcG9uZW50SWQoY29tcG9uZW50KSB7XG4gICAgbGV0IHJlc3VsdCA9IG51bGw7XG5cbiAgICB0aGlzLiNjb21wb25lbnRzLmZvckVhY2goKGMsIGkpID0+IHtcbiAgICAgIGlmKGMgPT0gY29tcG9uZW50KSByZXN1bHQgPSBpO1xuICAgIH0pO1xuXG4gICAgcmV0dXJuIHJlc3VsdDtcbiAgfVxuXG4gIGdldCBzY3JvbGxBcmVhU2l6ZVgoKSB7XG4gICAgcmV0dXJuIHRoaXMuaW5uZXJXaWR0aCAtIHRoaXMud2lkdGg7XG4gIH1cblxuICBnZXQgc2Nyb2xsQXJlYVNpemVZKCkge1xuICAgIHJldHVybiB0aGlzLmlubmVySGVpZ2h0IC0gdGhpcy5oZWlnaHQ7XG4gIH1cblxuICBjb250cm9sU2Nyb2xsaW5nKGRlbHRhWCwgZGVsdGFZKSB7XG4gICAgaWYoIXRoaXMuc3R5bGUuc2Nyb2xsWURpc2FibGVkKSB7XG4gICAgICBpZih0aGlzLnNjcm9sbEFyZWFTaXplWSA8PSAwKSB7XG4gICAgICAgIHRoaXMub2Zmc2V0U2Nyb2xsWSA9IDA7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBjb25zdCBwZXJjZW50U2Nyb2xsYmFyWSA9IHRoaXMub2Zmc2V0U2Nyb2xsWSAvIHRoaXMuc2Nyb2xsQXJlYVNpemVZO1xuICBcbiAgICAgICAgaWYocGVyY2VudFNjcm9sbGJhclkgPD0gMCAmJiBkZWx0YVkgPD0gMCkge1xuICAgICAgICAgIHRoaXMub2Zmc2V0U2Nyb2xsWSA9IE1hdGgubWluKDAsIHRoaXMueSk7XG4gICAgICAgIH0gZWxzZSBpZihwZXJjZW50U2Nyb2xsYmFyWSA+IDEgJiYgZGVsdGFZID49IDApIHtcbiAgICAgICAgICB0aGlzLm9mZnNldFNjcm9sbFkgPSB0aGlzLnNjcm9sbEFyZWFTaXplWTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLm9mZnNldFNjcm9sbFkgLT0gZGVsdGFZO1xuICAgIH1cblxuICAgIGlmKCF0aGlzLnN0eWxlLnNjcm9sbFhEaXNhYmxlZCkge1xuICAgICAgaWYodGhpcy5zY3JvbGxBcmVhU2l6ZVggPD0gMCkge1xuICAgICAgICB0aGlzLm9mZnNldFNjcm9sbFggPSAwO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgY29uc3QgcGVyY2VudFNjcm9sbGJhclggPSB0aGlzLm9mZnNldFNjcm9sbFggLyB0aGlzLnNjcm9sbEFyZWFTaXplWDtcbiAgXG4gICAgICAgIGlmKHBlcmNlbnRTY3JvbGxiYXJYIDw9IDAgJiYgZGVsdGFYIDw9IDApIHtcbiAgICAgICAgICB0aGlzLm9mZnNldFNjcm9sbFggPSBNYXRoLm1pbigwLCB0aGlzLngpO1xuICAgICAgICB9IGVsc2UgaWYocGVyY2VudFNjcm9sbGJhclggPiAxICYmIGRlbHRhWCA+PSAwKSB7XG4gICAgICAgICAgdGhpcy5vZmZzZXRTY3JvbGxYID0gdGhpcy5zY3JvbGxBcmVhU2l6ZVg7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5vZmZzZXRTY3JvbGxYIC09IGRlbHRhWDtcbiAgICB9XG4gIH1cblxuICBpc0NvbXBvbmVudFZpc2libGUoY29tcG9uZW50KSB7XG4gICAgaWYoQ29uc3RhbnRzLlNldHRpbmcuRElTQUJMRV9PUFRJTUlaQVRJT05TKSByZXR1cm4gdHJ1ZTtcbiAgICBcbiAgICBpZihjb21wb25lbnQgaW5zdGFuY2VvZiBDb21wb25lbnQgJiYgIWNvbXBvbmVudC5oaWRkZW4pIHtcbiAgICAgIGlmKCFDb25zdGFudHMuU2V0dGluZy5ESVNBQkxFX0VYUEVSSU1FTlRBTF9PUFRJTUlaQVRJT05TICYmIHRoaXMucGFyZW50ICYmIHRoaXMucGFyZW50LmlzQ29tcG9uZW50VmlzaWJsZSAmJiAhdGhpcy5wYXJlbnQuaXNDb21wb25lbnRWaXNpYmxlKGNvbXBvbmVudCkpIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgfVxuXG4gICAgICBjb25zdCB3aWR0aCA9IHRoaXMud2lkdGg7XG4gICAgICBjb25zdCBoZWlnaHQgPSB0aGlzLmhlaWdodDtcbiAgICAgIGNvbnN0IGNvbXBvbmVudFdpZHRoID0gY29tcG9uZW50LndpZHRoO1xuICAgICAgY29uc3QgY29tcG9uZW50SGVpZ2h0ID0gY29tcG9uZW50LmhlaWdodDtcbiAgICAgIGNvbnN0IGNhbnZhc1dpZHRoID0gKHRoaXMuY2FudmFzICYmIHRoaXMuY2FudmFzLndpZHRoKSB8fCB3aWR0aDtcbiAgICAgIGNvbnN0IGNhbnZhc0hlaWdodCA9ICh0aGlzLmNhbnZhcyAmJiB0aGlzLmNhbnZhcy5oZWlnaHQpIHx8IGhlaWdodDtcblxuICAgICAgaWYoY29tcG9uZW50LnggKyBjb21wb25lbnRXaWR0aCA+PSB0aGlzLnggJiYgY29tcG9uZW50LnggPD0gdGhpcy54ICsgd2lkdGggJiYgY29tcG9uZW50LnkgKyBjb21wb25lbnRIZWlnaHQgPj0gdGhpcy55ICYmIGNvbXBvbmVudC55IDw9IHRoaXMueSArIGhlaWdodCAmJiBjb21wb25lbnQueCArIGNvbXBvbmVudFdpZHRoID49IDAgJiYgY29tcG9uZW50LnggPD0gY2FudmFzV2lkdGggJiYgY29tcG9uZW50LnkgKyBjb21wb25lbnRIZWlnaHQgPj0gMCAmJiBjb21wb25lbnQueSA8PSBjYW52YXNIZWlnaHQpIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgZ2V0IGlzQ3V0dGluZygpIHtcbiAgICByZXR1cm4gIUNvbnN0YW50cy5TZXR0aW5nLkRJU0FCTEVfQ09OVEFJTkVSU19DVVRUSU5HICYmICgoKHRoaXMubWF4V2lkdGggJiYgdGhpcy5pbm5lcldpZHRoID4gdGhpcy5tYXhXaWR0aCkgfHwgKHRoaXMubWF4SGVpZ2h0ICYmIHRoaXMuaW5uZXJIZWlnaHQgPiB0aGlzLm1heEhlaWdodCkpKSAmJiB0aGlzLmNhbnZhc1RtcCAhPSBudWxsO1xuICB9XG5cbiAgZ2V0IGRlZmF1bHRTdHlsZSgpIHtcbiAgICByZXR1cm4gbmV3IFN0eWxlKHtcbiAgICAgIFwicGFkZGluZ1wiOiAwLFxuICAgICAgXCJzcGFjZUJldHdlZW5Db21wb25lbnRzXCI6IENvbnN0YW50cy5TZXR0aW5nLkRFRkFVTFRfU1BBQ0lOR1xuICAgIH0pO1xuICB9XG59IiwiLypcbiAqIENvcHlyaWdodCAoQykgMjAyMCBFbGlhc3RpayAoZWxpYXN0aWtzb2Z0cy5jb20pXG4gKlxuICogVGhpcyBmaWxlIGlzIHBhcnQgb2YgXCJKU0dhbWVUb29sc1wiLlxuICpcbiAqIFwiSlNHYW1lVG9vbHNcIiBpcyBmcmVlIHNvZnR3YXJlOiB5b3UgY2FuIHJlZGlzdHJpYnV0ZSBpdCBhbmQvb3IgbW9kaWZ5XG4gKiBpdCB1bmRlciB0aGUgdGVybXMgb2YgdGhlIEdOVSBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlIGFzIHB1Ymxpc2hlZCBieVxuICogdGhlIEZyZWUgU29mdHdhcmUgRm91bmRhdGlvbiwgZWl0aGVyIHZlcnNpb24gMyBvZiB0aGUgTGljZW5zZSwgb3JcbiAqIChhdCB5b3VyIG9wdGlvbikgYW55IGxhdGVyIHZlcnNpb24uXG4gKlxuICogXCJKU0dhbWVUb29sc1wiIGlzIGRpc3RyaWJ1dGVkIGluIHRoZSBob3BlIHRoYXQgaXQgd2lsbCBiZSB1c2VmdWwsXG4gKiBidXQgV0lUSE9VVCBBTlkgV0FSUkFOVFk7IHdpdGhvdXQgZXZlbiB0aGUgaW1wbGllZCB3YXJyYW50eSBvZlxuICogTUVSQ0hBTlRBQklMSVRZIG9yIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFLiAgU2VlIHRoZVxuICogR05VIEdlbmVyYWwgUHVibGljIExpY2Vuc2UgZm9yIG1vcmUgZGV0YWlscy5cbiAqXG4gKiBZb3Ugc2hvdWxkIGhhdmUgcmVjZWl2ZWQgYSBjb3B5IG9mIHRoZSBHTlUgR2VuZXJhbCBQdWJsaWMgTGljZW5zZVxuICogYWxvbmcgd2l0aCBcIkpTR2FtZVRvb2xzXCIuICBJZiBub3QsIHNlZSA8aHR0cDovL3d3dy5nbnUub3JnL2xpY2Vuc2VzLz4uXG4gKi9cbmltcG9ydCBDb21wb25lbnQgZnJvbSBcIi4vQ29tcG9uZW50XCI7XG5pbXBvcnQgQ29uc3RhbnRzIGZyb20gXCIuL0NvbnN0YW50c1wiO1xuaW1wb3J0IFV0aWxzIGZyb20gXCIuL1V0aWxzXCI7XG5pbXBvcnQgU3R5bGUgZnJvbSBcIi4vU3R5bGVcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ3Jvc3MgZXh0ZW5kcyBDb21wb25lbnQge1xuICBzZWxlY3RhYmxlID0gZmFsc2U7XG5cbiAgY29uc3RydWN0b3IoeCwgeSwgd2lkdGgsIGhlaWdodCwgc3R5bGUpIHtcbiAgICBzdXBlcih4LCB5LCB3aWR0aCwgaGVpZ2h0LCBzdHlsZSk7XG4gIH1cblxuICBkcmF3KGNvbnRleHQpIHtcbiAgICBpZih0aGlzLmhpZGRlbikgcmV0dXJuO1xuICAgIHN1cGVyLmRyYXcoY29udGV4dCk7XG5cbiAgICBjb25zdCBjYW52YXMgPSBjb250ZXh0LmNhbnZhcztcbiAgICBjb25zdCBjdHggPSBjYW52YXMuZ2V0Q29udGV4dChcIjJkXCIpO1xuICAgIFxuICAgIFV0aWxzLmRyYXdDcm9zcyhjdHgsIHRoaXMueCwgdGhpcy55LCB0aGlzLndpZHRoLCB0aGlzLmhlaWdodCwgdGhpcy5zdHlsZS5saW5lV2lkdGgsIHRoaXMuc3R5bGUuY29sb3IsIHRoaXMuc3R5bGUubGluZUNhcCk7XG5cbiAgICB0aGlzLmluaXQgPSB0cnVlO1xuICB9XG5cbiAgZ2V0IHdpZHRoKCkge1xuICAgIHJldHVybiBzdXBlci53aWR0aCArIHRoaXMuc3R5bGUubGluZVdpZHRoO1xuICB9XG5cbiAgZ2V0IGhlaWdodCgpIHtcbiAgICByZXR1cm4gc3VwZXIuaGVpZ2h0ICsgdGhpcy5zdHlsZS5saW5lV2lkdGg7XG4gIH1cblxuICBzZXQgd2lkdGgod2lkdGgpIHtcbiAgICBzdXBlci53aWR0aCA9IHdpZHRoO1xuICB9XG5cbiAgc2V0IGhlaWdodChoZWlnaHQpIHtcbiAgICBzdXBlci5oZWlnaHQgPSBoZWlnaHQ7XG4gIH1cblxuICBnZXQgZGVmYXVsdFN0eWxlKCkge1xuICAgIHJldHVybiBuZXcgU3R5bGUoe1xuICAgICAgXCJsaW5lV2lkdGhcIjogQ29uc3RhbnRzLlNldHRpbmcuQ1JPU1NfREVGQVVMVF9MSU5FX1NJWkUsXG4gICAgICBcImNvbG9yXCI6IENvbnN0YW50cy5TZXR0aW5nLkNST1NTX0RFRkFVTFRfQ09MT1IsXG4gICAgICBcImxpbmVDYXBcIjogQ29uc3RhbnRzLlNldHRpbmcuQ1JPU1NfREVGQVVMVF9MSU5FX0NBUFxuICAgIH0pO1xuICB9XG59IiwiLypcbiAqIENvcHlyaWdodCAoQykgMjAyMCBFbGlhc3RpayAoZWxpYXN0aWtzb2Z0cy5jb20pXG4gKlxuICogVGhpcyBmaWxlIGlzIHBhcnQgb2YgXCJKU0dhbWVUb29sc1wiLlxuICpcbiAqIFwiSlNHYW1lVG9vbHNcIiBpcyBmcmVlIHNvZnR3YXJlOiB5b3UgY2FuIHJlZGlzdHJpYnV0ZSBpdCBhbmQvb3IgbW9kaWZ5XG4gKiBpdCB1bmRlciB0aGUgdGVybXMgb2YgdGhlIEdOVSBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlIGFzIHB1Ymxpc2hlZCBieVxuICogdGhlIEZyZWUgU29mdHdhcmUgRm91bmRhdGlvbiwgZWl0aGVyIHZlcnNpb24gMyBvZiB0aGUgTGljZW5zZSwgb3JcbiAqIChhdCB5b3VyIG9wdGlvbikgYW55IGxhdGVyIHZlcnNpb24uXG4gKlxuICogXCJKU0dhbWVUb29sc1wiIGlzIGRpc3RyaWJ1dGVkIGluIHRoZSBob3BlIHRoYXQgaXQgd2lsbCBiZSB1c2VmdWwsXG4gKiBidXQgV0lUSE9VVCBBTlkgV0FSUkFOVFk7IHdpdGhvdXQgZXZlbiB0aGUgaW1wbGllZCB3YXJyYW50eSBvZlxuICogTUVSQ0hBTlRBQklMSVRZIG9yIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFLiAgU2VlIHRoZVxuICogR05VIEdlbmVyYWwgUHVibGljIExpY2Vuc2UgZm9yIG1vcmUgZGV0YWlscy5cbiAqXG4gKiBZb3Ugc2hvdWxkIGhhdmUgcmVjZWl2ZWQgYSBjb3B5IG9mIHRoZSBHTlUgR2VuZXJhbCBQdWJsaWMgTGljZW5zZVxuICogYWxvbmcgd2l0aCBcIkpTR2FtZVRvb2xzXCIuICBJZiBub3QsIHNlZSA8aHR0cDovL3d3dy5nbnUub3JnL2xpY2Vuc2VzLz4uXG4gKi9cbmV4cG9ydCBkZWZhdWx0IHtcbiAgZWFzZUluQ3ViaWMoeCkge1xuICAgIHJldHVybiB4ICogeCAqIHg7XG4gIH0sXG4gIGVhc2VPdXRCb3VuY2UoeCkge1xuICAgIGNvbnN0IG4xID0gNy41NjI1O1xuICAgIGNvbnN0IGQxID0gMi43NTtcbiAgICBcbiAgICBpZih4IDwgMSAvIGQxKSB7XG4gICAgICByZXR1cm4gbjEgKiB4ICogeDtcbiAgICB9IGVsc2UgaWYoeCA8IDIgLyBkMSkge1xuICAgICAgcmV0dXJuIG4xICogKHggLT0gMS41IC8gZDEpICogeCArIDAuNzU7XG4gICAgfSBlbHNlIGlmKHggPCAyLjUgLyBkMSkge1xuICAgICAgcmV0dXJuIG4xICogKHggLT0gMi4yNSAvIGQxKSAqIHggKyAwLjkzNzU7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiBuMSAqICh4IC09IDIuNjI1IC8gZDEpICogeCArIDAuOTg0Mzc1O1xuICAgIH1cbiAgfSxcbiAgZWFzZUluT3V0Q3ViaWMoeCkge1xuICAgIHJldHVybiB4IDwgMC41ID8gNCAqIHggKiB4ICogeCA6IDEgLSBNYXRoLnBvdygtMiAqIHggKyAyLCAzKSAvIDI7XG4gIH0sXG4gIGVhc2VJbk91dFNpbmUoeCkge1xuICAgIHJldHVybiAtKE1hdGguY29zKE1hdGguUEkgKiB4KSAtIDEpIC8gMjtcbiAgfSxcbiAgZWFzZUluT3V0UXVpbnQoeCkge1xuICAgIHJldHVybiB4IDwgMC41ID8gMTYgKiB4ICogeCAqIHggKiB4ICogeCA6IDEgLSBNYXRoLnBvdygtMiAqIHggKyAyLCA1KSAvIDI7XG4gIH0sXG4gIGVhc2VJbk91dENpcmMoeCkge1xuICAgIHJldHVybiB4IDwgMC41ID8gKDEgLSBNYXRoLnNxcnQoMSAtIE1hdGgucG93KDIgKiB4LCAyKSkpIC8gMiA6IChNYXRoLnNxcnQoMSAtIE1hdGgucG93KC0yICogeCArIDIsIDIpKSArIDEpIC8gMjtcbiAgfSxcbiAgZWFzZUluT3V0UXVhZCh4KSB7XG4gICAgcmV0dXJuIHggPCAwLjUgPyAyICogeCAqIHggOiAxIC0gTWF0aC5wb3coLTIgKiB4ICsgMiwgMikgLyAyO1xuICB9LFxuICBlYXNlSW5PdXRRdWFydCh4KSB7XG4gICAgcmV0dXJuIHggPCAwLjUgPyA4ICogeCAqIHggKiB4ICogeCA6IDEgLSBNYXRoLnBvdygtMiAqIHggKyAyLCA0KSAvIDI7XG4gIH0sXG4gIGVhc2VJbk91dEV4cG8oeCkge1xuICAgIHJldHVybiB4ID09PSAwID8gMCA6IHggPT09IDEgPyAxIDogeCA8IDAuNSA/IE1hdGgucG93KDIsIDIwICogeCAtIDEwKSAvIDIgOiAoMiAtIE1hdGgucG93KDIsIC0yMCAqIHggKyAxMCkpIC8gMjtcbiAgfSxcbiAgZWFzZUluT3V0QmFjayh4KSB7XG4gICAgY29uc3QgYzEgPSAxLjcwMTU4O1xuICAgIGNvbnN0IGMyID0gYzEgKiAxLjUyNTtcbiAgICBcbiAgICByZXR1cm4geCA8IDAuNSA/IChNYXRoLnBvdygyICogeCwgMikgKiAoKGMyICsgMSkgKiAyICogeCAtIGMyKSkgLyAyIDogKE1hdGgucG93KDIgKiB4IC0gMiwgMikgKiAoKGMyICsgMSkgKiAoeCAqIDIgLSAyKSArIGMyKSArIDIpIC8gMjtcbiAgfVxufTsiLCIvKlxuICogQ29weXJpZ2h0IChDKSAyMDIwIEVsaWFzdGlrIChlbGlhc3Rpa3NvZnRzLmNvbSlcbiAqXG4gKiBUaGlzIGZpbGUgaXMgcGFydCBvZiBcIkpTR2FtZVRvb2xzXCIuXG4gKlxuICogXCJKU0dhbWVUb29sc1wiIGlzIGZyZWUgc29mdHdhcmU6IHlvdSBjYW4gcmVkaXN0cmlidXRlIGl0IGFuZC9vciBtb2RpZnlcbiAqIGl0IHVuZGVyIHRoZSB0ZXJtcyBvZiB0aGUgR05VIEdlbmVyYWwgUHVibGljIExpY2Vuc2UgYXMgcHVibGlzaGVkIGJ5XG4gKiB0aGUgRnJlZSBTb2Z0d2FyZSBGb3VuZGF0aW9uLCBlaXRoZXIgdmVyc2lvbiAzIG9mIHRoZSBMaWNlbnNlLCBvclxuICogKGF0IHlvdXIgb3B0aW9uKSBhbnkgbGF0ZXIgdmVyc2lvbi5cbiAqXG4gKiBcIkpTR2FtZVRvb2xzXCIgaXMgZGlzdHJpYnV0ZWQgaW4gdGhlIGhvcGUgdGhhdCBpdCB3aWxsIGJlIHVzZWZ1bCxcbiAqIGJ1dCBXSVRIT1VUIEFOWSBXQVJSQU5UWTsgd2l0aG91dCBldmVuIHRoZSBpbXBsaWVkIHdhcnJhbnR5IG9mXG4gKiBNRVJDSEFOVEFCSUxJVFkgb3IgRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UuICBTZWUgdGhlXG4gKiBHTlUgR2VuZXJhbCBQdWJsaWMgTGljZW5zZSBmb3IgbW9yZSBkZXRhaWxzLlxuICpcbiAqIFlvdSBzaG91bGQgaGF2ZSByZWNlaXZlZCBhIGNvcHkgb2YgdGhlIEdOVSBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlXG4gKiBhbG9uZyB3aXRoIFwiSlNHYW1lVG9vbHNcIi4gIElmIG5vdCwgc2VlIDxodHRwOi8vd3d3LmdudS5vcmcvbGljZW5zZXMvPi5cbiAqL1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRXZlbnQge1xuICBjb25zdHJ1Y3RvcihuYW1lKSB7XG4gICAgdGhpcy5uYW1lID0gbmFtZTtcbiAgICB0aGlzLmNhbGxiYWNrcyA9IFtdO1xuICB9XG5cbiAgcmVnaXN0ZXJDYWxsYmFjayhjYWxsYmFjaykge1xuICAgIHRoaXMuY2FsbGJhY2tzLnB1c2goY2FsbGJhY2spO1xuICB9XG5cbiAgcmVtb3ZlQ2FsbGJhY2soY2FsbGJhY2spIHtcbiAgICB0aGlzLmNhbGxiYWNrcy5maWx0ZXIoY3VycmVudCA9PiBjdXJyZW50ICE9IGNhbGxiYWNrKTtcbiAgfVxuXG4gIHJlbW92ZUFsbENhbGxiYWNrcygpIHtcbiAgICB0aGlzLmNhbGxiYWNrcyA9IFtdO1xuICB9XG59IiwiLypcbiAqIENvcHlyaWdodCAoQykgMjAyMCBFbGlhc3RpayAoZWxpYXN0aWtzb2Z0cy5jb20pXG4gKlxuICogVGhpcyBmaWxlIGlzIHBhcnQgb2YgXCJKU0dhbWVUb29sc1wiLlxuICpcbiAqIFwiSlNHYW1lVG9vbHNcIiBpcyBmcmVlIHNvZnR3YXJlOiB5b3UgY2FuIHJlZGlzdHJpYnV0ZSBpdCBhbmQvb3IgbW9kaWZ5XG4gKiBpdCB1bmRlciB0aGUgdGVybXMgb2YgdGhlIEdOVSBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlIGFzIHB1Ymxpc2hlZCBieVxuICogdGhlIEZyZWUgU29mdHdhcmUgRm91bmRhdGlvbiwgZWl0aGVyIHZlcnNpb24gMyBvZiB0aGUgTGljZW5zZSwgb3JcbiAqIChhdCB5b3VyIG9wdGlvbikgYW55IGxhdGVyIHZlcnNpb24uXG4gKlxuICogXCJKU0dhbWVUb29sc1wiIGlzIGRpc3RyaWJ1dGVkIGluIHRoZSBob3BlIHRoYXQgaXQgd2lsbCBiZSB1c2VmdWwsXG4gKiBidXQgV0lUSE9VVCBBTlkgV0FSUkFOVFk7IHdpdGhvdXQgZXZlbiB0aGUgaW1wbGllZCB3YXJyYW50eSBvZlxuICogTUVSQ0hBTlRBQklMSVRZIG9yIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFLiAgU2VlIHRoZVxuICogR05VIEdlbmVyYWwgUHVibGljIExpY2Vuc2UgZm9yIG1vcmUgZGV0YWlscy5cbiAqXG4gKiBZb3Ugc2hvdWxkIGhhdmUgcmVjZWl2ZWQgYSBjb3B5IG9mIHRoZSBHTlUgR2VuZXJhbCBQdWJsaWMgTGljZW5zZVxuICogYWxvbmcgd2l0aCBcIkpTR2FtZVRvb2xzXCIuICBJZiBub3QsIHNlZSA8aHR0cDovL3d3dy5nbnUub3JnL2xpY2Vuc2VzLz4uXG4gKi9cbmltcG9ydCBMYWJlbCBmcm9tIFwiLi9MYWJlbFwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBGUFNNZXRlciBleHRlbmRzIExhYmVsIHtcbiAgc2VsZWN0YWJsZSA9IGZhbHNlO1xuXG4gIGNvbnN0cnVjdG9yKGRpc3BsYXlGcmFtZXMsIHgsIHksIHN0eWxlKSB7XG4gICAgc3VwZXIobnVsbCwgeCwgeSwgc3R5bGUpO1xuXG4gICAgdGhpcy5kaXNwbGF5RnJhbWVzID0gZGlzcGxheUZyYW1lcyB8fCBmYWxzZTtcbiAgICB0aGlzLmZyYW1lcyA9IDA7XG4gICAgdGhpcy5sYXN0RnJhbWUgPSAwO1xuICAgIHRoaXMuY3VycmVudEZQUyA9IDA7XG5cbiAgICB0aGlzLmludGVydmFsQ291bnRGUFMgPSBzZXRJbnRlcnZhbCgoKSA9PiB0aGlzLmNvdW50RlBTKCksIDEwMDApO1xuICB9XG5cbiAgZHJhdyhjb250ZXh0KSB7XG4gICAgaWYodGhpcy5oaWRkZW4pIHJldHVybjtcbiAgICB0aGlzLnRleHQgPSBcIkZQUzogXCIgKyB0aGlzLmN1cnJlbnRGUFMgKyAodGhpcy5kaXNwbGF5RnJhbWVzID8gXCIgLyBGcmFtZXM6IFwiICsgdGhpcy5mcmFtZXMgOiBcIlwiKTtcbiAgICBzdXBlci5kcmF3KGNvbnRleHQpO1xuICAgIHRoaXMuZnJhbWVzKys7XG4gIH1cblxuICBjb3VudEZQUygpIHtcbiAgICBpZih0aGlzLmxhc3RGcmFtZSA+IDApIHRoaXMuY3VycmVudEZQUyA9IHRoaXMuZnJhbWVzIC0gdGhpcy5sYXN0RnJhbWU7XG4gICAgdGhpcy5sYXN0RnJhbWUgPSB0aGlzLmZyYW1lcztcbiAgfVxufSIsIi8qXG4gKiBDb3B5cmlnaHQgKEMpIDIwMjAgRWxpYXN0aWsgKGVsaWFzdGlrc29mdHMuY29tKVxuICpcbiAqIFRoaXMgZmlsZSBpcyBwYXJ0IG9mIFwiSlNHYW1lVG9vbHNcIi5cbiAqXG4gKiBcIkpTR2FtZVRvb2xzXCIgaXMgZnJlZSBzb2Z0d2FyZTogeW91IGNhbiByZWRpc3RyaWJ1dGUgaXQgYW5kL29yIG1vZGlmeVxuICogaXQgdW5kZXIgdGhlIHRlcm1zIG9mIHRoZSBHTlUgR2VuZXJhbCBQdWJsaWMgTGljZW5zZSBhcyBwdWJsaXNoZWQgYnlcbiAqIHRoZSBGcmVlIFNvZnR3YXJlIEZvdW5kYXRpb24sIGVpdGhlciB2ZXJzaW9uIDMgb2YgdGhlIExpY2Vuc2UsIG9yXG4gKiAoYXQgeW91ciBvcHRpb24pIGFueSBsYXRlciB2ZXJzaW9uLlxuICpcbiAqIFwiSlNHYW1lVG9vbHNcIiBpcyBkaXN0cmlidXRlZCBpbiB0aGUgaG9wZSB0aGF0IGl0IHdpbGwgYmUgdXNlZnVsLFxuICogYnV0IFdJVEhPVVQgQU5ZIFdBUlJBTlRZOyB3aXRob3V0IGV2ZW4gdGhlIGltcGxpZWQgd2FycmFudHkgb2ZcbiAqIE1FUkNIQU5UQUJJTElUWSBvciBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRS4gIFNlZSB0aGVcbiAqIEdOVSBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlIGZvciBtb3JlIGRldGFpbHMuXG4gKlxuICogWW91IHNob3VsZCBoYXZlIHJlY2VpdmVkIGEgY29weSBvZiB0aGUgR05VIEdlbmVyYWwgUHVibGljIExpY2Vuc2VcbiAqIGFsb25nIHdpdGggXCJKU0dhbWVUb29sc1wiLiAgSWYgbm90LCBzZWUgPGh0dHA6Ly93d3cuZ251Lm9yZy9saWNlbnNlcy8+LlxuICovXG5pbXBvcnQgVXRpbHMgZnJvbSBcIi4vVXRpbHNcIjtcbmltcG9ydCBDb21wb25lbnQgZnJvbSBcIi4vQ29tcG9uZW50XCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEltYWdlQ29udGFpbmVyIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgc2VsZWN0YWJsZSA9IGZhbHNlO1xuXG4gIGNvbnN0cnVjdG9yKGltYWdlLCB4LCB5LCB3aWR0aCwgaGVpZ2h0LCBzdHlsZSwgaW1hZ2VMb2FkZXIpIHtcbiAgICBzdXBlcih4LCB5LCB3aWR0aCwgaGVpZ2h0LCBzdHlsZSk7XG4gICAgdGhpcy5pbWFnZTtcbiAgICB0aGlzLmltZ1NyYztcbiAgICB0aGlzLmltYWdlTG9hZGVyID0gaW1hZ2VMb2FkZXI7XG5cbiAgICBpZihpbWFnZSBpbnN0YW5jZW9mIEltYWdlKSB7XG4gICAgICB0aGlzLmltYWdlID0gaW1hZ2U7XG4gICAgICB0aGlzLmltZ1NyYyA9IGltYWdlLnNyYztcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5pbWdTcmMgPSBpbWFnZTtcbiAgICB9XG4gIH1cblxuICBkcmF3KGNvbnRleHQpIHtcbiAgICBpZih0aGlzLmhpZGRlbikgcmV0dXJuO1xuICAgIHN1cGVyLmRyYXcoY29udGV4dCk7XG4gICAgXG4gICAgY29uc3QgY2FudmFzID0gY29udGV4dC5jYW52YXM7XG4gICAgY29uc3QgY3R4ID0gY2FudmFzLmdldENvbnRleHQoXCIyZFwiKTtcbiAgICBjdHguc2F2ZSgpO1xuICAgIFxuICAgIGlmKHRoaXMuaW1nU3JjICE9IG51bGwgJiYgdGhpcy5pbWFnZUxvYWRlciAhPSBudWxsKSB7XG4gICAgICB0aGlzLmxvYWRJbWFnZSh0aGlzLmltYWdlTG9hZGVyKTtcbiAgICB9XG5cbiAgICBpZih0aGlzLmltYWdlICE9IG51bGwpIHtcbiAgICAgIHRoaXMuZHJhd0ltYWdlKGN0eCk7XG4gICAgfVxuXG4gICAgY3R4LnJlc3RvcmUoKTtcbiAgfVxuXG4gIGRyYXdJbWFnZShjdHgpIHtcbiAgICBVdGlscy5kcmF3SW1hZ2UoY3R4LCB0aGlzLmltYWdlLCBNYXRoLnJvdW5kKHRoaXMueCksIE1hdGgucm91bmQodGhpcy55KSwgTWF0aC5yb3VuZCh0aGlzLndpZHRoKSwgTWF0aC5yb3VuZCh0aGlzLmhlaWdodCkpO1xuICB9XG5cbiAgZ2V0IHNpemVzKCkge1xuICAgIGxldCBpbWdXaWR0aCA9IHN1cGVyLndpZHRoO1xuICAgIGxldCBpbWdIZWlnaHQgPSBzdXBlci5oZWlnaHQ7XG5cbiAgICBpZih0aGlzLmltYWdlTG9hZGVyKSB7XG4gICAgICB0aGlzLmxvYWRJbWFnZSh0aGlzLmltYWdlTG9hZGVyKTtcbiAgICB9XG4gICAgXG4gICAgaWYodGhpcy5pbWFnZSAmJiAodGhpcy5pbWFnZS53aWR0aCA+IHN1cGVyLndpZHRoIHx8IHRoaXMuaW1hZ2UuaGVpZ2h0ID4gc3VwZXIuaGVpZ2h0KSkge1xuICAgICAgY29uc3QgYXNwZWN0UmF0aW8gPSB0aGlzLmltYWdlLndpZHRoIC8gdGhpcy5pbWFnZS5oZWlnaHQ7XG4gICAgICBpbWdXaWR0aCA9IE1hdGguZmxvb3Ioc3VwZXIud2lkdGggLyAxLjI1KTtcbiAgICAgIGltZ0hlaWdodCA9IE1hdGguZmxvb3IoaW1nV2lkdGggLyBhc3BlY3RSYXRpbyk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHtcbiAgICAgIHdpZHRoOiBpbWdXaWR0aCxcbiAgICAgIGhlaWdodDogaW1nSGVpZ2h0XG4gICAgfVxuICB9XG5cbiAgZ2V0IGhlaWdodCgpIHtcbiAgICByZXR1cm4gdGhpcy5zaXplcy5oZWlnaHQ7XG4gIH1cblxuICBnZXQgd2lkdGgoKSB7XG4gICAgcmV0dXJuIHRoaXMuc2l6ZXMud2lkdGg7XG4gIH1cblxuICBzZXQgd2lkdGgod2lkdGgpIHtcbiAgICBzdXBlci53aWR0aCA9IHdpZHRoO1xuICB9XG5cbiAgc2V0IGhlaWdodChoZWlnaHQpIHtcbiAgICBzdXBlci5oZWlnaHQgPSBoZWlnaHQ7XG4gIH1cbiAgXG4gIGxvYWRJbWFnZShpbWFnZUxvYWRlcikge1xuICAgIHRoaXMuaW1hZ2UgPSBpbWFnZUxvYWRlci5nZXQodGhpcy5pbWdTcmMpO1xuICB9XG59IiwiLypcbiAqIENvcHlyaWdodCAoQykgMjAyMCBFbGlhc3RpayAoZWxpYXN0aWtzb2Z0cy5jb20pXG4gKlxuICogVGhpcyBmaWxlIGlzIHBhcnQgb2YgXCJKU0dhbWVUb29sc1wiLlxuICpcbiAqIFwiSlNHYW1lVG9vbHNcIiBpcyBmcmVlIHNvZnR3YXJlOiB5b3UgY2FuIHJlZGlzdHJpYnV0ZSBpdCBhbmQvb3IgbW9kaWZ5XG4gKiBpdCB1bmRlciB0aGUgdGVybXMgb2YgdGhlIEdOVSBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlIGFzIHB1Ymxpc2hlZCBieVxuICogdGhlIEZyZWUgU29mdHdhcmUgRm91bmRhdGlvbiwgZWl0aGVyIHZlcnNpb24gMyBvZiB0aGUgTGljZW5zZSwgb3JcbiAqIChhdCB5b3VyIG9wdGlvbikgYW55IGxhdGVyIHZlcnNpb24uXG4gKlxuICogXCJKU0dhbWVUb29sc1wiIGlzIGRpc3RyaWJ1dGVkIGluIHRoZSBob3BlIHRoYXQgaXQgd2lsbCBiZSB1c2VmdWwsXG4gKiBidXQgV0lUSE9VVCBBTlkgV0FSUkFOVFk7IHdpdGhvdXQgZXZlbiB0aGUgaW1wbGllZCB3YXJyYW50eSBvZlxuICogTUVSQ0hBTlRBQklMSVRZIG9yIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFLiAgU2VlIHRoZVxuICogR05VIEdlbmVyYWwgUHVibGljIExpY2Vuc2UgZm9yIG1vcmUgZGV0YWlscy5cbiAqXG4gKiBZb3Ugc2hvdWxkIGhhdmUgcmVjZWl2ZWQgYSBjb3B5IG9mIHRoZSBHTlUgR2VuZXJhbCBQdWJsaWMgTGljZW5zZVxuICogYWxvbmcgd2l0aCBcIkpTR2FtZVRvb2xzXCIuICBJZiBub3QsIHNlZSA8aHR0cDovL3d3dy5nbnUub3JnL2xpY2Vuc2VzLz4uXG4gKi9cbmltcG9ydCBVdGlscyBmcm9tIFwiLi9VdGlsc1wiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBJbWFnZUxvYWRlciB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHRoaXMuaW1hZ2VzID0ge307XG4gICAgdGhpcy5pbWFnZXNSZXNpemVkID0ge307XG4gICAgdGhpcy50cmllZExvYWRpbmcgPSAwO1xuICAgIHRoaXMuaGFzRXJyb3IgPSBmYWxzZTtcbiAgICB0aGlzLm5iSW1hZ2VzVG9Mb2FkID0gMTtcbiAgICB0aGlzLmZpcnN0SW1hZ2UgPSB0cnVlO1xuICB9XG5cbiAgbG9hZChpbWcsIGZ1bmMpIHtcbiAgICBpZih0aGlzLmZpcnN0SW1hZ2UpIHtcbiAgICAgIHRoaXMubmJJbWFnZXNUb0xvYWQgPSBpbWcubGVuZ3RoO1xuICAgICAgdGhpcy5maXJzdEltYWdlID0gZmFsc2U7XG4gICAgfVxuICAgIFxuICAgIGlmKGltZy5sZW5ndGggPiAwKSB7XG4gICAgICB0aGlzLmxvYWRJbWFnZShpbWdbMF0sIHJlc3VsdCA9PiB7XG4gICAgICAgIGlmKHJlc3VsdCA9PSB0cnVlKSB7XG4gICAgICAgICAgaW1nLnNoaWZ0KCk7XG4gICAgICAgICAgdGhpcy5sb2FkKGltZywgZnVuYyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdGhpcy5oYXNFcnJvciA9IHRydWU7XG4gICAgICAgICAgcmV0dXJuIGZ1bmMoKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiBmdW5jKCk7XG4gICAgfVxuICB9XG5cbiAgbG9hZEltYWdlKHNyYywgZnVuYykge1xuICAgIHRoaXMudHJpZWRMb2FkaW5nKys7XG4gIFxuICAgIGNvbnN0IGltYWdlID0gbmV3IEltYWdlKCk7XG4gICAgaW1hZ2Uuc3JjID0gc3JjO1xuICBcbiAgICBpbWFnZS5vbmxvYWQgPSAoKSA9PiB7XG4gICAgICBpZih0aGlzLmltYWdlcyAhPSBudWxsKSB7XG4gICAgICAgIHRoaXMuaW1hZ2VzW3NyY10gPSBpbWFnZTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiBmdW5jKGZhbHNlKTtcbiAgICAgIH1cbiAgXG4gICAgICB0aGlzLnRyaWVkTG9hZGluZyA9IDA7XG4gICAgICByZXR1cm4gZnVuYyh0cnVlKTtcbiAgICB9O1xuICBcbiAgICBpbWFnZS5vbmVycm9yID0gKCkgPT4ge1xuICAgICAgaWYodGhpcy50cmllZExvYWRpbmcgPj0gNSkge1xuICAgICAgICBpZih0aGlzLmltYWdlcyAhPSBudWxsKSB7XG4gICAgICAgICAgdGhpcy5pbWFnZXNbc3JjXSA9IGltYWdlO1xuICAgICAgICB9XG4gIFxuICAgICAgICB0aGlzLnRyaWVkTG9hZGluZyA9IDA7XG4gICAgICAgIHJldHVybiBmdW5jKGZhbHNlKTtcbiAgICAgIH1cbiAgXG4gICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgdGhpcy5sb2FkSW1hZ2Uoc3JjLCBmdW5jKTtcbiAgICAgIH0sIDI1MCk7XG4gICAgfVxuICB9XG5cbiAgZ2V0KHNyYywgd2lkdGgsIGhlaWdodCkge1xuICAgIGlmKHRoaXMuaW1hZ2VzICE9IG51bGwgJiYgdGhpcy5pbWFnZXMuaGFzT3duUHJvcGVydHkoc3JjKSkge1xuICAgICAgY29uc3QgaW1hZ2UgPSB0aGlzLmltYWdlc1tzcmNdO1xuXG4gICAgICBpZigod2lkdGggfHwgaGVpZ2h0KSAmJiAoaW1hZ2Uud2lkdGggIT0gd2lkdGggfHwgaW1hZ2UuaGVpZ2h0ICE9IGhlaWdodCkpIHtcbiAgICAgICAgY29uc3QgdyA9IE1hdGgucm91bmQod2lkdGgpO1xuICAgICAgICBjb25zdCBoID0gTWF0aC5yb3VuZChoZWlnaHQpO1xuICAgICAgICBjb25zdCBpZCA9IHNyYyArIFwiQFwiICsgdyArIFwiLVwiICsgaDtcblxuICAgICAgICBpZighdGhpcy5pbWFnZXNSZXNpemVkLmhhc093blByb3BlcnR5KGlkKSkge1xuICAgICAgICAgIGNvbnN0IGNhbnZhc1RtcCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJjYW52YXNcIik7XG4gICAgICAgICAgY29uc3QgY3R4ID0gY2FudmFzVG1wLmdldENvbnRleHQoXCIyZFwiKTtcbiAgICAgICAgICBjYW52YXNUbXAud2lkdGggPSB3O1xuICAgICAgICAgIGNhbnZhc1RtcC5oZWlnaHQgPSBoO1xuXG4gICAgICAgICAgVXRpbHMuZHJhd0ltYWdlKGN0eCwgaW1hZ2UsIDAsIDAsIHcsIGgsIDAsIDAsIGltYWdlLndpZHRoLCBpbWFnZS5oZWlnaHQpO1xuICAgICAgICAgIHRoaXMuaW1hZ2VzUmVzaXplZFtpZF0gPSBjYW52YXNUbXA7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gdGhpcy5pbWFnZXNSZXNpemVkW2lkXTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiBpbWFnZTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuICB9XG5cbiAgY2xlYXIoKSB7XG4gICAgdGhpcy5pbWFnZXMgPSBudWxsO1xuICB9XG59IiwiLypcbiAqIENvcHlyaWdodCAoQykgMjAyMCBFbGlhc3RpayAoZWxpYXN0aWtzb2Z0cy5jb20pXG4gKlxuICogVGhpcyBmaWxlIGlzIHBhcnQgb2YgXCJKU0dhbWVUb29sc1wiLlxuICpcbiAqIFwiSlNHYW1lVG9vbHNcIiBpcyBmcmVlIHNvZnR3YXJlOiB5b3UgY2FuIHJlZGlzdHJpYnV0ZSBpdCBhbmQvb3IgbW9kaWZ5XG4gKiBpdCB1bmRlciB0aGUgdGVybXMgb2YgdGhlIEdOVSBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlIGFzIHB1Ymxpc2hlZCBieVxuICogdGhlIEZyZWUgU29mdHdhcmUgRm91bmRhdGlvbiwgZWl0aGVyIHZlcnNpb24gMyBvZiB0aGUgTGljZW5zZSwgb3JcbiAqIChhdCB5b3VyIG9wdGlvbikgYW55IGxhdGVyIHZlcnNpb24uXG4gKlxuICogXCJKU0dhbWVUb29sc1wiIGlzIGRpc3RyaWJ1dGVkIGluIHRoZSBob3BlIHRoYXQgaXQgd2lsbCBiZSB1c2VmdWwsXG4gKiBidXQgV0lUSE9VVCBBTlkgV0FSUkFOVFk7IHdpdGhvdXQgZXZlbiB0aGUgaW1wbGllZCB3YXJyYW50eSBvZlxuICogTUVSQ0hBTlRBQklMSVRZIG9yIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFLiAgU2VlIHRoZVxuICogR05VIEdlbmVyYWwgUHVibGljIExpY2Vuc2UgZm9yIG1vcmUgZGV0YWlscy5cbiAqXG4gKiBZb3Ugc2hvdWxkIGhhdmUgcmVjZWl2ZWQgYSBjb3B5IG9mIHRoZSBHTlUgR2VuZXJhbCBQdWJsaWMgTGljZW5zZVxuICogYWxvbmcgd2l0aCBcIkpTR2FtZVRvb2xzXCIuICBJZiBub3QsIHNlZSA8aHR0cDovL3d3dy5nbnUub3JnL2xpY2Vuc2VzLz4uXG4gKi9cbmltcG9ydCBDb25zdGFudHMgZnJvbSBcIi4vQ29uc3RhbnRzXCI7XG5pbXBvcnQgVXRpbHMgZnJvbSBcIi4vVXRpbHNcIjtcbmltcG9ydCBCb3ggZnJvbSBcIi4vQm94XCI7XG5pbXBvcnQgU3R5bGUgZnJvbSBcIi4vU3R5bGVcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgSW5wdXQgZXh0ZW5kcyBCb3gge1xuICBzZWxlY3RhYmxlID0gdHJ1ZTtcbiAgI19wb3NpdGlvblN0YXJ0ID0gMDtcbiAgI19wb3NpdGlvblN0YXJ0Q2xpY2sgPSAwO1xuICAjX3Bvc2l0aW9uRW5kID0gMDtcblxuICBjb25zdHJ1Y3Rvcih4LCB5LCB3aWR0aCwgaGVpZ2h0LCBzdHlsZSwgZGVmYXVsdFRleHQpIHtcbiAgICBzdXBlcih4LCB5LCB3aWR0aCwgaGVpZ2h0LCBzdHlsZSk7XG4gICAgXG4gICAgdGhpcy50ZXh0ID0gZGVmYXVsdFRleHQgfHwgXCJcIjtcbiAgICB0aGlzLiNfcG9zaXRpb25TdGFydCA9IDA7XG4gICAgdGhpcy4jX3Bvc2l0aW9uRW5kID0gMDtcbiAgICB0aGlzLiNfcG9zaXRpb25TdGFydENsaWNrID0gMDtcbiAgICB0aGlzLmxhc3RJbnB1dFRleHQgPSBmYWxzZTtcbiAgICB0aGlzLm9mZnNldFggPSAwO1xuICAgIHRoaXMubGFzdFRpbWUgPSAwO1xuICAgIHRoaXMudG90YWxUaW1lID0gMDtcbiAgICB0aGlzLmNsaWNrQ3VycmVudFBvc2l0aW9uID0gbnVsbDtcbiAgICB0aGlzLnRleHRDYWNoZSA9IG51bGw7XG5cbiAgICB0aGlzLmlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xuICAgIHRoaXMuaW5wdXQuc2V0QXR0cmlidXRlKFwidHlwZVwiLCBcInRleHRcIik7XG4gICAgdGhpcy5pbnB1dC5zdHlsZS5wb3NpdGlvbiA9IFwiYWJzb2x1dGVcIjtcbiAgICB0aGlzLmlucHV0LnN0eWxlLmxlZnQgPSBcIi05OTk5cHhcIjtcbiAgICB0aGlzLmlucHV0LnRhYkluZGV4ID0gLTE7XG4gICAgdGhpcy5pbnB1dC52YWx1ZSA9IHRoaXMudGV4dDtcbiAgICB0aGlzLmlucHV0LmFkZEV2ZW50TGlzdGVuZXIoXCJibHVyXCIsICgpID0+IHRoaXMuc2VsZWN0ZWQgPSBmYWxzZSk7XG4gICAgdGhpcy5pbnB1dC5hZGRFdmVudExpc3RlbmVyKFwiZm9jdXNcIiwgKCkgPT4gdGhpcy5zZWxlY3RlZCA9IHRydWUpO1xuICAgIHRoaXMuaW5wdXQuYWRkRXZlbnRMaXN0ZW5lcihcImlucHV0XCIsICgpID0+IHtcbiAgICAgIHRoaXMudG90YWxUaW1lID0gMFxuICAgICAgdGhpcy5sYXN0SW5wdXRUZXh0ID0gdHJ1ZTtcbiAgICAgIHRoaXMucG9zaXRpb25TdGFydCA9IHRoaXMuaW5wdXQuc2VsZWN0aW9uU3RhcnQ7XG4gICAgICB0aGlzLnBvc2l0aW9uRW5kID0gdGhpcy5pbnB1dC5zZWxlY3Rpb25FbmQ7XG4gICAgfSk7XG5cbiAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKHRoaXMuaW5wdXQpO1xuXG4gICAgdGhpcy5hcHBlbmRUb0NhbnZhcyA9IGZhbHNlO1xuICAgIHRoaXMubm90aWNlTG9nZ2VkID0gZmFsc2U7XG5cbiAgICB0aGlzLmNhbnZhc1RtcCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJjYW52YXNcIik7XG5cbiAgICBjb25zdCBtb3ZlQWN0aW9uQ2FsbGJhY2sgPSAoZGVsdGFYLCBkZWx0YVksIHBvc2l0aW9uKSA9PiB7XG4gICAgICBpZihwb3NpdGlvbikge1xuICAgICAgICBjb25zdCBpQ2xpY2sgPSB0aGlzLmdldExldHRlckNsaWNrZWQocG9zaXRpb24pO1xuICBcbiAgICAgICAgaWYoaUNsaWNrICE9IG51bGwpIHtcbiAgICAgICAgICBpZihpQ2xpY2sgPiB0aGlzLnBvc2l0aW9uU3RhcnRDbGljaykge1xuICAgICAgICAgICAgdGhpcy5zZXRTZWxlY3Rpb25SYW5nZSh0aGlzLnBvc2l0aW9uU3RhcnRDbGljaywgaUNsaWNrLCBcImZvcndhcmRcIik7XG4gICAgICAgICAgfSBlbHNlIGlmKGlDbGljayA8IHRoaXMucG9zaXRpb25TdGFydENsaWNrKSB7XG4gICAgICAgICAgICB0aGlzLnNldFNlbGVjdGlvblJhbmdlKGlDbGljaywgdGhpcy5wb3NpdGlvblN0YXJ0Q2xpY2ssIFwiYmFja3dhcmRcIik7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfTtcblxuICAgIHRoaXMuYWRkRG93bkFjdGlvbihwb3NpdGlvbiA9PiB7XG4gICAgICBjb25zdCBpQ2xpY2sgPSB0aGlzLmdldExldHRlckNsaWNrZWQocG9zaXRpb24pO1xuXG4gICAgICBpZihpQ2xpY2sgIT0gbnVsbCkge1xuICAgICAgICB0aGlzLnBvc2l0aW9uU3RhcnRDbGljayA9IGlDbGljaztcbiAgICAgICAgdGhpcy5zZXRTZWxlY3Rpb25SYW5nZShpQ2xpY2ssIGlDbGljaywgXCJmb3J3YXJkXCIpO1xuICAgICAgfVxuXG4gICAgICB0aGlzLnRvdGFsVGltZSA9IDA7XG4gICAgfSk7XG5cbiAgICB0aGlzLmFkZENsaWNrQWN0aW9uKCgpID0+IHRoaXMuY2xpY2soKSk7XG4gICAgdGhpcy5hZGRNb3ZlQWN0aW9uKG1vdmVBY3Rpb25DYWxsYmFjayk7XG4gICAgdGhpcy5hZGRTY3JvbGxBY3Rpb24obW92ZUFjdGlvbkNhbGxiYWNrKTtcbiAgfVxuXG4gIGRyYXcoY29udGV4dCkge1xuICAgIGlmKHRoaXMuaGlkZGVuKSByZXR1cm47XG4gICAgc3VwZXIuZHJhdyhjb250ZXh0KTtcbiAgICBcbiAgICBjb25zdCBjYW52YXMgPSBjb250ZXh0LmNhbnZhcztcbiAgICBjb25zdCBjdHggPSBjYW52YXMuZ2V0Q29udGV4dChcIjJkXCIpO1xuICAgIGN0eC5zYXZlKCk7XG5cbiAgICBpZih0aGlzLmlucHV0LnNlbGVjdGlvbkVuZCAhPSB0aGlzLnBvc2l0aW9uRW5kKSB0aGlzLnRvdGFsVGltZSA9IDA7XG5cbiAgICBpZih0aGlzLmNhbnZhcyAmJiB0aGlzLmNhbnZhcy5jb250YWluZXIgJiYgIXRoaXMuYXBwZW5kVG9DYW52YXMpIHtcbiAgICAgIGRvY3VtZW50LmJvZHkucmVtb3ZlQ2hpbGQodGhpcy5pbnB1dCk7XG4gICAgICB0aGlzLmNhbnZhcy5jb250YWluZXIuYXBwZW5kQ2hpbGQodGhpcy5pbnB1dCk7XG4gICAgICB0aGlzLmFwcGVuZFRvQ2FudmFzID0gdHJ1ZTtcbiAgICB9IGVsc2UgaWYoIXRoaXMuY2FudmFzICYmICF0aGlzLm5vdGljZUxvZ2dlZCkge1xuICAgICAgY29uc29sZSAmJiBjb25zb2xlLndhcm4gJiYgY29uc29sZS53YXJuKENvbnN0YW50cy5TdHJpbmcuV0FSTklOR19NRVNTQUdFICsgXCIgXCIgKyBDb25zdGFudHMuU3RyaW5nLklOUFVUX0ZVTExTQ1JFRU4pO1xuICAgICAgdGhpcy5ub3RpY2VMb2dnZWQgPSB0cnVlO1xuICAgIH1cblxuICAgIGlmKHRoaXMuc2VsZWN0ZWQgJiYgIXRoaXMuZGlzYWJsZWQpIHtcbiAgICAgIHRoaXMuY2xpY2soKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5ibHVyKCk7XG4gICAgfVxuXG4gICAgdGhpcy50ZXh0ID0gdGhpcy5pbnB1dC52YWx1ZTtcbiAgICB0aGlzLnBvc2l0aW9uU3RhcnQgPSB0aGlzLmlucHV0LnNlbGVjdGlvblN0YXJ0O1xuICAgIHRoaXMucG9zaXRpb25FbmQgPSB0aGlzLmlucHV0LnNlbGVjdGlvbkVuZDtcblxuICAgIGNvbnN0IHRpbWUgPSBwZXJmb3JtYW5jZS5ub3coKTtcbiAgICBsZXQgb2Zmc2V0VGltZSA9IDA7XG5cbiAgICBpZih0aGlzLmxhc3RUaW1lID4gMCkgb2Zmc2V0VGltZSA9IHRpbWUgLSB0aGlzLmxhc3RUaW1lO1xuICAgIHRoaXMubGFzdFRpbWUgPSB0aW1lO1xuICAgIHRoaXMudG90YWxUaW1lICs9IG9mZnNldFRpbWU7XG5cbiAgICB0aGlzLmRyYXdCYWNrZ3JvdW5kKGN0eCk7XG4gICAgdGhpcy5kcmF3Qm9yZGVyKGN0eCk7XG5cbiAgICB0aGlzLmNhbnZhc1RtcC53aWR0aCA9IFV0aWxzLmdldENhbnZhc1dpZHRoKGNhbnZhcykgKiBDb25zdGFudHMuU2V0dGluZy5QSVhFTF9SQVRJTztcbiAgICB0aGlzLmNhbnZhc1RtcC5oZWlnaHQgPSBVdGlscy5nZXRDYW52YXNIZWlnaHQoY2FudmFzKSAqIENvbnN0YW50cy5TZXR0aW5nLlBJWEVMX1JBVElPO1xuICAgIHRoaXMuY2FudmFzVG1wLnN0eWxlLndpZHRoID0gVXRpbHMuZ2V0Q2FudmFzV2lkdGgoY2FudmFzKTtcbiAgICB0aGlzLmNhbnZhc1RtcC5zdHlsZS5oZWlnaHQgPSBVdGlscy5nZXRDYW52YXNIZWlnaHQoY2FudmFzKTtcbiAgICBjb25zdCBjdHhUZXh0ID0gdGhpcy5jYW52YXNUbXAuZ2V0Q29udGV4dChcIjJkXCIpO1xuICAgIFV0aWxzLmNsZWFyKGN0eFRleHQpO1xuICAgIGN0eFRleHQuc2NhbGUoQ29uc3RhbnRzLlNldHRpbmcuUElYRUxfUkFUSU8sIENvbnN0YW50cy5TZXR0aW5nLlBJWEVMX1JBVElPKTtcblxuICAgIHRoaXMudXBkYXRlVGV4dENhY2hlKHRoaXMueCArIDUpO1xuICAgIHRoaXMuYXV0b1Njcm9sbCgpO1xuICAgIHRoaXMuZHJhd1RleHQoY3R4VGV4dCwgdGhpcy54ICsgNSk7XG5cbiAgICBVdGlscy5kcmF3SW1hZ2VEYXRhKGN0eCwgdGhpcy5jYW52YXNUbXAsIHRoaXMueCArIHRoaXMuc3R5bGUuYm9yZGVyU2l6ZSwgdGhpcy55ICsgdGhpcy5zdHlsZS5ib3JkZXJTaXplLCB0aGlzLndpZHRoIC0gdGhpcy5zdHlsZS5ib3JkZXJTaXplICogMiwgdGhpcy5oZWlnaHQgLSB0aGlzLnN0eWxlLmJvcmRlclNpemUgKiAyLCAodGhpcy54ICsgdGhpcy5zdHlsZS5ib3JkZXJTaXplKSAqIENvbnN0YW50cy5TZXR0aW5nLlBJWEVMX1JBVElPLCAodGhpcy55ICsgdGhpcy5zdHlsZS5ib3JkZXJTaXplKSAqIENvbnN0YW50cy5TZXR0aW5nLlBJWEVMX1JBVElPLCAodGhpcy53aWR0aCAtIHRoaXMuc3R5bGUuYm9yZGVyU2l6ZSAqIDIpICAqIENvbnN0YW50cy5TZXR0aW5nLlBJWEVMX1JBVElPLCAodGhpcy5oZWlnaHQgLSB0aGlzLnN0eWxlLmJvcmRlclNpemUgKiAyKSAqIENvbnN0YW50cy5TZXR0aW5nLlBJWEVMX1JBVElPKTtcblxuICAgIGlmKHRoaXMuaG92ZXJlZCB8fCB0aGlzLmNsaWNrZWQpIHtcbiAgICAgIGlmKHRoaXMuY2FudmFzICYmIHRoaXMuY2FudmFzLmNhbnZhcykge1xuICAgICAgICB0aGlzLmNhbnZhcy5jYW52YXMuc3R5bGUuY3Vyc29yID0gXCJ0ZXh0XCI7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBjYW52YXMuc3R5bGUuY3Vyc29yID0gXCJkZWZhdWx0XCI7XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYoIXRoaXMuc2VsZWN0ZWQpIHtcbiAgICAgIHRoaXMudG90YWxUaW1lID0gMDtcbiAgICB9XG5cbiAgICBjdHgucmVzdG9yZSgpO1xuICB9XG5cbiAgZHJhd1RleHQoY3R4VGV4dCwgY3VycmVudFgpIHtcbiAgICBmb3IobGV0IGkgPSAtMTsgaSA8IHRoaXMudGV4dC5sZW5ndGg7IGkrKykge1xuICAgICAgaWYoaSA+IC0xKSB7XG4gICAgICAgIGNvbnN0IHNpemVzID0gdGhpcy50ZXh0Q2FjaGUubGV0dGVyc1tpXS5zaXplcztcblxuICAgICAgICBjb25zdCB4RHJhdyA9IGN1cnJlbnRYIC0gdGhpcy5vZmZzZXRYO1xuICAgICAgICBjb25zdCB5RHJhdyA9IHRoaXMueSArIHRoaXMuc3R5bGUuYm9yZGVyU2l6ZTtcblxuICAgICAgICBpZih0aGlzLmlzTGV0dGVyVmlzaWJsZShpKSkgeyAvLyBEb24ndCBkcmF3IHRoZSB0ZXh0IGlmIGl0IGlzIG91dHNpZGUgdGhlIGlucHV0IChvdmVyZmxvdylcbiAgICAgICAgICBpZih0aGlzLnBvc2l0aW9uU3RhcnQgIT0gdGhpcy5wb3NpdGlvbkVuZCAmJiBpID49IHRoaXMucG9zaXRpb25TdGFydCAmJiBpIDwgdGhpcy5wb3NpdGlvbkVuZCkge1xuICAgICAgICAgICAgdGhpcy5kcmF3SGlnaGxpZ2h0KGN0eFRleHQsIGN1cnJlbnRYLCBzaXplcyk7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgVXRpbHMuZHJhd1RleHQoY3R4VGV4dCwgdGhpcy50ZXh0W2ldLCB0aGlzLnN0eWxlLmZvbnRDb2xvciwgdGhpcy5zdHlsZS5mb250U2l6ZSwgdGhpcy5zdHlsZS5mb250RmFtaWx5LCBcImRlZmF1bHRcIiwgXCJkZWZhdWx0XCIsIHhEcmF3LCB5RHJhdywgZmFsc2UpO1xuICAgICAgICB9XG5cbiAgICAgICAgY3VycmVudFggKz0gc2l6ZXNbXCJ3aWR0aFwiXSArIHRoaXMuc3R5bGUuc3BhY2VCZXR3ZWVuQ29tcG9uZW50cztcbiAgICAgIH1cblxuICAgICAgaWYodGhpcy5wb3NpdGlvbkVuZCA9PSBpICsgMSAmJiB0aGlzLnNlbGVjdGVkKSB7XG4gICAgICAgIGlmKHRoaXMudG90YWxUaW1lIDw9IDUwMCkge1xuICAgICAgICAgIHRoaXMuZHJhd0N1cnNvcihjdHhUZXh0LCBjdXJyZW50WCk7XG4gICAgICAgIH0gZWxzZSBpZih0aGlzLnRvdGFsVGltZSA+IDEwMDApIHtcbiAgICAgICAgICB0aGlzLnRvdGFsVGltZSA9IDA7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gY3VycmVudFg7XG4gIH1cblxuICBkcmF3Q3Vyc29yKGN0eFRleHQsIGN1cnJlbnRYKSB7XG4gICAgY3R4VGV4dC5zdHJva2VTdHlsZSA9IHRoaXMuc3R5bGUuYm9yZGVyQ29sb3I7XG4gICAgY3R4VGV4dC5saW5lV2lkdGggPSAxO1xuICAgIGN0eFRleHQuYmVnaW5QYXRoKCk7XG4gICAgY3R4VGV4dC5tb3ZlVG8oY3VycmVudFggLSB0aGlzLm9mZnNldFgsIHRoaXMueSArIDMpO1xuICAgIGN0eFRleHQubGluZVRvKGN1cnJlbnRYIC0gdGhpcy5vZmZzZXRYLCB0aGlzLnkgKyB0aGlzLnN0eWxlLmZvbnRTaXplKTtcbiAgICBjdHhUZXh0LnN0cm9rZSgpO1xuICB9XG5cbiAgZHJhd0hpZ2hsaWdodChjdHhUZXh0LCBjdXJyZW50WCwgc2l6ZXMpIHtcbiAgICBjdHhUZXh0LmZpbGxTdHlsZSA9IHRoaXMuc3R5bGUuc2VsZWN0Q29sb3I7XG4gICAgY3R4VGV4dC5maWxsUmVjdChjdXJyZW50WCAtIHRoaXMub2Zmc2V0WCwgdGhpcy55ICsgdGhpcy5zdHlsZS5ib3JkZXJTaXplLCBzaXplc1tcIndpZHRoXCJdICsgMiwgdGhpcy5oZWlnaHQgLSB0aGlzLnN0eWxlLmJvcmRlclNpemUgKiAyIC0gMSk7XG4gIH1cblxuICB1cGRhdGVUZXh0Q2FjaGUoY3VycmVudFgpIHtcbiAgICBjb25zdCBjdHggPSB0aGlzLmNhbnZhcyA/IHRoaXMuY2FudmFzLmdldENvbnRleHQoXCIyZFwiKSA6IG51bGw7XG4gICAgY29uc3QgcGFyZW50ID0gKHRoaXMuY2FudmFzICYmIHRoaXMuY2FudmFzLnNjZW5lKSB8fCB0aGlzLmNhbnZhcyB8fCAoY3R4ICYmIGN0eC5jYW52YXMpO1xuXG4gICAgaWYoY3R4ICYmIChDb25zdGFudHMuU2V0dGluZy5ESVNBQkxFX09QVElNSVpBVElPTlMgfHwgIXRoaXMudGV4dENhY2hlIHx8IHRoaXMudGV4dENhY2hlLmZvbnRTaXplICE9IHRoaXMuc3R5bGUuZm9udFNpemUgfHwgdGhpcy50ZXh0Q2FjaGUuZm9udEZhbWlseSAhPSB0aGlzLnN0eWxlLmZvbnRGYW1pbHkgfHwgdGhpcy50ZXh0ICE9IHRoaXMudGV4dENhY2hlLnRleHQgfHwgKHBhcmVudCAmJiBwYXJlbnQud2lkdGggIT0gdGhpcy50ZXh0Q2FjaGUucGFyZW50V2lkdGgpKSkge1xuICAgICAgdGhpcy50ZXh0Q2FjaGUgPSB7IFwiZm9udFNpemVcIjogdGhpcy5zdHlsZS5mb250U2l6ZSwgXCJmb250RmFtaWx5XCI6IHRoaXMuc3R5bGUuZm9udEZhbWlseSwgXCJ0ZXh0XCI6IHRoaXMudGV4dCwgXCJwYXJlbnRXaWR0aFwiOiBwYXJlbnQud2lkdGgsIFwibGV0dGVyc1wiOiBbXSB9O1xuXG4gICAgICBmb3IobGV0IGkgPSAwOyBpIDwgdGhpcy50ZXh0Lmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGNvbnN0IHNpemVzID0gVXRpbHMud3JhcFRleHRMaW5lcyhjdHgsIHRoaXMudGV4dFtpXSwgdGhpcy53aWR0aCwgdGhpcy5zdHlsZS5mb250U2l6ZSwgdGhpcy5zdHlsZS5mb250RmFtaWx5LCB0cnVlKTtcbiAgICAgICAgdGhpcy50ZXh0Q2FjaGUubGV0dGVyc1tpXSA9IHtcInRleHRcIjogdGhpcy50ZXh0W2ldLCBcImN1cnJlbnRYXCI6IGN1cnJlbnRYLCBcInNpemVzXCI6IHNpemVzIH07IFxuICAgICAgICBjdXJyZW50WCArPSBzaXplc1tcIndpZHRoXCJdICsgdGhpcy5zdHlsZS5zcGFjZUJldHdlZW5Db21wb25lbnRzO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIGlzQ2xpY2tDdXJyZW50UG9zaXRpb24ocG9zaXRpb24sIGN1cnJlbnRYLCBzaXplcykge1xuICAgIGlmKHBvc2l0aW9uLnggKyB0aGlzLm9mZnNldFggPD0gY3VycmVudFggKyBzaXplc1tcIndpZHRoXCJdICsgdGhpcy5zdHlsZS5zcGFjZUJldHdlZW5Db21wb25lbnRzICYmIHBvc2l0aW9uLnggKyB0aGlzLm9mZnNldFggPj0gY3VycmVudFgpIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cblxuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIGlzQ2xpY2tBZnRlclBvc2l0aW9uKHBvc2l0aW9uLCBjdXJyZW50WCwgc2l6ZXMpIHtcbiAgICBpZihwb3NpdGlvbi54ICsgdGhpcy5vZmZzZXRYID49IGN1cnJlbnRYICsgc2l6ZXNbXCJ3aWR0aFwiXSArIHRoaXMuc3R5bGUuc3BhY2VCZXR3ZWVuQ29tcG9uZW50cykge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuXG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgZ2V0TGV0dGVyQ2xpY2tlZChwb3NpdGlvbikge1xuICAgIGlmKHRoaXMudGV4dENhY2hlKSB7XG4gICAgICBmb3IobGV0IGkgPSAwOyBpIDwgdGhpcy50ZXh0Lmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGNvbnN0IGxldHRlciA9IHRoaXMudGV4dENhY2hlLmxldHRlcnNbaV07XG4gICAgICAgIFxuICAgICAgICBpZih0aGlzLmlzQ2xpY2tDdXJyZW50UG9zaXRpb24ocG9zaXRpb24sIE1hdGgucm91bmQobGV0dGVyLmN1cnJlbnRYKSwgbGV0dGVyLnNpemVzKSkge1xuICAgICAgICAgIHJldHVybiBpO1xuICAgICAgICB9IGVsc2UgaWYoaSA+PSB0aGlzLnRleHQubGVuZ3RoIC0gMSAmJiB0aGlzLmlzQ2xpY2tBZnRlclBvc2l0aW9uKHBvc2l0aW9uLCBNYXRoLnJvdW5kKGxldHRlci5jdXJyZW50WCksIGxldHRlci5zaXplcykpIHtcbiAgICAgICAgICByZXR1cm4gaSArIDE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBnZXQgY3Vyc29yUG9zaXRpb24oKSB7XG4gICAgaWYodGhpcy50ZXh0Q2FjaGUpIHtcbiAgICAgIGxldCBwb3NpdGlvbiA9IHRoaXMucG9zaXRpb25FbmQgLSAxO1xuXG4gICAgICBpZih0aGlzLnBvc2l0aW9uRW5kICE9IHRoaXMucG9zaXRpb25TdGFydCAmJiB0aGlzLnBvc2l0aW9uRW5kID09IHRoaXMucG9zaXRpb25TdGFydENsaWNrICYmIHRoaXMucG9zaXRpb25TdGFydCA8IHRoaXMucG9zaXRpb25TdGFydENsaWNrKSB7XG4gICAgICAgIHBvc2l0aW9uID0gdGhpcy5wb3NpdGlvblN0YXJ0IC0gMTtcbiAgICAgIH1cbiAgICAgIFxuICAgICAgaWYocG9zaXRpb24gPCAwKSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgXCJjdXJyZW50TGV0dGVyXCI6IHRoaXMudGV4dENhY2hlLmxldHRlcnNbMF0sXG4gICAgICAgICAgXCJ4XCI6IHRoaXMueCArIHRoaXMuc3R5bGUuYm9yZGVyU2l6ZVxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGNvbnN0IGN1cnJlbnRMZXR0ZXIgPSB0aGlzLnRleHRDYWNoZS5sZXR0ZXJzW3Bvc2l0aW9uXTtcblxuICAgICAgaWYoY3VycmVudExldHRlcikge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgIFwiY3VycmVudExldHRlclwiOiBjdXJyZW50TGV0dGVyLFxuICAgICAgICAgIFwieFwiOiBjdXJyZW50TGV0dGVyLmN1cnJlbnRYXG4gICAgICAgIH07XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgaXNMZXR0ZXJWaXNpYmxlKGxldHRlcklkKSB7XG4gICAgaWYodGhpcy50ZXh0Q2FjaGUpIHtcbiAgICAgIGNvbnN0IGxldHRlciA9IHRoaXMudGV4dENhY2hlLmxldHRlcnNbbGV0dGVySWRdO1xuXG4gICAgICBpZihsZXR0ZXIpIHtcbiAgICAgICAgY29uc3QgeERyYXcgPSBsZXR0ZXIuY3VycmVudFggLSB0aGlzLm9mZnNldFg7XG4gIFxuICAgICAgICBpZih4RHJhdyA+PSB0aGlzLnggLSBsZXR0ZXIuc2l6ZXNbXCJ3aWR0aFwiXSAmJiB4RHJhdyA8PSB0aGlzLnggKyB0aGlzLndpZHRoKSB7XG4gICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBhdXRvU2Nyb2xsKCkge1xuICAgIGlmKHRoaXMudGV4dENhY2hlKSB7XG4gICAgICBjb25zdCBjdXJzb3JQb3NpdGlvbiA9IHRoaXMuY3Vyc29yUG9zaXRpb247XG4gICAgICBjb25zdCBjdXJyZW50TGV0dGVyU2l6ZSA9IGN1cnNvclBvc2l0aW9uLmN1cnJlbnRMZXR0ZXIgPyBjdXJzb3JQb3NpdGlvbi5jdXJyZW50TGV0dGVyLnNpemVzW1wid2lkdGhcIl0gOiAwO1xuICAgICAgY29uc3QgY3Vyc29yUG9zaXRpb25Qb3MgPSBjdXJzb3JQb3NpdGlvbi54ICsgY3VycmVudExldHRlclNpemUgKyB0aGlzLnN0eWxlLnNwYWNlQmV0d2VlbkNvbXBvbmVudHM7XG4gICAgICBjb25zdCBjdXJzb3JQb3NpdGlvbk5lZyA9IGN1cnNvclBvc2l0aW9uLnggLSBjdXJyZW50TGV0dGVyU2l6ZSAtIHRoaXMuc3R5bGUuc3BhY2VCZXR3ZWVuQ29tcG9uZW50cztcblxuICAgICAgY29uc3Qgb2Zmc2V0WCA9IE1hdGgubWF4KDAsIE1hdGgucm91bmQoY3Vyc29yUG9zaXRpb25Qb3MgLSB0aGlzLnggLSB0aGlzLndpZHRoICsgdGhpcy5zdHlsZS5ib3JkZXJTaXplICsgdGhpcy5zdHlsZS5zcGFjZUJldHdlZW5Db21wb25lbnRzICogMikpO1xuICAgICAgY29uc3Qgb2Zmc2V0WE5lZyA9IE1hdGgubWF4KDAsIE1hdGgucm91bmQoY3Vyc29yUG9zaXRpb25OZWcgLSB0aGlzLnggLSB0aGlzLnN0eWxlLmJvcmRlclNpemUgLSB0aGlzLnN0eWxlLnNwYWNlQmV0d2VlbkNvbXBvbmVudHMgKiAyKSk7XG5cbiAgICAgIGlmKHRoaXMub2Zmc2V0WCA8IDApIHtcbiAgICAgICAgdGhpcy5vZmZzZXRYID0gMDtcbiAgICAgIH1cblxuICAgICAgaWYoY3Vyc29yUG9zaXRpb25Qb3MgLSB0aGlzLm9mZnNldFggPj0gdGhpcy54ICsgdGhpcy53aWR0aCAtIHRoaXMuc3R5bGUuYm9yZGVyU2l6ZSkge1xuICAgICAgICB0aGlzLm9mZnNldFggPSBvZmZzZXRYO1xuICAgICAgICByZXR1cm4gb2Zmc2V0WDtcbiAgICAgIH0gZWxzZSBpZihjdXJzb3JQb3NpdGlvbk5lZyAtIHRoaXMub2Zmc2V0WCA8PSB0aGlzLnggKyB0aGlzLnN0eWxlLmJvcmRlclNpemUpIHtcbiAgICAgICAgdGhpcy5vZmZzZXRYID0gb2Zmc2V0WE5lZztcbiAgICAgICAgcmV0dXJuIG9mZnNldFhOZWc7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgY2xpY2soKSB7XG4gICAgdGhpcy5pbnB1dC5mb2N1cygpO1xuICB9XG5cbiAgYmx1cigpIHtcbiAgICB0aGlzLmlucHV0LmJsdXIoKTtcbiAgfVxuXG4gIGdldCBwb3NpdGlvblN0YXJ0KCkge1xuICAgIHJldHVybiB0aGlzLiNfcG9zaXRpb25TdGFydDtcbiAgfVxuXG4gIGdldCBwb3NpdGlvblN0YXJ0Q2xpY2soKSB7XG4gICAgcmV0dXJuIHRoaXMuI19wb3NpdGlvblN0YXJ0Q2xpY2s7XG4gIH1cblxuICBnZXQgcG9zaXRpb25FbmQoKSB7XG4gICAgcmV0dXJuIHRoaXMuI19wb3NpdGlvbkVuZDtcbiAgfVxuXG4gIHNldCBwb3NpdGlvblN0YXJ0KHBvc2l0aW9uKSB7XG4gICAgdGhpcy5pbnB1dC5zZWxlY3Rpb25TdGFydCA9IHBvc2l0aW9uO1xuICAgIHRoaXMuI19wb3NpdGlvblN0YXJ0ID0gcG9zaXRpb247XG4gIH1cblxuICBzZXQgcG9zaXRpb25TdGFydENsaWNrKHBvc2l0aW9uKSB7XG4gICAgdGhpcy4jX3Bvc2l0aW9uU3RhcnRDbGljayA9IHBvc2l0aW9uO1xuICB9XG5cbiAgc2V0IHBvc2l0aW9uRW5kKHBvc2l0aW9uKSB7XG4gICAgdGhpcy5pbnB1dC5zZWxlY3Rpb25FbmQgPSBwb3NpdGlvbjtcbiAgICB0aGlzLiNfcG9zaXRpb25FbmQgPSBwb3NpdGlvbjtcbiAgfVxuXG4gIHNldFNlbGVjdGlvblJhbmdlKHN0YXJ0LCBlbmQsIGRpcmVjdGlvbikge1xuICAgIHRoaXMuaW5wdXQuc2V0U2VsZWN0aW9uUmFuZ2Uoc3RhcnQsIGVuZCwgZGlyZWN0aW9uKTtcbiAgICB0aGlzLnBvc2l0aW9uU3RhcnQgPSBzdGFydDtcbiAgICB0aGlzLnBvc2l0aW9uRW5kID0gZW5kO1xuICB9XG5cbiAgZ2V0IGhlaWdodCgpIHtcbiAgICBjb25zdCBib3JkZXJTaXplID0gdGhpcy5zdHlsZSAmJiB0aGlzLnN0eWxlLmJvcmRlclNpemUgPyB0aGlzLnN0eWxlLmJvcmRlclNpemUgOiAwO1xuICAgIHJldHVybiBzdXBlci5oZWlnaHQgPyBzdXBlci5oZWlnaHQgOiB0aGlzLnN0eWxlLmZvbnRTaXplICsgYm9yZGVyU2l6ZSAqIDI7XG4gIH1cblxuICBnZXQgZGVmYXVsdFN0eWxlKCkge1xuICAgIHJldHVybiBuZXcgU3R5bGUoe1xuICAgICAgXCJmb250U2l6ZVwiOiBNYXRoLmZsb29yKENvbnN0YW50cy5TZXR0aW5nLkZPTlRfU0laRSAvIDEuMjUpLFxuICAgICAgXCJmb250RmFtaWx5XCI6IENvbnN0YW50cy5TZXR0aW5nLkZPTlRfRkFNSUxZLFxuICAgICAgXCJmb250Q29sb3JcIjogQ29uc3RhbnRzLlNldHRpbmcuSU5QVVRfREVGQVVMVF9GT05UX0NPTE9SLFxuICAgICAgXCJiYWNrZ3JvdW5kQ29sb3JcIjogQ29uc3RhbnRzLlNldHRpbmcuSU5QVVRfREVGQVVMVF9CQUNLR1JPVU5EX0NPTE9SLFxuICAgICAgXCJib3JkZXJDb2xvclwiOiBDb25zdGFudHMuU2V0dGluZy5JTlBVVF9ERUZBVUxUX0JPUkRFUl9DT0xPUixcbiAgICAgIFwiYm9yZGVyQ29sb3JTZWxlY3RlZFwiOiBDb25zdGFudHMuU2V0dGluZy5JTlBVVF9ERUZBVUxUX0JPUkRFUl9DT0xPUl9TRUxFQ1RFRCxcbiAgICAgIFwic2VsZWN0Q29sb3JcIjogQ29uc3RhbnRzLlNldHRpbmcuSU5QVVRfREVGQVVMVF9TRUxFQ1RfQ09MT1IsXG4gICAgICBcInNwYWNlQmV0d2VlbkNvbXBvbmVudHNcIjogMVxuICAgIH0pO1xuICB9XG59IiwiLypcbiAqIENvcHlyaWdodCAoQykgMjAyMCBFbGlhc3RpayAoZWxpYXN0aWtzb2Z0cy5jb20pXG4gKlxuICogVGhpcyBmaWxlIGlzIHBhcnQgb2YgXCJKU0dhbWVUb29sc1wiLlxuICpcbiAqIFwiSlNHYW1lVG9vbHNcIiBpcyBmcmVlIHNvZnR3YXJlOiB5b3UgY2FuIHJlZGlzdHJpYnV0ZSBpdCBhbmQvb3IgbW9kaWZ5XG4gKiBpdCB1bmRlciB0aGUgdGVybXMgb2YgdGhlIEdOVSBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlIGFzIHB1Ymxpc2hlZCBieVxuICogdGhlIEZyZWUgU29mdHdhcmUgRm91bmRhdGlvbiwgZWl0aGVyIHZlcnNpb24gMyBvZiB0aGUgTGljZW5zZSwgb3JcbiAqIChhdCB5b3VyIG9wdGlvbikgYW55IGxhdGVyIHZlcnNpb24uXG4gKlxuICogXCJKU0dhbWVUb29sc1wiIGlzIGRpc3RyaWJ1dGVkIGluIHRoZSBob3BlIHRoYXQgaXQgd2lsbCBiZSB1c2VmdWwsXG4gKiBidXQgV0lUSE9VVCBBTlkgV0FSUkFOVFk7IHdpdGhvdXQgZXZlbiB0aGUgaW1wbGllZCB3YXJyYW50eSBvZlxuICogTUVSQ0hBTlRBQklMSVRZIG9yIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFLiAgU2VlIHRoZVxuICogR05VIEdlbmVyYWwgUHVibGljIExpY2Vuc2UgZm9yIG1vcmUgZGV0YWlscy5cbiAqXG4gKiBZb3Ugc2hvdWxkIGhhdmUgcmVjZWl2ZWQgYSBjb3B5IG9mIHRoZSBHTlUgR2VuZXJhbCBQdWJsaWMgTGljZW5zZVxuICogYWxvbmcgd2l0aCBcIkpTR2FtZVRvb2xzXCIuICBJZiBub3QsIHNlZSA8aHR0cDovL3d3dy5nbnUub3JnL2xpY2Vuc2VzLz4uXG4gKi9cbmltcG9ydCBDb25zdGFudHMgZnJvbSBcIi4vQ29uc3RhbnRzXCI7XG5pbXBvcnQgVXRpbHMgZnJvbSBcIi4vVXRpbHNcIjtcbmltcG9ydCBDb21wb25lbnQgZnJvbSBcIi4vQ29tcG9uZW50XCI7XG5pbXBvcnQgU3R5bGUgZnJvbSBcIi4vU3R5bGVcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTGFiZWwgZXh0ZW5kcyBDb21wb25lbnQge1xuICBzZWxlY3RhYmxlID0gZmFsc2U7XG4gICNfdGV4dCA9IFwiXCI7XG5cbiAgY29uc3RydWN0b3IodGV4dCwgeCwgeSwgc3R5bGUpIHtcbiAgICBzdXBlcih4LCB5LCBudWxsLCBudWxsLCBzdHlsZSk7XG4gICAgdGhpcy50ZXh0ID0gdGV4dDtcbiAgICB0aGlzLnNpemVzQ2FjaGUgPSBudWxsO1xuXG4gICAgaWYoIUNvbnN0YW50cy5TZXR0aW5nLkRJU0FCTEVfRVhQRVJJTUVOVEFMX09QVElNSVpBVElPTlMpIHtcbiAgICAgIHRoaXMudXBkYXRlU2l6ZXMoKTtcblxuICAgICAgdGhpcy5hZGRDaGFuZ2VBY3Rpb24oY29tcG9uZW50Q2hhbmdlZCA9PiB7XG4gICAgICAgIHRoaXMudXBkYXRlU2l6ZXMoKTtcbiAgICAgICAgY29tcG9uZW50Q2hhbmdlZCAhPSB0aGlzLnBhcmVudCAmJiB0aGlzLnBhcmVudCAmJiB0aGlzLnBhcmVudC5yZWFjdG9yICYmIHRoaXMucGFyZW50LnJlYWN0b3IuZGlzcGF0Y2hFdmVudChcIm9uQ2hhbmdlXCIsIHRoaXMpO1xuICAgICAgfSk7XG4gICAgfVxuICB9XG5cbiAgZHJhdyhjb250ZXh0KSB7XG4gICAgaWYodGhpcy5oaWRkZW4pIHJldHVybjtcbiAgICBzdXBlci5kcmF3KGNvbnRleHQpO1xuICAgIFxuICAgIGNvbnN0IGNhbnZhcyA9IGNvbnRleHQuY2FudmFzO1xuICAgIGNvbnN0IGN0eCA9IGNhbnZhcy5nZXRDb250ZXh0KFwiMmRcIik7XG4gICAgY3R4LnNhdmUoKTtcblxuICAgIFV0aWxzLmRyYXdUZXh0KGN0eCwgdGhpcy50ZXh0LCB0aGlzLnN0eWxlLmZvbnRDb2xvciwgdGhpcy5zdHlsZS5mb250U2l6ZSwgdGhpcy5zdHlsZS5mb250RmFtaWx5LCB0aGlzLnN0eWxlLmFsaWduZW1lbnQsIHRoaXMuc3R5bGUudmVydGljYWxBbGlnbmVtZW50LCB0aGlzLngsIHRoaXMueSwgdGhpcy5zdHlsZS53cmFwLCB0aGlzLnN0eWxlLmJvbGQsIHRoaXMuc3R5bGUudW5kZXJsaW5lLCBudWxsLCB0aGlzLnBhcmVudCk7XG5cbiAgICBjdHgucmVzdG9yZSgpO1xuICB9XG5cbiAgc2V0IHRleHQodGV4dCkge1xuICAgIGlmKHRleHQgIT0gdGhpcy4jX3RleHQpIHtcbiAgICAgIHRoaXMuI190ZXh0ID0gdGV4dDtcbiAgICAgIHRoaXMucmVhY3Rvci5kaXNwYXRjaEV2ZW50KFwib25DaGFuZ2VcIiwgdGhpcyk7XG4gICAgfVxuICB9XG5cbiAgZ2V0IHRleHQoKSB7XG4gICAgcmV0dXJuIHRoaXMuI190ZXh0O1xuICB9XG5cbiAgdXBkYXRlU2l6ZXMoKSB7XG4gICAgY29uc3QgY3R4ID0gdGhpcy5jYW52YXMgPyB0aGlzLmNhbnZhcy5nZXRDb250ZXh0KFwiMmRcIikgOiBudWxsO1xuICAgIGNvbnN0IHBhcmVudCA9ICh0aGlzLmNhbnZhcyAmJiB0aGlzLmNhbnZhcy5zY2VuZSkgfHwgdGhpcy5jYW52YXMgfHwgKGN0eCAmJiBjdHguY2FudmFzKTtcbiAgICBcbiAgICBpZihjdHggJiYgKENvbnN0YW50cy5TZXR0aW5nLkRJU0FCTEVfT1BUSU1JWkFUSU9OUyB8fCAhdGhpcy5zaXplc0NhY2hlIHx8IHRoaXMuc2l6ZXNDYWNoZS5mb250U2l6ZSAhPSB0aGlzLnN0eWxlLmZvbnRTaXplIHx8IHRoaXMuc2l6ZXNDYWNoZS5mb250RmFtaWx5ICE9IHRoaXMuc3R5bGUuZm9udEZhbWlseSB8fCB0aGlzLnNpemVzQ2FjaGUud3JhcCAhPSB0aGlzLnN0eWxlLndyYXAgfHwgdGhpcy50ZXh0ICE9IHRoaXMuc2l6ZXNDYWNoZS50ZXh0IHx8IChwYXJlbnQgJiYgcGFyZW50LndpZHRoICE9IHRoaXMuc2l6ZXNDYWNoZS5wYXJlbnRXaWR0aCkgfHwgdGhpcy5zaXplc0NhY2hlLnZhbHVlID09IG51bGwpKSB7XG4gICAgICBjb25zdCBzaXplcyA9IFV0aWxzLndyYXBUZXh0TGluZXMoY3R4LCB0aGlzLnRleHQsIG51bGwsIHRoaXMuc3R5bGUuZm9udFNpemUsIHRoaXMuc3R5bGUuZm9udEZhbWlseSwgIXRoaXMuc3R5bGUud3JhcCk7XG4gICAgICBcbiAgICAgIGlmKHBhcmVudCkge1xuICAgICAgICB0aGlzLnNpemVzQ2FjaGUgPSB7IFwiZm9udFNpemVcIjogdGhpcy5zdHlsZS5mb250U2l6ZSwgXCJmb250RmFtaWx5XCI6IHRoaXMuc3R5bGUuZm9udEZhbWlseSwgXCJ3cmFwXCI6IHRoaXMuc3R5bGUud3JhcCwgXCJ0ZXh0XCI6IHRoaXMudGV4dCwgXCJwYXJlbnRXaWR0aFwiOiBwYXJlbnQud2lkdGgsIFwidmFsdWVcIjogc2l6ZXMgfTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gdGhpcy5zaXplc0NhY2hlICYmIHRoaXMuc2l6ZXNDYWNoZS52YWx1ZTtcbiAgfVxuXG4gIGdldCBzaXplcygpIHtcbiAgICBpZihDb25zdGFudHMuU2V0dGluZy5ESVNBQkxFX0VYUEVSSU1FTlRBTF9PUFRJTUlaQVRJT05TKSB0aGlzLnVwZGF0ZVNpemVzKCk7XG4gICAgcmV0dXJuIHRoaXMuc2l6ZXNDYWNoZSAmJiB0aGlzLnNpemVzQ2FjaGUudmFsdWU7XG4gIH1cblxuICBnZXQgaGVpZ2h0KCkge1xuICAgIGNvbnN0IHNpemVzID0gdGhpcy5zaXplcztcbiAgICByZXR1cm4gc2l6ZXMgJiYgc2l6ZXNbXCJoZWlnaHRcIl07XG4gIH1cblxuICBnZXQgd2lkdGgoKSB7XG4gICAgY29uc3Qgc2l6ZXMgPSB0aGlzLnNpemVzO1xuICAgIHJldHVybiBzaXplcyAmJiBzaXplc1tcIndpZHRoXCJdO1xuICB9XG5cbiAgZ2V0IGRlZmF1bHRTdHlsZSgpIHtcbiAgICByZXR1cm4gbmV3IFN0eWxlKHtcbiAgICAgIFwiZm9udENvbG9yXCI6IENvbnN0YW50cy5TZXR0aW5nLkxBQkVMX0RFRkFVTFRfRk9OVF9DT0xPUixcbiAgICAgIFwid3JhcFwiOiB0cnVlLFxuICAgICAgXCJib2xkXCI6IGZhbHNlLFxuICAgICAgXCJ1bmRlcmxpbmVcIjogZmFsc2VcbiAgICB9KTtcbiAgfVxufSIsIi8qXG4gKiBDb3B5cmlnaHQgKEMpIDIwMjAgRWxpYXN0aWsgKGVsaWFzdGlrc29mdHMuY29tKVxuICpcbiAqIFRoaXMgZmlsZSBpcyBwYXJ0IG9mIFwiSlNHYW1lVG9vbHNcIi5cbiAqXG4gKiBcIkpTR2FtZVRvb2xzXCIgaXMgZnJlZSBzb2Z0d2FyZTogeW91IGNhbiByZWRpc3RyaWJ1dGUgaXQgYW5kL29yIG1vZGlmeVxuICogaXQgdW5kZXIgdGhlIHRlcm1zIG9mIHRoZSBHTlUgR2VuZXJhbCBQdWJsaWMgTGljZW5zZSBhcyBwdWJsaXNoZWQgYnlcbiAqIHRoZSBGcmVlIFNvZnR3YXJlIEZvdW5kYXRpb24sIGVpdGhlciB2ZXJzaW9uIDMgb2YgdGhlIExpY2Vuc2UsIG9yXG4gKiAoYXQgeW91ciBvcHRpb24pIGFueSBsYXRlciB2ZXJzaW9uLlxuICpcbiAqIFwiSlNHYW1lVG9vbHNcIiBpcyBkaXN0cmlidXRlZCBpbiB0aGUgaG9wZSB0aGF0IGl0IHdpbGwgYmUgdXNlZnVsLFxuICogYnV0IFdJVEhPVVQgQU5ZIFdBUlJBTlRZOyB3aXRob3V0IGV2ZW4gdGhlIGltcGxpZWQgd2FycmFudHkgb2ZcbiAqIE1FUkNIQU5UQUJJTElUWSBvciBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRS4gIFNlZSB0aGVcbiAqIEdOVSBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlIGZvciBtb3JlIGRldGFpbHMuXG4gKlxuICogWW91IHNob3VsZCBoYXZlIHJlY2VpdmVkIGEgY29weSBvZiB0aGUgR05VIEdlbmVyYWwgUHVibGljIExpY2Vuc2VcbiAqIGFsb25nIHdpdGggXCJKU0dhbWVUb29sc1wiLiAgSWYgbm90LCBzZWUgPGh0dHA6Ly93d3cuZ251Lm9yZy9saWNlbnNlcy8+LlxuICovXG5pbXBvcnQgQ29uc3RhbnRzIGZyb20gXCIuL0NvbnN0YW50c1wiO1xuaW1wb3J0IExhYmVsIGZyb20gXCIuL0xhYmVsXCI7XG5pbXBvcnQgU3R5bGUgZnJvbSBcIi4vU3R5bGVcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTGluayBleHRlbmRzIExhYmVsIHtcbiAgc2VsZWN0YWJsZSA9IHRydWU7XG5cbiAgY29uc3RydWN0b3IodGV4dCwgeCwgeSwgc3R5bGUpIHtcbiAgICBzdXBlcih0ZXh0LCB4LCB5LCBzdHlsZSk7XG5cbiAgICB0aGlzLmluaXRpYWxDb2xvciA9IHRoaXMuc3R5bGUuZm9udENvbG9yO1xuICAgIHRoaXMuaW5pdGlhbFVuZGVybGluZSA9IHRoaXMuc3R5bGUudW5kZXJsaW5lO1xuICB9XG5cbiAgZHJhdyhjb250ZXh0KSB7XG4gICAgaWYodGhpcy5oaWRkZW4pIHJldHVybjtcbiAgICBzdXBlci5kcmF3KGNvbnRleHQpO1xuXG4gICAgY29uc3QgY2FudmFzID0gY29udGV4dC5jYW52YXM7XG5cbiAgICBpZih0aGlzLmNsaWNrZWQpIHtcbiAgICAgIHRoaXMuc3R5bGUuc2V0KFwidW5kZXJsaW5lXCIsIGZhbHNlKTtcbiAgICAgIHRoaXMuc3R5bGUuc2V0KFwiZm9udENvbG9yXCIsIHRoaXMuc3R5bGUuZm9udENvbG9yRG93bik7XG4gICAgICBjYW52YXMuc3R5bGUuY3Vyc29yID0gXCJwb2ludGVyXCI7XG4gICAgfSBlbHNlIGlmKHRoaXMuaG92ZXJlZCB8fCB0aGlzLnNlbGVjdGVkKSB7XG4gICAgICBjb25zb2xlLmxvZyhcIm9rXCIsIHRoaXMpO1xuICAgICAgdGhpcy5zdHlsZS5zZXQoXCJ1bmRlcmxpbmVcIiwgZmFsc2UpO1xuICAgICAgdGhpcy5zdHlsZS5zZXQoXCJmb250Q29sb3JcIiwgdGhpcy5zdHlsZS5mb250Q29sb3JIb3Zlcik7XG4gICAgICBpZih0aGlzLmhvdmVyZWQpIGNhbnZhcy5zdHlsZS5jdXJzb3IgPSBcInBvaW50ZXJcIjtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5zdHlsZS5zZXQoXCJ1bmRlcmxpbmVcIiwgdGhpcy5pbml0aWFsVW5kZXJsaW5lKTtcbiAgICAgIHRoaXMuc3R5bGUuc2V0KFwiZm9udENvbG9yXCIsIHRoaXMuaW5pdGlhbENvbG9yKTtcbiAgICB9XG5cbiAgICB0aGlzLmluaXQgPSB0cnVlO1xuICB9XG5cbiAgZ2V0IGRlZmF1bHRTdHlsZSgpIHtcbiAgICByZXR1cm4gbmV3IFN0eWxlKHtcbiAgICAgIFwiZm9udFNpemVcIjogQ29uc3RhbnRzLlNldHRpbmcuRk9OVF9TSVpFLFxuICAgICAgXCJmb250RmFtaWx5XCI6IENvbnN0YW50cy5TZXR0aW5nLkZPTlRfRkFNSUxZLFxuICAgICAgXCJmb250Q29sb3JcIjogQ29uc3RhbnRzLlNldHRpbmcuTElOS19ERUZBVUxUX0NPTE9SLFxuICAgICAgXCJmb250Q29sb3JIb3ZlclwiOiBDb25zdGFudHMuU2V0dGluZy5MSU5LX0RFRkFVTFRfSE9WRVJfQ09MT1IsXG4gICAgICBcImZvbnRDb2xvckRvd25cIjogQ29uc3RhbnRzLlNldHRpbmcuTElOS19ERUZBVUxUX0NMSUNLX0NPTE9SLFxuICAgICAgXCJ3cmFwXCI6IHRydWUsXG4gICAgICBcImJvbGRcIjogZmFsc2UsXG4gICAgICBcInVuZGVybGluZVwiOiB0cnVlXG4gICAgfSk7XG4gIH1cbn0iLCIvKlxuICogQ29weXJpZ2h0IChDKSAyMDIwIEVsaWFzdGlrIChlbGlhc3Rpa3NvZnRzLmNvbSlcbiAqXG4gKiBUaGlzIGZpbGUgaXMgcGFydCBvZiBcIkpTR2FtZVRvb2xzXCIuXG4gKlxuICogXCJKU0dhbWVUb29sc1wiIGlzIGZyZWUgc29mdHdhcmU6IHlvdSBjYW4gcmVkaXN0cmlidXRlIGl0IGFuZC9vciBtb2RpZnlcbiAqIGl0IHVuZGVyIHRoZSB0ZXJtcyBvZiB0aGUgR05VIEdlbmVyYWwgUHVibGljIExpY2Vuc2UgYXMgcHVibGlzaGVkIGJ5XG4gKiB0aGUgRnJlZSBTb2Z0d2FyZSBGb3VuZGF0aW9uLCBlaXRoZXIgdmVyc2lvbiAzIG9mIHRoZSBMaWNlbnNlLCBvclxuICogKGF0IHlvdXIgb3B0aW9uKSBhbnkgbGF0ZXIgdmVyc2lvbi5cbiAqXG4gKiBcIkpTR2FtZVRvb2xzXCIgaXMgZGlzdHJpYnV0ZWQgaW4gdGhlIGhvcGUgdGhhdCBpdCB3aWxsIGJlIHVzZWZ1bCxcbiAqIGJ1dCBXSVRIT1VUIEFOWSBXQVJSQU5UWTsgd2l0aG91dCBldmVuIHRoZSBpbXBsaWVkIHdhcnJhbnR5IG9mXG4gKiBNRVJDSEFOVEFCSUxJVFkgb3IgRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UuICBTZWUgdGhlXG4gKiBHTlUgR2VuZXJhbCBQdWJsaWMgTGljZW5zZSBmb3IgbW9yZSBkZXRhaWxzLlxuICpcbiAqIFlvdSBzaG91bGQgaGF2ZSByZWNlaXZlZCBhIGNvcHkgb2YgdGhlIEdOVSBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlXG4gKiBhbG9uZyB3aXRoIFwiSlNHYW1lVG9vbHNcIi4gIElmIG5vdCwgc2VlIDxodHRwOi8vd3d3LmdudS5vcmcvbGljZW5zZXMvPi5cbiAqL1xuaW1wb3J0IENvbnN0YW50cyBmcm9tIFwiLi9Db25zdGFudHNcIjtcbmltcG9ydCBVdGlscyBmcm9tIFwiLi9VdGlsc1wiO1xuaW1wb3J0IENvbXBvbmVudCBmcm9tIFwiLi9Db21wb25lbnRcIjtcbmltcG9ydCBDb2wgZnJvbSBcIi4vQ29sXCI7XG5pbXBvcnQgU3R5bGUgZnJvbSBcIi4vU3R5bGVcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTWVudSBleHRlbmRzIENvbCB7XG4gIHNlbGVjdGFibGUgPSBmYWxzZTtcblxuICBjb25zdHJ1Y3RvcihzdHlsZSwgLi4uY29tcG9uZW50cykge1xuICAgIHN1cGVyKDAsIDAsIG51bGwsIG51bGwsIHN0eWxlLCAuLi5jb21wb25lbnRzKTtcblxuICAgIHRoaXMubGFzdEtleSA9IHRoaXMubGFzdEtleSA9PSB1bmRlZmluZWQgPyAtMSA6IHRoaXMubGFzdEtleTtcbiAgICB0aGlzLnNlbGVjdGVkQ29tcG9uZW50ID0gdGhpcy5zZWxlY3RlZENvbXBvbmVudCA9PSB1bmRlZmluZWQgPyAwIDogdGhpcy5zZWxlY3RlZENvbXBvbmVudDtcblxuICAgIHRoaXMuZGlzYWJsZSgpO1xuICB9XG5cbiAgZHJhdyhjb250ZXh0KSB7XG4gICAgaWYodGhpcy5oaWRkZW4pIHJldHVybjtcbiAgICBjb25zdCBjYW52YXMgPSBjb250ZXh0LmNhbnZhcztcbiAgICBjb25zdCBjdHggPSBjYW52YXMuZ2V0Q29udGV4dChcIjJkXCIpO1xuXG4gICAgaWYodGhpcy5zdHlsZS5ibHVyQmFja2dyb3VuZCkge1xuICAgICAgdGhpcy5kcmF3Qmx1cihjdHgpO1xuICAgIH1cblxuICAgIGN0eC5zYXZlKCk7XG5cbiAgICB0aGlzLmRyYXdDb21wb25lbnRzKGN0eCk7XG4gICAgXG4gICAgaWYoIXRoaXMuaW5pdCkge1xuICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcImtleWRvd25cIiwgZXZlbnQgPT4ge1xuICAgICAgICBpZighdGhpcy5kaXNhYmxlZCkge1xuICAgICAgICAgIHRoaXMubGFzdEtleSA9IGV2ZW50LmtleUNvZGU7XG4gICAgICAgICAgaWYodGhpcy5sYXN0S2V5ID09IENvbnN0YW50cy5LZXkuVVAgfHwgdGhpcy5sYXN0S2V5ID09IENvbnN0YW50cy5LZXkuQk9UVE9NKSBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICB9XG4gICAgICB9KTtcblxuICAgICAgdGhpcy5pbml0ID0gdHJ1ZTtcbiAgICB9XG5cbiAgICBsZXQga2V5QWN0aW9uID0gZmFsc2U7XG4gIFxuICAgIGlmKHRoaXMuY29tcG9uZW50cyAhPSBudWxsKSB7XG4gICAgICBpZih0aGlzLmxhc3RLZXkgPT0gQ29uc3RhbnRzLktleS5VUCkge1xuICAgICAgICB0aGlzLnNlbGVjdCh0aGlzLnNlbGVjdGVkQ29tcG9uZW50IC0gMSk7XG4gICAgICAgIGtleUFjdGlvbiA9IHRydWU7XG4gICAgICB9IGVsc2UgaWYodGhpcy5sYXN0S2V5ID09IENvbnN0YW50cy5LZXkuQk9UVE9NKSB7XG4gICAgICAgIHRoaXMuc2VsZWN0KHRoaXMuc2VsZWN0ZWRDb21wb25lbnQgKyAxKTtcbiAgICAgICAga2V5QWN0aW9uID0gdHJ1ZTtcbiAgICAgIH0gZWxzZSBpZih0aGlzLmxhc3RLZXkgPT0gQ29uc3RhbnRzLktleS5FQ0hBUCkge1xuICAgICAgICB0aGlzLmRpc2FibGUoKTtcbiAgICAgICAga2V5QWN0aW9uID0gdHJ1ZTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuY29tcG9uZW50cy5mb3JFYWNoKChjb21wb25lbnQsIGkpID0+IHtcbiAgICAgICAgICBpZihjb21wb25lbnQuc2VsZWN0ZWQpIHRoaXMuc2VsZWN0KGkpO1xuICAgICAgICB9KTtcbiAgICAgIH1cblxuICAgICAgdGhpcy5jb21wb25lbnRzLmZvckVhY2goKGNvbXBvbmVudCwgaSkgPT4ge1xuICAgICAgICBpZihjb21wb25lbnQgaW5zdGFuY2VvZiBDb21wb25lbnQpIHtcbiAgICAgICAgICBpZihrZXlBY3Rpb24pIHtcbiAgICAgICAgICAgIGlmKHRoaXMuc2VsZWN0ZWRDb21wb25lbnQgPT0gaSkge1xuICAgICAgICAgICAgICBpZihjb21wb25lbnQuc2VsZWN0YWJsZSkge1xuICAgICAgICAgICAgICAgIGNvbXBvbmVudC5zZWxlY3RlZCA9IHRydWU7XG4gICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICBpZighdGhpcy5pc0NvbXBvbmVudFZpc2libGUoY29tcG9uZW50KSkge1xuICAgICAgICAgICAgICAgIGNvbnN0IGNvbXBvbmVudEhlaWdodCA9IGNvbXBvbmVudC5oZWlnaHQ7XG4gICAgICAgICAgICAgICAgY29uc3QgZGVsdGFZID0gKHRoaXMubWF4SGVpZ2h0IC0gdGhpcy5vZmZzZXRTY3JvbGxZKSAtIChjb21wb25lbnQueSArIGNvbXBvbmVudEhlaWdodCk7XG4gICAgICAgICAgICAgICAgdGhpcy5vZmZzZXRTY3JvbGxZID0gLWRlbHRhWTtcblxuICAgICAgICAgICAgICAgIHRoaXMuY29udHJvbFNjcm9sbGluZyhudWxsLCAtZGVsdGFZKTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgY29tcG9uZW50LnNlbGVjdGVkID0gZmFsc2U7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgIFxuICAgICAgICAgIGlmKHRoaXMuc2VsZWN0ZWRDb21wb25lbnQgPT0gaSAmJiB0aGlzLmxhc3RLZXkgPT0gQ29uc3RhbnRzLktleS5FTlRFUiAmJiBjb21wb25lbnQucmVhY3RvciAmJiAhY29tcG9uZW50LmRpc2FibGVkKSB7XG4gICAgICAgICAgICB0aGlzLmxhc3RLZXkgPSAtMTtcbiAgICAgICAgICAgIHRoaXMuc2VsZWN0ZWRDb21wb25lbnQgPSAwO1xuICAgICAgICAgICAgY29tcG9uZW50LnJlYWN0b3IuZGlzcGF0Y2hFdmVudChcIm9uQ2xpY2tcIik7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9XG4gICAgXG4gICAgY3R4LnJlc3RvcmUoKTtcbiAgICB0aGlzLmxhc3RLZXkgPSAtMTtcbiAgfVxuXG4gIGRyYXdDb21wb25lbnRzKGN0eCkge1xuICAgIHN1cGVyLmRyYXcoY3R4KTtcbiAgfVxuXG4gIGRyYXdCbHVyKGN0eCkge1xuICAgIFV0aWxzLmJsdXJDYW52YXMoY3R4LCA1KTtcbiAgfVxuXG4gIGRyYXdCYWNrZ3JvdW5kKGN0eCkge1xuICAgIGN0eC5maWxsU3R5bGUgPSB0aGlzLnN0eWxlLmJhY2tncm91bmRDb2xvcjtcbiAgICBjdHguZmlsbFJlY3QodGhpcy5wYXJlbnQgPyB0aGlzLnBhcmVudC54IDogMCwgdGhpcy5wYXJlbnQgPyB0aGlzLnBhcmVudC55IDogMCwgdGhpcy5tYXhXaWR0aCwgdGhpcy5tYXhIZWlnaHQpO1xuICB9XG5cbiAgZGlzYWJsZSgpIHtcbiAgICBzdXBlci5kaXNhYmxlKCk7XG4gICAgdGhpcy5jb21wb25lbnRzLmZvckVhY2goY29tcG9uZW50ID0+IGNvbXBvbmVudCAmJiBjb21wb25lbnQuZGlzYWJsZSAmJiBjb21wb25lbnQuZGlzYWJsZSgpKTtcbiAgfVxuXG4gIGVuYWJsZSgpIHtcbiAgICBzdXBlci5lbmFibGUoKTtcbiAgICB0aGlzLmNvbXBvbmVudHMuZm9yRWFjaChjb21wb25lbnQgPT4gY29tcG9uZW50ICYmIGNvbXBvbmVudC5lbmFibGUgJiYgY29tcG9uZW50LmVuYWJsZSgpKTtcbiAgfVxuXG4gIHNlbGVjdChpbmRleCkge1xuICAgIHRoaXMuc2VsZWN0ZWRDb21wb25lbnQgPSBpbmRleDtcblxuICAgIGNvbnN0IHNlbGVjdGFibGVDb21wb25lbnRzID0gdGhpcy5jb21wb25lbnRzLmZpbHRlcihjb21wb25lbnQgPT4gY29tcG9uZW50LnNlbGVjdGFibGUpO1xuICAgIGlmKHNlbGVjdGFibGVDb21wb25lbnRzLmxlbmd0aCA8PSAwKSByZXR1cm47XG5cbiAgICBpZih0aGlzLnNlbGVjdGVkQ29tcG9uZW50ID49IHRoaXMuY29tcG9uZW50cy5sZW5ndGgpIHtcbiAgICAgIHRoaXMuc2VsZWN0ZWRDb21wb25lbnQgPSAwO1xuICAgIH0gZWxzZSBpZih0aGlzLnNlbGVjdGVkQ29tcG9uZW50IDwgMCkge1xuICAgICAgdGhpcy5zZWxlY3RlZENvbXBvbmVudCA9IHRoaXMuY29tcG9uZW50cy5sZW5ndGggLSAxO1xuICAgIH1cblxuICAgIGlmKHRoaXMuY29tcG9uZW50c1t0aGlzLnNlbGVjdGVkQ29tcG9uZW50XSAmJiAhdGhpcy5jb21wb25lbnRzW3RoaXMuc2VsZWN0ZWRDb21wb25lbnRdLnNlbGVjdGFibGUpIHtcbiAgICAgIGlmKHRoaXMubGFzdEtleSA9PSBDb25zdGFudHMuS2V5LlVQKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnNlbGVjdCh0aGlzLnNlbGVjdGVkQ29tcG9uZW50IC0gMSk7XG4gICAgICB9IGVsc2UgaWYodGhpcy5sYXN0S2V5ID09IENvbnN0YW50cy5LZXkuQk9UVE9NKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnNlbGVjdCh0aGlzLnNlbGVjdGVkQ29tcG9uZW50ICsgMSk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgZ2V0IHNjcm9sbEFyZWFTaXplWCgpIHtcbiAgICByZXR1cm4gdGhpcy5pbm5lcldpZHRoIC0gdGhpcy5tYXhXaWR0aDtcbiAgfVxuXG4gIGdldCBzY3JvbGxBcmVhU2l6ZVkoKSB7XG4gICAgcmV0dXJuIHRoaXMuaW5uZXJIZWlnaHQgLSB0aGlzLm1heEhlaWdodDtcbiAgfVxuXG4gIGdldCBtYXhIZWlnaHQoKSB7XG4gICAgcmV0dXJuIHN1cGVyLm1heEhlaWdodCB8fCAodGhpcy5jYW52YXMgJiYgdGhpcy5jYW52YXMuc2NlbmUgJiYgdGhpcy5jYW52YXMuc2NlbmUuaGVpZ2h0KTtcbiAgfVxuXG4gIGdldCBtYXhXaWR0aCgpIHtcbiAgICByZXR1cm4gKHRoaXMuY2FudmFzICYmIHRoaXMuY2FudmFzLnNjZW5lICYmIHRoaXMuY2FudmFzLnNjZW5lLndpZHRoKTtcbiAgfVxuXG4gIGdldCBtaW5XaWR0aCgpIHtcbiAgICByZXR1cm4gdGhpcy5wYXJlbnQgPyB0aGlzLnBhcmVudC53aWR0aCA6IDA7XG4gIH1cblxuICBnZXQgZGVmYXVsdFN0eWxlKCkge1xuICAgIHJldHVybiBuZXcgU3R5bGUoe1xuICAgICAgXCJibHVyQmFja2dyb3VuZFwiOiBDb25zdGFudHMuU2V0dGluZy5NRU5VX0RFRkFVTFRfQkxVUl9CQUNLR1JPVU5ELFxuICAgICAgXCJiYWNrZ3JvdW5kQ29sb3JcIjogQ29uc3RhbnRzLlNldHRpbmcuTUVOVV9ERUZBVUxUX0JBQ0tHUk9VTkQsXG4gICAgICBcInZlcnRpY2FsQWxpZ25lbWVudFwiOiBDb25zdGFudHMuVmVydGljYWxBbGlnbmVtZW50LkNFTlRFUixcbiAgICAgIFwic2Nyb2xsWERpc2FibGVkXCI6IHRydWVcbiAgICB9KTtcbiAgfVxuXG4gIGNvbXBhcmVUb0NvbXBvbmVudChvdGhlckNvbXBvbmVudCkge1xuICAgIHJldHVybiBvdGhlckNvbXBvbmVudC5jb21wYXJlVG9NZW51KHRoaXMpO1xuICB9XG5cbiAgY29tcGFyZVRvTWVudShvdGhlckNvbXBvbmVudCkge1xuICAgIHJldHVybiAwO1xuICB9XG5cbiAgY29tcGFyZVRvVG9vbHRpcChvdGhlckNvbXBvbmVudCkge1xuICAgIHJldHVybiAtMTtcbiAgfVxuXG4gIGNvbXBhcmVUb05vdGlmaWNhdGlvbihvdGhlckNvbXBvbmVudCkge1xuICAgIHJldHVybiAxO1xuICB9XG5cbiAgZ2V0IGhpZGRlbigpIHtcbiAgICByZXR1cm4gc3VwZXIuaGlkZGVuIHx8IHRoaXMuZGlzYWJsZWQ7XG4gIH1cblxuICBzZXQgaGlkZGVuKGhpZGRlbikge1xuICAgIHN1cGVyLmhpZGRlbiA9IGhpZGRlbjtcbiAgICB0aGlzLmRpc2FibGVkID0gaGlkZGVuO1xuICB9XG5cbiAgaXNJbnNpZGUocG9zKSB7XG4gICAgcmV0dXJuICF0aGlzLmhpZGRlbjtcbiAgfVxufSIsIi8qXG4gKiBDb3B5cmlnaHQgKEMpIDIwMjAgRWxpYXN0aWsgKGVsaWFzdGlrc29mdHMuY29tKVxuICpcbiAqIFRoaXMgZmlsZSBpcyBwYXJ0IG9mIFwiSlNHYW1lVG9vbHNcIi5cbiAqXG4gKiBcIkpTR2FtZVRvb2xzXCIgaXMgZnJlZSBzb2Z0d2FyZTogeW91IGNhbiByZWRpc3RyaWJ1dGUgaXQgYW5kL29yIG1vZGlmeVxuICogaXQgdW5kZXIgdGhlIHRlcm1zIG9mIHRoZSBHTlUgR2VuZXJhbCBQdWJsaWMgTGljZW5zZSBhcyBwdWJsaXNoZWQgYnlcbiAqIHRoZSBGcmVlIFNvZnR3YXJlIEZvdW5kYXRpb24sIGVpdGhlciB2ZXJzaW9uIDMgb2YgdGhlIExpY2Vuc2UsIG9yXG4gKiAoYXQgeW91ciBvcHRpb24pIGFueSBsYXRlciB2ZXJzaW9uLlxuICpcbiAqIFwiSlNHYW1lVG9vbHNcIiBpcyBkaXN0cmlidXRlZCBpbiB0aGUgaG9wZSB0aGF0IGl0IHdpbGwgYmUgdXNlZnVsLFxuICogYnV0IFdJVEhPVVQgQU5ZIFdBUlJBTlRZOyB3aXRob3V0IGV2ZW4gdGhlIGltcGxpZWQgd2FycmFudHkgb2ZcbiAqIE1FUkNIQU5UQUJJTElUWSBvciBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRS4gIFNlZSB0aGVcbiAqIEdOVSBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlIGZvciBtb3JlIGRldGFpbHMuXG4gKlxuICogWW91IHNob3VsZCBoYXZlIHJlY2VpdmVkIGEgY29weSBvZiB0aGUgR05VIEdlbmVyYWwgUHVibGljIExpY2Vuc2VcbiAqIGFsb25nIHdpdGggXCJKU0dhbWVUb29sc1wiLiAgSWYgbm90LCBzZWUgPGh0dHA6Ly93d3cuZ251Lm9yZy9saWNlbnNlcy8+LlxuICovXG5pbXBvcnQgQ29uc3RhbnRzIGZyb20gXCIuL0NvbnN0YW50c1wiO1xuaW1wb3J0IENvbCBmcm9tIFwiLi9Db2xcIjtcbmltcG9ydCBCdXR0b24gZnJvbSBcIi4vQnV0dG9uXCI7XG5pbXBvcnQgQ3Jvc3MgZnJvbSBcIi4vQ3Jvc3NcIjtcbmltcG9ydCBTdHlsZSBmcm9tIFwiLi9TdHlsZVwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBOb3RpZmljYXRpb25NZXNzYWdlIGV4dGVuZHMgQ29sIHtcbiAgc2VsZWN0YWJsZSA9IGZhbHNlO1xuXG4gIGNvbnN0cnVjdG9yKHN0eWxlLCBkZWxheUJlZm9yZUNsb3NpbmcsIGVhc2luZ0Z1bmN0aW9uLCAuLi5jb21wb25lbnRzKSB7XG4gICAgc3VwZXIoMCwgMCwgbnVsbCwgbnVsbCwgc3R5bGUsIC4uLmNvbXBvbmVudHMpO1xuXG4gICAgdGhpcy5kZWxheUJlZm9yZUNsb3NpbmcgPSBkZWxheUJlZm9yZUNsb3NpbmcgPT0gdW5kZWZpbmVkID8gNSA6IGRlbGF5QmVmb3JlQ2xvc2luZzsgLy8gc2Vjb25kXG4gICAgdGhpcy50aW1lTGFzdEZyYW1lID0gMDtcbiAgICB0aGlzLmFuaW1hdGlvblRpbWUgPSAwO1xuICAgIHRoaXMuY2xvc2VkID0gdHJ1ZTtcbiAgICB0aGlzLmNsb3NpbmcgPSBmYWxzZTtcbiAgICB0aGlzLmVhc2luZ0Z1bmN0aW9uID0gZWFzaW5nRnVuY3Rpb247XG5cbiAgICB0aGlzLmNsb3NlQnV0dG9uID0gbmV3IEJ1dHRvbihudWxsLCBudWxsLCBudWxsLCBudWxsLCBuZXcgU3R5bGUoe1wiYWxpZ25lbWVudFwiOiBDb25zdGFudHMuQWxpZ25lbWVudC5SSUdIVCwgXCJ2ZXJ0aWNhbEFsaWduZW1lbnRcIjogQ29uc3RhbnRzLlZlcnRpY2FsQWxpZ25lbWVudC5UT1AsIFwicGFkZGluZ1wiOiAxMCB9KSwgbmV3IENyb3NzKG51bGwsIG51bGwsIDEwLCAxMCkpO1xuICAgIHRoaXMuYWRkKHRoaXMuY2xvc2VCdXR0b24pO1xuICB9XG4gIFxuICBkcmF3KGNvbnRleHQpIHtcbiAgICBpZih0aGlzLmhpZGRlbikgcmV0dXJuO1xuICAgIHRoaXMuY2xvc2VCdXR0b24uY2FudmFzID0gdGhpcy5jYW52YXM7XG5cbiAgICBjb25zdCBjYW52YXMgPSBjb250ZXh0LmNhbnZhcztcbiAgICBjb25zdCBjdHggPSBjYW52YXMuZ2V0Q29udGV4dChcIjJkXCIpO1xuXG4gICAgY3R4LnNhdmUoKTtcblxuICAgIGlmKCF0aGlzLmluaXQpIHtcbiAgICAgIHRoaXMudGltZUxhc3RGcmFtZSA9IHBlcmZvcm1hbmNlLm5vdygpO1xuICAgIH1cbiAgICBcbiAgICBpZih0aGlzLmNsb3NlQnV0dG9uICE9IG51bGwpIHtcbiAgICAgIHRoaXMuY2xvc2VCdXR0b24uc2V0Q2xpY2tBY3Rpb24oKCkgPT4ge1xuICAgICAgICB0aGlzLmNsb3NlKCk7XG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBjb25zdCBvZmZzZXRUaW1lID0gcGVyZm9ybWFuY2Uubm93KCkgLSB0aGlzLnRpbWVMYXN0RnJhbWU7XG4gICAgdGhpcy50aW1lTGFzdEZyYW1lID0gcGVyZm9ybWFuY2Uubm93KCk7XG5cbiAgICBpZih0aGlzLmFuaW1hdGlvblRpbWUgPj0gdGhpcy5kZWxheUJlZm9yZUNsb3NpbmcgKiAxMDAwICYmICF0aGlzLmNsb3NpbmcgJiYgIXRoaXMuY2xvc2VkKSB7XG4gICAgICB0aGlzLmNsb3NlKCk7XG4gICAgfVxuXG4gICAgaWYoIXRoaXMuY2xvc2luZykge1xuICAgICAgdGhpcy5hbmltYXRpb25UaW1lICs9IG9mZnNldFRpbWU7XG4gICAgfSBlbHNlIHtcbiAgICAgIGlmKHRoaXMuc3R5bGUuZGlzYWJsZUFuaW1hdGlvbikge1xuICAgICAgICB0aGlzLmFuaW1hdGlvblRpbWUgPSAtMTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuYW5pbWF0aW9uVGltZSAtPSBvZmZzZXRUaW1lO1xuICAgICAgfVxuICAgIH1cblxuICAgIGlmKHRoaXMuYW5pbWF0aW9uVGltZSA8IDApIHtcbiAgICAgIHRoaXMuY2xvc2VkID0gdHJ1ZTtcbiAgICAgIHRoaXMuY2xvc2luZyA9IGZhbHNlO1xuICAgIH1cblxuICAgIGlmKCF0aGlzLmNsb3NlZCkge1xuICAgICAgdGhpcy5kcmF3Q29tcG9uZW50cyhjdHgpO1xuXG4gICAgICBpZih0aGlzLmNsb3NlQnV0dG9uICE9IG51bGwpIHtcbiAgICAgICAgdGhpcy5jbG9zZUJ1dHRvbi55ID0gdGhpcy55ICsgdGhpcy5zdHlsZS5wYWRkaW5nIC8gMjtcbiAgICAgICAgdGhpcy5jbG9zZUJ1dHRvbi5kcmF3KGN0eCk7XG4gICAgICB9XG5cbiAgICAgIHRoaXMuZW5hYmxlQ2xvc2VCdXR0b24oKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5kaXNhYmxlQ2xvc2VCdXR0b24oKTtcbiAgICB9XG5cbiAgICBjdHgucmVzdG9yZSgpO1xuXG4gICAgdGhpcy5pbml0ID0gdHJ1ZTtcbiAgfVxuICBcbiAgZ2V0IG9mZnNldFkoKSB7XG4gICAgbGV0IG9mZnNldFkgPSAxO1xuXG4gICAgaWYoIXRoaXMuc3R5bGUuZGlzYWJsZUFuaW1hdGlvbikge1xuICAgICAgb2Zmc2V0WSA9IHRoaXMuYW5pbWF0aW9uVGltZSAvIHRoaXMuc3R5bGUuYW5pbWF0aW9uRHVyYXRpb247XG5cbiAgICAgIGlmKHRoaXMuZWFzaW5nRnVuY3Rpb24pIHtcbiAgICAgICAgb2Zmc2V0WSA9IHRoaXMuZWFzaW5nRnVuY3Rpb24ob2Zmc2V0WSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIG9mZnNldFk7XG4gIH1cblxuICBnZXQgeSgpIHtcbiAgICBjb25zdCBvZmZzZXRZID0gdGhpcy5vZmZzZXRZO1xuXG4gICAgaWYodGhpcy5zdHlsZS52ZXJ0aWNhbEFsaWduZW1lbnQgPT0gQ29uc3RhbnRzLlZlcnRpY2FsQWxpZ25lbWVudC5UT1ApIHtcbiAgICAgIHJldHVybiAodGhpcy5oZWlnaHQgKiAob2Zmc2V0WSA8PSAxID8gb2Zmc2V0WSA6IDEpKSAtIHRoaXMuaGVpZ2h0O1xuICAgIH0gXG4gICAgXG4gICAgcmV0dXJuIHRoaXMuY2FudmFzLnNjZW5lLmhlaWdodCAtICh0aGlzLmhlaWdodCAqIChvZmZzZXRZIDw9IDEgPyBvZmZzZXRZIDogMSkpO1xuICB9XG5cbiAgc2V0IHkoeSkge1xuICAgIHN1cGVyLnkgPSB5O1xuICB9XG5cbiAgZHJhd0NvbXBvbmVudHMoY3R4KSB7XG4gICAgc3VwZXIuZHJhdyhjdHgpO1xuICB9XG5cbiAgY2xvc2UoKSB7XG4gICAgdGhpcy5kaXNhYmxlQ2xvc2VCdXR0b24oKTtcbiAgXG4gICAgaWYoIXRoaXMuY2xvc2luZykge1xuICAgICAgdGhpcy5jbG9zaW5nID0gdHJ1ZTtcbiAgICAgIHRoaXMuYW5pbWF0aW9uVGltZSA9IHRoaXMuc3R5bGUuYW5pbWF0aW9uRHVyYXRpb247XG4gICAgfVxuICB9XG4gIFxuICBvcGVuKCkge1xuICAgIHRoaXMudGltZUxhc3RGcmFtZSA9IDA7XG4gICAgdGhpcy5hbmltYXRpb25UaW1lID0gMDtcbiAgICB0aGlzLmluaXQgPSBmYWxzZTtcbiAgICB0aGlzLmNsb3NlZCA9IGZhbHNlO1xuICAgIHRoaXMuY2xvc2luZyA9IGZhbHNlO1xuICB9XG4gIFxuICBkaXNhYmxlQ2xvc2VCdXR0b24oKSB7XG4gICAgaWYodGhpcy5jbG9zZUJ1dHRvbiAhPSB1bmRlZmluZWQgJiYgdGhpcy5jbG9zZUJ1dHRvbiAhPSBudWxsICYmIHRoaXMuY2xvc2VCdXR0b24gaW5zdGFuY2VvZiBCdXR0b24pIHtcbiAgICAgIHRoaXMuY2xvc2VCdXR0b24uZGlzYWJsZSgpO1xuICAgIH1cbiAgfVxuICBcbiAgZW5hYmxlQ2xvc2VCdXR0b24oKSB7XG4gICAgaWYodGhpcy5jbG9zZUJ1dHRvbiAhPSB1bmRlZmluZWQgJiYgdGhpcy5jbG9zZUJ1dHRvbiAhPSBudWxsICYmIHRoaXMuY2xvc2VCdXR0b24gaW5zdGFuY2VvZiBCdXR0b24pIHtcbiAgICAgIHRoaXMuY2xvc2VCdXR0b24uZW5hYmxlKCk7XG4gICAgfVxuICB9O1xuICBcbiAgY29weSgpIHtcbiAgICByZXR1cm4gbmV3IE5vdGlmaWNhdGlvbk1lc3NhZ2UodGhpcy5zdHlsZS5jb3B5KCksIHRoaXMuZGVsYXlCZWZvcmVDbG9zaW5nLCB0aGlzLmVhc2luZ0Z1bmN0aW9uLCAuLi50aGlzLmNvbXBvbmVudHMpO1xuICB9XG5cbiAgZ2V0IHdpZHRoKCkge1xuICAgIHJldHVybiB0aGlzLmNhbnZhcyAmJiB0aGlzLmNhbnZhcy5zY2VuZSA/IHRoaXMuY2FudmFzLnNjZW5lLndpZHRoIDogbnVsbDtcbiAgfVxuXG4gIGdldCBoZWlnaHQoKSB7XG4gICAgcmV0dXJuIHN1cGVyLmhlaWdodCAtICh0aGlzLmNsb3NlQnV0dG9uID8gdGhpcy5jbG9zZUJ1dHRvbi5oZWlnaHQgOiAwKTtcbiAgfVxuXG4gIGdldCBkZWZhdWx0U3R5bGUoKSB7XG4gICAgcmV0dXJuIG5ldyBTdHlsZSh7XG4gICAgICBcImFsaWduZW1lbnRcIjogQ29uc3RhbnRzLkFsaWduZW1lbnQuQ0VOVEVSLFxuICAgICAgXCJiYWNrZ3JvdW5kQ29sb3JcIjogQ29uc3RhbnRzLlNldHRpbmcuTk9USUZJQ0FUSU9OX0RFRkFVTFRfQkFDS0dST1VORCxcbiAgICAgIFwiYW5pbWF0aW9uRHVyYXRpb25cIjogQ29uc3RhbnRzLlNldHRpbmcuTk9USUZJQ0FUSU9OX0RFRkFVTFRfQU5JTUFUSU9OX0RVUkFUSU9OXG4gICAgfSk7XG4gIH1cblxuICBnZXQgaGlkZGVuKCkge1xuICAgIHJldHVybiBzdXBlci5oaWRkZW4gfHwgdGhpcy5jbG9zZWQ7XG4gIH1cblxuICBzZXQgaGlkZGVuKGhpZGRlbikge1xuICAgIHN1cGVyLmhpZGRlbiA9IGhpZGRlbjtcblxuICAgIGlmKGhpZGRlbikge1xuICAgICAgdGhpcy5mb3JjZUNsb3NlKCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMub3BlbigpO1xuICAgIH1cbiAgfVxuXG4gIGNvbXBhcmVUb0NvbXBvbmVudChvdGhlckNvbXBvbmVudCkge1xuICAgIHJldHVybiBvdGhlckNvbXBvbmVudC5jb21wYXJlVG9Ob3RpZmljYXRpb24odGhpcyk7XG4gIH1cblxuICBjb21wYXJlVG9Ub29sdGlwKG90aGVyQ29tcG9uZW50KSB7XG4gICAgcmV0dXJuIC0xO1xuICB9XG5cbiAgY29tcGFyZVRvTm90aWZpY2F0aW9uKG90aGVyQ29tcG9uZW50KSB7XG4gICAgcmV0dXJuIDA7XG4gIH1cblxuICBjb21wYXJlVG9NZW51KG90aGVyQ29tcG9uZW50KSB7XG4gICAgcmV0dXJuIC0xO1xuICB9XG59IiwiLypcbiAqIENvcHlyaWdodCAoQykgMjAyMCBFbGlhc3RpayAoZWxpYXN0aWtzb2Z0cy5jb20pXG4gKlxuICogVGhpcyBmaWxlIGlzIHBhcnQgb2YgXCJKU0dhbWVUb29sc1wiLlxuICpcbiAqIFwiSlNHYW1lVG9vbHNcIiBpcyBmcmVlIHNvZnR3YXJlOiB5b3UgY2FuIHJlZGlzdHJpYnV0ZSBpdCBhbmQvb3IgbW9kaWZ5XG4gKiBpdCB1bmRlciB0aGUgdGVybXMgb2YgdGhlIEdOVSBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlIGFzIHB1Ymxpc2hlZCBieVxuICogdGhlIEZyZWUgU29mdHdhcmUgRm91bmRhdGlvbiwgZWl0aGVyIHZlcnNpb24gMyBvZiB0aGUgTGljZW5zZSwgb3JcbiAqIChhdCB5b3VyIG9wdGlvbikgYW55IGxhdGVyIHZlcnNpb24uXG4gKlxuICogXCJKU0dhbWVUb29sc1wiIGlzIGRpc3RyaWJ1dGVkIGluIHRoZSBob3BlIHRoYXQgaXQgd2lsbCBiZSB1c2VmdWwsXG4gKiBidXQgV0lUSE9VVCBBTlkgV0FSUkFOVFk7IHdpdGhvdXQgZXZlbiB0aGUgaW1wbGllZCB3YXJyYW50eSBvZlxuICogTUVSQ0hBTlRBQklMSVRZIG9yIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFLiAgU2VlIHRoZVxuICogR05VIEdlbmVyYWwgUHVibGljIExpY2Vuc2UgZm9yIG1vcmUgZGV0YWlscy5cbiAqXG4gKiBZb3Ugc2hvdWxkIGhhdmUgcmVjZWl2ZWQgYSBjb3B5IG9mIHRoZSBHTlUgR2VuZXJhbCBQdWJsaWMgTGljZW5zZVxuICogYWxvbmcgd2l0aCBcIkpTR2FtZVRvb2xzXCIuICBJZiBub3QsIHNlZSA8aHR0cDovL3d3dy5nbnUub3JnL2xpY2Vuc2VzLz4uXG4gKi9cbmltcG9ydCBCb3ggZnJvbSBcIi4vQm94XCI7XG5pbXBvcnQgQ29uc3RhbnRzIGZyb20gXCIuL0NvbnN0YW50c1wiO1xuaW1wb3J0IFN0eWxlIGZyb20gXCIuL1N0eWxlXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFByb2dyZXNzQmFyIGV4dGVuZHMgQm94IHtcbiAgI3ByZWNQZXJjZW50ID0gMDtcbiAgc2VsZWN0YWJsZSA9IGZhbHNlO1xuXG4gIGNvbnN0cnVjdG9yKHgsIHksIHdpZHRoLCBoZWlnaHQsIHN0eWxlLCBkZWZhdWx0UGVyY2VudCwgZWFzaW5nRnVuY3Rpb24pIHtcbiAgICBzdXBlcih4LCB5LCB3aWR0aCwgaGVpZ2h0LCBzdHlsZSk7XG5cbiAgICB0aGlzLnBlcmNlbnQgPSBkZWZhdWx0UGVyY2VudCA9PSB1bmRlZmluZWQgPyAwIDogZGVmYXVsdFBlcmNlbnQ7XG4gICAgdGhpcy4jcHJlY1BlcmNlbnQgPSB0aGlzLnBlcmNlbnQ7XG4gICAgdGhpcy5lYXNpbmdGdW5jdGlvbiA9IGVhc2luZ0Z1bmN0aW9uO1xuXG4gICAgdGhpcy5sYXN0VGltZSA9IDA7XG4gICAgdGhpcy50b3RhbFRpbWUgPSAwO1xuICB9XG5cbiAgZHJhdyhjb250ZXh0KSB7XG4gICAgaWYodGhpcy5oaWRkZW4pIHJldHVybjtcbiAgICBzdXBlci5kcmF3KGNvbnRleHQpO1xuXG4gICAgY29uc3QgY2FudmFzID0gY29udGV4dC5jYW52YXM7XG4gICAgY29uc3QgY3R4ID0gY2FudmFzLmdldENvbnRleHQoXCIyZFwiKTtcbiAgICBjdHguc2F2ZSgpO1xuXG4gICAgY29uc3QgdGltZSA9IHBlcmZvcm1hbmNlLm5vdygpO1xuICAgIGxldCBvZmZzZXRUaW1lID0gMDtcblxuICAgIGlmKHRoaXMuI3ByZWNQZXJjZW50ICE9IHRoaXMucGVyY2VudCAmJiAhdGhpcy5zdHlsZS5kaXNhYmxlQW5pbWF0aW9uKSB7XG4gICAgICBpZih0aGlzLmxhc3RUaW1lID4gMCkgb2Zmc2V0VGltZSA9IHRpbWUgLSB0aGlzLmxhc3RUaW1lO1xuICAgICAgdGhpcy50b3RhbFRpbWUgKz0gb2Zmc2V0VGltZTtcblxuICAgICAgaWYodGhpcy50b3RhbFRpbWUgPj0gdGhpcy5zdHlsZS5hbmltYXRpb25EdXJhdGlvbikge1xuICAgICAgICB0aGlzLiNwcmVjUGVyY2VudCA9IHRoaXMucGVyY2VudDtcbiAgICAgICAgdGhpcy50b3RhbFRpbWUgPSAwO1xuICAgICAgICB0aGlzLmxhc3RUaW1lID0gMDtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMubGFzdFRpbWUgPSB0aW1lO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnRvdGFsVGltZSA9IDA7XG4gICAgICB0aGlzLmxhc3RUaW1lID0gMDtcbiAgICB9XG5cbiAgICB0aGlzLmRyYXdCYWNrZ3JvdW5kKGN0eCk7XG4gICAgdGhpcy5kcmF3Rm9yZWdyb3VuZChjdHgsIHRoaXMud2lkdGhGb3JlZ3JvdW5kKTtcblxuICAgIGN0eC5yZXN0b3JlKCk7XG4gIH1cblxuICBnZXQgYW5pbWF0aW9uUGVyY2VudCgpIHtcbiAgICBsZXQgYW5pbWF0aW9uUGVyY2VudCA9ICh0aGlzLiNwcmVjUGVyY2VudCAhPSB0aGlzLnBlcmNlbnQgJiYgIXRoaXMuc3R5bGUuZGlzYWJsZUFuaW1hdGlvbiA/IHRoaXMudG90YWxUaW1lIC8gKHRoaXMuc3R5bGUuYW5pbWF0aW9uRHVyYXRpb24pIDogMSk7XG5cbiAgICBpZih0aGlzLmVhc2luZ0Z1bmN0aW9uKSB7XG4gICAgICBhbmltYXRpb25QZXJjZW50ID0gdGhpcy5lYXNpbmdGdW5jdGlvbihhbmltYXRpb25QZXJjZW50KTtcbiAgICB9XG5cbiAgICByZXR1cm4gYW5pbWF0aW9uUGVyY2VudDtcbiAgfVxuXG4gIGdldCB3aWR0aEZvcmVncm91bmQoKSB7XG4gICAgcmV0dXJuIE1hdGgubWF4KDAsIE1hdGgubWluKHRoaXMud2lkdGgsIHRoaXMud2lkdGggKiAodGhpcy4jcHJlY1BlcmNlbnQgKyAodGhpcy5wZXJjZW50IC0gdGhpcy4jcHJlY1BlcmNlbnQpICogdGhpcy5hbmltYXRpb25QZXJjZW50KSkpO1xuICB9XG5cbiAgZHJhd0ZvcmVncm91bmQoY3R4LCB3aWR0aEZvcmVncm91bmQpIHtcbiAgICBjdHguc2F2ZSgpO1xuXG4gICAgY3R4LmZpbGxTdHlsZSA9IHRoaXMuc3R5bGUuZm9yZWdyb3VuZENvbG9yO1xuICAgIGN0eC5maWxsUmVjdCh0aGlzLngsIHRoaXMueSwgd2lkdGhGb3JlZ3JvdW5kLCB0aGlzLmhlaWdodCk7XG5cbiAgICBjdHgucmVzdG9yZSgpO1xuICB9XG5cbiAgZ2V0IGRlZmF1bHRTdHlsZSgpIHtcbiAgICByZXR1cm4gbmV3IFN0eWxlKHtcbiAgICAgIFwiYmFja2dyb3VuZENvbG9yXCI6IENvbnN0YW50cy5TZXR0aW5nLlBST0dSRVNTX0RFRkFVTFRfQkFDS0dST1VORCxcbiAgICAgIFwiZm9yZWdyb3VuZENvbG9yXCI6IENvbnN0YW50cy5TZXR0aW5nLlBST0dSRVNTX0RFRkFVTFRfRk9SRUdST1VORCxcbiAgICAgIFwiYW5pbWF0aW9uRHVyYXRpb25cIjogQ29uc3RhbnRzLlNldHRpbmcuUFJPR1JFU1NfREVGQVVMVF9BTklNQVRJT05fRFVSQVRJT05cbiAgICB9KTtcbiAgfVxufSIsIi8qXG4gKiBDb3B5cmlnaHQgKEMpIDIwMjAgRWxpYXN0aWsgKGVsaWFzdGlrc29mdHMuY29tKVxuICpcbiAqIFRoaXMgZmlsZSBpcyBwYXJ0IG9mIFwiSlNHYW1lVG9vbHNcIi5cbiAqXG4gKiBcIkpTR2FtZVRvb2xzXCIgaXMgZnJlZSBzb2Z0d2FyZTogeW91IGNhbiByZWRpc3RyaWJ1dGUgaXQgYW5kL29yIG1vZGlmeVxuICogaXQgdW5kZXIgdGhlIHRlcm1zIG9mIHRoZSBHTlUgR2VuZXJhbCBQdWJsaWMgTGljZW5zZSBhcyBwdWJsaXNoZWQgYnlcbiAqIHRoZSBGcmVlIFNvZnR3YXJlIEZvdW5kYXRpb24sIGVpdGhlciB2ZXJzaW9uIDMgb2YgdGhlIExpY2Vuc2UsIG9yXG4gKiAoYXQgeW91ciBvcHRpb24pIGFueSBsYXRlciB2ZXJzaW9uLlxuICpcbiAqIFwiSlNHYW1lVG9vbHNcIiBpcyBkaXN0cmlidXRlZCBpbiB0aGUgaG9wZSB0aGF0IGl0IHdpbGwgYmUgdXNlZnVsLFxuICogYnV0IFdJVEhPVVQgQU5ZIFdBUlJBTlRZOyB3aXRob3V0IGV2ZW4gdGhlIGltcGxpZWQgd2FycmFudHkgb2ZcbiAqIE1FUkNIQU5UQUJJTElUWSBvciBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRS4gIFNlZSB0aGVcbiAqIEdOVSBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlIGZvciBtb3JlIGRldGFpbHMuXG4gKlxuICogWW91IHNob3VsZCBoYXZlIHJlY2VpdmVkIGEgY29weSBvZiB0aGUgR05VIEdlbmVyYWwgUHVibGljIExpY2Vuc2VcbiAqIGFsb25nIHdpdGggXCJKU0dhbWVUb29sc1wiLiAgSWYgbm90LCBzZWUgPGh0dHA6Ly93d3cuZ251Lm9yZy9saWNlbnNlcy8+LlxuICovXG5pbXBvcnQgRXZlbnQgZnJvbSBcIi4vRXZlbnRcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUmVhY3RvciB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHRoaXMuZXZlbnRzID0ge307XG4gIH1cblxuICByZWdpc3RlckV2ZW50KGV2ZW50TmFtZSkge1xuICAgIHRoaXMuZXZlbnRzW2V2ZW50TmFtZV0gPSBuZXcgRXZlbnQoZXZlbnROYW1lKTtcbiAgfVxuXG4gIGRpc3BhdGNoRXZlbnQoZXZlbnROYW1lLCAuLi5ldmVudEFyZ3MpIHtcbiAgICBpZih0aGlzLmV2ZW50c1tldmVudE5hbWVdKSB7XG4gICAgICBjb25zdCBjYWxsYmFja3MgPSB0aGlzLmV2ZW50c1tldmVudE5hbWVdLmNhbGxiYWNrcztcbiAgICAgIGNhbGxiYWNrcy5mb3JFYWNoKGNhbGxiYWNrID0+IGNhbGxiYWNrICYmIGNhbGxiYWNrKC4uLmV2ZW50QXJncykpO1xuICAgIH1cbiAgfVxuXG4gIGFkZEV2ZW50TGlzdGVuZXIoZXZlbnROYW1lLCBjYWxsYmFjaykge1xuICAgIGlmKHRoaXMuZXZlbnRzW2V2ZW50TmFtZV0pIHRoaXMuZXZlbnRzW2V2ZW50TmFtZV0ucmVnaXN0ZXJDYWxsYmFjayhjYWxsYmFjayk7XG4gIH1cblxuICByZW1vdmVFdmVudExpc3RlbmVyKGV2ZW50TmFtZSwgY2FsbGJhY2spIHtcbiAgICBpZih0aGlzLmV2ZW50c1tldmVudE5hbWVdKSB0aGlzLmV2ZW50c1tldmVudE5hbWVdLnJlbW92ZUNhbGxiYWNrKGNhbGxiYWNrKTtcbiAgfVxuXG4gIHJlbW92ZUFsbEV2ZW50TGlzdGVuZXIoZXZlbnROYW1lKSB7XG4gICAgaWYodGhpcy5ldmVudHNbZXZlbnROYW1lXSkgdGhpcy5ldmVudHNbZXZlbnROYW1lXS5yZW1vdmVBbGxDYWxsYmFja3MoKTtcbiAgfVxufSIsIi8qXG4gKiBDb3B5cmlnaHQgKEMpIDIwMjAgRWxpYXN0aWsgKGVsaWFzdGlrc29mdHMuY29tKVxuICpcbiAqIFRoaXMgZmlsZSBpcyBwYXJ0IG9mIFwiSlNHYW1lVG9vbHNcIi5cbiAqXG4gKiBcIkpTR2FtZVRvb2xzXCIgaXMgZnJlZSBzb2Z0d2FyZTogeW91IGNhbiByZWRpc3RyaWJ1dGUgaXQgYW5kL29yIG1vZGlmeVxuICogaXQgdW5kZXIgdGhlIHRlcm1zIG9mIHRoZSBHTlUgR2VuZXJhbCBQdWJsaWMgTGljZW5zZSBhcyBwdWJsaXNoZWQgYnlcbiAqIHRoZSBGcmVlIFNvZnR3YXJlIEZvdW5kYXRpb24sIGVpdGhlciB2ZXJzaW9uIDMgb2YgdGhlIExpY2Vuc2UsIG9yXG4gKiAoYXQgeW91ciBvcHRpb24pIGFueSBsYXRlciB2ZXJzaW9uLlxuICpcbiAqIFwiSlNHYW1lVG9vbHNcIiBpcyBkaXN0cmlidXRlZCBpbiB0aGUgaG9wZSB0aGF0IGl0IHdpbGwgYmUgdXNlZnVsLFxuICogYnV0IFdJVEhPVVQgQU5ZIFdBUlJBTlRZOyB3aXRob3V0IGV2ZW4gdGhlIGltcGxpZWQgd2FycmFudHkgb2ZcbiAqIE1FUkNIQU5UQUJJTElUWSBvciBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRS4gIFNlZSB0aGVcbiAqIEdOVSBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlIGZvciBtb3JlIGRldGFpbHMuXG4gKlxuICogWW91IHNob3VsZCBoYXZlIHJlY2VpdmVkIGEgY29weSBvZiB0aGUgR05VIEdlbmVyYWwgUHVibGljIExpY2Vuc2VcbiAqIGFsb25nIHdpdGggXCJKU0dhbWVUb29sc1wiLiAgSWYgbm90LCBzZWUgPGh0dHA6Ly93d3cuZ251Lm9yZy9saWNlbnNlcy8+LlxuICovXG5pbXBvcnQgUmVhY3RvciBmcm9tIFwiLi9SZWFjdG9yXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFJlYWN0b3JDYW52YXMgZXh0ZW5kcyBSZWFjdG9yIHtcbiAgcmVnaXN0ZXJFdmVudChldmVudE5hbWUpIHtcbiAgICBpZighdGhpcy5ldmVudHNbZXZlbnROYW1lXSkgdGhpcy5ldmVudHNbZXZlbnROYW1lXSA9IFtdO1xuICB9XG5cbiAgZGlzcGF0Y2hFdmVudChldmVudE5hbWUsIC4uLmV2ZW50QXJncykge1xuICAgIGlmKHRoaXMuZXZlbnRzW2V2ZW50TmFtZV0pIHtcbiAgICAgIGNvbnN0IGV2ZW50cyA9IHRoaXMuZXZlbnRzW2V2ZW50TmFtZV07XG4gICAgICBldmVudHMuZm9yRWFjaChldmVudCA9PiBldmVudCAmJiBldmVudC5jYWxsYmFjayAmJiBldmVudC5jYWxsYmFjayguLi5ldmVudEFyZ3MpKTtcbiAgICB9XG4gIH1cblxuICBkaXNwYXRjaEV2ZW50Q29tcG9uZW50KGV2ZW50TmFtZSwgY29tcG9uZW50LCAuLi5ldmVudEFyZ3MpIHtcbiAgICBpZih0aGlzLmV2ZW50c1tldmVudE5hbWVdKSB7XG4gICAgICBjb25zdCBldmVudHMgPSB0aGlzLmV2ZW50c1tldmVudE5hbWVdO1xuICAgICAgZXZlbnRzLmZvckVhY2goZXZlbnQgPT4gZXZlbnQgJiYgZXZlbnQuY2FsbGJhY2sgJiYgZXZlbnQuY29tcG9uZW50ID09IGNvbXBvbmVudCAmJiBldmVudC5jYWxsYmFjayguLi5ldmVudEFyZ3MpKTtcbiAgICB9XG4gIH1cblxuICBhZGRFdmVudExpc3RlbmVyKGV2ZW50TmFtZSwgY29tcG9uZW50LCBjYWxsYmFjaykge1xuICAgIGlmKHRoaXMuZXZlbnRzW2V2ZW50TmFtZV0pIHtcbiAgICAgIHRoaXMuZXZlbnRzW2V2ZW50TmFtZV0ucHVzaCh7XG4gICAgICAgIFwiY29tcG9uZW50XCI6IGNvbXBvbmVudCxcbiAgICAgICAgXCJjYWxsYmFja1wiOiBjYWxsYmFja1xuICAgICAgfSk7XG4gICAgfVxuICB9XG5cbiAgcmVtb3ZlRXZlbnRMaXN0ZW5lcihldmVudE5hbWUsIGNhbGxiYWNrKSB7XG4gICAgaWYodGhpcy5ldmVudHNbZXZlbnROYW1lXSkgdGhpcy5ldmVudHNbZXZlbnROYW1lXS5maWx0ZXIoZXZlbnQgPT4gZXZlbnQgJiYgZXZlbnQuY2FsbGJhY2sgIT0gY2FsbGJhY2spO1xuICB9XG5cbiAgcmVtb3ZlRXZlbnRMaXN0ZW5lckNvbXBvbmVudChldmVudE5hbWUsIGNvbXBvbmVudCkge1xuICAgIGlmKHRoaXMuZXZlbnRzW2V2ZW50TmFtZV0pIHRoaXMuZXZlbnRzW2V2ZW50TmFtZV0uZmlsdGVyKGV2ZW50ID0+IGV2ZW50ICYmIGV2ZW50LmNvbXBvbmVudCAhPSBjb21wb25lbnQpO1xuICB9XG5cbiAgcmVtb3ZlQWxsRXZlbnRMaXN0ZW5lcigpIHtcbiAgICB0aGlzLmV2ZW50cyA9IFtdO1xuICB9XG59IiwiLypcbiAqIENvcHlyaWdodCAoQykgMjAyMCBFbGlhc3RpayAoZWxpYXN0aWtzb2Z0cy5jb20pXG4gKlxuICogVGhpcyBmaWxlIGlzIHBhcnQgb2YgXCJKU0dhbWVUb29sc1wiLlxuICpcbiAqIFwiSlNHYW1lVG9vbHNcIiBpcyBmcmVlIHNvZnR3YXJlOiB5b3UgY2FuIHJlZGlzdHJpYnV0ZSBpdCBhbmQvb3IgbW9kaWZ5XG4gKiBpdCB1bmRlciB0aGUgdGVybXMgb2YgdGhlIEdOVSBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlIGFzIHB1Ymxpc2hlZCBieVxuICogdGhlIEZyZWUgU29mdHdhcmUgRm91bmRhdGlvbiwgZWl0aGVyIHZlcnNpb24gMyBvZiB0aGUgTGljZW5zZSwgb3JcbiAqIChhdCB5b3VyIG9wdGlvbikgYW55IGxhdGVyIHZlcnNpb24uXG4gKlxuICogXCJKU0dhbWVUb29sc1wiIGlzIGRpc3RyaWJ1dGVkIGluIHRoZSBob3BlIHRoYXQgaXQgd2lsbCBiZSB1c2VmdWwsXG4gKiBidXQgV0lUSE9VVCBBTlkgV0FSUkFOVFk7IHdpdGhvdXQgZXZlbiB0aGUgaW1wbGllZCB3YXJyYW50eSBvZlxuICogTUVSQ0hBTlRBQklMSVRZIG9yIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFLiAgU2VlIHRoZVxuICogR05VIEdlbmVyYWwgUHVibGljIExpY2Vuc2UgZm9yIG1vcmUgZGV0YWlscy5cbiAqXG4gKiBZb3Ugc2hvdWxkIGhhdmUgcmVjZWl2ZWQgYSBjb3B5IG9mIHRoZSBHTlUgR2VuZXJhbCBQdWJsaWMgTGljZW5zZVxuICogYWxvbmcgd2l0aCBcIkpTR2FtZVRvb2xzXCIuICBJZiBub3QsIHNlZSA8aHR0cDovL3d3dy5nbnUub3JnL2xpY2Vuc2VzLz4uXG4gKi9cbmltcG9ydCBDb21wb25lbnQgZnJvbSBcIi4vQ29tcG9uZW50XCI7XG5pbXBvcnQgQ29udGFpbmVyIGZyb20gXCIuL0NvbnRhaW5lclwiO1xuaW1wb3J0IFV0aWxzIGZyb20gXCIuL1V0aWxzXCI7XG5pbXBvcnQgQ29uc3RhbnRzIGZyb20gXCIuL0NvbnN0YW50c1wiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBSb3cgZXh0ZW5kcyBDb250YWluZXIge1xuICBzZWxlY3RhYmxlID0gZmFsc2U7XG4gICNfaW5uZXJIZWlnaHQgPSAwO1xuICAjX2lubmVyV2lkdGggPSAwO1xuXG4gIGNvbnN0cnVjdG9yKHgsIHksIG1heFdpZHRoLCBtYXhIZWlnaHQsIHN0eWxlLCAuLi5jb21wb25lbnRzKSB7XG4gICAgc3VwZXIoeCwgeSwgbWF4V2lkdGgsIG1heEhlaWdodCwgc3R5bGUsIC4uLmNvbXBvbmVudHMpO1xuXG4gICAgaWYoIUNvbnN0YW50cy5TZXR0aW5nLkRJU0FCTEVfRVhQRVJJTUVOVEFMX09QVElNSVpBVElPTlMpIHtcbiAgICAgIHRoaXMudXBkYXRlSW5uZXJXaWR0aCgpO1xuICAgICAgdGhpcy51cGRhdGVJbm5lckhlaWdodCgpO1xuICBcbiAgICAgIHRoaXMuYWRkQ2hhbmdlQWN0aW9uKCgpID0+IHtcbiAgICAgICAgdGhpcy51cGRhdGVJbm5lcldpZHRoKCk7XG4gICAgICAgIHRoaXMudXBkYXRlSW5uZXJIZWlnaHQoKTtcbiAgICAgIH0pO1xuICAgIH1cbiAgfVxuXG4gIGRyYXcoY29udGV4dCkge1xuICAgIGlmKHRoaXMuaGlkZGVuKSByZXR1cm47XG4gICAgc3VwZXIuZHJhdyhjb250ZXh0KTtcblxuICAgIGNvbnN0IGNhbnZhcyA9IGNvbnRleHQuY2FudmFzO1xuICAgIGNvbnN0IGN0eCA9IGNhbnZhcy5nZXRDb250ZXh0KFwiMmRcIik7XG4gICAgY3R4LnNhdmUoKTtcblxuICAgIGxldCBjdHhUZW1wID0gY3R4O1xuICAgIFxuICAgIGlmKHRoaXMuaXNDdXR0aW5nKSB7XG4gICAgICBjdHhUZW1wID0gdGhpcy5jYW52YXNUbXAuZ2V0Q29udGV4dChcIjJkXCIpO1xuICAgICAgY3R4VGVtcC5zY2FsZShDb25zdGFudHMuU2V0dGluZy5QSVhFTF9SQVRJTywgQ29uc3RhbnRzLlNldHRpbmcuUElYRUxfUkFUSU8pO1xuICAgIH1cbiAgXG4gICAgaWYoc3VwZXIuY29tcG9uZW50cyAhPSBudWxsKSB7XG4gICAgICBsZXQgY3VycmVudFggPSB0aGlzLnN0eWxlLnBhZGRpbmc7XG5cbiAgICAgIHN1cGVyLmNvbXBvbmVudHMuZm9yRWFjaChjb21wb25lbnQgPT4ge1xuICAgICAgICBjdXJyZW50WCA9IHRoaXMuZHJhd0NvbXBvbmVudChjb21wb25lbnQsIGN1cnJlbnRYLCBjdHhUZW1wKTtcbiAgICAgIH0pO1xuICAgIH1cbiAgICBcbiAgICBpZih0aGlzLmlzQ3V0dGluZykge1xuICAgICAgVXRpbHMuZHJhd0ltYWdlRGF0YShjdHgsIHRoaXMuY2FudmFzVG1wLCB0aGlzLngsIHRoaXMueSwgdGhpcy53aWR0aCwgdGhpcy5oZWlnaHQsIHRoaXMueCAqIENvbnN0YW50cy5TZXR0aW5nLlBJWEVMX1JBVElPLCB0aGlzLnkgKiBDb25zdGFudHMuU2V0dGluZy5QSVhFTF9SQVRJTywgdGhpcy53aWR0aCAqIENvbnN0YW50cy5TZXR0aW5nLlBJWEVMX1JBVElPLCB0aGlzLmhlaWdodCAqIENvbnN0YW50cy5TZXR0aW5nLlBJWEVMX1JBVElPKTtcbiAgICB9XG5cbiAgICBzdXBlci5kcmF3U2Nyb2xsYmFycyhjdHgpO1xuXG4gICAgY3R4LnJlc3RvcmUoKTtcbiAgfVxuXG4gIGRyYXdDb21wb25lbnQoY29tcG9uZW50LCBjdXJyZW50WCwgY3R4KSB7XG4gICAgaWYoY29tcG9uZW50IGluc3RhbmNlb2YgQ29tcG9uZW50KSB7XG4gICAgICBjb21wb25lbnQueCA9IGN1cnJlbnRYIC0gdGhpcy5vZmZzZXRTY3JvbGxYO1xuICAgICAgY29tcG9uZW50LnkgPSB0aGlzLnN0eWxlLnBhZGRpbmcgLSB0aGlzLm9mZnNldFNjcm9sbFk7XG4gICAgICBcbiAgICAgIGlmKCFjb21wb25lbnQuaGlkZGVuKSB7XG4gICAgICAgIGlmKHRoaXMuaXNDb21wb25lbnRWaXNpYmxlKGNvbXBvbmVudCkpIHtcbiAgICAgICAgICBjb21wb25lbnQuZW5hYmxlKCk7XG4gICAgICAgICAgY29tcG9uZW50LmRyYXcoY3R4KTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBjb21wb25lbnQuZGlzYWJsZSgpO1xuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICBjdXJyZW50WCArPSBjb21wb25lbnQud2lkdGggKyB0aGlzLnN0eWxlLnNwYWNlQmV0d2VlbkNvbXBvbmVudHM7XG4gICAgICB9XG4gICAgfVxuICAgIFxuICAgIHJldHVybiBjdXJyZW50WDtcbiAgfVxuXG4gIHVwZGF0ZUlubmVySGVpZ2h0KCkge1xuICAgIGxldCBtYXhIZWlnaHQgPSAwO1xuICAgIHN1cGVyLmNvbXBvbmVudHMuZm9yRWFjaChjb21wb25lbnQgPT4geyBpZihjb21wb25lbnQuaGVpZ2h0ID4gbWF4SGVpZ2h0ICYmICFjb21wb25lbnQuaGlkZGVuKSBtYXhIZWlnaHQgPSBjb21wb25lbnQuaGVpZ2h0OyB9KTtcbiAgICB0aGlzLiNfaW5uZXJIZWlnaHQgPSBtYXhIZWlnaHQgKyB0aGlzLnN0eWxlLnBhZGRpbmc7XG4gIH1cblxuICB1cGRhdGVJbm5lcldpZHRoKCkge1xuICAgIGxldCB0b3RhbFdpZHRoID0gMDtcbiAgICBzdXBlci5jb21wb25lbnRzLmZvckVhY2goY29tcG9uZW50ID0+IHsgaWYoIWNvbXBvbmVudC5oaWRkZW4pIHRvdGFsV2lkdGggKz0gY29tcG9uZW50LndpZHRoIH0pO1xuICAgIHRoaXMuI19pbm5lcldpZHRoID0gdG90YWxXaWR0aCArIHRoaXMuc3R5bGUuc3BhY2VCZXR3ZWVuQ29tcG9uZW50cyAqIChzdXBlci5jb21wb25lbnRzLmxlbmd0aCAtIDEpICsgdGhpcy5zdHlsZS5wYWRkaW5nO1xuICB9XG5cbiAgZ2V0IGlubmVySGVpZ2h0KCkge1xuICAgIGlmKENvbnN0YW50cy5TZXR0aW5nLkRJU0FCTEVfRVhQRVJJTUVOVEFMX09QVElNSVpBVElPTlMpIHRoaXMudXBkYXRlSW5uZXJIZWlnaHQoKTtcbiAgICByZXR1cm4gdGhpcy4jX2lubmVySGVpZ2h0O1xuICB9XG5cbiAgZ2V0IGlubmVyV2lkdGgoKSB7XG4gICAgaWYoQ29uc3RhbnRzLlNldHRpbmcuRElTQUJMRV9FWFBFUklNRU5UQUxfT1BUSU1JWkFUSU9OUykgdGhpcy51cGRhdGVJbm5lcldpZHRoKCk7XG4gICAgcmV0dXJuIHRoaXMuI19pbm5lcldpZHRoO1xuICB9XG5cbiAgZ2V0IHdpZHRoKCkge1xuICAgIGNvbnN0IHdpZHRoID0gdGhpcy5pbm5lcldpZHRoIHx8ICh0aGlzLnBhcmVudCAmJiB0aGlzLnBhcmVudC53aWR0aCk7XG4gICAgY29uc3QgbWluID0gdGhpcy5tYXhXaWR0aCA/IE1hdGgubWluKHRoaXMubWF4V2lkdGgsIHdpZHRoKSA6IG51bGw7XG4gICAgcmV0dXJuIHRoaXMubWluV2lkdGggPyBNYXRoLm1heCh0aGlzLm1pbldpZHRoLCBtaW4gfHwgd2lkdGgpIDogbWluIHx8IHdpZHRoO1xuICB9XG5cbiAgZ2V0IGhlaWdodCgpIHtcbiAgICBjb25zdCBoZWlnaHQgPSB0aGlzLmlubmVySGVpZ2h0IHx8ICh0aGlzLnBhcmVudCAmJiB0aGlzLnBhcmVudC5oZWlnaHQpO1xuICAgIGNvbnN0IG1pbiA9IHRoaXMubWF4SGVpZ2h0ID8gTWF0aC5taW4odGhpcy5tYXhIZWlnaHQsIGhlaWdodCkgOiBudWxsO1xuICAgIHJldHVybiB0aGlzLm1pbkhlaWdodCA/IE1hdGgubWF4KHRoaXMubWluSGVpZ2h0LCBtaW4gfHwgaGVpZ2h0KSA6IG1pbiB8fCBoZWlnaHQ7XG4gIH1cblxuICBnZXQgZGVmYXVsdFN0eWxlKCkge1xuICAgIHJldHVybiBzdXBlci5kZWZhdWx0U3R5bGU7XG4gIH1cbn0iLCIvKlxuICogQ29weXJpZ2h0IChDKSAyMDIwIEVsaWFzdGlrIChlbGlhc3Rpa3NvZnRzLmNvbSlcbiAqXG4gKiBUaGlzIGZpbGUgaXMgcGFydCBvZiBcIkpTR2FtZVRvb2xzXCIuXG4gKlxuICogXCJKU0dhbWVUb29sc1wiIGlzIGZyZWUgc29mdHdhcmU6IHlvdSBjYW4gcmVkaXN0cmlidXRlIGl0IGFuZC9vciBtb2RpZnlcbiAqIGl0IHVuZGVyIHRoZSB0ZXJtcyBvZiB0aGUgR05VIEdlbmVyYWwgUHVibGljIExpY2Vuc2UgYXMgcHVibGlzaGVkIGJ5XG4gKiB0aGUgRnJlZSBTb2Z0d2FyZSBGb3VuZGF0aW9uLCBlaXRoZXIgdmVyc2lvbiAzIG9mIHRoZSBMaWNlbnNlLCBvclxuICogKGF0IHlvdXIgb3B0aW9uKSBhbnkgbGF0ZXIgdmVyc2lvbi5cbiAqXG4gKiBcIkpTR2FtZVRvb2xzXCIgaXMgZGlzdHJpYnV0ZWQgaW4gdGhlIGhvcGUgdGhhdCBpdCB3aWxsIGJlIHVzZWZ1bCxcbiAqIGJ1dCBXSVRIT1VUIEFOWSBXQVJSQU5UWTsgd2l0aG91dCBldmVuIHRoZSBpbXBsaWVkIHdhcnJhbnR5IG9mXG4gKiBNRVJDSEFOVEFCSUxJVFkgb3IgRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UuICBTZWUgdGhlXG4gKiBHTlUgR2VuZXJhbCBQdWJsaWMgTGljZW5zZSBmb3IgbW9yZSBkZXRhaWxzLlxuICpcbiAqIFlvdSBzaG91bGQgaGF2ZSByZWNlaXZlZCBhIGNvcHkgb2YgdGhlIEdOVSBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlXG4gKiBhbG9uZyB3aXRoIFwiSlNHYW1lVG9vbHNcIi4gIElmIG5vdCwgc2VlIDxodHRwOi8vd3d3LmdudS5vcmcvbGljZW5zZXMvPi5cbiAqL1xuaW1wb3J0IElucHV0IGZyb20gXCIuL0lucHV0XCI7XG5pbXBvcnQgQ29udGFpbmVyIGZyb20gXCIuL0NvbnRhaW5lclwiO1xuaW1wb3J0IFV0aWxzIGZyb20gXCIuL1V0aWxzXCI7XG5pbXBvcnQgU3R5bGUgZnJvbSBcIi4vU3R5bGVcIjtcbmltcG9ydCBDb25zdGFudHMgZnJvbSBcIi4vQ29uc3RhbnRzXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFNjZW5lIGV4dGVuZHMgQ29udGFpbmVyIHtcbiAgc2VsZWN0YWJsZSA9IGZhbHNlO1xuICBlbmFibGVFdmVudHMgPSBmYWxzZTtcblxuICBjb25zdHJ1Y3RvciguLi5jb21wb25lbnRzKSB7XG4gICAgc3VwZXIoKTtcbiAgICB0aGlzLmFkZEFsbCguLi5jb21wb25lbnRzKTtcbiAgfVxuXG4gIGRyYXcoY29udGV4dCkge1xuICAgIGlmKHRoaXMuaGlkZGVuKSByZXR1cm47XG4gICAgc3VwZXIuZHJhdyhjb250ZXh0KTtcblxuICAgIGNvbnN0IGNhbnZhcyA9IGNvbnRleHQuY2FudmFzO1xuICAgIGNvbnN0IGN0eCA9IGNhbnZhcy5nZXRDb250ZXh0KFwiMmRcIik7XG4gICAgY3R4LnNhdmUoKTtcbiAgICBjYW52YXMuc3R5bGUuY3Vyc29yID0gXCJkZWZhdWx0XCI7XG5cbiAgICBsZXQgY3R4VGVtcCA9IGN0eDtcbiAgICBpZih0aGlzLm1heFdpZHRoIHx8IHRoaXMubWF4SGVpZ2h0KSBjdHhUZW1wID0gdGhpcy5jYW52YXNUbXAuZ2V0Q29udGV4dChcIjJkXCIpO1xuXG4gICAgY29uc3QgaW5wdXRzID0gc3VwZXIuY29tcG9uZW50cy5maWx0ZXIoY29tcG9uZW50ID0+IGNvbXBvbmVudCAmJiBjb21wb25lbnQgaW5zdGFuY2VvZiBJbnB1dCk7XG4gICAgaW5wdXRzICYmIGlucHV0cy5mb3JFYWNoKGlucHV0ID0+IGlucHV0LmNhbnZhcyA9IHRoaXMuY2FudmFzKTsgLy8gU2V0IGlucHV0cyBjYW52YXNcbiAgICB0aGlzLmRyYXdDb21wb25lbnRzKGN0eFRlbXApOyAvLyBEcmF3IHNvcnRlZCBjb21wb25lbnRzXG4gICAgXG4gICAgaWYodGhpcy5tYXhXaWR0aCB8fCB0aGlzLm1heEhlaWdodCkgVXRpbHMuZHJhd0ltYWdlRGF0YShjdHgsIHRoaXMuY2FudmFzVG1wLCB0aGlzLngsIHRoaXMueSwgdGhpcy53aWR0aCwgdGhpcy5oZWlnaHQsIHRoaXMueCwgdGhpcy55LCB0aGlzLndpZHRoLCB0aGlzLmhlaWdodCk7XG4gICAgc3VwZXIuZHJhd1Njcm9sbGJhcnMoY3R4KTtcblxuICAgIGN0eC5yZXN0b3JlKCk7XG4gIH1cblxuICBkcmF3Q29tcG9uZW50cyhjdHgpIHtcbiAgICB0aGlzLmNvbXBvbmVudHMuc29ydChTY2VuZS5jb21wYXJlQ29tcG9uZW50cykuZm9yRWFjaChjb21wb25lbnQgPT4gY29tcG9uZW50LmRyYXcoY3R4KSk7XG4gIH1cblxuICBnZXQgZGVmYXVsdFN0eWxlKCkge1xuICAgIHJldHVybiBuZXcgU3R5bGUoe1xuICAgICAgXCJwYWRkaW5nXCI6IENvbnN0YW50cy5TZXR0aW5nLkRFRkFVTFRfUEFERElOR1xuICAgIH0pO1xuICB9XG59IiwiLypcbiAqIENvcHlyaWdodCAoQykgMjAyMCBFbGlhc3RpayAoZWxpYXN0aWtzb2Z0cy5jb20pXG4gKlxuICogVGhpcyBmaWxlIGlzIHBhcnQgb2YgXCJKU0dhbWVUb29sc1wiLlxuICpcbiAqIFwiSlNHYW1lVG9vbHNcIiBpcyBmcmVlIHNvZnR3YXJlOiB5b3UgY2FuIHJlZGlzdHJpYnV0ZSBpdCBhbmQvb3IgbW9kaWZ5XG4gKiBpdCB1bmRlciB0aGUgdGVybXMgb2YgdGhlIEdOVSBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlIGFzIHB1Ymxpc2hlZCBieVxuICogdGhlIEZyZWUgU29mdHdhcmUgRm91bmRhdGlvbiwgZWl0aGVyIHZlcnNpb24gMyBvZiB0aGUgTGljZW5zZSwgb3JcbiAqIChhdCB5b3VyIG9wdGlvbikgYW55IGxhdGVyIHZlcnNpb24uXG4gKlxuICogXCJKU0dhbWVUb29sc1wiIGlzIGRpc3RyaWJ1dGVkIGluIHRoZSBob3BlIHRoYXQgaXQgd2lsbCBiZSB1c2VmdWwsXG4gKiBidXQgV0lUSE9VVCBBTlkgV0FSUkFOVFk7IHdpdGhvdXQgZXZlbiB0aGUgaW1wbGllZCB3YXJyYW50eSBvZlxuICogTUVSQ0hBTlRBQklMSVRZIG9yIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFLiAgU2VlIHRoZVxuICogR05VIEdlbmVyYWwgUHVibGljIExpY2Vuc2UgZm9yIG1vcmUgZGV0YWlscy5cbiAqXG4gKiBZb3Ugc2hvdWxkIGhhdmUgcmVjZWl2ZWQgYSBjb3B5IG9mIHRoZSBHTlUgR2VuZXJhbCBQdWJsaWMgTGljZW5zZVxuICogYWxvbmcgd2l0aCBcIkpTR2FtZVRvb2xzXCIuICBJZiBub3QsIHNlZSA8aHR0cDovL3d3dy5nbnUub3JnL2xpY2Vuc2VzLz4uXG4gKi9cbmltcG9ydCBDb25zdGFudHMgZnJvbSBcIi4vQ29uc3RhbnRzXCI7XG5pbXBvcnQgQm94IGZyb20gXCIuL0JveFwiO1xuaW1wb3J0IFN0eWxlIGZyb20gXCIuL1N0eWxlXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFNjcm9sbGJhciBleHRlbmRzIEJveCB7XG4gIHNlbGVjdGFibGUgPSB0cnVlO1xuXG4gIGNvbnN0cnVjdG9yKHNpemUsIHN0eWxlLCBwYXJlbnQpIHtcbiAgICBzdXBlcihudWxsLCBudWxsLCBudWxsLCBudWxsLCBzdHlsZSk7XG4gICAgdGhpcy5wYXJlbnQgPSBwYXJlbnQ7XG4gICAgdGhpcy5zaXplID0gc2l6ZSB8fCBDb25zdGFudHMuU2V0dGluZy5TQ1JPTExCQVJfREVGQVVMVF9TSVpFO1xuICB9XG4gIFxuICBkcmF3KGNvbnRleHQpIHtcbiAgICBpZih0aGlzLmhpZGRlbikgcmV0dXJuO1xuICAgIGlmKHRoaXMuY2xpY2tlZCkge1xuICAgICAgdGhpcy5ob3ZlcmVkID0gdHJ1ZTtcbiAgICB9XG4gICAgXG4gICAgc3VwZXIuZHJhdyhjb250ZXh0KTtcbiAgfVxuXG4gIGdldCBtYXhXaWR0aFBhcmVudCgpIHtcbiAgICByZXR1cm4gdGhpcy5wYXJlbnQgPyB0aGlzLnBhcmVudC5tYXhXaWR0aCAtIE1hdGguYWJzKE1hdGgubWluKDAsIHRoaXMucGFyZW50LngpKSA6IDA7XG4gIH1cblxuICBnZXQgbWF4SGVpZ2h0UGFyZW50KCkge1xuICAgIHJldHVybiB0aGlzLnBhcmVudCA/IHRoaXMucGFyZW50Lm1heEhlaWdodCAtIE1hdGguYWJzKE1hdGgubWluKDAsIHRoaXMucGFyZW50LnkpKSA6IDA7XG4gIH1cblxuICBnZXQgaW5uZXJXaWR0aFBhcmVudCgpIHtcbiAgICByZXR1cm4gdGhpcy5wYXJlbnQgPyB0aGlzLnBhcmVudC5pbm5lcldpZHRoIC0gTWF0aC5hYnMoTWF0aC5taW4oMCwgdGhpcy5wYXJlbnQueCkpIDogMDtcbiAgfVxuXG4gIGdldCBpbm5lckhlaWdodFBhcmVudCgpIHtcbiAgICByZXR1cm4gdGhpcy5wYXJlbnQgPyB0aGlzLnBhcmVudC5pbm5lckhlaWdodCAtIE1hdGguYWJzKE1hdGgubWluKDAsIHRoaXMucGFyZW50LnkpKSA6IDA7XG4gIH1cblxuICBnZXQgbWF4V2lkdGgoKSB7XG4gICAgcmV0dXJuIHRoaXMud2lkdGg7XG4gIH1cblxuICBnZXQgbWF4SGVpZ2h0KCkge1xuICAgIHJldHVybiB0aGlzLmhlaWdodDtcbiAgfVxuXG4gIGdldCBjb250ZW50UmF0aW9YKCkge1xuICAgIHJldHVybiB0aGlzLnBhcmVudCA/IHRoaXMubWF4V2lkdGhQYXJlbnQgLyB0aGlzLmlubmVyV2lkdGhQYXJlbnQgOiAwO1xuICB9XG5cbiAgZ2V0IGNvbnRlbnRSYXRpb1koKSB7XG4gICAgcmV0dXJuIHRoaXMucGFyZW50ID8gdGhpcy5tYXhIZWlnaHRQYXJlbnQgLyB0aGlzLmlubmVySGVpZ2h0UGFyZW50IDogMDtcbiAgfVxuXG4gIGdldCB3aWR0aCgpIHtcbiAgICByZXR1cm4gdGhpcy5tYXhXaWR0aFBhcmVudCAqIHRoaXMuY29udGVudFJhdGlvWDtcbiAgfVxuXG4gIGdldCBoZWlnaHQoKSB7XG4gICAgcmV0dXJuIHRoaXMubWF4SGVpZ2h0UGFyZW50ICogdGhpcy5jb250ZW50UmF0aW9ZO1xuICB9XG5cbiAgZ2V0IHdpbmRvd1Njcm9sbFNpemVYKCkge1xuICAgIHJldHVybiB0aGlzLmlubmVyV2lkdGhQYXJlbnQgLSB0aGlzLm1heFdpZHRoUGFyZW50O1xuICB9XG5cbiAgZ2V0IHdpbmRvd1Njcm9sbFNpemVZKCkge1xuICAgIHJldHVybiB0aGlzLmlubmVySGVpZ2h0UGFyZW50IC0gdGhpcy5tYXhIZWlnaHRQYXJlbnQ7XG4gIH1cblxuICBnZXQgcGVyY2VudFNjcm9sbGJhclgoKSB7XG4gICAgcmV0dXJuIHRoaXMucGFyZW50ID8gdGhpcy5wYXJlbnQub2Zmc2V0U2Nyb2xsWCAvIHRoaXMud2luZG93U2Nyb2xsU2l6ZVggOiAwO1xuICB9XG5cbiAgZ2V0IHBlcmNlbnRTY3JvbGxiYXJZKCkge1xuICAgIHJldHVybiB0aGlzLnBhcmVudCA/IHRoaXMucGFyZW50Lm9mZnNldFNjcm9sbFkgLyB0aGlzLndpbmRvd1Njcm9sbFNpemVZIDogMDtcbiAgfVxuXG4gIGdldCBzY3JvbGxBcmVhU2l6ZVgoKSB7XG4gICAgcmV0dXJuIHRoaXMubWF4V2lkdGhQYXJlbnQgLSB0aGlzLndpZHRoO1xuICB9XG5cbiAgZ2V0IHNjcm9sbEFyZWFTaXplWSgpIHtcbiAgICByZXR1cm4gdGhpcy5tYXhIZWlnaHRQYXJlbnQgLSB0aGlzLmhlaWdodDtcbiAgfVxuXG4gIGdldCB4KCkge1xuICAgIHJldHVybiB0aGlzLnBhcmVudCA/IE1hdGguYWJzKHRoaXMucGFyZW50LngpICsgdGhpcy5zY3JvbGxBcmVhU2l6ZVggKiB0aGlzLnBlcmNlbnRTY3JvbGxiYXJYIDogMDtcbiAgfVxuXG4gIGdldCB5KCkge1xuICAgIHJldHVybiB0aGlzLnBhcmVudCA/IE1hdGguYWJzKHRoaXMucGFyZW50LnkpICsgdGhpcy5zY3JvbGxBcmVhU2l6ZVkgKiB0aGlzLnBlcmNlbnRTY3JvbGxiYXJZIDogMDtcbiAgfVxuXG4gIGdldCBkZWZhdWx0U3R5bGUoKSB7XG4gICAgcmV0dXJuIG5ldyBTdHlsZSh7XG4gICAgICBcImJhY2tncm91bmRDb2xvclwiOiBDb25zdGFudHMuU2V0dGluZy5TQ1JPTExCQVJfREVGQVVMVF9CQUNLR1JPVU5ELFxuICAgICAgXCJiYWNrZ3JvdW5kQ29sb3JIb3ZlclwiOiBDb25zdGFudHMuU2V0dGluZy5TQ1JPTExCQVJfREVGQVVMVF9IT1ZFUl9CQUNLR1JPVU5ELFxuICAgICAgXCJiYWNrZ3JvdW5kQ29sb3JEb3duXCI6IENvbnN0YW50cy5TZXR0aW5nLlNDUk9MTEJBUl9ERUZBVUxUX0NMSUNLX0JBQ0tHUk9VTkQsXG4gICAgICBcImJvcmRlclNpemVcIjogMFxuICAgIH0pO1xuICB9XG5cbiAgY29tcGFyZVRvQ29tcG9uZW50KG90aGVyQ29tcG9uZW50KSB7XG4gICAgcmV0dXJuIG90aGVyQ29tcG9uZW50LmNvbXBhcmVUb1Njcm9sbGJhcih0aGlzKTtcbiAgfVxuXG4gIGNvbXBhcmVUb1Njcm9sbGJhcihvdGhlckNvbXBvbmVudCkge1xuICAgIHJldHVybiAwO1xuICB9XG59IiwiLypcbiAqIENvcHlyaWdodCAoQykgMjAyMCBFbGlhc3RpayAoZWxpYXN0aWtzb2Z0cy5jb20pXG4gKlxuICogVGhpcyBmaWxlIGlzIHBhcnQgb2YgXCJKU0dhbWVUb29sc1wiLlxuICpcbiAqIFwiSlNHYW1lVG9vbHNcIiBpcyBmcmVlIHNvZnR3YXJlOiB5b3UgY2FuIHJlZGlzdHJpYnV0ZSBpdCBhbmQvb3IgbW9kaWZ5XG4gKiBpdCB1bmRlciB0aGUgdGVybXMgb2YgdGhlIEdOVSBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlIGFzIHB1Ymxpc2hlZCBieVxuICogdGhlIEZyZWUgU29mdHdhcmUgRm91bmRhdGlvbiwgZWl0aGVyIHZlcnNpb24gMyBvZiB0aGUgTGljZW5zZSwgb3JcbiAqIChhdCB5b3VyIG9wdGlvbikgYW55IGxhdGVyIHZlcnNpb24uXG4gKlxuICogXCJKU0dhbWVUb29sc1wiIGlzIGRpc3RyaWJ1dGVkIGluIHRoZSBob3BlIHRoYXQgaXQgd2lsbCBiZSB1c2VmdWwsXG4gKiBidXQgV0lUSE9VVCBBTlkgV0FSUkFOVFk7IHdpdGhvdXQgZXZlbiB0aGUgaW1wbGllZCB3YXJyYW50eSBvZlxuICogTUVSQ0hBTlRBQklMSVRZIG9yIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFLiAgU2VlIHRoZVxuICogR05VIEdlbmVyYWwgUHVibGljIExpY2Vuc2UgZm9yIG1vcmUgZGV0YWlscy5cbiAqXG4gKiBZb3Ugc2hvdWxkIGhhdmUgcmVjZWl2ZWQgYSBjb3B5IG9mIHRoZSBHTlUgR2VuZXJhbCBQdWJsaWMgTGljZW5zZVxuICogYWxvbmcgd2l0aCBcIkpTR2FtZVRvb2xzXCIuICBJZiBub3QsIHNlZSA8aHR0cDovL3d3dy5nbnUub3JnL2xpY2Vuc2VzLz4uXG4gKi9cbmltcG9ydCBTY3JvbGxiYXIgZnJvbSBcIi4vU2Nyb2xsYmFyXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFNjcm9sbGJhckhvcml6b250YWwgZXh0ZW5kcyBTY3JvbGxiYXIge1xuICBzZWxlY3RhYmxlID0gdHJ1ZTtcblxuICBjb25zdHJ1Y3RvcihzaXplLCBzdHlsZSwgcGFyZW50KSB7XG4gICAgc3VwZXIoc2l6ZSwgc3R5bGUsIHBhcmVudCk7XG5cbiAgICB0aGlzLmFkZE1vdmVBY3Rpb24oKGRlbHRhWCkgPT4ge1xuICAgICAgaWYodGhpcy5wYXJlbnQpIHtcbiAgICAgICAgdGhpcy5wYXJlbnQub2Zmc2V0U2Nyb2xsWCAtPSBkZWx0YVg7XG5cbiAgICAgICAgaWYodGhpcy5wYXJlbnQucmVhY3Rvcikge1xuICAgICAgICAgIHRoaXMucGFyZW50LnJlYWN0b3IuZGlzcGF0Y2hFdmVudChcIm9uU2Nyb2xsXCIsIC1kZWx0YVgsIDApO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSk7XG4gIH1cbiAgXG4gIGRyYXcoY29udGV4dCkge1xuICAgIGlmKHRoaXMuc2Nyb2xsQXJlYVNpemVYID4gMCkge1xuICAgICAgc3VwZXIuZHJhdyhjb250ZXh0KTtcbiAgICB9XG4gIH1cblxuICBnZXQgaGVpZ2h0KCkge1xuICAgIHJldHVybiB0aGlzLnNpemU7XG4gIH1cblxuICBnZXQgeSgpIHtcbiAgICByZXR1cm4gdGhpcy5wYXJlbnQgPyB0aGlzLnBhcmVudC55ICsgdGhpcy5wYXJlbnQuaGVpZ2h0IC0gdGhpcy5zaXplIDogbnVsbDtcbiAgfVxufSIsIi8qXG4gKiBDb3B5cmlnaHQgKEMpIDIwMjAgRWxpYXN0aWsgKGVsaWFzdGlrc29mdHMuY29tKVxuICpcbiAqIFRoaXMgZmlsZSBpcyBwYXJ0IG9mIFwiSlNHYW1lVG9vbHNcIi5cbiAqXG4gKiBcIkpTR2FtZVRvb2xzXCIgaXMgZnJlZSBzb2Z0d2FyZTogeW91IGNhbiByZWRpc3RyaWJ1dGUgaXQgYW5kL29yIG1vZGlmeVxuICogaXQgdW5kZXIgdGhlIHRlcm1zIG9mIHRoZSBHTlUgR2VuZXJhbCBQdWJsaWMgTGljZW5zZSBhcyBwdWJsaXNoZWQgYnlcbiAqIHRoZSBGcmVlIFNvZnR3YXJlIEZvdW5kYXRpb24sIGVpdGhlciB2ZXJzaW9uIDMgb2YgdGhlIExpY2Vuc2UsIG9yXG4gKiAoYXQgeW91ciBvcHRpb24pIGFueSBsYXRlciB2ZXJzaW9uLlxuICpcbiAqIFwiSlNHYW1lVG9vbHNcIiBpcyBkaXN0cmlidXRlZCBpbiB0aGUgaG9wZSB0aGF0IGl0IHdpbGwgYmUgdXNlZnVsLFxuICogYnV0IFdJVEhPVVQgQU5ZIFdBUlJBTlRZOyB3aXRob3V0IGV2ZW4gdGhlIGltcGxpZWQgd2FycmFudHkgb2ZcbiAqIE1FUkNIQU5UQUJJTElUWSBvciBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRS4gIFNlZSB0aGVcbiAqIEdOVSBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlIGZvciBtb3JlIGRldGFpbHMuXG4gKlxuICogWW91IHNob3VsZCBoYXZlIHJlY2VpdmVkIGEgY29weSBvZiB0aGUgR05VIEdlbmVyYWwgUHVibGljIExpY2Vuc2VcbiAqIGFsb25nIHdpdGggXCJKU0dhbWVUb29sc1wiLiAgSWYgbm90LCBzZWUgPGh0dHA6Ly93d3cuZ251Lm9yZy9saWNlbnNlcy8+LlxuICovXG5pbXBvcnQgU2Nyb2xsYmFyIGZyb20gXCIuL1Njcm9sbGJhclwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTY3JvbGxiYXJWZXJ0aWNhbCBleHRlbmRzIFNjcm9sbGJhciB7XG4gIHNlbGVjdGFibGUgPSB0cnVlO1xuXG4gIGNvbnN0cnVjdG9yKHNpemUsIHN0eWxlLCBwYXJlbnQpIHtcbiAgICBzdXBlcihzaXplLCBzdHlsZSwgcGFyZW50KTtcbiAgICBcbiAgICB0aGlzLmFkZE1vdmVBY3Rpb24oKGRlbHRhWCwgZGVsdGFZKSA9PiB7XG4gICAgICBpZih0aGlzLnBhcmVudCkge1xuICAgICAgICB0aGlzLnBhcmVudC5vZmZzZXRTY3JvbGxZIC09IGRlbHRhWTtcblxuICAgICAgICBpZih0aGlzLnBhcmVudC5yZWFjdG9yKSB7XG4gICAgICAgICAgdGhpcy5wYXJlbnQucmVhY3Rvci5kaXNwYXRjaEV2ZW50KFwib25TY3JvbGxcIiwgMCwgLWRlbHRhWSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuICBcbiAgZHJhdyhjb250ZXh0KSB7XG4gICAgaWYodGhpcy5zY3JvbGxBcmVhU2l6ZVkgPiAwKSB7XG4gICAgICBzdXBlci5kcmF3KGNvbnRleHQpO1xuICAgIH1cbiAgfVxuXG4gIGdldCB3aWR0aCgpIHtcbiAgICByZXR1cm4gdGhpcy5zaXplO1xuICB9XG5cbiAgZ2V0IHgoKSB7XG4gICAgcmV0dXJuIHRoaXMucGFyZW50ID8gdGhpcy5wYXJlbnQueCArIHRoaXMucGFyZW50LndpZHRoIC0gdGhpcy5zaXplIDogMDtcbiAgfVxufSIsIi8qXG4gKiBDb3B5cmlnaHQgKEMpIDIwMjAgRWxpYXN0aWsgKGVsaWFzdGlrc29mdHMuY29tKVxuICpcbiAqIFRoaXMgZmlsZSBpcyBwYXJ0IG9mIFwiSlNHYW1lVG9vbHNcIi5cbiAqXG4gKiBcIkpTR2FtZVRvb2xzXCIgaXMgZnJlZSBzb2Z0d2FyZTogeW91IGNhbiByZWRpc3RyaWJ1dGUgaXQgYW5kL29yIG1vZGlmeVxuICogaXQgdW5kZXIgdGhlIHRlcm1zIG9mIHRoZSBHTlUgR2VuZXJhbCBQdWJsaWMgTGljZW5zZSBhcyBwdWJsaXNoZWQgYnlcbiAqIHRoZSBGcmVlIFNvZnR3YXJlIEZvdW5kYXRpb24sIGVpdGhlciB2ZXJzaW9uIDMgb2YgdGhlIExpY2Vuc2UsIG9yXG4gKiAoYXQgeW91ciBvcHRpb24pIGFueSBsYXRlciB2ZXJzaW9uLlxuICpcbiAqIFwiSlNHYW1lVG9vbHNcIiBpcyBkaXN0cmlidXRlZCBpbiB0aGUgaG9wZSB0aGF0IGl0IHdpbGwgYmUgdXNlZnVsLFxuICogYnV0IFdJVEhPVVQgQU5ZIFdBUlJBTlRZOyB3aXRob3V0IGV2ZW4gdGhlIGltcGxpZWQgd2FycmFudHkgb2ZcbiAqIE1FUkNIQU5UQUJJTElUWSBvciBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRS4gIFNlZSB0aGVcbiAqIEdOVSBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlIGZvciBtb3JlIGRldGFpbHMuXG4gKlxuICogWW91IHNob3VsZCBoYXZlIHJlY2VpdmVkIGEgY29weSBvZiB0aGUgR05VIEdlbmVyYWwgUHVibGljIExpY2Vuc2VcbiAqIGFsb25nIHdpdGggXCJKU0dhbWVUb29sc1wiLiAgSWYgbm90LCBzZWUgPGh0dHA6Ly93d3cuZ251Lm9yZy9saWNlbnNlcy8+LlxuICovXG5pbXBvcnQgTGFiZWwgZnJvbSBcIi4vTGFiZWxcIjtcbmltcG9ydCBCdXR0b24gZnJvbSBcIi4vQnV0dG9uXCI7XG5pbXBvcnQgVHJpYW5nbGUgZnJvbSBcIi4vVHJpYW5nbGVcIjtcbmltcG9ydCBTdHlsZSBmcm9tIFwiLi9TdHlsZVwiO1xuaW1wb3J0IENvbnN0YW50cyBmcm9tIFwiLi9Db25zdGFudHNcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU2VsZWN0IGV4dGVuZHMgQnV0dG9uIHtcbiAgI193aWR0aCA9IDA7XG5cbiAgY29uc3RydWN0b3IoeCwgeSwgbWF4V2lkdGgsIG1heEhlaWdodCwgc3R5bGUsIG9wdGlvbkNvbnRhaW5lciwgZGVmYXVsdE9wdGlvbikge1xuICAgIHN1cGVyKHgsIHksIG1heFdpZHRoLCBtYXhIZWlnaHQsIHN0eWxlKTtcblxuICAgIHRoaXMub3B0aW9uQ29udGFpbmVyID0gb3B0aW9uQ29udGFpbmVyO1xuICAgIGlmKGRlZmF1bHRPcHRpb24pIHRoaXMuc2VsZWN0ZWRPcHRpb24gPSBkZWZhdWx0T3B0aW9uO1xuXG4gICAgdGhpcy5sYWJlbCA9IG5ldyBMYWJlbChcIlwiLCB4LCB5LCBzdHlsZSk7XG4gICAgdGhpcy5sYWJlbC5zdHlsZS5zZXRBbGwoeyBcImFsaWduZW1lbnRcIjogQ29uc3RhbnRzLkFsaWduZW1lbnQuTEVGVCwgXCJ2ZXJ0aWNhbEFsaWduZW1lbnRcIjogQ29uc3RhbnRzLlZlcnRpY2FsQWxpZ25lbWVudC5DRU5URVIgfSk7XG4gICAgdGhpcy50cmlhbmdsZSA9IG5ldyBUcmlhbmdsZShudWxsLCBudWxsLCA4LCA4LCBzdHlsZSk7XG4gICAgdGhpcy50cmlhbmdsZS5zdHlsZS5zZXRBbGwoeyBcImFsaWduZW1lbnRcIjogQ29uc3RhbnRzLkFsaWduZW1lbnQuUklHSFQsIFwidmVydGljYWxBbGlnbmVtZW50XCI6IENvbnN0YW50cy5WZXJ0aWNhbEFsaWduZW1lbnQuQ0VOVEVSIH0pO1xuXG4gICAgdGhpcy5hZGRBbGwodGhpcy5sYWJlbCwgdGhpcy50cmlhbmdsZSk7XG5cbiAgICB0aGlzLmFkZENsaWNrQWN0aW9uKCgpID0+IHtcbiAgICAgIGlmKHRoaXMub3B0aW9uQ29udGFpbmVyKSB7XG4gICAgICAgIHRoaXMub3B0aW9uQ29udGFpbmVyLmhpZGRlbiA9IGZhbHNlO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgaWYoIUNvbnN0YW50cy5TZXR0aW5nLkRJU0FCTEVfRVhQRVJJTUVOVEFMX09QVElNSVpBVElPTlMpIHtcbiAgICAgIHRoaXMudXBkYXRlV2lkdGgoKTtcbiAgICAgIHRoaXMuYWRkQ2hhbmdlQWN0aW9uKCgpID0+IHRoaXMudXBkYXRlV2lkdGgoKSk7XG4gICAgfVxuICB9XG5cbiAgZHJhdyhjb250ZXh0KSB7XG4gICAgaWYodGhpcy5oaWRkZW4pIHJldHVybjtcbiAgICBpZih0aGlzLnNlbGVjdGVkT3B0aW9uICYmIHRoaXMuc2VsZWN0ZWRPcHRpb24ubGFiZWwpIHtcbiAgICAgIHRoaXMubGFiZWwudGV4dCA9IHRoaXMuc2VsZWN0ZWRPcHRpb24ubGFiZWwudGV4dDtcbiAgICB9XG5cbiAgICBzdXBlci5kcmF3KGNvbnRleHQpO1xuXG4gICAgaWYodGhpcy5vcHRpb25Db250YWluZXIpIHtcbiAgICAgIHRoaXMub3B0aW9uQ29udGFpbmVyLnNlbGVjdCA9IHRoaXM7XG4gICAgfVxuICB9XG5cbiAgZ2V0IHNlbGVjdGVkT3B0aW9uKCkge1xuICAgIHJldHVybiB0aGlzLm9wdGlvbkNvbnRhaW5lciA/IHRoaXMub3B0aW9uQ29udGFpbmVyLmNvbXBvbmVudHNbdGhpcy5vcHRpb25Db250YWluZXIuc2VsZWN0ZWRPcHRpb25dIDogbnVsbDtcbiAgfVxuXG4gIHNldCBzZWxlY3RlZE9wdGlvbihpZCkge1xuICAgIGlmKGlkICE9IHRoaXMub3B0aW9uQ29udGFpbmVyLnNlbGVjdGVkT3B0aW9uKSB7XG4gICAgICB0aGlzLm9wdGlvbkNvbnRhaW5lci5zZWxlY3RlZE9wdGlvbiA9IGlkO1xuICAgICAgdGhpcy5yZWFjdG9yLmRpc3BhdGNoRXZlbnQoXCJvbkNoYW5nZVwiLCB0aGlzKTtcbiAgICB9XG4gIH1cblxuICBnZXQgdGV4dCgpIHtcbiAgICByZXR1cm4gdGhpcy5zZWxlY3RlZE9wdGlvbiAmJiB0aGlzLnNlbGVjdGVkT3B0aW9uLmxhYmVsID8gdGhpcy5zZWxlY3RlZE9wdGlvbi5sYWJlbC50ZXh0IDogbnVsbDtcbiAgfVxuXG4gIHVwZGF0ZVdpZHRoKCkge1xuICAgIGxldCBtYXhXaWR0aCA9IHRoaXMubGFiZWwud2lkdGg7XG5cbiAgICBpZih0aGlzLm9wdGlvbkNvbnRhaW5lcikge1xuICAgICAgdGhpcy5vcHRpb25Db250YWluZXIuY29tcG9uZW50cy5mb3JFYWNoKGNvbXBvbmVudCA9PiB7XG4gICAgICAgIGNvbnN0IGxhYmVsID0gY29tcG9uZW50LmxhYmVsO1xuXG4gICAgICAgIGlmKGxhYmVsKSB7XG4gICAgICAgICAgaWYobGFiZWwudXBkYXRlU2l6ZXMpIGxhYmVsLnVwZGF0ZVNpemVzKCk7XG4gICAgICAgICAgaWYobGFiZWwud2lkdGggPiBtYXhXaWR0aCkgbWF4V2lkdGggPSBsYWJlbC53aWR0aDtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgdGhpcy4jX3dpZHRoID0gbWF4V2lkdGggKyB0aGlzLnN0eWxlLnBhZGRpbmcgKyB0aGlzLnRyaWFuZ2xlLndpZHRoICsgMTU7XG4gIH1cblxuICBnZXQgd2lkdGgoKSB7XG4gICAgaWYoQ29uc3RhbnRzLlNldHRpbmcuRElTQUJMRV9FWFBFUklNRU5UQUxfT1BUSU1JWkFUSU9OUykgdGhpcy51cGRhdGVXaWR0aCgpO1xuICAgIHJldHVybiB0aGlzLiNfd2lkdGg7XG4gIH1cblxuICBnZXQgYWxsQ29tcG9uZW50cygpIHtcbiAgICBjb25zdCBjb21wb25lbnRzID0gW107XG4gICAgY29tcG9uZW50cy5wdXNoKC4uLnN1cGVyLmFsbENvbXBvbmVudHMpO1xuICAgIHJldHVybiBjb21wb25lbnRzO1xuICB9XG5cbiAgZ2V0IGRlZmF1bHRTdHlsZSgpIHtcbiAgICByZXR1cm4gbmV3IFN0eWxlKHtcbiAgICAgIFwiYmFja2dyb3VuZENvbG9yXCI6IENvbnN0YW50cy5TZXR0aW5nLlNFTEVDVF9ERUZBVUxUX0JBQ0tHUk9VTkQsXG4gICAgICBcImJhY2tncm91bmRDb2xvckhvdmVyXCI6IENvbnN0YW50cy5TZXR0aW5nLlNFTEVDVF9ERUZBVUxUX0hPVkVSX0JBQ0tHUk9VTkQsXG4gICAgICBcImJhY2tncm91bmRDb2xvckRvd25cIjogQ29uc3RhbnRzLlNldHRpbmcuU0VMRUNUX0RFRkFVTFRfQ0xJQ0tfQkFDS0dST1VORCxcbiAgICAgIFwicGFkZGluZ1wiOiBDb25zdGFudHMuU2V0dGluZy5ERUZBVUxUX1BBRERJTkdcbiAgICB9KTtcbiAgfVxufSIsIi8qXG4gKiBDb3B5cmlnaHQgKEMpIDIwMjAgRWxpYXN0aWsgKGVsaWFzdGlrc29mdHMuY29tKVxuICpcbiAqIFRoaXMgZmlsZSBpcyBwYXJ0IG9mIFwiSlNHYW1lVG9vbHNcIi5cbiAqXG4gKiBcIkpTR2FtZVRvb2xzXCIgaXMgZnJlZSBzb2Z0d2FyZTogeW91IGNhbiByZWRpc3RyaWJ1dGUgaXQgYW5kL29yIG1vZGlmeVxuICogaXQgdW5kZXIgdGhlIHRlcm1zIG9mIHRoZSBHTlUgR2VuZXJhbCBQdWJsaWMgTGljZW5zZSBhcyBwdWJsaXNoZWQgYnlcbiAqIHRoZSBGcmVlIFNvZnR3YXJlIEZvdW5kYXRpb24sIGVpdGhlciB2ZXJzaW9uIDMgb2YgdGhlIExpY2Vuc2UsIG9yXG4gKiAoYXQgeW91ciBvcHRpb24pIGFueSBsYXRlciB2ZXJzaW9uLlxuICpcbiAqIFwiSlNHYW1lVG9vbHNcIiBpcyBkaXN0cmlidXRlZCBpbiB0aGUgaG9wZSB0aGF0IGl0IHdpbGwgYmUgdXNlZnVsLFxuICogYnV0IFdJVEhPVVQgQU5ZIFdBUlJBTlRZOyB3aXRob3V0IGV2ZW4gdGhlIGltcGxpZWQgd2FycmFudHkgb2ZcbiAqIE1FUkNIQU5UQUJJTElUWSBvciBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRS4gIFNlZSB0aGVcbiAqIEdOVSBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlIGZvciBtb3JlIGRldGFpbHMuXG4gKlxuICogWW91IHNob3VsZCBoYXZlIHJlY2VpdmVkIGEgY29weSBvZiB0aGUgR05VIEdlbmVyYWwgUHVibGljIExpY2Vuc2VcbiAqIGFsb25nIHdpdGggXCJKU0dhbWVUb29sc1wiLiAgSWYgbm90LCBzZWUgPGh0dHA6Ly93d3cuZ251Lm9yZy9saWNlbnNlcy8+LlxuICovXG5pbXBvcnQgQnV0dG9uIGZyb20gXCIuL0J1dHRvblwiO1xuaW1wb3J0IENvbnN0YW50cyBmcm9tIFwiLi9Db25zdGFudHNcIjtcbmltcG9ydCBMYWJlbCBmcm9tIFwiLi9MYWJlbFwiO1xuaW1wb3J0IFN0eWxlIGZyb20gXCIuL1N0eWxlXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFNlbGVjdE9wdGlvbiBleHRlbmRzIEJ1dHRvbiB7XG4gIGNvbnN0cnVjdG9yKGxhYmVsLCBzdHlsZSkge1xuICAgIGNvbnN0IGRlZmF1bHRMYWJlbCA9IG5ldyBMYWJlbChcIk9wdGlvblwiKTtcbiAgICBzdXBlcihudWxsLCBudWxsLCBudWxsLCBudWxsLCBzdHlsZSwgbGFiZWwgfHwgZGVmYXVsdExhYmVsKTtcbiAgICB0aGlzLmxhYmVsID0gbGFiZWwgfHwgZGVmYXVsdExhYmVsO1xuICB9XG5cbiAgYWRkKGNvbXBvbmVudCkge1xuICAgIGlmKGNvbXBvbmVudCBpbnN0YW5jZW9mIExhYmVsKSB7XG4gICAgICB0aGlzLmNsZWFyKCk7XG4gICAgICBzdXBlci5hZGQoY29tcG9uZW50KTtcbiAgICB9XG4gIH1cblxuICBnZXQgd2lkdGgoKSB7XG4gICAgcmV0dXJuIHRoaXMucGFyZW50ICYmIHRoaXMucGFyZW50LndpZHRoO1xuICB9XG5cbiAgZ2V0IGRlZmF1bHRTdHlsZSgpIHtcbiAgICByZXR1cm4gbmV3IFN0eWxlKHtcbiAgICAgIFwiYmFja2dyb3VuZENvbG9yXCI6IENvbnN0YW50cy5TZXR0aW5nLlNFTEVDVF9ERUZBVUxUX0JBQ0tHUk9VTkQsXG4gICAgICBcImJhY2tncm91bmRDb2xvckhvdmVyXCI6IENvbnN0YW50cy5TZXR0aW5nLlNFTEVDVF9ERUZBVUxUX0hPVkVSX0JBQ0tHUk9VTkQsXG4gICAgICBcImJhY2tncm91bmRDb2xvckRvd25cIjogQ29uc3RhbnRzLlNldHRpbmcuU0VMRUNUX0RFRkFVTFRfQ0xJQ0tfQkFDS0dST1VORCxcbiAgICAgIFwicGFkZGluZ1wiOiBDb25zdGFudHMuU2V0dGluZy5ERUZBVUxUX1BBRERJTkdcbiAgICB9KTtcbiAgfVxufSIsIi8qXG4gKiBDb3B5cmlnaHQgKEMpIDIwMjAgRWxpYXN0aWsgKGVsaWFzdGlrc29mdHMuY29tKVxuICpcbiAqIFRoaXMgZmlsZSBpcyBwYXJ0IG9mIFwiSlNHYW1lVG9vbHNcIi5cbiAqXG4gKiBcIkpTR2FtZVRvb2xzXCIgaXMgZnJlZSBzb2Z0d2FyZTogeW91IGNhbiByZWRpc3RyaWJ1dGUgaXQgYW5kL29yIG1vZGlmeVxuICogaXQgdW5kZXIgdGhlIHRlcm1zIG9mIHRoZSBHTlUgR2VuZXJhbCBQdWJsaWMgTGljZW5zZSBhcyBwdWJsaXNoZWQgYnlcbiAqIHRoZSBGcmVlIFNvZnR3YXJlIEZvdW5kYXRpb24sIGVpdGhlciB2ZXJzaW9uIDMgb2YgdGhlIExpY2Vuc2UsIG9yXG4gKiAoYXQgeW91ciBvcHRpb24pIGFueSBsYXRlciB2ZXJzaW9uLlxuICpcbiAqIFwiSlNHYW1lVG9vbHNcIiBpcyBkaXN0cmlidXRlZCBpbiB0aGUgaG9wZSB0aGF0IGl0IHdpbGwgYmUgdXNlZnVsLFxuICogYnV0IFdJVEhPVVQgQU5ZIFdBUlJBTlRZOyB3aXRob3V0IGV2ZW4gdGhlIGltcGxpZWQgd2FycmFudHkgb2ZcbiAqIE1FUkNIQU5UQUJJTElUWSBvciBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRS4gIFNlZSB0aGVcbiAqIEdOVSBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlIGZvciBtb3JlIGRldGFpbHMuXG4gKlxuICogWW91IHNob3VsZCBoYXZlIHJlY2VpdmVkIGEgY29weSBvZiB0aGUgR05VIEdlbmVyYWwgUHVibGljIExpY2Vuc2VcbiAqIGFsb25nIHdpdGggXCJKU0dhbWVUb29sc1wiLiAgSWYgbm90LCBzZWUgPGh0dHA6Ly93d3cuZ251Lm9yZy9saWNlbnNlcy8+LlxuICovXG5pbXBvcnQgQ29sIGZyb20gXCIuL0NvbFwiO1xuaW1wb3J0IFN0eWxlIGZyb20gXCIuL1N0eWxlXCI7XG5pbXBvcnQgQ29uc3RhbnRzIGZyb20gXCIuL0NvbnN0YW50c1wiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTZWxlY3REcm9wZG93biBleHRlbmRzIENvbCB7XG4gICNfc2VsZWN0ZWRPcHRpb247XG5cbiAgY29uc3RydWN0b3IobWF4SGVpZ2h0RHJvcGRvd24sIHN0eWxlLCAuLi5vcHRpb25zKSB7XG4gICAgc3VwZXIobnVsbCwgbnVsbCwgbnVsbCwgbWF4SGVpZ2h0RHJvcGRvd24sIHN0eWxlLCAuLi5vcHRpb25zKTtcbiAgICB0aGlzLiNfc2VsZWN0ZWRPcHRpb24gPSAwO1xuICAgIHRoaXMuc2VsZWN0ID0gbnVsbDtcbiAgfVxuXG4gIGRyYXcoY29udGV4dCkge1xuICAgIHN1cGVyLmRyYXcoY29udGV4dCk7XG5cbiAgICBpZih0aGlzLnNlbGVjdGVkICYmIHRoaXMuc2VsZWN0ZWQpIHtcbiAgICAgIHRoaXMuc2VsZWN0LnNlbGVjdGVkID0gdHJ1ZTtcbiAgICB9XG4gIH1cblxuICBnZXQgeCgpIHtcbiAgICByZXR1cm4gdGhpcy5zZWxlY3QgJiYgdGhpcy5zZWxlY3QueDtcbiAgfVxuXG4gIGdldCB5KCkge1xuICAgIGNvbnN0IHNlbGVjdEhlaWdodCA9ICh0aGlzLnNlbGVjdCAmJiB0aGlzLnNlbGVjdC5oZWlnaHQpO1xuICAgIGNvbnN0IGhlaWdodCA9IHRoaXMuaGVpZ2h0O1xuICAgIGNvbnN0IHkgPSB0aGlzLnNlbGVjdCAmJiB0aGlzLnNlbGVjdC55O1xuXG4gICAgaWYodGhpcy5jYW52YXMgJiYgdGhpcy5jYW52YXMuc2NlbmUgJiYgeSArIHNlbGVjdEhlaWdodCArIGhlaWdodCA+PSB0aGlzLmNhbnZhcy5zY2VuZS5oZWlnaHQpIHtcbiAgICAgIHJldHVybiB5IC0gaGVpZ2h0O1xuICAgIH1cblxuICAgIHJldHVybiB5ICsgc2VsZWN0SGVpZ2h0O1xuICB9XG5cbiAgZ2V0IHdpZHRoKCkge1xuICAgIHJldHVybiB0aGlzLnNlbGVjdCAmJiB0aGlzLnNlbGVjdC53aWR0aDtcbiAgfVxuXG4gIGdldCBzZWxlY3RlZE9wdGlvbigpIHtcbiAgICByZXR1cm4gTWF0aC5tYXgoMCwgTWF0aC5taW4odGhpcy5jb21wb25lbnRzLmxlbmd0aCAtIDEsIHRoaXMuI19zZWxlY3RlZE9wdGlvbikpO1xuICB9XG5cbiAgc2V0IHNlbGVjdGVkT3B0aW9uKGlkKSB7XG4gICAgaWYoaWQgIT0gdGhpcy4jX3NlbGVjdGVkT3B0aW9uKSB7XG4gICAgICB0aGlzLiNfc2VsZWN0ZWRPcHRpb24gPSBpZDtcbiAgICAgIHRoaXMucmVhY3Rvci5kaXNwYXRjaEV2ZW50KFwib25DaGFuZ2VcIiwgdGhpcyk7XG4gICAgfVxuICB9XG5cbiAgYWRkKGNvbXBvbmVudCkge1xuICAgIHN1cGVyLmFkZChjb21wb25lbnQpO1xuXG4gICAgY29tcG9uZW50LmFkZENsaWNrQWN0aW9uKCgpID0+IHtcbiAgICAgIHRoaXMuI19zZWxlY3RlZE9wdGlvbiA9IHRoaXMuZ2V0Q29tcG9uZW50SWQoY29tcG9uZW50KTtcbiAgICAgIHRoaXMuc2VsZWN0ZWQgPSBmYWxzZTtcbiAgICAgIHRoaXMuaGlkZGVuID0gdHJ1ZTtcbiAgICAgIGlmKHRoaXMuc2VsZWN0KSB0aGlzLnNlbGVjdC5zZWxlY3RlZCA9IGZhbHNlO1xuICAgIH0pO1xuICB9XG5cbiAgZ2V0IGRlZmF1bHRTdHlsZSgpIHtcbiAgICByZXR1cm4gbmV3IFN0eWxlKHtcbiAgICAgIFwicGFkZGluZ1wiOiAwLFxuICAgICAgXCJzcGFjZUJldHdlZW5Db21wb25lbnRzXCI6IDAsXG4gICAgICBcImJhY2tncm91bmRDb2xvclwiOiBDb25zdGFudHMuU2V0dGluZy5TRUxFQ1RfREVGQVVMVF9CQUNLR1JPVU5ELFxuICAgICAgXCJiYWNrZ3JvdW5kQ29sb3JIb3ZlclwiOiBudWxsLFxuICAgICAgXCJiYWNrZ3JvdW5kQ29sb3JEb3duXCI6IG51bGwsXG4gICAgICBcInNjcm9sbFhEaXNhYmxlZFwiOiBmYWxzZSxcbiAgICAgIFwic2Nyb2xsWURpc2FibGVkXCI6IGZhbHNlXG4gICAgfSk7XG4gIH1cblxuICBnZXQgaGlkZGVuKCkge1xuICAgIHJldHVybiBzdXBlci5oaWRkZW4gfHwgKHRoaXMuc2VsZWN0ICYmICF0aGlzLnNlbGVjdC5zZWxlY3RlZCkgfHwgIXRoaXMuc2VsZWN0O1xuICB9XG5cbiAgc2V0IGhpZGRlbihoaWRkZW4pIHtcbiAgICByZXR1cm4gc3VwZXIuaGlkZGVuID0gaGlkZGVuO1xuICB9XG5cbiAgZ2V0IHNlbGVjdGVkKCkge1xuICAgIHJldHVybiBzdXBlci5zZWxlY3RlZCB8fCAodGhpcy5zZWxlY3QgJiYgdGhpcy5zZWxlY3Quc2VsZWN0ZWQpO1xuICB9XG5cbiAgc2V0IHNlbGVjdGVkKHNlbGVjdGVkKSB7XG4gICAgc3VwZXIuc2VsZWN0ZWQgPSBzZWxlY3RlZDtcbiAgfVxufSIsIi8qXG4gKiBDb3B5cmlnaHQgKEMpIDIwMjAgRWxpYXN0aWsgKGVsaWFzdGlrc29mdHMuY29tKVxuICpcbiAqIFRoaXMgZmlsZSBpcyBwYXJ0IG9mIFwiSlNHYW1lVG9vbHNcIi5cbiAqXG4gKiBcIkpTR2FtZVRvb2xzXCIgaXMgZnJlZSBzb2Z0d2FyZTogeW91IGNhbiByZWRpc3RyaWJ1dGUgaXQgYW5kL29yIG1vZGlmeVxuICogaXQgdW5kZXIgdGhlIHRlcm1zIG9mIHRoZSBHTlUgR2VuZXJhbCBQdWJsaWMgTGljZW5zZSBhcyBwdWJsaXNoZWQgYnlcbiAqIHRoZSBGcmVlIFNvZnR3YXJlIEZvdW5kYXRpb24sIGVpdGhlciB2ZXJzaW9uIDMgb2YgdGhlIExpY2Vuc2UsIG9yXG4gKiAoYXQgeW91ciBvcHRpb24pIGFueSBsYXRlciB2ZXJzaW9uLlxuICpcbiAqIFwiSlNHYW1lVG9vbHNcIiBpcyBkaXN0cmlidXRlZCBpbiB0aGUgaG9wZSB0aGF0IGl0IHdpbGwgYmUgdXNlZnVsLFxuICogYnV0IFdJVEhPVVQgQU5ZIFdBUlJBTlRZOyB3aXRob3V0IGV2ZW4gdGhlIGltcGxpZWQgd2FycmFudHkgb2ZcbiAqIE1FUkNIQU5UQUJJTElUWSBvciBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRS4gIFNlZSB0aGVcbiAqIEdOVSBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlIGZvciBtb3JlIGRldGFpbHMuXG4gKlxuICogWW91IHNob3VsZCBoYXZlIHJlY2VpdmVkIGEgY29weSBvZiB0aGUgR05VIEdlbmVyYWwgUHVibGljIExpY2Vuc2VcbiAqIGFsb25nIHdpdGggXCJKU0dhbWVUb29sc1wiLiAgSWYgbm90LCBzZWUgPGh0dHA6Ly93d3cuZ251Lm9yZy9saWNlbnNlcy8+LlxuICovXG5pbXBvcnQgQ29uc3RhbnRzIGZyb20gXCIuL0NvbnN0YW50c1wiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTdHlsZSB7XG4gICNzdHlsZXMgPSB7fTtcbiAgY29tcG9uZW50O1xuXG4gIGNvbnN0cnVjdG9yKHN0eWxlcykge1xuICAgIHRoaXMuc2V0QWxsKHN0eWxlcyk7XG4gIH1cblxuICBnZXQgZm9udENvbG9yKCkge1xuICAgIHJldHVybiB0aGlzLiNzdHlsZXMuZm9udENvbG9yO1xuICB9XG5cbiAgZ2V0IGZvbnRDb2xvckhvdmVyKCkge1xuICAgIHJldHVybiB0aGlzLiNzdHlsZXMuZm9udENvbG9ySG92ZXI7XG4gIH1cblxuICBnZXQgZm9udENvbG9yRG93bigpIHtcbiAgICByZXR1cm4gdGhpcy4jc3R5bGVzLmZvbnRDb2xvckRvd247XG4gIH1cblxuICBnZXQgZm9udEZhbWlseSgpIHtcbiAgICByZXR1cm4gdGhpcy4jc3R5bGVzLmZvbnRGYW1pbHkgIT0gbnVsbCA/IHRoaXMuI3N0eWxlcy5mb250RmFtaWx5IDogQ29uc3RhbnRzLlNldHRpbmcuRk9OVF9GQU1JTFk7XG4gIH1cblxuICBnZXQgZm9udFNpemUoKSB7XG4gICAgcmV0dXJuIHRoaXMuI3N0eWxlcy5mb250U2l6ZSAhPSBudWxsID8gdGhpcy4jc3R5bGVzLmZvbnRTaXplIDogQ29uc3RhbnRzLlNldHRpbmcuRk9OVF9TSVpFO1xuICB9XG5cbiAgZ2V0IGJvbGQoKSB7XG4gICAgcmV0dXJuIHRoaXMuI3N0eWxlcy5ib2xkO1xuICB9XG5cbiAgZ2V0IHVuZGVybGluZSgpIHtcbiAgICByZXR1cm4gdGhpcy4jc3R5bGVzLnVuZGVybGluZTtcbiAgfVxuXG4gIGdldCB3cmFwKCkge1xuICAgIHJldHVybiB0aGlzLiNzdHlsZXMud3JhcDtcbiAgfVxuXG4gIGdldCBiYWNrZ3JvdW5kQ29sb3IoKSB7XG4gICAgcmV0dXJuIHRoaXMuI3N0eWxlcy5iYWNrZ3JvdW5kQ29sb3I7XG4gIH1cblxuICBnZXQgZm9yZWdyb3VuZENvbG9yKCkge1xuICAgIHJldHVybiB0aGlzLiNzdHlsZXMuZm9yZWdyb3VuZENvbG9yO1xuICB9XG5cbiAgZ2V0IGJhY2tncm91bmRDb2xvckhvdmVyKCkge1xuICAgIHJldHVybiB0aGlzLiNzdHlsZXMuYmFja2dyb3VuZENvbG9ySG92ZXI7XG4gIH1cblxuICBnZXQgYmFja2dyb3VuZENvbG9yRG93bigpIHtcbiAgICByZXR1cm4gdGhpcy4jc3R5bGVzLmJhY2tncm91bmRDb2xvckRvd247XG4gIH1cblxuICBnZXQgYm9yZGVyQ29sb3IoKSB7XG4gICAgcmV0dXJuIHRoaXMuI3N0eWxlcy5ib3JkZXJDb2xvcjtcbiAgfVxuXG4gIGdldCBib3JkZXJDb2xvckhvdmVyKCkge1xuICAgIHJldHVybiB0aGlzLiNzdHlsZXMuYm9yZGVyQ29sb3JIb3ZlcjtcbiAgfVxuXG4gIGdldCBib3JkZXJDb2xvckRvd24oKSB7XG4gICAgcmV0dXJuIHRoaXMuI3N0eWxlcy5ib3JkZXJDb2xvckRvd247XG4gIH1cblxuICBnZXQgYm9yZGVyQ29sb3JTZWxlY3RlZCgpIHtcbiAgICByZXR1cm4gdGhpcy4jc3R5bGVzLmJvcmRlckNvbG9yU2VsZWN0ZWQgIT0gbnVsbCA/IHRoaXMuI3N0eWxlcy5ib3JkZXJDb2xvclNlbGVjdGVkIDogQ29uc3RhbnRzLlNldHRpbmcuREVGQVVMVF9CT1JERVJfQ09MT1JfU0VMRUNURUQ7XG4gIH1cblxuICBnZXQgYm9yZGVyU2l6ZSgpIHtcbiAgICByZXR1cm4gdGhpcy4jc3R5bGVzLmJvcmRlclNpemUgIT0gbnVsbCA/IHRoaXMuI3N0eWxlcy5ib3JkZXJTaXplIDogQ29uc3RhbnRzLlNldHRpbmcuREVGQVVMVF9CT1JERVJfU0laRTtcbiAgfVxuXG4gIGdldCBzZWxlY3RDb2xvcigpIHtcbiAgICByZXR1cm4gdGhpcy4jc3R5bGVzLnNlbGVjdENvbG9yO1xuICB9XG5cbiAgZ2V0IGFsaWduZW1lbnQoKSB7XG4gICAgcmV0dXJuIHRoaXMuI3N0eWxlcy5hbGlnbmVtZW50O1xuICB9XG5cbiAgZ2V0IHZlcnRpY2FsQWxpZ25lbWVudCgpIHtcbiAgICByZXR1cm4gdGhpcy4jc3R5bGVzLnZlcnRpY2FsQWxpZ25lbWVudDtcbiAgfVxuXG4gIGdldCBkaXNhYmxlQW5pbWF0aW9uKCkge1xuICAgIHJldHVybiB0aGlzLiNzdHlsZXMuZGlzYWJsZUFuaW1hdGlvbjtcbiAgfVxuXG4gIGdldCBzY3JvbGxYRGlzYWJsZWQoKSB7XG4gICAgcmV0dXJuIHRoaXMuI3N0eWxlcy5zY3JvbGxYRGlzYWJsZWQ7XG4gIH1cblxuICBnZXQgc2Nyb2xsWURpc2FibGVkKCkge1xuICAgIHJldHVybiB0aGlzLiNzdHlsZXMuc2Nyb2xsWURpc2FibGVkO1xuICB9XG5cbiAgZ2V0IHBhZGRpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMuI3N0eWxlcy5wYWRkaW5nICE9IG51bGwgPyB0aGlzLiNzdHlsZXMucGFkZGluZyA6IENvbnN0YW50cy5TZXR0aW5nLkRFRkFVTFRfUEFERElORztcbiAgfVxuXG4gIGdldCBzcGFjZUJldHdlZW5Db21wb25lbnRzKCkge1xuICAgIHJldHVybiB0aGlzLiNzdHlsZXMuc3BhY2VCZXR3ZWVuQ29tcG9uZW50cyAhPSBudWxsID8gdGhpcy4jc3R5bGVzLnNwYWNlQmV0d2VlbkNvbXBvbmVudHMgOiBDb25zdGFudHMuU2V0dGluZy5ERUZBVUxUX1NQQUNJTkc7XG4gIH1cblxuICBnZXQgaGlkZGVuKCkge1xuICAgIHJldHVybiB0aGlzLiNzdHlsZXMuaGlkZGVuO1xuICB9XG5cbiAgZ2V0IGJsdXJCYWNrZ3JvdW5kKCkge1xuICAgIHJldHVybiB0aGlzLiNzdHlsZXMuYmx1ckJhY2tncm91bmQ7XG4gIH1cblxuICBnZXQgbGluZVdpZHRoKCkge1xuICAgIHJldHVybiB0aGlzLiNzdHlsZXMubGluZVdpZHRoO1xuICB9XG5cbiAgZ2V0IGFuaW1hdGlvbkR1cmF0aW9uKCkge1xuICAgIHJldHVybiB0aGlzLiNzdHlsZXMuYW5pbWF0aW9uRHVyYXRpb24gIT0gbnVsbCA/IHRoaXMuI3N0eWxlcy5hbmltYXRpb25EdXJhdGlvbiA6IENvbnN0YW50cy5TZXR0aW5nLkRFRkFVTFRfQU5JTUFUSU9OX0RVUkFUSU9OO1xuICB9XG5cbiAgZ2V0IGZvcmVncm91bmQoKSB7XG4gICAgcmV0dXJuIHRoaXMuI3N0eWxlcy5mb3JlZ3JvdW5kO1xuICB9XG5cbiAgZ2V0IHpJbmRleCgpIHtcbiAgICByZXR1cm4gdGhpcy4jc3R5bGVzLnpJbmRleCAhPSBudWxsID8gdGhpcy4jc3R5bGVzLnpJbmRleCA6IDA7XG4gIH1cbiAgXG4gIGdldCBsaW5lQ2FwKCkge1xuICAgIHJldHVybiB0aGlzLiNzdHlsZXMubGluZUNhcDtcbiAgfVxuICBcbiAgZ2V0IGZpbGwoKSB7XG4gICAgcmV0dXJuIHRoaXMuI3N0eWxlcy5maWxsO1xuICB9XG5cbiAgZ2V0IGZpbGxDb2xvcigpIHtcbiAgICByZXR1cm4gdGhpcy4jc3R5bGVzLmZpbGxDb2xvcjtcbiAgfVxuXG4gIGdldCBjb2xvcigpIHtcbiAgICByZXR1cm4gdGhpcy4jc3R5bGVzLmNvbG9yO1xuICB9XG5cbiAgZ2V0IG1vdmFibGUoKSB7XG4gICAgcmV0dXJuIHRoaXMuI3N0eWxlcy5tb3ZhYmxlIHx8IGZhbHNlO1xuICB9XG5cbiAgc2V0KHN0eWxlLCB2YWx1ZSkge1xuICAgIGlmKHRoaXMuI3N0eWxlc1tzdHlsZV0gIT0gdmFsdWUpIHtcbiAgICAgIHRoaXMuI3N0eWxlc1tzdHlsZV0gPSB2YWx1ZTtcbiAgICAgIGlmKHRoaXMuY29tcG9uZW50ICYmIHRoaXMuY29tcG9uZW50LnJlYWN0b3IpIHRoaXMuY29tcG9uZW50LnJlYWN0b3IuZGlzcGF0Y2hFdmVudChcIm9uQ2hhbmdlXCIsIHRoaXMpO1xuICAgIH1cbiAgfVxuXG4gIHNldEFsbChzdHlsZXMpIHtcbiAgICBpZihzdHlsZXMpIHtcbiAgICAgIGZvcihjb25zdCBzdHlsZSBpbiBzdHlsZXMpIHtcbiAgICAgICAgaWYoc3R5bGVzLmhhc093blByb3BlcnR5KHN0eWxlKSkge1xuICAgICAgICAgIHRoaXMuc2V0KHN0eWxlLCBzdHlsZXNbc3R5bGVdKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIGNvcHkoKSB7XG4gICAgcmV0dXJuIG5ldyBTdHlsZSh0aGlzLiNzdHlsZXMpO1xuICB9XG5cbiAgZ2V0U3R5bGVzKCkge1xuICAgIGNvbnN0IHN0eWxlcyA9IHt9O1xuXG4gICAgZm9yKGNvbnN0IHN0eWxlIGluIHRoaXMuI3N0eWxlcykge1xuICAgICAgaWYodGhpcy4jc3R5bGVzLmhhc093blByb3BlcnR5KHN0eWxlKSkge1xuICAgICAgICBzdHlsZXNbc3R5bGVdID0gdGhpcy4jc3R5bGVzW3N0eWxlXTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gc3R5bGVzO1xuICB9XG59IiwiLypcbiAqIENvcHlyaWdodCAoQykgMjAyMCBFbGlhc3RpayAoZWxpYXN0aWtzb2Z0cy5jb20pXG4gKlxuICogVGhpcyBmaWxlIGlzIHBhcnQgb2YgXCJKU0dhbWVUb29sc1wiLlxuICpcbiAqIFwiSlNHYW1lVG9vbHNcIiBpcyBmcmVlIHNvZnR3YXJlOiB5b3UgY2FuIHJlZGlzdHJpYnV0ZSBpdCBhbmQvb3IgbW9kaWZ5XG4gKiBpdCB1bmRlciB0aGUgdGVybXMgb2YgdGhlIEdOVSBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlIGFzIHB1Ymxpc2hlZCBieVxuICogdGhlIEZyZWUgU29mdHdhcmUgRm91bmRhdGlvbiwgZWl0aGVyIHZlcnNpb24gMyBvZiB0aGUgTGljZW5zZSwgb3JcbiAqIChhdCB5b3VyIG9wdGlvbikgYW55IGxhdGVyIHZlcnNpb24uXG4gKlxuICogXCJKU0dhbWVUb29sc1wiIGlzIGRpc3RyaWJ1dGVkIGluIHRoZSBob3BlIHRoYXQgaXQgd2lsbCBiZSB1c2VmdWwsXG4gKiBidXQgV0lUSE9VVCBBTlkgV0FSUkFOVFk7IHdpdGhvdXQgZXZlbiB0aGUgaW1wbGllZCB3YXJyYW50eSBvZlxuICogTUVSQ0hBTlRBQklMSVRZIG9yIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFLiAgU2VlIHRoZVxuICogR05VIEdlbmVyYWwgUHVibGljIExpY2Vuc2UgZm9yIG1vcmUgZGV0YWlscy5cbiAqXG4gKiBZb3Ugc2hvdWxkIGhhdmUgcmVjZWl2ZWQgYSBjb3B5IG9mIHRoZSBHTlUgR2VuZXJhbCBQdWJsaWMgTGljZW5zZVxuICogYWxvbmcgd2l0aCBcIkpTR2FtZVRvb2xzXCIuICBJZiBub3QsIHNlZSA8aHR0cDovL3d3dy5nbnUub3JnL2xpY2Vuc2VzLz4uXG4gKi9cbmltcG9ydCBDb2wgZnJvbSBcIi4vQ29sXCI7XG5pbXBvcnQgQ29uc3RhbnRzIGZyb20gXCIuL0NvbnN0YW50c1wiO1xuaW1wb3J0IFN0eWxlIGZyb20gXCIuL1N0eWxlXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFRvb2x0aXAgZXh0ZW5kcyBDb2wge1xuICBzZWxlY3RhYmxlID0gZmFsc2U7XG4gIFxuICBjb25zdHJ1Y3RvcihzdHlsZSwgLi4uY29tcG9uZW50cykge1xuICAgIHN1cGVyKG51bGwsIG51bGwsIG51bGwsIG51bGwsIHN0eWxlLCAuLi5jb21wb25lbnRzKTtcbiAgICB0aGlzLmRpc2FibGVkID0gdHJ1ZTtcbiAgfVxuXG4gIGRyYXcoY29udGV4dCkge1xuICAgIGlmKHRoaXMuaGlkZGVuKSByZXR1cm47XG4gICAgY29uc3QgY2FudmFzID0gY29udGV4dC5jYW52YXM7XG4gICAgY29uc3QgY3R4ID0gY2FudmFzLmdldENvbnRleHQoXCIyZFwiKTtcbiAgICBjdHguc2F2ZSgpO1xuXG4gICAgaWYodGhpcy54ICsgdGhpcy53aWR0aCArIHRoaXMuc3R5bGUucGFkZGluZyA+IHRoaXMucGFyZW50LndpZHRoKSB7XG4gICAgICB0aGlzLnggLT0gKHRoaXMud2lkdGggKyB0aGlzLnN0eWxlLnBhZGRpbmcpO1xuICAgIH1cblxuICAgIGlmKHRoaXMueSArIHRoaXMuaGVpZ2h0ICsgdGhpcy5zdHlsZS5wYWRkaW5nID4gdGhpcy5wYXJlbnQuaGVpZ2h0KSB7XG4gICAgICB0aGlzLnkgLT0gKHRoaXMuaGVpZ2h0ICsgdGhpcy5zdHlsZS5wYWRkaW5nKTtcbiAgICB9XG5cbiAgICBzdXBlci5kcmF3KGN0eCk7XG4gICAgXG4gICAgY3R4LnJlc3RvcmUoKTtcbiAgfVxuXG4gIGdldCB3aWR0aCgpIHtcbiAgICByZXR1cm4gc3VwZXIud2lkdGggKyB0aGlzLnN0eWxlLnBhZGRpbmc7XG4gIH1cblxuICBnZXQgaGVpZ2h0KCkge1xuICAgIHJldHVybiBzdXBlci5oZWlnaHQgKyB0aGlzLnN0eWxlLnBhZGRpbmc7XG4gIH1cblxuICBzZXQgd2lkdGgod2lkdGgpIHtcbiAgICBzdXBlci53aWR0aCA9IHdpZHRoO1xuICB9XG5cbiAgc2V0IGhlaWdodChoZWlnaHQpIHtcbiAgICBzdXBlci5oZWlnaHQgPSBoZWlnaHQ7XG4gIH1cblxuICBnZXQgZGVmYXVsdFN0eWxlKCkge1xuICAgIHJldHVybiBuZXcgU3R5bGUoe1xuICAgICAgXCJiYWNrZ3JvdW5kQ29sb3JcIjogQ29uc3RhbnRzLlNldHRpbmcuVE9PTFRJUF9ERUZBVUxUX0JBQ0tHUk9VTkRcbiAgICB9KTtcbiAgfVxuXG4gIGNvbXBhcmVUb0NvbXBvbmVudChvdGhlckNvbXBvbmVudCkge1xuICAgIHJldHVybiBvdGhlckNvbXBvbmVudC5jb21wYXJlVG9Ub29sdGlwKHRoaXMpO1xuICB9XG5cbiAgY29tcGFyZVRvTWVudShvdGhlckNvbXBvbmVudCkge1xuICAgIHJldHVybiAxO1xuICB9XG5cbiAgY29tcGFyZVRvVG9vbHRpcChvdGhlckNvbXBvbmVudCkge1xuICAgIHJldHVybiAwO1xuICB9XG5cbiAgY29tcGFyZVRvTm90aWZpY2F0aW9uKG90aGVyQ29tcG9uZW50KSB7XG4gICAgcmV0dXJuIDE7XG4gIH1cblxuICBnZXQgaGlkZGVuKCkge1xuICAgIHJldHVybiBzdXBlci5oaWRkZW4gfHwgdGhpcy5kaXNhYmxlZDtcbiAgfVxuXG4gIHNldCBoaWRkZW4oaGlkZGVuKSB7XG4gICAgc3VwZXIuaGlkZGVuID0gaGlkZGVuO1xuICAgIHRoaXMuZGlzYWJsZWQgPSBoaWRkZW47XG4gIH1cbn0iLCIvKlxuICogQ29weXJpZ2h0IChDKSAyMDIwIEVsaWFzdGlrIChlbGlhc3Rpa3NvZnRzLmNvbSlcbiAqXG4gKiBUaGlzIGZpbGUgaXMgcGFydCBvZiBcIkpTR2FtZVRvb2xzXCIuXG4gKlxuICogXCJKU0dhbWVUb29sc1wiIGlzIGZyZWUgc29mdHdhcmU6IHlvdSBjYW4gcmVkaXN0cmlidXRlIGl0IGFuZC9vciBtb2RpZnlcbiAqIGl0IHVuZGVyIHRoZSB0ZXJtcyBvZiB0aGUgR05VIEdlbmVyYWwgUHVibGljIExpY2Vuc2UgYXMgcHVibGlzaGVkIGJ5XG4gKiB0aGUgRnJlZSBTb2Z0d2FyZSBGb3VuZGF0aW9uLCBlaXRoZXIgdmVyc2lvbiAzIG9mIHRoZSBMaWNlbnNlLCBvclxuICogKGF0IHlvdXIgb3B0aW9uKSBhbnkgbGF0ZXIgdmVyc2lvbi5cbiAqXG4gKiBcIkpTR2FtZVRvb2xzXCIgaXMgZGlzdHJpYnV0ZWQgaW4gdGhlIGhvcGUgdGhhdCBpdCB3aWxsIGJlIHVzZWZ1bCxcbiAqIGJ1dCBXSVRIT1VUIEFOWSBXQVJSQU5UWTsgd2l0aG91dCBldmVuIHRoZSBpbXBsaWVkIHdhcnJhbnR5IG9mXG4gKiBNRVJDSEFOVEFCSUxJVFkgb3IgRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UuICBTZWUgdGhlXG4gKiBHTlUgR2VuZXJhbCBQdWJsaWMgTGljZW5zZSBmb3IgbW9yZSBkZXRhaWxzLlxuICpcbiAqIFlvdSBzaG91bGQgaGF2ZSByZWNlaXZlZCBhIGNvcHkgb2YgdGhlIEdOVSBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlXG4gKiBhbG9uZyB3aXRoIFwiSlNHYW1lVG9vbHNcIi4gIElmIG5vdCwgc2VlIDxodHRwOi8vd3d3LmdudS5vcmcvbGljZW5zZXMvPi5cbiAqL1xuaW1wb3J0IENvbXBvbmVudCBmcm9tIFwiLi9Db21wb25lbnRcIjtcbmltcG9ydCBDb25zdGFudHMgZnJvbSBcIi4vQ29uc3RhbnRzXCI7XG5pbXBvcnQgVXRpbHMgZnJvbSBcIi4vVXRpbHNcIjtcbmltcG9ydCBTdHlsZSBmcm9tIFwiLi9TdHlsZVwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBUcmlhbmdsZSBleHRlbmRzIENvbXBvbmVudCB7XG4gIHNlbGVjdGFibGUgPSBmYWxzZTtcblxuICBjb25zdHJ1Y3Rvcih4LCB5LCB3aWR0aCwgaGVpZ2h0LCBzdHlsZSkge1xuICAgIHN1cGVyKHgsIHksIHdpZHRoLCBoZWlnaHQsIHN0eWxlKTtcbiAgfVxuXG4gIGRyYXcoY29udGV4dCkge1xuICAgIGlmKHRoaXMuaGlkZGVuKSByZXR1cm47XG4gICAgc3VwZXIuZHJhdyhjb250ZXh0KTtcblxuICAgIGNvbnN0IGNhbnZhcyA9IGNvbnRleHQuY2FudmFzO1xuICAgIGNvbnN0IGN0eCA9IGNhbnZhcy5nZXRDb250ZXh0KFwiMmRcIik7XG4gICAgXG4gICAgVXRpbHMuZHJhd1RyaWFuZ2xlKGN0eCwgdGhpcy54LCB0aGlzLnksIHRoaXMud2lkdGgsIHRoaXMuaGVpZ2h0LCB0aGlzLnN0eWxlLmxpbmVXaWR0aCwgdGhpcy5zdHlsZS5jb2xvciwgdGhpcy5zdHlsZS5saW5lQ2FwLCB0aGlzLnN0eWxlLmZpbGwsIHRoaXMuc3R5bGUuZmlsbENvbG9yKTtcblxuICAgIHRoaXMuaW5pdCA9IHRydWU7XG4gIH1cblxuICBnZXQgd2lkdGgoKSB7XG4gICAgcmV0dXJuIHN1cGVyLndpZHRoICsgdGhpcy5zdHlsZS5saW5lV2lkdGg7XG4gIH1cblxuICBnZXQgaGVpZ2h0KCkge1xuICAgIHJldHVybiBzdXBlci5oZWlnaHQgKyB0aGlzLnN0eWxlLmxpbmVXaWR0aDtcbiAgfVxuXG4gIHNldCB3aWR0aCh3aWR0aCkge1xuICAgIHN1cGVyLndpZHRoID0gd2lkdGg7XG4gIH1cblxuICBzZXQgaGVpZ2h0KGhlaWdodCkge1xuICAgIHN1cGVyLmhlaWdodCA9IGhlaWdodDtcbiAgfVxuXG4gIGdldCBkZWZhdWx0U3R5bGUoKSB7XG4gICAgcmV0dXJuIG5ldyBTdHlsZSh7XG4gICAgICBcImxpbmVXaWR0aFwiOiBDb25zdGFudHMuU2V0dGluZy5UUklBTkdMRV9ERUZBVUxUX0xJTkVfU0laRSxcbiAgICAgIFwiY29sb3JcIjogQ29uc3RhbnRzLlNldHRpbmcuVFJJQU5HTEVfREVGQVVMVF9DT0xPUixcbiAgICAgIFwiZmlsbFwiOiBDb25zdGFudHMuU2V0dGluZy5UUklBTkdMRV9ERUZBVUxUX0ZJTEwsXG4gICAgICBcImxpbmVDYXBcIjogQ29uc3RhbnRzLlNldHRpbmcuVFJJQU5HTEVfREVGQVVMVF9MSU5FX0NBUCxcbiAgICAgIFwiZmlsbENvbG9yXCI6IENvbnN0YW50cy5TZXR0aW5nLlRSSUFOR0xFX0RFRkFVTFRfRklMTF9DT0xPUlxuICAgIH0pO1xuICB9XG59IiwiLypcbiAqIENvcHlyaWdodCAoQykgMjAyMCBFbGlhc3RpayAoZWxpYXN0aWtzb2Z0cy5jb20pXG4gKlxuICogVGhpcyBmaWxlIGlzIHBhcnQgb2YgXCJKU0dhbWVUb29sc1wiLlxuICpcbiAqIFwiSlNHYW1lVG9vbHNcIiBpcyBmcmVlIHNvZnR3YXJlOiB5b3UgY2FuIHJlZGlzdHJpYnV0ZSBpdCBhbmQvb3IgbW9kaWZ5XG4gKiBpdCB1bmRlciB0aGUgdGVybXMgb2YgdGhlIEdOVSBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlIGFzIHB1Ymxpc2hlZCBieVxuICogdGhlIEZyZWUgU29mdHdhcmUgRm91bmRhdGlvbiwgZWl0aGVyIHZlcnNpb24gMyBvZiB0aGUgTGljZW5zZSwgb3JcbiAqIChhdCB5b3VyIG9wdGlvbikgYW55IGxhdGVyIHZlcnNpb24uXG4gKlxuICogXCJKU0dhbWVUb29sc1wiIGlzIGRpc3RyaWJ1dGVkIGluIHRoZSBob3BlIHRoYXQgaXQgd2lsbCBiZSB1c2VmdWwsXG4gKiBidXQgV0lUSE9VVCBBTlkgV0FSUkFOVFk7IHdpdGhvdXQgZXZlbiB0aGUgaW1wbGllZCB3YXJyYW50eSBvZlxuICogTUVSQ0hBTlRBQklMSVRZIG9yIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFLiAgU2VlIHRoZVxuICogR05VIEdlbmVyYWwgUHVibGljIExpY2Vuc2UgZm9yIG1vcmUgZGV0YWlscy5cbiAqXG4gKiBZb3Ugc2hvdWxkIGhhdmUgcmVjZWl2ZWQgYSBjb3B5IG9mIHRoZSBHTlUgR2VuZXJhbCBQdWJsaWMgTGljZW5zZVxuICogYWxvbmcgd2l0aCBcIkpTR2FtZVRvb2xzXCIuICBJZiBub3QsIHNlZSA8aHR0cDovL3d3dy5nbnUub3JnL2xpY2Vuc2VzLz4uXG4gKi9cbmltcG9ydCBDb25zdGFudHMgZnJvbSBcIi4vQ29uc3RhbnRzXCI7XG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgcHJlUmVuZGVyZWRGb250OiB7fSxcbiAgbGFzdEtleTogLTEsXG4gIHByZVJlbmRlckZvbnQ6IGZ1bmN0aW9uKGNhcnMsIHNpemUsIGNvbG9yLCBmb250RmFtaWx5KSB7XG4gICAgY2Fycy5wdXNoKFwiP1wiKTsgY2Fycy5wdXNoKFwiIFwiKTsgY2Fycy5wdXNoKFwiQVwiKTtcbiAgICBcbiAgICBmb3IobGV0IGkgPSAwOyBpIDwgY2Fycy5sZW5ndGg7IGkrKykge1xuICAgICAgY29uc3QgY2FudmFzVG1wID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImNhbnZhc1wiKTtcbiAgICAgIGNvbnN0IGN0eFRtcCA9IGNhbnZhc1RtcC5nZXRDb250ZXh0KFwiMmRcIik7XG4gICAgICBjdHhUbXAuZm9udCA9IHNpemUgKyBcInB4IFwiICsgZm9udEZhbWlseTtcbiAgICAgIGNvbnN0IHdpZHRoID0gY3R4VG1wLm1lYXN1cmVUZXh0KGNhcnNbaV0pLndpZHRoO1xuICAgICAgXG4gICAgICBjYW52YXNUbXAud2lkdGggPSB3aWR0aDtcbiAgICAgIGNhbnZhc1RtcC5oZWlnaHQgPSBzaXplICsgKHNpemUgLyA2KTtcbiAgICAgIFxuICAgICAgY3R4VG1wLmZvbnQgPSBzaXplICsgXCJweCBcIiArIGZvbnRGYW1pbHk7XG4gICAgICBjdHhUbXAuZmlsbFN0eWxlID0gY29sb3I7XG4gICAgICBjdHhUbXAudGV4dEJhc2VsaW5lID0gXCJ0b3BcIjtcbiAgICAgIGN0eFRtcC5maWxsVGV4dChjYXJzW2ldLCAwLCAwKTtcbiAgICAgIFxuICAgICAgdGhpcy5wcmVSZW5kZXJlZEZvbnRbY2Fyc1tpXV0gPSBjYW52YXNUbXA7XG4gICAgfVxuICB9LFxuICBkcmF3SW1hZ2U6IGZ1bmN0aW9uKGN0eCwgaW1hZ2UsIHgsIHksIHdpZHRoLCBoZWlnaHQsIHN4LCBzeSwgc1dpZHRoLCBzSGVpZ2h0LCBlcmFzZUJlbG93LCBkZWdyZWVzKSB7XG4gICAgdGhpcy5kcmF3SW1hZ2VXcmFwcGVyKGN0eCwgaW1hZ2UsIHgsIHksIHdpZHRoLCBoZWlnaHQsIHN4LCBzeSwgc1dpZHRoLCBzSGVpZ2h0LCBlcmFzZUJlbG93LCBkZWdyZWVzKTtcbiAgfSxcbiAgZHJhd0ltYWdlRGF0YTogZnVuY3Rpb24oY3R4LCBpbWFnZURhdGEsIHgsIHksIHdpZHRoLCBoZWlnaHQsIHN4LCBzeSwgc1dpZHRoLCBzSGVpZ2h0LCBlcmFzZUJlbG93LCBkZWdyZWVzKSB7XG4gICAgdGhpcy5kcmF3SW1hZ2VXcmFwcGVyKGN0eCwgaW1hZ2VEYXRhLCB4LCB5LCB3aWR0aCwgaGVpZ2h0LCBzeCwgc3ksIHNXaWR0aCwgc0hlaWdodCwgZXJhc2VCZWxvdywgZGVncmVlcyk7XG4gIH0sXG4gIGRyYXdJbWFnZVdyYXBwZXI6IGZ1bmN0aW9uKGN0eCwgaW1hZ2UsIHgsIHksIHdpZHRoLCBoZWlnaHQsIHN4LCBzeSwgc1dpZHRoLCBzSGVpZ2h0LCBlcmFzZUJlbG93LCBkZWdyZWVzKSB7XG4gICAgeCA9ICh4ID09IHVuZGVmaW5lZCB8fCBpc05hTih4KSkgPyBudWxsIDogTWF0aC5yb3VuZCh4KTtcbiAgICB5ID0gKHkgPT0gdW5kZWZpbmVkIHx8IGlzTmFOKHkpKSA/IG51bGwgOiBNYXRoLnJvdW5kKHkpO1xuICAgIHdpZHRoID0gKHdpZHRoID09IHVuZGVmaW5lZCB8fCBpc05hTih3aWR0aCkpID8gbnVsbCA6IE1hdGgucm91bmQod2lkdGgpO1xuICAgIGhlaWdodCA9IChoZWlnaHQgPT0gdW5kZWZpbmVkIHx8IGlzTmFOKGhlaWdodCkpID8gbnVsbCA6IE1hdGgucm91bmQoaGVpZ2h0KTtcbiAgICBzeCA9IChzeCA9PSB1bmRlZmluZWQgfHwgaXNOYU4oc3gpKSA/IG51bGwgOiBNYXRoLnJvdW5kKHN4KTtcbiAgICBzeSA9IChzeSA9PSB1bmRlZmluZWQgfHwgaXNOYU4oc3kpKSA/IG51bGwgOiBNYXRoLnJvdW5kKHN5KTtcbiAgICBzV2lkdGggPSAoc1dpZHRoID09IHVuZGVmaW5lZCB8fCBpc05hTihzV2lkdGgpKSA/IG51bGwgOiBNYXRoLnJvdW5kKHNXaWR0aCk7XG4gICAgc0hlaWdodCA9IChzSGVpZ2h0ID09IHVuZGVmaW5lZCB8fCBpc05hTihzSGVpZ2h0KSkgPyBudWxsIDogTWF0aC5yb3VuZChzSGVpZ2h0KTtcbiAgICBlcmFzZUJlbG93ID0gZXJhc2VCZWxvdyA9PSB1bmRlZmluZWQgPyBmYWxzZSA6IGVyYXNlQmVsb3c7XG4gICAgZGVncmVlcyA9IChkZWdyZWVzID09IHVuZGVmaW5lZCB8fCBpc05hTihkZWdyZWVzKSkgPyBudWxsIDogZGVncmVlcztcbiAgXG4gICAgaWYoZGVncmVlcyAhPSB1bmRlZmluZWQpIHtcbiAgICAgIGN0eC5zYXZlKCk7XG4gICAgICBjdHgudHJhbnNsYXRlKHggKyB3aWR0aCAvIDIsIHkgKyBoZWlnaHQgLyAyKTtcbiAgICAgIGN0eC5yb3RhdGUoZGVncmVlcyAqIE1hdGguUEkgLyAxODApO1xuICAgICAgeCA9IC0od2lkdGggLyAyKTtcbiAgICAgIHkgPSAtKGhlaWdodCAvIDIpO1xuICAgIH1cbiAgXG4gICAgaWYoZXJhc2VCZWxvdykge1xuICAgICAgY3R4LmNsZWFyUmVjdCh4LCB5LCB3aWR0aCwgaGVpZ2h0KTtcbiAgICB9XG4gIFxuICAgIGlmKGN0eCAhPSB1bmRlZmluZWQgJiYgaW1hZ2UgIT0gdW5kZWZpbmVkKSB7XG4gICAgICBpZihpbWFnZS53aWR0aCA+IDAgJiYgaW1hZ2UuaGVpZ2h0ID4gMCkge1xuICAgICAgICBpZihzeCAhPSB1bmRlZmluZWQgJiYgc3kgIT0gdW5kZWZpbmVkICYmIHNXaWR0aCAhPSB1bmRlZmluZWQgJiYgc0hlaWdodCAhPSB1bmRlZmluZWQpIHtcbiAgICAgICAgICBjdHguZHJhd0ltYWdlKGltYWdlLCBzeCwgc3ksIHNXaWR0aCwgc0hlaWdodCwgeCwgeSwgd2lkdGgsIGhlaWdodCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgY3R4LmRyYXdJbWFnZShpbWFnZSwgeCwgeSwgd2lkdGgsIGhlaWdodCk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIFxuICAgIGlmKGRlZ3JlZXMgIT0gdW5kZWZpbmVkKSB7XG4gICAgICBjdHgucmVzdG9yZSgpO1xuICAgIH1cbiAgfSxcbiAgZHJhd1RleHQ6IGZ1bmN0aW9uKGN0eCwgdGV4dCwgY29sb3IsIHNpemUsIGZvbnRGYW1pbHksIGFsaWduZW1lbnQsIHZlcnRpY2FsQWxpZ25lbWVudCwgeCwgeSwgd3JhcCwgYm9sZCwgdW5kZXJsaW5lLCB0ZXh0QmFzZWxpbmUsIHBhcmVudCkge1xuICAgIGlmKGN0eCkge1xuICAgICAgY3R4LnNhdmUoKTtcblxuICAgICAgaWYoIUFycmF5LmlzQXJyYXkoY29sb3IpKSB7XG4gICAgICAgIGN0eC5maWxsU3R5bGUgPSBjb2xvcjtcbiAgICAgICAgY3R4LnN0cm9rZVN0eWxlID0gY29sb3I7XG4gICAgICB9XG4gIFxuICAgICAgY3R4LmZvbnQgPSAoYm9sZCA/IFwiYm9sZCBcIiA6IFwiXCIpICsgc2l6ZSArIFwicHggXCIgKyBmb250RmFtaWx5O1xuICAgICAgY3R4LnRleHRCYXNlbGluZSA9IHRleHRCYXNlbGluZSB8fCBcImJvdHRvbVwiO1xuICAgICAgY3R4LmZpbHRlciA9IFwibm9uZVwiO1xuICBcbiAgICAgIGlmKHdyYXApIHtcbiAgICAgICAgdGV4dCA9IHRoaXMud3JhcFRleHRMaW5lcyhjdHgsIHRleHQpW1widGV4dFwiXTtcbiAgICAgIH1cbiAgICAgIFxuICAgICAgY29uc3QgbGluZXMgPSB0ZXh0LnNwbGl0KFwiXFxuXCIpO1xuICAgICAgbGV0IG1heFdpZHRoID0gMDtcbiAgICAgIGxldCB4Q3VycmVudCA9IE1hdGgucm91bmQoeCk7XG4gICAgICBsZXQgeUN1cnJlbnQgPSBNYXRoLnJvdW5kKHkpICsgc2l6ZTtcbiAgICAgIGxldCB5Rmlyc3QgPSAwO1xuXG4gICAgICBpZigheSkge1xuICAgICAgICBpZih2ZXJ0aWNhbEFsaWduZW1lbnQgPT0gQ29uc3RhbnRzLlZlcnRpY2FsQWxpZ25lbWVudC5DRU5URVIpIHtcbiAgICAgICAgICB5Q3VycmVudCArPSBNYXRoLnJvdW5kKCgocGFyZW50ICYmIHBhcmVudC5oZWlnaHQgPyBwYXJlbnQuaGVpZ2h0IDogdGhpcy5nZXRDYW52YXNIZWlnaHQoY3R4LmNhbnZhcykpIC8gMikgLSAoc2l6ZSAqIGxpbmVzLmxlbmd0aCAvIDIpKTtcbiAgICAgICAgfSBlbHNlIGlmKHZlcnRpY2FsQWxpZ25lbWVudCA9PSBDb25zdGFudHMuVmVydGljYWxBbGlnbmVtZW50LkJPVFRPTSkge1xuICAgICAgICAgIHlDdXJyZW50ICs9IE1hdGgucm91bmQoKChwYXJlbnQgJiYgcGFyZW50LmhlaWdodCA/IHBhcmVudC5oZWlnaHQgOiB0aGlzLmdldENhbnZhc0hlaWdodChjdHguY2FudmFzKSkpIC0gKHNpemUgKiBsaW5lcy5sZW5ndGgpIC8gMiAtIHNpemUgLyA1KTtcbiAgICAgICAgfVxuICAgICAgfVxuICBcbiAgICAgIGZvcihsZXQgaSA9IDA7IGkgPCBsaW5lcy5sZW5ndGg7IGkrKykge1xuICAgICAgICBjb25zdCBjdXJyZW50VGV4dCA9IGxpbmVzW2ldO1xuICAgICAgICBjb25zdCBjdXJyZW50V2lkdGggPSBjdHgubWVhc3VyZVRleHQoY3VycmVudFRleHQpLndpZHRoO1xuICBcbiAgICAgICAgaWYoQXJyYXkuaXNBcnJheShjb2xvcikpIHtcbiAgICAgICAgICBsZXQgY29sb3JJbmRleCA9IGk7XG4gIFxuICAgICAgICAgIGlmKGNvbG9ySW5kZXggPiBjb2xvci5sZW5ndGggLSAxKSB7XG4gICAgICAgICAgICBjb2xvckluZGV4ID0gY29sb3IubGVuZ3RoIC0gMTtcbiAgICAgICAgICB9XG4gIFxuICAgICAgICAgIGN0eC5maWxsU3R5bGUgPSBjb2xvcltjb2xvckluZGV4XTtcbiAgICAgICAgICBjdHguc3Ryb2tlU3R5bGUgPSBjb2xvcltjb2xvckluZGV4XTtcbiAgICAgICAgfVxuICBcbiAgICAgICAgaWYoYWxpZ25lbWVudCA9PSBDb25zdGFudHMuQWxpZ25lbWVudC5DRU5URVIpIHtcbiAgICAgICAgICB4Q3VycmVudCA9IE1hdGgucm91bmQoKHBhcmVudCAmJiBwYXJlbnQueCA/IHBhcmVudC54IDogMCkpICsgTWF0aC5yb3VuZCgoKHBhcmVudCAmJiBwYXJlbnQud2lkdGggPyBwYXJlbnQud2lkdGggOiB0aGlzLmdldENhbnZhc1dpZHRoKGN0eC5jYW52YXMpKSAvIDIpIC0gKGN0eC5tZWFzdXJlVGV4dChjdXJyZW50VGV4dCkud2lkdGggLyAyKSk7XG4gICAgICAgIH0gZWxzZSBpZihhbGlnbmVtZW50ID09IENvbnN0YW50cy5BbGlnbmVtZW50LlJJR0hUKSB7XG4gICAgICAgICAgeEN1cnJlbnQgPSBNYXRoLnJvdW5kKChwYXJlbnQgJiYgcGFyZW50LnggPyBwYXJlbnQueCA6IDApKSArIE1hdGgucm91bmQoKHBhcmVudCAmJiBwYXJlbnQud2lkdGggPyBwYXJlbnQud2lkdGggOiB0aGlzLmdldENhbnZhc1dpZHRoKGN0eC5jYW52YXMpKSAtIChjdHgubWVhc3VyZVRleHQoY3VycmVudFRleHQpLndpZHRoKSAtIChwYXJlbnQgJiYgcGFyZW50LnNwYWNlQmV0d2VlbkNvbXBvbmVudHMgPyBwYXJlbnQuc3BhY2VCZXR3ZWVuQ29tcG9uZW50cyA6IENvbnN0YW50cy5TZXR0aW5nLkRFRkFVTFRfU1BBQ0lORykpO1xuICAgICAgICB9XG5cbiAgICAgICAgY3R4LmZpbGxUZXh0KGN1cnJlbnRUZXh0LCB4Q3VycmVudCwgeUN1cnJlbnQpO1xuICBcbiAgICAgICAgaWYodW5kZXJsaW5lKSB7XG4gICAgICAgICAgY3R4LmxpbmVXaWR0aCA9IDE7XG4gICAgICAgICAgY3R4LmJlZ2luUGF0aCgpO1xuICAgICAgICAgIGN0eC5tb3ZlVG8oeEN1cnJlbnQsIHlDdXJyZW50IC0gMik7XG4gICAgICAgICAgY3R4LmxpbmVUbyhNYXRoLnJvdW5kKHhDdXJyZW50ICsgY3VycmVudFdpZHRoKSwgeUN1cnJlbnQgLSAyKTtcbiAgICAgICAgICBjdHguc3Ryb2tlKCk7XG4gICAgICAgIH1cbiAgXG4gICAgICAgIGlmKGN1cnJlbnRXaWR0aCA+IG1heFdpZHRoKSBtYXhXaWR0aCA9IGN1cnJlbnRXaWR0aDtcbiAgICAgICAgaWYoaSA9PSAwKSB5Rmlyc3QgPSB5Q3VycmVudDtcblxuICAgICAgICB5Q3VycmVudCArPSBzaXplO1xuICAgICAgfVxuICBcbiAgICAgIGN0eC5yZXN0b3JlKCk7XG4gIFxuICAgICAgcmV0dXJuIHtcbiAgICAgICAgeDogeEN1cnJlbnQsXG4gICAgICAgIHk6IHlGaXJzdCxcbiAgICAgICAgaGVpZ2h0OiBzaXplICogbGluZXMubGVuZ3RoLFxuICAgICAgICB3aWR0aDogbWF4V2lkdGhcbiAgICAgIH07XG4gICAgfVxuICB9LFxuICB3cmFwVGV4dDogZnVuY3Rpb24odGV4dCwgbGltaXQpIHtcbiAgICBpZih0ZXh0Lmxlbmd0aCA+IGxpbWl0KSB7XG4gICAgICBsZXQgcCA9IGxpbWl0O1xuXG4gICAgICBmb3IoOyBwID4gMCAmJiB0ZXh0W3BdICE9IFwiIFwiOyBwLS0pO1xuXG4gICAgICBpZihwID4gMCkge1xuICAgICAgICBjb25zdCBsZWZ0ID0gdGV4dC5zdWJzdHJpbmcoMCwgcCk7XG4gICAgICAgIGNvbnN0IHJpZ2h0ID0gdGV4dC5zdWJzdHJpbmcocCArIDEpO1xuICAgICAgICByZXR1cm4gbGVmdCArIFwiXFxuXCIgKyB0aGlzLndyYXBUZXh0KHJpZ2h0LCBsaW1pdCk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHRleHQ7XG4gIH0sXG4gIHdyYXBUZXh0TGluZXM6IGZ1bmN0aW9uKGN0eCwgdGV4dCwgd2lkdGgsIGZvbnRTaXplLCBmb250RmFtaWx5LCBkaXNhYmxlV3JhcCkge1xuICAgIGlmKGN0eCAmJiB0ZXh0KSB7XG4gICAgICBjdHguc2F2ZSgpO1xuICAgICAgY3R4LmZvbnQgPSBNYXRoLnJvdW5kKGZvbnRTaXplKSArIFwicHggXCIgKyBmb250RmFtaWx5O1xuICAgICAgY3R4LmltYWdlU21vb3RoaW5nRW5hYmxlZCA9IGZhbHNlO1xuICBcbiAgICAgIGNvbnN0IGxpbmVzID0gdGV4dC5zcGxpdChcIlxcblwiKTtcbiAgICAgIGxldCBuZXdUZXh0ID0gXCJcIjtcbiAgICAgIGNvbnN0IHdpZHRoQ2FyID0gd2lkdGggfHwgY3R4Lm1lYXN1cmVUZXh0KFwiQVwiKS53aWR0aDtcbiAgICAgIGNvbnN0IG5iQ2FyTGluZSA9IE1hdGgucm91bmQodGhpcy5nZXRDYW52YXNXaWR0aChjdHguY2FudmFzKSAvIHdpZHRoQ2FyKTtcbiAgXG4gICAgICBsZXQgaGVpZ2h0VG90YWwgPSAwO1xuICAgICAgbGV0IG1heFdpZHRoID0gMDtcbiAgXG4gICAgICBmb3IobGV0IGkgPSAwOyBpIDwgbGluZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgY29uc3QgbGluZVdyYXAgPSBkaXNhYmxlV3JhcCA/IGxpbmVzW2ldIDogdGhpcy53cmFwVGV4dChsaW5lc1tpXSwgbmJDYXJMaW5lKTtcbiAgICAgICAgbmV3VGV4dCArPSBsaW5lV3JhcDtcbiAgXG4gICAgICAgIGlmKGkgPCBsaW5lcy5sZW5ndGggLSAxKSB7XG4gICAgICAgICAgbmV3VGV4dCArPSBcIlxcblwiO1xuICAgICAgICB9XG4gIFxuICAgICAgICBmb3IobGV0IGogPSAwOyBqIDwgbGluZVdyYXAuc3BsaXQoXCJcXG5cIikubGVuZ3RoOyBqKyspIHtcbiAgICAgICAgICBjb25zdCB3aWR0aFRleHQgPSBjdHgubWVhc3VyZVRleHQobGluZVdyYXAuc3BsaXQoXCJcXG5cIilbal0pLndpZHRoO1xuICAgICAgICAgIGhlaWdodFRvdGFsICs9IGZvbnRTaXplO1xuICAgICAgICAgIGlmKHdpZHRoVGV4dCA+IG1heFdpZHRoKSBtYXhXaWR0aCA9IHdpZHRoVGV4dDtcbiAgICAgICAgfVxuICAgICAgfVxuICBcbiAgICAgIGN0eC5yZXN0b3JlKCk7XG5cbiAgICAgIHJldHVybiB7XG4gICAgICAgIHRleHQ6IG5ld1RleHQsXG4gICAgICAgIGhlaWdodDogaGVpZ2h0VG90YWwsXG4gICAgICAgIHdpZHRoOiBtYXhXaWR0aCxcbiAgICAgICAgY2FyV2lkdGg6IHdpZHRoQ2FyXG4gICAgICB9O1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICB0ZXh0OiBcIlwiLFxuICAgICAgICBoZWlnaHQ6IDAsXG4gICAgICAgIHdpZHRoOiAwLFxuICAgICAgICBjYXJXaWR0aDogMFxuICAgICAgfTtcbiAgICB9XG4gIH0sXG4gIGRyYXdBcnJvdzogZnVuY3Rpb24oY3R4LCBmcm9teCwgZnJvbXksIHRveCwgdG95LCBsaW5lV2lkdGgsIGhlYWRTaXplLCBjb2xvciwgbGluZUNhcCkge1xuICAgIGN0eC5zYXZlKCk7XG5cbiAgICBjdHgubGluZUNhcCA9IGxpbmVDYXAgfHwgQ29uc3RhbnRzLlNldHRpbmcuQVJST1dfREVGQVVMVF9MSU5FX0NBUDtcbiAgICBjdHgubGluZVdpZHRoID0gbGluZVdpZHRoIHx8IENvbnN0YW50cy5TZXR0aW5nLkFSUk9XX0RFRkFVTFRfTElORV9TSVpFO1xuICAgIGN0eC5zdHJva2VTdHlsZSA9IGNvbG9yIHx8IENvbnN0YW50cy5TZXR0aW5nLkFSUk9XX0RFRkFVTFRfQ09MT1I7XG4gICAgY3R4LmZpbHRlciA9IFwiXCI7XG4gIFxuICAgIGN0eC5iZWdpblBhdGgoKTtcbiAgICBjb25zdCBoZWFkbGVuID0gaGVhZFNpemUgfHwgQ29uc3RhbnRzLlNldHRpbmcuQVJST1dfREVGQVVMVF9IRUFEX1NJWkU7XG4gICAgY29uc3QgZHggPSB0b3ggLSBmcm9teDtcbiAgICBjb25zdCBkeSA9IHRveSAtIGZyb215O1xuICAgIGNvbnN0IGFuZ2xlID0gTWF0aC5hdGFuMihkeSwgZHgpO1xuICAgIGN0eC5tb3ZlVG8oZnJvbXgsIGZyb215KTtcbiAgICBjdHgubGluZVRvKHRveCwgdG95KTtcbiAgICBjdHgubW92ZVRvKHRveCwgdG95KTtcbiAgICBjdHgubGluZVRvKHRveCAtIGhlYWRsZW4gKiBNYXRoLmNvcyhhbmdsZSAtIE1hdGguUEkgLyA2KSwgdG95IC0gaGVhZGxlbiAqIE1hdGguc2luKGFuZ2xlIC0gTWF0aC5QSSAvIDYpKTtcbiAgICBjdHgubW92ZVRvKHRveCwgdG95KTtcbiAgICBjdHgubGluZVRvKHRveCAtIGhlYWRsZW4gKiBNYXRoLmNvcyhhbmdsZSArIE1hdGguUEkgLyA2KSwgdG95IC0gaGVhZGxlbiAqIE1hdGguc2luKGFuZ2xlICsgTWF0aC5QSSAvIDYpKTtcbiAgICBjdHguc3Ryb2tlKCk7XG4gICAgXG4gICAgY3R4LnJlc3RvcmUoKTtcbiAgfSxcbiAgZHJhd0Nyb3NzOiBmdW5jdGlvbihjdHgsIHgsIHksIHdpZHRoLCBoZWlnaHQsIGxpbmVXaWR0aCwgY29sb3IsIGxpbmVDYXApIHtcbiAgICBjdHguc2F2ZSgpO1xuXG4gICAgY3R4LmxpbmVDYXAgPSBsaW5lQ2FwIHx8IENvbnN0YW50cy5TZXR0aW5nLkNST1NTX0RFRkFVTFRfTElORV9DQVA7XG4gICAgY3R4LmxpbmVXaWR0aCA9IGxpbmVXaWR0aCB8fCBDb25zdGFudHMuU2V0dGluZy5DUk9TU19ERUZBVUxUX0xJTkVfU0laRTtcbiAgICBjdHguc3Ryb2tlU3R5bGUgPSBjb2xvciB8fCBDb25zdGFudHMuU2V0dGluZy5DUk9TU19ERUZBVUxUX0NPTE9SO1xuICAgIGN0eC5maWx0ZXIgPSBcIlwiO1xuICBcbiAgICBjdHguYmVnaW5QYXRoKCk7XG4gICAgY3R4Lm1vdmVUbyh4LCB5KTtcbiAgICBjdHgubGluZVRvKHggKyB3aWR0aCwgeSArIGhlaWdodCk7XG4gICAgY3R4Lm1vdmVUbyh4ICsgd2lkdGgsIHkpO1xuICAgIGN0eC5saW5lVG8oeCwgeSArIGhlaWdodCk7XG4gICAgY3R4LnN0cm9rZSgpO1xuICAgIFxuICAgIGN0eC5yZXN0b3JlKCk7XG4gIH0sXG4gIGRyYXdUcmlhbmdsZTogZnVuY3Rpb24oY3R4LCB4LCB5LCB3aWR0aCwgaGVpZ2h0LCBsaW5lV2lkdGgsIGNvbG9yLCBsaW5lQ2FwLCBmaWxsID0gQ29uc3RhbnRzLlNldHRpbmcuVFJJQU5HTEVfREVGQVVMVF9GSUxMLCBmaWxsQ29sb3IpIHtcbiAgICBjdHguc2F2ZSgpO1xuXG4gICAgY3R4LmxpbmVDYXAgPSBsaW5lQ2FwIHx8IENvbnN0YW50cy5TZXR0aW5nLlRSSUFOR0xFX0RFRkFVTFRfTElORV9DQVA7XG4gICAgY3R4LmxpbmVXaWR0aCA9IGxpbmVXaWR0aCB8fCBDb25zdGFudHMuU2V0dGluZy5UUklBTkdMRV9ERUZBVUxUX0xJTkVfU0laRTtcbiAgICBjdHguZmlsdGVyID0gXCJcIjtcblxuICAgIGlmKGZpbGwpIHtcbiAgICAgIGN0eC5maWxsU3R5bGUgPSBmaWxsQ29sb3IgfHwgQ29uc3RhbnRzLlNldHRpbmcuVFJJQU5HTEVfREVGQVVMVF9GSUxMX0NPTE9SO1xuICAgICAgY3R4LnN0cm9rZVN0eWxlID0gY29sb3IgfHwgQ29uc3RhbnRzLlNldHRpbmcuVFJJQU5HTEVfREVGQVVMVF9DT0xPUjtcbiAgICB9IGVsc2Uge1xuICAgICAgY3R4LnN0cm9rZVN0eWxlID0gY29sb3IgfHwgQ29uc3RhbnRzLlNldHRpbmcuVFJJQU5HTEVfREVGQVVMVF9DT0xPUjtcbiAgICB9XG4gIFxuICAgIGN0eC5iZWdpblBhdGgoKTtcbiAgICBjdHgubW92ZVRvKHgsIHkpO1xuICAgIGN0eC5saW5lVG8oeCArIHdpZHRoLCB5KTtcbiAgICBjdHgubGluZVRvKHggKyB3aWR0aCAvIDIsIHkgKyBoZWlnaHQpO1xuICAgIGN0eC5saW5lVG8oeCwgeSk7XG5cbiAgICBpZihmaWxsKSB7XG4gICAgICBjdHguZmlsbCgpO1xuICAgICAgY3R4LnN0cm9rZSgpO1xuICAgIH0gZWxzZSB7XG4gICAgICBjdHguc3Ryb2tlKCk7XG4gICAgfVxuICAgIFxuICAgIGN0eC5yZXN0b3JlKCk7XG4gIH0sXG4gIGRyYXdDaXJjbGU6IGZ1bmN0aW9uKGN0eCwgeCwgeSwgcmFkaXVzLCBsaW5lV2lkdGgsIGNvbG9yLCBsaW5lQ2FwLCBmaWxsID0gQ29uc3RhbnRzLlNldHRpbmcuQ0lSQ0xFX0RFRkFVTFRfRklMTCwgZmlsbENvbG9yKSB7XG4gICAgY3R4LnNhdmUoKTtcblxuICAgIGN0eC5saW5lQ2FwID0gbGluZUNhcCB8fCBDb25zdGFudHMuU2V0dGluZy5DSVJDTEVfREVGQVVMVF9MSU5FX0NBUDtcbiAgICBjdHgubGluZVdpZHRoID0gbGluZVdpZHRoIHx8IENvbnN0YW50cy5TZXR0aW5nLkNJUkNMRV9ERUZBVUxUX0xJTkVfU0laRTtcbiAgICBjdHguZmlsdGVyID0gXCJcIjtcblxuICAgIGlmKGZpbGwpIHtcbiAgICAgIGN0eC5maWxsU3R5bGUgPSBmaWxsQ29sb3IgfHwgQ29uc3RhbnRzLlNldHRpbmcuQ0lSQ0xFX0RFRkFVTFRfRklMTF9DT0xPUjtcbiAgICAgIGN0eC5zdHJva2VTdHlsZSA9IGNvbG9yIHx8IENvbnN0YW50cy5TZXR0aW5nLkNJUkNMRV9ERUZBVUxUX0NPTE9SO1xuICAgIH0gZWxzZSB7XG4gICAgICBjdHguc3Ryb2tlU3R5bGUgPSBjb2xvciB8fCBDb25zdGFudHMuU2V0dGluZy5DSVJDTEVfREVGQVVMVF9DT0xPUjtcbiAgICB9XG4gICAgXG4gICAgY3R4LmJlZ2luUGF0aCgpO1xuICAgIGN0eC5hcmMoeCArIHJhZGl1cyAvIDIsIHkgKyByYWRpdXMgLyAyLCByYWRpdXMgLyAyLCAwLCAyICogTWF0aC5QSSwgZmFsc2UpO1xuXG4gICAgaWYoZmlsbCkge1xuICAgICAgY3R4LmZpbGwoKTtcbiAgICAgIGN0eC5zdHJva2UoKTtcbiAgICB9IGVsc2Uge1xuICAgICAgY3R4LnN0cm9rZSgpO1xuICAgIH1cbiAgICBcbiAgICBjdHgucmVzdG9yZSgpO1xuICB9LFxuICBjbGVhcjogZnVuY3Rpb24oY3R4KSB7XG4gICAgY3R4LmNsZWFyUmVjdCgwLCAwLCB0aGlzLmdldENhbnZhc1dpZHRoKGN0eC5jYW52YXMpLCB0aGlzLmdldENhbnZhc0hlaWdodChjdHguY2FudmFzKSk7XG4gIH0sXG4gIGlzRmlsdGVySHVlQXZhaWxhYmxlOiBmdW5jdGlvbigpIHtcbiAgICBjb25zdCBjYW52YXMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiY2FudmFzXCIpO1xuICAgIGNhbnZhcy53aWR0aCA9IDU7XG4gICAgY2FudmFzLmhlaWdodCA9IDU7XG4gICAgY29uc3QgY3R4ID0gY2FudmFzLmdldENvbnRleHQoXCIyZFwiKTtcbiAgICBjdHguc2F2ZSgpO1xuICBcbiAgICBjdHguZmlsbFN0eWxlID0gXCIjRkYwMDAwXCI7XG4gICAgY3R4LmZpbHRlciA9IFwiaHVlLXJvdGF0ZSg5MGRlZylcIjtcbiAgICBjdHguZmlsbFJlY3QoMCwgMCwgNSwgNSk7XG4gICAgY29uc3QgY29sb3IgPSBjdHguZ2V0SW1hZ2VEYXRhKDAsIDAsIDEsIDEpLmRhdGE7XG4gICAgY3R4LnJlc3RvcmUoKTtcbiAgXG4gICAgaWYoY29sb3JbMF0gPT0gMjU1ICYmIGNvbG9yWzFdID09IDAgJiYgY29sb3JbMl0gPT0gMCkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgXG4gICAgcmV0dXJuIHRydWU7XG4gIH0sXG4gIGJsdXJDYW52YXM6IGZ1bmN0aW9uKGN0eCwgbGVuZ3RoKSB7XG4gICAgY3R4LnNhdmUoKTtcbiAgICBjdHguZmlsdGVyID0gXCJibHVyKFwiICsgbGVuZ3RoICArIFwicHgpXCI7XG4gICAgdGhpcy5kcmF3SW1hZ2VEYXRhKGN0eCwgY3R4LmNhbnZhcywgMCwgMCwgdGhpcy5nZXRDYW52YXNXaWR0aChjdHguY2FudmFzKSwgdGhpcy5nZXRDYW52YXNIZWlnaHQoY3R4LmNhbnZhcykpO1xuICAgIGN0eC5yZXN0b3JlKCk7XG4gIH0sXG4gIHBhcnNlTnVtYmVyOiBmdW5jdGlvbihzdHIpIHtcbiAgICByZXR1cm4gc3RyID8gcGFyc2VJbnQoc3RyLm1hdGNoKC9cXGQrLyksIDEwKSA6IDA7XG4gIH0sXG4gIGdldEZvbnRTaXplOiBmdW5jdGlvbihjdHgpIHtcbiAgICByZXR1cm4gTWF0aC5mbG9vcihwYXJzZU51bWJlcihjdHguZm9udCkgLyAxLjI1KTtcbiAgfSxcbiAgZ2V0Q2FudmFzV2lkdGgoY2FudmFzKSB7XG4gICAgcmV0dXJuIHRoaXMucGFyc2VOdW1iZXIoY2FudmFzLnN0eWxlLndpZHRoKSB8fCBjYW52YXMud2lkdGg7XG4gIH0sXG4gIGdldENhbnZhc0hlaWdodChjYW52YXMpIHtcbiAgICByZXR1cm4gdGhpcy5wYXJzZU51bWJlcihjYW52YXMuc3R5bGUuaGVpZ2h0KSB8fCBjYW52YXMuaGVpZ2h0O1xuICB9LFxuICBhdXRvRFBJKGNhbnZhcykge1xuICAgIGNvbnN0IHJlY3QgPSBjYW52YXMuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG5cbiAgICBjYW52YXMud2lkdGggPSByZWN0LndpZHRoICogQ29uc3RhbnRzLlNldHRpbmcuUElYRUxfUkFUSU87XG4gICAgY2FudmFzLmhlaWdodCA9IHJlY3QuaGVpZ2h0ICogQ29uc3RhbnRzLlNldHRpbmcuUElYRUxfUkFUSU87XG4gICAgXG4gICAgY2FudmFzLnN0eWxlLndpZHRoID0gcmVjdC53aWR0aCArIFwicHhcIjtcbiAgICBjYW52YXMuc3R5bGUuaGVpZ2h0ID0gIHJlY3QuaGVpZ2h0ICsgXCJweFwiO1xuICB9LFxuICBhdXRvUmVzaXplQ2FudmFzOiBmdW5jdGlvbihjYW52YXMsIGNvbnRhaW5lciwgaW5pdGlhbFdpZHRoLCBpbml0aWFsSGVpZ2h0KSB7XG4gICAgaWYoIWRvY3VtZW50LmZ1bGxzY3JlZW5FbGVtZW50KSB7XG4gICAgICBpZihpbml0aWFsV2lkdGggPj0gZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmNsaWVudFdpZHRoICogMC44NSkge1xuICAgICAgICB2YXIgcmF0aW8gPSBpbml0aWFsV2lkdGggLyBpbml0aWFsSGVpZ2h0O1xuICAgICAgICBjYW52YXMud2lkdGggPSBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuY2xpZW50V2lkdGggKiAwLjg1O1xuICAgICAgICBjYW52YXMuaGVpZ2h0ID0gY2FudmFzLndpZHRoIC8gcmF0aW87XG5cbiAgICAgICAgaWYoY2FudmFzLnN0eWxlKSB7XG4gICAgICAgICAgY2FudmFzLnN0eWxlLndpZHRoID0gY2FudmFzLndpZHRoICsgXCJweFwiO1xuICAgICAgICAgIGNhbnZhcy5zdHlsZS5oZWlnaHQgPSBjYW52YXMuaGVpZ2h0ICsgXCJweFwiO1xuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBjYW52YXMud2lkdGggPSBpbml0aWFsV2lkdGg7XG4gICAgICAgIGNhbnZhcy5oZWlnaHQgPSBpbml0aWFsSGVpZ2h0O1xuXG4gICAgICAgIGlmKGNhbnZhcy5zdHlsZSkge1xuICAgICAgICAgIGNhbnZhcy5zdHlsZS53aWR0aCA9IGluaXRpYWxXaWR0aCArIFwicHhcIjtcbiAgICAgICAgICBjYW52YXMuc3R5bGUuaGVpZ2h0ID0gaW5pdGlhbEhlaWdodCArIFwicHhcIjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0gZWxzZSBpZihkb2N1bWVudC5mdWxsc2NyZWVuRWxlbWVudCA9PSBjYW52YXMgfHwgZG9jdW1lbnQuZnVsbHNjcmVlbkVsZW1lbnQgPT0gY29udGFpbmVyKSB7XG4gICAgICBjYW52YXMud2lkdGggPSB3aW5kb3cuaW5uZXJXaWR0aDtcbiAgICAgIGNhbnZhcy5oZWlnaHQgPSB3aW5kb3cuaW5uZXJIZWlnaHQ7XG5cbiAgICAgIGlmKGNhbnZhcy5zdHlsZSkge1xuICAgICAgICBjYW52YXMuc3R5bGUud2lkdGggPSB3aW5kb3cuaW5uZXJXaWR0aCArIFwicHhcIjtcbiAgICAgICAgY2FudmFzLnN0eWxlLmhlaWdodCA9IHdpbmRvdy5pbm5lckhlaWdodCArIFwicHhcIjtcbiAgICAgIH1cblxuICAgICAgaWYoY29udGFpbmVyKSB7XG4gICAgICAgIGNvbnRhaW5lci53aWR0aCA9IHdpbmRvdy5pbm5lcldpZHRoO1xuICAgICAgICBjb250YWluZXIuaGVpZ2h0ID0gd2luZG93LmlubmVySGVpZ2h0O1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBjYW52YXMud2lkdGggPSBpbml0aWFsV2lkdGg7XG4gICAgICBjYW52YXMuaGVpZ2h0ID0gaW5pdGlhbEhlaWdodDtcblxuICAgICAgaWYoY2FudmFzLnN0eWxlKSB7XG4gICAgICAgIGNhbnZhcy5zdHlsZS53aWR0aCA9IGluaXRpYWxXaWR0aCArIFwicHhcIjtcbiAgICAgICAgY2FudmFzLnN0eWxlLmhlaWdodCA9IGluaXRpYWxIZWlnaHQgKyBcInB4XCI7XG4gICAgICB9XG4gICAgfVxuICB9LFxuICBlbmFibGVBdXRvUmVzaXplQ2FudmFzOiBmdW5jdGlvbihjYW52YXMsIGNvbnRhaW5lciwgaW5pdGlhbFdpZHRoLCBpbml0aWFsSGVpZ2h0KSB7XG4gICAgaWYoY2FudmFzICYmIGNhbnZhcy5nZXRBdHRyaWJ1dGUoXCJhdXRvcmVzaXplLWNhbnZhcy1ldmVudFwiKSAhPSBcInRydWVcIikge1xuICAgICAgdGhpcy5hdXRvUmVzaXplQ2FudmFzKGNhbnZhcywgY29udGFpbmVyLCBpbml0aWFsV2lkdGgsIGluaXRpYWxIZWlnaHQpO1xuICBcbiAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwicmVzaXplXCIsICgpID0+IHtcbiAgICAgICAgY2FudmFzLnNldEF0dHJpYnV0ZShcImF1dG9yZXNpemUtY2FudmFzLWV2ZW50XCIsIFwidHJ1ZVwiKTtcbiAgICAgICAgdGhpcy5hdXRvUmVzaXplQ2FudmFzKGNhbnZhcywgY29udGFpbmVyLCBpbml0aWFsV2lkdGgsIGluaXRpYWxIZWlnaHQpO1xuICAgICAgfSk7XG4gICAgfVxuICB9LFxuICBhdXRvUmVzaXplQ2FudmFzRnVsbHNjcmVlbjogZnVuY3Rpb24oY2FudmFzLCBjb250YWluZXIpIHtcbiAgICBpZihkb2N1bWVudC5mdWxsc2NyZWVuRWxlbWVudCA9PSBjYW52YXMgfHwgZG9jdW1lbnQuZnVsbHNjcmVlbkVsZW1lbnQgPT0gY29udGFpbmVyKSB7XG4gICAgICBjYW52YXMud2lkdGggPSB3aW5kb3cuaW5uZXJXaWR0aDtcbiAgICAgIGNhbnZhcy5oZWlnaHQgPSB3aW5kb3cuaW5uZXJIZWlnaHQ7XG5cbiAgICAgIGlmKGNhbnZhcy5zdHlsZSkge1xuICAgICAgICBjYW52YXMuc3R5bGUud2lkdGggPSB3aW5kb3cuaW5uZXJXaWR0aCArIFwicHhcIjtcbiAgICAgICAgY2FudmFzLnN0eWxlLmhlaWdodCA9IHdpbmRvdy5pbm5lckhlaWdodCArIFwicHhcIjtcbiAgICAgIH1cbiAgICAgIFxuICAgICAgaWYoY29udGFpbmVyKSB7XG4gICAgICAgIGNvbnRhaW5lci53aWR0aCA9IHdpbmRvdy5pbm5lcldpZHRoO1xuICAgICAgICBjb250YWluZXIuaGVpZ2h0ID0gd2luZG93LmlubmVySGVpZ2h0O1xuICAgICAgfVxuICAgIH1cbiAgfSxcbiAgZW5hYmxlQXV0b1Jlc2l6ZUNhbnZhc0Z1bGxzY3JlZW46IGZ1bmN0aW9uKGNhbnZhcywgY29udGFpbmVyKSB7XG4gICAgaWYoY2FudmFzICYmIGNhbnZhcy5nZXRBdHRyaWJ1dGUoXCJhdXRvcmVzaXplZnVsbHNjcmVlbi1jYW52YXMtZXZlbnRcIikgIT0gXCJ0cnVlXCIpIHtcbiAgICAgIHRoaXMuYXV0b1Jlc2l6ZUNhbnZhc0Z1bGxzY3JlZW4oY2FudmFzLCBjb250YWluZXIpO1xuICBcbiAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwicmVzaXplXCIsICgpID0+IHtcbiAgICAgICAgY2FudmFzLnNldEF0dHJpYnV0ZShcImF1dG9yZXNpemVmdWxsc2NyZWVuLWNhbnZhcy1ldmVudFwiLCBcInRydWVcIik7XG4gICAgICAgIHRoaXMuYXV0b1Jlc2l6ZUNhbnZhc0Z1bGxzY3JlZW4oY2FudmFzLCBjb250YWluZXIpO1xuICAgICAgfSk7XG4gICAgfVxuICB9LFxuICBhdXRvUmVzaXplQ2FudmFzRnVsbHBhZ2U6IGZ1bmN0aW9uKGNhbnZhcywgY29udGFpbmVyKSB7XG4gICAgaWYoY2FudmFzICYmIGNhbnZhcy5nZXRBdHRyaWJ1dGUoXCJmdWxscGFnZS1jYW52YXMtZW5hYmxlXCIpID09IFwidHJ1ZVwiKSB7XG4gICAgICBjYW52YXMud2lkdGggPSB3aW5kb3cuaW5uZXJXaWR0aDtcbiAgICAgIGNhbnZhcy5oZWlnaHQgPSB3aW5kb3cuaW5uZXJIZWlnaHQ7XG4gICAgICBcbiAgICAgIGlmKGNhbnZhcy5zdHlsZSkge1xuICAgICAgICBjYW52YXMuc3R5bGUud2lkdGggPSB3aW5kb3cuaW5uZXJXaWR0aCArIFwicHhcIjtcbiAgICAgICAgY2FudmFzLnN0eWxlLmhlaWdodCA9IHdpbmRvdy5pbm5lckhlaWdodCArIFwicHhcIjtcbiAgICAgIH1cbiAgICAgIFxuICAgICAgaWYoY29udGFpbmVyKSB7XG4gICAgICAgIGNvbnRhaW5lci53aWR0aCA9IHdpbmRvdy5pbm5lcldpZHRoO1xuICAgICAgICBjb250YWluZXIuaGVpZ2h0ID0gd2luZG93LmlubmVySGVpZ2h0O1xuICAgICAgICBjb250YWluZXIuc3R5bGUubWFyZ2luID0gMDtcbiAgICAgICAgY29udGFpbmVyLnN0eWxlLnBhZGRpbmcgPSAwO1xuICAgICAgfVxuXG4gICAgICBkb2N1bWVudC5ib2R5LnN0eWxlLm1hcmdpbiA9IDA7XG4gICAgICBkb2N1bWVudC5ib2R5LnN0eWxlLnBhZGRpbmcgPSAwO1xuICAgIH1cbiAgfSxcbiAgZW5hYmxlQXV0b1Jlc2l6ZUNhbnZhc0Z1bGxwYWdlOiBmdW5jdGlvbihjYW52YXMsIGNvbnRhaW5lcikge1xuICAgIGlmKGNhbnZhcyAmJiBjYW52YXMuZ2V0QXR0cmlidXRlKFwiYXV0b3Jlc2l6ZWZ1bGxwYWdlLWNhbnZhcy1ldmVudFwiKSAhPSBcInRydWVcIikge1xuICAgICAgdGhpcy5hdXRvUmVzaXplQ2FudmFzRnVsbHBhZ2UoY2FudmFzLCBjb250YWluZXIpO1xuICBcbiAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwicmVzaXplXCIsICgpID0+IHtcbiAgICAgICAgY2FudmFzLnNldEF0dHJpYnV0ZShcImF1dG9yZXNpemVmdWxscGFnZS1jYW52YXMtZXZlbnRcIiwgXCJ0cnVlXCIpO1xuICAgICAgICB0aGlzLmF1dG9SZXNpemVDYW52YXNGdWxscGFnZShjYW52YXMsIGNvbnRhaW5lcik7XG4gICAgICB9KTtcbiAgICB9XG4gIH0sXG4gIHRvZ2dsZUZ1bGxzY3JlZW46IGZ1bmN0aW9uKGNhbnZhcywgY29udGFpbmVyKSB7XG4gICAgaWYoY2FudmFzKSB7XG4gICAgICBjb25zdCBpbml0aWFsV2lkdGggPSBjYW52YXMud2lkdGg7XG4gICAgICBjb25zdCBpbml0aWFsSGVpZ2h0ID0gY2FudmFzLmhlaWdodDtcblxuICAgICAgaWYoY29udGFpbmVyKSB7XG4gICAgICAgIGNvbnRhaW5lci53aWR0aCA9IGluaXRpYWxXaWR0aDtcbiAgICAgICAgY29udGFpbmVyLmhlaWdodCA9IGluaXRpYWxIZWlnaHQ7XG4gICAgICB9XG5cbiAgICAgIGlmKCFkb2N1bWVudC5mdWxsc2NyZWVuRWxlbWVudCkge1xuICAgICAgICBpZigoY29udGFpbmVyIHx8IGNhbnZhcykucmVxdWVzdEZ1bGxzY3JlZW4pIHtcbiAgICAgICAgICAoY29udGFpbmVyIHx8IGNhbnZhcykucmVxdWVzdEZ1bGxzY3JlZW4oKTtcbiAgICAgICAgfSBlbHNlIGlmKChjb250YWluZXIgfHwgY2FudmFzKS5tb3pSZXF1ZXN0RnVsbFNjcmVlbikge1xuICAgICAgICAgIChjb250YWluZXIgfHwgY2FudmFzKS5tb3pSZXF1ZXN0RnVsbFNjcmVlbigpO1xuICAgICAgICB9IGVsc2UgaWYoKGNvbnRhaW5lciB8fCBjYW52YXMpLndlYmtpdFJlcXVlc3RGdWxsc2NyZWVuKSB7XG4gICAgICAgICAgKGNvbnRhaW5lciB8fCBjYW52YXMpLndlYmtpdFJlcXVlc3RGdWxsc2NyZWVuKCk7XG4gICAgICAgIH0gZWxzZSBpZigoY29udGFpbmVyIHx8IGNhbnZhcykubXNSZXF1ZXN0RnVsbHNjcmVlbikge1xuICAgICAgICAgIChjb250YWluZXIgfHwgY2FudmFzKS5tc1JlcXVlc3RGdWxsc2NyZWVuKCk7XG4gICAgICAgIH0gZWxzZSBpZigoY29udGFpbmVyIHx8IGNhbnZhcykub1JlcXVlc3RGdWxsc2NyZWVuKSB7XG4gICAgICAgICAgKGNvbnRhaW5lciB8fCBjYW52YXMpLm9SZXF1ZXN0RnVsbHNjcmVlbigpO1xuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBpZihkb2N1bWVudC5leGl0RnVsbHNjcmVlbikge1xuICAgICAgICAgIGRvY3VtZW50LmV4aXRGdWxsc2NyZWVuKCk7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgdGhpcy5lbmFibGVBdXRvUmVzaXplQ2FudmFzRnVsbHNjcmVlbihjYW52YXMsIGNvbnRhaW5lcik7XG5cbiAgICAgIGlmKGNhbnZhcy5nZXRBdHRyaWJ1dGUoXCJmdWxsc2NyZWVuY2hhbmdlLWNhbnZhcy1ldmVudFwiKSAhPSBcInRydWVcIikge1xuICAgICAgICBjYW52YXMuc2V0QXR0cmlidXRlKFwiZnVsbHNjcmVlbmNoYW5nZS1jYW52YXMtZXZlbnRcIiwgXCJ0cnVlXCIpO1xuXG4gICAgICAgIGNvbnN0IG9uZnVsbHNjcmVlbmNoYW5nZSA9ICgpID0+IHtcbiAgICAgICAgICBpZihkb2N1bWVudC5mdWxsc2NyZWVuRWxlbWVudCAhPSAoY29udGFpbmVyIHx8IGNhbnZhcykpIHtcbiAgICAgICAgICAgIGNhbnZhcy53aWR0aCA9IGluaXRpYWxXaWR0aDtcbiAgICAgICAgICAgIGNhbnZhcy5oZWlnaHQgPSBpbml0aWFsSGVpZ2h0O1xuICAgICAgXG4gICAgICAgICAgICBpZihjb250YWluZXIpIHtcbiAgICAgICAgICAgICAgY29udGFpbmVyLndpZHRoID0gaW5pdGlhbFdpZHRoO1xuICAgICAgICAgICAgICBjb250YWluZXIuaGVpZ2h0ID0gaW5pdGlhbEhlaWdodDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgXG4gICAgICAgIGlmKHR5cGVvZihkb2N1bWVudC5vbmZ1bGxzY3JlZW5jaGFuZ2UpICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgZG9jdW1lbnQub25mdWxsc2NyZWVuY2hhbmdlID0gb25mdWxsc2NyZWVuY2hhbmdlO1xuICAgICAgICB9IGVsc2UgaWYodHlwZW9mKGRvY3VtZW50Lm9ubXNmdWxsc2NyZWVuY2hhbmdlKSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGRvY3VtZW50Lm9ubXNmdWxsc2NyZWVuY2hhbmdlID0gb25mdWxsc2NyZWVuY2hhbmdlO1xuICAgICAgICB9IGVsc2UgaWYodHlwZW9mKGRvY3VtZW50Lm9ubW96ZnVsbHNjcmVlbmNoYW5nZSkgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBkb2N1bWVudC5vbm1vemZ1bGxzY3JlZW5jaGFuZ2UgPSBvbmZ1bGxzY3JlZW5jaGFuZ2U7XG4gICAgICAgIH0gZWxzZSBpZih0eXBlb2YoZG9jdW1lbnQub253ZWJraXRmdWxsc2NyZWVuY2hhbmdlKSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGRvY3VtZW50Lm9ud2Via2l0ZnVsbHNjcmVlbmNoYW5nZSA9IG9uZnVsbHNjcmVlbmNoYW5nZTtcbiAgICAgICAgfSBlbHNlIGlmKHR5cGVvZihkb2N1bWVudC5vbm9raXRmdWxsc2NyZWVuY2hhbmdlKSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGRvY3VtZW50Lm9ub2Z1bGxzY3JlZW5jaGFuZ2UgPSBvbmZ1bGxzY3JlZW5jaGFuZ2U7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH0sXG4gIHRvZ2dsZUZ1bGxwYWdlOiBmdW5jdGlvbihjYW52YXMsIGNvbnRhaW5lcikge1xuICAgIGlmKGNhbnZhcykge1xuICAgICAgY29uc3QgaW5pdGlhbFdpZHRoID0gY2FudmFzLndpZHRoO1xuICAgICAgY29uc3QgaW5pdGlhbEhlaWdodCA9IGNhbnZhcy5oZWlnaHQ7XG5cbiAgICAgIGlmKGNvbnRhaW5lcikge1xuICAgICAgICBjb250YWluZXIud2lkdGggPSBpbml0aWFsV2lkdGg7XG4gICAgICAgIGNvbnRhaW5lci5oZWlnaHQgPSBpbml0aWFsSGVpZ2h0O1xuICAgICAgfVxuXG4gICAgICBpZighY2FudmFzLmdldEF0dHJpYnV0ZShcImZ1bGxwYWdlLWNhbnZhcy1lbmFibGVcIikgfHwgY2FudmFzLmdldEF0dHJpYnV0ZShcImZ1bGxwYWdlLWNhbnZhcy1lbmFibGVcIikgPT0gXCJmYWxzZVwiKSB7XG4gICAgICAgIGNhbnZhcy5zZXRBdHRyaWJ1dGUoXCJmdWxscGFnZS1jYW52YXMtZW5hYmxlXCIsIFwidHJ1ZVwiKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGNhbnZhcy5zZXRBdHRyaWJ1dGUoXCJmdWxscGFnZS1jYW52YXMtZW5hYmxlXCIsIFwiZmFsc2VcIik7XG4gICAgICB9XG5cbiAgICAgIHRoaXMuZW5hYmxlQXV0b1Jlc2l6ZUNhbnZhc0Z1bGxwYWdlKGNhbnZhcywgY29udGFpbmVyKTtcbiAgICB9XG4gIH0sXG4gIGdldE1vdXNlUG9zKGNhbnZhcywgZXZlbnQpIHtcbiAgICBjb25zdCByZWN0ID0gY2FudmFzLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuICAgIFxuICAgIHJldHVybiB7XG4gICAgICB4OiBldmVudC5jbGllbnRYIC0gcmVjdC5sZWZ0LFxuICAgICAgeTogZXZlbnQuY2xpZW50WSAtIHJlY3QudG9wXG4gICAgfTtcbiAgfVxufTsiLCIvKlxuICogQ29weXJpZ2h0IChDKSAyMDIwIEVsaWFzdGlrIChlbGlhc3Rpa3NvZnRzLmNvbSlcbiAqXG4gKiBUaGlzIGZpbGUgaXMgcGFydCBvZiBcIkpTR2FtZVRvb2xzXCIuXG4gKlxuICogXCJKU0dhbWVUb29sc1wiIGlzIGZyZWUgc29mdHdhcmU6IHlvdSBjYW4gcmVkaXN0cmlidXRlIGl0IGFuZC9vciBtb2RpZnlcbiAqIGl0IHVuZGVyIHRoZSB0ZXJtcyBvZiB0aGUgR05VIEdlbmVyYWwgUHVibGljIExpY2Vuc2UgYXMgcHVibGlzaGVkIGJ5XG4gKiB0aGUgRnJlZSBTb2Z0d2FyZSBGb3VuZGF0aW9uLCBlaXRoZXIgdmVyc2lvbiAzIG9mIHRoZSBMaWNlbnNlLCBvclxuICogKGF0IHlvdXIgb3B0aW9uKSBhbnkgbGF0ZXIgdmVyc2lvbi5cbiAqXG4gKiBcIkpTR2FtZVRvb2xzXCIgaXMgZGlzdHJpYnV0ZWQgaW4gdGhlIGhvcGUgdGhhdCBpdCB3aWxsIGJlIHVzZWZ1bCxcbiAqIGJ1dCBXSVRIT1VUIEFOWSBXQVJSQU5UWTsgd2l0aG91dCBldmVuIHRoZSBpbXBsaWVkIHdhcnJhbnR5IG9mXG4gKiBNRVJDSEFOVEFCSUxJVFkgb3IgRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UuICBTZWUgdGhlXG4gKiBHTlUgR2VuZXJhbCBQdWJsaWMgTGljZW5zZSBmb3IgbW9yZSBkZXRhaWxzLlxuICpcbiAqIFlvdSBzaG91bGQgaGF2ZSByZWNlaXZlZCBhIGNvcHkgb2YgdGhlIEdOVSBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlXG4gKiBhbG9uZyB3aXRoIFwiSlNHYW1lVG9vbHNcIi4gIElmIG5vdCwgc2VlIDxodHRwOi8vd3d3LmdudS5vcmcvbGljZW5zZXMvPi5cbiAqL1xuaW1wb3J0IENvbnN0YW50cyBmcm9tIFwiLi9Db25zdGFudHNcIjtcbmltcG9ydCBCdXR0b24gZnJvbSBcIi4vQnV0dG9uXCI7XG5pbXBvcnQgQnV0dG9uSW1hZ2UgZnJvbSBcIi4vQnV0dG9uSW1hZ2VcIjtcbmltcG9ydCBJbWFnZUxvYWRlciBmcm9tIFwiLi9JbWFnZUxvYWRlclwiO1xuaW1wb3J0IE5vdGlmaWNhdGlvbk1lc3NhZ2UgZnJvbSBcIi4vTm90aWZpY2F0aW9uTWVzc2FnZVwiO1xuaW1wb3J0IFV0aWxzIGZyb20gXCIuL1V0aWxzXCI7XG5pbXBvcnQgTWVudSBmcm9tIFwiLi9NZW51XCI7XG5pbXBvcnQgSW5wdXQgZnJvbSBcIi4vSW5wdXRcIjtcbmltcG9ydCBMYWJlbCBmcm9tIFwiLi9MYWJlbFwiO1xuaW1wb3J0IExpbmsgZnJvbSBcIi4vTGlua1wiO1xuaW1wb3J0IFRvb2x0aXAgZnJvbSBcIi4vVG9vbHRpcFwiO1xuaW1wb3J0IFNjZW5lIGZyb20gXCIuL1NjZW5lXCI7XG5pbXBvcnQgRlBTTWV0ZXIgZnJvbSBcIi4vRlBTTWV0ZXJcIjtcbmltcG9ydCBQcm9ncmVzc0JhciBmcm9tIFwiLi9Qcm9ncmVzc0JhclwiO1xuaW1wb3J0IENhbnZhcyBmcm9tIFwiLi9DYW52YXNcIjtcbmltcG9ydCBDb21wb25lbnQgZnJvbSBcIi4vQ29tcG9uZW50XCI7XG5pbXBvcnQgRWFzaW5nRnVuY3Rpb25zIGZyb20gXCIuL0Vhc2luZ0Z1bmN0aW9uc1wiO1xuaW1wb3J0IENvbCBmcm9tIFwiLi9Db2xcIjtcbmltcG9ydCBDb250YWluZXIgZnJvbSBcIi4vQ29udGFpbmVyXCI7XG5pbXBvcnQgUm93IGZyb20gXCIuL1Jvd1wiO1xuaW1wb3J0IEltYWdlQ29udGFpbmVyIGZyb20gXCIuL0ltYWdlQ29udGFpbmVyXCI7XG5pbXBvcnQgQXJyb3cgZnJvbSBcIi4vQXJyb3dcIjtcbmltcG9ydCBDcm9zcyBmcm9tIFwiLi9Dcm9zc1wiO1xuaW1wb3J0IFNjcm9sbGJhciBmcm9tIFwiLi9TY3JvbGxiYXJcIjtcbmltcG9ydCBTY3JvbGxiYXJWZXJ0aWNhbCBmcm9tIFwiLi9TY3JvbGxiYXJWZXJ0aWNhbFwiO1xuaW1wb3J0IFNjcm9sbGJhckhvcml6b250YWwgZnJvbSBcIi4vU2Nyb2xsYmFySG9yaXpvbnRhbFwiO1xuaW1wb3J0IEJveCBmcm9tIFwiLi9Cb3hcIjtcbmltcG9ydCBTdHlsZSBmcm9tIFwiLi9TdHlsZVwiO1xuaW1wb3J0IFNlbGVjdCBmcm9tIFwiLi9TZWxlY3RcIjtcbmltcG9ydCBTZWxlY3RPcHRpb24gZnJvbSBcIi4vU2VsZWN0T3B0aW9uXCI7XG5pbXBvcnQgU2VsZWN0T3B0aW9uc0NvbnRhaW5lciBmcm9tIFwiLi9TZWxlY3RPcHRpb25zQ29udGFpbmVyXCI7XG5pbXBvcnQgVHJpYW5nbGUgZnJvbSBcIi4vVHJpYW5nbGVcIjtcbmltcG9ydCBDaXJjbGUgZnJvbSBcIi4vQ2lyY2xlXCI7XG5pbXBvcnQgUmVhY3RvciBmcm9tIFwiLi9SZWFjdG9yXCI7XG5pbXBvcnQgRXZlbnQgZnJvbSBcIi4vRXZlbnRcIjtcbmltcG9ydCBSZWFjdG9yQ2FudmFzIGZyb20gXCIuL1JlYWN0b3JDYW52YXNcIjtcblxuZXhwb3J0IHsgQ29uc3RhbnRzLCBCdXR0b24sIEJ1dHRvbkltYWdlLCBJbWFnZUxvYWRlciwgTm90aWZpY2F0aW9uTWVzc2FnZSwgVXRpbHMsIE1lbnUsIElucHV0LCBMYWJlbCwgTGluaywgVG9vbHRpcCwgU2NlbmUsIEZQU01ldGVyLCBQcm9ncmVzc0JhciwgQ2FudmFzLCBDb21wb25lbnQsIEVhc2luZ0Z1bmN0aW9ucywgQ29sLCBDb250YWluZXIsIFJvdywgSW1hZ2VDb250YWluZXIsIEFycm93LCBDcm9zcywgU2Nyb2xsYmFyLCBTY3JvbGxiYXJWZXJ0aWNhbCwgU2Nyb2xsYmFySG9yaXpvbnRhbCwgQm94LCBTdHlsZSwgU2VsZWN0LCBTZWxlY3RPcHRpb24sIFNlbGVjdE9wdGlvbnNDb250YWluZXIsIFRyaWFuZ2xlLCBDaXJjbGUsIFJlYWN0b3IsIEV2ZW50LCBSZWFjdG9yQ2FudmFzIH07Il0sInNvdXJjZVJvb3QiOiIifQ==