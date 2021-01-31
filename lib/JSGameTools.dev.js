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
/* harmony import */ var _Row__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./Row */ "./src/Row.js");






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
      "backgroundColor": _Constants__WEBPACK_IMPORTED_MODULE_5__["default"].Setting.BUTTON_DEFAULT_ALTERNATIVE_BACKGROUND
    }), new _Label__WEBPACK_IMPORTED_MODULE_10__["default"](_Constants__WEBPACK_IMPORTED_MODULE_5__["default"].String.RETRY, null, null, new _Style__WEBPACK_IMPORTED_MODULE_11__["default"]({
      "fontColor": "white",
      "alignement": "center"
    })));
    var buttonDetailsSceneError = new _Button__WEBPACK_IMPORTED_MODULE_12__["default"](null, null, null, null, new _Style__WEBPACK_IMPORTED_MODULE_11__["default"]({
      "backgroundColor": _Constants__WEBPACK_IMPORTED_MODULE_5__["default"].Setting.BUTTON_DEFAULT_ALTERNATIVE_BACKGROUND
    }), new _Label__WEBPACK_IMPORTED_MODULE_10__["default"](_Constants__WEBPACK_IMPORTED_MODULE_5__["default"].String.DETAILS, null, null, new _Style__WEBPACK_IMPORTED_MODULE_11__["default"]({
      "fontColor": "white",
      "alignement": "center"
    })));
    this.labelDetailsSceneError = new _Label__WEBPACK_IMPORTED_MODULE_10__["default"]("", null, null, new _Style__WEBPACK_IMPORTED_MODULE_11__["default"]({
      "fontColor": "white",
      "alignement": "center",
      "fontSize": _Constants__WEBPACK_IMPORTED_MODULE_5__["default"].Setting.FONT_SIZE / 1.75
    }));
    this.labelDetailsSceneError.hidden = true;
    var colDetailsSceneError = new _Row__WEBPACK_IMPORTED_MODULE_13__["default"](null, null, null, 0, new _Style__WEBPACK_IMPORTED_MODULE_11__["default"]({
      "alignement": "center"
    }), this.labelDetailsSceneError);
    var menuSceneError = new _Menu__WEBPACK_IMPORTED_MODULE_9__["default"](new _Style__WEBPACK_IMPORTED_MODULE_11__["default"]({
      "spaceBetweenComponents": 15,
      "backgroundColor": _Constants__WEBPACK_IMPORTED_MODULE_5__["default"].Setting.ERROR_MENU_BACKGROUND_COLOR
    }), new _Label__WEBPACK_IMPORTED_MODULE_10__["default"](_Constants__WEBPACK_IMPORTED_MODULE_5__["default"].String.ERROR_MESSAGE_CANVAS_LABEL, null, null, new _Style__WEBPACK_IMPORTED_MODULE_11__["default"]({
      "fontColor": "white",
      "alignement": "center"
    })), colDetailsSceneError, new _Row__WEBPACK_IMPORTED_MODULE_13__["default"](null, null, null, null, new _Style__WEBPACK_IMPORTED_MODULE_11__["default"]({
      "alignement": "center"
    }), buttonSceneError, buttonDetailsSceneError));
    menuSceneError.enable();
    this.sceneError = new _Scene__WEBPACK_IMPORTED_MODULE_7__["default"](menuSceneError);
    this.scenePrevious = this.scene;
    buttonSceneError.addClickAction(function () {
      _this.hasError = false;
      _this.scene = _this.scenePrevious;
    });
    buttonDetailsSceneError.addClickAction(function () {
      _this.labelDetailsSceneError.hidden = !_this.labelDetailsSceneError.hidden;
      colDetailsSceneError.maxHeight = !_this.labelDetailsSceneError.hidden ? 100 : 0;
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
          this.labelDetailsSceneError.text = "" + e.stack;
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
              var deltaX = -event.movementX;
              var deltaY = -event.movementY;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9KU0dhbWVUb29scy93ZWJwYWNrL3VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24iLCJ3ZWJwYWNrOi8vSlNHYW1lVG9vbHMvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vSlNHYW1lVG9vbHMvLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9hcnJheUxpa2VUb0FycmF5LmpzIiwid2VicGFjazovL0pTR2FtZVRvb2xzLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvYXJyYXlXaXRob3V0SG9sZXMuanMiLCJ3ZWJwYWNrOi8vSlNHYW1lVG9vbHMvLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQuanMiLCJ3ZWJwYWNrOi8vSlNHYW1lVG9vbHMvLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9jbGFzc0NhbGxDaGVjay5qcyIsIndlYnBhY2s6Ly9KU0dhbWVUb29scy8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2NsYXNzUHJpdmF0ZUZpZWxkR2V0LmpzIiwid2VicGFjazovL0pTR2FtZVRvb2xzLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvY2xhc3NQcml2YXRlRmllbGRTZXQuanMiLCJ3ZWJwYWNrOi8vSlNHYW1lVG9vbHMvLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9jb25zdHJ1Y3QuanMiLCJ3ZWJwYWNrOi8vSlNHYW1lVG9vbHMvLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9jcmVhdGVDbGFzcy5qcyIsIndlYnBhY2s6Ly9KU0dhbWVUb29scy8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2RlZmluZVByb3BlcnR5LmpzIiwid2VicGFjazovL0pTR2FtZVRvb2xzLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZ2V0LmpzIiwid2VicGFjazovL0pTR2FtZVRvb2xzLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZ2V0UHJvdG90eXBlT2YuanMiLCJ3ZWJwYWNrOi8vSlNHYW1lVG9vbHMvLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9pbmhlcml0cy5qcyIsIndlYnBhY2s6Ly9KU0dhbWVUb29scy8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2lzTmF0aXZlUmVmbGVjdENvbnN0cnVjdC5qcyIsIndlYnBhY2s6Ly9KU0dhbWVUb29scy8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2l0ZXJhYmxlVG9BcnJheS5qcyIsIndlYnBhY2s6Ly9KU0dhbWVUb29scy8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL25vbkl0ZXJhYmxlU3ByZWFkLmpzIiwid2VicGFjazovL0pTR2FtZVRvb2xzLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvcG9zc2libGVDb25zdHJ1Y3RvclJldHVybi5qcyIsIndlYnBhY2s6Ly9KU0dhbWVUb29scy8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL3NldC5qcyIsIndlYnBhY2s6Ly9KU0dhbWVUb29scy8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL3NldFByb3RvdHlwZU9mLmpzIiwid2VicGFjazovL0pTR2FtZVRvb2xzLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvc3VwZXJQcm9wQmFzZS5qcyIsIndlYnBhY2s6Ly9KU0dhbWVUb29scy8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL3RvQ29uc3VtYWJsZUFycmF5LmpzIiwid2VicGFjazovL0pTR2FtZVRvb2xzLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvdHlwZW9mLmpzIiwid2VicGFjazovL0pTR2FtZVRvb2xzLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvdW5zdXBwb3J0ZWRJdGVyYWJsZVRvQXJyYXkuanMiLCJ3ZWJwYWNrOi8vSlNHYW1lVG9vbHMvLi9zcmMvQXJyb3cuanMiLCJ3ZWJwYWNrOi8vSlNHYW1lVG9vbHMvLi9zcmMvQm94LmpzIiwid2VicGFjazovL0pTR2FtZVRvb2xzLy4vc3JjL0J1dHRvbi5qcyIsIndlYnBhY2s6Ly9KU0dhbWVUb29scy8uL3NyYy9CdXR0b25JbWFnZS5qcyIsIndlYnBhY2s6Ly9KU0dhbWVUb29scy8uL3NyYy9DYW52YXMuanMiLCJ3ZWJwYWNrOi8vSlNHYW1lVG9vbHMvLi9zcmMvQ2lyY2xlLmpzIiwid2VicGFjazovL0pTR2FtZVRvb2xzLy4vc3JjL0NvbC5qcyIsIndlYnBhY2s6Ly9KU0dhbWVUb29scy8uL3NyYy9Db21wb25lbnQuanMiLCJ3ZWJwYWNrOi8vSlNHYW1lVG9vbHMvLi9zcmMvQ29uc3RhbnRzLmpzIiwid2VicGFjazovL0pTR2FtZVRvb2xzLy4vc3JjL0NvbnRhaW5lci5qcyIsIndlYnBhY2s6Ly9KU0dhbWVUb29scy8uL3NyYy9Dcm9zcy5qcyIsIndlYnBhY2s6Ly9KU0dhbWVUb29scy8uL3NyYy9FYXNpbmdGdW5jdGlvbnMuanMiLCJ3ZWJwYWNrOi8vSlNHYW1lVG9vbHMvLi9zcmMvRXZlbnQuanMiLCJ3ZWJwYWNrOi8vSlNHYW1lVG9vbHMvLi9zcmMvRlBTTWV0ZXIuanMiLCJ3ZWJwYWNrOi8vSlNHYW1lVG9vbHMvLi9zcmMvSW1hZ2VDb250YWluZXIuanMiLCJ3ZWJwYWNrOi8vSlNHYW1lVG9vbHMvLi9zcmMvSW1hZ2VMb2FkZXIuanMiLCJ3ZWJwYWNrOi8vSlNHYW1lVG9vbHMvLi9zcmMvSW5wdXQuanMiLCJ3ZWJwYWNrOi8vSlNHYW1lVG9vbHMvLi9zcmMvTGFiZWwuanMiLCJ3ZWJwYWNrOi8vSlNHYW1lVG9vbHMvLi9zcmMvTGluay5qcyIsIndlYnBhY2s6Ly9KU0dhbWVUb29scy8uL3NyYy9NZW51LmpzIiwid2VicGFjazovL0pTR2FtZVRvb2xzLy4vc3JjL05vdGlmaWNhdGlvbk1lc3NhZ2UuanMiLCJ3ZWJwYWNrOi8vSlNHYW1lVG9vbHMvLi9zcmMvUHJvZ3Jlc3NCYXIuanMiLCJ3ZWJwYWNrOi8vSlNHYW1lVG9vbHMvLi9zcmMvUmVhY3Rvci5qcyIsIndlYnBhY2s6Ly9KU0dhbWVUb29scy8uL3NyYy9SZWFjdG9yQ2FudmFzLmpzIiwid2VicGFjazovL0pTR2FtZVRvb2xzLy4vc3JjL1Jvdy5qcyIsIndlYnBhY2s6Ly9KU0dhbWVUb29scy8uL3NyYy9TY2VuZS5qcyIsIndlYnBhY2s6Ly9KU0dhbWVUb29scy8uL3NyYy9TY3JvbGxiYXIuanMiLCJ3ZWJwYWNrOi8vSlNHYW1lVG9vbHMvLi9zcmMvU2Nyb2xsYmFySG9yaXpvbnRhbC5qcyIsIndlYnBhY2s6Ly9KU0dhbWVUb29scy8uL3NyYy9TY3JvbGxiYXJWZXJ0aWNhbC5qcyIsIndlYnBhY2s6Ly9KU0dhbWVUb29scy8uL3NyYy9TZWxlY3QuanMiLCJ3ZWJwYWNrOi8vSlNHYW1lVG9vbHMvLi9zcmMvU2VsZWN0T3B0aW9uLmpzIiwid2VicGFjazovL0pTR2FtZVRvb2xzLy4vc3JjL1NlbGVjdE9wdGlvbnNDb250YWluZXIuanMiLCJ3ZWJwYWNrOi8vSlNHYW1lVG9vbHMvLi9zcmMvU3R5bGUuanMiLCJ3ZWJwYWNrOi8vSlNHYW1lVG9vbHMvLi9zcmMvVG9vbHRpcC5qcyIsIndlYnBhY2s6Ly9KU0dhbWVUb29scy8uL3NyYy9UcmlhbmdsZS5qcyIsIndlYnBhY2s6Ly9KU0dhbWVUb29scy8uL3NyYy9VdGlscy5qcyIsIndlYnBhY2s6Ly9KU0dhbWVUb29scy8uL3NyYy9pbmRleC5qcyJdLCJuYW1lcyI6WyJBcnJvdyIsIngiLCJ5IiwidG9YIiwidG9ZIiwic3R5bGUiLCJjb250ZXh0IiwiaGlkZGVuIiwiY2FudmFzIiwiY3R4IiwiZ2V0Q29udGV4dCIsIlV0aWxzIiwiZHJhd0Fycm93IiwibGluZVdpZHRoIiwiaGVhZFNpemUiLCJjb2xvciIsImxpbmVDYXAiLCJpbml0IiwiTWF0aCIsImFicyIsIlN0eWxlIiwiQ29uc3RhbnRzIiwiU2V0dGluZyIsIkFSUk9XX0RFRkFVTFRfTElORV9TSVpFIiwiQVJST1dfREVGQVVMVF9IRUFEX1NJWkUiLCJBUlJPV19ERUZBVUxUX0NPTE9SIiwiQVJST1dfREVGQVVMVF9MSU5FX0NBUCIsIkNvbXBvbmVudCIsIkJveCIsIndpZHRoIiwiaGVpZ2h0Iiwic2F2ZSIsImRyYXdCYWNrZ3JvdW5kIiwiZHJhd0JvcmRlciIsInJlc3RvcmUiLCJiYWNrZ3JvdW5kQ29sb3IiLCJmaWxsU3R5bGUiLCJmaWxsUmVjdCIsInJvdW5kIiwiYm9yZGVyQ29sb3IiLCJib3JkZXJTaXplIiwic3Ryb2tlU3R5bGUiLCJzdHJva2VSZWN0IiwiaG92ZXJlZCIsImNsaWNrZWQiLCJiYWNrZ3JvdW5kQ29sb3JEb3duIiwiYmFja2dyb3VuZENvbG9ySG92ZXIiLCJib3JkZXJDb2xvckRvd24iLCJib3JkZXJDb2xvckhvdmVyIiwic2VsZWN0YWJsZSIsInNlbGVjdGVkIiwiYm9yZGVyQ29sb3JTZWxlY3RlZCIsIkJ1dHRvbiIsIm1heFdpZHRoIiwibWF4SGVpZ2h0IiwiY29tcG9uZW50cyIsImRyYXdDb21wb25lbnRzIiwicGFkZGluZyIsIkJVVFRPTl9ERUZBVUxUX0JBQ0tHUk9VTkQiLCJCVVRUT05fREVGQVVMVF9IT1ZFUl9CQUNLR1JPVU5EIiwiQlVUVE9OX0RFRkFVTFRfQ0xJQ0tfQkFDS0dST1VORCIsIlJvdyIsIkJ1dHRvbkltYWdlIiwiaW1nU3JjIiwiYWxpZ25lbWVudCIsInZlcnRpY2FsQWxpZ25lbWVudCIsImltYWdlTG9hZGVyIiwiaW1hZ2UiLCJJbWFnZUNvbnRhaW5lciIsImFkZCIsImNvbnNvbGUiLCJ3YXJuIiwiU3RyaW5nIiwiTk9USUNFX01FU1NBR0UiLCJCVVRUT05fSU1BR0VfREVQUkVDQVRFRCIsImxvYWRJbWFnZSIsIm1pbldpZHRoIiwibWluSGVpZ2h0IiwiQ2FudmFzIiwic2NlbmUiLCJhdXRvUmVzaXplIiwibWF4RlBTIiwiZG9jdW1lbnQiLCJjcmVhdGVFbGVtZW50IiwiY29udGFpbmVyIiwiQ0FOVkFTX1dJRFRIIiwiQ0FOVkFTX0hFSUdIVCIsImFwcGVuZENoaWxkIiwic3RhcnRlZCIsImhhc0Vycm9yIiwiZnVsbHNjcmVlbiIsImZ1bGxwYWdlIiwiYnV0dG9uU2NlbmVFcnJvciIsIkJVVFRPTl9ERUZBVUxUX0FMVEVSTkFUSVZFX0JBQ0tHUk9VTkQiLCJMYWJlbCIsIlJFVFJZIiwiYnV0dG9uRGV0YWlsc1NjZW5lRXJyb3IiLCJERVRBSUxTIiwibGFiZWxEZXRhaWxzU2NlbmVFcnJvciIsIkZPTlRfU0laRSIsImNvbERldGFpbHNTY2VuZUVycm9yIiwibWVudVNjZW5lRXJyb3IiLCJNZW51IiwiRVJST1JfTUVOVV9CQUNLR1JPVU5EX0NPTE9SIiwiRVJST1JfTUVTU0FHRV9DQU5WQVNfTEFCRUwiLCJlbmFibGUiLCJzY2VuZUVycm9yIiwiU2NlbmUiLCJzY2VuZVByZXZpb3VzIiwiYWRkQ2xpY2tBY3Rpb24iLCJyZWFjdG9yIiwiUmVhY3RvckNhbnZhcyIsInJlZ2lzdGVyRXZlbnQiLCJjcmVhdGVFdmVudHMiLCJESVNBQkxFX09QVElNSVpBVElPTlMiLCJpbmZvIiwiT1BUSU1JWkFUSU9OX0RJU0FCTEVEIiwiRElTQUJMRV9DT05UQUlORVJTX0NVVFRJTkciLCJDT05UQUlORVJfQ1VUVElOR19ESVNBQkxFRCIsImRyYXdDbGVhciIsImRyYXdTY2VuZSIsInBhcmVudCIsInNjYWxlIiwiUElYRUxfUkFUSU8iLCJkcmF3IiwiZSIsInRleHQiLCJzdGFjayIsImVycm9yIiwiRVJST1JfTUVTU0FHRSIsIkVSUk9SX01FU1NBR0VfQ0FOVkFTIiwiY2xlYXIiLCJmdW5jIiwicmVxdWVzdEFuaW1hdGlvbkZyYW1lIiwidGltZSIsIm9mZnNldEZyYW1lIiwiZnVsbHNjcmVlbkVsZW1lbnQiLCJFTkFCTEVfUElYRUxfUkFUSU9fUkVTSVpJTkciLCJ3aW5kb3ciLCJkZXZpY2VQaXhlbFJhdGlvIiwiUkVTT0xVVElPTl9TQ0FMRSIsImF1dG9EUEkiLCJzdGFydERyYXciLCJlbGVtZW50IiwicmVtb3ZlQ2hpbGQiLCJ0b2dnbGVGdWxsc2NyZWVuIiwidG9nZ2xlRnVsbHBhZ2UiLCJlbmFibGVBdXRvUmVzaXplQ2FudmFzIiwiZm9yRWFjaCIsImV2ZW50TmFtZSIsImFkZEV2ZW50TGlzdGVuZXIiLCJldmVudCIsIm1vdXNlUG9zaXRpb24iLCJnZXRNb3VzZVBvcyIsImRvRXZlbnRzIiwicHJldmVudERlZmF1bHQiLCJjaGFuZ2VkVG91Y2hlcyIsInBvc2l0aW9uIiwiZ2V0Q29tcG9uZW50c0F0UG9zaXRpb24iLCJkaXNwYXRjaEV2ZW50IiwicmV2ZXJzZSIsImNvbXBvbmVudCIsImRpc3BhdGNoRXZlbnRDb21wb25lbnQiLCJjYWxsYmFjayIsInN0YXJ0IiwiZ2V0QWxsQ29tcG9uZW50cyIsImFsbENvbXBvbmVudHMiLCJnZXRDb21wb25lbnRzVHJlZSIsInJlc3VsdCIsImNoaWxkcyIsInNvcnQiLCJzb3J0Q29tcG9uZW50c1RyZWUiLCJzb21lIiwiY2hpbGQiLCJpc0luc2lkZSIsImRpc2FibGVkIiwicHVzaCIsImdldENhbnZhc1dpZHRoIiwiZ2V0Q2FudmFzSGVpZ2h0IiwiQ2lyY2xlIiwiZHJhd0NpcmNsZSIsImZpbGwiLCJmaWxsQ29sb3IiLCJDSVJDTEVfREVGQVVMVF9MSU5FX1NJWkUiLCJDSVJDTEVfREVGQVVMVF9DT0xPUiIsIkNJUkNMRV9ERUZBVUxUX0ZJTEwiLCJDSVJDTEVfREVGQVVMVF9MSU5FX0NBUCIsIkNJUkNMRV9ERUZBVUxUX0ZJTExfQ09MT1IiLCJDb2wiLCJESVNBQkxFX0VYUEVSSU1FTlRBTF9PUFRJTUlaQVRJT05TIiwidXBkYXRlSW5uZXJXaWR0aCIsInVwZGF0ZUlubmVySGVpZ2h0IiwiYWRkQ2hhbmdlQWN0aW9uIiwiY3R4VGVtcCIsImlzQ3V0dGluZyIsImNhbnZhc1RtcCIsImN1cnJlbnRZIiwiZHJhd0NvbXBvbmVudCIsImRyYXdJbWFnZURhdGEiLCJvZmZzZXRTY3JvbGxYIiwib2Zmc2V0U2Nyb2xsWSIsImlzQ29tcG9uZW50VmlzaWJsZSIsInNwYWNlQmV0d2VlbkNvbXBvbmVudHMiLCJ0b3RhbEhlaWdodCIsImxlbmd0aCIsImlubmVyV2lkdGgiLCJtaW4iLCJtYXgiLCJpbm5lckhlaWdodCIsIkNvbnRhaW5lciIsImRlbHRhWCIsImRlbHRhWSIsIlJlYWN0b3IiLCJoYXNJbml0RXZlbnRzIiwibW92YWJsZSIsIm9mZnNldE1vdmVYIiwib2Zmc2V0TW92ZVkiLCJtb3ZlRXZlbnRTdGFydFgiLCJtb3ZlRXZlbnRTdGFydFkiLCJ0b3VjaEV2ZW50U3RhcnRYIiwidG91Y2hFdmVudFN0YXJ0WSIsInRvdWNoRXZlbnRTdGFydFRpbWVzdGFtcCIsInRvb2x0aXAiLCJpbml0RXZlbnRzIiwiYWRkTW92ZUFjdGlvbiIsIm1vdmVtZW50WCIsIm1vdmVtZW50WSIsImRpc2FibGUiLCJzY3JvbGxEaXNhYmxlZCIsInRvdWNoU2Nyb2xsRXZlbnQiLCJ0b3VjaFN0YXJ0RW5kRXZlbnQiLCJ0aW1lc3RhbXAiLCJwb3MiLCJ0cmlnZ2VyIiwicmVtb3ZlQWxsQ2xpY2tBY3Rpb25zIiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsInJlbW92ZUFsbEV2ZW50TGlzdGVuZXIiLCJyZW1vdmVBbGxIb3ZlckFjdGlvbnMiLCJhZGRIb3ZlckFjdGlvbiIsInJlbW92ZUFsbERvd25BY3Rpb25zIiwiYWRkRG93bkFjdGlvbiIsInJlbW92ZUFsbFNjcm9sbEFjdGlvbnMiLCJhZGRTY3JvbGxBY3Rpb24iLCJyZW1vdmVBbGxNb3ZlQWN0aW9ucyIsInJlbW92ZUFsbENoYW5nZUFjdGlvbnMiLCJyZW1vdmVBbGxVcEFjdGlvbnMiLCJhZGRVcEFjdGlvbiIsInJlcyIsIm90aGVyQ29tcG9uZW50IiwiaXNGb3JlZ3JvdW5kIiwiZm9yZWdyb3VuZCIsIm90aGVySXNGb3JlZ3JvdW5kIiwiekluZGV4Iiwib3RoZXJ6SW5kZXgiLCJjb21wYXJlVG9Db21wb25lbnQiLCJwYXJlbnRXaWR0aCIsInBhcmVudFBhZGRpbmciLCJBbGlnbmVtZW50IiwiQ0VOVEVSIiwiUklHSFQiLCJMRUZUIiwicGFyZW50SGVpZ2h0IiwiVmVydGljYWxBbGlnbmVtZW50IiwiQk9UVE9NIiwiVE9QIiwiREVGQVVMVF9QQURESU5HIiwiREVGQVVMVF9TUEFDSU5HIiwiZGVmYXVsdFN0eWxlIiwic2V0QWxsIiwiZ2V0U3R5bGVzIiwic2V0Iiwib3RoZXIiLCJjb21wYXJlVG8iLCJESVNBQkxFX0lTX0NPTVBPTkVOVF9WSVNJQkxFX09QVElNSVpBVElPTlMiLCJGT05UX0ZBTUlMWSIsIklOUFVUX0RFRkFVTFRfRk9OVF9DT0xPUiIsIklOUFVUX0RFRkFVTFRfQkFDS0dST1VORF9DT0xPUiIsIklOUFVUX0RFRkFVTFRfQk9SREVSX0NPTE9SIiwiSU5QVVRfREVGQVVMVF9CT1JERVJfQ09MT1JfU0VMRUNURUQiLCJJTlBVVF9ERUZBVUxUX1NFTEVDVF9DT0xPUiIsIkxBQkVMX0RFRkFVTFRfRk9OVF9DT0xPUiIsIkxJTktfREVGQVVMVF9DT0xPUiIsIkxJTktfREVGQVVMVF9IT1ZFUl9DT0xPUiIsIkxJTktfREVGQVVMVF9DTElDS19DT0xPUiIsIk1FTlVfREVGQVVMVF9CQUNLR1JPVU5EIiwiTUVOVV9ERUZBVUxUX0JMVVJfQkFDS0dST1VORCIsIk5PVElGSUNBVElPTl9ERUZBVUxUX0JBQ0tHUk9VTkQiLCJOT1RJRklDQVRJT05fREVGQVVMVF9BTklNQVRJT05fRFVSQVRJT04iLCJQUk9HUkVTU19ERUZBVUxUX0JBQ0tHUk9VTkQiLCJQUk9HUkVTU19ERUZBVUxUX0ZPUkVHUk9VTkQiLCJQUk9HUkVTU19ERUZBVUxUX0FOSU1BVElPTl9EVVJBVElPTiIsIlRPT0xUSVBfREVGQVVMVF9CQUNLR1JPVU5EIiwiQ1JPU1NfREVGQVVMVF9MSU5FX0NBUCIsIkNST1NTX0RFRkFVTFRfQ09MT1IiLCJDUk9TU19ERUZBVUxUX0xJTkVfU0laRSIsIlNDUk9MTEJBUl9ERUZBVUxUX0JBQ0tHUk9VTkQiLCJTQ1JPTExCQVJfREVGQVVMVF9IT1ZFUl9CQUNLR1JPVU5EIiwiU0NST0xMQkFSX0RFRkFVTFRfQ0xJQ0tfQkFDS0dST1VORCIsIlNDUk9MTEJBUl9ERUZBVUxUX1NJWkUiLCJERUZBVUxUX0JPUkRFUl9TSVpFIiwiREVGQVVMVF9CT1JERVJfQ09MT1JfU0VMRUNURUQiLCJERUZBVUxUX0FOSU1BVElPTl9EVVJBVElPTiIsIlRSSUFOR0xFX0RFRkFVTFRfTElORV9DQVAiLCJUUklBTkdMRV9ERUZBVUxUX0NPTE9SIiwiVFJJQU5HTEVfREVGQVVMVF9GSUxMX0NPTE9SIiwiVFJJQU5HTEVfREVGQVVMVF9MSU5FX1NJWkUiLCJUUklBTkdMRV9ERUZBVUxUX0ZJTEwiLCJTRUxFQ1RfREVGQVVMVF9CQUNLR1JPVU5EIiwiU0VMRUNUX0RFRkFVTFRfSE9WRVJfQkFDS0dST1VORCIsIlNFTEVDVF9ERUZBVUxUX0NMSUNLX0JBQ0tHUk9VTkQiLCJLZXkiLCJVUCIsIkVOVEVSIiwiRUNIQVAiLCJUQUIiLCJERUZBVUxUIiwiV0FSTklOR19NRVNTQUdFIiwiSU5QVVRfRlVMTFNDUkVFTiIsImFkZEFsbCIsInNjcm9sbGJhckhvcml6b250YWwiLCJTY3JvbGxiYXJIb3Jpem9udGFsIiwic2Nyb2xsYmFyVmVydGljYWwiLCJTY3JvbGxiYXJWZXJ0aWNhbCIsImNvbnRyb2xTY3JvbGxpbmciLCJjb21wb25lbnRDaGFuZ2VkIiwic2Nyb2xsWERpc2FibGVkIiwiZHJhd0hvcml6b250YWxTY3JvbGxCYXIiLCJzY3JvbGxZRGlzYWJsZWQiLCJkcmF3VmVydGljYWxTY3JvbGxCYXIiLCJoYXNDaGFuZ2VkIiwiaSIsImV2ZW50Q2hhbmdlQ2FsbGJhY2siLCJpbmRleE9mIiwicmVtb3ZlQ2hhbmdlQWN0aW9uIiwiZmlsdGVyIiwiY3VycmVudCIsInJlbW92ZSIsImNoYW5nZWQiLCJjIiwic2Nyb2xsQXJlYVNpemVZIiwicGVyY2VudFNjcm9sbGJhclkiLCJzY3JvbGxBcmVhU2l6ZVgiLCJwZXJjZW50U2Nyb2xsYmFyWCIsImNvbXBvbmVudFdpZHRoIiwiY29tcG9uZW50SGVpZ2h0IiwiY2FudmFzV2lkdGgiLCJjYW52YXNIZWlnaHQiLCJDcm9zcyIsImRyYXdDcm9zcyIsImVhc2VJbkN1YmljIiwiZWFzZU91dEJvdW5jZSIsIm4xIiwiZDEiLCJlYXNlSW5PdXRDdWJpYyIsInBvdyIsImVhc2VJbk91dFNpbmUiLCJjb3MiLCJQSSIsImVhc2VJbk91dFF1aW50IiwiZWFzZUluT3V0Q2lyYyIsInNxcnQiLCJlYXNlSW5PdXRRdWFkIiwiZWFzZUluT3V0UXVhcnQiLCJlYXNlSW5PdXRFeHBvIiwiZWFzZUluT3V0QmFjayIsImMxIiwiYzIiLCJFdmVudCIsIm5hbWUiLCJjYWxsYmFja3MiLCJGUFNNZXRlciIsImRpc3BsYXlGcmFtZXMiLCJmcmFtZXMiLCJsYXN0RnJhbWUiLCJjdXJyZW50RlBTIiwiaW50ZXJ2YWxDb3VudEZQUyIsInNldEludGVydmFsIiwiY291bnRGUFMiLCJJbWFnZSIsInNyYyIsImRyYXdJbWFnZSIsImdldCIsImltZ1dpZHRoIiwiaW1nSGVpZ2h0IiwiYXNwZWN0UmF0aW8iLCJmbG9vciIsInNpemVzIiwiSW1hZ2VMb2FkZXIiLCJpbWFnZXMiLCJpbWFnZXNSZXNpemVkIiwidHJpZWRMb2FkaW5nIiwibmJJbWFnZXNUb0xvYWQiLCJmaXJzdEltYWdlIiwiaW1nIiwic2hpZnQiLCJsb2FkIiwib25sb2FkIiwib25lcnJvciIsInNldFRpbWVvdXQiLCJoYXNPd25Qcm9wZXJ0eSIsInciLCJoIiwiaWQiLCJJbnB1dCIsImRlZmF1bHRUZXh0IiwibGFzdElucHV0VGV4dCIsIm9mZnNldFgiLCJsYXN0VGltZSIsInRvdGFsVGltZSIsImNsaWNrQ3VycmVudFBvc2l0aW9uIiwidGV4dENhY2hlIiwiaW5wdXQiLCJzZXRBdHRyaWJ1dGUiLCJsZWZ0IiwidGFiSW5kZXgiLCJ2YWx1ZSIsInBvc2l0aW9uU3RhcnQiLCJzZWxlY3Rpb25TdGFydCIsInBvc2l0aW9uRW5kIiwic2VsZWN0aW9uRW5kIiwiYm9keSIsImFwcGVuZFRvQ2FudmFzIiwibm90aWNlTG9nZ2VkIiwibW92ZUFjdGlvbkNhbGxiYWNrIiwiaUNsaWNrIiwiZ2V0TGV0dGVyQ2xpY2tlZCIsInBvc2l0aW9uU3RhcnRDbGljayIsInNldFNlbGVjdGlvblJhbmdlIiwiY2xpY2siLCJibHVyIiwicGVyZm9ybWFuY2UiLCJub3ciLCJvZmZzZXRUaW1lIiwiY3R4VGV4dCIsInVwZGF0ZVRleHRDYWNoZSIsImF1dG9TY3JvbGwiLCJkcmF3VGV4dCIsImN1cnNvciIsImN1cnJlbnRYIiwibGV0dGVycyIsInhEcmF3IiwieURyYXciLCJpc0xldHRlclZpc2libGUiLCJkcmF3SGlnaGxpZ2h0IiwiZm9udENvbG9yIiwiZm9udFNpemUiLCJmb250RmFtaWx5IiwiZHJhd0N1cnNvciIsImJlZ2luUGF0aCIsIm1vdmVUbyIsImxpbmVUbyIsInN0cm9rZSIsInNlbGVjdENvbG9yIiwid3JhcFRleHRMaW5lcyIsImxldHRlciIsImlzQ2xpY2tDdXJyZW50UG9zaXRpb24iLCJpc0NsaWNrQWZ0ZXJQb3NpdGlvbiIsImxldHRlcklkIiwiY3Vyc29yUG9zaXRpb24iLCJjdXJyZW50TGV0dGVyU2l6ZSIsImN1cnJlbnRMZXR0ZXIiLCJjdXJzb3JQb3NpdGlvblBvcyIsImN1cnNvclBvc2l0aW9uTmVnIiwib2Zmc2V0WE5lZyIsImZvY3VzIiwiZW5kIiwiZGlyZWN0aW9uIiwic2l6ZXNDYWNoZSIsInVwZGF0ZVNpemVzIiwid3JhcCIsImJvbGQiLCJ1bmRlcmxpbmUiLCJMaW5rIiwiaW5pdGlhbENvbG9yIiwiaW5pdGlhbFVuZGVybGluZSIsImZvbnRDb2xvckRvd24iLCJmb250Q29sb3JIb3ZlciIsImxhc3RLZXkiLCJ1bmRlZmluZWQiLCJzZWxlY3RlZENvbXBvbmVudCIsImJsdXJCYWNrZ3JvdW5kIiwiZHJhd0JsdXIiLCJrZXlDb2RlIiwia2V5QWN0aW9uIiwic2VsZWN0IiwiYmx1ckNhbnZhcyIsImluZGV4Iiwic2VsZWN0YWJsZUNvbXBvbmVudHMiLCJjb21wYXJlVG9NZW51IiwiTm90aWZpY2F0aW9uTWVzc2FnZSIsImRlbGF5QmVmb3JlQ2xvc2luZyIsImVhc2luZ0Z1bmN0aW9uIiwidGltZUxhc3RGcmFtZSIsImFuaW1hdGlvblRpbWUiLCJjbG9zZWQiLCJjbG9zaW5nIiwiY2xvc2VCdXR0b24iLCJzZXRDbGlja0FjdGlvbiIsImNsb3NlIiwiZGlzYWJsZUFuaW1hdGlvbiIsImVuYWJsZUNsb3NlQnV0dG9uIiwiZGlzYWJsZUNsb3NlQnV0dG9uIiwiYW5pbWF0aW9uRHVyYXRpb24iLCJjb3B5IiwiY29tcGFyZVRvTm90aWZpY2F0aW9uIiwib2Zmc2V0WSIsImZvcmNlQ2xvc2UiLCJvcGVuIiwiUHJvZ3Jlc3NCYXIiLCJkZWZhdWx0UGVyY2VudCIsInBlcmNlbnQiLCJkcmF3Rm9yZWdyb3VuZCIsIndpZHRoRm9yZWdyb3VuZCIsImZvcmVncm91bmRDb2xvciIsImFuaW1hdGlvblBlcmNlbnQiLCJldmVudHMiLCJldmVudEFyZ3MiLCJyZWdpc3RlckNhbGxiYWNrIiwicmVtb3ZlQ2FsbGJhY2siLCJyZW1vdmVBbGxDYWxsYmFja3MiLCJ0b3RhbFdpZHRoIiwiY29tcGFyZUNvbXBvbmVudHMiLCJTY3JvbGxiYXIiLCJzaXplIiwiY29tcGFyZVRvU2Nyb2xsYmFyIiwibWF4V2lkdGhQYXJlbnQiLCJpbm5lcldpZHRoUGFyZW50IiwibWF4SGVpZ2h0UGFyZW50IiwiaW5uZXJIZWlnaHRQYXJlbnQiLCJjb250ZW50UmF0aW9YIiwiY29udGVudFJhdGlvWSIsIndpbmRvd1Njcm9sbFNpemVYIiwid2luZG93U2Nyb2xsU2l6ZVkiLCJTZWxlY3QiLCJvcHRpb25Db250YWluZXIiLCJkZWZhdWx0T3B0aW9uIiwic2VsZWN0ZWRPcHRpb24iLCJsYWJlbCIsInRyaWFuZ2xlIiwiVHJpYW5nbGUiLCJ1cGRhdGVXaWR0aCIsIlNlbGVjdE9wdGlvbiIsImRlZmF1bHRMYWJlbCIsIlNlbGVjdERyb3Bkb3duIiwibWF4SGVpZ2h0RHJvcGRvd24iLCJvcHRpb25zIiwiZ2V0Q29tcG9uZW50SWQiLCJzZWxlY3RIZWlnaHQiLCJzdHlsZXMiLCJUb29sdGlwIiwiY29tcGFyZVRvVG9vbHRpcCIsImRyYXdUcmlhbmdsZSIsInByZVJlbmRlcmVkRm9udCIsInByZVJlbmRlckZvbnQiLCJjYXJzIiwiY3R4VG1wIiwiZm9udCIsIm1lYXN1cmVUZXh0IiwidGV4dEJhc2VsaW5lIiwiZmlsbFRleHQiLCJzeCIsInN5Iiwic1dpZHRoIiwic0hlaWdodCIsImVyYXNlQmVsb3ciLCJkZWdyZWVzIiwiZHJhd0ltYWdlV3JhcHBlciIsImltYWdlRGF0YSIsImlzTmFOIiwidHJhbnNsYXRlIiwicm90YXRlIiwiY2xlYXJSZWN0IiwiQXJyYXkiLCJpc0FycmF5IiwibGluZXMiLCJzcGxpdCIsInhDdXJyZW50IiwieUN1cnJlbnQiLCJ5Rmlyc3QiLCJjdXJyZW50VGV4dCIsImN1cnJlbnRXaWR0aCIsImNvbG9ySW5kZXgiLCJ3cmFwVGV4dCIsImxpbWl0IiwicCIsInN1YnN0cmluZyIsInJpZ2h0IiwiZGlzYWJsZVdyYXAiLCJpbWFnZVNtb290aGluZ0VuYWJsZWQiLCJuZXdUZXh0Iiwid2lkdGhDYXIiLCJuYkNhckxpbmUiLCJoZWlnaHRUb3RhbCIsImxpbmVXcmFwIiwiaiIsIndpZHRoVGV4dCIsImNhcldpZHRoIiwiZnJvbXgiLCJmcm9teSIsInRveCIsInRveSIsImhlYWRsZW4iLCJkeCIsImR5IiwiYW5nbGUiLCJhdGFuMiIsInNpbiIsInJhZGl1cyIsImFyYyIsImlzRmlsdGVySHVlQXZhaWxhYmxlIiwiZ2V0SW1hZ2VEYXRhIiwiZGF0YSIsInBhcnNlTnVtYmVyIiwic3RyIiwicGFyc2VJbnQiLCJtYXRjaCIsImdldEZvbnRTaXplIiwicmVjdCIsImdldEJvdW5kaW5nQ2xpZW50UmVjdCIsImF1dG9SZXNpemVDYW52YXMiLCJpbml0aWFsV2lkdGgiLCJpbml0aWFsSGVpZ2h0IiwiZG9jdW1lbnRFbGVtZW50IiwiY2xpZW50V2lkdGgiLCJyYXRpbyIsImdldEF0dHJpYnV0ZSIsImF1dG9SZXNpemVDYW52YXNGdWxsc2NyZWVuIiwiZW5hYmxlQXV0b1Jlc2l6ZUNhbnZhc0Z1bGxzY3JlZW4iLCJhdXRvUmVzaXplQ2FudmFzRnVsbHBhZ2UiLCJtYXJnaW4iLCJlbmFibGVBdXRvUmVzaXplQ2FudmFzRnVsbHBhZ2UiLCJyZXF1ZXN0RnVsbHNjcmVlbiIsIm1velJlcXVlc3RGdWxsU2NyZWVuIiwid2Via2l0UmVxdWVzdEZ1bGxzY3JlZW4iLCJtc1JlcXVlc3RGdWxsc2NyZWVuIiwib1JlcXVlc3RGdWxsc2NyZWVuIiwiZXhpdEZ1bGxzY3JlZW4iLCJvbmZ1bGxzY3JlZW5jaGFuZ2UiLCJvbm1zZnVsbHNjcmVlbmNoYW5nZSIsIm9ubW96ZnVsbHNjcmVlbmNoYW5nZSIsIm9ud2Via2l0ZnVsbHNjcmVlbmNoYW5nZSIsIm9ub2tpdGZ1bGxzY3JlZW5jaGFuZ2UiLCJvbm9mdWxsc2NyZWVuY2hhbmdlIiwiY2xpZW50WCIsImNsaWVudFkiLCJ0b3AiXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRCxPO1FDVkE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSx5Q0FBeUMsaUNBQWlDO1FBQzFFLGdIQUFnSCxtQkFBbUIsRUFBRTtRQUNySTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDJCQUEyQiwwQkFBMEIsRUFBRTtRQUN2RCxpQ0FBaUMsZUFBZTtRQUNoRDtRQUNB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Q0FBQzRCO0FBRm5CLEtBQVA7QUFJRDtBQWppQlksQ0FBZixFOzs7Ozs7Ozs7Ozs7QUNwQkE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoiSlNHYW1lVG9vbHMuZGV2LmpzIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIHdlYnBhY2tVbml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uKHJvb3QsIGZhY3RvcnkpIHtcblx0aWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnICYmIHR5cGVvZiBtb2R1bGUgPT09ICdvYmplY3QnKVxuXHRcdG1vZHVsZS5leHBvcnRzID0gZmFjdG9yeSgpO1xuXHRlbHNlIGlmKHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZClcblx0XHRkZWZpbmUoW10sIGZhY3RvcnkpO1xuXHRlbHNlIGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0Jylcblx0XHRleHBvcnRzW1wiSlNHYW1lVG9vbHNcIl0gPSBmYWN0b3J5KCk7XG5cdGVsc2Vcblx0XHRyb290W1wiSlNHYW1lVG9vbHNcIl0gPSBmYWN0b3J5KCk7XG59KSh0eXBlb2Ygc2VsZiAhPT0gXCJ1bmRlZmluZWRcIiA/IHNlbGYgOiB0aGlzLCBmdW5jdGlvbigpIHtcbnJldHVybiAiLCIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3NyYy9pbmRleC5qc1wiKTtcbiIsImZ1bmN0aW9uIF9hcnJheUxpa2VUb0FycmF5KGFyciwgbGVuKSB7XG4gIGlmIChsZW4gPT0gbnVsbCB8fCBsZW4gPiBhcnIubGVuZ3RoKSBsZW4gPSBhcnIubGVuZ3RoO1xuXG4gIGZvciAodmFyIGkgPSAwLCBhcnIyID0gbmV3IEFycmF5KGxlbik7IGkgPCBsZW47IGkrKykge1xuICAgIGFycjJbaV0gPSBhcnJbaV07XG4gIH1cblxuICByZXR1cm4gYXJyMjtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfYXJyYXlMaWtlVG9BcnJheTsiLCJ2YXIgYXJyYXlMaWtlVG9BcnJheSA9IHJlcXVpcmUoXCIuL2FycmF5TGlrZVRvQXJyYXlcIik7XG5cbmZ1bmN0aW9uIF9hcnJheVdpdGhvdXRIb2xlcyhhcnIpIHtcbiAgaWYgKEFycmF5LmlzQXJyYXkoYXJyKSkgcmV0dXJuIGFycmF5TGlrZVRvQXJyYXkoYXJyKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfYXJyYXlXaXRob3V0SG9sZXM7IiwiZnVuY3Rpb24gX2Fzc2VydFRoaXNJbml0aWFsaXplZChzZWxmKSB7XG4gIGlmIChzZWxmID09PSB2b2lkIDApIHtcbiAgICB0aHJvdyBuZXcgUmVmZXJlbmNlRXJyb3IoXCJ0aGlzIGhhc24ndCBiZWVuIGluaXRpYWxpc2VkIC0gc3VwZXIoKSBoYXNuJ3QgYmVlbiBjYWxsZWRcIik7XG4gIH1cblxuICByZXR1cm4gc2VsZjtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfYXNzZXJ0VGhpc0luaXRpYWxpemVkOyIsImZ1bmN0aW9uIF9jbGFzc0NhbGxDaGVjayhpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHtcbiAgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHtcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXCIpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX2NsYXNzQ2FsbENoZWNrOyIsImZ1bmN0aW9uIF9jbGFzc1ByaXZhdGVGaWVsZEdldChyZWNlaXZlciwgcHJpdmF0ZU1hcCkge1xuICB2YXIgZGVzY3JpcHRvciA9IHByaXZhdGVNYXAuZ2V0KHJlY2VpdmVyKTtcblxuICBpZiAoIWRlc2NyaXB0b3IpIHtcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiYXR0ZW1wdGVkIHRvIGdldCBwcml2YXRlIGZpZWxkIG9uIG5vbi1pbnN0YW5jZVwiKTtcbiAgfVxuXG4gIGlmIChkZXNjcmlwdG9yLmdldCkge1xuICAgIHJldHVybiBkZXNjcmlwdG9yLmdldC5jYWxsKHJlY2VpdmVyKTtcbiAgfVxuXG4gIHJldHVybiBkZXNjcmlwdG9yLnZhbHVlO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9jbGFzc1ByaXZhdGVGaWVsZEdldDsiLCJmdW5jdGlvbiBfY2xhc3NQcml2YXRlRmllbGRTZXQocmVjZWl2ZXIsIHByaXZhdGVNYXAsIHZhbHVlKSB7XG4gIHZhciBkZXNjcmlwdG9yID0gcHJpdmF0ZU1hcC5nZXQocmVjZWl2ZXIpO1xuXG4gIGlmICghZGVzY3JpcHRvcikge1xuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJhdHRlbXB0ZWQgdG8gc2V0IHByaXZhdGUgZmllbGQgb24gbm9uLWluc3RhbmNlXCIpO1xuICB9XG5cbiAgaWYgKGRlc2NyaXB0b3Iuc2V0KSB7XG4gICAgZGVzY3JpcHRvci5zZXQuY2FsbChyZWNlaXZlciwgdmFsdWUpO1xuICB9IGVsc2Uge1xuICAgIGlmICghZGVzY3JpcHRvci53cml0YWJsZSkge1xuICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcImF0dGVtcHRlZCB0byBzZXQgcmVhZCBvbmx5IHByaXZhdGUgZmllbGRcIik7XG4gICAgfVxuXG4gICAgZGVzY3JpcHRvci52YWx1ZSA9IHZhbHVlO1xuICB9XG5cbiAgcmV0dXJuIHZhbHVlO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9jbGFzc1ByaXZhdGVGaWVsZFNldDsiLCJ2YXIgc2V0UHJvdG90eXBlT2YgPSByZXF1aXJlKFwiLi9zZXRQcm90b3R5cGVPZlwiKTtcblxudmFyIGlzTmF0aXZlUmVmbGVjdENvbnN0cnVjdCA9IHJlcXVpcmUoXCIuL2lzTmF0aXZlUmVmbGVjdENvbnN0cnVjdFwiKTtcblxuZnVuY3Rpb24gX2NvbnN0cnVjdChQYXJlbnQsIGFyZ3MsIENsYXNzKSB7XG4gIGlmIChpc05hdGl2ZVJlZmxlY3RDb25zdHJ1Y3QoKSkge1xuICAgIG1vZHVsZS5leHBvcnRzID0gX2NvbnN0cnVjdCA9IFJlZmxlY3QuY29uc3RydWN0O1xuICB9IGVsc2Uge1xuICAgIG1vZHVsZS5leHBvcnRzID0gX2NvbnN0cnVjdCA9IGZ1bmN0aW9uIF9jb25zdHJ1Y3QoUGFyZW50LCBhcmdzLCBDbGFzcykge1xuICAgICAgdmFyIGEgPSBbbnVsbF07XG4gICAgICBhLnB1c2guYXBwbHkoYSwgYXJncyk7XG4gICAgICB2YXIgQ29uc3RydWN0b3IgPSBGdW5jdGlvbi5iaW5kLmFwcGx5KFBhcmVudCwgYSk7XG4gICAgICB2YXIgaW5zdGFuY2UgPSBuZXcgQ29uc3RydWN0b3IoKTtcbiAgICAgIGlmIChDbGFzcykgc2V0UHJvdG90eXBlT2YoaW5zdGFuY2UsIENsYXNzLnByb3RvdHlwZSk7XG4gICAgICByZXR1cm4gaW5zdGFuY2U7XG4gICAgfTtcbiAgfVxuXG4gIHJldHVybiBfY29uc3RydWN0LmFwcGx5KG51bGwsIGFyZ3VtZW50cyk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX2NvbnN0cnVjdDsiLCJmdW5jdGlvbiBfZGVmaW5lUHJvcGVydGllcyh0YXJnZXQsIHByb3BzKSB7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgcHJvcHMubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgZGVzY3JpcHRvciA9IHByb3BzW2ldO1xuICAgIGRlc2NyaXB0b3IuZW51bWVyYWJsZSA9IGRlc2NyaXB0b3IuZW51bWVyYWJsZSB8fCBmYWxzZTtcbiAgICBkZXNjcmlwdG9yLmNvbmZpZ3VyYWJsZSA9IHRydWU7XG4gICAgaWYgKFwidmFsdWVcIiBpbiBkZXNjcmlwdG9yKSBkZXNjcmlwdG9yLndyaXRhYmxlID0gdHJ1ZTtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBkZXNjcmlwdG9yLmtleSwgZGVzY3JpcHRvcik7XG4gIH1cbn1cblxuZnVuY3Rpb24gX2NyZWF0ZUNsYXNzKENvbnN0cnVjdG9yLCBwcm90b1Byb3BzLCBzdGF0aWNQcm9wcykge1xuICBpZiAocHJvdG9Qcm9wcykgX2RlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IucHJvdG90eXBlLCBwcm90b1Byb3BzKTtcbiAgaWYgKHN0YXRpY1Byb3BzKSBfZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvciwgc3RhdGljUHJvcHMpO1xuICByZXR1cm4gQ29uc3RydWN0b3I7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX2NyZWF0ZUNsYXNzOyIsImZ1bmN0aW9uIF9kZWZpbmVQcm9wZXJ0eShvYmosIGtleSwgdmFsdWUpIHtcbiAgaWYgKGtleSBpbiBvYmopIHtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkob2JqLCBrZXksIHtcbiAgICAgIHZhbHVlOiB2YWx1ZSxcbiAgICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgICBjb25maWd1cmFibGU6IHRydWUsXG4gICAgICB3cml0YWJsZTogdHJ1ZVxuICAgIH0pO1xuICB9IGVsc2Uge1xuICAgIG9ialtrZXldID0gdmFsdWU7XG4gIH1cblxuICByZXR1cm4gb2JqO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9kZWZpbmVQcm9wZXJ0eTsiLCJ2YXIgc3VwZXJQcm9wQmFzZSA9IHJlcXVpcmUoXCIuL3N1cGVyUHJvcEJhc2VcIik7XG5cbmZ1bmN0aW9uIF9nZXQodGFyZ2V0LCBwcm9wZXJ0eSwgcmVjZWl2ZXIpIHtcbiAgaWYgKHR5cGVvZiBSZWZsZWN0ICE9PSBcInVuZGVmaW5lZFwiICYmIFJlZmxlY3QuZ2V0KSB7XG4gICAgbW9kdWxlLmV4cG9ydHMgPSBfZ2V0ID0gUmVmbGVjdC5nZXQ7XG4gIH0gZWxzZSB7XG4gICAgbW9kdWxlLmV4cG9ydHMgPSBfZ2V0ID0gZnVuY3Rpb24gX2dldCh0YXJnZXQsIHByb3BlcnR5LCByZWNlaXZlcikge1xuICAgICAgdmFyIGJhc2UgPSBzdXBlclByb3BCYXNlKHRhcmdldCwgcHJvcGVydHkpO1xuICAgICAgaWYgKCFiYXNlKSByZXR1cm47XG4gICAgICB2YXIgZGVzYyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IoYmFzZSwgcHJvcGVydHkpO1xuXG4gICAgICBpZiAoZGVzYy5nZXQpIHtcbiAgICAgICAgcmV0dXJuIGRlc2MuZ2V0LmNhbGwocmVjZWl2ZXIpO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gZGVzYy52YWx1ZTtcbiAgICB9O1xuICB9XG5cbiAgcmV0dXJuIF9nZXQodGFyZ2V0LCBwcm9wZXJ0eSwgcmVjZWl2ZXIgfHwgdGFyZ2V0KTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfZ2V0OyIsImZ1bmN0aW9uIF9nZXRQcm90b3R5cGVPZihvKSB7XG4gIG1vZHVsZS5leHBvcnRzID0gX2dldFByb3RvdHlwZU9mID0gT2JqZWN0LnNldFByb3RvdHlwZU9mID8gT2JqZWN0LmdldFByb3RvdHlwZU9mIDogZnVuY3Rpb24gX2dldFByb3RvdHlwZU9mKG8pIHtcbiAgICByZXR1cm4gby5fX3Byb3RvX18gfHwgT2JqZWN0LmdldFByb3RvdHlwZU9mKG8pO1xuICB9O1xuICByZXR1cm4gX2dldFByb3RvdHlwZU9mKG8pO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9nZXRQcm90b3R5cGVPZjsiLCJ2YXIgc2V0UHJvdG90eXBlT2YgPSByZXF1aXJlKFwiLi9zZXRQcm90b3R5cGVPZlwiKTtcblxuZnVuY3Rpb24gX2luaGVyaXRzKHN1YkNsYXNzLCBzdXBlckNsYXNzKSB7XG4gIGlmICh0eXBlb2Ygc3VwZXJDbGFzcyAhPT0gXCJmdW5jdGlvblwiICYmIHN1cGVyQ2xhc3MgIT09IG51bGwpIHtcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiU3VwZXIgZXhwcmVzc2lvbiBtdXN0IGVpdGhlciBiZSBudWxsIG9yIGEgZnVuY3Rpb25cIik7XG4gIH1cblxuICBzdWJDbGFzcy5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKHN1cGVyQ2xhc3MgJiYgc3VwZXJDbGFzcy5wcm90b3R5cGUsIHtcbiAgICBjb25zdHJ1Y3Rvcjoge1xuICAgICAgdmFsdWU6IHN1YkNsYXNzLFxuICAgICAgd3JpdGFibGU6IHRydWUsXG4gICAgICBjb25maWd1cmFibGU6IHRydWVcbiAgICB9XG4gIH0pO1xuICBpZiAoc3VwZXJDbGFzcykgc2V0UHJvdG90eXBlT2Yoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9pbmhlcml0czsiLCJmdW5jdGlvbiBfaXNOYXRpdmVSZWZsZWN0Q29uc3RydWN0KCkge1xuICBpZiAodHlwZW9mIFJlZmxlY3QgPT09IFwidW5kZWZpbmVkXCIgfHwgIVJlZmxlY3QuY29uc3RydWN0KSByZXR1cm4gZmFsc2U7XG4gIGlmIChSZWZsZWN0LmNvbnN0cnVjdC5zaGFtKSByZXR1cm4gZmFsc2U7XG4gIGlmICh0eXBlb2YgUHJveHkgPT09IFwiZnVuY3Rpb25cIikgcmV0dXJuIHRydWU7XG5cbiAgdHJ5IHtcbiAgICBEYXRlLnByb3RvdHlwZS50b1N0cmluZy5jYWxsKFJlZmxlY3QuY29uc3RydWN0KERhdGUsIFtdLCBmdW5jdGlvbiAoKSB7fSkpO1xuICAgIHJldHVybiB0cnVlO1xuICB9IGNhdGNoIChlKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX2lzTmF0aXZlUmVmbGVjdENvbnN0cnVjdDsiLCJmdW5jdGlvbiBfaXRlcmFibGVUb0FycmF5KGl0ZXIpIHtcbiAgaWYgKHR5cGVvZiBTeW1ib2wgIT09IFwidW5kZWZpbmVkXCIgJiYgU3ltYm9sLml0ZXJhdG9yIGluIE9iamVjdChpdGVyKSkgcmV0dXJuIEFycmF5LmZyb20oaXRlcik7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX2l0ZXJhYmxlVG9BcnJheTsiLCJmdW5jdGlvbiBfbm9uSXRlcmFibGVTcHJlYWQoKSB7XG4gIHRocm93IG5ldyBUeXBlRXJyb3IoXCJJbnZhbGlkIGF0dGVtcHQgdG8gc3ByZWFkIG5vbi1pdGVyYWJsZSBpbnN0YW5jZS5cXG5JbiBvcmRlciB0byBiZSBpdGVyYWJsZSwgbm9uLWFycmF5IG9iamVjdHMgbXVzdCBoYXZlIGEgW1N5bWJvbC5pdGVyYXRvcl0oKSBtZXRob2QuXCIpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9ub25JdGVyYWJsZVNwcmVhZDsiLCJ2YXIgX3R5cGVvZiA9IHJlcXVpcmUoXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL3R5cGVvZlwiKTtcblxudmFyIGFzc2VydFRoaXNJbml0aWFsaXplZCA9IHJlcXVpcmUoXCIuL2Fzc2VydFRoaXNJbml0aWFsaXplZFwiKTtcblxuZnVuY3Rpb24gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4oc2VsZiwgY2FsbCkge1xuICBpZiAoY2FsbCAmJiAoX3R5cGVvZihjYWxsKSA9PT0gXCJvYmplY3RcIiB8fCB0eXBlb2YgY2FsbCA9PT0gXCJmdW5jdGlvblwiKSkge1xuICAgIHJldHVybiBjYWxsO1xuICB9XG5cbiAgcmV0dXJuIGFzc2VydFRoaXNJbml0aWFsaXplZChzZWxmKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybjsiLCJ2YXIgc3VwZXJQcm9wQmFzZSA9IHJlcXVpcmUoXCIuL3N1cGVyUHJvcEJhc2VcIik7XG5cbnZhciBkZWZpbmVQcm9wZXJ0eSA9IHJlcXVpcmUoXCIuL2RlZmluZVByb3BlcnR5XCIpO1xuXG5mdW5jdGlvbiBzZXQodGFyZ2V0LCBwcm9wZXJ0eSwgdmFsdWUsIHJlY2VpdmVyKSB7XG4gIGlmICh0eXBlb2YgUmVmbGVjdCAhPT0gXCJ1bmRlZmluZWRcIiAmJiBSZWZsZWN0LnNldCkge1xuICAgIHNldCA9IFJlZmxlY3Quc2V0O1xuICB9IGVsc2Uge1xuICAgIHNldCA9IGZ1bmN0aW9uIHNldCh0YXJnZXQsIHByb3BlcnR5LCB2YWx1ZSwgcmVjZWl2ZXIpIHtcbiAgICAgIHZhciBiYXNlID0gc3VwZXJQcm9wQmFzZSh0YXJnZXQsIHByb3BlcnR5KTtcbiAgICAgIHZhciBkZXNjO1xuXG4gICAgICBpZiAoYmFzZSkge1xuICAgICAgICBkZXNjID0gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihiYXNlLCBwcm9wZXJ0eSk7XG5cbiAgICAgICAgaWYgKGRlc2Muc2V0KSB7XG4gICAgICAgICAgZGVzYy5zZXQuY2FsbChyZWNlaXZlciwgdmFsdWUpO1xuICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9IGVsc2UgaWYgKCFkZXNjLndyaXRhYmxlKSB7XG4gICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGRlc2MgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKHJlY2VpdmVyLCBwcm9wZXJ0eSk7XG5cbiAgICAgIGlmIChkZXNjKSB7XG4gICAgICAgIGlmICghZGVzYy53cml0YWJsZSkge1xuICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuXG4gICAgICAgIGRlc2MudmFsdWUgPSB2YWx1ZTtcbiAgICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KHJlY2VpdmVyLCBwcm9wZXJ0eSwgZGVzYyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBkZWZpbmVQcm9wZXJ0eShyZWNlaXZlciwgcHJvcGVydHksIHZhbHVlKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfTtcbiAgfVxuXG4gIHJldHVybiBzZXQodGFyZ2V0LCBwcm9wZXJ0eSwgdmFsdWUsIHJlY2VpdmVyKTtcbn1cblxuZnVuY3Rpb24gX3NldCh0YXJnZXQsIHByb3BlcnR5LCB2YWx1ZSwgcmVjZWl2ZXIsIGlzU3RyaWN0KSB7XG4gIHZhciBzID0gc2V0KHRhcmdldCwgcHJvcGVydHksIHZhbHVlLCByZWNlaXZlciB8fCB0YXJnZXQpO1xuXG4gIGlmICghcyAmJiBpc1N0cmljdCkge1xuICAgIHRocm93IG5ldyBFcnJvcignZmFpbGVkIHRvIHNldCBwcm9wZXJ0eScpO1xuICB9XG5cbiAgcmV0dXJuIHZhbHVlO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9zZXQ7IiwiZnVuY3Rpb24gX3NldFByb3RvdHlwZU9mKG8sIHApIHtcbiAgbW9kdWxlLmV4cG9ydHMgPSBfc2V0UHJvdG90eXBlT2YgPSBPYmplY3Quc2V0UHJvdG90eXBlT2YgfHwgZnVuY3Rpb24gX3NldFByb3RvdHlwZU9mKG8sIHApIHtcbiAgICBvLl9fcHJvdG9fXyA9IHA7XG4gICAgcmV0dXJuIG87XG4gIH07XG5cbiAgcmV0dXJuIF9zZXRQcm90b3R5cGVPZihvLCBwKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfc2V0UHJvdG90eXBlT2Y7IiwidmFyIGdldFByb3RvdHlwZU9mID0gcmVxdWlyZShcIi4vZ2V0UHJvdG90eXBlT2ZcIik7XG5cbmZ1bmN0aW9uIF9zdXBlclByb3BCYXNlKG9iamVjdCwgcHJvcGVydHkpIHtcbiAgd2hpbGUgKCFPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSkpIHtcbiAgICBvYmplY3QgPSBnZXRQcm90b3R5cGVPZihvYmplY3QpO1xuICAgIGlmIChvYmplY3QgPT09IG51bGwpIGJyZWFrO1xuICB9XG5cbiAgcmV0dXJuIG9iamVjdDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfc3VwZXJQcm9wQmFzZTsiLCJ2YXIgYXJyYXlXaXRob3V0SG9sZXMgPSByZXF1aXJlKFwiLi9hcnJheVdpdGhvdXRIb2xlc1wiKTtcblxudmFyIGl0ZXJhYmxlVG9BcnJheSA9IHJlcXVpcmUoXCIuL2l0ZXJhYmxlVG9BcnJheVwiKTtcblxudmFyIHVuc3VwcG9ydGVkSXRlcmFibGVUb0FycmF5ID0gcmVxdWlyZShcIi4vdW5zdXBwb3J0ZWRJdGVyYWJsZVRvQXJyYXlcIik7XG5cbnZhciBub25JdGVyYWJsZVNwcmVhZCA9IHJlcXVpcmUoXCIuL25vbkl0ZXJhYmxlU3ByZWFkXCIpO1xuXG5mdW5jdGlvbiBfdG9Db25zdW1hYmxlQXJyYXkoYXJyKSB7XG4gIHJldHVybiBhcnJheVdpdGhvdXRIb2xlcyhhcnIpIHx8IGl0ZXJhYmxlVG9BcnJheShhcnIpIHx8IHVuc3VwcG9ydGVkSXRlcmFibGVUb0FycmF5KGFycikgfHwgbm9uSXRlcmFibGVTcHJlYWQoKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfdG9Db25zdW1hYmxlQXJyYXk7IiwiZnVuY3Rpb24gX3R5cGVvZihvYmopIHtcbiAgXCJAYmFiZWwvaGVscGVycyAtIHR5cGVvZlwiO1xuXG4gIGlmICh0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgdHlwZW9mIFN5bWJvbC5pdGVyYXRvciA9PT0gXCJzeW1ib2xcIikge1xuICAgIG1vZHVsZS5leHBvcnRzID0gX3R5cGVvZiA9IGZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7XG4gICAgICByZXR1cm4gdHlwZW9mIG9iajtcbiAgICB9O1xuICB9IGVsc2Uge1xuICAgIG1vZHVsZS5leHBvcnRzID0gX3R5cGVvZiA9IGZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7XG4gICAgICByZXR1cm4gb2JqICYmIHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiBvYmouY29uc3RydWN0b3IgPT09IFN5bWJvbCAmJiBvYmogIT09IFN5bWJvbC5wcm90b3R5cGUgPyBcInN5bWJvbFwiIDogdHlwZW9mIG9iajtcbiAgICB9O1xuICB9XG5cbiAgcmV0dXJuIF90eXBlb2Yob2JqKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfdHlwZW9mOyIsInZhciBhcnJheUxpa2VUb0FycmF5ID0gcmVxdWlyZShcIi4vYXJyYXlMaWtlVG9BcnJheVwiKTtcblxuZnVuY3Rpb24gX3Vuc3VwcG9ydGVkSXRlcmFibGVUb0FycmF5KG8sIG1pbkxlbikge1xuICBpZiAoIW8pIHJldHVybjtcbiAgaWYgKHR5cGVvZiBvID09PSBcInN0cmluZ1wiKSByZXR1cm4gYXJyYXlMaWtlVG9BcnJheShvLCBtaW5MZW4pO1xuICB2YXIgbiA9IE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChvKS5zbGljZSg4LCAtMSk7XG4gIGlmIChuID09PSBcIk9iamVjdFwiICYmIG8uY29uc3RydWN0b3IpIG4gPSBvLmNvbnN0cnVjdG9yLm5hbWU7XG4gIGlmIChuID09PSBcIk1hcFwiIHx8IG4gPT09IFwiU2V0XCIpIHJldHVybiBBcnJheS5mcm9tKG8pO1xuICBpZiAobiA9PT0gXCJBcmd1bWVudHNcIiB8fCAvXig/OlVpfEkpbnQoPzo4fDE2fDMyKSg/OkNsYW1wZWQpP0FycmF5JC8udGVzdChuKSkgcmV0dXJuIGFycmF5TGlrZVRvQXJyYXkobywgbWluTGVuKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfdW5zdXBwb3J0ZWRJdGVyYWJsZVRvQXJyYXk7IiwiLypcbiAqIENvcHlyaWdodCAoQykgMjAyMCBFbGlhc3RpayAoZWxpYXN0aWtzb2Z0cy5jb20pXG4gKlxuICogVGhpcyBmaWxlIGlzIHBhcnQgb2YgXCJKU0dhbWVUb29sc1wiLlxuICpcbiAqIFwiSlNHYW1lVG9vbHNcIiBpcyBmcmVlIHNvZnR3YXJlOiB5b3UgY2FuIHJlZGlzdHJpYnV0ZSBpdCBhbmQvb3IgbW9kaWZ5XG4gKiBpdCB1bmRlciB0aGUgdGVybXMgb2YgdGhlIEdOVSBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlIGFzIHB1Ymxpc2hlZCBieVxuICogdGhlIEZyZWUgU29mdHdhcmUgRm91bmRhdGlvbiwgZWl0aGVyIHZlcnNpb24gMyBvZiB0aGUgTGljZW5zZSwgb3JcbiAqIChhdCB5b3VyIG9wdGlvbikgYW55IGxhdGVyIHZlcnNpb24uXG4gKlxuICogXCJKU0dhbWVUb29sc1wiIGlzIGRpc3RyaWJ1dGVkIGluIHRoZSBob3BlIHRoYXQgaXQgd2lsbCBiZSB1c2VmdWwsXG4gKiBidXQgV0lUSE9VVCBBTlkgV0FSUkFOVFk7IHdpdGhvdXQgZXZlbiB0aGUgaW1wbGllZCB3YXJyYW50eSBvZlxuICogTUVSQ0hBTlRBQklMSVRZIG9yIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFLiAgU2VlIHRoZVxuICogR05VIEdlbmVyYWwgUHVibGljIExpY2Vuc2UgZm9yIG1vcmUgZGV0YWlscy5cbiAqXG4gKiBZb3Ugc2hvdWxkIGhhdmUgcmVjZWl2ZWQgYSBjb3B5IG9mIHRoZSBHTlUgR2VuZXJhbCBQdWJsaWMgTGljZW5zZVxuICogYWxvbmcgd2l0aCBcIkpTR2FtZVRvb2xzXCIuICBJZiBub3QsIHNlZSA8aHR0cDovL3d3dy5nbnUub3JnL2xpY2Vuc2VzLz4uXG4gKi9cbmltcG9ydCBDb21wb25lbnQgZnJvbSBcIi4vQ29tcG9uZW50XCI7XG5pbXBvcnQgQ29uc3RhbnRzIGZyb20gXCIuL0NvbnN0YW50c1wiO1xuaW1wb3J0IFN0eWxlIGZyb20gXCIuL1N0eWxlXCI7XG5pbXBvcnQgVXRpbHMgZnJvbSBcIi4vVXRpbHNcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQXJyb3cgZXh0ZW5kcyBDb21wb25lbnQge1xuICBzZWxlY3RhYmxlID0gZmFsc2U7XG5cbiAgY29uc3RydWN0b3IoeCwgeSwgdG9YLCB0b1ksIHN0eWxlKSB7XG4gICAgc3VwZXIoeCwgeSwgbnVsbCwgbnVsbCwgc3R5bGUpO1xuXG4gICAgdGhpcy50b1ggPSB0b1g7XG4gICAgdGhpcy50b1kgPSB0b1k7XG4gIH1cblxuICBkcmF3KGNvbnRleHQpIHtcbiAgICBpZih0aGlzLmhpZGRlbikgcmV0dXJuO1xuICAgIHN1cGVyLmRyYXcoY29udGV4dCk7XG5cbiAgICBjb25zdCBjYW52YXMgPSBjb250ZXh0LmNhbnZhcztcbiAgICBjb25zdCBjdHggPSBjYW52YXMuZ2V0Q29udGV4dChcIjJkXCIpO1xuICAgIFxuICAgIFV0aWxzLmRyYXdBcnJvdyhjdHgsIHRoaXMueCwgdGhpcy55LCB0aGlzLnRvWCwgdGhpcy50b1ksIHRoaXMuc3R5bGUubGluZVdpZHRoLCB0aGlzLnN0eWxlLmhlYWRTaXplLCB0aGlzLnN0eWxlLmNvbG9yLCB0aGlzLnN0eWxlLmxpbmVDYXApO1xuXG4gICAgdGhpcy5pbml0ID0gdHJ1ZTtcbiAgfVxuXG4gIGdldCB3aWR0aCgpIHtcbiAgICByZXR1cm4gTWF0aC5hYnModGhpcy54IC0gdGhpcy50b1gpO1xuICB9XG5cbiAgZ2V0IGhlaWdodCgpIHtcbiAgICByZXR1cm4gTWF0aC5hYnModGhpcy55IC0gdGhpcy50b1kpO1xuICB9XG5cbiAgZ2V0IGRlZmF1bHRTdHlsZSgpIHtcbiAgICByZXR1cm4gbmV3IFN0eWxlKHtcbiAgICAgIFwibGluZVdpZHRoXCI6IENvbnN0YW50cy5TZXR0aW5nLkFSUk9XX0RFRkFVTFRfTElORV9TSVpFLFxuICAgICAgXCJoZWFkU2l6ZVwiOiBDb25zdGFudHMuU2V0dGluZy5BUlJPV19ERUZBVUxUX0hFQURfU0laRSxcbiAgICAgIFwiY29sb3JcIjogQ29uc3RhbnRzLlNldHRpbmcuQVJST1dfREVGQVVMVF9DT0xPUixcbiAgICAgIFwibGluZUNhcFwiOiBDb25zdGFudHMuU2V0dGluZy5BUlJPV19ERUZBVUxUX0xJTkVfQ0FQXG4gICAgfSk7XG4gIH1cbn0iLCIvKlxuICogQ29weXJpZ2h0IChDKSAyMDIwIEVsaWFzdGlrIChlbGlhc3Rpa3NvZnRzLmNvbSlcbiAqXG4gKiBUaGlzIGZpbGUgaXMgcGFydCBvZiBcIkpTR2FtZVRvb2xzXCIuXG4gKlxuICogXCJKU0dhbWVUb29sc1wiIGlzIGZyZWUgc29mdHdhcmU6IHlvdSBjYW4gcmVkaXN0cmlidXRlIGl0IGFuZC9vciBtb2RpZnlcbiAqIGl0IHVuZGVyIHRoZSB0ZXJtcyBvZiB0aGUgR05VIEdlbmVyYWwgUHVibGljIExpY2Vuc2UgYXMgcHVibGlzaGVkIGJ5XG4gKiB0aGUgRnJlZSBTb2Z0d2FyZSBGb3VuZGF0aW9uLCBlaXRoZXIgdmVyc2lvbiAzIG9mIHRoZSBMaWNlbnNlLCBvclxuICogKGF0IHlvdXIgb3B0aW9uKSBhbnkgbGF0ZXIgdmVyc2lvbi5cbiAqXG4gKiBcIkpTR2FtZVRvb2xzXCIgaXMgZGlzdHJpYnV0ZWQgaW4gdGhlIGhvcGUgdGhhdCBpdCB3aWxsIGJlIHVzZWZ1bCxcbiAqIGJ1dCBXSVRIT1VUIEFOWSBXQVJSQU5UWTsgd2l0aG91dCBldmVuIHRoZSBpbXBsaWVkIHdhcnJhbnR5IG9mXG4gKiBNRVJDSEFOVEFCSUxJVFkgb3IgRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UuICBTZWUgdGhlXG4gKiBHTlUgR2VuZXJhbCBQdWJsaWMgTGljZW5zZSBmb3IgbW9yZSBkZXRhaWxzLlxuICpcbiAqIFlvdSBzaG91bGQgaGF2ZSByZWNlaXZlZCBhIGNvcHkgb2YgdGhlIEdOVSBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlXG4gKiBhbG9uZyB3aXRoIFwiSlNHYW1lVG9vbHNcIi4gIElmIG5vdCwgc2VlIDxodHRwOi8vd3d3LmdudS5vcmcvbGljZW5zZXMvPi5cbiAqL1xuaW1wb3J0IENvbXBvbmVudCBmcm9tIFwiLi9Db21wb25lbnRcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQm94IGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgc2VsZWN0YWJsZSA9IGZhbHNlO1xuXG4gIGNvbnN0cnVjdG9yKHgsIHksIHdpZHRoLCBoZWlnaHQsIHN0eWxlKSB7XG4gICAgc3VwZXIoeCwgeSwgd2lkdGgsIGhlaWdodCwgc3R5bGUpO1xuICB9XG4gIFxuICBkcmF3KGNvbnRleHQpIHtcbiAgICBpZih0aGlzLmhpZGRlbikgcmV0dXJuO1xuICAgIHN1cGVyLmRyYXcoY29udGV4dCk7XG5cbiAgICBjb25zdCBjYW52YXMgPSBjb250ZXh0LmNhbnZhcztcbiAgICBjb25zdCBjdHggPSBjYW52YXMuZ2V0Q29udGV4dChcIjJkXCIpO1xuICAgIGN0eC5zYXZlKCk7XG5cbiAgICB0aGlzLmRyYXdCYWNrZ3JvdW5kKGN0eCk7XG4gICAgdGhpcy5kcmF3Qm9yZGVyKGN0eCk7XG4gICAgXG4gICAgY3R4LnJlc3RvcmUoKTtcbiAgfVxuXG4gIGRyYXdCYWNrZ3JvdW5kKGN0eCkge1xuICAgIGNvbnN0IGNvbG9yID0gdGhpcy5iYWNrZ3JvdW5kQ29sb3I7XG5cbiAgICBpZihjb2xvcikge1xuICAgICAgY3R4LnNhdmUoKTtcbiAgXG4gICAgICBjdHguZmlsbFN0eWxlID0gY29sb3I7XG4gICAgICBjdHguZmlsbFJlY3QoTWF0aC5yb3VuZCh0aGlzLngpLCBNYXRoLnJvdW5kKHRoaXMueSksIE1hdGgucm91bmQodGhpcy53aWR0aCksIE1hdGgucm91bmQodGhpcy5oZWlnaHQpKTtcblxuICAgICAgY3R4LnJlc3RvcmUoKTtcbiAgICB9XG4gIH1cblxuICBnZXQgYmFja2dyb3VuZENvbG9yKCkge1xuICAgIGxldCBjb2xvciA9IG51bGw7XG5cbiAgICBpZih0aGlzLmhvdmVyZWQgJiYgdGhpcy5jbGlja2VkICYmIHRoaXMuc3R5bGUuYmFja2dyb3VuZENvbG9yRG93biAhPSBudWxsKSB7XG4gICAgICBjb2xvciA9IHRoaXMuc3R5bGUuYmFja2dyb3VuZENvbG9yRG93bjtcbiAgICB9IGVsc2UgaWYodGhpcy5ob3ZlcmVkICYmIHRoaXMuc3R5bGUuYmFja2dyb3VuZENvbG9ySG92ZXIgIT0gbnVsbCkge1xuICAgICAgY29sb3IgPSB0aGlzLnN0eWxlLmJhY2tncm91bmRDb2xvckhvdmVyO1xuICAgIH0gZWxzZSB7XG4gICAgICBjb2xvciA9IHRoaXMuc3R5bGUuYmFja2dyb3VuZENvbG9yO1xuICAgIH1cblxuICAgIHJldHVybiBjb2xvcjtcbiAgfVxuXG4gIGRyYXdCb3JkZXIoY3R4KSB7XG4gICAgY29uc3QgY29sb3IgPSB0aGlzLmJvcmRlckNvbG9yO1xuXG4gICAgaWYoY29sb3IgJiYgdGhpcy5zdHlsZS5ib3JkZXJTaXplID4gMCkge1xuICAgICAgY3R4LnNhdmUoKTtcbiAgICAgIFxuICAgICAgY3R4LnN0cm9rZVN0eWxlID0gY29sb3I7XG4gICAgICBjdHgubGluZVdpZHRoID0gdGhpcy5zdHlsZS5ib3JkZXJTaXplO1xuICAgICAgXG4gICAgICBjdHguc3Ryb2tlUmVjdChNYXRoLnJvdW5kKHRoaXMueCksIE1hdGgucm91bmQodGhpcy55KSwgTWF0aC5yb3VuZCh0aGlzLndpZHRoIC0gdGhpcy5zdHlsZS5ib3JkZXJTaXplIC8gMiksIE1hdGgucm91bmQodGhpcy5oZWlnaHQgLSB0aGlzLnN0eWxlLmJvcmRlclNpemUgLyAyKSk7XG4gIFxuICAgICAgY3R4LnJlc3RvcmUoKTtcbiAgICB9XG4gIH1cblxuICBnZXQgYm9yZGVyQ29sb3IoKSB7XG4gICAgbGV0IGNvbG9yID0gbnVsbDtcblxuICAgIGlmKHRoaXMuY2xpY2tlZCAmJiB0aGlzLmhvdmVyZWQgJiYgdGhpcy5zdHlsZS5ib3JkZXJDb2xvckRvd24gIT0gbnVsbCkge1xuICAgICAgY29sb3IgPSB0aGlzLnN0eWxlLmJvcmRlckNvbG9yRG93bjtcbiAgICB9IGVsc2UgaWYoIXRoaXMuY2xpY2tlZCAmJiB0aGlzLmhvdmVyZWQgJiYgdGhpcy5zdHlsZS5ib3JkZXJDb2xvckhvdmVyICE9IG51bGwpIHtcbiAgICAgIGNvbG9yID0gdGhpcy5zdHlsZS5ib3JkZXJDb2xvckhvdmVyO1xuICAgIH0gZWxzZSBpZih0aGlzLnNlbGVjdGFibGUgJiYgdGhpcy5zZWxlY3RlZCAmJiB0aGlzLnN0eWxlLmJvcmRlckNvbG9yU2VsZWN0ZWQgIT0gbnVsbCkge1xuICAgICAgY29sb3IgPSB0aGlzLnN0eWxlLmJvcmRlckNvbG9yU2VsZWN0ZWQ7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbG9yID0gdGhpcy5zdHlsZS5ib3JkZXJDb2xvcjtcbiAgICB9XG5cbiAgICByZXR1cm4gY29sb3I7XG4gIH1cbn0iLCIvKlxuICogQ29weXJpZ2h0IChDKSAyMDIwIEVsaWFzdGlrIChlbGlhc3Rpa3NvZnRzLmNvbSlcbiAqXG4gKiBUaGlzIGZpbGUgaXMgcGFydCBvZiBcIkpTR2FtZVRvb2xzXCIuXG4gKlxuICogXCJKU0dhbWVUb29sc1wiIGlzIGZyZWUgc29mdHdhcmU6IHlvdSBjYW4gcmVkaXN0cmlidXRlIGl0IGFuZC9vciBtb2RpZnlcbiAqIGl0IHVuZGVyIHRoZSB0ZXJtcyBvZiB0aGUgR05VIEdlbmVyYWwgUHVibGljIExpY2Vuc2UgYXMgcHVibGlzaGVkIGJ5XG4gKiB0aGUgRnJlZSBTb2Z0d2FyZSBGb3VuZGF0aW9uLCBlaXRoZXIgdmVyc2lvbiAzIG9mIHRoZSBMaWNlbnNlLCBvclxuICogKGF0IHlvdXIgb3B0aW9uKSBhbnkgbGF0ZXIgdmVyc2lvbi5cbiAqXG4gKiBcIkpTR2FtZVRvb2xzXCIgaXMgZGlzdHJpYnV0ZWQgaW4gdGhlIGhvcGUgdGhhdCBpdCB3aWxsIGJlIHVzZWZ1bCxcbiAqIGJ1dCBXSVRIT1VUIEFOWSBXQVJSQU5UWTsgd2l0aG91dCBldmVuIHRoZSBpbXBsaWVkIHdhcnJhbnR5IG9mXG4gKiBNRVJDSEFOVEFCSUxJVFkgb3IgRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UuICBTZWUgdGhlXG4gKiBHTlUgR2VuZXJhbCBQdWJsaWMgTGljZW5zZSBmb3IgbW9yZSBkZXRhaWxzLlxuICpcbiAqIFlvdSBzaG91bGQgaGF2ZSByZWNlaXZlZCBhIGNvcHkgb2YgdGhlIEdOVSBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlXG4gKiBhbG9uZyB3aXRoIFwiSlNHYW1lVG9vbHNcIi4gIElmIG5vdCwgc2VlIDxodHRwOi8vd3d3LmdudS5vcmcvbGljZW5zZXMvPi5cbiAqL1xuaW1wb3J0IFJvdyBmcm9tIFwiLi9Sb3dcIjtcbmltcG9ydCBDb25zdGFudHMgZnJvbSBcIi4vQ29uc3RhbnRzXCI7XG5pbXBvcnQgU3R5bGUgZnJvbSBcIi4vU3R5bGVcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQnV0dG9uIGV4dGVuZHMgUm93IHtcbiAgc2VsZWN0YWJsZSA9IHRydWU7XG5cbiAgY29uc3RydWN0b3IoeCwgeSwgbWF4V2lkdGgsIG1heEhlaWdodCwgc3R5bGUsIC4uLmNvbXBvbmVudHMpIHtcbiAgICBzdXBlcih4LCB5LCBtYXhXaWR0aCwgbWF4SGVpZ2h0LCBzdHlsZSwgLi4uY29tcG9uZW50cyk7XG4gIH1cbiAgXG4gIGRyYXcoY29udGV4dCkge1xuICAgIGlmKHRoaXMuaGlkZGVuKSByZXR1cm47XG4gICAgc3VwZXIuZHJhdyhjb250ZXh0KTtcblxuICAgIGNvbnN0IGNhbnZhcyA9IGNvbnRleHQuY2FudmFzO1xuICAgIGNvbnN0IGN0eCA9IGNhbnZhcy5nZXRDb250ZXh0KFwiMmRcIik7XG4gICAgY3R4LnNhdmUoKTtcbiAgICBcbiAgICB0aGlzLmRyYXdDb21wb25lbnRzKGN0eCk7XG4gICAgXG4gICAgY3R4LnJlc3RvcmUoKTtcbiAgfVxuXG4gIGRyYXdDb21wb25lbnRzKGN0eCkge1xuICAgIHN1cGVyLmRyYXcoY3R4KTtcbiAgfVxuXG4gIGdldCBoZWlnaHQoKSB7XG4gICAgcmV0dXJuICh0aGlzLm1heEhlaWdodCB8fCBzdXBlci5oZWlnaHQpICsgdGhpcy5zdHlsZS5wYWRkaW5nO1xuICB9XG5cbiAgZ2V0IHdpZHRoKCkge1xuICAgIHJldHVybiAodGhpcy5tYXhXaWR0aCB8fCBzdXBlci53aWR0aCkgKyB0aGlzLnN0eWxlLnBhZGRpbmc7XG4gIH1cblxuICBnZXQgZGVmYXVsdFN0eWxlKCkge1xuICAgIHJldHVybiBuZXcgU3R5bGUoe1xuICAgICAgXCJiYWNrZ3JvdW5kQ29sb3JcIjogQ29uc3RhbnRzLlNldHRpbmcuQlVUVE9OX0RFRkFVTFRfQkFDS0dST1VORCxcbiAgICAgIFwiYmFja2dyb3VuZENvbG9ySG92ZXJcIjogQ29uc3RhbnRzLlNldHRpbmcuQlVUVE9OX0RFRkFVTFRfSE9WRVJfQkFDS0dST1VORCxcbiAgICAgIFwiYmFja2dyb3VuZENvbG9yRG93blwiOiBDb25zdGFudHMuU2V0dGluZy5CVVRUT05fREVGQVVMVF9DTElDS19CQUNLR1JPVU5ELFxuICAgICAgXCJzY3JvbGxYRGlzYWJsZWRcIjogdHJ1ZSxcbiAgICAgIFwic2Nyb2xsWURpc2FibGVkXCI6IHRydWVcbiAgICB9KTtcbiAgfVxufSIsIi8qXG4gKiBDb3B5cmlnaHQgKEMpIDIwMjAgRWxpYXN0aWsgKGVsaWFzdGlrc29mdHMuY29tKVxuICpcbiAqIFRoaXMgZmlsZSBpcyBwYXJ0IG9mIFwiSlNHYW1lVG9vbHNcIi5cbiAqXG4gKiBcIkpTR2FtZVRvb2xzXCIgaXMgZnJlZSBzb2Z0d2FyZTogeW91IGNhbiByZWRpc3RyaWJ1dGUgaXQgYW5kL29yIG1vZGlmeVxuICogaXQgdW5kZXIgdGhlIHRlcm1zIG9mIHRoZSBHTlUgR2VuZXJhbCBQdWJsaWMgTGljZW5zZSBhcyBwdWJsaXNoZWQgYnlcbiAqIHRoZSBGcmVlIFNvZnR3YXJlIEZvdW5kYXRpb24sIGVpdGhlciB2ZXJzaW9uIDMgb2YgdGhlIExpY2Vuc2UsIG9yXG4gKiAoYXQgeW91ciBvcHRpb24pIGFueSBsYXRlciB2ZXJzaW9uLlxuICpcbiAqIFwiSlNHYW1lVG9vbHNcIiBpcyBkaXN0cmlidXRlZCBpbiB0aGUgaG9wZSB0aGF0IGl0IHdpbGwgYmUgdXNlZnVsLFxuICogYnV0IFdJVEhPVVQgQU5ZIFdBUlJBTlRZOyB3aXRob3V0IGV2ZW4gdGhlIGltcGxpZWQgd2FycmFudHkgb2ZcbiAqIE1FUkNIQU5UQUJJTElUWSBvciBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRS4gIFNlZSB0aGVcbiAqIEdOVSBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlIGZvciBtb3JlIGRldGFpbHMuXG4gKlxuICogWW91IHNob3VsZCBoYXZlIHJlY2VpdmVkIGEgY29weSBvZiB0aGUgR05VIEdlbmVyYWwgUHVibGljIExpY2Vuc2VcbiAqIGFsb25nIHdpdGggXCJKU0dhbWVUb29sc1wiLiAgSWYgbm90LCBzZWUgPGh0dHA6Ly93d3cuZ251Lm9yZy9saWNlbnNlcy8+LlxuICovXG5pbXBvcnQgSW1hZ2VDb250YWluZXIgZnJvbSBcIi4vSW1hZ2VDb250YWluZXJcIjtcbmltcG9ydCBCdXR0b24gZnJvbSBcIi4vQnV0dG9uXCI7XG5pbXBvcnQgU3R5bGUgZnJvbSBcIi4vU3R5bGVcIjtcbmltcG9ydCBDb25zdGFudHMgZnJvbSBcIi4vQ29uc3RhbnRzXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEJ1dHRvbkltYWdlIGV4dGVuZHMgQnV0dG9uIHtcbiAgY29uc3RydWN0b3IoaW1nU3JjLCB4LCB5LCBhbGlnbmVtZW50LCB2ZXJ0aWNhbEFsaWduZW1lbnQsIHdpZHRoLCBoZWlnaHQsIGJhY2tncm91bmRDb2xvciwgYmFja2dyb3VuZENvbG9ySG92ZXIsIGltYWdlTG9hZGVyKSB7XG4gICAgY29uc3Qgc3R5bGUgPSBuZXcgU3R5bGUoe1xuICAgICAgXCJhbGlnbmVtZW50XCI6IGFsaWduZW1lbnQsXG4gICAgICBcInZlcnRpY2FsQWxpZ25lbWVudFwiOiB2ZXJ0aWNhbEFsaWduZW1lbnQsXG4gICAgICBcImJhY2tncm91bmRDb2xvclwiOiBiYWNrZ3JvdW5kQ29sb3IgfHwgQ29uc3RhbnRzLlNldHRpbmcuQlVUVE9OX0RFRkFVTFRfQkFDS0dST1VORCxcbiAgICAgIFwiYmFja2dyb3VuZENvbG9ySG92ZXJcIjogYmFja2dyb3VuZENvbG9ySG92ZXIgfHwgQ29uc3RhbnRzLlNldHRpbmcuQlVUVE9OX0RFRkFVTFRfSE9WRVJfQkFDS0dST1VORFxuICAgIH0pO1xuXG4gICAgc3VwZXIoeCwgeSwgd2lkdGgsIGhlaWdodCwgc3R5bGUpO1xuICAgIHRoaXMuaW1hZ2UgPSBuZXcgSW1hZ2VDb250YWluZXIoaW1nU3JjLCB4LCB5LCB3aWR0aCwgaGVpZ2h0LCBuZXcgU3R5bGUoeyBcImFsaWduZW1lbnRcIjogXCJjZW50ZXJcIiwgXCJ2ZXJ0aWNhbEFsaWduZW1lbnRcIjogXCJjZW50ZXJcIiB9KSwgaW1hZ2VMb2FkZXIpO1xuICAgIHRoaXMuYWRkKHRoaXMuaW1hZ2UpO1xuXG4gICAgY29uc29sZSAmJiBjb25zb2xlLndhcm4gJiYgY29uc29sZS53YXJuKENvbnN0YW50cy5TdHJpbmcuTk9USUNFX01FU1NBR0UgKyBcIiBcIiArIENvbnN0YW50cy5TdHJpbmcuQlVUVE9OX0lNQUdFX0RFUFJFQ0FURUQpO1xuICB9XG5cbiAgbG9hZEltYWdlKGltYWdlTG9hZGVyKSB7XG4gICAgaWYodGhpcy5jb21wb25lbnRzWzBdIGluc3RhbmNlb2YgSW1hZ2VDb250YWluZXIpIHRoaXMuY29tcG9uZW50c1swXS5sb2FkSW1hZ2UoaW1hZ2VMb2FkZXIpO1xuICB9XG5cbiAgc2V0IG1pbldpZHRoKHdpZHRoKSB7XG4gICAgdGhpcy5pbWFnZS53aWR0aCA9IHdpZHRoO1xuICAgIHN1cGVyLm1pbldpZHRoID0gd2lkdGg7XG4gIH1cblxuICBzZXQgbWluSGVpZ2h0KGhlaWdodCkge1xuICAgIHRoaXMuaW1hZ2UuaGVpZ2h0ID0gaGVpZ2h0O1xuICAgIHN1cGVyLm1pbkhlaWdodCA9IGhlaWdodDtcbiAgfVxuXG4gIGdldCBtaW5XaWR0aCgpIHtcbiAgICByZXR1cm4gc3VwZXIubWluV2lkdGg7XG4gIH1cblxuICBnZXQgbWluSGVpZ2h0KCkge1xuICAgIHJldHVybiBzdXBlci5taW5IZWlnaHQ7XG4gIH1cblxuICBzZXQgbWF4V2lkdGgod2lkdGgpIHtcbiAgICB0aGlzLmltYWdlLndpZHRoID0gd2lkdGg7XG4gICAgc3VwZXIubWF4V2lkdGggPSB3aWR0aDtcbiAgfVxuXG4gIHNldCBtYXhIZWlnaHQoaGVpZ2h0KSB7XG4gICAgdGhpcy5pbWFnZS5oZWlnaHQgPSBoZWlnaHQ7XG4gICAgc3VwZXIubWF4SGVpZ2h0ID0gaGVpZ2h0O1xuICB9XG5cbiAgZ2V0IG1heFdpZHRoKCkge1xuICAgIHJldHVybiBzdXBlci5tYXhXaWR0aDtcbiAgfVxuXG4gIGdldCBtYXhIZWlnaHQoKSB7XG4gICAgcmV0dXJuIHN1cGVyLm1heEhlaWdodDtcbiAgfVxuXG4gIHNldCB3aWR0aCh3aWR0aCkge1xuICAgIHRoaXMubWluV2lkdGggPSB3aWR0aDtcbiAgICB0aGlzLm1heFdpZHRoID0gd2lkdGg7XG4gIH1cblxuICBnZXQgd2lkdGgoKSB7XG4gICAgcmV0dXJuIHN1cGVyLndpZHRoO1xuICB9XG5cbiAgc2V0IGhlaWdodChoZWlnaHQpIHtcbiAgICB0aGlzLm1pbkhlaWdodCA9IGhlaWdodDtcbiAgICB0aGlzLm1heEhlaWdodCA9IGhlaWdodDtcbiAgfVxuXG4gIGdldCBoZWlnaHQoKSB7XG4gICAgcmV0dXJuIHN1cGVyLmhlaWdodDtcbiAgfVxufSIsIi8qXG4gKiBDb3B5cmlnaHQgKEMpIDIwMjAgRWxpYXN0aWsgKGVsaWFzdGlrc29mdHMuY29tKVxuICpcbiAqIFRoaXMgZmlsZSBpcyBwYXJ0IG9mIFwiSlNHYW1lVG9vbHNcIi5cbiAqXG4gKiBcIkpTR2FtZVRvb2xzXCIgaXMgZnJlZSBzb2Z0d2FyZTogeW91IGNhbiByZWRpc3RyaWJ1dGUgaXQgYW5kL29yIG1vZGlmeVxuICogaXQgdW5kZXIgdGhlIHRlcm1zIG9mIHRoZSBHTlUgR2VuZXJhbCBQdWJsaWMgTGljZW5zZSBhcyBwdWJsaXNoZWQgYnlcbiAqIHRoZSBGcmVlIFNvZnR3YXJlIEZvdW5kYXRpb24sIGVpdGhlciB2ZXJzaW9uIDMgb2YgdGhlIExpY2Vuc2UsIG9yXG4gKiAoYXQgeW91ciBvcHRpb24pIGFueSBsYXRlciB2ZXJzaW9uLlxuICpcbiAqIFwiSlNHYW1lVG9vbHNcIiBpcyBkaXN0cmlidXRlZCBpbiB0aGUgaG9wZSB0aGF0IGl0IHdpbGwgYmUgdXNlZnVsLFxuICogYnV0IFdJVEhPVVQgQU5ZIFdBUlJBTlRZOyB3aXRob3V0IGV2ZW4gdGhlIGltcGxpZWQgd2FycmFudHkgb2ZcbiAqIE1FUkNIQU5UQUJJTElUWSBvciBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRS4gIFNlZSB0aGVcbiAqIEdOVSBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlIGZvciBtb3JlIGRldGFpbHMuXG4gKlxuICogWW91IHNob3VsZCBoYXZlIHJlY2VpdmVkIGEgY29weSBvZiB0aGUgR05VIEdlbmVyYWwgUHVibGljIExpY2Vuc2VcbiAqIGFsb25nIHdpdGggXCJKU0dhbWVUb29sc1wiLiAgSWYgbm90LCBzZWUgPGh0dHA6Ly93d3cuZ251Lm9yZy9saWNlbnNlcy8+LlxuICovXG5pbXBvcnQgQ29uc3RhbnRzIGZyb20gXCIuL0NvbnN0YW50c1wiO1xuaW1wb3J0IFV0aWxzIGZyb20gXCIuL1V0aWxzXCI7XG5pbXBvcnQgU2NlbmUgZnJvbSBcIi4vU2NlbmVcIjtcbmltcG9ydCBSZWFjdG9yQ2FudmFzIGZyb20gXCIuL1JlYWN0b3JDYW52YXNcIjtcbmltcG9ydCBNZW51IGZyb20gXCIuL01lbnVcIjtcbmltcG9ydCBMYWJlbCBmcm9tIFwiLi9MYWJlbFwiO1xuaW1wb3J0IFN0eWxlIGZyb20gXCIuL1N0eWxlXCI7XG5pbXBvcnQgQnV0dG9uIGZyb20gXCIuL0J1dHRvblwiO1xuaW1wb3J0IFJvdyBmcm9tIFwiLi9Sb3dcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ2FudmFzIHtcbiAgI2xhc3RGcmFtZVRpbWU7XG4gICNfd2lkdGg7XG4gICNfaGVpZ2h0O1xuXG4gIGNvbnN0cnVjdG9yKHNjZW5lLCBjYW52YXMsIHdpZHRoLCBoZWlnaHQsIGF1dG9SZXNpemUsIG1heEZQUykge1xuICAgIHRoaXMuY2FudmFzID0gY2FudmFzIHx8IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJjYW52YXNcIik7XG4gICAgdGhpcy5jb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIHRoaXMud2lkdGggPSB3aWR0aCB8fCBDb25zdGFudHMuU2V0dGluZy5DQU5WQVNfV0lEVEg7XG4gICAgdGhpcy5oZWlnaHQgPSBoZWlnaHQgfHwgQ29uc3RhbnRzLlNldHRpbmcuQ0FOVkFTX0hFSUdIVDtcbiAgICB0aGlzLnNjZW5lID0gc2NlbmU7XG4gICAgdGhpcy5jb250YWluZXIuYXBwZW5kQ2hpbGQodGhpcy5jYW52YXMpO1xuICAgIHRoaXMuc3RhcnRlZCA9IGZhbHNlO1xuICAgIHRoaXMuaW5pdCA9IGZhbHNlO1xuICAgIHRoaXMubWF4RlBTID0gbWF4RlBTIHx8IC0xO1xuICAgIHRoaXMuI2xhc3RGcmFtZVRpbWUgPSAwO1xuICAgIHRoaXMuaGFzRXJyb3IgPSBmYWxzZTtcbiAgICB0aGlzLmZ1bGxzY3JlZW4gPSBmYWxzZTtcbiAgICB0aGlzLmZ1bGxwYWdlID0gZmFsc2U7XG5cbiAgICAvLyBFcnJvciBtZXNzYWdlIHNjcmVlblxuICAgIGNvbnN0IGJ1dHRvblNjZW5lRXJyb3IgPSBuZXcgQnV0dG9uKG51bGwsIG51bGwsIG51bGwsIG51bGwsIG5ldyBTdHlsZSh7IFwiYmFja2dyb3VuZENvbG9yXCI6IENvbnN0YW50cy5TZXR0aW5nLkJVVFRPTl9ERUZBVUxUX0FMVEVSTkFUSVZFX0JBQ0tHUk9VTkQgfSksIG5ldyBMYWJlbChDb25zdGFudHMuU3RyaW5nLlJFVFJZLCBudWxsLCBudWxsLCBuZXcgU3R5bGUoeyBcImZvbnRDb2xvclwiOiBcIndoaXRlXCIsIFwiYWxpZ25lbWVudFwiOiBcImNlbnRlclwiIH0pKSk7XG4gICAgY29uc3QgYnV0dG9uRGV0YWlsc1NjZW5lRXJyb3IgPSBuZXcgQnV0dG9uKG51bGwsIG51bGwsIG51bGwsIG51bGwsIG5ldyBTdHlsZSh7IFwiYmFja2dyb3VuZENvbG9yXCI6IENvbnN0YW50cy5TZXR0aW5nLkJVVFRPTl9ERUZBVUxUX0FMVEVSTkFUSVZFX0JBQ0tHUk9VTkQgfSksIG5ldyBMYWJlbChDb25zdGFudHMuU3RyaW5nLkRFVEFJTFMsIG51bGwsIG51bGwsIG5ldyBTdHlsZSh7IFwiZm9udENvbG9yXCI6IFwid2hpdGVcIiwgXCJhbGlnbmVtZW50XCI6IFwiY2VudGVyXCIgfSkpKTtcbiAgICB0aGlzLmxhYmVsRGV0YWlsc1NjZW5lRXJyb3IgPSBuZXcgTGFiZWwoXCJcIiwgbnVsbCwgbnVsbCwgbmV3IFN0eWxlKHsgXCJmb250Q29sb3JcIjogXCJ3aGl0ZVwiLCBcImFsaWduZW1lbnRcIjogXCJjZW50ZXJcIiwgXCJmb250U2l6ZVwiOiBDb25zdGFudHMuU2V0dGluZy5GT05UX1NJWkUgLyAxLjc1IH0pKTtcbiAgICB0aGlzLmxhYmVsRGV0YWlsc1NjZW5lRXJyb3IuaGlkZGVuID0gdHJ1ZTtcbiAgICBjb25zdCBjb2xEZXRhaWxzU2NlbmVFcnJvciA9IG5ldyBSb3cobnVsbCwgbnVsbCwgbnVsbCwgMCwgbmV3IFN0eWxlKHsgXCJhbGlnbmVtZW50XCI6IFwiY2VudGVyXCIgfSksIHRoaXMubGFiZWxEZXRhaWxzU2NlbmVFcnJvcik7XG5cbiAgICBjb25zdCBtZW51U2NlbmVFcnJvciA9IG5ldyBNZW51KG5ldyBTdHlsZSh7IFwic3BhY2VCZXR3ZWVuQ29tcG9uZW50c1wiOiAxNSwgXCJiYWNrZ3JvdW5kQ29sb3JcIjogQ29uc3RhbnRzLlNldHRpbmcuRVJST1JfTUVOVV9CQUNLR1JPVU5EX0NPTE9SIH0pLCBuZXcgTGFiZWwoQ29uc3RhbnRzLlN0cmluZy5FUlJPUl9NRVNTQUdFX0NBTlZBU19MQUJFTCwgbnVsbCwgbnVsbCwgbmV3IFN0eWxlKHsgXCJmb250Q29sb3JcIjogXCJ3aGl0ZVwiLCBcImFsaWduZW1lbnRcIjogXCJjZW50ZXJcIiB9KSksIGNvbERldGFpbHNTY2VuZUVycm9yLCBuZXcgUm93KG51bGwsIG51bGwsIG51bGwsIG51bGwsIG5ldyBTdHlsZSh7IFwiYWxpZ25lbWVudFwiOiBcImNlbnRlclwiIH0pLCBidXR0b25TY2VuZUVycm9yLCBidXR0b25EZXRhaWxzU2NlbmVFcnJvcikpO1xuICAgIG1lbnVTY2VuZUVycm9yLmVuYWJsZSgpO1xuXG4gICAgdGhpcy5zY2VuZUVycm9yID0gbmV3IFNjZW5lKG1lbnVTY2VuZUVycm9yKTtcbiAgICB0aGlzLnNjZW5lUHJldmlvdXMgPSB0aGlzLnNjZW5lO1xuXG4gICAgYnV0dG9uU2NlbmVFcnJvci5hZGRDbGlja0FjdGlvbigoKSA9PiB7XG4gICAgICB0aGlzLmhhc0Vycm9yID0gZmFsc2U7XG4gICAgICB0aGlzLnNjZW5lID0gdGhpcy5zY2VuZVByZXZpb3VzXG4gICAgfSk7XG5cbiAgICBidXR0b25EZXRhaWxzU2NlbmVFcnJvci5hZGRDbGlja0FjdGlvbigoKSA9PiB7XG4gICAgICB0aGlzLmxhYmVsRGV0YWlsc1NjZW5lRXJyb3IuaGlkZGVuID0gIXRoaXMubGFiZWxEZXRhaWxzU2NlbmVFcnJvci5oaWRkZW47XG4gICAgICBjb2xEZXRhaWxzU2NlbmVFcnJvci5tYXhIZWlnaHQgPSAhdGhpcy5sYWJlbERldGFpbHNTY2VuZUVycm9yLmhpZGRlbiA/IDEwMCA6IDA7XG4gICAgfSk7XG4gICAgXG4gICAgLy8gUmVhY3RvcnMvZXZlbnRzXG4gICAgdGhpcy5yZWFjdG9yID0gbmV3IFJlYWN0b3JDYW52YXMoKTtcbiAgICB0aGlzLnJlYWN0b3IucmVnaXN0ZXJFdmVudChcIm1vdXNlbW92ZVwiKTtcbiAgICB0aGlzLnJlYWN0b3IucmVnaXN0ZXJFdmVudChcImNsaWNrXCIpO1xuICAgIHRoaXMucmVhY3Rvci5yZWdpc3RlckV2ZW50KFwibW91c2Vkb3duXCIpO1xuICAgIHRoaXMucmVhY3Rvci5yZWdpc3RlckV2ZW50KFwibW91c2V1cFwiKTtcbiAgICB0aGlzLnJlYWN0b3IucmVnaXN0ZXJFdmVudChcIndoZWVsXCIpO1xuICAgIHRoaXMucmVhY3Rvci5yZWdpc3RlckV2ZW50KFwidG91Y2hzdGFydFwiKTtcbiAgICB0aGlzLnJlYWN0b3IucmVnaXN0ZXJFdmVudChcInRvdWNoZW5kXCIpO1xuICAgIHRoaXMucmVhY3Rvci5yZWdpc3RlckV2ZW50KFwidG91Y2htb3ZlXCIpO1xuXG4gICAgaWYoYXV0b1Jlc2l6ZSkgdGhpcy5hdXRvUmVzaXplKCk7XG4gICAgdGhpcy5jcmVhdGVFdmVudHMoKTtcblxuICAgIGlmKENvbnN0YW50cy5TZXR0aW5nLkRJU0FCTEVfT1BUSU1JWkFUSU9OUykge1xuICAgICAgY29uc29sZSAmJiBjb25zb2xlLmluZm8oQ29uc3RhbnRzLlN0cmluZy5OT1RJQ0VfTUVTU0FHRSArIFwiIFwiICsgQ29uc3RhbnRzLlN0cmluZy5PUFRJTUlaQVRJT05fRElTQUJMRUQpO1xuICAgIH1cblxuICAgIGlmKENvbnN0YW50cy5TZXR0aW5nLkRJU0FCTEVfQ09OVEFJTkVSU19DVVRUSU5HKSB7XG4gICAgICBjb25zb2xlICYmIGNvbnNvbGUuaW5mbyhDb25zdGFudHMuU3RyaW5nLk5PVElDRV9NRVNTQUdFICsgXCIgXCIgKyBDb25zdGFudHMuU3RyaW5nLkNPTlRBSU5FUl9DVVRUSU5HX0RJU0FCTEVEKTtcbiAgICB9XG4gIH1cblxuICBkcmF3KCkge1xuICAgIGNvbnN0IGN0eCA9IHRoaXMuY2FudmFzLmdldENvbnRleHQoXCIyZFwiKTtcbiAgICB0aGlzLmRyYXdDbGVhcihjdHgpO1xuICAgIHRoaXMuZHJhd1NjZW5lKGN0eCk7XG4gIH1cblxuICBkcmF3U2NlbmUoY3R4KSB7XG4gICAgaWYodGhpcy5zY2VuZSkge1xuICAgICAgdGhpcy5zY2VuZS5wYXJlbnQgPSB0aGlzO1xuICAgICAgdGhpcy5zY2VuZS5jYW52YXMgPSB0aGlzO1xuXG4gICAgICB0cnkge1xuICAgICAgICBjdHguc2NhbGUoQ29uc3RhbnRzLlNldHRpbmcuUElYRUxfUkFUSU8sIENvbnN0YW50cy5TZXR0aW5nLlBJWEVMX1JBVElPKTtcbiAgICAgICAgdGhpcy5zY2VuZS5kcmF3KGN0eCk7XG4gICAgICB9IGNhdGNoKGUpIHtcbiAgICAgICAgdGhpcy5oYXNFcnJvciA9IHRydWU7XG4gICAgICAgIHRoaXMuc2NlbmUgPSB0aGlzLnNjZW5lRXJyb3I7XG4gICAgICAgIHRoaXMubGFiZWxEZXRhaWxzU2NlbmVFcnJvci50ZXh0ID0gXCJcIiArIGUuc3RhY2s7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoQ29uc3RhbnRzLlN0cmluZy5FUlJPUl9NRVNTQUdFICsgXCIgXCIgKyBDb25zdGFudHMuU3RyaW5nLkVSUk9SX01FU1NBR0VfQ0FOVkFTICsgXCJcXG5cIiwgZSk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgZHJhd0NsZWFyKGN0eCkge1xuICAgIFV0aWxzLmNsZWFyKGN0eCk7XG4gIH1cblxuICBzdGFydERyYXcoZnVuYykge1xuICAgIHRoaXMuc3RhcnRlZCA9IHRydWU7XG5cbiAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUodGltZSA9PiB7XG4gICAgICBpZih0aGlzLnN0YXJ0ZWQpIHtcbiAgICAgICAgY29uc3Qgb2Zmc2V0RnJhbWUgPSB0aW1lIC0gdGhpcy4jbGFzdEZyYW1lVGltZTtcblxuICAgICAgICB0aGlzLmZ1bGxzY3JlZW4gPSBkb2N1bWVudC5mdWxsc2NyZWVuRWxlbWVudCA9PSB0aGlzLmNhbnZhcyB8fCBkb2N1bWVudC5mdWxsc2NyZWVuRWxlbWVudCA9PSB0aGlzLmNvbnRhaW5lcjtcblxuICAgICAgICBpZihDb25zdGFudHMuU2V0dGluZy5FTkFCTEVfUElYRUxfUkFUSU9fUkVTSVpJTkcpIHtcbiAgICAgICAgICBDb25zdGFudHMuU2V0dGluZy5QSVhFTF9SQVRJTyA9IHdpbmRvdy5kZXZpY2VQaXhlbFJhdGlvICogQ29uc3RhbnRzLlNldHRpbmcuUkVTT0xVVElPTl9TQ0FMRTsgLy8gVXBkYXRlIHRoZSBkZXZpY2UgcGl4ZWwgcmF0aW8sIG9ubHkgaW4gZnVsbHNjcmVlbiBtb2RlL2Z1bGxwYWdlIG1vZGVcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBDb25zdGFudHMuU2V0dGluZy5QSVhFTF9SQVRJTyA9IDEgKiBDb25zdGFudHMuU2V0dGluZy5SRVNPTFVUSU9OX1NDQUxFO1xuICAgICAgICB9XG5cbiAgICAgICAgVXRpbHMuYXV0b0RQSSh0aGlzLmNhbnZhcyk7XG5cbiAgICAgICAgaWYodGhpcy5tYXhGUFMgPCAxIHx8IG9mZnNldEZyYW1lID4gMTAwMCAvIHRoaXMubWF4RlBTKSB7XG4gICAgICAgICAgdGhpcy4jbGFzdEZyYW1lVGltZSA9IHRpbWU7XG4gICAgICAgICAgdGhpcy5kcmF3KCk7XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgIHRoaXMuc3RhcnREcmF3KGZ1bmMpO1xuICAgICAgICBpZihmdW5jKSBmdW5jKCk7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICBzdG9wRHJhdygpIHtcbiAgICB0aGlzLnN0YXJ0ZWQgPSBmYWxzZTtcbiAgfVxuXG4gIGFwcGVuZFRvKGVsZW1lbnQpIHtcbiAgICBlbGVtZW50LmFwcGVuZENoaWxkKHRoaXMuY29udGFpbmVyKTtcbiAgfVxuXG4gIHJlbW92ZShlbGVtZW50KSB7XG4gICAgZWxlbWVudC5yZW1vdmVDaGlsZCh0aGlzLmNvbnRhaW5lcik7XG4gICAgdGhpcy5jb250YWluZXIucmVtb3ZlQ2hpbGQodGhpcy5jYW52YXMpO1xuICB9XG5cbiAgdG9nZ2xlRnVsbHNjcmVlbigpIHtcbiAgICBVdGlscy50b2dnbGVGdWxsc2NyZWVuKHRoaXMuY2FudmFzLCB0aGlzLmNvbnRhaW5lcik7XG4gIH1cblxuICB0b2dnbGVGdWxscGFnZSgpIHtcbiAgICBVdGlscy50b2dnbGVGdWxscGFnZSh0aGlzLmNhbnZhcywgdGhpcy5jb250YWluZXIpO1xuICAgIHRoaXMuZnVsbHBhZ2UgPSAhdGhpcy5mdWxscGFnZTtcbiAgfVxuXG4gIGF1dG9SZXNpemUoKSB7XG4gICAgVXRpbHMuZW5hYmxlQXV0b1Jlc2l6ZUNhbnZhcyh0aGlzLmNhbnZhcywgdGhpcy5jb250YWluZXIsIHRoaXMud2lkdGgsIHRoaXMuaGVpZ2h0KTtcbiAgfVxuXG4gIGdldCB4KCkge1xuICAgIHJldHVybiAwO1xuICB9XG5cbiAgZ2V0IHkoKSB7XG4gICAgcmV0dXJuIDA7XG4gIH1cblxuICBnZXQgd2lkdGgoKSB7XG4gICAgcmV0dXJuIHRoaXMuY2FudmFzID8gVXRpbHMuZ2V0Q2FudmFzV2lkdGgodGhpcy5jYW52YXMpIDogdGhpcy4jX3dpZHRoO1xuICB9XG5cbiAgZ2V0IGhlaWdodCgpIHtcbiAgICByZXR1cm4gdGhpcy5jYW52YXMgPyBVdGlscy5nZXRDYW52YXNIZWlnaHQodGhpcy5jYW52YXMpIDogdGhpcy4jX2hlaWdodDtcbiAgfVxuXG4gIGdldCBzdHlsZSgpIHtcbiAgICByZXR1cm4gdGhpcy5jYW52YXMgPyB0aGlzLmNhbnZhcy5zdHlsZSA6IG51bGw7XG4gIH1cblxuICBzZXQgd2lkdGgod2lkdGgpIHtcbiAgICBpZih3aWR0aCAhPSB0aGlzLiNfd2lkdGgpIHtcbiAgICAgIHRoaXMuI193aWR0aCA9IHdpZHRoO1xuICAgICAgdGhpcy5jYW52YXMud2lkdGggPSB3aWR0aDtcbiAgICAgIHRoaXMuc2NlbmUgJiYgdGhpcy5zY2VuZS5yZWFjdG9yLmRpc3BhdGNoRXZlbnQoXCJvbkNoYW5nZVwiLCB0aGlzKTtcbiAgICB9XG4gIH1cblxuICBzZXQgaGVpZ2h0KGhlaWdodCkge1xuICAgIGlmKGhlaWdodCAhPSB0aGlzLiNfaGVpZ2h0KSB7XG4gICAgICB0aGlzLiNfaGVpZ2h0ID0gaGVpZ2h0O1xuICAgICAgdGhpcy5jYW52YXMuaGVpZ2h0ID0gaGVpZ2h0O1xuICAgICAgdGhpcy5zY2VuZSAmJiB0aGlzLnNjZW5lLnJlYWN0b3IuZGlzcGF0Y2hFdmVudChcIm9uQ2hhbmdlXCIsIHRoaXMpO1xuICAgIH1cbiAgfVxuXG4gIGdldENvbnRleHQoY29udGV4dCkge1xuICAgIHJldHVybiB0aGlzLmNhbnZhcyA/IHRoaXMuY2FudmFzLmdldENvbnRleHQoY29udGV4dCA/IGNvbnRleHQgOiBcIjJkXCIpIDogbnVsbDtcbiAgfVxuXG4gIGNyZWF0ZUV2ZW50cygpIHtcbiAgICBpZighdGhpcy5pbml0ICYmIHRoaXMuY2FudmFzKSB7XG4gICAgICBbXCJtb3VzZW1vdmVcIiwgXCJjbGlja1wiLCBcIm1vdXNlZG93blwiLCBcIm1vdXNldXBcIiwgXCJ3aGVlbFwiXS5mb3JFYWNoKGV2ZW50TmFtZSA9PiB7XG4gICAgICAgIHRoaXMuY2FudmFzLmFkZEV2ZW50TGlzdGVuZXIoZXZlbnROYW1lLCBldmVudCA9PiB7XG4gICAgICAgICAgY29uc3QgbW91c2VQb3NpdGlvbiA9IHRoaXMuZ2V0TW91c2VQb3MoZXZlbnQpO1xuICAgICAgICAgIHRoaXMuZG9FdmVudHMoZXZlbnQsIGV2ZW50TmFtZSwgbW91c2VQb3NpdGlvbik7XG4gICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgfSwgZmFsc2UpO1xuICAgICAgfSk7XG5cbiAgICAgIFtcInRvdWNoc3RhcnRcIiwgXCJ0b3VjaG1vdmVcIiwgXCJ0b3VjaGVuZFwiXS5mb3JFYWNoKGV2ZW50TmFtZSA9PiB7XG4gICAgICAgIHRoaXMuY2FudmFzLmFkZEV2ZW50TGlzdGVuZXIoZXZlbnROYW1lLCBldmVudCA9PiB7XG4gICAgICAgICAgY29uc3QgY2hhbmdlZFRvdWNoZXMgPSBldmVudC5jaGFuZ2VkVG91Y2hlc1swXTtcbiAgICAgICAgICBjb25zdCBwb3NpdGlvbiA9IHRoaXMuZ2V0TW91c2VQb3MoY2hhbmdlZFRvdWNoZXMpO1xuICAgICAgICAgIHRoaXMuZG9FdmVudHMoZXZlbnQsIGV2ZW50TmFtZSwgcG9zaXRpb24pO1xuICAgICAgICB9KTtcbiAgICAgIH0pO1xuXG4gICAgICB0aGlzLmluaXQgPSB0cnVlO1xuICAgIH1cbiAgfVxuXG4gIGRvRXZlbnRzKGV2ZW50LCBldmVudE5hbWUsIHBvc2l0aW9uKSB7XG4gICAgY29uc3QgY29tcG9uZW50cyA9IHRoaXMuZ2V0Q29tcG9uZW50c0F0UG9zaXRpb24ocG9zaXRpb24pOyAvLyBHZXQgYWxsIGVsZW1lbnRzIGF0IHRoZSBjdXJyZW50IHBvc2l0aW9uXG4gICAgdGhpcy5yZWFjdG9yLmRpc3BhdGNoRXZlbnQoZXZlbnROYW1lLCBldmVudCwgZmFsc2UpOyAvLyBEaXNwYXRjaCB0byBhbGwgY29tcG9uZW50cyB0byBkaXNhYmxlIHRoZW0gKGNhbGwgd2l0aCBmYWxzZSlcbiAgICBbLi4uY29tcG9uZW50c10ucmV2ZXJzZSgpLmZvckVhY2goY29tcG9uZW50ID0+IHRoaXMucmVhY3Rvci5kaXNwYXRjaEV2ZW50Q29tcG9uZW50KGV2ZW50TmFtZSwgY29tcG9uZW50LCBldmVudCwgdHJ1ZSkpOyAvLyBEaXNwYXRjaCB0byBjb21wb25lbnQgZGV0ZWN0ZWQgdG8gZW5hYmxlIHRoZW0gKGNhbGwgd2l0aCB0cnVlKVxuICB9XG5cbiAgYWRkRXZlbnRMaXN0ZW5lcihldmVudCwgY29tcG9uZW50LCBjYWxsYmFjaykge1xuICAgIHRoaXMucmVhY3Rvci5hZGRFdmVudExpc3RlbmVyKGV2ZW50LCBjb21wb25lbnQsIGNhbGxiYWNrKTtcbiAgfVxuICBcbiAgZ2V0TW91c2VQb3MoZXZlbnQpIHtcbiAgICByZXR1cm4gVXRpbHMuZ2V0TW91c2VQb3ModGhpcy5jYW52YXMsIGV2ZW50KTtcbiAgfVxuXG4gIGdldEFsbENvbXBvbmVudHMoc3RhcnQgPSB0aGlzLnNjZW5lKSB7XG4gICAgcmV0dXJuIHRoaXMuc2NlbmUuZ2V0QWxsQ29tcG9uZW50cyhzdGFydCk7XG4gIH1cblxuICBnZXRDb21wb25lbnRzQXRQb3NpdGlvbihtb3VzZVBvc2l0aW9uLCBzdGFydCA9IHRoaXMuc2NlbmUpIHtcbiAgICBjb25zdCBhbGxDb21wb25lbnRzID0gdGhpcy5zY2VuZS5nZXRDb21wb25lbnRzVHJlZShzdGFydCk7XG4gICAgY29uc3QgcmVzdWx0ID0gW3N0YXJ0XTtcblxuICAgIGlmKGFsbENvbXBvbmVudHMuY2hpbGRzKSB7XG4gICAgICBhbGxDb21wb25lbnRzLmNoaWxkcy5zb3J0KFNjZW5lLnNvcnRDb21wb25lbnRzVHJlZSkucmV2ZXJzZSgpLnNvbWUoY2hpbGQgPT4ge1xuICAgICAgICBpZihjaGlsZC5jb21wb25lbnQuaXNJbnNpZGUobW91c2VQb3NpdGlvbikgJiYgIWNoaWxkLmNvbXBvbmVudC5oaWRkZW4gJiYgIWNoaWxkLmNvbXBvbmVudC5kaXNhYmxlZCkge1xuICAgICAgICAgIHJlc3VsdC5wdXNoKC4uLnRoaXMuZ2V0Q29tcG9uZW50c0F0UG9zaXRpb24obW91c2VQb3NpdGlvbiwgY2hpbGQuY29tcG9uZW50KSk7XG4gICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH1cblxuICAgIHJldHVybiByZXN1bHQ7XG4gIH1cbn0iLCIvKlxuICogQ29weXJpZ2h0IChDKSAyMDIwIEVsaWFzdGlrIChlbGlhc3Rpa3NvZnRzLmNvbSlcbiAqXG4gKiBUaGlzIGZpbGUgaXMgcGFydCBvZiBcIkpTR2FtZVRvb2xzXCIuXG4gKlxuICogXCJKU0dhbWVUb29sc1wiIGlzIGZyZWUgc29mdHdhcmU6IHlvdSBjYW4gcmVkaXN0cmlidXRlIGl0IGFuZC9vciBtb2RpZnlcbiAqIGl0IHVuZGVyIHRoZSB0ZXJtcyBvZiB0aGUgR05VIEdlbmVyYWwgUHVibGljIExpY2Vuc2UgYXMgcHVibGlzaGVkIGJ5XG4gKiB0aGUgRnJlZSBTb2Z0d2FyZSBGb3VuZGF0aW9uLCBlaXRoZXIgdmVyc2lvbiAzIG9mIHRoZSBMaWNlbnNlLCBvclxuICogKGF0IHlvdXIgb3B0aW9uKSBhbnkgbGF0ZXIgdmVyc2lvbi5cbiAqXG4gKiBcIkpTR2FtZVRvb2xzXCIgaXMgZGlzdHJpYnV0ZWQgaW4gdGhlIGhvcGUgdGhhdCBpdCB3aWxsIGJlIHVzZWZ1bCxcbiAqIGJ1dCBXSVRIT1VUIEFOWSBXQVJSQU5UWTsgd2l0aG91dCBldmVuIHRoZSBpbXBsaWVkIHdhcnJhbnR5IG9mXG4gKiBNRVJDSEFOVEFCSUxJVFkgb3IgRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UuICBTZWUgdGhlXG4gKiBHTlUgR2VuZXJhbCBQdWJsaWMgTGljZW5zZSBmb3IgbW9yZSBkZXRhaWxzLlxuICpcbiAqIFlvdSBzaG91bGQgaGF2ZSByZWNlaXZlZCBhIGNvcHkgb2YgdGhlIEdOVSBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlXG4gKiBhbG9uZyB3aXRoIFwiSlNHYW1lVG9vbHNcIi4gIElmIG5vdCwgc2VlIDxodHRwOi8vd3d3LmdudS5vcmcvbGljZW5zZXMvPi5cbiAqL1xuaW1wb3J0IENvbXBvbmVudCBmcm9tIFwiLi9Db21wb25lbnRcIjtcbmltcG9ydCBDb25zdGFudHMgZnJvbSBcIi4vQ29uc3RhbnRzXCI7XG5pbXBvcnQgVXRpbHMgZnJvbSBcIi4vVXRpbHNcIjtcbmltcG9ydCBTdHlsZSBmcm9tIFwiLi9TdHlsZVwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDaXJjbGUgZXh0ZW5kcyBDb21wb25lbnQge1xuICBzZWxlY3RhYmxlID0gZmFsc2U7XG5cbiAgY29uc3RydWN0b3IoeCwgeSwgd2lkdGgsIHN0eWxlKSB7XG4gICAgc3VwZXIoeCwgeSwgd2lkdGgsIHdpZHRoLCBzdHlsZSk7XG4gIH1cblxuICBkcmF3KGNvbnRleHQpIHtcbiAgICBpZih0aGlzLmhpZGRlbikgcmV0dXJuO1xuICAgIHN1cGVyLmRyYXcoY29udGV4dCk7XG5cbiAgICBjb25zdCBjYW52YXMgPSBjb250ZXh0LmNhbnZhcztcbiAgICBjb25zdCBjdHggPSBjYW52YXMuZ2V0Q29udGV4dChcIjJkXCIpO1xuICAgIFxuICAgIFV0aWxzLmRyYXdDaXJjbGUoY3R4LCB0aGlzLngsIHRoaXMueSwgdGhpcy53aWR0aCwgdGhpcy5zdHlsZS5saW5lV2lkdGgsIHRoaXMuc3R5bGUuY29sb3IsIHRoaXMuc3R5bGUubGluZUNhcCwgdGhpcy5zdHlsZS5maWxsLCB0aGlzLnN0eWxlLmZpbGxDb2xvcik7XG5cbiAgICB0aGlzLmluaXQgPSB0cnVlO1xuICB9XG5cbiAgZ2V0IHdpZHRoKCkge1xuICAgIHJldHVybiBzdXBlci53aWR0aCArIHRoaXMuc3R5bGUubGluZVdpZHRoO1xuICB9XG5cbiAgZ2V0IGhlaWdodCgpIHtcbiAgICByZXR1cm4gc3VwZXIuaGVpZ2h0ICsgdGhpcy5zdHlsZS5saW5lV2lkdGg7XG4gIH1cblxuICBzZXQgd2lkdGgod2lkdGgpIHtcbiAgICBzdXBlci53aWR0aCA9IHdpZHRoO1xuICB9XG5cbiAgc2V0IGhlaWdodChoZWlnaHQpIHtcbiAgICBzdXBlci5oZWlnaHQgPSBoZWlnaHQ7XG4gIH1cblxuICBnZXQgZGVmYXVsdFN0eWxlKCkge1xuICAgIHJldHVybiBuZXcgU3R5bGUoe1xuICAgICAgXCJsaW5lV2lkdGhcIjogQ29uc3RhbnRzLlNldHRpbmcuQ0lSQ0xFX0RFRkFVTFRfTElORV9TSVpFLFxuICAgICAgXCJjb2xvclwiOiBDb25zdGFudHMuU2V0dGluZy5DSVJDTEVfREVGQVVMVF9DT0xPUixcbiAgICAgIFwiZmlsbFwiOiBDb25zdGFudHMuU2V0dGluZy5DSVJDTEVfREVGQVVMVF9GSUxMLFxuICAgICAgXCJsaW5lQ2FwXCI6IENvbnN0YW50cy5TZXR0aW5nLkNJUkNMRV9ERUZBVUxUX0xJTkVfQ0FQLFxuICAgICAgXCJmaWxsQ29sb3JcIjogQ29uc3RhbnRzLlNldHRpbmcuQ0lSQ0xFX0RFRkFVTFRfRklMTF9DT0xPUlxuICAgIH0pO1xuICB9XG59IiwiLypcbiAqIENvcHlyaWdodCAoQykgMjAyMCBFbGlhc3RpayAoZWxpYXN0aWtzb2Z0cy5jb20pXG4gKlxuICogVGhpcyBmaWxlIGlzIHBhcnQgb2YgXCJKU0dhbWVUb29sc1wiLlxuICpcbiAqIFwiSlNHYW1lVG9vbHNcIiBpcyBmcmVlIHNvZnR3YXJlOiB5b3UgY2FuIHJlZGlzdHJpYnV0ZSBpdCBhbmQvb3IgbW9kaWZ5XG4gKiBpdCB1bmRlciB0aGUgdGVybXMgb2YgdGhlIEdOVSBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlIGFzIHB1Ymxpc2hlZCBieVxuICogdGhlIEZyZWUgU29mdHdhcmUgRm91bmRhdGlvbiwgZWl0aGVyIHZlcnNpb24gMyBvZiB0aGUgTGljZW5zZSwgb3JcbiAqIChhdCB5b3VyIG9wdGlvbikgYW55IGxhdGVyIHZlcnNpb24uXG4gKlxuICogXCJKU0dhbWVUb29sc1wiIGlzIGRpc3RyaWJ1dGVkIGluIHRoZSBob3BlIHRoYXQgaXQgd2lsbCBiZSB1c2VmdWwsXG4gKiBidXQgV0lUSE9VVCBBTlkgV0FSUkFOVFk7IHdpdGhvdXQgZXZlbiB0aGUgaW1wbGllZCB3YXJyYW50eSBvZlxuICogTUVSQ0hBTlRBQklMSVRZIG9yIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFLiAgU2VlIHRoZVxuICogR05VIEdlbmVyYWwgUHVibGljIExpY2Vuc2UgZm9yIG1vcmUgZGV0YWlscy5cbiAqXG4gKiBZb3Ugc2hvdWxkIGhhdmUgcmVjZWl2ZWQgYSBjb3B5IG9mIHRoZSBHTlUgR2VuZXJhbCBQdWJsaWMgTGljZW5zZVxuICogYWxvbmcgd2l0aCBcIkpTR2FtZVRvb2xzXCIuICBJZiBub3QsIHNlZSA8aHR0cDovL3d3dy5nbnUub3JnL2xpY2Vuc2VzLz4uXG4gKi9cbmltcG9ydCBDb21wb25lbnQgZnJvbSBcIi4vQ29tcG9uZW50XCI7XG5pbXBvcnQgQ29udGFpbmVyIGZyb20gXCIuL0NvbnRhaW5lclwiO1xuaW1wb3J0IFV0aWxzIGZyb20gXCIuL1V0aWxzXCI7XG5pbXBvcnQgQ29uc3RhbnRzIGZyb20gXCIuL0NvbnN0YW50c1wiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDb2wgZXh0ZW5kcyBDb250YWluZXIge1xuICBzZWxlY3RhYmxlID0gZmFsc2U7XG4gICNfaW5uZXJIZWlnaHQgPSAwO1xuICAjX2lubmVyV2lkdGggPSAwO1xuXG4gIGNvbnN0cnVjdG9yKHgsIHksIG1heFdpZHRoLCBtYXhIZWlnaHQsIHN0eWxlLCAuLi5jb21wb25lbnRzKSB7XG4gICAgc3VwZXIoeCwgeSwgbWF4V2lkdGgsIG1heEhlaWdodCwgc3R5bGUsIC4uLmNvbXBvbmVudHMpO1xuXG4gICAgaWYoIUNvbnN0YW50cy5TZXR0aW5nLkRJU0FCTEVfRVhQRVJJTUVOVEFMX09QVElNSVpBVElPTlMpIHtcbiAgICAgIHRoaXMudXBkYXRlSW5uZXJXaWR0aCgpO1xuICAgICAgdGhpcy51cGRhdGVJbm5lckhlaWdodCgpO1xuICBcbiAgICAgIHRoaXMuYWRkQ2hhbmdlQWN0aW9uKCgpID0+IHtcbiAgICAgICAgdGhpcy51cGRhdGVJbm5lcldpZHRoKCk7XG4gICAgICAgIHRoaXMudXBkYXRlSW5uZXJIZWlnaHQoKTtcbiAgICAgIH0pO1xuICAgIH1cbiAgfVxuXG4gIGRyYXcoY29udGV4dCkge1xuICAgIGlmKHRoaXMuaGlkZGVuKSByZXR1cm47XG4gICAgc3VwZXIuZHJhdyhjb250ZXh0KTtcblxuICAgIGNvbnN0IGNhbnZhcyA9IGNvbnRleHQuY2FudmFzO1xuICAgIGNvbnN0IGN0eCA9IGNhbnZhcy5nZXRDb250ZXh0KFwiMmRcIik7XG4gICAgY3R4LnNhdmUoKTtcblxuICAgIGxldCBjdHhUZW1wID0gY3R4O1xuXG4gICAgaWYodGhpcy5pc0N1dHRpbmcpIHtcbiAgICAgIGN0eFRlbXAgPSB0aGlzLmNhbnZhc1RtcC5nZXRDb250ZXh0KFwiMmRcIik7XG4gICAgICBjdHhUZW1wLnNjYWxlKENvbnN0YW50cy5TZXR0aW5nLlBJWEVMX1JBVElPLCBDb25zdGFudHMuU2V0dGluZy5QSVhFTF9SQVRJTyk7XG4gICAgfVxuICBcbiAgICBpZihzdXBlci5jb21wb25lbnRzICE9IG51bGwpIHtcbiAgICAgIGxldCBjdXJyZW50WSA9IHRoaXMuc3R5bGUucGFkZGluZztcblxuICAgICAgc3VwZXIuY29tcG9uZW50cy5mb3JFYWNoKGNvbXBvbmVudCA9PiB7XG4gICAgICAgIGN1cnJlbnRZID0gdGhpcy5kcmF3Q29tcG9uZW50KGNvbXBvbmVudCwgY3VycmVudFksIGN0eFRlbXApO1xuICAgICAgfSk7XG4gICAgfVxuICAgIFxuICAgIGlmKHRoaXMuaXNDdXR0aW5nKSB7XG4gICAgICBVdGlscy5kcmF3SW1hZ2VEYXRhKGN0eCwgdGhpcy5jYW52YXNUbXAsIHRoaXMueCwgdGhpcy55LCB0aGlzLndpZHRoLCB0aGlzLmhlaWdodCwgdGhpcy54ICogQ29uc3RhbnRzLlNldHRpbmcuUElYRUxfUkFUSU8sIHRoaXMueSAqIENvbnN0YW50cy5TZXR0aW5nLlBJWEVMX1JBVElPLCB0aGlzLndpZHRoICogQ29uc3RhbnRzLlNldHRpbmcuUElYRUxfUkFUSU8sIHRoaXMuaGVpZ2h0ICogQ29uc3RhbnRzLlNldHRpbmcuUElYRUxfUkFUSU8pO1xuICAgIH1cbiAgICBcbiAgICBzdXBlci5kcmF3U2Nyb2xsYmFycyhjdHgpO1xuICAgIFxuICAgIGN0eC5yZXN0b3JlKCk7XG4gIH1cblxuICBkcmF3Q29tcG9uZW50KGNvbXBvbmVudCwgY3VycmVudFksIGN0eCkge1xuICAgIGlmKGNvbXBvbmVudCBpbnN0YW5jZW9mIENvbXBvbmVudCkge1xuICAgICAgY29tcG9uZW50LnggPSB0aGlzLnN0eWxlLnBhZGRpbmcgLSB0aGlzLm9mZnNldFNjcm9sbFg7XG4gICAgICBjb21wb25lbnQueSA9IGN1cnJlbnRZIC0gdGhpcy5vZmZzZXRTY3JvbGxZO1xuICAgICAgXG4gICAgICBpZighY29tcG9uZW50LmhpZGRlbikge1xuICAgICAgICBpZih0aGlzLmlzQ29tcG9uZW50VmlzaWJsZShjb21wb25lbnQpKSB7XG4gICAgICAgICAgY29tcG9uZW50LmRyYXcoY3R4KTtcbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgY3VycmVudFkgKz0gY29tcG9uZW50LmhlaWdodCArIHRoaXMuc3R5bGUuc3BhY2VCZXR3ZWVuQ29tcG9uZW50cztcbiAgICAgIH1cbiAgICB9XG4gICAgXG4gICAgcmV0dXJuIGN1cnJlbnRZO1xuICB9XG5cbiAgdXBkYXRlSW5uZXJIZWlnaHQoKSB7XG4gICAgbGV0IHRvdGFsSGVpZ2h0ID0gMDtcbiAgICBzdXBlci5jb21wb25lbnRzLmZvckVhY2goY29tcG9uZW50ID0+IHsgaWYoIWNvbXBvbmVudC5oaWRkZW4pIHRvdGFsSGVpZ2h0ICs9IGNvbXBvbmVudC5oZWlnaHQgfSk7XG4gICAgdGhpcy4jX2lubmVySGVpZ2h0ID0gdG90YWxIZWlnaHQgKyB0aGlzLnN0eWxlLnNwYWNlQmV0d2VlbkNvbXBvbmVudHMgKiAoc3VwZXIuY29tcG9uZW50cy5sZW5ndGggLSAxKSArIHRoaXMuc3R5bGUucGFkZGluZztcbiAgfVxuXG4gIHVwZGF0ZUlubmVyV2lkdGgoKSB7XG4gICAgbGV0IG1heFdpZHRoID0gMDtcbiAgICBzdXBlci5jb21wb25lbnRzLmZvckVhY2goY29tcG9uZW50ID0+IHsgaWYoY29tcG9uZW50LndpZHRoID4gbWF4V2lkdGggJiYgIWNvbXBvbmVudC5oaWRkZW4pIG1heFdpZHRoID0gY29tcG9uZW50LndpZHRoOyB9KTtcbiAgICB0aGlzLiNfaW5uZXJXaWR0aCA9IG1heFdpZHRoICsgdGhpcy5zdHlsZS5wYWRkaW5nO1xuICB9XG5cbiAgZ2V0IGlubmVySGVpZ2h0KCkge1xuICAgIGlmKENvbnN0YW50cy5TZXR0aW5nLkRJU0FCTEVfRVhQRVJJTUVOVEFMX09QVElNSVpBVElPTlMpIHRoaXMudXBkYXRlSW5uZXJIZWlnaHQoKTtcbiAgICByZXR1cm4gdGhpcy4jX2lubmVySGVpZ2h0O1xuICB9XG5cbiAgZ2V0IGlubmVyV2lkdGgoKSB7XG4gICAgaWYoQ29uc3RhbnRzLlNldHRpbmcuRElTQUJMRV9FWFBFUklNRU5UQUxfT1BUSU1JWkFUSU9OUykgdGhpcy51cGRhdGVJbm5lcldpZHRoKCk7XG4gICAgcmV0dXJuIHRoaXMuI19pbm5lcldpZHRoO1xuICB9XG5cbiAgZ2V0IHdpZHRoKCkge1xuICAgIGNvbnN0IHdpZHRoID0gdGhpcy5pbm5lcldpZHRoIHx8ICh0aGlzLnBhcmVudCAmJiB0aGlzLnBhcmVudC53aWR0aCk7XG4gICAgY29uc3QgbWluID0gdGhpcy5tYXhXaWR0aCAhPSBudWxsID8gTWF0aC5taW4odGhpcy5tYXhXaWR0aCwgd2lkdGgpIDogbnVsbDtcbiAgICByZXR1cm4gdGhpcy5taW5XaWR0aCAhPSBudWxsID8gTWF0aC5tYXgodGhpcy5taW5XaWR0aCwgbWluICE9IG51bGwgPyBtaW4gOiB3aWR0aCkgOiBtaW4gIT0gbnVsbCA/IG1pbiA6IHdpZHRoO1xuICB9XG5cbiAgZ2V0IGhlaWdodCgpIHtcbiAgICBjb25zdCBoZWlnaHQgPSB0aGlzLmlubmVySGVpZ2h0IHx8ICh0aGlzLnBhcmVudCAmJiB0aGlzLnBhcmVudC5oZWlnaHQpO1xuICAgIGNvbnN0IG1pbiA9IHRoaXMubWF4SGVpZ2h0ICE9IG51bGwgPyBNYXRoLm1pbih0aGlzLm1heEhlaWdodCwgaGVpZ2h0KSA6IG51bGw7XG4gICAgcmV0dXJuIHRoaXMubWluSGVpZ2h0ICE9IG51bGwgPyBNYXRoLm1heCh0aGlzLm1pbkhlaWdodCwgbWluICE9IG51bGwgPyBtaW4gOiBoZWlnaHQpIDogbWluICE9IG51bGwgPyBtaW4gOiBoZWlnaHQ7XG4gIH1cblxuICBnZXQgZGVmYXVsdFN0eWxlKCkge1xuICAgIHJldHVybiBzdXBlci5kZWZhdWx0U3R5bGU7XG4gIH1cbn0iLCIvKlxuICogQ29weXJpZ2h0IChDKSAyMDIwIEVsaWFzdGlrIChlbGlhc3Rpa3NvZnRzLmNvbSlcbiAqXG4gKiBUaGlzIGZpbGUgaXMgcGFydCBvZiBcIkpTR2FtZVRvb2xzXCIuXG4gKlxuICogXCJKU0dhbWVUb29sc1wiIGlzIGZyZWUgc29mdHdhcmU6IHlvdSBjYW4gcmVkaXN0cmlidXRlIGl0IGFuZC9vciBtb2RpZnlcbiAqIGl0IHVuZGVyIHRoZSB0ZXJtcyBvZiB0aGUgR05VIEdlbmVyYWwgUHVibGljIExpY2Vuc2UgYXMgcHVibGlzaGVkIGJ5XG4gKiB0aGUgRnJlZSBTb2Z0d2FyZSBGb3VuZGF0aW9uLCBlaXRoZXIgdmVyc2lvbiAzIG9mIHRoZSBMaWNlbnNlLCBvclxuICogKGF0IHlvdXIgb3B0aW9uKSBhbnkgbGF0ZXIgdmVyc2lvbi5cbiAqXG4gKiBcIkpTR2FtZVRvb2xzXCIgaXMgZGlzdHJpYnV0ZWQgaW4gdGhlIGhvcGUgdGhhdCBpdCB3aWxsIGJlIHVzZWZ1bCxcbiAqIGJ1dCBXSVRIT1VUIEFOWSBXQVJSQU5UWTsgd2l0aG91dCBldmVuIHRoZSBpbXBsaWVkIHdhcnJhbnR5IG9mXG4gKiBNRVJDSEFOVEFCSUxJVFkgb3IgRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UuICBTZWUgdGhlXG4gKiBHTlUgR2VuZXJhbCBQdWJsaWMgTGljZW5zZSBmb3IgbW9yZSBkZXRhaWxzLlxuICpcbiAqIFlvdSBzaG91bGQgaGF2ZSByZWNlaXZlZCBhIGNvcHkgb2YgdGhlIEdOVSBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlXG4gKiBhbG9uZyB3aXRoIFwiSlNHYW1lVG9vbHNcIi4gIElmIG5vdCwgc2VlIDxodHRwOi8vd3d3LmdudS5vcmcvbGljZW5zZXMvPi5cbiAqL1xuaW1wb3J0IENvbnN0YW50cyBmcm9tIFwiLi9Db25zdGFudHNcIjtcbmltcG9ydCBTdHlsZSBmcm9tIFwiLi9TdHlsZVwiO1xuaW1wb3J0IFJlYWN0b3IgZnJvbSBcIi4vUmVhY3RvclwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDb21wb25lbnQge1xuICBzZWxlY3RhYmxlID0gdHJ1ZTtcbiAgI193aWR0aCA9IDA7XG4gICNfaGVpZ2h0ID0gMDtcbiAgI194ID0gMDtcbiAgI195ID0gMDtcbiAgI19kaXNhYmxlZCA9IGZhbHNlO1xuICAjX3NlbGVjdGVkID0gZmFsc2U7XG4gICNfc3R5bGU7XG5cbiAgY29uc3RydWN0b3IoeCwgeSwgd2lkdGgsIGhlaWdodCwgc3R5bGUpIHtcbiAgICB0aGlzLiNfeCA9IHggfHwgMDtcbiAgICB0aGlzLiNfeSA9IHkgfHwgMDtcbiAgICB0aGlzLmRlbHRhWCA9IDA7XG4gICAgdGhpcy5kZWx0YVkgPSAwO1xuICAgIHRoaXMuI193aWR0aCA9IHdpZHRoO1xuICAgIHRoaXMuI19oZWlnaHQgPSBoZWlnaHQ7XG4gICAgdGhpcy5jYW52YXM7XG4gICAgdGhpcy5wYXJlbnQ7XG5cbiAgICAvLyBTdHlsZVxuICAgIHRoaXMuc3R5bGUgPSBzdHlsZTtcbiAgICBcbiAgICAvLyBGdW5jdGlvbnMgdHJpZ2dlcmVkIGJ5IGV2ZW50c1xuICAgIHRoaXMucmVhY3RvciA9IG5ldyBSZWFjdG9yKCk7XG4gICAgdGhpcy5yZWFjdG9yLnJlZ2lzdGVyRXZlbnQoXCJvbkNsaWNrXCIpO1xuICAgIHRoaXMucmVhY3Rvci5yZWdpc3RlckV2ZW50KFwib25Ib3ZlclwiKTtcbiAgICB0aGlzLnJlYWN0b3IucmVnaXN0ZXJFdmVudChcIm9uRG93blwiKTtcbiAgICB0aGlzLnJlYWN0b3IucmVnaXN0ZXJFdmVudChcIm9uU2Nyb2xsXCIpO1xuICAgIHRoaXMucmVhY3Rvci5yZWdpc3RlckV2ZW50KFwib25Nb3ZlXCIpO1xuICAgIHRoaXMucmVhY3Rvci5yZWdpc3RlckV2ZW50KFwib25VcFwiKTtcbiAgICB0aGlzLnJlYWN0b3IucmVnaXN0ZXJFdmVudChcIm9uQ2hhbmdlXCIpO1xuXG4gICAgLy8gU3RhdGVcbiAgICB0aGlzLmluaXQgPSBmYWxzZTtcbiAgICB0aGlzLmhhc0luaXRFdmVudHMgPSBmYWxzZTtcbiAgICB0aGlzLiNfc2VsZWN0ZWQgPSBmYWxzZTtcbiAgICB0aGlzLmNsaWNrZWQgPSBmYWxzZTtcbiAgICB0aGlzLmhvdmVyZWQgPSBmYWxzZTtcbiAgICB0aGlzLiNfZGlzYWJsZWQgPSBmYWxzZTtcbiAgICB0aGlzLm1vdmFibGUgPSBmYWxzZTtcblxuICAgIC8vIFNjcm9sbCBzdGF0ZVxuICAgIHRoaXMub2Zmc2V0U2Nyb2xsWCA9IDA7XG4gICAgdGhpcy5vZmZzZXRTY3JvbGxZID0gMDtcblxuICAgIC8vIE1vdmUgZXZlbnRcbiAgICB0aGlzLm9mZnNldE1vdmVYID0gMDtcbiAgICB0aGlzLm9mZnNldE1vdmVZID0gMDtcbiAgICB0aGlzLm1vdmVFdmVudFN0YXJ0WCA9IDA7XG4gICAgdGhpcy5tb3ZlRXZlbnRTdGFydFkgPSAwO1xuXG4gICAgLy8gVG91Y2ggZXZlbnRzXG4gICAgdGhpcy50b3VjaEV2ZW50U3RhcnRYID0gMDtcbiAgICB0aGlzLnRvdWNoRXZlbnRTdGFydFkgPSAwO1xuICAgIHRoaXMudG91Y2hFdmVudFN0YXJ0VGltZXN0YW1wID0gMDtcblxuICAgIHRoaXMudG9vbHRpcDtcbiAgICB0aGlzLmluaXRFdmVudHMoKTtcblxuICAgIHRoaXMuYWRkTW92ZUFjdGlvbigoZGVsdGFYLCBkZWx0YVkpID0+IHtcbiAgICAgIGlmKHRoaXMubW92YWJsZSAmJiAhdGhpcy5kaXNhYmxlZCAmJiB0aGlzLmNsaWNrZWQpIHtcbiAgICAgICAgdGhpcy5kZWx0YVggLT0gZGVsdGFYO1xuICAgICAgICB0aGlzLmRlbHRhWSAtPSBkZWx0YVk7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICBpbml0RXZlbnRzKCkge1xuICAgIGlmKCF0aGlzLmhhc0luaXRFdmVudHMgJiYgdGhpcy5jYW52YXMgIT0gbnVsbCkge1xuICAgICAgdGhpcy5jYW52YXMuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlbW92ZVwiLCB0aGlzLCAoZXZlbnQsIHJlc3VsdCkgPT4ge1xuICAgICAgICBpZighdGhpcy5kaXNhYmxlZCkge1xuICAgICAgICAgIGNvbnN0IG1vdXNlUG9zaXRpb24gPSB0aGlzLmdldE1vdXNlUG9zKGV2ZW50KTtcblxuICAgICAgICAgIGlmKHRoaXMuY2xpY2tlZCkge1xuICAgICAgICAgICAgY29uc3QgZGVsdGFYID0gLWV2ZW50Lm1vdmVtZW50WDtcbiAgICAgICAgICAgIGNvbnN0IGRlbHRhWSA9IC1ldmVudC5tb3ZlbWVudFk7XG5cbiAgICAgICAgICAgIHRoaXMub2Zmc2V0TW92ZVggKz0gZGVsdGFYO1xuICAgICAgICAgICAgdGhpcy5vZmZzZXRNb3ZlWSArPSBkZWx0YVk7XG5cbiAgICAgICAgICAgIGlmKHRoaXMucmVhY3Rvcikge1xuICAgICAgICAgICAgICB0aGlzLnJlYWN0b3IuZGlzcGF0Y2hFdmVudChcIm9uTW92ZVwiLCBkZWx0YVgsIGRlbHRhWSwgbW91c2VQb3NpdGlvbik7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIHRoaXMubW92ZUV2ZW50U3RhcnRYID0gbW91c2VQb3NpdGlvbi54O1xuICAgICAgICAgICAgdGhpcy5tb3ZlRXZlbnRTdGFydFkgPSBtb3VzZVBvc2l0aW9uLnk7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgaWYocmVzdWx0KSB7XG4gICAgICAgICAgICBpZih0aGlzLnJlYWN0b3IgJiYgIXRoaXMuZGlzYWJsZWQpIHtcbiAgICAgICAgICAgICAgdGhpcy5yZWFjdG9yLmRpc3BhdGNoRXZlbnQoXCJvbkhvdmVyXCIsIG1vdXNlUG9zaXRpb24pO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZih0aGlzLnRvb2x0aXApIHtcbiAgICAgICAgICAgICAgdGhpcy50b29sdGlwLnggPSBtb3VzZVBvc2l0aW9uLnggKyAxMDtcbiAgICAgICAgICAgICAgdGhpcy50b29sdGlwLnkgPSBtb3VzZVBvc2l0aW9uLnkgKyAxMDtcbiAgICAgICAgICAgICAgdGhpcy50b29sdGlwLmVuYWJsZSgpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgXG4gICAgICAgICAgICB0aGlzLmhvdmVyZWQgPSB0cnVlO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLmhvdmVyZWQgPSBmYWxzZTtcbiAgICAgICAgICAgIGlmKHRoaXMudG9vbHRpcCkgdGhpcy50b29sdGlwLmRpc2FibGUoKVxuICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB0aGlzLmhvdmVyZWQgPSBmYWxzZTtcbiAgICAgICAgICB0aGlzLmNsaWNrZWQgPSBmYWxzZTtcbiAgICAgICAgICBpZih0aGlzLnRvb2x0aXApIHRoaXMudG9vbHRpcC5kaXNhYmxlKCk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgICAgXG4gICAgICB0aGlzLmNhbnZhcy5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgdGhpcywgKGV2ZW50LCByZXN1bHQpID0+IHtcbiAgICAgICAgaWYoIXRoaXMuZGlzYWJsZWQpIHtcbiAgICAgICAgICBjb25zdCBtb3VzZVBvc2l0aW9uID0gdGhpcy5nZXRNb3VzZVBvcyhldmVudCk7XG5cbiAgICAgICAgICBpZihyZXN1bHQgJiYgdGhpcy5ob3ZlcmVkKSB7XG4gICAgICAgICAgICBpZih0aGlzLnJlYWN0b3IpIHtcbiAgICAgICAgICAgICAgdGhpcy5yZWFjdG9yLmRpc3BhdGNoRXZlbnQoXCJvbkNsaWNrXCIsIG1vdXNlUG9zaXRpb24pO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB0aGlzLnNlbGVjdGVkID0gdHJ1ZTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5jbGlja2VkID0gZmFsc2U7XG4gICAgICAgICAgICB0aGlzLnNlbGVjdGVkID0gZmFsc2U7XG4gICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHRoaXMuaG92ZXJlZCA9IGZhbHNlO1xuICAgICAgICAgIHRoaXMuY2xpY2tlZCA9IGZhbHNlO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICAgIFxuICAgICAgdGhpcy5jYW52YXMuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlZG93blwiLCB0aGlzLCAoZXZlbnQsIHJlc3VsdCkgPT4ge1xuICAgICAgICBpZighdGhpcy5kaXNhYmxlZCkge1xuICAgICAgICAgIGNvbnN0IG1vdXNlUG9zaXRpb24gPSB0aGlzLmdldE1vdXNlUG9zKGV2ZW50KTtcblxuICAgICAgICAgIGlmKHJlc3VsdCkge1xuICAgICAgICAgICAgaWYodGhpcy5yZWFjdG9yKSB7XG4gICAgICAgICAgICAgIHRoaXMucmVhY3Rvci5kaXNwYXRjaEV2ZW50KFwib25Eb3duXCIsIG1vdXNlUG9zaXRpb24pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgXG4gICAgICAgICAgICB0aGlzLmNsaWNrZWQgPSB0cnVlO1xuICAgICAgICAgICAgdGhpcy5tb3ZlRXZlbnRTdGFydFggPSBtb3VzZVBvc2l0aW9uLng7XG4gICAgICAgICAgICB0aGlzLm1vdmVFdmVudFN0YXJ0WSA9IG1vdXNlUG9zaXRpb24ueTtcbiAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdGhpcy5ob3ZlcmVkID0gZmFsc2U7XG4gICAgICAgICAgdGhpcy5jbGlja2VkID0gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgICAgXG4gICAgICB0aGlzLmNhbnZhcy5hZGRFdmVudExpc3RlbmVyKFwibW91c2V1cFwiLCB0aGlzLCAoZXZlbnQpID0+IHtcbiAgICAgICAgaWYoIXRoaXMuZGlzYWJsZWQpIHtcbiAgICAgICAgICBjb25zdCBtb3VzZVBvc2l0aW9uID0gdGhpcy5nZXRNb3VzZVBvcyhldmVudCk7XG5cbiAgICAgICAgICBpZih0aGlzLnJlYWN0b3IpIHtcbiAgICAgICAgICAgIHRoaXMucmVhY3Rvci5kaXNwYXRjaEV2ZW50KFwib25VcFwiLCBtb3VzZVBvc2l0aW9uKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgXG4gICAgICAgICAgdGhpcy5jbGlja2VkID0gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuXG4gICAgICB0aGlzLmNhbnZhcy5hZGRFdmVudExpc3RlbmVyKFwid2hlZWxcIiwgdGhpcywgKGV2ZW50KSA9PiB7XG4gICAgICAgIGlmKHRoaXMuaG92ZXJlZCAmJiAhdGhpcy5kaXNhYmxlZCAmJiAhdGhpcy5zY3JvbGxEaXNhYmxlZCkge1xuICAgICAgICAgIHRoaXMub2Zmc2V0U2Nyb2xsWCArPSBldmVudC5kZWx0YVg7XG4gICAgICAgICAgdGhpcy5vZmZzZXRTY3JvbGxZICs9IGV2ZW50LmRlbHRhWTtcblxuICAgICAgICAgIGlmKHRoaXMucmVhY3Rvcikge1xuICAgICAgICAgICAgdGhpcy5yZWFjdG9yLmRpc3BhdGNoRXZlbnQoXCJvblNjcm9sbFwiLCBldmVudC5kZWx0YVgsIGV2ZW50LmRlbHRhWSk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9KTtcblxuICAgICAgY29uc3QgdG91Y2hTY3JvbGxFdmVudCA9IChldmVudCkgPT4ge1xuICAgICAgICBjb25zdCBjaGFuZ2VkVG91Y2hlcyA9IGV2ZW50LmNoYW5nZWRUb3VjaGVzWzBdO1xuICAgICAgICBjb25zdCBwb3NpdGlvbiA9IHRoaXMuZ2V0TW91c2VQb3MoY2hhbmdlZFRvdWNoZXMpO1xuXG4gICAgICAgIGlmKHRoaXMuaG92ZXJlZCAmJiAhdGhpcy5kaXNhYmxlZCAmJiAhdGhpcy5zY3JvbGxEaXNhYmxlZCkge1xuICAgICAgICAgIGNvbnN0IGRlbHRhWCA9IHRoaXMudG91Y2hFdmVudFN0YXJ0WCAtIHBvc2l0aW9uLng7XG4gICAgICAgICAgY29uc3QgZGVsdGFZID0gdGhpcy50b3VjaEV2ZW50U3RhcnRZIC0gcG9zaXRpb24ueTtcblxuICAgICAgICAgIHRoaXMub2Zmc2V0U2Nyb2xsWCArPSBkZWx0YVg7XG4gICAgICAgICAgdGhpcy5vZmZzZXRTY3JvbGxZICs9IGRlbHRhWTtcblxuICAgICAgICAgIGlmKHRoaXMucmVhY3Rvcikge1xuICAgICAgICAgICAgdGhpcy5yZWFjdG9yLmRpc3BhdGNoRXZlbnQoXCJvblNjcm9sbFwiLCBkZWx0YVgsIGRlbHRhWSwgcG9zaXRpb24pO1xuICAgICAgICAgIH1cbiAgICAgICAgICBcbiAgICAgICAgICB0aGlzLnRvdWNoRXZlbnRTdGFydFggPSBwb3NpdGlvbi54O1xuICAgICAgICAgIHRoaXMudG91Y2hFdmVudFN0YXJ0WSA9IHBvc2l0aW9uLnk7XG4gICAgICAgIH1cbiAgICAgIH07XG5cbiAgICAgIGNvbnN0IHRvdWNoU3RhcnRFbmRFdmVudCA9IChldmVudCwgcmVzdWx0KSA9PiB7XG4gICAgICAgIGNvbnN0IGNoYW5nZWRUb3VjaGVzID0gZXZlbnQuY2hhbmdlZFRvdWNoZXNbMF07XG4gICAgICAgIGNvbnN0IHBvc2l0aW9uID0gdGhpcy5nZXRNb3VzZVBvcyhjaGFuZ2VkVG91Y2hlcyk7XG4gICAgICAgIFxuICAgICAgICBpZihyZXN1bHQpIHtcbiAgICAgICAgICB0aGlzLmhvdmVyZWQgPSB0cnVlO1xuICAgICAgICAgIHRoaXMuc2VsZWN0ZWQgPSB0cnVlO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHRoaXMuaG92ZXJlZCA9IGZhbHNlO1xuICAgICAgICAgIHRoaXMuc2VsZWN0ZWQgPSBmYWxzZTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmKHRoaXMuaG92ZXJlZCAmJiAhdGhpcy5kaXNhYmxlZCkge1xuICAgICAgICAgIHRoaXMudG91Y2hFdmVudFN0YXJ0WCA9IHBvc2l0aW9uLng7XG4gICAgICAgICAgdGhpcy50b3VjaEV2ZW50U3RhcnRZID0gcG9zaXRpb24ueTtcbiAgICAgICAgICB0aGlzLnRvdWNoRXZlbnRTdGFydFRpbWVzdGFtcCA9IGV2ZW50LnRpbWVzdGFtcDtcbiAgICAgICAgfVxuICAgICAgfTtcblxuICAgICAgdGhpcy5jYW52YXMuYWRkRXZlbnRMaXN0ZW5lcihcInRvdWNoc3RhcnRcIiwgdGhpcywgdG91Y2hTdGFydEVuZEV2ZW50KTtcbiAgICAgIHRoaXMuY2FudmFzLmFkZEV2ZW50TGlzdGVuZXIoXCJ0b3VjaGVuZFwiLCB0aGlzLCB0b3VjaFN0YXJ0RW5kRXZlbnQpO1xuXG4gICAgICB0aGlzLmNhbnZhcy5hZGRFdmVudExpc3RlbmVyKFwidG91Y2htb3ZlXCIsIHRoaXMsIChldmVudCkgPT4ge1xuICAgICAgICB0b3VjaFNjcm9sbEV2ZW50KGV2ZW50KTtcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgIH0pO1xuXG4gICAgICB0aGlzLmhhc0luaXRFdmVudHMgPSB0cnVlO1xuICAgIH1cbiAgfVxuXG4gIGRyYXcoY29udGV4dCkge1xuICAgIGlmKHRoaXMuaGlkZGVuKSByZXR1cm47XG4gICAgdGhpcy5pbml0RXZlbnRzKCk7XG5cbiAgICBpZih0aGlzLmRpc2FibGVkKSB7XG4gICAgICB0aGlzLnNlbGVjdGVkID0gZmFsc2U7XG4gICAgICB0aGlzLmNsaWNrZWQgPSBmYWxzZTtcbiAgICAgIHRoaXMuaG92ZXJlZCA9IGZhbHNlO1xuICAgICAgaWYodGhpcy50b29sdGlwKSB0aGlzLnRvb2x0aXAuZGlzYWJsZWQgPSB0cnVlO1xuICAgIH1cbiAgfVxuICBcbiAgZ2V0TW91c2VQb3MoZXZlbnQpIHtcbiAgICByZXR1cm4gdGhpcy5jYW52YXMuZ2V0TW91c2VQb3MoZXZlbnQpO1xuICB9XG4gIFxuICBpc0luc2lkZShwb3MpIHtcbiAgICByZXR1cm4gcG9zLnggPiB0aGlzLnggJiYgcG9zLnggPCB0aGlzLnggKyB0aGlzLndpZHRoICYmIHBvcy55IDwgdGhpcy55ICsgdGhpcy5oZWlnaHQgJiYgcG9zLnkgPiB0aGlzLnk7XG4gIH1cbiAgXG4gIGRpc2FibGUoKSB7XG4gICAgdGhpcy5kaXNhYmxlZCA9IHRydWU7XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cbiAgXG4gIGVuYWJsZSgpIHtcbiAgICB0aGlzLmRpc2FibGVkID0gZmFsc2U7XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cblxuICBnZXQgZGlzYWJsZWQoKSB7XG4gICAgcmV0dXJuIHRoaXMuI19kaXNhYmxlZCB8fCAodGhpcy5wYXJlbnQgJiYgdGhpcy5wYXJlbnQuZGlzYWJsZWQpO1xuICB9XG5cbiAgc2V0IGRpc2FibGVkKGRpc2FibGVkKSB7XG4gICAgaWYoZGlzYWJsZWQgIT0gdGhpcy4jX2Rpc2FibGVkKSB7XG4gICAgICB0aGlzLiNfZGlzYWJsZWQgPSBkaXNhYmxlZDtcbiAgICAgIHRoaXMucmVhY3RvciAmJiB0aGlzLnJlYWN0b3IuZGlzcGF0Y2hFdmVudChcIm9uQ2hhbmdlXCIsIHRoaXMpO1xuICAgIH1cbiAgfVxuXG4gIHNldENsaWNrQWN0aW9uKHRyaWdnZXIpIHtcbiAgICB0aGlzLnJlbW92ZUFsbENsaWNrQWN0aW9ucygpO1xuICAgIHRoaXMuYWRkQ2xpY2tBY3Rpb24odHJpZ2dlcik7XG4gIH1cbiAgXG4gIGFkZENsaWNrQWN0aW9uKHRyaWdnZXIpIHtcbiAgICB0aGlzLnJlYWN0b3IuYWRkRXZlbnRMaXN0ZW5lcihcIm9uQ2xpY2tcIiwgdHJpZ2dlcik7XG4gIH1cbiAgXG4gIHJlbW92ZUNsaWNrQWN0aW9uKHRyaWdnZXIpIHtcbiAgICB0aGlzLnJlYWN0b3IucmVtb3ZlRXZlbnRMaXN0ZW5lcihcIm9uQ2xpY2tcIiwgdHJpZ2dlcik7XG4gIH1cblxuICByZW1vdmVBbGxDbGlja0FjdGlvbnMoKSB7XG4gICAgdGhpcy5yZWFjdG9yLnJlbW92ZUFsbEV2ZW50TGlzdGVuZXIoXCJvbkNsaWNrXCIpO1xuICB9XG5cbiAgc2V0SG92ZXJBY3Rpb24odHJpZ2dlcikge1xuICAgIHRoaXMucmVtb3ZlQWxsSG92ZXJBY3Rpb25zKCk7XG4gICAgdGhpcy5hZGRIb3ZlckFjdGlvbih0cmlnZ2VyKTtcbiAgfVxuICBcbiAgYWRkSG92ZXJBY3Rpb24odHJpZ2dlcikge1xuICAgIHRoaXMucmVhY3Rvci5hZGRFdmVudExpc3RlbmVyKFwib25Ib3ZlclwiLCB0cmlnZ2VyKTtcbiAgfVxuICBcbiAgcmVtb3ZlSG92ZXJBY3Rpb24odHJpZ2dlcikge1xuICAgIHRoaXMucmVhY3Rvci5yZW1vdmVFdmVudExpc3RlbmVyKFwib25Ib3ZlclwiLCB0cmlnZ2VyKTtcbiAgfVxuXG4gIHJlbW92ZUFsbEhvdmVyQWN0aW9ucygpIHtcbiAgICB0aGlzLnJlYWN0b3IucmVtb3ZlQWxsRXZlbnRMaXN0ZW5lcihcIm9uSG92ZXJcIik7XG4gIH1cblxuICBzZXREb3duQWN0aW9uKHRyaWdnZXIpIHtcbiAgICB0aGlzLnJlbW92ZUFsbERvd25BY3Rpb25zKCk7XG4gICAgdGhpcy5hZGREb3duQWN0aW9uKHRyaWdnZXIpO1xuICB9XG4gIFxuICBhZGREb3duQWN0aW9uKHRyaWdnZXIpIHtcbiAgICB0aGlzLnJlYWN0b3IuYWRkRXZlbnRMaXN0ZW5lcihcIm9uRG93blwiLCB0cmlnZ2VyKTtcbiAgfVxuICBcbiAgcmVtb3ZlRG93bkFjdGlvbih0cmlnZ2VyKSB7XG4gICAgdGhpcy5yZWFjdG9yLnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJvbkRvd25cIiwgdHJpZ2dlcik7XG4gIH1cblxuICByZW1vdmVBbGxEb3duQWN0aW9ucygpIHtcbiAgICB0aGlzLnJlYWN0b3IucmVtb3ZlQWxsRXZlbnRMaXN0ZW5lcihcIm9uRG93blwiKTtcbiAgfVxuXG4gIHNldFNjcm9sbEFjdGlvbih0cmlnZ2VyKSB7XG4gICAgdGhpcy5yZW1vdmVBbGxTY3JvbGxBY3Rpb25zKCk7XG4gICAgdGhpcy5hZGRTY3JvbGxBY3Rpb24odHJpZ2dlcik7XG4gIH1cbiAgXG4gIGFkZFNjcm9sbEFjdGlvbih0cmlnZ2VyKSB7XG4gICAgdGhpcy5yZWFjdG9yLmFkZEV2ZW50TGlzdGVuZXIoXCJvblNjcm9sbFwiLCB0cmlnZ2VyKTtcbiAgfVxuICBcbiAgcmVtb3ZlU2Nyb2xsQWN0aW9uKHRyaWdnZXIpIHtcbiAgICB0aGlzLnJlYWN0b3IucmVtb3ZlRXZlbnRMaXN0ZW5lcihcIm9uU2Nyb2xsXCIsIHRyaWdnZXIpO1xuICB9XG5cbiAgcmVtb3ZlQWxsU2Nyb2xsQWN0aW9ucygpIHtcbiAgICB0aGlzLnJlYWN0b3IucmVtb3ZlQWxsRXZlbnRMaXN0ZW5lcihcIm9uU2Nyb2xsXCIpO1xuICB9XG5cbiAgc2V0TW92ZUFjdGlvbih0cmlnZ2VyKSB7XG4gICAgdGhpcy5yZW1vdmVBbGxNb3ZlQWN0aW9ucygpO1xuICAgIHRoaXMuYWRkTW92ZUFjdGlvbih0cmlnZ2VyKTtcbiAgfVxuICBcbiAgYWRkTW92ZUFjdGlvbih0cmlnZ2VyKSB7XG4gICAgdGhpcy5yZWFjdG9yLmFkZEV2ZW50TGlzdGVuZXIoXCJvbk1vdmVcIiwgdHJpZ2dlcik7XG4gIH1cbiAgXG4gIHJlbW92ZU1vdmVBY3Rpb24odHJpZ2dlcikge1xuICAgIHRoaXMucmVhY3Rvci5yZW1vdmVFdmVudExpc3RlbmVyKFwib25Nb3ZlXCIsIHRyaWdnZXIpO1xuICB9XG5cbiAgcmVtb3ZlQWxsTW92ZUFjdGlvbnMoKSB7XG4gICAgdGhpcy5yZWFjdG9yLnJlbW92ZUFsbEV2ZW50TGlzdGVuZXIoXCJvbk1vdmVcIik7XG4gIH1cbiAgXG4gIHNldENoYW5nZUFjdGlvbih0cmlnZ2VyKSB7XG4gICAgdGhpcy5yZW1vdmVBbGxDaGFuZ2VBY3Rpb25zKCk7XG4gICAgdGhpcy5hZGRDaGFuZ2VBY3Rpb24odHJpZ2dlcik7XG4gIH1cbiAgXG4gIGFkZENoYW5nZUFjdGlvbih0cmlnZ2VyKSB7XG4gICAgdGhpcy5yZWFjdG9yLmFkZEV2ZW50TGlzdGVuZXIoXCJvbkNoYW5nZVwiLCB0cmlnZ2VyKTtcbiAgfVxuICBcbiAgcmVtb3ZlQ2hhbmdlQWN0aW9uKHRyaWdnZXIpIHtcbiAgICB0aGlzLnJlYWN0b3IucmVtb3ZlRXZlbnRMaXN0ZW5lcihcIm9uQ2hhbmdlXCIsIHRyaWdnZXIpO1xuICB9XG5cbiAgcmVtb3ZlQWxsQ2hhbmdlQWN0aW9ucygpIHtcbiAgICB0aGlzLnJlYWN0b3IucmVtb3ZlQWxsRXZlbnRMaXN0ZW5lcihcIm9uQ2hhbmdlXCIpO1xuICB9XG5cbiAgc2V0VXBBY3Rpb24odHJpZ2dlcikge1xuICAgIHRoaXMucmVtb3ZlQWxsVXBBY3Rpb25zKCk7XG4gICAgdGhpcy5hZGRVcEFjdGlvbih0cmlnZ2VyKTtcbiAgfVxuICBcbiAgYWRkVXBBY3Rpb24odHJpZ2dlcikge1xuICAgIHRoaXMucmVhY3Rvci5hZGRFdmVudExpc3RlbmVyKFwib25VcFwiLCB0cmlnZ2VyKTtcbiAgfVxuICBcbiAgcmVtb3ZlVXBBY3Rpb24odHJpZ2dlcikge1xuICAgIHRoaXMucmVhY3Rvci5yZW1vdmVFdmVudExpc3RlbmVyKFwib25VcFwiLCB0cmlnZ2VyKTtcbiAgfVxuXG4gIHJlbW92ZUFsbFVwQWN0aW9ucygpIHtcbiAgICB0aGlzLnJlYWN0b3IucmVtb3ZlQWxsRXZlbnRMaXN0ZW5lcihcIm9uVXBcIik7XG4gIH1cblxuICBnZXQgaGVpZ2h0KCkge1xuICAgIHJldHVybiB0aGlzLiNfaGVpZ2h0O1xuICB9XG5cbiAgZ2V0IHdpZHRoKCkge1xuICAgIHJldHVybiB0aGlzLiNfd2lkdGg7XG4gIH1cblxuICBzZXQgd2lkdGgod2lkdGgpIHtcbiAgICBpZih3aWR0aCAhPSB0aGlzLiNfd2lkdGgpIHtcbiAgICAgIHRoaXMuI193aWR0aCA9IHdpZHRoO1xuICAgICAgdGhpcy5yZWFjdG9yICYmIHRoaXMucmVhY3Rvci5kaXNwYXRjaEV2ZW50KFwib25DaGFuZ2VcIiwgdGhpcyk7XG4gICAgfVxuICB9XG5cbiAgc2V0IGhlaWdodChoZWlnaHQpIHtcbiAgICBpZihoZWlnaHQgIT0gdGhpcy4jX2hlaWdodCkge1xuICAgICAgdGhpcy4jX2hlaWdodCA9IGhlaWdodDtcbiAgICAgIHRoaXMucmVhY3RvciAmJiB0aGlzLnJlYWN0b3IuZGlzcGF0Y2hFdmVudChcIm9uQ2hhbmdlXCIsIHRoaXMpO1xuICAgIH1cbiAgfVxuXG4gIGdldCBtYXhXaWR0aCgpIHtcbiAgICByZXR1cm4gdGhpcy53aWR0aDtcbiAgfVxuXG4gIGdldCBtYXhIZWlnaHQoKSB7XG4gICAgcmV0dXJuIHRoaXMuaGVpZ2h0O1xuICB9XG5cbiAgZ2V0IGlubmVyV2lkdGgoKSB7XG4gICAgcmV0dXJuIHRoaXMud2lkdGg7XG4gIH1cblxuICBnZXQgaW5uZXJIZWlnaHQoKSB7XG4gICAgcmV0dXJuIHRoaXMuaGVpZ2h0O1xuICB9XG5cbiAgZ2V0IG1pbldpZHRoKCkge1xuICAgIHJldHVybiB0aGlzLndpZHRoO1xuICB9XG5cbiAgZ2V0IG1pbkhlaWdodCgpIHtcbiAgICByZXR1cm4gdGhpcy5oZWlnaHQ7XG4gIH1cblxuICBnZXQgeCgpIHtcbiAgICBjb25zdCBwYXJlbnQgPSB0aGlzLnBhcmVudCB8fCB0aGlzLmNhbnZhcztcblxuICAgIGlmKHRoaXMuc3R5bGUuYWxpZ25lbWVudCAmJiBwYXJlbnQpIHtcbiAgICAgIGNvbnN0IHBhcmVudFdpZHRoID0gcGFyZW50LndpZHRoO1xuICAgICAgY29uc3QgcGFyZW50UGFkZGluZyA9IChwYXJlbnQuc3R5bGUgJiYgcGFyZW50LnN0eWxlLnBhZGRpbmcpIHx8IDA7XG5cbiAgICAgIGlmKHRoaXMuc3R5bGUuYWxpZ25lbWVudCA9PSBDb25zdGFudHMuQWxpZ25lbWVudC5DRU5URVIpIHtcbiAgICAgICAgcmV0dXJuIHBhcmVudC54ICsgKHBhcmVudFdpZHRoIC8gMikgLSAodGhpcy53aWR0aCAvIDIpICsgdGhpcy5kZWx0YVg7XG4gICAgICB9IGVsc2UgaWYodGhpcy5zdHlsZS5hbGlnbmVtZW50ID09IENvbnN0YW50cy5BbGlnbmVtZW50LlJJR0hUKSB7XG4gICAgICAgIHJldHVybiBwYXJlbnQueCArIChwYXJlbnRXaWR0aCkgLSAodGhpcy53aWR0aCkgLSBwYXJlbnRQYWRkaW5nICsgdGhpcy5kZWx0YVg7XG4gICAgICB9IGVsc2UgaWYodGhpcy5zdHlsZS5hbGlnbmVtZW50ID09IENvbnN0YW50cy5BbGlnbmVtZW50LkxFRlQpIHtcbiAgICAgICAgcmV0dXJuIHBhcmVudC54ICsgcGFyZW50UGFkZGluZyArIHRoaXMuZGVsdGFYO1xuICAgICAgfVxuICAgIH0gZWxzZSBpZihwYXJlbnQpIHtcbiAgICAgIHJldHVybiBwYXJlbnQueCArIHRoaXMuI194ICsgdGhpcy5kZWx0YVg7XG4gICAgfVxuICAgIFxuICAgIHJldHVybiB0aGlzLiNfeCArIHRoaXMuZGVsdGFYO1xuICB9XG5cbiAgc2V0IHgoeCkge1xuICAgIHRoaXMuI194ID0geDtcbiAgICB0aGlzLnJlYWN0b3IgJiYgdGhpcy5yZWFjdG9yLmRpc3BhdGNoRXZlbnQoXCJvbkNoYW5nZVwiLCB0aGlzKTtcbiAgfVxuXG4gIGdldCB5KCkge1xuICAgIGNvbnN0IHBhcmVudCA9IHRoaXMucGFyZW50IHx8IHRoaXMuY2FudmFzO1xuXG4gICAgaWYodGhpcy5zdHlsZS52ZXJ0aWNhbEFsaWduZW1lbnQgJiYgcGFyZW50KSB7XG4gICAgICBjb25zdCBwYXJlbnRIZWlnaHQgPSBwYXJlbnQuaGVpZ2h0O1xuICAgICAgY29uc3QgcGFyZW50UGFkZGluZyA9IChwYXJlbnQuc3R5bGUgJiYgcGFyZW50LnN0eWxlLnBhZGRpbmcpIHx8IDA7XG5cbiAgICAgIGlmKHRoaXMuc3R5bGUudmVydGljYWxBbGlnbmVtZW50ID09IENvbnN0YW50cy5WZXJ0aWNhbEFsaWduZW1lbnQuQk9UVE9NKSB7XG4gICAgICAgIHJldHVybiBwYXJlbnQueSArIChwYXJlbnRIZWlnaHQpIC0gKHRoaXMuaGVpZ2h0KSAtIHBhcmVudFBhZGRpbmcgKyB0aGlzLmRlbHRhWTtcbiAgICAgIH0gZWxzZSBpZih0aGlzLnN0eWxlLnZlcnRpY2FsQWxpZ25lbWVudCA9PSBDb25zdGFudHMuVmVydGljYWxBbGlnbmVtZW50LkNFTlRFUikge1xuICAgICAgICByZXR1cm4gcGFyZW50LnkgKyAocGFyZW50SGVpZ2h0IC8gMikgLSAodGhpcy5oZWlnaHQgLyAyKSArIHRoaXMuZGVsdGFZO1xuICAgICAgfSBlbHNlIGlmKHRoaXMuc3R5bGUudmVydGljYWxBbGlnbmVtZW50ID09IENvbnN0YW50cy5WZXJ0aWNhbEFsaWduZW1lbnQuVE9QKSB7XG4gICAgICAgIHJldHVybiBwYXJlbnQueSArIHBhcmVudFBhZGRpbmcgKyB0aGlzLmRlbHRhWTtcbiAgICAgIH1cbiAgICB9IGVsc2UgaWYocGFyZW50KSB7XG4gICAgICByZXR1cm4gcGFyZW50LnkgKyB0aGlzLiNfeSArIHRoaXMuZGVsdGFZO1xuICAgIH1cbiAgICBcbiAgICByZXR1cm4gdGhpcy4jX3kgKyB0aGlzLmRlbHRhWTtcbiAgfVxuXG4gIHNldCB5KHkpIHtcbiAgICB0aGlzLiNfeSA9IHk7XG4gICAgdGhpcy5yZWFjdG9yICYmIHRoaXMucmVhY3Rvci5kaXNwYXRjaEV2ZW50KFwib25DaGFuZ2VcIiwgdGhpcyk7XG4gIH1cblxuICBnZXQgZGVmYXVsdFN0eWxlKCkge1xuICAgIHJldHVybiBuZXcgU3R5bGUoe1xuICAgICAgXCJwYWRkaW5nXCI6IENvbnN0YW50cy5TZXR0aW5nLkRFRkFVTFRfUEFERElORyxcbiAgICAgIFwic3BhY2VCZXR3ZWVuQ29tcG9uZW50c1wiOiBDb25zdGFudHMuU2V0dGluZy5ERUZBVUxUX1NQQUNJTkdcbiAgICB9KTtcbiAgfVxuXG4gIGdldCBzdHlsZSgpIHtcbiAgICByZXR1cm4gdGhpcy4jX3N0eWxlIHx8IHRoaXMuZGVmYXVsdFN0eWxlO1xuICB9XG5cbiAgc2V0IHN0eWxlKHN0eWxlKSB7XG4gICAgdGhpcy4jX3N0eWxlID0gbmV3IFN0eWxlKCk7XG4gICAgdGhpcy4jX3N0eWxlLnNldEFsbCh0aGlzLmRlZmF1bHRTdHlsZS5nZXRTdHlsZXMoKSk7XG5cbiAgICBpZihzdHlsZSAmJiBzdHlsZSBpbnN0YW5jZW9mIFN0eWxlKSB7XG4gICAgICB0aGlzLiNfc3R5bGUuc2V0QWxsKHN0eWxlLmdldFN0eWxlcygpKTtcbiAgICB9XG5cbiAgICB0aGlzLiNfc3R5bGUuY29tcG9uZW50ID0gdGhpcztcbiAgICB0aGlzLnJlYWN0b3IgJiYgdGhpcy5yZWFjdG9yLmRpc3BhdGNoRXZlbnQoXCJvbkNoYW5nZVwiLCB0aGlzKTtcbiAgfVxuXG4gIGdldCBoaWRkZW4oKSB7XG4gICAgcmV0dXJuICh0aGlzLnN0eWxlICYmIHRoaXMuc3R5bGUuaGlkZGVuKSB8fCAodGhpcy5wYXJlbnQgJiYgdGhpcy5wYXJlbnQuaGlkZGVuKTtcbiAgfVxuXG4gIHNldCBoaWRkZW4oaGlkZGVuKSB7XG4gICAgaWYoaGlkZGVuICE9IHRoaXMuZGlzYWJsZWQgfHwgaGlkZGVuICE9IHRoaXMuc3R5bGUuaGlkZGVuKSB7XG4gICAgICB0aGlzLmRpc2FibGVkID0gaGlkZGVuO1xuICAgICAgaWYodGhpcy5zdHlsZSkgdGhpcy5zdHlsZS5zZXQoXCJoaWRkZW5cIiwgaGlkZGVuKTtcbiAgICAgIHRoaXMucmVhY3RvciAmJiB0aGlzLnJlYWN0b3IuZGlzcGF0Y2hFdmVudChcIm9uQ2hhbmdlXCIsIHRoaXMpO1xuICAgIH1cbiAgfVxuXG4gIGdldCBzZWxlY3RlZCgpIHtcbiAgICByZXR1cm4gdGhpcy4jX3NlbGVjdGVkO1xuICB9XG5cbiAgc2V0IHNlbGVjdGVkKHNlbGVjdGVkKSB7XG4gICAgaWYoc2VsZWN0ZWQgIT0gdGhpcy4jX3NlbGVjdGVkKSB7XG4gICAgICB0aGlzLiNfc2VsZWN0ZWQgPSBzZWxlY3RlZDtcbiAgICAgIHRoaXMucmVhY3RvciAmJiB0aGlzLnJlYWN0b3IuZGlzcGF0Y2hFdmVudChcIm9uQ2hhbmdlXCIsIHRoaXMpO1xuICAgIH1cbiAgfVxuXG4gIGdldEFsbFBhcmVudHMoKSB7XG4gICAgbGV0IHBhcmVudCA9IHRoaXMucGFyZW50O1xuICAgIGxldCByZXMgPSBbXTtcblxuICAgIHdoaWxlKHBhcmVudCkge1xuICAgICAgcmVzLnB1c2gocGFyZW50KTtcbiAgICAgIHBhcmVudCA9IHBhcmVudC5wYXJlbnQ7XG4gICAgfVxuXG4gICAgcmV0dXJuIHJlcztcbiAgfVxuXG4gIHN0YXRpYyBjb21wYXJlQ29tcG9uZW50cyhjb21wb25lbnQsIG90aGVyKSB7XG4gICAgcmV0dXJuIGNvbXBvbmVudC5jb21wYXJlVG8ob3RoZXIpO1xuICB9XG5cbiAgY29tcGFyZVRvKG90aGVyQ29tcG9uZW50KSB7XG4gICAgY29uc3QgaXNGb3JlZ3JvdW5kID0gdGhpcy5zdHlsZSAmJiB0aGlzLnN0eWxlLmZvcmVncm91bmQ7XG4gICAgY29uc3Qgb3RoZXJJc0ZvcmVncm91bmQgPSBvdGhlckNvbXBvbmVudC5zdHlsZSAmJiBvdGhlckNvbXBvbmVudC5zdHlsZS5mb3JlZ3JvdW5kO1xuICAgIGNvbnN0IHpJbmRleCA9IHRoaXMuc3R5bGUgJiYgdGhpcy5zdHlsZS56SW5kZXg7XG4gICAgY29uc3Qgb3RoZXJ6SW5kZXggPSBvdGhlckNvbXBvbmVudC5zdHlsZSAmJiBvdGhlckNvbXBvbmVudC5zdHlsZS56SW5kZXg7XG5cbiAgICBpZih0aGlzLnBhcmVudCA9PSBvdGhlckNvbXBvbmVudCkge1xuICAgICAgcmV0dXJuIDE7XG4gICAgfSBlbHNlIGlmKG90aGVyQ29tcG9uZW50LnBhcmVudCA9PSB0aGlzKSB7XG4gICAgICByZXR1cm4gLTE7XG4gICAgfSBlbHNlIGlmKGlzRm9yZWdyb3VuZCAmJiAhb3RoZXJJc0ZvcmVncm91bmQpIHtcbiAgICAgIHJldHVybiAxXG4gICAgfSBlbHNlIGlmKCFpc0ZvcmVncm91bmQgJiYgb3RoZXJJc0ZvcmVncm91bmQpIHtcbiAgICAgIHJldHVybiAtMTtcbiAgICB9IGVsc2UgaWYoekluZGV4ID4gb3RoZXJ6SW5kZXgpIHtcbiAgICAgIHJldHVybiAxO1xuICAgIH0gZWxzZSBpZih6SW5kZXggPCBvdGhlcnpJbmRleCkge1xuICAgICAgcmV0dXJuIC0xO1xuICAgIH1cblxuICAgIHJldHVybiBvdGhlckNvbXBvbmVudC5jb21wYXJlVG9Db21wb25lbnQodGhpcykgfHwgLXRoaXMuY29tcGFyZVRvQ29tcG9uZW50KG90aGVyQ29tcG9uZW50KTtcbiAgfVxuXG4gIGNvbXBhcmVUb0NvbXBvbmVudChvdGhlckNvbXBvbmVudCkge1xuICAgIHJldHVybiAwO1xuICB9XG5cbiAgY29tcGFyZVRvTWVudShvdGhlckNvbXBvbmVudCkge1xuICAgIHJldHVybiAtMTtcbiAgfVxuXG4gIGNvbXBhcmVUb1Rvb2x0aXAob3RoZXJDb21wb25lbnQpIHtcbiAgICByZXR1cm4gLTE7XG4gIH1cblxuICBjb21wYXJlVG9Ob3RpZmljYXRpb24ob3RoZXJDb21wb25lbnQpIHtcbiAgICByZXR1cm4gLTE7XG4gIH1cblxuICBjb21wYXJlVG9TY3JvbGxiYXIob3RoZXJDb21wb25lbnQpIHtcbiAgICByZXR1cm4gLTE7XG4gIH1cbn0iLCIvKlxuICogQ29weXJpZ2h0IChDKSAyMDIwIEVsaWFzdGlrIChlbGlhc3Rpa3NvZnRzLmNvbSlcbiAqXG4gKiBUaGlzIGZpbGUgaXMgcGFydCBvZiBcIkpTR2FtZVRvb2xzXCIuXG4gKlxuICogXCJKU0dhbWVUb29sc1wiIGlzIGZyZWUgc29mdHdhcmU6IHlvdSBjYW4gcmVkaXN0cmlidXRlIGl0IGFuZC9vciBtb2RpZnlcbiAqIGl0IHVuZGVyIHRoZSB0ZXJtcyBvZiB0aGUgR05VIEdlbmVyYWwgUHVibGljIExpY2Vuc2UgYXMgcHVibGlzaGVkIGJ5XG4gKiB0aGUgRnJlZSBTb2Z0d2FyZSBGb3VuZGF0aW9uLCBlaXRoZXIgdmVyc2lvbiAzIG9mIHRoZSBMaWNlbnNlLCBvclxuICogKGF0IHlvdXIgb3B0aW9uKSBhbnkgbGF0ZXIgdmVyc2lvbi5cbiAqXG4gKiBcIkpTR2FtZVRvb2xzXCIgaXMgZGlzdHJpYnV0ZWQgaW4gdGhlIGhvcGUgdGhhdCBpdCB3aWxsIGJlIHVzZWZ1bCxcbiAqIGJ1dCBXSVRIT1VUIEFOWSBXQVJSQU5UWTsgd2l0aG91dCBldmVuIHRoZSBpbXBsaWVkIHdhcnJhbnR5IG9mXG4gKiBNRVJDSEFOVEFCSUxJVFkgb3IgRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UuICBTZWUgdGhlXG4gKiBHTlUgR2VuZXJhbCBQdWJsaWMgTGljZW5zZSBmb3IgbW9yZSBkZXRhaWxzLlxuICpcbiAqIFlvdSBzaG91bGQgaGF2ZSByZWNlaXZlZCBhIGNvcHkgb2YgdGhlIEdOVSBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlXG4gKiBhbG9uZyB3aXRoIFwiSlNHYW1lVG9vbHNcIi4gIElmIG5vdCwgc2VlIDxodHRwOi8vd3d3LmdudS5vcmcvbGljZW5zZXMvPi5cbiAqL1xuZXhwb3J0IGRlZmF1bHQge1xuICBTZXR0aW5nOiB7XG4gICAgRElTQUJMRV9PUFRJTUlaQVRJT05TOiBmYWxzZSwgLy8gdHJ1ZSB0byBkaXNhYmxlIG9wdGltaXphdGlvbnMsIGNhbiBmaXggc29tZSBwcm9ibGVtcywgZGlzYWJsaW5nIG9wdGltaXphdGlvbiByZWR1Y2VzIHBlcmZvcm1hbmNlXG4gICAgRElTQUJMRV9FWFBFUklNRU5UQUxfT1BUSU1JWkFUSU9OUzogZmFsc2UsIC8vIHRydWUgdG8gZGlzYWJsZSBvcHRpbWl6YXRpb25zIHRoYXQgYXJlIGNvbnNpZGVyZWQgZXhwZXJpbWVudGFsXG4gICAgRElTQUJMRV9JU19DT01QT05FTlRfVklTSUJMRV9PUFRJTUlaQVRJT05TOiB0cnVlLCAvLyB0cnVlIHRvIGRpc2FibGUgb3B0aW1pemF0aW9ucyBvZiB0aGUgQ29udGFpbmVyLmlzQ29tcG9uZW50VmlzaWJsZSBtZXRob2RcbiAgICBESVNBQkxFX0NPTlRBSU5FUlNfQ1VUVElORzogZmFsc2UsIC8vIGRpc2FibGluZyBjb250YWluZXJzIGN1dHRpbmcgYWxsb3cgdG8gdmlldyB0aGUgY29tcG9uZW50cyBvZiBhIGNvbnRhaW5lciB0aGF0IGFyZSBub3QgdG90YWxseSB2aXNpYmxlLCB5b3UgY2FuIGFsc28gZGlzYWJsZSBvcHRpbWl6YXRpb25zIHRvIGRpc3BsYXlzIGVsZW1lbnRzIHRoYXQgYXJlIG5vdCBkcmF3biBmb3Igb3B0aW1pemF0aW9uIHB1cnBvc2VzXG4gICAgRU5BQkxFX1BJWEVMX1JBVElPX1JFU0laSU5HOiB0cnVlLCAvLyBlbmFibGluZyB0aGlzIGFsbG93IHJlc2l6aW5nIHRoZSBjYW52YXMgdG8gbWF0Y2ggdGhlIHNjcmVlbiBwaXhlbCByYXRpb1xuICAgIFBJWEVMX1JBVElPOiAxLCAvLyB0aGUgY3VycmVudCBwaXhlbCByYXRpbywgYXV0b21hdGljYWxseSB1cGRhdGVkXG4gICAgUkVTT0xVVElPTl9TQ0FMRTogMSwgLy8gdGhlIHJlc29sdXRpb24gc2NhbGVcbiAgICBGT05UX0ZBTUlMWTogXCJzYW5zLXNlcmlmXCIsXG4gICAgRk9OVF9TSVpFOiAyOCxcbiAgICBDQU5WQVNfV0lEVEg6IDYwMCxcbiAgICBDQU5WQVNfSEVJR0hUOiA0MDAsXG4gICAgREVGQVVMVF9QQURESU5HOiA2LFxuICAgIERFRkFVTFRfU1BBQ0lORzogNixcbiAgICBCVVRUT05fREVGQVVMVF9CQUNLR1JPVU5EOiBcInJnYmEoMCwgMCwgMCwgMClcIixcbiAgICBCVVRUT05fREVGQVVMVF9IT1ZFUl9CQUNLR1JPVU5EOiBcIiM5NUE1QTZcIixcbiAgICBCVVRUT05fREVGQVVMVF9DTElDS19CQUNLR1JPVU5EOiBcIiM3MjdGODBcIixcbiAgICBCVVRUT05fREVGQVVMVF9BTFRFUk5BVElWRV9CQUNLR1JPVU5EOiBcIiNBQ0JFQkZcIixcbiAgICBJTlBVVF9ERUZBVUxUX0ZPTlRfQ09MT1I6IFwiIzAwMFwiLFxuICAgIElOUFVUX0RFRkFVTFRfQkFDS0dST1VORF9DT0xPUjogXCIjZmZmXCIsXG4gICAgSU5QVVRfREVGQVVMVF9CT1JERVJfQ09MT1I6IFwiIzAwMFwiLFxuICAgIElOUFVUX0RFRkFVTFRfQk9SREVSX0NPTE9SX1NFTEVDVEVEOiBcIiNhMmNkZDhcIixcbiAgICBJTlBVVF9ERUZBVUxUX1NFTEVDVF9DT0xPUjogXCIjMjk4MGI5XCIsXG4gICAgTEFCRUxfREVGQVVMVF9GT05UX0NPTE9SOiBcIiMwMDBcIixcbiAgICBMSU5LX0RFRkFVTFRfQ09MT1I6IFwiIzAwMDBFRVwiLFxuICAgIExJTktfREVGQVVMVF9IT1ZFUl9DT0xPUjogXCIjNEQ0REZGXCIsXG4gICAgTElOS19ERUZBVUxUX0NMSUNLX0NPTE9SOiBcIiNFRTc3MDBcIixcbiAgICBNRU5VX0RFRkFVTFRfQkFDS0dST1VORDogXCJyZ2JhKDQ0LCA2MiwgODAsIDAuNzUpXCIsXG4gICAgTUVOVV9ERUZBVUxUX0JMVVJfQkFDS0dST1VORDogZmFsc2UsXG4gICAgTk9USUZJQ0FUSU9OX0RFRkFVTFRfQkFDS0dST1VORDogXCJyZ2JhKDQ2LCAyMDQsIDExMywgMC41KVwiLFxuICAgIE5PVElGSUNBVElPTl9ERUZBVUxUX0FOSU1BVElPTl9EVVJBVElPTjogNTAwLCAvLyBtc1xuICAgIFBST0dSRVNTX0RFRkFVTFRfQkFDS0dST1VORDogXCIjYmRjM2M3XCIsXG4gICAgUFJPR1JFU1NfREVGQVVMVF9GT1JFR1JPVU5EOiBcIiMyN2FlNjBcIixcbiAgICBQUk9HUkVTU19ERUZBVUxUX0FOSU1BVElPTl9EVVJBVElPTjogMjAwMCwgLy8gbXNcbiAgICBUT09MVElQX0RFRkFVTFRfQkFDS0dST1VORDogXCJyZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMjUpXCIsXG4gICAgQVJST1dfREVGQVVMVF9MSU5FX0NBUDogXCJyb3VuZFwiLFxuICAgIEFSUk9XX0RFRkFVTFRfQ09MT1I6IFwiI0ZGMDAwMFwiLFxuICAgIEFSUk9XX0RFRkFVTFRfTElORV9TSVpFOiA4LFxuICAgIEFSUk9XX0RFRkFVTFRfSEVBRF9TSVpFOiAyMCxcbiAgICBDUk9TU19ERUZBVUxUX0xJTkVfQ0FQOiBcInJvdW5kXCIsXG4gICAgQ1JPU1NfREVGQVVMVF9DT0xPUjogXCIjZmZmXCIsXG4gICAgQ1JPU1NfREVGQVVMVF9MSU5FX1NJWkU6IDMsXG4gICAgU0NST0xMQkFSX0RFRkFVTFRfQkFDS0dST1VORDogXCJyZ2JhKDE0OSwgMTY1LCAxNjYsIDAuNzUpXCIsXG4gICAgU0NST0xMQkFSX0RFRkFVTFRfSE9WRVJfQkFDS0dST1VORDogXCJyZ2JhKDE0OSwgMTY1LCAxNjYsIDAuOSlcIixcbiAgICBTQ1JPTExCQVJfREVGQVVMVF9DTElDS19CQUNLR1JPVU5EOiBcInJnYmEoMTQ5LCAxNjUsIDE2NiwgMC41KVwiLFxuICAgIFNDUk9MTEJBUl9ERUZBVUxUX1NJWkU6IDEwLFxuICAgIERFRkFVTFRfQk9SREVSX1NJWkU6IDMsXG4gICAgREVGQVVMVF9CT1JERVJfQ09MT1JfU0VMRUNURUQ6IFwiI2EyY2RkOFwiLFxuICAgIERFRkFVTFRfQU5JTUFUSU9OX0RVUkFUSU9OOiAyMDAwLCAvLyBtc1xuICAgIFRSSUFOR0xFX0RFRkFVTFRfTElORV9DQVA6IFwicm91bmRcIixcbiAgICBUUklBTkdMRV9ERUZBVUxUX0NPTE9SOiBcIiMwMDBcIixcbiAgICBUUklBTkdMRV9ERUZBVUxUX0ZJTExfQ09MT1I6IFwiIzAwMFwiLFxuICAgIFRSSUFOR0xFX0RFRkFVTFRfTElORV9TSVpFOiAzLFxuICAgIFRSSUFOR0xFX0RFRkFVTFRfRklMTDogdHJ1ZSxcbiAgICBTRUxFQ1RfREVGQVVMVF9CQUNLR1JPVU5EOiBcIiNlY2YwZjFcIixcbiAgICBTRUxFQ1RfREVGQVVMVF9IT1ZFUl9CQUNLR1JPVU5EOiBcIiNiZGMzYzdcIixcbiAgICBTRUxFQ1RfREVGQVVMVF9DTElDS19CQUNLR1JPVU5EOiBcIiNhZGIyYjVcIixcbiAgICBDSVJDTEVfREVGQVVMVF9MSU5FX0NBUDogXCJyb3VuZFwiLFxuICAgIENJUkNMRV9ERUZBVUxUX0NPTE9SOiBcIiNmZmZcIixcbiAgICBDSVJDTEVfREVGQVVMVF9GSUxMX0NPTE9SOiBcIiMwMDBcIixcbiAgICBDSVJDTEVfREVGQVVMVF9MSU5FX1NJWkU6IDMsXG4gICAgQ0lSQ0xFX0RFRkFVTFRfRklMTDogdHJ1ZSxcbiAgICBFUlJPUl9NRU5VX0JBQ0tHUk9VTkRfQ09MT1I6IFwiIzM0OThkYlwiXG4gIH0sXG4gIEtleToge1xuICAgIFVQOiAzOCxcbiAgICBSSUdIVDogMzksXG4gICAgQk9UVE9NOiA0MCxcbiAgICBMRUZUOiAzNyxcbiAgICBFTlRFUjogMTMsXG4gICAgRUNIQVA6IDI3LFxuICAgIFRBQjogOVxuICB9LFxuICBBbGlnbmVtZW50OiB7XG4gICAgUklHSFQ6IFwicmlnaHRcIixcbiAgICBMRUZUOiBcImxlZnRcIixcbiAgICBDRU5URVI6IFwiY2VudGVyXCIsXG4gICAgREVGQVVMVDogXCJkZWZhdWx0XCJcbiAgfSxcbiAgVmVydGljYWxBbGlnbmVtZW50OiB7XG4gICAgVE9QOiBcInRvcFwiLFxuICAgIENFTlRFUjogXCJjZW50ZXJcIixcbiAgICBCT1RUT006IFwiYm90dG9tXCIsXG4gICAgREVGQVVMVDogXCJkZWZhdWx0XCJcbiAgfSxcbiAgU3RyaW5nOiB7XG4gICAgRVJST1JfTUVTU0FHRV9DQU5WQVM6IFwiQSBmYXRhbCBlcnJvciBoYXMgb2NjdXJyZWQgYXQgdGhlIEpTR2FtZVRvb2xzIGxldmVsLlwiLFxuICAgIEVSUk9SX01FU1NBR0VfQ0FOVkFTX0xBQkVMIDogXCI6JyhcXG5BIGZhdGFsIGVycm9yIGhhcyBvY2N1cnJlZCBhdCB0aGUgSlNHYW1lVG9vbHMgbGV2ZWwuXCIsXG4gICAgUkVUUlk6IFwiUmV0cnlcIixcbiAgICBOT1RJQ0VfTUVTU0FHRTogXCJOb3RpY2U6XCIsXG4gICAgV0FSTklOR19NRVNTQUdFOiBcIldhcm5pbmc6XCIsXG4gICAgRVJST1JfTUVTU0FHRTogXCJFcnJvcjpcIixcbiAgICBPUFRJTUlaQVRJT05fRElTQUJMRUQ6IFwiT3B0aW1pemF0aW9ucyBhcmUgZGlzYWJsZWQuIFlvdSBtYXkgbm90aWNlIGxvdyBwZXJmb3JtYW5jZS5cIixcbiAgICBDT05UQUlORVJfQ1VUVElOR19ESVNBQkxFRDogXCJDb250YWluZXJzIGN1dHRpbmcgaXMgZGlzYWJsZWQuXCIsXG4gICAgQlVUVE9OX0lNQUdFX0RFUFJFQ0FURUQ6IFwiSlNHYW1lVG9vbHMuQnV0dG9uSW1hZ2UgaXMgZGVwcmVjYXRlZC4gUGxlYXNlIHVzZSBhIEJ1dHRvbiB3aXRoIGFuIEltYWdlQ29udGFpbmVyIGluc3RlYWQuXCIsXG4gICAgSU5QVVRfRlVMTFNDUkVFTjogXCJUaGUgdXNlIG9mIEpTR2FtZVRvb2xzLkNhbnZhcyBpcyBuZWVkZWQgZm9yIElucHV0IGNvbXBvbmVudHMgdG8gcHJvcGVybHkgd29yayBpbiBmdWxsc2NyZWVuIG1vZGUuXCIsXG4gICAgREVUQUlMUzogXCJEZXRhaWxzXCJcbiAgfVxufTsiLCIvKlxuICogQ29weXJpZ2h0IChDKSAyMDIwIEVsaWFzdGlrIChlbGlhc3Rpa3NvZnRzLmNvbSlcbiAqXG4gKiBUaGlzIGZpbGUgaXMgcGFydCBvZiBcIkpTR2FtZVRvb2xzXCIuXG4gKlxuICogXCJKU0dhbWVUb29sc1wiIGlzIGZyZWUgc29mdHdhcmU6IHlvdSBjYW4gcmVkaXN0cmlidXRlIGl0IGFuZC9vciBtb2RpZnlcbiAqIGl0IHVuZGVyIHRoZSB0ZXJtcyBvZiB0aGUgR05VIEdlbmVyYWwgUHVibGljIExpY2Vuc2UgYXMgcHVibGlzaGVkIGJ5XG4gKiB0aGUgRnJlZSBTb2Z0d2FyZSBGb3VuZGF0aW9uLCBlaXRoZXIgdmVyc2lvbiAzIG9mIHRoZSBMaWNlbnNlLCBvclxuICogKGF0IHlvdXIgb3B0aW9uKSBhbnkgbGF0ZXIgdmVyc2lvbi5cbiAqXG4gKiBcIkpTR2FtZVRvb2xzXCIgaXMgZGlzdHJpYnV0ZWQgaW4gdGhlIGhvcGUgdGhhdCBpdCB3aWxsIGJlIHVzZWZ1bCxcbiAqIGJ1dCBXSVRIT1VUIEFOWSBXQVJSQU5UWTsgd2l0aG91dCBldmVuIHRoZSBpbXBsaWVkIHdhcnJhbnR5IG9mXG4gKiBNRVJDSEFOVEFCSUxJVFkgb3IgRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UuICBTZWUgdGhlXG4gKiBHTlUgR2VuZXJhbCBQdWJsaWMgTGljZW5zZSBmb3IgbW9yZSBkZXRhaWxzLlxuICpcbiAqIFlvdSBzaG91bGQgaGF2ZSByZWNlaXZlZCBhIGNvcHkgb2YgdGhlIEdOVSBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlXG4gKiBhbG9uZyB3aXRoIFwiSlNHYW1lVG9vbHNcIi4gIElmIG5vdCwgc2VlIDxodHRwOi8vd3d3LmdudS5vcmcvbGljZW5zZXMvPi5cbiAqL1xuaW1wb3J0IEJveCBmcm9tIFwiLi9Cb3hcIjtcbmltcG9ydCBDb21wb25lbnQgZnJvbSBcIi4vQ29tcG9uZW50XCI7XG5pbXBvcnQgQ29uc3RhbnRzIGZyb20gXCIuL0NvbnN0YW50c1wiO1xuaW1wb3J0IFNjcm9sbGJhckhvcml6b250YWwgZnJvbSBcIi4vU2Nyb2xsYmFySG9yaXpvbnRhbFwiO1xuaW1wb3J0IFNjcm9sbGJhclZlcnRpY2FsIGZyb20gXCIuL1Njcm9sbGJhclZlcnRpY2FsXCI7XG5pbXBvcnQgU3R5bGUgZnJvbSBcIi4vU3R5bGVcIjtcbmltcG9ydCBVdGlscyBmcm9tIFwiLi9VdGlsc1wiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDb250YWluZXIgZXh0ZW5kcyBCb3gge1xuICBzZWxlY3RhYmxlID0gZmFsc2U7XG4gICNjb21wb25lbnRzID0gW107XG4gICNfbWF4V2lkdGggPSAwO1xuICAjX21heEhlaWdodCA9IDA7XG4gICNfbWluV2lkdGggPSAwO1xuICAjX21pbkhlaWdodCA9IDA7XG4gIGV2ZW50Q2hhbmdlQ2FsbGJhY2sgPSAoKSA9PiB0aGlzLnJlYWN0b3IuZGlzcGF0Y2hFdmVudChcIm9uQ2hhbmdlXCIsIHRoaXMpO1xuXG4gIGNvbnN0cnVjdG9yKHgsIHksIG1heFdpZHRoLCBtYXhIZWlnaHQsIHN0eWxlLCAuLi5jb21wb25lbnRzKSB7XG4gICAgc3VwZXIoeCwgeSwgbnVsbCwgbnVsbCwgc3R5bGUpO1xuXG4gICAgdGhpcy5hZGRBbGwoLi4uY29tcG9uZW50cyk7XG4gICAgdGhpcy5jYW52YXNUbXAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiY2FudmFzXCIpO1xuICAgIHRoaXMuI19tYXhXaWR0aCA9IG1heFdpZHRoO1xuICAgIHRoaXMuI19tYXhIZWlnaHQgPSBtYXhIZWlnaHQ7XG4gICAgdGhpcy5zY3JvbGxiYXJIb3Jpem9udGFsID0gbmV3IFNjcm9sbGJhckhvcml6b250YWwobnVsbCwgbnVsbCwgdGhpcyk7XG4gICAgdGhpcy5zY3JvbGxiYXJWZXJ0aWNhbCA9IG5ldyBTY3JvbGxiYXJWZXJ0aWNhbChudWxsLCBudWxsLCB0aGlzKTtcblxuICAgIHRoaXMuYWRkU2Nyb2xsQWN0aW9uKChkZWx0YVgsIGRlbHRhWSkgPT4gdGhpcy5jb250cm9sU2Nyb2xsaW5nKGRlbHRhWCwgZGVsdGFZKSk7XG5cbiAgICBpZighQ29uc3RhbnRzLlNldHRpbmcuRElTQUJMRV9FWFBFUklNRU5UQUxfT1BUSU1JWkFUSU9OUykge1xuICAgICAgdGhpcy5hZGRDaGFuZ2VBY3Rpb24oY29tcG9uZW50Q2hhbmdlZCA9PiB7XG4gICAgICAgIGNvbXBvbmVudENoYW5nZWQgPT0gdGhpcy5wYXJlbnQgJiYgdGhpcy5jb21wb25lbnRzLmZvckVhY2goY29tcG9uZW50ID0+IGNvbXBvbmVudCAmJiBjb21wb25lbnQucmVhY3Rvci5kaXNwYXRjaEV2ZW50KFwib25DaGFuZ2VcIiwgdGhpcykpO1xuICAgICAgfSk7XG4gICAgfVxuICB9XG5cbiAgZHJhdyhjb250ZXh0KSB7XG4gICAgaWYodGhpcy5oaWRkZW4pIHJldHVybjtcbiAgICBjb25zdCBjYW52YXMgPSBjb250ZXh0LmNhbnZhcztcbiAgICBjb25zdCBjdHggPSBjYW52YXMuZ2V0Q29udGV4dChcIjJkXCIpO1xuICAgIGN0eC5zYXZlKCk7XG5cbiAgICBpZih0aGlzLmlzQ3V0dGluZykge1xuICAgICAgY29uc3QgY3R4VGVtcCA9IHRoaXMuY2FudmFzVG1wLmdldENvbnRleHQoXCIyZFwiKTtcbiAgICAgIHRoaXMuY2FudmFzVG1wLndpZHRoID0gVXRpbHMuZ2V0Q2FudmFzV2lkdGgoY2FudmFzKSAqIENvbnN0YW50cy5TZXR0aW5nLlBJWEVMX1JBVElPO1xuICAgICAgdGhpcy5jYW52YXNUbXAuaGVpZ2h0ID0gVXRpbHMuZ2V0Q2FudmFzSGVpZ2h0KGNhbnZhcykgKiBDb25zdGFudHMuU2V0dGluZy5QSVhFTF9SQVRJTztcbiAgICAgIHRoaXMuY2FudmFzVG1wLnN0eWxlLndpZHRoID0gVXRpbHMuZ2V0Q2FudmFzV2lkdGgoY2FudmFzKTtcbiAgICAgIHRoaXMuY2FudmFzVG1wLnN0eWxlLmhlaWdodCA9IFV0aWxzLmdldENhbnZhc0hlaWdodChjYW52YXMpO1xuICAgICAgVXRpbHMuY2xlYXIoY3R4VGVtcCk7XG4gICAgfVxuICAgIFxuICAgIHRoaXMuY29tcG9uZW50cy5mb3JFYWNoKGNvbXBvbmVudCA9PiB7XG4gICAgICBpZih0aGlzLmNhbnZhcykgY29tcG9uZW50LmNhbnZhcyA9IHRoaXMuY2FudmFzO1xuICAgIH0pO1xuICAgIFxuICAgIHRoaXMuY29udHJvbFNjcm9sbGluZygwLCAwKTtcbiAgICBzdXBlci5kcmF3KGNvbnRleHQpO1xuXG4gICAgY3R4LnJlc3RvcmUoKTtcbiAgfVxuXG4gIGRyYXdWZXJ0aWNhbFNjcm9sbEJhcihjdHgpIHtcbiAgICBpZih0aGlzLnNjcm9sbGJhclZlcnRpY2FsKSB7XG4gICAgICB0aGlzLnNjcm9sbGJhclZlcnRpY2FsLmNhbnZhcyA9IHRoaXMuY2FudmFzO1xuICAgICAgdGhpcy5zY3JvbGxiYXJWZXJ0aWNhbC5kcmF3KGN0eCk7XG4gICAgfVxuICB9XG5cbiAgZHJhd0hvcml6b250YWxTY3JvbGxCYXIoY3R4KSB7XG4gICAgaWYodGhpcy5zY3JvbGxiYXJIb3Jpem9udGFsKSB7XG4gICAgICB0aGlzLnNjcm9sbGJhckhvcml6b250YWwuY2FudmFzID0gdGhpcy5jYW52YXM7XG4gICAgICB0aGlzLnNjcm9sbGJhckhvcml6b250YWwuZHJhdyhjdHgpO1xuICAgIH1cbiAgfVxuXG4gIGRyYXdTY3JvbGxiYXJzKGN0eCkge1xuICAgIGlmKCF0aGlzLnN0eWxlLnNjcm9sbFhEaXNhYmxlZCkgdGhpcy5kcmF3SG9yaXpvbnRhbFNjcm9sbEJhcihjdHgpO1xuICAgIGlmKCF0aGlzLnN0eWxlLnNjcm9sbFlEaXNhYmxlZCkgdGhpcy5kcmF3VmVydGljYWxTY3JvbGxCYXIoY3R4KTtcbiAgfVxuXG4gIHNldCguLi5jb21wb25lbnRzKSB7XG4gICAgbGV0IGhhc0NoYW5nZWQgPSBmYWxzZTtcblxuICAgIGlmKGNvbXBvbmVudHMubGVuZ3RoID09IHRoaXMuY29tcG9uZW50cy5sZW5ndGgpIHtcbiAgICAgIGNvbXBvbmVudHMuZm9yRWFjaCgoY29tcG9uZW50LCBpKSA9PiB7XG4gICAgICAgIGlmKHRoaXMuY29tcG9uZW50c1tpXSAhPSBjb21wb25lbnQpIGhhc0NoYW5nZWQgPSB0cnVlO1xuICAgICAgfSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGhhc0NoYW5nZWQgPSB0cnVlO1xuICAgIH1cblxuICAgIGlmKGhhc0NoYW5nZWQpIHtcbiAgICAgIHRoaXMuY2xlYXIoKTtcbiAgICAgIHRoaXMuYWRkQWxsKC4uLmNvbXBvbmVudHMpO1xuICAgIH1cbiAgfVxuXG4gIGFkZChjb21wb25lbnQpIHtcbiAgICB0aGlzLiNjb21wb25lbnRzLnB1c2goY29tcG9uZW50KTtcbiAgICBjb21wb25lbnQucGFyZW50ID0gdGhpcztcbiAgICBpZih0aGlzLmNhbnZhcykgY29tcG9uZW50LmNhbnZhcyA9IHRoaXMuY2FudmFzO1xuICAgIGNvbXBvbmVudC5hZGRDaGFuZ2VBY3Rpb24odGhpcy5ldmVudENoYW5nZUNhbGxiYWNrKTtcbiAgICB0aGlzLnJlYWN0b3IuZGlzcGF0Y2hFdmVudChcIm9uQ2hhbmdlXCIsIHRoaXMpO1xuICB9XG5cbiAgYWRkQWxsKC4uLmNvbXBvbmVudHMpIHtcbiAgICBjb21wb25lbnRzLmZvckVhY2goY29tcG9uZW50ID0+IHRoaXMuYWRkKGNvbXBvbmVudCkpO1xuICB9XG5cbiAgcmVtb3ZlKGNvbXBvbmVudCkge1xuICAgIGlmKHRoaXMuI2NvbXBvbmVudHMuaW5kZXhPZihjb21wb25lbnQpICE9IC0xKSB7XG4gICAgICBjb21wb25lbnQucmVtb3ZlQ2hhbmdlQWN0aW9uKHRoaXMuZXZlbnRDaGFuZ2VDYWxsYmFjayk7XG4gICAgICB0aGlzLiNjb21wb25lbnRzID0gdGhpcy4jY29tcG9uZW50cy5maWx0ZXIoY3VycmVudCA9PiBjb21wb25lbnQgIT0gY3VycmVudCk7XG4gICAgICB0aGlzLnJlYWN0b3IuZGlzcGF0Y2hFdmVudChcIm9uQ2hhbmdlXCIsIHRoaXMpO1xuICAgIH1cbiAgfVxuXG4gIGNsZWFyKCkge1xuICAgIHRoaXMuI2NvbXBvbmVudHMuZm9yRWFjaChjb21wb25lbnQgPT4gdGhpcy5yZW1vdmUoY29tcG9uZW50KSk7XG4gICAgdGhpcy5yZWFjdG9yLmRpc3BhdGNoRXZlbnQoXCJvbkNoYW5nZVwiLCB0aGlzKTtcbiAgfVxuXG4gIGdldCBjb21wb25lbnRzKCkge1xuICAgIGNvbnN0IGNvbXBvbmVudHMgPSBbXTtcbiAgICB0aGlzLiNjb21wb25lbnRzLmZvckVhY2goY29tcG9uZW50ID0+IGNvbXBvbmVudHMucHVzaChjb21wb25lbnQpKTtcbiAgICByZXR1cm4gY29tcG9uZW50cztcbiAgfVxuXG4gIGdldCBhbGxDb21wb25lbnRzKCkge1xuICAgIGNvbnN0IGNvbXBvbmVudHMgPSB0aGlzLmNvbXBvbmVudHM7XG4gICAgY29tcG9uZW50cy5wdXNoKHRoaXMuc2Nyb2xsYmFySG9yaXpvbnRhbCk7XG4gICAgY29tcG9uZW50cy5wdXNoKHRoaXMuc2Nyb2xsYmFyVmVydGljYWwpO1xuICAgIHJldHVybiBjb21wb25lbnRzO1xuICB9XG5cbiAgZ2V0Q29tcG9uZW50c1RyZWUoc3RhcnQgPSB0aGlzKSB7XG4gICAgY29uc3QgY29tcG9uZW50cyA9IHtcbiAgICAgIFwiY29tcG9uZW50XCI6IHN0YXJ0LFxuICAgICAgXCJjaGlsZHNcIjogW11cbiAgICB9O1xuXG4gICAgaWYoc3RhcnQuYWxsQ29tcG9uZW50cykge1xuICAgICAgc3RhcnQuYWxsQ29tcG9uZW50cy5mb3JFYWNoKGNvbXBvbmVudCA9PiBjb21wb25lbnRzLmNoaWxkcy5wdXNoKHRoaXMuZ2V0Q29tcG9uZW50c1RyZWUoY29tcG9uZW50KSkpO1xuICAgIH1cblxuICAgIHJldHVybiBjb21wb25lbnRzO1xuICB9XG5cbiAgc3RhdGljIHNvcnRDb21wb25lbnRzVHJlZShjb21wb25lbnQsIG90aGVyKSB7XG4gICAgcmV0dXJuIGNvbXBvbmVudC5jb21wb25lbnQuY29tcGFyZVRvKG90aGVyLmNvbXBvbmVudCk7XG4gIH1cblxuICBkaXNhYmxlKCkge1xuICAgIGxldCBjaGFuZ2VkID0gc3VwZXIuZGlzYWJsZSgpO1xuXG4gICAgdGhpcy4jY29tcG9uZW50cy5mb3JFYWNoKGNvbXBvbmVudCA9PiB7XG4gICAgICBpZihjb21wb25lbnQgJiYgY29tcG9uZW50LmRpc2FibGUgJiYgY29tcG9uZW50LmRpc2FibGUoKSkge1xuICAgICAgICBjaGFuZ2VkID0gdHJ1ZTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIGlmKGNoYW5nZWQpIHRoaXMucmVhY3Rvci5kaXNwYXRjaEV2ZW50KFwib25DaGFuZ2VcIiwgdGhpcyk7XG4gIH1cblxuICBlbmFibGUoKSB7XG4gICAgbGV0IGNoYW5nZWQgPSBzdXBlci5lbmFibGUoKTtcblxuICAgIHRoaXMuI2NvbXBvbmVudHMuZm9yRWFjaChjb21wb25lbnQgPT4ge1xuICAgICAgaWYoY29tcG9uZW50ICYmIGNvbXBvbmVudC5lbmFibGUgJiYgY29tcG9uZW50LmVuYWJsZSgpKSB7XG4gICAgICAgIGNoYW5nZWQgPSB0cnVlO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgaWYoY2hhbmdlZCkgdGhpcy5yZWFjdG9yLmRpc3BhdGNoRXZlbnQoXCJvbkNoYW5nZVwiLCB0aGlzKTtcbiAgfVxuXG4gIGdldCB3aWR0aCgpIHtcbiAgICBjb25zdCB3aWR0aCA9ICh0aGlzLnBhcmVudCAmJiB0aGlzLnBhcmVudC53aWR0aCk7XG4gICAgY29uc3QgbWluID0gdGhpcy5tYXhXaWR0aCAhPSBudWxsID8gTWF0aC5taW4odGhpcy5tYXhXaWR0aCwgd2lkdGgpIDogbnVsbDtcbiAgICByZXR1cm4gdGhpcy5taW5XaWR0aCAhPSBudWxsID8gTWF0aC5tYXgodGhpcy5taW5XaWR0aCwgbWluICE9IG51bGwgPyBtaW4gOiB3aWR0aCkgOiB3aWR0aDtcbiAgfVxuXG4gIGdldCBoZWlnaHQoKSB7XG4gICAgY29uc3QgaGVpZ2h0ID0gKHRoaXMucGFyZW50ICYmIHRoaXMucGFyZW50LmhlaWdodCk7XG4gICAgY29uc3QgbWluID0gdGhpcy5tYXhXaWR0aCAhPSBudWxsID8gTWF0aC5taW4odGhpcy5tYXhIZWlnaHQsIGhlaWdodCkgOiBudWxsO1xuICAgIHJldHVybiB0aGlzLm1pbkhlaWdodCAhPSBudWxsID8gTWF0aC5tYXgodGhpcy5taW5IZWlnaHQsIG1pbiAhPSBudWxsID8gbWluIDogaGVpZ2h0KSA6IGhlaWdodDtcbiAgfVxuXG4gIGdldCBtYXhXaWR0aCgpIHtcbiAgICByZXR1cm4gdGhpcy4jX21heFdpZHRoO1xuICB9XG5cbiAgZ2V0IG1heEhlaWdodCgpIHtcbiAgICByZXR1cm4gdGhpcy4jX21heEhlaWdodDtcbiAgfVxuXG4gIHNldCBtYXhXaWR0aChtYXhXaWR0aCkge1xuICAgIGlmKG1heFdpZHRoICE9IHRoaXMuI19tYXhXaWR0aCkge1xuICAgICAgdGhpcy4jX21heFdpZHRoID0gbWF4V2lkdGg7XG4gICAgICB0aGlzLnJlYWN0b3IuZGlzcGF0Y2hFdmVudChcIm9uQ2hhbmdlXCIsIHRoaXMpO1xuICAgIH1cbiAgfVxuXG4gIHNldCBtYXhIZWlnaHQobWF4SGVpZ2h0KSB7XG4gICAgaWYobWF4SGVpZ2h0ICE9IHRoaXMuI19tYXhIZWlnaHQpIHtcbiAgICAgIHRoaXMuI19tYXhIZWlnaHQgPSBtYXhIZWlnaHQ7XG4gICAgICB0aGlzLnJlYWN0b3IuZGlzcGF0Y2hFdmVudChcIm9uQ2hhbmdlXCIsIHRoaXMpO1xuICAgIH1cbiAgfVxuXG4gIGdldCBtaW5XaWR0aCgpIHtcbiAgICByZXR1cm4gdGhpcy4jX21pbldpZHRoO1xuICB9XG5cbiAgZ2V0IG1pbkhlaWdodCgpIHtcbiAgICByZXR1cm4gdGhpcy4jX21pbkhlaWdodDtcbiAgfVxuXG4gIHNldCBtaW5XaWR0aChtaW5XaWR0aCkge1xuICAgIGlmKG1pbldpZHRoICE9IHRoaXMuI19taW5XaWR0aCkge1xuICAgICAgdGhpcy4jX21pbldpZHRoID0gbWluV2lkdGg7XG4gICAgICB0aGlzLnJlYWN0b3IuZGlzcGF0Y2hFdmVudChcIm9uQ2hhbmdlXCIsIHRoaXMpO1xuICAgIH1cbiAgfVxuXG4gIHNldCBtaW5IZWlnaHQobWluSGVpZ2h0KSB7XG4gICAgaWYobWluSGVpZ2h0ICE9IHRoaXMuI19taW5IZWlnaHQpIHtcbiAgICAgIHRoaXMuI19taW5IZWlnaHQgPSBtaW5IZWlnaHQ7XG4gICAgICB0aGlzLnJlYWN0b3IuZGlzcGF0Y2hFdmVudChcIm9uQ2hhbmdlXCIsIHRoaXMpO1xuICAgIH1cbiAgfVxuXG4gIHVwZGF0ZUlubmVySGVpZ2h0KCkgeyB9XG5cbiAgdXBkYXRlSW5uZXJXaWR0aCgpIHsgfVxuXG4gIHNldCBjYW52YXMoY2FudmFzKSB7XG4gICAgaWYoY2FudmFzICE9IHRoaXMuY2FudmFzKSB7XG4gICAgICBzdXBlci5jYW52YXMgPSBjYW52YXM7XG4gIFxuICAgICAgdGhpcy4jY29tcG9uZW50cy5mb3JFYWNoKGNvbXBvbmVudCA9PiB7XG4gICAgICAgIGNvbXBvbmVudC5jYW52YXMgPSBjYW52YXM7XG4gICAgICAgIGlmKGNvbXBvbmVudC5yZWFjdG9yKSBjb21wb25lbnQucmVhY3Rvci5kaXNwYXRjaEV2ZW50KFwib25DaGFuZ2VcIiwgdGhpcyk7XG4gICAgICB9KTtcbiAgXG4gICAgICB0aGlzLnJlYWN0b3IuZGlzcGF0Y2hFdmVudChcIm9uQ2hhbmdlXCIsIHRoaXMpO1xuICAgIH1cbiAgfVxuXG4gIGdldCBjYW52YXMoKSB7XG4gICAgcmV0dXJuIHN1cGVyLmNhbnZhcztcbiAgfVxuXG4gIGdldENvbXBvbmVudElkKGNvbXBvbmVudCkge1xuICAgIGxldCByZXN1bHQgPSBudWxsO1xuXG4gICAgdGhpcy4jY29tcG9uZW50cy5mb3JFYWNoKChjLCBpKSA9PiB7XG4gICAgICBpZihjID09IGNvbXBvbmVudCkgcmVzdWx0ID0gaTtcbiAgICB9KTtcblxuICAgIHJldHVybiByZXN1bHQ7XG4gIH1cblxuICBnZXQgc2Nyb2xsQXJlYVNpemVYKCkge1xuICAgIHJldHVybiB0aGlzLmlubmVyV2lkdGggLSB0aGlzLndpZHRoO1xuICB9XG5cbiAgZ2V0IHNjcm9sbEFyZWFTaXplWSgpIHtcbiAgICByZXR1cm4gdGhpcy5pbm5lckhlaWdodCAtIHRoaXMuaGVpZ2h0O1xuICB9XG5cbiAgY29udHJvbFNjcm9sbGluZyhkZWx0YVgsIGRlbHRhWSkge1xuICAgIGlmKCF0aGlzLnN0eWxlLnNjcm9sbFlEaXNhYmxlZCkge1xuICAgICAgaWYodGhpcy5zY3JvbGxBcmVhU2l6ZVkgPD0gMCkge1xuICAgICAgICB0aGlzLm9mZnNldFNjcm9sbFkgPSAwO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgY29uc3QgcGVyY2VudFNjcm9sbGJhclkgPSB0aGlzLm9mZnNldFNjcm9sbFkgLyB0aGlzLnNjcm9sbEFyZWFTaXplWTtcbiAgXG4gICAgICAgIGlmKHBlcmNlbnRTY3JvbGxiYXJZIDw9IDAgJiYgZGVsdGFZIDw9IDApIHtcbiAgICAgICAgICB0aGlzLm9mZnNldFNjcm9sbFkgPSBNYXRoLm1pbigwLCB0aGlzLnkpO1xuICAgICAgICB9IGVsc2UgaWYocGVyY2VudFNjcm9sbGJhclkgPiAxICYmIGRlbHRhWSA+PSAwKSB7XG4gICAgICAgICAgdGhpcy5vZmZzZXRTY3JvbGxZID0gdGhpcy5zY3JvbGxBcmVhU2l6ZVk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5vZmZzZXRTY3JvbGxZIC09IGRlbHRhWTtcbiAgICB9XG5cbiAgICBpZighdGhpcy5zdHlsZS5zY3JvbGxYRGlzYWJsZWQpIHtcbiAgICAgIGlmKHRoaXMuc2Nyb2xsQXJlYVNpemVYIDw9IDApIHtcbiAgICAgICAgdGhpcy5vZmZzZXRTY3JvbGxYID0gMDtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGNvbnN0IHBlcmNlbnRTY3JvbGxiYXJYID0gdGhpcy5vZmZzZXRTY3JvbGxYIC8gdGhpcy5zY3JvbGxBcmVhU2l6ZVg7XG4gIFxuICAgICAgICBpZihwZXJjZW50U2Nyb2xsYmFyWCA8PSAwICYmIGRlbHRhWCA8PSAwKSB7XG4gICAgICAgICAgdGhpcy5vZmZzZXRTY3JvbGxYID0gTWF0aC5taW4oMCwgdGhpcy54KTtcbiAgICAgICAgfSBlbHNlIGlmKHBlcmNlbnRTY3JvbGxiYXJYID4gMSAmJiBkZWx0YVggPj0gMCkge1xuICAgICAgICAgIHRoaXMub2Zmc2V0U2Nyb2xsWCA9IHRoaXMuc2Nyb2xsQXJlYVNpemVYO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMub2Zmc2V0U2Nyb2xsWCAtPSBkZWx0YVg7XG4gICAgfVxuICB9XG5cbiAgaXNDb21wb25lbnRWaXNpYmxlKGNvbXBvbmVudCkge1xuICAgIGlmKENvbnN0YW50cy5TZXR0aW5nLkRJU0FCTEVfT1BUSU1JWkFUSU9OUykgcmV0dXJuIHRydWU7XG4gICAgXG4gICAgaWYoY29tcG9uZW50IGluc3RhbmNlb2YgQ29tcG9uZW50ICYmICFjb21wb25lbnQuaGlkZGVuKSB7XG4gICAgICBpZighQ29uc3RhbnRzLlNldHRpbmcuRElTQUJMRV9JU19DT01QT05FTlRfVklTSUJMRV9PUFRJTUlaQVRJT05TICYmIHRoaXMucGFyZW50ICYmIHRoaXMucGFyZW50LmlzQ29tcG9uZW50VmlzaWJsZSAmJiAhdGhpcy5wYXJlbnQuaXNDb21wb25lbnRWaXNpYmxlKGNvbXBvbmVudCkpIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgfVxuXG4gICAgICBjb25zdCB3aWR0aCA9IHRoaXMud2lkdGg7XG4gICAgICBjb25zdCBoZWlnaHQgPSB0aGlzLmhlaWdodDtcbiAgICAgIGNvbnN0IGNvbXBvbmVudFdpZHRoID0gY29tcG9uZW50LndpZHRoO1xuICAgICAgY29uc3QgY29tcG9uZW50SGVpZ2h0ID0gY29tcG9uZW50LmhlaWdodDtcbiAgICAgIGNvbnN0IGNhbnZhc1dpZHRoID0gKHRoaXMuY2FudmFzICYmIHRoaXMuY2FudmFzLndpZHRoKSB8fCB3aWR0aDtcbiAgICAgIGNvbnN0IGNhbnZhc0hlaWdodCA9ICh0aGlzLmNhbnZhcyAmJiB0aGlzLmNhbnZhcy5oZWlnaHQpIHx8IGhlaWdodDtcblxuICAgICAgaWYoY29tcG9uZW50LnggKyBjb21wb25lbnRXaWR0aCA+PSB0aGlzLnggJiYgY29tcG9uZW50LnggPD0gdGhpcy54ICsgd2lkdGggJiYgY29tcG9uZW50LnkgKyBjb21wb25lbnRIZWlnaHQgPj0gdGhpcy55ICYmIGNvbXBvbmVudC55IDw9IHRoaXMueSArIGhlaWdodCAmJiBjb21wb25lbnQueCArIGNvbXBvbmVudFdpZHRoID49IDAgJiYgY29tcG9uZW50LnggPD0gY2FudmFzV2lkdGggJiYgY29tcG9uZW50LnkgKyBjb21wb25lbnRIZWlnaHQgPj0gMCAmJiBjb21wb25lbnQueSA8PSBjYW52YXNIZWlnaHQpIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgZ2V0IGlzQ3V0dGluZygpIHtcbiAgICByZXR1cm4gIUNvbnN0YW50cy5TZXR0aW5nLkRJU0FCTEVfQ09OVEFJTkVSU19DVVRUSU5HICYmICgoKHRoaXMubWF4V2lkdGggJiYgdGhpcy5pbm5lcldpZHRoID4gdGhpcy5tYXhXaWR0aCkgfHwgKHRoaXMubWF4SGVpZ2h0ICYmIHRoaXMuaW5uZXJIZWlnaHQgPiB0aGlzLm1heEhlaWdodCkpKSAmJiB0aGlzLmNhbnZhc1RtcCAhPSBudWxsO1xuICB9XG5cbiAgZ2V0IGRlZmF1bHRTdHlsZSgpIHtcbiAgICByZXR1cm4gbmV3IFN0eWxlKHtcbiAgICAgIFwicGFkZGluZ1wiOiAwLFxuICAgICAgXCJzcGFjZUJldHdlZW5Db21wb25lbnRzXCI6IENvbnN0YW50cy5TZXR0aW5nLkRFRkFVTFRfU1BBQ0lOR1xuICAgIH0pO1xuICB9XG59IiwiLypcbiAqIENvcHlyaWdodCAoQykgMjAyMCBFbGlhc3RpayAoZWxpYXN0aWtzb2Z0cy5jb20pXG4gKlxuICogVGhpcyBmaWxlIGlzIHBhcnQgb2YgXCJKU0dhbWVUb29sc1wiLlxuICpcbiAqIFwiSlNHYW1lVG9vbHNcIiBpcyBmcmVlIHNvZnR3YXJlOiB5b3UgY2FuIHJlZGlzdHJpYnV0ZSBpdCBhbmQvb3IgbW9kaWZ5XG4gKiBpdCB1bmRlciB0aGUgdGVybXMgb2YgdGhlIEdOVSBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlIGFzIHB1Ymxpc2hlZCBieVxuICogdGhlIEZyZWUgU29mdHdhcmUgRm91bmRhdGlvbiwgZWl0aGVyIHZlcnNpb24gMyBvZiB0aGUgTGljZW5zZSwgb3JcbiAqIChhdCB5b3VyIG9wdGlvbikgYW55IGxhdGVyIHZlcnNpb24uXG4gKlxuICogXCJKU0dhbWVUb29sc1wiIGlzIGRpc3RyaWJ1dGVkIGluIHRoZSBob3BlIHRoYXQgaXQgd2lsbCBiZSB1c2VmdWwsXG4gKiBidXQgV0lUSE9VVCBBTlkgV0FSUkFOVFk7IHdpdGhvdXQgZXZlbiB0aGUgaW1wbGllZCB3YXJyYW50eSBvZlxuICogTUVSQ0hBTlRBQklMSVRZIG9yIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFLiAgU2VlIHRoZVxuICogR05VIEdlbmVyYWwgUHVibGljIExpY2Vuc2UgZm9yIG1vcmUgZGV0YWlscy5cbiAqXG4gKiBZb3Ugc2hvdWxkIGhhdmUgcmVjZWl2ZWQgYSBjb3B5IG9mIHRoZSBHTlUgR2VuZXJhbCBQdWJsaWMgTGljZW5zZVxuICogYWxvbmcgd2l0aCBcIkpTR2FtZVRvb2xzXCIuICBJZiBub3QsIHNlZSA8aHR0cDovL3d3dy5nbnUub3JnL2xpY2Vuc2VzLz4uXG4gKi9cbmltcG9ydCBDb21wb25lbnQgZnJvbSBcIi4vQ29tcG9uZW50XCI7XG5pbXBvcnQgQ29uc3RhbnRzIGZyb20gXCIuL0NvbnN0YW50c1wiO1xuaW1wb3J0IFV0aWxzIGZyb20gXCIuL1V0aWxzXCI7XG5pbXBvcnQgU3R5bGUgZnJvbSBcIi4vU3R5bGVcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ3Jvc3MgZXh0ZW5kcyBDb21wb25lbnQge1xuICBzZWxlY3RhYmxlID0gZmFsc2U7XG5cbiAgY29uc3RydWN0b3IoeCwgeSwgd2lkdGgsIGhlaWdodCwgc3R5bGUpIHtcbiAgICBzdXBlcih4LCB5LCB3aWR0aCwgaGVpZ2h0LCBzdHlsZSk7XG4gIH1cblxuICBkcmF3KGNvbnRleHQpIHtcbiAgICBpZih0aGlzLmhpZGRlbikgcmV0dXJuO1xuICAgIHN1cGVyLmRyYXcoY29udGV4dCk7XG5cbiAgICBjb25zdCBjYW52YXMgPSBjb250ZXh0LmNhbnZhcztcbiAgICBjb25zdCBjdHggPSBjYW52YXMuZ2V0Q29udGV4dChcIjJkXCIpO1xuICAgIFxuICAgIFV0aWxzLmRyYXdDcm9zcyhjdHgsIHRoaXMueCwgdGhpcy55LCB0aGlzLndpZHRoLCB0aGlzLmhlaWdodCwgdGhpcy5zdHlsZS5saW5lV2lkdGgsIHRoaXMuc3R5bGUuY29sb3IsIHRoaXMuc3R5bGUubGluZUNhcCk7XG5cbiAgICB0aGlzLmluaXQgPSB0cnVlO1xuICB9XG5cbiAgZ2V0IHdpZHRoKCkge1xuICAgIHJldHVybiBzdXBlci53aWR0aCArIHRoaXMuc3R5bGUubGluZVdpZHRoO1xuICB9XG5cbiAgZ2V0IGhlaWdodCgpIHtcbiAgICByZXR1cm4gc3VwZXIuaGVpZ2h0ICsgdGhpcy5zdHlsZS5saW5lV2lkdGg7XG4gIH1cblxuICBzZXQgd2lkdGgod2lkdGgpIHtcbiAgICBzdXBlci53aWR0aCA9IHdpZHRoO1xuICB9XG5cbiAgc2V0IGhlaWdodChoZWlnaHQpIHtcbiAgICBzdXBlci5oZWlnaHQgPSBoZWlnaHQ7XG4gIH1cblxuICBnZXQgZGVmYXVsdFN0eWxlKCkge1xuICAgIHJldHVybiBuZXcgU3R5bGUoe1xuICAgICAgXCJsaW5lV2lkdGhcIjogQ29uc3RhbnRzLlNldHRpbmcuQ1JPU1NfREVGQVVMVF9MSU5FX1NJWkUsXG4gICAgICBcImNvbG9yXCI6IENvbnN0YW50cy5TZXR0aW5nLkNST1NTX0RFRkFVTFRfQ09MT1IsXG4gICAgICBcImxpbmVDYXBcIjogQ29uc3RhbnRzLlNldHRpbmcuQ1JPU1NfREVGQVVMVF9MSU5FX0NBUFxuICAgIH0pO1xuICB9XG59IiwiLypcbiAqIENvcHlyaWdodCAoQykgMjAyMCBFbGlhc3RpayAoZWxpYXN0aWtzb2Z0cy5jb20pXG4gKlxuICogVGhpcyBmaWxlIGlzIHBhcnQgb2YgXCJKU0dhbWVUb29sc1wiLlxuICpcbiAqIFwiSlNHYW1lVG9vbHNcIiBpcyBmcmVlIHNvZnR3YXJlOiB5b3UgY2FuIHJlZGlzdHJpYnV0ZSBpdCBhbmQvb3IgbW9kaWZ5XG4gKiBpdCB1bmRlciB0aGUgdGVybXMgb2YgdGhlIEdOVSBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlIGFzIHB1Ymxpc2hlZCBieVxuICogdGhlIEZyZWUgU29mdHdhcmUgRm91bmRhdGlvbiwgZWl0aGVyIHZlcnNpb24gMyBvZiB0aGUgTGljZW5zZSwgb3JcbiAqIChhdCB5b3VyIG9wdGlvbikgYW55IGxhdGVyIHZlcnNpb24uXG4gKlxuICogXCJKU0dhbWVUb29sc1wiIGlzIGRpc3RyaWJ1dGVkIGluIHRoZSBob3BlIHRoYXQgaXQgd2lsbCBiZSB1c2VmdWwsXG4gKiBidXQgV0lUSE9VVCBBTlkgV0FSUkFOVFk7IHdpdGhvdXQgZXZlbiB0aGUgaW1wbGllZCB3YXJyYW50eSBvZlxuICogTUVSQ0hBTlRBQklMSVRZIG9yIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFLiAgU2VlIHRoZVxuICogR05VIEdlbmVyYWwgUHVibGljIExpY2Vuc2UgZm9yIG1vcmUgZGV0YWlscy5cbiAqXG4gKiBZb3Ugc2hvdWxkIGhhdmUgcmVjZWl2ZWQgYSBjb3B5IG9mIHRoZSBHTlUgR2VuZXJhbCBQdWJsaWMgTGljZW5zZVxuICogYWxvbmcgd2l0aCBcIkpTR2FtZVRvb2xzXCIuICBJZiBub3QsIHNlZSA8aHR0cDovL3d3dy5nbnUub3JnL2xpY2Vuc2VzLz4uXG4gKi9cbmV4cG9ydCBkZWZhdWx0IHtcbiAgZWFzZUluQ3ViaWMoeCkge1xuICAgIHJldHVybiB4ICogeCAqIHg7XG4gIH0sXG4gIGVhc2VPdXRCb3VuY2UoeCkge1xuICAgIGNvbnN0IG4xID0gNy41NjI1O1xuICAgIGNvbnN0IGQxID0gMi43NTtcbiAgICBcbiAgICBpZih4IDwgMSAvIGQxKSB7XG4gICAgICByZXR1cm4gbjEgKiB4ICogeDtcbiAgICB9IGVsc2UgaWYoeCA8IDIgLyBkMSkge1xuICAgICAgcmV0dXJuIG4xICogKHggLT0gMS41IC8gZDEpICogeCArIDAuNzU7XG4gICAgfSBlbHNlIGlmKHggPCAyLjUgLyBkMSkge1xuICAgICAgcmV0dXJuIG4xICogKHggLT0gMi4yNSAvIGQxKSAqIHggKyAwLjkzNzU7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiBuMSAqICh4IC09IDIuNjI1IC8gZDEpICogeCArIDAuOTg0Mzc1O1xuICAgIH1cbiAgfSxcbiAgZWFzZUluT3V0Q3ViaWMoeCkge1xuICAgIHJldHVybiB4IDwgMC41ID8gNCAqIHggKiB4ICogeCA6IDEgLSBNYXRoLnBvdygtMiAqIHggKyAyLCAzKSAvIDI7XG4gIH0sXG4gIGVhc2VJbk91dFNpbmUoeCkge1xuICAgIHJldHVybiAtKE1hdGguY29zKE1hdGguUEkgKiB4KSAtIDEpIC8gMjtcbiAgfSxcbiAgZWFzZUluT3V0UXVpbnQoeCkge1xuICAgIHJldHVybiB4IDwgMC41ID8gMTYgKiB4ICogeCAqIHggKiB4ICogeCA6IDEgLSBNYXRoLnBvdygtMiAqIHggKyAyLCA1KSAvIDI7XG4gIH0sXG4gIGVhc2VJbk91dENpcmMoeCkge1xuICAgIHJldHVybiB4IDwgMC41ID8gKDEgLSBNYXRoLnNxcnQoMSAtIE1hdGgucG93KDIgKiB4LCAyKSkpIC8gMiA6IChNYXRoLnNxcnQoMSAtIE1hdGgucG93KC0yICogeCArIDIsIDIpKSArIDEpIC8gMjtcbiAgfSxcbiAgZWFzZUluT3V0UXVhZCh4KSB7XG4gICAgcmV0dXJuIHggPCAwLjUgPyAyICogeCAqIHggOiAxIC0gTWF0aC5wb3coLTIgKiB4ICsgMiwgMikgLyAyO1xuICB9LFxuICBlYXNlSW5PdXRRdWFydCh4KSB7XG4gICAgcmV0dXJuIHggPCAwLjUgPyA4ICogeCAqIHggKiB4ICogeCA6IDEgLSBNYXRoLnBvdygtMiAqIHggKyAyLCA0KSAvIDI7XG4gIH0sXG4gIGVhc2VJbk91dEV4cG8oeCkge1xuICAgIHJldHVybiB4ID09PSAwID8gMCA6IHggPT09IDEgPyAxIDogeCA8IDAuNSA/IE1hdGgucG93KDIsIDIwICogeCAtIDEwKSAvIDIgOiAoMiAtIE1hdGgucG93KDIsIC0yMCAqIHggKyAxMCkpIC8gMjtcbiAgfSxcbiAgZWFzZUluT3V0QmFjayh4KSB7XG4gICAgY29uc3QgYzEgPSAxLjcwMTU4O1xuICAgIGNvbnN0IGMyID0gYzEgKiAxLjUyNTtcbiAgICBcbiAgICByZXR1cm4geCA8IDAuNSA/IChNYXRoLnBvdygyICogeCwgMikgKiAoKGMyICsgMSkgKiAyICogeCAtIGMyKSkgLyAyIDogKE1hdGgucG93KDIgKiB4IC0gMiwgMikgKiAoKGMyICsgMSkgKiAoeCAqIDIgLSAyKSArIGMyKSArIDIpIC8gMjtcbiAgfVxufTsiLCIvKlxuICogQ29weXJpZ2h0IChDKSAyMDIwIEVsaWFzdGlrIChlbGlhc3Rpa3NvZnRzLmNvbSlcbiAqXG4gKiBUaGlzIGZpbGUgaXMgcGFydCBvZiBcIkpTR2FtZVRvb2xzXCIuXG4gKlxuICogXCJKU0dhbWVUb29sc1wiIGlzIGZyZWUgc29mdHdhcmU6IHlvdSBjYW4gcmVkaXN0cmlidXRlIGl0IGFuZC9vciBtb2RpZnlcbiAqIGl0IHVuZGVyIHRoZSB0ZXJtcyBvZiB0aGUgR05VIEdlbmVyYWwgUHVibGljIExpY2Vuc2UgYXMgcHVibGlzaGVkIGJ5XG4gKiB0aGUgRnJlZSBTb2Z0d2FyZSBGb3VuZGF0aW9uLCBlaXRoZXIgdmVyc2lvbiAzIG9mIHRoZSBMaWNlbnNlLCBvclxuICogKGF0IHlvdXIgb3B0aW9uKSBhbnkgbGF0ZXIgdmVyc2lvbi5cbiAqXG4gKiBcIkpTR2FtZVRvb2xzXCIgaXMgZGlzdHJpYnV0ZWQgaW4gdGhlIGhvcGUgdGhhdCBpdCB3aWxsIGJlIHVzZWZ1bCxcbiAqIGJ1dCBXSVRIT1VUIEFOWSBXQVJSQU5UWTsgd2l0aG91dCBldmVuIHRoZSBpbXBsaWVkIHdhcnJhbnR5IG9mXG4gKiBNRVJDSEFOVEFCSUxJVFkgb3IgRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UuICBTZWUgdGhlXG4gKiBHTlUgR2VuZXJhbCBQdWJsaWMgTGljZW5zZSBmb3IgbW9yZSBkZXRhaWxzLlxuICpcbiAqIFlvdSBzaG91bGQgaGF2ZSByZWNlaXZlZCBhIGNvcHkgb2YgdGhlIEdOVSBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlXG4gKiBhbG9uZyB3aXRoIFwiSlNHYW1lVG9vbHNcIi4gIElmIG5vdCwgc2VlIDxodHRwOi8vd3d3LmdudS5vcmcvbGljZW5zZXMvPi5cbiAqL1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRXZlbnQge1xuICBjb25zdHJ1Y3RvcihuYW1lKSB7XG4gICAgdGhpcy5uYW1lID0gbmFtZTtcbiAgICB0aGlzLmNhbGxiYWNrcyA9IFtdO1xuICB9XG5cbiAgcmVnaXN0ZXJDYWxsYmFjayhjYWxsYmFjaykge1xuICAgIHRoaXMuY2FsbGJhY2tzLnB1c2goY2FsbGJhY2spO1xuICB9XG5cbiAgcmVtb3ZlQ2FsbGJhY2soY2FsbGJhY2spIHtcbiAgICB0aGlzLmNhbGxiYWNrcy5maWx0ZXIoY3VycmVudCA9PiBjdXJyZW50ICE9IGNhbGxiYWNrKTtcbiAgfVxuXG4gIHJlbW92ZUFsbENhbGxiYWNrcygpIHtcbiAgICB0aGlzLmNhbGxiYWNrcyA9IFtdO1xuICB9XG59IiwiLypcbiAqIENvcHlyaWdodCAoQykgMjAyMCBFbGlhc3RpayAoZWxpYXN0aWtzb2Z0cy5jb20pXG4gKlxuICogVGhpcyBmaWxlIGlzIHBhcnQgb2YgXCJKU0dhbWVUb29sc1wiLlxuICpcbiAqIFwiSlNHYW1lVG9vbHNcIiBpcyBmcmVlIHNvZnR3YXJlOiB5b3UgY2FuIHJlZGlzdHJpYnV0ZSBpdCBhbmQvb3IgbW9kaWZ5XG4gKiBpdCB1bmRlciB0aGUgdGVybXMgb2YgdGhlIEdOVSBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlIGFzIHB1Ymxpc2hlZCBieVxuICogdGhlIEZyZWUgU29mdHdhcmUgRm91bmRhdGlvbiwgZWl0aGVyIHZlcnNpb24gMyBvZiB0aGUgTGljZW5zZSwgb3JcbiAqIChhdCB5b3VyIG9wdGlvbikgYW55IGxhdGVyIHZlcnNpb24uXG4gKlxuICogXCJKU0dhbWVUb29sc1wiIGlzIGRpc3RyaWJ1dGVkIGluIHRoZSBob3BlIHRoYXQgaXQgd2lsbCBiZSB1c2VmdWwsXG4gKiBidXQgV0lUSE9VVCBBTlkgV0FSUkFOVFk7IHdpdGhvdXQgZXZlbiB0aGUgaW1wbGllZCB3YXJyYW50eSBvZlxuICogTUVSQ0hBTlRBQklMSVRZIG9yIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFLiAgU2VlIHRoZVxuICogR05VIEdlbmVyYWwgUHVibGljIExpY2Vuc2UgZm9yIG1vcmUgZGV0YWlscy5cbiAqXG4gKiBZb3Ugc2hvdWxkIGhhdmUgcmVjZWl2ZWQgYSBjb3B5IG9mIHRoZSBHTlUgR2VuZXJhbCBQdWJsaWMgTGljZW5zZVxuICogYWxvbmcgd2l0aCBcIkpTR2FtZVRvb2xzXCIuICBJZiBub3QsIHNlZSA8aHR0cDovL3d3dy5nbnUub3JnL2xpY2Vuc2VzLz4uXG4gKi9cbmltcG9ydCBMYWJlbCBmcm9tIFwiLi9MYWJlbFwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBGUFNNZXRlciBleHRlbmRzIExhYmVsIHtcbiAgc2VsZWN0YWJsZSA9IGZhbHNlO1xuXG4gIGNvbnN0cnVjdG9yKGRpc3BsYXlGcmFtZXMsIHgsIHksIHN0eWxlKSB7XG4gICAgc3VwZXIobnVsbCwgeCwgeSwgc3R5bGUpO1xuXG4gICAgdGhpcy5kaXNwbGF5RnJhbWVzID0gZGlzcGxheUZyYW1lcyB8fCBmYWxzZTtcbiAgICB0aGlzLmZyYW1lcyA9IDA7XG4gICAgdGhpcy5sYXN0RnJhbWUgPSAwO1xuICAgIHRoaXMuY3VycmVudEZQUyA9IDA7XG5cbiAgICB0aGlzLmludGVydmFsQ291bnRGUFMgPSBzZXRJbnRlcnZhbCgoKSA9PiB0aGlzLmNvdW50RlBTKCksIDEwMDApO1xuICB9XG5cbiAgZHJhdyhjb250ZXh0KSB7XG4gICAgaWYodGhpcy5oaWRkZW4pIHJldHVybjtcbiAgICB0aGlzLnRleHQgPSBcIkZQUzogXCIgKyB0aGlzLmN1cnJlbnRGUFMgKyAodGhpcy5kaXNwbGF5RnJhbWVzID8gXCIgLyBGcmFtZXM6IFwiICsgdGhpcy5mcmFtZXMgOiBcIlwiKTtcbiAgICBzdXBlci5kcmF3KGNvbnRleHQpO1xuICAgIHRoaXMuZnJhbWVzKys7XG4gIH1cblxuICBjb3VudEZQUygpIHtcbiAgICBpZih0aGlzLmxhc3RGcmFtZSA+IDApIHRoaXMuY3VycmVudEZQUyA9IHRoaXMuZnJhbWVzIC0gdGhpcy5sYXN0RnJhbWU7XG4gICAgdGhpcy5sYXN0RnJhbWUgPSB0aGlzLmZyYW1lcztcbiAgfVxufSIsIi8qXG4gKiBDb3B5cmlnaHQgKEMpIDIwMjAgRWxpYXN0aWsgKGVsaWFzdGlrc29mdHMuY29tKVxuICpcbiAqIFRoaXMgZmlsZSBpcyBwYXJ0IG9mIFwiSlNHYW1lVG9vbHNcIi5cbiAqXG4gKiBcIkpTR2FtZVRvb2xzXCIgaXMgZnJlZSBzb2Z0d2FyZTogeW91IGNhbiByZWRpc3RyaWJ1dGUgaXQgYW5kL29yIG1vZGlmeVxuICogaXQgdW5kZXIgdGhlIHRlcm1zIG9mIHRoZSBHTlUgR2VuZXJhbCBQdWJsaWMgTGljZW5zZSBhcyBwdWJsaXNoZWQgYnlcbiAqIHRoZSBGcmVlIFNvZnR3YXJlIEZvdW5kYXRpb24sIGVpdGhlciB2ZXJzaW9uIDMgb2YgdGhlIExpY2Vuc2UsIG9yXG4gKiAoYXQgeW91ciBvcHRpb24pIGFueSBsYXRlciB2ZXJzaW9uLlxuICpcbiAqIFwiSlNHYW1lVG9vbHNcIiBpcyBkaXN0cmlidXRlZCBpbiB0aGUgaG9wZSB0aGF0IGl0IHdpbGwgYmUgdXNlZnVsLFxuICogYnV0IFdJVEhPVVQgQU5ZIFdBUlJBTlRZOyB3aXRob3V0IGV2ZW4gdGhlIGltcGxpZWQgd2FycmFudHkgb2ZcbiAqIE1FUkNIQU5UQUJJTElUWSBvciBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRS4gIFNlZSB0aGVcbiAqIEdOVSBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlIGZvciBtb3JlIGRldGFpbHMuXG4gKlxuICogWW91IHNob3VsZCBoYXZlIHJlY2VpdmVkIGEgY29weSBvZiB0aGUgR05VIEdlbmVyYWwgUHVibGljIExpY2Vuc2VcbiAqIGFsb25nIHdpdGggXCJKU0dhbWVUb29sc1wiLiAgSWYgbm90LCBzZWUgPGh0dHA6Ly93d3cuZ251Lm9yZy9saWNlbnNlcy8+LlxuICovXG5pbXBvcnQgVXRpbHMgZnJvbSBcIi4vVXRpbHNcIjtcbmltcG9ydCBDb21wb25lbnQgZnJvbSBcIi4vQ29tcG9uZW50XCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEltYWdlQ29udGFpbmVyIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgc2VsZWN0YWJsZSA9IGZhbHNlO1xuXG4gIGNvbnN0cnVjdG9yKGltYWdlLCB4LCB5LCB3aWR0aCwgaGVpZ2h0LCBzdHlsZSwgaW1hZ2VMb2FkZXIpIHtcbiAgICBzdXBlcih4LCB5LCB3aWR0aCwgaGVpZ2h0LCBzdHlsZSk7XG4gICAgdGhpcy5pbWFnZTtcbiAgICB0aGlzLmltZ1NyYztcbiAgICB0aGlzLmltYWdlTG9hZGVyID0gaW1hZ2VMb2FkZXI7XG5cbiAgICBpZihpbWFnZSBpbnN0YW5jZW9mIEltYWdlKSB7XG4gICAgICB0aGlzLmltYWdlID0gaW1hZ2U7XG4gICAgICB0aGlzLmltZ1NyYyA9IGltYWdlLnNyYztcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5pbWdTcmMgPSBpbWFnZTtcbiAgICB9XG4gIH1cblxuICBkcmF3KGNvbnRleHQpIHtcbiAgICBpZih0aGlzLmhpZGRlbikgcmV0dXJuO1xuICAgIHN1cGVyLmRyYXcoY29udGV4dCk7XG4gICAgXG4gICAgY29uc3QgY2FudmFzID0gY29udGV4dC5jYW52YXM7XG4gICAgY29uc3QgY3R4ID0gY2FudmFzLmdldENvbnRleHQoXCIyZFwiKTtcbiAgICBjdHguc2F2ZSgpO1xuICAgIFxuICAgIGlmKHRoaXMuaW1nU3JjICE9IG51bGwgJiYgdGhpcy5pbWFnZUxvYWRlciAhPSBudWxsKSB7XG4gICAgICB0aGlzLmxvYWRJbWFnZSh0aGlzLmltYWdlTG9hZGVyKTtcbiAgICB9XG5cbiAgICBpZih0aGlzLmltYWdlICE9IG51bGwpIHtcbiAgICAgIHRoaXMuZHJhd0ltYWdlKGN0eCk7XG4gICAgfVxuXG4gICAgY3R4LnJlc3RvcmUoKTtcbiAgfVxuXG4gIGRyYXdJbWFnZShjdHgpIHtcbiAgICBVdGlscy5kcmF3SW1hZ2UoY3R4LCB0aGlzLmltYWdlLCBNYXRoLnJvdW5kKHRoaXMueCksIE1hdGgucm91bmQodGhpcy55KSwgTWF0aC5yb3VuZCh0aGlzLndpZHRoKSwgTWF0aC5yb3VuZCh0aGlzLmhlaWdodCkpO1xuICB9XG5cbiAgZ2V0IHNpemVzKCkge1xuICAgIGxldCBpbWdXaWR0aCA9IHN1cGVyLndpZHRoO1xuICAgIGxldCBpbWdIZWlnaHQgPSBzdXBlci5oZWlnaHQ7XG5cbiAgICBpZih0aGlzLmltYWdlTG9hZGVyKSB7XG4gICAgICB0aGlzLmxvYWRJbWFnZSh0aGlzLmltYWdlTG9hZGVyKTtcbiAgICB9XG4gICAgXG4gICAgaWYodGhpcy5pbWFnZSAmJiAodGhpcy5pbWFnZS53aWR0aCA+IHN1cGVyLndpZHRoIHx8IHRoaXMuaW1hZ2UuaGVpZ2h0ID4gc3VwZXIuaGVpZ2h0KSkge1xuICAgICAgY29uc3QgYXNwZWN0UmF0aW8gPSB0aGlzLmltYWdlLndpZHRoIC8gdGhpcy5pbWFnZS5oZWlnaHQ7XG4gICAgICBpbWdXaWR0aCA9IE1hdGguZmxvb3Ioc3VwZXIud2lkdGggLyAxLjI1KTtcbiAgICAgIGltZ0hlaWdodCA9IE1hdGguZmxvb3IoaW1nV2lkdGggLyBhc3BlY3RSYXRpbyk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHtcbiAgICAgIHdpZHRoOiBpbWdXaWR0aCxcbiAgICAgIGhlaWdodDogaW1nSGVpZ2h0XG4gICAgfVxuICB9XG5cbiAgZ2V0IGhlaWdodCgpIHtcbiAgICByZXR1cm4gdGhpcy5zaXplcy5oZWlnaHQ7XG4gIH1cblxuICBnZXQgd2lkdGgoKSB7XG4gICAgcmV0dXJuIHRoaXMuc2l6ZXMud2lkdGg7XG4gIH1cblxuICBzZXQgd2lkdGgod2lkdGgpIHtcbiAgICBzdXBlci53aWR0aCA9IHdpZHRoO1xuICB9XG5cbiAgc2V0IGhlaWdodChoZWlnaHQpIHtcbiAgICBzdXBlci5oZWlnaHQgPSBoZWlnaHQ7XG4gIH1cbiAgXG4gIGxvYWRJbWFnZShpbWFnZUxvYWRlcikge1xuICAgIHRoaXMuaW1hZ2UgPSBpbWFnZUxvYWRlci5nZXQodGhpcy5pbWdTcmMpO1xuICB9XG59IiwiLypcbiAqIENvcHlyaWdodCAoQykgMjAyMCBFbGlhc3RpayAoZWxpYXN0aWtzb2Z0cy5jb20pXG4gKlxuICogVGhpcyBmaWxlIGlzIHBhcnQgb2YgXCJKU0dhbWVUb29sc1wiLlxuICpcbiAqIFwiSlNHYW1lVG9vbHNcIiBpcyBmcmVlIHNvZnR3YXJlOiB5b3UgY2FuIHJlZGlzdHJpYnV0ZSBpdCBhbmQvb3IgbW9kaWZ5XG4gKiBpdCB1bmRlciB0aGUgdGVybXMgb2YgdGhlIEdOVSBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlIGFzIHB1Ymxpc2hlZCBieVxuICogdGhlIEZyZWUgU29mdHdhcmUgRm91bmRhdGlvbiwgZWl0aGVyIHZlcnNpb24gMyBvZiB0aGUgTGljZW5zZSwgb3JcbiAqIChhdCB5b3VyIG9wdGlvbikgYW55IGxhdGVyIHZlcnNpb24uXG4gKlxuICogXCJKU0dhbWVUb29sc1wiIGlzIGRpc3RyaWJ1dGVkIGluIHRoZSBob3BlIHRoYXQgaXQgd2lsbCBiZSB1c2VmdWwsXG4gKiBidXQgV0lUSE9VVCBBTlkgV0FSUkFOVFk7IHdpdGhvdXQgZXZlbiB0aGUgaW1wbGllZCB3YXJyYW50eSBvZlxuICogTUVSQ0hBTlRBQklMSVRZIG9yIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFLiAgU2VlIHRoZVxuICogR05VIEdlbmVyYWwgUHVibGljIExpY2Vuc2UgZm9yIG1vcmUgZGV0YWlscy5cbiAqXG4gKiBZb3Ugc2hvdWxkIGhhdmUgcmVjZWl2ZWQgYSBjb3B5IG9mIHRoZSBHTlUgR2VuZXJhbCBQdWJsaWMgTGljZW5zZVxuICogYWxvbmcgd2l0aCBcIkpTR2FtZVRvb2xzXCIuICBJZiBub3QsIHNlZSA8aHR0cDovL3d3dy5nbnUub3JnL2xpY2Vuc2VzLz4uXG4gKi9cbmltcG9ydCBVdGlscyBmcm9tIFwiLi9VdGlsc1wiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBJbWFnZUxvYWRlciB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHRoaXMuaW1hZ2VzID0ge307XG4gICAgdGhpcy5pbWFnZXNSZXNpemVkID0ge307XG4gICAgdGhpcy50cmllZExvYWRpbmcgPSAwO1xuICAgIHRoaXMuaGFzRXJyb3IgPSBmYWxzZTtcbiAgICB0aGlzLm5iSW1hZ2VzVG9Mb2FkID0gMTtcbiAgICB0aGlzLmZpcnN0SW1hZ2UgPSB0cnVlO1xuICB9XG5cbiAgbG9hZChpbWcsIGZ1bmMpIHtcbiAgICBpZih0aGlzLmZpcnN0SW1hZ2UpIHtcbiAgICAgIHRoaXMubmJJbWFnZXNUb0xvYWQgPSBpbWcubGVuZ3RoO1xuICAgICAgdGhpcy5maXJzdEltYWdlID0gZmFsc2U7XG4gICAgfVxuICAgIFxuICAgIGlmKGltZy5sZW5ndGggPiAwKSB7XG4gICAgICB0aGlzLmxvYWRJbWFnZShpbWdbMF0sIHJlc3VsdCA9PiB7XG4gICAgICAgIGlmKHJlc3VsdCA9PSB0cnVlKSB7XG4gICAgICAgICAgaW1nLnNoaWZ0KCk7XG4gICAgICAgICAgdGhpcy5sb2FkKGltZywgZnVuYyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdGhpcy5oYXNFcnJvciA9IHRydWU7XG4gICAgICAgICAgcmV0dXJuIGZ1bmMoKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiBmdW5jKCk7XG4gICAgfVxuICB9XG5cbiAgbG9hZEltYWdlKHNyYywgZnVuYykge1xuICAgIHRoaXMudHJpZWRMb2FkaW5nKys7XG4gIFxuICAgIGNvbnN0IGltYWdlID0gbmV3IEltYWdlKCk7XG4gICAgaW1hZ2Uuc3JjID0gc3JjO1xuICBcbiAgICBpbWFnZS5vbmxvYWQgPSAoKSA9PiB7XG4gICAgICBpZih0aGlzLmltYWdlcyAhPSBudWxsKSB7XG4gICAgICAgIHRoaXMuaW1hZ2VzW3NyY10gPSBpbWFnZTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiBmdW5jKGZhbHNlKTtcbiAgICAgIH1cbiAgXG4gICAgICB0aGlzLnRyaWVkTG9hZGluZyA9IDA7XG4gICAgICByZXR1cm4gZnVuYyh0cnVlKTtcbiAgICB9O1xuICBcbiAgICBpbWFnZS5vbmVycm9yID0gKCkgPT4ge1xuICAgICAgaWYodGhpcy50cmllZExvYWRpbmcgPj0gNSkge1xuICAgICAgICBpZih0aGlzLmltYWdlcyAhPSBudWxsKSB7XG4gICAgICAgICAgdGhpcy5pbWFnZXNbc3JjXSA9IGltYWdlO1xuICAgICAgICB9XG4gIFxuICAgICAgICB0aGlzLnRyaWVkTG9hZGluZyA9IDA7XG4gICAgICAgIHJldHVybiBmdW5jKGZhbHNlKTtcbiAgICAgIH1cbiAgXG4gICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgdGhpcy5sb2FkSW1hZ2Uoc3JjLCBmdW5jKTtcbiAgICAgIH0sIDI1MCk7XG4gICAgfVxuICB9XG5cbiAgZ2V0KHNyYywgd2lkdGgsIGhlaWdodCkge1xuICAgIGlmKHRoaXMuaW1hZ2VzICE9IG51bGwgJiYgdGhpcy5pbWFnZXMuaGFzT3duUHJvcGVydHkoc3JjKSkge1xuICAgICAgY29uc3QgaW1hZ2UgPSB0aGlzLmltYWdlc1tzcmNdO1xuXG4gICAgICBpZigod2lkdGggfHwgaGVpZ2h0KSAmJiAoaW1hZ2Uud2lkdGggIT0gd2lkdGggfHwgaW1hZ2UuaGVpZ2h0ICE9IGhlaWdodCkpIHtcbiAgICAgICAgY29uc3QgdyA9IE1hdGgucm91bmQod2lkdGgpO1xuICAgICAgICBjb25zdCBoID0gTWF0aC5yb3VuZChoZWlnaHQpO1xuICAgICAgICBjb25zdCBpZCA9IHNyYyArIFwiQFwiICsgdyArIFwiLVwiICsgaDtcblxuICAgICAgICBpZighdGhpcy5pbWFnZXNSZXNpemVkLmhhc093blByb3BlcnR5KGlkKSkge1xuICAgICAgICAgIGNvbnN0IGNhbnZhc1RtcCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJjYW52YXNcIik7XG4gICAgICAgICAgY29uc3QgY3R4ID0gY2FudmFzVG1wLmdldENvbnRleHQoXCIyZFwiKTtcbiAgICAgICAgICBjYW52YXNUbXAud2lkdGggPSB3O1xuICAgICAgICAgIGNhbnZhc1RtcC5oZWlnaHQgPSBoO1xuXG4gICAgICAgICAgVXRpbHMuZHJhd0ltYWdlKGN0eCwgaW1hZ2UsIDAsIDAsIHcsIGgsIDAsIDAsIGltYWdlLndpZHRoLCBpbWFnZS5oZWlnaHQpO1xuICAgICAgICAgIHRoaXMuaW1hZ2VzUmVzaXplZFtpZF0gPSBjYW52YXNUbXA7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gdGhpcy5pbWFnZXNSZXNpemVkW2lkXTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiBpbWFnZTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuICB9XG5cbiAgY2xlYXIoKSB7XG4gICAgdGhpcy5pbWFnZXMgPSBudWxsO1xuICB9XG59IiwiLypcbiAqIENvcHlyaWdodCAoQykgMjAyMCBFbGlhc3RpayAoZWxpYXN0aWtzb2Z0cy5jb20pXG4gKlxuICogVGhpcyBmaWxlIGlzIHBhcnQgb2YgXCJKU0dhbWVUb29sc1wiLlxuICpcbiAqIFwiSlNHYW1lVG9vbHNcIiBpcyBmcmVlIHNvZnR3YXJlOiB5b3UgY2FuIHJlZGlzdHJpYnV0ZSBpdCBhbmQvb3IgbW9kaWZ5XG4gKiBpdCB1bmRlciB0aGUgdGVybXMgb2YgdGhlIEdOVSBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlIGFzIHB1Ymxpc2hlZCBieVxuICogdGhlIEZyZWUgU29mdHdhcmUgRm91bmRhdGlvbiwgZWl0aGVyIHZlcnNpb24gMyBvZiB0aGUgTGljZW5zZSwgb3JcbiAqIChhdCB5b3VyIG9wdGlvbikgYW55IGxhdGVyIHZlcnNpb24uXG4gKlxuICogXCJKU0dhbWVUb29sc1wiIGlzIGRpc3RyaWJ1dGVkIGluIHRoZSBob3BlIHRoYXQgaXQgd2lsbCBiZSB1c2VmdWwsXG4gKiBidXQgV0lUSE9VVCBBTlkgV0FSUkFOVFk7IHdpdGhvdXQgZXZlbiB0aGUgaW1wbGllZCB3YXJyYW50eSBvZlxuICogTUVSQ0hBTlRBQklMSVRZIG9yIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFLiAgU2VlIHRoZVxuICogR05VIEdlbmVyYWwgUHVibGljIExpY2Vuc2UgZm9yIG1vcmUgZGV0YWlscy5cbiAqXG4gKiBZb3Ugc2hvdWxkIGhhdmUgcmVjZWl2ZWQgYSBjb3B5IG9mIHRoZSBHTlUgR2VuZXJhbCBQdWJsaWMgTGljZW5zZVxuICogYWxvbmcgd2l0aCBcIkpTR2FtZVRvb2xzXCIuICBJZiBub3QsIHNlZSA8aHR0cDovL3d3dy5nbnUub3JnL2xpY2Vuc2VzLz4uXG4gKi9cbmltcG9ydCBDb25zdGFudHMgZnJvbSBcIi4vQ29uc3RhbnRzXCI7XG5pbXBvcnQgVXRpbHMgZnJvbSBcIi4vVXRpbHNcIjtcbmltcG9ydCBCb3ggZnJvbSBcIi4vQm94XCI7XG5pbXBvcnQgU3R5bGUgZnJvbSBcIi4vU3R5bGVcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgSW5wdXQgZXh0ZW5kcyBCb3gge1xuICBzZWxlY3RhYmxlID0gdHJ1ZTtcbiAgI19wb3NpdGlvblN0YXJ0ID0gMDtcbiAgI19wb3NpdGlvblN0YXJ0Q2xpY2sgPSAwO1xuICAjX3Bvc2l0aW9uRW5kID0gMDtcblxuICBjb25zdHJ1Y3Rvcih4LCB5LCB3aWR0aCwgaGVpZ2h0LCBzdHlsZSwgZGVmYXVsdFRleHQpIHtcbiAgICBzdXBlcih4LCB5LCB3aWR0aCwgaGVpZ2h0LCBzdHlsZSk7XG4gICAgXG4gICAgdGhpcy50ZXh0ID0gZGVmYXVsdFRleHQgfHwgXCJcIjtcbiAgICB0aGlzLiNfcG9zaXRpb25TdGFydCA9IDA7XG4gICAgdGhpcy4jX3Bvc2l0aW9uRW5kID0gMDtcbiAgICB0aGlzLiNfcG9zaXRpb25TdGFydENsaWNrID0gMDtcbiAgICB0aGlzLmxhc3RJbnB1dFRleHQgPSBmYWxzZTtcbiAgICB0aGlzLm9mZnNldFggPSAwO1xuICAgIHRoaXMubGFzdFRpbWUgPSAwO1xuICAgIHRoaXMudG90YWxUaW1lID0gMDtcbiAgICB0aGlzLmNsaWNrQ3VycmVudFBvc2l0aW9uID0gbnVsbDtcbiAgICB0aGlzLnRleHRDYWNoZSA9IG51bGw7XG5cbiAgICB0aGlzLmlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xuICAgIHRoaXMuaW5wdXQuc2V0QXR0cmlidXRlKFwidHlwZVwiLCBcInRleHRcIik7XG4gICAgdGhpcy5pbnB1dC5zdHlsZS5wb3NpdGlvbiA9IFwiYWJzb2x1dGVcIjtcbiAgICB0aGlzLmlucHV0LnN0eWxlLmxlZnQgPSBcIi05OTk5cHhcIjtcbiAgICB0aGlzLmlucHV0LnRhYkluZGV4ID0gLTE7XG4gICAgdGhpcy5pbnB1dC52YWx1ZSA9IHRoaXMudGV4dDtcbiAgICB0aGlzLmlucHV0LmFkZEV2ZW50TGlzdGVuZXIoXCJibHVyXCIsICgpID0+IHRoaXMuc2VsZWN0ZWQgPSBmYWxzZSk7XG4gICAgdGhpcy5pbnB1dC5hZGRFdmVudExpc3RlbmVyKFwiZm9jdXNcIiwgKCkgPT4gdGhpcy5zZWxlY3RlZCA9IHRydWUpO1xuICAgIHRoaXMuaW5wdXQuYWRkRXZlbnRMaXN0ZW5lcihcImlucHV0XCIsICgpID0+IHtcbiAgICAgIHRoaXMudG90YWxUaW1lID0gMFxuICAgICAgdGhpcy5sYXN0SW5wdXRUZXh0ID0gdHJ1ZTtcbiAgICAgIHRoaXMucG9zaXRpb25TdGFydCA9IHRoaXMuaW5wdXQuc2VsZWN0aW9uU3RhcnQ7XG4gICAgICB0aGlzLnBvc2l0aW9uRW5kID0gdGhpcy5pbnB1dC5zZWxlY3Rpb25FbmQ7XG4gICAgfSk7XG5cbiAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKHRoaXMuaW5wdXQpO1xuXG4gICAgdGhpcy5hcHBlbmRUb0NhbnZhcyA9IGZhbHNlO1xuICAgIHRoaXMubm90aWNlTG9nZ2VkID0gZmFsc2U7XG5cbiAgICB0aGlzLmNhbnZhc1RtcCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJjYW52YXNcIik7XG5cbiAgICBjb25zdCBtb3ZlQWN0aW9uQ2FsbGJhY2sgPSAoZGVsdGFYLCBkZWx0YVksIHBvc2l0aW9uKSA9PiB7XG4gICAgICBpZihwb3NpdGlvbikge1xuICAgICAgICBjb25zdCBpQ2xpY2sgPSB0aGlzLmdldExldHRlckNsaWNrZWQocG9zaXRpb24pO1xuICBcbiAgICAgICAgaWYoaUNsaWNrICE9IG51bGwpIHtcbiAgICAgICAgICBpZihpQ2xpY2sgPiB0aGlzLnBvc2l0aW9uU3RhcnRDbGljaykge1xuICAgICAgICAgICAgdGhpcy5zZXRTZWxlY3Rpb25SYW5nZSh0aGlzLnBvc2l0aW9uU3RhcnRDbGljaywgaUNsaWNrLCBcImZvcndhcmRcIik7XG4gICAgICAgICAgfSBlbHNlIGlmKGlDbGljayA8IHRoaXMucG9zaXRpb25TdGFydENsaWNrKSB7XG4gICAgICAgICAgICB0aGlzLnNldFNlbGVjdGlvblJhbmdlKGlDbGljaywgdGhpcy5wb3NpdGlvblN0YXJ0Q2xpY2ssIFwiYmFja3dhcmRcIik7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfTtcblxuICAgIHRoaXMuYWRkRG93bkFjdGlvbihwb3NpdGlvbiA9PiB7XG4gICAgICBjb25zdCBpQ2xpY2sgPSB0aGlzLmdldExldHRlckNsaWNrZWQocG9zaXRpb24pO1xuXG4gICAgICBpZihpQ2xpY2sgIT0gbnVsbCkge1xuICAgICAgICB0aGlzLnBvc2l0aW9uU3RhcnRDbGljayA9IGlDbGljaztcbiAgICAgICAgdGhpcy5zZXRTZWxlY3Rpb25SYW5nZShpQ2xpY2ssIGlDbGljaywgXCJmb3J3YXJkXCIpO1xuICAgICAgfVxuXG4gICAgICB0aGlzLnRvdGFsVGltZSA9IDA7XG4gICAgfSk7XG5cbiAgICB0aGlzLmFkZENsaWNrQWN0aW9uKCgpID0+IHRoaXMuY2xpY2soKSk7XG4gICAgdGhpcy5hZGRNb3ZlQWN0aW9uKG1vdmVBY3Rpb25DYWxsYmFjayk7XG4gICAgdGhpcy5hZGRTY3JvbGxBY3Rpb24obW92ZUFjdGlvbkNhbGxiYWNrKTtcbiAgfVxuXG4gIGRyYXcoY29udGV4dCkge1xuICAgIGlmKHRoaXMuaGlkZGVuKSByZXR1cm47XG4gICAgc3VwZXIuZHJhdyhjb250ZXh0KTtcbiAgICBcbiAgICBjb25zdCBjYW52YXMgPSBjb250ZXh0LmNhbnZhcztcbiAgICBjb25zdCBjdHggPSBjYW52YXMuZ2V0Q29udGV4dChcIjJkXCIpO1xuICAgIGN0eC5zYXZlKCk7XG5cbiAgICBpZih0aGlzLmlucHV0LnNlbGVjdGlvbkVuZCAhPSB0aGlzLnBvc2l0aW9uRW5kKSB0aGlzLnRvdGFsVGltZSA9IDA7XG5cbiAgICBpZih0aGlzLmNhbnZhcyAmJiB0aGlzLmNhbnZhcy5jb250YWluZXIgJiYgIXRoaXMuYXBwZW5kVG9DYW52YXMpIHtcbiAgICAgIGRvY3VtZW50LmJvZHkucmVtb3ZlQ2hpbGQodGhpcy5pbnB1dCk7XG4gICAgICB0aGlzLmNhbnZhcy5jb250YWluZXIuYXBwZW5kQ2hpbGQodGhpcy5pbnB1dCk7XG4gICAgICB0aGlzLmFwcGVuZFRvQ2FudmFzID0gdHJ1ZTtcbiAgICB9IGVsc2UgaWYoIXRoaXMuY2FudmFzICYmICF0aGlzLm5vdGljZUxvZ2dlZCkge1xuICAgICAgY29uc29sZSAmJiBjb25zb2xlLndhcm4gJiYgY29uc29sZS53YXJuKENvbnN0YW50cy5TdHJpbmcuV0FSTklOR19NRVNTQUdFICsgXCIgXCIgKyBDb25zdGFudHMuU3RyaW5nLklOUFVUX0ZVTExTQ1JFRU4pO1xuICAgICAgdGhpcy5ub3RpY2VMb2dnZWQgPSB0cnVlO1xuICAgIH1cblxuICAgIGlmKHRoaXMuc2VsZWN0ZWQgJiYgIXRoaXMuZGlzYWJsZWQpIHtcbiAgICAgIHRoaXMuY2xpY2soKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5ibHVyKCk7XG4gICAgfVxuXG4gICAgdGhpcy50ZXh0ID0gdGhpcy5pbnB1dC52YWx1ZTtcbiAgICB0aGlzLnBvc2l0aW9uU3RhcnQgPSB0aGlzLmlucHV0LnNlbGVjdGlvblN0YXJ0O1xuICAgIHRoaXMucG9zaXRpb25FbmQgPSB0aGlzLmlucHV0LnNlbGVjdGlvbkVuZDtcblxuICAgIGNvbnN0IHRpbWUgPSBwZXJmb3JtYW5jZS5ub3coKTtcbiAgICBsZXQgb2Zmc2V0VGltZSA9IDA7XG5cbiAgICBpZih0aGlzLmxhc3RUaW1lID4gMCkgb2Zmc2V0VGltZSA9IHRpbWUgLSB0aGlzLmxhc3RUaW1lO1xuICAgIHRoaXMubGFzdFRpbWUgPSB0aW1lO1xuICAgIHRoaXMudG90YWxUaW1lICs9IG9mZnNldFRpbWU7XG5cbiAgICB0aGlzLmRyYXdCYWNrZ3JvdW5kKGN0eCk7XG4gICAgdGhpcy5kcmF3Qm9yZGVyKGN0eCk7XG5cbiAgICB0aGlzLmNhbnZhc1RtcC53aWR0aCA9IFV0aWxzLmdldENhbnZhc1dpZHRoKGNhbnZhcykgKiBDb25zdGFudHMuU2V0dGluZy5QSVhFTF9SQVRJTztcbiAgICB0aGlzLmNhbnZhc1RtcC5oZWlnaHQgPSBVdGlscy5nZXRDYW52YXNIZWlnaHQoY2FudmFzKSAqIENvbnN0YW50cy5TZXR0aW5nLlBJWEVMX1JBVElPO1xuICAgIHRoaXMuY2FudmFzVG1wLnN0eWxlLndpZHRoID0gVXRpbHMuZ2V0Q2FudmFzV2lkdGgoY2FudmFzKTtcbiAgICB0aGlzLmNhbnZhc1RtcC5zdHlsZS5oZWlnaHQgPSBVdGlscy5nZXRDYW52YXNIZWlnaHQoY2FudmFzKTtcbiAgICBjb25zdCBjdHhUZXh0ID0gdGhpcy5jYW52YXNUbXAuZ2V0Q29udGV4dChcIjJkXCIpO1xuICAgIFV0aWxzLmNsZWFyKGN0eFRleHQpO1xuICAgIGN0eFRleHQuc2NhbGUoQ29uc3RhbnRzLlNldHRpbmcuUElYRUxfUkFUSU8sIENvbnN0YW50cy5TZXR0aW5nLlBJWEVMX1JBVElPKTtcblxuICAgIHRoaXMudXBkYXRlVGV4dENhY2hlKHRoaXMueCArIDUpO1xuICAgIHRoaXMuYXV0b1Njcm9sbCgpO1xuICAgIHRoaXMuZHJhd1RleHQoY3R4VGV4dCwgdGhpcy54ICsgNSk7XG5cbiAgICBVdGlscy5kcmF3SW1hZ2VEYXRhKGN0eCwgdGhpcy5jYW52YXNUbXAsIHRoaXMueCArIHRoaXMuc3R5bGUuYm9yZGVyU2l6ZSwgdGhpcy55ICsgdGhpcy5zdHlsZS5ib3JkZXJTaXplLCB0aGlzLndpZHRoIC0gdGhpcy5zdHlsZS5ib3JkZXJTaXplICogMiwgdGhpcy5oZWlnaHQgLSB0aGlzLnN0eWxlLmJvcmRlclNpemUgKiAyLCAodGhpcy54ICsgdGhpcy5zdHlsZS5ib3JkZXJTaXplKSAqIENvbnN0YW50cy5TZXR0aW5nLlBJWEVMX1JBVElPLCAodGhpcy55ICsgdGhpcy5zdHlsZS5ib3JkZXJTaXplKSAqIENvbnN0YW50cy5TZXR0aW5nLlBJWEVMX1JBVElPLCAodGhpcy53aWR0aCAtIHRoaXMuc3R5bGUuYm9yZGVyU2l6ZSAqIDIpICAqIENvbnN0YW50cy5TZXR0aW5nLlBJWEVMX1JBVElPLCAodGhpcy5oZWlnaHQgLSB0aGlzLnN0eWxlLmJvcmRlclNpemUgKiAyKSAqIENvbnN0YW50cy5TZXR0aW5nLlBJWEVMX1JBVElPKTtcblxuICAgIGlmKHRoaXMuaG92ZXJlZCB8fCB0aGlzLmNsaWNrZWQpIHtcbiAgICAgIGlmKHRoaXMuY2FudmFzICYmIHRoaXMuY2FudmFzLmNhbnZhcykge1xuICAgICAgICB0aGlzLmNhbnZhcy5jYW52YXMuc3R5bGUuY3Vyc29yID0gXCJ0ZXh0XCI7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBjYW52YXMuc3R5bGUuY3Vyc29yID0gXCJkZWZhdWx0XCI7XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYoIXRoaXMuc2VsZWN0ZWQpIHtcbiAgICAgIHRoaXMudG90YWxUaW1lID0gMDtcbiAgICB9XG5cbiAgICBjdHgucmVzdG9yZSgpO1xuICB9XG5cbiAgZHJhd1RleHQoY3R4VGV4dCwgY3VycmVudFgpIHtcbiAgICBmb3IobGV0IGkgPSAtMTsgaSA8IHRoaXMudGV4dC5sZW5ndGg7IGkrKykge1xuICAgICAgaWYoaSA+IC0xKSB7XG4gICAgICAgIGNvbnN0IHNpemVzID0gdGhpcy50ZXh0Q2FjaGUubGV0dGVyc1tpXS5zaXplcztcblxuICAgICAgICBjb25zdCB4RHJhdyA9IGN1cnJlbnRYIC0gdGhpcy5vZmZzZXRYO1xuICAgICAgICBjb25zdCB5RHJhdyA9IHRoaXMueSArIHRoaXMuc3R5bGUuYm9yZGVyU2l6ZTtcblxuICAgICAgICBpZih0aGlzLmlzTGV0dGVyVmlzaWJsZShpKSkgeyAvLyBEb24ndCBkcmF3IHRoZSB0ZXh0IGlmIGl0IGlzIG91dHNpZGUgdGhlIGlucHV0IChvdmVyZmxvdylcbiAgICAgICAgICBpZih0aGlzLnBvc2l0aW9uU3RhcnQgIT0gdGhpcy5wb3NpdGlvbkVuZCAmJiBpID49IHRoaXMucG9zaXRpb25TdGFydCAmJiBpIDwgdGhpcy5wb3NpdGlvbkVuZCkge1xuICAgICAgICAgICAgdGhpcy5kcmF3SGlnaGxpZ2h0KGN0eFRleHQsIGN1cnJlbnRYLCBzaXplcyk7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgVXRpbHMuZHJhd1RleHQoY3R4VGV4dCwgdGhpcy50ZXh0W2ldLCB0aGlzLnN0eWxlLmZvbnRDb2xvciwgdGhpcy5zdHlsZS5mb250U2l6ZSwgdGhpcy5zdHlsZS5mb250RmFtaWx5LCBcImRlZmF1bHRcIiwgXCJkZWZhdWx0XCIsIHhEcmF3LCB5RHJhdywgZmFsc2UpO1xuICAgICAgICB9XG5cbiAgICAgICAgY3VycmVudFggKz0gc2l6ZXNbXCJ3aWR0aFwiXSArIHRoaXMuc3R5bGUuc3BhY2VCZXR3ZWVuQ29tcG9uZW50cztcbiAgICAgIH1cblxuICAgICAgaWYodGhpcy5wb3NpdGlvbkVuZCA9PSBpICsgMSAmJiB0aGlzLnNlbGVjdGVkKSB7XG4gICAgICAgIGlmKHRoaXMudG90YWxUaW1lIDw9IDUwMCkge1xuICAgICAgICAgIHRoaXMuZHJhd0N1cnNvcihjdHhUZXh0LCBjdXJyZW50WCk7XG4gICAgICAgIH0gZWxzZSBpZih0aGlzLnRvdGFsVGltZSA+IDEwMDApIHtcbiAgICAgICAgICB0aGlzLnRvdGFsVGltZSA9IDA7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gY3VycmVudFg7XG4gIH1cblxuICBkcmF3Q3Vyc29yKGN0eFRleHQsIGN1cnJlbnRYKSB7XG4gICAgY3R4VGV4dC5zdHJva2VTdHlsZSA9IHRoaXMuc3R5bGUuYm9yZGVyQ29sb3I7XG4gICAgY3R4VGV4dC5saW5lV2lkdGggPSAxO1xuICAgIGN0eFRleHQuYmVnaW5QYXRoKCk7XG4gICAgY3R4VGV4dC5tb3ZlVG8oY3VycmVudFggLSB0aGlzLm9mZnNldFgsIHRoaXMueSArIDMpO1xuICAgIGN0eFRleHQubGluZVRvKGN1cnJlbnRYIC0gdGhpcy5vZmZzZXRYLCB0aGlzLnkgKyB0aGlzLnN0eWxlLmZvbnRTaXplKTtcbiAgICBjdHhUZXh0LnN0cm9rZSgpO1xuICB9XG5cbiAgZHJhd0hpZ2hsaWdodChjdHhUZXh0LCBjdXJyZW50WCwgc2l6ZXMpIHtcbiAgICBjdHhUZXh0LmZpbGxTdHlsZSA9IHRoaXMuc3R5bGUuc2VsZWN0Q29sb3I7XG4gICAgY3R4VGV4dC5maWxsUmVjdChjdXJyZW50WCAtIHRoaXMub2Zmc2V0WCwgdGhpcy55ICsgdGhpcy5zdHlsZS5ib3JkZXJTaXplLCBzaXplc1tcIndpZHRoXCJdICsgMiwgdGhpcy5oZWlnaHQgLSB0aGlzLnN0eWxlLmJvcmRlclNpemUgKiAyIC0gMSk7XG4gIH1cblxuICB1cGRhdGVUZXh0Q2FjaGUoY3VycmVudFgpIHtcbiAgICBjb25zdCBjdHggPSB0aGlzLmNhbnZhcyA/IHRoaXMuY2FudmFzLmdldENvbnRleHQoXCIyZFwiKSA6IG51bGw7XG4gICAgY29uc3QgcGFyZW50ID0gKHRoaXMuY2FudmFzICYmIHRoaXMuY2FudmFzLnNjZW5lKSB8fCB0aGlzLmNhbnZhcyB8fCAoY3R4ICYmIGN0eC5jYW52YXMpO1xuXG4gICAgaWYoY3R4ICYmIChDb25zdGFudHMuU2V0dGluZy5ESVNBQkxFX09QVElNSVpBVElPTlMgfHwgIXRoaXMudGV4dENhY2hlIHx8IHRoaXMudGV4dENhY2hlLmZvbnRTaXplICE9IHRoaXMuc3R5bGUuZm9udFNpemUgfHwgdGhpcy50ZXh0Q2FjaGUuZm9udEZhbWlseSAhPSB0aGlzLnN0eWxlLmZvbnRGYW1pbHkgfHwgdGhpcy50ZXh0ICE9IHRoaXMudGV4dENhY2hlLnRleHQgfHwgKHBhcmVudCAmJiBwYXJlbnQud2lkdGggIT0gdGhpcy50ZXh0Q2FjaGUucGFyZW50V2lkdGgpKSkge1xuICAgICAgdGhpcy50ZXh0Q2FjaGUgPSB7IFwiZm9udFNpemVcIjogdGhpcy5zdHlsZS5mb250U2l6ZSwgXCJmb250RmFtaWx5XCI6IHRoaXMuc3R5bGUuZm9udEZhbWlseSwgXCJ0ZXh0XCI6IHRoaXMudGV4dCwgXCJwYXJlbnRXaWR0aFwiOiBwYXJlbnQud2lkdGgsIFwibGV0dGVyc1wiOiBbXSB9O1xuXG4gICAgICBmb3IobGV0IGkgPSAwOyBpIDwgdGhpcy50ZXh0Lmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGNvbnN0IHNpemVzID0gVXRpbHMud3JhcFRleHRMaW5lcyhjdHgsIHRoaXMudGV4dFtpXSwgdGhpcy53aWR0aCwgdGhpcy5zdHlsZS5mb250U2l6ZSwgdGhpcy5zdHlsZS5mb250RmFtaWx5LCB0cnVlKTtcbiAgICAgICAgdGhpcy50ZXh0Q2FjaGUubGV0dGVyc1tpXSA9IHtcInRleHRcIjogdGhpcy50ZXh0W2ldLCBcImN1cnJlbnRYXCI6IGN1cnJlbnRYLCBcInNpemVzXCI6IHNpemVzIH07IFxuICAgICAgICBjdXJyZW50WCArPSBzaXplc1tcIndpZHRoXCJdICsgdGhpcy5zdHlsZS5zcGFjZUJldHdlZW5Db21wb25lbnRzO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIGlzQ2xpY2tDdXJyZW50UG9zaXRpb24ocG9zaXRpb24sIGN1cnJlbnRYLCBzaXplcykge1xuICAgIGlmKHBvc2l0aW9uLnggKyB0aGlzLm9mZnNldFggPD0gY3VycmVudFggKyBzaXplc1tcIndpZHRoXCJdICsgdGhpcy5zdHlsZS5zcGFjZUJldHdlZW5Db21wb25lbnRzICYmIHBvc2l0aW9uLnggKyB0aGlzLm9mZnNldFggPj0gY3VycmVudFgpIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cblxuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIGlzQ2xpY2tBZnRlclBvc2l0aW9uKHBvc2l0aW9uLCBjdXJyZW50WCwgc2l6ZXMpIHtcbiAgICBpZihwb3NpdGlvbi54ICsgdGhpcy5vZmZzZXRYID49IGN1cnJlbnRYICsgc2l6ZXNbXCJ3aWR0aFwiXSArIHRoaXMuc3R5bGUuc3BhY2VCZXR3ZWVuQ29tcG9uZW50cykge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuXG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgZ2V0TGV0dGVyQ2xpY2tlZChwb3NpdGlvbikge1xuICAgIGlmKHRoaXMudGV4dENhY2hlKSB7XG4gICAgICBmb3IobGV0IGkgPSAwOyBpIDwgdGhpcy50ZXh0Lmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGNvbnN0IGxldHRlciA9IHRoaXMudGV4dENhY2hlLmxldHRlcnNbaV07XG4gICAgICAgIFxuICAgICAgICBpZih0aGlzLmlzQ2xpY2tDdXJyZW50UG9zaXRpb24ocG9zaXRpb24sIE1hdGgucm91bmQobGV0dGVyLmN1cnJlbnRYKSwgbGV0dGVyLnNpemVzKSkge1xuICAgICAgICAgIHJldHVybiBpO1xuICAgICAgICB9IGVsc2UgaWYoaSA+PSB0aGlzLnRleHQubGVuZ3RoIC0gMSAmJiB0aGlzLmlzQ2xpY2tBZnRlclBvc2l0aW9uKHBvc2l0aW9uLCBNYXRoLnJvdW5kKGxldHRlci5jdXJyZW50WCksIGxldHRlci5zaXplcykpIHtcbiAgICAgICAgICByZXR1cm4gaSArIDE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBnZXQgY3Vyc29yUG9zaXRpb24oKSB7XG4gICAgaWYodGhpcy50ZXh0Q2FjaGUpIHtcbiAgICAgIGxldCBwb3NpdGlvbiA9IHRoaXMucG9zaXRpb25FbmQgLSAxO1xuXG4gICAgICBpZih0aGlzLnBvc2l0aW9uRW5kICE9IHRoaXMucG9zaXRpb25TdGFydCAmJiB0aGlzLnBvc2l0aW9uRW5kID09IHRoaXMucG9zaXRpb25TdGFydENsaWNrICYmIHRoaXMucG9zaXRpb25TdGFydCA8IHRoaXMucG9zaXRpb25TdGFydENsaWNrKSB7XG4gICAgICAgIHBvc2l0aW9uID0gdGhpcy5wb3NpdGlvblN0YXJ0IC0gMTtcbiAgICAgIH1cbiAgICAgIFxuICAgICAgaWYocG9zaXRpb24gPCAwKSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgXCJjdXJyZW50TGV0dGVyXCI6IHRoaXMudGV4dENhY2hlLmxldHRlcnNbMF0sXG4gICAgICAgICAgXCJ4XCI6IHRoaXMueCArIHRoaXMuc3R5bGUuYm9yZGVyU2l6ZVxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGNvbnN0IGN1cnJlbnRMZXR0ZXIgPSB0aGlzLnRleHRDYWNoZS5sZXR0ZXJzW3Bvc2l0aW9uXTtcblxuICAgICAgaWYoY3VycmVudExldHRlcikge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgIFwiY3VycmVudExldHRlclwiOiBjdXJyZW50TGV0dGVyLFxuICAgICAgICAgIFwieFwiOiBjdXJyZW50TGV0dGVyLmN1cnJlbnRYXG4gICAgICAgIH07XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgaXNMZXR0ZXJWaXNpYmxlKGxldHRlcklkKSB7XG4gICAgaWYodGhpcy50ZXh0Q2FjaGUpIHtcbiAgICAgIGNvbnN0IGxldHRlciA9IHRoaXMudGV4dENhY2hlLmxldHRlcnNbbGV0dGVySWRdO1xuXG4gICAgICBpZihsZXR0ZXIpIHtcbiAgICAgICAgY29uc3QgeERyYXcgPSBsZXR0ZXIuY3VycmVudFggLSB0aGlzLm9mZnNldFg7XG4gIFxuICAgICAgICBpZih4RHJhdyA+PSB0aGlzLnggLSBsZXR0ZXIuc2l6ZXNbXCJ3aWR0aFwiXSAmJiB4RHJhdyA8PSB0aGlzLnggKyB0aGlzLndpZHRoKSB7XG4gICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBhdXRvU2Nyb2xsKCkge1xuICAgIGlmKHRoaXMudGV4dENhY2hlKSB7XG4gICAgICBjb25zdCBjdXJzb3JQb3NpdGlvbiA9IHRoaXMuY3Vyc29yUG9zaXRpb247XG4gICAgICBjb25zdCBjdXJyZW50TGV0dGVyU2l6ZSA9IGN1cnNvclBvc2l0aW9uLmN1cnJlbnRMZXR0ZXIgPyBjdXJzb3JQb3NpdGlvbi5jdXJyZW50TGV0dGVyLnNpemVzW1wid2lkdGhcIl0gOiAwO1xuICAgICAgY29uc3QgY3Vyc29yUG9zaXRpb25Qb3MgPSBjdXJzb3JQb3NpdGlvbi54ICsgY3VycmVudExldHRlclNpemUgKyB0aGlzLnN0eWxlLnNwYWNlQmV0d2VlbkNvbXBvbmVudHM7XG4gICAgICBjb25zdCBjdXJzb3JQb3NpdGlvbk5lZyA9IGN1cnNvclBvc2l0aW9uLnggLSBjdXJyZW50TGV0dGVyU2l6ZSAtIHRoaXMuc3R5bGUuc3BhY2VCZXR3ZWVuQ29tcG9uZW50cztcblxuICAgICAgY29uc3Qgb2Zmc2V0WCA9IE1hdGgubWF4KDAsIE1hdGgucm91bmQoY3Vyc29yUG9zaXRpb25Qb3MgLSB0aGlzLnggLSB0aGlzLndpZHRoICsgdGhpcy5zdHlsZS5ib3JkZXJTaXplICsgdGhpcy5zdHlsZS5zcGFjZUJldHdlZW5Db21wb25lbnRzICogMikpO1xuICAgICAgY29uc3Qgb2Zmc2V0WE5lZyA9IE1hdGgubWF4KDAsIE1hdGgucm91bmQoY3Vyc29yUG9zaXRpb25OZWcgLSB0aGlzLnggLSB0aGlzLnN0eWxlLmJvcmRlclNpemUgLSB0aGlzLnN0eWxlLnNwYWNlQmV0d2VlbkNvbXBvbmVudHMgKiAyKSk7XG5cbiAgICAgIGlmKHRoaXMub2Zmc2V0WCA8IDApIHtcbiAgICAgICAgdGhpcy5vZmZzZXRYID0gMDtcbiAgICAgIH1cblxuICAgICAgaWYoY3Vyc29yUG9zaXRpb25Qb3MgLSB0aGlzLm9mZnNldFggPj0gdGhpcy54ICsgdGhpcy53aWR0aCAtIHRoaXMuc3R5bGUuYm9yZGVyU2l6ZSkge1xuICAgICAgICB0aGlzLm9mZnNldFggPSBvZmZzZXRYO1xuICAgICAgICByZXR1cm4gb2Zmc2V0WDtcbiAgICAgIH0gZWxzZSBpZihjdXJzb3JQb3NpdGlvbk5lZyAtIHRoaXMub2Zmc2V0WCA8PSB0aGlzLnggKyB0aGlzLnN0eWxlLmJvcmRlclNpemUpIHtcbiAgICAgICAgdGhpcy5vZmZzZXRYID0gb2Zmc2V0WE5lZztcbiAgICAgICAgcmV0dXJuIG9mZnNldFhOZWc7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgY2xpY2soKSB7XG4gICAgdGhpcy5pbnB1dC5mb2N1cygpO1xuICB9XG5cbiAgYmx1cigpIHtcbiAgICB0aGlzLmlucHV0LmJsdXIoKTtcbiAgfVxuXG4gIGdldCBwb3NpdGlvblN0YXJ0KCkge1xuICAgIHJldHVybiB0aGlzLiNfcG9zaXRpb25TdGFydDtcbiAgfVxuXG4gIGdldCBwb3NpdGlvblN0YXJ0Q2xpY2soKSB7XG4gICAgcmV0dXJuIHRoaXMuI19wb3NpdGlvblN0YXJ0Q2xpY2s7XG4gIH1cblxuICBnZXQgcG9zaXRpb25FbmQoKSB7XG4gICAgcmV0dXJuIHRoaXMuI19wb3NpdGlvbkVuZDtcbiAgfVxuXG4gIHNldCBwb3NpdGlvblN0YXJ0KHBvc2l0aW9uKSB7XG4gICAgdGhpcy5pbnB1dC5zZWxlY3Rpb25TdGFydCA9IHBvc2l0aW9uO1xuICAgIHRoaXMuI19wb3NpdGlvblN0YXJ0ID0gcG9zaXRpb247XG4gIH1cblxuICBzZXQgcG9zaXRpb25TdGFydENsaWNrKHBvc2l0aW9uKSB7XG4gICAgdGhpcy4jX3Bvc2l0aW9uU3RhcnRDbGljayA9IHBvc2l0aW9uO1xuICB9XG5cbiAgc2V0IHBvc2l0aW9uRW5kKHBvc2l0aW9uKSB7XG4gICAgdGhpcy5pbnB1dC5zZWxlY3Rpb25FbmQgPSBwb3NpdGlvbjtcbiAgICB0aGlzLiNfcG9zaXRpb25FbmQgPSBwb3NpdGlvbjtcbiAgfVxuXG4gIHNldFNlbGVjdGlvblJhbmdlKHN0YXJ0LCBlbmQsIGRpcmVjdGlvbikge1xuICAgIHRoaXMuaW5wdXQuc2V0U2VsZWN0aW9uUmFuZ2Uoc3RhcnQsIGVuZCwgZGlyZWN0aW9uKTtcbiAgICB0aGlzLnBvc2l0aW9uU3RhcnQgPSBzdGFydDtcbiAgICB0aGlzLnBvc2l0aW9uRW5kID0gZW5kO1xuICB9XG5cbiAgZ2V0IGhlaWdodCgpIHtcbiAgICBjb25zdCBib3JkZXJTaXplID0gdGhpcy5zdHlsZSAmJiB0aGlzLnN0eWxlLmJvcmRlclNpemUgPyB0aGlzLnN0eWxlLmJvcmRlclNpemUgOiAwO1xuICAgIHJldHVybiBzdXBlci5oZWlnaHQgPyBzdXBlci5oZWlnaHQgOiB0aGlzLnN0eWxlLmZvbnRTaXplICsgYm9yZGVyU2l6ZSAqIDI7XG4gIH1cblxuICBnZXQgZGVmYXVsdFN0eWxlKCkge1xuICAgIHJldHVybiBuZXcgU3R5bGUoe1xuICAgICAgXCJmb250U2l6ZVwiOiBNYXRoLmZsb29yKENvbnN0YW50cy5TZXR0aW5nLkZPTlRfU0laRSAvIDEuMjUpLFxuICAgICAgXCJmb250RmFtaWx5XCI6IENvbnN0YW50cy5TZXR0aW5nLkZPTlRfRkFNSUxZLFxuICAgICAgXCJmb250Q29sb3JcIjogQ29uc3RhbnRzLlNldHRpbmcuSU5QVVRfREVGQVVMVF9GT05UX0NPTE9SLFxuICAgICAgXCJiYWNrZ3JvdW5kQ29sb3JcIjogQ29uc3RhbnRzLlNldHRpbmcuSU5QVVRfREVGQVVMVF9CQUNLR1JPVU5EX0NPTE9SLFxuICAgICAgXCJib3JkZXJDb2xvclwiOiBDb25zdGFudHMuU2V0dGluZy5JTlBVVF9ERUZBVUxUX0JPUkRFUl9DT0xPUixcbiAgICAgIFwiYm9yZGVyQ29sb3JTZWxlY3RlZFwiOiBDb25zdGFudHMuU2V0dGluZy5JTlBVVF9ERUZBVUxUX0JPUkRFUl9DT0xPUl9TRUxFQ1RFRCxcbiAgICAgIFwic2VsZWN0Q29sb3JcIjogQ29uc3RhbnRzLlNldHRpbmcuSU5QVVRfREVGQVVMVF9TRUxFQ1RfQ09MT1IsXG4gICAgICBcInNwYWNlQmV0d2VlbkNvbXBvbmVudHNcIjogMVxuICAgIH0pO1xuICB9XG59IiwiLypcbiAqIENvcHlyaWdodCAoQykgMjAyMCBFbGlhc3RpayAoZWxpYXN0aWtzb2Z0cy5jb20pXG4gKlxuICogVGhpcyBmaWxlIGlzIHBhcnQgb2YgXCJKU0dhbWVUb29sc1wiLlxuICpcbiAqIFwiSlNHYW1lVG9vbHNcIiBpcyBmcmVlIHNvZnR3YXJlOiB5b3UgY2FuIHJlZGlzdHJpYnV0ZSBpdCBhbmQvb3IgbW9kaWZ5XG4gKiBpdCB1bmRlciB0aGUgdGVybXMgb2YgdGhlIEdOVSBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlIGFzIHB1Ymxpc2hlZCBieVxuICogdGhlIEZyZWUgU29mdHdhcmUgRm91bmRhdGlvbiwgZWl0aGVyIHZlcnNpb24gMyBvZiB0aGUgTGljZW5zZSwgb3JcbiAqIChhdCB5b3VyIG9wdGlvbikgYW55IGxhdGVyIHZlcnNpb24uXG4gKlxuICogXCJKU0dhbWVUb29sc1wiIGlzIGRpc3RyaWJ1dGVkIGluIHRoZSBob3BlIHRoYXQgaXQgd2lsbCBiZSB1c2VmdWwsXG4gKiBidXQgV0lUSE9VVCBBTlkgV0FSUkFOVFk7IHdpdGhvdXQgZXZlbiB0aGUgaW1wbGllZCB3YXJyYW50eSBvZlxuICogTUVSQ0hBTlRBQklMSVRZIG9yIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFLiAgU2VlIHRoZVxuICogR05VIEdlbmVyYWwgUHVibGljIExpY2Vuc2UgZm9yIG1vcmUgZGV0YWlscy5cbiAqXG4gKiBZb3Ugc2hvdWxkIGhhdmUgcmVjZWl2ZWQgYSBjb3B5IG9mIHRoZSBHTlUgR2VuZXJhbCBQdWJsaWMgTGljZW5zZVxuICogYWxvbmcgd2l0aCBcIkpTR2FtZVRvb2xzXCIuICBJZiBub3QsIHNlZSA8aHR0cDovL3d3dy5nbnUub3JnL2xpY2Vuc2VzLz4uXG4gKi9cbmltcG9ydCBDb25zdGFudHMgZnJvbSBcIi4vQ29uc3RhbnRzXCI7XG5pbXBvcnQgVXRpbHMgZnJvbSBcIi4vVXRpbHNcIjtcbmltcG9ydCBDb21wb25lbnQgZnJvbSBcIi4vQ29tcG9uZW50XCI7XG5pbXBvcnQgU3R5bGUgZnJvbSBcIi4vU3R5bGVcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTGFiZWwgZXh0ZW5kcyBDb21wb25lbnQge1xuICBzZWxlY3RhYmxlID0gZmFsc2U7XG4gICNfdGV4dCA9IFwiXCI7XG5cbiAgY29uc3RydWN0b3IodGV4dCwgeCwgeSwgc3R5bGUpIHtcbiAgICBzdXBlcih4LCB5LCBudWxsLCBudWxsLCBzdHlsZSk7XG4gICAgdGhpcy50ZXh0ID0gdGV4dDtcbiAgICB0aGlzLnNpemVzQ2FjaGUgPSBudWxsO1xuXG4gICAgaWYoIUNvbnN0YW50cy5TZXR0aW5nLkRJU0FCTEVfRVhQRVJJTUVOVEFMX09QVElNSVpBVElPTlMpIHtcbiAgICAgIHRoaXMudXBkYXRlU2l6ZXMoKTtcblxuICAgICAgdGhpcy5hZGRDaGFuZ2VBY3Rpb24oY29tcG9uZW50Q2hhbmdlZCA9PiB7XG4gICAgICAgIHRoaXMudXBkYXRlU2l6ZXMoKTtcbiAgICAgICAgY29tcG9uZW50Q2hhbmdlZCAhPSB0aGlzLnBhcmVudCAmJiB0aGlzLnBhcmVudCAmJiB0aGlzLnBhcmVudC5yZWFjdG9yICYmIHRoaXMucGFyZW50LnJlYWN0b3IuZGlzcGF0Y2hFdmVudChcIm9uQ2hhbmdlXCIsIHRoaXMpO1xuICAgICAgfSk7XG4gICAgfVxuICB9XG5cbiAgZHJhdyhjb250ZXh0KSB7XG4gICAgaWYodGhpcy5oaWRkZW4pIHJldHVybjtcbiAgICBzdXBlci5kcmF3KGNvbnRleHQpO1xuICAgIFxuICAgIGNvbnN0IGNhbnZhcyA9IGNvbnRleHQuY2FudmFzO1xuICAgIGNvbnN0IGN0eCA9IGNhbnZhcy5nZXRDb250ZXh0KFwiMmRcIik7XG4gICAgY3R4LnNhdmUoKTtcblxuICAgIFV0aWxzLmRyYXdUZXh0KGN0eCwgdGhpcy50ZXh0LCB0aGlzLnN0eWxlLmZvbnRDb2xvciwgdGhpcy5zdHlsZS5mb250U2l6ZSwgdGhpcy5zdHlsZS5mb250RmFtaWx5LCB0aGlzLnN0eWxlLmFsaWduZW1lbnQsIHRoaXMuc3R5bGUudmVydGljYWxBbGlnbmVtZW50LCB0aGlzLngsIHRoaXMueSwgdGhpcy5zdHlsZS53cmFwLCB0aGlzLnN0eWxlLmJvbGQsIHRoaXMuc3R5bGUudW5kZXJsaW5lLCBudWxsLCB0aGlzLnBhcmVudCk7XG5cbiAgICBjdHgucmVzdG9yZSgpO1xuICB9XG5cbiAgc2V0IHRleHQodGV4dCkge1xuICAgIGlmKHRleHQgIT0gdGhpcy4jX3RleHQpIHtcbiAgICAgIHRoaXMuI190ZXh0ID0gdGV4dDtcbiAgICAgIHRoaXMucmVhY3Rvci5kaXNwYXRjaEV2ZW50KFwib25DaGFuZ2VcIiwgdGhpcyk7XG4gICAgfVxuICB9XG5cbiAgZ2V0IHRleHQoKSB7XG4gICAgcmV0dXJuIHRoaXMuI190ZXh0O1xuICB9XG5cbiAgdXBkYXRlU2l6ZXMoKSB7XG4gICAgY29uc3QgY3R4ID0gdGhpcy5jYW52YXMgPyB0aGlzLmNhbnZhcy5nZXRDb250ZXh0KFwiMmRcIikgOiBudWxsO1xuICAgIGNvbnN0IHBhcmVudCA9ICh0aGlzLmNhbnZhcyAmJiB0aGlzLmNhbnZhcy5zY2VuZSkgfHwgdGhpcy5jYW52YXMgfHwgKGN0eCAmJiBjdHguY2FudmFzKSB8fCB0aGlzLnBhcmVudDtcbiAgICBcbiAgICBpZihjdHggJiYgKENvbnN0YW50cy5TZXR0aW5nLkRJU0FCTEVfT1BUSU1JWkFUSU9OUyB8fCAhdGhpcy5zaXplc0NhY2hlIHx8IHRoaXMuc2l6ZXNDYWNoZS5mb250U2l6ZSAhPSB0aGlzLnN0eWxlLmZvbnRTaXplIHx8IHRoaXMuc2l6ZXNDYWNoZS5mb250RmFtaWx5ICE9IHRoaXMuc3R5bGUuZm9udEZhbWlseSB8fCB0aGlzLnNpemVzQ2FjaGUud3JhcCAhPSB0aGlzLnN0eWxlLndyYXAgfHwgdGhpcy50ZXh0ICE9IHRoaXMuc2l6ZXNDYWNoZS50ZXh0IHx8IChwYXJlbnQgJiYgcGFyZW50LndpZHRoICE9IHRoaXMuc2l6ZXNDYWNoZS5wYXJlbnRXaWR0aCkgfHwgdGhpcy5zaXplc0NhY2hlLnZhbHVlID09IG51bGwpKSB7XG4gICAgICBjb25zdCBzaXplcyA9IFV0aWxzLndyYXBUZXh0TGluZXMoY3R4LCB0aGlzLnRleHQsIG51bGwsIHRoaXMuc3R5bGUuZm9udFNpemUsIHRoaXMuc3R5bGUuZm9udEZhbWlseSwgIXRoaXMuc3R5bGUud3JhcCk7XG4gICAgICBcbiAgICAgIGlmKHBhcmVudCkge1xuICAgICAgICB0aGlzLnNpemVzQ2FjaGUgPSB7IFwiZm9udFNpemVcIjogdGhpcy5zdHlsZS5mb250U2l6ZSwgXCJmb250RmFtaWx5XCI6IHRoaXMuc3R5bGUuZm9udEZhbWlseSwgXCJ3cmFwXCI6IHRoaXMuc3R5bGUud3JhcCwgXCJ0ZXh0XCI6IHRoaXMudGV4dCwgXCJwYXJlbnRXaWR0aFwiOiBwYXJlbnQud2lkdGgsIFwidmFsdWVcIjogc2l6ZXMgfTtcbiAgICAgICAgdGhpcy5yZWFjdG9yLmRpc3BhdGNoRXZlbnQoXCJvbkNoYW5nZVwiLCB0aGlzKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gdGhpcy5zaXplc0NhY2hlICYmIHRoaXMuc2l6ZXNDYWNoZS52YWx1ZTtcbiAgfVxuXG4gIGdldCBzaXplcygpIHtcbiAgICBpZihDb25zdGFudHMuU2V0dGluZy5ESVNBQkxFX0VYUEVSSU1FTlRBTF9PUFRJTUlaQVRJT05TKSB0aGlzLnVwZGF0ZVNpemVzKCk7XG4gICAgcmV0dXJuIHRoaXMuc2l6ZXNDYWNoZSA/IHRoaXMuc2l6ZXNDYWNoZS52YWx1ZSA6IG51bGw7XG4gIH1cblxuICBnZXQgaGVpZ2h0KCkge1xuICAgIGNvbnN0IHNpemVzID0gdGhpcy5zaXplcztcbiAgICByZXR1cm4gc2l6ZXMgJiYgc2l6ZXNbXCJoZWlnaHRcIl07XG4gIH1cblxuICBnZXQgd2lkdGgoKSB7XG4gICAgY29uc3Qgc2l6ZXMgPSB0aGlzLnNpemVzO1xuICAgIHJldHVybiBzaXplcyAmJiBzaXplc1tcIndpZHRoXCJdO1xuICB9XG5cbiAgZ2V0IGRlZmF1bHRTdHlsZSgpIHtcbiAgICByZXR1cm4gbmV3IFN0eWxlKHtcbiAgICAgIFwiZm9udENvbG9yXCI6IENvbnN0YW50cy5TZXR0aW5nLkxBQkVMX0RFRkFVTFRfRk9OVF9DT0xPUixcbiAgICAgIFwid3JhcFwiOiB0cnVlLFxuICAgICAgXCJib2xkXCI6IGZhbHNlLFxuICAgICAgXCJ1bmRlcmxpbmVcIjogZmFsc2VcbiAgICB9KTtcbiAgfVxufSIsIi8qXG4gKiBDb3B5cmlnaHQgKEMpIDIwMjAgRWxpYXN0aWsgKGVsaWFzdGlrc29mdHMuY29tKVxuICpcbiAqIFRoaXMgZmlsZSBpcyBwYXJ0IG9mIFwiSlNHYW1lVG9vbHNcIi5cbiAqXG4gKiBcIkpTR2FtZVRvb2xzXCIgaXMgZnJlZSBzb2Z0d2FyZTogeW91IGNhbiByZWRpc3RyaWJ1dGUgaXQgYW5kL29yIG1vZGlmeVxuICogaXQgdW5kZXIgdGhlIHRlcm1zIG9mIHRoZSBHTlUgR2VuZXJhbCBQdWJsaWMgTGljZW5zZSBhcyBwdWJsaXNoZWQgYnlcbiAqIHRoZSBGcmVlIFNvZnR3YXJlIEZvdW5kYXRpb24sIGVpdGhlciB2ZXJzaW9uIDMgb2YgdGhlIExpY2Vuc2UsIG9yXG4gKiAoYXQgeW91ciBvcHRpb24pIGFueSBsYXRlciB2ZXJzaW9uLlxuICpcbiAqIFwiSlNHYW1lVG9vbHNcIiBpcyBkaXN0cmlidXRlZCBpbiB0aGUgaG9wZSB0aGF0IGl0IHdpbGwgYmUgdXNlZnVsLFxuICogYnV0IFdJVEhPVVQgQU5ZIFdBUlJBTlRZOyB3aXRob3V0IGV2ZW4gdGhlIGltcGxpZWQgd2FycmFudHkgb2ZcbiAqIE1FUkNIQU5UQUJJTElUWSBvciBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRS4gIFNlZSB0aGVcbiAqIEdOVSBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlIGZvciBtb3JlIGRldGFpbHMuXG4gKlxuICogWW91IHNob3VsZCBoYXZlIHJlY2VpdmVkIGEgY29weSBvZiB0aGUgR05VIEdlbmVyYWwgUHVibGljIExpY2Vuc2VcbiAqIGFsb25nIHdpdGggXCJKU0dhbWVUb29sc1wiLiAgSWYgbm90LCBzZWUgPGh0dHA6Ly93d3cuZ251Lm9yZy9saWNlbnNlcy8+LlxuICovXG5pbXBvcnQgQ29uc3RhbnRzIGZyb20gXCIuL0NvbnN0YW50c1wiO1xuaW1wb3J0IExhYmVsIGZyb20gXCIuL0xhYmVsXCI7XG5pbXBvcnQgU3R5bGUgZnJvbSBcIi4vU3R5bGVcIjtcbmltcG9ydCBVdGlscyBmcm9tIFwiLi9VdGlsc1wiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBMaW5rIGV4dGVuZHMgTGFiZWwge1xuICBzZWxlY3RhYmxlID0gdHJ1ZTtcblxuICBjb25zdHJ1Y3Rvcih0ZXh0LCB4LCB5LCBzdHlsZSkge1xuICAgIHN1cGVyKHRleHQsIHgsIHksIHN0eWxlKTtcblxuICAgIHRoaXMuaW5pdGlhbENvbG9yID0gdGhpcy5zdHlsZS5mb250Q29sb3I7XG4gICAgdGhpcy5pbml0aWFsVW5kZXJsaW5lID0gdGhpcy5zdHlsZS51bmRlcmxpbmU7XG4gIH1cblxuICBkcmF3KGNvbnRleHQpIHtcbiAgICBpZih0aGlzLmhpZGRlbikgcmV0dXJuO1xuICAgIHN1cGVyLmRyYXcoY29udGV4dCk7XG5cbiAgICBjb25zdCBjYW52YXMgPSBjb250ZXh0LmNhbnZhcztcblxuICAgIGlmKHRoaXMuY2xpY2tlZCkge1xuICAgICAgdGhpcy5zdHlsZS5zZXQoXCJ1bmRlcmxpbmVcIiwgZmFsc2UpO1xuICAgICAgdGhpcy5zdHlsZS5zZXQoXCJmb250Q29sb3JcIiwgdGhpcy5zdHlsZS5mb250Q29sb3JEb3duKTtcbiAgICAgIGNhbnZhcy5zdHlsZS5jdXJzb3IgPSBcInBvaW50ZXJcIjtcbiAgICB9IGVsc2UgaWYodGhpcy5ob3ZlcmVkIHx8IHRoaXMuc2VsZWN0ZWQpIHtcbiAgICAgIHRoaXMuc3R5bGUuc2V0KFwidW5kZXJsaW5lXCIsIGZhbHNlKTtcbiAgICAgIHRoaXMuc3R5bGUuc2V0KFwiZm9udENvbG9yXCIsIHRoaXMuc3R5bGUuZm9udENvbG9ySG92ZXIpO1xuICAgICAgaWYodGhpcy5ob3ZlcmVkKSBjYW52YXMuc3R5bGUuY3Vyc29yID0gXCJwb2ludGVyXCI7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuc3R5bGUuc2V0KFwidW5kZXJsaW5lXCIsIHRoaXMuaW5pdGlhbFVuZGVybGluZSk7XG4gICAgICB0aGlzLnN0eWxlLnNldChcImZvbnRDb2xvclwiLCB0aGlzLmluaXRpYWxDb2xvcik7XG4gICAgfVxuXG4gICAgdGhpcy5pbml0ID0gdHJ1ZTtcbiAgfVxuXG4gIGdldCBkZWZhdWx0U3R5bGUoKSB7XG4gICAgcmV0dXJuIG5ldyBTdHlsZSh7XG4gICAgICBcImZvbnRDb2xvclwiOiBDb25zdGFudHMuU2V0dGluZy5MSU5LX0RFRkFVTFRfQ09MT1IsXG4gICAgICBcImZvbnRDb2xvckhvdmVyXCI6IENvbnN0YW50cy5TZXR0aW5nLkxJTktfREVGQVVMVF9IT1ZFUl9DT0xPUixcbiAgICAgIFwiZm9udENvbG9yRG93blwiOiBDb25zdGFudHMuU2V0dGluZy5MSU5LX0RFRkFVTFRfQ0xJQ0tfQ09MT1IsXG4gICAgICBcIndyYXBcIjogdHJ1ZSxcbiAgICAgIFwiYm9sZFwiOiBmYWxzZSxcbiAgICAgIFwidW5kZXJsaW5lXCI6IHRydWVcbiAgICB9KTtcbiAgfVxufSIsIi8qXG4gKiBDb3B5cmlnaHQgKEMpIDIwMjAgRWxpYXN0aWsgKGVsaWFzdGlrc29mdHMuY29tKVxuICpcbiAqIFRoaXMgZmlsZSBpcyBwYXJ0IG9mIFwiSlNHYW1lVG9vbHNcIi5cbiAqXG4gKiBcIkpTR2FtZVRvb2xzXCIgaXMgZnJlZSBzb2Z0d2FyZTogeW91IGNhbiByZWRpc3RyaWJ1dGUgaXQgYW5kL29yIG1vZGlmeVxuICogaXQgdW5kZXIgdGhlIHRlcm1zIG9mIHRoZSBHTlUgR2VuZXJhbCBQdWJsaWMgTGljZW5zZSBhcyBwdWJsaXNoZWQgYnlcbiAqIHRoZSBGcmVlIFNvZnR3YXJlIEZvdW5kYXRpb24sIGVpdGhlciB2ZXJzaW9uIDMgb2YgdGhlIExpY2Vuc2UsIG9yXG4gKiAoYXQgeW91ciBvcHRpb24pIGFueSBsYXRlciB2ZXJzaW9uLlxuICpcbiAqIFwiSlNHYW1lVG9vbHNcIiBpcyBkaXN0cmlidXRlZCBpbiB0aGUgaG9wZSB0aGF0IGl0IHdpbGwgYmUgdXNlZnVsLFxuICogYnV0IFdJVEhPVVQgQU5ZIFdBUlJBTlRZOyB3aXRob3V0IGV2ZW4gdGhlIGltcGxpZWQgd2FycmFudHkgb2ZcbiAqIE1FUkNIQU5UQUJJTElUWSBvciBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRS4gIFNlZSB0aGVcbiAqIEdOVSBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlIGZvciBtb3JlIGRldGFpbHMuXG4gKlxuICogWW91IHNob3VsZCBoYXZlIHJlY2VpdmVkIGEgY29weSBvZiB0aGUgR05VIEdlbmVyYWwgUHVibGljIExpY2Vuc2VcbiAqIGFsb25nIHdpdGggXCJKU0dhbWVUb29sc1wiLiAgSWYgbm90LCBzZWUgPGh0dHA6Ly93d3cuZ251Lm9yZy9saWNlbnNlcy8+LlxuICovXG5pbXBvcnQgQ29uc3RhbnRzIGZyb20gXCIuL0NvbnN0YW50c1wiO1xuaW1wb3J0IFV0aWxzIGZyb20gXCIuL1V0aWxzXCI7XG5pbXBvcnQgQ29tcG9uZW50IGZyb20gXCIuL0NvbXBvbmVudFwiO1xuaW1wb3J0IENvbCBmcm9tIFwiLi9Db2xcIjtcbmltcG9ydCBTdHlsZSBmcm9tIFwiLi9TdHlsZVwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBNZW51IGV4dGVuZHMgQ29sIHtcbiAgc2VsZWN0YWJsZSA9IGZhbHNlO1xuXG4gIGNvbnN0cnVjdG9yKHN0eWxlLCAuLi5jb21wb25lbnRzKSB7XG4gICAgc3VwZXIoMCwgMCwgbnVsbCwgbnVsbCwgc3R5bGUsIC4uLmNvbXBvbmVudHMpO1xuXG4gICAgdGhpcy5sYXN0S2V5ID0gdGhpcy5sYXN0S2V5ID09IHVuZGVmaW5lZCA/IC0xIDogdGhpcy5sYXN0S2V5O1xuICAgIHRoaXMuc2VsZWN0ZWRDb21wb25lbnQgPSB0aGlzLnNlbGVjdGVkQ29tcG9uZW50ID09IHVuZGVmaW5lZCA/IDAgOiB0aGlzLnNlbGVjdGVkQ29tcG9uZW50O1xuXG4gICAgdGhpcy5kaXNhYmxlKCk7XG4gIH1cblxuICBkcmF3KGNvbnRleHQpIHtcbiAgICBpZih0aGlzLmhpZGRlbikgcmV0dXJuO1xuICAgIGNvbnN0IGNhbnZhcyA9IGNvbnRleHQuY2FudmFzO1xuICAgIGNvbnN0IGN0eCA9IGNhbnZhcy5nZXRDb250ZXh0KFwiMmRcIik7XG5cbiAgICBpZih0aGlzLnN0eWxlLmJsdXJCYWNrZ3JvdW5kKSB7XG4gICAgICB0aGlzLmRyYXdCbHVyKGN0eCk7XG4gICAgfVxuXG4gICAgY3R4LnNhdmUoKTtcblxuICAgIHRoaXMuZHJhd0NvbXBvbmVudHMoY3R4KTtcbiAgICBcbiAgICBpZighdGhpcy5pbml0KSB7XG4gICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwia2V5ZG93blwiLCBldmVudCA9PiB7XG4gICAgICAgIGlmKCF0aGlzLmRpc2FibGVkKSB7XG4gICAgICAgICAgdGhpcy5sYXN0S2V5ID0gZXZlbnQua2V5Q29kZTtcbiAgICAgICAgICBpZih0aGlzLmxhc3RLZXkgPT0gQ29uc3RhbnRzLktleS5VUCB8fCB0aGlzLmxhc3RLZXkgPT0gQ29uc3RhbnRzLktleS5CT1RUT00pIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuXG4gICAgICB0aGlzLmluaXQgPSB0cnVlO1xuICAgIH1cblxuICAgIGxldCBrZXlBY3Rpb24gPSBmYWxzZTtcbiAgXG4gICAgaWYodGhpcy5jb21wb25lbnRzICE9IG51bGwpIHtcbiAgICAgIGlmKHRoaXMubGFzdEtleSA9PSBDb25zdGFudHMuS2V5LlVQKSB7XG4gICAgICAgIHRoaXMuc2VsZWN0KHRoaXMuc2VsZWN0ZWRDb21wb25lbnQgLSAxKTtcbiAgICAgICAga2V5QWN0aW9uID0gdHJ1ZTtcbiAgICAgIH0gZWxzZSBpZih0aGlzLmxhc3RLZXkgPT0gQ29uc3RhbnRzLktleS5CT1RUT00pIHtcbiAgICAgICAgdGhpcy5zZWxlY3QodGhpcy5zZWxlY3RlZENvbXBvbmVudCArIDEpO1xuICAgICAgICBrZXlBY3Rpb24gPSB0cnVlO1xuICAgICAgfSBlbHNlIGlmKHRoaXMubGFzdEtleSA9PSBDb25zdGFudHMuS2V5LkVDSEFQKSB7XG4gICAgICAgIHRoaXMuZGlzYWJsZSgpO1xuICAgICAgICBrZXlBY3Rpb24gPSB0cnVlO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5jb21wb25lbnRzLmZvckVhY2goKGNvbXBvbmVudCwgaSkgPT4ge1xuICAgICAgICAgIGlmKGNvbXBvbmVudC5zZWxlY3RlZCkgdGhpcy5zZWxlY3QoaSk7XG4gICAgICAgIH0pO1xuICAgICAgfVxuXG4gICAgICB0aGlzLmNvbXBvbmVudHMuZm9yRWFjaCgoY29tcG9uZW50LCBpKSA9PiB7XG4gICAgICAgIGlmKGNvbXBvbmVudCBpbnN0YW5jZW9mIENvbXBvbmVudCkge1xuICAgICAgICAgIGlmKGtleUFjdGlvbikge1xuICAgICAgICAgICAgaWYodGhpcy5zZWxlY3RlZENvbXBvbmVudCA9PSBpKSB7XG4gICAgICAgICAgICAgIGlmKGNvbXBvbmVudC5zZWxlY3RhYmxlKSB7XG4gICAgICAgICAgICAgICAgY29tcG9uZW50LnNlbGVjdGVkID0gdHJ1ZTtcbiAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgIGlmKCF0aGlzLmlzQ29tcG9uZW50VmlzaWJsZShjb21wb25lbnQpKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgY29tcG9uZW50SGVpZ2h0ID0gY29tcG9uZW50LmhlaWdodDtcbiAgICAgICAgICAgICAgICBjb25zdCBkZWx0YVkgPSAodGhpcy5tYXhIZWlnaHQgLSB0aGlzLm9mZnNldFNjcm9sbFkpIC0gKGNvbXBvbmVudC55ICsgY29tcG9uZW50SGVpZ2h0KTtcbiAgICAgICAgICAgICAgICB0aGlzLm9mZnNldFNjcm9sbFkgPSAtZGVsdGFZO1xuXG4gICAgICAgICAgICAgICAgdGhpcy5jb250cm9sU2Nyb2xsaW5nKG51bGwsIC1kZWx0YVkpO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICBjb21wb25lbnQuc2VsZWN0ZWQgPSBmYWxzZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgXG4gICAgICAgICAgaWYodGhpcy5zZWxlY3RlZENvbXBvbmVudCA9PSBpICYmIHRoaXMubGFzdEtleSA9PSBDb25zdGFudHMuS2V5LkVOVEVSICYmIGNvbXBvbmVudC5yZWFjdG9yICYmICFjb21wb25lbnQuZGlzYWJsZWQpIHtcbiAgICAgICAgICAgIHRoaXMubGFzdEtleSA9IC0xO1xuICAgICAgICAgICAgdGhpcy5zZWxlY3RlZENvbXBvbmVudCA9IDA7XG4gICAgICAgICAgICBjb21wb25lbnQucmVhY3Rvci5kaXNwYXRjaEV2ZW50KFwib25DbGlja1wiKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH1cbiAgICBcbiAgICBjdHgucmVzdG9yZSgpO1xuICAgIHRoaXMubGFzdEtleSA9IC0xO1xuICB9XG5cbiAgZHJhd0NvbXBvbmVudHMoY3R4KSB7XG4gICAgc3VwZXIuZHJhdyhjdHgpO1xuICB9XG5cbiAgZHJhd0JsdXIoY3R4KSB7XG4gICAgVXRpbHMuYmx1ckNhbnZhcyhjdHgsIDUpO1xuICB9XG5cbiAgZHJhd0JhY2tncm91bmQoY3R4KSB7XG4gICAgY3R4LmZpbGxTdHlsZSA9IHRoaXMuc3R5bGUuYmFja2dyb3VuZENvbG9yO1xuICAgIGN0eC5maWxsUmVjdCh0aGlzLnBhcmVudCA/IHRoaXMucGFyZW50LnggOiAwLCB0aGlzLnBhcmVudCA/IHRoaXMucGFyZW50LnkgOiAwLCB0aGlzLm1heFdpZHRoLCB0aGlzLm1heEhlaWdodCk7XG4gIH1cblxuICBkaXNhYmxlKCkge1xuICAgIHN1cGVyLmRpc2FibGUoKTtcbiAgICB0aGlzLmNvbXBvbmVudHMuZm9yRWFjaChjb21wb25lbnQgPT4gY29tcG9uZW50ICYmIGNvbXBvbmVudC5kaXNhYmxlICYmIGNvbXBvbmVudC5kaXNhYmxlKCkpO1xuICB9XG5cbiAgZW5hYmxlKCkge1xuICAgIHN1cGVyLmVuYWJsZSgpO1xuICAgIHRoaXMuY29tcG9uZW50cy5mb3JFYWNoKGNvbXBvbmVudCA9PiBjb21wb25lbnQgJiYgY29tcG9uZW50LmVuYWJsZSAmJiBjb21wb25lbnQuZW5hYmxlKCkpO1xuICB9XG5cbiAgc2VsZWN0KGluZGV4KSB7XG4gICAgdGhpcy5zZWxlY3RlZENvbXBvbmVudCA9IGluZGV4O1xuXG4gICAgY29uc3Qgc2VsZWN0YWJsZUNvbXBvbmVudHMgPSB0aGlzLmNvbXBvbmVudHMuZmlsdGVyKGNvbXBvbmVudCA9PiBjb21wb25lbnQuc2VsZWN0YWJsZSk7XG4gICAgaWYoc2VsZWN0YWJsZUNvbXBvbmVudHMubGVuZ3RoIDw9IDApIHJldHVybjtcblxuICAgIGlmKHRoaXMuc2VsZWN0ZWRDb21wb25lbnQgPj0gdGhpcy5jb21wb25lbnRzLmxlbmd0aCkge1xuICAgICAgdGhpcy5zZWxlY3RlZENvbXBvbmVudCA9IDA7XG4gICAgfSBlbHNlIGlmKHRoaXMuc2VsZWN0ZWRDb21wb25lbnQgPCAwKSB7XG4gICAgICB0aGlzLnNlbGVjdGVkQ29tcG9uZW50ID0gdGhpcy5jb21wb25lbnRzLmxlbmd0aCAtIDE7XG4gICAgfVxuXG4gICAgaWYodGhpcy5jb21wb25lbnRzW3RoaXMuc2VsZWN0ZWRDb21wb25lbnRdICYmICF0aGlzLmNvbXBvbmVudHNbdGhpcy5zZWxlY3RlZENvbXBvbmVudF0uc2VsZWN0YWJsZSkge1xuICAgICAgaWYodGhpcy5sYXN0S2V5ID09IENvbnN0YW50cy5LZXkuVVApIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuc2VsZWN0KHRoaXMuc2VsZWN0ZWRDb21wb25lbnQgLSAxKTtcbiAgICAgIH0gZWxzZSBpZih0aGlzLmxhc3RLZXkgPT0gQ29uc3RhbnRzLktleS5CT1RUT00pIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuc2VsZWN0KHRoaXMuc2VsZWN0ZWRDb21wb25lbnQgKyAxKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBnZXQgc2Nyb2xsQXJlYVNpemVYKCkge1xuICAgIHJldHVybiB0aGlzLmlubmVyV2lkdGggLSB0aGlzLm1heFdpZHRoO1xuICB9XG5cbiAgZ2V0IHNjcm9sbEFyZWFTaXplWSgpIHtcbiAgICByZXR1cm4gdGhpcy5pbm5lckhlaWdodCAtIHRoaXMubWF4SGVpZ2h0O1xuICB9XG5cbiAgZ2V0IG1heEhlaWdodCgpIHtcbiAgICByZXR1cm4gc3VwZXIubWF4SGVpZ2h0IHx8ICh0aGlzLmNhbnZhcyAmJiB0aGlzLmNhbnZhcy5zY2VuZSAmJiB0aGlzLmNhbnZhcy5zY2VuZS5oZWlnaHQpO1xuICB9XG5cbiAgZ2V0IG1heFdpZHRoKCkge1xuICAgIHJldHVybiAodGhpcy5jYW52YXMgJiYgdGhpcy5jYW52YXMuc2NlbmUgJiYgdGhpcy5jYW52YXMuc2NlbmUud2lkdGgpO1xuICB9XG5cbiAgZ2V0IG1pbldpZHRoKCkge1xuICAgIHJldHVybiB0aGlzLnBhcmVudCA/IHRoaXMucGFyZW50LndpZHRoIDogMDtcbiAgfVxuXG4gIGdldCBkZWZhdWx0U3R5bGUoKSB7XG4gICAgcmV0dXJuIG5ldyBTdHlsZSh7XG4gICAgICBcImJsdXJCYWNrZ3JvdW5kXCI6IENvbnN0YW50cy5TZXR0aW5nLk1FTlVfREVGQVVMVF9CTFVSX0JBQ0tHUk9VTkQsXG4gICAgICBcImJhY2tncm91bmRDb2xvclwiOiBDb25zdGFudHMuU2V0dGluZy5NRU5VX0RFRkFVTFRfQkFDS0dST1VORCxcbiAgICAgIFwidmVydGljYWxBbGlnbmVtZW50XCI6IENvbnN0YW50cy5WZXJ0aWNhbEFsaWduZW1lbnQuQ0VOVEVSLFxuICAgICAgXCJzY3JvbGxYRGlzYWJsZWRcIjogdHJ1ZVxuICAgIH0pO1xuICB9XG5cbiAgY29tcGFyZVRvQ29tcG9uZW50KG90aGVyQ29tcG9uZW50KSB7XG4gICAgcmV0dXJuIG90aGVyQ29tcG9uZW50LmNvbXBhcmVUb01lbnUodGhpcyk7XG4gIH1cblxuICBjb21wYXJlVG9NZW51KG90aGVyQ29tcG9uZW50KSB7XG4gICAgcmV0dXJuIDA7XG4gIH1cblxuICBjb21wYXJlVG9Ub29sdGlwKG90aGVyQ29tcG9uZW50KSB7XG4gICAgcmV0dXJuIC0xO1xuICB9XG5cbiAgY29tcGFyZVRvTm90aWZpY2F0aW9uKG90aGVyQ29tcG9uZW50KSB7XG4gICAgcmV0dXJuIDE7XG4gIH1cblxuICBnZXQgaGlkZGVuKCkge1xuICAgIHJldHVybiBzdXBlci5oaWRkZW4gfHwgdGhpcy5kaXNhYmxlZDtcbiAgfVxuXG4gIHNldCBoaWRkZW4oaGlkZGVuKSB7XG4gICAgc3VwZXIuaGlkZGVuID0gaGlkZGVuO1xuICAgIHRoaXMuZGlzYWJsZWQgPSBoaWRkZW47XG4gIH1cblxuICBpc0luc2lkZShwb3MpIHtcbiAgICByZXR1cm4gIXRoaXMuaGlkZGVuO1xuICB9XG59IiwiLypcbiAqIENvcHlyaWdodCAoQykgMjAyMCBFbGlhc3RpayAoZWxpYXN0aWtzb2Z0cy5jb20pXG4gKlxuICogVGhpcyBmaWxlIGlzIHBhcnQgb2YgXCJKU0dhbWVUb29sc1wiLlxuICpcbiAqIFwiSlNHYW1lVG9vbHNcIiBpcyBmcmVlIHNvZnR3YXJlOiB5b3UgY2FuIHJlZGlzdHJpYnV0ZSBpdCBhbmQvb3IgbW9kaWZ5XG4gKiBpdCB1bmRlciB0aGUgdGVybXMgb2YgdGhlIEdOVSBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlIGFzIHB1Ymxpc2hlZCBieVxuICogdGhlIEZyZWUgU29mdHdhcmUgRm91bmRhdGlvbiwgZWl0aGVyIHZlcnNpb24gMyBvZiB0aGUgTGljZW5zZSwgb3JcbiAqIChhdCB5b3VyIG9wdGlvbikgYW55IGxhdGVyIHZlcnNpb24uXG4gKlxuICogXCJKU0dhbWVUb29sc1wiIGlzIGRpc3RyaWJ1dGVkIGluIHRoZSBob3BlIHRoYXQgaXQgd2lsbCBiZSB1c2VmdWwsXG4gKiBidXQgV0lUSE9VVCBBTlkgV0FSUkFOVFk7IHdpdGhvdXQgZXZlbiB0aGUgaW1wbGllZCB3YXJyYW50eSBvZlxuICogTUVSQ0hBTlRBQklMSVRZIG9yIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFLiAgU2VlIHRoZVxuICogR05VIEdlbmVyYWwgUHVibGljIExpY2Vuc2UgZm9yIG1vcmUgZGV0YWlscy5cbiAqXG4gKiBZb3Ugc2hvdWxkIGhhdmUgcmVjZWl2ZWQgYSBjb3B5IG9mIHRoZSBHTlUgR2VuZXJhbCBQdWJsaWMgTGljZW5zZVxuICogYWxvbmcgd2l0aCBcIkpTR2FtZVRvb2xzXCIuICBJZiBub3QsIHNlZSA8aHR0cDovL3d3dy5nbnUub3JnL2xpY2Vuc2VzLz4uXG4gKi9cbmltcG9ydCBDb25zdGFudHMgZnJvbSBcIi4vQ29uc3RhbnRzXCI7XG5pbXBvcnQgQ29sIGZyb20gXCIuL0NvbFwiO1xuaW1wb3J0IEJ1dHRvbiBmcm9tIFwiLi9CdXR0b25cIjtcbmltcG9ydCBDcm9zcyBmcm9tIFwiLi9Dcm9zc1wiO1xuaW1wb3J0IFN0eWxlIGZyb20gXCIuL1N0eWxlXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE5vdGlmaWNhdGlvbk1lc3NhZ2UgZXh0ZW5kcyBDb2wge1xuICBzZWxlY3RhYmxlID0gZmFsc2U7XG5cbiAgY29uc3RydWN0b3Ioc3R5bGUsIGRlbGF5QmVmb3JlQ2xvc2luZywgZWFzaW5nRnVuY3Rpb24sIC4uLmNvbXBvbmVudHMpIHtcbiAgICBzdXBlcigwLCAwLCBudWxsLCBudWxsLCBzdHlsZSwgLi4uY29tcG9uZW50cyk7XG5cbiAgICB0aGlzLmRlbGF5QmVmb3JlQ2xvc2luZyA9IGRlbGF5QmVmb3JlQ2xvc2luZyA9PSB1bmRlZmluZWQgPyA1IDogZGVsYXlCZWZvcmVDbG9zaW5nOyAvLyBzZWNvbmRcbiAgICB0aGlzLnRpbWVMYXN0RnJhbWUgPSAwO1xuICAgIHRoaXMuYW5pbWF0aW9uVGltZSA9IDA7XG4gICAgdGhpcy5jbG9zZWQgPSB0cnVlO1xuICAgIHRoaXMuY2xvc2luZyA9IGZhbHNlO1xuICAgIHRoaXMuZWFzaW5nRnVuY3Rpb24gPSBlYXNpbmdGdW5jdGlvbjtcblxuICAgIHRoaXMuY2xvc2VCdXR0b24gPSBuZXcgQnV0dG9uKG51bGwsIG51bGwsIG51bGwsIG51bGwsIG5ldyBTdHlsZSh7XCJhbGlnbmVtZW50XCI6IENvbnN0YW50cy5BbGlnbmVtZW50LlJJR0hULCBcInZlcnRpY2FsQWxpZ25lbWVudFwiOiBDb25zdGFudHMuVmVydGljYWxBbGlnbmVtZW50LlRPUCwgXCJwYWRkaW5nXCI6IDEwIH0pLCBuZXcgQ3Jvc3MobnVsbCwgbnVsbCwgMTAsIDEwKSk7XG4gICAgdGhpcy5hZGQodGhpcy5jbG9zZUJ1dHRvbik7XG4gIH1cbiAgXG4gIGRyYXcoY29udGV4dCkge1xuICAgIGlmKHRoaXMuaGlkZGVuKSByZXR1cm47XG4gICAgdGhpcy5jbG9zZUJ1dHRvbi5jYW52YXMgPSB0aGlzLmNhbnZhcztcblxuICAgIGNvbnN0IGNhbnZhcyA9IGNvbnRleHQuY2FudmFzO1xuICAgIGNvbnN0IGN0eCA9IGNhbnZhcy5nZXRDb250ZXh0KFwiMmRcIik7XG5cbiAgICBjdHguc2F2ZSgpO1xuXG4gICAgaWYoIXRoaXMuaW5pdCkge1xuICAgICAgdGhpcy50aW1lTGFzdEZyYW1lID0gcGVyZm9ybWFuY2Uubm93KCk7XG4gICAgfVxuICAgIFxuICAgIGlmKHRoaXMuY2xvc2VCdXR0b24gIT0gbnVsbCkge1xuICAgICAgdGhpcy5jbG9zZUJ1dHRvbi5zZXRDbGlja0FjdGlvbigoKSA9PiB7XG4gICAgICAgIHRoaXMuY2xvc2UoKTtcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGNvbnN0IG9mZnNldFRpbWUgPSBwZXJmb3JtYW5jZS5ub3coKSAtIHRoaXMudGltZUxhc3RGcmFtZTtcbiAgICB0aGlzLnRpbWVMYXN0RnJhbWUgPSBwZXJmb3JtYW5jZS5ub3coKTtcblxuICAgIGlmKHRoaXMuYW5pbWF0aW9uVGltZSA+PSB0aGlzLmRlbGF5QmVmb3JlQ2xvc2luZyAqIDEwMDAgJiYgIXRoaXMuY2xvc2luZyAmJiAhdGhpcy5jbG9zZWQpIHtcbiAgICAgIHRoaXMuY2xvc2UoKTtcbiAgICB9XG5cbiAgICBpZighdGhpcy5jbG9zaW5nKSB7XG4gICAgICB0aGlzLmFuaW1hdGlvblRpbWUgKz0gb2Zmc2V0VGltZTtcbiAgICB9IGVsc2Uge1xuICAgICAgaWYodGhpcy5zdHlsZS5kaXNhYmxlQW5pbWF0aW9uKSB7XG4gICAgICAgIHRoaXMuYW5pbWF0aW9uVGltZSA9IC0xO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5hbmltYXRpb25UaW1lIC09IG9mZnNldFRpbWU7XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYodGhpcy5hbmltYXRpb25UaW1lIDwgMCkge1xuICAgICAgdGhpcy5jbG9zZWQgPSB0cnVlO1xuICAgICAgdGhpcy5jbG9zaW5nID0gZmFsc2U7XG4gICAgfVxuXG4gICAgaWYoIXRoaXMuY2xvc2VkKSB7XG4gICAgICB0aGlzLmRyYXdDb21wb25lbnRzKGN0eCk7XG5cbiAgICAgIGlmKHRoaXMuY2xvc2VCdXR0b24gIT0gbnVsbCkge1xuICAgICAgICB0aGlzLmNsb3NlQnV0dG9uLnkgPSB0aGlzLnkgKyB0aGlzLnN0eWxlLnBhZGRpbmcgLyAyO1xuICAgICAgICB0aGlzLmNsb3NlQnV0dG9uLmRyYXcoY3R4KTtcbiAgICAgIH1cblxuICAgICAgdGhpcy5lbmFibGVDbG9zZUJ1dHRvbigpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmRpc2FibGVDbG9zZUJ1dHRvbigpO1xuICAgIH1cblxuICAgIGN0eC5yZXN0b3JlKCk7XG5cbiAgICB0aGlzLmluaXQgPSB0cnVlO1xuICB9XG4gIFxuICBnZXQgb2Zmc2V0WSgpIHtcbiAgICBsZXQgb2Zmc2V0WSA9IDE7XG5cbiAgICBpZighdGhpcy5zdHlsZS5kaXNhYmxlQW5pbWF0aW9uKSB7XG4gICAgICBvZmZzZXRZID0gdGhpcy5hbmltYXRpb25UaW1lIC8gdGhpcy5zdHlsZS5hbmltYXRpb25EdXJhdGlvbjtcblxuICAgICAgaWYodGhpcy5lYXNpbmdGdW5jdGlvbikge1xuICAgICAgICBvZmZzZXRZID0gdGhpcy5lYXNpbmdGdW5jdGlvbihvZmZzZXRZKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gb2Zmc2V0WTtcbiAgfVxuXG4gIGdldCB5KCkge1xuICAgIGNvbnN0IG9mZnNldFkgPSB0aGlzLm9mZnNldFk7XG5cbiAgICBpZih0aGlzLnN0eWxlLnZlcnRpY2FsQWxpZ25lbWVudCA9PSBDb25zdGFudHMuVmVydGljYWxBbGlnbmVtZW50LlRPUCkge1xuICAgICAgcmV0dXJuICh0aGlzLmhlaWdodCAqIChvZmZzZXRZIDw9IDEgPyBvZmZzZXRZIDogMSkpIC0gdGhpcy5oZWlnaHQ7XG4gICAgfSBcbiAgICBcbiAgICByZXR1cm4gdGhpcy5jYW52YXMuc2NlbmUuaGVpZ2h0IC0gKHRoaXMuaGVpZ2h0ICogKG9mZnNldFkgPD0gMSA/IG9mZnNldFkgOiAxKSk7XG4gIH1cblxuICBzZXQgeSh5KSB7XG4gICAgc3VwZXIueSA9IHk7XG4gIH1cblxuICBkcmF3Q29tcG9uZW50cyhjdHgpIHtcbiAgICBzdXBlci5kcmF3KGN0eCk7XG4gIH1cblxuICBjbG9zZSgpIHtcbiAgICB0aGlzLmRpc2FibGVDbG9zZUJ1dHRvbigpO1xuICBcbiAgICBpZighdGhpcy5jbG9zaW5nKSB7XG4gICAgICB0aGlzLmNsb3NpbmcgPSB0cnVlO1xuICAgICAgdGhpcy5hbmltYXRpb25UaW1lID0gdGhpcy5zdHlsZS5hbmltYXRpb25EdXJhdGlvbjtcbiAgICB9XG4gIH1cbiAgXG4gIG9wZW4oKSB7XG4gICAgdGhpcy50aW1lTGFzdEZyYW1lID0gMDtcbiAgICB0aGlzLmFuaW1hdGlvblRpbWUgPSAwO1xuICAgIHRoaXMuaW5pdCA9IGZhbHNlO1xuICAgIHRoaXMuY2xvc2VkID0gZmFsc2U7XG4gICAgdGhpcy5jbG9zaW5nID0gZmFsc2U7XG4gIH1cbiAgXG4gIGRpc2FibGVDbG9zZUJ1dHRvbigpIHtcbiAgICBpZih0aGlzLmNsb3NlQnV0dG9uICE9IHVuZGVmaW5lZCAmJiB0aGlzLmNsb3NlQnV0dG9uICE9IG51bGwgJiYgdGhpcy5jbG9zZUJ1dHRvbiBpbnN0YW5jZW9mIEJ1dHRvbikge1xuICAgICAgdGhpcy5jbG9zZUJ1dHRvbi5kaXNhYmxlKCk7XG4gICAgfVxuICB9XG4gIFxuICBlbmFibGVDbG9zZUJ1dHRvbigpIHtcbiAgICBpZih0aGlzLmNsb3NlQnV0dG9uICE9IHVuZGVmaW5lZCAmJiB0aGlzLmNsb3NlQnV0dG9uICE9IG51bGwgJiYgdGhpcy5jbG9zZUJ1dHRvbiBpbnN0YW5jZW9mIEJ1dHRvbikge1xuICAgICAgdGhpcy5jbG9zZUJ1dHRvbi5lbmFibGUoKTtcbiAgICB9XG4gIH07XG4gIFxuICBjb3B5KCkge1xuICAgIHJldHVybiBuZXcgTm90aWZpY2F0aW9uTWVzc2FnZSh0aGlzLnN0eWxlLmNvcHkoKSwgdGhpcy5kZWxheUJlZm9yZUNsb3NpbmcsIHRoaXMuZWFzaW5nRnVuY3Rpb24sIC4uLnRoaXMuY29tcG9uZW50cyk7XG4gIH1cblxuICBnZXQgd2lkdGgoKSB7XG4gICAgcmV0dXJuIHRoaXMuY2FudmFzICYmIHRoaXMuY2FudmFzLnNjZW5lID8gdGhpcy5jYW52YXMuc2NlbmUud2lkdGggOiBudWxsO1xuICB9XG5cbiAgZ2V0IGhlaWdodCgpIHtcbiAgICByZXR1cm4gc3VwZXIuaGVpZ2h0IC0gKHRoaXMuY2xvc2VCdXR0b24gPyB0aGlzLmNsb3NlQnV0dG9uLmhlaWdodCA6IDApO1xuICB9XG5cbiAgZ2V0IGRlZmF1bHRTdHlsZSgpIHtcbiAgICByZXR1cm4gbmV3IFN0eWxlKHtcbiAgICAgIFwiYWxpZ25lbWVudFwiOiBDb25zdGFudHMuQWxpZ25lbWVudC5DRU5URVIsXG4gICAgICBcImJhY2tncm91bmRDb2xvclwiOiBDb25zdGFudHMuU2V0dGluZy5OT1RJRklDQVRJT05fREVGQVVMVF9CQUNLR1JPVU5ELFxuICAgICAgXCJhbmltYXRpb25EdXJhdGlvblwiOiBDb25zdGFudHMuU2V0dGluZy5OT1RJRklDQVRJT05fREVGQVVMVF9BTklNQVRJT05fRFVSQVRJT05cbiAgICB9KTtcbiAgfVxuXG4gIGdldCBoaWRkZW4oKSB7XG4gICAgcmV0dXJuIHN1cGVyLmhpZGRlbiB8fCB0aGlzLmNsb3NlZDtcbiAgfVxuXG4gIHNldCBoaWRkZW4oaGlkZGVuKSB7XG4gICAgc3VwZXIuaGlkZGVuID0gaGlkZGVuO1xuXG4gICAgaWYoaGlkZGVuKSB7XG4gICAgICB0aGlzLmZvcmNlQ2xvc2UoKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5vcGVuKCk7XG4gICAgfVxuICB9XG5cbiAgY29tcGFyZVRvQ29tcG9uZW50KG90aGVyQ29tcG9uZW50KSB7XG4gICAgcmV0dXJuIG90aGVyQ29tcG9uZW50LmNvbXBhcmVUb05vdGlmaWNhdGlvbih0aGlzKTtcbiAgfVxuXG4gIGNvbXBhcmVUb1Rvb2x0aXAob3RoZXJDb21wb25lbnQpIHtcbiAgICByZXR1cm4gLTE7XG4gIH1cblxuICBjb21wYXJlVG9Ob3RpZmljYXRpb24ob3RoZXJDb21wb25lbnQpIHtcbiAgICByZXR1cm4gMDtcbiAgfVxuXG4gIGNvbXBhcmVUb01lbnUob3RoZXJDb21wb25lbnQpIHtcbiAgICByZXR1cm4gLTE7XG4gIH1cbn0iLCIvKlxuICogQ29weXJpZ2h0IChDKSAyMDIwIEVsaWFzdGlrIChlbGlhc3Rpa3NvZnRzLmNvbSlcbiAqXG4gKiBUaGlzIGZpbGUgaXMgcGFydCBvZiBcIkpTR2FtZVRvb2xzXCIuXG4gKlxuICogXCJKU0dhbWVUb29sc1wiIGlzIGZyZWUgc29mdHdhcmU6IHlvdSBjYW4gcmVkaXN0cmlidXRlIGl0IGFuZC9vciBtb2RpZnlcbiAqIGl0IHVuZGVyIHRoZSB0ZXJtcyBvZiB0aGUgR05VIEdlbmVyYWwgUHVibGljIExpY2Vuc2UgYXMgcHVibGlzaGVkIGJ5XG4gKiB0aGUgRnJlZSBTb2Z0d2FyZSBGb3VuZGF0aW9uLCBlaXRoZXIgdmVyc2lvbiAzIG9mIHRoZSBMaWNlbnNlLCBvclxuICogKGF0IHlvdXIgb3B0aW9uKSBhbnkgbGF0ZXIgdmVyc2lvbi5cbiAqXG4gKiBcIkpTR2FtZVRvb2xzXCIgaXMgZGlzdHJpYnV0ZWQgaW4gdGhlIGhvcGUgdGhhdCBpdCB3aWxsIGJlIHVzZWZ1bCxcbiAqIGJ1dCBXSVRIT1VUIEFOWSBXQVJSQU5UWTsgd2l0aG91dCBldmVuIHRoZSBpbXBsaWVkIHdhcnJhbnR5IG9mXG4gKiBNRVJDSEFOVEFCSUxJVFkgb3IgRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UuICBTZWUgdGhlXG4gKiBHTlUgR2VuZXJhbCBQdWJsaWMgTGljZW5zZSBmb3IgbW9yZSBkZXRhaWxzLlxuICpcbiAqIFlvdSBzaG91bGQgaGF2ZSByZWNlaXZlZCBhIGNvcHkgb2YgdGhlIEdOVSBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlXG4gKiBhbG9uZyB3aXRoIFwiSlNHYW1lVG9vbHNcIi4gIElmIG5vdCwgc2VlIDxodHRwOi8vd3d3LmdudS5vcmcvbGljZW5zZXMvPi5cbiAqL1xuaW1wb3J0IEJveCBmcm9tIFwiLi9Cb3hcIjtcbmltcG9ydCBDb25zdGFudHMgZnJvbSBcIi4vQ29uc3RhbnRzXCI7XG5pbXBvcnQgU3R5bGUgZnJvbSBcIi4vU3R5bGVcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUHJvZ3Jlc3NCYXIgZXh0ZW5kcyBCb3gge1xuICAjcHJlY1BlcmNlbnQgPSAwO1xuICBzZWxlY3RhYmxlID0gZmFsc2U7XG5cbiAgY29uc3RydWN0b3IoeCwgeSwgd2lkdGgsIGhlaWdodCwgc3R5bGUsIGRlZmF1bHRQZXJjZW50LCBlYXNpbmdGdW5jdGlvbikge1xuICAgIHN1cGVyKHgsIHksIHdpZHRoLCBoZWlnaHQsIHN0eWxlKTtcblxuICAgIHRoaXMucGVyY2VudCA9IGRlZmF1bHRQZXJjZW50ID09IHVuZGVmaW5lZCA/IDAgOiBkZWZhdWx0UGVyY2VudDtcbiAgICB0aGlzLiNwcmVjUGVyY2VudCA9IHRoaXMucGVyY2VudDtcbiAgICB0aGlzLmVhc2luZ0Z1bmN0aW9uID0gZWFzaW5nRnVuY3Rpb247XG5cbiAgICB0aGlzLmxhc3RUaW1lID0gMDtcbiAgICB0aGlzLnRvdGFsVGltZSA9IDA7XG4gIH1cblxuICBkcmF3KGNvbnRleHQpIHtcbiAgICBpZih0aGlzLmhpZGRlbikgcmV0dXJuO1xuICAgIHN1cGVyLmRyYXcoY29udGV4dCk7XG5cbiAgICBjb25zdCBjYW52YXMgPSBjb250ZXh0LmNhbnZhcztcbiAgICBjb25zdCBjdHggPSBjYW52YXMuZ2V0Q29udGV4dChcIjJkXCIpO1xuICAgIGN0eC5zYXZlKCk7XG5cbiAgICBjb25zdCB0aW1lID0gcGVyZm9ybWFuY2Uubm93KCk7XG4gICAgbGV0IG9mZnNldFRpbWUgPSAwO1xuXG4gICAgaWYodGhpcy4jcHJlY1BlcmNlbnQgIT0gdGhpcy5wZXJjZW50ICYmICF0aGlzLnN0eWxlLmRpc2FibGVBbmltYXRpb24pIHtcbiAgICAgIGlmKHRoaXMubGFzdFRpbWUgPiAwKSBvZmZzZXRUaW1lID0gdGltZSAtIHRoaXMubGFzdFRpbWU7XG4gICAgICB0aGlzLnRvdGFsVGltZSArPSBvZmZzZXRUaW1lO1xuXG4gICAgICBpZih0aGlzLnRvdGFsVGltZSA+PSB0aGlzLnN0eWxlLmFuaW1hdGlvbkR1cmF0aW9uKSB7XG4gICAgICAgIHRoaXMuI3ByZWNQZXJjZW50ID0gdGhpcy5wZXJjZW50O1xuICAgICAgICB0aGlzLnRvdGFsVGltZSA9IDA7XG4gICAgICAgIHRoaXMubGFzdFRpbWUgPSAwO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5sYXN0VGltZSA9IHRpbWU7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMudG90YWxUaW1lID0gMDtcbiAgICAgIHRoaXMubGFzdFRpbWUgPSAwO1xuICAgIH1cblxuICAgIHRoaXMuZHJhd0JhY2tncm91bmQoY3R4KTtcbiAgICB0aGlzLmRyYXdGb3JlZ3JvdW5kKGN0eCwgdGhpcy53aWR0aEZvcmVncm91bmQpO1xuXG4gICAgY3R4LnJlc3RvcmUoKTtcbiAgfVxuXG4gIGdldCBhbmltYXRpb25QZXJjZW50KCkge1xuICAgIGxldCBhbmltYXRpb25QZXJjZW50ID0gKHRoaXMuI3ByZWNQZXJjZW50ICE9IHRoaXMucGVyY2VudCAmJiAhdGhpcy5zdHlsZS5kaXNhYmxlQW5pbWF0aW9uID8gdGhpcy50b3RhbFRpbWUgLyAodGhpcy5zdHlsZS5hbmltYXRpb25EdXJhdGlvbikgOiAxKTtcblxuICAgIGlmKHRoaXMuZWFzaW5nRnVuY3Rpb24pIHtcbiAgICAgIGFuaW1hdGlvblBlcmNlbnQgPSB0aGlzLmVhc2luZ0Z1bmN0aW9uKGFuaW1hdGlvblBlcmNlbnQpO1xuICAgIH1cblxuICAgIHJldHVybiBhbmltYXRpb25QZXJjZW50O1xuICB9XG5cbiAgZ2V0IHdpZHRoRm9yZWdyb3VuZCgpIHtcbiAgICByZXR1cm4gTWF0aC5tYXgoMCwgTWF0aC5taW4odGhpcy53aWR0aCwgdGhpcy53aWR0aCAqICh0aGlzLiNwcmVjUGVyY2VudCArICh0aGlzLnBlcmNlbnQgLSB0aGlzLiNwcmVjUGVyY2VudCkgKiB0aGlzLmFuaW1hdGlvblBlcmNlbnQpKSk7XG4gIH1cblxuICBkcmF3Rm9yZWdyb3VuZChjdHgsIHdpZHRoRm9yZWdyb3VuZCkge1xuICAgIGN0eC5zYXZlKCk7XG5cbiAgICBjdHguZmlsbFN0eWxlID0gdGhpcy5zdHlsZS5mb3JlZ3JvdW5kQ29sb3I7XG4gICAgY3R4LmZpbGxSZWN0KHRoaXMueCwgdGhpcy55LCB3aWR0aEZvcmVncm91bmQsIHRoaXMuaGVpZ2h0KTtcblxuICAgIGN0eC5yZXN0b3JlKCk7XG4gIH1cblxuICBnZXQgZGVmYXVsdFN0eWxlKCkge1xuICAgIHJldHVybiBuZXcgU3R5bGUoe1xuICAgICAgXCJiYWNrZ3JvdW5kQ29sb3JcIjogQ29uc3RhbnRzLlNldHRpbmcuUFJPR1JFU1NfREVGQVVMVF9CQUNLR1JPVU5ELFxuICAgICAgXCJmb3JlZ3JvdW5kQ29sb3JcIjogQ29uc3RhbnRzLlNldHRpbmcuUFJPR1JFU1NfREVGQVVMVF9GT1JFR1JPVU5ELFxuICAgICAgXCJhbmltYXRpb25EdXJhdGlvblwiOiBDb25zdGFudHMuU2V0dGluZy5QUk9HUkVTU19ERUZBVUxUX0FOSU1BVElPTl9EVVJBVElPTlxuICAgIH0pO1xuICB9XG59IiwiLypcbiAqIENvcHlyaWdodCAoQykgMjAyMCBFbGlhc3RpayAoZWxpYXN0aWtzb2Z0cy5jb20pXG4gKlxuICogVGhpcyBmaWxlIGlzIHBhcnQgb2YgXCJKU0dhbWVUb29sc1wiLlxuICpcbiAqIFwiSlNHYW1lVG9vbHNcIiBpcyBmcmVlIHNvZnR3YXJlOiB5b3UgY2FuIHJlZGlzdHJpYnV0ZSBpdCBhbmQvb3IgbW9kaWZ5XG4gKiBpdCB1bmRlciB0aGUgdGVybXMgb2YgdGhlIEdOVSBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlIGFzIHB1Ymxpc2hlZCBieVxuICogdGhlIEZyZWUgU29mdHdhcmUgRm91bmRhdGlvbiwgZWl0aGVyIHZlcnNpb24gMyBvZiB0aGUgTGljZW5zZSwgb3JcbiAqIChhdCB5b3VyIG9wdGlvbikgYW55IGxhdGVyIHZlcnNpb24uXG4gKlxuICogXCJKU0dhbWVUb29sc1wiIGlzIGRpc3RyaWJ1dGVkIGluIHRoZSBob3BlIHRoYXQgaXQgd2lsbCBiZSB1c2VmdWwsXG4gKiBidXQgV0lUSE9VVCBBTlkgV0FSUkFOVFk7IHdpdGhvdXQgZXZlbiB0aGUgaW1wbGllZCB3YXJyYW50eSBvZlxuICogTUVSQ0hBTlRBQklMSVRZIG9yIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFLiAgU2VlIHRoZVxuICogR05VIEdlbmVyYWwgUHVibGljIExpY2Vuc2UgZm9yIG1vcmUgZGV0YWlscy5cbiAqXG4gKiBZb3Ugc2hvdWxkIGhhdmUgcmVjZWl2ZWQgYSBjb3B5IG9mIHRoZSBHTlUgR2VuZXJhbCBQdWJsaWMgTGljZW5zZVxuICogYWxvbmcgd2l0aCBcIkpTR2FtZVRvb2xzXCIuICBJZiBub3QsIHNlZSA8aHR0cDovL3d3dy5nbnUub3JnL2xpY2Vuc2VzLz4uXG4gKi9cbmltcG9ydCBFdmVudCBmcm9tIFwiLi9FdmVudFwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBSZWFjdG9yIHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgdGhpcy5ldmVudHMgPSB7fTtcbiAgfVxuXG4gIHJlZ2lzdGVyRXZlbnQoZXZlbnROYW1lKSB7XG4gICAgdGhpcy5ldmVudHNbZXZlbnROYW1lXSA9IG5ldyBFdmVudChldmVudE5hbWUpO1xuICB9XG5cbiAgZGlzcGF0Y2hFdmVudChldmVudE5hbWUsIC4uLmV2ZW50QXJncykge1xuICAgIGlmKHRoaXMuZXZlbnRzW2V2ZW50TmFtZV0pIHtcbiAgICAgIGNvbnN0IGNhbGxiYWNrcyA9IHRoaXMuZXZlbnRzW2V2ZW50TmFtZV0uY2FsbGJhY2tzO1xuICAgICAgY2FsbGJhY2tzLmZvckVhY2goY2FsbGJhY2sgPT4gY2FsbGJhY2sgJiYgY2FsbGJhY2soLi4uZXZlbnRBcmdzKSk7XG4gICAgfVxuICB9XG5cbiAgYWRkRXZlbnRMaXN0ZW5lcihldmVudE5hbWUsIGNhbGxiYWNrKSB7XG4gICAgaWYodGhpcy5ldmVudHNbZXZlbnROYW1lXSkgdGhpcy5ldmVudHNbZXZlbnROYW1lXS5yZWdpc3RlckNhbGxiYWNrKGNhbGxiYWNrKTtcbiAgfVxuXG4gIHJlbW92ZUV2ZW50TGlzdGVuZXIoZXZlbnROYW1lLCBjYWxsYmFjaykge1xuICAgIGlmKHRoaXMuZXZlbnRzW2V2ZW50TmFtZV0pIHRoaXMuZXZlbnRzW2V2ZW50TmFtZV0ucmVtb3ZlQ2FsbGJhY2soY2FsbGJhY2spO1xuICB9XG5cbiAgcmVtb3ZlQWxsRXZlbnRMaXN0ZW5lcihldmVudE5hbWUpIHtcbiAgICBpZih0aGlzLmV2ZW50c1tldmVudE5hbWVdKSB0aGlzLmV2ZW50c1tldmVudE5hbWVdLnJlbW92ZUFsbENhbGxiYWNrcygpO1xuICB9XG59IiwiLypcbiAqIENvcHlyaWdodCAoQykgMjAyMCBFbGlhc3RpayAoZWxpYXN0aWtzb2Z0cy5jb20pXG4gKlxuICogVGhpcyBmaWxlIGlzIHBhcnQgb2YgXCJKU0dhbWVUb29sc1wiLlxuICpcbiAqIFwiSlNHYW1lVG9vbHNcIiBpcyBmcmVlIHNvZnR3YXJlOiB5b3UgY2FuIHJlZGlzdHJpYnV0ZSBpdCBhbmQvb3IgbW9kaWZ5XG4gKiBpdCB1bmRlciB0aGUgdGVybXMgb2YgdGhlIEdOVSBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlIGFzIHB1Ymxpc2hlZCBieVxuICogdGhlIEZyZWUgU29mdHdhcmUgRm91bmRhdGlvbiwgZWl0aGVyIHZlcnNpb24gMyBvZiB0aGUgTGljZW5zZSwgb3JcbiAqIChhdCB5b3VyIG9wdGlvbikgYW55IGxhdGVyIHZlcnNpb24uXG4gKlxuICogXCJKU0dhbWVUb29sc1wiIGlzIGRpc3RyaWJ1dGVkIGluIHRoZSBob3BlIHRoYXQgaXQgd2lsbCBiZSB1c2VmdWwsXG4gKiBidXQgV0lUSE9VVCBBTlkgV0FSUkFOVFk7IHdpdGhvdXQgZXZlbiB0aGUgaW1wbGllZCB3YXJyYW50eSBvZlxuICogTUVSQ0hBTlRBQklMSVRZIG9yIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFLiAgU2VlIHRoZVxuICogR05VIEdlbmVyYWwgUHVibGljIExpY2Vuc2UgZm9yIG1vcmUgZGV0YWlscy5cbiAqXG4gKiBZb3Ugc2hvdWxkIGhhdmUgcmVjZWl2ZWQgYSBjb3B5IG9mIHRoZSBHTlUgR2VuZXJhbCBQdWJsaWMgTGljZW5zZVxuICogYWxvbmcgd2l0aCBcIkpTR2FtZVRvb2xzXCIuICBJZiBub3QsIHNlZSA8aHR0cDovL3d3dy5nbnUub3JnL2xpY2Vuc2VzLz4uXG4gKi9cbmltcG9ydCBSZWFjdG9yIGZyb20gXCIuL1JlYWN0b3JcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUmVhY3RvckNhbnZhcyBleHRlbmRzIFJlYWN0b3Ige1xuICByZWdpc3RlckV2ZW50KGV2ZW50TmFtZSkge1xuICAgIGlmKCF0aGlzLmV2ZW50c1tldmVudE5hbWVdKSB0aGlzLmV2ZW50c1tldmVudE5hbWVdID0gW107XG4gIH1cblxuICBkaXNwYXRjaEV2ZW50KGV2ZW50TmFtZSwgLi4uZXZlbnRBcmdzKSB7XG4gICAgaWYodGhpcy5ldmVudHNbZXZlbnROYW1lXSkge1xuICAgICAgY29uc3QgZXZlbnRzID0gdGhpcy5ldmVudHNbZXZlbnROYW1lXTtcbiAgICAgIGV2ZW50cy5mb3JFYWNoKGV2ZW50ID0+IGV2ZW50ICYmIGV2ZW50LmNhbGxiYWNrICYmIGV2ZW50LmNhbGxiYWNrKC4uLmV2ZW50QXJncykpO1xuICAgIH1cbiAgfVxuXG4gIGRpc3BhdGNoRXZlbnRDb21wb25lbnQoZXZlbnROYW1lLCBjb21wb25lbnQsIC4uLmV2ZW50QXJncykge1xuICAgIGlmKHRoaXMuZXZlbnRzW2V2ZW50TmFtZV0pIHtcbiAgICAgIGNvbnN0IGV2ZW50cyA9IHRoaXMuZXZlbnRzW2V2ZW50TmFtZV07XG4gICAgICBldmVudHMuZm9yRWFjaChldmVudCA9PiBldmVudCAmJiBldmVudC5jYWxsYmFjayAmJiBldmVudC5jb21wb25lbnQgPT0gY29tcG9uZW50ICYmIGV2ZW50LmNhbGxiYWNrKC4uLmV2ZW50QXJncykpO1xuICAgIH1cbiAgfVxuXG4gIGFkZEV2ZW50TGlzdGVuZXIoZXZlbnROYW1lLCBjb21wb25lbnQsIGNhbGxiYWNrKSB7XG4gICAgaWYodGhpcy5ldmVudHNbZXZlbnROYW1lXSkge1xuICAgICAgdGhpcy5ldmVudHNbZXZlbnROYW1lXS5wdXNoKHtcbiAgICAgICAgXCJjb21wb25lbnRcIjogY29tcG9uZW50LFxuICAgICAgICBcImNhbGxiYWNrXCI6IGNhbGxiYWNrXG4gICAgICB9KTtcbiAgICB9XG4gIH1cblxuICByZW1vdmVFdmVudExpc3RlbmVyKGV2ZW50TmFtZSwgY2FsbGJhY2spIHtcbiAgICBpZih0aGlzLmV2ZW50c1tldmVudE5hbWVdKSB0aGlzLmV2ZW50c1tldmVudE5hbWVdLmZpbHRlcihldmVudCA9PiBldmVudCAmJiBldmVudC5jYWxsYmFjayAhPSBjYWxsYmFjayk7XG4gIH1cblxuICByZW1vdmVFdmVudExpc3RlbmVyQ29tcG9uZW50KGV2ZW50TmFtZSwgY29tcG9uZW50KSB7XG4gICAgaWYodGhpcy5ldmVudHNbZXZlbnROYW1lXSkgdGhpcy5ldmVudHNbZXZlbnROYW1lXS5maWx0ZXIoZXZlbnQgPT4gZXZlbnQgJiYgZXZlbnQuY29tcG9uZW50ICE9IGNvbXBvbmVudCk7XG4gIH1cblxuICByZW1vdmVBbGxFdmVudExpc3RlbmVyKCkge1xuICAgIHRoaXMuZXZlbnRzID0gW107XG4gIH1cbn0iLCIvKlxuICogQ29weXJpZ2h0IChDKSAyMDIwIEVsaWFzdGlrIChlbGlhc3Rpa3NvZnRzLmNvbSlcbiAqXG4gKiBUaGlzIGZpbGUgaXMgcGFydCBvZiBcIkpTR2FtZVRvb2xzXCIuXG4gKlxuICogXCJKU0dhbWVUb29sc1wiIGlzIGZyZWUgc29mdHdhcmU6IHlvdSBjYW4gcmVkaXN0cmlidXRlIGl0IGFuZC9vciBtb2RpZnlcbiAqIGl0IHVuZGVyIHRoZSB0ZXJtcyBvZiB0aGUgR05VIEdlbmVyYWwgUHVibGljIExpY2Vuc2UgYXMgcHVibGlzaGVkIGJ5XG4gKiB0aGUgRnJlZSBTb2Z0d2FyZSBGb3VuZGF0aW9uLCBlaXRoZXIgdmVyc2lvbiAzIG9mIHRoZSBMaWNlbnNlLCBvclxuICogKGF0IHlvdXIgb3B0aW9uKSBhbnkgbGF0ZXIgdmVyc2lvbi5cbiAqXG4gKiBcIkpTR2FtZVRvb2xzXCIgaXMgZGlzdHJpYnV0ZWQgaW4gdGhlIGhvcGUgdGhhdCBpdCB3aWxsIGJlIHVzZWZ1bCxcbiAqIGJ1dCBXSVRIT1VUIEFOWSBXQVJSQU5UWTsgd2l0aG91dCBldmVuIHRoZSBpbXBsaWVkIHdhcnJhbnR5IG9mXG4gKiBNRVJDSEFOVEFCSUxJVFkgb3IgRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UuICBTZWUgdGhlXG4gKiBHTlUgR2VuZXJhbCBQdWJsaWMgTGljZW5zZSBmb3IgbW9yZSBkZXRhaWxzLlxuICpcbiAqIFlvdSBzaG91bGQgaGF2ZSByZWNlaXZlZCBhIGNvcHkgb2YgdGhlIEdOVSBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlXG4gKiBhbG9uZyB3aXRoIFwiSlNHYW1lVG9vbHNcIi4gIElmIG5vdCwgc2VlIDxodHRwOi8vd3d3LmdudS5vcmcvbGljZW5zZXMvPi5cbiAqL1xuaW1wb3J0IENvbXBvbmVudCBmcm9tIFwiLi9Db21wb25lbnRcIjtcbmltcG9ydCBDb250YWluZXIgZnJvbSBcIi4vQ29udGFpbmVyXCI7XG5pbXBvcnQgVXRpbHMgZnJvbSBcIi4vVXRpbHNcIjtcbmltcG9ydCBDb25zdGFudHMgZnJvbSBcIi4vQ29uc3RhbnRzXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFJvdyBleHRlbmRzIENvbnRhaW5lciB7XG4gIHNlbGVjdGFibGUgPSBmYWxzZTtcbiAgI19pbm5lckhlaWdodCA9IDA7XG4gICNfaW5uZXJXaWR0aCA9IDA7XG5cbiAgY29uc3RydWN0b3IoeCwgeSwgbWF4V2lkdGgsIG1heEhlaWdodCwgc3R5bGUsIC4uLmNvbXBvbmVudHMpIHtcbiAgICBzdXBlcih4LCB5LCBtYXhXaWR0aCwgbWF4SGVpZ2h0LCBzdHlsZSwgLi4uY29tcG9uZW50cyk7XG5cbiAgICBpZighQ29uc3RhbnRzLlNldHRpbmcuRElTQUJMRV9FWFBFUklNRU5UQUxfT1BUSU1JWkFUSU9OUykge1xuICAgICAgdGhpcy51cGRhdGVJbm5lcldpZHRoKCk7XG4gICAgICB0aGlzLnVwZGF0ZUlubmVySGVpZ2h0KCk7XG4gIFxuICAgICAgdGhpcy5hZGRDaGFuZ2VBY3Rpb24oKCkgPT4ge1xuICAgICAgICB0aGlzLnVwZGF0ZUlubmVyV2lkdGgoKTtcbiAgICAgICAgdGhpcy51cGRhdGVJbm5lckhlaWdodCgpO1xuICAgICAgfSk7XG4gICAgfVxuICB9XG5cbiAgZHJhdyhjb250ZXh0KSB7XG4gICAgaWYodGhpcy5oaWRkZW4pIHJldHVybjtcbiAgICBzdXBlci5kcmF3KGNvbnRleHQpO1xuXG4gICAgY29uc3QgY2FudmFzID0gY29udGV4dC5jYW52YXM7XG4gICAgY29uc3QgY3R4ID0gY2FudmFzLmdldENvbnRleHQoXCIyZFwiKTtcbiAgICBjdHguc2F2ZSgpO1xuXG4gICAgbGV0IGN0eFRlbXAgPSBjdHg7XG4gICAgXG4gICAgaWYodGhpcy5pc0N1dHRpbmcpIHtcbiAgICAgIGN0eFRlbXAgPSB0aGlzLmNhbnZhc1RtcC5nZXRDb250ZXh0KFwiMmRcIik7XG4gICAgICBjdHhUZW1wLnNjYWxlKENvbnN0YW50cy5TZXR0aW5nLlBJWEVMX1JBVElPLCBDb25zdGFudHMuU2V0dGluZy5QSVhFTF9SQVRJTyk7XG4gICAgfVxuICBcbiAgICBpZihzdXBlci5jb21wb25lbnRzICE9IG51bGwpIHtcbiAgICAgIGxldCBjdXJyZW50WCA9IHRoaXMuc3R5bGUucGFkZGluZztcblxuICAgICAgc3VwZXIuY29tcG9uZW50cy5mb3JFYWNoKGNvbXBvbmVudCA9PiB7XG4gICAgICAgIGN1cnJlbnRYID0gdGhpcy5kcmF3Q29tcG9uZW50KGNvbXBvbmVudCwgY3VycmVudFgsIGN0eFRlbXApO1xuICAgICAgfSk7XG4gICAgfVxuICAgIFxuICAgIGlmKHRoaXMuaXNDdXR0aW5nKSB7XG4gICAgICBVdGlscy5kcmF3SW1hZ2VEYXRhKGN0eCwgdGhpcy5jYW52YXNUbXAsIHRoaXMueCwgdGhpcy55LCB0aGlzLndpZHRoLCB0aGlzLmhlaWdodCwgdGhpcy54ICogQ29uc3RhbnRzLlNldHRpbmcuUElYRUxfUkFUSU8sIHRoaXMueSAqIENvbnN0YW50cy5TZXR0aW5nLlBJWEVMX1JBVElPLCB0aGlzLndpZHRoICogQ29uc3RhbnRzLlNldHRpbmcuUElYRUxfUkFUSU8sIHRoaXMuaGVpZ2h0ICogQ29uc3RhbnRzLlNldHRpbmcuUElYRUxfUkFUSU8pO1xuICAgIH1cblxuICAgIHN1cGVyLmRyYXdTY3JvbGxiYXJzKGN0eCk7XG5cbiAgICBjdHgucmVzdG9yZSgpO1xuICB9XG5cbiAgZHJhd0NvbXBvbmVudChjb21wb25lbnQsIGN1cnJlbnRYLCBjdHgpIHtcbiAgICBpZihjb21wb25lbnQgaW5zdGFuY2VvZiBDb21wb25lbnQpIHtcbiAgICAgIGNvbXBvbmVudC54ID0gY3VycmVudFggLSB0aGlzLm9mZnNldFNjcm9sbFg7XG4gICAgICBjb21wb25lbnQueSA9IHRoaXMuc3R5bGUucGFkZGluZyAtIHRoaXMub2Zmc2V0U2Nyb2xsWTtcbiAgICAgIFxuICAgICAgaWYoIWNvbXBvbmVudC5oaWRkZW4pIHtcbiAgICAgICAgaWYodGhpcy5pc0NvbXBvbmVudFZpc2libGUoY29tcG9uZW50KSkge1xuICAgICAgICAgIGNvbXBvbmVudC5kcmF3KGN0eCk7XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgIGN1cnJlbnRYICs9IGNvbXBvbmVudC53aWR0aCArIHRoaXMuc3R5bGUuc3BhY2VCZXR3ZWVuQ29tcG9uZW50cztcbiAgICAgIH1cbiAgICB9XG4gICAgXG4gICAgcmV0dXJuIGN1cnJlbnRYO1xuICB9XG5cbiAgdXBkYXRlSW5uZXJIZWlnaHQoKSB7XG4gICAgbGV0IG1heEhlaWdodCA9IDA7XG4gICAgc3VwZXIuY29tcG9uZW50cy5mb3JFYWNoKGNvbXBvbmVudCA9PiB7IGlmKGNvbXBvbmVudC5oZWlnaHQgPiBtYXhIZWlnaHQgJiYgIWNvbXBvbmVudC5oaWRkZW4pIG1heEhlaWdodCA9IGNvbXBvbmVudC5oZWlnaHQ7IH0pO1xuICAgIHRoaXMuI19pbm5lckhlaWdodCA9IG1heEhlaWdodCArIHRoaXMuc3R5bGUucGFkZGluZztcbiAgfVxuXG4gIHVwZGF0ZUlubmVyV2lkdGgoKSB7XG4gICAgbGV0IHRvdGFsV2lkdGggPSAwO1xuICAgIHN1cGVyLmNvbXBvbmVudHMuZm9yRWFjaChjb21wb25lbnQgPT4geyBpZighY29tcG9uZW50LmhpZGRlbikgdG90YWxXaWR0aCArPSBjb21wb25lbnQud2lkdGggfSk7XG4gICAgdGhpcy4jX2lubmVyV2lkdGggPSB0b3RhbFdpZHRoICsgdGhpcy5zdHlsZS5zcGFjZUJldHdlZW5Db21wb25lbnRzICogKHN1cGVyLmNvbXBvbmVudHMubGVuZ3RoIC0gMSkgKyB0aGlzLnN0eWxlLnBhZGRpbmc7XG4gIH1cblxuICBnZXQgaW5uZXJIZWlnaHQoKSB7XG4gICAgaWYoQ29uc3RhbnRzLlNldHRpbmcuRElTQUJMRV9FWFBFUklNRU5UQUxfT1BUSU1JWkFUSU9OUykgdGhpcy51cGRhdGVJbm5lckhlaWdodCgpO1xuICAgIHJldHVybiB0aGlzLiNfaW5uZXJIZWlnaHQ7XG4gIH1cblxuICBnZXQgaW5uZXJXaWR0aCgpIHtcbiAgICBpZihDb25zdGFudHMuU2V0dGluZy5ESVNBQkxFX0VYUEVSSU1FTlRBTF9PUFRJTUlaQVRJT05TKSB0aGlzLnVwZGF0ZUlubmVyV2lkdGgoKTtcbiAgICByZXR1cm4gdGhpcy4jX2lubmVyV2lkdGg7XG4gIH1cblxuICBnZXQgd2lkdGgoKSB7XG4gICAgY29uc3Qgd2lkdGggPSB0aGlzLmlubmVyV2lkdGggfHwgKHRoaXMucGFyZW50ICYmIHRoaXMucGFyZW50LndpZHRoKTtcbiAgICBjb25zdCBtaW4gPSB0aGlzLm1heFdpZHRoICE9IG51bGwgPyBNYXRoLm1pbih0aGlzLm1heFdpZHRoLCB3aWR0aCkgOiBudWxsO1xuICAgIHJldHVybiB0aGlzLm1pbldpZHRoICE9IG51bGwgPyBNYXRoLm1heCh0aGlzLm1pbldpZHRoLCBtaW4gIT0gbnVsbCA/IG1pbiA6IHdpZHRoKSA6IG1pbiAhPSBudWxsID8gbWluIDogd2lkdGg7XG4gIH1cblxuICBnZXQgaGVpZ2h0KCkge1xuICAgIGNvbnN0IGhlaWdodCA9IHRoaXMuaW5uZXJIZWlnaHQgfHwgKHRoaXMucGFyZW50ICYmIHRoaXMucGFyZW50LmhlaWdodCk7XG4gICAgY29uc3QgbWluID0gdGhpcy5tYXhIZWlnaHQgIT0gbnVsbCA/IE1hdGgubWluKHRoaXMubWF4SGVpZ2h0LCBoZWlnaHQpIDogbnVsbDtcbiAgICByZXR1cm4gdGhpcy5taW5IZWlnaHQgIT0gbnVsbCA/IE1hdGgubWF4KHRoaXMubWluSGVpZ2h0LCBtaW4gIT0gbnVsbCA/IG1pbiA6IGhlaWdodCkgOiBtaW4gIT0gbnVsbCA/IG1pbiA6IGhlaWdodDtcbiAgfVxuXG4gIGdldCBkZWZhdWx0U3R5bGUoKSB7XG4gICAgcmV0dXJuIHN1cGVyLmRlZmF1bHRTdHlsZTtcbiAgfVxufSIsIi8qXG4gKiBDb3B5cmlnaHQgKEMpIDIwMjAgRWxpYXN0aWsgKGVsaWFzdGlrc29mdHMuY29tKVxuICpcbiAqIFRoaXMgZmlsZSBpcyBwYXJ0IG9mIFwiSlNHYW1lVG9vbHNcIi5cbiAqXG4gKiBcIkpTR2FtZVRvb2xzXCIgaXMgZnJlZSBzb2Z0d2FyZTogeW91IGNhbiByZWRpc3RyaWJ1dGUgaXQgYW5kL29yIG1vZGlmeVxuICogaXQgdW5kZXIgdGhlIHRlcm1zIG9mIHRoZSBHTlUgR2VuZXJhbCBQdWJsaWMgTGljZW5zZSBhcyBwdWJsaXNoZWQgYnlcbiAqIHRoZSBGcmVlIFNvZnR3YXJlIEZvdW5kYXRpb24sIGVpdGhlciB2ZXJzaW9uIDMgb2YgdGhlIExpY2Vuc2UsIG9yXG4gKiAoYXQgeW91ciBvcHRpb24pIGFueSBsYXRlciB2ZXJzaW9uLlxuICpcbiAqIFwiSlNHYW1lVG9vbHNcIiBpcyBkaXN0cmlidXRlZCBpbiB0aGUgaG9wZSB0aGF0IGl0IHdpbGwgYmUgdXNlZnVsLFxuICogYnV0IFdJVEhPVVQgQU5ZIFdBUlJBTlRZOyB3aXRob3V0IGV2ZW4gdGhlIGltcGxpZWQgd2FycmFudHkgb2ZcbiAqIE1FUkNIQU5UQUJJTElUWSBvciBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRS4gIFNlZSB0aGVcbiAqIEdOVSBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlIGZvciBtb3JlIGRldGFpbHMuXG4gKlxuICogWW91IHNob3VsZCBoYXZlIHJlY2VpdmVkIGEgY29weSBvZiB0aGUgR05VIEdlbmVyYWwgUHVibGljIExpY2Vuc2VcbiAqIGFsb25nIHdpdGggXCJKU0dhbWVUb29sc1wiLiAgSWYgbm90LCBzZWUgPGh0dHA6Ly93d3cuZ251Lm9yZy9saWNlbnNlcy8+LlxuICovXG5pbXBvcnQgSW5wdXQgZnJvbSBcIi4vSW5wdXRcIjtcbmltcG9ydCBDb250YWluZXIgZnJvbSBcIi4vQ29udGFpbmVyXCI7XG5pbXBvcnQgVXRpbHMgZnJvbSBcIi4vVXRpbHNcIjtcbmltcG9ydCBTdHlsZSBmcm9tIFwiLi9TdHlsZVwiO1xuaW1wb3J0IENvbnN0YW50cyBmcm9tIFwiLi9Db25zdGFudHNcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU2NlbmUgZXh0ZW5kcyBDb250YWluZXIge1xuICBzZWxlY3RhYmxlID0gZmFsc2U7XG4gIGVuYWJsZUV2ZW50cyA9IGZhbHNlO1xuXG4gIGNvbnN0cnVjdG9yKC4uLmNvbXBvbmVudHMpIHtcbiAgICBzdXBlcigpO1xuICAgIHRoaXMuYWRkQWxsKC4uLmNvbXBvbmVudHMpO1xuICB9XG5cbiAgZHJhdyhjb250ZXh0KSB7XG4gICAgaWYodGhpcy5oaWRkZW4pIHJldHVybjtcbiAgICBzdXBlci5kcmF3KGNvbnRleHQpO1xuXG4gICAgY29uc3QgY2FudmFzID0gY29udGV4dC5jYW52YXM7XG4gICAgY29uc3QgY3R4ID0gY2FudmFzLmdldENvbnRleHQoXCIyZFwiKTtcbiAgICBjdHguc2F2ZSgpO1xuICAgIGNhbnZhcy5zdHlsZS5jdXJzb3IgPSBcImRlZmF1bHRcIjtcblxuICAgIGxldCBjdHhUZW1wID0gY3R4O1xuICAgIGlmKHRoaXMubWF4V2lkdGggfHwgdGhpcy5tYXhIZWlnaHQpIGN0eFRlbXAgPSB0aGlzLmNhbnZhc1RtcC5nZXRDb250ZXh0KFwiMmRcIik7XG5cbiAgICB0aGlzLmRyYXdDb21wb25lbnRzKGN0eFRlbXApOyAvLyBEcmF3IHNvcnRlZCBjb21wb25lbnRzXG4gICAgXG4gICAgaWYodGhpcy5tYXhXaWR0aCB8fCB0aGlzLm1heEhlaWdodCkgVXRpbHMuZHJhd0ltYWdlRGF0YShjdHgsIHRoaXMuY2FudmFzVG1wLCB0aGlzLngsIHRoaXMueSwgdGhpcy53aWR0aCwgdGhpcy5oZWlnaHQsIHRoaXMueCwgdGhpcy55LCB0aGlzLndpZHRoLCB0aGlzLmhlaWdodCk7XG4gICAgc3VwZXIuZHJhd1Njcm9sbGJhcnMoY3R4KTtcblxuICAgIGN0eC5yZXN0b3JlKCk7XG4gIH1cblxuICBkcmF3Q29tcG9uZW50cyhjdHgpIHtcbiAgICB0aGlzLmNvbXBvbmVudHMuc29ydChTY2VuZS5jb21wYXJlQ29tcG9uZW50cykuZm9yRWFjaChjb21wb25lbnQgPT4gY29tcG9uZW50LmRyYXcoY3R4KSk7XG4gIH1cblxuICBnZXQgZGVmYXVsdFN0eWxlKCkge1xuICAgIHJldHVybiBuZXcgU3R5bGUoe1xuICAgICAgXCJwYWRkaW5nXCI6IENvbnN0YW50cy5TZXR0aW5nLkRFRkFVTFRfUEFERElOR1xuICAgIH0pO1xuICB9XG59IiwiLypcbiAqIENvcHlyaWdodCAoQykgMjAyMCBFbGlhc3RpayAoZWxpYXN0aWtzb2Z0cy5jb20pXG4gKlxuICogVGhpcyBmaWxlIGlzIHBhcnQgb2YgXCJKU0dhbWVUb29sc1wiLlxuICpcbiAqIFwiSlNHYW1lVG9vbHNcIiBpcyBmcmVlIHNvZnR3YXJlOiB5b3UgY2FuIHJlZGlzdHJpYnV0ZSBpdCBhbmQvb3IgbW9kaWZ5XG4gKiBpdCB1bmRlciB0aGUgdGVybXMgb2YgdGhlIEdOVSBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlIGFzIHB1Ymxpc2hlZCBieVxuICogdGhlIEZyZWUgU29mdHdhcmUgRm91bmRhdGlvbiwgZWl0aGVyIHZlcnNpb24gMyBvZiB0aGUgTGljZW5zZSwgb3JcbiAqIChhdCB5b3VyIG9wdGlvbikgYW55IGxhdGVyIHZlcnNpb24uXG4gKlxuICogXCJKU0dhbWVUb29sc1wiIGlzIGRpc3RyaWJ1dGVkIGluIHRoZSBob3BlIHRoYXQgaXQgd2lsbCBiZSB1c2VmdWwsXG4gKiBidXQgV0lUSE9VVCBBTlkgV0FSUkFOVFk7IHdpdGhvdXQgZXZlbiB0aGUgaW1wbGllZCB3YXJyYW50eSBvZlxuICogTUVSQ0hBTlRBQklMSVRZIG9yIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFLiAgU2VlIHRoZVxuICogR05VIEdlbmVyYWwgUHVibGljIExpY2Vuc2UgZm9yIG1vcmUgZGV0YWlscy5cbiAqXG4gKiBZb3Ugc2hvdWxkIGhhdmUgcmVjZWl2ZWQgYSBjb3B5IG9mIHRoZSBHTlUgR2VuZXJhbCBQdWJsaWMgTGljZW5zZVxuICogYWxvbmcgd2l0aCBcIkpTR2FtZVRvb2xzXCIuICBJZiBub3QsIHNlZSA8aHR0cDovL3d3dy5nbnUub3JnL2xpY2Vuc2VzLz4uXG4gKi9cbmltcG9ydCBDb25zdGFudHMgZnJvbSBcIi4vQ29uc3RhbnRzXCI7XG5pbXBvcnQgQm94IGZyb20gXCIuL0JveFwiO1xuaW1wb3J0IFN0eWxlIGZyb20gXCIuL1N0eWxlXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFNjcm9sbGJhciBleHRlbmRzIEJveCB7XG4gIHNlbGVjdGFibGUgPSB0cnVlO1xuXG4gIGNvbnN0cnVjdG9yKHNpemUsIHN0eWxlLCBwYXJlbnQpIHtcbiAgICBzdXBlcihudWxsLCBudWxsLCBudWxsLCBudWxsLCBzdHlsZSk7XG4gICAgdGhpcy5wYXJlbnQgPSBwYXJlbnQ7XG4gICAgdGhpcy5zaXplID0gc2l6ZSB8fCBDb25zdGFudHMuU2V0dGluZy5TQ1JPTExCQVJfREVGQVVMVF9TSVpFO1xuICB9XG4gIFxuICBkcmF3KGNvbnRleHQpIHtcbiAgICBpZih0aGlzLmhpZGRlbikgcmV0dXJuO1xuICAgIGlmKHRoaXMuY2xpY2tlZCkge1xuICAgICAgdGhpcy5ob3ZlcmVkID0gdHJ1ZTtcbiAgICB9XG4gICAgXG4gICAgc3VwZXIuZHJhdyhjb250ZXh0KTtcbiAgfVxuXG4gIGdldCBtYXhXaWR0aFBhcmVudCgpIHtcbiAgICByZXR1cm4gdGhpcy5wYXJlbnQgPyB0aGlzLnBhcmVudC5tYXhXaWR0aCAtIE1hdGguYWJzKE1hdGgubWluKDAsIHRoaXMucGFyZW50LngpKSA6IDA7XG4gIH1cblxuICBnZXQgbWF4SGVpZ2h0UGFyZW50KCkge1xuICAgIHJldHVybiB0aGlzLnBhcmVudCA/IHRoaXMucGFyZW50Lm1heEhlaWdodCAtIE1hdGguYWJzKE1hdGgubWluKDAsIHRoaXMucGFyZW50LnkpKSA6IDA7XG4gIH1cblxuICBnZXQgaW5uZXJXaWR0aFBhcmVudCgpIHtcbiAgICByZXR1cm4gdGhpcy5wYXJlbnQgPyB0aGlzLnBhcmVudC5pbm5lcldpZHRoIC0gTWF0aC5hYnMoTWF0aC5taW4oMCwgdGhpcy5wYXJlbnQueCkpIDogMDtcbiAgfVxuXG4gIGdldCBpbm5lckhlaWdodFBhcmVudCgpIHtcbiAgICByZXR1cm4gdGhpcy5wYXJlbnQgPyB0aGlzLnBhcmVudC5pbm5lckhlaWdodCAtIE1hdGguYWJzKE1hdGgubWluKDAsIHRoaXMucGFyZW50LnkpKSA6IDA7XG4gIH1cblxuICBnZXQgbWF4V2lkdGgoKSB7XG4gICAgcmV0dXJuIHRoaXMud2lkdGg7XG4gIH1cblxuICBnZXQgbWF4SGVpZ2h0KCkge1xuICAgIHJldHVybiB0aGlzLmhlaWdodDtcbiAgfVxuXG4gIGdldCBjb250ZW50UmF0aW9YKCkge1xuICAgIHJldHVybiB0aGlzLnBhcmVudCA/IHRoaXMubWF4V2lkdGhQYXJlbnQgLyB0aGlzLmlubmVyV2lkdGhQYXJlbnQgOiAwO1xuICB9XG5cbiAgZ2V0IGNvbnRlbnRSYXRpb1koKSB7XG4gICAgcmV0dXJuIHRoaXMucGFyZW50ID8gdGhpcy5tYXhIZWlnaHRQYXJlbnQgLyB0aGlzLmlubmVySGVpZ2h0UGFyZW50IDogMDtcbiAgfVxuXG4gIGdldCB3aWR0aCgpIHtcbiAgICByZXR1cm4gdGhpcy5tYXhXaWR0aFBhcmVudCAqIHRoaXMuY29udGVudFJhdGlvWDtcbiAgfVxuXG4gIGdldCBoZWlnaHQoKSB7XG4gICAgcmV0dXJuIHRoaXMubWF4SGVpZ2h0UGFyZW50ICogdGhpcy5jb250ZW50UmF0aW9ZO1xuICB9XG5cbiAgZ2V0IHdpbmRvd1Njcm9sbFNpemVYKCkge1xuICAgIHJldHVybiB0aGlzLmlubmVyV2lkdGhQYXJlbnQgLSB0aGlzLm1heFdpZHRoUGFyZW50O1xuICB9XG5cbiAgZ2V0IHdpbmRvd1Njcm9sbFNpemVZKCkge1xuICAgIHJldHVybiB0aGlzLmlubmVySGVpZ2h0UGFyZW50IC0gdGhpcy5tYXhIZWlnaHRQYXJlbnQ7XG4gIH1cblxuICBnZXQgcGVyY2VudFNjcm9sbGJhclgoKSB7XG4gICAgcmV0dXJuIHRoaXMucGFyZW50ID8gdGhpcy5wYXJlbnQub2Zmc2V0U2Nyb2xsWCAvIHRoaXMud2luZG93U2Nyb2xsU2l6ZVggOiAwO1xuICB9XG5cbiAgZ2V0IHBlcmNlbnRTY3JvbGxiYXJZKCkge1xuICAgIHJldHVybiB0aGlzLnBhcmVudCA/IHRoaXMucGFyZW50Lm9mZnNldFNjcm9sbFkgLyB0aGlzLndpbmRvd1Njcm9sbFNpemVZIDogMDtcbiAgfVxuXG4gIGdldCBzY3JvbGxBcmVhU2l6ZVgoKSB7XG4gICAgcmV0dXJuIHRoaXMubWF4V2lkdGhQYXJlbnQgLSB0aGlzLndpZHRoO1xuICB9XG5cbiAgZ2V0IHNjcm9sbEFyZWFTaXplWSgpIHtcbiAgICByZXR1cm4gdGhpcy5tYXhIZWlnaHRQYXJlbnQgLSB0aGlzLmhlaWdodDtcbiAgfVxuXG4gIGdldCB4KCkge1xuICAgIHJldHVybiB0aGlzLnBhcmVudCA/IE1hdGguYWJzKHRoaXMucGFyZW50LngpICsgdGhpcy5zY3JvbGxBcmVhU2l6ZVggKiB0aGlzLnBlcmNlbnRTY3JvbGxiYXJYIDogMDtcbiAgfVxuXG4gIGdldCB5KCkge1xuICAgIHJldHVybiB0aGlzLnBhcmVudCA/IE1hdGguYWJzKHRoaXMucGFyZW50LnkpICsgdGhpcy5zY3JvbGxBcmVhU2l6ZVkgKiB0aGlzLnBlcmNlbnRTY3JvbGxiYXJZIDogMDtcbiAgfVxuXG4gIGdldCBkZWZhdWx0U3R5bGUoKSB7XG4gICAgcmV0dXJuIG5ldyBTdHlsZSh7XG4gICAgICBcImJhY2tncm91bmRDb2xvclwiOiBDb25zdGFudHMuU2V0dGluZy5TQ1JPTExCQVJfREVGQVVMVF9CQUNLR1JPVU5ELFxuICAgICAgXCJiYWNrZ3JvdW5kQ29sb3JIb3ZlclwiOiBDb25zdGFudHMuU2V0dGluZy5TQ1JPTExCQVJfREVGQVVMVF9IT1ZFUl9CQUNLR1JPVU5ELFxuICAgICAgXCJiYWNrZ3JvdW5kQ29sb3JEb3duXCI6IENvbnN0YW50cy5TZXR0aW5nLlNDUk9MTEJBUl9ERUZBVUxUX0NMSUNLX0JBQ0tHUk9VTkQsXG4gICAgICBcImJvcmRlclNpemVcIjogMFxuICAgIH0pO1xuICB9XG5cbiAgY29tcGFyZVRvQ29tcG9uZW50KG90aGVyQ29tcG9uZW50KSB7XG4gICAgcmV0dXJuIG90aGVyQ29tcG9uZW50LmNvbXBhcmVUb1Njcm9sbGJhcih0aGlzKTtcbiAgfVxuXG4gIGNvbXBhcmVUb1Njcm9sbGJhcihvdGhlckNvbXBvbmVudCkge1xuICAgIHJldHVybiAwO1xuICB9XG59IiwiLypcbiAqIENvcHlyaWdodCAoQykgMjAyMCBFbGlhc3RpayAoZWxpYXN0aWtzb2Z0cy5jb20pXG4gKlxuICogVGhpcyBmaWxlIGlzIHBhcnQgb2YgXCJKU0dhbWVUb29sc1wiLlxuICpcbiAqIFwiSlNHYW1lVG9vbHNcIiBpcyBmcmVlIHNvZnR3YXJlOiB5b3UgY2FuIHJlZGlzdHJpYnV0ZSBpdCBhbmQvb3IgbW9kaWZ5XG4gKiBpdCB1bmRlciB0aGUgdGVybXMgb2YgdGhlIEdOVSBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlIGFzIHB1Ymxpc2hlZCBieVxuICogdGhlIEZyZWUgU29mdHdhcmUgRm91bmRhdGlvbiwgZWl0aGVyIHZlcnNpb24gMyBvZiB0aGUgTGljZW5zZSwgb3JcbiAqIChhdCB5b3VyIG9wdGlvbikgYW55IGxhdGVyIHZlcnNpb24uXG4gKlxuICogXCJKU0dhbWVUb29sc1wiIGlzIGRpc3RyaWJ1dGVkIGluIHRoZSBob3BlIHRoYXQgaXQgd2lsbCBiZSB1c2VmdWwsXG4gKiBidXQgV0lUSE9VVCBBTlkgV0FSUkFOVFk7IHdpdGhvdXQgZXZlbiB0aGUgaW1wbGllZCB3YXJyYW50eSBvZlxuICogTUVSQ0hBTlRBQklMSVRZIG9yIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFLiAgU2VlIHRoZVxuICogR05VIEdlbmVyYWwgUHVibGljIExpY2Vuc2UgZm9yIG1vcmUgZGV0YWlscy5cbiAqXG4gKiBZb3Ugc2hvdWxkIGhhdmUgcmVjZWl2ZWQgYSBjb3B5IG9mIHRoZSBHTlUgR2VuZXJhbCBQdWJsaWMgTGljZW5zZVxuICogYWxvbmcgd2l0aCBcIkpTR2FtZVRvb2xzXCIuICBJZiBub3QsIHNlZSA8aHR0cDovL3d3dy5nbnUub3JnL2xpY2Vuc2VzLz4uXG4gKi9cbmltcG9ydCBTY3JvbGxiYXIgZnJvbSBcIi4vU2Nyb2xsYmFyXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFNjcm9sbGJhckhvcml6b250YWwgZXh0ZW5kcyBTY3JvbGxiYXIge1xuICBzZWxlY3RhYmxlID0gdHJ1ZTtcblxuICBjb25zdHJ1Y3RvcihzaXplLCBzdHlsZSwgcGFyZW50KSB7XG4gICAgc3VwZXIoc2l6ZSwgc3R5bGUsIHBhcmVudCk7XG5cbiAgICB0aGlzLmFkZE1vdmVBY3Rpb24oKGRlbHRhWCkgPT4ge1xuICAgICAgaWYodGhpcy5wYXJlbnQpIHtcbiAgICAgICAgdGhpcy5wYXJlbnQub2Zmc2V0U2Nyb2xsWCAtPSBkZWx0YVg7XG5cbiAgICAgICAgaWYodGhpcy5wYXJlbnQucmVhY3Rvcikge1xuICAgICAgICAgIHRoaXMucGFyZW50LnJlYWN0b3IuZGlzcGF0Y2hFdmVudChcIm9uU2Nyb2xsXCIsIC1kZWx0YVgsIDApO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSk7XG4gIH1cbiAgXG4gIGRyYXcoY29udGV4dCkge1xuICAgIGlmKHRoaXMuc2Nyb2xsQXJlYVNpemVYID4gMCkge1xuICAgICAgc3VwZXIuZHJhdyhjb250ZXh0KTtcbiAgICB9XG4gIH1cblxuICBnZXQgaGVpZ2h0KCkge1xuICAgIHJldHVybiB0aGlzLnNpemU7XG4gIH1cblxuICBnZXQgeSgpIHtcbiAgICByZXR1cm4gdGhpcy5wYXJlbnQgPyB0aGlzLnBhcmVudC55ICsgdGhpcy5wYXJlbnQuaGVpZ2h0IC0gdGhpcy5zaXplIDogbnVsbDtcbiAgfVxufSIsIi8qXG4gKiBDb3B5cmlnaHQgKEMpIDIwMjAgRWxpYXN0aWsgKGVsaWFzdGlrc29mdHMuY29tKVxuICpcbiAqIFRoaXMgZmlsZSBpcyBwYXJ0IG9mIFwiSlNHYW1lVG9vbHNcIi5cbiAqXG4gKiBcIkpTR2FtZVRvb2xzXCIgaXMgZnJlZSBzb2Z0d2FyZTogeW91IGNhbiByZWRpc3RyaWJ1dGUgaXQgYW5kL29yIG1vZGlmeVxuICogaXQgdW5kZXIgdGhlIHRlcm1zIG9mIHRoZSBHTlUgR2VuZXJhbCBQdWJsaWMgTGljZW5zZSBhcyBwdWJsaXNoZWQgYnlcbiAqIHRoZSBGcmVlIFNvZnR3YXJlIEZvdW5kYXRpb24sIGVpdGhlciB2ZXJzaW9uIDMgb2YgdGhlIExpY2Vuc2UsIG9yXG4gKiAoYXQgeW91ciBvcHRpb24pIGFueSBsYXRlciB2ZXJzaW9uLlxuICpcbiAqIFwiSlNHYW1lVG9vbHNcIiBpcyBkaXN0cmlidXRlZCBpbiB0aGUgaG9wZSB0aGF0IGl0IHdpbGwgYmUgdXNlZnVsLFxuICogYnV0IFdJVEhPVVQgQU5ZIFdBUlJBTlRZOyB3aXRob3V0IGV2ZW4gdGhlIGltcGxpZWQgd2FycmFudHkgb2ZcbiAqIE1FUkNIQU5UQUJJTElUWSBvciBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRS4gIFNlZSB0aGVcbiAqIEdOVSBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlIGZvciBtb3JlIGRldGFpbHMuXG4gKlxuICogWW91IHNob3VsZCBoYXZlIHJlY2VpdmVkIGEgY29weSBvZiB0aGUgR05VIEdlbmVyYWwgUHVibGljIExpY2Vuc2VcbiAqIGFsb25nIHdpdGggXCJKU0dhbWVUb29sc1wiLiAgSWYgbm90LCBzZWUgPGh0dHA6Ly93d3cuZ251Lm9yZy9saWNlbnNlcy8+LlxuICovXG5pbXBvcnQgU2Nyb2xsYmFyIGZyb20gXCIuL1Njcm9sbGJhclwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTY3JvbGxiYXJWZXJ0aWNhbCBleHRlbmRzIFNjcm9sbGJhciB7XG4gIHNlbGVjdGFibGUgPSB0cnVlO1xuXG4gIGNvbnN0cnVjdG9yKHNpemUsIHN0eWxlLCBwYXJlbnQpIHtcbiAgICBzdXBlcihzaXplLCBzdHlsZSwgcGFyZW50KTtcbiAgICBcbiAgICB0aGlzLmFkZE1vdmVBY3Rpb24oKGRlbHRhWCwgZGVsdGFZKSA9PiB7XG4gICAgICBpZih0aGlzLnBhcmVudCkge1xuICAgICAgICB0aGlzLnBhcmVudC5vZmZzZXRTY3JvbGxZIC09IGRlbHRhWTtcblxuICAgICAgICBpZih0aGlzLnBhcmVudC5yZWFjdG9yKSB7XG4gICAgICAgICAgdGhpcy5wYXJlbnQucmVhY3Rvci5kaXNwYXRjaEV2ZW50KFwib25TY3JvbGxcIiwgMCwgLWRlbHRhWSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuICBcbiAgZHJhdyhjb250ZXh0KSB7XG4gICAgaWYodGhpcy5zY3JvbGxBcmVhU2l6ZVkgPiAwKSB7XG4gICAgICBzdXBlci5kcmF3KGNvbnRleHQpO1xuICAgIH1cbiAgfVxuXG4gIGdldCB3aWR0aCgpIHtcbiAgICByZXR1cm4gdGhpcy5zaXplO1xuICB9XG5cbiAgZ2V0IHgoKSB7XG4gICAgcmV0dXJuIHRoaXMucGFyZW50ID8gdGhpcy5wYXJlbnQueCArIHRoaXMucGFyZW50LndpZHRoIC0gdGhpcy5zaXplIDogMDtcbiAgfVxufSIsIi8qXG4gKiBDb3B5cmlnaHQgKEMpIDIwMjAgRWxpYXN0aWsgKGVsaWFzdGlrc29mdHMuY29tKVxuICpcbiAqIFRoaXMgZmlsZSBpcyBwYXJ0IG9mIFwiSlNHYW1lVG9vbHNcIi5cbiAqXG4gKiBcIkpTR2FtZVRvb2xzXCIgaXMgZnJlZSBzb2Z0d2FyZTogeW91IGNhbiByZWRpc3RyaWJ1dGUgaXQgYW5kL29yIG1vZGlmeVxuICogaXQgdW5kZXIgdGhlIHRlcm1zIG9mIHRoZSBHTlUgR2VuZXJhbCBQdWJsaWMgTGljZW5zZSBhcyBwdWJsaXNoZWQgYnlcbiAqIHRoZSBGcmVlIFNvZnR3YXJlIEZvdW5kYXRpb24sIGVpdGhlciB2ZXJzaW9uIDMgb2YgdGhlIExpY2Vuc2UsIG9yXG4gKiAoYXQgeW91ciBvcHRpb24pIGFueSBsYXRlciB2ZXJzaW9uLlxuICpcbiAqIFwiSlNHYW1lVG9vbHNcIiBpcyBkaXN0cmlidXRlZCBpbiB0aGUgaG9wZSB0aGF0IGl0IHdpbGwgYmUgdXNlZnVsLFxuICogYnV0IFdJVEhPVVQgQU5ZIFdBUlJBTlRZOyB3aXRob3V0IGV2ZW4gdGhlIGltcGxpZWQgd2FycmFudHkgb2ZcbiAqIE1FUkNIQU5UQUJJTElUWSBvciBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRS4gIFNlZSB0aGVcbiAqIEdOVSBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlIGZvciBtb3JlIGRldGFpbHMuXG4gKlxuICogWW91IHNob3VsZCBoYXZlIHJlY2VpdmVkIGEgY29weSBvZiB0aGUgR05VIEdlbmVyYWwgUHVibGljIExpY2Vuc2VcbiAqIGFsb25nIHdpdGggXCJKU0dhbWVUb29sc1wiLiAgSWYgbm90LCBzZWUgPGh0dHA6Ly93d3cuZ251Lm9yZy9saWNlbnNlcy8+LlxuICovXG5pbXBvcnQgTGFiZWwgZnJvbSBcIi4vTGFiZWxcIjtcbmltcG9ydCBCdXR0b24gZnJvbSBcIi4vQnV0dG9uXCI7XG5pbXBvcnQgVHJpYW5nbGUgZnJvbSBcIi4vVHJpYW5nbGVcIjtcbmltcG9ydCBTdHlsZSBmcm9tIFwiLi9TdHlsZVwiO1xuaW1wb3J0IENvbnN0YW50cyBmcm9tIFwiLi9Db25zdGFudHNcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU2VsZWN0IGV4dGVuZHMgQnV0dG9uIHtcbiAgI193aWR0aCA9IDA7XG5cbiAgY29uc3RydWN0b3IoeCwgeSwgbWF4V2lkdGgsIG1heEhlaWdodCwgc3R5bGUsIG9wdGlvbkNvbnRhaW5lciwgZGVmYXVsdE9wdGlvbikge1xuICAgIHN1cGVyKHgsIHksIG1heFdpZHRoLCBtYXhIZWlnaHQsIHN0eWxlKTtcblxuICAgIHRoaXMub3B0aW9uQ29udGFpbmVyID0gb3B0aW9uQ29udGFpbmVyO1xuICAgIGlmKGRlZmF1bHRPcHRpb24pIHRoaXMuc2VsZWN0ZWRPcHRpb24gPSBkZWZhdWx0T3B0aW9uO1xuXG4gICAgdGhpcy5sYWJlbCA9IG5ldyBMYWJlbChcIlwiLCB4LCB5LCBzdHlsZSk7XG4gICAgdGhpcy5sYWJlbC5zdHlsZS5zZXRBbGwoeyBcImFsaWduZW1lbnRcIjogQ29uc3RhbnRzLkFsaWduZW1lbnQuTEVGVCwgXCJ2ZXJ0aWNhbEFsaWduZW1lbnRcIjogQ29uc3RhbnRzLlZlcnRpY2FsQWxpZ25lbWVudC5DRU5URVIgfSk7XG4gICAgdGhpcy50cmlhbmdsZSA9IG5ldyBUcmlhbmdsZShudWxsLCBudWxsLCA4LCA4LCBzdHlsZSk7XG4gICAgdGhpcy50cmlhbmdsZS5zdHlsZS5zZXRBbGwoeyBcImFsaWduZW1lbnRcIjogQ29uc3RhbnRzLkFsaWduZW1lbnQuUklHSFQsIFwidmVydGljYWxBbGlnbmVtZW50XCI6IENvbnN0YW50cy5WZXJ0aWNhbEFsaWduZW1lbnQuQ0VOVEVSIH0pO1xuXG4gICAgdGhpcy5hZGRBbGwodGhpcy5sYWJlbCwgdGhpcy50cmlhbmdsZSk7XG5cbiAgICB0aGlzLmFkZENsaWNrQWN0aW9uKCgpID0+IHtcbiAgICAgIGlmKHRoaXMub3B0aW9uQ29udGFpbmVyKSB7XG4gICAgICAgIHRoaXMub3B0aW9uQ29udGFpbmVyLmhpZGRlbiA9IGZhbHNlO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgaWYoIUNvbnN0YW50cy5TZXR0aW5nLkRJU0FCTEVfRVhQRVJJTUVOVEFMX09QVElNSVpBVElPTlMpIHtcbiAgICAgIHRoaXMudXBkYXRlV2lkdGgoKTtcbiAgICAgIHRoaXMuYWRkQ2hhbmdlQWN0aW9uKCgpID0+IHRoaXMudXBkYXRlV2lkdGgoKSk7XG4gICAgfVxuICB9XG5cbiAgZHJhdyhjb250ZXh0KSB7XG4gICAgaWYodGhpcy5oaWRkZW4pIHJldHVybjtcbiAgICBpZih0aGlzLnNlbGVjdGVkT3B0aW9uICYmIHRoaXMuc2VsZWN0ZWRPcHRpb24ubGFiZWwpIHtcbiAgICAgIHRoaXMubGFiZWwudGV4dCA9IHRoaXMuc2VsZWN0ZWRPcHRpb24ubGFiZWwudGV4dDtcbiAgICB9XG5cbiAgICBzdXBlci5kcmF3KGNvbnRleHQpO1xuXG4gICAgaWYodGhpcy5vcHRpb25Db250YWluZXIpIHtcbiAgICAgIHRoaXMub3B0aW9uQ29udGFpbmVyLnNlbGVjdCA9IHRoaXM7XG4gICAgfVxuICB9XG5cbiAgZ2V0IHNlbGVjdGVkT3B0aW9uKCkge1xuICAgIHJldHVybiB0aGlzLm9wdGlvbkNvbnRhaW5lciA/IHRoaXMub3B0aW9uQ29udGFpbmVyLmNvbXBvbmVudHNbdGhpcy5vcHRpb25Db250YWluZXIuc2VsZWN0ZWRPcHRpb25dIDogbnVsbDtcbiAgfVxuXG4gIHNldCBzZWxlY3RlZE9wdGlvbihpZCkge1xuICAgIGlmKGlkICE9IHRoaXMub3B0aW9uQ29udGFpbmVyLnNlbGVjdGVkT3B0aW9uKSB7XG4gICAgICB0aGlzLm9wdGlvbkNvbnRhaW5lci5zZWxlY3RlZE9wdGlvbiA9IGlkO1xuICAgICAgdGhpcy5yZWFjdG9yLmRpc3BhdGNoRXZlbnQoXCJvbkNoYW5nZVwiLCB0aGlzKTtcbiAgICB9XG4gIH1cblxuICBnZXQgdGV4dCgpIHtcbiAgICByZXR1cm4gdGhpcy5zZWxlY3RlZE9wdGlvbiAmJiB0aGlzLnNlbGVjdGVkT3B0aW9uLmxhYmVsID8gdGhpcy5zZWxlY3RlZE9wdGlvbi5sYWJlbC50ZXh0IDogbnVsbDtcbiAgfVxuXG4gIHVwZGF0ZVdpZHRoKCkge1xuICAgIGxldCBtYXhXaWR0aCA9IHRoaXMubGFiZWwud2lkdGg7XG5cbiAgICBpZih0aGlzLm9wdGlvbkNvbnRhaW5lcikge1xuICAgICAgdGhpcy5vcHRpb25Db250YWluZXIuY29tcG9uZW50cy5mb3JFYWNoKGNvbXBvbmVudCA9PiB7XG4gICAgICAgIGNvbnN0IGxhYmVsID0gY29tcG9uZW50LmxhYmVsO1xuXG4gICAgICAgIGlmKGxhYmVsKSB7XG4gICAgICAgICAgaWYobGFiZWwudXBkYXRlU2l6ZXMpIGxhYmVsLnVwZGF0ZVNpemVzKCk7XG4gICAgICAgICAgaWYobGFiZWwud2lkdGggPiBtYXhXaWR0aCkgbWF4V2lkdGggPSBsYWJlbC53aWR0aDtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgdGhpcy4jX3dpZHRoID0gbWF4V2lkdGggKyB0aGlzLnN0eWxlLnBhZGRpbmcgKyB0aGlzLnRyaWFuZ2xlLndpZHRoICsgMTU7XG4gIH1cblxuICBnZXQgd2lkdGgoKSB7XG4gICAgaWYoQ29uc3RhbnRzLlNldHRpbmcuRElTQUJMRV9FWFBFUklNRU5UQUxfT1BUSU1JWkFUSU9OUykgdGhpcy51cGRhdGVXaWR0aCgpO1xuICAgIHJldHVybiB0aGlzLiNfd2lkdGg7XG4gIH1cblxuICBnZXQgYWxsQ29tcG9uZW50cygpIHtcbiAgICBjb25zdCBjb21wb25lbnRzID0gW107XG4gICAgY29tcG9uZW50cy5wdXNoKC4uLnN1cGVyLmFsbENvbXBvbmVudHMpO1xuICAgIHJldHVybiBjb21wb25lbnRzO1xuICB9XG5cbiAgZ2V0IGRlZmF1bHRTdHlsZSgpIHtcbiAgICByZXR1cm4gbmV3IFN0eWxlKHtcbiAgICAgIFwiYmFja2dyb3VuZENvbG9yXCI6IENvbnN0YW50cy5TZXR0aW5nLlNFTEVDVF9ERUZBVUxUX0JBQ0tHUk9VTkQsXG4gICAgICBcImJhY2tncm91bmRDb2xvckhvdmVyXCI6IENvbnN0YW50cy5TZXR0aW5nLlNFTEVDVF9ERUZBVUxUX0hPVkVSX0JBQ0tHUk9VTkQsXG4gICAgICBcImJhY2tncm91bmRDb2xvckRvd25cIjogQ29uc3RhbnRzLlNldHRpbmcuU0VMRUNUX0RFRkFVTFRfQ0xJQ0tfQkFDS0dST1VORCxcbiAgICAgIFwicGFkZGluZ1wiOiBDb25zdGFudHMuU2V0dGluZy5ERUZBVUxUX1BBRERJTkdcbiAgICB9KTtcbiAgfVxuXG4gIGdldCBzZWxlY3RlZCgpIHtcbiAgICByZXR1cm4gc3VwZXIuc2VsZWN0ZWQgfHwgdGhpcy5vcHRpb25Db250YWluZXIuc2VsZWN0ZWQ7XG4gIH1cblxuICBzZXQgc2VsZWN0ZWQoc2VsZWN0ZWQpIHtcbiAgICBzdXBlci5zZWxlY3RlZCA9IHNlbGVjdGVkO1xuICB9XG59IiwiLypcbiAqIENvcHlyaWdodCAoQykgMjAyMCBFbGlhc3RpayAoZWxpYXN0aWtzb2Z0cy5jb20pXG4gKlxuICogVGhpcyBmaWxlIGlzIHBhcnQgb2YgXCJKU0dhbWVUb29sc1wiLlxuICpcbiAqIFwiSlNHYW1lVG9vbHNcIiBpcyBmcmVlIHNvZnR3YXJlOiB5b3UgY2FuIHJlZGlzdHJpYnV0ZSBpdCBhbmQvb3IgbW9kaWZ5XG4gKiBpdCB1bmRlciB0aGUgdGVybXMgb2YgdGhlIEdOVSBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlIGFzIHB1Ymxpc2hlZCBieVxuICogdGhlIEZyZWUgU29mdHdhcmUgRm91bmRhdGlvbiwgZWl0aGVyIHZlcnNpb24gMyBvZiB0aGUgTGljZW5zZSwgb3JcbiAqIChhdCB5b3VyIG9wdGlvbikgYW55IGxhdGVyIHZlcnNpb24uXG4gKlxuICogXCJKU0dhbWVUb29sc1wiIGlzIGRpc3RyaWJ1dGVkIGluIHRoZSBob3BlIHRoYXQgaXQgd2lsbCBiZSB1c2VmdWwsXG4gKiBidXQgV0lUSE9VVCBBTlkgV0FSUkFOVFk7IHdpdGhvdXQgZXZlbiB0aGUgaW1wbGllZCB3YXJyYW50eSBvZlxuICogTUVSQ0hBTlRBQklMSVRZIG9yIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFLiAgU2VlIHRoZVxuICogR05VIEdlbmVyYWwgUHVibGljIExpY2Vuc2UgZm9yIG1vcmUgZGV0YWlscy5cbiAqXG4gKiBZb3Ugc2hvdWxkIGhhdmUgcmVjZWl2ZWQgYSBjb3B5IG9mIHRoZSBHTlUgR2VuZXJhbCBQdWJsaWMgTGljZW5zZVxuICogYWxvbmcgd2l0aCBcIkpTR2FtZVRvb2xzXCIuICBJZiBub3QsIHNlZSA8aHR0cDovL3d3dy5nbnUub3JnL2xpY2Vuc2VzLz4uXG4gKi9cbmltcG9ydCBCdXR0b24gZnJvbSBcIi4vQnV0dG9uXCI7XG5pbXBvcnQgQ29uc3RhbnRzIGZyb20gXCIuL0NvbnN0YW50c1wiO1xuaW1wb3J0IExhYmVsIGZyb20gXCIuL0xhYmVsXCI7XG5pbXBvcnQgU3R5bGUgZnJvbSBcIi4vU3R5bGVcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU2VsZWN0T3B0aW9uIGV4dGVuZHMgQnV0dG9uIHtcbiAgY29uc3RydWN0b3IobGFiZWwsIHN0eWxlKSB7XG4gICAgY29uc3QgZGVmYXVsdExhYmVsID0gbmV3IExhYmVsKFwiT3B0aW9uXCIpO1xuICAgIHN1cGVyKG51bGwsIG51bGwsIG51bGwsIG51bGwsIHN0eWxlLCBsYWJlbCB8fCBkZWZhdWx0TGFiZWwpO1xuICAgIHRoaXMubGFiZWwgPSBsYWJlbCB8fCBkZWZhdWx0TGFiZWw7XG4gIH1cblxuICBhZGQoY29tcG9uZW50KSB7XG4gICAgaWYoY29tcG9uZW50IGluc3RhbmNlb2YgTGFiZWwpIHtcbiAgICAgIHRoaXMuY2xlYXIoKTtcbiAgICAgIHN1cGVyLmFkZChjb21wb25lbnQpO1xuICAgIH1cbiAgfVxuXG4gIGdldCB3aWR0aCgpIHtcbiAgICByZXR1cm4gdGhpcy5wYXJlbnQgJiYgdGhpcy5wYXJlbnQud2lkdGg7XG4gIH1cblxuICBnZXQgZGVmYXVsdFN0eWxlKCkge1xuICAgIHJldHVybiBuZXcgU3R5bGUoe1xuICAgICAgXCJiYWNrZ3JvdW5kQ29sb3JcIjogQ29uc3RhbnRzLlNldHRpbmcuU0VMRUNUX0RFRkFVTFRfQkFDS0dST1VORCxcbiAgICAgIFwiYmFja2dyb3VuZENvbG9ySG92ZXJcIjogQ29uc3RhbnRzLlNldHRpbmcuU0VMRUNUX0RFRkFVTFRfSE9WRVJfQkFDS0dST1VORCxcbiAgICAgIFwiYmFja2dyb3VuZENvbG9yRG93blwiOiBDb25zdGFudHMuU2V0dGluZy5TRUxFQ1RfREVGQVVMVF9DTElDS19CQUNLR1JPVU5ELFxuICAgICAgXCJwYWRkaW5nXCI6IENvbnN0YW50cy5TZXR0aW5nLkRFRkFVTFRfUEFERElOR1xuICAgIH0pO1xuICB9XG59IiwiLypcbiAqIENvcHlyaWdodCAoQykgMjAyMCBFbGlhc3RpayAoZWxpYXN0aWtzb2Z0cy5jb20pXG4gKlxuICogVGhpcyBmaWxlIGlzIHBhcnQgb2YgXCJKU0dhbWVUb29sc1wiLlxuICpcbiAqIFwiSlNHYW1lVG9vbHNcIiBpcyBmcmVlIHNvZnR3YXJlOiB5b3UgY2FuIHJlZGlzdHJpYnV0ZSBpdCBhbmQvb3IgbW9kaWZ5XG4gKiBpdCB1bmRlciB0aGUgdGVybXMgb2YgdGhlIEdOVSBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlIGFzIHB1Ymxpc2hlZCBieVxuICogdGhlIEZyZWUgU29mdHdhcmUgRm91bmRhdGlvbiwgZWl0aGVyIHZlcnNpb24gMyBvZiB0aGUgTGljZW5zZSwgb3JcbiAqIChhdCB5b3VyIG9wdGlvbikgYW55IGxhdGVyIHZlcnNpb24uXG4gKlxuICogXCJKU0dhbWVUb29sc1wiIGlzIGRpc3RyaWJ1dGVkIGluIHRoZSBob3BlIHRoYXQgaXQgd2lsbCBiZSB1c2VmdWwsXG4gKiBidXQgV0lUSE9VVCBBTlkgV0FSUkFOVFk7IHdpdGhvdXQgZXZlbiB0aGUgaW1wbGllZCB3YXJyYW50eSBvZlxuICogTUVSQ0hBTlRBQklMSVRZIG9yIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFLiAgU2VlIHRoZVxuICogR05VIEdlbmVyYWwgUHVibGljIExpY2Vuc2UgZm9yIG1vcmUgZGV0YWlscy5cbiAqXG4gKiBZb3Ugc2hvdWxkIGhhdmUgcmVjZWl2ZWQgYSBjb3B5IG9mIHRoZSBHTlUgR2VuZXJhbCBQdWJsaWMgTGljZW5zZVxuICogYWxvbmcgd2l0aCBcIkpTR2FtZVRvb2xzXCIuICBJZiBub3QsIHNlZSA8aHR0cDovL3d3dy5nbnUub3JnL2xpY2Vuc2VzLz4uXG4gKi9cbmltcG9ydCBDb2wgZnJvbSBcIi4vQ29sXCI7XG5pbXBvcnQgU3R5bGUgZnJvbSBcIi4vU3R5bGVcIjtcbmltcG9ydCBDb25zdGFudHMgZnJvbSBcIi4vQ29uc3RhbnRzXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFNlbGVjdERyb3Bkb3duIGV4dGVuZHMgQ29sIHtcbiAgI19zZWxlY3RlZE9wdGlvbjtcbiAgc2VsZWN0YWJsZSA9IGZhbHNlO1xuXG4gIGNvbnN0cnVjdG9yKG1heEhlaWdodERyb3Bkb3duLCBzdHlsZSwgLi4ub3B0aW9ucykge1xuICAgIHN1cGVyKG51bGwsIG51bGwsIG51bGwsIG1heEhlaWdodERyb3Bkb3duLCBzdHlsZSwgLi4ub3B0aW9ucyk7XG4gICAgdGhpcy4jX3NlbGVjdGVkT3B0aW9uID0gMDtcbiAgICB0aGlzLnNlbGVjdCA9IG51bGw7XG4gIH1cblxuICBkcmF3KGNvbnRleHQpIHtcbiAgICBzdXBlci5kcmF3KGNvbnRleHQpO1xuICB9XG5cbiAgZ2V0IHgoKSB7XG4gICAgcmV0dXJuIHRoaXMuc2VsZWN0ICYmIHRoaXMuc2VsZWN0Lng7XG4gIH1cblxuICBnZXQgeSgpIHtcbiAgICBjb25zdCBzZWxlY3RIZWlnaHQgPSAodGhpcy5zZWxlY3QgJiYgdGhpcy5zZWxlY3QuaGVpZ2h0KTtcbiAgICBjb25zdCBoZWlnaHQgPSB0aGlzLmhlaWdodDtcbiAgICBjb25zdCB5ID0gdGhpcy5zZWxlY3QgJiYgdGhpcy5zZWxlY3QueTtcblxuICAgIGlmKHRoaXMuY2FudmFzICYmIHRoaXMuY2FudmFzLnNjZW5lICYmIHkgKyBzZWxlY3RIZWlnaHQgKyBoZWlnaHQgPj0gdGhpcy5jYW52YXMuc2NlbmUuaGVpZ2h0KSB7XG4gICAgICByZXR1cm4geSAtIGhlaWdodDtcbiAgICB9XG5cbiAgICByZXR1cm4geSArIHNlbGVjdEhlaWdodDtcbiAgfVxuXG4gIGdldCB3aWR0aCgpIHtcbiAgICByZXR1cm4gdGhpcy5zZWxlY3QgJiYgdGhpcy5zZWxlY3Qud2lkdGg7XG4gIH1cblxuICBnZXQgc2VsZWN0ZWRPcHRpb24oKSB7XG4gICAgcmV0dXJuIE1hdGgubWF4KDAsIE1hdGgubWluKHRoaXMuY29tcG9uZW50cy5sZW5ndGggLSAxLCB0aGlzLiNfc2VsZWN0ZWRPcHRpb24pKTtcbiAgfVxuXG4gIHNldCBzZWxlY3RlZE9wdGlvbihpZCkge1xuICAgIGlmKGlkICE9IHRoaXMuI19zZWxlY3RlZE9wdGlvbikge1xuICAgICAgdGhpcy4jX3NlbGVjdGVkT3B0aW9uID0gaWQ7XG4gICAgICB0aGlzLnJlYWN0b3IuZGlzcGF0Y2hFdmVudChcIm9uQ2hhbmdlXCIsIHRoaXMpO1xuICAgIH1cbiAgfVxuXG4gIGFkZChjb21wb25lbnQpIHtcbiAgICBzdXBlci5hZGQoY29tcG9uZW50KTtcblxuICAgIGNvbXBvbmVudC5hZGRDbGlja0FjdGlvbigoKSA9PiB7XG4gICAgICB0aGlzLiNfc2VsZWN0ZWRPcHRpb24gPSB0aGlzLmdldENvbXBvbmVudElkKGNvbXBvbmVudCk7XG4gICAgICB0aGlzLnNlbGVjdGVkID0gZmFsc2U7XG4gICAgICB0aGlzLmhpZGRlbiA9IHRydWU7XG4gICAgICBpZih0aGlzLnNlbGVjdCkgdGhpcy5zZWxlY3Quc2VsZWN0ZWQgPSBmYWxzZTtcbiAgICB9KTtcbiAgfVxuXG4gIGdldCBkZWZhdWx0U3R5bGUoKSB7XG4gICAgcmV0dXJuIG5ldyBTdHlsZSh7XG4gICAgICBcInBhZGRpbmdcIjogMCxcbiAgICAgIFwic3BhY2VCZXR3ZWVuQ29tcG9uZW50c1wiOiAwLFxuICAgICAgXCJiYWNrZ3JvdW5kQ29sb3JcIjogQ29uc3RhbnRzLlNldHRpbmcuU0VMRUNUX0RFRkFVTFRfQkFDS0dST1VORCxcbiAgICAgIFwiYmFja2dyb3VuZENvbG9ySG92ZXJcIjogbnVsbCxcbiAgICAgIFwiYmFja2dyb3VuZENvbG9yRG93blwiOiBudWxsLFxuICAgICAgXCJzY3JvbGxYRGlzYWJsZWRcIjogZmFsc2UsXG4gICAgICBcInNjcm9sbFlEaXNhYmxlZFwiOiBmYWxzZVxuICAgIH0pO1xuICB9XG5cbiAgZ2V0IGhpZGRlbigpIHtcbiAgICByZXR1cm4gc3VwZXIuaGlkZGVuIHx8ICh0aGlzLnNlbGVjdCAmJiAhdGhpcy5zZWxlY3Quc2VsZWN0ZWQpIHx8ICF0aGlzLnNlbGVjdDtcbiAgfVxuXG4gIHNldCBoaWRkZW4oaGlkZGVuKSB7XG4gICAgcmV0dXJuIHN1cGVyLmhpZGRlbiA9IGhpZGRlbjtcbiAgfVxufSIsIi8qXG4gKiBDb3B5cmlnaHQgKEMpIDIwMjAgRWxpYXN0aWsgKGVsaWFzdGlrc29mdHMuY29tKVxuICpcbiAqIFRoaXMgZmlsZSBpcyBwYXJ0IG9mIFwiSlNHYW1lVG9vbHNcIi5cbiAqXG4gKiBcIkpTR2FtZVRvb2xzXCIgaXMgZnJlZSBzb2Z0d2FyZTogeW91IGNhbiByZWRpc3RyaWJ1dGUgaXQgYW5kL29yIG1vZGlmeVxuICogaXQgdW5kZXIgdGhlIHRlcm1zIG9mIHRoZSBHTlUgR2VuZXJhbCBQdWJsaWMgTGljZW5zZSBhcyBwdWJsaXNoZWQgYnlcbiAqIHRoZSBGcmVlIFNvZnR3YXJlIEZvdW5kYXRpb24sIGVpdGhlciB2ZXJzaW9uIDMgb2YgdGhlIExpY2Vuc2UsIG9yXG4gKiAoYXQgeW91ciBvcHRpb24pIGFueSBsYXRlciB2ZXJzaW9uLlxuICpcbiAqIFwiSlNHYW1lVG9vbHNcIiBpcyBkaXN0cmlidXRlZCBpbiB0aGUgaG9wZSB0aGF0IGl0IHdpbGwgYmUgdXNlZnVsLFxuICogYnV0IFdJVEhPVVQgQU5ZIFdBUlJBTlRZOyB3aXRob3V0IGV2ZW4gdGhlIGltcGxpZWQgd2FycmFudHkgb2ZcbiAqIE1FUkNIQU5UQUJJTElUWSBvciBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRS4gIFNlZSB0aGVcbiAqIEdOVSBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlIGZvciBtb3JlIGRldGFpbHMuXG4gKlxuICogWW91IHNob3VsZCBoYXZlIHJlY2VpdmVkIGEgY29weSBvZiB0aGUgR05VIEdlbmVyYWwgUHVibGljIExpY2Vuc2VcbiAqIGFsb25nIHdpdGggXCJKU0dhbWVUb29sc1wiLiAgSWYgbm90LCBzZWUgPGh0dHA6Ly93d3cuZ251Lm9yZy9saWNlbnNlcy8+LlxuICovXG5pbXBvcnQgQ29uc3RhbnRzIGZyb20gXCIuL0NvbnN0YW50c1wiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTdHlsZSB7XG4gICNzdHlsZXMgPSB7fTtcbiAgY29tcG9uZW50O1xuXG4gIGNvbnN0cnVjdG9yKHN0eWxlcykge1xuICAgIHRoaXMuc2V0QWxsKHN0eWxlcyk7XG4gIH1cblxuICBnZXQgZm9udENvbG9yKCkge1xuICAgIHJldHVybiB0aGlzLiNzdHlsZXMuZm9udENvbG9yO1xuICB9XG5cbiAgZ2V0IGZvbnRDb2xvckhvdmVyKCkge1xuICAgIHJldHVybiB0aGlzLiNzdHlsZXMuZm9udENvbG9ySG92ZXI7XG4gIH1cblxuICBnZXQgZm9udENvbG9yRG93bigpIHtcbiAgICByZXR1cm4gdGhpcy4jc3R5bGVzLmZvbnRDb2xvckRvd247XG4gIH1cblxuICBnZXQgZm9udEZhbWlseSgpIHtcbiAgICByZXR1cm4gdGhpcy4jc3R5bGVzLmZvbnRGYW1pbHkgIT0gbnVsbCA/IHRoaXMuI3N0eWxlcy5mb250RmFtaWx5IDogQ29uc3RhbnRzLlNldHRpbmcuRk9OVF9GQU1JTFk7XG4gIH1cblxuICBnZXQgZm9udFNpemUoKSB7XG4gICAgcmV0dXJuIHRoaXMuI3N0eWxlcy5mb250U2l6ZSAhPSBudWxsID8gdGhpcy4jc3R5bGVzLmZvbnRTaXplIDogQ29uc3RhbnRzLlNldHRpbmcuRk9OVF9TSVpFO1xuICB9XG5cbiAgZ2V0IGJvbGQoKSB7XG4gICAgcmV0dXJuIHRoaXMuI3N0eWxlcy5ib2xkO1xuICB9XG5cbiAgZ2V0IHVuZGVybGluZSgpIHtcbiAgICByZXR1cm4gdGhpcy4jc3R5bGVzLnVuZGVybGluZTtcbiAgfVxuXG4gIGdldCB3cmFwKCkge1xuICAgIHJldHVybiB0aGlzLiNzdHlsZXMud3JhcDtcbiAgfVxuXG4gIGdldCBiYWNrZ3JvdW5kQ29sb3IoKSB7XG4gICAgcmV0dXJuIHRoaXMuI3N0eWxlcy5iYWNrZ3JvdW5kQ29sb3I7XG4gIH1cblxuICBnZXQgZm9yZWdyb3VuZENvbG9yKCkge1xuICAgIHJldHVybiB0aGlzLiNzdHlsZXMuZm9yZWdyb3VuZENvbG9yO1xuICB9XG5cbiAgZ2V0IGJhY2tncm91bmRDb2xvckhvdmVyKCkge1xuICAgIHJldHVybiB0aGlzLiNzdHlsZXMuYmFja2dyb3VuZENvbG9ySG92ZXI7XG4gIH1cblxuICBnZXQgYmFja2dyb3VuZENvbG9yRG93bigpIHtcbiAgICByZXR1cm4gdGhpcy4jc3R5bGVzLmJhY2tncm91bmRDb2xvckRvd247XG4gIH1cblxuICBnZXQgYm9yZGVyQ29sb3IoKSB7XG4gICAgcmV0dXJuIHRoaXMuI3N0eWxlcy5ib3JkZXJDb2xvcjtcbiAgfVxuXG4gIGdldCBib3JkZXJDb2xvckhvdmVyKCkge1xuICAgIHJldHVybiB0aGlzLiNzdHlsZXMuYm9yZGVyQ29sb3JIb3ZlcjtcbiAgfVxuXG4gIGdldCBib3JkZXJDb2xvckRvd24oKSB7XG4gICAgcmV0dXJuIHRoaXMuI3N0eWxlcy5ib3JkZXJDb2xvckRvd247XG4gIH1cblxuICBnZXQgYm9yZGVyQ29sb3JTZWxlY3RlZCgpIHtcbiAgICByZXR1cm4gdGhpcy4jc3R5bGVzLmJvcmRlckNvbG9yU2VsZWN0ZWQgIT0gbnVsbCA/IHRoaXMuI3N0eWxlcy5ib3JkZXJDb2xvclNlbGVjdGVkIDogQ29uc3RhbnRzLlNldHRpbmcuREVGQVVMVF9CT1JERVJfQ09MT1JfU0VMRUNURUQ7XG4gIH1cblxuICBnZXQgYm9yZGVyU2l6ZSgpIHtcbiAgICByZXR1cm4gdGhpcy4jc3R5bGVzLmJvcmRlclNpemUgIT0gbnVsbCA/IHRoaXMuI3N0eWxlcy5ib3JkZXJTaXplIDogQ29uc3RhbnRzLlNldHRpbmcuREVGQVVMVF9CT1JERVJfU0laRTtcbiAgfVxuXG4gIGdldCBzZWxlY3RDb2xvcigpIHtcbiAgICByZXR1cm4gdGhpcy4jc3R5bGVzLnNlbGVjdENvbG9yO1xuICB9XG5cbiAgZ2V0IGFsaWduZW1lbnQoKSB7XG4gICAgcmV0dXJuIHRoaXMuI3N0eWxlcy5hbGlnbmVtZW50O1xuICB9XG5cbiAgZ2V0IHZlcnRpY2FsQWxpZ25lbWVudCgpIHtcbiAgICByZXR1cm4gdGhpcy4jc3R5bGVzLnZlcnRpY2FsQWxpZ25lbWVudDtcbiAgfVxuXG4gIGdldCBkaXNhYmxlQW5pbWF0aW9uKCkge1xuICAgIHJldHVybiB0aGlzLiNzdHlsZXMuZGlzYWJsZUFuaW1hdGlvbjtcbiAgfVxuXG4gIGdldCBzY3JvbGxYRGlzYWJsZWQoKSB7XG4gICAgcmV0dXJuIHRoaXMuI3N0eWxlcy5zY3JvbGxYRGlzYWJsZWQ7XG4gIH1cblxuICBnZXQgc2Nyb2xsWURpc2FibGVkKCkge1xuICAgIHJldHVybiB0aGlzLiNzdHlsZXMuc2Nyb2xsWURpc2FibGVkO1xuICB9XG5cbiAgZ2V0IHBhZGRpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMuI3N0eWxlcy5wYWRkaW5nICE9IG51bGwgPyB0aGlzLiNzdHlsZXMucGFkZGluZyA6IENvbnN0YW50cy5TZXR0aW5nLkRFRkFVTFRfUEFERElORztcbiAgfVxuXG4gIGdldCBzcGFjZUJldHdlZW5Db21wb25lbnRzKCkge1xuICAgIHJldHVybiB0aGlzLiNzdHlsZXMuc3BhY2VCZXR3ZWVuQ29tcG9uZW50cyAhPSBudWxsID8gdGhpcy4jc3R5bGVzLnNwYWNlQmV0d2VlbkNvbXBvbmVudHMgOiBDb25zdGFudHMuU2V0dGluZy5ERUZBVUxUX1NQQUNJTkc7XG4gIH1cblxuICBnZXQgaGlkZGVuKCkge1xuICAgIHJldHVybiB0aGlzLiNzdHlsZXMuaGlkZGVuO1xuICB9XG5cbiAgZ2V0IGJsdXJCYWNrZ3JvdW5kKCkge1xuICAgIHJldHVybiB0aGlzLiNzdHlsZXMuYmx1ckJhY2tncm91bmQ7XG4gIH1cblxuICBnZXQgbGluZVdpZHRoKCkge1xuICAgIHJldHVybiB0aGlzLiNzdHlsZXMubGluZVdpZHRoO1xuICB9XG5cbiAgZ2V0IGFuaW1hdGlvbkR1cmF0aW9uKCkge1xuICAgIHJldHVybiB0aGlzLiNzdHlsZXMuYW5pbWF0aW9uRHVyYXRpb24gIT0gbnVsbCA/IHRoaXMuI3N0eWxlcy5hbmltYXRpb25EdXJhdGlvbiA6IENvbnN0YW50cy5TZXR0aW5nLkRFRkFVTFRfQU5JTUFUSU9OX0RVUkFUSU9OO1xuICB9XG5cbiAgZ2V0IGZvcmVncm91bmQoKSB7XG4gICAgcmV0dXJuIHRoaXMuI3N0eWxlcy5mb3JlZ3JvdW5kO1xuICB9XG5cbiAgZ2V0IHpJbmRleCgpIHtcbiAgICByZXR1cm4gdGhpcy4jc3R5bGVzLnpJbmRleCAhPSBudWxsID8gdGhpcy4jc3R5bGVzLnpJbmRleCA6IDA7XG4gIH1cbiAgXG4gIGdldCBsaW5lQ2FwKCkge1xuICAgIHJldHVybiB0aGlzLiNzdHlsZXMubGluZUNhcDtcbiAgfVxuICBcbiAgZ2V0IGZpbGwoKSB7XG4gICAgcmV0dXJuIHRoaXMuI3N0eWxlcy5maWxsO1xuICB9XG5cbiAgZ2V0IGZpbGxDb2xvcigpIHtcbiAgICByZXR1cm4gdGhpcy4jc3R5bGVzLmZpbGxDb2xvcjtcbiAgfVxuXG4gIGdldCBjb2xvcigpIHtcbiAgICByZXR1cm4gdGhpcy4jc3R5bGVzLmNvbG9yO1xuICB9XG5cbiAgZ2V0IG1vdmFibGUoKSB7XG4gICAgcmV0dXJuIHRoaXMuI3N0eWxlcy5tb3ZhYmxlIHx8IGZhbHNlO1xuICB9XG5cbiAgc2V0KHN0eWxlLCB2YWx1ZSkge1xuICAgIGlmKHRoaXMuI3N0eWxlc1tzdHlsZV0gIT0gdmFsdWUpIHtcbiAgICAgIHRoaXMuI3N0eWxlc1tzdHlsZV0gPSB2YWx1ZTtcbiAgICAgIGlmKHRoaXMuY29tcG9uZW50ICYmIHRoaXMuY29tcG9uZW50LnJlYWN0b3IpIHRoaXMuY29tcG9uZW50LnJlYWN0b3IuZGlzcGF0Y2hFdmVudChcIm9uQ2hhbmdlXCIsIHRoaXMpO1xuICAgIH1cbiAgfVxuXG4gIHNldEFsbChzdHlsZXMpIHtcbiAgICBpZihzdHlsZXMpIHtcbiAgICAgIGZvcihjb25zdCBzdHlsZSBpbiBzdHlsZXMpIHtcbiAgICAgICAgaWYoc3R5bGVzLmhhc093blByb3BlcnR5KHN0eWxlKSkge1xuICAgICAgICAgIHRoaXMuc2V0KHN0eWxlLCBzdHlsZXNbc3R5bGVdKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIGNvcHkoKSB7XG4gICAgcmV0dXJuIG5ldyBTdHlsZSh0aGlzLiNzdHlsZXMpO1xuICB9XG5cbiAgZ2V0U3R5bGVzKCkge1xuICAgIGNvbnN0IHN0eWxlcyA9IHt9O1xuXG4gICAgZm9yKGNvbnN0IHN0eWxlIGluIHRoaXMuI3N0eWxlcykge1xuICAgICAgaWYodGhpcy4jc3R5bGVzLmhhc093blByb3BlcnR5KHN0eWxlKSkge1xuICAgICAgICBzdHlsZXNbc3R5bGVdID0gdGhpcy4jc3R5bGVzW3N0eWxlXTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gc3R5bGVzO1xuICB9XG59IiwiLypcbiAqIENvcHlyaWdodCAoQykgMjAyMCBFbGlhc3RpayAoZWxpYXN0aWtzb2Z0cy5jb20pXG4gKlxuICogVGhpcyBmaWxlIGlzIHBhcnQgb2YgXCJKU0dhbWVUb29sc1wiLlxuICpcbiAqIFwiSlNHYW1lVG9vbHNcIiBpcyBmcmVlIHNvZnR3YXJlOiB5b3UgY2FuIHJlZGlzdHJpYnV0ZSBpdCBhbmQvb3IgbW9kaWZ5XG4gKiBpdCB1bmRlciB0aGUgdGVybXMgb2YgdGhlIEdOVSBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlIGFzIHB1Ymxpc2hlZCBieVxuICogdGhlIEZyZWUgU29mdHdhcmUgRm91bmRhdGlvbiwgZWl0aGVyIHZlcnNpb24gMyBvZiB0aGUgTGljZW5zZSwgb3JcbiAqIChhdCB5b3VyIG9wdGlvbikgYW55IGxhdGVyIHZlcnNpb24uXG4gKlxuICogXCJKU0dhbWVUb29sc1wiIGlzIGRpc3RyaWJ1dGVkIGluIHRoZSBob3BlIHRoYXQgaXQgd2lsbCBiZSB1c2VmdWwsXG4gKiBidXQgV0lUSE9VVCBBTlkgV0FSUkFOVFk7IHdpdGhvdXQgZXZlbiB0aGUgaW1wbGllZCB3YXJyYW50eSBvZlxuICogTUVSQ0hBTlRBQklMSVRZIG9yIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFLiAgU2VlIHRoZVxuICogR05VIEdlbmVyYWwgUHVibGljIExpY2Vuc2UgZm9yIG1vcmUgZGV0YWlscy5cbiAqXG4gKiBZb3Ugc2hvdWxkIGhhdmUgcmVjZWl2ZWQgYSBjb3B5IG9mIHRoZSBHTlUgR2VuZXJhbCBQdWJsaWMgTGljZW5zZVxuICogYWxvbmcgd2l0aCBcIkpTR2FtZVRvb2xzXCIuICBJZiBub3QsIHNlZSA8aHR0cDovL3d3dy5nbnUub3JnL2xpY2Vuc2VzLz4uXG4gKi9cbmltcG9ydCBDb2wgZnJvbSBcIi4vQ29sXCI7XG5pbXBvcnQgQ29uc3RhbnRzIGZyb20gXCIuL0NvbnN0YW50c1wiO1xuaW1wb3J0IFN0eWxlIGZyb20gXCIuL1N0eWxlXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFRvb2x0aXAgZXh0ZW5kcyBDb2wge1xuICBzZWxlY3RhYmxlID0gZmFsc2U7XG4gIFxuICBjb25zdHJ1Y3RvcihzdHlsZSwgLi4uY29tcG9uZW50cykge1xuICAgIHN1cGVyKG51bGwsIG51bGwsIG51bGwsIG51bGwsIHN0eWxlLCAuLi5jb21wb25lbnRzKTtcbiAgICB0aGlzLmRpc2FibGVkID0gdHJ1ZTtcbiAgfVxuXG4gIGRyYXcoY29udGV4dCkge1xuICAgIGlmKHRoaXMuaGlkZGVuKSByZXR1cm47XG4gICAgY29uc3QgY2FudmFzID0gY29udGV4dC5jYW52YXM7XG4gICAgY29uc3QgY3R4ID0gY2FudmFzLmdldENvbnRleHQoXCIyZFwiKTtcbiAgICBjdHguc2F2ZSgpO1xuXG4gICAgaWYodGhpcy54ICsgdGhpcy53aWR0aCArIHRoaXMuc3R5bGUucGFkZGluZyA+IHRoaXMucGFyZW50LndpZHRoKSB7XG4gICAgICB0aGlzLnggLT0gKHRoaXMud2lkdGggKyB0aGlzLnN0eWxlLnBhZGRpbmcpO1xuICAgIH1cblxuICAgIGlmKHRoaXMueSArIHRoaXMuaGVpZ2h0ICsgdGhpcy5zdHlsZS5wYWRkaW5nID4gdGhpcy5wYXJlbnQuaGVpZ2h0KSB7XG4gICAgICB0aGlzLnkgLT0gKHRoaXMuaGVpZ2h0ICsgdGhpcy5zdHlsZS5wYWRkaW5nKTtcbiAgICB9XG5cbiAgICBzdXBlci5kcmF3KGN0eCk7XG4gICAgXG4gICAgY3R4LnJlc3RvcmUoKTtcbiAgfVxuXG4gIGdldCB3aWR0aCgpIHtcbiAgICByZXR1cm4gc3VwZXIud2lkdGggKyB0aGlzLnN0eWxlLnBhZGRpbmc7XG4gIH1cblxuICBnZXQgaGVpZ2h0KCkge1xuICAgIHJldHVybiBzdXBlci5oZWlnaHQgKyB0aGlzLnN0eWxlLnBhZGRpbmc7XG4gIH1cblxuICBzZXQgd2lkdGgod2lkdGgpIHtcbiAgICBzdXBlci53aWR0aCA9IHdpZHRoO1xuICB9XG5cbiAgc2V0IGhlaWdodChoZWlnaHQpIHtcbiAgICBzdXBlci5oZWlnaHQgPSBoZWlnaHQ7XG4gIH1cblxuICBnZXQgZGVmYXVsdFN0eWxlKCkge1xuICAgIHJldHVybiBuZXcgU3R5bGUoe1xuICAgICAgXCJiYWNrZ3JvdW5kQ29sb3JcIjogQ29uc3RhbnRzLlNldHRpbmcuVE9PTFRJUF9ERUZBVUxUX0JBQ0tHUk9VTkRcbiAgICB9KTtcbiAgfVxuXG4gIGNvbXBhcmVUb0NvbXBvbmVudChvdGhlckNvbXBvbmVudCkge1xuICAgIHJldHVybiBvdGhlckNvbXBvbmVudC5jb21wYXJlVG9Ub29sdGlwKHRoaXMpO1xuICB9XG5cbiAgY29tcGFyZVRvTWVudShvdGhlckNvbXBvbmVudCkge1xuICAgIHJldHVybiAxO1xuICB9XG5cbiAgY29tcGFyZVRvVG9vbHRpcChvdGhlckNvbXBvbmVudCkge1xuICAgIHJldHVybiAwO1xuICB9XG5cbiAgY29tcGFyZVRvTm90aWZpY2F0aW9uKG90aGVyQ29tcG9uZW50KSB7XG4gICAgcmV0dXJuIDE7XG4gIH1cblxuICBnZXQgaGlkZGVuKCkge1xuICAgIHJldHVybiBzdXBlci5oaWRkZW4gfHwgdGhpcy5kaXNhYmxlZDtcbiAgfVxuXG4gIHNldCBoaWRkZW4oaGlkZGVuKSB7XG4gICAgc3VwZXIuaGlkZGVuID0gaGlkZGVuO1xuICAgIHRoaXMuZGlzYWJsZWQgPSBoaWRkZW47XG4gIH1cbn0iLCIvKlxuICogQ29weXJpZ2h0IChDKSAyMDIwIEVsaWFzdGlrIChlbGlhc3Rpa3NvZnRzLmNvbSlcbiAqXG4gKiBUaGlzIGZpbGUgaXMgcGFydCBvZiBcIkpTR2FtZVRvb2xzXCIuXG4gKlxuICogXCJKU0dhbWVUb29sc1wiIGlzIGZyZWUgc29mdHdhcmU6IHlvdSBjYW4gcmVkaXN0cmlidXRlIGl0IGFuZC9vciBtb2RpZnlcbiAqIGl0IHVuZGVyIHRoZSB0ZXJtcyBvZiB0aGUgR05VIEdlbmVyYWwgUHVibGljIExpY2Vuc2UgYXMgcHVibGlzaGVkIGJ5XG4gKiB0aGUgRnJlZSBTb2Z0d2FyZSBGb3VuZGF0aW9uLCBlaXRoZXIgdmVyc2lvbiAzIG9mIHRoZSBMaWNlbnNlLCBvclxuICogKGF0IHlvdXIgb3B0aW9uKSBhbnkgbGF0ZXIgdmVyc2lvbi5cbiAqXG4gKiBcIkpTR2FtZVRvb2xzXCIgaXMgZGlzdHJpYnV0ZWQgaW4gdGhlIGhvcGUgdGhhdCBpdCB3aWxsIGJlIHVzZWZ1bCxcbiAqIGJ1dCBXSVRIT1VUIEFOWSBXQVJSQU5UWTsgd2l0aG91dCBldmVuIHRoZSBpbXBsaWVkIHdhcnJhbnR5IG9mXG4gKiBNRVJDSEFOVEFCSUxJVFkgb3IgRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UuICBTZWUgdGhlXG4gKiBHTlUgR2VuZXJhbCBQdWJsaWMgTGljZW5zZSBmb3IgbW9yZSBkZXRhaWxzLlxuICpcbiAqIFlvdSBzaG91bGQgaGF2ZSByZWNlaXZlZCBhIGNvcHkgb2YgdGhlIEdOVSBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlXG4gKiBhbG9uZyB3aXRoIFwiSlNHYW1lVG9vbHNcIi4gIElmIG5vdCwgc2VlIDxodHRwOi8vd3d3LmdudS5vcmcvbGljZW5zZXMvPi5cbiAqL1xuaW1wb3J0IENvbXBvbmVudCBmcm9tIFwiLi9Db21wb25lbnRcIjtcbmltcG9ydCBDb25zdGFudHMgZnJvbSBcIi4vQ29uc3RhbnRzXCI7XG5pbXBvcnQgVXRpbHMgZnJvbSBcIi4vVXRpbHNcIjtcbmltcG9ydCBTdHlsZSBmcm9tIFwiLi9TdHlsZVwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBUcmlhbmdsZSBleHRlbmRzIENvbXBvbmVudCB7XG4gIHNlbGVjdGFibGUgPSBmYWxzZTtcblxuICBjb25zdHJ1Y3Rvcih4LCB5LCB3aWR0aCwgaGVpZ2h0LCBzdHlsZSkge1xuICAgIHN1cGVyKHgsIHksIHdpZHRoLCBoZWlnaHQsIHN0eWxlKTtcbiAgfVxuXG4gIGRyYXcoY29udGV4dCkge1xuICAgIGlmKHRoaXMuaGlkZGVuKSByZXR1cm47XG4gICAgc3VwZXIuZHJhdyhjb250ZXh0KTtcblxuICAgIGNvbnN0IGNhbnZhcyA9IGNvbnRleHQuY2FudmFzO1xuICAgIGNvbnN0IGN0eCA9IGNhbnZhcy5nZXRDb250ZXh0KFwiMmRcIik7XG4gICAgXG4gICAgVXRpbHMuZHJhd1RyaWFuZ2xlKGN0eCwgdGhpcy54LCB0aGlzLnksIHRoaXMud2lkdGgsIHRoaXMuaGVpZ2h0LCB0aGlzLnN0eWxlLmxpbmVXaWR0aCwgdGhpcy5zdHlsZS5jb2xvciwgdGhpcy5zdHlsZS5saW5lQ2FwLCB0aGlzLnN0eWxlLmZpbGwsIHRoaXMuc3R5bGUuZmlsbENvbG9yKTtcblxuICAgIHRoaXMuaW5pdCA9IHRydWU7XG4gIH1cblxuICBnZXQgd2lkdGgoKSB7XG4gICAgcmV0dXJuIHN1cGVyLndpZHRoICsgdGhpcy5zdHlsZS5saW5lV2lkdGg7XG4gIH1cblxuICBnZXQgaGVpZ2h0KCkge1xuICAgIHJldHVybiBzdXBlci5oZWlnaHQgKyB0aGlzLnN0eWxlLmxpbmVXaWR0aDtcbiAgfVxuXG4gIHNldCB3aWR0aCh3aWR0aCkge1xuICAgIHN1cGVyLndpZHRoID0gd2lkdGg7XG4gIH1cblxuICBzZXQgaGVpZ2h0KGhlaWdodCkge1xuICAgIHN1cGVyLmhlaWdodCA9IGhlaWdodDtcbiAgfVxuXG4gIGdldCBkZWZhdWx0U3R5bGUoKSB7XG4gICAgcmV0dXJuIG5ldyBTdHlsZSh7XG4gICAgICBcImxpbmVXaWR0aFwiOiBDb25zdGFudHMuU2V0dGluZy5UUklBTkdMRV9ERUZBVUxUX0xJTkVfU0laRSxcbiAgICAgIFwiY29sb3JcIjogQ29uc3RhbnRzLlNldHRpbmcuVFJJQU5HTEVfREVGQVVMVF9DT0xPUixcbiAgICAgIFwiZmlsbFwiOiBDb25zdGFudHMuU2V0dGluZy5UUklBTkdMRV9ERUZBVUxUX0ZJTEwsXG4gICAgICBcImxpbmVDYXBcIjogQ29uc3RhbnRzLlNldHRpbmcuVFJJQU5HTEVfREVGQVVMVF9MSU5FX0NBUCxcbiAgICAgIFwiZmlsbENvbG9yXCI6IENvbnN0YW50cy5TZXR0aW5nLlRSSUFOR0xFX0RFRkFVTFRfRklMTF9DT0xPUlxuICAgIH0pO1xuICB9XG59IiwiLypcbiAqIENvcHlyaWdodCAoQykgMjAyMCBFbGlhc3RpayAoZWxpYXN0aWtzb2Z0cy5jb20pXG4gKlxuICogVGhpcyBmaWxlIGlzIHBhcnQgb2YgXCJKU0dhbWVUb29sc1wiLlxuICpcbiAqIFwiSlNHYW1lVG9vbHNcIiBpcyBmcmVlIHNvZnR3YXJlOiB5b3UgY2FuIHJlZGlzdHJpYnV0ZSBpdCBhbmQvb3IgbW9kaWZ5XG4gKiBpdCB1bmRlciB0aGUgdGVybXMgb2YgdGhlIEdOVSBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlIGFzIHB1Ymxpc2hlZCBieVxuICogdGhlIEZyZWUgU29mdHdhcmUgRm91bmRhdGlvbiwgZWl0aGVyIHZlcnNpb24gMyBvZiB0aGUgTGljZW5zZSwgb3JcbiAqIChhdCB5b3VyIG9wdGlvbikgYW55IGxhdGVyIHZlcnNpb24uXG4gKlxuICogXCJKU0dhbWVUb29sc1wiIGlzIGRpc3RyaWJ1dGVkIGluIHRoZSBob3BlIHRoYXQgaXQgd2lsbCBiZSB1c2VmdWwsXG4gKiBidXQgV0lUSE9VVCBBTlkgV0FSUkFOVFk7IHdpdGhvdXQgZXZlbiB0aGUgaW1wbGllZCB3YXJyYW50eSBvZlxuICogTUVSQ0hBTlRBQklMSVRZIG9yIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFLiAgU2VlIHRoZVxuICogR05VIEdlbmVyYWwgUHVibGljIExpY2Vuc2UgZm9yIG1vcmUgZGV0YWlscy5cbiAqXG4gKiBZb3Ugc2hvdWxkIGhhdmUgcmVjZWl2ZWQgYSBjb3B5IG9mIHRoZSBHTlUgR2VuZXJhbCBQdWJsaWMgTGljZW5zZVxuICogYWxvbmcgd2l0aCBcIkpTR2FtZVRvb2xzXCIuICBJZiBub3QsIHNlZSA8aHR0cDovL3d3dy5nbnUub3JnL2xpY2Vuc2VzLz4uXG4gKi9cbmltcG9ydCBDb25zdGFudHMgZnJvbSBcIi4vQ29uc3RhbnRzXCI7XG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgcHJlUmVuZGVyZWRGb250OiB7fSxcbiAgbGFzdEtleTogLTEsXG4gIHByZVJlbmRlckZvbnQ6IGZ1bmN0aW9uKGNhcnMsIHNpemUsIGNvbG9yLCBmb250RmFtaWx5KSB7XG4gICAgY2Fycy5wdXNoKFwiP1wiKTsgY2Fycy5wdXNoKFwiIFwiKTsgY2Fycy5wdXNoKFwiQVwiKTtcbiAgICBcbiAgICBmb3IobGV0IGkgPSAwOyBpIDwgY2Fycy5sZW5ndGg7IGkrKykge1xuICAgICAgY29uc3QgY2FudmFzVG1wID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImNhbnZhc1wiKTtcbiAgICAgIGNvbnN0IGN0eFRtcCA9IGNhbnZhc1RtcC5nZXRDb250ZXh0KFwiMmRcIik7XG4gICAgICBjdHhUbXAuZm9udCA9IHNpemUgKyBcInB4IFwiICsgZm9udEZhbWlseTtcbiAgICAgIGNvbnN0IHdpZHRoID0gY3R4VG1wLm1lYXN1cmVUZXh0KGNhcnNbaV0pLndpZHRoO1xuICAgICAgXG4gICAgICBjYW52YXNUbXAud2lkdGggPSB3aWR0aDtcbiAgICAgIGNhbnZhc1RtcC5oZWlnaHQgPSBzaXplICsgKHNpemUgLyA2KTtcbiAgICAgIFxuICAgICAgY3R4VG1wLmZvbnQgPSBzaXplICsgXCJweCBcIiArIGZvbnRGYW1pbHk7XG4gICAgICBjdHhUbXAuZmlsbFN0eWxlID0gY29sb3I7XG4gICAgICBjdHhUbXAudGV4dEJhc2VsaW5lID0gXCJ0b3BcIjtcbiAgICAgIGN0eFRtcC5maWxsVGV4dChjYXJzW2ldLCAwLCAwKTtcbiAgICAgIFxuICAgICAgdGhpcy5wcmVSZW5kZXJlZEZvbnRbY2Fyc1tpXV0gPSBjYW52YXNUbXA7XG4gICAgfVxuICB9LFxuICBkcmF3SW1hZ2U6IGZ1bmN0aW9uKGN0eCwgaW1hZ2UsIHgsIHksIHdpZHRoLCBoZWlnaHQsIHN4LCBzeSwgc1dpZHRoLCBzSGVpZ2h0LCBlcmFzZUJlbG93LCBkZWdyZWVzKSB7XG4gICAgdGhpcy5kcmF3SW1hZ2VXcmFwcGVyKGN0eCwgaW1hZ2UsIHgsIHksIHdpZHRoLCBoZWlnaHQsIHN4LCBzeSwgc1dpZHRoLCBzSGVpZ2h0LCBlcmFzZUJlbG93LCBkZWdyZWVzKTtcbiAgfSxcbiAgZHJhd0ltYWdlRGF0YTogZnVuY3Rpb24oY3R4LCBpbWFnZURhdGEsIHgsIHksIHdpZHRoLCBoZWlnaHQsIHN4LCBzeSwgc1dpZHRoLCBzSGVpZ2h0LCBlcmFzZUJlbG93LCBkZWdyZWVzKSB7XG4gICAgdGhpcy5kcmF3SW1hZ2VXcmFwcGVyKGN0eCwgaW1hZ2VEYXRhLCB4LCB5LCB3aWR0aCwgaGVpZ2h0LCBzeCwgc3ksIHNXaWR0aCwgc0hlaWdodCwgZXJhc2VCZWxvdywgZGVncmVlcyk7XG4gIH0sXG4gIGRyYXdJbWFnZVdyYXBwZXI6IGZ1bmN0aW9uKGN0eCwgaW1hZ2UsIHgsIHksIHdpZHRoLCBoZWlnaHQsIHN4LCBzeSwgc1dpZHRoLCBzSGVpZ2h0LCBlcmFzZUJlbG93LCBkZWdyZWVzKSB7XG4gICAgeCA9ICh4ID09IHVuZGVmaW5lZCB8fCBpc05hTih4KSkgPyBudWxsIDogTWF0aC5yb3VuZCh4KTtcbiAgICB5ID0gKHkgPT0gdW5kZWZpbmVkIHx8IGlzTmFOKHkpKSA/IG51bGwgOiBNYXRoLnJvdW5kKHkpO1xuICAgIHdpZHRoID0gKHdpZHRoID09IHVuZGVmaW5lZCB8fCBpc05hTih3aWR0aCkpID8gbnVsbCA6IE1hdGgucm91bmQod2lkdGgpO1xuICAgIGhlaWdodCA9IChoZWlnaHQgPT0gdW5kZWZpbmVkIHx8IGlzTmFOKGhlaWdodCkpID8gbnVsbCA6IE1hdGgucm91bmQoaGVpZ2h0KTtcbiAgICBzeCA9IChzeCA9PSB1bmRlZmluZWQgfHwgaXNOYU4oc3gpKSA/IG51bGwgOiBNYXRoLnJvdW5kKHN4KTtcbiAgICBzeSA9IChzeSA9PSB1bmRlZmluZWQgfHwgaXNOYU4oc3kpKSA/IG51bGwgOiBNYXRoLnJvdW5kKHN5KTtcbiAgICBzV2lkdGggPSAoc1dpZHRoID09IHVuZGVmaW5lZCB8fCBpc05hTihzV2lkdGgpKSA/IG51bGwgOiBNYXRoLnJvdW5kKHNXaWR0aCk7XG4gICAgc0hlaWdodCA9IChzSGVpZ2h0ID09IHVuZGVmaW5lZCB8fCBpc05hTihzSGVpZ2h0KSkgPyBudWxsIDogTWF0aC5yb3VuZChzSGVpZ2h0KTtcbiAgICBlcmFzZUJlbG93ID0gZXJhc2VCZWxvdyA9PSB1bmRlZmluZWQgPyBmYWxzZSA6IGVyYXNlQmVsb3c7XG4gICAgZGVncmVlcyA9IChkZWdyZWVzID09IHVuZGVmaW5lZCB8fCBpc05hTihkZWdyZWVzKSkgPyBudWxsIDogZGVncmVlcztcbiAgXG4gICAgaWYoZGVncmVlcyAhPSB1bmRlZmluZWQpIHtcbiAgICAgIGN0eC5zYXZlKCk7XG4gICAgICBjdHgudHJhbnNsYXRlKHggKyB3aWR0aCAvIDIsIHkgKyBoZWlnaHQgLyAyKTtcbiAgICAgIGN0eC5yb3RhdGUoZGVncmVlcyAqIE1hdGguUEkgLyAxODApO1xuICAgICAgeCA9IC0od2lkdGggLyAyKTtcbiAgICAgIHkgPSAtKGhlaWdodCAvIDIpO1xuICAgIH1cbiAgXG4gICAgaWYoZXJhc2VCZWxvdykge1xuICAgICAgY3R4LmNsZWFyUmVjdCh4LCB5LCB3aWR0aCwgaGVpZ2h0KTtcbiAgICB9XG4gIFxuICAgIGlmKGN0eCAhPSB1bmRlZmluZWQgJiYgaW1hZ2UgIT0gdW5kZWZpbmVkKSB7XG4gICAgICBpZihpbWFnZS53aWR0aCA+IDAgJiYgaW1hZ2UuaGVpZ2h0ID4gMCkge1xuICAgICAgICBpZihzeCAhPSB1bmRlZmluZWQgJiYgc3kgIT0gdW5kZWZpbmVkICYmIHNXaWR0aCAhPSB1bmRlZmluZWQgJiYgc0hlaWdodCAhPSB1bmRlZmluZWQpIHtcbiAgICAgICAgICBjdHguZHJhd0ltYWdlKGltYWdlLCBzeCwgc3ksIHNXaWR0aCwgc0hlaWdodCwgeCwgeSwgd2lkdGgsIGhlaWdodCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgY3R4LmRyYXdJbWFnZShpbWFnZSwgeCwgeSwgd2lkdGgsIGhlaWdodCk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIFxuICAgIGlmKGRlZ3JlZXMgIT0gdW5kZWZpbmVkKSB7XG4gICAgICBjdHgucmVzdG9yZSgpO1xuICAgIH1cbiAgfSxcbiAgZHJhd1RleHQ6IGZ1bmN0aW9uKGN0eCwgdGV4dCwgY29sb3IsIHNpemUsIGZvbnRGYW1pbHksIGFsaWduZW1lbnQsIHZlcnRpY2FsQWxpZ25lbWVudCwgeCwgeSwgd3JhcCwgYm9sZCwgdW5kZXJsaW5lLCB0ZXh0QmFzZWxpbmUsIHBhcmVudCkge1xuICAgIGlmKGN0eCkge1xuICAgICAgY3R4LnNhdmUoKTtcblxuICAgICAgaWYoIUFycmF5LmlzQXJyYXkoY29sb3IpKSB7XG4gICAgICAgIGN0eC5maWxsU3R5bGUgPSBjb2xvcjtcbiAgICAgICAgY3R4LnN0cm9rZVN0eWxlID0gY29sb3I7XG4gICAgICB9XG4gIFxuICAgICAgY3R4LmZvbnQgPSAoYm9sZCA/IFwiYm9sZCBcIiA6IFwiXCIpICsgc2l6ZSArIFwicHggXCIgKyBmb250RmFtaWx5O1xuICAgICAgY3R4LnRleHRCYXNlbGluZSA9IHRleHRCYXNlbGluZSB8fCBcImJvdHRvbVwiO1xuICAgICAgY3R4LmZpbHRlciA9IFwibm9uZVwiO1xuICBcbiAgICAgIGlmKHdyYXApIHtcbiAgICAgICAgdGV4dCA9IHRoaXMud3JhcFRleHRMaW5lcyhjdHgsIHRleHQpW1widGV4dFwiXTtcbiAgICAgIH1cbiAgICAgIFxuICAgICAgY29uc3QgbGluZXMgPSB0ZXh0LnNwbGl0KFwiXFxuXCIpO1xuICAgICAgbGV0IG1heFdpZHRoID0gMDtcbiAgICAgIGxldCB4Q3VycmVudCA9IE1hdGgucm91bmQoeCk7XG4gICAgICBsZXQgeUN1cnJlbnQgPSBNYXRoLnJvdW5kKHkpICsgc2l6ZTtcbiAgICAgIGxldCB5Rmlyc3QgPSAwO1xuXG4gICAgICBpZigheSkge1xuICAgICAgICBpZih2ZXJ0aWNhbEFsaWduZW1lbnQgPT0gQ29uc3RhbnRzLlZlcnRpY2FsQWxpZ25lbWVudC5DRU5URVIpIHtcbiAgICAgICAgICB5Q3VycmVudCArPSBNYXRoLnJvdW5kKCgocGFyZW50ICYmIHBhcmVudC5oZWlnaHQgPyBwYXJlbnQuaGVpZ2h0IDogdGhpcy5nZXRDYW52YXNIZWlnaHQoY3R4LmNhbnZhcykpIC8gMikgLSAoc2l6ZSAqIGxpbmVzLmxlbmd0aCAvIDIpKTtcbiAgICAgICAgfSBlbHNlIGlmKHZlcnRpY2FsQWxpZ25lbWVudCA9PSBDb25zdGFudHMuVmVydGljYWxBbGlnbmVtZW50LkJPVFRPTSkge1xuICAgICAgICAgIHlDdXJyZW50ICs9IE1hdGgucm91bmQoKChwYXJlbnQgJiYgcGFyZW50LmhlaWdodCA/IHBhcmVudC5oZWlnaHQgOiB0aGlzLmdldENhbnZhc0hlaWdodChjdHguY2FudmFzKSkpIC0gKHNpemUgKiBsaW5lcy5sZW5ndGgpIC8gMiAtIHNpemUgLyA1KTtcbiAgICAgICAgfVxuICAgICAgfVxuICBcbiAgICAgIGZvcihsZXQgaSA9IDA7IGkgPCBsaW5lcy5sZW5ndGg7IGkrKykge1xuICAgICAgICBjb25zdCBjdXJyZW50VGV4dCA9IGxpbmVzW2ldO1xuICAgICAgICBjb25zdCBjdXJyZW50V2lkdGggPSBjdHgubWVhc3VyZVRleHQoY3VycmVudFRleHQpLndpZHRoO1xuICBcbiAgICAgICAgaWYoQXJyYXkuaXNBcnJheShjb2xvcikpIHtcbiAgICAgICAgICBsZXQgY29sb3JJbmRleCA9IGk7XG4gIFxuICAgICAgICAgIGlmKGNvbG9ySW5kZXggPiBjb2xvci5sZW5ndGggLSAxKSB7XG4gICAgICAgICAgICBjb2xvckluZGV4ID0gY29sb3IubGVuZ3RoIC0gMTtcbiAgICAgICAgICB9XG4gIFxuICAgICAgICAgIGN0eC5maWxsU3R5bGUgPSBjb2xvcltjb2xvckluZGV4XTtcbiAgICAgICAgICBjdHguc3Ryb2tlU3R5bGUgPSBjb2xvcltjb2xvckluZGV4XTtcbiAgICAgICAgfVxuICBcbiAgICAgICAgaWYoYWxpZ25lbWVudCA9PSBDb25zdGFudHMuQWxpZ25lbWVudC5DRU5URVIpIHtcbiAgICAgICAgICB4Q3VycmVudCA9IE1hdGgucm91bmQoKHBhcmVudCAmJiBwYXJlbnQueCA/IHBhcmVudC54IDogMCkpICsgTWF0aC5yb3VuZCgoKHBhcmVudCAmJiBwYXJlbnQud2lkdGggPyBwYXJlbnQud2lkdGggOiB0aGlzLmdldENhbnZhc1dpZHRoKGN0eC5jYW52YXMpKSAvIDIpIC0gKGN0eC5tZWFzdXJlVGV4dChjdXJyZW50VGV4dCkud2lkdGggLyAyKSk7XG4gICAgICAgIH0gZWxzZSBpZihhbGlnbmVtZW50ID09IENvbnN0YW50cy5BbGlnbmVtZW50LlJJR0hUKSB7XG4gICAgICAgICAgeEN1cnJlbnQgPSBNYXRoLnJvdW5kKChwYXJlbnQgJiYgcGFyZW50LnggPyBwYXJlbnQueCA6IDApKSArIE1hdGgucm91bmQoKHBhcmVudCAmJiBwYXJlbnQud2lkdGggPyBwYXJlbnQud2lkdGggOiB0aGlzLmdldENhbnZhc1dpZHRoKGN0eC5jYW52YXMpKSAtIChjdHgubWVhc3VyZVRleHQoY3VycmVudFRleHQpLndpZHRoKSAtIChwYXJlbnQgJiYgcGFyZW50LnNwYWNlQmV0d2VlbkNvbXBvbmVudHMgPyBwYXJlbnQuc3BhY2VCZXR3ZWVuQ29tcG9uZW50cyA6IENvbnN0YW50cy5TZXR0aW5nLkRFRkFVTFRfU1BBQ0lORykpO1xuICAgICAgICB9XG5cbiAgICAgICAgY3R4LmZpbGxUZXh0KGN1cnJlbnRUZXh0LCB4Q3VycmVudCwgeUN1cnJlbnQpO1xuICBcbiAgICAgICAgaWYodW5kZXJsaW5lKSB7XG4gICAgICAgICAgY3R4LmxpbmVXaWR0aCA9IDE7XG4gICAgICAgICAgY3R4LmJlZ2luUGF0aCgpO1xuICAgICAgICAgIGN0eC5tb3ZlVG8oeEN1cnJlbnQsIHlDdXJyZW50IC0gMik7XG4gICAgICAgICAgY3R4LmxpbmVUbyhNYXRoLnJvdW5kKHhDdXJyZW50ICsgY3VycmVudFdpZHRoKSwgeUN1cnJlbnQgLSAyKTtcbiAgICAgICAgICBjdHguc3Ryb2tlKCk7XG4gICAgICAgIH1cbiAgXG4gICAgICAgIGlmKGN1cnJlbnRXaWR0aCA+IG1heFdpZHRoKSBtYXhXaWR0aCA9IGN1cnJlbnRXaWR0aDtcbiAgICAgICAgaWYoaSA9PSAwKSB5Rmlyc3QgPSB5Q3VycmVudDtcblxuICAgICAgICB5Q3VycmVudCArPSBzaXplO1xuICAgICAgfVxuICBcbiAgICAgIGN0eC5yZXN0b3JlKCk7XG4gIFxuICAgICAgcmV0dXJuIHtcbiAgICAgICAgeDogeEN1cnJlbnQsXG4gICAgICAgIHk6IHlGaXJzdCxcbiAgICAgICAgaGVpZ2h0OiBzaXplICogbGluZXMubGVuZ3RoLFxuICAgICAgICB3aWR0aDogbWF4V2lkdGhcbiAgICAgIH07XG4gICAgfVxuICB9LFxuICB3cmFwVGV4dDogZnVuY3Rpb24odGV4dCwgbGltaXQpIHtcbiAgICBpZih0ZXh0Lmxlbmd0aCA+IGxpbWl0KSB7XG4gICAgICBsZXQgcCA9IGxpbWl0O1xuXG4gICAgICBmb3IoOyBwID4gMCAmJiB0ZXh0W3BdICE9IFwiIFwiOyBwLS0pO1xuXG4gICAgICBpZihwID4gMCkge1xuICAgICAgICBjb25zdCBsZWZ0ID0gdGV4dC5zdWJzdHJpbmcoMCwgcCk7XG4gICAgICAgIGNvbnN0IHJpZ2h0ID0gdGV4dC5zdWJzdHJpbmcocCArIDEpO1xuICAgICAgICByZXR1cm4gbGVmdCArIFwiXFxuXCIgKyB0aGlzLndyYXBUZXh0KHJpZ2h0LCBsaW1pdCk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHRleHQ7XG4gIH0sXG4gIHdyYXBUZXh0TGluZXM6IGZ1bmN0aW9uKGN0eCwgdGV4dCwgd2lkdGgsIGZvbnRTaXplLCBmb250RmFtaWx5LCBkaXNhYmxlV3JhcCkge1xuICAgIGlmKGN0eCAmJiB0ZXh0KSB7XG4gICAgICBjdHguc2F2ZSgpO1xuICAgICAgY3R4LmZvbnQgPSBNYXRoLnJvdW5kKGZvbnRTaXplKSArIFwicHggXCIgKyBmb250RmFtaWx5O1xuICAgICAgY3R4LmltYWdlU21vb3RoaW5nRW5hYmxlZCA9IGZhbHNlO1xuICBcbiAgICAgIGNvbnN0IGxpbmVzID0gdGV4dC5zcGxpdChcIlxcblwiKTtcbiAgICAgIGxldCBuZXdUZXh0ID0gXCJcIjtcbiAgICAgIGNvbnN0IHdpZHRoQ2FyID0gd2lkdGggfHwgY3R4Lm1lYXN1cmVUZXh0KFwiQVwiKS53aWR0aDtcbiAgICAgIGNvbnN0IG5iQ2FyTGluZSA9IE1hdGgucm91bmQodGhpcy5nZXRDYW52YXNXaWR0aChjdHguY2FudmFzKSAvIHdpZHRoQ2FyKTtcbiAgXG4gICAgICBsZXQgaGVpZ2h0VG90YWwgPSAwO1xuICAgICAgbGV0IG1heFdpZHRoID0gMDtcbiAgXG4gICAgICBmb3IobGV0IGkgPSAwOyBpIDwgbGluZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgY29uc3QgbGluZVdyYXAgPSBkaXNhYmxlV3JhcCA/IGxpbmVzW2ldIDogdGhpcy53cmFwVGV4dChsaW5lc1tpXSwgbmJDYXJMaW5lKTtcbiAgICAgICAgbmV3VGV4dCArPSBsaW5lV3JhcDtcbiAgXG4gICAgICAgIGlmKGkgPCBsaW5lcy5sZW5ndGggLSAxKSB7XG4gICAgICAgICAgbmV3VGV4dCArPSBcIlxcblwiO1xuICAgICAgICB9XG4gIFxuICAgICAgICBmb3IobGV0IGogPSAwOyBqIDwgbGluZVdyYXAuc3BsaXQoXCJcXG5cIikubGVuZ3RoOyBqKyspIHtcbiAgICAgICAgICBjb25zdCB3aWR0aFRleHQgPSBjdHgubWVhc3VyZVRleHQobGluZVdyYXAuc3BsaXQoXCJcXG5cIilbal0pLndpZHRoO1xuICAgICAgICAgIGhlaWdodFRvdGFsICs9IGZvbnRTaXplO1xuICAgICAgICAgIGlmKHdpZHRoVGV4dCA+IG1heFdpZHRoKSBtYXhXaWR0aCA9IHdpZHRoVGV4dDtcbiAgICAgICAgfVxuICAgICAgfVxuICBcbiAgICAgIGN0eC5yZXN0b3JlKCk7XG5cbiAgICAgIHJldHVybiB7XG4gICAgICAgIHRleHQ6IG5ld1RleHQsXG4gICAgICAgIGhlaWdodDogaGVpZ2h0VG90YWwsXG4gICAgICAgIHdpZHRoOiBtYXhXaWR0aCxcbiAgICAgICAgY2FyV2lkdGg6IHdpZHRoQ2FyXG4gICAgICB9O1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICB0ZXh0OiBcIlwiLFxuICAgICAgICBoZWlnaHQ6IDAsXG4gICAgICAgIHdpZHRoOiAwLFxuICAgICAgICBjYXJXaWR0aDogMFxuICAgICAgfTtcbiAgICB9XG4gIH0sXG4gIGRyYXdBcnJvdzogZnVuY3Rpb24oY3R4LCBmcm9teCwgZnJvbXksIHRveCwgdG95LCBsaW5lV2lkdGgsIGhlYWRTaXplLCBjb2xvciwgbGluZUNhcCkge1xuICAgIGN0eC5zYXZlKCk7XG5cbiAgICBjdHgubGluZUNhcCA9IGxpbmVDYXAgfHwgQ29uc3RhbnRzLlNldHRpbmcuQVJST1dfREVGQVVMVF9MSU5FX0NBUDtcbiAgICBjdHgubGluZVdpZHRoID0gbGluZVdpZHRoIHx8IENvbnN0YW50cy5TZXR0aW5nLkFSUk9XX0RFRkFVTFRfTElORV9TSVpFO1xuICAgIGN0eC5zdHJva2VTdHlsZSA9IGNvbG9yIHx8IENvbnN0YW50cy5TZXR0aW5nLkFSUk9XX0RFRkFVTFRfQ09MT1I7XG4gICAgY3R4LmZpbHRlciA9IFwiXCI7XG4gIFxuICAgIGN0eC5iZWdpblBhdGgoKTtcbiAgICBjb25zdCBoZWFkbGVuID0gaGVhZFNpemUgfHwgQ29uc3RhbnRzLlNldHRpbmcuQVJST1dfREVGQVVMVF9IRUFEX1NJWkU7XG4gICAgY29uc3QgZHggPSB0b3ggLSBmcm9teDtcbiAgICBjb25zdCBkeSA9IHRveSAtIGZyb215O1xuICAgIGNvbnN0IGFuZ2xlID0gTWF0aC5hdGFuMihkeSwgZHgpO1xuICAgIGN0eC5tb3ZlVG8oZnJvbXgsIGZyb215KTtcbiAgICBjdHgubGluZVRvKHRveCwgdG95KTtcbiAgICBjdHgubW92ZVRvKHRveCwgdG95KTtcbiAgICBjdHgubGluZVRvKHRveCAtIGhlYWRsZW4gKiBNYXRoLmNvcyhhbmdsZSAtIE1hdGguUEkgLyA2KSwgdG95IC0gaGVhZGxlbiAqIE1hdGguc2luKGFuZ2xlIC0gTWF0aC5QSSAvIDYpKTtcbiAgICBjdHgubW92ZVRvKHRveCwgdG95KTtcbiAgICBjdHgubGluZVRvKHRveCAtIGhlYWRsZW4gKiBNYXRoLmNvcyhhbmdsZSArIE1hdGguUEkgLyA2KSwgdG95IC0gaGVhZGxlbiAqIE1hdGguc2luKGFuZ2xlICsgTWF0aC5QSSAvIDYpKTtcbiAgICBjdHguc3Ryb2tlKCk7XG4gICAgXG4gICAgY3R4LnJlc3RvcmUoKTtcbiAgfSxcbiAgZHJhd0Nyb3NzOiBmdW5jdGlvbihjdHgsIHgsIHksIHdpZHRoLCBoZWlnaHQsIGxpbmVXaWR0aCwgY29sb3IsIGxpbmVDYXApIHtcbiAgICBjdHguc2F2ZSgpO1xuXG4gICAgY3R4LmxpbmVDYXAgPSBsaW5lQ2FwIHx8IENvbnN0YW50cy5TZXR0aW5nLkNST1NTX0RFRkFVTFRfTElORV9DQVA7XG4gICAgY3R4LmxpbmVXaWR0aCA9IGxpbmVXaWR0aCB8fCBDb25zdGFudHMuU2V0dGluZy5DUk9TU19ERUZBVUxUX0xJTkVfU0laRTtcbiAgICBjdHguc3Ryb2tlU3R5bGUgPSBjb2xvciB8fCBDb25zdGFudHMuU2V0dGluZy5DUk9TU19ERUZBVUxUX0NPTE9SO1xuICAgIGN0eC5maWx0ZXIgPSBcIlwiO1xuICBcbiAgICBjdHguYmVnaW5QYXRoKCk7XG4gICAgY3R4Lm1vdmVUbyh4LCB5KTtcbiAgICBjdHgubGluZVRvKHggKyB3aWR0aCwgeSArIGhlaWdodCk7XG4gICAgY3R4Lm1vdmVUbyh4ICsgd2lkdGgsIHkpO1xuICAgIGN0eC5saW5lVG8oeCwgeSArIGhlaWdodCk7XG4gICAgY3R4LnN0cm9rZSgpO1xuICAgIFxuICAgIGN0eC5yZXN0b3JlKCk7XG4gIH0sXG4gIGRyYXdUcmlhbmdsZTogZnVuY3Rpb24oY3R4LCB4LCB5LCB3aWR0aCwgaGVpZ2h0LCBsaW5lV2lkdGgsIGNvbG9yLCBsaW5lQ2FwLCBmaWxsID0gQ29uc3RhbnRzLlNldHRpbmcuVFJJQU5HTEVfREVGQVVMVF9GSUxMLCBmaWxsQ29sb3IpIHtcbiAgICBjdHguc2F2ZSgpO1xuXG4gICAgY3R4LmxpbmVDYXAgPSBsaW5lQ2FwIHx8IENvbnN0YW50cy5TZXR0aW5nLlRSSUFOR0xFX0RFRkFVTFRfTElORV9DQVA7XG4gICAgY3R4LmxpbmVXaWR0aCA9IGxpbmVXaWR0aCB8fCBDb25zdGFudHMuU2V0dGluZy5UUklBTkdMRV9ERUZBVUxUX0xJTkVfU0laRTtcbiAgICBjdHguZmlsdGVyID0gXCJcIjtcblxuICAgIGlmKGZpbGwpIHtcbiAgICAgIGN0eC5maWxsU3R5bGUgPSBmaWxsQ29sb3IgfHwgQ29uc3RhbnRzLlNldHRpbmcuVFJJQU5HTEVfREVGQVVMVF9GSUxMX0NPTE9SO1xuICAgICAgY3R4LnN0cm9rZVN0eWxlID0gY29sb3IgfHwgQ29uc3RhbnRzLlNldHRpbmcuVFJJQU5HTEVfREVGQVVMVF9DT0xPUjtcbiAgICB9IGVsc2Uge1xuICAgICAgY3R4LnN0cm9rZVN0eWxlID0gY29sb3IgfHwgQ29uc3RhbnRzLlNldHRpbmcuVFJJQU5HTEVfREVGQVVMVF9DT0xPUjtcbiAgICB9XG4gIFxuICAgIGN0eC5iZWdpblBhdGgoKTtcbiAgICBjdHgubW92ZVRvKHgsIHkpO1xuICAgIGN0eC5saW5lVG8oeCArIHdpZHRoLCB5KTtcbiAgICBjdHgubGluZVRvKHggKyB3aWR0aCAvIDIsIHkgKyBoZWlnaHQpO1xuICAgIGN0eC5saW5lVG8oeCwgeSk7XG5cbiAgICBpZihmaWxsKSB7XG4gICAgICBjdHguZmlsbCgpO1xuICAgICAgY3R4LnN0cm9rZSgpO1xuICAgIH0gZWxzZSB7XG4gICAgICBjdHguc3Ryb2tlKCk7XG4gICAgfVxuICAgIFxuICAgIGN0eC5yZXN0b3JlKCk7XG4gIH0sXG4gIGRyYXdDaXJjbGU6IGZ1bmN0aW9uKGN0eCwgeCwgeSwgcmFkaXVzLCBsaW5lV2lkdGgsIGNvbG9yLCBsaW5lQ2FwLCBmaWxsID0gQ29uc3RhbnRzLlNldHRpbmcuQ0lSQ0xFX0RFRkFVTFRfRklMTCwgZmlsbENvbG9yKSB7XG4gICAgY3R4LnNhdmUoKTtcblxuICAgIGN0eC5saW5lQ2FwID0gbGluZUNhcCB8fCBDb25zdGFudHMuU2V0dGluZy5DSVJDTEVfREVGQVVMVF9MSU5FX0NBUDtcbiAgICBjdHgubGluZVdpZHRoID0gbGluZVdpZHRoIHx8IENvbnN0YW50cy5TZXR0aW5nLkNJUkNMRV9ERUZBVUxUX0xJTkVfU0laRTtcbiAgICBjdHguZmlsdGVyID0gXCJcIjtcblxuICAgIGlmKGZpbGwpIHtcbiAgICAgIGN0eC5maWxsU3R5bGUgPSBmaWxsQ29sb3IgfHwgQ29uc3RhbnRzLlNldHRpbmcuQ0lSQ0xFX0RFRkFVTFRfRklMTF9DT0xPUjtcbiAgICAgIGN0eC5zdHJva2VTdHlsZSA9IGNvbG9yIHx8IENvbnN0YW50cy5TZXR0aW5nLkNJUkNMRV9ERUZBVUxUX0NPTE9SO1xuICAgIH0gZWxzZSB7XG4gICAgICBjdHguc3Ryb2tlU3R5bGUgPSBjb2xvciB8fCBDb25zdGFudHMuU2V0dGluZy5DSVJDTEVfREVGQVVMVF9DT0xPUjtcbiAgICB9XG4gICAgXG4gICAgY3R4LmJlZ2luUGF0aCgpO1xuICAgIGN0eC5hcmMoeCArIHJhZGl1cyAvIDIsIHkgKyByYWRpdXMgLyAyLCByYWRpdXMgLyAyLCAwLCAyICogTWF0aC5QSSwgZmFsc2UpO1xuXG4gICAgaWYoZmlsbCkge1xuICAgICAgY3R4LmZpbGwoKTtcbiAgICAgIGN0eC5zdHJva2UoKTtcbiAgICB9IGVsc2Uge1xuICAgICAgY3R4LnN0cm9rZSgpO1xuICAgIH1cbiAgICBcbiAgICBjdHgucmVzdG9yZSgpO1xuICB9LFxuICBjbGVhcjogZnVuY3Rpb24oY3R4KSB7XG4gICAgY3R4LmNsZWFyUmVjdCgwLCAwLCB0aGlzLmdldENhbnZhc1dpZHRoKGN0eC5jYW52YXMpLCB0aGlzLmdldENhbnZhc0hlaWdodChjdHguY2FudmFzKSk7XG4gIH0sXG4gIGlzRmlsdGVySHVlQXZhaWxhYmxlOiBmdW5jdGlvbigpIHtcbiAgICBjb25zdCBjYW52YXMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiY2FudmFzXCIpO1xuICAgIGNhbnZhcy53aWR0aCA9IDU7XG4gICAgY2FudmFzLmhlaWdodCA9IDU7XG4gICAgY29uc3QgY3R4ID0gY2FudmFzLmdldENvbnRleHQoXCIyZFwiKTtcbiAgICBjdHguc2F2ZSgpO1xuICBcbiAgICBjdHguZmlsbFN0eWxlID0gXCIjRkYwMDAwXCI7XG4gICAgY3R4LmZpbHRlciA9IFwiaHVlLXJvdGF0ZSg5MGRlZylcIjtcbiAgICBjdHguZmlsbFJlY3QoMCwgMCwgNSwgNSk7XG4gICAgY29uc3QgY29sb3IgPSBjdHguZ2V0SW1hZ2VEYXRhKDAsIDAsIDEsIDEpLmRhdGE7XG4gICAgY3R4LnJlc3RvcmUoKTtcbiAgXG4gICAgaWYoY29sb3JbMF0gPT0gMjU1ICYmIGNvbG9yWzFdID09IDAgJiYgY29sb3JbMl0gPT0gMCkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgXG4gICAgcmV0dXJuIHRydWU7XG4gIH0sXG4gIGJsdXJDYW52YXM6IGZ1bmN0aW9uKGN0eCwgbGVuZ3RoKSB7XG4gICAgY3R4LnNhdmUoKTtcbiAgICBjdHguZmlsdGVyID0gXCJibHVyKFwiICsgbGVuZ3RoICArIFwicHgpXCI7XG4gICAgdGhpcy5kcmF3SW1hZ2VEYXRhKGN0eCwgY3R4LmNhbnZhcywgMCwgMCwgdGhpcy5nZXRDYW52YXNXaWR0aChjdHguY2FudmFzKSwgdGhpcy5nZXRDYW52YXNIZWlnaHQoY3R4LmNhbnZhcykpO1xuICAgIGN0eC5yZXN0b3JlKCk7XG4gIH0sXG4gIHBhcnNlTnVtYmVyOiBmdW5jdGlvbihzdHIpIHtcbiAgICByZXR1cm4gc3RyID8gcGFyc2VJbnQoc3RyLm1hdGNoKC9cXGQrLyksIDEwKSA6IDA7XG4gIH0sXG4gIGdldEZvbnRTaXplOiBmdW5jdGlvbihjdHgpIHtcbiAgICByZXR1cm4gTWF0aC5mbG9vcihwYXJzZU51bWJlcihjdHguZm9udCkgLyAxLjI1KTtcbiAgfSxcbiAgZ2V0Q2FudmFzV2lkdGgoY2FudmFzKSB7XG4gICAgcmV0dXJuIHRoaXMucGFyc2VOdW1iZXIoY2FudmFzLnN0eWxlLndpZHRoKSB8fCBjYW52YXMud2lkdGg7XG4gIH0sXG4gIGdldENhbnZhc0hlaWdodChjYW52YXMpIHtcbiAgICByZXR1cm4gdGhpcy5wYXJzZU51bWJlcihjYW52YXMuc3R5bGUuaGVpZ2h0KSB8fCBjYW52YXMuaGVpZ2h0O1xuICB9LFxuICBhdXRvRFBJKGNhbnZhcykge1xuICAgIGNvbnN0IHJlY3QgPSBjYW52YXMuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG5cbiAgICBjYW52YXMud2lkdGggPSByZWN0LndpZHRoICogQ29uc3RhbnRzLlNldHRpbmcuUElYRUxfUkFUSU87XG4gICAgY2FudmFzLmhlaWdodCA9IHJlY3QuaGVpZ2h0ICogQ29uc3RhbnRzLlNldHRpbmcuUElYRUxfUkFUSU87XG4gICAgXG4gICAgY2FudmFzLnN0eWxlLndpZHRoID0gcmVjdC53aWR0aCArIFwicHhcIjtcbiAgICBjYW52YXMuc3R5bGUuaGVpZ2h0ID0gIHJlY3QuaGVpZ2h0ICsgXCJweFwiO1xuICB9LFxuICBhdXRvUmVzaXplQ2FudmFzOiBmdW5jdGlvbihjYW52YXMsIGNvbnRhaW5lciwgaW5pdGlhbFdpZHRoLCBpbml0aWFsSGVpZ2h0KSB7XG4gICAgaWYoIWRvY3VtZW50LmZ1bGxzY3JlZW5FbGVtZW50KSB7XG4gICAgICBpZihpbml0aWFsV2lkdGggPj0gZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmNsaWVudFdpZHRoICogMC44NSkge1xuICAgICAgICB2YXIgcmF0aW8gPSBpbml0aWFsV2lkdGggLyBpbml0aWFsSGVpZ2h0O1xuICAgICAgICBjYW52YXMud2lkdGggPSBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuY2xpZW50V2lkdGggKiAwLjg1O1xuICAgICAgICBjYW52YXMuaGVpZ2h0ID0gY2FudmFzLndpZHRoIC8gcmF0aW87XG5cbiAgICAgICAgaWYoY2FudmFzLnN0eWxlKSB7XG4gICAgICAgICAgY2FudmFzLnN0eWxlLndpZHRoID0gY2FudmFzLndpZHRoICsgXCJweFwiO1xuICAgICAgICAgIGNhbnZhcy5zdHlsZS5oZWlnaHQgPSBjYW52YXMuaGVpZ2h0ICsgXCJweFwiO1xuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBjYW52YXMud2lkdGggPSBpbml0aWFsV2lkdGg7XG4gICAgICAgIGNhbnZhcy5oZWlnaHQgPSBpbml0aWFsSGVpZ2h0O1xuXG4gICAgICAgIGlmKGNhbnZhcy5zdHlsZSkge1xuICAgICAgICAgIGNhbnZhcy5zdHlsZS53aWR0aCA9IGluaXRpYWxXaWR0aCArIFwicHhcIjtcbiAgICAgICAgICBjYW52YXMuc3R5bGUuaGVpZ2h0ID0gaW5pdGlhbEhlaWdodCArIFwicHhcIjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0gZWxzZSBpZihkb2N1bWVudC5mdWxsc2NyZWVuRWxlbWVudCA9PSBjYW52YXMgfHwgZG9jdW1lbnQuZnVsbHNjcmVlbkVsZW1lbnQgPT0gY29udGFpbmVyKSB7XG4gICAgICBjYW52YXMud2lkdGggPSB3aW5kb3cuaW5uZXJXaWR0aDtcbiAgICAgIGNhbnZhcy5oZWlnaHQgPSB3aW5kb3cuaW5uZXJIZWlnaHQ7XG5cbiAgICAgIGlmKGNhbnZhcy5zdHlsZSkge1xuICAgICAgICBjYW52YXMuc3R5bGUud2lkdGggPSB3aW5kb3cuaW5uZXJXaWR0aCArIFwicHhcIjtcbiAgICAgICAgY2FudmFzLnN0eWxlLmhlaWdodCA9IHdpbmRvdy5pbm5lckhlaWdodCArIFwicHhcIjtcbiAgICAgIH1cblxuICAgICAgaWYoY29udGFpbmVyKSB7XG4gICAgICAgIGNvbnRhaW5lci53aWR0aCA9IHdpbmRvdy5pbm5lcldpZHRoO1xuICAgICAgICBjb250YWluZXIuaGVpZ2h0ID0gd2luZG93LmlubmVySGVpZ2h0O1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBjYW52YXMud2lkdGggPSBpbml0aWFsV2lkdGg7XG4gICAgICBjYW52YXMuaGVpZ2h0ID0gaW5pdGlhbEhlaWdodDtcblxuICAgICAgaWYoY2FudmFzLnN0eWxlKSB7XG4gICAgICAgIGNhbnZhcy5zdHlsZS53aWR0aCA9IGluaXRpYWxXaWR0aCArIFwicHhcIjtcbiAgICAgICAgY2FudmFzLnN0eWxlLmhlaWdodCA9IGluaXRpYWxIZWlnaHQgKyBcInB4XCI7XG4gICAgICB9XG4gICAgfVxuICB9LFxuICBlbmFibGVBdXRvUmVzaXplQ2FudmFzOiBmdW5jdGlvbihjYW52YXMsIGNvbnRhaW5lciwgaW5pdGlhbFdpZHRoLCBpbml0aWFsSGVpZ2h0KSB7XG4gICAgaWYoY2FudmFzICYmIGNhbnZhcy5nZXRBdHRyaWJ1dGUoXCJhdXRvcmVzaXplLWNhbnZhcy1ldmVudFwiKSAhPSBcInRydWVcIikge1xuICAgICAgdGhpcy5hdXRvUmVzaXplQ2FudmFzKGNhbnZhcywgY29udGFpbmVyLCBpbml0aWFsV2lkdGgsIGluaXRpYWxIZWlnaHQpO1xuICBcbiAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwicmVzaXplXCIsICgpID0+IHtcbiAgICAgICAgY2FudmFzLnNldEF0dHJpYnV0ZShcImF1dG9yZXNpemUtY2FudmFzLWV2ZW50XCIsIFwidHJ1ZVwiKTtcbiAgICAgICAgdGhpcy5hdXRvUmVzaXplQ2FudmFzKGNhbnZhcywgY29udGFpbmVyLCBpbml0aWFsV2lkdGgsIGluaXRpYWxIZWlnaHQpO1xuICAgICAgfSk7XG4gICAgfVxuICB9LFxuICBhdXRvUmVzaXplQ2FudmFzRnVsbHNjcmVlbjogZnVuY3Rpb24oY2FudmFzLCBjb250YWluZXIpIHtcbiAgICBpZihkb2N1bWVudC5mdWxsc2NyZWVuRWxlbWVudCA9PSBjYW52YXMgfHwgZG9jdW1lbnQuZnVsbHNjcmVlbkVsZW1lbnQgPT0gY29udGFpbmVyKSB7XG4gICAgICBjYW52YXMud2lkdGggPSB3aW5kb3cuaW5uZXJXaWR0aDtcbiAgICAgIGNhbnZhcy5oZWlnaHQgPSB3aW5kb3cuaW5uZXJIZWlnaHQ7XG5cbiAgICAgIGlmKGNhbnZhcy5zdHlsZSkge1xuICAgICAgICBjYW52YXMuc3R5bGUud2lkdGggPSB3aW5kb3cuaW5uZXJXaWR0aCArIFwicHhcIjtcbiAgICAgICAgY2FudmFzLnN0eWxlLmhlaWdodCA9IHdpbmRvdy5pbm5lckhlaWdodCArIFwicHhcIjtcbiAgICAgIH1cbiAgICAgIFxuICAgICAgaWYoY29udGFpbmVyKSB7XG4gICAgICAgIGNvbnRhaW5lci53aWR0aCA9IHdpbmRvdy5pbm5lcldpZHRoO1xuICAgICAgICBjb250YWluZXIuaGVpZ2h0ID0gd2luZG93LmlubmVySGVpZ2h0O1xuICAgICAgfVxuICAgIH1cbiAgfSxcbiAgZW5hYmxlQXV0b1Jlc2l6ZUNhbnZhc0Z1bGxzY3JlZW46IGZ1bmN0aW9uKGNhbnZhcywgY29udGFpbmVyKSB7XG4gICAgaWYoY2FudmFzICYmIGNhbnZhcy5nZXRBdHRyaWJ1dGUoXCJhdXRvcmVzaXplZnVsbHNjcmVlbi1jYW52YXMtZXZlbnRcIikgIT0gXCJ0cnVlXCIpIHtcbiAgICAgIHRoaXMuYXV0b1Jlc2l6ZUNhbnZhc0Z1bGxzY3JlZW4oY2FudmFzLCBjb250YWluZXIpO1xuICBcbiAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwicmVzaXplXCIsICgpID0+IHtcbiAgICAgICAgY2FudmFzLnNldEF0dHJpYnV0ZShcImF1dG9yZXNpemVmdWxsc2NyZWVuLWNhbnZhcy1ldmVudFwiLCBcInRydWVcIik7XG4gICAgICAgIHRoaXMuYXV0b1Jlc2l6ZUNhbnZhc0Z1bGxzY3JlZW4oY2FudmFzLCBjb250YWluZXIpO1xuICAgICAgfSk7XG4gICAgfVxuICB9LFxuICBhdXRvUmVzaXplQ2FudmFzRnVsbHBhZ2U6IGZ1bmN0aW9uKGNhbnZhcywgY29udGFpbmVyKSB7XG4gICAgaWYoY2FudmFzICYmIGNhbnZhcy5nZXRBdHRyaWJ1dGUoXCJmdWxscGFnZS1jYW52YXMtZW5hYmxlXCIpID09IFwidHJ1ZVwiKSB7XG4gICAgICBjYW52YXMud2lkdGggPSB3aW5kb3cuaW5uZXJXaWR0aDtcbiAgICAgIGNhbnZhcy5oZWlnaHQgPSB3aW5kb3cuaW5uZXJIZWlnaHQ7XG4gICAgICBcbiAgICAgIGlmKGNhbnZhcy5zdHlsZSkge1xuICAgICAgICBjYW52YXMuc3R5bGUud2lkdGggPSB3aW5kb3cuaW5uZXJXaWR0aCArIFwicHhcIjtcbiAgICAgICAgY2FudmFzLnN0eWxlLmhlaWdodCA9IHdpbmRvdy5pbm5lckhlaWdodCArIFwicHhcIjtcbiAgICAgIH1cbiAgICAgIFxuICAgICAgaWYoY29udGFpbmVyKSB7XG4gICAgICAgIGNvbnRhaW5lci53aWR0aCA9IHdpbmRvdy5pbm5lcldpZHRoO1xuICAgICAgICBjb250YWluZXIuaGVpZ2h0ID0gd2luZG93LmlubmVySGVpZ2h0O1xuICAgICAgICBjb250YWluZXIuc3R5bGUubWFyZ2luID0gMDtcbiAgICAgICAgY29udGFpbmVyLnN0eWxlLnBhZGRpbmcgPSAwO1xuICAgICAgfVxuXG4gICAgICBkb2N1bWVudC5ib2R5LnN0eWxlLm1hcmdpbiA9IDA7XG4gICAgICBkb2N1bWVudC5ib2R5LnN0eWxlLnBhZGRpbmcgPSAwO1xuICAgIH1cbiAgfSxcbiAgZW5hYmxlQXV0b1Jlc2l6ZUNhbnZhc0Z1bGxwYWdlOiBmdW5jdGlvbihjYW52YXMsIGNvbnRhaW5lcikge1xuICAgIGlmKGNhbnZhcyAmJiBjYW52YXMuZ2V0QXR0cmlidXRlKFwiYXV0b3Jlc2l6ZWZ1bGxwYWdlLWNhbnZhcy1ldmVudFwiKSAhPSBcInRydWVcIikge1xuICAgICAgdGhpcy5hdXRvUmVzaXplQ2FudmFzRnVsbHBhZ2UoY2FudmFzLCBjb250YWluZXIpO1xuICBcbiAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwicmVzaXplXCIsICgpID0+IHtcbiAgICAgICAgY2FudmFzLnNldEF0dHJpYnV0ZShcImF1dG9yZXNpemVmdWxscGFnZS1jYW52YXMtZXZlbnRcIiwgXCJ0cnVlXCIpO1xuICAgICAgICB0aGlzLmF1dG9SZXNpemVDYW52YXNGdWxscGFnZShjYW52YXMsIGNvbnRhaW5lcik7XG4gICAgICB9KTtcbiAgICB9XG4gIH0sXG4gIHRvZ2dsZUZ1bGxzY3JlZW46IGZ1bmN0aW9uKGNhbnZhcywgY29udGFpbmVyKSB7XG4gICAgaWYoY2FudmFzKSB7XG4gICAgICBjb25zdCBpbml0aWFsV2lkdGggPSBjYW52YXMud2lkdGg7XG4gICAgICBjb25zdCBpbml0aWFsSGVpZ2h0ID0gY2FudmFzLmhlaWdodDtcblxuICAgICAgaWYoY29udGFpbmVyKSB7XG4gICAgICAgIGNvbnRhaW5lci53aWR0aCA9IGluaXRpYWxXaWR0aDtcbiAgICAgICAgY29udGFpbmVyLmhlaWdodCA9IGluaXRpYWxIZWlnaHQ7XG4gICAgICB9XG5cbiAgICAgIGlmKCFkb2N1bWVudC5mdWxsc2NyZWVuRWxlbWVudCkge1xuICAgICAgICBpZigoY29udGFpbmVyIHx8IGNhbnZhcykucmVxdWVzdEZ1bGxzY3JlZW4pIHtcbiAgICAgICAgICAoY29udGFpbmVyIHx8IGNhbnZhcykucmVxdWVzdEZ1bGxzY3JlZW4oKTtcbiAgICAgICAgfSBlbHNlIGlmKChjb250YWluZXIgfHwgY2FudmFzKS5tb3pSZXF1ZXN0RnVsbFNjcmVlbikge1xuICAgICAgICAgIChjb250YWluZXIgfHwgY2FudmFzKS5tb3pSZXF1ZXN0RnVsbFNjcmVlbigpO1xuICAgICAgICB9IGVsc2UgaWYoKGNvbnRhaW5lciB8fCBjYW52YXMpLndlYmtpdFJlcXVlc3RGdWxsc2NyZWVuKSB7XG4gICAgICAgICAgKGNvbnRhaW5lciB8fCBjYW52YXMpLndlYmtpdFJlcXVlc3RGdWxsc2NyZWVuKCk7XG4gICAgICAgIH0gZWxzZSBpZigoY29udGFpbmVyIHx8IGNhbnZhcykubXNSZXF1ZXN0RnVsbHNjcmVlbikge1xuICAgICAgICAgIChjb250YWluZXIgfHwgY2FudmFzKS5tc1JlcXVlc3RGdWxsc2NyZWVuKCk7XG4gICAgICAgIH0gZWxzZSBpZigoY29udGFpbmVyIHx8IGNhbnZhcykub1JlcXVlc3RGdWxsc2NyZWVuKSB7XG4gICAgICAgICAgKGNvbnRhaW5lciB8fCBjYW52YXMpLm9SZXF1ZXN0RnVsbHNjcmVlbigpO1xuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBpZihkb2N1bWVudC5leGl0RnVsbHNjcmVlbikge1xuICAgICAgICAgIGRvY3VtZW50LmV4aXRGdWxsc2NyZWVuKCk7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgdGhpcy5lbmFibGVBdXRvUmVzaXplQ2FudmFzRnVsbHNjcmVlbihjYW52YXMsIGNvbnRhaW5lcik7XG5cbiAgICAgIGlmKGNhbnZhcy5nZXRBdHRyaWJ1dGUoXCJmdWxsc2NyZWVuY2hhbmdlLWNhbnZhcy1ldmVudFwiKSAhPSBcInRydWVcIikge1xuICAgICAgICBjYW52YXMuc2V0QXR0cmlidXRlKFwiZnVsbHNjcmVlbmNoYW5nZS1jYW52YXMtZXZlbnRcIiwgXCJ0cnVlXCIpO1xuXG4gICAgICAgIGNvbnN0IG9uZnVsbHNjcmVlbmNoYW5nZSA9ICgpID0+IHtcbiAgICAgICAgICBpZihkb2N1bWVudC5mdWxsc2NyZWVuRWxlbWVudCAhPSAoY29udGFpbmVyIHx8IGNhbnZhcykpIHtcbiAgICAgICAgICAgIGNhbnZhcy53aWR0aCA9IGluaXRpYWxXaWR0aDtcbiAgICAgICAgICAgIGNhbnZhcy5oZWlnaHQgPSBpbml0aWFsSGVpZ2h0O1xuICAgICAgXG4gICAgICAgICAgICBpZihjb250YWluZXIpIHtcbiAgICAgICAgICAgICAgY29udGFpbmVyLndpZHRoID0gaW5pdGlhbFdpZHRoO1xuICAgICAgICAgICAgICBjb250YWluZXIuaGVpZ2h0ID0gaW5pdGlhbEhlaWdodDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgXG4gICAgICAgIGlmKHR5cGVvZihkb2N1bWVudC5vbmZ1bGxzY3JlZW5jaGFuZ2UpICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgZG9jdW1lbnQub25mdWxsc2NyZWVuY2hhbmdlID0gb25mdWxsc2NyZWVuY2hhbmdlO1xuICAgICAgICB9IGVsc2UgaWYodHlwZW9mKGRvY3VtZW50Lm9ubXNmdWxsc2NyZWVuY2hhbmdlKSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGRvY3VtZW50Lm9ubXNmdWxsc2NyZWVuY2hhbmdlID0gb25mdWxsc2NyZWVuY2hhbmdlO1xuICAgICAgICB9IGVsc2UgaWYodHlwZW9mKGRvY3VtZW50Lm9ubW96ZnVsbHNjcmVlbmNoYW5nZSkgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBkb2N1bWVudC5vbm1vemZ1bGxzY3JlZW5jaGFuZ2UgPSBvbmZ1bGxzY3JlZW5jaGFuZ2U7XG4gICAgICAgIH0gZWxzZSBpZih0eXBlb2YoZG9jdW1lbnQub253ZWJraXRmdWxsc2NyZWVuY2hhbmdlKSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGRvY3VtZW50Lm9ud2Via2l0ZnVsbHNjcmVlbmNoYW5nZSA9IG9uZnVsbHNjcmVlbmNoYW5nZTtcbiAgICAgICAgfSBlbHNlIGlmKHR5cGVvZihkb2N1bWVudC5vbm9raXRmdWxsc2NyZWVuY2hhbmdlKSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGRvY3VtZW50Lm9ub2Z1bGxzY3JlZW5jaGFuZ2UgPSBvbmZ1bGxzY3JlZW5jaGFuZ2U7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH0sXG4gIHRvZ2dsZUZ1bGxwYWdlOiBmdW5jdGlvbihjYW52YXMsIGNvbnRhaW5lcikge1xuICAgIGlmKGNhbnZhcykge1xuICAgICAgY29uc3QgaW5pdGlhbFdpZHRoID0gY2FudmFzLndpZHRoO1xuICAgICAgY29uc3QgaW5pdGlhbEhlaWdodCA9IGNhbnZhcy5oZWlnaHQ7XG5cbiAgICAgIGlmKGNvbnRhaW5lcikge1xuICAgICAgICBjb250YWluZXIud2lkdGggPSBpbml0aWFsV2lkdGg7XG4gICAgICAgIGNvbnRhaW5lci5oZWlnaHQgPSBpbml0aWFsSGVpZ2h0O1xuICAgICAgfVxuXG4gICAgICBpZighY2FudmFzLmdldEF0dHJpYnV0ZShcImZ1bGxwYWdlLWNhbnZhcy1lbmFibGVcIikgfHwgY2FudmFzLmdldEF0dHJpYnV0ZShcImZ1bGxwYWdlLWNhbnZhcy1lbmFibGVcIikgPT0gXCJmYWxzZVwiKSB7XG4gICAgICAgIGNhbnZhcy5zZXRBdHRyaWJ1dGUoXCJmdWxscGFnZS1jYW52YXMtZW5hYmxlXCIsIFwidHJ1ZVwiKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGNhbnZhcy5zZXRBdHRyaWJ1dGUoXCJmdWxscGFnZS1jYW52YXMtZW5hYmxlXCIsIFwiZmFsc2VcIik7XG4gICAgICB9XG5cbiAgICAgIHRoaXMuZW5hYmxlQXV0b1Jlc2l6ZUNhbnZhc0Z1bGxwYWdlKGNhbnZhcywgY29udGFpbmVyKTtcbiAgICB9XG4gIH0sXG4gIGdldE1vdXNlUG9zKGNhbnZhcywgZXZlbnQpIHtcbiAgICBjb25zdCByZWN0ID0gY2FudmFzLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuICAgIFxuICAgIHJldHVybiB7XG4gICAgICB4OiBldmVudC5jbGllbnRYIC0gcmVjdC5sZWZ0LFxuICAgICAgeTogZXZlbnQuY2xpZW50WSAtIHJlY3QudG9wXG4gICAgfTtcbiAgfVxufTsiLCIvKlxuICogQ29weXJpZ2h0IChDKSAyMDIwIEVsaWFzdGlrIChlbGlhc3Rpa3NvZnRzLmNvbSlcbiAqXG4gKiBUaGlzIGZpbGUgaXMgcGFydCBvZiBcIkpTR2FtZVRvb2xzXCIuXG4gKlxuICogXCJKU0dhbWVUb29sc1wiIGlzIGZyZWUgc29mdHdhcmU6IHlvdSBjYW4gcmVkaXN0cmlidXRlIGl0IGFuZC9vciBtb2RpZnlcbiAqIGl0IHVuZGVyIHRoZSB0ZXJtcyBvZiB0aGUgR05VIEdlbmVyYWwgUHVibGljIExpY2Vuc2UgYXMgcHVibGlzaGVkIGJ5XG4gKiB0aGUgRnJlZSBTb2Z0d2FyZSBGb3VuZGF0aW9uLCBlaXRoZXIgdmVyc2lvbiAzIG9mIHRoZSBMaWNlbnNlLCBvclxuICogKGF0IHlvdXIgb3B0aW9uKSBhbnkgbGF0ZXIgdmVyc2lvbi5cbiAqXG4gKiBcIkpTR2FtZVRvb2xzXCIgaXMgZGlzdHJpYnV0ZWQgaW4gdGhlIGhvcGUgdGhhdCBpdCB3aWxsIGJlIHVzZWZ1bCxcbiAqIGJ1dCBXSVRIT1VUIEFOWSBXQVJSQU5UWTsgd2l0aG91dCBldmVuIHRoZSBpbXBsaWVkIHdhcnJhbnR5IG9mXG4gKiBNRVJDSEFOVEFCSUxJVFkgb3IgRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UuICBTZWUgdGhlXG4gKiBHTlUgR2VuZXJhbCBQdWJsaWMgTGljZW5zZSBmb3IgbW9yZSBkZXRhaWxzLlxuICpcbiAqIFlvdSBzaG91bGQgaGF2ZSByZWNlaXZlZCBhIGNvcHkgb2YgdGhlIEdOVSBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlXG4gKiBhbG9uZyB3aXRoIFwiSlNHYW1lVG9vbHNcIi4gIElmIG5vdCwgc2VlIDxodHRwOi8vd3d3LmdudS5vcmcvbGljZW5zZXMvPi5cbiAqL1xuaW1wb3J0IENvbnN0YW50cyBmcm9tIFwiLi9Db25zdGFudHNcIjtcbmltcG9ydCBCdXR0b24gZnJvbSBcIi4vQnV0dG9uXCI7XG5pbXBvcnQgQnV0dG9uSW1hZ2UgZnJvbSBcIi4vQnV0dG9uSW1hZ2VcIjtcbmltcG9ydCBJbWFnZUxvYWRlciBmcm9tIFwiLi9JbWFnZUxvYWRlclwiO1xuaW1wb3J0IE5vdGlmaWNhdGlvbk1lc3NhZ2UgZnJvbSBcIi4vTm90aWZpY2F0aW9uTWVzc2FnZVwiO1xuaW1wb3J0IFV0aWxzIGZyb20gXCIuL1V0aWxzXCI7XG5pbXBvcnQgTWVudSBmcm9tIFwiLi9NZW51XCI7XG5pbXBvcnQgSW5wdXQgZnJvbSBcIi4vSW5wdXRcIjtcbmltcG9ydCBMYWJlbCBmcm9tIFwiLi9MYWJlbFwiO1xuaW1wb3J0IExpbmsgZnJvbSBcIi4vTGlua1wiO1xuaW1wb3J0IFRvb2x0aXAgZnJvbSBcIi4vVG9vbHRpcFwiO1xuaW1wb3J0IFNjZW5lIGZyb20gXCIuL1NjZW5lXCI7XG5pbXBvcnQgRlBTTWV0ZXIgZnJvbSBcIi4vRlBTTWV0ZXJcIjtcbmltcG9ydCBQcm9ncmVzc0JhciBmcm9tIFwiLi9Qcm9ncmVzc0JhclwiO1xuaW1wb3J0IENhbnZhcyBmcm9tIFwiLi9DYW52YXNcIjtcbmltcG9ydCBDb21wb25lbnQgZnJvbSBcIi4vQ29tcG9uZW50XCI7XG5pbXBvcnQgRWFzaW5nRnVuY3Rpb25zIGZyb20gXCIuL0Vhc2luZ0Z1bmN0aW9uc1wiO1xuaW1wb3J0IENvbCBmcm9tIFwiLi9Db2xcIjtcbmltcG9ydCBDb250YWluZXIgZnJvbSBcIi4vQ29udGFpbmVyXCI7XG5pbXBvcnQgUm93IGZyb20gXCIuL1Jvd1wiO1xuaW1wb3J0IEltYWdlQ29udGFpbmVyIGZyb20gXCIuL0ltYWdlQ29udGFpbmVyXCI7XG5pbXBvcnQgQXJyb3cgZnJvbSBcIi4vQXJyb3dcIjtcbmltcG9ydCBDcm9zcyBmcm9tIFwiLi9Dcm9zc1wiO1xuaW1wb3J0IFNjcm9sbGJhciBmcm9tIFwiLi9TY3JvbGxiYXJcIjtcbmltcG9ydCBTY3JvbGxiYXJWZXJ0aWNhbCBmcm9tIFwiLi9TY3JvbGxiYXJWZXJ0aWNhbFwiO1xuaW1wb3J0IFNjcm9sbGJhckhvcml6b250YWwgZnJvbSBcIi4vU2Nyb2xsYmFySG9yaXpvbnRhbFwiO1xuaW1wb3J0IEJveCBmcm9tIFwiLi9Cb3hcIjtcbmltcG9ydCBTdHlsZSBmcm9tIFwiLi9TdHlsZVwiO1xuaW1wb3J0IFNlbGVjdCBmcm9tIFwiLi9TZWxlY3RcIjtcbmltcG9ydCBTZWxlY3RPcHRpb24gZnJvbSBcIi4vU2VsZWN0T3B0aW9uXCI7XG5pbXBvcnQgU2VsZWN0T3B0aW9uc0NvbnRhaW5lciBmcm9tIFwiLi9TZWxlY3RPcHRpb25zQ29udGFpbmVyXCI7XG5pbXBvcnQgVHJpYW5nbGUgZnJvbSBcIi4vVHJpYW5nbGVcIjtcbmltcG9ydCBDaXJjbGUgZnJvbSBcIi4vQ2lyY2xlXCI7XG5pbXBvcnQgUmVhY3RvciBmcm9tIFwiLi9SZWFjdG9yXCI7XG5pbXBvcnQgRXZlbnQgZnJvbSBcIi4vRXZlbnRcIjtcbmltcG9ydCBSZWFjdG9yQ2FudmFzIGZyb20gXCIuL1JlYWN0b3JDYW52YXNcIjtcblxuZXhwb3J0IHsgQ29uc3RhbnRzLCBCdXR0b24sIEJ1dHRvbkltYWdlLCBJbWFnZUxvYWRlciwgTm90aWZpY2F0aW9uTWVzc2FnZSwgVXRpbHMsIE1lbnUsIElucHV0LCBMYWJlbCwgTGluaywgVG9vbHRpcCwgU2NlbmUsIEZQU01ldGVyLCBQcm9ncmVzc0JhciwgQ2FudmFzLCBDb21wb25lbnQsIEVhc2luZ0Z1bmN0aW9ucywgQ29sLCBDb250YWluZXIsIFJvdywgSW1hZ2VDb250YWluZXIsIEFycm93LCBDcm9zcywgU2Nyb2xsYmFyLCBTY3JvbGxiYXJWZXJ0aWNhbCwgU2Nyb2xsYmFySG9yaXpvbnRhbCwgQm94LCBTdHlsZSwgU2VsZWN0LCBTZWxlY3RPcHRpb24sIFNlbGVjdE9wdGlvbnNDb250YWluZXIsIFRyaWFuZ2xlLCBDaXJjbGUsIFJlYWN0b3IsIEV2ZW50LCBSZWFjdG9yQ2FudmFzIH07Il0sInNvdXJjZVJvb3QiOiIifQ==