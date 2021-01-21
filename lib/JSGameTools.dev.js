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

          var rect = _this2.canvas.getBoundingClientRect();

          _this2.canvas.width = rect.width * _Constants__WEBPACK_IMPORTED_MODULE_5__["default"].Setting.PIXEL_RATIO;
          _this2.canvas.height = rect.height * _Constants__WEBPACK_IMPORTED_MODULE_5__["default"].Setting.PIXEL_RATIO;
          _this2.canvas.style.width = rect.width + "px";
          _this2.canvas.style.height = rect.height + "px";

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
      }

      if (_babel_runtime_helpers_get__WEBPACK_IMPORTED_MODULE_3___default()(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6___default()(Col.prototype), "components", this) != null) {
        var currentY = this.style.padding;

        _babel_runtime_helpers_get__WEBPACK_IMPORTED_MODULE_3___default()(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6___default()(Col.prototype), "components", this).forEach(function (component) {
          currentY = _this2.drawComponent(component, currentY, ctxTemp);
        });
      }

      if (this.isCutting) {
        _Utils__WEBPACK_IMPORTED_MODULE_12__["default"].drawImageData(ctx, this.canvasTmp, this.x, this.y, this.width, this.height, this.x, this.y, this.width, this.height);
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
        this.canvasTmp.width = _Utils__WEBPACK_IMPORTED_MODULE_17__["default"].getCanvasWidth(canvas);
        this.canvasTmp.height = _Utils__WEBPACK_IMPORTED_MODULE_17__["default"].getCanvasHeight(canvas);
        _Utils__WEBPACK_IMPORTED_MODULE_17__["default"].clear(this.canvasTmp.getContext("2d"));
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
      this.canvasTmp.width = canvas.width;
      this.canvasTmp.height = canvas.height;
      var ctxText = this.canvasTmp.getContext("2d");
      _Utils__WEBPACK_IMPORTED_MODULE_11__["default"].clear(ctxText);
      this.updateTextCache(this.x + 5);
      this.autoScroll();
      this.drawText(ctxText, this.x + 5);
      _Utils__WEBPACK_IMPORTED_MODULE_11__["default"].drawImageData(ctx, this.canvasTmp, this.x + this.style.borderSize, this.y + this.style.borderSize, this.width - this.style.borderSize * 2, this.height - this.style.borderSize * 2, this.x + this.style.borderSize, this.y + this.style.borderSize, this.width - this.style.borderSize * 2, this.height - this.style.borderSize * 2);

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
      }

      if (_babel_runtime_helpers_get__WEBPACK_IMPORTED_MODULE_3___default()(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6___default()(Row.prototype), "components", this) != null) {
        var currentX = this.style.padding;

        _babel_runtime_helpers_get__WEBPACK_IMPORTED_MODULE_3___default()(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6___default()(Row.prototype), "components", this).forEach(function (component) {
          currentX = _this2.drawComponent(component, currentX, ctxTemp);
        });
      }

      if (this.isCutting) {
        _Utils__WEBPACK_IMPORTED_MODULE_12__["default"].drawImageData(ctx, this.canvasTmp, this.x, this.y, this.width, this.height, this.x, this.y, this.width, this.height);
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
  autoResizeCanvas: function autoResizeCanvas(canvas, container, initialWidth, initialHeight) {
    if (!document.fullscreenElement) {
      if (initialWidth >= document.documentElement.clientWidth * 0.85) {
        var ratio = initialWidth / initialHeight;
        canvas.width = document.documentElement.clientWidth * 0.85;
        canvas.height = canvas.width / ratio;

        if (canvas.style) {
          canvas.style.width = canvas.width;
          canvas.style.height = canvas.height;
        }
      } else {
        canvas.width = initialWidth;
        canvas.height = initialHeight;

        if (canvas.style) {
          canvas.style.width = initialWidth;
          canvas.style.height = initialHeight;
        }
      }
    } else if (document.fullscreenElement == canvas || document.fullscreenElement == container) {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;

      if (canvas.style) {
        canvas.style.width = window.innerWidth;
        canvas.style.height = window.innerHeight;
      }

      if (container) {
        container.width = window.innerWidth;
        container.height = window.innerHeight;
      }
    } else {
      canvas.width = initialWidth;
      canvas.height = initialHeight;

      if (canvas.style) {
        canvas.style.width = initialWidth;
        canvas.style.height = initialHeight;
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
        canvas.style.width = window.innerWidth;
        canvas.style.height = window.innerHeight;
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
        canvas.style.width = window.innerWidth;
        canvas.style.height = window.innerHeight;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9KU0dhbWVUb29scy93ZWJwYWNrL3VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24iLCJ3ZWJwYWNrOi8vSlNHYW1lVG9vbHMvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vSlNHYW1lVG9vbHMvLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9hcnJheUxpa2VUb0FycmF5LmpzIiwid2VicGFjazovL0pTR2FtZVRvb2xzLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvYXJyYXlXaXRob3V0SG9sZXMuanMiLCJ3ZWJwYWNrOi8vSlNHYW1lVG9vbHMvLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQuanMiLCJ3ZWJwYWNrOi8vSlNHYW1lVG9vbHMvLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9jbGFzc0NhbGxDaGVjay5qcyIsIndlYnBhY2s6Ly9KU0dhbWVUb29scy8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2NsYXNzUHJpdmF0ZUZpZWxkR2V0LmpzIiwid2VicGFjazovL0pTR2FtZVRvb2xzLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvY2xhc3NQcml2YXRlRmllbGRTZXQuanMiLCJ3ZWJwYWNrOi8vSlNHYW1lVG9vbHMvLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9jb25zdHJ1Y3QuanMiLCJ3ZWJwYWNrOi8vSlNHYW1lVG9vbHMvLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9jcmVhdGVDbGFzcy5qcyIsIndlYnBhY2s6Ly9KU0dhbWVUb29scy8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2RlZmluZVByb3BlcnR5LmpzIiwid2VicGFjazovL0pTR2FtZVRvb2xzLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZ2V0LmpzIiwid2VicGFjazovL0pTR2FtZVRvb2xzLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZ2V0UHJvdG90eXBlT2YuanMiLCJ3ZWJwYWNrOi8vSlNHYW1lVG9vbHMvLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9pbmhlcml0cy5qcyIsIndlYnBhY2s6Ly9KU0dhbWVUb29scy8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2lzTmF0aXZlUmVmbGVjdENvbnN0cnVjdC5qcyIsIndlYnBhY2s6Ly9KU0dhbWVUb29scy8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2l0ZXJhYmxlVG9BcnJheS5qcyIsIndlYnBhY2s6Ly9KU0dhbWVUb29scy8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL25vbkl0ZXJhYmxlU3ByZWFkLmpzIiwid2VicGFjazovL0pTR2FtZVRvb2xzLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvcG9zc2libGVDb25zdHJ1Y3RvclJldHVybi5qcyIsIndlYnBhY2s6Ly9KU0dhbWVUb29scy8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL3NldC5qcyIsIndlYnBhY2s6Ly9KU0dhbWVUb29scy8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL3NldFByb3RvdHlwZU9mLmpzIiwid2VicGFjazovL0pTR2FtZVRvb2xzLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvc3VwZXJQcm9wQmFzZS5qcyIsIndlYnBhY2s6Ly9KU0dhbWVUb29scy8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL3RvQ29uc3VtYWJsZUFycmF5LmpzIiwid2VicGFjazovL0pTR2FtZVRvb2xzLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvdHlwZW9mLmpzIiwid2VicGFjazovL0pTR2FtZVRvb2xzLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvdW5zdXBwb3J0ZWRJdGVyYWJsZVRvQXJyYXkuanMiLCJ3ZWJwYWNrOi8vSlNHYW1lVG9vbHMvLi9zcmMvQXJyb3cuanMiLCJ3ZWJwYWNrOi8vSlNHYW1lVG9vbHMvLi9zcmMvQm94LmpzIiwid2VicGFjazovL0pTR2FtZVRvb2xzLy4vc3JjL0J1dHRvbi5qcyIsIndlYnBhY2s6Ly9KU0dhbWVUb29scy8uL3NyYy9CdXR0b25JbWFnZS5qcyIsIndlYnBhY2s6Ly9KU0dhbWVUb29scy8uL3NyYy9DYW52YXMuanMiLCJ3ZWJwYWNrOi8vSlNHYW1lVG9vbHMvLi9zcmMvQ2lyY2xlLmpzIiwid2VicGFjazovL0pTR2FtZVRvb2xzLy4vc3JjL0NvbC5qcyIsIndlYnBhY2s6Ly9KU0dhbWVUb29scy8uL3NyYy9Db21wb25lbnQuanMiLCJ3ZWJwYWNrOi8vSlNHYW1lVG9vbHMvLi9zcmMvQ29uc3RhbnRzLmpzIiwid2VicGFjazovL0pTR2FtZVRvb2xzLy4vc3JjL0NvbnRhaW5lci5qcyIsIndlYnBhY2s6Ly9KU0dhbWVUb29scy8uL3NyYy9Dcm9zcy5qcyIsIndlYnBhY2s6Ly9KU0dhbWVUb29scy8uL3NyYy9FYXNpbmdGdW5jdGlvbnMuanMiLCJ3ZWJwYWNrOi8vSlNHYW1lVG9vbHMvLi9zcmMvRXZlbnQuanMiLCJ3ZWJwYWNrOi8vSlNHYW1lVG9vbHMvLi9zcmMvRlBTTWV0ZXIuanMiLCJ3ZWJwYWNrOi8vSlNHYW1lVG9vbHMvLi9zcmMvSW1hZ2VDb250YWluZXIuanMiLCJ3ZWJwYWNrOi8vSlNHYW1lVG9vbHMvLi9zcmMvSW1hZ2VMb2FkZXIuanMiLCJ3ZWJwYWNrOi8vSlNHYW1lVG9vbHMvLi9zcmMvSW5wdXQuanMiLCJ3ZWJwYWNrOi8vSlNHYW1lVG9vbHMvLi9zcmMvTGFiZWwuanMiLCJ3ZWJwYWNrOi8vSlNHYW1lVG9vbHMvLi9zcmMvTGluay5qcyIsIndlYnBhY2s6Ly9KU0dhbWVUb29scy8uL3NyYy9NZW51LmpzIiwid2VicGFjazovL0pTR2FtZVRvb2xzLy4vc3JjL05vdGlmaWNhdGlvbk1lc3NhZ2UuanMiLCJ3ZWJwYWNrOi8vSlNHYW1lVG9vbHMvLi9zcmMvUHJvZ3Jlc3NCYXIuanMiLCJ3ZWJwYWNrOi8vSlNHYW1lVG9vbHMvLi9zcmMvUmVhY3Rvci5qcyIsIndlYnBhY2s6Ly9KU0dhbWVUb29scy8uL3NyYy9SZWFjdG9yQ2FudmFzLmpzIiwid2VicGFjazovL0pTR2FtZVRvb2xzLy4vc3JjL1Jvdy5qcyIsIndlYnBhY2s6Ly9KU0dhbWVUb29scy8uL3NyYy9TY2VuZS5qcyIsIndlYnBhY2s6Ly9KU0dhbWVUb29scy8uL3NyYy9TY3JvbGxiYXIuanMiLCJ3ZWJwYWNrOi8vSlNHYW1lVG9vbHMvLi9zcmMvU2Nyb2xsYmFySG9yaXpvbnRhbC5qcyIsIndlYnBhY2s6Ly9KU0dhbWVUb29scy8uL3NyYy9TY3JvbGxiYXJWZXJ0aWNhbC5qcyIsIndlYnBhY2s6Ly9KU0dhbWVUb29scy8uL3NyYy9TZWxlY3QuanMiLCJ3ZWJwYWNrOi8vSlNHYW1lVG9vbHMvLi9zcmMvU2VsZWN0T3B0aW9uLmpzIiwid2VicGFjazovL0pTR2FtZVRvb2xzLy4vc3JjL1NlbGVjdE9wdGlvbnNDb250YWluZXIuanMiLCJ3ZWJwYWNrOi8vSlNHYW1lVG9vbHMvLi9zcmMvU3R5bGUuanMiLCJ3ZWJwYWNrOi8vSlNHYW1lVG9vbHMvLi9zcmMvVG9vbHRpcC5qcyIsIndlYnBhY2s6Ly9KU0dhbWVUb29scy8uL3NyYy9UcmlhbmdsZS5qcyIsIndlYnBhY2s6Ly9KU0dhbWVUb29scy8uL3NyYy9VdGlscy5qcyIsIndlYnBhY2s6Ly9KU0dhbWVUb29scy8uL3NyYy9pbmRleC5qcyJdLCJuYW1lcyI6WyJBcnJvdyIsIngiLCJ5IiwidG9YIiwidG9ZIiwic3R5bGUiLCJjb250ZXh0IiwiaGlkZGVuIiwiY2FudmFzIiwiY3R4IiwiZ2V0Q29udGV4dCIsIlV0aWxzIiwiZHJhd0Fycm93IiwibGluZVdpZHRoIiwiaGVhZFNpemUiLCJjb2xvciIsImxpbmVDYXAiLCJpbml0IiwiTWF0aCIsImFicyIsIlN0eWxlIiwiQ29uc3RhbnRzIiwiU2V0dGluZyIsIkFSUk9XX0RFRkFVTFRfTElORV9TSVpFIiwiQVJST1dfREVGQVVMVF9IRUFEX1NJWkUiLCJBUlJPV19ERUZBVUxUX0NPTE9SIiwiQVJST1dfREVGQVVMVF9MSU5FX0NBUCIsIkNvbXBvbmVudCIsIkJveCIsIndpZHRoIiwiaGVpZ2h0Iiwic2F2ZSIsImRyYXdCYWNrZ3JvdW5kIiwiZHJhd0JvcmRlciIsInJlc3RvcmUiLCJiYWNrZ3JvdW5kQ29sb3IiLCJmaWxsU3R5bGUiLCJmaWxsUmVjdCIsInJvdW5kIiwiYm9yZGVyQ29sb3IiLCJib3JkZXJTaXplIiwic3Ryb2tlU3R5bGUiLCJzdHJva2VSZWN0IiwiaG92ZXJlZCIsImNsaWNrZWQiLCJiYWNrZ3JvdW5kQ29sb3JEb3duIiwiYmFja2dyb3VuZENvbG9ySG92ZXIiLCJib3JkZXJDb2xvckRvd24iLCJib3JkZXJDb2xvckhvdmVyIiwic2VsZWN0YWJsZSIsInNlbGVjdGVkIiwiYm9yZGVyQ29sb3JTZWxlY3RlZCIsIkJ1dHRvbiIsIm1heFdpZHRoIiwibWF4SGVpZ2h0IiwiY29tcG9uZW50cyIsImRyYXdDb21wb25lbnRzIiwicGFkZGluZyIsIkJVVFRPTl9ERUZBVUxUX0JBQ0tHUk9VTkQiLCJCVVRUT05fREVGQVVMVF9IT1ZFUl9CQUNLR1JPVU5EIiwiQlVUVE9OX0RFRkFVTFRfQ0xJQ0tfQkFDS0dST1VORCIsIlJvdyIsIkJ1dHRvbkltYWdlIiwiaW1nU3JjIiwiYWxpZ25lbWVudCIsInZlcnRpY2FsQWxpZ25lbWVudCIsImltYWdlTG9hZGVyIiwiaW1hZ2UiLCJJbWFnZUNvbnRhaW5lciIsImFkZCIsImNvbnNvbGUiLCJ3YXJuIiwiU3RyaW5nIiwiTk9USUNFX01FU1NBR0UiLCJCVVRUT05fSU1BR0VfREVQUkVDQVRFRCIsImxvYWRJbWFnZSIsIm1pbldpZHRoIiwibWluSGVpZ2h0IiwiQ2FudmFzIiwic2NlbmUiLCJhdXRvUmVzaXplIiwibWF4RlBTIiwiZG9jdW1lbnQiLCJjcmVhdGVFbGVtZW50IiwiY29udGFpbmVyIiwiQ0FOVkFTX1dJRFRIIiwiQ0FOVkFTX0hFSUdIVCIsImFwcGVuZENoaWxkIiwic3RhcnRlZCIsImhhc0Vycm9yIiwiZnVsbHNjcmVlbiIsImZ1bGxwYWdlIiwiYnV0dG9uU2NlbmVFcnJvciIsIkJVVFRPTl9ERUZBVUxUX0FMVEVSTkFUSVZFX0JBQ0tHUk9VTkQiLCJMYWJlbCIsIlJFVFJZIiwibWVudVNjZW5lRXJyb3IiLCJNZW51IiwiRVJST1JfTUVTU0FHRV9DQU5WQVNfTEFCRUwiLCJlbmFibGUiLCJzY2VuZUVycm9yIiwiU2NlbmUiLCJzY2VuZVByZXZpb3VzIiwiYWRkQ2xpY2tBY3Rpb24iLCJyZWFjdG9yIiwiUmVhY3RvckNhbnZhcyIsInJlZ2lzdGVyRXZlbnQiLCJjcmVhdGVFdmVudHMiLCJESVNBQkxFX09QVElNSVpBVElPTlMiLCJpbmZvIiwiT1BUSU1JWkFUSU9OX0RJU0FCTEVEIiwiRElTQUJMRV9DT05UQUlORVJTX0NVVFRJTkciLCJDT05UQUlORVJfQ1VUVElOR19ESVNBQkxFRCIsImRyYXdDbGVhciIsImRyYXdTY2VuZSIsInBhcmVudCIsInNjYWxlIiwiUElYRUxfUkFUSU8iLCJkcmF3IiwiZSIsImVycm9yIiwiRVJST1JfTUVTU0FHRSIsIkVSUk9SX01FU1NBR0VfQ0FOVkFTIiwiY2xlYXIiLCJmdW5jIiwicmVxdWVzdEFuaW1hdGlvbkZyYW1lIiwidGltZSIsIm9mZnNldEZyYW1lIiwiZnVsbHNjcmVlbkVsZW1lbnQiLCJFTkFCTEVfUElYRUxfUkFUSU9fUkVTSVpJTkciLCJ3aW5kb3ciLCJkZXZpY2VQaXhlbFJhdGlvIiwicmVjdCIsImdldEJvdW5kaW5nQ2xpZW50UmVjdCIsInN0YXJ0RHJhdyIsImVsZW1lbnQiLCJyZW1vdmVDaGlsZCIsInRvZ2dsZUZ1bGxzY3JlZW4iLCJ0b2dnbGVGdWxscGFnZSIsImVuYWJsZUF1dG9SZXNpemVDYW52YXMiLCJmb3JFYWNoIiwiZXZlbnROYW1lIiwiYWRkRXZlbnRMaXN0ZW5lciIsImV2ZW50IiwibW91c2VQb3NpdGlvbiIsImdldE1vdXNlUG9zIiwiZG9FdmVudHMiLCJwcmV2ZW50RGVmYXVsdCIsImNoYW5nZWRUb3VjaGVzIiwicG9zaXRpb24iLCJnZXRDb21wb25lbnRzQXRQb3NpdGlvbiIsImRpc3BhdGNoRXZlbnQiLCJyZXZlcnNlIiwiY29tcG9uZW50IiwiZGlzcGF0Y2hFdmVudENvbXBvbmVudCIsImNhbGxiYWNrIiwic3RhcnQiLCJnZXRBbGxDb21wb25lbnRzIiwiYWxsQ29tcG9uZW50cyIsImdldENvbXBvbmVudHNUcmVlIiwicmVzdWx0IiwiY2hpbGRzIiwic29ydCIsInNvcnRDb21wb25lbnRzVHJlZSIsInNvbWUiLCJjaGlsZCIsImlzSW5zaWRlIiwiZGlzYWJsZWQiLCJwdXNoIiwiZ2V0Q2FudmFzV2lkdGgiLCJnZXRDYW52YXNIZWlnaHQiLCJDaXJjbGUiLCJkcmF3Q2lyY2xlIiwiZmlsbCIsImZpbGxDb2xvciIsIkNJUkNMRV9ERUZBVUxUX0xJTkVfU0laRSIsIkNJUkNMRV9ERUZBVUxUX0NPTE9SIiwiQ0lSQ0xFX0RFRkFVTFRfRklMTCIsIkNJUkNMRV9ERUZBVUxUX0xJTkVfQ0FQIiwiQ0lSQ0xFX0RFRkFVTFRfRklMTF9DT0xPUiIsIkNvbCIsIkRJU0FCTEVfRVhQRVJJTUVOVEFMX09QVElNSVpBVElPTlMiLCJ1cGRhdGVJbm5lcldpZHRoIiwidXBkYXRlSW5uZXJIZWlnaHQiLCJhZGRDaGFuZ2VBY3Rpb24iLCJjdHhUZW1wIiwiaXNDdXR0aW5nIiwiY2FudmFzVG1wIiwiY3VycmVudFkiLCJkcmF3Q29tcG9uZW50IiwiZHJhd0ltYWdlRGF0YSIsIm9mZnNldFNjcm9sbFgiLCJvZmZzZXRTY3JvbGxZIiwiaXNDb21wb25lbnRWaXNpYmxlIiwiZGlzYWJsZSIsInNwYWNlQmV0d2VlbkNvbXBvbmVudHMiLCJ0b3RhbEhlaWdodCIsImxlbmd0aCIsImlubmVyV2lkdGgiLCJtaW4iLCJtYXgiLCJpbm5lckhlaWdodCIsIkNvbnRhaW5lciIsIlJlYWN0b3IiLCJoYXNJbml0RXZlbnRzIiwib2Zmc2V0TW92ZVgiLCJvZmZzZXRNb3ZlWSIsIm1vdmVFdmVudFN0YXJ0WCIsIm1vdmVFdmVudFN0YXJ0WSIsInRvdWNoRXZlbnRTdGFydFgiLCJ0b3VjaEV2ZW50U3RhcnRZIiwidG91Y2hFdmVudFN0YXJ0VGltZXN0YW1wIiwidG9vbHRpcCIsImluaXRFdmVudHMiLCJkZWx0YVgiLCJtb3ZlbWVudFgiLCJkZWx0YVkiLCJtb3ZlbWVudFkiLCJzY3JvbGxEaXNhYmxlZCIsInRvdWNoU2Nyb2xsRXZlbnQiLCJ0b3VjaFN0YXJ0RW5kRXZlbnQiLCJ0aW1lc3RhbXAiLCJwb3MiLCJ0cmlnZ2VyIiwicmVtb3ZlQWxsQ2xpY2tBY3Rpb25zIiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsInJlbW92ZUFsbEV2ZW50TGlzdGVuZXIiLCJyZW1vdmVBbGxIb3ZlckFjdGlvbnMiLCJhZGRIb3ZlckFjdGlvbiIsInJlbW92ZUFsbERvd25BY3Rpb25zIiwiYWRkRG93bkFjdGlvbiIsInJlbW92ZUFsbFNjcm9sbEFjdGlvbnMiLCJhZGRTY3JvbGxBY3Rpb24iLCJyZW1vdmVBbGxNb3ZlQWN0aW9ucyIsImFkZE1vdmVBY3Rpb24iLCJyZW1vdmVBbGxDaGFuZ2VBY3Rpb25zIiwicmVtb3ZlQWxsVXBBY3Rpb25zIiwiYWRkVXBBY3Rpb24iLCJyZXMiLCJvdGhlckNvbXBvbmVudCIsImlzRm9yZWdyb3VuZCIsImZvcmVncm91bmQiLCJvdGhlcklzRm9yZWdyb3VuZCIsInpJbmRleCIsIm90aGVyekluZGV4IiwiY29tcGFyZVRvQ29tcG9uZW50IiwicGFyZW50V2lkdGgiLCJwYXJlbnRQYWRkaW5nIiwiQWxpZ25lbWVudCIsIkNFTlRFUiIsIlJJR0hUIiwiTEVGVCIsInBhcmVudEhlaWdodCIsIlZlcnRpY2FsQWxpZ25lbWVudCIsIkJPVFRPTSIsIlRPUCIsIkRFRkFVTFRfUEFERElORyIsIkRFRkFVTFRfU1BBQ0lORyIsImRlZmF1bHRTdHlsZSIsInNldEFsbCIsImdldFN0eWxlcyIsInNldCIsIm90aGVyIiwiY29tcGFyZVRvIiwiRk9OVF9GQU1JTFkiLCJGT05UX1NJWkUiLCJJTlBVVF9ERUZBVUxUX0ZPTlRfQ09MT1IiLCJJTlBVVF9ERUZBVUxUX0JBQ0tHUk9VTkRfQ09MT1IiLCJJTlBVVF9ERUZBVUxUX0JPUkRFUl9DT0xPUiIsIklOUFVUX0RFRkFVTFRfQk9SREVSX0NPTE9SX1NFTEVDVEVEIiwiSU5QVVRfREVGQVVMVF9TRUxFQ1RfQ09MT1IiLCJMQUJFTF9ERUZBVUxUX0ZPTlRfQ09MT1IiLCJMSU5LX0RFRkFVTFRfQ09MT1IiLCJMSU5LX0RFRkFVTFRfSE9WRVJfQ09MT1IiLCJMSU5LX0RFRkFVTFRfQ0xJQ0tfQ09MT1IiLCJNRU5VX0RFRkFVTFRfQkFDS0dST1VORCIsIk1FTlVfREVGQVVMVF9CTFVSX0JBQ0tHUk9VTkQiLCJOT1RJRklDQVRJT05fREVGQVVMVF9CQUNLR1JPVU5EIiwiTk9USUZJQ0FUSU9OX0RFRkFVTFRfQU5JTUFUSU9OX0RVUkFUSU9OIiwiUFJPR1JFU1NfREVGQVVMVF9CQUNLR1JPVU5EIiwiUFJPR1JFU1NfREVGQVVMVF9GT1JFR1JPVU5EIiwiUFJPR1JFU1NfREVGQVVMVF9BTklNQVRJT05fRFVSQVRJT04iLCJUT09MVElQX0RFRkFVTFRfQkFDS0dST1VORCIsIkNST1NTX0RFRkFVTFRfTElORV9DQVAiLCJDUk9TU19ERUZBVUxUX0NPTE9SIiwiQ1JPU1NfREVGQVVMVF9MSU5FX1NJWkUiLCJTQ1JPTExCQVJfREVGQVVMVF9CQUNLR1JPVU5EIiwiU0NST0xMQkFSX0RFRkFVTFRfSE9WRVJfQkFDS0dST1VORCIsIlNDUk9MTEJBUl9ERUZBVUxUX0NMSUNLX0JBQ0tHUk9VTkQiLCJTQ1JPTExCQVJfREVGQVVMVF9TSVpFIiwiREVGQVVMVF9CT1JERVJfU0laRSIsIkRFRkFVTFRfQk9SREVSX0NPTE9SX1NFTEVDVEVEIiwiREVGQVVMVF9BTklNQVRJT05fRFVSQVRJT04iLCJUUklBTkdMRV9ERUZBVUxUX0xJTkVfQ0FQIiwiVFJJQU5HTEVfREVGQVVMVF9DT0xPUiIsIlRSSUFOR0xFX0RFRkFVTFRfRklMTF9DT0xPUiIsIlRSSUFOR0xFX0RFRkFVTFRfTElORV9TSVpFIiwiVFJJQU5HTEVfREVGQVVMVF9GSUxMIiwiU0VMRUNUX0RFRkFVTFRfQkFDS0dST1VORCIsIlNFTEVDVF9ERUZBVUxUX0hPVkVSX0JBQ0tHUk9VTkQiLCJTRUxFQ1RfREVGQVVMVF9DTElDS19CQUNLR1JPVU5EIiwiS2V5IiwiVVAiLCJFTlRFUiIsIkVDSEFQIiwiVEFCIiwiREVGQVVMVCIsIldBUk5JTkdfTUVTU0FHRSIsIklOUFVUX0ZVTExTQ1JFRU4iLCJhZGRBbGwiLCJzY3JvbGxiYXJIb3Jpem9udGFsIiwiU2Nyb2xsYmFySG9yaXpvbnRhbCIsInNjcm9sbGJhclZlcnRpY2FsIiwiU2Nyb2xsYmFyVmVydGljYWwiLCJjb250cm9sU2Nyb2xsaW5nIiwiY29tcG9uZW50Q2hhbmdlZCIsInNjcm9sbFhEaXNhYmxlZCIsImRyYXdIb3Jpem9udGFsU2Nyb2xsQmFyIiwic2Nyb2xsWURpc2FibGVkIiwiZHJhd1ZlcnRpY2FsU2Nyb2xsQmFyIiwiZXZlbnRDaGFuZ2VDYWxsYmFjayIsImluZGV4T2YiLCJyZW1vdmVDaGFuZ2VBY3Rpb24iLCJmaWx0ZXIiLCJjdXJyZW50IiwicmVtb3ZlIiwiY2hhbmdlZCIsImMiLCJpIiwic2Nyb2xsQXJlYVNpemVZIiwicGVyY2VudFNjcm9sbGJhclkiLCJzY3JvbGxBcmVhU2l6ZVgiLCJwZXJjZW50U2Nyb2xsYmFyWCIsImNvbXBvbmVudFdpZHRoIiwiY29tcG9uZW50SGVpZ2h0IiwiY2FudmFzV2lkdGgiLCJjYW52YXNIZWlnaHQiLCJDcm9zcyIsImRyYXdDcm9zcyIsImVhc2VJbkN1YmljIiwiZWFzZU91dEJvdW5jZSIsIm4xIiwiZDEiLCJlYXNlSW5PdXRDdWJpYyIsInBvdyIsImVhc2VJbk91dFNpbmUiLCJjb3MiLCJQSSIsImVhc2VJbk91dFF1aW50IiwiZWFzZUluT3V0Q2lyYyIsInNxcnQiLCJlYXNlSW5PdXRRdWFkIiwiZWFzZUluT3V0UXVhcnQiLCJlYXNlSW5PdXRFeHBvIiwiZWFzZUluT3V0QmFjayIsImMxIiwiYzIiLCJFdmVudCIsIm5hbWUiLCJjYWxsYmFja3MiLCJGUFNNZXRlciIsImRpc3BsYXlGcmFtZXMiLCJmcmFtZXMiLCJsYXN0RnJhbWUiLCJjdXJyZW50RlBTIiwiaW50ZXJ2YWxDb3VudEZQUyIsInNldEludGVydmFsIiwiY291bnRGUFMiLCJ0ZXh0IiwiSW1hZ2UiLCJzcmMiLCJkcmF3SW1hZ2UiLCJnZXQiLCJpbWdXaWR0aCIsImltZ0hlaWdodCIsImFzcGVjdFJhdGlvIiwiZmxvb3IiLCJzaXplcyIsIkltYWdlTG9hZGVyIiwiaW1hZ2VzIiwiaW1hZ2VzUmVzaXplZCIsInRyaWVkTG9hZGluZyIsIm5iSW1hZ2VzVG9Mb2FkIiwiZmlyc3RJbWFnZSIsImltZyIsInNoaWZ0IiwibG9hZCIsIm9ubG9hZCIsIm9uZXJyb3IiLCJzZXRUaW1lb3V0IiwiaGFzT3duUHJvcGVydHkiLCJ3IiwiaCIsImlkIiwiSW5wdXQiLCJkZWZhdWx0VGV4dCIsImxhc3RJbnB1dFRleHQiLCJvZmZzZXRYIiwibGFzdFRpbWUiLCJ0b3RhbFRpbWUiLCJjbGlja0N1cnJlbnRQb3NpdGlvbiIsInRleHRDYWNoZSIsImlucHV0Iiwic2V0QXR0cmlidXRlIiwibGVmdCIsInRhYkluZGV4IiwidmFsdWUiLCJwb3NpdGlvblN0YXJ0Iiwic2VsZWN0aW9uU3RhcnQiLCJwb3NpdGlvbkVuZCIsInNlbGVjdGlvbkVuZCIsImJvZHkiLCJhcHBlbmRUb0NhbnZhcyIsIm5vdGljZUxvZ2dlZCIsIm1vdmVBY3Rpb25DYWxsYmFjayIsImlDbGljayIsImdldExldHRlckNsaWNrZWQiLCJwb3NpdGlvblN0YXJ0Q2xpY2siLCJzZXRTZWxlY3Rpb25SYW5nZSIsImNsaWNrIiwiYmx1ciIsInBlcmZvcm1hbmNlIiwibm93Iiwib2Zmc2V0VGltZSIsImN0eFRleHQiLCJ1cGRhdGVUZXh0Q2FjaGUiLCJhdXRvU2Nyb2xsIiwiZHJhd1RleHQiLCJjdXJzb3IiLCJjdXJyZW50WCIsImxldHRlcnMiLCJ4RHJhdyIsInlEcmF3IiwiaXNMZXR0ZXJWaXNpYmxlIiwiZHJhd0hpZ2hsaWdodCIsImZvbnRDb2xvciIsImZvbnRTaXplIiwiZm9udEZhbWlseSIsImRyYXdDdXJzb3IiLCJiZWdpblBhdGgiLCJtb3ZlVG8iLCJsaW5lVG8iLCJzdHJva2UiLCJzZWxlY3RDb2xvciIsIndyYXBUZXh0TGluZXMiLCJsZXR0ZXIiLCJpc0NsaWNrQ3VycmVudFBvc2l0aW9uIiwiaXNDbGlja0FmdGVyUG9zaXRpb24iLCJsZXR0ZXJJZCIsImN1cnNvclBvc2l0aW9uIiwiY3VycmVudExldHRlclNpemUiLCJjdXJyZW50TGV0dGVyIiwiY3Vyc29yUG9zaXRpb25Qb3MiLCJjdXJzb3JQb3NpdGlvbk5lZyIsIm9mZnNldFhOZWciLCJmb2N1cyIsImVuZCIsImRpcmVjdGlvbiIsInNpemVzQ2FjaGUiLCJ1cGRhdGVTaXplcyIsIndyYXAiLCJib2xkIiwidW5kZXJsaW5lIiwiTGluayIsImluaXRpYWxDb2xvciIsImluaXRpYWxVbmRlcmxpbmUiLCJmb250Q29sb3JEb3duIiwibG9nIiwiZm9udENvbG9ySG92ZXIiLCJsYXN0S2V5IiwidW5kZWZpbmVkIiwic2VsZWN0ZWRDb21wb25lbnQiLCJibHVyQmFja2dyb3VuZCIsImRyYXdCbHVyIiwia2V5Q29kZSIsImtleUFjdGlvbiIsInNlbGVjdCIsImJsdXJDYW52YXMiLCJpbmRleCIsInNlbGVjdGFibGVDb21wb25lbnRzIiwiY29tcGFyZVRvTWVudSIsIk5vdGlmaWNhdGlvbk1lc3NhZ2UiLCJkZWxheUJlZm9yZUNsb3NpbmciLCJlYXNpbmdGdW5jdGlvbiIsInRpbWVMYXN0RnJhbWUiLCJhbmltYXRpb25UaW1lIiwiY2xvc2VkIiwiY2xvc2luZyIsImNsb3NlQnV0dG9uIiwic2V0Q2xpY2tBY3Rpb24iLCJjbG9zZSIsImRpc2FibGVBbmltYXRpb24iLCJlbmFibGVDbG9zZUJ1dHRvbiIsImRpc2FibGVDbG9zZUJ1dHRvbiIsImFuaW1hdGlvbkR1cmF0aW9uIiwiY29weSIsImNvbXBhcmVUb05vdGlmaWNhdGlvbiIsIm9mZnNldFkiLCJmb3JjZUNsb3NlIiwib3BlbiIsIlByb2dyZXNzQmFyIiwiZGVmYXVsdFBlcmNlbnQiLCJwZXJjZW50IiwiZHJhd0ZvcmVncm91bmQiLCJ3aWR0aEZvcmVncm91bmQiLCJmb3JlZ3JvdW5kQ29sb3IiLCJhbmltYXRpb25QZXJjZW50IiwiZXZlbnRzIiwiZXZlbnRBcmdzIiwicmVnaXN0ZXJDYWxsYmFjayIsInJlbW92ZUNhbGxiYWNrIiwicmVtb3ZlQWxsQ2FsbGJhY2tzIiwidG90YWxXaWR0aCIsImlucHV0cyIsImNvbXBhcmVDb21wb25lbnRzIiwiU2Nyb2xsYmFyIiwic2l6ZSIsImNvbXBhcmVUb1Njcm9sbGJhciIsIm1heFdpZHRoUGFyZW50IiwiaW5uZXJXaWR0aFBhcmVudCIsIm1heEhlaWdodFBhcmVudCIsImlubmVySGVpZ2h0UGFyZW50IiwiY29udGVudFJhdGlvWCIsImNvbnRlbnRSYXRpb1kiLCJ3aW5kb3dTY3JvbGxTaXplWCIsIndpbmRvd1Njcm9sbFNpemVZIiwiU2VsZWN0Iiwib3B0aW9uQ29udGFpbmVyIiwiZGVmYXVsdE9wdGlvbiIsInNlbGVjdGVkT3B0aW9uIiwibGFiZWwiLCJ0cmlhbmdsZSIsIlRyaWFuZ2xlIiwidXBkYXRlV2lkdGgiLCJTZWxlY3RPcHRpb24iLCJkZWZhdWx0TGFiZWwiLCJTZWxlY3REcm9wZG93biIsIm1heEhlaWdodERyb3Bkb3duIiwib3B0aW9ucyIsImdldENvbXBvbmVudElkIiwic2VsZWN0SGVpZ2h0Iiwic3R5bGVzIiwibW92YWJsZSIsIlRvb2x0aXAiLCJjb21wYXJlVG9Ub29sdGlwIiwiZHJhd1RyaWFuZ2xlIiwicHJlUmVuZGVyZWRGb250IiwicHJlUmVuZGVyRm9udCIsImNhcnMiLCJjdHhUbXAiLCJmb250IiwibWVhc3VyZVRleHQiLCJ0ZXh0QmFzZWxpbmUiLCJmaWxsVGV4dCIsInN4Iiwic3kiLCJzV2lkdGgiLCJzSGVpZ2h0IiwiZXJhc2VCZWxvdyIsImRlZ3JlZXMiLCJkcmF3SW1hZ2VXcmFwcGVyIiwiaW1hZ2VEYXRhIiwiaXNOYU4iLCJ0cmFuc2xhdGUiLCJyb3RhdGUiLCJjbGVhclJlY3QiLCJBcnJheSIsImlzQXJyYXkiLCJsaW5lcyIsInNwbGl0IiwieEN1cnJlbnQiLCJ5Q3VycmVudCIsInlGaXJzdCIsImN1cnJlbnRUZXh0IiwiY3VycmVudFdpZHRoIiwiY29sb3JJbmRleCIsIndyYXBUZXh0IiwibGltaXQiLCJwIiwic3Vic3RyaW5nIiwicmlnaHQiLCJkaXNhYmxlV3JhcCIsImltYWdlU21vb3RoaW5nRW5hYmxlZCIsIm5ld1RleHQiLCJ3aWR0aENhciIsIm5iQ2FyTGluZSIsImhlaWdodFRvdGFsIiwibGluZVdyYXAiLCJqIiwid2lkdGhUZXh0IiwiY2FyV2lkdGgiLCJmcm9teCIsImZyb215IiwidG94IiwidG95IiwiaGVhZGxlbiIsImR4IiwiZHkiLCJhbmdsZSIsImF0YW4yIiwic2luIiwicmFkaXVzIiwiYXJjIiwiaXNGaWx0ZXJIdWVBdmFpbGFibGUiLCJnZXRJbWFnZURhdGEiLCJkYXRhIiwicGFyc2VOdW1iZXIiLCJzdHIiLCJwYXJzZUludCIsIm1hdGNoIiwiZ2V0Rm9udFNpemUiLCJhdXRvUmVzaXplQ2FudmFzIiwiaW5pdGlhbFdpZHRoIiwiaW5pdGlhbEhlaWdodCIsImRvY3VtZW50RWxlbWVudCIsImNsaWVudFdpZHRoIiwicmF0aW8iLCJnZXRBdHRyaWJ1dGUiLCJhdXRvUmVzaXplQ2FudmFzRnVsbHNjcmVlbiIsImVuYWJsZUF1dG9SZXNpemVDYW52YXNGdWxsc2NyZWVuIiwiYXV0b1Jlc2l6ZUNhbnZhc0Z1bGxwYWdlIiwibWFyZ2luIiwiZW5hYmxlQXV0b1Jlc2l6ZUNhbnZhc0Z1bGxwYWdlIiwicmVxdWVzdEZ1bGxzY3JlZW4iLCJtb3pSZXF1ZXN0RnVsbFNjcmVlbiIsIndlYmtpdFJlcXVlc3RGdWxsc2NyZWVuIiwibXNSZXF1ZXN0RnVsbHNjcmVlbiIsIm9SZXF1ZXN0RnVsbHNjcmVlbiIsImV4aXRGdWxsc2NyZWVuIiwib25mdWxsc2NyZWVuY2hhbmdlIiwib25tc2Z1bGxzY3JlZW5jaGFuZ2UiLCJvbm1vemZ1bGxzY3JlZW5jaGFuZ2UiLCJvbndlYmtpdGZ1bGxzY3JlZW5jaGFuZ2UiLCJvbm9raXRmdWxsc2NyZWVuY2hhbmdlIiwib25vZnVsbHNjcmVlbmNoYW5nZSIsImNsaWVudFgiLCJjbGllbnRZIiwidG9wIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0QsTztRQ1ZBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EseUNBQXlDLGlDQUFpQztRQUMxRSxnSEFBZ0gsbUJBQW1CLEVBQUU7UUFDckk7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwyQkFBMkIsMEJBQTBCLEVBQUU7UUFDdkQsaUNBQWlDLGVBQWU7UUFDaEQ7UUFDQTtRQUNBOztRQUVBO1FBQ0Esc0RBQXNELCtEQUErRDs7UUFFckg7UUFDQTs7O1FBR0E7UUFDQTs7Ozs7Ozs7Ozs7O0FDbEZBO0FBQ0E7O0FBRUEsd0NBQXdDLFNBQVM7QUFDakQ7QUFDQTs7QUFFQTtBQUNBOztBQUVBLG1DOzs7Ozs7Ozs7OztBQ1ZBLHVCQUF1QixtQkFBTyxDQUFDLHFGQUFvQjs7QUFFbkQ7QUFDQTtBQUNBOztBQUVBLG9DOzs7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QUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiJKU0dhbWVUb29scy5kZXYuanMiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gd2VicGFja1VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24ocm9vdCwgZmFjdG9yeSkge1xuXHRpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcgJiYgdHlwZW9mIG1vZHVsZSA9PT0gJ29iamVjdCcpXG5cdFx0bW9kdWxlLmV4cG9ydHMgPSBmYWN0b3J5KCk7XG5cdGVsc2UgaWYodHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kKVxuXHRcdGRlZmluZShbXSwgZmFjdG9yeSk7XG5cdGVsc2UgaWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnKVxuXHRcdGV4cG9ydHNbXCJKU0dhbWVUb29sc1wiXSA9IGZhY3RvcnkoKTtcblx0ZWxzZVxuXHRcdHJvb3RbXCJKU0dhbWVUb29sc1wiXSA9IGZhY3RvcnkoKTtcbn0pKHR5cGVvZiBzZWxmICE9PSBcInVuZGVmaW5lZFwiID8gc2VsZiA6IHRoaXMsIGZ1bmN0aW9uKCkge1xucmV0dXJuICIsIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vc3JjL2luZGV4LmpzXCIpO1xuIiwiZnVuY3Rpb24gX2FycmF5TGlrZVRvQXJyYXkoYXJyLCBsZW4pIHtcbiAgaWYgKGxlbiA9PSBudWxsIHx8IGxlbiA+IGFyci5sZW5ndGgpIGxlbiA9IGFyci5sZW5ndGg7XG5cbiAgZm9yICh2YXIgaSA9IDAsIGFycjIgPSBuZXcgQXJyYXkobGVuKTsgaSA8IGxlbjsgaSsrKSB7XG4gICAgYXJyMltpXSA9IGFycltpXTtcbiAgfVxuXG4gIHJldHVybiBhcnIyO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9hcnJheUxpa2VUb0FycmF5OyIsInZhciBhcnJheUxpa2VUb0FycmF5ID0gcmVxdWlyZShcIi4vYXJyYXlMaWtlVG9BcnJheVwiKTtcblxuZnVuY3Rpb24gX2FycmF5V2l0aG91dEhvbGVzKGFycikge1xuICBpZiAoQXJyYXkuaXNBcnJheShhcnIpKSByZXR1cm4gYXJyYXlMaWtlVG9BcnJheShhcnIpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9hcnJheVdpdGhvdXRIb2xlczsiLCJmdW5jdGlvbiBfYXNzZXJ0VGhpc0luaXRpYWxpemVkKHNlbGYpIHtcbiAgaWYgKHNlbGYgPT09IHZvaWQgMCkge1xuICAgIHRocm93IG5ldyBSZWZlcmVuY2VFcnJvcihcInRoaXMgaGFzbid0IGJlZW4gaW5pdGlhbGlzZWQgLSBzdXBlcigpIGhhc24ndCBiZWVuIGNhbGxlZFwiKTtcbiAgfVxuXG4gIHJldHVybiBzZWxmO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQ7IiwiZnVuY3Rpb24gX2NsYXNzQ2FsbENoZWNrKGluc3RhbmNlLCBDb25zdHJ1Y3Rvcikge1xuICBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkge1xuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb25cIik7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfY2xhc3NDYWxsQ2hlY2s7IiwiZnVuY3Rpb24gX2NsYXNzUHJpdmF0ZUZpZWxkR2V0KHJlY2VpdmVyLCBwcml2YXRlTWFwKSB7XG4gIHZhciBkZXNjcmlwdG9yID0gcHJpdmF0ZU1hcC5nZXQocmVjZWl2ZXIpO1xuXG4gIGlmICghZGVzY3JpcHRvcikge1xuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJhdHRlbXB0ZWQgdG8gZ2V0IHByaXZhdGUgZmllbGQgb24gbm9uLWluc3RhbmNlXCIpO1xuICB9XG5cbiAgaWYgKGRlc2NyaXB0b3IuZ2V0KSB7XG4gICAgcmV0dXJuIGRlc2NyaXB0b3IuZ2V0LmNhbGwocmVjZWl2ZXIpO1xuICB9XG5cbiAgcmV0dXJuIGRlc2NyaXB0b3IudmFsdWU7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX2NsYXNzUHJpdmF0ZUZpZWxkR2V0OyIsImZ1bmN0aW9uIF9jbGFzc1ByaXZhdGVGaWVsZFNldChyZWNlaXZlciwgcHJpdmF0ZU1hcCwgdmFsdWUpIHtcbiAgdmFyIGRlc2NyaXB0b3IgPSBwcml2YXRlTWFwLmdldChyZWNlaXZlcik7XG5cbiAgaWYgKCFkZXNjcmlwdG9yKSB7XG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcImF0dGVtcHRlZCB0byBzZXQgcHJpdmF0ZSBmaWVsZCBvbiBub24taW5zdGFuY2VcIik7XG4gIH1cblxuICBpZiAoZGVzY3JpcHRvci5zZXQpIHtcbiAgICBkZXNjcmlwdG9yLnNldC5jYWxsKHJlY2VpdmVyLCB2YWx1ZSk7XG4gIH0gZWxzZSB7XG4gICAgaWYgKCFkZXNjcmlwdG9yLndyaXRhYmxlKSB7XG4gICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiYXR0ZW1wdGVkIHRvIHNldCByZWFkIG9ubHkgcHJpdmF0ZSBmaWVsZFwiKTtcbiAgICB9XG5cbiAgICBkZXNjcmlwdG9yLnZhbHVlID0gdmFsdWU7XG4gIH1cblxuICByZXR1cm4gdmFsdWU7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX2NsYXNzUHJpdmF0ZUZpZWxkU2V0OyIsInZhciBzZXRQcm90b3R5cGVPZiA9IHJlcXVpcmUoXCIuL3NldFByb3RvdHlwZU9mXCIpO1xuXG52YXIgaXNOYXRpdmVSZWZsZWN0Q29uc3RydWN0ID0gcmVxdWlyZShcIi4vaXNOYXRpdmVSZWZsZWN0Q29uc3RydWN0XCIpO1xuXG5mdW5jdGlvbiBfY29uc3RydWN0KFBhcmVudCwgYXJncywgQ2xhc3MpIHtcbiAgaWYgKGlzTmF0aXZlUmVmbGVjdENvbnN0cnVjdCgpKSB7XG4gICAgbW9kdWxlLmV4cG9ydHMgPSBfY29uc3RydWN0ID0gUmVmbGVjdC5jb25zdHJ1Y3Q7XG4gIH0gZWxzZSB7XG4gICAgbW9kdWxlLmV4cG9ydHMgPSBfY29uc3RydWN0ID0gZnVuY3Rpb24gX2NvbnN0cnVjdChQYXJlbnQsIGFyZ3MsIENsYXNzKSB7XG4gICAgICB2YXIgYSA9IFtudWxsXTtcbiAgICAgIGEucHVzaC5hcHBseShhLCBhcmdzKTtcbiAgICAgIHZhciBDb25zdHJ1Y3RvciA9IEZ1bmN0aW9uLmJpbmQuYXBwbHkoUGFyZW50LCBhKTtcbiAgICAgIHZhciBpbnN0YW5jZSA9IG5ldyBDb25zdHJ1Y3RvcigpO1xuICAgICAgaWYgKENsYXNzKSBzZXRQcm90b3R5cGVPZihpbnN0YW5jZSwgQ2xhc3MucHJvdG90eXBlKTtcbiAgICAgIHJldHVybiBpbnN0YW5jZTtcbiAgICB9O1xuICB9XG5cbiAgcmV0dXJuIF9jb25zdHJ1Y3QuYXBwbHkobnVsbCwgYXJndW1lbnRzKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfY29uc3RydWN0OyIsImZ1bmN0aW9uIF9kZWZpbmVQcm9wZXJ0aWVzKHRhcmdldCwgcHJvcHMpIHtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBwcm9wcy5sZW5ndGg7IGkrKykge1xuICAgIHZhciBkZXNjcmlwdG9yID0gcHJvcHNbaV07XG4gICAgZGVzY3JpcHRvci5lbnVtZXJhYmxlID0gZGVzY3JpcHRvci5lbnVtZXJhYmxlIHx8IGZhbHNlO1xuICAgIGRlc2NyaXB0b3IuY29uZmlndXJhYmxlID0gdHJ1ZTtcbiAgICBpZiAoXCJ2YWx1ZVwiIGluIGRlc2NyaXB0b3IpIGRlc2NyaXB0b3Iud3JpdGFibGUgPSB0cnVlO1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGRlc2NyaXB0b3Iua2V5LCBkZXNjcmlwdG9yKTtcbiAgfVxufVxuXG5mdW5jdGlvbiBfY3JlYXRlQ2xhc3MoQ29uc3RydWN0b3IsIHByb3RvUHJvcHMsIHN0YXRpY1Byb3BzKSB7XG4gIGlmIChwcm90b1Byb3BzKSBfZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvci5wcm90b3R5cGUsIHByb3RvUHJvcHMpO1xuICBpZiAoc3RhdGljUHJvcHMpIF9kZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLCBzdGF0aWNQcm9wcyk7XG4gIHJldHVybiBDb25zdHJ1Y3Rvcjtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfY3JlYXRlQ2xhc3M7IiwiZnVuY3Rpb24gX2RlZmluZVByb3BlcnR5KG9iaiwga2V5LCB2YWx1ZSkge1xuICBpZiAoa2V5IGluIG9iaikge1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShvYmosIGtleSwge1xuICAgICAgdmFsdWU6IHZhbHVlLFxuICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZSxcbiAgICAgIHdyaXRhYmxlOiB0cnVlXG4gICAgfSk7XG4gIH0gZWxzZSB7XG4gICAgb2JqW2tleV0gPSB2YWx1ZTtcbiAgfVxuXG4gIHJldHVybiBvYmo7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX2RlZmluZVByb3BlcnR5OyIsInZhciBzdXBlclByb3BCYXNlID0gcmVxdWlyZShcIi4vc3VwZXJQcm9wQmFzZVwiKTtcblxuZnVuY3Rpb24gX2dldCh0YXJnZXQsIHByb3BlcnR5LCByZWNlaXZlcikge1xuICBpZiAodHlwZW9mIFJlZmxlY3QgIT09IFwidW5kZWZpbmVkXCIgJiYgUmVmbGVjdC5nZXQpIHtcbiAgICBtb2R1bGUuZXhwb3J0cyA9IF9nZXQgPSBSZWZsZWN0LmdldDtcbiAgfSBlbHNlIHtcbiAgICBtb2R1bGUuZXhwb3J0cyA9IF9nZXQgPSBmdW5jdGlvbiBfZ2V0KHRhcmdldCwgcHJvcGVydHksIHJlY2VpdmVyKSB7XG4gICAgICB2YXIgYmFzZSA9IHN1cGVyUHJvcEJhc2UodGFyZ2V0LCBwcm9wZXJ0eSk7XG4gICAgICBpZiAoIWJhc2UpIHJldHVybjtcbiAgICAgIHZhciBkZXNjID0gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihiYXNlLCBwcm9wZXJ0eSk7XG5cbiAgICAgIGlmIChkZXNjLmdldCkge1xuICAgICAgICByZXR1cm4gZGVzYy5nZXQuY2FsbChyZWNlaXZlcik7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBkZXNjLnZhbHVlO1xuICAgIH07XG4gIH1cblxuICByZXR1cm4gX2dldCh0YXJnZXQsIHByb3BlcnR5LCByZWNlaXZlciB8fCB0YXJnZXQpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9nZXQ7IiwiZnVuY3Rpb24gX2dldFByb3RvdHlwZU9mKG8pIHtcbiAgbW9kdWxlLmV4cG9ydHMgPSBfZ2V0UHJvdG90eXBlT2YgPSBPYmplY3Quc2V0UHJvdG90eXBlT2YgPyBPYmplY3QuZ2V0UHJvdG90eXBlT2YgOiBmdW5jdGlvbiBfZ2V0UHJvdG90eXBlT2Yobykge1xuICAgIHJldHVybiBvLl9fcHJvdG9fXyB8fCBPYmplY3QuZ2V0UHJvdG90eXBlT2Yobyk7XG4gIH07XG4gIHJldHVybiBfZ2V0UHJvdG90eXBlT2Yobyk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX2dldFByb3RvdHlwZU9mOyIsInZhciBzZXRQcm90b3R5cGVPZiA9IHJlcXVpcmUoXCIuL3NldFByb3RvdHlwZU9mXCIpO1xuXG5mdW5jdGlvbiBfaW5oZXJpdHMoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpIHtcbiAgaWYgKHR5cGVvZiBzdXBlckNsYXNzICE9PSBcImZ1bmN0aW9uXCIgJiYgc3VwZXJDbGFzcyAhPT0gbnVsbCkge1xuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJTdXBlciBleHByZXNzaW9uIG11c3QgZWl0aGVyIGJlIG51bGwgb3IgYSBmdW5jdGlvblwiKTtcbiAgfVxuXG4gIHN1YkNsYXNzLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoc3VwZXJDbGFzcyAmJiBzdXBlckNsYXNzLnByb3RvdHlwZSwge1xuICAgIGNvbnN0cnVjdG9yOiB7XG4gICAgICB2YWx1ZTogc3ViQ2xhc3MsXG4gICAgICB3cml0YWJsZTogdHJ1ZSxcbiAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICAgIH1cbiAgfSk7XG4gIGlmIChzdXBlckNsYXNzKSBzZXRQcm90b3R5cGVPZihzdWJDbGFzcywgc3VwZXJDbGFzcyk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX2luaGVyaXRzOyIsImZ1bmN0aW9uIF9pc05hdGl2ZVJlZmxlY3RDb25zdHJ1Y3QoKSB7XG4gIGlmICh0eXBlb2YgUmVmbGVjdCA9PT0gXCJ1bmRlZmluZWRcIiB8fCAhUmVmbGVjdC5jb25zdHJ1Y3QpIHJldHVybiBmYWxzZTtcbiAgaWYgKFJlZmxlY3QuY29uc3RydWN0LnNoYW0pIHJldHVybiBmYWxzZTtcbiAgaWYgKHR5cGVvZiBQcm94eSA9PT0gXCJmdW5jdGlvblwiKSByZXR1cm4gdHJ1ZTtcblxuICB0cnkge1xuICAgIERhdGUucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwoUmVmbGVjdC5jb25zdHJ1Y3QoRGF0ZSwgW10sIGZ1bmN0aW9uICgpIHt9KSk7XG4gICAgcmV0dXJuIHRydWU7XG4gIH0gY2F0Y2ggKGUpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfaXNOYXRpdmVSZWZsZWN0Q29uc3RydWN0OyIsImZ1bmN0aW9uIF9pdGVyYWJsZVRvQXJyYXkoaXRlcikge1xuICBpZiAodHlwZW9mIFN5bWJvbCAhPT0gXCJ1bmRlZmluZWRcIiAmJiBTeW1ib2wuaXRlcmF0b3IgaW4gT2JqZWN0KGl0ZXIpKSByZXR1cm4gQXJyYXkuZnJvbShpdGVyKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfaXRlcmFibGVUb0FycmF5OyIsImZ1bmN0aW9uIF9ub25JdGVyYWJsZVNwcmVhZCgpIHtcbiAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkludmFsaWQgYXR0ZW1wdCB0byBzcHJlYWQgbm9uLWl0ZXJhYmxlIGluc3RhbmNlLlxcbkluIG9yZGVyIHRvIGJlIGl0ZXJhYmxlLCBub24tYXJyYXkgb2JqZWN0cyBtdXN0IGhhdmUgYSBbU3ltYm9sLml0ZXJhdG9yXSgpIG1ldGhvZC5cIik7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX25vbkl0ZXJhYmxlU3ByZWFkOyIsInZhciBfdHlwZW9mID0gcmVxdWlyZShcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvdHlwZW9mXCIpO1xuXG52YXIgYXNzZXJ0VGhpc0luaXRpYWxpemVkID0gcmVxdWlyZShcIi4vYXNzZXJ0VGhpc0luaXRpYWxpemVkXCIpO1xuXG5mdW5jdGlvbiBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybihzZWxmLCBjYWxsKSB7XG4gIGlmIChjYWxsICYmIChfdHlwZW9mKGNhbGwpID09PSBcIm9iamVjdFwiIHx8IHR5cGVvZiBjYWxsID09PSBcImZ1bmN0aW9uXCIpKSB7XG4gICAgcmV0dXJuIGNhbGw7XG4gIH1cblxuICByZXR1cm4gYXNzZXJ0VGhpc0luaXRpYWxpemVkKHNlbGYpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuOyIsInZhciBzdXBlclByb3BCYXNlID0gcmVxdWlyZShcIi4vc3VwZXJQcm9wQmFzZVwiKTtcblxudmFyIGRlZmluZVByb3BlcnR5ID0gcmVxdWlyZShcIi4vZGVmaW5lUHJvcGVydHlcIik7XG5cbmZ1bmN0aW9uIHNldCh0YXJnZXQsIHByb3BlcnR5LCB2YWx1ZSwgcmVjZWl2ZXIpIHtcbiAgaWYgKHR5cGVvZiBSZWZsZWN0ICE9PSBcInVuZGVmaW5lZFwiICYmIFJlZmxlY3Quc2V0KSB7XG4gICAgc2V0ID0gUmVmbGVjdC5zZXQ7XG4gIH0gZWxzZSB7XG4gICAgc2V0ID0gZnVuY3Rpb24gc2V0KHRhcmdldCwgcHJvcGVydHksIHZhbHVlLCByZWNlaXZlcikge1xuICAgICAgdmFyIGJhc2UgPSBzdXBlclByb3BCYXNlKHRhcmdldCwgcHJvcGVydHkpO1xuICAgICAgdmFyIGRlc2M7XG5cbiAgICAgIGlmIChiYXNlKSB7XG4gICAgICAgIGRlc2MgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKGJhc2UsIHByb3BlcnR5KTtcblxuICAgICAgICBpZiAoZGVzYy5zZXQpIHtcbiAgICAgICAgICBkZXNjLnNldC5jYWxsKHJlY2VpdmVyLCB2YWx1ZSk7XG4gICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH0gZWxzZSBpZiAoIWRlc2Mud3JpdGFibGUpIHtcbiAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgZGVzYyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IocmVjZWl2ZXIsIHByb3BlcnR5KTtcblxuICAgICAgaWYgKGRlc2MpIHtcbiAgICAgICAgaWYgKCFkZXNjLndyaXRhYmxlKSB7XG4gICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG5cbiAgICAgICAgZGVzYy52YWx1ZSA9IHZhbHVlO1xuICAgICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkocmVjZWl2ZXIsIHByb3BlcnR5LCBkZXNjKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGRlZmluZVByb3BlcnR5KHJlY2VpdmVyLCBwcm9wZXJ0eSwgdmFsdWUpO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9O1xuICB9XG5cbiAgcmV0dXJuIHNldCh0YXJnZXQsIHByb3BlcnR5LCB2YWx1ZSwgcmVjZWl2ZXIpO1xufVxuXG5mdW5jdGlvbiBfc2V0KHRhcmdldCwgcHJvcGVydHksIHZhbHVlLCByZWNlaXZlciwgaXNTdHJpY3QpIHtcbiAgdmFyIHMgPSBzZXQodGFyZ2V0LCBwcm9wZXJ0eSwgdmFsdWUsIHJlY2VpdmVyIHx8IHRhcmdldCk7XG5cbiAgaWYgKCFzICYmIGlzU3RyaWN0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdmYWlsZWQgdG8gc2V0IHByb3BlcnR5Jyk7XG4gIH1cblxuICByZXR1cm4gdmFsdWU7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX3NldDsiLCJmdW5jdGlvbiBfc2V0UHJvdG90eXBlT2YobywgcCkge1xuICBtb2R1bGUuZXhwb3J0cyA9IF9zZXRQcm90b3R5cGVPZiA9IE9iamVjdC5zZXRQcm90b3R5cGVPZiB8fCBmdW5jdGlvbiBfc2V0UHJvdG90eXBlT2YobywgcCkge1xuICAgIG8uX19wcm90b19fID0gcDtcbiAgICByZXR1cm4gbztcbiAgfTtcblxuICByZXR1cm4gX3NldFByb3RvdHlwZU9mKG8sIHApO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9zZXRQcm90b3R5cGVPZjsiLCJ2YXIgZ2V0UHJvdG90eXBlT2YgPSByZXF1aXJlKFwiLi9nZXRQcm90b3R5cGVPZlwiKTtcblxuZnVuY3Rpb24gX3N1cGVyUHJvcEJhc2Uob2JqZWN0LCBwcm9wZXJ0eSkge1xuICB3aGlsZSAoIU9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KSkge1xuICAgIG9iamVjdCA9IGdldFByb3RvdHlwZU9mKG9iamVjdCk7XG4gICAgaWYgKG9iamVjdCA9PT0gbnVsbCkgYnJlYWs7XG4gIH1cblxuICByZXR1cm4gb2JqZWN0O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9zdXBlclByb3BCYXNlOyIsInZhciBhcnJheVdpdGhvdXRIb2xlcyA9IHJlcXVpcmUoXCIuL2FycmF5V2l0aG91dEhvbGVzXCIpO1xuXG52YXIgaXRlcmFibGVUb0FycmF5ID0gcmVxdWlyZShcIi4vaXRlcmFibGVUb0FycmF5XCIpO1xuXG52YXIgdW5zdXBwb3J0ZWRJdGVyYWJsZVRvQXJyYXkgPSByZXF1aXJlKFwiLi91bnN1cHBvcnRlZEl0ZXJhYmxlVG9BcnJheVwiKTtcblxudmFyIG5vbkl0ZXJhYmxlU3ByZWFkID0gcmVxdWlyZShcIi4vbm9uSXRlcmFibGVTcHJlYWRcIik7XG5cbmZ1bmN0aW9uIF90b0NvbnN1bWFibGVBcnJheShhcnIpIHtcbiAgcmV0dXJuIGFycmF5V2l0aG91dEhvbGVzKGFycikgfHwgaXRlcmFibGVUb0FycmF5KGFycikgfHwgdW5zdXBwb3J0ZWRJdGVyYWJsZVRvQXJyYXkoYXJyKSB8fCBub25JdGVyYWJsZVNwcmVhZCgpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF90b0NvbnN1bWFibGVBcnJheTsiLCJmdW5jdGlvbiBfdHlwZW9mKG9iaikge1xuICBcIkBiYWJlbC9oZWxwZXJzIC0gdHlwZW9mXCI7XG5cbiAgaWYgKHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiB0eXBlb2YgU3ltYm9sLml0ZXJhdG9yID09PSBcInN5bWJvbFwiKSB7XG4gICAgbW9kdWxlLmV4cG9ydHMgPSBfdHlwZW9mID0gZnVuY3Rpb24gX3R5cGVvZihvYmopIHtcbiAgICAgIHJldHVybiB0eXBlb2Ygb2JqO1xuICAgIH07XG4gIH0gZWxzZSB7XG4gICAgbW9kdWxlLmV4cG9ydHMgPSBfdHlwZW9mID0gZnVuY3Rpb24gX3R5cGVvZihvYmopIHtcbiAgICAgIHJldHVybiBvYmogJiYgdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIG9iai5jb25zdHJ1Y3RvciA9PT0gU3ltYm9sICYmIG9iaiAhPT0gU3ltYm9sLnByb3RvdHlwZSA/IFwic3ltYm9sXCIgOiB0eXBlb2Ygb2JqO1xuICAgIH07XG4gIH1cblxuICByZXR1cm4gX3R5cGVvZihvYmopO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF90eXBlb2Y7IiwidmFyIGFycmF5TGlrZVRvQXJyYXkgPSByZXF1aXJlKFwiLi9hcnJheUxpa2VUb0FycmF5XCIpO1xuXG5mdW5jdGlvbiBfdW5zdXBwb3J0ZWRJdGVyYWJsZVRvQXJyYXkobywgbWluTGVuKSB7XG4gIGlmICghbykgcmV0dXJuO1xuICBpZiAodHlwZW9mIG8gPT09IFwic3RyaW5nXCIpIHJldHVybiBhcnJheUxpa2VUb0FycmF5KG8sIG1pbkxlbik7XG4gIHZhciBuID0gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKG8pLnNsaWNlKDgsIC0xKTtcbiAgaWYgKG4gPT09IFwiT2JqZWN0XCIgJiYgby5jb25zdHJ1Y3RvcikgbiA9IG8uY29uc3RydWN0b3IubmFtZTtcbiAgaWYgKG4gPT09IFwiTWFwXCIgfHwgbiA9PT0gXCJTZXRcIikgcmV0dXJuIEFycmF5LmZyb20obyk7XG4gIGlmIChuID09PSBcIkFyZ3VtZW50c1wiIHx8IC9eKD86VWl8SSludCg/Ojh8MTZ8MzIpKD86Q2xhbXBlZCk/QXJyYXkkLy50ZXN0KG4pKSByZXR1cm4gYXJyYXlMaWtlVG9BcnJheShvLCBtaW5MZW4pO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF91bnN1cHBvcnRlZEl0ZXJhYmxlVG9BcnJheTsiLCIvKlxuICogQ29weXJpZ2h0IChDKSAyMDIwIEVsaWFzdGlrIChlbGlhc3Rpa3NvZnRzLmNvbSlcbiAqXG4gKiBUaGlzIGZpbGUgaXMgcGFydCBvZiBcIkpTR2FtZVRvb2xzXCIuXG4gKlxuICogXCJKU0dhbWVUb29sc1wiIGlzIGZyZWUgc29mdHdhcmU6IHlvdSBjYW4gcmVkaXN0cmlidXRlIGl0IGFuZC9vciBtb2RpZnlcbiAqIGl0IHVuZGVyIHRoZSB0ZXJtcyBvZiB0aGUgR05VIEdlbmVyYWwgUHVibGljIExpY2Vuc2UgYXMgcHVibGlzaGVkIGJ5XG4gKiB0aGUgRnJlZSBTb2Z0d2FyZSBGb3VuZGF0aW9uLCBlaXRoZXIgdmVyc2lvbiAzIG9mIHRoZSBMaWNlbnNlLCBvclxuICogKGF0IHlvdXIgb3B0aW9uKSBhbnkgbGF0ZXIgdmVyc2lvbi5cbiAqXG4gKiBcIkpTR2FtZVRvb2xzXCIgaXMgZGlzdHJpYnV0ZWQgaW4gdGhlIGhvcGUgdGhhdCBpdCB3aWxsIGJlIHVzZWZ1bCxcbiAqIGJ1dCBXSVRIT1VUIEFOWSBXQVJSQU5UWTsgd2l0aG91dCBldmVuIHRoZSBpbXBsaWVkIHdhcnJhbnR5IG9mXG4gKiBNRVJDSEFOVEFCSUxJVFkgb3IgRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UuICBTZWUgdGhlXG4gKiBHTlUgR2VuZXJhbCBQdWJsaWMgTGljZW5zZSBmb3IgbW9yZSBkZXRhaWxzLlxuICpcbiAqIFlvdSBzaG91bGQgaGF2ZSByZWNlaXZlZCBhIGNvcHkgb2YgdGhlIEdOVSBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlXG4gKiBhbG9uZyB3aXRoIFwiSlNHYW1lVG9vbHNcIi4gIElmIG5vdCwgc2VlIDxodHRwOi8vd3d3LmdudS5vcmcvbGljZW5zZXMvPi5cbiAqL1xuaW1wb3J0IENvbXBvbmVudCBmcm9tIFwiLi9Db21wb25lbnRcIjtcbmltcG9ydCBDb25zdGFudHMgZnJvbSBcIi4vQ29uc3RhbnRzXCI7XG5pbXBvcnQgU3R5bGUgZnJvbSBcIi4vU3R5bGVcIjtcbmltcG9ydCBVdGlscyBmcm9tIFwiLi9VdGlsc1wiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBBcnJvdyBleHRlbmRzIENvbXBvbmVudCB7XG4gIHNlbGVjdGFibGUgPSBmYWxzZTtcblxuICBjb25zdHJ1Y3Rvcih4LCB5LCB0b1gsIHRvWSwgc3R5bGUpIHtcbiAgICBzdXBlcih4LCB5LCBudWxsLCBudWxsLCBzdHlsZSk7XG5cbiAgICB0aGlzLnRvWCA9IHRvWDtcbiAgICB0aGlzLnRvWSA9IHRvWTtcbiAgfVxuXG4gIGRyYXcoY29udGV4dCkge1xuICAgIGlmKHRoaXMuaGlkZGVuKSByZXR1cm47XG4gICAgc3VwZXIuZHJhdyhjb250ZXh0KTtcblxuICAgIGNvbnN0IGNhbnZhcyA9IGNvbnRleHQuY2FudmFzO1xuICAgIGNvbnN0IGN0eCA9IGNhbnZhcy5nZXRDb250ZXh0KFwiMmRcIik7XG4gICAgXG4gICAgVXRpbHMuZHJhd0Fycm93KGN0eCwgdGhpcy54LCB0aGlzLnksIHRoaXMudG9YLCB0aGlzLnRvWSwgdGhpcy5zdHlsZS5saW5lV2lkdGgsIHRoaXMuc3R5bGUuaGVhZFNpemUsIHRoaXMuc3R5bGUuY29sb3IsIHRoaXMuc3R5bGUubGluZUNhcCk7XG5cbiAgICB0aGlzLmluaXQgPSB0cnVlO1xuICB9XG5cbiAgZ2V0IHdpZHRoKCkge1xuICAgIHJldHVybiBNYXRoLmFicyh0aGlzLnggLSB0aGlzLnRvWCk7XG4gIH1cblxuICBnZXQgaGVpZ2h0KCkge1xuICAgIHJldHVybiBNYXRoLmFicyh0aGlzLnkgLSB0aGlzLnRvWSk7XG4gIH1cblxuICBnZXQgZGVmYXVsdFN0eWxlKCkge1xuICAgIHJldHVybiBuZXcgU3R5bGUoe1xuICAgICAgXCJsaW5lV2lkdGhcIjogQ29uc3RhbnRzLlNldHRpbmcuQVJST1dfREVGQVVMVF9MSU5FX1NJWkUsXG4gICAgICBcImhlYWRTaXplXCI6IENvbnN0YW50cy5TZXR0aW5nLkFSUk9XX0RFRkFVTFRfSEVBRF9TSVpFLFxuICAgICAgXCJjb2xvclwiOiBDb25zdGFudHMuU2V0dGluZy5BUlJPV19ERUZBVUxUX0NPTE9SLFxuICAgICAgXCJsaW5lQ2FwXCI6IENvbnN0YW50cy5TZXR0aW5nLkFSUk9XX0RFRkFVTFRfTElORV9DQVBcbiAgICB9KTtcbiAgfVxufSIsIi8qXG4gKiBDb3B5cmlnaHQgKEMpIDIwMjAgRWxpYXN0aWsgKGVsaWFzdGlrc29mdHMuY29tKVxuICpcbiAqIFRoaXMgZmlsZSBpcyBwYXJ0IG9mIFwiSlNHYW1lVG9vbHNcIi5cbiAqXG4gKiBcIkpTR2FtZVRvb2xzXCIgaXMgZnJlZSBzb2Z0d2FyZTogeW91IGNhbiByZWRpc3RyaWJ1dGUgaXQgYW5kL29yIG1vZGlmeVxuICogaXQgdW5kZXIgdGhlIHRlcm1zIG9mIHRoZSBHTlUgR2VuZXJhbCBQdWJsaWMgTGljZW5zZSBhcyBwdWJsaXNoZWQgYnlcbiAqIHRoZSBGcmVlIFNvZnR3YXJlIEZvdW5kYXRpb24sIGVpdGhlciB2ZXJzaW9uIDMgb2YgdGhlIExpY2Vuc2UsIG9yXG4gKiAoYXQgeW91ciBvcHRpb24pIGFueSBsYXRlciB2ZXJzaW9uLlxuICpcbiAqIFwiSlNHYW1lVG9vbHNcIiBpcyBkaXN0cmlidXRlZCBpbiB0aGUgaG9wZSB0aGF0IGl0IHdpbGwgYmUgdXNlZnVsLFxuICogYnV0IFdJVEhPVVQgQU5ZIFdBUlJBTlRZOyB3aXRob3V0IGV2ZW4gdGhlIGltcGxpZWQgd2FycmFudHkgb2ZcbiAqIE1FUkNIQU5UQUJJTElUWSBvciBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRS4gIFNlZSB0aGVcbiAqIEdOVSBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlIGZvciBtb3JlIGRldGFpbHMuXG4gKlxuICogWW91IHNob3VsZCBoYXZlIHJlY2VpdmVkIGEgY29weSBvZiB0aGUgR05VIEdlbmVyYWwgUHVibGljIExpY2Vuc2VcbiAqIGFsb25nIHdpdGggXCJKU0dhbWVUb29sc1wiLiAgSWYgbm90LCBzZWUgPGh0dHA6Ly93d3cuZ251Lm9yZy9saWNlbnNlcy8+LlxuICovXG5pbXBvcnQgQ29tcG9uZW50IGZyb20gXCIuL0NvbXBvbmVudFwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBCb3ggZXh0ZW5kcyBDb21wb25lbnQge1xuICBzZWxlY3RhYmxlID0gZmFsc2U7XG5cbiAgY29uc3RydWN0b3IoeCwgeSwgd2lkdGgsIGhlaWdodCwgc3R5bGUpIHtcbiAgICBzdXBlcih4LCB5LCB3aWR0aCwgaGVpZ2h0LCBzdHlsZSk7XG4gIH1cbiAgXG4gIGRyYXcoY29udGV4dCkge1xuICAgIGlmKHRoaXMuaGlkZGVuKSByZXR1cm47XG4gICAgc3VwZXIuZHJhdyhjb250ZXh0KTtcblxuICAgIGNvbnN0IGNhbnZhcyA9IGNvbnRleHQuY2FudmFzO1xuICAgIGNvbnN0IGN0eCA9IGNhbnZhcy5nZXRDb250ZXh0KFwiMmRcIik7XG4gICAgY3R4LnNhdmUoKTtcblxuICAgIHRoaXMuZHJhd0JhY2tncm91bmQoY3R4KTtcbiAgICB0aGlzLmRyYXdCb3JkZXIoY3R4KTtcbiAgICBcbiAgICBjdHgucmVzdG9yZSgpO1xuICB9XG5cbiAgZHJhd0JhY2tncm91bmQoY3R4KSB7XG4gICAgY29uc3QgY29sb3IgPSB0aGlzLmJhY2tncm91bmRDb2xvcjtcblxuICAgIGlmKGNvbG9yKSB7XG4gICAgICBjdHguc2F2ZSgpO1xuICBcbiAgICAgIGN0eC5maWxsU3R5bGUgPSBjb2xvcjtcbiAgICAgIGN0eC5maWxsUmVjdChNYXRoLnJvdW5kKHRoaXMueCksIE1hdGgucm91bmQodGhpcy55KSwgTWF0aC5yb3VuZCh0aGlzLndpZHRoKSwgTWF0aC5yb3VuZCh0aGlzLmhlaWdodCkpO1xuXG4gICAgICBjdHgucmVzdG9yZSgpO1xuICAgIH1cbiAgfVxuXG4gIGdldCBiYWNrZ3JvdW5kQ29sb3IoKSB7XG4gICAgbGV0IGNvbG9yID0gbnVsbDtcblxuICAgIGlmKHRoaXMuaG92ZXJlZCAmJiB0aGlzLmNsaWNrZWQgJiYgdGhpcy5zdHlsZS5iYWNrZ3JvdW5kQ29sb3JEb3duICE9IG51bGwpIHtcbiAgICAgIGNvbG9yID0gdGhpcy5zdHlsZS5iYWNrZ3JvdW5kQ29sb3JEb3duO1xuICAgIH0gZWxzZSBpZih0aGlzLmhvdmVyZWQgJiYgdGhpcy5zdHlsZS5iYWNrZ3JvdW5kQ29sb3JIb3ZlciAhPSBudWxsKSB7XG4gICAgICBjb2xvciA9IHRoaXMuc3R5bGUuYmFja2dyb3VuZENvbG9ySG92ZXI7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbG9yID0gdGhpcy5zdHlsZS5iYWNrZ3JvdW5kQ29sb3I7XG4gICAgfVxuXG4gICAgcmV0dXJuIGNvbG9yO1xuICB9XG5cbiAgZHJhd0JvcmRlcihjdHgpIHtcbiAgICBjb25zdCBjb2xvciA9IHRoaXMuYm9yZGVyQ29sb3I7XG5cbiAgICBpZihjb2xvciAmJiB0aGlzLnN0eWxlLmJvcmRlclNpemUgPiAwKSB7XG4gICAgICBjdHguc2F2ZSgpO1xuICAgICAgXG4gICAgICBjdHguc3Ryb2tlU3R5bGUgPSBjb2xvcjtcbiAgICAgIGN0eC5saW5lV2lkdGggPSB0aGlzLnN0eWxlLmJvcmRlclNpemU7XG4gICAgICBcbiAgICAgIGN0eC5zdHJva2VSZWN0KE1hdGgucm91bmQodGhpcy54KSwgTWF0aC5yb3VuZCh0aGlzLnkpLCBNYXRoLnJvdW5kKHRoaXMud2lkdGggLSB0aGlzLnN0eWxlLmJvcmRlclNpemUgLyAyKSwgTWF0aC5yb3VuZCh0aGlzLmhlaWdodCAtIHRoaXMuc3R5bGUuYm9yZGVyU2l6ZSAvIDIpKTtcbiAgXG4gICAgICBjdHgucmVzdG9yZSgpO1xuICAgIH1cbiAgfVxuXG4gIGdldCBib3JkZXJDb2xvcigpIHtcbiAgICBsZXQgY29sb3IgPSBudWxsO1xuXG4gICAgaWYodGhpcy5jbGlja2VkICYmIHRoaXMuaG92ZXJlZCAmJiB0aGlzLnN0eWxlLmJvcmRlckNvbG9yRG93biAhPSBudWxsKSB7XG4gICAgICBjb2xvciA9IHRoaXMuc3R5bGUuYm9yZGVyQ29sb3JEb3duO1xuICAgIH0gZWxzZSBpZighdGhpcy5jbGlja2VkICYmIHRoaXMuaG92ZXJlZCAmJiB0aGlzLnN0eWxlLmJvcmRlckNvbG9ySG92ZXIgIT0gbnVsbCkge1xuICAgICAgY29sb3IgPSB0aGlzLnN0eWxlLmJvcmRlckNvbG9ySG92ZXI7XG4gICAgfSBlbHNlIGlmKHRoaXMuc2VsZWN0YWJsZSAmJiB0aGlzLnNlbGVjdGVkICYmIHRoaXMuc3R5bGUuYm9yZGVyQ29sb3JTZWxlY3RlZCAhPSBudWxsKSB7XG4gICAgICBjb2xvciA9IHRoaXMuc3R5bGUuYm9yZGVyQ29sb3JTZWxlY3RlZDtcbiAgICB9IGVsc2Uge1xuICAgICAgY29sb3IgPSB0aGlzLnN0eWxlLmJvcmRlckNvbG9yO1xuICAgIH1cblxuICAgIHJldHVybiBjb2xvcjtcbiAgfVxufSIsIi8qXG4gKiBDb3B5cmlnaHQgKEMpIDIwMjAgRWxpYXN0aWsgKGVsaWFzdGlrc29mdHMuY29tKVxuICpcbiAqIFRoaXMgZmlsZSBpcyBwYXJ0IG9mIFwiSlNHYW1lVG9vbHNcIi5cbiAqXG4gKiBcIkpTR2FtZVRvb2xzXCIgaXMgZnJlZSBzb2Z0d2FyZTogeW91IGNhbiByZWRpc3RyaWJ1dGUgaXQgYW5kL29yIG1vZGlmeVxuICogaXQgdW5kZXIgdGhlIHRlcm1zIG9mIHRoZSBHTlUgR2VuZXJhbCBQdWJsaWMgTGljZW5zZSBhcyBwdWJsaXNoZWQgYnlcbiAqIHRoZSBGcmVlIFNvZnR3YXJlIEZvdW5kYXRpb24sIGVpdGhlciB2ZXJzaW9uIDMgb2YgdGhlIExpY2Vuc2UsIG9yXG4gKiAoYXQgeW91ciBvcHRpb24pIGFueSBsYXRlciB2ZXJzaW9uLlxuICpcbiAqIFwiSlNHYW1lVG9vbHNcIiBpcyBkaXN0cmlidXRlZCBpbiB0aGUgaG9wZSB0aGF0IGl0IHdpbGwgYmUgdXNlZnVsLFxuICogYnV0IFdJVEhPVVQgQU5ZIFdBUlJBTlRZOyB3aXRob3V0IGV2ZW4gdGhlIGltcGxpZWQgd2FycmFudHkgb2ZcbiAqIE1FUkNIQU5UQUJJTElUWSBvciBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRS4gIFNlZSB0aGVcbiAqIEdOVSBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlIGZvciBtb3JlIGRldGFpbHMuXG4gKlxuICogWW91IHNob3VsZCBoYXZlIHJlY2VpdmVkIGEgY29weSBvZiB0aGUgR05VIEdlbmVyYWwgUHVibGljIExpY2Vuc2VcbiAqIGFsb25nIHdpdGggXCJKU0dhbWVUb29sc1wiLiAgSWYgbm90LCBzZWUgPGh0dHA6Ly93d3cuZ251Lm9yZy9saWNlbnNlcy8+LlxuICovXG5pbXBvcnQgUm93IGZyb20gXCIuL1Jvd1wiO1xuaW1wb3J0IENvbnN0YW50cyBmcm9tIFwiLi9Db25zdGFudHNcIjtcbmltcG9ydCBTdHlsZSBmcm9tIFwiLi9TdHlsZVwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBCdXR0b24gZXh0ZW5kcyBSb3cge1xuICBzZWxlY3RhYmxlID0gdHJ1ZTtcblxuICBjb25zdHJ1Y3Rvcih4LCB5LCBtYXhXaWR0aCwgbWF4SGVpZ2h0LCBzdHlsZSwgLi4uY29tcG9uZW50cykge1xuICAgIHN1cGVyKHgsIHksIG1heFdpZHRoLCBtYXhIZWlnaHQsIHN0eWxlLCAuLi5jb21wb25lbnRzKTtcbiAgfVxuICBcbiAgZHJhdyhjb250ZXh0KSB7XG4gICAgaWYodGhpcy5oaWRkZW4pIHJldHVybjtcbiAgICBzdXBlci5kcmF3KGNvbnRleHQpO1xuXG4gICAgY29uc3QgY2FudmFzID0gY29udGV4dC5jYW52YXM7XG4gICAgY29uc3QgY3R4ID0gY2FudmFzLmdldENvbnRleHQoXCIyZFwiKTtcbiAgICBjdHguc2F2ZSgpO1xuICAgIFxuICAgIHRoaXMuZHJhd0NvbXBvbmVudHMoY3R4KTtcbiAgICBcbiAgICBjdHgucmVzdG9yZSgpO1xuICB9XG5cbiAgZHJhd0NvbXBvbmVudHMoY3R4KSB7XG4gICAgc3VwZXIuZHJhdyhjdHgpO1xuICB9XG5cbiAgZ2V0IGhlaWdodCgpIHtcbiAgICByZXR1cm4gKHRoaXMubWF4SGVpZ2h0IHx8IHN1cGVyLmhlaWdodCkgKyB0aGlzLnN0eWxlLnBhZGRpbmc7XG4gIH1cblxuICBnZXQgd2lkdGgoKSB7XG4gICAgcmV0dXJuICh0aGlzLm1heFdpZHRoIHx8IHN1cGVyLndpZHRoKSArIHRoaXMuc3R5bGUucGFkZGluZztcbiAgfVxuXG4gIGdldCBkZWZhdWx0U3R5bGUoKSB7XG4gICAgcmV0dXJuIG5ldyBTdHlsZSh7XG4gICAgICBcImJhY2tncm91bmRDb2xvclwiOiBDb25zdGFudHMuU2V0dGluZy5CVVRUT05fREVGQVVMVF9CQUNLR1JPVU5ELFxuICAgICAgXCJiYWNrZ3JvdW5kQ29sb3JIb3ZlclwiOiBDb25zdGFudHMuU2V0dGluZy5CVVRUT05fREVGQVVMVF9IT1ZFUl9CQUNLR1JPVU5ELFxuICAgICAgXCJiYWNrZ3JvdW5kQ29sb3JEb3duXCI6IENvbnN0YW50cy5TZXR0aW5nLkJVVFRPTl9ERUZBVUxUX0NMSUNLX0JBQ0tHUk9VTkQsXG4gICAgICBcInNjcm9sbFhEaXNhYmxlZFwiOiB0cnVlLFxuICAgICAgXCJzY3JvbGxZRGlzYWJsZWRcIjogdHJ1ZVxuICAgIH0pO1xuICB9XG59IiwiLypcbiAqIENvcHlyaWdodCAoQykgMjAyMCBFbGlhc3RpayAoZWxpYXN0aWtzb2Z0cy5jb20pXG4gKlxuICogVGhpcyBmaWxlIGlzIHBhcnQgb2YgXCJKU0dhbWVUb29sc1wiLlxuICpcbiAqIFwiSlNHYW1lVG9vbHNcIiBpcyBmcmVlIHNvZnR3YXJlOiB5b3UgY2FuIHJlZGlzdHJpYnV0ZSBpdCBhbmQvb3IgbW9kaWZ5XG4gKiBpdCB1bmRlciB0aGUgdGVybXMgb2YgdGhlIEdOVSBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlIGFzIHB1Ymxpc2hlZCBieVxuICogdGhlIEZyZWUgU29mdHdhcmUgRm91bmRhdGlvbiwgZWl0aGVyIHZlcnNpb24gMyBvZiB0aGUgTGljZW5zZSwgb3JcbiAqIChhdCB5b3VyIG9wdGlvbikgYW55IGxhdGVyIHZlcnNpb24uXG4gKlxuICogXCJKU0dhbWVUb29sc1wiIGlzIGRpc3RyaWJ1dGVkIGluIHRoZSBob3BlIHRoYXQgaXQgd2lsbCBiZSB1c2VmdWwsXG4gKiBidXQgV0lUSE9VVCBBTlkgV0FSUkFOVFk7IHdpdGhvdXQgZXZlbiB0aGUgaW1wbGllZCB3YXJyYW50eSBvZlxuICogTUVSQ0hBTlRBQklMSVRZIG9yIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFLiAgU2VlIHRoZVxuICogR05VIEdlbmVyYWwgUHVibGljIExpY2Vuc2UgZm9yIG1vcmUgZGV0YWlscy5cbiAqXG4gKiBZb3Ugc2hvdWxkIGhhdmUgcmVjZWl2ZWQgYSBjb3B5IG9mIHRoZSBHTlUgR2VuZXJhbCBQdWJsaWMgTGljZW5zZVxuICogYWxvbmcgd2l0aCBcIkpTR2FtZVRvb2xzXCIuICBJZiBub3QsIHNlZSA8aHR0cDovL3d3dy5nbnUub3JnL2xpY2Vuc2VzLz4uXG4gKi9cbmltcG9ydCBJbWFnZUNvbnRhaW5lciBmcm9tIFwiLi9JbWFnZUNvbnRhaW5lclwiO1xuaW1wb3J0IEJ1dHRvbiBmcm9tIFwiLi9CdXR0b25cIjtcbmltcG9ydCBTdHlsZSBmcm9tIFwiLi9TdHlsZVwiO1xuaW1wb3J0IENvbnN0YW50cyBmcm9tIFwiLi9Db25zdGFudHNcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQnV0dG9uSW1hZ2UgZXh0ZW5kcyBCdXR0b24ge1xuICBjb25zdHJ1Y3RvcihpbWdTcmMsIHgsIHksIGFsaWduZW1lbnQsIHZlcnRpY2FsQWxpZ25lbWVudCwgd2lkdGgsIGhlaWdodCwgYmFja2dyb3VuZENvbG9yLCBiYWNrZ3JvdW5kQ29sb3JIb3ZlciwgaW1hZ2VMb2FkZXIpIHtcbiAgICBjb25zdCBzdHlsZSA9IG5ldyBTdHlsZSh7XG4gICAgICBcImFsaWduZW1lbnRcIjogYWxpZ25lbWVudCxcbiAgICAgIFwidmVydGljYWxBbGlnbmVtZW50XCI6IHZlcnRpY2FsQWxpZ25lbWVudCxcbiAgICAgIFwiYmFja2dyb3VuZENvbG9yXCI6IGJhY2tncm91bmRDb2xvciB8fCBDb25zdGFudHMuU2V0dGluZy5CVVRUT05fREVGQVVMVF9CQUNLR1JPVU5ELFxuICAgICAgXCJiYWNrZ3JvdW5kQ29sb3JIb3ZlclwiOiBiYWNrZ3JvdW5kQ29sb3JIb3ZlciB8fCBDb25zdGFudHMuU2V0dGluZy5CVVRUT05fREVGQVVMVF9IT1ZFUl9CQUNLR1JPVU5EXG4gICAgfSk7XG5cbiAgICBzdXBlcih4LCB5LCB3aWR0aCwgaGVpZ2h0LCBzdHlsZSk7XG4gICAgdGhpcy5pbWFnZSA9IG5ldyBJbWFnZUNvbnRhaW5lcihpbWdTcmMsIHgsIHksIHdpZHRoLCBoZWlnaHQsIG5ldyBTdHlsZSh7IFwiYWxpZ25lbWVudFwiOiBcImNlbnRlclwiLCBcInZlcnRpY2FsQWxpZ25lbWVudFwiOiBcImNlbnRlclwiIH0pLCBpbWFnZUxvYWRlcik7XG4gICAgdGhpcy5hZGQodGhpcy5pbWFnZSk7XG5cbiAgICBjb25zb2xlICYmIGNvbnNvbGUud2FybiAmJiBjb25zb2xlLndhcm4oQ29uc3RhbnRzLlN0cmluZy5OT1RJQ0VfTUVTU0FHRSArIFwiIFwiICsgQ29uc3RhbnRzLlN0cmluZy5CVVRUT05fSU1BR0VfREVQUkVDQVRFRCk7XG4gIH1cblxuICBsb2FkSW1hZ2UoaW1hZ2VMb2FkZXIpIHtcbiAgICBpZih0aGlzLmNvbXBvbmVudHNbMF0gaW5zdGFuY2VvZiBJbWFnZUNvbnRhaW5lcikgdGhpcy5jb21wb25lbnRzWzBdLmxvYWRJbWFnZShpbWFnZUxvYWRlcik7XG4gIH1cblxuICBzZXQgbWluV2lkdGgod2lkdGgpIHtcbiAgICB0aGlzLmltYWdlLndpZHRoID0gd2lkdGg7XG4gICAgc3VwZXIubWluV2lkdGggPSB3aWR0aDtcbiAgfVxuXG4gIHNldCBtaW5IZWlnaHQoaGVpZ2h0KSB7XG4gICAgdGhpcy5pbWFnZS5oZWlnaHQgPSBoZWlnaHQ7XG4gICAgc3VwZXIubWluSGVpZ2h0ID0gaGVpZ2h0O1xuICB9XG5cbiAgZ2V0IG1pbldpZHRoKCkge1xuICAgIHJldHVybiBzdXBlci5taW5XaWR0aDtcbiAgfVxuXG4gIGdldCBtaW5IZWlnaHQoKSB7XG4gICAgcmV0dXJuIHN1cGVyLm1pbkhlaWdodDtcbiAgfVxuXG4gIHNldCBtYXhXaWR0aCh3aWR0aCkge1xuICAgIHRoaXMuaW1hZ2Uud2lkdGggPSB3aWR0aDtcbiAgICBzdXBlci5tYXhXaWR0aCA9IHdpZHRoO1xuICB9XG5cbiAgc2V0IG1heEhlaWdodChoZWlnaHQpIHtcbiAgICB0aGlzLmltYWdlLmhlaWdodCA9IGhlaWdodDtcbiAgICBzdXBlci5tYXhIZWlnaHQgPSBoZWlnaHQ7XG4gIH1cblxuICBnZXQgbWF4V2lkdGgoKSB7XG4gICAgcmV0dXJuIHN1cGVyLm1heFdpZHRoO1xuICB9XG5cbiAgZ2V0IG1heEhlaWdodCgpIHtcbiAgICByZXR1cm4gc3VwZXIubWF4SGVpZ2h0O1xuICB9XG5cbiAgc2V0IHdpZHRoKHdpZHRoKSB7XG4gICAgdGhpcy5taW5XaWR0aCA9IHdpZHRoO1xuICAgIHRoaXMubWF4V2lkdGggPSB3aWR0aDtcbiAgfVxuXG4gIGdldCB3aWR0aCgpIHtcbiAgICByZXR1cm4gc3VwZXIud2lkdGg7XG4gIH1cblxuICBzZXQgaGVpZ2h0KGhlaWdodCkge1xuICAgIHRoaXMubWluSGVpZ2h0ID0gaGVpZ2h0O1xuICAgIHRoaXMubWF4SGVpZ2h0ID0gaGVpZ2h0O1xuICB9XG5cbiAgZ2V0IGhlaWdodCgpIHtcbiAgICByZXR1cm4gc3VwZXIuaGVpZ2h0O1xuICB9XG59IiwiLypcbiAqIENvcHlyaWdodCAoQykgMjAyMCBFbGlhc3RpayAoZWxpYXN0aWtzb2Z0cy5jb20pXG4gKlxuICogVGhpcyBmaWxlIGlzIHBhcnQgb2YgXCJKU0dhbWVUb29sc1wiLlxuICpcbiAqIFwiSlNHYW1lVG9vbHNcIiBpcyBmcmVlIHNvZnR3YXJlOiB5b3UgY2FuIHJlZGlzdHJpYnV0ZSBpdCBhbmQvb3IgbW9kaWZ5XG4gKiBpdCB1bmRlciB0aGUgdGVybXMgb2YgdGhlIEdOVSBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlIGFzIHB1Ymxpc2hlZCBieVxuICogdGhlIEZyZWUgU29mdHdhcmUgRm91bmRhdGlvbiwgZWl0aGVyIHZlcnNpb24gMyBvZiB0aGUgTGljZW5zZSwgb3JcbiAqIChhdCB5b3VyIG9wdGlvbikgYW55IGxhdGVyIHZlcnNpb24uXG4gKlxuICogXCJKU0dhbWVUb29sc1wiIGlzIGRpc3RyaWJ1dGVkIGluIHRoZSBob3BlIHRoYXQgaXQgd2lsbCBiZSB1c2VmdWwsXG4gKiBidXQgV0lUSE9VVCBBTlkgV0FSUkFOVFk7IHdpdGhvdXQgZXZlbiB0aGUgaW1wbGllZCB3YXJyYW50eSBvZlxuICogTUVSQ0hBTlRBQklMSVRZIG9yIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFLiAgU2VlIHRoZVxuICogR05VIEdlbmVyYWwgUHVibGljIExpY2Vuc2UgZm9yIG1vcmUgZGV0YWlscy5cbiAqXG4gKiBZb3Ugc2hvdWxkIGhhdmUgcmVjZWl2ZWQgYSBjb3B5IG9mIHRoZSBHTlUgR2VuZXJhbCBQdWJsaWMgTGljZW5zZVxuICogYWxvbmcgd2l0aCBcIkpTR2FtZVRvb2xzXCIuICBJZiBub3QsIHNlZSA8aHR0cDovL3d3dy5nbnUub3JnL2xpY2Vuc2VzLz4uXG4gKi9cbmltcG9ydCBDb25zdGFudHMgZnJvbSBcIi4vQ29uc3RhbnRzXCI7XG5pbXBvcnQgVXRpbHMgZnJvbSBcIi4vVXRpbHNcIjtcbmltcG9ydCBTY2VuZSBmcm9tIFwiLi9TY2VuZVwiO1xuaW1wb3J0IFJlYWN0b3JDYW52YXMgZnJvbSBcIi4vUmVhY3RvckNhbnZhc1wiO1xuaW1wb3J0IE1lbnUgZnJvbSBcIi4vTWVudVwiO1xuaW1wb3J0IExhYmVsIGZyb20gXCIuL0xhYmVsXCI7XG5pbXBvcnQgU3R5bGUgZnJvbSBcIi4vU3R5bGVcIjtcbmltcG9ydCBCdXR0b24gZnJvbSBcIi4vQnV0dG9uXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIENhbnZhcyB7XG4gICNsYXN0RnJhbWVUaW1lO1xuICAjX3dpZHRoO1xuICAjX2hlaWdodDtcblxuICBjb25zdHJ1Y3RvcihzY2VuZSwgY2FudmFzLCB3aWR0aCwgaGVpZ2h0LCBhdXRvUmVzaXplLCBtYXhGUFMpIHtcbiAgICB0aGlzLmNhbnZhcyA9IGNhbnZhcyB8fCBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiY2FudmFzXCIpO1xuICAgIHRoaXMuY29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICB0aGlzLndpZHRoID0gd2lkdGggfHwgQ29uc3RhbnRzLlNldHRpbmcuQ0FOVkFTX1dJRFRIO1xuICAgIHRoaXMuaGVpZ2h0ID0gaGVpZ2h0IHx8IENvbnN0YW50cy5TZXR0aW5nLkNBTlZBU19IRUlHSFQ7XG4gICAgdGhpcy5zY2VuZSA9IHNjZW5lO1xuICAgIHRoaXMuY29udGFpbmVyLmFwcGVuZENoaWxkKHRoaXMuY2FudmFzKTtcbiAgICB0aGlzLnN0YXJ0ZWQgPSBmYWxzZTtcbiAgICB0aGlzLmluaXQgPSBmYWxzZTtcbiAgICB0aGlzLm1heEZQUyA9IG1heEZQUyB8fCAtMTtcbiAgICB0aGlzLiNsYXN0RnJhbWVUaW1lID0gMDtcbiAgICB0aGlzLmhhc0Vycm9yID0gZmFsc2U7XG4gICAgdGhpcy5mdWxsc2NyZWVuID0gZmFsc2U7XG4gICAgdGhpcy5mdWxscGFnZSA9IGZhbHNlO1xuXG4gICAgLy8gRXJyb3IgbWVzc2FnZSBzY3JlZW5cbiAgICBjb25zdCBidXR0b25TY2VuZUVycm9yID0gbmV3IEJ1dHRvbihudWxsLCBudWxsLCBudWxsLCBudWxsLCBuZXcgU3R5bGUoeyBcImFsaWduZW1lbnRcIjogXCJjZW50ZXJcIiwgXCJiYWNrZ3JvdW5kQ29sb3JcIjogQ29uc3RhbnRzLlNldHRpbmcuQlVUVE9OX0RFRkFVTFRfQUxURVJOQVRJVkVfQkFDS0dST1VORCB9KSwgbmV3IExhYmVsKENvbnN0YW50cy5TdHJpbmcuUkVUUlksIG51bGwsIG51bGwsIG5ldyBTdHlsZSh7IFwiZm9udENvbG9yXCI6IFwid2hpdGVcIiwgXCJhbGlnbmVtZW50XCI6IFwiY2VudGVyXCIgfSkpKTtcbiAgICBjb25zdCBtZW51U2NlbmVFcnJvciA9IG5ldyBNZW51KG5ldyBTdHlsZSh7IFwic3BhY2VCZXR3ZWVuQ29tcG9uZW50c1wiOiAxNSB9KSwgbmV3IExhYmVsKENvbnN0YW50cy5TdHJpbmcuRVJST1JfTUVTU0FHRV9DQU5WQVNfTEFCRUwsIG51bGwsIG51bGwsIG5ldyBTdHlsZSh7IFwiZm9udENvbG9yXCI6IFwid2hpdGVcIiwgXCJhbGlnbmVtZW50XCI6IFwiY2VudGVyXCIgfSkpLCBidXR0b25TY2VuZUVycm9yKTtcbiAgICBtZW51U2NlbmVFcnJvci5lbmFibGUoKTtcblxuICAgIHRoaXMuc2NlbmVFcnJvciA9IG5ldyBTY2VuZShtZW51U2NlbmVFcnJvcik7XG4gICAgdGhpcy5zY2VuZVByZXZpb3VzID0gdGhpcy5zY2VuZTtcblxuICAgIGJ1dHRvblNjZW5lRXJyb3IuYWRkQ2xpY2tBY3Rpb24oKCkgPT4ge1xuICAgICAgdGhpcy5oYXNFcnJvciA9IGZhbHNlO1xuICAgICAgdGhpcy5zY2VuZSA9IHRoaXMuc2NlbmVQcmV2aW91c1xuICAgIH0pO1xuICAgIFxuICAgIC8vIFJlYWN0b3JzL2V2ZW50c1xuICAgIHRoaXMucmVhY3RvciA9IG5ldyBSZWFjdG9yQ2FudmFzKCk7XG4gICAgdGhpcy5yZWFjdG9yLnJlZ2lzdGVyRXZlbnQoXCJtb3VzZW1vdmVcIik7XG4gICAgdGhpcy5yZWFjdG9yLnJlZ2lzdGVyRXZlbnQoXCJjbGlja1wiKTtcbiAgICB0aGlzLnJlYWN0b3IucmVnaXN0ZXJFdmVudChcIm1vdXNlZG93blwiKTtcbiAgICB0aGlzLnJlYWN0b3IucmVnaXN0ZXJFdmVudChcIm1vdXNldXBcIik7XG4gICAgdGhpcy5yZWFjdG9yLnJlZ2lzdGVyRXZlbnQoXCJ3aGVlbFwiKTtcbiAgICB0aGlzLnJlYWN0b3IucmVnaXN0ZXJFdmVudChcInRvdWNoc3RhcnRcIik7XG4gICAgdGhpcy5yZWFjdG9yLnJlZ2lzdGVyRXZlbnQoXCJ0b3VjaGVuZFwiKTtcbiAgICB0aGlzLnJlYWN0b3IucmVnaXN0ZXJFdmVudChcInRvdWNobW92ZVwiKTtcblxuICAgIGlmKGF1dG9SZXNpemUpIHRoaXMuYXV0b1Jlc2l6ZSgpO1xuICAgIHRoaXMuY3JlYXRlRXZlbnRzKCk7XG5cbiAgICBpZihDb25zdGFudHMuU2V0dGluZy5ESVNBQkxFX09QVElNSVpBVElPTlMpIHtcbiAgICAgIGNvbnNvbGUgJiYgY29uc29sZS5pbmZvKENvbnN0YW50cy5TdHJpbmcuTk9USUNFX01FU1NBR0UgKyBcIiBcIiArIENvbnN0YW50cy5TdHJpbmcuT1BUSU1JWkFUSU9OX0RJU0FCTEVEKTtcbiAgICB9XG5cbiAgICBpZihDb25zdGFudHMuU2V0dGluZy5ESVNBQkxFX0NPTlRBSU5FUlNfQ1VUVElORykge1xuICAgICAgY29uc29sZSAmJiBjb25zb2xlLmluZm8oQ29uc3RhbnRzLlN0cmluZy5OT1RJQ0VfTUVTU0FHRSArIFwiIFwiICsgQ29uc3RhbnRzLlN0cmluZy5DT05UQUlORVJfQ1VUVElOR19ESVNBQkxFRCk7XG4gICAgfVxuICB9XG5cbiAgZHJhdygpIHtcbiAgICBjb25zdCBjdHggPSB0aGlzLmNhbnZhcy5nZXRDb250ZXh0KFwiMmRcIik7XG4gICAgdGhpcy5kcmF3Q2xlYXIoY3R4KTtcbiAgICB0aGlzLmRyYXdTY2VuZShjdHgpO1xuICB9XG5cbiAgZHJhd1NjZW5lKGN0eCkge1xuICAgIGlmKHRoaXMuc2NlbmUpIHtcbiAgICAgIHRoaXMuc2NlbmUucGFyZW50ID0gdGhpcztcbiAgICAgIHRoaXMuc2NlbmUuY2FudmFzID0gdGhpcztcblxuICAgICAgdHJ5IHtcbiAgICAgICAgY3R4LnNjYWxlKENvbnN0YW50cy5TZXR0aW5nLlBJWEVMX1JBVElPLCBDb25zdGFudHMuU2V0dGluZy5QSVhFTF9SQVRJTyk7XG4gICAgICAgIHRoaXMuc2NlbmUuZHJhdyhjdHgpO1xuICAgICAgfSBjYXRjaChlKSB7XG4gICAgICAgIHRoaXMuaGFzRXJyb3IgPSB0cnVlO1xuICAgICAgICB0aGlzLnNjZW5lID0gdGhpcy5zY2VuZUVycm9yO1xuICAgICAgICBjb25zb2xlLmVycm9yKENvbnN0YW50cy5TdHJpbmcuRVJST1JfTUVTU0FHRSArIFwiIFwiICsgQ29uc3RhbnRzLlN0cmluZy5FUlJPUl9NRVNTQUdFX0NBTlZBUyArIFwiXFxuXCIsIGUpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIGRyYXdDbGVhcihjdHgpIHtcbiAgICBVdGlscy5jbGVhcihjdHgpO1xuICB9XG5cbiAgc3RhcnREcmF3KGZ1bmMpIHtcbiAgICB0aGlzLnN0YXJ0ZWQgPSB0cnVlO1xuXG4gICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKHRpbWUgPT4ge1xuICAgICAgaWYodGhpcy5zdGFydGVkKSB7XG4gICAgICAgIGNvbnN0IG9mZnNldEZyYW1lID0gdGltZSAtIHRoaXMuI2xhc3RGcmFtZVRpbWU7XG5cbiAgICAgICAgdGhpcy5mdWxsc2NyZWVuID0gZG9jdW1lbnQuZnVsbHNjcmVlbkVsZW1lbnQgPT0gdGhpcy5jYW52YXMgfHwgZG9jdW1lbnQuZnVsbHNjcmVlbkVsZW1lbnQgPT0gdGhpcy5jb250YWluZXI7XG5cbiAgICAgICAgaWYoQ29uc3RhbnRzLlNldHRpbmcuRU5BQkxFX1BJWEVMX1JBVElPX1JFU0laSU5HKSB7XG4gICAgICAgICAgQ29uc3RhbnRzLlNldHRpbmcuUElYRUxfUkFUSU8gPSB3aW5kb3cuZGV2aWNlUGl4ZWxSYXRpbzsgLy8gVXBkYXRlIHRoZSBkZXZpY2UgcGl4ZWwgcmF0aW8sIG9ubHkgaW4gZnVsbHNjcmVlbiBtb2RlL2Z1bGxwYWdlIG1vZGVcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBDb25zdGFudHMuU2V0dGluZy5QSVhFTF9SQVRJTyA9IDE7XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCByZWN0ID0gdGhpcy5jYW52YXMuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG5cbiAgICAgICAgdGhpcy5jYW52YXMud2lkdGggPSByZWN0LndpZHRoICogQ29uc3RhbnRzLlNldHRpbmcuUElYRUxfUkFUSU87XG4gICAgICAgIHRoaXMuY2FudmFzLmhlaWdodCA9IHJlY3QuaGVpZ2h0ICogQ29uc3RhbnRzLlNldHRpbmcuUElYRUxfUkFUSU87XG4gICAgICAgIFxuICAgICAgICB0aGlzLmNhbnZhcy5zdHlsZS53aWR0aCA9IHJlY3Qud2lkdGggKyBcInB4XCI7XG4gICAgICAgIHRoaXMuY2FudmFzLnN0eWxlLmhlaWdodCA9ICByZWN0LmhlaWdodCArIFwicHhcIjtcblxuICAgICAgICBpZih0aGlzLm1heEZQUyA8IDEgfHwgb2Zmc2V0RnJhbWUgPiAxMDAwIC8gdGhpcy5tYXhGUFMpIHtcbiAgICAgICAgICB0aGlzLiNsYXN0RnJhbWVUaW1lID0gdGltZTtcbiAgICAgICAgICB0aGlzLmRyYXcoKTtcbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgdGhpcy5zdGFydERyYXcoZnVuYyk7XG4gICAgICAgIGlmKGZ1bmMpIGZ1bmMoKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIHN0b3BEcmF3KCkge1xuICAgIHRoaXMuc3RhcnRlZCA9IGZhbHNlO1xuICB9XG5cbiAgYXBwZW5kVG8oZWxlbWVudCkge1xuICAgIGVsZW1lbnQuYXBwZW5kQ2hpbGQodGhpcy5jb250YWluZXIpO1xuICB9XG5cbiAgcmVtb3ZlKGVsZW1lbnQpIHtcbiAgICBlbGVtZW50LnJlbW92ZUNoaWxkKHRoaXMuY29udGFpbmVyKTtcbiAgICB0aGlzLmNvbnRhaW5lci5yZW1vdmVDaGlsZCh0aGlzLmNhbnZhcyk7XG4gIH1cblxuICB0b2dnbGVGdWxsc2NyZWVuKCkge1xuICAgIFV0aWxzLnRvZ2dsZUZ1bGxzY3JlZW4odGhpcy5jYW52YXMsIHRoaXMuY29udGFpbmVyKTtcbiAgfVxuXG4gIHRvZ2dsZUZ1bGxwYWdlKCkge1xuICAgIFV0aWxzLnRvZ2dsZUZ1bGxwYWdlKHRoaXMuY2FudmFzLCB0aGlzLmNvbnRhaW5lcik7XG4gICAgdGhpcy5mdWxscGFnZSA9ICF0aGlzLmZ1bGxwYWdlO1xuICB9XG5cbiAgYXV0b1Jlc2l6ZSgpIHtcbiAgICBVdGlscy5lbmFibGVBdXRvUmVzaXplQ2FudmFzKHRoaXMuY2FudmFzLCB0aGlzLmNvbnRhaW5lciwgdGhpcy53aWR0aCwgdGhpcy5oZWlnaHQpO1xuICB9XG5cbiAgZ2V0IHgoKSB7XG4gICAgcmV0dXJuIDA7XG4gIH1cblxuICBnZXQgeSgpIHtcbiAgICByZXR1cm4gMDtcbiAgfVxuXG4gIGdldCB3aWR0aCgpIHtcbiAgICByZXR1cm4gdGhpcy5jYW52YXMgPyBVdGlscy5nZXRDYW52YXNXaWR0aCh0aGlzLmNhbnZhcykgOiB0aGlzLiNfd2lkdGg7XG4gIH1cblxuICBnZXQgaGVpZ2h0KCkge1xuICAgIHJldHVybiB0aGlzLmNhbnZhcyA/IFV0aWxzLmdldENhbnZhc0hlaWdodCh0aGlzLmNhbnZhcykgOiB0aGlzLiNfaGVpZ2h0O1xuICB9XG5cbiAgZ2V0IHN0eWxlKCkge1xuICAgIHJldHVybiB0aGlzLmNhbnZhcyA/IHRoaXMuY2FudmFzLnN0eWxlIDogbnVsbDtcbiAgfVxuXG4gIHNldCB3aWR0aCh3aWR0aCkge1xuICAgIGlmKHdpZHRoICE9IHRoaXMuI193aWR0aCkge1xuICAgICAgdGhpcy4jX3dpZHRoID0gd2lkdGg7XG4gICAgICB0aGlzLmNhbnZhcy53aWR0aCA9IHdpZHRoO1xuICAgICAgdGhpcy5zY2VuZSAmJiB0aGlzLnNjZW5lLnJlYWN0b3IuZGlzcGF0Y2hFdmVudChcIm9uQ2hhbmdlXCIsIHRoaXMpO1xuICAgIH1cbiAgfVxuXG4gIHNldCBoZWlnaHQoaGVpZ2h0KSB7XG4gICAgaWYoaGVpZ2h0ICE9IHRoaXMuI19oZWlnaHQpIHtcbiAgICAgIHRoaXMuI19oZWlnaHQgPSBoZWlnaHQ7XG4gICAgICB0aGlzLmNhbnZhcy5oZWlnaHQgPSBoZWlnaHQ7XG4gICAgICB0aGlzLnNjZW5lICYmIHRoaXMuc2NlbmUucmVhY3Rvci5kaXNwYXRjaEV2ZW50KFwib25DaGFuZ2VcIiwgdGhpcyk7XG4gICAgfVxuICB9XG5cbiAgZ2V0Q29udGV4dChjb250ZXh0KSB7XG4gICAgcmV0dXJuIHRoaXMuY2FudmFzID8gdGhpcy5jYW52YXMuZ2V0Q29udGV4dChjb250ZXh0ID8gY29udGV4dCA6IFwiMmRcIikgOiBudWxsO1xuICB9XG5cbiAgY3JlYXRlRXZlbnRzKCkge1xuICAgIGlmKCF0aGlzLmluaXQgJiYgdGhpcy5jYW52YXMpIHtcbiAgICAgIFtcIm1vdXNlbW92ZVwiLCBcImNsaWNrXCIsIFwibW91c2Vkb3duXCIsIFwibW91c2V1cFwiLCBcIndoZWVsXCJdLmZvckVhY2goZXZlbnROYW1lID0+IHtcbiAgICAgICAgdGhpcy5jYW52YXMuYWRkRXZlbnRMaXN0ZW5lcihldmVudE5hbWUsIGV2ZW50ID0+IHtcbiAgICAgICAgICBjb25zdCBtb3VzZVBvc2l0aW9uID0gdGhpcy5nZXRNb3VzZVBvcyhldmVudCk7XG4gICAgICAgICAgdGhpcy5kb0V2ZW50cyhldmVudCwgZXZlbnROYW1lLCBtb3VzZVBvc2l0aW9uKTtcbiAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICB9LCBmYWxzZSk7XG4gICAgICB9KTtcblxuICAgICAgW1widG91Y2hzdGFydFwiLCBcInRvdWNobW92ZVwiLCBcInRvdWNoZW5kXCJdLmZvckVhY2goZXZlbnROYW1lID0+IHtcbiAgICAgICAgdGhpcy5jYW52YXMuYWRkRXZlbnRMaXN0ZW5lcihldmVudE5hbWUsIGV2ZW50ID0+IHtcbiAgICAgICAgICBjb25zdCBjaGFuZ2VkVG91Y2hlcyA9IGV2ZW50LmNoYW5nZWRUb3VjaGVzWzBdO1xuICAgICAgICAgIGNvbnN0IHBvc2l0aW9uID0gdGhpcy5nZXRNb3VzZVBvcyhjaGFuZ2VkVG91Y2hlcyk7XG4gICAgICAgICAgdGhpcy5kb0V2ZW50cyhldmVudCwgZXZlbnROYW1lLCBwb3NpdGlvbik7XG4gICAgICAgIH0pO1xuICAgICAgfSk7XG5cbiAgICAgIHRoaXMuaW5pdCA9IHRydWU7XG4gICAgfVxuICB9XG5cbiAgZG9FdmVudHMoZXZlbnQsIGV2ZW50TmFtZSwgcG9zaXRpb24pIHtcbiAgICBjb25zdCBjb21wb25lbnRzID0gdGhpcy5nZXRDb21wb25lbnRzQXRQb3NpdGlvbihwb3NpdGlvbik7IC8vIEdldCBhbGwgZWxlbWVudHMgYXQgdGhlIGN1cnJlbnQgcG9zaXRpb25cbiAgICB0aGlzLnJlYWN0b3IuZGlzcGF0Y2hFdmVudChldmVudE5hbWUsIGV2ZW50LCBmYWxzZSk7IC8vIERpc3BhdGNoIHRvIGFsbCBjb21wb25lbnRzIHRvIGRpc2FibGUgdGhlbSAoY2FsbCB3aXRoIGZhbHNlKVxuICAgIFsuLi5jb21wb25lbnRzXS5yZXZlcnNlKCkuZm9yRWFjaChjb21wb25lbnQgPT4gdGhpcy5yZWFjdG9yLmRpc3BhdGNoRXZlbnRDb21wb25lbnQoZXZlbnROYW1lLCBjb21wb25lbnQsIGV2ZW50LCB0cnVlKSk7IC8vIERpc3BhdGNoIHRvIGNvbXBvbmVudCBkZXRlY3RlZCB0byBlbmFibGUgdGhlbSAoY2FsbCB3aXRoIHRydWUpXG4gIH1cblxuICBhZGRFdmVudExpc3RlbmVyKGV2ZW50LCBjb21wb25lbnQsIGNhbGxiYWNrKSB7XG4gICAgdGhpcy5yZWFjdG9yLmFkZEV2ZW50TGlzdGVuZXIoZXZlbnQsIGNvbXBvbmVudCwgY2FsbGJhY2spO1xuICB9XG4gIFxuICBnZXRNb3VzZVBvcyhldmVudCkge1xuICAgIHJldHVybiBVdGlscy5nZXRNb3VzZVBvcyh0aGlzLmNhbnZhcywgZXZlbnQpO1xuICB9XG5cbiAgZ2V0QWxsQ29tcG9uZW50cyhzdGFydCA9IHRoaXMuc2NlbmUpIHtcbiAgICByZXR1cm4gdGhpcy5zY2VuZS5nZXRBbGxDb21wb25lbnRzKHN0YXJ0KTtcbiAgfVxuXG4gIGdldENvbXBvbmVudHNBdFBvc2l0aW9uKG1vdXNlUG9zaXRpb24sIHN0YXJ0ID0gdGhpcy5zY2VuZSkge1xuICAgIGNvbnN0IGFsbENvbXBvbmVudHMgPSB0aGlzLnNjZW5lLmdldENvbXBvbmVudHNUcmVlKHN0YXJ0KTtcbiAgICBjb25zdCByZXN1bHQgPSBbc3RhcnRdO1xuXG4gICAgaWYoYWxsQ29tcG9uZW50cy5jaGlsZHMpIHtcbiAgICAgIGFsbENvbXBvbmVudHMuY2hpbGRzLnNvcnQoU2NlbmUuc29ydENvbXBvbmVudHNUcmVlKS5yZXZlcnNlKCkuc29tZShjaGlsZCA9PiB7XG4gICAgICAgIGlmKGNoaWxkLmNvbXBvbmVudC5pc0luc2lkZShtb3VzZVBvc2l0aW9uKSAmJiAhY2hpbGQuY29tcG9uZW50LmhpZGRlbiAmJiAhY2hpbGQuY29tcG9uZW50LmRpc2FibGVkKSB7XG4gICAgICAgICAgcmVzdWx0LnB1c2goLi4udGhpcy5nZXRDb21wb25lbnRzQXRQb3NpdGlvbihtb3VzZVBvc2l0aW9uLCBjaGlsZC5jb21wb25lbnQpKTtcbiAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHJlc3VsdDtcbiAgfVxufSIsIi8qXG4gKiBDb3B5cmlnaHQgKEMpIDIwMjAgRWxpYXN0aWsgKGVsaWFzdGlrc29mdHMuY29tKVxuICpcbiAqIFRoaXMgZmlsZSBpcyBwYXJ0IG9mIFwiSlNHYW1lVG9vbHNcIi5cbiAqXG4gKiBcIkpTR2FtZVRvb2xzXCIgaXMgZnJlZSBzb2Z0d2FyZTogeW91IGNhbiByZWRpc3RyaWJ1dGUgaXQgYW5kL29yIG1vZGlmeVxuICogaXQgdW5kZXIgdGhlIHRlcm1zIG9mIHRoZSBHTlUgR2VuZXJhbCBQdWJsaWMgTGljZW5zZSBhcyBwdWJsaXNoZWQgYnlcbiAqIHRoZSBGcmVlIFNvZnR3YXJlIEZvdW5kYXRpb24sIGVpdGhlciB2ZXJzaW9uIDMgb2YgdGhlIExpY2Vuc2UsIG9yXG4gKiAoYXQgeW91ciBvcHRpb24pIGFueSBsYXRlciB2ZXJzaW9uLlxuICpcbiAqIFwiSlNHYW1lVG9vbHNcIiBpcyBkaXN0cmlidXRlZCBpbiB0aGUgaG9wZSB0aGF0IGl0IHdpbGwgYmUgdXNlZnVsLFxuICogYnV0IFdJVEhPVVQgQU5ZIFdBUlJBTlRZOyB3aXRob3V0IGV2ZW4gdGhlIGltcGxpZWQgd2FycmFudHkgb2ZcbiAqIE1FUkNIQU5UQUJJTElUWSBvciBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRS4gIFNlZSB0aGVcbiAqIEdOVSBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlIGZvciBtb3JlIGRldGFpbHMuXG4gKlxuICogWW91IHNob3VsZCBoYXZlIHJlY2VpdmVkIGEgY29weSBvZiB0aGUgR05VIEdlbmVyYWwgUHVibGljIExpY2Vuc2VcbiAqIGFsb25nIHdpdGggXCJKU0dhbWVUb29sc1wiLiAgSWYgbm90LCBzZWUgPGh0dHA6Ly93d3cuZ251Lm9yZy9saWNlbnNlcy8+LlxuICovXG5pbXBvcnQgQ29tcG9uZW50IGZyb20gXCIuL0NvbXBvbmVudFwiO1xuaW1wb3J0IENvbnN0YW50cyBmcm9tIFwiLi9Db25zdGFudHNcIjtcbmltcG9ydCBVdGlscyBmcm9tIFwiLi9VdGlsc1wiO1xuaW1wb3J0IFN0eWxlIGZyb20gXCIuL1N0eWxlXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIENpcmNsZSBleHRlbmRzIENvbXBvbmVudCB7XG4gIHNlbGVjdGFibGUgPSBmYWxzZTtcblxuICBjb25zdHJ1Y3Rvcih4LCB5LCB3aWR0aCwgc3R5bGUpIHtcbiAgICBzdXBlcih4LCB5LCB3aWR0aCwgd2lkdGgsIHN0eWxlKTtcbiAgfVxuXG4gIGRyYXcoY29udGV4dCkge1xuICAgIGlmKHRoaXMuaGlkZGVuKSByZXR1cm47XG4gICAgc3VwZXIuZHJhdyhjb250ZXh0KTtcblxuICAgIGNvbnN0IGNhbnZhcyA9IGNvbnRleHQuY2FudmFzO1xuICAgIGNvbnN0IGN0eCA9IGNhbnZhcy5nZXRDb250ZXh0KFwiMmRcIik7XG4gICAgXG4gICAgVXRpbHMuZHJhd0NpcmNsZShjdHgsIHRoaXMueCwgdGhpcy55LCB0aGlzLndpZHRoLCB0aGlzLnN0eWxlLmxpbmVXaWR0aCwgdGhpcy5zdHlsZS5jb2xvciwgdGhpcy5zdHlsZS5saW5lQ2FwLCB0aGlzLnN0eWxlLmZpbGwsIHRoaXMuc3R5bGUuZmlsbENvbG9yKTtcblxuICAgIHRoaXMuaW5pdCA9IHRydWU7XG4gIH1cblxuICBnZXQgd2lkdGgoKSB7XG4gICAgcmV0dXJuIHN1cGVyLndpZHRoICsgdGhpcy5zdHlsZS5saW5lV2lkdGg7XG4gIH1cblxuICBnZXQgaGVpZ2h0KCkge1xuICAgIHJldHVybiBzdXBlci5oZWlnaHQgKyB0aGlzLnN0eWxlLmxpbmVXaWR0aDtcbiAgfVxuXG4gIHNldCB3aWR0aCh3aWR0aCkge1xuICAgIHN1cGVyLndpZHRoID0gd2lkdGg7XG4gIH1cblxuICBzZXQgaGVpZ2h0KGhlaWdodCkge1xuICAgIHN1cGVyLmhlaWdodCA9IGhlaWdodDtcbiAgfVxuXG4gIGdldCBkZWZhdWx0U3R5bGUoKSB7XG4gICAgcmV0dXJuIG5ldyBTdHlsZSh7XG4gICAgICBcImxpbmVXaWR0aFwiOiBDb25zdGFudHMuU2V0dGluZy5DSVJDTEVfREVGQVVMVF9MSU5FX1NJWkUsXG4gICAgICBcImNvbG9yXCI6IENvbnN0YW50cy5TZXR0aW5nLkNJUkNMRV9ERUZBVUxUX0NPTE9SLFxuICAgICAgXCJmaWxsXCI6IENvbnN0YW50cy5TZXR0aW5nLkNJUkNMRV9ERUZBVUxUX0ZJTEwsXG4gICAgICBcImxpbmVDYXBcIjogQ29uc3RhbnRzLlNldHRpbmcuQ0lSQ0xFX0RFRkFVTFRfTElORV9DQVAsXG4gICAgICBcImZpbGxDb2xvclwiOiBDb25zdGFudHMuU2V0dGluZy5DSVJDTEVfREVGQVVMVF9GSUxMX0NPTE9SXG4gICAgfSk7XG4gIH1cbn0iLCIvKlxuICogQ29weXJpZ2h0IChDKSAyMDIwIEVsaWFzdGlrIChlbGlhc3Rpa3NvZnRzLmNvbSlcbiAqXG4gKiBUaGlzIGZpbGUgaXMgcGFydCBvZiBcIkpTR2FtZVRvb2xzXCIuXG4gKlxuICogXCJKU0dhbWVUb29sc1wiIGlzIGZyZWUgc29mdHdhcmU6IHlvdSBjYW4gcmVkaXN0cmlidXRlIGl0IGFuZC9vciBtb2RpZnlcbiAqIGl0IHVuZGVyIHRoZSB0ZXJtcyBvZiB0aGUgR05VIEdlbmVyYWwgUHVibGljIExpY2Vuc2UgYXMgcHVibGlzaGVkIGJ5XG4gKiB0aGUgRnJlZSBTb2Z0d2FyZSBGb3VuZGF0aW9uLCBlaXRoZXIgdmVyc2lvbiAzIG9mIHRoZSBMaWNlbnNlLCBvclxuICogKGF0IHlvdXIgb3B0aW9uKSBhbnkgbGF0ZXIgdmVyc2lvbi5cbiAqXG4gKiBcIkpTR2FtZVRvb2xzXCIgaXMgZGlzdHJpYnV0ZWQgaW4gdGhlIGhvcGUgdGhhdCBpdCB3aWxsIGJlIHVzZWZ1bCxcbiAqIGJ1dCBXSVRIT1VUIEFOWSBXQVJSQU5UWTsgd2l0aG91dCBldmVuIHRoZSBpbXBsaWVkIHdhcnJhbnR5IG9mXG4gKiBNRVJDSEFOVEFCSUxJVFkgb3IgRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UuICBTZWUgdGhlXG4gKiBHTlUgR2VuZXJhbCBQdWJsaWMgTGljZW5zZSBmb3IgbW9yZSBkZXRhaWxzLlxuICpcbiAqIFlvdSBzaG91bGQgaGF2ZSByZWNlaXZlZCBhIGNvcHkgb2YgdGhlIEdOVSBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlXG4gKiBhbG9uZyB3aXRoIFwiSlNHYW1lVG9vbHNcIi4gIElmIG5vdCwgc2VlIDxodHRwOi8vd3d3LmdudS5vcmcvbGljZW5zZXMvPi5cbiAqL1xuaW1wb3J0IENvbXBvbmVudCBmcm9tIFwiLi9Db21wb25lbnRcIjtcbmltcG9ydCBDb250YWluZXIgZnJvbSBcIi4vQ29udGFpbmVyXCI7XG5pbXBvcnQgVXRpbHMgZnJvbSBcIi4vVXRpbHNcIjtcbmltcG9ydCBDb25zdGFudHMgZnJvbSBcIi4vQ29uc3RhbnRzXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIENvbCBleHRlbmRzIENvbnRhaW5lciB7XG4gIHNlbGVjdGFibGUgPSBmYWxzZTtcbiAgI19pbm5lckhlaWdodCA9IDA7XG4gICNfaW5uZXJXaWR0aCA9IDA7XG5cbiAgY29uc3RydWN0b3IoeCwgeSwgbWF4V2lkdGgsIG1heEhlaWdodCwgc3R5bGUsIC4uLmNvbXBvbmVudHMpIHtcbiAgICBzdXBlcih4LCB5LCBtYXhXaWR0aCwgbWF4SGVpZ2h0LCBzdHlsZSwgLi4uY29tcG9uZW50cyk7XG5cbiAgICBpZighQ29uc3RhbnRzLlNldHRpbmcuRElTQUJMRV9FWFBFUklNRU5UQUxfT1BUSU1JWkFUSU9OUykge1xuICAgICAgdGhpcy51cGRhdGVJbm5lcldpZHRoKCk7XG4gICAgICB0aGlzLnVwZGF0ZUlubmVySGVpZ2h0KCk7XG4gIFxuICAgICAgdGhpcy5hZGRDaGFuZ2VBY3Rpb24oKCkgPT4ge1xuICAgICAgICB0aGlzLnVwZGF0ZUlubmVyV2lkdGgoKTtcbiAgICAgICAgdGhpcy51cGRhdGVJbm5lckhlaWdodCgpO1xuICAgICAgfSk7XG4gICAgfVxuICB9XG5cbiAgZHJhdyhjb250ZXh0KSB7XG4gICAgaWYodGhpcy5oaWRkZW4pIHJldHVybjtcbiAgICBzdXBlci5kcmF3KGNvbnRleHQpO1xuXG4gICAgY29uc3QgY2FudmFzID0gY29udGV4dC5jYW52YXM7XG4gICAgY29uc3QgY3R4ID0gY2FudmFzLmdldENvbnRleHQoXCIyZFwiKTtcbiAgICBjdHguc2F2ZSgpO1xuXG4gICAgbGV0IGN0eFRlbXAgPSBjdHg7XG5cbiAgICBpZih0aGlzLmlzQ3V0dGluZykge1xuICAgICAgY3R4VGVtcCA9IHRoaXMuY2FudmFzVG1wLmdldENvbnRleHQoXCIyZFwiKTtcbiAgICB9XG4gIFxuICAgIGlmKHN1cGVyLmNvbXBvbmVudHMgIT0gbnVsbCkge1xuICAgICAgbGV0IGN1cnJlbnRZID0gdGhpcy5zdHlsZS5wYWRkaW5nO1xuXG4gICAgICBzdXBlci5jb21wb25lbnRzLmZvckVhY2goY29tcG9uZW50ID0+IHtcbiAgICAgICAgY3VycmVudFkgPSB0aGlzLmRyYXdDb21wb25lbnQoY29tcG9uZW50LCBjdXJyZW50WSwgY3R4VGVtcCk7XG4gICAgICB9KTtcbiAgICB9XG4gICAgXG4gICAgaWYodGhpcy5pc0N1dHRpbmcpIHtcbiAgICAgIFV0aWxzLmRyYXdJbWFnZURhdGEoY3R4LCB0aGlzLmNhbnZhc1RtcCwgdGhpcy54LCB0aGlzLnksIHRoaXMud2lkdGgsIHRoaXMuaGVpZ2h0LCB0aGlzLngsIHRoaXMueSwgdGhpcy53aWR0aCwgdGhpcy5oZWlnaHQpO1xuICAgIH1cbiAgICBcbiAgICBzdXBlci5kcmF3U2Nyb2xsYmFycyhjdHgpO1xuICAgIFxuICAgIGN0eC5yZXN0b3JlKCk7XG4gIH1cblxuICBkcmF3Q29tcG9uZW50KGNvbXBvbmVudCwgY3VycmVudFksIGN0eCkge1xuICAgIGlmKGNvbXBvbmVudCBpbnN0YW5jZW9mIENvbXBvbmVudCkge1xuICAgICAgY29tcG9uZW50LnggPSB0aGlzLnN0eWxlLnBhZGRpbmcgLSB0aGlzLm9mZnNldFNjcm9sbFg7XG4gICAgICBjb21wb25lbnQueSA9IGN1cnJlbnRZIC0gdGhpcy5vZmZzZXRTY3JvbGxZO1xuICAgICAgXG4gICAgICBpZighY29tcG9uZW50LmhpZGRlbikge1xuICAgICAgICBpZih0aGlzLmlzQ29tcG9uZW50VmlzaWJsZShjb21wb25lbnQpKSB7XG4gICAgICAgICAgY29tcG9uZW50LmVuYWJsZSgpO1xuICAgICAgICAgIGNvbXBvbmVudC5kcmF3KGN0eCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgY29tcG9uZW50LmRpc2FibGUoKTtcbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgY3VycmVudFkgKz0gY29tcG9uZW50LmhlaWdodCArIHRoaXMuc3R5bGUuc3BhY2VCZXR3ZWVuQ29tcG9uZW50cztcbiAgICAgIH1cbiAgICB9XG4gICAgXG4gICAgcmV0dXJuIGN1cnJlbnRZO1xuICB9XG5cbiAgdXBkYXRlSW5uZXJIZWlnaHQoKSB7XG4gICAgbGV0IHRvdGFsSGVpZ2h0ID0gMDtcbiAgICBzdXBlci5jb21wb25lbnRzLmZvckVhY2goY29tcG9uZW50ID0+IHsgaWYoIWNvbXBvbmVudC5oaWRkZW4pIHRvdGFsSGVpZ2h0ICs9IGNvbXBvbmVudC5oZWlnaHQgfSk7XG4gICAgdGhpcy4jX2lubmVySGVpZ2h0ID0gdG90YWxIZWlnaHQgKyB0aGlzLnN0eWxlLnNwYWNlQmV0d2VlbkNvbXBvbmVudHMgKiAoc3VwZXIuY29tcG9uZW50cy5sZW5ndGggLSAxKSArIHRoaXMuc3R5bGUucGFkZGluZztcbiAgfVxuXG4gIHVwZGF0ZUlubmVyV2lkdGgoKSB7XG4gICAgbGV0IG1heFdpZHRoID0gMDtcbiAgICBzdXBlci5jb21wb25lbnRzLmZvckVhY2goY29tcG9uZW50ID0+IHsgaWYoY29tcG9uZW50LndpZHRoID4gbWF4V2lkdGggJiYgIWNvbXBvbmVudC5oaWRkZW4pIG1heFdpZHRoID0gY29tcG9uZW50LndpZHRoOyB9KTtcbiAgICB0aGlzLiNfaW5uZXJXaWR0aCA9IG1heFdpZHRoICsgdGhpcy5zdHlsZS5wYWRkaW5nO1xuICB9XG5cbiAgZ2V0IGlubmVySGVpZ2h0KCkge1xuICAgIGlmKENvbnN0YW50cy5TZXR0aW5nLkRJU0FCTEVfRVhQRVJJTUVOVEFMX09QVElNSVpBVElPTlMpIHRoaXMudXBkYXRlSW5uZXJIZWlnaHQoKTtcbiAgICByZXR1cm4gdGhpcy4jX2lubmVySGVpZ2h0O1xuICB9XG5cbiAgZ2V0IGlubmVyV2lkdGgoKSB7XG4gICAgaWYoQ29uc3RhbnRzLlNldHRpbmcuRElTQUJMRV9FWFBFUklNRU5UQUxfT1BUSU1JWkFUSU9OUykgdGhpcy51cGRhdGVJbm5lcldpZHRoKCk7XG4gICAgcmV0dXJuIHRoaXMuI19pbm5lcldpZHRoO1xuICB9XG5cbiAgZ2V0IHdpZHRoKCkge1xuICAgIGNvbnN0IHdpZHRoID0gdGhpcy5pbm5lcldpZHRoIHx8ICh0aGlzLnBhcmVudCAmJiB0aGlzLnBhcmVudC53aWR0aCk7XG4gICAgY29uc3QgbWluID0gdGhpcy5tYXhXaWR0aCA/IE1hdGgubWluKHRoaXMubWF4V2lkdGgsIHdpZHRoKSA6IG51bGw7XG4gICAgcmV0dXJuIHRoaXMubWluV2lkdGggPyBNYXRoLm1heCh0aGlzLm1pbldpZHRoLCBtaW4gfHwgd2lkdGgpIDogbWluIHx8IHdpZHRoO1xuICB9XG5cbiAgZ2V0IGhlaWdodCgpIHtcbiAgICBjb25zdCBoZWlnaHQgPSB0aGlzLmlubmVySGVpZ2h0IHx8ICh0aGlzLnBhcmVudCAmJiB0aGlzLnBhcmVudC5oZWlnaHQpO1xuICAgIGNvbnN0IG1pbiA9IHRoaXMubWF4SGVpZ2h0ID8gTWF0aC5taW4odGhpcy5tYXhIZWlnaHQsIGhlaWdodCkgOiBudWxsO1xuICAgIHJldHVybiB0aGlzLm1pbkhlaWdodCA/IE1hdGgubWF4KHRoaXMubWluSGVpZ2h0LCBtaW4gfHwgaGVpZ2h0KSA6IG1pbiB8fCBoZWlnaHQ7XG4gIH1cblxuICBnZXQgZGVmYXVsdFN0eWxlKCkge1xuICAgIHJldHVybiBzdXBlci5kZWZhdWx0U3R5bGU7XG4gIH1cbn0iLCIvKlxuICogQ29weXJpZ2h0IChDKSAyMDIwIEVsaWFzdGlrIChlbGlhc3Rpa3NvZnRzLmNvbSlcbiAqXG4gKiBUaGlzIGZpbGUgaXMgcGFydCBvZiBcIkpTR2FtZVRvb2xzXCIuXG4gKlxuICogXCJKU0dhbWVUb29sc1wiIGlzIGZyZWUgc29mdHdhcmU6IHlvdSBjYW4gcmVkaXN0cmlidXRlIGl0IGFuZC9vciBtb2RpZnlcbiAqIGl0IHVuZGVyIHRoZSB0ZXJtcyBvZiB0aGUgR05VIEdlbmVyYWwgUHVibGljIExpY2Vuc2UgYXMgcHVibGlzaGVkIGJ5XG4gKiB0aGUgRnJlZSBTb2Z0d2FyZSBGb3VuZGF0aW9uLCBlaXRoZXIgdmVyc2lvbiAzIG9mIHRoZSBMaWNlbnNlLCBvclxuICogKGF0IHlvdXIgb3B0aW9uKSBhbnkgbGF0ZXIgdmVyc2lvbi5cbiAqXG4gKiBcIkpTR2FtZVRvb2xzXCIgaXMgZGlzdHJpYnV0ZWQgaW4gdGhlIGhvcGUgdGhhdCBpdCB3aWxsIGJlIHVzZWZ1bCxcbiAqIGJ1dCBXSVRIT1VUIEFOWSBXQVJSQU5UWTsgd2l0aG91dCBldmVuIHRoZSBpbXBsaWVkIHdhcnJhbnR5IG9mXG4gKiBNRVJDSEFOVEFCSUxJVFkgb3IgRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UuICBTZWUgdGhlXG4gKiBHTlUgR2VuZXJhbCBQdWJsaWMgTGljZW5zZSBmb3IgbW9yZSBkZXRhaWxzLlxuICpcbiAqIFlvdSBzaG91bGQgaGF2ZSByZWNlaXZlZCBhIGNvcHkgb2YgdGhlIEdOVSBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlXG4gKiBhbG9uZyB3aXRoIFwiSlNHYW1lVG9vbHNcIi4gIElmIG5vdCwgc2VlIDxodHRwOi8vd3d3LmdudS5vcmcvbGljZW5zZXMvPi5cbiAqL1xuaW1wb3J0IENvbnN0YW50cyBmcm9tIFwiLi9Db25zdGFudHNcIjtcbmltcG9ydCBTdHlsZSBmcm9tIFwiLi9TdHlsZVwiO1xuaW1wb3J0IFJlYWN0b3IgZnJvbSBcIi4vUmVhY3RvclwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDb21wb25lbnQge1xuICBzZWxlY3RhYmxlID0gdHJ1ZTtcbiAgI193aWR0aCA9IDA7XG4gICNfaGVpZ2h0ID0gMDtcbiAgI194ID0gMDtcbiAgI195ID0gMDtcbiAgI19kaXNhYmxlZCA9IGZhbHNlO1xuICAjX3NlbGVjdGVkID0gZmFsc2U7XG4gICNfc3R5bGU7XG5cbiAgY29uc3RydWN0b3IoeCwgeSwgd2lkdGgsIGhlaWdodCwgc3R5bGUpIHtcbiAgICB0aGlzLiNfeCA9IHggfHwgMDtcbiAgICB0aGlzLiNfeSA9IHkgfHwgMDtcbiAgICB0aGlzLiNfd2lkdGggPSB3aWR0aDtcbiAgICB0aGlzLiNfaGVpZ2h0ID0gaGVpZ2h0O1xuICAgIHRoaXMuY2FudmFzO1xuICAgIHRoaXMucGFyZW50O1xuXG4gICAgLy8gU3R5bGVcbiAgICB0aGlzLnN0eWxlID0gc3R5bGU7XG4gICAgXG4gICAgLy8gRnVuY3Rpb25zIHRyaWdnZXJlZCBieSBldmVudHNcbiAgICB0aGlzLnJlYWN0b3IgPSBuZXcgUmVhY3RvcigpO1xuICAgIHRoaXMucmVhY3Rvci5yZWdpc3RlckV2ZW50KFwib25DbGlja1wiKTtcbiAgICB0aGlzLnJlYWN0b3IucmVnaXN0ZXJFdmVudChcIm9uSG92ZXJcIik7XG4gICAgdGhpcy5yZWFjdG9yLnJlZ2lzdGVyRXZlbnQoXCJvbkRvd25cIik7XG4gICAgdGhpcy5yZWFjdG9yLnJlZ2lzdGVyRXZlbnQoXCJvblNjcm9sbFwiKTtcbiAgICB0aGlzLnJlYWN0b3IucmVnaXN0ZXJFdmVudChcIm9uTW92ZVwiKTtcbiAgICB0aGlzLnJlYWN0b3IucmVnaXN0ZXJFdmVudChcIm9uVXBcIik7XG4gICAgdGhpcy5yZWFjdG9yLnJlZ2lzdGVyRXZlbnQoXCJvbkNoYW5nZVwiKTtcblxuICAgIC8vIFN0YXRlXG4gICAgdGhpcy5pbml0ID0gZmFsc2U7XG4gICAgdGhpcy5oYXNJbml0RXZlbnRzID0gZmFsc2U7XG4gICAgdGhpcy4jX3NlbGVjdGVkID0gZmFsc2U7XG4gICAgdGhpcy5jbGlja2VkID0gZmFsc2U7XG4gICAgdGhpcy5ob3ZlcmVkID0gZmFsc2U7XG4gICAgdGhpcy4jX2Rpc2FibGVkID0gZmFsc2U7XG5cbiAgICAvLyBTY3JvbGwgc3RhdGVcbiAgICB0aGlzLm9mZnNldFNjcm9sbFggPSAwO1xuICAgIHRoaXMub2Zmc2V0U2Nyb2xsWSA9IDA7XG5cbiAgICAvLyBNb3ZlIGV2ZW50XG4gICAgdGhpcy5vZmZzZXRNb3ZlWCA9IDA7XG4gICAgdGhpcy5vZmZzZXRNb3ZlWSA9IDA7XG4gICAgdGhpcy5tb3ZlRXZlbnRTdGFydFggPSAwO1xuICAgIHRoaXMubW92ZUV2ZW50U3RhcnRZID0gMDtcblxuICAgIC8vIFRvdWNoIGV2ZW50c1xuICAgIHRoaXMudG91Y2hFdmVudFN0YXJ0WCA9IDA7XG4gICAgdGhpcy50b3VjaEV2ZW50U3RhcnRZID0gMDtcbiAgICB0aGlzLnRvdWNoRXZlbnRTdGFydFRpbWVzdGFtcCA9IDA7XG5cbiAgICB0aGlzLnRvb2x0aXA7XG4gICAgdGhpcy5pbml0RXZlbnRzKCk7XG4gIH1cblxuICBpbml0RXZlbnRzKCkge1xuICAgIGlmKCF0aGlzLmhhc0luaXRFdmVudHMgJiYgdGhpcy5jYW52YXMgIT0gbnVsbCkge1xuICAgICAgdGhpcy5jYW52YXMuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlbW92ZVwiLCB0aGlzLCAoZXZlbnQsIHJlc3VsdCkgPT4ge1xuICAgICAgICBpZighdGhpcy5kaXNhYmxlZCkge1xuICAgICAgICAgIGNvbnN0IG1vdXNlUG9zaXRpb24gPSB0aGlzLmdldE1vdXNlUG9zKGV2ZW50KTtcblxuICAgICAgICAgIGlmKHRoaXMuY2xpY2tlZCkge1xuICAgICAgICAgICAgY29uc3QgZGVsdGFYID0gLWV2ZW50Lm1vdmVtZW50WDtcbiAgICAgICAgICAgIGNvbnN0IGRlbHRhWSA9IC1ldmVudC5tb3ZlbWVudFk7XG5cbiAgICAgICAgICAgIHRoaXMub2Zmc2V0TW92ZVggKz0gZGVsdGFYO1xuICAgICAgICAgICAgdGhpcy5vZmZzZXRNb3ZlWSArPSBkZWx0YVk7XG5cbiAgICAgICAgICAgIGlmKHRoaXMucmVhY3Rvcikge1xuICAgICAgICAgICAgICB0aGlzLnJlYWN0b3IuZGlzcGF0Y2hFdmVudChcIm9uTW92ZVwiLCBkZWx0YVgsIGRlbHRhWSwgbW91c2VQb3NpdGlvbik7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIHRoaXMubW92ZUV2ZW50U3RhcnRYID0gbW91c2VQb3NpdGlvbi54O1xuICAgICAgICAgICAgdGhpcy5tb3ZlRXZlbnRTdGFydFkgPSBtb3VzZVBvc2l0aW9uLnk7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgaWYocmVzdWx0KSB7XG4gICAgICAgICAgICBpZih0aGlzLnJlYWN0b3IgJiYgIXRoaXMuZGlzYWJsZWQpIHtcbiAgICAgICAgICAgICAgdGhpcy5yZWFjdG9yLmRpc3BhdGNoRXZlbnQoXCJvbkhvdmVyXCIsIG1vdXNlUG9zaXRpb24pO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZih0aGlzLnRvb2x0aXApIHtcbiAgICAgICAgICAgICAgdGhpcy50b29sdGlwLnggPSBtb3VzZVBvc2l0aW9uLnggKyAxMDtcbiAgICAgICAgICAgICAgdGhpcy50b29sdGlwLnkgPSBtb3VzZVBvc2l0aW9uLnkgKyAxMDtcbiAgICAgICAgICAgICAgdGhpcy50b29sdGlwLmVuYWJsZSgpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgXG4gICAgICAgICAgICB0aGlzLmhvdmVyZWQgPSB0cnVlO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLmhvdmVyZWQgPSBmYWxzZTtcbiAgICAgICAgICAgIGlmKHRoaXMudG9vbHRpcCkgdGhpcy50b29sdGlwLmRpc2FibGUoKVxuICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB0aGlzLmhvdmVyZWQgPSBmYWxzZTtcbiAgICAgICAgICB0aGlzLmNsaWNrZWQgPSBmYWxzZTtcbiAgICAgICAgICBpZih0aGlzLnRvb2x0aXApIHRoaXMudG9vbHRpcC5kaXNhYmxlKCk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgICAgXG4gICAgICB0aGlzLmNhbnZhcy5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgdGhpcywgKGV2ZW50LCByZXN1bHQpID0+IHtcbiAgICAgICAgaWYoIXRoaXMuZGlzYWJsZWQpIHtcbiAgICAgICAgICBjb25zdCBtb3VzZVBvc2l0aW9uID0gdGhpcy5nZXRNb3VzZVBvcyhldmVudCk7XG5cbiAgICAgICAgICBpZihyZXN1bHQgJiYgdGhpcy5ob3ZlcmVkKSB7XG4gICAgICAgICAgICBpZih0aGlzLnJlYWN0b3IpIHtcbiAgICAgICAgICAgICAgdGhpcy5yZWFjdG9yLmRpc3BhdGNoRXZlbnQoXCJvbkNsaWNrXCIsIG1vdXNlUG9zaXRpb24pO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB0aGlzLnNlbGVjdGVkID0gdHJ1ZTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5jbGlja2VkID0gZmFsc2U7XG4gICAgICAgICAgICB0aGlzLnNlbGVjdGVkID0gZmFsc2U7XG4gICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHRoaXMuaG92ZXJlZCA9IGZhbHNlO1xuICAgICAgICAgIHRoaXMuY2xpY2tlZCA9IGZhbHNlO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICAgIFxuICAgICAgdGhpcy5jYW52YXMuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlZG93blwiLCB0aGlzLCAoZXZlbnQsIHJlc3VsdCkgPT4ge1xuICAgICAgICBpZighdGhpcy5kaXNhYmxlZCkge1xuICAgICAgICAgIGNvbnN0IG1vdXNlUG9zaXRpb24gPSB0aGlzLmdldE1vdXNlUG9zKGV2ZW50KTtcblxuICAgICAgICAgIGlmKHJlc3VsdCkge1xuICAgICAgICAgICAgaWYodGhpcy5yZWFjdG9yKSB7XG4gICAgICAgICAgICAgIHRoaXMucmVhY3Rvci5kaXNwYXRjaEV2ZW50KFwib25Eb3duXCIsIG1vdXNlUG9zaXRpb24pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgXG4gICAgICAgICAgICB0aGlzLmNsaWNrZWQgPSB0cnVlO1xuICAgICAgICAgICAgdGhpcy5tb3ZlRXZlbnRTdGFydFggPSBtb3VzZVBvc2l0aW9uLng7XG4gICAgICAgICAgICB0aGlzLm1vdmVFdmVudFN0YXJ0WSA9IG1vdXNlUG9zaXRpb24ueTtcbiAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdGhpcy5ob3ZlcmVkID0gZmFsc2U7XG4gICAgICAgICAgdGhpcy5jbGlja2VkID0gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgICAgXG4gICAgICB0aGlzLmNhbnZhcy5hZGRFdmVudExpc3RlbmVyKFwibW91c2V1cFwiLCB0aGlzLCAoZXZlbnQpID0+IHtcbiAgICAgICAgaWYoIXRoaXMuZGlzYWJsZWQpIHtcbiAgICAgICAgICBjb25zdCBtb3VzZVBvc2l0aW9uID0gdGhpcy5nZXRNb3VzZVBvcyhldmVudCk7XG5cbiAgICAgICAgICBpZih0aGlzLnJlYWN0b3IpIHtcbiAgICAgICAgICAgIHRoaXMucmVhY3Rvci5kaXNwYXRjaEV2ZW50KFwib25VcFwiLCBtb3VzZVBvc2l0aW9uKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgXG4gICAgICAgICAgdGhpcy5jbGlja2VkID0gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuXG4gICAgICB0aGlzLmNhbnZhcy5hZGRFdmVudExpc3RlbmVyKFwid2hlZWxcIiwgdGhpcywgKGV2ZW50KSA9PiB7XG4gICAgICAgIGlmKHRoaXMuaG92ZXJlZCAmJiAhdGhpcy5kaXNhYmxlZCAmJiAhdGhpcy5zY3JvbGxEaXNhYmxlZCkge1xuICAgICAgICAgIHRoaXMub2Zmc2V0U2Nyb2xsWCArPSBldmVudC5kZWx0YVg7XG4gICAgICAgICAgdGhpcy5vZmZzZXRTY3JvbGxZICs9IGV2ZW50LmRlbHRhWTtcblxuICAgICAgICAgIGlmKHRoaXMucmVhY3Rvcikge1xuICAgICAgICAgICAgdGhpcy5yZWFjdG9yLmRpc3BhdGNoRXZlbnQoXCJvblNjcm9sbFwiLCBldmVudC5kZWx0YVgsIGV2ZW50LmRlbHRhWSk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9KTtcblxuICAgICAgY29uc3QgdG91Y2hTY3JvbGxFdmVudCA9IChldmVudCkgPT4ge1xuICAgICAgICBjb25zdCBjaGFuZ2VkVG91Y2hlcyA9IGV2ZW50LmNoYW5nZWRUb3VjaGVzWzBdO1xuICAgICAgICBjb25zdCBwb3NpdGlvbiA9IHRoaXMuZ2V0TW91c2VQb3MoY2hhbmdlZFRvdWNoZXMpO1xuXG4gICAgICAgIGlmKHRoaXMuaG92ZXJlZCAmJiAhdGhpcy5kaXNhYmxlZCAmJiAhdGhpcy5zY3JvbGxEaXNhYmxlZCkge1xuICAgICAgICAgIGNvbnN0IGRlbHRhWCA9IHRoaXMudG91Y2hFdmVudFN0YXJ0WCAtIHBvc2l0aW9uLng7XG4gICAgICAgICAgY29uc3QgZGVsdGFZID0gdGhpcy50b3VjaEV2ZW50U3RhcnRZIC0gcG9zaXRpb24ueTtcblxuICAgICAgICAgIHRoaXMub2Zmc2V0U2Nyb2xsWCArPSBkZWx0YVg7XG4gICAgICAgICAgdGhpcy5vZmZzZXRTY3JvbGxZICs9IGRlbHRhWTtcblxuICAgICAgICAgIGlmKHRoaXMucmVhY3Rvcikge1xuICAgICAgICAgICAgdGhpcy5yZWFjdG9yLmRpc3BhdGNoRXZlbnQoXCJvblNjcm9sbFwiLCBkZWx0YVgsIGRlbHRhWSwgcG9zaXRpb24pO1xuICAgICAgICAgIH1cbiAgICAgICAgICBcbiAgICAgICAgICB0aGlzLnRvdWNoRXZlbnRTdGFydFggPSBwb3NpdGlvbi54O1xuICAgICAgICAgIHRoaXMudG91Y2hFdmVudFN0YXJ0WSA9IHBvc2l0aW9uLnk7XG4gICAgICAgIH1cbiAgICAgIH07XG5cbiAgICAgIGNvbnN0IHRvdWNoU3RhcnRFbmRFdmVudCA9IChldmVudCwgcmVzdWx0KSA9PiB7XG4gICAgICAgIGNvbnN0IGNoYW5nZWRUb3VjaGVzID0gZXZlbnQuY2hhbmdlZFRvdWNoZXNbMF07XG4gICAgICAgIGNvbnN0IHBvc2l0aW9uID0gdGhpcy5nZXRNb3VzZVBvcyhjaGFuZ2VkVG91Y2hlcyk7XG4gICAgICAgIFxuICAgICAgICBpZihyZXN1bHQpIHtcbiAgICAgICAgICB0aGlzLmhvdmVyZWQgPSB0cnVlO1xuICAgICAgICAgIHRoaXMuc2VsZWN0ZWQgPSB0cnVlO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHRoaXMuaG92ZXJlZCA9IGZhbHNlO1xuICAgICAgICAgIHRoaXMuc2VsZWN0ZWQgPSBmYWxzZTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmKHRoaXMuaG92ZXJlZCAmJiAhdGhpcy5kaXNhYmxlZCkge1xuICAgICAgICAgIHRoaXMudG91Y2hFdmVudFN0YXJ0WCA9IHBvc2l0aW9uLng7XG4gICAgICAgICAgdGhpcy50b3VjaEV2ZW50U3RhcnRZID0gcG9zaXRpb24ueTtcbiAgICAgICAgICB0aGlzLnRvdWNoRXZlbnRTdGFydFRpbWVzdGFtcCA9IGV2ZW50LnRpbWVzdGFtcDtcbiAgICAgICAgfVxuICAgICAgfTtcblxuICAgICAgdGhpcy5jYW52YXMuYWRkRXZlbnRMaXN0ZW5lcihcInRvdWNoc3RhcnRcIiwgdGhpcywgdG91Y2hTdGFydEVuZEV2ZW50KTtcbiAgICAgIHRoaXMuY2FudmFzLmFkZEV2ZW50TGlzdGVuZXIoXCJ0b3VjaGVuZFwiLCB0aGlzLCB0b3VjaFN0YXJ0RW5kRXZlbnQpO1xuXG4gICAgICB0aGlzLmNhbnZhcy5hZGRFdmVudExpc3RlbmVyKFwidG91Y2htb3ZlXCIsIHRoaXMsIChldmVudCkgPT4ge1xuICAgICAgICB0b3VjaFNjcm9sbEV2ZW50KGV2ZW50KTtcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgIH0pO1xuXG4gICAgICB0aGlzLmhhc0luaXRFdmVudHMgPSB0cnVlO1xuICAgIH1cbiAgfVxuXG4gIGRyYXcoY29udGV4dCkge1xuICAgIGlmKHRoaXMuaGlkZGVuKSByZXR1cm47XG4gICAgdGhpcy5pbml0RXZlbnRzKCk7XG5cbiAgICBpZih0aGlzLmRpc2FibGVkKSB7XG4gICAgICB0aGlzLnNlbGVjdGVkID0gZmFsc2U7XG4gICAgICB0aGlzLmNsaWNrZWQgPSBmYWxzZTtcbiAgICAgIHRoaXMuaG92ZXJlZCA9IGZhbHNlO1xuICAgICAgaWYodGhpcy50b29sdGlwKSB0aGlzLnRvb2x0aXAuZGlzYWJsZWQgPSB0cnVlO1xuICAgIH1cbiAgfVxuICBcbiAgZ2V0TW91c2VQb3MoZXZlbnQpIHtcbiAgICByZXR1cm4gdGhpcy5jYW52YXMuZ2V0TW91c2VQb3MoZXZlbnQpO1xuICB9XG4gIFxuICBpc0luc2lkZShwb3MpIHtcbiAgICByZXR1cm4gcG9zLnggPiB0aGlzLnggJiYgcG9zLnggPCB0aGlzLnggKyB0aGlzLndpZHRoICYmIHBvcy55IDwgdGhpcy55ICsgdGhpcy5oZWlnaHQgJiYgcG9zLnkgPiB0aGlzLnk7XG4gIH1cbiAgXG4gIGRpc2FibGUoKSB7XG4gICAgdGhpcy5kaXNhYmxlZCA9IHRydWU7XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cbiAgXG4gIGVuYWJsZSgpIHtcbiAgICB0aGlzLmRpc2FibGVkID0gZmFsc2U7XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cblxuICBnZXQgZGlzYWJsZWQoKSB7XG4gICAgcmV0dXJuIHRoaXMuI19kaXNhYmxlZCB8fCAodGhpcy5wYXJlbnQgJiYgdGhpcy5wYXJlbnQuZGlzYWJsZWQpO1xuICB9XG5cbiAgc2V0IGRpc2FibGVkKGRpc2FibGVkKSB7XG4gICAgaWYoZGlzYWJsZWQgIT0gdGhpcy4jX2Rpc2FibGVkKSB7XG4gICAgICB0aGlzLiNfZGlzYWJsZWQgPSBkaXNhYmxlZDtcbiAgICAgIHRoaXMucmVhY3RvciAmJiB0aGlzLnJlYWN0b3IuZGlzcGF0Y2hFdmVudChcIm9uQ2hhbmdlXCIsIHRoaXMpO1xuICAgIH1cbiAgfVxuXG4gIHNldENsaWNrQWN0aW9uKHRyaWdnZXIpIHtcbiAgICB0aGlzLnJlbW92ZUFsbENsaWNrQWN0aW9ucygpO1xuICAgIHRoaXMuYWRkQ2xpY2tBY3Rpb24odHJpZ2dlcik7XG4gIH1cbiAgXG4gIGFkZENsaWNrQWN0aW9uKHRyaWdnZXIpIHtcbiAgICB0aGlzLnJlYWN0b3IuYWRkRXZlbnRMaXN0ZW5lcihcIm9uQ2xpY2tcIiwgdHJpZ2dlcik7XG4gIH1cbiAgXG4gIHJlbW92ZUNsaWNrQWN0aW9uKHRyaWdnZXIpIHtcbiAgICB0aGlzLnJlYWN0b3IucmVtb3ZlRXZlbnRMaXN0ZW5lcihcIm9uQ2xpY2tcIiwgdHJpZ2dlcik7XG4gIH1cblxuICByZW1vdmVBbGxDbGlja0FjdGlvbnMoKSB7XG4gICAgdGhpcy5yZWFjdG9yLnJlbW92ZUFsbEV2ZW50TGlzdGVuZXIoXCJvbkNsaWNrXCIpO1xuICB9XG5cbiAgc2V0SG92ZXJBY3Rpb24odHJpZ2dlcikge1xuICAgIHRoaXMucmVtb3ZlQWxsSG92ZXJBY3Rpb25zKCk7XG4gICAgdGhpcy5hZGRIb3ZlckFjdGlvbih0cmlnZ2VyKTtcbiAgfVxuICBcbiAgYWRkSG92ZXJBY3Rpb24odHJpZ2dlcikge1xuICAgIHRoaXMucmVhY3Rvci5hZGRFdmVudExpc3RlbmVyKFwib25Ib3ZlclwiLCB0cmlnZ2VyKTtcbiAgfVxuICBcbiAgcmVtb3ZlSG92ZXJBY3Rpb24odHJpZ2dlcikge1xuICAgIHRoaXMucmVhY3Rvci5yZW1vdmVFdmVudExpc3RlbmVyKFwib25Ib3ZlclwiLCB0cmlnZ2VyKTtcbiAgfVxuXG4gIHJlbW92ZUFsbEhvdmVyQWN0aW9ucygpIHtcbiAgICB0aGlzLnJlYWN0b3IucmVtb3ZlQWxsRXZlbnRMaXN0ZW5lcihcIm9uSG92ZXJcIik7XG4gIH1cblxuICBzZXREb3duQWN0aW9uKHRyaWdnZXIpIHtcbiAgICB0aGlzLnJlbW92ZUFsbERvd25BY3Rpb25zKCk7XG4gICAgdGhpcy5hZGREb3duQWN0aW9uKHRyaWdnZXIpO1xuICB9XG4gIFxuICBhZGREb3duQWN0aW9uKHRyaWdnZXIpIHtcbiAgICB0aGlzLnJlYWN0b3IuYWRkRXZlbnRMaXN0ZW5lcihcIm9uRG93blwiLCB0cmlnZ2VyKTtcbiAgfVxuICBcbiAgcmVtb3ZlRG93bkFjdGlvbih0cmlnZ2VyKSB7XG4gICAgdGhpcy5yZWFjdG9yLnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJvbkRvd25cIiwgdHJpZ2dlcik7XG4gIH1cblxuICByZW1vdmVBbGxEb3duQWN0aW9ucygpIHtcbiAgICB0aGlzLnJlYWN0b3IucmVtb3ZlQWxsRXZlbnRMaXN0ZW5lcihcIm9uRG93blwiKTtcbiAgfVxuXG4gIHNldFNjcm9sbEFjdGlvbih0cmlnZ2VyKSB7XG4gICAgdGhpcy5yZW1vdmVBbGxTY3JvbGxBY3Rpb25zKCk7XG4gICAgdGhpcy5hZGRTY3JvbGxBY3Rpb24odHJpZ2dlcik7XG4gIH1cbiAgXG4gIGFkZFNjcm9sbEFjdGlvbih0cmlnZ2VyKSB7XG4gICAgdGhpcy5yZWFjdG9yLmFkZEV2ZW50TGlzdGVuZXIoXCJvblNjcm9sbFwiLCB0cmlnZ2VyKTtcbiAgfVxuICBcbiAgcmVtb3ZlU2Nyb2xsQWN0aW9uKHRyaWdnZXIpIHtcbiAgICB0aGlzLnJlYWN0b3IucmVtb3ZlRXZlbnRMaXN0ZW5lcihcIm9uU2Nyb2xsXCIsIHRyaWdnZXIpO1xuICB9XG5cbiAgcmVtb3ZlQWxsU2Nyb2xsQWN0aW9ucygpIHtcbiAgICB0aGlzLnJlYWN0b3IucmVtb3ZlQWxsRXZlbnRMaXN0ZW5lcihcIm9uU2Nyb2xsXCIpO1xuICB9XG5cbiAgc2V0TW92ZUFjdGlvbih0cmlnZ2VyKSB7XG4gICAgdGhpcy5yZW1vdmVBbGxNb3ZlQWN0aW9ucygpO1xuICAgIHRoaXMuYWRkTW92ZUFjdGlvbih0cmlnZ2VyKTtcbiAgfVxuICBcbiAgYWRkTW92ZUFjdGlvbih0cmlnZ2VyKSB7XG4gICAgdGhpcy5yZWFjdG9yLmFkZEV2ZW50TGlzdGVuZXIoXCJvbk1vdmVcIiwgdHJpZ2dlcik7XG4gIH1cbiAgXG4gIHJlbW92ZU1vdmVBY3Rpb24odHJpZ2dlcikge1xuICAgIHRoaXMucmVhY3Rvci5yZW1vdmVFdmVudExpc3RlbmVyKFwib25Nb3ZlXCIsIHRyaWdnZXIpO1xuICB9XG5cbiAgcmVtb3ZlQWxsTW92ZUFjdGlvbnMoKSB7XG4gICAgdGhpcy5yZWFjdG9yLnJlbW92ZUFsbEV2ZW50TGlzdGVuZXIoXCJvbk1vdmVcIik7XG4gIH1cbiAgXG4gIHNldENoYW5nZUFjdGlvbih0cmlnZ2VyKSB7XG4gICAgdGhpcy5yZW1vdmVBbGxDaGFuZ2VBY3Rpb25zKCk7XG4gICAgdGhpcy5hZGRDaGFuZ2VBY3Rpb24odHJpZ2dlcik7XG4gIH1cbiAgXG4gIGFkZENoYW5nZUFjdGlvbih0cmlnZ2VyKSB7XG4gICAgdGhpcy5yZWFjdG9yLmFkZEV2ZW50TGlzdGVuZXIoXCJvbkNoYW5nZVwiLCB0cmlnZ2VyKTtcbiAgfVxuICBcbiAgcmVtb3ZlQ2hhbmdlQWN0aW9uKHRyaWdnZXIpIHtcbiAgICB0aGlzLnJlYWN0b3IucmVtb3ZlRXZlbnRMaXN0ZW5lcihcIm9uQ2hhbmdlXCIsIHRyaWdnZXIpO1xuICB9XG5cbiAgcmVtb3ZlQWxsQ2hhbmdlQWN0aW9ucygpIHtcbiAgICB0aGlzLnJlYWN0b3IucmVtb3ZlQWxsRXZlbnRMaXN0ZW5lcihcIm9uQ2hhbmdlXCIpO1xuICB9XG5cbiAgc2V0VXBBY3Rpb24odHJpZ2dlcikge1xuICAgIHRoaXMucmVtb3ZlQWxsVXBBY3Rpb25zKCk7XG4gICAgdGhpcy5hZGRVcEFjdGlvbih0cmlnZ2VyKTtcbiAgfVxuICBcbiAgYWRkVXBBY3Rpb24odHJpZ2dlcikge1xuICAgIHRoaXMucmVhY3Rvci5hZGRFdmVudExpc3RlbmVyKFwib25VcFwiLCB0cmlnZ2VyKTtcbiAgfVxuICBcbiAgcmVtb3ZlVXBBY3Rpb24odHJpZ2dlcikge1xuICAgIHRoaXMucmVhY3Rvci5yZW1vdmVFdmVudExpc3RlbmVyKFwib25VcFwiLCB0cmlnZ2VyKTtcbiAgfVxuXG4gIHJlbW92ZUFsbFVwQWN0aW9ucygpIHtcbiAgICB0aGlzLnJlYWN0b3IucmVtb3ZlQWxsRXZlbnRMaXN0ZW5lcihcIm9uVXBcIik7XG4gIH1cblxuICBnZXQgaGVpZ2h0KCkge1xuICAgIHJldHVybiB0aGlzLiNfaGVpZ2h0O1xuICB9XG5cbiAgZ2V0IHdpZHRoKCkge1xuICAgIHJldHVybiB0aGlzLiNfd2lkdGg7XG4gIH1cblxuICBzZXQgd2lkdGgod2lkdGgpIHtcbiAgICBpZih3aWR0aCAhPSB0aGlzLiNfd2lkdGgpIHtcbiAgICAgIHRoaXMuI193aWR0aCA9IHdpZHRoO1xuICAgICAgdGhpcy5yZWFjdG9yICYmIHRoaXMucmVhY3Rvci5kaXNwYXRjaEV2ZW50KFwib25DaGFuZ2VcIiwgdGhpcyk7XG4gICAgfVxuICB9XG5cbiAgc2V0IGhlaWdodChoZWlnaHQpIHtcbiAgICBpZihoZWlnaHQgIT0gdGhpcy4jX2hlaWdodCkge1xuICAgICAgdGhpcy4jX2hlaWdodCA9IGhlaWdodDtcbiAgICAgIHRoaXMucmVhY3RvciAmJiB0aGlzLnJlYWN0b3IuZGlzcGF0Y2hFdmVudChcIm9uQ2hhbmdlXCIsIHRoaXMpO1xuICAgIH1cbiAgfVxuXG4gIGdldCBtYXhXaWR0aCgpIHtcbiAgICByZXR1cm4gdGhpcy53aWR0aDtcbiAgfVxuXG4gIGdldCBtYXhIZWlnaHQoKSB7XG4gICAgcmV0dXJuIHRoaXMuaGVpZ2h0O1xuICB9XG5cbiAgZ2V0IGlubmVyV2lkdGgoKSB7XG4gICAgcmV0dXJuIHRoaXMud2lkdGg7XG4gIH1cblxuICBnZXQgaW5uZXJIZWlnaHQoKSB7XG4gICAgcmV0dXJuIHRoaXMuaGVpZ2h0O1xuICB9XG5cbiAgZ2V0IG1pbldpZHRoKCkge1xuICAgIHJldHVybiB0aGlzLndpZHRoO1xuICB9XG5cbiAgZ2V0IG1pbkhlaWdodCgpIHtcbiAgICByZXR1cm4gdGhpcy5oZWlnaHQ7XG4gIH1cblxuICBnZXQgeCgpIHtcbiAgICBjb25zdCBwYXJlbnQgPSB0aGlzLnBhcmVudCB8fCB0aGlzLmNhbnZhcztcblxuICAgIGlmKHRoaXMuc3R5bGUuYWxpZ25lbWVudCAmJiBwYXJlbnQpIHtcbiAgICAgIGNvbnN0IHBhcmVudFdpZHRoID0gcGFyZW50LndpZHRoO1xuICAgICAgY29uc3QgcGFyZW50UGFkZGluZyA9IChwYXJlbnQuc3R5bGUgJiYgcGFyZW50LnN0eWxlLnBhZGRpbmcpIHx8IDA7XG5cbiAgICAgIGlmKHRoaXMuc3R5bGUuYWxpZ25lbWVudCA9PSBDb25zdGFudHMuQWxpZ25lbWVudC5DRU5URVIpIHtcbiAgICAgICAgcmV0dXJuIHBhcmVudC54ICsgKHBhcmVudFdpZHRoIC8gMikgLSAodGhpcy53aWR0aCAvIDIpO1xuICAgICAgfSBlbHNlIGlmKHRoaXMuc3R5bGUuYWxpZ25lbWVudCA9PSBDb25zdGFudHMuQWxpZ25lbWVudC5SSUdIVCkge1xuICAgICAgICByZXR1cm4gcGFyZW50LnggKyAocGFyZW50V2lkdGgpIC0gKHRoaXMud2lkdGgpIC0gcGFyZW50UGFkZGluZztcbiAgICAgIH0gZWxzZSBpZih0aGlzLnN0eWxlLmFsaWduZW1lbnQgPT0gQ29uc3RhbnRzLkFsaWduZW1lbnQuTEVGVCkge1xuICAgICAgICByZXR1cm4gcGFyZW50LnggKyBwYXJlbnRQYWRkaW5nO1xuICAgICAgfVxuICAgIH0gZWxzZSBpZihwYXJlbnQpIHtcbiAgICAgIHJldHVybiBwYXJlbnQueCArIHRoaXMuI194O1xuICAgIH1cbiAgICBcbiAgICByZXR1cm4gdGhpcy4jX3g7XG4gIH1cblxuICBzZXQgeCh4KSB7XG4gICAgdGhpcy4jX3ggPSB4O1xuICAgIHRoaXMucmVhY3RvciAmJiB0aGlzLnJlYWN0b3IuZGlzcGF0Y2hFdmVudChcIm9uQ2hhbmdlXCIsIHRoaXMpO1xuICB9XG5cbiAgZ2V0IHkoKSB7XG4gICAgY29uc3QgcGFyZW50ID0gdGhpcy5wYXJlbnQgfHwgdGhpcy5jYW52YXM7XG5cbiAgICBpZih0aGlzLnN0eWxlLnZlcnRpY2FsQWxpZ25lbWVudCAmJiBwYXJlbnQpIHtcbiAgICAgIGNvbnN0IHBhcmVudEhlaWdodCA9IHBhcmVudC5oZWlnaHQ7XG4gICAgICBjb25zdCBwYXJlbnRQYWRkaW5nID0gKHBhcmVudC5zdHlsZSAmJiBwYXJlbnQuc3R5bGUucGFkZGluZykgfHwgMDtcblxuICAgICAgaWYodGhpcy5zdHlsZS52ZXJ0aWNhbEFsaWduZW1lbnQgPT0gQ29uc3RhbnRzLlZlcnRpY2FsQWxpZ25lbWVudC5CT1RUT00pIHtcbiAgICAgICAgcmV0dXJuIHBhcmVudC55ICsgKHBhcmVudEhlaWdodCkgLSAodGhpcy5oZWlnaHQpIC0gcGFyZW50UGFkZGluZztcbiAgICAgIH0gZWxzZSBpZih0aGlzLnN0eWxlLnZlcnRpY2FsQWxpZ25lbWVudCA9PSBDb25zdGFudHMuVmVydGljYWxBbGlnbmVtZW50LkNFTlRFUikge1xuICAgICAgICByZXR1cm4gcGFyZW50LnkgKyAocGFyZW50SGVpZ2h0IC8gMikgLSAodGhpcy5oZWlnaHQgLyAyKTtcbiAgICAgIH0gZWxzZSBpZih0aGlzLnN0eWxlLnZlcnRpY2FsQWxpZ25lbWVudCA9PSBDb25zdGFudHMuVmVydGljYWxBbGlnbmVtZW50LlRPUCkge1xuICAgICAgICByZXR1cm4gcGFyZW50LnkgKyBwYXJlbnRQYWRkaW5nO1xuICAgICAgfVxuICAgIH0gZWxzZSBpZihwYXJlbnQpIHtcbiAgICAgIHJldHVybiBwYXJlbnQueSArIHRoaXMuI195O1xuICAgIH1cbiAgICBcbiAgICByZXR1cm4gdGhpcy4jX3k7XG4gIH1cblxuICBzZXQgeSh5KSB7XG4gICAgdGhpcy4jX3kgPSB5O1xuICAgIHRoaXMucmVhY3RvciAmJiB0aGlzLnJlYWN0b3IuZGlzcGF0Y2hFdmVudChcIm9uQ2hhbmdlXCIsIHRoaXMpO1xuICB9XG5cbiAgZ2V0IGRlZmF1bHRTdHlsZSgpIHtcbiAgICByZXR1cm4gbmV3IFN0eWxlKHtcbiAgICAgIFwicGFkZGluZ1wiOiBDb25zdGFudHMuU2V0dGluZy5ERUZBVUxUX1BBRERJTkcsXG4gICAgICBcInNwYWNlQmV0d2VlbkNvbXBvbmVudHNcIjogQ29uc3RhbnRzLlNldHRpbmcuREVGQVVMVF9TUEFDSU5HXG4gICAgfSk7XG4gIH1cblxuICBnZXQgc3R5bGUoKSB7XG4gICAgcmV0dXJuIHRoaXMuI19zdHlsZSB8fCB0aGlzLmRlZmF1bHRTdHlsZTtcbiAgfVxuXG4gIHNldCBzdHlsZShzdHlsZSkge1xuICAgIHRoaXMuI19zdHlsZSA9IG5ldyBTdHlsZSgpO1xuICAgIHRoaXMuI19zdHlsZS5zZXRBbGwodGhpcy5kZWZhdWx0U3R5bGUuZ2V0U3R5bGVzKCkpO1xuXG4gICAgaWYoc3R5bGUgJiYgc3R5bGUgaW5zdGFuY2VvZiBTdHlsZSkge1xuICAgICAgdGhpcy4jX3N0eWxlLnNldEFsbChzdHlsZS5nZXRTdHlsZXMoKSk7XG4gICAgfVxuXG4gICAgdGhpcy4jX3N0eWxlLmNvbXBvbmVudCA9IHRoaXM7XG4gICAgdGhpcy5yZWFjdG9yICYmIHRoaXMucmVhY3Rvci5kaXNwYXRjaEV2ZW50KFwib25DaGFuZ2VcIiwgdGhpcyk7XG4gIH1cblxuICBnZXQgaGlkZGVuKCkge1xuICAgIHJldHVybiAodGhpcy5zdHlsZSAmJiB0aGlzLnN0eWxlLmhpZGRlbikgfHwgKHRoaXMucGFyZW50ICYmIHRoaXMucGFyZW50LmhpZGRlbik7XG4gIH1cblxuICBzZXQgaGlkZGVuKGhpZGRlbikge1xuICAgIGlmKGhpZGRlbiAhPSB0aGlzLmRpc2FibGVkIHx8IGhpZGRlbiAhPSB0aGlzLnN0eWxlLmhpZGRlbikge1xuICAgICAgdGhpcy5kaXNhYmxlZCA9IGhpZGRlbjtcbiAgICAgIGlmKHRoaXMuc3R5bGUpIHRoaXMuc3R5bGUuc2V0KFwiaGlkZGVuXCIsIGhpZGRlbik7XG4gICAgICB0aGlzLnJlYWN0b3IgJiYgdGhpcy5yZWFjdG9yLmRpc3BhdGNoRXZlbnQoXCJvbkNoYW5nZVwiLCB0aGlzKTtcbiAgICB9XG4gIH1cblxuICBnZXQgc2VsZWN0ZWQoKSB7XG4gICAgcmV0dXJuIHRoaXMuI19zZWxlY3RlZDtcbiAgfVxuXG4gIHNldCBzZWxlY3RlZChzZWxlY3RlZCkge1xuICAgIGlmKHNlbGVjdGVkICE9IHRoaXMuI19zZWxlY3RlZCkge1xuICAgICAgdGhpcy4jX3NlbGVjdGVkID0gc2VsZWN0ZWQ7XG4gICAgICB0aGlzLnJlYWN0b3IgJiYgdGhpcy5yZWFjdG9yLmRpc3BhdGNoRXZlbnQoXCJvbkNoYW5nZVwiLCB0aGlzKTtcbiAgICB9XG4gIH1cblxuICBnZXRBbGxQYXJlbnRzKCkge1xuICAgIGxldCBwYXJlbnQgPSB0aGlzLnBhcmVudDtcbiAgICBsZXQgcmVzID0gW107XG5cbiAgICB3aGlsZShwYXJlbnQpIHtcbiAgICAgIHJlcy5wdXNoKHBhcmVudCk7XG4gICAgICBwYXJlbnQgPSBwYXJlbnQucGFyZW50O1xuICAgIH1cblxuICAgIHJldHVybiByZXM7XG4gIH1cblxuICBzdGF0aWMgY29tcGFyZUNvbXBvbmVudHMoY29tcG9uZW50LCBvdGhlcikge1xuICAgIHJldHVybiBjb21wb25lbnQuY29tcGFyZVRvKG90aGVyKTtcbiAgfVxuXG4gIGNvbXBhcmVUbyhvdGhlckNvbXBvbmVudCkge1xuICAgIGNvbnN0IGlzRm9yZWdyb3VuZCA9IHRoaXMuc3R5bGUgJiYgdGhpcy5zdHlsZS5mb3JlZ3JvdW5kO1xuICAgIGNvbnN0IG90aGVySXNGb3JlZ3JvdW5kID0gb3RoZXJDb21wb25lbnQuc3R5bGUgJiYgb3RoZXJDb21wb25lbnQuc3R5bGUuZm9yZWdyb3VuZDtcbiAgICBjb25zdCB6SW5kZXggPSB0aGlzLnN0eWxlICYmIHRoaXMuc3R5bGUuekluZGV4O1xuICAgIGNvbnN0IG90aGVyekluZGV4ID0gb3RoZXJDb21wb25lbnQuc3R5bGUgJiYgb3RoZXJDb21wb25lbnQuc3R5bGUuekluZGV4O1xuXG4gICAgaWYodGhpcy5wYXJlbnQgPT0gb3RoZXJDb21wb25lbnQpIHtcbiAgICAgIHJldHVybiAxO1xuICAgIH0gZWxzZSBpZihvdGhlckNvbXBvbmVudC5wYXJlbnQgPT0gdGhpcykge1xuICAgICAgcmV0dXJuIC0xO1xuICAgIH0gZWxzZSBpZihpc0ZvcmVncm91bmQgJiYgIW90aGVySXNGb3JlZ3JvdW5kKSB7XG4gICAgICByZXR1cm4gMVxuICAgIH0gZWxzZSBpZighaXNGb3JlZ3JvdW5kICYmIG90aGVySXNGb3JlZ3JvdW5kKSB7XG4gICAgICByZXR1cm4gLTE7XG4gICAgfSBlbHNlIGlmKHpJbmRleCA+IG90aGVyekluZGV4KSB7XG4gICAgICByZXR1cm4gMTtcbiAgICB9IGVsc2UgaWYoekluZGV4IDwgb3RoZXJ6SW5kZXgpIHtcbiAgICAgIHJldHVybiAtMTtcbiAgICB9XG5cbiAgICByZXR1cm4gb3RoZXJDb21wb25lbnQuY29tcGFyZVRvQ29tcG9uZW50KHRoaXMpIHx8IC10aGlzLmNvbXBhcmVUb0NvbXBvbmVudChvdGhlckNvbXBvbmVudCk7XG4gIH1cblxuICBjb21wYXJlVG9Db21wb25lbnQob3RoZXJDb21wb25lbnQpIHtcbiAgICByZXR1cm4gMDtcbiAgfVxuXG4gIGNvbXBhcmVUb01lbnUob3RoZXJDb21wb25lbnQpIHtcbiAgICByZXR1cm4gLTE7XG4gIH1cblxuICBjb21wYXJlVG9Ub29sdGlwKG90aGVyQ29tcG9uZW50KSB7XG4gICAgcmV0dXJuIC0xO1xuICB9XG5cbiAgY29tcGFyZVRvTm90aWZpY2F0aW9uKG90aGVyQ29tcG9uZW50KSB7XG4gICAgcmV0dXJuIC0xO1xuICB9XG5cbiAgY29tcGFyZVRvU2Nyb2xsYmFyKG90aGVyQ29tcG9uZW50KSB7XG4gICAgcmV0dXJuIC0xO1xuICB9XG59IiwiLypcbiAqIENvcHlyaWdodCAoQykgMjAyMCBFbGlhc3RpayAoZWxpYXN0aWtzb2Z0cy5jb20pXG4gKlxuICogVGhpcyBmaWxlIGlzIHBhcnQgb2YgXCJKU0dhbWVUb29sc1wiLlxuICpcbiAqIFwiSlNHYW1lVG9vbHNcIiBpcyBmcmVlIHNvZnR3YXJlOiB5b3UgY2FuIHJlZGlzdHJpYnV0ZSBpdCBhbmQvb3IgbW9kaWZ5XG4gKiBpdCB1bmRlciB0aGUgdGVybXMgb2YgdGhlIEdOVSBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlIGFzIHB1Ymxpc2hlZCBieVxuICogdGhlIEZyZWUgU29mdHdhcmUgRm91bmRhdGlvbiwgZWl0aGVyIHZlcnNpb24gMyBvZiB0aGUgTGljZW5zZSwgb3JcbiAqIChhdCB5b3VyIG9wdGlvbikgYW55IGxhdGVyIHZlcnNpb24uXG4gKlxuICogXCJKU0dhbWVUb29sc1wiIGlzIGRpc3RyaWJ1dGVkIGluIHRoZSBob3BlIHRoYXQgaXQgd2lsbCBiZSB1c2VmdWwsXG4gKiBidXQgV0lUSE9VVCBBTlkgV0FSUkFOVFk7IHdpdGhvdXQgZXZlbiB0aGUgaW1wbGllZCB3YXJyYW50eSBvZlxuICogTUVSQ0hBTlRBQklMSVRZIG9yIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFLiAgU2VlIHRoZVxuICogR05VIEdlbmVyYWwgUHVibGljIExpY2Vuc2UgZm9yIG1vcmUgZGV0YWlscy5cbiAqXG4gKiBZb3Ugc2hvdWxkIGhhdmUgcmVjZWl2ZWQgYSBjb3B5IG9mIHRoZSBHTlUgR2VuZXJhbCBQdWJsaWMgTGljZW5zZVxuICogYWxvbmcgd2l0aCBcIkpTR2FtZVRvb2xzXCIuICBJZiBub3QsIHNlZSA8aHR0cDovL3d3dy5nbnUub3JnL2xpY2Vuc2VzLz4uXG4gKi9cbmV4cG9ydCBkZWZhdWx0IHtcbiAgU2V0dGluZzoge1xuICAgIERJU0FCTEVfT1BUSU1JWkFUSU9OUzogZmFsc2UsIC8vIHRydWUgdG8gZGlzYWJsZSBvcHRpbWl6YXRpb25zLCBjYW4gZml4IHNvbWUgcHJvYmxlbXMsIGRpc2FibGluZyBvcHRpbWl6YXRpb24gcmVkdWNlcyBwZXJmb3JtYW5jZVxuICAgIERJU0FCTEVfRVhQRVJJTUVOVEFMX09QVElNSVpBVElPTlM6IGZhbHNlLCAvLyB0cnVlIHRvIGRpc2FibGUgb3B0aW1pemF0aW9ucyB0aGF0IGFyZSBjb25zaWRlcmVkIGV4cGVyaW1lbnRhbFxuICAgIERJU0FCTEVfQ09OVEFJTkVSU19DVVRUSU5HOiBmYWxzZSwgLy8gZGlzYWJsaW5nIGNvbnRhaW5lcnMgY3V0dGluZyBhbGxvdyB0byB2aWV3IHRoZSBjb21wb25lbnRzIG9mIGEgY29udGFpbmVyIHRoYXQgYXJlIG5vdCB0b3RhbGx5IHZpc2libGUsIHlvdSBjYW4gYWxzbyBkaXNhYmxlIG9wdGltaXphdGlvbnMgdG8gZGlzcGxheXMgZWxlbWVudHMgdGhhdCBhcmUgbm90IGRyYXduIGZvciBvcHRpbWl6YXRpb24gcHVycG9zZXNcbiAgICBFTkFCTEVfUElYRUxfUkFUSU9fUkVTSVpJTkc6IHRydWUsIC8vIGVuYWJsaW5nIHRoaXMgYWxsb3cgcmVzaXppbmcgdGhlIGNhbnZhcyB0byBtYXRjaCB0aGUgc2NyZWVuIHBpeGVsIHJhdGlvXG4gICAgUElYRUxfUkFUSU86IDEsIC8vIHRoZSBjdXJyZW50IHBpeGVsIHJhdGlvLCBhdXRvbWF0aWNhbGx5IHVwZGF0ZWRcbiAgICBGT05UX0ZBTUlMWTogXCJzYW5zLXNlcmlmXCIsXG4gICAgRk9OVF9TSVpFOiAyOCxcbiAgICBDQU5WQVNfV0lEVEg6IDYwMCxcbiAgICBDQU5WQVNfSEVJR0hUOiA0MDAsXG4gICAgREVGQVVMVF9QQURESU5HOiA2LFxuICAgIERFRkFVTFRfU1BBQ0lORzogNixcbiAgICBCVVRUT05fREVGQVVMVF9CQUNLR1JPVU5EOiBcInJnYmEoMCwgMCwgMCwgMClcIixcbiAgICBCVVRUT05fREVGQVVMVF9IT1ZFUl9CQUNLR1JPVU5EOiBcIiM5NUE1QTZcIixcbiAgICBCVVRUT05fREVGQVVMVF9DTElDS19CQUNLR1JPVU5EOiBcIiM3MjdGODBcIixcbiAgICBCVVRUT05fREVGQVVMVF9BTFRFUk5BVElWRV9CQUNLR1JPVU5EOiBcIiNBQ0JFQkZcIixcbiAgICBJTlBVVF9ERUZBVUxUX0ZPTlRfQ09MT1I6IFwiIzAwMFwiLFxuICAgIElOUFVUX0RFRkFVTFRfQkFDS0dST1VORF9DT0xPUjogXCIjZmZmXCIsXG4gICAgSU5QVVRfREVGQVVMVF9CT1JERVJfQ09MT1I6IFwiIzAwMFwiLFxuICAgIElOUFVUX0RFRkFVTFRfQk9SREVSX0NPTE9SX1NFTEVDVEVEOiBcIiNhMmNkZDhcIixcbiAgICBJTlBVVF9ERUZBVUxUX1NFTEVDVF9DT0xPUjogXCIjMjk4MGI5XCIsXG4gICAgTEFCRUxfREVGQVVMVF9GT05UX0NPTE9SOiBcIiMwMDBcIixcbiAgICBMSU5LX0RFRkFVTFRfQ09MT1I6IFwiIzAwMDBFRVwiLFxuICAgIExJTktfREVGQVVMVF9IT1ZFUl9DT0xPUjogXCIjNEQ0REZGXCIsXG4gICAgTElOS19ERUZBVUxUX0NMSUNLX0NPTE9SOiBcIiNFRTc3MDBcIixcbiAgICBNRU5VX0RFRkFVTFRfQkFDS0dST1VORDogXCJyZ2JhKDQ0LCA2MiwgODAsIDAuNzUpXCIsXG4gICAgTUVOVV9ERUZBVUxUX0JMVVJfQkFDS0dST1VORDogZmFsc2UsXG4gICAgTk9USUZJQ0FUSU9OX0RFRkFVTFRfQkFDS0dST1VORDogXCJyZ2JhKDQ2LCAyMDQsIDExMywgMC41KVwiLFxuICAgIE5PVElGSUNBVElPTl9ERUZBVUxUX0FOSU1BVElPTl9EVVJBVElPTjogNTAwLCAvLyBtc1xuICAgIFBST0dSRVNTX0RFRkFVTFRfQkFDS0dST1VORDogXCIjYmRjM2M3XCIsXG4gICAgUFJPR1JFU1NfREVGQVVMVF9GT1JFR1JPVU5EOiBcIiMyN2FlNjBcIixcbiAgICBQUk9HUkVTU19ERUZBVUxUX0FOSU1BVElPTl9EVVJBVElPTjogMjAwMCwgLy8gbXNcbiAgICBUT09MVElQX0RFRkFVTFRfQkFDS0dST1VORDogXCJyZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMjUpXCIsXG4gICAgQVJST1dfREVGQVVMVF9MSU5FX0NBUDogXCJyb3VuZFwiLFxuICAgIEFSUk9XX0RFRkFVTFRfQ09MT1I6IFwiI0ZGMDAwMFwiLFxuICAgIEFSUk9XX0RFRkFVTFRfTElORV9TSVpFOiA4LFxuICAgIEFSUk9XX0RFRkFVTFRfSEVBRF9TSVpFOiAyMCxcbiAgICBDUk9TU19ERUZBVUxUX0xJTkVfQ0FQOiBcInJvdW5kXCIsXG4gICAgQ1JPU1NfREVGQVVMVF9DT0xPUjogXCIjZmZmXCIsXG4gICAgQ1JPU1NfREVGQVVMVF9MSU5FX1NJWkU6IDMsXG4gICAgU0NST0xMQkFSX0RFRkFVTFRfQkFDS0dST1VORDogXCJyZ2JhKDE0OSwgMTY1LCAxNjYsIDAuNzUpXCIsXG4gICAgU0NST0xMQkFSX0RFRkFVTFRfSE9WRVJfQkFDS0dST1VORDogXCJyZ2JhKDE0OSwgMTY1LCAxNjYsIDAuOSlcIixcbiAgICBTQ1JPTExCQVJfREVGQVVMVF9DTElDS19CQUNLR1JPVU5EOiBcInJnYmEoMTQ5LCAxNjUsIDE2NiwgMC41KVwiLFxuICAgIFNDUk9MTEJBUl9ERUZBVUxUX1NJWkU6IDEwLFxuICAgIERFRkFVTFRfQk9SREVSX1NJWkU6IDMsXG4gICAgREVGQVVMVF9CT1JERVJfQ09MT1JfU0VMRUNURUQ6IFwiI2EyY2RkOFwiLFxuICAgIERFRkFVTFRfQU5JTUFUSU9OX0RVUkFUSU9OOiAyMDAwLCAvLyBtc1xuICAgIFRSSUFOR0xFX0RFRkFVTFRfTElORV9DQVA6IFwicm91bmRcIixcbiAgICBUUklBTkdMRV9ERUZBVUxUX0NPTE9SOiBcIiMwMDBcIixcbiAgICBUUklBTkdMRV9ERUZBVUxUX0ZJTExfQ09MT1I6IFwiIzAwMFwiLFxuICAgIFRSSUFOR0xFX0RFRkFVTFRfTElORV9TSVpFOiAzLFxuICAgIFRSSUFOR0xFX0RFRkFVTFRfRklMTDogdHJ1ZSxcbiAgICBTRUxFQ1RfREVGQVVMVF9CQUNLR1JPVU5EOiBcIiNlY2YwZjFcIixcbiAgICBTRUxFQ1RfREVGQVVMVF9IT1ZFUl9CQUNLR1JPVU5EOiBcIiNiZGMzYzdcIixcbiAgICBTRUxFQ1RfREVGQVVMVF9DTElDS19CQUNLR1JPVU5EOiBcIiNhZGIyYjVcIixcbiAgICBDSVJDTEVfREVGQVVMVF9MSU5FX0NBUDogXCJyb3VuZFwiLFxuICAgIENJUkNMRV9ERUZBVUxUX0NPTE9SOiBcIiNmZmZcIixcbiAgICBDSVJDTEVfREVGQVVMVF9GSUxMX0NPTE9SOiBcIiMwMDBcIixcbiAgICBDSVJDTEVfREVGQVVMVF9MSU5FX1NJWkU6IDMsXG4gICAgQ0lSQ0xFX0RFRkFVTFRfRklMTDogdHJ1ZSxcbiAgfSxcbiAgS2V5OiB7XG4gICAgVVA6IDM4LFxuICAgIFJJR0hUOiAzOSxcbiAgICBCT1RUT006IDQwLFxuICAgIExFRlQ6IDM3LFxuICAgIEVOVEVSOiAxMyxcbiAgICBFQ0hBUDogMjcsXG4gICAgVEFCOiA5XG4gIH0sXG4gIEFsaWduZW1lbnQ6IHtcbiAgICBSSUdIVDogXCJyaWdodFwiLFxuICAgIExFRlQ6IFwibGVmdFwiLFxuICAgIENFTlRFUjogXCJjZW50ZXJcIixcbiAgICBERUZBVUxUOiBcImRlZmF1bHRcIlxuICB9LFxuICBWZXJ0aWNhbEFsaWduZW1lbnQ6IHtcbiAgICBUT1A6IFwidG9wXCIsXG4gICAgQ0VOVEVSOiBcImNlbnRlclwiLFxuICAgIEJPVFRPTTogXCJib3R0b21cIixcbiAgICBERUZBVUxUOiBcImRlZmF1bHRcIlxuICB9LFxuICBTdHJpbmc6IHtcbiAgICBFUlJPUl9NRVNTQUdFX0NBTlZBUzogXCJBIGZhdGFsIGVycm9yIGhhcyBvY2N1cnJlZCBhdCB0aGUgSlNHYW1lVG9vbHMgbGV2ZWwuXCIsXG4gICAgRVJST1JfTUVTU0FHRV9DQU5WQVNfTEFCRUwgOiBcIjonKFxcbkEgZmF0YWwgZXJyb3IgaGFzIG9jY3VycmVkIGF0IHRoZSBKU0dhbWVUb29scyBsZXZlbC5cIixcbiAgICBSRVRSWTogXCJSZXRyeVwiLFxuICAgIE5PVElDRV9NRVNTQUdFOiBcIk5vdGljZTpcIixcbiAgICBXQVJOSU5HX01FU1NBR0U6IFwiV2FybmluZzpcIixcbiAgICBFUlJPUl9NRVNTQUdFOiBcIkVycm9yOlwiLFxuICAgIE9QVElNSVpBVElPTl9ESVNBQkxFRDogXCJPcHRpbWl6YXRpb25zIGFyZSBkaXNhYmxlZC4gWW91IG1heSBub3RpY2UgbG93IHBlcmZvcm1hbmNlLlwiLFxuICAgIENPTlRBSU5FUl9DVVRUSU5HX0RJU0FCTEVEOiBcIkNvbnRhaW5lcnMgY3V0dGluZyBpcyBkaXNhYmxlZC5cIixcbiAgICBCVVRUT05fSU1BR0VfREVQUkVDQVRFRDogXCJKU0dhbWVUb29scy5CdXR0b25JbWFnZSBpcyBkZXByZWNhdGVkLiBQbGVhc2UgdXNlIGEgQnV0dG9uIHdpdGggYW4gSW1hZ2VDb250YWluZXIgaW5zdGVhZC5cIixcbiAgICBJTlBVVF9GVUxMU0NSRUVOOiBcIlRoZSB1c2Ugb2YgSlNHYW1lVG9vbHMuQ2FudmFzIGlzIG5lZWRlZCBmb3IgSW5wdXQgY29tcG9uZW50cyB0byBwcm9wZXJseSB3b3JrIGluIGZ1bGxzY3JlZW4gbW9kZS5cIlxuICB9XG59OyIsIi8qXG4gKiBDb3B5cmlnaHQgKEMpIDIwMjAgRWxpYXN0aWsgKGVsaWFzdGlrc29mdHMuY29tKVxuICpcbiAqIFRoaXMgZmlsZSBpcyBwYXJ0IG9mIFwiSlNHYW1lVG9vbHNcIi5cbiAqXG4gKiBcIkpTR2FtZVRvb2xzXCIgaXMgZnJlZSBzb2Z0d2FyZTogeW91IGNhbiByZWRpc3RyaWJ1dGUgaXQgYW5kL29yIG1vZGlmeVxuICogaXQgdW5kZXIgdGhlIHRlcm1zIG9mIHRoZSBHTlUgR2VuZXJhbCBQdWJsaWMgTGljZW5zZSBhcyBwdWJsaXNoZWQgYnlcbiAqIHRoZSBGcmVlIFNvZnR3YXJlIEZvdW5kYXRpb24sIGVpdGhlciB2ZXJzaW9uIDMgb2YgdGhlIExpY2Vuc2UsIG9yXG4gKiAoYXQgeW91ciBvcHRpb24pIGFueSBsYXRlciB2ZXJzaW9uLlxuICpcbiAqIFwiSlNHYW1lVG9vbHNcIiBpcyBkaXN0cmlidXRlZCBpbiB0aGUgaG9wZSB0aGF0IGl0IHdpbGwgYmUgdXNlZnVsLFxuICogYnV0IFdJVEhPVVQgQU5ZIFdBUlJBTlRZOyB3aXRob3V0IGV2ZW4gdGhlIGltcGxpZWQgd2FycmFudHkgb2ZcbiAqIE1FUkNIQU5UQUJJTElUWSBvciBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRS4gIFNlZSB0aGVcbiAqIEdOVSBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlIGZvciBtb3JlIGRldGFpbHMuXG4gKlxuICogWW91IHNob3VsZCBoYXZlIHJlY2VpdmVkIGEgY29weSBvZiB0aGUgR05VIEdlbmVyYWwgUHVibGljIExpY2Vuc2VcbiAqIGFsb25nIHdpdGggXCJKU0dhbWVUb29sc1wiLiAgSWYgbm90LCBzZWUgPGh0dHA6Ly93d3cuZ251Lm9yZy9saWNlbnNlcy8+LlxuICovXG5pbXBvcnQgQm94IGZyb20gXCIuL0JveFwiO1xuaW1wb3J0IENvbXBvbmVudCBmcm9tIFwiLi9Db21wb25lbnRcIjtcbmltcG9ydCBDb25zdGFudHMgZnJvbSBcIi4vQ29uc3RhbnRzXCI7XG5pbXBvcnQgU2Nyb2xsYmFySG9yaXpvbnRhbCBmcm9tIFwiLi9TY3JvbGxiYXJIb3Jpem9udGFsXCI7XG5pbXBvcnQgU2Nyb2xsYmFyVmVydGljYWwgZnJvbSBcIi4vU2Nyb2xsYmFyVmVydGljYWxcIjtcbmltcG9ydCBTdHlsZSBmcm9tIFwiLi9TdHlsZVwiO1xuaW1wb3J0IFV0aWxzIGZyb20gXCIuL1V0aWxzXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIENvbnRhaW5lciBleHRlbmRzIEJveCB7XG4gIHNlbGVjdGFibGUgPSBmYWxzZTtcbiAgI2NvbXBvbmVudHMgPSBbXTtcbiAgI19tYXhXaWR0aCA9IDA7XG4gICNfbWF4SGVpZ2h0ID0gMDtcbiAgI19taW5XaWR0aCA9IDA7XG4gICNfbWluSGVpZ2h0ID0gMDtcbiAgZXZlbnRDaGFuZ2VDYWxsYmFjayA9ICgpID0+IHRoaXMucmVhY3Rvci5kaXNwYXRjaEV2ZW50KFwib25DaGFuZ2VcIiwgdGhpcyk7XG5cbiAgY29uc3RydWN0b3IoeCwgeSwgbWF4V2lkdGgsIG1heEhlaWdodCwgc3R5bGUsIC4uLmNvbXBvbmVudHMpIHtcbiAgICBzdXBlcih4LCB5LCBudWxsLCBudWxsLCBzdHlsZSk7XG5cbiAgICB0aGlzLmFkZEFsbCguLi5jb21wb25lbnRzKTtcbiAgICB0aGlzLmNhbnZhc1RtcCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJjYW52YXNcIik7XG4gICAgdGhpcy4jX21heFdpZHRoID0gbWF4V2lkdGg7XG4gICAgdGhpcy4jX21heEhlaWdodCA9IG1heEhlaWdodDtcbiAgICB0aGlzLnNjcm9sbGJhckhvcml6b250YWwgPSBuZXcgU2Nyb2xsYmFySG9yaXpvbnRhbChudWxsLCBudWxsLCB0aGlzKTtcbiAgICB0aGlzLnNjcm9sbGJhclZlcnRpY2FsID0gbmV3IFNjcm9sbGJhclZlcnRpY2FsKG51bGwsIG51bGwsIHRoaXMpO1xuXG4gICAgdGhpcy5hZGRTY3JvbGxBY3Rpb24oKGRlbHRhWCwgZGVsdGFZKSA9PiB0aGlzLmNvbnRyb2xTY3JvbGxpbmcoZGVsdGFYLCBkZWx0YVkpKTtcblxuICAgIGlmKCFDb25zdGFudHMuU2V0dGluZy5ESVNBQkxFX0VYUEVSSU1FTlRBTF9PUFRJTUlaQVRJT05TKSB7XG4gICAgICB0aGlzLmFkZENoYW5nZUFjdGlvbihjb21wb25lbnRDaGFuZ2VkID0+IHtcbiAgICAgICAgY29tcG9uZW50Q2hhbmdlZCA9PSB0aGlzLnBhcmVudCAmJiB0aGlzLmNvbXBvbmVudHMuZm9yRWFjaChjb21wb25lbnQgPT4gY29tcG9uZW50ICYmIGNvbXBvbmVudC5yZWFjdG9yLmRpc3BhdGNoRXZlbnQoXCJvbkNoYW5nZVwiLCB0aGlzKSk7XG4gICAgICB9KTtcbiAgICB9XG4gIH1cblxuICBkcmF3KGNvbnRleHQpIHtcbiAgICBpZih0aGlzLmhpZGRlbikgcmV0dXJuO1xuICAgIGNvbnN0IGNhbnZhcyA9IGNvbnRleHQuY2FudmFzO1xuICAgIGNvbnN0IGN0eCA9IGNhbnZhcy5nZXRDb250ZXh0KFwiMmRcIik7XG4gICAgY3R4LnNhdmUoKTtcblxuICAgIGlmKHRoaXMuaXNDdXR0aW5nKSB7XG4gICAgICB0aGlzLmNhbnZhc1RtcC53aWR0aCA9IFV0aWxzLmdldENhbnZhc1dpZHRoKGNhbnZhcyk7XG4gICAgICB0aGlzLmNhbnZhc1RtcC5oZWlnaHQgPSBVdGlscy5nZXRDYW52YXNIZWlnaHQoY2FudmFzKTtcbiAgICAgIFV0aWxzLmNsZWFyKHRoaXMuY2FudmFzVG1wLmdldENvbnRleHQoXCIyZFwiKSk7XG4gICAgfVxuICAgIFxuICAgIHRoaXMuY29tcG9uZW50cy5mb3JFYWNoKGNvbXBvbmVudCA9PiB7XG4gICAgICBpZih0aGlzLmNhbnZhcykgY29tcG9uZW50LmNhbnZhcyA9IHRoaXMuY2FudmFzO1xuICAgIH0pO1xuICAgIFxuICAgIHRoaXMuY29udHJvbFNjcm9sbGluZygwLCAwKTtcbiAgICBzdXBlci5kcmF3KGNvbnRleHQpO1xuXG4gICAgY3R4LnJlc3RvcmUoKTtcbiAgfVxuXG4gIGRyYXdWZXJ0aWNhbFNjcm9sbEJhcihjdHgpIHtcbiAgICBpZih0aGlzLnNjcm9sbGJhclZlcnRpY2FsKSB7XG4gICAgICB0aGlzLnNjcm9sbGJhclZlcnRpY2FsLmNhbnZhcyA9IHRoaXMuY2FudmFzO1xuICAgICAgdGhpcy5zY3JvbGxiYXJWZXJ0aWNhbC5kcmF3KGN0eCk7XG4gICAgfVxuICB9XG5cbiAgZHJhd0hvcml6b250YWxTY3JvbGxCYXIoY3R4KSB7XG4gICAgaWYodGhpcy5zY3JvbGxiYXJIb3Jpem9udGFsKSB7XG4gICAgICB0aGlzLnNjcm9sbGJhckhvcml6b250YWwuY2FudmFzID0gdGhpcy5jYW52YXM7XG4gICAgICB0aGlzLnNjcm9sbGJhckhvcml6b250YWwuZHJhdyhjdHgpO1xuICAgIH1cbiAgfVxuXG4gIGRyYXdTY3JvbGxiYXJzKGN0eCkge1xuICAgIGlmKCF0aGlzLnN0eWxlLnNjcm9sbFhEaXNhYmxlZCkgdGhpcy5kcmF3SG9yaXpvbnRhbFNjcm9sbEJhcihjdHgpO1xuICAgIGlmKCF0aGlzLnN0eWxlLnNjcm9sbFlEaXNhYmxlZCkgdGhpcy5kcmF3VmVydGljYWxTY3JvbGxCYXIoY3R4KTtcbiAgfVxuXG4gIHNldCguLi5jb21wb25lbnRzKSB7XG4gICAgdGhpcy5jbGVhcigpO1xuICAgIHRoaXMuYWRkQWxsKC4uLmNvbXBvbmVudHMpO1xuICAgIHRoaXMuZW5hYmxlKCk7XG4gIH1cblxuICBhZGQoY29tcG9uZW50KSB7XG4gICAgdGhpcy4jY29tcG9uZW50cy5wdXNoKGNvbXBvbmVudCk7XG4gICAgY29tcG9uZW50LnBhcmVudCA9IHRoaXM7XG4gICAgaWYodGhpcy5jYW52YXMpIGNvbXBvbmVudC5jYW52YXMgPSB0aGlzLmNhbnZhcztcbiAgICBjb21wb25lbnQuYWRkQ2hhbmdlQWN0aW9uKHRoaXMuZXZlbnRDaGFuZ2VDYWxsYmFjayk7XG4gICAgdGhpcy5yZWFjdG9yLmRpc3BhdGNoRXZlbnQoXCJvbkNoYW5nZVwiLCB0aGlzKTtcbiAgfVxuXG4gIGFkZEFsbCguLi5jb21wb25lbnRzKSB7XG4gICAgY29tcG9uZW50cy5mb3JFYWNoKGNvbXBvbmVudCA9PiB0aGlzLmFkZChjb21wb25lbnQpKTtcbiAgfVxuXG4gIHJlbW92ZShjb21wb25lbnQpIHtcbiAgICBpZih0aGlzLiNjb21wb25lbnRzLmluZGV4T2YoY29tcG9uZW50KSAhPSAtMSkge1xuICAgICAgY29tcG9uZW50LnJlbW92ZUNoYW5nZUFjdGlvbih0aGlzLmV2ZW50Q2hhbmdlQ2FsbGJhY2spO1xuICAgICAgdGhpcy4jY29tcG9uZW50cyA9IHRoaXMuI2NvbXBvbmVudHMuZmlsdGVyKGN1cnJlbnQgPT4gY29tcG9uZW50ICE9IGN1cnJlbnQpO1xuICAgICAgdGhpcy5yZWFjdG9yLmRpc3BhdGNoRXZlbnQoXCJvbkNoYW5nZVwiLCB0aGlzKTtcbiAgICB9XG4gIH1cblxuICBjbGVhcigpIHtcbiAgICB0aGlzLiNjb21wb25lbnRzLmZvckVhY2goY29tcG9uZW50ID0+IHRoaXMucmVtb3ZlKGNvbXBvbmVudCkpO1xuICAgIHRoaXMucmVhY3Rvci5kaXNwYXRjaEV2ZW50KFwib25DaGFuZ2VcIiwgdGhpcyk7XG4gIH1cblxuICBnZXQgY29tcG9uZW50cygpIHtcbiAgICBjb25zdCBjb21wb25lbnRzID0gW107XG4gICAgdGhpcy4jY29tcG9uZW50cy5mb3JFYWNoKGNvbXBvbmVudCA9PiBjb21wb25lbnRzLnB1c2goY29tcG9uZW50KSk7XG4gICAgcmV0dXJuIGNvbXBvbmVudHM7XG4gIH1cblxuICBnZXQgYWxsQ29tcG9uZW50cygpIHtcbiAgICBjb25zdCBjb21wb25lbnRzID0gdGhpcy5jb21wb25lbnRzO1xuICAgIGNvbXBvbmVudHMucHVzaCh0aGlzLnNjcm9sbGJhckhvcml6b250YWwpO1xuICAgIGNvbXBvbmVudHMucHVzaCh0aGlzLnNjcm9sbGJhclZlcnRpY2FsKTtcbiAgICByZXR1cm4gY29tcG9uZW50cztcbiAgfVxuXG4gIGdldENvbXBvbmVudHNUcmVlKHN0YXJ0ID0gdGhpcykge1xuICAgIGNvbnN0IGNvbXBvbmVudHMgPSB7XG4gICAgICBcImNvbXBvbmVudFwiOiBzdGFydCxcbiAgICAgIFwiY2hpbGRzXCI6IFtdXG4gICAgfTtcblxuICAgIGlmKHN0YXJ0LmFsbENvbXBvbmVudHMpIHtcbiAgICAgIHN0YXJ0LmFsbENvbXBvbmVudHMuZm9yRWFjaChjb21wb25lbnQgPT4gY29tcG9uZW50cy5jaGlsZHMucHVzaCh0aGlzLmdldENvbXBvbmVudHNUcmVlKGNvbXBvbmVudCkpKTtcbiAgICB9XG5cbiAgICByZXR1cm4gY29tcG9uZW50cztcbiAgfVxuXG4gIHN0YXRpYyBzb3J0Q29tcG9uZW50c1RyZWUoY29tcG9uZW50LCBvdGhlcikge1xuICAgIHJldHVybiBjb21wb25lbnQuY29tcG9uZW50LmNvbXBhcmVUbyhvdGhlci5jb21wb25lbnQpO1xuICB9XG5cbiAgZGlzYWJsZSgpIHtcbiAgICBsZXQgY2hhbmdlZCA9IHN1cGVyLmRpc2FibGUoKTtcblxuICAgIHRoaXMuI2NvbXBvbmVudHMuZm9yRWFjaChjb21wb25lbnQgPT4ge1xuICAgICAgaWYoY29tcG9uZW50ICYmIGNvbXBvbmVudC5kaXNhYmxlICYmIGNvbXBvbmVudC5kaXNhYmxlKCkpIHtcbiAgICAgICAgY2hhbmdlZCA9IHRydWU7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICBpZihjaGFuZ2VkKSB0aGlzLnJlYWN0b3IuZGlzcGF0Y2hFdmVudChcIm9uQ2hhbmdlXCIsIHRoaXMpO1xuICB9XG5cbiAgZW5hYmxlKCkge1xuICAgIGxldCBjaGFuZ2VkID0gc3VwZXIuZW5hYmxlKCk7XG5cbiAgICB0aGlzLiNjb21wb25lbnRzLmZvckVhY2goY29tcG9uZW50ID0+IHtcbiAgICAgIGlmKGNvbXBvbmVudCAmJiBjb21wb25lbnQuZW5hYmxlICYmIGNvbXBvbmVudC5lbmFibGUoKSkge1xuICAgICAgICBjaGFuZ2VkID0gdHJ1ZTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIGlmKGNoYW5nZWQpIHRoaXMucmVhY3Rvci5kaXNwYXRjaEV2ZW50KFwib25DaGFuZ2VcIiwgdGhpcyk7XG4gIH1cblxuICBnZXQgd2lkdGgoKSB7XG4gICAgY29uc3Qgd2lkdGggPSAodGhpcy5wYXJlbnQgJiYgdGhpcy5wYXJlbnQud2lkdGgpO1xuICAgIGNvbnN0IG1pbiA9IHRoaXMubWF4V2lkdGggPyBNYXRoLm1pbih0aGlzLm1heFdpZHRoLCB3aWR0aCkgOiBudWxsO1xuICAgIHJldHVybiB0aGlzLm1pbldpZHRoID8gTWF0aC5tYXgodGhpcy5taW5XaWR0aCwgbWluIHx8IHdpZHRoKSA6IHdpZHRoO1xuICB9XG5cbiAgZ2V0IGhlaWdodCgpIHtcbiAgICBjb25zdCBoZWlnaHQgPSAodGhpcy5wYXJlbnQgJiYgdGhpcy5wYXJlbnQuaGVpZ2h0KTtcbiAgICBjb25zdCBtaW4gPSB0aGlzLm1heFdpZHRoID8gTWF0aC5taW4odGhpcy5tYXhIZWlnaHQsIGhlaWdodCkgOiBudWxsO1xuICAgIHJldHVybiB0aGlzLm1pbkhlaWdodCA/IE1hdGgubWF4KHRoaXMubWluSGVpZ2h0LCBtaW4gfHwgaGVpZ2h0KSA6IGhlaWdodDtcbiAgfVxuXG4gIGdldCBtYXhXaWR0aCgpIHtcbiAgICByZXR1cm4gdGhpcy4jX21heFdpZHRoO1xuICB9XG5cbiAgZ2V0IG1heEhlaWdodCgpIHtcbiAgICByZXR1cm4gdGhpcy4jX21heEhlaWdodDtcbiAgfVxuXG4gIHNldCBtYXhXaWR0aChtYXhXaWR0aCkge1xuICAgIGlmKG1heFdpZHRoICE9IHRoaXMuI19tYXhXaWR0aCkge1xuICAgICAgdGhpcy4jX21heFdpZHRoID0gbWF4V2lkdGg7XG4gICAgICB0aGlzLnJlYWN0b3IuZGlzcGF0Y2hFdmVudChcIm9uQ2hhbmdlXCIsIHRoaXMpO1xuICAgIH1cbiAgfVxuXG4gIHNldCBtYXhIZWlnaHQobWF4SGVpZ2h0KSB7XG4gICAgaWYobWF4SGVpZ2h0ICE9IHRoaXMuI19tYXhIZWlnaHQpIHtcbiAgICAgIHRoaXMuI19tYXhIZWlnaHQgPSBtYXhIZWlnaHQ7XG4gICAgICB0aGlzLnJlYWN0b3IuZGlzcGF0Y2hFdmVudChcIm9uQ2hhbmdlXCIsIHRoaXMpO1xuICAgIH1cbiAgfVxuXG4gIGdldCBtaW5XaWR0aCgpIHtcbiAgICByZXR1cm4gdGhpcy4jX21pbldpZHRoO1xuICB9XG5cbiAgZ2V0IG1pbkhlaWdodCgpIHtcbiAgICByZXR1cm4gdGhpcy4jX21pbkhlaWdodDtcbiAgfVxuXG4gIHNldCBtaW5XaWR0aChtaW5XaWR0aCkge1xuICAgIGlmKG1pbldpZHRoICE9IHRoaXMuI19taW5XaWR0aCkge1xuICAgICAgdGhpcy4jX21pbldpZHRoID0gbWluV2lkdGg7XG4gICAgICB0aGlzLnJlYWN0b3IuZGlzcGF0Y2hFdmVudChcIm9uQ2hhbmdlXCIsIHRoaXMpO1xuICAgIH1cbiAgfVxuXG4gIHNldCBtaW5IZWlnaHQobWluSGVpZ2h0KSB7XG4gICAgaWYobWluSGVpZ2h0ICE9IHRoaXMuI19taW5IZWlnaHQpIHtcbiAgICAgIHRoaXMuI19taW5IZWlnaHQgPSBtaW5IZWlnaHQ7XG4gICAgICB0aGlzLnJlYWN0b3IuZGlzcGF0Y2hFdmVudChcIm9uQ2hhbmdlXCIsIHRoaXMpO1xuICAgIH1cbiAgfVxuXG4gIHVwZGF0ZUlubmVySGVpZ2h0KCkgeyB9XG5cbiAgdXBkYXRlSW5uZXJXaWR0aCgpIHsgfVxuXG4gIHNldCBjYW52YXMoY2FudmFzKSB7XG4gICAgc3VwZXIuY2FudmFzID0gY2FudmFzO1xuXG4gICAgdGhpcy4jY29tcG9uZW50cy5mb3JFYWNoKGNvbXBvbmVudCA9PiB7XG4gICAgICBjb21wb25lbnQuY2FudmFzID0gY2FudmFzO1xuICAgIH0pO1xuICB9XG5cbiAgZ2V0IGNhbnZhcygpIHtcbiAgICByZXR1cm4gc3VwZXIuY2FudmFzO1xuICB9XG5cbiAgZ2V0Q29tcG9uZW50SWQoY29tcG9uZW50KSB7XG4gICAgbGV0IHJlc3VsdCA9IG51bGw7XG5cbiAgICB0aGlzLiNjb21wb25lbnRzLmZvckVhY2goKGMsIGkpID0+IHtcbiAgICAgIGlmKGMgPT0gY29tcG9uZW50KSByZXN1bHQgPSBpO1xuICAgIH0pO1xuXG4gICAgcmV0dXJuIHJlc3VsdDtcbiAgfVxuXG4gIGdldCBzY3JvbGxBcmVhU2l6ZVgoKSB7XG4gICAgcmV0dXJuIHRoaXMuaW5uZXJXaWR0aCAtIHRoaXMud2lkdGg7XG4gIH1cblxuICBnZXQgc2Nyb2xsQXJlYVNpemVZKCkge1xuICAgIHJldHVybiB0aGlzLmlubmVySGVpZ2h0IC0gdGhpcy5oZWlnaHQ7XG4gIH1cblxuICBjb250cm9sU2Nyb2xsaW5nKGRlbHRhWCwgZGVsdGFZKSB7XG4gICAgaWYoIXRoaXMuc3R5bGUuc2Nyb2xsWURpc2FibGVkKSB7XG4gICAgICBpZih0aGlzLnNjcm9sbEFyZWFTaXplWSA8PSAwKSB7XG4gICAgICAgIHRoaXMub2Zmc2V0U2Nyb2xsWSA9IDA7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBjb25zdCBwZXJjZW50U2Nyb2xsYmFyWSA9IHRoaXMub2Zmc2V0U2Nyb2xsWSAvIHRoaXMuc2Nyb2xsQXJlYVNpemVZO1xuICBcbiAgICAgICAgaWYocGVyY2VudFNjcm9sbGJhclkgPD0gMCAmJiBkZWx0YVkgPD0gMCkge1xuICAgICAgICAgIHRoaXMub2Zmc2V0U2Nyb2xsWSA9IE1hdGgubWluKDAsIHRoaXMueSk7XG4gICAgICAgIH0gZWxzZSBpZihwZXJjZW50U2Nyb2xsYmFyWSA+IDEgJiYgZGVsdGFZID49IDApIHtcbiAgICAgICAgICB0aGlzLm9mZnNldFNjcm9sbFkgPSB0aGlzLnNjcm9sbEFyZWFTaXplWTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLm9mZnNldFNjcm9sbFkgLT0gZGVsdGFZO1xuICAgIH1cblxuICAgIGlmKCF0aGlzLnN0eWxlLnNjcm9sbFhEaXNhYmxlZCkge1xuICAgICAgaWYodGhpcy5zY3JvbGxBcmVhU2l6ZVggPD0gMCkge1xuICAgICAgICB0aGlzLm9mZnNldFNjcm9sbFggPSAwO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgY29uc3QgcGVyY2VudFNjcm9sbGJhclggPSB0aGlzLm9mZnNldFNjcm9sbFggLyB0aGlzLnNjcm9sbEFyZWFTaXplWDtcbiAgXG4gICAgICAgIGlmKHBlcmNlbnRTY3JvbGxiYXJYIDw9IDAgJiYgZGVsdGFYIDw9IDApIHtcbiAgICAgICAgICB0aGlzLm9mZnNldFNjcm9sbFggPSBNYXRoLm1pbigwLCB0aGlzLngpO1xuICAgICAgICB9IGVsc2UgaWYocGVyY2VudFNjcm9sbGJhclggPiAxICYmIGRlbHRhWCA+PSAwKSB7XG4gICAgICAgICAgdGhpcy5vZmZzZXRTY3JvbGxYID0gdGhpcy5zY3JvbGxBcmVhU2l6ZVg7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5vZmZzZXRTY3JvbGxYIC09IGRlbHRhWDtcbiAgICB9XG4gIH1cblxuICBpc0NvbXBvbmVudFZpc2libGUoY29tcG9uZW50KSB7XG4gICAgaWYoQ29uc3RhbnRzLlNldHRpbmcuRElTQUJMRV9PUFRJTUlaQVRJT05TKSByZXR1cm4gdHJ1ZTtcbiAgICBcbiAgICBpZihjb21wb25lbnQgaW5zdGFuY2VvZiBDb21wb25lbnQgJiYgIWNvbXBvbmVudC5oaWRkZW4pIHtcbiAgICAgIGlmKCFDb25zdGFudHMuU2V0dGluZy5ESVNBQkxFX0VYUEVSSU1FTlRBTF9PUFRJTUlaQVRJT05TICYmIHRoaXMucGFyZW50ICYmIHRoaXMucGFyZW50LmlzQ29tcG9uZW50VmlzaWJsZSAmJiAhdGhpcy5wYXJlbnQuaXNDb21wb25lbnRWaXNpYmxlKGNvbXBvbmVudCkpIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgfVxuXG4gICAgICBjb25zdCB3aWR0aCA9IHRoaXMud2lkdGg7XG4gICAgICBjb25zdCBoZWlnaHQgPSB0aGlzLmhlaWdodDtcbiAgICAgIGNvbnN0IGNvbXBvbmVudFdpZHRoID0gY29tcG9uZW50LndpZHRoO1xuICAgICAgY29uc3QgY29tcG9uZW50SGVpZ2h0ID0gY29tcG9uZW50LmhlaWdodDtcbiAgICAgIGNvbnN0IGNhbnZhc1dpZHRoID0gKHRoaXMuY2FudmFzICYmIHRoaXMuY2FudmFzLndpZHRoKSB8fCB3aWR0aDtcbiAgICAgIGNvbnN0IGNhbnZhc0hlaWdodCA9ICh0aGlzLmNhbnZhcyAmJiB0aGlzLmNhbnZhcy5oZWlnaHQpIHx8IGhlaWdodDtcblxuICAgICAgaWYoY29tcG9uZW50LnggKyBjb21wb25lbnRXaWR0aCA+PSB0aGlzLnggJiYgY29tcG9uZW50LnggPD0gdGhpcy54ICsgd2lkdGggJiYgY29tcG9uZW50LnkgKyBjb21wb25lbnRIZWlnaHQgPj0gdGhpcy55ICYmIGNvbXBvbmVudC55IDw9IHRoaXMueSArIGhlaWdodCAmJiBjb21wb25lbnQueCArIGNvbXBvbmVudFdpZHRoID49IDAgJiYgY29tcG9uZW50LnggPD0gY2FudmFzV2lkdGggJiYgY29tcG9uZW50LnkgKyBjb21wb25lbnRIZWlnaHQgPj0gMCAmJiBjb21wb25lbnQueSA8PSBjYW52YXNIZWlnaHQpIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgZ2V0IGlzQ3V0dGluZygpIHtcbiAgICByZXR1cm4gIUNvbnN0YW50cy5TZXR0aW5nLkRJU0FCTEVfQ09OVEFJTkVSU19DVVRUSU5HICYmICgoKHRoaXMubWF4V2lkdGggJiYgdGhpcy5pbm5lcldpZHRoID4gdGhpcy5tYXhXaWR0aCkgfHwgKHRoaXMubWF4SGVpZ2h0ICYmIHRoaXMuaW5uZXJIZWlnaHQgPiB0aGlzLm1heEhlaWdodCkpKSAmJiB0aGlzLmNhbnZhc1RtcCAhPSBudWxsO1xuICB9XG5cbiAgZ2V0IGRlZmF1bHRTdHlsZSgpIHtcbiAgICByZXR1cm4gbmV3IFN0eWxlKHtcbiAgICAgIFwicGFkZGluZ1wiOiAwLFxuICAgICAgXCJzcGFjZUJldHdlZW5Db21wb25lbnRzXCI6IENvbnN0YW50cy5TZXR0aW5nLkRFRkFVTFRfU1BBQ0lOR1xuICAgIH0pO1xuICB9XG59IiwiLypcbiAqIENvcHlyaWdodCAoQykgMjAyMCBFbGlhc3RpayAoZWxpYXN0aWtzb2Z0cy5jb20pXG4gKlxuICogVGhpcyBmaWxlIGlzIHBhcnQgb2YgXCJKU0dhbWVUb29sc1wiLlxuICpcbiAqIFwiSlNHYW1lVG9vbHNcIiBpcyBmcmVlIHNvZnR3YXJlOiB5b3UgY2FuIHJlZGlzdHJpYnV0ZSBpdCBhbmQvb3IgbW9kaWZ5XG4gKiBpdCB1bmRlciB0aGUgdGVybXMgb2YgdGhlIEdOVSBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlIGFzIHB1Ymxpc2hlZCBieVxuICogdGhlIEZyZWUgU29mdHdhcmUgRm91bmRhdGlvbiwgZWl0aGVyIHZlcnNpb24gMyBvZiB0aGUgTGljZW5zZSwgb3JcbiAqIChhdCB5b3VyIG9wdGlvbikgYW55IGxhdGVyIHZlcnNpb24uXG4gKlxuICogXCJKU0dhbWVUb29sc1wiIGlzIGRpc3RyaWJ1dGVkIGluIHRoZSBob3BlIHRoYXQgaXQgd2lsbCBiZSB1c2VmdWwsXG4gKiBidXQgV0lUSE9VVCBBTlkgV0FSUkFOVFk7IHdpdGhvdXQgZXZlbiB0aGUgaW1wbGllZCB3YXJyYW50eSBvZlxuICogTUVSQ0hBTlRBQklMSVRZIG9yIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFLiAgU2VlIHRoZVxuICogR05VIEdlbmVyYWwgUHVibGljIExpY2Vuc2UgZm9yIG1vcmUgZGV0YWlscy5cbiAqXG4gKiBZb3Ugc2hvdWxkIGhhdmUgcmVjZWl2ZWQgYSBjb3B5IG9mIHRoZSBHTlUgR2VuZXJhbCBQdWJsaWMgTGljZW5zZVxuICogYWxvbmcgd2l0aCBcIkpTR2FtZVRvb2xzXCIuICBJZiBub3QsIHNlZSA8aHR0cDovL3d3dy5nbnUub3JnL2xpY2Vuc2VzLz4uXG4gKi9cbmltcG9ydCBDb21wb25lbnQgZnJvbSBcIi4vQ29tcG9uZW50XCI7XG5pbXBvcnQgQ29uc3RhbnRzIGZyb20gXCIuL0NvbnN0YW50c1wiO1xuaW1wb3J0IFV0aWxzIGZyb20gXCIuL1V0aWxzXCI7XG5pbXBvcnQgU3R5bGUgZnJvbSBcIi4vU3R5bGVcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ3Jvc3MgZXh0ZW5kcyBDb21wb25lbnQge1xuICBzZWxlY3RhYmxlID0gZmFsc2U7XG5cbiAgY29uc3RydWN0b3IoeCwgeSwgd2lkdGgsIGhlaWdodCwgc3R5bGUpIHtcbiAgICBzdXBlcih4LCB5LCB3aWR0aCwgaGVpZ2h0LCBzdHlsZSk7XG4gIH1cblxuICBkcmF3KGNvbnRleHQpIHtcbiAgICBpZih0aGlzLmhpZGRlbikgcmV0dXJuO1xuICAgIHN1cGVyLmRyYXcoY29udGV4dCk7XG5cbiAgICBjb25zdCBjYW52YXMgPSBjb250ZXh0LmNhbnZhcztcbiAgICBjb25zdCBjdHggPSBjYW52YXMuZ2V0Q29udGV4dChcIjJkXCIpO1xuICAgIFxuICAgIFV0aWxzLmRyYXdDcm9zcyhjdHgsIHRoaXMueCwgdGhpcy55LCB0aGlzLndpZHRoLCB0aGlzLmhlaWdodCwgdGhpcy5zdHlsZS5saW5lV2lkdGgsIHRoaXMuc3R5bGUuY29sb3IsIHRoaXMuc3R5bGUubGluZUNhcCk7XG5cbiAgICB0aGlzLmluaXQgPSB0cnVlO1xuICB9XG5cbiAgZ2V0IHdpZHRoKCkge1xuICAgIHJldHVybiBzdXBlci53aWR0aCArIHRoaXMuc3R5bGUubGluZVdpZHRoO1xuICB9XG5cbiAgZ2V0IGhlaWdodCgpIHtcbiAgICByZXR1cm4gc3VwZXIuaGVpZ2h0ICsgdGhpcy5zdHlsZS5saW5lV2lkdGg7XG4gIH1cblxuICBzZXQgd2lkdGgod2lkdGgpIHtcbiAgICBzdXBlci53aWR0aCA9IHdpZHRoO1xuICB9XG5cbiAgc2V0IGhlaWdodChoZWlnaHQpIHtcbiAgICBzdXBlci5oZWlnaHQgPSBoZWlnaHQ7XG4gIH1cblxuICBnZXQgZGVmYXVsdFN0eWxlKCkge1xuICAgIHJldHVybiBuZXcgU3R5bGUoe1xuICAgICAgXCJsaW5lV2lkdGhcIjogQ29uc3RhbnRzLlNldHRpbmcuQ1JPU1NfREVGQVVMVF9MSU5FX1NJWkUsXG4gICAgICBcImNvbG9yXCI6IENvbnN0YW50cy5TZXR0aW5nLkNST1NTX0RFRkFVTFRfQ09MT1IsXG4gICAgICBcImxpbmVDYXBcIjogQ29uc3RhbnRzLlNldHRpbmcuQ1JPU1NfREVGQVVMVF9MSU5FX0NBUFxuICAgIH0pO1xuICB9XG59IiwiLypcbiAqIENvcHlyaWdodCAoQykgMjAyMCBFbGlhc3RpayAoZWxpYXN0aWtzb2Z0cy5jb20pXG4gKlxuICogVGhpcyBmaWxlIGlzIHBhcnQgb2YgXCJKU0dhbWVUb29sc1wiLlxuICpcbiAqIFwiSlNHYW1lVG9vbHNcIiBpcyBmcmVlIHNvZnR3YXJlOiB5b3UgY2FuIHJlZGlzdHJpYnV0ZSBpdCBhbmQvb3IgbW9kaWZ5XG4gKiBpdCB1bmRlciB0aGUgdGVybXMgb2YgdGhlIEdOVSBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlIGFzIHB1Ymxpc2hlZCBieVxuICogdGhlIEZyZWUgU29mdHdhcmUgRm91bmRhdGlvbiwgZWl0aGVyIHZlcnNpb24gMyBvZiB0aGUgTGljZW5zZSwgb3JcbiAqIChhdCB5b3VyIG9wdGlvbikgYW55IGxhdGVyIHZlcnNpb24uXG4gKlxuICogXCJKU0dhbWVUb29sc1wiIGlzIGRpc3RyaWJ1dGVkIGluIHRoZSBob3BlIHRoYXQgaXQgd2lsbCBiZSB1c2VmdWwsXG4gKiBidXQgV0lUSE9VVCBBTlkgV0FSUkFOVFk7IHdpdGhvdXQgZXZlbiB0aGUgaW1wbGllZCB3YXJyYW50eSBvZlxuICogTUVSQ0hBTlRBQklMSVRZIG9yIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFLiAgU2VlIHRoZVxuICogR05VIEdlbmVyYWwgUHVibGljIExpY2Vuc2UgZm9yIG1vcmUgZGV0YWlscy5cbiAqXG4gKiBZb3Ugc2hvdWxkIGhhdmUgcmVjZWl2ZWQgYSBjb3B5IG9mIHRoZSBHTlUgR2VuZXJhbCBQdWJsaWMgTGljZW5zZVxuICogYWxvbmcgd2l0aCBcIkpTR2FtZVRvb2xzXCIuICBJZiBub3QsIHNlZSA8aHR0cDovL3d3dy5nbnUub3JnL2xpY2Vuc2VzLz4uXG4gKi9cbmV4cG9ydCBkZWZhdWx0IHtcbiAgZWFzZUluQ3ViaWMoeCkge1xuICAgIHJldHVybiB4ICogeCAqIHg7XG4gIH0sXG4gIGVhc2VPdXRCb3VuY2UoeCkge1xuICAgIGNvbnN0IG4xID0gNy41NjI1O1xuICAgIGNvbnN0IGQxID0gMi43NTtcbiAgICBcbiAgICBpZih4IDwgMSAvIGQxKSB7XG4gICAgICByZXR1cm4gbjEgKiB4ICogeDtcbiAgICB9IGVsc2UgaWYoeCA8IDIgLyBkMSkge1xuICAgICAgcmV0dXJuIG4xICogKHggLT0gMS41IC8gZDEpICogeCArIDAuNzU7XG4gICAgfSBlbHNlIGlmKHggPCAyLjUgLyBkMSkge1xuICAgICAgcmV0dXJuIG4xICogKHggLT0gMi4yNSAvIGQxKSAqIHggKyAwLjkzNzU7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiBuMSAqICh4IC09IDIuNjI1IC8gZDEpICogeCArIDAuOTg0Mzc1O1xuICAgIH1cbiAgfSxcbiAgZWFzZUluT3V0Q3ViaWMoeCkge1xuICAgIHJldHVybiB4IDwgMC41ID8gNCAqIHggKiB4ICogeCA6IDEgLSBNYXRoLnBvdygtMiAqIHggKyAyLCAzKSAvIDI7XG4gIH0sXG4gIGVhc2VJbk91dFNpbmUoeCkge1xuICAgIHJldHVybiAtKE1hdGguY29zKE1hdGguUEkgKiB4KSAtIDEpIC8gMjtcbiAgfSxcbiAgZWFzZUluT3V0UXVpbnQoeCkge1xuICAgIHJldHVybiB4IDwgMC41ID8gMTYgKiB4ICogeCAqIHggKiB4ICogeCA6IDEgLSBNYXRoLnBvdygtMiAqIHggKyAyLCA1KSAvIDI7XG4gIH0sXG4gIGVhc2VJbk91dENpcmMoeCkge1xuICAgIHJldHVybiB4IDwgMC41ID8gKDEgLSBNYXRoLnNxcnQoMSAtIE1hdGgucG93KDIgKiB4LCAyKSkpIC8gMiA6IChNYXRoLnNxcnQoMSAtIE1hdGgucG93KC0yICogeCArIDIsIDIpKSArIDEpIC8gMjtcbiAgfSxcbiAgZWFzZUluT3V0UXVhZCh4KSB7XG4gICAgcmV0dXJuIHggPCAwLjUgPyAyICogeCAqIHggOiAxIC0gTWF0aC5wb3coLTIgKiB4ICsgMiwgMikgLyAyO1xuICB9LFxuICBlYXNlSW5PdXRRdWFydCh4KSB7XG4gICAgcmV0dXJuIHggPCAwLjUgPyA4ICogeCAqIHggKiB4ICogeCA6IDEgLSBNYXRoLnBvdygtMiAqIHggKyAyLCA0KSAvIDI7XG4gIH0sXG4gIGVhc2VJbk91dEV4cG8oeCkge1xuICAgIHJldHVybiB4ID09PSAwID8gMCA6IHggPT09IDEgPyAxIDogeCA8IDAuNSA/IE1hdGgucG93KDIsIDIwICogeCAtIDEwKSAvIDIgOiAoMiAtIE1hdGgucG93KDIsIC0yMCAqIHggKyAxMCkpIC8gMjtcbiAgfSxcbiAgZWFzZUluT3V0QmFjayh4KSB7XG4gICAgY29uc3QgYzEgPSAxLjcwMTU4O1xuICAgIGNvbnN0IGMyID0gYzEgKiAxLjUyNTtcbiAgICBcbiAgICByZXR1cm4geCA8IDAuNSA/IChNYXRoLnBvdygyICogeCwgMikgKiAoKGMyICsgMSkgKiAyICogeCAtIGMyKSkgLyAyIDogKE1hdGgucG93KDIgKiB4IC0gMiwgMikgKiAoKGMyICsgMSkgKiAoeCAqIDIgLSAyKSArIGMyKSArIDIpIC8gMjtcbiAgfVxufTsiLCIvKlxuICogQ29weXJpZ2h0IChDKSAyMDIwIEVsaWFzdGlrIChlbGlhc3Rpa3NvZnRzLmNvbSlcbiAqXG4gKiBUaGlzIGZpbGUgaXMgcGFydCBvZiBcIkpTR2FtZVRvb2xzXCIuXG4gKlxuICogXCJKU0dhbWVUb29sc1wiIGlzIGZyZWUgc29mdHdhcmU6IHlvdSBjYW4gcmVkaXN0cmlidXRlIGl0IGFuZC9vciBtb2RpZnlcbiAqIGl0IHVuZGVyIHRoZSB0ZXJtcyBvZiB0aGUgR05VIEdlbmVyYWwgUHVibGljIExpY2Vuc2UgYXMgcHVibGlzaGVkIGJ5XG4gKiB0aGUgRnJlZSBTb2Z0d2FyZSBGb3VuZGF0aW9uLCBlaXRoZXIgdmVyc2lvbiAzIG9mIHRoZSBMaWNlbnNlLCBvclxuICogKGF0IHlvdXIgb3B0aW9uKSBhbnkgbGF0ZXIgdmVyc2lvbi5cbiAqXG4gKiBcIkpTR2FtZVRvb2xzXCIgaXMgZGlzdHJpYnV0ZWQgaW4gdGhlIGhvcGUgdGhhdCBpdCB3aWxsIGJlIHVzZWZ1bCxcbiAqIGJ1dCBXSVRIT1VUIEFOWSBXQVJSQU5UWTsgd2l0aG91dCBldmVuIHRoZSBpbXBsaWVkIHdhcnJhbnR5IG9mXG4gKiBNRVJDSEFOVEFCSUxJVFkgb3IgRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UuICBTZWUgdGhlXG4gKiBHTlUgR2VuZXJhbCBQdWJsaWMgTGljZW5zZSBmb3IgbW9yZSBkZXRhaWxzLlxuICpcbiAqIFlvdSBzaG91bGQgaGF2ZSByZWNlaXZlZCBhIGNvcHkgb2YgdGhlIEdOVSBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlXG4gKiBhbG9uZyB3aXRoIFwiSlNHYW1lVG9vbHNcIi4gIElmIG5vdCwgc2VlIDxodHRwOi8vd3d3LmdudS5vcmcvbGljZW5zZXMvPi5cbiAqL1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRXZlbnQge1xuICBjb25zdHJ1Y3RvcihuYW1lKSB7XG4gICAgdGhpcy5uYW1lID0gbmFtZTtcbiAgICB0aGlzLmNhbGxiYWNrcyA9IFtdO1xuICB9XG5cbiAgcmVnaXN0ZXJDYWxsYmFjayhjYWxsYmFjaykge1xuICAgIHRoaXMuY2FsbGJhY2tzLnB1c2goY2FsbGJhY2spO1xuICB9XG5cbiAgcmVtb3ZlQ2FsbGJhY2soY2FsbGJhY2spIHtcbiAgICB0aGlzLmNhbGxiYWNrcy5maWx0ZXIoY3VycmVudCA9PiBjdXJyZW50ICE9IGNhbGxiYWNrKTtcbiAgfVxuXG4gIHJlbW92ZUFsbENhbGxiYWNrcygpIHtcbiAgICB0aGlzLmNhbGxiYWNrcyA9IFtdO1xuICB9XG59IiwiLypcbiAqIENvcHlyaWdodCAoQykgMjAyMCBFbGlhc3RpayAoZWxpYXN0aWtzb2Z0cy5jb20pXG4gKlxuICogVGhpcyBmaWxlIGlzIHBhcnQgb2YgXCJKU0dhbWVUb29sc1wiLlxuICpcbiAqIFwiSlNHYW1lVG9vbHNcIiBpcyBmcmVlIHNvZnR3YXJlOiB5b3UgY2FuIHJlZGlzdHJpYnV0ZSBpdCBhbmQvb3IgbW9kaWZ5XG4gKiBpdCB1bmRlciB0aGUgdGVybXMgb2YgdGhlIEdOVSBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlIGFzIHB1Ymxpc2hlZCBieVxuICogdGhlIEZyZWUgU29mdHdhcmUgRm91bmRhdGlvbiwgZWl0aGVyIHZlcnNpb24gMyBvZiB0aGUgTGljZW5zZSwgb3JcbiAqIChhdCB5b3VyIG9wdGlvbikgYW55IGxhdGVyIHZlcnNpb24uXG4gKlxuICogXCJKU0dhbWVUb29sc1wiIGlzIGRpc3RyaWJ1dGVkIGluIHRoZSBob3BlIHRoYXQgaXQgd2lsbCBiZSB1c2VmdWwsXG4gKiBidXQgV0lUSE9VVCBBTlkgV0FSUkFOVFk7IHdpdGhvdXQgZXZlbiB0aGUgaW1wbGllZCB3YXJyYW50eSBvZlxuICogTUVSQ0hBTlRBQklMSVRZIG9yIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFLiAgU2VlIHRoZVxuICogR05VIEdlbmVyYWwgUHVibGljIExpY2Vuc2UgZm9yIG1vcmUgZGV0YWlscy5cbiAqXG4gKiBZb3Ugc2hvdWxkIGhhdmUgcmVjZWl2ZWQgYSBjb3B5IG9mIHRoZSBHTlUgR2VuZXJhbCBQdWJsaWMgTGljZW5zZVxuICogYWxvbmcgd2l0aCBcIkpTR2FtZVRvb2xzXCIuICBJZiBub3QsIHNlZSA8aHR0cDovL3d3dy5nbnUub3JnL2xpY2Vuc2VzLz4uXG4gKi9cbmltcG9ydCBMYWJlbCBmcm9tIFwiLi9MYWJlbFwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBGUFNNZXRlciBleHRlbmRzIExhYmVsIHtcbiAgc2VsZWN0YWJsZSA9IGZhbHNlO1xuXG4gIGNvbnN0cnVjdG9yKGRpc3BsYXlGcmFtZXMsIHgsIHksIHN0eWxlKSB7XG4gICAgc3VwZXIobnVsbCwgeCwgeSwgc3R5bGUpO1xuXG4gICAgdGhpcy5kaXNwbGF5RnJhbWVzID0gZGlzcGxheUZyYW1lcyB8fCBmYWxzZTtcbiAgICB0aGlzLmZyYW1lcyA9IDA7XG4gICAgdGhpcy5sYXN0RnJhbWUgPSAwO1xuICAgIHRoaXMuY3VycmVudEZQUyA9IDA7XG5cbiAgICB0aGlzLmludGVydmFsQ291bnRGUFMgPSBzZXRJbnRlcnZhbCgoKSA9PiB0aGlzLmNvdW50RlBTKCksIDEwMDApO1xuICB9XG5cbiAgZHJhdyhjb250ZXh0KSB7XG4gICAgaWYodGhpcy5oaWRkZW4pIHJldHVybjtcbiAgICB0aGlzLnRleHQgPSBcIkZQUzogXCIgKyB0aGlzLmN1cnJlbnRGUFMgKyAodGhpcy5kaXNwbGF5RnJhbWVzID8gXCIgLyBGcmFtZXM6IFwiICsgdGhpcy5mcmFtZXMgOiBcIlwiKTtcbiAgICBzdXBlci5kcmF3KGNvbnRleHQpO1xuICAgIHRoaXMuZnJhbWVzKys7XG4gIH1cblxuICBjb3VudEZQUygpIHtcbiAgICBpZih0aGlzLmxhc3RGcmFtZSA+IDApIHRoaXMuY3VycmVudEZQUyA9IHRoaXMuZnJhbWVzIC0gdGhpcy5sYXN0RnJhbWU7XG4gICAgdGhpcy5sYXN0RnJhbWUgPSB0aGlzLmZyYW1lcztcbiAgfVxufSIsIi8qXG4gKiBDb3B5cmlnaHQgKEMpIDIwMjAgRWxpYXN0aWsgKGVsaWFzdGlrc29mdHMuY29tKVxuICpcbiAqIFRoaXMgZmlsZSBpcyBwYXJ0IG9mIFwiSlNHYW1lVG9vbHNcIi5cbiAqXG4gKiBcIkpTR2FtZVRvb2xzXCIgaXMgZnJlZSBzb2Z0d2FyZTogeW91IGNhbiByZWRpc3RyaWJ1dGUgaXQgYW5kL29yIG1vZGlmeVxuICogaXQgdW5kZXIgdGhlIHRlcm1zIG9mIHRoZSBHTlUgR2VuZXJhbCBQdWJsaWMgTGljZW5zZSBhcyBwdWJsaXNoZWQgYnlcbiAqIHRoZSBGcmVlIFNvZnR3YXJlIEZvdW5kYXRpb24sIGVpdGhlciB2ZXJzaW9uIDMgb2YgdGhlIExpY2Vuc2UsIG9yXG4gKiAoYXQgeW91ciBvcHRpb24pIGFueSBsYXRlciB2ZXJzaW9uLlxuICpcbiAqIFwiSlNHYW1lVG9vbHNcIiBpcyBkaXN0cmlidXRlZCBpbiB0aGUgaG9wZSB0aGF0IGl0IHdpbGwgYmUgdXNlZnVsLFxuICogYnV0IFdJVEhPVVQgQU5ZIFdBUlJBTlRZOyB3aXRob3V0IGV2ZW4gdGhlIGltcGxpZWQgd2FycmFudHkgb2ZcbiAqIE1FUkNIQU5UQUJJTElUWSBvciBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRS4gIFNlZSB0aGVcbiAqIEdOVSBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlIGZvciBtb3JlIGRldGFpbHMuXG4gKlxuICogWW91IHNob3VsZCBoYXZlIHJlY2VpdmVkIGEgY29weSBvZiB0aGUgR05VIEdlbmVyYWwgUHVibGljIExpY2Vuc2VcbiAqIGFsb25nIHdpdGggXCJKU0dhbWVUb29sc1wiLiAgSWYgbm90LCBzZWUgPGh0dHA6Ly93d3cuZ251Lm9yZy9saWNlbnNlcy8+LlxuICovXG5pbXBvcnQgVXRpbHMgZnJvbSBcIi4vVXRpbHNcIjtcbmltcG9ydCBDb21wb25lbnQgZnJvbSBcIi4vQ29tcG9uZW50XCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEltYWdlQ29udGFpbmVyIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgc2VsZWN0YWJsZSA9IGZhbHNlO1xuXG4gIGNvbnN0cnVjdG9yKGltYWdlLCB4LCB5LCB3aWR0aCwgaGVpZ2h0LCBzdHlsZSwgaW1hZ2VMb2FkZXIpIHtcbiAgICBzdXBlcih4LCB5LCB3aWR0aCwgaGVpZ2h0LCBzdHlsZSk7XG4gICAgdGhpcy5pbWFnZTtcbiAgICB0aGlzLmltZ1NyYztcbiAgICB0aGlzLmltYWdlTG9hZGVyID0gaW1hZ2VMb2FkZXI7XG5cbiAgICBpZihpbWFnZSBpbnN0YW5jZW9mIEltYWdlKSB7XG4gICAgICB0aGlzLmltYWdlID0gaW1hZ2U7XG4gICAgICB0aGlzLmltZ1NyYyA9IGltYWdlLnNyYztcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5pbWdTcmMgPSBpbWFnZTtcbiAgICB9XG4gIH1cblxuICBkcmF3KGNvbnRleHQpIHtcbiAgICBpZih0aGlzLmhpZGRlbikgcmV0dXJuO1xuICAgIHN1cGVyLmRyYXcoY29udGV4dCk7XG4gICAgXG4gICAgY29uc3QgY2FudmFzID0gY29udGV4dC5jYW52YXM7XG4gICAgY29uc3QgY3R4ID0gY2FudmFzLmdldENvbnRleHQoXCIyZFwiKTtcbiAgICBjdHguc2F2ZSgpO1xuICAgIFxuICAgIGlmKHRoaXMuaW1nU3JjICE9IG51bGwgJiYgdGhpcy5pbWFnZUxvYWRlciAhPSBudWxsKSB7XG4gICAgICB0aGlzLmxvYWRJbWFnZSh0aGlzLmltYWdlTG9hZGVyKTtcbiAgICB9XG5cbiAgICBpZih0aGlzLmltYWdlICE9IG51bGwpIHtcbiAgICAgIHRoaXMuZHJhd0ltYWdlKGN0eCk7XG4gICAgfVxuXG4gICAgY3R4LnJlc3RvcmUoKTtcbiAgfVxuXG4gIGRyYXdJbWFnZShjdHgpIHtcbiAgICBVdGlscy5kcmF3SW1hZ2UoY3R4LCB0aGlzLmltYWdlLCBNYXRoLnJvdW5kKHRoaXMueCksIE1hdGgucm91bmQodGhpcy55KSwgTWF0aC5yb3VuZCh0aGlzLndpZHRoKSwgTWF0aC5yb3VuZCh0aGlzLmhlaWdodCkpO1xuICB9XG5cbiAgZ2V0IHNpemVzKCkge1xuICAgIGxldCBpbWdXaWR0aCA9IHN1cGVyLndpZHRoO1xuICAgIGxldCBpbWdIZWlnaHQgPSBzdXBlci5oZWlnaHQ7XG5cbiAgICBpZih0aGlzLmltYWdlTG9hZGVyKSB7XG4gICAgICB0aGlzLmxvYWRJbWFnZSh0aGlzLmltYWdlTG9hZGVyKTtcbiAgICB9XG4gICAgXG4gICAgaWYodGhpcy5pbWFnZSAmJiAodGhpcy5pbWFnZS53aWR0aCA+IHN1cGVyLndpZHRoIHx8IHRoaXMuaW1hZ2UuaGVpZ2h0ID4gc3VwZXIuaGVpZ2h0KSkge1xuICAgICAgY29uc3QgYXNwZWN0UmF0aW8gPSB0aGlzLmltYWdlLndpZHRoIC8gdGhpcy5pbWFnZS5oZWlnaHQ7XG4gICAgICBpbWdXaWR0aCA9IE1hdGguZmxvb3Ioc3VwZXIud2lkdGggLyAxLjI1KTtcbiAgICAgIGltZ0hlaWdodCA9IE1hdGguZmxvb3IoaW1nV2lkdGggLyBhc3BlY3RSYXRpbyk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHtcbiAgICAgIHdpZHRoOiBpbWdXaWR0aCxcbiAgICAgIGhlaWdodDogaW1nSGVpZ2h0XG4gICAgfVxuICB9XG5cbiAgZ2V0IGhlaWdodCgpIHtcbiAgICByZXR1cm4gdGhpcy5zaXplcy5oZWlnaHQ7XG4gIH1cblxuICBnZXQgd2lkdGgoKSB7XG4gICAgcmV0dXJuIHRoaXMuc2l6ZXMud2lkdGg7XG4gIH1cblxuICBzZXQgd2lkdGgod2lkdGgpIHtcbiAgICBzdXBlci53aWR0aCA9IHdpZHRoO1xuICB9XG5cbiAgc2V0IGhlaWdodChoZWlnaHQpIHtcbiAgICBzdXBlci5oZWlnaHQgPSBoZWlnaHQ7XG4gIH1cbiAgXG4gIGxvYWRJbWFnZShpbWFnZUxvYWRlcikge1xuICAgIHRoaXMuaW1hZ2UgPSBpbWFnZUxvYWRlci5nZXQodGhpcy5pbWdTcmMpO1xuICB9XG59IiwiLypcbiAqIENvcHlyaWdodCAoQykgMjAyMCBFbGlhc3RpayAoZWxpYXN0aWtzb2Z0cy5jb20pXG4gKlxuICogVGhpcyBmaWxlIGlzIHBhcnQgb2YgXCJKU0dhbWVUb29sc1wiLlxuICpcbiAqIFwiSlNHYW1lVG9vbHNcIiBpcyBmcmVlIHNvZnR3YXJlOiB5b3UgY2FuIHJlZGlzdHJpYnV0ZSBpdCBhbmQvb3IgbW9kaWZ5XG4gKiBpdCB1bmRlciB0aGUgdGVybXMgb2YgdGhlIEdOVSBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlIGFzIHB1Ymxpc2hlZCBieVxuICogdGhlIEZyZWUgU29mdHdhcmUgRm91bmRhdGlvbiwgZWl0aGVyIHZlcnNpb24gMyBvZiB0aGUgTGljZW5zZSwgb3JcbiAqIChhdCB5b3VyIG9wdGlvbikgYW55IGxhdGVyIHZlcnNpb24uXG4gKlxuICogXCJKU0dhbWVUb29sc1wiIGlzIGRpc3RyaWJ1dGVkIGluIHRoZSBob3BlIHRoYXQgaXQgd2lsbCBiZSB1c2VmdWwsXG4gKiBidXQgV0lUSE9VVCBBTlkgV0FSUkFOVFk7IHdpdGhvdXQgZXZlbiB0aGUgaW1wbGllZCB3YXJyYW50eSBvZlxuICogTUVSQ0hBTlRBQklMSVRZIG9yIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFLiAgU2VlIHRoZVxuICogR05VIEdlbmVyYWwgUHVibGljIExpY2Vuc2UgZm9yIG1vcmUgZGV0YWlscy5cbiAqXG4gKiBZb3Ugc2hvdWxkIGhhdmUgcmVjZWl2ZWQgYSBjb3B5IG9mIHRoZSBHTlUgR2VuZXJhbCBQdWJsaWMgTGljZW5zZVxuICogYWxvbmcgd2l0aCBcIkpTR2FtZVRvb2xzXCIuICBJZiBub3QsIHNlZSA8aHR0cDovL3d3dy5nbnUub3JnL2xpY2Vuc2VzLz4uXG4gKi9cbmltcG9ydCBVdGlscyBmcm9tIFwiLi9VdGlsc1wiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBJbWFnZUxvYWRlciB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHRoaXMuaW1hZ2VzID0ge307XG4gICAgdGhpcy5pbWFnZXNSZXNpemVkID0ge307XG4gICAgdGhpcy50cmllZExvYWRpbmcgPSAwO1xuICAgIHRoaXMuaGFzRXJyb3IgPSBmYWxzZTtcbiAgICB0aGlzLm5iSW1hZ2VzVG9Mb2FkID0gMTtcbiAgICB0aGlzLmZpcnN0SW1hZ2UgPSB0cnVlO1xuICB9XG5cbiAgbG9hZChpbWcsIGZ1bmMpIHtcbiAgICBpZih0aGlzLmZpcnN0SW1hZ2UpIHtcbiAgICAgIHRoaXMubmJJbWFnZXNUb0xvYWQgPSBpbWcubGVuZ3RoO1xuICAgICAgdGhpcy5maXJzdEltYWdlID0gZmFsc2U7XG4gICAgfVxuICAgIFxuICAgIGlmKGltZy5sZW5ndGggPiAwKSB7XG4gICAgICB0aGlzLmxvYWRJbWFnZShpbWdbMF0sIHJlc3VsdCA9PiB7XG4gICAgICAgIGlmKHJlc3VsdCA9PSB0cnVlKSB7XG4gICAgICAgICAgaW1nLnNoaWZ0KCk7XG4gICAgICAgICAgdGhpcy5sb2FkKGltZywgZnVuYyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdGhpcy5oYXNFcnJvciA9IHRydWU7XG4gICAgICAgICAgcmV0dXJuIGZ1bmMoKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiBmdW5jKCk7XG4gICAgfVxuICB9XG5cbiAgbG9hZEltYWdlKHNyYywgZnVuYykge1xuICAgIHRoaXMudHJpZWRMb2FkaW5nKys7XG4gIFxuICAgIGNvbnN0IGltYWdlID0gbmV3IEltYWdlKCk7XG4gICAgaW1hZ2Uuc3JjID0gc3JjO1xuICBcbiAgICBpbWFnZS5vbmxvYWQgPSAoKSA9PiB7XG4gICAgICBpZih0aGlzLmltYWdlcyAhPSBudWxsKSB7XG4gICAgICAgIHRoaXMuaW1hZ2VzW3NyY10gPSBpbWFnZTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiBmdW5jKGZhbHNlKTtcbiAgICAgIH1cbiAgXG4gICAgICB0aGlzLnRyaWVkTG9hZGluZyA9IDA7XG4gICAgICByZXR1cm4gZnVuYyh0cnVlKTtcbiAgICB9O1xuICBcbiAgICBpbWFnZS5vbmVycm9yID0gKCkgPT4ge1xuICAgICAgaWYodGhpcy50cmllZExvYWRpbmcgPj0gNSkge1xuICAgICAgICBpZih0aGlzLmltYWdlcyAhPSBudWxsKSB7XG4gICAgICAgICAgdGhpcy5pbWFnZXNbc3JjXSA9IGltYWdlO1xuICAgICAgICB9XG4gIFxuICAgICAgICB0aGlzLnRyaWVkTG9hZGluZyA9IDA7XG4gICAgICAgIHJldHVybiBmdW5jKGZhbHNlKTtcbiAgICAgIH1cbiAgXG4gICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgdGhpcy5sb2FkSW1hZ2Uoc3JjLCBmdW5jKTtcbiAgICAgIH0sIDI1MCk7XG4gICAgfVxuICB9XG5cbiAgZ2V0KHNyYywgd2lkdGgsIGhlaWdodCkge1xuICAgIGlmKHRoaXMuaW1hZ2VzICE9IG51bGwgJiYgdGhpcy5pbWFnZXMuaGFzT3duUHJvcGVydHkoc3JjKSkge1xuICAgICAgY29uc3QgaW1hZ2UgPSB0aGlzLmltYWdlc1tzcmNdO1xuXG4gICAgICBpZigod2lkdGggfHwgaGVpZ2h0KSAmJiAoaW1hZ2Uud2lkdGggIT0gd2lkdGggfHwgaW1hZ2UuaGVpZ2h0ICE9IGhlaWdodCkpIHtcbiAgICAgICAgY29uc3QgdyA9IE1hdGgucm91bmQod2lkdGgpO1xuICAgICAgICBjb25zdCBoID0gTWF0aC5yb3VuZChoZWlnaHQpO1xuICAgICAgICBjb25zdCBpZCA9IHNyYyArIFwiQFwiICsgdyArIFwiLVwiICsgaDtcblxuICAgICAgICBpZighdGhpcy5pbWFnZXNSZXNpemVkLmhhc093blByb3BlcnR5KGlkKSkge1xuICAgICAgICAgIGNvbnN0IGNhbnZhc1RtcCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJjYW52YXNcIik7XG4gICAgICAgICAgY29uc3QgY3R4ID0gY2FudmFzVG1wLmdldENvbnRleHQoXCIyZFwiKTtcbiAgICAgICAgICBjYW52YXNUbXAud2lkdGggPSB3O1xuICAgICAgICAgIGNhbnZhc1RtcC5oZWlnaHQgPSBoO1xuXG4gICAgICAgICAgVXRpbHMuZHJhd0ltYWdlKGN0eCwgaW1hZ2UsIDAsIDAsIHcsIGgsIDAsIDAsIGltYWdlLndpZHRoLCBpbWFnZS5oZWlnaHQpO1xuICAgICAgICAgIHRoaXMuaW1hZ2VzUmVzaXplZFtpZF0gPSBjYW52YXNUbXA7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gdGhpcy5pbWFnZXNSZXNpemVkW2lkXTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiBpbWFnZTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuICB9XG5cbiAgY2xlYXIoKSB7XG4gICAgdGhpcy5pbWFnZXMgPSBudWxsO1xuICB9XG59IiwiLypcbiAqIENvcHlyaWdodCAoQykgMjAyMCBFbGlhc3RpayAoZWxpYXN0aWtzb2Z0cy5jb20pXG4gKlxuICogVGhpcyBmaWxlIGlzIHBhcnQgb2YgXCJKU0dhbWVUb29sc1wiLlxuICpcbiAqIFwiSlNHYW1lVG9vbHNcIiBpcyBmcmVlIHNvZnR3YXJlOiB5b3UgY2FuIHJlZGlzdHJpYnV0ZSBpdCBhbmQvb3IgbW9kaWZ5XG4gKiBpdCB1bmRlciB0aGUgdGVybXMgb2YgdGhlIEdOVSBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlIGFzIHB1Ymxpc2hlZCBieVxuICogdGhlIEZyZWUgU29mdHdhcmUgRm91bmRhdGlvbiwgZWl0aGVyIHZlcnNpb24gMyBvZiB0aGUgTGljZW5zZSwgb3JcbiAqIChhdCB5b3VyIG9wdGlvbikgYW55IGxhdGVyIHZlcnNpb24uXG4gKlxuICogXCJKU0dhbWVUb29sc1wiIGlzIGRpc3RyaWJ1dGVkIGluIHRoZSBob3BlIHRoYXQgaXQgd2lsbCBiZSB1c2VmdWwsXG4gKiBidXQgV0lUSE9VVCBBTlkgV0FSUkFOVFk7IHdpdGhvdXQgZXZlbiB0aGUgaW1wbGllZCB3YXJyYW50eSBvZlxuICogTUVSQ0hBTlRBQklMSVRZIG9yIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFLiAgU2VlIHRoZVxuICogR05VIEdlbmVyYWwgUHVibGljIExpY2Vuc2UgZm9yIG1vcmUgZGV0YWlscy5cbiAqXG4gKiBZb3Ugc2hvdWxkIGhhdmUgcmVjZWl2ZWQgYSBjb3B5IG9mIHRoZSBHTlUgR2VuZXJhbCBQdWJsaWMgTGljZW5zZVxuICogYWxvbmcgd2l0aCBcIkpTR2FtZVRvb2xzXCIuICBJZiBub3QsIHNlZSA8aHR0cDovL3d3dy5nbnUub3JnL2xpY2Vuc2VzLz4uXG4gKi9cbmltcG9ydCBDb25zdGFudHMgZnJvbSBcIi4vQ29uc3RhbnRzXCI7XG5pbXBvcnQgVXRpbHMgZnJvbSBcIi4vVXRpbHNcIjtcbmltcG9ydCBCb3ggZnJvbSBcIi4vQm94XCI7XG5pbXBvcnQgU3R5bGUgZnJvbSBcIi4vU3R5bGVcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgSW5wdXQgZXh0ZW5kcyBCb3gge1xuICBzZWxlY3RhYmxlID0gdHJ1ZTtcbiAgI19wb3NpdGlvblN0YXJ0ID0gMDtcbiAgI19wb3NpdGlvblN0YXJ0Q2xpY2sgPSAwO1xuICAjX3Bvc2l0aW9uRW5kID0gMDtcblxuICBjb25zdHJ1Y3Rvcih4LCB5LCB3aWR0aCwgaGVpZ2h0LCBzdHlsZSwgZGVmYXVsdFRleHQpIHtcbiAgICBzdXBlcih4LCB5LCB3aWR0aCwgaGVpZ2h0LCBzdHlsZSk7XG4gICAgXG4gICAgdGhpcy50ZXh0ID0gZGVmYXVsdFRleHQgfHwgXCJcIjtcbiAgICB0aGlzLiNfcG9zaXRpb25TdGFydCA9IDA7XG4gICAgdGhpcy4jX3Bvc2l0aW9uRW5kID0gMDtcbiAgICB0aGlzLiNfcG9zaXRpb25TdGFydENsaWNrID0gMDtcbiAgICB0aGlzLmxhc3RJbnB1dFRleHQgPSBmYWxzZTtcbiAgICB0aGlzLm9mZnNldFggPSAwO1xuICAgIHRoaXMubGFzdFRpbWUgPSAwO1xuICAgIHRoaXMudG90YWxUaW1lID0gMDtcbiAgICB0aGlzLmNsaWNrQ3VycmVudFBvc2l0aW9uID0gbnVsbDtcbiAgICB0aGlzLnRleHRDYWNoZSA9IG51bGw7XG5cbiAgICB0aGlzLmlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xuICAgIHRoaXMuaW5wdXQuc2V0QXR0cmlidXRlKFwidHlwZVwiLCBcInRleHRcIik7XG4gICAgdGhpcy5pbnB1dC5zdHlsZS5wb3NpdGlvbiA9IFwiYWJzb2x1dGVcIjtcbiAgICB0aGlzLmlucHV0LnN0eWxlLmxlZnQgPSBcIi05OTk5cHhcIjtcbiAgICB0aGlzLmlucHV0LnRhYkluZGV4ID0gLTE7XG4gICAgdGhpcy5pbnB1dC52YWx1ZSA9IHRoaXMudGV4dDtcbiAgICB0aGlzLmlucHV0LmFkZEV2ZW50TGlzdGVuZXIoXCJibHVyXCIsICgpID0+IHRoaXMuc2VsZWN0ZWQgPSBmYWxzZSk7XG4gICAgdGhpcy5pbnB1dC5hZGRFdmVudExpc3RlbmVyKFwiZm9jdXNcIiwgKCkgPT4gdGhpcy5zZWxlY3RlZCA9IHRydWUpO1xuICAgIHRoaXMuaW5wdXQuYWRkRXZlbnRMaXN0ZW5lcihcImlucHV0XCIsICgpID0+IHtcbiAgICAgIHRoaXMudG90YWxUaW1lID0gMFxuICAgICAgdGhpcy5sYXN0SW5wdXRUZXh0ID0gdHJ1ZTtcbiAgICAgIHRoaXMucG9zaXRpb25TdGFydCA9IHRoaXMuaW5wdXQuc2VsZWN0aW9uU3RhcnQ7XG4gICAgICB0aGlzLnBvc2l0aW9uRW5kID0gdGhpcy5pbnB1dC5zZWxlY3Rpb25FbmQ7XG4gICAgfSk7XG5cbiAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKHRoaXMuaW5wdXQpO1xuXG4gICAgdGhpcy5hcHBlbmRUb0NhbnZhcyA9IGZhbHNlO1xuICAgIHRoaXMubm90aWNlTG9nZ2VkID0gZmFsc2U7XG5cbiAgICB0aGlzLmNhbnZhc1RtcCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJjYW52YXNcIik7XG5cbiAgICBjb25zdCBtb3ZlQWN0aW9uQ2FsbGJhY2sgPSAoZGVsdGFYLCBkZWx0YVksIHBvc2l0aW9uKSA9PiB7XG4gICAgICBpZihwb3NpdGlvbikge1xuICAgICAgICBjb25zdCBpQ2xpY2sgPSB0aGlzLmdldExldHRlckNsaWNrZWQocG9zaXRpb24pO1xuICBcbiAgICAgICAgaWYoaUNsaWNrICE9IG51bGwpIHtcbiAgICAgICAgICBpZihpQ2xpY2sgPiB0aGlzLnBvc2l0aW9uU3RhcnRDbGljaykge1xuICAgICAgICAgICAgdGhpcy5zZXRTZWxlY3Rpb25SYW5nZSh0aGlzLnBvc2l0aW9uU3RhcnRDbGljaywgaUNsaWNrLCBcImZvcndhcmRcIik7XG4gICAgICAgICAgfSBlbHNlIGlmKGlDbGljayA8IHRoaXMucG9zaXRpb25TdGFydENsaWNrKSB7XG4gICAgICAgICAgICB0aGlzLnNldFNlbGVjdGlvblJhbmdlKGlDbGljaywgdGhpcy5wb3NpdGlvblN0YXJ0Q2xpY2ssIFwiYmFja3dhcmRcIik7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfTtcblxuICAgIHRoaXMuYWRkRG93bkFjdGlvbihwb3NpdGlvbiA9PiB7XG4gICAgICBjb25zdCBpQ2xpY2sgPSB0aGlzLmdldExldHRlckNsaWNrZWQocG9zaXRpb24pO1xuXG4gICAgICBpZihpQ2xpY2sgIT0gbnVsbCkge1xuICAgICAgICB0aGlzLnBvc2l0aW9uU3RhcnRDbGljayA9IGlDbGljaztcbiAgICAgICAgdGhpcy5zZXRTZWxlY3Rpb25SYW5nZShpQ2xpY2ssIGlDbGljaywgXCJmb3J3YXJkXCIpO1xuICAgICAgfVxuXG4gICAgICB0aGlzLnRvdGFsVGltZSA9IDA7XG4gICAgfSk7XG5cbiAgICB0aGlzLmFkZENsaWNrQWN0aW9uKCgpID0+IHRoaXMuY2xpY2soKSk7XG4gICAgdGhpcy5hZGRNb3ZlQWN0aW9uKG1vdmVBY3Rpb25DYWxsYmFjayk7XG4gICAgdGhpcy5hZGRTY3JvbGxBY3Rpb24obW92ZUFjdGlvbkNhbGxiYWNrKTtcbiAgfVxuXG4gIGRyYXcoY29udGV4dCkge1xuICAgIGlmKHRoaXMuaGlkZGVuKSByZXR1cm47XG4gICAgc3VwZXIuZHJhdyhjb250ZXh0KTtcbiAgICBcbiAgICBjb25zdCBjYW52YXMgPSBjb250ZXh0LmNhbnZhcztcbiAgICBjb25zdCBjdHggPSBjYW52YXMuZ2V0Q29udGV4dChcIjJkXCIpO1xuICAgIGN0eC5zYXZlKCk7XG5cbiAgICBpZih0aGlzLmlucHV0LnNlbGVjdGlvbkVuZCAhPSB0aGlzLnBvc2l0aW9uRW5kKSB0aGlzLnRvdGFsVGltZSA9IDA7XG5cbiAgICBpZih0aGlzLmNhbnZhcyAmJiB0aGlzLmNhbnZhcy5jb250YWluZXIgJiYgIXRoaXMuYXBwZW5kVG9DYW52YXMpIHtcbiAgICAgIGRvY3VtZW50LmJvZHkucmVtb3ZlQ2hpbGQodGhpcy5pbnB1dCk7XG4gICAgICB0aGlzLmNhbnZhcy5jb250YWluZXIuYXBwZW5kQ2hpbGQodGhpcy5pbnB1dCk7XG4gICAgICB0aGlzLmFwcGVuZFRvQ2FudmFzID0gdHJ1ZTtcbiAgICB9IGVsc2UgaWYoIXRoaXMuY2FudmFzICYmICF0aGlzLm5vdGljZUxvZ2dlZCkge1xuICAgICAgY29uc29sZSAmJiBjb25zb2xlLndhcm4gJiYgY29uc29sZS53YXJuKENvbnN0YW50cy5TdHJpbmcuV0FSTklOR19NRVNTQUdFICsgXCIgXCIgKyBDb25zdGFudHMuU3RyaW5nLklOUFVUX0ZVTExTQ1JFRU4pO1xuICAgICAgdGhpcy5ub3RpY2VMb2dnZWQgPSB0cnVlO1xuICAgIH1cblxuICAgIGlmKHRoaXMuc2VsZWN0ZWQgJiYgIXRoaXMuZGlzYWJsZWQpIHtcbiAgICAgIHRoaXMuY2xpY2soKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5ibHVyKCk7XG4gICAgfVxuXG4gICAgdGhpcy50ZXh0ID0gdGhpcy5pbnB1dC52YWx1ZTtcbiAgICB0aGlzLnBvc2l0aW9uU3RhcnQgPSB0aGlzLmlucHV0LnNlbGVjdGlvblN0YXJ0O1xuICAgIHRoaXMucG9zaXRpb25FbmQgPSB0aGlzLmlucHV0LnNlbGVjdGlvbkVuZDtcblxuICAgIGNvbnN0IHRpbWUgPSBwZXJmb3JtYW5jZS5ub3coKTtcbiAgICBsZXQgb2Zmc2V0VGltZSA9IDA7XG5cbiAgICBpZih0aGlzLmxhc3RUaW1lID4gMCkgb2Zmc2V0VGltZSA9IHRpbWUgLSB0aGlzLmxhc3RUaW1lO1xuICAgIHRoaXMubGFzdFRpbWUgPSB0aW1lO1xuICAgIHRoaXMudG90YWxUaW1lICs9IG9mZnNldFRpbWU7XG5cbiAgICB0aGlzLmRyYXdCYWNrZ3JvdW5kKGN0eCk7XG4gICAgdGhpcy5kcmF3Qm9yZGVyKGN0eCk7XG5cbiAgICB0aGlzLmNhbnZhc1RtcC53aWR0aCA9IGNhbnZhcy53aWR0aDtcbiAgICB0aGlzLmNhbnZhc1RtcC5oZWlnaHQgPSBjYW52YXMuaGVpZ2h0O1xuICAgIGNvbnN0IGN0eFRleHQgPSB0aGlzLmNhbnZhc1RtcC5nZXRDb250ZXh0KFwiMmRcIik7XG4gICAgVXRpbHMuY2xlYXIoY3R4VGV4dCk7XG5cbiAgICB0aGlzLnVwZGF0ZVRleHRDYWNoZSh0aGlzLnggKyA1KTtcbiAgICB0aGlzLmF1dG9TY3JvbGwoKTtcbiAgICB0aGlzLmRyYXdUZXh0KGN0eFRleHQsIHRoaXMueCArIDUpO1xuXG4gICAgVXRpbHMuZHJhd0ltYWdlRGF0YShjdHgsIHRoaXMuY2FudmFzVG1wLCB0aGlzLnggKyB0aGlzLnN0eWxlLmJvcmRlclNpemUsIHRoaXMueSArIHRoaXMuc3R5bGUuYm9yZGVyU2l6ZSwgdGhpcy53aWR0aCAtIHRoaXMuc3R5bGUuYm9yZGVyU2l6ZSAqIDIsIHRoaXMuaGVpZ2h0IC0gdGhpcy5zdHlsZS5ib3JkZXJTaXplICogMiwgdGhpcy54ICsgdGhpcy5zdHlsZS5ib3JkZXJTaXplLCB0aGlzLnkgKyB0aGlzLnN0eWxlLmJvcmRlclNpemUsIHRoaXMud2lkdGggLSB0aGlzLnN0eWxlLmJvcmRlclNpemUgKiAyLCB0aGlzLmhlaWdodCAtIHRoaXMuc3R5bGUuYm9yZGVyU2l6ZSAqIDIpO1xuXG4gICAgaWYodGhpcy5ob3ZlcmVkIHx8IHRoaXMuY2xpY2tlZCkge1xuICAgICAgaWYodGhpcy5jYW52YXMgJiYgdGhpcy5jYW52YXMuY2FudmFzKSB7XG4gICAgICAgIHRoaXMuY2FudmFzLmNhbnZhcy5zdHlsZS5jdXJzb3IgPSBcInRleHRcIjtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGNhbnZhcy5zdHlsZS5jdXJzb3IgPSBcImRlZmF1bHRcIjtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZighdGhpcy5zZWxlY3RlZCkge1xuICAgICAgdGhpcy50b3RhbFRpbWUgPSAwO1xuICAgIH1cblxuICAgIGN0eC5yZXN0b3JlKCk7XG4gIH1cblxuICBkcmF3VGV4dChjdHhUZXh0LCBjdXJyZW50WCkge1xuICAgIGZvcihsZXQgaSA9IC0xOyBpIDwgdGhpcy50ZXh0Lmxlbmd0aDsgaSsrKSB7XG4gICAgICBpZihpID4gLTEpIHtcbiAgICAgICAgY29uc3Qgc2l6ZXMgPSB0aGlzLnRleHRDYWNoZS5sZXR0ZXJzW2ldLnNpemVzO1xuXG4gICAgICAgIGNvbnN0IHhEcmF3ID0gY3VycmVudFggLSB0aGlzLm9mZnNldFg7XG4gICAgICAgIGNvbnN0IHlEcmF3ID0gdGhpcy55ICsgdGhpcy5zdHlsZS5ib3JkZXJTaXplO1xuXG4gICAgICAgIGlmKHRoaXMuaXNMZXR0ZXJWaXNpYmxlKGkpKSB7IC8vIERvbid0IGRyYXcgdGhlIHRleHQgaWYgaXQgaXMgb3V0c2lkZSB0aGUgaW5wdXQgKG92ZXJmbG93KVxuICAgICAgICAgIGlmKHRoaXMucG9zaXRpb25TdGFydCAhPSB0aGlzLnBvc2l0aW9uRW5kICYmIGkgPj0gdGhpcy5wb3NpdGlvblN0YXJ0ICYmIGkgPCB0aGlzLnBvc2l0aW9uRW5kKSB7XG4gICAgICAgICAgICB0aGlzLmRyYXdIaWdobGlnaHQoY3R4VGV4dCwgY3VycmVudFgsIHNpemVzKTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBVdGlscy5kcmF3VGV4dChjdHhUZXh0LCB0aGlzLnRleHRbaV0sIHRoaXMuc3R5bGUuZm9udENvbG9yLCB0aGlzLnN0eWxlLmZvbnRTaXplLCB0aGlzLnN0eWxlLmZvbnRGYW1pbHksIFwiZGVmYXVsdFwiLCBcImRlZmF1bHRcIiwgeERyYXcsIHlEcmF3LCBmYWxzZSk7XG4gICAgICAgIH1cblxuICAgICAgICBjdXJyZW50WCArPSBzaXplc1tcIndpZHRoXCJdICsgdGhpcy5zdHlsZS5zcGFjZUJldHdlZW5Db21wb25lbnRzO1xuICAgICAgfVxuXG4gICAgICBpZih0aGlzLnBvc2l0aW9uRW5kID09IGkgKyAxICYmIHRoaXMuc2VsZWN0ZWQpIHtcbiAgICAgICAgaWYodGhpcy50b3RhbFRpbWUgPD0gNTAwKSB7XG4gICAgICAgICAgdGhpcy5kcmF3Q3Vyc29yKGN0eFRleHQsIGN1cnJlbnRYKTtcbiAgICAgICAgfSBlbHNlIGlmKHRoaXMudG90YWxUaW1lID4gMTAwMCkge1xuICAgICAgICAgIHRoaXMudG90YWxUaW1lID0gMDtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBjdXJyZW50WDtcbiAgfVxuXG4gIGRyYXdDdXJzb3IoY3R4VGV4dCwgY3VycmVudFgpIHtcbiAgICBjdHhUZXh0LnN0cm9rZVN0eWxlID0gdGhpcy5zdHlsZS5ib3JkZXJDb2xvcjtcbiAgICBjdHhUZXh0LmxpbmVXaWR0aCA9IDE7XG4gICAgY3R4VGV4dC5iZWdpblBhdGgoKTtcbiAgICBjdHhUZXh0Lm1vdmVUbyhjdXJyZW50WCAtIHRoaXMub2Zmc2V0WCwgdGhpcy55ICsgMyk7XG4gICAgY3R4VGV4dC5saW5lVG8oY3VycmVudFggLSB0aGlzLm9mZnNldFgsIHRoaXMueSArIHRoaXMuc3R5bGUuZm9udFNpemUpO1xuICAgIGN0eFRleHQuc3Ryb2tlKCk7XG4gIH1cblxuICBkcmF3SGlnaGxpZ2h0KGN0eFRleHQsIGN1cnJlbnRYLCBzaXplcykge1xuICAgIGN0eFRleHQuZmlsbFN0eWxlID0gdGhpcy5zdHlsZS5zZWxlY3RDb2xvcjtcbiAgICBjdHhUZXh0LmZpbGxSZWN0KGN1cnJlbnRYIC0gdGhpcy5vZmZzZXRYLCB0aGlzLnkgKyB0aGlzLnN0eWxlLmJvcmRlclNpemUsIHNpemVzW1wid2lkdGhcIl0gKyAyLCB0aGlzLmhlaWdodCAtIHRoaXMuc3R5bGUuYm9yZGVyU2l6ZSAqIDIgLSAxKTtcbiAgfVxuXG4gIHVwZGF0ZVRleHRDYWNoZShjdXJyZW50WCkge1xuICAgIGNvbnN0IGN0eCA9IHRoaXMuY2FudmFzID8gdGhpcy5jYW52YXMuZ2V0Q29udGV4dChcIjJkXCIpIDogbnVsbDtcbiAgICBjb25zdCBwYXJlbnQgPSAodGhpcy5jYW52YXMgJiYgdGhpcy5jYW52YXMuc2NlbmUpIHx8IHRoaXMuY2FudmFzIHx8IChjdHggJiYgY3R4LmNhbnZhcyk7XG5cbiAgICBpZihjdHggJiYgKENvbnN0YW50cy5TZXR0aW5nLkRJU0FCTEVfT1BUSU1JWkFUSU9OUyB8fCAhdGhpcy50ZXh0Q2FjaGUgfHwgdGhpcy50ZXh0Q2FjaGUuZm9udFNpemUgIT0gdGhpcy5zdHlsZS5mb250U2l6ZSB8fCB0aGlzLnRleHRDYWNoZS5mb250RmFtaWx5ICE9IHRoaXMuc3R5bGUuZm9udEZhbWlseSB8fCB0aGlzLnRleHQgIT0gdGhpcy50ZXh0Q2FjaGUudGV4dCB8fCAocGFyZW50ICYmIHBhcmVudC53aWR0aCAhPSB0aGlzLnRleHRDYWNoZS5wYXJlbnRXaWR0aCkpKSB7XG4gICAgICB0aGlzLnRleHRDYWNoZSA9IHsgXCJmb250U2l6ZVwiOiB0aGlzLnN0eWxlLmZvbnRTaXplLCBcImZvbnRGYW1pbHlcIjogdGhpcy5zdHlsZS5mb250RmFtaWx5LCBcInRleHRcIjogdGhpcy50ZXh0LCBcInBhcmVudFdpZHRoXCI6IHBhcmVudC53aWR0aCwgXCJsZXR0ZXJzXCI6IFtdIH07XG5cbiAgICAgIGZvcihsZXQgaSA9IDA7IGkgPCB0aGlzLnRleHQubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgY29uc3Qgc2l6ZXMgPSBVdGlscy53cmFwVGV4dExpbmVzKGN0eCwgdGhpcy50ZXh0W2ldLCB0aGlzLndpZHRoLCB0aGlzLnN0eWxlLmZvbnRTaXplLCB0aGlzLnN0eWxlLmZvbnRGYW1pbHksIHRydWUpO1xuICAgICAgICB0aGlzLnRleHRDYWNoZS5sZXR0ZXJzW2ldID0ge1widGV4dFwiOiB0aGlzLnRleHRbaV0sIFwiY3VycmVudFhcIjogY3VycmVudFgsIFwic2l6ZXNcIjogc2l6ZXMgfTsgXG4gICAgICAgIGN1cnJlbnRYICs9IHNpemVzW1wid2lkdGhcIl0gKyB0aGlzLnN0eWxlLnNwYWNlQmV0d2VlbkNvbXBvbmVudHM7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgaXNDbGlja0N1cnJlbnRQb3NpdGlvbihwb3NpdGlvbiwgY3VycmVudFgsIHNpemVzKSB7XG4gICAgaWYocG9zaXRpb24ueCArIHRoaXMub2Zmc2V0WCA8PSBjdXJyZW50WCArIHNpemVzW1wid2lkdGhcIl0gKyB0aGlzLnN0eWxlLnNwYWNlQmV0d2VlbkNvbXBvbmVudHMgJiYgcG9zaXRpb24ueCArIHRoaXMub2Zmc2V0WCA+PSBjdXJyZW50WCkge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuXG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgaXNDbGlja0FmdGVyUG9zaXRpb24ocG9zaXRpb24sIGN1cnJlbnRYLCBzaXplcykge1xuICAgIGlmKHBvc2l0aW9uLnggKyB0aGlzLm9mZnNldFggPj0gY3VycmVudFggKyBzaXplc1tcIndpZHRoXCJdICsgdGhpcy5zdHlsZS5zcGFjZUJldHdlZW5Db21wb25lbnRzKSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG5cbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBnZXRMZXR0ZXJDbGlja2VkKHBvc2l0aW9uKSB7XG4gICAgaWYodGhpcy50ZXh0Q2FjaGUpIHtcbiAgICAgIGZvcihsZXQgaSA9IDA7IGkgPCB0aGlzLnRleHQubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgY29uc3QgbGV0dGVyID0gdGhpcy50ZXh0Q2FjaGUubGV0dGVyc1tpXTtcbiAgICAgICAgXG4gICAgICAgIGlmKHRoaXMuaXNDbGlja0N1cnJlbnRQb3NpdGlvbihwb3NpdGlvbiwgTWF0aC5yb3VuZChsZXR0ZXIuY3VycmVudFgpLCBsZXR0ZXIuc2l6ZXMpKSB7XG4gICAgICAgICAgcmV0dXJuIGk7XG4gICAgICAgIH0gZWxzZSBpZihpID49IHRoaXMudGV4dC5sZW5ndGggLSAxICYmIHRoaXMuaXNDbGlja0FmdGVyUG9zaXRpb24ocG9zaXRpb24sIE1hdGgucm91bmQobGV0dGVyLmN1cnJlbnRYKSwgbGV0dGVyLnNpemVzKSkge1xuICAgICAgICAgIHJldHVybiBpICsgMTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIGdldCBjdXJzb3JQb3NpdGlvbigpIHtcbiAgICBpZih0aGlzLnRleHRDYWNoZSkge1xuICAgICAgbGV0IHBvc2l0aW9uID0gdGhpcy5wb3NpdGlvbkVuZCAtIDE7XG5cbiAgICAgIGlmKHRoaXMucG9zaXRpb25FbmQgIT0gdGhpcy5wb3NpdGlvblN0YXJ0ICYmIHRoaXMucG9zaXRpb25FbmQgPT0gdGhpcy5wb3NpdGlvblN0YXJ0Q2xpY2sgJiYgdGhpcy5wb3NpdGlvblN0YXJ0IDwgdGhpcy5wb3NpdGlvblN0YXJ0Q2xpY2spIHtcbiAgICAgICAgcG9zaXRpb24gPSB0aGlzLnBvc2l0aW9uU3RhcnQgLSAxO1xuICAgICAgfVxuICAgICAgXG4gICAgICBpZihwb3NpdGlvbiA8IDApIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICBcImN1cnJlbnRMZXR0ZXJcIjogdGhpcy50ZXh0Q2FjaGUubGV0dGVyc1swXSxcbiAgICAgICAgICBcInhcIjogdGhpcy54ICsgdGhpcy5zdHlsZS5ib3JkZXJTaXplXG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgY29uc3QgY3VycmVudExldHRlciA9IHRoaXMudGV4dENhY2hlLmxldHRlcnNbcG9zaXRpb25dO1xuXG4gICAgICBpZihjdXJyZW50TGV0dGVyKSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgXCJjdXJyZW50TGV0dGVyXCI6IGN1cnJlbnRMZXR0ZXIsXG4gICAgICAgICAgXCJ4XCI6IGN1cnJlbnRMZXR0ZXIuY3VycmVudFhcbiAgICAgICAgfTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBpc0xldHRlclZpc2libGUobGV0dGVySWQpIHtcbiAgICBpZih0aGlzLnRleHRDYWNoZSkge1xuICAgICAgY29uc3QgbGV0dGVyID0gdGhpcy50ZXh0Q2FjaGUubGV0dGVyc1tsZXR0ZXJJZF07XG5cbiAgICAgIGlmKGxldHRlcikge1xuICAgICAgICBjb25zdCB4RHJhdyA9IGxldHRlci5jdXJyZW50WCAtIHRoaXMub2Zmc2V0WDtcbiAgXG4gICAgICAgIGlmKHhEcmF3ID49IHRoaXMueCAtIGxldHRlci5zaXplc1tcIndpZHRoXCJdICYmIHhEcmF3IDw9IHRoaXMueCArIHRoaXMud2lkdGgpIHtcbiAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIGF1dG9TY3JvbGwoKSB7XG4gICAgaWYodGhpcy50ZXh0Q2FjaGUpIHtcbiAgICAgIGNvbnN0IGN1cnNvclBvc2l0aW9uID0gdGhpcy5jdXJzb3JQb3NpdGlvbjtcbiAgICAgIGNvbnN0IGN1cnJlbnRMZXR0ZXJTaXplID0gY3Vyc29yUG9zaXRpb24uY3VycmVudExldHRlciA/IGN1cnNvclBvc2l0aW9uLmN1cnJlbnRMZXR0ZXIuc2l6ZXNbXCJ3aWR0aFwiXSA6IDA7XG4gICAgICBjb25zdCBjdXJzb3JQb3NpdGlvblBvcyA9IGN1cnNvclBvc2l0aW9uLnggKyBjdXJyZW50TGV0dGVyU2l6ZSArIHRoaXMuc3R5bGUuc3BhY2VCZXR3ZWVuQ29tcG9uZW50cztcbiAgICAgIGNvbnN0IGN1cnNvclBvc2l0aW9uTmVnID0gY3Vyc29yUG9zaXRpb24ueCAtIGN1cnJlbnRMZXR0ZXJTaXplIC0gdGhpcy5zdHlsZS5zcGFjZUJldHdlZW5Db21wb25lbnRzO1xuXG4gICAgICBjb25zdCBvZmZzZXRYID0gTWF0aC5tYXgoMCwgTWF0aC5yb3VuZChjdXJzb3JQb3NpdGlvblBvcyAtIHRoaXMueCAtIHRoaXMud2lkdGggKyB0aGlzLnN0eWxlLmJvcmRlclNpemUgKyB0aGlzLnN0eWxlLnNwYWNlQmV0d2VlbkNvbXBvbmVudHMgKiAyKSk7XG4gICAgICBjb25zdCBvZmZzZXRYTmVnID0gTWF0aC5tYXgoMCwgTWF0aC5yb3VuZChjdXJzb3JQb3NpdGlvbk5lZyAtIHRoaXMueCAtIHRoaXMuc3R5bGUuYm9yZGVyU2l6ZSAtIHRoaXMuc3R5bGUuc3BhY2VCZXR3ZWVuQ29tcG9uZW50cyAqIDIpKTtcblxuICAgICAgaWYodGhpcy5vZmZzZXRYIDwgMCkge1xuICAgICAgICB0aGlzLm9mZnNldFggPSAwO1xuICAgICAgfVxuXG4gICAgICBpZihjdXJzb3JQb3NpdGlvblBvcyAtIHRoaXMub2Zmc2V0WCA+PSB0aGlzLnggKyB0aGlzLndpZHRoIC0gdGhpcy5zdHlsZS5ib3JkZXJTaXplKSB7XG4gICAgICAgIHRoaXMub2Zmc2V0WCA9IG9mZnNldFg7XG4gICAgICAgIHJldHVybiBvZmZzZXRYO1xuICAgICAgfSBlbHNlIGlmKGN1cnNvclBvc2l0aW9uTmVnIC0gdGhpcy5vZmZzZXRYIDw9IHRoaXMueCArIHRoaXMuc3R5bGUuYm9yZGVyU2l6ZSkge1xuICAgICAgICB0aGlzLm9mZnNldFggPSBvZmZzZXRYTmVnO1xuICAgICAgICByZXR1cm4gb2Zmc2V0WE5lZztcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBjbGljaygpIHtcbiAgICB0aGlzLmlucHV0LmZvY3VzKCk7XG4gIH1cblxuICBibHVyKCkge1xuICAgIHRoaXMuaW5wdXQuYmx1cigpO1xuICB9XG5cbiAgZ2V0IHBvc2l0aW9uU3RhcnQoKSB7XG4gICAgcmV0dXJuIHRoaXMuI19wb3NpdGlvblN0YXJ0O1xuICB9XG5cbiAgZ2V0IHBvc2l0aW9uU3RhcnRDbGljaygpIHtcbiAgICByZXR1cm4gdGhpcy4jX3Bvc2l0aW9uU3RhcnRDbGljaztcbiAgfVxuXG4gIGdldCBwb3NpdGlvbkVuZCgpIHtcbiAgICByZXR1cm4gdGhpcy4jX3Bvc2l0aW9uRW5kO1xuICB9XG5cbiAgc2V0IHBvc2l0aW9uU3RhcnQocG9zaXRpb24pIHtcbiAgICB0aGlzLmlucHV0LnNlbGVjdGlvblN0YXJ0ID0gcG9zaXRpb247XG4gICAgdGhpcy4jX3Bvc2l0aW9uU3RhcnQgPSBwb3NpdGlvbjtcbiAgfVxuXG4gIHNldCBwb3NpdGlvblN0YXJ0Q2xpY2socG9zaXRpb24pIHtcbiAgICB0aGlzLiNfcG9zaXRpb25TdGFydENsaWNrID0gcG9zaXRpb247XG4gIH1cblxuICBzZXQgcG9zaXRpb25FbmQocG9zaXRpb24pIHtcbiAgICB0aGlzLmlucHV0LnNlbGVjdGlvbkVuZCA9IHBvc2l0aW9uO1xuICAgIHRoaXMuI19wb3NpdGlvbkVuZCA9IHBvc2l0aW9uO1xuICB9XG5cbiAgc2V0U2VsZWN0aW9uUmFuZ2Uoc3RhcnQsIGVuZCwgZGlyZWN0aW9uKSB7XG4gICAgdGhpcy5pbnB1dC5zZXRTZWxlY3Rpb25SYW5nZShzdGFydCwgZW5kLCBkaXJlY3Rpb24pO1xuICAgIHRoaXMucG9zaXRpb25TdGFydCA9IHN0YXJ0O1xuICAgIHRoaXMucG9zaXRpb25FbmQgPSBlbmQ7XG4gIH1cblxuICBnZXQgaGVpZ2h0KCkge1xuICAgIGNvbnN0IGJvcmRlclNpemUgPSB0aGlzLnN0eWxlICYmIHRoaXMuc3R5bGUuYm9yZGVyU2l6ZSA/IHRoaXMuc3R5bGUuYm9yZGVyU2l6ZSA6IDA7XG4gICAgcmV0dXJuIHN1cGVyLmhlaWdodCA/IHN1cGVyLmhlaWdodCA6IHRoaXMuc3R5bGUuZm9udFNpemUgKyBib3JkZXJTaXplICogMjtcbiAgfVxuXG4gIGdldCBkZWZhdWx0U3R5bGUoKSB7XG4gICAgcmV0dXJuIG5ldyBTdHlsZSh7XG4gICAgICBcImZvbnRTaXplXCI6IE1hdGguZmxvb3IoQ29uc3RhbnRzLlNldHRpbmcuRk9OVF9TSVpFIC8gMS4yNSksXG4gICAgICBcImZvbnRGYW1pbHlcIjogQ29uc3RhbnRzLlNldHRpbmcuRk9OVF9GQU1JTFksXG4gICAgICBcImZvbnRDb2xvclwiOiBDb25zdGFudHMuU2V0dGluZy5JTlBVVF9ERUZBVUxUX0ZPTlRfQ09MT1IsXG4gICAgICBcImJhY2tncm91bmRDb2xvclwiOiBDb25zdGFudHMuU2V0dGluZy5JTlBVVF9ERUZBVUxUX0JBQ0tHUk9VTkRfQ09MT1IsXG4gICAgICBcImJvcmRlckNvbG9yXCI6IENvbnN0YW50cy5TZXR0aW5nLklOUFVUX0RFRkFVTFRfQk9SREVSX0NPTE9SLFxuICAgICAgXCJib3JkZXJDb2xvclNlbGVjdGVkXCI6IENvbnN0YW50cy5TZXR0aW5nLklOUFVUX0RFRkFVTFRfQk9SREVSX0NPTE9SX1NFTEVDVEVELFxuICAgICAgXCJzZWxlY3RDb2xvclwiOiBDb25zdGFudHMuU2V0dGluZy5JTlBVVF9ERUZBVUxUX1NFTEVDVF9DT0xPUixcbiAgICAgIFwic3BhY2VCZXR3ZWVuQ29tcG9uZW50c1wiOiAxXG4gICAgfSk7XG4gIH1cbn0iLCIvKlxuICogQ29weXJpZ2h0IChDKSAyMDIwIEVsaWFzdGlrIChlbGlhc3Rpa3NvZnRzLmNvbSlcbiAqXG4gKiBUaGlzIGZpbGUgaXMgcGFydCBvZiBcIkpTR2FtZVRvb2xzXCIuXG4gKlxuICogXCJKU0dhbWVUb29sc1wiIGlzIGZyZWUgc29mdHdhcmU6IHlvdSBjYW4gcmVkaXN0cmlidXRlIGl0IGFuZC9vciBtb2RpZnlcbiAqIGl0IHVuZGVyIHRoZSB0ZXJtcyBvZiB0aGUgR05VIEdlbmVyYWwgUHVibGljIExpY2Vuc2UgYXMgcHVibGlzaGVkIGJ5XG4gKiB0aGUgRnJlZSBTb2Z0d2FyZSBGb3VuZGF0aW9uLCBlaXRoZXIgdmVyc2lvbiAzIG9mIHRoZSBMaWNlbnNlLCBvclxuICogKGF0IHlvdXIgb3B0aW9uKSBhbnkgbGF0ZXIgdmVyc2lvbi5cbiAqXG4gKiBcIkpTR2FtZVRvb2xzXCIgaXMgZGlzdHJpYnV0ZWQgaW4gdGhlIGhvcGUgdGhhdCBpdCB3aWxsIGJlIHVzZWZ1bCxcbiAqIGJ1dCBXSVRIT1VUIEFOWSBXQVJSQU5UWTsgd2l0aG91dCBldmVuIHRoZSBpbXBsaWVkIHdhcnJhbnR5IG9mXG4gKiBNRVJDSEFOVEFCSUxJVFkgb3IgRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UuICBTZWUgdGhlXG4gKiBHTlUgR2VuZXJhbCBQdWJsaWMgTGljZW5zZSBmb3IgbW9yZSBkZXRhaWxzLlxuICpcbiAqIFlvdSBzaG91bGQgaGF2ZSByZWNlaXZlZCBhIGNvcHkgb2YgdGhlIEdOVSBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlXG4gKiBhbG9uZyB3aXRoIFwiSlNHYW1lVG9vbHNcIi4gIElmIG5vdCwgc2VlIDxodHRwOi8vd3d3LmdudS5vcmcvbGljZW5zZXMvPi5cbiAqL1xuaW1wb3J0IENvbnN0YW50cyBmcm9tIFwiLi9Db25zdGFudHNcIjtcbmltcG9ydCBVdGlscyBmcm9tIFwiLi9VdGlsc1wiO1xuaW1wb3J0IENvbXBvbmVudCBmcm9tIFwiLi9Db21wb25lbnRcIjtcbmltcG9ydCBTdHlsZSBmcm9tIFwiLi9TdHlsZVwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBMYWJlbCBleHRlbmRzIENvbXBvbmVudCB7XG4gIHNlbGVjdGFibGUgPSBmYWxzZTtcbiAgI190ZXh0ID0gXCJcIjtcblxuICBjb25zdHJ1Y3Rvcih0ZXh0LCB4LCB5LCBzdHlsZSkge1xuICAgIHN1cGVyKHgsIHksIG51bGwsIG51bGwsIHN0eWxlKTtcbiAgICB0aGlzLnRleHQgPSB0ZXh0O1xuICAgIHRoaXMuc2l6ZXNDYWNoZSA9IG51bGw7XG5cbiAgICBpZighQ29uc3RhbnRzLlNldHRpbmcuRElTQUJMRV9FWFBFUklNRU5UQUxfT1BUSU1JWkFUSU9OUykge1xuICAgICAgdGhpcy51cGRhdGVTaXplcygpO1xuXG4gICAgICB0aGlzLmFkZENoYW5nZUFjdGlvbihjb21wb25lbnRDaGFuZ2VkID0+IHtcbiAgICAgICAgdGhpcy51cGRhdGVTaXplcygpO1xuICAgICAgICBjb21wb25lbnRDaGFuZ2VkICE9IHRoaXMucGFyZW50ICYmIHRoaXMucGFyZW50ICYmIHRoaXMucGFyZW50LnJlYWN0b3IgJiYgdGhpcy5wYXJlbnQucmVhY3Rvci5kaXNwYXRjaEV2ZW50KFwib25DaGFuZ2VcIiwgdGhpcyk7XG4gICAgICB9KTtcbiAgICB9XG4gIH1cblxuICBkcmF3KGNvbnRleHQpIHtcbiAgICBpZih0aGlzLmhpZGRlbikgcmV0dXJuO1xuICAgIHN1cGVyLmRyYXcoY29udGV4dCk7XG4gICAgXG4gICAgY29uc3QgY2FudmFzID0gY29udGV4dC5jYW52YXM7XG4gICAgY29uc3QgY3R4ID0gY2FudmFzLmdldENvbnRleHQoXCIyZFwiKTtcbiAgICBjdHguc2F2ZSgpO1xuXG4gICAgVXRpbHMuZHJhd1RleHQoY3R4LCB0aGlzLnRleHQsIHRoaXMuc3R5bGUuZm9udENvbG9yLCB0aGlzLnN0eWxlLmZvbnRTaXplLCB0aGlzLnN0eWxlLmZvbnRGYW1pbHksIHRoaXMuc3R5bGUuYWxpZ25lbWVudCwgdGhpcy5zdHlsZS52ZXJ0aWNhbEFsaWduZW1lbnQsIHRoaXMueCwgdGhpcy55LCB0aGlzLnN0eWxlLndyYXAsIHRoaXMuc3R5bGUuYm9sZCwgdGhpcy5zdHlsZS51bmRlcmxpbmUsIG51bGwsIHRoaXMucGFyZW50KTtcblxuICAgIGN0eC5yZXN0b3JlKCk7XG4gIH1cblxuICBzZXQgdGV4dCh0ZXh0KSB7XG4gICAgaWYodGV4dCAhPSB0aGlzLiNfdGV4dCkge1xuICAgICAgdGhpcy4jX3RleHQgPSB0ZXh0O1xuICAgICAgdGhpcy5yZWFjdG9yLmRpc3BhdGNoRXZlbnQoXCJvbkNoYW5nZVwiLCB0aGlzKTtcbiAgICB9XG4gIH1cblxuICBnZXQgdGV4dCgpIHtcbiAgICByZXR1cm4gdGhpcy4jX3RleHQ7XG4gIH1cblxuICB1cGRhdGVTaXplcygpIHtcbiAgICBjb25zdCBjdHggPSB0aGlzLmNhbnZhcyA/IHRoaXMuY2FudmFzLmdldENvbnRleHQoXCIyZFwiKSA6IG51bGw7XG4gICAgY29uc3QgcGFyZW50ID0gKHRoaXMuY2FudmFzICYmIHRoaXMuY2FudmFzLnNjZW5lKSB8fCB0aGlzLmNhbnZhcyB8fCAoY3R4ICYmIGN0eC5jYW52YXMpO1xuICAgIFxuICAgIGlmKGN0eCAmJiAoQ29uc3RhbnRzLlNldHRpbmcuRElTQUJMRV9PUFRJTUlaQVRJT05TIHx8ICF0aGlzLnNpemVzQ2FjaGUgfHwgdGhpcy5zaXplc0NhY2hlLmZvbnRTaXplICE9IHRoaXMuc3R5bGUuZm9udFNpemUgfHwgdGhpcy5zaXplc0NhY2hlLmZvbnRGYW1pbHkgIT0gdGhpcy5zdHlsZS5mb250RmFtaWx5IHx8IHRoaXMuc2l6ZXNDYWNoZS53cmFwICE9IHRoaXMuc3R5bGUud3JhcCB8fCB0aGlzLnRleHQgIT0gdGhpcy5zaXplc0NhY2hlLnRleHQgfHwgKHBhcmVudCAmJiBwYXJlbnQud2lkdGggIT0gdGhpcy5zaXplc0NhY2hlLnBhcmVudFdpZHRoKSB8fCB0aGlzLnNpemVzQ2FjaGUudmFsdWUgPT0gbnVsbCkpIHtcbiAgICAgIGNvbnN0IHNpemVzID0gVXRpbHMud3JhcFRleHRMaW5lcyhjdHgsIHRoaXMudGV4dCwgbnVsbCwgdGhpcy5zdHlsZS5mb250U2l6ZSwgdGhpcy5zdHlsZS5mb250RmFtaWx5LCAhdGhpcy5zdHlsZS53cmFwKTtcbiAgICAgIFxuICAgICAgaWYocGFyZW50KSB7XG4gICAgICAgIHRoaXMuc2l6ZXNDYWNoZSA9IHsgXCJmb250U2l6ZVwiOiB0aGlzLnN0eWxlLmZvbnRTaXplLCBcImZvbnRGYW1pbHlcIjogdGhpcy5zdHlsZS5mb250RmFtaWx5LCBcIndyYXBcIjogdGhpcy5zdHlsZS53cmFwLCBcInRleHRcIjogdGhpcy50ZXh0LCBcInBhcmVudFdpZHRoXCI6IHBhcmVudC53aWR0aCwgXCJ2YWx1ZVwiOiBzaXplcyB9O1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiB0aGlzLnNpemVzQ2FjaGUgJiYgdGhpcy5zaXplc0NhY2hlLnZhbHVlO1xuICB9XG5cbiAgZ2V0IHNpemVzKCkge1xuICAgIGlmKENvbnN0YW50cy5TZXR0aW5nLkRJU0FCTEVfRVhQRVJJTUVOVEFMX09QVElNSVpBVElPTlMpIHRoaXMudXBkYXRlU2l6ZXMoKTtcbiAgICByZXR1cm4gdGhpcy5zaXplc0NhY2hlICYmIHRoaXMuc2l6ZXNDYWNoZS52YWx1ZTtcbiAgfVxuXG4gIGdldCBoZWlnaHQoKSB7XG4gICAgY29uc3Qgc2l6ZXMgPSB0aGlzLnNpemVzO1xuICAgIHJldHVybiBzaXplcyAmJiBzaXplc1tcImhlaWdodFwiXTtcbiAgfVxuXG4gIGdldCB3aWR0aCgpIHtcbiAgICBjb25zdCBzaXplcyA9IHRoaXMuc2l6ZXM7XG4gICAgcmV0dXJuIHNpemVzICYmIHNpemVzW1wid2lkdGhcIl07XG4gIH1cblxuICBnZXQgZGVmYXVsdFN0eWxlKCkge1xuICAgIHJldHVybiBuZXcgU3R5bGUoe1xuICAgICAgXCJmb250Q29sb3JcIjogQ29uc3RhbnRzLlNldHRpbmcuTEFCRUxfREVGQVVMVF9GT05UX0NPTE9SLFxuICAgICAgXCJ3cmFwXCI6IHRydWUsXG4gICAgICBcImJvbGRcIjogZmFsc2UsXG4gICAgICBcInVuZGVybGluZVwiOiBmYWxzZVxuICAgIH0pO1xuICB9XG59IiwiLypcbiAqIENvcHlyaWdodCAoQykgMjAyMCBFbGlhc3RpayAoZWxpYXN0aWtzb2Z0cy5jb20pXG4gKlxuICogVGhpcyBmaWxlIGlzIHBhcnQgb2YgXCJKU0dhbWVUb29sc1wiLlxuICpcbiAqIFwiSlNHYW1lVG9vbHNcIiBpcyBmcmVlIHNvZnR3YXJlOiB5b3UgY2FuIHJlZGlzdHJpYnV0ZSBpdCBhbmQvb3IgbW9kaWZ5XG4gKiBpdCB1bmRlciB0aGUgdGVybXMgb2YgdGhlIEdOVSBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlIGFzIHB1Ymxpc2hlZCBieVxuICogdGhlIEZyZWUgU29mdHdhcmUgRm91bmRhdGlvbiwgZWl0aGVyIHZlcnNpb24gMyBvZiB0aGUgTGljZW5zZSwgb3JcbiAqIChhdCB5b3VyIG9wdGlvbikgYW55IGxhdGVyIHZlcnNpb24uXG4gKlxuICogXCJKU0dhbWVUb29sc1wiIGlzIGRpc3RyaWJ1dGVkIGluIHRoZSBob3BlIHRoYXQgaXQgd2lsbCBiZSB1c2VmdWwsXG4gKiBidXQgV0lUSE9VVCBBTlkgV0FSUkFOVFk7IHdpdGhvdXQgZXZlbiB0aGUgaW1wbGllZCB3YXJyYW50eSBvZlxuICogTUVSQ0hBTlRBQklMSVRZIG9yIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFLiAgU2VlIHRoZVxuICogR05VIEdlbmVyYWwgUHVibGljIExpY2Vuc2UgZm9yIG1vcmUgZGV0YWlscy5cbiAqXG4gKiBZb3Ugc2hvdWxkIGhhdmUgcmVjZWl2ZWQgYSBjb3B5IG9mIHRoZSBHTlUgR2VuZXJhbCBQdWJsaWMgTGljZW5zZVxuICogYWxvbmcgd2l0aCBcIkpTR2FtZVRvb2xzXCIuICBJZiBub3QsIHNlZSA8aHR0cDovL3d3dy5nbnUub3JnL2xpY2Vuc2VzLz4uXG4gKi9cbmltcG9ydCBDb25zdGFudHMgZnJvbSBcIi4vQ29uc3RhbnRzXCI7XG5pbXBvcnQgTGFiZWwgZnJvbSBcIi4vTGFiZWxcIjtcbmltcG9ydCBTdHlsZSBmcm9tIFwiLi9TdHlsZVwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBMaW5rIGV4dGVuZHMgTGFiZWwge1xuICBzZWxlY3RhYmxlID0gdHJ1ZTtcblxuICBjb25zdHJ1Y3Rvcih0ZXh0LCB4LCB5LCBzdHlsZSkge1xuICAgIHN1cGVyKHRleHQsIHgsIHksIHN0eWxlKTtcblxuICAgIHRoaXMuaW5pdGlhbENvbG9yID0gdGhpcy5zdHlsZS5mb250Q29sb3I7XG4gICAgdGhpcy5pbml0aWFsVW5kZXJsaW5lID0gdGhpcy5zdHlsZS51bmRlcmxpbmU7XG4gIH1cblxuICBkcmF3KGNvbnRleHQpIHtcbiAgICBpZih0aGlzLmhpZGRlbikgcmV0dXJuO1xuICAgIHN1cGVyLmRyYXcoY29udGV4dCk7XG5cbiAgICBjb25zdCBjYW52YXMgPSBjb250ZXh0LmNhbnZhcztcblxuICAgIGlmKHRoaXMuY2xpY2tlZCkge1xuICAgICAgdGhpcy5zdHlsZS5zZXQoXCJ1bmRlcmxpbmVcIiwgZmFsc2UpO1xuICAgICAgdGhpcy5zdHlsZS5zZXQoXCJmb250Q29sb3JcIiwgdGhpcy5zdHlsZS5mb250Q29sb3JEb3duKTtcbiAgICAgIGNhbnZhcy5zdHlsZS5jdXJzb3IgPSBcInBvaW50ZXJcIjtcbiAgICB9IGVsc2UgaWYodGhpcy5ob3ZlcmVkIHx8IHRoaXMuc2VsZWN0ZWQpIHtcbiAgICAgIGNvbnNvbGUubG9nKFwib2tcIiwgdGhpcyk7XG4gICAgICB0aGlzLnN0eWxlLnNldChcInVuZGVybGluZVwiLCBmYWxzZSk7XG4gICAgICB0aGlzLnN0eWxlLnNldChcImZvbnRDb2xvclwiLCB0aGlzLnN0eWxlLmZvbnRDb2xvckhvdmVyKTtcbiAgICAgIGlmKHRoaXMuaG92ZXJlZCkgY2FudmFzLnN0eWxlLmN1cnNvciA9IFwicG9pbnRlclwiO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnN0eWxlLnNldChcInVuZGVybGluZVwiLCB0aGlzLmluaXRpYWxVbmRlcmxpbmUpO1xuICAgICAgdGhpcy5zdHlsZS5zZXQoXCJmb250Q29sb3JcIiwgdGhpcy5pbml0aWFsQ29sb3IpO1xuICAgIH1cblxuICAgIHRoaXMuaW5pdCA9IHRydWU7XG4gIH1cblxuICBnZXQgZGVmYXVsdFN0eWxlKCkge1xuICAgIHJldHVybiBuZXcgU3R5bGUoe1xuICAgICAgXCJmb250U2l6ZVwiOiBDb25zdGFudHMuU2V0dGluZy5GT05UX1NJWkUsXG4gICAgICBcImZvbnRGYW1pbHlcIjogQ29uc3RhbnRzLlNldHRpbmcuRk9OVF9GQU1JTFksXG4gICAgICBcImZvbnRDb2xvclwiOiBDb25zdGFudHMuU2V0dGluZy5MSU5LX0RFRkFVTFRfQ09MT1IsXG4gICAgICBcImZvbnRDb2xvckhvdmVyXCI6IENvbnN0YW50cy5TZXR0aW5nLkxJTktfREVGQVVMVF9IT1ZFUl9DT0xPUixcbiAgICAgIFwiZm9udENvbG9yRG93blwiOiBDb25zdGFudHMuU2V0dGluZy5MSU5LX0RFRkFVTFRfQ0xJQ0tfQ09MT1IsXG4gICAgICBcIndyYXBcIjogdHJ1ZSxcbiAgICAgIFwiYm9sZFwiOiBmYWxzZSxcbiAgICAgIFwidW5kZXJsaW5lXCI6IHRydWVcbiAgICB9KTtcbiAgfVxufSIsIi8qXG4gKiBDb3B5cmlnaHQgKEMpIDIwMjAgRWxpYXN0aWsgKGVsaWFzdGlrc29mdHMuY29tKVxuICpcbiAqIFRoaXMgZmlsZSBpcyBwYXJ0IG9mIFwiSlNHYW1lVG9vbHNcIi5cbiAqXG4gKiBcIkpTR2FtZVRvb2xzXCIgaXMgZnJlZSBzb2Z0d2FyZTogeW91IGNhbiByZWRpc3RyaWJ1dGUgaXQgYW5kL29yIG1vZGlmeVxuICogaXQgdW5kZXIgdGhlIHRlcm1zIG9mIHRoZSBHTlUgR2VuZXJhbCBQdWJsaWMgTGljZW5zZSBhcyBwdWJsaXNoZWQgYnlcbiAqIHRoZSBGcmVlIFNvZnR3YXJlIEZvdW5kYXRpb24sIGVpdGhlciB2ZXJzaW9uIDMgb2YgdGhlIExpY2Vuc2UsIG9yXG4gKiAoYXQgeW91ciBvcHRpb24pIGFueSBsYXRlciB2ZXJzaW9uLlxuICpcbiAqIFwiSlNHYW1lVG9vbHNcIiBpcyBkaXN0cmlidXRlZCBpbiB0aGUgaG9wZSB0aGF0IGl0IHdpbGwgYmUgdXNlZnVsLFxuICogYnV0IFdJVEhPVVQgQU5ZIFdBUlJBTlRZOyB3aXRob3V0IGV2ZW4gdGhlIGltcGxpZWQgd2FycmFudHkgb2ZcbiAqIE1FUkNIQU5UQUJJTElUWSBvciBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRS4gIFNlZSB0aGVcbiAqIEdOVSBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlIGZvciBtb3JlIGRldGFpbHMuXG4gKlxuICogWW91IHNob3VsZCBoYXZlIHJlY2VpdmVkIGEgY29weSBvZiB0aGUgR05VIEdlbmVyYWwgUHVibGljIExpY2Vuc2VcbiAqIGFsb25nIHdpdGggXCJKU0dhbWVUb29sc1wiLiAgSWYgbm90LCBzZWUgPGh0dHA6Ly93d3cuZ251Lm9yZy9saWNlbnNlcy8+LlxuICovXG5pbXBvcnQgQ29uc3RhbnRzIGZyb20gXCIuL0NvbnN0YW50c1wiO1xuaW1wb3J0IFV0aWxzIGZyb20gXCIuL1V0aWxzXCI7XG5pbXBvcnQgQ29tcG9uZW50IGZyb20gXCIuL0NvbXBvbmVudFwiO1xuaW1wb3J0IENvbCBmcm9tIFwiLi9Db2xcIjtcbmltcG9ydCBTdHlsZSBmcm9tIFwiLi9TdHlsZVwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBNZW51IGV4dGVuZHMgQ29sIHtcbiAgc2VsZWN0YWJsZSA9IGZhbHNlO1xuXG4gIGNvbnN0cnVjdG9yKHN0eWxlLCAuLi5jb21wb25lbnRzKSB7XG4gICAgc3VwZXIoMCwgMCwgbnVsbCwgbnVsbCwgc3R5bGUsIC4uLmNvbXBvbmVudHMpO1xuXG4gICAgdGhpcy5sYXN0S2V5ID0gdGhpcy5sYXN0S2V5ID09IHVuZGVmaW5lZCA/IC0xIDogdGhpcy5sYXN0S2V5O1xuICAgIHRoaXMuc2VsZWN0ZWRDb21wb25lbnQgPSB0aGlzLnNlbGVjdGVkQ29tcG9uZW50ID09IHVuZGVmaW5lZCA/IDAgOiB0aGlzLnNlbGVjdGVkQ29tcG9uZW50O1xuXG4gICAgdGhpcy5kaXNhYmxlKCk7XG4gIH1cblxuICBkcmF3KGNvbnRleHQpIHtcbiAgICBpZih0aGlzLmhpZGRlbikgcmV0dXJuO1xuICAgIGNvbnN0IGNhbnZhcyA9IGNvbnRleHQuY2FudmFzO1xuICAgIGNvbnN0IGN0eCA9IGNhbnZhcy5nZXRDb250ZXh0KFwiMmRcIik7XG5cbiAgICBpZih0aGlzLnN0eWxlLmJsdXJCYWNrZ3JvdW5kKSB7XG4gICAgICB0aGlzLmRyYXdCbHVyKGN0eCk7XG4gICAgfVxuXG4gICAgY3R4LnNhdmUoKTtcblxuICAgIHRoaXMuZHJhd0NvbXBvbmVudHMoY3R4KTtcbiAgICBcbiAgICBpZighdGhpcy5pbml0KSB7XG4gICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwia2V5ZG93blwiLCBldmVudCA9PiB7XG4gICAgICAgIGlmKCF0aGlzLmRpc2FibGVkKSB7XG4gICAgICAgICAgdGhpcy5sYXN0S2V5ID0gZXZlbnQua2V5Q29kZTtcbiAgICAgICAgICBpZih0aGlzLmxhc3RLZXkgPT0gQ29uc3RhbnRzLktleS5VUCB8fCB0aGlzLmxhc3RLZXkgPT0gQ29uc3RhbnRzLktleS5CT1RUT00pIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuXG4gICAgICB0aGlzLmluaXQgPSB0cnVlO1xuICAgIH1cblxuICAgIGxldCBrZXlBY3Rpb24gPSBmYWxzZTtcbiAgXG4gICAgaWYodGhpcy5jb21wb25lbnRzICE9IG51bGwpIHtcbiAgICAgIGlmKHRoaXMubGFzdEtleSA9PSBDb25zdGFudHMuS2V5LlVQKSB7XG4gICAgICAgIHRoaXMuc2VsZWN0KHRoaXMuc2VsZWN0ZWRDb21wb25lbnQgLSAxKTtcbiAgICAgICAga2V5QWN0aW9uID0gdHJ1ZTtcbiAgICAgIH0gZWxzZSBpZih0aGlzLmxhc3RLZXkgPT0gQ29uc3RhbnRzLktleS5CT1RUT00pIHtcbiAgICAgICAgdGhpcy5zZWxlY3QodGhpcy5zZWxlY3RlZENvbXBvbmVudCArIDEpO1xuICAgICAgICBrZXlBY3Rpb24gPSB0cnVlO1xuICAgICAgfSBlbHNlIGlmKHRoaXMubGFzdEtleSA9PSBDb25zdGFudHMuS2V5LkVDSEFQKSB7XG4gICAgICAgIHRoaXMuZGlzYWJsZSgpO1xuICAgICAgICBrZXlBY3Rpb24gPSB0cnVlO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5jb21wb25lbnRzLmZvckVhY2goKGNvbXBvbmVudCwgaSkgPT4ge1xuICAgICAgICAgIGlmKGNvbXBvbmVudC5zZWxlY3RlZCkgdGhpcy5zZWxlY3QoaSk7XG4gICAgICAgIH0pO1xuICAgICAgfVxuXG4gICAgICB0aGlzLmNvbXBvbmVudHMuZm9yRWFjaCgoY29tcG9uZW50LCBpKSA9PiB7XG4gICAgICAgIGlmKGNvbXBvbmVudCBpbnN0YW5jZW9mIENvbXBvbmVudCkge1xuICAgICAgICAgIGlmKGtleUFjdGlvbikge1xuICAgICAgICAgICAgaWYodGhpcy5zZWxlY3RlZENvbXBvbmVudCA9PSBpKSB7XG4gICAgICAgICAgICAgIGlmKGNvbXBvbmVudC5zZWxlY3RhYmxlKSB7XG4gICAgICAgICAgICAgICAgY29tcG9uZW50LnNlbGVjdGVkID0gdHJ1ZTtcbiAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgIGlmKCF0aGlzLmlzQ29tcG9uZW50VmlzaWJsZShjb21wb25lbnQpKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgY29tcG9uZW50SGVpZ2h0ID0gY29tcG9uZW50LmhlaWdodDtcbiAgICAgICAgICAgICAgICBjb25zdCBkZWx0YVkgPSAodGhpcy5tYXhIZWlnaHQgLSB0aGlzLm9mZnNldFNjcm9sbFkpIC0gKGNvbXBvbmVudC55ICsgY29tcG9uZW50SGVpZ2h0KTtcbiAgICAgICAgICAgICAgICB0aGlzLm9mZnNldFNjcm9sbFkgPSAtZGVsdGFZO1xuXG4gICAgICAgICAgICAgICAgdGhpcy5jb250cm9sU2Nyb2xsaW5nKG51bGwsIC1kZWx0YVkpO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICBjb21wb25lbnQuc2VsZWN0ZWQgPSBmYWxzZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgXG4gICAgICAgICAgaWYodGhpcy5zZWxlY3RlZENvbXBvbmVudCA9PSBpICYmIHRoaXMubGFzdEtleSA9PSBDb25zdGFudHMuS2V5LkVOVEVSICYmIGNvbXBvbmVudC5yZWFjdG9yICYmICFjb21wb25lbnQuZGlzYWJsZWQpIHtcbiAgICAgICAgICAgIHRoaXMubGFzdEtleSA9IC0xO1xuICAgICAgICAgICAgdGhpcy5zZWxlY3RlZENvbXBvbmVudCA9IDA7XG4gICAgICAgICAgICBjb21wb25lbnQucmVhY3Rvci5kaXNwYXRjaEV2ZW50KFwib25DbGlja1wiKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH1cbiAgICBcbiAgICBjdHgucmVzdG9yZSgpO1xuICAgIHRoaXMubGFzdEtleSA9IC0xO1xuICB9XG5cbiAgZHJhd0NvbXBvbmVudHMoY3R4KSB7XG4gICAgc3VwZXIuZHJhdyhjdHgpO1xuICB9XG5cbiAgZHJhd0JsdXIoY3R4KSB7XG4gICAgVXRpbHMuYmx1ckNhbnZhcyhjdHgsIDUpO1xuICB9XG5cbiAgZHJhd0JhY2tncm91bmQoY3R4KSB7XG4gICAgY3R4LmZpbGxTdHlsZSA9IHRoaXMuc3R5bGUuYmFja2dyb3VuZENvbG9yO1xuICAgIGN0eC5maWxsUmVjdCh0aGlzLnBhcmVudCA/IHRoaXMucGFyZW50LnggOiAwLCB0aGlzLnBhcmVudCA/IHRoaXMucGFyZW50LnkgOiAwLCB0aGlzLm1heFdpZHRoLCB0aGlzLm1heEhlaWdodCk7XG4gIH1cblxuICBkaXNhYmxlKCkge1xuICAgIHN1cGVyLmRpc2FibGUoKTtcbiAgICB0aGlzLmNvbXBvbmVudHMuZm9yRWFjaChjb21wb25lbnQgPT4gY29tcG9uZW50ICYmIGNvbXBvbmVudC5kaXNhYmxlICYmIGNvbXBvbmVudC5kaXNhYmxlKCkpO1xuICB9XG5cbiAgZW5hYmxlKCkge1xuICAgIHN1cGVyLmVuYWJsZSgpO1xuICAgIHRoaXMuY29tcG9uZW50cy5mb3JFYWNoKGNvbXBvbmVudCA9PiBjb21wb25lbnQgJiYgY29tcG9uZW50LmVuYWJsZSAmJiBjb21wb25lbnQuZW5hYmxlKCkpO1xuICB9XG5cbiAgc2VsZWN0KGluZGV4KSB7XG4gICAgdGhpcy5zZWxlY3RlZENvbXBvbmVudCA9IGluZGV4O1xuXG4gICAgY29uc3Qgc2VsZWN0YWJsZUNvbXBvbmVudHMgPSB0aGlzLmNvbXBvbmVudHMuZmlsdGVyKGNvbXBvbmVudCA9PiBjb21wb25lbnQuc2VsZWN0YWJsZSk7XG4gICAgaWYoc2VsZWN0YWJsZUNvbXBvbmVudHMubGVuZ3RoIDw9IDApIHJldHVybjtcblxuICAgIGlmKHRoaXMuc2VsZWN0ZWRDb21wb25lbnQgPj0gdGhpcy5jb21wb25lbnRzLmxlbmd0aCkge1xuICAgICAgdGhpcy5zZWxlY3RlZENvbXBvbmVudCA9IDA7XG4gICAgfSBlbHNlIGlmKHRoaXMuc2VsZWN0ZWRDb21wb25lbnQgPCAwKSB7XG4gICAgICB0aGlzLnNlbGVjdGVkQ29tcG9uZW50ID0gdGhpcy5jb21wb25lbnRzLmxlbmd0aCAtIDE7XG4gICAgfVxuXG4gICAgaWYodGhpcy5jb21wb25lbnRzW3RoaXMuc2VsZWN0ZWRDb21wb25lbnRdICYmICF0aGlzLmNvbXBvbmVudHNbdGhpcy5zZWxlY3RlZENvbXBvbmVudF0uc2VsZWN0YWJsZSkge1xuICAgICAgaWYodGhpcy5sYXN0S2V5ID09IENvbnN0YW50cy5LZXkuVVApIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuc2VsZWN0KHRoaXMuc2VsZWN0ZWRDb21wb25lbnQgLSAxKTtcbiAgICAgIH0gZWxzZSBpZih0aGlzLmxhc3RLZXkgPT0gQ29uc3RhbnRzLktleS5CT1RUT00pIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuc2VsZWN0KHRoaXMuc2VsZWN0ZWRDb21wb25lbnQgKyAxKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBnZXQgc2Nyb2xsQXJlYVNpemVYKCkge1xuICAgIHJldHVybiB0aGlzLmlubmVyV2lkdGggLSB0aGlzLm1heFdpZHRoO1xuICB9XG5cbiAgZ2V0IHNjcm9sbEFyZWFTaXplWSgpIHtcbiAgICByZXR1cm4gdGhpcy5pbm5lckhlaWdodCAtIHRoaXMubWF4SGVpZ2h0O1xuICB9XG5cbiAgZ2V0IG1heEhlaWdodCgpIHtcbiAgICByZXR1cm4gc3VwZXIubWF4SGVpZ2h0IHx8ICh0aGlzLmNhbnZhcyAmJiB0aGlzLmNhbnZhcy5zY2VuZSAmJiB0aGlzLmNhbnZhcy5zY2VuZS5oZWlnaHQpO1xuICB9XG5cbiAgZ2V0IG1heFdpZHRoKCkge1xuICAgIHJldHVybiAodGhpcy5jYW52YXMgJiYgdGhpcy5jYW52YXMuc2NlbmUgJiYgdGhpcy5jYW52YXMuc2NlbmUud2lkdGgpO1xuICB9XG5cbiAgZ2V0IG1pbldpZHRoKCkge1xuICAgIHJldHVybiB0aGlzLnBhcmVudCA/IHRoaXMucGFyZW50LndpZHRoIDogMDtcbiAgfVxuXG4gIGdldCBkZWZhdWx0U3R5bGUoKSB7XG4gICAgcmV0dXJuIG5ldyBTdHlsZSh7XG4gICAgICBcImJsdXJCYWNrZ3JvdW5kXCI6IENvbnN0YW50cy5TZXR0aW5nLk1FTlVfREVGQVVMVF9CTFVSX0JBQ0tHUk9VTkQsXG4gICAgICBcImJhY2tncm91bmRDb2xvclwiOiBDb25zdGFudHMuU2V0dGluZy5NRU5VX0RFRkFVTFRfQkFDS0dST1VORCxcbiAgICAgIFwidmVydGljYWxBbGlnbmVtZW50XCI6IENvbnN0YW50cy5WZXJ0aWNhbEFsaWduZW1lbnQuQ0VOVEVSLFxuICAgICAgXCJzY3JvbGxYRGlzYWJsZWRcIjogdHJ1ZVxuICAgIH0pO1xuICB9XG5cbiAgY29tcGFyZVRvQ29tcG9uZW50KG90aGVyQ29tcG9uZW50KSB7XG4gICAgcmV0dXJuIG90aGVyQ29tcG9uZW50LmNvbXBhcmVUb01lbnUodGhpcyk7XG4gIH1cblxuICBjb21wYXJlVG9NZW51KG90aGVyQ29tcG9uZW50KSB7XG4gICAgcmV0dXJuIDA7XG4gIH1cblxuICBjb21wYXJlVG9Ub29sdGlwKG90aGVyQ29tcG9uZW50KSB7XG4gICAgcmV0dXJuIC0xO1xuICB9XG5cbiAgY29tcGFyZVRvTm90aWZpY2F0aW9uKG90aGVyQ29tcG9uZW50KSB7XG4gICAgcmV0dXJuIDE7XG4gIH1cblxuICBnZXQgaGlkZGVuKCkge1xuICAgIHJldHVybiBzdXBlci5oaWRkZW4gfHwgdGhpcy5kaXNhYmxlZDtcbiAgfVxuXG4gIHNldCBoaWRkZW4oaGlkZGVuKSB7XG4gICAgc3VwZXIuaGlkZGVuID0gaGlkZGVuO1xuICAgIHRoaXMuZGlzYWJsZWQgPSBoaWRkZW47XG4gIH1cblxuICBpc0luc2lkZShwb3MpIHtcbiAgICByZXR1cm4gIXRoaXMuaGlkZGVuO1xuICB9XG59IiwiLypcbiAqIENvcHlyaWdodCAoQykgMjAyMCBFbGlhc3RpayAoZWxpYXN0aWtzb2Z0cy5jb20pXG4gKlxuICogVGhpcyBmaWxlIGlzIHBhcnQgb2YgXCJKU0dhbWVUb29sc1wiLlxuICpcbiAqIFwiSlNHYW1lVG9vbHNcIiBpcyBmcmVlIHNvZnR3YXJlOiB5b3UgY2FuIHJlZGlzdHJpYnV0ZSBpdCBhbmQvb3IgbW9kaWZ5XG4gKiBpdCB1bmRlciB0aGUgdGVybXMgb2YgdGhlIEdOVSBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlIGFzIHB1Ymxpc2hlZCBieVxuICogdGhlIEZyZWUgU29mdHdhcmUgRm91bmRhdGlvbiwgZWl0aGVyIHZlcnNpb24gMyBvZiB0aGUgTGljZW5zZSwgb3JcbiAqIChhdCB5b3VyIG9wdGlvbikgYW55IGxhdGVyIHZlcnNpb24uXG4gKlxuICogXCJKU0dhbWVUb29sc1wiIGlzIGRpc3RyaWJ1dGVkIGluIHRoZSBob3BlIHRoYXQgaXQgd2lsbCBiZSB1c2VmdWwsXG4gKiBidXQgV0lUSE9VVCBBTlkgV0FSUkFOVFk7IHdpdGhvdXQgZXZlbiB0aGUgaW1wbGllZCB3YXJyYW50eSBvZlxuICogTUVSQ0hBTlRBQklMSVRZIG9yIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFLiAgU2VlIHRoZVxuICogR05VIEdlbmVyYWwgUHVibGljIExpY2Vuc2UgZm9yIG1vcmUgZGV0YWlscy5cbiAqXG4gKiBZb3Ugc2hvdWxkIGhhdmUgcmVjZWl2ZWQgYSBjb3B5IG9mIHRoZSBHTlUgR2VuZXJhbCBQdWJsaWMgTGljZW5zZVxuICogYWxvbmcgd2l0aCBcIkpTR2FtZVRvb2xzXCIuICBJZiBub3QsIHNlZSA8aHR0cDovL3d3dy5nbnUub3JnL2xpY2Vuc2VzLz4uXG4gKi9cbmltcG9ydCBDb25zdGFudHMgZnJvbSBcIi4vQ29uc3RhbnRzXCI7XG5pbXBvcnQgQ29sIGZyb20gXCIuL0NvbFwiO1xuaW1wb3J0IEJ1dHRvbiBmcm9tIFwiLi9CdXR0b25cIjtcbmltcG9ydCBDcm9zcyBmcm9tIFwiLi9Dcm9zc1wiO1xuaW1wb3J0IFN0eWxlIGZyb20gXCIuL1N0eWxlXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE5vdGlmaWNhdGlvbk1lc3NhZ2UgZXh0ZW5kcyBDb2wge1xuICBzZWxlY3RhYmxlID0gZmFsc2U7XG5cbiAgY29uc3RydWN0b3Ioc3R5bGUsIGRlbGF5QmVmb3JlQ2xvc2luZywgZWFzaW5nRnVuY3Rpb24sIC4uLmNvbXBvbmVudHMpIHtcbiAgICBzdXBlcigwLCAwLCBudWxsLCBudWxsLCBzdHlsZSwgLi4uY29tcG9uZW50cyk7XG5cbiAgICB0aGlzLmRlbGF5QmVmb3JlQ2xvc2luZyA9IGRlbGF5QmVmb3JlQ2xvc2luZyA9PSB1bmRlZmluZWQgPyA1IDogZGVsYXlCZWZvcmVDbG9zaW5nOyAvLyBzZWNvbmRcbiAgICB0aGlzLnRpbWVMYXN0RnJhbWUgPSAwO1xuICAgIHRoaXMuYW5pbWF0aW9uVGltZSA9IDA7XG4gICAgdGhpcy5jbG9zZWQgPSB0cnVlO1xuICAgIHRoaXMuY2xvc2luZyA9IGZhbHNlO1xuICAgIHRoaXMuZWFzaW5nRnVuY3Rpb24gPSBlYXNpbmdGdW5jdGlvbjtcblxuICAgIHRoaXMuY2xvc2VCdXR0b24gPSBuZXcgQnV0dG9uKG51bGwsIG51bGwsIG51bGwsIG51bGwsIG5ldyBTdHlsZSh7XCJhbGlnbmVtZW50XCI6IENvbnN0YW50cy5BbGlnbmVtZW50LlJJR0hULCBcInZlcnRpY2FsQWxpZ25lbWVudFwiOiBDb25zdGFudHMuVmVydGljYWxBbGlnbmVtZW50LlRPUCwgXCJwYWRkaW5nXCI6IDEwIH0pLCBuZXcgQ3Jvc3MobnVsbCwgbnVsbCwgMTAsIDEwKSk7XG4gICAgdGhpcy5hZGQodGhpcy5jbG9zZUJ1dHRvbik7XG4gIH1cbiAgXG4gIGRyYXcoY29udGV4dCkge1xuICAgIGlmKHRoaXMuaGlkZGVuKSByZXR1cm47XG4gICAgdGhpcy5jbG9zZUJ1dHRvbi5jYW52YXMgPSB0aGlzLmNhbnZhcztcblxuICAgIGNvbnN0IGNhbnZhcyA9IGNvbnRleHQuY2FudmFzO1xuICAgIGNvbnN0IGN0eCA9IGNhbnZhcy5nZXRDb250ZXh0KFwiMmRcIik7XG5cbiAgICBjdHguc2F2ZSgpO1xuXG4gICAgaWYoIXRoaXMuaW5pdCkge1xuICAgICAgdGhpcy50aW1lTGFzdEZyYW1lID0gcGVyZm9ybWFuY2Uubm93KCk7XG4gICAgfVxuICAgIFxuICAgIGlmKHRoaXMuY2xvc2VCdXR0b24gIT0gbnVsbCkge1xuICAgICAgdGhpcy5jbG9zZUJ1dHRvbi5zZXRDbGlja0FjdGlvbigoKSA9PiB7XG4gICAgICAgIHRoaXMuY2xvc2UoKTtcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGNvbnN0IG9mZnNldFRpbWUgPSBwZXJmb3JtYW5jZS5ub3coKSAtIHRoaXMudGltZUxhc3RGcmFtZTtcbiAgICB0aGlzLnRpbWVMYXN0RnJhbWUgPSBwZXJmb3JtYW5jZS5ub3coKTtcblxuICAgIGlmKHRoaXMuYW5pbWF0aW9uVGltZSA+PSB0aGlzLmRlbGF5QmVmb3JlQ2xvc2luZyAqIDEwMDAgJiYgIXRoaXMuY2xvc2luZyAmJiAhdGhpcy5jbG9zZWQpIHtcbiAgICAgIHRoaXMuY2xvc2UoKTtcbiAgICB9XG5cbiAgICBpZighdGhpcy5jbG9zaW5nKSB7XG4gICAgICB0aGlzLmFuaW1hdGlvblRpbWUgKz0gb2Zmc2V0VGltZTtcbiAgICB9IGVsc2Uge1xuICAgICAgaWYodGhpcy5zdHlsZS5kaXNhYmxlQW5pbWF0aW9uKSB7XG4gICAgICAgIHRoaXMuYW5pbWF0aW9uVGltZSA9IC0xO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5hbmltYXRpb25UaW1lIC09IG9mZnNldFRpbWU7XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYodGhpcy5hbmltYXRpb25UaW1lIDwgMCkge1xuICAgICAgdGhpcy5jbG9zZWQgPSB0cnVlO1xuICAgICAgdGhpcy5jbG9zaW5nID0gZmFsc2U7XG4gICAgfVxuXG4gICAgaWYoIXRoaXMuY2xvc2VkKSB7XG4gICAgICB0aGlzLmRyYXdDb21wb25lbnRzKGN0eCk7XG5cbiAgICAgIGlmKHRoaXMuY2xvc2VCdXR0b24gIT0gbnVsbCkge1xuICAgICAgICB0aGlzLmNsb3NlQnV0dG9uLnkgPSB0aGlzLnkgKyB0aGlzLnN0eWxlLnBhZGRpbmcgLyAyO1xuICAgICAgICB0aGlzLmNsb3NlQnV0dG9uLmRyYXcoY3R4KTtcbiAgICAgIH1cblxuICAgICAgdGhpcy5lbmFibGVDbG9zZUJ1dHRvbigpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmRpc2FibGVDbG9zZUJ1dHRvbigpO1xuICAgIH1cblxuICAgIGN0eC5yZXN0b3JlKCk7XG5cbiAgICB0aGlzLmluaXQgPSB0cnVlO1xuICB9XG4gIFxuICBnZXQgb2Zmc2V0WSgpIHtcbiAgICBsZXQgb2Zmc2V0WSA9IDE7XG5cbiAgICBpZighdGhpcy5zdHlsZS5kaXNhYmxlQW5pbWF0aW9uKSB7XG4gICAgICBvZmZzZXRZID0gdGhpcy5hbmltYXRpb25UaW1lIC8gdGhpcy5zdHlsZS5hbmltYXRpb25EdXJhdGlvbjtcblxuICAgICAgaWYodGhpcy5lYXNpbmdGdW5jdGlvbikge1xuICAgICAgICBvZmZzZXRZID0gdGhpcy5lYXNpbmdGdW5jdGlvbihvZmZzZXRZKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gb2Zmc2V0WTtcbiAgfVxuXG4gIGdldCB5KCkge1xuICAgIGNvbnN0IG9mZnNldFkgPSB0aGlzLm9mZnNldFk7XG5cbiAgICBpZih0aGlzLnN0eWxlLnZlcnRpY2FsQWxpZ25lbWVudCA9PSBDb25zdGFudHMuVmVydGljYWxBbGlnbmVtZW50LlRPUCkge1xuICAgICAgcmV0dXJuICh0aGlzLmhlaWdodCAqIChvZmZzZXRZIDw9IDEgPyBvZmZzZXRZIDogMSkpIC0gdGhpcy5oZWlnaHQ7XG4gICAgfSBcbiAgICBcbiAgICByZXR1cm4gdGhpcy5jYW52YXMuc2NlbmUuaGVpZ2h0IC0gKHRoaXMuaGVpZ2h0ICogKG9mZnNldFkgPD0gMSA/IG9mZnNldFkgOiAxKSk7XG4gIH1cblxuICBzZXQgeSh5KSB7XG4gICAgc3VwZXIueSA9IHk7XG4gIH1cblxuICBkcmF3Q29tcG9uZW50cyhjdHgpIHtcbiAgICBzdXBlci5kcmF3KGN0eCk7XG4gIH1cblxuICBjbG9zZSgpIHtcbiAgICB0aGlzLmRpc2FibGVDbG9zZUJ1dHRvbigpO1xuICBcbiAgICBpZighdGhpcy5jbG9zaW5nKSB7XG4gICAgICB0aGlzLmNsb3NpbmcgPSB0cnVlO1xuICAgICAgdGhpcy5hbmltYXRpb25UaW1lID0gdGhpcy5zdHlsZS5hbmltYXRpb25EdXJhdGlvbjtcbiAgICB9XG4gIH1cbiAgXG4gIG9wZW4oKSB7XG4gICAgdGhpcy50aW1lTGFzdEZyYW1lID0gMDtcbiAgICB0aGlzLmFuaW1hdGlvblRpbWUgPSAwO1xuICAgIHRoaXMuaW5pdCA9IGZhbHNlO1xuICAgIHRoaXMuY2xvc2VkID0gZmFsc2U7XG4gICAgdGhpcy5jbG9zaW5nID0gZmFsc2U7XG4gIH1cbiAgXG4gIGRpc2FibGVDbG9zZUJ1dHRvbigpIHtcbiAgICBpZih0aGlzLmNsb3NlQnV0dG9uICE9IHVuZGVmaW5lZCAmJiB0aGlzLmNsb3NlQnV0dG9uICE9IG51bGwgJiYgdGhpcy5jbG9zZUJ1dHRvbiBpbnN0YW5jZW9mIEJ1dHRvbikge1xuICAgICAgdGhpcy5jbG9zZUJ1dHRvbi5kaXNhYmxlKCk7XG4gICAgfVxuICB9XG4gIFxuICBlbmFibGVDbG9zZUJ1dHRvbigpIHtcbiAgICBpZih0aGlzLmNsb3NlQnV0dG9uICE9IHVuZGVmaW5lZCAmJiB0aGlzLmNsb3NlQnV0dG9uICE9IG51bGwgJiYgdGhpcy5jbG9zZUJ1dHRvbiBpbnN0YW5jZW9mIEJ1dHRvbikge1xuICAgICAgdGhpcy5jbG9zZUJ1dHRvbi5lbmFibGUoKTtcbiAgICB9XG4gIH07XG4gIFxuICBjb3B5KCkge1xuICAgIHJldHVybiBuZXcgTm90aWZpY2F0aW9uTWVzc2FnZSh0aGlzLnN0eWxlLmNvcHkoKSwgdGhpcy5kZWxheUJlZm9yZUNsb3NpbmcsIHRoaXMuZWFzaW5nRnVuY3Rpb24sIC4uLnRoaXMuY29tcG9uZW50cyk7XG4gIH1cblxuICBnZXQgd2lkdGgoKSB7XG4gICAgcmV0dXJuIHRoaXMuY2FudmFzICYmIHRoaXMuY2FudmFzLnNjZW5lID8gdGhpcy5jYW52YXMuc2NlbmUud2lkdGggOiBudWxsO1xuICB9XG5cbiAgZ2V0IGhlaWdodCgpIHtcbiAgICByZXR1cm4gc3VwZXIuaGVpZ2h0IC0gKHRoaXMuY2xvc2VCdXR0b24gPyB0aGlzLmNsb3NlQnV0dG9uLmhlaWdodCA6IDApO1xuICB9XG5cbiAgZ2V0IGRlZmF1bHRTdHlsZSgpIHtcbiAgICByZXR1cm4gbmV3IFN0eWxlKHtcbiAgICAgIFwiYWxpZ25lbWVudFwiOiBDb25zdGFudHMuQWxpZ25lbWVudC5DRU5URVIsXG4gICAgICBcImJhY2tncm91bmRDb2xvclwiOiBDb25zdGFudHMuU2V0dGluZy5OT1RJRklDQVRJT05fREVGQVVMVF9CQUNLR1JPVU5ELFxuICAgICAgXCJhbmltYXRpb25EdXJhdGlvblwiOiBDb25zdGFudHMuU2V0dGluZy5OT1RJRklDQVRJT05fREVGQVVMVF9BTklNQVRJT05fRFVSQVRJT05cbiAgICB9KTtcbiAgfVxuXG4gIGdldCBoaWRkZW4oKSB7XG4gICAgcmV0dXJuIHN1cGVyLmhpZGRlbiB8fCB0aGlzLmNsb3NlZDtcbiAgfVxuXG4gIHNldCBoaWRkZW4oaGlkZGVuKSB7XG4gICAgc3VwZXIuaGlkZGVuID0gaGlkZGVuO1xuXG4gICAgaWYoaGlkZGVuKSB7XG4gICAgICB0aGlzLmZvcmNlQ2xvc2UoKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5vcGVuKCk7XG4gICAgfVxuICB9XG5cbiAgY29tcGFyZVRvQ29tcG9uZW50KG90aGVyQ29tcG9uZW50KSB7XG4gICAgcmV0dXJuIG90aGVyQ29tcG9uZW50LmNvbXBhcmVUb05vdGlmaWNhdGlvbih0aGlzKTtcbiAgfVxuXG4gIGNvbXBhcmVUb1Rvb2x0aXAob3RoZXJDb21wb25lbnQpIHtcbiAgICByZXR1cm4gLTE7XG4gIH1cblxuICBjb21wYXJlVG9Ob3RpZmljYXRpb24ob3RoZXJDb21wb25lbnQpIHtcbiAgICByZXR1cm4gMDtcbiAgfVxuXG4gIGNvbXBhcmVUb01lbnUob3RoZXJDb21wb25lbnQpIHtcbiAgICByZXR1cm4gLTE7XG4gIH1cbn0iLCIvKlxuICogQ29weXJpZ2h0IChDKSAyMDIwIEVsaWFzdGlrIChlbGlhc3Rpa3NvZnRzLmNvbSlcbiAqXG4gKiBUaGlzIGZpbGUgaXMgcGFydCBvZiBcIkpTR2FtZVRvb2xzXCIuXG4gKlxuICogXCJKU0dhbWVUb29sc1wiIGlzIGZyZWUgc29mdHdhcmU6IHlvdSBjYW4gcmVkaXN0cmlidXRlIGl0IGFuZC9vciBtb2RpZnlcbiAqIGl0IHVuZGVyIHRoZSB0ZXJtcyBvZiB0aGUgR05VIEdlbmVyYWwgUHVibGljIExpY2Vuc2UgYXMgcHVibGlzaGVkIGJ5XG4gKiB0aGUgRnJlZSBTb2Z0d2FyZSBGb3VuZGF0aW9uLCBlaXRoZXIgdmVyc2lvbiAzIG9mIHRoZSBMaWNlbnNlLCBvclxuICogKGF0IHlvdXIgb3B0aW9uKSBhbnkgbGF0ZXIgdmVyc2lvbi5cbiAqXG4gKiBcIkpTR2FtZVRvb2xzXCIgaXMgZGlzdHJpYnV0ZWQgaW4gdGhlIGhvcGUgdGhhdCBpdCB3aWxsIGJlIHVzZWZ1bCxcbiAqIGJ1dCBXSVRIT1VUIEFOWSBXQVJSQU5UWTsgd2l0aG91dCBldmVuIHRoZSBpbXBsaWVkIHdhcnJhbnR5IG9mXG4gKiBNRVJDSEFOVEFCSUxJVFkgb3IgRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UuICBTZWUgdGhlXG4gKiBHTlUgR2VuZXJhbCBQdWJsaWMgTGljZW5zZSBmb3IgbW9yZSBkZXRhaWxzLlxuICpcbiAqIFlvdSBzaG91bGQgaGF2ZSByZWNlaXZlZCBhIGNvcHkgb2YgdGhlIEdOVSBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlXG4gKiBhbG9uZyB3aXRoIFwiSlNHYW1lVG9vbHNcIi4gIElmIG5vdCwgc2VlIDxodHRwOi8vd3d3LmdudS5vcmcvbGljZW5zZXMvPi5cbiAqL1xuaW1wb3J0IEJveCBmcm9tIFwiLi9Cb3hcIjtcbmltcG9ydCBDb25zdGFudHMgZnJvbSBcIi4vQ29uc3RhbnRzXCI7XG5pbXBvcnQgU3R5bGUgZnJvbSBcIi4vU3R5bGVcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUHJvZ3Jlc3NCYXIgZXh0ZW5kcyBCb3gge1xuICAjcHJlY1BlcmNlbnQgPSAwO1xuICBzZWxlY3RhYmxlID0gZmFsc2U7XG5cbiAgY29uc3RydWN0b3IoeCwgeSwgd2lkdGgsIGhlaWdodCwgc3R5bGUsIGRlZmF1bHRQZXJjZW50LCBlYXNpbmdGdW5jdGlvbikge1xuICAgIHN1cGVyKHgsIHksIHdpZHRoLCBoZWlnaHQsIHN0eWxlKTtcblxuICAgIHRoaXMucGVyY2VudCA9IGRlZmF1bHRQZXJjZW50ID09IHVuZGVmaW5lZCA/IDAgOiBkZWZhdWx0UGVyY2VudDtcbiAgICB0aGlzLiNwcmVjUGVyY2VudCA9IHRoaXMucGVyY2VudDtcbiAgICB0aGlzLmVhc2luZ0Z1bmN0aW9uID0gZWFzaW5nRnVuY3Rpb247XG5cbiAgICB0aGlzLmxhc3RUaW1lID0gMDtcbiAgICB0aGlzLnRvdGFsVGltZSA9IDA7XG4gIH1cblxuICBkcmF3KGNvbnRleHQpIHtcbiAgICBpZih0aGlzLmhpZGRlbikgcmV0dXJuO1xuICAgIHN1cGVyLmRyYXcoY29udGV4dCk7XG5cbiAgICBjb25zdCBjYW52YXMgPSBjb250ZXh0LmNhbnZhcztcbiAgICBjb25zdCBjdHggPSBjYW52YXMuZ2V0Q29udGV4dChcIjJkXCIpO1xuICAgIGN0eC5zYXZlKCk7XG5cbiAgICBjb25zdCB0aW1lID0gcGVyZm9ybWFuY2Uubm93KCk7XG4gICAgbGV0IG9mZnNldFRpbWUgPSAwO1xuXG4gICAgaWYodGhpcy4jcHJlY1BlcmNlbnQgIT0gdGhpcy5wZXJjZW50ICYmICF0aGlzLnN0eWxlLmRpc2FibGVBbmltYXRpb24pIHtcbiAgICAgIGlmKHRoaXMubGFzdFRpbWUgPiAwKSBvZmZzZXRUaW1lID0gdGltZSAtIHRoaXMubGFzdFRpbWU7XG4gICAgICB0aGlzLnRvdGFsVGltZSArPSBvZmZzZXRUaW1lO1xuXG4gICAgICBpZih0aGlzLnRvdGFsVGltZSA+PSB0aGlzLnN0eWxlLmFuaW1hdGlvbkR1cmF0aW9uKSB7XG4gICAgICAgIHRoaXMuI3ByZWNQZXJjZW50ID0gdGhpcy5wZXJjZW50O1xuICAgICAgICB0aGlzLnRvdGFsVGltZSA9IDA7XG4gICAgICAgIHRoaXMubGFzdFRpbWUgPSAwO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5sYXN0VGltZSA9IHRpbWU7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMudG90YWxUaW1lID0gMDtcbiAgICAgIHRoaXMubGFzdFRpbWUgPSAwO1xuICAgIH1cblxuICAgIHRoaXMuZHJhd0JhY2tncm91bmQoY3R4KTtcbiAgICB0aGlzLmRyYXdGb3JlZ3JvdW5kKGN0eCwgdGhpcy53aWR0aEZvcmVncm91bmQpO1xuXG4gICAgY3R4LnJlc3RvcmUoKTtcbiAgfVxuXG4gIGdldCBhbmltYXRpb25QZXJjZW50KCkge1xuICAgIGxldCBhbmltYXRpb25QZXJjZW50ID0gKHRoaXMuI3ByZWNQZXJjZW50ICE9IHRoaXMucGVyY2VudCAmJiAhdGhpcy5zdHlsZS5kaXNhYmxlQW5pbWF0aW9uID8gdGhpcy50b3RhbFRpbWUgLyAodGhpcy5zdHlsZS5hbmltYXRpb25EdXJhdGlvbikgOiAxKTtcblxuICAgIGlmKHRoaXMuZWFzaW5nRnVuY3Rpb24pIHtcbiAgICAgIGFuaW1hdGlvblBlcmNlbnQgPSB0aGlzLmVhc2luZ0Z1bmN0aW9uKGFuaW1hdGlvblBlcmNlbnQpO1xuICAgIH1cblxuICAgIHJldHVybiBhbmltYXRpb25QZXJjZW50O1xuICB9XG5cbiAgZ2V0IHdpZHRoRm9yZWdyb3VuZCgpIHtcbiAgICByZXR1cm4gTWF0aC5tYXgoMCwgTWF0aC5taW4odGhpcy53aWR0aCwgdGhpcy53aWR0aCAqICh0aGlzLiNwcmVjUGVyY2VudCArICh0aGlzLnBlcmNlbnQgLSB0aGlzLiNwcmVjUGVyY2VudCkgKiB0aGlzLmFuaW1hdGlvblBlcmNlbnQpKSk7XG4gIH1cblxuICBkcmF3Rm9yZWdyb3VuZChjdHgsIHdpZHRoRm9yZWdyb3VuZCkge1xuICAgIGN0eC5zYXZlKCk7XG5cbiAgICBjdHguZmlsbFN0eWxlID0gdGhpcy5zdHlsZS5mb3JlZ3JvdW5kQ29sb3I7XG4gICAgY3R4LmZpbGxSZWN0KHRoaXMueCwgdGhpcy55LCB3aWR0aEZvcmVncm91bmQsIHRoaXMuaGVpZ2h0KTtcblxuICAgIGN0eC5yZXN0b3JlKCk7XG4gIH1cblxuICBnZXQgZGVmYXVsdFN0eWxlKCkge1xuICAgIHJldHVybiBuZXcgU3R5bGUoe1xuICAgICAgXCJiYWNrZ3JvdW5kQ29sb3JcIjogQ29uc3RhbnRzLlNldHRpbmcuUFJPR1JFU1NfREVGQVVMVF9CQUNLR1JPVU5ELFxuICAgICAgXCJmb3JlZ3JvdW5kQ29sb3JcIjogQ29uc3RhbnRzLlNldHRpbmcuUFJPR1JFU1NfREVGQVVMVF9GT1JFR1JPVU5ELFxuICAgICAgXCJhbmltYXRpb25EdXJhdGlvblwiOiBDb25zdGFudHMuU2V0dGluZy5QUk9HUkVTU19ERUZBVUxUX0FOSU1BVElPTl9EVVJBVElPTlxuICAgIH0pO1xuICB9XG59IiwiLypcbiAqIENvcHlyaWdodCAoQykgMjAyMCBFbGlhc3RpayAoZWxpYXN0aWtzb2Z0cy5jb20pXG4gKlxuICogVGhpcyBmaWxlIGlzIHBhcnQgb2YgXCJKU0dhbWVUb29sc1wiLlxuICpcbiAqIFwiSlNHYW1lVG9vbHNcIiBpcyBmcmVlIHNvZnR3YXJlOiB5b3UgY2FuIHJlZGlzdHJpYnV0ZSBpdCBhbmQvb3IgbW9kaWZ5XG4gKiBpdCB1bmRlciB0aGUgdGVybXMgb2YgdGhlIEdOVSBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlIGFzIHB1Ymxpc2hlZCBieVxuICogdGhlIEZyZWUgU29mdHdhcmUgRm91bmRhdGlvbiwgZWl0aGVyIHZlcnNpb24gMyBvZiB0aGUgTGljZW5zZSwgb3JcbiAqIChhdCB5b3VyIG9wdGlvbikgYW55IGxhdGVyIHZlcnNpb24uXG4gKlxuICogXCJKU0dhbWVUb29sc1wiIGlzIGRpc3RyaWJ1dGVkIGluIHRoZSBob3BlIHRoYXQgaXQgd2lsbCBiZSB1c2VmdWwsXG4gKiBidXQgV0lUSE9VVCBBTlkgV0FSUkFOVFk7IHdpdGhvdXQgZXZlbiB0aGUgaW1wbGllZCB3YXJyYW50eSBvZlxuICogTUVSQ0hBTlRBQklMSVRZIG9yIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFLiAgU2VlIHRoZVxuICogR05VIEdlbmVyYWwgUHVibGljIExpY2Vuc2UgZm9yIG1vcmUgZGV0YWlscy5cbiAqXG4gKiBZb3Ugc2hvdWxkIGhhdmUgcmVjZWl2ZWQgYSBjb3B5IG9mIHRoZSBHTlUgR2VuZXJhbCBQdWJsaWMgTGljZW5zZVxuICogYWxvbmcgd2l0aCBcIkpTR2FtZVRvb2xzXCIuICBJZiBub3QsIHNlZSA8aHR0cDovL3d3dy5nbnUub3JnL2xpY2Vuc2VzLz4uXG4gKi9cbmltcG9ydCBFdmVudCBmcm9tIFwiLi9FdmVudFwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBSZWFjdG9yIHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgdGhpcy5ldmVudHMgPSB7fTtcbiAgfVxuXG4gIHJlZ2lzdGVyRXZlbnQoZXZlbnROYW1lKSB7XG4gICAgdGhpcy5ldmVudHNbZXZlbnROYW1lXSA9IG5ldyBFdmVudChldmVudE5hbWUpO1xuICB9XG5cbiAgZGlzcGF0Y2hFdmVudChldmVudE5hbWUsIC4uLmV2ZW50QXJncykge1xuICAgIGlmKHRoaXMuZXZlbnRzW2V2ZW50TmFtZV0pIHtcbiAgICAgIGNvbnN0IGNhbGxiYWNrcyA9IHRoaXMuZXZlbnRzW2V2ZW50TmFtZV0uY2FsbGJhY2tzO1xuICAgICAgY2FsbGJhY2tzLmZvckVhY2goY2FsbGJhY2sgPT4gY2FsbGJhY2sgJiYgY2FsbGJhY2soLi4uZXZlbnRBcmdzKSk7XG4gICAgfVxuICB9XG5cbiAgYWRkRXZlbnRMaXN0ZW5lcihldmVudE5hbWUsIGNhbGxiYWNrKSB7XG4gICAgaWYodGhpcy5ldmVudHNbZXZlbnROYW1lXSkgdGhpcy5ldmVudHNbZXZlbnROYW1lXS5yZWdpc3RlckNhbGxiYWNrKGNhbGxiYWNrKTtcbiAgfVxuXG4gIHJlbW92ZUV2ZW50TGlzdGVuZXIoZXZlbnROYW1lLCBjYWxsYmFjaykge1xuICAgIGlmKHRoaXMuZXZlbnRzW2V2ZW50TmFtZV0pIHRoaXMuZXZlbnRzW2V2ZW50TmFtZV0ucmVtb3ZlQ2FsbGJhY2soY2FsbGJhY2spO1xuICB9XG5cbiAgcmVtb3ZlQWxsRXZlbnRMaXN0ZW5lcihldmVudE5hbWUpIHtcbiAgICBpZih0aGlzLmV2ZW50c1tldmVudE5hbWVdKSB0aGlzLmV2ZW50c1tldmVudE5hbWVdLnJlbW92ZUFsbENhbGxiYWNrcygpO1xuICB9XG59IiwiLypcbiAqIENvcHlyaWdodCAoQykgMjAyMCBFbGlhc3RpayAoZWxpYXN0aWtzb2Z0cy5jb20pXG4gKlxuICogVGhpcyBmaWxlIGlzIHBhcnQgb2YgXCJKU0dhbWVUb29sc1wiLlxuICpcbiAqIFwiSlNHYW1lVG9vbHNcIiBpcyBmcmVlIHNvZnR3YXJlOiB5b3UgY2FuIHJlZGlzdHJpYnV0ZSBpdCBhbmQvb3IgbW9kaWZ5XG4gKiBpdCB1bmRlciB0aGUgdGVybXMgb2YgdGhlIEdOVSBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlIGFzIHB1Ymxpc2hlZCBieVxuICogdGhlIEZyZWUgU29mdHdhcmUgRm91bmRhdGlvbiwgZWl0aGVyIHZlcnNpb24gMyBvZiB0aGUgTGljZW5zZSwgb3JcbiAqIChhdCB5b3VyIG9wdGlvbikgYW55IGxhdGVyIHZlcnNpb24uXG4gKlxuICogXCJKU0dhbWVUb29sc1wiIGlzIGRpc3RyaWJ1dGVkIGluIHRoZSBob3BlIHRoYXQgaXQgd2lsbCBiZSB1c2VmdWwsXG4gKiBidXQgV0lUSE9VVCBBTlkgV0FSUkFOVFk7IHdpdGhvdXQgZXZlbiB0aGUgaW1wbGllZCB3YXJyYW50eSBvZlxuICogTUVSQ0hBTlRBQklMSVRZIG9yIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFLiAgU2VlIHRoZVxuICogR05VIEdlbmVyYWwgUHVibGljIExpY2Vuc2UgZm9yIG1vcmUgZGV0YWlscy5cbiAqXG4gKiBZb3Ugc2hvdWxkIGhhdmUgcmVjZWl2ZWQgYSBjb3B5IG9mIHRoZSBHTlUgR2VuZXJhbCBQdWJsaWMgTGljZW5zZVxuICogYWxvbmcgd2l0aCBcIkpTR2FtZVRvb2xzXCIuICBJZiBub3QsIHNlZSA8aHR0cDovL3d3dy5nbnUub3JnL2xpY2Vuc2VzLz4uXG4gKi9cbmltcG9ydCBSZWFjdG9yIGZyb20gXCIuL1JlYWN0b3JcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUmVhY3RvckNhbnZhcyBleHRlbmRzIFJlYWN0b3Ige1xuICByZWdpc3RlckV2ZW50KGV2ZW50TmFtZSkge1xuICAgIGlmKCF0aGlzLmV2ZW50c1tldmVudE5hbWVdKSB0aGlzLmV2ZW50c1tldmVudE5hbWVdID0gW107XG4gIH1cblxuICBkaXNwYXRjaEV2ZW50KGV2ZW50TmFtZSwgLi4uZXZlbnRBcmdzKSB7XG4gICAgaWYodGhpcy5ldmVudHNbZXZlbnROYW1lXSkge1xuICAgICAgY29uc3QgZXZlbnRzID0gdGhpcy5ldmVudHNbZXZlbnROYW1lXTtcbiAgICAgIGV2ZW50cy5mb3JFYWNoKGV2ZW50ID0+IGV2ZW50ICYmIGV2ZW50LmNhbGxiYWNrICYmIGV2ZW50LmNhbGxiYWNrKC4uLmV2ZW50QXJncykpO1xuICAgIH1cbiAgfVxuXG4gIGRpc3BhdGNoRXZlbnRDb21wb25lbnQoZXZlbnROYW1lLCBjb21wb25lbnQsIC4uLmV2ZW50QXJncykge1xuICAgIGlmKHRoaXMuZXZlbnRzW2V2ZW50TmFtZV0pIHtcbiAgICAgIGNvbnN0IGV2ZW50cyA9IHRoaXMuZXZlbnRzW2V2ZW50TmFtZV07XG4gICAgICBldmVudHMuZm9yRWFjaChldmVudCA9PiBldmVudCAmJiBldmVudC5jYWxsYmFjayAmJiBldmVudC5jb21wb25lbnQgPT0gY29tcG9uZW50ICYmIGV2ZW50LmNhbGxiYWNrKC4uLmV2ZW50QXJncykpO1xuICAgIH1cbiAgfVxuXG4gIGFkZEV2ZW50TGlzdGVuZXIoZXZlbnROYW1lLCBjb21wb25lbnQsIGNhbGxiYWNrKSB7XG4gICAgaWYodGhpcy5ldmVudHNbZXZlbnROYW1lXSkge1xuICAgICAgdGhpcy5ldmVudHNbZXZlbnROYW1lXS5wdXNoKHtcbiAgICAgICAgXCJjb21wb25lbnRcIjogY29tcG9uZW50LFxuICAgICAgICBcImNhbGxiYWNrXCI6IGNhbGxiYWNrXG4gICAgICB9KTtcbiAgICB9XG4gIH1cblxuICByZW1vdmVFdmVudExpc3RlbmVyKGV2ZW50TmFtZSwgY2FsbGJhY2spIHtcbiAgICBpZih0aGlzLmV2ZW50c1tldmVudE5hbWVdKSB0aGlzLmV2ZW50c1tldmVudE5hbWVdLmZpbHRlcihldmVudCA9PiBldmVudCAmJiBldmVudC5jYWxsYmFjayAhPSBjYWxsYmFjayk7XG4gIH1cblxuICByZW1vdmVFdmVudExpc3RlbmVyQ29tcG9uZW50KGV2ZW50TmFtZSwgY29tcG9uZW50KSB7XG4gICAgaWYodGhpcy5ldmVudHNbZXZlbnROYW1lXSkgdGhpcy5ldmVudHNbZXZlbnROYW1lXS5maWx0ZXIoZXZlbnQgPT4gZXZlbnQgJiYgZXZlbnQuY29tcG9uZW50ICE9IGNvbXBvbmVudCk7XG4gIH1cblxuICByZW1vdmVBbGxFdmVudExpc3RlbmVyKCkge1xuICAgIHRoaXMuZXZlbnRzID0gW107XG4gIH1cbn0iLCIvKlxuICogQ29weXJpZ2h0IChDKSAyMDIwIEVsaWFzdGlrIChlbGlhc3Rpa3NvZnRzLmNvbSlcbiAqXG4gKiBUaGlzIGZpbGUgaXMgcGFydCBvZiBcIkpTR2FtZVRvb2xzXCIuXG4gKlxuICogXCJKU0dhbWVUb29sc1wiIGlzIGZyZWUgc29mdHdhcmU6IHlvdSBjYW4gcmVkaXN0cmlidXRlIGl0IGFuZC9vciBtb2RpZnlcbiAqIGl0IHVuZGVyIHRoZSB0ZXJtcyBvZiB0aGUgR05VIEdlbmVyYWwgUHVibGljIExpY2Vuc2UgYXMgcHVibGlzaGVkIGJ5XG4gKiB0aGUgRnJlZSBTb2Z0d2FyZSBGb3VuZGF0aW9uLCBlaXRoZXIgdmVyc2lvbiAzIG9mIHRoZSBMaWNlbnNlLCBvclxuICogKGF0IHlvdXIgb3B0aW9uKSBhbnkgbGF0ZXIgdmVyc2lvbi5cbiAqXG4gKiBcIkpTR2FtZVRvb2xzXCIgaXMgZGlzdHJpYnV0ZWQgaW4gdGhlIGhvcGUgdGhhdCBpdCB3aWxsIGJlIHVzZWZ1bCxcbiAqIGJ1dCBXSVRIT1VUIEFOWSBXQVJSQU5UWTsgd2l0aG91dCBldmVuIHRoZSBpbXBsaWVkIHdhcnJhbnR5IG9mXG4gKiBNRVJDSEFOVEFCSUxJVFkgb3IgRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UuICBTZWUgdGhlXG4gKiBHTlUgR2VuZXJhbCBQdWJsaWMgTGljZW5zZSBmb3IgbW9yZSBkZXRhaWxzLlxuICpcbiAqIFlvdSBzaG91bGQgaGF2ZSByZWNlaXZlZCBhIGNvcHkgb2YgdGhlIEdOVSBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlXG4gKiBhbG9uZyB3aXRoIFwiSlNHYW1lVG9vbHNcIi4gIElmIG5vdCwgc2VlIDxodHRwOi8vd3d3LmdudS5vcmcvbGljZW5zZXMvPi5cbiAqL1xuaW1wb3J0IENvbXBvbmVudCBmcm9tIFwiLi9Db21wb25lbnRcIjtcbmltcG9ydCBDb250YWluZXIgZnJvbSBcIi4vQ29udGFpbmVyXCI7XG5pbXBvcnQgVXRpbHMgZnJvbSBcIi4vVXRpbHNcIjtcbmltcG9ydCBDb25zdGFudHMgZnJvbSBcIi4vQ29uc3RhbnRzXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFJvdyBleHRlbmRzIENvbnRhaW5lciB7XG4gIHNlbGVjdGFibGUgPSBmYWxzZTtcbiAgI19pbm5lckhlaWdodCA9IDA7XG4gICNfaW5uZXJXaWR0aCA9IDA7XG5cbiAgY29uc3RydWN0b3IoeCwgeSwgbWF4V2lkdGgsIG1heEhlaWdodCwgc3R5bGUsIC4uLmNvbXBvbmVudHMpIHtcbiAgICBzdXBlcih4LCB5LCBtYXhXaWR0aCwgbWF4SGVpZ2h0LCBzdHlsZSwgLi4uY29tcG9uZW50cyk7XG5cbiAgICBpZighQ29uc3RhbnRzLlNldHRpbmcuRElTQUJMRV9FWFBFUklNRU5UQUxfT1BUSU1JWkFUSU9OUykge1xuICAgICAgdGhpcy51cGRhdGVJbm5lcldpZHRoKCk7XG4gICAgICB0aGlzLnVwZGF0ZUlubmVySGVpZ2h0KCk7XG4gIFxuICAgICAgdGhpcy5hZGRDaGFuZ2VBY3Rpb24oKCkgPT4ge1xuICAgICAgICB0aGlzLnVwZGF0ZUlubmVyV2lkdGgoKTtcbiAgICAgICAgdGhpcy51cGRhdGVJbm5lckhlaWdodCgpO1xuICAgICAgfSk7XG4gICAgfVxuICB9XG5cbiAgZHJhdyhjb250ZXh0KSB7XG4gICAgaWYodGhpcy5oaWRkZW4pIHJldHVybjtcbiAgICBzdXBlci5kcmF3KGNvbnRleHQpO1xuXG4gICAgY29uc3QgY2FudmFzID0gY29udGV4dC5jYW52YXM7XG4gICAgY29uc3QgY3R4ID0gY2FudmFzLmdldENvbnRleHQoXCIyZFwiKTtcbiAgICBjdHguc2F2ZSgpO1xuXG4gICAgbGV0IGN0eFRlbXAgPSBjdHg7XG4gICAgXG4gICAgaWYodGhpcy5pc0N1dHRpbmcpIHtcbiAgICAgIGN0eFRlbXAgPSB0aGlzLmNhbnZhc1RtcC5nZXRDb250ZXh0KFwiMmRcIik7XG4gICAgfVxuICBcbiAgICBpZihzdXBlci5jb21wb25lbnRzICE9IG51bGwpIHtcbiAgICAgIGxldCBjdXJyZW50WCA9IHRoaXMuc3R5bGUucGFkZGluZztcblxuICAgICAgc3VwZXIuY29tcG9uZW50cy5mb3JFYWNoKGNvbXBvbmVudCA9PiB7XG4gICAgICAgIGN1cnJlbnRYID0gdGhpcy5kcmF3Q29tcG9uZW50KGNvbXBvbmVudCwgY3VycmVudFgsIGN0eFRlbXApO1xuICAgICAgfSk7XG4gICAgfVxuICAgIFxuICAgIGlmKHRoaXMuaXNDdXR0aW5nKSB7XG4gICAgICBVdGlscy5kcmF3SW1hZ2VEYXRhKGN0eCwgdGhpcy5jYW52YXNUbXAsIHRoaXMueCwgdGhpcy55LCB0aGlzLndpZHRoLCB0aGlzLmhlaWdodCwgdGhpcy54LCB0aGlzLnksIHRoaXMud2lkdGgsIHRoaXMuaGVpZ2h0KTtcbiAgICB9XG5cbiAgICBzdXBlci5kcmF3U2Nyb2xsYmFycyhjdHgpO1xuXG4gICAgY3R4LnJlc3RvcmUoKTtcbiAgfVxuXG4gIGRyYXdDb21wb25lbnQoY29tcG9uZW50LCBjdXJyZW50WCwgY3R4KSB7XG4gICAgaWYoY29tcG9uZW50IGluc3RhbmNlb2YgQ29tcG9uZW50KSB7XG4gICAgICBjb21wb25lbnQueCA9IGN1cnJlbnRYIC0gdGhpcy5vZmZzZXRTY3JvbGxYO1xuICAgICAgY29tcG9uZW50LnkgPSB0aGlzLnN0eWxlLnBhZGRpbmcgLSB0aGlzLm9mZnNldFNjcm9sbFk7XG4gICAgICBcbiAgICAgIGlmKCFjb21wb25lbnQuaGlkZGVuKSB7XG4gICAgICAgIGlmKHRoaXMuaXNDb21wb25lbnRWaXNpYmxlKGNvbXBvbmVudCkpIHtcbiAgICAgICAgICBjb21wb25lbnQuZW5hYmxlKCk7XG4gICAgICAgICAgY29tcG9uZW50LmRyYXcoY3R4KTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBjb21wb25lbnQuZGlzYWJsZSgpO1xuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICBjdXJyZW50WCArPSBjb21wb25lbnQud2lkdGggKyB0aGlzLnN0eWxlLnNwYWNlQmV0d2VlbkNvbXBvbmVudHM7XG4gICAgICB9XG4gICAgfVxuICAgIFxuICAgIHJldHVybiBjdXJyZW50WDtcbiAgfVxuXG4gIHVwZGF0ZUlubmVySGVpZ2h0KCkge1xuICAgIGxldCBtYXhIZWlnaHQgPSAwO1xuICAgIHN1cGVyLmNvbXBvbmVudHMuZm9yRWFjaChjb21wb25lbnQgPT4geyBpZihjb21wb25lbnQuaGVpZ2h0ID4gbWF4SGVpZ2h0ICYmICFjb21wb25lbnQuaGlkZGVuKSBtYXhIZWlnaHQgPSBjb21wb25lbnQuaGVpZ2h0OyB9KTtcbiAgICB0aGlzLiNfaW5uZXJIZWlnaHQgPSBtYXhIZWlnaHQgKyB0aGlzLnN0eWxlLnBhZGRpbmc7XG4gIH1cblxuICB1cGRhdGVJbm5lcldpZHRoKCkge1xuICAgIGxldCB0b3RhbFdpZHRoID0gMDtcbiAgICBzdXBlci5jb21wb25lbnRzLmZvckVhY2goY29tcG9uZW50ID0+IHsgaWYoIWNvbXBvbmVudC5oaWRkZW4pIHRvdGFsV2lkdGggKz0gY29tcG9uZW50LndpZHRoIH0pO1xuICAgIHRoaXMuI19pbm5lcldpZHRoID0gdG90YWxXaWR0aCArIHRoaXMuc3R5bGUuc3BhY2VCZXR3ZWVuQ29tcG9uZW50cyAqIChzdXBlci5jb21wb25lbnRzLmxlbmd0aCAtIDEpICsgdGhpcy5zdHlsZS5wYWRkaW5nO1xuICB9XG5cbiAgZ2V0IGlubmVySGVpZ2h0KCkge1xuICAgIGlmKENvbnN0YW50cy5TZXR0aW5nLkRJU0FCTEVfRVhQRVJJTUVOVEFMX09QVElNSVpBVElPTlMpIHRoaXMudXBkYXRlSW5uZXJIZWlnaHQoKTtcbiAgICByZXR1cm4gdGhpcy4jX2lubmVySGVpZ2h0O1xuICB9XG5cbiAgZ2V0IGlubmVyV2lkdGgoKSB7XG4gICAgaWYoQ29uc3RhbnRzLlNldHRpbmcuRElTQUJMRV9FWFBFUklNRU5UQUxfT1BUSU1JWkFUSU9OUykgdGhpcy51cGRhdGVJbm5lcldpZHRoKCk7XG4gICAgcmV0dXJuIHRoaXMuI19pbm5lcldpZHRoO1xuICB9XG5cbiAgZ2V0IHdpZHRoKCkge1xuICAgIGNvbnN0IHdpZHRoID0gdGhpcy5pbm5lcldpZHRoIHx8ICh0aGlzLnBhcmVudCAmJiB0aGlzLnBhcmVudC53aWR0aCk7XG4gICAgY29uc3QgbWluID0gdGhpcy5tYXhXaWR0aCA/IE1hdGgubWluKHRoaXMubWF4V2lkdGgsIHdpZHRoKSA6IG51bGw7XG4gICAgcmV0dXJuIHRoaXMubWluV2lkdGggPyBNYXRoLm1heCh0aGlzLm1pbldpZHRoLCBtaW4gfHwgd2lkdGgpIDogbWluIHx8IHdpZHRoO1xuICB9XG5cbiAgZ2V0IGhlaWdodCgpIHtcbiAgICBjb25zdCBoZWlnaHQgPSB0aGlzLmlubmVySGVpZ2h0IHx8ICh0aGlzLnBhcmVudCAmJiB0aGlzLnBhcmVudC5oZWlnaHQpO1xuICAgIGNvbnN0IG1pbiA9IHRoaXMubWF4SGVpZ2h0ID8gTWF0aC5taW4odGhpcy5tYXhIZWlnaHQsIGhlaWdodCkgOiBudWxsO1xuICAgIHJldHVybiB0aGlzLm1pbkhlaWdodCA/IE1hdGgubWF4KHRoaXMubWluSGVpZ2h0LCBtaW4gfHwgaGVpZ2h0KSA6IG1pbiB8fCBoZWlnaHQ7XG4gIH1cblxuICBnZXQgZGVmYXVsdFN0eWxlKCkge1xuICAgIHJldHVybiBzdXBlci5kZWZhdWx0U3R5bGU7XG4gIH1cbn0iLCIvKlxuICogQ29weXJpZ2h0IChDKSAyMDIwIEVsaWFzdGlrIChlbGlhc3Rpa3NvZnRzLmNvbSlcbiAqXG4gKiBUaGlzIGZpbGUgaXMgcGFydCBvZiBcIkpTR2FtZVRvb2xzXCIuXG4gKlxuICogXCJKU0dhbWVUb29sc1wiIGlzIGZyZWUgc29mdHdhcmU6IHlvdSBjYW4gcmVkaXN0cmlidXRlIGl0IGFuZC9vciBtb2RpZnlcbiAqIGl0IHVuZGVyIHRoZSB0ZXJtcyBvZiB0aGUgR05VIEdlbmVyYWwgUHVibGljIExpY2Vuc2UgYXMgcHVibGlzaGVkIGJ5XG4gKiB0aGUgRnJlZSBTb2Z0d2FyZSBGb3VuZGF0aW9uLCBlaXRoZXIgdmVyc2lvbiAzIG9mIHRoZSBMaWNlbnNlLCBvclxuICogKGF0IHlvdXIgb3B0aW9uKSBhbnkgbGF0ZXIgdmVyc2lvbi5cbiAqXG4gKiBcIkpTR2FtZVRvb2xzXCIgaXMgZGlzdHJpYnV0ZWQgaW4gdGhlIGhvcGUgdGhhdCBpdCB3aWxsIGJlIHVzZWZ1bCxcbiAqIGJ1dCBXSVRIT1VUIEFOWSBXQVJSQU5UWTsgd2l0aG91dCBldmVuIHRoZSBpbXBsaWVkIHdhcnJhbnR5IG9mXG4gKiBNRVJDSEFOVEFCSUxJVFkgb3IgRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UuICBTZWUgdGhlXG4gKiBHTlUgR2VuZXJhbCBQdWJsaWMgTGljZW5zZSBmb3IgbW9yZSBkZXRhaWxzLlxuICpcbiAqIFlvdSBzaG91bGQgaGF2ZSByZWNlaXZlZCBhIGNvcHkgb2YgdGhlIEdOVSBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlXG4gKiBhbG9uZyB3aXRoIFwiSlNHYW1lVG9vbHNcIi4gIElmIG5vdCwgc2VlIDxodHRwOi8vd3d3LmdudS5vcmcvbGljZW5zZXMvPi5cbiAqL1xuaW1wb3J0IElucHV0IGZyb20gXCIuL0lucHV0XCI7XG5pbXBvcnQgQ29udGFpbmVyIGZyb20gXCIuL0NvbnRhaW5lclwiO1xuaW1wb3J0IFV0aWxzIGZyb20gXCIuL1V0aWxzXCI7XG5pbXBvcnQgU3R5bGUgZnJvbSBcIi4vU3R5bGVcIjtcbmltcG9ydCBDb25zdGFudHMgZnJvbSBcIi4vQ29uc3RhbnRzXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFNjZW5lIGV4dGVuZHMgQ29udGFpbmVyIHtcbiAgc2VsZWN0YWJsZSA9IGZhbHNlO1xuICBlbmFibGVFdmVudHMgPSBmYWxzZTtcblxuICBjb25zdHJ1Y3RvciguLi5jb21wb25lbnRzKSB7XG4gICAgc3VwZXIoKTtcbiAgICB0aGlzLmFkZEFsbCguLi5jb21wb25lbnRzKTtcbiAgfVxuXG4gIGRyYXcoY29udGV4dCkge1xuICAgIGlmKHRoaXMuaGlkZGVuKSByZXR1cm47XG4gICAgc3VwZXIuZHJhdyhjb250ZXh0KTtcblxuICAgIGNvbnN0IGNhbnZhcyA9IGNvbnRleHQuY2FudmFzO1xuICAgIGNvbnN0IGN0eCA9IGNhbnZhcy5nZXRDb250ZXh0KFwiMmRcIik7XG4gICAgY3R4LnNhdmUoKTtcbiAgICBjYW52YXMuc3R5bGUuY3Vyc29yID0gXCJkZWZhdWx0XCI7XG5cbiAgICBsZXQgY3R4VGVtcCA9IGN0eDtcbiAgICBpZih0aGlzLm1heFdpZHRoIHx8IHRoaXMubWF4SGVpZ2h0KSBjdHhUZW1wID0gdGhpcy5jYW52YXNUbXAuZ2V0Q29udGV4dChcIjJkXCIpO1xuXG4gICAgY29uc3QgaW5wdXRzID0gc3VwZXIuY29tcG9uZW50cy5maWx0ZXIoY29tcG9uZW50ID0+IGNvbXBvbmVudCAmJiBjb21wb25lbnQgaW5zdGFuY2VvZiBJbnB1dCk7XG4gICAgaW5wdXRzICYmIGlucHV0cy5mb3JFYWNoKGlucHV0ID0+IGlucHV0LmNhbnZhcyA9IHRoaXMuY2FudmFzKTsgLy8gU2V0IGlucHV0cyBjYW52YXNcbiAgICB0aGlzLmRyYXdDb21wb25lbnRzKGN0eFRlbXApOyAvLyBEcmF3IHNvcnRlZCBjb21wb25lbnRzXG4gICAgXG4gICAgaWYodGhpcy5tYXhXaWR0aCB8fCB0aGlzLm1heEhlaWdodCkgVXRpbHMuZHJhd0ltYWdlRGF0YShjdHgsIHRoaXMuY2FudmFzVG1wLCB0aGlzLngsIHRoaXMueSwgdGhpcy53aWR0aCwgdGhpcy5oZWlnaHQsIHRoaXMueCwgdGhpcy55LCB0aGlzLndpZHRoLCB0aGlzLmhlaWdodCk7XG4gICAgc3VwZXIuZHJhd1Njcm9sbGJhcnMoY3R4KTtcblxuICAgIGN0eC5yZXN0b3JlKCk7XG4gIH1cblxuICBkcmF3Q29tcG9uZW50cyhjdHgpIHtcbiAgICB0aGlzLmNvbXBvbmVudHMuc29ydChTY2VuZS5jb21wYXJlQ29tcG9uZW50cykuZm9yRWFjaChjb21wb25lbnQgPT4gY29tcG9uZW50LmRyYXcoY3R4KSk7XG4gIH1cblxuICBnZXQgZGVmYXVsdFN0eWxlKCkge1xuICAgIHJldHVybiBuZXcgU3R5bGUoe1xuICAgICAgXCJwYWRkaW5nXCI6IENvbnN0YW50cy5TZXR0aW5nLkRFRkFVTFRfUEFERElOR1xuICAgIH0pO1xuICB9XG59IiwiLypcbiAqIENvcHlyaWdodCAoQykgMjAyMCBFbGlhc3RpayAoZWxpYXN0aWtzb2Z0cy5jb20pXG4gKlxuICogVGhpcyBmaWxlIGlzIHBhcnQgb2YgXCJKU0dhbWVUb29sc1wiLlxuICpcbiAqIFwiSlNHYW1lVG9vbHNcIiBpcyBmcmVlIHNvZnR3YXJlOiB5b3UgY2FuIHJlZGlzdHJpYnV0ZSBpdCBhbmQvb3IgbW9kaWZ5XG4gKiBpdCB1bmRlciB0aGUgdGVybXMgb2YgdGhlIEdOVSBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlIGFzIHB1Ymxpc2hlZCBieVxuICogdGhlIEZyZWUgU29mdHdhcmUgRm91bmRhdGlvbiwgZWl0aGVyIHZlcnNpb24gMyBvZiB0aGUgTGljZW5zZSwgb3JcbiAqIChhdCB5b3VyIG9wdGlvbikgYW55IGxhdGVyIHZlcnNpb24uXG4gKlxuICogXCJKU0dhbWVUb29sc1wiIGlzIGRpc3RyaWJ1dGVkIGluIHRoZSBob3BlIHRoYXQgaXQgd2lsbCBiZSB1c2VmdWwsXG4gKiBidXQgV0lUSE9VVCBBTlkgV0FSUkFOVFk7IHdpdGhvdXQgZXZlbiB0aGUgaW1wbGllZCB3YXJyYW50eSBvZlxuICogTUVSQ0hBTlRBQklMSVRZIG9yIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFLiAgU2VlIHRoZVxuICogR05VIEdlbmVyYWwgUHVibGljIExpY2Vuc2UgZm9yIG1vcmUgZGV0YWlscy5cbiAqXG4gKiBZb3Ugc2hvdWxkIGhhdmUgcmVjZWl2ZWQgYSBjb3B5IG9mIHRoZSBHTlUgR2VuZXJhbCBQdWJsaWMgTGljZW5zZVxuICogYWxvbmcgd2l0aCBcIkpTR2FtZVRvb2xzXCIuICBJZiBub3QsIHNlZSA8aHR0cDovL3d3dy5nbnUub3JnL2xpY2Vuc2VzLz4uXG4gKi9cbmltcG9ydCBDb25zdGFudHMgZnJvbSBcIi4vQ29uc3RhbnRzXCI7XG5pbXBvcnQgQm94IGZyb20gXCIuL0JveFwiO1xuaW1wb3J0IFN0eWxlIGZyb20gXCIuL1N0eWxlXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFNjcm9sbGJhciBleHRlbmRzIEJveCB7XG4gIHNlbGVjdGFibGUgPSB0cnVlO1xuXG4gIGNvbnN0cnVjdG9yKHNpemUsIHN0eWxlLCBwYXJlbnQpIHtcbiAgICBzdXBlcihudWxsLCBudWxsLCBudWxsLCBudWxsLCBzdHlsZSk7XG4gICAgdGhpcy5wYXJlbnQgPSBwYXJlbnQ7XG4gICAgdGhpcy5zaXplID0gc2l6ZSB8fCBDb25zdGFudHMuU2V0dGluZy5TQ1JPTExCQVJfREVGQVVMVF9TSVpFO1xuICB9XG4gIFxuICBkcmF3KGNvbnRleHQpIHtcbiAgICBpZih0aGlzLmhpZGRlbikgcmV0dXJuO1xuICAgIGlmKHRoaXMuY2xpY2tlZCkge1xuICAgICAgdGhpcy5ob3ZlcmVkID0gdHJ1ZTtcbiAgICB9XG4gICAgXG4gICAgc3VwZXIuZHJhdyhjb250ZXh0KTtcbiAgfVxuXG4gIGdldCBtYXhXaWR0aFBhcmVudCgpIHtcbiAgICByZXR1cm4gdGhpcy5wYXJlbnQgPyB0aGlzLnBhcmVudC5tYXhXaWR0aCAtIE1hdGguYWJzKE1hdGgubWluKDAsIHRoaXMucGFyZW50LngpKSA6IDA7XG4gIH1cblxuICBnZXQgbWF4SGVpZ2h0UGFyZW50KCkge1xuICAgIHJldHVybiB0aGlzLnBhcmVudCA/IHRoaXMucGFyZW50Lm1heEhlaWdodCAtIE1hdGguYWJzKE1hdGgubWluKDAsIHRoaXMucGFyZW50LnkpKSA6IDA7XG4gIH1cblxuICBnZXQgaW5uZXJXaWR0aFBhcmVudCgpIHtcbiAgICByZXR1cm4gdGhpcy5wYXJlbnQgPyB0aGlzLnBhcmVudC5pbm5lcldpZHRoIC0gTWF0aC5hYnMoTWF0aC5taW4oMCwgdGhpcy5wYXJlbnQueCkpIDogMDtcbiAgfVxuXG4gIGdldCBpbm5lckhlaWdodFBhcmVudCgpIHtcbiAgICByZXR1cm4gdGhpcy5wYXJlbnQgPyB0aGlzLnBhcmVudC5pbm5lckhlaWdodCAtIE1hdGguYWJzKE1hdGgubWluKDAsIHRoaXMucGFyZW50LnkpKSA6IDA7XG4gIH1cblxuICBnZXQgbWF4V2lkdGgoKSB7XG4gICAgcmV0dXJuIHRoaXMud2lkdGg7XG4gIH1cblxuICBnZXQgbWF4SGVpZ2h0KCkge1xuICAgIHJldHVybiB0aGlzLmhlaWdodDtcbiAgfVxuXG4gIGdldCBjb250ZW50UmF0aW9YKCkge1xuICAgIHJldHVybiB0aGlzLnBhcmVudCA/IHRoaXMubWF4V2lkdGhQYXJlbnQgLyB0aGlzLmlubmVyV2lkdGhQYXJlbnQgOiAwO1xuICB9XG5cbiAgZ2V0IGNvbnRlbnRSYXRpb1koKSB7XG4gICAgcmV0dXJuIHRoaXMucGFyZW50ID8gdGhpcy5tYXhIZWlnaHRQYXJlbnQgLyB0aGlzLmlubmVySGVpZ2h0UGFyZW50IDogMDtcbiAgfVxuXG4gIGdldCB3aWR0aCgpIHtcbiAgICByZXR1cm4gdGhpcy5tYXhXaWR0aFBhcmVudCAqIHRoaXMuY29udGVudFJhdGlvWDtcbiAgfVxuXG4gIGdldCBoZWlnaHQoKSB7XG4gICAgcmV0dXJuIHRoaXMubWF4SGVpZ2h0UGFyZW50ICogdGhpcy5jb250ZW50UmF0aW9ZO1xuICB9XG5cbiAgZ2V0IHdpbmRvd1Njcm9sbFNpemVYKCkge1xuICAgIHJldHVybiB0aGlzLmlubmVyV2lkdGhQYXJlbnQgLSB0aGlzLm1heFdpZHRoUGFyZW50O1xuICB9XG5cbiAgZ2V0IHdpbmRvd1Njcm9sbFNpemVZKCkge1xuICAgIHJldHVybiB0aGlzLmlubmVySGVpZ2h0UGFyZW50IC0gdGhpcy5tYXhIZWlnaHRQYXJlbnQ7XG4gIH1cblxuICBnZXQgcGVyY2VudFNjcm9sbGJhclgoKSB7XG4gICAgcmV0dXJuIHRoaXMucGFyZW50ID8gdGhpcy5wYXJlbnQub2Zmc2V0U2Nyb2xsWCAvIHRoaXMud2luZG93U2Nyb2xsU2l6ZVggOiAwO1xuICB9XG5cbiAgZ2V0IHBlcmNlbnRTY3JvbGxiYXJZKCkge1xuICAgIHJldHVybiB0aGlzLnBhcmVudCA/IHRoaXMucGFyZW50Lm9mZnNldFNjcm9sbFkgLyB0aGlzLndpbmRvd1Njcm9sbFNpemVZIDogMDtcbiAgfVxuXG4gIGdldCBzY3JvbGxBcmVhU2l6ZVgoKSB7XG4gICAgcmV0dXJuIHRoaXMubWF4V2lkdGhQYXJlbnQgLSB0aGlzLndpZHRoO1xuICB9XG5cbiAgZ2V0IHNjcm9sbEFyZWFTaXplWSgpIHtcbiAgICByZXR1cm4gdGhpcy5tYXhIZWlnaHRQYXJlbnQgLSB0aGlzLmhlaWdodDtcbiAgfVxuXG4gIGdldCB4KCkge1xuICAgIHJldHVybiB0aGlzLnBhcmVudCA/IE1hdGguYWJzKHRoaXMucGFyZW50LngpICsgdGhpcy5zY3JvbGxBcmVhU2l6ZVggKiB0aGlzLnBlcmNlbnRTY3JvbGxiYXJYIDogMDtcbiAgfVxuXG4gIGdldCB5KCkge1xuICAgIHJldHVybiB0aGlzLnBhcmVudCA/IE1hdGguYWJzKHRoaXMucGFyZW50LnkpICsgdGhpcy5zY3JvbGxBcmVhU2l6ZVkgKiB0aGlzLnBlcmNlbnRTY3JvbGxiYXJZIDogMDtcbiAgfVxuXG4gIGdldCBkZWZhdWx0U3R5bGUoKSB7XG4gICAgcmV0dXJuIG5ldyBTdHlsZSh7XG4gICAgICBcImJhY2tncm91bmRDb2xvclwiOiBDb25zdGFudHMuU2V0dGluZy5TQ1JPTExCQVJfREVGQVVMVF9CQUNLR1JPVU5ELFxuICAgICAgXCJiYWNrZ3JvdW5kQ29sb3JIb3ZlclwiOiBDb25zdGFudHMuU2V0dGluZy5TQ1JPTExCQVJfREVGQVVMVF9IT1ZFUl9CQUNLR1JPVU5ELFxuICAgICAgXCJiYWNrZ3JvdW5kQ29sb3JEb3duXCI6IENvbnN0YW50cy5TZXR0aW5nLlNDUk9MTEJBUl9ERUZBVUxUX0NMSUNLX0JBQ0tHUk9VTkQsXG4gICAgICBcImJvcmRlclNpemVcIjogMFxuICAgIH0pO1xuICB9XG5cbiAgY29tcGFyZVRvQ29tcG9uZW50KG90aGVyQ29tcG9uZW50KSB7XG4gICAgcmV0dXJuIG90aGVyQ29tcG9uZW50LmNvbXBhcmVUb1Njcm9sbGJhcih0aGlzKTtcbiAgfVxuXG4gIGNvbXBhcmVUb1Njcm9sbGJhcihvdGhlckNvbXBvbmVudCkge1xuICAgIHJldHVybiAwO1xuICB9XG59IiwiLypcbiAqIENvcHlyaWdodCAoQykgMjAyMCBFbGlhc3RpayAoZWxpYXN0aWtzb2Z0cy5jb20pXG4gKlxuICogVGhpcyBmaWxlIGlzIHBhcnQgb2YgXCJKU0dhbWVUb29sc1wiLlxuICpcbiAqIFwiSlNHYW1lVG9vbHNcIiBpcyBmcmVlIHNvZnR3YXJlOiB5b3UgY2FuIHJlZGlzdHJpYnV0ZSBpdCBhbmQvb3IgbW9kaWZ5XG4gKiBpdCB1bmRlciB0aGUgdGVybXMgb2YgdGhlIEdOVSBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlIGFzIHB1Ymxpc2hlZCBieVxuICogdGhlIEZyZWUgU29mdHdhcmUgRm91bmRhdGlvbiwgZWl0aGVyIHZlcnNpb24gMyBvZiB0aGUgTGljZW5zZSwgb3JcbiAqIChhdCB5b3VyIG9wdGlvbikgYW55IGxhdGVyIHZlcnNpb24uXG4gKlxuICogXCJKU0dhbWVUb29sc1wiIGlzIGRpc3RyaWJ1dGVkIGluIHRoZSBob3BlIHRoYXQgaXQgd2lsbCBiZSB1c2VmdWwsXG4gKiBidXQgV0lUSE9VVCBBTlkgV0FSUkFOVFk7IHdpdGhvdXQgZXZlbiB0aGUgaW1wbGllZCB3YXJyYW50eSBvZlxuICogTUVSQ0hBTlRBQklMSVRZIG9yIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFLiAgU2VlIHRoZVxuICogR05VIEdlbmVyYWwgUHVibGljIExpY2Vuc2UgZm9yIG1vcmUgZGV0YWlscy5cbiAqXG4gKiBZb3Ugc2hvdWxkIGhhdmUgcmVjZWl2ZWQgYSBjb3B5IG9mIHRoZSBHTlUgR2VuZXJhbCBQdWJsaWMgTGljZW5zZVxuICogYWxvbmcgd2l0aCBcIkpTR2FtZVRvb2xzXCIuICBJZiBub3QsIHNlZSA8aHR0cDovL3d3dy5nbnUub3JnL2xpY2Vuc2VzLz4uXG4gKi9cbmltcG9ydCBTY3JvbGxiYXIgZnJvbSBcIi4vU2Nyb2xsYmFyXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFNjcm9sbGJhckhvcml6b250YWwgZXh0ZW5kcyBTY3JvbGxiYXIge1xuICBzZWxlY3RhYmxlID0gdHJ1ZTtcblxuICBjb25zdHJ1Y3RvcihzaXplLCBzdHlsZSwgcGFyZW50KSB7XG4gICAgc3VwZXIoc2l6ZSwgc3R5bGUsIHBhcmVudCk7XG5cbiAgICB0aGlzLmFkZE1vdmVBY3Rpb24oKGRlbHRhWCkgPT4ge1xuICAgICAgaWYodGhpcy5wYXJlbnQpIHtcbiAgICAgICAgdGhpcy5wYXJlbnQub2Zmc2V0U2Nyb2xsWCAtPSBkZWx0YVg7XG5cbiAgICAgICAgaWYodGhpcy5wYXJlbnQucmVhY3Rvcikge1xuICAgICAgICAgIHRoaXMucGFyZW50LnJlYWN0b3IuZGlzcGF0Y2hFdmVudChcIm9uU2Nyb2xsXCIsIC1kZWx0YVgsIDApO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSk7XG4gIH1cbiAgXG4gIGRyYXcoY29udGV4dCkge1xuICAgIGlmKHRoaXMuc2Nyb2xsQXJlYVNpemVYID4gMCkge1xuICAgICAgc3VwZXIuZHJhdyhjb250ZXh0KTtcbiAgICB9XG4gIH1cblxuICBnZXQgaGVpZ2h0KCkge1xuICAgIHJldHVybiB0aGlzLnNpemU7XG4gIH1cblxuICBnZXQgeSgpIHtcbiAgICByZXR1cm4gdGhpcy5wYXJlbnQgPyB0aGlzLnBhcmVudC55ICsgdGhpcy5wYXJlbnQuaGVpZ2h0IC0gdGhpcy5zaXplIDogbnVsbDtcbiAgfVxufSIsIi8qXG4gKiBDb3B5cmlnaHQgKEMpIDIwMjAgRWxpYXN0aWsgKGVsaWFzdGlrc29mdHMuY29tKVxuICpcbiAqIFRoaXMgZmlsZSBpcyBwYXJ0IG9mIFwiSlNHYW1lVG9vbHNcIi5cbiAqXG4gKiBcIkpTR2FtZVRvb2xzXCIgaXMgZnJlZSBzb2Z0d2FyZTogeW91IGNhbiByZWRpc3RyaWJ1dGUgaXQgYW5kL29yIG1vZGlmeVxuICogaXQgdW5kZXIgdGhlIHRlcm1zIG9mIHRoZSBHTlUgR2VuZXJhbCBQdWJsaWMgTGljZW5zZSBhcyBwdWJsaXNoZWQgYnlcbiAqIHRoZSBGcmVlIFNvZnR3YXJlIEZvdW5kYXRpb24sIGVpdGhlciB2ZXJzaW9uIDMgb2YgdGhlIExpY2Vuc2UsIG9yXG4gKiAoYXQgeW91ciBvcHRpb24pIGFueSBsYXRlciB2ZXJzaW9uLlxuICpcbiAqIFwiSlNHYW1lVG9vbHNcIiBpcyBkaXN0cmlidXRlZCBpbiB0aGUgaG9wZSB0aGF0IGl0IHdpbGwgYmUgdXNlZnVsLFxuICogYnV0IFdJVEhPVVQgQU5ZIFdBUlJBTlRZOyB3aXRob3V0IGV2ZW4gdGhlIGltcGxpZWQgd2FycmFudHkgb2ZcbiAqIE1FUkNIQU5UQUJJTElUWSBvciBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRS4gIFNlZSB0aGVcbiAqIEdOVSBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlIGZvciBtb3JlIGRldGFpbHMuXG4gKlxuICogWW91IHNob3VsZCBoYXZlIHJlY2VpdmVkIGEgY29weSBvZiB0aGUgR05VIEdlbmVyYWwgUHVibGljIExpY2Vuc2VcbiAqIGFsb25nIHdpdGggXCJKU0dhbWVUb29sc1wiLiAgSWYgbm90LCBzZWUgPGh0dHA6Ly93d3cuZ251Lm9yZy9saWNlbnNlcy8+LlxuICovXG5pbXBvcnQgU2Nyb2xsYmFyIGZyb20gXCIuL1Njcm9sbGJhclwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTY3JvbGxiYXJWZXJ0aWNhbCBleHRlbmRzIFNjcm9sbGJhciB7XG4gIHNlbGVjdGFibGUgPSB0cnVlO1xuXG4gIGNvbnN0cnVjdG9yKHNpemUsIHN0eWxlLCBwYXJlbnQpIHtcbiAgICBzdXBlcihzaXplLCBzdHlsZSwgcGFyZW50KTtcbiAgICBcbiAgICB0aGlzLmFkZE1vdmVBY3Rpb24oKGRlbHRhWCwgZGVsdGFZKSA9PiB7XG4gICAgICBpZih0aGlzLnBhcmVudCkge1xuICAgICAgICB0aGlzLnBhcmVudC5vZmZzZXRTY3JvbGxZIC09IGRlbHRhWTtcblxuICAgICAgICBpZih0aGlzLnBhcmVudC5yZWFjdG9yKSB7XG4gICAgICAgICAgdGhpcy5wYXJlbnQucmVhY3Rvci5kaXNwYXRjaEV2ZW50KFwib25TY3JvbGxcIiwgMCwgLWRlbHRhWSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuICBcbiAgZHJhdyhjb250ZXh0KSB7XG4gICAgaWYodGhpcy5zY3JvbGxBcmVhU2l6ZVkgPiAwKSB7XG4gICAgICBzdXBlci5kcmF3KGNvbnRleHQpO1xuICAgIH1cbiAgfVxuXG4gIGdldCB3aWR0aCgpIHtcbiAgICByZXR1cm4gdGhpcy5zaXplO1xuICB9XG5cbiAgZ2V0IHgoKSB7XG4gICAgcmV0dXJuIHRoaXMucGFyZW50ID8gdGhpcy5wYXJlbnQueCArIHRoaXMucGFyZW50LndpZHRoIC0gdGhpcy5zaXplIDogMDtcbiAgfVxufSIsIi8qXG4gKiBDb3B5cmlnaHQgKEMpIDIwMjAgRWxpYXN0aWsgKGVsaWFzdGlrc29mdHMuY29tKVxuICpcbiAqIFRoaXMgZmlsZSBpcyBwYXJ0IG9mIFwiSlNHYW1lVG9vbHNcIi5cbiAqXG4gKiBcIkpTR2FtZVRvb2xzXCIgaXMgZnJlZSBzb2Z0d2FyZTogeW91IGNhbiByZWRpc3RyaWJ1dGUgaXQgYW5kL29yIG1vZGlmeVxuICogaXQgdW5kZXIgdGhlIHRlcm1zIG9mIHRoZSBHTlUgR2VuZXJhbCBQdWJsaWMgTGljZW5zZSBhcyBwdWJsaXNoZWQgYnlcbiAqIHRoZSBGcmVlIFNvZnR3YXJlIEZvdW5kYXRpb24sIGVpdGhlciB2ZXJzaW9uIDMgb2YgdGhlIExpY2Vuc2UsIG9yXG4gKiAoYXQgeW91ciBvcHRpb24pIGFueSBsYXRlciB2ZXJzaW9uLlxuICpcbiAqIFwiSlNHYW1lVG9vbHNcIiBpcyBkaXN0cmlidXRlZCBpbiB0aGUgaG9wZSB0aGF0IGl0IHdpbGwgYmUgdXNlZnVsLFxuICogYnV0IFdJVEhPVVQgQU5ZIFdBUlJBTlRZOyB3aXRob3V0IGV2ZW4gdGhlIGltcGxpZWQgd2FycmFudHkgb2ZcbiAqIE1FUkNIQU5UQUJJTElUWSBvciBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRS4gIFNlZSB0aGVcbiAqIEdOVSBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlIGZvciBtb3JlIGRldGFpbHMuXG4gKlxuICogWW91IHNob3VsZCBoYXZlIHJlY2VpdmVkIGEgY29weSBvZiB0aGUgR05VIEdlbmVyYWwgUHVibGljIExpY2Vuc2VcbiAqIGFsb25nIHdpdGggXCJKU0dhbWVUb29sc1wiLiAgSWYgbm90LCBzZWUgPGh0dHA6Ly93d3cuZ251Lm9yZy9saWNlbnNlcy8+LlxuICovXG5pbXBvcnQgTGFiZWwgZnJvbSBcIi4vTGFiZWxcIjtcbmltcG9ydCBCdXR0b24gZnJvbSBcIi4vQnV0dG9uXCI7XG5pbXBvcnQgVHJpYW5nbGUgZnJvbSBcIi4vVHJpYW5nbGVcIjtcbmltcG9ydCBTdHlsZSBmcm9tIFwiLi9TdHlsZVwiO1xuaW1wb3J0IENvbnN0YW50cyBmcm9tIFwiLi9Db25zdGFudHNcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU2VsZWN0IGV4dGVuZHMgQnV0dG9uIHtcbiAgI193aWR0aCA9IDA7XG5cbiAgY29uc3RydWN0b3IoeCwgeSwgbWF4V2lkdGgsIG1heEhlaWdodCwgc3R5bGUsIG9wdGlvbkNvbnRhaW5lciwgZGVmYXVsdE9wdGlvbikge1xuICAgIHN1cGVyKHgsIHksIG1heFdpZHRoLCBtYXhIZWlnaHQsIHN0eWxlKTtcblxuICAgIHRoaXMub3B0aW9uQ29udGFpbmVyID0gb3B0aW9uQ29udGFpbmVyO1xuICAgIGlmKGRlZmF1bHRPcHRpb24pIHRoaXMuc2VsZWN0ZWRPcHRpb24gPSBkZWZhdWx0T3B0aW9uO1xuXG4gICAgdGhpcy5sYWJlbCA9IG5ldyBMYWJlbChcIlwiLCB4LCB5LCBzdHlsZSk7XG4gICAgdGhpcy5sYWJlbC5zdHlsZS5zZXRBbGwoeyBcImFsaWduZW1lbnRcIjogQ29uc3RhbnRzLkFsaWduZW1lbnQuTEVGVCwgXCJ2ZXJ0aWNhbEFsaWduZW1lbnRcIjogQ29uc3RhbnRzLlZlcnRpY2FsQWxpZ25lbWVudC5DRU5URVIgfSk7XG4gICAgdGhpcy50cmlhbmdsZSA9IG5ldyBUcmlhbmdsZShudWxsLCBudWxsLCA4LCA4LCBzdHlsZSk7XG4gICAgdGhpcy50cmlhbmdsZS5zdHlsZS5zZXRBbGwoeyBcImFsaWduZW1lbnRcIjogQ29uc3RhbnRzLkFsaWduZW1lbnQuUklHSFQsIFwidmVydGljYWxBbGlnbmVtZW50XCI6IENvbnN0YW50cy5WZXJ0aWNhbEFsaWduZW1lbnQuQ0VOVEVSIH0pO1xuXG4gICAgdGhpcy5hZGRBbGwodGhpcy5sYWJlbCwgdGhpcy50cmlhbmdsZSk7XG5cbiAgICB0aGlzLmFkZENsaWNrQWN0aW9uKCgpID0+IHtcbiAgICAgIGlmKHRoaXMub3B0aW9uQ29udGFpbmVyKSB7XG4gICAgICAgIHRoaXMub3B0aW9uQ29udGFpbmVyLmhpZGRlbiA9IGZhbHNlO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgaWYoIUNvbnN0YW50cy5TZXR0aW5nLkRJU0FCTEVfRVhQRVJJTUVOVEFMX09QVElNSVpBVElPTlMpIHtcbiAgICAgIHRoaXMudXBkYXRlV2lkdGgoKTtcbiAgICAgIHRoaXMuYWRkQ2hhbmdlQWN0aW9uKCgpID0+IHRoaXMudXBkYXRlV2lkdGgoKSk7XG4gICAgfVxuICB9XG5cbiAgZHJhdyhjb250ZXh0KSB7XG4gICAgaWYodGhpcy5oaWRkZW4pIHJldHVybjtcbiAgICBpZih0aGlzLnNlbGVjdGVkT3B0aW9uICYmIHRoaXMuc2VsZWN0ZWRPcHRpb24ubGFiZWwpIHtcbiAgICAgIHRoaXMubGFiZWwudGV4dCA9IHRoaXMuc2VsZWN0ZWRPcHRpb24ubGFiZWwudGV4dDtcbiAgICB9XG5cbiAgICBzdXBlci5kcmF3KGNvbnRleHQpO1xuXG4gICAgaWYodGhpcy5vcHRpb25Db250YWluZXIpIHtcbiAgICAgIHRoaXMub3B0aW9uQ29udGFpbmVyLnNlbGVjdCA9IHRoaXM7XG4gICAgfVxuICB9XG5cbiAgZ2V0IHNlbGVjdGVkT3B0aW9uKCkge1xuICAgIHJldHVybiB0aGlzLm9wdGlvbkNvbnRhaW5lciA/IHRoaXMub3B0aW9uQ29udGFpbmVyLmNvbXBvbmVudHNbdGhpcy5vcHRpb25Db250YWluZXIuc2VsZWN0ZWRPcHRpb25dIDogbnVsbDtcbiAgfVxuXG4gIHNldCBzZWxlY3RlZE9wdGlvbihpZCkge1xuICAgIGlmKGlkICE9IHRoaXMub3B0aW9uQ29udGFpbmVyLnNlbGVjdGVkT3B0aW9uKSB7XG4gICAgICB0aGlzLm9wdGlvbkNvbnRhaW5lci5zZWxlY3RlZE9wdGlvbiA9IGlkO1xuICAgICAgdGhpcy5yZWFjdG9yLmRpc3BhdGNoRXZlbnQoXCJvbkNoYW5nZVwiLCB0aGlzKTtcbiAgICB9XG4gIH1cblxuICBnZXQgdGV4dCgpIHtcbiAgICByZXR1cm4gdGhpcy5zZWxlY3RlZE9wdGlvbiAmJiB0aGlzLnNlbGVjdGVkT3B0aW9uLmxhYmVsID8gdGhpcy5zZWxlY3RlZE9wdGlvbi5sYWJlbC50ZXh0IDogbnVsbDtcbiAgfVxuXG4gIHVwZGF0ZVdpZHRoKCkge1xuICAgIGxldCBtYXhXaWR0aCA9IHRoaXMubGFiZWwud2lkdGg7XG5cbiAgICBpZih0aGlzLm9wdGlvbkNvbnRhaW5lcikge1xuICAgICAgdGhpcy5vcHRpb25Db250YWluZXIuY29tcG9uZW50cy5mb3JFYWNoKGNvbXBvbmVudCA9PiB7XG4gICAgICAgIGNvbnN0IGxhYmVsID0gY29tcG9uZW50LmxhYmVsO1xuXG4gICAgICAgIGlmKGxhYmVsKSB7XG4gICAgICAgICAgaWYobGFiZWwudXBkYXRlU2l6ZXMpIGxhYmVsLnVwZGF0ZVNpemVzKCk7XG4gICAgICAgICAgaWYobGFiZWwud2lkdGggPiBtYXhXaWR0aCkgbWF4V2lkdGggPSBsYWJlbC53aWR0aDtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgdGhpcy4jX3dpZHRoID0gbWF4V2lkdGggKyB0aGlzLnN0eWxlLnBhZGRpbmcgKyB0aGlzLnRyaWFuZ2xlLndpZHRoICsgMTU7XG4gIH1cblxuICBnZXQgd2lkdGgoKSB7XG4gICAgaWYoQ29uc3RhbnRzLlNldHRpbmcuRElTQUJMRV9FWFBFUklNRU5UQUxfT1BUSU1JWkFUSU9OUykgdGhpcy51cGRhdGVXaWR0aCgpO1xuICAgIHJldHVybiB0aGlzLiNfd2lkdGg7XG4gIH1cblxuICBnZXQgYWxsQ29tcG9uZW50cygpIHtcbiAgICBjb25zdCBjb21wb25lbnRzID0gW107XG4gICAgY29tcG9uZW50cy5wdXNoKC4uLnN1cGVyLmFsbENvbXBvbmVudHMpO1xuICAgIHJldHVybiBjb21wb25lbnRzO1xuICB9XG5cbiAgZ2V0IGRlZmF1bHRTdHlsZSgpIHtcbiAgICByZXR1cm4gbmV3IFN0eWxlKHtcbiAgICAgIFwiYmFja2dyb3VuZENvbG9yXCI6IENvbnN0YW50cy5TZXR0aW5nLlNFTEVDVF9ERUZBVUxUX0JBQ0tHUk9VTkQsXG4gICAgICBcImJhY2tncm91bmRDb2xvckhvdmVyXCI6IENvbnN0YW50cy5TZXR0aW5nLlNFTEVDVF9ERUZBVUxUX0hPVkVSX0JBQ0tHUk9VTkQsXG4gICAgICBcImJhY2tncm91bmRDb2xvckRvd25cIjogQ29uc3RhbnRzLlNldHRpbmcuU0VMRUNUX0RFRkFVTFRfQ0xJQ0tfQkFDS0dST1VORCxcbiAgICAgIFwicGFkZGluZ1wiOiBDb25zdGFudHMuU2V0dGluZy5ERUZBVUxUX1BBRERJTkdcbiAgICB9KTtcbiAgfVxufSIsIi8qXG4gKiBDb3B5cmlnaHQgKEMpIDIwMjAgRWxpYXN0aWsgKGVsaWFzdGlrc29mdHMuY29tKVxuICpcbiAqIFRoaXMgZmlsZSBpcyBwYXJ0IG9mIFwiSlNHYW1lVG9vbHNcIi5cbiAqXG4gKiBcIkpTR2FtZVRvb2xzXCIgaXMgZnJlZSBzb2Z0d2FyZTogeW91IGNhbiByZWRpc3RyaWJ1dGUgaXQgYW5kL29yIG1vZGlmeVxuICogaXQgdW5kZXIgdGhlIHRlcm1zIG9mIHRoZSBHTlUgR2VuZXJhbCBQdWJsaWMgTGljZW5zZSBhcyBwdWJsaXNoZWQgYnlcbiAqIHRoZSBGcmVlIFNvZnR3YXJlIEZvdW5kYXRpb24sIGVpdGhlciB2ZXJzaW9uIDMgb2YgdGhlIExpY2Vuc2UsIG9yXG4gKiAoYXQgeW91ciBvcHRpb24pIGFueSBsYXRlciB2ZXJzaW9uLlxuICpcbiAqIFwiSlNHYW1lVG9vbHNcIiBpcyBkaXN0cmlidXRlZCBpbiB0aGUgaG9wZSB0aGF0IGl0IHdpbGwgYmUgdXNlZnVsLFxuICogYnV0IFdJVEhPVVQgQU5ZIFdBUlJBTlRZOyB3aXRob3V0IGV2ZW4gdGhlIGltcGxpZWQgd2FycmFudHkgb2ZcbiAqIE1FUkNIQU5UQUJJTElUWSBvciBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRS4gIFNlZSB0aGVcbiAqIEdOVSBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlIGZvciBtb3JlIGRldGFpbHMuXG4gKlxuICogWW91IHNob3VsZCBoYXZlIHJlY2VpdmVkIGEgY29weSBvZiB0aGUgR05VIEdlbmVyYWwgUHVibGljIExpY2Vuc2VcbiAqIGFsb25nIHdpdGggXCJKU0dhbWVUb29sc1wiLiAgSWYgbm90LCBzZWUgPGh0dHA6Ly93d3cuZ251Lm9yZy9saWNlbnNlcy8+LlxuICovXG5pbXBvcnQgQnV0dG9uIGZyb20gXCIuL0J1dHRvblwiO1xuaW1wb3J0IENvbnN0YW50cyBmcm9tIFwiLi9Db25zdGFudHNcIjtcbmltcG9ydCBMYWJlbCBmcm9tIFwiLi9MYWJlbFwiO1xuaW1wb3J0IFN0eWxlIGZyb20gXCIuL1N0eWxlXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFNlbGVjdE9wdGlvbiBleHRlbmRzIEJ1dHRvbiB7XG4gIGNvbnN0cnVjdG9yKGxhYmVsLCBzdHlsZSkge1xuICAgIGNvbnN0IGRlZmF1bHRMYWJlbCA9IG5ldyBMYWJlbChcIk9wdGlvblwiKTtcbiAgICBzdXBlcihudWxsLCBudWxsLCBudWxsLCBudWxsLCBzdHlsZSwgbGFiZWwgfHwgZGVmYXVsdExhYmVsKTtcbiAgICB0aGlzLmxhYmVsID0gbGFiZWwgfHwgZGVmYXVsdExhYmVsO1xuICB9XG5cbiAgYWRkKGNvbXBvbmVudCkge1xuICAgIGlmKGNvbXBvbmVudCBpbnN0YW5jZW9mIExhYmVsKSB7XG4gICAgICB0aGlzLmNsZWFyKCk7XG4gICAgICBzdXBlci5hZGQoY29tcG9uZW50KTtcbiAgICB9XG4gIH1cblxuICBnZXQgd2lkdGgoKSB7XG4gICAgcmV0dXJuIHRoaXMucGFyZW50ICYmIHRoaXMucGFyZW50LndpZHRoO1xuICB9XG5cbiAgZ2V0IGRlZmF1bHRTdHlsZSgpIHtcbiAgICByZXR1cm4gbmV3IFN0eWxlKHtcbiAgICAgIFwiYmFja2dyb3VuZENvbG9yXCI6IENvbnN0YW50cy5TZXR0aW5nLlNFTEVDVF9ERUZBVUxUX0JBQ0tHUk9VTkQsXG4gICAgICBcImJhY2tncm91bmRDb2xvckhvdmVyXCI6IENvbnN0YW50cy5TZXR0aW5nLlNFTEVDVF9ERUZBVUxUX0hPVkVSX0JBQ0tHUk9VTkQsXG4gICAgICBcImJhY2tncm91bmRDb2xvckRvd25cIjogQ29uc3RhbnRzLlNldHRpbmcuU0VMRUNUX0RFRkFVTFRfQ0xJQ0tfQkFDS0dST1VORCxcbiAgICAgIFwicGFkZGluZ1wiOiBDb25zdGFudHMuU2V0dGluZy5ERUZBVUxUX1BBRERJTkdcbiAgICB9KTtcbiAgfVxufSIsIi8qXG4gKiBDb3B5cmlnaHQgKEMpIDIwMjAgRWxpYXN0aWsgKGVsaWFzdGlrc29mdHMuY29tKVxuICpcbiAqIFRoaXMgZmlsZSBpcyBwYXJ0IG9mIFwiSlNHYW1lVG9vbHNcIi5cbiAqXG4gKiBcIkpTR2FtZVRvb2xzXCIgaXMgZnJlZSBzb2Z0d2FyZTogeW91IGNhbiByZWRpc3RyaWJ1dGUgaXQgYW5kL29yIG1vZGlmeVxuICogaXQgdW5kZXIgdGhlIHRlcm1zIG9mIHRoZSBHTlUgR2VuZXJhbCBQdWJsaWMgTGljZW5zZSBhcyBwdWJsaXNoZWQgYnlcbiAqIHRoZSBGcmVlIFNvZnR3YXJlIEZvdW5kYXRpb24sIGVpdGhlciB2ZXJzaW9uIDMgb2YgdGhlIExpY2Vuc2UsIG9yXG4gKiAoYXQgeW91ciBvcHRpb24pIGFueSBsYXRlciB2ZXJzaW9uLlxuICpcbiAqIFwiSlNHYW1lVG9vbHNcIiBpcyBkaXN0cmlidXRlZCBpbiB0aGUgaG9wZSB0aGF0IGl0IHdpbGwgYmUgdXNlZnVsLFxuICogYnV0IFdJVEhPVVQgQU5ZIFdBUlJBTlRZOyB3aXRob3V0IGV2ZW4gdGhlIGltcGxpZWQgd2FycmFudHkgb2ZcbiAqIE1FUkNIQU5UQUJJTElUWSBvciBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRS4gIFNlZSB0aGVcbiAqIEdOVSBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlIGZvciBtb3JlIGRldGFpbHMuXG4gKlxuICogWW91IHNob3VsZCBoYXZlIHJlY2VpdmVkIGEgY29weSBvZiB0aGUgR05VIEdlbmVyYWwgUHVibGljIExpY2Vuc2VcbiAqIGFsb25nIHdpdGggXCJKU0dhbWVUb29sc1wiLiAgSWYgbm90LCBzZWUgPGh0dHA6Ly93d3cuZ251Lm9yZy9saWNlbnNlcy8+LlxuICovXG5pbXBvcnQgQ29sIGZyb20gXCIuL0NvbFwiO1xuaW1wb3J0IFN0eWxlIGZyb20gXCIuL1N0eWxlXCI7XG5pbXBvcnQgQ29uc3RhbnRzIGZyb20gXCIuL0NvbnN0YW50c1wiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTZWxlY3REcm9wZG93biBleHRlbmRzIENvbCB7XG4gICNfc2VsZWN0ZWRPcHRpb247XG5cbiAgY29uc3RydWN0b3IobWF4SGVpZ2h0RHJvcGRvd24sIHN0eWxlLCAuLi5vcHRpb25zKSB7XG4gICAgc3VwZXIobnVsbCwgbnVsbCwgbnVsbCwgbWF4SGVpZ2h0RHJvcGRvd24sIHN0eWxlLCAuLi5vcHRpb25zKTtcbiAgICB0aGlzLiNfc2VsZWN0ZWRPcHRpb24gPSAwO1xuICAgIHRoaXMuc2VsZWN0ID0gbnVsbDtcbiAgfVxuXG4gIGRyYXcoY29udGV4dCkge1xuICAgIHN1cGVyLmRyYXcoY29udGV4dCk7XG5cbiAgICBpZih0aGlzLnNlbGVjdGVkICYmIHRoaXMuc2VsZWN0ZWQpIHtcbiAgICAgIHRoaXMuc2VsZWN0LnNlbGVjdGVkID0gdHJ1ZTtcbiAgICB9XG4gIH1cblxuICBnZXQgeCgpIHtcbiAgICByZXR1cm4gdGhpcy5zZWxlY3QgJiYgdGhpcy5zZWxlY3QueDtcbiAgfVxuXG4gIGdldCB5KCkge1xuICAgIGNvbnN0IHNlbGVjdEhlaWdodCA9ICh0aGlzLnNlbGVjdCAmJiB0aGlzLnNlbGVjdC5oZWlnaHQpO1xuICAgIGNvbnN0IGhlaWdodCA9IHRoaXMuaGVpZ2h0O1xuICAgIGNvbnN0IHkgPSB0aGlzLnNlbGVjdCAmJiB0aGlzLnNlbGVjdC55O1xuXG4gICAgaWYodGhpcy5jYW52YXMgJiYgdGhpcy5jYW52YXMuc2NlbmUgJiYgeSArIHNlbGVjdEhlaWdodCArIGhlaWdodCA+PSB0aGlzLmNhbnZhcy5zY2VuZS5oZWlnaHQpIHtcbiAgICAgIHJldHVybiB5IC0gaGVpZ2h0O1xuICAgIH1cblxuICAgIHJldHVybiB5ICsgc2VsZWN0SGVpZ2h0O1xuICB9XG5cbiAgZ2V0IHdpZHRoKCkge1xuICAgIHJldHVybiB0aGlzLnNlbGVjdCAmJiB0aGlzLnNlbGVjdC53aWR0aDtcbiAgfVxuXG4gIGdldCBzZWxlY3RlZE9wdGlvbigpIHtcbiAgICByZXR1cm4gTWF0aC5tYXgoMCwgTWF0aC5taW4odGhpcy5jb21wb25lbnRzLmxlbmd0aCAtIDEsIHRoaXMuI19zZWxlY3RlZE9wdGlvbikpO1xuICB9XG5cbiAgc2V0IHNlbGVjdGVkT3B0aW9uKGlkKSB7XG4gICAgaWYoaWQgIT0gdGhpcy4jX3NlbGVjdGVkT3B0aW9uKSB7XG4gICAgICB0aGlzLiNfc2VsZWN0ZWRPcHRpb24gPSBpZDtcbiAgICAgIHRoaXMucmVhY3Rvci5kaXNwYXRjaEV2ZW50KFwib25DaGFuZ2VcIiwgdGhpcyk7XG4gICAgfVxuICB9XG5cbiAgYWRkKGNvbXBvbmVudCkge1xuICAgIHN1cGVyLmFkZChjb21wb25lbnQpO1xuXG4gICAgY29tcG9uZW50LmFkZENsaWNrQWN0aW9uKCgpID0+IHtcbiAgICAgIHRoaXMuI19zZWxlY3RlZE9wdGlvbiA9IHRoaXMuZ2V0Q29tcG9uZW50SWQoY29tcG9uZW50KTtcbiAgICAgIHRoaXMuc2VsZWN0ZWQgPSBmYWxzZTtcbiAgICAgIHRoaXMuaGlkZGVuID0gdHJ1ZTtcbiAgICAgIGlmKHRoaXMuc2VsZWN0KSB0aGlzLnNlbGVjdC5zZWxlY3RlZCA9IGZhbHNlO1xuICAgIH0pO1xuICB9XG5cbiAgZ2V0IGRlZmF1bHRTdHlsZSgpIHtcbiAgICByZXR1cm4gbmV3IFN0eWxlKHtcbiAgICAgIFwicGFkZGluZ1wiOiAwLFxuICAgICAgXCJzcGFjZUJldHdlZW5Db21wb25lbnRzXCI6IDAsXG4gICAgICBcImJhY2tncm91bmRDb2xvclwiOiBDb25zdGFudHMuU2V0dGluZy5TRUxFQ1RfREVGQVVMVF9CQUNLR1JPVU5ELFxuICAgICAgXCJiYWNrZ3JvdW5kQ29sb3JIb3ZlclwiOiBudWxsLFxuICAgICAgXCJiYWNrZ3JvdW5kQ29sb3JEb3duXCI6IG51bGwsXG4gICAgICBcInNjcm9sbFhEaXNhYmxlZFwiOiBmYWxzZSxcbiAgICAgIFwic2Nyb2xsWURpc2FibGVkXCI6IGZhbHNlXG4gICAgfSk7XG4gIH1cblxuICBnZXQgaGlkZGVuKCkge1xuICAgIHJldHVybiBzdXBlci5oaWRkZW4gfHwgKHRoaXMuc2VsZWN0ICYmICF0aGlzLnNlbGVjdC5zZWxlY3RlZCkgfHwgIXRoaXMuc2VsZWN0O1xuICB9XG5cbiAgc2V0IGhpZGRlbihoaWRkZW4pIHtcbiAgICByZXR1cm4gc3VwZXIuaGlkZGVuID0gaGlkZGVuO1xuICB9XG5cbiAgZ2V0IHNlbGVjdGVkKCkge1xuICAgIHJldHVybiBzdXBlci5zZWxlY3RlZCB8fCAodGhpcy5zZWxlY3QgJiYgdGhpcy5zZWxlY3Quc2VsZWN0ZWQpO1xuICB9XG5cbiAgc2V0IHNlbGVjdGVkKHNlbGVjdGVkKSB7XG4gICAgc3VwZXIuc2VsZWN0ZWQgPSBzZWxlY3RlZDtcbiAgfVxufSIsIi8qXG4gKiBDb3B5cmlnaHQgKEMpIDIwMjAgRWxpYXN0aWsgKGVsaWFzdGlrc29mdHMuY29tKVxuICpcbiAqIFRoaXMgZmlsZSBpcyBwYXJ0IG9mIFwiSlNHYW1lVG9vbHNcIi5cbiAqXG4gKiBcIkpTR2FtZVRvb2xzXCIgaXMgZnJlZSBzb2Z0d2FyZTogeW91IGNhbiByZWRpc3RyaWJ1dGUgaXQgYW5kL29yIG1vZGlmeVxuICogaXQgdW5kZXIgdGhlIHRlcm1zIG9mIHRoZSBHTlUgR2VuZXJhbCBQdWJsaWMgTGljZW5zZSBhcyBwdWJsaXNoZWQgYnlcbiAqIHRoZSBGcmVlIFNvZnR3YXJlIEZvdW5kYXRpb24sIGVpdGhlciB2ZXJzaW9uIDMgb2YgdGhlIExpY2Vuc2UsIG9yXG4gKiAoYXQgeW91ciBvcHRpb24pIGFueSBsYXRlciB2ZXJzaW9uLlxuICpcbiAqIFwiSlNHYW1lVG9vbHNcIiBpcyBkaXN0cmlidXRlZCBpbiB0aGUgaG9wZSB0aGF0IGl0IHdpbGwgYmUgdXNlZnVsLFxuICogYnV0IFdJVEhPVVQgQU5ZIFdBUlJBTlRZOyB3aXRob3V0IGV2ZW4gdGhlIGltcGxpZWQgd2FycmFudHkgb2ZcbiAqIE1FUkNIQU5UQUJJTElUWSBvciBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRS4gIFNlZSB0aGVcbiAqIEdOVSBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlIGZvciBtb3JlIGRldGFpbHMuXG4gKlxuICogWW91IHNob3VsZCBoYXZlIHJlY2VpdmVkIGEgY29weSBvZiB0aGUgR05VIEdlbmVyYWwgUHVibGljIExpY2Vuc2VcbiAqIGFsb25nIHdpdGggXCJKU0dhbWVUb29sc1wiLiAgSWYgbm90LCBzZWUgPGh0dHA6Ly93d3cuZ251Lm9yZy9saWNlbnNlcy8+LlxuICovXG5pbXBvcnQgQ29uc3RhbnRzIGZyb20gXCIuL0NvbnN0YW50c1wiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTdHlsZSB7XG4gICNzdHlsZXMgPSB7fTtcbiAgY29tcG9uZW50O1xuXG4gIGNvbnN0cnVjdG9yKHN0eWxlcykge1xuICAgIHRoaXMuc2V0QWxsKHN0eWxlcyk7XG4gIH1cblxuICBnZXQgZm9udENvbG9yKCkge1xuICAgIHJldHVybiB0aGlzLiNzdHlsZXMuZm9udENvbG9yO1xuICB9XG5cbiAgZ2V0IGZvbnRDb2xvckhvdmVyKCkge1xuICAgIHJldHVybiB0aGlzLiNzdHlsZXMuZm9udENvbG9ySG92ZXI7XG4gIH1cblxuICBnZXQgZm9udENvbG9yRG93bigpIHtcbiAgICByZXR1cm4gdGhpcy4jc3R5bGVzLmZvbnRDb2xvckRvd247XG4gIH1cblxuICBnZXQgZm9udEZhbWlseSgpIHtcbiAgICByZXR1cm4gdGhpcy4jc3R5bGVzLmZvbnRGYW1pbHkgIT0gbnVsbCA/IHRoaXMuI3N0eWxlcy5mb250RmFtaWx5IDogQ29uc3RhbnRzLlNldHRpbmcuRk9OVF9GQU1JTFk7XG4gIH1cblxuICBnZXQgZm9udFNpemUoKSB7XG4gICAgcmV0dXJuIHRoaXMuI3N0eWxlcy5mb250U2l6ZSAhPSBudWxsID8gdGhpcy4jc3R5bGVzLmZvbnRTaXplIDogQ29uc3RhbnRzLlNldHRpbmcuRk9OVF9TSVpFO1xuICB9XG5cbiAgZ2V0IGJvbGQoKSB7XG4gICAgcmV0dXJuIHRoaXMuI3N0eWxlcy5ib2xkO1xuICB9XG5cbiAgZ2V0IHVuZGVybGluZSgpIHtcbiAgICByZXR1cm4gdGhpcy4jc3R5bGVzLnVuZGVybGluZTtcbiAgfVxuXG4gIGdldCB3cmFwKCkge1xuICAgIHJldHVybiB0aGlzLiNzdHlsZXMud3JhcDtcbiAgfVxuXG4gIGdldCBiYWNrZ3JvdW5kQ29sb3IoKSB7XG4gICAgcmV0dXJuIHRoaXMuI3N0eWxlcy5iYWNrZ3JvdW5kQ29sb3I7XG4gIH1cblxuICBnZXQgZm9yZWdyb3VuZENvbG9yKCkge1xuICAgIHJldHVybiB0aGlzLiNzdHlsZXMuZm9yZWdyb3VuZENvbG9yO1xuICB9XG5cbiAgZ2V0IGJhY2tncm91bmRDb2xvckhvdmVyKCkge1xuICAgIHJldHVybiB0aGlzLiNzdHlsZXMuYmFja2dyb3VuZENvbG9ySG92ZXI7XG4gIH1cblxuICBnZXQgYmFja2dyb3VuZENvbG9yRG93bigpIHtcbiAgICByZXR1cm4gdGhpcy4jc3R5bGVzLmJhY2tncm91bmRDb2xvckRvd247XG4gIH1cblxuICBnZXQgYm9yZGVyQ29sb3IoKSB7XG4gICAgcmV0dXJuIHRoaXMuI3N0eWxlcy5ib3JkZXJDb2xvcjtcbiAgfVxuXG4gIGdldCBib3JkZXJDb2xvckhvdmVyKCkge1xuICAgIHJldHVybiB0aGlzLiNzdHlsZXMuYm9yZGVyQ29sb3JIb3ZlcjtcbiAgfVxuXG4gIGdldCBib3JkZXJDb2xvckRvd24oKSB7XG4gICAgcmV0dXJuIHRoaXMuI3N0eWxlcy5ib3JkZXJDb2xvckRvd247XG4gIH1cblxuICBnZXQgYm9yZGVyQ29sb3JTZWxlY3RlZCgpIHtcbiAgICByZXR1cm4gdGhpcy4jc3R5bGVzLmJvcmRlckNvbG9yU2VsZWN0ZWQgIT0gbnVsbCA/IHRoaXMuI3N0eWxlcy5ib3JkZXJDb2xvclNlbGVjdGVkIDogQ29uc3RhbnRzLlNldHRpbmcuREVGQVVMVF9CT1JERVJfQ09MT1JfU0VMRUNURUQ7XG4gIH1cblxuICBnZXQgYm9yZGVyU2l6ZSgpIHtcbiAgICByZXR1cm4gdGhpcy4jc3R5bGVzLmJvcmRlclNpemUgIT0gbnVsbCA/IHRoaXMuI3N0eWxlcy5ib3JkZXJTaXplIDogQ29uc3RhbnRzLlNldHRpbmcuREVGQVVMVF9CT1JERVJfU0laRTtcbiAgfVxuXG4gIGdldCBzZWxlY3RDb2xvcigpIHtcbiAgICByZXR1cm4gdGhpcy4jc3R5bGVzLnNlbGVjdENvbG9yO1xuICB9XG5cbiAgZ2V0IGFsaWduZW1lbnQoKSB7XG4gICAgcmV0dXJuIHRoaXMuI3N0eWxlcy5hbGlnbmVtZW50O1xuICB9XG5cbiAgZ2V0IHZlcnRpY2FsQWxpZ25lbWVudCgpIHtcbiAgICByZXR1cm4gdGhpcy4jc3R5bGVzLnZlcnRpY2FsQWxpZ25lbWVudDtcbiAgfVxuXG4gIGdldCBkaXNhYmxlQW5pbWF0aW9uKCkge1xuICAgIHJldHVybiB0aGlzLiNzdHlsZXMuZGlzYWJsZUFuaW1hdGlvbjtcbiAgfVxuXG4gIGdldCBzY3JvbGxYRGlzYWJsZWQoKSB7XG4gICAgcmV0dXJuIHRoaXMuI3N0eWxlcy5zY3JvbGxYRGlzYWJsZWQ7XG4gIH1cblxuICBnZXQgc2Nyb2xsWURpc2FibGVkKCkge1xuICAgIHJldHVybiB0aGlzLiNzdHlsZXMuc2Nyb2xsWURpc2FibGVkO1xuICB9XG5cbiAgZ2V0IHBhZGRpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMuI3N0eWxlcy5wYWRkaW5nICE9IG51bGwgPyB0aGlzLiNzdHlsZXMucGFkZGluZyA6IENvbnN0YW50cy5TZXR0aW5nLkRFRkFVTFRfUEFERElORztcbiAgfVxuXG4gIGdldCBzcGFjZUJldHdlZW5Db21wb25lbnRzKCkge1xuICAgIHJldHVybiB0aGlzLiNzdHlsZXMuc3BhY2VCZXR3ZWVuQ29tcG9uZW50cyAhPSBudWxsID8gdGhpcy4jc3R5bGVzLnNwYWNlQmV0d2VlbkNvbXBvbmVudHMgOiBDb25zdGFudHMuU2V0dGluZy5ERUZBVUxUX1NQQUNJTkc7XG4gIH1cblxuICBnZXQgaGlkZGVuKCkge1xuICAgIHJldHVybiB0aGlzLiNzdHlsZXMuaGlkZGVuO1xuICB9XG5cbiAgZ2V0IGJsdXJCYWNrZ3JvdW5kKCkge1xuICAgIHJldHVybiB0aGlzLiNzdHlsZXMuYmx1ckJhY2tncm91bmQ7XG4gIH1cblxuICBnZXQgbGluZVdpZHRoKCkge1xuICAgIHJldHVybiB0aGlzLiNzdHlsZXMubGluZVdpZHRoO1xuICB9XG5cbiAgZ2V0IGFuaW1hdGlvbkR1cmF0aW9uKCkge1xuICAgIHJldHVybiB0aGlzLiNzdHlsZXMuYW5pbWF0aW9uRHVyYXRpb24gIT0gbnVsbCA/IHRoaXMuI3N0eWxlcy5hbmltYXRpb25EdXJhdGlvbiA6IENvbnN0YW50cy5TZXR0aW5nLkRFRkFVTFRfQU5JTUFUSU9OX0RVUkFUSU9OO1xuICB9XG5cbiAgZ2V0IGZvcmVncm91bmQoKSB7XG4gICAgcmV0dXJuIHRoaXMuI3N0eWxlcy5mb3JlZ3JvdW5kO1xuICB9XG5cbiAgZ2V0IHpJbmRleCgpIHtcbiAgICByZXR1cm4gdGhpcy4jc3R5bGVzLnpJbmRleCAhPSBudWxsID8gdGhpcy4jc3R5bGVzLnpJbmRleCA6IDA7XG4gIH1cbiAgXG4gIGdldCBsaW5lQ2FwKCkge1xuICAgIHJldHVybiB0aGlzLiNzdHlsZXMubGluZUNhcDtcbiAgfVxuICBcbiAgZ2V0IGZpbGwoKSB7XG4gICAgcmV0dXJuIHRoaXMuI3N0eWxlcy5maWxsO1xuICB9XG5cbiAgZ2V0IGZpbGxDb2xvcigpIHtcbiAgICByZXR1cm4gdGhpcy4jc3R5bGVzLmZpbGxDb2xvcjtcbiAgfVxuXG4gIGdldCBjb2xvcigpIHtcbiAgICByZXR1cm4gdGhpcy4jc3R5bGVzLmNvbG9yO1xuICB9XG5cbiAgZ2V0IG1vdmFibGUoKSB7XG4gICAgcmV0dXJuIHRoaXMuI3N0eWxlcy5tb3ZhYmxlIHx8IGZhbHNlO1xuICB9XG5cbiAgc2V0KHN0eWxlLCB2YWx1ZSkge1xuICAgIGlmKHRoaXMuI3N0eWxlc1tzdHlsZV0gIT0gdmFsdWUpIHtcbiAgICAgIHRoaXMuI3N0eWxlc1tzdHlsZV0gPSB2YWx1ZTtcbiAgICAgIGlmKHRoaXMuY29tcG9uZW50ICYmIHRoaXMuY29tcG9uZW50LnJlYWN0b3IpIHRoaXMuY29tcG9uZW50LnJlYWN0b3IuZGlzcGF0Y2hFdmVudChcIm9uQ2hhbmdlXCIsIHRoaXMpO1xuICAgIH1cbiAgfVxuXG4gIHNldEFsbChzdHlsZXMpIHtcbiAgICBpZihzdHlsZXMpIHtcbiAgICAgIGZvcihjb25zdCBzdHlsZSBpbiBzdHlsZXMpIHtcbiAgICAgICAgaWYoc3R5bGVzLmhhc093blByb3BlcnR5KHN0eWxlKSkge1xuICAgICAgICAgIHRoaXMuc2V0KHN0eWxlLCBzdHlsZXNbc3R5bGVdKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIGNvcHkoKSB7XG4gICAgcmV0dXJuIG5ldyBTdHlsZSh0aGlzLiNzdHlsZXMpO1xuICB9XG5cbiAgZ2V0U3R5bGVzKCkge1xuICAgIGNvbnN0IHN0eWxlcyA9IHt9O1xuXG4gICAgZm9yKGNvbnN0IHN0eWxlIGluIHRoaXMuI3N0eWxlcykge1xuICAgICAgaWYodGhpcy4jc3R5bGVzLmhhc093blByb3BlcnR5KHN0eWxlKSkge1xuICAgICAgICBzdHlsZXNbc3R5bGVdID0gdGhpcy4jc3R5bGVzW3N0eWxlXTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gc3R5bGVzO1xuICB9XG59IiwiLypcbiAqIENvcHlyaWdodCAoQykgMjAyMCBFbGlhc3RpayAoZWxpYXN0aWtzb2Z0cy5jb20pXG4gKlxuICogVGhpcyBmaWxlIGlzIHBhcnQgb2YgXCJKU0dhbWVUb29sc1wiLlxuICpcbiAqIFwiSlNHYW1lVG9vbHNcIiBpcyBmcmVlIHNvZnR3YXJlOiB5b3UgY2FuIHJlZGlzdHJpYnV0ZSBpdCBhbmQvb3IgbW9kaWZ5XG4gKiBpdCB1bmRlciB0aGUgdGVybXMgb2YgdGhlIEdOVSBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlIGFzIHB1Ymxpc2hlZCBieVxuICogdGhlIEZyZWUgU29mdHdhcmUgRm91bmRhdGlvbiwgZWl0aGVyIHZlcnNpb24gMyBvZiB0aGUgTGljZW5zZSwgb3JcbiAqIChhdCB5b3VyIG9wdGlvbikgYW55IGxhdGVyIHZlcnNpb24uXG4gKlxuICogXCJKU0dhbWVUb29sc1wiIGlzIGRpc3RyaWJ1dGVkIGluIHRoZSBob3BlIHRoYXQgaXQgd2lsbCBiZSB1c2VmdWwsXG4gKiBidXQgV0lUSE9VVCBBTlkgV0FSUkFOVFk7IHdpdGhvdXQgZXZlbiB0aGUgaW1wbGllZCB3YXJyYW50eSBvZlxuICogTUVSQ0hBTlRBQklMSVRZIG9yIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFLiAgU2VlIHRoZVxuICogR05VIEdlbmVyYWwgUHVibGljIExpY2Vuc2UgZm9yIG1vcmUgZGV0YWlscy5cbiAqXG4gKiBZb3Ugc2hvdWxkIGhhdmUgcmVjZWl2ZWQgYSBjb3B5IG9mIHRoZSBHTlUgR2VuZXJhbCBQdWJsaWMgTGljZW5zZVxuICogYWxvbmcgd2l0aCBcIkpTR2FtZVRvb2xzXCIuICBJZiBub3QsIHNlZSA8aHR0cDovL3d3dy5nbnUub3JnL2xpY2Vuc2VzLz4uXG4gKi9cbmltcG9ydCBDb2wgZnJvbSBcIi4vQ29sXCI7XG5pbXBvcnQgQ29uc3RhbnRzIGZyb20gXCIuL0NvbnN0YW50c1wiO1xuaW1wb3J0IFN0eWxlIGZyb20gXCIuL1N0eWxlXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFRvb2x0aXAgZXh0ZW5kcyBDb2wge1xuICBzZWxlY3RhYmxlID0gZmFsc2U7XG4gIFxuICBjb25zdHJ1Y3RvcihzdHlsZSwgLi4uY29tcG9uZW50cykge1xuICAgIHN1cGVyKG51bGwsIG51bGwsIG51bGwsIG51bGwsIHN0eWxlLCAuLi5jb21wb25lbnRzKTtcbiAgICB0aGlzLmRpc2FibGVkID0gdHJ1ZTtcbiAgfVxuXG4gIGRyYXcoY29udGV4dCkge1xuICAgIGlmKHRoaXMuaGlkZGVuKSByZXR1cm47XG4gICAgY29uc3QgY2FudmFzID0gY29udGV4dC5jYW52YXM7XG4gICAgY29uc3QgY3R4ID0gY2FudmFzLmdldENvbnRleHQoXCIyZFwiKTtcbiAgICBjdHguc2F2ZSgpO1xuXG4gICAgaWYodGhpcy54ICsgdGhpcy53aWR0aCArIHRoaXMuc3R5bGUucGFkZGluZyA+IHRoaXMucGFyZW50LndpZHRoKSB7XG4gICAgICB0aGlzLnggLT0gKHRoaXMud2lkdGggKyB0aGlzLnN0eWxlLnBhZGRpbmcpO1xuICAgIH1cblxuICAgIGlmKHRoaXMueSArIHRoaXMuaGVpZ2h0ICsgdGhpcy5zdHlsZS5wYWRkaW5nID4gdGhpcy5wYXJlbnQuaGVpZ2h0KSB7XG4gICAgICB0aGlzLnkgLT0gKHRoaXMuaGVpZ2h0ICsgdGhpcy5zdHlsZS5wYWRkaW5nKTtcbiAgICB9XG5cbiAgICBzdXBlci5kcmF3KGN0eCk7XG4gICAgXG4gICAgY3R4LnJlc3RvcmUoKTtcbiAgfVxuXG4gIGdldCB3aWR0aCgpIHtcbiAgICByZXR1cm4gc3VwZXIud2lkdGggKyB0aGlzLnN0eWxlLnBhZGRpbmc7XG4gIH1cblxuICBnZXQgaGVpZ2h0KCkge1xuICAgIHJldHVybiBzdXBlci5oZWlnaHQgKyB0aGlzLnN0eWxlLnBhZGRpbmc7XG4gIH1cblxuICBzZXQgd2lkdGgod2lkdGgpIHtcbiAgICBzdXBlci53aWR0aCA9IHdpZHRoO1xuICB9XG5cbiAgc2V0IGhlaWdodChoZWlnaHQpIHtcbiAgICBzdXBlci5oZWlnaHQgPSBoZWlnaHQ7XG4gIH1cblxuICBnZXQgZGVmYXVsdFN0eWxlKCkge1xuICAgIHJldHVybiBuZXcgU3R5bGUoe1xuICAgICAgXCJiYWNrZ3JvdW5kQ29sb3JcIjogQ29uc3RhbnRzLlNldHRpbmcuVE9PTFRJUF9ERUZBVUxUX0JBQ0tHUk9VTkRcbiAgICB9KTtcbiAgfVxuXG4gIGNvbXBhcmVUb0NvbXBvbmVudChvdGhlckNvbXBvbmVudCkge1xuICAgIHJldHVybiBvdGhlckNvbXBvbmVudC5jb21wYXJlVG9Ub29sdGlwKHRoaXMpO1xuICB9XG5cbiAgY29tcGFyZVRvTWVudShvdGhlckNvbXBvbmVudCkge1xuICAgIHJldHVybiAxO1xuICB9XG5cbiAgY29tcGFyZVRvVG9vbHRpcChvdGhlckNvbXBvbmVudCkge1xuICAgIHJldHVybiAwO1xuICB9XG5cbiAgY29tcGFyZVRvTm90aWZpY2F0aW9uKG90aGVyQ29tcG9uZW50KSB7XG4gICAgcmV0dXJuIDE7XG4gIH1cblxuICBnZXQgaGlkZGVuKCkge1xuICAgIHJldHVybiBzdXBlci5oaWRkZW4gfHwgdGhpcy5kaXNhYmxlZDtcbiAgfVxuXG4gIHNldCBoaWRkZW4oaGlkZGVuKSB7XG4gICAgc3VwZXIuaGlkZGVuID0gaGlkZGVuO1xuICAgIHRoaXMuZGlzYWJsZWQgPSBoaWRkZW47XG4gIH1cbn0iLCIvKlxuICogQ29weXJpZ2h0IChDKSAyMDIwIEVsaWFzdGlrIChlbGlhc3Rpa3NvZnRzLmNvbSlcbiAqXG4gKiBUaGlzIGZpbGUgaXMgcGFydCBvZiBcIkpTR2FtZVRvb2xzXCIuXG4gKlxuICogXCJKU0dhbWVUb29sc1wiIGlzIGZyZWUgc29mdHdhcmU6IHlvdSBjYW4gcmVkaXN0cmlidXRlIGl0IGFuZC9vciBtb2RpZnlcbiAqIGl0IHVuZGVyIHRoZSB0ZXJtcyBvZiB0aGUgR05VIEdlbmVyYWwgUHVibGljIExpY2Vuc2UgYXMgcHVibGlzaGVkIGJ5XG4gKiB0aGUgRnJlZSBTb2Z0d2FyZSBGb3VuZGF0aW9uLCBlaXRoZXIgdmVyc2lvbiAzIG9mIHRoZSBMaWNlbnNlLCBvclxuICogKGF0IHlvdXIgb3B0aW9uKSBhbnkgbGF0ZXIgdmVyc2lvbi5cbiAqXG4gKiBcIkpTR2FtZVRvb2xzXCIgaXMgZGlzdHJpYnV0ZWQgaW4gdGhlIGhvcGUgdGhhdCBpdCB3aWxsIGJlIHVzZWZ1bCxcbiAqIGJ1dCBXSVRIT1VUIEFOWSBXQVJSQU5UWTsgd2l0aG91dCBldmVuIHRoZSBpbXBsaWVkIHdhcnJhbnR5IG9mXG4gKiBNRVJDSEFOVEFCSUxJVFkgb3IgRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UuICBTZWUgdGhlXG4gKiBHTlUgR2VuZXJhbCBQdWJsaWMgTGljZW5zZSBmb3IgbW9yZSBkZXRhaWxzLlxuICpcbiAqIFlvdSBzaG91bGQgaGF2ZSByZWNlaXZlZCBhIGNvcHkgb2YgdGhlIEdOVSBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlXG4gKiBhbG9uZyB3aXRoIFwiSlNHYW1lVG9vbHNcIi4gIElmIG5vdCwgc2VlIDxodHRwOi8vd3d3LmdudS5vcmcvbGljZW5zZXMvPi5cbiAqL1xuaW1wb3J0IENvbXBvbmVudCBmcm9tIFwiLi9Db21wb25lbnRcIjtcbmltcG9ydCBDb25zdGFudHMgZnJvbSBcIi4vQ29uc3RhbnRzXCI7XG5pbXBvcnQgVXRpbHMgZnJvbSBcIi4vVXRpbHNcIjtcbmltcG9ydCBTdHlsZSBmcm9tIFwiLi9TdHlsZVwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBUcmlhbmdsZSBleHRlbmRzIENvbXBvbmVudCB7XG4gIHNlbGVjdGFibGUgPSBmYWxzZTtcblxuICBjb25zdHJ1Y3Rvcih4LCB5LCB3aWR0aCwgaGVpZ2h0LCBzdHlsZSkge1xuICAgIHN1cGVyKHgsIHksIHdpZHRoLCBoZWlnaHQsIHN0eWxlKTtcbiAgfVxuXG4gIGRyYXcoY29udGV4dCkge1xuICAgIGlmKHRoaXMuaGlkZGVuKSByZXR1cm47XG4gICAgc3VwZXIuZHJhdyhjb250ZXh0KTtcblxuICAgIGNvbnN0IGNhbnZhcyA9IGNvbnRleHQuY2FudmFzO1xuICAgIGNvbnN0IGN0eCA9IGNhbnZhcy5nZXRDb250ZXh0KFwiMmRcIik7XG4gICAgXG4gICAgVXRpbHMuZHJhd1RyaWFuZ2xlKGN0eCwgdGhpcy54LCB0aGlzLnksIHRoaXMud2lkdGgsIHRoaXMuaGVpZ2h0LCB0aGlzLnN0eWxlLmxpbmVXaWR0aCwgdGhpcy5zdHlsZS5jb2xvciwgdGhpcy5zdHlsZS5saW5lQ2FwLCB0aGlzLnN0eWxlLmZpbGwsIHRoaXMuc3R5bGUuZmlsbENvbG9yKTtcblxuICAgIHRoaXMuaW5pdCA9IHRydWU7XG4gIH1cblxuICBnZXQgd2lkdGgoKSB7XG4gICAgcmV0dXJuIHN1cGVyLndpZHRoICsgdGhpcy5zdHlsZS5saW5lV2lkdGg7XG4gIH1cblxuICBnZXQgaGVpZ2h0KCkge1xuICAgIHJldHVybiBzdXBlci5oZWlnaHQgKyB0aGlzLnN0eWxlLmxpbmVXaWR0aDtcbiAgfVxuXG4gIHNldCB3aWR0aCh3aWR0aCkge1xuICAgIHN1cGVyLndpZHRoID0gd2lkdGg7XG4gIH1cblxuICBzZXQgaGVpZ2h0KGhlaWdodCkge1xuICAgIHN1cGVyLmhlaWdodCA9IGhlaWdodDtcbiAgfVxuXG4gIGdldCBkZWZhdWx0U3R5bGUoKSB7XG4gICAgcmV0dXJuIG5ldyBTdHlsZSh7XG4gICAgICBcImxpbmVXaWR0aFwiOiBDb25zdGFudHMuU2V0dGluZy5UUklBTkdMRV9ERUZBVUxUX0xJTkVfU0laRSxcbiAgICAgIFwiY29sb3JcIjogQ29uc3RhbnRzLlNldHRpbmcuVFJJQU5HTEVfREVGQVVMVF9DT0xPUixcbiAgICAgIFwiZmlsbFwiOiBDb25zdGFudHMuU2V0dGluZy5UUklBTkdMRV9ERUZBVUxUX0ZJTEwsXG4gICAgICBcImxpbmVDYXBcIjogQ29uc3RhbnRzLlNldHRpbmcuVFJJQU5HTEVfREVGQVVMVF9MSU5FX0NBUCxcbiAgICAgIFwiZmlsbENvbG9yXCI6IENvbnN0YW50cy5TZXR0aW5nLlRSSUFOR0xFX0RFRkFVTFRfRklMTF9DT0xPUlxuICAgIH0pO1xuICB9XG59IiwiLypcbiAqIENvcHlyaWdodCAoQykgMjAyMCBFbGlhc3RpayAoZWxpYXN0aWtzb2Z0cy5jb20pXG4gKlxuICogVGhpcyBmaWxlIGlzIHBhcnQgb2YgXCJKU0dhbWVUb29sc1wiLlxuICpcbiAqIFwiSlNHYW1lVG9vbHNcIiBpcyBmcmVlIHNvZnR3YXJlOiB5b3UgY2FuIHJlZGlzdHJpYnV0ZSBpdCBhbmQvb3IgbW9kaWZ5XG4gKiBpdCB1bmRlciB0aGUgdGVybXMgb2YgdGhlIEdOVSBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlIGFzIHB1Ymxpc2hlZCBieVxuICogdGhlIEZyZWUgU29mdHdhcmUgRm91bmRhdGlvbiwgZWl0aGVyIHZlcnNpb24gMyBvZiB0aGUgTGljZW5zZSwgb3JcbiAqIChhdCB5b3VyIG9wdGlvbikgYW55IGxhdGVyIHZlcnNpb24uXG4gKlxuICogXCJKU0dhbWVUb29sc1wiIGlzIGRpc3RyaWJ1dGVkIGluIHRoZSBob3BlIHRoYXQgaXQgd2lsbCBiZSB1c2VmdWwsXG4gKiBidXQgV0lUSE9VVCBBTlkgV0FSUkFOVFk7IHdpdGhvdXQgZXZlbiB0aGUgaW1wbGllZCB3YXJyYW50eSBvZlxuICogTUVSQ0hBTlRBQklMSVRZIG9yIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFLiAgU2VlIHRoZVxuICogR05VIEdlbmVyYWwgUHVibGljIExpY2Vuc2UgZm9yIG1vcmUgZGV0YWlscy5cbiAqXG4gKiBZb3Ugc2hvdWxkIGhhdmUgcmVjZWl2ZWQgYSBjb3B5IG9mIHRoZSBHTlUgR2VuZXJhbCBQdWJsaWMgTGljZW5zZVxuICogYWxvbmcgd2l0aCBcIkpTR2FtZVRvb2xzXCIuICBJZiBub3QsIHNlZSA8aHR0cDovL3d3dy5nbnUub3JnL2xpY2Vuc2VzLz4uXG4gKi9cbmltcG9ydCBDb25zdGFudHMgZnJvbSBcIi4vQ29uc3RhbnRzXCI7XG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgcHJlUmVuZGVyZWRGb250OiB7fSxcbiAgbGFzdEtleTogLTEsXG4gIHByZVJlbmRlckZvbnQ6IGZ1bmN0aW9uKGNhcnMsIHNpemUsIGNvbG9yLCBmb250RmFtaWx5KSB7XG4gICAgY2Fycy5wdXNoKFwiP1wiKTsgY2Fycy5wdXNoKFwiIFwiKTsgY2Fycy5wdXNoKFwiQVwiKTtcbiAgICBcbiAgICBmb3IobGV0IGkgPSAwOyBpIDwgY2Fycy5sZW5ndGg7IGkrKykge1xuICAgICAgY29uc3QgY2FudmFzVG1wID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImNhbnZhc1wiKTtcbiAgICAgIGNvbnN0IGN0eFRtcCA9IGNhbnZhc1RtcC5nZXRDb250ZXh0KFwiMmRcIik7XG4gICAgICBjdHhUbXAuZm9udCA9IHNpemUgKyBcInB4IFwiICsgZm9udEZhbWlseTtcbiAgICAgIGNvbnN0IHdpZHRoID0gY3R4VG1wLm1lYXN1cmVUZXh0KGNhcnNbaV0pLndpZHRoO1xuICAgICAgXG4gICAgICBjYW52YXNUbXAud2lkdGggPSB3aWR0aDtcbiAgICAgIGNhbnZhc1RtcC5oZWlnaHQgPSBzaXplICsgKHNpemUgLyA2KTtcbiAgICAgIFxuICAgICAgY3R4VG1wLmZvbnQgPSBzaXplICsgXCJweCBcIiArIGZvbnRGYW1pbHk7XG4gICAgICBjdHhUbXAuZmlsbFN0eWxlID0gY29sb3I7XG4gICAgICBjdHhUbXAudGV4dEJhc2VsaW5lID0gXCJ0b3BcIjtcbiAgICAgIGN0eFRtcC5maWxsVGV4dChjYXJzW2ldLCAwLCAwKTtcbiAgICAgIFxuICAgICAgdGhpcy5wcmVSZW5kZXJlZEZvbnRbY2Fyc1tpXV0gPSBjYW52YXNUbXA7XG4gICAgfVxuICB9LFxuICBkcmF3SW1hZ2U6IGZ1bmN0aW9uKGN0eCwgaW1hZ2UsIHgsIHksIHdpZHRoLCBoZWlnaHQsIHN4LCBzeSwgc1dpZHRoLCBzSGVpZ2h0LCBlcmFzZUJlbG93LCBkZWdyZWVzKSB7XG4gICAgdGhpcy5kcmF3SW1hZ2VXcmFwcGVyKGN0eCwgaW1hZ2UsIHgsIHksIHdpZHRoLCBoZWlnaHQsIHN4LCBzeSwgc1dpZHRoLCBzSGVpZ2h0LCBlcmFzZUJlbG93LCBkZWdyZWVzKTtcbiAgfSxcbiAgZHJhd0ltYWdlRGF0YTogZnVuY3Rpb24oY3R4LCBpbWFnZURhdGEsIHgsIHksIHdpZHRoLCBoZWlnaHQsIHN4LCBzeSwgc1dpZHRoLCBzSGVpZ2h0LCBlcmFzZUJlbG93LCBkZWdyZWVzKSB7XG4gICAgdGhpcy5kcmF3SW1hZ2VXcmFwcGVyKGN0eCwgaW1hZ2VEYXRhLCB4LCB5LCB3aWR0aCwgaGVpZ2h0LCBzeCwgc3ksIHNXaWR0aCwgc0hlaWdodCwgZXJhc2VCZWxvdywgZGVncmVlcyk7XG4gIH0sXG4gIGRyYXdJbWFnZVdyYXBwZXI6IGZ1bmN0aW9uKGN0eCwgaW1hZ2UsIHgsIHksIHdpZHRoLCBoZWlnaHQsIHN4LCBzeSwgc1dpZHRoLCBzSGVpZ2h0LCBlcmFzZUJlbG93LCBkZWdyZWVzKSB7XG4gICAgeCA9ICh4ID09IHVuZGVmaW5lZCB8fCBpc05hTih4KSkgPyBudWxsIDogTWF0aC5yb3VuZCh4KTtcbiAgICB5ID0gKHkgPT0gdW5kZWZpbmVkIHx8IGlzTmFOKHkpKSA/IG51bGwgOiBNYXRoLnJvdW5kKHkpO1xuICAgIHdpZHRoID0gKHdpZHRoID09IHVuZGVmaW5lZCB8fCBpc05hTih3aWR0aCkpID8gbnVsbCA6IE1hdGgucm91bmQod2lkdGgpO1xuICAgIGhlaWdodCA9IChoZWlnaHQgPT0gdW5kZWZpbmVkIHx8IGlzTmFOKGhlaWdodCkpID8gbnVsbCA6IE1hdGgucm91bmQoaGVpZ2h0KTtcbiAgICBzeCA9IChzeCA9PSB1bmRlZmluZWQgfHwgaXNOYU4oc3gpKSA/IG51bGwgOiBNYXRoLnJvdW5kKHN4KTtcbiAgICBzeSA9IChzeSA9PSB1bmRlZmluZWQgfHwgaXNOYU4oc3kpKSA/IG51bGwgOiBNYXRoLnJvdW5kKHN5KTtcbiAgICBzV2lkdGggPSAoc1dpZHRoID09IHVuZGVmaW5lZCB8fCBpc05hTihzV2lkdGgpKSA/IG51bGwgOiBNYXRoLnJvdW5kKHNXaWR0aCk7XG4gICAgc0hlaWdodCA9IChzSGVpZ2h0ID09IHVuZGVmaW5lZCB8fCBpc05hTihzSGVpZ2h0KSkgPyBudWxsIDogTWF0aC5yb3VuZChzSGVpZ2h0KTtcbiAgICBlcmFzZUJlbG93ID0gZXJhc2VCZWxvdyA9PSB1bmRlZmluZWQgPyBmYWxzZSA6IGVyYXNlQmVsb3c7XG4gICAgZGVncmVlcyA9IChkZWdyZWVzID09IHVuZGVmaW5lZCB8fCBpc05hTihkZWdyZWVzKSkgPyBudWxsIDogZGVncmVlcztcbiAgXG4gICAgaWYoZGVncmVlcyAhPSB1bmRlZmluZWQpIHtcbiAgICAgIGN0eC5zYXZlKCk7XG4gICAgICBjdHgudHJhbnNsYXRlKHggKyB3aWR0aCAvIDIsIHkgKyBoZWlnaHQgLyAyKTtcbiAgICAgIGN0eC5yb3RhdGUoZGVncmVlcyAqIE1hdGguUEkgLyAxODApO1xuICAgICAgeCA9IC0od2lkdGggLyAyKTtcbiAgICAgIHkgPSAtKGhlaWdodCAvIDIpO1xuICAgIH1cbiAgXG4gICAgaWYoZXJhc2VCZWxvdykge1xuICAgICAgY3R4LmNsZWFyUmVjdCh4LCB5LCB3aWR0aCwgaGVpZ2h0KTtcbiAgICB9XG4gIFxuICAgIGlmKGN0eCAhPSB1bmRlZmluZWQgJiYgaW1hZ2UgIT0gdW5kZWZpbmVkKSB7XG4gICAgICBpZihpbWFnZS53aWR0aCA+IDAgJiYgaW1hZ2UuaGVpZ2h0ID4gMCkge1xuICAgICAgICBpZihzeCAhPSB1bmRlZmluZWQgJiYgc3kgIT0gdW5kZWZpbmVkICYmIHNXaWR0aCAhPSB1bmRlZmluZWQgJiYgc0hlaWdodCAhPSB1bmRlZmluZWQpIHtcbiAgICAgICAgICBjdHguZHJhd0ltYWdlKGltYWdlLCBzeCwgc3ksIHNXaWR0aCwgc0hlaWdodCwgeCwgeSwgd2lkdGgsIGhlaWdodCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgY3R4LmRyYXdJbWFnZShpbWFnZSwgeCwgeSwgd2lkdGgsIGhlaWdodCk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIFxuICAgIGlmKGRlZ3JlZXMgIT0gdW5kZWZpbmVkKSB7XG4gICAgICBjdHgucmVzdG9yZSgpO1xuICAgIH1cbiAgfSxcbiAgZHJhd1RleHQ6IGZ1bmN0aW9uKGN0eCwgdGV4dCwgY29sb3IsIHNpemUsIGZvbnRGYW1pbHksIGFsaWduZW1lbnQsIHZlcnRpY2FsQWxpZ25lbWVudCwgeCwgeSwgd3JhcCwgYm9sZCwgdW5kZXJsaW5lLCB0ZXh0QmFzZWxpbmUsIHBhcmVudCkge1xuICAgIGlmKGN0eCkge1xuICAgICAgY3R4LnNhdmUoKTtcblxuICAgICAgaWYoIUFycmF5LmlzQXJyYXkoY29sb3IpKSB7XG4gICAgICAgIGN0eC5maWxsU3R5bGUgPSBjb2xvcjtcbiAgICAgICAgY3R4LnN0cm9rZVN0eWxlID0gY29sb3I7XG4gICAgICB9XG4gIFxuICAgICAgY3R4LmZvbnQgPSAoYm9sZCA/IFwiYm9sZCBcIiA6IFwiXCIpICsgc2l6ZSArIFwicHggXCIgKyBmb250RmFtaWx5O1xuICAgICAgY3R4LnRleHRCYXNlbGluZSA9IHRleHRCYXNlbGluZSB8fCBcImJvdHRvbVwiO1xuICAgICAgY3R4LmZpbHRlciA9IFwibm9uZVwiO1xuICBcbiAgICAgIGlmKHdyYXApIHtcbiAgICAgICAgdGV4dCA9IHRoaXMud3JhcFRleHRMaW5lcyhjdHgsIHRleHQpW1widGV4dFwiXTtcbiAgICAgIH1cbiAgICAgIFxuICAgICAgY29uc3QgbGluZXMgPSB0ZXh0LnNwbGl0KFwiXFxuXCIpO1xuICAgICAgbGV0IG1heFdpZHRoID0gMDtcbiAgICAgIGxldCB4Q3VycmVudCA9IE1hdGgucm91bmQoeCk7XG4gICAgICBsZXQgeUN1cnJlbnQgPSBNYXRoLnJvdW5kKHkpICsgc2l6ZTtcbiAgICAgIGxldCB5Rmlyc3QgPSAwO1xuXG4gICAgICBpZigheSkge1xuICAgICAgICBpZih2ZXJ0aWNhbEFsaWduZW1lbnQgPT0gQ29uc3RhbnRzLlZlcnRpY2FsQWxpZ25lbWVudC5DRU5URVIpIHtcbiAgICAgICAgICB5Q3VycmVudCArPSBNYXRoLnJvdW5kKCgocGFyZW50ICYmIHBhcmVudC5oZWlnaHQgPyBwYXJlbnQuaGVpZ2h0IDogdGhpcy5nZXRDYW52YXNIZWlnaHQoY3R4LmNhbnZhcykpIC8gMikgLSAoc2l6ZSAqIGxpbmVzLmxlbmd0aCAvIDIpKTtcbiAgICAgICAgfSBlbHNlIGlmKHZlcnRpY2FsQWxpZ25lbWVudCA9PSBDb25zdGFudHMuVmVydGljYWxBbGlnbmVtZW50LkJPVFRPTSkge1xuICAgICAgICAgIHlDdXJyZW50ICs9IE1hdGgucm91bmQoKChwYXJlbnQgJiYgcGFyZW50LmhlaWdodCA/IHBhcmVudC5oZWlnaHQgOiB0aGlzLmdldENhbnZhc0hlaWdodChjdHguY2FudmFzKSkpIC0gKHNpemUgKiBsaW5lcy5sZW5ndGgpIC8gMiAtIHNpemUgLyA1KTtcbiAgICAgICAgfVxuICAgICAgfVxuICBcbiAgICAgIGZvcihsZXQgaSA9IDA7IGkgPCBsaW5lcy5sZW5ndGg7IGkrKykge1xuICAgICAgICBjb25zdCBjdXJyZW50VGV4dCA9IGxpbmVzW2ldO1xuICAgICAgICBjb25zdCBjdXJyZW50V2lkdGggPSBjdHgubWVhc3VyZVRleHQoY3VycmVudFRleHQpLndpZHRoO1xuICBcbiAgICAgICAgaWYoQXJyYXkuaXNBcnJheShjb2xvcikpIHtcbiAgICAgICAgICBsZXQgY29sb3JJbmRleCA9IGk7XG4gIFxuICAgICAgICAgIGlmKGNvbG9ySW5kZXggPiBjb2xvci5sZW5ndGggLSAxKSB7XG4gICAgICAgICAgICBjb2xvckluZGV4ID0gY29sb3IubGVuZ3RoIC0gMTtcbiAgICAgICAgICB9XG4gIFxuICAgICAgICAgIGN0eC5maWxsU3R5bGUgPSBjb2xvcltjb2xvckluZGV4XTtcbiAgICAgICAgICBjdHguc3Ryb2tlU3R5bGUgPSBjb2xvcltjb2xvckluZGV4XTtcbiAgICAgICAgfVxuICBcbiAgICAgICAgaWYoYWxpZ25lbWVudCA9PSBDb25zdGFudHMuQWxpZ25lbWVudC5DRU5URVIpIHtcbiAgICAgICAgICB4Q3VycmVudCA9IE1hdGgucm91bmQoKHBhcmVudCAmJiBwYXJlbnQueCA/IHBhcmVudC54IDogMCkpICsgTWF0aC5yb3VuZCgoKHBhcmVudCAmJiBwYXJlbnQud2lkdGggPyBwYXJlbnQud2lkdGggOiB0aGlzLmdldENhbnZhc1dpZHRoKGN0eC5jYW52YXMpKSAvIDIpIC0gKGN0eC5tZWFzdXJlVGV4dChjdXJyZW50VGV4dCkud2lkdGggLyAyKSk7XG4gICAgICAgIH0gZWxzZSBpZihhbGlnbmVtZW50ID09IENvbnN0YW50cy5BbGlnbmVtZW50LlJJR0hUKSB7XG4gICAgICAgICAgeEN1cnJlbnQgPSBNYXRoLnJvdW5kKChwYXJlbnQgJiYgcGFyZW50LnggPyBwYXJlbnQueCA6IDApKSArIE1hdGgucm91bmQoKHBhcmVudCAmJiBwYXJlbnQud2lkdGggPyBwYXJlbnQud2lkdGggOiB0aGlzLmdldENhbnZhc1dpZHRoKGN0eC5jYW52YXMpKSAtIChjdHgubWVhc3VyZVRleHQoY3VycmVudFRleHQpLndpZHRoKSAtIChwYXJlbnQgJiYgcGFyZW50LnNwYWNlQmV0d2VlbkNvbXBvbmVudHMgPyBwYXJlbnQuc3BhY2VCZXR3ZWVuQ29tcG9uZW50cyA6IENvbnN0YW50cy5TZXR0aW5nLkRFRkFVTFRfU1BBQ0lORykpO1xuICAgICAgICB9XG5cbiAgICAgICAgY3R4LmZpbGxUZXh0KGN1cnJlbnRUZXh0LCB4Q3VycmVudCwgeUN1cnJlbnQpO1xuICBcbiAgICAgICAgaWYodW5kZXJsaW5lKSB7XG4gICAgICAgICAgY3R4LmxpbmVXaWR0aCA9IDE7XG4gICAgICAgICAgY3R4LmJlZ2luUGF0aCgpO1xuICAgICAgICAgIGN0eC5tb3ZlVG8oeEN1cnJlbnQsIHlDdXJyZW50IC0gMik7XG4gICAgICAgICAgY3R4LmxpbmVUbyhNYXRoLnJvdW5kKHhDdXJyZW50ICsgY3VycmVudFdpZHRoKSwgeUN1cnJlbnQgLSAyKTtcbiAgICAgICAgICBjdHguc3Ryb2tlKCk7XG4gICAgICAgIH1cbiAgXG4gICAgICAgIGlmKGN1cnJlbnRXaWR0aCA+IG1heFdpZHRoKSBtYXhXaWR0aCA9IGN1cnJlbnRXaWR0aDtcbiAgICAgICAgaWYoaSA9PSAwKSB5Rmlyc3QgPSB5Q3VycmVudDtcblxuICAgICAgICB5Q3VycmVudCArPSBzaXplO1xuICAgICAgfVxuICBcbiAgICAgIGN0eC5yZXN0b3JlKCk7XG4gIFxuICAgICAgcmV0dXJuIHtcbiAgICAgICAgeDogeEN1cnJlbnQsXG4gICAgICAgIHk6IHlGaXJzdCxcbiAgICAgICAgaGVpZ2h0OiBzaXplICogbGluZXMubGVuZ3RoLFxuICAgICAgICB3aWR0aDogbWF4V2lkdGhcbiAgICAgIH07XG4gICAgfVxuICB9LFxuICB3cmFwVGV4dDogZnVuY3Rpb24odGV4dCwgbGltaXQpIHtcbiAgICBpZih0ZXh0Lmxlbmd0aCA+IGxpbWl0KSB7XG4gICAgICBsZXQgcCA9IGxpbWl0O1xuXG4gICAgICBmb3IoOyBwID4gMCAmJiB0ZXh0W3BdICE9IFwiIFwiOyBwLS0pO1xuXG4gICAgICBpZihwID4gMCkge1xuICAgICAgICBjb25zdCBsZWZ0ID0gdGV4dC5zdWJzdHJpbmcoMCwgcCk7XG4gICAgICAgIGNvbnN0IHJpZ2h0ID0gdGV4dC5zdWJzdHJpbmcocCArIDEpO1xuICAgICAgICByZXR1cm4gbGVmdCArIFwiXFxuXCIgKyB0aGlzLndyYXBUZXh0KHJpZ2h0LCBsaW1pdCk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHRleHQ7XG4gIH0sXG4gIHdyYXBUZXh0TGluZXM6IGZ1bmN0aW9uKGN0eCwgdGV4dCwgd2lkdGgsIGZvbnRTaXplLCBmb250RmFtaWx5LCBkaXNhYmxlV3JhcCkge1xuICAgIGlmKGN0eCAmJiB0ZXh0KSB7XG4gICAgICBjdHguc2F2ZSgpO1xuICAgICAgY3R4LmZvbnQgPSBNYXRoLnJvdW5kKGZvbnRTaXplKSArIFwicHggXCIgKyBmb250RmFtaWx5O1xuICAgICAgY3R4LmltYWdlU21vb3RoaW5nRW5hYmxlZCA9IGZhbHNlO1xuICBcbiAgICAgIGNvbnN0IGxpbmVzID0gdGV4dC5zcGxpdChcIlxcblwiKTtcbiAgICAgIGxldCBuZXdUZXh0ID0gXCJcIjtcbiAgICAgIGNvbnN0IHdpZHRoQ2FyID0gd2lkdGggfHwgY3R4Lm1lYXN1cmVUZXh0KFwiQVwiKS53aWR0aDtcbiAgICAgIGNvbnN0IG5iQ2FyTGluZSA9IE1hdGgucm91bmQodGhpcy5nZXRDYW52YXNXaWR0aChjdHguY2FudmFzKSAvIHdpZHRoQ2FyKTtcbiAgXG4gICAgICBsZXQgaGVpZ2h0VG90YWwgPSAwO1xuICAgICAgbGV0IG1heFdpZHRoID0gMDtcbiAgXG4gICAgICBmb3IobGV0IGkgPSAwOyBpIDwgbGluZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgY29uc3QgbGluZVdyYXAgPSBkaXNhYmxlV3JhcCA/IGxpbmVzW2ldIDogdGhpcy53cmFwVGV4dChsaW5lc1tpXSwgbmJDYXJMaW5lKTtcbiAgICAgICAgbmV3VGV4dCArPSBsaW5lV3JhcDtcbiAgXG4gICAgICAgIGlmKGkgPCBsaW5lcy5sZW5ndGggLSAxKSB7XG4gICAgICAgICAgbmV3VGV4dCArPSBcIlxcblwiO1xuICAgICAgICB9XG4gIFxuICAgICAgICBmb3IobGV0IGogPSAwOyBqIDwgbGluZVdyYXAuc3BsaXQoXCJcXG5cIikubGVuZ3RoOyBqKyspIHtcbiAgICAgICAgICBjb25zdCB3aWR0aFRleHQgPSBjdHgubWVhc3VyZVRleHQobGluZVdyYXAuc3BsaXQoXCJcXG5cIilbal0pLndpZHRoO1xuICAgICAgICAgIGhlaWdodFRvdGFsICs9IGZvbnRTaXplO1xuICAgICAgICAgIGlmKHdpZHRoVGV4dCA+IG1heFdpZHRoKSBtYXhXaWR0aCA9IHdpZHRoVGV4dDtcbiAgICAgICAgfVxuICAgICAgfVxuICBcbiAgICAgIGN0eC5yZXN0b3JlKCk7XG5cbiAgICAgIHJldHVybiB7XG4gICAgICAgIHRleHQ6IG5ld1RleHQsXG4gICAgICAgIGhlaWdodDogaGVpZ2h0VG90YWwsXG4gICAgICAgIHdpZHRoOiBtYXhXaWR0aCxcbiAgICAgICAgY2FyV2lkdGg6IHdpZHRoQ2FyXG4gICAgICB9O1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICB0ZXh0OiBcIlwiLFxuICAgICAgICBoZWlnaHQ6IDAsXG4gICAgICAgIHdpZHRoOiAwLFxuICAgICAgICBjYXJXaWR0aDogMFxuICAgICAgfTtcbiAgICB9XG4gIH0sXG4gIGRyYXdBcnJvdzogZnVuY3Rpb24oY3R4LCBmcm9teCwgZnJvbXksIHRveCwgdG95LCBsaW5lV2lkdGgsIGhlYWRTaXplLCBjb2xvciwgbGluZUNhcCkge1xuICAgIGN0eC5zYXZlKCk7XG5cbiAgICBjdHgubGluZUNhcCA9IGxpbmVDYXAgfHwgQ29uc3RhbnRzLlNldHRpbmcuQVJST1dfREVGQVVMVF9MSU5FX0NBUDtcbiAgICBjdHgubGluZVdpZHRoID0gbGluZVdpZHRoIHx8IENvbnN0YW50cy5TZXR0aW5nLkFSUk9XX0RFRkFVTFRfTElORV9TSVpFO1xuICAgIGN0eC5zdHJva2VTdHlsZSA9IGNvbG9yIHx8IENvbnN0YW50cy5TZXR0aW5nLkFSUk9XX0RFRkFVTFRfQ09MT1I7XG4gICAgY3R4LmZpbHRlciA9IFwiXCI7XG4gIFxuICAgIGN0eC5iZWdpblBhdGgoKTtcbiAgICBjb25zdCBoZWFkbGVuID0gaGVhZFNpemUgfHwgQ29uc3RhbnRzLlNldHRpbmcuQVJST1dfREVGQVVMVF9IRUFEX1NJWkU7XG4gICAgY29uc3QgZHggPSB0b3ggLSBmcm9teDtcbiAgICBjb25zdCBkeSA9IHRveSAtIGZyb215O1xuICAgIGNvbnN0IGFuZ2xlID0gTWF0aC5hdGFuMihkeSwgZHgpO1xuICAgIGN0eC5tb3ZlVG8oZnJvbXgsIGZyb215KTtcbiAgICBjdHgubGluZVRvKHRveCwgdG95KTtcbiAgICBjdHgubW92ZVRvKHRveCwgdG95KTtcbiAgICBjdHgubGluZVRvKHRveCAtIGhlYWRsZW4gKiBNYXRoLmNvcyhhbmdsZSAtIE1hdGguUEkgLyA2KSwgdG95IC0gaGVhZGxlbiAqIE1hdGguc2luKGFuZ2xlIC0gTWF0aC5QSSAvIDYpKTtcbiAgICBjdHgubW92ZVRvKHRveCwgdG95KTtcbiAgICBjdHgubGluZVRvKHRveCAtIGhlYWRsZW4gKiBNYXRoLmNvcyhhbmdsZSArIE1hdGguUEkgLyA2KSwgdG95IC0gaGVhZGxlbiAqIE1hdGguc2luKGFuZ2xlICsgTWF0aC5QSSAvIDYpKTtcbiAgICBjdHguc3Ryb2tlKCk7XG4gICAgXG4gICAgY3R4LnJlc3RvcmUoKTtcbiAgfSxcbiAgZHJhd0Nyb3NzOiBmdW5jdGlvbihjdHgsIHgsIHksIHdpZHRoLCBoZWlnaHQsIGxpbmVXaWR0aCwgY29sb3IsIGxpbmVDYXApIHtcbiAgICBjdHguc2F2ZSgpO1xuXG4gICAgY3R4LmxpbmVDYXAgPSBsaW5lQ2FwIHx8IENvbnN0YW50cy5TZXR0aW5nLkNST1NTX0RFRkFVTFRfTElORV9DQVA7XG4gICAgY3R4LmxpbmVXaWR0aCA9IGxpbmVXaWR0aCB8fCBDb25zdGFudHMuU2V0dGluZy5DUk9TU19ERUZBVUxUX0xJTkVfU0laRTtcbiAgICBjdHguc3Ryb2tlU3R5bGUgPSBjb2xvciB8fCBDb25zdGFudHMuU2V0dGluZy5DUk9TU19ERUZBVUxUX0NPTE9SO1xuICAgIGN0eC5maWx0ZXIgPSBcIlwiO1xuICBcbiAgICBjdHguYmVnaW5QYXRoKCk7XG4gICAgY3R4Lm1vdmVUbyh4LCB5KTtcbiAgICBjdHgubGluZVRvKHggKyB3aWR0aCwgeSArIGhlaWdodCk7XG4gICAgY3R4Lm1vdmVUbyh4ICsgd2lkdGgsIHkpO1xuICAgIGN0eC5saW5lVG8oeCwgeSArIGhlaWdodCk7XG4gICAgY3R4LnN0cm9rZSgpO1xuICAgIFxuICAgIGN0eC5yZXN0b3JlKCk7XG4gIH0sXG4gIGRyYXdUcmlhbmdsZTogZnVuY3Rpb24oY3R4LCB4LCB5LCB3aWR0aCwgaGVpZ2h0LCBsaW5lV2lkdGgsIGNvbG9yLCBsaW5lQ2FwLCBmaWxsID0gQ29uc3RhbnRzLlNldHRpbmcuVFJJQU5HTEVfREVGQVVMVF9GSUxMLCBmaWxsQ29sb3IpIHtcbiAgICBjdHguc2F2ZSgpO1xuXG4gICAgY3R4LmxpbmVDYXAgPSBsaW5lQ2FwIHx8IENvbnN0YW50cy5TZXR0aW5nLlRSSUFOR0xFX0RFRkFVTFRfTElORV9DQVA7XG4gICAgY3R4LmxpbmVXaWR0aCA9IGxpbmVXaWR0aCB8fCBDb25zdGFudHMuU2V0dGluZy5UUklBTkdMRV9ERUZBVUxUX0xJTkVfU0laRTtcbiAgICBjdHguZmlsdGVyID0gXCJcIjtcblxuICAgIGlmKGZpbGwpIHtcbiAgICAgIGN0eC5maWxsU3R5bGUgPSBmaWxsQ29sb3IgfHwgQ29uc3RhbnRzLlNldHRpbmcuVFJJQU5HTEVfREVGQVVMVF9GSUxMX0NPTE9SO1xuICAgICAgY3R4LnN0cm9rZVN0eWxlID0gY29sb3IgfHwgQ29uc3RhbnRzLlNldHRpbmcuVFJJQU5HTEVfREVGQVVMVF9DT0xPUjtcbiAgICB9IGVsc2Uge1xuICAgICAgY3R4LnN0cm9rZVN0eWxlID0gY29sb3IgfHwgQ29uc3RhbnRzLlNldHRpbmcuVFJJQU5HTEVfREVGQVVMVF9DT0xPUjtcbiAgICB9XG4gIFxuICAgIGN0eC5iZWdpblBhdGgoKTtcbiAgICBjdHgubW92ZVRvKHgsIHkpO1xuICAgIGN0eC5saW5lVG8oeCArIHdpZHRoLCB5KTtcbiAgICBjdHgubGluZVRvKHggKyB3aWR0aCAvIDIsIHkgKyBoZWlnaHQpO1xuICAgIGN0eC5saW5lVG8oeCwgeSk7XG5cbiAgICBpZihmaWxsKSB7XG4gICAgICBjdHguZmlsbCgpO1xuICAgICAgY3R4LnN0cm9rZSgpO1xuICAgIH0gZWxzZSB7XG4gICAgICBjdHguc3Ryb2tlKCk7XG4gICAgfVxuICAgIFxuICAgIGN0eC5yZXN0b3JlKCk7XG4gIH0sXG4gIGRyYXdDaXJjbGU6IGZ1bmN0aW9uKGN0eCwgeCwgeSwgcmFkaXVzLCBsaW5lV2lkdGgsIGNvbG9yLCBsaW5lQ2FwLCBmaWxsID0gQ29uc3RhbnRzLlNldHRpbmcuQ0lSQ0xFX0RFRkFVTFRfRklMTCwgZmlsbENvbG9yKSB7XG4gICAgY3R4LnNhdmUoKTtcblxuICAgIGN0eC5saW5lQ2FwID0gbGluZUNhcCB8fCBDb25zdGFudHMuU2V0dGluZy5DSVJDTEVfREVGQVVMVF9MSU5FX0NBUDtcbiAgICBjdHgubGluZVdpZHRoID0gbGluZVdpZHRoIHx8IENvbnN0YW50cy5TZXR0aW5nLkNJUkNMRV9ERUZBVUxUX0xJTkVfU0laRTtcbiAgICBjdHguZmlsdGVyID0gXCJcIjtcblxuICAgIGlmKGZpbGwpIHtcbiAgICAgIGN0eC5maWxsU3R5bGUgPSBmaWxsQ29sb3IgfHwgQ29uc3RhbnRzLlNldHRpbmcuQ0lSQ0xFX0RFRkFVTFRfRklMTF9DT0xPUjtcbiAgICAgIGN0eC5zdHJva2VTdHlsZSA9IGNvbG9yIHx8IENvbnN0YW50cy5TZXR0aW5nLkNJUkNMRV9ERUZBVUxUX0NPTE9SO1xuICAgIH0gZWxzZSB7XG4gICAgICBjdHguc3Ryb2tlU3R5bGUgPSBjb2xvciB8fCBDb25zdGFudHMuU2V0dGluZy5DSVJDTEVfREVGQVVMVF9DT0xPUjtcbiAgICB9XG4gICAgXG4gICAgY3R4LmJlZ2luUGF0aCgpO1xuICAgIGN0eC5hcmMoeCArIHJhZGl1cyAvIDIsIHkgKyByYWRpdXMgLyAyLCByYWRpdXMgLyAyLCAwLCAyICogTWF0aC5QSSwgZmFsc2UpO1xuXG4gICAgaWYoZmlsbCkge1xuICAgICAgY3R4LmZpbGwoKTtcbiAgICAgIGN0eC5zdHJva2UoKTtcbiAgICB9IGVsc2Uge1xuICAgICAgY3R4LnN0cm9rZSgpO1xuICAgIH1cbiAgICBcbiAgICBjdHgucmVzdG9yZSgpO1xuICB9LFxuICBjbGVhcjogZnVuY3Rpb24oY3R4KSB7XG4gICAgY3R4LmNsZWFyUmVjdCgwLCAwLCB0aGlzLmdldENhbnZhc1dpZHRoKGN0eC5jYW52YXMpLCB0aGlzLmdldENhbnZhc0hlaWdodChjdHguY2FudmFzKSk7XG4gIH0sXG4gIGlzRmlsdGVySHVlQXZhaWxhYmxlOiBmdW5jdGlvbigpIHtcbiAgICBjb25zdCBjYW52YXMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiY2FudmFzXCIpO1xuICAgIGNhbnZhcy53aWR0aCA9IDU7XG4gICAgY2FudmFzLmhlaWdodCA9IDU7XG4gICAgY29uc3QgY3R4ID0gY2FudmFzLmdldENvbnRleHQoXCIyZFwiKTtcbiAgICBjdHguc2F2ZSgpO1xuICBcbiAgICBjdHguZmlsbFN0eWxlID0gXCIjRkYwMDAwXCI7XG4gICAgY3R4LmZpbHRlciA9IFwiaHVlLXJvdGF0ZSg5MGRlZylcIjtcbiAgICBjdHguZmlsbFJlY3QoMCwgMCwgNSwgNSk7XG4gICAgY29uc3QgY29sb3IgPSBjdHguZ2V0SW1hZ2VEYXRhKDAsIDAsIDEsIDEpLmRhdGE7XG4gICAgY3R4LnJlc3RvcmUoKTtcbiAgXG4gICAgaWYoY29sb3JbMF0gPT0gMjU1ICYmIGNvbG9yWzFdID09IDAgJiYgY29sb3JbMl0gPT0gMCkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgXG4gICAgcmV0dXJuIHRydWU7XG4gIH0sXG4gIGJsdXJDYW52YXM6IGZ1bmN0aW9uKGN0eCwgbGVuZ3RoKSB7XG4gICAgY3R4LnNhdmUoKTtcbiAgICBjdHguZmlsdGVyID0gXCJibHVyKFwiICsgbGVuZ3RoICArIFwicHgpXCI7XG4gICAgdGhpcy5kcmF3SW1hZ2VEYXRhKGN0eCwgY3R4LmNhbnZhcywgMCwgMCwgdGhpcy5nZXRDYW52YXNXaWR0aChjdHguY2FudmFzKSwgdGhpcy5nZXRDYW52YXNIZWlnaHQoY3R4LmNhbnZhcykpO1xuICAgIGN0eC5yZXN0b3JlKCk7XG4gIH0sXG4gIHBhcnNlTnVtYmVyOiBmdW5jdGlvbihzdHIpIHtcbiAgICByZXR1cm4gc3RyID8gcGFyc2VJbnQoc3RyLm1hdGNoKC9cXGQrLyksIDEwKSA6IDA7XG4gIH0sXG4gIGdldEZvbnRTaXplOiBmdW5jdGlvbihjdHgpIHtcbiAgICByZXR1cm4gTWF0aC5mbG9vcihwYXJzZU51bWJlcihjdHguZm9udCkgLyAxLjI1KTtcbiAgfSxcbiAgZ2V0Q2FudmFzV2lkdGgoY2FudmFzKSB7XG4gICAgcmV0dXJuIHRoaXMucGFyc2VOdW1iZXIoY2FudmFzLnN0eWxlLndpZHRoKSB8fCBjYW52YXMud2lkdGg7XG4gIH0sXG4gIGdldENhbnZhc0hlaWdodChjYW52YXMpIHtcbiAgICByZXR1cm4gdGhpcy5wYXJzZU51bWJlcihjYW52YXMuc3R5bGUuaGVpZ2h0KSB8fCBjYW52YXMuaGVpZ2h0O1xuICB9LFxuICBhdXRvUmVzaXplQ2FudmFzOiBmdW5jdGlvbihjYW52YXMsIGNvbnRhaW5lciwgaW5pdGlhbFdpZHRoLCBpbml0aWFsSGVpZ2h0KSB7XG4gICAgaWYoIWRvY3VtZW50LmZ1bGxzY3JlZW5FbGVtZW50KSB7XG4gICAgICBpZihpbml0aWFsV2lkdGggPj0gZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmNsaWVudFdpZHRoICogMC44NSkge1xuICAgICAgICB2YXIgcmF0aW8gPSBpbml0aWFsV2lkdGggLyBpbml0aWFsSGVpZ2h0O1xuICAgICAgICBjYW52YXMud2lkdGggPSBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuY2xpZW50V2lkdGggKiAwLjg1O1xuICAgICAgICBjYW52YXMuaGVpZ2h0ID0gY2FudmFzLndpZHRoIC8gcmF0aW87XG5cbiAgICAgICAgaWYoY2FudmFzLnN0eWxlKSB7XG4gICAgICAgICAgY2FudmFzLnN0eWxlLndpZHRoID0gY2FudmFzLndpZHRoO1xuICAgICAgICAgIGNhbnZhcy5zdHlsZS5oZWlnaHQgPSBjYW52YXMuaGVpZ2h0O1xuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBjYW52YXMud2lkdGggPSBpbml0aWFsV2lkdGg7XG4gICAgICAgIGNhbnZhcy5oZWlnaHQgPSBpbml0aWFsSGVpZ2h0O1xuXG4gICAgICAgIGlmKGNhbnZhcy5zdHlsZSkge1xuICAgICAgICAgIGNhbnZhcy5zdHlsZS53aWR0aCA9IGluaXRpYWxXaWR0aDtcbiAgICAgICAgICBjYW52YXMuc3R5bGUuaGVpZ2h0ID0gaW5pdGlhbEhlaWdodDtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0gZWxzZSBpZihkb2N1bWVudC5mdWxsc2NyZWVuRWxlbWVudCA9PSBjYW52YXMgfHwgZG9jdW1lbnQuZnVsbHNjcmVlbkVsZW1lbnQgPT0gY29udGFpbmVyKSB7XG4gICAgICBjYW52YXMud2lkdGggPSB3aW5kb3cuaW5uZXJXaWR0aDtcbiAgICAgIGNhbnZhcy5oZWlnaHQgPSB3aW5kb3cuaW5uZXJIZWlnaHQ7XG5cbiAgICAgIGlmKGNhbnZhcy5zdHlsZSkge1xuICAgICAgICBjYW52YXMuc3R5bGUud2lkdGggPSB3aW5kb3cuaW5uZXJXaWR0aDtcbiAgICAgICAgY2FudmFzLnN0eWxlLmhlaWdodCA9IHdpbmRvdy5pbm5lckhlaWdodDtcbiAgICAgIH1cblxuICAgICAgaWYoY29udGFpbmVyKSB7XG4gICAgICAgIGNvbnRhaW5lci53aWR0aCA9IHdpbmRvdy5pbm5lcldpZHRoO1xuICAgICAgICBjb250YWluZXIuaGVpZ2h0ID0gd2luZG93LmlubmVySGVpZ2h0O1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBjYW52YXMud2lkdGggPSBpbml0aWFsV2lkdGg7XG4gICAgICBjYW52YXMuaGVpZ2h0ID0gaW5pdGlhbEhlaWdodDtcblxuICAgICAgaWYoY2FudmFzLnN0eWxlKSB7XG4gICAgICAgIGNhbnZhcy5zdHlsZS53aWR0aCA9IGluaXRpYWxXaWR0aDtcbiAgICAgICAgY2FudmFzLnN0eWxlLmhlaWdodCA9IGluaXRpYWxIZWlnaHQ7XG4gICAgICB9XG4gICAgfVxuICB9LFxuICBlbmFibGVBdXRvUmVzaXplQ2FudmFzOiBmdW5jdGlvbihjYW52YXMsIGNvbnRhaW5lciwgaW5pdGlhbFdpZHRoLCBpbml0aWFsSGVpZ2h0KSB7XG4gICAgaWYoY2FudmFzICYmIGNhbnZhcy5nZXRBdHRyaWJ1dGUoXCJhdXRvcmVzaXplLWNhbnZhcy1ldmVudFwiKSAhPSBcInRydWVcIikge1xuICAgICAgdGhpcy5hdXRvUmVzaXplQ2FudmFzKGNhbnZhcywgY29udGFpbmVyLCBpbml0aWFsV2lkdGgsIGluaXRpYWxIZWlnaHQpO1xuICBcbiAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwicmVzaXplXCIsICgpID0+IHtcbiAgICAgICAgY2FudmFzLnNldEF0dHJpYnV0ZShcImF1dG9yZXNpemUtY2FudmFzLWV2ZW50XCIsIFwidHJ1ZVwiKTtcbiAgICAgICAgdGhpcy5hdXRvUmVzaXplQ2FudmFzKGNhbnZhcywgY29udGFpbmVyLCBpbml0aWFsV2lkdGgsIGluaXRpYWxIZWlnaHQpO1xuICAgICAgfSk7XG4gICAgfVxuICB9LFxuICBhdXRvUmVzaXplQ2FudmFzRnVsbHNjcmVlbjogZnVuY3Rpb24oY2FudmFzLCBjb250YWluZXIpIHtcbiAgICBpZihkb2N1bWVudC5mdWxsc2NyZWVuRWxlbWVudCA9PSBjYW52YXMgfHwgZG9jdW1lbnQuZnVsbHNjcmVlbkVsZW1lbnQgPT0gY29udGFpbmVyKSB7XG4gICAgICBjYW52YXMud2lkdGggPSB3aW5kb3cuaW5uZXJXaWR0aDtcbiAgICAgIGNhbnZhcy5oZWlnaHQgPSB3aW5kb3cuaW5uZXJIZWlnaHQ7XG5cbiAgICAgIGlmKGNhbnZhcy5zdHlsZSkge1xuICAgICAgICBjYW52YXMuc3R5bGUud2lkdGggPSB3aW5kb3cuaW5uZXJXaWR0aDtcbiAgICAgICAgY2FudmFzLnN0eWxlLmhlaWdodCA9IHdpbmRvdy5pbm5lckhlaWdodDtcbiAgICAgIH1cbiAgICAgIFxuICAgICAgaWYoY29udGFpbmVyKSB7XG4gICAgICAgIGNvbnRhaW5lci53aWR0aCA9IHdpbmRvdy5pbm5lcldpZHRoO1xuICAgICAgICBjb250YWluZXIuaGVpZ2h0ID0gd2luZG93LmlubmVySGVpZ2h0O1xuICAgICAgfVxuICAgIH1cbiAgfSxcbiAgZW5hYmxlQXV0b1Jlc2l6ZUNhbnZhc0Z1bGxzY3JlZW46IGZ1bmN0aW9uKGNhbnZhcywgY29udGFpbmVyKSB7XG4gICAgaWYoY2FudmFzICYmIGNhbnZhcy5nZXRBdHRyaWJ1dGUoXCJhdXRvcmVzaXplZnVsbHNjcmVlbi1jYW52YXMtZXZlbnRcIikgIT0gXCJ0cnVlXCIpIHtcbiAgICAgIHRoaXMuYXV0b1Jlc2l6ZUNhbnZhc0Z1bGxzY3JlZW4oY2FudmFzLCBjb250YWluZXIpO1xuICBcbiAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwicmVzaXplXCIsICgpID0+IHtcbiAgICAgICAgY2FudmFzLnNldEF0dHJpYnV0ZShcImF1dG9yZXNpemVmdWxsc2NyZWVuLWNhbnZhcy1ldmVudFwiLCBcInRydWVcIik7XG4gICAgICAgIHRoaXMuYXV0b1Jlc2l6ZUNhbnZhc0Z1bGxzY3JlZW4oY2FudmFzLCBjb250YWluZXIpO1xuICAgICAgfSk7XG4gICAgfVxuICB9LFxuICBhdXRvUmVzaXplQ2FudmFzRnVsbHBhZ2U6IGZ1bmN0aW9uKGNhbnZhcywgY29udGFpbmVyKSB7XG4gICAgaWYoY2FudmFzICYmIGNhbnZhcy5nZXRBdHRyaWJ1dGUoXCJmdWxscGFnZS1jYW52YXMtZW5hYmxlXCIpID09IFwidHJ1ZVwiKSB7XG4gICAgICBjYW52YXMud2lkdGggPSB3aW5kb3cuaW5uZXJXaWR0aDtcbiAgICAgIGNhbnZhcy5oZWlnaHQgPSB3aW5kb3cuaW5uZXJIZWlnaHQ7XG4gICAgICBcbiAgICAgIGlmKGNhbnZhcy5zdHlsZSkge1xuICAgICAgICBjYW52YXMuc3R5bGUud2lkdGggPSB3aW5kb3cuaW5uZXJXaWR0aDtcbiAgICAgICAgY2FudmFzLnN0eWxlLmhlaWdodCA9IHdpbmRvdy5pbm5lckhlaWdodDtcbiAgICAgIH1cbiAgICAgIFxuICAgICAgaWYoY29udGFpbmVyKSB7XG4gICAgICAgIGNvbnRhaW5lci53aWR0aCA9IHdpbmRvdy5pbm5lcldpZHRoO1xuICAgICAgICBjb250YWluZXIuaGVpZ2h0ID0gd2luZG93LmlubmVySGVpZ2h0O1xuICAgICAgICBjb250YWluZXIuc3R5bGUubWFyZ2luID0gMDtcbiAgICAgICAgY29udGFpbmVyLnN0eWxlLnBhZGRpbmcgPSAwO1xuICAgICAgfVxuXG4gICAgICBkb2N1bWVudC5ib2R5LnN0eWxlLm1hcmdpbiA9IDA7XG4gICAgICBkb2N1bWVudC5ib2R5LnN0eWxlLnBhZGRpbmcgPSAwO1xuICAgIH1cbiAgfSxcbiAgZW5hYmxlQXV0b1Jlc2l6ZUNhbnZhc0Z1bGxwYWdlOiBmdW5jdGlvbihjYW52YXMsIGNvbnRhaW5lcikge1xuICAgIGlmKGNhbnZhcyAmJiBjYW52YXMuZ2V0QXR0cmlidXRlKFwiYXV0b3Jlc2l6ZWZ1bGxwYWdlLWNhbnZhcy1ldmVudFwiKSAhPSBcInRydWVcIikge1xuICAgICAgdGhpcy5hdXRvUmVzaXplQ2FudmFzRnVsbHBhZ2UoY2FudmFzLCBjb250YWluZXIpO1xuICBcbiAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwicmVzaXplXCIsICgpID0+IHtcbiAgICAgICAgY2FudmFzLnNldEF0dHJpYnV0ZShcImF1dG9yZXNpemVmdWxscGFnZS1jYW52YXMtZXZlbnRcIiwgXCJ0cnVlXCIpO1xuICAgICAgICB0aGlzLmF1dG9SZXNpemVDYW52YXNGdWxscGFnZShjYW52YXMsIGNvbnRhaW5lcik7XG4gICAgICB9KTtcbiAgICB9XG4gIH0sXG4gIHRvZ2dsZUZ1bGxzY3JlZW46IGZ1bmN0aW9uKGNhbnZhcywgY29udGFpbmVyKSB7XG4gICAgaWYoY2FudmFzKSB7XG4gICAgICBjb25zdCBpbml0aWFsV2lkdGggPSBjYW52YXMud2lkdGg7XG4gICAgICBjb25zdCBpbml0aWFsSGVpZ2h0ID0gY2FudmFzLmhlaWdodDtcblxuICAgICAgaWYoY29udGFpbmVyKSB7XG4gICAgICAgIGNvbnRhaW5lci53aWR0aCA9IGluaXRpYWxXaWR0aDtcbiAgICAgICAgY29udGFpbmVyLmhlaWdodCA9IGluaXRpYWxIZWlnaHQ7XG4gICAgICB9XG5cbiAgICAgIGlmKCFkb2N1bWVudC5mdWxsc2NyZWVuRWxlbWVudCkge1xuICAgICAgICBpZigoY29udGFpbmVyIHx8IGNhbnZhcykucmVxdWVzdEZ1bGxzY3JlZW4pIHtcbiAgICAgICAgICAoY29udGFpbmVyIHx8IGNhbnZhcykucmVxdWVzdEZ1bGxzY3JlZW4oKTtcbiAgICAgICAgfSBlbHNlIGlmKChjb250YWluZXIgfHwgY2FudmFzKS5tb3pSZXF1ZXN0RnVsbFNjcmVlbikge1xuICAgICAgICAgIChjb250YWluZXIgfHwgY2FudmFzKS5tb3pSZXF1ZXN0RnVsbFNjcmVlbigpO1xuICAgICAgICB9IGVsc2UgaWYoKGNvbnRhaW5lciB8fCBjYW52YXMpLndlYmtpdFJlcXVlc3RGdWxsc2NyZWVuKSB7XG4gICAgICAgICAgKGNvbnRhaW5lciB8fCBjYW52YXMpLndlYmtpdFJlcXVlc3RGdWxsc2NyZWVuKCk7XG4gICAgICAgIH0gZWxzZSBpZigoY29udGFpbmVyIHx8IGNhbnZhcykubXNSZXF1ZXN0RnVsbHNjcmVlbikge1xuICAgICAgICAgIChjb250YWluZXIgfHwgY2FudmFzKS5tc1JlcXVlc3RGdWxsc2NyZWVuKCk7XG4gICAgICAgIH0gZWxzZSBpZigoY29udGFpbmVyIHx8IGNhbnZhcykub1JlcXVlc3RGdWxsc2NyZWVuKSB7XG4gICAgICAgICAgKGNvbnRhaW5lciB8fCBjYW52YXMpLm9SZXF1ZXN0RnVsbHNjcmVlbigpO1xuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBpZihkb2N1bWVudC5leGl0RnVsbHNjcmVlbikge1xuICAgICAgICAgIGRvY3VtZW50LmV4aXRGdWxsc2NyZWVuKCk7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgdGhpcy5lbmFibGVBdXRvUmVzaXplQ2FudmFzRnVsbHNjcmVlbihjYW52YXMsIGNvbnRhaW5lcik7XG5cbiAgICAgIGlmKGNhbnZhcy5nZXRBdHRyaWJ1dGUoXCJmdWxsc2NyZWVuY2hhbmdlLWNhbnZhcy1ldmVudFwiKSAhPSBcInRydWVcIikge1xuICAgICAgICBjYW52YXMuc2V0QXR0cmlidXRlKFwiZnVsbHNjcmVlbmNoYW5nZS1jYW52YXMtZXZlbnRcIiwgXCJ0cnVlXCIpO1xuXG4gICAgICAgIGNvbnN0IG9uZnVsbHNjcmVlbmNoYW5nZSA9ICgpID0+IHtcbiAgICAgICAgICBpZihkb2N1bWVudC5mdWxsc2NyZWVuRWxlbWVudCAhPSAoY29udGFpbmVyIHx8IGNhbnZhcykpIHtcbiAgICAgICAgICAgIGNhbnZhcy53aWR0aCA9IGluaXRpYWxXaWR0aDtcbiAgICAgICAgICAgIGNhbnZhcy5oZWlnaHQgPSBpbml0aWFsSGVpZ2h0O1xuICAgICAgXG4gICAgICAgICAgICBpZihjb250YWluZXIpIHtcbiAgICAgICAgICAgICAgY29udGFpbmVyLndpZHRoID0gaW5pdGlhbFdpZHRoO1xuICAgICAgICAgICAgICBjb250YWluZXIuaGVpZ2h0ID0gaW5pdGlhbEhlaWdodDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgXG4gICAgICAgIGlmKHR5cGVvZihkb2N1bWVudC5vbmZ1bGxzY3JlZW5jaGFuZ2UpICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgZG9jdW1lbnQub25mdWxsc2NyZWVuY2hhbmdlID0gb25mdWxsc2NyZWVuY2hhbmdlO1xuICAgICAgICB9IGVsc2UgaWYodHlwZW9mKGRvY3VtZW50Lm9ubXNmdWxsc2NyZWVuY2hhbmdlKSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGRvY3VtZW50Lm9ubXNmdWxsc2NyZWVuY2hhbmdlID0gb25mdWxsc2NyZWVuY2hhbmdlO1xuICAgICAgICB9IGVsc2UgaWYodHlwZW9mKGRvY3VtZW50Lm9ubW96ZnVsbHNjcmVlbmNoYW5nZSkgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBkb2N1bWVudC5vbm1vemZ1bGxzY3JlZW5jaGFuZ2UgPSBvbmZ1bGxzY3JlZW5jaGFuZ2U7XG4gICAgICAgIH0gZWxzZSBpZih0eXBlb2YoZG9jdW1lbnQub253ZWJraXRmdWxsc2NyZWVuY2hhbmdlKSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGRvY3VtZW50Lm9ud2Via2l0ZnVsbHNjcmVlbmNoYW5nZSA9IG9uZnVsbHNjcmVlbmNoYW5nZTtcbiAgICAgICAgfSBlbHNlIGlmKHR5cGVvZihkb2N1bWVudC5vbm9raXRmdWxsc2NyZWVuY2hhbmdlKSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGRvY3VtZW50Lm9ub2Z1bGxzY3JlZW5jaGFuZ2UgPSBvbmZ1bGxzY3JlZW5jaGFuZ2U7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH0sXG4gIHRvZ2dsZUZ1bGxwYWdlOiBmdW5jdGlvbihjYW52YXMsIGNvbnRhaW5lcikge1xuICAgIGlmKGNhbnZhcykge1xuICAgICAgY29uc3QgaW5pdGlhbFdpZHRoID0gY2FudmFzLndpZHRoO1xuICAgICAgY29uc3QgaW5pdGlhbEhlaWdodCA9IGNhbnZhcy5oZWlnaHQ7XG5cbiAgICAgIGlmKGNvbnRhaW5lcikge1xuICAgICAgICBjb250YWluZXIud2lkdGggPSBpbml0aWFsV2lkdGg7XG4gICAgICAgIGNvbnRhaW5lci5oZWlnaHQgPSBpbml0aWFsSGVpZ2h0O1xuICAgICAgfVxuXG4gICAgICBpZighY2FudmFzLmdldEF0dHJpYnV0ZShcImZ1bGxwYWdlLWNhbnZhcy1lbmFibGVcIikgfHwgY2FudmFzLmdldEF0dHJpYnV0ZShcImZ1bGxwYWdlLWNhbnZhcy1lbmFibGVcIikgPT0gXCJmYWxzZVwiKSB7XG4gICAgICAgIGNhbnZhcy5zZXRBdHRyaWJ1dGUoXCJmdWxscGFnZS1jYW52YXMtZW5hYmxlXCIsIFwidHJ1ZVwiKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGNhbnZhcy5zZXRBdHRyaWJ1dGUoXCJmdWxscGFnZS1jYW52YXMtZW5hYmxlXCIsIFwiZmFsc2VcIik7XG4gICAgICB9XG5cbiAgICAgIHRoaXMuZW5hYmxlQXV0b1Jlc2l6ZUNhbnZhc0Z1bGxwYWdlKGNhbnZhcywgY29udGFpbmVyKTtcbiAgICB9XG4gIH0sXG4gIGdldE1vdXNlUG9zKGNhbnZhcywgZXZlbnQpIHtcbiAgICBjb25zdCByZWN0ID0gY2FudmFzLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuICAgIFxuICAgIHJldHVybiB7XG4gICAgICB4OiBldmVudC5jbGllbnRYIC0gcmVjdC5sZWZ0LFxuICAgICAgeTogZXZlbnQuY2xpZW50WSAtIHJlY3QudG9wXG4gICAgfTtcbiAgfVxufTsiLCIvKlxuICogQ29weXJpZ2h0IChDKSAyMDIwIEVsaWFzdGlrIChlbGlhc3Rpa3NvZnRzLmNvbSlcbiAqXG4gKiBUaGlzIGZpbGUgaXMgcGFydCBvZiBcIkpTR2FtZVRvb2xzXCIuXG4gKlxuICogXCJKU0dhbWVUb29sc1wiIGlzIGZyZWUgc29mdHdhcmU6IHlvdSBjYW4gcmVkaXN0cmlidXRlIGl0IGFuZC9vciBtb2RpZnlcbiAqIGl0IHVuZGVyIHRoZSB0ZXJtcyBvZiB0aGUgR05VIEdlbmVyYWwgUHVibGljIExpY2Vuc2UgYXMgcHVibGlzaGVkIGJ5XG4gKiB0aGUgRnJlZSBTb2Z0d2FyZSBGb3VuZGF0aW9uLCBlaXRoZXIgdmVyc2lvbiAzIG9mIHRoZSBMaWNlbnNlLCBvclxuICogKGF0IHlvdXIgb3B0aW9uKSBhbnkgbGF0ZXIgdmVyc2lvbi5cbiAqXG4gKiBcIkpTR2FtZVRvb2xzXCIgaXMgZGlzdHJpYnV0ZWQgaW4gdGhlIGhvcGUgdGhhdCBpdCB3aWxsIGJlIHVzZWZ1bCxcbiAqIGJ1dCBXSVRIT1VUIEFOWSBXQVJSQU5UWTsgd2l0aG91dCBldmVuIHRoZSBpbXBsaWVkIHdhcnJhbnR5IG9mXG4gKiBNRVJDSEFOVEFCSUxJVFkgb3IgRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UuICBTZWUgdGhlXG4gKiBHTlUgR2VuZXJhbCBQdWJsaWMgTGljZW5zZSBmb3IgbW9yZSBkZXRhaWxzLlxuICpcbiAqIFlvdSBzaG91bGQgaGF2ZSByZWNlaXZlZCBhIGNvcHkgb2YgdGhlIEdOVSBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlXG4gKiBhbG9uZyB3aXRoIFwiSlNHYW1lVG9vbHNcIi4gIElmIG5vdCwgc2VlIDxodHRwOi8vd3d3LmdudS5vcmcvbGljZW5zZXMvPi5cbiAqL1xuaW1wb3J0IENvbnN0YW50cyBmcm9tIFwiLi9Db25zdGFudHNcIjtcbmltcG9ydCBCdXR0b24gZnJvbSBcIi4vQnV0dG9uXCI7XG5pbXBvcnQgQnV0dG9uSW1hZ2UgZnJvbSBcIi4vQnV0dG9uSW1hZ2VcIjtcbmltcG9ydCBJbWFnZUxvYWRlciBmcm9tIFwiLi9JbWFnZUxvYWRlclwiO1xuaW1wb3J0IE5vdGlmaWNhdGlvbk1lc3NhZ2UgZnJvbSBcIi4vTm90aWZpY2F0aW9uTWVzc2FnZVwiO1xuaW1wb3J0IFV0aWxzIGZyb20gXCIuL1V0aWxzXCI7XG5pbXBvcnQgTWVudSBmcm9tIFwiLi9NZW51XCI7XG5pbXBvcnQgSW5wdXQgZnJvbSBcIi4vSW5wdXRcIjtcbmltcG9ydCBMYWJlbCBmcm9tIFwiLi9MYWJlbFwiO1xuaW1wb3J0IExpbmsgZnJvbSBcIi4vTGlua1wiO1xuaW1wb3J0IFRvb2x0aXAgZnJvbSBcIi4vVG9vbHRpcFwiO1xuaW1wb3J0IFNjZW5lIGZyb20gXCIuL1NjZW5lXCI7XG5pbXBvcnQgRlBTTWV0ZXIgZnJvbSBcIi4vRlBTTWV0ZXJcIjtcbmltcG9ydCBQcm9ncmVzc0JhciBmcm9tIFwiLi9Qcm9ncmVzc0JhclwiO1xuaW1wb3J0IENhbnZhcyBmcm9tIFwiLi9DYW52YXNcIjtcbmltcG9ydCBDb21wb25lbnQgZnJvbSBcIi4vQ29tcG9uZW50XCI7XG5pbXBvcnQgRWFzaW5nRnVuY3Rpb25zIGZyb20gXCIuL0Vhc2luZ0Z1bmN0aW9uc1wiO1xuaW1wb3J0IENvbCBmcm9tIFwiLi9Db2xcIjtcbmltcG9ydCBDb250YWluZXIgZnJvbSBcIi4vQ29udGFpbmVyXCI7XG5pbXBvcnQgUm93IGZyb20gXCIuL1Jvd1wiO1xuaW1wb3J0IEltYWdlQ29udGFpbmVyIGZyb20gXCIuL0ltYWdlQ29udGFpbmVyXCI7XG5pbXBvcnQgQXJyb3cgZnJvbSBcIi4vQXJyb3dcIjtcbmltcG9ydCBDcm9zcyBmcm9tIFwiLi9Dcm9zc1wiO1xuaW1wb3J0IFNjcm9sbGJhciBmcm9tIFwiLi9TY3JvbGxiYXJcIjtcbmltcG9ydCBTY3JvbGxiYXJWZXJ0aWNhbCBmcm9tIFwiLi9TY3JvbGxiYXJWZXJ0aWNhbFwiO1xuaW1wb3J0IFNjcm9sbGJhckhvcml6b250YWwgZnJvbSBcIi4vU2Nyb2xsYmFySG9yaXpvbnRhbFwiO1xuaW1wb3J0IEJveCBmcm9tIFwiLi9Cb3hcIjtcbmltcG9ydCBTdHlsZSBmcm9tIFwiLi9TdHlsZVwiO1xuaW1wb3J0IFNlbGVjdCBmcm9tIFwiLi9TZWxlY3RcIjtcbmltcG9ydCBTZWxlY3RPcHRpb24gZnJvbSBcIi4vU2VsZWN0T3B0aW9uXCI7XG5pbXBvcnQgU2VsZWN0T3B0aW9uc0NvbnRhaW5lciBmcm9tIFwiLi9TZWxlY3RPcHRpb25zQ29udGFpbmVyXCI7XG5pbXBvcnQgVHJpYW5nbGUgZnJvbSBcIi4vVHJpYW5nbGVcIjtcbmltcG9ydCBDaXJjbGUgZnJvbSBcIi4vQ2lyY2xlXCI7XG5pbXBvcnQgUmVhY3RvciBmcm9tIFwiLi9SZWFjdG9yXCI7XG5pbXBvcnQgRXZlbnQgZnJvbSBcIi4vRXZlbnRcIjtcbmltcG9ydCBSZWFjdG9yQ2FudmFzIGZyb20gXCIuL1JlYWN0b3JDYW52YXNcIjtcblxuZXhwb3J0IHsgQ29uc3RhbnRzLCBCdXR0b24sIEJ1dHRvbkltYWdlLCBJbWFnZUxvYWRlciwgTm90aWZpY2F0aW9uTWVzc2FnZSwgVXRpbHMsIE1lbnUsIElucHV0LCBMYWJlbCwgTGluaywgVG9vbHRpcCwgU2NlbmUsIEZQU01ldGVyLCBQcm9ncmVzc0JhciwgQ2FudmFzLCBDb21wb25lbnQsIEVhc2luZ0Z1bmN0aW9ucywgQ29sLCBDb250YWluZXIsIFJvdywgSW1hZ2VDb250YWluZXIsIEFycm93LCBDcm9zcywgU2Nyb2xsYmFyLCBTY3JvbGxiYXJWZXJ0aWNhbCwgU2Nyb2xsYmFySG9yaXpvbnRhbCwgQm94LCBTdHlsZSwgU2VsZWN0LCBTZWxlY3RPcHRpb24sIFNlbGVjdE9wdGlvbnNDb250YWluZXIsIFRyaWFuZ2xlLCBDaXJjbGUsIFJlYWN0b3IsIEV2ZW50LCBSZWFjdG9yQ2FudmFzIH07Il0sInNvdXJjZVJvb3QiOiIifQ==