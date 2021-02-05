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
/* harmony import */ var _ErrorScreen__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./ErrorScreen */ "./src/ErrorScreen.js");






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

    this.sceneError = new _ErrorScreen__WEBPACK_IMPORTED_MODULE_9__["default"](this);
    this.scenePrevious = this.scene; // Reactors/events

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
          this.sceneError.errorText = "" + e.stack;
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
      var _this = this;

      this.started = true;
      requestAnimationFrame(function (time) {
        if (_this.started) {
          var offsetFrame = time - _babel_runtime_helpers_classPrivateFieldGet__WEBPACK_IMPORTED_MODULE_3___default()(_this, _lastFrameTime);

          _this.fullscreen = document.fullscreenElement == _this.canvas || document.fullscreenElement == _this.container;

          if (_Constants__WEBPACK_IMPORTED_MODULE_5__["default"].Setting.ENABLE_PIXEL_RATIO_RESIZING) {
            _Constants__WEBPACK_IMPORTED_MODULE_5__["default"].Setting.PIXEL_RATIO = window.devicePixelRatio * _Constants__WEBPACK_IMPORTED_MODULE_5__["default"].Setting.RESOLUTION_SCALE; // Update the device pixel ratio, only in fullscreen mode/fullpage mode
          } else {
            _Constants__WEBPACK_IMPORTED_MODULE_5__["default"].Setting.PIXEL_RATIO = 1 * _Constants__WEBPACK_IMPORTED_MODULE_5__["default"].Setting.RESOLUTION_SCALE;
          }

          _Utils__WEBPACK_IMPORTED_MODULE_6__["default"].autoDPI(_this.canvas);

          if (_this.maxFPS < 1 || offsetFrame > 1000 / _this.maxFPS) {
            _babel_runtime_helpers_classPrivateFieldSet__WEBPACK_IMPORTED_MODULE_4___default()(_this, _lastFrameTime, time);

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

      _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0___default()(components).reverse().forEach(function (component) {
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
      var _this4 = this;

      var start = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this.scene;
      var allComponents = this.scene.getComponentsTree(start);
      var result = [start];

      if (allComponents.childs) {
        allComponents.childs.sort(_Scene__WEBPACK_IMPORTED_MODULE_7__["default"].sortComponentsTree).reverse().some(function (child) {
          if (child.component.isInside(mousePosition) && !child.component.hidden && !child.component.disabled) {
            result.push.apply(result, _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0___default()(_this4.getComponentsAtPosition(mousePosition, child.component)));
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
    var _this = this;

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

    this.deltaX = 0;
    this.deltaY = 0;

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

    _babel_runtime_helpers_classPrivateFieldSet__WEBPACK_IMPORTED_MODULE_4___default()(this, _disabled, false);

    this.movable = false; // Scroll state

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
    this.addMoveAction(function (deltaX, deltaY) {
      if (_this.movable && !_this.disabled && _this.clicked) {
        _this.deltaX -= deltaX;
        _this.deltaY -= deltaY;
      }
    });
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(Component, [{
    key: "initEvents",
    value: function initEvents() {
      var _this2 = this;

      if (!this.hasInitEvents && this.canvas != null) {
        this.canvas.addEventListener("mousemove", this, function (event, result) {
          if (!_this2.disabled) {
            var mousePosition = _this2.getMousePos(event);

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
              if (_this2.reactor) {
                _this2.reactor.dispatchEvent("onClick", mousePosition);
              }

              _this2.selected = true;
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

            if (result) {
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
          return parent.x + parentWidth / 2 - this.width / 2 + this.deltaX;
        } else if (this.style.alignement == _Constants__WEBPACK_IMPORTED_MODULE_5__["default"].Alignement.RIGHT) {
          return parent.x + parentWidth - this.width - parentPadding + this.deltaX;
        } else if (this.style.alignement == _Constants__WEBPACK_IMPORTED_MODULE_5__["default"].Alignement.LEFT) {
          return parent.x + parentPadding + this.deltaX;
        }
      } else if (parent) {
        return parent.x + _babel_runtime_helpers_classPrivateFieldGet__WEBPACK_IMPORTED_MODULE_3___default()(this, _x) + this.deltaX;
      }

      return _babel_runtime_helpers_classPrivateFieldGet__WEBPACK_IMPORTED_MODULE_3___default()(this, _x) + this.deltaX;
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
          return parent.y + parentHeight - this.height - parentPadding + this.deltaY;
        } else if (this.style.verticalAlignement == _Constants__WEBPACK_IMPORTED_MODULE_5__["default"].VerticalAlignement.CENTER) {
          return parent.y + parentHeight / 2 - this.height / 2 + this.deltaY;
        } else if (this.style.verticalAlignement == _Constants__WEBPACK_IMPORTED_MODULE_5__["default"].VerticalAlignement.TOP) {
          return parent.y + parentPadding + this.deltaY;
        }
      } else if (parent) {
        return parent.y + _babel_runtime_helpers_classPrivateFieldGet__WEBPACK_IMPORTED_MODULE_3___default()(this, _y) + this.deltaY;
      }

      return _babel_runtime_helpers_classPrivateFieldGet__WEBPACK_IMPORTED_MODULE_3___default()(this, _y) + this.deltaY;
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
      _babel_runtime_helpers_classPrivateFieldGet__WEBPACK_IMPORTED_MODULE_9___default()(this, _components).push(component);

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
      var _this6 = this;

      _babel_runtime_helpers_classPrivateFieldGet__WEBPACK_IMPORTED_MODULE_9___default()(this, _components).forEach(function (component) {
        return _this6.remove(component);
      });

      this.reactor.dispatchEvent("onChange", this);
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
      var _this8 = this;

      if (canvas != this.canvas) {
        _babel_runtime_helpers_set__WEBPACK_IMPORTED_MODULE_3___default()(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_7___default()(Container.prototype), "canvas", canvas, this, true);

        _babel_runtime_helpers_classPrivateFieldGet__WEBPACK_IMPORTED_MODULE_9___default()(this, _components).forEach(function (component) {
          component.canvas = canvas;
          if (component.reactor) component.reactor.dispatchEvent("onChange", _this8);
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

/***/ "./src/ErrorScreen.js":
/*!****************************!*\
  !*** ./src/ErrorScreen.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ErrorScreen; });
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
/* harmony import */ var _Scene__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Scene */ "./src/Scene.js");
/* harmony import */ var _Constants__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Constants */ "./src/Constants.js");
/* harmony import */ var _Style__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./Style */ "./src/Style.js");
/* harmony import */ var _Menu__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./Menu */ "./src/Menu.js");
/* harmony import */ var _Label__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./Label */ "./src/Label.js");
/* harmony import */ var _Button__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./Button */ "./src/Button.js");
/* harmony import */ var _Row__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./Row */ "./src/Row.js");






function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4___default()(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4___default()(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3___default()(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

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
  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_2___default()(ErrorScreen, _Scene);

  var _super = _createSuper(ErrorScreen);

  function ErrorScreen(canvas) {
    var _this;

    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, ErrorScreen);

    _this = _super.call(this);
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

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(ErrorScreen, [{
    key: "errorText",
    set: function set(text) {
      this.labelDetailsSceneError.text = text;
    },
    get: function get() {
      return this.labelDetailsSceneError.text;
    }
  }]);

  return ErrorScreen;
}(_Scene__WEBPACK_IMPORTED_MODULE_5__["default"]);



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
          parent.reactor.dispatchEvent("onChange", this);
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
/*! exports provided: Constants, Button, ButtonImage, ImageLoader, NotificationMessage, Utils, Menu, Input, Label, Link, Tooltip, Scene, FPSMeter, ProgressBar, Canvas, Component, EasingFunctions, Col, Container, Row, ImageContainer, Arrow, Cross, Scrollbar, ScrollbarVertical, ScrollbarHorizontal, Box, Style, Select, SelectOption, SelectOptionsContainer, Triangle, Circle, Reactor, Event, ReactorCanvas, ErrorScreen */
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

/* harmony import */ var _ErrorScreen__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! ./ErrorScreen */ "./src/ErrorScreen.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ErrorScreen", function() { return _ErrorScreen__WEBPACK_IMPORTED_MODULE_36__["default"]; });

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9KU0dhbWVUb29scy93ZWJwYWNrL3VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24iLCJ3ZWJwYWNrOi8vSlNHYW1lVG9vbHMvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vSlNHYW1lVG9vbHMvLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9hcnJheUxpa2VUb0FycmF5LmpzIiwid2VicGFjazovL0pTR2FtZVRvb2xzLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvYXJyYXlXaXRob3V0SG9sZXMuanMiLCJ3ZWJwYWNrOi8vSlNHYW1lVG9vbHMvLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQuanMiLCJ3ZWJwYWNrOi8vSlNHYW1lVG9vbHMvLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9jbGFzc0NhbGxDaGVjay5qcyIsIndlYnBhY2s6Ly9KU0dhbWVUb29scy8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2NsYXNzUHJpdmF0ZUZpZWxkR2V0LmpzIiwid2VicGFjazovL0pTR2FtZVRvb2xzLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvY2xhc3NQcml2YXRlRmllbGRTZXQuanMiLCJ3ZWJwYWNrOi8vSlNHYW1lVG9vbHMvLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9jb25zdHJ1Y3QuanMiLCJ3ZWJwYWNrOi8vSlNHYW1lVG9vbHMvLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9jcmVhdGVDbGFzcy5qcyIsIndlYnBhY2s6Ly9KU0dhbWVUb29scy8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2RlZmluZVByb3BlcnR5LmpzIiwid2VicGFjazovL0pTR2FtZVRvb2xzLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZ2V0LmpzIiwid2VicGFjazovL0pTR2FtZVRvb2xzLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZ2V0UHJvdG90eXBlT2YuanMiLCJ3ZWJwYWNrOi8vSlNHYW1lVG9vbHMvLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9pbmhlcml0cy5qcyIsIndlYnBhY2s6Ly9KU0dhbWVUb29scy8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2lzTmF0aXZlUmVmbGVjdENvbnN0cnVjdC5qcyIsIndlYnBhY2s6Ly9KU0dhbWVUb29scy8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2l0ZXJhYmxlVG9BcnJheS5qcyIsIndlYnBhY2s6Ly9KU0dhbWVUb29scy8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL25vbkl0ZXJhYmxlU3ByZWFkLmpzIiwid2VicGFjazovL0pTR2FtZVRvb2xzLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvcG9zc2libGVDb25zdHJ1Y3RvclJldHVybi5qcyIsIndlYnBhY2s6Ly9KU0dhbWVUb29scy8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL3NldC5qcyIsIndlYnBhY2s6Ly9KU0dhbWVUb29scy8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL3NldFByb3RvdHlwZU9mLmpzIiwid2VicGFjazovL0pTR2FtZVRvb2xzLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvc3VwZXJQcm9wQmFzZS5qcyIsIndlYnBhY2s6Ly9KU0dhbWVUb29scy8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL3RvQ29uc3VtYWJsZUFycmF5LmpzIiwid2VicGFjazovL0pTR2FtZVRvb2xzLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvdHlwZW9mLmpzIiwid2VicGFjazovL0pTR2FtZVRvb2xzLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvdW5zdXBwb3J0ZWRJdGVyYWJsZVRvQXJyYXkuanMiLCJ3ZWJwYWNrOi8vSlNHYW1lVG9vbHMvLi9zcmMvQXJyb3cuanMiLCJ3ZWJwYWNrOi8vSlNHYW1lVG9vbHMvLi9zcmMvQm94LmpzIiwid2VicGFjazovL0pTR2FtZVRvb2xzLy4vc3JjL0J1dHRvbi5qcyIsIndlYnBhY2s6Ly9KU0dhbWVUb29scy8uL3NyYy9CdXR0b25JbWFnZS5qcyIsIndlYnBhY2s6Ly9KU0dhbWVUb29scy8uL3NyYy9DYW52YXMuanMiLCJ3ZWJwYWNrOi8vSlNHYW1lVG9vbHMvLi9zcmMvQ2lyY2xlLmpzIiwid2VicGFjazovL0pTR2FtZVRvb2xzLy4vc3JjL0NvbC5qcyIsIndlYnBhY2s6Ly9KU0dhbWVUb29scy8uL3NyYy9Db21wb25lbnQuanMiLCJ3ZWJwYWNrOi8vSlNHYW1lVG9vbHMvLi9zcmMvQ29uc3RhbnRzLmpzIiwid2VicGFjazovL0pTR2FtZVRvb2xzLy4vc3JjL0NvbnRhaW5lci5qcyIsIndlYnBhY2s6Ly9KU0dhbWVUb29scy8uL3NyYy9Dcm9zcy5qcyIsIndlYnBhY2s6Ly9KU0dhbWVUb29scy8uL3NyYy9FYXNpbmdGdW5jdGlvbnMuanMiLCJ3ZWJwYWNrOi8vSlNHYW1lVG9vbHMvLi9zcmMvRXJyb3JTY3JlZW4uanMiLCJ3ZWJwYWNrOi8vSlNHYW1lVG9vbHMvLi9zcmMvRXZlbnQuanMiLCJ3ZWJwYWNrOi8vSlNHYW1lVG9vbHMvLi9zcmMvRlBTTWV0ZXIuanMiLCJ3ZWJwYWNrOi8vSlNHYW1lVG9vbHMvLi9zcmMvSW1hZ2VDb250YWluZXIuanMiLCJ3ZWJwYWNrOi8vSlNHYW1lVG9vbHMvLi9zcmMvSW1hZ2VMb2FkZXIuanMiLCJ3ZWJwYWNrOi8vSlNHYW1lVG9vbHMvLi9zcmMvSW5wdXQuanMiLCJ3ZWJwYWNrOi8vSlNHYW1lVG9vbHMvLi9zcmMvTGFiZWwuanMiLCJ3ZWJwYWNrOi8vSlNHYW1lVG9vbHMvLi9zcmMvTGluay5qcyIsIndlYnBhY2s6Ly9KU0dhbWVUb29scy8uL3NyYy9NZW51LmpzIiwid2VicGFjazovL0pTR2FtZVRvb2xzLy4vc3JjL05vdGlmaWNhdGlvbk1lc3NhZ2UuanMiLCJ3ZWJwYWNrOi8vSlNHYW1lVG9vbHMvLi9zcmMvUHJvZ3Jlc3NCYXIuanMiLCJ3ZWJwYWNrOi8vSlNHYW1lVG9vbHMvLi9zcmMvUmVhY3Rvci5qcyIsIndlYnBhY2s6Ly9KU0dhbWVUb29scy8uL3NyYy9SZWFjdG9yQ2FudmFzLmpzIiwid2VicGFjazovL0pTR2FtZVRvb2xzLy4vc3JjL1Jvdy5qcyIsIndlYnBhY2s6Ly9KU0dhbWVUb29scy8uL3NyYy9TY2VuZS5qcyIsIndlYnBhY2s6Ly9KU0dhbWVUb29scy8uL3NyYy9TY3JvbGxiYXIuanMiLCJ3ZWJwYWNrOi8vSlNHYW1lVG9vbHMvLi9zcmMvU2Nyb2xsYmFySG9yaXpvbnRhbC5qcyIsIndlYnBhY2s6Ly9KU0dhbWVUb29scy8uL3NyYy9TY3JvbGxiYXJWZXJ0aWNhbC5qcyIsIndlYnBhY2s6Ly9KU0dhbWVUb29scy8uL3NyYy9TZWxlY3QuanMiLCJ3ZWJwYWNrOi8vSlNHYW1lVG9vbHMvLi9zcmMvU2VsZWN0T3B0aW9uLmpzIiwid2VicGFjazovL0pTR2FtZVRvb2xzLy4vc3JjL1NlbGVjdE9wdGlvbnNDb250YWluZXIuanMiLCJ3ZWJwYWNrOi8vSlNHYW1lVG9vbHMvLi9zcmMvU3R5bGUuanMiLCJ3ZWJwYWNrOi8vSlNHYW1lVG9vbHMvLi9zcmMvVG9vbHRpcC5qcyIsIndlYnBhY2s6Ly9KU0dhbWVUb29scy8uL3NyYy9UcmlhbmdsZS5qcyIsIndlYnBhY2s6Ly9KU0dhbWVUb29scy8uL3NyYy9VdGlscy5qcyIsIndlYnBhY2s6Ly9KU0dhbWVUb29scy8uL3NyYy9pbmRleC5qcyJdLCJuYW1lcyI6WyJBcnJvdyIsIngiLCJ5IiwidG9YIiwidG9ZIiwic3R5bGUiLCJjb250ZXh0IiwiaGlkZGVuIiwiY2FudmFzIiwiY3R4IiwiZ2V0Q29udGV4dCIsIlV0aWxzIiwiZHJhd0Fycm93IiwibGluZVdpZHRoIiwiaGVhZFNpemUiLCJjb2xvciIsImxpbmVDYXAiLCJpbml0IiwiTWF0aCIsImFicyIsIlN0eWxlIiwiQ29uc3RhbnRzIiwiU2V0dGluZyIsIkFSUk9XX0RFRkFVTFRfTElORV9TSVpFIiwiQVJST1dfREVGQVVMVF9IRUFEX1NJWkUiLCJBUlJPV19ERUZBVUxUX0NPTE9SIiwiQVJST1dfREVGQVVMVF9MSU5FX0NBUCIsIkNvbXBvbmVudCIsIkJveCIsIndpZHRoIiwiaGVpZ2h0Iiwic2F2ZSIsImRyYXdCYWNrZ3JvdW5kIiwiZHJhd0JvcmRlciIsInJlc3RvcmUiLCJiYWNrZ3JvdW5kQ29sb3IiLCJmaWxsU3R5bGUiLCJmaWxsUmVjdCIsInJvdW5kIiwiYm9yZGVyQ29sb3IiLCJib3JkZXJTaXplIiwic3Ryb2tlU3R5bGUiLCJzdHJva2VSZWN0IiwiaG92ZXJlZCIsImNsaWNrZWQiLCJiYWNrZ3JvdW5kQ29sb3JEb3duIiwiYmFja2dyb3VuZENvbG9ySG92ZXIiLCJib3JkZXJDb2xvckRvd24iLCJib3JkZXJDb2xvckhvdmVyIiwic2VsZWN0YWJsZSIsInNlbGVjdGVkIiwiYm9yZGVyQ29sb3JTZWxlY3RlZCIsIkJ1dHRvbiIsIm1heFdpZHRoIiwibWF4SGVpZ2h0IiwiY29tcG9uZW50cyIsImRyYXdDb21wb25lbnRzIiwicGFkZGluZyIsIkJVVFRPTl9ERUZBVUxUX0JBQ0tHUk9VTkQiLCJCVVRUT05fREVGQVVMVF9IT1ZFUl9CQUNLR1JPVU5EIiwiQlVUVE9OX0RFRkFVTFRfQ0xJQ0tfQkFDS0dST1VORCIsIlJvdyIsIkJ1dHRvbkltYWdlIiwiaW1nU3JjIiwiYWxpZ25lbWVudCIsInZlcnRpY2FsQWxpZ25lbWVudCIsImltYWdlTG9hZGVyIiwiaW1hZ2UiLCJJbWFnZUNvbnRhaW5lciIsImFkZCIsImNvbnNvbGUiLCJ3YXJuIiwiU3RyaW5nIiwiTk9USUNFX01FU1NBR0UiLCJCVVRUT05fSU1BR0VfREVQUkVDQVRFRCIsImxvYWRJbWFnZSIsIm1pbldpZHRoIiwibWluSGVpZ2h0IiwiQ2FudmFzIiwic2NlbmUiLCJhdXRvUmVzaXplIiwibWF4RlBTIiwiZG9jdW1lbnQiLCJjcmVhdGVFbGVtZW50IiwiY29udGFpbmVyIiwiQ0FOVkFTX1dJRFRIIiwiQ0FOVkFTX0hFSUdIVCIsImFwcGVuZENoaWxkIiwic3RhcnRlZCIsImhhc0Vycm9yIiwiZnVsbHNjcmVlbiIsImZ1bGxwYWdlIiwic2NlbmVFcnJvciIsIkVycm9yU2NyZWVuIiwic2NlbmVQcmV2aW91cyIsInJlYWN0b3IiLCJSZWFjdG9yQ2FudmFzIiwicmVnaXN0ZXJFdmVudCIsImNyZWF0ZUV2ZW50cyIsIkRJU0FCTEVfT1BUSU1JWkFUSU9OUyIsImluZm8iLCJPUFRJTUlaQVRJT05fRElTQUJMRUQiLCJESVNBQkxFX0NPTlRBSU5FUlNfQ1VUVElORyIsIkNPTlRBSU5FUl9DVVRUSU5HX0RJU0FCTEVEIiwiZHJhd0NsZWFyIiwiZHJhd1NjZW5lIiwicGFyZW50Iiwic2NhbGUiLCJQSVhFTF9SQVRJTyIsImRyYXciLCJlIiwiZXJyb3JUZXh0Iiwic3RhY2siLCJlcnJvciIsIkVSUk9SX01FU1NBR0UiLCJFUlJPUl9NRVNTQUdFX0NBTlZBUyIsImNsZWFyIiwiZnVuYyIsInJlcXVlc3RBbmltYXRpb25GcmFtZSIsInRpbWUiLCJvZmZzZXRGcmFtZSIsImZ1bGxzY3JlZW5FbGVtZW50IiwiRU5BQkxFX1BJWEVMX1JBVElPX1JFU0laSU5HIiwid2luZG93IiwiZGV2aWNlUGl4ZWxSYXRpbyIsIlJFU09MVVRJT05fU0NBTEUiLCJhdXRvRFBJIiwic3RhcnREcmF3IiwiZWxlbWVudCIsInJlbW92ZUNoaWxkIiwidG9nZ2xlRnVsbHNjcmVlbiIsInRvZ2dsZUZ1bGxwYWdlIiwiZW5hYmxlQXV0b1Jlc2l6ZUNhbnZhcyIsImZvckVhY2giLCJldmVudE5hbWUiLCJhZGRFdmVudExpc3RlbmVyIiwiZXZlbnQiLCJtb3VzZVBvc2l0aW9uIiwiZ2V0TW91c2VQb3MiLCJkb0V2ZW50cyIsInByZXZlbnREZWZhdWx0IiwiY2hhbmdlZFRvdWNoZXMiLCJwb3NpdGlvbiIsImdldENvbXBvbmVudHNBdFBvc2l0aW9uIiwiZGlzcGF0Y2hFdmVudCIsInJldmVyc2UiLCJjb21wb25lbnQiLCJkaXNwYXRjaEV2ZW50Q29tcG9uZW50IiwiY2FsbGJhY2siLCJzdGFydCIsImdldEFsbENvbXBvbmVudHMiLCJhbGxDb21wb25lbnRzIiwiZ2V0Q29tcG9uZW50c1RyZWUiLCJyZXN1bHQiLCJjaGlsZHMiLCJzb3J0IiwiU2NlbmUiLCJzb3J0Q29tcG9uZW50c1RyZWUiLCJzb21lIiwiY2hpbGQiLCJpc0luc2lkZSIsImRpc2FibGVkIiwicHVzaCIsImdldENhbnZhc1dpZHRoIiwiZ2V0Q2FudmFzSGVpZ2h0IiwiQ2lyY2xlIiwiZHJhd0NpcmNsZSIsImZpbGwiLCJmaWxsQ29sb3IiLCJDSVJDTEVfREVGQVVMVF9MSU5FX1NJWkUiLCJDSVJDTEVfREVGQVVMVF9DT0xPUiIsIkNJUkNMRV9ERUZBVUxUX0ZJTEwiLCJDSVJDTEVfREVGQVVMVF9MSU5FX0NBUCIsIkNJUkNMRV9ERUZBVUxUX0ZJTExfQ09MT1IiLCJDb2wiLCJESVNBQkxFX0VYUEVSSU1FTlRBTF9PUFRJTUlaQVRJT05TIiwidXBkYXRlSW5uZXJXaWR0aCIsInVwZGF0ZUlubmVySGVpZ2h0IiwiYWRkQ2hhbmdlQWN0aW9uIiwiY3R4VGVtcCIsImlzQ3V0dGluZyIsImNhbnZhc1RtcCIsImN1cnJlbnRZIiwiZHJhd0NvbXBvbmVudCIsImRyYXdJbWFnZURhdGEiLCJvZmZzZXRTY3JvbGxYIiwib2Zmc2V0U2Nyb2xsWSIsImlzQ29tcG9uZW50VmlzaWJsZSIsInNwYWNlQmV0d2VlbkNvbXBvbmVudHMiLCJ0b3RhbEhlaWdodCIsImxlbmd0aCIsImlubmVyV2lkdGgiLCJtaW4iLCJtYXgiLCJpbm5lckhlaWdodCIsIkNvbnRhaW5lciIsImRlbHRhWCIsImRlbHRhWSIsIlJlYWN0b3IiLCJoYXNJbml0RXZlbnRzIiwibW92YWJsZSIsIm9mZnNldE1vdmVYIiwib2Zmc2V0TW92ZVkiLCJtb3ZlRXZlbnRTdGFydFgiLCJtb3ZlRXZlbnRTdGFydFkiLCJ0b3VjaEV2ZW50U3RhcnRYIiwidG91Y2hFdmVudFN0YXJ0WSIsInRvdWNoRXZlbnRTdGFydFRpbWVzdGFtcCIsInRvb2x0aXAiLCJpbml0RXZlbnRzIiwiYWRkTW92ZUFjdGlvbiIsImVuYWJsZSIsImRpc2FibGUiLCJzY3JvbGxEaXNhYmxlZCIsInRvdWNoU2Nyb2xsRXZlbnQiLCJ0b3VjaFN0YXJ0RW5kRXZlbnQiLCJ0aW1lc3RhbXAiLCJwb3MiLCJ0cmlnZ2VyIiwicmVtb3ZlQWxsQ2xpY2tBY3Rpb25zIiwiYWRkQ2xpY2tBY3Rpb24iLCJyZW1vdmVFdmVudExpc3RlbmVyIiwicmVtb3ZlQWxsRXZlbnRMaXN0ZW5lciIsInJlbW92ZUFsbEhvdmVyQWN0aW9ucyIsImFkZEhvdmVyQWN0aW9uIiwicmVtb3ZlQWxsRG93bkFjdGlvbnMiLCJhZGREb3duQWN0aW9uIiwicmVtb3ZlQWxsU2Nyb2xsQWN0aW9ucyIsImFkZFNjcm9sbEFjdGlvbiIsInJlbW92ZUFsbE1vdmVBY3Rpb25zIiwicmVtb3ZlQWxsQ2hhbmdlQWN0aW9ucyIsInJlbW92ZUFsbFVwQWN0aW9ucyIsImFkZFVwQWN0aW9uIiwicmVzIiwib3RoZXJDb21wb25lbnQiLCJpc0ZvcmVncm91bmQiLCJmb3JlZ3JvdW5kIiwib3RoZXJJc0ZvcmVncm91bmQiLCJ6SW5kZXgiLCJvdGhlcnpJbmRleCIsImNvbXBhcmVUb0NvbXBvbmVudCIsInBhcmVudFdpZHRoIiwicGFyZW50UGFkZGluZyIsIkFsaWduZW1lbnQiLCJDRU5URVIiLCJSSUdIVCIsIkxFRlQiLCJwYXJlbnRIZWlnaHQiLCJWZXJ0aWNhbEFsaWduZW1lbnQiLCJCT1RUT00iLCJUT1AiLCJERUZBVUxUX1BBRERJTkciLCJERUZBVUxUX1NQQUNJTkciLCJkZWZhdWx0U3R5bGUiLCJzZXRBbGwiLCJnZXRTdHlsZXMiLCJzZXQiLCJvdGhlciIsImNvbXBhcmVUbyIsIkRJU0FCTEVfSVNfQ09NUE9ORU5UX1ZJU0lCTEVfT1BUSU1JWkFUSU9OUyIsIkZPTlRfRkFNSUxZIiwiRk9OVF9TSVpFIiwiQlVUVE9OX0RFRkFVTFRfQUxURVJOQVRJVkVfQkFDS0dST1VORCIsIklOUFVUX0RFRkFVTFRfRk9OVF9DT0xPUiIsIklOUFVUX0RFRkFVTFRfQkFDS0dST1VORF9DT0xPUiIsIklOUFVUX0RFRkFVTFRfQk9SREVSX0NPTE9SIiwiSU5QVVRfREVGQVVMVF9CT1JERVJfQ09MT1JfU0VMRUNURUQiLCJJTlBVVF9ERUZBVUxUX1NFTEVDVF9DT0xPUiIsIkxBQkVMX0RFRkFVTFRfRk9OVF9DT0xPUiIsIkxJTktfREVGQVVMVF9DT0xPUiIsIkxJTktfREVGQVVMVF9IT1ZFUl9DT0xPUiIsIkxJTktfREVGQVVMVF9DTElDS19DT0xPUiIsIk1FTlVfREVGQVVMVF9CQUNLR1JPVU5EIiwiTUVOVV9ERUZBVUxUX0JMVVJfQkFDS0dST1VORCIsIk5PVElGSUNBVElPTl9ERUZBVUxUX0JBQ0tHUk9VTkQiLCJOT1RJRklDQVRJT05fREVGQVVMVF9BTklNQVRJT05fRFVSQVRJT04iLCJQUk9HUkVTU19ERUZBVUxUX0JBQ0tHUk9VTkQiLCJQUk9HUkVTU19ERUZBVUxUX0ZPUkVHUk9VTkQiLCJQUk9HUkVTU19ERUZBVUxUX0FOSU1BVElPTl9EVVJBVElPTiIsIlRPT0xUSVBfREVGQVVMVF9CQUNLR1JPVU5EIiwiQ1JPU1NfREVGQVVMVF9MSU5FX0NBUCIsIkNST1NTX0RFRkFVTFRfQ09MT1IiLCJDUk9TU19ERUZBVUxUX0xJTkVfU0laRSIsIlNDUk9MTEJBUl9ERUZBVUxUX0JBQ0tHUk9VTkQiLCJTQ1JPTExCQVJfREVGQVVMVF9IT1ZFUl9CQUNLR1JPVU5EIiwiU0NST0xMQkFSX0RFRkFVTFRfQ0xJQ0tfQkFDS0dST1VORCIsIlNDUk9MTEJBUl9ERUZBVUxUX1NJWkUiLCJERUZBVUxUX0JPUkRFUl9TSVpFIiwiREVGQVVMVF9CT1JERVJfQ09MT1JfU0VMRUNURUQiLCJERUZBVUxUX0FOSU1BVElPTl9EVVJBVElPTiIsIlRSSUFOR0xFX0RFRkFVTFRfTElORV9DQVAiLCJUUklBTkdMRV9ERUZBVUxUX0NPTE9SIiwiVFJJQU5HTEVfREVGQVVMVF9GSUxMX0NPTE9SIiwiVFJJQU5HTEVfREVGQVVMVF9MSU5FX1NJWkUiLCJUUklBTkdMRV9ERUZBVUxUX0ZJTEwiLCJTRUxFQ1RfREVGQVVMVF9CQUNLR1JPVU5EIiwiU0VMRUNUX0RFRkFVTFRfSE9WRVJfQkFDS0dST1VORCIsIlNFTEVDVF9ERUZBVUxUX0NMSUNLX0JBQ0tHUk9VTkQiLCJFUlJPUl9NRU5VX0JBQ0tHUk9VTkRfQ09MT1IiLCJLZXkiLCJVUCIsIkVOVEVSIiwiRUNIQVAiLCJUQUIiLCJERUZBVUxUIiwiRVJST1JfTUVTU0FHRV9DQU5WQVNfTEFCRUwiLCJSRVRSWSIsIldBUk5JTkdfTUVTU0FHRSIsIklOUFVUX0ZVTExTQ1JFRU4iLCJERVRBSUxTIiwiYWRkQWxsIiwic2Nyb2xsYmFySG9yaXpvbnRhbCIsIlNjcm9sbGJhckhvcml6b250YWwiLCJzY3JvbGxiYXJWZXJ0aWNhbCIsIlNjcm9sbGJhclZlcnRpY2FsIiwiY29udHJvbFNjcm9sbGluZyIsImNvbXBvbmVudENoYW5nZWQiLCJzY3JvbGxYRGlzYWJsZWQiLCJkcmF3SG9yaXpvbnRhbFNjcm9sbEJhciIsInNjcm9sbFlEaXNhYmxlZCIsImRyYXdWZXJ0aWNhbFNjcm9sbEJhciIsImhhc0NoYW5nZWQiLCJpIiwiZXZlbnRDaGFuZ2VDYWxsYmFjayIsImluZGV4T2YiLCJyZW1vdmVDaGFuZ2VBY3Rpb24iLCJmaWx0ZXIiLCJjdXJyZW50IiwicmVtb3ZlIiwiY2hhbmdlZCIsImMiLCJzY3JvbGxBcmVhU2l6ZVkiLCJwZXJjZW50U2Nyb2xsYmFyWSIsInNjcm9sbEFyZWFTaXplWCIsInBlcmNlbnRTY3JvbGxiYXJYIiwiY29tcG9uZW50V2lkdGgiLCJjb21wb25lbnRIZWlnaHQiLCJjYW52YXNXaWR0aCIsImNhbnZhc0hlaWdodCIsIkNyb3NzIiwiZHJhd0Nyb3NzIiwiZWFzZUluQ3ViaWMiLCJlYXNlT3V0Qm91bmNlIiwibjEiLCJkMSIsImVhc2VJbk91dEN1YmljIiwicG93IiwiZWFzZUluT3V0U2luZSIsImNvcyIsIlBJIiwiZWFzZUluT3V0UXVpbnQiLCJlYXNlSW5PdXRDaXJjIiwic3FydCIsImVhc2VJbk91dFF1YWQiLCJlYXNlSW5PdXRRdWFydCIsImVhc2VJbk91dEV4cG8iLCJlYXNlSW5PdXRCYWNrIiwiYzEiLCJjMiIsImxhYmVsRGV0YWlsc1NjZW5lRXJyb3IiLCJMYWJlbCIsImJ1dHRvblNjZW5lRXJyb3IiLCJidXR0b25EZXRhaWxzU2NlbmVFcnJvciIsImNvbERldGFpbHNTY2VuZUVycm9yIiwibWVudVNjZW5lRXJyb3IiLCJNZW51IiwidGV4dCIsIkV2ZW50IiwibmFtZSIsImNhbGxiYWNrcyIsIkZQU01ldGVyIiwiZGlzcGxheUZyYW1lcyIsImZyYW1lcyIsImxhc3RGcmFtZSIsImN1cnJlbnRGUFMiLCJpbnRlcnZhbENvdW50RlBTIiwic2V0SW50ZXJ2YWwiLCJjb3VudEZQUyIsIkltYWdlIiwic3JjIiwiZHJhd0ltYWdlIiwiZ2V0IiwiaW1nV2lkdGgiLCJpbWdIZWlnaHQiLCJhc3BlY3RSYXRpbyIsImZsb29yIiwic2l6ZXMiLCJJbWFnZUxvYWRlciIsImltYWdlcyIsImltYWdlc1Jlc2l6ZWQiLCJ0cmllZExvYWRpbmciLCJuYkltYWdlc1RvTG9hZCIsImZpcnN0SW1hZ2UiLCJpbWciLCJzaGlmdCIsImxvYWQiLCJvbmxvYWQiLCJvbmVycm9yIiwic2V0VGltZW91dCIsImhhc093blByb3BlcnR5IiwidyIsImgiLCJpZCIsIklucHV0IiwiZGVmYXVsdFRleHQiLCJsYXN0SW5wdXRUZXh0Iiwib2Zmc2V0WCIsImxhc3RUaW1lIiwidG90YWxUaW1lIiwiY2xpY2tDdXJyZW50UG9zaXRpb24iLCJ0ZXh0Q2FjaGUiLCJpbnB1dCIsInNldEF0dHJpYnV0ZSIsImxlZnQiLCJ0YWJJbmRleCIsInZhbHVlIiwicG9zaXRpb25TdGFydCIsInNlbGVjdGlvblN0YXJ0IiwicG9zaXRpb25FbmQiLCJzZWxlY3Rpb25FbmQiLCJib2R5IiwiYXBwZW5kVG9DYW52YXMiLCJub3RpY2VMb2dnZWQiLCJtb3ZlQWN0aW9uQ2FsbGJhY2siLCJpQ2xpY2siLCJnZXRMZXR0ZXJDbGlja2VkIiwicG9zaXRpb25TdGFydENsaWNrIiwic2V0U2VsZWN0aW9uUmFuZ2UiLCJjbGljayIsImJsdXIiLCJwZXJmb3JtYW5jZSIsIm5vdyIsIm9mZnNldFRpbWUiLCJjdHhUZXh0IiwidXBkYXRlVGV4dENhY2hlIiwiYXV0b1Njcm9sbCIsImRyYXdUZXh0IiwiY3Vyc29yIiwiY3VycmVudFgiLCJsZXR0ZXJzIiwieERyYXciLCJ5RHJhdyIsImlzTGV0dGVyVmlzaWJsZSIsImRyYXdIaWdobGlnaHQiLCJmb250Q29sb3IiLCJmb250U2l6ZSIsImZvbnRGYW1pbHkiLCJkcmF3Q3Vyc29yIiwiYmVnaW5QYXRoIiwibW92ZVRvIiwibGluZVRvIiwic3Ryb2tlIiwic2VsZWN0Q29sb3IiLCJ3cmFwVGV4dExpbmVzIiwibGV0dGVyIiwiaXNDbGlja0N1cnJlbnRQb3NpdGlvbiIsImlzQ2xpY2tBZnRlclBvc2l0aW9uIiwibGV0dGVySWQiLCJjdXJzb3JQb3NpdGlvbiIsImN1cnJlbnRMZXR0ZXJTaXplIiwiY3VycmVudExldHRlciIsImN1cnNvclBvc2l0aW9uUG9zIiwiY3Vyc29yUG9zaXRpb25OZWciLCJvZmZzZXRYTmVnIiwiZm9jdXMiLCJlbmQiLCJkaXJlY3Rpb24iLCJzaXplc0NhY2hlIiwidXBkYXRlU2l6ZXMiLCJ3cmFwIiwiYm9sZCIsInVuZGVybGluZSIsIkxpbmsiLCJpbml0aWFsQ29sb3IiLCJpbml0aWFsVW5kZXJsaW5lIiwiZm9udENvbG9yRG93biIsImZvbnRDb2xvckhvdmVyIiwibGFzdEtleSIsInVuZGVmaW5lZCIsInNlbGVjdGVkQ29tcG9uZW50IiwiYmx1ckJhY2tncm91bmQiLCJkcmF3Qmx1ciIsImtleUNvZGUiLCJrZXlBY3Rpb24iLCJzZWxlY3QiLCJibHVyQ2FudmFzIiwiaW5kZXgiLCJzZWxlY3RhYmxlQ29tcG9uZW50cyIsImNvbXBhcmVUb01lbnUiLCJOb3RpZmljYXRpb25NZXNzYWdlIiwiZGVsYXlCZWZvcmVDbG9zaW5nIiwiZWFzaW5nRnVuY3Rpb24iLCJ0aW1lTGFzdEZyYW1lIiwiYW5pbWF0aW9uVGltZSIsImNsb3NlZCIsImNsb3NpbmciLCJjbG9zZUJ1dHRvbiIsInNldENsaWNrQWN0aW9uIiwiY2xvc2UiLCJkaXNhYmxlQW5pbWF0aW9uIiwiZW5hYmxlQ2xvc2VCdXR0b24iLCJkaXNhYmxlQ2xvc2VCdXR0b24iLCJhbmltYXRpb25EdXJhdGlvbiIsImNvcHkiLCJjb21wYXJlVG9Ob3RpZmljYXRpb24iLCJvZmZzZXRZIiwiZm9yY2VDbG9zZSIsIm9wZW4iLCJQcm9ncmVzc0JhciIsImRlZmF1bHRQZXJjZW50IiwicGVyY2VudCIsImRyYXdGb3JlZ3JvdW5kIiwid2lkdGhGb3JlZ3JvdW5kIiwiZm9yZWdyb3VuZENvbG9yIiwiYW5pbWF0aW9uUGVyY2VudCIsImV2ZW50cyIsImV2ZW50QXJncyIsInJlZ2lzdGVyQ2FsbGJhY2siLCJyZW1vdmVDYWxsYmFjayIsInJlbW92ZUFsbENhbGxiYWNrcyIsInRvdGFsV2lkdGgiLCJjb21wYXJlQ29tcG9uZW50cyIsIlNjcm9sbGJhciIsInNpemUiLCJjb21wYXJlVG9TY3JvbGxiYXIiLCJtYXhXaWR0aFBhcmVudCIsImlubmVyV2lkdGhQYXJlbnQiLCJtYXhIZWlnaHRQYXJlbnQiLCJpbm5lckhlaWdodFBhcmVudCIsImNvbnRlbnRSYXRpb1giLCJjb250ZW50UmF0aW9ZIiwid2luZG93U2Nyb2xsU2l6ZVgiLCJ3aW5kb3dTY3JvbGxTaXplWSIsInBlcmNlbnRTY3JvbGxiYXJOZXh0IiwibmV3RGVsdGFYIiwibmV3RGVsdGFZIiwiU2VsZWN0Iiwib3B0aW9uQ29udGFpbmVyIiwiZGVmYXVsdE9wdGlvbiIsInNlbGVjdGVkT3B0aW9uIiwibGFiZWwiLCJ0cmlhbmdsZSIsIlRyaWFuZ2xlIiwidXBkYXRlV2lkdGgiLCJTZWxlY3RPcHRpb24iLCJkZWZhdWx0TGFiZWwiLCJTZWxlY3REcm9wZG93biIsIm1heEhlaWdodERyb3Bkb3duIiwib3B0aW9ucyIsImdldENvbXBvbmVudElkIiwic2VsZWN0SGVpZ2h0Iiwic3R5bGVzIiwiVG9vbHRpcCIsImNvbXBhcmVUb1Rvb2x0aXAiLCJkcmF3VHJpYW5nbGUiLCJwcmVSZW5kZXJlZEZvbnQiLCJwcmVSZW5kZXJGb250IiwiY2FycyIsImN0eFRtcCIsImZvbnQiLCJtZWFzdXJlVGV4dCIsInRleHRCYXNlbGluZSIsImZpbGxUZXh0Iiwic3giLCJzeSIsInNXaWR0aCIsInNIZWlnaHQiLCJlcmFzZUJlbG93IiwiZGVncmVlcyIsImRyYXdJbWFnZVdyYXBwZXIiLCJpbWFnZURhdGEiLCJpc05hTiIsInRyYW5zbGF0ZSIsInJvdGF0ZSIsImNsZWFyUmVjdCIsIkFycmF5IiwiaXNBcnJheSIsImxpbmVzIiwic3BsaXQiLCJ4Q3VycmVudCIsInlDdXJyZW50IiwieUZpcnN0IiwiY3VycmVudFRleHQiLCJjdXJyZW50V2lkdGgiLCJjb2xvckluZGV4Iiwid3JhcFRleHQiLCJsaW1pdCIsInAiLCJzdWJzdHJpbmciLCJyaWdodCIsImRpc2FibGVXcmFwIiwiaW1hZ2VTbW9vdGhpbmdFbmFibGVkIiwibmV3VGV4dCIsIndpZHRoQ2FyIiwibmJDYXJMaW5lIiwiaGVpZ2h0VG90YWwiLCJsaW5lV3JhcCIsImoiLCJ3aWR0aFRleHQiLCJjYXJXaWR0aCIsImZyb214IiwiZnJvbXkiLCJ0b3giLCJ0b3kiLCJoZWFkbGVuIiwiZHgiLCJkeSIsImFuZ2xlIiwiYXRhbjIiLCJzaW4iLCJyYWRpdXMiLCJhcmMiLCJpc0ZpbHRlckh1ZUF2YWlsYWJsZSIsImdldEltYWdlRGF0YSIsImRhdGEiLCJwYXJzZU51bWJlciIsInN0ciIsInBhcnNlSW50IiwibWF0Y2giLCJnZXRGb250U2l6ZSIsInJlY3QiLCJnZXRCb3VuZGluZ0NsaWVudFJlY3QiLCJhdXRvUmVzaXplQ2FudmFzIiwiaW5pdGlhbFdpZHRoIiwiaW5pdGlhbEhlaWdodCIsImRvY3VtZW50RWxlbWVudCIsImNsaWVudFdpZHRoIiwicmF0aW8iLCJnZXRBdHRyaWJ1dGUiLCJhdXRvUmVzaXplQ2FudmFzRnVsbHNjcmVlbiIsImVuYWJsZUF1dG9SZXNpemVDYW52YXNGdWxsc2NyZWVuIiwiYXV0b1Jlc2l6ZUNhbnZhc0Z1bGxwYWdlIiwibWFyZ2luIiwiZW5hYmxlQXV0b1Jlc2l6ZUNhbnZhc0Z1bGxwYWdlIiwicmVxdWVzdEZ1bGxzY3JlZW4iLCJtb3pSZXF1ZXN0RnVsbFNjcmVlbiIsIndlYmtpdFJlcXVlc3RGdWxsc2NyZWVuIiwibXNSZXF1ZXN0RnVsbHNjcmVlbiIsIm9SZXF1ZXN0RnVsbHNjcmVlbiIsImV4aXRGdWxsc2NyZWVuIiwib25mdWxsc2NyZWVuY2hhbmdlIiwib25tc2Z1bGxzY3JlZW5jaGFuZ2UiLCJvbm1vemZ1bGxzY3JlZW5jaGFuZ2UiLCJvbndlYmtpdGZ1bGxzY3JlZW5jaGFuZ2UiLCJvbm9raXRmdWxsc2NyZWVuY2hhbmdlIiwib25vZnVsbHNjcmVlbmNoYW5nZSIsImNsaWVudFgiLCJjbGllbnRZIiwidG9wIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0QsTztRQ1ZBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EseUNBQXlDLGlDQUFpQztRQUMxRSxnSEFB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QTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiJKU0dhbWVUb29scy5kZXYuanMiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gd2VicGFja1VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24ocm9vdCwgZmFjdG9yeSkge1xuXHRpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcgJiYgdHlwZW9mIG1vZHVsZSA9PT0gJ29iamVjdCcpXG5cdFx0bW9kdWxlLmV4cG9ydHMgPSBmYWN0b3J5KCk7XG5cdGVsc2UgaWYodHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kKVxuXHRcdGRlZmluZShbXSwgZmFjdG9yeSk7XG5cdGVsc2UgaWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnKVxuXHRcdGV4cG9ydHNbXCJKU0dhbWVUb29sc1wiXSA9IGZhY3RvcnkoKTtcblx0ZWxzZVxuXHRcdHJvb3RbXCJKU0dhbWVUb29sc1wiXSA9IGZhY3RvcnkoKTtcbn0pKHR5cGVvZiBzZWxmICE9PSBcInVuZGVmaW5lZFwiID8gc2VsZiA6IHRoaXMsIGZ1bmN0aW9uKCkge1xucmV0dXJuICIsIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vc3JjL2luZGV4LmpzXCIpO1xuIiwiZnVuY3Rpb24gX2FycmF5TGlrZVRvQXJyYXkoYXJyLCBsZW4pIHtcbiAgaWYgKGxlbiA9PSBudWxsIHx8IGxlbiA+IGFyci5sZW5ndGgpIGxlbiA9IGFyci5sZW5ndGg7XG5cbiAgZm9yICh2YXIgaSA9IDAsIGFycjIgPSBuZXcgQXJyYXkobGVuKTsgaSA8IGxlbjsgaSsrKSB7XG4gICAgYXJyMltpXSA9IGFycltpXTtcbiAgfVxuXG4gIHJldHVybiBhcnIyO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9hcnJheUxpa2VUb0FycmF5OyIsInZhciBhcnJheUxpa2VUb0FycmF5ID0gcmVxdWlyZShcIi4vYXJyYXlMaWtlVG9BcnJheVwiKTtcblxuZnVuY3Rpb24gX2FycmF5V2l0aG91dEhvbGVzKGFycikge1xuICBpZiAoQXJyYXkuaXNBcnJheShhcnIpKSByZXR1cm4gYXJyYXlMaWtlVG9BcnJheShhcnIpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9hcnJheVdpdGhvdXRIb2xlczsiLCJmdW5jdGlvbiBfYXNzZXJ0VGhpc0luaXRpYWxpemVkKHNlbGYpIHtcbiAgaWYgKHNlbGYgPT09IHZvaWQgMCkge1xuICAgIHRocm93IG5ldyBSZWZlcmVuY2VFcnJvcihcInRoaXMgaGFzbid0IGJlZW4gaW5pdGlhbGlzZWQgLSBzdXBlcigpIGhhc24ndCBiZWVuIGNhbGxlZFwiKTtcbiAgfVxuXG4gIHJldHVybiBzZWxmO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQ7IiwiZnVuY3Rpb24gX2NsYXNzQ2FsbENoZWNrKGluc3RhbmNlLCBDb25zdHJ1Y3Rvcikge1xuICBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkge1xuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb25cIik7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfY2xhc3NDYWxsQ2hlY2s7IiwiZnVuY3Rpb24gX2NsYXNzUHJpdmF0ZUZpZWxkR2V0KHJlY2VpdmVyLCBwcml2YXRlTWFwKSB7XG4gIHZhciBkZXNjcmlwdG9yID0gcHJpdmF0ZU1hcC5nZXQocmVjZWl2ZXIpO1xuXG4gIGlmICghZGVzY3JpcHRvcikge1xuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJhdHRlbXB0ZWQgdG8gZ2V0IHByaXZhdGUgZmllbGQgb24gbm9uLWluc3RhbmNlXCIpO1xuICB9XG5cbiAgaWYgKGRlc2NyaXB0b3IuZ2V0KSB7XG4gICAgcmV0dXJuIGRlc2NyaXB0b3IuZ2V0LmNhbGwocmVjZWl2ZXIpO1xuICB9XG5cbiAgcmV0dXJuIGRlc2NyaXB0b3IudmFsdWU7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX2NsYXNzUHJpdmF0ZUZpZWxkR2V0OyIsImZ1bmN0aW9uIF9jbGFzc1ByaXZhdGVGaWVsZFNldChyZWNlaXZlciwgcHJpdmF0ZU1hcCwgdmFsdWUpIHtcbiAgdmFyIGRlc2NyaXB0b3IgPSBwcml2YXRlTWFwLmdldChyZWNlaXZlcik7XG5cbiAgaWYgKCFkZXNjcmlwdG9yKSB7XG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcImF0dGVtcHRlZCB0byBzZXQgcHJpdmF0ZSBmaWVsZCBvbiBub24taW5zdGFuY2VcIik7XG4gIH1cblxuICBpZiAoZGVzY3JpcHRvci5zZXQpIHtcbiAgICBkZXNjcmlwdG9yLnNldC5jYWxsKHJlY2VpdmVyLCB2YWx1ZSk7XG4gIH0gZWxzZSB7XG4gICAgaWYgKCFkZXNjcmlwdG9yLndyaXRhYmxlKSB7XG4gICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiYXR0ZW1wdGVkIHRvIHNldCByZWFkIG9ubHkgcHJpdmF0ZSBmaWVsZFwiKTtcbiAgICB9XG5cbiAgICBkZXNjcmlwdG9yLnZhbHVlID0gdmFsdWU7XG4gIH1cblxuICByZXR1cm4gdmFsdWU7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX2NsYXNzUHJpdmF0ZUZpZWxkU2V0OyIsInZhciBzZXRQcm90b3R5cGVPZiA9IHJlcXVpcmUoXCIuL3NldFByb3RvdHlwZU9mXCIpO1xuXG52YXIgaXNOYXRpdmVSZWZsZWN0Q29uc3RydWN0ID0gcmVxdWlyZShcIi4vaXNOYXRpdmVSZWZsZWN0Q29uc3RydWN0XCIpO1xuXG5mdW5jdGlvbiBfY29uc3RydWN0KFBhcmVudCwgYXJncywgQ2xhc3MpIHtcbiAgaWYgKGlzTmF0aXZlUmVmbGVjdENvbnN0cnVjdCgpKSB7XG4gICAgbW9kdWxlLmV4cG9ydHMgPSBfY29uc3RydWN0ID0gUmVmbGVjdC5jb25zdHJ1Y3Q7XG4gIH0gZWxzZSB7XG4gICAgbW9kdWxlLmV4cG9ydHMgPSBfY29uc3RydWN0ID0gZnVuY3Rpb24gX2NvbnN0cnVjdChQYXJlbnQsIGFyZ3MsIENsYXNzKSB7XG4gICAgICB2YXIgYSA9IFtudWxsXTtcbiAgICAgIGEucHVzaC5hcHBseShhLCBhcmdzKTtcbiAgICAgIHZhciBDb25zdHJ1Y3RvciA9IEZ1bmN0aW9uLmJpbmQuYXBwbHkoUGFyZW50LCBhKTtcbiAgICAgIHZhciBpbnN0YW5jZSA9IG5ldyBDb25zdHJ1Y3RvcigpO1xuICAgICAgaWYgKENsYXNzKSBzZXRQcm90b3R5cGVPZihpbnN0YW5jZSwgQ2xhc3MucHJvdG90eXBlKTtcbiAgICAgIHJldHVybiBpbnN0YW5jZTtcbiAgICB9O1xuICB9XG5cbiAgcmV0dXJuIF9jb25zdHJ1Y3QuYXBwbHkobnVsbCwgYXJndW1lbnRzKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfY29uc3RydWN0OyIsImZ1bmN0aW9uIF9kZWZpbmVQcm9wZXJ0aWVzKHRhcmdldCwgcHJvcHMpIHtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBwcm9wcy5sZW5ndGg7IGkrKykge1xuICAgIHZhciBkZXNjcmlwdG9yID0gcHJvcHNbaV07XG4gICAgZGVzY3JpcHRvci5lbnVtZXJhYmxlID0gZGVzY3JpcHRvci5lbnVtZXJhYmxlIHx8IGZhbHNlO1xuICAgIGRlc2NyaXB0b3IuY29uZmlndXJhYmxlID0gdHJ1ZTtcbiAgICBpZiAoXCJ2YWx1ZVwiIGluIGRlc2NyaXB0b3IpIGRlc2NyaXB0b3Iud3JpdGFibGUgPSB0cnVlO1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGRlc2NyaXB0b3Iua2V5LCBkZXNjcmlwdG9yKTtcbiAgfVxufVxuXG5mdW5jdGlvbiBfY3JlYXRlQ2xhc3MoQ29uc3RydWN0b3IsIHByb3RvUHJvcHMsIHN0YXRpY1Byb3BzKSB7XG4gIGlmIChwcm90b1Byb3BzKSBfZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvci5wcm90b3R5cGUsIHByb3RvUHJvcHMpO1xuICBpZiAoc3RhdGljUHJvcHMpIF9kZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLCBzdGF0aWNQcm9wcyk7XG4gIHJldHVybiBDb25zdHJ1Y3Rvcjtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfY3JlYXRlQ2xhc3M7IiwiZnVuY3Rpb24gX2RlZmluZVByb3BlcnR5KG9iaiwga2V5LCB2YWx1ZSkge1xuICBpZiAoa2V5IGluIG9iaikge1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShvYmosIGtleSwge1xuICAgICAgdmFsdWU6IHZhbHVlLFxuICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZSxcbiAgICAgIHdyaXRhYmxlOiB0cnVlXG4gICAgfSk7XG4gIH0gZWxzZSB7XG4gICAgb2JqW2tleV0gPSB2YWx1ZTtcbiAgfVxuXG4gIHJldHVybiBvYmo7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX2RlZmluZVByb3BlcnR5OyIsInZhciBzdXBlclByb3BCYXNlID0gcmVxdWlyZShcIi4vc3VwZXJQcm9wQmFzZVwiKTtcblxuZnVuY3Rpb24gX2dldCh0YXJnZXQsIHByb3BlcnR5LCByZWNlaXZlcikge1xuICBpZiAodHlwZW9mIFJlZmxlY3QgIT09IFwidW5kZWZpbmVkXCIgJiYgUmVmbGVjdC5nZXQpIHtcbiAgICBtb2R1bGUuZXhwb3J0cyA9IF9nZXQgPSBSZWZsZWN0LmdldDtcbiAgfSBlbHNlIHtcbiAgICBtb2R1bGUuZXhwb3J0cyA9IF9nZXQgPSBmdW5jdGlvbiBfZ2V0KHRhcmdldCwgcHJvcGVydHksIHJlY2VpdmVyKSB7XG4gICAgICB2YXIgYmFzZSA9IHN1cGVyUHJvcEJhc2UodGFyZ2V0LCBwcm9wZXJ0eSk7XG4gICAgICBpZiAoIWJhc2UpIHJldHVybjtcbiAgICAgIHZhciBkZXNjID0gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihiYXNlLCBwcm9wZXJ0eSk7XG5cbiAgICAgIGlmIChkZXNjLmdldCkge1xuICAgICAgICByZXR1cm4gZGVzYy5nZXQuY2FsbChyZWNlaXZlcik7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBkZXNjLnZhbHVlO1xuICAgIH07XG4gIH1cblxuICByZXR1cm4gX2dldCh0YXJnZXQsIHByb3BlcnR5LCByZWNlaXZlciB8fCB0YXJnZXQpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9nZXQ7IiwiZnVuY3Rpb24gX2dldFByb3RvdHlwZU9mKG8pIHtcbiAgbW9kdWxlLmV4cG9ydHMgPSBfZ2V0UHJvdG90eXBlT2YgPSBPYmplY3Quc2V0UHJvdG90eXBlT2YgPyBPYmplY3QuZ2V0UHJvdG90eXBlT2YgOiBmdW5jdGlvbiBfZ2V0UHJvdG90eXBlT2Yobykge1xuICAgIHJldHVybiBvLl9fcHJvdG9fXyB8fCBPYmplY3QuZ2V0UHJvdG90eXBlT2Yobyk7XG4gIH07XG4gIHJldHVybiBfZ2V0UHJvdG90eXBlT2Yobyk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX2dldFByb3RvdHlwZU9mOyIsInZhciBzZXRQcm90b3R5cGVPZiA9IHJlcXVpcmUoXCIuL3NldFByb3RvdHlwZU9mXCIpO1xuXG5mdW5jdGlvbiBfaW5oZXJpdHMoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpIHtcbiAgaWYgKHR5cGVvZiBzdXBlckNsYXNzICE9PSBcImZ1bmN0aW9uXCIgJiYgc3VwZXJDbGFzcyAhPT0gbnVsbCkge1xuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJTdXBlciBleHByZXNzaW9uIG11c3QgZWl0aGVyIGJlIG51bGwgb3IgYSBmdW5jdGlvblwiKTtcbiAgfVxuXG4gIHN1YkNsYXNzLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoc3VwZXJDbGFzcyAmJiBzdXBlckNsYXNzLnByb3RvdHlwZSwge1xuICAgIGNvbnN0cnVjdG9yOiB7XG4gICAgICB2YWx1ZTogc3ViQ2xhc3MsXG4gICAgICB3cml0YWJsZTogdHJ1ZSxcbiAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICAgIH1cbiAgfSk7XG4gIGlmIChzdXBlckNsYXNzKSBzZXRQcm90b3R5cGVPZihzdWJDbGFzcywgc3VwZXJDbGFzcyk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX2luaGVyaXRzOyIsImZ1bmN0aW9uIF9pc05hdGl2ZVJlZmxlY3RDb25zdHJ1Y3QoKSB7XG4gIGlmICh0eXBlb2YgUmVmbGVjdCA9PT0gXCJ1bmRlZmluZWRcIiB8fCAhUmVmbGVjdC5jb25zdHJ1Y3QpIHJldHVybiBmYWxzZTtcbiAgaWYgKFJlZmxlY3QuY29uc3RydWN0LnNoYW0pIHJldHVybiBmYWxzZTtcbiAgaWYgKHR5cGVvZiBQcm94eSA9PT0gXCJmdW5jdGlvblwiKSByZXR1cm4gdHJ1ZTtcblxuICB0cnkge1xuICAgIERhdGUucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwoUmVmbGVjdC5jb25zdHJ1Y3QoRGF0ZSwgW10sIGZ1bmN0aW9uICgpIHt9KSk7XG4gICAgcmV0dXJuIHRydWU7XG4gIH0gY2F0Y2ggKGUpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfaXNOYXRpdmVSZWZsZWN0Q29uc3RydWN0OyIsImZ1bmN0aW9uIF9pdGVyYWJsZVRvQXJyYXkoaXRlcikge1xuICBpZiAodHlwZW9mIFN5bWJvbCAhPT0gXCJ1bmRlZmluZWRcIiAmJiBTeW1ib2wuaXRlcmF0b3IgaW4gT2JqZWN0KGl0ZXIpKSByZXR1cm4gQXJyYXkuZnJvbShpdGVyKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfaXRlcmFibGVUb0FycmF5OyIsImZ1bmN0aW9uIF9ub25JdGVyYWJsZVNwcmVhZCgpIHtcbiAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkludmFsaWQgYXR0ZW1wdCB0byBzcHJlYWQgbm9uLWl0ZXJhYmxlIGluc3RhbmNlLlxcbkluIG9yZGVyIHRvIGJlIGl0ZXJhYmxlLCBub24tYXJyYXkgb2JqZWN0cyBtdXN0IGhhdmUgYSBbU3ltYm9sLml0ZXJhdG9yXSgpIG1ldGhvZC5cIik7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX25vbkl0ZXJhYmxlU3ByZWFkOyIsInZhciBfdHlwZW9mID0gcmVxdWlyZShcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvdHlwZW9mXCIpO1xuXG52YXIgYXNzZXJ0VGhpc0luaXRpYWxpemVkID0gcmVxdWlyZShcIi4vYXNzZXJ0VGhpc0luaXRpYWxpemVkXCIpO1xuXG5mdW5jdGlvbiBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybihzZWxmLCBjYWxsKSB7XG4gIGlmIChjYWxsICYmIChfdHlwZW9mKGNhbGwpID09PSBcIm9iamVjdFwiIHx8IHR5cGVvZiBjYWxsID09PSBcImZ1bmN0aW9uXCIpKSB7XG4gICAgcmV0dXJuIGNhbGw7XG4gIH1cblxuICByZXR1cm4gYXNzZXJ0VGhpc0luaXRpYWxpemVkKHNlbGYpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuOyIsInZhciBzdXBlclByb3BCYXNlID0gcmVxdWlyZShcIi4vc3VwZXJQcm9wQmFzZVwiKTtcblxudmFyIGRlZmluZVByb3BlcnR5ID0gcmVxdWlyZShcIi4vZGVmaW5lUHJvcGVydHlcIik7XG5cbmZ1bmN0aW9uIHNldCh0YXJnZXQsIHByb3BlcnR5LCB2YWx1ZSwgcmVjZWl2ZXIpIHtcbiAgaWYgKHR5cGVvZiBSZWZsZWN0ICE9PSBcInVuZGVmaW5lZFwiICYmIFJlZmxlY3Quc2V0KSB7XG4gICAgc2V0ID0gUmVmbGVjdC5zZXQ7XG4gIH0gZWxzZSB7XG4gICAgc2V0ID0gZnVuY3Rpb24gc2V0KHRhcmdldCwgcHJvcGVydHksIHZhbHVlLCByZWNlaXZlcikge1xuICAgICAgdmFyIGJhc2UgPSBzdXBlclByb3BCYXNlKHRhcmdldCwgcHJvcGVydHkpO1xuICAgICAgdmFyIGRlc2M7XG5cbiAgICAgIGlmIChiYXNlKSB7XG4gICAgICAgIGRlc2MgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKGJhc2UsIHByb3BlcnR5KTtcblxuICAgICAgICBpZiAoZGVzYy5zZXQpIHtcbiAgICAgICAgICBkZXNjLnNldC5jYWxsKHJlY2VpdmVyLCB2YWx1ZSk7XG4gICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH0gZWxzZSBpZiAoIWRlc2Mud3JpdGFibGUpIHtcbiAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgZGVzYyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IocmVjZWl2ZXIsIHByb3BlcnR5KTtcblxuICAgICAgaWYgKGRlc2MpIHtcbiAgICAgICAgaWYgKCFkZXNjLndyaXRhYmxlKSB7XG4gICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG5cbiAgICAgICAgZGVzYy52YWx1ZSA9IHZhbHVlO1xuICAgICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkocmVjZWl2ZXIsIHByb3BlcnR5LCBkZXNjKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGRlZmluZVByb3BlcnR5KHJlY2VpdmVyLCBwcm9wZXJ0eSwgdmFsdWUpO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9O1xuICB9XG5cbiAgcmV0dXJuIHNldCh0YXJnZXQsIHByb3BlcnR5LCB2YWx1ZSwgcmVjZWl2ZXIpO1xufVxuXG5mdW5jdGlvbiBfc2V0KHRhcmdldCwgcHJvcGVydHksIHZhbHVlLCByZWNlaXZlciwgaXNTdHJpY3QpIHtcbiAgdmFyIHMgPSBzZXQodGFyZ2V0LCBwcm9wZXJ0eSwgdmFsdWUsIHJlY2VpdmVyIHx8IHRhcmdldCk7XG5cbiAgaWYgKCFzICYmIGlzU3RyaWN0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdmYWlsZWQgdG8gc2V0IHByb3BlcnR5Jyk7XG4gIH1cblxuICByZXR1cm4gdmFsdWU7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX3NldDsiLCJmdW5jdGlvbiBfc2V0UHJvdG90eXBlT2YobywgcCkge1xuICBtb2R1bGUuZXhwb3J0cyA9IF9zZXRQcm90b3R5cGVPZiA9IE9iamVjdC5zZXRQcm90b3R5cGVPZiB8fCBmdW5jdGlvbiBfc2V0UHJvdG90eXBlT2YobywgcCkge1xuICAgIG8uX19wcm90b19fID0gcDtcbiAgICByZXR1cm4gbztcbiAgfTtcblxuICByZXR1cm4gX3NldFByb3RvdHlwZU9mKG8sIHApO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9zZXRQcm90b3R5cGVPZjsiLCJ2YXIgZ2V0UHJvdG90eXBlT2YgPSByZXF1aXJlKFwiLi9nZXRQcm90b3R5cGVPZlwiKTtcblxuZnVuY3Rpb24gX3N1cGVyUHJvcEJhc2Uob2JqZWN0LCBwcm9wZXJ0eSkge1xuICB3aGlsZSAoIU9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KSkge1xuICAgIG9iamVjdCA9IGdldFByb3RvdHlwZU9mKG9iamVjdCk7XG4gICAgaWYgKG9iamVjdCA9PT0gbnVsbCkgYnJlYWs7XG4gIH1cblxuICByZXR1cm4gb2JqZWN0O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9zdXBlclByb3BCYXNlOyIsInZhciBhcnJheVdpdGhvdXRIb2xlcyA9IHJlcXVpcmUoXCIuL2FycmF5V2l0aG91dEhvbGVzXCIpO1xuXG52YXIgaXRlcmFibGVUb0FycmF5ID0gcmVxdWlyZShcIi4vaXRlcmFibGVUb0FycmF5XCIpO1xuXG52YXIgdW5zdXBwb3J0ZWRJdGVyYWJsZVRvQXJyYXkgPSByZXF1aXJlKFwiLi91bnN1cHBvcnRlZEl0ZXJhYmxlVG9BcnJheVwiKTtcblxudmFyIG5vbkl0ZXJhYmxlU3ByZWFkID0gcmVxdWlyZShcIi4vbm9uSXRlcmFibGVTcHJlYWRcIik7XG5cbmZ1bmN0aW9uIF90b0NvbnN1bWFibGVBcnJheShhcnIpIHtcbiAgcmV0dXJuIGFycmF5V2l0aG91dEhvbGVzKGFycikgfHwgaXRlcmFibGVUb0FycmF5KGFycikgfHwgdW5zdXBwb3J0ZWRJdGVyYWJsZVRvQXJyYXkoYXJyKSB8fCBub25JdGVyYWJsZVNwcmVhZCgpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF90b0NvbnN1bWFibGVBcnJheTsiLCJmdW5jdGlvbiBfdHlwZW9mKG9iaikge1xuICBcIkBiYWJlbC9oZWxwZXJzIC0gdHlwZW9mXCI7XG5cbiAgaWYgKHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiB0eXBlb2YgU3ltYm9sLml0ZXJhdG9yID09PSBcInN5bWJvbFwiKSB7XG4gICAgbW9kdWxlLmV4cG9ydHMgPSBfdHlwZW9mID0gZnVuY3Rpb24gX3R5cGVvZihvYmopIHtcbiAgICAgIHJldHVybiB0eXBlb2Ygb2JqO1xuICAgIH07XG4gIH0gZWxzZSB7XG4gICAgbW9kdWxlLmV4cG9ydHMgPSBfdHlwZW9mID0gZnVuY3Rpb24gX3R5cGVvZihvYmopIHtcbiAgICAgIHJldHVybiBvYmogJiYgdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIG9iai5jb25zdHJ1Y3RvciA9PT0gU3ltYm9sICYmIG9iaiAhPT0gU3ltYm9sLnByb3RvdHlwZSA/IFwic3ltYm9sXCIgOiB0eXBlb2Ygb2JqO1xuICAgIH07XG4gIH1cblxuICByZXR1cm4gX3R5cGVvZihvYmopO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF90eXBlb2Y7IiwidmFyIGFycmF5TGlrZVRvQXJyYXkgPSByZXF1aXJlKFwiLi9hcnJheUxpa2VUb0FycmF5XCIpO1xuXG5mdW5jdGlvbiBfdW5zdXBwb3J0ZWRJdGVyYWJsZVRvQXJyYXkobywgbWluTGVuKSB7XG4gIGlmICghbykgcmV0dXJuO1xuICBpZiAodHlwZW9mIG8gPT09IFwic3RyaW5nXCIpIHJldHVybiBhcnJheUxpa2VUb0FycmF5KG8sIG1pbkxlbik7XG4gIHZhciBuID0gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKG8pLnNsaWNlKDgsIC0xKTtcbiAgaWYgKG4gPT09IFwiT2JqZWN0XCIgJiYgby5jb25zdHJ1Y3RvcikgbiA9IG8uY29uc3RydWN0b3IubmFtZTtcbiAgaWYgKG4gPT09IFwiTWFwXCIgfHwgbiA9PT0gXCJTZXRcIikgcmV0dXJuIEFycmF5LmZyb20obyk7XG4gIGlmIChuID09PSBcIkFyZ3VtZW50c1wiIHx8IC9eKD86VWl8SSludCg/Ojh8MTZ8MzIpKD86Q2xhbXBlZCk/QXJyYXkkLy50ZXN0KG4pKSByZXR1cm4gYXJyYXlMaWtlVG9BcnJheShvLCBtaW5MZW4pO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF91bnN1cHBvcnRlZEl0ZXJhYmxlVG9BcnJheTsiLCIvKlxuICogQ29weXJpZ2h0IChDKSAyMDIwIEVsaWFzdGlrIChlbGlhc3Rpa3NvZnRzLmNvbSlcbiAqXG4gKiBUaGlzIGZpbGUgaXMgcGFydCBvZiBcIkpTR2FtZVRvb2xzXCIuXG4gKlxuICogXCJKU0dhbWVUb29sc1wiIGlzIGZyZWUgc29mdHdhcmU6IHlvdSBjYW4gcmVkaXN0cmlidXRlIGl0IGFuZC9vciBtb2RpZnlcbiAqIGl0IHVuZGVyIHRoZSB0ZXJtcyBvZiB0aGUgR05VIEdlbmVyYWwgUHVibGljIExpY2Vuc2UgYXMgcHVibGlzaGVkIGJ5XG4gKiB0aGUgRnJlZSBTb2Z0d2FyZSBGb3VuZGF0aW9uLCBlaXRoZXIgdmVyc2lvbiAzIG9mIHRoZSBMaWNlbnNlLCBvclxuICogKGF0IHlvdXIgb3B0aW9uKSBhbnkgbGF0ZXIgdmVyc2lvbi5cbiAqXG4gKiBcIkpTR2FtZVRvb2xzXCIgaXMgZGlzdHJpYnV0ZWQgaW4gdGhlIGhvcGUgdGhhdCBpdCB3aWxsIGJlIHVzZWZ1bCxcbiAqIGJ1dCBXSVRIT1VUIEFOWSBXQVJSQU5UWTsgd2l0aG91dCBldmVuIHRoZSBpbXBsaWVkIHdhcnJhbnR5IG9mXG4gKiBNRVJDSEFOVEFCSUxJVFkgb3IgRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UuICBTZWUgdGhlXG4gKiBHTlUgR2VuZXJhbCBQdWJsaWMgTGljZW5zZSBmb3IgbW9yZSBkZXRhaWxzLlxuICpcbiAqIFlvdSBzaG91bGQgaGF2ZSByZWNlaXZlZCBhIGNvcHkgb2YgdGhlIEdOVSBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlXG4gKiBhbG9uZyB3aXRoIFwiSlNHYW1lVG9vbHNcIi4gIElmIG5vdCwgc2VlIDxodHRwOi8vd3d3LmdudS5vcmcvbGljZW5zZXMvPi5cbiAqL1xuaW1wb3J0IENvbXBvbmVudCBmcm9tIFwiLi9Db21wb25lbnRcIjtcbmltcG9ydCBDb25zdGFudHMgZnJvbSBcIi4vQ29uc3RhbnRzXCI7XG5pbXBvcnQgU3R5bGUgZnJvbSBcIi4vU3R5bGVcIjtcbmltcG9ydCBVdGlscyBmcm9tIFwiLi9VdGlsc1wiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBBcnJvdyBleHRlbmRzIENvbXBvbmVudCB7XG4gIHNlbGVjdGFibGUgPSBmYWxzZTtcblxuICBjb25zdHJ1Y3Rvcih4LCB5LCB0b1gsIHRvWSwgc3R5bGUpIHtcbiAgICBzdXBlcih4LCB5LCBudWxsLCBudWxsLCBzdHlsZSk7XG5cbiAgICB0aGlzLnRvWCA9IHRvWDtcbiAgICB0aGlzLnRvWSA9IHRvWTtcbiAgfVxuXG4gIGRyYXcoY29udGV4dCkge1xuICAgIGlmKHRoaXMuaGlkZGVuKSByZXR1cm47XG4gICAgc3VwZXIuZHJhdyhjb250ZXh0KTtcblxuICAgIGNvbnN0IGNhbnZhcyA9IGNvbnRleHQuY2FudmFzO1xuICAgIGNvbnN0IGN0eCA9IGNhbnZhcy5nZXRDb250ZXh0KFwiMmRcIik7XG4gICAgXG4gICAgVXRpbHMuZHJhd0Fycm93KGN0eCwgdGhpcy54LCB0aGlzLnksIHRoaXMudG9YLCB0aGlzLnRvWSwgdGhpcy5zdHlsZS5saW5lV2lkdGgsIHRoaXMuc3R5bGUuaGVhZFNpemUsIHRoaXMuc3R5bGUuY29sb3IsIHRoaXMuc3R5bGUubGluZUNhcCk7XG5cbiAgICB0aGlzLmluaXQgPSB0cnVlO1xuICB9XG5cbiAgZ2V0IHdpZHRoKCkge1xuICAgIHJldHVybiBNYXRoLmFicyh0aGlzLnggLSB0aGlzLnRvWCk7XG4gIH1cblxuICBnZXQgaGVpZ2h0KCkge1xuICAgIHJldHVybiBNYXRoLmFicyh0aGlzLnkgLSB0aGlzLnRvWSk7XG4gIH1cblxuICBnZXQgZGVmYXVsdFN0eWxlKCkge1xuICAgIHJldHVybiBuZXcgU3R5bGUoe1xuICAgICAgXCJsaW5lV2lkdGhcIjogQ29uc3RhbnRzLlNldHRpbmcuQVJST1dfREVGQVVMVF9MSU5FX1NJWkUsXG4gICAgICBcImhlYWRTaXplXCI6IENvbnN0YW50cy5TZXR0aW5nLkFSUk9XX0RFRkFVTFRfSEVBRF9TSVpFLFxuICAgICAgXCJjb2xvclwiOiBDb25zdGFudHMuU2V0dGluZy5BUlJPV19ERUZBVUxUX0NPTE9SLFxuICAgICAgXCJsaW5lQ2FwXCI6IENvbnN0YW50cy5TZXR0aW5nLkFSUk9XX0RFRkFVTFRfTElORV9DQVBcbiAgICB9KTtcbiAgfVxufSIsIi8qXG4gKiBDb3B5cmlnaHQgKEMpIDIwMjAgRWxpYXN0aWsgKGVsaWFzdGlrc29mdHMuY29tKVxuICpcbiAqIFRoaXMgZmlsZSBpcyBwYXJ0IG9mIFwiSlNHYW1lVG9vbHNcIi5cbiAqXG4gKiBcIkpTR2FtZVRvb2xzXCIgaXMgZnJlZSBzb2Z0d2FyZTogeW91IGNhbiByZWRpc3RyaWJ1dGUgaXQgYW5kL29yIG1vZGlmeVxuICogaXQgdW5kZXIgdGhlIHRlcm1zIG9mIHRoZSBHTlUgR2VuZXJhbCBQdWJsaWMgTGljZW5zZSBhcyBwdWJsaXNoZWQgYnlcbiAqIHRoZSBGcmVlIFNvZnR3YXJlIEZvdW5kYXRpb24sIGVpdGhlciB2ZXJzaW9uIDMgb2YgdGhlIExpY2Vuc2UsIG9yXG4gKiAoYXQgeW91ciBvcHRpb24pIGFueSBsYXRlciB2ZXJzaW9uLlxuICpcbiAqIFwiSlNHYW1lVG9vbHNcIiBpcyBkaXN0cmlidXRlZCBpbiB0aGUgaG9wZSB0aGF0IGl0IHdpbGwgYmUgdXNlZnVsLFxuICogYnV0IFdJVEhPVVQgQU5ZIFdBUlJBTlRZOyB3aXRob3V0IGV2ZW4gdGhlIGltcGxpZWQgd2FycmFudHkgb2ZcbiAqIE1FUkNIQU5UQUJJTElUWSBvciBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRS4gIFNlZSB0aGVcbiAqIEdOVSBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlIGZvciBtb3JlIGRldGFpbHMuXG4gKlxuICogWW91IHNob3VsZCBoYXZlIHJlY2VpdmVkIGEgY29weSBvZiB0aGUgR05VIEdlbmVyYWwgUHVibGljIExpY2Vuc2VcbiAqIGFsb25nIHdpdGggXCJKU0dhbWVUb29sc1wiLiAgSWYgbm90LCBzZWUgPGh0dHA6Ly93d3cuZ251Lm9yZy9saWNlbnNlcy8+LlxuICovXG5pbXBvcnQgQ29tcG9uZW50IGZyb20gXCIuL0NvbXBvbmVudFwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBCb3ggZXh0ZW5kcyBDb21wb25lbnQge1xuICBzZWxlY3RhYmxlID0gZmFsc2U7XG5cbiAgY29uc3RydWN0b3IoeCwgeSwgd2lkdGgsIGhlaWdodCwgc3R5bGUpIHtcbiAgICBzdXBlcih4LCB5LCB3aWR0aCwgaGVpZ2h0LCBzdHlsZSk7XG4gIH1cbiAgXG4gIGRyYXcoY29udGV4dCkge1xuICAgIGlmKHRoaXMuaGlkZGVuKSByZXR1cm47XG4gICAgc3VwZXIuZHJhdyhjb250ZXh0KTtcblxuICAgIGNvbnN0IGNhbnZhcyA9IGNvbnRleHQuY2FudmFzO1xuICAgIGNvbnN0IGN0eCA9IGNhbnZhcy5nZXRDb250ZXh0KFwiMmRcIik7XG4gICAgY3R4LnNhdmUoKTtcblxuICAgIHRoaXMuZHJhd0JhY2tncm91bmQoY3R4KTtcbiAgICB0aGlzLmRyYXdCb3JkZXIoY3R4KTtcbiAgICBcbiAgICBjdHgucmVzdG9yZSgpO1xuICB9XG5cbiAgZHJhd0JhY2tncm91bmQoY3R4KSB7XG4gICAgY29uc3QgY29sb3IgPSB0aGlzLmJhY2tncm91bmRDb2xvcjtcblxuICAgIGlmKGNvbG9yKSB7XG4gICAgICBjdHguc2F2ZSgpO1xuICBcbiAgICAgIGN0eC5maWxsU3R5bGUgPSBjb2xvcjtcbiAgICAgIGN0eC5maWxsUmVjdChNYXRoLnJvdW5kKHRoaXMueCksIE1hdGgucm91bmQodGhpcy55KSwgTWF0aC5yb3VuZCh0aGlzLndpZHRoKSwgTWF0aC5yb3VuZCh0aGlzLmhlaWdodCkpO1xuXG4gICAgICBjdHgucmVzdG9yZSgpO1xuICAgIH1cbiAgfVxuXG4gIGdldCBiYWNrZ3JvdW5kQ29sb3IoKSB7XG4gICAgbGV0IGNvbG9yID0gbnVsbDtcblxuICAgIGlmKHRoaXMuaG92ZXJlZCAmJiB0aGlzLmNsaWNrZWQgJiYgdGhpcy5zdHlsZS5iYWNrZ3JvdW5kQ29sb3JEb3duICE9IG51bGwpIHtcbiAgICAgIGNvbG9yID0gdGhpcy5zdHlsZS5iYWNrZ3JvdW5kQ29sb3JEb3duO1xuICAgIH0gZWxzZSBpZih0aGlzLmhvdmVyZWQgJiYgdGhpcy5zdHlsZS5iYWNrZ3JvdW5kQ29sb3JIb3ZlciAhPSBudWxsKSB7XG4gICAgICBjb2xvciA9IHRoaXMuc3R5bGUuYmFja2dyb3VuZENvbG9ySG92ZXI7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbG9yID0gdGhpcy5zdHlsZS5iYWNrZ3JvdW5kQ29sb3I7XG4gICAgfVxuXG4gICAgcmV0dXJuIGNvbG9yO1xuICB9XG5cbiAgZHJhd0JvcmRlcihjdHgpIHtcbiAgICBjb25zdCBjb2xvciA9IHRoaXMuYm9yZGVyQ29sb3I7XG5cbiAgICBpZihjb2xvciAmJiB0aGlzLnN0eWxlLmJvcmRlclNpemUgPiAwKSB7XG4gICAgICBjdHguc2F2ZSgpO1xuICAgICAgXG4gICAgICBjdHguc3Ryb2tlU3R5bGUgPSBjb2xvcjtcbiAgICAgIGN0eC5saW5lV2lkdGggPSB0aGlzLnN0eWxlLmJvcmRlclNpemU7XG4gICAgICBcbiAgICAgIGN0eC5zdHJva2VSZWN0KE1hdGgucm91bmQodGhpcy54KSwgTWF0aC5yb3VuZCh0aGlzLnkpLCBNYXRoLnJvdW5kKHRoaXMud2lkdGggLSB0aGlzLnN0eWxlLmJvcmRlclNpemUgLyAyKSwgTWF0aC5yb3VuZCh0aGlzLmhlaWdodCAtIHRoaXMuc3R5bGUuYm9yZGVyU2l6ZSAvIDIpKTtcbiAgXG4gICAgICBjdHgucmVzdG9yZSgpO1xuICAgIH1cbiAgfVxuXG4gIGdldCBib3JkZXJDb2xvcigpIHtcbiAgICBsZXQgY29sb3IgPSBudWxsO1xuXG4gICAgaWYodGhpcy5jbGlja2VkICYmIHRoaXMuaG92ZXJlZCAmJiB0aGlzLnN0eWxlLmJvcmRlckNvbG9yRG93biAhPSBudWxsKSB7XG4gICAgICBjb2xvciA9IHRoaXMuc3R5bGUuYm9yZGVyQ29sb3JEb3duO1xuICAgIH0gZWxzZSBpZighdGhpcy5jbGlja2VkICYmIHRoaXMuaG92ZXJlZCAmJiB0aGlzLnN0eWxlLmJvcmRlckNvbG9ySG92ZXIgIT0gbnVsbCkge1xuICAgICAgY29sb3IgPSB0aGlzLnN0eWxlLmJvcmRlckNvbG9ySG92ZXI7XG4gICAgfSBlbHNlIGlmKHRoaXMuc2VsZWN0YWJsZSAmJiB0aGlzLnNlbGVjdGVkICYmIHRoaXMuc3R5bGUuYm9yZGVyQ29sb3JTZWxlY3RlZCAhPSBudWxsKSB7XG4gICAgICBjb2xvciA9IHRoaXMuc3R5bGUuYm9yZGVyQ29sb3JTZWxlY3RlZDtcbiAgICB9IGVsc2Uge1xuICAgICAgY29sb3IgPSB0aGlzLnN0eWxlLmJvcmRlckNvbG9yO1xuICAgIH1cblxuICAgIHJldHVybiBjb2xvcjtcbiAgfVxufSIsIi8qXG4gKiBDb3B5cmlnaHQgKEMpIDIwMjAgRWxpYXN0aWsgKGVsaWFzdGlrc29mdHMuY29tKVxuICpcbiAqIFRoaXMgZmlsZSBpcyBwYXJ0IG9mIFwiSlNHYW1lVG9vbHNcIi5cbiAqXG4gKiBcIkpTR2FtZVRvb2xzXCIgaXMgZnJlZSBzb2Z0d2FyZTogeW91IGNhbiByZWRpc3RyaWJ1dGUgaXQgYW5kL29yIG1vZGlmeVxuICogaXQgdW5kZXIgdGhlIHRlcm1zIG9mIHRoZSBHTlUgR2VuZXJhbCBQdWJsaWMgTGljZW5zZSBhcyBwdWJsaXNoZWQgYnlcbiAqIHRoZSBGcmVlIFNvZnR3YXJlIEZvdW5kYXRpb24sIGVpdGhlciB2ZXJzaW9uIDMgb2YgdGhlIExpY2Vuc2UsIG9yXG4gKiAoYXQgeW91ciBvcHRpb24pIGFueSBsYXRlciB2ZXJzaW9uLlxuICpcbiAqIFwiSlNHYW1lVG9vbHNcIiBpcyBkaXN0cmlidXRlZCBpbiB0aGUgaG9wZSB0aGF0IGl0IHdpbGwgYmUgdXNlZnVsLFxuICogYnV0IFdJVEhPVVQgQU5ZIFdBUlJBTlRZOyB3aXRob3V0IGV2ZW4gdGhlIGltcGxpZWQgd2FycmFudHkgb2ZcbiAqIE1FUkNIQU5UQUJJTElUWSBvciBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRS4gIFNlZSB0aGVcbiAqIEdOVSBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlIGZvciBtb3JlIGRldGFpbHMuXG4gKlxuICogWW91IHNob3VsZCBoYXZlIHJlY2VpdmVkIGEgY29weSBvZiB0aGUgR05VIEdlbmVyYWwgUHVibGljIExpY2Vuc2VcbiAqIGFsb25nIHdpdGggXCJKU0dhbWVUb29sc1wiLiAgSWYgbm90LCBzZWUgPGh0dHA6Ly93d3cuZ251Lm9yZy9saWNlbnNlcy8+LlxuICovXG5pbXBvcnQgUm93IGZyb20gXCIuL1Jvd1wiO1xuaW1wb3J0IENvbnN0YW50cyBmcm9tIFwiLi9Db25zdGFudHNcIjtcbmltcG9ydCBTdHlsZSBmcm9tIFwiLi9TdHlsZVwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBCdXR0b24gZXh0ZW5kcyBSb3cge1xuICBzZWxlY3RhYmxlID0gdHJ1ZTtcblxuICBjb25zdHJ1Y3Rvcih4LCB5LCBtYXhXaWR0aCwgbWF4SGVpZ2h0LCBzdHlsZSwgLi4uY29tcG9uZW50cykge1xuICAgIHN1cGVyKHgsIHksIG1heFdpZHRoLCBtYXhIZWlnaHQsIHN0eWxlLCAuLi5jb21wb25lbnRzKTtcbiAgfVxuICBcbiAgZHJhdyhjb250ZXh0KSB7XG4gICAgaWYodGhpcy5oaWRkZW4pIHJldHVybjtcbiAgICBzdXBlci5kcmF3KGNvbnRleHQpO1xuXG4gICAgY29uc3QgY2FudmFzID0gY29udGV4dC5jYW52YXM7XG4gICAgY29uc3QgY3R4ID0gY2FudmFzLmdldENvbnRleHQoXCIyZFwiKTtcbiAgICBjdHguc2F2ZSgpO1xuICAgIFxuICAgIHRoaXMuZHJhd0NvbXBvbmVudHMoY3R4KTtcbiAgICBcbiAgICBjdHgucmVzdG9yZSgpO1xuICB9XG5cbiAgZHJhd0NvbXBvbmVudHMoY3R4KSB7XG4gICAgc3VwZXIuZHJhdyhjdHgpO1xuICB9XG5cbiAgZ2V0IGhlaWdodCgpIHtcbiAgICByZXR1cm4gKHRoaXMubWF4SGVpZ2h0IHx8IHN1cGVyLmhlaWdodCkgKyB0aGlzLnN0eWxlLnBhZGRpbmc7XG4gIH1cblxuICBnZXQgd2lkdGgoKSB7XG4gICAgcmV0dXJuICh0aGlzLm1heFdpZHRoIHx8IHN1cGVyLndpZHRoKSArIHRoaXMuc3R5bGUucGFkZGluZztcbiAgfVxuXG4gIGdldCBkZWZhdWx0U3R5bGUoKSB7XG4gICAgcmV0dXJuIG5ldyBTdHlsZSh7XG4gICAgICBcImJhY2tncm91bmRDb2xvclwiOiBDb25zdGFudHMuU2V0dGluZy5CVVRUT05fREVGQVVMVF9CQUNLR1JPVU5ELFxuICAgICAgXCJiYWNrZ3JvdW5kQ29sb3JIb3ZlclwiOiBDb25zdGFudHMuU2V0dGluZy5CVVRUT05fREVGQVVMVF9IT1ZFUl9CQUNLR1JPVU5ELFxuICAgICAgXCJiYWNrZ3JvdW5kQ29sb3JEb3duXCI6IENvbnN0YW50cy5TZXR0aW5nLkJVVFRPTl9ERUZBVUxUX0NMSUNLX0JBQ0tHUk9VTkQsXG4gICAgICBcInNjcm9sbFhEaXNhYmxlZFwiOiB0cnVlLFxuICAgICAgXCJzY3JvbGxZRGlzYWJsZWRcIjogdHJ1ZVxuICAgIH0pO1xuICB9XG59IiwiLypcbiAqIENvcHlyaWdodCAoQykgMjAyMCBFbGlhc3RpayAoZWxpYXN0aWtzb2Z0cy5jb20pXG4gKlxuICogVGhpcyBmaWxlIGlzIHBhcnQgb2YgXCJKU0dhbWVUb29sc1wiLlxuICpcbiAqIFwiSlNHYW1lVG9vbHNcIiBpcyBmcmVlIHNvZnR3YXJlOiB5b3UgY2FuIHJlZGlzdHJpYnV0ZSBpdCBhbmQvb3IgbW9kaWZ5XG4gKiBpdCB1bmRlciB0aGUgdGVybXMgb2YgdGhlIEdOVSBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlIGFzIHB1Ymxpc2hlZCBieVxuICogdGhlIEZyZWUgU29mdHdhcmUgRm91bmRhdGlvbiwgZWl0aGVyIHZlcnNpb24gMyBvZiB0aGUgTGljZW5zZSwgb3JcbiAqIChhdCB5b3VyIG9wdGlvbikgYW55IGxhdGVyIHZlcnNpb24uXG4gKlxuICogXCJKU0dhbWVUb29sc1wiIGlzIGRpc3RyaWJ1dGVkIGluIHRoZSBob3BlIHRoYXQgaXQgd2lsbCBiZSB1c2VmdWwsXG4gKiBidXQgV0lUSE9VVCBBTlkgV0FSUkFOVFk7IHdpdGhvdXQgZXZlbiB0aGUgaW1wbGllZCB3YXJyYW50eSBvZlxuICogTUVSQ0hBTlRBQklMSVRZIG9yIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFLiAgU2VlIHRoZVxuICogR05VIEdlbmVyYWwgUHVibGljIExpY2Vuc2UgZm9yIG1vcmUgZGV0YWlscy5cbiAqXG4gKiBZb3Ugc2hvdWxkIGhhdmUgcmVjZWl2ZWQgYSBjb3B5IG9mIHRoZSBHTlUgR2VuZXJhbCBQdWJsaWMgTGljZW5zZVxuICogYWxvbmcgd2l0aCBcIkpTR2FtZVRvb2xzXCIuICBJZiBub3QsIHNlZSA8aHR0cDovL3d3dy5nbnUub3JnL2xpY2Vuc2VzLz4uXG4gKi9cbmltcG9ydCBJbWFnZUNvbnRhaW5lciBmcm9tIFwiLi9JbWFnZUNvbnRhaW5lclwiO1xuaW1wb3J0IEJ1dHRvbiBmcm9tIFwiLi9CdXR0b25cIjtcbmltcG9ydCBTdHlsZSBmcm9tIFwiLi9TdHlsZVwiO1xuaW1wb3J0IENvbnN0YW50cyBmcm9tIFwiLi9Db25zdGFudHNcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQnV0dG9uSW1hZ2UgZXh0ZW5kcyBCdXR0b24ge1xuICBjb25zdHJ1Y3RvcihpbWdTcmMsIHgsIHksIGFsaWduZW1lbnQsIHZlcnRpY2FsQWxpZ25lbWVudCwgd2lkdGgsIGhlaWdodCwgYmFja2dyb3VuZENvbG9yLCBiYWNrZ3JvdW5kQ29sb3JIb3ZlciwgaW1hZ2VMb2FkZXIpIHtcbiAgICBjb25zdCBzdHlsZSA9IG5ldyBTdHlsZSh7XG4gICAgICBcImFsaWduZW1lbnRcIjogYWxpZ25lbWVudCxcbiAgICAgIFwidmVydGljYWxBbGlnbmVtZW50XCI6IHZlcnRpY2FsQWxpZ25lbWVudCxcbiAgICAgIFwiYmFja2dyb3VuZENvbG9yXCI6IGJhY2tncm91bmRDb2xvciB8fCBDb25zdGFudHMuU2V0dGluZy5CVVRUT05fREVGQVVMVF9CQUNLR1JPVU5ELFxuICAgICAgXCJiYWNrZ3JvdW5kQ29sb3JIb3ZlclwiOiBiYWNrZ3JvdW5kQ29sb3JIb3ZlciB8fCBDb25zdGFudHMuU2V0dGluZy5CVVRUT05fREVGQVVMVF9IT1ZFUl9CQUNLR1JPVU5EXG4gICAgfSk7XG5cbiAgICBzdXBlcih4LCB5LCB3aWR0aCwgaGVpZ2h0LCBzdHlsZSk7XG4gICAgdGhpcy5pbWFnZSA9IG5ldyBJbWFnZUNvbnRhaW5lcihpbWdTcmMsIHgsIHksIHdpZHRoLCBoZWlnaHQsIG5ldyBTdHlsZSh7IFwiYWxpZ25lbWVudFwiOiBcImNlbnRlclwiLCBcInZlcnRpY2FsQWxpZ25lbWVudFwiOiBcImNlbnRlclwiIH0pLCBpbWFnZUxvYWRlcik7XG4gICAgdGhpcy5hZGQodGhpcy5pbWFnZSk7XG5cbiAgICBjb25zb2xlICYmIGNvbnNvbGUud2FybiAmJiBjb25zb2xlLndhcm4oQ29uc3RhbnRzLlN0cmluZy5OT1RJQ0VfTUVTU0FHRSArIFwiIFwiICsgQ29uc3RhbnRzLlN0cmluZy5CVVRUT05fSU1BR0VfREVQUkVDQVRFRCk7XG4gIH1cblxuICBsb2FkSW1hZ2UoaW1hZ2VMb2FkZXIpIHtcbiAgICBpZih0aGlzLmNvbXBvbmVudHNbMF0gaW5zdGFuY2VvZiBJbWFnZUNvbnRhaW5lcikgdGhpcy5jb21wb25lbnRzWzBdLmxvYWRJbWFnZShpbWFnZUxvYWRlcik7XG4gIH1cblxuICBzZXQgbWluV2lkdGgod2lkdGgpIHtcbiAgICB0aGlzLmltYWdlLndpZHRoID0gd2lkdGg7XG4gICAgc3VwZXIubWluV2lkdGggPSB3aWR0aDtcbiAgfVxuXG4gIHNldCBtaW5IZWlnaHQoaGVpZ2h0KSB7XG4gICAgdGhpcy5pbWFnZS5oZWlnaHQgPSBoZWlnaHQ7XG4gICAgc3VwZXIubWluSGVpZ2h0ID0gaGVpZ2h0O1xuICB9XG5cbiAgZ2V0IG1pbldpZHRoKCkge1xuICAgIHJldHVybiBzdXBlci5taW5XaWR0aDtcbiAgfVxuXG4gIGdldCBtaW5IZWlnaHQoKSB7XG4gICAgcmV0dXJuIHN1cGVyLm1pbkhlaWdodDtcbiAgfVxuXG4gIHNldCBtYXhXaWR0aCh3aWR0aCkge1xuICAgIHRoaXMuaW1hZ2Uud2lkdGggPSB3aWR0aDtcbiAgICBzdXBlci5tYXhXaWR0aCA9IHdpZHRoO1xuICB9XG5cbiAgc2V0IG1heEhlaWdodChoZWlnaHQpIHtcbiAgICB0aGlzLmltYWdlLmhlaWdodCA9IGhlaWdodDtcbiAgICBzdXBlci5tYXhIZWlnaHQgPSBoZWlnaHQ7XG4gIH1cblxuICBnZXQgbWF4V2lkdGgoKSB7XG4gICAgcmV0dXJuIHN1cGVyLm1heFdpZHRoO1xuICB9XG5cbiAgZ2V0IG1heEhlaWdodCgpIHtcbiAgICByZXR1cm4gc3VwZXIubWF4SGVpZ2h0O1xuICB9XG5cbiAgc2V0IHdpZHRoKHdpZHRoKSB7XG4gICAgdGhpcy5taW5XaWR0aCA9IHdpZHRoO1xuICAgIHRoaXMubWF4V2lkdGggPSB3aWR0aDtcbiAgfVxuXG4gIGdldCB3aWR0aCgpIHtcbiAgICByZXR1cm4gc3VwZXIud2lkdGg7XG4gIH1cblxuICBzZXQgaGVpZ2h0KGhlaWdodCkge1xuICAgIHRoaXMubWluSGVpZ2h0ID0gaGVpZ2h0O1xuICAgIHRoaXMubWF4SGVpZ2h0ID0gaGVpZ2h0O1xuICB9XG5cbiAgZ2V0IGhlaWdodCgpIHtcbiAgICByZXR1cm4gc3VwZXIuaGVpZ2h0O1xuICB9XG59IiwiLypcbiAqIENvcHlyaWdodCAoQykgMjAyMCBFbGlhc3RpayAoZWxpYXN0aWtzb2Z0cy5jb20pXG4gKlxuICogVGhpcyBmaWxlIGlzIHBhcnQgb2YgXCJKU0dhbWVUb29sc1wiLlxuICpcbiAqIFwiSlNHYW1lVG9vbHNcIiBpcyBmcmVlIHNvZnR3YXJlOiB5b3UgY2FuIHJlZGlzdHJpYnV0ZSBpdCBhbmQvb3IgbW9kaWZ5XG4gKiBpdCB1bmRlciB0aGUgdGVybXMgb2YgdGhlIEdOVSBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlIGFzIHB1Ymxpc2hlZCBieVxuICogdGhlIEZyZWUgU29mdHdhcmUgRm91bmRhdGlvbiwgZWl0aGVyIHZlcnNpb24gMyBvZiB0aGUgTGljZW5zZSwgb3JcbiAqIChhdCB5b3VyIG9wdGlvbikgYW55IGxhdGVyIHZlcnNpb24uXG4gKlxuICogXCJKU0dhbWVUb29sc1wiIGlzIGRpc3RyaWJ1dGVkIGluIHRoZSBob3BlIHRoYXQgaXQgd2lsbCBiZSB1c2VmdWwsXG4gKiBidXQgV0lUSE9VVCBBTlkgV0FSUkFOVFk7IHdpdGhvdXQgZXZlbiB0aGUgaW1wbGllZCB3YXJyYW50eSBvZlxuICogTUVSQ0hBTlRBQklMSVRZIG9yIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFLiAgU2VlIHRoZVxuICogR05VIEdlbmVyYWwgUHVibGljIExpY2Vuc2UgZm9yIG1vcmUgZGV0YWlscy5cbiAqXG4gKiBZb3Ugc2hvdWxkIGhhdmUgcmVjZWl2ZWQgYSBjb3B5IG9mIHRoZSBHTlUgR2VuZXJhbCBQdWJsaWMgTGljZW5zZVxuICogYWxvbmcgd2l0aCBcIkpTR2FtZVRvb2xzXCIuICBJZiBub3QsIHNlZSA8aHR0cDovL3d3dy5nbnUub3JnL2xpY2Vuc2VzLz4uXG4gKi9cbmltcG9ydCBDb25zdGFudHMgZnJvbSBcIi4vQ29uc3RhbnRzXCI7XG5pbXBvcnQgVXRpbHMgZnJvbSBcIi4vVXRpbHNcIjtcbmltcG9ydCBTY2VuZSBmcm9tIFwiLi9TY2VuZVwiO1xuaW1wb3J0IFJlYWN0b3JDYW52YXMgZnJvbSBcIi4vUmVhY3RvckNhbnZhc1wiO1xuaW1wb3J0IEVycm9yU2NyZWVuIGZyb20gXCIuL0Vycm9yU2NyZWVuXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIENhbnZhcyB7XG4gICNsYXN0RnJhbWVUaW1lO1xuICAjX3dpZHRoO1xuICAjX2hlaWdodDtcblxuICBjb25zdHJ1Y3RvcihzY2VuZSwgY2FudmFzLCB3aWR0aCwgaGVpZ2h0LCBhdXRvUmVzaXplLCBtYXhGUFMpIHtcbiAgICB0aGlzLmNhbnZhcyA9IGNhbnZhcyB8fCBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiY2FudmFzXCIpO1xuICAgIHRoaXMuY29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICB0aGlzLndpZHRoID0gd2lkdGggfHwgQ29uc3RhbnRzLlNldHRpbmcuQ0FOVkFTX1dJRFRIO1xuICAgIHRoaXMuaGVpZ2h0ID0gaGVpZ2h0IHx8IENvbnN0YW50cy5TZXR0aW5nLkNBTlZBU19IRUlHSFQ7XG4gICAgdGhpcy5zY2VuZSA9IHNjZW5lO1xuICAgIHRoaXMuY29udGFpbmVyLmFwcGVuZENoaWxkKHRoaXMuY2FudmFzKTtcbiAgICB0aGlzLnN0YXJ0ZWQgPSBmYWxzZTtcbiAgICB0aGlzLmluaXQgPSBmYWxzZTtcbiAgICB0aGlzLm1heEZQUyA9IG1heEZQUyB8fCAtMTtcbiAgICB0aGlzLiNsYXN0RnJhbWVUaW1lID0gMDtcbiAgICB0aGlzLmhhc0Vycm9yID0gZmFsc2U7XG4gICAgdGhpcy5mdWxsc2NyZWVuID0gZmFsc2U7XG4gICAgdGhpcy5mdWxscGFnZSA9IGZhbHNlO1xuXG4gICAgLy8gRXJyb3IgbWVzc2FnZSBzY3JlZW5cbiAgICB0aGlzLnNjZW5lRXJyb3IgPSBuZXcgRXJyb3JTY3JlZW4odGhpcyk7XG4gICAgdGhpcy5zY2VuZVByZXZpb3VzID0gdGhpcy5zY2VuZTtcbiAgICBcbiAgICAvLyBSZWFjdG9ycy9ldmVudHNcbiAgICB0aGlzLnJlYWN0b3IgPSBuZXcgUmVhY3RvckNhbnZhcygpO1xuICAgIHRoaXMucmVhY3Rvci5yZWdpc3RlckV2ZW50KFwibW91c2Vtb3ZlXCIpO1xuICAgIHRoaXMucmVhY3Rvci5yZWdpc3RlckV2ZW50KFwiY2xpY2tcIik7XG4gICAgdGhpcy5yZWFjdG9yLnJlZ2lzdGVyRXZlbnQoXCJtb3VzZWRvd25cIik7XG4gICAgdGhpcy5yZWFjdG9yLnJlZ2lzdGVyRXZlbnQoXCJtb3VzZXVwXCIpO1xuICAgIHRoaXMucmVhY3Rvci5yZWdpc3RlckV2ZW50KFwid2hlZWxcIik7XG4gICAgdGhpcy5yZWFjdG9yLnJlZ2lzdGVyRXZlbnQoXCJ0b3VjaHN0YXJ0XCIpO1xuICAgIHRoaXMucmVhY3Rvci5yZWdpc3RlckV2ZW50KFwidG91Y2hlbmRcIik7XG4gICAgdGhpcy5yZWFjdG9yLnJlZ2lzdGVyRXZlbnQoXCJ0b3VjaG1vdmVcIik7XG5cbiAgICBpZihhdXRvUmVzaXplKSB0aGlzLmF1dG9SZXNpemUoKTtcbiAgICB0aGlzLmNyZWF0ZUV2ZW50cygpO1xuXG4gICAgaWYoQ29uc3RhbnRzLlNldHRpbmcuRElTQUJMRV9PUFRJTUlaQVRJT05TKSB7XG4gICAgICBjb25zb2xlICYmIGNvbnNvbGUuaW5mbyhDb25zdGFudHMuU3RyaW5nLk5PVElDRV9NRVNTQUdFICsgXCIgXCIgKyBDb25zdGFudHMuU3RyaW5nLk9QVElNSVpBVElPTl9ESVNBQkxFRCk7XG4gICAgfVxuXG4gICAgaWYoQ29uc3RhbnRzLlNldHRpbmcuRElTQUJMRV9DT05UQUlORVJTX0NVVFRJTkcpIHtcbiAgICAgIGNvbnNvbGUgJiYgY29uc29sZS5pbmZvKENvbnN0YW50cy5TdHJpbmcuTk9USUNFX01FU1NBR0UgKyBcIiBcIiArIENvbnN0YW50cy5TdHJpbmcuQ09OVEFJTkVSX0NVVFRJTkdfRElTQUJMRUQpO1xuICAgIH1cbiAgfVxuXG4gIGRyYXcoKSB7XG4gICAgY29uc3QgY3R4ID0gdGhpcy5jYW52YXMuZ2V0Q29udGV4dChcIjJkXCIpO1xuICAgIHRoaXMuZHJhd0NsZWFyKGN0eCk7XG4gICAgdGhpcy5kcmF3U2NlbmUoY3R4KTtcbiAgfVxuXG4gIGRyYXdTY2VuZShjdHgpIHtcbiAgICBpZih0aGlzLnNjZW5lKSB7XG4gICAgICB0aGlzLnNjZW5lLnBhcmVudCA9IHRoaXM7XG4gICAgICB0aGlzLnNjZW5lLmNhbnZhcyA9IHRoaXM7XG5cbiAgICAgIHRyeSB7XG4gICAgICAgIGN0eC5zY2FsZShDb25zdGFudHMuU2V0dGluZy5QSVhFTF9SQVRJTywgQ29uc3RhbnRzLlNldHRpbmcuUElYRUxfUkFUSU8pO1xuICAgICAgICB0aGlzLnNjZW5lLmRyYXcoY3R4KTtcbiAgICAgIH0gY2F0Y2goZSkge1xuICAgICAgICB0aGlzLmhhc0Vycm9yID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5zY2VuZSA9IHRoaXMuc2NlbmVFcnJvcjtcbiAgICAgICAgdGhpcy5zY2VuZUVycm9yLmVycm9yVGV4dCA9IFwiXCIgKyBlLnN0YWNrO1xuICAgICAgICBjb25zb2xlLmVycm9yKENvbnN0YW50cy5TdHJpbmcuRVJST1JfTUVTU0FHRSArIFwiIFwiICsgQ29uc3RhbnRzLlN0cmluZy5FUlJPUl9NRVNTQUdFX0NBTlZBUyArIFwiXFxuXCIsIGUpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIGRyYXdDbGVhcihjdHgpIHtcbiAgICBVdGlscy5jbGVhcihjdHgpO1xuICB9XG5cbiAgc3RhcnREcmF3KGZ1bmMpIHtcbiAgICB0aGlzLnN0YXJ0ZWQgPSB0cnVlO1xuXG4gICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKHRpbWUgPT4ge1xuICAgICAgaWYodGhpcy5zdGFydGVkKSB7XG4gICAgICAgIGNvbnN0IG9mZnNldEZyYW1lID0gdGltZSAtIHRoaXMuI2xhc3RGcmFtZVRpbWU7XG5cbiAgICAgICAgdGhpcy5mdWxsc2NyZWVuID0gZG9jdW1lbnQuZnVsbHNjcmVlbkVsZW1lbnQgPT0gdGhpcy5jYW52YXMgfHwgZG9jdW1lbnQuZnVsbHNjcmVlbkVsZW1lbnQgPT0gdGhpcy5jb250YWluZXI7XG5cbiAgICAgICAgaWYoQ29uc3RhbnRzLlNldHRpbmcuRU5BQkxFX1BJWEVMX1JBVElPX1JFU0laSU5HKSB7XG4gICAgICAgICAgQ29uc3RhbnRzLlNldHRpbmcuUElYRUxfUkFUSU8gPSB3aW5kb3cuZGV2aWNlUGl4ZWxSYXRpbyAqIENvbnN0YW50cy5TZXR0aW5nLlJFU09MVVRJT05fU0NBTEU7IC8vIFVwZGF0ZSB0aGUgZGV2aWNlIHBpeGVsIHJhdGlvLCBvbmx5IGluIGZ1bGxzY3JlZW4gbW9kZS9mdWxscGFnZSBtb2RlXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgQ29uc3RhbnRzLlNldHRpbmcuUElYRUxfUkFUSU8gPSAxICogQ29uc3RhbnRzLlNldHRpbmcuUkVTT0xVVElPTl9TQ0FMRTtcbiAgICAgICAgfVxuXG4gICAgICAgIFV0aWxzLmF1dG9EUEkodGhpcy5jYW52YXMpO1xuXG4gICAgICAgIGlmKHRoaXMubWF4RlBTIDwgMSB8fCBvZmZzZXRGcmFtZSA+IDEwMDAgLyB0aGlzLm1heEZQUykge1xuICAgICAgICAgIHRoaXMuI2xhc3RGcmFtZVRpbWUgPSB0aW1lO1xuICAgICAgICAgIHRoaXMuZHJhdygpO1xuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICB0aGlzLnN0YXJ0RHJhdyhmdW5jKTtcbiAgICAgICAgaWYoZnVuYykgZnVuYygpO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgc3RvcERyYXcoKSB7XG4gICAgdGhpcy5zdGFydGVkID0gZmFsc2U7XG4gIH1cblxuICBhcHBlbmRUbyhlbGVtZW50KSB7XG4gICAgZWxlbWVudC5hcHBlbmRDaGlsZCh0aGlzLmNvbnRhaW5lcik7XG4gIH1cblxuICByZW1vdmUoZWxlbWVudCkge1xuICAgIGVsZW1lbnQucmVtb3ZlQ2hpbGQodGhpcy5jb250YWluZXIpO1xuICAgIHRoaXMuY29udGFpbmVyLnJlbW92ZUNoaWxkKHRoaXMuY2FudmFzKTtcbiAgfVxuXG4gIHRvZ2dsZUZ1bGxzY3JlZW4oKSB7XG4gICAgVXRpbHMudG9nZ2xlRnVsbHNjcmVlbih0aGlzLmNhbnZhcywgdGhpcy5jb250YWluZXIpO1xuICB9XG5cbiAgdG9nZ2xlRnVsbHBhZ2UoKSB7XG4gICAgVXRpbHMudG9nZ2xlRnVsbHBhZ2UodGhpcy5jYW52YXMsIHRoaXMuY29udGFpbmVyKTtcbiAgICB0aGlzLmZ1bGxwYWdlID0gIXRoaXMuZnVsbHBhZ2U7XG4gIH1cblxuICBhdXRvUmVzaXplKCkge1xuICAgIFV0aWxzLmVuYWJsZUF1dG9SZXNpemVDYW52YXModGhpcy5jYW52YXMsIHRoaXMuY29udGFpbmVyLCB0aGlzLndpZHRoLCB0aGlzLmhlaWdodCk7XG4gIH1cblxuICBnZXQgeCgpIHtcbiAgICByZXR1cm4gMDtcbiAgfVxuXG4gIGdldCB5KCkge1xuICAgIHJldHVybiAwO1xuICB9XG5cbiAgZ2V0IHdpZHRoKCkge1xuICAgIHJldHVybiB0aGlzLmNhbnZhcyA/IFV0aWxzLmdldENhbnZhc1dpZHRoKHRoaXMuY2FudmFzKSA6IHRoaXMuI193aWR0aDtcbiAgfVxuXG4gIGdldCBoZWlnaHQoKSB7XG4gICAgcmV0dXJuIHRoaXMuY2FudmFzID8gVXRpbHMuZ2V0Q2FudmFzSGVpZ2h0KHRoaXMuY2FudmFzKSA6IHRoaXMuI19oZWlnaHQ7XG4gIH1cblxuICBnZXQgc3R5bGUoKSB7XG4gICAgcmV0dXJuIHRoaXMuY2FudmFzID8gdGhpcy5jYW52YXMuc3R5bGUgOiBudWxsO1xuICB9XG5cbiAgc2V0IHdpZHRoKHdpZHRoKSB7XG4gICAgaWYod2lkdGggIT0gdGhpcy4jX3dpZHRoKSB7XG4gICAgICB0aGlzLiNfd2lkdGggPSB3aWR0aDtcbiAgICAgIHRoaXMuY2FudmFzLndpZHRoID0gd2lkdGg7XG4gICAgICB0aGlzLnNjZW5lICYmIHRoaXMuc2NlbmUucmVhY3Rvci5kaXNwYXRjaEV2ZW50KFwib25DaGFuZ2VcIiwgdGhpcyk7XG4gICAgfVxuICB9XG5cbiAgc2V0IGhlaWdodChoZWlnaHQpIHtcbiAgICBpZihoZWlnaHQgIT0gdGhpcy4jX2hlaWdodCkge1xuICAgICAgdGhpcy4jX2hlaWdodCA9IGhlaWdodDtcbiAgICAgIHRoaXMuY2FudmFzLmhlaWdodCA9IGhlaWdodDtcbiAgICAgIHRoaXMuc2NlbmUgJiYgdGhpcy5zY2VuZS5yZWFjdG9yLmRpc3BhdGNoRXZlbnQoXCJvbkNoYW5nZVwiLCB0aGlzKTtcbiAgICB9XG4gIH1cblxuICBnZXRDb250ZXh0KGNvbnRleHQpIHtcbiAgICByZXR1cm4gdGhpcy5jYW52YXMgPyB0aGlzLmNhbnZhcy5nZXRDb250ZXh0KGNvbnRleHQgPyBjb250ZXh0IDogXCIyZFwiKSA6IG51bGw7XG4gIH1cblxuICBjcmVhdGVFdmVudHMoKSB7XG4gICAgaWYoIXRoaXMuaW5pdCAmJiB0aGlzLmNhbnZhcykge1xuICAgICAgW1wibW91c2Vtb3ZlXCIsIFwiY2xpY2tcIiwgXCJtb3VzZWRvd25cIiwgXCJtb3VzZXVwXCIsIFwid2hlZWxcIl0uZm9yRWFjaChldmVudE5hbWUgPT4ge1xuICAgICAgICB0aGlzLmNhbnZhcy5hZGRFdmVudExpc3RlbmVyKGV2ZW50TmFtZSwgZXZlbnQgPT4ge1xuICAgICAgICAgIGNvbnN0IG1vdXNlUG9zaXRpb24gPSB0aGlzLmdldE1vdXNlUG9zKGV2ZW50KTtcbiAgICAgICAgICB0aGlzLmRvRXZlbnRzKGV2ZW50LCBldmVudE5hbWUsIG1vdXNlUG9zaXRpb24pO1xuICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIH0sIGZhbHNlKTtcbiAgICAgIH0pO1xuXG4gICAgICBbXCJ0b3VjaHN0YXJ0XCIsIFwidG91Y2htb3ZlXCIsIFwidG91Y2hlbmRcIl0uZm9yRWFjaChldmVudE5hbWUgPT4ge1xuICAgICAgICB0aGlzLmNhbnZhcy5hZGRFdmVudExpc3RlbmVyKGV2ZW50TmFtZSwgZXZlbnQgPT4ge1xuICAgICAgICAgIGNvbnN0IGNoYW5nZWRUb3VjaGVzID0gZXZlbnQuY2hhbmdlZFRvdWNoZXNbMF07XG4gICAgICAgICAgY29uc3QgcG9zaXRpb24gPSB0aGlzLmdldE1vdXNlUG9zKGNoYW5nZWRUb3VjaGVzKTtcbiAgICAgICAgICB0aGlzLmRvRXZlbnRzKGV2ZW50LCBldmVudE5hbWUsIHBvc2l0aW9uKTtcbiAgICAgICAgfSk7XG4gICAgICB9KTtcblxuICAgICAgdGhpcy5pbml0ID0gdHJ1ZTtcbiAgICB9XG4gIH1cblxuICBkb0V2ZW50cyhldmVudCwgZXZlbnROYW1lLCBwb3NpdGlvbikge1xuICAgIGNvbnN0IGNvbXBvbmVudHMgPSB0aGlzLmdldENvbXBvbmVudHNBdFBvc2l0aW9uKHBvc2l0aW9uKTsgLy8gR2V0IGFsbCBlbGVtZW50cyBhdCB0aGUgY3VycmVudCBwb3NpdGlvblxuICAgIHRoaXMucmVhY3Rvci5kaXNwYXRjaEV2ZW50KGV2ZW50TmFtZSwgZXZlbnQsIGZhbHNlKTsgLy8gRGlzcGF0Y2ggdG8gYWxsIGNvbXBvbmVudHMgdG8gZGlzYWJsZSB0aGVtIChjYWxsIHdpdGggZmFsc2UpXG4gICAgWy4uLmNvbXBvbmVudHNdLnJldmVyc2UoKS5mb3JFYWNoKGNvbXBvbmVudCA9PiB0aGlzLnJlYWN0b3IuZGlzcGF0Y2hFdmVudENvbXBvbmVudChldmVudE5hbWUsIGNvbXBvbmVudCwgZXZlbnQsIHRydWUpKTsgLy8gRGlzcGF0Y2ggdG8gY29tcG9uZW50IGRldGVjdGVkIHRvIGVuYWJsZSB0aGVtIChjYWxsIHdpdGggdHJ1ZSlcbiAgfVxuXG4gIGFkZEV2ZW50TGlzdGVuZXIoZXZlbnQsIGNvbXBvbmVudCwgY2FsbGJhY2spIHtcbiAgICB0aGlzLnJlYWN0b3IuYWRkRXZlbnRMaXN0ZW5lcihldmVudCwgY29tcG9uZW50LCBjYWxsYmFjayk7XG4gIH1cbiAgXG4gIGdldE1vdXNlUG9zKGV2ZW50KSB7XG4gICAgcmV0dXJuIFV0aWxzLmdldE1vdXNlUG9zKHRoaXMuY2FudmFzLCBldmVudCk7XG4gIH1cblxuICBnZXRBbGxDb21wb25lbnRzKHN0YXJ0ID0gdGhpcy5zY2VuZSkge1xuICAgIHJldHVybiB0aGlzLnNjZW5lLmdldEFsbENvbXBvbmVudHMoc3RhcnQpO1xuICB9XG5cbiAgZ2V0Q29tcG9uZW50c0F0UG9zaXRpb24obW91c2VQb3NpdGlvbiwgc3RhcnQgPSB0aGlzLnNjZW5lKSB7XG4gICAgY29uc3QgYWxsQ29tcG9uZW50cyA9IHRoaXMuc2NlbmUuZ2V0Q29tcG9uZW50c1RyZWUoc3RhcnQpO1xuICAgIGNvbnN0IHJlc3VsdCA9IFtzdGFydF07XG5cbiAgICBpZihhbGxDb21wb25lbnRzLmNoaWxkcykge1xuICAgICAgYWxsQ29tcG9uZW50cy5jaGlsZHMuc29ydChTY2VuZS5zb3J0Q29tcG9uZW50c1RyZWUpLnJldmVyc2UoKS5zb21lKGNoaWxkID0+IHtcbiAgICAgICAgaWYoY2hpbGQuY29tcG9uZW50LmlzSW5zaWRlKG1vdXNlUG9zaXRpb24pICYmICFjaGlsZC5jb21wb25lbnQuaGlkZGVuICYmICFjaGlsZC5jb21wb25lbnQuZGlzYWJsZWQpIHtcbiAgICAgICAgICByZXN1bHQucHVzaCguLi50aGlzLmdldENvbXBvbmVudHNBdFBvc2l0aW9uKG1vdXNlUG9zaXRpb24sIGNoaWxkLmNvbXBvbmVudCkpO1xuICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9XG5cbiAgICByZXR1cm4gcmVzdWx0O1xuICB9XG59IiwiLypcbiAqIENvcHlyaWdodCAoQykgMjAyMCBFbGlhc3RpayAoZWxpYXN0aWtzb2Z0cy5jb20pXG4gKlxuICogVGhpcyBmaWxlIGlzIHBhcnQgb2YgXCJKU0dhbWVUb29sc1wiLlxuICpcbiAqIFwiSlNHYW1lVG9vbHNcIiBpcyBmcmVlIHNvZnR3YXJlOiB5b3UgY2FuIHJlZGlzdHJpYnV0ZSBpdCBhbmQvb3IgbW9kaWZ5XG4gKiBpdCB1bmRlciB0aGUgdGVybXMgb2YgdGhlIEdOVSBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlIGFzIHB1Ymxpc2hlZCBieVxuICogdGhlIEZyZWUgU29mdHdhcmUgRm91bmRhdGlvbiwgZWl0aGVyIHZlcnNpb24gMyBvZiB0aGUgTGljZW5zZSwgb3JcbiAqIChhdCB5b3VyIG9wdGlvbikgYW55IGxhdGVyIHZlcnNpb24uXG4gKlxuICogXCJKU0dhbWVUb29sc1wiIGlzIGRpc3RyaWJ1dGVkIGluIHRoZSBob3BlIHRoYXQgaXQgd2lsbCBiZSB1c2VmdWwsXG4gKiBidXQgV0lUSE9VVCBBTlkgV0FSUkFOVFk7IHdpdGhvdXQgZXZlbiB0aGUgaW1wbGllZCB3YXJyYW50eSBvZlxuICogTUVSQ0hBTlRBQklMSVRZIG9yIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFLiAgU2VlIHRoZVxuICogR05VIEdlbmVyYWwgUHVibGljIExpY2Vuc2UgZm9yIG1vcmUgZGV0YWlscy5cbiAqXG4gKiBZb3Ugc2hvdWxkIGhhdmUgcmVjZWl2ZWQgYSBjb3B5IG9mIHRoZSBHTlUgR2VuZXJhbCBQdWJsaWMgTGljZW5zZVxuICogYWxvbmcgd2l0aCBcIkpTR2FtZVRvb2xzXCIuICBJZiBub3QsIHNlZSA8aHR0cDovL3d3dy5nbnUub3JnL2xpY2Vuc2VzLz4uXG4gKi9cbmltcG9ydCBDb21wb25lbnQgZnJvbSBcIi4vQ29tcG9uZW50XCI7XG5pbXBvcnQgQ29uc3RhbnRzIGZyb20gXCIuL0NvbnN0YW50c1wiO1xuaW1wb3J0IFV0aWxzIGZyb20gXCIuL1V0aWxzXCI7XG5pbXBvcnQgU3R5bGUgZnJvbSBcIi4vU3R5bGVcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ2lyY2xlIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgc2VsZWN0YWJsZSA9IGZhbHNlO1xuXG4gIGNvbnN0cnVjdG9yKHgsIHksIHdpZHRoLCBzdHlsZSkge1xuICAgIHN1cGVyKHgsIHksIHdpZHRoLCB3aWR0aCwgc3R5bGUpO1xuICB9XG5cbiAgZHJhdyhjb250ZXh0KSB7XG4gICAgaWYodGhpcy5oaWRkZW4pIHJldHVybjtcbiAgICBzdXBlci5kcmF3KGNvbnRleHQpO1xuXG4gICAgY29uc3QgY2FudmFzID0gY29udGV4dC5jYW52YXM7XG4gICAgY29uc3QgY3R4ID0gY2FudmFzLmdldENvbnRleHQoXCIyZFwiKTtcbiAgICBcbiAgICBVdGlscy5kcmF3Q2lyY2xlKGN0eCwgdGhpcy54LCB0aGlzLnksIHRoaXMud2lkdGgsIHRoaXMuc3R5bGUubGluZVdpZHRoLCB0aGlzLnN0eWxlLmNvbG9yLCB0aGlzLnN0eWxlLmxpbmVDYXAsIHRoaXMuc3R5bGUuZmlsbCwgdGhpcy5zdHlsZS5maWxsQ29sb3IpO1xuXG4gICAgdGhpcy5pbml0ID0gdHJ1ZTtcbiAgfVxuXG4gIGdldCB3aWR0aCgpIHtcbiAgICByZXR1cm4gc3VwZXIud2lkdGggKyB0aGlzLnN0eWxlLmxpbmVXaWR0aDtcbiAgfVxuXG4gIGdldCBoZWlnaHQoKSB7XG4gICAgcmV0dXJuIHN1cGVyLmhlaWdodCArIHRoaXMuc3R5bGUubGluZVdpZHRoO1xuICB9XG5cbiAgc2V0IHdpZHRoKHdpZHRoKSB7XG4gICAgc3VwZXIud2lkdGggPSB3aWR0aDtcbiAgfVxuXG4gIHNldCBoZWlnaHQoaGVpZ2h0KSB7XG4gICAgc3VwZXIuaGVpZ2h0ID0gaGVpZ2h0O1xuICB9XG5cbiAgZ2V0IGRlZmF1bHRTdHlsZSgpIHtcbiAgICByZXR1cm4gbmV3IFN0eWxlKHtcbiAgICAgIFwibGluZVdpZHRoXCI6IENvbnN0YW50cy5TZXR0aW5nLkNJUkNMRV9ERUZBVUxUX0xJTkVfU0laRSxcbiAgICAgIFwiY29sb3JcIjogQ29uc3RhbnRzLlNldHRpbmcuQ0lSQ0xFX0RFRkFVTFRfQ09MT1IsXG4gICAgICBcImZpbGxcIjogQ29uc3RhbnRzLlNldHRpbmcuQ0lSQ0xFX0RFRkFVTFRfRklMTCxcbiAgICAgIFwibGluZUNhcFwiOiBDb25zdGFudHMuU2V0dGluZy5DSVJDTEVfREVGQVVMVF9MSU5FX0NBUCxcbiAgICAgIFwiZmlsbENvbG9yXCI6IENvbnN0YW50cy5TZXR0aW5nLkNJUkNMRV9ERUZBVUxUX0ZJTExfQ09MT1JcbiAgICB9KTtcbiAgfVxufSIsIi8qXG4gKiBDb3B5cmlnaHQgKEMpIDIwMjAgRWxpYXN0aWsgKGVsaWFzdGlrc29mdHMuY29tKVxuICpcbiAqIFRoaXMgZmlsZSBpcyBwYXJ0IG9mIFwiSlNHYW1lVG9vbHNcIi5cbiAqXG4gKiBcIkpTR2FtZVRvb2xzXCIgaXMgZnJlZSBzb2Z0d2FyZTogeW91IGNhbiByZWRpc3RyaWJ1dGUgaXQgYW5kL29yIG1vZGlmeVxuICogaXQgdW5kZXIgdGhlIHRlcm1zIG9mIHRoZSBHTlUgR2VuZXJhbCBQdWJsaWMgTGljZW5zZSBhcyBwdWJsaXNoZWQgYnlcbiAqIHRoZSBGcmVlIFNvZnR3YXJlIEZvdW5kYXRpb24sIGVpdGhlciB2ZXJzaW9uIDMgb2YgdGhlIExpY2Vuc2UsIG9yXG4gKiAoYXQgeW91ciBvcHRpb24pIGFueSBsYXRlciB2ZXJzaW9uLlxuICpcbiAqIFwiSlNHYW1lVG9vbHNcIiBpcyBkaXN0cmlidXRlZCBpbiB0aGUgaG9wZSB0aGF0IGl0IHdpbGwgYmUgdXNlZnVsLFxuICogYnV0IFdJVEhPVVQgQU5ZIFdBUlJBTlRZOyB3aXRob3V0IGV2ZW4gdGhlIGltcGxpZWQgd2FycmFudHkgb2ZcbiAqIE1FUkNIQU5UQUJJTElUWSBvciBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRS4gIFNlZSB0aGVcbiAqIEdOVSBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlIGZvciBtb3JlIGRldGFpbHMuXG4gKlxuICogWW91IHNob3VsZCBoYXZlIHJlY2VpdmVkIGEgY29weSBvZiB0aGUgR05VIEdlbmVyYWwgUHVibGljIExpY2Vuc2VcbiAqIGFsb25nIHdpdGggXCJKU0dhbWVUb29sc1wiLiAgSWYgbm90LCBzZWUgPGh0dHA6Ly93d3cuZ251Lm9yZy9saWNlbnNlcy8+LlxuICovXG5pbXBvcnQgQ29tcG9uZW50IGZyb20gXCIuL0NvbXBvbmVudFwiO1xuaW1wb3J0IENvbnRhaW5lciBmcm9tIFwiLi9Db250YWluZXJcIjtcbmltcG9ydCBVdGlscyBmcm9tIFwiLi9VdGlsc1wiO1xuaW1wb3J0IENvbnN0YW50cyBmcm9tIFwiLi9Db25zdGFudHNcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ29sIGV4dGVuZHMgQ29udGFpbmVyIHtcbiAgc2VsZWN0YWJsZSA9IGZhbHNlO1xuICAjX2lubmVySGVpZ2h0ID0gMDtcbiAgI19pbm5lcldpZHRoID0gMDtcblxuICBjb25zdHJ1Y3Rvcih4LCB5LCBtYXhXaWR0aCwgbWF4SGVpZ2h0LCBzdHlsZSwgLi4uY29tcG9uZW50cykge1xuICAgIHN1cGVyKHgsIHksIG1heFdpZHRoLCBtYXhIZWlnaHQsIHN0eWxlLCAuLi5jb21wb25lbnRzKTtcblxuICAgIGlmKCFDb25zdGFudHMuU2V0dGluZy5ESVNBQkxFX0VYUEVSSU1FTlRBTF9PUFRJTUlaQVRJT05TKSB7XG4gICAgICB0aGlzLnVwZGF0ZUlubmVyV2lkdGgoKTtcbiAgICAgIHRoaXMudXBkYXRlSW5uZXJIZWlnaHQoKTtcbiAgXG4gICAgICB0aGlzLmFkZENoYW5nZUFjdGlvbigoKSA9PiB7XG4gICAgICAgIHRoaXMudXBkYXRlSW5uZXJXaWR0aCgpO1xuICAgICAgICB0aGlzLnVwZGF0ZUlubmVySGVpZ2h0KCk7XG4gICAgICB9KTtcbiAgICB9XG4gIH1cblxuICBkcmF3KGNvbnRleHQpIHtcbiAgICBpZih0aGlzLmhpZGRlbikgcmV0dXJuO1xuICAgIHN1cGVyLmRyYXcoY29udGV4dCk7XG5cbiAgICBjb25zdCBjYW52YXMgPSBjb250ZXh0LmNhbnZhcztcbiAgICBjb25zdCBjdHggPSBjYW52YXMuZ2V0Q29udGV4dChcIjJkXCIpO1xuICAgIGN0eC5zYXZlKCk7XG5cbiAgICBsZXQgY3R4VGVtcCA9IGN0eDtcblxuICAgIGlmKHRoaXMuaXNDdXR0aW5nKSB7XG4gICAgICBjdHhUZW1wID0gdGhpcy5jYW52YXNUbXAuZ2V0Q29udGV4dChcIjJkXCIpO1xuICAgICAgY3R4VGVtcC5zY2FsZShDb25zdGFudHMuU2V0dGluZy5QSVhFTF9SQVRJTywgQ29uc3RhbnRzLlNldHRpbmcuUElYRUxfUkFUSU8pO1xuICAgIH1cbiAgXG4gICAgaWYoc3VwZXIuY29tcG9uZW50cyAhPSBudWxsKSB7XG4gICAgICBsZXQgY3VycmVudFkgPSB0aGlzLnN0eWxlLnBhZGRpbmc7XG5cbiAgICAgIHN1cGVyLmNvbXBvbmVudHMuZm9yRWFjaChjb21wb25lbnQgPT4ge1xuICAgICAgICBjdXJyZW50WSA9IHRoaXMuZHJhd0NvbXBvbmVudChjb21wb25lbnQsIGN1cnJlbnRZLCBjdHhUZW1wKTtcbiAgICAgIH0pO1xuICAgIH1cbiAgICBcbiAgICBpZih0aGlzLmlzQ3V0dGluZykge1xuICAgICAgVXRpbHMuZHJhd0ltYWdlRGF0YShjdHgsIHRoaXMuY2FudmFzVG1wLCB0aGlzLngsIHRoaXMueSwgdGhpcy53aWR0aCwgdGhpcy5oZWlnaHQsIHRoaXMueCAqIENvbnN0YW50cy5TZXR0aW5nLlBJWEVMX1JBVElPLCB0aGlzLnkgKiBDb25zdGFudHMuU2V0dGluZy5QSVhFTF9SQVRJTywgdGhpcy53aWR0aCAqIENvbnN0YW50cy5TZXR0aW5nLlBJWEVMX1JBVElPLCB0aGlzLmhlaWdodCAqIENvbnN0YW50cy5TZXR0aW5nLlBJWEVMX1JBVElPKTtcbiAgICB9XG4gICAgXG4gICAgc3VwZXIuZHJhd1Njcm9sbGJhcnMoY3R4KTtcbiAgICBcbiAgICBjdHgucmVzdG9yZSgpO1xuICB9XG5cbiAgZHJhd0NvbXBvbmVudChjb21wb25lbnQsIGN1cnJlbnRZLCBjdHgpIHtcbiAgICBpZihjb21wb25lbnQgaW5zdGFuY2VvZiBDb21wb25lbnQpIHtcbiAgICAgIGNvbXBvbmVudC54ID0gdGhpcy5zdHlsZS5wYWRkaW5nIC0gdGhpcy5vZmZzZXRTY3JvbGxYO1xuICAgICAgY29tcG9uZW50LnkgPSBjdXJyZW50WSAtIHRoaXMub2Zmc2V0U2Nyb2xsWTtcbiAgICAgIFxuICAgICAgaWYoIWNvbXBvbmVudC5oaWRkZW4pIHtcbiAgICAgICAgaWYodGhpcy5pc0NvbXBvbmVudFZpc2libGUoY29tcG9uZW50KSkge1xuICAgICAgICAgIGNvbXBvbmVudC5kcmF3KGN0eCk7XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgIGN1cnJlbnRZICs9IGNvbXBvbmVudC5oZWlnaHQgKyB0aGlzLnN0eWxlLnNwYWNlQmV0d2VlbkNvbXBvbmVudHM7XG4gICAgICB9XG4gICAgfVxuICAgIFxuICAgIHJldHVybiBjdXJyZW50WTtcbiAgfVxuXG4gIHVwZGF0ZUlubmVySGVpZ2h0KCkge1xuICAgIGxldCB0b3RhbEhlaWdodCA9IDA7XG4gICAgc3VwZXIuY29tcG9uZW50cy5mb3JFYWNoKGNvbXBvbmVudCA9PiB7IGlmKCFjb21wb25lbnQuaGlkZGVuKSB0b3RhbEhlaWdodCArPSBjb21wb25lbnQuaGVpZ2h0IH0pO1xuICAgIHRoaXMuI19pbm5lckhlaWdodCA9IHRvdGFsSGVpZ2h0ICsgdGhpcy5zdHlsZS5zcGFjZUJldHdlZW5Db21wb25lbnRzICogKHN1cGVyLmNvbXBvbmVudHMubGVuZ3RoIC0gMSkgKyB0aGlzLnN0eWxlLnBhZGRpbmc7XG4gIH1cblxuICB1cGRhdGVJbm5lcldpZHRoKCkge1xuICAgIGxldCBtYXhXaWR0aCA9IDA7XG4gICAgc3VwZXIuY29tcG9uZW50cy5mb3JFYWNoKGNvbXBvbmVudCA9PiB7IGlmKGNvbXBvbmVudC53aWR0aCA+IG1heFdpZHRoICYmICFjb21wb25lbnQuaGlkZGVuKSBtYXhXaWR0aCA9IGNvbXBvbmVudC53aWR0aDsgfSk7XG4gICAgdGhpcy4jX2lubmVyV2lkdGggPSBtYXhXaWR0aCArIHRoaXMuc3R5bGUucGFkZGluZztcbiAgfVxuXG4gIGdldCBpbm5lckhlaWdodCgpIHtcbiAgICBpZihDb25zdGFudHMuU2V0dGluZy5ESVNBQkxFX0VYUEVSSU1FTlRBTF9PUFRJTUlaQVRJT05TKSB0aGlzLnVwZGF0ZUlubmVySGVpZ2h0KCk7XG4gICAgcmV0dXJuIHRoaXMuI19pbm5lckhlaWdodDtcbiAgfVxuXG4gIGdldCBpbm5lcldpZHRoKCkge1xuICAgIGlmKENvbnN0YW50cy5TZXR0aW5nLkRJU0FCTEVfRVhQRVJJTUVOVEFMX09QVElNSVpBVElPTlMpIHRoaXMudXBkYXRlSW5uZXJXaWR0aCgpO1xuICAgIHJldHVybiB0aGlzLiNfaW5uZXJXaWR0aDtcbiAgfVxuXG4gIGdldCB3aWR0aCgpIHtcbiAgICBjb25zdCB3aWR0aCA9IHRoaXMuaW5uZXJXaWR0aCB8fCAodGhpcy5wYXJlbnQgJiYgdGhpcy5wYXJlbnQud2lkdGgpO1xuICAgIGNvbnN0IG1pbiA9IHRoaXMubWF4V2lkdGggIT0gbnVsbCA/IE1hdGgubWluKHRoaXMubWF4V2lkdGgsIHdpZHRoKSA6IG51bGw7XG4gICAgcmV0dXJuIHRoaXMubWluV2lkdGggIT0gbnVsbCA/IE1hdGgubWF4KHRoaXMubWluV2lkdGgsIG1pbiAhPSBudWxsID8gbWluIDogd2lkdGgpIDogbWluICE9IG51bGwgPyBtaW4gOiB3aWR0aDtcbiAgfVxuXG4gIGdldCBoZWlnaHQoKSB7XG4gICAgY29uc3QgaGVpZ2h0ID0gdGhpcy5pbm5lckhlaWdodCB8fCAodGhpcy5wYXJlbnQgJiYgdGhpcy5wYXJlbnQuaGVpZ2h0KTtcbiAgICBjb25zdCBtaW4gPSB0aGlzLm1heEhlaWdodCAhPSBudWxsID8gTWF0aC5taW4odGhpcy5tYXhIZWlnaHQsIGhlaWdodCkgOiBudWxsO1xuICAgIHJldHVybiB0aGlzLm1pbkhlaWdodCAhPSBudWxsID8gTWF0aC5tYXgodGhpcy5taW5IZWlnaHQsIG1pbiAhPSBudWxsID8gbWluIDogaGVpZ2h0KSA6IG1pbiAhPSBudWxsID8gbWluIDogaGVpZ2h0O1xuICB9XG5cbiAgZ2V0IGRlZmF1bHRTdHlsZSgpIHtcbiAgICByZXR1cm4gc3VwZXIuZGVmYXVsdFN0eWxlO1xuICB9XG59IiwiLypcbiAqIENvcHlyaWdodCAoQykgMjAyMCBFbGlhc3RpayAoZWxpYXN0aWtzb2Z0cy5jb20pXG4gKlxuICogVGhpcyBmaWxlIGlzIHBhcnQgb2YgXCJKU0dhbWVUb29sc1wiLlxuICpcbiAqIFwiSlNHYW1lVG9vbHNcIiBpcyBmcmVlIHNvZnR3YXJlOiB5b3UgY2FuIHJlZGlzdHJpYnV0ZSBpdCBhbmQvb3IgbW9kaWZ5XG4gKiBpdCB1bmRlciB0aGUgdGVybXMgb2YgdGhlIEdOVSBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlIGFzIHB1Ymxpc2hlZCBieVxuICogdGhlIEZyZWUgU29mdHdhcmUgRm91bmRhdGlvbiwgZWl0aGVyIHZlcnNpb24gMyBvZiB0aGUgTGljZW5zZSwgb3JcbiAqIChhdCB5b3VyIG9wdGlvbikgYW55IGxhdGVyIHZlcnNpb24uXG4gKlxuICogXCJKU0dhbWVUb29sc1wiIGlzIGRpc3RyaWJ1dGVkIGluIHRoZSBob3BlIHRoYXQgaXQgd2lsbCBiZSB1c2VmdWwsXG4gKiBidXQgV0lUSE9VVCBBTlkgV0FSUkFOVFk7IHdpdGhvdXQgZXZlbiB0aGUgaW1wbGllZCB3YXJyYW50eSBvZlxuICogTUVSQ0hBTlRBQklMSVRZIG9yIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFLiAgU2VlIHRoZVxuICogR05VIEdlbmVyYWwgUHVibGljIExpY2Vuc2UgZm9yIG1vcmUgZGV0YWlscy5cbiAqXG4gKiBZb3Ugc2hvdWxkIGhhdmUgcmVjZWl2ZWQgYSBjb3B5IG9mIHRoZSBHTlUgR2VuZXJhbCBQdWJsaWMgTGljZW5zZVxuICogYWxvbmcgd2l0aCBcIkpTR2FtZVRvb2xzXCIuICBJZiBub3QsIHNlZSA8aHR0cDovL3d3dy5nbnUub3JnL2xpY2Vuc2VzLz4uXG4gKi9cbmltcG9ydCBDb25zdGFudHMgZnJvbSBcIi4vQ29uc3RhbnRzXCI7XG5pbXBvcnQgU3R5bGUgZnJvbSBcIi4vU3R5bGVcIjtcbmltcG9ydCBSZWFjdG9yIGZyb20gXCIuL1JlYWN0b3JcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ29tcG9uZW50IHtcbiAgc2VsZWN0YWJsZSA9IHRydWU7XG4gICNfd2lkdGggPSAwO1xuICAjX2hlaWdodCA9IDA7XG4gICNfeCA9IDA7XG4gICNfeSA9IDA7XG4gICNfZGlzYWJsZWQgPSBmYWxzZTtcbiAgI19zZWxlY3RlZCA9IGZhbHNlO1xuICAjX3N0eWxlO1xuXG4gIGNvbnN0cnVjdG9yKHgsIHksIHdpZHRoLCBoZWlnaHQsIHN0eWxlKSB7XG4gICAgdGhpcy4jX3ggPSB4IHx8IDA7XG4gICAgdGhpcy4jX3kgPSB5IHx8IDA7XG4gICAgdGhpcy5kZWx0YVggPSAwO1xuICAgIHRoaXMuZGVsdGFZID0gMDtcbiAgICB0aGlzLiNfd2lkdGggPSB3aWR0aDtcbiAgICB0aGlzLiNfaGVpZ2h0ID0gaGVpZ2h0O1xuICAgIHRoaXMuY2FudmFzO1xuICAgIHRoaXMucGFyZW50O1xuXG4gICAgLy8gU3R5bGVcbiAgICB0aGlzLnN0eWxlID0gc3R5bGU7XG4gICAgXG4gICAgLy8gRnVuY3Rpb25zIHRyaWdnZXJlZCBieSBldmVudHNcbiAgICB0aGlzLnJlYWN0b3IgPSBuZXcgUmVhY3RvcigpO1xuICAgIHRoaXMucmVhY3Rvci5yZWdpc3RlckV2ZW50KFwib25DbGlja1wiKTtcbiAgICB0aGlzLnJlYWN0b3IucmVnaXN0ZXJFdmVudChcIm9uSG92ZXJcIik7XG4gICAgdGhpcy5yZWFjdG9yLnJlZ2lzdGVyRXZlbnQoXCJvbkRvd25cIik7XG4gICAgdGhpcy5yZWFjdG9yLnJlZ2lzdGVyRXZlbnQoXCJvblNjcm9sbFwiKTtcbiAgICB0aGlzLnJlYWN0b3IucmVnaXN0ZXJFdmVudChcIm9uTW92ZVwiKTtcbiAgICB0aGlzLnJlYWN0b3IucmVnaXN0ZXJFdmVudChcIm9uVXBcIik7XG4gICAgdGhpcy5yZWFjdG9yLnJlZ2lzdGVyRXZlbnQoXCJvbkNoYW5nZVwiKTtcblxuICAgIC8vIFN0YXRlXG4gICAgdGhpcy5pbml0ID0gZmFsc2U7XG4gICAgdGhpcy5oYXNJbml0RXZlbnRzID0gZmFsc2U7XG4gICAgdGhpcy4jX3NlbGVjdGVkID0gZmFsc2U7XG4gICAgdGhpcy5jbGlja2VkID0gZmFsc2U7XG4gICAgdGhpcy5ob3ZlcmVkID0gZmFsc2U7XG4gICAgdGhpcy4jX2Rpc2FibGVkID0gZmFsc2U7XG4gICAgdGhpcy5tb3ZhYmxlID0gZmFsc2U7XG5cbiAgICAvLyBTY3JvbGwgc3RhdGVcbiAgICB0aGlzLm9mZnNldFNjcm9sbFggPSAwO1xuICAgIHRoaXMub2Zmc2V0U2Nyb2xsWSA9IDA7XG5cbiAgICAvLyBNb3ZlIGV2ZW50XG4gICAgdGhpcy5vZmZzZXRNb3ZlWCA9IDA7XG4gICAgdGhpcy5vZmZzZXRNb3ZlWSA9IDA7XG4gICAgdGhpcy5tb3ZlRXZlbnRTdGFydFggPSAwO1xuICAgIHRoaXMubW92ZUV2ZW50U3RhcnRZID0gMDtcblxuICAgIC8vIFRvdWNoIGV2ZW50c1xuICAgIHRoaXMudG91Y2hFdmVudFN0YXJ0WCA9IDA7XG4gICAgdGhpcy50b3VjaEV2ZW50U3RhcnRZID0gMDtcbiAgICB0aGlzLnRvdWNoRXZlbnRTdGFydFRpbWVzdGFtcCA9IDA7XG5cbiAgICB0aGlzLnRvb2x0aXA7XG4gICAgdGhpcy5pbml0RXZlbnRzKCk7XG5cbiAgICB0aGlzLmFkZE1vdmVBY3Rpb24oKGRlbHRhWCwgZGVsdGFZKSA9PiB7XG4gICAgICBpZih0aGlzLm1vdmFibGUgJiYgIXRoaXMuZGlzYWJsZWQgJiYgdGhpcy5jbGlja2VkKSB7XG4gICAgICAgIHRoaXMuZGVsdGFYIC09IGRlbHRhWDtcbiAgICAgICAgdGhpcy5kZWx0YVkgLT0gZGVsdGFZO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgaW5pdEV2ZW50cygpIHtcbiAgICBpZighdGhpcy5oYXNJbml0RXZlbnRzICYmIHRoaXMuY2FudmFzICE9IG51bGwpIHtcbiAgICAgIHRoaXMuY2FudmFzLmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZW1vdmVcIiwgdGhpcywgKGV2ZW50LCByZXN1bHQpID0+IHtcbiAgICAgICAgaWYoIXRoaXMuZGlzYWJsZWQpIHtcbiAgICAgICAgICBjb25zdCBtb3VzZVBvc2l0aW9uID0gdGhpcy5nZXRNb3VzZVBvcyhldmVudCk7XG5cbiAgICAgICAgICBpZih0aGlzLmNsaWNrZWQpIHtcbiAgICAgICAgICAgIGNvbnN0IGRlbHRhWCA9IHRoaXMubW92ZUV2ZW50U3RhcnRYIC0gbW91c2VQb3NpdGlvbi54O1xuICAgICAgICAgICAgY29uc3QgZGVsdGFZID0gdGhpcy5tb3ZlRXZlbnRTdGFydFkgLSBtb3VzZVBvc2l0aW9uLnk7XG5cbiAgICAgICAgICAgIHRoaXMub2Zmc2V0TW92ZVggKz0gZGVsdGFYO1xuICAgICAgICAgICAgdGhpcy5vZmZzZXRNb3ZlWSArPSBkZWx0YVk7XG5cbiAgICAgICAgICAgIGlmKHRoaXMucmVhY3Rvcikge1xuICAgICAgICAgICAgICB0aGlzLnJlYWN0b3IuZGlzcGF0Y2hFdmVudChcIm9uTW92ZVwiLCBkZWx0YVgsIGRlbHRhWSwgbW91c2VQb3NpdGlvbik7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIHRoaXMubW92ZUV2ZW50U3RhcnRYID0gbW91c2VQb3NpdGlvbi54O1xuICAgICAgICAgICAgdGhpcy5tb3ZlRXZlbnRTdGFydFkgPSBtb3VzZVBvc2l0aW9uLnk7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgaWYocmVzdWx0KSB7XG4gICAgICAgICAgICBpZih0aGlzLnJlYWN0b3IgJiYgIXRoaXMuZGlzYWJsZWQpIHtcbiAgICAgICAgICAgICAgdGhpcy5yZWFjdG9yLmRpc3BhdGNoRXZlbnQoXCJvbkhvdmVyXCIsIG1vdXNlUG9zaXRpb24pO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZih0aGlzLnRvb2x0aXApIHtcbiAgICAgICAgICAgICAgdGhpcy50b29sdGlwLnggPSBtb3VzZVBvc2l0aW9uLnggKyAxMDtcbiAgICAgICAgICAgICAgdGhpcy50b29sdGlwLnkgPSBtb3VzZVBvc2l0aW9uLnkgKyAxMDtcbiAgICAgICAgICAgICAgdGhpcy50b29sdGlwLmVuYWJsZSgpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgXG4gICAgICAgICAgICB0aGlzLmhvdmVyZWQgPSB0cnVlO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLmhvdmVyZWQgPSBmYWxzZTtcbiAgICAgICAgICAgIGlmKHRoaXMudG9vbHRpcCkgdGhpcy50b29sdGlwLmRpc2FibGUoKVxuICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB0aGlzLmhvdmVyZWQgPSBmYWxzZTtcbiAgICAgICAgICB0aGlzLmNsaWNrZWQgPSBmYWxzZTtcbiAgICAgICAgICBpZih0aGlzLnRvb2x0aXApIHRoaXMudG9vbHRpcC5kaXNhYmxlKCk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgICAgXG4gICAgICB0aGlzLmNhbnZhcy5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgdGhpcywgKGV2ZW50LCByZXN1bHQpID0+IHtcbiAgICAgICAgaWYoIXRoaXMuZGlzYWJsZWQpIHtcbiAgICAgICAgICBjb25zdCBtb3VzZVBvc2l0aW9uID0gdGhpcy5nZXRNb3VzZVBvcyhldmVudCk7XG5cbiAgICAgICAgICBpZihyZXN1bHQgJiYgdGhpcy5ob3ZlcmVkKSB7XG4gICAgICAgICAgICBpZih0aGlzLnJlYWN0b3IpIHtcbiAgICAgICAgICAgICAgdGhpcy5yZWFjdG9yLmRpc3BhdGNoRXZlbnQoXCJvbkNsaWNrXCIsIG1vdXNlUG9zaXRpb24pO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB0aGlzLnNlbGVjdGVkID0gdHJ1ZTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5jbGlja2VkID0gZmFsc2U7XG4gICAgICAgICAgICB0aGlzLnNlbGVjdGVkID0gZmFsc2U7XG4gICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHRoaXMuaG92ZXJlZCA9IGZhbHNlO1xuICAgICAgICAgIHRoaXMuY2xpY2tlZCA9IGZhbHNlO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICAgIFxuICAgICAgdGhpcy5jYW52YXMuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlZG93blwiLCB0aGlzLCAoZXZlbnQsIHJlc3VsdCkgPT4ge1xuICAgICAgICBpZighdGhpcy5kaXNhYmxlZCkge1xuICAgICAgICAgIGNvbnN0IG1vdXNlUG9zaXRpb24gPSB0aGlzLmdldE1vdXNlUG9zKGV2ZW50KTtcblxuICAgICAgICAgIGlmKHJlc3VsdCkge1xuICAgICAgICAgICAgaWYodGhpcy5yZWFjdG9yKSB7XG4gICAgICAgICAgICAgIHRoaXMucmVhY3Rvci5kaXNwYXRjaEV2ZW50KFwib25Eb3duXCIsIG1vdXNlUG9zaXRpb24pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgXG4gICAgICAgICAgICB0aGlzLmNsaWNrZWQgPSB0cnVlO1xuICAgICAgICAgICAgdGhpcy5tb3ZlRXZlbnRTdGFydFggPSBtb3VzZVBvc2l0aW9uLng7XG4gICAgICAgICAgICB0aGlzLm1vdmVFdmVudFN0YXJ0WSA9IG1vdXNlUG9zaXRpb24ueTtcbiAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdGhpcy5ob3ZlcmVkID0gZmFsc2U7XG4gICAgICAgICAgdGhpcy5jbGlja2VkID0gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgICAgXG4gICAgICB0aGlzLmNhbnZhcy5hZGRFdmVudExpc3RlbmVyKFwibW91c2V1cFwiLCB0aGlzLCAoZXZlbnQpID0+IHtcbiAgICAgICAgaWYoIXRoaXMuZGlzYWJsZWQpIHtcbiAgICAgICAgICBjb25zdCBtb3VzZVBvc2l0aW9uID0gdGhpcy5nZXRNb3VzZVBvcyhldmVudCk7XG5cbiAgICAgICAgICBpZih0aGlzLnJlYWN0b3IpIHtcbiAgICAgICAgICAgIHRoaXMucmVhY3Rvci5kaXNwYXRjaEV2ZW50KFwib25VcFwiLCBtb3VzZVBvc2l0aW9uKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgXG4gICAgICAgICAgdGhpcy5jbGlja2VkID0gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuXG4gICAgICB0aGlzLmNhbnZhcy5hZGRFdmVudExpc3RlbmVyKFwid2hlZWxcIiwgdGhpcywgKGV2ZW50KSA9PiB7XG4gICAgICAgIGlmKHRoaXMuaG92ZXJlZCAmJiAhdGhpcy5kaXNhYmxlZCAmJiAhdGhpcy5zY3JvbGxEaXNhYmxlZCkge1xuICAgICAgICAgIHRoaXMub2Zmc2V0U2Nyb2xsWCArPSBldmVudC5kZWx0YVg7XG4gICAgICAgICAgdGhpcy5vZmZzZXRTY3JvbGxZICs9IGV2ZW50LmRlbHRhWTtcblxuICAgICAgICAgIGlmKHRoaXMucmVhY3Rvcikge1xuICAgICAgICAgICAgdGhpcy5yZWFjdG9yLmRpc3BhdGNoRXZlbnQoXCJvblNjcm9sbFwiLCBldmVudC5kZWx0YVgsIGV2ZW50LmRlbHRhWSk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9KTtcblxuICAgICAgY29uc3QgdG91Y2hTY3JvbGxFdmVudCA9IChldmVudCkgPT4ge1xuICAgICAgICBjb25zdCBjaGFuZ2VkVG91Y2hlcyA9IGV2ZW50LmNoYW5nZWRUb3VjaGVzWzBdO1xuICAgICAgICBjb25zdCBwb3NpdGlvbiA9IHRoaXMuZ2V0TW91c2VQb3MoY2hhbmdlZFRvdWNoZXMpO1xuXG4gICAgICAgIGlmKHRoaXMuaG92ZXJlZCAmJiAhdGhpcy5kaXNhYmxlZCAmJiAhdGhpcy5zY3JvbGxEaXNhYmxlZCkge1xuICAgICAgICAgIGNvbnN0IGRlbHRhWCA9IHRoaXMudG91Y2hFdmVudFN0YXJ0WCAtIHBvc2l0aW9uLng7XG4gICAgICAgICAgY29uc3QgZGVsdGFZID0gdGhpcy50b3VjaEV2ZW50U3RhcnRZIC0gcG9zaXRpb24ueTtcblxuICAgICAgICAgIHRoaXMub2Zmc2V0U2Nyb2xsWCArPSBkZWx0YVg7XG4gICAgICAgICAgdGhpcy5vZmZzZXRTY3JvbGxZICs9IGRlbHRhWTtcblxuICAgICAgICAgIGlmKHRoaXMucmVhY3Rvcikge1xuICAgICAgICAgICAgdGhpcy5yZWFjdG9yLmRpc3BhdGNoRXZlbnQoXCJvblNjcm9sbFwiLCBkZWx0YVgsIGRlbHRhWSwgcG9zaXRpb24pO1xuICAgICAgICAgIH1cbiAgICAgICAgICBcbiAgICAgICAgICB0aGlzLnRvdWNoRXZlbnRTdGFydFggPSBwb3NpdGlvbi54O1xuICAgICAgICAgIHRoaXMudG91Y2hFdmVudFN0YXJ0WSA9IHBvc2l0aW9uLnk7XG4gICAgICAgIH1cbiAgICAgIH07XG5cbiAgICAgIGNvbnN0IHRvdWNoU3RhcnRFbmRFdmVudCA9IChldmVudCwgcmVzdWx0KSA9PiB7XG4gICAgICAgIGNvbnN0IGNoYW5nZWRUb3VjaGVzID0gZXZlbnQuY2hhbmdlZFRvdWNoZXNbMF07XG4gICAgICAgIGNvbnN0IHBvc2l0aW9uID0gdGhpcy5nZXRNb3VzZVBvcyhjaGFuZ2VkVG91Y2hlcyk7XG4gICAgICAgIFxuICAgICAgICBpZihyZXN1bHQpIHtcbiAgICAgICAgICB0aGlzLmhvdmVyZWQgPSB0cnVlO1xuICAgICAgICAgIHRoaXMuc2VsZWN0ZWQgPSB0cnVlO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHRoaXMuaG92ZXJlZCA9IGZhbHNlO1xuICAgICAgICAgIHRoaXMuc2VsZWN0ZWQgPSBmYWxzZTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmKHRoaXMuaG92ZXJlZCAmJiAhdGhpcy5kaXNhYmxlZCkge1xuICAgICAgICAgIHRoaXMudG91Y2hFdmVudFN0YXJ0WCA9IHBvc2l0aW9uLng7XG4gICAgICAgICAgdGhpcy50b3VjaEV2ZW50U3RhcnRZID0gcG9zaXRpb24ueTtcbiAgICAgICAgICB0aGlzLnRvdWNoRXZlbnRTdGFydFRpbWVzdGFtcCA9IGV2ZW50LnRpbWVzdGFtcDtcbiAgICAgICAgfVxuICAgICAgfTtcblxuICAgICAgdGhpcy5jYW52YXMuYWRkRXZlbnRMaXN0ZW5lcihcInRvdWNoc3RhcnRcIiwgdGhpcywgdG91Y2hTdGFydEVuZEV2ZW50KTtcbiAgICAgIHRoaXMuY2FudmFzLmFkZEV2ZW50TGlzdGVuZXIoXCJ0b3VjaGVuZFwiLCB0aGlzLCB0b3VjaFN0YXJ0RW5kRXZlbnQpO1xuXG4gICAgICB0aGlzLmNhbnZhcy5hZGRFdmVudExpc3RlbmVyKFwidG91Y2htb3ZlXCIsIHRoaXMsIChldmVudCkgPT4ge1xuICAgICAgICB0b3VjaFNjcm9sbEV2ZW50KGV2ZW50KTtcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgIH0pO1xuXG4gICAgICB0aGlzLmhhc0luaXRFdmVudHMgPSB0cnVlO1xuICAgIH1cbiAgfVxuXG4gIGRyYXcoY29udGV4dCkge1xuICAgIGlmKHRoaXMuaGlkZGVuKSByZXR1cm47XG4gICAgdGhpcy5pbml0RXZlbnRzKCk7XG5cbiAgICBpZih0aGlzLmRpc2FibGVkKSB7XG4gICAgICB0aGlzLnNlbGVjdGVkID0gZmFsc2U7XG4gICAgICB0aGlzLmNsaWNrZWQgPSBmYWxzZTtcbiAgICAgIHRoaXMuaG92ZXJlZCA9IGZhbHNlO1xuICAgICAgaWYodGhpcy50b29sdGlwKSB0aGlzLnRvb2x0aXAuZGlzYWJsZWQgPSB0cnVlO1xuICAgIH1cbiAgfVxuICBcbiAgZ2V0TW91c2VQb3MoZXZlbnQpIHtcbiAgICByZXR1cm4gdGhpcy5jYW52YXMuZ2V0TW91c2VQb3MoZXZlbnQpO1xuICB9XG4gIFxuICBpc0luc2lkZShwb3MpIHtcbiAgICByZXR1cm4gcG9zLnggPiB0aGlzLnggJiYgcG9zLnggPCB0aGlzLnggKyB0aGlzLndpZHRoICYmIHBvcy55IDwgdGhpcy55ICsgdGhpcy5oZWlnaHQgJiYgcG9zLnkgPiB0aGlzLnk7XG4gIH1cbiAgXG4gIGRpc2FibGUoKSB7XG4gICAgdGhpcy5kaXNhYmxlZCA9IHRydWU7XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cbiAgXG4gIGVuYWJsZSgpIHtcbiAgICB0aGlzLmRpc2FibGVkID0gZmFsc2U7XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cblxuICBnZXQgZGlzYWJsZWQoKSB7XG4gICAgcmV0dXJuIHRoaXMuI19kaXNhYmxlZCB8fCAodGhpcy5wYXJlbnQgJiYgdGhpcy5wYXJlbnQuZGlzYWJsZWQpO1xuICB9XG5cbiAgc2V0IGRpc2FibGVkKGRpc2FibGVkKSB7XG4gICAgaWYoZGlzYWJsZWQgIT0gdGhpcy4jX2Rpc2FibGVkKSB7XG4gICAgICB0aGlzLiNfZGlzYWJsZWQgPSBkaXNhYmxlZDtcbiAgICAgIHRoaXMucmVhY3RvciAmJiB0aGlzLnJlYWN0b3IuZGlzcGF0Y2hFdmVudChcIm9uQ2hhbmdlXCIsIHRoaXMpO1xuICAgIH1cbiAgfVxuXG4gIHNldENsaWNrQWN0aW9uKHRyaWdnZXIpIHtcbiAgICB0aGlzLnJlbW92ZUFsbENsaWNrQWN0aW9ucygpO1xuICAgIHRoaXMuYWRkQ2xpY2tBY3Rpb24odHJpZ2dlcik7XG4gIH1cbiAgXG4gIGFkZENsaWNrQWN0aW9uKHRyaWdnZXIpIHtcbiAgICB0aGlzLnJlYWN0b3IuYWRkRXZlbnRMaXN0ZW5lcihcIm9uQ2xpY2tcIiwgdHJpZ2dlcik7XG4gIH1cbiAgXG4gIHJlbW92ZUNsaWNrQWN0aW9uKHRyaWdnZXIpIHtcbiAgICB0aGlzLnJlYWN0b3IucmVtb3ZlRXZlbnRMaXN0ZW5lcihcIm9uQ2xpY2tcIiwgdHJpZ2dlcik7XG4gIH1cblxuICByZW1vdmVBbGxDbGlja0FjdGlvbnMoKSB7XG4gICAgdGhpcy5yZWFjdG9yLnJlbW92ZUFsbEV2ZW50TGlzdGVuZXIoXCJvbkNsaWNrXCIpO1xuICB9XG5cbiAgc2V0SG92ZXJBY3Rpb24odHJpZ2dlcikge1xuICAgIHRoaXMucmVtb3ZlQWxsSG92ZXJBY3Rpb25zKCk7XG4gICAgdGhpcy5hZGRIb3ZlckFjdGlvbih0cmlnZ2VyKTtcbiAgfVxuICBcbiAgYWRkSG92ZXJBY3Rpb24odHJpZ2dlcikge1xuICAgIHRoaXMucmVhY3Rvci5hZGRFdmVudExpc3RlbmVyKFwib25Ib3ZlclwiLCB0cmlnZ2VyKTtcbiAgfVxuICBcbiAgcmVtb3ZlSG92ZXJBY3Rpb24odHJpZ2dlcikge1xuICAgIHRoaXMucmVhY3Rvci5yZW1vdmVFdmVudExpc3RlbmVyKFwib25Ib3ZlclwiLCB0cmlnZ2VyKTtcbiAgfVxuXG4gIHJlbW92ZUFsbEhvdmVyQWN0aW9ucygpIHtcbiAgICB0aGlzLnJlYWN0b3IucmVtb3ZlQWxsRXZlbnRMaXN0ZW5lcihcIm9uSG92ZXJcIik7XG4gIH1cblxuICBzZXREb3duQWN0aW9uKHRyaWdnZXIpIHtcbiAgICB0aGlzLnJlbW92ZUFsbERvd25BY3Rpb25zKCk7XG4gICAgdGhpcy5hZGREb3duQWN0aW9uKHRyaWdnZXIpO1xuICB9XG4gIFxuICBhZGREb3duQWN0aW9uKHRyaWdnZXIpIHtcbiAgICB0aGlzLnJlYWN0b3IuYWRkRXZlbnRMaXN0ZW5lcihcIm9uRG93blwiLCB0cmlnZ2VyKTtcbiAgfVxuICBcbiAgcmVtb3ZlRG93bkFjdGlvbih0cmlnZ2VyKSB7XG4gICAgdGhpcy5yZWFjdG9yLnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJvbkRvd25cIiwgdHJpZ2dlcik7XG4gIH1cblxuICByZW1vdmVBbGxEb3duQWN0aW9ucygpIHtcbiAgICB0aGlzLnJlYWN0b3IucmVtb3ZlQWxsRXZlbnRMaXN0ZW5lcihcIm9uRG93blwiKTtcbiAgfVxuXG4gIHNldFNjcm9sbEFjdGlvbih0cmlnZ2VyKSB7XG4gICAgdGhpcy5yZW1vdmVBbGxTY3JvbGxBY3Rpb25zKCk7XG4gICAgdGhpcy5hZGRTY3JvbGxBY3Rpb24odHJpZ2dlcik7XG4gIH1cbiAgXG4gIGFkZFNjcm9sbEFjdGlvbih0cmlnZ2VyKSB7XG4gICAgdGhpcy5yZWFjdG9yLmFkZEV2ZW50TGlzdGVuZXIoXCJvblNjcm9sbFwiLCB0cmlnZ2VyKTtcbiAgfVxuICBcbiAgcmVtb3ZlU2Nyb2xsQWN0aW9uKHRyaWdnZXIpIHtcbiAgICB0aGlzLnJlYWN0b3IucmVtb3ZlRXZlbnRMaXN0ZW5lcihcIm9uU2Nyb2xsXCIsIHRyaWdnZXIpO1xuICB9XG5cbiAgcmVtb3ZlQWxsU2Nyb2xsQWN0aW9ucygpIHtcbiAgICB0aGlzLnJlYWN0b3IucmVtb3ZlQWxsRXZlbnRMaXN0ZW5lcihcIm9uU2Nyb2xsXCIpO1xuICB9XG5cbiAgc2V0TW92ZUFjdGlvbih0cmlnZ2VyKSB7XG4gICAgdGhpcy5yZW1vdmVBbGxNb3ZlQWN0aW9ucygpO1xuICAgIHRoaXMuYWRkTW92ZUFjdGlvbih0cmlnZ2VyKTtcbiAgfVxuICBcbiAgYWRkTW92ZUFjdGlvbih0cmlnZ2VyKSB7XG4gICAgdGhpcy5yZWFjdG9yLmFkZEV2ZW50TGlzdGVuZXIoXCJvbk1vdmVcIiwgdHJpZ2dlcik7XG4gIH1cbiAgXG4gIHJlbW92ZU1vdmVBY3Rpb24odHJpZ2dlcikge1xuICAgIHRoaXMucmVhY3Rvci5yZW1vdmVFdmVudExpc3RlbmVyKFwib25Nb3ZlXCIsIHRyaWdnZXIpO1xuICB9XG5cbiAgcmVtb3ZlQWxsTW92ZUFjdGlvbnMoKSB7XG4gICAgdGhpcy5yZWFjdG9yLnJlbW92ZUFsbEV2ZW50TGlzdGVuZXIoXCJvbk1vdmVcIik7XG4gIH1cbiAgXG4gIHNldENoYW5nZUFjdGlvbih0cmlnZ2VyKSB7XG4gICAgdGhpcy5yZW1vdmVBbGxDaGFuZ2VBY3Rpb25zKCk7XG4gICAgdGhpcy5hZGRDaGFuZ2VBY3Rpb24odHJpZ2dlcik7XG4gIH1cbiAgXG4gIGFkZENoYW5nZUFjdGlvbih0cmlnZ2VyKSB7XG4gICAgdGhpcy5yZWFjdG9yLmFkZEV2ZW50TGlzdGVuZXIoXCJvbkNoYW5nZVwiLCB0cmlnZ2VyKTtcbiAgfVxuICBcbiAgcmVtb3ZlQ2hhbmdlQWN0aW9uKHRyaWdnZXIpIHtcbiAgICB0aGlzLnJlYWN0b3IucmVtb3ZlRXZlbnRMaXN0ZW5lcihcIm9uQ2hhbmdlXCIsIHRyaWdnZXIpO1xuICB9XG5cbiAgcmVtb3ZlQWxsQ2hhbmdlQWN0aW9ucygpIHtcbiAgICB0aGlzLnJlYWN0b3IucmVtb3ZlQWxsRXZlbnRMaXN0ZW5lcihcIm9uQ2hhbmdlXCIpO1xuICB9XG5cbiAgc2V0VXBBY3Rpb24odHJpZ2dlcikge1xuICAgIHRoaXMucmVtb3ZlQWxsVXBBY3Rpb25zKCk7XG4gICAgdGhpcy5hZGRVcEFjdGlvbih0cmlnZ2VyKTtcbiAgfVxuICBcbiAgYWRkVXBBY3Rpb24odHJpZ2dlcikge1xuICAgIHRoaXMucmVhY3Rvci5hZGRFdmVudExpc3RlbmVyKFwib25VcFwiLCB0cmlnZ2VyKTtcbiAgfVxuICBcbiAgcmVtb3ZlVXBBY3Rpb24odHJpZ2dlcikge1xuICAgIHRoaXMucmVhY3Rvci5yZW1vdmVFdmVudExpc3RlbmVyKFwib25VcFwiLCB0cmlnZ2VyKTtcbiAgfVxuXG4gIHJlbW92ZUFsbFVwQWN0aW9ucygpIHtcbiAgICB0aGlzLnJlYWN0b3IucmVtb3ZlQWxsRXZlbnRMaXN0ZW5lcihcIm9uVXBcIik7XG4gIH1cblxuICBnZXQgaGVpZ2h0KCkge1xuICAgIHJldHVybiB0aGlzLiNfaGVpZ2h0O1xuICB9XG5cbiAgZ2V0IHdpZHRoKCkge1xuICAgIHJldHVybiB0aGlzLiNfd2lkdGg7XG4gIH1cblxuICBzZXQgd2lkdGgod2lkdGgpIHtcbiAgICBpZih3aWR0aCAhPSB0aGlzLiNfd2lkdGgpIHtcbiAgICAgIHRoaXMuI193aWR0aCA9IHdpZHRoO1xuICAgICAgdGhpcy5yZWFjdG9yICYmIHRoaXMucmVhY3Rvci5kaXNwYXRjaEV2ZW50KFwib25DaGFuZ2VcIiwgdGhpcyk7XG4gICAgfVxuICB9XG5cbiAgc2V0IGhlaWdodChoZWlnaHQpIHtcbiAgICBpZihoZWlnaHQgIT0gdGhpcy4jX2hlaWdodCkge1xuICAgICAgdGhpcy4jX2hlaWdodCA9IGhlaWdodDtcbiAgICAgIHRoaXMucmVhY3RvciAmJiB0aGlzLnJlYWN0b3IuZGlzcGF0Y2hFdmVudChcIm9uQ2hhbmdlXCIsIHRoaXMpO1xuICAgIH1cbiAgfVxuXG4gIGdldCBtYXhXaWR0aCgpIHtcbiAgICByZXR1cm4gdGhpcy53aWR0aDtcbiAgfVxuXG4gIGdldCBtYXhIZWlnaHQoKSB7XG4gICAgcmV0dXJuIHRoaXMuaGVpZ2h0O1xuICB9XG5cbiAgZ2V0IGlubmVyV2lkdGgoKSB7XG4gICAgcmV0dXJuIHRoaXMud2lkdGg7XG4gIH1cblxuICBnZXQgaW5uZXJIZWlnaHQoKSB7XG4gICAgcmV0dXJuIHRoaXMuaGVpZ2h0O1xuICB9XG5cbiAgZ2V0IG1pbldpZHRoKCkge1xuICAgIHJldHVybiB0aGlzLndpZHRoO1xuICB9XG5cbiAgZ2V0IG1pbkhlaWdodCgpIHtcbiAgICByZXR1cm4gdGhpcy5oZWlnaHQ7XG4gIH1cblxuICBnZXQgeCgpIHtcbiAgICBjb25zdCBwYXJlbnQgPSB0aGlzLnBhcmVudCB8fCB0aGlzLmNhbnZhcztcblxuICAgIGlmKHRoaXMuc3R5bGUuYWxpZ25lbWVudCAmJiBwYXJlbnQpIHtcbiAgICAgIGNvbnN0IHBhcmVudFdpZHRoID0gcGFyZW50LndpZHRoO1xuICAgICAgY29uc3QgcGFyZW50UGFkZGluZyA9IChwYXJlbnQuc3R5bGUgJiYgcGFyZW50LnN0eWxlLnBhZGRpbmcpIHx8IDA7XG5cbiAgICAgIGlmKHRoaXMuc3R5bGUuYWxpZ25lbWVudCA9PSBDb25zdGFudHMuQWxpZ25lbWVudC5DRU5URVIpIHtcbiAgICAgICAgcmV0dXJuIHBhcmVudC54ICsgKHBhcmVudFdpZHRoIC8gMikgLSAodGhpcy53aWR0aCAvIDIpICsgdGhpcy5kZWx0YVg7XG4gICAgICB9IGVsc2UgaWYodGhpcy5zdHlsZS5hbGlnbmVtZW50ID09IENvbnN0YW50cy5BbGlnbmVtZW50LlJJR0hUKSB7XG4gICAgICAgIHJldHVybiBwYXJlbnQueCArIChwYXJlbnRXaWR0aCkgLSAodGhpcy53aWR0aCkgLSBwYXJlbnRQYWRkaW5nICsgdGhpcy5kZWx0YVg7XG4gICAgICB9IGVsc2UgaWYodGhpcy5zdHlsZS5hbGlnbmVtZW50ID09IENvbnN0YW50cy5BbGlnbmVtZW50LkxFRlQpIHtcbiAgICAgICAgcmV0dXJuIHBhcmVudC54ICsgcGFyZW50UGFkZGluZyArIHRoaXMuZGVsdGFYO1xuICAgICAgfVxuICAgIH0gZWxzZSBpZihwYXJlbnQpIHtcbiAgICAgIHJldHVybiBwYXJlbnQueCArIHRoaXMuI194ICsgdGhpcy5kZWx0YVg7XG4gICAgfVxuICAgIFxuICAgIHJldHVybiB0aGlzLiNfeCArIHRoaXMuZGVsdGFYO1xuICB9XG5cbiAgc2V0IHgoeCkge1xuICAgIHRoaXMuI194ID0geDtcbiAgICB0aGlzLnJlYWN0b3IgJiYgdGhpcy5yZWFjdG9yLmRpc3BhdGNoRXZlbnQoXCJvbkNoYW5nZVwiLCB0aGlzKTtcbiAgfVxuXG4gIGdldCB5KCkge1xuICAgIGNvbnN0IHBhcmVudCA9IHRoaXMucGFyZW50IHx8IHRoaXMuY2FudmFzO1xuXG4gICAgaWYodGhpcy5zdHlsZS52ZXJ0aWNhbEFsaWduZW1lbnQgJiYgcGFyZW50KSB7XG4gICAgICBjb25zdCBwYXJlbnRIZWlnaHQgPSBwYXJlbnQuaGVpZ2h0O1xuICAgICAgY29uc3QgcGFyZW50UGFkZGluZyA9IChwYXJlbnQuc3R5bGUgJiYgcGFyZW50LnN0eWxlLnBhZGRpbmcpIHx8IDA7XG5cbiAgICAgIGlmKHRoaXMuc3R5bGUudmVydGljYWxBbGlnbmVtZW50ID09IENvbnN0YW50cy5WZXJ0aWNhbEFsaWduZW1lbnQuQk9UVE9NKSB7XG4gICAgICAgIHJldHVybiBwYXJlbnQueSArIChwYXJlbnRIZWlnaHQpIC0gKHRoaXMuaGVpZ2h0KSAtIHBhcmVudFBhZGRpbmcgKyB0aGlzLmRlbHRhWTtcbiAgICAgIH0gZWxzZSBpZih0aGlzLnN0eWxlLnZlcnRpY2FsQWxpZ25lbWVudCA9PSBDb25zdGFudHMuVmVydGljYWxBbGlnbmVtZW50LkNFTlRFUikge1xuICAgICAgICByZXR1cm4gcGFyZW50LnkgKyAocGFyZW50SGVpZ2h0IC8gMikgLSAodGhpcy5oZWlnaHQgLyAyKSArIHRoaXMuZGVsdGFZO1xuICAgICAgfSBlbHNlIGlmKHRoaXMuc3R5bGUudmVydGljYWxBbGlnbmVtZW50ID09IENvbnN0YW50cy5WZXJ0aWNhbEFsaWduZW1lbnQuVE9QKSB7XG4gICAgICAgIHJldHVybiBwYXJlbnQueSArIHBhcmVudFBhZGRpbmcgKyB0aGlzLmRlbHRhWTtcbiAgICAgIH1cbiAgICB9IGVsc2UgaWYocGFyZW50KSB7XG4gICAgICByZXR1cm4gcGFyZW50LnkgKyB0aGlzLiNfeSArIHRoaXMuZGVsdGFZO1xuICAgIH1cbiAgICBcbiAgICByZXR1cm4gdGhpcy4jX3kgKyB0aGlzLmRlbHRhWTtcbiAgfVxuXG4gIHNldCB5KHkpIHtcbiAgICB0aGlzLiNfeSA9IHk7XG4gICAgdGhpcy5yZWFjdG9yICYmIHRoaXMucmVhY3Rvci5kaXNwYXRjaEV2ZW50KFwib25DaGFuZ2VcIiwgdGhpcyk7XG4gIH1cblxuICBnZXQgZGVmYXVsdFN0eWxlKCkge1xuICAgIHJldHVybiBuZXcgU3R5bGUoe1xuICAgICAgXCJwYWRkaW5nXCI6IENvbnN0YW50cy5TZXR0aW5nLkRFRkFVTFRfUEFERElORyxcbiAgICAgIFwic3BhY2VCZXR3ZWVuQ29tcG9uZW50c1wiOiBDb25zdGFudHMuU2V0dGluZy5ERUZBVUxUX1NQQUNJTkdcbiAgICB9KTtcbiAgfVxuXG4gIGdldCBzdHlsZSgpIHtcbiAgICByZXR1cm4gdGhpcy4jX3N0eWxlIHx8IHRoaXMuZGVmYXVsdFN0eWxlO1xuICB9XG5cbiAgc2V0IHN0eWxlKHN0eWxlKSB7XG4gICAgdGhpcy4jX3N0eWxlID0gbmV3IFN0eWxlKCk7XG4gICAgdGhpcy4jX3N0eWxlLnNldEFsbCh0aGlzLmRlZmF1bHRTdHlsZS5nZXRTdHlsZXMoKSk7XG5cbiAgICBpZihzdHlsZSAmJiBzdHlsZSBpbnN0YW5jZW9mIFN0eWxlKSB7XG4gICAgICB0aGlzLiNfc3R5bGUuc2V0QWxsKHN0eWxlLmdldFN0eWxlcygpKTtcbiAgICB9XG5cbiAgICB0aGlzLiNfc3R5bGUuY29tcG9uZW50ID0gdGhpcztcbiAgICB0aGlzLnJlYWN0b3IgJiYgdGhpcy5yZWFjdG9yLmRpc3BhdGNoRXZlbnQoXCJvbkNoYW5nZVwiLCB0aGlzKTtcbiAgfVxuXG4gIGdldCBoaWRkZW4oKSB7XG4gICAgcmV0dXJuICh0aGlzLnN0eWxlICYmIHRoaXMuc3R5bGUuaGlkZGVuKSB8fCAodGhpcy5wYXJlbnQgJiYgdGhpcy5wYXJlbnQuaGlkZGVuKTtcbiAgfVxuXG4gIHNldCBoaWRkZW4oaGlkZGVuKSB7XG4gICAgaWYoaGlkZGVuICE9IHRoaXMuZGlzYWJsZWQgfHwgaGlkZGVuICE9IHRoaXMuc3R5bGUuaGlkZGVuKSB7XG4gICAgICB0aGlzLmRpc2FibGVkID0gaGlkZGVuO1xuICAgICAgaWYodGhpcy5zdHlsZSkgdGhpcy5zdHlsZS5zZXQoXCJoaWRkZW5cIiwgaGlkZGVuKTtcbiAgICAgIHRoaXMucmVhY3RvciAmJiB0aGlzLnJlYWN0b3IuZGlzcGF0Y2hFdmVudChcIm9uQ2hhbmdlXCIsIHRoaXMpO1xuICAgIH1cbiAgfVxuXG4gIGdldCBzZWxlY3RlZCgpIHtcbiAgICByZXR1cm4gdGhpcy4jX3NlbGVjdGVkO1xuICB9XG5cbiAgc2V0IHNlbGVjdGVkKHNlbGVjdGVkKSB7XG4gICAgaWYoc2VsZWN0ZWQgIT0gdGhpcy4jX3NlbGVjdGVkKSB7XG4gICAgICB0aGlzLiNfc2VsZWN0ZWQgPSBzZWxlY3RlZDtcbiAgICAgIHRoaXMucmVhY3RvciAmJiB0aGlzLnJlYWN0b3IuZGlzcGF0Y2hFdmVudChcIm9uQ2hhbmdlXCIsIHRoaXMpO1xuICAgIH1cbiAgfVxuXG4gIGdldEFsbFBhcmVudHMoKSB7XG4gICAgbGV0IHBhcmVudCA9IHRoaXMucGFyZW50O1xuICAgIGxldCByZXMgPSBbXTtcblxuICAgIHdoaWxlKHBhcmVudCkge1xuICAgICAgcmVzLnB1c2gocGFyZW50KTtcbiAgICAgIHBhcmVudCA9IHBhcmVudC5wYXJlbnQ7XG4gICAgfVxuXG4gICAgcmV0dXJuIHJlcztcbiAgfVxuXG4gIHN0YXRpYyBjb21wYXJlQ29tcG9uZW50cyhjb21wb25lbnQsIG90aGVyKSB7XG4gICAgcmV0dXJuIGNvbXBvbmVudC5jb21wYXJlVG8ob3RoZXIpO1xuICB9XG5cbiAgY29tcGFyZVRvKG90aGVyQ29tcG9uZW50KSB7XG4gICAgY29uc3QgaXNGb3JlZ3JvdW5kID0gdGhpcy5zdHlsZSAmJiB0aGlzLnN0eWxlLmZvcmVncm91bmQ7XG4gICAgY29uc3Qgb3RoZXJJc0ZvcmVncm91bmQgPSBvdGhlckNvbXBvbmVudC5zdHlsZSAmJiBvdGhlckNvbXBvbmVudC5zdHlsZS5mb3JlZ3JvdW5kO1xuICAgIGNvbnN0IHpJbmRleCA9IHRoaXMuc3R5bGUgJiYgdGhpcy5zdHlsZS56SW5kZXg7XG4gICAgY29uc3Qgb3RoZXJ6SW5kZXggPSBvdGhlckNvbXBvbmVudC5zdHlsZSAmJiBvdGhlckNvbXBvbmVudC5zdHlsZS56SW5kZXg7XG5cbiAgICBpZih0aGlzLnBhcmVudCA9PSBvdGhlckNvbXBvbmVudCkge1xuICAgICAgcmV0dXJuIDE7XG4gICAgfSBlbHNlIGlmKG90aGVyQ29tcG9uZW50LnBhcmVudCA9PSB0aGlzKSB7XG4gICAgICByZXR1cm4gLTE7XG4gICAgfSBlbHNlIGlmKGlzRm9yZWdyb3VuZCAmJiAhb3RoZXJJc0ZvcmVncm91bmQpIHtcbiAgICAgIHJldHVybiAxXG4gICAgfSBlbHNlIGlmKCFpc0ZvcmVncm91bmQgJiYgb3RoZXJJc0ZvcmVncm91bmQpIHtcbiAgICAgIHJldHVybiAtMTtcbiAgICB9IGVsc2UgaWYoekluZGV4ID4gb3RoZXJ6SW5kZXgpIHtcbiAgICAgIHJldHVybiAxO1xuICAgIH0gZWxzZSBpZih6SW5kZXggPCBvdGhlcnpJbmRleCkge1xuICAgICAgcmV0dXJuIC0xO1xuICAgIH1cblxuICAgIHJldHVybiBvdGhlckNvbXBvbmVudC5jb21wYXJlVG9Db21wb25lbnQodGhpcykgfHwgLXRoaXMuY29tcGFyZVRvQ29tcG9uZW50KG90aGVyQ29tcG9uZW50KTtcbiAgfVxuXG4gIGNvbXBhcmVUb0NvbXBvbmVudChvdGhlckNvbXBvbmVudCkge1xuICAgIHJldHVybiAwO1xuICB9XG5cbiAgY29tcGFyZVRvTWVudShvdGhlckNvbXBvbmVudCkge1xuICAgIHJldHVybiAtMTtcbiAgfVxuXG4gIGNvbXBhcmVUb1Rvb2x0aXAob3RoZXJDb21wb25lbnQpIHtcbiAgICByZXR1cm4gLTE7XG4gIH1cblxuICBjb21wYXJlVG9Ob3RpZmljYXRpb24ob3RoZXJDb21wb25lbnQpIHtcbiAgICByZXR1cm4gLTE7XG4gIH1cblxuICBjb21wYXJlVG9TY3JvbGxiYXIob3RoZXJDb21wb25lbnQpIHtcbiAgICByZXR1cm4gLTE7XG4gIH1cbn0iLCIvKlxuICogQ29weXJpZ2h0IChDKSAyMDIwIEVsaWFzdGlrIChlbGlhc3Rpa3NvZnRzLmNvbSlcbiAqXG4gKiBUaGlzIGZpbGUgaXMgcGFydCBvZiBcIkpTR2FtZVRvb2xzXCIuXG4gKlxuICogXCJKU0dhbWVUb29sc1wiIGlzIGZyZWUgc29mdHdhcmU6IHlvdSBjYW4gcmVkaXN0cmlidXRlIGl0IGFuZC9vciBtb2RpZnlcbiAqIGl0IHVuZGVyIHRoZSB0ZXJtcyBvZiB0aGUgR05VIEdlbmVyYWwgUHVibGljIExpY2Vuc2UgYXMgcHVibGlzaGVkIGJ5XG4gKiB0aGUgRnJlZSBTb2Z0d2FyZSBGb3VuZGF0aW9uLCBlaXRoZXIgdmVyc2lvbiAzIG9mIHRoZSBMaWNlbnNlLCBvclxuICogKGF0IHlvdXIgb3B0aW9uKSBhbnkgbGF0ZXIgdmVyc2lvbi5cbiAqXG4gKiBcIkpTR2FtZVRvb2xzXCIgaXMgZGlzdHJpYnV0ZWQgaW4gdGhlIGhvcGUgdGhhdCBpdCB3aWxsIGJlIHVzZWZ1bCxcbiAqIGJ1dCBXSVRIT1VUIEFOWSBXQVJSQU5UWTsgd2l0aG91dCBldmVuIHRoZSBpbXBsaWVkIHdhcnJhbnR5IG9mXG4gKiBNRVJDSEFOVEFCSUxJVFkgb3IgRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UuICBTZWUgdGhlXG4gKiBHTlUgR2VuZXJhbCBQdWJsaWMgTGljZW5zZSBmb3IgbW9yZSBkZXRhaWxzLlxuICpcbiAqIFlvdSBzaG91bGQgaGF2ZSByZWNlaXZlZCBhIGNvcHkgb2YgdGhlIEdOVSBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlXG4gKiBhbG9uZyB3aXRoIFwiSlNHYW1lVG9vbHNcIi4gIElmIG5vdCwgc2VlIDxodHRwOi8vd3d3LmdudS5vcmcvbGljZW5zZXMvPi5cbiAqL1xuZXhwb3J0IGRlZmF1bHQge1xuICBTZXR0aW5nOiB7XG4gICAgRElTQUJMRV9PUFRJTUlaQVRJT05TOiBmYWxzZSwgLy8gdHJ1ZSB0byBkaXNhYmxlIG9wdGltaXphdGlvbnMsIGNhbiBmaXggc29tZSBwcm9ibGVtcywgZGlzYWJsaW5nIG9wdGltaXphdGlvbiByZWR1Y2VzIHBlcmZvcm1hbmNlXG4gICAgRElTQUJMRV9FWFBFUklNRU5UQUxfT1BUSU1JWkFUSU9OUzogZmFsc2UsIC8vIHRydWUgdG8gZGlzYWJsZSBvcHRpbWl6YXRpb25zIHRoYXQgYXJlIGNvbnNpZGVyZWQgZXhwZXJpbWVudGFsXG4gICAgRElTQUJMRV9JU19DT01QT05FTlRfVklTSUJMRV9PUFRJTUlaQVRJT05TOiB0cnVlLCAvLyB0cnVlIHRvIGRpc2FibGUgb3B0aW1pemF0aW9ucyBvZiB0aGUgQ29udGFpbmVyLmlzQ29tcG9uZW50VmlzaWJsZSBtZXRob2RcbiAgICBESVNBQkxFX0NPTlRBSU5FUlNfQ1VUVElORzogZmFsc2UsIC8vIGRpc2FibGluZyBjb250YWluZXJzIGN1dHRpbmcgYWxsb3cgdG8gdmlldyB0aGUgY29tcG9uZW50cyBvZiBhIGNvbnRhaW5lciB0aGF0IGFyZSBub3QgdG90YWxseSB2aXNpYmxlLCB5b3UgY2FuIGFsc28gZGlzYWJsZSBvcHRpbWl6YXRpb25zIHRvIGRpc3BsYXlzIGVsZW1lbnRzIHRoYXQgYXJlIG5vdCBkcmF3biBmb3Igb3B0aW1pemF0aW9uIHB1cnBvc2VzXG4gICAgRU5BQkxFX1BJWEVMX1JBVElPX1JFU0laSU5HOiB0cnVlLCAvLyBlbmFibGluZyB0aGlzIGFsbG93IHJlc2l6aW5nIHRoZSBjYW52YXMgdG8gbWF0Y2ggdGhlIHNjcmVlbiBwaXhlbCByYXRpb1xuICAgIFBJWEVMX1JBVElPOiAxLCAvLyB0aGUgY3VycmVudCBwaXhlbCByYXRpbywgYXV0b21hdGljYWxseSB1cGRhdGVkXG4gICAgUkVTT0xVVElPTl9TQ0FMRTogMSwgLy8gdGhlIHJlc29sdXRpb24gc2NhbGVcbiAgICBGT05UX0ZBTUlMWTogXCJzYW5zLXNlcmlmXCIsXG4gICAgRk9OVF9TSVpFOiAyOCxcbiAgICBDQU5WQVNfV0lEVEg6IDYwMCxcbiAgICBDQU5WQVNfSEVJR0hUOiA0MDAsXG4gICAgREVGQVVMVF9QQURESU5HOiA2LFxuICAgIERFRkFVTFRfU1BBQ0lORzogNixcbiAgICBCVVRUT05fREVGQVVMVF9CQUNLR1JPVU5EOiBcInJnYmEoMCwgMCwgMCwgMClcIixcbiAgICBCVVRUT05fREVGQVVMVF9IT1ZFUl9CQUNLR1JPVU5EOiBcIiM5NUE1QTZcIixcbiAgICBCVVRUT05fREVGQVVMVF9DTElDS19CQUNLR1JPVU5EOiBcIiM3MjdGODBcIixcbiAgICBCVVRUT05fREVGQVVMVF9BTFRFUk5BVElWRV9CQUNLR1JPVU5EOiBcIiNBQ0JFQkZcIixcbiAgICBJTlBVVF9ERUZBVUxUX0ZPTlRfQ09MT1I6IFwiIzAwMFwiLFxuICAgIElOUFVUX0RFRkFVTFRfQkFDS0dST1VORF9DT0xPUjogXCIjZmZmXCIsXG4gICAgSU5QVVRfREVGQVVMVF9CT1JERVJfQ09MT1I6IFwiIzAwMFwiLFxuICAgIElOUFVUX0RFRkFVTFRfQk9SREVSX0NPTE9SX1NFTEVDVEVEOiBcIiNhMmNkZDhcIixcbiAgICBJTlBVVF9ERUZBVUxUX1NFTEVDVF9DT0xPUjogXCIjMjk4MGI5XCIsXG4gICAgTEFCRUxfREVGQVVMVF9GT05UX0NPTE9SOiBcIiMwMDBcIixcbiAgICBMSU5LX0RFRkFVTFRfQ09MT1I6IFwiIzAwMDBFRVwiLFxuICAgIExJTktfREVGQVVMVF9IT1ZFUl9DT0xPUjogXCIjNEQ0REZGXCIsXG4gICAgTElOS19ERUZBVUxUX0NMSUNLX0NPTE9SOiBcIiNFRTc3MDBcIixcbiAgICBNRU5VX0RFRkFVTFRfQkFDS0dST1VORDogXCJyZ2JhKDQ0LCA2MiwgODAsIDAuNzUpXCIsXG4gICAgTUVOVV9ERUZBVUxUX0JMVVJfQkFDS0dST1VORDogZmFsc2UsXG4gICAgTk9USUZJQ0FUSU9OX0RFRkFVTFRfQkFDS0dST1VORDogXCJyZ2JhKDQ2LCAyMDQsIDExMywgMC41KVwiLFxuICAgIE5PVElGSUNBVElPTl9ERUZBVUxUX0FOSU1BVElPTl9EVVJBVElPTjogNTAwLCAvLyBtc1xuICAgIFBST0dSRVNTX0RFRkFVTFRfQkFDS0dST1VORDogXCIjYmRjM2M3XCIsXG4gICAgUFJPR1JFU1NfREVGQVVMVF9GT1JFR1JPVU5EOiBcIiMyN2FlNjBcIixcbiAgICBQUk9HUkVTU19ERUZBVUxUX0FOSU1BVElPTl9EVVJBVElPTjogMjAwMCwgLy8gbXNcbiAgICBUT09MVElQX0RFRkFVTFRfQkFDS0dST1VORDogXCJyZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMjUpXCIsXG4gICAgQVJST1dfREVGQVVMVF9MSU5FX0NBUDogXCJyb3VuZFwiLFxuICAgIEFSUk9XX0RFRkFVTFRfQ09MT1I6IFwiI0ZGMDAwMFwiLFxuICAgIEFSUk9XX0RFRkFVTFRfTElORV9TSVpFOiA4LFxuICAgIEFSUk9XX0RFRkFVTFRfSEVBRF9TSVpFOiAyMCxcbiAgICBDUk9TU19ERUZBVUxUX0xJTkVfQ0FQOiBcInJvdW5kXCIsXG4gICAgQ1JPU1NfREVGQVVMVF9DT0xPUjogXCIjZmZmXCIsXG4gICAgQ1JPU1NfREVGQVVMVF9MSU5FX1NJWkU6IDMsXG4gICAgU0NST0xMQkFSX0RFRkFVTFRfQkFDS0dST1VORDogXCJyZ2JhKDE0OSwgMTY1LCAxNjYsIDAuNzUpXCIsXG4gICAgU0NST0xMQkFSX0RFRkFVTFRfSE9WRVJfQkFDS0dST1VORDogXCJyZ2JhKDE0OSwgMTY1LCAxNjYsIDAuOSlcIixcbiAgICBTQ1JPTExCQVJfREVGQVVMVF9DTElDS19CQUNLR1JPVU5EOiBcInJnYmEoMTQ5LCAxNjUsIDE2NiwgMC41KVwiLFxuICAgIFNDUk9MTEJBUl9ERUZBVUxUX1NJWkU6IDEwLFxuICAgIERFRkFVTFRfQk9SREVSX1NJWkU6IDMsXG4gICAgREVGQVVMVF9CT1JERVJfQ09MT1JfU0VMRUNURUQ6IFwiI2EyY2RkOFwiLFxuICAgIERFRkFVTFRfQU5JTUFUSU9OX0RVUkFUSU9OOiAyMDAwLCAvLyBtc1xuICAgIFRSSUFOR0xFX0RFRkFVTFRfTElORV9DQVA6IFwicm91bmRcIixcbiAgICBUUklBTkdMRV9ERUZBVUxUX0NPTE9SOiBcIiMwMDBcIixcbiAgICBUUklBTkdMRV9ERUZBVUxUX0ZJTExfQ09MT1I6IFwiIzAwMFwiLFxuICAgIFRSSUFOR0xFX0RFRkFVTFRfTElORV9TSVpFOiAzLFxuICAgIFRSSUFOR0xFX0RFRkFVTFRfRklMTDogdHJ1ZSxcbiAgICBTRUxFQ1RfREVGQVVMVF9CQUNLR1JPVU5EOiBcIiNlY2YwZjFcIixcbiAgICBTRUxFQ1RfREVGQVVMVF9IT1ZFUl9CQUNLR1JPVU5EOiBcIiNiZGMzYzdcIixcbiAgICBTRUxFQ1RfREVGQVVMVF9DTElDS19CQUNLR1JPVU5EOiBcIiNhZGIyYjVcIixcbiAgICBDSVJDTEVfREVGQVVMVF9MSU5FX0NBUDogXCJyb3VuZFwiLFxuICAgIENJUkNMRV9ERUZBVUxUX0NPTE9SOiBcIiNmZmZcIixcbiAgICBDSVJDTEVfREVGQVVMVF9GSUxMX0NPTE9SOiBcIiMwMDBcIixcbiAgICBDSVJDTEVfREVGQVVMVF9MSU5FX1NJWkU6IDMsXG4gICAgQ0lSQ0xFX0RFRkFVTFRfRklMTDogdHJ1ZSxcbiAgICBFUlJPUl9NRU5VX0JBQ0tHUk9VTkRfQ09MT1I6IFwiIzM0OThkYlwiXG4gIH0sXG4gIEtleToge1xuICAgIFVQOiAzOCxcbiAgICBSSUdIVDogMzksXG4gICAgQk9UVE9NOiA0MCxcbiAgICBMRUZUOiAzNyxcbiAgICBFTlRFUjogMTMsXG4gICAgRUNIQVA6IDI3LFxuICAgIFRBQjogOVxuICB9LFxuICBBbGlnbmVtZW50OiB7XG4gICAgUklHSFQ6IFwicmlnaHRcIixcbiAgICBMRUZUOiBcImxlZnRcIixcbiAgICBDRU5URVI6IFwiY2VudGVyXCIsXG4gICAgREVGQVVMVDogXCJkZWZhdWx0XCJcbiAgfSxcbiAgVmVydGljYWxBbGlnbmVtZW50OiB7XG4gICAgVE9QOiBcInRvcFwiLFxuICAgIENFTlRFUjogXCJjZW50ZXJcIixcbiAgICBCT1RUT006IFwiYm90dG9tXCIsXG4gICAgREVGQVVMVDogXCJkZWZhdWx0XCJcbiAgfSxcbiAgU3RyaW5nOiB7XG4gICAgRVJST1JfTUVTU0FHRV9DQU5WQVM6IFwiQSBmYXRhbCBlcnJvciBoYXMgb2NjdXJyZWQgYXQgdGhlIEpTR2FtZVRvb2xzIGxldmVsLlwiLFxuICAgIEVSUk9SX01FU1NBR0VfQ0FOVkFTX0xBQkVMIDogXCI6JyhcXG5BIGZhdGFsIGVycm9yIGhhcyBvY2N1cnJlZCBhdCB0aGUgSlNHYW1lVG9vbHMgbGV2ZWwuXCIsXG4gICAgUkVUUlk6IFwiUmV0cnlcIixcbiAgICBOT1RJQ0VfTUVTU0FHRTogXCJOb3RpY2U6XCIsXG4gICAgV0FSTklOR19NRVNTQUdFOiBcIldhcm5pbmc6XCIsXG4gICAgRVJST1JfTUVTU0FHRTogXCJFcnJvcjpcIixcbiAgICBPUFRJTUlaQVRJT05fRElTQUJMRUQ6IFwiT3B0aW1pemF0aW9ucyBhcmUgZGlzYWJsZWQuIFlvdSBtYXkgbm90aWNlIGxvdyBwZXJmb3JtYW5jZS5cIixcbiAgICBDT05UQUlORVJfQ1VUVElOR19ESVNBQkxFRDogXCJDb250YWluZXJzIGN1dHRpbmcgaXMgZGlzYWJsZWQuXCIsXG4gICAgQlVUVE9OX0lNQUdFX0RFUFJFQ0FURUQ6IFwiSlNHYW1lVG9vbHMuQnV0dG9uSW1hZ2UgaXMgZGVwcmVjYXRlZC4gUGxlYXNlIHVzZSBhIEJ1dHRvbiB3aXRoIGFuIEltYWdlQ29udGFpbmVyIGluc3RlYWQuXCIsXG4gICAgSU5QVVRfRlVMTFNDUkVFTjogXCJUaGUgdXNlIG9mIEpTR2FtZVRvb2xzLkNhbnZhcyBpcyBuZWVkZWQgZm9yIElucHV0IGNvbXBvbmVudHMgdG8gcHJvcGVybHkgd29yayBpbiBmdWxsc2NyZWVuIG1vZGUuXCIsXG4gICAgREVUQUlMUzogXCJEZXRhaWxzXCJcbiAgfVxufTsiLCIvKlxuICogQ29weXJpZ2h0IChDKSAyMDIwIEVsaWFzdGlrIChlbGlhc3Rpa3NvZnRzLmNvbSlcbiAqXG4gKiBUaGlzIGZpbGUgaXMgcGFydCBvZiBcIkpTR2FtZVRvb2xzXCIuXG4gKlxuICogXCJKU0dhbWVUb29sc1wiIGlzIGZyZWUgc29mdHdhcmU6IHlvdSBjYW4gcmVkaXN0cmlidXRlIGl0IGFuZC9vciBtb2RpZnlcbiAqIGl0IHVuZGVyIHRoZSB0ZXJtcyBvZiB0aGUgR05VIEdlbmVyYWwgUHVibGljIExpY2Vuc2UgYXMgcHVibGlzaGVkIGJ5XG4gKiB0aGUgRnJlZSBTb2Z0d2FyZSBGb3VuZGF0aW9uLCBlaXRoZXIgdmVyc2lvbiAzIG9mIHRoZSBMaWNlbnNlLCBvclxuICogKGF0IHlvdXIgb3B0aW9uKSBhbnkgbGF0ZXIgdmVyc2lvbi5cbiAqXG4gKiBcIkpTR2FtZVRvb2xzXCIgaXMgZGlzdHJpYnV0ZWQgaW4gdGhlIGhvcGUgdGhhdCBpdCB3aWxsIGJlIHVzZWZ1bCxcbiAqIGJ1dCBXSVRIT1VUIEFOWSBXQVJSQU5UWTsgd2l0aG91dCBldmVuIHRoZSBpbXBsaWVkIHdhcnJhbnR5IG9mXG4gKiBNRVJDSEFOVEFCSUxJVFkgb3IgRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UuICBTZWUgdGhlXG4gKiBHTlUgR2VuZXJhbCBQdWJsaWMgTGljZW5zZSBmb3IgbW9yZSBkZXRhaWxzLlxuICpcbiAqIFlvdSBzaG91bGQgaGF2ZSByZWNlaXZlZCBhIGNvcHkgb2YgdGhlIEdOVSBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlXG4gKiBhbG9uZyB3aXRoIFwiSlNHYW1lVG9vbHNcIi4gIElmIG5vdCwgc2VlIDxodHRwOi8vd3d3LmdudS5vcmcvbGljZW5zZXMvPi5cbiAqL1xuaW1wb3J0IEJveCBmcm9tIFwiLi9Cb3hcIjtcbmltcG9ydCBDb21wb25lbnQgZnJvbSBcIi4vQ29tcG9uZW50XCI7XG5pbXBvcnQgQ29uc3RhbnRzIGZyb20gXCIuL0NvbnN0YW50c1wiO1xuaW1wb3J0IFNjcm9sbGJhckhvcml6b250YWwgZnJvbSBcIi4vU2Nyb2xsYmFySG9yaXpvbnRhbFwiO1xuaW1wb3J0IFNjcm9sbGJhclZlcnRpY2FsIGZyb20gXCIuL1Njcm9sbGJhclZlcnRpY2FsXCI7XG5pbXBvcnQgU3R5bGUgZnJvbSBcIi4vU3R5bGVcIjtcbmltcG9ydCBVdGlscyBmcm9tIFwiLi9VdGlsc1wiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDb250YWluZXIgZXh0ZW5kcyBCb3gge1xuICBzZWxlY3RhYmxlID0gZmFsc2U7XG4gICNjb21wb25lbnRzID0gW107XG4gICNfbWF4V2lkdGggPSAwO1xuICAjX21heEhlaWdodCA9IDA7XG4gICNfbWluV2lkdGggPSAwO1xuICAjX21pbkhlaWdodCA9IDA7XG4gIGV2ZW50Q2hhbmdlQ2FsbGJhY2sgPSAoKSA9PiB0aGlzLnJlYWN0b3IuZGlzcGF0Y2hFdmVudChcIm9uQ2hhbmdlXCIsIHRoaXMpO1xuXG4gIGNvbnN0cnVjdG9yKHgsIHksIG1heFdpZHRoLCBtYXhIZWlnaHQsIHN0eWxlLCAuLi5jb21wb25lbnRzKSB7XG4gICAgc3VwZXIoeCwgeSwgbnVsbCwgbnVsbCwgc3R5bGUpO1xuXG4gICAgdGhpcy5hZGRBbGwoLi4uY29tcG9uZW50cyk7XG4gICAgdGhpcy5jYW52YXNUbXAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiY2FudmFzXCIpO1xuICAgIHRoaXMuI19tYXhXaWR0aCA9IG1heFdpZHRoO1xuICAgIHRoaXMuI19tYXhIZWlnaHQgPSBtYXhIZWlnaHQ7XG4gICAgdGhpcy5zY3JvbGxiYXJIb3Jpem9udGFsID0gbmV3IFNjcm9sbGJhckhvcml6b250YWwobnVsbCwgbnVsbCwgdGhpcyk7XG4gICAgdGhpcy5zY3JvbGxiYXJWZXJ0aWNhbCA9IG5ldyBTY3JvbGxiYXJWZXJ0aWNhbChudWxsLCBudWxsLCB0aGlzKTtcblxuICAgIHRoaXMuYWRkU2Nyb2xsQWN0aW9uKChkZWx0YVgsIGRlbHRhWSkgPT4gdGhpcy5jb250cm9sU2Nyb2xsaW5nKGRlbHRhWCwgZGVsdGFZKSk7XG5cbiAgICBpZighQ29uc3RhbnRzLlNldHRpbmcuRElTQUJMRV9FWFBFUklNRU5UQUxfT1BUSU1JWkFUSU9OUykge1xuICAgICAgdGhpcy5hZGRDaGFuZ2VBY3Rpb24oY29tcG9uZW50Q2hhbmdlZCA9PiB7XG4gICAgICAgIGNvbXBvbmVudENoYW5nZWQgPT0gdGhpcy5wYXJlbnQgJiYgdGhpcy5jb21wb25lbnRzLmZvckVhY2goY29tcG9uZW50ID0+IGNvbXBvbmVudCAmJiBjb21wb25lbnQucmVhY3Rvci5kaXNwYXRjaEV2ZW50KFwib25DaGFuZ2VcIiwgdGhpcykpO1xuICAgICAgfSk7XG4gICAgfVxuICB9XG5cbiAgZHJhdyhjb250ZXh0KSB7XG4gICAgaWYodGhpcy5oaWRkZW4pIHJldHVybjtcbiAgICBjb25zdCBjYW52YXMgPSBjb250ZXh0LmNhbnZhcztcbiAgICBjb25zdCBjdHggPSBjYW52YXMuZ2V0Q29udGV4dChcIjJkXCIpO1xuICAgIGN0eC5zYXZlKCk7XG5cbiAgICBpZih0aGlzLmlzQ3V0dGluZykge1xuICAgICAgY29uc3QgY3R4VGVtcCA9IHRoaXMuY2FudmFzVG1wLmdldENvbnRleHQoXCIyZFwiKTtcbiAgICAgIHRoaXMuY2FudmFzVG1wLndpZHRoID0gVXRpbHMuZ2V0Q2FudmFzV2lkdGgoY2FudmFzKSAqIENvbnN0YW50cy5TZXR0aW5nLlBJWEVMX1JBVElPO1xuICAgICAgdGhpcy5jYW52YXNUbXAuaGVpZ2h0ID0gVXRpbHMuZ2V0Q2FudmFzSGVpZ2h0KGNhbnZhcykgKiBDb25zdGFudHMuU2V0dGluZy5QSVhFTF9SQVRJTztcbiAgICAgIHRoaXMuY2FudmFzVG1wLnN0eWxlLndpZHRoID0gVXRpbHMuZ2V0Q2FudmFzV2lkdGgoY2FudmFzKTtcbiAgICAgIHRoaXMuY2FudmFzVG1wLnN0eWxlLmhlaWdodCA9IFV0aWxzLmdldENhbnZhc0hlaWdodChjYW52YXMpO1xuICAgICAgVXRpbHMuY2xlYXIoY3R4VGVtcCk7XG4gICAgfVxuICAgIFxuICAgIHRoaXMuY29tcG9uZW50cy5mb3JFYWNoKGNvbXBvbmVudCA9PiB7XG4gICAgICBpZih0aGlzLmNhbnZhcykgY29tcG9uZW50LmNhbnZhcyA9IHRoaXMuY2FudmFzO1xuICAgIH0pO1xuICAgIFxuICAgIHRoaXMuY29udHJvbFNjcm9sbGluZygwLCAwKTtcbiAgICBzdXBlci5kcmF3KGNvbnRleHQpO1xuXG4gICAgY3R4LnJlc3RvcmUoKTtcbiAgfVxuXG4gIGRyYXdWZXJ0aWNhbFNjcm9sbEJhcihjdHgpIHtcbiAgICBpZih0aGlzLnNjcm9sbGJhclZlcnRpY2FsKSB7XG4gICAgICB0aGlzLnNjcm9sbGJhclZlcnRpY2FsLmNhbnZhcyA9IHRoaXMuY2FudmFzO1xuICAgICAgdGhpcy5zY3JvbGxiYXJWZXJ0aWNhbC5kcmF3KGN0eCk7XG4gICAgfVxuICB9XG5cbiAgZHJhd0hvcml6b250YWxTY3JvbGxCYXIoY3R4KSB7XG4gICAgaWYodGhpcy5zY3JvbGxiYXJIb3Jpem9udGFsKSB7XG4gICAgICB0aGlzLnNjcm9sbGJhckhvcml6b250YWwuY2FudmFzID0gdGhpcy5jYW52YXM7XG4gICAgICB0aGlzLnNjcm9sbGJhckhvcml6b250YWwuZHJhdyhjdHgpO1xuICAgIH1cbiAgfVxuXG4gIGRyYXdTY3JvbGxiYXJzKGN0eCkge1xuICAgIGlmKCF0aGlzLnN0eWxlLnNjcm9sbFhEaXNhYmxlZCkgdGhpcy5kcmF3SG9yaXpvbnRhbFNjcm9sbEJhcihjdHgpO1xuICAgIGlmKCF0aGlzLnN0eWxlLnNjcm9sbFlEaXNhYmxlZCkgdGhpcy5kcmF3VmVydGljYWxTY3JvbGxCYXIoY3R4KTtcbiAgfVxuXG4gIHNldCguLi5jb21wb25lbnRzKSB7XG4gICAgbGV0IGhhc0NoYW5nZWQgPSBmYWxzZTtcblxuICAgIGlmKGNvbXBvbmVudHMubGVuZ3RoID09IHRoaXMuY29tcG9uZW50cy5sZW5ndGgpIHtcbiAgICAgIGNvbXBvbmVudHMuZm9yRWFjaCgoY29tcG9uZW50LCBpKSA9PiB7XG4gICAgICAgIGlmKHRoaXMuY29tcG9uZW50c1tpXSAhPSBjb21wb25lbnQpIGhhc0NoYW5nZWQgPSB0cnVlO1xuICAgICAgfSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGhhc0NoYW5nZWQgPSB0cnVlO1xuICAgIH1cblxuICAgIGlmKGhhc0NoYW5nZWQpIHtcbiAgICAgIHRoaXMuY2xlYXIoKTtcbiAgICAgIHRoaXMuYWRkQWxsKC4uLmNvbXBvbmVudHMpO1xuICAgIH1cbiAgfVxuXG4gIGFkZChjb21wb25lbnQpIHtcbiAgICB0aGlzLiNjb21wb25lbnRzLnB1c2goY29tcG9uZW50KTtcbiAgICBjb21wb25lbnQucGFyZW50ID0gdGhpcztcbiAgICBpZih0aGlzLmNhbnZhcykgY29tcG9uZW50LmNhbnZhcyA9IHRoaXMuY2FudmFzO1xuICAgIGNvbXBvbmVudC5hZGRDaGFuZ2VBY3Rpb24odGhpcy5ldmVudENoYW5nZUNhbGxiYWNrKTtcbiAgICB0aGlzLnJlYWN0b3IuZGlzcGF0Y2hFdmVudChcIm9uQ2hhbmdlXCIsIHRoaXMpO1xuICB9XG5cbiAgYWRkQWxsKC4uLmNvbXBvbmVudHMpIHtcbiAgICBjb21wb25lbnRzLmZvckVhY2goY29tcG9uZW50ID0+IHRoaXMuYWRkKGNvbXBvbmVudCkpO1xuICB9XG5cbiAgcmVtb3ZlKGNvbXBvbmVudCkge1xuICAgIGlmKHRoaXMuI2NvbXBvbmVudHMuaW5kZXhPZihjb21wb25lbnQpICE9IC0xKSB7XG4gICAgICBjb21wb25lbnQucmVtb3ZlQ2hhbmdlQWN0aW9uKHRoaXMuZXZlbnRDaGFuZ2VDYWxsYmFjayk7XG4gICAgICB0aGlzLiNjb21wb25lbnRzID0gdGhpcy4jY29tcG9uZW50cy5maWx0ZXIoY3VycmVudCA9PiBjb21wb25lbnQgIT0gY3VycmVudCk7XG4gICAgICB0aGlzLnJlYWN0b3IuZGlzcGF0Y2hFdmVudChcIm9uQ2hhbmdlXCIsIHRoaXMpO1xuICAgIH1cbiAgfVxuXG4gIGNsZWFyKCkge1xuICAgIHRoaXMuI2NvbXBvbmVudHMuZm9yRWFjaChjb21wb25lbnQgPT4gdGhpcy5yZW1vdmUoY29tcG9uZW50KSk7XG4gICAgdGhpcy5yZWFjdG9yLmRpc3BhdGNoRXZlbnQoXCJvbkNoYW5nZVwiLCB0aGlzKTtcbiAgfVxuXG4gIGdldCBjb21wb25lbnRzKCkge1xuICAgIGNvbnN0IGNvbXBvbmVudHMgPSBbXTtcbiAgICB0aGlzLiNjb21wb25lbnRzLmZvckVhY2goY29tcG9uZW50ID0+IGNvbXBvbmVudHMucHVzaChjb21wb25lbnQpKTtcbiAgICByZXR1cm4gY29tcG9uZW50cztcbiAgfVxuXG4gIGdldCBhbGxDb21wb25lbnRzKCkge1xuICAgIGNvbnN0IGNvbXBvbmVudHMgPSB0aGlzLmNvbXBvbmVudHM7XG4gICAgY29tcG9uZW50cy5wdXNoKHRoaXMuc2Nyb2xsYmFySG9yaXpvbnRhbCk7XG4gICAgY29tcG9uZW50cy5wdXNoKHRoaXMuc2Nyb2xsYmFyVmVydGljYWwpO1xuICAgIHJldHVybiBjb21wb25lbnRzO1xuICB9XG5cbiAgZ2V0Q29tcG9uZW50c1RyZWUoc3RhcnQgPSB0aGlzKSB7XG4gICAgY29uc3QgY29tcG9uZW50cyA9IHtcbiAgICAgIFwiY29tcG9uZW50XCI6IHN0YXJ0LFxuICAgICAgXCJjaGlsZHNcIjogW11cbiAgICB9O1xuXG4gICAgaWYoc3RhcnQuYWxsQ29tcG9uZW50cykge1xuICAgICAgc3RhcnQuYWxsQ29tcG9uZW50cy5mb3JFYWNoKGNvbXBvbmVudCA9PiBjb21wb25lbnRzLmNoaWxkcy5wdXNoKHRoaXMuZ2V0Q29tcG9uZW50c1RyZWUoY29tcG9uZW50KSkpO1xuICAgIH1cblxuICAgIHJldHVybiBjb21wb25lbnRzO1xuICB9XG5cbiAgc3RhdGljIHNvcnRDb21wb25lbnRzVHJlZShjb21wb25lbnQsIG90aGVyKSB7XG4gICAgcmV0dXJuIGNvbXBvbmVudC5jb21wb25lbnQuY29tcGFyZVRvKG90aGVyLmNvbXBvbmVudCk7XG4gIH1cblxuICBkaXNhYmxlKCkge1xuICAgIGxldCBjaGFuZ2VkID0gc3VwZXIuZGlzYWJsZSgpO1xuXG4gICAgdGhpcy4jY29tcG9uZW50cy5mb3JFYWNoKGNvbXBvbmVudCA9PiB7XG4gICAgICBpZihjb21wb25lbnQgJiYgY29tcG9uZW50LmRpc2FibGUgJiYgY29tcG9uZW50LmRpc2FibGUoKSkge1xuICAgICAgICBjaGFuZ2VkID0gdHJ1ZTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIGlmKGNoYW5nZWQpIHRoaXMucmVhY3Rvci5kaXNwYXRjaEV2ZW50KFwib25DaGFuZ2VcIiwgdGhpcyk7XG4gIH1cblxuICBlbmFibGUoKSB7XG4gICAgbGV0IGNoYW5nZWQgPSBzdXBlci5lbmFibGUoKTtcblxuICAgIHRoaXMuI2NvbXBvbmVudHMuZm9yRWFjaChjb21wb25lbnQgPT4ge1xuICAgICAgaWYoY29tcG9uZW50ICYmIGNvbXBvbmVudC5lbmFibGUgJiYgY29tcG9uZW50LmVuYWJsZSgpKSB7XG4gICAgICAgIGNoYW5nZWQgPSB0cnVlO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgaWYoY2hhbmdlZCkgdGhpcy5yZWFjdG9yLmRpc3BhdGNoRXZlbnQoXCJvbkNoYW5nZVwiLCB0aGlzKTtcbiAgfVxuXG4gIGdldCB3aWR0aCgpIHtcbiAgICBjb25zdCB3aWR0aCA9ICh0aGlzLnBhcmVudCAmJiB0aGlzLnBhcmVudC53aWR0aCk7XG4gICAgY29uc3QgbWluID0gdGhpcy5tYXhXaWR0aCAhPSBudWxsID8gTWF0aC5taW4odGhpcy5tYXhXaWR0aCwgd2lkdGgpIDogbnVsbDtcbiAgICByZXR1cm4gdGhpcy5taW5XaWR0aCAhPSBudWxsID8gTWF0aC5tYXgodGhpcy5taW5XaWR0aCwgbWluICE9IG51bGwgPyBtaW4gOiB3aWR0aCkgOiB3aWR0aDtcbiAgfVxuXG4gIGdldCBoZWlnaHQoKSB7XG4gICAgY29uc3QgaGVpZ2h0ID0gKHRoaXMucGFyZW50ICYmIHRoaXMucGFyZW50LmhlaWdodCk7XG4gICAgY29uc3QgbWluID0gdGhpcy5tYXhXaWR0aCAhPSBudWxsID8gTWF0aC5taW4odGhpcy5tYXhIZWlnaHQsIGhlaWdodCkgOiBudWxsO1xuICAgIHJldHVybiB0aGlzLm1pbkhlaWdodCAhPSBudWxsID8gTWF0aC5tYXgodGhpcy5taW5IZWlnaHQsIG1pbiAhPSBudWxsID8gbWluIDogaGVpZ2h0KSA6IGhlaWdodDtcbiAgfVxuXG4gIGdldCBtYXhXaWR0aCgpIHtcbiAgICByZXR1cm4gdGhpcy4jX21heFdpZHRoO1xuICB9XG5cbiAgZ2V0IG1heEhlaWdodCgpIHtcbiAgICByZXR1cm4gdGhpcy4jX21heEhlaWdodDtcbiAgfVxuXG4gIHNldCBtYXhXaWR0aChtYXhXaWR0aCkge1xuICAgIGlmKG1heFdpZHRoICE9IHRoaXMuI19tYXhXaWR0aCkge1xuICAgICAgdGhpcy4jX21heFdpZHRoID0gbWF4V2lkdGg7XG4gICAgICB0aGlzLnJlYWN0b3IuZGlzcGF0Y2hFdmVudChcIm9uQ2hhbmdlXCIsIHRoaXMpO1xuICAgIH1cbiAgfVxuXG4gIHNldCBtYXhIZWlnaHQobWF4SGVpZ2h0KSB7XG4gICAgaWYobWF4SGVpZ2h0ICE9IHRoaXMuI19tYXhIZWlnaHQpIHtcbiAgICAgIHRoaXMuI19tYXhIZWlnaHQgPSBtYXhIZWlnaHQ7XG4gICAgICB0aGlzLnJlYWN0b3IuZGlzcGF0Y2hFdmVudChcIm9uQ2hhbmdlXCIsIHRoaXMpO1xuICAgIH1cbiAgfVxuXG4gIGdldCBtaW5XaWR0aCgpIHtcbiAgICByZXR1cm4gdGhpcy4jX21pbldpZHRoO1xuICB9XG5cbiAgZ2V0IG1pbkhlaWdodCgpIHtcbiAgICByZXR1cm4gdGhpcy4jX21pbkhlaWdodDtcbiAgfVxuXG4gIHNldCBtaW5XaWR0aChtaW5XaWR0aCkge1xuICAgIGlmKG1pbldpZHRoICE9IHRoaXMuI19taW5XaWR0aCkge1xuICAgICAgdGhpcy4jX21pbldpZHRoID0gbWluV2lkdGg7XG4gICAgICB0aGlzLnJlYWN0b3IuZGlzcGF0Y2hFdmVudChcIm9uQ2hhbmdlXCIsIHRoaXMpO1xuICAgIH1cbiAgfVxuXG4gIHNldCBtaW5IZWlnaHQobWluSGVpZ2h0KSB7XG4gICAgaWYobWluSGVpZ2h0ICE9IHRoaXMuI19taW5IZWlnaHQpIHtcbiAgICAgIHRoaXMuI19taW5IZWlnaHQgPSBtaW5IZWlnaHQ7XG4gICAgICB0aGlzLnJlYWN0b3IuZGlzcGF0Y2hFdmVudChcIm9uQ2hhbmdlXCIsIHRoaXMpO1xuICAgIH1cbiAgfVxuXG4gIHVwZGF0ZUlubmVySGVpZ2h0KCkgeyB9XG5cbiAgdXBkYXRlSW5uZXJXaWR0aCgpIHsgfVxuXG4gIHNldCBjYW52YXMoY2FudmFzKSB7XG4gICAgaWYoY2FudmFzICE9IHRoaXMuY2FudmFzKSB7XG4gICAgICBzdXBlci5jYW52YXMgPSBjYW52YXM7XG4gIFxuICAgICAgdGhpcy4jY29tcG9uZW50cy5mb3JFYWNoKGNvbXBvbmVudCA9PiB7XG4gICAgICAgIGNvbXBvbmVudC5jYW52YXMgPSBjYW52YXM7XG4gICAgICAgIGlmKGNvbXBvbmVudC5yZWFjdG9yKSBjb21wb25lbnQucmVhY3Rvci5kaXNwYXRjaEV2ZW50KFwib25DaGFuZ2VcIiwgdGhpcyk7XG4gICAgICB9KTtcbiAgXG4gICAgICB0aGlzLnJlYWN0b3IuZGlzcGF0Y2hFdmVudChcIm9uQ2hhbmdlXCIsIHRoaXMpO1xuICAgIH1cbiAgfVxuXG4gIGdldCBjYW52YXMoKSB7XG4gICAgcmV0dXJuIHN1cGVyLmNhbnZhcztcbiAgfVxuXG4gIGdldENvbXBvbmVudElkKGNvbXBvbmVudCkge1xuICAgIGxldCByZXN1bHQgPSBudWxsO1xuXG4gICAgdGhpcy4jY29tcG9uZW50cy5mb3JFYWNoKChjLCBpKSA9PiB7XG4gICAgICBpZihjID09IGNvbXBvbmVudCkgcmVzdWx0ID0gaTtcbiAgICB9KTtcblxuICAgIHJldHVybiByZXN1bHQ7XG4gIH1cblxuICBnZXQgc2Nyb2xsQXJlYVNpemVYKCkge1xuICAgIHJldHVybiB0aGlzLmlubmVyV2lkdGggLSB0aGlzLndpZHRoO1xuICB9XG5cbiAgZ2V0IHNjcm9sbEFyZWFTaXplWSgpIHtcbiAgICByZXR1cm4gdGhpcy5pbm5lckhlaWdodCAtIHRoaXMuaGVpZ2h0O1xuICB9XG5cbiAgY29udHJvbFNjcm9sbGluZyhkZWx0YVgsIGRlbHRhWSkge1xuICAgIGlmKCF0aGlzLnN0eWxlLnNjcm9sbFlEaXNhYmxlZCkge1xuICAgICAgaWYodGhpcy5zY3JvbGxBcmVhU2l6ZVkgPD0gMCkge1xuICAgICAgICB0aGlzLm9mZnNldFNjcm9sbFkgPSAwO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgY29uc3QgcGVyY2VudFNjcm9sbGJhclkgPSB0aGlzLm9mZnNldFNjcm9sbFkgLyB0aGlzLnNjcm9sbEFyZWFTaXplWTtcbiAgXG4gICAgICAgIGlmKHBlcmNlbnRTY3JvbGxiYXJZIDw9IDAgJiYgZGVsdGFZIDw9IDApIHtcbiAgICAgICAgICB0aGlzLm9mZnNldFNjcm9sbFkgPSBNYXRoLm1pbigwLCB0aGlzLnkpO1xuICAgICAgICB9IGVsc2UgaWYocGVyY2VudFNjcm9sbGJhclkgPiAxICYmIGRlbHRhWSA+PSAwKSB7XG4gICAgICAgICAgdGhpcy5vZmZzZXRTY3JvbGxZID0gdGhpcy5zY3JvbGxBcmVhU2l6ZVk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5vZmZzZXRTY3JvbGxZIC09IGRlbHRhWTtcbiAgICB9XG5cbiAgICBpZighdGhpcy5zdHlsZS5zY3JvbGxYRGlzYWJsZWQpIHtcbiAgICAgIGlmKHRoaXMuc2Nyb2xsQXJlYVNpemVYIDw9IDApIHtcbiAgICAgICAgdGhpcy5vZmZzZXRTY3JvbGxYID0gMDtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGNvbnN0IHBlcmNlbnRTY3JvbGxiYXJYID0gdGhpcy5vZmZzZXRTY3JvbGxYIC8gdGhpcy5zY3JvbGxBcmVhU2l6ZVg7XG4gIFxuICAgICAgICBpZihwZXJjZW50U2Nyb2xsYmFyWCA8PSAwICYmIGRlbHRhWCA8PSAwKSB7XG4gICAgICAgICAgdGhpcy5vZmZzZXRTY3JvbGxYID0gTWF0aC5taW4oMCwgdGhpcy54KTtcbiAgICAgICAgfSBlbHNlIGlmKHBlcmNlbnRTY3JvbGxiYXJYID4gMSAmJiBkZWx0YVggPj0gMCkge1xuICAgICAgICAgIHRoaXMub2Zmc2V0U2Nyb2xsWCA9IHRoaXMuc2Nyb2xsQXJlYVNpemVYO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMub2Zmc2V0U2Nyb2xsWCAtPSBkZWx0YVg7XG4gICAgfVxuICB9XG5cbiAgaXNDb21wb25lbnRWaXNpYmxlKGNvbXBvbmVudCkge1xuICAgIGlmKENvbnN0YW50cy5TZXR0aW5nLkRJU0FCTEVfT1BUSU1JWkFUSU9OUykgcmV0dXJuIHRydWU7XG4gICAgXG4gICAgaWYoY29tcG9uZW50IGluc3RhbmNlb2YgQ29tcG9uZW50ICYmICFjb21wb25lbnQuaGlkZGVuKSB7XG4gICAgICBpZighQ29uc3RhbnRzLlNldHRpbmcuRElTQUJMRV9JU19DT01QT05FTlRfVklTSUJMRV9PUFRJTUlaQVRJT05TICYmIHRoaXMucGFyZW50ICYmIHRoaXMucGFyZW50LmlzQ29tcG9uZW50VmlzaWJsZSAmJiAhdGhpcy5wYXJlbnQuaXNDb21wb25lbnRWaXNpYmxlKGNvbXBvbmVudCkpIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgfVxuXG4gICAgICBjb25zdCB3aWR0aCA9IHRoaXMud2lkdGg7XG4gICAgICBjb25zdCBoZWlnaHQgPSB0aGlzLmhlaWdodDtcbiAgICAgIGNvbnN0IGNvbXBvbmVudFdpZHRoID0gY29tcG9uZW50LndpZHRoO1xuICAgICAgY29uc3QgY29tcG9uZW50SGVpZ2h0ID0gY29tcG9uZW50LmhlaWdodDtcbiAgICAgIGNvbnN0IGNhbnZhc1dpZHRoID0gKHRoaXMuY2FudmFzICYmIHRoaXMuY2FudmFzLndpZHRoKSB8fCB3aWR0aDtcbiAgICAgIGNvbnN0IGNhbnZhc0hlaWdodCA9ICh0aGlzLmNhbnZhcyAmJiB0aGlzLmNhbnZhcy5oZWlnaHQpIHx8IGhlaWdodDtcblxuICAgICAgaWYoY29tcG9uZW50LnggKyBjb21wb25lbnRXaWR0aCA+PSB0aGlzLnggJiYgY29tcG9uZW50LnggPD0gdGhpcy54ICsgd2lkdGggJiYgY29tcG9uZW50LnkgKyBjb21wb25lbnRIZWlnaHQgPj0gdGhpcy55ICYmIGNvbXBvbmVudC55IDw9IHRoaXMueSArIGhlaWdodCAmJiBjb21wb25lbnQueCArIGNvbXBvbmVudFdpZHRoID49IDAgJiYgY29tcG9uZW50LnggPD0gY2FudmFzV2lkdGggJiYgY29tcG9uZW50LnkgKyBjb21wb25lbnRIZWlnaHQgPj0gMCAmJiBjb21wb25lbnQueSA8PSBjYW52YXNIZWlnaHQpIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgZ2V0IGlzQ3V0dGluZygpIHtcbiAgICByZXR1cm4gIUNvbnN0YW50cy5TZXR0aW5nLkRJU0FCTEVfQ09OVEFJTkVSU19DVVRUSU5HICYmICgoKHRoaXMubWF4V2lkdGggJiYgdGhpcy5pbm5lcldpZHRoID4gdGhpcy5tYXhXaWR0aCkgfHwgKHRoaXMubWF4SGVpZ2h0ICYmIHRoaXMuaW5uZXJIZWlnaHQgPiB0aGlzLm1heEhlaWdodCkpKSAmJiB0aGlzLmNhbnZhc1RtcCAhPSBudWxsO1xuICB9XG5cbiAgZ2V0IGRlZmF1bHRTdHlsZSgpIHtcbiAgICByZXR1cm4gbmV3IFN0eWxlKHtcbiAgICAgIFwicGFkZGluZ1wiOiAwLFxuICAgICAgXCJzcGFjZUJldHdlZW5Db21wb25lbnRzXCI6IENvbnN0YW50cy5TZXR0aW5nLkRFRkFVTFRfU1BBQ0lOR1xuICAgIH0pO1xuICB9XG59IiwiLypcbiAqIENvcHlyaWdodCAoQykgMjAyMCBFbGlhc3RpayAoZWxpYXN0aWtzb2Z0cy5jb20pXG4gKlxuICogVGhpcyBmaWxlIGlzIHBhcnQgb2YgXCJKU0dhbWVUb29sc1wiLlxuICpcbiAqIFwiSlNHYW1lVG9vbHNcIiBpcyBmcmVlIHNvZnR3YXJlOiB5b3UgY2FuIHJlZGlzdHJpYnV0ZSBpdCBhbmQvb3IgbW9kaWZ5XG4gKiBpdCB1bmRlciB0aGUgdGVybXMgb2YgdGhlIEdOVSBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlIGFzIHB1Ymxpc2hlZCBieVxuICogdGhlIEZyZWUgU29mdHdhcmUgRm91bmRhdGlvbiwgZWl0aGVyIHZlcnNpb24gMyBvZiB0aGUgTGljZW5zZSwgb3JcbiAqIChhdCB5b3VyIG9wdGlvbikgYW55IGxhdGVyIHZlcnNpb24uXG4gKlxuICogXCJKU0dhbWVUb29sc1wiIGlzIGRpc3RyaWJ1dGVkIGluIHRoZSBob3BlIHRoYXQgaXQgd2lsbCBiZSB1c2VmdWwsXG4gKiBidXQgV0lUSE9VVCBBTlkgV0FSUkFOVFk7IHdpdGhvdXQgZXZlbiB0aGUgaW1wbGllZCB3YXJyYW50eSBvZlxuICogTUVSQ0hBTlRBQklMSVRZIG9yIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFLiAgU2VlIHRoZVxuICogR05VIEdlbmVyYWwgUHVibGljIExpY2Vuc2UgZm9yIG1vcmUgZGV0YWlscy5cbiAqXG4gKiBZb3Ugc2hvdWxkIGhhdmUgcmVjZWl2ZWQgYSBjb3B5IG9mIHRoZSBHTlUgR2VuZXJhbCBQdWJsaWMgTGljZW5zZVxuICogYWxvbmcgd2l0aCBcIkpTR2FtZVRvb2xzXCIuICBJZiBub3QsIHNlZSA8aHR0cDovL3d3dy5nbnUub3JnL2xpY2Vuc2VzLz4uXG4gKi9cbmltcG9ydCBDb21wb25lbnQgZnJvbSBcIi4vQ29tcG9uZW50XCI7XG5pbXBvcnQgQ29uc3RhbnRzIGZyb20gXCIuL0NvbnN0YW50c1wiO1xuaW1wb3J0IFV0aWxzIGZyb20gXCIuL1V0aWxzXCI7XG5pbXBvcnQgU3R5bGUgZnJvbSBcIi4vU3R5bGVcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ3Jvc3MgZXh0ZW5kcyBDb21wb25lbnQge1xuICBzZWxlY3RhYmxlID0gZmFsc2U7XG5cbiAgY29uc3RydWN0b3IoeCwgeSwgd2lkdGgsIGhlaWdodCwgc3R5bGUpIHtcbiAgICBzdXBlcih4LCB5LCB3aWR0aCwgaGVpZ2h0LCBzdHlsZSk7XG4gIH1cblxuICBkcmF3KGNvbnRleHQpIHtcbiAgICBpZih0aGlzLmhpZGRlbikgcmV0dXJuO1xuICAgIHN1cGVyLmRyYXcoY29udGV4dCk7XG5cbiAgICBjb25zdCBjYW52YXMgPSBjb250ZXh0LmNhbnZhcztcbiAgICBjb25zdCBjdHggPSBjYW52YXMuZ2V0Q29udGV4dChcIjJkXCIpO1xuICAgIFxuICAgIFV0aWxzLmRyYXdDcm9zcyhjdHgsIHRoaXMueCwgdGhpcy55LCB0aGlzLndpZHRoLCB0aGlzLmhlaWdodCwgdGhpcy5zdHlsZS5saW5lV2lkdGgsIHRoaXMuc3R5bGUuY29sb3IsIHRoaXMuc3R5bGUubGluZUNhcCk7XG5cbiAgICB0aGlzLmluaXQgPSB0cnVlO1xuICB9XG5cbiAgZ2V0IHdpZHRoKCkge1xuICAgIHJldHVybiBzdXBlci53aWR0aCArIHRoaXMuc3R5bGUubGluZVdpZHRoO1xuICB9XG5cbiAgZ2V0IGhlaWdodCgpIHtcbiAgICByZXR1cm4gc3VwZXIuaGVpZ2h0ICsgdGhpcy5zdHlsZS5saW5lV2lkdGg7XG4gIH1cblxuICBzZXQgd2lkdGgod2lkdGgpIHtcbiAgICBzdXBlci53aWR0aCA9IHdpZHRoO1xuICB9XG5cbiAgc2V0IGhlaWdodChoZWlnaHQpIHtcbiAgICBzdXBlci5oZWlnaHQgPSBoZWlnaHQ7XG4gIH1cblxuICBnZXQgZGVmYXVsdFN0eWxlKCkge1xuICAgIHJldHVybiBuZXcgU3R5bGUoe1xuICAgICAgXCJsaW5lV2lkdGhcIjogQ29uc3RhbnRzLlNldHRpbmcuQ1JPU1NfREVGQVVMVF9MSU5FX1NJWkUsXG4gICAgICBcImNvbG9yXCI6IENvbnN0YW50cy5TZXR0aW5nLkNST1NTX0RFRkFVTFRfQ09MT1IsXG4gICAgICBcImxpbmVDYXBcIjogQ29uc3RhbnRzLlNldHRpbmcuQ1JPU1NfREVGQVVMVF9MSU5FX0NBUFxuICAgIH0pO1xuICB9XG59IiwiLypcbiAqIENvcHlyaWdodCAoQykgMjAyMCBFbGlhc3RpayAoZWxpYXN0aWtzb2Z0cy5jb20pXG4gKlxuICogVGhpcyBmaWxlIGlzIHBhcnQgb2YgXCJKU0dhbWVUb29sc1wiLlxuICpcbiAqIFwiSlNHYW1lVG9vbHNcIiBpcyBmcmVlIHNvZnR3YXJlOiB5b3UgY2FuIHJlZGlzdHJpYnV0ZSBpdCBhbmQvb3IgbW9kaWZ5XG4gKiBpdCB1bmRlciB0aGUgdGVybXMgb2YgdGhlIEdOVSBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlIGFzIHB1Ymxpc2hlZCBieVxuICogdGhlIEZyZWUgU29mdHdhcmUgRm91bmRhdGlvbiwgZWl0aGVyIHZlcnNpb24gMyBvZiB0aGUgTGljZW5zZSwgb3JcbiAqIChhdCB5b3VyIG9wdGlvbikgYW55IGxhdGVyIHZlcnNpb24uXG4gKlxuICogXCJKU0dhbWVUb29sc1wiIGlzIGRpc3RyaWJ1dGVkIGluIHRoZSBob3BlIHRoYXQgaXQgd2lsbCBiZSB1c2VmdWwsXG4gKiBidXQgV0lUSE9VVCBBTlkgV0FSUkFOVFk7IHdpdGhvdXQgZXZlbiB0aGUgaW1wbGllZCB3YXJyYW50eSBvZlxuICogTUVSQ0hBTlRBQklMSVRZIG9yIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFLiAgU2VlIHRoZVxuICogR05VIEdlbmVyYWwgUHVibGljIExpY2Vuc2UgZm9yIG1vcmUgZGV0YWlscy5cbiAqXG4gKiBZb3Ugc2hvdWxkIGhhdmUgcmVjZWl2ZWQgYSBjb3B5IG9mIHRoZSBHTlUgR2VuZXJhbCBQdWJsaWMgTGljZW5zZVxuICogYWxvbmcgd2l0aCBcIkpTR2FtZVRvb2xzXCIuICBJZiBub3QsIHNlZSA8aHR0cDovL3d3dy5nbnUub3JnL2xpY2Vuc2VzLz4uXG4gKi9cbmV4cG9ydCBkZWZhdWx0IHtcbiAgZWFzZUluQ3ViaWMoeCkge1xuICAgIHJldHVybiB4ICogeCAqIHg7XG4gIH0sXG4gIGVhc2VPdXRCb3VuY2UoeCkge1xuICAgIGNvbnN0IG4xID0gNy41NjI1O1xuICAgIGNvbnN0IGQxID0gMi43NTtcbiAgICBcbiAgICBpZih4IDwgMSAvIGQxKSB7XG4gICAgICByZXR1cm4gbjEgKiB4ICogeDtcbiAgICB9IGVsc2UgaWYoeCA8IDIgLyBkMSkge1xuICAgICAgcmV0dXJuIG4xICogKHggLT0gMS41IC8gZDEpICogeCArIDAuNzU7XG4gICAgfSBlbHNlIGlmKHggPCAyLjUgLyBkMSkge1xuICAgICAgcmV0dXJuIG4xICogKHggLT0gMi4yNSAvIGQxKSAqIHggKyAwLjkzNzU7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiBuMSAqICh4IC09IDIuNjI1IC8gZDEpICogeCArIDAuOTg0Mzc1O1xuICAgIH1cbiAgfSxcbiAgZWFzZUluT3V0Q3ViaWMoeCkge1xuICAgIHJldHVybiB4IDwgMC41ID8gNCAqIHggKiB4ICogeCA6IDEgLSBNYXRoLnBvdygtMiAqIHggKyAyLCAzKSAvIDI7XG4gIH0sXG4gIGVhc2VJbk91dFNpbmUoeCkge1xuICAgIHJldHVybiAtKE1hdGguY29zKE1hdGguUEkgKiB4KSAtIDEpIC8gMjtcbiAgfSxcbiAgZWFzZUluT3V0UXVpbnQoeCkge1xuICAgIHJldHVybiB4IDwgMC41ID8gMTYgKiB4ICogeCAqIHggKiB4ICogeCA6IDEgLSBNYXRoLnBvdygtMiAqIHggKyAyLCA1KSAvIDI7XG4gIH0sXG4gIGVhc2VJbk91dENpcmMoeCkge1xuICAgIHJldHVybiB4IDwgMC41ID8gKDEgLSBNYXRoLnNxcnQoMSAtIE1hdGgucG93KDIgKiB4LCAyKSkpIC8gMiA6IChNYXRoLnNxcnQoMSAtIE1hdGgucG93KC0yICogeCArIDIsIDIpKSArIDEpIC8gMjtcbiAgfSxcbiAgZWFzZUluT3V0UXVhZCh4KSB7XG4gICAgcmV0dXJuIHggPCAwLjUgPyAyICogeCAqIHggOiAxIC0gTWF0aC5wb3coLTIgKiB4ICsgMiwgMikgLyAyO1xuICB9LFxuICBlYXNlSW5PdXRRdWFydCh4KSB7XG4gICAgcmV0dXJuIHggPCAwLjUgPyA4ICogeCAqIHggKiB4ICogeCA6IDEgLSBNYXRoLnBvdygtMiAqIHggKyAyLCA0KSAvIDI7XG4gIH0sXG4gIGVhc2VJbk91dEV4cG8oeCkge1xuICAgIHJldHVybiB4ID09PSAwID8gMCA6IHggPT09IDEgPyAxIDogeCA8IDAuNSA/IE1hdGgucG93KDIsIDIwICogeCAtIDEwKSAvIDIgOiAoMiAtIE1hdGgucG93KDIsIC0yMCAqIHggKyAxMCkpIC8gMjtcbiAgfSxcbiAgZWFzZUluT3V0QmFjayh4KSB7XG4gICAgY29uc3QgYzEgPSAxLjcwMTU4O1xuICAgIGNvbnN0IGMyID0gYzEgKiAxLjUyNTtcbiAgICBcbiAgICByZXR1cm4geCA8IDAuNSA/IChNYXRoLnBvdygyICogeCwgMikgKiAoKGMyICsgMSkgKiAyICogeCAtIGMyKSkgLyAyIDogKE1hdGgucG93KDIgKiB4IC0gMiwgMikgKiAoKGMyICsgMSkgKiAoeCAqIDIgLSAyKSArIGMyKSArIDIpIC8gMjtcbiAgfVxufTsiLCIvKlxuICogQ29weXJpZ2h0IChDKSAyMDIwLTIwMjEgRWxpYXN0aWsgKGVsaWFzdGlrc29mdHMuY29tKVxuICpcbiAqIFRoaXMgZmlsZSBpcyBwYXJ0IG9mIFwiSlNHYW1lVG9vbHNcIi5cbiAqXG4gKiBcIkpTR2FtZVRvb2xzXCIgaXMgZnJlZSBzb2Z0d2FyZTogeW91IGNhbiByZWRpc3RyaWJ1dGUgaXQgYW5kL29yIG1vZGlmeVxuICogaXQgdW5kZXIgdGhlIHRlcm1zIG9mIHRoZSBHTlUgR2VuZXJhbCBQdWJsaWMgTGljZW5zZSBhcyBwdWJsaXNoZWQgYnlcbiAqIHRoZSBGcmVlIFNvZnR3YXJlIEZvdW5kYXRpb24sIGVpdGhlciB2ZXJzaW9uIDMgb2YgdGhlIExpY2Vuc2UsIG9yXG4gKiAoYXQgeW91ciBvcHRpb24pIGFueSBsYXRlciB2ZXJzaW9uLlxuICpcbiAqIFwiSlNHYW1lVG9vbHNcIiBpcyBkaXN0cmlidXRlZCBpbiB0aGUgaG9wZSB0aGF0IGl0IHdpbGwgYmUgdXNlZnVsLFxuICogYnV0IFdJVEhPVVQgQU5ZIFdBUlJBTlRZOyB3aXRob3V0IGV2ZW4gdGhlIGltcGxpZWQgd2FycmFudHkgb2ZcbiAqIE1FUkNIQU5UQUJJTElUWSBvciBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRS4gIFNlZSB0aGVcbiAqIEdOVSBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlIGZvciBtb3JlIGRldGFpbHMuXG4gKlxuICogWW91IHNob3VsZCBoYXZlIHJlY2VpdmVkIGEgY29weSBvZiB0aGUgR05VIEdlbmVyYWwgUHVibGljIExpY2Vuc2VcbiAqIGFsb25nIHdpdGggXCJKU0dhbWVUb29sc1wiLiAgSWYgbm90LCBzZWUgPGh0dHA6Ly93d3cuZ251Lm9yZy9saWNlbnNlcy8+LlxuICovXG5pbXBvcnQgU2NlbmUgZnJvbSBcIi4vU2NlbmVcIjtcbmltcG9ydCBDb25zdGFudHMgZnJvbSBcIi4vQ29uc3RhbnRzXCI7XG5pbXBvcnQgU3R5bGUgZnJvbSBcIi4vU3R5bGVcIjtcbmltcG9ydCBNZW51IGZyb20gXCIuL01lbnVcIjtcbmltcG9ydCBMYWJlbCBmcm9tIFwiLi9MYWJlbFwiO1xuaW1wb3J0IEJ1dHRvbiBmcm9tIFwiLi9CdXR0b25cIjtcbmltcG9ydCBSb3cgZnJvbSBcIi4vUm93XCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEVycm9yU2NyZWVuIGV4dGVuZHMgU2NlbmUge1xuICBjb25zdHJ1Y3RvcihjYW52YXMpIHtcbiAgICBzdXBlcigpO1xuICAgIHRoaXMuY2FudmFzID0gY2FudmFzO1xuICAgIHRoaXMubGFiZWxEZXRhaWxzU2NlbmVFcnJvciA9IG5ldyBMYWJlbChcIlwiLCBudWxsLCBudWxsLCBuZXcgU3R5bGUoeyBcImZvbnRDb2xvclwiOiBcIndoaXRlXCIsIFwiYWxpZ25lbWVudFwiOiBcImNlbnRlclwiLCBcImZvbnRTaXplXCI6IENvbnN0YW50cy5TZXR0aW5nLkZPTlRfU0laRSAvIDEuNzUgfSkpO1xuICAgIHRoaXMubGFiZWxEZXRhaWxzU2NlbmVFcnJvci5oaWRkZW4gPSB0cnVlO1xuXG4gICAgY29uc3QgYnV0dG9uU2NlbmVFcnJvciA9IG5ldyBCdXR0b24obnVsbCwgbnVsbCwgbnVsbCwgbnVsbCwgbmV3IFN0eWxlKHsgXCJiYWNrZ3JvdW5kQ29sb3JcIjogQ29uc3RhbnRzLlNldHRpbmcuQlVUVE9OX0RFRkFVTFRfQUxURVJOQVRJVkVfQkFDS0dST1VORCB9KSwgbmV3IExhYmVsKENvbnN0YW50cy5TdHJpbmcuUkVUUlksIG51bGwsIG51bGwsIG5ldyBTdHlsZSh7IFwiZm9udENvbG9yXCI6IFwid2hpdGVcIiwgXCJhbGlnbmVtZW50XCI6IFwiY2VudGVyXCIgfSkpKTtcbiAgICBjb25zdCBidXR0b25EZXRhaWxzU2NlbmVFcnJvciA9IG5ldyBCdXR0b24obnVsbCwgbnVsbCwgbnVsbCwgbnVsbCwgbmV3IFN0eWxlKHsgXCJiYWNrZ3JvdW5kQ29sb3JcIjogQ29uc3RhbnRzLlNldHRpbmcuQlVUVE9OX0RFRkFVTFRfQUxURVJOQVRJVkVfQkFDS0dST1VORCB9KSwgbmV3IExhYmVsKENvbnN0YW50cy5TdHJpbmcuREVUQUlMUywgbnVsbCwgbnVsbCwgbmV3IFN0eWxlKHsgXCJmb250Q29sb3JcIjogXCJ3aGl0ZVwiLCBcImFsaWduZW1lbnRcIjogXCJjZW50ZXJcIiB9KSkpO1xuICAgIGNvbnN0IGNvbERldGFpbHNTY2VuZUVycm9yID0gbmV3IFJvdyhudWxsLCBudWxsLCBudWxsLCAwLCBuZXcgU3R5bGUoeyBcImFsaWduZW1lbnRcIjogXCJjZW50ZXJcIiB9KSwgdGhpcy5sYWJlbERldGFpbHNTY2VuZUVycm9yKTtcbiAgICBjb25zdCBtZW51U2NlbmVFcnJvciA9IG5ldyBNZW51KG5ldyBTdHlsZSh7IFwic3BhY2VCZXR3ZWVuQ29tcG9uZW50c1wiOiAxNSwgXCJiYWNrZ3JvdW5kQ29sb3JcIjogQ29uc3RhbnRzLlNldHRpbmcuRVJST1JfTUVOVV9CQUNLR1JPVU5EX0NPTE9SIH0pLCBuZXcgTGFiZWwoQ29uc3RhbnRzLlN0cmluZy5FUlJPUl9NRVNTQUdFX0NBTlZBU19MQUJFTCwgbnVsbCwgbnVsbCwgbmV3IFN0eWxlKHsgXCJmb250Q29sb3JcIjogXCJ3aGl0ZVwiLCBcImFsaWduZW1lbnRcIjogXCJjZW50ZXJcIiB9KSksIGNvbERldGFpbHNTY2VuZUVycm9yLCBuZXcgUm93KG51bGwsIG51bGwsIG51bGwsIG51bGwsIG5ldyBTdHlsZSh7IFwiYWxpZ25lbWVudFwiOiBcImNlbnRlclwiIH0pLCBidXR0b25TY2VuZUVycm9yLCBidXR0b25EZXRhaWxzU2NlbmVFcnJvcikpO1xuICAgIG1lbnVTY2VuZUVycm9yLmVuYWJsZSgpO1xuXG4gICAgYnV0dG9uU2NlbmVFcnJvci5hZGRDbGlja0FjdGlvbigoKSA9PiB7XG4gICAgICAgIHRoaXMuY2FudmFzLmhhc0Vycm9yID0gZmFsc2U7XG4gICAgICAgIHRoaXMuY2FudmFzLnNjZW5lID0gdGhpcy5jYW52YXMuc2NlbmVQcmV2aW91cztcbiAgICAgICAgdGhpcy5sYWJlbERldGFpbHNTY2VuZUVycm9yLmhpZGRlbiA9IHRydWU7XG4gICAgICAgIGNvbERldGFpbHNTY2VuZUVycm9yLm1heEhlaWdodCA9IDA7XG4gICAgfSk7XG5cbiAgICBidXR0b25EZXRhaWxzU2NlbmVFcnJvci5hZGRDbGlja0FjdGlvbigoKSA9PiB7XG4gICAgICAgIHRoaXMubGFiZWxEZXRhaWxzU2NlbmVFcnJvci5oaWRkZW4gPSAhdGhpcy5sYWJlbERldGFpbHNTY2VuZUVycm9yLmhpZGRlbjtcbiAgICAgICAgY29sRGV0YWlsc1NjZW5lRXJyb3IubWF4SGVpZ2h0ID0gIXRoaXMubGFiZWxEZXRhaWxzU2NlbmVFcnJvci5oaWRkZW4gPyAxMDAgOiAwO1xuICAgIH0pO1xuXG4gICAgdGhpcy5hZGQobWVudVNjZW5lRXJyb3IpO1xuICB9XG5cbiAgc2V0IGVycm9yVGV4dCh0ZXh0KSB7XG4gICAgdGhpcy5sYWJlbERldGFpbHNTY2VuZUVycm9yLnRleHQgPSB0ZXh0O1xuICB9XG5cbiAgZ2V0IGVycm9yVGV4dCgpIHtcbiAgICByZXR1cm4gdGhpcy5sYWJlbERldGFpbHNTY2VuZUVycm9yLnRleHQ7XG4gIH1cbn0iLCIvKlxuICogQ29weXJpZ2h0IChDKSAyMDIwIEVsaWFzdGlrIChlbGlhc3Rpa3NvZnRzLmNvbSlcbiAqXG4gKiBUaGlzIGZpbGUgaXMgcGFydCBvZiBcIkpTR2FtZVRvb2xzXCIuXG4gKlxuICogXCJKU0dhbWVUb29sc1wiIGlzIGZyZWUgc29mdHdhcmU6IHlvdSBjYW4gcmVkaXN0cmlidXRlIGl0IGFuZC9vciBtb2RpZnlcbiAqIGl0IHVuZGVyIHRoZSB0ZXJtcyBvZiB0aGUgR05VIEdlbmVyYWwgUHVibGljIExpY2Vuc2UgYXMgcHVibGlzaGVkIGJ5XG4gKiB0aGUgRnJlZSBTb2Z0d2FyZSBGb3VuZGF0aW9uLCBlaXRoZXIgdmVyc2lvbiAzIG9mIHRoZSBMaWNlbnNlLCBvclxuICogKGF0IHlvdXIgb3B0aW9uKSBhbnkgbGF0ZXIgdmVyc2lvbi5cbiAqXG4gKiBcIkpTR2FtZVRvb2xzXCIgaXMgZGlzdHJpYnV0ZWQgaW4gdGhlIGhvcGUgdGhhdCBpdCB3aWxsIGJlIHVzZWZ1bCxcbiAqIGJ1dCBXSVRIT1VUIEFOWSBXQVJSQU5UWTsgd2l0aG91dCBldmVuIHRoZSBpbXBsaWVkIHdhcnJhbnR5IG9mXG4gKiBNRVJDSEFOVEFCSUxJVFkgb3IgRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UuICBTZWUgdGhlXG4gKiBHTlUgR2VuZXJhbCBQdWJsaWMgTGljZW5zZSBmb3IgbW9yZSBkZXRhaWxzLlxuICpcbiAqIFlvdSBzaG91bGQgaGF2ZSByZWNlaXZlZCBhIGNvcHkgb2YgdGhlIEdOVSBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlXG4gKiBhbG9uZyB3aXRoIFwiSlNHYW1lVG9vbHNcIi4gIElmIG5vdCwgc2VlIDxodHRwOi8vd3d3LmdudS5vcmcvbGljZW5zZXMvPi5cbiAqL1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRXZlbnQge1xuICBjb25zdHJ1Y3RvcihuYW1lKSB7XG4gICAgdGhpcy5uYW1lID0gbmFtZTtcbiAgICB0aGlzLmNhbGxiYWNrcyA9IFtdO1xuICB9XG5cbiAgcmVnaXN0ZXJDYWxsYmFjayhjYWxsYmFjaykge1xuICAgIHRoaXMuY2FsbGJhY2tzLnB1c2goY2FsbGJhY2spO1xuICB9XG5cbiAgcmVtb3ZlQ2FsbGJhY2soY2FsbGJhY2spIHtcbiAgICB0aGlzLmNhbGxiYWNrcy5maWx0ZXIoY3VycmVudCA9PiBjdXJyZW50ICE9IGNhbGxiYWNrKTtcbiAgfVxuXG4gIHJlbW92ZUFsbENhbGxiYWNrcygpIHtcbiAgICB0aGlzLmNhbGxiYWNrcyA9IFtdO1xuICB9XG59IiwiLypcbiAqIENvcHlyaWdodCAoQykgMjAyMCBFbGlhc3RpayAoZWxpYXN0aWtzb2Z0cy5jb20pXG4gKlxuICogVGhpcyBmaWxlIGlzIHBhcnQgb2YgXCJKU0dhbWVUb29sc1wiLlxuICpcbiAqIFwiSlNHYW1lVG9vbHNcIiBpcyBmcmVlIHNvZnR3YXJlOiB5b3UgY2FuIHJlZGlzdHJpYnV0ZSBpdCBhbmQvb3IgbW9kaWZ5XG4gKiBpdCB1bmRlciB0aGUgdGVybXMgb2YgdGhlIEdOVSBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlIGFzIHB1Ymxpc2hlZCBieVxuICogdGhlIEZyZWUgU29mdHdhcmUgRm91bmRhdGlvbiwgZWl0aGVyIHZlcnNpb24gMyBvZiB0aGUgTGljZW5zZSwgb3JcbiAqIChhdCB5b3VyIG9wdGlvbikgYW55IGxhdGVyIHZlcnNpb24uXG4gKlxuICogXCJKU0dhbWVUb29sc1wiIGlzIGRpc3RyaWJ1dGVkIGluIHRoZSBob3BlIHRoYXQgaXQgd2lsbCBiZSB1c2VmdWwsXG4gKiBidXQgV0lUSE9VVCBBTlkgV0FSUkFOVFk7IHdpdGhvdXQgZXZlbiB0aGUgaW1wbGllZCB3YXJyYW50eSBvZlxuICogTUVSQ0hBTlRBQklMSVRZIG9yIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFLiAgU2VlIHRoZVxuICogR05VIEdlbmVyYWwgUHVibGljIExpY2Vuc2UgZm9yIG1vcmUgZGV0YWlscy5cbiAqXG4gKiBZb3Ugc2hvdWxkIGhhdmUgcmVjZWl2ZWQgYSBjb3B5IG9mIHRoZSBHTlUgR2VuZXJhbCBQdWJsaWMgTGljZW5zZVxuICogYWxvbmcgd2l0aCBcIkpTR2FtZVRvb2xzXCIuICBJZiBub3QsIHNlZSA8aHR0cDovL3d3dy5nbnUub3JnL2xpY2Vuc2VzLz4uXG4gKi9cbmltcG9ydCBMYWJlbCBmcm9tIFwiLi9MYWJlbFwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBGUFNNZXRlciBleHRlbmRzIExhYmVsIHtcbiAgc2VsZWN0YWJsZSA9IGZhbHNlO1xuXG4gIGNvbnN0cnVjdG9yKGRpc3BsYXlGcmFtZXMsIHgsIHksIHN0eWxlKSB7XG4gICAgc3VwZXIobnVsbCwgeCwgeSwgc3R5bGUpO1xuXG4gICAgdGhpcy5kaXNwbGF5RnJhbWVzID0gZGlzcGxheUZyYW1lcyB8fCBmYWxzZTtcbiAgICB0aGlzLmZyYW1lcyA9IDA7XG4gICAgdGhpcy5sYXN0RnJhbWUgPSAwO1xuICAgIHRoaXMuY3VycmVudEZQUyA9IDA7XG5cbiAgICB0aGlzLmludGVydmFsQ291bnRGUFMgPSBzZXRJbnRlcnZhbCgoKSA9PiB0aGlzLmNvdW50RlBTKCksIDEwMDApO1xuICB9XG5cbiAgZHJhdyhjb250ZXh0KSB7XG4gICAgaWYodGhpcy5oaWRkZW4pIHJldHVybjtcbiAgICB0aGlzLnRleHQgPSBcIkZQUzogXCIgKyB0aGlzLmN1cnJlbnRGUFMgKyAodGhpcy5kaXNwbGF5RnJhbWVzID8gXCIgLyBGcmFtZXM6IFwiICsgdGhpcy5mcmFtZXMgOiBcIlwiKTtcbiAgICBzdXBlci5kcmF3KGNvbnRleHQpO1xuICAgIHRoaXMuZnJhbWVzKys7XG4gIH1cblxuICBjb3VudEZQUygpIHtcbiAgICBpZih0aGlzLmxhc3RGcmFtZSA+IDApIHRoaXMuY3VycmVudEZQUyA9IHRoaXMuZnJhbWVzIC0gdGhpcy5sYXN0RnJhbWU7XG4gICAgdGhpcy5sYXN0RnJhbWUgPSB0aGlzLmZyYW1lcztcbiAgfVxufSIsIi8qXG4gKiBDb3B5cmlnaHQgKEMpIDIwMjAgRWxpYXN0aWsgKGVsaWFzdGlrc29mdHMuY29tKVxuICpcbiAqIFRoaXMgZmlsZSBpcyBwYXJ0IG9mIFwiSlNHYW1lVG9vbHNcIi5cbiAqXG4gKiBcIkpTR2FtZVRvb2xzXCIgaXMgZnJlZSBzb2Z0d2FyZTogeW91IGNhbiByZWRpc3RyaWJ1dGUgaXQgYW5kL29yIG1vZGlmeVxuICogaXQgdW5kZXIgdGhlIHRlcm1zIG9mIHRoZSBHTlUgR2VuZXJhbCBQdWJsaWMgTGljZW5zZSBhcyBwdWJsaXNoZWQgYnlcbiAqIHRoZSBGcmVlIFNvZnR3YXJlIEZvdW5kYXRpb24sIGVpdGhlciB2ZXJzaW9uIDMgb2YgdGhlIExpY2Vuc2UsIG9yXG4gKiAoYXQgeW91ciBvcHRpb24pIGFueSBsYXRlciB2ZXJzaW9uLlxuICpcbiAqIFwiSlNHYW1lVG9vbHNcIiBpcyBkaXN0cmlidXRlZCBpbiB0aGUgaG9wZSB0aGF0IGl0IHdpbGwgYmUgdXNlZnVsLFxuICogYnV0IFdJVEhPVVQgQU5ZIFdBUlJBTlRZOyB3aXRob3V0IGV2ZW4gdGhlIGltcGxpZWQgd2FycmFudHkgb2ZcbiAqIE1FUkNIQU5UQUJJTElUWSBvciBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRS4gIFNlZSB0aGVcbiAqIEdOVSBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlIGZvciBtb3JlIGRldGFpbHMuXG4gKlxuICogWW91IHNob3VsZCBoYXZlIHJlY2VpdmVkIGEgY29weSBvZiB0aGUgR05VIEdlbmVyYWwgUHVibGljIExpY2Vuc2VcbiAqIGFsb25nIHdpdGggXCJKU0dhbWVUb29sc1wiLiAgSWYgbm90LCBzZWUgPGh0dHA6Ly93d3cuZ251Lm9yZy9saWNlbnNlcy8+LlxuICovXG5pbXBvcnQgVXRpbHMgZnJvbSBcIi4vVXRpbHNcIjtcbmltcG9ydCBDb21wb25lbnQgZnJvbSBcIi4vQ29tcG9uZW50XCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEltYWdlQ29udGFpbmVyIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgc2VsZWN0YWJsZSA9IGZhbHNlO1xuXG4gIGNvbnN0cnVjdG9yKGltYWdlLCB4LCB5LCB3aWR0aCwgaGVpZ2h0LCBzdHlsZSwgaW1hZ2VMb2FkZXIpIHtcbiAgICBzdXBlcih4LCB5LCB3aWR0aCwgaGVpZ2h0LCBzdHlsZSk7XG4gICAgdGhpcy5pbWFnZTtcbiAgICB0aGlzLmltZ1NyYztcbiAgICB0aGlzLmltYWdlTG9hZGVyID0gaW1hZ2VMb2FkZXI7XG5cbiAgICBpZihpbWFnZSBpbnN0YW5jZW9mIEltYWdlKSB7XG4gICAgICB0aGlzLmltYWdlID0gaW1hZ2U7XG4gICAgICB0aGlzLmltZ1NyYyA9IGltYWdlLnNyYztcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5pbWdTcmMgPSBpbWFnZTtcbiAgICB9XG4gIH1cblxuICBkcmF3KGNvbnRleHQpIHtcbiAgICBpZih0aGlzLmhpZGRlbikgcmV0dXJuO1xuICAgIHN1cGVyLmRyYXcoY29udGV4dCk7XG4gICAgXG4gICAgY29uc3QgY2FudmFzID0gY29udGV4dC5jYW52YXM7XG4gICAgY29uc3QgY3R4ID0gY2FudmFzLmdldENvbnRleHQoXCIyZFwiKTtcbiAgICBjdHguc2F2ZSgpO1xuICAgIFxuICAgIGlmKHRoaXMuaW1nU3JjICE9IG51bGwgJiYgdGhpcy5pbWFnZUxvYWRlciAhPSBudWxsKSB7XG4gICAgICB0aGlzLmxvYWRJbWFnZSh0aGlzLmltYWdlTG9hZGVyKTtcbiAgICB9XG5cbiAgICBpZih0aGlzLmltYWdlICE9IG51bGwpIHtcbiAgICAgIHRoaXMuZHJhd0ltYWdlKGN0eCk7XG4gICAgfVxuXG4gICAgY3R4LnJlc3RvcmUoKTtcbiAgfVxuXG4gIGRyYXdJbWFnZShjdHgpIHtcbiAgICBVdGlscy5kcmF3SW1hZ2UoY3R4LCB0aGlzLmltYWdlLCBNYXRoLnJvdW5kKHRoaXMueCksIE1hdGgucm91bmQodGhpcy55KSwgTWF0aC5yb3VuZCh0aGlzLndpZHRoKSwgTWF0aC5yb3VuZCh0aGlzLmhlaWdodCkpO1xuICB9XG5cbiAgZ2V0IHNpemVzKCkge1xuICAgIGxldCBpbWdXaWR0aCA9IHN1cGVyLndpZHRoO1xuICAgIGxldCBpbWdIZWlnaHQgPSBzdXBlci5oZWlnaHQ7XG5cbiAgICBpZih0aGlzLmltYWdlTG9hZGVyKSB7XG4gICAgICB0aGlzLmxvYWRJbWFnZSh0aGlzLmltYWdlTG9hZGVyKTtcbiAgICB9XG4gICAgXG4gICAgaWYodGhpcy5pbWFnZSAmJiAodGhpcy5pbWFnZS53aWR0aCA+IHN1cGVyLndpZHRoIHx8IHRoaXMuaW1hZ2UuaGVpZ2h0ID4gc3VwZXIuaGVpZ2h0KSkge1xuICAgICAgY29uc3QgYXNwZWN0UmF0aW8gPSB0aGlzLmltYWdlLndpZHRoIC8gdGhpcy5pbWFnZS5oZWlnaHQ7XG4gICAgICBpbWdXaWR0aCA9IE1hdGguZmxvb3Ioc3VwZXIud2lkdGggLyAxLjI1KTtcbiAgICAgIGltZ0hlaWdodCA9IE1hdGguZmxvb3IoaW1nV2lkdGggLyBhc3BlY3RSYXRpbyk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHtcbiAgICAgIHdpZHRoOiBpbWdXaWR0aCxcbiAgICAgIGhlaWdodDogaW1nSGVpZ2h0XG4gICAgfVxuICB9XG5cbiAgZ2V0IGhlaWdodCgpIHtcbiAgICByZXR1cm4gdGhpcy5zaXplcy5oZWlnaHQ7XG4gIH1cblxuICBnZXQgd2lkdGgoKSB7XG4gICAgcmV0dXJuIHRoaXMuc2l6ZXMud2lkdGg7XG4gIH1cblxuICBzZXQgd2lkdGgod2lkdGgpIHtcbiAgICBzdXBlci53aWR0aCA9IHdpZHRoO1xuICB9XG5cbiAgc2V0IGhlaWdodChoZWlnaHQpIHtcbiAgICBzdXBlci5oZWlnaHQgPSBoZWlnaHQ7XG4gIH1cbiAgXG4gIGxvYWRJbWFnZShpbWFnZUxvYWRlcikge1xuICAgIHRoaXMuaW1hZ2UgPSBpbWFnZUxvYWRlci5nZXQodGhpcy5pbWdTcmMpO1xuICB9XG59IiwiLypcbiAqIENvcHlyaWdodCAoQykgMjAyMCBFbGlhc3RpayAoZWxpYXN0aWtzb2Z0cy5jb20pXG4gKlxuICogVGhpcyBmaWxlIGlzIHBhcnQgb2YgXCJKU0dhbWVUb29sc1wiLlxuICpcbiAqIFwiSlNHYW1lVG9vbHNcIiBpcyBmcmVlIHNvZnR3YXJlOiB5b3UgY2FuIHJlZGlzdHJpYnV0ZSBpdCBhbmQvb3IgbW9kaWZ5XG4gKiBpdCB1bmRlciB0aGUgdGVybXMgb2YgdGhlIEdOVSBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlIGFzIHB1Ymxpc2hlZCBieVxuICogdGhlIEZyZWUgU29mdHdhcmUgRm91bmRhdGlvbiwgZWl0aGVyIHZlcnNpb24gMyBvZiB0aGUgTGljZW5zZSwgb3JcbiAqIChhdCB5b3VyIG9wdGlvbikgYW55IGxhdGVyIHZlcnNpb24uXG4gKlxuICogXCJKU0dhbWVUb29sc1wiIGlzIGRpc3RyaWJ1dGVkIGluIHRoZSBob3BlIHRoYXQgaXQgd2lsbCBiZSB1c2VmdWwsXG4gKiBidXQgV0lUSE9VVCBBTlkgV0FSUkFOVFk7IHdpdGhvdXQgZXZlbiB0aGUgaW1wbGllZCB3YXJyYW50eSBvZlxuICogTUVSQ0hBTlRBQklMSVRZIG9yIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFLiAgU2VlIHRoZVxuICogR05VIEdlbmVyYWwgUHVibGljIExpY2Vuc2UgZm9yIG1vcmUgZGV0YWlscy5cbiAqXG4gKiBZb3Ugc2hvdWxkIGhhdmUgcmVjZWl2ZWQgYSBjb3B5IG9mIHRoZSBHTlUgR2VuZXJhbCBQdWJsaWMgTGljZW5zZVxuICogYWxvbmcgd2l0aCBcIkpTR2FtZVRvb2xzXCIuICBJZiBub3QsIHNlZSA8aHR0cDovL3d3dy5nbnUub3JnL2xpY2Vuc2VzLz4uXG4gKi9cbmltcG9ydCBVdGlscyBmcm9tIFwiLi9VdGlsc1wiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBJbWFnZUxvYWRlciB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHRoaXMuaW1hZ2VzID0ge307XG4gICAgdGhpcy5pbWFnZXNSZXNpemVkID0ge307XG4gICAgdGhpcy50cmllZExvYWRpbmcgPSAwO1xuICAgIHRoaXMuaGFzRXJyb3IgPSBmYWxzZTtcbiAgICB0aGlzLm5iSW1hZ2VzVG9Mb2FkID0gMTtcbiAgICB0aGlzLmZpcnN0SW1hZ2UgPSB0cnVlO1xuICB9XG5cbiAgbG9hZChpbWcsIGZ1bmMpIHtcbiAgICBpZih0aGlzLmZpcnN0SW1hZ2UpIHtcbiAgICAgIHRoaXMubmJJbWFnZXNUb0xvYWQgPSBpbWcubGVuZ3RoO1xuICAgICAgdGhpcy5maXJzdEltYWdlID0gZmFsc2U7XG4gICAgfVxuICAgIFxuICAgIGlmKGltZy5sZW5ndGggPiAwKSB7XG4gICAgICB0aGlzLmxvYWRJbWFnZShpbWdbMF0sIHJlc3VsdCA9PiB7XG4gICAgICAgIGlmKHJlc3VsdCA9PSB0cnVlKSB7XG4gICAgICAgICAgaW1nLnNoaWZ0KCk7XG4gICAgICAgICAgdGhpcy5sb2FkKGltZywgZnVuYyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdGhpcy5oYXNFcnJvciA9IHRydWU7XG4gICAgICAgICAgcmV0dXJuIGZ1bmMoKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiBmdW5jKCk7XG4gICAgfVxuICB9XG5cbiAgbG9hZEltYWdlKHNyYywgZnVuYykge1xuICAgIHRoaXMudHJpZWRMb2FkaW5nKys7XG4gIFxuICAgIGNvbnN0IGltYWdlID0gbmV3IEltYWdlKCk7XG4gICAgaW1hZ2Uuc3JjID0gc3JjO1xuICBcbiAgICBpbWFnZS5vbmxvYWQgPSAoKSA9PiB7XG4gICAgICBpZih0aGlzLmltYWdlcyAhPSBudWxsKSB7XG4gICAgICAgIHRoaXMuaW1hZ2VzW3NyY10gPSBpbWFnZTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiBmdW5jKGZhbHNlKTtcbiAgICAgIH1cbiAgXG4gICAgICB0aGlzLnRyaWVkTG9hZGluZyA9IDA7XG4gICAgICByZXR1cm4gZnVuYyh0cnVlKTtcbiAgICB9O1xuICBcbiAgICBpbWFnZS5vbmVycm9yID0gKCkgPT4ge1xuICAgICAgaWYodGhpcy50cmllZExvYWRpbmcgPj0gNSkge1xuICAgICAgICBpZih0aGlzLmltYWdlcyAhPSBudWxsKSB7XG4gICAgICAgICAgdGhpcy5pbWFnZXNbc3JjXSA9IGltYWdlO1xuICAgICAgICB9XG4gIFxuICAgICAgICB0aGlzLnRyaWVkTG9hZGluZyA9IDA7XG4gICAgICAgIHJldHVybiBmdW5jKGZhbHNlKTtcbiAgICAgIH1cbiAgXG4gICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgdGhpcy5sb2FkSW1hZ2Uoc3JjLCBmdW5jKTtcbiAgICAgIH0sIDI1MCk7XG4gICAgfVxuICB9XG5cbiAgZ2V0KHNyYywgd2lkdGgsIGhlaWdodCkge1xuICAgIGlmKHRoaXMuaW1hZ2VzICE9IG51bGwgJiYgdGhpcy5pbWFnZXMuaGFzT3duUHJvcGVydHkoc3JjKSkge1xuICAgICAgY29uc3QgaW1hZ2UgPSB0aGlzLmltYWdlc1tzcmNdO1xuXG4gICAgICBpZigod2lkdGggfHwgaGVpZ2h0KSAmJiAoaW1hZ2Uud2lkdGggIT0gd2lkdGggfHwgaW1hZ2UuaGVpZ2h0ICE9IGhlaWdodCkpIHtcbiAgICAgICAgY29uc3QgdyA9IE1hdGgucm91bmQod2lkdGgpO1xuICAgICAgICBjb25zdCBoID0gTWF0aC5yb3VuZChoZWlnaHQpO1xuICAgICAgICBjb25zdCBpZCA9IHNyYyArIFwiQFwiICsgdyArIFwiLVwiICsgaDtcblxuICAgICAgICBpZighdGhpcy5pbWFnZXNSZXNpemVkLmhhc093blByb3BlcnR5KGlkKSkge1xuICAgICAgICAgIGNvbnN0IGNhbnZhc1RtcCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJjYW52YXNcIik7XG4gICAgICAgICAgY29uc3QgY3R4ID0gY2FudmFzVG1wLmdldENvbnRleHQoXCIyZFwiKTtcbiAgICAgICAgICBjYW52YXNUbXAud2lkdGggPSB3O1xuICAgICAgICAgIGNhbnZhc1RtcC5oZWlnaHQgPSBoO1xuXG4gICAgICAgICAgVXRpbHMuZHJhd0ltYWdlKGN0eCwgaW1hZ2UsIDAsIDAsIHcsIGgsIDAsIDAsIGltYWdlLndpZHRoLCBpbWFnZS5oZWlnaHQpO1xuICAgICAgICAgIHRoaXMuaW1hZ2VzUmVzaXplZFtpZF0gPSBjYW52YXNUbXA7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gdGhpcy5pbWFnZXNSZXNpemVkW2lkXTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiBpbWFnZTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuICB9XG5cbiAgY2xlYXIoKSB7XG4gICAgdGhpcy5pbWFnZXMgPSBudWxsO1xuICB9XG59IiwiLypcbiAqIENvcHlyaWdodCAoQykgMjAyMCBFbGlhc3RpayAoZWxpYXN0aWtzb2Z0cy5jb20pXG4gKlxuICogVGhpcyBmaWxlIGlzIHBhcnQgb2YgXCJKU0dhbWVUb29sc1wiLlxuICpcbiAqIFwiSlNHYW1lVG9vbHNcIiBpcyBmcmVlIHNvZnR3YXJlOiB5b3UgY2FuIHJlZGlzdHJpYnV0ZSBpdCBhbmQvb3IgbW9kaWZ5XG4gKiBpdCB1bmRlciB0aGUgdGVybXMgb2YgdGhlIEdOVSBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlIGFzIHB1Ymxpc2hlZCBieVxuICogdGhlIEZyZWUgU29mdHdhcmUgRm91bmRhdGlvbiwgZWl0aGVyIHZlcnNpb24gMyBvZiB0aGUgTGljZW5zZSwgb3JcbiAqIChhdCB5b3VyIG9wdGlvbikgYW55IGxhdGVyIHZlcnNpb24uXG4gKlxuICogXCJKU0dhbWVUb29sc1wiIGlzIGRpc3RyaWJ1dGVkIGluIHRoZSBob3BlIHRoYXQgaXQgd2lsbCBiZSB1c2VmdWwsXG4gKiBidXQgV0lUSE9VVCBBTlkgV0FSUkFOVFk7IHdpdGhvdXQgZXZlbiB0aGUgaW1wbGllZCB3YXJyYW50eSBvZlxuICogTUVSQ0hBTlRBQklMSVRZIG9yIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFLiAgU2VlIHRoZVxuICogR05VIEdlbmVyYWwgUHVibGljIExpY2Vuc2UgZm9yIG1vcmUgZGV0YWlscy5cbiAqXG4gKiBZb3Ugc2hvdWxkIGhhdmUgcmVjZWl2ZWQgYSBjb3B5IG9mIHRoZSBHTlUgR2VuZXJhbCBQdWJsaWMgTGljZW5zZVxuICogYWxvbmcgd2l0aCBcIkpTR2FtZVRvb2xzXCIuICBJZiBub3QsIHNlZSA8aHR0cDovL3d3dy5nbnUub3JnL2xpY2Vuc2VzLz4uXG4gKi9cbmltcG9ydCBDb25zdGFudHMgZnJvbSBcIi4vQ29uc3RhbnRzXCI7XG5pbXBvcnQgVXRpbHMgZnJvbSBcIi4vVXRpbHNcIjtcbmltcG9ydCBCb3ggZnJvbSBcIi4vQm94XCI7XG5pbXBvcnQgU3R5bGUgZnJvbSBcIi4vU3R5bGVcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgSW5wdXQgZXh0ZW5kcyBCb3gge1xuICBzZWxlY3RhYmxlID0gdHJ1ZTtcbiAgI19wb3NpdGlvblN0YXJ0ID0gMDtcbiAgI19wb3NpdGlvblN0YXJ0Q2xpY2sgPSAwO1xuICAjX3Bvc2l0aW9uRW5kID0gMDtcblxuICBjb25zdHJ1Y3Rvcih4LCB5LCB3aWR0aCwgaGVpZ2h0LCBzdHlsZSwgZGVmYXVsdFRleHQpIHtcbiAgICBzdXBlcih4LCB5LCB3aWR0aCwgaGVpZ2h0LCBzdHlsZSk7XG4gICAgXG4gICAgdGhpcy50ZXh0ID0gZGVmYXVsdFRleHQgfHwgXCJcIjtcbiAgICB0aGlzLiNfcG9zaXRpb25TdGFydCA9IDA7XG4gICAgdGhpcy4jX3Bvc2l0aW9uRW5kID0gMDtcbiAgICB0aGlzLiNfcG9zaXRpb25TdGFydENsaWNrID0gMDtcbiAgICB0aGlzLmxhc3RJbnB1dFRleHQgPSBmYWxzZTtcbiAgICB0aGlzLm9mZnNldFggPSAwO1xuICAgIHRoaXMubGFzdFRpbWUgPSAwO1xuICAgIHRoaXMudG90YWxUaW1lID0gMDtcbiAgICB0aGlzLmNsaWNrQ3VycmVudFBvc2l0aW9uID0gbnVsbDtcbiAgICB0aGlzLnRleHRDYWNoZSA9IG51bGw7XG5cbiAgICB0aGlzLmlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xuICAgIHRoaXMuaW5wdXQuc2V0QXR0cmlidXRlKFwidHlwZVwiLCBcInRleHRcIik7XG4gICAgdGhpcy5pbnB1dC5zdHlsZS5wb3NpdGlvbiA9IFwiYWJzb2x1dGVcIjtcbiAgICB0aGlzLmlucHV0LnN0eWxlLmxlZnQgPSBcIi05OTk5cHhcIjtcbiAgICB0aGlzLmlucHV0LnRhYkluZGV4ID0gLTE7XG4gICAgdGhpcy5pbnB1dC52YWx1ZSA9IHRoaXMudGV4dDtcbiAgICB0aGlzLmlucHV0LmFkZEV2ZW50TGlzdGVuZXIoXCJibHVyXCIsICgpID0+IHRoaXMuc2VsZWN0ZWQgPSBmYWxzZSk7XG4gICAgdGhpcy5pbnB1dC5hZGRFdmVudExpc3RlbmVyKFwiZm9jdXNcIiwgKCkgPT4gdGhpcy5zZWxlY3RlZCA9IHRydWUpO1xuICAgIHRoaXMuaW5wdXQuYWRkRXZlbnRMaXN0ZW5lcihcImlucHV0XCIsICgpID0+IHtcbiAgICAgIHRoaXMudG90YWxUaW1lID0gMFxuICAgICAgdGhpcy5sYXN0SW5wdXRUZXh0ID0gdHJ1ZTtcbiAgICAgIHRoaXMucG9zaXRpb25TdGFydCA9IHRoaXMuaW5wdXQuc2VsZWN0aW9uU3RhcnQ7XG4gICAgICB0aGlzLnBvc2l0aW9uRW5kID0gdGhpcy5pbnB1dC5zZWxlY3Rpb25FbmQ7XG4gICAgfSk7XG5cbiAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKHRoaXMuaW5wdXQpO1xuXG4gICAgdGhpcy5hcHBlbmRUb0NhbnZhcyA9IGZhbHNlO1xuICAgIHRoaXMubm90aWNlTG9nZ2VkID0gZmFsc2U7XG5cbiAgICB0aGlzLmNhbnZhc1RtcCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJjYW52YXNcIik7XG5cbiAgICBjb25zdCBtb3ZlQWN0aW9uQ2FsbGJhY2sgPSAoZGVsdGFYLCBkZWx0YVksIHBvc2l0aW9uKSA9PiB7XG4gICAgICBpZihwb3NpdGlvbikge1xuICAgICAgICBjb25zdCBpQ2xpY2sgPSB0aGlzLmdldExldHRlckNsaWNrZWQocG9zaXRpb24pO1xuICBcbiAgICAgICAgaWYoaUNsaWNrICE9IG51bGwpIHtcbiAgICAgICAgICBpZihpQ2xpY2sgPiB0aGlzLnBvc2l0aW9uU3RhcnRDbGljaykge1xuICAgICAgICAgICAgdGhpcy5zZXRTZWxlY3Rpb25SYW5nZSh0aGlzLnBvc2l0aW9uU3RhcnRDbGljaywgaUNsaWNrLCBcImZvcndhcmRcIik7XG4gICAgICAgICAgfSBlbHNlIGlmKGlDbGljayA8IHRoaXMucG9zaXRpb25TdGFydENsaWNrKSB7XG4gICAgICAgICAgICB0aGlzLnNldFNlbGVjdGlvblJhbmdlKGlDbGljaywgdGhpcy5wb3NpdGlvblN0YXJ0Q2xpY2ssIFwiYmFja3dhcmRcIik7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfTtcblxuICAgIHRoaXMuYWRkRG93bkFjdGlvbihwb3NpdGlvbiA9PiB7XG4gICAgICBjb25zdCBpQ2xpY2sgPSB0aGlzLmdldExldHRlckNsaWNrZWQocG9zaXRpb24pO1xuXG4gICAgICBpZihpQ2xpY2sgIT0gbnVsbCkge1xuICAgICAgICB0aGlzLnBvc2l0aW9uU3RhcnRDbGljayA9IGlDbGljaztcbiAgICAgICAgdGhpcy5zZXRTZWxlY3Rpb25SYW5nZShpQ2xpY2ssIGlDbGljaywgXCJmb3J3YXJkXCIpO1xuICAgICAgfVxuXG4gICAgICB0aGlzLnRvdGFsVGltZSA9IDA7XG4gICAgfSk7XG5cbiAgICB0aGlzLmFkZENsaWNrQWN0aW9uKCgpID0+IHRoaXMuY2xpY2soKSk7XG4gICAgdGhpcy5hZGRNb3ZlQWN0aW9uKG1vdmVBY3Rpb25DYWxsYmFjayk7XG4gICAgdGhpcy5hZGRTY3JvbGxBY3Rpb24obW92ZUFjdGlvbkNhbGxiYWNrKTtcbiAgfVxuXG4gIGRyYXcoY29udGV4dCkge1xuICAgIGlmKHRoaXMuaGlkZGVuKSByZXR1cm47XG4gICAgc3VwZXIuZHJhdyhjb250ZXh0KTtcbiAgICBcbiAgICBjb25zdCBjYW52YXMgPSBjb250ZXh0LmNhbnZhcztcbiAgICBjb25zdCBjdHggPSBjYW52YXMuZ2V0Q29udGV4dChcIjJkXCIpO1xuICAgIGN0eC5zYXZlKCk7XG5cbiAgICBpZih0aGlzLmlucHV0LnNlbGVjdGlvbkVuZCAhPSB0aGlzLnBvc2l0aW9uRW5kKSB0aGlzLnRvdGFsVGltZSA9IDA7XG5cbiAgICBpZih0aGlzLmNhbnZhcyAmJiB0aGlzLmNhbnZhcy5jb250YWluZXIgJiYgIXRoaXMuYXBwZW5kVG9DYW52YXMpIHtcbiAgICAgIGRvY3VtZW50LmJvZHkucmVtb3ZlQ2hpbGQodGhpcy5pbnB1dCk7XG4gICAgICB0aGlzLmNhbnZhcy5jb250YWluZXIuYXBwZW5kQ2hpbGQodGhpcy5pbnB1dCk7XG4gICAgICB0aGlzLmFwcGVuZFRvQ2FudmFzID0gdHJ1ZTtcbiAgICB9IGVsc2UgaWYoIXRoaXMuY2FudmFzICYmICF0aGlzLm5vdGljZUxvZ2dlZCkge1xuICAgICAgY29uc29sZSAmJiBjb25zb2xlLndhcm4gJiYgY29uc29sZS53YXJuKENvbnN0YW50cy5TdHJpbmcuV0FSTklOR19NRVNTQUdFICsgXCIgXCIgKyBDb25zdGFudHMuU3RyaW5nLklOUFVUX0ZVTExTQ1JFRU4pO1xuICAgICAgdGhpcy5ub3RpY2VMb2dnZWQgPSB0cnVlO1xuICAgIH1cblxuICAgIGlmKHRoaXMuc2VsZWN0ZWQgJiYgIXRoaXMuZGlzYWJsZWQpIHtcbiAgICAgIHRoaXMuY2xpY2soKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5ibHVyKCk7XG4gICAgfVxuXG4gICAgdGhpcy50ZXh0ID0gdGhpcy5pbnB1dC52YWx1ZTtcbiAgICB0aGlzLnBvc2l0aW9uU3RhcnQgPSB0aGlzLmlucHV0LnNlbGVjdGlvblN0YXJ0O1xuICAgIHRoaXMucG9zaXRpb25FbmQgPSB0aGlzLmlucHV0LnNlbGVjdGlvbkVuZDtcblxuICAgIGNvbnN0IHRpbWUgPSBwZXJmb3JtYW5jZS5ub3coKTtcbiAgICBsZXQgb2Zmc2V0VGltZSA9IDA7XG5cbiAgICBpZih0aGlzLmxhc3RUaW1lID4gMCkgb2Zmc2V0VGltZSA9IHRpbWUgLSB0aGlzLmxhc3RUaW1lO1xuICAgIHRoaXMubGFzdFRpbWUgPSB0aW1lO1xuICAgIHRoaXMudG90YWxUaW1lICs9IG9mZnNldFRpbWU7XG5cbiAgICB0aGlzLmRyYXdCYWNrZ3JvdW5kKGN0eCk7XG4gICAgdGhpcy5kcmF3Qm9yZGVyKGN0eCk7XG5cbiAgICB0aGlzLmNhbnZhc1RtcC53aWR0aCA9IFV0aWxzLmdldENhbnZhc1dpZHRoKGNhbnZhcykgKiBDb25zdGFudHMuU2V0dGluZy5QSVhFTF9SQVRJTztcbiAgICB0aGlzLmNhbnZhc1RtcC5oZWlnaHQgPSBVdGlscy5nZXRDYW52YXNIZWlnaHQoY2FudmFzKSAqIENvbnN0YW50cy5TZXR0aW5nLlBJWEVMX1JBVElPO1xuICAgIHRoaXMuY2FudmFzVG1wLnN0eWxlLndpZHRoID0gVXRpbHMuZ2V0Q2FudmFzV2lkdGgoY2FudmFzKTtcbiAgICB0aGlzLmNhbnZhc1RtcC5zdHlsZS5oZWlnaHQgPSBVdGlscy5nZXRDYW52YXNIZWlnaHQoY2FudmFzKTtcbiAgICBjb25zdCBjdHhUZXh0ID0gdGhpcy5jYW52YXNUbXAuZ2V0Q29udGV4dChcIjJkXCIpO1xuICAgIFV0aWxzLmNsZWFyKGN0eFRleHQpO1xuICAgIGN0eFRleHQuc2NhbGUoQ29uc3RhbnRzLlNldHRpbmcuUElYRUxfUkFUSU8sIENvbnN0YW50cy5TZXR0aW5nLlBJWEVMX1JBVElPKTtcblxuICAgIHRoaXMudXBkYXRlVGV4dENhY2hlKHRoaXMueCArIDUpO1xuICAgIHRoaXMuYXV0b1Njcm9sbCgpO1xuICAgIHRoaXMuZHJhd1RleHQoY3R4VGV4dCwgdGhpcy54ICsgNSk7XG5cbiAgICBVdGlscy5kcmF3SW1hZ2VEYXRhKGN0eCwgdGhpcy5jYW52YXNUbXAsIHRoaXMueCArIHRoaXMuc3R5bGUuYm9yZGVyU2l6ZSwgdGhpcy55ICsgdGhpcy5zdHlsZS5ib3JkZXJTaXplLCB0aGlzLndpZHRoIC0gdGhpcy5zdHlsZS5ib3JkZXJTaXplICogMiwgdGhpcy5oZWlnaHQgLSB0aGlzLnN0eWxlLmJvcmRlclNpemUgKiAyLCAodGhpcy54ICsgdGhpcy5zdHlsZS5ib3JkZXJTaXplKSAqIENvbnN0YW50cy5TZXR0aW5nLlBJWEVMX1JBVElPLCAodGhpcy55ICsgdGhpcy5zdHlsZS5ib3JkZXJTaXplKSAqIENvbnN0YW50cy5TZXR0aW5nLlBJWEVMX1JBVElPLCAodGhpcy53aWR0aCAtIHRoaXMuc3R5bGUuYm9yZGVyU2l6ZSAqIDIpICAqIENvbnN0YW50cy5TZXR0aW5nLlBJWEVMX1JBVElPLCAodGhpcy5oZWlnaHQgLSB0aGlzLnN0eWxlLmJvcmRlclNpemUgKiAyKSAqIENvbnN0YW50cy5TZXR0aW5nLlBJWEVMX1JBVElPKTtcblxuICAgIGlmKHRoaXMuaG92ZXJlZCB8fCB0aGlzLmNsaWNrZWQpIHtcbiAgICAgIGlmKHRoaXMuY2FudmFzICYmIHRoaXMuY2FudmFzLmNhbnZhcykge1xuICAgICAgICB0aGlzLmNhbnZhcy5jYW52YXMuc3R5bGUuY3Vyc29yID0gXCJ0ZXh0XCI7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBjYW52YXMuc3R5bGUuY3Vyc29yID0gXCJkZWZhdWx0XCI7XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYoIXRoaXMuc2VsZWN0ZWQpIHtcbiAgICAgIHRoaXMudG90YWxUaW1lID0gMDtcbiAgICB9XG5cbiAgICBjdHgucmVzdG9yZSgpO1xuICB9XG5cbiAgZHJhd1RleHQoY3R4VGV4dCwgY3VycmVudFgpIHtcbiAgICBmb3IobGV0IGkgPSAtMTsgaSA8IHRoaXMudGV4dC5sZW5ndGg7IGkrKykge1xuICAgICAgaWYoaSA+IC0xKSB7XG4gICAgICAgIGNvbnN0IHNpemVzID0gdGhpcy50ZXh0Q2FjaGUubGV0dGVyc1tpXS5zaXplcztcblxuICAgICAgICBjb25zdCB4RHJhdyA9IGN1cnJlbnRYIC0gdGhpcy5vZmZzZXRYO1xuICAgICAgICBjb25zdCB5RHJhdyA9IHRoaXMueSArIHRoaXMuc3R5bGUuYm9yZGVyU2l6ZTtcblxuICAgICAgICBpZih0aGlzLmlzTGV0dGVyVmlzaWJsZShpKSkgeyAvLyBEb24ndCBkcmF3IHRoZSB0ZXh0IGlmIGl0IGlzIG91dHNpZGUgdGhlIGlucHV0IChvdmVyZmxvdylcbiAgICAgICAgICBpZih0aGlzLnBvc2l0aW9uU3RhcnQgIT0gdGhpcy5wb3NpdGlvbkVuZCAmJiBpID49IHRoaXMucG9zaXRpb25TdGFydCAmJiBpIDwgdGhpcy5wb3NpdGlvbkVuZCkge1xuICAgICAgICAgICAgdGhpcy5kcmF3SGlnaGxpZ2h0KGN0eFRleHQsIGN1cnJlbnRYLCBzaXplcyk7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgVXRpbHMuZHJhd1RleHQoY3R4VGV4dCwgdGhpcy50ZXh0W2ldLCB0aGlzLnN0eWxlLmZvbnRDb2xvciwgdGhpcy5zdHlsZS5mb250U2l6ZSwgdGhpcy5zdHlsZS5mb250RmFtaWx5LCBcImRlZmF1bHRcIiwgXCJkZWZhdWx0XCIsIHhEcmF3LCB5RHJhdywgZmFsc2UpO1xuICAgICAgICB9XG5cbiAgICAgICAgY3VycmVudFggKz0gc2l6ZXNbXCJ3aWR0aFwiXSArIHRoaXMuc3R5bGUuc3BhY2VCZXR3ZWVuQ29tcG9uZW50cztcbiAgICAgIH1cblxuICAgICAgaWYodGhpcy5wb3NpdGlvbkVuZCA9PSBpICsgMSAmJiB0aGlzLnNlbGVjdGVkKSB7XG4gICAgICAgIGlmKHRoaXMudG90YWxUaW1lIDw9IDUwMCkge1xuICAgICAgICAgIHRoaXMuZHJhd0N1cnNvcihjdHhUZXh0LCBjdXJyZW50WCk7XG4gICAgICAgIH0gZWxzZSBpZih0aGlzLnRvdGFsVGltZSA+IDEwMDApIHtcbiAgICAgICAgICB0aGlzLnRvdGFsVGltZSA9IDA7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gY3VycmVudFg7XG4gIH1cblxuICBkcmF3Q3Vyc29yKGN0eFRleHQsIGN1cnJlbnRYKSB7XG4gICAgY3R4VGV4dC5zdHJva2VTdHlsZSA9IHRoaXMuc3R5bGUuYm9yZGVyQ29sb3I7XG4gICAgY3R4VGV4dC5saW5lV2lkdGggPSAxO1xuICAgIGN0eFRleHQuYmVnaW5QYXRoKCk7XG4gICAgY3R4VGV4dC5tb3ZlVG8oY3VycmVudFggLSB0aGlzLm9mZnNldFgsIHRoaXMueSArIDMpO1xuICAgIGN0eFRleHQubGluZVRvKGN1cnJlbnRYIC0gdGhpcy5vZmZzZXRYLCB0aGlzLnkgKyB0aGlzLnN0eWxlLmZvbnRTaXplKTtcbiAgICBjdHhUZXh0LnN0cm9rZSgpO1xuICB9XG5cbiAgZHJhd0hpZ2hsaWdodChjdHhUZXh0LCBjdXJyZW50WCwgc2l6ZXMpIHtcbiAgICBjdHhUZXh0LmZpbGxTdHlsZSA9IHRoaXMuc3R5bGUuc2VsZWN0Q29sb3I7XG4gICAgY3R4VGV4dC5maWxsUmVjdChjdXJyZW50WCAtIHRoaXMub2Zmc2V0WCwgdGhpcy55ICsgdGhpcy5zdHlsZS5ib3JkZXJTaXplLCBzaXplc1tcIndpZHRoXCJdICsgMiwgdGhpcy5oZWlnaHQgLSB0aGlzLnN0eWxlLmJvcmRlclNpemUgKiAyIC0gMSk7XG4gIH1cblxuICB1cGRhdGVUZXh0Q2FjaGUoY3VycmVudFgpIHtcbiAgICBjb25zdCBjdHggPSB0aGlzLmNhbnZhcyA/IHRoaXMuY2FudmFzLmdldENvbnRleHQoXCIyZFwiKSA6IG51bGw7XG4gICAgY29uc3QgcGFyZW50ID0gKHRoaXMuY2FudmFzICYmIHRoaXMuY2FudmFzLnNjZW5lKSB8fCB0aGlzLmNhbnZhcyB8fCAoY3R4ICYmIGN0eC5jYW52YXMpO1xuXG4gICAgaWYoY3R4ICYmIChDb25zdGFudHMuU2V0dGluZy5ESVNBQkxFX09QVElNSVpBVElPTlMgfHwgIXRoaXMudGV4dENhY2hlIHx8IHRoaXMudGV4dENhY2hlLmZvbnRTaXplICE9IHRoaXMuc3R5bGUuZm9udFNpemUgfHwgdGhpcy50ZXh0Q2FjaGUuZm9udEZhbWlseSAhPSB0aGlzLnN0eWxlLmZvbnRGYW1pbHkgfHwgdGhpcy50ZXh0ICE9IHRoaXMudGV4dENhY2hlLnRleHQgfHwgKHBhcmVudCAmJiBwYXJlbnQud2lkdGggIT0gdGhpcy50ZXh0Q2FjaGUucGFyZW50V2lkdGgpKSkge1xuICAgICAgdGhpcy50ZXh0Q2FjaGUgPSB7IFwiZm9udFNpemVcIjogdGhpcy5zdHlsZS5mb250U2l6ZSwgXCJmb250RmFtaWx5XCI6IHRoaXMuc3R5bGUuZm9udEZhbWlseSwgXCJ0ZXh0XCI6IHRoaXMudGV4dCwgXCJwYXJlbnRXaWR0aFwiOiBwYXJlbnQud2lkdGgsIFwibGV0dGVyc1wiOiBbXSB9O1xuXG4gICAgICBmb3IobGV0IGkgPSAwOyBpIDwgdGhpcy50ZXh0Lmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGNvbnN0IHNpemVzID0gVXRpbHMud3JhcFRleHRMaW5lcyhjdHgsIHRoaXMudGV4dFtpXSwgdGhpcy53aWR0aCwgdGhpcy5zdHlsZS5mb250U2l6ZSwgdGhpcy5zdHlsZS5mb250RmFtaWx5LCB0cnVlKTtcbiAgICAgICAgdGhpcy50ZXh0Q2FjaGUubGV0dGVyc1tpXSA9IHtcInRleHRcIjogdGhpcy50ZXh0W2ldLCBcImN1cnJlbnRYXCI6IGN1cnJlbnRYLCBcInNpemVzXCI6IHNpemVzIH07IFxuICAgICAgICBjdXJyZW50WCArPSBzaXplc1tcIndpZHRoXCJdICsgdGhpcy5zdHlsZS5zcGFjZUJldHdlZW5Db21wb25lbnRzO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIGlzQ2xpY2tDdXJyZW50UG9zaXRpb24ocG9zaXRpb24sIGN1cnJlbnRYLCBzaXplcykge1xuICAgIGlmKHBvc2l0aW9uLnggKyB0aGlzLm9mZnNldFggPD0gY3VycmVudFggKyBzaXplc1tcIndpZHRoXCJdICsgdGhpcy5zdHlsZS5zcGFjZUJldHdlZW5Db21wb25lbnRzICYmIHBvc2l0aW9uLnggKyB0aGlzLm9mZnNldFggPj0gY3VycmVudFgpIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cblxuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIGlzQ2xpY2tBZnRlclBvc2l0aW9uKHBvc2l0aW9uLCBjdXJyZW50WCwgc2l6ZXMpIHtcbiAgICBpZihwb3NpdGlvbi54ICsgdGhpcy5vZmZzZXRYID49IGN1cnJlbnRYICsgc2l6ZXNbXCJ3aWR0aFwiXSArIHRoaXMuc3R5bGUuc3BhY2VCZXR3ZWVuQ29tcG9uZW50cykge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuXG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgZ2V0TGV0dGVyQ2xpY2tlZChwb3NpdGlvbikge1xuICAgIGlmKHRoaXMudGV4dENhY2hlKSB7XG4gICAgICBmb3IobGV0IGkgPSAwOyBpIDwgdGhpcy50ZXh0Lmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGNvbnN0IGxldHRlciA9IHRoaXMudGV4dENhY2hlLmxldHRlcnNbaV07XG4gICAgICAgIFxuICAgICAgICBpZih0aGlzLmlzQ2xpY2tDdXJyZW50UG9zaXRpb24ocG9zaXRpb24sIE1hdGgucm91bmQobGV0dGVyLmN1cnJlbnRYKSwgbGV0dGVyLnNpemVzKSkge1xuICAgICAgICAgIHJldHVybiBpO1xuICAgICAgICB9IGVsc2UgaWYoaSA+PSB0aGlzLnRleHQubGVuZ3RoIC0gMSAmJiB0aGlzLmlzQ2xpY2tBZnRlclBvc2l0aW9uKHBvc2l0aW9uLCBNYXRoLnJvdW5kKGxldHRlci5jdXJyZW50WCksIGxldHRlci5zaXplcykpIHtcbiAgICAgICAgICByZXR1cm4gaSArIDE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBnZXQgY3Vyc29yUG9zaXRpb24oKSB7XG4gICAgaWYodGhpcy50ZXh0Q2FjaGUpIHtcbiAgICAgIGxldCBwb3NpdGlvbiA9IHRoaXMucG9zaXRpb25FbmQgLSAxO1xuXG4gICAgICBpZih0aGlzLnBvc2l0aW9uRW5kICE9IHRoaXMucG9zaXRpb25TdGFydCAmJiB0aGlzLnBvc2l0aW9uRW5kID09IHRoaXMucG9zaXRpb25TdGFydENsaWNrICYmIHRoaXMucG9zaXRpb25TdGFydCA8IHRoaXMucG9zaXRpb25TdGFydENsaWNrKSB7XG4gICAgICAgIHBvc2l0aW9uID0gdGhpcy5wb3NpdGlvblN0YXJ0IC0gMTtcbiAgICAgIH1cbiAgICAgIFxuICAgICAgaWYocG9zaXRpb24gPCAwKSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgXCJjdXJyZW50TGV0dGVyXCI6IHRoaXMudGV4dENhY2hlLmxldHRlcnNbMF0sXG4gICAgICAgICAgXCJ4XCI6IHRoaXMueCArIHRoaXMuc3R5bGUuYm9yZGVyU2l6ZVxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGNvbnN0IGN1cnJlbnRMZXR0ZXIgPSB0aGlzLnRleHRDYWNoZS5sZXR0ZXJzW3Bvc2l0aW9uXTtcblxuICAgICAgaWYoY3VycmVudExldHRlcikge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgIFwiY3VycmVudExldHRlclwiOiBjdXJyZW50TGV0dGVyLFxuICAgICAgICAgIFwieFwiOiBjdXJyZW50TGV0dGVyLmN1cnJlbnRYXG4gICAgICAgIH07XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgaXNMZXR0ZXJWaXNpYmxlKGxldHRlcklkKSB7XG4gICAgaWYodGhpcy50ZXh0Q2FjaGUpIHtcbiAgICAgIGNvbnN0IGxldHRlciA9IHRoaXMudGV4dENhY2hlLmxldHRlcnNbbGV0dGVySWRdO1xuXG4gICAgICBpZihsZXR0ZXIpIHtcbiAgICAgICAgY29uc3QgeERyYXcgPSBsZXR0ZXIuY3VycmVudFggLSB0aGlzLm9mZnNldFg7XG4gIFxuICAgICAgICBpZih4RHJhdyA+PSB0aGlzLnggLSBsZXR0ZXIuc2l6ZXNbXCJ3aWR0aFwiXSAmJiB4RHJhdyA8PSB0aGlzLnggKyB0aGlzLndpZHRoKSB7XG4gICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBhdXRvU2Nyb2xsKCkge1xuICAgIGlmKHRoaXMudGV4dENhY2hlKSB7XG4gICAgICBjb25zdCBjdXJzb3JQb3NpdGlvbiA9IHRoaXMuY3Vyc29yUG9zaXRpb247XG4gICAgICBjb25zdCBjdXJyZW50TGV0dGVyU2l6ZSA9IGN1cnNvclBvc2l0aW9uLmN1cnJlbnRMZXR0ZXIgPyBjdXJzb3JQb3NpdGlvbi5jdXJyZW50TGV0dGVyLnNpemVzW1wid2lkdGhcIl0gOiAwO1xuICAgICAgY29uc3QgY3Vyc29yUG9zaXRpb25Qb3MgPSBjdXJzb3JQb3NpdGlvbi54ICsgY3VycmVudExldHRlclNpemUgKyB0aGlzLnN0eWxlLnNwYWNlQmV0d2VlbkNvbXBvbmVudHM7XG4gICAgICBjb25zdCBjdXJzb3JQb3NpdGlvbk5lZyA9IGN1cnNvclBvc2l0aW9uLnggLSBjdXJyZW50TGV0dGVyU2l6ZSAtIHRoaXMuc3R5bGUuc3BhY2VCZXR3ZWVuQ29tcG9uZW50cztcblxuICAgICAgY29uc3Qgb2Zmc2V0WCA9IE1hdGgubWF4KDAsIE1hdGgucm91bmQoY3Vyc29yUG9zaXRpb25Qb3MgLSB0aGlzLnggLSB0aGlzLndpZHRoICsgdGhpcy5zdHlsZS5ib3JkZXJTaXplICsgdGhpcy5zdHlsZS5zcGFjZUJldHdlZW5Db21wb25lbnRzICogMikpO1xuICAgICAgY29uc3Qgb2Zmc2V0WE5lZyA9IE1hdGgubWF4KDAsIE1hdGgucm91bmQoY3Vyc29yUG9zaXRpb25OZWcgLSB0aGlzLnggLSB0aGlzLnN0eWxlLmJvcmRlclNpemUgLSB0aGlzLnN0eWxlLnNwYWNlQmV0d2VlbkNvbXBvbmVudHMgKiAyKSk7XG5cbiAgICAgIGlmKHRoaXMub2Zmc2V0WCA8IDApIHtcbiAgICAgICAgdGhpcy5vZmZzZXRYID0gMDtcbiAgICAgIH1cblxuICAgICAgaWYoY3Vyc29yUG9zaXRpb25Qb3MgLSB0aGlzLm9mZnNldFggPj0gdGhpcy54ICsgdGhpcy53aWR0aCAtIHRoaXMuc3R5bGUuYm9yZGVyU2l6ZSkge1xuICAgICAgICB0aGlzLm9mZnNldFggPSBvZmZzZXRYO1xuICAgICAgICByZXR1cm4gb2Zmc2V0WDtcbiAgICAgIH0gZWxzZSBpZihjdXJzb3JQb3NpdGlvbk5lZyAtIHRoaXMub2Zmc2V0WCA8PSB0aGlzLnggKyB0aGlzLnN0eWxlLmJvcmRlclNpemUpIHtcbiAgICAgICAgdGhpcy5vZmZzZXRYID0gb2Zmc2V0WE5lZztcbiAgICAgICAgcmV0dXJuIG9mZnNldFhOZWc7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgY2xpY2soKSB7XG4gICAgdGhpcy5pbnB1dC5mb2N1cygpO1xuICB9XG5cbiAgYmx1cigpIHtcbiAgICB0aGlzLmlucHV0LmJsdXIoKTtcbiAgfVxuXG4gIGdldCBwb3NpdGlvblN0YXJ0KCkge1xuICAgIHJldHVybiB0aGlzLiNfcG9zaXRpb25TdGFydDtcbiAgfVxuXG4gIGdldCBwb3NpdGlvblN0YXJ0Q2xpY2soKSB7XG4gICAgcmV0dXJuIHRoaXMuI19wb3NpdGlvblN0YXJ0Q2xpY2s7XG4gIH1cblxuICBnZXQgcG9zaXRpb25FbmQoKSB7XG4gICAgcmV0dXJuIHRoaXMuI19wb3NpdGlvbkVuZDtcbiAgfVxuXG4gIHNldCBwb3NpdGlvblN0YXJ0KHBvc2l0aW9uKSB7XG4gICAgdGhpcy5pbnB1dC5zZWxlY3Rpb25TdGFydCA9IHBvc2l0aW9uO1xuICAgIHRoaXMuI19wb3NpdGlvblN0YXJ0ID0gcG9zaXRpb247XG4gIH1cblxuICBzZXQgcG9zaXRpb25TdGFydENsaWNrKHBvc2l0aW9uKSB7XG4gICAgdGhpcy4jX3Bvc2l0aW9uU3RhcnRDbGljayA9IHBvc2l0aW9uO1xuICB9XG5cbiAgc2V0IHBvc2l0aW9uRW5kKHBvc2l0aW9uKSB7XG4gICAgdGhpcy5pbnB1dC5zZWxlY3Rpb25FbmQgPSBwb3NpdGlvbjtcbiAgICB0aGlzLiNfcG9zaXRpb25FbmQgPSBwb3NpdGlvbjtcbiAgfVxuXG4gIHNldFNlbGVjdGlvblJhbmdlKHN0YXJ0LCBlbmQsIGRpcmVjdGlvbikge1xuICAgIHRoaXMuaW5wdXQuc2V0U2VsZWN0aW9uUmFuZ2Uoc3RhcnQsIGVuZCwgZGlyZWN0aW9uKTtcbiAgICB0aGlzLnBvc2l0aW9uU3RhcnQgPSBzdGFydDtcbiAgICB0aGlzLnBvc2l0aW9uRW5kID0gZW5kO1xuICB9XG5cbiAgZ2V0IGhlaWdodCgpIHtcbiAgICBjb25zdCBib3JkZXJTaXplID0gdGhpcy5zdHlsZSAmJiB0aGlzLnN0eWxlLmJvcmRlclNpemUgPyB0aGlzLnN0eWxlLmJvcmRlclNpemUgOiAwO1xuICAgIHJldHVybiBzdXBlci5oZWlnaHQgPyBzdXBlci5oZWlnaHQgOiB0aGlzLnN0eWxlLmZvbnRTaXplICsgYm9yZGVyU2l6ZSAqIDI7XG4gIH1cblxuICBnZXQgZGVmYXVsdFN0eWxlKCkge1xuICAgIHJldHVybiBuZXcgU3R5bGUoe1xuICAgICAgXCJmb250U2l6ZVwiOiBNYXRoLmZsb29yKENvbnN0YW50cy5TZXR0aW5nLkZPTlRfU0laRSAvIDEuMjUpLFxuICAgICAgXCJmb250RmFtaWx5XCI6IENvbnN0YW50cy5TZXR0aW5nLkZPTlRfRkFNSUxZLFxuICAgICAgXCJmb250Q29sb3JcIjogQ29uc3RhbnRzLlNldHRpbmcuSU5QVVRfREVGQVVMVF9GT05UX0NPTE9SLFxuICAgICAgXCJiYWNrZ3JvdW5kQ29sb3JcIjogQ29uc3RhbnRzLlNldHRpbmcuSU5QVVRfREVGQVVMVF9CQUNLR1JPVU5EX0NPTE9SLFxuICAgICAgXCJib3JkZXJDb2xvclwiOiBDb25zdGFudHMuU2V0dGluZy5JTlBVVF9ERUZBVUxUX0JPUkRFUl9DT0xPUixcbiAgICAgIFwiYm9yZGVyQ29sb3JTZWxlY3RlZFwiOiBDb25zdGFudHMuU2V0dGluZy5JTlBVVF9ERUZBVUxUX0JPUkRFUl9DT0xPUl9TRUxFQ1RFRCxcbiAgICAgIFwic2VsZWN0Q29sb3JcIjogQ29uc3RhbnRzLlNldHRpbmcuSU5QVVRfREVGQVVMVF9TRUxFQ1RfQ09MT1IsXG4gICAgICBcInNwYWNlQmV0d2VlbkNvbXBvbmVudHNcIjogMVxuICAgIH0pO1xuICB9XG59IiwiLypcbiAqIENvcHlyaWdodCAoQykgMjAyMCBFbGlhc3RpayAoZWxpYXN0aWtzb2Z0cy5jb20pXG4gKlxuICogVGhpcyBmaWxlIGlzIHBhcnQgb2YgXCJKU0dhbWVUb29sc1wiLlxuICpcbiAqIFwiSlNHYW1lVG9vbHNcIiBpcyBmcmVlIHNvZnR3YXJlOiB5b3UgY2FuIHJlZGlzdHJpYnV0ZSBpdCBhbmQvb3IgbW9kaWZ5XG4gKiBpdCB1bmRlciB0aGUgdGVybXMgb2YgdGhlIEdOVSBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlIGFzIHB1Ymxpc2hlZCBieVxuICogdGhlIEZyZWUgU29mdHdhcmUgRm91bmRhdGlvbiwgZWl0aGVyIHZlcnNpb24gMyBvZiB0aGUgTGljZW5zZSwgb3JcbiAqIChhdCB5b3VyIG9wdGlvbikgYW55IGxhdGVyIHZlcnNpb24uXG4gKlxuICogXCJKU0dhbWVUb29sc1wiIGlzIGRpc3RyaWJ1dGVkIGluIHRoZSBob3BlIHRoYXQgaXQgd2lsbCBiZSB1c2VmdWwsXG4gKiBidXQgV0lUSE9VVCBBTlkgV0FSUkFOVFk7IHdpdGhvdXQgZXZlbiB0aGUgaW1wbGllZCB3YXJyYW50eSBvZlxuICogTUVSQ0hBTlRBQklMSVRZIG9yIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFLiAgU2VlIHRoZVxuICogR05VIEdlbmVyYWwgUHVibGljIExpY2Vuc2UgZm9yIG1vcmUgZGV0YWlscy5cbiAqXG4gKiBZb3Ugc2hvdWxkIGhhdmUgcmVjZWl2ZWQgYSBjb3B5IG9mIHRoZSBHTlUgR2VuZXJhbCBQdWJsaWMgTGljZW5zZVxuICogYWxvbmcgd2l0aCBcIkpTR2FtZVRvb2xzXCIuICBJZiBub3QsIHNlZSA8aHR0cDovL3d3dy5nbnUub3JnL2xpY2Vuc2VzLz4uXG4gKi9cbmltcG9ydCBDb25zdGFudHMgZnJvbSBcIi4vQ29uc3RhbnRzXCI7XG5pbXBvcnQgVXRpbHMgZnJvbSBcIi4vVXRpbHNcIjtcbmltcG9ydCBDb21wb25lbnQgZnJvbSBcIi4vQ29tcG9uZW50XCI7XG5pbXBvcnQgU3R5bGUgZnJvbSBcIi4vU3R5bGVcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTGFiZWwgZXh0ZW5kcyBDb21wb25lbnQge1xuICBzZWxlY3RhYmxlID0gZmFsc2U7XG4gICNfdGV4dCA9IFwiXCI7XG5cbiAgY29uc3RydWN0b3IodGV4dCwgeCwgeSwgc3R5bGUpIHtcbiAgICBzdXBlcih4LCB5LCBudWxsLCBudWxsLCBzdHlsZSk7XG4gICAgdGhpcy50ZXh0ID0gdGV4dDtcbiAgICB0aGlzLnNpemVzQ2FjaGUgPSBudWxsO1xuXG4gICAgaWYoIUNvbnN0YW50cy5TZXR0aW5nLkRJU0FCTEVfRVhQRVJJTUVOVEFMX09QVElNSVpBVElPTlMpIHtcbiAgICAgIHRoaXMudXBkYXRlU2l6ZXMoKTtcblxuICAgICAgdGhpcy5hZGRDaGFuZ2VBY3Rpb24oY29tcG9uZW50Q2hhbmdlZCA9PiB7XG4gICAgICAgIHRoaXMudXBkYXRlU2l6ZXMoKTtcbiAgICAgICAgY29tcG9uZW50Q2hhbmdlZCAhPSB0aGlzLnBhcmVudCAmJiB0aGlzLnBhcmVudCAmJiB0aGlzLnBhcmVudC5yZWFjdG9yICYmIHRoaXMucGFyZW50LnJlYWN0b3IuZGlzcGF0Y2hFdmVudChcIm9uQ2hhbmdlXCIsIHRoaXMpO1xuICAgICAgfSk7XG4gICAgfVxuICB9XG5cbiAgZHJhdyhjb250ZXh0KSB7XG4gICAgaWYodGhpcy5oaWRkZW4pIHJldHVybjtcbiAgICBzdXBlci5kcmF3KGNvbnRleHQpO1xuICAgIFxuICAgIGNvbnN0IGNhbnZhcyA9IGNvbnRleHQuY2FudmFzO1xuICAgIGNvbnN0IGN0eCA9IGNhbnZhcy5nZXRDb250ZXh0KFwiMmRcIik7XG4gICAgY3R4LnNhdmUoKTtcblxuICAgIFV0aWxzLmRyYXdUZXh0KGN0eCwgdGhpcy50ZXh0LCB0aGlzLnN0eWxlLmZvbnRDb2xvciwgdGhpcy5zdHlsZS5mb250U2l6ZSwgdGhpcy5zdHlsZS5mb250RmFtaWx5LCB0aGlzLnN0eWxlLmFsaWduZW1lbnQsIHRoaXMuc3R5bGUudmVydGljYWxBbGlnbmVtZW50LCB0aGlzLngsIHRoaXMueSwgdGhpcy5zdHlsZS53cmFwLCB0aGlzLnN0eWxlLmJvbGQsIHRoaXMuc3R5bGUudW5kZXJsaW5lLCBudWxsLCB0aGlzLnBhcmVudCk7XG5cbiAgICBjdHgucmVzdG9yZSgpO1xuICB9XG5cbiAgc2V0IHRleHQodGV4dCkge1xuICAgIGlmKHRleHQgIT0gdGhpcy4jX3RleHQpIHtcbiAgICAgIHRoaXMuI190ZXh0ID0gdGV4dDtcbiAgICAgIHRoaXMucmVhY3Rvci5kaXNwYXRjaEV2ZW50KFwib25DaGFuZ2VcIiwgdGhpcyk7XG4gICAgfVxuICB9XG5cbiAgZ2V0IHRleHQoKSB7XG4gICAgcmV0dXJuIHRoaXMuI190ZXh0O1xuICB9XG5cbiAgdXBkYXRlU2l6ZXMoKSB7XG4gICAgY29uc3QgY3R4ID0gdGhpcy5jYW52YXMgPyB0aGlzLmNhbnZhcy5nZXRDb250ZXh0KFwiMmRcIikgOiBudWxsO1xuICAgIGNvbnN0IHBhcmVudCA9ICh0aGlzLmNhbnZhcyAmJiB0aGlzLmNhbnZhcy5zY2VuZSkgfHwgdGhpcy5jYW52YXMgfHwgKGN0eCAmJiBjdHguY2FudmFzKSB8fCB0aGlzLnBhcmVudDtcbiAgICBcbiAgICBpZihjdHggJiYgKENvbnN0YW50cy5TZXR0aW5nLkRJU0FCTEVfT1BUSU1JWkFUSU9OUyB8fCAhdGhpcy5zaXplc0NhY2hlIHx8IHRoaXMuc2l6ZXNDYWNoZS5mb250U2l6ZSAhPSB0aGlzLnN0eWxlLmZvbnRTaXplIHx8IHRoaXMuc2l6ZXNDYWNoZS5mb250RmFtaWx5ICE9IHRoaXMuc3R5bGUuZm9udEZhbWlseSB8fCB0aGlzLnNpemVzQ2FjaGUud3JhcCAhPSB0aGlzLnN0eWxlLndyYXAgfHwgdGhpcy50ZXh0ICE9IHRoaXMuc2l6ZXNDYWNoZS50ZXh0IHx8IChwYXJlbnQgJiYgcGFyZW50LndpZHRoICE9IHRoaXMuc2l6ZXNDYWNoZS5wYXJlbnRXaWR0aCkgfHwgdGhpcy5zaXplc0NhY2hlLnZhbHVlID09IG51bGwpKSB7XG4gICAgICBjb25zdCBzaXplcyA9IFV0aWxzLndyYXBUZXh0TGluZXMoY3R4LCB0aGlzLnRleHQsIG51bGwsIHRoaXMuc3R5bGUuZm9udFNpemUsIHRoaXMuc3R5bGUuZm9udEZhbWlseSwgIXRoaXMuc3R5bGUud3JhcCk7XG4gICAgICBcbiAgICAgIGlmKHBhcmVudCkge1xuICAgICAgICB0aGlzLnNpemVzQ2FjaGUgPSB7IFwiZm9udFNpemVcIjogdGhpcy5zdHlsZS5mb250U2l6ZSwgXCJmb250RmFtaWx5XCI6IHRoaXMuc3R5bGUuZm9udEZhbWlseSwgXCJ3cmFwXCI6IHRoaXMuc3R5bGUud3JhcCwgXCJ0ZXh0XCI6IHRoaXMudGV4dCwgXCJwYXJlbnRXaWR0aFwiOiBwYXJlbnQud2lkdGgsIFwidmFsdWVcIjogc2l6ZXMgfTtcbiAgICAgICAgcGFyZW50LnJlYWN0b3IuZGlzcGF0Y2hFdmVudChcIm9uQ2hhbmdlXCIsIHRoaXMpO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiB0aGlzLnNpemVzQ2FjaGUgJiYgdGhpcy5zaXplc0NhY2hlLnZhbHVlO1xuICB9XG5cbiAgZ2V0IHNpemVzKCkge1xuICAgIGlmKENvbnN0YW50cy5TZXR0aW5nLkRJU0FCTEVfRVhQRVJJTUVOVEFMX09QVElNSVpBVElPTlMpIHRoaXMudXBkYXRlU2l6ZXMoKTtcbiAgICByZXR1cm4gdGhpcy5zaXplc0NhY2hlID8gdGhpcy5zaXplc0NhY2hlLnZhbHVlIDogbnVsbDtcbiAgfVxuXG4gIGdldCBoZWlnaHQoKSB7XG4gICAgY29uc3Qgc2l6ZXMgPSB0aGlzLnNpemVzO1xuICAgIHJldHVybiBzaXplcyAmJiBzaXplc1tcImhlaWdodFwiXTtcbiAgfVxuXG4gIGdldCB3aWR0aCgpIHtcbiAgICBjb25zdCBzaXplcyA9IHRoaXMuc2l6ZXM7XG4gICAgcmV0dXJuIHNpemVzICYmIHNpemVzW1wid2lkdGhcIl07XG4gIH1cblxuICBnZXQgZGVmYXVsdFN0eWxlKCkge1xuICAgIHJldHVybiBuZXcgU3R5bGUoe1xuICAgICAgXCJmb250Q29sb3JcIjogQ29uc3RhbnRzLlNldHRpbmcuTEFCRUxfREVGQVVMVF9GT05UX0NPTE9SLFxuICAgICAgXCJ3cmFwXCI6IHRydWUsXG4gICAgICBcImJvbGRcIjogZmFsc2UsXG4gICAgICBcInVuZGVybGluZVwiOiBmYWxzZVxuICAgIH0pO1xuICB9XG59IiwiLypcbiAqIENvcHlyaWdodCAoQykgMjAyMCBFbGlhc3RpayAoZWxpYXN0aWtzb2Z0cy5jb20pXG4gKlxuICogVGhpcyBmaWxlIGlzIHBhcnQgb2YgXCJKU0dhbWVUb29sc1wiLlxuICpcbiAqIFwiSlNHYW1lVG9vbHNcIiBpcyBmcmVlIHNvZnR3YXJlOiB5b3UgY2FuIHJlZGlzdHJpYnV0ZSBpdCBhbmQvb3IgbW9kaWZ5XG4gKiBpdCB1bmRlciB0aGUgdGVybXMgb2YgdGhlIEdOVSBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlIGFzIHB1Ymxpc2hlZCBieVxuICogdGhlIEZyZWUgU29mdHdhcmUgRm91bmRhdGlvbiwgZWl0aGVyIHZlcnNpb24gMyBvZiB0aGUgTGljZW5zZSwgb3JcbiAqIChhdCB5b3VyIG9wdGlvbikgYW55IGxhdGVyIHZlcnNpb24uXG4gKlxuICogXCJKU0dhbWVUb29sc1wiIGlzIGRpc3RyaWJ1dGVkIGluIHRoZSBob3BlIHRoYXQgaXQgd2lsbCBiZSB1c2VmdWwsXG4gKiBidXQgV0lUSE9VVCBBTlkgV0FSUkFOVFk7IHdpdGhvdXQgZXZlbiB0aGUgaW1wbGllZCB3YXJyYW50eSBvZlxuICogTUVSQ0hBTlRBQklMSVRZIG9yIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFLiAgU2VlIHRoZVxuICogR05VIEdlbmVyYWwgUHVibGljIExpY2Vuc2UgZm9yIG1vcmUgZGV0YWlscy5cbiAqXG4gKiBZb3Ugc2hvdWxkIGhhdmUgcmVjZWl2ZWQgYSBjb3B5IG9mIHRoZSBHTlUgR2VuZXJhbCBQdWJsaWMgTGljZW5zZVxuICogYWxvbmcgd2l0aCBcIkpTR2FtZVRvb2xzXCIuICBJZiBub3QsIHNlZSA8aHR0cDovL3d3dy5nbnUub3JnL2xpY2Vuc2VzLz4uXG4gKi9cbmltcG9ydCBDb25zdGFudHMgZnJvbSBcIi4vQ29uc3RhbnRzXCI7XG5pbXBvcnQgTGFiZWwgZnJvbSBcIi4vTGFiZWxcIjtcbmltcG9ydCBTdHlsZSBmcm9tIFwiLi9TdHlsZVwiO1xuaW1wb3J0IFV0aWxzIGZyb20gXCIuL1V0aWxzXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIExpbmsgZXh0ZW5kcyBMYWJlbCB7XG4gIHNlbGVjdGFibGUgPSB0cnVlO1xuXG4gIGNvbnN0cnVjdG9yKHRleHQsIHgsIHksIHN0eWxlKSB7XG4gICAgc3VwZXIodGV4dCwgeCwgeSwgc3R5bGUpO1xuXG4gICAgdGhpcy5pbml0aWFsQ29sb3IgPSB0aGlzLnN0eWxlLmZvbnRDb2xvcjtcbiAgICB0aGlzLmluaXRpYWxVbmRlcmxpbmUgPSB0aGlzLnN0eWxlLnVuZGVybGluZTtcbiAgfVxuXG4gIGRyYXcoY29udGV4dCkge1xuICAgIGlmKHRoaXMuaGlkZGVuKSByZXR1cm47XG4gICAgc3VwZXIuZHJhdyhjb250ZXh0KTtcblxuICAgIGNvbnN0IGNhbnZhcyA9IGNvbnRleHQuY2FudmFzO1xuXG4gICAgaWYodGhpcy5jbGlja2VkKSB7XG4gICAgICB0aGlzLnN0eWxlLnNldChcInVuZGVybGluZVwiLCBmYWxzZSk7XG4gICAgICB0aGlzLnN0eWxlLnNldChcImZvbnRDb2xvclwiLCB0aGlzLnN0eWxlLmZvbnRDb2xvckRvd24pO1xuICAgICAgY2FudmFzLnN0eWxlLmN1cnNvciA9IFwicG9pbnRlclwiO1xuICAgIH0gZWxzZSBpZih0aGlzLmhvdmVyZWQgfHwgdGhpcy5zZWxlY3RlZCkge1xuICAgICAgdGhpcy5zdHlsZS5zZXQoXCJ1bmRlcmxpbmVcIiwgZmFsc2UpO1xuICAgICAgdGhpcy5zdHlsZS5zZXQoXCJmb250Q29sb3JcIiwgdGhpcy5zdHlsZS5mb250Q29sb3JIb3Zlcik7XG4gICAgICBpZih0aGlzLmhvdmVyZWQpIGNhbnZhcy5zdHlsZS5jdXJzb3IgPSBcInBvaW50ZXJcIjtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5zdHlsZS5zZXQoXCJ1bmRlcmxpbmVcIiwgdGhpcy5pbml0aWFsVW5kZXJsaW5lKTtcbiAgICAgIHRoaXMuc3R5bGUuc2V0KFwiZm9udENvbG9yXCIsIHRoaXMuaW5pdGlhbENvbG9yKTtcbiAgICB9XG5cbiAgICB0aGlzLmluaXQgPSB0cnVlO1xuICB9XG5cbiAgZ2V0IGRlZmF1bHRTdHlsZSgpIHtcbiAgICByZXR1cm4gbmV3IFN0eWxlKHtcbiAgICAgIFwiZm9udENvbG9yXCI6IENvbnN0YW50cy5TZXR0aW5nLkxJTktfREVGQVVMVF9DT0xPUixcbiAgICAgIFwiZm9udENvbG9ySG92ZXJcIjogQ29uc3RhbnRzLlNldHRpbmcuTElOS19ERUZBVUxUX0hPVkVSX0NPTE9SLFxuICAgICAgXCJmb250Q29sb3JEb3duXCI6IENvbnN0YW50cy5TZXR0aW5nLkxJTktfREVGQVVMVF9DTElDS19DT0xPUixcbiAgICAgIFwid3JhcFwiOiB0cnVlLFxuICAgICAgXCJib2xkXCI6IGZhbHNlLFxuICAgICAgXCJ1bmRlcmxpbmVcIjogdHJ1ZVxuICAgIH0pO1xuICB9XG59IiwiLypcbiAqIENvcHlyaWdodCAoQykgMjAyMCBFbGlhc3RpayAoZWxpYXN0aWtzb2Z0cy5jb20pXG4gKlxuICogVGhpcyBmaWxlIGlzIHBhcnQgb2YgXCJKU0dhbWVUb29sc1wiLlxuICpcbiAqIFwiSlNHYW1lVG9vbHNcIiBpcyBmcmVlIHNvZnR3YXJlOiB5b3UgY2FuIHJlZGlzdHJpYnV0ZSBpdCBhbmQvb3IgbW9kaWZ5XG4gKiBpdCB1bmRlciB0aGUgdGVybXMgb2YgdGhlIEdOVSBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlIGFzIHB1Ymxpc2hlZCBieVxuICogdGhlIEZyZWUgU29mdHdhcmUgRm91bmRhdGlvbiwgZWl0aGVyIHZlcnNpb24gMyBvZiB0aGUgTGljZW5zZSwgb3JcbiAqIChhdCB5b3VyIG9wdGlvbikgYW55IGxhdGVyIHZlcnNpb24uXG4gKlxuICogXCJKU0dhbWVUb29sc1wiIGlzIGRpc3RyaWJ1dGVkIGluIHRoZSBob3BlIHRoYXQgaXQgd2lsbCBiZSB1c2VmdWwsXG4gKiBidXQgV0lUSE9VVCBBTlkgV0FSUkFOVFk7IHdpdGhvdXQgZXZlbiB0aGUgaW1wbGllZCB3YXJyYW50eSBvZlxuICogTUVSQ0hBTlRBQklMSVRZIG9yIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFLiAgU2VlIHRoZVxuICogR05VIEdlbmVyYWwgUHVibGljIExpY2Vuc2UgZm9yIG1vcmUgZGV0YWlscy5cbiAqXG4gKiBZb3Ugc2hvdWxkIGhhdmUgcmVjZWl2ZWQgYSBjb3B5IG9mIHRoZSBHTlUgR2VuZXJhbCBQdWJsaWMgTGljZW5zZVxuICogYWxvbmcgd2l0aCBcIkpTR2FtZVRvb2xzXCIuICBJZiBub3QsIHNlZSA8aHR0cDovL3d3dy5nbnUub3JnL2xpY2Vuc2VzLz4uXG4gKi9cbmltcG9ydCBDb25zdGFudHMgZnJvbSBcIi4vQ29uc3RhbnRzXCI7XG5pbXBvcnQgVXRpbHMgZnJvbSBcIi4vVXRpbHNcIjtcbmltcG9ydCBDb21wb25lbnQgZnJvbSBcIi4vQ29tcG9uZW50XCI7XG5pbXBvcnQgQ29sIGZyb20gXCIuL0NvbFwiO1xuaW1wb3J0IFN0eWxlIGZyb20gXCIuL1N0eWxlXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE1lbnUgZXh0ZW5kcyBDb2wge1xuICBzZWxlY3RhYmxlID0gZmFsc2U7XG5cbiAgY29uc3RydWN0b3Ioc3R5bGUsIC4uLmNvbXBvbmVudHMpIHtcbiAgICBzdXBlcigwLCAwLCBudWxsLCBudWxsLCBzdHlsZSwgLi4uY29tcG9uZW50cyk7XG5cbiAgICB0aGlzLmxhc3RLZXkgPSB0aGlzLmxhc3RLZXkgPT0gdW5kZWZpbmVkID8gLTEgOiB0aGlzLmxhc3RLZXk7XG4gICAgdGhpcy5zZWxlY3RlZENvbXBvbmVudCA9IHRoaXMuc2VsZWN0ZWRDb21wb25lbnQgPT0gdW5kZWZpbmVkID8gMCA6IHRoaXMuc2VsZWN0ZWRDb21wb25lbnQ7XG5cbiAgICB0aGlzLmRpc2FibGUoKTtcbiAgfVxuXG4gIGRyYXcoY29udGV4dCkge1xuICAgIGlmKHRoaXMuaGlkZGVuKSByZXR1cm47XG4gICAgY29uc3QgY2FudmFzID0gY29udGV4dC5jYW52YXM7XG4gICAgY29uc3QgY3R4ID0gY2FudmFzLmdldENvbnRleHQoXCIyZFwiKTtcblxuICAgIGlmKHRoaXMuc3R5bGUuYmx1ckJhY2tncm91bmQpIHtcbiAgICAgIHRoaXMuZHJhd0JsdXIoY3R4KTtcbiAgICB9XG5cbiAgICBjdHguc2F2ZSgpO1xuXG4gICAgdGhpcy5kcmF3Q29tcG9uZW50cyhjdHgpO1xuICAgIFxuICAgIGlmKCF0aGlzLmluaXQpIHtcbiAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJrZXlkb3duXCIsIGV2ZW50ID0+IHtcbiAgICAgICAgaWYoIXRoaXMuZGlzYWJsZWQpIHtcbiAgICAgICAgICB0aGlzLmxhc3RLZXkgPSBldmVudC5rZXlDb2RlO1xuICAgICAgICAgIGlmKHRoaXMubGFzdEtleSA9PSBDb25zdGFudHMuS2V5LlVQIHx8IHRoaXMubGFzdEtleSA9PSBDb25zdGFudHMuS2V5LkJPVFRPTSkgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG5cbiAgICAgIHRoaXMuaW5pdCA9IHRydWU7XG4gICAgfVxuXG4gICAgbGV0IGtleUFjdGlvbiA9IGZhbHNlO1xuICBcbiAgICBpZih0aGlzLmNvbXBvbmVudHMgIT0gbnVsbCkge1xuICAgICAgaWYodGhpcy5sYXN0S2V5ID09IENvbnN0YW50cy5LZXkuVVApIHtcbiAgICAgICAgdGhpcy5zZWxlY3QodGhpcy5zZWxlY3RlZENvbXBvbmVudCAtIDEpO1xuICAgICAgICBrZXlBY3Rpb24gPSB0cnVlO1xuICAgICAgfSBlbHNlIGlmKHRoaXMubGFzdEtleSA9PSBDb25zdGFudHMuS2V5LkJPVFRPTSkge1xuICAgICAgICB0aGlzLnNlbGVjdCh0aGlzLnNlbGVjdGVkQ29tcG9uZW50ICsgMSk7XG4gICAgICAgIGtleUFjdGlvbiA9IHRydWU7XG4gICAgICB9IGVsc2UgaWYodGhpcy5sYXN0S2V5ID09IENvbnN0YW50cy5LZXkuRUNIQVApIHtcbiAgICAgICAgdGhpcy5kaXNhYmxlKCk7XG4gICAgICAgIGtleUFjdGlvbiA9IHRydWU7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLmNvbXBvbmVudHMuZm9yRWFjaCgoY29tcG9uZW50LCBpKSA9PiB7XG4gICAgICAgICAgaWYoY29tcG9uZW50LnNlbGVjdGVkKSB0aGlzLnNlbGVjdChpKTtcbiAgICAgICAgfSk7XG4gICAgICB9XG5cbiAgICAgIHRoaXMuY29tcG9uZW50cy5mb3JFYWNoKChjb21wb25lbnQsIGkpID0+IHtcbiAgICAgICAgaWYoY29tcG9uZW50IGluc3RhbmNlb2YgQ29tcG9uZW50KSB7XG4gICAgICAgICAgaWYoa2V5QWN0aW9uKSB7XG4gICAgICAgICAgICBpZih0aGlzLnNlbGVjdGVkQ29tcG9uZW50ID09IGkpIHtcbiAgICAgICAgICAgICAgaWYoY29tcG9uZW50LnNlbGVjdGFibGUpIHtcbiAgICAgICAgICAgICAgICBjb21wb25lbnQuc2VsZWN0ZWQgPSB0cnVlO1xuICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgaWYoIXRoaXMuaXNDb21wb25lbnRWaXNpYmxlKGNvbXBvbmVudCkpIHtcbiAgICAgICAgICAgICAgICBjb25zdCBjb21wb25lbnRIZWlnaHQgPSBjb21wb25lbnQuaGVpZ2h0O1xuICAgICAgICAgICAgICAgIGNvbnN0IGRlbHRhWSA9ICh0aGlzLm1heEhlaWdodCAtIHRoaXMub2Zmc2V0U2Nyb2xsWSkgLSAoY29tcG9uZW50LnkgKyBjb21wb25lbnRIZWlnaHQpO1xuICAgICAgICAgICAgICAgIHRoaXMub2Zmc2V0U2Nyb2xsWSA9IC1kZWx0YVk7XG5cbiAgICAgICAgICAgICAgICB0aGlzLmNvbnRyb2xTY3JvbGxpbmcobnVsbCwgLWRlbHRhWSk7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIGNvbXBvbmVudC5zZWxlY3RlZCA9IGZhbHNlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICBcbiAgICAgICAgICBpZih0aGlzLnNlbGVjdGVkQ29tcG9uZW50ID09IGkgJiYgdGhpcy5sYXN0S2V5ID09IENvbnN0YW50cy5LZXkuRU5URVIgJiYgY29tcG9uZW50LnJlYWN0b3IgJiYgIWNvbXBvbmVudC5kaXNhYmxlZCkge1xuICAgICAgICAgICAgdGhpcy5sYXN0S2V5ID0gLTE7XG4gICAgICAgICAgICB0aGlzLnNlbGVjdGVkQ29tcG9uZW50ID0gMDtcbiAgICAgICAgICAgIGNvbXBvbmVudC5yZWFjdG9yLmRpc3BhdGNoRXZlbnQoXCJvbkNsaWNrXCIpO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfVxuICAgIFxuICAgIGN0eC5yZXN0b3JlKCk7XG4gICAgdGhpcy5sYXN0S2V5ID0gLTE7XG4gIH1cblxuICBkcmF3Q29tcG9uZW50cyhjdHgpIHtcbiAgICBzdXBlci5kcmF3KGN0eCk7XG4gIH1cblxuICBkcmF3Qmx1cihjdHgpIHtcbiAgICBVdGlscy5ibHVyQ2FudmFzKGN0eCwgNSk7XG4gIH1cblxuICBkcmF3QmFja2dyb3VuZChjdHgpIHtcbiAgICBjdHguZmlsbFN0eWxlID0gdGhpcy5zdHlsZS5iYWNrZ3JvdW5kQ29sb3I7XG4gICAgY3R4LmZpbGxSZWN0KHRoaXMucGFyZW50ID8gdGhpcy5wYXJlbnQueCA6IDAsIHRoaXMucGFyZW50ID8gdGhpcy5wYXJlbnQueSA6IDAsIHRoaXMubWF4V2lkdGgsIHRoaXMubWF4SGVpZ2h0KTtcbiAgfVxuXG4gIGRpc2FibGUoKSB7XG4gICAgc3VwZXIuZGlzYWJsZSgpO1xuICAgIHRoaXMuY29tcG9uZW50cy5mb3JFYWNoKGNvbXBvbmVudCA9PiBjb21wb25lbnQgJiYgY29tcG9uZW50LmRpc2FibGUgJiYgY29tcG9uZW50LmRpc2FibGUoKSk7XG4gIH1cblxuICBlbmFibGUoKSB7XG4gICAgc3VwZXIuZW5hYmxlKCk7XG4gICAgdGhpcy5jb21wb25lbnRzLmZvckVhY2goY29tcG9uZW50ID0+IGNvbXBvbmVudCAmJiBjb21wb25lbnQuZW5hYmxlICYmIGNvbXBvbmVudC5lbmFibGUoKSk7XG4gIH1cblxuICBzZWxlY3QoaW5kZXgpIHtcbiAgICB0aGlzLnNlbGVjdGVkQ29tcG9uZW50ID0gaW5kZXg7XG5cbiAgICBjb25zdCBzZWxlY3RhYmxlQ29tcG9uZW50cyA9IHRoaXMuY29tcG9uZW50cy5maWx0ZXIoY29tcG9uZW50ID0+IGNvbXBvbmVudC5zZWxlY3RhYmxlKTtcbiAgICBpZihzZWxlY3RhYmxlQ29tcG9uZW50cy5sZW5ndGggPD0gMCkgcmV0dXJuO1xuXG4gICAgaWYodGhpcy5zZWxlY3RlZENvbXBvbmVudCA+PSB0aGlzLmNvbXBvbmVudHMubGVuZ3RoKSB7XG4gICAgICB0aGlzLnNlbGVjdGVkQ29tcG9uZW50ID0gMDtcbiAgICB9IGVsc2UgaWYodGhpcy5zZWxlY3RlZENvbXBvbmVudCA8IDApIHtcbiAgICAgIHRoaXMuc2VsZWN0ZWRDb21wb25lbnQgPSB0aGlzLmNvbXBvbmVudHMubGVuZ3RoIC0gMTtcbiAgICB9XG5cbiAgICBpZih0aGlzLmNvbXBvbmVudHNbdGhpcy5zZWxlY3RlZENvbXBvbmVudF0gJiYgIXRoaXMuY29tcG9uZW50c1t0aGlzLnNlbGVjdGVkQ29tcG9uZW50XS5zZWxlY3RhYmxlKSB7XG4gICAgICBpZih0aGlzLmxhc3RLZXkgPT0gQ29uc3RhbnRzLktleS5VUCkge1xuICAgICAgICByZXR1cm4gdGhpcy5zZWxlY3QodGhpcy5zZWxlY3RlZENvbXBvbmVudCAtIDEpO1xuICAgICAgfSBlbHNlIGlmKHRoaXMubGFzdEtleSA9PSBDb25zdGFudHMuS2V5LkJPVFRPTSkge1xuICAgICAgICByZXR1cm4gdGhpcy5zZWxlY3QodGhpcy5zZWxlY3RlZENvbXBvbmVudCArIDEpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIGdldCBzY3JvbGxBcmVhU2l6ZVgoKSB7XG4gICAgcmV0dXJuIHRoaXMuaW5uZXJXaWR0aCAtIHRoaXMubWF4V2lkdGg7XG4gIH1cblxuICBnZXQgc2Nyb2xsQXJlYVNpemVZKCkge1xuICAgIHJldHVybiB0aGlzLmlubmVySGVpZ2h0IC0gdGhpcy5tYXhIZWlnaHQ7XG4gIH1cblxuICBnZXQgbWF4SGVpZ2h0KCkge1xuICAgIHJldHVybiBzdXBlci5tYXhIZWlnaHQgfHwgKHRoaXMuY2FudmFzICYmIHRoaXMuY2FudmFzLnNjZW5lICYmIHRoaXMuY2FudmFzLnNjZW5lLmhlaWdodCk7XG4gIH1cblxuICBnZXQgbWF4V2lkdGgoKSB7XG4gICAgcmV0dXJuICh0aGlzLmNhbnZhcyAmJiB0aGlzLmNhbnZhcy5zY2VuZSAmJiB0aGlzLmNhbnZhcy5zY2VuZS53aWR0aCk7XG4gIH1cblxuICBnZXQgbWluV2lkdGgoKSB7XG4gICAgcmV0dXJuIHRoaXMucGFyZW50ID8gdGhpcy5wYXJlbnQud2lkdGggOiAwO1xuICB9XG5cbiAgZ2V0IGRlZmF1bHRTdHlsZSgpIHtcbiAgICByZXR1cm4gbmV3IFN0eWxlKHtcbiAgICAgIFwiYmx1ckJhY2tncm91bmRcIjogQ29uc3RhbnRzLlNldHRpbmcuTUVOVV9ERUZBVUxUX0JMVVJfQkFDS0dST1VORCxcbiAgICAgIFwiYmFja2dyb3VuZENvbG9yXCI6IENvbnN0YW50cy5TZXR0aW5nLk1FTlVfREVGQVVMVF9CQUNLR1JPVU5ELFxuICAgICAgXCJ2ZXJ0aWNhbEFsaWduZW1lbnRcIjogQ29uc3RhbnRzLlZlcnRpY2FsQWxpZ25lbWVudC5DRU5URVIsXG4gICAgICBcInNjcm9sbFhEaXNhYmxlZFwiOiB0cnVlXG4gICAgfSk7XG4gIH1cblxuICBjb21wYXJlVG9Db21wb25lbnQob3RoZXJDb21wb25lbnQpIHtcbiAgICByZXR1cm4gb3RoZXJDb21wb25lbnQuY29tcGFyZVRvTWVudSh0aGlzKTtcbiAgfVxuXG4gIGNvbXBhcmVUb01lbnUob3RoZXJDb21wb25lbnQpIHtcbiAgICByZXR1cm4gMDtcbiAgfVxuXG4gIGNvbXBhcmVUb1Rvb2x0aXAob3RoZXJDb21wb25lbnQpIHtcbiAgICByZXR1cm4gLTE7XG4gIH1cblxuICBjb21wYXJlVG9Ob3RpZmljYXRpb24ob3RoZXJDb21wb25lbnQpIHtcbiAgICByZXR1cm4gMTtcbiAgfVxuXG4gIGdldCBoaWRkZW4oKSB7XG4gICAgcmV0dXJuIHN1cGVyLmhpZGRlbiB8fCB0aGlzLmRpc2FibGVkO1xuICB9XG5cbiAgc2V0IGhpZGRlbihoaWRkZW4pIHtcbiAgICBzdXBlci5oaWRkZW4gPSBoaWRkZW47XG4gICAgdGhpcy5kaXNhYmxlZCA9IGhpZGRlbjtcbiAgfVxuXG4gIGlzSW5zaWRlKHBvcykge1xuICAgIHJldHVybiAhdGhpcy5oaWRkZW47XG4gIH1cbn0iLCIvKlxuICogQ29weXJpZ2h0IChDKSAyMDIwIEVsaWFzdGlrIChlbGlhc3Rpa3NvZnRzLmNvbSlcbiAqXG4gKiBUaGlzIGZpbGUgaXMgcGFydCBvZiBcIkpTR2FtZVRvb2xzXCIuXG4gKlxuICogXCJKU0dhbWVUb29sc1wiIGlzIGZyZWUgc29mdHdhcmU6IHlvdSBjYW4gcmVkaXN0cmlidXRlIGl0IGFuZC9vciBtb2RpZnlcbiAqIGl0IHVuZGVyIHRoZSB0ZXJtcyBvZiB0aGUgR05VIEdlbmVyYWwgUHVibGljIExpY2Vuc2UgYXMgcHVibGlzaGVkIGJ5XG4gKiB0aGUgRnJlZSBTb2Z0d2FyZSBGb3VuZGF0aW9uLCBlaXRoZXIgdmVyc2lvbiAzIG9mIHRoZSBMaWNlbnNlLCBvclxuICogKGF0IHlvdXIgb3B0aW9uKSBhbnkgbGF0ZXIgdmVyc2lvbi5cbiAqXG4gKiBcIkpTR2FtZVRvb2xzXCIgaXMgZGlzdHJpYnV0ZWQgaW4gdGhlIGhvcGUgdGhhdCBpdCB3aWxsIGJlIHVzZWZ1bCxcbiAqIGJ1dCBXSVRIT1VUIEFOWSBXQVJSQU5UWTsgd2l0aG91dCBldmVuIHRoZSBpbXBsaWVkIHdhcnJhbnR5IG9mXG4gKiBNRVJDSEFOVEFCSUxJVFkgb3IgRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UuICBTZWUgdGhlXG4gKiBHTlUgR2VuZXJhbCBQdWJsaWMgTGljZW5zZSBmb3IgbW9yZSBkZXRhaWxzLlxuICpcbiAqIFlvdSBzaG91bGQgaGF2ZSByZWNlaXZlZCBhIGNvcHkgb2YgdGhlIEdOVSBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlXG4gKiBhbG9uZyB3aXRoIFwiSlNHYW1lVG9vbHNcIi4gIElmIG5vdCwgc2VlIDxodHRwOi8vd3d3LmdudS5vcmcvbGljZW5zZXMvPi5cbiAqL1xuaW1wb3J0IENvbnN0YW50cyBmcm9tIFwiLi9Db25zdGFudHNcIjtcbmltcG9ydCBDb2wgZnJvbSBcIi4vQ29sXCI7XG5pbXBvcnQgQnV0dG9uIGZyb20gXCIuL0J1dHRvblwiO1xuaW1wb3J0IENyb3NzIGZyb20gXCIuL0Nyb3NzXCI7XG5pbXBvcnQgU3R5bGUgZnJvbSBcIi4vU3R5bGVcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTm90aWZpY2F0aW9uTWVzc2FnZSBleHRlbmRzIENvbCB7XG4gIHNlbGVjdGFibGUgPSBmYWxzZTtcblxuICBjb25zdHJ1Y3RvcihzdHlsZSwgZGVsYXlCZWZvcmVDbG9zaW5nLCBlYXNpbmdGdW5jdGlvbiwgLi4uY29tcG9uZW50cykge1xuICAgIHN1cGVyKDAsIDAsIG51bGwsIG51bGwsIHN0eWxlLCAuLi5jb21wb25lbnRzKTtcblxuICAgIHRoaXMuZGVsYXlCZWZvcmVDbG9zaW5nID0gZGVsYXlCZWZvcmVDbG9zaW5nID09IHVuZGVmaW5lZCA/IDUgOiBkZWxheUJlZm9yZUNsb3Npbmc7IC8vIHNlY29uZFxuICAgIHRoaXMudGltZUxhc3RGcmFtZSA9IDA7XG4gICAgdGhpcy5hbmltYXRpb25UaW1lID0gMDtcbiAgICB0aGlzLmNsb3NlZCA9IHRydWU7XG4gICAgdGhpcy5jbG9zaW5nID0gZmFsc2U7XG4gICAgdGhpcy5lYXNpbmdGdW5jdGlvbiA9IGVhc2luZ0Z1bmN0aW9uO1xuXG4gICAgdGhpcy5jbG9zZUJ1dHRvbiA9IG5ldyBCdXR0b24obnVsbCwgbnVsbCwgbnVsbCwgbnVsbCwgbmV3IFN0eWxlKHtcImFsaWduZW1lbnRcIjogQ29uc3RhbnRzLkFsaWduZW1lbnQuUklHSFQsIFwidmVydGljYWxBbGlnbmVtZW50XCI6IENvbnN0YW50cy5WZXJ0aWNhbEFsaWduZW1lbnQuVE9QLCBcInBhZGRpbmdcIjogMTAgfSksIG5ldyBDcm9zcyhudWxsLCBudWxsLCAxMCwgMTApKTtcbiAgICB0aGlzLmFkZCh0aGlzLmNsb3NlQnV0dG9uKTtcbiAgfVxuICBcbiAgZHJhdyhjb250ZXh0KSB7XG4gICAgaWYodGhpcy5oaWRkZW4pIHJldHVybjtcbiAgICB0aGlzLmNsb3NlQnV0dG9uLmNhbnZhcyA9IHRoaXMuY2FudmFzO1xuXG4gICAgY29uc3QgY2FudmFzID0gY29udGV4dC5jYW52YXM7XG4gICAgY29uc3QgY3R4ID0gY2FudmFzLmdldENvbnRleHQoXCIyZFwiKTtcblxuICAgIGN0eC5zYXZlKCk7XG5cbiAgICBpZighdGhpcy5pbml0KSB7XG4gICAgICB0aGlzLnRpbWVMYXN0RnJhbWUgPSBwZXJmb3JtYW5jZS5ub3coKTtcbiAgICB9XG4gICAgXG4gICAgaWYodGhpcy5jbG9zZUJ1dHRvbiAhPSBudWxsKSB7XG4gICAgICB0aGlzLmNsb3NlQnV0dG9uLnNldENsaWNrQWN0aW9uKCgpID0+IHtcbiAgICAgICAgdGhpcy5jbG9zZSgpO1xuICAgICAgfSk7XG4gICAgfVxuXG4gICAgY29uc3Qgb2Zmc2V0VGltZSA9IHBlcmZvcm1hbmNlLm5vdygpIC0gdGhpcy50aW1lTGFzdEZyYW1lO1xuICAgIHRoaXMudGltZUxhc3RGcmFtZSA9IHBlcmZvcm1hbmNlLm5vdygpO1xuXG4gICAgaWYodGhpcy5hbmltYXRpb25UaW1lID49IHRoaXMuZGVsYXlCZWZvcmVDbG9zaW5nICogMTAwMCAmJiAhdGhpcy5jbG9zaW5nICYmICF0aGlzLmNsb3NlZCkge1xuICAgICAgdGhpcy5jbG9zZSgpO1xuICAgIH1cblxuICAgIGlmKCF0aGlzLmNsb3NpbmcpIHtcbiAgICAgIHRoaXMuYW5pbWF0aW9uVGltZSArPSBvZmZzZXRUaW1lO1xuICAgIH0gZWxzZSB7XG4gICAgICBpZih0aGlzLnN0eWxlLmRpc2FibGVBbmltYXRpb24pIHtcbiAgICAgICAgdGhpcy5hbmltYXRpb25UaW1lID0gLTE7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLmFuaW1hdGlvblRpbWUgLT0gb2Zmc2V0VGltZTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZih0aGlzLmFuaW1hdGlvblRpbWUgPCAwKSB7XG4gICAgICB0aGlzLmNsb3NlZCA9IHRydWU7XG4gICAgICB0aGlzLmNsb3NpbmcgPSBmYWxzZTtcbiAgICB9XG5cbiAgICBpZighdGhpcy5jbG9zZWQpIHtcbiAgICAgIHRoaXMuZHJhd0NvbXBvbmVudHMoY3R4KTtcblxuICAgICAgaWYodGhpcy5jbG9zZUJ1dHRvbiAhPSBudWxsKSB7XG4gICAgICAgIHRoaXMuY2xvc2VCdXR0b24ueSA9IHRoaXMueSArIHRoaXMuc3R5bGUucGFkZGluZyAvIDI7XG4gICAgICAgIHRoaXMuY2xvc2VCdXR0b24uZHJhdyhjdHgpO1xuICAgICAgfVxuXG4gICAgICB0aGlzLmVuYWJsZUNsb3NlQnV0dG9uKCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuZGlzYWJsZUNsb3NlQnV0dG9uKCk7XG4gICAgfVxuXG4gICAgY3R4LnJlc3RvcmUoKTtcblxuICAgIHRoaXMuaW5pdCA9IHRydWU7XG4gIH1cbiAgXG4gIGdldCBvZmZzZXRZKCkge1xuICAgIGxldCBvZmZzZXRZID0gMTtcblxuICAgIGlmKCF0aGlzLnN0eWxlLmRpc2FibGVBbmltYXRpb24pIHtcbiAgICAgIG9mZnNldFkgPSB0aGlzLmFuaW1hdGlvblRpbWUgLyB0aGlzLnN0eWxlLmFuaW1hdGlvbkR1cmF0aW9uO1xuXG4gICAgICBpZih0aGlzLmVhc2luZ0Z1bmN0aW9uKSB7XG4gICAgICAgIG9mZnNldFkgPSB0aGlzLmVhc2luZ0Z1bmN0aW9uKG9mZnNldFkpO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBvZmZzZXRZO1xuICB9XG5cbiAgZ2V0IHkoKSB7XG4gICAgY29uc3Qgb2Zmc2V0WSA9IHRoaXMub2Zmc2V0WTtcblxuICAgIGlmKHRoaXMuc3R5bGUudmVydGljYWxBbGlnbmVtZW50ID09IENvbnN0YW50cy5WZXJ0aWNhbEFsaWduZW1lbnQuVE9QKSB7XG4gICAgICByZXR1cm4gKHRoaXMuaGVpZ2h0ICogKG9mZnNldFkgPD0gMSA/IG9mZnNldFkgOiAxKSkgLSB0aGlzLmhlaWdodDtcbiAgICB9IFxuICAgIFxuICAgIHJldHVybiB0aGlzLmNhbnZhcy5zY2VuZS5oZWlnaHQgLSAodGhpcy5oZWlnaHQgKiAob2Zmc2V0WSA8PSAxID8gb2Zmc2V0WSA6IDEpKTtcbiAgfVxuXG4gIHNldCB5KHkpIHtcbiAgICBzdXBlci55ID0geTtcbiAgfVxuXG4gIGRyYXdDb21wb25lbnRzKGN0eCkge1xuICAgIHN1cGVyLmRyYXcoY3R4KTtcbiAgfVxuXG4gIGNsb3NlKCkge1xuICAgIHRoaXMuZGlzYWJsZUNsb3NlQnV0dG9uKCk7XG4gIFxuICAgIGlmKCF0aGlzLmNsb3NpbmcpIHtcbiAgICAgIHRoaXMuY2xvc2luZyA9IHRydWU7XG4gICAgICB0aGlzLmFuaW1hdGlvblRpbWUgPSB0aGlzLnN0eWxlLmFuaW1hdGlvbkR1cmF0aW9uO1xuICAgIH1cbiAgfVxuICBcbiAgb3BlbigpIHtcbiAgICB0aGlzLnRpbWVMYXN0RnJhbWUgPSAwO1xuICAgIHRoaXMuYW5pbWF0aW9uVGltZSA9IDA7XG4gICAgdGhpcy5pbml0ID0gZmFsc2U7XG4gICAgdGhpcy5jbG9zZWQgPSBmYWxzZTtcbiAgICB0aGlzLmNsb3NpbmcgPSBmYWxzZTtcbiAgfVxuICBcbiAgZGlzYWJsZUNsb3NlQnV0dG9uKCkge1xuICAgIGlmKHRoaXMuY2xvc2VCdXR0b24gIT0gdW5kZWZpbmVkICYmIHRoaXMuY2xvc2VCdXR0b24gIT0gbnVsbCAmJiB0aGlzLmNsb3NlQnV0dG9uIGluc3RhbmNlb2YgQnV0dG9uKSB7XG4gICAgICB0aGlzLmNsb3NlQnV0dG9uLmRpc2FibGUoKTtcbiAgICB9XG4gIH1cbiAgXG4gIGVuYWJsZUNsb3NlQnV0dG9uKCkge1xuICAgIGlmKHRoaXMuY2xvc2VCdXR0b24gIT0gdW5kZWZpbmVkICYmIHRoaXMuY2xvc2VCdXR0b24gIT0gbnVsbCAmJiB0aGlzLmNsb3NlQnV0dG9uIGluc3RhbmNlb2YgQnV0dG9uKSB7XG4gICAgICB0aGlzLmNsb3NlQnV0dG9uLmVuYWJsZSgpO1xuICAgIH1cbiAgfTtcbiAgXG4gIGNvcHkoKSB7XG4gICAgcmV0dXJuIG5ldyBOb3RpZmljYXRpb25NZXNzYWdlKHRoaXMuc3R5bGUuY29weSgpLCB0aGlzLmRlbGF5QmVmb3JlQ2xvc2luZywgdGhpcy5lYXNpbmdGdW5jdGlvbiwgLi4udGhpcy5jb21wb25lbnRzKTtcbiAgfVxuXG4gIGdldCB3aWR0aCgpIHtcbiAgICByZXR1cm4gdGhpcy5jYW52YXMgJiYgdGhpcy5jYW52YXMuc2NlbmUgPyB0aGlzLmNhbnZhcy5zY2VuZS53aWR0aCA6IG51bGw7XG4gIH1cblxuICBnZXQgaGVpZ2h0KCkge1xuICAgIHJldHVybiBzdXBlci5oZWlnaHQgLSAodGhpcy5jbG9zZUJ1dHRvbiA/IHRoaXMuY2xvc2VCdXR0b24uaGVpZ2h0IDogMCk7XG4gIH1cblxuICBnZXQgZGVmYXVsdFN0eWxlKCkge1xuICAgIHJldHVybiBuZXcgU3R5bGUoe1xuICAgICAgXCJhbGlnbmVtZW50XCI6IENvbnN0YW50cy5BbGlnbmVtZW50LkNFTlRFUixcbiAgICAgIFwiYmFja2dyb3VuZENvbG9yXCI6IENvbnN0YW50cy5TZXR0aW5nLk5PVElGSUNBVElPTl9ERUZBVUxUX0JBQ0tHUk9VTkQsXG4gICAgICBcImFuaW1hdGlvbkR1cmF0aW9uXCI6IENvbnN0YW50cy5TZXR0aW5nLk5PVElGSUNBVElPTl9ERUZBVUxUX0FOSU1BVElPTl9EVVJBVElPTlxuICAgIH0pO1xuICB9XG5cbiAgZ2V0IGhpZGRlbigpIHtcbiAgICByZXR1cm4gc3VwZXIuaGlkZGVuIHx8IHRoaXMuY2xvc2VkO1xuICB9XG5cbiAgc2V0IGhpZGRlbihoaWRkZW4pIHtcbiAgICBzdXBlci5oaWRkZW4gPSBoaWRkZW47XG5cbiAgICBpZihoaWRkZW4pIHtcbiAgICAgIHRoaXMuZm9yY2VDbG9zZSgpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLm9wZW4oKTtcbiAgICB9XG4gIH1cblxuICBjb21wYXJlVG9Db21wb25lbnQob3RoZXJDb21wb25lbnQpIHtcbiAgICByZXR1cm4gb3RoZXJDb21wb25lbnQuY29tcGFyZVRvTm90aWZpY2F0aW9uKHRoaXMpO1xuICB9XG5cbiAgY29tcGFyZVRvVG9vbHRpcChvdGhlckNvbXBvbmVudCkge1xuICAgIHJldHVybiAtMTtcbiAgfVxuXG4gIGNvbXBhcmVUb05vdGlmaWNhdGlvbihvdGhlckNvbXBvbmVudCkge1xuICAgIHJldHVybiAwO1xuICB9XG5cbiAgY29tcGFyZVRvTWVudShvdGhlckNvbXBvbmVudCkge1xuICAgIHJldHVybiAtMTtcbiAgfVxufSIsIi8qXG4gKiBDb3B5cmlnaHQgKEMpIDIwMjAgRWxpYXN0aWsgKGVsaWFzdGlrc29mdHMuY29tKVxuICpcbiAqIFRoaXMgZmlsZSBpcyBwYXJ0IG9mIFwiSlNHYW1lVG9vbHNcIi5cbiAqXG4gKiBcIkpTR2FtZVRvb2xzXCIgaXMgZnJlZSBzb2Z0d2FyZTogeW91IGNhbiByZWRpc3RyaWJ1dGUgaXQgYW5kL29yIG1vZGlmeVxuICogaXQgdW5kZXIgdGhlIHRlcm1zIG9mIHRoZSBHTlUgR2VuZXJhbCBQdWJsaWMgTGljZW5zZSBhcyBwdWJsaXNoZWQgYnlcbiAqIHRoZSBGcmVlIFNvZnR3YXJlIEZvdW5kYXRpb24sIGVpdGhlciB2ZXJzaW9uIDMgb2YgdGhlIExpY2Vuc2UsIG9yXG4gKiAoYXQgeW91ciBvcHRpb24pIGFueSBsYXRlciB2ZXJzaW9uLlxuICpcbiAqIFwiSlNHYW1lVG9vbHNcIiBpcyBkaXN0cmlidXRlZCBpbiB0aGUgaG9wZSB0aGF0IGl0IHdpbGwgYmUgdXNlZnVsLFxuICogYnV0IFdJVEhPVVQgQU5ZIFdBUlJBTlRZOyB3aXRob3V0IGV2ZW4gdGhlIGltcGxpZWQgd2FycmFudHkgb2ZcbiAqIE1FUkNIQU5UQUJJTElUWSBvciBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRS4gIFNlZSB0aGVcbiAqIEdOVSBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlIGZvciBtb3JlIGRldGFpbHMuXG4gKlxuICogWW91IHNob3VsZCBoYXZlIHJlY2VpdmVkIGEgY29weSBvZiB0aGUgR05VIEdlbmVyYWwgUHVibGljIExpY2Vuc2VcbiAqIGFsb25nIHdpdGggXCJKU0dhbWVUb29sc1wiLiAgSWYgbm90LCBzZWUgPGh0dHA6Ly93d3cuZ251Lm9yZy9saWNlbnNlcy8+LlxuICovXG5pbXBvcnQgQm94IGZyb20gXCIuL0JveFwiO1xuaW1wb3J0IENvbnN0YW50cyBmcm9tIFwiLi9Db25zdGFudHNcIjtcbmltcG9ydCBTdHlsZSBmcm9tIFwiLi9TdHlsZVwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBQcm9ncmVzc0JhciBleHRlbmRzIEJveCB7XG4gICNwcmVjUGVyY2VudCA9IDA7XG4gIHNlbGVjdGFibGUgPSBmYWxzZTtcblxuICBjb25zdHJ1Y3Rvcih4LCB5LCB3aWR0aCwgaGVpZ2h0LCBzdHlsZSwgZGVmYXVsdFBlcmNlbnQsIGVhc2luZ0Z1bmN0aW9uKSB7XG4gICAgc3VwZXIoeCwgeSwgd2lkdGgsIGhlaWdodCwgc3R5bGUpO1xuXG4gICAgdGhpcy5wZXJjZW50ID0gZGVmYXVsdFBlcmNlbnQgPT0gdW5kZWZpbmVkID8gMCA6IGRlZmF1bHRQZXJjZW50O1xuICAgIHRoaXMuI3ByZWNQZXJjZW50ID0gdGhpcy5wZXJjZW50O1xuICAgIHRoaXMuZWFzaW5nRnVuY3Rpb24gPSBlYXNpbmdGdW5jdGlvbjtcblxuICAgIHRoaXMubGFzdFRpbWUgPSAwO1xuICAgIHRoaXMudG90YWxUaW1lID0gMDtcbiAgfVxuXG4gIGRyYXcoY29udGV4dCkge1xuICAgIGlmKHRoaXMuaGlkZGVuKSByZXR1cm47XG4gICAgc3VwZXIuZHJhdyhjb250ZXh0KTtcblxuICAgIGNvbnN0IGNhbnZhcyA9IGNvbnRleHQuY2FudmFzO1xuICAgIGNvbnN0IGN0eCA9IGNhbnZhcy5nZXRDb250ZXh0KFwiMmRcIik7XG4gICAgY3R4LnNhdmUoKTtcblxuICAgIGNvbnN0IHRpbWUgPSBwZXJmb3JtYW5jZS5ub3coKTtcbiAgICBsZXQgb2Zmc2V0VGltZSA9IDA7XG5cbiAgICBpZih0aGlzLiNwcmVjUGVyY2VudCAhPSB0aGlzLnBlcmNlbnQgJiYgIXRoaXMuc3R5bGUuZGlzYWJsZUFuaW1hdGlvbikge1xuICAgICAgaWYodGhpcy5sYXN0VGltZSA+IDApIG9mZnNldFRpbWUgPSB0aW1lIC0gdGhpcy5sYXN0VGltZTtcbiAgICAgIHRoaXMudG90YWxUaW1lICs9IG9mZnNldFRpbWU7XG5cbiAgICAgIGlmKHRoaXMudG90YWxUaW1lID49IHRoaXMuc3R5bGUuYW5pbWF0aW9uRHVyYXRpb24pIHtcbiAgICAgICAgdGhpcy4jcHJlY1BlcmNlbnQgPSB0aGlzLnBlcmNlbnQ7XG4gICAgICAgIHRoaXMudG90YWxUaW1lID0gMDtcbiAgICAgICAgdGhpcy5sYXN0VGltZSA9IDA7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLmxhc3RUaW1lID0gdGltZTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy50b3RhbFRpbWUgPSAwO1xuICAgICAgdGhpcy5sYXN0VGltZSA9IDA7XG4gICAgfVxuXG4gICAgdGhpcy5kcmF3QmFja2dyb3VuZChjdHgpO1xuICAgIHRoaXMuZHJhd0ZvcmVncm91bmQoY3R4LCB0aGlzLndpZHRoRm9yZWdyb3VuZCk7XG5cbiAgICBjdHgucmVzdG9yZSgpO1xuICB9XG5cbiAgZ2V0IGFuaW1hdGlvblBlcmNlbnQoKSB7XG4gICAgbGV0IGFuaW1hdGlvblBlcmNlbnQgPSAodGhpcy4jcHJlY1BlcmNlbnQgIT0gdGhpcy5wZXJjZW50ICYmICF0aGlzLnN0eWxlLmRpc2FibGVBbmltYXRpb24gPyB0aGlzLnRvdGFsVGltZSAvICh0aGlzLnN0eWxlLmFuaW1hdGlvbkR1cmF0aW9uKSA6IDEpO1xuXG4gICAgaWYodGhpcy5lYXNpbmdGdW5jdGlvbikge1xuICAgICAgYW5pbWF0aW9uUGVyY2VudCA9IHRoaXMuZWFzaW5nRnVuY3Rpb24oYW5pbWF0aW9uUGVyY2VudCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGFuaW1hdGlvblBlcmNlbnQ7XG4gIH1cblxuICBnZXQgd2lkdGhGb3JlZ3JvdW5kKCkge1xuICAgIHJldHVybiBNYXRoLm1heCgwLCBNYXRoLm1pbih0aGlzLndpZHRoLCB0aGlzLndpZHRoICogKHRoaXMuI3ByZWNQZXJjZW50ICsgKHRoaXMucGVyY2VudCAtIHRoaXMuI3ByZWNQZXJjZW50KSAqIHRoaXMuYW5pbWF0aW9uUGVyY2VudCkpKTtcbiAgfVxuXG4gIGRyYXdGb3JlZ3JvdW5kKGN0eCwgd2lkdGhGb3JlZ3JvdW5kKSB7XG4gICAgY3R4LnNhdmUoKTtcblxuICAgIGN0eC5maWxsU3R5bGUgPSB0aGlzLnN0eWxlLmZvcmVncm91bmRDb2xvcjtcbiAgICBjdHguZmlsbFJlY3QodGhpcy54LCB0aGlzLnksIHdpZHRoRm9yZWdyb3VuZCwgdGhpcy5oZWlnaHQpO1xuXG4gICAgY3R4LnJlc3RvcmUoKTtcbiAgfVxuXG4gIGdldCBkZWZhdWx0U3R5bGUoKSB7XG4gICAgcmV0dXJuIG5ldyBTdHlsZSh7XG4gICAgICBcImJhY2tncm91bmRDb2xvclwiOiBDb25zdGFudHMuU2V0dGluZy5QUk9HUkVTU19ERUZBVUxUX0JBQ0tHUk9VTkQsXG4gICAgICBcImZvcmVncm91bmRDb2xvclwiOiBDb25zdGFudHMuU2V0dGluZy5QUk9HUkVTU19ERUZBVUxUX0ZPUkVHUk9VTkQsXG4gICAgICBcImFuaW1hdGlvbkR1cmF0aW9uXCI6IENvbnN0YW50cy5TZXR0aW5nLlBST0dSRVNTX0RFRkFVTFRfQU5JTUFUSU9OX0RVUkFUSU9OXG4gICAgfSk7XG4gIH1cbn0iLCIvKlxuICogQ29weXJpZ2h0IChDKSAyMDIwIEVsaWFzdGlrIChlbGlhc3Rpa3NvZnRzLmNvbSlcbiAqXG4gKiBUaGlzIGZpbGUgaXMgcGFydCBvZiBcIkpTR2FtZVRvb2xzXCIuXG4gKlxuICogXCJKU0dhbWVUb29sc1wiIGlzIGZyZWUgc29mdHdhcmU6IHlvdSBjYW4gcmVkaXN0cmlidXRlIGl0IGFuZC9vciBtb2RpZnlcbiAqIGl0IHVuZGVyIHRoZSB0ZXJtcyBvZiB0aGUgR05VIEdlbmVyYWwgUHVibGljIExpY2Vuc2UgYXMgcHVibGlzaGVkIGJ5XG4gKiB0aGUgRnJlZSBTb2Z0d2FyZSBGb3VuZGF0aW9uLCBlaXRoZXIgdmVyc2lvbiAzIG9mIHRoZSBMaWNlbnNlLCBvclxuICogKGF0IHlvdXIgb3B0aW9uKSBhbnkgbGF0ZXIgdmVyc2lvbi5cbiAqXG4gKiBcIkpTR2FtZVRvb2xzXCIgaXMgZGlzdHJpYnV0ZWQgaW4gdGhlIGhvcGUgdGhhdCBpdCB3aWxsIGJlIHVzZWZ1bCxcbiAqIGJ1dCBXSVRIT1VUIEFOWSBXQVJSQU5UWTsgd2l0aG91dCBldmVuIHRoZSBpbXBsaWVkIHdhcnJhbnR5IG9mXG4gKiBNRVJDSEFOVEFCSUxJVFkgb3IgRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UuICBTZWUgdGhlXG4gKiBHTlUgR2VuZXJhbCBQdWJsaWMgTGljZW5zZSBmb3IgbW9yZSBkZXRhaWxzLlxuICpcbiAqIFlvdSBzaG91bGQgaGF2ZSByZWNlaXZlZCBhIGNvcHkgb2YgdGhlIEdOVSBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlXG4gKiBhbG9uZyB3aXRoIFwiSlNHYW1lVG9vbHNcIi4gIElmIG5vdCwgc2VlIDxodHRwOi8vd3d3LmdudS5vcmcvbGljZW5zZXMvPi5cbiAqL1xuaW1wb3J0IEV2ZW50IGZyb20gXCIuL0V2ZW50XCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFJlYWN0b3Ige1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICB0aGlzLmV2ZW50cyA9IHt9O1xuICB9XG5cbiAgcmVnaXN0ZXJFdmVudChldmVudE5hbWUpIHtcbiAgICB0aGlzLmV2ZW50c1tldmVudE5hbWVdID0gbmV3IEV2ZW50KGV2ZW50TmFtZSk7XG4gIH1cblxuICBkaXNwYXRjaEV2ZW50KGV2ZW50TmFtZSwgLi4uZXZlbnRBcmdzKSB7XG4gICAgaWYodGhpcy5ldmVudHNbZXZlbnROYW1lXSkge1xuICAgICAgY29uc3QgY2FsbGJhY2tzID0gdGhpcy5ldmVudHNbZXZlbnROYW1lXS5jYWxsYmFja3M7XG4gICAgICBjYWxsYmFja3MuZm9yRWFjaChjYWxsYmFjayA9PiBjYWxsYmFjayAmJiBjYWxsYmFjayguLi5ldmVudEFyZ3MpKTtcbiAgICB9XG4gIH1cblxuICBhZGRFdmVudExpc3RlbmVyKGV2ZW50TmFtZSwgY2FsbGJhY2spIHtcbiAgICBpZih0aGlzLmV2ZW50c1tldmVudE5hbWVdKSB0aGlzLmV2ZW50c1tldmVudE5hbWVdLnJlZ2lzdGVyQ2FsbGJhY2soY2FsbGJhY2spO1xuICB9XG5cbiAgcmVtb3ZlRXZlbnRMaXN0ZW5lcihldmVudE5hbWUsIGNhbGxiYWNrKSB7XG4gICAgaWYodGhpcy5ldmVudHNbZXZlbnROYW1lXSkgdGhpcy5ldmVudHNbZXZlbnROYW1lXS5yZW1vdmVDYWxsYmFjayhjYWxsYmFjayk7XG4gIH1cblxuICByZW1vdmVBbGxFdmVudExpc3RlbmVyKGV2ZW50TmFtZSkge1xuICAgIGlmKHRoaXMuZXZlbnRzW2V2ZW50TmFtZV0pIHRoaXMuZXZlbnRzW2V2ZW50TmFtZV0ucmVtb3ZlQWxsQ2FsbGJhY2tzKCk7XG4gIH1cbn0iLCIvKlxuICogQ29weXJpZ2h0IChDKSAyMDIwIEVsaWFzdGlrIChlbGlhc3Rpa3NvZnRzLmNvbSlcbiAqXG4gKiBUaGlzIGZpbGUgaXMgcGFydCBvZiBcIkpTR2FtZVRvb2xzXCIuXG4gKlxuICogXCJKU0dhbWVUb29sc1wiIGlzIGZyZWUgc29mdHdhcmU6IHlvdSBjYW4gcmVkaXN0cmlidXRlIGl0IGFuZC9vciBtb2RpZnlcbiAqIGl0IHVuZGVyIHRoZSB0ZXJtcyBvZiB0aGUgR05VIEdlbmVyYWwgUHVibGljIExpY2Vuc2UgYXMgcHVibGlzaGVkIGJ5XG4gKiB0aGUgRnJlZSBTb2Z0d2FyZSBGb3VuZGF0aW9uLCBlaXRoZXIgdmVyc2lvbiAzIG9mIHRoZSBMaWNlbnNlLCBvclxuICogKGF0IHlvdXIgb3B0aW9uKSBhbnkgbGF0ZXIgdmVyc2lvbi5cbiAqXG4gKiBcIkpTR2FtZVRvb2xzXCIgaXMgZGlzdHJpYnV0ZWQgaW4gdGhlIGhvcGUgdGhhdCBpdCB3aWxsIGJlIHVzZWZ1bCxcbiAqIGJ1dCBXSVRIT1VUIEFOWSBXQVJSQU5UWTsgd2l0aG91dCBldmVuIHRoZSBpbXBsaWVkIHdhcnJhbnR5IG9mXG4gKiBNRVJDSEFOVEFCSUxJVFkgb3IgRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UuICBTZWUgdGhlXG4gKiBHTlUgR2VuZXJhbCBQdWJsaWMgTGljZW5zZSBmb3IgbW9yZSBkZXRhaWxzLlxuICpcbiAqIFlvdSBzaG91bGQgaGF2ZSByZWNlaXZlZCBhIGNvcHkgb2YgdGhlIEdOVSBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlXG4gKiBhbG9uZyB3aXRoIFwiSlNHYW1lVG9vbHNcIi4gIElmIG5vdCwgc2VlIDxodHRwOi8vd3d3LmdudS5vcmcvbGljZW5zZXMvPi5cbiAqL1xuaW1wb3J0IFJlYWN0b3IgZnJvbSBcIi4vUmVhY3RvclwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBSZWFjdG9yQ2FudmFzIGV4dGVuZHMgUmVhY3RvciB7XG4gIHJlZ2lzdGVyRXZlbnQoZXZlbnROYW1lKSB7XG4gICAgaWYoIXRoaXMuZXZlbnRzW2V2ZW50TmFtZV0pIHRoaXMuZXZlbnRzW2V2ZW50TmFtZV0gPSBbXTtcbiAgfVxuXG4gIGRpc3BhdGNoRXZlbnQoZXZlbnROYW1lLCAuLi5ldmVudEFyZ3MpIHtcbiAgICBpZih0aGlzLmV2ZW50c1tldmVudE5hbWVdKSB7XG4gICAgICBjb25zdCBldmVudHMgPSB0aGlzLmV2ZW50c1tldmVudE5hbWVdO1xuICAgICAgZXZlbnRzLmZvckVhY2goZXZlbnQgPT4gZXZlbnQgJiYgZXZlbnQuY2FsbGJhY2sgJiYgZXZlbnQuY2FsbGJhY2soLi4uZXZlbnRBcmdzKSk7XG4gICAgfVxuICB9XG5cbiAgZGlzcGF0Y2hFdmVudENvbXBvbmVudChldmVudE5hbWUsIGNvbXBvbmVudCwgLi4uZXZlbnRBcmdzKSB7XG4gICAgaWYodGhpcy5ldmVudHNbZXZlbnROYW1lXSkge1xuICAgICAgY29uc3QgZXZlbnRzID0gdGhpcy5ldmVudHNbZXZlbnROYW1lXTtcbiAgICAgIGV2ZW50cy5mb3JFYWNoKGV2ZW50ID0+IGV2ZW50ICYmIGV2ZW50LmNhbGxiYWNrICYmIGV2ZW50LmNvbXBvbmVudCA9PSBjb21wb25lbnQgJiYgZXZlbnQuY2FsbGJhY2soLi4uZXZlbnRBcmdzKSk7XG4gICAgfVxuICB9XG5cbiAgYWRkRXZlbnRMaXN0ZW5lcihldmVudE5hbWUsIGNvbXBvbmVudCwgY2FsbGJhY2spIHtcbiAgICBpZih0aGlzLmV2ZW50c1tldmVudE5hbWVdKSB7XG4gICAgICB0aGlzLmV2ZW50c1tldmVudE5hbWVdLnB1c2goe1xuICAgICAgICBcImNvbXBvbmVudFwiOiBjb21wb25lbnQsXG4gICAgICAgIFwiY2FsbGJhY2tcIjogY2FsbGJhY2tcbiAgICAgIH0pO1xuICAgIH1cbiAgfVxuXG4gIHJlbW92ZUV2ZW50TGlzdGVuZXIoZXZlbnROYW1lLCBjYWxsYmFjaykge1xuICAgIGlmKHRoaXMuZXZlbnRzW2V2ZW50TmFtZV0pIHRoaXMuZXZlbnRzW2V2ZW50TmFtZV0uZmlsdGVyKGV2ZW50ID0+IGV2ZW50ICYmIGV2ZW50LmNhbGxiYWNrICE9IGNhbGxiYWNrKTtcbiAgfVxuXG4gIHJlbW92ZUV2ZW50TGlzdGVuZXJDb21wb25lbnQoZXZlbnROYW1lLCBjb21wb25lbnQpIHtcbiAgICBpZih0aGlzLmV2ZW50c1tldmVudE5hbWVdKSB0aGlzLmV2ZW50c1tldmVudE5hbWVdLmZpbHRlcihldmVudCA9PiBldmVudCAmJiBldmVudC5jb21wb25lbnQgIT0gY29tcG9uZW50KTtcbiAgfVxuXG4gIHJlbW92ZUFsbEV2ZW50TGlzdGVuZXIoKSB7XG4gICAgdGhpcy5ldmVudHMgPSBbXTtcbiAgfVxufSIsIi8qXG4gKiBDb3B5cmlnaHQgKEMpIDIwMjAgRWxpYXN0aWsgKGVsaWFzdGlrc29mdHMuY29tKVxuICpcbiAqIFRoaXMgZmlsZSBpcyBwYXJ0IG9mIFwiSlNHYW1lVG9vbHNcIi5cbiAqXG4gKiBcIkpTR2FtZVRvb2xzXCIgaXMgZnJlZSBzb2Z0d2FyZTogeW91IGNhbiByZWRpc3RyaWJ1dGUgaXQgYW5kL29yIG1vZGlmeVxuICogaXQgdW5kZXIgdGhlIHRlcm1zIG9mIHRoZSBHTlUgR2VuZXJhbCBQdWJsaWMgTGljZW5zZSBhcyBwdWJsaXNoZWQgYnlcbiAqIHRoZSBGcmVlIFNvZnR3YXJlIEZvdW5kYXRpb24sIGVpdGhlciB2ZXJzaW9uIDMgb2YgdGhlIExpY2Vuc2UsIG9yXG4gKiAoYXQgeW91ciBvcHRpb24pIGFueSBsYXRlciB2ZXJzaW9uLlxuICpcbiAqIFwiSlNHYW1lVG9vbHNcIiBpcyBkaXN0cmlidXRlZCBpbiB0aGUgaG9wZSB0aGF0IGl0IHdpbGwgYmUgdXNlZnVsLFxuICogYnV0IFdJVEhPVVQgQU5ZIFdBUlJBTlRZOyB3aXRob3V0IGV2ZW4gdGhlIGltcGxpZWQgd2FycmFudHkgb2ZcbiAqIE1FUkNIQU5UQUJJTElUWSBvciBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRS4gIFNlZSB0aGVcbiAqIEdOVSBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlIGZvciBtb3JlIGRldGFpbHMuXG4gKlxuICogWW91IHNob3VsZCBoYXZlIHJlY2VpdmVkIGEgY29weSBvZiB0aGUgR05VIEdlbmVyYWwgUHVibGljIExpY2Vuc2VcbiAqIGFsb25nIHdpdGggXCJKU0dhbWVUb29sc1wiLiAgSWYgbm90LCBzZWUgPGh0dHA6Ly93d3cuZ251Lm9yZy9saWNlbnNlcy8+LlxuICovXG5pbXBvcnQgQ29tcG9uZW50IGZyb20gXCIuL0NvbXBvbmVudFwiO1xuaW1wb3J0IENvbnRhaW5lciBmcm9tIFwiLi9Db250YWluZXJcIjtcbmltcG9ydCBVdGlscyBmcm9tIFwiLi9VdGlsc1wiO1xuaW1wb3J0IENvbnN0YW50cyBmcm9tIFwiLi9Db25zdGFudHNcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUm93IGV4dGVuZHMgQ29udGFpbmVyIHtcbiAgc2VsZWN0YWJsZSA9IGZhbHNlO1xuICAjX2lubmVySGVpZ2h0ID0gMDtcbiAgI19pbm5lcldpZHRoID0gMDtcblxuICBjb25zdHJ1Y3Rvcih4LCB5LCBtYXhXaWR0aCwgbWF4SGVpZ2h0LCBzdHlsZSwgLi4uY29tcG9uZW50cykge1xuICAgIHN1cGVyKHgsIHksIG1heFdpZHRoLCBtYXhIZWlnaHQsIHN0eWxlLCAuLi5jb21wb25lbnRzKTtcblxuICAgIGlmKCFDb25zdGFudHMuU2V0dGluZy5ESVNBQkxFX0VYUEVSSU1FTlRBTF9PUFRJTUlaQVRJT05TKSB7XG4gICAgICB0aGlzLnVwZGF0ZUlubmVyV2lkdGgoKTtcbiAgICAgIHRoaXMudXBkYXRlSW5uZXJIZWlnaHQoKTtcbiAgXG4gICAgICB0aGlzLmFkZENoYW5nZUFjdGlvbigoKSA9PiB7XG4gICAgICAgIHRoaXMudXBkYXRlSW5uZXJXaWR0aCgpO1xuICAgICAgICB0aGlzLnVwZGF0ZUlubmVySGVpZ2h0KCk7XG4gICAgICB9KTtcbiAgICB9XG4gIH1cblxuICBkcmF3KGNvbnRleHQpIHtcbiAgICBpZih0aGlzLmhpZGRlbikgcmV0dXJuO1xuICAgIHN1cGVyLmRyYXcoY29udGV4dCk7XG5cbiAgICBjb25zdCBjYW52YXMgPSBjb250ZXh0LmNhbnZhcztcbiAgICBjb25zdCBjdHggPSBjYW52YXMuZ2V0Q29udGV4dChcIjJkXCIpO1xuICAgIGN0eC5zYXZlKCk7XG5cbiAgICBsZXQgY3R4VGVtcCA9IGN0eDtcbiAgICBcbiAgICBpZih0aGlzLmlzQ3V0dGluZykge1xuICAgICAgY3R4VGVtcCA9IHRoaXMuY2FudmFzVG1wLmdldENvbnRleHQoXCIyZFwiKTtcbiAgICAgIGN0eFRlbXAuc2NhbGUoQ29uc3RhbnRzLlNldHRpbmcuUElYRUxfUkFUSU8sIENvbnN0YW50cy5TZXR0aW5nLlBJWEVMX1JBVElPKTtcbiAgICB9XG4gIFxuICAgIGlmKHN1cGVyLmNvbXBvbmVudHMgIT0gbnVsbCkge1xuICAgICAgbGV0IGN1cnJlbnRYID0gdGhpcy5zdHlsZS5wYWRkaW5nO1xuXG4gICAgICBzdXBlci5jb21wb25lbnRzLmZvckVhY2goY29tcG9uZW50ID0+IHtcbiAgICAgICAgY3VycmVudFggPSB0aGlzLmRyYXdDb21wb25lbnQoY29tcG9uZW50LCBjdXJyZW50WCwgY3R4VGVtcCk7XG4gICAgICB9KTtcbiAgICB9XG4gICAgXG4gICAgaWYodGhpcy5pc0N1dHRpbmcpIHtcbiAgICAgIFV0aWxzLmRyYXdJbWFnZURhdGEoY3R4LCB0aGlzLmNhbnZhc1RtcCwgdGhpcy54LCB0aGlzLnksIHRoaXMud2lkdGgsIHRoaXMuaGVpZ2h0LCB0aGlzLnggKiBDb25zdGFudHMuU2V0dGluZy5QSVhFTF9SQVRJTywgdGhpcy55ICogQ29uc3RhbnRzLlNldHRpbmcuUElYRUxfUkFUSU8sIHRoaXMud2lkdGggKiBDb25zdGFudHMuU2V0dGluZy5QSVhFTF9SQVRJTywgdGhpcy5oZWlnaHQgKiBDb25zdGFudHMuU2V0dGluZy5QSVhFTF9SQVRJTyk7XG4gICAgfVxuXG4gICAgc3VwZXIuZHJhd1Njcm9sbGJhcnMoY3R4KTtcblxuICAgIGN0eC5yZXN0b3JlKCk7XG4gIH1cblxuICBkcmF3Q29tcG9uZW50KGNvbXBvbmVudCwgY3VycmVudFgsIGN0eCkge1xuICAgIGlmKGNvbXBvbmVudCBpbnN0YW5jZW9mIENvbXBvbmVudCkge1xuICAgICAgY29tcG9uZW50LnggPSBjdXJyZW50WCAtIHRoaXMub2Zmc2V0U2Nyb2xsWDtcbiAgICAgIGNvbXBvbmVudC55ID0gdGhpcy5zdHlsZS5wYWRkaW5nIC0gdGhpcy5vZmZzZXRTY3JvbGxZO1xuICAgICAgXG4gICAgICBpZighY29tcG9uZW50LmhpZGRlbikge1xuICAgICAgICBpZih0aGlzLmlzQ29tcG9uZW50VmlzaWJsZShjb21wb25lbnQpKSB7XG4gICAgICAgICAgY29tcG9uZW50LmRyYXcoY3R4KTtcbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgY3VycmVudFggKz0gY29tcG9uZW50LndpZHRoICsgdGhpcy5zdHlsZS5zcGFjZUJldHdlZW5Db21wb25lbnRzO1xuICAgICAgfVxuICAgIH1cbiAgICBcbiAgICByZXR1cm4gY3VycmVudFg7XG4gIH1cblxuICB1cGRhdGVJbm5lckhlaWdodCgpIHtcbiAgICBsZXQgbWF4SGVpZ2h0ID0gMDtcbiAgICBzdXBlci5jb21wb25lbnRzLmZvckVhY2goY29tcG9uZW50ID0+IHsgaWYoY29tcG9uZW50LmhlaWdodCA+IG1heEhlaWdodCAmJiAhY29tcG9uZW50LmhpZGRlbikgbWF4SGVpZ2h0ID0gY29tcG9uZW50LmhlaWdodDsgfSk7XG4gICAgdGhpcy4jX2lubmVySGVpZ2h0ID0gbWF4SGVpZ2h0ICsgdGhpcy5zdHlsZS5wYWRkaW5nO1xuICB9XG5cbiAgdXBkYXRlSW5uZXJXaWR0aCgpIHtcbiAgICBsZXQgdG90YWxXaWR0aCA9IDA7XG4gICAgc3VwZXIuY29tcG9uZW50cy5mb3JFYWNoKGNvbXBvbmVudCA9PiB7IGlmKCFjb21wb25lbnQuaGlkZGVuKSB0b3RhbFdpZHRoICs9IGNvbXBvbmVudC53aWR0aCB9KTtcbiAgICB0aGlzLiNfaW5uZXJXaWR0aCA9IHRvdGFsV2lkdGggKyB0aGlzLnN0eWxlLnNwYWNlQmV0d2VlbkNvbXBvbmVudHMgKiAoc3VwZXIuY29tcG9uZW50cy5sZW5ndGggLSAxKSArIHRoaXMuc3R5bGUucGFkZGluZztcbiAgfVxuXG4gIGdldCBpbm5lckhlaWdodCgpIHtcbiAgICBpZihDb25zdGFudHMuU2V0dGluZy5ESVNBQkxFX0VYUEVSSU1FTlRBTF9PUFRJTUlaQVRJT05TKSB0aGlzLnVwZGF0ZUlubmVySGVpZ2h0KCk7XG4gICAgcmV0dXJuIHRoaXMuI19pbm5lckhlaWdodDtcbiAgfVxuXG4gIGdldCBpbm5lcldpZHRoKCkge1xuICAgIGlmKENvbnN0YW50cy5TZXR0aW5nLkRJU0FCTEVfRVhQRVJJTUVOVEFMX09QVElNSVpBVElPTlMpIHRoaXMudXBkYXRlSW5uZXJXaWR0aCgpO1xuICAgIHJldHVybiB0aGlzLiNfaW5uZXJXaWR0aDtcbiAgfVxuXG4gIGdldCB3aWR0aCgpIHtcbiAgICBjb25zdCB3aWR0aCA9IHRoaXMuaW5uZXJXaWR0aCB8fCAodGhpcy5wYXJlbnQgJiYgdGhpcy5wYXJlbnQud2lkdGgpO1xuICAgIGNvbnN0IG1pbiA9IHRoaXMubWF4V2lkdGggIT0gbnVsbCA/IE1hdGgubWluKHRoaXMubWF4V2lkdGgsIHdpZHRoKSA6IG51bGw7XG4gICAgcmV0dXJuIHRoaXMubWluV2lkdGggIT0gbnVsbCA/IE1hdGgubWF4KHRoaXMubWluV2lkdGgsIG1pbiAhPSBudWxsID8gbWluIDogd2lkdGgpIDogbWluICE9IG51bGwgPyBtaW4gOiB3aWR0aDtcbiAgfVxuXG4gIGdldCBoZWlnaHQoKSB7XG4gICAgY29uc3QgaGVpZ2h0ID0gdGhpcy5pbm5lckhlaWdodCB8fCAodGhpcy5wYXJlbnQgJiYgdGhpcy5wYXJlbnQuaGVpZ2h0KTtcbiAgICBjb25zdCBtaW4gPSB0aGlzLm1heEhlaWdodCAhPSBudWxsID8gTWF0aC5taW4odGhpcy5tYXhIZWlnaHQsIGhlaWdodCkgOiBudWxsO1xuICAgIHJldHVybiB0aGlzLm1pbkhlaWdodCAhPSBudWxsID8gTWF0aC5tYXgodGhpcy5taW5IZWlnaHQsIG1pbiAhPSBudWxsID8gbWluIDogaGVpZ2h0KSA6IG1pbiAhPSBudWxsID8gbWluIDogaGVpZ2h0O1xuICB9XG5cbiAgZ2V0IGRlZmF1bHRTdHlsZSgpIHtcbiAgICByZXR1cm4gc3VwZXIuZGVmYXVsdFN0eWxlO1xuICB9XG59IiwiLypcbiAqIENvcHlyaWdodCAoQykgMjAyMCBFbGlhc3RpayAoZWxpYXN0aWtzb2Z0cy5jb20pXG4gKlxuICogVGhpcyBmaWxlIGlzIHBhcnQgb2YgXCJKU0dhbWVUb29sc1wiLlxuICpcbiAqIFwiSlNHYW1lVG9vbHNcIiBpcyBmcmVlIHNvZnR3YXJlOiB5b3UgY2FuIHJlZGlzdHJpYnV0ZSBpdCBhbmQvb3IgbW9kaWZ5XG4gKiBpdCB1bmRlciB0aGUgdGVybXMgb2YgdGhlIEdOVSBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlIGFzIHB1Ymxpc2hlZCBieVxuICogdGhlIEZyZWUgU29mdHdhcmUgRm91bmRhdGlvbiwgZWl0aGVyIHZlcnNpb24gMyBvZiB0aGUgTGljZW5zZSwgb3JcbiAqIChhdCB5b3VyIG9wdGlvbikgYW55IGxhdGVyIHZlcnNpb24uXG4gKlxuICogXCJKU0dhbWVUb29sc1wiIGlzIGRpc3RyaWJ1dGVkIGluIHRoZSBob3BlIHRoYXQgaXQgd2lsbCBiZSB1c2VmdWwsXG4gKiBidXQgV0lUSE9VVCBBTlkgV0FSUkFOVFk7IHdpdGhvdXQgZXZlbiB0aGUgaW1wbGllZCB3YXJyYW50eSBvZlxuICogTUVSQ0hBTlRBQklMSVRZIG9yIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFLiAgU2VlIHRoZVxuICogR05VIEdlbmVyYWwgUHVibGljIExpY2Vuc2UgZm9yIG1vcmUgZGV0YWlscy5cbiAqXG4gKiBZb3Ugc2hvdWxkIGhhdmUgcmVjZWl2ZWQgYSBjb3B5IG9mIHRoZSBHTlUgR2VuZXJhbCBQdWJsaWMgTGljZW5zZVxuICogYWxvbmcgd2l0aCBcIkpTR2FtZVRvb2xzXCIuICBJZiBub3QsIHNlZSA8aHR0cDovL3d3dy5nbnUub3JnL2xpY2Vuc2VzLz4uXG4gKi9cbmltcG9ydCBJbnB1dCBmcm9tIFwiLi9JbnB1dFwiO1xuaW1wb3J0IENvbnRhaW5lciBmcm9tIFwiLi9Db250YWluZXJcIjtcbmltcG9ydCBVdGlscyBmcm9tIFwiLi9VdGlsc1wiO1xuaW1wb3J0IFN0eWxlIGZyb20gXCIuL1N0eWxlXCI7XG5pbXBvcnQgQ29uc3RhbnRzIGZyb20gXCIuL0NvbnN0YW50c1wiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTY2VuZSBleHRlbmRzIENvbnRhaW5lciB7XG4gIHNlbGVjdGFibGUgPSBmYWxzZTtcbiAgZW5hYmxlRXZlbnRzID0gZmFsc2U7XG5cbiAgY29uc3RydWN0b3IoLi4uY29tcG9uZW50cykge1xuICAgIHN1cGVyKCk7XG4gICAgdGhpcy5hZGRBbGwoLi4uY29tcG9uZW50cyk7XG4gIH1cblxuICBkcmF3KGNvbnRleHQpIHtcbiAgICBpZih0aGlzLmhpZGRlbikgcmV0dXJuO1xuICAgIHN1cGVyLmRyYXcoY29udGV4dCk7XG5cbiAgICBjb25zdCBjYW52YXMgPSBjb250ZXh0LmNhbnZhcztcbiAgICBjb25zdCBjdHggPSBjYW52YXMuZ2V0Q29udGV4dChcIjJkXCIpO1xuICAgIGN0eC5zYXZlKCk7XG4gICAgY2FudmFzLnN0eWxlLmN1cnNvciA9IFwiZGVmYXVsdFwiO1xuXG4gICAgbGV0IGN0eFRlbXAgPSBjdHg7XG4gICAgaWYodGhpcy5tYXhXaWR0aCB8fCB0aGlzLm1heEhlaWdodCkgY3R4VGVtcCA9IHRoaXMuY2FudmFzVG1wLmdldENvbnRleHQoXCIyZFwiKTtcblxuICAgIHRoaXMuZHJhd0NvbXBvbmVudHMoY3R4VGVtcCk7IC8vIERyYXcgc29ydGVkIGNvbXBvbmVudHNcbiAgICBcbiAgICBpZih0aGlzLm1heFdpZHRoIHx8IHRoaXMubWF4SGVpZ2h0KSBVdGlscy5kcmF3SW1hZ2VEYXRhKGN0eCwgdGhpcy5jYW52YXNUbXAsIHRoaXMueCwgdGhpcy55LCB0aGlzLndpZHRoLCB0aGlzLmhlaWdodCwgdGhpcy54LCB0aGlzLnksIHRoaXMud2lkdGgsIHRoaXMuaGVpZ2h0KTtcbiAgICBzdXBlci5kcmF3U2Nyb2xsYmFycyhjdHgpO1xuXG4gICAgY3R4LnJlc3RvcmUoKTtcbiAgfVxuXG4gIGRyYXdDb21wb25lbnRzKGN0eCkge1xuICAgIHRoaXMuY29tcG9uZW50cy5zb3J0KFNjZW5lLmNvbXBhcmVDb21wb25lbnRzKS5mb3JFYWNoKGNvbXBvbmVudCA9PiBjb21wb25lbnQuZHJhdyhjdHgpKTtcbiAgfVxuXG4gIGdldCBkZWZhdWx0U3R5bGUoKSB7XG4gICAgcmV0dXJuIG5ldyBTdHlsZSh7XG4gICAgICBcInBhZGRpbmdcIjogQ29uc3RhbnRzLlNldHRpbmcuREVGQVVMVF9QQURESU5HXG4gICAgfSk7XG4gIH1cbn0iLCIvKlxuICogQ29weXJpZ2h0IChDKSAyMDIwIEVsaWFzdGlrIChlbGlhc3Rpa3NvZnRzLmNvbSlcbiAqXG4gKiBUaGlzIGZpbGUgaXMgcGFydCBvZiBcIkpTR2FtZVRvb2xzXCIuXG4gKlxuICogXCJKU0dhbWVUb29sc1wiIGlzIGZyZWUgc29mdHdhcmU6IHlvdSBjYW4gcmVkaXN0cmlidXRlIGl0IGFuZC9vciBtb2RpZnlcbiAqIGl0IHVuZGVyIHRoZSB0ZXJtcyBvZiB0aGUgR05VIEdlbmVyYWwgUHVibGljIExpY2Vuc2UgYXMgcHVibGlzaGVkIGJ5XG4gKiB0aGUgRnJlZSBTb2Z0d2FyZSBGb3VuZGF0aW9uLCBlaXRoZXIgdmVyc2lvbiAzIG9mIHRoZSBMaWNlbnNlLCBvclxuICogKGF0IHlvdXIgb3B0aW9uKSBhbnkgbGF0ZXIgdmVyc2lvbi5cbiAqXG4gKiBcIkpTR2FtZVRvb2xzXCIgaXMgZGlzdHJpYnV0ZWQgaW4gdGhlIGhvcGUgdGhhdCBpdCB3aWxsIGJlIHVzZWZ1bCxcbiAqIGJ1dCBXSVRIT1VUIEFOWSBXQVJSQU5UWTsgd2l0aG91dCBldmVuIHRoZSBpbXBsaWVkIHdhcnJhbnR5IG9mXG4gKiBNRVJDSEFOVEFCSUxJVFkgb3IgRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UuICBTZWUgdGhlXG4gKiBHTlUgR2VuZXJhbCBQdWJsaWMgTGljZW5zZSBmb3IgbW9yZSBkZXRhaWxzLlxuICpcbiAqIFlvdSBzaG91bGQgaGF2ZSByZWNlaXZlZCBhIGNvcHkgb2YgdGhlIEdOVSBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlXG4gKiBhbG9uZyB3aXRoIFwiSlNHYW1lVG9vbHNcIi4gIElmIG5vdCwgc2VlIDxodHRwOi8vd3d3LmdudS5vcmcvbGljZW5zZXMvPi5cbiAqL1xuaW1wb3J0IENvbnN0YW50cyBmcm9tIFwiLi9Db25zdGFudHNcIjtcbmltcG9ydCBCb3ggZnJvbSBcIi4vQm94XCI7XG5pbXBvcnQgU3R5bGUgZnJvbSBcIi4vU3R5bGVcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU2Nyb2xsYmFyIGV4dGVuZHMgQm94IHtcbiAgc2VsZWN0YWJsZSA9IHRydWU7XG5cbiAgY29uc3RydWN0b3Ioc2l6ZSwgc3R5bGUsIHBhcmVudCkge1xuICAgIHN1cGVyKG51bGwsIG51bGwsIG51bGwsIG51bGwsIHN0eWxlKTtcbiAgICB0aGlzLnBhcmVudCA9IHBhcmVudDtcbiAgICB0aGlzLnNpemUgPSBzaXplIHx8IENvbnN0YW50cy5TZXR0aW5nLlNDUk9MTEJBUl9ERUZBVUxUX1NJWkU7XG4gIH1cbiAgXG4gIGRyYXcoY29udGV4dCkge1xuICAgIGlmKHRoaXMuaGlkZGVuKSByZXR1cm47XG4gICAgaWYodGhpcy5jbGlja2VkKSB7XG4gICAgICB0aGlzLmhvdmVyZWQgPSB0cnVlO1xuICAgIH1cbiAgICBcbiAgICBzdXBlci5kcmF3KGNvbnRleHQpO1xuICB9XG5cbiAgZ2V0IG1heFdpZHRoUGFyZW50KCkge1xuICAgIHJldHVybiB0aGlzLnBhcmVudCA/IHRoaXMucGFyZW50Lm1heFdpZHRoIC0gTWF0aC5hYnMoTWF0aC5taW4oMCwgdGhpcy5wYXJlbnQueCkpIDogMDtcbiAgfVxuXG4gIGdldCBtYXhIZWlnaHRQYXJlbnQoKSB7XG4gICAgcmV0dXJuIHRoaXMucGFyZW50ID8gdGhpcy5wYXJlbnQubWF4SGVpZ2h0IC0gTWF0aC5hYnMoTWF0aC5taW4oMCwgdGhpcy5wYXJlbnQueSkpIDogMDtcbiAgfVxuXG4gIGdldCBpbm5lcldpZHRoUGFyZW50KCkge1xuICAgIHJldHVybiB0aGlzLnBhcmVudCA/IHRoaXMucGFyZW50LmlubmVyV2lkdGggLSBNYXRoLmFicyhNYXRoLm1pbigwLCB0aGlzLnBhcmVudC54KSkgOiAwO1xuICB9XG5cbiAgZ2V0IGlubmVySGVpZ2h0UGFyZW50KCkge1xuICAgIHJldHVybiB0aGlzLnBhcmVudCA/IHRoaXMucGFyZW50LmlubmVySGVpZ2h0IC0gTWF0aC5hYnMoTWF0aC5taW4oMCwgdGhpcy5wYXJlbnQueSkpIDogMDtcbiAgfVxuXG4gIGdldCBtYXhXaWR0aCgpIHtcbiAgICByZXR1cm4gdGhpcy53aWR0aDtcbiAgfVxuXG4gIGdldCBtYXhIZWlnaHQoKSB7XG4gICAgcmV0dXJuIHRoaXMuaGVpZ2h0O1xuICB9XG5cbiAgZ2V0IGNvbnRlbnRSYXRpb1goKSB7XG4gICAgcmV0dXJuIHRoaXMucGFyZW50ID8gdGhpcy5tYXhXaWR0aFBhcmVudCAvIHRoaXMuaW5uZXJXaWR0aFBhcmVudCA6IDA7XG4gIH1cblxuICBnZXQgY29udGVudFJhdGlvWSgpIHtcbiAgICByZXR1cm4gdGhpcy5wYXJlbnQgPyB0aGlzLm1heEhlaWdodFBhcmVudCAvIHRoaXMuaW5uZXJIZWlnaHRQYXJlbnQgOiAwO1xuICB9XG5cbiAgZ2V0IHdpZHRoKCkge1xuICAgIHJldHVybiB0aGlzLm1heFdpZHRoUGFyZW50ICogdGhpcy5jb250ZW50UmF0aW9YO1xuICB9XG5cbiAgZ2V0IGhlaWdodCgpIHtcbiAgICByZXR1cm4gdGhpcy5tYXhIZWlnaHRQYXJlbnQgKiB0aGlzLmNvbnRlbnRSYXRpb1k7XG4gIH1cblxuICBnZXQgd2luZG93U2Nyb2xsU2l6ZVgoKSB7XG4gICAgcmV0dXJuIHRoaXMuaW5uZXJXaWR0aFBhcmVudCAtIHRoaXMubWF4V2lkdGhQYXJlbnQ7XG4gIH1cblxuICBnZXQgd2luZG93U2Nyb2xsU2l6ZVkoKSB7XG4gICAgcmV0dXJuIHRoaXMuaW5uZXJIZWlnaHRQYXJlbnQgLSB0aGlzLm1heEhlaWdodFBhcmVudDtcbiAgfVxuXG4gIGdldCBwZXJjZW50U2Nyb2xsYmFyWCgpIHtcbiAgICByZXR1cm4gdGhpcy5wYXJlbnQgPyB0aGlzLnBhcmVudC5vZmZzZXRTY3JvbGxYIC8gdGhpcy53aW5kb3dTY3JvbGxTaXplWCA6IDA7XG4gIH1cblxuICBnZXQgcGVyY2VudFNjcm9sbGJhclkoKSB7XG4gICAgcmV0dXJuIHRoaXMucGFyZW50ID8gdGhpcy5wYXJlbnQub2Zmc2V0U2Nyb2xsWSAvIHRoaXMud2luZG93U2Nyb2xsU2l6ZVkgOiAwO1xuICB9XG5cbiAgZ2V0IHNjcm9sbEFyZWFTaXplWCgpIHtcbiAgICByZXR1cm4gdGhpcy5tYXhXaWR0aFBhcmVudCAtIHRoaXMud2lkdGg7XG4gIH1cblxuICBnZXQgc2Nyb2xsQXJlYVNpemVZKCkge1xuICAgIHJldHVybiB0aGlzLm1heEhlaWdodFBhcmVudCAtIHRoaXMuaGVpZ2h0O1xuICB9XG5cbiAgZ2V0IHgoKSB7XG4gICAgcmV0dXJuIHRoaXMucGFyZW50ID8gTWF0aC5hYnModGhpcy5wYXJlbnQueCkgKyB0aGlzLnNjcm9sbEFyZWFTaXplWCAqIHRoaXMucGVyY2VudFNjcm9sbGJhclggOiAwO1xuICB9XG5cbiAgZ2V0IHkoKSB7XG4gICAgcmV0dXJuIHRoaXMucGFyZW50ID8gTWF0aC5hYnModGhpcy5wYXJlbnQueSkgKyB0aGlzLnNjcm9sbEFyZWFTaXplWSAqIHRoaXMucGVyY2VudFNjcm9sbGJhclkgOiAwO1xuICB9XG5cbiAgZ2V0IGRlZmF1bHRTdHlsZSgpIHtcbiAgICByZXR1cm4gbmV3IFN0eWxlKHtcbiAgICAgIFwiYmFja2dyb3VuZENvbG9yXCI6IENvbnN0YW50cy5TZXR0aW5nLlNDUk9MTEJBUl9ERUZBVUxUX0JBQ0tHUk9VTkQsXG4gICAgICBcImJhY2tncm91bmRDb2xvckhvdmVyXCI6IENvbnN0YW50cy5TZXR0aW5nLlNDUk9MTEJBUl9ERUZBVUxUX0hPVkVSX0JBQ0tHUk9VTkQsXG4gICAgICBcImJhY2tncm91bmRDb2xvckRvd25cIjogQ29uc3RhbnRzLlNldHRpbmcuU0NST0xMQkFSX0RFRkFVTFRfQ0xJQ0tfQkFDS0dST1VORCxcbiAgICAgIFwiYm9yZGVyU2l6ZVwiOiAwXG4gICAgfSk7XG4gIH1cblxuICBjb21wYXJlVG9Db21wb25lbnQob3RoZXJDb21wb25lbnQpIHtcbiAgICByZXR1cm4gb3RoZXJDb21wb25lbnQuY29tcGFyZVRvU2Nyb2xsYmFyKHRoaXMpO1xuICB9XG5cbiAgY29tcGFyZVRvU2Nyb2xsYmFyKG90aGVyQ29tcG9uZW50KSB7XG4gICAgcmV0dXJuIDA7XG4gIH1cbn0iLCIvKlxuICogQ29weXJpZ2h0IChDKSAyMDIwIEVsaWFzdGlrIChlbGlhc3Rpa3NvZnRzLmNvbSlcbiAqXG4gKiBUaGlzIGZpbGUgaXMgcGFydCBvZiBcIkpTR2FtZVRvb2xzXCIuXG4gKlxuICogXCJKU0dhbWVUb29sc1wiIGlzIGZyZWUgc29mdHdhcmU6IHlvdSBjYW4gcmVkaXN0cmlidXRlIGl0IGFuZC9vciBtb2RpZnlcbiAqIGl0IHVuZGVyIHRoZSB0ZXJtcyBvZiB0aGUgR05VIEdlbmVyYWwgUHVibGljIExpY2Vuc2UgYXMgcHVibGlzaGVkIGJ5XG4gKiB0aGUgRnJlZSBTb2Z0d2FyZSBGb3VuZGF0aW9uLCBlaXRoZXIgdmVyc2lvbiAzIG9mIHRoZSBMaWNlbnNlLCBvclxuICogKGF0IHlvdXIgb3B0aW9uKSBhbnkgbGF0ZXIgdmVyc2lvbi5cbiAqXG4gKiBcIkpTR2FtZVRvb2xzXCIgaXMgZGlzdHJpYnV0ZWQgaW4gdGhlIGhvcGUgdGhhdCBpdCB3aWxsIGJlIHVzZWZ1bCxcbiAqIGJ1dCBXSVRIT1VUIEFOWSBXQVJSQU5UWTsgd2l0aG91dCBldmVuIHRoZSBpbXBsaWVkIHdhcnJhbnR5IG9mXG4gKiBNRVJDSEFOVEFCSUxJVFkgb3IgRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UuICBTZWUgdGhlXG4gKiBHTlUgR2VuZXJhbCBQdWJsaWMgTGljZW5zZSBmb3IgbW9yZSBkZXRhaWxzLlxuICpcbiAqIFlvdSBzaG91bGQgaGF2ZSByZWNlaXZlZCBhIGNvcHkgb2YgdGhlIEdOVSBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlXG4gKiBhbG9uZyB3aXRoIFwiSlNHYW1lVG9vbHNcIi4gIElmIG5vdCwgc2VlIDxodHRwOi8vd3d3LmdudS5vcmcvbGljZW5zZXMvPi5cbiAqL1xuaW1wb3J0IFNjcm9sbGJhciBmcm9tIFwiLi9TY3JvbGxiYXJcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU2Nyb2xsYmFySG9yaXpvbnRhbCBleHRlbmRzIFNjcm9sbGJhciB7XG4gIHNlbGVjdGFibGUgPSB0cnVlO1xuXG4gIGNvbnN0cnVjdG9yKHNpemUsIHN0eWxlLCBwYXJlbnQpIHtcbiAgICBzdXBlcihzaXplLCBzdHlsZSwgcGFyZW50KTtcblxuICAgIHRoaXMuYWRkTW92ZUFjdGlvbigoZGVsdGFYKSA9PiB7XG4gICAgICBpZih0aGlzLnBhcmVudCkge1xuICAgICAgICBjb25zdCBwZXJjZW50U2Nyb2xsYmFyTmV4dCA9IE1hdGguYWJzKCh0aGlzLnBhcmVudC54IC0gTWF0aC5tYXgodGhpcy5wYXJlbnQueCwgdGhpcy54ICsgLWRlbHRhWCkpIC8gKHRoaXMucGFyZW50LndpZHRoIC0gdGhpcy53aWR0aCkpO1xuICAgICAgICBjb25zdCBuZXdEZWx0YVggPSAodGhpcy53aW5kb3dTY3JvbGxTaXplWCAqIHBlcmNlbnRTY3JvbGxiYXJOZXh0KSAtIHRoaXMucGFyZW50Lm9mZnNldFNjcm9sbFg7XG4gICAgICAgIHRoaXMucGFyZW50Lm9mZnNldFNjcm9sbFggKz0gbmV3RGVsdGFYO1xuXG4gICAgICAgIGlmKHRoaXMucGFyZW50LnJlYWN0b3IpIHtcbiAgICAgICAgICB0aGlzLnBhcmVudC5yZWFjdG9yLmRpc3BhdGNoRXZlbnQoXCJvblNjcm9sbFwiLCBuZXdEZWx0YVgsIDApO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSk7XG4gIH1cbiAgXG4gIGRyYXcoY29udGV4dCkge1xuICAgIGlmKHRoaXMuc2Nyb2xsQXJlYVNpemVYID4gMCkge1xuICAgICAgc3VwZXIuZHJhdyhjb250ZXh0KTtcbiAgICB9XG4gIH1cblxuICBnZXQgaGVpZ2h0KCkge1xuICAgIHJldHVybiB0aGlzLnNpemU7XG4gIH1cblxuICBnZXQgeSgpIHtcbiAgICByZXR1cm4gdGhpcy5wYXJlbnQgPyB0aGlzLnBhcmVudC55ICsgdGhpcy5wYXJlbnQuaGVpZ2h0IC0gdGhpcy5zaXplIDogbnVsbDtcbiAgfVxufSIsIi8qXG4gKiBDb3B5cmlnaHQgKEMpIDIwMjAgRWxpYXN0aWsgKGVsaWFzdGlrc29mdHMuY29tKVxuICpcbiAqIFRoaXMgZmlsZSBpcyBwYXJ0IG9mIFwiSlNHYW1lVG9vbHNcIi5cbiAqXG4gKiBcIkpTR2FtZVRvb2xzXCIgaXMgZnJlZSBzb2Z0d2FyZTogeW91IGNhbiByZWRpc3RyaWJ1dGUgaXQgYW5kL29yIG1vZGlmeVxuICogaXQgdW5kZXIgdGhlIHRlcm1zIG9mIHRoZSBHTlUgR2VuZXJhbCBQdWJsaWMgTGljZW5zZSBhcyBwdWJsaXNoZWQgYnlcbiAqIHRoZSBGcmVlIFNvZnR3YXJlIEZvdW5kYXRpb24sIGVpdGhlciB2ZXJzaW9uIDMgb2YgdGhlIExpY2Vuc2UsIG9yXG4gKiAoYXQgeW91ciBvcHRpb24pIGFueSBsYXRlciB2ZXJzaW9uLlxuICpcbiAqIFwiSlNHYW1lVG9vbHNcIiBpcyBkaXN0cmlidXRlZCBpbiB0aGUgaG9wZSB0aGF0IGl0IHdpbGwgYmUgdXNlZnVsLFxuICogYnV0IFdJVEhPVVQgQU5ZIFdBUlJBTlRZOyB3aXRob3V0IGV2ZW4gdGhlIGltcGxpZWQgd2FycmFudHkgb2ZcbiAqIE1FUkNIQU5UQUJJTElUWSBvciBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRS4gIFNlZSB0aGVcbiAqIEdOVSBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlIGZvciBtb3JlIGRldGFpbHMuXG4gKlxuICogWW91IHNob3VsZCBoYXZlIHJlY2VpdmVkIGEgY29weSBvZiB0aGUgR05VIEdlbmVyYWwgUHVibGljIExpY2Vuc2VcbiAqIGFsb25nIHdpdGggXCJKU0dhbWVUb29sc1wiLiAgSWYgbm90LCBzZWUgPGh0dHA6Ly93d3cuZ251Lm9yZy9saWNlbnNlcy8+LlxuICovXG5pbXBvcnQgU2Nyb2xsYmFyIGZyb20gXCIuL1Njcm9sbGJhclwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTY3JvbGxiYXJWZXJ0aWNhbCBleHRlbmRzIFNjcm9sbGJhciB7XG4gIHNlbGVjdGFibGUgPSB0cnVlO1xuXG4gIGNvbnN0cnVjdG9yKHNpemUsIHN0eWxlLCBwYXJlbnQpIHtcbiAgICBzdXBlcihzaXplLCBzdHlsZSwgcGFyZW50KTtcbiAgICBcbiAgICB0aGlzLmFkZE1vdmVBY3Rpb24oKGRlbHRhWCwgZGVsdGFZKSA9PiB7XG4gICAgICBpZih0aGlzLnBhcmVudCkge1xuICAgICAgICBjb25zdCBwZXJjZW50U2Nyb2xsYmFyTmV4dCA9IE1hdGguYWJzKCh0aGlzLnBhcmVudC55IC0gTWF0aC5tYXgodGhpcy5wYXJlbnQueSwgdGhpcy55ICsgLWRlbHRhWSkpIC8gKHRoaXMucGFyZW50LmhlaWdodCAtIHRoaXMuaGVpZ2h0KSk7XG4gICAgICAgIGNvbnN0IG5ld0RlbHRhWSA9ICh0aGlzLndpbmRvd1Njcm9sbFNpemVZICogcGVyY2VudFNjcm9sbGJhck5leHQpIC0gdGhpcy5wYXJlbnQub2Zmc2V0U2Nyb2xsWTtcbiAgICAgICAgdGhpcy5wYXJlbnQub2Zmc2V0U2Nyb2xsWSArPSBuZXdEZWx0YVk7XG5cbiAgICAgICAgaWYodGhpcy5wYXJlbnQucmVhY3Rvcikge1xuICAgICAgICAgIHRoaXMucGFyZW50LnJlYWN0b3IuZGlzcGF0Y2hFdmVudChcIm9uU2Nyb2xsXCIsIDAsIG5ld0RlbHRhWSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuICBcbiAgZHJhdyhjb250ZXh0KSB7XG4gICAgaWYodGhpcy5zY3JvbGxBcmVhU2l6ZVkgPiAwKSB7XG4gICAgICBzdXBlci5kcmF3KGNvbnRleHQpO1xuICAgIH1cbiAgfVxuXG4gIGdldCB3aWR0aCgpIHtcbiAgICByZXR1cm4gdGhpcy5zaXplO1xuICB9XG5cbiAgZ2V0IHgoKSB7XG4gICAgcmV0dXJuIHRoaXMucGFyZW50ID8gdGhpcy5wYXJlbnQueCArIHRoaXMucGFyZW50LndpZHRoIC0gdGhpcy5zaXplIDogMDtcbiAgfVxufSIsIi8qXG4gKiBDb3B5cmlnaHQgKEMpIDIwMjAgRWxpYXN0aWsgKGVsaWFzdGlrc29mdHMuY29tKVxuICpcbiAqIFRoaXMgZmlsZSBpcyBwYXJ0IG9mIFwiSlNHYW1lVG9vbHNcIi5cbiAqXG4gKiBcIkpTR2FtZVRvb2xzXCIgaXMgZnJlZSBzb2Z0d2FyZTogeW91IGNhbiByZWRpc3RyaWJ1dGUgaXQgYW5kL29yIG1vZGlmeVxuICogaXQgdW5kZXIgdGhlIHRlcm1zIG9mIHRoZSBHTlUgR2VuZXJhbCBQdWJsaWMgTGljZW5zZSBhcyBwdWJsaXNoZWQgYnlcbiAqIHRoZSBGcmVlIFNvZnR3YXJlIEZvdW5kYXRpb24sIGVpdGhlciB2ZXJzaW9uIDMgb2YgdGhlIExpY2Vuc2UsIG9yXG4gKiAoYXQgeW91ciBvcHRpb24pIGFueSBsYXRlciB2ZXJzaW9uLlxuICpcbiAqIFwiSlNHYW1lVG9vbHNcIiBpcyBkaXN0cmlidXRlZCBpbiB0aGUgaG9wZSB0aGF0IGl0IHdpbGwgYmUgdXNlZnVsLFxuICogYnV0IFdJVEhPVVQgQU5ZIFdBUlJBTlRZOyB3aXRob3V0IGV2ZW4gdGhlIGltcGxpZWQgd2FycmFudHkgb2ZcbiAqIE1FUkNIQU5UQUJJTElUWSBvciBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRS4gIFNlZSB0aGVcbiAqIEdOVSBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlIGZvciBtb3JlIGRldGFpbHMuXG4gKlxuICogWW91IHNob3VsZCBoYXZlIHJlY2VpdmVkIGEgY29weSBvZiB0aGUgR05VIEdlbmVyYWwgUHVibGljIExpY2Vuc2VcbiAqIGFsb25nIHdpdGggXCJKU0dhbWVUb29sc1wiLiAgSWYgbm90LCBzZWUgPGh0dHA6Ly93d3cuZ251Lm9yZy9saWNlbnNlcy8+LlxuICovXG5pbXBvcnQgTGFiZWwgZnJvbSBcIi4vTGFiZWxcIjtcbmltcG9ydCBCdXR0b24gZnJvbSBcIi4vQnV0dG9uXCI7XG5pbXBvcnQgVHJpYW5nbGUgZnJvbSBcIi4vVHJpYW5nbGVcIjtcbmltcG9ydCBTdHlsZSBmcm9tIFwiLi9TdHlsZVwiO1xuaW1wb3J0IENvbnN0YW50cyBmcm9tIFwiLi9Db25zdGFudHNcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU2VsZWN0IGV4dGVuZHMgQnV0dG9uIHtcbiAgI193aWR0aCA9IDA7XG5cbiAgY29uc3RydWN0b3IoeCwgeSwgbWF4V2lkdGgsIG1heEhlaWdodCwgc3R5bGUsIG9wdGlvbkNvbnRhaW5lciwgZGVmYXVsdE9wdGlvbikge1xuICAgIHN1cGVyKHgsIHksIG1heFdpZHRoLCBtYXhIZWlnaHQsIHN0eWxlKTtcblxuICAgIHRoaXMub3B0aW9uQ29udGFpbmVyID0gb3B0aW9uQ29udGFpbmVyO1xuICAgIGlmKGRlZmF1bHRPcHRpb24pIHRoaXMuc2VsZWN0ZWRPcHRpb24gPSBkZWZhdWx0T3B0aW9uO1xuXG4gICAgdGhpcy5sYWJlbCA9IG5ldyBMYWJlbChcIlwiLCB4LCB5LCBzdHlsZSk7XG4gICAgdGhpcy5sYWJlbC5zdHlsZS5zZXRBbGwoeyBcImFsaWduZW1lbnRcIjogQ29uc3RhbnRzLkFsaWduZW1lbnQuTEVGVCwgXCJ2ZXJ0aWNhbEFsaWduZW1lbnRcIjogQ29uc3RhbnRzLlZlcnRpY2FsQWxpZ25lbWVudC5DRU5URVIgfSk7XG4gICAgdGhpcy50cmlhbmdsZSA9IG5ldyBUcmlhbmdsZShudWxsLCBudWxsLCA4LCA4LCBzdHlsZSk7XG4gICAgdGhpcy50cmlhbmdsZS5zdHlsZS5zZXRBbGwoeyBcImFsaWduZW1lbnRcIjogQ29uc3RhbnRzLkFsaWduZW1lbnQuUklHSFQsIFwidmVydGljYWxBbGlnbmVtZW50XCI6IENvbnN0YW50cy5WZXJ0aWNhbEFsaWduZW1lbnQuQ0VOVEVSIH0pO1xuXG4gICAgdGhpcy5hZGRBbGwodGhpcy5sYWJlbCwgdGhpcy50cmlhbmdsZSk7XG5cbiAgICB0aGlzLmFkZENsaWNrQWN0aW9uKCgpID0+IHtcbiAgICAgIGlmKHRoaXMub3B0aW9uQ29udGFpbmVyKSB7XG4gICAgICAgIHRoaXMub3B0aW9uQ29udGFpbmVyLmhpZGRlbiA9IGZhbHNlO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgaWYoIUNvbnN0YW50cy5TZXR0aW5nLkRJU0FCTEVfRVhQRVJJTUVOVEFMX09QVElNSVpBVElPTlMpIHtcbiAgICAgIHRoaXMudXBkYXRlV2lkdGgoKTtcbiAgICAgIHRoaXMuYWRkQ2hhbmdlQWN0aW9uKCgpID0+IHRoaXMudXBkYXRlV2lkdGgoKSk7XG4gICAgfVxuICB9XG5cbiAgZHJhdyhjb250ZXh0KSB7XG4gICAgaWYodGhpcy5oaWRkZW4pIHJldHVybjtcbiAgICBpZih0aGlzLnNlbGVjdGVkT3B0aW9uICYmIHRoaXMuc2VsZWN0ZWRPcHRpb24ubGFiZWwpIHtcbiAgICAgIHRoaXMubGFiZWwudGV4dCA9IHRoaXMuc2VsZWN0ZWRPcHRpb24ubGFiZWwudGV4dDtcbiAgICB9XG5cbiAgICBzdXBlci5kcmF3KGNvbnRleHQpO1xuXG4gICAgaWYodGhpcy5vcHRpb25Db250YWluZXIpIHtcbiAgICAgIHRoaXMub3B0aW9uQ29udGFpbmVyLnNlbGVjdCA9IHRoaXM7XG4gICAgfVxuICB9XG5cbiAgZ2V0IHNlbGVjdGVkT3B0aW9uKCkge1xuICAgIHJldHVybiB0aGlzLm9wdGlvbkNvbnRhaW5lciA/IHRoaXMub3B0aW9uQ29udGFpbmVyLmNvbXBvbmVudHNbdGhpcy5vcHRpb25Db250YWluZXIuc2VsZWN0ZWRPcHRpb25dIDogbnVsbDtcbiAgfVxuXG4gIHNldCBzZWxlY3RlZE9wdGlvbihpZCkge1xuICAgIGlmKGlkICE9IHRoaXMub3B0aW9uQ29udGFpbmVyLnNlbGVjdGVkT3B0aW9uKSB7XG4gICAgICB0aGlzLm9wdGlvbkNvbnRhaW5lci5zZWxlY3RlZE9wdGlvbiA9IGlkO1xuICAgICAgdGhpcy5yZWFjdG9yLmRpc3BhdGNoRXZlbnQoXCJvbkNoYW5nZVwiLCB0aGlzKTtcbiAgICB9XG4gIH1cblxuICBnZXQgdGV4dCgpIHtcbiAgICByZXR1cm4gdGhpcy5zZWxlY3RlZE9wdGlvbiAmJiB0aGlzLnNlbGVjdGVkT3B0aW9uLmxhYmVsID8gdGhpcy5zZWxlY3RlZE9wdGlvbi5sYWJlbC50ZXh0IDogbnVsbDtcbiAgfVxuXG4gIHVwZGF0ZVdpZHRoKCkge1xuICAgIGxldCBtYXhXaWR0aCA9IHRoaXMubGFiZWwud2lkdGg7XG5cbiAgICBpZih0aGlzLm9wdGlvbkNvbnRhaW5lcikge1xuICAgICAgdGhpcy5vcHRpb25Db250YWluZXIuY29tcG9uZW50cy5mb3JFYWNoKGNvbXBvbmVudCA9PiB7XG4gICAgICAgIGNvbnN0IGxhYmVsID0gY29tcG9uZW50LmxhYmVsO1xuXG4gICAgICAgIGlmKGxhYmVsKSB7XG4gICAgICAgICAgaWYobGFiZWwudXBkYXRlU2l6ZXMpIGxhYmVsLnVwZGF0ZVNpemVzKCk7XG4gICAgICAgICAgaWYobGFiZWwud2lkdGggPiBtYXhXaWR0aCkgbWF4V2lkdGggPSBsYWJlbC53aWR0aDtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgdGhpcy4jX3dpZHRoID0gbWF4V2lkdGggKyB0aGlzLnN0eWxlLnBhZGRpbmcgKyB0aGlzLnRyaWFuZ2xlLndpZHRoICsgMTU7XG4gIH1cblxuICBnZXQgd2lkdGgoKSB7XG4gICAgaWYoQ29uc3RhbnRzLlNldHRpbmcuRElTQUJMRV9FWFBFUklNRU5UQUxfT1BUSU1JWkFUSU9OUykgdGhpcy51cGRhdGVXaWR0aCgpO1xuICAgIHJldHVybiB0aGlzLiNfd2lkdGg7XG4gIH1cblxuICBnZXQgYWxsQ29tcG9uZW50cygpIHtcbiAgICBjb25zdCBjb21wb25lbnRzID0gW107XG4gICAgY29tcG9uZW50cy5wdXNoKC4uLnN1cGVyLmFsbENvbXBvbmVudHMpO1xuICAgIHJldHVybiBjb21wb25lbnRzO1xuICB9XG5cbiAgZ2V0IGRlZmF1bHRTdHlsZSgpIHtcbiAgICByZXR1cm4gbmV3IFN0eWxlKHtcbiAgICAgIFwiYmFja2dyb3VuZENvbG9yXCI6IENvbnN0YW50cy5TZXR0aW5nLlNFTEVDVF9ERUZBVUxUX0JBQ0tHUk9VTkQsXG4gICAgICBcImJhY2tncm91bmRDb2xvckhvdmVyXCI6IENvbnN0YW50cy5TZXR0aW5nLlNFTEVDVF9ERUZBVUxUX0hPVkVSX0JBQ0tHUk9VTkQsXG4gICAgICBcImJhY2tncm91bmRDb2xvckRvd25cIjogQ29uc3RhbnRzLlNldHRpbmcuU0VMRUNUX0RFRkFVTFRfQ0xJQ0tfQkFDS0dST1VORCxcbiAgICAgIFwicGFkZGluZ1wiOiBDb25zdGFudHMuU2V0dGluZy5ERUZBVUxUX1BBRERJTkdcbiAgICB9KTtcbiAgfVxuXG4gIGdldCBzZWxlY3RlZCgpIHtcbiAgICByZXR1cm4gc3VwZXIuc2VsZWN0ZWQgfHwgdGhpcy5vcHRpb25Db250YWluZXIuc2VsZWN0ZWQ7XG4gIH1cblxuICBzZXQgc2VsZWN0ZWQoc2VsZWN0ZWQpIHtcbiAgICBzdXBlci5zZWxlY3RlZCA9IHNlbGVjdGVkO1xuICB9XG59IiwiLypcbiAqIENvcHlyaWdodCAoQykgMjAyMCBFbGlhc3RpayAoZWxpYXN0aWtzb2Z0cy5jb20pXG4gKlxuICogVGhpcyBmaWxlIGlzIHBhcnQgb2YgXCJKU0dhbWVUb29sc1wiLlxuICpcbiAqIFwiSlNHYW1lVG9vbHNcIiBpcyBmcmVlIHNvZnR3YXJlOiB5b3UgY2FuIHJlZGlzdHJpYnV0ZSBpdCBhbmQvb3IgbW9kaWZ5XG4gKiBpdCB1bmRlciB0aGUgdGVybXMgb2YgdGhlIEdOVSBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlIGFzIHB1Ymxpc2hlZCBieVxuICogdGhlIEZyZWUgU29mdHdhcmUgRm91bmRhdGlvbiwgZWl0aGVyIHZlcnNpb24gMyBvZiB0aGUgTGljZW5zZSwgb3JcbiAqIChhdCB5b3VyIG9wdGlvbikgYW55IGxhdGVyIHZlcnNpb24uXG4gKlxuICogXCJKU0dhbWVUb29sc1wiIGlzIGRpc3RyaWJ1dGVkIGluIHRoZSBob3BlIHRoYXQgaXQgd2lsbCBiZSB1c2VmdWwsXG4gKiBidXQgV0lUSE9VVCBBTlkgV0FSUkFOVFk7IHdpdGhvdXQgZXZlbiB0aGUgaW1wbGllZCB3YXJyYW50eSBvZlxuICogTUVSQ0hBTlRBQklMSVRZIG9yIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFLiAgU2VlIHRoZVxuICogR05VIEdlbmVyYWwgUHVibGljIExpY2Vuc2UgZm9yIG1vcmUgZGV0YWlscy5cbiAqXG4gKiBZb3Ugc2hvdWxkIGhhdmUgcmVjZWl2ZWQgYSBjb3B5IG9mIHRoZSBHTlUgR2VuZXJhbCBQdWJsaWMgTGljZW5zZVxuICogYWxvbmcgd2l0aCBcIkpTR2FtZVRvb2xzXCIuICBJZiBub3QsIHNlZSA8aHR0cDovL3d3dy5nbnUub3JnL2xpY2Vuc2VzLz4uXG4gKi9cbmltcG9ydCBCdXR0b24gZnJvbSBcIi4vQnV0dG9uXCI7XG5pbXBvcnQgQ29uc3RhbnRzIGZyb20gXCIuL0NvbnN0YW50c1wiO1xuaW1wb3J0IExhYmVsIGZyb20gXCIuL0xhYmVsXCI7XG5pbXBvcnQgU3R5bGUgZnJvbSBcIi4vU3R5bGVcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU2VsZWN0T3B0aW9uIGV4dGVuZHMgQnV0dG9uIHtcbiAgY29uc3RydWN0b3IobGFiZWwsIHN0eWxlKSB7XG4gICAgY29uc3QgZGVmYXVsdExhYmVsID0gbmV3IExhYmVsKFwiT3B0aW9uXCIpO1xuICAgIHN1cGVyKG51bGwsIG51bGwsIG51bGwsIG51bGwsIHN0eWxlLCBsYWJlbCB8fCBkZWZhdWx0TGFiZWwpO1xuICAgIHRoaXMubGFiZWwgPSBsYWJlbCB8fCBkZWZhdWx0TGFiZWw7XG4gIH1cblxuICBhZGQoY29tcG9uZW50KSB7XG4gICAgaWYoY29tcG9uZW50IGluc3RhbmNlb2YgTGFiZWwpIHtcbiAgICAgIHRoaXMuY2xlYXIoKTtcbiAgICAgIHN1cGVyLmFkZChjb21wb25lbnQpO1xuICAgIH1cbiAgfVxuXG4gIGdldCB3aWR0aCgpIHtcbiAgICByZXR1cm4gdGhpcy5wYXJlbnQgJiYgdGhpcy5wYXJlbnQud2lkdGg7XG4gIH1cblxuICBnZXQgZGVmYXVsdFN0eWxlKCkge1xuICAgIHJldHVybiBuZXcgU3R5bGUoe1xuICAgICAgXCJiYWNrZ3JvdW5kQ29sb3JcIjogQ29uc3RhbnRzLlNldHRpbmcuU0VMRUNUX0RFRkFVTFRfQkFDS0dST1VORCxcbiAgICAgIFwiYmFja2dyb3VuZENvbG9ySG92ZXJcIjogQ29uc3RhbnRzLlNldHRpbmcuU0VMRUNUX0RFRkFVTFRfSE9WRVJfQkFDS0dST1VORCxcbiAgICAgIFwiYmFja2dyb3VuZENvbG9yRG93blwiOiBDb25zdGFudHMuU2V0dGluZy5TRUxFQ1RfREVGQVVMVF9DTElDS19CQUNLR1JPVU5ELFxuICAgICAgXCJwYWRkaW5nXCI6IENvbnN0YW50cy5TZXR0aW5nLkRFRkFVTFRfUEFERElOR1xuICAgIH0pO1xuICB9XG59IiwiLypcbiAqIENvcHlyaWdodCAoQykgMjAyMCBFbGlhc3RpayAoZWxpYXN0aWtzb2Z0cy5jb20pXG4gKlxuICogVGhpcyBmaWxlIGlzIHBhcnQgb2YgXCJKU0dhbWVUb29sc1wiLlxuICpcbiAqIFwiSlNHYW1lVG9vbHNcIiBpcyBmcmVlIHNvZnR3YXJlOiB5b3UgY2FuIHJlZGlzdHJpYnV0ZSBpdCBhbmQvb3IgbW9kaWZ5XG4gKiBpdCB1bmRlciB0aGUgdGVybXMgb2YgdGhlIEdOVSBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlIGFzIHB1Ymxpc2hlZCBieVxuICogdGhlIEZyZWUgU29mdHdhcmUgRm91bmRhdGlvbiwgZWl0aGVyIHZlcnNpb24gMyBvZiB0aGUgTGljZW5zZSwgb3JcbiAqIChhdCB5b3VyIG9wdGlvbikgYW55IGxhdGVyIHZlcnNpb24uXG4gKlxuICogXCJKU0dhbWVUb29sc1wiIGlzIGRpc3RyaWJ1dGVkIGluIHRoZSBob3BlIHRoYXQgaXQgd2lsbCBiZSB1c2VmdWwsXG4gKiBidXQgV0lUSE9VVCBBTlkgV0FSUkFOVFk7IHdpdGhvdXQgZXZlbiB0aGUgaW1wbGllZCB3YXJyYW50eSBvZlxuICogTUVSQ0hBTlRBQklMSVRZIG9yIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFLiAgU2VlIHRoZVxuICogR05VIEdlbmVyYWwgUHVibGljIExpY2Vuc2UgZm9yIG1vcmUgZGV0YWlscy5cbiAqXG4gKiBZb3Ugc2hvdWxkIGhhdmUgcmVjZWl2ZWQgYSBjb3B5IG9mIHRoZSBHTlUgR2VuZXJhbCBQdWJsaWMgTGljZW5zZVxuICogYWxvbmcgd2l0aCBcIkpTR2FtZVRvb2xzXCIuICBJZiBub3QsIHNlZSA8aHR0cDovL3d3dy5nbnUub3JnL2xpY2Vuc2VzLz4uXG4gKi9cbmltcG9ydCBDb2wgZnJvbSBcIi4vQ29sXCI7XG5pbXBvcnQgU3R5bGUgZnJvbSBcIi4vU3R5bGVcIjtcbmltcG9ydCBDb25zdGFudHMgZnJvbSBcIi4vQ29uc3RhbnRzXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFNlbGVjdERyb3Bkb3duIGV4dGVuZHMgQ29sIHtcbiAgI19zZWxlY3RlZE9wdGlvbjtcbiAgc2VsZWN0YWJsZSA9IGZhbHNlO1xuXG4gIGNvbnN0cnVjdG9yKG1heEhlaWdodERyb3Bkb3duLCBzdHlsZSwgLi4ub3B0aW9ucykge1xuICAgIHN1cGVyKG51bGwsIG51bGwsIG51bGwsIG1heEhlaWdodERyb3Bkb3duLCBzdHlsZSwgLi4ub3B0aW9ucyk7XG4gICAgdGhpcy4jX3NlbGVjdGVkT3B0aW9uID0gMDtcbiAgICB0aGlzLnNlbGVjdCA9IG51bGw7XG4gIH1cblxuICBkcmF3KGNvbnRleHQpIHtcbiAgICBzdXBlci5kcmF3KGNvbnRleHQpO1xuICB9XG5cbiAgZ2V0IHgoKSB7XG4gICAgcmV0dXJuIHRoaXMuc2VsZWN0ICYmIHRoaXMuc2VsZWN0Lng7XG4gIH1cblxuICBnZXQgeSgpIHtcbiAgICBjb25zdCBzZWxlY3RIZWlnaHQgPSAodGhpcy5zZWxlY3QgJiYgdGhpcy5zZWxlY3QuaGVpZ2h0KTtcbiAgICBjb25zdCBoZWlnaHQgPSB0aGlzLmhlaWdodDtcbiAgICBjb25zdCB5ID0gdGhpcy5zZWxlY3QgJiYgdGhpcy5zZWxlY3QueTtcblxuICAgIGlmKHRoaXMuY2FudmFzICYmIHRoaXMuY2FudmFzLnNjZW5lICYmIHkgKyBzZWxlY3RIZWlnaHQgKyBoZWlnaHQgPj0gdGhpcy5jYW52YXMuc2NlbmUuaGVpZ2h0KSB7XG4gICAgICByZXR1cm4geSAtIGhlaWdodDtcbiAgICB9XG5cbiAgICByZXR1cm4geSArIHNlbGVjdEhlaWdodDtcbiAgfVxuXG4gIGdldCB3aWR0aCgpIHtcbiAgICByZXR1cm4gdGhpcy5zZWxlY3QgJiYgdGhpcy5zZWxlY3Qud2lkdGg7XG4gIH1cblxuICBnZXQgc2VsZWN0ZWRPcHRpb24oKSB7XG4gICAgcmV0dXJuIE1hdGgubWF4KDAsIE1hdGgubWluKHRoaXMuY29tcG9uZW50cy5sZW5ndGggLSAxLCB0aGlzLiNfc2VsZWN0ZWRPcHRpb24pKTtcbiAgfVxuXG4gIHNldCBzZWxlY3RlZE9wdGlvbihpZCkge1xuICAgIGlmKGlkICE9IHRoaXMuI19zZWxlY3RlZE9wdGlvbikge1xuICAgICAgdGhpcy4jX3NlbGVjdGVkT3B0aW9uID0gaWQ7XG4gICAgICB0aGlzLnJlYWN0b3IuZGlzcGF0Y2hFdmVudChcIm9uQ2hhbmdlXCIsIHRoaXMpO1xuICAgIH1cbiAgfVxuXG4gIGFkZChjb21wb25lbnQpIHtcbiAgICBzdXBlci5hZGQoY29tcG9uZW50KTtcblxuICAgIGNvbXBvbmVudC5hZGRDbGlja0FjdGlvbigoKSA9PiB7XG4gICAgICB0aGlzLiNfc2VsZWN0ZWRPcHRpb24gPSB0aGlzLmdldENvbXBvbmVudElkKGNvbXBvbmVudCk7XG4gICAgICB0aGlzLnNlbGVjdGVkID0gZmFsc2U7XG4gICAgICB0aGlzLmhpZGRlbiA9IHRydWU7XG4gICAgICBpZih0aGlzLnNlbGVjdCkgdGhpcy5zZWxlY3Quc2VsZWN0ZWQgPSBmYWxzZTtcbiAgICB9KTtcbiAgfVxuXG4gIGdldCBkZWZhdWx0U3R5bGUoKSB7XG4gICAgcmV0dXJuIG5ldyBTdHlsZSh7XG4gICAgICBcInBhZGRpbmdcIjogMCxcbiAgICAgIFwic3BhY2VCZXR3ZWVuQ29tcG9uZW50c1wiOiAwLFxuICAgICAgXCJiYWNrZ3JvdW5kQ29sb3JcIjogQ29uc3RhbnRzLlNldHRpbmcuU0VMRUNUX0RFRkFVTFRfQkFDS0dST1VORCxcbiAgICAgIFwiYmFja2dyb3VuZENvbG9ySG92ZXJcIjogbnVsbCxcbiAgICAgIFwiYmFja2dyb3VuZENvbG9yRG93blwiOiBudWxsLFxuICAgICAgXCJzY3JvbGxYRGlzYWJsZWRcIjogZmFsc2UsXG4gICAgICBcInNjcm9sbFlEaXNhYmxlZFwiOiBmYWxzZVxuICAgIH0pO1xuICB9XG5cbiAgZ2V0IGhpZGRlbigpIHtcbiAgICByZXR1cm4gc3VwZXIuaGlkZGVuIHx8ICh0aGlzLnNlbGVjdCAmJiAhdGhpcy5zZWxlY3Quc2VsZWN0ZWQpIHx8ICF0aGlzLnNlbGVjdDtcbiAgfVxuXG4gIHNldCBoaWRkZW4oaGlkZGVuKSB7XG4gICAgcmV0dXJuIHN1cGVyLmhpZGRlbiA9IGhpZGRlbjtcbiAgfVxufSIsIi8qXG4gKiBDb3B5cmlnaHQgKEMpIDIwMjAgRWxpYXN0aWsgKGVsaWFzdGlrc29mdHMuY29tKVxuICpcbiAqIFRoaXMgZmlsZSBpcyBwYXJ0IG9mIFwiSlNHYW1lVG9vbHNcIi5cbiAqXG4gKiBcIkpTR2FtZVRvb2xzXCIgaXMgZnJlZSBzb2Z0d2FyZTogeW91IGNhbiByZWRpc3RyaWJ1dGUgaXQgYW5kL29yIG1vZGlmeVxuICogaXQgdW5kZXIgdGhlIHRlcm1zIG9mIHRoZSBHTlUgR2VuZXJhbCBQdWJsaWMgTGljZW5zZSBhcyBwdWJsaXNoZWQgYnlcbiAqIHRoZSBGcmVlIFNvZnR3YXJlIEZvdW5kYXRpb24sIGVpdGhlciB2ZXJzaW9uIDMgb2YgdGhlIExpY2Vuc2UsIG9yXG4gKiAoYXQgeW91ciBvcHRpb24pIGFueSBsYXRlciB2ZXJzaW9uLlxuICpcbiAqIFwiSlNHYW1lVG9vbHNcIiBpcyBkaXN0cmlidXRlZCBpbiB0aGUgaG9wZSB0aGF0IGl0IHdpbGwgYmUgdXNlZnVsLFxuICogYnV0IFdJVEhPVVQgQU5ZIFdBUlJBTlRZOyB3aXRob3V0IGV2ZW4gdGhlIGltcGxpZWQgd2FycmFudHkgb2ZcbiAqIE1FUkNIQU5UQUJJTElUWSBvciBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRS4gIFNlZSB0aGVcbiAqIEdOVSBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlIGZvciBtb3JlIGRldGFpbHMuXG4gKlxuICogWW91IHNob3VsZCBoYXZlIHJlY2VpdmVkIGEgY29weSBvZiB0aGUgR05VIEdlbmVyYWwgUHVibGljIExpY2Vuc2VcbiAqIGFsb25nIHdpdGggXCJKU0dhbWVUb29sc1wiLiAgSWYgbm90LCBzZWUgPGh0dHA6Ly93d3cuZ251Lm9yZy9saWNlbnNlcy8+LlxuICovXG5pbXBvcnQgQ29uc3RhbnRzIGZyb20gXCIuL0NvbnN0YW50c1wiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTdHlsZSB7XG4gICNzdHlsZXMgPSB7fTtcbiAgY29tcG9uZW50O1xuXG4gIGNvbnN0cnVjdG9yKHN0eWxlcykge1xuICAgIHRoaXMuc2V0QWxsKHN0eWxlcyk7XG4gIH1cblxuICBnZXQgZm9udENvbG9yKCkge1xuICAgIHJldHVybiB0aGlzLiNzdHlsZXMuZm9udENvbG9yO1xuICB9XG5cbiAgZ2V0IGZvbnRDb2xvckhvdmVyKCkge1xuICAgIHJldHVybiB0aGlzLiNzdHlsZXMuZm9udENvbG9ySG92ZXI7XG4gIH1cblxuICBnZXQgZm9udENvbG9yRG93bigpIHtcbiAgICByZXR1cm4gdGhpcy4jc3R5bGVzLmZvbnRDb2xvckRvd247XG4gIH1cblxuICBnZXQgZm9udEZhbWlseSgpIHtcbiAgICByZXR1cm4gdGhpcy4jc3R5bGVzLmZvbnRGYW1pbHkgIT0gbnVsbCA/IHRoaXMuI3N0eWxlcy5mb250RmFtaWx5IDogQ29uc3RhbnRzLlNldHRpbmcuRk9OVF9GQU1JTFk7XG4gIH1cblxuICBnZXQgZm9udFNpemUoKSB7XG4gICAgcmV0dXJuIHRoaXMuI3N0eWxlcy5mb250U2l6ZSAhPSBudWxsID8gdGhpcy4jc3R5bGVzLmZvbnRTaXplIDogQ29uc3RhbnRzLlNldHRpbmcuRk9OVF9TSVpFO1xuICB9XG5cbiAgZ2V0IGJvbGQoKSB7XG4gICAgcmV0dXJuIHRoaXMuI3N0eWxlcy5ib2xkO1xuICB9XG5cbiAgZ2V0IHVuZGVybGluZSgpIHtcbiAgICByZXR1cm4gdGhpcy4jc3R5bGVzLnVuZGVybGluZTtcbiAgfVxuXG4gIGdldCB3cmFwKCkge1xuICAgIHJldHVybiB0aGlzLiNzdHlsZXMud3JhcDtcbiAgfVxuXG4gIGdldCBiYWNrZ3JvdW5kQ29sb3IoKSB7XG4gICAgcmV0dXJuIHRoaXMuI3N0eWxlcy5iYWNrZ3JvdW5kQ29sb3I7XG4gIH1cblxuICBnZXQgZm9yZWdyb3VuZENvbG9yKCkge1xuICAgIHJldHVybiB0aGlzLiNzdHlsZXMuZm9yZWdyb3VuZENvbG9yO1xuICB9XG5cbiAgZ2V0IGJhY2tncm91bmRDb2xvckhvdmVyKCkge1xuICAgIHJldHVybiB0aGlzLiNzdHlsZXMuYmFja2dyb3VuZENvbG9ySG92ZXI7XG4gIH1cblxuICBnZXQgYmFja2dyb3VuZENvbG9yRG93bigpIHtcbiAgICByZXR1cm4gdGhpcy4jc3R5bGVzLmJhY2tncm91bmRDb2xvckRvd247XG4gIH1cblxuICBnZXQgYm9yZGVyQ29sb3IoKSB7XG4gICAgcmV0dXJuIHRoaXMuI3N0eWxlcy5ib3JkZXJDb2xvcjtcbiAgfVxuXG4gIGdldCBib3JkZXJDb2xvckhvdmVyKCkge1xuICAgIHJldHVybiB0aGlzLiNzdHlsZXMuYm9yZGVyQ29sb3JIb3ZlcjtcbiAgfVxuXG4gIGdldCBib3JkZXJDb2xvckRvd24oKSB7XG4gICAgcmV0dXJuIHRoaXMuI3N0eWxlcy5ib3JkZXJDb2xvckRvd247XG4gIH1cblxuICBnZXQgYm9yZGVyQ29sb3JTZWxlY3RlZCgpIHtcbiAgICByZXR1cm4gdGhpcy4jc3R5bGVzLmJvcmRlckNvbG9yU2VsZWN0ZWQgIT0gbnVsbCA/IHRoaXMuI3N0eWxlcy5ib3JkZXJDb2xvclNlbGVjdGVkIDogQ29uc3RhbnRzLlNldHRpbmcuREVGQVVMVF9CT1JERVJfQ09MT1JfU0VMRUNURUQ7XG4gIH1cblxuICBnZXQgYm9yZGVyU2l6ZSgpIHtcbiAgICByZXR1cm4gdGhpcy4jc3R5bGVzLmJvcmRlclNpemUgIT0gbnVsbCA/IHRoaXMuI3N0eWxlcy5ib3JkZXJTaXplIDogQ29uc3RhbnRzLlNldHRpbmcuREVGQVVMVF9CT1JERVJfU0laRTtcbiAgfVxuXG4gIGdldCBzZWxlY3RDb2xvcigpIHtcbiAgICByZXR1cm4gdGhpcy4jc3R5bGVzLnNlbGVjdENvbG9yO1xuICB9XG5cbiAgZ2V0IGFsaWduZW1lbnQoKSB7XG4gICAgcmV0dXJuIHRoaXMuI3N0eWxlcy5hbGlnbmVtZW50O1xuICB9XG5cbiAgZ2V0IHZlcnRpY2FsQWxpZ25lbWVudCgpIHtcbiAgICByZXR1cm4gdGhpcy4jc3R5bGVzLnZlcnRpY2FsQWxpZ25lbWVudDtcbiAgfVxuXG4gIGdldCBkaXNhYmxlQW5pbWF0aW9uKCkge1xuICAgIHJldHVybiB0aGlzLiNzdHlsZXMuZGlzYWJsZUFuaW1hdGlvbjtcbiAgfVxuXG4gIGdldCBzY3JvbGxYRGlzYWJsZWQoKSB7XG4gICAgcmV0dXJuIHRoaXMuI3N0eWxlcy5zY3JvbGxYRGlzYWJsZWQ7XG4gIH1cblxuICBnZXQgc2Nyb2xsWURpc2FibGVkKCkge1xuICAgIHJldHVybiB0aGlzLiNzdHlsZXMuc2Nyb2xsWURpc2FibGVkO1xuICB9XG5cbiAgZ2V0IHBhZGRpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMuI3N0eWxlcy5wYWRkaW5nICE9IG51bGwgPyB0aGlzLiNzdHlsZXMucGFkZGluZyA6IENvbnN0YW50cy5TZXR0aW5nLkRFRkFVTFRfUEFERElORztcbiAgfVxuXG4gIGdldCBzcGFjZUJldHdlZW5Db21wb25lbnRzKCkge1xuICAgIHJldHVybiB0aGlzLiNzdHlsZXMuc3BhY2VCZXR3ZWVuQ29tcG9uZW50cyAhPSBudWxsID8gdGhpcy4jc3R5bGVzLnNwYWNlQmV0d2VlbkNvbXBvbmVudHMgOiBDb25zdGFudHMuU2V0dGluZy5ERUZBVUxUX1NQQUNJTkc7XG4gIH1cblxuICBnZXQgaGlkZGVuKCkge1xuICAgIHJldHVybiB0aGlzLiNzdHlsZXMuaGlkZGVuO1xuICB9XG5cbiAgZ2V0IGJsdXJCYWNrZ3JvdW5kKCkge1xuICAgIHJldHVybiB0aGlzLiNzdHlsZXMuYmx1ckJhY2tncm91bmQ7XG4gIH1cblxuICBnZXQgbGluZVdpZHRoKCkge1xuICAgIHJldHVybiB0aGlzLiNzdHlsZXMubGluZVdpZHRoO1xuICB9XG5cbiAgZ2V0IGFuaW1hdGlvbkR1cmF0aW9uKCkge1xuICAgIHJldHVybiB0aGlzLiNzdHlsZXMuYW5pbWF0aW9uRHVyYXRpb24gIT0gbnVsbCA/IHRoaXMuI3N0eWxlcy5hbmltYXRpb25EdXJhdGlvbiA6IENvbnN0YW50cy5TZXR0aW5nLkRFRkFVTFRfQU5JTUFUSU9OX0RVUkFUSU9OO1xuICB9XG5cbiAgZ2V0IGZvcmVncm91bmQoKSB7XG4gICAgcmV0dXJuIHRoaXMuI3N0eWxlcy5mb3JlZ3JvdW5kO1xuICB9XG5cbiAgZ2V0IHpJbmRleCgpIHtcbiAgICByZXR1cm4gdGhpcy4jc3R5bGVzLnpJbmRleCAhPSBudWxsID8gdGhpcy4jc3R5bGVzLnpJbmRleCA6IDA7XG4gIH1cbiAgXG4gIGdldCBsaW5lQ2FwKCkge1xuICAgIHJldHVybiB0aGlzLiNzdHlsZXMubGluZUNhcDtcbiAgfVxuICBcbiAgZ2V0IGZpbGwoKSB7XG4gICAgcmV0dXJuIHRoaXMuI3N0eWxlcy5maWxsO1xuICB9XG5cbiAgZ2V0IGZpbGxDb2xvcigpIHtcbiAgICByZXR1cm4gdGhpcy4jc3R5bGVzLmZpbGxDb2xvcjtcbiAgfVxuXG4gIGdldCBjb2xvcigpIHtcbiAgICByZXR1cm4gdGhpcy4jc3R5bGVzLmNvbG9yO1xuICB9XG5cbiAgZ2V0IG1vdmFibGUoKSB7XG4gICAgcmV0dXJuIHRoaXMuI3N0eWxlcy5tb3ZhYmxlIHx8IGZhbHNlO1xuICB9XG5cbiAgc2V0KHN0eWxlLCB2YWx1ZSkge1xuICAgIGlmKHRoaXMuI3N0eWxlc1tzdHlsZV0gIT0gdmFsdWUpIHtcbiAgICAgIHRoaXMuI3N0eWxlc1tzdHlsZV0gPSB2YWx1ZTtcbiAgICAgIGlmKHRoaXMuY29tcG9uZW50ICYmIHRoaXMuY29tcG9uZW50LnJlYWN0b3IpIHRoaXMuY29tcG9uZW50LnJlYWN0b3IuZGlzcGF0Y2hFdmVudChcIm9uQ2hhbmdlXCIsIHRoaXMpO1xuICAgIH1cbiAgfVxuXG4gIHNldEFsbChzdHlsZXMpIHtcbiAgICBpZihzdHlsZXMpIHtcbiAgICAgIGZvcihjb25zdCBzdHlsZSBpbiBzdHlsZXMpIHtcbiAgICAgICAgaWYoc3R5bGVzLmhhc093blByb3BlcnR5KHN0eWxlKSkge1xuICAgICAgICAgIHRoaXMuc2V0KHN0eWxlLCBzdHlsZXNbc3R5bGVdKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIGNvcHkoKSB7XG4gICAgcmV0dXJuIG5ldyBTdHlsZSh0aGlzLiNzdHlsZXMpO1xuICB9XG5cbiAgZ2V0U3R5bGVzKCkge1xuICAgIGNvbnN0IHN0eWxlcyA9IHt9O1xuXG4gICAgZm9yKGNvbnN0IHN0eWxlIGluIHRoaXMuI3N0eWxlcykge1xuICAgICAgaWYodGhpcy4jc3R5bGVzLmhhc093blByb3BlcnR5KHN0eWxlKSkge1xuICAgICAgICBzdHlsZXNbc3R5bGVdID0gdGhpcy4jc3R5bGVzW3N0eWxlXTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gc3R5bGVzO1xuICB9XG59IiwiLypcbiAqIENvcHlyaWdodCAoQykgMjAyMCBFbGlhc3RpayAoZWxpYXN0aWtzb2Z0cy5jb20pXG4gKlxuICogVGhpcyBmaWxlIGlzIHBhcnQgb2YgXCJKU0dhbWVUb29sc1wiLlxuICpcbiAqIFwiSlNHYW1lVG9vbHNcIiBpcyBmcmVlIHNvZnR3YXJlOiB5b3UgY2FuIHJlZGlzdHJpYnV0ZSBpdCBhbmQvb3IgbW9kaWZ5XG4gKiBpdCB1bmRlciB0aGUgdGVybXMgb2YgdGhlIEdOVSBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlIGFzIHB1Ymxpc2hlZCBieVxuICogdGhlIEZyZWUgU29mdHdhcmUgRm91bmRhdGlvbiwgZWl0aGVyIHZlcnNpb24gMyBvZiB0aGUgTGljZW5zZSwgb3JcbiAqIChhdCB5b3VyIG9wdGlvbikgYW55IGxhdGVyIHZlcnNpb24uXG4gKlxuICogXCJKU0dhbWVUb29sc1wiIGlzIGRpc3RyaWJ1dGVkIGluIHRoZSBob3BlIHRoYXQgaXQgd2lsbCBiZSB1c2VmdWwsXG4gKiBidXQgV0lUSE9VVCBBTlkgV0FSUkFOVFk7IHdpdGhvdXQgZXZlbiB0aGUgaW1wbGllZCB3YXJyYW50eSBvZlxuICogTUVSQ0hBTlRBQklMSVRZIG9yIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFLiAgU2VlIHRoZVxuICogR05VIEdlbmVyYWwgUHVibGljIExpY2Vuc2UgZm9yIG1vcmUgZGV0YWlscy5cbiAqXG4gKiBZb3Ugc2hvdWxkIGhhdmUgcmVjZWl2ZWQgYSBjb3B5IG9mIHRoZSBHTlUgR2VuZXJhbCBQdWJsaWMgTGljZW5zZVxuICogYWxvbmcgd2l0aCBcIkpTR2FtZVRvb2xzXCIuICBJZiBub3QsIHNlZSA8aHR0cDovL3d3dy5nbnUub3JnL2xpY2Vuc2VzLz4uXG4gKi9cbmltcG9ydCBDb2wgZnJvbSBcIi4vQ29sXCI7XG5pbXBvcnQgQ29uc3RhbnRzIGZyb20gXCIuL0NvbnN0YW50c1wiO1xuaW1wb3J0IFN0eWxlIGZyb20gXCIuL1N0eWxlXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFRvb2x0aXAgZXh0ZW5kcyBDb2wge1xuICBzZWxlY3RhYmxlID0gZmFsc2U7XG4gIFxuICBjb25zdHJ1Y3RvcihzdHlsZSwgLi4uY29tcG9uZW50cykge1xuICAgIHN1cGVyKG51bGwsIG51bGwsIG51bGwsIG51bGwsIHN0eWxlLCAuLi5jb21wb25lbnRzKTtcbiAgICB0aGlzLmRpc2FibGVkID0gdHJ1ZTtcbiAgfVxuXG4gIGRyYXcoY29udGV4dCkge1xuICAgIGlmKHRoaXMuaGlkZGVuKSByZXR1cm47XG4gICAgY29uc3QgY2FudmFzID0gY29udGV4dC5jYW52YXM7XG4gICAgY29uc3QgY3R4ID0gY2FudmFzLmdldENvbnRleHQoXCIyZFwiKTtcbiAgICBjdHguc2F2ZSgpO1xuXG4gICAgaWYodGhpcy54ICsgdGhpcy53aWR0aCArIHRoaXMuc3R5bGUucGFkZGluZyA+IHRoaXMucGFyZW50LndpZHRoKSB7XG4gICAgICB0aGlzLnggLT0gKHRoaXMud2lkdGggKyB0aGlzLnN0eWxlLnBhZGRpbmcpO1xuICAgIH1cblxuICAgIGlmKHRoaXMueSArIHRoaXMuaGVpZ2h0ICsgdGhpcy5zdHlsZS5wYWRkaW5nID4gdGhpcy5wYXJlbnQuaGVpZ2h0KSB7XG4gICAgICB0aGlzLnkgLT0gKHRoaXMuaGVpZ2h0ICsgdGhpcy5zdHlsZS5wYWRkaW5nKTtcbiAgICB9XG5cbiAgICBzdXBlci5kcmF3KGN0eCk7XG4gICAgXG4gICAgY3R4LnJlc3RvcmUoKTtcbiAgfVxuXG4gIGdldCB3aWR0aCgpIHtcbiAgICByZXR1cm4gc3VwZXIud2lkdGggKyB0aGlzLnN0eWxlLnBhZGRpbmc7XG4gIH1cblxuICBnZXQgaGVpZ2h0KCkge1xuICAgIHJldHVybiBzdXBlci5oZWlnaHQgKyB0aGlzLnN0eWxlLnBhZGRpbmc7XG4gIH1cblxuICBzZXQgd2lkdGgod2lkdGgpIHtcbiAgICBzdXBlci53aWR0aCA9IHdpZHRoO1xuICB9XG5cbiAgc2V0IGhlaWdodChoZWlnaHQpIHtcbiAgICBzdXBlci5oZWlnaHQgPSBoZWlnaHQ7XG4gIH1cblxuICBnZXQgZGVmYXVsdFN0eWxlKCkge1xuICAgIHJldHVybiBuZXcgU3R5bGUoe1xuICAgICAgXCJiYWNrZ3JvdW5kQ29sb3JcIjogQ29uc3RhbnRzLlNldHRpbmcuVE9PTFRJUF9ERUZBVUxUX0JBQ0tHUk9VTkRcbiAgICB9KTtcbiAgfVxuXG4gIGNvbXBhcmVUb0NvbXBvbmVudChvdGhlckNvbXBvbmVudCkge1xuICAgIHJldHVybiBvdGhlckNvbXBvbmVudC5jb21wYXJlVG9Ub29sdGlwKHRoaXMpO1xuICB9XG5cbiAgY29tcGFyZVRvTWVudShvdGhlckNvbXBvbmVudCkge1xuICAgIHJldHVybiAxO1xuICB9XG5cbiAgY29tcGFyZVRvVG9vbHRpcChvdGhlckNvbXBvbmVudCkge1xuICAgIHJldHVybiAwO1xuICB9XG5cbiAgY29tcGFyZVRvTm90aWZpY2F0aW9uKG90aGVyQ29tcG9uZW50KSB7XG4gICAgcmV0dXJuIDE7XG4gIH1cblxuICBnZXQgaGlkZGVuKCkge1xuICAgIHJldHVybiBzdXBlci5oaWRkZW4gfHwgdGhpcy5kaXNhYmxlZDtcbiAgfVxuXG4gIHNldCBoaWRkZW4oaGlkZGVuKSB7XG4gICAgc3VwZXIuaGlkZGVuID0gaGlkZGVuO1xuICAgIHRoaXMuZGlzYWJsZWQgPSBoaWRkZW47XG4gIH1cbn0iLCIvKlxuICogQ29weXJpZ2h0IChDKSAyMDIwIEVsaWFzdGlrIChlbGlhc3Rpa3NvZnRzLmNvbSlcbiAqXG4gKiBUaGlzIGZpbGUgaXMgcGFydCBvZiBcIkpTR2FtZVRvb2xzXCIuXG4gKlxuICogXCJKU0dhbWVUb29sc1wiIGlzIGZyZWUgc29mdHdhcmU6IHlvdSBjYW4gcmVkaXN0cmlidXRlIGl0IGFuZC9vciBtb2RpZnlcbiAqIGl0IHVuZGVyIHRoZSB0ZXJtcyBvZiB0aGUgR05VIEdlbmVyYWwgUHVibGljIExpY2Vuc2UgYXMgcHVibGlzaGVkIGJ5XG4gKiB0aGUgRnJlZSBTb2Z0d2FyZSBGb3VuZGF0aW9uLCBlaXRoZXIgdmVyc2lvbiAzIG9mIHRoZSBMaWNlbnNlLCBvclxuICogKGF0IHlvdXIgb3B0aW9uKSBhbnkgbGF0ZXIgdmVyc2lvbi5cbiAqXG4gKiBcIkpTR2FtZVRvb2xzXCIgaXMgZGlzdHJpYnV0ZWQgaW4gdGhlIGhvcGUgdGhhdCBpdCB3aWxsIGJlIHVzZWZ1bCxcbiAqIGJ1dCBXSVRIT1VUIEFOWSBXQVJSQU5UWTsgd2l0aG91dCBldmVuIHRoZSBpbXBsaWVkIHdhcnJhbnR5IG9mXG4gKiBNRVJDSEFOVEFCSUxJVFkgb3IgRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UuICBTZWUgdGhlXG4gKiBHTlUgR2VuZXJhbCBQdWJsaWMgTGljZW5zZSBmb3IgbW9yZSBkZXRhaWxzLlxuICpcbiAqIFlvdSBzaG91bGQgaGF2ZSByZWNlaXZlZCBhIGNvcHkgb2YgdGhlIEdOVSBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlXG4gKiBhbG9uZyB3aXRoIFwiSlNHYW1lVG9vbHNcIi4gIElmIG5vdCwgc2VlIDxodHRwOi8vd3d3LmdudS5vcmcvbGljZW5zZXMvPi5cbiAqL1xuaW1wb3J0IENvbXBvbmVudCBmcm9tIFwiLi9Db21wb25lbnRcIjtcbmltcG9ydCBDb25zdGFudHMgZnJvbSBcIi4vQ29uc3RhbnRzXCI7XG5pbXBvcnQgVXRpbHMgZnJvbSBcIi4vVXRpbHNcIjtcbmltcG9ydCBTdHlsZSBmcm9tIFwiLi9TdHlsZVwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBUcmlhbmdsZSBleHRlbmRzIENvbXBvbmVudCB7XG4gIHNlbGVjdGFibGUgPSBmYWxzZTtcblxuICBjb25zdHJ1Y3Rvcih4LCB5LCB3aWR0aCwgaGVpZ2h0LCBzdHlsZSkge1xuICAgIHN1cGVyKHgsIHksIHdpZHRoLCBoZWlnaHQsIHN0eWxlKTtcbiAgfVxuXG4gIGRyYXcoY29udGV4dCkge1xuICAgIGlmKHRoaXMuaGlkZGVuKSByZXR1cm47XG4gICAgc3VwZXIuZHJhdyhjb250ZXh0KTtcblxuICAgIGNvbnN0IGNhbnZhcyA9IGNvbnRleHQuY2FudmFzO1xuICAgIGNvbnN0IGN0eCA9IGNhbnZhcy5nZXRDb250ZXh0KFwiMmRcIik7XG4gICAgXG4gICAgVXRpbHMuZHJhd1RyaWFuZ2xlKGN0eCwgdGhpcy54LCB0aGlzLnksIHRoaXMud2lkdGgsIHRoaXMuaGVpZ2h0LCB0aGlzLnN0eWxlLmxpbmVXaWR0aCwgdGhpcy5zdHlsZS5jb2xvciwgdGhpcy5zdHlsZS5saW5lQ2FwLCB0aGlzLnN0eWxlLmZpbGwsIHRoaXMuc3R5bGUuZmlsbENvbG9yKTtcblxuICAgIHRoaXMuaW5pdCA9IHRydWU7XG4gIH1cblxuICBnZXQgd2lkdGgoKSB7XG4gICAgcmV0dXJuIHN1cGVyLndpZHRoICsgdGhpcy5zdHlsZS5saW5lV2lkdGg7XG4gIH1cblxuICBnZXQgaGVpZ2h0KCkge1xuICAgIHJldHVybiBzdXBlci5oZWlnaHQgKyB0aGlzLnN0eWxlLmxpbmVXaWR0aDtcbiAgfVxuXG4gIHNldCB3aWR0aCh3aWR0aCkge1xuICAgIHN1cGVyLndpZHRoID0gd2lkdGg7XG4gIH1cblxuICBzZXQgaGVpZ2h0KGhlaWdodCkge1xuICAgIHN1cGVyLmhlaWdodCA9IGhlaWdodDtcbiAgfVxuXG4gIGdldCBkZWZhdWx0U3R5bGUoKSB7XG4gICAgcmV0dXJuIG5ldyBTdHlsZSh7XG4gICAgICBcImxpbmVXaWR0aFwiOiBDb25zdGFudHMuU2V0dGluZy5UUklBTkdMRV9ERUZBVUxUX0xJTkVfU0laRSxcbiAgICAgIFwiY29sb3JcIjogQ29uc3RhbnRzLlNldHRpbmcuVFJJQU5HTEVfREVGQVVMVF9DT0xPUixcbiAgICAgIFwiZmlsbFwiOiBDb25zdGFudHMuU2V0dGluZy5UUklBTkdMRV9ERUZBVUxUX0ZJTEwsXG4gICAgICBcImxpbmVDYXBcIjogQ29uc3RhbnRzLlNldHRpbmcuVFJJQU5HTEVfREVGQVVMVF9MSU5FX0NBUCxcbiAgICAgIFwiZmlsbENvbG9yXCI6IENvbnN0YW50cy5TZXR0aW5nLlRSSUFOR0xFX0RFRkFVTFRfRklMTF9DT0xPUlxuICAgIH0pO1xuICB9XG59IiwiLypcbiAqIENvcHlyaWdodCAoQykgMjAyMCBFbGlhc3RpayAoZWxpYXN0aWtzb2Z0cy5jb20pXG4gKlxuICogVGhpcyBmaWxlIGlzIHBhcnQgb2YgXCJKU0dhbWVUb29sc1wiLlxuICpcbiAqIFwiSlNHYW1lVG9vbHNcIiBpcyBmcmVlIHNvZnR3YXJlOiB5b3UgY2FuIHJlZGlzdHJpYnV0ZSBpdCBhbmQvb3IgbW9kaWZ5XG4gKiBpdCB1bmRlciB0aGUgdGVybXMgb2YgdGhlIEdOVSBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlIGFzIHB1Ymxpc2hlZCBieVxuICogdGhlIEZyZWUgU29mdHdhcmUgRm91bmRhdGlvbiwgZWl0aGVyIHZlcnNpb24gMyBvZiB0aGUgTGljZW5zZSwgb3JcbiAqIChhdCB5b3VyIG9wdGlvbikgYW55IGxhdGVyIHZlcnNpb24uXG4gKlxuICogXCJKU0dhbWVUb29sc1wiIGlzIGRpc3RyaWJ1dGVkIGluIHRoZSBob3BlIHRoYXQgaXQgd2lsbCBiZSB1c2VmdWwsXG4gKiBidXQgV0lUSE9VVCBBTlkgV0FSUkFOVFk7IHdpdGhvdXQgZXZlbiB0aGUgaW1wbGllZCB3YXJyYW50eSBvZlxuICogTUVSQ0hBTlRBQklMSVRZIG9yIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFLiAgU2VlIHRoZVxuICogR05VIEdlbmVyYWwgUHVibGljIExpY2Vuc2UgZm9yIG1vcmUgZGV0YWlscy5cbiAqXG4gKiBZb3Ugc2hvdWxkIGhhdmUgcmVjZWl2ZWQgYSBjb3B5IG9mIHRoZSBHTlUgR2VuZXJhbCBQdWJsaWMgTGljZW5zZVxuICogYWxvbmcgd2l0aCBcIkpTR2FtZVRvb2xzXCIuICBJZiBub3QsIHNlZSA8aHR0cDovL3d3dy5nbnUub3JnL2xpY2Vuc2VzLz4uXG4gKi9cbmltcG9ydCBDb25zdGFudHMgZnJvbSBcIi4vQ29uc3RhbnRzXCI7XG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgcHJlUmVuZGVyZWRGb250OiB7fSxcbiAgbGFzdEtleTogLTEsXG4gIHByZVJlbmRlckZvbnQ6IGZ1bmN0aW9uKGNhcnMsIHNpemUsIGNvbG9yLCBmb250RmFtaWx5KSB7XG4gICAgY2Fycy5wdXNoKFwiP1wiKTsgY2Fycy5wdXNoKFwiIFwiKTsgY2Fycy5wdXNoKFwiQVwiKTtcbiAgICBcbiAgICBmb3IobGV0IGkgPSAwOyBpIDwgY2Fycy5sZW5ndGg7IGkrKykge1xuICAgICAgY29uc3QgY2FudmFzVG1wID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImNhbnZhc1wiKTtcbiAgICAgIGNvbnN0IGN0eFRtcCA9IGNhbnZhc1RtcC5nZXRDb250ZXh0KFwiMmRcIik7XG4gICAgICBjdHhUbXAuZm9udCA9IHNpemUgKyBcInB4IFwiICsgZm9udEZhbWlseTtcbiAgICAgIGNvbnN0IHdpZHRoID0gY3R4VG1wLm1lYXN1cmVUZXh0KGNhcnNbaV0pLndpZHRoO1xuICAgICAgXG4gICAgICBjYW52YXNUbXAud2lkdGggPSB3aWR0aDtcbiAgICAgIGNhbnZhc1RtcC5oZWlnaHQgPSBzaXplICsgKHNpemUgLyA2KTtcbiAgICAgIFxuICAgICAgY3R4VG1wLmZvbnQgPSBzaXplICsgXCJweCBcIiArIGZvbnRGYW1pbHk7XG4gICAgICBjdHhUbXAuZmlsbFN0eWxlID0gY29sb3I7XG4gICAgICBjdHhUbXAudGV4dEJhc2VsaW5lID0gXCJ0b3BcIjtcbiAgICAgIGN0eFRtcC5maWxsVGV4dChjYXJzW2ldLCAwLCAwKTtcbiAgICAgIFxuICAgICAgdGhpcy5wcmVSZW5kZXJlZEZvbnRbY2Fyc1tpXV0gPSBjYW52YXNUbXA7XG4gICAgfVxuICB9LFxuICBkcmF3SW1hZ2U6IGZ1bmN0aW9uKGN0eCwgaW1hZ2UsIHgsIHksIHdpZHRoLCBoZWlnaHQsIHN4LCBzeSwgc1dpZHRoLCBzSGVpZ2h0LCBlcmFzZUJlbG93LCBkZWdyZWVzKSB7XG4gICAgdGhpcy5kcmF3SW1hZ2VXcmFwcGVyKGN0eCwgaW1hZ2UsIHgsIHksIHdpZHRoLCBoZWlnaHQsIHN4LCBzeSwgc1dpZHRoLCBzSGVpZ2h0LCBlcmFzZUJlbG93LCBkZWdyZWVzKTtcbiAgfSxcbiAgZHJhd0ltYWdlRGF0YTogZnVuY3Rpb24oY3R4LCBpbWFnZURhdGEsIHgsIHksIHdpZHRoLCBoZWlnaHQsIHN4LCBzeSwgc1dpZHRoLCBzSGVpZ2h0LCBlcmFzZUJlbG93LCBkZWdyZWVzKSB7XG4gICAgdGhpcy5kcmF3SW1hZ2VXcmFwcGVyKGN0eCwgaW1hZ2VEYXRhLCB4LCB5LCB3aWR0aCwgaGVpZ2h0LCBzeCwgc3ksIHNXaWR0aCwgc0hlaWdodCwgZXJhc2VCZWxvdywgZGVncmVlcyk7XG4gIH0sXG4gIGRyYXdJbWFnZVdyYXBwZXI6IGZ1bmN0aW9uKGN0eCwgaW1hZ2UsIHgsIHksIHdpZHRoLCBoZWlnaHQsIHN4LCBzeSwgc1dpZHRoLCBzSGVpZ2h0LCBlcmFzZUJlbG93LCBkZWdyZWVzKSB7XG4gICAgeCA9ICh4ID09IHVuZGVmaW5lZCB8fCBpc05hTih4KSkgPyBudWxsIDogTWF0aC5yb3VuZCh4KTtcbiAgICB5ID0gKHkgPT0gdW5kZWZpbmVkIHx8IGlzTmFOKHkpKSA/IG51bGwgOiBNYXRoLnJvdW5kKHkpO1xuICAgIHdpZHRoID0gKHdpZHRoID09IHVuZGVmaW5lZCB8fCBpc05hTih3aWR0aCkpID8gbnVsbCA6IE1hdGgucm91bmQod2lkdGgpO1xuICAgIGhlaWdodCA9IChoZWlnaHQgPT0gdW5kZWZpbmVkIHx8IGlzTmFOKGhlaWdodCkpID8gbnVsbCA6IE1hdGgucm91bmQoaGVpZ2h0KTtcbiAgICBzeCA9IChzeCA9PSB1bmRlZmluZWQgfHwgaXNOYU4oc3gpKSA/IG51bGwgOiBNYXRoLnJvdW5kKHN4KTtcbiAgICBzeSA9IChzeSA9PSB1bmRlZmluZWQgfHwgaXNOYU4oc3kpKSA/IG51bGwgOiBNYXRoLnJvdW5kKHN5KTtcbiAgICBzV2lkdGggPSAoc1dpZHRoID09IHVuZGVmaW5lZCB8fCBpc05hTihzV2lkdGgpKSA/IG51bGwgOiBNYXRoLnJvdW5kKHNXaWR0aCk7XG4gICAgc0hlaWdodCA9IChzSGVpZ2h0ID09IHVuZGVmaW5lZCB8fCBpc05hTihzSGVpZ2h0KSkgPyBudWxsIDogTWF0aC5yb3VuZChzSGVpZ2h0KTtcbiAgICBlcmFzZUJlbG93ID0gZXJhc2VCZWxvdyA9PSB1bmRlZmluZWQgPyBmYWxzZSA6IGVyYXNlQmVsb3c7XG4gICAgZGVncmVlcyA9IChkZWdyZWVzID09IHVuZGVmaW5lZCB8fCBpc05hTihkZWdyZWVzKSkgPyBudWxsIDogZGVncmVlcztcbiAgXG4gICAgaWYoZGVncmVlcyAhPSB1bmRlZmluZWQpIHtcbiAgICAgIGN0eC5zYXZlKCk7XG4gICAgICBjdHgudHJhbnNsYXRlKHggKyB3aWR0aCAvIDIsIHkgKyBoZWlnaHQgLyAyKTtcbiAgICAgIGN0eC5yb3RhdGUoZGVncmVlcyAqIE1hdGguUEkgLyAxODApO1xuICAgICAgeCA9IC0od2lkdGggLyAyKTtcbiAgICAgIHkgPSAtKGhlaWdodCAvIDIpO1xuICAgIH1cbiAgXG4gICAgaWYoZXJhc2VCZWxvdykge1xuICAgICAgY3R4LmNsZWFyUmVjdCh4LCB5LCB3aWR0aCwgaGVpZ2h0KTtcbiAgICB9XG4gIFxuICAgIGlmKGN0eCAhPSB1bmRlZmluZWQgJiYgaW1hZ2UgIT0gdW5kZWZpbmVkKSB7XG4gICAgICBpZihpbWFnZS53aWR0aCA+IDAgJiYgaW1hZ2UuaGVpZ2h0ID4gMCkge1xuICAgICAgICBpZihzeCAhPSB1bmRlZmluZWQgJiYgc3kgIT0gdW5kZWZpbmVkICYmIHNXaWR0aCAhPSB1bmRlZmluZWQgJiYgc0hlaWdodCAhPSB1bmRlZmluZWQpIHtcbiAgICAgICAgICBjdHguZHJhd0ltYWdlKGltYWdlLCBzeCwgc3ksIHNXaWR0aCwgc0hlaWdodCwgeCwgeSwgd2lkdGgsIGhlaWdodCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgY3R4LmRyYXdJbWFnZShpbWFnZSwgeCwgeSwgd2lkdGgsIGhlaWdodCk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIFxuICAgIGlmKGRlZ3JlZXMgIT0gdW5kZWZpbmVkKSB7XG4gICAgICBjdHgucmVzdG9yZSgpO1xuICAgIH1cbiAgfSxcbiAgZHJhd1RleHQ6IGZ1bmN0aW9uKGN0eCwgdGV4dCwgY29sb3IsIHNpemUsIGZvbnRGYW1pbHksIGFsaWduZW1lbnQsIHZlcnRpY2FsQWxpZ25lbWVudCwgeCwgeSwgd3JhcCwgYm9sZCwgdW5kZXJsaW5lLCB0ZXh0QmFzZWxpbmUsIHBhcmVudCkge1xuICAgIGlmKGN0eCkge1xuICAgICAgY3R4LnNhdmUoKTtcblxuICAgICAgaWYoIUFycmF5LmlzQXJyYXkoY29sb3IpKSB7XG4gICAgICAgIGN0eC5maWxsU3R5bGUgPSBjb2xvcjtcbiAgICAgICAgY3R4LnN0cm9rZVN0eWxlID0gY29sb3I7XG4gICAgICB9XG4gIFxuICAgICAgY3R4LmZvbnQgPSAoYm9sZCA/IFwiYm9sZCBcIiA6IFwiXCIpICsgc2l6ZSArIFwicHggXCIgKyBmb250RmFtaWx5O1xuICAgICAgY3R4LnRleHRCYXNlbGluZSA9IHRleHRCYXNlbGluZSB8fCBcImJvdHRvbVwiO1xuICAgICAgY3R4LmZpbHRlciA9IFwibm9uZVwiO1xuICBcbiAgICAgIGlmKHdyYXApIHtcbiAgICAgICAgdGV4dCA9IHRoaXMud3JhcFRleHRMaW5lcyhjdHgsIHRleHQpW1widGV4dFwiXTtcbiAgICAgIH1cbiAgICAgIFxuICAgICAgY29uc3QgbGluZXMgPSB0ZXh0LnNwbGl0KFwiXFxuXCIpO1xuICAgICAgbGV0IG1heFdpZHRoID0gMDtcbiAgICAgIGxldCB4Q3VycmVudCA9IE1hdGgucm91bmQoeCk7XG4gICAgICBsZXQgeUN1cnJlbnQgPSBNYXRoLnJvdW5kKHkpICsgc2l6ZTtcbiAgICAgIGxldCB5Rmlyc3QgPSAwO1xuXG4gICAgICBpZigheSkge1xuICAgICAgICBpZih2ZXJ0aWNhbEFsaWduZW1lbnQgPT0gQ29uc3RhbnRzLlZlcnRpY2FsQWxpZ25lbWVudC5DRU5URVIpIHtcbiAgICAgICAgICB5Q3VycmVudCArPSBNYXRoLnJvdW5kKCgocGFyZW50ICYmIHBhcmVudC5oZWlnaHQgPyBwYXJlbnQuaGVpZ2h0IDogdGhpcy5nZXRDYW52YXNIZWlnaHQoY3R4LmNhbnZhcykpIC8gMikgLSAoc2l6ZSAqIGxpbmVzLmxlbmd0aCAvIDIpKTtcbiAgICAgICAgfSBlbHNlIGlmKHZlcnRpY2FsQWxpZ25lbWVudCA9PSBDb25zdGFudHMuVmVydGljYWxBbGlnbmVtZW50LkJPVFRPTSkge1xuICAgICAgICAgIHlDdXJyZW50ICs9IE1hdGgucm91bmQoKChwYXJlbnQgJiYgcGFyZW50LmhlaWdodCA/IHBhcmVudC5oZWlnaHQgOiB0aGlzLmdldENhbnZhc0hlaWdodChjdHguY2FudmFzKSkpIC0gKHNpemUgKiBsaW5lcy5sZW5ndGgpIC8gMiAtIHNpemUgLyA1KTtcbiAgICAgICAgfVxuICAgICAgfVxuICBcbiAgICAgIGZvcihsZXQgaSA9IDA7IGkgPCBsaW5lcy5sZW5ndGg7IGkrKykge1xuICAgICAgICBjb25zdCBjdXJyZW50VGV4dCA9IGxpbmVzW2ldO1xuICAgICAgICBjb25zdCBjdXJyZW50V2lkdGggPSBjdHgubWVhc3VyZVRleHQoY3VycmVudFRleHQpLndpZHRoO1xuICBcbiAgICAgICAgaWYoQXJyYXkuaXNBcnJheShjb2xvcikpIHtcbiAgICAgICAgICBsZXQgY29sb3JJbmRleCA9IGk7XG4gIFxuICAgICAgICAgIGlmKGNvbG9ySW5kZXggPiBjb2xvci5sZW5ndGggLSAxKSB7XG4gICAgICAgICAgICBjb2xvckluZGV4ID0gY29sb3IubGVuZ3RoIC0gMTtcbiAgICAgICAgICB9XG4gIFxuICAgICAgICAgIGN0eC5maWxsU3R5bGUgPSBjb2xvcltjb2xvckluZGV4XTtcbiAgICAgICAgICBjdHguc3Ryb2tlU3R5bGUgPSBjb2xvcltjb2xvckluZGV4XTtcbiAgICAgICAgfVxuICBcbiAgICAgICAgaWYoYWxpZ25lbWVudCA9PSBDb25zdGFudHMuQWxpZ25lbWVudC5DRU5URVIpIHtcbiAgICAgICAgICB4Q3VycmVudCA9IE1hdGgucm91bmQoKHBhcmVudCAmJiBwYXJlbnQueCA/IHBhcmVudC54IDogMCkpICsgTWF0aC5yb3VuZCgoKHBhcmVudCAmJiBwYXJlbnQud2lkdGggPyBwYXJlbnQud2lkdGggOiB0aGlzLmdldENhbnZhc1dpZHRoKGN0eC5jYW52YXMpKSAvIDIpIC0gKGN0eC5tZWFzdXJlVGV4dChjdXJyZW50VGV4dCkud2lkdGggLyAyKSk7XG4gICAgICAgIH0gZWxzZSBpZihhbGlnbmVtZW50ID09IENvbnN0YW50cy5BbGlnbmVtZW50LlJJR0hUKSB7XG4gICAgICAgICAgeEN1cnJlbnQgPSBNYXRoLnJvdW5kKChwYXJlbnQgJiYgcGFyZW50LnggPyBwYXJlbnQueCA6IDApKSArIE1hdGgucm91bmQoKHBhcmVudCAmJiBwYXJlbnQud2lkdGggPyBwYXJlbnQud2lkdGggOiB0aGlzLmdldENhbnZhc1dpZHRoKGN0eC5jYW52YXMpKSAtIChjdHgubWVhc3VyZVRleHQoY3VycmVudFRleHQpLndpZHRoKSAtIChwYXJlbnQgJiYgcGFyZW50LnNwYWNlQmV0d2VlbkNvbXBvbmVudHMgPyBwYXJlbnQuc3BhY2VCZXR3ZWVuQ29tcG9uZW50cyA6IENvbnN0YW50cy5TZXR0aW5nLkRFRkFVTFRfU1BBQ0lORykpO1xuICAgICAgICB9XG5cbiAgICAgICAgY3R4LmZpbGxUZXh0KGN1cnJlbnRUZXh0LCB4Q3VycmVudCwgeUN1cnJlbnQpO1xuICBcbiAgICAgICAgaWYodW5kZXJsaW5lKSB7XG4gICAgICAgICAgY3R4LmxpbmVXaWR0aCA9IDE7XG4gICAgICAgICAgY3R4LmJlZ2luUGF0aCgpO1xuICAgICAgICAgIGN0eC5tb3ZlVG8oeEN1cnJlbnQsIHlDdXJyZW50IC0gMik7XG4gICAgICAgICAgY3R4LmxpbmVUbyhNYXRoLnJvdW5kKHhDdXJyZW50ICsgY3VycmVudFdpZHRoKSwgeUN1cnJlbnQgLSAyKTtcbiAgICAgICAgICBjdHguc3Ryb2tlKCk7XG4gICAgICAgIH1cbiAgXG4gICAgICAgIGlmKGN1cnJlbnRXaWR0aCA+IG1heFdpZHRoKSBtYXhXaWR0aCA9IGN1cnJlbnRXaWR0aDtcbiAgICAgICAgaWYoaSA9PSAwKSB5Rmlyc3QgPSB5Q3VycmVudDtcblxuICAgICAgICB5Q3VycmVudCArPSBzaXplO1xuICAgICAgfVxuICBcbiAgICAgIGN0eC5yZXN0b3JlKCk7XG4gIFxuICAgICAgcmV0dXJuIHtcbiAgICAgICAgeDogeEN1cnJlbnQsXG4gICAgICAgIHk6IHlGaXJzdCxcbiAgICAgICAgaGVpZ2h0OiBzaXplICogbGluZXMubGVuZ3RoLFxuICAgICAgICB3aWR0aDogbWF4V2lkdGhcbiAgICAgIH07XG4gICAgfVxuICB9LFxuICB3cmFwVGV4dDogZnVuY3Rpb24odGV4dCwgbGltaXQpIHtcbiAgICBpZih0ZXh0Lmxlbmd0aCA+IGxpbWl0KSB7XG4gICAgICBsZXQgcCA9IGxpbWl0O1xuXG4gICAgICBmb3IoOyBwID4gMCAmJiB0ZXh0W3BdICE9IFwiIFwiOyBwLS0pO1xuXG4gICAgICBpZihwID4gMCkge1xuICAgICAgICBjb25zdCBsZWZ0ID0gdGV4dC5zdWJzdHJpbmcoMCwgcCk7XG4gICAgICAgIGNvbnN0IHJpZ2h0ID0gdGV4dC5zdWJzdHJpbmcocCArIDEpO1xuICAgICAgICByZXR1cm4gbGVmdCArIFwiXFxuXCIgKyB0aGlzLndyYXBUZXh0KHJpZ2h0LCBsaW1pdCk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHRleHQ7XG4gIH0sXG4gIHdyYXBUZXh0TGluZXM6IGZ1bmN0aW9uKGN0eCwgdGV4dCwgd2lkdGgsIGZvbnRTaXplLCBmb250RmFtaWx5LCBkaXNhYmxlV3JhcCkge1xuICAgIGlmKGN0eCAmJiB0ZXh0KSB7XG4gICAgICBjdHguc2F2ZSgpO1xuICAgICAgY3R4LmZvbnQgPSBNYXRoLnJvdW5kKGZvbnRTaXplKSArIFwicHggXCIgKyBmb250RmFtaWx5O1xuICAgICAgY3R4LmltYWdlU21vb3RoaW5nRW5hYmxlZCA9IGZhbHNlO1xuICBcbiAgICAgIGNvbnN0IGxpbmVzID0gdGV4dC5zcGxpdChcIlxcblwiKTtcbiAgICAgIGxldCBuZXdUZXh0ID0gXCJcIjtcbiAgICAgIGNvbnN0IHdpZHRoQ2FyID0gd2lkdGggfHwgY3R4Lm1lYXN1cmVUZXh0KFwiQVwiKS53aWR0aDtcbiAgICAgIGNvbnN0IG5iQ2FyTGluZSA9IE1hdGgucm91bmQodGhpcy5nZXRDYW52YXNXaWR0aChjdHguY2FudmFzKSAvIHdpZHRoQ2FyKTtcbiAgXG4gICAgICBsZXQgaGVpZ2h0VG90YWwgPSAwO1xuICAgICAgbGV0IG1heFdpZHRoID0gMDtcbiAgXG4gICAgICBmb3IobGV0IGkgPSAwOyBpIDwgbGluZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgY29uc3QgbGluZVdyYXAgPSBkaXNhYmxlV3JhcCA/IGxpbmVzW2ldIDogdGhpcy53cmFwVGV4dChsaW5lc1tpXSwgbmJDYXJMaW5lKTtcbiAgICAgICAgbmV3VGV4dCArPSBsaW5lV3JhcDtcbiAgXG4gICAgICAgIGlmKGkgPCBsaW5lcy5sZW5ndGggLSAxKSB7XG4gICAgICAgICAgbmV3VGV4dCArPSBcIlxcblwiO1xuICAgICAgICB9XG4gIFxuICAgICAgICBmb3IobGV0IGogPSAwOyBqIDwgbGluZVdyYXAuc3BsaXQoXCJcXG5cIikubGVuZ3RoOyBqKyspIHtcbiAgICAgICAgICBjb25zdCB3aWR0aFRleHQgPSBjdHgubWVhc3VyZVRleHQobGluZVdyYXAuc3BsaXQoXCJcXG5cIilbal0pLndpZHRoO1xuICAgICAgICAgIGhlaWdodFRvdGFsICs9IGZvbnRTaXplO1xuICAgICAgICAgIGlmKHdpZHRoVGV4dCA+IG1heFdpZHRoKSBtYXhXaWR0aCA9IHdpZHRoVGV4dDtcbiAgICAgICAgfVxuICAgICAgfVxuICBcbiAgICAgIGN0eC5yZXN0b3JlKCk7XG5cbiAgICAgIHJldHVybiB7XG4gICAgICAgIHRleHQ6IG5ld1RleHQsXG4gICAgICAgIGhlaWdodDogaGVpZ2h0VG90YWwsXG4gICAgICAgIHdpZHRoOiBtYXhXaWR0aCxcbiAgICAgICAgY2FyV2lkdGg6IHdpZHRoQ2FyXG4gICAgICB9O1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICB0ZXh0OiBcIlwiLFxuICAgICAgICBoZWlnaHQ6IDAsXG4gICAgICAgIHdpZHRoOiAwLFxuICAgICAgICBjYXJXaWR0aDogMFxuICAgICAgfTtcbiAgICB9XG4gIH0sXG4gIGRyYXdBcnJvdzogZnVuY3Rpb24oY3R4LCBmcm9teCwgZnJvbXksIHRveCwgdG95LCBsaW5lV2lkdGgsIGhlYWRTaXplLCBjb2xvciwgbGluZUNhcCkge1xuICAgIGN0eC5zYXZlKCk7XG5cbiAgICBjdHgubGluZUNhcCA9IGxpbmVDYXAgfHwgQ29uc3RhbnRzLlNldHRpbmcuQVJST1dfREVGQVVMVF9MSU5FX0NBUDtcbiAgICBjdHgubGluZVdpZHRoID0gbGluZVdpZHRoIHx8IENvbnN0YW50cy5TZXR0aW5nLkFSUk9XX0RFRkFVTFRfTElORV9TSVpFO1xuICAgIGN0eC5zdHJva2VTdHlsZSA9IGNvbG9yIHx8IENvbnN0YW50cy5TZXR0aW5nLkFSUk9XX0RFRkFVTFRfQ09MT1I7XG4gICAgY3R4LmZpbHRlciA9IFwiXCI7XG4gIFxuICAgIGN0eC5iZWdpblBhdGgoKTtcbiAgICBjb25zdCBoZWFkbGVuID0gaGVhZFNpemUgfHwgQ29uc3RhbnRzLlNldHRpbmcuQVJST1dfREVGQVVMVF9IRUFEX1NJWkU7XG4gICAgY29uc3QgZHggPSB0b3ggLSBmcm9teDtcbiAgICBjb25zdCBkeSA9IHRveSAtIGZyb215O1xuICAgIGNvbnN0IGFuZ2xlID0gTWF0aC5hdGFuMihkeSwgZHgpO1xuICAgIGN0eC5tb3ZlVG8oZnJvbXgsIGZyb215KTtcbiAgICBjdHgubGluZVRvKHRveCwgdG95KTtcbiAgICBjdHgubW92ZVRvKHRveCwgdG95KTtcbiAgICBjdHgubGluZVRvKHRveCAtIGhlYWRsZW4gKiBNYXRoLmNvcyhhbmdsZSAtIE1hdGguUEkgLyA2KSwgdG95IC0gaGVhZGxlbiAqIE1hdGguc2luKGFuZ2xlIC0gTWF0aC5QSSAvIDYpKTtcbiAgICBjdHgubW92ZVRvKHRveCwgdG95KTtcbiAgICBjdHgubGluZVRvKHRveCAtIGhlYWRsZW4gKiBNYXRoLmNvcyhhbmdsZSArIE1hdGguUEkgLyA2KSwgdG95IC0gaGVhZGxlbiAqIE1hdGguc2luKGFuZ2xlICsgTWF0aC5QSSAvIDYpKTtcbiAgICBjdHguc3Ryb2tlKCk7XG4gICAgXG4gICAgY3R4LnJlc3RvcmUoKTtcbiAgfSxcbiAgZHJhd0Nyb3NzOiBmdW5jdGlvbihjdHgsIHgsIHksIHdpZHRoLCBoZWlnaHQsIGxpbmVXaWR0aCwgY29sb3IsIGxpbmVDYXApIHtcbiAgICBjdHguc2F2ZSgpO1xuXG4gICAgY3R4LmxpbmVDYXAgPSBsaW5lQ2FwIHx8IENvbnN0YW50cy5TZXR0aW5nLkNST1NTX0RFRkFVTFRfTElORV9DQVA7XG4gICAgY3R4LmxpbmVXaWR0aCA9IGxpbmVXaWR0aCB8fCBDb25zdGFudHMuU2V0dGluZy5DUk9TU19ERUZBVUxUX0xJTkVfU0laRTtcbiAgICBjdHguc3Ryb2tlU3R5bGUgPSBjb2xvciB8fCBDb25zdGFudHMuU2V0dGluZy5DUk9TU19ERUZBVUxUX0NPTE9SO1xuICAgIGN0eC5maWx0ZXIgPSBcIlwiO1xuICBcbiAgICBjdHguYmVnaW5QYXRoKCk7XG4gICAgY3R4Lm1vdmVUbyh4LCB5KTtcbiAgICBjdHgubGluZVRvKHggKyB3aWR0aCwgeSArIGhlaWdodCk7XG4gICAgY3R4Lm1vdmVUbyh4ICsgd2lkdGgsIHkpO1xuICAgIGN0eC5saW5lVG8oeCwgeSArIGhlaWdodCk7XG4gICAgY3R4LnN0cm9rZSgpO1xuICAgIFxuICAgIGN0eC5yZXN0b3JlKCk7XG4gIH0sXG4gIGRyYXdUcmlhbmdsZTogZnVuY3Rpb24oY3R4LCB4LCB5LCB3aWR0aCwgaGVpZ2h0LCBsaW5lV2lkdGgsIGNvbG9yLCBsaW5lQ2FwLCBmaWxsID0gQ29uc3RhbnRzLlNldHRpbmcuVFJJQU5HTEVfREVGQVVMVF9GSUxMLCBmaWxsQ29sb3IpIHtcbiAgICBjdHguc2F2ZSgpO1xuXG4gICAgY3R4LmxpbmVDYXAgPSBsaW5lQ2FwIHx8IENvbnN0YW50cy5TZXR0aW5nLlRSSUFOR0xFX0RFRkFVTFRfTElORV9DQVA7XG4gICAgY3R4LmxpbmVXaWR0aCA9IGxpbmVXaWR0aCB8fCBDb25zdGFudHMuU2V0dGluZy5UUklBTkdMRV9ERUZBVUxUX0xJTkVfU0laRTtcbiAgICBjdHguZmlsdGVyID0gXCJcIjtcblxuICAgIGlmKGZpbGwpIHtcbiAgICAgIGN0eC5maWxsU3R5bGUgPSBmaWxsQ29sb3IgfHwgQ29uc3RhbnRzLlNldHRpbmcuVFJJQU5HTEVfREVGQVVMVF9GSUxMX0NPTE9SO1xuICAgICAgY3R4LnN0cm9rZVN0eWxlID0gY29sb3IgfHwgQ29uc3RhbnRzLlNldHRpbmcuVFJJQU5HTEVfREVGQVVMVF9DT0xPUjtcbiAgICB9IGVsc2Uge1xuICAgICAgY3R4LnN0cm9rZVN0eWxlID0gY29sb3IgfHwgQ29uc3RhbnRzLlNldHRpbmcuVFJJQU5HTEVfREVGQVVMVF9DT0xPUjtcbiAgICB9XG4gIFxuICAgIGN0eC5iZWdpblBhdGgoKTtcbiAgICBjdHgubW92ZVRvKHgsIHkpO1xuICAgIGN0eC5saW5lVG8oeCArIHdpZHRoLCB5KTtcbiAgICBjdHgubGluZVRvKHggKyB3aWR0aCAvIDIsIHkgKyBoZWlnaHQpO1xuICAgIGN0eC5saW5lVG8oeCwgeSk7XG5cbiAgICBpZihmaWxsKSB7XG4gICAgICBjdHguZmlsbCgpO1xuICAgICAgY3R4LnN0cm9rZSgpO1xuICAgIH0gZWxzZSB7XG4gICAgICBjdHguc3Ryb2tlKCk7XG4gICAgfVxuICAgIFxuICAgIGN0eC5yZXN0b3JlKCk7XG4gIH0sXG4gIGRyYXdDaXJjbGU6IGZ1bmN0aW9uKGN0eCwgeCwgeSwgcmFkaXVzLCBsaW5lV2lkdGgsIGNvbG9yLCBsaW5lQ2FwLCBmaWxsID0gQ29uc3RhbnRzLlNldHRpbmcuQ0lSQ0xFX0RFRkFVTFRfRklMTCwgZmlsbENvbG9yKSB7XG4gICAgY3R4LnNhdmUoKTtcblxuICAgIGN0eC5saW5lQ2FwID0gbGluZUNhcCB8fCBDb25zdGFudHMuU2V0dGluZy5DSVJDTEVfREVGQVVMVF9MSU5FX0NBUDtcbiAgICBjdHgubGluZVdpZHRoID0gbGluZVdpZHRoIHx8IENvbnN0YW50cy5TZXR0aW5nLkNJUkNMRV9ERUZBVUxUX0xJTkVfU0laRTtcbiAgICBjdHguZmlsdGVyID0gXCJcIjtcblxuICAgIGlmKGZpbGwpIHtcbiAgICAgIGN0eC5maWxsU3R5bGUgPSBmaWxsQ29sb3IgfHwgQ29uc3RhbnRzLlNldHRpbmcuQ0lSQ0xFX0RFRkFVTFRfRklMTF9DT0xPUjtcbiAgICAgIGN0eC5zdHJva2VTdHlsZSA9IGNvbG9yIHx8IENvbnN0YW50cy5TZXR0aW5nLkNJUkNMRV9ERUZBVUxUX0NPTE9SO1xuICAgIH0gZWxzZSB7XG4gICAgICBjdHguc3Ryb2tlU3R5bGUgPSBjb2xvciB8fCBDb25zdGFudHMuU2V0dGluZy5DSVJDTEVfREVGQVVMVF9DT0xPUjtcbiAgICB9XG4gICAgXG4gICAgY3R4LmJlZ2luUGF0aCgpO1xuICAgIGN0eC5hcmMoeCArIHJhZGl1cyAvIDIsIHkgKyByYWRpdXMgLyAyLCByYWRpdXMgLyAyLCAwLCAyICogTWF0aC5QSSwgZmFsc2UpO1xuXG4gICAgaWYoZmlsbCkge1xuICAgICAgY3R4LmZpbGwoKTtcbiAgICAgIGN0eC5zdHJva2UoKTtcbiAgICB9IGVsc2Uge1xuICAgICAgY3R4LnN0cm9rZSgpO1xuICAgIH1cbiAgICBcbiAgICBjdHgucmVzdG9yZSgpO1xuICB9LFxuICBjbGVhcjogZnVuY3Rpb24oY3R4KSB7XG4gICAgY3R4LmNsZWFyUmVjdCgwLCAwLCB0aGlzLmdldENhbnZhc1dpZHRoKGN0eC5jYW52YXMpLCB0aGlzLmdldENhbnZhc0hlaWdodChjdHguY2FudmFzKSk7XG4gIH0sXG4gIGlzRmlsdGVySHVlQXZhaWxhYmxlOiBmdW5jdGlvbigpIHtcbiAgICBjb25zdCBjYW52YXMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiY2FudmFzXCIpO1xuICAgIGNhbnZhcy53aWR0aCA9IDU7XG4gICAgY2FudmFzLmhlaWdodCA9IDU7XG4gICAgY29uc3QgY3R4ID0gY2FudmFzLmdldENvbnRleHQoXCIyZFwiKTtcbiAgICBjdHguc2F2ZSgpO1xuICBcbiAgICBjdHguZmlsbFN0eWxlID0gXCIjRkYwMDAwXCI7XG4gICAgY3R4LmZpbHRlciA9IFwiaHVlLXJvdGF0ZSg5MGRlZylcIjtcbiAgICBjdHguZmlsbFJlY3QoMCwgMCwgNSwgNSk7XG4gICAgY29uc3QgY29sb3IgPSBjdHguZ2V0SW1hZ2VEYXRhKDAsIDAsIDEsIDEpLmRhdGE7XG4gICAgY3R4LnJlc3RvcmUoKTtcbiAgXG4gICAgaWYoY29sb3JbMF0gPT0gMjU1ICYmIGNvbG9yWzFdID09IDAgJiYgY29sb3JbMl0gPT0gMCkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgXG4gICAgcmV0dXJuIHRydWU7XG4gIH0sXG4gIGJsdXJDYW52YXM6IGZ1bmN0aW9uKGN0eCwgbGVuZ3RoKSB7XG4gICAgY3R4LnNhdmUoKTtcbiAgICBjdHguZmlsdGVyID0gXCJibHVyKFwiICsgbGVuZ3RoICArIFwicHgpXCI7XG4gICAgdGhpcy5kcmF3SW1hZ2VEYXRhKGN0eCwgY3R4LmNhbnZhcywgMCwgMCwgdGhpcy5nZXRDYW52YXNXaWR0aChjdHguY2FudmFzKSwgdGhpcy5nZXRDYW52YXNIZWlnaHQoY3R4LmNhbnZhcykpO1xuICAgIGN0eC5yZXN0b3JlKCk7XG4gIH0sXG4gIHBhcnNlTnVtYmVyOiBmdW5jdGlvbihzdHIpIHtcbiAgICByZXR1cm4gc3RyID8gcGFyc2VJbnQoc3RyLm1hdGNoKC9cXGQrLyksIDEwKSA6IDA7XG4gIH0sXG4gIGdldEZvbnRTaXplOiBmdW5jdGlvbihjdHgpIHtcbiAgICByZXR1cm4gTWF0aC5mbG9vcihwYXJzZU51bWJlcihjdHguZm9udCkgLyAxLjI1KTtcbiAgfSxcbiAgZ2V0Q2FudmFzV2lkdGgoY2FudmFzKSB7XG4gICAgcmV0dXJuIHRoaXMucGFyc2VOdW1iZXIoY2FudmFzLnN0eWxlLndpZHRoKSB8fCBjYW52YXMud2lkdGg7XG4gIH0sXG4gIGdldENhbnZhc0hlaWdodChjYW52YXMpIHtcbiAgICByZXR1cm4gdGhpcy5wYXJzZU51bWJlcihjYW52YXMuc3R5bGUuaGVpZ2h0KSB8fCBjYW52YXMuaGVpZ2h0O1xuICB9LFxuICBhdXRvRFBJKGNhbnZhcykge1xuICAgIGNvbnN0IHJlY3QgPSBjYW52YXMuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG5cbiAgICBjYW52YXMud2lkdGggPSByZWN0LndpZHRoICogQ29uc3RhbnRzLlNldHRpbmcuUElYRUxfUkFUSU87XG4gICAgY2FudmFzLmhlaWdodCA9IHJlY3QuaGVpZ2h0ICogQ29uc3RhbnRzLlNldHRpbmcuUElYRUxfUkFUSU87XG4gICAgXG4gICAgY2FudmFzLnN0eWxlLndpZHRoID0gcmVjdC53aWR0aCArIFwicHhcIjtcbiAgICBjYW52YXMuc3R5bGUuaGVpZ2h0ID0gIHJlY3QuaGVpZ2h0ICsgXCJweFwiO1xuICB9LFxuICBhdXRvUmVzaXplQ2FudmFzOiBmdW5jdGlvbihjYW52YXMsIGNvbnRhaW5lciwgaW5pdGlhbFdpZHRoLCBpbml0aWFsSGVpZ2h0KSB7XG4gICAgaWYoIWRvY3VtZW50LmZ1bGxzY3JlZW5FbGVtZW50KSB7XG4gICAgICBpZihpbml0aWFsV2lkdGggPj0gZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmNsaWVudFdpZHRoICogMC44NSkge1xuICAgICAgICB2YXIgcmF0aW8gPSBpbml0aWFsV2lkdGggLyBpbml0aWFsSGVpZ2h0O1xuICAgICAgICBjYW52YXMud2lkdGggPSBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuY2xpZW50V2lkdGggKiAwLjg1O1xuICAgICAgICBjYW52YXMuaGVpZ2h0ID0gY2FudmFzLndpZHRoIC8gcmF0aW87XG5cbiAgICAgICAgaWYoY2FudmFzLnN0eWxlKSB7XG4gICAgICAgICAgY2FudmFzLnN0eWxlLndpZHRoID0gY2FudmFzLndpZHRoICsgXCJweFwiO1xuICAgICAgICAgIGNhbnZhcy5zdHlsZS5oZWlnaHQgPSBjYW52YXMuaGVpZ2h0ICsgXCJweFwiO1xuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBjYW52YXMud2lkdGggPSBpbml0aWFsV2lkdGg7XG4gICAgICAgIGNhbnZhcy5oZWlnaHQgPSBpbml0aWFsSGVpZ2h0O1xuXG4gICAgICAgIGlmKGNhbnZhcy5zdHlsZSkge1xuICAgICAgICAgIGNhbnZhcy5zdHlsZS53aWR0aCA9IGluaXRpYWxXaWR0aCArIFwicHhcIjtcbiAgICAgICAgICBjYW52YXMuc3R5bGUuaGVpZ2h0ID0gaW5pdGlhbEhlaWdodCArIFwicHhcIjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0gZWxzZSBpZihkb2N1bWVudC5mdWxsc2NyZWVuRWxlbWVudCA9PSBjYW52YXMgfHwgZG9jdW1lbnQuZnVsbHNjcmVlbkVsZW1lbnQgPT0gY29udGFpbmVyKSB7XG4gICAgICBjYW52YXMud2lkdGggPSB3aW5kb3cuaW5uZXJXaWR0aDtcbiAgICAgIGNhbnZhcy5oZWlnaHQgPSB3aW5kb3cuaW5uZXJIZWlnaHQ7XG5cbiAgICAgIGlmKGNhbnZhcy5zdHlsZSkge1xuICAgICAgICBjYW52YXMuc3R5bGUud2lkdGggPSB3aW5kb3cuaW5uZXJXaWR0aCArIFwicHhcIjtcbiAgICAgICAgY2FudmFzLnN0eWxlLmhlaWdodCA9IHdpbmRvdy5pbm5lckhlaWdodCArIFwicHhcIjtcbiAgICAgIH1cblxuICAgICAgaWYoY29udGFpbmVyKSB7XG4gICAgICAgIGNvbnRhaW5lci53aWR0aCA9IHdpbmRvdy5pbm5lcldpZHRoO1xuICAgICAgICBjb250YWluZXIuaGVpZ2h0ID0gd2luZG93LmlubmVySGVpZ2h0O1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBjYW52YXMud2lkdGggPSBpbml0aWFsV2lkdGg7XG4gICAgICBjYW52YXMuaGVpZ2h0ID0gaW5pdGlhbEhlaWdodDtcblxuICAgICAgaWYoY2FudmFzLnN0eWxlKSB7XG4gICAgICAgIGNhbnZhcy5zdHlsZS53aWR0aCA9IGluaXRpYWxXaWR0aCArIFwicHhcIjtcbiAgICAgICAgY2FudmFzLnN0eWxlLmhlaWdodCA9IGluaXRpYWxIZWlnaHQgKyBcInB4XCI7XG4gICAgICB9XG4gICAgfVxuICB9LFxuICBlbmFibGVBdXRvUmVzaXplQ2FudmFzOiBmdW5jdGlvbihjYW52YXMsIGNvbnRhaW5lciwgaW5pdGlhbFdpZHRoLCBpbml0aWFsSGVpZ2h0KSB7XG4gICAgaWYoY2FudmFzICYmIGNhbnZhcy5nZXRBdHRyaWJ1dGUoXCJhdXRvcmVzaXplLWNhbnZhcy1ldmVudFwiKSAhPSBcInRydWVcIikge1xuICAgICAgdGhpcy5hdXRvUmVzaXplQ2FudmFzKGNhbnZhcywgY29udGFpbmVyLCBpbml0aWFsV2lkdGgsIGluaXRpYWxIZWlnaHQpO1xuICBcbiAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwicmVzaXplXCIsICgpID0+IHtcbiAgICAgICAgY2FudmFzLnNldEF0dHJpYnV0ZShcImF1dG9yZXNpemUtY2FudmFzLWV2ZW50XCIsIFwidHJ1ZVwiKTtcbiAgICAgICAgdGhpcy5hdXRvUmVzaXplQ2FudmFzKGNhbnZhcywgY29udGFpbmVyLCBpbml0aWFsV2lkdGgsIGluaXRpYWxIZWlnaHQpO1xuICAgICAgfSk7XG4gICAgfVxuICB9LFxuICBhdXRvUmVzaXplQ2FudmFzRnVsbHNjcmVlbjogZnVuY3Rpb24oY2FudmFzLCBjb250YWluZXIpIHtcbiAgICBpZihkb2N1bWVudC5mdWxsc2NyZWVuRWxlbWVudCA9PSBjYW52YXMgfHwgZG9jdW1lbnQuZnVsbHNjcmVlbkVsZW1lbnQgPT0gY29udGFpbmVyKSB7XG4gICAgICBjYW52YXMud2lkdGggPSB3aW5kb3cuaW5uZXJXaWR0aDtcbiAgICAgIGNhbnZhcy5oZWlnaHQgPSB3aW5kb3cuaW5uZXJIZWlnaHQ7XG5cbiAgICAgIGlmKGNhbnZhcy5zdHlsZSkge1xuICAgICAgICBjYW52YXMuc3R5bGUud2lkdGggPSB3aW5kb3cuaW5uZXJXaWR0aCArIFwicHhcIjtcbiAgICAgICAgY2FudmFzLnN0eWxlLmhlaWdodCA9IHdpbmRvdy5pbm5lckhlaWdodCArIFwicHhcIjtcbiAgICAgIH1cbiAgICAgIFxuICAgICAgaWYoY29udGFpbmVyKSB7XG4gICAgICAgIGNvbnRhaW5lci53aWR0aCA9IHdpbmRvdy5pbm5lcldpZHRoO1xuICAgICAgICBjb250YWluZXIuaGVpZ2h0ID0gd2luZG93LmlubmVySGVpZ2h0O1xuICAgICAgfVxuICAgIH1cbiAgfSxcbiAgZW5hYmxlQXV0b1Jlc2l6ZUNhbnZhc0Z1bGxzY3JlZW46IGZ1bmN0aW9uKGNhbnZhcywgY29udGFpbmVyKSB7XG4gICAgaWYoY2FudmFzICYmIGNhbnZhcy5nZXRBdHRyaWJ1dGUoXCJhdXRvcmVzaXplZnVsbHNjcmVlbi1jYW52YXMtZXZlbnRcIikgIT0gXCJ0cnVlXCIpIHtcbiAgICAgIHRoaXMuYXV0b1Jlc2l6ZUNhbnZhc0Z1bGxzY3JlZW4oY2FudmFzLCBjb250YWluZXIpO1xuICBcbiAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwicmVzaXplXCIsICgpID0+IHtcbiAgICAgICAgY2FudmFzLnNldEF0dHJpYnV0ZShcImF1dG9yZXNpemVmdWxsc2NyZWVuLWNhbnZhcy1ldmVudFwiLCBcInRydWVcIik7XG4gICAgICAgIHRoaXMuYXV0b1Jlc2l6ZUNhbnZhc0Z1bGxzY3JlZW4oY2FudmFzLCBjb250YWluZXIpO1xuICAgICAgfSk7XG4gICAgfVxuICB9LFxuICBhdXRvUmVzaXplQ2FudmFzRnVsbHBhZ2U6IGZ1bmN0aW9uKGNhbnZhcywgY29udGFpbmVyKSB7XG4gICAgaWYoY2FudmFzICYmIGNhbnZhcy5nZXRBdHRyaWJ1dGUoXCJmdWxscGFnZS1jYW52YXMtZW5hYmxlXCIpID09IFwidHJ1ZVwiKSB7XG4gICAgICBjYW52YXMud2lkdGggPSB3aW5kb3cuaW5uZXJXaWR0aDtcbiAgICAgIGNhbnZhcy5oZWlnaHQgPSB3aW5kb3cuaW5uZXJIZWlnaHQ7XG4gICAgICBcbiAgICAgIGlmKGNhbnZhcy5zdHlsZSkge1xuICAgICAgICBjYW52YXMuc3R5bGUud2lkdGggPSB3aW5kb3cuaW5uZXJXaWR0aCArIFwicHhcIjtcbiAgICAgICAgY2FudmFzLnN0eWxlLmhlaWdodCA9IHdpbmRvdy5pbm5lckhlaWdodCArIFwicHhcIjtcbiAgICAgIH1cbiAgICAgIFxuICAgICAgaWYoY29udGFpbmVyKSB7XG4gICAgICAgIGNvbnRhaW5lci53aWR0aCA9IHdpbmRvdy5pbm5lcldpZHRoO1xuICAgICAgICBjb250YWluZXIuaGVpZ2h0ID0gd2luZG93LmlubmVySGVpZ2h0O1xuICAgICAgICBjb250YWluZXIuc3R5bGUubWFyZ2luID0gMDtcbiAgICAgICAgY29udGFpbmVyLnN0eWxlLnBhZGRpbmcgPSAwO1xuICAgICAgfVxuXG4gICAgICBkb2N1bWVudC5ib2R5LnN0eWxlLm1hcmdpbiA9IDA7XG4gICAgICBkb2N1bWVudC5ib2R5LnN0eWxlLnBhZGRpbmcgPSAwO1xuICAgIH1cbiAgfSxcbiAgZW5hYmxlQXV0b1Jlc2l6ZUNhbnZhc0Z1bGxwYWdlOiBmdW5jdGlvbihjYW52YXMsIGNvbnRhaW5lcikge1xuICAgIGlmKGNhbnZhcyAmJiBjYW52YXMuZ2V0QXR0cmlidXRlKFwiYXV0b3Jlc2l6ZWZ1bGxwYWdlLWNhbnZhcy1ldmVudFwiKSAhPSBcInRydWVcIikge1xuICAgICAgdGhpcy5hdXRvUmVzaXplQ2FudmFzRnVsbHBhZ2UoY2FudmFzLCBjb250YWluZXIpO1xuICBcbiAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwicmVzaXplXCIsICgpID0+IHtcbiAgICAgICAgY2FudmFzLnNldEF0dHJpYnV0ZShcImF1dG9yZXNpemVmdWxscGFnZS1jYW52YXMtZXZlbnRcIiwgXCJ0cnVlXCIpO1xuICAgICAgICB0aGlzLmF1dG9SZXNpemVDYW52YXNGdWxscGFnZShjYW52YXMsIGNvbnRhaW5lcik7XG4gICAgICB9KTtcbiAgICB9XG4gIH0sXG4gIHRvZ2dsZUZ1bGxzY3JlZW46IGZ1bmN0aW9uKGNhbnZhcywgY29udGFpbmVyKSB7XG4gICAgaWYoY2FudmFzKSB7XG4gICAgICBjb25zdCBpbml0aWFsV2lkdGggPSBjYW52YXMud2lkdGg7XG4gICAgICBjb25zdCBpbml0aWFsSGVpZ2h0ID0gY2FudmFzLmhlaWdodDtcblxuICAgICAgaWYoY29udGFpbmVyKSB7XG4gICAgICAgIGNvbnRhaW5lci53aWR0aCA9IGluaXRpYWxXaWR0aDtcbiAgICAgICAgY29udGFpbmVyLmhlaWdodCA9IGluaXRpYWxIZWlnaHQ7XG4gICAgICB9XG5cbiAgICAgIGlmKCFkb2N1bWVudC5mdWxsc2NyZWVuRWxlbWVudCkge1xuICAgICAgICBpZigoY29udGFpbmVyIHx8IGNhbnZhcykucmVxdWVzdEZ1bGxzY3JlZW4pIHtcbiAgICAgICAgICAoY29udGFpbmVyIHx8IGNhbnZhcykucmVxdWVzdEZ1bGxzY3JlZW4oKTtcbiAgICAgICAgfSBlbHNlIGlmKChjb250YWluZXIgfHwgY2FudmFzKS5tb3pSZXF1ZXN0RnVsbFNjcmVlbikge1xuICAgICAgICAgIChjb250YWluZXIgfHwgY2FudmFzKS5tb3pSZXF1ZXN0RnVsbFNjcmVlbigpO1xuICAgICAgICB9IGVsc2UgaWYoKGNvbnRhaW5lciB8fCBjYW52YXMpLndlYmtpdFJlcXVlc3RGdWxsc2NyZWVuKSB7XG4gICAgICAgICAgKGNvbnRhaW5lciB8fCBjYW52YXMpLndlYmtpdFJlcXVlc3RGdWxsc2NyZWVuKCk7XG4gICAgICAgIH0gZWxzZSBpZigoY29udGFpbmVyIHx8IGNhbnZhcykubXNSZXF1ZXN0RnVsbHNjcmVlbikge1xuICAgICAgICAgIChjb250YWluZXIgfHwgY2FudmFzKS5tc1JlcXVlc3RGdWxsc2NyZWVuKCk7XG4gICAgICAgIH0gZWxzZSBpZigoY29udGFpbmVyIHx8IGNhbnZhcykub1JlcXVlc3RGdWxsc2NyZWVuKSB7XG4gICAgICAgICAgKGNvbnRhaW5lciB8fCBjYW52YXMpLm9SZXF1ZXN0RnVsbHNjcmVlbigpO1xuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBpZihkb2N1bWVudC5leGl0RnVsbHNjcmVlbikge1xuICAgICAgICAgIGRvY3VtZW50LmV4aXRGdWxsc2NyZWVuKCk7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgdGhpcy5lbmFibGVBdXRvUmVzaXplQ2FudmFzRnVsbHNjcmVlbihjYW52YXMsIGNvbnRhaW5lcik7XG5cbiAgICAgIGlmKGNhbnZhcy5nZXRBdHRyaWJ1dGUoXCJmdWxsc2NyZWVuY2hhbmdlLWNhbnZhcy1ldmVudFwiKSAhPSBcInRydWVcIikge1xuICAgICAgICBjYW52YXMuc2V0QXR0cmlidXRlKFwiZnVsbHNjcmVlbmNoYW5nZS1jYW52YXMtZXZlbnRcIiwgXCJ0cnVlXCIpO1xuXG4gICAgICAgIGNvbnN0IG9uZnVsbHNjcmVlbmNoYW5nZSA9ICgpID0+IHtcbiAgICAgICAgICBpZihkb2N1bWVudC5mdWxsc2NyZWVuRWxlbWVudCAhPSAoY29udGFpbmVyIHx8IGNhbnZhcykpIHtcbiAgICAgICAgICAgIGNhbnZhcy53aWR0aCA9IGluaXRpYWxXaWR0aDtcbiAgICAgICAgICAgIGNhbnZhcy5oZWlnaHQgPSBpbml0aWFsSGVpZ2h0O1xuICAgICAgXG4gICAgICAgICAgICBpZihjb250YWluZXIpIHtcbiAgICAgICAgICAgICAgY29udGFpbmVyLndpZHRoID0gaW5pdGlhbFdpZHRoO1xuICAgICAgICAgICAgICBjb250YWluZXIuaGVpZ2h0ID0gaW5pdGlhbEhlaWdodDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgXG4gICAgICAgIGlmKHR5cGVvZihkb2N1bWVudC5vbmZ1bGxzY3JlZW5jaGFuZ2UpICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgZG9jdW1lbnQub25mdWxsc2NyZWVuY2hhbmdlID0gb25mdWxsc2NyZWVuY2hhbmdlO1xuICAgICAgICB9IGVsc2UgaWYodHlwZW9mKGRvY3VtZW50Lm9ubXNmdWxsc2NyZWVuY2hhbmdlKSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGRvY3VtZW50Lm9ubXNmdWxsc2NyZWVuY2hhbmdlID0gb25mdWxsc2NyZWVuY2hhbmdlO1xuICAgICAgICB9IGVsc2UgaWYodHlwZW9mKGRvY3VtZW50Lm9ubW96ZnVsbHNjcmVlbmNoYW5nZSkgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBkb2N1bWVudC5vbm1vemZ1bGxzY3JlZW5jaGFuZ2UgPSBvbmZ1bGxzY3JlZW5jaGFuZ2U7XG4gICAgICAgIH0gZWxzZSBpZih0eXBlb2YoZG9jdW1lbnQub253ZWJraXRmdWxsc2NyZWVuY2hhbmdlKSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGRvY3VtZW50Lm9ud2Via2l0ZnVsbHNjcmVlbmNoYW5nZSA9IG9uZnVsbHNjcmVlbmNoYW5nZTtcbiAgICAgICAgfSBlbHNlIGlmKHR5cGVvZihkb2N1bWVudC5vbm9raXRmdWxsc2NyZWVuY2hhbmdlKSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGRvY3VtZW50Lm9ub2Z1bGxzY3JlZW5jaGFuZ2UgPSBvbmZ1bGxzY3JlZW5jaGFuZ2U7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH0sXG4gIHRvZ2dsZUZ1bGxwYWdlOiBmdW5jdGlvbihjYW52YXMsIGNvbnRhaW5lcikge1xuICAgIGlmKGNhbnZhcykge1xuICAgICAgY29uc3QgaW5pdGlhbFdpZHRoID0gY2FudmFzLndpZHRoO1xuICAgICAgY29uc3QgaW5pdGlhbEhlaWdodCA9IGNhbnZhcy5oZWlnaHQ7XG5cbiAgICAgIGlmKGNvbnRhaW5lcikge1xuICAgICAgICBjb250YWluZXIud2lkdGggPSBpbml0aWFsV2lkdGg7XG4gICAgICAgIGNvbnRhaW5lci5oZWlnaHQgPSBpbml0aWFsSGVpZ2h0O1xuICAgICAgfVxuXG4gICAgICBpZighY2FudmFzLmdldEF0dHJpYnV0ZShcImZ1bGxwYWdlLWNhbnZhcy1lbmFibGVcIikgfHwgY2FudmFzLmdldEF0dHJpYnV0ZShcImZ1bGxwYWdlLWNhbnZhcy1lbmFibGVcIikgPT0gXCJmYWxzZVwiKSB7XG4gICAgICAgIGNhbnZhcy5zZXRBdHRyaWJ1dGUoXCJmdWxscGFnZS1jYW52YXMtZW5hYmxlXCIsIFwidHJ1ZVwiKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGNhbnZhcy5zZXRBdHRyaWJ1dGUoXCJmdWxscGFnZS1jYW52YXMtZW5hYmxlXCIsIFwiZmFsc2VcIik7XG4gICAgICB9XG5cbiAgICAgIHRoaXMuZW5hYmxlQXV0b1Jlc2l6ZUNhbnZhc0Z1bGxwYWdlKGNhbnZhcywgY29udGFpbmVyKTtcbiAgICB9XG4gIH0sXG4gIGdldE1vdXNlUG9zKGNhbnZhcywgZXZlbnQpIHtcbiAgICBjb25zdCByZWN0ID0gY2FudmFzLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuICAgIFxuICAgIHJldHVybiB7XG4gICAgICB4OiBldmVudC5jbGllbnRYIC0gcmVjdC5sZWZ0LFxuICAgICAgeTogZXZlbnQuY2xpZW50WSAtIHJlY3QudG9wXG4gICAgfTtcbiAgfVxufTsiLCIvKlxuICogQ29weXJpZ2h0IChDKSAyMDIwIEVsaWFzdGlrIChlbGlhc3Rpa3NvZnRzLmNvbSlcbiAqXG4gKiBUaGlzIGZpbGUgaXMgcGFydCBvZiBcIkpTR2FtZVRvb2xzXCIuXG4gKlxuICogXCJKU0dhbWVUb29sc1wiIGlzIGZyZWUgc29mdHdhcmU6IHlvdSBjYW4gcmVkaXN0cmlidXRlIGl0IGFuZC9vciBtb2RpZnlcbiAqIGl0IHVuZGVyIHRoZSB0ZXJtcyBvZiB0aGUgR05VIEdlbmVyYWwgUHVibGljIExpY2Vuc2UgYXMgcHVibGlzaGVkIGJ5XG4gKiB0aGUgRnJlZSBTb2Z0d2FyZSBGb3VuZGF0aW9uLCBlaXRoZXIgdmVyc2lvbiAzIG9mIHRoZSBMaWNlbnNlLCBvclxuICogKGF0IHlvdXIgb3B0aW9uKSBhbnkgbGF0ZXIgdmVyc2lvbi5cbiAqXG4gKiBcIkpTR2FtZVRvb2xzXCIgaXMgZGlzdHJpYnV0ZWQgaW4gdGhlIGhvcGUgdGhhdCBpdCB3aWxsIGJlIHVzZWZ1bCxcbiAqIGJ1dCBXSVRIT1VUIEFOWSBXQVJSQU5UWTsgd2l0aG91dCBldmVuIHRoZSBpbXBsaWVkIHdhcnJhbnR5IG9mXG4gKiBNRVJDSEFOVEFCSUxJVFkgb3IgRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UuICBTZWUgdGhlXG4gKiBHTlUgR2VuZXJhbCBQdWJsaWMgTGljZW5zZSBmb3IgbW9yZSBkZXRhaWxzLlxuICpcbiAqIFlvdSBzaG91bGQgaGF2ZSByZWNlaXZlZCBhIGNvcHkgb2YgdGhlIEdOVSBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlXG4gKiBhbG9uZyB3aXRoIFwiSlNHYW1lVG9vbHNcIi4gIElmIG5vdCwgc2VlIDxodHRwOi8vd3d3LmdudS5vcmcvbGljZW5zZXMvPi5cbiAqL1xuaW1wb3J0IENvbnN0YW50cyBmcm9tIFwiLi9Db25zdGFudHNcIjtcbmltcG9ydCBCdXR0b24gZnJvbSBcIi4vQnV0dG9uXCI7XG5pbXBvcnQgQnV0dG9uSW1hZ2UgZnJvbSBcIi4vQnV0dG9uSW1hZ2VcIjtcbmltcG9ydCBJbWFnZUxvYWRlciBmcm9tIFwiLi9JbWFnZUxvYWRlclwiO1xuaW1wb3J0IE5vdGlmaWNhdGlvbk1lc3NhZ2UgZnJvbSBcIi4vTm90aWZpY2F0aW9uTWVzc2FnZVwiO1xuaW1wb3J0IFV0aWxzIGZyb20gXCIuL1V0aWxzXCI7XG5pbXBvcnQgTWVudSBmcm9tIFwiLi9NZW51XCI7XG5pbXBvcnQgSW5wdXQgZnJvbSBcIi4vSW5wdXRcIjtcbmltcG9ydCBMYWJlbCBmcm9tIFwiLi9MYWJlbFwiO1xuaW1wb3J0IExpbmsgZnJvbSBcIi4vTGlua1wiO1xuaW1wb3J0IFRvb2x0aXAgZnJvbSBcIi4vVG9vbHRpcFwiO1xuaW1wb3J0IFNjZW5lIGZyb20gXCIuL1NjZW5lXCI7XG5pbXBvcnQgRlBTTWV0ZXIgZnJvbSBcIi4vRlBTTWV0ZXJcIjtcbmltcG9ydCBQcm9ncmVzc0JhciBmcm9tIFwiLi9Qcm9ncmVzc0JhclwiO1xuaW1wb3J0IENhbnZhcyBmcm9tIFwiLi9DYW52YXNcIjtcbmltcG9ydCBDb21wb25lbnQgZnJvbSBcIi4vQ29tcG9uZW50XCI7XG5pbXBvcnQgRWFzaW5nRnVuY3Rpb25zIGZyb20gXCIuL0Vhc2luZ0Z1bmN0aW9uc1wiO1xuaW1wb3J0IENvbCBmcm9tIFwiLi9Db2xcIjtcbmltcG9ydCBDb250YWluZXIgZnJvbSBcIi4vQ29udGFpbmVyXCI7XG5pbXBvcnQgUm93IGZyb20gXCIuL1Jvd1wiO1xuaW1wb3J0IEltYWdlQ29udGFpbmVyIGZyb20gXCIuL0ltYWdlQ29udGFpbmVyXCI7XG5pbXBvcnQgQXJyb3cgZnJvbSBcIi4vQXJyb3dcIjtcbmltcG9ydCBDcm9zcyBmcm9tIFwiLi9Dcm9zc1wiO1xuaW1wb3J0IFNjcm9sbGJhciBmcm9tIFwiLi9TY3JvbGxiYXJcIjtcbmltcG9ydCBTY3JvbGxiYXJWZXJ0aWNhbCBmcm9tIFwiLi9TY3JvbGxiYXJWZXJ0aWNhbFwiO1xuaW1wb3J0IFNjcm9sbGJhckhvcml6b250YWwgZnJvbSBcIi4vU2Nyb2xsYmFySG9yaXpvbnRhbFwiO1xuaW1wb3J0IEJveCBmcm9tIFwiLi9Cb3hcIjtcbmltcG9ydCBTdHlsZSBmcm9tIFwiLi9TdHlsZVwiO1xuaW1wb3J0IFNlbGVjdCBmcm9tIFwiLi9TZWxlY3RcIjtcbmltcG9ydCBTZWxlY3RPcHRpb24gZnJvbSBcIi4vU2VsZWN0T3B0aW9uXCI7XG5pbXBvcnQgU2VsZWN0T3B0aW9uc0NvbnRhaW5lciBmcm9tIFwiLi9TZWxlY3RPcHRpb25zQ29udGFpbmVyXCI7XG5pbXBvcnQgVHJpYW5nbGUgZnJvbSBcIi4vVHJpYW5nbGVcIjtcbmltcG9ydCBDaXJjbGUgZnJvbSBcIi4vQ2lyY2xlXCI7XG5pbXBvcnQgUmVhY3RvciBmcm9tIFwiLi9SZWFjdG9yXCI7XG5pbXBvcnQgRXZlbnQgZnJvbSBcIi4vRXZlbnRcIjtcbmltcG9ydCBSZWFjdG9yQ2FudmFzIGZyb20gXCIuL1JlYWN0b3JDYW52YXNcIjtcbmltcG9ydCBFcnJvclNjcmVlbiBmcm9tIFwiLi9FcnJvclNjcmVlblwiO1xuXG5leHBvcnQgeyBDb25zdGFudHMsIEJ1dHRvbiwgQnV0dG9uSW1hZ2UsIEltYWdlTG9hZGVyLCBOb3RpZmljYXRpb25NZXNzYWdlLCBVdGlscywgTWVudSwgSW5wdXQsIExhYmVsLCBMaW5rLCBUb29sdGlwLCBTY2VuZSwgRlBTTWV0ZXIsIFByb2dyZXNzQmFyLCBDYW52YXMsIENvbXBvbmVudCwgRWFzaW5nRnVuY3Rpb25zLCBDb2wsIENvbnRhaW5lciwgUm93LCBJbWFnZUNvbnRhaW5lciwgQXJyb3csIENyb3NzLCBTY3JvbGxiYXIsIFNjcm9sbGJhclZlcnRpY2FsLCBTY3JvbGxiYXJIb3Jpem9udGFsLCBCb3gsIFN0eWxlLCBTZWxlY3QsIFNlbGVjdE9wdGlvbiwgU2VsZWN0T3B0aW9uc0NvbnRhaW5lciwgVHJpYW5nbGUsIENpcmNsZSwgUmVhY3RvciwgRXZlbnQsIFJlYWN0b3JDYW52YXMsIEVycm9yU2NyZWVuIH07Il0sInNvdXJjZVJvb3QiOiIifQ==