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
  }, {
    key: "cursor",
    set: function set(cursor) {
      if (this.canvas) this.canvas.style.cursor = cursor;
    },
    get: function get() {
      return this.canvas ? this.canvas.style.cursor : "";
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
      } else if (this.movable && this.hovered) {
        this.canvas.cursor = "grab";
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
      if ((this.hovered || this.clicked) && this.canvas) this.canvas.cursor = "text";

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

      if (this.clicked) {
        this.style.set("underline", false);
        this.style.set("fontColor", this.style.fontColorDown);
        if (!this.movable) this.canvas.cursor = "pointer";
      } else if (this.hovered || this.selected) {
        this.style.set("underline", false);
        this.style.set("fontColor", this.style.fontColorHover);
        if (this.hovered && !this.movable) this.canvas.cursor = "pointer";
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
      this.canvas.cursor = "default";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9KU0dhbWVUb29scy93ZWJwYWNrL3VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24iLCJ3ZWJwYWNrOi8vSlNHYW1lVG9vbHMvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vSlNHYW1lVG9vbHMvLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9hcnJheUxpa2VUb0FycmF5LmpzIiwid2VicGFjazovL0pTR2FtZVRvb2xzLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvYXJyYXlXaXRob3V0SG9sZXMuanMiLCJ3ZWJwYWNrOi8vSlNHYW1lVG9vbHMvLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQuanMiLCJ3ZWJwYWNrOi8vSlNHYW1lVG9vbHMvLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9jbGFzc0NhbGxDaGVjay5qcyIsIndlYnBhY2s6Ly9KU0dhbWVUb29scy8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2NsYXNzUHJpdmF0ZUZpZWxkR2V0LmpzIiwid2VicGFjazovL0pTR2FtZVRvb2xzLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvY2xhc3NQcml2YXRlRmllbGRTZXQuanMiLCJ3ZWJwYWNrOi8vSlNHYW1lVG9vbHMvLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9jb25zdHJ1Y3QuanMiLCJ3ZWJwYWNrOi8vSlNHYW1lVG9vbHMvLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9jcmVhdGVDbGFzcy5qcyIsIndlYnBhY2s6Ly9KU0dhbWVUb29scy8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2RlZmluZVByb3BlcnR5LmpzIiwid2VicGFjazovL0pTR2FtZVRvb2xzLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZ2V0LmpzIiwid2VicGFjazovL0pTR2FtZVRvb2xzLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZ2V0UHJvdG90eXBlT2YuanMiLCJ3ZWJwYWNrOi8vSlNHYW1lVG9vbHMvLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9pbmhlcml0cy5qcyIsIndlYnBhY2s6Ly9KU0dhbWVUb29scy8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2lzTmF0aXZlUmVmbGVjdENvbnN0cnVjdC5qcyIsIndlYnBhY2s6Ly9KU0dhbWVUb29scy8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2l0ZXJhYmxlVG9BcnJheS5qcyIsIndlYnBhY2s6Ly9KU0dhbWVUb29scy8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL25vbkl0ZXJhYmxlU3ByZWFkLmpzIiwid2VicGFjazovL0pTR2FtZVRvb2xzLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvcG9zc2libGVDb25zdHJ1Y3RvclJldHVybi5qcyIsIndlYnBhY2s6Ly9KU0dhbWVUb29scy8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL3NldC5qcyIsIndlYnBhY2s6Ly9KU0dhbWVUb29scy8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL3NldFByb3RvdHlwZU9mLmpzIiwid2VicGFjazovL0pTR2FtZVRvb2xzLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvc3VwZXJQcm9wQmFzZS5qcyIsIndlYnBhY2s6Ly9KU0dhbWVUb29scy8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL3RvQ29uc3VtYWJsZUFycmF5LmpzIiwid2VicGFjazovL0pTR2FtZVRvb2xzLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvdHlwZW9mLmpzIiwid2VicGFjazovL0pTR2FtZVRvb2xzLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvdW5zdXBwb3J0ZWRJdGVyYWJsZVRvQXJyYXkuanMiLCJ3ZWJwYWNrOi8vSlNHYW1lVG9vbHMvLi9zcmMvQXJyb3cuanMiLCJ3ZWJwYWNrOi8vSlNHYW1lVG9vbHMvLi9zcmMvQm94LmpzIiwid2VicGFjazovL0pTR2FtZVRvb2xzLy4vc3JjL0J1dHRvbi5qcyIsIndlYnBhY2s6Ly9KU0dhbWVUb29scy8uL3NyYy9CdXR0b25JbWFnZS5qcyIsIndlYnBhY2s6Ly9KU0dhbWVUb29scy8uL3NyYy9DYW52YXMuanMiLCJ3ZWJwYWNrOi8vSlNHYW1lVG9vbHMvLi9zcmMvQ2lyY2xlLmpzIiwid2VicGFjazovL0pTR2FtZVRvb2xzLy4vc3JjL0NvbC5qcyIsIndlYnBhY2s6Ly9KU0dhbWVUb29scy8uL3NyYy9Db21wb25lbnQuanMiLCJ3ZWJwYWNrOi8vSlNHYW1lVG9vbHMvLi9zcmMvQ29uc3RhbnRzLmpzIiwid2VicGFjazovL0pTR2FtZVRvb2xzLy4vc3JjL0NvbnRhaW5lci5qcyIsIndlYnBhY2s6Ly9KU0dhbWVUb29scy8uL3NyYy9Dcm9zcy5qcyIsIndlYnBhY2s6Ly9KU0dhbWVUb29scy8uL3NyYy9FYXNpbmdGdW5jdGlvbnMuanMiLCJ3ZWJwYWNrOi8vSlNHYW1lVG9vbHMvLi9zcmMvRXJyb3JTY3JlZW4uanMiLCJ3ZWJwYWNrOi8vSlNHYW1lVG9vbHMvLi9zcmMvRXZlbnQuanMiLCJ3ZWJwYWNrOi8vSlNHYW1lVG9vbHMvLi9zcmMvRlBTTWV0ZXIuanMiLCJ3ZWJwYWNrOi8vSlNHYW1lVG9vbHMvLi9zcmMvSW1hZ2VDb250YWluZXIuanMiLCJ3ZWJwYWNrOi8vSlNHYW1lVG9vbHMvLi9zcmMvSW1hZ2VMb2FkZXIuanMiLCJ3ZWJwYWNrOi8vSlNHYW1lVG9vbHMvLi9zcmMvSW5wdXQuanMiLCJ3ZWJwYWNrOi8vSlNHYW1lVG9vbHMvLi9zcmMvTGFiZWwuanMiLCJ3ZWJwYWNrOi8vSlNHYW1lVG9vbHMvLi9zcmMvTGluay5qcyIsIndlYnBhY2s6Ly9KU0dhbWVUb29scy8uL3NyYy9NZW51LmpzIiwid2VicGFjazovL0pTR2FtZVRvb2xzLy4vc3JjL05vdGlmaWNhdGlvbk1lc3NhZ2UuanMiLCJ3ZWJwYWNrOi8vSlNHYW1lVG9vbHMvLi9zcmMvUHJvZ3Jlc3NCYXIuanMiLCJ3ZWJwYWNrOi8vSlNHYW1lVG9vbHMvLi9zcmMvUmVhY3Rvci5qcyIsIndlYnBhY2s6Ly9KU0dhbWVUb29scy8uL3NyYy9SZWFjdG9yQ2FudmFzLmpzIiwid2VicGFjazovL0pTR2FtZVRvb2xzLy4vc3JjL1Jvdy5qcyIsIndlYnBhY2s6Ly9KU0dhbWVUb29scy8uL3NyYy9TY2VuZS5qcyIsIndlYnBhY2s6Ly9KU0dhbWVUb29scy8uL3NyYy9TY3JvbGxiYXIuanMiLCJ3ZWJwYWNrOi8vSlNHYW1lVG9vbHMvLi9zcmMvU2Nyb2xsYmFySG9yaXpvbnRhbC5qcyIsIndlYnBhY2s6Ly9KU0dhbWVUb29scy8uL3NyYy9TY3JvbGxiYXJWZXJ0aWNhbC5qcyIsIndlYnBhY2s6Ly9KU0dhbWVUb29scy8uL3NyYy9TZWxlY3QuanMiLCJ3ZWJwYWNrOi8vSlNHYW1lVG9vbHMvLi9zcmMvU2VsZWN0T3B0aW9uLmpzIiwid2VicGFjazovL0pTR2FtZVRvb2xzLy4vc3JjL1NlbGVjdE9wdGlvbnNDb250YWluZXIuanMiLCJ3ZWJwYWNrOi8vSlNHYW1lVG9vbHMvLi9zcmMvU3R5bGUuanMiLCJ3ZWJwYWNrOi8vSlNHYW1lVG9vbHMvLi9zcmMvVG9vbHRpcC5qcyIsIndlYnBhY2s6Ly9KU0dhbWVUb29scy8uL3NyYy9UcmlhbmdsZS5qcyIsIndlYnBhY2s6Ly9KU0dhbWVUb29scy8uL3NyYy9VdGlscy5qcyIsIndlYnBhY2s6Ly9KU0dhbWVUb29scy8uL3NyYy9pbmRleC5qcyJdLCJuYW1lcyI6WyJBcnJvdyIsIngiLCJ5IiwidG9YIiwidG9ZIiwic3R5bGUiLCJjb250ZXh0IiwiaGlkZGVuIiwiY2FudmFzIiwiY3R4IiwiZ2V0Q29udGV4dCIsIlV0aWxzIiwiZHJhd0Fycm93IiwibGluZVdpZHRoIiwiaGVhZFNpemUiLCJjb2xvciIsImxpbmVDYXAiLCJpbml0IiwiTWF0aCIsImFicyIsIlN0eWxlIiwiQ29uc3RhbnRzIiwiU2V0dGluZyIsIkFSUk9XX0RFRkFVTFRfTElORV9TSVpFIiwiQVJST1dfREVGQVVMVF9IRUFEX1NJWkUiLCJBUlJPV19ERUZBVUxUX0NPTE9SIiwiQVJST1dfREVGQVVMVF9MSU5FX0NBUCIsIkNvbXBvbmVudCIsIkJveCIsIndpZHRoIiwiaGVpZ2h0Iiwic2F2ZSIsImRyYXdCYWNrZ3JvdW5kIiwiZHJhd0JvcmRlciIsInJlc3RvcmUiLCJiYWNrZ3JvdW5kQ29sb3IiLCJmaWxsU3R5bGUiLCJmaWxsUmVjdCIsInJvdW5kIiwiYm9yZGVyQ29sb3IiLCJib3JkZXJTaXplIiwic3Ryb2tlU3R5bGUiLCJzdHJva2VSZWN0IiwiaG92ZXJlZCIsImNsaWNrZWQiLCJiYWNrZ3JvdW5kQ29sb3JEb3duIiwiYmFja2dyb3VuZENvbG9ySG92ZXIiLCJib3JkZXJDb2xvckRvd24iLCJib3JkZXJDb2xvckhvdmVyIiwic2VsZWN0YWJsZSIsInNlbGVjdGVkIiwiYm9yZGVyQ29sb3JTZWxlY3RlZCIsIkJ1dHRvbiIsIm1heFdpZHRoIiwibWF4SGVpZ2h0IiwiY29tcG9uZW50cyIsImRyYXdDb21wb25lbnRzIiwicGFkZGluZyIsIkJVVFRPTl9ERUZBVUxUX0JBQ0tHUk9VTkQiLCJCVVRUT05fREVGQVVMVF9IT1ZFUl9CQUNLR1JPVU5EIiwiQlVUVE9OX0RFRkFVTFRfQ0xJQ0tfQkFDS0dST1VORCIsIlJvdyIsIkJ1dHRvbkltYWdlIiwiaW1nU3JjIiwiYWxpZ25lbWVudCIsInZlcnRpY2FsQWxpZ25lbWVudCIsImltYWdlTG9hZGVyIiwiaW1hZ2UiLCJJbWFnZUNvbnRhaW5lciIsImFkZCIsImNvbnNvbGUiLCJ3YXJuIiwiU3RyaW5nIiwiTk9USUNFX01FU1NBR0UiLCJCVVRUT05fSU1BR0VfREVQUkVDQVRFRCIsImxvYWRJbWFnZSIsIm1pbldpZHRoIiwibWluSGVpZ2h0IiwiQ2FudmFzIiwic2NlbmUiLCJhdXRvUmVzaXplIiwibWF4RlBTIiwiZG9jdW1lbnQiLCJjcmVhdGVFbGVtZW50IiwiY29udGFpbmVyIiwiQ0FOVkFTX1dJRFRIIiwiQ0FOVkFTX0hFSUdIVCIsImFwcGVuZENoaWxkIiwic3RhcnRlZCIsImhhc0Vycm9yIiwiZnVsbHNjcmVlbiIsImZ1bGxwYWdlIiwic2NlbmVFcnJvciIsIkVycm9yU2NyZWVuIiwic2NlbmVQcmV2aW91cyIsInJlYWN0b3IiLCJSZWFjdG9yQ2FudmFzIiwicmVnaXN0ZXJFdmVudCIsImNyZWF0ZUV2ZW50cyIsIkRJU0FCTEVfT1BUSU1JWkFUSU9OUyIsImluZm8iLCJPUFRJTUlaQVRJT05fRElTQUJMRUQiLCJESVNBQkxFX0NPTlRBSU5FUlNfQ1VUVElORyIsIkNPTlRBSU5FUl9DVVRUSU5HX0RJU0FCTEVEIiwiZHJhd0NsZWFyIiwiZHJhd1NjZW5lIiwicGFyZW50Iiwic2NhbGUiLCJQSVhFTF9SQVRJTyIsImRyYXciLCJlIiwiZXJyb3JUZXh0Iiwic3RhY2siLCJlcnJvciIsIkVSUk9SX01FU1NBR0UiLCJFUlJPUl9NRVNTQUdFX0NBTlZBUyIsImNsZWFyIiwiZnVuYyIsInJlcXVlc3RBbmltYXRpb25GcmFtZSIsInRpbWUiLCJvZmZzZXRGcmFtZSIsImZ1bGxzY3JlZW5FbGVtZW50IiwiRU5BQkxFX1BJWEVMX1JBVElPX1JFU0laSU5HIiwid2luZG93IiwiZGV2aWNlUGl4ZWxSYXRpbyIsIlJFU09MVVRJT05fU0NBTEUiLCJhdXRvRFBJIiwic3RhcnREcmF3IiwiZWxlbWVudCIsInJlbW92ZUNoaWxkIiwidG9nZ2xlRnVsbHNjcmVlbiIsInRvZ2dsZUZ1bGxwYWdlIiwiZW5hYmxlQXV0b1Jlc2l6ZUNhbnZhcyIsImZvckVhY2giLCJldmVudE5hbWUiLCJhZGRFdmVudExpc3RlbmVyIiwiZXZlbnQiLCJtb3VzZVBvc2l0aW9uIiwiZ2V0TW91c2VQb3MiLCJkb0V2ZW50cyIsInByZXZlbnREZWZhdWx0IiwiY2hhbmdlZFRvdWNoZXMiLCJwb3NpdGlvbiIsImdldENvbXBvbmVudHNBdFBvc2l0aW9uIiwiZGlzcGF0Y2hFdmVudCIsInJldmVyc2UiLCJjb21wb25lbnQiLCJkaXNwYXRjaEV2ZW50Q29tcG9uZW50IiwiY2FsbGJhY2siLCJzdGFydCIsImdldEFsbENvbXBvbmVudHMiLCJhbGxDb21wb25lbnRzIiwiZ2V0Q29tcG9uZW50c1RyZWUiLCJyZXN1bHQiLCJjaGlsZHMiLCJzb3J0IiwiU2NlbmUiLCJzb3J0Q29tcG9uZW50c1RyZWUiLCJzb21lIiwiY2hpbGQiLCJpc0luc2lkZSIsImRpc2FibGVkIiwicHVzaCIsImdldENhbnZhc1dpZHRoIiwiZ2V0Q2FudmFzSGVpZ2h0IiwiY3Vyc29yIiwiQ2lyY2xlIiwiZHJhd0NpcmNsZSIsImZpbGwiLCJmaWxsQ29sb3IiLCJDSVJDTEVfREVGQVVMVF9MSU5FX1NJWkUiLCJDSVJDTEVfREVGQVVMVF9DT0xPUiIsIkNJUkNMRV9ERUZBVUxUX0ZJTEwiLCJDSVJDTEVfREVGQVVMVF9MSU5FX0NBUCIsIkNJUkNMRV9ERUZBVUxUX0ZJTExfQ09MT1IiLCJDb2wiLCJESVNBQkxFX0VYUEVSSU1FTlRBTF9PUFRJTUlaQVRJT05TIiwidXBkYXRlSW5uZXJXaWR0aCIsInVwZGF0ZUlubmVySGVpZ2h0IiwiYWRkQ2hhbmdlQWN0aW9uIiwiY3R4VGVtcCIsImlzQ3V0dGluZyIsImNhbnZhc1RtcCIsImN1cnJlbnRZIiwiZHJhd0NvbXBvbmVudCIsImRyYXdJbWFnZURhdGEiLCJvZmZzZXRTY3JvbGxYIiwib2Zmc2V0U2Nyb2xsWSIsImlzQ29tcG9uZW50VmlzaWJsZSIsInNwYWNlQmV0d2VlbkNvbXBvbmVudHMiLCJ0b3RhbEhlaWdodCIsImxlbmd0aCIsImlubmVyV2lkdGgiLCJtaW4iLCJtYXgiLCJpbm5lckhlaWdodCIsIkNvbnRhaW5lciIsImRlbHRhWCIsImRlbHRhWSIsIlJlYWN0b3IiLCJoYXNJbml0RXZlbnRzIiwibW92YWJsZSIsIm9mZnNldE1vdmVYIiwib2Zmc2V0TW92ZVkiLCJtb3ZlRXZlbnRTdGFydFgiLCJtb3ZlRXZlbnRTdGFydFkiLCJ0b3VjaEV2ZW50U3RhcnRYIiwidG91Y2hFdmVudFN0YXJ0WSIsInRvdWNoRXZlbnRTdGFydFRpbWVzdGFtcCIsInRvb2x0aXAiLCJpbml0RXZlbnRzIiwiYWRkTW92ZUFjdGlvbiIsImVuYWJsZSIsImRpc2FibGUiLCJzY3JvbGxEaXNhYmxlZCIsInRvdWNoU2Nyb2xsRXZlbnQiLCJ0b3VjaFN0YXJ0RW5kRXZlbnQiLCJ0aW1lc3RhbXAiLCJwb3MiLCJ0cmlnZ2VyIiwicmVtb3ZlQWxsQ2xpY2tBY3Rpb25zIiwiYWRkQ2xpY2tBY3Rpb24iLCJyZW1vdmVFdmVudExpc3RlbmVyIiwicmVtb3ZlQWxsRXZlbnRMaXN0ZW5lciIsInJlbW92ZUFsbEhvdmVyQWN0aW9ucyIsImFkZEhvdmVyQWN0aW9uIiwicmVtb3ZlQWxsRG93bkFjdGlvbnMiLCJhZGREb3duQWN0aW9uIiwicmVtb3ZlQWxsU2Nyb2xsQWN0aW9ucyIsImFkZFNjcm9sbEFjdGlvbiIsInJlbW92ZUFsbE1vdmVBY3Rpb25zIiwicmVtb3ZlQWxsQ2hhbmdlQWN0aW9ucyIsInJlbW92ZUFsbFVwQWN0aW9ucyIsImFkZFVwQWN0aW9uIiwicmVzIiwib3RoZXJDb21wb25lbnQiLCJpc0ZvcmVncm91bmQiLCJmb3JlZ3JvdW5kIiwib3RoZXJJc0ZvcmVncm91bmQiLCJ6SW5kZXgiLCJvdGhlcnpJbmRleCIsImNvbXBhcmVUb0NvbXBvbmVudCIsInBhcmVudFdpZHRoIiwicGFyZW50UGFkZGluZyIsIkFsaWduZW1lbnQiLCJDRU5URVIiLCJSSUdIVCIsIkxFRlQiLCJwYXJlbnRIZWlnaHQiLCJWZXJ0aWNhbEFsaWduZW1lbnQiLCJCT1RUT00iLCJUT1AiLCJERUZBVUxUX1BBRERJTkciLCJERUZBVUxUX1NQQUNJTkciLCJkZWZhdWx0U3R5bGUiLCJzZXRBbGwiLCJnZXRTdHlsZXMiLCJzZXQiLCJvdGhlciIsImNvbXBhcmVUbyIsIkRJU0FCTEVfSVNfQ09NUE9ORU5UX1ZJU0lCTEVfT1BUSU1JWkFUSU9OUyIsIkZPTlRfRkFNSUxZIiwiRk9OVF9TSVpFIiwiQlVUVE9OX0RFRkFVTFRfQUxURVJOQVRJVkVfQkFDS0dST1VORCIsIklOUFVUX0RFRkFVTFRfRk9OVF9DT0xPUiIsIklOUFVUX0RFRkFVTFRfQkFDS0dST1VORF9DT0xPUiIsIklOUFVUX0RFRkFVTFRfQk9SREVSX0NPTE9SIiwiSU5QVVRfREVGQVVMVF9CT1JERVJfQ09MT1JfU0VMRUNURUQiLCJJTlBVVF9ERUZBVUxUX1NFTEVDVF9DT0xPUiIsIkxBQkVMX0RFRkFVTFRfRk9OVF9DT0xPUiIsIkxJTktfREVGQVVMVF9DT0xPUiIsIkxJTktfREVGQVVMVF9IT1ZFUl9DT0xPUiIsIkxJTktfREVGQVVMVF9DTElDS19DT0xPUiIsIk1FTlVfREVGQVVMVF9CQUNLR1JPVU5EIiwiTUVOVV9ERUZBVUxUX0JMVVJfQkFDS0dST1VORCIsIk5PVElGSUNBVElPTl9ERUZBVUxUX0JBQ0tHUk9VTkQiLCJOT1RJRklDQVRJT05fREVGQVVMVF9BTklNQVRJT05fRFVSQVRJT04iLCJQUk9HUkVTU19ERUZBVUxUX0JBQ0tHUk9VTkQiLCJQUk9HUkVTU19ERUZBVUxUX0ZPUkVHUk9VTkQiLCJQUk9HUkVTU19ERUZBVUxUX0FOSU1BVElPTl9EVVJBVElPTiIsIlRPT0xUSVBfREVGQVVMVF9CQUNLR1JPVU5EIiwiQ1JPU1NfREVGQVVMVF9MSU5FX0NBUCIsIkNST1NTX0RFRkFVTFRfQ09MT1IiLCJDUk9TU19ERUZBVUxUX0xJTkVfU0laRSIsIlNDUk9MTEJBUl9ERUZBVUxUX0JBQ0tHUk9VTkQiLCJTQ1JPTExCQVJfREVGQVVMVF9IT1ZFUl9CQUNLR1JPVU5EIiwiU0NST0xMQkFSX0RFRkFVTFRfQ0xJQ0tfQkFDS0dST1VORCIsIlNDUk9MTEJBUl9ERUZBVUxUX1NJWkUiLCJERUZBVUxUX0JPUkRFUl9TSVpFIiwiREVGQVVMVF9CT1JERVJfQ09MT1JfU0VMRUNURUQiLCJERUZBVUxUX0FOSU1BVElPTl9EVVJBVElPTiIsIlRSSUFOR0xFX0RFRkFVTFRfTElORV9DQVAiLCJUUklBTkdMRV9ERUZBVUxUX0NPTE9SIiwiVFJJQU5HTEVfREVGQVVMVF9GSUxMX0NPTE9SIiwiVFJJQU5HTEVfREVGQVVMVF9MSU5FX1NJWkUiLCJUUklBTkdMRV9ERUZBVUxUX0ZJTEwiLCJTRUxFQ1RfREVGQVVMVF9CQUNLR1JPVU5EIiwiU0VMRUNUX0RFRkFVTFRfSE9WRVJfQkFDS0dST1VORCIsIlNFTEVDVF9ERUZBVUxUX0NMSUNLX0JBQ0tHUk9VTkQiLCJFUlJPUl9NRU5VX0JBQ0tHUk9VTkRfQ09MT1IiLCJLZXkiLCJVUCIsIkVOVEVSIiwiRUNIQVAiLCJUQUIiLCJERUZBVUxUIiwiRVJST1JfTUVTU0FHRV9DQU5WQVNfTEFCRUwiLCJSRVRSWSIsIldBUk5JTkdfTUVTU0FHRSIsIklOUFVUX0ZVTExTQ1JFRU4iLCJERVRBSUxTIiwiYWRkQWxsIiwic2Nyb2xsYmFySG9yaXpvbnRhbCIsIlNjcm9sbGJhckhvcml6b250YWwiLCJzY3JvbGxiYXJWZXJ0aWNhbCIsIlNjcm9sbGJhclZlcnRpY2FsIiwiY29udHJvbFNjcm9sbGluZyIsImNvbXBvbmVudENoYW5nZWQiLCJzY3JvbGxYRGlzYWJsZWQiLCJkcmF3SG9yaXpvbnRhbFNjcm9sbEJhciIsInNjcm9sbFlEaXNhYmxlZCIsImRyYXdWZXJ0aWNhbFNjcm9sbEJhciIsImhhc0NoYW5nZWQiLCJpIiwiZXZlbnRDaGFuZ2VDYWxsYmFjayIsImluZGV4T2YiLCJyZW1vdmVDaGFuZ2VBY3Rpb24iLCJmaWx0ZXIiLCJjdXJyZW50IiwicmVtb3ZlIiwiY2hhbmdlZCIsImMiLCJzY3JvbGxBcmVhU2l6ZVkiLCJwZXJjZW50U2Nyb2xsYmFyWSIsInNjcm9sbEFyZWFTaXplWCIsInBlcmNlbnRTY3JvbGxiYXJYIiwiY29tcG9uZW50V2lkdGgiLCJjb21wb25lbnRIZWlnaHQiLCJjYW52YXNXaWR0aCIsImNhbnZhc0hlaWdodCIsIkNyb3NzIiwiZHJhd0Nyb3NzIiwiZWFzZUluQ3ViaWMiLCJlYXNlT3V0Qm91bmNlIiwibjEiLCJkMSIsImVhc2VJbk91dEN1YmljIiwicG93IiwiZWFzZUluT3V0U2luZSIsImNvcyIsIlBJIiwiZWFzZUluT3V0UXVpbnQiLCJlYXNlSW5PdXRDaXJjIiwic3FydCIsImVhc2VJbk91dFF1YWQiLCJlYXNlSW5PdXRRdWFydCIsImVhc2VJbk91dEV4cG8iLCJlYXNlSW5PdXRCYWNrIiwiYzEiLCJjMiIsImxhYmVsRGV0YWlsc1NjZW5lRXJyb3IiLCJMYWJlbCIsImJ1dHRvblNjZW5lRXJyb3IiLCJidXR0b25EZXRhaWxzU2NlbmVFcnJvciIsImNvbERldGFpbHNTY2VuZUVycm9yIiwibWVudVNjZW5lRXJyb3IiLCJNZW51IiwidGV4dCIsIkV2ZW50IiwibmFtZSIsImNhbGxiYWNrcyIsIkZQU01ldGVyIiwiZGlzcGxheUZyYW1lcyIsImZyYW1lcyIsImxhc3RGcmFtZSIsImN1cnJlbnRGUFMiLCJpbnRlcnZhbENvdW50RlBTIiwic2V0SW50ZXJ2YWwiLCJjb3VudEZQUyIsIkltYWdlIiwic3JjIiwiZHJhd0ltYWdlIiwiZ2V0IiwiaW1nV2lkdGgiLCJpbWdIZWlnaHQiLCJhc3BlY3RSYXRpbyIsImZsb29yIiwic2l6ZXMiLCJJbWFnZUxvYWRlciIsImltYWdlcyIsImltYWdlc1Jlc2l6ZWQiLCJ0cmllZExvYWRpbmciLCJuYkltYWdlc1RvTG9hZCIsImZpcnN0SW1hZ2UiLCJpbWciLCJzaGlmdCIsImxvYWQiLCJvbmxvYWQiLCJvbmVycm9yIiwic2V0VGltZW91dCIsImhhc093blByb3BlcnR5IiwidyIsImgiLCJpZCIsIklucHV0IiwiZGVmYXVsdFRleHQiLCJsYXN0SW5wdXRUZXh0Iiwib2Zmc2V0WCIsImxhc3RUaW1lIiwidG90YWxUaW1lIiwiY2xpY2tDdXJyZW50UG9zaXRpb24iLCJ0ZXh0Q2FjaGUiLCJpbnB1dCIsInNldEF0dHJpYnV0ZSIsImxlZnQiLCJ0YWJJbmRleCIsInZhbHVlIiwicG9zaXRpb25TdGFydCIsInNlbGVjdGlvblN0YXJ0IiwicG9zaXRpb25FbmQiLCJzZWxlY3Rpb25FbmQiLCJib2R5IiwiYXBwZW5kVG9DYW52YXMiLCJub3RpY2VMb2dnZWQiLCJtb3ZlQWN0aW9uQ2FsbGJhY2siLCJpQ2xpY2siLCJnZXRMZXR0ZXJDbGlja2VkIiwicG9zaXRpb25TdGFydENsaWNrIiwic2V0U2VsZWN0aW9uUmFuZ2UiLCJjbGljayIsImJsdXIiLCJwZXJmb3JtYW5jZSIsIm5vdyIsIm9mZnNldFRpbWUiLCJjdHhUZXh0IiwidXBkYXRlVGV4dENhY2hlIiwiYXV0b1Njcm9sbCIsImRyYXdUZXh0IiwiY3VycmVudFgiLCJsZXR0ZXJzIiwieERyYXciLCJ5RHJhdyIsImlzTGV0dGVyVmlzaWJsZSIsImRyYXdIaWdobGlnaHQiLCJmb250Q29sb3IiLCJmb250U2l6ZSIsImZvbnRGYW1pbHkiLCJkcmF3Q3Vyc29yIiwiYmVnaW5QYXRoIiwibW92ZVRvIiwibGluZVRvIiwic3Ryb2tlIiwic2VsZWN0Q29sb3IiLCJ3cmFwVGV4dExpbmVzIiwibGV0dGVyIiwiaXNDbGlja0N1cnJlbnRQb3NpdGlvbiIsImlzQ2xpY2tBZnRlclBvc2l0aW9uIiwibGV0dGVySWQiLCJjdXJzb3JQb3NpdGlvbiIsImN1cnJlbnRMZXR0ZXJTaXplIiwiY3VycmVudExldHRlciIsImN1cnNvclBvc2l0aW9uUG9zIiwiY3Vyc29yUG9zaXRpb25OZWciLCJvZmZzZXRYTmVnIiwiZm9jdXMiLCJlbmQiLCJkaXJlY3Rpb24iLCJzaXplc0NhY2hlIiwidXBkYXRlU2l6ZXMiLCJ3cmFwIiwiYm9sZCIsInVuZGVybGluZSIsIkxpbmsiLCJpbml0aWFsQ29sb3IiLCJpbml0aWFsVW5kZXJsaW5lIiwiZm9udENvbG9yRG93biIsImZvbnRDb2xvckhvdmVyIiwibGFzdEtleSIsInVuZGVmaW5lZCIsInNlbGVjdGVkQ29tcG9uZW50IiwiYmx1ckJhY2tncm91bmQiLCJkcmF3Qmx1ciIsImtleUNvZGUiLCJrZXlBY3Rpb24iLCJzZWxlY3QiLCJibHVyQ2FudmFzIiwiaW5kZXgiLCJzZWxlY3RhYmxlQ29tcG9uZW50cyIsImNvbXBhcmVUb01lbnUiLCJOb3RpZmljYXRpb25NZXNzYWdlIiwiZGVsYXlCZWZvcmVDbG9zaW5nIiwiZWFzaW5nRnVuY3Rpb24iLCJ0aW1lTGFzdEZyYW1lIiwiYW5pbWF0aW9uVGltZSIsImNsb3NlZCIsImNsb3NpbmciLCJjbG9zZUJ1dHRvbiIsInNldENsaWNrQWN0aW9uIiwiY2xvc2UiLCJkaXNhYmxlQW5pbWF0aW9uIiwiZW5hYmxlQ2xvc2VCdXR0b24iLCJkaXNhYmxlQ2xvc2VCdXR0b24iLCJhbmltYXRpb25EdXJhdGlvbiIsImNvcHkiLCJjb21wYXJlVG9Ob3RpZmljYXRpb24iLCJvZmZzZXRZIiwiZm9yY2VDbG9zZSIsIm9wZW4iLCJQcm9ncmVzc0JhciIsImRlZmF1bHRQZXJjZW50IiwicGVyY2VudCIsImRyYXdGb3JlZ3JvdW5kIiwid2lkdGhGb3JlZ3JvdW5kIiwiZm9yZWdyb3VuZENvbG9yIiwiYW5pbWF0aW9uUGVyY2VudCIsImV2ZW50cyIsImV2ZW50QXJncyIsInJlZ2lzdGVyQ2FsbGJhY2siLCJyZW1vdmVDYWxsYmFjayIsInJlbW92ZUFsbENhbGxiYWNrcyIsInRvdGFsV2lkdGgiLCJjb21wYXJlQ29tcG9uZW50cyIsIlNjcm9sbGJhciIsInNpemUiLCJjb21wYXJlVG9TY3JvbGxiYXIiLCJtYXhXaWR0aFBhcmVudCIsImlubmVyV2lkdGhQYXJlbnQiLCJtYXhIZWlnaHRQYXJlbnQiLCJpbm5lckhlaWdodFBhcmVudCIsImNvbnRlbnRSYXRpb1giLCJjb250ZW50UmF0aW9ZIiwid2luZG93U2Nyb2xsU2l6ZVgiLCJ3aW5kb3dTY3JvbGxTaXplWSIsInBlcmNlbnRTY3JvbGxiYXJOZXh0IiwibmV3RGVsdGFYIiwibmV3RGVsdGFZIiwiU2VsZWN0Iiwib3B0aW9uQ29udGFpbmVyIiwiZGVmYXVsdE9wdGlvbiIsInNlbGVjdGVkT3B0aW9uIiwibGFiZWwiLCJ0cmlhbmdsZSIsIlRyaWFuZ2xlIiwidXBkYXRlV2lkdGgiLCJTZWxlY3RPcHRpb24iLCJkZWZhdWx0TGFiZWwiLCJTZWxlY3REcm9wZG93biIsIm1heEhlaWdodERyb3Bkb3duIiwib3B0aW9ucyIsImdldENvbXBvbmVudElkIiwic2VsZWN0SGVpZ2h0Iiwic3R5bGVzIiwiVG9vbHRpcCIsImNvbXBhcmVUb1Rvb2x0aXAiLCJkcmF3VHJpYW5nbGUiLCJwcmVSZW5kZXJlZEZvbnQiLCJwcmVSZW5kZXJGb250IiwiY2FycyIsImN0eFRtcCIsImZvbnQiLCJtZWFzdXJlVGV4dCIsInRleHRCYXNlbGluZSIsImZpbGxUZXh0Iiwic3giLCJzeSIsInNXaWR0aCIsInNIZWlnaHQiLCJlcmFzZUJlbG93IiwiZGVncmVlcyIsImRyYXdJbWFnZVdyYXBwZXIiLCJpbWFnZURhdGEiLCJpc05hTiIsInRyYW5zbGF0ZSIsInJvdGF0ZSIsImNsZWFyUmVjdCIsIkFycmF5IiwiaXNBcnJheSIsImxpbmVzIiwic3BsaXQiLCJ4Q3VycmVudCIsInlDdXJyZW50IiwieUZpcnN0IiwiY3VycmVudFRleHQiLCJjdXJyZW50V2lkdGgiLCJjb2xvckluZGV4Iiwid3JhcFRleHQiLCJsaW1pdCIsInAiLCJzdWJzdHJpbmciLCJyaWdodCIsImRpc2FibGVXcmFwIiwiaW1hZ2VTbW9vdGhpbmdFbmFibGVkIiwibmV3VGV4dCIsIndpZHRoQ2FyIiwibmJDYXJMaW5lIiwiaGVpZ2h0VG90YWwiLCJsaW5lV3JhcCIsImoiLCJ3aWR0aFRleHQiLCJjYXJXaWR0aCIsImZyb214IiwiZnJvbXkiLCJ0b3giLCJ0b3kiLCJoZWFkbGVuIiwiZHgiLCJkeSIsImFuZ2xlIiwiYXRhbjIiLCJzaW4iLCJyYWRpdXMiLCJhcmMiLCJpc0ZpbHRlckh1ZUF2YWlsYWJsZSIsImdldEltYWdlRGF0YSIsImRhdGEiLCJwYXJzZU51bWJlciIsInN0ciIsInBhcnNlSW50IiwibWF0Y2giLCJnZXRGb250U2l6ZSIsInJlY3QiLCJnZXRCb3VuZGluZ0NsaWVudFJlY3QiLCJhdXRvUmVzaXplQ2FudmFzIiwiaW5pdGlhbFdpZHRoIiwiaW5pdGlhbEhlaWdodCIsImRvY3VtZW50RWxlbWVudCIsImNsaWVudFdpZHRoIiwicmF0aW8iLCJnZXRBdHRyaWJ1dGUiLCJhdXRvUmVzaXplQ2FudmFzRnVsbHNjcmVlbiIsImVuYWJsZUF1dG9SZXNpemVDYW52YXNGdWxsc2NyZWVuIiwiYXV0b1Jlc2l6ZUNhbnZhc0Z1bGxwYWdlIiwibWFyZ2luIiwiZW5hYmxlQXV0b1Jlc2l6ZUNhbnZhc0Z1bGxwYWdlIiwicmVxdWVzdEZ1bGxzY3JlZW4iLCJtb3pSZXF1ZXN0RnVsbFNjcmVlbiIsIndlYmtpdFJlcXVlc3RGdWxsc2NyZWVuIiwibXNSZXF1ZXN0RnVsbHNjcmVlbiIsIm9SZXF1ZXN0RnVsbHNjcmVlbiIsImV4aXRGdWxsc2NyZWVuIiwib25mdWxsc2NyZWVuY2hhbmdlIiwib25tc2Z1bGxzY3JlZW5jaGFuZ2UiLCJvbm1vemZ1bGxzY3JlZW5jaGFuZ2UiLCJvbndlYmtpdGZ1bGxzY3JlZW5jaGFuZ2UiLCJvbm9raXRmdWxsc2NyZWVuY2hhbmdlIiwib25vZnVsbHNjcmVlbmNoYW5nZSIsImNsaWVudFgiLCJjbGllbnRZIiwidG9wIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0QsTztRQ1ZBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EseUNBQXlDLGlDQUFpQztRQUMxRSxnSEFB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QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6IkpTR2FtZVRvb2xzLmRldi5qcyIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiB3ZWJwYWNrVW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbihyb290LCBmYWN0b3J5KSB7XG5cdGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0JyAmJiB0eXBlb2YgbW9kdWxlID09PSAnb2JqZWN0Jylcblx0XHRtb2R1bGUuZXhwb3J0cyA9IGZhY3RvcnkoKTtcblx0ZWxzZSBpZih0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQpXG5cdFx0ZGVmaW5lKFtdLCBmYWN0b3J5KTtcblx0ZWxzZSBpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcpXG5cdFx0ZXhwb3J0c1tcIkpTR2FtZVRvb2xzXCJdID0gZmFjdG9yeSgpO1xuXHRlbHNlXG5cdFx0cm9vdFtcIkpTR2FtZVRvb2xzXCJdID0gZmFjdG9yeSgpO1xufSkodHlwZW9mIHNlbGYgIT09IFwidW5kZWZpbmVkXCIgPyBzZWxmIDogdGhpcywgZnVuY3Rpb24oKSB7XG5yZXR1cm4gIiwiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zcmMvaW5kZXguanNcIik7XG4iLCJmdW5jdGlvbiBfYXJyYXlMaWtlVG9BcnJheShhcnIsIGxlbikge1xuICBpZiAobGVuID09IG51bGwgfHwgbGVuID4gYXJyLmxlbmd0aCkgbGVuID0gYXJyLmxlbmd0aDtcblxuICBmb3IgKHZhciBpID0gMCwgYXJyMiA9IG5ldyBBcnJheShsZW4pOyBpIDwgbGVuOyBpKyspIHtcbiAgICBhcnIyW2ldID0gYXJyW2ldO1xuICB9XG5cbiAgcmV0dXJuIGFycjI7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX2FycmF5TGlrZVRvQXJyYXk7IiwidmFyIGFycmF5TGlrZVRvQXJyYXkgPSByZXF1aXJlKFwiLi9hcnJheUxpa2VUb0FycmF5XCIpO1xuXG5mdW5jdGlvbiBfYXJyYXlXaXRob3V0SG9sZXMoYXJyKSB7XG4gIGlmIChBcnJheS5pc0FycmF5KGFycikpIHJldHVybiBhcnJheUxpa2VUb0FycmF5KGFycik7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX2FycmF5V2l0aG91dEhvbGVzOyIsImZ1bmN0aW9uIF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoc2VsZikge1xuICBpZiAoc2VsZiA9PT0gdm9pZCAwKSB7XG4gICAgdGhyb3cgbmV3IFJlZmVyZW5jZUVycm9yKFwidGhpcyBoYXNuJ3QgYmVlbiBpbml0aWFsaXNlZCAtIHN1cGVyKCkgaGFzbid0IGJlZW4gY2FsbGVkXCIpO1xuICB9XG5cbiAgcmV0dXJuIHNlbGY7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX2Fzc2VydFRoaXNJbml0aWFsaXplZDsiLCJmdW5jdGlvbiBfY2xhc3NDYWxsQ2hlY2soaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7XG4gIGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7XG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblwiKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9jbGFzc0NhbGxDaGVjazsiLCJmdW5jdGlvbiBfY2xhc3NQcml2YXRlRmllbGRHZXQocmVjZWl2ZXIsIHByaXZhdGVNYXApIHtcbiAgdmFyIGRlc2NyaXB0b3IgPSBwcml2YXRlTWFwLmdldChyZWNlaXZlcik7XG5cbiAgaWYgKCFkZXNjcmlwdG9yKSB7XG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcImF0dGVtcHRlZCB0byBnZXQgcHJpdmF0ZSBmaWVsZCBvbiBub24taW5zdGFuY2VcIik7XG4gIH1cblxuICBpZiAoZGVzY3JpcHRvci5nZXQpIHtcbiAgICByZXR1cm4gZGVzY3JpcHRvci5nZXQuY2FsbChyZWNlaXZlcik7XG4gIH1cblxuICByZXR1cm4gZGVzY3JpcHRvci52YWx1ZTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfY2xhc3NQcml2YXRlRmllbGRHZXQ7IiwiZnVuY3Rpb24gX2NsYXNzUHJpdmF0ZUZpZWxkU2V0KHJlY2VpdmVyLCBwcml2YXRlTWFwLCB2YWx1ZSkge1xuICB2YXIgZGVzY3JpcHRvciA9IHByaXZhdGVNYXAuZ2V0KHJlY2VpdmVyKTtcblxuICBpZiAoIWRlc2NyaXB0b3IpIHtcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiYXR0ZW1wdGVkIHRvIHNldCBwcml2YXRlIGZpZWxkIG9uIG5vbi1pbnN0YW5jZVwiKTtcbiAgfVxuXG4gIGlmIChkZXNjcmlwdG9yLnNldCkge1xuICAgIGRlc2NyaXB0b3Iuc2V0LmNhbGwocmVjZWl2ZXIsIHZhbHVlKTtcbiAgfSBlbHNlIHtcbiAgICBpZiAoIWRlc2NyaXB0b3Iud3JpdGFibGUpIHtcbiAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJhdHRlbXB0ZWQgdG8gc2V0IHJlYWQgb25seSBwcml2YXRlIGZpZWxkXCIpO1xuICAgIH1cblxuICAgIGRlc2NyaXB0b3IudmFsdWUgPSB2YWx1ZTtcbiAgfVxuXG4gIHJldHVybiB2YWx1ZTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfY2xhc3NQcml2YXRlRmllbGRTZXQ7IiwidmFyIHNldFByb3RvdHlwZU9mID0gcmVxdWlyZShcIi4vc2V0UHJvdG90eXBlT2ZcIik7XG5cbnZhciBpc05hdGl2ZVJlZmxlY3RDb25zdHJ1Y3QgPSByZXF1aXJlKFwiLi9pc05hdGl2ZVJlZmxlY3RDb25zdHJ1Y3RcIik7XG5cbmZ1bmN0aW9uIF9jb25zdHJ1Y3QoUGFyZW50LCBhcmdzLCBDbGFzcykge1xuICBpZiAoaXNOYXRpdmVSZWZsZWN0Q29uc3RydWN0KCkpIHtcbiAgICBtb2R1bGUuZXhwb3J0cyA9IF9jb25zdHJ1Y3QgPSBSZWZsZWN0LmNvbnN0cnVjdDtcbiAgfSBlbHNlIHtcbiAgICBtb2R1bGUuZXhwb3J0cyA9IF9jb25zdHJ1Y3QgPSBmdW5jdGlvbiBfY29uc3RydWN0KFBhcmVudCwgYXJncywgQ2xhc3MpIHtcbiAgICAgIHZhciBhID0gW251bGxdO1xuICAgICAgYS5wdXNoLmFwcGx5KGEsIGFyZ3MpO1xuICAgICAgdmFyIENvbnN0cnVjdG9yID0gRnVuY3Rpb24uYmluZC5hcHBseShQYXJlbnQsIGEpO1xuICAgICAgdmFyIGluc3RhbmNlID0gbmV3IENvbnN0cnVjdG9yKCk7XG4gICAgICBpZiAoQ2xhc3MpIHNldFByb3RvdHlwZU9mKGluc3RhbmNlLCBDbGFzcy5wcm90b3R5cGUpO1xuICAgICAgcmV0dXJuIGluc3RhbmNlO1xuICAgIH07XG4gIH1cblxuICByZXR1cm4gX2NvbnN0cnVjdC5hcHBseShudWxsLCBhcmd1bWVudHMpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9jb25zdHJ1Y3Q7IiwiZnVuY3Rpb24gX2RlZmluZVByb3BlcnRpZXModGFyZ2V0LCBwcm9wcykge1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHByb3BzLmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGRlc2NyaXB0b3IgPSBwcm9wc1tpXTtcbiAgICBkZXNjcmlwdG9yLmVudW1lcmFibGUgPSBkZXNjcmlwdG9yLmVudW1lcmFibGUgfHwgZmFsc2U7XG4gICAgZGVzY3JpcHRvci5jb25maWd1cmFibGUgPSB0cnVlO1xuICAgIGlmIChcInZhbHVlXCIgaW4gZGVzY3JpcHRvcikgZGVzY3JpcHRvci53cml0YWJsZSA9IHRydWU7XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwgZGVzY3JpcHRvci5rZXksIGRlc2NyaXB0b3IpO1xuICB9XG59XG5cbmZ1bmN0aW9uIF9jcmVhdGVDbGFzcyhDb25zdHJ1Y3RvciwgcHJvdG9Qcm9wcywgc3RhdGljUHJvcHMpIHtcbiAgaWYgKHByb3RvUHJvcHMpIF9kZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLnByb3RvdHlwZSwgcHJvdG9Qcm9wcyk7XG4gIGlmIChzdGF0aWNQcm9wcykgX2RlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IsIHN0YXRpY1Byb3BzKTtcbiAgcmV0dXJuIENvbnN0cnVjdG9yO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9jcmVhdGVDbGFzczsiLCJmdW5jdGlvbiBfZGVmaW5lUHJvcGVydHkob2JqLCBrZXksIHZhbHVlKSB7XG4gIGlmIChrZXkgaW4gb2JqKSB7XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KG9iaiwga2V5LCB7XG4gICAgICB2YWx1ZTogdmFsdWUsXG4gICAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgICAgY29uZmlndXJhYmxlOiB0cnVlLFxuICAgICAgd3JpdGFibGU6IHRydWVcbiAgICB9KTtcbiAgfSBlbHNlIHtcbiAgICBvYmpba2V5XSA9IHZhbHVlO1xuICB9XG5cbiAgcmV0dXJuIG9iajtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfZGVmaW5lUHJvcGVydHk7IiwidmFyIHN1cGVyUHJvcEJhc2UgPSByZXF1aXJlKFwiLi9zdXBlclByb3BCYXNlXCIpO1xuXG5mdW5jdGlvbiBfZ2V0KHRhcmdldCwgcHJvcGVydHksIHJlY2VpdmVyKSB7XG4gIGlmICh0eXBlb2YgUmVmbGVjdCAhPT0gXCJ1bmRlZmluZWRcIiAmJiBSZWZsZWN0LmdldCkge1xuICAgIG1vZHVsZS5leHBvcnRzID0gX2dldCA9IFJlZmxlY3QuZ2V0O1xuICB9IGVsc2Uge1xuICAgIG1vZHVsZS5leHBvcnRzID0gX2dldCA9IGZ1bmN0aW9uIF9nZXQodGFyZ2V0LCBwcm9wZXJ0eSwgcmVjZWl2ZXIpIHtcbiAgICAgIHZhciBiYXNlID0gc3VwZXJQcm9wQmFzZSh0YXJnZXQsIHByb3BlcnR5KTtcbiAgICAgIGlmICghYmFzZSkgcmV0dXJuO1xuICAgICAgdmFyIGRlc2MgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKGJhc2UsIHByb3BlcnR5KTtcblxuICAgICAgaWYgKGRlc2MuZ2V0KSB7XG4gICAgICAgIHJldHVybiBkZXNjLmdldC5jYWxsKHJlY2VpdmVyKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGRlc2MudmFsdWU7XG4gICAgfTtcbiAgfVxuXG4gIHJldHVybiBfZ2V0KHRhcmdldCwgcHJvcGVydHksIHJlY2VpdmVyIHx8IHRhcmdldCk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX2dldDsiLCJmdW5jdGlvbiBfZ2V0UHJvdG90eXBlT2Yobykge1xuICBtb2R1bGUuZXhwb3J0cyA9IF9nZXRQcm90b3R5cGVPZiA9IE9iamVjdC5zZXRQcm90b3R5cGVPZiA/IE9iamVjdC5nZXRQcm90b3R5cGVPZiA6IGZ1bmN0aW9uIF9nZXRQcm90b3R5cGVPZihvKSB7XG4gICAgcmV0dXJuIG8uX19wcm90b19fIHx8IE9iamVjdC5nZXRQcm90b3R5cGVPZihvKTtcbiAgfTtcbiAgcmV0dXJuIF9nZXRQcm90b3R5cGVPZihvKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfZ2V0UHJvdG90eXBlT2Y7IiwidmFyIHNldFByb3RvdHlwZU9mID0gcmVxdWlyZShcIi4vc2V0UHJvdG90eXBlT2ZcIik7XG5cbmZ1bmN0aW9uIF9pbmhlcml0cyhzdWJDbGFzcywgc3VwZXJDbGFzcykge1xuICBpZiAodHlwZW9mIHN1cGVyQ2xhc3MgIT09IFwiZnVuY3Rpb25cIiAmJiBzdXBlckNsYXNzICE9PSBudWxsKSB7XG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlN1cGVyIGV4cHJlc3Npb24gbXVzdCBlaXRoZXIgYmUgbnVsbCBvciBhIGZ1bmN0aW9uXCIpO1xuICB9XG5cbiAgc3ViQ2xhc3MucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShzdXBlckNsYXNzICYmIHN1cGVyQ2xhc3MucHJvdG90eXBlLCB7XG4gICAgY29uc3RydWN0b3I6IHtcbiAgICAgIHZhbHVlOiBzdWJDbGFzcyxcbiAgICAgIHdyaXRhYmxlOiB0cnVlLFxuICAgICAgY29uZmlndXJhYmxlOiB0cnVlXG4gICAgfVxuICB9KTtcbiAgaWYgKHN1cGVyQ2xhc3MpIHNldFByb3RvdHlwZU9mKHN1YkNsYXNzLCBzdXBlckNsYXNzKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfaW5oZXJpdHM7IiwiZnVuY3Rpb24gX2lzTmF0aXZlUmVmbGVjdENvbnN0cnVjdCgpIHtcbiAgaWYgKHR5cGVvZiBSZWZsZWN0ID09PSBcInVuZGVmaW5lZFwiIHx8ICFSZWZsZWN0LmNvbnN0cnVjdCkgcmV0dXJuIGZhbHNlO1xuICBpZiAoUmVmbGVjdC5jb25zdHJ1Y3Quc2hhbSkgcmV0dXJuIGZhbHNlO1xuICBpZiAodHlwZW9mIFByb3h5ID09PSBcImZ1bmN0aW9uXCIpIHJldHVybiB0cnVlO1xuXG4gIHRyeSB7XG4gICAgRGF0ZS5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChSZWZsZWN0LmNvbnN0cnVjdChEYXRlLCBbXSwgZnVuY3Rpb24gKCkge30pKTtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfSBjYXRjaCAoZSkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9pc05hdGl2ZVJlZmxlY3RDb25zdHJ1Y3Q7IiwiZnVuY3Rpb24gX2l0ZXJhYmxlVG9BcnJheShpdGVyKSB7XG4gIGlmICh0eXBlb2YgU3ltYm9sICE9PSBcInVuZGVmaW5lZFwiICYmIFN5bWJvbC5pdGVyYXRvciBpbiBPYmplY3QoaXRlcikpIHJldHVybiBBcnJheS5mcm9tKGl0ZXIpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9pdGVyYWJsZVRvQXJyYXk7IiwiZnVuY3Rpb24gX25vbkl0ZXJhYmxlU3ByZWFkKCkge1xuICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiSW52YWxpZCBhdHRlbXB0IHRvIHNwcmVhZCBub24taXRlcmFibGUgaW5zdGFuY2UuXFxuSW4gb3JkZXIgdG8gYmUgaXRlcmFibGUsIG5vbi1hcnJheSBvYmplY3RzIG11c3QgaGF2ZSBhIFtTeW1ib2wuaXRlcmF0b3JdKCkgbWV0aG9kLlwiKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfbm9uSXRlcmFibGVTcHJlYWQ7IiwidmFyIF90eXBlb2YgPSByZXF1aXJlKFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy90eXBlb2ZcIik7XG5cbnZhciBhc3NlcnRUaGlzSW5pdGlhbGl6ZWQgPSByZXF1aXJlKFwiLi9hc3NlcnRUaGlzSW5pdGlhbGl6ZWRcIik7XG5cbmZ1bmN0aW9uIF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHNlbGYsIGNhbGwpIHtcbiAgaWYgKGNhbGwgJiYgKF90eXBlb2YoY2FsbCkgPT09IFwib2JqZWN0XCIgfHwgdHlwZW9mIGNhbGwgPT09IFwiZnVuY3Rpb25cIikpIHtcbiAgICByZXR1cm4gY2FsbDtcbiAgfVxuXG4gIHJldHVybiBhc3NlcnRUaGlzSW5pdGlhbGl6ZWQoc2VsZik7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm47IiwidmFyIHN1cGVyUHJvcEJhc2UgPSByZXF1aXJlKFwiLi9zdXBlclByb3BCYXNlXCIpO1xuXG52YXIgZGVmaW5lUHJvcGVydHkgPSByZXF1aXJlKFwiLi9kZWZpbmVQcm9wZXJ0eVwiKTtcblxuZnVuY3Rpb24gc2V0KHRhcmdldCwgcHJvcGVydHksIHZhbHVlLCByZWNlaXZlcikge1xuICBpZiAodHlwZW9mIFJlZmxlY3QgIT09IFwidW5kZWZpbmVkXCIgJiYgUmVmbGVjdC5zZXQpIHtcbiAgICBzZXQgPSBSZWZsZWN0LnNldDtcbiAgfSBlbHNlIHtcbiAgICBzZXQgPSBmdW5jdGlvbiBzZXQodGFyZ2V0LCBwcm9wZXJ0eSwgdmFsdWUsIHJlY2VpdmVyKSB7XG4gICAgICB2YXIgYmFzZSA9IHN1cGVyUHJvcEJhc2UodGFyZ2V0LCBwcm9wZXJ0eSk7XG4gICAgICB2YXIgZGVzYztcblxuICAgICAgaWYgKGJhc2UpIHtcbiAgICAgICAgZGVzYyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IoYmFzZSwgcHJvcGVydHkpO1xuXG4gICAgICAgIGlmIChkZXNjLnNldCkge1xuICAgICAgICAgIGRlc2Muc2V0LmNhbGwocmVjZWl2ZXIsIHZhbHVlKTtcbiAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfSBlbHNlIGlmICghZGVzYy53cml0YWJsZSkge1xuICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBkZXNjID0gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihyZWNlaXZlciwgcHJvcGVydHkpO1xuXG4gICAgICBpZiAoZGVzYykge1xuICAgICAgICBpZiAoIWRlc2Mud3JpdGFibGUpIHtcbiAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cblxuICAgICAgICBkZXNjLnZhbHVlID0gdmFsdWU7XG4gICAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShyZWNlaXZlciwgcHJvcGVydHksIGRlc2MpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgZGVmaW5lUHJvcGVydHkocmVjZWl2ZXIsIHByb3BlcnR5LCB2YWx1ZSk7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH07XG4gIH1cblxuICByZXR1cm4gc2V0KHRhcmdldCwgcHJvcGVydHksIHZhbHVlLCByZWNlaXZlcik7XG59XG5cbmZ1bmN0aW9uIF9zZXQodGFyZ2V0LCBwcm9wZXJ0eSwgdmFsdWUsIHJlY2VpdmVyLCBpc1N0cmljdCkge1xuICB2YXIgcyA9IHNldCh0YXJnZXQsIHByb3BlcnR5LCB2YWx1ZSwgcmVjZWl2ZXIgfHwgdGFyZ2V0KTtcblxuICBpZiAoIXMgJiYgaXNTdHJpY3QpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ2ZhaWxlZCB0byBzZXQgcHJvcGVydHknKTtcbiAgfVxuXG4gIHJldHVybiB2YWx1ZTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfc2V0OyIsImZ1bmN0aW9uIF9zZXRQcm90b3R5cGVPZihvLCBwKSB7XG4gIG1vZHVsZS5leHBvcnRzID0gX3NldFByb3RvdHlwZU9mID0gT2JqZWN0LnNldFByb3RvdHlwZU9mIHx8IGZ1bmN0aW9uIF9zZXRQcm90b3R5cGVPZihvLCBwKSB7XG4gICAgby5fX3Byb3RvX18gPSBwO1xuICAgIHJldHVybiBvO1xuICB9O1xuXG4gIHJldHVybiBfc2V0UHJvdG90eXBlT2YobywgcCk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX3NldFByb3RvdHlwZU9mOyIsInZhciBnZXRQcm90b3R5cGVPZiA9IHJlcXVpcmUoXCIuL2dldFByb3RvdHlwZU9mXCIpO1xuXG5mdW5jdGlvbiBfc3VwZXJQcm9wQmFzZShvYmplY3QsIHByb3BlcnR5KSB7XG4gIHdoaWxlICghT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpKSB7XG4gICAgb2JqZWN0ID0gZ2V0UHJvdG90eXBlT2Yob2JqZWN0KTtcbiAgICBpZiAob2JqZWN0ID09PSBudWxsKSBicmVhaztcbiAgfVxuXG4gIHJldHVybiBvYmplY3Q7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX3N1cGVyUHJvcEJhc2U7IiwidmFyIGFycmF5V2l0aG91dEhvbGVzID0gcmVxdWlyZShcIi4vYXJyYXlXaXRob3V0SG9sZXNcIik7XG5cbnZhciBpdGVyYWJsZVRvQXJyYXkgPSByZXF1aXJlKFwiLi9pdGVyYWJsZVRvQXJyYXlcIik7XG5cbnZhciB1bnN1cHBvcnRlZEl0ZXJhYmxlVG9BcnJheSA9IHJlcXVpcmUoXCIuL3Vuc3VwcG9ydGVkSXRlcmFibGVUb0FycmF5XCIpO1xuXG52YXIgbm9uSXRlcmFibGVTcHJlYWQgPSByZXF1aXJlKFwiLi9ub25JdGVyYWJsZVNwcmVhZFwiKTtcblxuZnVuY3Rpb24gX3RvQ29uc3VtYWJsZUFycmF5KGFycikge1xuICByZXR1cm4gYXJyYXlXaXRob3V0SG9sZXMoYXJyKSB8fCBpdGVyYWJsZVRvQXJyYXkoYXJyKSB8fCB1bnN1cHBvcnRlZEl0ZXJhYmxlVG9BcnJheShhcnIpIHx8IG5vbkl0ZXJhYmxlU3ByZWFkKCk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX3RvQ29uc3VtYWJsZUFycmF5OyIsImZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7XG4gIFwiQGJhYmVsL2hlbHBlcnMgLSB0eXBlb2ZcIjtcblxuICBpZiAodHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIHR5cGVvZiBTeW1ib2wuaXRlcmF0b3IgPT09IFwic3ltYm9sXCIpIHtcbiAgICBtb2R1bGUuZXhwb3J0cyA9IF90eXBlb2YgPSBmdW5jdGlvbiBfdHlwZW9mKG9iaikge1xuICAgICAgcmV0dXJuIHR5cGVvZiBvYmo7XG4gICAgfTtcbiAgfSBlbHNlIHtcbiAgICBtb2R1bGUuZXhwb3J0cyA9IF90eXBlb2YgPSBmdW5jdGlvbiBfdHlwZW9mKG9iaikge1xuICAgICAgcmV0dXJuIG9iaiAmJiB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgb2JqLmNvbnN0cnVjdG9yID09PSBTeW1ib2wgJiYgb2JqICE9PSBTeW1ib2wucHJvdG90eXBlID8gXCJzeW1ib2xcIiA6IHR5cGVvZiBvYmo7XG4gICAgfTtcbiAgfVxuXG4gIHJldHVybiBfdHlwZW9mKG9iaik7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX3R5cGVvZjsiLCJ2YXIgYXJyYXlMaWtlVG9BcnJheSA9IHJlcXVpcmUoXCIuL2FycmF5TGlrZVRvQXJyYXlcIik7XG5cbmZ1bmN0aW9uIF91bnN1cHBvcnRlZEl0ZXJhYmxlVG9BcnJheShvLCBtaW5MZW4pIHtcbiAgaWYgKCFvKSByZXR1cm47XG4gIGlmICh0eXBlb2YgbyA9PT0gXCJzdHJpbmdcIikgcmV0dXJuIGFycmF5TGlrZVRvQXJyYXkobywgbWluTGVuKTtcbiAgdmFyIG4gPSBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwobykuc2xpY2UoOCwgLTEpO1xuICBpZiAobiA9PT0gXCJPYmplY3RcIiAmJiBvLmNvbnN0cnVjdG9yKSBuID0gby5jb25zdHJ1Y3Rvci5uYW1lO1xuICBpZiAobiA9PT0gXCJNYXBcIiB8fCBuID09PSBcIlNldFwiKSByZXR1cm4gQXJyYXkuZnJvbShvKTtcbiAgaWYgKG4gPT09IFwiQXJndW1lbnRzXCIgfHwgL14oPzpVaXxJKW50KD86OHwxNnwzMikoPzpDbGFtcGVkKT9BcnJheSQvLnRlc3QobikpIHJldHVybiBhcnJheUxpa2VUb0FycmF5KG8sIG1pbkxlbik7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX3Vuc3VwcG9ydGVkSXRlcmFibGVUb0FycmF5OyIsIi8qXG4gKiBDb3B5cmlnaHQgKEMpIDIwMjAgRWxpYXN0aWsgKGVsaWFzdGlrc29mdHMuY29tKVxuICpcbiAqIFRoaXMgZmlsZSBpcyBwYXJ0IG9mIFwiSlNHYW1lVG9vbHNcIi5cbiAqXG4gKiBcIkpTR2FtZVRvb2xzXCIgaXMgZnJlZSBzb2Z0d2FyZTogeW91IGNhbiByZWRpc3RyaWJ1dGUgaXQgYW5kL29yIG1vZGlmeVxuICogaXQgdW5kZXIgdGhlIHRlcm1zIG9mIHRoZSBHTlUgR2VuZXJhbCBQdWJsaWMgTGljZW5zZSBhcyBwdWJsaXNoZWQgYnlcbiAqIHRoZSBGcmVlIFNvZnR3YXJlIEZvdW5kYXRpb24sIGVpdGhlciB2ZXJzaW9uIDMgb2YgdGhlIExpY2Vuc2UsIG9yXG4gKiAoYXQgeW91ciBvcHRpb24pIGFueSBsYXRlciB2ZXJzaW9uLlxuICpcbiAqIFwiSlNHYW1lVG9vbHNcIiBpcyBkaXN0cmlidXRlZCBpbiB0aGUgaG9wZSB0aGF0IGl0IHdpbGwgYmUgdXNlZnVsLFxuICogYnV0IFdJVEhPVVQgQU5ZIFdBUlJBTlRZOyB3aXRob3V0IGV2ZW4gdGhlIGltcGxpZWQgd2FycmFudHkgb2ZcbiAqIE1FUkNIQU5UQUJJTElUWSBvciBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRS4gIFNlZSB0aGVcbiAqIEdOVSBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlIGZvciBtb3JlIGRldGFpbHMuXG4gKlxuICogWW91IHNob3VsZCBoYXZlIHJlY2VpdmVkIGEgY29weSBvZiB0aGUgR05VIEdlbmVyYWwgUHVibGljIExpY2Vuc2VcbiAqIGFsb25nIHdpdGggXCJKU0dhbWVUb29sc1wiLiAgSWYgbm90LCBzZWUgPGh0dHA6Ly93d3cuZ251Lm9yZy9saWNlbnNlcy8+LlxuICovXG5pbXBvcnQgQ29tcG9uZW50IGZyb20gXCIuL0NvbXBvbmVudFwiO1xuaW1wb3J0IENvbnN0YW50cyBmcm9tIFwiLi9Db25zdGFudHNcIjtcbmltcG9ydCBTdHlsZSBmcm9tIFwiLi9TdHlsZVwiO1xuaW1wb3J0IFV0aWxzIGZyb20gXCIuL1V0aWxzXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEFycm93IGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgc2VsZWN0YWJsZSA9IGZhbHNlO1xuXG4gIGNvbnN0cnVjdG9yKHgsIHksIHRvWCwgdG9ZLCBzdHlsZSkge1xuICAgIHN1cGVyKHgsIHksIG51bGwsIG51bGwsIHN0eWxlKTtcblxuICAgIHRoaXMudG9YID0gdG9YO1xuICAgIHRoaXMudG9ZID0gdG9ZO1xuICB9XG5cbiAgZHJhdyhjb250ZXh0KSB7XG4gICAgaWYodGhpcy5oaWRkZW4pIHJldHVybjtcbiAgICBzdXBlci5kcmF3KGNvbnRleHQpO1xuXG4gICAgY29uc3QgY2FudmFzID0gY29udGV4dC5jYW52YXM7XG4gICAgY29uc3QgY3R4ID0gY2FudmFzLmdldENvbnRleHQoXCIyZFwiKTtcbiAgICBcbiAgICBVdGlscy5kcmF3QXJyb3coY3R4LCB0aGlzLngsIHRoaXMueSwgdGhpcy50b1gsIHRoaXMudG9ZLCB0aGlzLnN0eWxlLmxpbmVXaWR0aCwgdGhpcy5zdHlsZS5oZWFkU2l6ZSwgdGhpcy5zdHlsZS5jb2xvciwgdGhpcy5zdHlsZS5saW5lQ2FwKTtcblxuICAgIHRoaXMuaW5pdCA9IHRydWU7XG4gIH1cblxuICBnZXQgd2lkdGgoKSB7XG4gICAgcmV0dXJuIE1hdGguYWJzKHRoaXMueCAtIHRoaXMudG9YKTtcbiAgfVxuXG4gIGdldCBoZWlnaHQoKSB7XG4gICAgcmV0dXJuIE1hdGguYWJzKHRoaXMueSAtIHRoaXMudG9ZKTtcbiAgfVxuXG4gIGdldCBkZWZhdWx0U3R5bGUoKSB7XG4gICAgcmV0dXJuIG5ldyBTdHlsZSh7XG4gICAgICBcImxpbmVXaWR0aFwiOiBDb25zdGFudHMuU2V0dGluZy5BUlJPV19ERUZBVUxUX0xJTkVfU0laRSxcbiAgICAgIFwiaGVhZFNpemVcIjogQ29uc3RhbnRzLlNldHRpbmcuQVJST1dfREVGQVVMVF9IRUFEX1NJWkUsXG4gICAgICBcImNvbG9yXCI6IENvbnN0YW50cy5TZXR0aW5nLkFSUk9XX0RFRkFVTFRfQ09MT1IsXG4gICAgICBcImxpbmVDYXBcIjogQ29uc3RhbnRzLlNldHRpbmcuQVJST1dfREVGQVVMVF9MSU5FX0NBUFxuICAgIH0pO1xuICB9XG59IiwiLypcbiAqIENvcHlyaWdodCAoQykgMjAyMCBFbGlhc3RpayAoZWxpYXN0aWtzb2Z0cy5jb20pXG4gKlxuICogVGhpcyBmaWxlIGlzIHBhcnQgb2YgXCJKU0dhbWVUb29sc1wiLlxuICpcbiAqIFwiSlNHYW1lVG9vbHNcIiBpcyBmcmVlIHNvZnR3YXJlOiB5b3UgY2FuIHJlZGlzdHJpYnV0ZSBpdCBhbmQvb3IgbW9kaWZ5XG4gKiBpdCB1bmRlciB0aGUgdGVybXMgb2YgdGhlIEdOVSBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlIGFzIHB1Ymxpc2hlZCBieVxuICogdGhlIEZyZWUgU29mdHdhcmUgRm91bmRhdGlvbiwgZWl0aGVyIHZlcnNpb24gMyBvZiB0aGUgTGljZW5zZSwgb3JcbiAqIChhdCB5b3VyIG9wdGlvbikgYW55IGxhdGVyIHZlcnNpb24uXG4gKlxuICogXCJKU0dhbWVUb29sc1wiIGlzIGRpc3RyaWJ1dGVkIGluIHRoZSBob3BlIHRoYXQgaXQgd2lsbCBiZSB1c2VmdWwsXG4gKiBidXQgV0lUSE9VVCBBTlkgV0FSUkFOVFk7IHdpdGhvdXQgZXZlbiB0aGUgaW1wbGllZCB3YXJyYW50eSBvZlxuICogTUVSQ0hBTlRBQklMSVRZIG9yIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFLiAgU2VlIHRoZVxuICogR05VIEdlbmVyYWwgUHVibGljIExpY2Vuc2UgZm9yIG1vcmUgZGV0YWlscy5cbiAqXG4gKiBZb3Ugc2hvdWxkIGhhdmUgcmVjZWl2ZWQgYSBjb3B5IG9mIHRoZSBHTlUgR2VuZXJhbCBQdWJsaWMgTGljZW5zZVxuICogYWxvbmcgd2l0aCBcIkpTR2FtZVRvb2xzXCIuICBJZiBub3QsIHNlZSA8aHR0cDovL3d3dy5nbnUub3JnL2xpY2Vuc2VzLz4uXG4gKi9cbmltcG9ydCBDb21wb25lbnQgZnJvbSBcIi4vQ29tcG9uZW50XCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEJveCBleHRlbmRzIENvbXBvbmVudCB7XG4gIHNlbGVjdGFibGUgPSBmYWxzZTtcblxuICBjb25zdHJ1Y3Rvcih4LCB5LCB3aWR0aCwgaGVpZ2h0LCBzdHlsZSkge1xuICAgIHN1cGVyKHgsIHksIHdpZHRoLCBoZWlnaHQsIHN0eWxlKTtcbiAgfVxuICBcbiAgZHJhdyhjb250ZXh0KSB7XG4gICAgaWYodGhpcy5oaWRkZW4pIHJldHVybjtcbiAgICBzdXBlci5kcmF3KGNvbnRleHQpO1xuXG4gICAgY29uc3QgY2FudmFzID0gY29udGV4dC5jYW52YXM7XG4gICAgY29uc3QgY3R4ID0gY2FudmFzLmdldENvbnRleHQoXCIyZFwiKTtcbiAgICBjdHguc2F2ZSgpO1xuXG4gICAgdGhpcy5kcmF3QmFja2dyb3VuZChjdHgpO1xuICAgIHRoaXMuZHJhd0JvcmRlcihjdHgpO1xuICAgIFxuICAgIGN0eC5yZXN0b3JlKCk7XG4gIH1cblxuICBkcmF3QmFja2dyb3VuZChjdHgpIHtcbiAgICBjb25zdCBjb2xvciA9IHRoaXMuYmFja2dyb3VuZENvbG9yO1xuXG4gICAgaWYoY29sb3IpIHtcbiAgICAgIGN0eC5zYXZlKCk7XG4gIFxuICAgICAgY3R4LmZpbGxTdHlsZSA9IGNvbG9yO1xuICAgICAgY3R4LmZpbGxSZWN0KE1hdGgucm91bmQodGhpcy54KSwgTWF0aC5yb3VuZCh0aGlzLnkpLCBNYXRoLnJvdW5kKHRoaXMud2lkdGgpLCBNYXRoLnJvdW5kKHRoaXMuaGVpZ2h0KSk7XG5cbiAgICAgIGN0eC5yZXN0b3JlKCk7XG4gICAgfVxuICB9XG5cbiAgZ2V0IGJhY2tncm91bmRDb2xvcigpIHtcbiAgICBsZXQgY29sb3IgPSBudWxsO1xuXG4gICAgaWYodGhpcy5ob3ZlcmVkICYmIHRoaXMuY2xpY2tlZCAmJiB0aGlzLnN0eWxlLmJhY2tncm91bmRDb2xvckRvd24gIT0gbnVsbCkge1xuICAgICAgY29sb3IgPSB0aGlzLnN0eWxlLmJhY2tncm91bmRDb2xvckRvd247XG4gICAgfSBlbHNlIGlmKHRoaXMuaG92ZXJlZCAmJiB0aGlzLnN0eWxlLmJhY2tncm91bmRDb2xvckhvdmVyICE9IG51bGwpIHtcbiAgICAgIGNvbG9yID0gdGhpcy5zdHlsZS5iYWNrZ3JvdW5kQ29sb3JIb3ZlcjtcbiAgICB9IGVsc2Uge1xuICAgICAgY29sb3IgPSB0aGlzLnN0eWxlLmJhY2tncm91bmRDb2xvcjtcbiAgICB9XG5cbiAgICByZXR1cm4gY29sb3I7XG4gIH1cblxuICBkcmF3Qm9yZGVyKGN0eCkge1xuICAgIGNvbnN0IGNvbG9yID0gdGhpcy5ib3JkZXJDb2xvcjtcblxuICAgIGlmKGNvbG9yICYmIHRoaXMuc3R5bGUuYm9yZGVyU2l6ZSA+IDApIHtcbiAgICAgIGN0eC5zYXZlKCk7XG4gICAgICBcbiAgICAgIGN0eC5zdHJva2VTdHlsZSA9IGNvbG9yO1xuICAgICAgY3R4LmxpbmVXaWR0aCA9IHRoaXMuc3R5bGUuYm9yZGVyU2l6ZTtcbiAgICAgIFxuICAgICAgY3R4LnN0cm9rZVJlY3QoTWF0aC5yb3VuZCh0aGlzLngpLCBNYXRoLnJvdW5kKHRoaXMueSksIE1hdGgucm91bmQodGhpcy53aWR0aCAtIHRoaXMuc3R5bGUuYm9yZGVyU2l6ZSAvIDIpLCBNYXRoLnJvdW5kKHRoaXMuaGVpZ2h0IC0gdGhpcy5zdHlsZS5ib3JkZXJTaXplIC8gMikpO1xuICBcbiAgICAgIGN0eC5yZXN0b3JlKCk7XG4gICAgfVxuICB9XG5cbiAgZ2V0IGJvcmRlckNvbG9yKCkge1xuICAgIGxldCBjb2xvciA9IG51bGw7XG5cbiAgICBpZih0aGlzLmNsaWNrZWQgJiYgdGhpcy5ob3ZlcmVkICYmIHRoaXMuc3R5bGUuYm9yZGVyQ29sb3JEb3duICE9IG51bGwpIHtcbiAgICAgIGNvbG9yID0gdGhpcy5zdHlsZS5ib3JkZXJDb2xvckRvd247XG4gICAgfSBlbHNlIGlmKCF0aGlzLmNsaWNrZWQgJiYgdGhpcy5ob3ZlcmVkICYmIHRoaXMuc3R5bGUuYm9yZGVyQ29sb3JIb3ZlciAhPSBudWxsKSB7XG4gICAgICBjb2xvciA9IHRoaXMuc3R5bGUuYm9yZGVyQ29sb3JIb3ZlcjtcbiAgICB9IGVsc2UgaWYodGhpcy5zZWxlY3RhYmxlICYmIHRoaXMuc2VsZWN0ZWQgJiYgdGhpcy5zdHlsZS5ib3JkZXJDb2xvclNlbGVjdGVkICE9IG51bGwpIHtcbiAgICAgIGNvbG9yID0gdGhpcy5zdHlsZS5ib3JkZXJDb2xvclNlbGVjdGVkO1xuICAgIH0gZWxzZSB7XG4gICAgICBjb2xvciA9IHRoaXMuc3R5bGUuYm9yZGVyQ29sb3I7XG4gICAgfVxuXG4gICAgcmV0dXJuIGNvbG9yO1xuICB9XG59IiwiLypcbiAqIENvcHlyaWdodCAoQykgMjAyMCBFbGlhc3RpayAoZWxpYXN0aWtzb2Z0cy5jb20pXG4gKlxuICogVGhpcyBmaWxlIGlzIHBhcnQgb2YgXCJKU0dhbWVUb29sc1wiLlxuICpcbiAqIFwiSlNHYW1lVG9vbHNcIiBpcyBmcmVlIHNvZnR3YXJlOiB5b3UgY2FuIHJlZGlzdHJpYnV0ZSBpdCBhbmQvb3IgbW9kaWZ5XG4gKiBpdCB1bmRlciB0aGUgdGVybXMgb2YgdGhlIEdOVSBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlIGFzIHB1Ymxpc2hlZCBieVxuICogdGhlIEZyZWUgU29mdHdhcmUgRm91bmRhdGlvbiwgZWl0aGVyIHZlcnNpb24gMyBvZiB0aGUgTGljZW5zZSwgb3JcbiAqIChhdCB5b3VyIG9wdGlvbikgYW55IGxhdGVyIHZlcnNpb24uXG4gKlxuICogXCJKU0dhbWVUb29sc1wiIGlzIGRpc3RyaWJ1dGVkIGluIHRoZSBob3BlIHRoYXQgaXQgd2lsbCBiZSB1c2VmdWwsXG4gKiBidXQgV0lUSE9VVCBBTlkgV0FSUkFOVFk7IHdpdGhvdXQgZXZlbiB0aGUgaW1wbGllZCB3YXJyYW50eSBvZlxuICogTUVSQ0hBTlRBQklMSVRZIG9yIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFLiAgU2VlIHRoZVxuICogR05VIEdlbmVyYWwgUHVibGljIExpY2Vuc2UgZm9yIG1vcmUgZGV0YWlscy5cbiAqXG4gKiBZb3Ugc2hvdWxkIGhhdmUgcmVjZWl2ZWQgYSBjb3B5IG9mIHRoZSBHTlUgR2VuZXJhbCBQdWJsaWMgTGljZW5zZVxuICogYWxvbmcgd2l0aCBcIkpTR2FtZVRvb2xzXCIuICBJZiBub3QsIHNlZSA8aHR0cDovL3d3dy5nbnUub3JnL2xpY2Vuc2VzLz4uXG4gKi9cbmltcG9ydCBSb3cgZnJvbSBcIi4vUm93XCI7XG5pbXBvcnQgQ29uc3RhbnRzIGZyb20gXCIuL0NvbnN0YW50c1wiO1xuaW1wb3J0IFN0eWxlIGZyb20gXCIuL1N0eWxlXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEJ1dHRvbiBleHRlbmRzIFJvdyB7XG4gIHNlbGVjdGFibGUgPSB0cnVlO1xuXG4gIGNvbnN0cnVjdG9yKHgsIHksIG1heFdpZHRoLCBtYXhIZWlnaHQsIHN0eWxlLCAuLi5jb21wb25lbnRzKSB7XG4gICAgc3VwZXIoeCwgeSwgbWF4V2lkdGgsIG1heEhlaWdodCwgc3R5bGUsIC4uLmNvbXBvbmVudHMpO1xuICB9XG4gIFxuICBkcmF3KGNvbnRleHQpIHtcbiAgICBpZih0aGlzLmhpZGRlbikgcmV0dXJuO1xuICAgIHN1cGVyLmRyYXcoY29udGV4dCk7XG5cbiAgICBjb25zdCBjYW52YXMgPSBjb250ZXh0LmNhbnZhcztcbiAgICBjb25zdCBjdHggPSBjYW52YXMuZ2V0Q29udGV4dChcIjJkXCIpO1xuICAgIGN0eC5zYXZlKCk7XG4gICAgXG4gICAgdGhpcy5kcmF3Q29tcG9uZW50cyhjdHgpO1xuICAgIFxuICAgIGN0eC5yZXN0b3JlKCk7XG4gIH1cblxuICBkcmF3Q29tcG9uZW50cyhjdHgpIHtcbiAgICBzdXBlci5kcmF3KGN0eCk7XG4gIH1cblxuICBnZXQgaGVpZ2h0KCkge1xuICAgIHJldHVybiAodGhpcy5tYXhIZWlnaHQgfHwgc3VwZXIuaGVpZ2h0KSArIHRoaXMuc3R5bGUucGFkZGluZztcbiAgfVxuXG4gIGdldCB3aWR0aCgpIHtcbiAgICByZXR1cm4gKHRoaXMubWF4V2lkdGggfHwgc3VwZXIud2lkdGgpICsgdGhpcy5zdHlsZS5wYWRkaW5nO1xuICB9XG5cbiAgZ2V0IGRlZmF1bHRTdHlsZSgpIHtcbiAgICByZXR1cm4gbmV3IFN0eWxlKHtcbiAgICAgIFwiYmFja2dyb3VuZENvbG9yXCI6IENvbnN0YW50cy5TZXR0aW5nLkJVVFRPTl9ERUZBVUxUX0JBQ0tHUk9VTkQsXG4gICAgICBcImJhY2tncm91bmRDb2xvckhvdmVyXCI6IENvbnN0YW50cy5TZXR0aW5nLkJVVFRPTl9ERUZBVUxUX0hPVkVSX0JBQ0tHUk9VTkQsXG4gICAgICBcImJhY2tncm91bmRDb2xvckRvd25cIjogQ29uc3RhbnRzLlNldHRpbmcuQlVUVE9OX0RFRkFVTFRfQ0xJQ0tfQkFDS0dST1VORCxcbiAgICAgIFwic2Nyb2xsWERpc2FibGVkXCI6IHRydWUsXG4gICAgICBcInNjcm9sbFlEaXNhYmxlZFwiOiB0cnVlXG4gICAgfSk7XG4gIH1cbn0iLCIvKlxuICogQ29weXJpZ2h0IChDKSAyMDIwIEVsaWFzdGlrIChlbGlhc3Rpa3NvZnRzLmNvbSlcbiAqXG4gKiBUaGlzIGZpbGUgaXMgcGFydCBvZiBcIkpTR2FtZVRvb2xzXCIuXG4gKlxuICogXCJKU0dhbWVUb29sc1wiIGlzIGZyZWUgc29mdHdhcmU6IHlvdSBjYW4gcmVkaXN0cmlidXRlIGl0IGFuZC9vciBtb2RpZnlcbiAqIGl0IHVuZGVyIHRoZSB0ZXJtcyBvZiB0aGUgR05VIEdlbmVyYWwgUHVibGljIExpY2Vuc2UgYXMgcHVibGlzaGVkIGJ5XG4gKiB0aGUgRnJlZSBTb2Z0d2FyZSBGb3VuZGF0aW9uLCBlaXRoZXIgdmVyc2lvbiAzIG9mIHRoZSBMaWNlbnNlLCBvclxuICogKGF0IHlvdXIgb3B0aW9uKSBhbnkgbGF0ZXIgdmVyc2lvbi5cbiAqXG4gKiBcIkpTR2FtZVRvb2xzXCIgaXMgZGlzdHJpYnV0ZWQgaW4gdGhlIGhvcGUgdGhhdCBpdCB3aWxsIGJlIHVzZWZ1bCxcbiAqIGJ1dCBXSVRIT1VUIEFOWSBXQVJSQU5UWTsgd2l0aG91dCBldmVuIHRoZSBpbXBsaWVkIHdhcnJhbnR5IG9mXG4gKiBNRVJDSEFOVEFCSUxJVFkgb3IgRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UuICBTZWUgdGhlXG4gKiBHTlUgR2VuZXJhbCBQdWJsaWMgTGljZW5zZSBmb3IgbW9yZSBkZXRhaWxzLlxuICpcbiAqIFlvdSBzaG91bGQgaGF2ZSByZWNlaXZlZCBhIGNvcHkgb2YgdGhlIEdOVSBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlXG4gKiBhbG9uZyB3aXRoIFwiSlNHYW1lVG9vbHNcIi4gIElmIG5vdCwgc2VlIDxodHRwOi8vd3d3LmdudS5vcmcvbGljZW5zZXMvPi5cbiAqL1xuaW1wb3J0IEltYWdlQ29udGFpbmVyIGZyb20gXCIuL0ltYWdlQ29udGFpbmVyXCI7XG5pbXBvcnQgQnV0dG9uIGZyb20gXCIuL0J1dHRvblwiO1xuaW1wb3J0IFN0eWxlIGZyb20gXCIuL1N0eWxlXCI7XG5pbXBvcnQgQ29uc3RhbnRzIGZyb20gXCIuL0NvbnN0YW50c1wiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBCdXR0b25JbWFnZSBleHRlbmRzIEJ1dHRvbiB7XG4gIGNvbnN0cnVjdG9yKGltZ1NyYywgeCwgeSwgYWxpZ25lbWVudCwgdmVydGljYWxBbGlnbmVtZW50LCB3aWR0aCwgaGVpZ2h0LCBiYWNrZ3JvdW5kQ29sb3IsIGJhY2tncm91bmRDb2xvckhvdmVyLCBpbWFnZUxvYWRlcikge1xuICAgIGNvbnN0IHN0eWxlID0gbmV3IFN0eWxlKHtcbiAgICAgIFwiYWxpZ25lbWVudFwiOiBhbGlnbmVtZW50LFxuICAgICAgXCJ2ZXJ0aWNhbEFsaWduZW1lbnRcIjogdmVydGljYWxBbGlnbmVtZW50LFxuICAgICAgXCJiYWNrZ3JvdW5kQ29sb3JcIjogYmFja2dyb3VuZENvbG9yIHx8IENvbnN0YW50cy5TZXR0aW5nLkJVVFRPTl9ERUZBVUxUX0JBQ0tHUk9VTkQsXG4gICAgICBcImJhY2tncm91bmRDb2xvckhvdmVyXCI6IGJhY2tncm91bmRDb2xvckhvdmVyIHx8IENvbnN0YW50cy5TZXR0aW5nLkJVVFRPTl9ERUZBVUxUX0hPVkVSX0JBQ0tHUk9VTkRcbiAgICB9KTtcblxuICAgIHN1cGVyKHgsIHksIHdpZHRoLCBoZWlnaHQsIHN0eWxlKTtcbiAgICB0aGlzLmltYWdlID0gbmV3IEltYWdlQ29udGFpbmVyKGltZ1NyYywgeCwgeSwgd2lkdGgsIGhlaWdodCwgbmV3IFN0eWxlKHsgXCJhbGlnbmVtZW50XCI6IFwiY2VudGVyXCIsIFwidmVydGljYWxBbGlnbmVtZW50XCI6IFwiY2VudGVyXCIgfSksIGltYWdlTG9hZGVyKTtcbiAgICB0aGlzLmFkZCh0aGlzLmltYWdlKTtcblxuICAgIGNvbnNvbGUgJiYgY29uc29sZS53YXJuICYmIGNvbnNvbGUud2FybihDb25zdGFudHMuU3RyaW5nLk5PVElDRV9NRVNTQUdFICsgXCIgXCIgKyBDb25zdGFudHMuU3RyaW5nLkJVVFRPTl9JTUFHRV9ERVBSRUNBVEVEKTtcbiAgfVxuXG4gIGxvYWRJbWFnZShpbWFnZUxvYWRlcikge1xuICAgIGlmKHRoaXMuY29tcG9uZW50c1swXSBpbnN0YW5jZW9mIEltYWdlQ29udGFpbmVyKSB0aGlzLmNvbXBvbmVudHNbMF0ubG9hZEltYWdlKGltYWdlTG9hZGVyKTtcbiAgfVxuXG4gIHNldCBtaW5XaWR0aCh3aWR0aCkge1xuICAgIHRoaXMuaW1hZ2Uud2lkdGggPSB3aWR0aDtcbiAgICBzdXBlci5taW5XaWR0aCA9IHdpZHRoO1xuICB9XG5cbiAgc2V0IG1pbkhlaWdodChoZWlnaHQpIHtcbiAgICB0aGlzLmltYWdlLmhlaWdodCA9IGhlaWdodDtcbiAgICBzdXBlci5taW5IZWlnaHQgPSBoZWlnaHQ7XG4gIH1cblxuICBnZXQgbWluV2lkdGgoKSB7XG4gICAgcmV0dXJuIHN1cGVyLm1pbldpZHRoO1xuICB9XG5cbiAgZ2V0IG1pbkhlaWdodCgpIHtcbiAgICByZXR1cm4gc3VwZXIubWluSGVpZ2h0O1xuICB9XG5cbiAgc2V0IG1heFdpZHRoKHdpZHRoKSB7XG4gICAgdGhpcy5pbWFnZS53aWR0aCA9IHdpZHRoO1xuICAgIHN1cGVyLm1heFdpZHRoID0gd2lkdGg7XG4gIH1cblxuICBzZXQgbWF4SGVpZ2h0KGhlaWdodCkge1xuICAgIHRoaXMuaW1hZ2UuaGVpZ2h0ID0gaGVpZ2h0O1xuICAgIHN1cGVyLm1heEhlaWdodCA9IGhlaWdodDtcbiAgfVxuXG4gIGdldCBtYXhXaWR0aCgpIHtcbiAgICByZXR1cm4gc3VwZXIubWF4V2lkdGg7XG4gIH1cblxuICBnZXQgbWF4SGVpZ2h0KCkge1xuICAgIHJldHVybiBzdXBlci5tYXhIZWlnaHQ7XG4gIH1cblxuICBzZXQgd2lkdGgod2lkdGgpIHtcbiAgICB0aGlzLm1pbldpZHRoID0gd2lkdGg7XG4gICAgdGhpcy5tYXhXaWR0aCA9IHdpZHRoO1xuICB9XG5cbiAgZ2V0IHdpZHRoKCkge1xuICAgIHJldHVybiBzdXBlci53aWR0aDtcbiAgfVxuXG4gIHNldCBoZWlnaHQoaGVpZ2h0KSB7XG4gICAgdGhpcy5taW5IZWlnaHQgPSBoZWlnaHQ7XG4gICAgdGhpcy5tYXhIZWlnaHQgPSBoZWlnaHQ7XG4gIH1cblxuICBnZXQgaGVpZ2h0KCkge1xuICAgIHJldHVybiBzdXBlci5oZWlnaHQ7XG4gIH1cbn0iLCIvKlxuICogQ29weXJpZ2h0IChDKSAyMDIwIEVsaWFzdGlrIChlbGlhc3Rpa3NvZnRzLmNvbSlcbiAqXG4gKiBUaGlzIGZpbGUgaXMgcGFydCBvZiBcIkpTR2FtZVRvb2xzXCIuXG4gKlxuICogXCJKU0dhbWVUb29sc1wiIGlzIGZyZWUgc29mdHdhcmU6IHlvdSBjYW4gcmVkaXN0cmlidXRlIGl0IGFuZC9vciBtb2RpZnlcbiAqIGl0IHVuZGVyIHRoZSB0ZXJtcyBvZiB0aGUgR05VIEdlbmVyYWwgUHVibGljIExpY2Vuc2UgYXMgcHVibGlzaGVkIGJ5XG4gKiB0aGUgRnJlZSBTb2Z0d2FyZSBGb3VuZGF0aW9uLCBlaXRoZXIgdmVyc2lvbiAzIG9mIHRoZSBMaWNlbnNlLCBvclxuICogKGF0IHlvdXIgb3B0aW9uKSBhbnkgbGF0ZXIgdmVyc2lvbi5cbiAqXG4gKiBcIkpTR2FtZVRvb2xzXCIgaXMgZGlzdHJpYnV0ZWQgaW4gdGhlIGhvcGUgdGhhdCBpdCB3aWxsIGJlIHVzZWZ1bCxcbiAqIGJ1dCBXSVRIT1VUIEFOWSBXQVJSQU5UWTsgd2l0aG91dCBldmVuIHRoZSBpbXBsaWVkIHdhcnJhbnR5IG9mXG4gKiBNRVJDSEFOVEFCSUxJVFkgb3IgRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UuICBTZWUgdGhlXG4gKiBHTlUgR2VuZXJhbCBQdWJsaWMgTGljZW5zZSBmb3IgbW9yZSBkZXRhaWxzLlxuICpcbiAqIFlvdSBzaG91bGQgaGF2ZSByZWNlaXZlZCBhIGNvcHkgb2YgdGhlIEdOVSBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlXG4gKiBhbG9uZyB3aXRoIFwiSlNHYW1lVG9vbHNcIi4gIElmIG5vdCwgc2VlIDxodHRwOi8vd3d3LmdudS5vcmcvbGljZW5zZXMvPi5cbiAqL1xuaW1wb3J0IENvbnN0YW50cyBmcm9tIFwiLi9Db25zdGFudHNcIjtcbmltcG9ydCBVdGlscyBmcm9tIFwiLi9VdGlsc1wiO1xuaW1wb3J0IFNjZW5lIGZyb20gXCIuL1NjZW5lXCI7XG5pbXBvcnQgUmVhY3RvckNhbnZhcyBmcm9tIFwiLi9SZWFjdG9yQ2FudmFzXCI7XG5pbXBvcnQgRXJyb3JTY3JlZW4gZnJvbSBcIi4vRXJyb3JTY3JlZW5cIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ2FudmFzIHtcbiAgI2xhc3RGcmFtZVRpbWU7XG4gICNfd2lkdGg7XG4gICNfaGVpZ2h0O1xuXG4gIGNvbnN0cnVjdG9yKHNjZW5lLCBjYW52YXMsIHdpZHRoLCBoZWlnaHQsIGF1dG9SZXNpemUsIG1heEZQUykge1xuICAgIHRoaXMuY2FudmFzID0gY2FudmFzIHx8IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJjYW52YXNcIik7XG4gICAgdGhpcy5jb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIHRoaXMud2lkdGggPSB3aWR0aCB8fCBDb25zdGFudHMuU2V0dGluZy5DQU5WQVNfV0lEVEg7XG4gICAgdGhpcy5oZWlnaHQgPSBoZWlnaHQgfHwgQ29uc3RhbnRzLlNldHRpbmcuQ0FOVkFTX0hFSUdIVDtcbiAgICB0aGlzLnNjZW5lID0gc2NlbmU7XG4gICAgdGhpcy5jb250YWluZXIuYXBwZW5kQ2hpbGQodGhpcy5jYW52YXMpO1xuICAgIHRoaXMuc3RhcnRlZCA9IGZhbHNlO1xuICAgIHRoaXMuaW5pdCA9IGZhbHNlO1xuICAgIHRoaXMubWF4RlBTID0gbWF4RlBTIHx8IC0xO1xuICAgIHRoaXMuI2xhc3RGcmFtZVRpbWUgPSAwO1xuICAgIHRoaXMuaGFzRXJyb3IgPSBmYWxzZTtcbiAgICB0aGlzLmZ1bGxzY3JlZW4gPSBmYWxzZTtcbiAgICB0aGlzLmZ1bGxwYWdlID0gZmFsc2U7XG5cbiAgICAvLyBFcnJvciBtZXNzYWdlIHNjcmVlblxuICAgIHRoaXMuc2NlbmVFcnJvciA9IG5ldyBFcnJvclNjcmVlbih0aGlzKTtcbiAgICB0aGlzLnNjZW5lUHJldmlvdXMgPSB0aGlzLnNjZW5lO1xuICAgIFxuICAgIC8vIFJlYWN0b3JzL2V2ZW50c1xuICAgIHRoaXMucmVhY3RvciA9IG5ldyBSZWFjdG9yQ2FudmFzKCk7XG4gICAgdGhpcy5yZWFjdG9yLnJlZ2lzdGVyRXZlbnQoXCJtb3VzZW1vdmVcIik7XG4gICAgdGhpcy5yZWFjdG9yLnJlZ2lzdGVyRXZlbnQoXCJjbGlja1wiKTtcbiAgICB0aGlzLnJlYWN0b3IucmVnaXN0ZXJFdmVudChcIm1vdXNlZG93blwiKTtcbiAgICB0aGlzLnJlYWN0b3IucmVnaXN0ZXJFdmVudChcIm1vdXNldXBcIik7XG4gICAgdGhpcy5yZWFjdG9yLnJlZ2lzdGVyRXZlbnQoXCJ3aGVlbFwiKTtcbiAgICB0aGlzLnJlYWN0b3IucmVnaXN0ZXJFdmVudChcInRvdWNoc3RhcnRcIik7XG4gICAgdGhpcy5yZWFjdG9yLnJlZ2lzdGVyRXZlbnQoXCJ0b3VjaGVuZFwiKTtcbiAgICB0aGlzLnJlYWN0b3IucmVnaXN0ZXJFdmVudChcInRvdWNobW92ZVwiKTtcblxuICAgIGlmKGF1dG9SZXNpemUpIHRoaXMuYXV0b1Jlc2l6ZSgpO1xuICAgIHRoaXMuY3JlYXRlRXZlbnRzKCk7XG5cbiAgICBpZihDb25zdGFudHMuU2V0dGluZy5ESVNBQkxFX09QVElNSVpBVElPTlMpIHtcbiAgICAgIGNvbnNvbGUgJiYgY29uc29sZS5pbmZvKENvbnN0YW50cy5TdHJpbmcuTk9USUNFX01FU1NBR0UgKyBcIiBcIiArIENvbnN0YW50cy5TdHJpbmcuT1BUSU1JWkFUSU9OX0RJU0FCTEVEKTtcbiAgICB9XG5cbiAgICBpZihDb25zdGFudHMuU2V0dGluZy5ESVNBQkxFX0NPTlRBSU5FUlNfQ1VUVElORykge1xuICAgICAgY29uc29sZSAmJiBjb25zb2xlLmluZm8oQ29uc3RhbnRzLlN0cmluZy5OT1RJQ0VfTUVTU0FHRSArIFwiIFwiICsgQ29uc3RhbnRzLlN0cmluZy5DT05UQUlORVJfQ1VUVElOR19ESVNBQkxFRCk7XG4gICAgfVxuICB9XG5cbiAgZHJhdygpIHtcbiAgICBjb25zdCBjdHggPSB0aGlzLmNhbnZhcy5nZXRDb250ZXh0KFwiMmRcIik7XG4gICAgdGhpcy5kcmF3Q2xlYXIoY3R4KTtcbiAgICB0aGlzLmRyYXdTY2VuZShjdHgpO1xuICB9XG5cbiAgZHJhd1NjZW5lKGN0eCkge1xuICAgIGlmKHRoaXMuc2NlbmUpIHtcbiAgICAgIHRoaXMuc2NlbmUucGFyZW50ID0gdGhpcztcbiAgICAgIHRoaXMuc2NlbmUuY2FudmFzID0gdGhpcztcblxuICAgICAgdHJ5IHtcbiAgICAgICAgY3R4LnNjYWxlKENvbnN0YW50cy5TZXR0aW5nLlBJWEVMX1JBVElPLCBDb25zdGFudHMuU2V0dGluZy5QSVhFTF9SQVRJTyk7XG4gICAgICAgIHRoaXMuc2NlbmUuZHJhdyhjdHgpO1xuICAgICAgfSBjYXRjaChlKSB7XG4gICAgICAgIHRoaXMuaGFzRXJyb3IgPSB0cnVlO1xuICAgICAgICB0aGlzLnNjZW5lID0gdGhpcy5zY2VuZUVycm9yO1xuICAgICAgICB0aGlzLnNjZW5lRXJyb3IuZXJyb3JUZXh0ID0gXCJcIiArIGUuc3RhY2s7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoQ29uc3RhbnRzLlN0cmluZy5FUlJPUl9NRVNTQUdFICsgXCIgXCIgKyBDb25zdGFudHMuU3RyaW5nLkVSUk9SX01FU1NBR0VfQ0FOVkFTICsgXCJcXG5cIiwgZSk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgZHJhd0NsZWFyKGN0eCkge1xuICAgIFV0aWxzLmNsZWFyKGN0eCk7XG4gIH1cblxuICBzdGFydERyYXcoZnVuYykge1xuICAgIHRoaXMuc3RhcnRlZCA9IHRydWU7XG5cbiAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUodGltZSA9PiB7XG4gICAgICBpZih0aGlzLnN0YXJ0ZWQpIHtcbiAgICAgICAgY29uc3Qgb2Zmc2V0RnJhbWUgPSB0aW1lIC0gdGhpcy4jbGFzdEZyYW1lVGltZTtcblxuICAgICAgICB0aGlzLmZ1bGxzY3JlZW4gPSBkb2N1bWVudC5mdWxsc2NyZWVuRWxlbWVudCA9PSB0aGlzLmNhbnZhcyB8fCBkb2N1bWVudC5mdWxsc2NyZWVuRWxlbWVudCA9PSB0aGlzLmNvbnRhaW5lcjtcblxuICAgICAgICBpZihDb25zdGFudHMuU2V0dGluZy5FTkFCTEVfUElYRUxfUkFUSU9fUkVTSVpJTkcpIHtcbiAgICAgICAgICBDb25zdGFudHMuU2V0dGluZy5QSVhFTF9SQVRJTyA9IHdpbmRvdy5kZXZpY2VQaXhlbFJhdGlvICogQ29uc3RhbnRzLlNldHRpbmcuUkVTT0xVVElPTl9TQ0FMRTsgLy8gVXBkYXRlIHRoZSBkZXZpY2UgcGl4ZWwgcmF0aW8sIG9ubHkgaW4gZnVsbHNjcmVlbiBtb2RlL2Z1bGxwYWdlIG1vZGVcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBDb25zdGFudHMuU2V0dGluZy5QSVhFTF9SQVRJTyA9IDEgKiBDb25zdGFudHMuU2V0dGluZy5SRVNPTFVUSU9OX1NDQUxFO1xuICAgICAgICB9XG5cbiAgICAgICAgVXRpbHMuYXV0b0RQSSh0aGlzLmNhbnZhcyk7XG5cbiAgICAgICAgaWYodGhpcy5tYXhGUFMgPCAxIHx8IG9mZnNldEZyYW1lID4gMTAwMCAvIHRoaXMubWF4RlBTKSB7XG4gICAgICAgICAgdGhpcy4jbGFzdEZyYW1lVGltZSA9IHRpbWU7XG4gICAgICAgICAgdGhpcy5kcmF3KCk7XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgIHRoaXMuc3RhcnREcmF3KGZ1bmMpO1xuICAgICAgICBpZihmdW5jKSBmdW5jKCk7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICBzdG9wRHJhdygpIHtcbiAgICB0aGlzLnN0YXJ0ZWQgPSBmYWxzZTtcbiAgfVxuXG4gIGFwcGVuZFRvKGVsZW1lbnQpIHtcbiAgICBlbGVtZW50LmFwcGVuZENoaWxkKHRoaXMuY29udGFpbmVyKTtcbiAgfVxuXG4gIHJlbW92ZShlbGVtZW50KSB7XG4gICAgZWxlbWVudC5yZW1vdmVDaGlsZCh0aGlzLmNvbnRhaW5lcik7XG4gICAgdGhpcy5jb250YWluZXIucmVtb3ZlQ2hpbGQodGhpcy5jYW52YXMpO1xuICB9XG5cbiAgdG9nZ2xlRnVsbHNjcmVlbigpIHtcbiAgICBVdGlscy50b2dnbGVGdWxsc2NyZWVuKHRoaXMuY2FudmFzLCB0aGlzLmNvbnRhaW5lcik7XG4gIH1cblxuICB0b2dnbGVGdWxscGFnZSgpIHtcbiAgICBVdGlscy50b2dnbGVGdWxscGFnZSh0aGlzLmNhbnZhcywgdGhpcy5jb250YWluZXIpO1xuICAgIHRoaXMuZnVsbHBhZ2UgPSAhdGhpcy5mdWxscGFnZTtcbiAgfVxuXG4gIGF1dG9SZXNpemUoKSB7XG4gICAgVXRpbHMuZW5hYmxlQXV0b1Jlc2l6ZUNhbnZhcyh0aGlzLmNhbnZhcywgdGhpcy5jb250YWluZXIsIHRoaXMud2lkdGgsIHRoaXMuaGVpZ2h0KTtcbiAgfVxuXG4gIGdldCB4KCkge1xuICAgIHJldHVybiAwO1xuICB9XG5cbiAgZ2V0IHkoKSB7XG4gICAgcmV0dXJuIDA7XG4gIH1cblxuICBnZXQgd2lkdGgoKSB7XG4gICAgcmV0dXJuIHRoaXMuY2FudmFzID8gVXRpbHMuZ2V0Q2FudmFzV2lkdGgodGhpcy5jYW52YXMpIDogdGhpcy4jX3dpZHRoO1xuICB9XG5cbiAgZ2V0IGhlaWdodCgpIHtcbiAgICByZXR1cm4gdGhpcy5jYW52YXMgPyBVdGlscy5nZXRDYW52YXNIZWlnaHQodGhpcy5jYW52YXMpIDogdGhpcy4jX2hlaWdodDtcbiAgfVxuXG4gIGdldCBzdHlsZSgpIHtcbiAgICByZXR1cm4gdGhpcy5jYW52YXMgPyB0aGlzLmNhbnZhcy5zdHlsZSA6IG51bGw7XG4gIH1cblxuICBzZXQgd2lkdGgod2lkdGgpIHtcbiAgICBpZih3aWR0aCAhPSB0aGlzLiNfd2lkdGgpIHtcbiAgICAgIHRoaXMuI193aWR0aCA9IHdpZHRoO1xuICAgICAgdGhpcy5jYW52YXMud2lkdGggPSB3aWR0aDtcbiAgICAgIHRoaXMuc2NlbmUgJiYgdGhpcy5zY2VuZS5yZWFjdG9yLmRpc3BhdGNoRXZlbnQoXCJvbkNoYW5nZVwiLCB0aGlzKTtcbiAgICB9XG4gIH1cblxuICBzZXQgaGVpZ2h0KGhlaWdodCkge1xuICAgIGlmKGhlaWdodCAhPSB0aGlzLiNfaGVpZ2h0KSB7XG4gICAgICB0aGlzLiNfaGVpZ2h0ID0gaGVpZ2h0O1xuICAgICAgdGhpcy5jYW52YXMuaGVpZ2h0ID0gaGVpZ2h0O1xuICAgICAgdGhpcy5zY2VuZSAmJiB0aGlzLnNjZW5lLnJlYWN0b3IuZGlzcGF0Y2hFdmVudChcIm9uQ2hhbmdlXCIsIHRoaXMpO1xuICAgIH1cbiAgfVxuXG4gIHNldCBjdXJzb3IoY3Vyc29yKSB7XG4gICBpZih0aGlzLmNhbnZhcykgdGhpcy5jYW52YXMuc3R5bGUuY3Vyc29yID0gY3Vyc29yO1xuICB9XG5cbiAgZ2V0IGN1cnNvcigpIHtcbiAgICByZXR1cm4gdGhpcy5jYW52YXMgPyB0aGlzLmNhbnZhcy5zdHlsZS5jdXJzb3IgOiBcIlwiO1xuICB9XG5cbiAgZ2V0Q29udGV4dChjb250ZXh0KSB7XG4gICAgcmV0dXJuIHRoaXMuY2FudmFzID8gdGhpcy5jYW52YXMuZ2V0Q29udGV4dChjb250ZXh0ID8gY29udGV4dCA6IFwiMmRcIikgOiBudWxsO1xuICB9XG5cbiAgY3JlYXRlRXZlbnRzKCkge1xuICAgIGlmKCF0aGlzLmluaXQgJiYgdGhpcy5jYW52YXMpIHtcbiAgICAgIFtcIm1vdXNlbW92ZVwiLCBcImNsaWNrXCIsIFwibW91c2Vkb3duXCIsIFwibW91c2V1cFwiLCBcIndoZWVsXCJdLmZvckVhY2goZXZlbnROYW1lID0+IHtcbiAgICAgICAgdGhpcy5jYW52YXMuYWRkRXZlbnRMaXN0ZW5lcihldmVudE5hbWUsIGV2ZW50ID0+IHtcbiAgICAgICAgICBjb25zdCBtb3VzZVBvc2l0aW9uID0gdGhpcy5nZXRNb3VzZVBvcyhldmVudCk7XG4gICAgICAgICAgdGhpcy5kb0V2ZW50cyhldmVudCwgZXZlbnROYW1lLCBtb3VzZVBvc2l0aW9uKTtcbiAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICB9LCBmYWxzZSk7XG4gICAgICB9KTtcblxuICAgICAgW1widG91Y2hzdGFydFwiLCBcInRvdWNobW92ZVwiLCBcInRvdWNoZW5kXCJdLmZvckVhY2goZXZlbnROYW1lID0+IHtcbiAgICAgICAgdGhpcy5jYW52YXMuYWRkRXZlbnRMaXN0ZW5lcihldmVudE5hbWUsIGV2ZW50ID0+IHtcbiAgICAgICAgICBjb25zdCBjaGFuZ2VkVG91Y2hlcyA9IGV2ZW50LmNoYW5nZWRUb3VjaGVzWzBdO1xuICAgICAgICAgIGNvbnN0IHBvc2l0aW9uID0gdGhpcy5nZXRNb3VzZVBvcyhjaGFuZ2VkVG91Y2hlcyk7XG4gICAgICAgICAgdGhpcy5kb0V2ZW50cyhldmVudCwgZXZlbnROYW1lLCBwb3NpdGlvbik7XG4gICAgICAgIH0pO1xuICAgICAgfSk7XG5cbiAgICAgIHRoaXMuaW5pdCA9IHRydWU7XG4gICAgfVxuICB9XG5cbiAgZG9FdmVudHMoZXZlbnQsIGV2ZW50TmFtZSwgcG9zaXRpb24pIHtcbiAgICBjb25zdCBjb21wb25lbnRzID0gdGhpcy5nZXRDb21wb25lbnRzQXRQb3NpdGlvbihwb3NpdGlvbik7IC8vIEdldCBhbGwgZWxlbWVudHMgYXQgdGhlIGN1cnJlbnQgcG9zaXRpb25cbiAgICB0aGlzLnJlYWN0b3IuZGlzcGF0Y2hFdmVudChldmVudE5hbWUsIGV2ZW50LCBmYWxzZSk7IC8vIERpc3BhdGNoIHRvIGFsbCBjb21wb25lbnRzIHRvIGRpc2FibGUgdGhlbSAoY2FsbCB3aXRoIGZhbHNlKVxuICAgIFsuLi5jb21wb25lbnRzXS5yZXZlcnNlKCkuZm9yRWFjaChjb21wb25lbnQgPT4gdGhpcy5yZWFjdG9yLmRpc3BhdGNoRXZlbnRDb21wb25lbnQoZXZlbnROYW1lLCBjb21wb25lbnQsIGV2ZW50LCB0cnVlKSk7IC8vIERpc3BhdGNoIHRvIGNvbXBvbmVudCBkZXRlY3RlZCB0byBlbmFibGUgdGhlbSAoY2FsbCB3aXRoIHRydWUpXG4gIH1cblxuICBhZGRFdmVudExpc3RlbmVyKGV2ZW50LCBjb21wb25lbnQsIGNhbGxiYWNrKSB7XG4gICAgdGhpcy5yZWFjdG9yLmFkZEV2ZW50TGlzdGVuZXIoZXZlbnQsIGNvbXBvbmVudCwgY2FsbGJhY2spO1xuICB9XG4gIFxuICBnZXRNb3VzZVBvcyhldmVudCkge1xuICAgIHJldHVybiBVdGlscy5nZXRNb3VzZVBvcyh0aGlzLmNhbnZhcywgZXZlbnQpO1xuICB9XG5cbiAgZ2V0QWxsQ29tcG9uZW50cyhzdGFydCA9IHRoaXMuc2NlbmUpIHtcbiAgICByZXR1cm4gdGhpcy5zY2VuZS5nZXRBbGxDb21wb25lbnRzKHN0YXJ0KTtcbiAgfVxuXG4gIGdldENvbXBvbmVudHNBdFBvc2l0aW9uKG1vdXNlUG9zaXRpb24sIHN0YXJ0ID0gdGhpcy5zY2VuZSkge1xuICAgIGNvbnN0IGFsbENvbXBvbmVudHMgPSB0aGlzLnNjZW5lLmdldENvbXBvbmVudHNUcmVlKHN0YXJ0KTtcbiAgICBjb25zdCByZXN1bHQgPSBbc3RhcnRdO1xuXG4gICAgaWYoYWxsQ29tcG9uZW50cy5jaGlsZHMpIHtcbiAgICAgIGFsbENvbXBvbmVudHMuY2hpbGRzLnNvcnQoU2NlbmUuc29ydENvbXBvbmVudHNUcmVlKS5yZXZlcnNlKCkuc29tZShjaGlsZCA9PiB7XG4gICAgICAgIGlmKGNoaWxkLmNvbXBvbmVudC5pc0luc2lkZShtb3VzZVBvc2l0aW9uKSAmJiAhY2hpbGQuY29tcG9uZW50LmhpZGRlbiAmJiAhY2hpbGQuY29tcG9uZW50LmRpc2FibGVkKSB7XG4gICAgICAgICAgcmVzdWx0LnB1c2goLi4udGhpcy5nZXRDb21wb25lbnRzQXRQb3NpdGlvbihtb3VzZVBvc2l0aW9uLCBjaGlsZC5jb21wb25lbnQpKTtcbiAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHJlc3VsdDtcbiAgfVxufSIsIi8qXG4gKiBDb3B5cmlnaHQgKEMpIDIwMjAgRWxpYXN0aWsgKGVsaWFzdGlrc29mdHMuY29tKVxuICpcbiAqIFRoaXMgZmlsZSBpcyBwYXJ0IG9mIFwiSlNHYW1lVG9vbHNcIi5cbiAqXG4gKiBcIkpTR2FtZVRvb2xzXCIgaXMgZnJlZSBzb2Z0d2FyZTogeW91IGNhbiByZWRpc3RyaWJ1dGUgaXQgYW5kL29yIG1vZGlmeVxuICogaXQgdW5kZXIgdGhlIHRlcm1zIG9mIHRoZSBHTlUgR2VuZXJhbCBQdWJsaWMgTGljZW5zZSBhcyBwdWJsaXNoZWQgYnlcbiAqIHRoZSBGcmVlIFNvZnR3YXJlIEZvdW5kYXRpb24sIGVpdGhlciB2ZXJzaW9uIDMgb2YgdGhlIExpY2Vuc2UsIG9yXG4gKiAoYXQgeW91ciBvcHRpb24pIGFueSBsYXRlciB2ZXJzaW9uLlxuICpcbiAqIFwiSlNHYW1lVG9vbHNcIiBpcyBkaXN0cmlidXRlZCBpbiB0aGUgaG9wZSB0aGF0IGl0IHdpbGwgYmUgdXNlZnVsLFxuICogYnV0IFdJVEhPVVQgQU5ZIFdBUlJBTlRZOyB3aXRob3V0IGV2ZW4gdGhlIGltcGxpZWQgd2FycmFudHkgb2ZcbiAqIE1FUkNIQU5UQUJJTElUWSBvciBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRS4gIFNlZSB0aGVcbiAqIEdOVSBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlIGZvciBtb3JlIGRldGFpbHMuXG4gKlxuICogWW91IHNob3VsZCBoYXZlIHJlY2VpdmVkIGEgY29weSBvZiB0aGUgR05VIEdlbmVyYWwgUHVibGljIExpY2Vuc2VcbiAqIGFsb25nIHdpdGggXCJKU0dhbWVUb29sc1wiLiAgSWYgbm90LCBzZWUgPGh0dHA6Ly93d3cuZ251Lm9yZy9saWNlbnNlcy8+LlxuICovXG5pbXBvcnQgQ29tcG9uZW50IGZyb20gXCIuL0NvbXBvbmVudFwiO1xuaW1wb3J0IENvbnN0YW50cyBmcm9tIFwiLi9Db25zdGFudHNcIjtcbmltcG9ydCBVdGlscyBmcm9tIFwiLi9VdGlsc1wiO1xuaW1wb3J0IFN0eWxlIGZyb20gXCIuL1N0eWxlXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIENpcmNsZSBleHRlbmRzIENvbXBvbmVudCB7XG4gIHNlbGVjdGFibGUgPSBmYWxzZTtcblxuICBjb25zdHJ1Y3Rvcih4LCB5LCB3aWR0aCwgc3R5bGUpIHtcbiAgICBzdXBlcih4LCB5LCB3aWR0aCwgd2lkdGgsIHN0eWxlKTtcbiAgfVxuXG4gIGRyYXcoY29udGV4dCkge1xuICAgIGlmKHRoaXMuaGlkZGVuKSByZXR1cm47XG4gICAgc3VwZXIuZHJhdyhjb250ZXh0KTtcblxuICAgIGNvbnN0IGNhbnZhcyA9IGNvbnRleHQuY2FudmFzO1xuICAgIGNvbnN0IGN0eCA9IGNhbnZhcy5nZXRDb250ZXh0KFwiMmRcIik7XG4gICAgXG4gICAgVXRpbHMuZHJhd0NpcmNsZShjdHgsIHRoaXMueCwgdGhpcy55LCB0aGlzLndpZHRoLCB0aGlzLnN0eWxlLmxpbmVXaWR0aCwgdGhpcy5zdHlsZS5jb2xvciwgdGhpcy5zdHlsZS5saW5lQ2FwLCB0aGlzLnN0eWxlLmZpbGwsIHRoaXMuc3R5bGUuZmlsbENvbG9yKTtcblxuICAgIHRoaXMuaW5pdCA9IHRydWU7XG4gIH1cblxuICBnZXQgd2lkdGgoKSB7XG4gICAgcmV0dXJuIHN1cGVyLndpZHRoICsgdGhpcy5zdHlsZS5saW5lV2lkdGg7XG4gIH1cblxuICBnZXQgaGVpZ2h0KCkge1xuICAgIHJldHVybiBzdXBlci5oZWlnaHQgKyB0aGlzLnN0eWxlLmxpbmVXaWR0aDtcbiAgfVxuXG4gIHNldCB3aWR0aCh3aWR0aCkge1xuICAgIHN1cGVyLndpZHRoID0gd2lkdGg7XG4gIH1cblxuICBzZXQgaGVpZ2h0KGhlaWdodCkge1xuICAgIHN1cGVyLmhlaWdodCA9IGhlaWdodDtcbiAgfVxuXG4gIGdldCBkZWZhdWx0U3R5bGUoKSB7XG4gICAgcmV0dXJuIG5ldyBTdHlsZSh7XG4gICAgICBcImxpbmVXaWR0aFwiOiBDb25zdGFudHMuU2V0dGluZy5DSVJDTEVfREVGQVVMVF9MSU5FX1NJWkUsXG4gICAgICBcImNvbG9yXCI6IENvbnN0YW50cy5TZXR0aW5nLkNJUkNMRV9ERUZBVUxUX0NPTE9SLFxuICAgICAgXCJmaWxsXCI6IENvbnN0YW50cy5TZXR0aW5nLkNJUkNMRV9ERUZBVUxUX0ZJTEwsXG4gICAgICBcImxpbmVDYXBcIjogQ29uc3RhbnRzLlNldHRpbmcuQ0lSQ0xFX0RFRkFVTFRfTElORV9DQVAsXG4gICAgICBcImZpbGxDb2xvclwiOiBDb25zdGFudHMuU2V0dGluZy5DSVJDTEVfREVGQVVMVF9GSUxMX0NPTE9SXG4gICAgfSk7XG4gIH1cbn0iLCIvKlxuICogQ29weXJpZ2h0IChDKSAyMDIwIEVsaWFzdGlrIChlbGlhc3Rpa3NvZnRzLmNvbSlcbiAqXG4gKiBUaGlzIGZpbGUgaXMgcGFydCBvZiBcIkpTR2FtZVRvb2xzXCIuXG4gKlxuICogXCJKU0dhbWVUb29sc1wiIGlzIGZyZWUgc29mdHdhcmU6IHlvdSBjYW4gcmVkaXN0cmlidXRlIGl0IGFuZC9vciBtb2RpZnlcbiAqIGl0IHVuZGVyIHRoZSB0ZXJtcyBvZiB0aGUgR05VIEdlbmVyYWwgUHVibGljIExpY2Vuc2UgYXMgcHVibGlzaGVkIGJ5XG4gKiB0aGUgRnJlZSBTb2Z0d2FyZSBGb3VuZGF0aW9uLCBlaXRoZXIgdmVyc2lvbiAzIG9mIHRoZSBMaWNlbnNlLCBvclxuICogKGF0IHlvdXIgb3B0aW9uKSBhbnkgbGF0ZXIgdmVyc2lvbi5cbiAqXG4gKiBcIkpTR2FtZVRvb2xzXCIgaXMgZGlzdHJpYnV0ZWQgaW4gdGhlIGhvcGUgdGhhdCBpdCB3aWxsIGJlIHVzZWZ1bCxcbiAqIGJ1dCBXSVRIT1VUIEFOWSBXQVJSQU5UWTsgd2l0aG91dCBldmVuIHRoZSBpbXBsaWVkIHdhcnJhbnR5IG9mXG4gKiBNRVJDSEFOVEFCSUxJVFkgb3IgRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UuICBTZWUgdGhlXG4gKiBHTlUgR2VuZXJhbCBQdWJsaWMgTGljZW5zZSBmb3IgbW9yZSBkZXRhaWxzLlxuICpcbiAqIFlvdSBzaG91bGQgaGF2ZSByZWNlaXZlZCBhIGNvcHkgb2YgdGhlIEdOVSBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlXG4gKiBhbG9uZyB3aXRoIFwiSlNHYW1lVG9vbHNcIi4gIElmIG5vdCwgc2VlIDxodHRwOi8vd3d3LmdudS5vcmcvbGljZW5zZXMvPi5cbiAqL1xuaW1wb3J0IENvbXBvbmVudCBmcm9tIFwiLi9Db21wb25lbnRcIjtcbmltcG9ydCBDb250YWluZXIgZnJvbSBcIi4vQ29udGFpbmVyXCI7XG5pbXBvcnQgVXRpbHMgZnJvbSBcIi4vVXRpbHNcIjtcbmltcG9ydCBDb25zdGFudHMgZnJvbSBcIi4vQ29uc3RhbnRzXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIENvbCBleHRlbmRzIENvbnRhaW5lciB7XG4gIHNlbGVjdGFibGUgPSBmYWxzZTtcbiAgI19pbm5lckhlaWdodCA9IDA7XG4gICNfaW5uZXJXaWR0aCA9IDA7XG5cbiAgY29uc3RydWN0b3IoeCwgeSwgbWF4V2lkdGgsIG1heEhlaWdodCwgc3R5bGUsIC4uLmNvbXBvbmVudHMpIHtcbiAgICBzdXBlcih4LCB5LCBtYXhXaWR0aCwgbWF4SGVpZ2h0LCBzdHlsZSwgLi4uY29tcG9uZW50cyk7XG5cbiAgICBpZighQ29uc3RhbnRzLlNldHRpbmcuRElTQUJMRV9FWFBFUklNRU5UQUxfT1BUSU1JWkFUSU9OUykge1xuICAgICAgdGhpcy51cGRhdGVJbm5lcldpZHRoKCk7XG4gICAgICB0aGlzLnVwZGF0ZUlubmVySGVpZ2h0KCk7XG4gIFxuICAgICAgdGhpcy5hZGRDaGFuZ2VBY3Rpb24oKCkgPT4ge1xuICAgICAgICB0aGlzLnVwZGF0ZUlubmVyV2lkdGgoKTtcbiAgICAgICAgdGhpcy51cGRhdGVJbm5lckhlaWdodCgpO1xuICAgICAgfSk7XG4gICAgfVxuICB9XG5cbiAgZHJhdyhjb250ZXh0KSB7XG4gICAgaWYodGhpcy5oaWRkZW4pIHJldHVybjtcbiAgICBzdXBlci5kcmF3KGNvbnRleHQpO1xuXG4gICAgY29uc3QgY2FudmFzID0gY29udGV4dC5jYW52YXM7XG4gICAgY29uc3QgY3R4ID0gY2FudmFzLmdldENvbnRleHQoXCIyZFwiKTtcbiAgICBjdHguc2F2ZSgpO1xuXG4gICAgbGV0IGN0eFRlbXAgPSBjdHg7XG5cbiAgICBpZih0aGlzLmlzQ3V0dGluZykge1xuICAgICAgY3R4VGVtcCA9IHRoaXMuY2FudmFzVG1wLmdldENvbnRleHQoXCIyZFwiKTtcbiAgICAgIGN0eFRlbXAuc2NhbGUoQ29uc3RhbnRzLlNldHRpbmcuUElYRUxfUkFUSU8sIENvbnN0YW50cy5TZXR0aW5nLlBJWEVMX1JBVElPKTtcbiAgICB9XG4gIFxuICAgIGlmKHN1cGVyLmNvbXBvbmVudHMgIT0gbnVsbCkge1xuICAgICAgbGV0IGN1cnJlbnRZID0gdGhpcy5zdHlsZS5wYWRkaW5nO1xuXG4gICAgICBzdXBlci5jb21wb25lbnRzLmZvckVhY2goY29tcG9uZW50ID0+IHtcbiAgICAgICAgY3VycmVudFkgPSB0aGlzLmRyYXdDb21wb25lbnQoY29tcG9uZW50LCBjdXJyZW50WSwgY3R4VGVtcCk7XG4gICAgICB9KTtcbiAgICB9XG4gICAgXG4gICAgaWYodGhpcy5pc0N1dHRpbmcpIHtcbiAgICAgIFV0aWxzLmRyYXdJbWFnZURhdGEoY3R4LCB0aGlzLmNhbnZhc1RtcCwgdGhpcy54LCB0aGlzLnksIHRoaXMud2lkdGgsIHRoaXMuaGVpZ2h0LCB0aGlzLnggKiBDb25zdGFudHMuU2V0dGluZy5QSVhFTF9SQVRJTywgdGhpcy55ICogQ29uc3RhbnRzLlNldHRpbmcuUElYRUxfUkFUSU8sIHRoaXMud2lkdGggKiBDb25zdGFudHMuU2V0dGluZy5QSVhFTF9SQVRJTywgdGhpcy5oZWlnaHQgKiBDb25zdGFudHMuU2V0dGluZy5QSVhFTF9SQVRJTyk7XG4gICAgfVxuICAgIFxuICAgIHN1cGVyLmRyYXdTY3JvbGxiYXJzKGN0eCk7XG4gICAgXG4gICAgY3R4LnJlc3RvcmUoKTtcbiAgfVxuXG4gIGRyYXdDb21wb25lbnQoY29tcG9uZW50LCBjdXJyZW50WSwgY3R4KSB7XG4gICAgaWYoY29tcG9uZW50IGluc3RhbmNlb2YgQ29tcG9uZW50KSB7XG4gICAgICBjb21wb25lbnQueCA9IHRoaXMuc3R5bGUucGFkZGluZyAtIHRoaXMub2Zmc2V0U2Nyb2xsWDtcbiAgICAgIGNvbXBvbmVudC55ID0gY3VycmVudFkgLSB0aGlzLm9mZnNldFNjcm9sbFk7XG4gICAgICBcbiAgICAgIGlmKCFjb21wb25lbnQuaGlkZGVuKSB7XG4gICAgICAgIGlmKHRoaXMuaXNDb21wb25lbnRWaXNpYmxlKGNvbXBvbmVudCkpIHtcbiAgICAgICAgICBjb21wb25lbnQuZHJhdyhjdHgpO1xuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICBjdXJyZW50WSArPSBjb21wb25lbnQuaGVpZ2h0ICsgdGhpcy5zdHlsZS5zcGFjZUJldHdlZW5Db21wb25lbnRzO1xuICAgICAgfVxuICAgIH1cbiAgICBcbiAgICByZXR1cm4gY3VycmVudFk7XG4gIH1cblxuICB1cGRhdGVJbm5lckhlaWdodCgpIHtcbiAgICBsZXQgdG90YWxIZWlnaHQgPSAwO1xuICAgIHN1cGVyLmNvbXBvbmVudHMuZm9yRWFjaChjb21wb25lbnQgPT4geyBpZighY29tcG9uZW50LmhpZGRlbikgdG90YWxIZWlnaHQgKz0gY29tcG9uZW50LmhlaWdodCB9KTtcbiAgICB0aGlzLiNfaW5uZXJIZWlnaHQgPSB0b3RhbEhlaWdodCArIHRoaXMuc3R5bGUuc3BhY2VCZXR3ZWVuQ29tcG9uZW50cyAqIChzdXBlci5jb21wb25lbnRzLmxlbmd0aCAtIDEpICsgdGhpcy5zdHlsZS5wYWRkaW5nO1xuICB9XG5cbiAgdXBkYXRlSW5uZXJXaWR0aCgpIHtcbiAgICBsZXQgbWF4V2lkdGggPSAwO1xuICAgIHN1cGVyLmNvbXBvbmVudHMuZm9yRWFjaChjb21wb25lbnQgPT4geyBpZihjb21wb25lbnQud2lkdGggPiBtYXhXaWR0aCAmJiAhY29tcG9uZW50LmhpZGRlbikgbWF4V2lkdGggPSBjb21wb25lbnQud2lkdGg7IH0pO1xuICAgIHRoaXMuI19pbm5lcldpZHRoID0gbWF4V2lkdGggKyB0aGlzLnN0eWxlLnBhZGRpbmc7XG4gIH1cblxuICBnZXQgaW5uZXJIZWlnaHQoKSB7XG4gICAgaWYoQ29uc3RhbnRzLlNldHRpbmcuRElTQUJMRV9FWFBFUklNRU5UQUxfT1BUSU1JWkFUSU9OUykgdGhpcy51cGRhdGVJbm5lckhlaWdodCgpO1xuICAgIHJldHVybiB0aGlzLiNfaW5uZXJIZWlnaHQ7XG4gIH1cblxuICBnZXQgaW5uZXJXaWR0aCgpIHtcbiAgICBpZihDb25zdGFudHMuU2V0dGluZy5ESVNBQkxFX0VYUEVSSU1FTlRBTF9PUFRJTUlaQVRJT05TKSB0aGlzLnVwZGF0ZUlubmVyV2lkdGgoKTtcbiAgICByZXR1cm4gdGhpcy4jX2lubmVyV2lkdGg7XG4gIH1cblxuICBnZXQgd2lkdGgoKSB7XG4gICAgY29uc3Qgd2lkdGggPSB0aGlzLmlubmVyV2lkdGggfHwgKHRoaXMucGFyZW50ICYmIHRoaXMucGFyZW50LndpZHRoKTtcbiAgICBjb25zdCBtaW4gPSB0aGlzLm1heFdpZHRoICE9IG51bGwgPyBNYXRoLm1pbih0aGlzLm1heFdpZHRoLCB3aWR0aCkgOiBudWxsO1xuICAgIHJldHVybiB0aGlzLm1pbldpZHRoICE9IG51bGwgPyBNYXRoLm1heCh0aGlzLm1pbldpZHRoLCBtaW4gIT0gbnVsbCA/IG1pbiA6IHdpZHRoKSA6IG1pbiAhPSBudWxsID8gbWluIDogd2lkdGg7XG4gIH1cblxuICBnZXQgaGVpZ2h0KCkge1xuICAgIGNvbnN0IGhlaWdodCA9IHRoaXMuaW5uZXJIZWlnaHQgfHwgKHRoaXMucGFyZW50ICYmIHRoaXMucGFyZW50LmhlaWdodCk7XG4gICAgY29uc3QgbWluID0gdGhpcy5tYXhIZWlnaHQgIT0gbnVsbCA/IE1hdGgubWluKHRoaXMubWF4SGVpZ2h0LCBoZWlnaHQpIDogbnVsbDtcbiAgICByZXR1cm4gdGhpcy5taW5IZWlnaHQgIT0gbnVsbCA/IE1hdGgubWF4KHRoaXMubWluSGVpZ2h0LCBtaW4gIT0gbnVsbCA/IG1pbiA6IGhlaWdodCkgOiBtaW4gIT0gbnVsbCA/IG1pbiA6IGhlaWdodDtcbiAgfVxuXG4gIGdldCBkZWZhdWx0U3R5bGUoKSB7XG4gICAgcmV0dXJuIHN1cGVyLmRlZmF1bHRTdHlsZTtcbiAgfVxufSIsIi8qXG4gKiBDb3B5cmlnaHQgKEMpIDIwMjAgRWxpYXN0aWsgKGVsaWFzdGlrc29mdHMuY29tKVxuICpcbiAqIFRoaXMgZmlsZSBpcyBwYXJ0IG9mIFwiSlNHYW1lVG9vbHNcIi5cbiAqXG4gKiBcIkpTR2FtZVRvb2xzXCIgaXMgZnJlZSBzb2Z0d2FyZTogeW91IGNhbiByZWRpc3RyaWJ1dGUgaXQgYW5kL29yIG1vZGlmeVxuICogaXQgdW5kZXIgdGhlIHRlcm1zIG9mIHRoZSBHTlUgR2VuZXJhbCBQdWJsaWMgTGljZW5zZSBhcyBwdWJsaXNoZWQgYnlcbiAqIHRoZSBGcmVlIFNvZnR3YXJlIEZvdW5kYXRpb24sIGVpdGhlciB2ZXJzaW9uIDMgb2YgdGhlIExpY2Vuc2UsIG9yXG4gKiAoYXQgeW91ciBvcHRpb24pIGFueSBsYXRlciB2ZXJzaW9uLlxuICpcbiAqIFwiSlNHYW1lVG9vbHNcIiBpcyBkaXN0cmlidXRlZCBpbiB0aGUgaG9wZSB0aGF0IGl0IHdpbGwgYmUgdXNlZnVsLFxuICogYnV0IFdJVEhPVVQgQU5ZIFdBUlJBTlRZOyB3aXRob3V0IGV2ZW4gdGhlIGltcGxpZWQgd2FycmFudHkgb2ZcbiAqIE1FUkNIQU5UQUJJTElUWSBvciBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRS4gIFNlZSB0aGVcbiAqIEdOVSBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlIGZvciBtb3JlIGRldGFpbHMuXG4gKlxuICogWW91IHNob3VsZCBoYXZlIHJlY2VpdmVkIGEgY29weSBvZiB0aGUgR05VIEdlbmVyYWwgUHVibGljIExpY2Vuc2VcbiAqIGFsb25nIHdpdGggXCJKU0dhbWVUb29sc1wiLiAgSWYgbm90LCBzZWUgPGh0dHA6Ly93d3cuZ251Lm9yZy9saWNlbnNlcy8+LlxuICovXG5pbXBvcnQgQ29uc3RhbnRzIGZyb20gXCIuL0NvbnN0YW50c1wiO1xuaW1wb3J0IFN0eWxlIGZyb20gXCIuL1N0eWxlXCI7XG5pbXBvcnQgUmVhY3RvciBmcm9tIFwiLi9SZWFjdG9yXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIENvbXBvbmVudCB7XG4gIHNlbGVjdGFibGUgPSB0cnVlO1xuICAjX3dpZHRoID0gMDtcbiAgI19oZWlnaHQgPSAwO1xuICAjX3ggPSAwO1xuICAjX3kgPSAwO1xuICAjX2Rpc2FibGVkID0gZmFsc2U7XG4gICNfc2VsZWN0ZWQgPSBmYWxzZTtcbiAgI19zdHlsZTtcblxuICBjb25zdHJ1Y3Rvcih4LCB5LCB3aWR0aCwgaGVpZ2h0LCBzdHlsZSkge1xuICAgIHRoaXMuI194ID0geCB8fCAwO1xuICAgIHRoaXMuI195ID0geSB8fCAwO1xuICAgIHRoaXMuZGVsdGFYID0gMDtcbiAgICB0aGlzLmRlbHRhWSA9IDA7XG4gICAgdGhpcy4jX3dpZHRoID0gd2lkdGg7XG4gICAgdGhpcy4jX2hlaWdodCA9IGhlaWdodDtcbiAgICB0aGlzLmNhbnZhcztcbiAgICB0aGlzLnBhcmVudDtcblxuICAgIC8vIFN0eWxlXG4gICAgdGhpcy5zdHlsZSA9IHN0eWxlO1xuICAgIFxuICAgIC8vIEZ1bmN0aW9ucyB0cmlnZ2VyZWQgYnkgZXZlbnRzXG4gICAgdGhpcy5yZWFjdG9yID0gbmV3IFJlYWN0b3IoKTtcbiAgICB0aGlzLnJlYWN0b3IucmVnaXN0ZXJFdmVudChcIm9uQ2xpY2tcIik7XG4gICAgdGhpcy5yZWFjdG9yLnJlZ2lzdGVyRXZlbnQoXCJvbkhvdmVyXCIpO1xuICAgIHRoaXMucmVhY3Rvci5yZWdpc3RlckV2ZW50KFwib25Eb3duXCIpO1xuICAgIHRoaXMucmVhY3Rvci5yZWdpc3RlckV2ZW50KFwib25TY3JvbGxcIik7XG4gICAgdGhpcy5yZWFjdG9yLnJlZ2lzdGVyRXZlbnQoXCJvbk1vdmVcIik7XG4gICAgdGhpcy5yZWFjdG9yLnJlZ2lzdGVyRXZlbnQoXCJvblVwXCIpO1xuICAgIHRoaXMucmVhY3Rvci5yZWdpc3RlckV2ZW50KFwib25DaGFuZ2VcIik7XG5cbiAgICAvLyBTdGF0ZVxuICAgIHRoaXMuaW5pdCA9IGZhbHNlO1xuICAgIHRoaXMuaGFzSW5pdEV2ZW50cyA9IGZhbHNlO1xuICAgIHRoaXMuI19zZWxlY3RlZCA9IGZhbHNlO1xuICAgIHRoaXMuY2xpY2tlZCA9IGZhbHNlO1xuICAgIHRoaXMuaG92ZXJlZCA9IGZhbHNlO1xuICAgIHRoaXMuI19kaXNhYmxlZCA9IGZhbHNlO1xuICAgIHRoaXMubW92YWJsZSA9IGZhbHNlO1xuXG4gICAgLy8gU2Nyb2xsIHN0YXRlXG4gICAgdGhpcy5vZmZzZXRTY3JvbGxYID0gMDtcbiAgICB0aGlzLm9mZnNldFNjcm9sbFkgPSAwO1xuXG4gICAgLy8gTW92ZSBldmVudFxuICAgIHRoaXMub2Zmc2V0TW92ZVggPSAwO1xuICAgIHRoaXMub2Zmc2V0TW92ZVkgPSAwO1xuICAgIHRoaXMubW92ZUV2ZW50U3RhcnRYID0gMDtcbiAgICB0aGlzLm1vdmVFdmVudFN0YXJ0WSA9IDA7XG5cbiAgICAvLyBUb3VjaCBldmVudHNcbiAgICB0aGlzLnRvdWNoRXZlbnRTdGFydFggPSAwO1xuICAgIHRoaXMudG91Y2hFdmVudFN0YXJ0WSA9IDA7XG4gICAgdGhpcy50b3VjaEV2ZW50U3RhcnRUaW1lc3RhbXAgPSAwO1xuXG4gICAgdGhpcy50b29sdGlwO1xuICAgIHRoaXMuaW5pdEV2ZW50cygpO1xuXG4gICAgdGhpcy5hZGRNb3ZlQWN0aW9uKChkZWx0YVgsIGRlbHRhWSkgPT4ge1xuICAgICAgaWYodGhpcy5tb3ZhYmxlICYmICF0aGlzLmRpc2FibGVkICYmIHRoaXMuY2xpY2tlZCkge1xuICAgICAgICB0aGlzLmRlbHRhWCAtPSBkZWx0YVg7XG4gICAgICAgIHRoaXMuZGVsdGFZIC09IGRlbHRhWTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIGluaXRFdmVudHMoKSB7XG4gICAgaWYoIXRoaXMuaGFzSW5pdEV2ZW50cyAmJiB0aGlzLmNhbnZhcyAhPSBudWxsKSB7XG4gICAgICB0aGlzLmNhbnZhcy5hZGRFdmVudExpc3RlbmVyKFwibW91c2Vtb3ZlXCIsIHRoaXMsIChldmVudCwgcmVzdWx0KSA9PiB7XG4gICAgICAgIGlmKCF0aGlzLmRpc2FibGVkKSB7XG4gICAgICAgICAgY29uc3QgbW91c2VQb3NpdGlvbiA9IHRoaXMuZ2V0TW91c2VQb3MoZXZlbnQpO1xuXG4gICAgICAgICAgaWYodGhpcy5jbGlja2VkKSB7XG4gICAgICAgICAgICBjb25zdCBkZWx0YVggPSB0aGlzLm1vdmVFdmVudFN0YXJ0WCAtIG1vdXNlUG9zaXRpb24ueDtcbiAgICAgICAgICAgIGNvbnN0IGRlbHRhWSA9IHRoaXMubW92ZUV2ZW50U3RhcnRZIC0gbW91c2VQb3NpdGlvbi55O1xuXG4gICAgICAgICAgICB0aGlzLm9mZnNldE1vdmVYICs9IGRlbHRhWDtcbiAgICAgICAgICAgIHRoaXMub2Zmc2V0TW92ZVkgKz0gZGVsdGFZO1xuXG4gICAgICAgICAgICBpZih0aGlzLnJlYWN0b3IpIHtcbiAgICAgICAgICAgICAgdGhpcy5yZWFjdG9yLmRpc3BhdGNoRXZlbnQoXCJvbk1vdmVcIiwgZGVsdGFYLCBkZWx0YVksIG1vdXNlUG9zaXRpb24pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgXG4gICAgICAgICAgICB0aGlzLm1vdmVFdmVudFN0YXJ0WCA9IG1vdXNlUG9zaXRpb24ueDtcbiAgICAgICAgICAgIHRoaXMubW92ZUV2ZW50U3RhcnRZID0gbW91c2VQb3NpdGlvbi55O1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGlmKHJlc3VsdCkge1xuICAgICAgICAgICAgaWYodGhpcy5yZWFjdG9yICYmICF0aGlzLmRpc2FibGVkKSB7XG4gICAgICAgICAgICAgIHRoaXMucmVhY3Rvci5kaXNwYXRjaEV2ZW50KFwib25Ib3ZlclwiLCBtb3VzZVBvc2l0aW9uKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYodGhpcy50b29sdGlwKSB7XG4gICAgICAgICAgICAgIHRoaXMudG9vbHRpcC54ID0gbW91c2VQb3NpdGlvbi54ICsgMTA7XG4gICAgICAgICAgICAgIHRoaXMudG9vbHRpcC55ID0gbW91c2VQb3NpdGlvbi55ICsgMTA7XG4gICAgICAgICAgICAgIHRoaXMudG9vbHRpcC5lbmFibGUoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIFxuICAgICAgICAgICAgdGhpcy5ob3ZlcmVkID0gdHJ1ZTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5ob3ZlcmVkID0gZmFsc2U7XG4gICAgICAgICAgICBpZih0aGlzLnRvb2x0aXApIHRoaXMudG9vbHRpcC5kaXNhYmxlKClcbiAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdGhpcy5ob3ZlcmVkID0gZmFsc2U7XG4gICAgICAgICAgdGhpcy5jbGlja2VkID0gZmFsc2U7XG4gICAgICAgICAgaWYodGhpcy50b29sdGlwKSB0aGlzLnRvb2x0aXAuZGlzYWJsZSgpO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICAgIFxuICAgICAgdGhpcy5jYW52YXMuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIHRoaXMsIChldmVudCwgcmVzdWx0KSA9PiB7XG4gICAgICAgIGlmKCF0aGlzLmRpc2FibGVkKSB7XG4gICAgICAgICAgY29uc3QgbW91c2VQb3NpdGlvbiA9IHRoaXMuZ2V0TW91c2VQb3MoZXZlbnQpO1xuXG4gICAgICAgICAgaWYocmVzdWx0ICYmIHRoaXMuaG92ZXJlZCkge1xuICAgICAgICAgICAgaWYodGhpcy5yZWFjdG9yKSB7XG4gICAgICAgICAgICAgIHRoaXMucmVhY3Rvci5kaXNwYXRjaEV2ZW50KFwib25DbGlja1wiLCBtb3VzZVBvc2l0aW9uKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgdGhpcy5zZWxlY3RlZCA9IHRydWU7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuY2xpY2tlZCA9IGZhbHNlO1xuICAgICAgICAgICAgdGhpcy5zZWxlY3RlZCA9IGZhbHNlO1xuICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB0aGlzLmhvdmVyZWQgPSBmYWxzZTtcbiAgICAgICAgICB0aGlzLmNsaWNrZWQgPSBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgICBcbiAgICAgIHRoaXMuY2FudmFzLmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZWRvd25cIiwgdGhpcywgKGV2ZW50LCByZXN1bHQpID0+IHtcbiAgICAgICAgaWYoIXRoaXMuZGlzYWJsZWQpIHtcbiAgICAgICAgICBjb25zdCBtb3VzZVBvc2l0aW9uID0gdGhpcy5nZXRNb3VzZVBvcyhldmVudCk7XG5cbiAgICAgICAgICBpZihyZXN1bHQpIHtcbiAgICAgICAgICAgIGlmKHRoaXMucmVhY3Rvcikge1xuICAgICAgICAgICAgICB0aGlzLnJlYWN0b3IuZGlzcGF0Y2hFdmVudChcIm9uRG93blwiLCBtb3VzZVBvc2l0aW9uKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIFxuICAgICAgICAgICAgdGhpcy5jbGlja2VkID0gdHJ1ZTtcbiAgICAgICAgICAgIHRoaXMubW92ZUV2ZW50U3RhcnRYID0gbW91c2VQb3NpdGlvbi54O1xuICAgICAgICAgICAgdGhpcy5tb3ZlRXZlbnRTdGFydFkgPSBtb3VzZVBvc2l0aW9uLnk7XG4gICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHRoaXMuaG92ZXJlZCA9IGZhbHNlO1xuICAgICAgICAgIHRoaXMuY2xpY2tlZCA9IGZhbHNlO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICAgIFxuICAgICAgdGhpcy5jYW52YXMuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNldXBcIiwgdGhpcywgKGV2ZW50KSA9PiB7XG4gICAgICAgIGlmKCF0aGlzLmRpc2FibGVkKSB7XG4gICAgICAgICAgY29uc3QgbW91c2VQb3NpdGlvbiA9IHRoaXMuZ2V0TW91c2VQb3MoZXZlbnQpO1xuXG4gICAgICAgICAgaWYodGhpcy5yZWFjdG9yKSB7XG4gICAgICAgICAgICB0aGlzLnJlYWN0b3IuZGlzcGF0Y2hFdmVudChcIm9uVXBcIiwgbW91c2VQb3NpdGlvbik7XG4gICAgICAgICAgfVxuICAgICAgICAgIFxuICAgICAgICAgIHRoaXMuY2xpY2tlZCA9IGZhbHNlO1xuICAgICAgICB9XG4gICAgICB9KTtcblxuICAgICAgdGhpcy5jYW52YXMuYWRkRXZlbnRMaXN0ZW5lcihcIndoZWVsXCIsIHRoaXMsIChldmVudCkgPT4ge1xuICAgICAgICBpZih0aGlzLmhvdmVyZWQgJiYgIXRoaXMuZGlzYWJsZWQgJiYgIXRoaXMuc2Nyb2xsRGlzYWJsZWQpIHtcbiAgICAgICAgICB0aGlzLm9mZnNldFNjcm9sbFggKz0gZXZlbnQuZGVsdGFYO1xuICAgICAgICAgIHRoaXMub2Zmc2V0U2Nyb2xsWSArPSBldmVudC5kZWx0YVk7XG5cbiAgICAgICAgICBpZih0aGlzLnJlYWN0b3IpIHtcbiAgICAgICAgICAgIHRoaXMucmVhY3Rvci5kaXNwYXRjaEV2ZW50KFwib25TY3JvbGxcIiwgZXZlbnQuZGVsdGFYLCBldmVudC5kZWx0YVkpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfSk7XG5cbiAgICAgIGNvbnN0IHRvdWNoU2Nyb2xsRXZlbnQgPSAoZXZlbnQpID0+IHtcbiAgICAgICAgY29uc3QgY2hhbmdlZFRvdWNoZXMgPSBldmVudC5jaGFuZ2VkVG91Y2hlc1swXTtcbiAgICAgICAgY29uc3QgcG9zaXRpb24gPSB0aGlzLmdldE1vdXNlUG9zKGNoYW5nZWRUb3VjaGVzKTtcblxuICAgICAgICBpZih0aGlzLmhvdmVyZWQgJiYgIXRoaXMuZGlzYWJsZWQgJiYgIXRoaXMuc2Nyb2xsRGlzYWJsZWQpIHtcbiAgICAgICAgICBjb25zdCBkZWx0YVggPSB0aGlzLnRvdWNoRXZlbnRTdGFydFggLSBwb3NpdGlvbi54O1xuICAgICAgICAgIGNvbnN0IGRlbHRhWSA9IHRoaXMudG91Y2hFdmVudFN0YXJ0WSAtIHBvc2l0aW9uLnk7XG5cbiAgICAgICAgICB0aGlzLm9mZnNldFNjcm9sbFggKz0gZGVsdGFYO1xuICAgICAgICAgIHRoaXMub2Zmc2V0U2Nyb2xsWSArPSBkZWx0YVk7XG5cbiAgICAgICAgICBpZih0aGlzLnJlYWN0b3IpIHtcbiAgICAgICAgICAgIHRoaXMucmVhY3Rvci5kaXNwYXRjaEV2ZW50KFwib25TY3JvbGxcIiwgZGVsdGFYLCBkZWx0YVksIHBvc2l0aW9uKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgXG4gICAgICAgICAgdGhpcy50b3VjaEV2ZW50U3RhcnRYID0gcG9zaXRpb24ueDtcbiAgICAgICAgICB0aGlzLnRvdWNoRXZlbnRTdGFydFkgPSBwb3NpdGlvbi55O1xuICAgICAgICB9XG4gICAgICB9O1xuXG4gICAgICBjb25zdCB0b3VjaFN0YXJ0RW5kRXZlbnQgPSAoZXZlbnQsIHJlc3VsdCkgPT4ge1xuICAgICAgICBjb25zdCBjaGFuZ2VkVG91Y2hlcyA9IGV2ZW50LmNoYW5nZWRUb3VjaGVzWzBdO1xuICAgICAgICBjb25zdCBwb3NpdGlvbiA9IHRoaXMuZ2V0TW91c2VQb3MoY2hhbmdlZFRvdWNoZXMpO1xuICAgICAgICBcbiAgICAgICAgaWYocmVzdWx0KSB7XG4gICAgICAgICAgdGhpcy5ob3ZlcmVkID0gdHJ1ZTtcbiAgICAgICAgICB0aGlzLnNlbGVjdGVkID0gdHJ1ZTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB0aGlzLmhvdmVyZWQgPSBmYWxzZTtcbiAgICAgICAgICB0aGlzLnNlbGVjdGVkID0gZmFsc2U7XG4gICAgICAgIH1cblxuICAgICAgICBpZih0aGlzLmhvdmVyZWQgJiYgIXRoaXMuZGlzYWJsZWQpIHtcbiAgICAgICAgICB0aGlzLnRvdWNoRXZlbnRTdGFydFggPSBwb3NpdGlvbi54O1xuICAgICAgICAgIHRoaXMudG91Y2hFdmVudFN0YXJ0WSA9IHBvc2l0aW9uLnk7XG4gICAgICAgICAgdGhpcy50b3VjaEV2ZW50U3RhcnRUaW1lc3RhbXAgPSBldmVudC50aW1lc3RhbXA7XG4gICAgICAgIH1cbiAgICAgIH07XG5cbiAgICAgIHRoaXMuY2FudmFzLmFkZEV2ZW50TGlzdGVuZXIoXCJ0b3VjaHN0YXJ0XCIsIHRoaXMsIHRvdWNoU3RhcnRFbmRFdmVudCk7XG4gICAgICB0aGlzLmNhbnZhcy5hZGRFdmVudExpc3RlbmVyKFwidG91Y2hlbmRcIiwgdGhpcywgdG91Y2hTdGFydEVuZEV2ZW50KTtcblxuICAgICAgdGhpcy5jYW52YXMuYWRkRXZlbnRMaXN0ZW5lcihcInRvdWNobW92ZVwiLCB0aGlzLCAoZXZlbnQpID0+IHtcbiAgICAgICAgdG91Y2hTY3JvbGxFdmVudChldmVudCk7XG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICB9KTtcblxuICAgICAgdGhpcy5oYXNJbml0RXZlbnRzID0gdHJ1ZTtcbiAgICB9XG4gIH1cblxuICBkcmF3KGNvbnRleHQpIHtcbiAgICBpZih0aGlzLmhpZGRlbikgcmV0dXJuO1xuICAgIHRoaXMuaW5pdEV2ZW50cygpO1xuXG4gICAgaWYodGhpcy5kaXNhYmxlZCkge1xuICAgICAgdGhpcy5zZWxlY3RlZCA9IGZhbHNlO1xuICAgICAgdGhpcy5jbGlja2VkID0gZmFsc2U7XG4gICAgICB0aGlzLmhvdmVyZWQgPSBmYWxzZTtcbiAgICAgIGlmKHRoaXMudG9vbHRpcCkgdGhpcy50b29sdGlwLmRpc2FibGVkID0gdHJ1ZTtcbiAgICB9IGVsc2UgaWYodGhpcy5tb3ZhYmxlICYmIHRoaXMuaG92ZXJlZCkge1xuICAgICAgdGhpcy5jYW52YXMuY3Vyc29yID0gXCJncmFiXCI7XG4gICAgfVxuICB9XG4gIFxuICBnZXRNb3VzZVBvcyhldmVudCkge1xuICAgIHJldHVybiB0aGlzLmNhbnZhcy5nZXRNb3VzZVBvcyhldmVudCk7XG4gIH1cbiAgXG4gIGlzSW5zaWRlKHBvcykge1xuICAgIHJldHVybiBwb3MueCA+IHRoaXMueCAmJiBwb3MueCA8IHRoaXMueCArIHRoaXMud2lkdGggJiYgcG9zLnkgPCB0aGlzLnkgKyB0aGlzLmhlaWdodCAmJiBwb3MueSA+IHRoaXMueTtcbiAgfVxuICBcbiAgZGlzYWJsZSgpIHtcbiAgICB0aGlzLmRpc2FibGVkID0gdHJ1ZTtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuICBcbiAgZW5hYmxlKCkge1xuICAgIHRoaXMuZGlzYWJsZWQgPSBmYWxzZTtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuXG4gIGdldCBkaXNhYmxlZCgpIHtcbiAgICByZXR1cm4gdGhpcy4jX2Rpc2FibGVkIHx8ICh0aGlzLnBhcmVudCAmJiB0aGlzLnBhcmVudC5kaXNhYmxlZCk7XG4gIH1cblxuICBzZXQgZGlzYWJsZWQoZGlzYWJsZWQpIHtcbiAgICBpZihkaXNhYmxlZCAhPSB0aGlzLiNfZGlzYWJsZWQpIHtcbiAgICAgIHRoaXMuI19kaXNhYmxlZCA9IGRpc2FibGVkO1xuICAgICAgdGhpcy5yZWFjdG9yICYmIHRoaXMucmVhY3Rvci5kaXNwYXRjaEV2ZW50KFwib25DaGFuZ2VcIiwgdGhpcyk7XG4gICAgfVxuICB9XG5cbiAgc2V0Q2xpY2tBY3Rpb24odHJpZ2dlcikge1xuICAgIHRoaXMucmVtb3ZlQWxsQ2xpY2tBY3Rpb25zKCk7XG4gICAgdGhpcy5hZGRDbGlja0FjdGlvbih0cmlnZ2VyKTtcbiAgfVxuICBcbiAgYWRkQ2xpY2tBY3Rpb24odHJpZ2dlcikge1xuICAgIHRoaXMucmVhY3Rvci5hZGRFdmVudExpc3RlbmVyKFwib25DbGlja1wiLCB0cmlnZ2VyKTtcbiAgfVxuICBcbiAgcmVtb3ZlQ2xpY2tBY3Rpb24odHJpZ2dlcikge1xuICAgIHRoaXMucmVhY3Rvci5yZW1vdmVFdmVudExpc3RlbmVyKFwib25DbGlja1wiLCB0cmlnZ2VyKTtcbiAgfVxuXG4gIHJlbW92ZUFsbENsaWNrQWN0aW9ucygpIHtcbiAgICB0aGlzLnJlYWN0b3IucmVtb3ZlQWxsRXZlbnRMaXN0ZW5lcihcIm9uQ2xpY2tcIik7XG4gIH1cblxuICBzZXRIb3ZlckFjdGlvbih0cmlnZ2VyKSB7XG4gICAgdGhpcy5yZW1vdmVBbGxIb3ZlckFjdGlvbnMoKTtcbiAgICB0aGlzLmFkZEhvdmVyQWN0aW9uKHRyaWdnZXIpO1xuICB9XG4gIFxuICBhZGRIb3ZlckFjdGlvbih0cmlnZ2VyKSB7XG4gICAgdGhpcy5yZWFjdG9yLmFkZEV2ZW50TGlzdGVuZXIoXCJvbkhvdmVyXCIsIHRyaWdnZXIpO1xuICB9XG4gIFxuICByZW1vdmVIb3ZlckFjdGlvbih0cmlnZ2VyKSB7XG4gICAgdGhpcy5yZWFjdG9yLnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJvbkhvdmVyXCIsIHRyaWdnZXIpO1xuICB9XG5cbiAgcmVtb3ZlQWxsSG92ZXJBY3Rpb25zKCkge1xuICAgIHRoaXMucmVhY3Rvci5yZW1vdmVBbGxFdmVudExpc3RlbmVyKFwib25Ib3ZlclwiKTtcbiAgfVxuXG4gIHNldERvd25BY3Rpb24odHJpZ2dlcikge1xuICAgIHRoaXMucmVtb3ZlQWxsRG93bkFjdGlvbnMoKTtcbiAgICB0aGlzLmFkZERvd25BY3Rpb24odHJpZ2dlcik7XG4gIH1cbiAgXG4gIGFkZERvd25BY3Rpb24odHJpZ2dlcikge1xuICAgIHRoaXMucmVhY3Rvci5hZGRFdmVudExpc3RlbmVyKFwib25Eb3duXCIsIHRyaWdnZXIpO1xuICB9XG4gIFxuICByZW1vdmVEb3duQWN0aW9uKHRyaWdnZXIpIHtcbiAgICB0aGlzLnJlYWN0b3IucmVtb3ZlRXZlbnRMaXN0ZW5lcihcIm9uRG93blwiLCB0cmlnZ2VyKTtcbiAgfVxuXG4gIHJlbW92ZUFsbERvd25BY3Rpb25zKCkge1xuICAgIHRoaXMucmVhY3Rvci5yZW1vdmVBbGxFdmVudExpc3RlbmVyKFwib25Eb3duXCIpO1xuICB9XG5cbiAgc2V0U2Nyb2xsQWN0aW9uKHRyaWdnZXIpIHtcbiAgICB0aGlzLnJlbW92ZUFsbFNjcm9sbEFjdGlvbnMoKTtcbiAgICB0aGlzLmFkZFNjcm9sbEFjdGlvbih0cmlnZ2VyKTtcbiAgfVxuICBcbiAgYWRkU2Nyb2xsQWN0aW9uKHRyaWdnZXIpIHtcbiAgICB0aGlzLnJlYWN0b3IuYWRkRXZlbnRMaXN0ZW5lcihcIm9uU2Nyb2xsXCIsIHRyaWdnZXIpO1xuICB9XG4gIFxuICByZW1vdmVTY3JvbGxBY3Rpb24odHJpZ2dlcikge1xuICAgIHRoaXMucmVhY3Rvci5yZW1vdmVFdmVudExpc3RlbmVyKFwib25TY3JvbGxcIiwgdHJpZ2dlcik7XG4gIH1cblxuICByZW1vdmVBbGxTY3JvbGxBY3Rpb25zKCkge1xuICAgIHRoaXMucmVhY3Rvci5yZW1vdmVBbGxFdmVudExpc3RlbmVyKFwib25TY3JvbGxcIik7XG4gIH1cblxuICBzZXRNb3ZlQWN0aW9uKHRyaWdnZXIpIHtcbiAgICB0aGlzLnJlbW92ZUFsbE1vdmVBY3Rpb25zKCk7XG4gICAgdGhpcy5hZGRNb3ZlQWN0aW9uKHRyaWdnZXIpO1xuICB9XG4gIFxuICBhZGRNb3ZlQWN0aW9uKHRyaWdnZXIpIHtcbiAgICB0aGlzLnJlYWN0b3IuYWRkRXZlbnRMaXN0ZW5lcihcIm9uTW92ZVwiLCB0cmlnZ2VyKTtcbiAgfVxuICBcbiAgcmVtb3ZlTW92ZUFjdGlvbih0cmlnZ2VyKSB7XG4gICAgdGhpcy5yZWFjdG9yLnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJvbk1vdmVcIiwgdHJpZ2dlcik7XG4gIH1cblxuICByZW1vdmVBbGxNb3ZlQWN0aW9ucygpIHtcbiAgICB0aGlzLnJlYWN0b3IucmVtb3ZlQWxsRXZlbnRMaXN0ZW5lcihcIm9uTW92ZVwiKTtcbiAgfVxuICBcbiAgc2V0Q2hhbmdlQWN0aW9uKHRyaWdnZXIpIHtcbiAgICB0aGlzLnJlbW92ZUFsbENoYW5nZUFjdGlvbnMoKTtcbiAgICB0aGlzLmFkZENoYW5nZUFjdGlvbih0cmlnZ2VyKTtcbiAgfVxuICBcbiAgYWRkQ2hhbmdlQWN0aW9uKHRyaWdnZXIpIHtcbiAgICB0aGlzLnJlYWN0b3IuYWRkRXZlbnRMaXN0ZW5lcihcIm9uQ2hhbmdlXCIsIHRyaWdnZXIpO1xuICB9XG4gIFxuICByZW1vdmVDaGFuZ2VBY3Rpb24odHJpZ2dlcikge1xuICAgIHRoaXMucmVhY3Rvci5yZW1vdmVFdmVudExpc3RlbmVyKFwib25DaGFuZ2VcIiwgdHJpZ2dlcik7XG4gIH1cblxuICByZW1vdmVBbGxDaGFuZ2VBY3Rpb25zKCkge1xuICAgIHRoaXMucmVhY3Rvci5yZW1vdmVBbGxFdmVudExpc3RlbmVyKFwib25DaGFuZ2VcIik7XG4gIH1cblxuICBzZXRVcEFjdGlvbih0cmlnZ2VyKSB7XG4gICAgdGhpcy5yZW1vdmVBbGxVcEFjdGlvbnMoKTtcbiAgICB0aGlzLmFkZFVwQWN0aW9uKHRyaWdnZXIpO1xuICB9XG4gIFxuICBhZGRVcEFjdGlvbih0cmlnZ2VyKSB7XG4gICAgdGhpcy5yZWFjdG9yLmFkZEV2ZW50TGlzdGVuZXIoXCJvblVwXCIsIHRyaWdnZXIpO1xuICB9XG4gIFxuICByZW1vdmVVcEFjdGlvbih0cmlnZ2VyKSB7XG4gICAgdGhpcy5yZWFjdG9yLnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJvblVwXCIsIHRyaWdnZXIpO1xuICB9XG5cbiAgcmVtb3ZlQWxsVXBBY3Rpb25zKCkge1xuICAgIHRoaXMucmVhY3Rvci5yZW1vdmVBbGxFdmVudExpc3RlbmVyKFwib25VcFwiKTtcbiAgfVxuXG4gIGdldCBoZWlnaHQoKSB7XG4gICAgcmV0dXJuIHRoaXMuI19oZWlnaHQ7XG4gIH1cblxuICBnZXQgd2lkdGgoKSB7XG4gICAgcmV0dXJuIHRoaXMuI193aWR0aDtcbiAgfVxuXG4gIHNldCB3aWR0aCh3aWR0aCkge1xuICAgIGlmKHdpZHRoICE9IHRoaXMuI193aWR0aCkge1xuICAgICAgdGhpcy4jX3dpZHRoID0gd2lkdGg7XG4gICAgICB0aGlzLnJlYWN0b3IgJiYgdGhpcy5yZWFjdG9yLmRpc3BhdGNoRXZlbnQoXCJvbkNoYW5nZVwiLCB0aGlzKTtcbiAgICB9XG4gIH1cblxuICBzZXQgaGVpZ2h0KGhlaWdodCkge1xuICAgIGlmKGhlaWdodCAhPSB0aGlzLiNfaGVpZ2h0KSB7XG4gICAgICB0aGlzLiNfaGVpZ2h0ID0gaGVpZ2h0O1xuICAgICAgdGhpcy5yZWFjdG9yICYmIHRoaXMucmVhY3Rvci5kaXNwYXRjaEV2ZW50KFwib25DaGFuZ2VcIiwgdGhpcyk7XG4gICAgfVxuICB9XG5cbiAgZ2V0IG1heFdpZHRoKCkge1xuICAgIHJldHVybiB0aGlzLndpZHRoO1xuICB9XG5cbiAgZ2V0IG1heEhlaWdodCgpIHtcbiAgICByZXR1cm4gdGhpcy5oZWlnaHQ7XG4gIH1cblxuICBnZXQgaW5uZXJXaWR0aCgpIHtcbiAgICByZXR1cm4gdGhpcy53aWR0aDtcbiAgfVxuXG4gIGdldCBpbm5lckhlaWdodCgpIHtcbiAgICByZXR1cm4gdGhpcy5oZWlnaHQ7XG4gIH1cblxuICBnZXQgbWluV2lkdGgoKSB7XG4gICAgcmV0dXJuIHRoaXMud2lkdGg7XG4gIH1cblxuICBnZXQgbWluSGVpZ2h0KCkge1xuICAgIHJldHVybiB0aGlzLmhlaWdodDtcbiAgfVxuXG4gIGdldCB4KCkge1xuICAgIGNvbnN0IHBhcmVudCA9IHRoaXMucGFyZW50IHx8IHRoaXMuY2FudmFzO1xuXG4gICAgaWYodGhpcy5zdHlsZS5hbGlnbmVtZW50ICYmIHBhcmVudCkge1xuICAgICAgY29uc3QgcGFyZW50V2lkdGggPSBwYXJlbnQud2lkdGg7XG4gICAgICBjb25zdCBwYXJlbnRQYWRkaW5nID0gKHBhcmVudC5zdHlsZSAmJiBwYXJlbnQuc3R5bGUucGFkZGluZykgfHwgMDtcblxuICAgICAgaWYodGhpcy5zdHlsZS5hbGlnbmVtZW50ID09IENvbnN0YW50cy5BbGlnbmVtZW50LkNFTlRFUikge1xuICAgICAgICByZXR1cm4gcGFyZW50LnggKyAocGFyZW50V2lkdGggLyAyKSAtICh0aGlzLndpZHRoIC8gMikgKyB0aGlzLmRlbHRhWDtcbiAgICAgIH0gZWxzZSBpZih0aGlzLnN0eWxlLmFsaWduZW1lbnQgPT0gQ29uc3RhbnRzLkFsaWduZW1lbnQuUklHSFQpIHtcbiAgICAgICAgcmV0dXJuIHBhcmVudC54ICsgKHBhcmVudFdpZHRoKSAtICh0aGlzLndpZHRoKSAtIHBhcmVudFBhZGRpbmcgKyB0aGlzLmRlbHRhWDtcbiAgICAgIH0gZWxzZSBpZih0aGlzLnN0eWxlLmFsaWduZW1lbnQgPT0gQ29uc3RhbnRzLkFsaWduZW1lbnQuTEVGVCkge1xuICAgICAgICByZXR1cm4gcGFyZW50LnggKyBwYXJlbnRQYWRkaW5nICsgdGhpcy5kZWx0YVg7XG4gICAgICB9XG4gICAgfSBlbHNlIGlmKHBhcmVudCkge1xuICAgICAgcmV0dXJuIHBhcmVudC54ICsgdGhpcy4jX3ggKyB0aGlzLmRlbHRhWDtcbiAgICB9XG4gICAgXG4gICAgcmV0dXJuIHRoaXMuI194ICsgdGhpcy5kZWx0YVg7XG4gIH1cblxuICBzZXQgeCh4KSB7XG4gICAgdGhpcy4jX3ggPSB4O1xuICAgIHRoaXMucmVhY3RvciAmJiB0aGlzLnJlYWN0b3IuZGlzcGF0Y2hFdmVudChcIm9uQ2hhbmdlXCIsIHRoaXMpO1xuICB9XG5cbiAgZ2V0IHkoKSB7XG4gICAgY29uc3QgcGFyZW50ID0gdGhpcy5wYXJlbnQgfHwgdGhpcy5jYW52YXM7XG5cbiAgICBpZih0aGlzLnN0eWxlLnZlcnRpY2FsQWxpZ25lbWVudCAmJiBwYXJlbnQpIHtcbiAgICAgIGNvbnN0IHBhcmVudEhlaWdodCA9IHBhcmVudC5oZWlnaHQ7XG4gICAgICBjb25zdCBwYXJlbnRQYWRkaW5nID0gKHBhcmVudC5zdHlsZSAmJiBwYXJlbnQuc3R5bGUucGFkZGluZykgfHwgMDtcblxuICAgICAgaWYodGhpcy5zdHlsZS52ZXJ0aWNhbEFsaWduZW1lbnQgPT0gQ29uc3RhbnRzLlZlcnRpY2FsQWxpZ25lbWVudC5CT1RUT00pIHtcbiAgICAgICAgcmV0dXJuIHBhcmVudC55ICsgKHBhcmVudEhlaWdodCkgLSAodGhpcy5oZWlnaHQpIC0gcGFyZW50UGFkZGluZyArIHRoaXMuZGVsdGFZO1xuICAgICAgfSBlbHNlIGlmKHRoaXMuc3R5bGUudmVydGljYWxBbGlnbmVtZW50ID09IENvbnN0YW50cy5WZXJ0aWNhbEFsaWduZW1lbnQuQ0VOVEVSKSB7XG4gICAgICAgIHJldHVybiBwYXJlbnQueSArIChwYXJlbnRIZWlnaHQgLyAyKSAtICh0aGlzLmhlaWdodCAvIDIpICsgdGhpcy5kZWx0YVk7XG4gICAgICB9IGVsc2UgaWYodGhpcy5zdHlsZS52ZXJ0aWNhbEFsaWduZW1lbnQgPT0gQ29uc3RhbnRzLlZlcnRpY2FsQWxpZ25lbWVudC5UT1ApIHtcbiAgICAgICAgcmV0dXJuIHBhcmVudC55ICsgcGFyZW50UGFkZGluZyArIHRoaXMuZGVsdGFZO1xuICAgICAgfVxuICAgIH0gZWxzZSBpZihwYXJlbnQpIHtcbiAgICAgIHJldHVybiBwYXJlbnQueSArIHRoaXMuI195ICsgdGhpcy5kZWx0YVk7XG4gICAgfVxuICAgIFxuICAgIHJldHVybiB0aGlzLiNfeSArIHRoaXMuZGVsdGFZO1xuICB9XG5cbiAgc2V0IHkoeSkge1xuICAgIHRoaXMuI195ID0geTtcbiAgICB0aGlzLnJlYWN0b3IgJiYgdGhpcy5yZWFjdG9yLmRpc3BhdGNoRXZlbnQoXCJvbkNoYW5nZVwiLCB0aGlzKTtcbiAgfVxuXG4gIGdldCBkZWZhdWx0U3R5bGUoKSB7XG4gICAgcmV0dXJuIG5ldyBTdHlsZSh7XG4gICAgICBcInBhZGRpbmdcIjogQ29uc3RhbnRzLlNldHRpbmcuREVGQVVMVF9QQURESU5HLFxuICAgICAgXCJzcGFjZUJldHdlZW5Db21wb25lbnRzXCI6IENvbnN0YW50cy5TZXR0aW5nLkRFRkFVTFRfU1BBQ0lOR1xuICAgIH0pO1xuICB9XG5cbiAgZ2V0IHN0eWxlKCkge1xuICAgIHJldHVybiB0aGlzLiNfc3R5bGUgfHwgdGhpcy5kZWZhdWx0U3R5bGU7XG4gIH1cblxuICBzZXQgc3R5bGUoc3R5bGUpIHtcbiAgICB0aGlzLiNfc3R5bGUgPSBuZXcgU3R5bGUoKTtcbiAgICB0aGlzLiNfc3R5bGUuc2V0QWxsKHRoaXMuZGVmYXVsdFN0eWxlLmdldFN0eWxlcygpKTtcblxuICAgIGlmKHN0eWxlICYmIHN0eWxlIGluc3RhbmNlb2YgU3R5bGUpIHtcbiAgICAgIHRoaXMuI19zdHlsZS5zZXRBbGwoc3R5bGUuZ2V0U3R5bGVzKCkpO1xuICAgIH1cblxuICAgIHRoaXMuI19zdHlsZS5jb21wb25lbnQgPSB0aGlzO1xuICAgIHRoaXMucmVhY3RvciAmJiB0aGlzLnJlYWN0b3IuZGlzcGF0Y2hFdmVudChcIm9uQ2hhbmdlXCIsIHRoaXMpO1xuICB9XG5cbiAgZ2V0IGhpZGRlbigpIHtcbiAgICByZXR1cm4gKHRoaXMuc3R5bGUgJiYgdGhpcy5zdHlsZS5oaWRkZW4pIHx8ICh0aGlzLnBhcmVudCAmJiB0aGlzLnBhcmVudC5oaWRkZW4pO1xuICB9XG5cbiAgc2V0IGhpZGRlbihoaWRkZW4pIHtcbiAgICBpZihoaWRkZW4gIT0gdGhpcy5kaXNhYmxlZCB8fCBoaWRkZW4gIT0gdGhpcy5zdHlsZS5oaWRkZW4pIHtcbiAgICAgIHRoaXMuZGlzYWJsZWQgPSBoaWRkZW47XG4gICAgICBpZih0aGlzLnN0eWxlKSB0aGlzLnN0eWxlLnNldChcImhpZGRlblwiLCBoaWRkZW4pO1xuICAgICAgdGhpcy5yZWFjdG9yICYmIHRoaXMucmVhY3Rvci5kaXNwYXRjaEV2ZW50KFwib25DaGFuZ2VcIiwgdGhpcyk7XG4gICAgfVxuICB9XG5cbiAgZ2V0IHNlbGVjdGVkKCkge1xuICAgIHJldHVybiB0aGlzLiNfc2VsZWN0ZWQ7XG4gIH1cblxuICBzZXQgc2VsZWN0ZWQoc2VsZWN0ZWQpIHtcbiAgICBpZihzZWxlY3RlZCAhPSB0aGlzLiNfc2VsZWN0ZWQpIHtcbiAgICAgIHRoaXMuI19zZWxlY3RlZCA9IHNlbGVjdGVkO1xuICAgICAgdGhpcy5yZWFjdG9yICYmIHRoaXMucmVhY3Rvci5kaXNwYXRjaEV2ZW50KFwib25DaGFuZ2VcIiwgdGhpcyk7XG4gICAgfVxuICB9XG5cbiAgZ2V0QWxsUGFyZW50cygpIHtcbiAgICBsZXQgcGFyZW50ID0gdGhpcy5wYXJlbnQ7XG4gICAgbGV0IHJlcyA9IFtdO1xuXG4gICAgd2hpbGUocGFyZW50KSB7XG4gICAgICByZXMucHVzaChwYXJlbnQpO1xuICAgICAgcGFyZW50ID0gcGFyZW50LnBhcmVudDtcbiAgICB9XG5cbiAgICByZXR1cm4gcmVzO1xuICB9XG5cbiAgc3RhdGljIGNvbXBhcmVDb21wb25lbnRzKGNvbXBvbmVudCwgb3RoZXIpIHtcbiAgICByZXR1cm4gY29tcG9uZW50LmNvbXBhcmVUbyhvdGhlcik7XG4gIH1cblxuICBjb21wYXJlVG8ob3RoZXJDb21wb25lbnQpIHtcbiAgICBjb25zdCBpc0ZvcmVncm91bmQgPSB0aGlzLnN0eWxlICYmIHRoaXMuc3R5bGUuZm9yZWdyb3VuZDtcbiAgICBjb25zdCBvdGhlcklzRm9yZWdyb3VuZCA9IG90aGVyQ29tcG9uZW50LnN0eWxlICYmIG90aGVyQ29tcG9uZW50LnN0eWxlLmZvcmVncm91bmQ7XG4gICAgY29uc3QgekluZGV4ID0gdGhpcy5zdHlsZSAmJiB0aGlzLnN0eWxlLnpJbmRleDtcbiAgICBjb25zdCBvdGhlcnpJbmRleCA9IG90aGVyQ29tcG9uZW50LnN0eWxlICYmIG90aGVyQ29tcG9uZW50LnN0eWxlLnpJbmRleDtcblxuICAgIGlmKHRoaXMucGFyZW50ID09IG90aGVyQ29tcG9uZW50KSB7XG4gICAgICByZXR1cm4gMTtcbiAgICB9IGVsc2UgaWYob3RoZXJDb21wb25lbnQucGFyZW50ID09IHRoaXMpIHtcbiAgICAgIHJldHVybiAtMTtcbiAgICB9IGVsc2UgaWYoaXNGb3JlZ3JvdW5kICYmICFvdGhlcklzRm9yZWdyb3VuZCkge1xuICAgICAgcmV0dXJuIDFcbiAgICB9IGVsc2UgaWYoIWlzRm9yZWdyb3VuZCAmJiBvdGhlcklzRm9yZWdyb3VuZCkge1xuICAgICAgcmV0dXJuIC0xO1xuICAgIH0gZWxzZSBpZih6SW5kZXggPiBvdGhlcnpJbmRleCkge1xuICAgICAgcmV0dXJuIDE7XG4gICAgfSBlbHNlIGlmKHpJbmRleCA8IG90aGVyekluZGV4KSB7XG4gICAgICByZXR1cm4gLTE7XG4gICAgfVxuXG4gICAgcmV0dXJuIG90aGVyQ29tcG9uZW50LmNvbXBhcmVUb0NvbXBvbmVudCh0aGlzKSB8fCAtdGhpcy5jb21wYXJlVG9Db21wb25lbnQob3RoZXJDb21wb25lbnQpO1xuICB9XG5cbiAgY29tcGFyZVRvQ29tcG9uZW50KG90aGVyQ29tcG9uZW50KSB7XG4gICAgcmV0dXJuIDA7XG4gIH1cblxuICBjb21wYXJlVG9NZW51KG90aGVyQ29tcG9uZW50KSB7XG4gICAgcmV0dXJuIC0xO1xuICB9XG5cbiAgY29tcGFyZVRvVG9vbHRpcChvdGhlckNvbXBvbmVudCkge1xuICAgIHJldHVybiAtMTtcbiAgfVxuXG4gIGNvbXBhcmVUb05vdGlmaWNhdGlvbihvdGhlckNvbXBvbmVudCkge1xuICAgIHJldHVybiAtMTtcbiAgfVxuXG4gIGNvbXBhcmVUb1Njcm9sbGJhcihvdGhlckNvbXBvbmVudCkge1xuICAgIHJldHVybiAtMTtcbiAgfVxufSIsIi8qXG4gKiBDb3B5cmlnaHQgKEMpIDIwMjAgRWxpYXN0aWsgKGVsaWFzdGlrc29mdHMuY29tKVxuICpcbiAqIFRoaXMgZmlsZSBpcyBwYXJ0IG9mIFwiSlNHYW1lVG9vbHNcIi5cbiAqXG4gKiBcIkpTR2FtZVRvb2xzXCIgaXMgZnJlZSBzb2Z0d2FyZTogeW91IGNhbiByZWRpc3RyaWJ1dGUgaXQgYW5kL29yIG1vZGlmeVxuICogaXQgdW5kZXIgdGhlIHRlcm1zIG9mIHRoZSBHTlUgR2VuZXJhbCBQdWJsaWMgTGljZW5zZSBhcyBwdWJsaXNoZWQgYnlcbiAqIHRoZSBGcmVlIFNvZnR3YXJlIEZvdW5kYXRpb24sIGVpdGhlciB2ZXJzaW9uIDMgb2YgdGhlIExpY2Vuc2UsIG9yXG4gKiAoYXQgeW91ciBvcHRpb24pIGFueSBsYXRlciB2ZXJzaW9uLlxuICpcbiAqIFwiSlNHYW1lVG9vbHNcIiBpcyBkaXN0cmlidXRlZCBpbiB0aGUgaG9wZSB0aGF0IGl0IHdpbGwgYmUgdXNlZnVsLFxuICogYnV0IFdJVEhPVVQgQU5ZIFdBUlJBTlRZOyB3aXRob3V0IGV2ZW4gdGhlIGltcGxpZWQgd2FycmFudHkgb2ZcbiAqIE1FUkNIQU5UQUJJTElUWSBvciBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRS4gIFNlZSB0aGVcbiAqIEdOVSBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlIGZvciBtb3JlIGRldGFpbHMuXG4gKlxuICogWW91IHNob3VsZCBoYXZlIHJlY2VpdmVkIGEgY29weSBvZiB0aGUgR05VIEdlbmVyYWwgUHVibGljIExpY2Vuc2VcbiAqIGFsb25nIHdpdGggXCJKU0dhbWVUb29sc1wiLiAgSWYgbm90LCBzZWUgPGh0dHA6Ly93d3cuZ251Lm9yZy9saWNlbnNlcy8+LlxuICovXG5leHBvcnQgZGVmYXVsdCB7XG4gIFNldHRpbmc6IHtcbiAgICBESVNBQkxFX09QVElNSVpBVElPTlM6IGZhbHNlLCAvLyB0cnVlIHRvIGRpc2FibGUgb3B0aW1pemF0aW9ucywgY2FuIGZpeCBzb21lIHByb2JsZW1zLCBkaXNhYmxpbmcgb3B0aW1pemF0aW9uIHJlZHVjZXMgcGVyZm9ybWFuY2VcbiAgICBESVNBQkxFX0VYUEVSSU1FTlRBTF9PUFRJTUlaQVRJT05TOiBmYWxzZSwgLy8gdHJ1ZSB0byBkaXNhYmxlIG9wdGltaXphdGlvbnMgdGhhdCBhcmUgY29uc2lkZXJlZCBleHBlcmltZW50YWxcbiAgICBESVNBQkxFX0lTX0NPTVBPTkVOVF9WSVNJQkxFX09QVElNSVpBVElPTlM6IHRydWUsIC8vIHRydWUgdG8gZGlzYWJsZSBvcHRpbWl6YXRpb25zIG9mIHRoZSBDb250YWluZXIuaXNDb21wb25lbnRWaXNpYmxlIG1ldGhvZFxuICAgIERJU0FCTEVfQ09OVEFJTkVSU19DVVRUSU5HOiBmYWxzZSwgLy8gZGlzYWJsaW5nIGNvbnRhaW5lcnMgY3V0dGluZyBhbGxvdyB0byB2aWV3IHRoZSBjb21wb25lbnRzIG9mIGEgY29udGFpbmVyIHRoYXQgYXJlIG5vdCB0b3RhbGx5IHZpc2libGUsIHlvdSBjYW4gYWxzbyBkaXNhYmxlIG9wdGltaXphdGlvbnMgdG8gZGlzcGxheXMgZWxlbWVudHMgdGhhdCBhcmUgbm90IGRyYXduIGZvciBvcHRpbWl6YXRpb24gcHVycG9zZXNcbiAgICBFTkFCTEVfUElYRUxfUkFUSU9fUkVTSVpJTkc6IHRydWUsIC8vIGVuYWJsaW5nIHRoaXMgYWxsb3cgcmVzaXppbmcgdGhlIGNhbnZhcyB0byBtYXRjaCB0aGUgc2NyZWVuIHBpeGVsIHJhdGlvXG4gICAgUElYRUxfUkFUSU86IDEsIC8vIHRoZSBjdXJyZW50IHBpeGVsIHJhdGlvLCBhdXRvbWF0aWNhbGx5IHVwZGF0ZWRcbiAgICBSRVNPTFVUSU9OX1NDQUxFOiAxLCAvLyB0aGUgcmVzb2x1dGlvbiBzY2FsZVxuICAgIEZPTlRfRkFNSUxZOiBcInNhbnMtc2VyaWZcIixcbiAgICBGT05UX1NJWkU6IDI4LFxuICAgIENBTlZBU19XSURUSDogNjAwLFxuICAgIENBTlZBU19IRUlHSFQ6IDQwMCxcbiAgICBERUZBVUxUX1BBRERJTkc6IDYsXG4gICAgREVGQVVMVF9TUEFDSU5HOiA2LFxuICAgIEJVVFRPTl9ERUZBVUxUX0JBQ0tHUk9VTkQ6IFwicmdiYSgwLCAwLCAwLCAwKVwiLFxuICAgIEJVVFRPTl9ERUZBVUxUX0hPVkVSX0JBQ0tHUk9VTkQ6IFwiIzk1QTVBNlwiLFxuICAgIEJVVFRPTl9ERUZBVUxUX0NMSUNLX0JBQ0tHUk9VTkQ6IFwiIzcyN0Y4MFwiLFxuICAgIEJVVFRPTl9ERUZBVUxUX0FMVEVSTkFUSVZFX0JBQ0tHUk9VTkQ6IFwiI0FDQkVCRlwiLFxuICAgIElOUFVUX0RFRkFVTFRfRk9OVF9DT0xPUjogXCIjMDAwXCIsXG4gICAgSU5QVVRfREVGQVVMVF9CQUNLR1JPVU5EX0NPTE9SOiBcIiNmZmZcIixcbiAgICBJTlBVVF9ERUZBVUxUX0JPUkRFUl9DT0xPUjogXCIjMDAwXCIsXG4gICAgSU5QVVRfREVGQVVMVF9CT1JERVJfQ09MT1JfU0VMRUNURUQ6IFwiI2EyY2RkOFwiLFxuICAgIElOUFVUX0RFRkFVTFRfU0VMRUNUX0NPTE9SOiBcIiMyOTgwYjlcIixcbiAgICBMQUJFTF9ERUZBVUxUX0ZPTlRfQ09MT1I6IFwiIzAwMFwiLFxuICAgIExJTktfREVGQVVMVF9DT0xPUjogXCIjMDAwMEVFXCIsXG4gICAgTElOS19ERUZBVUxUX0hPVkVSX0NPTE9SOiBcIiM0RDRERkZcIixcbiAgICBMSU5LX0RFRkFVTFRfQ0xJQ0tfQ09MT1I6IFwiI0VFNzcwMFwiLFxuICAgIE1FTlVfREVGQVVMVF9CQUNLR1JPVU5EOiBcInJnYmEoNDQsIDYyLCA4MCwgMC43NSlcIixcbiAgICBNRU5VX0RFRkFVTFRfQkxVUl9CQUNLR1JPVU5EOiBmYWxzZSxcbiAgICBOT1RJRklDQVRJT05fREVGQVVMVF9CQUNLR1JPVU5EOiBcInJnYmEoNDYsIDIwNCwgMTEzLCAwLjUpXCIsXG4gICAgTk9USUZJQ0FUSU9OX0RFRkFVTFRfQU5JTUFUSU9OX0RVUkFUSU9OOiA1MDAsIC8vIG1zXG4gICAgUFJPR1JFU1NfREVGQVVMVF9CQUNLR1JPVU5EOiBcIiNiZGMzYzdcIixcbiAgICBQUk9HUkVTU19ERUZBVUxUX0ZPUkVHUk9VTkQ6IFwiIzI3YWU2MFwiLFxuICAgIFBST0dSRVNTX0RFRkFVTFRfQU5JTUFUSU9OX0RVUkFUSU9OOiAyMDAwLCAvLyBtc1xuICAgIFRPT0xUSVBfREVGQVVMVF9CQUNLR1JPVU5EOiBcInJnYmEoMjU1LCAyNTUsIDI1NSwgMC4yNSlcIixcbiAgICBBUlJPV19ERUZBVUxUX0xJTkVfQ0FQOiBcInJvdW5kXCIsXG4gICAgQVJST1dfREVGQVVMVF9DT0xPUjogXCIjRkYwMDAwXCIsXG4gICAgQVJST1dfREVGQVVMVF9MSU5FX1NJWkU6IDgsXG4gICAgQVJST1dfREVGQVVMVF9IRUFEX1NJWkU6IDIwLFxuICAgIENST1NTX0RFRkFVTFRfTElORV9DQVA6IFwicm91bmRcIixcbiAgICBDUk9TU19ERUZBVUxUX0NPTE9SOiBcIiNmZmZcIixcbiAgICBDUk9TU19ERUZBVUxUX0xJTkVfU0laRTogMyxcbiAgICBTQ1JPTExCQVJfREVGQVVMVF9CQUNLR1JPVU5EOiBcInJnYmEoMTQ5LCAxNjUsIDE2NiwgMC43NSlcIixcbiAgICBTQ1JPTExCQVJfREVGQVVMVF9IT1ZFUl9CQUNLR1JPVU5EOiBcInJnYmEoMTQ5LCAxNjUsIDE2NiwgMC45KVwiLFxuICAgIFNDUk9MTEJBUl9ERUZBVUxUX0NMSUNLX0JBQ0tHUk9VTkQ6IFwicmdiYSgxNDksIDE2NSwgMTY2LCAwLjUpXCIsXG4gICAgU0NST0xMQkFSX0RFRkFVTFRfU0laRTogMTAsXG4gICAgREVGQVVMVF9CT1JERVJfU0laRTogMyxcbiAgICBERUZBVUxUX0JPUkRFUl9DT0xPUl9TRUxFQ1RFRDogXCIjYTJjZGQ4XCIsXG4gICAgREVGQVVMVF9BTklNQVRJT05fRFVSQVRJT046IDIwMDAsIC8vIG1zXG4gICAgVFJJQU5HTEVfREVGQVVMVF9MSU5FX0NBUDogXCJyb3VuZFwiLFxuICAgIFRSSUFOR0xFX0RFRkFVTFRfQ09MT1I6IFwiIzAwMFwiLFxuICAgIFRSSUFOR0xFX0RFRkFVTFRfRklMTF9DT0xPUjogXCIjMDAwXCIsXG4gICAgVFJJQU5HTEVfREVGQVVMVF9MSU5FX1NJWkU6IDMsXG4gICAgVFJJQU5HTEVfREVGQVVMVF9GSUxMOiB0cnVlLFxuICAgIFNFTEVDVF9ERUZBVUxUX0JBQ0tHUk9VTkQ6IFwiI2VjZjBmMVwiLFxuICAgIFNFTEVDVF9ERUZBVUxUX0hPVkVSX0JBQ0tHUk9VTkQ6IFwiI2JkYzNjN1wiLFxuICAgIFNFTEVDVF9ERUZBVUxUX0NMSUNLX0JBQ0tHUk9VTkQ6IFwiI2FkYjJiNVwiLFxuICAgIENJUkNMRV9ERUZBVUxUX0xJTkVfQ0FQOiBcInJvdW5kXCIsXG4gICAgQ0lSQ0xFX0RFRkFVTFRfQ09MT1I6IFwiI2ZmZlwiLFxuICAgIENJUkNMRV9ERUZBVUxUX0ZJTExfQ09MT1I6IFwiIzAwMFwiLFxuICAgIENJUkNMRV9ERUZBVUxUX0xJTkVfU0laRTogMyxcbiAgICBDSVJDTEVfREVGQVVMVF9GSUxMOiB0cnVlLFxuICAgIEVSUk9SX01FTlVfQkFDS0dST1VORF9DT0xPUjogXCIjMzQ5OGRiXCJcbiAgfSxcbiAgS2V5OiB7XG4gICAgVVA6IDM4LFxuICAgIFJJR0hUOiAzOSxcbiAgICBCT1RUT006IDQwLFxuICAgIExFRlQ6IDM3LFxuICAgIEVOVEVSOiAxMyxcbiAgICBFQ0hBUDogMjcsXG4gICAgVEFCOiA5XG4gIH0sXG4gIEFsaWduZW1lbnQ6IHtcbiAgICBSSUdIVDogXCJyaWdodFwiLFxuICAgIExFRlQ6IFwibGVmdFwiLFxuICAgIENFTlRFUjogXCJjZW50ZXJcIixcbiAgICBERUZBVUxUOiBcImRlZmF1bHRcIlxuICB9LFxuICBWZXJ0aWNhbEFsaWduZW1lbnQ6IHtcbiAgICBUT1A6IFwidG9wXCIsXG4gICAgQ0VOVEVSOiBcImNlbnRlclwiLFxuICAgIEJPVFRPTTogXCJib3R0b21cIixcbiAgICBERUZBVUxUOiBcImRlZmF1bHRcIlxuICB9LFxuICBTdHJpbmc6IHtcbiAgICBFUlJPUl9NRVNTQUdFX0NBTlZBUzogXCJBIGZhdGFsIGVycm9yIGhhcyBvY2N1cnJlZCBhdCB0aGUgSlNHYW1lVG9vbHMgbGV2ZWwuXCIsXG4gICAgRVJST1JfTUVTU0FHRV9DQU5WQVNfTEFCRUwgOiBcIjonKFxcbkEgZmF0YWwgZXJyb3IgaGFzIG9jY3VycmVkIGF0IHRoZSBKU0dhbWVUb29scyBsZXZlbC5cIixcbiAgICBSRVRSWTogXCJSZXRyeVwiLFxuICAgIE5PVElDRV9NRVNTQUdFOiBcIk5vdGljZTpcIixcbiAgICBXQVJOSU5HX01FU1NBR0U6IFwiV2FybmluZzpcIixcbiAgICBFUlJPUl9NRVNTQUdFOiBcIkVycm9yOlwiLFxuICAgIE9QVElNSVpBVElPTl9ESVNBQkxFRDogXCJPcHRpbWl6YXRpb25zIGFyZSBkaXNhYmxlZC4gWW91IG1heSBub3RpY2UgbG93IHBlcmZvcm1hbmNlLlwiLFxuICAgIENPTlRBSU5FUl9DVVRUSU5HX0RJU0FCTEVEOiBcIkNvbnRhaW5lcnMgY3V0dGluZyBpcyBkaXNhYmxlZC5cIixcbiAgICBCVVRUT05fSU1BR0VfREVQUkVDQVRFRDogXCJKU0dhbWVUb29scy5CdXR0b25JbWFnZSBpcyBkZXByZWNhdGVkLiBQbGVhc2UgdXNlIGEgQnV0dG9uIHdpdGggYW4gSW1hZ2VDb250YWluZXIgaW5zdGVhZC5cIixcbiAgICBJTlBVVF9GVUxMU0NSRUVOOiBcIlRoZSB1c2Ugb2YgSlNHYW1lVG9vbHMuQ2FudmFzIGlzIG5lZWRlZCBmb3IgSW5wdXQgY29tcG9uZW50cyB0byBwcm9wZXJseSB3b3JrIGluIGZ1bGxzY3JlZW4gbW9kZS5cIixcbiAgICBERVRBSUxTOiBcIkRldGFpbHNcIlxuICB9XG59OyIsIi8qXG4gKiBDb3B5cmlnaHQgKEMpIDIwMjAgRWxpYXN0aWsgKGVsaWFzdGlrc29mdHMuY29tKVxuICpcbiAqIFRoaXMgZmlsZSBpcyBwYXJ0IG9mIFwiSlNHYW1lVG9vbHNcIi5cbiAqXG4gKiBcIkpTR2FtZVRvb2xzXCIgaXMgZnJlZSBzb2Z0d2FyZTogeW91IGNhbiByZWRpc3RyaWJ1dGUgaXQgYW5kL29yIG1vZGlmeVxuICogaXQgdW5kZXIgdGhlIHRlcm1zIG9mIHRoZSBHTlUgR2VuZXJhbCBQdWJsaWMgTGljZW5zZSBhcyBwdWJsaXNoZWQgYnlcbiAqIHRoZSBGcmVlIFNvZnR3YXJlIEZvdW5kYXRpb24sIGVpdGhlciB2ZXJzaW9uIDMgb2YgdGhlIExpY2Vuc2UsIG9yXG4gKiAoYXQgeW91ciBvcHRpb24pIGFueSBsYXRlciB2ZXJzaW9uLlxuICpcbiAqIFwiSlNHYW1lVG9vbHNcIiBpcyBkaXN0cmlidXRlZCBpbiB0aGUgaG9wZSB0aGF0IGl0IHdpbGwgYmUgdXNlZnVsLFxuICogYnV0IFdJVEhPVVQgQU5ZIFdBUlJBTlRZOyB3aXRob3V0IGV2ZW4gdGhlIGltcGxpZWQgd2FycmFudHkgb2ZcbiAqIE1FUkNIQU5UQUJJTElUWSBvciBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRS4gIFNlZSB0aGVcbiAqIEdOVSBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlIGZvciBtb3JlIGRldGFpbHMuXG4gKlxuICogWW91IHNob3VsZCBoYXZlIHJlY2VpdmVkIGEgY29weSBvZiB0aGUgR05VIEdlbmVyYWwgUHVibGljIExpY2Vuc2VcbiAqIGFsb25nIHdpdGggXCJKU0dhbWVUb29sc1wiLiAgSWYgbm90LCBzZWUgPGh0dHA6Ly93d3cuZ251Lm9yZy9saWNlbnNlcy8+LlxuICovXG5pbXBvcnQgQm94IGZyb20gXCIuL0JveFwiO1xuaW1wb3J0IENvbXBvbmVudCBmcm9tIFwiLi9Db21wb25lbnRcIjtcbmltcG9ydCBDb25zdGFudHMgZnJvbSBcIi4vQ29uc3RhbnRzXCI7XG5pbXBvcnQgU2Nyb2xsYmFySG9yaXpvbnRhbCBmcm9tIFwiLi9TY3JvbGxiYXJIb3Jpem9udGFsXCI7XG5pbXBvcnQgU2Nyb2xsYmFyVmVydGljYWwgZnJvbSBcIi4vU2Nyb2xsYmFyVmVydGljYWxcIjtcbmltcG9ydCBTdHlsZSBmcm9tIFwiLi9TdHlsZVwiO1xuaW1wb3J0IFV0aWxzIGZyb20gXCIuL1V0aWxzXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIENvbnRhaW5lciBleHRlbmRzIEJveCB7XG4gIHNlbGVjdGFibGUgPSBmYWxzZTtcbiAgI2NvbXBvbmVudHMgPSBbXTtcbiAgI19tYXhXaWR0aCA9IDA7XG4gICNfbWF4SGVpZ2h0ID0gMDtcbiAgI19taW5XaWR0aCA9IDA7XG4gICNfbWluSGVpZ2h0ID0gMDtcbiAgZXZlbnRDaGFuZ2VDYWxsYmFjayA9ICgpID0+IHRoaXMucmVhY3Rvci5kaXNwYXRjaEV2ZW50KFwib25DaGFuZ2VcIiwgdGhpcyk7XG5cbiAgY29uc3RydWN0b3IoeCwgeSwgbWF4V2lkdGgsIG1heEhlaWdodCwgc3R5bGUsIC4uLmNvbXBvbmVudHMpIHtcbiAgICBzdXBlcih4LCB5LCBudWxsLCBudWxsLCBzdHlsZSk7XG5cbiAgICB0aGlzLmFkZEFsbCguLi5jb21wb25lbnRzKTtcbiAgICB0aGlzLmNhbnZhc1RtcCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJjYW52YXNcIik7XG4gICAgdGhpcy4jX21heFdpZHRoID0gbWF4V2lkdGg7XG4gICAgdGhpcy4jX21heEhlaWdodCA9IG1heEhlaWdodDtcbiAgICB0aGlzLnNjcm9sbGJhckhvcml6b250YWwgPSBuZXcgU2Nyb2xsYmFySG9yaXpvbnRhbChudWxsLCBudWxsLCB0aGlzKTtcbiAgICB0aGlzLnNjcm9sbGJhclZlcnRpY2FsID0gbmV3IFNjcm9sbGJhclZlcnRpY2FsKG51bGwsIG51bGwsIHRoaXMpO1xuXG4gICAgdGhpcy5hZGRTY3JvbGxBY3Rpb24oKGRlbHRhWCwgZGVsdGFZKSA9PiB0aGlzLmNvbnRyb2xTY3JvbGxpbmcoZGVsdGFYLCBkZWx0YVkpKTtcblxuICAgIGlmKCFDb25zdGFudHMuU2V0dGluZy5ESVNBQkxFX0VYUEVSSU1FTlRBTF9PUFRJTUlaQVRJT05TKSB7XG4gICAgICB0aGlzLmFkZENoYW5nZUFjdGlvbihjb21wb25lbnRDaGFuZ2VkID0+IHtcbiAgICAgICAgY29tcG9uZW50Q2hhbmdlZCA9PSB0aGlzLnBhcmVudCAmJiB0aGlzLmNvbXBvbmVudHMuZm9yRWFjaChjb21wb25lbnQgPT4gY29tcG9uZW50ICYmIGNvbXBvbmVudC5yZWFjdG9yLmRpc3BhdGNoRXZlbnQoXCJvbkNoYW5nZVwiLCB0aGlzKSk7XG4gICAgICB9KTtcbiAgICB9XG4gIH1cblxuICBkcmF3KGNvbnRleHQpIHtcbiAgICBpZih0aGlzLmhpZGRlbikgcmV0dXJuO1xuICAgIGNvbnN0IGNhbnZhcyA9IGNvbnRleHQuY2FudmFzO1xuICAgIGNvbnN0IGN0eCA9IGNhbnZhcy5nZXRDb250ZXh0KFwiMmRcIik7XG4gICAgY3R4LnNhdmUoKTtcblxuICAgIGlmKHRoaXMuaXNDdXR0aW5nKSB7XG4gICAgICBjb25zdCBjdHhUZW1wID0gdGhpcy5jYW52YXNUbXAuZ2V0Q29udGV4dChcIjJkXCIpO1xuICAgICAgdGhpcy5jYW52YXNUbXAud2lkdGggPSBVdGlscy5nZXRDYW52YXNXaWR0aChjYW52YXMpICogQ29uc3RhbnRzLlNldHRpbmcuUElYRUxfUkFUSU87XG4gICAgICB0aGlzLmNhbnZhc1RtcC5oZWlnaHQgPSBVdGlscy5nZXRDYW52YXNIZWlnaHQoY2FudmFzKSAqIENvbnN0YW50cy5TZXR0aW5nLlBJWEVMX1JBVElPO1xuICAgICAgdGhpcy5jYW52YXNUbXAuc3R5bGUud2lkdGggPSBVdGlscy5nZXRDYW52YXNXaWR0aChjYW52YXMpO1xuICAgICAgdGhpcy5jYW52YXNUbXAuc3R5bGUuaGVpZ2h0ID0gVXRpbHMuZ2V0Q2FudmFzSGVpZ2h0KGNhbnZhcyk7XG4gICAgICBVdGlscy5jbGVhcihjdHhUZW1wKTtcbiAgICB9XG4gICAgXG4gICAgdGhpcy5jb21wb25lbnRzLmZvckVhY2goY29tcG9uZW50ID0+IHtcbiAgICAgIGlmKHRoaXMuY2FudmFzKSBjb21wb25lbnQuY2FudmFzID0gdGhpcy5jYW52YXM7XG4gICAgfSk7XG4gICAgXG4gICAgdGhpcy5jb250cm9sU2Nyb2xsaW5nKDAsIDApO1xuICAgIHN1cGVyLmRyYXcoY29udGV4dCk7XG5cbiAgICBjdHgucmVzdG9yZSgpO1xuICB9XG5cbiAgZHJhd1ZlcnRpY2FsU2Nyb2xsQmFyKGN0eCkge1xuICAgIGlmKHRoaXMuc2Nyb2xsYmFyVmVydGljYWwpIHtcbiAgICAgIHRoaXMuc2Nyb2xsYmFyVmVydGljYWwuY2FudmFzID0gdGhpcy5jYW52YXM7XG4gICAgICB0aGlzLnNjcm9sbGJhclZlcnRpY2FsLmRyYXcoY3R4KTtcbiAgICB9XG4gIH1cblxuICBkcmF3SG9yaXpvbnRhbFNjcm9sbEJhcihjdHgpIHtcbiAgICBpZih0aGlzLnNjcm9sbGJhckhvcml6b250YWwpIHtcbiAgICAgIHRoaXMuc2Nyb2xsYmFySG9yaXpvbnRhbC5jYW52YXMgPSB0aGlzLmNhbnZhcztcbiAgICAgIHRoaXMuc2Nyb2xsYmFySG9yaXpvbnRhbC5kcmF3KGN0eCk7XG4gICAgfVxuICB9XG5cbiAgZHJhd1Njcm9sbGJhcnMoY3R4KSB7XG4gICAgaWYoIXRoaXMuc3R5bGUuc2Nyb2xsWERpc2FibGVkKSB0aGlzLmRyYXdIb3Jpem9udGFsU2Nyb2xsQmFyKGN0eCk7XG4gICAgaWYoIXRoaXMuc3R5bGUuc2Nyb2xsWURpc2FibGVkKSB0aGlzLmRyYXdWZXJ0aWNhbFNjcm9sbEJhcihjdHgpO1xuICB9XG5cbiAgc2V0KC4uLmNvbXBvbmVudHMpIHtcbiAgICBsZXQgaGFzQ2hhbmdlZCA9IGZhbHNlO1xuXG4gICAgaWYoY29tcG9uZW50cy5sZW5ndGggPT0gdGhpcy5jb21wb25lbnRzLmxlbmd0aCkge1xuICAgICAgY29tcG9uZW50cy5mb3JFYWNoKChjb21wb25lbnQsIGkpID0+IHtcbiAgICAgICAgaWYodGhpcy5jb21wb25lbnRzW2ldICE9IGNvbXBvbmVudCkgaGFzQ2hhbmdlZCA9IHRydWU7XG4gICAgICB9KTtcbiAgICB9IGVsc2Uge1xuICAgICAgaGFzQ2hhbmdlZCA9IHRydWU7XG4gICAgfVxuXG4gICAgaWYoaGFzQ2hhbmdlZCkge1xuICAgICAgdGhpcy5jbGVhcigpO1xuICAgICAgdGhpcy5hZGRBbGwoLi4uY29tcG9uZW50cyk7XG4gICAgfVxuICB9XG5cbiAgYWRkKGNvbXBvbmVudCkge1xuICAgIHRoaXMuI2NvbXBvbmVudHMucHVzaChjb21wb25lbnQpO1xuICAgIGNvbXBvbmVudC5wYXJlbnQgPSB0aGlzO1xuICAgIGlmKHRoaXMuY2FudmFzKSBjb21wb25lbnQuY2FudmFzID0gdGhpcy5jYW52YXM7XG4gICAgY29tcG9uZW50LmFkZENoYW5nZUFjdGlvbih0aGlzLmV2ZW50Q2hhbmdlQ2FsbGJhY2spO1xuICAgIHRoaXMucmVhY3Rvci5kaXNwYXRjaEV2ZW50KFwib25DaGFuZ2VcIiwgdGhpcyk7XG4gIH1cblxuICBhZGRBbGwoLi4uY29tcG9uZW50cykge1xuICAgIGNvbXBvbmVudHMuZm9yRWFjaChjb21wb25lbnQgPT4gdGhpcy5hZGQoY29tcG9uZW50KSk7XG4gIH1cblxuICByZW1vdmUoY29tcG9uZW50KSB7XG4gICAgaWYodGhpcy4jY29tcG9uZW50cy5pbmRleE9mKGNvbXBvbmVudCkgIT0gLTEpIHtcbiAgICAgIGNvbXBvbmVudC5yZW1vdmVDaGFuZ2VBY3Rpb24odGhpcy5ldmVudENoYW5nZUNhbGxiYWNrKTtcbiAgICAgIHRoaXMuI2NvbXBvbmVudHMgPSB0aGlzLiNjb21wb25lbnRzLmZpbHRlcihjdXJyZW50ID0+IGNvbXBvbmVudCAhPSBjdXJyZW50KTtcbiAgICAgIHRoaXMucmVhY3Rvci5kaXNwYXRjaEV2ZW50KFwib25DaGFuZ2VcIiwgdGhpcyk7XG4gICAgfVxuICB9XG5cbiAgY2xlYXIoKSB7XG4gICAgdGhpcy4jY29tcG9uZW50cy5mb3JFYWNoKGNvbXBvbmVudCA9PiB0aGlzLnJlbW92ZShjb21wb25lbnQpKTtcbiAgICB0aGlzLnJlYWN0b3IuZGlzcGF0Y2hFdmVudChcIm9uQ2hhbmdlXCIsIHRoaXMpO1xuICB9XG5cbiAgZ2V0IGNvbXBvbmVudHMoKSB7XG4gICAgY29uc3QgY29tcG9uZW50cyA9IFtdO1xuICAgIHRoaXMuI2NvbXBvbmVudHMuZm9yRWFjaChjb21wb25lbnQgPT4gY29tcG9uZW50cy5wdXNoKGNvbXBvbmVudCkpO1xuICAgIHJldHVybiBjb21wb25lbnRzO1xuICB9XG5cbiAgZ2V0IGFsbENvbXBvbmVudHMoKSB7XG4gICAgY29uc3QgY29tcG9uZW50cyA9IHRoaXMuY29tcG9uZW50cztcbiAgICBjb21wb25lbnRzLnB1c2godGhpcy5zY3JvbGxiYXJIb3Jpem9udGFsKTtcbiAgICBjb21wb25lbnRzLnB1c2godGhpcy5zY3JvbGxiYXJWZXJ0aWNhbCk7XG4gICAgcmV0dXJuIGNvbXBvbmVudHM7XG4gIH1cblxuICBnZXRDb21wb25lbnRzVHJlZShzdGFydCA9IHRoaXMpIHtcbiAgICBjb25zdCBjb21wb25lbnRzID0ge1xuICAgICAgXCJjb21wb25lbnRcIjogc3RhcnQsXG4gICAgICBcImNoaWxkc1wiOiBbXVxuICAgIH07XG5cbiAgICBpZihzdGFydC5hbGxDb21wb25lbnRzKSB7XG4gICAgICBzdGFydC5hbGxDb21wb25lbnRzLmZvckVhY2goY29tcG9uZW50ID0+IGNvbXBvbmVudHMuY2hpbGRzLnB1c2godGhpcy5nZXRDb21wb25lbnRzVHJlZShjb21wb25lbnQpKSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGNvbXBvbmVudHM7XG4gIH1cblxuICBzdGF0aWMgc29ydENvbXBvbmVudHNUcmVlKGNvbXBvbmVudCwgb3RoZXIpIHtcbiAgICByZXR1cm4gY29tcG9uZW50LmNvbXBvbmVudC5jb21wYXJlVG8ob3RoZXIuY29tcG9uZW50KTtcbiAgfVxuXG4gIGRpc2FibGUoKSB7XG4gICAgbGV0IGNoYW5nZWQgPSBzdXBlci5kaXNhYmxlKCk7XG5cbiAgICB0aGlzLiNjb21wb25lbnRzLmZvckVhY2goY29tcG9uZW50ID0+IHtcbiAgICAgIGlmKGNvbXBvbmVudCAmJiBjb21wb25lbnQuZGlzYWJsZSAmJiBjb21wb25lbnQuZGlzYWJsZSgpKSB7XG4gICAgICAgIGNoYW5nZWQgPSB0cnVlO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgaWYoY2hhbmdlZCkgdGhpcy5yZWFjdG9yLmRpc3BhdGNoRXZlbnQoXCJvbkNoYW5nZVwiLCB0aGlzKTtcbiAgfVxuXG4gIGVuYWJsZSgpIHtcbiAgICBsZXQgY2hhbmdlZCA9IHN1cGVyLmVuYWJsZSgpO1xuXG4gICAgdGhpcy4jY29tcG9uZW50cy5mb3JFYWNoKGNvbXBvbmVudCA9PiB7XG4gICAgICBpZihjb21wb25lbnQgJiYgY29tcG9uZW50LmVuYWJsZSAmJiBjb21wb25lbnQuZW5hYmxlKCkpIHtcbiAgICAgICAgY2hhbmdlZCA9IHRydWU7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICBpZihjaGFuZ2VkKSB0aGlzLnJlYWN0b3IuZGlzcGF0Y2hFdmVudChcIm9uQ2hhbmdlXCIsIHRoaXMpO1xuICB9XG5cbiAgZ2V0IHdpZHRoKCkge1xuICAgIGNvbnN0IHdpZHRoID0gKHRoaXMucGFyZW50ICYmIHRoaXMucGFyZW50LndpZHRoKTtcbiAgICBjb25zdCBtaW4gPSB0aGlzLm1heFdpZHRoICE9IG51bGwgPyBNYXRoLm1pbih0aGlzLm1heFdpZHRoLCB3aWR0aCkgOiBudWxsO1xuICAgIHJldHVybiB0aGlzLm1pbldpZHRoICE9IG51bGwgPyBNYXRoLm1heCh0aGlzLm1pbldpZHRoLCBtaW4gIT0gbnVsbCA/IG1pbiA6IHdpZHRoKSA6IHdpZHRoO1xuICB9XG5cbiAgZ2V0IGhlaWdodCgpIHtcbiAgICBjb25zdCBoZWlnaHQgPSAodGhpcy5wYXJlbnQgJiYgdGhpcy5wYXJlbnQuaGVpZ2h0KTtcbiAgICBjb25zdCBtaW4gPSB0aGlzLm1heFdpZHRoICE9IG51bGwgPyBNYXRoLm1pbih0aGlzLm1heEhlaWdodCwgaGVpZ2h0KSA6IG51bGw7XG4gICAgcmV0dXJuIHRoaXMubWluSGVpZ2h0ICE9IG51bGwgPyBNYXRoLm1heCh0aGlzLm1pbkhlaWdodCwgbWluICE9IG51bGwgPyBtaW4gOiBoZWlnaHQpIDogaGVpZ2h0O1xuICB9XG5cbiAgZ2V0IG1heFdpZHRoKCkge1xuICAgIHJldHVybiB0aGlzLiNfbWF4V2lkdGg7XG4gIH1cblxuICBnZXQgbWF4SGVpZ2h0KCkge1xuICAgIHJldHVybiB0aGlzLiNfbWF4SGVpZ2h0O1xuICB9XG5cbiAgc2V0IG1heFdpZHRoKG1heFdpZHRoKSB7XG4gICAgaWYobWF4V2lkdGggIT0gdGhpcy4jX21heFdpZHRoKSB7XG4gICAgICB0aGlzLiNfbWF4V2lkdGggPSBtYXhXaWR0aDtcbiAgICAgIHRoaXMucmVhY3Rvci5kaXNwYXRjaEV2ZW50KFwib25DaGFuZ2VcIiwgdGhpcyk7XG4gICAgfVxuICB9XG5cbiAgc2V0IG1heEhlaWdodChtYXhIZWlnaHQpIHtcbiAgICBpZihtYXhIZWlnaHQgIT0gdGhpcy4jX21heEhlaWdodCkge1xuICAgICAgdGhpcy4jX21heEhlaWdodCA9IG1heEhlaWdodDtcbiAgICAgIHRoaXMucmVhY3Rvci5kaXNwYXRjaEV2ZW50KFwib25DaGFuZ2VcIiwgdGhpcyk7XG4gICAgfVxuICB9XG5cbiAgZ2V0IG1pbldpZHRoKCkge1xuICAgIHJldHVybiB0aGlzLiNfbWluV2lkdGg7XG4gIH1cblxuICBnZXQgbWluSGVpZ2h0KCkge1xuICAgIHJldHVybiB0aGlzLiNfbWluSGVpZ2h0O1xuICB9XG5cbiAgc2V0IG1pbldpZHRoKG1pbldpZHRoKSB7XG4gICAgaWYobWluV2lkdGggIT0gdGhpcy4jX21pbldpZHRoKSB7XG4gICAgICB0aGlzLiNfbWluV2lkdGggPSBtaW5XaWR0aDtcbiAgICAgIHRoaXMucmVhY3Rvci5kaXNwYXRjaEV2ZW50KFwib25DaGFuZ2VcIiwgdGhpcyk7XG4gICAgfVxuICB9XG5cbiAgc2V0IG1pbkhlaWdodChtaW5IZWlnaHQpIHtcbiAgICBpZihtaW5IZWlnaHQgIT0gdGhpcy4jX21pbkhlaWdodCkge1xuICAgICAgdGhpcy4jX21pbkhlaWdodCA9IG1pbkhlaWdodDtcbiAgICAgIHRoaXMucmVhY3Rvci5kaXNwYXRjaEV2ZW50KFwib25DaGFuZ2VcIiwgdGhpcyk7XG4gICAgfVxuICB9XG5cbiAgdXBkYXRlSW5uZXJIZWlnaHQoKSB7IH1cblxuICB1cGRhdGVJbm5lcldpZHRoKCkgeyB9XG5cbiAgc2V0IGNhbnZhcyhjYW52YXMpIHtcbiAgICBpZihjYW52YXMgIT0gdGhpcy5jYW52YXMpIHtcbiAgICAgIHN1cGVyLmNhbnZhcyA9IGNhbnZhcztcbiAgXG4gICAgICB0aGlzLiNjb21wb25lbnRzLmZvckVhY2goY29tcG9uZW50ID0+IHtcbiAgICAgICAgY29tcG9uZW50LmNhbnZhcyA9IGNhbnZhcztcbiAgICAgICAgaWYoY29tcG9uZW50LnJlYWN0b3IpIGNvbXBvbmVudC5yZWFjdG9yLmRpc3BhdGNoRXZlbnQoXCJvbkNoYW5nZVwiLCB0aGlzKTtcbiAgICAgIH0pO1xuICBcbiAgICAgIHRoaXMucmVhY3Rvci5kaXNwYXRjaEV2ZW50KFwib25DaGFuZ2VcIiwgdGhpcyk7XG4gICAgfVxuICB9XG5cbiAgZ2V0IGNhbnZhcygpIHtcbiAgICByZXR1cm4gc3VwZXIuY2FudmFzO1xuICB9XG5cbiAgZ2V0Q29tcG9uZW50SWQoY29tcG9uZW50KSB7XG4gICAgbGV0IHJlc3VsdCA9IG51bGw7XG5cbiAgICB0aGlzLiNjb21wb25lbnRzLmZvckVhY2goKGMsIGkpID0+IHtcbiAgICAgIGlmKGMgPT0gY29tcG9uZW50KSByZXN1bHQgPSBpO1xuICAgIH0pO1xuXG4gICAgcmV0dXJuIHJlc3VsdDtcbiAgfVxuXG4gIGdldCBzY3JvbGxBcmVhU2l6ZVgoKSB7XG4gICAgcmV0dXJuIHRoaXMuaW5uZXJXaWR0aCAtIHRoaXMud2lkdGg7XG4gIH1cblxuICBnZXQgc2Nyb2xsQXJlYVNpemVZKCkge1xuICAgIHJldHVybiB0aGlzLmlubmVySGVpZ2h0IC0gdGhpcy5oZWlnaHQ7XG4gIH1cblxuICBjb250cm9sU2Nyb2xsaW5nKGRlbHRhWCwgZGVsdGFZKSB7XG4gICAgaWYoIXRoaXMuc3R5bGUuc2Nyb2xsWURpc2FibGVkKSB7XG4gICAgICBpZih0aGlzLnNjcm9sbEFyZWFTaXplWSA8PSAwKSB7XG4gICAgICAgIHRoaXMub2Zmc2V0U2Nyb2xsWSA9IDA7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBjb25zdCBwZXJjZW50U2Nyb2xsYmFyWSA9IHRoaXMub2Zmc2V0U2Nyb2xsWSAvIHRoaXMuc2Nyb2xsQXJlYVNpemVZO1xuICBcbiAgICAgICAgaWYocGVyY2VudFNjcm9sbGJhclkgPD0gMCAmJiBkZWx0YVkgPD0gMCkge1xuICAgICAgICAgIHRoaXMub2Zmc2V0U2Nyb2xsWSA9IE1hdGgubWluKDAsIHRoaXMueSk7XG4gICAgICAgIH0gZWxzZSBpZihwZXJjZW50U2Nyb2xsYmFyWSA+IDEgJiYgZGVsdGFZID49IDApIHtcbiAgICAgICAgICB0aGlzLm9mZnNldFNjcm9sbFkgPSB0aGlzLnNjcm9sbEFyZWFTaXplWTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLm9mZnNldFNjcm9sbFkgLT0gZGVsdGFZO1xuICAgIH1cblxuICAgIGlmKCF0aGlzLnN0eWxlLnNjcm9sbFhEaXNhYmxlZCkge1xuICAgICAgaWYodGhpcy5zY3JvbGxBcmVhU2l6ZVggPD0gMCkge1xuICAgICAgICB0aGlzLm9mZnNldFNjcm9sbFggPSAwO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgY29uc3QgcGVyY2VudFNjcm9sbGJhclggPSB0aGlzLm9mZnNldFNjcm9sbFggLyB0aGlzLnNjcm9sbEFyZWFTaXplWDtcbiAgXG4gICAgICAgIGlmKHBlcmNlbnRTY3JvbGxiYXJYIDw9IDAgJiYgZGVsdGFYIDw9IDApIHtcbiAgICAgICAgICB0aGlzLm9mZnNldFNjcm9sbFggPSBNYXRoLm1pbigwLCB0aGlzLngpO1xuICAgICAgICB9IGVsc2UgaWYocGVyY2VudFNjcm9sbGJhclggPiAxICYmIGRlbHRhWCA+PSAwKSB7XG4gICAgICAgICAgdGhpcy5vZmZzZXRTY3JvbGxYID0gdGhpcy5zY3JvbGxBcmVhU2l6ZVg7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5vZmZzZXRTY3JvbGxYIC09IGRlbHRhWDtcbiAgICB9XG4gIH1cblxuICBpc0NvbXBvbmVudFZpc2libGUoY29tcG9uZW50KSB7XG4gICAgaWYoQ29uc3RhbnRzLlNldHRpbmcuRElTQUJMRV9PUFRJTUlaQVRJT05TKSByZXR1cm4gdHJ1ZTtcbiAgICBcbiAgICBpZihjb21wb25lbnQgaW5zdGFuY2VvZiBDb21wb25lbnQgJiYgIWNvbXBvbmVudC5oaWRkZW4pIHtcbiAgICAgIGlmKCFDb25zdGFudHMuU2V0dGluZy5ESVNBQkxFX0lTX0NPTVBPTkVOVF9WSVNJQkxFX09QVElNSVpBVElPTlMgJiYgdGhpcy5wYXJlbnQgJiYgdGhpcy5wYXJlbnQuaXNDb21wb25lbnRWaXNpYmxlICYmICF0aGlzLnBhcmVudC5pc0NvbXBvbmVudFZpc2libGUoY29tcG9uZW50KSkge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICB9XG5cbiAgICAgIGNvbnN0IHdpZHRoID0gdGhpcy53aWR0aDtcbiAgICAgIGNvbnN0IGhlaWdodCA9IHRoaXMuaGVpZ2h0O1xuICAgICAgY29uc3QgY29tcG9uZW50V2lkdGggPSBjb21wb25lbnQud2lkdGg7XG4gICAgICBjb25zdCBjb21wb25lbnRIZWlnaHQgPSBjb21wb25lbnQuaGVpZ2h0O1xuICAgICAgY29uc3QgY2FudmFzV2lkdGggPSAodGhpcy5jYW52YXMgJiYgdGhpcy5jYW52YXMud2lkdGgpIHx8IHdpZHRoO1xuICAgICAgY29uc3QgY2FudmFzSGVpZ2h0ID0gKHRoaXMuY2FudmFzICYmIHRoaXMuY2FudmFzLmhlaWdodCkgfHwgaGVpZ2h0O1xuXG4gICAgICBpZihjb21wb25lbnQueCArIGNvbXBvbmVudFdpZHRoID49IHRoaXMueCAmJiBjb21wb25lbnQueCA8PSB0aGlzLnggKyB3aWR0aCAmJiBjb21wb25lbnQueSArIGNvbXBvbmVudEhlaWdodCA+PSB0aGlzLnkgJiYgY29tcG9uZW50LnkgPD0gdGhpcy55ICsgaGVpZ2h0ICYmIGNvbXBvbmVudC54ICsgY29tcG9uZW50V2lkdGggPj0gMCAmJiBjb21wb25lbnQueCA8PSBjYW52YXNXaWR0aCAmJiBjb21wb25lbnQueSArIGNvbXBvbmVudEhlaWdodCA+PSAwICYmIGNvbXBvbmVudC55IDw9IGNhbnZhc0hlaWdodCkge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBnZXQgaXNDdXR0aW5nKCkge1xuICAgIHJldHVybiAhQ29uc3RhbnRzLlNldHRpbmcuRElTQUJMRV9DT05UQUlORVJTX0NVVFRJTkcgJiYgKCgodGhpcy5tYXhXaWR0aCAmJiB0aGlzLmlubmVyV2lkdGggPiB0aGlzLm1heFdpZHRoKSB8fCAodGhpcy5tYXhIZWlnaHQgJiYgdGhpcy5pbm5lckhlaWdodCA+IHRoaXMubWF4SGVpZ2h0KSkpICYmIHRoaXMuY2FudmFzVG1wICE9IG51bGw7XG4gIH1cblxuICBnZXQgZGVmYXVsdFN0eWxlKCkge1xuICAgIHJldHVybiBuZXcgU3R5bGUoe1xuICAgICAgXCJwYWRkaW5nXCI6IDAsXG4gICAgICBcInNwYWNlQmV0d2VlbkNvbXBvbmVudHNcIjogQ29uc3RhbnRzLlNldHRpbmcuREVGQVVMVF9TUEFDSU5HXG4gICAgfSk7XG4gIH1cbn0iLCIvKlxuICogQ29weXJpZ2h0IChDKSAyMDIwIEVsaWFzdGlrIChlbGlhc3Rpa3NvZnRzLmNvbSlcbiAqXG4gKiBUaGlzIGZpbGUgaXMgcGFydCBvZiBcIkpTR2FtZVRvb2xzXCIuXG4gKlxuICogXCJKU0dhbWVUb29sc1wiIGlzIGZyZWUgc29mdHdhcmU6IHlvdSBjYW4gcmVkaXN0cmlidXRlIGl0IGFuZC9vciBtb2RpZnlcbiAqIGl0IHVuZGVyIHRoZSB0ZXJtcyBvZiB0aGUgR05VIEdlbmVyYWwgUHVibGljIExpY2Vuc2UgYXMgcHVibGlzaGVkIGJ5XG4gKiB0aGUgRnJlZSBTb2Z0d2FyZSBGb3VuZGF0aW9uLCBlaXRoZXIgdmVyc2lvbiAzIG9mIHRoZSBMaWNlbnNlLCBvclxuICogKGF0IHlvdXIgb3B0aW9uKSBhbnkgbGF0ZXIgdmVyc2lvbi5cbiAqXG4gKiBcIkpTR2FtZVRvb2xzXCIgaXMgZGlzdHJpYnV0ZWQgaW4gdGhlIGhvcGUgdGhhdCBpdCB3aWxsIGJlIHVzZWZ1bCxcbiAqIGJ1dCBXSVRIT1VUIEFOWSBXQVJSQU5UWTsgd2l0aG91dCBldmVuIHRoZSBpbXBsaWVkIHdhcnJhbnR5IG9mXG4gKiBNRVJDSEFOVEFCSUxJVFkgb3IgRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UuICBTZWUgdGhlXG4gKiBHTlUgR2VuZXJhbCBQdWJsaWMgTGljZW5zZSBmb3IgbW9yZSBkZXRhaWxzLlxuICpcbiAqIFlvdSBzaG91bGQgaGF2ZSByZWNlaXZlZCBhIGNvcHkgb2YgdGhlIEdOVSBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlXG4gKiBhbG9uZyB3aXRoIFwiSlNHYW1lVG9vbHNcIi4gIElmIG5vdCwgc2VlIDxodHRwOi8vd3d3LmdudS5vcmcvbGljZW5zZXMvPi5cbiAqL1xuaW1wb3J0IENvbXBvbmVudCBmcm9tIFwiLi9Db21wb25lbnRcIjtcbmltcG9ydCBDb25zdGFudHMgZnJvbSBcIi4vQ29uc3RhbnRzXCI7XG5pbXBvcnQgVXRpbHMgZnJvbSBcIi4vVXRpbHNcIjtcbmltcG9ydCBTdHlsZSBmcm9tIFwiLi9TdHlsZVwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDcm9zcyBleHRlbmRzIENvbXBvbmVudCB7XG4gIHNlbGVjdGFibGUgPSBmYWxzZTtcblxuICBjb25zdHJ1Y3Rvcih4LCB5LCB3aWR0aCwgaGVpZ2h0LCBzdHlsZSkge1xuICAgIHN1cGVyKHgsIHksIHdpZHRoLCBoZWlnaHQsIHN0eWxlKTtcbiAgfVxuXG4gIGRyYXcoY29udGV4dCkge1xuICAgIGlmKHRoaXMuaGlkZGVuKSByZXR1cm47XG4gICAgc3VwZXIuZHJhdyhjb250ZXh0KTtcblxuICAgIGNvbnN0IGNhbnZhcyA9IGNvbnRleHQuY2FudmFzO1xuICAgIGNvbnN0IGN0eCA9IGNhbnZhcy5nZXRDb250ZXh0KFwiMmRcIik7XG4gICAgXG4gICAgVXRpbHMuZHJhd0Nyb3NzKGN0eCwgdGhpcy54LCB0aGlzLnksIHRoaXMud2lkdGgsIHRoaXMuaGVpZ2h0LCB0aGlzLnN0eWxlLmxpbmVXaWR0aCwgdGhpcy5zdHlsZS5jb2xvciwgdGhpcy5zdHlsZS5saW5lQ2FwKTtcblxuICAgIHRoaXMuaW5pdCA9IHRydWU7XG4gIH1cblxuICBnZXQgd2lkdGgoKSB7XG4gICAgcmV0dXJuIHN1cGVyLndpZHRoICsgdGhpcy5zdHlsZS5saW5lV2lkdGg7XG4gIH1cblxuICBnZXQgaGVpZ2h0KCkge1xuICAgIHJldHVybiBzdXBlci5oZWlnaHQgKyB0aGlzLnN0eWxlLmxpbmVXaWR0aDtcbiAgfVxuXG4gIHNldCB3aWR0aCh3aWR0aCkge1xuICAgIHN1cGVyLndpZHRoID0gd2lkdGg7XG4gIH1cblxuICBzZXQgaGVpZ2h0KGhlaWdodCkge1xuICAgIHN1cGVyLmhlaWdodCA9IGhlaWdodDtcbiAgfVxuXG4gIGdldCBkZWZhdWx0U3R5bGUoKSB7XG4gICAgcmV0dXJuIG5ldyBTdHlsZSh7XG4gICAgICBcImxpbmVXaWR0aFwiOiBDb25zdGFudHMuU2V0dGluZy5DUk9TU19ERUZBVUxUX0xJTkVfU0laRSxcbiAgICAgIFwiY29sb3JcIjogQ29uc3RhbnRzLlNldHRpbmcuQ1JPU1NfREVGQVVMVF9DT0xPUixcbiAgICAgIFwibGluZUNhcFwiOiBDb25zdGFudHMuU2V0dGluZy5DUk9TU19ERUZBVUxUX0xJTkVfQ0FQXG4gICAgfSk7XG4gIH1cbn0iLCIvKlxuICogQ29weXJpZ2h0IChDKSAyMDIwIEVsaWFzdGlrIChlbGlhc3Rpa3NvZnRzLmNvbSlcbiAqXG4gKiBUaGlzIGZpbGUgaXMgcGFydCBvZiBcIkpTR2FtZVRvb2xzXCIuXG4gKlxuICogXCJKU0dhbWVUb29sc1wiIGlzIGZyZWUgc29mdHdhcmU6IHlvdSBjYW4gcmVkaXN0cmlidXRlIGl0IGFuZC9vciBtb2RpZnlcbiAqIGl0IHVuZGVyIHRoZSB0ZXJtcyBvZiB0aGUgR05VIEdlbmVyYWwgUHVibGljIExpY2Vuc2UgYXMgcHVibGlzaGVkIGJ5XG4gKiB0aGUgRnJlZSBTb2Z0d2FyZSBGb3VuZGF0aW9uLCBlaXRoZXIgdmVyc2lvbiAzIG9mIHRoZSBMaWNlbnNlLCBvclxuICogKGF0IHlvdXIgb3B0aW9uKSBhbnkgbGF0ZXIgdmVyc2lvbi5cbiAqXG4gKiBcIkpTR2FtZVRvb2xzXCIgaXMgZGlzdHJpYnV0ZWQgaW4gdGhlIGhvcGUgdGhhdCBpdCB3aWxsIGJlIHVzZWZ1bCxcbiAqIGJ1dCBXSVRIT1VUIEFOWSBXQVJSQU5UWTsgd2l0aG91dCBldmVuIHRoZSBpbXBsaWVkIHdhcnJhbnR5IG9mXG4gKiBNRVJDSEFOVEFCSUxJVFkgb3IgRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UuICBTZWUgdGhlXG4gKiBHTlUgR2VuZXJhbCBQdWJsaWMgTGljZW5zZSBmb3IgbW9yZSBkZXRhaWxzLlxuICpcbiAqIFlvdSBzaG91bGQgaGF2ZSByZWNlaXZlZCBhIGNvcHkgb2YgdGhlIEdOVSBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlXG4gKiBhbG9uZyB3aXRoIFwiSlNHYW1lVG9vbHNcIi4gIElmIG5vdCwgc2VlIDxodHRwOi8vd3d3LmdudS5vcmcvbGljZW5zZXMvPi5cbiAqL1xuZXhwb3J0IGRlZmF1bHQge1xuICBlYXNlSW5DdWJpYyh4KSB7XG4gICAgcmV0dXJuIHggKiB4ICogeDtcbiAgfSxcbiAgZWFzZU91dEJvdW5jZSh4KSB7XG4gICAgY29uc3QgbjEgPSA3LjU2MjU7XG4gICAgY29uc3QgZDEgPSAyLjc1O1xuICAgIFxuICAgIGlmKHggPCAxIC8gZDEpIHtcbiAgICAgIHJldHVybiBuMSAqIHggKiB4O1xuICAgIH0gZWxzZSBpZih4IDwgMiAvIGQxKSB7XG4gICAgICByZXR1cm4gbjEgKiAoeCAtPSAxLjUgLyBkMSkgKiB4ICsgMC43NTtcbiAgICB9IGVsc2UgaWYoeCA8IDIuNSAvIGQxKSB7XG4gICAgICByZXR1cm4gbjEgKiAoeCAtPSAyLjI1IC8gZDEpICogeCArIDAuOTM3NTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIG4xICogKHggLT0gMi42MjUgLyBkMSkgKiB4ICsgMC45ODQzNzU7XG4gICAgfVxuICB9LFxuICBlYXNlSW5PdXRDdWJpYyh4KSB7XG4gICAgcmV0dXJuIHggPCAwLjUgPyA0ICogeCAqIHggKiB4IDogMSAtIE1hdGgucG93KC0yICogeCArIDIsIDMpIC8gMjtcbiAgfSxcbiAgZWFzZUluT3V0U2luZSh4KSB7XG4gICAgcmV0dXJuIC0oTWF0aC5jb3MoTWF0aC5QSSAqIHgpIC0gMSkgLyAyO1xuICB9LFxuICBlYXNlSW5PdXRRdWludCh4KSB7XG4gICAgcmV0dXJuIHggPCAwLjUgPyAxNiAqIHggKiB4ICogeCAqIHggKiB4IDogMSAtIE1hdGgucG93KC0yICogeCArIDIsIDUpIC8gMjtcbiAgfSxcbiAgZWFzZUluT3V0Q2lyYyh4KSB7XG4gICAgcmV0dXJuIHggPCAwLjUgPyAoMSAtIE1hdGguc3FydCgxIC0gTWF0aC5wb3coMiAqIHgsIDIpKSkgLyAyIDogKE1hdGguc3FydCgxIC0gTWF0aC5wb3coLTIgKiB4ICsgMiwgMikpICsgMSkgLyAyO1xuICB9LFxuICBlYXNlSW5PdXRRdWFkKHgpIHtcbiAgICByZXR1cm4geCA8IDAuNSA/IDIgKiB4ICogeCA6IDEgLSBNYXRoLnBvdygtMiAqIHggKyAyLCAyKSAvIDI7XG4gIH0sXG4gIGVhc2VJbk91dFF1YXJ0KHgpIHtcbiAgICByZXR1cm4geCA8IDAuNSA/IDggKiB4ICogeCAqIHggKiB4IDogMSAtIE1hdGgucG93KC0yICogeCArIDIsIDQpIC8gMjtcbiAgfSxcbiAgZWFzZUluT3V0RXhwbyh4KSB7XG4gICAgcmV0dXJuIHggPT09IDAgPyAwIDogeCA9PT0gMSA/IDEgOiB4IDwgMC41ID8gTWF0aC5wb3coMiwgMjAgKiB4IC0gMTApIC8gMiA6ICgyIC0gTWF0aC5wb3coMiwgLTIwICogeCArIDEwKSkgLyAyO1xuICB9LFxuICBlYXNlSW5PdXRCYWNrKHgpIHtcbiAgICBjb25zdCBjMSA9IDEuNzAxNTg7XG4gICAgY29uc3QgYzIgPSBjMSAqIDEuNTI1O1xuICAgIFxuICAgIHJldHVybiB4IDwgMC41ID8gKE1hdGgucG93KDIgKiB4LCAyKSAqICgoYzIgKyAxKSAqIDIgKiB4IC0gYzIpKSAvIDIgOiAoTWF0aC5wb3coMiAqIHggLSAyLCAyKSAqICgoYzIgKyAxKSAqICh4ICogMiAtIDIpICsgYzIpICsgMikgLyAyO1xuICB9XG59OyIsIi8qXG4gKiBDb3B5cmlnaHQgKEMpIDIwMjAtMjAyMSBFbGlhc3RpayAoZWxpYXN0aWtzb2Z0cy5jb20pXG4gKlxuICogVGhpcyBmaWxlIGlzIHBhcnQgb2YgXCJKU0dhbWVUb29sc1wiLlxuICpcbiAqIFwiSlNHYW1lVG9vbHNcIiBpcyBmcmVlIHNvZnR3YXJlOiB5b3UgY2FuIHJlZGlzdHJpYnV0ZSBpdCBhbmQvb3IgbW9kaWZ5XG4gKiBpdCB1bmRlciB0aGUgdGVybXMgb2YgdGhlIEdOVSBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlIGFzIHB1Ymxpc2hlZCBieVxuICogdGhlIEZyZWUgU29mdHdhcmUgRm91bmRhdGlvbiwgZWl0aGVyIHZlcnNpb24gMyBvZiB0aGUgTGljZW5zZSwgb3JcbiAqIChhdCB5b3VyIG9wdGlvbikgYW55IGxhdGVyIHZlcnNpb24uXG4gKlxuICogXCJKU0dhbWVUb29sc1wiIGlzIGRpc3RyaWJ1dGVkIGluIHRoZSBob3BlIHRoYXQgaXQgd2lsbCBiZSB1c2VmdWwsXG4gKiBidXQgV0lUSE9VVCBBTlkgV0FSUkFOVFk7IHdpdGhvdXQgZXZlbiB0aGUgaW1wbGllZCB3YXJyYW50eSBvZlxuICogTUVSQ0hBTlRBQklMSVRZIG9yIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFLiAgU2VlIHRoZVxuICogR05VIEdlbmVyYWwgUHVibGljIExpY2Vuc2UgZm9yIG1vcmUgZGV0YWlscy5cbiAqXG4gKiBZb3Ugc2hvdWxkIGhhdmUgcmVjZWl2ZWQgYSBjb3B5IG9mIHRoZSBHTlUgR2VuZXJhbCBQdWJsaWMgTGljZW5zZVxuICogYWxvbmcgd2l0aCBcIkpTR2FtZVRvb2xzXCIuICBJZiBub3QsIHNlZSA8aHR0cDovL3d3dy5nbnUub3JnL2xpY2Vuc2VzLz4uXG4gKi9cbmltcG9ydCBTY2VuZSBmcm9tIFwiLi9TY2VuZVwiO1xuaW1wb3J0IENvbnN0YW50cyBmcm9tIFwiLi9Db25zdGFudHNcIjtcbmltcG9ydCBTdHlsZSBmcm9tIFwiLi9TdHlsZVwiO1xuaW1wb3J0IE1lbnUgZnJvbSBcIi4vTWVudVwiO1xuaW1wb3J0IExhYmVsIGZyb20gXCIuL0xhYmVsXCI7XG5pbXBvcnQgQnV0dG9uIGZyb20gXCIuL0J1dHRvblwiO1xuaW1wb3J0IFJvdyBmcm9tIFwiLi9Sb3dcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRXJyb3JTY3JlZW4gZXh0ZW5kcyBTY2VuZSB7XG4gIGNvbnN0cnVjdG9yKGNhbnZhcykge1xuICAgIHN1cGVyKCk7XG4gICAgdGhpcy5jYW52YXMgPSBjYW52YXM7XG4gICAgdGhpcy5sYWJlbERldGFpbHNTY2VuZUVycm9yID0gbmV3IExhYmVsKFwiXCIsIG51bGwsIG51bGwsIG5ldyBTdHlsZSh7IFwiZm9udENvbG9yXCI6IFwid2hpdGVcIiwgXCJhbGlnbmVtZW50XCI6IFwiY2VudGVyXCIsIFwiZm9udFNpemVcIjogQ29uc3RhbnRzLlNldHRpbmcuRk9OVF9TSVpFIC8gMS43NSB9KSk7XG4gICAgdGhpcy5sYWJlbERldGFpbHNTY2VuZUVycm9yLmhpZGRlbiA9IHRydWU7XG5cbiAgICBjb25zdCBidXR0b25TY2VuZUVycm9yID0gbmV3IEJ1dHRvbihudWxsLCBudWxsLCBudWxsLCBudWxsLCBuZXcgU3R5bGUoeyBcImJhY2tncm91bmRDb2xvclwiOiBDb25zdGFudHMuU2V0dGluZy5CVVRUT05fREVGQVVMVF9BTFRFUk5BVElWRV9CQUNLR1JPVU5EIH0pLCBuZXcgTGFiZWwoQ29uc3RhbnRzLlN0cmluZy5SRVRSWSwgbnVsbCwgbnVsbCwgbmV3IFN0eWxlKHsgXCJmb250Q29sb3JcIjogXCJ3aGl0ZVwiLCBcImFsaWduZW1lbnRcIjogXCJjZW50ZXJcIiB9KSkpO1xuICAgIGNvbnN0IGJ1dHRvbkRldGFpbHNTY2VuZUVycm9yID0gbmV3IEJ1dHRvbihudWxsLCBudWxsLCBudWxsLCBudWxsLCBuZXcgU3R5bGUoeyBcImJhY2tncm91bmRDb2xvclwiOiBDb25zdGFudHMuU2V0dGluZy5CVVRUT05fREVGQVVMVF9BTFRFUk5BVElWRV9CQUNLR1JPVU5EIH0pLCBuZXcgTGFiZWwoQ29uc3RhbnRzLlN0cmluZy5ERVRBSUxTLCBudWxsLCBudWxsLCBuZXcgU3R5bGUoeyBcImZvbnRDb2xvclwiOiBcIndoaXRlXCIsIFwiYWxpZ25lbWVudFwiOiBcImNlbnRlclwiIH0pKSk7XG4gICAgY29uc3QgY29sRGV0YWlsc1NjZW5lRXJyb3IgPSBuZXcgUm93KG51bGwsIG51bGwsIG51bGwsIDAsIG5ldyBTdHlsZSh7IFwiYWxpZ25lbWVudFwiOiBcImNlbnRlclwiIH0pLCB0aGlzLmxhYmVsRGV0YWlsc1NjZW5lRXJyb3IpO1xuICAgIGNvbnN0IG1lbnVTY2VuZUVycm9yID0gbmV3IE1lbnUobmV3IFN0eWxlKHsgXCJzcGFjZUJldHdlZW5Db21wb25lbnRzXCI6IDE1LCBcImJhY2tncm91bmRDb2xvclwiOiBDb25zdGFudHMuU2V0dGluZy5FUlJPUl9NRU5VX0JBQ0tHUk9VTkRfQ09MT1IgfSksIG5ldyBMYWJlbChDb25zdGFudHMuU3RyaW5nLkVSUk9SX01FU1NBR0VfQ0FOVkFTX0xBQkVMLCBudWxsLCBudWxsLCBuZXcgU3R5bGUoeyBcImZvbnRDb2xvclwiOiBcIndoaXRlXCIsIFwiYWxpZ25lbWVudFwiOiBcImNlbnRlclwiIH0pKSwgY29sRGV0YWlsc1NjZW5lRXJyb3IsIG5ldyBSb3cobnVsbCwgbnVsbCwgbnVsbCwgbnVsbCwgbmV3IFN0eWxlKHsgXCJhbGlnbmVtZW50XCI6IFwiY2VudGVyXCIgfSksIGJ1dHRvblNjZW5lRXJyb3IsIGJ1dHRvbkRldGFpbHNTY2VuZUVycm9yKSk7XG4gICAgbWVudVNjZW5lRXJyb3IuZW5hYmxlKCk7XG5cbiAgICBidXR0b25TY2VuZUVycm9yLmFkZENsaWNrQWN0aW9uKCgpID0+IHtcbiAgICAgICAgdGhpcy5jYW52YXMuaGFzRXJyb3IgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5jYW52YXMuc2NlbmUgPSB0aGlzLmNhbnZhcy5zY2VuZVByZXZpb3VzO1xuICAgICAgICB0aGlzLmxhYmVsRGV0YWlsc1NjZW5lRXJyb3IuaGlkZGVuID0gdHJ1ZTtcbiAgICAgICAgY29sRGV0YWlsc1NjZW5lRXJyb3IubWF4SGVpZ2h0ID0gMDtcbiAgICB9KTtcblxuICAgIGJ1dHRvbkRldGFpbHNTY2VuZUVycm9yLmFkZENsaWNrQWN0aW9uKCgpID0+IHtcbiAgICAgICAgdGhpcy5sYWJlbERldGFpbHNTY2VuZUVycm9yLmhpZGRlbiA9ICF0aGlzLmxhYmVsRGV0YWlsc1NjZW5lRXJyb3IuaGlkZGVuO1xuICAgICAgICBjb2xEZXRhaWxzU2NlbmVFcnJvci5tYXhIZWlnaHQgPSAhdGhpcy5sYWJlbERldGFpbHNTY2VuZUVycm9yLmhpZGRlbiA/IDEwMCA6IDA7XG4gICAgfSk7XG5cbiAgICB0aGlzLmFkZChtZW51U2NlbmVFcnJvcik7XG4gIH1cblxuICBzZXQgZXJyb3JUZXh0KHRleHQpIHtcbiAgICB0aGlzLmxhYmVsRGV0YWlsc1NjZW5lRXJyb3IudGV4dCA9IHRleHQ7XG4gIH1cblxuICBnZXQgZXJyb3JUZXh0KCkge1xuICAgIHJldHVybiB0aGlzLmxhYmVsRGV0YWlsc1NjZW5lRXJyb3IudGV4dDtcbiAgfVxufSIsIi8qXG4gKiBDb3B5cmlnaHQgKEMpIDIwMjAgRWxpYXN0aWsgKGVsaWFzdGlrc29mdHMuY29tKVxuICpcbiAqIFRoaXMgZmlsZSBpcyBwYXJ0IG9mIFwiSlNHYW1lVG9vbHNcIi5cbiAqXG4gKiBcIkpTR2FtZVRvb2xzXCIgaXMgZnJlZSBzb2Z0d2FyZTogeW91IGNhbiByZWRpc3RyaWJ1dGUgaXQgYW5kL29yIG1vZGlmeVxuICogaXQgdW5kZXIgdGhlIHRlcm1zIG9mIHRoZSBHTlUgR2VuZXJhbCBQdWJsaWMgTGljZW5zZSBhcyBwdWJsaXNoZWQgYnlcbiAqIHRoZSBGcmVlIFNvZnR3YXJlIEZvdW5kYXRpb24sIGVpdGhlciB2ZXJzaW9uIDMgb2YgdGhlIExpY2Vuc2UsIG9yXG4gKiAoYXQgeW91ciBvcHRpb24pIGFueSBsYXRlciB2ZXJzaW9uLlxuICpcbiAqIFwiSlNHYW1lVG9vbHNcIiBpcyBkaXN0cmlidXRlZCBpbiB0aGUgaG9wZSB0aGF0IGl0IHdpbGwgYmUgdXNlZnVsLFxuICogYnV0IFdJVEhPVVQgQU5ZIFdBUlJBTlRZOyB3aXRob3V0IGV2ZW4gdGhlIGltcGxpZWQgd2FycmFudHkgb2ZcbiAqIE1FUkNIQU5UQUJJTElUWSBvciBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRS4gIFNlZSB0aGVcbiAqIEdOVSBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlIGZvciBtb3JlIGRldGFpbHMuXG4gKlxuICogWW91IHNob3VsZCBoYXZlIHJlY2VpdmVkIGEgY29weSBvZiB0aGUgR05VIEdlbmVyYWwgUHVibGljIExpY2Vuc2VcbiAqIGFsb25nIHdpdGggXCJKU0dhbWVUb29sc1wiLiAgSWYgbm90LCBzZWUgPGh0dHA6Ly93d3cuZ251Lm9yZy9saWNlbnNlcy8+LlxuICovXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBFdmVudCB7XG4gIGNvbnN0cnVjdG9yKG5hbWUpIHtcbiAgICB0aGlzLm5hbWUgPSBuYW1lO1xuICAgIHRoaXMuY2FsbGJhY2tzID0gW107XG4gIH1cblxuICByZWdpc3RlckNhbGxiYWNrKGNhbGxiYWNrKSB7XG4gICAgdGhpcy5jYWxsYmFja3MucHVzaChjYWxsYmFjayk7XG4gIH1cblxuICByZW1vdmVDYWxsYmFjayhjYWxsYmFjaykge1xuICAgIHRoaXMuY2FsbGJhY2tzLmZpbHRlcihjdXJyZW50ID0+IGN1cnJlbnQgIT0gY2FsbGJhY2spO1xuICB9XG5cbiAgcmVtb3ZlQWxsQ2FsbGJhY2tzKCkge1xuICAgIHRoaXMuY2FsbGJhY2tzID0gW107XG4gIH1cbn0iLCIvKlxuICogQ29weXJpZ2h0IChDKSAyMDIwIEVsaWFzdGlrIChlbGlhc3Rpa3NvZnRzLmNvbSlcbiAqXG4gKiBUaGlzIGZpbGUgaXMgcGFydCBvZiBcIkpTR2FtZVRvb2xzXCIuXG4gKlxuICogXCJKU0dhbWVUb29sc1wiIGlzIGZyZWUgc29mdHdhcmU6IHlvdSBjYW4gcmVkaXN0cmlidXRlIGl0IGFuZC9vciBtb2RpZnlcbiAqIGl0IHVuZGVyIHRoZSB0ZXJtcyBvZiB0aGUgR05VIEdlbmVyYWwgUHVibGljIExpY2Vuc2UgYXMgcHVibGlzaGVkIGJ5XG4gKiB0aGUgRnJlZSBTb2Z0d2FyZSBGb3VuZGF0aW9uLCBlaXRoZXIgdmVyc2lvbiAzIG9mIHRoZSBMaWNlbnNlLCBvclxuICogKGF0IHlvdXIgb3B0aW9uKSBhbnkgbGF0ZXIgdmVyc2lvbi5cbiAqXG4gKiBcIkpTR2FtZVRvb2xzXCIgaXMgZGlzdHJpYnV0ZWQgaW4gdGhlIGhvcGUgdGhhdCBpdCB3aWxsIGJlIHVzZWZ1bCxcbiAqIGJ1dCBXSVRIT1VUIEFOWSBXQVJSQU5UWTsgd2l0aG91dCBldmVuIHRoZSBpbXBsaWVkIHdhcnJhbnR5IG9mXG4gKiBNRVJDSEFOVEFCSUxJVFkgb3IgRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UuICBTZWUgdGhlXG4gKiBHTlUgR2VuZXJhbCBQdWJsaWMgTGljZW5zZSBmb3IgbW9yZSBkZXRhaWxzLlxuICpcbiAqIFlvdSBzaG91bGQgaGF2ZSByZWNlaXZlZCBhIGNvcHkgb2YgdGhlIEdOVSBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlXG4gKiBhbG9uZyB3aXRoIFwiSlNHYW1lVG9vbHNcIi4gIElmIG5vdCwgc2VlIDxodHRwOi8vd3d3LmdudS5vcmcvbGljZW5zZXMvPi5cbiAqL1xuaW1wb3J0IExhYmVsIGZyb20gXCIuL0xhYmVsXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEZQU01ldGVyIGV4dGVuZHMgTGFiZWwge1xuICBzZWxlY3RhYmxlID0gZmFsc2U7XG5cbiAgY29uc3RydWN0b3IoZGlzcGxheUZyYW1lcywgeCwgeSwgc3R5bGUpIHtcbiAgICBzdXBlcihudWxsLCB4LCB5LCBzdHlsZSk7XG5cbiAgICB0aGlzLmRpc3BsYXlGcmFtZXMgPSBkaXNwbGF5RnJhbWVzIHx8IGZhbHNlO1xuICAgIHRoaXMuZnJhbWVzID0gMDtcbiAgICB0aGlzLmxhc3RGcmFtZSA9IDA7XG4gICAgdGhpcy5jdXJyZW50RlBTID0gMDtcblxuICAgIHRoaXMuaW50ZXJ2YWxDb3VudEZQUyA9IHNldEludGVydmFsKCgpID0+IHRoaXMuY291bnRGUFMoKSwgMTAwMCk7XG4gIH1cblxuICBkcmF3KGNvbnRleHQpIHtcbiAgICBpZih0aGlzLmhpZGRlbikgcmV0dXJuO1xuICAgIHRoaXMudGV4dCA9IFwiRlBTOiBcIiArIHRoaXMuY3VycmVudEZQUyArICh0aGlzLmRpc3BsYXlGcmFtZXMgPyBcIiAvIEZyYW1lczogXCIgKyB0aGlzLmZyYW1lcyA6IFwiXCIpO1xuICAgIHN1cGVyLmRyYXcoY29udGV4dCk7XG4gICAgdGhpcy5mcmFtZXMrKztcbiAgfVxuXG4gIGNvdW50RlBTKCkge1xuICAgIGlmKHRoaXMubGFzdEZyYW1lID4gMCkgdGhpcy5jdXJyZW50RlBTID0gdGhpcy5mcmFtZXMgLSB0aGlzLmxhc3RGcmFtZTtcbiAgICB0aGlzLmxhc3RGcmFtZSA9IHRoaXMuZnJhbWVzO1xuICB9XG59IiwiLypcbiAqIENvcHlyaWdodCAoQykgMjAyMCBFbGlhc3RpayAoZWxpYXN0aWtzb2Z0cy5jb20pXG4gKlxuICogVGhpcyBmaWxlIGlzIHBhcnQgb2YgXCJKU0dhbWVUb29sc1wiLlxuICpcbiAqIFwiSlNHYW1lVG9vbHNcIiBpcyBmcmVlIHNvZnR3YXJlOiB5b3UgY2FuIHJlZGlzdHJpYnV0ZSBpdCBhbmQvb3IgbW9kaWZ5XG4gKiBpdCB1bmRlciB0aGUgdGVybXMgb2YgdGhlIEdOVSBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlIGFzIHB1Ymxpc2hlZCBieVxuICogdGhlIEZyZWUgU29mdHdhcmUgRm91bmRhdGlvbiwgZWl0aGVyIHZlcnNpb24gMyBvZiB0aGUgTGljZW5zZSwgb3JcbiAqIChhdCB5b3VyIG9wdGlvbikgYW55IGxhdGVyIHZlcnNpb24uXG4gKlxuICogXCJKU0dhbWVUb29sc1wiIGlzIGRpc3RyaWJ1dGVkIGluIHRoZSBob3BlIHRoYXQgaXQgd2lsbCBiZSB1c2VmdWwsXG4gKiBidXQgV0lUSE9VVCBBTlkgV0FSUkFOVFk7IHdpdGhvdXQgZXZlbiB0aGUgaW1wbGllZCB3YXJyYW50eSBvZlxuICogTUVSQ0hBTlRBQklMSVRZIG9yIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFLiAgU2VlIHRoZVxuICogR05VIEdlbmVyYWwgUHVibGljIExpY2Vuc2UgZm9yIG1vcmUgZGV0YWlscy5cbiAqXG4gKiBZb3Ugc2hvdWxkIGhhdmUgcmVjZWl2ZWQgYSBjb3B5IG9mIHRoZSBHTlUgR2VuZXJhbCBQdWJsaWMgTGljZW5zZVxuICogYWxvbmcgd2l0aCBcIkpTR2FtZVRvb2xzXCIuICBJZiBub3QsIHNlZSA8aHR0cDovL3d3dy5nbnUub3JnL2xpY2Vuc2VzLz4uXG4gKi9cbmltcG9ydCBVdGlscyBmcm9tIFwiLi9VdGlsc1wiO1xuaW1wb3J0IENvbXBvbmVudCBmcm9tIFwiLi9Db21wb25lbnRcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgSW1hZ2VDb250YWluZXIgZXh0ZW5kcyBDb21wb25lbnQge1xuICBzZWxlY3RhYmxlID0gZmFsc2U7XG5cbiAgY29uc3RydWN0b3IoaW1hZ2UsIHgsIHksIHdpZHRoLCBoZWlnaHQsIHN0eWxlLCBpbWFnZUxvYWRlcikge1xuICAgIHN1cGVyKHgsIHksIHdpZHRoLCBoZWlnaHQsIHN0eWxlKTtcbiAgICB0aGlzLmltYWdlO1xuICAgIHRoaXMuaW1nU3JjO1xuICAgIHRoaXMuaW1hZ2VMb2FkZXIgPSBpbWFnZUxvYWRlcjtcblxuICAgIGlmKGltYWdlIGluc3RhbmNlb2YgSW1hZ2UpIHtcbiAgICAgIHRoaXMuaW1hZ2UgPSBpbWFnZTtcbiAgICAgIHRoaXMuaW1nU3JjID0gaW1hZ2Uuc3JjO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmltZ1NyYyA9IGltYWdlO1xuICAgIH1cbiAgfVxuXG4gIGRyYXcoY29udGV4dCkge1xuICAgIGlmKHRoaXMuaGlkZGVuKSByZXR1cm47XG4gICAgc3VwZXIuZHJhdyhjb250ZXh0KTtcbiAgICBcbiAgICBjb25zdCBjYW52YXMgPSBjb250ZXh0LmNhbnZhcztcbiAgICBjb25zdCBjdHggPSBjYW52YXMuZ2V0Q29udGV4dChcIjJkXCIpO1xuICAgIGN0eC5zYXZlKCk7XG4gICAgXG4gICAgaWYodGhpcy5pbWdTcmMgIT0gbnVsbCAmJiB0aGlzLmltYWdlTG9hZGVyICE9IG51bGwpIHtcbiAgICAgIHRoaXMubG9hZEltYWdlKHRoaXMuaW1hZ2VMb2FkZXIpO1xuICAgIH1cblxuICAgIGlmKHRoaXMuaW1hZ2UgIT0gbnVsbCkge1xuICAgICAgdGhpcy5kcmF3SW1hZ2UoY3R4KTtcbiAgICB9XG5cbiAgICBjdHgucmVzdG9yZSgpO1xuICB9XG5cbiAgZHJhd0ltYWdlKGN0eCkge1xuICAgIFV0aWxzLmRyYXdJbWFnZShjdHgsIHRoaXMuaW1hZ2UsIE1hdGgucm91bmQodGhpcy54KSwgTWF0aC5yb3VuZCh0aGlzLnkpLCBNYXRoLnJvdW5kKHRoaXMud2lkdGgpLCBNYXRoLnJvdW5kKHRoaXMuaGVpZ2h0KSk7XG4gIH1cblxuICBnZXQgc2l6ZXMoKSB7XG4gICAgbGV0IGltZ1dpZHRoID0gc3VwZXIud2lkdGg7XG4gICAgbGV0IGltZ0hlaWdodCA9IHN1cGVyLmhlaWdodDtcblxuICAgIGlmKHRoaXMuaW1hZ2VMb2FkZXIpIHtcbiAgICAgIHRoaXMubG9hZEltYWdlKHRoaXMuaW1hZ2VMb2FkZXIpO1xuICAgIH1cbiAgICBcbiAgICBpZih0aGlzLmltYWdlICYmICh0aGlzLmltYWdlLndpZHRoID4gc3VwZXIud2lkdGggfHwgdGhpcy5pbWFnZS5oZWlnaHQgPiBzdXBlci5oZWlnaHQpKSB7XG4gICAgICBjb25zdCBhc3BlY3RSYXRpbyA9IHRoaXMuaW1hZ2Uud2lkdGggLyB0aGlzLmltYWdlLmhlaWdodDtcbiAgICAgIGltZ1dpZHRoID0gTWF0aC5mbG9vcihzdXBlci53aWR0aCAvIDEuMjUpO1xuICAgICAgaW1nSGVpZ2h0ID0gTWF0aC5mbG9vcihpbWdXaWR0aCAvIGFzcGVjdFJhdGlvKTtcbiAgICB9XG5cbiAgICByZXR1cm4ge1xuICAgICAgd2lkdGg6IGltZ1dpZHRoLFxuICAgICAgaGVpZ2h0OiBpbWdIZWlnaHRcbiAgICB9XG4gIH1cblxuICBnZXQgaGVpZ2h0KCkge1xuICAgIHJldHVybiB0aGlzLnNpemVzLmhlaWdodDtcbiAgfVxuXG4gIGdldCB3aWR0aCgpIHtcbiAgICByZXR1cm4gdGhpcy5zaXplcy53aWR0aDtcbiAgfVxuXG4gIHNldCB3aWR0aCh3aWR0aCkge1xuICAgIHN1cGVyLndpZHRoID0gd2lkdGg7XG4gIH1cblxuICBzZXQgaGVpZ2h0KGhlaWdodCkge1xuICAgIHN1cGVyLmhlaWdodCA9IGhlaWdodDtcbiAgfVxuICBcbiAgbG9hZEltYWdlKGltYWdlTG9hZGVyKSB7XG4gICAgdGhpcy5pbWFnZSA9IGltYWdlTG9hZGVyLmdldCh0aGlzLmltZ1NyYyk7XG4gIH1cbn0iLCIvKlxuICogQ29weXJpZ2h0IChDKSAyMDIwIEVsaWFzdGlrIChlbGlhc3Rpa3NvZnRzLmNvbSlcbiAqXG4gKiBUaGlzIGZpbGUgaXMgcGFydCBvZiBcIkpTR2FtZVRvb2xzXCIuXG4gKlxuICogXCJKU0dhbWVUb29sc1wiIGlzIGZyZWUgc29mdHdhcmU6IHlvdSBjYW4gcmVkaXN0cmlidXRlIGl0IGFuZC9vciBtb2RpZnlcbiAqIGl0IHVuZGVyIHRoZSB0ZXJtcyBvZiB0aGUgR05VIEdlbmVyYWwgUHVibGljIExpY2Vuc2UgYXMgcHVibGlzaGVkIGJ5XG4gKiB0aGUgRnJlZSBTb2Z0d2FyZSBGb3VuZGF0aW9uLCBlaXRoZXIgdmVyc2lvbiAzIG9mIHRoZSBMaWNlbnNlLCBvclxuICogKGF0IHlvdXIgb3B0aW9uKSBhbnkgbGF0ZXIgdmVyc2lvbi5cbiAqXG4gKiBcIkpTR2FtZVRvb2xzXCIgaXMgZGlzdHJpYnV0ZWQgaW4gdGhlIGhvcGUgdGhhdCBpdCB3aWxsIGJlIHVzZWZ1bCxcbiAqIGJ1dCBXSVRIT1VUIEFOWSBXQVJSQU5UWTsgd2l0aG91dCBldmVuIHRoZSBpbXBsaWVkIHdhcnJhbnR5IG9mXG4gKiBNRVJDSEFOVEFCSUxJVFkgb3IgRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UuICBTZWUgdGhlXG4gKiBHTlUgR2VuZXJhbCBQdWJsaWMgTGljZW5zZSBmb3IgbW9yZSBkZXRhaWxzLlxuICpcbiAqIFlvdSBzaG91bGQgaGF2ZSByZWNlaXZlZCBhIGNvcHkgb2YgdGhlIEdOVSBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlXG4gKiBhbG9uZyB3aXRoIFwiSlNHYW1lVG9vbHNcIi4gIElmIG5vdCwgc2VlIDxodHRwOi8vd3d3LmdudS5vcmcvbGljZW5zZXMvPi5cbiAqL1xuaW1wb3J0IFV0aWxzIGZyb20gXCIuL1V0aWxzXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEltYWdlTG9hZGVyIHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgdGhpcy5pbWFnZXMgPSB7fTtcbiAgICB0aGlzLmltYWdlc1Jlc2l6ZWQgPSB7fTtcbiAgICB0aGlzLnRyaWVkTG9hZGluZyA9IDA7XG4gICAgdGhpcy5oYXNFcnJvciA9IGZhbHNlO1xuICAgIHRoaXMubmJJbWFnZXNUb0xvYWQgPSAxO1xuICAgIHRoaXMuZmlyc3RJbWFnZSA9IHRydWU7XG4gIH1cblxuICBsb2FkKGltZywgZnVuYykge1xuICAgIGlmKHRoaXMuZmlyc3RJbWFnZSkge1xuICAgICAgdGhpcy5uYkltYWdlc1RvTG9hZCA9IGltZy5sZW5ndGg7XG4gICAgICB0aGlzLmZpcnN0SW1hZ2UgPSBmYWxzZTtcbiAgICB9XG4gICAgXG4gICAgaWYoaW1nLmxlbmd0aCA+IDApIHtcbiAgICAgIHRoaXMubG9hZEltYWdlKGltZ1swXSwgcmVzdWx0ID0+IHtcbiAgICAgICAgaWYocmVzdWx0ID09IHRydWUpIHtcbiAgICAgICAgICBpbWcuc2hpZnQoKTtcbiAgICAgICAgICB0aGlzLmxvYWQoaW1nLCBmdW5jKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB0aGlzLmhhc0Vycm9yID0gdHJ1ZTtcbiAgICAgICAgICByZXR1cm4gZnVuYygpO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIGZ1bmMoKTtcbiAgICB9XG4gIH1cblxuICBsb2FkSW1hZ2Uoc3JjLCBmdW5jKSB7XG4gICAgdGhpcy50cmllZExvYWRpbmcrKztcbiAgXG4gICAgY29uc3QgaW1hZ2UgPSBuZXcgSW1hZ2UoKTtcbiAgICBpbWFnZS5zcmMgPSBzcmM7XG4gIFxuICAgIGltYWdlLm9ubG9hZCA9ICgpID0+IHtcbiAgICAgIGlmKHRoaXMuaW1hZ2VzICE9IG51bGwpIHtcbiAgICAgICAgdGhpcy5pbWFnZXNbc3JjXSA9IGltYWdlO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIGZ1bmMoZmFsc2UpO1xuICAgICAgfVxuICBcbiAgICAgIHRoaXMudHJpZWRMb2FkaW5nID0gMDtcbiAgICAgIHJldHVybiBmdW5jKHRydWUpO1xuICAgIH07XG4gIFxuICAgIGltYWdlLm9uZXJyb3IgPSAoKSA9PiB7XG4gICAgICBpZih0aGlzLnRyaWVkTG9hZGluZyA+PSA1KSB7XG4gICAgICAgIGlmKHRoaXMuaW1hZ2VzICE9IG51bGwpIHtcbiAgICAgICAgICB0aGlzLmltYWdlc1tzcmNdID0gaW1hZ2U7XG4gICAgICAgIH1cbiAgXG4gICAgICAgIHRoaXMudHJpZWRMb2FkaW5nID0gMDtcbiAgICAgICAgcmV0dXJuIGZ1bmMoZmFsc2UpO1xuICAgICAgfVxuICBcbiAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICB0aGlzLmxvYWRJbWFnZShzcmMsIGZ1bmMpO1xuICAgICAgfSwgMjUwKTtcbiAgICB9XG4gIH1cblxuICBnZXQoc3JjLCB3aWR0aCwgaGVpZ2h0KSB7XG4gICAgaWYodGhpcy5pbWFnZXMgIT0gbnVsbCAmJiB0aGlzLmltYWdlcy5oYXNPd25Qcm9wZXJ0eShzcmMpKSB7XG4gICAgICBjb25zdCBpbWFnZSA9IHRoaXMuaW1hZ2VzW3NyY107XG5cbiAgICAgIGlmKCh3aWR0aCB8fCBoZWlnaHQpICYmIChpbWFnZS53aWR0aCAhPSB3aWR0aCB8fCBpbWFnZS5oZWlnaHQgIT0gaGVpZ2h0KSkge1xuICAgICAgICBjb25zdCB3ID0gTWF0aC5yb3VuZCh3aWR0aCk7XG4gICAgICAgIGNvbnN0IGggPSBNYXRoLnJvdW5kKGhlaWdodCk7XG4gICAgICAgIGNvbnN0IGlkID0gc3JjICsgXCJAXCIgKyB3ICsgXCItXCIgKyBoO1xuXG4gICAgICAgIGlmKCF0aGlzLmltYWdlc1Jlc2l6ZWQuaGFzT3duUHJvcGVydHkoaWQpKSB7XG4gICAgICAgICAgY29uc3QgY2FudmFzVG1wID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImNhbnZhc1wiKTtcbiAgICAgICAgICBjb25zdCBjdHggPSBjYW52YXNUbXAuZ2V0Q29udGV4dChcIjJkXCIpO1xuICAgICAgICAgIGNhbnZhc1RtcC53aWR0aCA9IHc7XG4gICAgICAgICAgY2FudmFzVG1wLmhlaWdodCA9IGg7XG5cbiAgICAgICAgICBVdGlscy5kcmF3SW1hZ2UoY3R4LCBpbWFnZSwgMCwgMCwgdywgaCwgMCwgMCwgaW1hZ2Uud2lkdGgsIGltYWdlLmhlaWdodCk7XG4gICAgICAgICAgdGhpcy5pbWFnZXNSZXNpemVkW2lkXSA9IGNhbnZhc1RtcDtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB0aGlzLmltYWdlc1Jlc2l6ZWRbaWRdO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIGltYWdlO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG4gIH1cblxuICBjbGVhcigpIHtcbiAgICB0aGlzLmltYWdlcyA9IG51bGw7XG4gIH1cbn0iLCIvKlxuICogQ29weXJpZ2h0IChDKSAyMDIwIEVsaWFzdGlrIChlbGlhc3Rpa3NvZnRzLmNvbSlcbiAqXG4gKiBUaGlzIGZpbGUgaXMgcGFydCBvZiBcIkpTR2FtZVRvb2xzXCIuXG4gKlxuICogXCJKU0dhbWVUb29sc1wiIGlzIGZyZWUgc29mdHdhcmU6IHlvdSBjYW4gcmVkaXN0cmlidXRlIGl0IGFuZC9vciBtb2RpZnlcbiAqIGl0IHVuZGVyIHRoZSB0ZXJtcyBvZiB0aGUgR05VIEdlbmVyYWwgUHVibGljIExpY2Vuc2UgYXMgcHVibGlzaGVkIGJ5XG4gKiB0aGUgRnJlZSBTb2Z0d2FyZSBGb3VuZGF0aW9uLCBlaXRoZXIgdmVyc2lvbiAzIG9mIHRoZSBMaWNlbnNlLCBvclxuICogKGF0IHlvdXIgb3B0aW9uKSBhbnkgbGF0ZXIgdmVyc2lvbi5cbiAqXG4gKiBcIkpTR2FtZVRvb2xzXCIgaXMgZGlzdHJpYnV0ZWQgaW4gdGhlIGhvcGUgdGhhdCBpdCB3aWxsIGJlIHVzZWZ1bCxcbiAqIGJ1dCBXSVRIT1VUIEFOWSBXQVJSQU5UWTsgd2l0aG91dCBldmVuIHRoZSBpbXBsaWVkIHdhcnJhbnR5IG9mXG4gKiBNRVJDSEFOVEFCSUxJVFkgb3IgRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UuICBTZWUgdGhlXG4gKiBHTlUgR2VuZXJhbCBQdWJsaWMgTGljZW5zZSBmb3IgbW9yZSBkZXRhaWxzLlxuICpcbiAqIFlvdSBzaG91bGQgaGF2ZSByZWNlaXZlZCBhIGNvcHkgb2YgdGhlIEdOVSBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlXG4gKiBhbG9uZyB3aXRoIFwiSlNHYW1lVG9vbHNcIi4gIElmIG5vdCwgc2VlIDxodHRwOi8vd3d3LmdudS5vcmcvbGljZW5zZXMvPi5cbiAqL1xuaW1wb3J0IENvbnN0YW50cyBmcm9tIFwiLi9Db25zdGFudHNcIjtcbmltcG9ydCBVdGlscyBmcm9tIFwiLi9VdGlsc1wiO1xuaW1wb3J0IEJveCBmcm9tIFwiLi9Cb3hcIjtcbmltcG9ydCBTdHlsZSBmcm9tIFwiLi9TdHlsZVwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBJbnB1dCBleHRlbmRzIEJveCB7XG4gIHNlbGVjdGFibGUgPSB0cnVlO1xuICAjX3Bvc2l0aW9uU3RhcnQgPSAwO1xuICAjX3Bvc2l0aW9uU3RhcnRDbGljayA9IDA7XG4gICNfcG9zaXRpb25FbmQgPSAwO1xuXG4gIGNvbnN0cnVjdG9yKHgsIHksIHdpZHRoLCBoZWlnaHQsIHN0eWxlLCBkZWZhdWx0VGV4dCkge1xuICAgIHN1cGVyKHgsIHksIHdpZHRoLCBoZWlnaHQsIHN0eWxlKTtcbiAgICBcbiAgICB0aGlzLnRleHQgPSBkZWZhdWx0VGV4dCB8fCBcIlwiO1xuICAgIHRoaXMuI19wb3NpdGlvblN0YXJ0ID0gMDtcbiAgICB0aGlzLiNfcG9zaXRpb25FbmQgPSAwO1xuICAgIHRoaXMuI19wb3NpdGlvblN0YXJ0Q2xpY2sgPSAwO1xuICAgIHRoaXMubGFzdElucHV0VGV4dCA9IGZhbHNlO1xuICAgIHRoaXMub2Zmc2V0WCA9IDA7XG4gICAgdGhpcy5sYXN0VGltZSA9IDA7XG4gICAgdGhpcy50b3RhbFRpbWUgPSAwO1xuICAgIHRoaXMuY2xpY2tDdXJyZW50UG9zaXRpb24gPSBudWxsO1xuICAgIHRoaXMudGV4dENhY2hlID0gbnVsbDtcblxuICAgIHRoaXMuaW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XG4gICAgdGhpcy5pbnB1dC5zZXRBdHRyaWJ1dGUoXCJ0eXBlXCIsIFwidGV4dFwiKTtcbiAgICB0aGlzLmlucHV0LnN0eWxlLnBvc2l0aW9uID0gXCJhYnNvbHV0ZVwiO1xuICAgIHRoaXMuaW5wdXQuc3R5bGUubGVmdCA9IFwiLTk5OTlweFwiO1xuICAgIHRoaXMuaW5wdXQudGFiSW5kZXggPSAtMTtcbiAgICB0aGlzLmlucHV0LnZhbHVlID0gdGhpcy50ZXh0O1xuICAgIHRoaXMuaW5wdXQuYWRkRXZlbnRMaXN0ZW5lcihcImJsdXJcIiwgKCkgPT4gdGhpcy5zZWxlY3RlZCA9IGZhbHNlKTtcbiAgICB0aGlzLmlucHV0LmFkZEV2ZW50TGlzdGVuZXIoXCJmb2N1c1wiLCAoKSA9PiB0aGlzLnNlbGVjdGVkID0gdHJ1ZSk7XG4gICAgdGhpcy5pbnB1dC5hZGRFdmVudExpc3RlbmVyKFwiaW5wdXRcIiwgKCkgPT4ge1xuICAgICAgdGhpcy50b3RhbFRpbWUgPSAwXG4gICAgICB0aGlzLmxhc3RJbnB1dFRleHQgPSB0cnVlO1xuICAgICAgdGhpcy5wb3NpdGlvblN0YXJ0ID0gdGhpcy5pbnB1dC5zZWxlY3Rpb25TdGFydDtcbiAgICAgIHRoaXMucG9zaXRpb25FbmQgPSB0aGlzLmlucHV0LnNlbGVjdGlvbkVuZDtcbiAgICB9KTtcblxuICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQodGhpcy5pbnB1dCk7XG5cbiAgICB0aGlzLmFwcGVuZFRvQ2FudmFzID0gZmFsc2U7XG4gICAgdGhpcy5ub3RpY2VMb2dnZWQgPSBmYWxzZTtcblxuICAgIHRoaXMuY2FudmFzVG1wID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImNhbnZhc1wiKTtcblxuICAgIGNvbnN0IG1vdmVBY3Rpb25DYWxsYmFjayA9IChkZWx0YVgsIGRlbHRhWSwgcG9zaXRpb24pID0+IHtcbiAgICAgIGlmKHBvc2l0aW9uKSB7XG4gICAgICAgIGNvbnN0IGlDbGljayA9IHRoaXMuZ2V0TGV0dGVyQ2xpY2tlZChwb3NpdGlvbik7XG4gIFxuICAgICAgICBpZihpQ2xpY2sgIT0gbnVsbCkge1xuICAgICAgICAgIGlmKGlDbGljayA+IHRoaXMucG9zaXRpb25TdGFydENsaWNrKSB7XG4gICAgICAgICAgICB0aGlzLnNldFNlbGVjdGlvblJhbmdlKHRoaXMucG9zaXRpb25TdGFydENsaWNrLCBpQ2xpY2ssIFwiZm9yd2FyZFwiKTtcbiAgICAgICAgICB9IGVsc2UgaWYoaUNsaWNrIDwgdGhpcy5wb3NpdGlvblN0YXJ0Q2xpY2spIHtcbiAgICAgICAgICAgIHRoaXMuc2V0U2VsZWN0aW9uUmFuZ2UoaUNsaWNrLCB0aGlzLnBvc2l0aW9uU3RhcnRDbGljaywgXCJiYWNrd2FyZFwiKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9O1xuXG4gICAgdGhpcy5hZGREb3duQWN0aW9uKHBvc2l0aW9uID0+IHtcbiAgICAgIGNvbnN0IGlDbGljayA9IHRoaXMuZ2V0TGV0dGVyQ2xpY2tlZChwb3NpdGlvbik7XG5cbiAgICAgIGlmKGlDbGljayAhPSBudWxsKSB7XG4gICAgICAgIHRoaXMucG9zaXRpb25TdGFydENsaWNrID0gaUNsaWNrO1xuICAgICAgICB0aGlzLnNldFNlbGVjdGlvblJhbmdlKGlDbGljaywgaUNsaWNrLCBcImZvcndhcmRcIik7XG4gICAgICB9XG5cbiAgICAgIHRoaXMudG90YWxUaW1lID0gMDtcbiAgICB9KTtcblxuICAgIHRoaXMuYWRkQ2xpY2tBY3Rpb24oKCkgPT4gdGhpcy5jbGljaygpKTtcbiAgICB0aGlzLmFkZE1vdmVBY3Rpb24obW92ZUFjdGlvbkNhbGxiYWNrKTtcbiAgICB0aGlzLmFkZFNjcm9sbEFjdGlvbihtb3ZlQWN0aW9uQ2FsbGJhY2spO1xuICB9XG5cbiAgZHJhdyhjb250ZXh0KSB7XG4gICAgaWYodGhpcy5oaWRkZW4pIHJldHVybjtcbiAgICBzdXBlci5kcmF3KGNvbnRleHQpO1xuICAgIFxuICAgIGNvbnN0IGNhbnZhcyA9IGNvbnRleHQuY2FudmFzO1xuICAgIGNvbnN0IGN0eCA9IGNhbnZhcy5nZXRDb250ZXh0KFwiMmRcIik7XG4gICAgY3R4LnNhdmUoKTtcblxuICAgIGlmKHRoaXMuaW5wdXQuc2VsZWN0aW9uRW5kICE9IHRoaXMucG9zaXRpb25FbmQpIHRoaXMudG90YWxUaW1lID0gMDtcblxuICAgIGlmKHRoaXMuY2FudmFzICYmIHRoaXMuY2FudmFzLmNvbnRhaW5lciAmJiAhdGhpcy5hcHBlbmRUb0NhbnZhcykge1xuICAgICAgZG9jdW1lbnQuYm9keS5yZW1vdmVDaGlsZCh0aGlzLmlucHV0KTtcbiAgICAgIHRoaXMuY2FudmFzLmNvbnRhaW5lci5hcHBlbmRDaGlsZCh0aGlzLmlucHV0KTtcbiAgICAgIHRoaXMuYXBwZW5kVG9DYW52YXMgPSB0cnVlO1xuICAgIH0gZWxzZSBpZighdGhpcy5jYW52YXMgJiYgIXRoaXMubm90aWNlTG9nZ2VkKSB7XG4gICAgICBjb25zb2xlICYmIGNvbnNvbGUud2FybiAmJiBjb25zb2xlLndhcm4oQ29uc3RhbnRzLlN0cmluZy5XQVJOSU5HX01FU1NBR0UgKyBcIiBcIiArIENvbnN0YW50cy5TdHJpbmcuSU5QVVRfRlVMTFNDUkVFTik7XG4gICAgICB0aGlzLm5vdGljZUxvZ2dlZCA9IHRydWU7XG4gICAgfVxuXG4gICAgaWYodGhpcy5zZWxlY3RlZCAmJiAhdGhpcy5kaXNhYmxlZCkge1xuICAgICAgdGhpcy5jbGljaygpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmJsdXIoKTtcbiAgICB9XG5cbiAgICB0aGlzLnRleHQgPSB0aGlzLmlucHV0LnZhbHVlO1xuICAgIHRoaXMucG9zaXRpb25TdGFydCA9IHRoaXMuaW5wdXQuc2VsZWN0aW9uU3RhcnQ7XG4gICAgdGhpcy5wb3NpdGlvbkVuZCA9IHRoaXMuaW5wdXQuc2VsZWN0aW9uRW5kO1xuXG4gICAgY29uc3QgdGltZSA9IHBlcmZvcm1hbmNlLm5vdygpO1xuICAgIGxldCBvZmZzZXRUaW1lID0gMDtcblxuICAgIGlmKHRoaXMubGFzdFRpbWUgPiAwKSBvZmZzZXRUaW1lID0gdGltZSAtIHRoaXMubGFzdFRpbWU7XG4gICAgdGhpcy5sYXN0VGltZSA9IHRpbWU7XG4gICAgdGhpcy50b3RhbFRpbWUgKz0gb2Zmc2V0VGltZTtcblxuICAgIHRoaXMuZHJhd0JhY2tncm91bmQoY3R4KTtcbiAgICB0aGlzLmRyYXdCb3JkZXIoY3R4KTtcblxuICAgIHRoaXMuY2FudmFzVG1wLndpZHRoID0gVXRpbHMuZ2V0Q2FudmFzV2lkdGgoY2FudmFzKSAqIENvbnN0YW50cy5TZXR0aW5nLlBJWEVMX1JBVElPO1xuICAgIHRoaXMuY2FudmFzVG1wLmhlaWdodCA9IFV0aWxzLmdldENhbnZhc0hlaWdodChjYW52YXMpICogQ29uc3RhbnRzLlNldHRpbmcuUElYRUxfUkFUSU87XG4gICAgdGhpcy5jYW52YXNUbXAuc3R5bGUud2lkdGggPSBVdGlscy5nZXRDYW52YXNXaWR0aChjYW52YXMpO1xuICAgIHRoaXMuY2FudmFzVG1wLnN0eWxlLmhlaWdodCA9IFV0aWxzLmdldENhbnZhc0hlaWdodChjYW52YXMpO1xuICAgIGNvbnN0IGN0eFRleHQgPSB0aGlzLmNhbnZhc1RtcC5nZXRDb250ZXh0KFwiMmRcIik7XG4gICAgVXRpbHMuY2xlYXIoY3R4VGV4dCk7XG4gICAgY3R4VGV4dC5zY2FsZShDb25zdGFudHMuU2V0dGluZy5QSVhFTF9SQVRJTywgQ29uc3RhbnRzLlNldHRpbmcuUElYRUxfUkFUSU8pO1xuXG4gICAgdGhpcy51cGRhdGVUZXh0Q2FjaGUodGhpcy54ICsgNSk7XG4gICAgdGhpcy5hdXRvU2Nyb2xsKCk7XG4gICAgdGhpcy5kcmF3VGV4dChjdHhUZXh0LCB0aGlzLnggKyA1KTtcblxuICAgIFV0aWxzLmRyYXdJbWFnZURhdGEoY3R4LCB0aGlzLmNhbnZhc1RtcCwgdGhpcy54ICsgdGhpcy5zdHlsZS5ib3JkZXJTaXplLCB0aGlzLnkgKyB0aGlzLnN0eWxlLmJvcmRlclNpemUsIHRoaXMud2lkdGggLSB0aGlzLnN0eWxlLmJvcmRlclNpemUgKiAyLCB0aGlzLmhlaWdodCAtIHRoaXMuc3R5bGUuYm9yZGVyU2l6ZSAqIDIsICh0aGlzLnggKyB0aGlzLnN0eWxlLmJvcmRlclNpemUpICogQ29uc3RhbnRzLlNldHRpbmcuUElYRUxfUkFUSU8sICh0aGlzLnkgKyB0aGlzLnN0eWxlLmJvcmRlclNpemUpICogQ29uc3RhbnRzLlNldHRpbmcuUElYRUxfUkFUSU8sICh0aGlzLndpZHRoIC0gdGhpcy5zdHlsZS5ib3JkZXJTaXplICogMikgICogQ29uc3RhbnRzLlNldHRpbmcuUElYRUxfUkFUSU8sICh0aGlzLmhlaWdodCAtIHRoaXMuc3R5bGUuYm9yZGVyU2l6ZSAqIDIpICogQ29uc3RhbnRzLlNldHRpbmcuUElYRUxfUkFUSU8pO1xuXG4gICAgaWYoKHRoaXMuaG92ZXJlZCB8fCB0aGlzLmNsaWNrZWQpICYmIHRoaXMuY2FudmFzKSB0aGlzLmNhbnZhcy5jdXJzb3IgPSBcInRleHRcIjtcblxuICAgIGlmKCF0aGlzLnNlbGVjdGVkKSB7XG4gICAgICB0aGlzLnRvdGFsVGltZSA9IDA7XG4gICAgfVxuXG4gICAgY3R4LnJlc3RvcmUoKTtcbiAgfVxuXG4gIGRyYXdUZXh0KGN0eFRleHQsIGN1cnJlbnRYKSB7XG4gICAgZm9yKGxldCBpID0gLTE7IGkgPCB0aGlzLnRleHQubGVuZ3RoOyBpKyspIHtcbiAgICAgIGlmKGkgPiAtMSkge1xuICAgICAgICBjb25zdCBzaXplcyA9IHRoaXMudGV4dENhY2hlLmxldHRlcnNbaV0uc2l6ZXM7XG5cbiAgICAgICAgY29uc3QgeERyYXcgPSBjdXJyZW50WCAtIHRoaXMub2Zmc2V0WDtcbiAgICAgICAgY29uc3QgeURyYXcgPSB0aGlzLnkgKyB0aGlzLnN0eWxlLmJvcmRlclNpemU7XG5cbiAgICAgICAgaWYodGhpcy5pc0xldHRlclZpc2libGUoaSkpIHsgLy8gRG9uJ3QgZHJhdyB0aGUgdGV4dCBpZiBpdCBpcyBvdXRzaWRlIHRoZSBpbnB1dCAob3ZlcmZsb3cpXG4gICAgICAgICAgaWYodGhpcy5wb3NpdGlvblN0YXJ0ICE9IHRoaXMucG9zaXRpb25FbmQgJiYgaSA+PSB0aGlzLnBvc2l0aW9uU3RhcnQgJiYgaSA8IHRoaXMucG9zaXRpb25FbmQpIHtcbiAgICAgICAgICAgIHRoaXMuZHJhd0hpZ2hsaWdodChjdHhUZXh0LCBjdXJyZW50WCwgc2l6ZXMpO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIFV0aWxzLmRyYXdUZXh0KGN0eFRleHQsIHRoaXMudGV4dFtpXSwgdGhpcy5zdHlsZS5mb250Q29sb3IsIHRoaXMuc3R5bGUuZm9udFNpemUsIHRoaXMuc3R5bGUuZm9udEZhbWlseSwgXCJkZWZhdWx0XCIsIFwiZGVmYXVsdFwiLCB4RHJhdywgeURyYXcsIGZhbHNlKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGN1cnJlbnRYICs9IHNpemVzW1wid2lkdGhcIl0gKyB0aGlzLnN0eWxlLnNwYWNlQmV0d2VlbkNvbXBvbmVudHM7XG4gICAgICB9XG5cbiAgICAgIGlmKHRoaXMucG9zaXRpb25FbmQgPT0gaSArIDEgJiYgdGhpcy5zZWxlY3RlZCkge1xuICAgICAgICBpZih0aGlzLnRvdGFsVGltZSA8PSA1MDApIHtcbiAgICAgICAgICB0aGlzLmRyYXdDdXJzb3IoY3R4VGV4dCwgY3VycmVudFgpO1xuICAgICAgICB9IGVsc2UgaWYodGhpcy50b3RhbFRpbWUgPiAxMDAwKSB7XG4gICAgICAgICAgdGhpcy50b3RhbFRpbWUgPSAwO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIGN1cnJlbnRYO1xuICB9XG5cbiAgZHJhd0N1cnNvcihjdHhUZXh0LCBjdXJyZW50WCkge1xuICAgIGN0eFRleHQuc3Ryb2tlU3R5bGUgPSB0aGlzLnN0eWxlLmJvcmRlckNvbG9yO1xuICAgIGN0eFRleHQubGluZVdpZHRoID0gMTtcbiAgICBjdHhUZXh0LmJlZ2luUGF0aCgpO1xuICAgIGN0eFRleHQubW92ZVRvKGN1cnJlbnRYIC0gdGhpcy5vZmZzZXRYLCB0aGlzLnkgKyAzKTtcbiAgICBjdHhUZXh0LmxpbmVUbyhjdXJyZW50WCAtIHRoaXMub2Zmc2V0WCwgdGhpcy55ICsgdGhpcy5zdHlsZS5mb250U2l6ZSk7XG4gICAgY3R4VGV4dC5zdHJva2UoKTtcbiAgfVxuXG4gIGRyYXdIaWdobGlnaHQoY3R4VGV4dCwgY3VycmVudFgsIHNpemVzKSB7XG4gICAgY3R4VGV4dC5maWxsU3R5bGUgPSB0aGlzLnN0eWxlLnNlbGVjdENvbG9yO1xuICAgIGN0eFRleHQuZmlsbFJlY3QoY3VycmVudFggLSB0aGlzLm9mZnNldFgsIHRoaXMueSArIHRoaXMuc3R5bGUuYm9yZGVyU2l6ZSwgc2l6ZXNbXCJ3aWR0aFwiXSArIDIsIHRoaXMuaGVpZ2h0IC0gdGhpcy5zdHlsZS5ib3JkZXJTaXplICogMiAtIDEpO1xuICB9XG5cbiAgdXBkYXRlVGV4dENhY2hlKGN1cnJlbnRYKSB7XG4gICAgY29uc3QgY3R4ID0gdGhpcy5jYW52YXMgPyB0aGlzLmNhbnZhcy5nZXRDb250ZXh0KFwiMmRcIikgOiBudWxsO1xuICAgIGNvbnN0IHBhcmVudCA9ICh0aGlzLmNhbnZhcyAmJiB0aGlzLmNhbnZhcy5zY2VuZSkgfHwgdGhpcy5jYW52YXMgfHwgKGN0eCAmJiBjdHguY2FudmFzKTtcblxuICAgIGlmKGN0eCAmJiAoQ29uc3RhbnRzLlNldHRpbmcuRElTQUJMRV9PUFRJTUlaQVRJT05TIHx8ICF0aGlzLnRleHRDYWNoZSB8fCB0aGlzLnRleHRDYWNoZS5mb250U2l6ZSAhPSB0aGlzLnN0eWxlLmZvbnRTaXplIHx8IHRoaXMudGV4dENhY2hlLmZvbnRGYW1pbHkgIT0gdGhpcy5zdHlsZS5mb250RmFtaWx5IHx8IHRoaXMudGV4dCAhPSB0aGlzLnRleHRDYWNoZS50ZXh0IHx8IChwYXJlbnQgJiYgcGFyZW50LndpZHRoICE9IHRoaXMudGV4dENhY2hlLnBhcmVudFdpZHRoKSkpIHtcbiAgICAgIHRoaXMudGV4dENhY2hlID0geyBcImZvbnRTaXplXCI6IHRoaXMuc3R5bGUuZm9udFNpemUsIFwiZm9udEZhbWlseVwiOiB0aGlzLnN0eWxlLmZvbnRGYW1pbHksIFwidGV4dFwiOiB0aGlzLnRleHQsIFwicGFyZW50V2lkdGhcIjogcGFyZW50LndpZHRoLCBcImxldHRlcnNcIjogW10gfTtcblxuICAgICAgZm9yKGxldCBpID0gMDsgaSA8IHRoaXMudGV4dC5sZW5ndGg7IGkrKykge1xuICAgICAgICBjb25zdCBzaXplcyA9IFV0aWxzLndyYXBUZXh0TGluZXMoY3R4LCB0aGlzLnRleHRbaV0sIHRoaXMud2lkdGgsIHRoaXMuc3R5bGUuZm9udFNpemUsIHRoaXMuc3R5bGUuZm9udEZhbWlseSwgdHJ1ZSk7XG4gICAgICAgIHRoaXMudGV4dENhY2hlLmxldHRlcnNbaV0gPSB7XCJ0ZXh0XCI6IHRoaXMudGV4dFtpXSwgXCJjdXJyZW50WFwiOiBjdXJyZW50WCwgXCJzaXplc1wiOiBzaXplcyB9OyBcbiAgICAgICAgY3VycmVudFggKz0gc2l6ZXNbXCJ3aWR0aFwiXSArIHRoaXMuc3R5bGUuc3BhY2VCZXR3ZWVuQ29tcG9uZW50cztcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBpc0NsaWNrQ3VycmVudFBvc2l0aW9uKHBvc2l0aW9uLCBjdXJyZW50WCwgc2l6ZXMpIHtcbiAgICBpZihwb3NpdGlvbi54ICsgdGhpcy5vZmZzZXRYIDw9IGN1cnJlbnRYICsgc2l6ZXNbXCJ3aWR0aFwiXSArIHRoaXMuc3R5bGUuc3BhY2VCZXR3ZWVuQ29tcG9uZW50cyAmJiBwb3NpdGlvbi54ICsgdGhpcy5vZmZzZXRYID49IGN1cnJlbnRYKSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG5cbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBpc0NsaWNrQWZ0ZXJQb3NpdGlvbihwb3NpdGlvbiwgY3VycmVudFgsIHNpemVzKSB7XG4gICAgaWYocG9zaXRpb24ueCArIHRoaXMub2Zmc2V0WCA+PSBjdXJyZW50WCArIHNpemVzW1wid2lkdGhcIl0gKyB0aGlzLnN0eWxlLnNwYWNlQmV0d2VlbkNvbXBvbmVudHMpIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cblxuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIGdldExldHRlckNsaWNrZWQocG9zaXRpb24pIHtcbiAgICBpZih0aGlzLnRleHRDYWNoZSkge1xuICAgICAgZm9yKGxldCBpID0gMDsgaSA8IHRoaXMudGV4dC5sZW5ndGg7IGkrKykge1xuICAgICAgICBjb25zdCBsZXR0ZXIgPSB0aGlzLnRleHRDYWNoZS5sZXR0ZXJzW2ldO1xuICAgICAgICBcbiAgICAgICAgaWYodGhpcy5pc0NsaWNrQ3VycmVudFBvc2l0aW9uKHBvc2l0aW9uLCBNYXRoLnJvdW5kKGxldHRlci5jdXJyZW50WCksIGxldHRlci5zaXplcykpIHtcbiAgICAgICAgICByZXR1cm4gaTtcbiAgICAgICAgfSBlbHNlIGlmKGkgPj0gdGhpcy50ZXh0Lmxlbmd0aCAtIDEgJiYgdGhpcy5pc0NsaWNrQWZ0ZXJQb3NpdGlvbihwb3NpdGlvbiwgTWF0aC5yb3VuZChsZXR0ZXIuY3VycmVudFgpLCBsZXR0ZXIuc2l6ZXMpKSB7XG4gICAgICAgICAgcmV0dXJuIGkgKyAxO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgZ2V0IGN1cnNvclBvc2l0aW9uKCkge1xuICAgIGlmKHRoaXMudGV4dENhY2hlKSB7XG4gICAgICBsZXQgcG9zaXRpb24gPSB0aGlzLnBvc2l0aW9uRW5kIC0gMTtcblxuICAgICAgaWYodGhpcy5wb3NpdGlvbkVuZCAhPSB0aGlzLnBvc2l0aW9uU3RhcnQgJiYgdGhpcy5wb3NpdGlvbkVuZCA9PSB0aGlzLnBvc2l0aW9uU3RhcnRDbGljayAmJiB0aGlzLnBvc2l0aW9uU3RhcnQgPCB0aGlzLnBvc2l0aW9uU3RhcnRDbGljaykge1xuICAgICAgICBwb3NpdGlvbiA9IHRoaXMucG9zaXRpb25TdGFydCAtIDE7XG4gICAgICB9XG4gICAgICBcbiAgICAgIGlmKHBvc2l0aW9uIDwgMCkge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgIFwiY3VycmVudExldHRlclwiOiB0aGlzLnRleHRDYWNoZS5sZXR0ZXJzWzBdLFxuICAgICAgICAgIFwieFwiOiB0aGlzLnggKyB0aGlzLnN0eWxlLmJvcmRlclNpemVcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBjb25zdCBjdXJyZW50TGV0dGVyID0gdGhpcy50ZXh0Q2FjaGUubGV0dGVyc1twb3NpdGlvbl07XG5cbiAgICAgIGlmKGN1cnJlbnRMZXR0ZXIpIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICBcImN1cnJlbnRMZXR0ZXJcIjogY3VycmVudExldHRlcixcbiAgICAgICAgICBcInhcIjogY3VycmVudExldHRlci5jdXJyZW50WFxuICAgICAgICB9O1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIGlzTGV0dGVyVmlzaWJsZShsZXR0ZXJJZCkge1xuICAgIGlmKHRoaXMudGV4dENhY2hlKSB7XG4gICAgICBjb25zdCBsZXR0ZXIgPSB0aGlzLnRleHRDYWNoZS5sZXR0ZXJzW2xldHRlcklkXTtcblxuICAgICAgaWYobGV0dGVyKSB7XG4gICAgICAgIGNvbnN0IHhEcmF3ID0gbGV0dGVyLmN1cnJlbnRYIC0gdGhpcy5vZmZzZXRYO1xuICBcbiAgICAgICAgaWYoeERyYXcgPj0gdGhpcy54IC0gbGV0dGVyLnNpemVzW1wid2lkdGhcIl0gJiYgeERyYXcgPD0gdGhpcy54ICsgdGhpcy53aWR0aCkge1xuICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgYXV0b1Njcm9sbCgpIHtcbiAgICBpZih0aGlzLnRleHRDYWNoZSkge1xuICAgICAgY29uc3QgY3Vyc29yUG9zaXRpb24gPSB0aGlzLmN1cnNvclBvc2l0aW9uO1xuICAgICAgY29uc3QgY3VycmVudExldHRlclNpemUgPSBjdXJzb3JQb3NpdGlvbi5jdXJyZW50TGV0dGVyID8gY3Vyc29yUG9zaXRpb24uY3VycmVudExldHRlci5zaXplc1tcIndpZHRoXCJdIDogMDtcbiAgICAgIGNvbnN0IGN1cnNvclBvc2l0aW9uUG9zID0gY3Vyc29yUG9zaXRpb24ueCArIGN1cnJlbnRMZXR0ZXJTaXplICsgdGhpcy5zdHlsZS5zcGFjZUJldHdlZW5Db21wb25lbnRzO1xuICAgICAgY29uc3QgY3Vyc29yUG9zaXRpb25OZWcgPSBjdXJzb3JQb3NpdGlvbi54IC0gY3VycmVudExldHRlclNpemUgLSB0aGlzLnN0eWxlLnNwYWNlQmV0d2VlbkNvbXBvbmVudHM7XG5cbiAgICAgIGNvbnN0IG9mZnNldFggPSBNYXRoLm1heCgwLCBNYXRoLnJvdW5kKGN1cnNvclBvc2l0aW9uUG9zIC0gdGhpcy54IC0gdGhpcy53aWR0aCArIHRoaXMuc3R5bGUuYm9yZGVyU2l6ZSArIHRoaXMuc3R5bGUuc3BhY2VCZXR3ZWVuQ29tcG9uZW50cyAqIDIpKTtcbiAgICAgIGNvbnN0IG9mZnNldFhOZWcgPSBNYXRoLm1heCgwLCBNYXRoLnJvdW5kKGN1cnNvclBvc2l0aW9uTmVnIC0gdGhpcy54IC0gdGhpcy5zdHlsZS5ib3JkZXJTaXplIC0gdGhpcy5zdHlsZS5zcGFjZUJldHdlZW5Db21wb25lbnRzICogMikpO1xuXG4gICAgICBpZih0aGlzLm9mZnNldFggPCAwKSB7XG4gICAgICAgIHRoaXMub2Zmc2V0WCA9IDA7XG4gICAgICB9XG5cbiAgICAgIGlmKGN1cnNvclBvc2l0aW9uUG9zIC0gdGhpcy5vZmZzZXRYID49IHRoaXMueCArIHRoaXMud2lkdGggLSB0aGlzLnN0eWxlLmJvcmRlclNpemUpIHtcbiAgICAgICAgdGhpcy5vZmZzZXRYID0gb2Zmc2V0WDtcbiAgICAgICAgcmV0dXJuIG9mZnNldFg7XG4gICAgICB9IGVsc2UgaWYoY3Vyc29yUG9zaXRpb25OZWcgLSB0aGlzLm9mZnNldFggPD0gdGhpcy54ICsgdGhpcy5zdHlsZS5ib3JkZXJTaXplKSB7XG4gICAgICAgIHRoaXMub2Zmc2V0WCA9IG9mZnNldFhOZWc7XG4gICAgICAgIHJldHVybiBvZmZzZXRYTmVnO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIGNsaWNrKCkge1xuICAgIHRoaXMuaW5wdXQuZm9jdXMoKTtcbiAgfVxuXG4gIGJsdXIoKSB7XG4gICAgdGhpcy5pbnB1dC5ibHVyKCk7XG4gIH1cblxuICBnZXQgcG9zaXRpb25TdGFydCgpIHtcbiAgICByZXR1cm4gdGhpcy4jX3Bvc2l0aW9uU3RhcnQ7XG4gIH1cblxuICBnZXQgcG9zaXRpb25TdGFydENsaWNrKCkge1xuICAgIHJldHVybiB0aGlzLiNfcG9zaXRpb25TdGFydENsaWNrO1xuICB9XG5cbiAgZ2V0IHBvc2l0aW9uRW5kKCkge1xuICAgIHJldHVybiB0aGlzLiNfcG9zaXRpb25FbmQ7XG4gIH1cblxuICBzZXQgcG9zaXRpb25TdGFydChwb3NpdGlvbikge1xuICAgIHRoaXMuaW5wdXQuc2VsZWN0aW9uU3RhcnQgPSBwb3NpdGlvbjtcbiAgICB0aGlzLiNfcG9zaXRpb25TdGFydCA9IHBvc2l0aW9uO1xuICB9XG5cbiAgc2V0IHBvc2l0aW9uU3RhcnRDbGljayhwb3NpdGlvbikge1xuICAgIHRoaXMuI19wb3NpdGlvblN0YXJ0Q2xpY2sgPSBwb3NpdGlvbjtcbiAgfVxuXG4gIHNldCBwb3NpdGlvbkVuZChwb3NpdGlvbikge1xuICAgIHRoaXMuaW5wdXQuc2VsZWN0aW9uRW5kID0gcG9zaXRpb247XG4gICAgdGhpcy4jX3Bvc2l0aW9uRW5kID0gcG9zaXRpb247XG4gIH1cblxuICBzZXRTZWxlY3Rpb25SYW5nZShzdGFydCwgZW5kLCBkaXJlY3Rpb24pIHtcbiAgICB0aGlzLmlucHV0LnNldFNlbGVjdGlvblJhbmdlKHN0YXJ0LCBlbmQsIGRpcmVjdGlvbik7XG4gICAgdGhpcy5wb3NpdGlvblN0YXJ0ID0gc3RhcnQ7XG4gICAgdGhpcy5wb3NpdGlvbkVuZCA9IGVuZDtcbiAgfVxuXG4gIGdldCBoZWlnaHQoKSB7XG4gICAgY29uc3QgYm9yZGVyU2l6ZSA9IHRoaXMuc3R5bGUgJiYgdGhpcy5zdHlsZS5ib3JkZXJTaXplID8gdGhpcy5zdHlsZS5ib3JkZXJTaXplIDogMDtcbiAgICByZXR1cm4gc3VwZXIuaGVpZ2h0ID8gc3VwZXIuaGVpZ2h0IDogdGhpcy5zdHlsZS5mb250U2l6ZSArIGJvcmRlclNpemUgKiAyO1xuICB9XG5cbiAgZ2V0IGRlZmF1bHRTdHlsZSgpIHtcbiAgICByZXR1cm4gbmV3IFN0eWxlKHtcbiAgICAgIFwiZm9udFNpemVcIjogTWF0aC5mbG9vcihDb25zdGFudHMuU2V0dGluZy5GT05UX1NJWkUgLyAxLjI1KSxcbiAgICAgIFwiZm9udEZhbWlseVwiOiBDb25zdGFudHMuU2V0dGluZy5GT05UX0ZBTUlMWSxcbiAgICAgIFwiZm9udENvbG9yXCI6IENvbnN0YW50cy5TZXR0aW5nLklOUFVUX0RFRkFVTFRfRk9OVF9DT0xPUixcbiAgICAgIFwiYmFja2dyb3VuZENvbG9yXCI6IENvbnN0YW50cy5TZXR0aW5nLklOUFVUX0RFRkFVTFRfQkFDS0dST1VORF9DT0xPUixcbiAgICAgIFwiYm9yZGVyQ29sb3JcIjogQ29uc3RhbnRzLlNldHRpbmcuSU5QVVRfREVGQVVMVF9CT1JERVJfQ09MT1IsXG4gICAgICBcImJvcmRlckNvbG9yU2VsZWN0ZWRcIjogQ29uc3RhbnRzLlNldHRpbmcuSU5QVVRfREVGQVVMVF9CT1JERVJfQ09MT1JfU0VMRUNURUQsXG4gICAgICBcInNlbGVjdENvbG9yXCI6IENvbnN0YW50cy5TZXR0aW5nLklOUFVUX0RFRkFVTFRfU0VMRUNUX0NPTE9SLFxuICAgICAgXCJzcGFjZUJldHdlZW5Db21wb25lbnRzXCI6IDFcbiAgICB9KTtcbiAgfVxufSIsIi8qXG4gKiBDb3B5cmlnaHQgKEMpIDIwMjAgRWxpYXN0aWsgKGVsaWFzdGlrc29mdHMuY29tKVxuICpcbiAqIFRoaXMgZmlsZSBpcyBwYXJ0IG9mIFwiSlNHYW1lVG9vbHNcIi5cbiAqXG4gKiBcIkpTR2FtZVRvb2xzXCIgaXMgZnJlZSBzb2Z0d2FyZTogeW91IGNhbiByZWRpc3RyaWJ1dGUgaXQgYW5kL29yIG1vZGlmeVxuICogaXQgdW5kZXIgdGhlIHRlcm1zIG9mIHRoZSBHTlUgR2VuZXJhbCBQdWJsaWMgTGljZW5zZSBhcyBwdWJsaXNoZWQgYnlcbiAqIHRoZSBGcmVlIFNvZnR3YXJlIEZvdW5kYXRpb24sIGVpdGhlciB2ZXJzaW9uIDMgb2YgdGhlIExpY2Vuc2UsIG9yXG4gKiAoYXQgeW91ciBvcHRpb24pIGFueSBsYXRlciB2ZXJzaW9uLlxuICpcbiAqIFwiSlNHYW1lVG9vbHNcIiBpcyBkaXN0cmlidXRlZCBpbiB0aGUgaG9wZSB0aGF0IGl0IHdpbGwgYmUgdXNlZnVsLFxuICogYnV0IFdJVEhPVVQgQU5ZIFdBUlJBTlRZOyB3aXRob3V0IGV2ZW4gdGhlIGltcGxpZWQgd2FycmFudHkgb2ZcbiAqIE1FUkNIQU5UQUJJTElUWSBvciBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRS4gIFNlZSB0aGVcbiAqIEdOVSBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlIGZvciBtb3JlIGRldGFpbHMuXG4gKlxuICogWW91IHNob3VsZCBoYXZlIHJlY2VpdmVkIGEgY29weSBvZiB0aGUgR05VIEdlbmVyYWwgUHVibGljIExpY2Vuc2VcbiAqIGFsb25nIHdpdGggXCJKU0dhbWVUb29sc1wiLiAgSWYgbm90LCBzZWUgPGh0dHA6Ly93d3cuZ251Lm9yZy9saWNlbnNlcy8+LlxuICovXG5pbXBvcnQgQ29uc3RhbnRzIGZyb20gXCIuL0NvbnN0YW50c1wiO1xuaW1wb3J0IFV0aWxzIGZyb20gXCIuL1V0aWxzXCI7XG5pbXBvcnQgQ29tcG9uZW50IGZyb20gXCIuL0NvbXBvbmVudFwiO1xuaW1wb3J0IFN0eWxlIGZyb20gXCIuL1N0eWxlXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIExhYmVsIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgc2VsZWN0YWJsZSA9IGZhbHNlO1xuICAjX3RleHQgPSBcIlwiO1xuXG4gIGNvbnN0cnVjdG9yKHRleHQsIHgsIHksIHN0eWxlKSB7XG4gICAgc3VwZXIoeCwgeSwgbnVsbCwgbnVsbCwgc3R5bGUpO1xuICAgIHRoaXMudGV4dCA9IHRleHQ7XG4gICAgdGhpcy5zaXplc0NhY2hlID0gbnVsbDtcblxuICAgIGlmKCFDb25zdGFudHMuU2V0dGluZy5ESVNBQkxFX0VYUEVSSU1FTlRBTF9PUFRJTUlaQVRJT05TKSB7XG4gICAgICB0aGlzLnVwZGF0ZVNpemVzKCk7XG5cbiAgICAgIHRoaXMuYWRkQ2hhbmdlQWN0aW9uKGNvbXBvbmVudENoYW5nZWQgPT4ge1xuICAgICAgICB0aGlzLnVwZGF0ZVNpemVzKCk7XG4gICAgICAgIGNvbXBvbmVudENoYW5nZWQgIT0gdGhpcy5wYXJlbnQgJiYgdGhpcy5wYXJlbnQgJiYgdGhpcy5wYXJlbnQucmVhY3RvciAmJiB0aGlzLnBhcmVudC5yZWFjdG9yLmRpc3BhdGNoRXZlbnQoXCJvbkNoYW5nZVwiLCB0aGlzKTtcbiAgICAgIH0pO1xuICAgIH1cbiAgfVxuXG4gIGRyYXcoY29udGV4dCkge1xuICAgIGlmKHRoaXMuaGlkZGVuKSByZXR1cm47XG4gICAgc3VwZXIuZHJhdyhjb250ZXh0KTtcbiAgICBcbiAgICBjb25zdCBjYW52YXMgPSBjb250ZXh0LmNhbnZhcztcbiAgICBjb25zdCBjdHggPSBjYW52YXMuZ2V0Q29udGV4dChcIjJkXCIpO1xuICAgIGN0eC5zYXZlKCk7XG5cbiAgICBVdGlscy5kcmF3VGV4dChjdHgsIHRoaXMudGV4dCwgdGhpcy5zdHlsZS5mb250Q29sb3IsIHRoaXMuc3R5bGUuZm9udFNpemUsIHRoaXMuc3R5bGUuZm9udEZhbWlseSwgdGhpcy5zdHlsZS5hbGlnbmVtZW50LCB0aGlzLnN0eWxlLnZlcnRpY2FsQWxpZ25lbWVudCwgdGhpcy54LCB0aGlzLnksIHRoaXMuc3R5bGUud3JhcCwgdGhpcy5zdHlsZS5ib2xkLCB0aGlzLnN0eWxlLnVuZGVybGluZSwgbnVsbCwgdGhpcy5wYXJlbnQpO1xuXG4gICAgY3R4LnJlc3RvcmUoKTtcbiAgfVxuXG4gIHNldCB0ZXh0KHRleHQpIHtcbiAgICBpZih0ZXh0ICE9IHRoaXMuI190ZXh0KSB7XG4gICAgICB0aGlzLiNfdGV4dCA9IHRleHQ7XG4gICAgICB0aGlzLnJlYWN0b3IuZGlzcGF0Y2hFdmVudChcIm9uQ2hhbmdlXCIsIHRoaXMpO1xuICAgIH1cbiAgfVxuXG4gIGdldCB0ZXh0KCkge1xuICAgIHJldHVybiB0aGlzLiNfdGV4dDtcbiAgfVxuXG4gIHVwZGF0ZVNpemVzKCkge1xuICAgIGNvbnN0IGN0eCA9IHRoaXMuY2FudmFzID8gdGhpcy5jYW52YXMuZ2V0Q29udGV4dChcIjJkXCIpIDogbnVsbDtcbiAgICBjb25zdCBwYXJlbnQgPSAodGhpcy5jYW52YXMgJiYgdGhpcy5jYW52YXMuc2NlbmUpIHx8IHRoaXMuY2FudmFzIHx8IChjdHggJiYgY3R4LmNhbnZhcykgfHwgdGhpcy5wYXJlbnQ7XG4gICAgXG4gICAgaWYoY3R4ICYmIChDb25zdGFudHMuU2V0dGluZy5ESVNBQkxFX09QVElNSVpBVElPTlMgfHwgIXRoaXMuc2l6ZXNDYWNoZSB8fCB0aGlzLnNpemVzQ2FjaGUuZm9udFNpemUgIT0gdGhpcy5zdHlsZS5mb250U2l6ZSB8fCB0aGlzLnNpemVzQ2FjaGUuZm9udEZhbWlseSAhPSB0aGlzLnN0eWxlLmZvbnRGYW1pbHkgfHwgdGhpcy5zaXplc0NhY2hlLndyYXAgIT0gdGhpcy5zdHlsZS53cmFwIHx8IHRoaXMudGV4dCAhPSB0aGlzLnNpemVzQ2FjaGUudGV4dCB8fCAocGFyZW50ICYmIHBhcmVudC53aWR0aCAhPSB0aGlzLnNpemVzQ2FjaGUucGFyZW50V2lkdGgpIHx8IHRoaXMuc2l6ZXNDYWNoZS52YWx1ZSA9PSBudWxsKSkge1xuICAgICAgY29uc3Qgc2l6ZXMgPSBVdGlscy53cmFwVGV4dExpbmVzKGN0eCwgdGhpcy50ZXh0LCBudWxsLCB0aGlzLnN0eWxlLmZvbnRTaXplLCB0aGlzLnN0eWxlLmZvbnRGYW1pbHksICF0aGlzLnN0eWxlLndyYXApO1xuICAgICAgXG4gICAgICBpZihwYXJlbnQpIHtcbiAgICAgICAgdGhpcy5zaXplc0NhY2hlID0geyBcImZvbnRTaXplXCI6IHRoaXMuc3R5bGUuZm9udFNpemUsIFwiZm9udEZhbWlseVwiOiB0aGlzLnN0eWxlLmZvbnRGYW1pbHksIFwid3JhcFwiOiB0aGlzLnN0eWxlLndyYXAsIFwidGV4dFwiOiB0aGlzLnRleHQsIFwicGFyZW50V2lkdGhcIjogcGFyZW50LndpZHRoLCBcInZhbHVlXCI6IHNpemVzIH07XG4gICAgICAgIHBhcmVudC5yZWFjdG9yLmRpc3BhdGNoRXZlbnQoXCJvbkNoYW5nZVwiLCB0aGlzKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gdGhpcy5zaXplc0NhY2hlICYmIHRoaXMuc2l6ZXNDYWNoZS52YWx1ZTtcbiAgfVxuXG4gIGdldCBzaXplcygpIHtcbiAgICBpZihDb25zdGFudHMuU2V0dGluZy5ESVNBQkxFX0VYUEVSSU1FTlRBTF9PUFRJTUlaQVRJT05TKSB0aGlzLnVwZGF0ZVNpemVzKCk7XG4gICAgcmV0dXJuIHRoaXMuc2l6ZXNDYWNoZSA/IHRoaXMuc2l6ZXNDYWNoZS52YWx1ZSA6IG51bGw7XG4gIH1cblxuICBnZXQgaGVpZ2h0KCkge1xuICAgIGNvbnN0IHNpemVzID0gdGhpcy5zaXplcztcbiAgICByZXR1cm4gc2l6ZXMgJiYgc2l6ZXNbXCJoZWlnaHRcIl07XG4gIH1cblxuICBnZXQgd2lkdGgoKSB7XG4gICAgY29uc3Qgc2l6ZXMgPSB0aGlzLnNpemVzO1xuICAgIHJldHVybiBzaXplcyAmJiBzaXplc1tcIndpZHRoXCJdO1xuICB9XG5cbiAgZ2V0IGRlZmF1bHRTdHlsZSgpIHtcbiAgICByZXR1cm4gbmV3IFN0eWxlKHtcbiAgICAgIFwiZm9udENvbG9yXCI6IENvbnN0YW50cy5TZXR0aW5nLkxBQkVMX0RFRkFVTFRfRk9OVF9DT0xPUixcbiAgICAgIFwid3JhcFwiOiB0cnVlLFxuICAgICAgXCJib2xkXCI6IGZhbHNlLFxuICAgICAgXCJ1bmRlcmxpbmVcIjogZmFsc2VcbiAgICB9KTtcbiAgfVxufSIsIi8qXG4gKiBDb3B5cmlnaHQgKEMpIDIwMjAgRWxpYXN0aWsgKGVsaWFzdGlrc29mdHMuY29tKVxuICpcbiAqIFRoaXMgZmlsZSBpcyBwYXJ0IG9mIFwiSlNHYW1lVG9vbHNcIi5cbiAqXG4gKiBcIkpTR2FtZVRvb2xzXCIgaXMgZnJlZSBzb2Z0d2FyZTogeW91IGNhbiByZWRpc3RyaWJ1dGUgaXQgYW5kL29yIG1vZGlmeVxuICogaXQgdW5kZXIgdGhlIHRlcm1zIG9mIHRoZSBHTlUgR2VuZXJhbCBQdWJsaWMgTGljZW5zZSBhcyBwdWJsaXNoZWQgYnlcbiAqIHRoZSBGcmVlIFNvZnR3YXJlIEZvdW5kYXRpb24sIGVpdGhlciB2ZXJzaW9uIDMgb2YgdGhlIExpY2Vuc2UsIG9yXG4gKiAoYXQgeW91ciBvcHRpb24pIGFueSBsYXRlciB2ZXJzaW9uLlxuICpcbiAqIFwiSlNHYW1lVG9vbHNcIiBpcyBkaXN0cmlidXRlZCBpbiB0aGUgaG9wZSB0aGF0IGl0IHdpbGwgYmUgdXNlZnVsLFxuICogYnV0IFdJVEhPVVQgQU5ZIFdBUlJBTlRZOyB3aXRob3V0IGV2ZW4gdGhlIGltcGxpZWQgd2FycmFudHkgb2ZcbiAqIE1FUkNIQU5UQUJJTElUWSBvciBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRS4gIFNlZSB0aGVcbiAqIEdOVSBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlIGZvciBtb3JlIGRldGFpbHMuXG4gKlxuICogWW91IHNob3VsZCBoYXZlIHJlY2VpdmVkIGEgY29weSBvZiB0aGUgR05VIEdlbmVyYWwgUHVibGljIExpY2Vuc2VcbiAqIGFsb25nIHdpdGggXCJKU0dhbWVUb29sc1wiLiAgSWYgbm90LCBzZWUgPGh0dHA6Ly93d3cuZ251Lm9yZy9saWNlbnNlcy8+LlxuICovXG5pbXBvcnQgQ29uc3RhbnRzIGZyb20gXCIuL0NvbnN0YW50c1wiO1xuaW1wb3J0IExhYmVsIGZyb20gXCIuL0xhYmVsXCI7XG5pbXBvcnQgU3R5bGUgZnJvbSBcIi4vU3R5bGVcIjtcbmltcG9ydCBVdGlscyBmcm9tIFwiLi9VdGlsc1wiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBMaW5rIGV4dGVuZHMgTGFiZWwge1xuICBzZWxlY3RhYmxlID0gdHJ1ZTtcblxuICBjb25zdHJ1Y3Rvcih0ZXh0LCB4LCB5LCBzdHlsZSkge1xuICAgIHN1cGVyKHRleHQsIHgsIHksIHN0eWxlKTtcblxuICAgIHRoaXMuaW5pdGlhbENvbG9yID0gdGhpcy5zdHlsZS5mb250Q29sb3I7XG4gICAgdGhpcy5pbml0aWFsVW5kZXJsaW5lID0gdGhpcy5zdHlsZS51bmRlcmxpbmU7XG4gIH1cblxuICBkcmF3KGNvbnRleHQpIHtcbiAgICBpZih0aGlzLmhpZGRlbikgcmV0dXJuO1xuICAgIHN1cGVyLmRyYXcoY29udGV4dCk7XG5cbiAgICBpZih0aGlzLmNsaWNrZWQpIHtcbiAgICAgIHRoaXMuc3R5bGUuc2V0KFwidW5kZXJsaW5lXCIsIGZhbHNlKTtcbiAgICAgIHRoaXMuc3R5bGUuc2V0KFwiZm9udENvbG9yXCIsIHRoaXMuc3R5bGUuZm9udENvbG9yRG93bik7XG4gICAgICBpZighdGhpcy5tb3ZhYmxlKSB0aGlzLmNhbnZhcy5jdXJzb3IgPSBcInBvaW50ZXJcIjtcbiAgICB9IGVsc2UgaWYodGhpcy5ob3ZlcmVkIHx8IHRoaXMuc2VsZWN0ZWQpIHtcbiAgICAgIHRoaXMuc3R5bGUuc2V0KFwidW5kZXJsaW5lXCIsIGZhbHNlKTtcbiAgICAgIHRoaXMuc3R5bGUuc2V0KFwiZm9udENvbG9yXCIsIHRoaXMuc3R5bGUuZm9udENvbG9ySG92ZXIpO1xuICAgICAgaWYodGhpcy5ob3ZlcmVkICYmICF0aGlzLm1vdmFibGUpIHRoaXMuY2FudmFzLmN1cnNvciA9IFwicG9pbnRlclwiO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnN0eWxlLnNldChcInVuZGVybGluZVwiLCB0aGlzLmluaXRpYWxVbmRlcmxpbmUpO1xuICAgICAgdGhpcy5zdHlsZS5zZXQoXCJmb250Q29sb3JcIiwgdGhpcy5pbml0aWFsQ29sb3IpO1xuICAgIH1cblxuICAgIHRoaXMuaW5pdCA9IHRydWU7XG4gIH1cblxuICBnZXQgZGVmYXVsdFN0eWxlKCkge1xuICAgIHJldHVybiBuZXcgU3R5bGUoe1xuICAgICAgXCJmb250Q29sb3JcIjogQ29uc3RhbnRzLlNldHRpbmcuTElOS19ERUZBVUxUX0NPTE9SLFxuICAgICAgXCJmb250Q29sb3JIb3ZlclwiOiBDb25zdGFudHMuU2V0dGluZy5MSU5LX0RFRkFVTFRfSE9WRVJfQ09MT1IsXG4gICAgICBcImZvbnRDb2xvckRvd25cIjogQ29uc3RhbnRzLlNldHRpbmcuTElOS19ERUZBVUxUX0NMSUNLX0NPTE9SLFxuICAgICAgXCJ3cmFwXCI6IHRydWUsXG4gICAgICBcImJvbGRcIjogZmFsc2UsXG4gICAgICBcInVuZGVybGluZVwiOiB0cnVlXG4gICAgfSk7XG4gIH1cbn0iLCIvKlxuICogQ29weXJpZ2h0IChDKSAyMDIwIEVsaWFzdGlrIChlbGlhc3Rpa3NvZnRzLmNvbSlcbiAqXG4gKiBUaGlzIGZpbGUgaXMgcGFydCBvZiBcIkpTR2FtZVRvb2xzXCIuXG4gKlxuICogXCJKU0dhbWVUb29sc1wiIGlzIGZyZWUgc29mdHdhcmU6IHlvdSBjYW4gcmVkaXN0cmlidXRlIGl0IGFuZC9vciBtb2RpZnlcbiAqIGl0IHVuZGVyIHRoZSB0ZXJtcyBvZiB0aGUgR05VIEdlbmVyYWwgUHVibGljIExpY2Vuc2UgYXMgcHVibGlzaGVkIGJ5XG4gKiB0aGUgRnJlZSBTb2Z0d2FyZSBGb3VuZGF0aW9uLCBlaXRoZXIgdmVyc2lvbiAzIG9mIHRoZSBMaWNlbnNlLCBvclxuICogKGF0IHlvdXIgb3B0aW9uKSBhbnkgbGF0ZXIgdmVyc2lvbi5cbiAqXG4gKiBcIkpTR2FtZVRvb2xzXCIgaXMgZGlzdHJpYnV0ZWQgaW4gdGhlIGhvcGUgdGhhdCBpdCB3aWxsIGJlIHVzZWZ1bCxcbiAqIGJ1dCBXSVRIT1VUIEFOWSBXQVJSQU5UWTsgd2l0aG91dCBldmVuIHRoZSBpbXBsaWVkIHdhcnJhbnR5IG9mXG4gKiBNRVJDSEFOVEFCSUxJVFkgb3IgRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UuICBTZWUgdGhlXG4gKiBHTlUgR2VuZXJhbCBQdWJsaWMgTGljZW5zZSBmb3IgbW9yZSBkZXRhaWxzLlxuICpcbiAqIFlvdSBzaG91bGQgaGF2ZSByZWNlaXZlZCBhIGNvcHkgb2YgdGhlIEdOVSBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlXG4gKiBhbG9uZyB3aXRoIFwiSlNHYW1lVG9vbHNcIi4gIElmIG5vdCwgc2VlIDxodHRwOi8vd3d3LmdudS5vcmcvbGljZW5zZXMvPi5cbiAqL1xuaW1wb3J0IENvbnN0YW50cyBmcm9tIFwiLi9Db25zdGFudHNcIjtcbmltcG9ydCBVdGlscyBmcm9tIFwiLi9VdGlsc1wiO1xuaW1wb3J0IENvbXBvbmVudCBmcm9tIFwiLi9Db21wb25lbnRcIjtcbmltcG9ydCBDb2wgZnJvbSBcIi4vQ29sXCI7XG5pbXBvcnQgU3R5bGUgZnJvbSBcIi4vU3R5bGVcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTWVudSBleHRlbmRzIENvbCB7XG4gIHNlbGVjdGFibGUgPSBmYWxzZTtcblxuICBjb25zdHJ1Y3RvcihzdHlsZSwgLi4uY29tcG9uZW50cykge1xuICAgIHN1cGVyKDAsIDAsIG51bGwsIG51bGwsIHN0eWxlLCAuLi5jb21wb25lbnRzKTtcblxuICAgIHRoaXMubGFzdEtleSA9IHRoaXMubGFzdEtleSA9PSB1bmRlZmluZWQgPyAtMSA6IHRoaXMubGFzdEtleTtcbiAgICB0aGlzLnNlbGVjdGVkQ29tcG9uZW50ID0gdGhpcy5zZWxlY3RlZENvbXBvbmVudCA9PSB1bmRlZmluZWQgPyAwIDogdGhpcy5zZWxlY3RlZENvbXBvbmVudDtcblxuICAgIHRoaXMuZGlzYWJsZSgpO1xuICB9XG5cbiAgZHJhdyhjb250ZXh0KSB7XG4gICAgaWYodGhpcy5oaWRkZW4pIHJldHVybjtcbiAgICBjb25zdCBjYW52YXMgPSBjb250ZXh0LmNhbnZhcztcbiAgICBjb25zdCBjdHggPSBjYW52YXMuZ2V0Q29udGV4dChcIjJkXCIpO1xuXG4gICAgaWYodGhpcy5zdHlsZS5ibHVyQmFja2dyb3VuZCkge1xuICAgICAgdGhpcy5kcmF3Qmx1cihjdHgpO1xuICAgIH1cblxuICAgIGN0eC5zYXZlKCk7XG5cbiAgICB0aGlzLmRyYXdDb21wb25lbnRzKGN0eCk7XG4gICAgXG4gICAgaWYoIXRoaXMuaW5pdCkge1xuICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcImtleWRvd25cIiwgZXZlbnQgPT4ge1xuICAgICAgICBpZighdGhpcy5kaXNhYmxlZCkge1xuICAgICAgICAgIHRoaXMubGFzdEtleSA9IGV2ZW50LmtleUNvZGU7XG4gICAgICAgICAgaWYodGhpcy5sYXN0S2V5ID09IENvbnN0YW50cy5LZXkuVVAgfHwgdGhpcy5sYXN0S2V5ID09IENvbnN0YW50cy5LZXkuQk9UVE9NKSBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICB9XG4gICAgICB9KTtcblxuICAgICAgdGhpcy5pbml0ID0gdHJ1ZTtcbiAgICB9XG5cbiAgICBsZXQga2V5QWN0aW9uID0gZmFsc2U7XG4gIFxuICAgIGlmKHRoaXMuY29tcG9uZW50cyAhPSBudWxsKSB7XG4gICAgICBpZih0aGlzLmxhc3RLZXkgPT0gQ29uc3RhbnRzLktleS5VUCkge1xuICAgICAgICB0aGlzLnNlbGVjdCh0aGlzLnNlbGVjdGVkQ29tcG9uZW50IC0gMSk7XG4gICAgICAgIGtleUFjdGlvbiA9IHRydWU7XG4gICAgICB9IGVsc2UgaWYodGhpcy5sYXN0S2V5ID09IENvbnN0YW50cy5LZXkuQk9UVE9NKSB7XG4gICAgICAgIHRoaXMuc2VsZWN0KHRoaXMuc2VsZWN0ZWRDb21wb25lbnQgKyAxKTtcbiAgICAgICAga2V5QWN0aW9uID0gdHJ1ZTtcbiAgICAgIH0gZWxzZSBpZih0aGlzLmxhc3RLZXkgPT0gQ29uc3RhbnRzLktleS5FQ0hBUCkge1xuICAgICAgICB0aGlzLmRpc2FibGUoKTtcbiAgICAgICAga2V5QWN0aW9uID0gdHJ1ZTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuY29tcG9uZW50cy5mb3JFYWNoKChjb21wb25lbnQsIGkpID0+IHtcbiAgICAgICAgICBpZihjb21wb25lbnQuc2VsZWN0ZWQpIHRoaXMuc2VsZWN0KGkpO1xuICAgICAgICB9KTtcbiAgICAgIH1cblxuICAgICAgdGhpcy5jb21wb25lbnRzLmZvckVhY2goKGNvbXBvbmVudCwgaSkgPT4ge1xuICAgICAgICBpZihjb21wb25lbnQgaW5zdGFuY2VvZiBDb21wb25lbnQpIHtcbiAgICAgICAgICBpZihrZXlBY3Rpb24pIHtcbiAgICAgICAgICAgIGlmKHRoaXMuc2VsZWN0ZWRDb21wb25lbnQgPT0gaSkge1xuICAgICAgICAgICAgICBpZihjb21wb25lbnQuc2VsZWN0YWJsZSkge1xuICAgICAgICAgICAgICAgIGNvbXBvbmVudC5zZWxlY3RlZCA9IHRydWU7XG4gICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICBpZighdGhpcy5pc0NvbXBvbmVudFZpc2libGUoY29tcG9uZW50KSkge1xuICAgICAgICAgICAgICAgIGNvbnN0IGNvbXBvbmVudEhlaWdodCA9IGNvbXBvbmVudC5oZWlnaHQ7XG4gICAgICAgICAgICAgICAgY29uc3QgZGVsdGFZID0gKHRoaXMubWF4SGVpZ2h0IC0gdGhpcy5vZmZzZXRTY3JvbGxZKSAtIChjb21wb25lbnQueSArIGNvbXBvbmVudEhlaWdodCk7XG4gICAgICAgICAgICAgICAgdGhpcy5vZmZzZXRTY3JvbGxZID0gLWRlbHRhWTtcblxuICAgICAgICAgICAgICAgIHRoaXMuY29udHJvbFNjcm9sbGluZyhudWxsLCAtZGVsdGFZKTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgY29tcG9uZW50LnNlbGVjdGVkID0gZmFsc2U7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgIFxuICAgICAgICAgIGlmKHRoaXMuc2VsZWN0ZWRDb21wb25lbnQgPT0gaSAmJiB0aGlzLmxhc3RLZXkgPT0gQ29uc3RhbnRzLktleS5FTlRFUiAmJiBjb21wb25lbnQucmVhY3RvciAmJiAhY29tcG9uZW50LmRpc2FibGVkKSB7XG4gICAgICAgICAgICB0aGlzLmxhc3RLZXkgPSAtMTtcbiAgICAgICAgICAgIHRoaXMuc2VsZWN0ZWRDb21wb25lbnQgPSAwO1xuICAgICAgICAgICAgY29tcG9uZW50LnJlYWN0b3IuZGlzcGF0Y2hFdmVudChcIm9uQ2xpY2tcIik7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9XG4gICAgXG4gICAgY3R4LnJlc3RvcmUoKTtcbiAgICB0aGlzLmxhc3RLZXkgPSAtMTtcbiAgfVxuXG4gIGRyYXdDb21wb25lbnRzKGN0eCkge1xuICAgIHN1cGVyLmRyYXcoY3R4KTtcbiAgfVxuXG4gIGRyYXdCbHVyKGN0eCkge1xuICAgIFV0aWxzLmJsdXJDYW52YXMoY3R4LCA1KTtcbiAgfVxuXG4gIGRyYXdCYWNrZ3JvdW5kKGN0eCkge1xuICAgIGN0eC5maWxsU3R5bGUgPSB0aGlzLnN0eWxlLmJhY2tncm91bmRDb2xvcjtcbiAgICBjdHguZmlsbFJlY3QodGhpcy5wYXJlbnQgPyB0aGlzLnBhcmVudC54IDogMCwgdGhpcy5wYXJlbnQgPyB0aGlzLnBhcmVudC55IDogMCwgdGhpcy5tYXhXaWR0aCwgdGhpcy5tYXhIZWlnaHQpO1xuICB9XG5cbiAgZGlzYWJsZSgpIHtcbiAgICBzdXBlci5kaXNhYmxlKCk7XG4gICAgdGhpcy5jb21wb25lbnRzLmZvckVhY2goY29tcG9uZW50ID0+IGNvbXBvbmVudCAmJiBjb21wb25lbnQuZGlzYWJsZSAmJiBjb21wb25lbnQuZGlzYWJsZSgpKTtcbiAgfVxuXG4gIGVuYWJsZSgpIHtcbiAgICBzdXBlci5lbmFibGUoKTtcbiAgICB0aGlzLmNvbXBvbmVudHMuZm9yRWFjaChjb21wb25lbnQgPT4gY29tcG9uZW50ICYmIGNvbXBvbmVudC5lbmFibGUgJiYgY29tcG9uZW50LmVuYWJsZSgpKTtcbiAgfVxuXG4gIHNlbGVjdChpbmRleCkge1xuICAgIHRoaXMuc2VsZWN0ZWRDb21wb25lbnQgPSBpbmRleDtcblxuICAgIGNvbnN0IHNlbGVjdGFibGVDb21wb25lbnRzID0gdGhpcy5jb21wb25lbnRzLmZpbHRlcihjb21wb25lbnQgPT4gY29tcG9uZW50LnNlbGVjdGFibGUpO1xuICAgIGlmKHNlbGVjdGFibGVDb21wb25lbnRzLmxlbmd0aCA8PSAwKSByZXR1cm47XG5cbiAgICBpZih0aGlzLnNlbGVjdGVkQ29tcG9uZW50ID49IHRoaXMuY29tcG9uZW50cy5sZW5ndGgpIHtcbiAgICAgIHRoaXMuc2VsZWN0ZWRDb21wb25lbnQgPSAwO1xuICAgIH0gZWxzZSBpZih0aGlzLnNlbGVjdGVkQ29tcG9uZW50IDwgMCkge1xuICAgICAgdGhpcy5zZWxlY3RlZENvbXBvbmVudCA9IHRoaXMuY29tcG9uZW50cy5sZW5ndGggLSAxO1xuICAgIH1cblxuICAgIGlmKHRoaXMuY29tcG9uZW50c1t0aGlzLnNlbGVjdGVkQ29tcG9uZW50XSAmJiAhdGhpcy5jb21wb25lbnRzW3RoaXMuc2VsZWN0ZWRDb21wb25lbnRdLnNlbGVjdGFibGUpIHtcbiAgICAgIGlmKHRoaXMubGFzdEtleSA9PSBDb25zdGFudHMuS2V5LlVQKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnNlbGVjdCh0aGlzLnNlbGVjdGVkQ29tcG9uZW50IC0gMSk7XG4gICAgICB9IGVsc2UgaWYodGhpcy5sYXN0S2V5ID09IENvbnN0YW50cy5LZXkuQk9UVE9NKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnNlbGVjdCh0aGlzLnNlbGVjdGVkQ29tcG9uZW50ICsgMSk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgZ2V0IHNjcm9sbEFyZWFTaXplWCgpIHtcbiAgICByZXR1cm4gdGhpcy5pbm5lcldpZHRoIC0gdGhpcy5tYXhXaWR0aDtcbiAgfVxuXG4gIGdldCBzY3JvbGxBcmVhU2l6ZVkoKSB7XG4gICAgcmV0dXJuIHRoaXMuaW5uZXJIZWlnaHQgLSB0aGlzLm1heEhlaWdodDtcbiAgfVxuXG4gIGdldCBtYXhIZWlnaHQoKSB7XG4gICAgcmV0dXJuIHN1cGVyLm1heEhlaWdodCB8fCAodGhpcy5jYW52YXMgJiYgdGhpcy5jYW52YXMuc2NlbmUgJiYgdGhpcy5jYW52YXMuc2NlbmUuaGVpZ2h0KTtcbiAgfVxuXG4gIGdldCBtYXhXaWR0aCgpIHtcbiAgICByZXR1cm4gKHRoaXMuY2FudmFzICYmIHRoaXMuY2FudmFzLnNjZW5lICYmIHRoaXMuY2FudmFzLnNjZW5lLndpZHRoKTtcbiAgfVxuXG4gIGdldCBtaW5XaWR0aCgpIHtcbiAgICByZXR1cm4gdGhpcy5wYXJlbnQgPyB0aGlzLnBhcmVudC53aWR0aCA6IDA7XG4gIH1cblxuICBnZXQgZGVmYXVsdFN0eWxlKCkge1xuICAgIHJldHVybiBuZXcgU3R5bGUoe1xuICAgICAgXCJibHVyQmFja2dyb3VuZFwiOiBDb25zdGFudHMuU2V0dGluZy5NRU5VX0RFRkFVTFRfQkxVUl9CQUNLR1JPVU5ELFxuICAgICAgXCJiYWNrZ3JvdW5kQ29sb3JcIjogQ29uc3RhbnRzLlNldHRpbmcuTUVOVV9ERUZBVUxUX0JBQ0tHUk9VTkQsXG4gICAgICBcInZlcnRpY2FsQWxpZ25lbWVudFwiOiBDb25zdGFudHMuVmVydGljYWxBbGlnbmVtZW50LkNFTlRFUixcbiAgICAgIFwic2Nyb2xsWERpc2FibGVkXCI6IHRydWVcbiAgICB9KTtcbiAgfVxuXG4gIGNvbXBhcmVUb0NvbXBvbmVudChvdGhlckNvbXBvbmVudCkge1xuICAgIHJldHVybiBvdGhlckNvbXBvbmVudC5jb21wYXJlVG9NZW51KHRoaXMpO1xuICB9XG5cbiAgY29tcGFyZVRvTWVudShvdGhlckNvbXBvbmVudCkge1xuICAgIHJldHVybiAwO1xuICB9XG5cbiAgY29tcGFyZVRvVG9vbHRpcChvdGhlckNvbXBvbmVudCkge1xuICAgIHJldHVybiAtMTtcbiAgfVxuXG4gIGNvbXBhcmVUb05vdGlmaWNhdGlvbihvdGhlckNvbXBvbmVudCkge1xuICAgIHJldHVybiAxO1xuICB9XG5cbiAgZ2V0IGhpZGRlbigpIHtcbiAgICByZXR1cm4gc3VwZXIuaGlkZGVuIHx8IHRoaXMuZGlzYWJsZWQ7XG4gIH1cblxuICBzZXQgaGlkZGVuKGhpZGRlbikge1xuICAgIHN1cGVyLmhpZGRlbiA9IGhpZGRlbjtcbiAgICB0aGlzLmRpc2FibGVkID0gaGlkZGVuO1xuICB9XG5cbiAgaXNJbnNpZGUocG9zKSB7XG4gICAgcmV0dXJuICF0aGlzLmhpZGRlbjtcbiAgfVxufSIsIi8qXG4gKiBDb3B5cmlnaHQgKEMpIDIwMjAgRWxpYXN0aWsgKGVsaWFzdGlrc29mdHMuY29tKVxuICpcbiAqIFRoaXMgZmlsZSBpcyBwYXJ0IG9mIFwiSlNHYW1lVG9vbHNcIi5cbiAqXG4gKiBcIkpTR2FtZVRvb2xzXCIgaXMgZnJlZSBzb2Z0d2FyZTogeW91IGNhbiByZWRpc3RyaWJ1dGUgaXQgYW5kL29yIG1vZGlmeVxuICogaXQgdW5kZXIgdGhlIHRlcm1zIG9mIHRoZSBHTlUgR2VuZXJhbCBQdWJsaWMgTGljZW5zZSBhcyBwdWJsaXNoZWQgYnlcbiAqIHRoZSBGcmVlIFNvZnR3YXJlIEZvdW5kYXRpb24sIGVpdGhlciB2ZXJzaW9uIDMgb2YgdGhlIExpY2Vuc2UsIG9yXG4gKiAoYXQgeW91ciBvcHRpb24pIGFueSBsYXRlciB2ZXJzaW9uLlxuICpcbiAqIFwiSlNHYW1lVG9vbHNcIiBpcyBkaXN0cmlidXRlZCBpbiB0aGUgaG9wZSB0aGF0IGl0IHdpbGwgYmUgdXNlZnVsLFxuICogYnV0IFdJVEhPVVQgQU5ZIFdBUlJBTlRZOyB3aXRob3V0IGV2ZW4gdGhlIGltcGxpZWQgd2FycmFudHkgb2ZcbiAqIE1FUkNIQU5UQUJJTElUWSBvciBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRS4gIFNlZSB0aGVcbiAqIEdOVSBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlIGZvciBtb3JlIGRldGFpbHMuXG4gKlxuICogWW91IHNob3VsZCBoYXZlIHJlY2VpdmVkIGEgY29weSBvZiB0aGUgR05VIEdlbmVyYWwgUHVibGljIExpY2Vuc2VcbiAqIGFsb25nIHdpdGggXCJKU0dhbWVUb29sc1wiLiAgSWYgbm90LCBzZWUgPGh0dHA6Ly93d3cuZ251Lm9yZy9saWNlbnNlcy8+LlxuICovXG5pbXBvcnQgQ29uc3RhbnRzIGZyb20gXCIuL0NvbnN0YW50c1wiO1xuaW1wb3J0IENvbCBmcm9tIFwiLi9Db2xcIjtcbmltcG9ydCBCdXR0b24gZnJvbSBcIi4vQnV0dG9uXCI7XG5pbXBvcnQgQ3Jvc3MgZnJvbSBcIi4vQ3Jvc3NcIjtcbmltcG9ydCBTdHlsZSBmcm9tIFwiLi9TdHlsZVwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBOb3RpZmljYXRpb25NZXNzYWdlIGV4dGVuZHMgQ29sIHtcbiAgc2VsZWN0YWJsZSA9IGZhbHNlO1xuXG4gIGNvbnN0cnVjdG9yKHN0eWxlLCBkZWxheUJlZm9yZUNsb3NpbmcsIGVhc2luZ0Z1bmN0aW9uLCAuLi5jb21wb25lbnRzKSB7XG4gICAgc3VwZXIoMCwgMCwgbnVsbCwgbnVsbCwgc3R5bGUsIC4uLmNvbXBvbmVudHMpO1xuXG4gICAgdGhpcy5kZWxheUJlZm9yZUNsb3NpbmcgPSBkZWxheUJlZm9yZUNsb3NpbmcgPT0gdW5kZWZpbmVkID8gNSA6IGRlbGF5QmVmb3JlQ2xvc2luZzsgLy8gc2Vjb25kXG4gICAgdGhpcy50aW1lTGFzdEZyYW1lID0gMDtcbiAgICB0aGlzLmFuaW1hdGlvblRpbWUgPSAwO1xuICAgIHRoaXMuY2xvc2VkID0gdHJ1ZTtcbiAgICB0aGlzLmNsb3NpbmcgPSBmYWxzZTtcbiAgICB0aGlzLmVhc2luZ0Z1bmN0aW9uID0gZWFzaW5nRnVuY3Rpb247XG5cbiAgICB0aGlzLmNsb3NlQnV0dG9uID0gbmV3IEJ1dHRvbihudWxsLCBudWxsLCBudWxsLCBudWxsLCBuZXcgU3R5bGUoe1wiYWxpZ25lbWVudFwiOiBDb25zdGFudHMuQWxpZ25lbWVudC5SSUdIVCwgXCJ2ZXJ0aWNhbEFsaWduZW1lbnRcIjogQ29uc3RhbnRzLlZlcnRpY2FsQWxpZ25lbWVudC5UT1AsIFwicGFkZGluZ1wiOiAxMCB9KSwgbmV3IENyb3NzKG51bGwsIG51bGwsIDEwLCAxMCkpO1xuICAgIHRoaXMuYWRkKHRoaXMuY2xvc2VCdXR0b24pO1xuICB9XG4gIFxuICBkcmF3KGNvbnRleHQpIHtcbiAgICBpZih0aGlzLmhpZGRlbikgcmV0dXJuO1xuICAgIHRoaXMuY2xvc2VCdXR0b24uY2FudmFzID0gdGhpcy5jYW52YXM7XG5cbiAgICBjb25zdCBjYW52YXMgPSBjb250ZXh0LmNhbnZhcztcbiAgICBjb25zdCBjdHggPSBjYW52YXMuZ2V0Q29udGV4dChcIjJkXCIpO1xuXG4gICAgY3R4LnNhdmUoKTtcblxuICAgIGlmKCF0aGlzLmluaXQpIHtcbiAgICAgIHRoaXMudGltZUxhc3RGcmFtZSA9IHBlcmZvcm1hbmNlLm5vdygpO1xuICAgIH1cbiAgICBcbiAgICBpZih0aGlzLmNsb3NlQnV0dG9uICE9IG51bGwpIHtcbiAgICAgIHRoaXMuY2xvc2VCdXR0b24uc2V0Q2xpY2tBY3Rpb24oKCkgPT4ge1xuICAgICAgICB0aGlzLmNsb3NlKCk7XG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBjb25zdCBvZmZzZXRUaW1lID0gcGVyZm9ybWFuY2Uubm93KCkgLSB0aGlzLnRpbWVMYXN0RnJhbWU7XG4gICAgdGhpcy50aW1lTGFzdEZyYW1lID0gcGVyZm9ybWFuY2Uubm93KCk7XG5cbiAgICBpZih0aGlzLmFuaW1hdGlvblRpbWUgPj0gdGhpcy5kZWxheUJlZm9yZUNsb3NpbmcgKiAxMDAwICYmICF0aGlzLmNsb3NpbmcgJiYgIXRoaXMuY2xvc2VkKSB7XG4gICAgICB0aGlzLmNsb3NlKCk7XG4gICAgfVxuXG4gICAgaWYoIXRoaXMuY2xvc2luZykge1xuICAgICAgdGhpcy5hbmltYXRpb25UaW1lICs9IG9mZnNldFRpbWU7XG4gICAgfSBlbHNlIHtcbiAgICAgIGlmKHRoaXMuc3R5bGUuZGlzYWJsZUFuaW1hdGlvbikge1xuICAgICAgICB0aGlzLmFuaW1hdGlvblRpbWUgPSAtMTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuYW5pbWF0aW9uVGltZSAtPSBvZmZzZXRUaW1lO1xuICAgICAgfVxuICAgIH1cblxuICAgIGlmKHRoaXMuYW5pbWF0aW9uVGltZSA8IDApIHtcbiAgICAgIHRoaXMuY2xvc2VkID0gdHJ1ZTtcbiAgICAgIHRoaXMuY2xvc2luZyA9IGZhbHNlO1xuICAgIH1cblxuICAgIGlmKCF0aGlzLmNsb3NlZCkge1xuICAgICAgdGhpcy5kcmF3Q29tcG9uZW50cyhjdHgpO1xuXG4gICAgICBpZih0aGlzLmNsb3NlQnV0dG9uICE9IG51bGwpIHtcbiAgICAgICAgdGhpcy5jbG9zZUJ1dHRvbi55ID0gdGhpcy55ICsgdGhpcy5zdHlsZS5wYWRkaW5nIC8gMjtcbiAgICAgICAgdGhpcy5jbG9zZUJ1dHRvbi5kcmF3KGN0eCk7XG4gICAgICB9XG5cbiAgICAgIHRoaXMuZW5hYmxlQ2xvc2VCdXR0b24oKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5kaXNhYmxlQ2xvc2VCdXR0b24oKTtcbiAgICB9XG5cbiAgICBjdHgucmVzdG9yZSgpO1xuXG4gICAgdGhpcy5pbml0ID0gdHJ1ZTtcbiAgfVxuICBcbiAgZ2V0IG9mZnNldFkoKSB7XG4gICAgbGV0IG9mZnNldFkgPSAxO1xuXG4gICAgaWYoIXRoaXMuc3R5bGUuZGlzYWJsZUFuaW1hdGlvbikge1xuICAgICAgb2Zmc2V0WSA9IHRoaXMuYW5pbWF0aW9uVGltZSAvIHRoaXMuc3R5bGUuYW5pbWF0aW9uRHVyYXRpb247XG5cbiAgICAgIGlmKHRoaXMuZWFzaW5nRnVuY3Rpb24pIHtcbiAgICAgICAgb2Zmc2V0WSA9IHRoaXMuZWFzaW5nRnVuY3Rpb24ob2Zmc2V0WSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIG9mZnNldFk7XG4gIH1cblxuICBnZXQgeSgpIHtcbiAgICBjb25zdCBvZmZzZXRZID0gdGhpcy5vZmZzZXRZO1xuXG4gICAgaWYodGhpcy5zdHlsZS52ZXJ0aWNhbEFsaWduZW1lbnQgPT0gQ29uc3RhbnRzLlZlcnRpY2FsQWxpZ25lbWVudC5UT1ApIHtcbiAgICAgIHJldHVybiAodGhpcy5oZWlnaHQgKiAob2Zmc2V0WSA8PSAxID8gb2Zmc2V0WSA6IDEpKSAtIHRoaXMuaGVpZ2h0O1xuICAgIH0gXG4gICAgXG4gICAgcmV0dXJuIHRoaXMuY2FudmFzLnNjZW5lLmhlaWdodCAtICh0aGlzLmhlaWdodCAqIChvZmZzZXRZIDw9IDEgPyBvZmZzZXRZIDogMSkpO1xuICB9XG5cbiAgc2V0IHkoeSkge1xuICAgIHN1cGVyLnkgPSB5O1xuICB9XG5cbiAgZHJhd0NvbXBvbmVudHMoY3R4KSB7XG4gICAgc3VwZXIuZHJhdyhjdHgpO1xuICB9XG5cbiAgY2xvc2UoKSB7XG4gICAgdGhpcy5kaXNhYmxlQ2xvc2VCdXR0b24oKTtcbiAgXG4gICAgaWYoIXRoaXMuY2xvc2luZykge1xuICAgICAgdGhpcy5jbG9zaW5nID0gdHJ1ZTtcbiAgICAgIHRoaXMuYW5pbWF0aW9uVGltZSA9IHRoaXMuc3R5bGUuYW5pbWF0aW9uRHVyYXRpb247XG4gICAgfVxuICB9XG4gIFxuICBvcGVuKCkge1xuICAgIHRoaXMudGltZUxhc3RGcmFtZSA9IDA7XG4gICAgdGhpcy5hbmltYXRpb25UaW1lID0gMDtcbiAgICB0aGlzLmluaXQgPSBmYWxzZTtcbiAgICB0aGlzLmNsb3NlZCA9IGZhbHNlO1xuICAgIHRoaXMuY2xvc2luZyA9IGZhbHNlO1xuICB9XG4gIFxuICBkaXNhYmxlQ2xvc2VCdXR0b24oKSB7XG4gICAgaWYodGhpcy5jbG9zZUJ1dHRvbiAhPSB1bmRlZmluZWQgJiYgdGhpcy5jbG9zZUJ1dHRvbiAhPSBudWxsICYmIHRoaXMuY2xvc2VCdXR0b24gaW5zdGFuY2VvZiBCdXR0b24pIHtcbiAgICAgIHRoaXMuY2xvc2VCdXR0b24uZGlzYWJsZSgpO1xuICAgIH1cbiAgfVxuICBcbiAgZW5hYmxlQ2xvc2VCdXR0b24oKSB7XG4gICAgaWYodGhpcy5jbG9zZUJ1dHRvbiAhPSB1bmRlZmluZWQgJiYgdGhpcy5jbG9zZUJ1dHRvbiAhPSBudWxsICYmIHRoaXMuY2xvc2VCdXR0b24gaW5zdGFuY2VvZiBCdXR0b24pIHtcbiAgICAgIHRoaXMuY2xvc2VCdXR0b24uZW5hYmxlKCk7XG4gICAgfVxuICB9O1xuICBcbiAgY29weSgpIHtcbiAgICByZXR1cm4gbmV3IE5vdGlmaWNhdGlvbk1lc3NhZ2UodGhpcy5zdHlsZS5jb3B5KCksIHRoaXMuZGVsYXlCZWZvcmVDbG9zaW5nLCB0aGlzLmVhc2luZ0Z1bmN0aW9uLCAuLi50aGlzLmNvbXBvbmVudHMpO1xuICB9XG5cbiAgZ2V0IHdpZHRoKCkge1xuICAgIHJldHVybiB0aGlzLmNhbnZhcyAmJiB0aGlzLmNhbnZhcy5zY2VuZSA/IHRoaXMuY2FudmFzLnNjZW5lLndpZHRoIDogbnVsbDtcbiAgfVxuXG4gIGdldCBoZWlnaHQoKSB7XG4gICAgcmV0dXJuIHN1cGVyLmhlaWdodCAtICh0aGlzLmNsb3NlQnV0dG9uID8gdGhpcy5jbG9zZUJ1dHRvbi5oZWlnaHQgOiAwKTtcbiAgfVxuXG4gIGdldCBkZWZhdWx0U3R5bGUoKSB7XG4gICAgcmV0dXJuIG5ldyBTdHlsZSh7XG4gICAgICBcImFsaWduZW1lbnRcIjogQ29uc3RhbnRzLkFsaWduZW1lbnQuQ0VOVEVSLFxuICAgICAgXCJiYWNrZ3JvdW5kQ29sb3JcIjogQ29uc3RhbnRzLlNldHRpbmcuTk9USUZJQ0FUSU9OX0RFRkFVTFRfQkFDS0dST1VORCxcbiAgICAgIFwiYW5pbWF0aW9uRHVyYXRpb25cIjogQ29uc3RhbnRzLlNldHRpbmcuTk9USUZJQ0FUSU9OX0RFRkFVTFRfQU5JTUFUSU9OX0RVUkFUSU9OXG4gICAgfSk7XG4gIH1cblxuICBnZXQgaGlkZGVuKCkge1xuICAgIHJldHVybiBzdXBlci5oaWRkZW4gfHwgdGhpcy5jbG9zZWQ7XG4gIH1cblxuICBzZXQgaGlkZGVuKGhpZGRlbikge1xuICAgIHN1cGVyLmhpZGRlbiA9IGhpZGRlbjtcblxuICAgIGlmKGhpZGRlbikge1xuICAgICAgdGhpcy5mb3JjZUNsb3NlKCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMub3BlbigpO1xuICAgIH1cbiAgfVxuXG4gIGNvbXBhcmVUb0NvbXBvbmVudChvdGhlckNvbXBvbmVudCkge1xuICAgIHJldHVybiBvdGhlckNvbXBvbmVudC5jb21wYXJlVG9Ob3RpZmljYXRpb24odGhpcyk7XG4gIH1cblxuICBjb21wYXJlVG9Ub29sdGlwKG90aGVyQ29tcG9uZW50KSB7XG4gICAgcmV0dXJuIC0xO1xuICB9XG5cbiAgY29tcGFyZVRvTm90aWZpY2F0aW9uKG90aGVyQ29tcG9uZW50KSB7XG4gICAgcmV0dXJuIDA7XG4gIH1cblxuICBjb21wYXJlVG9NZW51KG90aGVyQ29tcG9uZW50KSB7XG4gICAgcmV0dXJuIC0xO1xuICB9XG59IiwiLypcbiAqIENvcHlyaWdodCAoQykgMjAyMCBFbGlhc3RpayAoZWxpYXN0aWtzb2Z0cy5jb20pXG4gKlxuICogVGhpcyBmaWxlIGlzIHBhcnQgb2YgXCJKU0dhbWVUb29sc1wiLlxuICpcbiAqIFwiSlNHYW1lVG9vbHNcIiBpcyBmcmVlIHNvZnR3YXJlOiB5b3UgY2FuIHJlZGlzdHJpYnV0ZSBpdCBhbmQvb3IgbW9kaWZ5XG4gKiBpdCB1bmRlciB0aGUgdGVybXMgb2YgdGhlIEdOVSBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlIGFzIHB1Ymxpc2hlZCBieVxuICogdGhlIEZyZWUgU29mdHdhcmUgRm91bmRhdGlvbiwgZWl0aGVyIHZlcnNpb24gMyBvZiB0aGUgTGljZW5zZSwgb3JcbiAqIChhdCB5b3VyIG9wdGlvbikgYW55IGxhdGVyIHZlcnNpb24uXG4gKlxuICogXCJKU0dhbWVUb29sc1wiIGlzIGRpc3RyaWJ1dGVkIGluIHRoZSBob3BlIHRoYXQgaXQgd2lsbCBiZSB1c2VmdWwsXG4gKiBidXQgV0lUSE9VVCBBTlkgV0FSUkFOVFk7IHdpdGhvdXQgZXZlbiB0aGUgaW1wbGllZCB3YXJyYW50eSBvZlxuICogTUVSQ0hBTlRBQklMSVRZIG9yIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFLiAgU2VlIHRoZVxuICogR05VIEdlbmVyYWwgUHVibGljIExpY2Vuc2UgZm9yIG1vcmUgZGV0YWlscy5cbiAqXG4gKiBZb3Ugc2hvdWxkIGhhdmUgcmVjZWl2ZWQgYSBjb3B5IG9mIHRoZSBHTlUgR2VuZXJhbCBQdWJsaWMgTGljZW5zZVxuICogYWxvbmcgd2l0aCBcIkpTR2FtZVRvb2xzXCIuICBJZiBub3QsIHNlZSA8aHR0cDovL3d3dy5nbnUub3JnL2xpY2Vuc2VzLz4uXG4gKi9cbmltcG9ydCBCb3ggZnJvbSBcIi4vQm94XCI7XG5pbXBvcnQgQ29uc3RhbnRzIGZyb20gXCIuL0NvbnN0YW50c1wiO1xuaW1wb3J0IFN0eWxlIGZyb20gXCIuL1N0eWxlXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFByb2dyZXNzQmFyIGV4dGVuZHMgQm94IHtcbiAgI3ByZWNQZXJjZW50ID0gMDtcbiAgc2VsZWN0YWJsZSA9IGZhbHNlO1xuXG4gIGNvbnN0cnVjdG9yKHgsIHksIHdpZHRoLCBoZWlnaHQsIHN0eWxlLCBkZWZhdWx0UGVyY2VudCwgZWFzaW5nRnVuY3Rpb24pIHtcbiAgICBzdXBlcih4LCB5LCB3aWR0aCwgaGVpZ2h0LCBzdHlsZSk7XG5cbiAgICB0aGlzLnBlcmNlbnQgPSBkZWZhdWx0UGVyY2VudCA9PSB1bmRlZmluZWQgPyAwIDogZGVmYXVsdFBlcmNlbnQ7XG4gICAgdGhpcy4jcHJlY1BlcmNlbnQgPSB0aGlzLnBlcmNlbnQ7XG4gICAgdGhpcy5lYXNpbmdGdW5jdGlvbiA9IGVhc2luZ0Z1bmN0aW9uO1xuXG4gICAgdGhpcy5sYXN0VGltZSA9IDA7XG4gICAgdGhpcy50b3RhbFRpbWUgPSAwO1xuICB9XG5cbiAgZHJhdyhjb250ZXh0KSB7XG4gICAgaWYodGhpcy5oaWRkZW4pIHJldHVybjtcbiAgICBzdXBlci5kcmF3KGNvbnRleHQpO1xuXG4gICAgY29uc3QgY2FudmFzID0gY29udGV4dC5jYW52YXM7XG4gICAgY29uc3QgY3R4ID0gY2FudmFzLmdldENvbnRleHQoXCIyZFwiKTtcbiAgICBjdHguc2F2ZSgpO1xuXG4gICAgY29uc3QgdGltZSA9IHBlcmZvcm1hbmNlLm5vdygpO1xuICAgIGxldCBvZmZzZXRUaW1lID0gMDtcblxuICAgIGlmKHRoaXMuI3ByZWNQZXJjZW50ICE9IHRoaXMucGVyY2VudCAmJiAhdGhpcy5zdHlsZS5kaXNhYmxlQW5pbWF0aW9uKSB7XG4gICAgICBpZih0aGlzLmxhc3RUaW1lID4gMCkgb2Zmc2V0VGltZSA9IHRpbWUgLSB0aGlzLmxhc3RUaW1lO1xuICAgICAgdGhpcy50b3RhbFRpbWUgKz0gb2Zmc2V0VGltZTtcblxuICAgICAgaWYodGhpcy50b3RhbFRpbWUgPj0gdGhpcy5zdHlsZS5hbmltYXRpb25EdXJhdGlvbikge1xuICAgICAgICB0aGlzLiNwcmVjUGVyY2VudCA9IHRoaXMucGVyY2VudDtcbiAgICAgICAgdGhpcy50b3RhbFRpbWUgPSAwO1xuICAgICAgICB0aGlzLmxhc3RUaW1lID0gMDtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMubGFzdFRpbWUgPSB0aW1lO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnRvdGFsVGltZSA9IDA7XG4gICAgICB0aGlzLmxhc3RUaW1lID0gMDtcbiAgICB9XG5cbiAgICB0aGlzLmRyYXdCYWNrZ3JvdW5kKGN0eCk7XG4gICAgdGhpcy5kcmF3Rm9yZWdyb3VuZChjdHgsIHRoaXMud2lkdGhGb3JlZ3JvdW5kKTtcblxuICAgIGN0eC5yZXN0b3JlKCk7XG4gIH1cblxuICBnZXQgYW5pbWF0aW9uUGVyY2VudCgpIHtcbiAgICBsZXQgYW5pbWF0aW9uUGVyY2VudCA9ICh0aGlzLiNwcmVjUGVyY2VudCAhPSB0aGlzLnBlcmNlbnQgJiYgIXRoaXMuc3R5bGUuZGlzYWJsZUFuaW1hdGlvbiA/IHRoaXMudG90YWxUaW1lIC8gKHRoaXMuc3R5bGUuYW5pbWF0aW9uRHVyYXRpb24pIDogMSk7XG5cbiAgICBpZih0aGlzLmVhc2luZ0Z1bmN0aW9uKSB7XG4gICAgICBhbmltYXRpb25QZXJjZW50ID0gdGhpcy5lYXNpbmdGdW5jdGlvbihhbmltYXRpb25QZXJjZW50KTtcbiAgICB9XG5cbiAgICByZXR1cm4gYW5pbWF0aW9uUGVyY2VudDtcbiAgfVxuXG4gIGdldCB3aWR0aEZvcmVncm91bmQoKSB7XG4gICAgcmV0dXJuIE1hdGgubWF4KDAsIE1hdGgubWluKHRoaXMud2lkdGgsIHRoaXMud2lkdGggKiAodGhpcy4jcHJlY1BlcmNlbnQgKyAodGhpcy5wZXJjZW50IC0gdGhpcy4jcHJlY1BlcmNlbnQpICogdGhpcy5hbmltYXRpb25QZXJjZW50KSkpO1xuICB9XG5cbiAgZHJhd0ZvcmVncm91bmQoY3R4LCB3aWR0aEZvcmVncm91bmQpIHtcbiAgICBjdHguc2F2ZSgpO1xuXG4gICAgY3R4LmZpbGxTdHlsZSA9IHRoaXMuc3R5bGUuZm9yZWdyb3VuZENvbG9yO1xuICAgIGN0eC5maWxsUmVjdCh0aGlzLngsIHRoaXMueSwgd2lkdGhGb3JlZ3JvdW5kLCB0aGlzLmhlaWdodCk7XG5cbiAgICBjdHgucmVzdG9yZSgpO1xuICB9XG5cbiAgZ2V0IGRlZmF1bHRTdHlsZSgpIHtcbiAgICByZXR1cm4gbmV3IFN0eWxlKHtcbiAgICAgIFwiYmFja2dyb3VuZENvbG9yXCI6IENvbnN0YW50cy5TZXR0aW5nLlBST0dSRVNTX0RFRkFVTFRfQkFDS0dST1VORCxcbiAgICAgIFwiZm9yZWdyb3VuZENvbG9yXCI6IENvbnN0YW50cy5TZXR0aW5nLlBST0dSRVNTX0RFRkFVTFRfRk9SRUdST1VORCxcbiAgICAgIFwiYW5pbWF0aW9uRHVyYXRpb25cIjogQ29uc3RhbnRzLlNldHRpbmcuUFJPR1JFU1NfREVGQVVMVF9BTklNQVRJT05fRFVSQVRJT05cbiAgICB9KTtcbiAgfVxufSIsIi8qXG4gKiBDb3B5cmlnaHQgKEMpIDIwMjAgRWxpYXN0aWsgKGVsaWFzdGlrc29mdHMuY29tKVxuICpcbiAqIFRoaXMgZmlsZSBpcyBwYXJ0IG9mIFwiSlNHYW1lVG9vbHNcIi5cbiAqXG4gKiBcIkpTR2FtZVRvb2xzXCIgaXMgZnJlZSBzb2Z0d2FyZTogeW91IGNhbiByZWRpc3RyaWJ1dGUgaXQgYW5kL29yIG1vZGlmeVxuICogaXQgdW5kZXIgdGhlIHRlcm1zIG9mIHRoZSBHTlUgR2VuZXJhbCBQdWJsaWMgTGljZW5zZSBhcyBwdWJsaXNoZWQgYnlcbiAqIHRoZSBGcmVlIFNvZnR3YXJlIEZvdW5kYXRpb24sIGVpdGhlciB2ZXJzaW9uIDMgb2YgdGhlIExpY2Vuc2UsIG9yXG4gKiAoYXQgeW91ciBvcHRpb24pIGFueSBsYXRlciB2ZXJzaW9uLlxuICpcbiAqIFwiSlNHYW1lVG9vbHNcIiBpcyBkaXN0cmlidXRlZCBpbiB0aGUgaG9wZSB0aGF0IGl0IHdpbGwgYmUgdXNlZnVsLFxuICogYnV0IFdJVEhPVVQgQU5ZIFdBUlJBTlRZOyB3aXRob3V0IGV2ZW4gdGhlIGltcGxpZWQgd2FycmFudHkgb2ZcbiAqIE1FUkNIQU5UQUJJTElUWSBvciBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRS4gIFNlZSB0aGVcbiAqIEdOVSBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlIGZvciBtb3JlIGRldGFpbHMuXG4gKlxuICogWW91IHNob3VsZCBoYXZlIHJlY2VpdmVkIGEgY29weSBvZiB0aGUgR05VIEdlbmVyYWwgUHVibGljIExpY2Vuc2VcbiAqIGFsb25nIHdpdGggXCJKU0dhbWVUb29sc1wiLiAgSWYgbm90LCBzZWUgPGh0dHA6Ly93d3cuZ251Lm9yZy9saWNlbnNlcy8+LlxuICovXG5pbXBvcnQgRXZlbnQgZnJvbSBcIi4vRXZlbnRcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUmVhY3RvciB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHRoaXMuZXZlbnRzID0ge307XG4gIH1cblxuICByZWdpc3RlckV2ZW50KGV2ZW50TmFtZSkge1xuICAgIHRoaXMuZXZlbnRzW2V2ZW50TmFtZV0gPSBuZXcgRXZlbnQoZXZlbnROYW1lKTtcbiAgfVxuXG4gIGRpc3BhdGNoRXZlbnQoZXZlbnROYW1lLCAuLi5ldmVudEFyZ3MpIHtcbiAgICBpZih0aGlzLmV2ZW50c1tldmVudE5hbWVdKSB7XG4gICAgICBjb25zdCBjYWxsYmFja3MgPSB0aGlzLmV2ZW50c1tldmVudE5hbWVdLmNhbGxiYWNrcztcbiAgICAgIGNhbGxiYWNrcy5mb3JFYWNoKGNhbGxiYWNrID0+IGNhbGxiYWNrICYmIGNhbGxiYWNrKC4uLmV2ZW50QXJncykpO1xuICAgIH1cbiAgfVxuXG4gIGFkZEV2ZW50TGlzdGVuZXIoZXZlbnROYW1lLCBjYWxsYmFjaykge1xuICAgIGlmKHRoaXMuZXZlbnRzW2V2ZW50TmFtZV0pIHRoaXMuZXZlbnRzW2V2ZW50TmFtZV0ucmVnaXN0ZXJDYWxsYmFjayhjYWxsYmFjayk7XG4gIH1cblxuICByZW1vdmVFdmVudExpc3RlbmVyKGV2ZW50TmFtZSwgY2FsbGJhY2spIHtcbiAgICBpZih0aGlzLmV2ZW50c1tldmVudE5hbWVdKSB0aGlzLmV2ZW50c1tldmVudE5hbWVdLnJlbW92ZUNhbGxiYWNrKGNhbGxiYWNrKTtcbiAgfVxuXG4gIHJlbW92ZUFsbEV2ZW50TGlzdGVuZXIoZXZlbnROYW1lKSB7XG4gICAgaWYodGhpcy5ldmVudHNbZXZlbnROYW1lXSkgdGhpcy5ldmVudHNbZXZlbnROYW1lXS5yZW1vdmVBbGxDYWxsYmFja3MoKTtcbiAgfVxufSIsIi8qXG4gKiBDb3B5cmlnaHQgKEMpIDIwMjAgRWxpYXN0aWsgKGVsaWFzdGlrc29mdHMuY29tKVxuICpcbiAqIFRoaXMgZmlsZSBpcyBwYXJ0IG9mIFwiSlNHYW1lVG9vbHNcIi5cbiAqXG4gKiBcIkpTR2FtZVRvb2xzXCIgaXMgZnJlZSBzb2Z0d2FyZTogeW91IGNhbiByZWRpc3RyaWJ1dGUgaXQgYW5kL29yIG1vZGlmeVxuICogaXQgdW5kZXIgdGhlIHRlcm1zIG9mIHRoZSBHTlUgR2VuZXJhbCBQdWJsaWMgTGljZW5zZSBhcyBwdWJsaXNoZWQgYnlcbiAqIHRoZSBGcmVlIFNvZnR3YXJlIEZvdW5kYXRpb24sIGVpdGhlciB2ZXJzaW9uIDMgb2YgdGhlIExpY2Vuc2UsIG9yXG4gKiAoYXQgeW91ciBvcHRpb24pIGFueSBsYXRlciB2ZXJzaW9uLlxuICpcbiAqIFwiSlNHYW1lVG9vbHNcIiBpcyBkaXN0cmlidXRlZCBpbiB0aGUgaG9wZSB0aGF0IGl0IHdpbGwgYmUgdXNlZnVsLFxuICogYnV0IFdJVEhPVVQgQU5ZIFdBUlJBTlRZOyB3aXRob3V0IGV2ZW4gdGhlIGltcGxpZWQgd2FycmFudHkgb2ZcbiAqIE1FUkNIQU5UQUJJTElUWSBvciBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRS4gIFNlZSB0aGVcbiAqIEdOVSBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlIGZvciBtb3JlIGRldGFpbHMuXG4gKlxuICogWW91IHNob3VsZCBoYXZlIHJlY2VpdmVkIGEgY29weSBvZiB0aGUgR05VIEdlbmVyYWwgUHVibGljIExpY2Vuc2VcbiAqIGFsb25nIHdpdGggXCJKU0dhbWVUb29sc1wiLiAgSWYgbm90LCBzZWUgPGh0dHA6Ly93d3cuZ251Lm9yZy9saWNlbnNlcy8+LlxuICovXG5pbXBvcnQgUmVhY3RvciBmcm9tIFwiLi9SZWFjdG9yXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFJlYWN0b3JDYW52YXMgZXh0ZW5kcyBSZWFjdG9yIHtcbiAgcmVnaXN0ZXJFdmVudChldmVudE5hbWUpIHtcbiAgICBpZighdGhpcy5ldmVudHNbZXZlbnROYW1lXSkgdGhpcy5ldmVudHNbZXZlbnROYW1lXSA9IFtdO1xuICB9XG5cbiAgZGlzcGF0Y2hFdmVudChldmVudE5hbWUsIC4uLmV2ZW50QXJncykge1xuICAgIGlmKHRoaXMuZXZlbnRzW2V2ZW50TmFtZV0pIHtcbiAgICAgIGNvbnN0IGV2ZW50cyA9IHRoaXMuZXZlbnRzW2V2ZW50TmFtZV07XG4gICAgICBldmVudHMuZm9yRWFjaChldmVudCA9PiBldmVudCAmJiBldmVudC5jYWxsYmFjayAmJiBldmVudC5jYWxsYmFjayguLi5ldmVudEFyZ3MpKTtcbiAgICB9XG4gIH1cblxuICBkaXNwYXRjaEV2ZW50Q29tcG9uZW50KGV2ZW50TmFtZSwgY29tcG9uZW50LCAuLi5ldmVudEFyZ3MpIHtcbiAgICBpZih0aGlzLmV2ZW50c1tldmVudE5hbWVdKSB7XG4gICAgICBjb25zdCBldmVudHMgPSB0aGlzLmV2ZW50c1tldmVudE5hbWVdO1xuICAgICAgZXZlbnRzLmZvckVhY2goZXZlbnQgPT4gZXZlbnQgJiYgZXZlbnQuY2FsbGJhY2sgJiYgZXZlbnQuY29tcG9uZW50ID09IGNvbXBvbmVudCAmJiBldmVudC5jYWxsYmFjayguLi5ldmVudEFyZ3MpKTtcbiAgICB9XG4gIH1cblxuICBhZGRFdmVudExpc3RlbmVyKGV2ZW50TmFtZSwgY29tcG9uZW50LCBjYWxsYmFjaykge1xuICAgIGlmKHRoaXMuZXZlbnRzW2V2ZW50TmFtZV0pIHtcbiAgICAgIHRoaXMuZXZlbnRzW2V2ZW50TmFtZV0ucHVzaCh7XG4gICAgICAgIFwiY29tcG9uZW50XCI6IGNvbXBvbmVudCxcbiAgICAgICAgXCJjYWxsYmFja1wiOiBjYWxsYmFja1xuICAgICAgfSk7XG4gICAgfVxuICB9XG5cbiAgcmVtb3ZlRXZlbnRMaXN0ZW5lcihldmVudE5hbWUsIGNhbGxiYWNrKSB7XG4gICAgaWYodGhpcy5ldmVudHNbZXZlbnROYW1lXSkgdGhpcy5ldmVudHNbZXZlbnROYW1lXS5maWx0ZXIoZXZlbnQgPT4gZXZlbnQgJiYgZXZlbnQuY2FsbGJhY2sgIT0gY2FsbGJhY2spO1xuICB9XG5cbiAgcmVtb3ZlRXZlbnRMaXN0ZW5lckNvbXBvbmVudChldmVudE5hbWUsIGNvbXBvbmVudCkge1xuICAgIGlmKHRoaXMuZXZlbnRzW2V2ZW50TmFtZV0pIHRoaXMuZXZlbnRzW2V2ZW50TmFtZV0uZmlsdGVyKGV2ZW50ID0+IGV2ZW50ICYmIGV2ZW50LmNvbXBvbmVudCAhPSBjb21wb25lbnQpO1xuICB9XG5cbiAgcmVtb3ZlQWxsRXZlbnRMaXN0ZW5lcigpIHtcbiAgICB0aGlzLmV2ZW50cyA9IFtdO1xuICB9XG59IiwiLypcbiAqIENvcHlyaWdodCAoQykgMjAyMCBFbGlhc3RpayAoZWxpYXN0aWtzb2Z0cy5jb20pXG4gKlxuICogVGhpcyBmaWxlIGlzIHBhcnQgb2YgXCJKU0dhbWVUb29sc1wiLlxuICpcbiAqIFwiSlNHYW1lVG9vbHNcIiBpcyBmcmVlIHNvZnR3YXJlOiB5b3UgY2FuIHJlZGlzdHJpYnV0ZSBpdCBhbmQvb3IgbW9kaWZ5XG4gKiBpdCB1bmRlciB0aGUgdGVybXMgb2YgdGhlIEdOVSBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlIGFzIHB1Ymxpc2hlZCBieVxuICogdGhlIEZyZWUgU29mdHdhcmUgRm91bmRhdGlvbiwgZWl0aGVyIHZlcnNpb24gMyBvZiB0aGUgTGljZW5zZSwgb3JcbiAqIChhdCB5b3VyIG9wdGlvbikgYW55IGxhdGVyIHZlcnNpb24uXG4gKlxuICogXCJKU0dhbWVUb29sc1wiIGlzIGRpc3RyaWJ1dGVkIGluIHRoZSBob3BlIHRoYXQgaXQgd2lsbCBiZSB1c2VmdWwsXG4gKiBidXQgV0lUSE9VVCBBTlkgV0FSUkFOVFk7IHdpdGhvdXQgZXZlbiB0aGUgaW1wbGllZCB3YXJyYW50eSBvZlxuICogTUVSQ0hBTlRBQklMSVRZIG9yIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFLiAgU2VlIHRoZVxuICogR05VIEdlbmVyYWwgUHVibGljIExpY2Vuc2UgZm9yIG1vcmUgZGV0YWlscy5cbiAqXG4gKiBZb3Ugc2hvdWxkIGhhdmUgcmVjZWl2ZWQgYSBjb3B5IG9mIHRoZSBHTlUgR2VuZXJhbCBQdWJsaWMgTGljZW5zZVxuICogYWxvbmcgd2l0aCBcIkpTR2FtZVRvb2xzXCIuICBJZiBub3QsIHNlZSA8aHR0cDovL3d3dy5nbnUub3JnL2xpY2Vuc2VzLz4uXG4gKi9cbmltcG9ydCBDb21wb25lbnQgZnJvbSBcIi4vQ29tcG9uZW50XCI7XG5pbXBvcnQgQ29udGFpbmVyIGZyb20gXCIuL0NvbnRhaW5lclwiO1xuaW1wb3J0IFV0aWxzIGZyb20gXCIuL1V0aWxzXCI7XG5pbXBvcnQgQ29uc3RhbnRzIGZyb20gXCIuL0NvbnN0YW50c1wiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBSb3cgZXh0ZW5kcyBDb250YWluZXIge1xuICBzZWxlY3RhYmxlID0gZmFsc2U7XG4gICNfaW5uZXJIZWlnaHQgPSAwO1xuICAjX2lubmVyV2lkdGggPSAwO1xuXG4gIGNvbnN0cnVjdG9yKHgsIHksIG1heFdpZHRoLCBtYXhIZWlnaHQsIHN0eWxlLCAuLi5jb21wb25lbnRzKSB7XG4gICAgc3VwZXIoeCwgeSwgbWF4V2lkdGgsIG1heEhlaWdodCwgc3R5bGUsIC4uLmNvbXBvbmVudHMpO1xuXG4gICAgaWYoIUNvbnN0YW50cy5TZXR0aW5nLkRJU0FCTEVfRVhQRVJJTUVOVEFMX09QVElNSVpBVElPTlMpIHtcbiAgICAgIHRoaXMudXBkYXRlSW5uZXJXaWR0aCgpO1xuICAgICAgdGhpcy51cGRhdGVJbm5lckhlaWdodCgpO1xuICBcbiAgICAgIHRoaXMuYWRkQ2hhbmdlQWN0aW9uKCgpID0+IHtcbiAgICAgICAgdGhpcy51cGRhdGVJbm5lcldpZHRoKCk7XG4gICAgICAgIHRoaXMudXBkYXRlSW5uZXJIZWlnaHQoKTtcbiAgICAgIH0pO1xuICAgIH1cbiAgfVxuXG4gIGRyYXcoY29udGV4dCkge1xuICAgIGlmKHRoaXMuaGlkZGVuKSByZXR1cm47XG4gICAgc3VwZXIuZHJhdyhjb250ZXh0KTtcblxuICAgIGNvbnN0IGNhbnZhcyA9IGNvbnRleHQuY2FudmFzO1xuICAgIGNvbnN0IGN0eCA9IGNhbnZhcy5nZXRDb250ZXh0KFwiMmRcIik7XG4gICAgY3R4LnNhdmUoKTtcblxuICAgIGxldCBjdHhUZW1wID0gY3R4O1xuICAgIFxuICAgIGlmKHRoaXMuaXNDdXR0aW5nKSB7XG4gICAgICBjdHhUZW1wID0gdGhpcy5jYW52YXNUbXAuZ2V0Q29udGV4dChcIjJkXCIpO1xuICAgICAgY3R4VGVtcC5zY2FsZShDb25zdGFudHMuU2V0dGluZy5QSVhFTF9SQVRJTywgQ29uc3RhbnRzLlNldHRpbmcuUElYRUxfUkFUSU8pO1xuICAgIH1cbiAgXG4gICAgaWYoc3VwZXIuY29tcG9uZW50cyAhPSBudWxsKSB7XG4gICAgICBsZXQgY3VycmVudFggPSB0aGlzLnN0eWxlLnBhZGRpbmc7XG5cbiAgICAgIHN1cGVyLmNvbXBvbmVudHMuZm9yRWFjaChjb21wb25lbnQgPT4ge1xuICAgICAgICBjdXJyZW50WCA9IHRoaXMuZHJhd0NvbXBvbmVudChjb21wb25lbnQsIGN1cnJlbnRYLCBjdHhUZW1wKTtcbiAgICAgIH0pO1xuICAgIH1cbiAgICBcbiAgICBpZih0aGlzLmlzQ3V0dGluZykge1xuICAgICAgVXRpbHMuZHJhd0ltYWdlRGF0YShjdHgsIHRoaXMuY2FudmFzVG1wLCB0aGlzLngsIHRoaXMueSwgdGhpcy53aWR0aCwgdGhpcy5oZWlnaHQsIHRoaXMueCAqIENvbnN0YW50cy5TZXR0aW5nLlBJWEVMX1JBVElPLCB0aGlzLnkgKiBDb25zdGFudHMuU2V0dGluZy5QSVhFTF9SQVRJTywgdGhpcy53aWR0aCAqIENvbnN0YW50cy5TZXR0aW5nLlBJWEVMX1JBVElPLCB0aGlzLmhlaWdodCAqIENvbnN0YW50cy5TZXR0aW5nLlBJWEVMX1JBVElPKTtcbiAgICB9XG5cbiAgICBzdXBlci5kcmF3U2Nyb2xsYmFycyhjdHgpO1xuXG4gICAgY3R4LnJlc3RvcmUoKTtcbiAgfVxuXG4gIGRyYXdDb21wb25lbnQoY29tcG9uZW50LCBjdXJyZW50WCwgY3R4KSB7XG4gICAgaWYoY29tcG9uZW50IGluc3RhbmNlb2YgQ29tcG9uZW50KSB7XG4gICAgICBjb21wb25lbnQueCA9IGN1cnJlbnRYIC0gdGhpcy5vZmZzZXRTY3JvbGxYO1xuICAgICAgY29tcG9uZW50LnkgPSB0aGlzLnN0eWxlLnBhZGRpbmcgLSB0aGlzLm9mZnNldFNjcm9sbFk7XG4gICAgICBcbiAgICAgIGlmKCFjb21wb25lbnQuaGlkZGVuKSB7XG4gICAgICAgIGlmKHRoaXMuaXNDb21wb25lbnRWaXNpYmxlKGNvbXBvbmVudCkpIHtcbiAgICAgICAgICBjb21wb25lbnQuZHJhdyhjdHgpO1xuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICBjdXJyZW50WCArPSBjb21wb25lbnQud2lkdGggKyB0aGlzLnN0eWxlLnNwYWNlQmV0d2VlbkNvbXBvbmVudHM7XG4gICAgICB9XG4gICAgfVxuICAgIFxuICAgIHJldHVybiBjdXJyZW50WDtcbiAgfVxuXG4gIHVwZGF0ZUlubmVySGVpZ2h0KCkge1xuICAgIGxldCBtYXhIZWlnaHQgPSAwO1xuICAgIHN1cGVyLmNvbXBvbmVudHMuZm9yRWFjaChjb21wb25lbnQgPT4geyBpZihjb21wb25lbnQuaGVpZ2h0ID4gbWF4SGVpZ2h0ICYmICFjb21wb25lbnQuaGlkZGVuKSBtYXhIZWlnaHQgPSBjb21wb25lbnQuaGVpZ2h0OyB9KTtcbiAgICB0aGlzLiNfaW5uZXJIZWlnaHQgPSBtYXhIZWlnaHQgKyB0aGlzLnN0eWxlLnBhZGRpbmc7XG4gIH1cblxuICB1cGRhdGVJbm5lcldpZHRoKCkge1xuICAgIGxldCB0b3RhbFdpZHRoID0gMDtcbiAgICBzdXBlci5jb21wb25lbnRzLmZvckVhY2goY29tcG9uZW50ID0+IHsgaWYoIWNvbXBvbmVudC5oaWRkZW4pIHRvdGFsV2lkdGggKz0gY29tcG9uZW50LndpZHRoIH0pO1xuICAgIHRoaXMuI19pbm5lcldpZHRoID0gdG90YWxXaWR0aCArIHRoaXMuc3R5bGUuc3BhY2VCZXR3ZWVuQ29tcG9uZW50cyAqIChzdXBlci5jb21wb25lbnRzLmxlbmd0aCAtIDEpICsgdGhpcy5zdHlsZS5wYWRkaW5nO1xuICB9XG5cbiAgZ2V0IGlubmVySGVpZ2h0KCkge1xuICAgIGlmKENvbnN0YW50cy5TZXR0aW5nLkRJU0FCTEVfRVhQRVJJTUVOVEFMX09QVElNSVpBVElPTlMpIHRoaXMudXBkYXRlSW5uZXJIZWlnaHQoKTtcbiAgICByZXR1cm4gdGhpcy4jX2lubmVySGVpZ2h0O1xuICB9XG5cbiAgZ2V0IGlubmVyV2lkdGgoKSB7XG4gICAgaWYoQ29uc3RhbnRzLlNldHRpbmcuRElTQUJMRV9FWFBFUklNRU5UQUxfT1BUSU1JWkFUSU9OUykgdGhpcy51cGRhdGVJbm5lcldpZHRoKCk7XG4gICAgcmV0dXJuIHRoaXMuI19pbm5lcldpZHRoO1xuICB9XG5cbiAgZ2V0IHdpZHRoKCkge1xuICAgIGNvbnN0IHdpZHRoID0gdGhpcy5pbm5lcldpZHRoIHx8ICh0aGlzLnBhcmVudCAmJiB0aGlzLnBhcmVudC53aWR0aCk7XG4gICAgY29uc3QgbWluID0gdGhpcy5tYXhXaWR0aCAhPSBudWxsID8gTWF0aC5taW4odGhpcy5tYXhXaWR0aCwgd2lkdGgpIDogbnVsbDtcbiAgICByZXR1cm4gdGhpcy5taW5XaWR0aCAhPSBudWxsID8gTWF0aC5tYXgodGhpcy5taW5XaWR0aCwgbWluICE9IG51bGwgPyBtaW4gOiB3aWR0aCkgOiBtaW4gIT0gbnVsbCA/IG1pbiA6IHdpZHRoO1xuICB9XG5cbiAgZ2V0IGhlaWdodCgpIHtcbiAgICBjb25zdCBoZWlnaHQgPSB0aGlzLmlubmVySGVpZ2h0IHx8ICh0aGlzLnBhcmVudCAmJiB0aGlzLnBhcmVudC5oZWlnaHQpO1xuICAgIGNvbnN0IG1pbiA9IHRoaXMubWF4SGVpZ2h0ICE9IG51bGwgPyBNYXRoLm1pbih0aGlzLm1heEhlaWdodCwgaGVpZ2h0KSA6IG51bGw7XG4gICAgcmV0dXJuIHRoaXMubWluSGVpZ2h0ICE9IG51bGwgPyBNYXRoLm1heCh0aGlzLm1pbkhlaWdodCwgbWluICE9IG51bGwgPyBtaW4gOiBoZWlnaHQpIDogbWluICE9IG51bGwgPyBtaW4gOiBoZWlnaHQ7XG4gIH1cblxuICBnZXQgZGVmYXVsdFN0eWxlKCkge1xuICAgIHJldHVybiBzdXBlci5kZWZhdWx0U3R5bGU7XG4gIH1cbn0iLCIvKlxuICogQ29weXJpZ2h0IChDKSAyMDIwIEVsaWFzdGlrIChlbGlhc3Rpa3NvZnRzLmNvbSlcbiAqXG4gKiBUaGlzIGZpbGUgaXMgcGFydCBvZiBcIkpTR2FtZVRvb2xzXCIuXG4gKlxuICogXCJKU0dhbWVUb29sc1wiIGlzIGZyZWUgc29mdHdhcmU6IHlvdSBjYW4gcmVkaXN0cmlidXRlIGl0IGFuZC9vciBtb2RpZnlcbiAqIGl0IHVuZGVyIHRoZSB0ZXJtcyBvZiB0aGUgR05VIEdlbmVyYWwgUHVibGljIExpY2Vuc2UgYXMgcHVibGlzaGVkIGJ5XG4gKiB0aGUgRnJlZSBTb2Z0d2FyZSBGb3VuZGF0aW9uLCBlaXRoZXIgdmVyc2lvbiAzIG9mIHRoZSBMaWNlbnNlLCBvclxuICogKGF0IHlvdXIgb3B0aW9uKSBhbnkgbGF0ZXIgdmVyc2lvbi5cbiAqXG4gKiBcIkpTR2FtZVRvb2xzXCIgaXMgZGlzdHJpYnV0ZWQgaW4gdGhlIGhvcGUgdGhhdCBpdCB3aWxsIGJlIHVzZWZ1bCxcbiAqIGJ1dCBXSVRIT1VUIEFOWSBXQVJSQU5UWTsgd2l0aG91dCBldmVuIHRoZSBpbXBsaWVkIHdhcnJhbnR5IG9mXG4gKiBNRVJDSEFOVEFCSUxJVFkgb3IgRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UuICBTZWUgdGhlXG4gKiBHTlUgR2VuZXJhbCBQdWJsaWMgTGljZW5zZSBmb3IgbW9yZSBkZXRhaWxzLlxuICpcbiAqIFlvdSBzaG91bGQgaGF2ZSByZWNlaXZlZCBhIGNvcHkgb2YgdGhlIEdOVSBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlXG4gKiBhbG9uZyB3aXRoIFwiSlNHYW1lVG9vbHNcIi4gIElmIG5vdCwgc2VlIDxodHRwOi8vd3d3LmdudS5vcmcvbGljZW5zZXMvPi5cbiAqL1xuaW1wb3J0IElucHV0IGZyb20gXCIuL0lucHV0XCI7XG5pbXBvcnQgQ29udGFpbmVyIGZyb20gXCIuL0NvbnRhaW5lclwiO1xuaW1wb3J0IFV0aWxzIGZyb20gXCIuL1V0aWxzXCI7XG5pbXBvcnQgU3R5bGUgZnJvbSBcIi4vU3R5bGVcIjtcbmltcG9ydCBDb25zdGFudHMgZnJvbSBcIi4vQ29uc3RhbnRzXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFNjZW5lIGV4dGVuZHMgQ29udGFpbmVyIHtcbiAgc2VsZWN0YWJsZSA9IGZhbHNlO1xuICBlbmFibGVFdmVudHMgPSBmYWxzZTtcblxuICBjb25zdHJ1Y3RvciguLi5jb21wb25lbnRzKSB7XG4gICAgc3VwZXIoKTtcbiAgICB0aGlzLmFkZEFsbCguLi5jb21wb25lbnRzKTtcbiAgfVxuXG4gIGRyYXcoY29udGV4dCkge1xuICAgIGlmKHRoaXMuaGlkZGVuKSByZXR1cm47XG4gICAgc3VwZXIuZHJhdyhjb250ZXh0KTtcblxuICAgIGNvbnN0IGNhbnZhcyA9IGNvbnRleHQuY2FudmFzO1xuICAgIGNvbnN0IGN0eCA9IGNhbnZhcy5nZXRDb250ZXh0KFwiMmRcIik7XG4gICAgY3R4LnNhdmUoKTtcbiAgICB0aGlzLmNhbnZhcy5jdXJzb3IgPSBcImRlZmF1bHRcIjtcblxuICAgIGxldCBjdHhUZW1wID0gY3R4O1xuICAgIGlmKHRoaXMubWF4V2lkdGggfHwgdGhpcy5tYXhIZWlnaHQpIGN0eFRlbXAgPSB0aGlzLmNhbnZhc1RtcC5nZXRDb250ZXh0KFwiMmRcIik7XG5cbiAgICB0aGlzLmRyYXdDb21wb25lbnRzKGN0eFRlbXApOyAvLyBEcmF3IHNvcnRlZCBjb21wb25lbnRzXG4gICAgXG4gICAgaWYodGhpcy5tYXhXaWR0aCB8fCB0aGlzLm1heEhlaWdodCkgVXRpbHMuZHJhd0ltYWdlRGF0YShjdHgsIHRoaXMuY2FudmFzVG1wLCB0aGlzLngsIHRoaXMueSwgdGhpcy53aWR0aCwgdGhpcy5oZWlnaHQsIHRoaXMueCwgdGhpcy55LCB0aGlzLndpZHRoLCB0aGlzLmhlaWdodCk7XG4gICAgc3VwZXIuZHJhd1Njcm9sbGJhcnMoY3R4KTtcblxuICAgIGN0eC5yZXN0b3JlKCk7XG4gIH1cblxuICBkcmF3Q29tcG9uZW50cyhjdHgpIHtcbiAgICB0aGlzLmNvbXBvbmVudHMuc29ydChTY2VuZS5jb21wYXJlQ29tcG9uZW50cykuZm9yRWFjaChjb21wb25lbnQgPT4gY29tcG9uZW50LmRyYXcoY3R4KSk7XG4gIH1cblxuICBnZXQgZGVmYXVsdFN0eWxlKCkge1xuICAgIHJldHVybiBuZXcgU3R5bGUoe1xuICAgICAgXCJwYWRkaW5nXCI6IENvbnN0YW50cy5TZXR0aW5nLkRFRkFVTFRfUEFERElOR1xuICAgIH0pO1xuICB9XG59IiwiLypcbiAqIENvcHlyaWdodCAoQykgMjAyMCBFbGlhc3RpayAoZWxpYXN0aWtzb2Z0cy5jb20pXG4gKlxuICogVGhpcyBmaWxlIGlzIHBhcnQgb2YgXCJKU0dhbWVUb29sc1wiLlxuICpcbiAqIFwiSlNHYW1lVG9vbHNcIiBpcyBmcmVlIHNvZnR3YXJlOiB5b3UgY2FuIHJlZGlzdHJpYnV0ZSBpdCBhbmQvb3IgbW9kaWZ5XG4gKiBpdCB1bmRlciB0aGUgdGVybXMgb2YgdGhlIEdOVSBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlIGFzIHB1Ymxpc2hlZCBieVxuICogdGhlIEZyZWUgU29mdHdhcmUgRm91bmRhdGlvbiwgZWl0aGVyIHZlcnNpb24gMyBvZiB0aGUgTGljZW5zZSwgb3JcbiAqIChhdCB5b3VyIG9wdGlvbikgYW55IGxhdGVyIHZlcnNpb24uXG4gKlxuICogXCJKU0dhbWVUb29sc1wiIGlzIGRpc3RyaWJ1dGVkIGluIHRoZSBob3BlIHRoYXQgaXQgd2lsbCBiZSB1c2VmdWwsXG4gKiBidXQgV0lUSE9VVCBBTlkgV0FSUkFOVFk7IHdpdGhvdXQgZXZlbiB0aGUgaW1wbGllZCB3YXJyYW50eSBvZlxuICogTUVSQ0hBTlRBQklMSVRZIG9yIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFLiAgU2VlIHRoZVxuICogR05VIEdlbmVyYWwgUHVibGljIExpY2Vuc2UgZm9yIG1vcmUgZGV0YWlscy5cbiAqXG4gKiBZb3Ugc2hvdWxkIGhhdmUgcmVjZWl2ZWQgYSBjb3B5IG9mIHRoZSBHTlUgR2VuZXJhbCBQdWJsaWMgTGljZW5zZVxuICogYWxvbmcgd2l0aCBcIkpTR2FtZVRvb2xzXCIuICBJZiBub3QsIHNlZSA8aHR0cDovL3d3dy5nbnUub3JnL2xpY2Vuc2VzLz4uXG4gKi9cbmltcG9ydCBDb25zdGFudHMgZnJvbSBcIi4vQ29uc3RhbnRzXCI7XG5pbXBvcnQgQm94IGZyb20gXCIuL0JveFwiO1xuaW1wb3J0IFN0eWxlIGZyb20gXCIuL1N0eWxlXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFNjcm9sbGJhciBleHRlbmRzIEJveCB7XG4gIHNlbGVjdGFibGUgPSB0cnVlO1xuXG4gIGNvbnN0cnVjdG9yKHNpemUsIHN0eWxlLCBwYXJlbnQpIHtcbiAgICBzdXBlcihudWxsLCBudWxsLCBudWxsLCBudWxsLCBzdHlsZSk7XG4gICAgdGhpcy5wYXJlbnQgPSBwYXJlbnQ7XG4gICAgdGhpcy5zaXplID0gc2l6ZSB8fCBDb25zdGFudHMuU2V0dGluZy5TQ1JPTExCQVJfREVGQVVMVF9TSVpFO1xuICB9XG4gIFxuICBkcmF3KGNvbnRleHQpIHtcbiAgICBpZih0aGlzLmhpZGRlbikgcmV0dXJuO1xuICAgIGlmKHRoaXMuY2xpY2tlZCkge1xuICAgICAgdGhpcy5ob3ZlcmVkID0gdHJ1ZTtcbiAgICB9XG4gICAgXG4gICAgc3VwZXIuZHJhdyhjb250ZXh0KTtcbiAgfVxuXG4gIGdldCBtYXhXaWR0aFBhcmVudCgpIHtcbiAgICByZXR1cm4gdGhpcy5wYXJlbnQgPyB0aGlzLnBhcmVudC5tYXhXaWR0aCAtIE1hdGguYWJzKE1hdGgubWluKDAsIHRoaXMucGFyZW50LngpKSA6IDA7XG4gIH1cblxuICBnZXQgbWF4SGVpZ2h0UGFyZW50KCkge1xuICAgIHJldHVybiB0aGlzLnBhcmVudCA/IHRoaXMucGFyZW50Lm1heEhlaWdodCAtIE1hdGguYWJzKE1hdGgubWluKDAsIHRoaXMucGFyZW50LnkpKSA6IDA7XG4gIH1cblxuICBnZXQgaW5uZXJXaWR0aFBhcmVudCgpIHtcbiAgICByZXR1cm4gdGhpcy5wYXJlbnQgPyB0aGlzLnBhcmVudC5pbm5lcldpZHRoIC0gTWF0aC5hYnMoTWF0aC5taW4oMCwgdGhpcy5wYXJlbnQueCkpIDogMDtcbiAgfVxuXG4gIGdldCBpbm5lckhlaWdodFBhcmVudCgpIHtcbiAgICByZXR1cm4gdGhpcy5wYXJlbnQgPyB0aGlzLnBhcmVudC5pbm5lckhlaWdodCAtIE1hdGguYWJzKE1hdGgubWluKDAsIHRoaXMucGFyZW50LnkpKSA6IDA7XG4gIH1cblxuICBnZXQgbWF4V2lkdGgoKSB7XG4gICAgcmV0dXJuIHRoaXMud2lkdGg7XG4gIH1cblxuICBnZXQgbWF4SGVpZ2h0KCkge1xuICAgIHJldHVybiB0aGlzLmhlaWdodDtcbiAgfVxuXG4gIGdldCBjb250ZW50UmF0aW9YKCkge1xuICAgIHJldHVybiB0aGlzLnBhcmVudCA/IHRoaXMubWF4V2lkdGhQYXJlbnQgLyB0aGlzLmlubmVyV2lkdGhQYXJlbnQgOiAwO1xuICB9XG5cbiAgZ2V0IGNvbnRlbnRSYXRpb1koKSB7XG4gICAgcmV0dXJuIHRoaXMucGFyZW50ID8gdGhpcy5tYXhIZWlnaHRQYXJlbnQgLyB0aGlzLmlubmVySGVpZ2h0UGFyZW50IDogMDtcbiAgfVxuXG4gIGdldCB3aWR0aCgpIHtcbiAgICByZXR1cm4gdGhpcy5tYXhXaWR0aFBhcmVudCAqIHRoaXMuY29udGVudFJhdGlvWDtcbiAgfVxuXG4gIGdldCBoZWlnaHQoKSB7XG4gICAgcmV0dXJuIHRoaXMubWF4SGVpZ2h0UGFyZW50ICogdGhpcy5jb250ZW50UmF0aW9ZO1xuICB9XG5cbiAgZ2V0IHdpbmRvd1Njcm9sbFNpemVYKCkge1xuICAgIHJldHVybiB0aGlzLmlubmVyV2lkdGhQYXJlbnQgLSB0aGlzLm1heFdpZHRoUGFyZW50O1xuICB9XG5cbiAgZ2V0IHdpbmRvd1Njcm9sbFNpemVZKCkge1xuICAgIHJldHVybiB0aGlzLmlubmVySGVpZ2h0UGFyZW50IC0gdGhpcy5tYXhIZWlnaHRQYXJlbnQ7XG4gIH1cblxuICBnZXQgcGVyY2VudFNjcm9sbGJhclgoKSB7XG4gICAgcmV0dXJuIHRoaXMucGFyZW50ID8gdGhpcy5wYXJlbnQub2Zmc2V0U2Nyb2xsWCAvIHRoaXMud2luZG93U2Nyb2xsU2l6ZVggOiAwO1xuICB9XG5cbiAgZ2V0IHBlcmNlbnRTY3JvbGxiYXJZKCkge1xuICAgIHJldHVybiB0aGlzLnBhcmVudCA/IHRoaXMucGFyZW50Lm9mZnNldFNjcm9sbFkgLyB0aGlzLndpbmRvd1Njcm9sbFNpemVZIDogMDtcbiAgfVxuXG4gIGdldCBzY3JvbGxBcmVhU2l6ZVgoKSB7XG4gICAgcmV0dXJuIHRoaXMubWF4V2lkdGhQYXJlbnQgLSB0aGlzLndpZHRoO1xuICB9XG5cbiAgZ2V0IHNjcm9sbEFyZWFTaXplWSgpIHtcbiAgICByZXR1cm4gdGhpcy5tYXhIZWlnaHRQYXJlbnQgLSB0aGlzLmhlaWdodDtcbiAgfVxuXG4gIGdldCB4KCkge1xuICAgIHJldHVybiB0aGlzLnBhcmVudCA/IE1hdGguYWJzKHRoaXMucGFyZW50LngpICsgdGhpcy5zY3JvbGxBcmVhU2l6ZVggKiB0aGlzLnBlcmNlbnRTY3JvbGxiYXJYIDogMDtcbiAgfVxuXG4gIGdldCB5KCkge1xuICAgIHJldHVybiB0aGlzLnBhcmVudCA/IE1hdGguYWJzKHRoaXMucGFyZW50LnkpICsgdGhpcy5zY3JvbGxBcmVhU2l6ZVkgKiB0aGlzLnBlcmNlbnRTY3JvbGxiYXJZIDogMDtcbiAgfVxuXG4gIGdldCBkZWZhdWx0U3R5bGUoKSB7XG4gICAgcmV0dXJuIG5ldyBTdHlsZSh7XG4gICAgICBcImJhY2tncm91bmRDb2xvclwiOiBDb25zdGFudHMuU2V0dGluZy5TQ1JPTExCQVJfREVGQVVMVF9CQUNLR1JPVU5ELFxuICAgICAgXCJiYWNrZ3JvdW5kQ29sb3JIb3ZlclwiOiBDb25zdGFudHMuU2V0dGluZy5TQ1JPTExCQVJfREVGQVVMVF9IT1ZFUl9CQUNLR1JPVU5ELFxuICAgICAgXCJiYWNrZ3JvdW5kQ29sb3JEb3duXCI6IENvbnN0YW50cy5TZXR0aW5nLlNDUk9MTEJBUl9ERUZBVUxUX0NMSUNLX0JBQ0tHUk9VTkQsXG4gICAgICBcImJvcmRlclNpemVcIjogMFxuICAgIH0pO1xuICB9XG5cbiAgY29tcGFyZVRvQ29tcG9uZW50KG90aGVyQ29tcG9uZW50KSB7XG4gICAgcmV0dXJuIG90aGVyQ29tcG9uZW50LmNvbXBhcmVUb1Njcm9sbGJhcih0aGlzKTtcbiAgfVxuXG4gIGNvbXBhcmVUb1Njcm9sbGJhcihvdGhlckNvbXBvbmVudCkge1xuICAgIHJldHVybiAwO1xuICB9XG59IiwiLypcbiAqIENvcHlyaWdodCAoQykgMjAyMCBFbGlhc3RpayAoZWxpYXN0aWtzb2Z0cy5jb20pXG4gKlxuICogVGhpcyBmaWxlIGlzIHBhcnQgb2YgXCJKU0dhbWVUb29sc1wiLlxuICpcbiAqIFwiSlNHYW1lVG9vbHNcIiBpcyBmcmVlIHNvZnR3YXJlOiB5b3UgY2FuIHJlZGlzdHJpYnV0ZSBpdCBhbmQvb3IgbW9kaWZ5XG4gKiBpdCB1bmRlciB0aGUgdGVybXMgb2YgdGhlIEdOVSBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlIGFzIHB1Ymxpc2hlZCBieVxuICogdGhlIEZyZWUgU29mdHdhcmUgRm91bmRhdGlvbiwgZWl0aGVyIHZlcnNpb24gMyBvZiB0aGUgTGljZW5zZSwgb3JcbiAqIChhdCB5b3VyIG9wdGlvbikgYW55IGxhdGVyIHZlcnNpb24uXG4gKlxuICogXCJKU0dhbWVUb29sc1wiIGlzIGRpc3RyaWJ1dGVkIGluIHRoZSBob3BlIHRoYXQgaXQgd2lsbCBiZSB1c2VmdWwsXG4gKiBidXQgV0lUSE9VVCBBTlkgV0FSUkFOVFk7IHdpdGhvdXQgZXZlbiB0aGUgaW1wbGllZCB3YXJyYW50eSBvZlxuICogTUVSQ0hBTlRBQklMSVRZIG9yIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFLiAgU2VlIHRoZVxuICogR05VIEdlbmVyYWwgUHVibGljIExpY2Vuc2UgZm9yIG1vcmUgZGV0YWlscy5cbiAqXG4gKiBZb3Ugc2hvdWxkIGhhdmUgcmVjZWl2ZWQgYSBjb3B5IG9mIHRoZSBHTlUgR2VuZXJhbCBQdWJsaWMgTGljZW5zZVxuICogYWxvbmcgd2l0aCBcIkpTR2FtZVRvb2xzXCIuICBJZiBub3QsIHNlZSA8aHR0cDovL3d3dy5nbnUub3JnL2xpY2Vuc2VzLz4uXG4gKi9cbmltcG9ydCBTY3JvbGxiYXIgZnJvbSBcIi4vU2Nyb2xsYmFyXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFNjcm9sbGJhckhvcml6b250YWwgZXh0ZW5kcyBTY3JvbGxiYXIge1xuICBzZWxlY3RhYmxlID0gdHJ1ZTtcblxuICBjb25zdHJ1Y3RvcihzaXplLCBzdHlsZSwgcGFyZW50KSB7XG4gICAgc3VwZXIoc2l6ZSwgc3R5bGUsIHBhcmVudCk7XG5cbiAgICB0aGlzLmFkZE1vdmVBY3Rpb24oKGRlbHRhWCkgPT4ge1xuICAgICAgaWYodGhpcy5wYXJlbnQpIHtcbiAgICAgICAgY29uc3QgcGVyY2VudFNjcm9sbGJhck5leHQgPSBNYXRoLmFicygodGhpcy5wYXJlbnQueCAtIE1hdGgubWF4KHRoaXMucGFyZW50LngsIHRoaXMueCArIC1kZWx0YVgpKSAvICh0aGlzLnBhcmVudC53aWR0aCAtIHRoaXMud2lkdGgpKTtcbiAgICAgICAgY29uc3QgbmV3RGVsdGFYID0gKHRoaXMud2luZG93U2Nyb2xsU2l6ZVggKiBwZXJjZW50U2Nyb2xsYmFyTmV4dCkgLSB0aGlzLnBhcmVudC5vZmZzZXRTY3JvbGxYO1xuICAgICAgICB0aGlzLnBhcmVudC5vZmZzZXRTY3JvbGxYICs9IG5ld0RlbHRhWDtcblxuICAgICAgICBpZih0aGlzLnBhcmVudC5yZWFjdG9yKSB7XG4gICAgICAgICAgdGhpcy5wYXJlbnQucmVhY3Rvci5kaXNwYXRjaEV2ZW50KFwib25TY3JvbGxcIiwgbmV3RGVsdGFYLCAwKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0pO1xuICB9XG4gIFxuICBkcmF3KGNvbnRleHQpIHtcbiAgICBpZih0aGlzLnNjcm9sbEFyZWFTaXplWCA+IDApIHtcbiAgICAgIHN1cGVyLmRyYXcoY29udGV4dCk7XG4gICAgfVxuICB9XG5cbiAgZ2V0IGhlaWdodCgpIHtcbiAgICByZXR1cm4gdGhpcy5zaXplO1xuICB9XG5cbiAgZ2V0IHkoKSB7XG4gICAgcmV0dXJuIHRoaXMucGFyZW50ID8gdGhpcy5wYXJlbnQueSArIHRoaXMucGFyZW50LmhlaWdodCAtIHRoaXMuc2l6ZSA6IG51bGw7XG4gIH1cbn0iLCIvKlxuICogQ29weXJpZ2h0IChDKSAyMDIwIEVsaWFzdGlrIChlbGlhc3Rpa3NvZnRzLmNvbSlcbiAqXG4gKiBUaGlzIGZpbGUgaXMgcGFydCBvZiBcIkpTR2FtZVRvb2xzXCIuXG4gKlxuICogXCJKU0dhbWVUb29sc1wiIGlzIGZyZWUgc29mdHdhcmU6IHlvdSBjYW4gcmVkaXN0cmlidXRlIGl0IGFuZC9vciBtb2RpZnlcbiAqIGl0IHVuZGVyIHRoZSB0ZXJtcyBvZiB0aGUgR05VIEdlbmVyYWwgUHVibGljIExpY2Vuc2UgYXMgcHVibGlzaGVkIGJ5XG4gKiB0aGUgRnJlZSBTb2Z0d2FyZSBGb3VuZGF0aW9uLCBlaXRoZXIgdmVyc2lvbiAzIG9mIHRoZSBMaWNlbnNlLCBvclxuICogKGF0IHlvdXIgb3B0aW9uKSBhbnkgbGF0ZXIgdmVyc2lvbi5cbiAqXG4gKiBcIkpTR2FtZVRvb2xzXCIgaXMgZGlzdHJpYnV0ZWQgaW4gdGhlIGhvcGUgdGhhdCBpdCB3aWxsIGJlIHVzZWZ1bCxcbiAqIGJ1dCBXSVRIT1VUIEFOWSBXQVJSQU5UWTsgd2l0aG91dCBldmVuIHRoZSBpbXBsaWVkIHdhcnJhbnR5IG9mXG4gKiBNRVJDSEFOVEFCSUxJVFkgb3IgRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UuICBTZWUgdGhlXG4gKiBHTlUgR2VuZXJhbCBQdWJsaWMgTGljZW5zZSBmb3IgbW9yZSBkZXRhaWxzLlxuICpcbiAqIFlvdSBzaG91bGQgaGF2ZSByZWNlaXZlZCBhIGNvcHkgb2YgdGhlIEdOVSBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlXG4gKiBhbG9uZyB3aXRoIFwiSlNHYW1lVG9vbHNcIi4gIElmIG5vdCwgc2VlIDxodHRwOi8vd3d3LmdudS5vcmcvbGljZW5zZXMvPi5cbiAqL1xuaW1wb3J0IFNjcm9sbGJhciBmcm9tIFwiLi9TY3JvbGxiYXJcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU2Nyb2xsYmFyVmVydGljYWwgZXh0ZW5kcyBTY3JvbGxiYXIge1xuICBzZWxlY3RhYmxlID0gdHJ1ZTtcblxuICBjb25zdHJ1Y3RvcihzaXplLCBzdHlsZSwgcGFyZW50KSB7XG4gICAgc3VwZXIoc2l6ZSwgc3R5bGUsIHBhcmVudCk7XG4gICAgXG4gICAgdGhpcy5hZGRNb3ZlQWN0aW9uKChkZWx0YVgsIGRlbHRhWSkgPT4ge1xuICAgICAgaWYodGhpcy5wYXJlbnQpIHtcbiAgICAgICAgY29uc3QgcGVyY2VudFNjcm9sbGJhck5leHQgPSBNYXRoLmFicygodGhpcy5wYXJlbnQueSAtIE1hdGgubWF4KHRoaXMucGFyZW50LnksIHRoaXMueSArIC1kZWx0YVkpKSAvICh0aGlzLnBhcmVudC5oZWlnaHQgLSB0aGlzLmhlaWdodCkpO1xuICAgICAgICBjb25zdCBuZXdEZWx0YVkgPSAodGhpcy53aW5kb3dTY3JvbGxTaXplWSAqIHBlcmNlbnRTY3JvbGxiYXJOZXh0KSAtIHRoaXMucGFyZW50Lm9mZnNldFNjcm9sbFk7XG4gICAgICAgIHRoaXMucGFyZW50Lm9mZnNldFNjcm9sbFkgKz0gbmV3RGVsdGFZO1xuXG4gICAgICAgIGlmKHRoaXMucGFyZW50LnJlYWN0b3IpIHtcbiAgICAgICAgICB0aGlzLnBhcmVudC5yZWFjdG9yLmRpc3BhdGNoRXZlbnQoXCJvblNjcm9sbFwiLCAwLCBuZXdEZWx0YVkpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSk7XG4gIH1cbiAgXG4gIGRyYXcoY29udGV4dCkge1xuICAgIGlmKHRoaXMuc2Nyb2xsQXJlYVNpemVZID4gMCkge1xuICAgICAgc3VwZXIuZHJhdyhjb250ZXh0KTtcbiAgICB9XG4gIH1cblxuICBnZXQgd2lkdGgoKSB7XG4gICAgcmV0dXJuIHRoaXMuc2l6ZTtcbiAgfVxuXG4gIGdldCB4KCkge1xuICAgIHJldHVybiB0aGlzLnBhcmVudCA/IHRoaXMucGFyZW50LnggKyB0aGlzLnBhcmVudC53aWR0aCAtIHRoaXMuc2l6ZSA6IDA7XG4gIH1cbn0iLCIvKlxuICogQ29weXJpZ2h0IChDKSAyMDIwIEVsaWFzdGlrIChlbGlhc3Rpa3NvZnRzLmNvbSlcbiAqXG4gKiBUaGlzIGZpbGUgaXMgcGFydCBvZiBcIkpTR2FtZVRvb2xzXCIuXG4gKlxuICogXCJKU0dhbWVUb29sc1wiIGlzIGZyZWUgc29mdHdhcmU6IHlvdSBjYW4gcmVkaXN0cmlidXRlIGl0IGFuZC9vciBtb2RpZnlcbiAqIGl0IHVuZGVyIHRoZSB0ZXJtcyBvZiB0aGUgR05VIEdlbmVyYWwgUHVibGljIExpY2Vuc2UgYXMgcHVibGlzaGVkIGJ5XG4gKiB0aGUgRnJlZSBTb2Z0d2FyZSBGb3VuZGF0aW9uLCBlaXRoZXIgdmVyc2lvbiAzIG9mIHRoZSBMaWNlbnNlLCBvclxuICogKGF0IHlvdXIgb3B0aW9uKSBhbnkgbGF0ZXIgdmVyc2lvbi5cbiAqXG4gKiBcIkpTR2FtZVRvb2xzXCIgaXMgZGlzdHJpYnV0ZWQgaW4gdGhlIGhvcGUgdGhhdCBpdCB3aWxsIGJlIHVzZWZ1bCxcbiAqIGJ1dCBXSVRIT1VUIEFOWSBXQVJSQU5UWTsgd2l0aG91dCBldmVuIHRoZSBpbXBsaWVkIHdhcnJhbnR5IG9mXG4gKiBNRVJDSEFOVEFCSUxJVFkgb3IgRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UuICBTZWUgdGhlXG4gKiBHTlUgR2VuZXJhbCBQdWJsaWMgTGljZW5zZSBmb3IgbW9yZSBkZXRhaWxzLlxuICpcbiAqIFlvdSBzaG91bGQgaGF2ZSByZWNlaXZlZCBhIGNvcHkgb2YgdGhlIEdOVSBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlXG4gKiBhbG9uZyB3aXRoIFwiSlNHYW1lVG9vbHNcIi4gIElmIG5vdCwgc2VlIDxodHRwOi8vd3d3LmdudS5vcmcvbGljZW5zZXMvPi5cbiAqL1xuaW1wb3J0IExhYmVsIGZyb20gXCIuL0xhYmVsXCI7XG5pbXBvcnQgQnV0dG9uIGZyb20gXCIuL0J1dHRvblwiO1xuaW1wb3J0IFRyaWFuZ2xlIGZyb20gXCIuL1RyaWFuZ2xlXCI7XG5pbXBvcnQgU3R5bGUgZnJvbSBcIi4vU3R5bGVcIjtcbmltcG9ydCBDb25zdGFudHMgZnJvbSBcIi4vQ29uc3RhbnRzXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFNlbGVjdCBleHRlbmRzIEJ1dHRvbiB7XG4gICNfd2lkdGggPSAwO1xuXG4gIGNvbnN0cnVjdG9yKHgsIHksIG1heFdpZHRoLCBtYXhIZWlnaHQsIHN0eWxlLCBvcHRpb25Db250YWluZXIsIGRlZmF1bHRPcHRpb24pIHtcbiAgICBzdXBlcih4LCB5LCBtYXhXaWR0aCwgbWF4SGVpZ2h0LCBzdHlsZSk7XG5cbiAgICB0aGlzLm9wdGlvbkNvbnRhaW5lciA9IG9wdGlvbkNvbnRhaW5lcjtcbiAgICBpZihkZWZhdWx0T3B0aW9uKSB0aGlzLnNlbGVjdGVkT3B0aW9uID0gZGVmYXVsdE9wdGlvbjtcblxuICAgIHRoaXMubGFiZWwgPSBuZXcgTGFiZWwoXCJcIiwgeCwgeSwgc3R5bGUpO1xuICAgIHRoaXMubGFiZWwuc3R5bGUuc2V0QWxsKHsgXCJhbGlnbmVtZW50XCI6IENvbnN0YW50cy5BbGlnbmVtZW50LkxFRlQsIFwidmVydGljYWxBbGlnbmVtZW50XCI6IENvbnN0YW50cy5WZXJ0aWNhbEFsaWduZW1lbnQuQ0VOVEVSIH0pO1xuICAgIHRoaXMudHJpYW5nbGUgPSBuZXcgVHJpYW5nbGUobnVsbCwgbnVsbCwgOCwgOCwgc3R5bGUpO1xuICAgIHRoaXMudHJpYW5nbGUuc3R5bGUuc2V0QWxsKHsgXCJhbGlnbmVtZW50XCI6IENvbnN0YW50cy5BbGlnbmVtZW50LlJJR0hULCBcInZlcnRpY2FsQWxpZ25lbWVudFwiOiBDb25zdGFudHMuVmVydGljYWxBbGlnbmVtZW50LkNFTlRFUiB9KTtcblxuICAgIHRoaXMuYWRkQWxsKHRoaXMubGFiZWwsIHRoaXMudHJpYW5nbGUpO1xuXG4gICAgdGhpcy5hZGRDbGlja0FjdGlvbigoKSA9PiB7XG4gICAgICBpZih0aGlzLm9wdGlvbkNvbnRhaW5lcikge1xuICAgICAgICB0aGlzLm9wdGlvbkNvbnRhaW5lci5oaWRkZW4gPSBmYWxzZTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIGlmKCFDb25zdGFudHMuU2V0dGluZy5ESVNBQkxFX0VYUEVSSU1FTlRBTF9PUFRJTUlaQVRJT05TKSB7XG4gICAgICB0aGlzLnVwZGF0ZVdpZHRoKCk7XG4gICAgICB0aGlzLmFkZENoYW5nZUFjdGlvbigoKSA9PiB0aGlzLnVwZGF0ZVdpZHRoKCkpO1xuICAgIH1cbiAgfVxuXG4gIGRyYXcoY29udGV4dCkge1xuICAgIGlmKHRoaXMuaGlkZGVuKSByZXR1cm47XG4gICAgaWYodGhpcy5zZWxlY3RlZE9wdGlvbiAmJiB0aGlzLnNlbGVjdGVkT3B0aW9uLmxhYmVsKSB7XG4gICAgICB0aGlzLmxhYmVsLnRleHQgPSB0aGlzLnNlbGVjdGVkT3B0aW9uLmxhYmVsLnRleHQ7XG4gICAgfVxuXG4gICAgc3VwZXIuZHJhdyhjb250ZXh0KTtcblxuICAgIGlmKHRoaXMub3B0aW9uQ29udGFpbmVyKSB7XG4gICAgICB0aGlzLm9wdGlvbkNvbnRhaW5lci5zZWxlY3QgPSB0aGlzO1xuICAgIH1cbiAgfVxuXG4gIGdldCBzZWxlY3RlZE9wdGlvbigpIHtcbiAgICByZXR1cm4gdGhpcy5vcHRpb25Db250YWluZXIgPyB0aGlzLm9wdGlvbkNvbnRhaW5lci5jb21wb25lbnRzW3RoaXMub3B0aW9uQ29udGFpbmVyLnNlbGVjdGVkT3B0aW9uXSA6IG51bGw7XG4gIH1cblxuICBzZXQgc2VsZWN0ZWRPcHRpb24oaWQpIHtcbiAgICBpZihpZCAhPSB0aGlzLm9wdGlvbkNvbnRhaW5lci5zZWxlY3RlZE9wdGlvbikge1xuICAgICAgdGhpcy5vcHRpb25Db250YWluZXIuc2VsZWN0ZWRPcHRpb24gPSBpZDtcbiAgICAgIHRoaXMucmVhY3Rvci5kaXNwYXRjaEV2ZW50KFwib25DaGFuZ2VcIiwgdGhpcyk7XG4gICAgfVxuICB9XG5cbiAgZ2V0IHRleHQoKSB7XG4gICAgcmV0dXJuIHRoaXMuc2VsZWN0ZWRPcHRpb24gJiYgdGhpcy5zZWxlY3RlZE9wdGlvbi5sYWJlbCA/IHRoaXMuc2VsZWN0ZWRPcHRpb24ubGFiZWwudGV4dCA6IG51bGw7XG4gIH1cblxuICB1cGRhdGVXaWR0aCgpIHtcbiAgICBsZXQgbWF4V2lkdGggPSB0aGlzLmxhYmVsLndpZHRoO1xuXG4gICAgaWYodGhpcy5vcHRpb25Db250YWluZXIpIHtcbiAgICAgIHRoaXMub3B0aW9uQ29udGFpbmVyLmNvbXBvbmVudHMuZm9yRWFjaChjb21wb25lbnQgPT4ge1xuICAgICAgICBjb25zdCBsYWJlbCA9IGNvbXBvbmVudC5sYWJlbDtcblxuICAgICAgICBpZihsYWJlbCkge1xuICAgICAgICAgIGlmKGxhYmVsLnVwZGF0ZVNpemVzKSBsYWJlbC51cGRhdGVTaXplcygpO1xuICAgICAgICAgIGlmKGxhYmVsLndpZHRoID4gbWF4V2lkdGgpIG1heFdpZHRoID0gbGFiZWwud2lkdGg7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH1cblxuICAgIHRoaXMuI193aWR0aCA9IG1heFdpZHRoICsgdGhpcy5zdHlsZS5wYWRkaW5nICsgdGhpcy50cmlhbmdsZS53aWR0aCArIDE1O1xuICB9XG5cbiAgZ2V0IHdpZHRoKCkge1xuICAgIGlmKENvbnN0YW50cy5TZXR0aW5nLkRJU0FCTEVfRVhQRVJJTUVOVEFMX09QVElNSVpBVElPTlMpIHRoaXMudXBkYXRlV2lkdGgoKTtcbiAgICByZXR1cm4gdGhpcy4jX3dpZHRoO1xuICB9XG5cbiAgZ2V0IGFsbENvbXBvbmVudHMoKSB7XG4gICAgY29uc3QgY29tcG9uZW50cyA9IFtdO1xuICAgIGNvbXBvbmVudHMucHVzaCguLi5zdXBlci5hbGxDb21wb25lbnRzKTtcbiAgICByZXR1cm4gY29tcG9uZW50cztcbiAgfVxuXG4gIGdldCBkZWZhdWx0U3R5bGUoKSB7XG4gICAgcmV0dXJuIG5ldyBTdHlsZSh7XG4gICAgICBcImJhY2tncm91bmRDb2xvclwiOiBDb25zdGFudHMuU2V0dGluZy5TRUxFQ1RfREVGQVVMVF9CQUNLR1JPVU5ELFxuICAgICAgXCJiYWNrZ3JvdW5kQ29sb3JIb3ZlclwiOiBDb25zdGFudHMuU2V0dGluZy5TRUxFQ1RfREVGQVVMVF9IT1ZFUl9CQUNLR1JPVU5ELFxuICAgICAgXCJiYWNrZ3JvdW5kQ29sb3JEb3duXCI6IENvbnN0YW50cy5TZXR0aW5nLlNFTEVDVF9ERUZBVUxUX0NMSUNLX0JBQ0tHUk9VTkQsXG4gICAgICBcInBhZGRpbmdcIjogQ29uc3RhbnRzLlNldHRpbmcuREVGQVVMVF9QQURESU5HXG4gICAgfSk7XG4gIH1cblxuICBnZXQgc2VsZWN0ZWQoKSB7XG4gICAgcmV0dXJuIHN1cGVyLnNlbGVjdGVkIHx8IHRoaXMub3B0aW9uQ29udGFpbmVyLnNlbGVjdGVkO1xuICB9XG5cbiAgc2V0IHNlbGVjdGVkKHNlbGVjdGVkKSB7XG4gICAgc3VwZXIuc2VsZWN0ZWQgPSBzZWxlY3RlZDtcbiAgfVxufSIsIi8qXG4gKiBDb3B5cmlnaHQgKEMpIDIwMjAgRWxpYXN0aWsgKGVsaWFzdGlrc29mdHMuY29tKVxuICpcbiAqIFRoaXMgZmlsZSBpcyBwYXJ0IG9mIFwiSlNHYW1lVG9vbHNcIi5cbiAqXG4gKiBcIkpTR2FtZVRvb2xzXCIgaXMgZnJlZSBzb2Z0d2FyZTogeW91IGNhbiByZWRpc3RyaWJ1dGUgaXQgYW5kL29yIG1vZGlmeVxuICogaXQgdW5kZXIgdGhlIHRlcm1zIG9mIHRoZSBHTlUgR2VuZXJhbCBQdWJsaWMgTGljZW5zZSBhcyBwdWJsaXNoZWQgYnlcbiAqIHRoZSBGcmVlIFNvZnR3YXJlIEZvdW5kYXRpb24sIGVpdGhlciB2ZXJzaW9uIDMgb2YgdGhlIExpY2Vuc2UsIG9yXG4gKiAoYXQgeW91ciBvcHRpb24pIGFueSBsYXRlciB2ZXJzaW9uLlxuICpcbiAqIFwiSlNHYW1lVG9vbHNcIiBpcyBkaXN0cmlidXRlZCBpbiB0aGUgaG9wZSB0aGF0IGl0IHdpbGwgYmUgdXNlZnVsLFxuICogYnV0IFdJVEhPVVQgQU5ZIFdBUlJBTlRZOyB3aXRob3V0IGV2ZW4gdGhlIGltcGxpZWQgd2FycmFudHkgb2ZcbiAqIE1FUkNIQU5UQUJJTElUWSBvciBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRS4gIFNlZSB0aGVcbiAqIEdOVSBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlIGZvciBtb3JlIGRldGFpbHMuXG4gKlxuICogWW91IHNob3VsZCBoYXZlIHJlY2VpdmVkIGEgY29weSBvZiB0aGUgR05VIEdlbmVyYWwgUHVibGljIExpY2Vuc2VcbiAqIGFsb25nIHdpdGggXCJKU0dhbWVUb29sc1wiLiAgSWYgbm90LCBzZWUgPGh0dHA6Ly93d3cuZ251Lm9yZy9saWNlbnNlcy8+LlxuICovXG5pbXBvcnQgQnV0dG9uIGZyb20gXCIuL0J1dHRvblwiO1xuaW1wb3J0IENvbnN0YW50cyBmcm9tIFwiLi9Db25zdGFudHNcIjtcbmltcG9ydCBMYWJlbCBmcm9tIFwiLi9MYWJlbFwiO1xuaW1wb3J0IFN0eWxlIGZyb20gXCIuL1N0eWxlXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFNlbGVjdE9wdGlvbiBleHRlbmRzIEJ1dHRvbiB7XG4gIGNvbnN0cnVjdG9yKGxhYmVsLCBzdHlsZSkge1xuICAgIGNvbnN0IGRlZmF1bHRMYWJlbCA9IG5ldyBMYWJlbChcIk9wdGlvblwiKTtcbiAgICBzdXBlcihudWxsLCBudWxsLCBudWxsLCBudWxsLCBzdHlsZSwgbGFiZWwgfHwgZGVmYXVsdExhYmVsKTtcbiAgICB0aGlzLmxhYmVsID0gbGFiZWwgfHwgZGVmYXVsdExhYmVsO1xuICB9XG5cbiAgYWRkKGNvbXBvbmVudCkge1xuICAgIGlmKGNvbXBvbmVudCBpbnN0YW5jZW9mIExhYmVsKSB7XG4gICAgICB0aGlzLmNsZWFyKCk7XG4gICAgICBzdXBlci5hZGQoY29tcG9uZW50KTtcbiAgICB9XG4gIH1cblxuICBnZXQgd2lkdGgoKSB7XG4gICAgcmV0dXJuIHRoaXMucGFyZW50ICYmIHRoaXMucGFyZW50LndpZHRoO1xuICB9XG5cbiAgZ2V0IGRlZmF1bHRTdHlsZSgpIHtcbiAgICByZXR1cm4gbmV3IFN0eWxlKHtcbiAgICAgIFwiYmFja2dyb3VuZENvbG9yXCI6IENvbnN0YW50cy5TZXR0aW5nLlNFTEVDVF9ERUZBVUxUX0JBQ0tHUk9VTkQsXG4gICAgICBcImJhY2tncm91bmRDb2xvckhvdmVyXCI6IENvbnN0YW50cy5TZXR0aW5nLlNFTEVDVF9ERUZBVUxUX0hPVkVSX0JBQ0tHUk9VTkQsXG4gICAgICBcImJhY2tncm91bmRDb2xvckRvd25cIjogQ29uc3RhbnRzLlNldHRpbmcuU0VMRUNUX0RFRkFVTFRfQ0xJQ0tfQkFDS0dST1VORCxcbiAgICAgIFwicGFkZGluZ1wiOiBDb25zdGFudHMuU2V0dGluZy5ERUZBVUxUX1BBRERJTkdcbiAgICB9KTtcbiAgfVxufSIsIi8qXG4gKiBDb3B5cmlnaHQgKEMpIDIwMjAgRWxpYXN0aWsgKGVsaWFzdGlrc29mdHMuY29tKVxuICpcbiAqIFRoaXMgZmlsZSBpcyBwYXJ0IG9mIFwiSlNHYW1lVG9vbHNcIi5cbiAqXG4gKiBcIkpTR2FtZVRvb2xzXCIgaXMgZnJlZSBzb2Z0d2FyZTogeW91IGNhbiByZWRpc3RyaWJ1dGUgaXQgYW5kL29yIG1vZGlmeVxuICogaXQgdW5kZXIgdGhlIHRlcm1zIG9mIHRoZSBHTlUgR2VuZXJhbCBQdWJsaWMgTGljZW5zZSBhcyBwdWJsaXNoZWQgYnlcbiAqIHRoZSBGcmVlIFNvZnR3YXJlIEZvdW5kYXRpb24sIGVpdGhlciB2ZXJzaW9uIDMgb2YgdGhlIExpY2Vuc2UsIG9yXG4gKiAoYXQgeW91ciBvcHRpb24pIGFueSBsYXRlciB2ZXJzaW9uLlxuICpcbiAqIFwiSlNHYW1lVG9vbHNcIiBpcyBkaXN0cmlidXRlZCBpbiB0aGUgaG9wZSB0aGF0IGl0IHdpbGwgYmUgdXNlZnVsLFxuICogYnV0IFdJVEhPVVQgQU5ZIFdBUlJBTlRZOyB3aXRob3V0IGV2ZW4gdGhlIGltcGxpZWQgd2FycmFudHkgb2ZcbiAqIE1FUkNIQU5UQUJJTElUWSBvciBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRS4gIFNlZSB0aGVcbiAqIEdOVSBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlIGZvciBtb3JlIGRldGFpbHMuXG4gKlxuICogWW91IHNob3VsZCBoYXZlIHJlY2VpdmVkIGEgY29weSBvZiB0aGUgR05VIEdlbmVyYWwgUHVibGljIExpY2Vuc2VcbiAqIGFsb25nIHdpdGggXCJKU0dhbWVUb29sc1wiLiAgSWYgbm90LCBzZWUgPGh0dHA6Ly93d3cuZ251Lm9yZy9saWNlbnNlcy8+LlxuICovXG5pbXBvcnQgQ29sIGZyb20gXCIuL0NvbFwiO1xuaW1wb3J0IFN0eWxlIGZyb20gXCIuL1N0eWxlXCI7XG5pbXBvcnQgQ29uc3RhbnRzIGZyb20gXCIuL0NvbnN0YW50c1wiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTZWxlY3REcm9wZG93biBleHRlbmRzIENvbCB7XG4gICNfc2VsZWN0ZWRPcHRpb247XG4gIHNlbGVjdGFibGUgPSBmYWxzZTtcblxuICBjb25zdHJ1Y3RvcihtYXhIZWlnaHREcm9wZG93biwgc3R5bGUsIC4uLm9wdGlvbnMpIHtcbiAgICBzdXBlcihudWxsLCBudWxsLCBudWxsLCBtYXhIZWlnaHREcm9wZG93biwgc3R5bGUsIC4uLm9wdGlvbnMpO1xuICAgIHRoaXMuI19zZWxlY3RlZE9wdGlvbiA9IDA7XG4gICAgdGhpcy5zZWxlY3QgPSBudWxsO1xuICB9XG5cbiAgZHJhdyhjb250ZXh0KSB7XG4gICAgc3VwZXIuZHJhdyhjb250ZXh0KTtcbiAgfVxuXG4gIGdldCB4KCkge1xuICAgIHJldHVybiB0aGlzLnNlbGVjdCAmJiB0aGlzLnNlbGVjdC54O1xuICB9XG5cbiAgZ2V0IHkoKSB7XG4gICAgY29uc3Qgc2VsZWN0SGVpZ2h0ID0gKHRoaXMuc2VsZWN0ICYmIHRoaXMuc2VsZWN0LmhlaWdodCk7XG4gICAgY29uc3QgaGVpZ2h0ID0gdGhpcy5oZWlnaHQ7XG4gICAgY29uc3QgeSA9IHRoaXMuc2VsZWN0ICYmIHRoaXMuc2VsZWN0Lnk7XG5cbiAgICBpZih0aGlzLmNhbnZhcyAmJiB0aGlzLmNhbnZhcy5zY2VuZSAmJiB5ICsgc2VsZWN0SGVpZ2h0ICsgaGVpZ2h0ID49IHRoaXMuY2FudmFzLnNjZW5lLmhlaWdodCkge1xuICAgICAgcmV0dXJuIHkgLSBoZWlnaHQ7XG4gICAgfVxuXG4gICAgcmV0dXJuIHkgKyBzZWxlY3RIZWlnaHQ7XG4gIH1cblxuICBnZXQgd2lkdGgoKSB7XG4gICAgcmV0dXJuIHRoaXMuc2VsZWN0ICYmIHRoaXMuc2VsZWN0LndpZHRoO1xuICB9XG5cbiAgZ2V0IHNlbGVjdGVkT3B0aW9uKCkge1xuICAgIHJldHVybiBNYXRoLm1heCgwLCBNYXRoLm1pbih0aGlzLmNvbXBvbmVudHMubGVuZ3RoIC0gMSwgdGhpcy4jX3NlbGVjdGVkT3B0aW9uKSk7XG4gIH1cblxuICBzZXQgc2VsZWN0ZWRPcHRpb24oaWQpIHtcbiAgICBpZihpZCAhPSB0aGlzLiNfc2VsZWN0ZWRPcHRpb24pIHtcbiAgICAgIHRoaXMuI19zZWxlY3RlZE9wdGlvbiA9IGlkO1xuICAgICAgdGhpcy5yZWFjdG9yLmRpc3BhdGNoRXZlbnQoXCJvbkNoYW5nZVwiLCB0aGlzKTtcbiAgICB9XG4gIH1cblxuICBhZGQoY29tcG9uZW50KSB7XG4gICAgc3VwZXIuYWRkKGNvbXBvbmVudCk7XG5cbiAgICBjb21wb25lbnQuYWRkQ2xpY2tBY3Rpb24oKCkgPT4ge1xuICAgICAgdGhpcy4jX3NlbGVjdGVkT3B0aW9uID0gdGhpcy5nZXRDb21wb25lbnRJZChjb21wb25lbnQpO1xuICAgICAgdGhpcy5zZWxlY3RlZCA9IGZhbHNlO1xuICAgICAgdGhpcy5oaWRkZW4gPSB0cnVlO1xuICAgICAgaWYodGhpcy5zZWxlY3QpIHRoaXMuc2VsZWN0LnNlbGVjdGVkID0gZmFsc2U7XG4gICAgfSk7XG4gIH1cblxuICBnZXQgZGVmYXVsdFN0eWxlKCkge1xuICAgIHJldHVybiBuZXcgU3R5bGUoe1xuICAgICAgXCJwYWRkaW5nXCI6IDAsXG4gICAgICBcInNwYWNlQmV0d2VlbkNvbXBvbmVudHNcIjogMCxcbiAgICAgIFwiYmFja2dyb3VuZENvbG9yXCI6IENvbnN0YW50cy5TZXR0aW5nLlNFTEVDVF9ERUZBVUxUX0JBQ0tHUk9VTkQsXG4gICAgICBcImJhY2tncm91bmRDb2xvckhvdmVyXCI6IG51bGwsXG4gICAgICBcImJhY2tncm91bmRDb2xvckRvd25cIjogbnVsbCxcbiAgICAgIFwic2Nyb2xsWERpc2FibGVkXCI6IGZhbHNlLFxuICAgICAgXCJzY3JvbGxZRGlzYWJsZWRcIjogZmFsc2VcbiAgICB9KTtcbiAgfVxuXG4gIGdldCBoaWRkZW4oKSB7XG4gICAgcmV0dXJuIHN1cGVyLmhpZGRlbiB8fCAodGhpcy5zZWxlY3QgJiYgIXRoaXMuc2VsZWN0LnNlbGVjdGVkKSB8fCAhdGhpcy5zZWxlY3Q7XG4gIH1cblxuICBzZXQgaGlkZGVuKGhpZGRlbikge1xuICAgIHJldHVybiBzdXBlci5oaWRkZW4gPSBoaWRkZW47XG4gIH1cbn0iLCIvKlxuICogQ29weXJpZ2h0IChDKSAyMDIwIEVsaWFzdGlrIChlbGlhc3Rpa3NvZnRzLmNvbSlcbiAqXG4gKiBUaGlzIGZpbGUgaXMgcGFydCBvZiBcIkpTR2FtZVRvb2xzXCIuXG4gKlxuICogXCJKU0dhbWVUb29sc1wiIGlzIGZyZWUgc29mdHdhcmU6IHlvdSBjYW4gcmVkaXN0cmlidXRlIGl0IGFuZC9vciBtb2RpZnlcbiAqIGl0IHVuZGVyIHRoZSB0ZXJtcyBvZiB0aGUgR05VIEdlbmVyYWwgUHVibGljIExpY2Vuc2UgYXMgcHVibGlzaGVkIGJ5XG4gKiB0aGUgRnJlZSBTb2Z0d2FyZSBGb3VuZGF0aW9uLCBlaXRoZXIgdmVyc2lvbiAzIG9mIHRoZSBMaWNlbnNlLCBvclxuICogKGF0IHlvdXIgb3B0aW9uKSBhbnkgbGF0ZXIgdmVyc2lvbi5cbiAqXG4gKiBcIkpTR2FtZVRvb2xzXCIgaXMgZGlzdHJpYnV0ZWQgaW4gdGhlIGhvcGUgdGhhdCBpdCB3aWxsIGJlIHVzZWZ1bCxcbiAqIGJ1dCBXSVRIT1VUIEFOWSBXQVJSQU5UWTsgd2l0aG91dCBldmVuIHRoZSBpbXBsaWVkIHdhcnJhbnR5IG9mXG4gKiBNRVJDSEFOVEFCSUxJVFkgb3IgRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UuICBTZWUgdGhlXG4gKiBHTlUgR2VuZXJhbCBQdWJsaWMgTGljZW5zZSBmb3IgbW9yZSBkZXRhaWxzLlxuICpcbiAqIFlvdSBzaG91bGQgaGF2ZSByZWNlaXZlZCBhIGNvcHkgb2YgdGhlIEdOVSBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlXG4gKiBhbG9uZyB3aXRoIFwiSlNHYW1lVG9vbHNcIi4gIElmIG5vdCwgc2VlIDxodHRwOi8vd3d3LmdudS5vcmcvbGljZW5zZXMvPi5cbiAqL1xuaW1wb3J0IENvbnN0YW50cyBmcm9tIFwiLi9Db25zdGFudHNcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU3R5bGUge1xuICAjc3R5bGVzID0ge307XG4gIGNvbXBvbmVudDtcblxuICBjb25zdHJ1Y3RvcihzdHlsZXMpIHtcbiAgICB0aGlzLnNldEFsbChzdHlsZXMpO1xuICB9XG5cbiAgZ2V0IGZvbnRDb2xvcigpIHtcbiAgICByZXR1cm4gdGhpcy4jc3R5bGVzLmZvbnRDb2xvcjtcbiAgfVxuXG4gIGdldCBmb250Q29sb3JIb3ZlcigpIHtcbiAgICByZXR1cm4gdGhpcy4jc3R5bGVzLmZvbnRDb2xvckhvdmVyO1xuICB9XG5cbiAgZ2V0IGZvbnRDb2xvckRvd24oKSB7XG4gICAgcmV0dXJuIHRoaXMuI3N0eWxlcy5mb250Q29sb3JEb3duO1xuICB9XG5cbiAgZ2V0IGZvbnRGYW1pbHkoKSB7XG4gICAgcmV0dXJuIHRoaXMuI3N0eWxlcy5mb250RmFtaWx5ICE9IG51bGwgPyB0aGlzLiNzdHlsZXMuZm9udEZhbWlseSA6IENvbnN0YW50cy5TZXR0aW5nLkZPTlRfRkFNSUxZO1xuICB9XG5cbiAgZ2V0IGZvbnRTaXplKCkge1xuICAgIHJldHVybiB0aGlzLiNzdHlsZXMuZm9udFNpemUgIT0gbnVsbCA/IHRoaXMuI3N0eWxlcy5mb250U2l6ZSA6IENvbnN0YW50cy5TZXR0aW5nLkZPTlRfU0laRTtcbiAgfVxuXG4gIGdldCBib2xkKCkge1xuICAgIHJldHVybiB0aGlzLiNzdHlsZXMuYm9sZDtcbiAgfVxuXG4gIGdldCB1bmRlcmxpbmUoKSB7XG4gICAgcmV0dXJuIHRoaXMuI3N0eWxlcy51bmRlcmxpbmU7XG4gIH1cblxuICBnZXQgd3JhcCgpIHtcbiAgICByZXR1cm4gdGhpcy4jc3R5bGVzLndyYXA7XG4gIH1cblxuICBnZXQgYmFja2dyb3VuZENvbG9yKCkge1xuICAgIHJldHVybiB0aGlzLiNzdHlsZXMuYmFja2dyb3VuZENvbG9yO1xuICB9XG5cbiAgZ2V0IGZvcmVncm91bmRDb2xvcigpIHtcbiAgICByZXR1cm4gdGhpcy4jc3R5bGVzLmZvcmVncm91bmRDb2xvcjtcbiAgfVxuXG4gIGdldCBiYWNrZ3JvdW5kQ29sb3JIb3ZlcigpIHtcbiAgICByZXR1cm4gdGhpcy4jc3R5bGVzLmJhY2tncm91bmRDb2xvckhvdmVyO1xuICB9XG5cbiAgZ2V0IGJhY2tncm91bmRDb2xvckRvd24oKSB7XG4gICAgcmV0dXJuIHRoaXMuI3N0eWxlcy5iYWNrZ3JvdW5kQ29sb3JEb3duO1xuICB9XG5cbiAgZ2V0IGJvcmRlckNvbG9yKCkge1xuICAgIHJldHVybiB0aGlzLiNzdHlsZXMuYm9yZGVyQ29sb3I7XG4gIH1cblxuICBnZXQgYm9yZGVyQ29sb3JIb3ZlcigpIHtcbiAgICByZXR1cm4gdGhpcy4jc3R5bGVzLmJvcmRlckNvbG9ySG92ZXI7XG4gIH1cblxuICBnZXQgYm9yZGVyQ29sb3JEb3duKCkge1xuICAgIHJldHVybiB0aGlzLiNzdHlsZXMuYm9yZGVyQ29sb3JEb3duO1xuICB9XG5cbiAgZ2V0IGJvcmRlckNvbG9yU2VsZWN0ZWQoKSB7XG4gICAgcmV0dXJuIHRoaXMuI3N0eWxlcy5ib3JkZXJDb2xvclNlbGVjdGVkICE9IG51bGwgPyB0aGlzLiNzdHlsZXMuYm9yZGVyQ29sb3JTZWxlY3RlZCA6IENvbnN0YW50cy5TZXR0aW5nLkRFRkFVTFRfQk9SREVSX0NPTE9SX1NFTEVDVEVEO1xuICB9XG5cbiAgZ2V0IGJvcmRlclNpemUoKSB7XG4gICAgcmV0dXJuIHRoaXMuI3N0eWxlcy5ib3JkZXJTaXplICE9IG51bGwgPyB0aGlzLiNzdHlsZXMuYm9yZGVyU2l6ZSA6IENvbnN0YW50cy5TZXR0aW5nLkRFRkFVTFRfQk9SREVSX1NJWkU7XG4gIH1cblxuICBnZXQgc2VsZWN0Q29sb3IoKSB7XG4gICAgcmV0dXJuIHRoaXMuI3N0eWxlcy5zZWxlY3RDb2xvcjtcbiAgfVxuXG4gIGdldCBhbGlnbmVtZW50KCkge1xuICAgIHJldHVybiB0aGlzLiNzdHlsZXMuYWxpZ25lbWVudDtcbiAgfVxuXG4gIGdldCB2ZXJ0aWNhbEFsaWduZW1lbnQoKSB7XG4gICAgcmV0dXJuIHRoaXMuI3N0eWxlcy52ZXJ0aWNhbEFsaWduZW1lbnQ7XG4gIH1cblxuICBnZXQgZGlzYWJsZUFuaW1hdGlvbigpIHtcbiAgICByZXR1cm4gdGhpcy4jc3R5bGVzLmRpc2FibGVBbmltYXRpb247XG4gIH1cblxuICBnZXQgc2Nyb2xsWERpc2FibGVkKCkge1xuICAgIHJldHVybiB0aGlzLiNzdHlsZXMuc2Nyb2xsWERpc2FibGVkO1xuICB9XG5cbiAgZ2V0IHNjcm9sbFlEaXNhYmxlZCgpIHtcbiAgICByZXR1cm4gdGhpcy4jc3R5bGVzLnNjcm9sbFlEaXNhYmxlZDtcbiAgfVxuXG4gIGdldCBwYWRkaW5nKCkge1xuICAgIHJldHVybiB0aGlzLiNzdHlsZXMucGFkZGluZyAhPSBudWxsID8gdGhpcy4jc3R5bGVzLnBhZGRpbmcgOiBDb25zdGFudHMuU2V0dGluZy5ERUZBVUxUX1BBRERJTkc7XG4gIH1cblxuICBnZXQgc3BhY2VCZXR3ZWVuQ29tcG9uZW50cygpIHtcbiAgICByZXR1cm4gdGhpcy4jc3R5bGVzLnNwYWNlQmV0d2VlbkNvbXBvbmVudHMgIT0gbnVsbCA/IHRoaXMuI3N0eWxlcy5zcGFjZUJldHdlZW5Db21wb25lbnRzIDogQ29uc3RhbnRzLlNldHRpbmcuREVGQVVMVF9TUEFDSU5HO1xuICB9XG5cbiAgZ2V0IGhpZGRlbigpIHtcbiAgICByZXR1cm4gdGhpcy4jc3R5bGVzLmhpZGRlbjtcbiAgfVxuXG4gIGdldCBibHVyQmFja2dyb3VuZCgpIHtcbiAgICByZXR1cm4gdGhpcy4jc3R5bGVzLmJsdXJCYWNrZ3JvdW5kO1xuICB9XG5cbiAgZ2V0IGxpbmVXaWR0aCgpIHtcbiAgICByZXR1cm4gdGhpcy4jc3R5bGVzLmxpbmVXaWR0aDtcbiAgfVxuXG4gIGdldCBhbmltYXRpb25EdXJhdGlvbigpIHtcbiAgICByZXR1cm4gdGhpcy4jc3R5bGVzLmFuaW1hdGlvbkR1cmF0aW9uICE9IG51bGwgPyB0aGlzLiNzdHlsZXMuYW5pbWF0aW9uRHVyYXRpb24gOiBDb25zdGFudHMuU2V0dGluZy5ERUZBVUxUX0FOSU1BVElPTl9EVVJBVElPTjtcbiAgfVxuXG4gIGdldCBmb3JlZ3JvdW5kKCkge1xuICAgIHJldHVybiB0aGlzLiNzdHlsZXMuZm9yZWdyb3VuZDtcbiAgfVxuXG4gIGdldCB6SW5kZXgoKSB7XG4gICAgcmV0dXJuIHRoaXMuI3N0eWxlcy56SW5kZXggIT0gbnVsbCA/IHRoaXMuI3N0eWxlcy56SW5kZXggOiAwO1xuICB9XG4gIFxuICBnZXQgbGluZUNhcCgpIHtcbiAgICByZXR1cm4gdGhpcy4jc3R5bGVzLmxpbmVDYXA7XG4gIH1cbiAgXG4gIGdldCBmaWxsKCkge1xuICAgIHJldHVybiB0aGlzLiNzdHlsZXMuZmlsbDtcbiAgfVxuXG4gIGdldCBmaWxsQ29sb3IoKSB7XG4gICAgcmV0dXJuIHRoaXMuI3N0eWxlcy5maWxsQ29sb3I7XG4gIH1cblxuICBnZXQgY29sb3IoKSB7XG4gICAgcmV0dXJuIHRoaXMuI3N0eWxlcy5jb2xvcjtcbiAgfVxuXG4gIGdldCBtb3ZhYmxlKCkge1xuICAgIHJldHVybiB0aGlzLiNzdHlsZXMubW92YWJsZSB8fCBmYWxzZTtcbiAgfVxuXG4gIHNldChzdHlsZSwgdmFsdWUpIHtcbiAgICBpZih0aGlzLiNzdHlsZXNbc3R5bGVdICE9IHZhbHVlKSB7XG4gICAgICB0aGlzLiNzdHlsZXNbc3R5bGVdID0gdmFsdWU7XG4gICAgICBpZih0aGlzLmNvbXBvbmVudCAmJiB0aGlzLmNvbXBvbmVudC5yZWFjdG9yKSB0aGlzLmNvbXBvbmVudC5yZWFjdG9yLmRpc3BhdGNoRXZlbnQoXCJvbkNoYW5nZVwiLCB0aGlzKTtcbiAgICB9XG4gIH1cblxuICBzZXRBbGwoc3R5bGVzKSB7XG4gICAgaWYoc3R5bGVzKSB7XG4gICAgICBmb3IoY29uc3Qgc3R5bGUgaW4gc3R5bGVzKSB7XG4gICAgICAgIGlmKHN0eWxlcy5oYXNPd25Qcm9wZXJ0eShzdHlsZSkpIHtcbiAgICAgICAgICB0aGlzLnNldChzdHlsZSwgc3R5bGVzW3N0eWxlXSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBjb3B5KCkge1xuICAgIHJldHVybiBuZXcgU3R5bGUodGhpcy4jc3R5bGVzKTtcbiAgfVxuXG4gIGdldFN0eWxlcygpIHtcbiAgICBjb25zdCBzdHlsZXMgPSB7fTtcblxuICAgIGZvcihjb25zdCBzdHlsZSBpbiB0aGlzLiNzdHlsZXMpIHtcbiAgICAgIGlmKHRoaXMuI3N0eWxlcy5oYXNPd25Qcm9wZXJ0eShzdHlsZSkpIHtcbiAgICAgICAgc3R5bGVzW3N0eWxlXSA9IHRoaXMuI3N0eWxlc1tzdHlsZV07XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHN0eWxlcztcbiAgfVxufSIsIi8qXG4gKiBDb3B5cmlnaHQgKEMpIDIwMjAgRWxpYXN0aWsgKGVsaWFzdGlrc29mdHMuY29tKVxuICpcbiAqIFRoaXMgZmlsZSBpcyBwYXJ0IG9mIFwiSlNHYW1lVG9vbHNcIi5cbiAqXG4gKiBcIkpTR2FtZVRvb2xzXCIgaXMgZnJlZSBzb2Z0d2FyZTogeW91IGNhbiByZWRpc3RyaWJ1dGUgaXQgYW5kL29yIG1vZGlmeVxuICogaXQgdW5kZXIgdGhlIHRlcm1zIG9mIHRoZSBHTlUgR2VuZXJhbCBQdWJsaWMgTGljZW5zZSBhcyBwdWJsaXNoZWQgYnlcbiAqIHRoZSBGcmVlIFNvZnR3YXJlIEZvdW5kYXRpb24sIGVpdGhlciB2ZXJzaW9uIDMgb2YgdGhlIExpY2Vuc2UsIG9yXG4gKiAoYXQgeW91ciBvcHRpb24pIGFueSBsYXRlciB2ZXJzaW9uLlxuICpcbiAqIFwiSlNHYW1lVG9vbHNcIiBpcyBkaXN0cmlidXRlZCBpbiB0aGUgaG9wZSB0aGF0IGl0IHdpbGwgYmUgdXNlZnVsLFxuICogYnV0IFdJVEhPVVQgQU5ZIFdBUlJBTlRZOyB3aXRob3V0IGV2ZW4gdGhlIGltcGxpZWQgd2FycmFudHkgb2ZcbiAqIE1FUkNIQU5UQUJJTElUWSBvciBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRS4gIFNlZSB0aGVcbiAqIEdOVSBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlIGZvciBtb3JlIGRldGFpbHMuXG4gKlxuICogWW91IHNob3VsZCBoYXZlIHJlY2VpdmVkIGEgY29weSBvZiB0aGUgR05VIEdlbmVyYWwgUHVibGljIExpY2Vuc2VcbiAqIGFsb25nIHdpdGggXCJKU0dhbWVUb29sc1wiLiAgSWYgbm90LCBzZWUgPGh0dHA6Ly93d3cuZ251Lm9yZy9saWNlbnNlcy8+LlxuICovXG5pbXBvcnQgQ29sIGZyb20gXCIuL0NvbFwiO1xuaW1wb3J0IENvbnN0YW50cyBmcm9tIFwiLi9Db25zdGFudHNcIjtcbmltcG9ydCBTdHlsZSBmcm9tIFwiLi9TdHlsZVwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBUb29sdGlwIGV4dGVuZHMgQ29sIHtcbiAgc2VsZWN0YWJsZSA9IGZhbHNlO1xuICBcbiAgY29uc3RydWN0b3Ioc3R5bGUsIC4uLmNvbXBvbmVudHMpIHtcbiAgICBzdXBlcihudWxsLCBudWxsLCBudWxsLCBudWxsLCBzdHlsZSwgLi4uY29tcG9uZW50cyk7XG4gICAgdGhpcy5kaXNhYmxlZCA9IHRydWU7XG4gIH1cblxuICBkcmF3KGNvbnRleHQpIHtcbiAgICBpZih0aGlzLmhpZGRlbikgcmV0dXJuO1xuICAgIGNvbnN0IGNhbnZhcyA9IGNvbnRleHQuY2FudmFzO1xuICAgIGNvbnN0IGN0eCA9IGNhbnZhcy5nZXRDb250ZXh0KFwiMmRcIik7XG4gICAgY3R4LnNhdmUoKTtcblxuICAgIGlmKHRoaXMueCArIHRoaXMud2lkdGggKyB0aGlzLnN0eWxlLnBhZGRpbmcgPiB0aGlzLnBhcmVudC53aWR0aCkge1xuICAgICAgdGhpcy54IC09ICh0aGlzLndpZHRoICsgdGhpcy5zdHlsZS5wYWRkaW5nKTtcbiAgICB9XG5cbiAgICBpZih0aGlzLnkgKyB0aGlzLmhlaWdodCArIHRoaXMuc3R5bGUucGFkZGluZyA+IHRoaXMucGFyZW50LmhlaWdodCkge1xuICAgICAgdGhpcy55IC09ICh0aGlzLmhlaWdodCArIHRoaXMuc3R5bGUucGFkZGluZyk7XG4gICAgfVxuXG4gICAgc3VwZXIuZHJhdyhjdHgpO1xuICAgIFxuICAgIGN0eC5yZXN0b3JlKCk7XG4gIH1cblxuICBnZXQgd2lkdGgoKSB7XG4gICAgcmV0dXJuIHN1cGVyLndpZHRoICsgdGhpcy5zdHlsZS5wYWRkaW5nO1xuICB9XG5cbiAgZ2V0IGhlaWdodCgpIHtcbiAgICByZXR1cm4gc3VwZXIuaGVpZ2h0ICsgdGhpcy5zdHlsZS5wYWRkaW5nO1xuICB9XG5cbiAgc2V0IHdpZHRoKHdpZHRoKSB7XG4gICAgc3VwZXIud2lkdGggPSB3aWR0aDtcbiAgfVxuXG4gIHNldCBoZWlnaHQoaGVpZ2h0KSB7XG4gICAgc3VwZXIuaGVpZ2h0ID0gaGVpZ2h0O1xuICB9XG5cbiAgZ2V0IGRlZmF1bHRTdHlsZSgpIHtcbiAgICByZXR1cm4gbmV3IFN0eWxlKHtcbiAgICAgIFwiYmFja2dyb3VuZENvbG9yXCI6IENvbnN0YW50cy5TZXR0aW5nLlRPT0xUSVBfREVGQVVMVF9CQUNLR1JPVU5EXG4gICAgfSk7XG4gIH1cblxuICBjb21wYXJlVG9Db21wb25lbnQob3RoZXJDb21wb25lbnQpIHtcbiAgICByZXR1cm4gb3RoZXJDb21wb25lbnQuY29tcGFyZVRvVG9vbHRpcCh0aGlzKTtcbiAgfVxuXG4gIGNvbXBhcmVUb01lbnUob3RoZXJDb21wb25lbnQpIHtcbiAgICByZXR1cm4gMTtcbiAgfVxuXG4gIGNvbXBhcmVUb1Rvb2x0aXAob3RoZXJDb21wb25lbnQpIHtcbiAgICByZXR1cm4gMDtcbiAgfVxuXG4gIGNvbXBhcmVUb05vdGlmaWNhdGlvbihvdGhlckNvbXBvbmVudCkge1xuICAgIHJldHVybiAxO1xuICB9XG5cbiAgZ2V0IGhpZGRlbigpIHtcbiAgICByZXR1cm4gc3VwZXIuaGlkZGVuIHx8IHRoaXMuZGlzYWJsZWQ7XG4gIH1cblxuICBzZXQgaGlkZGVuKGhpZGRlbikge1xuICAgIHN1cGVyLmhpZGRlbiA9IGhpZGRlbjtcbiAgICB0aGlzLmRpc2FibGVkID0gaGlkZGVuO1xuICB9XG59IiwiLypcbiAqIENvcHlyaWdodCAoQykgMjAyMCBFbGlhc3RpayAoZWxpYXN0aWtzb2Z0cy5jb20pXG4gKlxuICogVGhpcyBmaWxlIGlzIHBhcnQgb2YgXCJKU0dhbWVUb29sc1wiLlxuICpcbiAqIFwiSlNHYW1lVG9vbHNcIiBpcyBmcmVlIHNvZnR3YXJlOiB5b3UgY2FuIHJlZGlzdHJpYnV0ZSBpdCBhbmQvb3IgbW9kaWZ5XG4gKiBpdCB1bmRlciB0aGUgdGVybXMgb2YgdGhlIEdOVSBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlIGFzIHB1Ymxpc2hlZCBieVxuICogdGhlIEZyZWUgU29mdHdhcmUgRm91bmRhdGlvbiwgZWl0aGVyIHZlcnNpb24gMyBvZiB0aGUgTGljZW5zZSwgb3JcbiAqIChhdCB5b3VyIG9wdGlvbikgYW55IGxhdGVyIHZlcnNpb24uXG4gKlxuICogXCJKU0dhbWVUb29sc1wiIGlzIGRpc3RyaWJ1dGVkIGluIHRoZSBob3BlIHRoYXQgaXQgd2lsbCBiZSB1c2VmdWwsXG4gKiBidXQgV0lUSE9VVCBBTlkgV0FSUkFOVFk7IHdpdGhvdXQgZXZlbiB0aGUgaW1wbGllZCB3YXJyYW50eSBvZlxuICogTUVSQ0hBTlRBQklMSVRZIG9yIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFLiAgU2VlIHRoZVxuICogR05VIEdlbmVyYWwgUHVibGljIExpY2Vuc2UgZm9yIG1vcmUgZGV0YWlscy5cbiAqXG4gKiBZb3Ugc2hvdWxkIGhhdmUgcmVjZWl2ZWQgYSBjb3B5IG9mIHRoZSBHTlUgR2VuZXJhbCBQdWJsaWMgTGljZW5zZVxuICogYWxvbmcgd2l0aCBcIkpTR2FtZVRvb2xzXCIuICBJZiBub3QsIHNlZSA8aHR0cDovL3d3dy5nbnUub3JnL2xpY2Vuc2VzLz4uXG4gKi9cbmltcG9ydCBDb21wb25lbnQgZnJvbSBcIi4vQ29tcG9uZW50XCI7XG5pbXBvcnQgQ29uc3RhbnRzIGZyb20gXCIuL0NvbnN0YW50c1wiO1xuaW1wb3J0IFV0aWxzIGZyb20gXCIuL1V0aWxzXCI7XG5pbXBvcnQgU3R5bGUgZnJvbSBcIi4vU3R5bGVcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVHJpYW5nbGUgZXh0ZW5kcyBDb21wb25lbnQge1xuICBzZWxlY3RhYmxlID0gZmFsc2U7XG5cbiAgY29uc3RydWN0b3IoeCwgeSwgd2lkdGgsIGhlaWdodCwgc3R5bGUpIHtcbiAgICBzdXBlcih4LCB5LCB3aWR0aCwgaGVpZ2h0LCBzdHlsZSk7XG4gIH1cblxuICBkcmF3KGNvbnRleHQpIHtcbiAgICBpZih0aGlzLmhpZGRlbikgcmV0dXJuO1xuICAgIHN1cGVyLmRyYXcoY29udGV4dCk7XG5cbiAgICBjb25zdCBjYW52YXMgPSBjb250ZXh0LmNhbnZhcztcbiAgICBjb25zdCBjdHggPSBjYW52YXMuZ2V0Q29udGV4dChcIjJkXCIpO1xuICAgIFxuICAgIFV0aWxzLmRyYXdUcmlhbmdsZShjdHgsIHRoaXMueCwgdGhpcy55LCB0aGlzLndpZHRoLCB0aGlzLmhlaWdodCwgdGhpcy5zdHlsZS5saW5lV2lkdGgsIHRoaXMuc3R5bGUuY29sb3IsIHRoaXMuc3R5bGUubGluZUNhcCwgdGhpcy5zdHlsZS5maWxsLCB0aGlzLnN0eWxlLmZpbGxDb2xvcik7XG5cbiAgICB0aGlzLmluaXQgPSB0cnVlO1xuICB9XG5cbiAgZ2V0IHdpZHRoKCkge1xuICAgIHJldHVybiBzdXBlci53aWR0aCArIHRoaXMuc3R5bGUubGluZVdpZHRoO1xuICB9XG5cbiAgZ2V0IGhlaWdodCgpIHtcbiAgICByZXR1cm4gc3VwZXIuaGVpZ2h0ICsgdGhpcy5zdHlsZS5saW5lV2lkdGg7XG4gIH1cblxuICBzZXQgd2lkdGgod2lkdGgpIHtcbiAgICBzdXBlci53aWR0aCA9IHdpZHRoO1xuICB9XG5cbiAgc2V0IGhlaWdodChoZWlnaHQpIHtcbiAgICBzdXBlci5oZWlnaHQgPSBoZWlnaHQ7XG4gIH1cblxuICBnZXQgZGVmYXVsdFN0eWxlKCkge1xuICAgIHJldHVybiBuZXcgU3R5bGUoe1xuICAgICAgXCJsaW5lV2lkdGhcIjogQ29uc3RhbnRzLlNldHRpbmcuVFJJQU5HTEVfREVGQVVMVF9MSU5FX1NJWkUsXG4gICAgICBcImNvbG9yXCI6IENvbnN0YW50cy5TZXR0aW5nLlRSSUFOR0xFX0RFRkFVTFRfQ09MT1IsXG4gICAgICBcImZpbGxcIjogQ29uc3RhbnRzLlNldHRpbmcuVFJJQU5HTEVfREVGQVVMVF9GSUxMLFxuICAgICAgXCJsaW5lQ2FwXCI6IENvbnN0YW50cy5TZXR0aW5nLlRSSUFOR0xFX0RFRkFVTFRfTElORV9DQVAsXG4gICAgICBcImZpbGxDb2xvclwiOiBDb25zdGFudHMuU2V0dGluZy5UUklBTkdMRV9ERUZBVUxUX0ZJTExfQ09MT1JcbiAgICB9KTtcbiAgfVxufSIsIi8qXG4gKiBDb3B5cmlnaHQgKEMpIDIwMjAgRWxpYXN0aWsgKGVsaWFzdGlrc29mdHMuY29tKVxuICpcbiAqIFRoaXMgZmlsZSBpcyBwYXJ0IG9mIFwiSlNHYW1lVG9vbHNcIi5cbiAqXG4gKiBcIkpTR2FtZVRvb2xzXCIgaXMgZnJlZSBzb2Z0d2FyZTogeW91IGNhbiByZWRpc3RyaWJ1dGUgaXQgYW5kL29yIG1vZGlmeVxuICogaXQgdW5kZXIgdGhlIHRlcm1zIG9mIHRoZSBHTlUgR2VuZXJhbCBQdWJsaWMgTGljZW5zZSBhcyBwdWJsaXNoZWQgYnlcbiAqIHRoZSBGcmVlIFNvZnR3YXJlIEZvdW5kYXRpb24sIGVpdGhlciB2ZXJzaW9uIDMgb2YgdGhlIExpY2Vuc2UsIG9yXG4gKiAoYXQgeW91ciBvcHRpb24pIGFueSBsYXRlciB2ZXJzaW9uLlxuICpcbiAqIFwiSlNHYW1lVG9vbHNcIiBpcyBkaXN0cmlidXRlZCBpbiB0aGUgaG9wZSB0aGF0IGl0IHdpbGwgYmUgdXNlZnVsLFxuICogYnV0IFdJVEhPVVQgQU5ZIFdBUlJBTlRZOyB3aXRob3V0IGV2ZW4gdGhlIGltcGxpZWQgd2FycmFudHkgb2ZcbiAqIE1FUkNIQU5UQUJJTElUWSBvciBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRS4gIFNlZSB0aGVcbiAqIEdOVSBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlIGZvciBtb3JlIGRldGFpbHMuXG4gKlxuICogWW91IHNob3VsZCBoYXZlIHJlY2VpdmVkIGEgY29weSBvZiB0aGUgR05VIEdlbmVyYWwgUHVibGljIExpY2Vuc2VcbiAqIGFsb25nIHdpdGggXCJKU0dhbWVUb29sc1wiLiAgSWYgbm90LCBzZWUgPGh0dHA6Ly93d3cuZ251Lm9yZy9saWNlbnNlcy8+LlxuICovXG5pbXBvcnQgQ29uc3RhbnRzIGZyb20gXCIuL0NvbnN0YW50c1wiO1xuXG5leHBvcnQgZGVmYXVsdCB7XG4gIHByZVJlbmRlcmVkRm9udDoge30sXG4gIGxhc3RLZXk6IC0xLFxuICBwcmVSZW5kZXJGb250OiBmdW5jdGlvbihjYXJzLCBzaXplLCBjb2xvciwgZm9udEZhbWlseSkge1xuICAgIGNhcnMucHVzaChcIj9cIik7IGNhcnMucHVzaChcIiBcIik7IGNhcnMucHVzaChcIkFcIik7XG4gICAgXG4gICAgZm9yKGxldCBpID0gMDsgaSA8IGNhcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIGNvbnN0IGNhbnZhc1RtcCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJjYW52YXNcIik7XG4gICAgICBjb25zdCBjdHhUbXAgPSBjYW52YXNUbXAuZ2V0Q29udGV4dChcIjJkXCIpO1xuICAgICAgY3R4VG1wLmZvbnQgPSBzaXplICsgXCJweCBcIiArIGZvbnRGYW1pbHk7XG4gICAgICBjb25zdCB3aWR0aCA9IGN0eFRtcC5tZWFzdXJlVGV4dChjYXJzW2ldKS53aWR0aDtcbiAgICAgIFxuICAgICAgY2FudmFzVG1wLndpZHRoID0gd2lkdGg7XG4gICAgICBjYW52YXNUbXAuaGVpZ2h0ID0gc2l6ZSArIChzaXplIC8gNik7XG4gICAgICBcbiAgICAgIGN0eFRtcC5mb250ID0gc2l6ZSArIFwicHggXCIgKyBmb250RmFtaWx5O1xuICAgICAgY3R4VG1wLmZpbGxTdHlsZSA9IGNvbG9yO1xuICAgICAgY3R4VG1wLnRleHRCYXNlbGluZSA9IFwidG9wXCI7XG4gICAgICBjdHhUbXAuZmlsbFRleHQoY2Fyc1tpXSwgMCwgMCk7XG4gICAgICBcbiAgICAgIHRoaXMucHJlUmVuZGVyZWRGb250W2NhcnNbaV1dID0gY2FudmFzVG1wO1xuICAgIH1cbiAgfSxcbiAgZHJhd0ltYWdlOiBmdW5jdGlvbihjdHgsIGltYWdlLCB4LCB5LCB3aWR0aCwgaGVpZ2h0LCBzeCwgc3ksIHNXaWR0aCwgc0hlaWdodCwgZXJhc2VCZWxvdywgZGVncmVlcykge1xuICAgIHRoaXMuZHJhd0ltYWdlV3JhcHBlcihjdHgsIGltYWdlLCB4LCB5LCB3aWR0aCwgaGVpZ2h0LCBzeCwgc3ksIHNXaWR0aCwgc0hlaWdodCwgZXJhc2VCZWxvdywgZGVncmVlcyk7XG4gIH0sXG4gIGRyYXdJbWFnZURhdGE6IGZ1bmN0aW9uKGN0eCwgaW1hZ2VEYXRhLCB4LCB5LCB3aWR0aCwgaGVpZ2h0LCBzeCwgc3ksIHNXaWR0aCwgc0hlaWdodCwgZXJhc2VCZWxvdywgZGVncmVlcykge1xuICAgIHRoaXMuZHJhd0ltYWdlV3JhcHBlcihjdHgsIGltYWdlRGF0YSwgeCwgeSwgd2lkdGgsIGhlaWdodCwgc3gsIHN5LCBzV2lkdGgsIHNIZWlnaHQsIGVyYXNlQmVsb3csIGRlZ3JlZXMpO1xuICB9LFxuICBkcmF3SW1hZ2VXcmFwcGVyOiBmdW5jdGlvbihjdHgsIGltYWdlLCB4LCB5LCB3aWR0aCwgaGVpZ2h0LCBzeCwgc3ksIHNXaWR0aCwgc0hlaWdodCwgZXJhc2VCZWxvdywgZGVncmVlcykge1xuICAgIHggPSAoeCA9PSB1bmRlZmluZWQgfHwgaXNOYU4oeCkpID8gbnVsbCA6IE1hdGgucm91bmQoeCk7XG4gICAgeSA9ICh5ID09IHVuZGVmaW5lZCB8fCBpc05hTih5KSkgPyBudWxsIDogTWF0aC5yb3VuZCh5KTtcbiAgICB3aWR0aCA9ICh3aWR0aCA9PSB1bmRlZmluZWQgfHwgaXNOYU4od2lkdGgpKSA/IG51bGwgOiBNYXRoLnJvdW5kKHdpZHRoKTtcbiAgICBoZWlnaHQgPSAoaGVpZ2h0ID09IHVuZGVmaW5lZCB8fCBpc05hTihoZWlnaHQpKSA/IG51bGwgOiBNYXRoLnJvdW5kKGhlaWdodCk7XG4gICAgc3ggPSAoc3ggPT0gdW5kZWZpbmVkIHx8IGlzTmFOKHN4KSkgPyBudWxsIDogTWF0aC5yb3VuZChzeCk7XG4gICAgc3kgPSAoc3kgPT0gdW5kZWZpbmVkIHx8IGlzTmFOKHN5KSkgPyBudWxsIDogTWF0aC5yb3VuZChzeSk7XG4gICAgc1dpZHRoID0gKHNXaWR0aCA9PSB1bmRlZmluZWQgfHwgaXNOYU4oc1dpZHRoKSkgPyBudWxsIDogTWF0aC5yb3VuZChzV2lkdGgpO1xuICAgIHNIZWlnaHQgPSAoc0hlaWdodCA9PSB1bmRlZmluZWQgfHwgaXNOYU4oc0hlaWdodCkpID8gbnVsbCA6IE1hdGgucm91bmQoc0hlaWdodCk7XG4gICAgZXJhc2VCZWxvdyA9IGVyYXNlQmVsb3cgPT0gdW5kZWZpbmVkID8gZmFsc2UgOiBlcmFzZUJlbG93O1xuICAgIGRlZ3JlZXMgPSAoZGVncmVlcyA9PSB1bmRlZmluZWQgfHwgaXNOYU4oZGVncmVlcykpID8gbnVsbCA6IGRlZ3JlZXM7XG4gIFxuICAgIGlmKGRlZ3JlZXMgIT0gdW5kZWZpbmVkKSB7XG4gICAgICBjdHguc2F2ZSgpO1xuICAgICAgY3R4LnRyYW5zbGF0ZSh4ICsgd2lkdGggLyAyLCB5ICsgaGVpZ2h0IC8gMik7XG4gICAgICBjdHgucm90YXRlKGRlZ3JlZXMgKiBNYXRoLlBJIC8gMTgwKTtcbiAgICAgIHggPSAtKHdpZHRoIC8gMik7XG4gICAgICB5ID0gLShoZWlnaHQgLyAyKTtcbiAgICB9XG4gIFxuICAgIGlmKGVyYXNlQmVsb3cpIHtcbiAgICAgIGN0eC5jbGVhclJlY3QoeCwgeSwgd2lkdGgsIGhlaWdodCk7XG4gICAgfVxuICBcbiAgICBpZihjdHggIT0gdW5kZWZpbmVkICYmIGltYWdlICE9IHVuZGVmaW5lZCkge1xuICAgICAgaWYoaW1hZ2Uud2lkdGggPiAwICYmIGltYWdlLmhlaWdodCA+IDApIHtcbiAgICAgICAgaWYoc3ggIT0gdW5kZWZpbmVkICYmIHN5ICE9IHVuZGVmaW5lZCAmJiBzV2lkdGggIT0gdW5kZWZpbmVkICYmIHNIZWlnaHQgIT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgY3R4LmRyYXdJbWFnZShpbWFnZSwgc3gsIHN5LCBzV2lkdGgsIHNIZWlnaHQsIHgsIHksIHdpZHRoLCBoZWlnaHQpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGN0eC5kcmF3SW1hZ2UoaW1hZ2UsIHgsIHksIHdpZHRoLCBoZWlnaHQpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICBcbiAgICBpZihkZWdyZWVzICE9IHVuZGVmaW5lZCkge1xuICAgICAgY3R4LnJlc3RvcmUoKTtcbiAgICB9XG4gIH0sXG4gIGRyYXdUZXh0OiBmdW5jdGlvbihjdHgsIHRleHQsIGNvbG9yLCBzaXplLCBmb250RmFtaWx5LCBhbGlnbmVtZW50LCB2ZXJ0aWNhbEFsaWduZW1lbnQsIHgsIHksIHdyYXAsIGJvbGQsIHVuZGVybGluZSwgdGV4dEJhc2VsaW5lLCBwYXJlbnQpIHtcbiAgICBpZihjdHgpIHtcbiAgICAgIGN0eC5zYXZlKCk7XG5cbiAgICAgIGlmKCFBcnJheS5pc0FycmF5KGNvbG9yKSkge1xuICAgICAgICBjdHguZmlsbFN0eWxlID0gY29sb3I7XG4gICAgICAgIGN0eC5zdHJva2VTdHlsZSA9IGNvbG9yO1xuICAgICAgfVxuICBcbiAgICAgIGN0eC5mb250ID0gKGJvbGQgPyBcImJvbGQgXCIgOiBcIlwiKSArIHNpemUgKyBcInB4IFwiICsgZm9udEZhbWlseTtcbiAgICAgIGN0eC50ZXh0QmFzZWxpbmUgPSB0ZXh0QmFzZWxpbmUgfHwgXCJib3R0b21cIjtcbiAgICAgIGN0eC5maWx0ZXIgPSBcIm5vbmVcIjtcbiAgXG4gICAgICBpZih3cmFwKSB7XG4gICAgICAgIHRleHQgPSB0aGlzLndyYXBUZXh0TGluZXMoY3R4LCB0ZXh0KVtcInRleHRcIl07XG4gICAgICB9XG4gICAgICBcbiAgICAgIGNvbnN0IGxpbmVzID0gdGV4dC5zcGxpdChcIlxcblwiKTtcbiAgICAgIGxldCBtYXhXaWR0aCA9IDA7XG4gICAgICBsZXQgeEN1cnJlbnQgPSBNYXRoLnJvdW5kKHgpO1xuICAgICAgbGV0IHlDdXJyZW50ID0gTWF0aC5yb3VuZCh5KSArIHNpemU7XG4gICAgICBsZXQgeUZpcnN0ID0gMDtcblxuICAgICAgaWYoIXkpIHtcbiAgICAgICAgaWYodmVydGljYWxBbGlnbmVtZW50ID09IENvbnN0YW50cy5WZXJ0aWNhbEFsaWduZW1lbnQuQ0VOVEVSKSB7XG4gICAgICAgICAgeUN1cnJlbnQgKz0gTWF0aC5yb3VuZCgoKHBhcmVudCAmJiBwYXJlbnQuaGVpZ2h0ID8gcGFyZW50LmhlaWdodCA6IHRoaXMuZ2V0Q2FudmFzSGVpZ2h0KGN0eC5jYW52YXMpKSAvIDIpIC0gKHNpemUgKiBsaW5lcy5sZW5ndGggLyAyKSk7XG4gICAgICAgIH0gZWxzZSBpZih2ZXJ0aWNhbEFsaWduZW1lbnQgPT0gQ29uc3RhbnRzLlZlcnRpY2FsQWxpZ25lbWVudC5CT1RUT00pIHtcbiAgICAgICAgICB5Q3VycmVudCArPSBNYXRoLnJvdW5kKCgocGFyZW50ICYmIHBhcmVudC5oZWlnaHQgPyBwYXJlbnQuaGVpZ2h0IDogdGhpcy5nZXRDYW52YXNIZWlnaHQoY3R4LmNhbnZhcykpKSAtIChzaXplICogbGluZXMubGVuZ3RoKSAvIDIgLSBzaXplIC8gNSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgXG4gICAgICBmb3IobGV0IGkgPSAwOyBpIDwgbGluZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgY29uc3QgY3VycmVudFRleHQgPSBsaW5lc1tpXTtcbiAgICAgICAgY29uc3QgY3VycmVudFdpZHRoID0gY3R4Lm1lYXN1cmVUZXh0KGN1cnJlbnRUZXh0KS53aWR0aDtcbiAgXG4gICAgICAgIGlmKEFycmF5LmlzQXJyYXkoY29sb3IpKSB7XG4gICAgICAgICAgbGV0IGNvbG9ySW5kZXggPSBpO1xuICBcbiAgICAgICAgICBpZihjb2xvckluZGV4ID4gY29sb3IubGVuZ3RoIC0gMSkge1xuICAgICAgICAgICAgY29sb3JJbmRleCA9IGNvbG9yLmxlbmd0aCAtIDE7XG4gICAgICAgICAgfVxuICBcbiAgICAgICAgICBjdHguZmlsbFN0eWxlID0gY29sb3JbY29sb3JJbmRleF07XG4gICAgICAgICAgY3R4LnN0cm9rZVN0eWxlID0gY29sb3JbY29sb3JJbmRleF07XG4gICAgICAgIH1cbiAgXG4gICAgICAgIGlmKGFsaWduZW1lbnQgPT0gQ29uc3RhbnRzLkFsaWduZW1lbnQuQ0VOVEVSKSB7XG4gICAgICAgICAgeEN1cnJlbnQgPSBNYXRoLnJvdW5kKChwYXJlbnQgJiYgcGFyZW50LnggPyBwYXJlbnQueCA6IDApKSArIE1hdGgucm91bmQoKChwYXJlbnQgJiYgcGFyZW50LndpZHRoID8gcGFyZW50LndpZHRoIDogdGhpcy5nZXRDYW52YXNXaWR0aChjdHguY2FudmFzKSkgLyAyKSAtIChjdHgubWVhc3VyZVRleHQoY3VycmVudFRleHQpLndpZHRoIC8gMikpO1xuICAgICAgICB9IGVsc2UgaWYoYWxpZ25lbWVudCA9PSBDb25zdGFudHMuQWxpZ25lbWVudC5SSUdIVCkge1xuICAgICAgICAgIHhDdXJyZW50ID0gTWF0aC5yb3VuZCgocGFyZW50ICYmIHBhcmVudC54ID8gcGFyZW50LnggOiAwKSkgKyBNYXRoLnJvdW5kKChwYXJlbnQgJiYgcGFyZW50LndpZHRoID8gcGFyZW50LndpZHRoIDogdGhpcy5nZXRDYW52YXNXaWR0aChjdHguY2FudmFzKSkgLSAoY3R4Lm1lYXN1cmVUZXh0KGN1cnJlbnRUZXh0KS53aWR0aCkgLSAocGFyZW50ICYmIHBhcmVudC5zcGFjZUJldHdlZW5Db21wb25lbnRzID8gcGFyZW50LnNwYWNlQmV0d2VlbkNvbXBvbmVudHMgOiBDb25zdGFudHMuU2V0dGluZy5ERUZBVUxUX1NQQUNJTkcpKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGN0eC5maWxsVGV4dChjdXJyZW50VGV4dCwgeEN1cnJlbnQsIHlDdXJyZW50KTtcbiAgXG4gICAgICAgIGlmKHVuZGVybGluZSkge1xuICAgICAgICAgIGN0eC5saW5lV2lkdGggPSAxO1xuICAgICAgICAgIGN0eC5iZWdpblBhdGgoKTtcbiAgICAgICAgICBjdHgubW92ZVRvKHhDdXJyZW50LCB5Q3VycmVudCAtIDIpO1xuICAgICAgICAgIGN0eC5saW5lVG8oTWF0aC5yb3VuZCh4Q3VycmVudCArIGN1cnJlbnRXaWR0aCksIHlDdXJyZW50IC0gMik7XG4gICAgICAgICAgY3R4LnN0cm9rZSgpO1xuICAgICAgICB9XG4gIFxuICAgICAgICBpZihjdXJyZW50V2lkdGggPiBtYXhXaWR0aCkgbWF4V2lkdGggPSBjdXJyZW50V2lkdGg7XG4gICAgICAgIGlmKGkgPT0gMCkgeUZpcnN0ID0geUN1cnJlbnQ7XG5cbiAgICAgICAgeUN1cnJlbnQgKz0gc2l6ZTtcbiAgICAgIH1cbiAgXG4gICAgICBjdHgucmVzdG9yZSgpO1xuICBcbiAgICAgIHJldHVybiB7XG4gICAgICAgIHg6IHhDdXJyZW50LFxuICAgICAgICB5OiB5Rmlyc3QsXG4gICAgICAgIGhlaWdodDogc2l6ZSAqIGxpbmVzLmxlbmd0aCxcbiAgICAgICAgd2lkdGg6IG1heFdpZHRoXG4gICAgICB9O1xuICAgIH1cbiAgfSxcbiAgd3JhcFRleHQ6IGZ1bmN0aW9uKHRleHQsIGxpbWl0KSB7XG4gICAgaWYodGV4dC5sZW5ndGggPiBsaW1pdCkge1xuICAgICAgbGV0IHAgPSBsaW1pdDtcblxuICAgICAgZm9yKDsgcCA+IDAgJiYgdGV4dFtwXSAhPSBcIiBcIjsgcC0tKTtcblxuICAgICAgaWYocCA+IDApIHtcbiAgICAgICAgY29uc3QgbGVmdCA9IHRleHQuc3Vic3RyaW5nKDAsIHApO1xuICAgICAgICBjb25zdCByaWdodCA9IHRleHQuc3Vic3RyaW5nKHAgKyAxKTtcbiAgICAgICAgcmV0dXJuIGxlZnQgKyBcIlxcblwiICsgdGhpcy53cmFwVGV4dChyaWdodCwgbGltaXQpO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiB0ZXh0O1xuICB9LFxuICB3cmFwVGV4dExpbmVzOiBmdW5jdGlvbihjdHgsIHRleHQsIHdpZHRoLCBmb250U2l6ZSwgZm9udEZhbWlseSwgZGlzYWJsZVdyYXApIHtcbiAgICBpZihjdHggJiYgdGV4dCkge1xuICAgICAgY3R4LnNhdmUoKTtcbiAgICAgIGN0eC5mb250ID0gTWF0aC5yb3VuZChmb250U2l6ZSkgKyBcInB4IFwiICsgZm9udEZhbWlseTtcbiAgICAgIGN0eC5pbWFnZVNtb290aGluZ0VuYWJsZWQgPSBmYWxzZTtcbiAgXG4gICAgICBjb25zdCBsaW5lcyA9IHRleHQuc3BsaXQoXCJcXG5cIik7XG4gICAgICBsZXQgbmV3VGV4dCA9IFwiXCI7XG4gICAgICBjb25zdCB3aWR0aENhciA9IHdpZHRoIHx8IGN0eC5tZWFzdXJlVGV4dChcIkFcIikud2lkdGg7XG4gICAgICBjb25zdCBuYkNhckxpbmUgPSBNYXRoLnJvdW5kKHRoaXMuZ2V0Q2FudmFzV2lkdGgoY3R4LmNhbnZhcykgLyB3aWR0aENhcik7XG4gIFxuICAgICAgbGV0IGhlaWdodFRvdGFsID0gMDtcbiAgICAgIGxldCBtYXhXaWR0aCA9IDA7XG4gIFxuICAgICAgZm9yKGxldCBpID0gMDsgaSA8IGxpbmVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGNvbnN0IGxpbmVXcmFwID0gZGlzYWJsZVdyYXAgPyBsaW5lc1tpXSA6IHRoaXMud3JhcFRleHQobGluZXNbaV0sIG5iQ2FyTGluZSk7XG4gICAgICAgIG5ld1RleHQgKz0gbGluZVdyYXA7XG4gIFxuICAgICAgICBpZihpIDwgbGluZXMubGVuZ3RoIC0gMSkge1xuICAgICAgICAgIG5ld1RleHQgKz0gXCJcXG5cIjtcbiAgICAgICAgfVxuICBcbiAgICAgICAgZm9yKGxldCBqID0gMDsgaiA8IGxpbmVXcmFwLnNwbGl0KFwiXFxuXCIpLmxlbmd0aDsgaisrKSB7XG4gICAgICAgICAgY29uc3Qgd2lkdGhUZXh0ID0gY3R4Lm1lYXN1cmVUZXh0KGxpbmVXcmFwLnNwbGl0KFwiXFxuXCIpW2pdKS53aWR0aDtcbiAgICAgICAgICBoZWlnaHRUb3RhbCArPSBmb250U2l6ZTtcbiAgICAgICAgICBpZih3aWR0aFRleHQgPiBtYXhXaWR0aCkgbWF4V2lkdGggPSB3aWR0aFRleHQ7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgXG4gICAgICBjdHgucmVzdG9yZSgpO1xuXG4gICAgICByZXR1cm4ge1xuICAgICAgICB0ZXh0OiBuZXdUZXh0LFxuICAgICAgICBoZWlnaHQ6IGhlaWdodFRvdGFsLFxuICAgICAgICB3aWR0aDogbWF4V2lkdGgsXG4gICAgICAgIGNhcldpZHRoOiB3aWR0aENhclxuICAgICAgfTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgdGV4dDogXCJcIixcbiAgICAgICAgaGVpZ2h0OiAwLFxuICAgICAgICB3aWR0aDogMCxcbiAgICAgICAgY2FyV2lkdGg6IDBcbiAgICAgIH07XG4gICAgfVxuICB9LFxuICBkcmF3QXJyb3c6IGZ1bmN0aW9uKGN0eCwgZnJvbXgsIGZyb215LCB0b3gsIHRveSwgbGluZVdpZHRoLCBoZWFkU2l6ZSwgY29sb3IsIGxpbmVDYXApIHtcbiAgICBjdHguc2F2ZSgpO1xuXG4gICAgY3R4LmxpbmVDYXAgPSBsaW5lQ2FwIHx8IENvbnN0YW50cy5TZXR0aW5nLkFSUk9XX0RFRkFVTFRfTElORV9DQVA7XG4gICAgY3R4LmxpbmVXaWR0aCA9IGxpbmVXaWR0aCB8fCBDb25zdGFudHMuU2V0dGluZy5BUlJPV19ERUZBVUxUX0xJTkVfU0laRTtcbiAgICBjdHguc3Ryb2tlU3R5bGUgPSBjb2xvciB8fCBDb25zdGFudHMuU2V0dGluZy5BUlJPV19ERUZBVUxUX0NPTE9SO1xuICAgIGN0eC5maWx0ZXIgPSBcIlwiO1xuICBcbiAgICBjdHguYmVnaW5QYXRoKCk7XG4gICAgY29uc3QgaGVhZGxlbiA9IGhlYWRTaXplIHx8IENvbnN0YW50cy5TZXR0aW5nLkFSUk9XX0RFRkFVTFRfSEVBRF9TSVpFO1xuICAgIGNvbnN0IGR4ID0gdG94IC0gZnJvbXg7XG4gICAgY29uc3QgZHkgPSB0b3kgLSBmcm9teTtcbiAgICBjb25zdCBhbmdsZSA9IE1hdGguYXRhbjIoZHksIGR4KTtcbiAgICBjdHgubW92ZVRvKGZyb214LCBmcm9teSk7XG4gICAgY3R4LmxpbmVUbyh0b3gsIHRveSk7XG4gICAgY3R4Lm1vdmVUbyh0b3gsIHRveSk7XG4gICAgY3R4LmxpbmVUbyh0b3ggLSBoZWFkbGVuICogTWF0aC5jb3MoYW5nbGUgLSBNYXRoLlBJIC8gNiksIHRveSAtIGhlYWRsZW4gKiBNYXRoLnNpbihhbmdsZSAtIE1hdGguUEkgLyA2KSk7XG4gICAgY3R4Lm1vdmVUbyh0b3gsIHRveSk7XG4gICAgY3R4LmxpbmVUbyh0b3ggLSBoZWFkbGVuICogTWF0aC5jb3MoYW5nbGUgKyBNYXRoLlBJIC8gNiksIHRveSAtIGhlYWRsZW4gKiBNYXRoLnNpbihhbmdsZSArIE1hdGguUEkgLyA2KSk7XG4gICAgY3R4LnN0cm9rZSgpO1xuICAgIFxuICAgIGN0eC5yZXN0b3JlKCk7XG4gIH0sXG4gIGRyYXdDcm9zczogZnVuY3Rpb24oY3R4LCB4LCB5LCB3aWR0aCwgaGVpZ2h0LCBsaW5lV2lkdGgsIGNvbG9yLCBsaW5lQ2FwKSB7XG4gICAgY3R4LnNhdmUoKTtcblxuICAgIGN0eC5saW5lQ2FwID0gbGluZUNhcCB8fCBDb25zdGFudHMuU2V0dGluZy5DUk9TU19ERUZBVUxUX0xJTkVfQ0FQO1xuICAgIGN0eC5saW5lV2lkdGggPSBsaW5lV2lkdGggfHwgQ29uc3RhbnRzLlNldHRpbmcuQ1JPU1NfREVGQVVMVF9MSU5FX1NJWkU7XG4gICAgY3R4LnN0cm9rZVN0eWxlID0gY29sb3IgfHwgQ29uc3RhbnRzLlNldHRpbmcuQ1JPU1NfREVGQVVMVF9DT0xPUjtcbiAgICBjdHguZmlsdGVyID0gXCJcIjtcbiAgXG4gICAgY3R4LmJlZ2luUGF0aCgpO1xuICAgIGN0eC5tb3ZlVG8oeCwgeSk7XG4gICAgY3R4LmxpbmVUbyh4ICsgd2lkdGgsIHkgKyBoZWlnaHQpO1xuICAgIGN0eC5tb3ZlVG8oeCArIHdpZHRoLCB5KTtcbiAgICBjdHgubGluZVRvKHgsIHkgKyBoZWlnaHQpO1xuICAgIGN0eC5zdHJva2UoKTtcbiAgICBcbiAgICBjdHgucmVzdG9yZSgpO1xuICB9LFxuICBkcmF3VHJpYW5nbGU6IGZ1bmN0aW9uKGN0eCwgeCwgeSwgd2lkdGgsIGhlaWdodCwgbGluZVdpZHRoLCBjb2xvciwgbGluZUNhcCwgZmlsbCA9IENvbnN0YW50cy5TZXR0aW5nLlRSSUFOR0xFX0RFRkFVTFRfRklMTCwgZmlsbENvbG9yKSB7XG4gICAgY3R4LnNhdmUoKTtcblxuICAgIGN0eC5saW5lQ2FwID0gbGluZUNhcCB8fCBDb25zdGFudHMuU2V0dGluZy5UUklBTkdMRV9ERUZBVUxUX0xJTkVfQ0FQO1xuICAgIGN0eC5saW5lV2lkdGggPSBsaW5lV2lkdGggfHwgQ29uc3RhbnRzLlNldHRpbmcuVFJJQU5HTEVfREVGQVVMVF9MSU5FX1NJWkU7XG4gICAgY3R4LmZpbHRlciA9IFwiXCI7XG5cbiAgICBpZihmaWxsKSB7XG4gICAgICBjdHguZmlsbFN0eWxlID0gZmlsbENvbG9yIHx8IENvbnN0YW50cy5TZXR0aW5nLlRSSUFOR0xFX0RFRkFVTFRfRklMTF9DT0xPUjtcbiAgICAgIGN0eC5zdHJva2VTdHlsZSA9IGNvbG9yIHx8IENvbnN0YW50cy5TZXR0aW5nLlRSSUFOR0xFX0RFRkFVTFRfQ09MT1I7XG4gICAgfSBlbHNlIHtcbiAgICAgIGN0eC5zdHJva2VTdHlsZSA9IGNvbG9yIHx8IENvbnN0YW50cy5TZXR0aW5nLlRSSUFOR0xFX0RFRkFVTFRfQ09MT1I7XG4gICAgfVxuICBcbiAgICBjdHguYmVnaW5QYXRoKCk7XG4gICAgY3R4Lm1vdmVUbyh4LCB5KTtcbiAgICBjdHgubGluZVRvKHggKyB3aWR0aCwgeSk7XG4gICAgY3R4LmxpbmVUbyh4ICsgd2lkdGggLyAyLCB5ICsgaGVpZ2h0KTtcbiAgICBjdHgubGluZVRvKHgsIHkpO1xuXG4gICAgaWYoZmlsbCkge1xuICAgICAgY3R4LmZpbGwoKTtcbiAgICAgIGN0eC5zdHJva2UoKTtcbiAgICB9IGVsc2Uge1xuICAgICAgY3R4LnN0cm9rZSgpO1xuICAgIH1cbiAgICBcbiAgICBjdHgucmVzdG9yZSgpO1xuICB9LFxuICBkcmF3Q2lyY2xlOiBmdW5jdGlvbihjdHgsIHgsIHksIHJhZGl1cywgbGluZVdpZHRoLCBjb2xvciwgbGluZUNhcCwgZmlsbCA9IENvbnN0YW50cy5TZXR0aW5nLkNJUkNMRV9ERUZBVUxUX0ZJTEwsIGZpbGxDb2xvcikge1xuICAgIGN0eC5zYXZlKCk7XG5cbiAgICBjdHgubGluZUNhcCA9IGxpbmVDYXAgfHwgQ29uc3RhbnRzLlNldHRpbmcuQ0lSQ0xFX0RFRkFVTFRfTElORV9DQVA7XG4gICAgY3R4LmxpbmVXaWR0aCA9IGxpbmVXaWR0aCB8fCBDb25zdGFudHMuU2V0dGluZy5DSVJDTEVfREVGQVVMVF9MSU5FX1NJWkU7XG4gICAgY3R4LmZpbHRlciA9IFwiXCI7XG5cbiAgICBpZihmaWxsKSB7XG4gICAgICBjdHguZmlsbFN0eWxlID0gZmlsbENvbG9yIHx8IENvbnN0YW50cy5TZXR0aW5nLkNJUkNMRV9ERUZBVUxUX0ZJTExfQ09MT1I7XG4gICAgICBjdHguc3Ryb2tlU3R5bGUgPSBjb2xvciB8fCBDb25zdGFudHMuU2V0dGluZy5DSVJDTEVfREVGQVVMVF9DT0xPUjtcbiAgICB9IGVsc2Uge1xuICAgICAgY3R4LnN0cm9rZVN0eWxlID0gY29sb3IgfHwgQ29uc3RhbnRzLlNldHRpbmcuQ0lSQ0xFX0RFRkFVTFRfQ09MT1I7XG4gICAgfVxuICAgIFxuICAgIGN0eC5iZWdpblBhdGgoKTtcbiAgICBjdHguYXJjKHggKyByYWRpdXMgLyAyLCB5ICsgcmFkaXVzIC8gMiwgcmFkaXVzIC8gMiwgMCwgMiAqIE1hdGguUEksIGZhbHNlKTtcblxuICAgIGlmKGZpbGwpIHtcbiAgICAgIGN0eC5maWxsKCk7XG4gICAgICBjdHguc3Ryb2tlKCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGN0eC5zdHJva2UoKTtcbiAgICB9XG4gICAgXG4gICAgY3R4LnJlc3RvcmUoKTtcbiAgfSxcbiAgY2xlYXI6IGZ1bmN0aW9uKGN0eCkge1xuICAgIGN0eC5jbGVhclJlY3QoMCwgMCwgdGhpcy5nZXRDYW52YXNXaWR0aChjdHguY2FudmFzKSwgdGhpcy5nZXRDYW52YXNIZWlnaHQoY3R4LmNhbnZhcykpO1xuICB9LFxuICBpc0ZpbHRlckh1ZUF2YWlsYWJsZTogZnVuY3Rpb24oKSB7XG4gICAgY29uc3QgY2FudmFzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImNhbnZhc1wiKTtcbiAgICBjYW52YXMud2lkdGggPSA1O1xuICAgIGNhbnZhcy5oZWlnaHQgPSA1O1xuICAgIGNvbnN0IGN0eCA9IGNhbnZhcy5nZXRDb250ZXh0KFwiMmRcIik7XG4gICAgY3R4LnNhdmUoKTtcbiAgXG4gICAgY3R4LmZpbGxTdHlsZSA9IFwiI0ZGMDAwMFwiO1xuICAgIGN0eC5maWx0ZXIgPSBcImh1ZS1yb3RhdGUoOTBkZWcpXCI7XG4gICAgY3R4LmZpbGxSZWN0KDAsIDAsIDUsIDUpO1xuICAgIGNvbnN0IGNvbG9yID0gY3R4LmdldEltYWdlRGF0YSgwLCAwLCAxLCAxKS5kYXRhO1xuICAgIGN0eC5yZXN0b3JlKCk7XG4gIFxuICAgIGlmKGNvbG9yWzBdID09IDI1NSAmJiBjb2xvclsxXSA9PSAwICYmIGNvbG9yWzJdID09IDApIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gIFxuICAgIHJldHVybiB0cnVlO1xuICB9LFxuICBibHVyQ2FudmFzOiBmdW5jdGlvbihjdHgsIGxlbmd0aCkge1xuICAgIGN0eC5zYXZlKCk7XG4gICAgY3R4LmZpbHRlciA9IFwiYmx1cihcIiArIGxlbmd0aCAgKyBcInB4KVwiO1xuICAgIHRoaXMuZHJhd0ltYWdlRGF0YShjdHgsIGN0eC5jYW52YXMsIDAsIDAsIHRoaXMuZ2V0Q2FudmFzV2lkdGgoY3R4LmNhbnZhcyksIHRoaXMuZ2V0Q2FudmFzSGVpZ2h0KGN0eC5jYW52YXMpKTtcbiAgICBjdHgucmVzdG9yZSgpO1xuICB9LFxuICBwYXJzZU51bWJlcjogZnVuY3Rpb24oc3RyKSB7XG4gICAgcmV0dXJuIHN0ciA/IHBhcnNlSW50KHN0ci5tYXRjaCgvXFxkKy8pLCAxMCkgOiAwO1xuICB9LFxuICBnZXRGb250U2l6ZTogZnVuY3Rpb24oY3R4KSB7XG4gICAgcmV0dXJuIE1hdGguZmxvb3IocGFyc2VOdW1iZXIoY3R4LmZvbnQpIC8gMS4yNSk7XG4gIH0sXG4gIGdldENhbnZhc1dpZHRoKGNhbnZhcykge1xuICAgIHJldHVybiB0aGlzLnBhcnNlTnVtYmVyKGNhbnZhcy5zdHlsZS53aWR0aCkgfHwgY2FudmFzLndpZHRoO1xuICB9LFxuICBnZXRDYW52YXNIZWlnaHQoY2FudmFzKSB7XG4gICAgcmV0dXJuIHRoaXMucGFyc2VOdW1iZXIoY2FudmFzLnN0eWxlLmhlaWdodCkgfHwgY2FudmFzLmhlaWdodDtcbiAgfSxcbiAgYXV0b0RQSShjYW52YXMpIHtcbiAgICBjb25zdCByZWN0ID0gY2FudmFzLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuXG4gICAgY2FudmFzLndpZHRoID0gcmVjdC53aWR0aCAqIENvbnN0YW50cy5TZXR0aW5nLlBJWEVMX1JBVElPO1xuICAgIGNhbnZhcy5oZWlnaHQgPSByZWN0LmhlaWdodCAqIENvbnN0YW50cy5TZXR0aW5nLlBJWEVMX1JBVElPO1xuICAgIFxuICAgIGNhbnZhcy5zdHlsZS53aWR0aCA9IHJlY3Qud2lkdGggKyBcInB4XCI7XG4gICAgY2FudmFzLnN0eWxlLmhlaWdodCA9ICByZWN0LmhlaWdodCArIFwicHhcIjtcbiAgfSxcbiAgYXV0b1Jlc2l6ZUNhbnZhczogZnVuY3Rpb24oY2FudmFzLCBjb250YWluZXIsIGluaXRpYWxXaWR0aCwgaW5pdGlhbEhlaWdodCkge1xuICAgIGlmKCFkb2N1bWVudC5mdWxsc2NyZWVuRWxlbWVudCkge1xuICAgICAgaWYoaW5pdGlhbFdpZHRoID49IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5jbGllbnRXaWR0aCAqIDAuODUpIHtcbiAgICAgICAgdmFyIHJhdGlvID0gaW5pdGlhbFdpZHRoIC8gaW5pdGlhbEhlaWdodDtcbiAgICAgICAgY2FudmFzLndpZHRoID0gZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmNsaWVudFdpZHRoICogMC44NTtcbiAgICAgICAgY2FudmFzLmhlaWdodCA9IGNhbnZhcy53aWR0aCAvIHJhdGlvO1xuXG4gICAgICAgIGlmKGNhbnZhcy5zdHlsZSkge1xuICAgICAgICAgIGNhbnZhcy5zdHlsZS53aWR0aCA9IGNhbnZhcy53aWR0aCArIFwicHhcIjtcbiAgICAgICAgICBjYW52YXMuc3R5bGUuaGVpZ2h0ID0gY2FudmFzLmhlaWdodCArIFwicHhcIjtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgY2FudmFzLndpZHRoID0gaW5pdGlhbFdpZHRoO1xuICAgICAgICBjYW52YXMuaGVpZ2h0ID0gaW5pdGlhbEhlaWdodDtcblxuICAgICAgICBpZihjYW52YXMuc3R5bGUpIHtcbiAgICAgICAgICBjYW52YXMuc3R5bGUud2lkdGggPSBpbml0aWFsV2lkdGggKyBcInB4XCI7XG4gICAgICAgICAgY2FudmFzLnN0eWxlLmhlaWdodCA9IGluaXRpYWxIZWlnaHQgKyBcInB4XCI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9IGVsc2UgaWYoZG9jdW1lbnQuZnVsbHNjcmVlbkVsZW1lbnQgPT0gY2FudmFzIHx8IGRvY3VtZW50LmZ1bGxzY3JlZW5FbGVtZW50ID09IGNvbnRhaW5lcikge1xuICAgICAgY2FudmFzLndpZHRoID0gd2luZG93LmlubmVyV2lkdGg7XG4gICAgICBjYW52YXMuaGVpZ2h0ID0gd2luZG93LmlubmVySGVpZ2h0O1xuXG4gICAgICBpZihjYW52YXMuc3R5bGUpIHtcbiAgICAgICAgY2FudmFzLnN0eWxlLndpZHRoID0gd2luZG93LmlubmVyV2lkdGggKyBcInB4XCI7XG4gICAgICAgIGNhbnZhcy5zdHlsZS5oZWlnaHQgPSB3aW5kb3cuaW5uZXJIZWlnaHQgKyBcInB4XCI7XG4gICAgICB9XG5cbiAgICAgIGlmKGNvbnRhaW5lcikge1xuICAgICAgICBjb250YWluZXIud2lkdGggPSB3aW5kb3cuaW5uZXJXaWR0aDtcbiAgICAgICAgY29udGFpbmVyLmhlaWdodCA9IHdpbmRvdy5pbm5lckhlaWdodDtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgY2FudmFzLndpZHRoID0gaW5pdGlhbFdpZHRoO1xuICAgICAgY2FudmFzLmhlaWdodCA9IGluaXRpYWxIZWlnaHQ7XG5cbiAgICAgIGlmKGNhbnZhcy5zdHlsZSkge1xuICAgICAgICBjYW52YXMuc3R5bGUud2lkdGggPSBpbml0aWFsV2lkdGggKyBcInB4XCI7XG4gICAgICAgIGNhbnZhcy5zdHlsZS5oZWlnaHQgPSBpbml0aWFsSGVpZ2h0ICsgXCJweFwiO1xuICAgICAgfVxuICAgIH1cbiAgfSxcbiAgZW5hYmxlQXV0b1Jlc2l6ZUNhbnZhczogZnVuY3Rpb24oY2FudmFzLCBjb250YWluZXIsIGluaXRpYWxXaWR0aCwgaW5pdGlhbEhlaWdodCkge1xuICAgIGlmKGNhbnZhcyAmJiBjYW52YXMuZ2V0QXR0cmlidXRlKFwiYXV0b3Jlc2l6ZS1jYW52YXMtZXZlbnRcIikgIT0gXCJ0cnVlXCIpIHtcbiAgICAgIHRoaXMuYXV0b1Jlc2l6ZUNhbnZhcyhjYW52YXMsIGNvbnRhaW5lciwgaW5pdGlhbFdpZHRoLCBpbml0aWFsSGVpZ2h0KTtcbiAgXG4gICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcInJlc2l6ZVwiLCAoKSA9PiB7XG4gICAgICAgIGNhbnZhcy5zZXRBdHRyaWJ1dGUoXCJhdXRvcmVzaXplLWNhbnZhcy1ldmVudFwiLCBcInRydWVcIik7XG4gICAgICAgIHRoaXMuYXV0b1Jlc2l6ZUNhbnZhcyhjYW52YXMsIGNvbnRhaW5lciwgaW5pdGlhbFdpZHRoLCBpbml0aWFsSGVpZ2h0KTtcbiAgICAgIH0pO1xuICAgIH1cbiAgfSxcbiAgYXV0b1Jlc2l6ZUNhbnZhc0Z1bGxzY3JlZW46IGZ1bmN0aW9uKGNhbnZhcywgY29udGFpbmVyKSB7XG4gICAgaWYoZG9jdW1lbnQuZnVsbHNjcmVlbkVsZW1lbnQgPT0gY2FudmFzIHx8IGRvY3VtZW50LmZ1bGxzY3JlZW5FbGVtZW50ID09IGNvbnRhaW5lcikge1xuICAgICAgY2FudmFzLndpZHRoID0gd2luZG93LmlubmVyV2lkdGg7XG4gICAgICBjYW52YXMuaGVpZ2h0ID0gd2luZG93LmlubmVySGVpZ2h0O1xuXG4gICAgICBpZihjYW52YXMuc3R5bGUpIHtcbiAgICAgICAgY2FudmFzLnN0eWxlLndpZHRoID0gd2luZG93LmlubmVyV2lkdGggKyBcInB4XCI7XG4gICAgICAgIGNhbnZhcy5zdHlsZS5oZWlnaHQgPSB3aW5kb3cuaW5uZXJIZWlnaHQgKyBcInB4XCI7XG4gICAgICB9XG4gICAgICBcbiAgICAgIGlmKGNvbnRhaW5lcikge1xuICAgICAgICBjb250YWluZXIud2lkdGggPSB3aW5kb3cuaW5uZXJXaWR0aDtcbiAgICAgICAgY29udGFpbmVyLmhlaWdodCA9IHdpbmRvdy5pbm5lckhlaWdodDtcbiAgICAgIH1cbiAgICB9XG4gIH0sXG4gIGVuYWJsZUF1dG9SZXNpemVDYW52YXNGdWxsc2NyZWVuOiBmdW5jdGlvbihjYW52YXMsIGNvbnRhaW5lcikge1xuICAgIGlmKGNhbnZhcyAmJiBjYW52YXMuZ2V0QXR0cmlidXRlKFwiYXV0b3Jlc2l6ZWZ1bGxzY3JlZW4tY2FudmFzLWV2ZW50XCIpICE9IFwidHJ1ZVwiKSB7XG4gICAgICB0aGlzLmF1dG9SZXNpemVDYW52YXNGdWxsc2NyZWVuKGNhbnZhcywgY29udGFpbmVyKTtcbiAgXG4gICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcInJlc2l6ZVwiLCAoKSA9PiB7XG4gICAgICAgIGNhbnZhcy5zZXRBdHRyaWJ1dGUoXCJhdXRvcmVzaXplZnVsbHNjcmVlbi1jYW52YXMtZXZlbnRcIiwgXCJ0cnVlXCIpO1xuICAgICAgICB0aGlzLmF1dG9SZXNpemVDYW52YXNGdWxsc2NyZWVuKGNhbnZhcywgY29udGFpbmVyKTtcbiAgICAgIH0pO1xuICAgIH1cbiAgfSxcbiAgYXV0b1Jlc2l6ZUNhbnZhc0Z1bGxwYWdlOiBmdW5jdGlvbihjYW52YXMsIGNvbnRhaW5lcikge1xuICAgIGlmKGNhbnZhcyAmJiBjYW52YXMuZ2V0QXR0cmlidXRlKFwiZnVsbHBhZ2UtY2FudmFzLWVuYWJsZVwiKSA9PSBcInRydWVcIikge1xuICAgICAgY2FudmFzLndpZHRoID0gd2luZG93LmlubmVyV2lkdGg7XG4gICAgICBjYW52YXMuaGVpZ2h0ID0gd2luZG93LmlubmVySGVpZ2h0O1xuICAgICAgXG4gICAgICBpZihjYW52YXMuc3R5bGUpIHtcbiAgICAgICAgY2FudmFzLnN0eWxlLndpZHRoID0gd2luZG93LmlubmVyV2lkdGggKyBcInB4XCI7XG4gICAgICAgIGNhbnZhcy5zdHlsZS5oZWlnaHQgPSB3aW5kb3cuaW5uZXJIZWlnaHQgKyBcInB4XCI7XG4gICAgICB9XG4gICAgICBcbiAgICAgIGlmKGNvbnRhaW5lcikge1xuICAgICAgICBjb250YWluZXIud2lkdGggPSB3aW5kb3cuaW5uZXJXaWR0aDtcbiAgICAgICAgY29udGFpbmVyLmhlaWdodCA9IHdpbmRvdy5pbm5lckhlaWdodDtcbiAgICAgICAgY29udGFpbmVyLnN0eWxlLm1hcmdpbiA9IDA7XG4gICAgICAgIGNvbnRhaW5lci5zdHlsZS5wYWRkaW5nID0gMDtcbiAgICAgIH1cblxuICAgICAgZG9jdW1lbnQuYm9keS5zdHlsZS5tYXJnaW4gPSAwO1xuICAgICAgZG9jdW1lbnQuYm9keS5zdHlsZS5wYWRkaW5nID0gMDtcbiAgICB9XG4gIH0sXG4gIGVuYWJsZUF1dG9SZXNpemVDYW52YXNGdWxscGFnZTogZnVuY3Rpb24oY2FudmFzLCBjb250YWluZXIpIHtcbiAgICBpZihjYW52YXMgJiYgY2FudmFzLmdldEF0dHJpYnV0ZShcImF1dG9yZXNpemVmdWxscGFnZS1jYW52YXMtZXZlbnRcIikgIT0gXCJ0cnVlXCIpIHtcbiAgICAgIHRoaXMuYXV0b1Jlc2l6ZUNhbnZhc0Z1bGxwYWdlKGNhbnZhcywgY29udGFpbmVyKTtcbiAgXG4gICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcInJlc2l6ZVwiLCAoKSA9PiB7XG4gICAgICAgIGNhbnZhcy5zZXRBdHRyaWJ1dGUoXCJhdXRvcmVzaXplZnVsbHBhZ2UtY2FudmFzLWV2ZW50XCIsIFwidHJ1ZVwiKTtcbiAgICAgICAgdGhpcy5hdXRvUmVzaXplQ2FudmFzRnVsbHBhZ2UoY2FudmFzLCBjb250YWluZXIpO1xuICAgICAgfSk7XG4gICAgfVxuICB9LFxuICB0b2dnbGVGdWxsc2NyZWVuOiBmdW5jdGlvbihjYW52YXMsIGNvbnRhaW5lcikge1xuICAgIGlmKGNhbnZhcykge1xuICAgICAgY29uc3QgaW5pdGlhbFdpZHRoID0gY2FudmFzLndpZHRoO1xuICAgICAgY29uc3QgaW5pdGlhbEhlaWdodCA9IGNhbnZhcy5oZWlnaHQ7XG5cbiAgICAgIGlmKGNvbnRhaW5lcikge1xuICAgICAgICBjb250YWluZXIud2lkdGggPSBpbml0aWFsV2lkdGg7XG4gICAgICAgIGNvbnRhaW5lci5oZWlnaHQgPSBpbml0aWFsSGVpZ2h0O1xuICAgICAgfVxuXG4gICAgICBpZighZG9jdW1lbnQuZnVsbHNjcmVlbkVsZW1lbnQpIHtcbiAgICAgICAgaWYoKGNvbnRhaW5lciB8fCBjYW52YXMpLnJlcXVlc3RGdWxsc2NyZWVuKSB7XG4gICAgICAgICAgKGNvbnRhaW5lciB8fCBjYW52YXMpLnJlcXVlc3RGdWxsc2NyZWVuKCk7XG4gICAgICAgIH0gZWxzZSBpZigoY29udGFpbmVyIHx8IGNhbnZhcykubW96UmVxdWVzdEZ1bGxTY3JlZW4pIHtcbiAgICAgICAgICAoY29udGFpbmVyIHx8IGNhbnZhcykubW96UmVxdWVzdEZ1bGxTY3JlZW4oKTtcbiAgICAgICAgfSBlbHNlIGlmKChjb250YWluZXIgfHwgY2FudmFzKS53ZWJraXRSZXF1ZXN0RnVsbHNjcmVlbikge1xuICAgICAgICAgIChjb250YWluZXIgfHwgY2FudmFzKS53ZWJraXRSZXF1ZXN0RnVsbHNjcmVlbigpO1xuICAgICAgICB9IGVsc2UgaWYoKGNvbnRhaW5lciB8fCBjYW52YXMpLm1zUmVxdWVzdEZ1bGxzY3JlZW4pIHtcbiAgICAgICAgICAoY29udGFpbmVyIHx8IGNhbnZhcykubXNSZXF1ZXN0RnVsbHNjcmVlbigpO1xuICAgICAgICB9IGVsc2UgaWYoKGNvbnRhaW5lciB8fCBjYW52YXMpLm9SZXF1ZXN0RnVsbHNjcmVlbikge1xuICAgICAgICAgIChjb250YWluZXIgfHwgY2FudmFzKS5vUmVxdWVzdEZ1bGxzY3JlZW4oKTtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgaWYoZG9jdW1lbnQuZXhpdEZ1bGxzY3JlZW4pIHtcbiAgICAgICAgICBkb2N1bWVudC5leGl0RnVsbHNjcmVlbigpO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIHRoaXMuZW5hYmxlQXV0b1Jlc2l6ZUNhbnZhc0Z1bGxzY3JlZW4oY2FudmFzLCBjb250YWluZXIpO1xuXG4gICAgICBpZihjYW52YXMuZ2V0QXR0cmlidXRlKFwiZnVsbHNjcmVlbmNoYW5nZS1jYW52YXMtZXZlbnRcIikgIT0gXCJ0cnVlXCIpIHtcbiAgICAgICAgY2FudmFzLnNldEF0dHJpYnV0ZShcImZ1bGxzY3JlZW5jaGFuZ2UtY2FudmFzLWV2ZW50XCIsIFwidHJ1ZVwiKTtcblxuICAgICAgICBjb25zdCBvbmZ1bGxzY3JlZW5jaGFuZ2UgPSAoKSA9PiB7XG4gICAgICAgICAgaWYoZG9jdW1lbnQuZnVsbHNjcmVlbkVsZW1lbnQgIT0gKGNvbnRhaW5lciB8fCBjYW52YXMpKSB7XG4gICAgICAgICAgICBjYW52YXMud2lkdGggPSBpbml0aWFsV2lkdGg7XG4gICAgICAgICAgICBjYW52YXMuaGVpZ2h0ID0gaW5pdGlhbEhlaWdodDtcbiAgICAgIFxuICAgICAgICAgICAgaWYoY29udGFpbmVyKSB7XG4gICAgICAgICAgICAgIGNvbnRhaW5lci53aWR0aCA9IGluaXRpYWxXaWR0aDtcbiAgICAgICAgICAgICAgY29udGFpbmVyLmhlaWdodCA9IGluaXRpYWxIZWlnaHQ7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9O1xuICAgIFxuICAgICAgICBpZih0eXBlb2YoZG9jdW1lbnQub25mdWxsc2NyZWVuY2hhbmdlKSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGRvY3VtZW50Lm9uZnVsbHNjcmVlbmNoYW5nZSA9IG9uZnVsbHNjcmVlbmNoYW5nZTtcbiAgICAgICAgfSBlbHNlIGlmKHR5cGVvZihkb2N1bWVudC5vbm1zZnVsbHNjcmVlbmNoYW5nZSkgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBkb2N1bWVudC5vbm1zZnVsbHNjcmVlbmNoYW5nZSA9IG9uZnVsbHNjcmVlbmNoYW5nZTtcbiAgICAgICAgfSBlbHNlIGlmKHR5cGVvZihkb2N1bWVudC5vbm1vemZ1bGxzY3JlZW5jaGFuZ2UpICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgZG9jdW1lbnQub25tb3pmdWxsc2NyZWVuY2hhbmdlID0gb25mdWxsc2NyZWVuY2hhbmdlO1xuICAgICAgICB9IGVsc2UgaWYodHlwZW9mKGRvY3VtZW50Lm9ud2Via2l0ZnVsbHNjcmVlbmNoYW5nZSkgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBkb2N1bWVudC5vbndlYmtpdGZ1bGxzY3JlZW5jaGFuZ2UgPSBvbmZ1bGxzY3JlZW5jaGFuZ2U7XG4gICAgICAgIH0gZWxzZSBpZih0eXBlb2YoZG9jdW1lbnQub25va2l0ZnVsbHNjcmVlbmNoYW5nZSkgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBkb2N1bWVudC5vbm9mdWxsc2NyZWVuY2hhbmdlID0gb25mdWxsc2NyZWVuY2hhbmdlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9LFxuICB0b2dnbGVGdWxscGFnZTogZnVuY3Rpb24oY2FudmFzLCBjb250YWluZXIpIHtcbiAgICBpZihjYW52YXMpIHtcbiAgICAgIGNvbnN0IGluaXRpYWxXaWR0aCA9IGNhbnZhcy53aWR0aDtcbiAgICAgIGNvbnN0IGluaXRpYWxIZWlnaHQgPSBjYW52YXMuaGVpZ2h0O1xuXG4gICAgICBpZihjb250YWluZXIpIHtcbiAgICAgICAgY29udGFpbmVyLndpZHRoID0gaW5pdGlhbFdpZHRoO1xuICAgICAgICBjb250YWluZXIuaGVpZ2h0ID0gaW5pdGlhbEhlaWdodDtcbiAgICAgIH1cblxuICAgICAgaWYoIWNhbnZhcy5nZXRBdHRyaWJ1dGUoXCJmdWxscGFnZS1jYW52YXMtZW5hYmxlXCIpIHx8IGNhbnZhcy5nZXRBdHRyaWJ1dGUoXCJmdWxscGFnZS1jYW52YXMtZW5hYmxlXCIpID09IFwiZmFsc2VcIikge1xuICAgICAgICBjYW52YXMuc2V0QXR0cmlidXRlKFwiZnVsbHBhZ2UtY2FudmFzLWVuYWJsZVwiLCBcInRydWVcIik7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBjYW52YXMuc2V0QXR0cmlidXRlKFwiZnVsbHBhZ2UtY2FudmFzLWVuYWJsZVwiLCBcImZhbHNlXCIpO1xuICAgICAgfVxuXG4gICAgICB0aGlzLmVuYWJsZUF1dG9SZXNpemVDYW52YXNGdWxscGFnZShjYW52YXMsIGNvbnRhaW5lcik7XG4gICAgfVxuICB9LFxuICBnZXRNb3VzZVBvcyhjYW52YXMsIGV2ZW50KSB7XG4gICAgY29uc3QgcmVjdCA9IGNhbnZhcy5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcbiAgICBcbiAgICByZXR1cm4ge1xuICAgICAgeDogZXZlbnQuY2xpZW50WCAtIHJlY3QubGVmdCxcbiAgICAgIHk6IGV2ZW50LmNsaWVudFkgLSByZWN0LnRvcFxuICAgIH07XG4gIH1cbn07IiwiLypcbiAqIENvcHlyaWdodCAoQykgMjAyMCBFbGlhc3RpayAoZWxpYXN0aWtzb2Z0cy5jb20pXG4gKlxuICogVGhpcyBmaWxlIGlzIHBhcnQgb2YgXCJKU0dhbWVUb29sc1wiLlxuICpcbiAqIFwiSlNHYW1lVG9vbHNcIiBpcyBmcmVlIHNvZnR3YXJlOiB5b3UgY2FuIHJlZGlzdHJpYnV0ZSBpdCBhbmQvb3IgbW9kaWZ5XG4gKiBpdCB1bmRlciB0aGUgdGVybXMgb2YgdGhlIEdOVSBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlIGFzIHB1Ymxpc2hlZCBieVxuICogdGhlIEZyZWUgU29mdHdhcmUgRm91bmRhdGlvbiwgZWl0aGVyIHZlcnNpb24gMyBvZiB0aGUgTGljZW5zZSwgb3JcbiAqIChhdCB5b3VyIG9wdGlvbikgYW55IGxhdGVyIHZlcnNpb24uXG4gKlxuICogXCJKU0dhbWVUb29sc1wiIGlzIGRpc3RyaWJ1dGVkIGluIHRoZSBob3BlIHRoYXQgaXQgd2lsbCBiZSB1c2VmdWwsXG4gKiBidXQgV0lUSE9VVCBBTlkgV0FSUkFOVFk7IHdpdGhvdXQgZXZlbiB0aGUgaW1wbGllZCB3YXJyYW50eSBvZlxuICogTUVSQ0hBTlRBQklMSVRZIG9yIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFLiAgU2VlIHRoZVxuICogR05VIEdlbmVyYWwgUHVibGljIExpY2Vuc2UgZm9yIG1vcmUgZGV0YWlscy5cbiAqXG4gKiBZb3Ugc2hvdWxkIGhhdmUgcmVjZWl2ZWQgYSBjb3B5IG9mIHRoZSBHTlUgR2VuZXJhbCBQdWJsaWMgTGljZW5zZVxuICogYWxvbmcgd2l0aCBcIkpTR2FtZVRvb2xzXCIuICBJZiBub3QsIHNlZSA8aHR0cDovL3d3dy5nbnUub3JnL2xpY2Vuc2VzLz4uXG4gKi9cbmltcG9ydCBDb25zdGFudHMgZnJvbSBcIi4vQ29uc3RhbnRzXCI7XG5pbXBvcnQgQnV0dG9uIGZyb20gXCIuL0J1dHRvblwiO1xuaW1wb3J0IEJ1dHRvbkltYWdlIGZyb20gXCIuL0J1dHRvbkltYWdlXCI7XG5pbXBvcnQgSW1hZ2VMb2FkZXIgZnJvbSBcIi4vSW1hZ2VMb2FkZXJcIjtcbmltcG9ydCBOb3RpZmljYXRpb25NZXNzYWdlIGZyb20gXCIuL05vdGlmaWNhdGlvbk1lc3NhZ2VcIjtcbmltcG9ydCBVdGlscyBmcm9tIFwiLi9VdGlsc1wiO1xuaW1wb3J0IE1lbnUgZnJvbSBcIi4vTWVudVwiO1xuaW1wb3J0IElucHV0IGZyb20gXCIuL0lucHV0XCI7XG5pbXBvcnQgTGFiZWwgZnJvbSBcIi4vTGFiZWxcIjtcbmltcG9ydCBMaW5rIGZyb20gXCIuL0xpbmtcIjtcbmltcG9ydCBUb29sdGlwIGZyb20gXCIuL1Rvb2x0aXBcIjtcbmltcG9ydCBTY2VuZSBmcm9tIFwiLi9TY2VuZVwiO1xuaW1wb3J0IEZQU01ldGVyIGZyb20gXCIuL0ZQU01ldGVyXCI7XG5pbXBvcnQgUHJvZ3Jlc3NCYXIgZnJvbSBcIi4vUHJvZ3Jlc3NCYXJcIjtcbmltcG9ydCBDYW52YXMgZnJvbSBcIi4vQ2FudmFzXCI7XG5pbXBvcnQgQ29tcG9uZW50IGZyb20gXCIuL0NvbXBvbmVudFwiO1xuaW1wb3J0IEVhc2luZ0Z1bmN0aW9ucyBmcm9tIFwiLi9FYXNpbmdGdW5jdGlvbnNcIjtcbmltcG9ydCBDb2wgZnJvbSBcIi4vQ29sXCI7XG5pbXBvcnQgQ29udGFpbmVyIGZyb20gXCIuL0NvbnRhaW5lclwiO1xuaW1wb3J0IFJvdyBmcm9tIFwiLi9Sb3dcIjtcbmltcG9ydCBJbWFnZUNvbnRhaW5lciBmcm9tIFwiLi9JbWFnZUNvbnRhaW5lclwiO1xuaW1wb3J0IEFycm93IGZyb20gXCIuL0Fycm93XCI7XG5pbXBvcnQgQ3Jvc3MgZnJvbSBcIi4vQ3Jvc3NcIjtcbmltcG9ydCBTY3JvbGxiYXIgZnJvbSBcIi4vU2Nyb2xsYmFyXCI7XG5pbXBvcnQgU2Nyb2xsYmFyVmVydGljYWwgZnJvbSBcIi4vU2Nyb2xsYmFyVmVydGljYWxcIjtcbmltcG9ydCBTY3JvbGxiYXJIb3Jpem9udGFsIGZyb20gXCIuL1Njcm9sbGJhckhvcml6b250YWxcIjtcbmltcG9ydCBCb3ggZnJvbSBcIi4vQm94XCI7XG5pbXBvcnQgU3R5bGUgZnJvbSBcIi4vU3R5bGVcIjtcbmltcG9ydCBTZWxlY3QgZnJvbSBcIi4vU2VsZWN0XCI7XG5pbXBvcnQgU2VsZWN0T3B0aW9uIGZyb20gXCIuL1NlbGVjdE9wdGlvblwiO1xuaW1wb3J0IFNlbGVjdE9wdGlvbnNDb250YWluZXIgZnJvbSBcIi4vU2VsZWN0T3B0aW9uc0NvbnRhaW5lclwiO1xuaW1wb3J0IFRyaWFuZ2xlIGZyb20gXCIuL1RyaWFuZ2xlXCI7XG5pbXBvcnQgQ2lyY2xlIGZyb20gXCIuL0NpcmNsZVwiO1xuaW1wb3J0IFJlYWN0b3IgZnJvbSBcIi4vUmVhY3RvclwiO1xuaW1wb3J0IEV2ZW50IGZyb20gXCIuL0V2ZW50XCI7XG5pbXBvcnQgUmVhY3RvckNhbnZhcyBmcm9tIFwiLi9SZWFjdG9yQ2FudmFzXCI7XG5pbXBvcnQgRXJyb3JTY3JlZW4gZnJvbSBcIi4vRXJyb3JTY3JlZW5cIjtcblxuZXhwb3J0IHsgQ29uc3RhbnRzLCBCdXR0b24sIEJ1dHRvbkltYWdlLCBJbWFnZUxvYWRlciwgTm90aWZpY2F0aW9uTWVzc2FnZSwgVXRpbHMsIE1lbnUsIElucHV0LCBMYWJlbCwgTGluaywgVG9vbHRpcCwgU2NlbmUsIEZQU01ldGVyLCBQcm9ncmVzc0JhciwgQ2FudmFzLCBDb21wb25lbnQsIEVhc2luZ0Z1bmN0aW9ucywgQ29sLCBDb250YWluZXIsIFJvdywgSW1hZ2VDb250YWluZXIsIEFycm93LCBDcm9zcywgU2Nyb2xsYmFyLCBTY3JvbGxiYXJWZXJ0aWNhbCwgU2Nyb2xsYmFySG9yaXpvbnRhbCwgQm94LCBTdHlsZSwgU2VsZWN0LCBTZWxlY3RPcHRpb24sIFNlbGVjdE9wdGlvbnNDb250YWluZXIsIFRyaWFuZ2xlLCBDaXJjbGUsIFJlYWN0b3IsIEV2ZW50LCBSZWFjdG9yQ2FudmFzLCBFcnJvclNjcmVlbiB9OyJdLCJzb3VyY2VSb290IjoiIn0=