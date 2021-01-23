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
            _Constants__WEBPACK_IMPORTED_MODULE_5__["default"].Setting.PIXEL_RATIO = window.devicePixelRatio * _Constants__WEBPACK_IMPORTED_MODULE_5__["default"].Setting.RESOLUTION_SCALE; // Update the device pixel ratio, only in fullscreen mode/fullpage mode
          } else {
            _Constants__WEBPACK_IMPORTED_MODULE_5__["default"].Setting.PIXEL_RATIO = 1 * _Constants__WEBPACK_IMPORTED_MODULE_5__["default"].Setting.RESOLUTION_SCALE;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9KU0dhbWVUb29scy93ZWJwYWNrL3VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24iLCJ3ZWJwYWNrOi8vSlNHYW1lVG9vbHMvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vSlNHYW1lVG9vbHMvLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9hcnJheUxpa2VUb0FycmF5LmpzIiwid2VicGFjazovL0pTR2FtZVRvb2xzLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvYXJyYXlXaXRob3V0SG9sZXMuanMiLCJ3ZWJwYWNrOi8vSlNHYW1lVG9vbHMvLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQuanMiLCJ3ZWJwYWNrOi8vSlNHYW1lVG9vbHMvLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9jbGFzc0NhbGxDaGVjay5qcyIsIndlYnBhY2s6Ly9KU0dhbWVUb29scy8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2NsYXNzUHJpdmF0ZUZpZWxkR2V0LmpzIiwid2VicGFjazovL0pTR2FtZVRvb2xzLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvY2xhc3NQcml2YXRlRmllbGRTZXQuanMiLCJ3ZWJwYWNrOi8vSlNHYW1lVG9vbHMvLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9jb25zdHJ1Y3QuanMiLCJ3ZWJwYWNrOi8vSlNHYW1lVG9vbHMvLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9jcmVhdGVDbGFzcy5qcyIsIndlYnBhY2s6Ly9KU0dhbWVUb29scy8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2RlZmluZVByb3BlcnR5LmpzIiwid2VicGFjazovL0pTR2FtZVRvb2xzLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZ2V0LmpzIiwid2VicGFjazovL0pTR2FtZVRvb2xzLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZ2V0UHJvdG90eXBlT2YuanMiLCJ3ZWJwYWNrOi8vSlNHYW1lVG9vbHMvLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9pbmhlcml0cy5qcyIsIndlYnBhY2s6Ly9KU0dhbWVUb29scy8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2lzTmF0aXZlUmVmbGVjdENvbnN0cnVjdC5qcyIsIndlYnBhY2s6Ly9KU0dhbWVUb29scy8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2l0ZXJhYmxlVG9BcnJheS5qcyIsIndlYnBhY2s6Ly9KU0dhbWVUb29scy8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL25vbkl0ZXJhYmxlU3ByZWFkLmpzIiwid2VicGFjazovL0pTR2FtZVRvb2xzLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvcG9zc2libGVDb25zdHJ1Y3RvclJldHVybi5qcyIsIndlYnBhY2s6Ly9KU0dhbWVUb29scy8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL3NldC5qcyIsIndlYnBhY2s6Ly9KU0dhbWVUb29scy8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL3NldFByb3RvdHlwZU9mLmpzIiwid2VicGFjazovL0pTR2FtZVRvb2xzLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvc3VwZXJQcm9wQmFzZS5qcyIsIndlYnBhY2s6Ly9KU0dhbWVUb29scy8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL3RvQ29uc3VtYWJsZUFycmF5LmpzIiwid2VicGFjazovL0pTR2FtZVRvb2xzLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvdHlwZW9mLmpzIiwid2VicGFjazovL0pTR2FtZVRvb2xzLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvdW5zdXBwb3J0ZWRJdGVyYWJsZVRvQXJyYXkuanMiLCJ3ZWJwYWNrOi8vSlNHYW1lVG9vbHMvLi9zcmMvQXJyb3cuanMiLCJ3ZWJwYWNrOi8vSlNHYW1lVG9vbHMvLi9zcmMvQm94LmpzIiwid2VicGFjazovL0pTR2FtZVRvb2xzLy4vc3JjL0J1dHRvbi5qcyIsIndlYnBhY2s6Ly9KU0dhbWVUb29scy8uL3NyYy9CdXR0b25JbWFnZS5qcyIsIndlYnBhY2s6Ly9KU0dhbWVUb29scy8uL3NyYy9DYW52YXMuanMiLCJ3ZWJwYWNrOi8vSlNHYW1lVG9vbHMvLi9zcmMvQ2lyY2xlLmpzIiwid2VicGFjazovL0pTR2FtZVRvb2xzLy4vc3JjL0NvbC5qcyIsIndlYnBhY2s6Ly9KU0dhbWVUb29scy8uL3NyYy9Db21wb25lbnQuanMiLCJ3ZWJwYWNrOi8vSlNHYW1lVG9vbHMvLi9zcmMvQ29uc3RhbnRzLmpzIiwid2VicGFjazovL0pTR2FtZVRvb2xzLy4vc3JjL0NvbnRhaW5lci5qcyIsIndlYnBhY2s6Ly9KU0dhbWVUb29scy8uL3NyYy9Dcm9zcy5qcyIsIndlYnBhY2s6Ly9KU0dhbWVUb29scy8uL3NyYy9FYXNpbmdGdW5jdGlvbnMuanMiLCJ3ZWJwYWNrOi8vSlNHYW1lVG9vbHMvLi9zcmMvRXZlbnQuanMiLCJ3ZWJwYWNrOi8vSlNHYW1lVG9vbHMvLi9zcmMvRlBTTWV0ZXIuanMiLCJ3ZWJwYWNrOi8vSlNHYW1lVG9vbHMvLi9zcmMvSW1hZ2VDb250YWluZXIuanMiLCJ3ZWJwYWNrOi8vSlNHYW1lVG9vbHMvLi9zcmMvSW1hZ2VMb2FkZXIuanMiLCJ3ZWJwYWNrOi8vSlNHYW1lVG9vbHMvLi9zcmMvSW5wdXQuanMiLCJ3ZWJwYWNrOi8vSlNHYW1lVG9vbHMvLi9zcmMvTGFiZWwuanMiLCJ3ZWJwYWNrOi8vSlNHYW1lVG9vbHMvLi9zcmMvTGluay5qcyIsIndlYnBhY2s6Ly9KU0dhbWVUb29scy8uL3NyYy9NZW51LmpzIiwid2VicGFjazovL0pTR2FtZVRvb2xzLy4vc3JjL05vdGlmaWNhdGlvbk1lc3NhZ2UuanMiLCJ3ZWJwYWNrOi8vSlNHYW1lVG9vbHMvLi9zcmMvUHJvZ3Jlc3NCYXIuanMiLCJ3ZWJwYWNrOi8vSlNHYW1lVG9vbHMvLi9zcmMvUmVhY3Rvci5qcyIsIndlYnBhY2s6Ly9KU0dhbWVUb29scy8uL3NyYy9SZWFjdG9yQ2FudmFzLmpzIiwid2VicGFjazovL0pTR2FtZVRvb2xzLy4vc3JjL1Jvdy5qcyIsIndlYnBhY2s6Ly9KU0dhbWVUb29scy8uL3NyYy9TY2VuZS5qcyIsIndlYnBhY2s6Ly9KU0dhbWVUb29scy8uL3NyYy9TY3JvbGxiYXIuanMiLCJ3ZWJwYWNrOi8vSlNHYW1lVG9vbHMvLi9zcmMvU2Nyb2xsYmFySG9yaXpvbnRhbC5qcyIsIndlYnBhY2s6Ly9KU0dhbWVUb29scy8uL3NyYy9TY3JvbGxiYXJWZXJ0aWNhbC5qcyIsIndlYnBhY2s6Ly9KU0dhbWVUb29scy8uL3NyYy9TZWxlY3QuanMiLCJ3ZWJwYWNrOi8vSlNHYW1lVG9vbHMvLi9zcmMvU2VsZWN0T3B0aW9uLmpzIiwid2VicGFjazovL0pTR2FtZVRvb2xzLy4vc3JjL1NlbGVjdE9wdGlvbnNDb250YWluZXIuanMiLCJ3ZWJwYWNrOi8vSlNHYW1lVG9vbHMvLi9zcmMvU3R5bGUuanMiLCJ3ZWJwYWNrOi8vSlNHYW1lVG9vbHMvLi9zcmMvVG9vbHRpcC5qcyIsIndlYnBhY2s6Ly9KU0dhbWVUb29scy8uL3NyYy9UcmlhbmdsZS5qcyIsIndlYnBhY2s6Ly9KU0dhbWVUb29scy8uL3NyYy9VdGlscy5qcyIsIndlYnBhY2s6Ly9KU0dhbWVUb29scy8uL3NyYy9pbmRleC5qcyJdLCJuYW1lcyI6WyJBcnJvdyIsIngiLCJ5IiwidG9YIiwidG9ZIiwic3R5bGUiLCJjb250ZXh0IiwiaGlkZGVuIiwiY2FudmFzIiwiY3R4IiwiZ2V0Q29udGV4dCIsIlV0aWxzIiwiZHJhd0Fycm93IiwibGluZVdpZHRoIiwiaGVhZFNpemUiLCJjb2xvciIsImxpbmVDYXAiLCJpbml0IiwiTWF0aCIsImFicyIsIlN0eWxlIiwiQ29uc3RhbnRzIiwiU2V0dGluZyIsIkFSUk9XX0RFRkFVTFRfTElORV9TSVpFIiwiQVJST1dfREVGQVVMVF9IRUFEX1NJWkUiLCJBUlJPV19ERUZBVUxUX0NPTE9SIiwiQVJST1dfREVGQVVMVF9MSU5FX0NBUCIsIkNvbXBvbmVudCIsIkJveCIsIndpZHRoIiwiaGVpZ2h0Iiwic2F2ZSIsImRyYXdCYWNrZ3JvdW5kIiwiZHJhd0JvcmRlciIsInJlc3RvcmUiLCJiYWNrZ3JvdW5kQ29sb3IiLCJmaWxsU3R5bGUiLCJmaWxsUmVjdCIsInJvdW5kIiwiYm9yZGVyQ29sb3IiLCJib3JkZXJTaXplIiwic3Ryb2tlU3R5bGUiLCJzdHJva2VSZWN0IiwiaG92ZXJlZCIsImNsaWNrZWQiLCJiYWNrZ3JvdW5kQ29sb3JEb3duIiwiYmFja2dyb3VuZENvbG9ySG92ZXIiLCJib3JkZXJDb2xvckRvd24iLCJib3JkZXJDb2xvckhvdmVyIiwic2VsZWN0YWJsZSIsInNlbGVjdGVkIiwiYm9yZGVyQ29sb3JTZWxlY3RlZCIsIkJ1dHRvbiIsIm1heFdpZHRoIiwibWF4SGVpZ2h0IiwiY29tcG9uZW50cyIsImRyYXdDb21wb25lbnRzIiwicGFkZGluZyIsIkJVVFRPTl9ERUZBVUxUX0JBQ0tHUk9VTkQiLCJCVVRUT05fREVGQVVMVF9IT1ZFUl9CQUNLR1JPVU5EIiwiQlVUVE9OX0RFRkFVTFRfQ0xJQ0tfQkFDS0dST1VORCIsIlJvdyIsIkJ1dHRvbkltYWdlIiwiaW1nU3JjIiwiYWxpZ25lbWVudCIsInZlcnRpY2FsQWxpZ25lbWVudCIsImltYWdlTG9hZGVyIiwiaW1hZ2UiLCJJbWFnZUNvbnRhaW5lciIsImFkZCIsImNvbnNvbGUiLCJ3YXJuIiwiU3RyaW5nIiwiTk9USUNFX01FU1NBR0UiLCJCVVRUT05fSU1BR0VfREVQUkVDQVRFRCIsImxvYWRJbWFnZSIsIm1pbldpZHRoIiwibWluSGVpZ2h0IiwiQ2FudmFzIiwic2NlbmUiLCJhdXRvUmVzaXplIiwibWF4RlBTIiwiZG9jdW1lbnQiLCJjcmVhdGVFbGVtZW50IiwiY29udGFpbmVyIiwiQ0FOVkFTX1dJRFRIIiwiQ0FOVkFTX0hFSUdIVCIsImFwcGVuZENoaWxkIiwic3RhcnRlZCIsImhhc0Vycm9yIiwiZnVsbHNjcmVlbiIsImZ1bGxwYWdlIiwiYnV0dG9uU2NlbmVFcnJvciIsIkJVVFRPTl9ERUZBVUxUX0FMVEVSTkFUSVZFX0JBQ0tHUk9VTkQiLCJMYWJlbCIsIlJFVFJZIiwibWVudVNjZW5lRXJyb3IiLCJNZW51IiwiRVJST1JfTUVTU0FHRV9DQU5WQVNfTEFCRUwiLCJlbmFibGUiLCJzY2VuZUVycm9yIiwiU2NlbmUiLCJzY2VuZVByZXZpb3VzIiwiYWRkQ2xpY2tBY3Rpb24iLCJyZWFjdG9yIiwiUmVhY3RvckNhbnZhcyIsInJlZ2lzdGVyRXZlbnQiLCJjcmVhdGVFdmVudHMiLCJESVNBQkxFX09QVElNSVpBVElPTlMiLCJpbmZvIiwiT1BUSU1JWkFUSU9OX0RJU0FCTEVEIiwiRElTQUJMRV9DT05UQUlORVJTX0NVVFRJTkciLCJDT05UQUlORVJfQ1VUVElOR19ESVNBQkxFRCIsImRyYXdDbGVhciIsImRyYXdTY2VuZSIsInBhcmVudCIsInNjYWxlIiwiUElYRUxfUkFUSU8iLCJkcmF3IiwiZSIsImVycm9yIiwiRVJST1JfTUVTU0FHRSIsIkVSUk9SX01FU1NBR0VfQ0FOVkFTIiwiY2xlYXIiLCJmdW5jIiwicmVxdWVzdEFuaW1hdGlvbkZyYW1lIiwidGltZSIsIm9mZnNldEZyYW1lIiwiZnVsbHNjcmVlbkVsZW1lbnQiLCJFTkFCTEVfUElYRUxfUkFUSU9fUkVTSVpJTkciLCJ3aW5kb3ciLCJkZXZpY2VQaXhlbFJhdGlvIiwiUkVTT0xVVElPTl9TQ0FMRSIsImF1dG9EUEkiLCJzdGFydERyYXciLCJlbGVtZW50IiwicmVtb3ZlQ2hpbGQiLCJ0b2dnbGVGdWxsc2NyZWVuIiwidG9nZ2xlRnVsbHBhZ2UiLCJlbmFibGVBdXRvUmVzaXplQ2FudmFzIiwiZm9yRWFjaCIsImV2ZW50TmFtZSIsImFkZEV2ZW50TGlzdGVuZXIiLCJldmVudCIsIm1vdXNlUG9zaXRpb24iLCJnZXRNb3VzZVBvcyIsImRvRXZlbnRzIiwicHJldmVudERlZmF1bHQiLCJjaGFuZ2VkVG91Y2hlcyIsInBvc2l0aW9uIiwiZ2V0Q29tcG9uZW50c0F0UG9zaXRpb24iLCJkaXNwYXRjaEV2ZW50IiwicmV2ZXJzZSIsImNvbXBvbmVudCIsImRpc3BhdGNoRXZlbnRDb21wb25lbnQiLCJjYWxsYmFjayIsInN0YXJ0IiwiZ2V0QWxsQ29tcG9uZW50cyIsImFsbENvbXBvbmVudHMiLCJnZXRDb21wb25lbnRzVHJlZSIsInJlc3VsdCIsImNoaWxkcyIsInNvcnQiLCJzb3J0Q29tcG9uZW50c1RyZWUiLCJzb21lIiwiY2hpbGQiLCJpc0luc2lkZSIsImRpc2FibGVkIiwicHVzaCIsImdldENhbnZhc1dpZHRoIiwiZ2V0Q2FudmFzSGVpZ2h0IiwiQ2lyY2xlIiwiZHJhd0NpcmNsZSIsImZpbGwiLCJmaWxsQ29sb3IiLCJDSVJDTEVfREVGQVVMVF9MSU5FX1NJWkUiLCJDSVJDTEVfREVGQVVMVF9DT0xPUiIsIkNJUkNMRV9ERUZBVUxUX0ZJTEwiLCJDSVJDTEVfREVGQVVMVF9MSU5FX0NBUCIsIkNJUkNMRV9ERUZBVUxUX0ZJTExfQ09MT1IiLCJDb2wiLCJESVNBQkxFX0VYUEVSSU1FTlRBTF9PUFRJTUlaQVRJT05TIiwidXBkYXRlSW5uZXJXaWR0aCIsInVwZGF0ZUlubmVySGVpZ2h0IiwiYWRkQ2hhbmdlQWN0aW9uIiwiY3R4VGVtcCIsImlzQ3V0dGluZyIsImNhbnZhc1RtcCIsImN1cnJlbnRZIiwiZHJhd0NvbXBvbmVudCIsImRyYXdJbWFnZURhdGEiLCJvZmZzZXRTY3JvbGxYIiwib2Zmc2V0U2Nyb2xsWSIsImlzQ29tcG9uZW50VmlzaWJsZSIsInNwYWNlQmV0d2VlbkNvbXBvbmVudHMiLCJ0b3RhbEhlaWdodCIsImxlbmd0aCIsImlubmVyV2lkdGgiLCJtaW4iLCJtYXgiLCJpbm5lckhlaWdodCIsIkNvbnRhaW5lciIsIlJlYWN0b3IiLCJoYXNJbml0RXZlbnRzIiwib2Zmc2V0TW92ZVgiLCJvZmZzZXRNb3ZlWSIsIm1vdmVFdmVudFN0YXJ0WCIsIm1vdmVFdmVudFN0YXJ0WSIsInRvdWNoRXZlbnRTdGFydFgiLCJ0b3VjaEV2ZW50U3RhcnRZIiwidG91Y2hFdmVudFN0YXJ0VGltZXN0YW1wIiwidG9vbHRpcCIsImluaXRFdmVudHMiLCJkZWx0YVgiLCJtb3ZlbWVudFgiLCJkZWx0YVkiLCJtb3ZlbWVudFkiLCJkaXNhYmxlIiwic2Nyb2xsRGlzYWJsZWQiLCJ0b3VjaFNjcm9sbEV2ZW50IiwidG91Y2hTdGFydEVuZEV2ZW50IiwidGltZXN0YW1wIiwicG9zIiwidHJpZ2dlciIsInJlbW92ZUFsbENsaWNrQWN0aW9ucyIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJyZW1vdmVBbGxFdmVudExpc3RlbmVyIiwicmVtb3ZlQWxsSG92ZXJBY3Rpb25zIiwiYWRkSG92ZXJBY3Rpb24iLCJyZW1vdmVBbGxEb3duQWN0aW9ucyIsImFkZERvd25BY3Rpb24iLCJyZW1vdmVBbGxTY3JvbGxBY3Rpb25zIiwiYWRkU2Nyb2xsQWN0aW9uIiwicmVtb3ZlQWxsTW92ZUFjdGlvbnMiLCJhZGRNb3ZlQWN0aW9uIiwicmVtb3ZlQWxsQ2hhbmdlQWN0aW9ucyIsInJlbW92ZUFsbFVwQWN0aW9ucyIsImFkZFVwQWN0aW9uIiwicmVzIiwib3RoZXJDb21wb25lbnQiLCJpc0ZvcmVncm91bmQiLCJmb3JlZ3JvdW5kIiwib3RoZXJJc0ZvcmVncm91bmQiLCJ6SW5kZXgiLCJvdGhlcnpJbmRleCIsImNvbXBhcmVUb0NvbXBvbmVudCIsInBhcmVudFdpZHRoIiwicGFyZW50UGFkZGluZyIsIkFsaWduZW1lbnQiLCJDRU5URVIiLCJSSUdIVCIsIkxFRlQiLCJwYXJlbnRIZWlnaHQiLCJWZXJ0aWNhbEFsaWduZW1lbnQiLCJCT1RUT00iLCJUT1AiLCJERUZBVUxUX1BBRERJTkciLCJERUZBVUxUX1NQQUNJTkciLCJkZWZhdWx0U3R5bGUiLCJzZXRBbGwiLCJnZXRTdHlsZXMiLCJzZXQiLCJvdGhlciIsImNvbXBhcmVUbyIsIkRJU0FCTEVfSVNfQ09NUE9ORU5UX1ZJU0lCTEVfT1BUSU1JWkFUSU9OUyIsIkZPTlRfRkFNSUxZIiwiRk9OVF9TSVpFIiwiSU5QVVRfREVGQVVMVF9GT05UX0NPTE9SIiwiSU5QVVRfREVGQVVMVF9CQUNLR1JPVU5EX0NPTE9SIiwiSU5QVVRfREVGQVVMVF9CT1JERVJfQ09MT1IiLCJJTlBVVF9ERUZBVUxUX0JPUkRFUl9DT0xPUl9TRUxFQ1RFRCIsIklOUFVUX0RFRkFVTFRfU0VMRUNUX0NPTE9SIiwiTEFCRUxfREVGQVVMVF9GT05UX0NPTE9SIiwiTElOS19ERUZBVUxUX0NPTE9SIiwiTElOS19ERUZBVUxUX0hPVkVSX0NPTE9SIiwiTElOS19ERUZBVUxUX0NMSUNLX0NPTE9SIiwiTUVOVV9ERUZBVUxUX0JBQ0tHUk9VTkQiLCJNRU5VX0RFRkFVTFRfQkxVUl9CQUNLR1JPVU5EIiwiTk9USUZJQ0FUSU9OX0RFRkFVTFRfQkFDS0dST1VORCIsIk5PVElGSUNBVElPTl9ERUZBVUxUX0FOSU1BVElPTl9EVVJBVElPTiIsIlBST0dSRVNTX0RFRkFVTFRfQkFDS0dST1VORCIsIlBST0dSRVNTX0RFRkFVTFRfRk9SRUdST1VORCIsIlBST0dSRVNTX0RFRkFVTFRfQU5JTUFUSU9OX0RVUkFUSU9OIiwiVE9PTFRJUF9ERUZBVUxUX0JBQ0tHUk9VTkQiLCJDUk9TU19ERUZBVUxUX0xJTkVfQ0FQIiwiQ1JPU1NfREVGQVVMVF9DT0xPUiIsIkNST1NTX0RFRkFVTFRfTElORV9TSVpFIiwiU0NST0xMQkFSX0RFRkFVTFRfQkFDS0dST1VORCIsIlNDUk9MTEJBUl9ERUZBVUxUX0hPVkVSX0JBQ0tHUk9VTkQiLCJTQ1JPTExCQVJfREVGQVVMVF9DTElDS19CQUNLR1JPVU5EIiwiU0NST0xMQkFSX0RFRkFVTFRfU0laRSIsIkRFRkFVTFRfQk9SREVSX1NJWkUiLCJERUZBVUxUX0JPUkRFUl9DT0xPUl9TRUxFQ1RFRCIsIkRFRkFVTFRfQU5JTUFUSU9OX0RVUkFUSU9OIiwiVFJJQU5HTEVfREVGQVVMVF9MSU5FX0NBUCIsIlRSSUFOR0xFX0RFRkFVTFRfQ09MT1IiLCJUUklBTkdMRV9ERUZBVUxUX0ZJTExfQ09MT1IiLCJUUklBTkdMRV9ERUZBVUxUX0xJTkVfU0laRSIsIlRSSUFOR0xFX0RFRkFVTFRfRklMTCIsIlNFTEVDVF9ERUZBVUxUX0JBQ0tHUk9VTkQiLCJTRUxFQ1RfREVGQVVMVF9IT1ZFUl9CQUNLR1JPVU5EIiwiU0VMRUNUX0RFRkFVTFRfQ0xJQ0tfQkFDS0dST1VORCIsIktleSIsIlVQIiwiRU5URVIiLCJFQ0hBUCIsIlRBQiIsIkRFRkFVTFQiLCJXQVJOSU5HX01FU1NBR0UiLCJJTlBVVF9GVUxMU0NSRUVOIiwiYWRkQWxsIiwic2Nyb2xsYmFySG9yaXpvbnRhbCIsIlNjcm9sbGJhckhvcml6b250YWwiLCJzY3JvbGxiYXJWZXJ0aWNhbCIsIlNjcm9sbGJhclZlcnRpY2FsIiwiY29udHJvbFNjcm9sbGluZyIsImNvbXBvbmVudENoYW5nZWQiLCJzY3JvbGxYRGlzYWJsZWQiLCJkcmF3SG9yaXpvbnRhbFNjcm9sbEJhciIsInNjcm9sbFlEaXNhYmxlZCIsImRyYXdWZXJ0aWNhbFNjcm9sbEJhciIsImhhc0NoYW5nZWQiLCJpIiwiZXZlbnRDaGFuZ2VDYWxsYmFjayIsImluZGV4T2YiLCJyZW1vdmVDaGFuZ2VBY3Rpb24iLCJmaWx0ZXIiLCJjdXJyZW50IiwicmVtb3ZlIiwiY2hhbmdlZCIsImMiLCJzY3JvbGxBcmVhU2l6ZVkiLCJwZXJjZW50U2Nyb2xsYmFyWSIsInNjcm9sbEFyZWFTaXplWCIsInBlcmNlbnRTY3JvbGxiYXJYIiwiY29tcG9uZW50V2lkdGgiLCJjb21wb25lbnRIZWlnaHQiLCJjYW52YXNXaWR0aCIsImNhbnZhc0hlaWdodCIsIkNyb3NzIiwiZHJhd0Nyb3NzIiwiZWFzZUluQ3ViaWMiLCJlYXNlT3V0Qm91bmNlIiwibjEiLCJkMSIsImVhc2VJbk91dEN1YmljIiwicG93IiwiZWFzZUluT3V0U2luZSIsImNvcyIsIlBJIiwiZWFzZUluT3V0UXVpbnQiLCJlYXNlSW5PdXRDaXJjIiwic3FydCIsImVhc2VJbk91dFF1YWQiLCJlYXNlSW5PdXRRdWFydCIsImVhc2VJbk91dEV4cG8iLCJlYXNlSW5PdXRCYWNrIiwiYzEiLCJjMiIsIkV2ZW50IiwibmFtZSIsImNhbGxiYWNrcyIsIkZQU01ldGVyIiwiZGlzcGxheUZyYW1lcyIsImZyYW1lcyIsImxhc3RGcmFtZSIsImN1cnJlbnRGUFMiLCJpbnRlcnZhbENvdW50RlBTIiwic2V0SW50ZXJ2YWwiLCJjb3VudEZQUyIsInRleHQiLCJJbWFnZSIsInNyYyIsImRyYXdJbWFnZSIsImdldCIsImltZ1dpZHRoIiwiaW1nSGVpZ2h0IiwiYXNwZWN0UmF0aW8iLCJmbG9vciIsInNpemVzIiwiSW1hZ2VMb2FkZXIiLCJpbWFnZXMiLCJpbWFnZXNSZXNpemVkIiwidHJpZWRMb2FkaW5nIiwibmJJbWFnZXNUb0xvYWQiLCJmaXJzdEltYWdlIiwiaW1nIiwic2hpZnQiLCJsb2FkIiwib25sb2FkIiwib25lcnJvciIsInNldFRpbWVvdXQiLCJoYXNPd25Qcm9wZXJ0eSIsInciLCJoIiwiaWQiLCJJbnB1dCIsImRlZmF1bHRUZXh0IiwibGFzdElucHV0VGV4dCIsIm9mZnNldFgiLCJsYXN0VGltZSIsInRvdGFsVGltZSIsImNsaWNrQ3VycmVudFBvc2l0aW9uIiwidGV4dENhY2hlIiwiaW5wdXQiLCJzZXRBdHRyaWJ1dGUiLCJsZWZ0IiwidGFiSW5kZXgiLCJ2YWx1ZSIsInBvc2l0aW9uU3RhcnQiLCJzZWxlY3Rpb25TdGFydCIsInBvc2l0aW9uRW5kIiwic2VsZWN0aW9uRW5kIiwiYm9keSIsImFwcGVuZFRvQ2FudmFzIiwibm90aWNlTG9nZ2VkIiwibW92ZUFjdGlvbkNhbGxiYWNrIiwiaUNsaWNrIiwiZ2V0TGV0dGVyQ2xpY2tlZCIsInBvc2l0aW9uU3RhcnRDbGljayIsInNldFNlbGVjdGlvblJhbmdlIiwiY2xpY2siLCJibHVyIiwicGVyZm9ybWFuY2UiLCJub3ciLCJvZmZzZXRUaW1lIiwiY3R4VGV4dCIsInVwZGF0ZVRleHRDYWNoZSIsImF1dG9TY3JvbGwiLCJkcmF3VGV4dCIsImN1cnNvciIsImN1cnJlbnRYIiwibGV0dGVycyIsInhEcmF3IiwieURyYXciLCJpc0xldHRlclZpc2libGUiLCJkcmF3SGlnaGxpZ2h0IiwiZm9udENvbG9yIiwiZm9udFNpemUiLCJmb250RmFtaWx5IiwiZHJhd0N1cnNvciIsImJlZ2luUGF0aCIsIm1vdmVUbyIsImxpbmVUbyIsInN0cm9rZSIsInNlbGVjdENvbG9yIiwid3JhcFRleHRMaW5lcyIsImxldHRlciIsImlzQ2xpY2tDdXJyZW50UG9zaXRpb24iLCJpc0NsaWNrQWZ0ZXJQb3NpdGlvbiIsImxldHRlcklkIiwiY3Vyc29yUG9zaXRpb24iLCJjdXJyZW50TGV0dGVyU2l6ZSIsImN1cnJlbnRMZXR0ZXIiLCJjdXJzb3JQb3NpdGlvblBvcyIsImN1cnNvclBvc2l0aW9uTmVnIiwib2Zmc2V0WE5lZyIsImZvY3VzIiwiZW5kIiwiZGlyZWN0aW9uIiwic2l6ZXNDYWNoZSIsInVwZGF0ZVNpemVzIiwid3JhcCIsImJvbGQiLCJ1bmRlcmxpbmUiLCJMaW5rIiwiaW5pdGlhbENvbG9yIiwiaW5pdGlhbFVuZGVybGluZSIsImZvbnRDb2xvckRvd24iLCJmb250Q29sb3JIb3ZlciIsImxhc3RLZXkiLCJ1bmRlZmluZWQiLCJzZWxlY3RlZENvbXBvbmVudCIsImJsdXJCYWNrZ3JvdW5kIiwiZHJhd0JsdXIiLCJrZXlDb2RlIiwia2V5QWN0aW9uIiwic2VsZWN0IiwiYmx1ckNhbnZhcyIsImluZGV4Iiwic2VsZWN0YWJsZUNvbXBvbmVudHMiLCJjb21wYXJlVG9NZW51IiwiTm90aWZpY2F0aW9uTWVzc2FnZSIsImRlbGF5QmVmb3JlQ2xvc2luZyIsImVhc2luZ0Z1bmN0aW9uIiwidGltZUxhc3RGcmFtZSIsImFuaW1hdGlvblRpbWUiLCJjbG9zZWQiLCJjbG9zaW5nIiwiY2xvc2VCdXR0b24iLCJzZXRDbGlja0FjdGlvbiIsImNsb3NlIiwiZGlzYWJsZUFuaW1hdGlvbiIsImVuYWJsZUNsb3NlQnV0dG9uIiwiZGlzYWJsZUNsb3NlQnV0dG9uIiwiYW5pbWF0aW9uRHVyYXRpb24iLCJjb3B5IiwiY29tcGFyZVRvTm90aWZpY2F0aW9uIiwib2Zmc2V0WSIsImZvcmNlQ2xvc2UiLCJvcGVuIiwiUHJvZ3Jlc3NCYXIiLCJkZWZhdWx0UGVyY2VudCIsInBlcmNlbnQiLCJkcmF3Rm9yZWdyb3VuZCIsIndpZHRoRm9yZWdyb3VuZCIsImZvcmVncm91bmRDb2xvciIsImFuaW1hdGlvblBlcmNlbnQiLCJldmVudHMiLCJldmVudEFyZ3MiLCJyZWdpc3RlckNhbGxiYWNrIiwicmVtb3ZlQ2FsbGJhY2siLCJyZW1vdmVBbGxDYWxsYmFja3MiLCJ0b3RhbFdpZHRoIiwiY29tcGFyZUNvbXBvbmVudHMiLCJTY3JvbGxiYXIiLCJzaXplIiwiY29tcGFyZVRvU2Nyb2xsYmFyIiwibWF4V2lkdGhQYXJlbnQiLCJpbm5lcldpZHRoUGFyZW50IiwibWF4SGVpZ2h0UGFyZW50IiwiaW5uZXJIZWlnaHRQYXJlbnQiLCJjb250ZW50UmF0aW9YIiwiY29udGVudFJhdGlvWSIsIndpbmRvd1Njcm9sbFNpemVYIiwid2luZG93U2Nyb2xsU2l6ZVkiLCJTZWxlY3QiLCJvcHRpb25Db250YWluZXIiLCJkZWZhdWx0T3B0aW9uIiwic2VsZWN0ZWRPcHRpb24iLCJsYWJlbCIsInRyaWFuZ2xlIiwiVHJpYW5nbGUiLCJ1cGRhdGVXaWR0aCIsIlNlbGVjdE9wdGlvbiIsImRlZmF1bHRMYWJlbCIsIlNlbGVjdERyb3Bkb3duIiwibWF4SGVpZ2h0RHJvcGRvd24iLCJvcHRpb25zIiwiZ2V0Q29tcG9uZW50SWQiLCJzZWxlY3RIZWlnaHQiLCJzdHlsZXMiLCJtb3ZhYmxlIiwiVG9vbHRpcCIsImNvbXBhcmVUb1Rvb2x0aXAiLCJkcmF3VHJpYW5nbGUiLCJwcmVSZW5kZXJlZEZvbnQiLCJwcmVSZW5kZXJGb250IiwiY2FycyIsImN0eFRtcCIsImZvbnQiLCJtZWFzdXJlVGV4dCIsInRleHRCYXNlbGluZSIsImZpbGxUZXh0Iiwic3giLCJzeSIsInNXaWR0aCIsInNIZWlnaHQiLCJlcmFzZUJlbG93IiwiZGVncmVlcyIsImRyYXdJbWFnZVdyYXBwZXIiLCJpbWFnZURhdGEiLCJpc05hTiIsInRyYW5zbGF0ZSIsInJvdGF0ZSIsImNsZWFyUmVjdCIsIkFycmF5IiwiaXNBcnJheSIsImxpbmVzIiwic3BsaXQiLCJ4Q3VycmVudCIsInlDdXJyZW50IiwieUZpcnN0IiwiY3VycmVudFRleHQiLCJjdXJyZW50V2lkdGgiLCJjb2xvckluZGV4Iiwid3JhcFRleHQiLCJsaW1pdCIsInAiLCJzdWJzdHJpbmciLCJyaWdodCIsImRpc2FibGVXcmFwIiwiaW1hZ2VTbW9vdGhpbmdFbmFibGVkIiwibmV3VGV4dCIsIndpZHRoQ2FyIiwibmJDYXJMaW5lIiwiaGVpZ2h0VG90YWwiLCJsaW5lV3JhcCIsImoiLCJ3aWR0aFRleHQiLCJjYXJXaWR0aCIsImZyb214IiwiZnJvbXkiLCJ0b3giLCJ0b3kiLCJoZWFkbGVuIiwiZHgiLCJkeSIsImFuZ2xlIiwiYXRhbjIiLCJzaW4iLCJyYWRpdXMiLCJhcmMiLCJpc0ZpbHRlckh1ZUF2YWlsYWJsZSIsImdldEltYWdlRGF0YSIsImRhdGEiLCJwYXJzZU51bWJlciIsInN0ciIsInBhcnNlSW50IiwibWF0Y2giLCJnZXRGb250U2l6ZSIsInJlY3QiLCJnZXRCb3VuZGluZ0NsaWVudFJlY3QiLCJhdXRvUmVzaXplQ2FudmFzIiwiaW5pdGlhbFdpZHRoIiwiaW5pdGlhbEhlaWdodCIsImRvY3VtZW50RWxlbWVudCIsImNsaWVudFdpZHRoIiwicmF0aW8iLCJnZXRBdHRyaWJ1dGUiLCJhdXRvUmVzaXplQ2FudmFzRnVsbHNjcmVlbiIsImVuYWJsZUF1dG9SZXNpemVDYW52YXNGdWxsc2NyZWVuIiwiYXV0b1Jlc2l6ZUNhbnZhc0Z1bGxwYWdlIiwibWFyZ2luIiwiZW5hYmxlQXV0b1Jlc2l6ZUNhbnZhc0Z1bGxwYWdlIiwicmVxdWVzdEZ1bGxzY3JlZW4iLCJtb3pSZXF1ZXN0RnVsbFNjcmVlbiIsIndlYmtpdFJlcXVlc3RGdWxsc2NyZWVuIiwibXNSZXF1ZXN0RnVsbHNjcmVlbiIsIm9SZXF1ZXN0RnVsbHNjcmVlbiIsImV4aXRGdWxsc2NyZWVuIiwib25mdWxsc2NyZWVuY2hhbmdlIiwib25tc2Z1bGxzY3JlZW5jaGFuZ2UiLCJvbm1vemZ1bGxzY3JlZW5jaGFuZ2UiLCJvbndlYmtpdGZ1bGxzY3JlZW5jaGFuZ2UiLCJvbm9raXRmdWxsc2NyZWVuY2hhbmdlIiwib25vZnVsbHNjcmVlbmNoYW5nZSIsImNsaWVudFgiLCJjbGllbnRZIiwidG9wIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0QsTztRQ1ZBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EseUNBQXlDLGlDQUFpQztRQUMxRSxnSEFBZ0gsbUJBQW1CLEVBQUU7UUFDckk7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwyQkFBMkIsMEJBQTBCLEVBQUU7UUFDdkQsaUNBQWlDLGVBQWU7UUFDaEQ7UUFDQTtRQUNBOztRQUVBO1FBQ0Esc0RBQXNELCtEQUErRDs7UUFFckg7UUFDQTs7O1FBR0E7UUFDQTs7Ozs7Ozs7Ozs7O0FDbEZBO0FBQ0E7O0FBRUEsd0NBQXdDLFNBQVM7QUFDakQ7QUFDQTs7QUFFQTtBQUNBOztBQUVB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QUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6IkpTR2FtZVRvb2xzLmRldi5qcyIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiB3ZWJwYWNrVW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbihyb290LCBmYWN0b3J5KSB7XG5cdGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0JyAmJiB0eXBlb2YgbW9kdWxlID09PSAnb2JqZWN0Jylcblx0XHRtb2R1bGUuZXhwb3J0cyA9IGZhY3RvcnkoKTtcblx0ZWxzZSBpZih0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQpXG5cdFx0ZGVmaW5lKFtdLCBmYWN0b3J5KTtcblx0ZWxzZSBpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcpXG5cdFx0ZXhwb3J0c1tcIkpTR2FtZVRvb2xzXCJdID0gZmFjdG9yeSgpO1xuXHRlbHNlXG5cdFx0cm9vdFtcIkpTR2FtZVRvb2xzXCJdID0gZmFjdG9yeSgpO1xufSkodHlwZW9mIHNlbGYgIT09IFwidW5kZWZpbmVkXCIgPyBzZWxmIDogdGhpcywgZnVuY3Rpb24oKSB7XG5yZXR1cm4gIiwiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zcmMvaW5kZXguanNcIik7XG4iLCJmdW5jdGlvbiBfYXJyYXlMaWtlVG9BcnJheShhcnIsIGxlbikge1xuICBpZiAobGVuID09IG51bGwgfHwgbGVuID4gYXJyLmxlbmd0aCkgbGVuID0gYXJyLmxlbmd0aDtcblxuICBmb3IgKHZhciBpID0gMCwgYXJyMiA9IG5ldyBBcnJheShsZW4pOyBpIDwgbGVuOyBpKyspIHtcbiAgICBhcnIyW2ldID0gYXJyW2ldO1xuICB9XG5cbiAgcmV0dXJuIGFycjI7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX2FycmF5TGlrZVRvQXJyYXk7IiwidmFyIGFycmF5TGlrZVRvQXJyYXkgPSByZXF1aXJlKFwiLi9hcnJheUxpa2VUb0FycmF5XCIpO1xuXG5mdW5jdGlvbiBfYXJyYXlXaXRob3V0SG9sZXMoYXJyKSB7XG4gIGlmIChBcnJheS5pc0FycmF5KGFycikpIHJldHVybiBhcnJheUxpa2VUb0FycmF5KGFycik7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX2FycmF5V2l0aG91dEhvbGVzOyIsImZ1bmN0aW9uIF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoc2VsZikge1xuICBpZiAoc2VsZiA9PT0gdm9pZCAwKSB7XG4gICAgdGhyb3cgbmV3IFJlZmVyZW5jZUVycm9yKFwidGhpcyBoYXNuJ3QgYmVlbiBpbml0aWFsaXNlZCAtIHN1cGVyKCkgaGFzbid0IGJlZW4gY2FsbGVkXCIpO1xuICB9XG5cbiAgcmV0dXJuIHNlbGY7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX2Fzc2VydFRoaXNJbml0aWFsaXplZDsiLCJmdW5jdGlvbiBfY2xhc3NDYWxsQ2hlY2soaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7XG4gIGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7XG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblwiKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9jbGFzc0NhbGxDaGVjazsiLCJmdW5jdGlvbiBfY2xhc3NQcml2YXRlRmllbGRHZXQocmVjZWl2ZXIsIHByaXZhdGVNYXApIHtcbiAgdmFyIGRlc2NyaXB0b3IgPSBwcml2YXRlTWFwLmdldChyZWNlaXZlcik7XG5cbiAgaWYgKCFkZXNjcmlwdG9yKSB7XG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcImF0dGVtcHRlZCB0byBnZXQgcHJpdmF0ZSBmaWVsZCBvbiBub24taW5zdGFuY2VcIik7XG4gIH1cblxuICBpZiAoZGVzY3JpcHRvci5nZXQpIHtcbiAgICByZXR1cm4gZGVzY3JpcHRvci5nZXQuY2FsbChyZWNlaXZlcik7XG4gIH1cblxuICByZXR1cm4gZGVzY3JpcHRvci52YWx1ZTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfY2xhc3NQcml2YXRlRmllbGRHZXQ7IiwiZnVuY3Rpb24gX2NsYXNzUHJpdmF0ZUZpZWxkU2V0KHJlY2VpdmVyLCBwcml2YXRlTWFwLCB2YWx1ZSkge1xuICB2YXIgZGVzY3JpcHRvciA9IHByaXZhdGVNYXAuZ2V0KHJlY2VpdmVyKTtcblxuICBpZiAoIWRlc2NyaXB0b3IpIHtcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiYXR0ZW1wdGVkIHRvIHNldCBwcml2YXRlIGZpZWxkIG9uIG5vbi1pbnN0YW5jZVwiKTtcbiAgfVxuXG4gIGlmIChkZXNjcmlwdG9yLnNldCkge1xuICAgIGRlc2NyaXB0b3Iuc2V0LmNhbGwocmVjZWl2ZXIsIHZhbHVlKTtcbiAgfSBlbHNlIHtcbiAgICBpZiAoIWRlc2NyaXB0b3Iud3JpdGFibGUpIHtcbiAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJhdHRlbXB0ZWQgdG8gc2V0IHJlYWQgb25seSBwcml2YXRlIGZpZWxkXCIpO1xuICAgIH1cblxuICAgIGRlc2NyaXB0b3IudmFsdWUgPSB2YWx1ZTtcbiAgfVxuXG4gIHJldHVybiB2YWx1ZTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfY2xhc3NQcml2YXRlRmllbGRTZXQ7IiwidmFyIHNldFByb3RvdHlwZU9mID0gcmVxdWlyZShcIi4vc2V0UHJvdG90eXBlT2ZcIik7XG5cbnZhciBpc05hdGl2ZVJlZmxlY3RDb25zdHJ1Y3QgPSByZXF1aXJlKFwiLi9pc05hdGl2ZVJlZmxlY3RDb25zdHJ1Y3RcIik7XG5cbmZ1bmN0aW9uIF9jb25zdHJ1Y3QoUGFyZW50LCBhcmdzLCBDbGFzcykge1xuICBpZiAoaXNOYXRpdmVSZWZsZWN0Q29uc3RydWN0KCkpIHtcbiAgICBtb2R1bGUuZXhwb3J0cyA9IF9jb25zdHJ1Y3QgPSBSZWZsZWN0LmNvbnN0cnVjdDtcbiAgfSBlbHNlIHtcbiAgICBtb2R1bGUuZXhwb3J0cyA9IF9jb25zdHJ1Y3QgPSBmdW5jdGlvbiBfY29uc3RydWN0KFBhcmVudCwgYXJncywgQ2xhc3MpIHtcbiAgICAgIHZhciBhID0gW251bGxdO1xuICAgICAgYS5wdXNoLmFwcGx5KGEsIGFyZ3MpO1xuICAgICAgdmFyIENvbnN0cnVjdG9yID0gRnVuY3Rpb24uYmluZC5hcHBseShQYXJlbnQsIGEpO1xuICAgICAgdmFyIGluc3RhbmNlID0gbmV3IENvbnN0cnVjdG9yKCk7XG4gICAgICBpZiAoQ2xhc3MpIHNldFByb3RvdHlwZU9mKGluc3RhbmNlLCBDbGFzcy5wcm90b3R5cGUpO1xuICAgICAgcmV0dXJuIGluc3RhbmNlO1xuICAgIH07XG4gIH1cblxuICByZXR1cm4gX2NvbnN0cnVjdC5hcHBseShudWxsLCBhcmd1bWVudHMpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9jb25zdHJ1Y3Q7IiwiZnVuY3Rpb24gX2RlZmluZVByb3BlcnRpZXModGFyZ2V0LCBwcm9wcykge1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHByb3BzLmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGRlc2NyaXB0b3IgPSBwcm9wc1tpXTtcbiAgICBkZXNjcmlwdG9yLmVudW1lcmFibGUgPSBkZXNjcmlwdG9yLmVudW1lcmFibGUgfHwgZmFsc2U7XG4gICAgZGVzY3JpcHRvci5jb25maWd1cmFibGUgPSB0cnVlO1xuICAgIGlmIChcInZhbHVlXCIgaW4gZGVzY3JpcHRvcikgZGVzY3JpcHRvci53cml0YWJsZSA9IHRydWU7XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwgZGVzY3JpcHRvci5rZXksIGRlc2NyaXB0b3IpO1xuICB9XG59XG5cbmZ1bmN0aW9uIF9jcmVhdGVDbGFzcyhDb25zdHJ1Y3RvciwgcHJvdG9Qcm9wcywgc3RhdGljUHJvcHMpIHtcbiAgaWYgKHByb3RvUHJvcHMpIF9kZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLnByb3RvdHlwZSwgcHJvdG9Qcm9wcyk7XG4gIGlmIChzdGF0aWNQcm9wcykgX2RlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IsIHN0YXRpY1Byb3BzKTtcbiAgcmV0dXJuIENvbnN0cnVjdG9yO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9jcmVhdGVDbGFzczsiLCJmdW5jdGlvbiBfZGVmaW5lUHJvcGVydHkob2JqLCBrZXksIHZhbHVlKSB7XG4gIGlmIChrZXkgaW4gb2JqKSB7XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KG9iaiwga2V5LCB7XG4gICAgICB2YWx1ZTogdmFsdWUsXG4gICAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgICAgY29uZmlndXJhYmxlOiB0cnVlLFxuICAgICAgd3JpdGFibGU6IHRydWVcbiAgICB9KTtcbiAgfSBlbHNlIHtcbiAgICBvYmpba2V5XSA9IHZhbHVlO1xuICB9XG5cbiAgcmV0dXJuIG9iajtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfZGVmaW5lUHJvcGVydHk7IiwidmFyIHN1cGVyUHJvcEJhc2UgPSByZXF1aXJlKFwiLi9zdXBlclByb3BCYXNlXCIpO1xuXG5mdW5jdGlvbiBfZ2V0KHRhcmdldCwgcHJvcGVydHksIHJlY2VpdmVyKSB7XG4gIGlmICh0eXBlb2YgUmVmbGVjdCAhPT0gXCJ1bmRlZmluZWRcIiAmJiBSZWZsZWN0LmdldCkge1xuICAgIG1vZHVsZS5leHBvcnRzID0gX2dldCA9IFJlZmxlY3QuZ2V0O1xuICB9IGVsc2Uge1xuICAgIG1vZHVsZS5leHBvcnRzID0gX2dldCA9IGZ1bmN0aW9uIF9nZXQodGFyZ2V0LCBwcm9wZXJ0eSwgcmVjZWl2ZXIpIHtcbiAgICAgIHZhciBiYXNlID0gc3VwZXJQcm9wQmFzZSh0YXJnZXQsIHByb3BlcnR5KTtcbiAgICAgIGlmICghYmFzZSkgcmV0dXJuO1xuICAgICAgdmFyIGRlc2MgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKGJhc2UsIHByb3BlcnR5KTtcblxuICAgICAgaWYgKGRlc2MuZ2V0KSB7XG4gICAgICAgIHJldHVybiBkZXNjLmdldC5jYWxsKHJlY2VpdmVyKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGRlc2MudmFsdWU7XG4gICAgfTtcbiAgfVxuXG4gIHJldHVybiBfZ2V0KHRhcmdldCwgcHJvcGVydHksIHJlY2VpdmVyIHx8IHRhcmdldCk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX2dldDsiLCJmdW5jdGlvbiBfZ2V0UHJvdG90eXBlT2Yobykge1xuICBtb2R1bGUuZXhwb3J0cyA9IF9nZXRQcm90b3R5cGVPZiA9IE9iamVjdC5zZXRQcm90b3R5cGVPZiA/IE9iamVjdC5nZXRQcm90b3R5cGVPZiA6IGZ1bmN0aW9uIF9nZXRQcm90b3R5cGVPZihvKSB7XG4gICAgcmV0dXJuIG8uX19wcm90b19fIHx8IE9iamVjdC5nZXRQcm90b3R5cGVPZihvKTtcbiAgfTtcbiAgcmV0dXJuIF9nZXRQcm90b3R5cGVPZihvKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfZ2V0UHJvdG90eXBlT2Y7IiwidmFyIHNldFByb3RvdHlwZU9mID0gcmVxdWlyZShcIi4vc2V0UHJvdG90eXBlT2ZcIik7XG5cbmZ1bmN0aW9uIF9pbmhlcml0cyhzdWJDbGFzcywgc3VwZXJDbGFzcykge1xuICBpZiAodHlwZW9mIHN1cGVyQ2xhc3MgIT09IFwiZnVuY3Rpb25cIiAmJiBzdXBlckNsYXNzICE9PSBudWxsKSB7XG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlN1cGVyIGV4cHJlc3Npb24gbXVzdCBlaXRoZXIgYmUgbnVsbCBvciBhIGZ1bmN0aW9uXCIpO1xuICB9XG5cbiAgc3ViQ2xhc3MucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShzdXBlckNsYXNzICYmIHN1cGVyQ2xhc3MucHJvdG90eXBlLCB7XG4gICAgY29uc3RydWN0b3I6IHtcbiAgICAgIHZhbHVlOiBzdWJDbGFzcyxcbiAgICAgIHdyaXRhYmxlOiB0cnVlLFxuICAgICAgY29uZmlndXJhYmxlOiB0cnVlXG4gICAgfVxuICB9KTtcbiAgaWYgKHN1cGVyQ2xhc3MpIHNldFByb3RvdHlwZU9mKHN1YkNsYXNzLCBzdXBlckNsYXNzKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfaW5oZXJpdHM7IiwiZnVuY3Rpb24gX2lzTmF0aXZlUmVmbGVjdENvbnN0cnVjdCgpIHtcbiAgaWYgKHR5cGVvZiBSZWZsZWN0ID09PSBcInVuZGVmaW5lZFwiIHx8ICFSZWZsZWN0LmNvbnN0cnVjdCkgcmV0dXJuIGZhbHNlO1xuICBpZiAoUmVmbGVjdC5jb25zdHJ1Y3Quc2hhbSkgcmV0dXJuIGZhbHNlO1xuICBpZiAodHlwZW9mIFByb3h5ID09PSBcImZ1bmN0aW9uXCIpIHJldHVybiB0cnVlO1xuXG4gIHRyeSB7XG4gICAgRGF0ZS5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChSZWZsZWN0LmNvbnN0cnVjdChEYXRlLCBbXSwgZnVuY3Rpb24gKCkge30pKTtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfSBjYXRjaCAoZSkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9pc05hdGl2ZVJlZmxlY3RDb25zdHJ1Y3Q7IiwiZnVuY3Rpb24gX2l0ZXJhYmxlVG9BcnJheShpdGVyKSB7XG4gIGlmICh0eXBlb2YgU3ltYm9sICE9PSBcInVuZGVmaW5lZFwiICYmIFN5bWJvbC5pdGVyYXRvciBpbiBPYmplY3QoaXRlcikpIHJldHVybiBBcnJheS5mcm9tKGl0ZXIpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9pdGVyYWJsZVRvQXJyYXk7IiwiZnVuY3Rpb24gX25vbkl0ZXJhYmxlU3ByZWFkKCkge1xuICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiSW52YWxpZCBhdHRlbXB0IHRvIHNwcmVhZCBub24taXRlcmFibGUgaW5zdGFuY2UuXFxuSW4gb3JkZXIgdG8gYmUgaXRlcmFibGUsIG5vbi1hcnJheSBvYmplY3RzIG11c3QgaGF2ZSBhIFtTeW1ib2wuaXRlcmF0b3JdKCkgbWV0aG9kLlwiKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfbm9uSXRlcmFibGVTcHJlYWQ7IiwidmFyIF90eXBlb2YgPSByZXF1aXJlKFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy90eXBlb2ZcIik7XG5cbnZhciBhc3NlcnRUaGlzSW5pdGlhbGl6ZWQgPSByZXF1aXJlKFwiLi9hc3NlcnRUaGlzSW5pdGlhbGl6ZWRcIik7XG5cbmZ1bmN0aW9uIF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHNlbGYsIGNhbGwpIHtcbiAgaWYgKGNhbGwgJiYgKF90eXBlb2YoY2FsbCkgPT09IFwib2JqZWN0XCIgfHwgdHlwZW9mIGNhbGwgPT09IFwiZnVuY3Rpb25cIikpIHtcbiAgICByZXR1cm4gY2FsbDtcbiAgfVxuXG4gIHJldHVybiBhc3NlcnRUaGlzSW5pdGlhbGl6ZWQoc2VsZik7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm47IiwidmFyIHN1cGVyUHJvcEJhc2UgPSByZXF1aXJlKFwiLi9zdXBlclByb3BCYXNlXCIpO1xuXG52YXIgZGVmaW5lUHJvcGVydHkgPSByZXF1aXJlKFwiLi9kZWZpbmVQcm9wZXJ0eVwiKTtcblxuZnVuY3Rpb24gc2V0KHRhcmdldCwgcHJvcGVydHksIHZhbHVlLCByZWNlaXZlcikge1xuICBpZiAodHlwZW9mIFJlZmxlY3QgIT09IFwidW5kZWZpbmVkXCIgJiYgUmVmbGVjdC5zZXQpIHtcbiAgICBzZXQgPSBSZWZsZWN0LnNldDtcbiAgfSBlbHNlIHtcbiAgICBzZXQgPSBmdW5jdGlvbiBzZXQodGFyZ2V0LCBwcm9wZXJ0eSwgdmFsdWUsIHJlY2VpdmVyKSB7XG4gICAgICB2YXIgYmFzZSA9IHN1cGVyUHJvcEJhc2UodGFyZ2V0LCBwcm9wZXJ0eSk7XG4gICAgICB2YXIgZGVzYztcblxuICAgICAgaWYgKGJhc2UpIHtcbiAgICAgICAgZGVzYyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IoYmFzZSwgcHJvcGVydHkpO1xuXG4gICAgICAgIGlmIChkZXNjLnNldCkge1xuICAgICAgICAgIGRlc2Muc2V0LmNhbGwocmVjZWl2ZXIsIHZhbHVlKTtcbiAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfSBlbHNlIGlmICghZGVzYy53cml0YWJsZSkge1xuICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBkZXNjID0gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihyZWNlaXZlciwgcHJvcGVydHkpO1xuXG4gICAgICBpZiAoZGVzYykge1xuICAgICAgICBpZiAoIWRlc2Mud3JpdGFibGUpIHtcbiAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cblxuICAgICAgICBkZXNjLnZhbHVlID0gdmFsdWU7XG4gICAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShyZWNlaXZlciwgcHJvcGVydHksIGRlc2MpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgZGVmaW5lUHJvcGVydHkocmVjZWl2ZXIsIHByb3BlcnR5LCB2YWx1ZSk7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH07XG4gIH1cblxuICByZXR1cm4gc2V0KHRhcmdldCwgcHJvcGVydHksIHZhbHVlLCByZWNlaXZlcik7XG59XG5cbmZ1bmN0aW9uIF9zZXQodGFyZ2V0LCBwcm9wZXJ0eSwgdmFsdWUsIHJlY2VpdmVyLCBpc1N0cmljdCkge1xuICB2YXIgcyA9IHNldCh0YXJnZXQsIHByb3BlcnR5LCB2YWx1ZSwgcmVjZWl2ZXIgfHwgdGFyZ2V0KTtcblxuICBpZiAoIXMgJiYgaXNTdHJpY3QpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ2ZhaWxlZCB0byBzZXQgcHJvcGVydHknKTtcbiAgfVxuXG4gIHJldHVybiB2YWx1ZTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfc2V0OyIsImZ1bmN0aW9uIF9zZXRQcm90b3R5cGVPZihvLCBwKSB7XG4gIG1vZHVsZS5leHBvcnRzID0gX3NldFByb3RvdHlwZU9mID0gT2JqZWN0LnNldFByb3RvdHlwZU9mIHx8IGZ1bmN0aW9uIF9zZXRQcm90b3R5cGVPZihvLCBwKSB7XG4gICAgby5fX3Byb3RvX18gPSBwO1xuICAgIHJldHVybiBvO1xuICB9O1xuXG4gIHJldHVybiBfc2V0UHJvdG90eXBlT2YobywgcCk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX3NldFByb3RvdHlwZU9mOyIsInZhciBnZXRQcm90b3R5cGVPZiA9IHJlcXVpcmUoXCIuL2dldFByb3RvdHlwZU9mXCIpO1xuXG5mdW5jdGlvbiBfc3VwZXJQcm9wQmFzZShvYmplY3QsIHByb3BlcnR5KSB7XG4gIHdoaWxlICghT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpKSB7XG4gICAgb2JqZWN0ID0gZ2V0UHJvdG90eXBlT2Yob2JqZWN0KTtcbiAgICBpZiAob2JqZWN0ID09PSBudWxsKSBicmVhaztcbiAgfVxuXG4gIHJldHVybiBvYmplY3Q7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX3N1cGVyUHJvcEJhc2U7IiwidmFyIGFycmF5V2l0aG91dEhvbGVzID0gcmVxdWlyZShcIi4vYXJyYXlXaXRob3V0SG9sZXNcIik7XG5cbnZhciBpdGVyYWJsZVRvQXJyYXkgPSByZXF1aXJlKFwiLi9pdGVyYWJsZVRvQXJyYXlcIik7XG5cbnZhciB1bnN1cHBvcnRlZEl0ZXJhYmxlVG9BcnJheSA9IHJlcXVpcmUoXCIuL3Vuc3VwcG9ydGVkSXRlcmFibGVUb0FycmF5XCIpO1xuXG52YXIgbm9uSXRlcmFibGVTcHJlYWQgPSByZXF1aXJlKFwiLi9ub25JdGVyYWJsZVNwcmVhZFwiKTtcblxuZnVuY3Rpb24gX3RvQ29uc3VtYWJsZUFycmF5KGFycikge1xuICByZXR1cm4gYXJyYXlXaXRob3V0SG9sZXMoYXJyKSB8fCBpdGVyYWJsZVRvQXJyYXkoYXJyKSB8fCB1bnN1cHBvcnRlZEl0ZXJhYmxlVG9BcnJheShhcnIpIHx8IG5vbkl0ZXJhYmxlU3ByZWFkKCk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX3RvQ29uc3VtYWJsZUFycmF5OyIsImZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7XG4gIFwiQGJhYmVsL2hlbHBlcnMgLSB0eXBlb2ZcIjtcblxuICBpZiAodHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIHR5cGVvZiBTeW1ib2wuaXRlcmF0b3IgPT09IFwic3ltYm9sXCIpIHtcbiAgICBtb2R1bGUuZXhwb3J0cyA9IF90eXBlb2YgPSBmdW5jdGlvbiBfdHlwZW9mKG9iaikge1xuICAgICAgcmV0dXJuIHR5cGVvZiBvYmo7XG4gICAgfTtcbiAgfSBlbHNlIHtcbiAgICBtb2R1bGUuZXhwb3J0cyA9IF90eXBlb2YgPSBmdW5jdGlvbiBfdHlwZW9mKG9iaikge1xuICAgICAgcmV0dXJuIG9iaiAmJiB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgb2JqLmNvbnN0cnVjdG9yID09PSBTeW1ib2wgJiYgb2JqICE9PSBTeW1ib2wucHJvdG90eXBlID8gXCJzeW1ib2xcIiA6IHR5cGVvZiBvYmo7XG4gICAgfTtcbiAgfVxuXG4gIHJldHVybiBfdHlwZW9mKG9iaik7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX3R5cGVvZjsiLCJ2YXIgYXJyYXlMaWtlVG9BcnJheSA9IHJlcXVpcmUoXCIuL2FycmF5TGlrZVRvQXJyYXlcIik7XG5cbmZ1bmN0aW9uIF91bnN1cHBvcnRlZEl0ZXJhYmxlVG9BcnJheShvLCBtaW5MZW4pIHtcbiAgaWYgKCFvKSByZXR1cm47XG4gIGlmICh0eXBlb2YgbyA9PT0gXCJzdHJpbmdcIikgcmV0dXJuIGFycmF5TGlrZVRvQXJyYXkobywgbWluTGVuKTtcbiAgdmFyIG4gPSBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwobykuc2xpY2UoOCwgLTEpO1xuICBpZiAobiA9PT0gXCJPYmplY3RcIiAmJiBvLmNvbnN0cnVjdG9yKSBuID0gby5jb25zdHJ1Y3Rvci5uYW1lO1xuICBpZiAobiA9PT0gXCJNYXBcIiB8fCBuID09PSBcIlNldFwiKSByZXR1cm4gQXJyYXkuZnJvbShvKTtcbiAgaWYgKG4gPT09IFwiQXJndW1lbnRzXCIgfHwgL14oPzpVaXxJKW50KD86OHwxNnwzMikoPzpDbGFtcGVkKT9BcnJheSQvLnRlc3QobikpIHJldHVybiBhcnJheUxpa2VUb0FycmF5KG8sIG1pbkxlbik7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX3Vuc3VwcG9ydGVkSXRlcmFibGVUb0FycmF5OyIsIi8qXG4gKiBDb3B5cmlnaHQgKEMpIDIwMjAgRWxpYXN0aWsgKGVsaWFzdGlrc29mdHMuY29tKVxuICpcbiAqIFRoaXMgZmlsZSBpcyBwYXJ0IG9mIFwiSlNHYW1lVG9vbHNcIi5cbiAqXG4gKiBcIkpTR2FtZVRvb2xzXCIgaXMgZnJlZSBzb2Z0d2FyZTogeW91IGNhbiByZWRpc3RyaWJ1dGUgaXQgYW5kL29yIG1vZGlmeVxuICogaXQgdW5kZXIgdGhlIHRlcm1zIG9mIHRoZSBHTlUgR2VuZXJhbCBQdWJsaWMgTGljZW5zZSBhcyBwdWJsaXNoZWQgYnlcbiAqIHRoZSBGcmVlIFNvZnR3YXJlIEZvdW5kYXRpb24sIGVpdGhlciB2ZXJzaW9uIDMgb2YgdGhlIExpY2Vuc2UsIG9yXG4gKiAoYXQgeW91ciBvcHRpb24pIGFueSBsYXRlciB2ZXJzaW9uLlxuICpcbiAqIFwiSlNHYW1lVG9vbHNcIiBpcyBkaXN0cmlidXRlZCBpbiB0aGUgaG9wZSB0aGF0IGl0IHdpbGwgYmUgdXNlZnVsLFxuICogYnV0IFdJVEhPVVQgQU5ZIFdBUlJBTlRZOyB3aXRob3V0IGV2ZW4gdGhlIGltcGxpZWQgd2FycmFudHkgb2ZcbiAqIE1FUkNIQU5UQUJJTElUWSBvciBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRS4gIFNlZSB0aGVcbiAqIEdOVSBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlIGZvciBtb3JlIGRldGFpbHMuXG4gKlxuICogWW91IHNob3VsZCBoYXZlIHJlY2VpdmVkIGEgY29weSBvZiB0aGUgR05VIEdlbmVyYWwgUHVibGljIExpY2Vuc2VcbiAqIGFsb25nIHdpdGggXCJKU0dhbWVUb29sc1wiLiAgSWYgbm90LCBzZWUgPGh0dHA6Ly93d3cuZ251Lm9yZy9saWNlbnNlcy8+LlxuICovXG5pbXBvcnQgQ29tcG9uZW50IGZyb20gXCIuL0NvbXBvbmVudFwiO1xuaW1wb3J0IENvbnN0YW50cyBmcm9tIFwiLi9Db25zdGFudHNcIjtcbmltcG9ydCBTdHlsZSBmcm9tIFwiLi9TdHlsZVwiO1xuaW1wb3J0IFV0aWxzIGZyb20gXCIuL1V0aWxzXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEFycm93IGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgc2VsZWN0YWJsZSA9IGZhbHNlO1xuXG4gIGNvbnN0cnVjdG9yKHgsIHksIHRvWCwgdG9ZLCBzdHlsZSkge1xuICAgIHN1cGVyKHgsIHksIG51bGwsIG51bGwsIHN0eWxlKTtcblxuICAgIHRoaXMudG9YID0gdG9YO1xuICAgIHRoaXMudG9ZID0gdG9ZO1xuICB9XG5cbiAgZHJhdyhjb250ZXh0KSB7XG4gICAgaWYodGhpcy5oaWRkZW4pIHJldHVybjtcbiAgICBzdXBlci5kcmF3KGNvbnRleHQpO1xuXG4gICAgY29uc3QgY2FudmFzID0gY29udGV4dC5jYW52YXM7XG4gICAgY29uc3QgY3R4ID0gY2FudmFzLmdldENvbnRleHQoXCIyZFwiKTtcbiAgICBcbiAgICBVdGlscy5kcmF3QXJyb3coY3R4LCB0aGlzLngsIHRoaXMueSwgdGhpcy50b1gsIHRoaXMudG9ZLCB0aGlzLnN0eWxlLmxpbmVXaWR0aCwgdGhpcy5zdHlsZS5oZWFkU2l6ZSwgdGhpcy5zdHlsZS5jb2xvciwgdGhpcy5zdHlsZS5saW5lQ2FwKTtcblxuICAgIHRoaXMuaW5pdCA9IHRydWU7XG4gIH1cblxuICBnZXQgd2lkdGgoKSB7XG4gICAgcmV0dXJuIE1hdGguYWJzKHRoaXMueCAtIHRoaXMudG9YKTtcbiAgfVxuXG4gIGdldCBoZWlnaHQoKSB7XG4gICAgcmV0dXJuIE1hdGguYWJzKHRoaXMueSAtIHRoaXMudG9ZKTtcbiAgfVxuXG4gIGdldCBkZWZhdWx0U3R5bGUoKSB7XG4gICAgcmV0dXJuIG5ldyBTdHlsZSh7XG4gICAgICBcImxpbmVXaWR0aFwiOiBDb25zdGFudHMuU2V0dGluZy5BUlJPV19ERUZBVUxUX0xJTkVfU0laRSxcbiAgICAgIFwiaGVhZFNpemVcIjogQ29uc3RhbnRzLlNldHRpbmcuQVJST1dfREVGQVVMVF9IRUFEX1NJWkUsXG4gICAgICBcImNvbG9yXCI6IENvbnN0YW50cy5TZXR0aW5nLkFSUk9XX0RFRkFVTFRfQ09MT1IsXG4gICAgICBcImxpbmVDYXBcIjogQ29uc3RhbnRzLlNldHRpbmcuQVJST1dfREVGQVVMVF9MSU5FX0NBUFxuICAgIH0pO1xuICB9XG59IiwiLypcbiAqIENvcHlyaWdodCAoQykgMjAyMCBFbGlhc3RpayAoZWxpYXN0aWtzb2Z0cy5jb20pXG4gKlxuICogVGhpcyBmaWxlIGlzIHBhcnQgb2YgXCJKU0dhbWVUb29sc1wiLlxuICpcbiAqIFwiSlNHYW1lVG9vbHNcIiBpcyBmcmVlIHNvZnR3YXJlOiB5b3UgY2FuIHJlZGlzdHJpYnV0ZSBpdCBhbmQvb3IgbW9kaWZ5XG4gKiBpdCB1bmRlciB0aGUgdGVybXMgb2YgdGhlIEdOVSBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlIGFzIHB1Ymxpc2hlZCBieVxuICogdGhlIEZyZWUgU29mdHdhcmUgRm91bmRhdGlvbiwgZWl0aGVyIHZlcnNpb24gMyBvZiB0aGUgTGljZW5zZSwgb3JcbiAqIChhdCB5b3VyIG9wdGlvbikgYW55IGxhdGVyIHZlcnNpb24uXG4gKlxuICogXCJKU0dhbWVUb29sc1wiIGlzIGRpc3RyaWJ1dGVkIGluIHRoZSBob3BlIHRoYXQgaXQgd2lsbCBiZSB1c2VmdWwsXG4gKiBidXQgV0lUSE9VVCBBTlkgV0FSUkFOVFk7IHdpdGhvdXQgZXZlbiB0aGUgaW1wbGllZCB3YXJyYW50eSBvZlxuICogTUVSQ0hBTlRBQklMSVRZIG9yIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFLiAgU2VlIHRoZVxuICogR05VIEdlbmVyYWwgUHVibGljIExpY2Vuc2UgZm9yIG1vcmUgZGV0YWlscy5cbiAqXG4gKiBZb3Ugc2hvdWxkIGhhdmUgcmVjZWl2ZWQgYSBjb3B5IG9mIHRoZSBHTlUgR2VuZXJhbCBQdWJsaWMgTGljZW5zZVxuICogYWxvbmcgd2l0aCBcIkpTR2FtZVRvb2xzXCIuICBJZiBub3QsIHNlZSA8aHR0cDovL3d3dy5nbnUub3JnL2xpY2Vuc2VzLz4uXG4gKi9cbmltcG9ydCBDb21wb25lbnQgZnJvbSBcIi4vQ29tcG9uZW50XCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEJveCBleHRlbmRzIENvbXBvbmVudCB7XG4gIHNlbGVjdGFibGUgPSBmYWxzZTtcblxuICBjb25zdHJ1Y3Rvcih4LCB5LCB3aWR0aCwgaGVpZ2h0LCBzdHlsZSkge1xuICAgIHN1cGVyKHgsIHksIHdpZHRoLCBoZWlnaHQsIHN0eWxlKTtcbiAgfVxuICBcbiAgZHJhdyhjb250ZXh0KSB7XG4gICAgaWYodGhpcy5oaWRkZW4pIHJldHVybjtcbiAgICBzdXBlci5kcmF3KGNvbnRleHQpO1xuXG4gICAgY29uc3QgY2FudmFzID0gY29udGV4dC5jYW52YXM7XG4gICAgY29uc3QgY3R4ID0gY2FudmFzLmdldENvbnRleHQoXCIyZFwiKTtcbiAgICBjdHguc2F2ZSgpO1xuXG4gICAgdGhpcy5kcmF3QmFja2dyb3VuZChjdHgpO1xuICAgIHRoaXMuZHJhd0JvcmRlcihjdHgpO1xuICAgIFxuICAgIGN0eC5yZXN0b3JlKCk7XG4gIH1cblxuICBkcmF3QmFja2dyb3VuZChjdHgpIHtcbiAgICBjb25zdCBjb2xvciA9IHRoaXMuYmFja2dyb3VuZENvbG9yO1xuXG4gICAgaWYoY29sb3IpIHtcbiAgICAgIGN0eC5zYXZlKCk7XG4gIFxuICAgICAgY3R4LmZpbGxTdHlsZSA9IGNvbG9yO1xuICAgICAgY3R4LmZpbGxSZWN0KE1hdGgucm91bmQodGhpcy54KSwgTWF0aC5yb3VuZCh0aGlzLnkpLCBNYXRoLnJvdW5kKHRoaXMud2lkdGgpLCBNYXRoLnJvdW5kKHRoaXMuaGVpZ2h0KSk7XG5cbiAgICAgIGN0eC5yZXN0b3JlKCk7XG4gICAgfVxuICB9XG5cbiAgZ2V0IGJhY2tncm91bmRDb2xvcigpIHtcbiAgICBsZXQgY29sb3IgPSBudWxsO1xuXG4gICAgaWYodGhpcy5ob3ZlcmVkICYmIHRoaXMuY2xpY2tlZCAmJiB0aGlzLnN0eWxlLmJhY2tncm91bmRDb2xvckRvd24gIT0gbnVsbCkge1xuICAgICAgY29sb3IgPSB0aGlzLnN0eWxlLmJhY2tncm91bmRDb2xvckRvd247XG4gICAgfSBlbHNlIGlmKHRoaXMuaG92ZXJlZCAmJiB0aGlzLnN0eWxlLmJhY2tncm91bmRDb2xvckhvdmVyICE9IG51bGwpIHtcbiAgICAgIGNvbG9yID0gdGhpcy5zdHlsZS5iYWNrZ3JvdW5kQ29sb3JIb3ZlcjtcbiAgICB9IGVsc2Uge1xuICAgICAgY29sb3IgPSB0aGlzLnN0eWxlLmJhY2tncm91bmRDb2xvcjtcbiAgICB9XG5cbiAgICByZXR1cm4gY29sb3I7XG4gIH1cblxuICBkcmF3Qm9yZGVyKGN0eCkge1xuICAgIGNvbnN0IGNvbG9yID0gdGhpcy5ib3JkZXJDb2xvcjtcblxuICAgIGlmKGNvbG9yICYmIHRoaXMuc3R5bGUuYm9yZGVyU2l6ZSA+IDApIHtcbiAgICAgIGN0eC5zYXZlKCk7XG4gICAgICBcbiAgICAgIGN0eC5zdHJva2VTdHlsZSA9IGNvbG9yO1xuICAgICAgY3R4LmxpbmVXaWR0aCA9IHRoaXMuc3R5bGUuYm9yZGVyU2l6ZTtcbiAgICAgIFxuICAgICAgY3R4LnN0cm9rZVJlY3QoTWF0aC5yb3VuZCh0aGlzLngpLCBNYXRoLnJvdW5kKHRoaXMueSksIE1hdGgucm91bmQodGhpcy53aWR0aCAtIHRoaXMuc3R5bGUuYm9yZGVyU2l6ZSAvIDIpLCBNYXRoLnJvdW5kKHRoaXMuaGVpZ2h0IC0gdGhpcy5zdHlsZS5ib3JkZXJTaXplIC8gMikpO1xuICBcbiAgICAgIGN0eC5yZXN0b3JlKCk7XG4gICAgfVxuICB9XG5cbiAgZ2V0IGJvcmRlckNvbG9yKCkge1xuICAgIGxldCBjb2xvciA9IG51bGw7XG5cbiAgICBpZih0aGlzLmNsaWNrZWQgJiYgdGhpcy5ob3ZlcmVkICYmIHRoaXMuc3R5bGUuYm9yZGVyQ29sb3JEb3duICE9IG51bGwpIHtcbiAgICAgIGNvbG9yID0gdGhpcy5zdHlsZS5ib3JkZXJDb2xvckRvd247XG4gICAgfSBlbHNlIGlmKCF0aGlzLmNsaWNrZWQgJiYgdGhpcy5ob3ZlcmVkICYmIHRoaXMuc3R5bGUuYm9yZGVyQ29sb3JIb3ZlciAhPSBudWxsKSB7XG4gICAgICBjb2xvciA9IHRoaXMuc3R5bGUuYm9yZGVyQ29sb3JIb3ZlcjtcbiAgICB9IGVsc2UgaWYodGhpcy5zZWxlY3RhYmxlICYmIHRoaXMuc2VsZWN0ZWQgJiYgdGhpcy5zdHlsZS5ib3JkZXJDb2xvclNlbGVjdGVkICE9IG51bGwpIHtcbiAgICAgIGNvbG9yID0gdGhpcy5zdHlsZS5ib3JkZXJDb2xvclNlbGVjdGVkO1xuICAgIH0gZWxzZSB7XG4gICAgICBjb2xvciA9IHRoaXMuc3R5bGUuYm9yZGVyQ29sb3I7XG4gICAgfVxuXG4gICAgcmV0dXJuIGNvbG9yO1xuICB9XG59IiwiLypcbiAqIENvcHlyaWdodCAoQykgMjAyMCBFbGlhc3RpayAoZWxpYXN0aWtzb2Z0cy5jb20pXG4gKlxuICogVGhpcyBmaWxlIGlzIHBhcnQgb2YgXCJKU0dhbWVUb29sc1wiLlxuICpcbiAqIFwiSlNHYW1lVG9vbHNcIiBpcyBmcmVlIHNvZnR3YXJlOiB5b3UgY2FuIHJlZGlzdHJpYnV0ZSBpdCBhbmQvb3IgbW9kaWZ5XG4gKiBpdCB1bmRlciB0aGUgdGVybXMgb2YgdGhlIEdOVSBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlIGFzIHB1Ymxpc2hlZCBieVxuICogdGhlIEZyZWUgU29mdHdhcmUgRm91bmRhdGlvbiwgZWl0aGVyIHZlcnNpb24gMyBvZiB0aGUgTGljZW5zZSwgb3JcbiAqIChhdCB5b3VyIG9wdGlvbikgYW55IGxhdGVyIHZlcnNpb24uXG4gKlxuICogXCJKU0dhbWVUb29sc1wiIGlzIGRpc3RyaWJ1dGVkIGluIHRoZSBob3BlIHRoYXQgaXQgd2lsbCBiZSB1c2VmdWwsXG4gKiBidXQgV0lUSE9VVCBBTlkgV0FSUkFOVFk7IHdpdGhvdXQgZXZlbiB0aGUgaW1wbGllZCB3YXJyYW50eSBvZlxuICogTUVSQ0hBTlRBQklMSVRZIG9yIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFLiAgU2VlIHRoZVxuICogR05VIEdlbmVyYWwgUHVibGljIExpY2Vuc2UgZm9yIG1vcmUgZGV0YWlscy5cbiAqXG4gKiBZb3Ugc2hvdWxkIGhhdmUgcmVjZWl2ZWQgYSBjb3B5IG9mIHRoZSBHTlUgR2VuZXJhbCBQdWJsaWMgTGljZW5zZVxuICogYWxvbmcgd2l0aCBcIkpTR2FtZVRvb2xzXCIuICBJZiBub3QsIHNlZSA8aHR0cDovL3d3dy5nbnUub3JnL2xpY2Vuc2VzLz4uXG4gKi9cbmltcG9ydCBSb3cgZnJvbSBcIi4vUm93XCI7XG5pbXBvcnQgQ29uc3RhbnRzIGZyb20gXCIuL0NvbnN0YW50c1wiO1xuaW1wb3J0IFN0eWxlIGZyb20gXCIuL1N0eWxlXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEJ1dHRvbiBleHRlbmRzIFJvdyB7XG4gIHNlbGVjdGFibGUgPSB0cnVlO1xuXG4gIGNvbnN0cnVjdG9yKHgsIHksIG1heFdpZHRoLCBtYXhIZWlnaHQsIHN0eWxlLCAuLi5jb21wb25lbnRzKSB7XG4gICAgc3VwZXIoeCwgeSwgbWF4V2lkdGgsIG1heEhlaWdodCwgc3R5bGUsIC4uLmNvbXBvbmVudHMpO1xuICB9XG4gIFxuICBkcmF3KGNvbnRleHQpIHtcbiAgICBpZih0aGlzLmhpZGRlbikgcmV0dXJuO1xuICAgIHN1cGVyLmRyYXcoY29udGV4dCk7XG5cbiAgICBjb25zdCBjYW52YXMgPSBjb250ZXh0LmNhbnZhcztcbiAgICBjb25zdCBjdHggPSBjYW52YXMuZ2V0Q29udGV4dChcIjJkXCIpO1xuICAgIGN0eC5zYXZlKCk7XG4gICAgXG4gICAgdGhpcy5kcmF3Q29tcG9uZW50cyhjdHgpO1xuICAgIFxuICAgIGN0eC5yZXN0b3JlKCk7XG4gIH1cblxuICBkcmF3Q29tcG9uZW50cyhjdHgpIHtcbiAgICBzdXBlci5kcmF3KGN0eCk7XG4gIH1cblxuICBnZXQgaGVpZ2h0KCkge1xuICAgIHJldHVybiAodGhpcy5tYXhIZWlnaHQgfHwgc3VwZXIuaGVpZ2h0KSArIHRoaXMuc3R5bGUucGFkZGluZztcbiAgfVxuXG4gIGdldCB3aWR0aCgpIHtcbiAgICByZXR1cm4gKHRoaXMubWF4V2lkdGggfHwgc3VwZXIud2lkdGgpICsgdGhpcy5zdHlsZS5wYWRkaW5nO1xuICB9XG5cbiAgZ2V0IGRlZmF1bHRTdHlsZSgpIHtcbiAgICByZXR1cm4gbmV3IFN0eWxlKHtcbiAgICAgIFwiYmFja2dyb3VuZENvbG9yXCI6IENvbnN0YW50cy5TZXR0aW5nLkJVVFRPTl9ERUZBVUxUX0JBQ0tHUk9VTkQsXG4gICAgICBcImJhY2tncm91bmRDb2xvckhvdmVyXCI6IENvbnN0YW50cy5TZXR0aW5nLkJVVFRPTl9ERUZBVUxUX0hPVkVSX0JBQ0tHUk9VTkQsXG4gICAgICBcImJhY2tncm91bmRDb2xvckRvd25cIjogQ29uc3RhbnRzLlNldHRpbmcuQlVUVE9OX0RFRkFVTFRfQ0xJQ0tfQkFDS0dST1VORCxcbiAgICAgIFwic2Nyb2xsWERpc2FibGVkXCI6IHRydWUsXG4gICAgICBcInNjcm9sbFlEaXNhYmxlZFwiOiB0cnVlXG4gICAgfSk7XG4gIH1cbn0iLCIvKlxuICogQ29weXJpZ2h0IChDKSAyMDIwIEVsaWFzdGlrIChlbGlhc3Rpa3NvZnRzLmNvbSlcbiAqXG4gKiBUaGlzIGZpbGUgaXMgcGFydCBvZiBcIkpTR2FtZVRvb2xzXCIuXG4gKlxuICogXCJKU0dhbWVUb29sc1wiIGlzIGZyZWUgc29mdHdhcmU6IHlvdSBjYW4gcmVkaXN0cmlidXRlIGl0IGFuZC9vciBtb2RpZnlcbiAqIGl0IHVuZGVyIHRoZSB0ZXJtcyBvZiB0aGUgR05VIEdlbmVyYWwgUHVibGljIExpY2Vuc2UgYXMgcHVibGlzaGVkIGJ5XG4gKiB0aGUgRnJlZSBTb2Z0d2FyZSBGb3VuZGF0aW9uLCBlaXRoZXIgdmVyc2lvbiAzIG9mIHRoZSBMaWNlbnNlLCBvclxuICogKGF0IHlvdXIgb3B0aW9uKSBhbnkgbGF0ZXIgdmVyc2lvbi5cbiAqXG4gKiBcIkpTR2FtZVRvb2xzXCIgaXMgZGlzdHJpYnV0ZWQgaW4gdGhlIGhvcGUgdGhhdCBpdCB3aWxsIGJlIHVzZWZ1bCxcbiAqIGJ1dCBXSVRIT1VUIEFOWSBXQVJSQU5UWTsgd2l0aG91dCBldmVuIHRoZSBpbXBsaWVkIHdhcnJhbnR5IG9mXG4gKiBNRVJDSEFOVEFCSUxJVFkgb3IgRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UuICBTZWUgdGhlXG4gKiBHTlUgR2VuZXJhbCBQdWJsaWMgTGljZW5zZSBmb3IgbW9yZSBkZXRhaWxzLlxuICpcbiAqIFlvdSBzaG91bGQgaGF2ZSByZWNlaXZlZCBhIGNvcHkgb2YgdGhlIEdOVSBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlXG4gKiBhbG9uZyB3aXRoIFwiSlNHYW1lVG9vbHNcIi4gIElmIG5vdCwgc2VlIDxodHRwOi8vd3d3LmdudS5vcmcvbGljZW5zZXMvPi5cbiAqL1xuaW1wb3J0IEltYWdlQ29udGFpbmVyIGZyb20gXCIuL0ltYWdlQ29udGFpbmVyXCI7XG5pbXBvcnQgQnV0dG9uIGZyb20gXCIuL0J1dHRvblwiO1xuaW1wb3J0IFN0eWxlIGZyb20gXCIuL1N0eWxlXCI7XG5pbXBvcnQgQ29uc3RhbnRzIGZyb20gXCIuL0NvbnN0YW50c1wiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBCdXR0b25JbWFnZSBleHRlbmRzIEJ1dHRvbiB7XG4gIGNvbnN0cnVjdG9yKGltZ1NyYywgeCwgeSwgYWxpZ25lbWVudCwgdmVydGljYWxBbGlnbmVtZW50LCB3aWR0aCwgaGVpZ2h0LCBiYWNrZ3JvdW5kQ29sb3IsIGJhY2tncm91bmRDb2xvckhvdmVyLCBpbWFnZUxvYWRlcikge1xuICAgIGNvbnN0IHN0eWxlID0gbmV3IFN0eWxlKHtcbiAgICAgIFwiYWxpZ25lbWVudFwiOiBhbGlnbmVtZW50LFxuICAgICAgXCJ2ZXJ0aWNhbEFsaWduZW1lbnRcIjogdmVydGljYWxBbGlnbmVtZW50LFxuICAgICAgXCJiYWNrZ3JvdW5kQ29sb3JcIjogYmFja2dyb3VuZENvbG9yIHx8IENvbnN0YW50cy5TZXR0aW5nLkJVVFRPTl9ERUZBVUxUX0JBQ0tHUk9VTkQsXG4gICAgICBcImJhY2tncm91bmRDb2xvckhvdmVyXCI6IGJhY2tncm91bmRDb2xvckhvdmVyIHx8IENvbnN0YW50cy5TZXR0aW5nLkJVVFRPTl9ERUZBVUxUX0hPVkVSX0JBQ0tHUk9VTkRcbiAgICB9KTtcblxuICAgIHN1cGVyKHgsIHksIHdpZHRoLCBoZWlnaHQsIHN0eWxlKTtcbiAgICB0aGlzLmltYWdlID0gbmV3IEltYWdlQ29udGFpbmVyKGltZ1NyYywgeCwgeSwgd2lkdGgsIGhlaWdodCwgbmV3IFN0eWxlKHsgXCJhbGlnbmVtZW50XCI6IFwiY2VudGVyXCIsIFwidmVydGljYWxBbGlnbmVtZW50XCI6IFwiY2VudGVyXCIgfSksIGltYWdlTG9hZGVyKTtcbiAgICB0aGlzLmFkZCh0aGlzLmltYWdlKTtcblxuICAgIGNvbnNvbGUgJiYgY29uc29sZS53YXJuICYmIGNvbnNvbGUud2FybihDb25zdGFudHMuU3RyaW5nLk5PVElDRV9NRVNTQUdFICsgXCIgXCIgKyBDb25zdGFudHMuU3RyaW5nLkJVVFRPTl9JTUFHRV9ERVBSRUNBVEVEKTtcbiAgfVxuXG4gIGxvYWRJbWFnZShpbWFnZUxvYWRlcikge1xuICAgIGlmKHRoaXMuY29tcG9uZW50c1swXSBpbnN0YW5jZW9mIEltYWdlQ29udGFpbmVyKSB0aGlzLmNvbXBvbmVudHNbMF0ubG9hZEltYWdlKGltYWdlTG9hZGVyKTtcbiAgfVxuXG4gIHNldCBtaW5XaWR0aCh3aWR0aCkge1xuICAgIHRoaXMuaW1hZ2Uud2lkdGggPSB3aWR0aDtcbiAgICBzdXBlci5taW5XaWR0aCA9IHdpZHRoO1xuICB9XG5cbiAgc2V0IG1pbkhlaWdodChoZWlnaHQpIHtcbiAgICB0aGlzLmltYWdlLmhlaWdodCA9IGhlaWdodDtcbiAgICBzdXBlci5taW5IZWlnaHQgPSBoZWlnaHQ7XG4gIH1cblxuICBnZXQgbWluV2lkdGgoKSB7XG4gICAgcmV0dXJuIHN1cGVyLm1pbldpZHRoO1xuICB9XG5cbiAgZ2V0IG1pbkhlaWdodCgpIHtcbiAgICByZXR1cm4gc3VwZXIubWluSGVpZ2h0O1xuICB9XG5cbiAgc2V0IG1heFdpZHRoKHdpZHRoKSB7XG4gICAgdGhpcy5pbWFnZS53aWR0aCA9IHdpZHRoO1xuICAgIHN1cGVyLm1heFdpZHRoID0gd2lkdGg7XG4gIH1cblxuICBzZXQgbWF4SGVpZ2h0KGhlaWdodCkge1xuICAgIHRoaXMuaW1hZ2UuaGVpZ2h0ID0gaGVpZ2h0O1xuICAgIHN1cGVyLm1heEhlaWdodCA9IGhlaWdodDtcbiAgfVxuXG4gIGdldCBtYXhXaWR0aCgpIHtcbiAgICByZXR1cm4gc3VwZXIubWF4V2lkdGg7XG4gIH1cblxuICBnZXQgbWF4SGVpZ2h0KCkge1xuICAgIHJldHVybiBzdXBlci5tYXhIZWlnaHQ7XG4gIH1cblxuICBzZXQgd2lkdGgod2lkdGgpIHtcbiAgICB0aGlzLm1pbldpZHRoID0gd2lkdGg7XG4gICAgdGhpcy5tYXhXaWR0aCA9IHdpZHRoO1xuICB9XG5cbiAgZ2V0IHdpZHRoKCkge1xuICAgIHJldHVybiBzdXBlci53aWR0aDtcbiAgfVxuXG4gIHNldCBoZWlnaHQoaGVpZ2h0KSB7XG4gICAgdGhpcy5taW5IZWlnaHQgPSBoZWlnaHQ7XG4gICAgdGhpcy5tYXhIZWlnaHQgPSBoZWlnaHQ7XG4gIH1cblxuICBnZXQgaGVpZ2h0KCkge1xuICAgIHJldHVybiBzdXBlci5oZWlnaHQ7XG4gIH1cbn0iLCIvKlxuICogQ29weXJpZ2h0IChDKSAyMDIwIEVsaWFzdGlrIChlbGlhc3Rpa3NvZnRzLmNvbSlcbiAqXG4gKiBUaGlzIGZpbGUgaXMgcGFydCBvZiBcIkpTR2FtZVRvb2xzXCIuXG4gKlxuICogXCJKU0dhbWVUb29sc1wiIGlzIGZyZWUgc29mdHdhcmU6IHlvdSBjYW4gcmVkaXN0cmlidXRlIGl0IGFuZC9vciBtb2RpZnlcbiAqIGl0IHVuZGVyIHRoZSB0ZXJtcyBvZiB0aGUgR05VIEdlbmVyYWwgUHVibGljIExpY2Vuc2UgYXMgcHVibGlzaGVkIGJ5XG4gKiB0aGUgRnJlZSBTb2Z0d2FyZSBGb3VuZGF0aW9uLCBlaXRoZXIgdmVyc2lvbiAzIG9mIHRoZSBMaWNlbnNlLCBvclxuICogKGF0IHlvdXIgb3B0aW9uKSBhbnkgbGF0ZXIgdmVyc2lvbi5cbiAqXG4gKiBcIkpTR2FtZVRvb2xzXCIgaXMgZGlzdHJpYnV0ZWQgaW4gdGhlIGhvcGUgdGhhdCBpdCB3aWxsIGJlIHVzZWZ1bCxcbiAqIGJ1dCBXSVRIT1VUIEFOWSBXQVJSQU5UWTsgd2l0aG91dCBldmVuIHRoZSBpbXBsaWVkIHdhcnJhbnR5IG9mXG4gKiBNRVJDSEFOVEFCSUxJVFkgb3IgRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UuICBTZWUgdGhlXG4gKiBHTlUgR2VuZXJhbCBQdWJsaWMgTGljZW5zZSBmb3IgbW9yZSBkZXRhaWxzLlxuICpcbiAqIFlvdSBzaG91bGQgaGF2ZSByZWNlaXZlZCBhIGNvcHkgb2YgdGhlIEdOVSBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlXG4gKiBhbG9uZyB3aXRoIFwiSlNHYW1lVG9vbHNcIi4gIElmIG5vdCwgc2VlIDxodHRwOi8vd3d3LmdudS5vcmcvbGljZW5zZXMvPi5cbiAqL1xuaW1wb3J0IENvbnN0YW50cyBmcm9tIFwiLi9Db25zdGFudHNcIjtcbmltcG9ydCBVdGlscyBmcm9tIFwiLi9VdGlsc1wiO1xuaW1wb3J0IFNjZW5lIGZyb20gXCIuL1NjZW5lXCI7XG5pbXBvcnQgUmVhY3RvckNhbnZhcyBmcm9tIFwiLi9SZWFjdG9yQ2FudmFzXCI7XG5pbXBvcnQgTWVudSBmcm9tIFwiLi9NZW51XCI7XG5pbXBvcnQgTGFiZWwgZnJvbSBcIi4vTGFiZWxcIjtcbmltcG9ydCBTdHlsZSBmcm9tIFwiLi9TdHlsZVwiO1xuaW1wb3J0IEJ1dHRvbiBmcm9tIFwiLi9CdXR0b25cIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ2FudmFzIHtcbiAgI2xhc3RGcmFtZVRpbWU7XG4gICNfd2lkdGg7XG4gICNfaGVpZ2h0O1xuXG4gIGNvbnN0cnVjdG9yKHNjZW5lLCBjYW52YXMsIHdpZHRoLCBoZWlnaHQsIGF1dG9SZXNpemUsIG1heEZQUykge1xuICAgIHRoaXMuY2FudmFzID0gY2FudmFzIHx8IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJjYW52YXNcIik7XG4gICAgdGhpcy5jb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIHRoaXMud2lkdGggPSB3aWR0aCB8fCBDb25zdGFudHMuU2V0dGluZy5DQU5WQVNfV0lEVEg7XG4gICAgdGhpcy5oZWlnaHQgPSBoZWlnaHQgfHwgQ29uc3RhbnRzLlNldHRpbmcuQ0FOVkFTX0hFSUdIVDtcbiAgICB0aGlzLnNjZW5lID0gc2NlbmU7XG4gICAgdGhpcy5jb250YWluZXIuYXBwZW5kQ2hpbGQodGhpcy5jYW52YXMpO1xuICAgIHRoaXMuc3RhcnRlZCA9IGZhbHNlO1xuICAgIHRoaXMuaW5pdCA9IGZhbHNlO1xuICAgIHRoaXMubWF4RlBTID0gbWF4RlBTIHx8IC0xO1xuICAgIHRoaXMuI2xhc3RGcmFtZVRpbWUgPSAwO1xuICAgIHRoaXMuaGFzRXJyb3IgPSBmYWxzZTtcbiAgICB0aGlzLmZ1bGxzY3JlZW4gPSBmYWxzZTtcbiAgICB0aGlzLmZ1bGxwYWdlID0gZmFsc2U7XG5cbiAgICAvLyBFcnJvciBtZXNzYWdlIHNjcmVlblxuICAgIGNvbnN0IGJ1dHRvblNjZW5lRXJyb3IgPSBuZXcgQnV0dG9uKG51bGwsIG51bGwsIG51bGwsIG51bGwsIG5ldyBTdHlsZSh7IFwiYWxpZ25lbWVudFwiOiBcImNlbnRlclwiLCBcImJhY2tncm91bmRDb2xvclwiOiBDb25zdGFudHMuU2V0dGluZy5CVVRUT05fREVGQVVMVF9BTFRFUk5BVElWRV9CQUNLR1JPVU5EIH0pLCBuZXcgTGFiZWwoQ29uc3RhbnRzLlN0cmluZy5SRVRSWSwgbnVsbCwgbnVsbCwgbmV3IFN0eWxlKHsgXCJmb250Q29sb3JcIjogXCJ3aGl0ZVwiLCBcImFsaWduZW1lbnRcIjogXCJjZW50ZXJcIiB9KSkpO1xuICAgIGNvbnN0IG1lbnVTY2VuZUVycm9yID0gbmV3IE1lbnUobmV3IFN0eWxlKHsgXCJzcGFjZUJldHdlZW5Db21wb25lbnRzXCI6IDE1IH0pLCBuZXcgTGFiZWwoQ29uc3RhbnRzLlN0cmluZy5FUlJPUl9NRVNTQUdFX0NBTlZBU19MQUJFTCwgbnVsbCwgbnVsbCwgbmV3IFN0eWxlKHsgXCJmb250Q29sb3JcIjogXCJ3aGl0ZVwiLCBcImFsaWduZW1lbnRcIjogXCJjZW50ZXJcIiB9KSksIGJ1dHRvblNjZW5lRXJyb3IpO1xuICAgIG1lbnVTY2VuZUVycm9yLmVuYWJsZSgpO1xuXG4gICAgdGhpcy5zY2VuZUVycm9yID0gbmV3IFNjZW5lKG1lbnVTY2VuZUVycm9yKTtcbiAgICB0aGlzLnNjZW5lUHJldmlvdXMgPSB0aGlzLnNjZW5lO1xuXG4gICAgYnV0dG9uU2NlbmVFcnJvci5hZGRDbGlja0FjdGlvbigoKSA9PiB7XG4gICAgICB0aGlzLmhhc0Vycm9yID0gZmFsc2U7XG4gICAgICB0aGlzLnNjZW5lID0gdGhpcy5zY2VuZVByZXZpb3VzXG4gICAgfSk7XG4gICAgXG4gICAgLy8gUmVhY3RvcnMvZXZlbnRzXG4gICAgdGhpcy5yZWFjdG9yID0gbmV3IFJlYWN0b3JDYW52YXMoKTtcbiAgICB0aGlzLnJlYWN0b3IucmVnaXN0ZXJFdmVudChcIm1vdXNlbW92ZVwiKTtcbiAgICB0aGlzLnJlYWN0b3IucmVnaXN0ZXJFdmVudChcImNsaWNrXCIpO1xuICAgIHRoaXMucmVhY3Rvci5yZWdpc3RlckV2ZW50KFwibW91c2Vkb3duXCIpO1xuICAgIHRoaXMucmVhY3Rvci5yZWdpc3RlckV2ZW50KFwibW91c2V1cFwiKTtcbiAgICB0aGlzLnJlYWN0b3IucmVnaXN0ZXJFdmVudChcIndoZWVsXCIpO1xuICAgIHRoaXMucmVhY3Rvci5yZWdpc3RlckV2ZW50KFwidG91Y2hzdGFydFwiKTtcbiAgICB0aGlzLnJlYWN0b3IucmVnaXN0ZXJFdmVudChcInRvdWNoZW5kXCIpO1xuICAgIHRoaXMucmVhY3Rvci5yZWdpc3RlckV2ZW50KFwidG91Y2htb3ZlXCIpO1xuXG4gICAgaWYoYXV0b1Jlc2l6ZSkgdGhpcy5hdXRvUmVzaXplKCk7XG4gICAgdGhpcy5jcmVhdGVFdmVudHMoKTtcblxuICAgIGlmKENvbnN0YW50cy5TZXR0aW5nLkRJU0FCTEVfT1BUSU1JWkFUSU9OUykge1xuICAgICAgY29uc29sZSAmJiBjb25zb2xlLmluZm8oQ29uc3RhbnRzLlN0cmluZy5OT1RJQ0VfTUVTU0FHRSArIFwiIFwiICsgQ29uc3RhbnRzLlN0cmluZy5PUFRJTUlaQVRJT05fRElTQUJMRUQpO1xuICAgIH1cblxuICAgIGlmKENvbnN0YW50cy5TZXR0aW5nLkRJU0FCTEVfQ09OVEFJTkVSU19DVVRUSU5HKSB7XG4gICAgICBjb25zb2xlICYmIGNvbnNvbGUuaW5mbyhDb25zdGFudHMuU3RyaW5nLk5PVElDRV9NRVNTQUdFICsgXCIgXCIgKyBDb25zdGFudHMuU3RyaW5nLkNPTlRBSU5FUl9DVVRUSU5HX0RJU0FCTEVEKTtcbiAgICB9XG4gIH1cblxuICBkcmF3KCkge1xuICAgIGNvbnN0IGN0eCA9IHRoaXMuY2FudmFzLmdldENvbnRleHQoXCIyZFwiKTtcbiAgICB0aGlzLmRyYXdDbGVhcihjdHgpO1xuICAgIHRoaXMuZHJhd1NjZW5lKGN0eCk7XG4gIH1cblxuICBkcmF3U2NlbmUoY3R4KSB7XG4gICAgaWYodGhpcy5zY2VuZSkge1xuICAgICAgdGhpcy5zY2VuZS5wYXJlbnQgPSB0aGlzO1xuICAgICAgdGhpcy5zY2VuZS5jYW52YXMgPSB0aGlzO1xuXG4gICAgICB0cnkge1xuICAgICAgICBjdHguc2NhbGUoQ29uc3RhbnRzLlNldHRpbmcuUElYRUxfUkFUSU8sIENvbnN0YW50cy5TZXR0aW5nLlBJWEVMX1JBVElPKTtcbiAgICAgICAgdGhpcy5zY2VuZS5kcmF3KGN0eCk7XG4gICAgICB9IGNhdGNoKGUpIHtcbiAgICAgICAgdGhpcy5oYXNFcnJvciA9IHRydWU7XG4gICAgICAgIHRoaXMuc2NlbmUgPSB0aGlzLnNjZW5lRXJyb3I7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoQ29uc3RhbnRzLlN0cmluZy5FUlJPUl9NRVNTQUdFICsgXCIgXCIgKyBDb25zdGFudHMuU3RyaW5nLkVSUk9SX01FU1NBR0VfQ0FOVkFTICsgXCJcXG5cIiwgZSk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgZHJhd0NsZWFyKGN0eCkge1xuICAgIFV0aWxzLmNsZWFyKGN0eCk7XG4gIH1cblxuICBzdGFydERyYXcoZnVuYykge1xuICAgIHRoaXMuc3RhcnRlZCA9IHRydWU7XG5cbiAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUodGltZSA9PiB7XG4gICAgICBpZih0aGlzLnN0YXJ0ZWQpIHtcbiAgICAgICAgY29uc3Qgb2Zmc2V0RnJhbWUgPSB0aW1lIC0gdGhpcy4jbGFzdEZyYW1lVGltZTtcblxuICAgICAgICB0aGlzLmZ1bGxzY3JlZW4gPSBkb2N1bWVudC5mdWxsc2NyZWVuRWxlbWVudCA9PSB0aGlzLmNhbnZhcyB8fCBkb2N1bWVudC5mdWxsc2NyZWVuRWxlbWVudCA9PSB0aGlzLmNvbnRhaW5lcjtcblxuICAgICAgICBpZihDb25zdGFudHMuU2V0dGluZy5FTkFCTEVfUElYRUxfUkFUSU9fUkVTSVpJTkcpIHtcbiAgICAgICAgICBDb25zdGFudHMuU2V0dGluZy5QSVhFTF9SQVRJTyA9IHdpbmRvdy5kZXZpY2VQaXhlbFJhdGlvICogQ29uc3RhbnRzLlNldHRpbmcuUkVTT0xVVElPTl9TQ0FMRTsgLy8gVXBkYXRlIHRoZSBkZXZpY2UgcGl4ZWwgcmF0aW8sIG9ubHkgaW4gZnVsbHNjcmVlbiBtb2RlL2Z1bGxwYWdlIG1vZGVcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBDb25zdGFudHMuU2V0dGluZy5QSVhFTF9SQVRJTyA9IDEgKiBDb25zdGFudHMuU2V0dGluZy5SRVNPTFVUSU9OX1NDQUxFO1xuICAgICAgICB9XG5cbiAgICAgICAgVXRpbHMuYXV0b0RQSSh0aGlzLmNhbnZhcyk7XG5cbiAgICAgICAgaWYodGhpcy5tYXhGUFMgPCAxIHx8IG9mZnNldEZyYW1lID4gMTAwMCAvIHRoaXMubWF4RlBTKSB7XG4gICAgICAgICAgdGhpcy4jbGFzdEZyYW1lVGltZSA9IHRpbWU7XG4gICAgICAgICAgdGhpcy5kcmF3KCk7XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgIHRoaXMuc3RhcnREcmF3KGZ1bmMpO1xuICAgICAgICBpZihmdW5jKSBmdW5jKCk7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICBzdG9wRHJhdygpIHtcbiAgICB0aGlzLnN0YXJ0ZWQgPSBmYWxzZTtcbiAgfVxuXG4gIGFwcGVuZFRvKGVsZW1lbnQpIHtcbiAgICBlbGVtZW50LmFwcGVuZENoaWxkKHRoaXMuY29udGFpbmVyKTtcbiAgfVxuXG4gIHJlbW92ZShlbGVtZW50KSB7XG4gICAgZWxlbWVudC5yZW1vdmVDaGlsZCh0aGlzLmNvbnRhaW5lcik7XG4gICAgdGhpcy5jb250YWluZXIucmVtb3ZlQ2hpbGQodGhpcy5jYW52YXMpO1xuICB9XG5cbiAgdG9nZ2xlRnVsbHNjcmVlbigpIHtcbiAgICBVdGlscy50b2dnbGVGdWxsc2NyZWVuKHRoaXMuY2FudmFzLCB0aGlzLmNvbnRhaW5lcik7XG4gIH1cblxuICB0b2dnbGVGdWxscGFnZSgpIHtcbiAgICBVdGlscy50b2dnbGVGdWxscGFnZSh0aGlzLmNhbnZhcywgdGhpcy5jb250YWluZXIpO1xuICAgIHRoaXMuZnVsbHBhZ2UgPSAhdGhpcy5mdWxscGFnZTtcbiAgfVxuXG4gIGF1dG9SZXNpemUoKSB7XG4gICAgVXRpbHMuZW5hYmxlQXV0b1Jlc2l6ZUNhbnZhcyh0aGlzLmNhbnZhcywgdGhpcy5jb250YWluZXIsIHRoaXMud2lkdGgsIHRoaXMuaGVpZ2h0KTtcbiAgfVxuXG4gIGdldCB4KCkge1xuICAgIHJldHVybiAwO1xuICB9XG5cbiAgZ2V0IHkoKSB7XG4gICAgcmV0dXJuIDA7XG4gIH1cblxuICBnZXQgd2lkdGgoKSB7XG4gICAgcmV0dXJuIHRoaXMuY2FudmFzID8gVXRpbHMuZ2V0Q2FudmFzV2lkdGgodGhpcy5jYW52YXMpIDogdGhpcy4jX3dpZHRoO1xuICB9XG5cbiAgZ2V0IGhlaWdodCgpIHtcbiAgICByZXR1cm4gdGhpcy5jYW52YXMgPyBVdGlscy5nZXRDYW52YXNIZWlnaHQodGhpcy5jYW52YXMpIDogdGhpcy4jX2hlaWdodDtcbiAgfVxuXG4gIGdldCBzdHlsZSgpIHtcbiAgICByZXR1cm4gdGhpcy5jYW52YXMgPyB0aGlzLmNhbnZhcy5zdHlsZSA6IG51bGw7XG4gIH1cblxuICBzZXQgd2lkdGgod2lkdGgpIHtcbiAgICBpZih3aWR0aCAhPSB0aGlzLiNfd2lkdGgpIHtcbiAgICAgIHRoaXMuI193aWR0aCA9IHdpZHRoO1xuICAgICAgdGhpcy5jYW52YXMud2lkdGggPSB3aWR0aDtcbiAgICAgIHRoaXMuc2NlbmUgJiYgdGhpcy5zY2VuZS5yZWFjdG9yLmRpc3BhdGNoRXZlbnQoXCJvbkNoYW5nZVwiLCB0aGlzKTtcbiAgICB9XG4gIH1cblxuICBzZXQgaGVpZ2h0KGhlaWdodCkge1xuICAgIGlmKGhlaWdodCAhPSB0aGlzLiNfaGVpZ2h0KSB7XG4gICAgICB0aGlzLiNfaGVpZ2h0ID0gaGVpZ2h0O1xuICAgICAgdGhpcy5jYW52YXMuaGVpZ2h0ID0gaGVpZ2h0O1xuICAgICAgdGhpcy5zY2VuZSAmJiB0aGlzLnNjZW5lLnJlYWN0b3IuZGlzcGF0Y2hFdmVudChcIm9uQ2hhbmdlXCIsIHRoaXMpO1xuICAgIH1cbiAgfVxuXG4gIGdldENvbnRleHQoY29udGV4dCkge1xuICAgIHJldHVybiB0aGlzLmNhbnZhcyA/IHRoaXMuY2FudmFzLmdldENvbnRleHQoY29udGV4dCA/IGNvbnRleHQgOiBcIjJkXCIpIDogbnVsbDtcbiAgfVxuXG4gIGNyZWF0ZUV2ZW50cygpIHtcbiAgICBpZighdGhpcy5pbml0ICYmIHRoaXMuY2FudmFzKSB7XG4gICAgICBbXCJtb3VzZW1vdmVcIiwgXCJjbGlja1wiLCBcIm1vdXNlZG93blwiLCBcIm1vdXNldXBcIiwgXCJ3aGVlbFwiXS5mb3JFYWNoKGV2ZW50TmFtZSA9PiB7XG4gICAgICAgIHRoaXMuY2FudmFzLmFkZEV2ZW50TGlzdGVuZXIoZXZlbnROYW1lLCBldmVudCA9PiB7XG4gICAgICAgICAgY29uc3QgbW91c2VQb3NpdGlvbiA9IHRoaXMuZ2V0TW91c2VQb3MoZXZlbnQpO1xuICAgICAgICAgIHRoaXMuZG9FdmVudHMoZXZlbnQsIGV2ZW50TmFtZSwgbW91c2VQb3NpdGlvbik7XG4gICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgfSwgZmFsc2UpO1xuICAgICAgfSk7XG5cbiAgICAgIFtcInRvdWNoc3RhcnRcIiwgXCJ0b3VjaG1vdmVcIiwgXCJ0b3VjaGVuZFwiXS5mb3JFYWNoKGV2ZW50TmFtZSA9PiB7XG4gICAgICAgIHRoaXMuY2FudmFzLmFkZEV2ZW50TGlzdGVuZXIoZXZlbnROYW1lLCBldmVudCA9PiB7XG4gICAgICAgICAgY29uc3QgY2hhbmdlZFRvdWNoZXMgPSBldmVudC5jaGFuZ2VkVG91Y2hlc1swXTtcbiAgICAgICAgICBjb25zdCBwb3NpdGlvbiA9IHRoaXMuZ2V0TW91c2VQb3MoY2hhbmdlZFRvdWNoZXMpO1xuICAgICAgICAgIHRoaXMuZG9FdmVudHMoZXZlbnQsIGV2ZW50TmFtZSwgcG9zaXRpb24pO1xuICAgICAgICB9KTtcbiAgICAgIH0pO1xuXG4gICAgICB0aGlzLmluaXQgPSB0cnVlO1xuICAgIH1cbiAgfVxuXG4gIGRvRXZlbnRzKGV2ZW50LCBldmVudE5hbWUsIHBvc2l0aW9uKSB7XG4gICAgY29uc3QgY29tcG9uZW50cyA9IHRoaXMuZ2V0Q29tcG9uZW50c0F0UG9zaXRpb24ocG9zaXRpb24pOyAvLyBHZXQgYWxsIGVsZW1lbnRzIGF0IHRoZSBjdXJyZW50IHBvc2l0aW9uXG4gICAgdGhpcy5yZWFjdG9yLmRpc3BhdGNoRXZlbnQoZXZlbnROYW1lLCBldmVudCwgZmFsc2UpOyAvLyBEaXNwYXRjaCB0byBhbGwgY29tcG9uZW50cyB0byBkaXNhYmxlIHRoZW0gKGNhbGwgd2l0aCBmYWxzZSlcbiAgICBbLi4uY29tcG9uZW50c10ucmV2ZXJzZSgpLmZvckVhY2goY29tcG9uZW50ID0+IHRoaXMucmVhY3Rvci5kaXNwYXRjaEV2ZW50Q29tcG9uZW50KGV2ZW50TmFtZSwgY29tcG9uZW50LCBldmVudCwgdHJ1ZSkpOyAvLyBEaXNwYXRjaCB0byBjb21wb25lbnQgZGV0ZWN0ZWQgdG8gZW5hYmxlIHRoZW0gKGNhbGwgd2l0aCB0cnVlKVxuICB9XG5cbiAgYWRkRXZlbnRMaXN0ZW5lcihldmVudCwgY29tcG9uZW50LCBjYWxsYmFjaykge1xuICAgIHRoaXMucmVhY3Rvci5hZGRFdmVudExpc3RlbmVyKGV2ZW50LCBjb21wb25lbnQsIGNhbGxiYWNrKTtcbiAgfVxuICBcbiAgZ2V0TW91c2VQb3MoZXZlbnQpIHtcbiAgICByZXR1cm4gVXRpbHMuZ2V0TW91c2VQb3ModGhpcy5jYW52YXMsIGV2ZW50KTtcbiAgfVxuXG4gIGdldEFsbENvbXBvbmVudHMoc3RhcnQgPSB0aGlzLnNjZW5lKSB7XG4gICAgcmV0dXJuIHRoaXMuc2NlbmUuZ2V0QWxsQ29tcG9uZW50cyhzdGFydCk7XG4gIH1cblxuICBnZXRDb21wb25lbnRzQXRQb3NpdGlvbihtb3VzZVBvc2l0aW9uLCBzdGFydCA9IHRoaXMuc2NlbmUpIHtcbiAgICBjb25zdCBhbGxDb21wb25lbnRzID0gdGhpcy5zY2VuZS5nZXRDb21wb25lbnRzVHJlZShzdGFydCk7XG4gICAgY29uc3QgcmVzdWx0ID0gW3N0YXJ0XTtcblxuICAgIGlmKGFsbENvbXBvbmVudHMuY2hpbGRzKSB7XG4gICAgICBhbGxDb21wb25lbnRzLmNoaWxkcy5zb3J0KFNjZW5lLnNvcnRDb21wb25lbnRzVHJlZSkucmV2ZXJzZSgpLnNvbWUoY2hpbGQgPT4ge1xuICAgICAgICBpZihjaGlsZC5jb21wb25lbnQuaXNJbnNpZGUobW91c2VQb3NpdGlvbikgJiYgIWNoaWxkLmNvbXBvbmVudC5oaWRkZW4gJiYgIWNoaWxkLmNvbXBvbmVudC5kaXNhYmxlZCkge1xuICAgICAgICAgIHJlc3VsdC5wdXNoKC4uLnRoaXMuZ2V0Q29tcG9uZW50c0F0UG9zaXRpb24obW91c2VQb3NpdGlvbiwgY2hpbGQuY29tcG9uZW50KSk7XG4gICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH1cblxuICAgIHJldHVybiByZXN1bHQ7XG4gIH1cbn0iLCIvKlxuICogQ29weXJpZ2h0IChDKSAyMDIwIEVsaWFzdGlrIChlbGlhc3Rpa3NvZnRzLmNvbSlcbiAqXG4gKiBUaGlzIGZpbGUgaXMgcGFydCBvZiBcIkpTR2FtZVRvb2xzXCIuXG4gKlxuICogXCJKU0dhbWVUb29sc1wiIGlzIGZyZWUgc29mdHdhcmU6IHlvdSBjYW4gcmVkaXN0cmlidXRlIGl0IGFuZC9vciBtb2RpZnlcbiAqIGl0IHVuZGVyIHRoZSB0ZXJtcyBvZiB0aGUgR05VIEdlbmVyYWwgUHVibGljIExpY2Vuc2UgYXMgcHVibGlzaGVkIGJ5XG4gKiB0aGUgRnJlZSBTb2Z0d2FyZSBGb3VuZGF0aW9uLCBlaXRoZXIgdmVyc2lvbiAzIG9mIHRoZSBMaWNlbnNlLCBvclxuICogKGF0IHlvdXIgb3B0aW9uKSBhbnkgbGF0ZXIgdmVyc2lvbi5cbiAqXG4gKiBcIkpTR2FtZVRvb2xzXCIgaXMgZGlzdHJpYnV0ZWQgaW4gdGhlIGhvcGUgdGhhdCBpdCB3aWxsIGJlIHVzZWZ1bCxcbiAqIGJ1dCBXSVRIT1VUIEFOWSBXQVJSQU5UWTsgd2l0aG91dCBldmVuIHRoZSBpbXBsaWVkIHdhcnJhbnR5IG9mXG4gKiBNRVJDSEFOVEFCSUxJVFkgb3IgRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UuICBTZWUgdGhlXG4gKiBHTlUgR2VuZXJhbCBQdWJsaWMgTGljZW5zZSBmb3IgbW9yZSBkZXRhaWxzLlxuICpcbiAqIFlvdSBzaG91bGQgaGF2ZSByZWNlaXZlZCBhIGNvcHkgb2YgdGhlIEdOVSBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlXG4gKiBhbG9uZyB3aXRoIFwiSlNHYW1lVG9vbHNcIi4gIElmIG5vdCwgc2VlIDxodHRwOi8vd3d3LmdudS5vcmcvbGljZW5zZXMvPi5cbiAqL1xuaW1wb3J0IENvbXBvbmVudCBmcm9tIFwiLi9Db21wb25lbnRcIjtcbmltcG9ydCBDb25zdGFudHMgZnJvbSBcIi4vQ29uc3RhbnRzXCI7XG5pbXBvcnQgVXRpbHMgZnJvbSBcIi4vVXRpbHNcIjtcbmltcG9ydCBTdHlsZSBmcm9tIFwiLi9TdHlsZVwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDaXJjbGUgZXh0ZW5kcyBDb21wb25lbnQge1xuICBzZWxlY3RhYmxlID0gZmFsc2U7XG5cbiAgY29uc3RydWN0b3IoeCwgeSwgd2lkdGgsIHN0eWxlKSB7XG4gICAgc3VwZXIoeCwgeSwgd2lkdGgsIHdpZHRoLCBzdHlsZSk7XG4gIH1cblxuICBkcmF3KGNvbnRleHQpIHtcbiAgICBpZih0aGlzLmhpZGRlbikgcmV0dXJuO1xuICAgIHN1cGVyLmRyYXcoY29udGV4dCk7XG5cbiAgICBjb25zdCBjYW52YXMgPSBjb250ZXh0LmNhbnZhcztcbiAgICBjb25zdCBjdHggPSBjYW52YXMuZ2V0Q29udGV4dChcIjJkXCIpO1xuICAgIFxuICAgIFV0aWxzLmRyYXdDaXJjbGUoY3R4LCB0aGlzLngsIHRoaXMueSwgdGhpcy53aWR0aCwgdGhpcy5zdHlsZS5saW5lV2lkdGgsIHRoaXMuc3R5bGUuY29sb3IsIHRoaXMuc3R5bGUubGluZUNhcCwgdGhpcy5zdHlsZS5maWxsLCB0aGlzLnN0eWxlLmZpbGxDb2xvcik7XG5cbiAgICB0aGlzLmluaXQgPSB0cnVlO1xuICB9XG5cbiAgZ2V0IHdpZHRoKCkge1xuICAgIHJldHVybiBzdXBlci53aWR0aCArIHRoaXMuc3R5bGUubGluZVdpZHRoO1xuICB9XG5cbiAgZ2V0IGhlaWdodCgpIHtcbiAgICByZXR1cm4gc3VwZXIuaGVpZ2h0ICsgdGhpcy5zdHlsZS5saW5lV2lkdGg7XG4gIH1cblxuICBzZXQgd2lkdGgod2lkdGgpIHtcbiAgICBzdXBlci53aWR0aCA9IHdpZHRoO1xuICB9XG5cbiAgc2V0IGhlaWdodChoZWlnaHQpIHtcbiAgICBzdXBlci5oZWlnaHQgPSBoZWlnaHQ7XG4gIH1cblxuICBnZXQgZGVmYXVsdFN0eWxlKCkge1xuICAgIHJldHVybiBuZXcgU3R5bGUoe1xuICAgICAgXCJsaW5lV2lkdGhcIjogQ29uc3RhbnRzLlNldHRpbmcuQ0lSQ0xFX0RFRkFVTFRfTElORV9TSVpFLFxuICAgICAgXCJjb2xvclwiOiBDb25zdGFudHMuU2V0dGluZy5DSVJDTEVfREVGQVVMVF9DT0xPUixcbiAgICAgIFwiZmlsbFwiOiBDb25zdGFudHMuU2V0dGluZy5DSVJDTEVfREVGQVVMVF9GSUxMLFxuICAgICAgXCJsaW5lQ2FwXCI6IENvbnN0YW50cy5TZXR0aW5nLkNJUkNMRV9ERUZBVUxUX0xJTkVfQ0FQLFxuICAgICAgXCJmaWxsQ29sb3JcIjogQ29uc3RhbnRzLlNldHRpbmcuQ0lSQ0xFX0RFRkFVTFRfRklMTF9DT0xPUlxuICAgIH0pO1xuICB9XG59IiwiLypcbiAqIENvcHlyaWdodCAoQykgMjAyMCBFbGlhc3RpayAoZWxpYXN0aWtzb2Z0cy5jb20pXG4gKlxuICogVGhpcyBmaWxlIGlzIHBhcnQgb2YgXCJKU0dhbWVUb29sc1wiLlxuICpcbiAqIFwiSlNHYW1lVG9vbHNcIiBpcyBmcmVlIHNvZnR3YXJlOiB5b3UgY2FuIHJlZGlzdHJpYnV0ZSBpdCBhbmQvb3IgbW9kaWZ5XG4gKiBpdCB1bmRlciB0aGUgdGVybXMgb2YgdGhlIEdOVSBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlIGFzIHB1Ymxpc2hlZCBieVxuICogdGhlIEZyZWUgU29mdHdhcmUgRm91bmRhdGlvbiwgZWl0aGVyIHZlcnNpb24gMyBvZiB0aGUgTGljZW5zZSwgb3JcbiAqIChhdCB5b3VyIG9wdGlvbikgYW55IGxhdGVyIHZlcnNpb24uXG4gKlxuICogXCJKU0dhbWVUb29sc1wiIGlzIGRpc3RyaWJ1dGVkIGluIHRoZSBob3BlIHRoYXQgaXQgd2lsbCBiZSB1c2VmdWwsXG4gKiBidXQgV0lUSE9VVCBBTlkgV0FSUkFOVFk7IHdpdGhvdXQgZXZlbiB0aGUgaW1wbGllZCB3YXJyYW50eSBvZlxuICogTUVSQ0hBTlRBQklMSVRZIG9yIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFLiAgU2VlIHRoZVxuICogR05VIEdlbmVyYWwgUHVibGljIExpY2Vuc2UgZm9yIG1vcmUgZGV0YWlscy5cbiAqXG4gKiBZb3Ugc2hvdWxkIGhhdmUgcmVjZWl2ZWQgYSBjb3B5IG9mIHRoZSBHTlUgR2VuZXJhbCBQdWJsaWMgTGljZW5zZVxuICogYWxvbmcgd2l0aCBcIkpTR2FtZVRvb2xzXCIuICBJZiBub3QsIHNlZSA8aHR0cDovL3d3dy5nbnUub3JnL2xpY2Vuc2VzLz4uXG4gKi9cbmltcG9ydCBDb21wb25lbnQgZnJvbSBcIi4vQ29tcG9uZW50XCI7XG5pbXBvcnQgQ29udGFpbmVyIGZyb20gXCIuL0NvbnRhaW5lclwiO1xuaW1wb3J0IFV0aWxzIGZyb20gXCIuL1V0aWxzXCI7XG5pbXBvcnQgQ29uc3RhbnRzIGZyb20gXCIuL0NvbnN0YW50c1wiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDb2wgZXh0ZW5kcyBDb250YWluZXIge1xuICBzZWxlY3RhYmxlID0gZmFsc2U7XG4gICNfaW5uZXJIZWlnaHQgPSAwO1xuICAjX2lubmVyV2lkdGggPSAwO1xuXG4gIGNvbnN0cnVjdG9yKHgsIHksIG1heFdpZHRoLCBtYXhIZWlnaHQsIHN0eWxlLCAuLi5jb21wb25lbnRzKSB7XG4gICAgc3VwZXIoeCwgeSwgbWF4V2lkdGgsIG1heEhlaWdodCwgc3R5bGUsIC4uLmNvbXBvbmVudHMpO1xuXG4gICAgaWYoIUNvbnN0YW50cy5TZXR0aW5nLkRJU0FCTEVfRVhQRVJJTUVOVEFMX09QVElNSVpBVElPTlMpIHtcbiAgICAgIHRoaXMudXBkYXRlSW5uZXJXaWR0aCgpO1xuICAgICAgdGhpcy51cGRhdGVJbm5lckhlaWdodCgpO1xuICBcbiAgICAgIHRoaXMuYWRkQ2hhbmdlQWN0aW9uKCgpID0+IHtcbiAgICAgICAgdGhpcy51cGRhdGVJbm5lcldpZHRoKCk7XG4gICAgICAgIHRoaXMudXBkYXRlSW5uZXJIZWlnaHQoKTtcbiAgICAgIH0pO1xuICAgIH1cbiAgfVxuXG4gIGRyYXcoY29udGV4dCkge1xuICAgIGlmKHRoaXMuaGlkZGVuKSByZXR1cm47XG4gICAgc3VwZXIuZHJhdyhjb250ZXh0KTtcblxuICAgIGNvbnN0IGNhbnZhcyA9IGNvbnRleHQuY2FudmFzO1xuICAgIGNvbnN0IGN0eCA9IGNhbnZhcy5nZXRDb250ZXh0KFwiMmRcIik7XG4gICAgY3R4LnNhdmUoKTtcblxuICAgIGxldCBjdHhUZW1wID0gY3R4O1xuXG4gICAgaWYodGhpcy5pc0N1dHRpbmcpIHtcbiAgICAgIGN0eFRlbXAgPSB0aGlzLmNhbnZhc1RtcC5nZXRDb250ZXh0KFwiMmRcIik7XG4gICAgICBjdHhUZW1wLnNjYWxlKENvbnN0YW50cy5TZXR0aW5nLlBJWEVMX1JBVElPLCBDb25zdGFudHMuU2V0dGluZy5QSVhFTF9SQVRJTyk7XG4gICAgfVxuICBcbiAgICBpZihzdXBlci5jb21wb25lbnRzICE9IG51bGwpIHtcbiAgICAgIGxldCBjdXJyZW50WSA9IHRoaXMuc3R5bGUucGFkZGluZztcblxuICAgICAgc3VwZXIuY29tcG9uZW50cy5mb3JFYWNoKGNvbXBvbmVudCA9PiB7XG4gICAgICAgIGN1cnJlbnRZID0gdGhpcy5kcmF3Q29tcG9uZW50KGNvbXBvbmVudCwgY3VycmVudFksIGN0eFRlbXApO1xuICAgICAgfSk7XG4gICAgfVxuICAgIFxuICAgIGlmKHRoaXMuaXNDdXR0aW5nKSB7XG4gICAgICBVdGlscy5kcmF3SW1hZ2VEYXRhKGN0eCwgdGhpcy5jYW52YXNUbXAsIHRoaXMueCwgdGhpcy55LCB0aGlzLndpZHRoLCB0aGlzLmhlaWdodCwgdGhpcy54ICogQ29uc3RhbnRzLlNldHRpbmcuUElYRUxfUkFUSU8sIHRoaXMueSAqIENvbnN0YW50cy5TZXR0aW5nLlBJWEVMX1JBVElPLCB0aGlzLndpZHRoICogQ29uc3RhbnRzLlNldHRpbmcuUElYRUxfUkFUSU8sIHRoaXMuaGVpZ2h0ICogQ29uc3RhbnRzLlNldHRpbmcuUElYRUxfUkFUSU8pO1xuICAgIH1cbiAgICBcbiAgICBzdXBlci5kcmF3U2Nyb2xsYmFycyhjdHgpO1xuICAgIFxuICAgIGN0eC5yZXN0b3JlKCk7XG4gIH1cblxuICBkcmF3Q29tcG9uZW50KGNvbXBvbmVudCwgY3VycmVudFksIGN0eCkge1xuICAgIGlmKGNvbXBvbmVudCBpbnN0YW5jZW9mIENvbXBvbmVudCkge1xuICAgICAgY29tcG9uZW50LnggPSB0aGlzLnN0eWxlLnBhZGRpbmcgLSB0aGlzLm9mZnNldFNjcm9sbFg7XG4gICAgICBjb21wb25lbnQueSA9IGN1cnJlbnRZIC0gdGhpcy5vZmZzZXRTY3JvbGxZO1xuICAgICAgXG4gICAgICBpZighY29tcG9uZW50LmhpZGRlbikge1xuICAgICAgICBpZih0aGlzLmlzQ29tcG9uZW50VmlzaWJsZShjb21wb25lbnQpKSB7XG4gICAgICAgICAgY29tcG9uZW50LmRyYXcoY3R4KTtcbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgY3VycmVudFkgKz0gY29tcG9uZW50LmhlaWdodCArIHRoaXMuc3R5bGUuc3BhY2VCZXR3ZWVuQ29tcG9uZW50cztcbiAgICAgIH1cbiAgICB9XG4gICAgXG4gICAgcmV0dXJuIGN1cnJlbnRZO1xuICB9XG5cbiAgdXBkYXRlSW5uZXJIZWlnaHQoKSB7XG4gICAgbGV0IHRvdGFsSGVpZ2h0ID0gMDtcbiAgICBzdXBlci5jb21wb25lbnRzLmZvckVhY2goY29tcG9uZW50ID0+IHsgaWYoIWNvbXBvbmVudC5oaWRkZW4pIHRvdGFsSGVpZ2h0ICs9IGNvbXBvbmVudC5oZWlnaHQgfSk7XG4gICAgdGhpcy4jX2lubmVySGVpZ2h0ID0gdG90YWxIZWlnaHQgKyB0aGlzLnN0eWxlLnNwYWNlQmV0d2VlbkNvbXBvbmVudHMgKiAoc3VwZXIuY29tcG9uZW50cy5sZW5ndGggLSAxKSArIHRoaXMuc3R5bGUucGFkZGluZztcbiAgfVxuXG4gIHVwZGF0ZUlubmVyV2lkdGgoKSB7XG4gICAgbGV0IG1heFdpZHRoID0gMDtcbiAgICBzdXBlci5jb21wb25lbnRzLmZvckVhY2goY29tcG9uZW50ID0+IHsgaWYoY29tcG9uZW50LndpZHRoID4gbWF4V2lkdGggJiYgIWNvbXBvbmVudC5oaWRkZW4pIG1heFdpZHRoID0gY29tcG9uZW50LndpZHRoOyB9KTtcbiAgICB0aGlzLiNfaW5uZXJXaWR0aCA9IG1heFdpZHRoICsgdGhpcy5zdHlsZS5wYWRkaW5nO1xuICB9XG5cbiAgZ2V0IGlubmVySGVpZ2h0KCkge1xuICAgIGlmKENvbnN0YW50cy5TZXR0aW5nLkRJU0FCTEVfRVhQRVJJTUVOVEFMX09QVElNSVpBVElPTlMpIHRoaXMudXBkYXRlSW5uZXJIZWlnaHQoKTtcbiAgICByZXR1cm4gdGhpcy4jX2lubmVySGVpZ2h0O1xuICB9XG5cbiAgZ2V0IGlubmVyV2lkdGgoKSB7XG4gICAgaWYoQ29uc3RhbnRzLlNldHRpbmcuRElTQUJMRV9FWFBFUklNRU5UQUxfT1BUSU1JWkFUSU9OUykgdGhpcy51cGRhdGVJbm5lcldpZHRoKCk7XG4gICAgcmV0dXJuIHRoaXMuI19pbm5lcldpZHRoO1xuICB9XG5cbiAgZ2V0IHdpZHRoKCkge1xuICAgIGNvbnN0IHdpZHRoID0gdGhpcy5pbm5lcldpZHRoIHx8ICh0aGlzLnBhcmVudCAmJiB0aGlzLnBhcmVudC53aWR0aCk7XG4gICAgY29uc3QgbWluID0gdGhpcy5tYXhXaWR0aCA/IE1hdGgubWluKHRoaXMubWF4V2lkdGgsIHdpZHRoKSA6IG51bGw7XG4gICAgcmV0dXJuIHRoaXMubWluV2lkdGggPyBNYXRoLm1heCh0aGlzLm1pbldpZHRoLCBtaW4gfHwgd2lkdGgpIDogbWluIHx8IHdpZHRoO1xuICB9XG5cbiAgZ2V0IGhlaWdodCgpIHtcbiAgICBjb25zdCBoZWlnaHQgPSB0aGlzLmlubmVySGVpZ2h0IHx8ICh0aGlzLnBhcmVudCAmJiB0aGlzLnBhcmVudC5oZWlnaHQpO1xuICAgIGNvbnN0IG1pbiA9IHRoaXMubWF4SGVpZ2h0ID8gTWF0aC5taW4odGhpcy5tYXhIZWlnaHQsIGhlaWdodCkgOiBudWxsO1xuICAgIHJldHVybiB0aGlzLm1pbkhlaWdodCA/IE1hdGgubWF4KHRoaXMubWluSGVpZ2h0LCBtaW4gfHwgaGVpZ2h0KSA6IG1pbiB8fCBoZWlnaHQ7XG4gIH1cblxuICBnZXQgZGVmYXVsdFN0eWxlKCkge1xuICAgIHJldHVybiBzdXBlci5kZWZhdWx0U3R5bGU7XG4gIH1cbn0iLCIvKlxuICogQ29weXJpZ2h0IChDKSAyMDIwIEVsaWFzdGlrIChlbGlhc3Rpa3NvZnRzLmNvbSlcbiAqXG4gKiBUaGlzIGZpbGUgaXMgcGFydCBvZiBcIkpTR2FtZVRvb2xzXCIuXG4gKlxuICogXCJKU0dhbWVUb29sc1wiIGlzIGZyZWUgc29mdHdhcmU6IHlvdSBjYW4gcmVkaXN0cmlidXRlIGl0IGFuZC9vciBtb2RpZnlcbiAqIGl0IHVuZGVyIHRoZSB0ZXJtcyBvZiB0aGUgR05VIEdlbmVyYWwgUHVibGljIExpY2Vuc2UgYXMgcHVibGlzaGVkIGJ5XG4gKiB0aGUgRnJlZSBTb2Z0d2FyZSBGb3VuZGF0aW9uLCBlaXRoZXIgdmVyc2lvbiAzIG9mIHRoZSBMaWNlbnNlLCBvclxuICogKGF0IHlvdXIgb3B0aW9uKSBhbnkgbGF0ZXIgdmVyc2lvbi5cbiAqXG4gKiBcIkpTR2FtZVRvb2xzXCIgaXMgZGlzdHJpYnV0ZWQgaW4gdGhlIGhvcGUgdGhhdCBpdCB3aWxsIGJlIHVzZWZ1bCxcbiAqIGJ1dCBXSVRIT1VUIEFOWSBXQVJSQU5UWTsgd2l0aG91dCBldmVuIHRoZSBpbXBsaWVkIHdhcnJhbnR5IG9mXG4gKiBNRVJDSEFOVEFCSUxJVFkgb3IgRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UuICBTZWUgdGhlXG4gKiBHTlUgR2VuZXJhbCBQdWJsaWMgTGljZW5zZSBmb3IgbW9yZSBkZXRhaWxzLlxuICpcbiAqIFlvdSBzaG91bGQgaGF2ZSByZWNlaXZlZCBhIGNvcHkgb2YgdGhlIEdOVSBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlXG4gKiBhbG9uZyB3aXRoIFwiSlNHYW1lVG9vbHNcIi4gIElmIG5vdCwgc2VlIDxodHRwOi8vd3d3LmdudS5vcmcvbGljZW5zZXMvPi5cbiAqL1xuaW1wb3J0IENvbnN0YW50cyBmcm9tIFwiLi9Db25zdGFudHNcIjtcbmltcG9ydCBTdHlsZSBmcm9tIFwiLi9TdHlsZVwiO1xuaW1wb3J0IFJlYWN0b3IgZnJvbSBcIi4vUmVhY3RvclwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDb21wb25lbnQge1xuICBzZWxlY3RhYmxlID0gdHJ1ZTtcbiAgI193aWR0aCA9IDA7XG4gICNfaGVpZ2h0ID0gMDtcbiAgI194ID0gMDtcbiAgI195ID0gMDtcbiAgI19kaXNhYmxlZCA9IGZhbHNlO1xuICAjX3NlbGVjdGVkID0gZmFsc2U7XG4gICNfc3R5bGU7XG5cbiAgY29uc3RydWN0b3IoeCwgeSwgd2lkdGgsIGhlaWdodCwgc3R5bGUpIHtcbiAgICB0aGlzLiNfeCA9IHggfHwgMDtcbiAgICB0aGlzLiNfeSA9IHkgfHwgMDtcbiAgICB0aGlzLiNfd2lkdGggPSB3aWR0aDtcbiAgICB0aGlzLiNfaGVpZ2h0ID0gaGVpZ2h0O1xuICAgIHRoaXMuY2FudmFzO1xuICAgIHRoaXMucGFyZW50O1xuXG4gICAgLy8gU3R5bGVcbiAgICB0aGlzLnN0eWxlID0gc3R5bGU7XG4gICAgXG4gICAgLy8gRnVuY3Rpb25zIHRyaWdnZXJlZCBieSBldmVudHNcbiAgICB0aGlzLnJlYWN0b3IgPSBuZXcgUmVhY3RvcigpO1xuICAgIHRoaXMucmVhY3Rvci5yZWdpc3RlckV2ZW50KFwib25DbGlja1wiKTtcbiAgICB0aGlzLnJlYWN0b3IucmVnaXN0ZXJFdmVudChcIm9uSG92ZXJcIik7XG4gICAgdGhpcy5yZWFjdG9yLnJlZ2lzdGVyRXZlbnQoXCJvbkRvd25cIik7XG4gICAgdGhpcy5yZWFjdG9yLnJlZ2lzdGVyRXZlbnQoXCJvblNjcm9sbFwiKTtcbiAgICB0aGlzLnJlYWN0b3IucmVnaXN0ZXJFdmVudChcIm9uTW92ZVwiKTtcbiAgICB0aGlzLnJlYWN0b3IucmVnaXN0ZXJFdmVudChcIm9uVXBcIik7XG4gICAgdGhpcy5yZWFjdG9yLnJlZ2lzdGVyRXZlbnQoXCJvbkNoYW5nZVwiKTtcblxuICAgIC8vIFN0YXRlXG4gICAgdGhpcy5pbml0ID0gZmFsc2U7XG4gICAgdGhpcy5oYXNJbml0RXZlbnRzID0gZmFsc2U7XG4gICAgdGhpcy4jX3NlbGVjdGVkID0gZmFsc2U7XG4gICAgdGhpcy5jbGlja2VkID0gZmFsc2U7XG4gICAgdGhpcy5ob3ZlcmVkID0gZmFsc2U7XG4gICAgdGhpcy4jX2Rpc2FibGVkID0gZmFsc2U7XG5cbiAgICAvLyBTY3JvbGwgc3RhdGVcbiAgICB0aGlzLm9mZnNldFNjcm9sbFggPSAwO1xuICAgIHRoaXMub2Zmc2V0U2Nyb2xsWSA9IDA7XG5cbiAgICAvLyBNb3ZlIGV2ZW50XG4gICAgdGhpcy5vZmZzZXRNb3ZlWCA9IDA7XG4gICAgdGhpcy5vZmZzZXRNb3ZlWSA9IDA7XG4gICAgdGhpcy5tb3ZlRXZlbnRTdGFydFggPSAwO1xuICAgIHRoaXMubW92ZUV2ZW50U3RhcnRZID0gMDtcblxuICAgIC8vIFRvdWNoIGV2ZW50c1xuICAgIHRoaXMudG91Y2hFdmVudFN0YXJ0WCA9IDA7XG4gICAgdGhpcy50b3VjaEV2ZW50U3RhcnRZID0gMDtcbiAgICB0aGlzLnRvdWNoRXZlbnRTdGFydFRpbWVzdGFtcCA9IDA7XG5cbiAgICB0aGlzLnRvb2x0aXA7XG4gICAgdGhpcy5pbml0RXZlbnRzKCk7XG4gIH1cblxuICBpbml0RXZlbnRzKCkge1xuICAgIGlmKCF0aGlzLmhhc0luaXRFdmVudHMgJiYgdGhpcy5jYW52YXMgIT0gbnVsbCkge1xuICAgICAgdGhpcy5jYW52YXMuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlbW92ZVwiLCB0aGlzLCAoZXZlbnQsIHJlc3VsdCkgPT4ge1xuICAgICAgICBpZighdGhpcy5kaXNhYmxlZCkge1xuICAgICAgICAgIGNvbnN0IG1vdXNlUG9zaXRpb24gPSB0aGlzLmdldE1vdXNlUG9zKGV2ZW50KTtcblxuICAgICAgICAgIGlmKHRoaXMuY2xpY2tlZCkge1xuICAgICAgICAgICAgY29uc3QgZGVsdGFYID0gLWV2ZW50Lm1vdmVtZW50WDtcbiAgICAgICAgICAgIGNvbnN0IGRlbHRhWSA9IC1ldmVudC5tb3ZlbWVudFk7XG5cbiAgICAgICAgICAgIHRoaXMub2Zmc2V0TW92ZVggKz0gZGVsdGFYO1xuICAgICAgICAgICAgdGhpcy5vZmZzZXRNb3ZlWSArPSBkZWx0YVk7XG5cbiAgICAgICAgICAgIGlmKHRoaXMucmVhY3Rvcikge1xuICAgICAgICAgICAgICB0aGlzLnJlYWN0b3IuZGlzcGF0Y2hFdmVudChcIm9uTW92ZVwiLCBkZWx0YVgsIGRlbHRhWSwgbW91c2VQb3NpdGlvbik7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIHRoaXMubW92ZUV2ZW50U3RhcnRYID0gbW91c2VQb3NpdGlvbi54O1xuICAgICAgICAgICAgdGhpcy5tb3ZlRXZlbnRTdGFydFkgPSBtb3VzZVBvc2l0aW9uLnk7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgaWYocmVzdWx0KSB7XG4gICAgICAgICAgICBpZih0aGlzLnJlYWN0b3IgJiYgIXRoaXMuZGlzYWJsZWQpIHtcbiAgICAgICAgICAgICAgdGhpcy5yZWFjdG9yLmRpc3BhdGNoRXZlbnQoXCJvbkhvdmVyXCIsIG1vdXNlUG9zaXRpb24pO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZih0aGlzLnRvb2x0aXApIHtcbiAgICAgICAgICAgICAgdGhpcy50b29sdGlwLnggPSBtb3VzZVBvc2l0aW9uLnggKyAxMDtcbiAgICAgICAgICAgICAgdGhpcy50b29sdGlwLnkgPSBtb3VzZVBvc2l0aW9uLnkgKyAxMDtcbiAgICAgICAgICAgICAgdGhpcy50b29sdGlwLmVuYWJsZSgpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgXG4gICAgICAgICAgICB0aGlzLmhvdmVyZWQgPSB0cnVlO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLmhvdmVyZWQgPSBmYWxzZTtcbiAgICAgICAgICAgIGlmKHRoaXMudG9vbHRpcCkgdGhpcy50b29sdGlwLmRpc2FibGUoKVxuICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB0aGlzLmhvdmVyZWQgPSBmYWxzZTtcbiAgICAgICAgICB0aGlzLmNsaWNrZWQgPSBmYWxzZTtcbiAgICAgICAgICBpZih0aGlzLnRvb2x0aXApIHRoaXMudG9vbHRpcC5kaXNhYmxlKCk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgICAgXG4gICAgICB0aGlzLmNhbnZhcy5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgdGhpcywgKGV2ZW50LCByZXN1bHQpID0+IHtcbiAgICAgICAgaWYoIXRoaXMuZGlzYWJsZWQpIHtcbiAgICAgICAgICBjb25zdCBtb3VzZVBvc2l0aW9uID0gdGhpcy5nZXRNb3VzZVBvcyhldmVudCk7XG5cbiAgICAgICAgICBpZihyZXN1bHQgJiYgdGhpcy5ob3ZlcmVkKSB7XG4gICAgICAgICAgICBpZih0aGlzLnJlYWN0b3IpIHtcbiAgICAgICAgICAgICAgdGhpcy5yZWFjdG9yLmRpc3BhdGNoRXZlbnQoXCJvbkNsaWNrXCIsIG1vdXNlUG9zaXRpb24pO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB0aGlzLnNlbGVjdGVkID0gdHJ1ZTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5jbGlja2VkID0gZmFsc2U7XG4gICAgICAgICAgICB0aGlzLnNlbGVjdGVkID0gZmFsc2U7XG4gICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHRoaXMuaG92ZXJlZCA9IGZhbHNlO1xuICAgICAgICAgIHRoaXMuY2xpY2tlZCA9IGZhbHNlO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICAgIFxuICAgICAgdGhpcy5jYW52YXMuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlZG93blwiLCB0aGlzLCAoZXZlbnQsIHJlc3VsdCkgPT4ge1xuICAgICAgICBpZighdGhpcy5kaXNhYmxlZCkge1xuICAgICAgICAgIGNvbnN0IG1vdXNlUG9zaXRpb24gPSB0aGlzLmdldE1vdXNlUG9zKGV2ZW50KTtcblxuICAgICAgICAgIGlmKHJlc3VsdCkge1xuICAgICAgICAgICAgaWYodGhpcy5yZWFjdG9yKSB7XG4gICAgICAgICAgICAgIHRoaXMucmVhY3Rvci5kaXNwYXRjaEV2ZW50KFwib25Eb3duXCIsIG1vdXNlUG9zaXRpb24pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgXG4gICAgICAgICAgICB0aGlzLmNsaWNrZWQgPSB0cnVlO1xuICAgICAgICAgICAgdGhpcy5tb3ZlRXZlbnRTdGFydFggPSBtb3VzZVBvc2l0aW9uLng7XG4gICAgICAgICAgICB0aGlzLm1vdmVFdmVudFN0YXJ0WSA9IG1vdXNlUG9zaXRpb24ueTtcbiAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdGhpcy5ob3ZlcmVkID0gZmFsc2U7XG4gICAgICAgICAgdGhpcy5jbGlja2VkID0gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgICAgXG4gICAgICB0aGlzLmNhbnZhcy5hZGRFdmVudExpc3RlbmVyKFwibW91c2V1cFwiLCB0aGlzLCAoZXZlbnQpID0+IHtcbiAgICAgICAgaWYoIXRoaXMuZGlzYWJsZWQpIHtcbiAgICAgICAgICBjb25zdCBtb3VzZVBvc2l0aW9uID0gdGhpcy5nZXRNb3VzZVBvcyhldmVudCk7XG5cbiAgICAgICAgICBpZih0aGlzLnJlYWN0b3IpIHtcbiAgICAgICAgICAgIHRoaXMucmVhY3Rvci5kaXNwYXRjaEV2ZW50KFwib25VcFwiLCBtb3VzZVBvc2l0aW9uKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgXG4gICAgICAgICAgdGhpcy5jbGlja2VkID0gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuXG4gICAgICB0aGlzLmNhbnZhcy5hZGRFdmVudExpc3RlbmVyKFwid2hlZWxcIiwgdGhpcywgKGV2ZW50KSA9PiB7XG4gICAgICAgIGlmKHRoaXMuaG92ZXJlZCAmJiAhdGhpcy5kaXNhYmxlZCAmJiAhdGhpcy5zY3JvbGxEaXNhYmxlZCkge1xuICAgICAgICAgIHRoaXMub2Zmc2V0U2Nyb2xsWCArPSBldmVudC5kZWx0YVg7XG4gICAgICAgICAgdGhpcy5vZmZzZXRTY3JvbGxZICs9IGV2ZW50LmRlbHRhWTtcblxuICAgICAgICAgIGlmKHRoaXMucmVhY3Rvcikge1xuICAgICAgICAgICAgdGhpcy5yZWFjdG9yLmRpc3BhdGNoRXZlbnQoXCJvblNjcm9sbFwiLCBldmVudC5kZWx0YVgsIGV2ZW50LmRlbHRhWSk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9KTtcblxuICAgICAgY29uc3QgdG91Y2hTY3JvbGxFdmVudCA9IChldmVudCkgPT4ge1xuICAgICAgICBjb25zdCBjaGFuZ2VkVG91Y2hlcyA9IGV2ZW50LmNoYW5nZWRUb3VjaGVzWzBdO1xuICAgICAgICBjb25zdCBwb3NpdGlvbiA9IHRoaXMuZ2V0TW91c2VQb3MoY2hhbmdlZFRvdWNoZXMpO1xuXG4gICAgICAgIGlmKHRoaXMuaG92ZXJlZCAmJiAhdGhpcy5kaXNhYmxlZCAmJiAhdGhpcy5zY3JvbGxEaXNhYmxlZCkge1xuICAgICAgICAgIGNvbnN0IGRlbHRhWCA9IHRoaXMudG91Y2hFdmVudFN0YXJ0WCAtIHBvc2l0aW9uLng7XG4gICAgICAgICAgY29uc3QgZGVsdGFZID0gdGhpcy50b3VjaEV2ZW50U3RhcnRZIC0gcG9zaXRpb24ueTtcblxuICAgICAgICAgIHRoaXMub2Zmc2V0U2Nyb2xsWCArPSBkZWx0YVg7XG4gICAgICAgICAgdGhpcy5vZmZzZXRTY3JvbGxZICs9IGRlbHRhWTtcblxuICAgICAgICAgIGlmKHRoaXMucmVhY3Rvcikge1xuICAgICAgICAgICAgdGhpcy5yZWFjdG9yLmRpc3BhdGNoRXZlbnQoXCJvblNjcm9sbFwiLCBkZWx0YVgsIGRlbHRhWSwgcG9zaXRpb24pO1xuICAgICAgICAgIH1cbiAgICAgICAgICBcbiAgICAgICAgICB0aGlzLnRvdWNoRXZlbnRTdGFydFggPSBwb3NpdGlvbi54O1xuICAgICAgICAgIHRoaXMudG91Y2hFdmVudFN0YXJ0WSA9IHBvc2l0aW9uLnk7XG4gICAgICAgIH1cbiAgICAgIH07XG5cbiAgICAgIGNvbnN0IHRvdWNoU3RhcnRFbmRFdmVudCA9IChldmVudCwgcmVzdWx0KSA9PiB7XG4gICAgICAgIGNvbnN0IGNoYW5nZWRUb3VjaGVzID0gZXZlbnQuY2hhbmdlZFRvdWNoZXNbMF07XG4gICAgICAgIGNvbnN0IHBvc2l0aW9uID0gdGhpcy5nZXRNb3VzZVBvcyhjaGFuZ2VkVG91Y2hlcyk7XG4gICAgICAgIFxuICAgICAgICBpZihyZXN1bHQpIHtcbiAgICAgICAgICB0aGlzLmhvdmVyZWQgPSB0cnVlO1xuICAgICAgICAgIHRoaXMuc2VsZWN0ZWQgPSB0cnVlO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHRoaXMuaG92ZXJlZCA9IGZhbHNlO1xuICAgICAgICAgIHRoaXMuc2VsZWN0ZWQgPSBmYWxzZTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmKHRoaXMuaG92ZXJlZCAmJiAhdGhpcy5kaXNhYmxlZCkge1xuICAgICAgICAgIHRoaXMudG91Y2hFdmVudFN0YXJ0WCA9IHBvc2l0aW9uLng7XG4gICAgICAgICAgdGhpcy50b3VjaEV2ZW50U3RhcnRZID0gcG9zaXRpb24ueTtcbiAgICAgICAgICB0aGlzLnRvdWNoRXZlbnRTdGFydFRpbWVzdGFtcCA9IGV2ZW50LnRpbWVzdGFtcDtcbiAgICAgICAgfVxuICAgICAgfTtcblxuICAgICAgdGhpcy5jYW52YXMuYWRkRXZlbnRMaXN0ZW5lcihcInRvdWNoc3RhcnRcIiwgdGhpcywgdG91Y2hTdGFydEVuZEV2ZW50KTtcbiAgICAgIHRoaXMuY2FudmFzLmFkZEV2ZW50TGlzdGVuZXIoXCJ0b3VjaGVuZFwiLCB0aGlzLCB0b3VjaFN0YXJ0RW5kRXZlbnQpO1xuXG4gICAgICB0aGlzLmNhbnZhcy5hZGRFdmVudExpc3RlbmVyKFwidG91Y2htb3ZlXCIsIHRoaXMsIChldmVudCkgPT4ge1xuICAgICAgICB0b3VjaFNjcm9sbEV2ZW50KGV2ZW50KTtcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgIH0pO1xuXG4gICAgICB0aGlzLmhhc0luaXRFdmVudHMgPSB0cnVlO1xuICAgIH1cbiAgfVxuXG4gIGRyYXcoY29udGV4dCkge1xuICAgIGlmKHRoaXMuaGlkZGVuKSByZXR1cm47XG4gICAgdGhpcy5pbml0RXZlbnRzKCk7XG5cbiAgICBpZih0aGlzLmRpc2FibGVkKSB7XG4gICAgICB0aGlzLnNlbGVjdGVkID0gZmFsc2U7XG4gICAgICB0aGlzLmNsaWNrZWQgPSBmYWxzZTtcbiAgICAgIHRoaXMuaG92ZXJlZCA9IGZhbHNlO1xuICAgICAgaWYodGhpcy50b29sdGlwKSB0aGlzLnRvb2x0aXAuZGlzYWJsZWQgPSB0cnVlO1xuICAgIH1cbiAgfVxuICBcbiAgZ2V0TW91c2VQb3MoZXZlbnQpIHtcbiAgICByZXR1cm4gdGhpcy5jYW52YXMuZ2V0TW91c2VQb3MoZXZlbnQpO1xuICB9XG4gIFxuICBpc0luc2lkZShwb3MpIHtcbiAgICByZXR1cm4gcG9zLnggPiB0aGlzLnggJiYgcG9zLnggPCB0aGlzLnggKyB0aGlzLndpZHRoICYmIHBvcy55IDwgdGhpcy55ICsgdGhpcy5oZWlnaHQgJiYgcG9zLnkgPiB0aGlzLnk7XG4gIH1cbiAgXG4gIGRpc2FibGUoKSB7XG4gICAgdGhpcy5kaXNhYmxlZCA9IHRydWU7XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cbiAgXG4gIGVuYWJsZSgpIHtcbiAgICB0aGlzLmRpc2FibGVkID0gZmFsc2U7XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cblxuICBnZXQgZGlzYWJsZWQoKSB7XG4gICAgcmV0dXJuIHRoaXMuI19kaXNhYmxlZCB8fCAodGhpcy5wYXJlbnQgJiYgdGhpcy5wYXJlbnQuZGlzYWJsZWQpO1xuICB9XG5cbiAgc2V0IGRpc2FibGVkKGRpc2FibGVkKSB7XG4gICAgaWYoZGlzYWJsZWQgIT0gdGhpcy4jX2Rpc2FibGVkKSB7XG4gICAgICB0aGlzLiNfZGlzYWJsZWQgPSBkaXNhYmxlZDtcbiAgICAgIHRoaXMucmVhY3RvciAmJiB0aGlzLnJlYWN0b3IuZGlzcGF0Y2hFdmVudChcIm9uQ2hhbmdlXCIsIHRoaXMpO1xuICAgIH1cbiAgfVxuXG4gIHNldENsaWNrQWN0aW9uKHRyaWdnZXIpIHtcbiAgICB0aGlzLnJlbW92ZUFsbENsaWNrQWN0aW9ucygpO1xuICAgIHRoaXMuYWRkQ2xpY2tBY3Rpb24odHJpZ2dlcik7XG4gIH1cbiAgXG4gIGFkZENsaWNrQWN0aW9uKHRyaWdnZXIpIHtcbiAgICB0aGlzLnJlYWN0b3IuYWRkRXZlbnRMaXN0ZW5lcihcIm9uQ2xpY2tcIiwgdHJpZ2dlcik7XG4gIH1cbiAgXG4gIHJlbW92ZUNsaWNrQWN0aW9uKHRyaWdnZXIpIHtcbiAgICB0aGlzLnJlYWN0b3IucmVtb3ZlRXZlbnRMaXN0ZW5lcihcIm9uQ2xpY2tcIiwgdHJpZ2dlcik7XG4gIH1cblxuICByZW1vdmVBbGxDbGlja0FjdGlvbnMoKSB7XG4gICAgdGhpcy5yZWFjdG9yLnJlbW92ZUFsbEV2ZW50TGlzdGVuZXIoXCJvbkNsaWNrXCIpO1xuICB9XG5cbiAgc2V0SG92ZXJBY3Rpb24odHJpZ2dlcikge1xuICAgIHRoaXMucmVtb3ZlQWxsSG92ZXJBY3Rpb25zKCk7XG4gICAgdGhpcy5hZGRIb3ZlckFjdGlvbih0cmlnZ2VyKTtcbiAgfVxuICBcbiAgYWRkSG92ZXJBY3Rpb24odHJpZ2dlcikge1xuICAgIHRoaXMucmVhY3Rvci5hZGRFdmVudExpc3RlbmVyKFwib25Ib3ZlclwiLCB0cmlnZ2VyKTtcbiAgfVxuICBcbiAgcmVtb3ZlSG92ZXJBY3Rpb24odHJpZ2dlcikge1xuICAgIHRoaXMucmVhY3Rvci5yZW1vdmVFdmVudExpc3RlbmVyKFwib25Ib3ZlclwiLCB0cmlnZ2VyKTtcbiAgfVxuXG4gIHJlbW92ZUFsbEhvdmVyQWN0aW9ucygpIHtcbiAgICB0aGlzLnJlYWN0b3IucmVtb3ZlQWxsRXZlbnRMaXN0ZW5lcihcIm9uSG92ZXJcIik7XG4gIH1cblxuICBzZXREb3duQWN0aW9uKHRyaWdnZXIpIHtcbiAgICB0aGlzLnJlbW92ZUFsbERvd25BY3Rpb25zKCk7XG4gICAgdGhpcy5hZGREb3duQWN0aW9uKHRyaWdnZXIpO1xuICB9XG4gIFxuICBhZGREb3duQWN0aW9uKHRyaWdnZXIpIHtcbiAgICB0aGlzLnJlYWN0b3IuYWRkRXZlbnRMaXN0ZW5lcihcIm9uRG93blwiLCB0cmlnZ2VyKTtcbiAgfVxuICBcbiAgcmVtb3ZlRG93bkFjdGlvbih0cmlnZ2VyKSB7XG4gICAgdGhpcy5yZWFjdG9yLnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJvbkRvd25cIiwgdHJpZ2dlcik7XG4gIH1cblxuICByZW1vdmVBbGxEb3duQWN0aW9ucygpIHtcbiAgICB0aGlzLnJlYWN0b3IucmVtb3ZlQWxsRXZlbnRMaXN0ZW5lcihcIm9uRG93blwiKTtcbiAgfVxuXG4gIHNldFNjcm9sbEFjdGlvbih0cmlnZ2VyKSB7XG4gICAgdGhpcy5yZW1vdmVBbGxTY3JvbGxBY3Rpb25zKCk7XG4gICAgdGhpcy5hZGRTY3JvbGxBY3Rpb24odHJpZ2dlcik7XG4gIH1cbiAgXG4gIGFkZFNjcm9sbEFjdGlvbih0cmlnZ2VyKSB7XG4gICAgdGhpcy5yZWFjdG9yLmFkZEV2ZW50TGlzdGVuZXIoXCJvblNjcm9sbFwiLCB0cmlnZ2VyKTtcbiAgfVxuICBcbiAgcmVtb3ZlU2Nyb2xsQWN0aW9uKHRyaWdnZXIpIHtcbiAgICB0aGlzLnJlYWN0b3IucmVtb3ZlRXZlbnRMaXN0ZW5lcihcIm9uU2Nyb2xsXCIsIHRyaWdnZXIpO1xuICB9XG5cbiAgcmVtb3ZlQWxsU2Nyb2xsQWN0aW9ucygpIHtcbiAgICB0aGlzLnJlYWN0b3IucmVtb3ZlQWxsRXZlbnRMaXN0ZW5lcihcIm9uU2Nyb2xsXCIpO1xuICB9XG5cbiAgc2V0TW92ZUFjdGlvbih0cmlnZ2VyKSB7XG4gICAgdGhpcy5yZW1vdmVBbGxNb3ZlQWN0aW9ucygpO1xuICAgIHRoaXMuYWRkTW92ZUFjdGlvbih0cmlnZ2VyKTtcbiAgfVxuICBcbiAgYWRkTW92ZUFjdGlvbih0cmlnZ2VyKSB7XG4gICAgdGhpcy5yZWFjdG9yLmFkZEV2ZW50TGlzdGVuZXIoXCJvbk1vdmVcIiwgdHJpZ2dlcik7XG4gIH1cbiAgXG4gIHJlbW92ZU1vdmVBY3Rpb24odHJpZ2dlcikge1xuICAgIHRoaXMucmVhY3Rvci5yZW1vdmVFdmVudExpc3RlbmVyKFwib25Nb3ZlXCIsIHRyaWdnZXIpO1xuICB9XG5cbiAgcmVtb3ZlQWxsTW92ZUFjdGlvbnMoKSB7XG4gICAgdGhpcy5yZWFjdG9yLnJlbW92ZUFsbEV2ZW50TGlzdGVuZXIoXCJvbk1vdmVcIik7XG4gIH1cbiAgXG4gIHNldENoYW5nZUFjdGlvbih0cmlnZ2VyKSB7XG4gICAgdGhpcy5yZW1vdmVBbGxDaGFuZ2VBY3Rpb25zKCk7XG4gICAgdGhpcy5hZGRDaGFuZ2VBY3Rpb24odHJpZ2dlcik7XG4gIH1cbiAgXG4gIGFkZENoYW5nZUFjdGlvbih0cmlnZ2VyKSB7XG4gICAgdGhpcy5yZWFjdG9yLmFkZEV2ZW50TGlzdGVuZXIoXCJvbkNoYW5nZVwiLCB0cmlnZ2VyKTtcbiAgfVxuICBcbiAgcmVtb3ZlQ2hhbmdlQWN0aW9uKHRyaWdnZXIpIHtcbiAgICB0aGlzLnJlYWN0b3IucmVtb3ZlRXZlbnRMaXN0ZW5lcihcIm9uQ2hhbmdlXCIsIHRyaWdnZXIpO1xuICB9XG5cbiAgcmVtb3ZlQWxsQ2hhbmdlQWN0aW9ucygpIHtcbiAgICB0aGlzLnJlYWN0b3IucmVtb3ZlQWxsRXZlbnRMaXN0ZW5lcihcIm9uQ2hhbmdlXCIpO1xuICB9XG5cbiAgc2V0VXBBY3Rpb24odHJpZ2dlcikge1xuICAgIHRoaXMucmVtb3ZlQWxsVXBBY3Rpb25zKCk7XG4gICAgdGhpcy5hZGRVcEFjdGlvbih0cmlnZ2VyKTtcbiAgfVxuICBcbiAgYWRkVXBBY3Rpb24odHJpZ2dlcikge1xuICAgIHRoaXMucmVhY3Rvci5hZGRFdmVudExpc3RlbmVyKFwib25VcFwiLCB0cmlnZ2VyKTtcbiAgfVxuICBcbiAgcmVtb3ZlVXBBY3Rpb24odHJpZ2dlcikge1xuICAgIHRoaXMucmVhY3Rvci5yZW1vdmVFdmVudExpc3RlbmVyKFwib25VcFwiLCB0cmlnZ2VyKTtcbiAgfVxuXG4gIHJlbW92ZUFsbFVwQWN0aW9ucygpIHtcbiAgICB0aGlzLnJlYWN0b3IucmVtb3ZlQWxsRXZlbnRMaXN0ZW5lcihcIm9uVXBcIik7XG4gIH1cblxuICBnZXQgaGVpZ2h0KCkge1xuICAgIHJldHVybiB0aGlzLiNfaGVpZ2h0O1xuICB9XG5cbiAgZ2V0IHdpZHRoKCkge1xuICAgIHJldHVybiB0aGlzLiNfd2lkdGg7XG4gIH1cblxuICBzZXQgd2lkdGgod2lkdGgpIHtcbiAgICBpZih3aWR0aCAhPSB0aGlzLiNfd2lkdGgpIHtcbiAgICAgIHRoaXMuI193aWR0aCA9IHdpZHRoO1xuICAgICAgdGhpcy5yZWFjdG9yICYmIHRoaXMucmVhY3Rvci5kaXNwYXRjaEV2ZW50KFwib25DaGFuZ2VcIiwgdGhpcyk7XG4gICAgfVxuICB9XG5cbiAgc2V0IGhlaWdodChoZWlnaHQpIHtcbiAgICBpZihoZWlnaHQgIT0gdGhpcy4jX2hlaWdodCkge1xuICAgICAgdGhpcy4jX2hlaWdodCA9IGhlaWdodDtcbiAgICAgIHRoaXMucmVhY3RvciAmJiB0aGlzLnJlYWN0b3IuZGlzcGF0Y2hFdmVudChcIm9uQ2hhbmdlXCIsIHRoaXMpO1xuICAgIH1cbiAgfVxuXG4gIGdldCBtYXhXaWR0aCgpIHtcbiAgICByZXR1cm4gdGhpcy53aWR0aDtcbiAgfVxuXG4gIGdldCBtYXhIZWlnaHQoKSB7XG4gICAgcmV0dXJuIHRoaXMuaGVpZ2h0O1xuICB9XG5cbiAgZ2V0IGlubmVyV2lkdGgoKSB7XG4gICAgcmV0dXJuIHRoaXMud2lkdGg7XG4gIH1cblxuICBnZXQgaW5uZXJIZWlnaHQoKSB7XG4gICAgcmV0dXJuIHRoaXMuaGVpZ2h0O1xuICB9XG5cbiAgZ2V0IG1pbldpZHRoKCkge1xuICAgIHJldHVybiB0aGlzLndpZHRoO1xuICB9XG5cbiAgZ2V0IG1pbkhlaWdodCgpIHtcbiAgICByZXR1cm4gdGhpcy5oZWlnaHQ7XG4gIH1cblxuICBnZXQgeCgpIHtcbiAgICBjb25zdCBwYXJlbnQgPSB0aGlzLnBhcmVudCB8fCB0aGlzLmNhbnZhcztcblxuICAgIGlmKHRoaXMuc3R5bGUuYWxpZ25lbWVudCAmJiBwYXJlbnQpIHtcbiAgICAgIGNvbnN0IHBhcmVudFdpZHRoID0gcGFyZW50LndpZHRoO1xuICAgICAgY29uc3QgcGFyZW50UGFkZGluZyA9IChwYXJlbnQuc3R5bGUgJiYgcGFyZW50LnN0eWxlLnBhZGRpbmcpIHx8IDA7XG5cbiAgICAgIGlmKHRoaXMuc3R5bGUuYWxpZ25lbWVudCA9PSBDb25zdGFudHMuQWxpZ25lbWVudC5DRU5URVIpIHtcbiAgICAgICAgcmV0dXJuIHBhcmVudC54ICsgKHBhcmVudFdpZHRoIC8gMikgLSAodGhpcy53aWR0aCAvIDIpO1xuICAgICAgfSBlbHNlIGlmKHRoaXMuc3R5bGUuYWxpZ25lbWVudCA9PSBDb25zdGFudHMuQWxpZ25lbWVudC5SSUdIVCkge1xuICAgICAgICByZXR1cm4gcGFyZW50LnggKyAocGFyZW50V2lkdGgpIC0gKHRoaXMud2lkdGgpIC0gcGFyZW50UGFkZGluZztcbiAgICAgIH0gZWxzZSBpZih0aGlzLnN0eWxlLmFsaWduZW1lbnQgPT0gQ29uc3RhbnRzLkFsaWduZW1lbnQuTEVGVCkge1xuICAgICAgICByZXR1cm4gcGFyZW50LnggKyBwYXJlbnRQYWRkaW5nO1xuICAgICAgfVxuICAgIH0gZWxzZSBpZihwYXJlbnQpIHtcbiAgICAgIHJldHVybiBwYXJlbnQueCArIHRoaXMuI194O1xuICAgIH1cbiAgICBcbiAgICByZXR1cm4gdGhpcy4jX3g7XG4gIH1cblxuICBzZXQgeCh4KSB7XG4gICAgdGhpcy4jX3ggPSB4O1xuICAgIHRoaXMucmVhY3RvciAmJiB0aGlzLnJlYWN0b3IuZGlzcGF0Y2hFdmVudChcIm9uQ2hhbmdlXCIsIHRoaXMpO1xuICB9XG5cbiAgZ2V0IHkoKSB7XG4gICAgY29uc3QgcGFyZW50ID0gdGhpcy5wYXJlbnQgfHwgdGhpcy5jYW52YXM7XG5cbiAgICBpZih0aGlzLnN0eWxlLnZlcnRpY2FsQWxpZ25lbWVudCAmJiBwYXJlbnQpIHtcbiAgICAgIGNvbnN0IHBhcmVudEhlaWdodCA9IHBhcmVudC5oZWlnaHQ7XG4gICAgICBjb25zdCBwYXJlbnRQYWRkaW5nID0gKHBhcmVudC5zdHlsZSAmJiBwYXJlbnQuc3R5bGUucGFkZGluZykgfHwgMDtcblxuICAgICAgaWYodGhpcy5zdHlsZS52ZXJ0aWNhbEFsaWduZW1lbnQgPT0gQ29uc3RhbnRzLlZlcnRpY2FsQWxpZ25lbWVudC5CT1RUT00pIHtcbiAgICAgICAgcmV0dXJuIHBhcmVudC55ICsgKHBhcmVudEhlaWdodCkgLSAodGhpcy5oZWlnaHQpIC0gcGFyZW50UGFkZGluZztcbiAgICAgIH0gZWxzZSBpZih0aGlzLnN0eWxlLnZlcnRpY2FsQWxpZ25lbWVudCA9PSBDb25zdGFudHMuVmVydGljYWxBbGlnbmVtZW50LkNFTlRFUikge1xuICAgICAgICByZXR1cm4gcGFyZW50LnkgKyAocGFyZW50SGVpZ2h0IC8gMikgLSAodGhpcy5oZWlnaHQgLyAyKTtcbiAgICAgIH0gZWxzZSBpZih0aGlzLnN0eWxlLnZlcnRpY2FsQWxpZ25lbWVudCA9PSBDb25zdGFudHMuVmVydGljYWxBbGlnbmVtZW50LlRPUCkge1xuICAgICAgICByZXR1cm4gcGFyZW50LnkgKyBwYXJlbnRQYWRkaW5nO1xuICAgICAgfVxuICAgIH0gZWxzZSBpZihwYXJlbnQpIHtcbiAgICAgIHJldHVybiBwYXJlbnQueSArIHRoaXMuI195O1xuICAgIH1cbiAgICBcbiAgICByZXR1cm4gdGhpcy4jX3k7XG4gIH1cblxuICBzZXQgeSh5KSB7XG4gICAgdGhpcy4jX3kgPSB5O1xuICAgIHRoaXMucmVhY3RvciAmJiB0aGlzLnJlYWN0b3IuZGlzcGF0Y2hFdmVudChcIm9uQ2hhbmdlXCIsIHRoaXMpO1xuICB9XG5cbiAgZ2V0IGRlZmF1bHRTdHlsZSgpIHtcbiAgICByZXR1cm4gbmV3IFN0eWxlKHtcbiAgICAgIFwicGFkZGluZ1wiOiBDb25zdGFudHMuU2V0dGluZy5ERUZBVUxUX1BBRERJTkcsXG4gICAgICBcInNwYWNlQmV0d2VlbkNvbXBvbmVudHNcIjogQ29uc3RhbnRzLlNldHRpbmcuREVGQVVMVF9TUEFDSU5HXG4gICAgfSk7XG4gIH1cblxuICBnZXQgc3R5bGUoKSB7XG4gICAgcmV0dXJuIHRoaXMuI19zdHlsZSB8fCB0aGlzLmRlZmF1bHRTdHlsZTtcbiAgfVxuXG4gIHNldCBzdHlsZShzdHlsZSkge1xuICAgIHRoaXMuI19zdHlsZSA9IG5ldyBTdHlsZSgpO1xuICAgIHRoaXMuI19zdHlsZS5zZXRBbGwodGhpcy5kZWZhdWx0U3R5bGUuZ2V0U3R5bGVzKCkpO1xuXG4gICAgaWYoc3R5bGUgJiYgc3R5bGUgaW5zdGFuY2VvZiBTdHlsZSkge1xuICAgICAgdGhpcy4jX3N0eWxlLnNldEFsbChzdHlsZS5nZXRTdHlsZXMoKSk7XG4gICAgfVxuXG4gICAgdGhpcy4jX3N0eWxlLmNvbXBvbmVudCA9IHRoaXM7XG4gICAgdGhpcy5yZWFjdG9yICYmIHRoaXMucmVhY3Rvci5kaXNwYXRjaEV2ZW50KFwib25DaGFuZ2VcIiwgdGhpcyk7XG4gIH1cblxuICBnZXQgaGlkZGVuKCkge1xuICAgIHJldHVybiAodGhpcy5zdHlsZSAmJiB0aGlzLnN0eWxlLmhpZGRlbikgfHwgKHRoaXMucGFyZW50ICYmIHRoaXMucGFyZW50LmhpZGRlbik7XG4gIH1cblxuICBzZXQgaGlkZGVuKGhpZGRlbikge1xuICAgIGlmKGhpZGRlbiAhPSB0aGlzLmRpc2FibGVkIHx8IGhpZGRlbiAhPSB0aGlzLnN0eWxlLmhpZGRlbikge1xuICAgICAgdGhpcy5kaXNhYmxlZCA9IGhpZGRlbjtcbiAgICAgIGlmKHRoaXMuc3R5bGUpIHRoaXMuc3R5bGUuc2V0KFwiaGlkZGVuXCIsIGhpZGRlbik7XG4gICAgICB0aGlzLnJlYWN0b3IgJiYgdGhpcy5yZWFjdG9yLmRpc3BhdGNoRXZlbnQoXCJvbkNoYW5nZVwiLCB0aGlzKTtcbiAgICB9XG4gIH1cblxuICBnZXQgc2VsZWN0ZWQoKSB7XG4gICAgcmV0dXJuIHRoaXMuI19zZWxlY3RlZDtcbiAgfVxuXG4gIHNldCBzZWxlY3RlZChzZWxlY3RlZCkge1xuICAgIGlmKHNlbGVjdGVkICE9IHRoaXMuI19zZWxlY3RlZCkge1xuICAgICAgdGhpcy4jX3NlbGVjdGVkID0gc2VsZWN0ZWQ7XG4gICAgICB0aGlzLnJlYWN0b3IgJiYgdGhpcy5yZWFjdG9yLmRpc3BhdGNoRXZlbnQoXCJvbkNoYW5nZVwiLCB0aGlzKTtcbiAgICB9XG4gIH1cblxuICBnZXRBbGxQYXJlbnRzKCkge1xuICAgIGxldCBwYXJlbnQgPSB0aGlzLnBhcmVudDtcbiAgICBsZXQgcmVzID0gW107XG5cbiAgICB3aGlsZShwYXJlbnQpIHtcbiAgICAgIHJlcy5wdXNoKHBhcmVudCk7XG4gICAgICBwYXJlbnQgPSBwYXJlbnQucGFyZW50O1xuICAgIH1cblxuICAgIHJldHVybiByZXM7XG4gIH1cblxuICBzdGF0aWMgY29tcGFyZUNvbXBvbmVudHMoY29tcG9uZW50LCBvdGhlcikge1xuICAgIHJldHVybiBjb21wb25lbnQuY29tcGFyZVRvKG90aGVyKTtcbiAgfVxuXG4gIGNvbXBhcmVUbyhvdGhlckNvbXBvbmVudCkge1xuICAgIGNvbnN0IGlzRm9yZWdyb3VuZCA9IHRoaXMuc3R5bGUgJiYgdGhpcy5zdHlsZS5mb3JlZ3JvdW5kO1xuICAgIGNvbnN0IG90aGVySXNGb3JlZ3JvdW5kID0gb3RoZXJDb21wb25lbnQuc3R5bGUgJiYgb3RoZXJDb21wb25lbnQuc3R5bGUuZm9yZWdyb3VuZDtcbiAgICBjb25zdCB6SW5kZXggPSB0aGlzLnN0eWxlICYmIHRoaXMuc3R5bGUuekluZGV4O1xuICAgIGNvbnN0IG90aGVyekluZGV4ID0gb3RoZXJDb21wb25lbnQuc3R5bGUgJiYgb3RoZXJDb21wb25lbnQuc3R5bGUuekluZGV4O1xuXG4gICAgaWYodGhpcy5wYXJlbnQgPT0gb3RoZXJDb21wb25lbnQpIHtcbiAgICAgIHJldHVybiAxO1xuICAgIH0gZWxzZSBpZihvdGhlckNvbXBvbmVudC5wYXJlbnQgPT0gdGhpcykge1xuICAgICAgcmV0dXJuIC0xO1xuICAgIH0gZWxzZSBpZihpc0ZvcmVncm91bmQgJiYgIW90aGVySXNGb3JlZ3JvdW5kKSB7XG4gICAgICByZXR1cm4gMVxuICAgIH0gZWxzZSBpZighaXNGb3JlZ3JvdW5kICYmIG90aGVySXNGb3JlZ3JvdW5kKSB7XG4gICAgICByZXR1cm4gLTE7XG4gICAgfSBlbHNlIGlmKHpJbmRleCA+IG90aGVyekluZGV4KSB7XG4gICAgICByZXR1cm4gMTtcbiAgICB9IGVsc2UgaWYoekluZGV4IDwgb3RoZXJ6SW5kZXgpIHtcbiAgICAgIHJldHVybiAtMTtcbiAgICB9XG5cbiAgICByZXR1cm4gb3RoZXJDb21wb25lbnQuY29tcGFyZVRvQ29tcG9uZW50KHRoaXMpIHx8IC10aGlzLmNvbXBhcmVUb0NvbXBvbmVudChvdGhlckNvbXBvbmVudCk7XG4gIH1cblxuICBjb21wYXJlVG9Db21wb25lbnQob3RoZXJDb21wb25lbnQpIHtcbiAgICByZXR1cm4gMDtcbiAgfVxuXG4gIGNvbXBhcmVUb01lbnUob3RoZXJDb21wb25lbnQpIHtcbiAgICByZXR1cm4gLTE7XG4gIH1cblxuICBjb21wYXJlVG9Ub29sdGlwKG90aGVyQ29tcG9uZW50KSB7XG4gICAgcmV0dXJuIC0xO1xuICB9XG5cbiAgY29tcGFyZVRvTm90aWZpY2F0aW9uKG90aGVyQ29tcG9uZW50KSB7XG4gICAgcmV0dXJuIC0xO1xuICB9XG5cbiAgY29tcGFyZVRvU2Nyb2xsYmFyKG90aGVyQ29tcG9uZW50KSB7XG4gICAgcmV0dXJuIC0xO1xuICB9XG59IiwiLypcbiAqIENvcHlyaWdodCAoQykgMjAyMCBFbGlhc3RpayAoZWxpYXN0aWtzb2Z0cy5jb20pXG4gKlxuICogVGhpcyBmaWxlIGlzIHBhcnQgb2YgXCJKU0dhbWVUb29sc1wiLlxuICpcbiAqIFwiSlNHYW1lVG9vbHNcIiBpcyBmcmVlIHNvZnR3YXJlOiB5b3UgY2FuIHJlZGlzdHJpYnV0ZSBpdCBhbmQvb3IgbW9kaWZ5XG4gKiBpdCB1bmRlciB0aGUgdGVybXMgb2YgdGhlIEdOVSBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlIGFzIHB1Ymxpc2hlZCBieVxuICogdGhlIEZyZWUgU29mdHdhcmUgRm91bmRhdGlvbiwgZWl0aGVyIHZlcnNpb24gMyBvZiB0aGUgTGljZW5zZSwgb3JcbiAqIChhdCB5b3VyIG9wdGlvbikgYW55IGxhdGVyIHZlcnNpb24uXG4gKlxuICogXCJKU0dhbWVUb29sc1wiIGlzIGRpc3RyaWJ1dGVkIGluIHRoZSBob3BlIHRoYXQgaXQgd2lsbCBiZSB1c2VmdWwsXG4gKiBidXQgV0lUSE9VVCBBTlkgV0FSUkFOVFk7IHdpdGhvdXQgZXZlbiB0aGUgaW1wbGllZCB3YXJyYW50eSBvZlxuICogTUVSQ0hBTlRBQklMSVRZIG9yIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFLiAgU2VlIHRoZVxuICogR05VIEdlbmVyYWwgUHVibGljIExpY2Vuc2UgZm9yIG1vcmUgZGV0YWlscy5cbiAqXG4gKiBZb3Ugc2hvdWxkIGhhdmUgcmVjZWl2ZWQgYSBjb3B5IG9mIHRoZSBHTlUgR2VuZXJhbCBQdWJsaWMgTGljZW5zZVxuICogYWxvbmcgd2l0aCBcIkpTR2FtZVRvb2xzXCIuICBJZiBub3QsIHNlZSA8aHR0cDovL3d3dy5nbnUub3JnL2xpY2Vuc2VzLz4uXG4gKi9cbmV4cG9ydCBkZWZhdWx0IHtcbiAgU2V0dGluZzoge1xuICAgIERJU0FCTEVfT1BUSU1JWkFUSU9OUzogZmFsc2UsIC8vIHRydWUgdG8gZGlzYWJsZSBvcHRpbWl6YXRpb25zLCBjYW4gZml4IHNvbWUgcHJvYmxlbXMsIGRpc2FibGluZyBvcHRpbWl6YXRpb24gcmVkdWNlcyBwZXJmb3JtYW5jZVxuICAgIERJU0FCTEVfRVhQRVJJTUVOVEFMX09QVElNSVpBVElPTlM6IGZhbHNlLCAvLyB0cnVlIHRvIGRpc2FibGUgb3B0aW1pemF0aW9ucyB0aGF0IGFyZSBjb25zaWRlcmVkIGV4cGVyaW1lbnRhbFxuICAgIERJU0FCTEVfSVNfQ09NUE9ORU5UX1ZJU0lCTEVfT1BUSU1JWkFUSU9OUzogdHJ1ZSwgLy8gdHJ1ZSB0byBkaXNhYmxlIG9wdGltaXphdGlvbnMgb2YgdGhlIENvbnRhaW5lci5pc0NvbXBvbmVudFZpc2libGUgbWV0aG9kXG4gICAgRElTQUJMRV9DT05UQUlORVJTX0NVVFRJTkc6IGZhbHNlLCAvLyBkaXNhYmxpbmcgY29udGFpbmVycyBjdXR0aW5nIGFsbG93IHRvIHZpZXcgdGhlIGNvbXBvbmVudHMgb2YgYSBjb250YWluZXIgdGhhdCBhcmUgbm90IHRvdGFsbHkgdmlzaWJsZSwgeW91IGNhbiBhbHNvIGRpc2FibGUgb3B0aW1pemF0aW9ucyB0byBkaXNwbGF5cyBlbGVtZW50cyB0aGF0IGFyZSBub3QgZHJhd24gZm9yIG9wdGltaXphdGlvbiBwdXJwb3Nlc1xuICAgIEVOQUJMRV9QSVhFTF9SQVRJT19SRVNJWklORzogdHJ1ZSwgLy8gZW5hYmxpbmcgdGhpcyBhbGxvdyByZXNpemluZyB0aGUgY2FudmFzIHRvIG1hdGNoIHRoZSBzY3JlZW4gcGl4ZWwgcmF0aW9cbiAgICBQSVhFTF9SQVRJTzogMSwgLy8gdGhlIGN1cnJlbnQgcGl4ZWwgcmF0aW8sIGF1dG9tYXRpY2FsbHkgdXBkYXRlZFxuICAgIFJFU09MVVRJT05fU0NBTEU6IDEsIC8vIHRoZSByZXNvbHV0aW9uIHNjYWxlXG4gICAgRk9OVF9GQU1JTFk6IFwic2Fucy1zZXJpZlwiLFxuICAgIEZPTlRfU0laRTogMjgsXG4gICAgQ0FOVkFTX1dJRFRIOiA2MDAsXG4gICAgQ0FOVkFTX0hFSUdIVDogNDAwLFxuICAgIERFRkFVTFRfUEFERElORzogNixcbiAgICBERUZBVUxUX1NQQUNJTkc6IDYsXG4gICAgQlVUVE9OX0RFRkFVTFRfQkFDS0dST1VORDogXCJyZ2JhKDAsIDAsIDAsIDApXCIsXG4gICAgQlVUVE9OX0RFRkFVTFRfSE9WRVJfQkFDS0dST1VORDogXCIjOTVBNUE2XCIsXG4gICAgQlVUVE9OX0RFRkFVTFRfQ0xJQ0tfQkFDS0dST1VORDogXCIjNzI3RjgwXCIsXG4gICAgQlVUVE9OX0RFRkFVTFRfQUxURVJOQVRJVkVfQkFDS0dST1VORDogXCIjQUNCRUJGXCIsXG4gICAgSU5QVVRfREVGQVVMVF9GT05UX0NPTE9SOiBcIiMwMDBcIixcbiAgICBJTlBVVF9ERUZBVUxUX0JBQ0tHUk9VTkRfQ09MT1I6IFwiI2ZmZlwiLFxuICAgIElOUFVUX0RFRkFVTFRfQk9SREVSX0NPTE9SOiBcIiMwMDBcIixcbiAgICBJTlBVVF9ERUZBVUxUX0JPUkRFUl9DT0xPUl9TRUxFQ1RFRDogXCIjYTJjZGQ4XCIsXG4gICAgSU5QVVRfREVGQVVMVF9TRUxFQ1RfQ09MT1I6IFwiIzI5ODBiOVwiLFxuICAgIExBQkVMX0RFRkFVTFRfRk9OVF9DT0xPUjogXCIjMDAwXCIsXG4gICAgTElOS19ERUZBVUxUX0NPTE9SOiBcIiMwMDAwRUVcIixcbiAgICBMSU5LX0RFRkFVTFRfSE9WRVJfQ09MT1I6IFwiIzRENERGRlwiLFxuICAgIExJTktfREVGQVVMVF9DTElDS19DT0xPUjogXCIjRUU3NzAwXCIsXG4gICAgTUVOVV9ERUZBVUxUX0JBQ0tHUk9VTkQ6IFwicmdiYSg0NCwgNjIsIDgwLCAwLjc1KVwiLFxuICAgIE1FTlVfREVGQVVMVF9CTFVSX0JBQ0tHUk9VTkQ6IGZhbHNlLFxuICAgIE5PVElGSUNBVElPTl9ERUZBVUxUX0JBQ0tHUk9VTkQ6IFwicmdiYSg0NiwgMjA0LCAxMTMsIDAuNSlcIixcbiAgICBOT1RJRklDQVRJT05fREVGQVVMVF9BTklNQVRJT05fRFVSQVRJT046IDUwMCwgLy8gbXNcbiAgICBQUk9HUkVTU19ERUZBVUxUX0JBQ0tHUk9VTkQ6IFwiI2JkYzNjN1wiLFxuICAgIFBST0dSRVNTX0RFRkFVTFRfRk9SRUdST1VORDogXCIjMjdhZTYwXCIsXG4gICAgUFJPR1JFU1NfREVGQVVMVF9BTklNQVRJT05fRFVSQVRJT046IDIwMDAsIC8vIG1zXG4gICAgVE9PTFRJUF9ERUZBVUxUX0JBQ0tHUk9VTkQ6IFwicmdiYSgyNTUsIDI1NSwgMjU1LCAwLjI1KVwiLFxuICAgIEFSUk9XX0RFRkFVTFRfTElORV9DQVA6IFwicm91bmRcIixcbiAgICBBUlJPV19ERUZBVUxUX0NPTE9SOiBcIiNGRjAwMDBcIixcbiAgICBBUlJPV19ERUZBVUxUX0xJTkVfU0laRTogOCxcbiAgICBBUlJPV19ERUZBVUxUX0hFQURfU0laRTogMjAsXG4gICAgQ1JPU1NfREVGQVVMVF9MSU5FX0NBUDogXCJyb3VuZFwiLFxuICAgIENST1NTX0RFRkFVTFRfQ09MT1I6IFwiI2ZmZlwiLFxuICAgIENST1NTX0RFRkFVTFRfTElORV9TSVpFOiAzLFxuICAgIFNDUk9MTEJBUl9ERUZBVUxUX0JBQ0tHUk9VTkQ6IFwicmdiYSgxNDksIDE2NSwgMTY2LCAwLjc1KVwiLFxuICAgIFNDUk9MTEJBUl9ERUZBVUxUX0hPVkVSX0JBQ0tHUk9VTkQ6IFwicmdiYSgxNDksIDE2NSwgMTY2LCAwLjkpXCIsXG4gICAgU0NST0xMQkFSX0RFRkFVTFRfQ0xJQ0tfQkFDS0dST1VORDogXCJyZ2JhKDE0OSwgMTY1LCAxNjYsIDAuNSlcIixcbiAgICBTQ1JPTExCQVJfREVGQVVMVF9TSVpFOiAxMCxcbiAgICBERUZBVUxUX0JPUkRFUl9TSVpFOiAzLFxuICAgIERFRkFVTFRfQk9SREVSX0NPTE9SX1NFTEVDVEVEOiBcIiNhMmNkZDhcIixcbiAgICBERUZBVUxUX0FOSU1BVElPTl9EVVJBVElPTjogMjAwMCwgLy8gbXNcbiAgICBUUklBTkdMRV9ERUZBVUxUX0xJTkVfQ0FQOiBcInJvdW5kXCIsXG4gICAgVFJJQU5HTEVfREVGQVVMVF9DT0xPUjogXCIjMDAwXCIsXG4gICAgVFJJQU5HTEVfREVGQVVMVF9GSUxMX0NPTE9SOiBcIiMwMDBcIixcbiAgICBUUklBTkdMRV9ERUZBVUxUX0xJTkVfU0laRTogMyxcbiAgICBUUklBTkdMRV9ERUZBVUxUX0ZJTEw6IHRydWUsXG4gICAgU0VMRUNUX0RFRkFVTFRfQkFDS0dST1VORDogXCIjZWNmMGYxXCIsXG4gICAgU0VMRUNUX0RFRkFVTFRfSE9WRVJfQkFDS0dST1VORDogXCIjYmRjM2M3XCIsXG4gICAgU0VMRUNUX0RFRkFVTFRfQ0xJQ0tfQkFDS0dST1VORDogXCIjYWRiMmI1XCIsXG4gICAgQ0lSQ0xFX0RFRkFVTFRfTElORV9DQVA6IFwicm91bmRcIixcbiAgICBDSVJDTEVfREVGQVVMVF9DT0xPUjogXCIjZmZmXCIsXG4gICAgQ0lSQ0xFX0RFRkFVTFRfRklMTF9DT0xPUjogXCIjMDAwXCIsXG4gICAgQ0lSQ0xFX0RFRkFVTFRfTElORV9TSVpFOiAzLFxuICAgIENJUkNMRV9ERUZBVUxUX0ZJTEw6IHRydWUsXG4gIH0sXG4gIEtleToge1xuICAgIFVQOiAzOCxcbiAgICBSSUdIVDogMzksXG4gICAgQk9UVE9NOiA0MCxcbiAgICBMRUZUOiAzNyxcbiAgICBFTlRFUjogMTMsXG4gICAgRUNIQVA6IDI3LFxuICAgIFRBQjogOVxuICB9LFxuICBBbGlnbmVtZW50OiB7XG4gICAgUklHSFQ6IFwicmlnaHRcIixcbiAgICBMRUZUOiBcImxlZnRcIixcbiAgICBDRU5URVI6IFwiY2VudGVyXCIsXG4gICAgREVGQVVMVDogXCJkZWZhdWx0XCJcbiAgfSxcbiAgVmVydGljYWxBbGlnbmVtZW50OiB7XG4gICAgVE9QOiBcInRvcFwiLFxuICAgIENFTlRFUjogXCJjZW50ZXJcIixcbiAgICBCT1RUT006IFwiYm90dG9tXCIsXG4gICAgREVGQVVMVDogXCJkZWZhdWx0XCJcbiAgfSxcbiAgU3RyaW5nOiB7XG4gICAgRVJST1JfTUVTU0FHRV9DQU5WQVM6IFwiQSBmYXRhbCBlcnJvciBoYXMgb2NjdXJyZWQgYXQgdGhlIEpTR2FtZVRvb2xzIGxldmVsLlwiLFxuICAgIEVSUk9SX01FU1NBR0VfQ0FOVkFTX0xBQkVMIDogXCI6JyhcXG5BIGZhdGFsIGVycm9yIGhhcyBvY2N1cnJlZCBhdCB0aGUgSlNHYW1lVG9vbHMgbGV2ZWwuXCIsXG4gICAgUkVUUlk6IFwiUmV0cnlcIixcbiAgICBOT1RJQ0VfTUVTU0FHRTogXCJOb3RpY2U6XCIsXG4gICAgV0FSTklOR19NRVNTQUdFOiBcIldhcm5pbmc6XCIsXG4gICAgRVJST1JfTUVTU0FHRTogXCJFcnJvcjpcIixcbiAgICBPUFRJTUlaQVRJT05fRElTQUJMRUQ6IFwiT3B0aW1pemF0aW9ucyBhcmUgZGlzYWJsZWQuIFlvdSBtYXkgbm90aWNlIGxvdyBwZXJmb3JtYW5jZS5cIixcbiAgICBDT05UQUlORVJfQ1VUVElOR19ESVNBQkxFRDogXCJDb250YWluZXJzIGN1dHRpbmcgaXMgZGlzYWJsZWQuXCIsXG4gICAgQlVUVE9OX0lNQUdFX0RFUFJFQ0FURUQ6IFwiSlNHYW1lVG9vbHMuQnV0dG9uSW1hZ2UgaXMgZGVwcmVjYXRlZC4gUGxlYXNlIHVzZSBhIEJ1dHRvbiB3aXRoIGFuIEltYWdlQ29udGFpbmVyIGluc3RlYWQuXCIsXG4gICAgSU5QVVRfRlVMTFNDUkVFTjogXCJUaGUgdXNlIG9mIEpTR2FtZVRvb2xzLkNhbnZhcyBpcyBuZWVkZWQgZm9yIElucHV0IGNvbXBvbmVudHMgdG8gcHJvcGVybHkgd29yayBpbiBmdWxsc2NyZWVuIG1vZGUuXCJcbiAgfVxufTsiLCIvKlxuICogQ29weXJpZ2h0IChDKSAyMDIwIEVsaWFzdGlrIChlbGlhc3Rpa3NvZnRzLmNvbSlcbiAqXG4gKiBUaGlzIGZpbGUgaXMgcGFydCBvZiBcIkpTR2FtZVRvb2xzXCIuXG4gKlxuICogXCJKU0dhbWVUb29sc1wiIGlzIGZyZWUgc29mdHdhcmU6IHlvdSBjYW4gcmVkaXN0cmlidXRlIGl0IGFuZC9vciBtb2RpZnlcbiAqIGl0IHVuZGVyIHRoZSB0ZXJtcyBvZiB0aGUgR05VIEdlbmVyYWwgUHVibGljIExpY2Vuc2UgYXMgcHVibGlzaGVkIGJ5XG4gKiB0aGUgRnJlZSBTb2Z0d2FyZSBGb3VuZGF0aW9uLCBlaXRoZXIgdmVyc2lvbiAzIG9mIHRoZSBMaWNlbnNlLCBvclxuICogKGF0IHlvdXIgb3B0aW9uKSBhbnkgbGF0ZXIgdmVyc2lvbi5cbiAqXG4gKiBcIkpTR2FtZVRvb2xzXCIgaXMgZGlzdHJpYnV0ZWQgaW4gdGhlIGhvcGUgdGhhdCBpdCB3aWxsIGJlIHVzZWZ1bCxcbiAqIGJ1dCBXSVRIT1VUIEFOWSBXQVJSQU5UWTsgd2l0aG91dCBldmVuIHRoZSBpbXBsaWVkIHdhcnJhbnR5IG9mXG4gKiBNRVJDSEFOVEFCSUxJVFkgb3IgRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UuICBTZWUgdGhlXG4gKiBHTlUgR2VuZXJhbCBQdWJsaWMgTGljZW5zZSBmb3IgbW9yZSBkZXRhaWxzLlxuICpcbiAqIFlvdSBzaG91bGQgaGF2ZSByZWNlaXZlZCBhIGNvcHkgb2YgdGhlIEdOVSBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlXG4gKiBhbG9uZyB3aXRoIFwiSlNHYW1lVG9vbHNcIi4gIElmIG5vdCwgc2VlIDxodHRwOi8vd3d3LmdudS5vcmcvbGljZW5zZXMvPi5cbiAqL1xuaW1wb3J0IEJveCBmcm9tIFwiLi9Cb3hcIjtcbmltcG9ydCBDb21wb25lbnQgZnJvbSBcIi4vQ29tcG9uZW50XCI7XG5pbXBvcnQgQ29uc3RhbnRzIGZyb20gXCIuL0NvbnN0YW50c1wiO1xuaW1wb3J0IFNjcm9sbGJhckhvcml6b250YWwgZnJvbSBcIi4vU2Nyb2xsYmFySG9yaXpvbnRhbFwiO1xuaW1wb3J0IFNjcm9sbGJhclZlcnRpY2FsIGZyb20gXCIuL1Njcm9sbGJhclZlcnRpY2FsXCI7XG5pbXBvcnQgU3R5bGUgZnJvbSBcIi4vU3R5bGVcIjtcbmltcG9ydCBVdGlscyBmcm9tIFwiLi9VdGlsc1wiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDb250YWluZXIgZXh0ZW5kcyBCb3gge1xuICBzZWxlY3RhYmxlID0gZmFsc2U7XG4gICNjb21wb25lbnRzID0gW107XG4gICNfbWF4V2lkdGggPSAwO1xuICAjX21heEhlaWdodCA9IDA7XG4gICNfbWluV2lkdGggPSAwO1xuICAjX21pbkhlaWdodCA9IDA7XG4gIGV2ZW50Q2hhbmdlQ2FsbGJhY2sgPSAoKSA9PiB0aGlzLnJlYWN0b3IuZGlzcGF0Y2hFdmVudChcIm9uQ2hhbmdlXCIsIHRoaXMpO1xuXG4gIGNvbnN0cnVjdG9yKHgsIHksIG1heFdpZHRoLCBtYXhIZWlnaHQsIHN0eWxlLCAuLi5jb21wb25lbnRzKSB7XG4gICAgc3VwZXIoeCwgeSwgbnVsbCwgbnVsbCwgc3R5bGUpO1xuXG4gICAgdGhpcy5hZGRBbGwoLi4uY29tcG9uZW50cyk7XG4gICAgdGhpcy5jYW52YXNUbXAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiY2FudmFzXCIpO1xuICAgIHRoaXMuI19tYXhXaWR0aCA9IG1heFdpZHRoO1xuICAgIHRoaXMuI19tYXhIZWlnaHQgPSBtYXhIZWlnaHQ7XG4gICAgdGhpcy5zY3JvbGxiYXJIb3Jpem9udGFsID0gbmV3IFNjcm9sbGJhckhvcml6b250YWwobnVsbCwgbnVsbCwgdGhpcyk7XG4gICAgdGhpcy5zY3JvbGxiYXJWZXJ0aWNhbCA9IG5ldyBTY3JvbGxiYXJWZXJ0aWNhbChudWxsLCBudWxsLCB0aGlzKTtcblxuICAgIHRoaXMuYWRkU2Nyb2xsQWN0aW9uKChkZWx0YVgsIGRlbHRhWSkgPT4gdGhpcy5jb250cm9sU2Nyb2xsaW5nKGRlbHRhWCwgZGVsdGFZKSk7XG5cbiAgICBpZighQ29uc3RhbnRzLlNldHRpbmcuRElTQUJMRV9FWFBFUklNRU5UQUxfT1BUSU1JWkFUSU9OUykge1xuICAgICAgdGhpcy5hZGRDaGFuZ2VBY3Rpb24oY29tcG9uZW50Q2hhbmdlZCA9PiB7XG4gICAgICAgIGNvbXBvbmVudENoYW5nZWQgPT0gdGhpcy5wYXJlbnQgJiYgdGhpcy5jb21wb25lbnRzLmZvckVhY2goY29tcG9uZW50ID0+IGNvbXBvbmVudCAmJiBjb21wb25lbnQucmVhY3Rvci5kaXNwYXRjaEV2ZW50KFwib25DaGFuZ2VcIiwgdGhpcykpO1xuICAgICAgfSk7XG4gICAgfVxuICB9XG5cbiAgZHJhdyhjb250ZXh0KSB7XG4gICAgaWYodGhpcy5oaWRkZW4pIHJldHVybjtcbiAgICBjb25zdCBjYW52YXMgPSBjb250ZXh0LmNhbnZhcztcbiAgICBjb25zdCBjdHggPSBjYW52YXMuZ2V0Q29udGV4dChcIjJkXCIpO1xuICAgIGN0eC5zYXZlKCk7XG5cbiAgICBpZih0aGlzLmlzQ3V0dGluZykge1xuICAgICAgY29uc3QgY3R4VGVtcCA9IHRoaXMuY2FudmFzVG1wLmdldENvbnRleHQoXCIyZFwiKTtcbiAgICAgIHRoaXMuY2FudmFzVG1wLndpZHRoID0gVXRpbHMuZ2V0Q2FudmFzV2lkdGgoY2FudmFzKSAqIENvbnN0YW50cy5TZXR0aW5nLlBJWEVMX1JBVElPO1xuICAgICAgdGhpcy5jYW52YXNUbXAuaGVpZ2h0ID0gVXRpbHMuZ2V0Q2FudmFzSGVpZ2h0KGNhbnZhcykgKiBDb25zdGFudHMuU2V0dGluZy5QSVhFTF9SQVRJTztcbiAgICAgIHRoaXMuY2FudmFzVG1wLnN0eWxlLndpZHRoID0gVXRpbHMuZ2V0Q2FudmFzV2lkdGgoY2FudmFzKTtcbiAgICAgIHRoaXMuY2FudmFzVG1wLnN0eWxlLmhlaWdodCA9IFV0aWxzLmdldENhbnZhc0hlaWdodChjYW52YXMpO1xuICAgICAgVXRpbHMuY2xlYXIoY3R4VGVtcCk7XG4gICAgfVxuICAgIFxuICAgIHRoaXMuY29tcG9uZW50cy5mb3JFYWNoKGNvbXBvbmVudCA9PiB7XG4gICAgICBpZih0aGlzLmNhbnZhcykgY29tcG9uZW50LmNhbnZhcyA9IHRoaXMuY2FudmFzO1xuICAgIH0pO1xuICAgIFxuICAgIHRoaXMuY29udHJvbFNjcm9sbGluZygwLCAwKTtcbiAgICBzdXBlci5kcmF3KGNvbnRleHQpO1xuXG4gICAgY3R4LnJlc3RvcmUoKTtcbiAgfVxuXG4gIGRyYXdWZXJ0aWNhbFNjcm9sbEJhcihjdHgpIHtcbiAgICBpZih0aGlzLnNjcm9sbGJhclZlcnRpY2FsKSB7XG4gICAgICB0aGlzLnNjcm9sbGJhclZlcnRpY2FsLmNhbnZhcyA9IHRoaXMuY2FudmFzO1xuICAgICAgdGhpcy5zY3JvbGxiYXJWZXJ0aWNhbC5kcmF3KGN0eCk7XG4gICAgfVxuICB9XG5cbiAgZHJhd0hvcml6b250YWxTY3JvbGxCYXIoY3R4KSB7XG4gICAgaWYodGhpcy5zY3JvbGxiYXJIb3Jpem9udGFsKSB7XG4gICAgICB0aGlzLnNjcm9sbGJhckhvcml6b250YWwuY2FudmFzID0gdGhpcy5jYW52YXM7XG4gICAgICB0aGlzLnNjcm9sbGJhckhvcml6b250YWwuZHJhdyhjdHgpO1xuICAgIH1cbiAgfVxuXG4gIGRyYXdTY3JvbGxiYXJzKGN0eCkge1xuICAgIGlmKCF0aGlzLnN0eWxlLnNjcm9sbFhEaXNhYmxlZCkgdGhpcy5kcmF3SG9yaXpvbnRhbFNjcm9sbEJhcihjdHgpO1xuICAgIGlmKCF0aGlzLnN0eWxlLnNjcm9sbFlEaXNhYmxlZCkgdGhpcy5kcmF3VmVydGljYWxTY3JvbGxCYXIoY3R4KTtcbiAgfVxuXG4gIHNldCguLi5jb21wb25lbnRzKSB7XG4gICAgbGV0IGhhc0NoYW5nZWQgPSBmYWxzZTtcblxuICAgIGlmKGNvbXBvbmVudHMubGVuZ3RoID09IHRoaXMuY29tcG9uZW50cy5sZW5ndGgpIHtcbiAgICAgIGNvbXBvbmVudHMuZm9yRWFjaCgoY29tcG9uZW50LCBpKSA9PiB7XG4gICAgICAgIGlmKHRoaXMuY29tcG9uZW50c1tpXSAhPSBjb21wb25lbnQpIGhhc0NoYW5nZWQgPSB0cnVlO1xuICAgICAgfSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGhhc0NoYW5nZWQgPSB0cnVlO1xuICAgIH1cblxuICAgIGlmKGhhc0NoYW5nZWQpIHtcbiAgICAgIHRoaXMuY2xlYXIoKTtcbiAgICAgIHRoaXMuYWRkQWxsKC4uLmNvbXBvbmVudHMpO1xuICAgIH1cbiAgfVxuXG4gIGFkZChjb21wb25lbnQpIHtcbiAgICB0aGlzLiNjb21wb25lbnRzLnB1c2goY29tcG9uZW50KTtcbiAgICBjb21wb25lbnQucGFyZW50ID0gdGhpcztcbiAgICBpZih0aGlzLmNhbnZhcykgY29tcG9uZW50LmNhbnZhcyA9IHRoaXMuY2FudmFzO1xuICAgIGNvbXBvbmVudC5hZGRDaGFuZ2VBY3Rpb24odGhpcy5ldmVudENoYW5nZUNhbGxiYWNrKTtcbiAgICB0aGlzLnJlYWN0b3IuZGlzcGF0Y2hFdmVudChcIm9uQ2hhbmdlXCIsIHRoaXMpO1xuICB9XG5cbiAgYWRkQWxsKC4uLmNvbXBvbmVudHMpIHtcbiAgICBjb21wb25lbnRzLmZvckVhY2goY29tcG9uZW50ID0+IHRoaXMuYWRkKGNvbXBvbmVudCkpO1xuICB9XG5cbiAgcmVtb3ZlKGNvbXBvbmVudCkge1xuICAgIGlmKHRoaXMuI2NvbXBvbmVudHMuaW5kZXhPZihjb21wb25lbnQpICE9IC0xKSB7XG4gICAgICBjb21wb25lbnQucmVtb3ZlQ2hhbmdlQWN0aW9uKHRoaXMuZXZlbnRDaGFuZ2VDYWxsYmFjayk7XG4gICAgICB0aGlzLiNjb21wb25lbnRzID0gdGhpcy4jY29tcG9uZW50cy5maWx0ZXIoY3VycmVudCA9PiBjb21wb25lbnQgIT0gY3VycmVudCk7XG4gICAgICB0aGlzLnJlYWN0b3IuZGlzcGF0Y2hFdmVudChcIm9uQ2hhbmdlXCIsIHRoaXMpO1xuICAgIH1cbiAgfVxuXG4gIGNsZWFyKCkge1xuICAgIHRoaXMuI2NvbXBvbmVudHMuZm9yRWFjaChjb21wb25lbnQgPT4gdGhpcy5yZW1vdmUoY29tcG9uZW50KSk7XG4gICAgdGhpcy5yZWFjdG9yLmRpc3BhdGNoRXZlbnQoXCJvbkNoYW5nZVwiLCB0aGlzKTtcbiAgfVxuXG4gIGdldCBjb21wb25lbnRzKCkge1xuICAgIGNvbnN0IGNvbXBvbmVudHMgPSBbXTtcbiAgICB0aGlzLiNjb21wb25lbnRzLmZvckVhY2goY29tcG9uZW50ID0+IGNvbXBvbmVudHMucHVzaChjb21wb25lbnQpKTtcbiAgICByZXR1cm4gY29tcG9uZW50cztcbiAgfVxuXG4gIGdldCBhbGxDb21wb25lbnRzKCkge1xuICAgIGNvbnN0IGNvbXBvbmVudHMgPSB0aGlzLmNvbXBvbmVudHM7XG4gICAgY29tcG9uZW50cy5wdXNoKHRoaXMuc2Nyb2xsYmFySG9yaXpvbnRhbCk7XG4gICAgY29tcG9uZW50cy5wdXNoKHRoaXMuc2Nyb2xsYmFyVmVydGljYWwpO1xuICAgIHJldHVybiBjb21wb25lbnRzO1xuICB9XG5cbiAgZ2V0Q29tcG9uZW50c1RyZWUoc3RhcnQgPSB0aGlzKSB7XG4gICAgY29uc3QgY29tcG9uZW50cyA9IHtcbiAgICAgIFwiY29tcG9uZW50XCI6IHN0YXJ0LFxuICAgICAgXCJjaGlsZHNcIjogW11cbiAgICB9O1xuXG4gICAgaWYoc3RhcnQuYWxsQ29tcG9uZW50cykge1xuICAgICAgc3RhcnQuYWxsQ29tcG9uZW50cy5mb3JFYWNoKGNvbXBvbmVudCA9PiBjb21wb25lbnRzLmNoaWxkcy5wdXNoKHRoaXMuZ2V0Q29tcG9uZW50c1RyZWUoY29tcG9uZW50KSkpO1xuICAgIH1cblxuICAgIHJldHVybiBjb21wb25lbnRzO1xuICB9XG5cbiAgc3RhdGljIHNvcnRDb21wb25lbnRzVHJlZShjb21wb25lbnQsIG90aGVyKSB7XG4gICAgcmV0dXJuIGNvbXBvbmVudC5jb21wb25lbnQuY29tcGFyZVRvKG90aGVyLmNvbXBvbmVudCk7XG4gIH1cblxuICBkaXNhYmxlKCkge1xuICAgIGxldCBjaGFuZ2VkID0gc3VwZXIuZGlzYWJsZSgpO1xuXG4gICAgdGhpcy4jY29tcG9uZW50cy5mb3JFYWNoKGNvbXBvbmVudCA9PiB7XG4gICAgICBpZihjb21wb25lbnQgJiYgY29tcG9uZW50LmRpc2FibGUgJiYgY29tcG9uZW50LmRpc2FibGUoKSkge1xuICAgICAgICBjaGFuZ2VkID0gdHJ1ZTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIGlmKGNoYW5nZWQpIHRoaXMucmVhY3Rvci5kaXNwYXRjaEV2ZW50KFwib25DaGFuZ2VcIiwgdGhpcyk7XG4gIH1cblxuICBlbmFibGUoKSB7XG4gICAgbGV0IGNoYW5nZWQgPSBzdXBlci5lbmFibGUoKTtcblxuICAgIHRoaXMuI2NvbXBvbmVudHMuZm9yRWFjaChjb21wb25lbnQgPT4ge1xuICAgICAgaWYoY29tcG9uZW50ICYmIGNvbXBvbmVudC5lbmFibGUgJiYgY29tcG9uZW50LmVuYWJsZSgpKSB7XG4gICAgICAgIGNoYW5nZWQgPSB0cnVlO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgaWYoY2hhbmdlZCkgdGhpcy5yZWFjdG9yLmRpc3BhdGNoRXZlbnQoXCJvbkNoYW5nZVwiLCB0aGlzKTtcbiAgfVxuXG4gIGdldCB3aWR0aCgpIHtcbiAgICBjb25zdCB3aWR0aCA9ICh0aGlzLnBhcmVudCAmJiB0aGlzLnBhcmVudC53aWR0aCk7XG4gICAgY29uc3QgbWluID0gdGhpcy5tYXhXaWR0aCA/IE1hdGgubWluKHRoaXMubWF4V2lkdGgsIHdpZHRoKSA6IG51bGw7XG4gICAgcmV0dXJuIHRoaXMubWluV2lkdGggPyBNYXRoLm1heCh0aGlzLm1pbldpZHRoLCBtaW4gfHwgd2lkdGgpIDogd2lkdGg7XG4gIH1cblxuICBnZXQgaGVpZ2h0KCkge1xuICAgIGNvbnN0IGhlaWdodCA9ICh0aGlzLnBhcmVudCAmJiB0aGlzLnBhcmVudC5oZWlnaHQpO1xuICAgIGNvbnN0IG1pbiA9IHRoaXMubWF4V2lkdGggPyBNYXRoLm1pbih0aGlzLm1heEhlaWdodCwgaGVpZ2h0KSA6IG51bGw7XG4gICAgcmV0dXJuIHRoaXMubWluSGVpZ2h0ID8gTWF0aC5tYXgodGhpcy5taW5IZWlnaHQsIG1pbiB8fCBoZWlnaHQpIDogaGVpZ2h0O1xuICB9XG5cbiAgZ2V0IG1heFdpZHRoKCkge1xuICAgIHJldHVybiB0aGlzLiNfbWF4V2lkdGg7XG4gIH1cblxuICBnZXQgbWF4SGVpZ2h0KCkge1xuICAgIHJldHVybiB0aGlzLiNfbWF4SGVpZ2h0O1xuICB9XG5cbiAgc2V0IG1heFdpZHRoKG1heFdpZHRoKSB7XG4gICAgaWYobWF4V2lkdGggIT0gdGhpcy4jX21heFdpZHRoKSB7XG4gICAgICB0aGlzLiNfbWF4V2lkdGggPSBtYXhXaWR0aDtcbiAgICAgIHRoaXMucmVhY3Rvci5kaXNwYXRjaEV2ZW50KFwib25DaGFuZ2VcIiwgdGhpcyk7XG4gICAgfVxuICB9XG5cbiAgc2V0IG1heEhlaWdodChtYXhIZWlnaHQpIHtcbiAgICBpZihtYXhIZWlnaHQgIT0gdGhpcy4jX21heEhlaWdodCkge1xuICAgICAgdGhpcy4jX21heEhlaWdodCA9IG1heEhlaWdodDtcbiAgICAgIHRoaXMucmVhY3Rvci5kaXNwYXRjaEV2ZW50KFwib25DaGFuZ2VcIiwgdGhpcyk7XG4gICAgfVxuICB9XG5cbiAgZ2V0IG1pbldpZHRoKCkge1xuICAgIHJldHVybiB0aGlzLiNfbWluV2lkdGg7XG4gIH1cblxuICBnZXQgbWluSGVpZ2h0KCkge1xuICAgIHJldHVybiB0aGlzLiNfbWluSGVpZ2h0O1xuICB9XG5cbiAgc2V0IG1pbldpZHRoKG1pbldpZHRoKSB7XG4gICAgaWYobWluV2lkdGggIT0gdGhpcy4jX21pbldpZHRoKSB7XG4gICAgICB0aGlzLiNfbWluV2lkdGggPSBtaW5XaWR0aDtcbiAgICAgIHRoaXMucmVhY3Rvci5kaXNwYXRjaEV2ZW50KFwib25DaGFuZ2VcIiwgdGhpcyk7XG4gICAgfVxuICB9XG5cbiAgc2V0IG1pbkhlaWdodChtaW5IZWlnaHQpIHtcbiAgICBpZihtaW5IZWlnaHQgIT0gdGhpcy4jX21pbkhlaWdodCkge1xuICAgICAgdGhpcy4jX21pbkhlaWdodCA9IG1pbkhlaWdodDtcbiAgICAgIHRoaXMucmVhY3Rvci5kaXNwYXRjaEV2ZW50KFwib25DaGFuZ2VcIiwgdGhpcyk7XG4gICAgfVxuICB9XG5cbiAgdXBkYXRlSW5uZXJIZWlnaHQoKSB7IH1cblxuICB1cGRhdGVJbm5lcldpZHRoKCkgeyB9XG5cbiAgc2V0IGNhbnZhcyhjYW52YXMpIHtcbiAgICBpZihjYW52YXMgIT0gdGhpcy5jYW52YXMpIHtcbiAgICAgIHN1cGVyLmNhbnZhcyA9IGNhbnZhcztcbiAgXG4gICAgICB0aGlzLiNjb21wb25lbnRzLmZvckVhY2goY29tcG9uZW50ID0+IHtcbiAgICAgICAgY29tcG9uZW50LmNhbnZhcyA9IGNhbnZhcztcbiAgICAgICAgaWYoY29tcG9uZW50LnJlYWN0b3IpIGNvbXBvbmVudC5yZWFjdG9yLmRpc3BhdGNoRXZlbnQoXCJvbkNoYW5nZVwiLCB0aGlzKTtcbiAgICAgIH0pO1xuICBcbiAgICAgIHRoaXMucmVhY3Rvci5kaXNwYXRjaEV2ZW50KFwib25DaGFuZ2VcIiwgdGhpcyk7XG4gICAgfVxuICB9XG5cbiAgZ2V0IGNhbnZhcygpIHtcbiAgICByZXR1cm4gc3VwZXIuY2FudmFzO1xuICB9XG5cbiAgZ2V0Q29tcG9uZW50SWQoY29tcG9uZW50KSB7XG4gICAgbGV0IHJlc3VsdCA9IG51bGw7XG5cbiAgICB0aGlzLiNjb21wb25lbnRzLmZvckVhY2goKGMsIGkpID0+IHtcbiAgICAgIGlmKGMgPT0gY29tcG9uZW50KSByZXN1bHQgPSBpO1xuICAgIH0pO1xuXG4gICAgcmV0dXJuIHJlc3VsdDtcbiAgfVxuXG4gIGdldCBzY3JvbGxBcmVhU2l6ZVgoKSB7XG4gICAgcmV0dXJuIHRoaXMuaW5uZXJXaWR0aCAtIHRoaXMud2lkdGg7XG4gIH1cblxuICBnZXQgc2Nyb2xsQXJlYVNpemVZKCkge1xuICAgIHJldHVybiB0aGlzLmlubmVySGVpZ2h0IC0gdGhpcy5oZWlnaHQ7XG4gIH1cblxuICBjb250cm9sU2Nyb2xsaW5nKGRlbHRhWCwgZGVsdGFZKSB7XG4gICAgaWYoIXRoaXMuc3R5bGUuc2Nyb2xsWURpc2FibGVkKSB7XG4gICAgICBpZih0aGlzLnNjcm9sbEFyZWFTaXplWSA8PSAwKSB7XG4gICAgICAgIHRoaXMub2Zmc2V0U2Nyb2xsWSA9IDA7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBjb25zdCBwZXJjZW50U2Nyb2xsYmFyWSA9IHRoaXMub2Zmc2V0U2Nyb2xsWSAvIHRoaXMuc2Nyb2xsQXJlYVNpemVZO1xuICBcbiAgICAgICAgaWYocGVyY2VudFNjcm9sbGJhclkgPD0gMCAmJiBkZWx0YVkgPD0gMCkge1xuICAgICAgICAgIHRoaXMub2Zmc2V0U2Nyb2xsWSA9IE1hdGgubWluKDAsIHRoaXMueSk7XG4gICAgICAgIH0gZWxzZSBpZihwZXJjZW50U2Nyb2xsYmFyWSA+IDEgJiYgZGVsdGFZID49IDApIHtcbiAgICAgICAgICB0aGlzLm9mZnNldFNjcm9sbFkgPSB0aGlzLnNjcm9sbEFyZWFTaXplWTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLm9mZnNldFNjcm9sbFkgLT0gZGVsdGFZO1xuICAgIH1cblxuICAgIGlmKCF0aGlzLnN0eWxlLnNjcm9sbFhEaXNhYmxlZCkge1xuICAgICAgaWYodGhpcy5zY3JvbGxBcmVhU2l6ZVggPD0gMCkge1xuICAgICAgICB0aGlzLm9mZnNldFNjcm9sbFggPSAwO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgY29uc3QgcGVyY2VudFNjcm9sbGJhclggPSB0aGlzLm9mZnNldFNjcm9sbFggLyB0aGlzLnNjcm9sbEFyZWFTaXplWDtcbiAgXG4gICAgICAgIGlmKHBlcmNlbnRTY3JvbGxiYXJYIDw9IDAgJiYgZGVsdGFYIDw9IDApIHtcbiAgICAgICAgICB0aGlzLm9mZnNldFNjcm9sbFggPSBNYXRoLm1pbigwLCB0aGlzLngpO1xuICAgICAgICB9IGVsc2UgaWYocGVyY2VudFNjcm9sbGJhclggPiAxICYmIGRlbHRhWCA+PSAwKSB7XG4gICAgICAgICAgdGhpcy5vZmZzZXRTY3JvbGxYID0gdGhpcy5zY3JvbGxBcmVhU2l6ZVg7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5vZmZzZXRTY3JvbGxYIC09IGRlbHRhWDtcbiAgICB9XG4gIH1cblxuICBpc0NvbXBvbmVudFZpc2libGUoY29tcG9uZW50KSB7XG4gICAgaWYoQ29uc3RhbnRzLlNldHRpbmcuRElTQUJMRV9PUFRJTUlaQVRJT05TKSByZXR1cm4gdHJ1ZTtcbiAgICBcbiAgICBpZihjb21wb25lbnQgaW5zdGFuY2VvZiBDb21wb25lbnQgJiYgIWNvbXBvbmVudC5oaWRkZW4pIHtcbiAgICAgIGlmKCFDb25zdGFudHMuU2V0dGluZy5ESVNBQkxFX0lTX0NPTVBPTkVOVF9WSVNJQkxFX09QVElNSVpBVElPTlMgJiYgdGhpcy5wYXJlbnQgJiYgdGhpcy5wYXJlbnQuaXNDb21wb25lbnRWaXNpYmxlICYmICF0aGlzLnBhcmVudC5pc0NvbXBvbmVudFZpc2libGUoY29tcG9uZW50KSkge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICB9XG5cbiAgICAgIGNvbnN0IHdpZHRoID0gdGhpcy53aWR0aDtcbiAgICAgIGNvbnN0IGhlaWdodCA9IHRoaXMuaGVpZ2h0O1xuICAgICAgY29uc3QgY29tcG9uZW50V2lkdGggPSBjb21wb25lbnQud2lkdGg7XG4gICAgICBjb25zdCBjb21wb25lbnRIZWlnaHQgPSBjb21wb25lbnQuaGVpZ2h0O1xuICAgICAgY29uc3QgY2FudmFzV2lkdGggPSAodGhpcy5jYW52YXMgJiYgdGhpcy5jYW52YXMud2lkdGgpIHx8IHdpZHRoO1xuICAgICAgY29uc3QgY2FudmFzSGVpZ2h0ID0gKHRoaXMuY2FudmFzICYmIHRoaXMuY2FudmFzLmhlaWdodCkgfHwgaGVpZ2h0O1xuXG4gICAgICBpZihjb21wb25lbnQueCArIGNvbXBvbmVudFdpZHRoID49IHRoaXMueCAmJiBjb21wb25lbnQueCA8PSB0aGlzLnggKyB3aWR0aCAmJiBjb21wb25lbnQueSArIGNvbXBvbmVudEhlaWdodCA+PSB0aGlzLnkgJiYgY29tcG9uZW50LnkgPD0gdGhpcy55ICsgaGVpZ2h0ICYmIGNvbXBvbmVudC54ICsgY29tcG9uZW50V2lkdGggPj0gMCAmJiBjb21wb25lbnQueCA8PSBjYW52YXNXaWR0aCAmJiBjb21wb25lbnQueSArIGNvbXBvbmVudEhlaWdodCA+PSAwICYmIGNvbXBvbmVudC55IDw9IGNhbnZhc0hlaWdodCkge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBnZXQgaXNDdXR0aW5nKCkge1xuICAgIHJldHVybiAhQ29uc3RhbnRzLlNldHRpbmcuRElTQUJMRV9DT05UQUlORVJTX0NVVFRJTkcgJiYgKCgodGhpcy5tYXhXaWR0aCAmJiB0aGlzLmlubmVyV2lkdGggPiB0aGlzLm1heFdpZHRoKSB8fCAodGhpcy5tYXhIZWlnaHQgJiYgdGhpcy5pbm5lckhlaWdodCA+IHRoaXMubWF4SGVpZ2h0KSkpICYmIHRoaXMuY2FudmFzVG1wICE9IG51bGw7XG4gIH1cblxuICBnZXQgZGVmYXVsdFN0eWxlKCkge1xuICAgIHJldHVybiBuZXcgU3R5bGUoe1xuICAgICAgXCJwYWRkaW5nXCI6IDAsXG4gICAgICBcInNwYWNlQmV0d2VlbkNvbXBvbmVudHNcIjogQ29uc3RhbnRzLlNldHRpbmcuREVGQVVMVF9TUEFDSU5HXG4gICAgfSk7XG4gIH1cbn0iLCIvKlxuICogQ29weXJpZ2h0IChDKSAyMDIwIEVsaWFzdGlrIChlbGlhc3Rpa3NvZnRzLmNvbSlcbiAqXG4gKiBUaGlzIGZpbGUgaXMgcGFydCBvZiBcIkpTR2FtZVRvb2xzXCIuXG4gKlxuICogXCJKU0dhbWVUb29sc1wiIGlzIGZyZWUgc29mdHdhcmU6IHlvdSBjYW4gcmVkaXN0cmlidXRlIGl0IGFuZC9vciBtb2RpZnlcbiAqIGl0IHVuZGVyIHRoZSB0ZXJtcyBvZiB0aGUgR05VIEdlbmVyYWwgUHVibGljIExpY2Vuc2UgYXMgcHVibGlzaGVkIGJ5XG4gKiB0aGUgRnJlZSBTb2Z0d2FyZSBGb3VuZGF0aW9uLCBlaXRoZXIgdmVyc2lvbiAzIG9mIHRoZSBMaWNlbnNlLCBvclxuICogKGF0IHlvdXIgb3B0aW9uKSBhbnkgbGF0ZXIgdmVyc2lvbi5cbiAqXG4gKiBcIkpTR2FtZVRvb2xzXCIgaXMgZGlzdHJpYnV0ZWQgaW4gdGhlIGhvcGUgdGhhdCBpdCB3aWxsIGJlIHVzZWZ1bCxcbiAqIGJ1dCBXSVRIT1VUIEFOWSBXQVJSQU5UWTsgd2l0aG91dCBldmVuIHRoZSBpbXBsaWVkIHdhcnJhbnR5IG9mXG4gKiBNRVJDSEFOVEFCSUxJVFkgb3IgRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UuICBTZWUgdGhlXG4gKiBHTlUgR2VuZXJhbCBQdWJsaWMgTGljZW5zZSBmb3IgbW9yZSBkZXRhaWxzLlxuICpcbiAqIFlvdSBzaG91bGQgaGF2ZSByZWNlaXZlZCBhIGNvcHkgb2YgdGhlIEdOVSBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlXG4gKiBhbG9uZyB3aXRoIFwiSlNHYW1lVG9vbHNcIi4gIElmIG5vdCwgc2VlIDxodHRwOi8vd3d3LmdudS5vcmcvbGljZW5zZXMvPi5cbiAqL1xuaW1wb3J0IENvbXBvbmVudCBmcm9tIFwiLi9Db21wb25lbnRcIjtcbmltcG9ydCBDb25zdGFudHMgZnJvbSBcIi4vQ29uc3RhbnRzXCI7XG5pbXBvcnQgVXRpbHMgZnJvbSBcIi4vVXRpbHNcIjtcbmltcG9ydCBTdHlsZSBmcm9tIFwiLi9TdHlsZVwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDcm9zcyBleHRlbmRzIENvbXBvbmVudCB7XG4gIHNlbGVjdGFibGUgPSBmYWxzZTtcblxuICBjb25zdHJ1Y3Rvcih4LCB5LCB3aWR0aCwgaGVpZ2h0LCBzdHlsZSkge1xuICAgIHN1cGVyKHgsIHksIHdpZHRoLCBoZWlnaHQsIHN0eWxlKTtcbiAgfVxuXG4gIGRyYXcoY29udGV4dCkge1xuICAgIGlmKHRoaXMuaGlkZGVuKSByZXR1cm47XG4gICAgc3VwZXIuZHJhdyhjb250ZXh0KTtcblxuICAgIGNvbnN0IGNhbnZhcyA9IGNvbnRleHQuY2FudmFzO1xuICAgIGNvbnN0IGN0eCA9IGNhbnZhcy5nZXRDb250ZXh0KFwiMmRcIik7XG4gICAgXG4gICAgVXRpbHMuZHJhd0Nyb3NzKGN0eCwgdGhpcy54LCB0aGlzLnksIHRoaXMud2lkdGgsIHRoaXMuaGVpZ2h0LCB0aGlzLnN0eWxlLmxpbmVXaWR0aCwgdGhpcy5zdHlsZS5jb2xvciwgdGhpcy5zdHlsZS5saW5lQ2FwKTtcblxuICAgIHRoaXMuaW5pdCA9IHRydWU7XG4gIH1cblxuICBnZXQgd2lkdGgoKSB7XG4gICAgcmV0dXJuIHN1cGVyLndpZHRoICsgdGhpcy5zdHlsZS5saW5lV2lkdGg7XG4gIH1cblxuICBnZXQgaGVpZ2h0KCkge1xuICAgIHJldHVybiBzdXBlci5oZWlnaHQgKyB0aGlzLnN0eWxlLmxpbmVXaWR0aDtcbiAgfVxuXG4gIHNldCB3aWR0aCh3aWR0aCkge1xuICAgIHN1cGVyLndpZHRoID0gd2lkdGg7XG4gIH1cblxuICBzZXQgaGVpZ2h0KGhlaWdodCkge1xuICAgIHN1cGVyLmhlaWdodCA9IGhlaWdodDtcbiAgfVxuXG4gIGdldCBkZWZhdWx0U3R5bGUoKSB7XG4gICAgcmV0dXJuIG5ldyBTdHlsZSh7XG4gICAgICBcImxpbmVXaWR0aFwiOiBDb25zdGFudHMuU2V0dGluZy5DUk9TU19ERUZBVUxUX0xJTkVfU0laRSxcbiAgICAgIFwiY29sb3JcIjogQ29uc3RhbnRzLlNldHRpbmcuQ1JPU1NfREVGQVVMVF9DT0xPUixcbiAgICAgIFwibGluZUNhcFwiOiBDb25zdGFudHMuU2V0dGluZy5DUk9TU19ERUZBVUxUX0xJTkVfQ0FQXG4gICAgfSk7XG4gIH1cbn0iLCIvKlxuICogQ29weXJpZ2h0IChDKSAyMDIwIEVsaWFzdGlrIChlbGlhc3Rpa3NvZnRzLmNvbSlcbiAqXG4gKiBUaGlzIGZpbGUgaXMgcGFydCBvZiBcIkpTR2FtZVRvb2xzXCIuXG4gKlxuICogXCJKU0dhbWVUb29sc1wiIGlzIGZyZWUgc29mdHdhcmU6IHlvdSBjYW4gcmVkaXN0cmlidXRlIGl0IGFuZC9vciBtb2RpZnlcbiAqIGl0IHVuZGVyIHRoZSB0ZXJtcyBvZiB0aGUgR05VIEdlbmVyYWwgUHVibGljIExpY2Vuc2UgYXMgcHVibGlzaGVkIGJ5XG4gKiB0aGUgRnJlZSBTb2Z0d2FyZSBGb3VuZGF0aW9uLCBlaXRoZXIgdmVyc2lvbiAzIG9mIHRoZSBMaWNlbnNlLCBvclxuICogKGF0IHlvdXIgb3B0aW9uKSBhbnkgbGF0ZXIgdmVyc2lvbi5cbiAqXG4gKiBcIkpTR2FtZVRvb2xzXCIgaXMgZGlzdHJpYnV0ZWQgaW4gdGhlIGhvcGUgdGhhdCBpdCB3aWxsIGJlIHVzZWZ1bCxcbiAqIGJ1dCBXSVRIT1VUIEFOWSBXQVJSQU5UWTsgd2l0aG91dCBldmVuIHRoZSBpbXBsaWVkIHdhcnJhbnR5IG9mXG4gKiBNRVJDSEFOVEFCSUxJVFkgb3IgRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UuICBTZWUgdGhlXG4gKiBHTlUgR2VuZXJhbCBQdWJsaWMgTGljZW5zZSBmb3IgbW9yZSBkZXRhaWxzLlxuICpcbiAqIFlvdSBzaG91bGQgaGF2ZSByZWNlaXZlZCBhIGNvcHkgb2YgdGhlIEdOVSBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlXG4gKiBhbG9uZyB3aXRoIFwiSlNHYW1lVG9vbHNcIi4gIElmIG5vdCwgc2VlIDxodHRwOi8vd3d3LmdudS5vcmcvbGljZW5zZXMvPi5cbiAqL1xuZXhwb3J0IGRlZmF1bHQge1xuICBlYXNlSW5DdWJpYyh4KSB7XG4gICAgcmV0dXJuIHggKiB4ICogeDtcbiAgfSxcbiAgZWFzZU91dEJvdW5jZSh4KSB7XG4gICAgY29uc3QgbjEgPSA3LjU2MjU7XG4gICAgY29uc3QgZDEgPSAyLjc1O1xuICAgIFxuICAgIGlmKHggPCAxIC8gZDEpIHtcbiAgICAgIHJldHVybiBuMSAqIHggKiB4O1xuICAgIH0gZWxzZSBpZih4IDwgMiAvIGQxKSB7XG4gICAgICByZXR1cm4gbjEgKiAoeCAtPSAxLjUgLyBkMSkgKiB4ICsgMC43NTtcbiAgICB9IGVsc2UgaWYoeCA8IDIuNSAvIGQxKSB7XG4gICAgICByZXR1cm4gbjEgKiAoeCAtPSAyLjI1IC8gZDEpICogeCArIDAuOTM3NTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIG4xICogKHggLT0gMi42MjUgLyBkMSkgKiB4ICsgMC45ODQzNzU7XG4gICAgfVxuICB9LFxuICBlYXNlSW5PdXRDdWJpYyh4KSB7XG4gICAgcmV0dXJuIHggPCAwLjUgPyA0ICogeCAqIHggKiB4IDogMSAtIE1hdGgucG93KC0yICogeCArIDIsIDMpIC8gMjtcbiAgfSxcbiAgZWFzZUluT3V0U2luZSh4KSB7XG4gICAgcmV0dXJuIC0oTWF0aC5jb3MoTWF0aC5QSSAqIHgpIC0gMSkgLyAyO1xuICB9LFxuICBlYXNlSW5PdXRRdWludCh4KSB7XG4gICAgcmV0dXJuIHggPCAwLjUgPyAxNiAqIHggKiB4ICogeCAqIHggKiB4IDogMSAtIE1hdGgucG93KC0yICogeCArIDIsIDUpIC8gMjtcbiAgfSxcbiAgZWFzZUluT3V0Q2lyYyh4KSB7XG4gICAgcmV0dXJuIHggPCAwLjUgPyAoMSAtIE1hdGguc3FydCgxIC0gTWF0aC5wb3coMiAqIHgsIDIpKSkgLyAyIDogKE1hdGguc3FydCgxIC0gTWF0aC5wb3coLTIgKiB4ICsgMiwgMikpICsgMSkgLyAyO1xuICB9LFxuICBlYXNlSW5PdXRRdWFkKHgpIHtcbiAgICByZXR1cm4geCA8IDAuNSA/IDIgKiB4ICogeCA6IDEgLSBNYXRoLnBvdygtMiAqIHggKyAyLCAyKSAvIDI7XG4gIH0sXG4gIGVhc2VJbk91dFF1YXJ0KHgpIHtcbiAgICByZXR1cm4geCA8IDAuNSA/IDggKiB4ICogeCAqIHggKiB4IDogMSAtIE1hdGgucG93KC0yICogeCArIDIsIDQpIC8gMjtcbiAgfSxcbiAgZWFzZUluT3V0RXhwbyh4KSB7XG4gICAgcmV0dXJuIHggPT09IDAgPyAwIDogeCA9PT0gMSA/IDEgOiB4IDwgMC41ID8gTWF0aC5wb3coMiwgMjAgKiB4IC0gMTApIC8gMiA6ICgyIC0gTWF0aC5wb3coMiwgLTIwICogeCArIDEwKSkgLyAyO1xuICB9LFxuICBlYXNlSW5PdXRCYWNrKHgpIHtcbiAgICBjb25zdCBjMSA9IDEuNzAxNTg7XG4gICAgY29uc3QgYzIgPSBjMSAqIDEuNTI1O1xuICAgIFxuICAgIHJldHVybiB4IDwgMC41ID8gKE1hdGgucG93KDIgKiB4LCAyKSAqICgoYzIgKyAxKSAqIDIgKiB4IC0gYzIpKSAvIDIgOiAoTWF0aC5wb3coMiAqIHggLSAyLCAyKSAqICgoYzIgKyAxKSAqICh4ICogMiAtIDIpICsgYzIpICsgMikgLyAyO1xuICB9XG59OyIsIi8qXG4gKiBDb3B5cmlnaHQgKEMpIDIwMjAgRWxpYXN0aWsgKGVsaWFzdGlrc29mdHMuY29tKVxuICpcbiAqIFRoaXMgZmlsZSBpcyBwYXJ0IG9mIFwiSlNHYW1lVG9vbHNcIi5cbiAqXG4gKiBcIkpTR2FtZVRvb2xzXCIgaXMgZnJlZSBzb2Z0d2FyZTogeW91IGNhbiByZWRpc3RyaWJ1dGUgaXQgYW5kL29yIG1vZGlmeVxuICogaXQgdW5kZXIgdGhlIHRlcm1zIG9mIHRoZSBHTlUgR2VuZXJhbCBQdWJsaWMgTGljZW5zZSBhcyBwdWJsaXNoZWQgYnlcbiAqIHRoZSBGcmVlIFNvZnR3YXJlIEZvdW5kYXRpb24sIGVpdGhlciB2ZXJzaW9uIDMgb2YgdGhlIExpY2Vuc2UsIG9yXG4gKiAoYXQgeW91ciBvcHRpb24pIGFueSBsYXRlciB2ZXJzaW9uLlxuICpcbiAqIFwiSlNHYW1lVG9vbHNcIiBpcyBkaXN0cmlidXRlZCBpbiB0aGUgaG9wZSB0aGF0IGl0IHdpbGwgYmUgdXNlZnVsLFxuICogYnV0IFdJVEhPVVQgQU5ZIFdBUlJBTlRZOyB3aXRob3V0IGV2ZW4gdGhlIGltcGxpZWQgd2FycmFudHkgb2ZcbiAqIE1FUkNIQU5UQUJJTElUWSBvciBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRS4gIFNlZSB0aGVcbiAqIEdOVSBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlIGZvciBtb3JlIGRldGFpbHMuXG4gKlxuICogWW91IHNob3VsZCBoYXZlIHJlY2VpdmVkIGEgY29weSBvZiB0aGUgR05VIEdlbmVyYWwgUHVibGljIExpY2Vuc2VcbiAqIGFsb25nIHdpdGggXCJKU0dhbWVUb29sc1wiLiAgSWYgbm90LCBzZWUgPGh0dHA6Ly93d3cuZ251Lm9yZy9saWNlbnNlcy8+LlxuICovXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBFdmVudCB7XG4gIGNvbnN0cnVjdG9yKG5hbWUpIHtcbiAgICB0aGlzLm5hbWUgPSBuYW1lO1xuICAgIHRoaXMuY2FsbGJhY2tzID0gW107XG4gIH1cblxuICByZWdpc3RlckNhbGxiYWNrKGNhbGxiYWNrKSB7XG4gICAgdGhpcy5jYWxsYmFja3MucHVzaChjYWxsYmFjayk7XG4gIH1cblxuICByZW1vdmVDYWxsYmFjayhjYWxsYmFjaykge1xuICAgIHRoaXMuY2FsbGJhY2tzLmZpbHRlcihjdXJyZW50ID0+IGN1cnJlbnQgIT0gY2FsbGJhY2spO1xuICB9XG5cbiAgcmVtb3ZlQWxsQ2FsbGJhY2tzKCkge1xuICAgIHRoaXMuY2FsbGJhY2tzID0gW107XG4gIH1cbn0iLCIvKlxuICogQ29weXJpZ2h0IChDKSAyMDIwIEVsaWFzdGlrIChlbGlhc3Rpa3NvZnRzLmNvbSlcbiAqXG4gKiBUaGlzIGZpbGUgaXMgcGFydCBvZiBcIkpTR2FtZVRvb2xzXCIuXG4gKlxuICogXCJKU0dhbWVUb29sc1wiIGlzIGZyZWUgc29mdHdhcmU6IHlvdSBjYW4gcmVkaXN0cmlidXRlIGl0IGFuZC9vciBtb2RpZnlcbiAqIGl0IHVuZGVyIHRoZSB0ZXJtcyBvZiB0aGUgR05VIEdlbmVyYWwgUHVibGljIExpY2Vuc2UgYXMgcHVibGlzaGVkIGJ5XG4gKiB0aGUgRnJlZSBTb2Z0d2FyZSBGb3VuZGF0aW9uLCBlaXRoZXIgdmVyc2lvbiAzIG9mIHRoZSBMaWNlbnNlLCBvclxuICogKGF0IHlvdXIgb3B0aW9uKSBhbnkgbGF0ZXIgdmVyc2lvbi5cbiAqXG4gKiBcIkpTR2FtZVRvb2xzXCIgaXMgZGlzdHJpYnV0ZWQgaW4gdGhlIGhvcGUgdGhhdCBpdCB3aWxsIGJlIHVzZWZ1bCxcbiAqIGJ1dCBXSVRIT1VUIEFOWSBXQVJSQU5UWTsgd2l0aG91dCBldmVuIHRoZSBpbXBsaWVkIHdhcnJhbnR5IG9mXG4gKiBNRVJDSEFOVEFCSUxJVFkgb3IgRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UuICBTZWUgdGhlXG4gKiBHTlUgR2VuZXJhbCBQdWJsaWMgTGljZW5zZSBmb3IgbW9yZSBkZXRhaWxzLlxuICpcbiAqIFlvdSBzaG91bGQgaGF2ZSByZWNlaXZlZCBhIGNvcHkgb2YgdGhlIEdOVSBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlXG4gKiBhbG9uZyB3aXRoIFwiSlNHYW1lVG9vbHNcIi4gIElmIG5vdCwgc2VlIDxodHRwOi8vd3d3LmdudS5vcmcvbGljZW5zZXMvPi5cbiAqL1xuaW1wb3J0IExhYmVsIGZyb20gXCIuL0xhYmVsXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEZQU01ldGVyIGV4dGVuZHMgTGFiZWwge1xuICBzZWxlY3RhYmxlID0gZmFsc2U7XG5cbiAgY29uc3RydWN0b3IoZGlzcGxheUZyYW1lcywgeCwgeSwgc3R5bGUpIHtcbiAgICBzdXBlcihudWxsLCB4LCB5LCBzdHlsZSk7XG5cbiAgICB0aGlzLmRpc3BsYXlGcmFtZXMgPSBkaXNwbGF5RnJhbWVzIHx8IGZhbHNlO1xuICAgIHRoaXMuZnJhbWVzID0gMDtcbiAgICB0aGlzLmxhc3RGcmFtZSA9IDA7XG4gICAgdGhpcy5jdXJyZW50RlBTID0gMDtcblxuICAgIHRoaXMuaW50ZXJ2YWxDb3VudEZQUyA9IHNldEludGVydmFsKCgpID0+IHRoaXMuY291bnRGUFMoKSwgMTAwMCk7XG4gIH1cblxuICBkcmF3KGNvbnRleHQpIHtcbiAgICBpZih0aGlzLmhpZGRlbikgcmV0dXJuO1xuICAgIHRoaXMudGV4dCA9IFwiRlBTOiBcIiArIHRoaXMuY3VycmVudEZQUyArICh0aGlzLmRpc3BsYXlGcmFtZXMgPyBcIiAvIEZyYW1lczogXCIgKyB0aGlzLmZyYW1lcyA6IFwiXCIpO1xuICAgIHN1cGVyLmRyYXcoY29udGV4dCk7XG4gICAgdGhpcy5mcmFtZXMrKztcbiAgfVxuXG4gIGNvdW50RlBTKCkge1xuICAgIGlmKHRoaXMubGFzdEZyYW1lID4gMCkgdGhpcy5jdXJyZW50RlBTID0gdGhpcy5mcmFtZXMgLSB0aGlzLmxhc3RGcmFtZTtcbiAgICB0aGlzLmxhc3RGcmFtZSA9IHRoaXMuZnJhbWVzO1xuICB9XG59IiwiLypcbiAqIENvcHlyaWdodCAoQykgMjAyMCBFbGlhc3RpayAoZWxpYXN0aWtzb2Z0cy5jb20pXG4gKlxuICogVGhpcyBmaWxlIGlzIHBhcnQgb2YgXCJKU0dhbWVUb29sc1wiLlxuICpcbiAqIFwiSlNHYW1lVG9vbHNcIiBpcyBmcmVlIHNvZnR3YXJlOiB5b3UgY2FuIHJlZGlzdHJpYnV0ZSBpdCBhbmQvb3IgbW9kaWZ5XG4gKiBpdCB1bmRlciB0aGUgdGVybXMgb2YgdGhlIEdOVSBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlIGFzIHB1Ymxpc2hlZCBieVxuICogdGhlIEZyZWUgU29mdHdhcmUgRm91bmRhdGlvbiwgZWl0aGVyIHZlcnNpb24gMyBvZiB0aGUgTGljZW5zZSwgb3JcbiAqIChhdCB5b3VyIG9wdGlvbikgYW55IGxhdGVyIHZlcnNpb24uXG4gKlxuICogXCJKU0dhbWVUb29sc1wiIGlzIGRpc3RyaWJ1dGVkIGluIHRoZSBob3BlIHRoYXQgaXQgd2lsbCBiZSB1c2VmdWwsXG4gKiBidXQgV0lUSE9VVCBBTlkgV0FSUkFOVFk7IHdpdGhvdXQgZXZlbiB0aGUgaW1wbGllZCB3YXJyYW50eSBvZlxuICogTUVSQ0hBTlRBQklMSVRZIG9yIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFLiAgU2VlIHRoZVxuICogR05VIEdlbmVyYWwgUHVibGljIExpY2Vuc2UgZm9yIG1vcmUgZGV0YWlscy5cbiAqXG4gKiBZb3Ugc2hvdWxkIGhhdmUgcmVjZWl2ZWQgYSBjb3B5IG9mIHRoZSBHTlUgR2VuZXJhbCBQdWJsaWMgTGljZW5zZVxuICogYWxvbmcgd2l0aCBcIkpTR2FtZVRvb2xzXCIuICBJZiBub3QsIHNlZSA8aHR0cDovL3d3dy5nbnUub3JnL2xpY2Vuc2VzLz4uXG4gKi9cbmltcG9ydCBVdGlscyBmcm9tIFwiLi9VdGlsc1wiO1xuaW1wb3J0IENvbXBvbmVudCBmcm9tIFwiLi9Db21wb25lbnRcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgSW1hZ2VDb250YWluZXIgZXh0ZW5kcyBDb21wb25lbnQge1xuICBzZWxlY3RhYmxlID0gZmFsc2U7XG5cbiAgY29uc3RydWN0b3IoaW1hZ2UsIHgsIHksIHdpZHRoLCBoZWlnaHQsIHN0eWxlLCBpbWFnZUxvYWRlcikge1xuICAgIHN1cGVyKHgsIHksIHdpZHRoLCBoZWlnaHQsIHN0eWxlKTtcbiAgICB0aGlzLmltYWdlO1xuICAgIHRoaXMuaW1nU3JjO1xuICAgIHRoaXMuaW1hZ2VMb2FkZXIgPSBpbWFnZUxvYWRlcjtcblxuICAgIGlmKGltYWdlIGluc3RhbmNlb2YgSW1hZ2UpIHtcbiAgICAgIHRoaXMuaW1hZ2UgPSBpbWFnZTtcbiAgICAgIHRoaXMuaW1nU3JjID0gaW1hZ2Uuc3JjO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmltZ1NyYyA9IGltYWdlO1xuICAgIH1cbiAgfVxuXG4gIGRyYXcoY29udGV4dCkge1xuICAgIGlmKHRoaXMuaGlkZGVuKSByZXR1cm47XG4gICAgc3VwZXIuZHJhdyhjb250ZXh0KTtcbiAgICBcbiAgICBjb25zdCBjYW52YXMgPSBjb250ZXh0LmNhbnZhcztcbiAgICBjb25zdCBjdHggPSBjYW52YXMuZ2V0Q29udGV4dChcIjJkXCIpO1xuICAgIGN0eC5zYXZlKCk7XG4gICAgXG4gICAgaWYodGhpcy5pbWdTcmMgIT0gbnVsbCAmJiB0aGlzLmltYWdlTG9hZGVyICE9IG51bGwpIHtcbiAgICAgIHRoaXMubG9hZEltYWdlKHRoaXMuaW1hZ2VMb2FkZXIpO1xuICAgIH1cblxuICAgIGlmKHRoaXMuaW1hZ2UgIT0gbnVsbCkge1xuICAgICAgdGhpcy5kcmF3SW1hZ2UoY3R4KTtcbiAgICB9XG5cbiAgICBjdHgucmVzdG9yZSgpO1xuICB9XG5cbiAgZHJhd0ltYWdlKGN0eCkge1xuICAgIFV0aWxzLmRyYXdJbWFnZShjdHgsIHRoaXMuaW1hZ2UsIE1hdGgucm91bmQodGhpcy54KSwgTWF0aC5yb3VuZCh0aGlzLnkpLCBNYXRoLnJvdW5kKHRoaXMud2lkdGgpLCBNYXRoLnJvdW5kKHRoaXMuaGVpZ2h0KSk7XG4gIH1cblxuICBnZXQgc2l6ZXMoKSB7XG4gICAgbGV0IGltZ1dpZHRoID0gc3VwZXIud2lkdGg7XG4gICAgbGV0IGltZ0hlaWdodCA9IHN1cGVyLmhlaWdodDtcblxuICAgIGlmKHRoaXMuaW1hZ2VMb2FkZXIpIHtcbiAgICAgIHRoaXMubG9hZEltYWdlKHRoaXMuaW1hZ2VMb2FkZXIpO1xuICAgIH1cbiAgICBcbiAgICBpZih0aGlzLmltYWdlICYmICh0aGlzLmltYWdlLndpZHRoID4gc3VwZXIud2lkdGggfHwgdGhpcy5pbWFnZS5oZWlnaHQgPiBzdXBlci5oZWlnaHQpKSB7XG4gICAgICBjb25zdCBhc3BlY3RSYXRpbyA9IHRoaXMuaW1hZ2Uud2lkdGggLyB0aGlzLmltYWdlLmhlaWdodDtcbiAgICAgIGltZ1dpZHRoID0gTWF0aC5mbG9vcihzdXBlci53aWR0aCAvIDEuMjUpO1xuICAgICAgaW1nSGVpZ2h0ID0gTWF0aC5mbG9vcihpbWdXaWR0aCAvIGFzcGVjdFJhdGlvKTtcbiAgICB9XG5cbiAgICByZXR1cm4ge1xuICAgICAgd2lkdGg6IGltZ1dpZHRoLFxuICAgICAgaGVpZ2h0OiBpbWdIZWlnaHRcbiAgICB9XG4gIH1cblxuICBnZXQgaGVpZ2h0KCkge1xuICAgIHJldHVybiB0aGlzLnNpemVzLmhlaWdodDtcbiAgfVxuXG4gIGdldCB3aWR0aCgpIHtcbiAgICByZXR1cm4gdGhpcy5zaXplcy53aWR0aDtcbiAgfVxuXG4gIHNldCB3aWR0aCh3aWR0aCkge1xuICAgIHN1cGVyLndpZHRoID0gd2lkdGg7XG4gIH1cblxuICBzZXQgaGVpZ2h0KGhlaWdodCkge1xuICAgIHN1cGVyLmhlaWdodCA9IGhlaWdodDtcbiAgfVxuICBcbiAgbG9hZEltYWdlKGltYWdlTG9hZGVyKSB7XG4gICAgdGhpcy5pbWFnZSA9IGltYWdlTG9hZGVyLmdldCh0aGlzLmltZ1NyYyk7XG4gIH1cbn0iLCIvKlxuICogQ29weXJpZ2h0IChDKSAyMDIwIEVsaWFzdGlrIChlbGlhc3Rpa3NvZnRzLmNvbSlcbiAqXG4gKiBUaGlzIGZpbGUgaXMgcGFydCBvZiBcIkpTR2FtZVRvb2xzXCIuXG4gKlxuICogXCJKU0dhbWVUb29sc1wiIGlzIGZyZWUgc29mdHdhcmU6IHlvdSBjYW4gcmVkaXN0cmlidXRlIGl0IGFuZC9vciBtb2RpZnlcbiAqIGl0IHVuZGVyIHRoZSB0ZXJtcyBvZiB0aGUgR05VIEdlbmVyYWwgUHVibGljIExpY2Vuc2UgYXMgcHVibGlzaGVkIGJ5XG4gKiB0aGUgRnJlZSBTb2Z0d2FyZSBGb3VuZGF0aW9uLCBlaXRoZXIgdmVyc2lvbiAzIG9mIHRoZSBMaWNlbnNlLCBvclxuICogKGF0IHlvdXIgb3B0aW9uKSBhbnkgbGF0ZXIgdmVyc2lvbi5cbiAqXG4gKiBcIkpTR2FtZVRvb2xzXCIgaXMgZGlzdHJpYnV0ZWQgaW4gdGhlIGhvcGUgdGhhdCBpdCB3aWxsIGJlIHVzZWZ1bCxcbiAqIGJ1dCBXSVRIT1VUIEFOWSBXQVJSQU5UWTsgd2l0aG91dCBldmVuIHRoZSBpbXBsaWVkIHdhcnJhbnR5IG9mXG4gKiBNRVJDSEFOVEFCSUxJVFkgb3IgRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UuICBTZWUgdGhlXG4gKiBHTlUgR2VuZXJhbCBQdWJsaWMgTGljZW5zZSBmb3IgbW9yZSBkZXRhaWxzLlxuICpcbiAqIFlvdSBzaG91bGQgaGF2ZSByZWNlaXZlZCBhIGNvcHkgb2YgdGhlIEdOVSBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlXG4gKiBhbG9uZyB3aXRoIFwiSlNHYW1lVG9vbHNcIi4gIElmIG5vdCwgc2VlIDxodHRwOi8vd3d3LmdudS5vcmcvbGljZW5zZXMvPi5cbiAqL1xuaW1wb3J0IFV0aWxzIGZyb20gXCIuL1V0aWxzXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEltYWdlTG9hZGVyIHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgdGhpcy5pbWFnZXMgPSB7fTtcbiAgICB0aGlzLmltYWdlc1Jlc2l6ZWQgPSB7fTtcbiAgICB0aGlzLnRyaWVkTG9hZGluZyA9IDA7XG4gICAgdGhpcy5oYXNFcnJvciA9IGZhbHNlO1xuICAgIHRoaXMubmJJbWFnZXNUb0xvYWQgPSAxO1xuICAgIHRoaXMuZmlyc3RJbWFnZSA9IHRydWU7XG4gIH1cblxuICBsb2FkKGltZywgZnVuYykge1xuICAgIGlmKHRoaXMuZmlyc3RJbWFnZSkge1xuICAgICAgdGhpcy5uYkltYWdlc1RvTG9hZCA9IGltZy5sZW5ndGg7XG4gICAgICB0aGlzLmZpcnN0SW1hZ2UgPSBmYWxzZTtcbiAgICB9XG4gICAgXG4gICAgaWYoaW1nLmxlbmd0aCA+IDApIHtcbiAgICAgIHRoaXMubG9hZEltYWdlKGltZ1swXSwgcmVzdWx0ID0+IHtcbiAgICAgICAgaWYocmVzdWx0ID09IHRydWUpIHtcbiAgICAgICAgICBpbWcuc2hpZnQoKTtcbiAgICAgICAgICB0aGlzLmxvYWQoaW1nLCBmdW5jKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB0aGlzLmhhc0Vycm9yID0gdHJ1ZTtcbiAgICAgICAgICByZXR1cm4gZnVuYygpO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIGZ1bmMoKTtcbiAgICB9XG4gIH1cblxuICBsb2FkSW1hZ2Uoc3JjLCBmdW5jKSB7XG4gICAgdGhpcy50cmllZExvYWRpbmcrKztcbiAgXG4gICAgY29uc3QgaW1hZ2UgPSBuZXcgSW1hZ2UoKTtcbiAgICBpbWFnZS5zcmMgPSBzcmM7XG4gIFxuICAgIGltYWdlLm9ubG9hZCA9ICgpID0+IHtcbiAgICAgIGlmKHRoaXMuaW1hZ2VzICE9IG51bGwpIHtcbiAgICAgICAgdGhpcy5pbWFnZXNbc3JjXSA9IGltYWdlO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIGZ1bmMoZmFsc2UpO1xuICAgICAgfVxuICBcbiAgICAgIHRoaXMudHJpZWRMb2FkaW5nID0gMDtcbiAgICAgIHJldHVybiBmdW5jKHRydWUpO1xuICAgIH07XG4gIFxuICAgIGltYWdlLm9uZXJyb3IgPSAoKSA9PiB7XG4gICAgICBpZih0aGlzLnRyaWVkTG9hZGluZyA+PSA1KSB7XG4gICAgICAgIGlmKHRoaXMuaW1hZ2VzICE9IG51bGwpIHtcbiAgICAgICAgICB0aGlzLmltYWdlc1tzcmNdID0gaW1hZ2U7XG4gICAgICAgIH1cbiAgXG4gICAgICAgIHRoaXMudHJpZWRMb2FkaW5nID0gMDtcbiAgICAgICAgcmV0dXJuIGZ1bmMoZmFsc2UpO1xuICAgICAgfVxuICBcbiAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICB0aGlzLmxvYWRJbWFnZShzcmMsIGZ1bmMpO1xuICAgICAgfSwgMjUwKTtcbiAgICB9XG4gIH1cblxuICBnZXQoc3JjLCB3aWR0aCwgaGVpZ2h0KSB7XG4gICAgaWYodGhpcy5pbWFnZXMgIT0gbnVsbCAmJiB0aGlzLmltYWdlcy5oYXNPd25Qcm9wZXJ0eShzcmMpKSB7XG4gICAgICBjb25zdCBpbWFnZSA9IHRoaXMuaW1hZ2VzW3NyY107XG5cbiAgICAgIGlmKCh3aWR0aCB8fCBoZWlnaHQpICYmIChpbWFnZS53aWR0aCAhPSB3aWR0aCB8fCBpbWFnZS5oZWlnaHQgIT0gaGVpZ2h0KSkge1xuICAgICAgICBjb25zdCB3ID0gTWF0aC5yb3VuZCh3aWR0aCk7XG4gICAgICAgIGNvbnN0IGggPSBNYXRoLnJvdW5kKGhlaWdodCk7XG4gICAgICAgIGNvbnN0IGlkID0gc3JjICsgXCJAXCIgKyB3ICsgXCItXCIgKyBoO1xuXG4gICAgICAgIGlmKCF0aGlzLmltYWdlc1Jlc2l6ZWQuaGFzT3duUHJvcGVydHkoaWQpKSB7XG4gICAgICAgICAgY29uc3QgY2FudmFzVG1wID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImNhbnZhc1wiKTtcbiAgICAgICAgICBjb25zdCBjdHggPSBjYW52YXNUbXAuZ2V0Q29udGV4dChcIjJkXCIpO1xuICAgICAgICAgIGNhbnZhc1RtcC53aWR0aCA9IHc7XG4gICAgICAgICAgY2FudmFzVG1wLmhlaWdodCA9IGg7XG5cbiAgICAgICAgICBVdGlscy5kcmF3SW1hZ2UoY3R4LCBpbWFnZSwgMCwgMCwgdywgaCwgMCwgMCwgaW1hZ2Uud2lkdGgsIGltYWdlLmhlaWdodCk7XG4gICAgICAgICAgdGhpcy5pbWFnZXNSZXNpemVkW2lkXSA9IGNhbnZhc1RtcDtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB0aGlzLmltYWdlc1Jlc2l6ZWRbaWRdO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIGltYWdlO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG4gIH1cblxuICBjbGVhcigpIHtcbiAgICB0aGlzLmltYWdlcyA9IG51bGw7XG4gIH1cbn0iLCIvKlxuICogQ29weXJpZ2h0IChDKSAyMDIwIEVsaWFzdGlrIChlbGlhc3Rpa3NvZnRzLmNvbSlcbiAqXG4gKiBUaGlzIGZpbGUgaXMgcGFydCBvZiBcIkpTR2FtZVRvb2xzXCIuXG4gKlxuICogXCJKU0dhbWVUb29sc1wiIGlzIGZyZWUgc29mdHdhcmU6IHlvdSBjYW4gcmVkaXN0cmlidXRlIGl0IGFuZC9vciBtb2RpZnlcbiAqIGl0IHVuZGVyIHRoZSB0ZXJtcyBvZiB0aGUgR05VIEdlbmVyYWwgUHVibGljIExpY2Vuc2UgYXMgcHVibGlzaGVkIGJ5XG4gKiB0aGUgRnJlZSBTb2Z0d2FyZSBGb3VuZGF0aW9uLCBlaXRoZXIgdmVyc2lvbiAzIG9mIHRoZSBMaWNlbnNlLCBvclxuICogKGF0IHlvdXIgb3B0aW9uKSBhbnkgbGF0ZXIgdmVyc2lvbi5cbiAqXG4gKiBcIkpTR2FtZVRvb2xzXCIgaXMgZGlzdHJpYnV0ZWQgaW4gdGhlIGhvcGUgdGhhdCBpdCB3aWxsIGJlIHVzZWZ1bCxcbiAqIGJ1dCBXSVRIT1VUIEFOWSBXQVJSQU5UWTsgd2l0aG91dCBldmVuIHRoZSBpbXBsaWVkIHdhcnJhbnR5IG9mXG4gKiBNRVJDSEFOVEFCSUxJVFkgb3IgRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UuICBTZWUgdGhlXG4gKiBHTlUgR2VuZXJhbCBQdWJsaWMgTGljZW5zZSBmb3IgbW9yZSBkZXRhaWxzLlxuICpcbiAqIFlvdSBzaG91bGQgaGF2ZSByZWNlaXZlZCBhIGNvcHkgb2YgdGhlIEdOVSBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlXG4gKiBhbG9uZyB3aXRoIFwiSlNHYW1lVG9vbHNcIi4gIElmIG5vdCwgc2VlIDxodHRwOi8vd3d3LmdudS5vcmcvbGljZW5zZXMvPi5cbiAqL1xuaW1wb3J0IENvbnN0YW50cyBmcm9tIFwiLi9Db25zdGFudHNcIjtcbmltcG9ydCBVdGlscyBmcm9tIFwiLi9VdGlsc1wiO1xuaW1wb3J0IEJveCBmcm9tIFwiLi9Cb3hcIjtcbmltcG9ydCBTdHlsZSBmcm9tIFwiLi9TdHlsZVwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBJbnB1dCBleHRlbmRzIEJveCB7XG4gIHNlbGVjdGFibGUgPSB0cnVlO1xuICAjX3Bvc2l0aW9uU3RhcnQgPSAwO1xuICAjX3Bvc2l0aW9uU3RhcnRDbGljayA9IDA7XG4gICNfcG9zaXRpb25FbmQgPSAwO1xuXG4gIGNvbnN0cnVjdG9yKHgsIHksIHdpZHRoLCBoZWlnaHQsIHN0eWxlLCBkZWZhdWx0VGV4dCkge1xuICAgIHN1cGVyKHgsIHksIHdpZHRoLCBoZWlnaHQsIHN0eWxlKTtcbiAgICBcbiAgICB0aGlzLnRleHQgPSBkZWZhdWx0VGV4dCB8fCBcIlwiO1xuICAgIHRoaXMuI19wb3NpdGlvblN0YXJ0ID0gMDtcbiAgICB0aGlzLiNfcG9zaXRpb25FbmQgPSAwO1xuICAgIHRoaXMuI19wb3NpdGlvblN0YXJ0Q2xpY2sgPSAwO1xuICAgIHRoaXMubGFzdElucHV0VGV4dCA9IGZhbHNlO1xuICAgIHRoaXMub2Zmc2V0WCA9IDA7XG4gICAgdGhpcy5sYXN0VGltZSA9IDA7XG4gICAgdGhpcy50b3RhbFRpbWUgPSAwO1xuICAgIHRoaXMuY2xpY2tDdXJyZW50UG9zaXRpb24gPSBudWxsO1xuICAgIHRoaXMudGV4dENhY2hlID0gbnVsbDtcblxuICAgIHRoaXMuaW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XG4gICAgdGhpcy5pbnB1dC5zZXRBdHRyaWJ1dGUoXCJ0eXBlXCIsIFwidGV4dFwiKTtcbiAgICB0aGlzLmlucHV0LnN0eWxlLnBvc2l0aW9uID0gXCJhYnNvbHV0ZVwiO1xuICAgIHRoaXMuaW5wdXQuc3R5bGUubGVmdCA9IFwiLTk5OTlweFwiO1xuICAgIHRoaXMuaW5wdXQudGFiSW5kZXggPSAtMTtcbiAgICB0aGlzLmlucHV0LnZhbHVlID0gdGhpcy50ZXh0O1xuICAgIHRoaXMuaW5wdXQuYWRkRXZlbnRMaXN0ZW5lcihcImJsdXJcIiwgKCkgPT4gdGhpcy5zZWxlY3RlZCA9IGZhbHNlKTtcbiAgICB0aGlzLmlucHV0LmFkZEV2ZW50TGlzdGVuZXIoXCJmb2N1c1wiLCAoKSA9PiB0aGlzLnNlbGVjdGVkID0gdHJ1ZSk7XG4gICAgdGhpcy5pbnB1dC5hZGRFdmVudExpc3RlbmVyKFwiaW5wdXRcIiwgKCkgPT4ge1xuICAgICAgdGhpcy50b3RhbFRpbWUgPSAwXG4gICAgICB0aGlzLmxhc3RJbnB1dFRleHQgPSB0cnVlO1xuICAgICAgdGhpcy5wb3NpdGlvblN0YXJ0ID0gdGhpcy5pbnB1dC5zZWxlY3Rpb25TdGFydDtcbiAgICAgIHRoaXMucG9zaXRpb25FbmQgPSB0aGlzLmlucHV0LnNlbGVjdGlvbkVuZDtcbiAgICB9KTtcblxuICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQodGhpcy5pbnB1dCk7XG5cbiAgICB0aGlzLmFwcGVuZFRvQ2FudmFzID0gZmFsc2U7XG4gICAgdGhpcy5ub3RpY2VMb2dnZWQgPSBmYWxzZTtcblxuICAgIHRoaXMuY2FudmFzVG1wID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImNhbnZhc1wiKTtcblxuICAgIGNvbnN0IG1vdmVBY3Rpb25DYWxsYmFjayA9IChkZWx0YVgsIGRlbHRhWSwgcG9zaXRpb24pID0+IHtcbiAgICAgIGlmKHBvc2l0aW9uKSB7XG4gICAgICAgIGNvbnN0IGlDbGljayA9IHRoaXMuZ2V0TGV0dGVyQ2xpY2tlZChwb3NpdGlvbik7XG4gIFxuICAgICAgICBpZihpQ2xpY2sgIT0gbnVsbCkge1xuICAgICAgICAgIGlmKGlDbGljayA+IHRoaXMucG9zaXRpb25TdGFydENsaWNrKSB7XG4gICAgICAgICAgICB0aGlzLnNldFNlbGVjdGlvblJhbmdlKHRoaXMucG9zaXRpb25TdGFydENsaWNrLCBpQ2xpY2ssIFwiZm9yd2FyZFwiKTtcbiAgICAgICAgICB9IGVsc2UgaWYoaUNsaWNrIDwgdGhpcy5wb3NpdGlvblN0YXJ0Q2xpY2spIHtcbiAgICAgICAgICAgIHRoaXMuc2V0U2VsZWN0aW9uUmFuZ2UoaUNsaWNrLCB0aGlzLnBvc2l0aW9uU3RhcnRDbGljaywgXCJiYWNrd2FyZFwiKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9O1xuXG4gICAgdGhpcy5hZGREb3duQWN0aW9uKHBvc2l0aW9uID0+IHtcbiAgICAgIGNvbnN0IGlDbGljayA9IHRoaXMuZ2V0TGV0dGVyQ2xpY2tlZChwb3NpdGlvbik7XG5cbiAgICAgIGlmKGlDbGljayAhPSBudWxsKSB7XG4gICAgICAgIHRoaXMucG9zaXRpb25TdGFydENsaWNrID0gaUNsaWNrO1xuICAgICAgICB0aGlzLnNldFNlbGVjdGlvblJhbmdlKGlDbGljaywgaUNsaWNrLCBcImZvcndhcmRcIik7XG4gICAgICB9XG5cbiAgICAgIHRoaXMudG90YWxUaW1lID0gMDtcbiAgICB9KTtcblxuICAgIHRoaXMuYWRkQ2xpY2tBY3Rpb24oKCkgPT4gdGhpcy5jbGljaygpKTtcbiAgICB0aGlzLmFkZE1vdmVBY3Rpb24obW92ZUFjdGlvbkNhbGxiYWNrKTtcbiAgICB0aGlzLmFkZFNjcm9sbEFjdGlvbihtb3ZlQWN0aW9uQ2FsbGJhY2spO1xuICB9XG5cbiAgZHJhdyhjb250ZXh0KSB7XG4gICAgaWYodGhpcy5oaWRkZW4pIHJldHVybjtcbiAgICBzdXBlci5kcmF3KGNvbnRleHQpO1xuICAgIFxuICAgIGNvbnN0IGNhbnZhcyA9IGNvbnRleHQuY2FudmFzO1xuICAgIGNvbnN0IGN0eCA9IGNhbnZhcy5nZXRDb250ZXh0KFwiMmRcIik7XG4gICAgY3R4LnNhdmUoKTtcblxuICAgIGlmKHRoaXMuaW5wdXQuc2VsZWN0aW9uRW5kICE9IHRoaXMucG9zaXRpb25FbmQpIHRoaXMudG90YWxUaW1lID0gMDtcblxuICAgIGlmKHRoaXMuY2FudmFzICYmIHRoaXMuY2FudmFzLmNvbnRhaW5lciAmJiAhdGhpcy5hcHBlbmRUb0NhbnZhcykge1xuICAgICAgZG9jdW1lbnQuYm9keS5yZW1vdmVDaGlsZCh0aGlzLmlucHV0KTtcbiAgICAgIHRoaXMuY2FudmFzLmNvbnRhaW5lci5hcHBlbmRDaGlsZCh0aGlzLmlucHV0KTtcbiAgICAgIHRoaXMuYXBwZW5kVG9DYW52YXMgPSB0cnVlO1xuICAgIH0gZWxzZSBpZighdGhpcy5jYW52YXMgJiYgIXRoaXMubm90aWNlTG9nZ2VkKSB7XG4gICAgICBjb25zb2xlICYmIGNvbnNvbGUud2FybiAmJiBjb25zb2xlLndhcm4oQ29uc3RhbnRzLlN0cmluZy5XQVJOSU5HX01FU1NBR0UgKyBcIiBcIiArIENvbnN0YW50cy5TdHJpbmcuSU5QVVRfRlVMTFNDUkVFTik7XG4gICAgICB0aGlzLm5vdGljZUxvZ2dlZCA9IHRydWU7XG4gICAgfVxuXG4gICAgaWYodGhpcy5zZWxlY3RlZCAmJiAhdGhpcy5kaXNhYmxlZCkge1xuICAgICAgdGhpcy5jbGljaygpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmJsdXIoKTtcbiAgICB9XG5cbiAgICB0aGlzLnRleHQgPSB0aGlzLmlucHV0LnZhbHVlO1xuICAgIHRoaXMucG9zaXRpb25TdGFydCA9IHRoaXMuaW5wdXQuc2VsZWN0aW9uU3RhcnQ7XG4gICAgdGhpcy5wb3NpdGlvbkVuZCA9IHRoaXMuaW5wdXQuc2VsZWN0aW9uRW5kO1xuXG4gICAgY29uc3QgdGltZSA9IHBlcmZvcm1hbmNlLm5vdygpO1xuICAgIGxldCBvZmZzZXRUaW1lID0gMDtcblxuICAgIGlmKHRoaXMubGFzdFRpbWUgPiAwKSBvZmZzZXRUaW1lID0gdGltZSAtIHRoaXMubGFzdFRpbWU7XG4gICAgdGhpcy5sYXN0VGltZSA9IHRpbWU7XG4gICAgdGhpcy50b3RhbFRpbWUgKz0gb2Zmc2V0VGltZTtcblxuICAgIHRoaXMuZHJhd0JhY2tncm91bmQoY3R4KTtcbiAgICB0aGlzLmRyYXdCb3JkZXIoY3R4KTtcblxuICAgIHRoaXMuY2FudmFzVG1wLndpZHRoID0gVXRpbHMuZ2V0Q2FudmFzV2lkdGgoY2FudmFzKSAqIENvbnN0YW50cy5TZXR0aW5nLlBJWEVMX1JBVElPO1xuICAgIHRoaXMuY2FudmFzVG1wLmhlaWdodCA9IFV0aWxzLmdldENhbnZhc0hlaWdodChjYW52YXMpICogQ29uc3RhbnRzLlNldHRpbmcuUElYRUxfUkFUSU87XG4gICAgdGhpcy5jYW52YXNUbXAuc3R5bGUud2lkdGggPSBVdGlscy5nZXRDYW52YXNXaWR0aChjYW52YXMpO1xuICAgIHRoaXMuY2FudmFzVG1wLnN0eWxlLmhlaWdodCA9IFV0aWxzLmdldENhbnZhc0hlaWdodChjYW52YXMpO1xuICAgIGNvbnN0IGN0eFRleHQgPSB0aGlzLmNhbnZhc1RtcC5nZXRDb250ZXh0KFwiMmRcIik7XG4gICAgVXRpbHMuY2xlYXIoY3R4VGV4dCk7XG4gICAgY3R4VGV4dC5zY2FsZShDb25zdGFudHMuU2V0dGluZy5QSVhFTF9SQVRJTywgQ29uc3RhbnRzLlNldHRpbmcuUElYRUxfUkFUSU8pO1xuXG4gICAgdGhpcy51cGRhdGVUZXh0Q2FjaGUodGhpcy54ICsgNSk7XG4gICAgdGhpcy5hdXRvU2Nyb2xsKCk7XG4gICAgdGhpcy5kcmF3VGV4dChjdHhUZXh0LCB0aGlzLnggKyA1KTtcblxuICAgIFV0aWxzLmRyYXdJbWFnZURhdGEoY3R4LCB0aGlzLmNhbnZhc1RtcCwgdGhpcy54ICsgdGhpcy5zdHlsZS5ib3JkZXJTaXplLCB0aGlzLnkgKyB0aGlzLnN0eWxlLmJvcmRlclNpemUsIHRoaXMud2lkdGggLSB0aGlzLnN0eWxlLmJvcmRlclNpemUgKiAyLCB0aGlzLmhlaWdodCAtIHRoaXMuc3R5bGUuYm9yZGVyU2l6ZSAqIDIsICh0aGlzLnggKyB0aGlzLnN0eWxlLmJvcmRlclNpemUpICogQ29uc3RhbnRzLlNldHRpbmcuUElYRUxfUkFUSU8sICh0aGlzLnkgKyB0aGlzLnN0eWxlLmJvcmRlclNpemUpICogQ29uc3RhbnRzLlNldHRpbmcuUElYRUxfUkFUSU8sICh0aGlzLndpZHRoIC0gdGhpcy5zdHlsZS5ib3JkZXJTaXplICogMikgICogQ29uc3RhbnRzLlNldHRpbmcuUElYRUxfUkFUSU8sICh0aGlzLmhlaWdodCAtIHRoaXMuc3R5bGUuYm9yZGVyU2l6ZSAqIDIpICogQ29uc3RhbnRzLlNldHRpbmcuUElYRUxfUkFUSU8pO1xuXG4gICAgaWYodGhpcy5ob3ZlcmVkIHx8IHRoaXMuY2xpY2tlZCkge1xuICAgICAgaWYodGhpcy5jYW52YXMgJiYgdGhpcy5jYW52YXMuY2FudmFzKSB7XG4gICAgICAgIHRoaXMuY2FudmFzLmNhbnZhcy5zdHlsZS5jdXJzb3IgPSBcInRleHRcIjtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGNhbnZhcy5zdHlsZS5jdXJzb3IgPSBcImRlZmF1bHRcIjtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZighdGhpcy5zZWxlY3RlZCkge1xuICAgICAgdGhpcy50b3RhbFRpbWUgPSAwO1xuICAgIH1cblxuICAgIGN0eC5yZXN0b3JlKCk7XG4gIH1cblxuICBkcmF3VGV4dChjdHhUZXh0LCBjdXJyZW50WCkge1xuICAgIGZvcihsZXQgaSA9IC0xOyBpIDwgdGhpcy50ZXh0Lmxlbmd0aDsgaSsrKSB7XG4gICAgICBpZihpID4gLTEpIHtcbiAgICAgICAgY29uc3Qgc2l6ZXMgPSB0aGlzLnRleHRDYWNoZS5sZXR0ZXJzW2ldLnNpemVzO1xuXG4gICAgICAgIGNvbnN0IHhEcmF3ID0gY3VycmVudFggLSB0aGlzLm9mZnNldFg7XG4gICAgICAgIGNvbnN0IHlEcmF3ID0gdGhpcy55ICsgdGhpcy5zdHlsZS5ib3JkZXJTaXplO1xuXG4gICAgICAgIGlmKHRoaXMuaXNMZXR0ZXJWaXNpYmxlKGkpKSB7IC8vIERvbid0IGRyYXcgdGhlIHRleHQgaWYgaXQgaXMgb3V0c2lkZSB0aGUgaW5wdXQgKG92ZXJmbG93KVxuICAgICAgICAgIGlmKHRoaXMucG9zaXRpb25TdGFydCAhPSB0aGlzLnBvc2l0aW9uRW5kICYmIGkgPj0gdGhpcy5wb3NpdGlvblN0YXJ0ICYmIGkgPCB0aGlzLnBvc2l0aW9uRW5kKSB7XG4gICAgICAgICAgICB0aGlzLmRyYXdIaWdobGlnaHQoY3R4VGV4dCwgY3VycmVudFgsIHNpemVzKTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBVdGlscy5kcmF3VGV4dChjdHhUZXh0LCB0aGlzLnRleHRbaV0sIHRoaXMuc3R5bGUuZm9udENvbG9yLCB0aGlzLnN0eWxlLmZvbnRTaXplLCB0aGlzLnN0eWxlLmZvbnRGYW1pbHksIFwiZGVmYXVsdFwiLCBcImRlZmF1bHRcIiwgeERyYXcsIHlEcmF3LCBmYWxzZSk7XG4gICAgICAgIH1cblxuICAgICAgICBjdXJyZW50WCArPSBzaXplc1tcIndpZHRoXCJdICsgdGhpcy5zdHlsZS5zcGFjZUJldHdlZW5Db21wb25lbnRzO1xuICAgICAgfVxuXG4gICAgICBpZih0aGlzLnBvc2l0aW9uRW5kID09IGkgKyAxICYmIHRoaXMuc2VsZWN0ZWQpIHtcbiAgICAgICAgaWYodGhpcy50b3RhbFRpbWUgPD0gNTAwKSB7XG4gICAgICAgICAgdGhpcy5kcmF3Q3Vyc29yKGN0eFRleHQsIGN1cnJlbnRYKTtcbiAgICAgICAgfSBlbHNlIGlmKHRoaXMudG90YWxUaW1lID4gMTAwMCkge1xuICAgICAgICAgIHRoaXMudG90YWxUaW1lID0gMDtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBjdXJyZW50WDtcbiAgfVxuXG4gIGRyYXdDdXJzb3IoY3R4VGV4dCwgY3VycmVudFgpIHtcbiAgICBjdHhUZXh0LnN0cm9rZVN0eWxlID0gdGhpcy5zdHlsZS5ib3JkZXJDb2xvcjtcbiAgICBjdHhUZXh0LmxpbmVXaWR0aCA9IDE7XG4gICAgY3R4VGV4dC5iZWdpblBhdGgoKTtcbiAgICBjdHhUZXh0Lm1vdmVUbyhjdXJyZW50WCAtIHRoaXMub2Zmc2V0WCwgdGhpcy55ICsgMyk7XG4gICAgY3R4VGV4dC5saW5lVG8oY3VycmVudFggLSB0aGlzLm9mZnNldFgsIHRoaXMueSArIHRoaXMuc3R5bGUuZm9udFNpemUpO1xuICAgIGN0eFRleHQuc3Ryb2tlKCk7XG4gIH1cblxuICBkcmF3SGlnaGxpZ2h0KGN0eFRleHQsIGN1cnJlbnRYLCBzaXplcykge1xuICAgIGN0eFRleHQuZmlsbFN0eWxlID0gdGhpcy5zdHlsZS5zZWxlY3RDb2xvcjtcbiAgICBjdHhUZXh0LmZpbGxSZWN0KGN1cnJlbnRYIC0gdGhpcy5vZmZzZXRYLCB0aGlzLnkgKyB0aGlzLnN0eWxlLmJvcmRlclNpemUsIHNpemVzW1wid2lkdGhcIl0gKyAyLCB0aGlzLmhlaWdodCAtIHRoaXMuc3R5bGUuYm9yZGVyU2l6ZSAqIDIgLSAxKTtcbiAgfVxuXG4gIHVwZGF0ZVRleHRDYWNoZShjdXJyZW50WCkge1xuICAgIGNvbnN0IGN0eCA9IHRoaXMuY2FudmFzID8gdGhpcy5jYW52YXMuZ2V0Q29udGV4dChcIjJkXCIpIDogbnVsbDtcbiAgICBjb25zdCBwYXJlbnQgPSAodGhpcy5jYW52YXMgJiYgdGhpcy5jYW52YXMuc2NlbmUpIHx8IHRoaXMuY2FudmFzIHx8IChjdHggJiYgY3R4LmNhbnZhcyk7XG5cbiAgICBpZihjdHggJiYgKENvbnN0YW50cy5TZXR0aW5nLkRJU0FCTEVfT1BUSU1JWkFUSU9OUyB8fCAhdGhpcy50ZXh0Q2FjaGUgfHwgdGhpcy50ZXh0Q2FjaGUuZm9udFNpemUgIT0gdGhpcy5zdHlsZS5mb250U2l6ZSB8fCB0aGlzLnRleHRDYWNoZS5mb250RmFtaWx5ICE9IHRoaXMuc3R5bGUuZm9udEZhbWlseSB8fCB0aGlzLnRleHQgIT0gdGhpcy50ZXh0Q2FjaGUudGV4dCB8fCAocGFyZW50ICYmIHBhcmVudC53aWR0aCAhPSB0aGlzLnRleHRDYWNoZS5wYXJlbnRXaWR0aCkpKSB7XG4gICAgICB0aGlzLnRleHRDYWNoZSA9IHsgXCJmb250U2l6ZVwiOiB0aGlzLnN0eWxlLmZvbnRTaXplLCBcImZvbnRGYW1pbHlcIjogdGhpcy5zdHlsZS5mb250RmFtaWx5LCBcInRleHRcIjogdGhpcy50ZXh0LCBcInBhcmVudFdpZHRoXCI6IHBhcmVudC53aWR0aCwgXCJsZXR0ZXJzXCI6IFtdIH07XG5cbiAgICAgIGZvcihsZXQgaSA9IDA7IGkgPCB0aGlzLnRleHQubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgY29uc3Qgc2l6ZXMgPSBVdGlscy53cmFwVGV4dExpbmVzKGN0eCwgdGhpcy50ZXh0W2ldLCB0aGlzLndpZHRoLCB0aGlzLnN0eWxlLmZvbnRTaXplLCB0aGlzLnN0eWxlLmZvbnRGYW1pbHksIHRydWUpO1xuICAgICAgICB0aGlzLnRleHRDYWNoZS5sZXR0ZXJzW2ldID0ge1widGV4dFwiOiB0aGlzLnRleHRbaV0sIFwiY3VycmVudFhcIjogY3VycmVudFgsIFwic2l6ZXNcIjogc2l6ZXMgfTsgXG4gICAgICAgIGN1cnJlbnRYICs9IHNpemVzW1wid2lkdGhcIl0gKyB0aGlzLnN0eWxlLnNwYWNlQmV0d2VlbkNvbXBvbmVudHM7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgaXNDbGlja0N1cnJlbnRQb3NpdGlvbihwb3NpdGlvbiwgY3VycmVudFgsIHNpemVzKSB7XG4gICAgaWYocG9zaXRpb24ueCArIHRoaXMub2Zmc2V0WCA8PSBjdXJyZW50WCArIHNpemVzW1wid2lkdGhcIl0gKyB0aGlzLnN0eWxlLnNwYWNlQmV0d2VlbkNvbXBvbmVudHMgJiYgcG9zaXRpb24ueCArIHRoaXMub2Zmc2V0WCA+PSBjdXJyZW50WCkge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuXG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgaXNDbGlja0FmdGVyUG9zaXRpb24ocG9zaXRpb24sIGN1cnJlbnRYLCBzaXplcykge1xuICAgIGlmKHBvc2l0aW9uLnggKyB0aGlzLm9mZnNldFggPj0gY3VycmVudFggKyBzaXplc1tcIndpZHRoXCJdICsgdGhpcy5zdHlsZS5zcGFjZUJldHdlZW5Db21wb25lbnRzKSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG5cbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBnZXRMZXR0ZXJDbGlja2VkKHBvc2l0aW9uKSB7XG4gICAgaWYodGhpcy50ZXh0Q2FjaGUpIHtcbiAgICAgIGZvcihsZXQgaSA9IDA7IGkgPCB0aGlzLnRleHQubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgY29uc3QgbGV0dGVyID0gdGhpcy50ZXh0Q2FjaGUubGV0dGVyc1tpXTtcbiAgICAgICAgXG4gICAgICAgIGlmKHRoaXMuaXNDbGlja0N1cnJlbnRQb3NpdGlvbihwb3NpdGlvbiwgTWF0aC5yb3VuZChsZXR0ZXIuY3VycmVudFgpLCBsZXR0ZXIuc2l6ZXMpKSB7XG4gICAgICAgICAgcmV0dXJuIGk7XG4gICAgICAgIH0gZWxzZSBpZihpID49IHRoaXMudGV4dC5sZW5ndGggLSAxICYmIHRoaXMuaXNDbGlja0FmdGVyUG9zaXRpb24ocG9zaXRpb24sIE1hdGgucm91bmQobGV0dGVyLmN1cnJlbnRYKSwgbGV0dGVyLnNpemVzKSkge1xuICAgICAgICAgIHJldHVybiBpICsgMTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIGdldCBjdXJzb3JQb3NpdGlvbigpIHtcbiAgICBpZih0aGlzLnRleHRDYWNoZSkge1xuICAgICAgbGV0IHBvc2l0aW9uID0gdGhpcy5wb3NpdGlvbkVuZCAtIDE7XG5cbiAgICAgIGlmKHRoaXMucG9zaXRpb25FbmQgIT0gdGhpcy5wb3NpdGlvblN0YXJ0ICYmIHRoaXMucG9zaXRpb25FbmQgPT0gdGhpcy5wb3NpdGlvblN0YXJ0Q2xpY2sgJiYgdGhpcy5wb3NpdGlvblN0YXJ0IDwgdGhpcy5wb3NpdGlvblN0YXJ0Q2xpY2spIHtcbiAgICAgICAgcG9zaXRpb24gPSB0aGlzLnBvc2l0aW9uU3RhcnQgLSAxO1xuICAgICAgfVxuICAgICAgXG4gICAgICBpZihwb3NpdGlvbiA8IDApIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICBcImN1cnJlbnRMZXR0ZXJcIjogdGhpcy50ZXh0Q2FjaGUubGV0dGVyc1swXSxcbiAgICAgICAgICBcInhcIjogdGhpcy54ICsgdGhpcy5zdHlsZS5ib3JkZXJTaXplXG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgY29uc3QgY3VycmVudExldHRlciA9IHRoaXMudGV4dENhY2hlLmxldHRlcnNbcG9zaXRpb25dO1xuXG4gICAgICBpZihjdXJyZW50TGV0dGVyKSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgXCJjdXJyZW50TGV0dGVyXCI6IGN1cnJlbnRMZXR0ZXIsXG4gICAgICAgICAgXCJ4XCI6IGN1cnJlbnRMZXR0ZXIuY3VycmVudFhcbiAgICAgICAgfTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBpc0xldHRlclZpc2libGUobGV0dGVySWQpIHtcbiAgICBpZih0aGlzLnRleHRDYWNoZSkge1xuICAgICAgY29uc3QgbGV0dGVyID0gdGhpcy50ZXh0Q2FjaGUubGV0dGVyc1tsZXR0ZXJJZF07XG5cbiAgICAgIGlmKGxldHRlcikge1xuICAgICAgICBjb25zdCB4RHJhdyA9IGxldHRlci5jdXJyZW50WCAtIHRoaXMub2Zmc2V0WDtcbiAgXG4gICAgICAgIGlmKHhEcmF3ID49IHRoaXMueCAtIGxldHRlci5zaXplc1tcIndpZHRoXCJdICYmIHhEcmF3IDw9IHRoaXMueCArIHRoaXMud2lkdGgpIHtcbiAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIGF1dG9TY3JvbGwoKSB7XG4gICAgaWYodGhpcy50ZXh0Q2FjaGUpIHtcbiAgICAgIGNvbnN0IGN1cnNvclBvc2l0aW9uID0gdGhpcy5jdXJzb3JQb3NpdGlvbjtcbiAgICAgIGNvbnN0IGN1cnJlbnRMZXR0ZXJTaXplID0gY3Vyc29yUG9zaXRpb24uY3VycmVudExldHRlciA/IGN1cnNvclBvc2l0aW9uLmN1cnJlbnRMZXR0ZXIuc2l6ZXNbXCJ3aWR0aFwiXSA6IDA7XG4gICAgICBjb25zdCBjdXJzb3JQb3NpdGlvblBvcyA9IGN1cnNvclBvc2l0aW9uLnggKyBjdXJyZW50TGV0dGVyU2l6ZSArIHRoaXMuc3R5bGUuc3BhY2VCZXR3ZWVuQ29tcG9uZW50cztcbiAgICAgIGNvbnN0IGN1cnNvclBvc2l0aW9uTmVnID0gY3Vyc29yUG9zaXRpb24ueCAtIGN1cnJlbnRMZXR0ZXJTaXplIC0gdGhpcy5zdHlsZS5zcGFjZUJldHdlZW5Db21wb25lbnRzO1xuXG4gICAgICBjb25zdCBvZmZzZXRYID0gTWF0aC5tYXgoMCwgTWF0aC5yb3VuZChjdXJzb3JQb3NpdGlvblBvcyAtIHRoaXMueCAtIHRoaXMud2lkdGggKyB0aGlzLnN0eWxlLmJvcmRlclNpemUgKyB0aGlzLnN0eWxlLnNwYWNlQmV0d2VlbkNvbXBvbmVudHMgKiAyKSk7XG4gICAgICBjb25zdCBvZmZzZXRYTmVnID0gTWF0aC5tYXgoMCwgTWF0aC5yb3VuZChjdXJzb3JQb3NpdGlvbk5lZyAtIHRoaXMueCAtIHRoaXMuc3R5bGUuYm9yZGVyU2l6ZSAtIHRoaXMuc3R5bGUuc3BhY2VCZXR3ZWVuQ29tcG9uZW50cyAqIDIpKTtcblxuICAgICAgaWYodGhpcy5vZmZzZXRYIDwgMCkge1xuICAgICAgICB0aGlzLm9mZnNldFggPSAwO1xuICAgICAgfVxuXG4gICAgICBpZihjdXJzb3JQb3NpdGlvblBvcyAtIHRoaXMub2Zmc2V0WCA+PSB0aGlzLnggKyB0aGlzLndpZHRoIC0gdGhpcy5zdHlsZS5ib3JkZXJTaXplKSB7XG4gICAgICAgIHRoaXMub2Zmc2V0WCA9IG9mZnNldFg7XG4gICAgICAgIHJldHVybiBvZmZzZXRYO1xuICAgICAgfSBlbHNlIGlmKGN1cnNvclBvc2l0aW9uTmVnIC0gdGhpcy5vZmZzZXRYIDw9IHRoaXMueCArIHRoaXMuc3R5bGUuYm9yZGVyU2l6ZSkge1xuICAgICAgICB0aGlzLm9mZnNldFggPSBvZmZzZXRYTmVnO1xuICAgICAgICByZXR1cm4gb2Zmc2V0WE5lZztcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBjbGljaygpIHtcbiAgICB0aGlzLmlucHV0LmZvY3VzKCk7XG4gIH1cblxuICBibHVyKCkge1xuICAgIHRoaXMuaW5wdXQuYmx1cigpO1xuICB9XG5cbiAgZ2V0IHBvc2l0aW9uU3RhcnQoKSB7XG4gICAgcmV0dXJuIHRoaXMuI19wb3NpdGlvblN0YXJ0O1xuICB9XG5cbiAgZ2V0IHBvc2l0aW9uU3RhcnRDbGljaygpIHtcbiAgICByZXR1cm4gdGhpcy4jX3Bvc2l0aW9uU3RhcnRDbGljaztcbiAgfVxuXG4gIGdldCBwb3NpdGlvbkVuZCgpIHtcbiAgICByZXR1cm4gdGhpcy4jX3Bvc2l0aW9uRW5kO1xuICB9XG5cbiAgc2V0IHBvc2l0aW9uU3RhcnQocG9zaXRpb24pIHtcbiAgICB0aGlzLmlucHV0LnNlbGVjdGlvblN0YXJ0ID0gcG9zaXRpb247XG4gICAgdGhpcy4jX3Bvc2l0aW9uU3RhcnQgPSBwb3NpdGlvbjtcbiAgfVxuXG4gIHNldCBwb3NpdGlvblN0YXJ0Q2xpY2socG9zaXRpb24pIHtcbiAgICB0aGlzLiNfcG9zaXRpb25TdGFydENsaWNrID0gcG9zaXRpb247XG4gIH1cblxuICBzZXQgcG9zaXRpb25FbmQocG9zaXRpb24pIHtcbiAgICB0aGlzLmlucHV0LnNlbGVjdGlvbkVuZCA9IHBvc2l0aW9uO1xuICAgIHRoaXMuI19wb3NpdGlvbkVuZCA9IHBvc2l0aW9uO1xuICB9XG5cbiAgc2V0U2VsZWN0aW9uUmFuZ2Uoc3RhcnQsIGVuZCwgZGlyZWN0aW9uKSB7XG4gICAgdGhpcy5pbnB1dC5zZXRTZWxlY3Rpb25SYW5nZShzdGFydCwgZW5kLCBkaXJlY3Rpb24pO1xuICAgIHRoaXMucG9zaXRpb25TdGFydCA9IHN0YXJ0O1xuICAgIHRoaXMucG9zaXRpb25FbmQgPSBlbmQ7XG4gIH1cblxuICBnZXQgaGVpZ2h0KCkge1xuICAgIGNvbnN0IGJvcmRlclNpemUgPSB0aGlzLnN0eWxlICYmIHRoaXMuc3R5bGUuYm9yZGVyU2l6ZSA/IHRoaXMuc3R5bGUuYm9yZGVyU2l6ZSA6IDA7XG4gICAgcmV0dXJuIHN1cGVyLmhlaWdodCA/IHN1cGVyLmhlaWdodCA6IHRoaXMuc3R5bGUuZm9udFNpemUgKyBib3JkZXJTaXplICogMjtcbiAgfVxuXG4gIGdldCBkZWZhdWx0U3R5bGUoKSB7XG4gICAgcmV0dXJuIG5ldyBTdHlsZSh7XG4gICAgICBcImZvbnRTaXplXCI6IE1hdGguZmxvb3IoQ29uc3RhbnRzLlNldHRpbmcuRk9OVF9TSVpFIC8gMS4yNSksXG4gICAgICBcImZvbnRGYW1pbHlcIjogQ29uc3RhbnRzLlNldHRpbmcuRk9OVF9GQU1JTFksXG4gICAgICBcImZvbnRDb2xvclwiOiBDb25zdGFudHMuU2V0dGluZy5JTlBVVF9ERUZBVUxUX0ZPTlRfQ09MT1IsXG4gICAgICBcImJhY2tncm91bmRDb2xvclwiOiBDb25zdGFudHMuU2V0dGluZy5JTlBVVF9ERUZBVUxUX0JBQ0tHUk9VTkRfQ09MT1IsXG4gICAgICBcImJvcmRlckNvbG9yXCI6IENvbnN0YW50cy5TZXR0aW5nLklOUFVUX0RFRkFVTFRfQk9SREVSX0NPTE9SLFxuICAgICAgXCJib3JkZXJDb2xvclNlbGVjdGVkXCI6IENvbnN0YW50cy5TZXR0aW5nLklOUFVUX0RFRkFVTFRfQk9SREVSX0NPTE9SX1NFTEVDVEVELFxuICAgICAgXCJzZWxlY3RDb2xvclwiOiBDb25zdGFudHMuU2V0dGluZy5JTlBVVF9ERUZBVUxUX1NFTEVDVF9DT0xPUixcbiAgICAgIFwic3BhY2VCZXR3ZWVuQ29tcG9uZW50c1wiOiAxXG4gICAgfSk7XG4gIH1cbn0iLCIvKlxuICogQ29weXJpZ2h0IChDKSAyMDIwIEVsaWFzdGlrIChlbGlhc3Rpa3NvZnRzLmNvbSlcbiAqXG4gKiBUaGlzIGZpbGUgaXMgcGFydCBvZiBcIkpTR2FtZVRvb2xzXCIuXG4gKlxuICogXCJKU0dhbWVUb29sc1wiIGlzIGZyZWUgc29mdHdhcmU6IHlvdSBjYW4gcmVkaXN0cmlidXRlIGl0IGFuZC9vciBtb2RpZnlcbiAqIGl0IHVuZGVyIHRoZSB0ZXJtcyBvZiB0aGUgR05VIEdlbmVyYWwgUHVibGljIExpY2Vuc2UgYXMgcHVibGlzaGVkIGJ5XG4gKiB0aGUgRnJlZSBTb2Z0d2FyZSBGb3VuZGF0aW9uLCBlaXRoZXIgdmVyc2lvbiAzIG9mIHRoZSBMaWNlbnNlLCBvclxuICogKGF0IHlvdXIgb3B0aW9uKSBhbnkgbGF0ZXIgdmVyc2lvbi5cbiAqXG4gKiBcIkpTR2FtZVRvb2xzXCIgaXMgZGlzdHJpYnV0ZWQgaW4gdGhlIGhvcGUgdGhhdCBpdCB3aWxsIGJlIHVzZWZ1bCxcbiAqIGJ1dCBXSVRIT1VUIEFOWSBXQVJSQU5UWTsgd2l0aG91dCBldmVuIHRoZSBpbXBsaWVkIHdhcnJhbnR5IG9mXG4gKiBNRVJDSEFOVEFCSUxJVFkgb3IgRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UuICBTZWUgdGhlXG4gKiBHTlUgR2VuZXJhbCBQdWJsaWMgTGljZW5zZSBmb3IgbW9yZSBkZXRhaWxzLlxuICpcbiAqIFlvdSBzaG91bGQgaGF2ZSByZWNlaXZlZCBhIGNvcHkgb2YgdGhlIEdOVSBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlXG4gKiBhbG9uZyB3aXRoIFwiSlNHYW1lVG9vbHNcIi4gIElmIG5vdCwgc2VlIDxodHRwOi8vd3d3LmdudS5vcmcvbGljZW5zZXMvPi5cbiAqL1xuaW1wb3J0IENvbnN0YW50cyBmcm9tIFwiLi9Db25zdGFudHNcIjtcbmltcG9ydCBVdGlscyBmcm9tIFwiLi9VdGlsc1wiO1xuaW1wb3J0IENvbXBvbmVudCBmcm9tIFwiLi9Db21wb25lbnRcIjtcbmltcG9ydCBTdHlsZSBmcm9tIFwiLi9TdHlsZVwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBMYWJlbCBleHRlbmRzIENvbXBvbmVudCB7XG4gIHNlbGVjdGFibGUgPSBmYWxzZTtcbiAgI190ZXh0ID0gXCJcIjtcblxuICBjb25zdHJ1Y3Rvcih0ZXh0LCB4LCB5LCBzdHlsZSkge1xuICAgIHN1cGVyKHgsIHksIG51bGwsIG51bGwsIHN0eWxlKTtcbiAgICB0aGlzLnRleHQgPSB0ZXh0O1xuICAgIHRoaXMuc2l6ZXNDYWNoZSA9IG51bGw7XG5cbiAgICBpZighQ29uc3RhbnRzLlNldHRpbmcuRElTQUJMRV9FWFBFUklNRU5UQUxfT1BUSU1JWkFUSU9OUykge1xuICAgICAgdGhpcy51cGRhdGVTaXplcygpO1xuXG4gICAgICB0aGlzLmFkZENoYW5nZUFjdGlvbihjb21wb25lbnRDaGFuZ2VkID0+IHtcbiAgICAgICAgdGhpcy51cGRhdGVTaXplcygpO1xuICAgICAgICBjb21wb25lbnRDaGFuZ2VkICE9IHRoaXMucGFyZW50ICYmIHRoaXMucGFyZW50ICYmIHRoaXMucGFyZW50LnJlYWN0b3IgJiYgdGhpcy5wYXJlbnQucmVhY3Rvci5kaXNwYXRjaEV2ZW50KFwib25DaGFuZ2VcIiwgdGhpcyk7XG4gICAgICB9KTtcbiAgICB9XG4gIH1cblxuICBkcmF3KGNvbnRleHQpIHtcbiAgICBpZih0aGlzLmhpZGRlbikgcmV0dXJuO1xuICAgIHN1cGVyLmRyYXcoY29udGV4dCk7XG4gICAgXG4gICAgY29uc3QgY2FudmFzID0gY29udGV4dC5jYW52YXM7XG4gICAgY29uc3QgY3R4ID0gY2FudmFzLmdldENvbnRleHQoXCIyZFwiKTtcbiAgICBjdHguc2F2ZSgpO1xuXG4gICAgVXRpbHMuZHJhd1RleHQoY3R4LCB0aGlzLnRleHQsIHRoaXMuc3R5bGUuZm9udENvbG9yLCB0aGlzLnN0eWxlLmZvbnRTaXplLCB0aGlzLnN0eWxlLmZvbnRGYW1pbHksIHRoaXMuc3R5bGUuYWxpZ25lbWVudCwgdGhpcy5zdHlsZS52ZXJ0aWNhbEFsaWduZW1lbnQsIHRoaXMueCwgdGhpcy55LCB0aGlzLnN0eWxlLndyYXAsIHRoaXMuc3R5bGUuYm9sZCwgdGhpcy5zdHlsZS51bmRlcmxpbmUsIG51bGwsIHRoaXMucGFyZW50KTtcblxuICAgIGN0eC5yZXN0b3JlKCk7XG4gIH1cblxuICBzZXQgdGV4dCh0ZXh0KSB7XG4gICAgaWYodGV4dCAhPSB0aGlzLiNfdGV4dCkge1xuICAgICAgdGhpcy4jX3RleHQgPSB0ZXh0O1xuICAgICAgdGhpcy5yZWFjdG9yLmRpc3BhdGNoRXZlbnQoXCJvbkNoYW5nZVwiLCB0aGlzKTtcbiAgICB9XG4gIH1cblxuICBnZXQgdGV4dCgpIHtcbiAgICByZXR1cm4gdGhpcy4jX3RleHQ7XG4gIH1cblxuICB1cGRhdGVTaXplcygpIHtcbiAgICBjb25zdCBjdHggPSB0aGlzLmNhbnZhcyA/IHRoaXMuY2FudmFzLmdldENvbnRleHQoXCIyZFwiKSA6IG51bGw7XG4gICAgY29uc3QgcGFyZW50ID0gKHRoaXMuY2FudmFzICYmIHRoaXMuY2FudmFzLnNjZW5lKSB8fCB0aGlzLmNhbnZhcyB8fCAoY3R4ICYmIGN0eC5jYW52YXMpIHx8IHRoaXMucGFyZW50O1xuICAgIFxuICAgIGlmKGN0eCAmJiAoQ29uc3RhbnRzLlNldHRpbmcuRElTQUJMRV9PUFRJTUlaQVRJT05TIHx8ICF0aGlzLnNpemVzQ2FjaGUgfHwgdGhpcy5zaXplc0NhY2hlLmZvbnRTaXplICE9IHRoaXMuc3R5bGUuZm9udFNpemUgfHwgdGhpcy5zaXplc0NhY2hlLmZvbnRGYW1pbHkgIT0gdGhpcy5zdHlsZS5mb250RmFtaWx5IHx8IHRoaXMuc2l6ZXNDYWNoZS53cmFwICE9IHRoaXMuc3R5bGUud3JhcCB8fCB0aGlzLnRleHQgIT0gdGhpcy5zaXplc0NhY2hlLnRleHQgfHwgKHBhcmVudCAmJiBwYXJlbnQud2lkdGggIT0gdGhpcy5zaXplc0NhY2hlLnBhcmVudFdpZHRoKSB8fCB0aGlzLnNpemVzQ2FjaGUudmFsdWUgPT0gbnVsbCkpIHtcbiAgICAgIGNvbnN0IHNpemVzID0gVXRpbHMud3JhcFRleHRMaW5lcyhjdHgsIHRoaXMudGV4dCwgbnVsbCwgdGhpcy5zdHlsZS5mb250U2l6ZSwgdGhpcy5zdHlsZS5mb250RmFtaWx5LCAhdGhpcy5zdHlsZS53cmFwKTtcbiAgICAgIFxuICAgICAgaWYocGFyZW50KSB7XG4gICAgICAgIHRoaXMuc2l6ZXNDYWNoZSA9IHsgXCJmb250U2l6ZVwiOiB0aGlzLnN0eWxlLmZvbnRTaXplLCBcImZvbnRGYW1pbHlcIjogdGhpcy5zdHlsZS5mb250RmFtaWx5LCBcIndyYXBcIjogdGhpcy5zdHlsZS53cmFwLCBcInRleHRcIjogdGhpcy50ZXh0LCBcInBhcmVudFdpZHRoXCI6IHBhcmVudC53aWR0aCwgXCJ2YWx1ZVwiOiBzaXplcyB9O1xuICAgICAgICB0aGlzLnJlYWN0b3IuZGlzcGF0Y2hFdmVudChcIm9uQ2hhbmdlXCIsIHRoaXMpO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiB0aGlzLnNpemVzQ2FjaGUgJiYgdGhpcy5zaXplc0NhY2hlLnZhbHVlO1xuICB9XG5cbiAgZ2V0IHNpemVzKCkge1xuICAgIGlmKENvbnN0YW50cy5TZXR0aW5nLkRJU0FCTEVfRVhQRVJJTUVOVEFMX09QVElNSVpBVElPTlMpIHRoaXMudXBkYXRlU2l6ZXMoKTtcbiAgICByZXR1cm4gdGhpcy5zaXplc0NhY2hlID8gdGhpcy5zaXplc0NhY2hlLnZhbHVlIDogbnVsbDtcbiAgfVxuXG4gIGdldCBoZWlnaHQoKSB7XG4gICAgY29uc3Qgc2l6ZXMgPSB0aGlzLnNpemVzO1xuICAgIHJldHVybiBzaXplcyAmJiBzaXplc1tcImhlaWdodFwiXTtcbiAgfVxuXG4gIGdldCB3aWR0aCgpIHtcbiAgICBjb25zdCBzaXplcyA9IHRoaXMuc2l6ZXM7XG4gICAgcmV0dXJuIHNpemVzICYmIHNpemVzW1wid2lkdGhcIl07XG4gIH1cblxuICBnZXQgZGVmYXVsdFN0eWxlKCkge1xuICAgIHJldHVybiBuZXcgU3R5bGUoe1xuICAgICAgXCJmb250Q29sb3JcIjogQ29uc3RhbnRzLlNldHRpbmcuTEFCRUxfREVGQVVMVF9GT05UX0NPTE9SLFxuICAgICAgXCJ3cmFwXCI6IHRydWUsXG4gICAgICBcImJvbGRcIjogZmFsc2UsXG4gICAgICBcInVuZGVybGluZVwiOiBmYWxzZVxuICAgIH0pO1xuICB9XG59IiwiLypcbiAqIENvcHlyaWdodCAoQykgMjAyMCBFbGlhc3RpayAoZWxpYXN0aWtzb2Z0cy5jb20pXG4gKlxuICogVGhpcyBmaWxlIGlzIHBhcnQgb2YgXCJKU0dhbWVUb29sc1wiLlxuICpcbiAqIFwiSlNHYW1lVG9vbHNcIiBpcyBmcmVlIHNvZnR3YXJlOiB5b3UgY2FuIHJlZGlzdHJpYnV0ZSBpdCBhbmQvb3IgbW9kaWZ5XG4gKiBpdCB1bmRlciB0aGUgdGVybXMgb2YgdGhlIEdOVSBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlIGFzIHB1Ymxpc2hlZCBieVxuICogdGhlIEZyZWUgU29mdHdhcmUgRm91bmRhdGlvbiwgZWl0aGVyIHZlcnNpb24gMyBvZiB0aGUgTGljZW5zZSwgb3JcbiAqIChhdCB5b3VyIG9wdGlvbikgYW55IGxhdGVyIHZlcnNpb24uXG4gKlxuICogXCJKU0dhbWVUb29sc1wiIGlzIGRpc3RyaWJ1dGVkIGluIHRoZSBob3BlIHRoYXQgaXQgd2lsbCBiZSB1c2VmdWwsXG4gKiBidXQgV0lUSE9VVCBBTlkgV0FSUkFOVFk7IHdpdGhvdXQgZXZlbiB0aGUgaW1wbGllZCB3YXJyYW50eSBvZlxuICogTUVSQ0hBTlRBQklMSVRZIG9yIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFLiAgU2VlIHRoZVxuICogR05VIEdlbmVyYWwgUHVibGljIExpY2Vuc2UgZm9yIG1vcmUgZGV0YWlscy5cbiAqXG4gKiBZb3Ugc2hvdWxkIGhhdmUgcmVjZWl2ZWQgYSBjb3B5IG9mIHRoZSBHTlUgR2VuZXJhbCBQdWJsaWMgTGljZW5zZVxuICogYWxvbmcgd2l0aCBcIkpTR2FtZVRvb2xzXCIuICBJZiBub3QsIHNlZSA8aHR0cDovL3d3dy5nbnUub3JnL2xpY2Vuc2VzLz4uXG4gKi9cbmltcG9ydCBDb25zdGFudHMgZnJvbSBcIi4vQ29uc3RhbnRzXCI7XG5pbXBvcnQgTGFiZWwgZnJvbSBcIi4vTGFiZWxcIjtcbmltcG9ydCBTdHlsZSBmcm9tIFwiLi9TdHlsZVwiO1xuaW1wb3J0IFV0aWxzIGZyb20gXCIuL1V0aWxzXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIExpbmsgZXh0ZW5kcyBMYWJlbCB7XG4gIHNlbGVjdGFibGUgPSB0cnVlO1xuXG4gIGNvbnN0cnVjdG9yKHRleHQsIHgsIHksIHN0eWxlKSB7XG4gICAgc3VwZXIodGV4dCwgeCwgeSwgc3R5bGUpO1xuXG4gICAgdGhpcy5pbml0aWFsQ29sb3IgPSB0aGlzLnN0eWxlLmZvbnRDb2xvcjtcbiAgICB0aGlzLmluaXRpYWxVbmRlcmxpbmUgPSB0aGlzLnN0eWxlLnVuZGVybGluZTtcbiAgfVxuXG4gIGRyYXcoY29udGV4dCkge1xuICAgIGlmKHRoaXMuaGlkZGVuKSByZXR1cm47XG4gICAgc3VwZXIuZHJhdyhjb250ZXh0KTtcblxuICAgIGNvbnN0IGNhbnZhcyA9IGNvbnRleHQuY2FudmFzO1xuXG4gICAgaWYodGhpcy5jbGlja2VkKSB7XG4gICAgICB0aGlzLnN0eWxlLnNldChcInVuZGVybGluZVwiLCBmYWxzZSk7XG4gICAgICB0aGlzLnN0eWxlLnNldChcImZvbnRDb2xvclwiLCB0aGlzLnN0eWxlLmZvbnRDb2xvckRvd24pO1xuICAgICAgY2FudmFzLnN0eWxlLmN1cnNvciA9IFwicG9pbnRlclwiO1xuICAgIH0gZWxzZSBpZih0aGlzLmhvdmVyZWQgfHwgdGhpcy5zZWxlY3RlZCkge1xuICAgICAgdGhpcy5zdHlsZS5zZXQoXCJ1bmRlcmxpbmVcIiwgZmFsc2UpO1xuICAgICAgdGhpcy5zdHlsZS5zZXQoXCJmb250Q29sb3JcIiwgdGhpcy5zdHlsZS5mb250Q29sb3JIb3Zlcik7XG4gICAgICBpZih0aGlzLmhvdmVyZWQpIGNhbnZhcy5zdHlsZS5jdXJzb3IgPSBcInBvaW50ZXJcIjtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5zdHlsZS5zZXQoXCJ1bmRlcmxpbmVcIiwgdGhpcy5pbml0aWFsVW5kZXJsaW5lKTtcbiAgICAgIHRoaXMuc3R5bGUuc2V0KFwiZm9udENvbG9yXCIsIHRoaXMuaW5pdGlhbENvbG9yKTtcbiAgICB9XG5cbiAgICB0aGlzLmluaXQgPSB0cnVlO1xuICB9XG5cbiAgZ2V0IGRlZmF1bHRTdHlsZSgpIHtcbiAgICByZXR1cm4gbmV3IFN0eWxlKHtcbiAgICAgIFwiZm9udENvbG9yXCI6IENvbnN0YW50cy5TZXR0aW5nLkxJTktfREVGQVVMVF9DT0xPUixcbiAgICAgIFwiZm9udENvbG9ySG92ZXJcIjogQ29uc3RhbnRzLlNldHRpbmcuTElOS19ERUZBVUxUX0hPVkVSX0NPTE9SLFxuICAgICAgXCJmb250Q29sb3JEb3duXCI6IENvbnN0YW50cy5TZXR0aW5nLkxJTktfREVGQVVMVF9DTElDS19DT0xPUixcbiAgICAgIFwid3JhcFwiOiB0cnVlLFxuICAgICAgXCJib2xkXCI6IGZhbHNlLFxuICAgICAgXCJ1bmRlcmxpbmVcIjogdHJ1ZVxuICAgIH0pO1xuICB9XG59IiwiLypcbiAqIENvcHlyaWdodCAoQykgMjAyMCBFbGlhc3RpayAoZWxpYXN0aWtzb2Z0cy5jb20pXG4gKlxuICogVGhpcyBmaWxlIGlzIHBhcnQgb2YgXCJKU0dhbWVUb29sc1wiLlxuICpcbiAqIFwiSlNHYW1lVG9vbHNcIiBpcyBmcmVlIHNvZnR3YXJlOiB5b3UgY2FuIHJlZGlzdHJpYnV0ZSBpdCBhbmQvb3IgbW9kaWZ5XG4gKiBpdCB1bmRlciB0aGUgdGVybXMgb2YgdGhlIEdOVSBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlIGFzIHB1Ymxpc2hlZCBieVxuICogdGhlIEZyZWUgU29mdHdhcmUgRm91bmRhdGlvbiwgZWl0aGVyIHZlcnNpb24gMyBvZiB0aGUgTGljZW5zZSwgb3JcbiAqIChhdCB5b3VyIG9wdGlvbikgYW55IGxhdGVyIHZlcnNpb24uXG4gKlxuICogXCJKU0dhbWVUb29sc1wiIGlzIGRpc3RyaWJ1dGVkIGluIHRoZSBob3BlIHRoYXQgaXQgd2lsbCBiZSB1c2VmdWwsXG4gKiBidXQgV0lUSE9VVCBBTlkgV0FSUkFOVFk7IHdpdGhvdXQgZXZlbiB0aGUgaW1wbGllZCB3YXJyYW50eSBvZlxuICogTUVSQ0hBTlRBQklMSVRZIG9yIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFLiAgU2VlIHRoZVxuICogR05VIEdlbmVyYWwgUHVibGljIExpY2Vuc2UgZm9yIG1vcmUgZGV0YWlscy5cbiAqXG4gKiBZb3Ugc2hvdWxkIGhhdmUgcmVjZWl2ZWQgYSBjb3B5IG9mIHRoZSBHTlUgR2VuZXJhbCBQdWJsaWMgTGljZW5zZVxuICogYWxvbmcgd2l0aCBcIkpTR2FtZVRvb2xzXCIuICBJZiBub3QsIHNlZSA8aHR0cDovL3d3dy5nbnUub3JnL2xpY2Vuc2VzLz4uXG4gKi9cbmltcG9ydCBDb25zdGFudHMgZnJvbSBcIi4vQ29uc3RhbnRzXCI7XG5pbXBvcnQgVXRpbHMgZnJvbSBcIi4vVXRpbHNcIjtcbmltcG9ydCBDb21wb25lbnQgZnJvbSBcIi4vQ29tcG9uZW50XCI7XG5pbXBvcnQgQ29sIGZyb20gXCIuL0NvbFwiO1xuaW1wb3J0IFN0eWxlIGZyb20gXCIuL1N0eWxlXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE1lbnUgZXh0ZW5kcyBDb2wge1xuICBzZWxlY3RhYmxlID0gZmFsc2U7XG5cbiAgY29uc3RydWN0b3Ioc3R5bGUsIC4uLmNvbXBvbmVudHMpIHtcbiAgICBzdXBlcigwLCAwLCBudWxsLCBudWxsLCBzdHlsZSwgLi4uY29tcG9uZW50cyk7XG5cbiAgICB0aGlzLmxhc3RLZXkgPSB0aGlzLmxhc3RLZXkgPT0gdW5kZWZpbmVkID8gLTEgOiB0aGlzLmxhc3RLZXk7XG4gICAgdGhpcy5zZWxlY3RlZENvbXBvbmVudCA9IHRoaXMuc2VsZWN0ZWRDb21wb25lbnQgPT0gdW5kZWZpbmVkID8gMCA6IHRoaXMuc2VsZWN0ZWRDb21wb25lbnQ7XG5cbiAgICB0aGlzLmRpc2FibGUoKTtcbiAgfVxuXG4gIGRyYXcoY29udGV4dCkge1xuICAgIGlmKHRoaXMuaGlkZGVuKSByZXR1cm47XG4gICAgY29uc3QgY2FudmFzID0gY29udGV4dC5jYW52YXM7XG4gICAgY29uc3QgY3R4ID0gY2FudmFzLmdldENvbnRleHQoXCIyZFwiKTtcblxuICAgIGlmKHRoaXMuc3R5bGUuYmx1ckJhY2tncm91bmQpIHtcbiAgICAgIHRoaXMuZHJhd0JsdXIoY3R4KTtcbiAgICB9XG5cbiAgICBjdHguc2F2ZSgpO1xuXG4gICAgdGhpcy5kcmF3Q29tcG9uZW50cyhjdHgpO1xuICAgIFxuICAgIGlmKCF0aGlzLmluaXQpIHtcbiAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJrZXlkb3duXCIsIGV2ZW50ID0+IHtcbiAgICAgICAgaWYoIXRoaXMuZGlzYWJsZWQpIHtcbiAgICAgICAgICB0aGlzLmxhc3RLZXkgPSBldmVudC5rZXlDb2RlO1xuICAgICAgICAgIGlmKHRoaXMubGFzdEtleSA9PSBDb25zdGFudHMuS2V5LlVQIHx8IHRoaXMubGFzdEtleSA9PSBDb25zdGFudHMuS2V5LkJPVFRPTSkgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG5cbiAgICAgIHRoaXMuaW5pdCA9IHRydWU7XG4gICAgfVxuXG4gICAgbGV0IGtleUFjdGlvbiA9IGZhbHNlO1xuICBcbiAgICBpZih0aGlzLmNvbXBvbmVudHMgIT0gbnVsbCkge1xuICAgICAgaWYodGhpcy5sYXN0S2V5ID09IENvbnN0YW50cy5LZXkuVVApIHtcbiAgICAgICAgdGhpcy5zZWxlY3QodGhpcy5zZWxlY3RlZENvbXBvbmVudCAtIDEpO1xuICAgICAgICBrZXlBY3Rpb24gPSB0cnVlO1xuICAgICAgfSBlbHNlIGlmKHRoaXMubGFzdEtleSA9PSBDb25zdGFudHMuS2V5LkJPVFRPTSkge1xuICAgICAgICB0aGlzLnNlbGVjdCh0aGlzLnNlbGVjdGVkQ29tcG9uZW50ICsgMSk7XG4gICAgICAgIGtleUFjdGlvbiA9IHRydWU7XG4gICAgICB9IGVsc2UgaWYodGhpcy5sYXN0S2V5ID09IENvbnN0YW50cy5LZXkuRUNIQVApIHtcbiAgICAgICAgdGhpcy5kaXNhYmxlKCk7XG4gICAgICAgIGtleUFjdGlvbiA9IHRydWU7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLmNvbXBvbmVudHMuZm9yRWFjaCgoY29tcG9uZW50LCBpKSA9PiB7XG4gICAgICAgICAgaWYoY29tcG9uZW50LnNlbGVjdGVkKSB0aGlzLnNlbGVjdChpKTtcbiAgICAgICAgfSk7XG4gICAgICB9XG5cbiAgICAgIHRoaXMuY29tcG9uZW50cy5mb3JFYWNoKChjb21wb25lbnQsIGkpID0+IHtcbiAgICAgICAgaWYoY29tcG9uZW50IGluc3RhbmNlb2YgQ29tcG9uZW50KSB7XG4gICAgICAgICAgaWYoa2V5QWN0aW9uKSB7XG4gICAgICAgICAgICBpZih0aGlzLnNlbGVjdGVkQ29tcG9uZW50ID09IGkpIHtcbiAgICAgICAgICAgICAgaWYoY29tcG9uZW50LnNlbGVjdGFibGUpIHtcbiAgICAgICAgICAgICAgICBjb21wb25lbnQuc2VsZWN0ZWQgPSB0cnVlO1xuICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgaWYoIXRoaXMuaXNDb21wb25lbnRWaXNpYmxlKGNvbXBvbmVudCkpIHtcbiAgICAgICAgICAgICAgICBjb25zdCBjb21wb25lbnRIZWlnaHQgPSBjb21wb25lbnQuaGVpZ2h0O1xuICAgICAgICAgICAgICAgIGNvbnN0IGRlbHRhWSA9ICh0aGlzLm1heEhlaWdodCAtIHRoaXMub2Zmc2V0U2Nyb2xsWSkgLSAoY29tcG9uZW50LnkgKyBjb21wb25lbnRIZWlnaHQpO1xuICAgICAgICAgICAgICAgIHRoaXMub2Zmc2V0U2Nyb2xsWSA9IC1kZWx0YVk7XG5cbiAgICAgICAgICAgICAgICB0aGlzLmNvbnRyb2xTY3JvbGxpbmcobnVsbCwgLWRlbHRhWSk7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIGNvbXBvbmVudC5zZWxlY3RlZCA9IGZhbHNlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICBcbiAgICAgICAgICBpZih0aGlzLnNlbGVjdGVkQ29tcG9uZW50ID09IGkgJiYgdGhpcy5sYXN0S2V5ID09IENvbnN0YW50cy5LZXkuRU5URVIgJiYgY29tcG9uZW50LnJlYWN0b3IgJiYgIWNvbXBvbmVudC5kaXNhYmxlZCkge1xuICAgICAgICAgICAgdGhpcy5sYXN0S2V5ID0gLTE7XG4gICAgICAgICAgICB0aGlzLnNlbGVjdGVkQ29tcG9uZW50ID0gMDtcbiAgICAgICAgICAgIGNvbXBvbmVudC5yZWFjdG9yLmRpc3BhdGNoRXZlbnQoXCJvbkNsaWNrXCIpO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfVxuICAgIFxuICAgIGN0eC5yZXN0b3JlKCk7XG4gICAgdGhpcy5sYXN0S2V5ID0gLTE7XG4gIH1cblxuICBkcmF3Q29tcG9uZW50cyhjdHgpIHtcbiAgICBzdXBlci5kcmF3KGN0eCk7XG4gIH1cblxuICBkcmF3Qmx1cihjdHgpIHtcbiAgICBVdGlscy5ibHVyQ2FudmFzKGN0eCwgNSk7XG4gIH1cblxuICBkcmF3QmFja2dyb3VuZChjdHgpIHtcbiAgICBjdHguZmlsbFN0eWxlID0gdGhpcy5zdHlsZS5iYWNrZ3JvdW5kQ29sb3I7XG4gICAgY3R4LmZpbGxSZWN0KHRoaXMucGFyZW50ID8gdGhpcy5wYXJlbnQueCA6IDAsIHRoaXMucGFyZW50ID8gdGhpcy5wYXJlbnQueSA6IDAsIHRoaXMubWF4V2lkdGgsIHRoaXMubWF4SGVpZ2h0KTtcbiAgfVxuXG4gIGRpc2FibGUoKSB7XG4gICAgc3VwZXIuZGlzYWJsZSgpO1xuICAgIHRoaXMuY29tcG9uZW50cy5mb3JFYWNoKGNvbXBvbmVudCA9PiBjb21wb25lbnQgJiYgY29tcG9uZW50LmRpc2FibGUgJiYgY29tcG9uZW50LmRpc2FibGUoKSk7XG4gIH1cblxuICBlbmFibGUoKSB7XG4gICAgc3VwZXIuZW5hYmxlKCk7XG4gICAgdGhpcy5jb21wb25lbnRzLmZvckVhY2goY29tcG9uZW50ID0+IGNvbXBvbmVudCAmJiBjb21wb25lbnQuZW5hYmxlICYmIGNvbXBvbmVudC5lbmFibGUoKSk7XG4gIH1cblxuICBzZWxlY3QoaW5kZXgpIHtcbiAgICB0aGlzLnNlbGVjdGVkQ29tcG9uZW50ID0gaW5kZXg7XG5cbiAgICBjb25zdCBzZWxlY3RhYmxlQ29tcG9uZW50cyA9IHRoaXMuY29tcG9uZW50cy5maWx0ZXIoY29tcG9uZW50ID0+IGNvbXBvbmVudC5zZWxlY3RhYmxlKTtcbiAgICBpZihzZWxlY3RhYmxlQ29tcG9uZW50cy5sZW5ndGggPD0gMCkgcmV0dXJuO1xuXG4gICAgaWYodGhpcy5zZWxlY3RlZENvbXBvbmVudCA+PSB0aGlzLmNvbXBvbmVudHMubGVuZ3RoKSB7XG4gICAgICB0aGlzLnNlbGVjdGVkQ29tcG9uZW50ID0gMDtcbiAgICB9IGVsc2UgaWYodGhpcy5zZWxlY3RlZENvbXBvbmVudCA8IDApIHtcbiAgICAgIHRoaXMuc2VsZWN0ZWRDb21wb25lbnQgPSB0aGlzLmNvbXBvbmVudHMubGVuZ3RoIC0gMTtcbiAgICB9XG5cbiAgICBpZih0aGlzLmNvbXBvbmVudHNbdGhpcy5zZWxlY3RlZENvbXBvbmVudF0gJiYgIXRoaXMuY29tcG9uZW50c1t0aGlzLnNlbGVjdGVkQ29tcG9uZW50XS5zZWxlY3RhYmxlKSB7XG4gICAgICBpZih0aGlzLmxhc3RLZXkgPT0gQ29uc3RhbnRzLktleS5VUCkge1xuICAgICAgICByZXR1cm4gdGhpcy5zZWxlY3QodGhpcy5zZWxlY3RlZENvbXBvbmVudCAtIDEpO1xuICAgICAgfSBlbHNlIGlmKHRoaXMubGFzdEtleSA9PSBDb25zdGFudHMuS2V5LkJPVFRPTSkge1xuICAgICAgICByZXR1cm4gdGhpcy5zZWxlY3QodGhpcy5zZWxlY3RlZENvbXBvbmVudCArIDEpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIGdldCBzY3JvbGxBcmVhU2l6ZVgoKSB7XG4gICAgcmV0dXJuIHRoaXMuaW5uZXJXaWR0aCAtIHRoaXMubWF4V2lkdGg7XG4gIH1cblxuICBnZXQgc2Nyb2xsQXJlYVNpemVZKCkge1xuICAgIHJldHVybiB0aGlzLmlubmVySGVpZ2h0IC0gdGhpcy5tYXhIZWlnaHQ7XG4gIH1cblxuICBnZXQgbWF4SGVpZ2h0KCkge1xuICAgIHJldHVybiBzdXBlci5tYXhIZWlnaHQgfHwgKHRoaXMuY2FudmFzICYmIHRoaXMuY2FudmFzLnNjZW5lICYmIHRoaXMuY2FudmFzLnNjZW5lLmhlaWdodCk7XG4gIH1cblxuICBnZXQgbWF4V2lkdGgoKSB7XG4gICAgcmV0dXJuICh0aGlzLmNhbnZhcyAmJiB0aGlzLmNhbnZhcy5zY2VuZSAmJiB0aGlzLmNhbnZhcy5zY2VuZS53aWR0aCk7XG4gIH1cblxuICBnZXQgbWluV2lkdGgoKSB7XG4gICAgcmV0dXJuIHRoaXMucGFyZW50ID8gdGhpcy5wYXJlbnQud2lkdGggOiAwO1xuICB9XG5cbiAgZ2V0IGRlZmF1bHRTdHlsZSgpIHtcbiAgICByZXR1cm4gbmV3IFN0eWxlKHtcbiAgICAgIFwiYmx1ckJhY2tncm91bmRcIjogQ29uc3RhbnRzLlNldHRpbmcuTUVOVV9ERUZBVUxUX0JMVVJfQkFDS0dST1VORCxcbiAgICAgIFwiYmFja2dyb3VuZENvbG9yXCI6IENvbnN0YW50cy5TZXR0aW5nLk1FTlVfREVGQVVMVF9CQUNLR1JPVU5ELFxuICAgICAgXCJ2ZXJ0aWNhbEFsaWduZW1lbnRcIjogQ29uc3RhbnRzLlZlcnRpY2FsQWxpZ25lbWVudC5DRU5URVIsXG4gICAgICBcInNjcm9sbFhEaXNhYmxlZFwiOiB0cnVlXG4gICAgfSk7XG4gIH1cblxuICBjb21wYXJlVG9Db21wb25lbnQob3RoZXJDb21wb25lbnQpIHtcbiAgICByZXR1cm4gb3RoZXJDb21wb25lbnQuY29tcGFyZVRvTWVudSh0aGlzKTtcbiAgfVxuXG4gIGNvbXBhcmVUb01lbnUob3RoZXJDb21wb25lbnQpIHtcbiAgICByZXR1cm4gMDtcbiAgfVxuXG4gIGNvbXBhcmVUb1Rvb2x0aXAob3RoZXJDb21wb25lbnQpIHtcbiAgICByZXR1cm4gLTE7XG4gIH1cblxuICBjb21wYXJlVG9Ob3RpZmljYXRpb24ob3RoZXJDb21wb25lbnQpIHtcbiAgICByZXR1cm4gMTtcbiAgfVxuXG4gIGdldCBoaWRkZW4oKSB7XG4gICAgcmV0dXJuIHN1cGVyLmhpZGRlbiB8fCB0aGlzLmRpc2FibGVkO1xuICB9XG5cbiAgc2V0IGhpZGRlbihoaWRkZW4pIHtcbiAgICBzdXBlci5oaWRkZW4gPSBoaWRkZW47XG4gICAgdGhpcy5kaXNhYmxlZCA9IGhpZGRlbjtcbiAgfVxuXG4gIGlzSW5zaWRlKHBvcykge1xuICAgIHJldHVybiAhdGhpcy5oaWRkZW47XG4gIH1cbn0iLCIvKlxuICogQ29weXJpZ2h0IChDKSAyMDIwIEVsaWFzdGlrIChlbGlhc3Rpa3NvZnRzLmNvbSlcbiAqXG4gKiBUaGlzIGZpbGUgaXMgcGFydCBvZiBcIkpTR2FtZVRvb2xzXCIuXG4gKlxuICogXCJKU0dhbWVUb29sc1wiIGlzIGZyZWUgc29mdHdhcmU6IHlvdSBjYW4gcmVkaXN0cmlidXRlIGl0IGFuZC9vciBtb2RpZnlcbiAqIGl0IHVuZGVyIHRoZSB0ZXJtcyBvZiB0aGUgR05VIEdlbmVyYWwgUHVibGljIExpY2Vuc2UgYXMgcHVibGlzaGVkIGJ5XG4gKiB0aGUgRnJlZSBTb2Z0d2FyZSBGb3VuZGF0aW9uLCBlaXRoZXIgdmVyc2lvbiAzIG9mIHRoZSBMaWNlbnNlLCBvclxuICogKGF0IHlvdXIgb3B0aW9uKSBhbnkgbGF0ZXIgdmVyc2lvbi5cbiAqXG4gKiBcIkpTR2FtZVRvb2xzXCIgaXMgZGlzdHJpYnV0ZWQgaW4gdGhlIGhvcGUgdGhhdCBpdCB3aWxsIGJlIHVzZWZ1bCxcbiAqIGJ1dCBXSVRIT1VUIEFOWSBXQVJSQU5UWTsgd2l0aG91dCBldmVuIHRoZSBpbXBsaWVkIHdhcnJhbnR5IG9mXG4gKiBNRVJDSEFOVEFCSUxJVFkgb3IgRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UuICBTZWUgdGhlXG4gKiBHTlUgR2VuZXJhbCBQdWJsaWMgTGljZW5zZSBmb3IgbW9yZSBkZXRhaWxzLlxuICpcbiAqIFlvdSBzaG91bGQgaGF2ZSByZWNlaXZlZCBhIGNvcHkgb2YgdGhlIEdOVSBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlXG4gKiBhbG9uZyB3aXRoIFwiSlNHYW1lVG9vbHNcIi4gIElmIG5vdCwgc2VlIDxodHRwOi8vd3d3LmdudS5vcmcvbGljZW5zZXMvPi5cbiAqL1xuaW1wb3J0IENvbnN0YW50cyBmcm9tIFwiLi9Db25zdGFudHNcIjtcbmltcG9ydCBDb2wgZnJvbSBcIi4vQ29sXCI7XG5pbXBvcnQgQnV0dG9uIGZyb20gXCIuL0J1dHRvblwiO1xuaW1wb3J0IENyb3NzIGZyb20gXCIuL0Nyb3NzXCI7XG5pbXBvcnQgU3R5bGUgZnJvbSBcIi4vU3R5bGVcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTm90aWZpY2F0aW9uTWVzc2FnZSBleHRlbmRzIENvbCB7XG4gIHNlbGVjdGFibGUgPSBmYWxzZTtcblxuICBjb25zdHJ1Y3RvcihzdHlsZSwgZGVsYXlCZWZvcmVDbG9zaW5nLCBlYXNpbmdGdW5jdGlvbiwgLi4uY29tcG9uZW50cykge1xuICAgIHN1cGVyKDAsIDAsIG51bGwsIG51bGwsIHN0eWxlLCAuLi5jb21wb25lbnRzKTtcblxuICAgIHRoaXMuZGVsYXlCZWZvcmVDbG9zaW5nID0gZGVsYXlCZWZvcmVDbG9zaW5nID09IHVuZGVmaW5lZCA/IDUgOiBkZWxheUJlZm9yZUNsb3Npbmc7IC8vIHNlY29uZFxuICAgIHRoaXMudGltZUxhc3RGcmFtZSA9IDA7XG4gICAgdGhpcy5hbmltYXRpb25UaW1lID0gMDtcbiAgICB0aGlzLmNsb3NlZCA9IHRydWU7XG4gICAgdGhpcy5jbG9zaW5nID0gZmFsc2U7XG4gICAgdGhpcy5lYXNpbmdGdW5jdGlvbiA9IGVhc2luZ0Z1bmN0aW9uO1xuXG4gICAgdGhpcy5jbG9zZUJ1dHRvbiA9IG5ldyBCdXR0b24obnVsbCwgbnVsbCwgbnVsbCwgbnVsbCwgbmV3IFN0eWxlKHtcImFsaWduZW1lbnRcIjogQ29uc3RhbnRzLkFsaWduZW1lbnQuUklHSFQsIFwidmVydGljYWxBbGlnbmVtZW50XCI6IENvbnN0YW50cy5WZXJ0aWNhbEFsaWduZW1lbnQuVE9QLCBcInBhZGRpbmdcIjogMTAgfSksIG5ldyBDcm9zcyhudWxsLCBudWxsLCAxMCwgMTApKTtcbiAgICB0aGlzLmFkZCh0aGlzLmNsb3NlQnV0dG9uKTtcbiAgfVxuICBcbiAgZHJhdyhjb250ZXh0KSB7XG4gICAgaWYodGhpcy5oaWRkZW4pIHJldHVybjtcbiAgICB0aGlzLmNsb3NlQnV0dG9uLmNhbnZhcyA9IHRoaXMuY2FudmFzO1xuXG4gICAgY29uc3QgY2FudmFzID0gY29udGV4dC5jYW52YXM7XG4gICAgY29uc3QgY3R4ID0gY2FudmFzLmdldENvbnRleHQoXCIyZFwiKTtcblxuICAgIGN0eC5zYXZlKCk7XG5cbiAgICBpZighdGhpcy5pbml0KSB7XG4gICAgICB0aGlzLnRpbWVMYXN0RnJhbWUgPSBwZXJmb3JtYW5jZS5ub3coKTtcbiAgICB9XG4gICAgXG4gICAgaWYodGhpcy5jbG9zZUJ1dHRvbiAhPSBudWxsKSB7XG4gICAgICB0aGlzLmNsb3NlQnV0dG9uLnNldENsaWNrQWN0aW9uKCgpID0+IHtcbiAgICAgICAgdGhpcy5jbG9zZSgpO1xuICAgICAgfSk7XG4gICAgfVxuXG4gICAgY29uc3Qgb2Zmc2V0VGltZSA9IHBlcmZvcm1hbmNlLm5vdygpIC0gdGhpcy50aW1lTGFzdEZyYW1lO1xuICAgIHRoaXMudGltZUxhc3RGcmFtZSA9IHBlcmZvcm1hbmNlLm5vdygpO1xuXG4gICAgaWYodGhpcy5hbmltYXRpb25UaW1lID49IHRoaXMuZGVsYXlCZWZvcmVDbG9zaW5nICogMTAwMCAmJiAhdGhpcy5jbG9zaW5nICYmICF0aGlzLmNsb3NlZCkge1xuICAgICAgdGhpcy5jbG9zZSgpO1xuICAgIH1cblxuICAgIGlmKCF0aGlzLmNsb3NpbmcpIHtcbiAgICAgIHRoaXMuYW5pbWF0aW9uVGltZSArPSBvZmZzZXRUaW1lO1xuICAgIH0gZWxzZSB7XG4gICAgICBpZih0aGlzLnN0eWxlLmRpc2FibGVBbmltYXRpb24pIHtcbiAgICAgICAgdGhpcy5hbmltYXRpb25UaW1lID0gLTE7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLmFuaW1hdGlvblRpbWUgLT0gb2Zmc2V0VGltZTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZih0aGlzLmFuaW1hdGlvblRpbWUgPCAwKSB7XG4gICAgICB0aGlzLmNsb3NlZCA9IHRydWU7XG4gICAgICB0aGlzLmNsb3NpbmcgPSBmYWxzZTtcbiAgICB9XG5cbiAgICBpZighdGhpcy5jbG9zZWQpIHtcbiAgICAgIHRoaXMuZHJhd0NvbXBvbmVudHMoY3R4KTtcblxuICAgICAgaWYodGhpcy5jbG9zZUJ1dHRvbiAhPSBudWxsKSB7XG4gICAgICAgIHRoaXMuY2xvc2VCdXR0b24ueSA9IHRoaXMueSArIHRoaXMuc3R5bGUucGFkZGluZyAvIDI7XG4gICAgICAgIHRoaXMuY2xvc2VCdXR0b24uZHJhdyhjdHgpO1xuICAgICAgfVxuXG4gICAgICB0aGlzLmVuYWJsZUNsb3NlQnV0dG9uKCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuZGlzYWJsZUNsb3NlQnV0dG9uKCk7XG4gICAgfVxuXG4gICAgY3R4LnJlc3RvcmUoKTtcblxuICAgIHRoaXMuaW5pdCA9IHRydWU7XG4gIH1cbiAgXG4gIGdldCBvZmZzZXRZKCkge1xuICAgIGxldCBvZmZzZXRZID0gMTtcblxuICAgIGlmKCF0aGlzLnN0eWxlLmRpc2FibGVBbmltYXRpb24pIHtcbiAgICAgIG9mZnNldFkgPSB0aGlzLmFuaW1hdGlvblRpbWUgLyB0aGlzLnN0eWxlLmFuaW1hdGlvbkR1cmF0aW9uO1xuXG4gICAgICBpZih0aGlzLmVhc2luZ0Z1bmN0aW9uKSB7XG4gICAgICAgIG9mZnNldFkgPSB0aGlzLmVhc2luZ0Z1bmN0aW9uKG9mZnNldFkpO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBvZmZzZXRZO1xuICB9XG5cbiAgZ2V0IHkoKSB7XG4gICAgY29uc3Qgb2Zmc2V0WSA9IHRoaXMub2Zmc2V0WTtcblxuICAgIGlmKHRoaXMuc3R5bGUudmVydGljYWxBbGlnbmVtZW50ID09IENvbnN0YW50cy5WZXJ0aWNhbEFsaWduZW1lbnQuVE9QKSB7XG4gICAgICByZXR1cm4gKHRoaXMuaGVpZ2h0ICogKG9mZnNldFkgPD0gMSA/IG9mZnNldFkgOiAxKSkgLSB0aGlzLmhlaWdodDtcbiAgICB9IFxuICAgIFxuICAgIHJldHVybiB0aGlzLmNhbnZhcy5zY2VuZS5oZWlnaHQgLSAodGhpcy5oZWlnaHQgKiAob2Zmc2V0WSA8PSAxID8gb2Zmc2V0WSA6IDEpKTtcbiAgfVxuXG4gIHNldCB5KHkpIHtcbiAgICBzdXBlci55ID0geTtcbiAgfVxuXG4gIGRyYXdDb21wb25lbnRzKGN0eCkge1xuICAgIHN1cGVyLmRyYXcoY3R4KTtcbiAgfVxuXG4gIGNsb3NlKCkge1xuICAgIHRoaXMuZGlzYWJsZUNsb3NlQnV0dG9uKCk7XG4gIFxuICAgIGlmKCF0aGlzLmNsb3NpbmcpIHtcbiAgICAgIHRoaXMuY2xvc2luZyA9IHRydWU7XG4gICAgICB0aGlzLmFuaW1hdGlvblRpbWUgPSB0aGlzLnN0eWxlLmFuaW1hdGlvbkR1cmF0aW9uO1xuICAgIH1cbiAgfVxuICBcbiAgb3BlbigpIHtcbiAgICB0aGlzLnRpbWVMYXN0RnJhbWUgPSAwO1xuICAgIHRoaXMuYW5pbWF0aW9uVGltZSA9IDA7XG4gICAgdGhpcy5pbml0ID0gZmFsc2U7XG4gICAgdGhpcy5jbG9zZWQgPSBmYWxzZTtcbiAgICB0aGlzLmNsb3NpbmcgPSBmYWxzZTtcbiAgfVxuICBcbiAgZGlzYWJsZUNsb3NlQnV0dG9uKCkge1xuICAgIGlmKHRoaXMuY2xvc2VCdXR0b24gIT0gdW5kZWZpbmVkICYmIHRoaXMuY2xvc2VCdXR0b24gIT0gbnVsbCAmJiB0aGlzLmNsb3NlQnV0dG9uIGluc3RhbmNlb2YgQnV0dG9uKSB7XG4gICAgICB0aGlzLmNsb3NlQnV0dG9uLmRpc2FibGUoKTtcbiAgICB9XG4gIH1cbiAgXG4gIGVuYWJsZUNsb3NlQnV0dG9uKCkge1xuICAgIGlmKHRoaXMuY2xvc2VCdXR0b24gIT0gdW5kZWZpbmVkICYmIHRoaXMuY2xvc2VCdXR0b24gIT0gbnVsbCAmJiB0aGlzLmNsb3NlQnV0dG9uIGluc3RhbmNlb2YgQnV0dG9uKSB7XG4gICAgICB0aGlzLmNsb3NlQnV0dG9uLmVuYWJsZSgpO1xuICAgIH1cbiAgfTtcbiAgXG4gIGNvcHkoKSB7XG4gICAgcmV0dXJuIG5ldyBOb3RpZmljYXRpb25NZXNzYWdlKHRoaXMuc3R5bGUuY29weSgpLCB0aGlzLmRlbGF5QmVmb3JlQ2xvc2luZywgdGhpcy5lYXNpbmdGdW5jdGlvbiwgLi4udGhpcy5jb21wb25lbnRzKTtcbiAgfVxuXG4gIGdldCB3aWR0aCgpIHtcbiAgICByZXR1cm4gdGhpcy5jYW52YXMgJiYgdGhpcy5jYW52YXMuc2NlbmUgPyB0aGlzLmNhbnZhcy5zY2VuZS53aWR0aCA6IG51bGw7XG4gIH1cblxuICBnZXQgaGVpZ2h0KCkge1xuICAgIHJldHVybiBzdXBlci5oZWlnaHQgLSAodGhpcy5jbG9zZUJ1dHRvbiA/IHRoaXMuY2xvc2VCdXR0b24uaGVpZ2h0IDogMCk7XG4gIH1cblxuICBnZXQgZGVmYXVsdFN0eWxlKCkge1xuICAgIHJldHVybiBuZXcgU3R5bGUoe1xuICAgICAgXCJhbGlnbmVtZW50XCI6IENvbnN0YW50cy5BbGlnbmVtZW50LkNFTlRFUixcbiAgICAgIFwiYmFja2dyb3VuZENvbG9yXCI6IENvbnN0YW50cy5TZXR0aW5nLk5PVElGSUNBVElPTl9ERUZBVUxUX0JBQ0tHUk9VTkQsXG4gICAgICBcImFuaW1hdGlvbkR1cmF0aW9uXCI6IENvbnN0YW50cy5TZXR0aW5nLk5PVElGSUNBVElPTl9ERUZBVUxUX0FOSU1BVElPTl9EVVJBVElPTlxuICAgIH0pO1xuICB9XG5cbiAgZ2V0IGhpZGRlbigpIHtcbiAgICByZXR1cm4gc3VwZXIuaGlkZGVuIHx8IHRoaXMuY2xvc2VkO1xuICB9XG5cbiAgc2V0IGhpZGRlbihoaWRkZW4pIHtcbiAgICBzdXBlci5oaWRkZW4gPSBoaWRkZW47XG5cbiAgICBpZihoaWRkZW4pIHtcbiAgICAgIHRoaXMuZm9yY2VDbG9zZSgpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLm9wZW4oKTtcbiAgICB9XG4gIH1cblxuICBjb21wYXJlVG9Db21wb25lbnQob3RoZXJDb21wb25lbnQpIHtcbiAgICByZXR1cm4gb3RoZXJDb21wb25lbnQuY29tcGFyZVRvTm90aWZpY2F0aW9uKHRoaXMpO1xuICB9XG5cbiAgY29tcGFyZVRvVG9vbHRpcChvdGhlckNvbXBvbmVudCkge1xuICAgIHJldHVybiAtMTtcbiAgfVxuXG4gIGNvbXBhcmVUb05vdGlmaWNhdGlvbihvdGhlckNvbXBvbmVudCkge1xuICAgIHJldHVybiAwO1xuICB9XG5cbiAgY29tcGFyZVRvTWVudShvdGhlckNvbXBvbmVudCkge1xuICAgIHJldHVybiAtMTtcbiAgfVxufSIsIi8qXG4gKiBDb3B5cmlnaHQgKEMpIDIwMjAgRWxpYXN0aWsgKGVsaWFzdGlrc29mdHMuY29tKVxuICpcbiAqIFRoaXMgZmlsZSBpcyBwYXJ0IG9mIFwiSlNHYW1lVG9vbHNcIi5cbiAqXG4gKiBcIkpTR2FtZVRvb2xzXCIgaXMgZnJlZSBzb2Z0d2FyZTogeW91IGNhbiByZWRpc3RyaWJ1dGUgaXQgYW5kL29yIG1vZGlmeVxuICogaXQgdW5kZXIgdGhlIHRlcm1zIG9mIHRoZSBHTlUgR2VuZXJhbCBQdWJsaWMgTGljZW5zZSBhcyBwdWJsaXNoZWQgYnlcbiAqIHRoZSBGcmVlIFNvZnR3YXJlIEZvdW5kYXRpb24sIGVpdGhlciB2ZXJzaW9uIDMgb2YgdGhlIExpY2Vuc2UsIG9yXG4gKiAoYXQgeW91ciBvcHRpb24pIGFueSBsYXRlciB2ZXJzaW9uLlxuICpcbiAqIFwiSlNHYW1lVG9vbHNcIiBpcyBkaXN0cmlidXRlZCBpbiB0aGUgaG9wZSB0aGF0IGl0IHdpbGwgYmUgdXNlZnVsLFxuICogYnV0IFdJVEhPVVQgQU5ZIFdBUlJBTlRZOyB3aXRob3V0IGV2ZW4gdGhlIGltcGxpZWQgd2FycmFudHkgb2ZcbiAqIE1FUkNIQU5UQUJJTElUWSBvciBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRS4gIFNlZSB0aGVcbiAqIEdOVSBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlIGZvciBtb3JlIGRldGFpbHMuXG4gKlxuICogWW91IHNob3VsZCBoYXZlIHJlY2VpdmVkIGEgY29weSBvZiB0aGUgR05VIEdlbmVyYWwgUHVibGljIExpY2Vuc2VcbiAqIGFsb25nIHdpdGggXCJKU0dhbWVUb29sc1wiLiAgSWYgbm90LCBzZWUgPGh0dHA6Ly93d3cuZ251Lm9yZy9saWNlbnNlcy8+LlxuICovXG5pbXBvcnQgQm94IGZyb20gXCIuL0JveFwiO1xuaW1wb3J0IENvbnN0YW50cyBmcm9tIFwiLi9Db25zdGFudHNcIjtcbmltcG9ydCBTdHlsZSBmcm9tIFwiLi9TdHlsZVwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBQcm9ncmVzc0JhciBleHRlbmRzIEJveCB7XG4gICNwcmVjUGVyY2VudCA9IDA7XG4gIHNlbGVjdGFibGUgPSBmYWxzZTtcblxuICBjb25zdHJ1Y3Rvcih4LCB5LCB3aWR0aCwgaGVpZ2h0LCBzdHlsZSwgZGVmYXVsdFBlcmNlbnQsIGVhc2luZ0Z1bmN0aW9uKSB7XG4gICAgc3VwZXIoeCwgeSwgd2lkdGgsIGhlaWdodCwgc3R5bGUpO1xuXG4gICAgdGhpcy5wZXJjZW50ID0gZGVmYXVsdFBlcmNlbnQgPT0gdW5kZWZpbmVkID8gMCA6IGRlZmF1bHRQZXJjZW50O1xuICAgIHRoaXMuI3ByZWNQZXJjZW50ID0gdGhpcy5wZXJjZW50O1xuICAgIHRoaXMuZWFzaW5nRnVuY3Rpb24gPSBlYXNpbmdGdW5jdGlvbjtcblxuICAgIHRoaXMubGFzdFRpbWUgPSAwO1xuICAgIHRoaXMudG90YWxUaW1lID0gMDtcbiAgfVxuXG4gIGRyYXcoY29udGV4dCkge1xuICAgIGlmKHRoaXMuaGlkZGVuKSByZXR1cm47XG4gICAgc3VwZXIuZHJhdyhjb250ZXh0KTtcblxuICAgIGNvbnN0IGNhbnZhcyA9IGNvbnRleHQuY2FudmFzO1xuICAgIGNvbnN0IGN0eCA9IGNhbnZhcy5nZXRDb250ZXh0KFwiMmRcIik7XG4gICAgY3R4LnNhdmUoKTtcblxuICAgIGNvbnN0IHRpbWUgPSBwZXJmb3JtYW5jZS5ub3coKTtcbiAgICBsZXQgb2Zmc2V0VGltZSA9IDA7XG5cbiAgICBpZih0aGlzLiNwcmVjUGVyY2VudCAhPSB0aGlzLnBlcmNlbnQgJiYgIXRoaXMuc3R5bGUuZGlzYWJsZUFuaW1hdGlvbikge1xuICAgICAgaWYodGhpcy5sYXN0VGltZSA+IDApIG9mZnNldFRpbWUgPSB0aW1lIC0gdGhpcy5sYXN0VGltZTtcbiAgICAgIHRoaXMudG90YWxUaW1lICs9IG9mZnNldFRpbWU7XG5cbiAgICAgIGlmKHRoaXMudG90YWxUaW1lID49IHRoaXMuc3R5bGUuYW5pbWF0aW9uRHVyYXRpb24pIHtcbiAgICAgICAgdGhpcy4jcHJlY1BlcmNlbnQgPSB0aGlzLnBlcmNlbnQ7XG4gICAgICAgIHRoaXMudG90YWxUaW1lID0gMDtcbiAgICAgICAgdGhpcy5sYXN0VGltZSA9IDA7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLmxhc3RUaW1lID0gdGltZTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy50b3RhbFRpbWUgPSAwO1xuICAgICAgdGhpcy5sYXN0VGltZSA9IDA7XG4gICAgfVxuXG4gICAgdGhpcy5kcmF3QmFja2dyb3VuZChjdHgpO1xuICAgIHRoaXMuZHJhd0ZvcmVncm91bmQoY3R4LCB0aGlzLndpZHRoRm9yZWdyb3VuZCk7XG5cbiAgICBjdHgucmVzdG9yZSgpO1xuICB9XG5cbiAgZ2V0IGFuaW1hdGlvblBlcmNlbnQoKSB7XG4gICAgbGV0IGFuaW1hdGlvblBlcmNlbnQgPSAodGhpcy4jcHJlY1BlcmNlbnQgIT0gdGhpcy5wZXJjZW50ICYmICF0aGlzLnN0eWxlLmRpc2FibGVBbmltYXRpb24gPyB0aGlzLnRvdGFsVGltZSAvICh0aGlzLnN0eWxlLmFuaW1hdGlvbkR1cmF0aW9uKSA6IDEpO1xuXG4gICAgaWYodGhpcy5lYXNpbmdGdW5jdGlvbikge1xuICAgICAgYW5pbWF0aW9uUGVyY2VudCA9IHRoaXMuZWFzaW5nRnVuY3Rpb24oYW5pbWF0aW9uUGVyY2VudCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGFuaW1hdGlvblBlcmNlbnQ7XG4gIH1cblxuICBnZXQgd2lkdGhGb3JlZ3JvdW5kKCkge1xuICAgIHJldHVybiBNYXRoLm1heCgwLCBNYXRoLm1pbih0aGlzLndpZHRoLCB0aGlzLndpZHRoICogKHRoaXMuI3ByZWNQZXJjZW50ICsgKHRoaXMucGVyY2VudCAtIHRoaXMuI3ByZWNQZXJjZW50KSAqIHRoaXMuYW5pbWF0aW9uUGVyY2VudCkpKTtcbiAgfVxuXG4gIGRyYXdGb3JlZ3JvdW5kKGN0eCwgd2lkdGhGb3JlZ3JvdW5kKSB7XG4gICAgY3R4LnNhdmUoKTtcblxuICAgIGN0eC5maWxsU3R5bGUgPSB0aGlzLnN0eWxlLmZvcmVncm91bmRDb2xvcjtcbiAgICBjdHguZmlsbFJlY3QodGhpcy54LCB0aGlzLnksIHdpZHRoRm9yZWdyb3VuZCwgdGhpcy5oZWlnaHQpO1xuXG4gICAgY3R4LnJlc3RvcmUoKTtcbiAgfVxuXG4gIGdldCBkZWZhdWx0U3R5bGUoKSB7XG4gICAgcmV0dXJuIG5ldyBTdHlsZSh7XG4gICAgICBcImJhY2tncm91bmRDb2xvclwiOiBDb25zdGFudHMuU2V0dGluZy5QUk9HUkVTU19ERUZBVUxUX0JBQ0tHUk9VTkQsXG4gICAgICBcImZvcmVncm91bmRDb2xvclwiOiBDb25zdGFudHMuU2V0dGluZy5QUk9HUkVTU19ERUZBVUxUX0ZPUkVHUk9VTkQsXG4gICAgICBcImFuaW1hdGlvbkR1cmF0aW9uXCI6IENvbnN0YW50cy5TZXR0aW5nLlBST0dSRVNTX0RFRkFVTFRfQU5JTUFUSU9OX0RVUkFUSU9OXG4gICAgfSk7XG4gIH1cbn0iLCIvKlxuICogQ29weXJpZ2h0IChDKSAyMDIwIEVsaWFzdGlrIChlbGlhc3Rpa3NvZnRzLmNvbSlcbiAqXG4gKiBUaGlzIGZpbGUgaXMgcGFydCBvZiBcIkpTR2FtZVRvb2xzXCIuXG4gKlxuICogXCJKU0dhbWVUb29sc1wiIGlzIGZyZWUgc29mdHdhcmU6IHlvdSBjYW4gcmVkaXN0cmlidXRlIGl0IGFuZC9vciBtb2RpZnlcbiAqIGl0IHVuZGVyIHRoZSB0ZXJtcyBvZiB0aGUgR05VIEdlbmVyYWwgUHVibGljIExpY2Vuc2UgYXMgcHVibGlzaGVkIGJ5XG4gKiB0aGUgRnJlZSBTb2Z0d2FyZSBGb3VuZGF0aW9uLCBlaXRoZXIgdmVyc2lvbiAzIG9mIHRoZSBMaWNlbnNlLCBvclxuICogKGF0IHlvdXIgb3B0aW9uKSBhbnkgbGF0ZXIgdmVyc2lvbi5cbiAqXG4gKiBcIkpTR2FtZVRvb2xzXCIgaXMgZGlzdHJpYnV0ZWQgaW4gdGhlIGhvcGUgdGhhdCBpdCB3aWxsIGJlIHVzZWZ1bCxcbiAqIGJ1dCBXSVRIT1VUIEFOWSBXQVJSQU5UWTsgd2l0aG91dCBldmVuIHRoZSBpbXBsaWVkIHdhcnJhbnR5IG9mXG4gKiBNRVJDSEFOVEFCSUxJVFkgb3IgRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UuICBTZWUgdGhlXG4gKiBHTlUgR2VuZXJhbCBQdWJsaWMgTGljZW5zZSBmb3IgbW9yZSBkZXRhaWxzLlxuICpcbiAqIFlvdSBzaG91bGQgaGF2ZSByZWNlaXZlZCBhIGNvcHkgb2YgdGhlIEdOVSBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlXG4gKiBhbG9uZyB3aXRoIFwiSlNHYW1lVG9vbHNcIi4gIElmIG5vdCwgc2VlIDxodHRwOi8vd3d3LmdudS5vcmcvbGljZW5zZXMvPi5cbiAqL1xuaW1wb3J0IEV2ZW50IGZyb20gXCIuL0V2ZW50XCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFJlYWN0b3Ige1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICB0aGlzLmV2ZW50cyA9IHt9O1xuICB9XG5cbiAgcmVnaXN0ZXJFdmVudChldmVudE5hbWUpIHtcbiAgICB0aGlzLmV2ZW50c1tldmVudE5hbWVdID0gbmV3IEV2ZW50KGV2ZW50TmFtZSk7XG4gIH1cblxuICBkaXNwYXRjaEV2ZW50KGV2ZW50TmFtZSwgLi4uZXZlbnRBcmdzKSB7XG4gICAgaWYodGhpcy5ldmVudHNbZXZlbnROYW1lXSkge1xuICAgICAgY29uc3QgY2FsbGJhY2tzID0gdGhpcy5ldmVudHNbZXZlbnROYW1lXS5jYWxsYmFja3M7XG4gICAgICBjYWxsYmFja3MuZm9yRWFjaChjYWxsYmFjayA9PiBjYWxsYmFjayAmJiBjYWxsYmFjayguLi5ldmVudEFyZ3MpKTtcbiAgICB9XG4gIH1cblxuICBhZGRFdmVudExpc3RlbmVyKGV2ZW50TmFtZSwgY2FsbGJhY2spIHtcbiAgICBpZih0aGlzLmV2ZW50c1tldmVudE5hbWVdKSB0aGlzLmV2ZW50c1tldmVudE5hbWVdLnJlZ2lzdGVyQ2FsbGJhY2soY2FsbGJhY2spO1xuICB9XG5cbiAgcmVtb3ZlRXZlbnRMaXN0ZW5lcihldmVudE5hbWUsIGNhbGxiYWNrKSB7XG4gICAgaWYodGhpcy5ldmVudHNbZXZlbnROYW1lXSkgdGhpcy5ldmVudHNbZXZlbnROYW1lXS5yZW1vdmVDYWxsYmFjayhjYWxsYmFjayk7XG4gIH1cblxuICByZW1vdmVBbGxFdmVudExpc3RlbmVyKGV2ZW50TmFtZSkge1xuICAgIGlmKHRoaXMuZXZlbnRzW2V2ZW50TmFtZV0pIHRoaXMuZXZlbnRzW2V2ZW50TmFtZV0ucmVtb3ZlQWxsQ2FsbGJhY2tzKCk7XG4gIH1cbn0iLCIvKlxuICogQ29weXJpZ2h0IChDKSAyMDIwIEVsaWFzdGlrIChlbGlhc3Rpa3NvZnRzLmNvbSlcbiAqXG4gKiBUaGlzIGZpbGUgaXMgcGFydCBvZiBcIkpTR2FtZVRvb2xzXCIuXG4gKlxuICogXCJKU0dhbWVUb29sc1wiIGlzIGZyZWUgc29mdHdhcmU6IHlvdSBjYW4gcmVkaXN0cmlidXRlIGl0IGFuZC9vciBtb2RpZnlcbiAqIGl0IHVuZGVyIHRoZSB0ZXJtcyBvZiB0aGUgR05VIEdlbmVyYWwgUHVibGljIExpY2Vuc2UgYXMgcHVibGlzaGVkIGJ5XG4gKiB0aGUgRnJlZSBTb2Z0d2FyZSBGb3VuZGF0aW9uLCBlaXRoZXIgdmVyc2lvbiAzIG9mIHRoZSBMaWNlbnNlLCBvclxuICogKGF0IHlvdXIgb3B0aW9uKSBhbnkgbGF0ZXIgdmVyc2lvbi5cbiAqXG4gKiBcIkpTR2FtZVRvb2xzXCIgaXMgZGlzdHJpYnV0ZWQgaW4gdGhlIGhvcGUgdGhhdCBpdCB3aWxsIGJlIHVzZWZ1bCxcbiAqIGJ1dCBXSVRIT1VUIEFOWSBXQVJSQU5UWTsgd2l0aG91dCBldmVuIHRoZSBpbXBsaWVkIHdhcnJhbnR5IG9mXG4gKiBNRVJDSEFOVEFCSUxJVFkgb3IgRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UuICBTZWUgdGhlXG4gKiBHTlUgR2VuZXJhbCBQdWJsaWMgTGljZW5zZSBmb3IgbW9yZSBkZXRhaWxzLlxuICpcbiAqIFlvdSBzaG91bGQgaGF2ZSByZWNlaXZlZCBhIGNvcHkgb2YgdGhlIEdOVSBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlXG4gKiBhbG9uZyB3aXRoIFwiSlNHYW1lVG9vbHNcIi4gIElmIG5vdCwgc2VlIDxodHRwOi8vd3d3LmdudS5vcmcvbGljZW5zZXMvPi5cbiAqL1xuaW1wb3J0IFJlYWN0b3IgZnJvbSBcIi4vUmVhY3RvclwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBSZWFjdG9yQ2FudmFzIGV4dGVuZHMgUmVhY3RvciB7XG4gIHJlZ2lzdGVyRXZlbnQoZXZlbnROYW1lKSB7XG4gICAgaWYoIXRoaXMuZXZlbnRzW2V2ZW50TmFtZV0pIHRoaXMuZXZlbnRzW2V2ZW50TmFtZV0gPSBbXTtcbiAgfVxuXG4gIGRpc3BhdGNoRXZlbnQoZXZlbnROYW1lLCAuLi5ldmVudEFyZ3MpIHtcbiAgICBpZih0aGlzLmV2ZW50c1tldmVudE5hbWVdKSB7XG4gICAgICBjb25zdCBldmVudHMgPSB0aGlzLmV2ZW50c1tldmVudE5hbWVdO1xuICAgICAgZXZlbnRzLmZvckVhY2goZXZlbnQgPT4gZXZlbnQgJiYgZXZlbnQuY2FsbGJhY2sgJiYgZXZlbnQuY2FsbGJhY2soLi4uZXZlbnRBcmdzKSk7XG4gICAgfVxuICB9XG5cbiAgZGlzcGF0Y2hFdmVudENvbXBvbmVudChldmVudE5hbWUsIGNvbXBvbmVudCwgLi4uZXZlbnRBcmdzKSB7XG4gICAgaWYodGhpcy5ldmVudHNbZXZlbnROYW1lXSkge1xuICAgICAgY29uc3QgZXZlbnRzID0gdGhpcy5ldmVudHNbZXZlbnROYW1lXTtcbiAgICAgIGV2ZW50cy5mb3JFYWNoKGV2ZW50ID0+IGV2ZW50ICYmIGV2ZW50LmNhbGxiYWNrICYmIGV2ZW50LmNvbXBvbmVudCA9PSBjb21wb25lbnQgJiYgZXZlbnQuY2FsbGJhY2soLi4uZXZlbnRBcmdzKSk7XG4gICAgfVxuICB9XG5cbiAgYWRkRXZlbnRMaXN0ZW5lcihldmVudE5hbWUsIGNvbXBvbmVudCwgY2FsbGJhY2spIHtcbiAgICBpZih0aGlzLmV2ZW50c1tldmVudE5hbWVdKSB7XG4gICAgICB0aGlzLmV2ZW50c1tldmVudE5hbWVdLnB1c2goe1xuICAgICAgICBcImNvbXBvbmVudFwiOiBjb21wb25lbnQsXG4gICAgICAgIFwiY2FsbGJhY2tcIjogY2FsbGJhY2tcbiAgICAgIH0pO1xuICAgIH1cbiAgfVxuXG4gIHJlbW92ZUV2ZW50TGlzdGVuZXIoZXZlbnROYW1lLCBjYWxsYmFjaykge1xuICAgIGlmKHRoaXMuZXZlbnRzW2V2ZW50TmFtZV0pIHRoaXMuZXZlbnRzW2V2ZW50TmFtZV0uZmlsdGVyKGV2ZW50ID0+IGV2ZW50ICYmIGV2ZW50LmNhbGxiYWNrICE9IGNhbGxiYWNrKTtcbiAgfVxuXG4gIHJlbW92ZUV2ZW50TGlzdGVuZXJDb21wb25lbnQoZXZlbnROYW1lLCBjb21wb25lbnQpIHtcbiAgICBpZih0aGlzLmV2ZW50c1tldmVudE5hbWVdKSB0aGlzLmV2ZW50c1tldmVudE5hbWVdLmZpbHRlcihldmVudCA9PiBldmVudCAmJiBldmVudC5jb21wb25lbnQgIT0gY29tcG9uZW50KTtcbiAgfVxuXG4gIHJlbW92ZUFsbEV2ZW50TGlzdGVuZXIoKSB7XG4gICAgdGhpcy5ldmVudHMgPSBbXTtcbiAgfVxufSIsIi8qXG4gKiBDb3B5cmlnaHQgKEMpIDIwMjAgRWxpYXN0aWsgKGVsaWFzdGlrc29mdHMuY29tKVxuICpcbiAqIFRoaXMgZmlsZSBpcyBwYXJ0IG9mIFwiSlNHYW1lVG9vbHNcIi5cbiAqXG4gKiBcIkpTR2FtZVRvb2xzXCIgaXMgZnJlZSBzb2Z0d2FyZTogeW91IGNhbiByZWRpc3RyaWJ1dGUgaXQgYW5kL29yIG1vZGlmeVxuICogaXQgdW5kZXIgdGhlIHRlcm1zIG9mIHRoZSBHTlUgR2VuZXJhbCBQdWJsaWMgTGljZW5zZSBhcyBwdWJsaXNoZWQgYnlcbiAqIHRoZSBGcmVlIFNvZnR3YXJlIEZvdW5kYXRpb24sIGVpdGhlciB2ZXJzaW9uIDMgb2YgdGhlIExpY2Vuc2UsIG9yXG4gKiAoYXQgeW91ciBvcHRpb24pIGFueSBsYXRlciB2ZXJzaW9uLlxuICpcbiAqIFwiSlNHYW1lVG9vbHNcIiBpcyBkaXN0cmlidXRlZCBpbiB0aGUgaG9wZSB0aGF0IGl0IHdpbGwgYmUgdXNlZnVsLFxuICogYnV0IFdJVEhPVVQgQU5ZIFdBUlJBTlRZOyB3aXRob3V0IGV2ZW4gdGhlIGltcGxpZWQgd2FycmFudHkgb2ZcbiAqIE1FUkNIQU5UQUJJTElUWSBvciBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRS4gIFNlZSB0aGVcbiAqIEdOVSBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlIGZvciBtb3JlIGRldGFpbHMuXG4gKlxuICogWW91IHNob3VsZCBoYXZlIHJlY2VpdmVkIGEgY29weSBvZiB0aGUgR05VIEdlbmVyYWwgUHVibGljIExpY2Vuc2VcbiAqIGFsb25nIHdpdGggXCJKU0dhbWVUb29sc1wiLiAgSWYgbm90LCBzZWUgPGh0dHA6Ly93d3cuZ251Lm9yZy9saWNlbnNlcy8+LlxuICovXG5pbXBvcnQgQ29tcG9uZW50IGZyb20gXCIuL0NvbXBvbmVudFwiO1xuaW1wb3J0IENvbnRhaW5lciBmcm9tIFwiLi9Db250YWluZXJcIjtcbmltcG9ydCBVdGlscyBmcm9tIFwiLi9VdGlsc1wiO1xuaW1wb3J0IENvbnN0YW50cyBmcm9tIFwiLi9Db25zdGFudHNcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUm93IGV4dGVuZHMgQ29udGFpbmVyIHtcbiAgc2VsZWN0YWJsZSA9IGZhbHNlO1xuICAjX2lubmVySGVpZ2h0ID0gMDtcbiAgI19pbm5lcldpZHRoID0gMDtcblxuICBjb25zdHJ1Y3Rvcih4LCB5LCBtYXhXaWR0aCwgbWF4SGVpZ2h0LCBzdHlsZSwgLi4uY29tcG9uZW50cykge1xuICAgIHN1cGVyKHgsIHksIG1heFdpZHRoLCBtYXhIZWlnaHQsIHN0eWxlLCAuLi5jb21wb25lbnRzKTtcblxuICAgIGlmKCFDb25zdGFudHMuU2V0dGluZy5ESVNBQkxFX0VYUEVSSU1FTlRBTF9PUFRJTUlaQVRJT05TKSB7XG4gICAgICB0aGlzLnVwZGF0ZUlubmVyV2lkdGgoKTtcbiAgICAgIHRoaXMudXBkYXRlSW5uZXJIZWlnaHQoKTtcbiAgXG4gICAgICB0aGlzLmFkZENoYW5nZUFjdGlvbigoKSA9PiB7XG4gICAgICAgIHRoaXMudXBkYXRlSW5uZXJXaWR0aCgpO1xuICAgICAgICB0aGlzLnVwZGF0ZUlubmVySGVpZ2h0KCk7XG4gICAgICB9KTtcbiAgICB9XG4gIH1cblxuICBkcmF3KGNvbnRleHQpIHtcbiAgICBpZih0aGlzLmhpZGRlbikgcmV0dXJuO1xuICAgIHN1cGVyLmRyYXcoY29udGV4dCk7XG5cbiAgICBjb25zdCBjYW52YXMgPSBjb250ZXh0LmNhbnZhcztcbiAgICBjb25zdCBjdHggPSBjYW52YXMuZ2V0Q29udGV4dChcIjJkXCIpO1xuICAgIGN0eC5zYXZlKCk7XG5cbiAgICBsZXQgY3R4VGVtcCA9IGN0eDtcbiAgICBcbiAgICBpZih0aGlzLmlzQ3V0dGluZykge1xuICAgICAgY3R4VGVtcCA9IHRoaXMuY2FudmFzVG1wLmdldENvbnRleHQoXCIyZFwiKTtcbiAgICAgIGN0eFRlbXAuc2NhbGUoQ29uc3RhbnRzLlNldHRpbmcuUElYRUxfUkFUSU8sIENvbnN0YW50cy5TZXR0aW5nLlBJWEVMX1JBVElPKTtcbiAgICB9XG4gIFxuICAgIGlmKHN1cGVyLmNvbXBvbmVudHMgIT0gbnVsbCkge1xuICAgICAgbGV0IGN1cnJlbnRYID0gdGhpcy5zdHlsZS5wYWRkaW5nO1xuXG4gICAgICBzdXBlci5jb21wb25lbnRzLmZvckVhY2goY29tcG9uZW50ID0+IHtcbiAgICAgICAgY3VycmVudFggPSB0aGlzLmRyYXdDb21wb25lbnQoY29tcG9uZW50LCBjdXJyZW50WCwgY3R4VGVtcCk7XG4gICAgICB9KTtcbiAgICB9XG4gICAgXG4gICAgaWYodGhpcy5pc0N1dHRpbmcpIHtcbiAgICAgIFV0aWxzLmRyYXdJbWFnZURhdGEoY3R4LCB0aGlzLmNhbnZhc1RtcCwgdGhpcy54LCB0aGlzLnksIHRoaXMud2lkdGgsIHRoaXMuaGVpZ2h0LCB0aGlzLnggKiBDb25zdGFudHMuU2V0dGluZy5QSVhFTF9SQVRJTywgdGhpcy55ICogQ29uc3RhbnRzLlNldHRpbmcuUElYRUxfUkFUSU8sIHRoaXMud2lkdGggKiBDb25zdGFudHMuU2V0dGluZy5QSVhFTF9SQVRJTywgdGhpcy5oZWlnaHQgKiBDb25zdGFudHMuU2V0dGluZy5QSVhFTF9SQVRJTyk7XG4gICAgfVxuXG4gICAgc3VwZXIuZHJhd1Njcm9sbGJhcnMoY3R4KTtcblxuICAgIGN0eC5yZXN0b3JlKCk7XG4gIH1cblxuICBkcmF3Q29tcG9uZW50KGNvbXBvbmVudCwgY3VycmVudFgsIGN0eCkge1xuICAgIGlmKGNvbXBvbmVudCBpbnN0YW5jZW9mIENvbXBvbmVudCkge1xuICAgICAgY29tcG9uZW50LnggPSBjdXJyZW50WCAtIHRoaXMub2Zmc2V0U2Nyb2xsWDtcbiAgICAgIGNvbXBvbmVudC55ID0gdGhpcy5zdHlsZS5wYWRkaW5nIC0gdGhpcy5vZmZzZXRTY3JvbGxZO1xuICAgICAgXG4gICAgICBpZighY29tcG9uZW50LmhpZGRlbikge1xuICAgICAgICBpZih0aGlzLmlzQ29tcG9uZW50VmlzaWJsZShjb21wb25lbnQpKSB7XG4gICAgICAgICAgY29tcG9uZW50LmRyYXcoY3R4KTtcbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgY3VycmVudFggKz0gY29tcG9uZW50LndpZHRoICsgdGhpcy5zdHlsZS5zcGFjZUJldHdlZW5Db21wb25lbnRzO1xuICAgICAgfVxuICAgIH1cbiAgICBcbiAgICByZXR1cm4gY3VycmVudFg7XG4gIH1cblxuICB1cGRhdGVJbm5lckhlaWdodCgpIHtcbiAgICBsZXQgbWF4SGVpZ2h0ID0gMDtcbiAgICBzdXBlci5jb21wb25lbnRzLmZvckVhY2goY29tcG9uZW50ID0+IHsgaWYoY29tcG9uZW50LmhlaWdodCA+IG1heEhlaWdodCAmJiAhY29tcG9uZW50LmhpZGRlbikgbWF4SGVpZ2h0ID0gY29tcG9uZW50LmhlaWdodDsgfSk7XG4gICAgdGhpcy4jX2lubmVySGVpZ2h0ID0gbWF4SGVpZ2h0ICsgdGhpcy5zdHlsZS5wYWRkaW5nO1xuICB9XG5cbiAgdXBkYXRlSW5uZXJXaWR0aCgpIHtcbiAgICBsZXQgdG90YWxXaWR0aCA9IDA7XG4gICAgc3VwZXIuY29tcG9uZW50cy5mb3JFYWNoKGNvbXBvbmVudCA9PiB7IGlmKCFjb21wb25lbnQuaGlkZGVuKSB0b3RhbFdpZHRoICs9IGNvbXBvbmVudC53aWR0aCB9KTtcbiAgICB0aGlzLiNfaW5uZXJXaWR0aCA9IHRvdGFsV2lkdGggKyB0aGlzLnN0eWxlLnNwYWNlQmV0d2VlbkNvbXBvbmVudHMgKiAoc3VwZXIuY29tcG9uZW50cy5sZW5ndGggLSAxKSArIHRoaXMuc3R5bGUucGFkZGluZztcbiAgfVxuXG4gIGdldCBpbm5lckhlaWdodCgpIHtcbiAgICBpZihDb25zdGFudHMuU2V0dGluZy5ESVNBQkxFX0VYUEVSSU1FTlRBTF9PUFRJTUlaQVRJT05TKSB0aGlzLnVwZGF0ZUlubmVySGVpZ2h0KCk7XG4gICAgcmV0dXJuIHRoaXMuI19pbm5lckhlaWdodDtcbiAgfVxuXG4gIGdldCBpbm5lcldpZHRoKCkge1xuICAgIGlmKENvbnN0YW50cy5TZXR0aW5nLkRJU0FCTEVfRVhQRVJJTUVOVEFMX09QVElNSVpBVElPTlMpIHRoaXMudXBkYXRlSW5uZXJXaWR0aCgpO1xuICAgIHJldHVybiB0aGlzLiNfaW5uZXJXaWR0aDtcbiAgfVxuXG4gIGdldCB3aWR0aCgpIHtcbiAgICBjb25zdCB3aWR0aCA9IHRoaXMuaW5uZXJXaWR0aCB8fCAodGhpcy5wYXJlbnQgJiYgdGhpcy5wYXJlbnQud2lkdGgpO1xuICAgIGNvbnN0IG1pbiA9IHRoaXMubWF4V2lkdGggPyBNYXRoLm1pbih0aGlzLm1heFdpZHRoLCB3aWR0aCkgOiBudWxsO1xuICAgIHJldHVybiB0aGlzLm1pbldpZHRoID8gTWF0aC5tYXgodGhpcy5taW5XaWR0aCwgbWluIHx8IHdpZHRoKSA6IG1pbiB8fCB3aWR0aDtcbiAgfVxuXG4gIGdldCBoZWlnaHQoKSB7XG4gICAgY29uc3QgaGVpZ2h0ID0gdGhpcy5pbm5lckhlaWdodCB8fCAodGhpcy5wYXJlbnQgJiYgdGhpcy5wYXJlbnQuaGVpZ2h0KTtcbiAgICBjb25zdCBtaW4gPSB0aGlzLm1heEhlaWdodCA/IE1hdGgubWluKHRoaXMubWF4SGVpZ2h0LCBoZWlnaHQpIDogbnVsbDtcbiAgICByZXR1cm4gdGhpcy5taW5IZWlnaHQgPyBNYXRoLm1heCh0aGlzLm1pbkhlaWdodCwgbWluIHx8IGhlaWdodCkgOiBtaW4gfHwgaGVpZ2h0O1xuICB9XG5cbiAgZ2V0IGRlZmF1bHRTdHlsZSgpIHtcbiAgICByZXR1cm4gc3VwZXIuZGVmYXVsdFN0eWxlO1xuICB9XG59IiwiLypcbiAqIENvcHlyaWdodCAoQykgMjAyMCBFbGlhc3RpayAoZWxpYXN0aWtzb2Z0cy5jb20pXG4gKlxuICogVGhpcyBmaWxlIGlzIHBhcnQgb2YgXCJKU0dhbWVUb29sc1wiLlxuICpcbiAqIFwiSlNHYW1lVG9vbHNcIiBpcyBmcmVlIHNvZnR3YXJlOiB5b3UgY2FuIHJlZGlzdHJpYnV0ZSBpdCBhbmQvb3IgbW9kaWZ5XG4gKiBpdCB1bmRlciB0aGUgdGVybXMgb2YgdGhlIEdOVSBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlIGFzIHB1Ymxpc2hlZCBieVxuICogdGhlIEZyZWUgU29mdHdhcmUgRm91bmRhdGlvbiwgZWl0aGVyIHZlcnNpb24gMyBvZiB0aGUgTGljZW5zZSwgb3JcbiAqIChhdCB5b3VyIG9wdGlvbikgYW55IGxhdGVyIHZlcnNpb24uXG4gKlxuICogXCJKU0dhbWVUb29sc1wiIGlzIGRpc3RyaWJ1dGVkIGluIHRoZSBob3BlIHRoYXQgaXQgd2lsbCBiZSB1c2VmdWwsXG4gKiBidXQgV0lUSE9VVCBBTlkgV0FSUkFOVFk7IHdpdGhvdXQgZXZlbiB0aGUgaW1wbGllZCB3YXJyYW50eSBvZlxuICogTUVSQ0hBTlRBQklMSVRZIG9yIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFLiAgU2VlIHRoZVxuICogR05VIEdlbmVyYWwgUHVibGljIExpY2Vuc2UgZm9yIG1vcmUgZGV0YWlscy5cbiAqXG4gKiBZb3Ugc2hvdWxkIGhhdmUgcmVjZWl2ZWQgYSBjb3B5IG9mIHRoZSBHTlUgR2VuZXJhbCBQdWJsaWMgTGljZW5zZVxuICogYWxvbmcgd2l0aCBcIkpTR2FtZVRvb2xzXCIuICBJZiBub3QsIHNlZSA8aHR0cDovL3d3dy5nbnUub3JnL2xpY2Vuc2VzLz4uXG4gKi9cbmltcG9ydCBJbnB1dCBmcm9tIFwiLi9JbnB1dFwiO1xuaW1wb3J0IENvbnRhaW5lciBmcm9tIFwiLi9Db250YWluZXJcIjtcbmltcG9ydCBVdGlscyBmcm9tIFwiLi9VdGlsc1wiO1xuaW1wb3J0IFN0eWxlIGZyb20gXCIuL1N0eWxlXCI7XG5pbXBvcnQgQ29uc3RhbnRzIGZyb20gXCIuL0NvbnN0YW50c1wiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTY2VuZSBleHRlbmRzIENvbnRhaW5lciB7XG4gIHNlbGVjdGFibGUgPSBmYWxzZTtcbiAgZW5hYmxlRXZlbnRzID0gZmFsc2U7XG5cbiAgY29uc3RydWN0b3IoLi4uY29tcG9uZW50cykge1xuICAgIHN1cGVyKCk7XG4gICAgdGhpcy5hZGRBbGwoLi4uY29tcG9uZW50cyk7XG4gIH1cblxuICBkcmF3KGNvbnRleHQpIHtcbiAgICBpZih0aGlzLmhpZGRlbikgcmV0dXJuO1xuICAgIHN1cGVyLmRyYXcoY29udGV4dCk7XG5cbiAgICBjb25zdCBjYW52YXMgPSBjb250ZXh0LmNhbnZhcztcbiAgICBjb25zdCBjdHggPSBjYW52YXMuZ2V0Q29udGV4dChcIjJkXCIpO1xuICAgIGN0eC5zYXZlKCk7XG4gICAgY2FudmFzLnN0eWxlLmN1cnNvciA9IFwiZGVmYXVsdFwiO1xuXG4gICAgbGV0IGN0eFRlbXAgPSBjdHg7XG4gICAgaWYodGhpcy5tYXhXaWR0aCB8fCB0aGlzLm1heEhlaWdodCkgY3R4VGVtcCA9IHRoaXMuY2FudmFzVG1wLmdldENvbnRleHQoXCIyZFwiKTtcblxuICAgIHRoaXMuZHJhd0NvbXBvbmVudHMoY3R4VGVtcCk7IC8vIERyYXcgc29ydGVkIGNvbXBvbmVudHNcbiAgICBcbiAgICBpZih0aGlzLm1heFdpZHRoIHx8IHRoaXMubWF4SGVpZ2h0KSBVdGlscy5kcmF3SW1hZ2VEYXRhKGN0eCwgdGhpcy5jYW52YXNUbXAsIHRoaXMueCwgdGhpcy55LCB0aGlzLndpZHRoLCB0aGlzLmhlaWdodCwgdGhpcy54LCB0aGlzLnksIHRoaXMud2lkdGgsIHRoaXMuaGVpZ2h0KTtcbiAgICBzdXBlci5kcmF3U2Nyb2xsYmFycyhjdHgpO1xuXG4gICAgY3R4LnJlc3RvcmUoKTtcbiAgfVxuXG4gIGRyYXdDb21wb25lbnRzKGN0eCkge1xuICAgIHRoaXMuY29tcG9uZW50cy5zb3J0KFNjZW5lLmNvbXBhcmVDb21wb25lbnRzKS5mb3JFYWNoKGNvbXBvbmVudCA9PiBjb21wb25lbnQuZHJhdyhjdHgpKTtcbiAgfVxuXG4gIGdldCBkZWZhdWx0U3R5bGUoKSB7XG4gICAgcmV0dXJuIG5ldyBTdHlsZSh7XG4gICAgICBcInBhZGRpbmdcIjogQ29uc3RhbnRzLlNldHRpbmcuREVGQVVMVF9QQURESU5HXG4gICAgfSk7XG4gIH1cbn0iLCIvKlxuICogQ29weXJpZ2h0IChDKSAyMDIwIEVsaWFzdGlrIChlbGlhc3Rpa3NvZnRzLmNvbSlcbiAqXG4gKiBUaGlzIGZpbGUgaXMgcGFydCBvZiBcIkpTR2FtZVRvb2xzXCIuXG4gKlxuICogXCJKU0dhbWVUb29sc1wiIGlzIGZyZWUgc29mdHdhcmU6IHlvdSBjYW4gcmVkaXN0cmlidXRlIGl0IGFuZC9vciBtb2RpZnlcbiAqIGl0IHVuZGVyIHRoZSB0ZXJtcyBvZiB0aGUgR05VIEdlbmVyYWwgUHVibGljIExpY2Vuc2UgYXMgcHVibGlzaGVkIGJ5XG4gKiB0aGUgRnJlZSBTb2Z0d2FyZSBGb3VuZGF0aW9uLCBlaXRoZXIgdmVyc2lvbiAzIG9mIHRoZSBMaWNlbnNlLCBvclxuICogKGF0IHlvdXIgb3B0aW9uKSBhbnkgbGF0ZXIgdmVyc2lvbi5cbiAqXG4gKiBcIkpTR2FtZVRvb2xzXCIgaXMgZGlzdHJpYnV0ZWQgaW4gdGhlIGhvcGUgdGhhdCBpdCB3aWxsIGJlIHVzZWZ1bCxcbiAqIGJ1dCBXSVRIT1VUIEFOWSBXQVJSQU5UWTsgd2l0aG91dCBldmVuIHRoZSBpbXBsaWVkIHdhcnJhbnR5IG9mXG4gKiBNRVJDSEFOVEFCSUxJVFkgb3IgRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UuICBTZWUgdGhlXG4gKiBHTlUgR2VuZXJhbCBQdWJsaWMgTGljZW5zZSBmb3IgbW9yZSBkZXRhaWxzLlxuICpcbiAqIFlvdSBzaG91bGQgaGF2ZSByZWNlaXZlZCBhIGNvcHkgb2YgdGhlIEdOVSBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlXG4gKiBhbG9uZyB3aXRoIFwiSlNHYW1lVG9vbHNcIi4gIElmIG5vdCwgc2VlIDxodHRwOi8vd3d3LmdudS5vcmcvbGljZW5zZXMvPi5cbiAqL1xuaW1wb3J0IENvbnN0YW50cyBmcm9tIFwiLi9Db25zdGFudHNcIjtcbmltcG9ydCBCb3ggZnJvbSBcIi4vQm94XCI7XG5pbXBvcnQgU3R5bGUgZnJvbSBcIi4vU3R5bGVcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU2Nyb2xsYmFyIGV4dGVuZHMgQm94IHtcbiAgc2VsZWN0YWJsZSA9IHRydWU7XG5cbiAgY29uc3RydWN0b3Ioc2l6ZSwgc3R5bGUsIHBhcmVudCkge1xuICAgIHN1cGVyKG51bGwsIG51bGwsIG51bGwsIG51bGwsIHN0eWxlKTtcbiAgICB0aGlzLnBhcmVudCA9IHBhcmVudDtcbiAgICB0aGlzLnNpemUgPSBzaXplIHx8IENvbnN0YW50cy5TZXR0aW5nLlNDUk9MTEJBUl9ERUZBVUxUX1NJWkU7XG4gIH1cbiAgXG4gIGRyYXcoY29udGV4dCkge1xuICAgIGlmKHRoaXMuaGlkZGVuKSByZXR1cm47XG4gICAgaWYodGhpcy5jbGlja2VkKSB7XG4gICAgICB0aGlzLmhvdmVyZWQgPSB0cnVlO1xuICAgIH1cbiAgICBcbiAgICBzdXBlci5kcmF3KGNvbnRleHQpO1xuICB9XG5cbiAgZ2V0IG1heFdpZHRoUGFyZW50KCkge1xuICAgIHJldHVybiB0aGlzLnBhcmVudCA/IHRoaXMucGFyZW50Lm1heFdpZHRoIC0gTWF0aC5hYnMoTWF0aC5taW4oMCwgdGhpcy5wYXJlbnQueCkpIDogMDtcbiAgfVxuXG4gIGdldCBtYXhIZWlnaHRQYXJlbnQoKSB7XG4gICAgcmV0dXJuIHRoaXMucGFyZW50ID8gdGhpcy5wYXJlbnQubWF4SGVpZ2h0IC0gTWF0aC5hYnMoTWF0aC5taW4oMCwgdGhpcy5wYXJlbnQueSkpIDogMDtcbiAgfVxuXG4gIGdldCBpbm5lcldpZHRoUGFyZW50KCkge1xuICAgIHJldHVybiB0aGlzLnBhcmVudCA/IHRoaXMucGFyZW50LmlubmVyV2lkdGggLSBNYXRoLmFicyhNYXRoLm1pbigwLCB0aGlzLnBhcmVudC54KSkgOiAwO1xuICB9XG5cbiAgZ2V0IGlubmVySGVpZ2h0UGFyZW50KCkge1xuICAgIHJldHVybiB0aGlzLnBhcmVudCA/IHRoaXMucGFyZW50LmlubmVySGVpZ2h0IC0gTWF0aC5hYnMoTWF0aC5taW4oMCwgdGhpcy5wYXJlbnQueSkpIDogMDtcbiAgfVxuXG4gIGdldCBtYXhXaWR0aCgpIHtcbiAgICByZXR1cm4gdGhpcy53aWR0aDtcbiAgfVxuXG4gIGdldCBtYXhIZWlnaHQoKSB7XG4gICAgcmV0dXJuIHRoaXMuaGVpZ2h0O1xuICB9XG5cbiAgZ2V0IGNvbnRlbnRSYXRpb1goKSB7XG4gICAgcmV0dXJuIHRoaXMucGFyZW50ID8gdGhpcy5tYXhXaWR0aFBhcmVudCAvIHRoaXMuaW5uZXJXaWR0aFBhcmVudCA6IDA7XG4gIH1cblxuICBnZXQgY29udGVudFJhdGlvWSgpIHtcbiAgICByZXR1cm4gdGhpcy5wYXJlbnQgPyB0aGlzLm1heEhlaWdodFBhcmVudCAvIHRoaXMuaW5uZXJIZWlnaHRQYXJlbnQgOiAwO1xuICB9XG5cbiAgZ2V0IHdpZHRoKCkge1xuICAgIHJldHVybiB0aGlzLm1heFdpZHRoUGFyZW50ICogdGhpcy5jb250ZW50UmF0aW9YO1xuICB9XG5cbiAgZ2V0IGhlaWdodCgpIHtcbiAgICByZXR1cm4gdGhpcy5tYXhIZWlnaHRQYXJlbnQgKiB0aGlzLmNvbnRlbnRSYXRpb1k7XG4gIH1cblxuICBnZXQgd2luZG93U2Nyb2xsU2l6ZVgoKSB7XG4gICAgcmV0dXJuIHRoaXMuaW5uZXJXaWR0aFBhcmVudCAtIHRoaXMubWF4V2lkdGhQYXJlbnQ7XG4gIH1cblxuICBnZXQgd2luZG93U2Nyb2xsU2l6ZVkoKSB7XG4gICAgcmV0dXJuIHRoaXMuaW5uZXJIZWlnaHRQYXJlbnQgLSB0aGlzLm1heEhlaWdodFBhcmVudDtcbiAgfVxuXG4gIGdldCBwZXJjZW50U2Nyb2xsYmFyWCgpIHtcbiAgICByZXR1cm4gdGhpcy5wYXJlbnQgPyB0aGlzLnBhcmVudC5vZmZzZXRTY3JvbGxYIC8gdGhpcy53aW5kb3dTY3JvbGxTaXplWCA6IDA7XG4gIH1cblxuICBnZXQgcGVyY2VudFNjcm9sbGJhclkoKSB7XG4gICAgcmV0dXJuIHRoaXMucGFyZW50ID8gdGhpcy5wYXJlbnQub2Zmc2V0U2Nyb2xsWSAvIHRoaXMud2luZG93U2Nyb2xsU2l6ZVkgOiAwO1xuICB9XG5cbiAgZ2V0IHNjcm9sbEFyZWFTaXplWCgpIHtcbiAgICByZXR1cm4gdGhpcy5tYXhXaWR0aFBhcmVudCAtIHRoaXMud2lkdGg7XG4gIH1cblxuICBnZXQgc2Nyb2xsQXJlYVNpemVZKCkge1xuICAgIHJldHVybiB0aGlzLm1heEhlaWdodFBhcmVudCAtIHRoaXMuaGVpZ2h0O1xuICB9XG5cbiAgZ2V0IHgoKSB7XG4gICAgcmV0dXJuIHRoaXMucGFyZW50ID8gTWF0aC5hYnModGhpcy5wYXJlbnQueCkgKyB0aGlzLnNjcm9sbEFyZWFTaXplWCAqIHRoaXMucGVyY2VudFNjcm9sbGJhclggOiAwO1xuICB9XG5cbiAgZ2V0IHkoKSB7XG4gICAgcmV0dXJuIHRoaXMucGFyZW50ID8gTWF0aC5hYnModGhpcy5wYXJlbnQueSkgKyB0aGlzLnNjcm9sbEFyZWFTaXplWSAqIHRoaXMucGVyY2VudFNjcm9sbGJhclkgOiAwO1xuICB9XG5cbiAgZ2V0IGRlZmF1bHRTdHlsZSgpIHtcbiAgICByZXR1cm4gbmV3IFN0eWxlKHtcbiAgICAgIFwiYmFja2dyb3VuZENvbG9yXCI6IENvbnN0YW50cy5TZXR0aW5nLlNDUk9MTEJBUl9ERUZBVUxUX0JBQ0tHUk9VTkQsXG4gICAgICBcImJhY2tncm91bmRDb2xvckhvdmVyXCI6IENvbnN0YW50cy5TZXR0aW5nLlNDUk9MTEJBUl9ERUZBVUxUX0hPVkVSX0JBQ0tHUk9VTkQsXG4gICAgICBcImJhY2tncm91bmRDb2xvckRvd25cIjogQ29uc3RhbnRzLlNldHRpbmcuU0NST0xMQkFSX0RFRkFVTFRfQ0xJQ0tfQkFDS0dST1VORCxcbiAgICAgIFwiYm9yZGVyU2l6ZVwiOiAwXG4gICAgfSk7XG4gIH1cblxuICBjb21wYXJlVG9Db21wb25lbnQob3RoZXJDb21wb25lbnQpIHtcbiAgICByZXR1cm4gb3RoZXJDb21wb25lbnQuY29tcGFyZVRvU2Nyb2xsYmFyKHRoaXMpO1xuICB9XG5cbiAgY29tcGFyZVRvU2Nyb2xsYmFyKG90aGVyQ29tcG9uZW50KSB7XG4gICAgcmV0dXJuIDA7XG4gIH1cbn0iLCIvKlxuICogQ29weXJpZ2h0IChDKSAyMDIwIEVsaWFzdGlrIChlbGlhc3Rpa3NvZnRzLmNvbSlcbiAqXG4gKiBUaGlzIGZpbGUgaXMgcGFydCBvZiBcIkpTR2FtZVRvb2xzXCIuXG4gKlxuICogXCJKU0dhbWVUb29sc1wiIGlzIGZyZWUgc29mdHdhcmU6IHlvdSBjYW4gcmVkaXN0cmlidXRlIGl0IGFuZC9vciBtb2RpZnlcbiAqIGl0IHVuZGVyIHRoZSB0ZXJtcyBvZiB0aGUgR05VIEdlbmVyYWwgUHVibGljIExpY2Vuc2UgYXMgcHVibGlzaGVkIGJ5XG4gKiB0aGUgRnJlZSBTb2Z0d2FyZSBGb3VuZGF0aW9uLCBlaXRoZXIgdmVyc2lvbiAzIG9mIHRoZSBMaWNlbnNlLCBvclxuICogKGF0IHlvdXIgb3B0aW9uKSBhbnkgbGF0ZXIgdmVyc2lvbi5cbiAqXG4gKiBcIkpTR2FtZVRvb2xzXCIgaXMgZGlzdHJpYnV0ZWQgaW4gdGhlIGhvcGUgdGhhdCBpdCB3aWxsIGJlIHVzZWZ1bCxcbiAqIGJ1dCBXSVRIT1VUIEFOWSBXQVJSQU5UWTsgd2l0aG91dCBldmVuIHRoZSBpbXBsaWVkIHdhcnJhbnR5IG9mXG4gKiBNRVJDSEFOVEFCSUxJVFkgb3IgRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UuICBTZWUgdGhlXG4gKiBHTlUgR2VuZXJhbCBQdWJsaWMgTGljZW5zZSBmb3IgbW9yZSBkZXRhaWxzLlxuICpcbiAqIFlvdSBzaG91bGQgaGF2ZSByZWNlaXZlZCBhIGNvcHkgb2YgdGhlIEdOVSBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlXG4gKiBhbG9uZyB3aXRoIFwiSlNHYW1lVG9vbHNcIi4gIElmIG5vdCwgc2VlIDxodHRwOi8vd3d3LmdudS5vcmcvbGljZW5zZXMvPi5cbiAqL1xuaW1wb3J0IFNjcm9sbGJhciBmcm9tIFwiLi9TY3JvbGxiYXJcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU2Nyb2xsYmFySG9yaXpvbnRhbCBleHRlbmRzIFNjcm9sbGJhciB7XG4gIHNlbGVjdGFibGUgPSB0cnVlO1xuXG4gIGNvbnN0cnVjdG9yKHNpemUsIHN0eWxlLCBwYXJlbnQpIHtcbiAgICBzdXBlcihzaXplLCBzdHlsZSwgcGFyZW50KTtcblxuICAgIHRoaXMuYWRkTW92ZUFjdGlvbigoZGVsdGFYKSA9PiB7XG4gICAgICBpZih0aGlzLnBhcmVudCkge1xuICAgICAgICB0aGlzLnBhcmVudC5vZmZzZXRTY3JvbGxYIC09IGRlbHRhWDtcblxuICAgICAgICBpZih0aGlzLnBhcmVudC5yZWFjdG9yKSB7XG4gICAgICAgICAgdGhpcy5wYXJlbnQucmVhY3Rvci5kaXNwYXRjaEV2ZW50KFwib25TY3JvbGxcIiwgLWRlbHRhWCwgMCk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuICBcbiAgZHJhdyhjb250ZXh0KSB7XG4gICAgaWYodGhpcy5zY3JvbGxBcmVhU2l6ZVggPiAwKSB7XG4gICAgICBzdXBlci5kcmF3KGNvbnRleHQpO1xuICAgIH1cbiAgfVxuXG4gIGdldCBoZWlnaHQoKSB7XG4gICAgcmV0dXJuIHRoaXMuc2l6ZTtcbiAgfVxuXG4gIGdldCB5KCkge1xuICAgIHJldHVybiB0aGlzLnBhcmVudCA/IHRoaXMucGFyZW50LnkgKyB0aGlzLnBhcmVudC5oZWlnaHQgLSB0aGlzLnNpemUgOiBudWxsO1xuICB9XG59IiwiLypcbiAqIENvcHlyaWdodCAoQykgMjAyMCBFbGlhc3RpayAoZWxpYXN0aWtzb2Z0cy5jb20pXG4gKlxuICogVGhpcyBmaWxlIGlzIHBhcnQgb2YgXCJKU0dhbWVUb29sc1wiLlxuICpcbiAqIFwiSlNHYW1lVG9vbHNcIiBpcyBmcmVlIHNvZnR3YXJlOiB5b3UgY2FuIHJlZGlzdHJpYnV0ZSBpdCBhbmQvb3IgbW9kaWZ5XG4gKiBpdCB1bmRlciB0aGUgdGVybXMgb2YgdGhlIEdOVSBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlIGFzIHB1Ymxpc2hlZCBieVxuICogdGhlIEZyZWUgU29mdHdhcmUgRm91bmRhdGlvbiwgZWl0aGVyIHZlcnNpb24gMyBvZiB0aGUgTGljZW5zZSwgb3JcbiAqIChhdCB5b3VyIG9wdGlvbikgYW55IGxhdGVyIHZlcnNpb24uXG4gKlxuICogXCJKU0dhbWVUb29sc1wiIGlzIGRpc3RyaWJ1dGVkIGluIHRoZSBob3BlIHRoYXQgaXQgd2lsbCBiZSB1c2VmdWwsXG4gKiBidXQgV0lUSE9VVCBBTlkgV0FSUkFOVFk7IHdpdGhvdXQgZXZlbiB0aGUgaW1wbGllZCB3YXJyYW50eSBvZlxuICogTUVSQ0hBTlRBQklMSVRZIG9yIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFLiAgU2VlIHRoZVxuICogR05VIEdlbmVyYWwgUHVibGljIExpY2Vuc2UgZm9yIG1vcmUgZGV0YWlscy5cbiAqXG4gKiBZb3Ugc2hvdWxkIGhhdmUgcmVjZWl2ZWQgYSBjb3B5IG9mIHRoZSBHTlUgR2VuZXJhbCBQdWJsaWMgTGljZW5zZVxuICogYWxvbmcgd2l0aCBcIkpTR2FtZVRvb2xzXCIuICBJZiBub3QsIHNlZSA8aHR0cDovL3d3dy5nbnUub3JnL2xpY2Vuc2VzLz4uXG4gKi9cbmltcG9ydCBTY3JvbGxiYXIgZnJvbSBcIi4vU2Nyb2xsYmFyXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFNjcm9sbGJhclZlcnRpY2FsIGV4dGVuZHMgU2Nyb2xsYmFyIHtcbiAgc2VsZWN0YWJsZSA9IHRydWU7XG5cbiAgY29uc3RydWN0b3Ioc2l6ZSwgc3R5bGUsIHBhcmVudCkge1xuICAgIHN1cGVyKHNpemUsIHN0eWxlLCBwYXJlbnQpO1xuICAgIFxuICAgIHRoaXMuYWRkTW92ZUFjdGlvbigoZGVsdGFYLCBkZWx0YVkpID0+IHtcbiAgICAgIGlmKHRoaXMucGFyZW50KSB7XG4gICAgICAgIHRoaXMucGFyZW50Lm9mZnNldFNjcm9sbFkgLT0gZGVsdGFZO1xuXG4gICAgICAgIGlmKHRoaXMucGFyZW50LnJlYWN0b3IpIHtcbiAgICAgICAgICB0aGlzLnBhcmVudC5yZWFjdG9yLmRpc3BhdGNoRXZlbnQoXCJvblNjcm9sbFwiLCAwLCAtZGVsdGFZKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0pO1xuICB9XG4gIFxuICBkcmF3KGNvbnRleHQpIHtcbiAgICBpZih0aGlzLnNjcm9sbEFyZWFTaXplWSA+IDApIHtcbiAgICAgIHN1cGVyLmRyYXcoY29udGV4dCk7XG4gICAgfVxuICB9XG5cbiAgZ2V0IHdpZHRoKCkge1xuICAgIHJldHVybiB0aGlzLnNpemU7XG4gIH1cblxuICBnZXQgeCgpIHtcbiAgICByZXR1cm4gdGhpcy5wYXJlbnQgPyB0aGlzLnBhcmVudC54ICsgdGhpcy5wYXJlbnQud2lkdGggLSB0aGlzLnNpemUgOiAwO1xuICB9XG59IiwiLypcbiAqIENvcHlyaWdodCAoQykgMjAyMCBFbGlhc3RpayAoZWxpYXN0aWtzb2Z0cy5jb20pXG4gKlxuICogVGhpcyBmaWxlIGlzIHBhcnQgb2YgXCJKU0dhbWVUb29sc1wiLlxuICpcbiAqIFwiSlNHYW1lVG9vbHNcIiBpcyBmcmVlIHNvZnR3YXJlOiB5b3UgY2FuIHJlZGlzdHJpYnV0ZSBpdCBhbmQvb3IgbW9kaWZ5XG4gKiBpdCB1bmRlciB0aGUgdGVybXMgb2YgdGhlIEdOVSBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlIGFzIHB1Ymxpc2hlZCBieVxuICogdGhlIEZyZWUgU29mdHdhcmUgRm91bmRhdGlvbiwgZWl0aGVyIHZlcnNpb24gMyBvZiB0aGUgTGljZW5zZSwgb3JcbiAqIChhdCB5b3VyIG9wdGlvbikgYW55IGxhdGVyIHZlcnNpb24uXG4gKlxuICogXCJKU0dhbWVUb29sc1wiIGlzIGRpc3RyaWJ1dGVkIGluIHRoZSBob3BlIHRoYXQgaXQgd2lsbCBiZSB1c2VmdWwsXG4gKiBidXQgV0lUSE9VVCBBTlkgV0FSUkFOVFk7IHdpdGhvdXQgZXZlbiB0aGUgaW1wbGllZCB3YXJyYW50eSBvZlxuICogTUVSQ0hBTlRBQklMSVRZIG9yIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFLiAgU2VlIHRoZVxuICogR05VIEdlbmVyYWwgUHVibGljIExpY2Vuc2UgZm9yIG1vcmUgZGV0YWlscy5cbiAqXG4gKiBZb3Ugc2hvdWxkIGhhdmUgcmVjZWl2ZWQgYSBjb3B5IG9mIHRoZSBHTlUgR2VuZXJhbCBQdWJsaWMgTGljZW5zZVxuICogYWxvbmcgd2l0aCBcIkpTR2FtZVRvb2xzXCIuICBJZiBub3QsIHNlZSA8aHR0cDovL3d3dy5nbnUub3JnL2xpY2Vuc2VzLz4uXG4gKi9cbmltcG9ydCBMYWJlbCBmcm9tIFwiLi9MYWJlbFwiO1xuaW1wb3J0IEJ1dHRvbiBmcm9tIFwiLi9CdXR0b25cIjtcbmltcG9ydCBUcmlhbmdsZSBmcm9tIFwiLi9UcmlhbmdsZVwiO1xuaW1wb3J0IFN0eWxlIGZyb20gXCIuL1N0eWxlXCI7XG5pbXBvcnQgQ29uc3RhbnRzIGZyb20gXCIuL0NvbnN0YW50c1wiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTZWxlY3QgZXh0ZW5kcyBCdXR0b24ge1xuICAjX3dpZHRoID0gMDtcblxuICBjb25zdHJ1Y3Rvcih4LCB5LCBtYXhXaWR0aCwgbWF4SGVpZ2h0LCBzdHlsZSwgb3B0aW9uQ29udGFpbmVyLCBkZWZhdWx0T3B0aW9uKSB7XG4gICAgc3VwZXIoeCwgeSwgbWF4V2lkdGgsIG1heEhlaWdodCwgc3R5bGUpO1xuXG4gICAgdGhpcy5vcHRpb25Db250YWluZXIgPSBvcHRpb25Db250YWluZXI7XG4gICAgaWYoZGVmYXVsdE9wdGlvbikgdGhpcy5zZWxlY3RlZE9wdGlvbiA9IGRlZmF1bHRPcHRpb247XG5cbiAgICB0aGlzLmxhYmVsID0gbmV3IExhYmVsKFwiXCIsIHgsIHksIHN0eWxlKTtcbiAgICB0aGlzLmxhYmVsLnN0eWxlLnNldEFsbCh7IFwiYWxpZ25lbWVudFwiOiBDb25zdGFudHMuQWxpZ25lbWVudC5MRUZULCBcInZlcnRpY2FsQWxpZ25lbWVudFwiOiBDb25zdGFudHMuVmVydGljYWxBbGlnbmVtZW50LkNFTlRFUiB9KTtcbiAgICB0aGlzLnRyaWFuZ2xlID0gbmV3IFRyaWFuZ2xlKG51bGwsIG51bGwsIDgsIDgsIHN0eWxlKTtcbiAgICB0aGlzLnRyaWFuZ2xlLnN0eWxlLnNldEFsbCh7IFwiYWxpZ25lbWVudFwiOiBDb25zdGFudHMuQWxpZ25lbWVudC5SSUdIVCwgXCJ2ZXJ0aWNhbEFsaWduZW1lbnRcIjogQ29uc3RhbnRzLlZlcnRpY2FsQWxpZ25lbWVudC5DRU5URVIgfSk7XG5cbiAgICB0aGlzLmFkZEFsbCh0aGlzLmxhYmVsLCB0aGlzLnRyaWFuZ2xlKTtcblxuICAgIHRoaXMuYWRkQ2xpY2tBY3Rpb24oKCkgPT4ge1xuICAgICAgaWYodGhpcy5vcHRpb25Db250YWluZXIpIHtcbiAgICAgICAgdGhpcy5vcHRpb25Db250YWluZXIuaGlkZGVuID0gZmFsc2U7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICBpZighQ29uc3RhbnRzLlNldHRpbmcuRElTQUJMRV9FWFBFUklNRU5UQUxfT1BUSU1JWkFUSU9OUykge1xuICAgICAgdGhpcy51cGRhdGVXaWR0aCgpO1xuICAgICAgdGhpcy5hZGRDaGFuZ2VBY3Rpb24oKCkgPT4gdGhpcy51cGRhdGVXaWR0aCgpKTtcbiAgICB9XG4gIH1cblxuICBkcmF3KGNvbnRleHQpIHtcbiAgICBpZih0aGlzLmhpZGRlbikgcmV0dXJuO1xuICAgIGlmKHRoaXMuc2VsZWN0ZWRPcHRpb24gJiYgdGhpcy5zZWxlY3RlZE9wdGlvbi5sYWJlbCkge1xuICAgICAgdGhpcy5sYWJlbC50ZXh0ID0gdGhpcy5zZWxlY3RlZE9wdGlvbi5sYWJlbC50ZXh0O1xuICAgIH1cblxuICAgIHN1cGVyLmRyYXcoY29udGV4dCk7XG5cbiAgICBpZih0aGlzLm9wdGlvbkNvbnRhaW5lcikge1xuICAgICAgdGhpcy5vcHRpb25Db250YWluZXIuc2VsZWN0ID0gdGhpcztcbiAgICB9XG4gIH1cblxuICBnZXQgc2VsZWN0ZWRPcHRpb24oKSB7XG4gICAgcmV0dXJuIHRoaXMub3B0aW9uQ29udGFpbmVyID8gdGhpcy5vcHRpb25Db250YWluZXIuY29tcG9uZW50c1t0aGlzLm9wdGlvbkNvbnRhaW5lci5zZWxlY3RlZE9wdGlvbl0gOiBudWxsO1xuICB9XG5cbiAgc2V0IHNlbGVjdGVkT3B0aW9uKGlkKSB7XG4gICAgaWYoaWQgIT0gdGhpcy5vcHRpb25Db250YWluZXIuc2VsZWN0ZWRPcHRpb24pIHtcbiAgICAgIHRoaXMub3B0aW9uQ29udGFpbmVyLnNlbGVjdGVkT3B0aW9uID0gaWQ7XG4gICAgICB0aGlzLnJlYWN0b3IuZGlzcGF0Y2hFdmVudChcIm9uQ2hhbmdlXCIsIHRoaXMpO1xuICAgIH1cbiAgfVxuXG4gIGdldCB0ZXh0KCkge1xuICAgIHJldHVybiB0aGlzLnNlbGVjdGVkT3B0aW9uICYmIHRoaXMuc2VsZWN0ZWRPcHRpb24ubGFiZWwgPyB0aGlzLnNlbGVjdGVkT3B0aW9uLmxhYmVsLnRleHQgOiBudWxsO1xuICB9XG5cbiAgdXBkYXRlV2lkdGgoKSB7XG4gICAgbGV0IG1heFdpZHRoID0gdGhpcy5sYWJlbC53aWR0aDtcblxuICAgIGlmKHRoaXMub3B0aW9uQ29udGFpbmVyKSB7XG4gICAgICB0aGlzLm9wdGlvbkNvbnRhaW5lci5jb21wb25lbnRzLmZvckVhY2goY29tcG9uZW50ID0+IHtcbiAgICAgICAgY29uc3QgbGFiZWwgPSBjb21wb25lbnQubGFiZWw7XG5cbiAgICAgICAgaWYobGFiZWwpIHtcbiAgICAgICAgICBpZihsYWJlbC51cGRhdGVTaXplcykgbGFiZWwudXBkYXRlU2l6ZXMoKTtcbiAgICAgICAgICBpZihsYWJlbC53aWR0aCA+IG1heFdpZHRoKSBtYXhXaWR0aCA9IGxhYmVsLndpZHRoO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9XG5cbiAgICB0aGlzLiNfd2lkdGggPSBtYXhXaWR0aCArIHRoaXMuc3R5bGUucGFkZGluZyArIHRoaXMudHJpYW5nbGUud2lkdGggKyAxNTtcbiAgfVxuXG4gIGdldCB3aWR0aCgpIHtcbiAgICBpZihDb25zdGFudHMuU2V0dGluZy5ESVNBQkxFX0VYUEVSSU1FTlRBTF9PUFRJTUlaQVRJT05TKSB0aGlzLnVwZGF0ZVdpZHRoKCk7XG4gICAgcmV0dXJuIHRoaXMuI193aWR0aDtcbiAgfVxuXG4gIGdldCBhbGxDb21wb25lbnRzKCkge1xuICAgIGNvbnN0IGNvbXBvbmVudHMgPSBbXTtcbiAgICBjb21wb25lbnRzLnB1c2goLi4uc3VwZXIuYWxsQ29tcG9uZW50cyk7XG4gICAgcmV0dXJuIGNvbXBvbmVudHM7XG4gIH1cblxuICBnZXQgZGVmYXVsdFN0eWxlKCkge1xuICAgIHJldHVybiBuZXcgU3R5bGUoe1xuICAgICAgXCJiYWNrZ3JvdW5kQ29sb3JcIjogQ29uc3RhbnRzLlNldHRpbmcuU0VMRUNUX0RFRkFVTFRfQkFDS0dST1VORCxcbiAgICAgIFwiYmFja2dyb3VuZENvbG9ySG92ZXJcIjogQ29uc3RhbnRzLlNldHRpbmcuU0VMRUNUX0RFRkFVTFRfSE9WRVJfQkFDS0dST1VORCxcbiAgICAgIFwiYmFja2dyb3VuZENvbG9yRG93blwiOiBDb25zdGFudHMuU2V0dGluZy5TRUxFQ1RfREVGQVVMVF9DTElDS19CQUNLR1JPVU5ELFxuICAgICAgXCJwYWRkaW5nXCI6IENvbnN0YW50cy5TZXR0aW5nLkRFRkFVTFRfUEFERElOR1xuICAgIH0pO1xuICB9XG5cbiAgZ2V0IHNlbGVjdGVkKCkge1xuICAgIHJldHVybiBzdXBlci5zZWxlY3RlZCB8fCB0aGlzLm9wdGlvbkNvbnRhaW5lci5zZWxlY3RlZDtcbiAgfVxuXG4gIHNldCBzZWxlY3RlZChzZWxlY3RlZCkge1xuICAgIHN1cGVyLnNlbGVjdGVkID0gc2VsZWN0ZWQ7XG4gIH1cbn0iLCIvKlxuICogQ29weXJpZ2h0IChDKSAyMDIwIEVsaWFzdGlrIChlbGlhc3Rpa3NvZnRzLmNvbSlcbiAqXG4gKiBUaGlzIGZpbGUgaXMgcGFydCBvZiBcIkpTR2FtZVRvb2xzXCIuXG4gKlxuICogXCJKU0dhbWVUb29sc1wiIGlzIGZyZWUgc29mdHdhcmU6IHlvdSBjYW4gcmVkaXN0cmlidXRlIGl0IGFuZC9vciBtb2RpZnlcbiAqIGl0IHVuZGVyIHRoZSB0ZXJtcyBvZiB0aGUgR05VIEdlbmVyYWwgUHVibGljIExpY2Vuc2UgYXMgcHVibGlzaGVkIGJ5XG4gKiB0aGUgRnJlZSBTb2Z0d2FyZSBGb3VuZGF0aW9uLCBlaXRoZXIgdmVyc2lvbiAzIG9mIHRoZSBMaWNlbnNlLCBvclxuICogKGF0IHlvdXIgb3B0aW9uKSBhbnkgbGF0ZXIgdmVyc2lvbi5cbiAqXG4gKiBcIkpTR2FtZVRvb2xzXCIgaXMgZGlzdHJpYnV0ZWQgaW4gdGhlIGhvcGUgdGhhdCBpdCB3aWxsIGJlIHVzZWZ1bCxcbiAqIGJ1dCBXSVRIT1VUIEFOWSBXQVJSQU5UWTsgd2l0aG91dCBldmVuIHRoZSBpbXBsaWVkIHdhcnJhbnR5IG9mXG4gKiBNRVJDSEFOVEFCSUxJVFkgb3IgRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UuICBTZWUgdGhlXG4gKiBHTlUgR2VuZXJhbCBQdWJsaWMgTGljZW5zZSBmb3IgbW9yZSBkZXRhaWxzLlxuICpcbiAqIFlvdSBzaG91bGQgaGF2ZSByZWNlaXZlZCBhIGNvcHkgb2YgdGhlIEdOVSBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlXG4gKiBhbG9uZyB3aXRoIFwiSlNHYW1lVG9vbHNcIi4gIElmIG5vdCwgc2VlIDxodHRwOi8vd3d3LmdudS5vcmcvbGljZW5zZXMvPi5cbiAqL1xuaW1wb3J0IEJ1dHRvbiBmcm9tIFwiLi9CdXR0b25cIjtcbmltcG9ydCBDb25zdGFudHMgZnJvbSBcIi4vQ29uc3RhbnRzXCI7XG5pbXBvcnQgTGFiZWwgZnJvbSBcIi4vTGFiZWxcIjtcbmltcG9ydCBTdHlsZSBmcm9tIFwiLi9TdHlsZVwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTZWxlY3RPcHRpb24gZXh0ZW5kcyBCdXR0b24ge1xuICBjb25zdHJ1Y3RvcihsYWJlbCwgc3R5bGUpIHtcbiAgICBjb25zdCBkZWZhdWx0TGFiZWwgPSBuZXcgTGFiZWwoXCJPcHRpb25cIik7XG4gICAgc3VwZXIobnVsbCwgbnVsbCwgbnVsbCwgbnVsbCwgc3R5bGUsIGxhYmVsIHx8IGRlZmF1bHRMYWJlbCk7XG4gICAgdGhpcy5sYWJlbCA9IGxhYmVsIHx8IGRlZmF1bHRMYWJlbDtcbiAgfVxuXG4gIGFkZChjb21wb25lbnQpIHtcbiAgICBpZihjb21wb25lbnQgaW5zdGFuY2VvZiBMYWJlbCkge1xuICAgICAgdGhpcy5jbGVhcigpO1xuICAgICAgc3VwZXIuYWRkKGNvbXBvbmVudCk7XG4gICAgfVxuICB9XG5cbiAgZ2V0IHdpZHRoKCkge1xuICAgIHJldHVybiB0aGlzLnBhcmVudCAmJiB0aGlzLnBhcmVudC53aWR0aDtcbiAgfVxuXG4gIGdldCBkZWZhdWx0U3R5bGUoKSB7XG4gICAgcmV0dXJuIG5ldyBTdHlsZSh7XG4gICAgICBcImJhY2tncm91bmRDb2xvclwiOiBDb25zdGFudHMuU2V0dGluZy5TRUxFQ1RfREVGQVVMVF9CQUNLR1JPVU5ELFxuICAgICAgXCJiYWNrZ3JvdW5kQ29sb3JIb3ZlclwiOiBDb25zdGFudHMuU2V0dGluZy5TRUxFQ1RfREVGQVVMVF9IT1ZFUl9CQUNLR1JPVU5ELFxuICAgICAgXCJiYWNrZ3JvdW5kQ29sb3JEb3duXCI6IENvbnN0YW50cy5TZXR0aW5nLlNFTEVDVF9ERUZBVUxUX0NMSUNLX0JBQ0tHUk9VTkQsXG4gICAgICBcInBhZGRpbmdcIjogQ29uc3RhbnRzLlNldHRpbmcuREVGQVVMVF9QQURESU5HXG4gICAgfSk7XG4gIH1cbn0iLCIvKlxuICogQ29weXJpZ2h0IChDKSAyMDIwIEVsaWFzdGlrIChlbGlhc3Rpa3NvZnRzLmNvbSlcbiAqXG4gKiBUaGlzIGZpbGUgaXMgcGFydCBvZiBcIkpTR2FtZVRvb2xzXCIuXG4gKlxuICogXCJKU0dhbWVUb29sc1wiIGlzIGZyZWUgc29mdHdhcmU6IHlvdSBjYW4gcmVkaXN0cmlidXRlIGl0IGFuZC9vciBtb2RpZnlcbiAqIGl0IHVuZGVyIHRoZSB0ZXJtcyBvZiB0aGUgR05VIEdlbmVyYWwgUHVibGljIExpY2Vuc2UgYXMgcHVibGlzaGVkIGJ5XG4gKiB0aGUgRnJlZSBTb2Z0d2FyZSBGb3VuZGF0aW9uLCBlaXRoZXIgdmVyc2lvbiAzIG9mIHRoZSBMaWNlbnNlLCBvclxuICogKGF0IHlvdXIgb3B0aW9uKSBhbnkgbGF0ZXIgdmVyc2lvbi5cbiAqXG4gKiBcIkpTR2FtZVRvb2xzXCIgaXMgZGlzdHJpYnV0ZWQgaW4gdGhlIGhvcGUgdGhhdCBpdCB3aWxsIGJlIHVzZWZ1bCxcbiAqIGJ1dCBXSVRIT1VUIEFOWSBXQVJSQU5UWTsgd2l0aG91dCBldmVuIHRoZSBpbXBsaWVkIHdhcnJhbnR5IG9mXG4gKiBNRVJDSEFOVEFCSUxJVFkgb3IgRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UuICBTZWUgdGhlXG4gKiBHTlUgR2VuZXJhbCBQdWJsaWMgTGljZW5zZSBmb3IgbW9yZSBkZXRhaWxzLlxuICpcbiAqIFlvdSBzaG91bGQgaGF2ZSByZWNlaXZlZCBhIGNvcHkgb2YgdGhlIEdOVSBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlXG4gKiBhbG9uZyB3aXRoIFwiSlNHYW1lVG9vbHNcIi4gIElmIG5vdCwgc2VlIDxodHRwOi8vd3d3LmdudS5vcmcvbGljZW5zZXMvPi5cbiAqL1xuaW1wb3J0IENvbCBmcm9tIFwiLi9Db2xcIjtcbmltcG9ydCBTdHlsZSBmcm9tIFwiLi9TdHlsZVwiO1xuaW1wb3J0IENvbnN0YW50cyBmcm9tIFwiLi9Db25zdGFudHNcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU2VsZWN0RHJvcGRvd24gZXh0ZW5kcyBDb2wge1xuICAjX3NlbGVjdGVkT3B0aW9uO1xuICBzZWxlY3RhYmxlID0gZmFsc2U7XG5cbiAgY29uc3RydWN0b3IobWF4SGVpZ2h0RHJvcGRvd24sIHN0eWxlLCAuLi5vcHRpb25zKSB7XG4gICAgc3VwZXIobnVsbCwgbnVsbCwgbnVsbCwgbWF4SGVpZ2h0RHJvcGRvd24sIHN0eWxlLCAuLi5vcHRpb25zKTtcbiAgICB0aGlzLiNfc2VsZWN0ZWRPcHRpb24gPSAwO1xuICAgIHRoaXMuc2VsZWN0ID0gbnVsbDtcbiAgfVxuXG4gIGRyYXcoY29udGV4dCkge1xuICAgIHN1cGVyLmRyYXcoY29udGV4dCk7XG4gIH1cblxuICBnZXQgeCgpIHtcbiAgICByZXR1cm4gdGhpcy5zZWxlY3QgJiYgdGhpcy5zZWxlY3QueDtcbiAgfVxuXG4gIGdldCB5KCkge1xuICAgIGNvbnN0IHNlbGVjdEhlaWdodCA9ICh0aGlzLnNlbGVjdCAmJiB0aGlzLnNlbGVjdC5oZWlnaHQpO1xuICAgIGNvbnN0IGhlaWdodCA9IHRoaXMuaGVpZ2h0O1xuICAgIGNvbnN0IHkgPSB0aGlzLnNlbGVjdCAmJiB0aGlzLnNlbGVjdC55O1xuXG4gICAgaWYodGhpcy5jYW52YXMgJiYgdGhpcy5jYW52YXMuc2NlbmUgJiYgeSArIHNlbGVjdEhlaWdodCArIGhlaWdodCA+PSB0aGlzLmNhbnZhcy5zY2VuZS5oZWlnaHQpIHtcbiAgICAgIHJldHVybiB5IC0gaGVpZ2h0O1xuICAgIH1cblxuICAgIHJldHVybiB5ICsgc2VsZWN0SGVpZ2h0O1xuICB9XG5cbiAgZ2V0IHdpZHRoKCkge1xuICAgIHJldHVybiB0aGlzLnNlbGVjdCAmJiB0aGlzLnNlbGVjdC53aWR0aDtcbiAgfVxuXG4gIGdldCBzZWxlY3RlZE9wdGlvbigpIHtcbiAgICByZXR1cm4gTWF0aC5tYXgoMCwgTWF0aC5taW4odGhpcy5jb21wb25lbnRzLmxlbmd0aCAtIDEsIHRoaXMuI19zZWxlY3RlZE9wdGlvbikpO1xuICB9XG5cbiAgc2V0IHNlbGVjdGVkT3B0aW9uKGlkKSB7XG4gICAgaWYoaWQgIT0gdGhpcy4jX3NlbGVjdGVkT3B0aW9uKSB7XG4gICAgICB0aGlzLiNfc2VsZWN0ZWRPcHRpb24gPSBpZDtcbiAgICAgIHRoaXMucmVhY3Rvci5kaXNwYXRjaEV2ZW50KFwib25DaGFuZ2VcIiwgdGhpcyk7XG4gICAgfVxuICB9XG5cbiAgYWRkKGNvbXBvbmVudCkge1xuICAgIHN1cGVyLmFkZChjb21wb25lbnQpO1xuXG4gICAgY29tcG9uZW50LmFkZENsaWNrQWN0aW9uKCgpID0+IHtcbiAgICAgIHRoaXMuI19zZWxlY3RlZE9wdGlvbiA9IHRoaXMuZ2V0Q29tcG9uZW50SWQoY29tcG9uZW50KTtcbiAgICAgIHRoaXMuc2VsZWN0ZWQgPSBmYWxzZTtcbiAgICAgIHRoaXMuaGlkZGVuID0gdHJ1ZTtcbiAgICAgIGlmKHRoaXMuc2VsZWN0KSB0aGlzLnNlbGVjdC5zZWxlY3RlZCA9IGZhbHNlO1xuICAgIH0pO1xuICB9XG5cbiAgZ2V0IGRlZmF1bHRTdHlsZSgpIHtcbiAgICByZXR1cm4gbmV3IFN0eWxlKHtcbiAgICAgIFwicGFkZGluZ1wiOiAwLFxuICAgICAgXCJzcGFjZUJldHdlZW5Db21wb25lbnRzXCI6IDAsXG4gICAgICBcImJhY2tncm91bmRDb2xvclwiOiBDb25zdGFudHMuU2V0dGluZy5TRUxFQ1RfREVGQVVMVF9CQUNLR1JPVU5ELFxuICAgICAgXCJiYWNrZ3JvdW5kQ29sb3JIb3ZlclwiOiBudWxsLFxuICAgICAgXCJiYWNrZ3JvdW5kQ29sb3JEb3duXCI6IG51bGwsXG4gICAgICBcInNjcm9sbFhEaXNhYmxlZFwiOiBmYWxzZSxcbiAgICAgIFwic2Nyb2xsWURpc2FibGVkXCI6IGZhbHNlXG4gICAgfSk7XG4gIH1cblxuICBnZXQgaGlkZGVuKCkge1xuICAgIHJldHVybiBzdXBlci5oaWRkZW4gfHwgKHRoaXMuc2VsZWN0ICYmICF0aGlzLnNlbGVjdC5zZWxlY3RlZCkgfHwgIXRoaXMuc2VsZWN0O1xuICB9XG5cbiAgc2V0IGhpZGRlbihoaWRkZW4pIHtcbiAgICByZXR1cm4gc3VwZXIuaGlkZGVuID0gaGlkZGVuO1xuICB9XG59IiwiLypcbiAqIENvcHlyaWdodCAoQykgMjAyMCBFbGlhc3RpayAoZWxpYXN0aWtzb2Z0cy5jb20pXG4gKlxuICogVGhpcyBmaWxlIGlzIHBhcnQgb2YgXCJKU0dhbWVUb29sc1wiLlxuICpcbiAqIFwiSlNHYW1lVG9vbHNcIiBpcyBmcmVlIHNvZnR3YXJlOiB5b3UgY2FuIHJlZGlzdHJpYnV0ZSBpdCBhbmQvb3IgbW9kaWZ5XG4gKiBpdCB1bmRlciB0aGUgdGVybXMgb2YgdGhlIEdOVSBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlIGFzIHB1Ymxpc2hlZCBieVxuICogdGhlIEZyZWUgU29mdHdhcmUgRm91bmRhdGlvbiwgZWl0aGVyIHZlcnNpb24gMyBvZiB0aGUgTGljZW5zZSwgb3JcbiAqIChhdCB5b3VyIG9wdGlvbikgYW55IGxhdGVyIHZlcnNpb24uXG4gKlxuICogXCJKU0dhbWVUb29sc1wiIGlzIGRpc3RyaWJ1dGVkIGluIHRoZSBob3BlIHRoYXQgaXQgd2lsbCBiZSB1c2VmdWwsXG4gKiBidXQgV0lUSE9VVCBBTlkgV0FSUkFOVFk7IHdpdGhvdXQgZXZlbiB0aGUgaW1wbGllZCB3YXJyYW50eSBvZlxuICogTUVSQ0hBTlRBQklMSVRZIG9yIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFLiAgU2VlIHRoZVxuICogR05VIEdlbmVyYWwgUHVibGljIExpY2Vuc2UgZm9yIG1vcmUgZGV0YWlscy5cbiAqXG4gKiBZb3Ugc2hvdWxkIGhhdmUgcmVjZWl2ZWQgYSBjb3B5IG9mIHRoZSBHTlUgR2VuZXJhbCBQdWJsaWMgTGljZW5zZVxuICogYWxvbmcgd2l0aCBcIkpTR2FtZVRvb2xzXCIuICBJZiBub3QsIHNlZSA8aHR0cDovL3d3dy5nbnUub3JnL2xpY2Vuc2VzLz4uXG4gKi9cbmltcG9ydCBDb25zdGFudHMgZnJvbSBcIi4vQ29uc3RhbnRzXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFN0eWxlIHtcbiAgI3N0eWxlcyA9IHt9O1xuICBjb21wb25lbnQ7XG5cbiAgY29uc3RydWN0b3Ioc3R5bGVzKSB7XG4gICAgdGhpcy5zZXRBbGwoc3R5bGVzKTtcbiAgfVxuXG4gIGdldCBmb250Q29sb3IoKSB7XG4gICAgcmV0dXJuIHRoaXMuI3N0eWxlcy5mb250Q29sb3I7XG4gIH1cblxuICBnZXQgZm9udENvbG9ySG92ZXIoKSB7XG4gICAgcmV0dXJuIHRoaXMuI3N0eWxlcy5mb250Q29sb3JIb3ZlcjtcbiAgfVxuXG4gIGdldCBmb250Q29sb3JEb3duKCkge1xuICAgIHJldHVybiB0aGlzLiNzdHlsZXMuZm9udENvbG9yRG93bjtcbiAgfVxuXG4gIGdldCBmb250RmFtaWx5KCkge1xuICAgIHJldHVybiB0aGlzLiNzdHlsZXMuZm9udEZhbWlseSAhPSBudWxsID8gdGhpcy4jc3R5bGVzLmZvbnRGYW1pbHkgOiBDb25zdGFudHMuU2V0dGluZy5GT05UX0ZBTUlMWTtcbiAgfVxuXG4gIGdldCBmb250U2l6ZSgpIHtcbiAgICByZXR1cm4gdGhpcy4jc3R5bGVzLmZvbnRTaXplICE9IG51bGwgPyB0aGlzLiNzdHlsZXMuZm9udFNpemUgOiBDb25zdGFudHMuU2V0dGluZy5GT05UX1NJWkU7XG4gIH1cblxuICBnZXQgYm9sZCgpIHtcbiAgICByZXR1cm4gdGhpcy4jc3R5bGVzLmJvbGQ7XG4gIH1cblxuICBnZXQgdW5kZXJsaW5lKCkge1xuICAgIHJldHVybiB0aGlzLiNzdHlsZXMudW5kZXJsaW5lO1xuICB9XG5cbiAgZ2V0IHdyYXAoKSB7XG4gICAgcmV0dXJuIHRoaXMuI3N0eWxlcy53cmFwO1xuICB9XG5cbiAgZ2V0IGJhY2tncm91bmRDb2xvcigpIHtcbiAgICByZXR1cm4gdGhpcy4jc3R5bGVzLmJhY2tncm91bmRDb2xvcjtcbiAgfVxuXG4gIGdldCBmb3JlZ3JvdW5kQ29sb3IoKSB7XG4gICAgcmV0dXJuIHRoaXMuI3N0eWxlcy5mb3JlZ3JvdW5kQ29sb3I7XG4gIH1cblxuICBnZXQgYmFja2dyb3VuZENvbG9ySG92ZXIoKSB7XG4gICAgcmV0dXJuIHRoaXMuI3N0eWxlcy5iYWNrZ3JvdW5kQ29sb3JIb3ZlcjtcbiAgfVxuXG4gIGdldCBiYWNrZ3JvdW5kQ29sb3JEb3duKCkge1xuICAgIHJldHVybiB0aGlzLiNzdHlsZXMuYmFja2dyb3VuZENvbG9yRG93bjtcbiAgfVxuXG4gIGdldCBib3JkZXJDb2xvcigpIHtcbiAgICByZXR1cm4gdGhpcy4jc3R5bGVzLmJvcmRlckNvbG9yO1xuICB9XG5cbiAgZ2V0IGJvcmRlckNvbG9ySG92ZXIoKSB7XG4gICAgcmV0dXJuIHRoaXMuI3N0eWxlcy5ib3JkZXJDb2xvckhvdmVyO1xuICB9XG5cbiAgZ2V0IGJvcmRlckNvbG9yRG93bigpIHtcbiAgICByZXR1cm4gdGhpcy4jc3R5bGVzLmJvcmRlckNvbG9yRG93bjtcbiAgfVxuXG4gIGdldCBib3JkZXJDb2xvclNlbGVjdGVkKCkge1xuICAgIHJldHVybiB0aGlzLiNzdHlsZXMuYm9yZGVyQ29sb3JTZWxlY3RlZCAhPSBudWxsID8gdGhpcy4jc3R5bGVzLmJvcmRlckNvbG9yU2VsZWN0ZWQgOiBDb25zdGFudHMuU2V0dGluZy5ERUZBVUxUX0JPUkRFUl9DT0xPUl9TRUxFQ1RFRDtcbiAgfVxuXG4gIGdldCBib3JkZXJTaXplKCkge1xuICAgIHJldHVybiB0aGlzLiNzdHlsZXMuYm9yZGVyU2l6ZSAhPSBudWxsID8gdGhpcy4jc3R5bGVzLmJvcmRlclNpemUgOiBDb25zdGFudHMuU2V0dGluZy5ERUZBVUxUX0JPUkRFUl9TSVpFO1xuICB9XG5cbiAgZ2V0IHNlbGVjdENvbG9yKCkge1xuICAgIHJldHVybiB0aGlzLiNzdHlsZXMuc2VsZWN0Q29sb3I7XG4gIH1cblxuICBnZXQgYWxpZ25lbWVudCgpIHtcbiAgICByZXR1cm4gdGhpcy4jc3R5bGVzLmFsaWduZW1lbnQ7XG4gIH1cblxuICBnZXQgdmVydGljYWxBbGlnbmVtZW50KCkge1xuICAgIHJldHVybiB0aGlzLiNzdHlsZXMudmVydGljYWxBbGlnbmVtZW50O1xuICB9XG5cbiAgZ2V0IGRpc2FibGVBbmltYXRpb24oKSB7XG4gICAgcmV0dXJuIHRoaXMuI3N0eWxlcy5kaXNhYmxlQW5pbWF0aW9uO1xuICB9XG5cbiAgZ2V0IHNjcm9sbFhEaXNhYmxlZCgpIHtcbiAgICByZXR1cm4gdGhpcy4jc3R5bGVzLnNjcm9sbFhEaXNhYmxlZDtcbiAgfVxuXG4gIGdldCBzY3JvbGxZRGlzYWJsZWQoKSB7XG4gICAgcmV0dXJuIHRoaXMuI3N0eWxlcy5zY3JvbGxZRGlzYWJsZWQ7XG4gIH1cblxuICBnZXQgcGFkZGluZygpIHtcbiAgICByZXR1cm4gdGhpcy4jc3R5bGVzLnBhZGRpbmcgIT0gbnVsbCA/IHRoaXMuI3N0eWxlcy5wYWRkaW5nIDogQ29uc3RhbnRzLlNldHRpbmcuREVGQVVMVF9QQURESU5HO1xuICB9XG5cbiAgZ2V0IHNwYWNlQmV0d2VlbkNvbXBvbmVudHMoKSB7XG4gICAgcmV0dXJuIHRoaXMuI3N0eWxlcy5zcGFjZUJldHdlZW5Db21wb25lbnRzICE9IG51bGwgPyB0aGlzLiNzdHlsZXMuc3BhY2VCZXR3ZWVuQ29tcG9uZW50cyA6IENvbnN0YW50cy5TZXR0aW5nLkRFRkFVTFRfU1BBQ0lORztcbiAgfVxuXG4gIGdldCBoaWRkZW4oKSB7XG4gICAgcmV0dXJuIHRoaXMuI3N0eWxlcy5oaWRkZW47XG4gIH1cblxuICBnZXQgYmx1ckJhY2tncm91bmQoKSB7XG4gICAgcmV0dXJuIHRoaXMuI3N0eWxlcy5ibHVyQmFja2dyb3VuZDtcbiAgfVxuXG4gIGdldCBsaW5lV2lkdGgoKSB7XG4gICAgcmV0dXJuIHRoaXMuI3N0eWxlcy5saW5lV2lkdGg7XG4gIH1cblxuICBnZXQgYW5pbWF0aW9uRHVyYXRpb24oKSB7XG4gICAgcmV0dXJuIHRoaXMuI3N0eWxlcy5hbmltYXRpb25EdXJhdGlvbiAhPSBudWxsID8gdGhpcy4jc3R5bGVzLmFuaW1hdGlvbkR1cmF0aW9uIDogQ29uc3RhbnRzLlNldHRpbmcuREVGQVVMVF9BTklNQVRJT05fRFVSQVRJT047XG4gIH1cblxuICBnZXQgZm9yZWdyb3VuZCgpIHtcbiAgICByZXR1cm4gdGhpcy4jc3R5bGVzLmZvcmVncm91bmQ7XG4gIH1cblxuICBnZXQgekluZGV4KCkge1xuICAgIHJldHVybiB0aGlzLiNzdHlsZXMuekluZGV4ICE9IG51bGwgPyB0aGlzLiNzdHlsZXMuekluZGV4IDogMDtcbiAgfVxuICBcbiAgZ2V0IGxpbmVDYXAoKSB7XG4gICAgcmV0dXJuIHRoaXMuI3N0eWxlcy5saW5lQ2FwO1xuICB9XG4gIFxuICBnZXQgZmlsbCgpIHtcbiAgICByZXR1cm4gdGhpcy4jc3R5bGVzLmZpbGw7XG4gIH1cblxuICBnZXQgZmlsbENvbG9yKCkge1xuICAgIHJldHVybiB0aGlzLiNzdHlsZXMuZmlsbENvbG9yO1xuICB9XG5cbiAgZ2V0IGNvbG9yKCkge1xuICAgIHJldHVybiB0aGlzLiNzdHlsZXMuY29sb3I7XG4gIH1cblxuICBnZXQgbW92YWJsZSgpIHtcbiAgICByZXR1cm4gdGhpcy4jc3R5bGVzLm1vdmFibGUgfHwgZmFsc2U7XG4gIH1cblxuICBzZXQoc3R5bGUsIHZhbHVlKSB7XG4gICAgaWYodGhpcy4jc3R5bGVzW3N0eWxlXSAhPSB2YWx1ZSkge1xuICAgICAgdGhpcy4jc3R5bGVzW3N0eWxlXSA9IHZhbHVlO1xuICAgICAgaWYodGhpcy5jb21wb25lbnQgJiYgdGhpcy5jb21wb25lbnQucmVhY3RvcikgdGhpcy5jb21wb25lbnQucmVhY3Rvci5kaXNwYXRjaEV2ZW50KFwib25DaGFuZ2VcIiwgdGhpcyk7XG4gICAgfVxuICB9XG5cbiAgc2V0QWxsKHN0eWxlcykge1xuICAgIGlmKHN0eWxlcykge1xuICAgICAgZm9yKGNvbnN0IHN0eWxlIGluIHN0eWxlcykge1xuICAgICAgICBpZihzdHlsZXMuaGFzT3duUHJvcGVydHkoc3R5bGUpKSB7XG4gICAgICAgICAgdGhpcy5zZXQoc3R5bGUsIHN0eWxlc1tzdHlsZV0pO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgY29weSgpIHtcbiAgICByZXR1cm4gbmV3IFN0eWxlKHRoaXMuI3N0eWxlcyk7XG4gIH1cblxuICBnZXRTdHlsZXMoKSB7XG4gICAgY29uc3Qgc3R5bGVzID0ge307XG5cbiAgICBmb3IoY29uc3Qgc3R5bGUgaW4gdGhpcy4jc3R5bGVzKSB7XG4gICAgICBpZih0aGlzLiNzdHlsZXMuaGFzT3duUHJvcGVydHkoc3R5bGUpKSB7XG4gICAgICAgIHN0eWxlc1tzdHlsZV0gPSB0aGlzLiNzdHlsZXNbc3R5bGVdO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBzdHlsZXM7XG4gIH1cbn0iLCIvKlxuICogQ29weXJpZ2h0IChDKSAyMDIwIEVsaWFzdGlrIChlbGlhc3Rpa3NvZnRzLmNvbSlcbiAqXG4gKiBUaGlzIGZpbGUgaXMgcGFydCBvZiBcIkpTR2FtZVRvb2xzXCIuXG4gKlxuICogXCJKU0dhbWVUb29sc1wiIGlzIGZyZWUgc29mdHdhcmU6IHlvdSBjYW4gcmVkaXN0cmlidXRlIGl0IGFuZC9vciBtb2RpZnlcbiAqIGl0IHVuZGVyIHRoZSB0ZXJtcyBvZiB0aGUgR05VIEdlbmVyYWwgUHVibGljIExpY2Vuc2UgYXMgcHVibGlzaGVkIGJ5XG4gKiB0aGUgRnJlZSBTb2Z0d2FyZSBGb3VuZGF0aW9uLCBlaXRoZXIgdmVyc2lvbiAzIG9mIHRoZSBMaWNlbnNlLCBvclxuICogKGF0IHlvdXIgb3B0aW9uKSBhbnkgbGF0ZXIgdmVyc2lvbi5cbiAqXG4gKiBcIkpTR2FtZVRvb2xzXCIgaXMgZGlzdHJpYnV0ZWQgaW4gdGhlIGhvcGUgdGhhdCBpdCB3aWxsIGJlIHVzZWZ1bCxcbiAqIGJ1dCBXSVRIT1VUIEFOWSBXQVJSQU5UWTsgd2l0aG91dCBldmVuIHRoZSBpbXBsaWVkIHdhcnJhbnR5IG9mXG4gKiBNRVJDSEFOVEFCSUxJVFkgb3IgRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UuICBTZWUgdGhlXG4gKiBHTlUgR2VuZXJhbCBQdWJsaWMgTGljZW5zZSBmb3IgbW9yZSBkZXRhaWxzLlxuICpcbiAqIFlvdSBzaG91bGQgaGF2ZSByZWNlaXZlZCBhIGNvcHkgb2YgdGhlIEdOVSBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlXG4gKiBhbG9uZyB3aXRoIFwiSlNHYW1lVG9vbHNcIi4gIElmIG5vdCwgc2VlIDxodHRwOi8vd3d3LmdudS5vcmcvbGljZW5zZXMvPi5cbiAqL1xuaW1wb3J0IENvbCBmcm9tIFwiLi9Db2xcIjtcbmltcG9ydCBDb25zdGFudHMgZnJvbSBcIi4vQ29uc3RhbnRzXCI7XG5pbXBvcnQgU3R5bGUgZnJvbSBcIi4vU3R5bGVcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVG9vbHRpcCBleHRlbmRzIENvbCB7XG4gIHNlbGVjdGFibGUgPSBmYWxzZTtcbiAgXG4gIGNvbnN0cnVjdG9yKHN0eWxlLCAuLi5jb21wb25lbnRzKSB7XG4gICAgc3VwZXIobnVsbCwgbnVsbCwgbnVsbCwgbnVsbCwgc3R5bGUsIC4uLmNvbXBvbmVudHMpO1xuICAgIHRoaXMuZGlzYWJsZWQgPSB0cnVlO1xuICB9XG5cbiAgZHJhdyhjb250ZXh0KSB7XG4gICAgaWYodGhpcy5oaWRkZW4pIHJldHVybjtcbiAgICBjb25zdCBjYW52YXMgPSBjb250ZXh0LmNhbnZhcztcbiAgICBjb25zdCBjdHggPSBjYW52YXMuZ2V0Q29udGV4dChcIjJkXCIpO1xuICAgIGN0eC5zYXZlKCk7XG5cbiAgICBpZih0aGlzLnggKyB0aGlzLndpZHRoICsgdGhpcy5zdHlsZS5wYWRkaW5nID4gdGhpcy5wYXJlbnQud2lkdGgpIHtcbiAgICAgIHRoaXMueCAtPSAodGhpcy53aWR0aCArIHRoaXMuc3R5bGUucGFkZGluZyk7XG4gICAgfVxuXG4gICAgaWYodGhpcy55ICsgdGhpcy5oZWlnaHQgKyB0aGlzLnN0eWxlLnBhZGRpbmcgPiB0aGlzLnBhcmVudC5oZWlnaHQpIHtcbiAgICAgIHRoaXMueSAtPSAodGhpcy5oZWlnaHQgKyB0aGlzLnN0eWxlLnBhZGRpbmcpO1xuICAgIH1cblxuICAgIHN1cGVyLmRyYXcoY3R4KTtcbiAgICBcbiAgICBjdHgucmVzdG9yZSgpO1xuICB9XG5cbiAgZ2V0IHdpZHRoKCkge1xuICAgIHJldHVybiBzdXBlci53aWR0aCArIHRoaXMuc3R5bGUucGFkZGluZztcbiAgfVxuXG4gIGdldCBoZWlnaHQoKSB7XG4gICAgcmV0dXJuIHN1cGVyLmhlaWdodCArIHRoaXMuc3R5bGUucGFkZGluZztcbiAgfVxuXG4gIHNldCB3aWR0aCh3aWR0aCkge1xuICAgIHN1cGVyLndpZHRoID0gd2lkdGg7XG4gIH1cblxuICBzZXQgaGVpZ2h0KGhlaWdodCkge1xuICAgIHN1cGVyLmhlaWdodCA9IGhlaWdodDtcbiAgfVxuXG4gIGdldCBkZWZhdWx0U3R5bGUoKSB7XG4gICAgcmV0dXJuIG5ldyBTdHlsZSh7XG4gICAgICBcImJhY2tncm91bmRDb2xvclwiOiBDb25zdGFudHMuU2V0dGluZy5UT09MVElQX0RFRkFVTFRfQkFDS0dST1VORFxuICAgIH0pO1xuICB9XG5cbiAgY29tcGFyZVRvQ29tcG9uZW50KG90aGVyQ29tcG9uZW50KSB7XG4gICAgcmV0dXJuIG90aGVyQ29tcG9uZW50LmNvbXBhcmVUb1Rvb2x0aXAodGhpcyk7XG4gIH1cblxuICBjb21wYXJlVG9NZW51KG90aGVyQ29tcG9uZW50KSB7XG4gICAgcmV0dXJuIDE7XG4gIH1cblxuICBjb21wYXJlVG9Ub29sdGlwKG90aGVyQ29tcG9uZW50KSB7XG4gICAgcmV0dXJuIDA7XG4gIH1cblxuICBjb21wYXJlVG9Ob3RpZmljYXRpb24ob3RoZXJDb21wb25lbnQpIHtcbiAgICByZXR1cm4gMTtcbiAgfVxuXG4gIGdldCBoaWRkZW4oKSB7XG4gICAgcmV0dXJuIHN1cGVyLmhpZGRlbiB8fCB0aGlzLmRpc2FibGVkO1xuICB9XG5cbiAgc2V0IGhpZGRlbihoaWRkZW4pIHtcbiAgICBzdXBlci5oaWRkZW4gPSBoaWRkZW47XG4gICAgdGhpcy5kaXNhYmxlZCA9IGhpZGRlbjtcbiAgfVxufSIsIi8qXG4gKiBDb3B5cmlnaHQgKEMpIDIwMjAgRWxpYXN0aWsgKGVsaWFzdGlrc29mdHMuY29tKVxuICpcbiAqIFRoaXMgZmlsZSBpcyBwYXJ0IG9mIFwiSlNHYW1lVG9vbHNcIi5cbiAqXG4gKiBcIkpTR2FtZVRvb2xzXCIgaXMgZnJlZSBzb2Z0d2FyZTogeW91IGNhbiByZWRpc3RyaWJ1dGUgaXQgYW5kL29yIG1vZGlmeVxuICogaXQgdW5kZXIgdGhlIHRlcm1zIG9mIHRoZSBHTlUgR2VuZXJhbCBQdWJsaWMgTGljZW5zZSBhcyBwdWJsaXNoZWQgYnlcbiAqIHRoZSBGcmVlIFNvZnR3YXJlIEZvdW5kYXRpb24sIGVpdGhlciB2ZXJzaW9uIDMgb2YgdGhlIExpY2Vuc2UsIG9yXG4gKiAoYXQgeW91ciBvcHRpb24pIGFueSBsYXRlciB2ZXJzaW9uLlxuICpcbiAqIFwiSlNHYW1lVG9vbHNcIiBpcyBkaXN0cmlidXRlZCBpbiB0aGUgaG9wZSB0aGF0IGl0IHdpbGwgYmUgdXNlZnVsLFxuICogYnV0IFdJVEhPVVQgQU5ZIFdBUlJBTlRZOyB3aXRob3V0IGV2ZW4gdGhlIGltcGxpZWQgd2FycmFudHkgb2ZcbiAqIE1FUkNIQU5UQUJJTElUWSBvciBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRS4gIFNlZSB0aGVcbiAqIEdOVSBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlIGZvciBtb3JlIGRldGFpbHMuXG4gKlxuICogWW91IHNob3VsZCBoYXZlIHJlY2VpdmVkIGEgY29weSBvZiB0aGUgR05VIEdlbmVyYWwgUHVibGljIExpY2Vuc2VcbiAqIGFsb25nIHdpdGggXCJKU0dhbWVUb29sc1wiLiAgSWYgbm90LCBzZWUgPGh0dHA6Ly93d3cuZ251Lm9yZy9saWNlbnNlcy8+LlxuICovXG5pbXBvcnQgQ29tcG9uZW50IGZyb20gXCIuL0NvbXBvbmVudFwiO1xuaW1wb3J0IENvbnN0YW50cyBmcm9tIFwiLi9Db25zdGFudHNcIjtcbmltcG9ydCBVdGlscyBmcm9tIFwiLi9VdGlsc1wiO1xuaW1wb3J0IFN0eWxlIGZyb20gXCIuL1N0eWxlXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFRyaWFuZ2xlIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgc2VsZWN0YWJsZSA9IGZhbHNlO1xuXG4gIGNvbnN0cnVjdG9yKHgsIHksIHdpZHRoLCBoZWlnaHQsIHN0eWxlKSB7XG4gICAgc3VwZXIoeCwgeSwgd2lkdGgsIGhlaWdodCwgc3R5bGUpO1xuICB9XG5cbiAgZHJhdyhjb250ZXh0KSB7XG4gICAgaWYodGhpcy5oaWRkZW4pIHJldHVybjtcbiAgICBzdXBlci5kcmF3KGNvbnRleHQpO1xuXG4gICAgY29uc3QgY2FudmFzID0gY29udGV4dC5jYW52YXM7XG4gICAgY29uc3QgY3R4ID0gY2FudmFzLmdldENvbnRleHQoXCIyZFwiKTtcbiAgICBcbiAgICBVdGlscy5kcmF3VHJpYW5nbGUoY3R4LCB0aGlzLngsIHRoaXMueSwgdGhpcy53aWR0aCwgdGhpcy5oZWlnaHQsIHRoaXMuc3R5bGUubGluZVdpZHRoLCB0aGlzLnN0eWxlLmNvbG9yLCB0aGlzLnN0eWxlLmxpbmVDYXAsIHRoaXMuc3R5bGUuZmlsbCwgdGhpcy5zdHlsZS5maWxsQ29sb3IpO1xuXG4gICAgdGhpcy5pbml0ID0gdHJ1ZTtcbiAgfVxuXG4gIGdldCB3aWR0aCgpIHtcbiAgICByZXR1cm4gc3VwZXIud2lkdGggKyB0aGlzLnN0eWxlLmxpbmVXaWR0aDtcbiAgfVxuXG4gIGdldCBoZWlnaHQoKSB7XG4gICAgcmV0dXJuIHN1cGVyLmhlaWdodCArIHRoaXMuc3R5bGUubGluZVdpZHRoO1xuICB9XG5cbiAgc2V0IHdpZHRoKHdpZHRoKSB7XG4gICAgc3VwZXIud2lkdGggPSB3aWR0aDtcbiAgfVxuXG4gIHNldCBoZWlnaHQoaGVpZ2h0KSB7XG4gICAgc3VwZXIuaGVpZ2h0ID0gaGVpZ2h0O1xuICB9XG5cbiAgZ2V0IGRlZmF1bHRTdHlsZSgpIHtcbiAgICByZXR1cm4gbmV3IFN0eWxlKHtcbiAgICAgIFwibGluZVdpZHRoXCI6IENvbnN0YW50cy5TZXR0aW5nLlRSSUFOR0xFX0RFRkFVTFRfTElORV9TSVpFLFxuICAgICAgXCJjb2xvclwiOiBDb25zdGFudHMuU2V0dGluZy5UUklBTkdMRV9ERUZBVUxUX0NPTE9SLFxuICAgICAgXCJmaWxsXCI6IENvbnN0YW50cy5TZXR0aW5nLlRSSUFOR0xFX0RFRkFVTFRfRklMTCxcbiAgICAgIFwibGluZUNhcFwiOiBDb25zdGFudHMuU2V0dGluZy5UUklBTkdMRV9ERUZBVUxUX0xJTkVfQ0FQLFxuICAgICAgXCJmaWxsQ29sb3JcIjogQ29uc3RhbnRzLlNldHRpbmcuVFJJQU5HTEVfREVGQVVMVF9GSUxMX0NPTE9SXG4gICAgfSk7XG4gIH1cbn0iLCIvKlxuICogQ29weXJpZ2h0IChDKSAyMDIwIEVsaWFzdGlrIChlbGlhc3Rpa3NvZnRzLmNvbSlcbiAqXG4gKiBUaGlzIGZpbGUgaXMgcGFydCBvZiBcIkpTR2FtZVRvb2xzXCIuXG4gKlxuICogXCJKU0dhbWVUb29sc1wiIGlzIGZyZWUgc29mdHdhcmU6IHlvdSBjYW4gcmVkaXN0cmlidXRlIGl0IGFuZC9vciBtb2RpZnlcbiAqIGl0IHVuZGVyIHRoZSB0ZXJtcyBvZiB0aGUgR05VIEdlbmVyYWwgUHVibGljIExpY2Vuc2UgYXMgcHVibGlzaGVkIGJ5XG4gKiB0aGUgRnJlZSBTb2Z0d2FyZSBGb3VuZGF0aW9uLCBlaXRoZXIgdmVyc2lvbiAzIG9mIHRoZSBMaWNlbnNlLCBvclxuICogKGF0IHlvdXIgb3B0aW9uKSBhbnkgbGF0ZXIgdmVyc2lvbi5cbiAqXG4gKiBcIkpTR2FtZVRvb2xzXCIgaXMgZGlzdHJpYnV0ZWQgaW4gdGhlIGhvcGUgdGhhdCBpdCB3aWxsIGJlIHVzZWZ1bCxcbiAqIGJ1dCBXSVRIT1VUIEFOWSBXQVJSQU5UWTsgd2l0aG91dCBldmVuIHRoZSBpbXBsaWVkIHdhcnJhbnR5IG9mXG4gKiBNRVJDSEFOVEFCSUxJVFkgb3IgRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UuICBTZWUgdGhlXG4gKiBHTlUgR2VuZXJhbCBQdWJsaWMgTGljZW5zZSBmb3IgbW9yZSBkZXRhaWxzLlxuICpcbiAqIFlvdSBzaG91bGQgaGF2ZSByZWNlaXZlZCBhIGNvcHkgb2YgdGhlIEdOVSBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlXG4gKiBhbG9uZyB3aXRoIFwiSlNHYW1lVG9vbHNcIi4gIElmIG5vdCwgc2VlIDxodHRwOi8vd3d3LmdudS5vcmcvbGljZW5zZXMvPi5cbiAqL1xuaW1wb3J0IENvbnN0YW50cyBmcm9tIFwiLi9Db25zdGFudHNcIjtcblxuZXhwb3J0IGRlZmF1bHQge1xuICBwcmVSZW5kZXJlZEZvbnQ6IHt9LFxuICBsYXN0S2V5OiAtMSxcbiAgcHJlUmVuZGVyRm9udDogZnVuY3Rpb24oY2Fycywgc2l6ZSwgY29sb3IsIGZvbnRGYW1pbHkpIHtcbiAgICBjYXJzLnB1c2goXCI/XCIpOyBjYXJzLnB1c2goXCIgXCIpOyBjYXJzLnB1c2goXCJBXCIpO1xuICAgIFxuICAgIGZvcihsZXQgaSA9IDA7IGkgPCBjYXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICBjb25zdCBjYW52YXNUbXAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiY2FudmFzXCIpO1xuICAgICAgY29uc3QgY3R4VG1wID0gY2FudmFzVG1wLmdldENvbnRleHQoXCIyZFwiKTtcbiAgICAgIGN0eFRtcC5mb250ID0gc2l6ZSArIFwicHggXCIgKyBmb250RmFtaWx5O1xuICAgICAgY29uc3Qgd2lkdGggPSBjdHhUbXAubWVhc3VyZVRleHQoY2Fyc1tpXSkud2lkdGg7XG4gICAgICBcbiAgICAgIGNhbnZhc1RtcC53aWR0aCA9IHdpZHRoO1xuICAgICAgY2FudmFzVG1wLmhlaWdodCA9IHNpemUgKyAoc2l6ZSAvIDYpO1xuICAgICAgXG4gICAgICBjdHhUbXAuZm9udCA9IHNpemUgKyBcInB4IFwiICsgZm9udEZhbWlseTtcbiAgICAgIGN0eFRtcC5maWxsU3R5bGUgPSBjb2xvcjtcbiAgICAgIGN0eFRtcC50ZXh0QmFzZWxpbmUgPSBcInRvcFwiO1xuICAgICAgY3R4VG1wLmZpbGxUZXh0KGNhcnNbaV0sIDAsIDApO1xuICAgICAgXG4gICAgICB0aGlzLnByZVJlbmRlcmVkRm9udFtjYXJzW2ldXSA9IGNhbnZhc1RtcDtcbiAgICB9XG4gIH0sXG4gIGRyYXdJbWFnZTogZnVuY3Rpb24oY3R4LCBpbWFnZSwgeCwgeSwgd2lkdGgsIGhlaWdodCwgc3gsIHN5LCBzV2lkdGgsIHNIZWlnaHQsIGVyYXNlQmVsb3csIGRlZ3JlZXMpIHtcbiAgICB0aGlzLmRyYXdJbWFnZVdyYXBwZXIoY3R4LCBpbWFnZSwgeCwgeSwgd2lkdGgsIGhlaWdodCwgc3gsIHN5LCBzV2lkdGgsIHNIZWlnaHQsIGVyYXNlQmVsb3csIGRlZ3JlZXMpO1xuICB9LFxuICBkcmF3SW1hZ2VEYXRhOiBmdW5jdGlvbihjdHgsIGltYWdlRGF0YSwgeCwgeSwgd2lkdGgsIGhlaWdodCwgc3gsIHN5LCBzV2lkdGgsIHNIZWlnaHQsIGVyYXNlQmVsb3csIGRlZ3JlZXMpIHtcbiAgICB0aGlzLmRyYXdJbWFnZVdyYXBwZXIoY3R4LCBpbWFnZURhdGEsIHgsIHksIHdpZHRoLCBoZWlnaHQsIHN4LCBzeSwgc1dpZHRoLCBzSGVpZ2h0LCBlcmFzZUJlbG93LCBkZWdyZWVzKTtcbiAgfSxcbiAgZHJhd0ltYWdlV3JhcHBlcjogZnVuY3Rpb24oY3R4LCBpbWFnZSwgeCwgeSwgd2lkdGgsIGhlaWdodCwgc3gsIHN5LCBzV2lkdGgsIHNIZWlnaHQsIGVyYXNlQmVsb3csIGRlZ3JlZXMpIHtcbiAgICB4ID0gKHggPT0gdW5kZWZpbmVkIHx8IGlzTmFOKHgpKSA/IG51bGwgOiBNYXRoLnJvdW5kKHgpO1xuICAgIHkgPSAoeSA9PSB1bmRlZmluZWQgfHwgaXNOYU4oeSkpID8gbnVsbCA6IE1hdGgucm91bmQoeSk7XG4gICAgd2lkdGggPSAod2lkdGggPT0gdW5kZWZpbmVkIHx8IGlzTmFOKHdpZHRoKSkgPyBudWxsIDogTWF0aC5yb3VuZCh3aWR0aCk7XG4gICAgaGVpZ2h0ID0gKGhlaWdodCA9PSB1bmRlZmluZWQgfHwgaXNOYU4oaGVpZ2h0KSkgPyBudWxsIDogTWF0aC5yb3VuZChoZWlnaHQpO1xuICAgIHN4ID0gKHN4ID09IHVuZGVmaW5lZCB8fCBpc05hTihzeCkpID8gbnVsbCA6IE1hdGgucm91bmQoc3gpO1xuICAgIHN5ID0gKHN5ID09IHVuZGVmaW5lZCB8fCBpc05hTihzeSkpID8gbnVsbCA6IE1hdGgucm91bmQoc3kpO1xuICAgIHNXaWR0aCA9IChzV2lkdGggPT0gdW5kZWZpbmVkIHx8IGlzTmFOKHNXaWR0aCkpID8gbnVsbCA6IE1hdGgucm91bmQoc1dpZHRoKTtcbiAgICBzSGVpZ2h0ID0gKHNIZWlnaHQgPT0gdW5kZWZpbmVkIHx8IGlzTmFOKHNIZWlnaHQpKSA/IG51bGwgOiBNYXRoLnJvdW5kKHNIZWlnaHQpO1xuICAgIGVyYXNlQmVsb3cgPSBlcmFzZUJlbG93ID09IHVuZGVmaW5lZCA/IGZhbHNlIDogZXJhc2VCZWxvdztcbiAgICBkZWdyZWVzID0gKGRlZ3JlZXMgPT0gdW5kZWZpbmVkIHx8IGlzTmFOKGRlZ3JlZXMpKSA/IG51bGwgOiBkZWdyZWVzO1xuICBcbiAgICBpZihkZWdyZWVzICE9IHVuZGVmaW5lZCkge1xuICAgICAgY3R4LnNhdmUoKTtcbiAgICAgIGN0eC50cmFuc2xhdGUoeCArIHdpZHRoIC8gMiwgeSArIGhlaWdodCAvIDIpO1xuICAgICAgY3R4LnJvdGF0ZShkZWdyZWVzICogTWF0aC5QSSAvIDE4MCk7XG4gICAgICB4ID0gLSh3aWR0aCAvIDIpO1xuICAgICAgeSA9IC0oaGVpZ2h0IC8gMik7XG4gICAgfVxuICBcbiAgICBpZihlcmFzZUJlbG93KSB7XG4gICAgICBjdHguY2xlYXJSZWN0KHgsIHksIHdpZHRoLCBoZWlnaHQpO1xuICAgIH1cbiAgXG4gICAgaWYoY3R4ICE9IHVuZGVmaW5lZCAmJiBpbWFnZSAhPSB1bmRlZmluZWQpIHtcbiAgICAgIGlmKGltYWdlLndpZHRoID4gMCAmJiBpbWFnZS5oZWlnaHQgPiAwKSB7XG4gICAgICAgIGlmKHN4ICE9IHVuZGVmaW5lZCAmJiBzeSAhPSB1bmRlZmluZWQgJiYgc1dpZHRoICE9IHVuZGVmaW5lZCAmJiBzSGVpZ2h0ICE9IHVuZGVmaW5lZCkge1xuICAgICAgICAgIGN0eC5kcmF3SW1hZ2UoaW1hZ2UsIHN4LCBzeSwgc1dpZHRoLCBzSGVpZ2h0LCB4LCB5LCB3aWR0aCwgaGVpZ2h0KTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBjdHguZHJhd0ltYWdlKGltYWdlLCB4LCB5LCB3aWR0aCwgaGVpZ2h0KTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgXG4gICAgaWYoZGVncmVlcyAhPSB1bmRlZmluZWQpIHtcbiAgICAgIGN0eC5yZXN0b3JlKCk7XG4gICAgfVxuICB9LFxuICBkcmF3VGV4dDogZnVuY3Rpb24oY3R4LCB0ZXh0LCBjb2xvciwgc2l6ZSwgZm9udEZhbWlseSwgYWxpZ25lbWVudCwgdmVydGljYWxBbGlnbmVtZW50LCB4LCB5LCB3cmFwLCBib2xkLCB1bmRlcmxpbmUsIHRleHRCYXNlbGluZSwgcGFyZW50KSB7XG4gICAgaWYoY3R4KSB7XG4gICAgICBjdHguc2F2ZSgpO1xuXG4gICAgICBpZighQXJyYXkuaXNBcnJheShjb2xvcikpIHtcbiAgICAgICAgY3R4LmZpbGxTdHlsZSA9IGNvbG9yO1xuICAgICAgICBjdHguc3Ryb2tlU3R5bGUgPSBjb2xvcjtcbiAgICAgIH1cbiAgXG4gICAgICBjdHguZm9udCA9IChib2xkID8gXCJib2xkIFwiIDogXCJcIikgKyBzaXplICsgXCJweCBcIiArIGZvbnRGYW1pbHk7XG4gICAgICBjdHgudGV4dEJhc2VsaW5lID0gdGV4dEJhc2VsaW5lIHx8IFwiYm90dG9tXCI7XG4gICAgICBjdHguZmlsdGVyID0gXCJub25lXCI7XG4gIFxuICAgICAgaWYod3JhcCkge1xuICAgICAgICB0ZXh0ID0gdGhpcy53cmFwVGV4dExpbmVzKGN0eCwgdGV4dClbXCJ0ZXh0XCJdO1xuICAgICAgfVxuICAgICAgXG4gICAgICBjb25zdCBsaW5lcyA9IHRleHQuc3BsaXQoXCJcXG5cIik7XG4gICAgICBsZXQgbWF4V2lkdGggPSAwO1xuICAgICAgbGV0IHhDdXJyZW50ID0gTWF0aC5yb3VuZCh4KTtcbiAgICAgIGxldCB5Q3VycmVudCA9IE1hdGgucm91bmQoeSkgKyBzaXplO1xuICAgICAgbGV0IHlGaXJzdCA9IDA7XG5cbiAgICAgIGlmKCF5KSB7XG4gICAgICAgIGlmKHZlcnRpY2FsQWxpZ25lbWVudCA9PSBDb25zdGFudHMuVmVydGljYWxBbGlnbmVtZW50LkNFTlRFUikge1xuICAgICAgICAgIHlDdXJyZW50ICs9IE1hdGgucm91bmQoKChwYXJlbnQgJiYgcGFyZW50LmhlaWdodCA/IHBhcmVudC5oZWlnaHQgOiB0aGlzLmdldENhbnZhc0hlaWdodChjdHguY2FudmFzKSkgLyAyKSAtIChzaXplICogbGluZXMubGVuZ3RoIC8gMikpO1xuICAgICAgICB9IGVsc2UgaWYodmVydGljYWxBbGlnbmVtZW50ID09IENvbnN0YW50cy5WZXJ0aWNhbEFsaWduZW1lbnQuQk9UVE9NKSB7XG4gICAgICAgICAgeUN1cnJlbnQgKz0gTWF0aC5yb3VuZCgoKHBhcmVudCAmJiBwYXJlbnQuaGVpZ2h0ID8gcGFyZW50LmhlaWdodCA6IHRoaXMuZ2V0Q2FudmFzSGVpZ2h0KGN0eC5jYW52YXMpKSkgLSAoc2l6ZSAqIGxpbmVzLmxlbmd0aCkgLyAyIC0gc2l6ZSAvIDUpO1xuICAgICAgICB9XG4gICAgICB9XG4gIFxuICAgICAgZm9yKGxldCBpID0gMDsgaSA8IGxpbmVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGNvbnN0IGN1cnJlbnRUZXh0ID0gbGluZXNbaV07XG4gICAgICAgIGNvbnN0IGN1cnJlbnRXaWR0aCA9IGN0eC5tZWFzdXJlVGV4dChjdXJyZW50VGV4dCkud2lkdGg7XG4gIFxuICAgICAgICBpZihBcnJheS5pc0FycmF5KGNvbG9yKSkge1xuICAgICAgICAgIGxldCBjb2xvckluZGV4ID0gaTtcbiAgXG4gICAgICAgICAgaWYoY29sb3JJbmRleCA+IGNvbG9yLmxlbmd0aCAtIDEpIHtcbiAgICAgICAgICAgIGNvbG9ySW5kZXggPSBjb2xvci5sZW5ndGggLSAxO1xuICAgICAgICAgIH1cbiAgXG4gICAgICAgICAgY3R4LmZpbGxTdHlsZSA9IGNvbG9yW2NvbG9ySW5kZXhdO1xuICAgICAgICAgIGN0eC5zdHJva2VTdHlsZSA9IGNvbG9yW2NvbG9ySW5kZXhdO1xuICAgICAgICB9XG4gIFxuICAgICAgICBpZihhbGlnbmVtZW50ID09IENvbnN0YW50cy5BbGlnbmVtZW50LkNFTlRFUikge1xuICAgICAgICAgIHhDdXJyZW50ID0gTWF0aC5yb3VuZCgocGFyZW50ICYmIHBhcmVudC54ID8gcGFyZW50LnggOiAwKSkgKyBNYXRoLnJvdW5kKCgocGFyZW50ICYmIHBhcmVudC53aWR0aCA/IHBhcmVudC53aWR0aCA6IHRoaXMuZ2V0Q2FudmFzV2lkdGgoY3R4LmNhbnZhcykpIC8gMikgLSAoY3R4Lm1lYXN1cmVUZXh0KGN1cnJlbnRUZXh0KS53aWR0aCAvIDIpKTtcbiAgICAgICAgfSBlbHNlIGlmKGFsaWduZW1lbnQgPT0gQ29uc3RhbnRzLkFsaWduZW1lbnQuUklHSFQpIHtcbiAgICAgICAgICB4Q3VycmVudCA9IE1hdGgucm91bmQoKHBhcmVudCAmJiBwYXJlbnQueCA/IHBhcmVudC54IDogMCkpICsgTWF0aC5yb3VuZCgocGFyZW50ICYmIHBhcmVudC53aWR0aCA/IHBhcmVudC53aWR0aCA6IHRoaXMuZ2V0Q2FudmFzV2lkdGgoY3R4LmNhbnZhcykpIC0gKGN0eC5tZWFzdXJlVGV4dChjdXJyZW50VGV4dCkud2lkdGgpIC0gKHBhcmVudCAmJiBwYXJlbnQuc3BhY2VCZXR3ZWVuQ29tcG9uZW50cyA/IHBhcmVudC5zcGFjZUJldHdlZW5Db21wb25lbnRzIDogQ29uc3RhbnRzLlNldHRpbmcuREVGQVVMVF9TUEFDSU5HKSk7XG4gICAgICAgIH1cblxuICAgICAgICBjdHguZmlsbFRleHQoY3VycmVudFRleHQsIHhDdXJyZW50LCB5Q3VycmVudCk7XG4gIFxuICAgICAgICBpZih1bmRlcmxpbmUpIHtcbiAgICAgICAgICBjdHgubGluZVdpZHRoID0gMTtcbiAgICAgICAgICBjdHguYmVnaW5QYXRoKCk7XG4gICAgICAgICAgY3R4Lm1vdmVUbyh4Q3VycmVudCwgeUN1cnJlbnQgLSAyKTtcbiAgICAgICAgICBjdHgubGluZVRvKE1hdGgucm91bmQoeEN1cnJlbnQgKyBjdXJyZW50V2lkdGgpLCB5Q3VycmVudCAtIDIpO1xuICAgICAgICAgIGN0eC5zdHJva2UoKTtcbiAgICAgICAgfVxuICBcbiAgICAgICAgaWYoY3VycmVudFdpZHRoID4gbWF4V2lkdGgpIG1heFdpZHRoID0gY3VycmVudFdpZHRoO1xuICAgICAgICBpZihpID09IDApIHlGaXJzdCA9IHlDdXJyZW50O1xuXG4gICAgICAgIHlDdXJyZW50ICs9IHNpemU7XG4gICAgICB9XG4gIFxuICAgICAgY3R4LnJlc3RvcmUoKTtcbiAgXG4gICAgICByZXR1cm4ge1xuICAgICAgICB4OiB4Q3VycmVudCxcbiAgICAgICAgeTogeUZpcnN0LFxuICAgICAgICBoZWlnaHQ6IHNpemUgKiBsaW5lcy5sZW5ndGgsXG4gICAgICAgIHdpZHRoOiBtYXhXaWR0aFxuICAgICAgfTtcbiAgICB9XG4gIH0sXG4gIHdyYXBUZXh0OiBmdW5jdGlvbih0ZXh0LCBsaW1pdCkge1xuICAgIGlmKHRleHQubGVuZ3RoID4gbGltaXQpIHtcbiAgICAgIGxldCBwID0gbGltaXQ7XG5cbiAgICAgIGZvcig7IHAgPiAwICYmIHRleHRbcF0gIT0gXCIgXCI7IHAtLSk7XG5cbiAgICAgIGlmKHAgPiAwKSB7XG4gICAgICAgIGNvbnN0IGxlZnQgPSB0ZXh0LnN1YnN0cmluZygwLCBwKTtcbiAgICAgICAgY29uc3QgcmlnaHQgPSB0ZXh0LnN1YnN0cmluZyhwICsgMSk7XG4gICAgICAgIHJldHVybiBsZWZ0ICsgXCJcXG5cIiArIHRoaXMud3JhcFRleHQocmlnaHQsIGxpbWl0KTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gdGV4dDtcbiAgfSxcbiAgd3JhcFRleHRMaW5lczogZnVuY3Rpb24oY3R4LCB0ZXh0LCB3aWR0aCwgZm9udFNpemUsIGZvbnRGYW1pbHksIGRpc2FibGVXcmFwKSB7XG4gICAgaWYoY3R4ICYmIHRleHQpIHtcbiAgICAgIGN0eC5zYXZlKCk7XG4gICAgICBjdHguZm9udCA9IE1hdGgucm91bmQoZm9udFNpemUpICsgXCJweCBcIiArIGZvbnRGYW1pbHk7XG4gICAgICBjdHguaW1hZ2VTbW9vdGhpbmdFbmFibGVkID0gZmFsc2U7XG4gIFxuICAgICAgY29uc3QgbGluZXMgPSB0ZXh0LnNwbGl0KFwiXFxuXCIpO1xuICAgICAgbGV0IG5ld1RleHQgPSBcIlwiO1xuICAgICAgY29uc3Qgd2lkdGhDYXIgPSB3aWR0aCB8fCBjdHgubWVhc3VyZVRleHQoXCJBXCIpLndpZHRoO1xuICAgICAgY29uc3QgbmJDYXJMaW5lID0gTWF0aC5yb3VuZCh0aGlzLmdldENhbnZhc1dpZHRoKGN0eC5jYW52YXMpIC8gd2lkdGhDYXIpO1xuICBcbiAgICAgIGxldCBoZWlnaHRUb3RhbCA9IDA7XG4gICAgICBsZXQgbWF4V2lkdGggPSAwO1xuICBcbiAgICAgIGZvcihsZXQgaSA9IDA7IGkgPCBsaW5lcy5sZW5ndGg7IGkrKykge1xuICAgICAgICBjb25zdCBsaW5lV3JhcCA9IGRpc2FibGVXcmFwID8gbGluZXNbaV0gOiB0aGlzLndyYXBUZXh0KGxpbmVzW2ldLCBuYkNhckxpbmUpO1xuICAgICAgICBuZXdUZXh0ICs9IGxpbmVXcmFwO1xuICBcbiAgICAgICAgaWYoaSA8IGxpbmVzLmxlbmd0aCAtIDEpIHtcbiAgICAgICAgICBuZXdUZXh0ICs9IFwiXFxuXCI7XG4gICAgICAgIH1cbiAgXG4gICAgICAgIGZvcihsZXQgaiA9IDA7IGogPCBsaW5lV3JhcC5zcGxpdChcIlxcblwiKS5sZW5ndGg7IGorKykge1xuICAgICAgICAgIGNvbnN0IHdpZHRoVGV4dCA9IGN0eC5tZWFzdXJlVGV4dChsaW5lV3JhcC5zcGxpdChcIlxcblwiKVtqXSkud2lkdGg7XG4gICAgICAgICAgaGVpZ2h0VG90YWwgKz0gZm9udFNpemU7XG4gICAgICAgICAgaWYod2lkdGhUZXh0ID4gbWF4V2lkdGgpIG1heFdpZHRoID0gd2lkdGhUZXh0O1xuICAgICAgICB9XG4gICAgICB9XG4gIFxuICAgICAgY3R4LnJlc3RvcmUoKTtcblxuICAgICAgcmV0dXJuIHtcbiAgICAgICAgdGV4dDogbmV3VGV4dCxcbiAgICAgICAgaGVpZ2h0OiBoZWlnaHRUb3RhbCxcbiAgICAgICAgd2lkdGg6IG1heFdpZHRoLFxuICAgICAgICBjYXJXaWR0aDogd2lkdGhDYXJcbiAgICAgIH07XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIHRleHQ6IFwiXCIsXG4gICAgICAgIGhlaWdodDogMCxcbiAgICAgICAgd2lkdGg6IDAsXG4gICAgICAgIGNhcldpZHRoOiAwXG4gICAgICB9O1xuICAgIH1cbiAgfSxcbiAgZHJhd0Fycm93OiBmdW5jdGlvbihjdHgsIGZyb214LCBmcm9teSwgdG94LCB0b3ksIGxpbmVXaWR0aCwgaGVhZFNpemUsIGNvbG9yLCBsaW5lQ2FwKSB7XG4gICAgY3R4LnNhdmUoKTtcblxuICAgIGN0eC5saW5lQ2FwID0gbGluZUNhcCB8fCBDb25zdGFudHMuU2V0dGluZy5BUlJPV19ERUZBVUxUX0xJTkVfQ0FQO1xuICAgIGN0eC5saW5lV2lkdGggPSBsaW5lV2lkdGggfHwgQ29uc3RhbnRzLlNldHRpbmcuQVJST1dfREVGQVVMVF9MSU5FX1NJWkU7XG4gICAgY3R4LnN0cm9rZVN0eWxlID0gY29sb3IgfHwgQ29uc3RhbnRzLlNldHRpbmcuQVJST1dfREVGQVVMVF9DT0xPUjtcbiAgICBjdHguZmlsdGVyID0gXCJcIjtcbiAgXG4gICAgY3R4LmJlZ2luUGF0aCgpO1xuICAgIGNvbnN0IGhlYWRsZW4gPSBoZWFkU2l6ZSB8fCBDb25zdGFudHMuU2V0dGluZy5BUlJPV19ERUZBVUxUX0hFQURfU0laRTtcbiAgICBjb25zdCBkeCA9IHRveCAtIGZyb214O1xuICAgIGNvbnN0IGR5ID0gdG95IC0gZnJvbXk7XG4gICAgY29uc3QgYW5nbGUgPSBNYXRoLmF0YW4yKGR5LCBkeCk7XG4gICAgY3R4Lm1vdmVUbyhmcm9teCwgZnJvbXkpO1xuICAgIGN0eC5saW5lVG8odG94LCB0b3kpO1xuICAgIGN0eC5tb3ZlVG8odG94LCB0b3kpO1xuICAgIGN0eC5saW5lVG8odG94IC0gaGVhZGxlbiAqIE1hdGguY29zKGFuZ2xlIC0gTWF0aC5QSSAvIDYpLCB0b3kgLSBoZWFkbGVuICogTWF0aC5zaW4oYW5nbGUgLSBNYXRoLlBJIC8gNikpO1xuICAgIGN0eC5tb3ZlVG8odG94LCB0b3kpO1xuICAgIGN0eC5saW5lVG8odG94IC0gaGVhZGxlbiAqIE1hdGguY29zKGFuZ2xlICsgTWF0aC5QSSAvIDYpLCB0b3kgLSBoZWFkbGVuICogTWF0aC5zaW4oYW5nbGUgKyBNYXRoLlBJIC8gNikpO1xuICAgIGN0eC5zdHJva2UoKTtcbiAgICBcbiAgICBjdHgucmVzdG9yZSgpO1xuICB9LFxuICBkcmF3Q3Jvc3M6IGZ1bmN0aW9uKGN0eCwgeCwgeSwgd2lkdGgsIGhlaWdodCwgbGluZVdpZHRoLCBjb2xvciwgbGluZUNhcCkge1xuICAgIGN0eC5zYXZlKCk7XG5cbiAgICBjdHgubGluZUNhcCA9IGxpbmVDYXAgfHwgQ29uc3RhbnRzLlNldHRpbmcuQ1JPU1NfREVGQVVMVF9MSU5FX0NBUDtcbiAgICBjdHgubGluZVdpZHRoID0gbGluZVdpZHRoIHx8IENvbnN0YW50cy5TZXR0aW5nLkNST1NTX0RFRkFVTFRfTElORV9TSVpFO1xuICAgIGN0eC5zdHJva2VTdHlsZSA9IGNvbG9yIHx8IENvbnN0YW50cy5TZXR0aW5nLkNST1NTX0RFRkFVTFRfQ09MT1I7XG4gICAgY3R4LmZpbHRlciA9IFwiXCI7XG4gIFxuICAgIGN0eC5iZWdpblBhdGgoKTtcbiAgICBjdHgubW92ZVRvKHgsIHkpO1xuICAgIGN0eC5saW5lVG8oeCArIHdpZHRoLCB5ICsgaGVpZ2h0KTtcbiAgICBjdHgubW92ZVRvKHggKyB3aWR0aCwgeSk7XG4gICAgY3R4LmxpbmVUbyh4LCB5ICsgaGVpZ2h0KTtcbiAgICBjdHguc3Ryb2tlKCk7XG4gICAgXG4gICAgY3R4LnJlc3RvcmUoKTtcbiAgfSxcbiAgZHJhd1RyaWFuZ2xlOiBmdW5jdGlvbihjdHgsIHgsIHksIHdpZHRoLCBoZWlnaHQsIGxpbmVXaWR0aCwgY29sb3IsIGxpbmVDYXAsIGZpbGwgPSBDb25zdGFudHMuU2V0dGluZy5UUklBTkdMRV9ERUZBVUxUX0ZJTEwsIGZpbGxDb2xvcikge1xuICAgIGN0eC5zYXZlKCk7XG5cbiAgICBjdHgubGluZUNhcCA9IGxpbmVDYXAgfHwgQ29uc3RhbnRzLlNldHRpbmcuVFJJQU5HTEVfREVGQVVMVF9MSU5FX0NBUDtcbiAgICBjdHgubGluZVdpZHRoID0gbGluZVdpZHRoIHx8IENvbnN0YW50cy5TZXR0aW5nLlRSSUFOR0xFX0RFRkFVTFRfTElORV9TSVpFO1xuICAgIGN0eC5maWx0ZXIgPSBcIlwiO1xuXG4gICAgaWYoZmlsbCkge1xuICAgICAgY3R4LmZpbGxTdHlsZSA9IGZpbGxDb2xvciB8fCBDb25zdGFudHMuU2V0dGluZy5UUklBTkdMRV9ERUZBVUxUX0ZJTExfQ09MT1I7XG4gICAgICBjdHguc3Ryb2tlU3R5bGUgPSBjb2xvciB8fCBDb25zdGFudHMuU2V0dGluZy5UUklBTkdMRV9ERUZBVUxUX0NPTE9SO1xuICAgIH0gZWxzZSB7XG4gICAgICBjdHguc3Ryb2tlU3R5bGUgPSBjb2xvciB8fCBDb25zdGFudHMuU2V0dGluZy5UUklBTkdMRV9ERUZBVUxUX0NPTE9SO1xuICAgIH1cbiAgXG4gICAgY3R4LmJlZ2luUGF0aCgpO1xuICAgIGN0eC5tb3ZlVG8oeCwgeSk7XG4gICAgY3R4LmxpbmVUbyh4ICsgd2lkdGgsIHkpO1xuICAgIGN0eC5saW5lVG8oeCArIHdpZHRoIC8gMiwgeSArIGhlaWdodCk7XG4gICAgY3R4LmxpbmVUbyh4LCB5KTtcblxuICAgIGlmKGZpbGwpIHtcbiAgICAgIGN0eC5maWxsKCk7XG4gICAgICBjdHguc3Ryb2tlKCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGN0eC5zdHJva2UoKTtcbiAgICB9XG4gICAgXG4gICAgY3R4LnJlc3RvcmUoKTtcbiAgfSxcbiAgZHJhd0NpcmNsZTogZnVuY3Rpb24oY3R4LCB4LCB5LCByYWRpdXMsIGxpbmVXaWR0aCwgY29sb3IsIGxpbmVDYXAsIGZpbGwgPSBDb25zdGFudHMuU2V0dGluZy5DSVJDTEVfREVGQVVMVF9GSUxMLCBmaWxsQ29sb3IpIHtcbiAgICBjdHguc2F2ZSgpO1xuXG4gICAgY3R4LmxpbmVDYXAgPSBsaW5lQ2FwIHx8IENvbnN0YW50cy5TZXR0aW5nLkNJUkNMRV9ERUZBVUxUX0xJTkVfQ0FQO1xuICAgIGN0eC5saW5lV2lkdGggPSBsaW5lV2lkdGggfHwgQ29uc3RhbnRzLlNldHRpbmcuQ0lSQ0xFX0RFRkFVTFRfTElORV9TSVpFO1xuICAgIGN0eC5maWx0ZXIgPSBcIlwiO1xuXG4gICAgaWYoZmlsbCkge1xuICAgICAgY3R4LmZpbGxTdHlsZSA9IGZpbGxDb2xvciB8fCBDb25zdGFudHMuU2V0dGluZy5DSVJDTEVfREVGQVVMVF9GSUxMX0NPTE9SO1xuICAgICAgY3R4LnN0cm9rZVN0eWxlID0gY29sb3IgfHwgQ29uc3RhbnRzLlNldHRpbmcuQ0lSQ0xFX0RFRkFVTFRfQ09MT1I7XG4gICAgfSBlbHNlIHtcbiAgICAgIGN0eC5zdHJva2VTdHlsZSA9IGNvbG9yIHx8IENvbnN0YW50cy5TZXR0aW5nLkNJUkNMRV9ERUZBVUxUX0NPTE9SO1xuICAgIH1cbiAgICBcbiAgICBjdHguYmVnaW5QYXRoKCk7XG4gICAgY3R4LmFyYyh4ICsgcmFkaXVzIC8gMiwgeSArIHJhZGl1cyAvIDIsIHJhZGl1cyAvIDIsIDAsIDIgKiBNYXRoLlBJLCBmYWxzZSk7XG5cbiAgICBpZihmaWxsKSB7XG4gICAgICBjdHguZmlsbCgpO1xuICAgICAgY3R4LnN0cm9rZSgpO1xuICAgIH0gZWxzZSB7XG4gICAgICBjdHguc3Ryb2tlKCk7XG4gICAgfVxuICAgIFxuICAgIGN0eC5yZXN0b3JlKCk7XG4gIH0sXG4gIGNsZWFyOiBmdW5jdGlvbihjdHgpIHtcbiAgICBjdHguY2xlYXJSZWN0KDAsIDAsIHRoaXMuZ2V0Q2FudmFzV2lkdGgoY3R4LmNhbnZhcyksIHRoaXMuZ2V0Q2FudmFzSGVpZ2h0KGN0eC5jYW52YXMpKTtcbiAgfSxcbiAgaXNGaWx0ZXJIdWVBdmFpbGFibGU6IGZ1bmN0aW9uKCkge1xuICAgIGNvbnN0IGNhbnZhcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJjYW52YXNcIik7XG4gICAgY2FudmFzLndpZHRoID0gNTtcbiAgICBjYW52YXMuaGVpZ2h0ID0gNTtcbiAgICBjb25zdCBjdHggPSBjYW52YXMuZ2V0Q29udGV4dChcIjJkXCIpO1xuICAgIGN0eC5zYXZlKCk7XG4gIFxuICAgIGN0eC5maWxsU3R5bGUgPSBcIiNGRjAwMDBcIjtcbiAgICBjdHguZmlsdGVyID0gXCJodWUtcm90YXRlKDkwZGVnKVwiO1xuICAgIGN0eC5maWxsUmVjdCgwLCAwLCA1LCA1KTtcbiAgICBjb25zdCBjb2xvciA9IGN0eC5nZXRJbWFnZURhdGEoMCwgMCwgMSwgMSkuZGF0YTtcbiAgICBjdHgucmVzdG9yZSgpO1xuICBcbiAgICBpZihjb2xvclswXSA9PSAyNTUgJiYgY29sb3JbMV0gPT0gMCAmJiBjb2xvclsyXSA9PSAwKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICBcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfSxcbiAgYmx1ckNhbnZhczogZnVuY3Rpb24oY3R4LCBsZW5ndGgpIHtcbiAgICBjdHguc2F2ZSgpO1xuICAgIGN0eC5maWx0ZXIgPSBcImJsdXIoXCIgKyBsZW5ndGggICsgXCJweClcIjtcbiAgICB0aGlzLmRyYXdJbWFnZURhdGEoY3R4LCBjdHguY2FudmFzLCAwLCAwLCB0aGlzLmdldENhbnZhc1dpZHRoKGN0eC5jYW52YXMpLCB0aGlzLmdldENhbnZhc0hlaWdodChjdHguY2FudmFzKSk7XG4gICAgY3R4LnJlc3RvcmUoKTtcbiAgfSxcbiAgcGFyc2VOdW1iZXI6IGZ1bmN0aW9uKHN0cikge1xuICAgIHJldHVybiBzdHIgPyBwYXJzZUludChzdHIubWF0Y2goL1xcZCsvKSwgMTApIDogMDtcbiAgfSxcbiAgZ2V0Rm9udFNpemU6IGZ1bmN0aW9uKGN0eCkge1xuICAgIHJldHVybiBNYXRoLmZsb29yKHBhcnNlTnVtYmVyKGN0eC5mb250KSAvIDEuMjUpO1xuICB9LFxuICBnZXRDYW52YXNXaWR0aChjYW52YXMpIHtcbiAgICByZXR1cm4gdGhpcy5wYXJzZU51bWJlcihjYW52YXMuc3R5bGUud2lkdGgpIHx8IGNhbnZhcy53aWR0aDtcbiAgfSxcbiAgZ2V0Q2FudmFzSGVpZ2h0KGNhbnZhcykge1xuICAgIHJldHVybiB0aGlzLnBhcnNlTnVtYmVyKGNhbnZhcy5zdHlsZS5oZWlnaHQpIHx8IGNhbnZhcy5oZWlnaHQ7XG4gIH0sXG4gIGF1dG9EUEkoY2FudmFzKSB7XG4gICAgY29uc3QgcmVjdCA9IGNhbnZhcy5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcblxuICAgIGNhbnZhcy53aWR0aCA9IHJlY3Qud2lkdGggKiBDb25zdGFudHMuU2V0dGluZy5QSVhFTF9SQVRJTztcbiAgICBjYW52YXMuaGVpZ2h0ID0gcmVjdC5oZWlnaHQgKiBDb25zdGFudHMuU2V0dGluZy5QSVhFTF9SQVRJTztcbiAgICBcbiAgICBjYW52YXMuc3R5bGUud2lkdGggPSByZWN0LndpZHRoICsgXCJweFwiO1xuICAgIGNhbnZhcy5zdHlsZS5oZWlnaHQgPSAgcmVjdC5oZWlnaHQgKyBcInB4XCI7XG4gIH0sXG4gIGF1dG9SZXNpemVDYW52YXM6IGZ1bmN0aW9uKGNhbnZhcywgY29udGFpbmVyLCBpbml0aWFsV2lkdGgsIGluaXRpYWxIZWlnaHQpIHtcbiAgICBpZighZG9jdW1lbnQuZnVsbHNjcmVlbkVsZW1lbnQpIHtcbiAgICAgIGlmKGluaXRpYWxXaWR0aCA+PSBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuY2xpZW50V2lkdGggKiAwLjg1KSB7XG4gICAgICAgIHZhciByYXRpbyA9IGluaXRpYWxXaWR0aCAvIGluaXRpYWxIZWlnaHQ7XG4gICAgICAgIGNhbnZhcy53aWR0aCA9IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5jbGllbnRXaWR0aCAqIDAuODU7XG4gICAgICAgIGNhbnZhcy5oZWlnaHQgPSBjYW52YXMud2lkdGggLyByYXRpbztcblxuICAgICAgICBpZihjYW52YXMuc3R5bGUpIHtcbiAgICAgICAgICBjYW52YXMuc3R5bGUud2lkdGggPSBjYW52YXMud2lkdGggKyBcInB4XCI7XG4gICAgICAgICAgY2FudmFzLnN0eWxlLmhlaWdodCA9IGNhbnZhcy5oZWlnaHQgKyBcInB4XCI7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGNhbnZhcy53aWR0aCA9IGluaXRpYWxXaWR0aDtcbiAgICAgICAgY2FudmFzLmhlaWdodCA9IGluaXRpYWxIZWlnaHQ7XG5cbiAgICAgICAgaWYoY2FudmFzLnN0eWxlKSB7XG4gICAgICAgICAgY2FudmFzLnN0eWxlLndpZHRoID0gaW5pdGlhbFdpZHRoICsgXCJweFwiO1xuICAgICAgICAgIGNhbnZhcy5zdHlsZS5oZWlnaHQgPSBpbml0aWFsSGVpZ2h0ICsgXCJweFwiO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSBlbHNlIGlmKGRvY3VtZW50LmZ1bGxzY3JlZW5FbGVtZW50ID09IGNhbnZhcyB8fCBkb2N1bWVudC5mdWxsc2NyZWVuRWxlbWVudCA9PSBjb250YWluZXIpIHtcbiAgICAgIGNhbnZhcy53aWR0aCA9IHdpbmRvdy5pbm5lcldpZHRoO1xuICAgICAgY2FudmFzLmhlaWdodCA9IHdpbmRvdy5pbm5lckhlaWdodDtcblxuICAgICAgaWYoY2FudmFzLnN0eWxlKSB7XG4gICAgICAgIGNhbnZhcy5zdHlsZS53aWR0aCA9IHdpbmRvdy5pbm5lcldpZHRoICsgXCJweFwiO1xuICAgICAgICBjYW52YXMuc3R5bGUuaGVpZ2h0ID0gd2luZG93LmlubmVySGVpZ2h0ICsgXCJweFwiO1xuICAgICAgfVxuXG4gICAgICBpZihjb250YWluZXIpIHtcbiAgICAgICAgY29udGFpbmVyLndpZHRoID0gd2luZG93LmlubmVyV2lkdGg7XG4gICAgICAgIGNvbnRhaW5lci5oZWlnaHQgPSB3aW5kb3cuaW5uZXJIZWlnaHQ7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIGNhbnZhcy53aWR0aCA9IGluaXRpYWxXaWR0aDtcbiAgICAgIGNhbnZhcy5oZWlnaHQgPSBpbml0aWFsSGVpZ2h0O1xuXG4gICAgICBpZihjYW52YXMuc3R5bGUpIHtcbiAgICAgICAgY2FudmFzLnN0eWxlLndpZHRoID0gaW5pdGlhbFdpZHRoICsgXCJweFwiO1xuICAgICAgICBjYW52YXMuc3R5bGUuaGVpZ2h0ID0gaW5pdGlhbEhlaWdodCArIFwicHhcIjtcbiAgICAgIH1cbiAgICB9XG4gIH0sXG4gIGVuYWJsZUF1dG9SZXNpemVDYW52YXM6IGZ1bmN0aW9uKGNhbnZhcywgY29udGFpbmVyLCBpbml0aWFsV2lkdGgsIGluaXRpYWxIZWlnaHQpIHtcbiAgICBpZihjYW52YXMgJiYgY2FudmFzLmdldEF0dHJpYnV0ZShcImF1dG9yZXNpemUtY2FudmFzLWV2ZW50XCIpICE9IFwidHJ1ZVwiKSB7XG4gICAgICB0aGlzLmF1dG9SZXNpemVDYW52YXMoY2FudmFzLCBjb250YWluZXIsIGluaXRpYWxXaWR0aCwgaW5pdGlhbEhlaWdodCk7XG4gIFxuICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJyZXNpemVcIiwgKCkgPT4ge1xuICAgICAgICBjYW52YXMuc2V0QXR0cmlidXRlKFwiYXV0b3Jlc2l6ZS1jYW52YXMtZXZlbnRcIiwgXCJ0cnVlXCIpO1xuICAgICAgICB0aGlzLmF1dG9SZXNpemVDYW52YXMoY2FudmFzLCBjb250YWluZXIsIGluaXRpYWxXaWR0aCwgaW5pdGlhbEhlaWdodCk7XG4gICAgICB9KTtcbiAgICB9XG4gIH0sXG4gIGF1dG9SZXNpemVDYW52YXNGdWxsc2NyZWVuOiBmdW5jdGlvbihjYW52YXMsIGNvbnRhaW5lcikge1xuICAgIGlmKGRvY3VtZW50LmZ1bGxzY3JlZW5FbGVtZW50ID09IGNhbnZhcyB8fCBkb2N1bWVudC5mdWxsc2NyZWVuRWxlbWVudCA9PSBjb250YWluZXIpIHtcbiAgICAgIGNhbnZhcy53aWR0aCA9IHdpbmRvdy5pbm5lcldpZHRoO1xuICAgICAgY2FudmFzLmhlaWdodCA9IHdpbmRvdy5pbm5lckhlaWdodDtcblxuICAgICAgaWYoY2FudmFzLnN0eWxlKSB7XG4gICAgICAgIGNhbnZhcy5zdHlsZS53aWR0aCA9IHdpbmRvdy5pbm5lcldpZHRoICsgXCJweFwiO1xuICAgICAgICBjYW52YXMuc3R5bGUuaGVpZ2h0ID0gd2luZG93LmlubmVySGVpZ2h0ICsgXCJweFwiO1xuICAgICAgfVxuICAgICAgXG4gICAgICBpZihjb250YWluZXIpIHtcbiAgICAgICAgY29udGFpbmVyLndpZHRoID0gd2luZG93LmlubmVyV2lkdGg7XG4gICAgICAgIGNvbnRhaW5lci5oZWlnaHQgPSB3aW5kb3cuaW5uZXJIZWlnaHQ7XG4gICAgICB9XG4gICAgfVxuICB9LFxuICBlbmFibGVBdXRvUmVzaXplQ2FudmFzRnVsbHNjcmVlbjogZnVuY3Rpb24oY2FudmFzLCBjb250YWluZXIpIHtcbiAgICBpZihjYW52YXMgJiYgY2FudmFzLmdldEF0dHJpYnV0ZShcImF1dG9yZXNpemVmdWxsc2NyZWVuLWNhbnZhcy1ldmVudFwiKSAhPSBcInRydWVcIikge1xuICAgICAgdGhpcy5hdXRvUmVzaXplQ2FudmFzRnVsbHNjcmVlbihjYW52YXMsIGNvbnRhaW5lcik7XG4gIFxuICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJyZXNpemVcIiwgKCkgPT4ge1xuICAgICAgICBjYW52YXMuc2V0QXR0cmlidXRlKFwiYXV0b3Jlc2l6ZWZ1bGxzY3JlZW4tY2FudmFzLWV2ZW50XCIsIFwidHJ1ZVwiKTtcbiAgICAgICAgdGhpcy5hdXRvUmVzaXplQ2FudmFzRnVsbHNjcmVlbihjYW52YXMsIGNvbnRhaW5lcik7XG4gICAgICB9KTtcbiAgICB9XG4gIH0sXG4gIGF1dG9SZXNpemVDYW52YXNGdWxscGFnZTogZnVuY3Rpb24oY2FudmFzLCBjb250YWluZXIpIHtcbiAgICBpZihjYW52YXMgJiYgY2FudmFzLmdldEF0dHJpYnV0ZShcImZ1bGxwYWdlLWNhbnZhcy1lbmFibGVcIikgPT0gXCJ0cnVlXCIpIHtcbiAgICAgIGNhbnZhcy53aWR0aCA9IHdpbmRvdy5pbm5lcldpZHRoO1xuICAgICAgY2FudmFzLmhlaWdodCA9IHdpbmRvdy5pbm5lckhlaWdodDtcbiAgICAgIFxuICAgICAgaWYoY2FudmFzLnN0eWxlKSB7XG4gICAgICAgIGNhbnZhcy5zdHlsZS53aWR0aCA9IHdpbmRvdy5pbm5lcldpZHRoICsgXCJweFwiO1xuICAgICAgICBjYW52YXMuc3R5bGUuaGVpZ2h0ID0gd2luZG93LmlubmVySGVpZ2h0ICsgXCJweFwiO1xuICAgICAgfVxuICAgICAgXG4gICAgICBpZihjb250YWluZXIpIHtcbiAgICAgICAgY29udGFpbmVyLndpZHRoID0gd2luZG93LmlubmVyV2lkdGg7XG4gICAgICAgIGNvbnRhaW5lci5oZWlnaHQgPSB3aW5kb3cuaW5uZXJIZWlnaHQ7XG4gICAgICAgIGNvbnRhaW5lci5zdHlsZS5tYXJnaW4gPSAwO1xuICAgICAgICBjb250YWluZXIuc3R5bGUucGFkZGluZyA9IDA7XG4gICAgICB9XG5cbiAgICAgIGRvY3VtZW50LmJvZHkuc3R5bGUubWFyZ2luID0gMDtcbiAgICAgIGRvY3VtZW50LmJvZHkuc3R5bGUucGFkZGluZyA9IDA7XG4gICAgfVxuICB9LFxuICBlbmFibGVBdXRvUmVzaXplQ2FudmFzRnVsbHBhZ2U6IGZ1bmN0aW9uKGNhbnZhcywgY29udGFpbmVyKSB7XG4gICAgaWYoY2FudmFzICYmIGNhbnZhcy5nZXRBdHRyaWJ1dGUoXCJhdXRvcmVzaXplZnVsbHBhZ2UtY2FudmFzLWV2ZW50XCIpICE9IFwidHJ1ZVwiKSB7XG4gICAgICB0aGlzLmF1dG9SZXNpemVDYW52YXNGdWxscGFnZShjYW52YXMsIGNvbnRhaW5lcik7XG4gIFxuICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJyZXNpemVcIiwgKCkgPT4ge1xuICAgICAgICBjYW52YXMuc2V0QXR0cmlidXRlKFwiYXV0b3Jlc2l6ZWZ1bGxwYWdlLWNhbnZhcy1ldmVudFwiLCBcInRydWVcIik7XG4gICAgICAgIHRoaXMuYXV0b1Jlc2l6ZUNhbnZhc0Z1bGxwYWdlKGNhbnZhcywgY29udGFpbmVyKTtcbiAgICAgIH0pO1xuICAgIH1cbiAgfSxcbiAgdG9nZ2xlRnVsbHNjcmVlbjogZnVuY3Rpb24oY2FudmFzLCBjb250YWluZXIpIHtcbiAgICBpZihjYW52YXMpIHtcbiAgICAgIGNvbnN0IGluaXRpYWxXaWR0aCA9IGNhbnZhcy53aWR0aDtcbiAgICAgIGNvbnN0IGluaXRpYWxIZWlnaHQgPSBjYW52YXMuaGVpZ2h0O1xuXG4gICAgICBpZihjb250YWluZXIpIHtcbiAgICAgICAgY29udGFpbmVyLndpZHRoID0gaW5pdGlhbFdpZHRoO1xuICAgICAgICBjb250YWluZXIuaGVpZ2h0ID0gaW5pdGlhbEhlaWdodDtcbiAgICAgIH1cblxuICAgICAgaWYoIWRvY3VtZW50LmZ1bGxzY3JlZW5FbGVtZW50KSB7XG4gICAgICAgIGlmKChjb250YWluZXIgfHwgY2FudmFzKS5yZXF1ZXN0RnVsbHNjcmVlbikge1xuICAgICAgICAgIChjb250YWluZXIgfHwgY2FudmFzKS5yZXF1ZXN0RnVsbHNjcmVlbigpO1xuICAgICAgICB9IGVsc2UgaWYoKGNvbnRhaW5lciB8fCBjYW52YXMpLm1velJlcXVlc3RGdWxsU2NyZWVuKSB7XG4gICAgICAgICAgKGNvbnRhaW5lciB8fCBjYW52YXMpLm1velJlcXVlc3RGdWxsU2NyZWVuKCk7XG4gICAgICAgIH0gZWxzZSBpZigoY29udGFpbmVyIHx8IGNhbnZhcykud2Via2l0UmVxdWVzdEZ1bGxzY3JlZW4pIHtcbiAgICAgICAgICAoY29udGFpbmVyIHx8IGNhbnZhcykud2Via2l0UmVxdWVzdEZ1bGxzY3JlZW4oKTtcbiAgICAgICAgfSBlbHNlIGlmKChjb250YWluZXIgfHwgY2FudmFzKS5tc1JlcXVlc3RGdWxsc2NyZWVuKSB7XG4gICAgICAgICAgKGNvbnRhaW5lciB8fCBjYW52YXMpLm1zUmVxdWVzdEZ1bGxzY3JlZW4oKTtcbiAgICAgICAgfSBlbHNlIGlmKChjb250YWluZXIgfHwgY2FudmFzKS5vUmVxdWVzdEZ1bGxzY3JlZW4pIHtcbiAgICAgICAgICAoY29udGFpbmVyIHx8IGNhbnZhcykub1JlcXVlc3RGdWxsc2NyZWVuKCk7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGlmKGRvY3VtZW50LmV4aXRGdWxsc2NyZWVuKSB7XG4gICAgICAgICAgZG9jdW1lbnQuZXhpdEZ1bGxzY3JlZW4oKTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICB0aGlzLmVuYWJsZUF1dG9SZXNpemVDYW52YXNGdWxsc2NyZWVuKGNhbnZhcywgY29udGFpbmVyKTtcblxuICAgICAgaWYoY2FudmFzLmdldEF0dHJpYnV0ZShcImZ1bGxzY3JlZW5jaGFuZ2UtY2FudmFzLWV2ZW50XCIpICE9IFwidHJ1ZVwiKSB7XG4gICAgICAgIGNhbnZhcy5zZXRBdHRyaWJ1dGUoXCJmdWxsc2NyZWVuY2hhbmdlLWNhbnZhcy1ldmVudFwiLCBcInRydWVcIik7XG5cbiAgICAgICAgY29uc3Qgb25mdWxsc2NyZWVuY2hhbmdlID0gKCkgPT4ge1xuICAgICAgICAgIGlmKGRvY3VtZW50LmZ1bGxzY3JlZW5FbGVtZW50ICE9IChjb250YWluZXIgfHwgY2FudmFzKSkge1xuICAgICAgICAgICAgY2FudmFzLndpZHRoID0gaW5pdGlhbFdpZHRoO1xuICAgICAgICAgICAgY2FudmFzLmhlaWdodCA9IGluaXRpYWxIZWlnaHQ7XG4gICAgICBcbiAgICAgICAgICAgIGlmKGNvbnRhaW5lcikge1xuICAgICAgICAgICAgICBjb250YWluZXIud2lkdGggPSBpbml0aWFsV2lkdGg7XG4gICAgICAgICAgICAgIGNvbnRhaW5lci5oZWlnaHQgPSBpbml0aWFsSGVpZ2h0O1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICBcbiAgICAgICAgaWYodHlwZW9mKGRvY3VtZW50Lm9uZnVsbHNjcmVlbmNoYW5nZSkgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBkb2N1bWVudC5vbmZ1bGxzY3JlZW5jaGFuZ2UgPSBvbmZ1bGxzY3JlZW5jaGFuZ2U7XG4gICAgICAgIH0gZWxzZSBpZih0eXBlb2YoZG9jdW1lbnQub25tc2Z1bGxzY3JlZW5jaGFuZ2UpICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgZG9jdW1lbnQub25tc2Z1bGxzY3JlZW5jaGFuZ2UgPSBvbmZ1bGxzY3JlZW5jaGFuZ2U7XG4gICAgICAgIH0gZWxzZSBpZih0eXBlb2YoZG9jdW1lbnQub25tb3pmdWxsc2NyZWVuY2hhbmdlKSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGRvY3VtZW50Lm9ubW96ZnVsbHNjcmVlbmNoYW5nZSA9IG9uZnVsbHNjcmVlbmNoYW5nZTtcbiAgICAgICAgfSBlbHNlIGlmKHR5cGVvZihkb2N1bWVudC5vbndlYmtpdGZ1bGxzY3JlZW5jaGFuZ2UpICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgZG9jdW1lbnQub253ZWJraXRmdWxsc2NyZWVuY2hhbmdlID0gb25mdWxsc2NyZWVuY2hhbmdlO1xuICAgICAgICB9IGVsc2UgaWYodHlwZW9mKGRvY3VtZW50Lm9ub2tpdGZ1bGxzY3JlZW5jaGFuZ2UpICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgZG9jdW1lbnQub25vZnVsbHNjcmVlbmNoYW5nZSA9IG9uZnVsbHNjcmVlbmNoYW5nZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfSxcbiAgdG9nZ2xlRnVsbHBhZ2U6IGZ1bmN0aW9uKGNhbnZhcywgY29udGFpbmVyKSB7XG4gICAgaWYoY2FudmFzKSB7XG4gICAgICBjb25zdCBpbml0aWFsV2lkdGggPSBjYW52YXMud2lkdGg7XG4gICAgICBjb25zdCBpbml0aWFsSGVpZ2h0ID0gY2FudmFzLmhlaWdodDtcblxuICAgICAgaWYoY29udGFpbmVyKSB7XG4gICAgICAgIGNvbnRhaW5lci53aWR0aCA9IGluaXRpYWxXaWR0aDtcbiAgICAgICAgY29udGFpbmVyLmhlaWdodCA9IGluaXRpYWxIZWlnaHQ7XG4gICAgICB9XG5cbiAgICAgIGlmKCFjYW52YXMuZ2V0QXR0cmlidXRlKFwiZnVsbHBhZ2UtY2FudmFzLWVuYWJsZVwiKSB8fCBjYW52YXMuZ2V0QXR0cmlidXRlKFwiZnVsbHBhZ2UtY2FudmFzLWVuYWJsZVwiKSA9PSBcImZhbHNlXCIpIHtcbiAgICAgICAgY2FudmFzLnNldEF0dHJpYnV0ZShcImZ1bGxwYWdlLWNhbnZhcy1lbmFibGVcIiwgXCJ0cnVlXCIpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgY2FudmFzLnNldEF0dHJpYnV0ZShcImZ1bGxwYWdlLWNhbnZhcy1lbmFibGVcIiwgXCJmYWxzZVwiKTtcbiAgICAgIH1cblxuICAgICAgdGhpcy5lbmFibGVBdXRvUmVzaXplQ2FudmFzRnVsbHBhZ2UoY2FudmFzLCBjb250YWluZXIpO1xuICAgIH1cbiAgfSxcbiAgZ2V0TW91c2VQb3MoY2FudmFzLCBldmVudCkge1xuICAgIGNvbnN0IHJlY3QgPSBjYW52YXMuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG4gICAgXG4gICAgcmV0dXJuIHtcbiAgICAgIHg6IGV2ZW50LmNsaWVudFggLSByZWN0LmxlZnQsXG4gICAgICB5OiBldmVudC5jbGllbnRZIC0gcmVjdC50b3BcbiAgICB9O1xuICB9XG59OyIsIi8qXG4gKiBDb3B5cmlnaHQgKEMpIDIwMjAgRWxpYXN0aWsgKGVsaWFzdGlrc29mdHMuY29tKVxuICpcbiAqIFRoaXMgZmlsZSBpcyBwYXJ0IG9mIFwiSlNHYW1lVG9vbHNcIi5cbiAqXG4gKiBcIkpTR2FtZVRvb2xzXCIgaXMgZnJlZSBzb2Z0d2FyZTogeW91IGNhbiByZWRpc3RyaWJ1dGUgaXQgYW5kL29yIG1vZGlmeVxuICogaXQgdW5kZXIgdGhlIHRlcm1zIG9mIHRoZSBHTlUgR2VuZXJhbCBQdWJsaWMgTGljZW5zZSBhcyBwdWJsaXNoZWQgYnlcbiAqIHRoZSBGcmVlIFNvZnR3YXJlIEZvdW5kYXRpb24sIGVpdGhlciB2ZXJzaW9uIDMgb2YgdGhlIExpY2Vuc2UsIG9yXG4gKiAoYXQgeW91ciBvcHRpb24pIGFueSBsYXRlciB2ZXJzaW9uLlxuICpcbiAqIFwiSlNHYW1lVG9vbHNcIiBpcyBkaXN0cmlidXRlZCBpbiB0aGUgaG9wZSB0aGF0IGl0IHdpbGwgYmUgdXNlZnVsLFxuICogYnV0IFdJVEhPVVQgQU5ZIFdBUlJBTlRZOyB3aXRob3V0IGV2ZW4gdGhlIGltcGxpZWQgd2FycmFudHkgb2ZcbiAqIE1FUkNIQU5UQUJJTElUWSBvciBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRS4gIFNlZSB0aGVcbiAqIEdOVSBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlIGZvciBtb3JlIGRldGFpbHMuXG4gKlxuICogWW91IHNob3VsZCBoYXZlIHJlY2VpdmVkIGEgY29weSBvZiB0aGUgR05VIEdlbmVyYWwgUHVibGljIExpY2Vuc2VcbiAqIGFsb25nIHdpdGggXCJKU0dhbWVUb29sc1wiLiAgSWYgbm90LCBzZWUgPGh0dHA6Ly93d3cuZ251Lm9yZy9saWNlbnNlcy8+LlxuICovXG5pbXBvcnQgQ29uc3RhbnRzIGZyb20gXCIuL0NvbnN0YW50c1wiO1xuaW1wb3J0IEJ1dHRvbiBmcm9tIFwiLi9CdXR0b25cIjtcbmltcG9ydCBCdXR0b25JbWFnZSBmcm9tIFwiLi9CdXR0b25JbWFnZVwiO1xuaW1wb3J0IEltYWdlTG9hZGVyIGZyb20gXCIuL0ltYWdlTG9hZGVyXCI7XG5pbXBvcnQgTm90aWZpY2F0aW9uTWVzc2FnZSBmcm9tIFwiLi9Ob3RpZmljYXRpb25NZXNzYWdlXCI7XG5pbXBvcnQgVXRpbHMgZnJvbSBcIi4vVXRpbHNcIjtcbmltcG9ydCBNZW51IGZyb20gXCIuL01lbnVcIjtcbmltcG9ydCBJbnB1dCBmcm9tIFwiLi9JbnB1dFwiO1xuaW1wb3J0IExhYmVsIGZyb20gXCIuL0xhYmVsXCI7XG5pbXBvcnQgTGluayBmcm9tIFwiLi9MaW5rXCI7XG5pbXBvcnQgVG9vbHRpcCBmcm9tIFwiLi9Ub29sdGlwXCI7XG5pbXBvcnQgU2NlbmUgZnJvbSBcIi4vU2NlbmVcIjtcbmltcG9ydCBGUFNNZXRlciBmcm9tIFwiLi9GUFNNZXRlclwiO1xuaW1wb3J0IFByb2dyZXNzQmFyIGZyb20gXCIuL1Byb2dyZXNzQmFyXCI7XG5pbXBvcnQgQ2FudmFzIGZyb20gXCIuL0NhbnZhc1wiO1xuaW1wb3J0IENvbXBvbmVudCBmcm9tIFwiLi9Db21wb25lbnRcIjtcbmltcG9ydCBFYXNpbmdGdW5jdGlvbnMgZnJvbSBcIi4vRWFzaW5nRnVuY3Rpb25zXCI7XG5pbXBvcnQgQ29sIGZyb20gXCIuL0NvbFwiO1xuaW1wb3J0IENvbnRhaW5lciBmcm9tIFwiLi9Db250YWluZXJcIjtcbmltcG9ydCBSb3cgZnJvbSBcIi4vUm93XCI7XG5pbXBvcnQgSW1hZ2VDb250YWluZXIgZnJvbSBcIi4vSW1hZ2VDb250YWluZXJcIjtcbmltcG9ydCBBcnJvdyBmcm9tIFwiLi9BcnJvd1wiO1xuaW1wb3J0IENyb3NzIGZyb20gXCIuL0Nyb3NzXCI7XG5pbXBvcnQgU2Nyb2xsYmFyIGZyb20gXCIuL1Njcm9sbGJhclwiO1xuaW1wb3J0IFNjcm9sbGJhclZlcnRpY2FsIGZyb20gXCIuL1Njcm9sbGJhclZlcnRpY2FsXCI7XG5pbXBvcnQgU2Nyb2xsYmFySG9yaXpvbnRhbCBmcm9tIFwiLi9TY3JvbGxiYXJIb3Jpem9udGFsXCI7XG5pbXBvcnQgQm94IGZyb20gXCIuL0JveFwiO1xuaW1wb3J0IFN0eWxlIGZyb20gXCIuL1N0eWxlXCI7XG5pbXBvcnQgU2VsZWN0IGZyb20gXCIuL1NlbGVjdFwiO1xuaW1wb3J0IFNlbGVjdE9wdGlvbiBmcm9tIFwiLi9TZWxlY3RPcHRpb25cIjtcbmltcG9ydCBTZWxlY3RPcHRpb25zQ29udGFpbmVyIGZyb20gXCIuL1NlbGVjdE9wdGlvbnNDb250YWluZXJcIjtcbmltcG9ydCBUcmlhbmdsZSBmcm9tIFwiLi9UcmlhbmdsZVwiO1xuaW1wb3J0IENpcmNsZSBmcm9tIFwiLi9DaXJjbGVcIjtcbmltcG9ydCBSZWFjdG9yIGZyb20gXCIuL1JlYWN0b3JcIjtcbmltcG9ydCBFdmVudCBmcm9tIFwiLi9FdmVudFwiO1xuaW1wb3J0IFJlYWN0b3JDYW52YXMgZnJvbSBcIi4vUmVhY3RvckNhbnZhc1wiO1xuXG5leHBvcnQgeyBDb25zdGFudHMsIEJ1dHRvbiwgQnV0dG9uSW1hZ2UsIEltYWdlTG9hZGVyLCBOb3RpZmljYXRpb25NZXNzYWdlLCBVdGlscywgTWVudSwgSW5wdXQsIExhYmVsLCBMaW5rLCBUb29sdGlwLCBTY2VuZSwgRlBTTWV0ZXIsIFByb2dyZXNzQmFyLCBDYW52YXMsIENvbXBvbmVudCwgRWFzaW5nRnVuY3Rpb25zLCBDb2wsIENvbnRhaW5lciwgUm93LCBJbWFnZUNvbnRhaW5lciwgQXJyb3csIENyb3NzLCBTY3JvbGxiYXIsIFNjcm9sbGJhclZlcnRpY2FsLCBTY3JvbGxiYXJIb3Jpem9udGFsLCBCb3gsIFN0eWxlLCBTZWxlY3QsIFNlbGVjdE9wdGlvbiwgU2VsZWN0T3B0aW9uc0NvbnRhaW5lciwgVHJpYW5nbGUsIENpcmNsZSwgUmVhY3RvciwgRXZlbnQsIFJlYWN0b3JDYW52YXMgfTsiXSwic291cmNlUm9vdCI6IiJ9