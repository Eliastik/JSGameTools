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
    get: function get() {
      return _babel_runtime_helpers_get__WEBPACK_IMPORTED_MODULE_2___default()(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6___default()(ButtonImage.prototype), "minWidth", this);
    },
    set: function set(width) {
      this.image.width = width;

      _babel_runtime_helpers_set__WEBPACK_IMPORTED_MODULE_3___default()(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6___default()(ButtonImage.prototype), "minWidth", width, this, true);
    }
  }, {
    key: "minHeight",
    get: function get() {
      return _babel_runtime_helpers_get__WEBPACK_IMPORTED_MODULE_2___default()(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6___default()(ButtonImage.prototype), "minHeight", this);
    },
    set: function set(height) {
      this.image.height = height;

      _babel_runtime_helpers_set__WEBPACK_IMPORTED_MODULE_3___default()(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6___default()(ButtonImage.prototype), "minHeight", height, this, true);
    }
  }, {
    key: "maxWidth",
    get: function get() {
      return _babel_runtime_helpers_get__WEBPACK_IMPORTED_MODULE_2___default()(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6___default()(ButtonImage.prototype), "maxWidth", this);
    },
    set: function set(width) {
      this.image.width = width;

      _babel_runtime_helpers_set__WEBPACK_IMPORTED_MODULE_3___default()(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6___default()(ButtonImage.prototype), "maxWidth", width, this, true);
    }
  }, {
    key: "maxHeight",
    get: function get() {
      return _babel_runtime_helpers_get__WEBPACK_IMPORTED_MODULE_2___default()(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6___default()(ButtonImage.prototype), "maxHeight", this);
    },
    set: function set(height) {
      this.image.height = height;

      _babel_runtime_helpers_set__WEBPACK_IMPORTED_MODULE_3___default()(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6___default()(ButtonImage.prototype), "maxHeight", height, this, true);
    }
  }, {
    key: "width",
    get: function get() {
      return _babel_runtime_helpers_get__WEBPACK_IMPORTED_MODULE_2___default()(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6___default()(ButtonImage.prototype), "width", this);
    },
    set: function set(width) {
      this.minWidth = width;
      this.maxWidth = width;
    }
  }, {
    key: "height",
    get: function get() {
      return _babel_runtime_helpers_get__WEBPACK_IMPORTED_MODULE_2___default()(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6___default()(ButtonImage.prototype), "height", this);
    },
    set: function set(height) {
      this.minHeight = height;
      this.maxHeight = height;
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
    get: function get() {
      return this.canvas ? this.canvas.style.cursor : "";
    },
    set: function set(cursor) {
      if (this.canvas) this.canvas.style.cursor = cursor;
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

    this.movable = false;
    this.moving = false; // Scroll state

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

            _this2.moving = false;

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
              _this2.moving = true;
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
              if (!_this2.moving) {
                if (_this2.reactor) {
                  _this2.reactor.dispatchEvent("onClick", mousePosition);
                }

                _this2.selected = true;
              } else {
                _this2.moving = false;
              }
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

            if (result && !_this2.moving) {
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
    key: "updateInnerHeight",
    value: function updateInnerHeight() {}
  }, {
    key: "updateInnerWidth",
    value: function updateInnerWidth() {}
  }, {
    key: "canvas",
    get: function get() {
      return _babel_runtime_helpers_get__WEBPACK_IMPORTED_MODULE_4___default()(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_7___default()(Container.prototype), "canvas", this);
    },
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
    }
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
    get: function get() {
      return this.labelDetailsSceneError.text;
    },
    set: function set(text) {
      this.labelDetailsSceneError.text = text;
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
  }, {
    key: "loadImage",
    value: function loadImage(imageLoader) {
      this.image = imageLoader.get(this.imgSrc);
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
    key: "setSelectionRange",
    value: function setSelectionRange(start, end, direction) {
      this.input.setSelectionRange(start, end, direction);
      this.positionStart = start;
      this.positionEnd = end;
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
    key: "text",
    get: function get() {
      return _babel_runtime_helpers_classPrivateFieldGet__WEBPACK_IMPORTED_MODULE_9___default()(this, _text);
    },
    set: function set(text) {
      if (text != _babel_runtime_helpers_classPrivateFieldGet__WEBPACK_IMPORTED_MODULE_9___default()(this, _text)) {
        _babel_runtime_helpers_classPrivateFieldSet__WEBPACK_IMPORTED_MODULE_8___default()(this, _text, text);

        this.reactor.dispatchEvent("onChange", this);
      }
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
    key: "hidden",
    get: function get() {
      return _babel_runtime_helpers_get__WEBPACK_IMPORTED_MODULE_4___default()(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_7___default()(Menu.prototype), "hidden", this) || this.disabled;
    },
    set: function set(hidden) {
      _babel_runtime_helpers_set__WEBPACK_IMPORTED_MODULE_3___default()(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_7___default()(Menu.prototype), "hidden", hidden, this, true);

      this.disabled = hidden;
    }
  }, {
    key: "isInside",
    value: function isInside(pos) {
      return !this.hidden;
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
    key: "drawForeground",
    value: function drawForeground(ctx, widthForeground) {
      ctx.save();
      ctx.fillStyle = this.style.foregroundColor;
      ctx.fillRect(this.x, this.y, widthForeground, this.height);
      ctx.restore();
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
  }, {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9KU0dhbWVUb29scy93ZWJwYWNrL3VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24iLCJ3ZWJwYWNrOi8vSlNHYW1lVG9vbHMvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vSlNHYW1lVG9vbHMvLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9hcnJheUxpa2VUb0FycmF5LmpzIiwid2VicGFjazovL0pTR2FtZVRvb2xzLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvYXJyYXlXaXRob3V0SG9sZXMuanMiLCJ3ZWJwYWNrOi8vSlNHYW1lVG9vbHMvLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQuanMiLCJ3ZWJwYWNrOi8vSlNHYW1lVG9vbHMvLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9jbGFzc0NhbGxDaGVjay5qcyIsIndlYnBhY2s6Ly9KU0dhbWVUb29scy8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2NsYXNzUHJpdmF0ZUZpZWxkR2V0LmpzIiwid2VicGFjazovL0pTR2FtZVRvb2xzLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvY2xhc3NQcml2YXRlRmllbGRTZXQuanMiLCJ3ZWJwYWNrOi8vSlNHYW1lVG9vbHMvLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9jb25zdHJ1Y3QuanMiLCJ3ZWJwYWNrOi8vSlNHYW1lVG9vbHMvLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9jcmVhdGVDbGFzcy5qcyIsIndlYnBhY2s6Ly9KU0dhbWVUb29scy8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2RlZmluZVByb3BlcnR5LmpzIiwid2VicGFjazovL0pTR2FtZVRvb2xzLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZ2V0LmpzIiwid2VicGFjazovL0pTR2FtZVRvb2xzLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZ2V0UHJvdG90eXBlT2YuanMiLCJ3ZWJwYWNrOi8vSlNHYW1lVG9vbHMvLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9pbmhlcml0cy5qcyIsIndlYnBhY2s6Ly9KU0dhbWVUb29scy8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2lzTmF0aXZlUmVmbGVjdENvbnN0cnVjdC5qcyIsIndlYnBhY2s6Ly9KU0dhbWVUb29scy8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2l0ZXJhYmxlVG9BcnJheS5qcyIsIndlYnBhY2s6Ly9KU0dhbWVUb29scy8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL25vbkl0ZXJhYmxlU3ByZWFkLmpzIiwid2VicGFjazovL0pTR2FtZVRvb2xzLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvcG9zc2libGVDb25zdHJ1Y3RvclJldHVybi5qcyIsIndlYnBhY2s6Ly9KU0dhbWVUb29scy8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL3NldC5qcyIsIndlYnBhY2s6Ly9KU0dhbWVUb29scy8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL3NldFByb3RvdHlwZU9mLmpzIiwid2VicGFjazovL0pTR2FtZVRvb2xzLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvc3VwZXJQcm9wQmFzZS5qcyIsIndlYnBhY2s6Ly9KU0dhbWVUb29scy8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL3RvQ29uc3VtYWJsZUFycmF5LmpzIiwid2VicGFjazovL0pTR2FtZVRvb2xzLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvdHlwZW9mLmpzIiwid2VicGFjazovL0pTR2FtZVRvb2xzLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvdW5zdXBwb3J0ZWRJdGVyYWJsZVRvQXJyYXkuanMiLCJ3ZWJwYWNrOi8vSlNHYW1lVG9vbHMvLi9zcmMvQXJyb3cuanMiLCJ3ZWJwYWNrOi8vSlNHYW1lVG9vbHMvLi9zcmMvQm94LmpzIiwid2VicGFjazovL0pTR2FtZVRvb2xzLy4vc3JjL0J1dHRvbi5qcyIsIndlYnBhY2s6Ly9KU0dhbWVUb29scy8uL3NyYy9CdXR0b25JbWFnZS5qcyIsIndlYnBhY2s6Ly9KU0dhbWVUb29scy8uL3NyYy9DYW52YXMuanMiLCJ3ZWJwYWNrOi8vSlNHYW1lVG9vbHMvLi9zcmMvQ2lyY2xlLmpzIiwid2VicGFjazovL0pTR2FtZVRvb2xzLy4vc3JjL0NvbC5qcyIsIndlYnBhY2s6Ly9KU0dhbWVUb29scy8uL3NyYy9Db21wb25lbnQuanMiLCJ3ZWJwYWNrOi8vSlNHYW1lVG9vbHMvLi9zcmMvQ29uc3RhbnRzLmpzIiwid2VicGFjazovL0pTR2FtZVRvb2xzLy4vc3JjL0NvbnRhaW5lci5qcyIsIndlYnBhY2s6Ly9KU0dhbWVUb29scy8uL3NyYy9Dcm9zcy5qcyIsIndlYnBhY2s6Ly9KU0dhbWVUb29scy8uL3NyYy9FYXNpbmdGdW5jdGlvbnMuanMiLCJ3ZWJwYWNrOi8vSlNHYW1lVG9vbHMvLi9zcmMvRXJyb3JTY3JlZW4uanMiLCJ3ZWJwYWNrOi8vSlNHYW1lVG9vbHMvLi9zcmMvRXZlbnQuanMiLCJ3ZWJwYWNrOi8vSlNHYW1lVG9vbHMvLi9zcmMvRlBTTWV0ZXIuanMiLCJ3ZWJwYWNrOi8vSlNHYW1lVG9vbHMvLi9zcmMvSW1hZ2VDb250YWluZXIuanMiLCJ3ZWJwYWNrOi8vSlNHYW1lVG9vbHMvLi9zcmMvSW1hZ2VMb2FkZXIuanMiLCJ3ZWJwYWNrOi8vSlNHYW1lVG9vbHMvLi9zcmMvSW5wdXQuanMiLCJ3ZWJwYWNrOi8vSlNHYW1lVG9vbHMvLi9zcmMvTGFiZWwuanMiLCJ3ZWJwYWNrOi8vSlNHYW1lVG9vbHMvLi9zcmMvTGluay5qcyIsIndlYnBhY2s6Ly9KU0dhbWVUb29scy8uL3NyYy9NZW51LmpzIiwid2VicGFjazovL0pTR2FtZVRvb2xzLy4vc3JjL05vdGlmaWNhdGlvbk1lc3NhZ2UuanMiLCJ3ZWJwYWNrOi8vSlNHYW1lVG9vbHMvLi9zcmMvUHJvZ3Jlc3NCYXIuanMiLCJ3ZWJwYWNrOi8vSlNHYW1lVG9vbHMvLi9zcmMvUmVhY3Rvci5qcyIsIndlYnBhY2s6Ly9KU0dhbWVUb29scy8uL3NyYy9SZWFjdG9yQ2FudmFzLmpzIiwid2VicGFjazovL0pTR2FtZVRvb2xzLy4vc3JjL1Jvdy5qcyIsIndlYnBhY2s6Ly9KU0dhbWVUb29scy8uL3NyYy9TY2VuZS5qcyIsIndlYnBhY2s6Ly9KU0dhbWVUb29scy8uL3NyYy9TY3JvbGxiYXIuanMiLCJ3ZWJwYWNrOi8vSlNHYW1lVG9vbHMvLi9zcmMvU2Nyb2xsYmFySG9yaXpvbnRhbC5qcyIsIndlYnBhY2s6Ly9KU0dhbWVUb29scy8uL3NyYy9TY3JvbGxiYXJWZXJ0aWNhbC5qcyIsIndlYnBhY2s6Ly9KU0dhbWVUb29scy8uL3NyYy9TZWxlY3QuanMiLCJ3ZWJwYWNrOi8vSlNHYW1lVG9vbHMvLi9zcmMvU2VsZWN0T3B0aW9uLmpzIiwid2VicGFjazovL0pTR2FtZVRvb2xzLy4vc3JjL1NlbGVjdE9wdGlvbnNDb250YWluZXIuanMiLCJ3ZWJwYWNrOi8vSlNHYW1lVG9vbHMvLi9zcmMvU3R5bGUuanMiLCJ3ZWJwYWNrOi8vSlNHYW1lVG9vbHMvLi9zcmMvVG9vbHRpcC5qcyIsIndlYnBhY2s6Ly9KU0dhbWVUb29scy8uL3NyYy9UcmlhbmdsZS5qcyIsIndlYnBhY2s6Ly9KU0dhbWVUb29scy8uL3NyYy9VdGlscy5qcyIsIndlYnBhY2s6Ly9KU0dhbWVUb29scy8uL3NyYy9pbmRleC5qcyJdLCJuYW1lcyI6WyJBcnJvdyIsIngiLCJ5IiwidG9YIiwidG9ZIiwic3R5bGUiLCJjb250ZXh0IiwiaGlkZGVuIiwiY2FudmFzIiwiY3R4IiwiZ2V0Q29udGV4dCIsIlV0aWxzIiwiZHJhd0Fycm93IiwibGluZVdpZHRoIiwiaGVhZFNpemUiLCJjb2xvciIsImxpbmVDYXAiLCJpbml0IiwiTWF0aCIsImFicyIsIlN0eWxlIiwiQ29uc3RhbnRzIiwiU2V0dGluZyIsIkFSUk9XX0RFRkFVTFRfTElORV9TSVpFIiwiQVJST1dfREVGQVVMVF9IRUFEX1NJWkUiLCJBUlJPV19ERUZBVUxUX0NPTE9SIiwiQVJST1dfREVGQVVMVF9MSU5FX0NBUCIsIkNvbXBvbmVudCIsIkJveCIsIndpZHRoIiwiaGVpZ2h0Iiwic2F2ZSIsImRyYXdCYWNrZ3JvdW5kIiwiZHJhd0JvcmRlciIsInJlc3RvcmUiLCJiYWNrZ3JvdW5kQ29sb3IiLCJmaWxsU3R5bGUiLCJmaWxsUmVjdCIsInJvdW5kIiwiaG92ZXJlZCIsImNsaWNrZWQiLCJiYWNrZ3JvdW5kQ29sb3JEb3duIiwiYmFja2dyb3VuZENvbG9ySG92ZXIiLCJib3JkZXJDb2xvciIsImJvcmRlclNpemUiLCJzdHJva2VTdHlsZSIsInN0cm9rZVJlY3QiLCJib3JkZXJDb2xvckRvd24iLCJib3JkZXJDb2xvckhvdmVyIiwic2VsZWN0YWJsZSIsInNlbGVjdGVkIiwiYm9yZGVyQ29sb3JTZWxlY3RlZCIsIkJ1dHRvbiIsIm1heFdpZHRoIiwibWF4SGVpZ2h0IiwiY29tcG9uZW50cyIsImRyYXdDb21wb25lbnRzIiwicGFkZGluZyIsIkJVVFRPTl9ERUZBVUxUX0JBQ0tHUk9VTkQiLCJCVVRUT05fREVGQVVMVF9IT1ZFUl9CQUNLR1JPVU5EIiwiQlVUVE9OX0RFRkFVTFRfQ0xJQ0tfQkFDS0dST1VORCIsIlJvdyIsIkJ1dHRvbkltYWdlIiwiaW1nU3JjIiwiYWxpZ25lbWVudCIsInZlcnRpY2FsQWxpZ25lbWVudCIsImltYWdlTG9hZGVyIiwiaW1hZ2UiLCJJbWFnZUNvbnRhaW5lciIsImFkZCIsImNvbnNvbGUiLCJ3YXJuIiwiU3RyaW5nIiwiTk9USUNFX01FU1NBR0UiLCJCVVRUT05fSU1BR0VfREVQUkVDQVRFRCIsImxvYWRJbWFnZSIsIm1pbldpZHRoIiwibWluSGVpZ2h0IiwiQ2FudmFzIiwic2NlbmUiLCJhdXRvUmVzaXplIiwibWF4RlBTIiwiZG9jdW1lbnQiLCJjcmVhdGVFbGVtZW50IiwiY29udGFpbmVyIiwiQ0FOVkFTX1dJRFRIIiwiQ0FOVkFTX0hFSUdIVCIsImFwcGVuZENoaWxkIiwic3RhcnRlZCIsImhhc0Vycm9yIiwiZnVsbHNjcmVlbiIsImZ1bGxwYWdlIiwic2NlbmVFcnJvciIsIkVycm9yU2NyZWVuIiwic2NlbmVQcmV2aW91cyIsInJlYWN0b3IiLCJSZWFjdG9yQ2FudmFzIiwicmVnaXN0ZXJFdmVudCIsImNyZWF0ZUV2ZW50cyIsIkRJU0FCTEVfT1BUSU1JWkFUSU9OUyIsImluZm8iLCJPUFRJTUlaQVRJT05fRElTQUJMRUQiLCJESVNBQkxFX0NPTlRBSU5FUlNfQ1VUVElORyIsIkNPTlRBSU5FUl9DVVRUSU5HX0RJU0FCTEVEIiwiZHJhd0NsZWFyIiwiZHJhd1NjZW5lIiwicGFyZW50Iiwic2NhbGUiLCJQSVhFTF9SQVRJTyIsImRyYXciLCJlIiwiZXJyb3JUZXh0Iiwic3RhY2siLCJlcnJvciIsIkVSUk9SX01FU1NBR0UiLCJFUlJPUl9NRVNTQUdFX0NBTlZBUyIsImNsZWFyIiwiZnVuYyIsInJlcXVlc3RBbmltYXRpb25GcmFtZSIsInRpbWUiLCJvZmZzZXRGcmFtZSIsImZ1bGxzY3JlZW5FbGVtZW50IiwiRU5BQkxFX1BJWEVMX1JBVElPX1JFU0laSU5HIiwid2luZG93IiwiZGV2aWNlUGl4ZWxSYXRpbyIsIlJFU09MVVRJT05fU0NBTEUiLCJhdXRvRFBJIiwic3RhcnREcmF3IiwiZWxlbWVudCIsInJlbW92ZUNoaWxkIiwidG9nZ2xlRnVsbHNjcmVlbiIsInRvZ2dsZUZ1bGxwYWdlIiwiZW5hYmxlQXV0b1Jlc2l6ZUNhbnZhcyIsImdldENhbnZhc1dpZHRoIiwiZGlzcGF0Y2hFdmVudCIsImdldENhbnZhc0hlaWdodCIsImN1cnNvciIsImZvckVhY2giLCJldmVudE5hbWUiLCJhZGRFdmVudExpc3RlbmVyIiwiZXZlbnQiLCJtb3VzZVBvc2l0aW9uIiwiZ2V0TW91c2VQb3MiLCJkb0V2ZW50cyIsInByZXZlbnREZWZhdWx0IiwiY2hhbmdlZFRvdWNoZXMiLCJwb3NpdGlvbiIsImdldENvbXBvbmVudHNBdFBvc2l0aW9uIiwicmV2ZXJzZSIsImNvbXBvbmVudCIsImRpc3BhdGNoRXZlbnRDb21wb25lbnQiLCJjYWxsYmFjayIsInN0YXJ0IiwiZ2V0QWxsQ29tcG9uZW50cyIsImFsbENvbXBvbmVudHMiLCJnZXRDb21wb25lbnRzVHJlZSIsInJlc3VsdCIsImNoaWxkcyIsInNvcnQiLCJTY2VuZSIsInNvcnRDb21wb25lbnRzVHJlZSIsInNvbWUiLCJjaGlsZCIsImlzSW5zaWRlIiwiZGlzYWJsZWQiLCJwdXNoIiwiQ2lyY2xlIiwiZHJhd0NpcmNsZSIsImZpbGwiLCJmaWxsQ29sb3IiLCJDSVJDTEVfREVGQVVMVF9MSU5FX1NJWkUiLCJDSVJDTEVfREVGQVVMVF9DT0xPUiIsIkNJUkNMRV9ERUZBVUxUX0ZJTEwiLCJDSVJDTEVfREVGQVVMVF9MSU5FX0NBUCIsIkNJUkNMRV9ERUZBVUxUX0ZJTExfQ09MT1IiLCJDb2wiLCJESVNBQkxFX0VYUEVSSU1FTlRBTF9PUFRJTUlaQVRJT05TIiwidXBkYXRlSW5uZXJXaWR0aCIsInVwZGF0ZUlubmVySGVpZ2h0IiwiYWRkQ2hhbmdlQWN0aW9uIiwiY3R4VGVtcCIsImlzQ3V0dGluZyIsImNhbnZhc1RtcCIsImN1cnJlbnRZIiwiZHJhd0NvbXBvbmVudCIsImRyYXdJbWFnZURhdGEiLCJvZmZzZXRTY3JvbGxYIiwib2Zmc2V0U2Nyb2xsWSIsImlzQ29tcG9uZW50VmlzaWJsZSIsInNwYWNlQmV0d2VlbkNvbXBvbmVudHMiLCJ0b3RhbEhlaWdodCIsImxlbmd0aCIsImlubmVyV2lkdGgiLCJtaW4iLCJtYXgiLCJpbm5lckhlaWdodCIsIkNvbnRhaW5lciIsImRlbHRhWCIsImRlbHRhWSIsIlJlYWN0b3IiLCJoYXNJbml0RXZlbnRzIiwibW92YWJsZSIsIm1vdmluZyIsIm9mZnNldE1vdmVYIiwib2Zmc2V0TW92ZVkiLCJtb3ZlRXZlbnRTdGFydFgiLCJtb3ZlRXZlbnRTdGFydFkiLCJ0b3VjaEV2ZW50U3RhcnRYIiwidG91Y2hFdmVudFN0YXJ0WSIsInRvdWNoRXZlbnRTdGFydFRpbWVzdGFtcCIsInRvb2x0aXAiLCJpbml0RXZlbnRzIiwiYWRkTW92ZUFjdGlvbiIsImVuYWJsZSIsImRpc2FibGUiLCJzY3JvbGxEaXNhYmxlZCIsInRvdWNoU2Nyb2xsRXZlbnQiLCJ0b3VjaFN0YXJ0RW5kRXZlbnQiLCJ0aW1lc3RhbXAiLCJwb3MiLCJ0cmlnZ2VyIiwicmVtb3ZlQWxsQ2xpY2tBY3Rpb25zIiwiYWRkQ2xpY2tBY3Rpb24iLCJyZW1vdmVFdmVudExpc3RlbmVyIiwicmVtb3ZlQWxsRXZlbnRMaXN0ZW5lciIsInJlbW92ZUFsbEhvdmVyQWN0aW9ucyIsImFkZEhvdmVyQWN0aW9uIiwicmVtb3ZlQWxsRG93bkFjdGlvbnMiLCJhZGREb3duQWN0aW9uIiwicmVtb3ZlQWxsU2Nyb2xsQWN0aW9ucyIsImFkZFNjcm9sbEFjdGlvbiIsInJlbW92ZUFsbE1vdmVBY3Rpb25zIiwicmVtb3ZlQWxsQ2hhbmdlQWN0aW9ucyIsInJlbW92ZUFsbFVwQWN0aW9ucyIsImFkZFVwQWN0aW9uIiwicGFyZW50V2lkdGgiLCJwYXJlbnRQYWRkaW5nIiwiQWxpZ25lbWVudCIsIkNFTlRFUiIsIlJJR0hUIiwiTEVGVCIsInBhcmVudEhlaWdodCIsIlZlcnRpY2FsQWxpZ25lbWVudCIsIkJPVFRPTSIsIlRPUCIsIkRFRkFVTFRfUEFERElORyIsIkRFRkFVTFRfU1BBQ0lORyIsImRlZmF1bHRTdHlsZSIsInNldEFsbCIsImdldFN0eWxlcyIsInNldCIsInJlcyIsIm90aGVyQ29tcG9uZW50IiwiaXNGb3JlZ3JvdW5kIiwiZm9yZWdyb3VuZCIsIm90aGVySXNGb3JlZ3JvdW5kIiwiekluZGV4Iiwib3RoZXJ6SW5kZXgiLCJjb21wYXJlVG9Db21wb25lbnQiLCJvdGhlciIsImNvbXBhcmVUbyIsIkRJU0FCTEVfSVNfQ09NUE9ORU5UX1ZJU0lCTEVfT1BUSU1JWkFUSU9OUyIsIkZPTlRfRkFNSUxZIiwiRk9OVF9TSVpFIiwiQlVUVE9OX0RFRkFVTFRfQUxURVJOQVRJVkVfQkFDS0dST1VORCIsIklOUFVUX0RFRkFVTFRfRk9OVF9DT0xPUiIsIklOUFVUX0RFRkFVTFRfQkFDS0dST1VORF9DT0xPUiIsIklOUFVUX0RFRkFVTFRfQk9SREVSX0NPTE9SIiwiSU5QVVRfREVGQVVMVF9CT1JERVJfQ09MT1JfU0VMRUNURUQiLCJJTlBVVF9ERUZBVUxUX1NFTEVDVF9DT0xPUiIsIkxBQkVMX0RFRkFVTFRfRk9OVF9DT0xPUiIsIkxJTktfREVGQVVMVF9DT0xPUiIsIkxJTktfREVGQVVMVF9IT1ZFUl9DT0xPUiIsIkxJTktfREVGQVVMVF9DTElDS19DT0xPUiIsIk1FTlVfREVGQVVMVF9CQUNLR1JPVU5EIiwiTUVOVV9ERUZBVUxUX0JMVVJfQkFDS0dST1VORCIsIk5PVElGSUNBVElPTl9ERUZBVUxUX0JBQ0tHUk9VTkQiLCJOT1RJRklDQVRJT05fREVGQVVMVF9BTklNQVRJT05fRFVSQVRJT04iLCJQUk9HUkVTU19ERUZBVUxUX0JBQ0tHUk9VTkQiLCJQUk9HUkVTU19ERUZBVUxUX0ZPUkVHUk9VTkQiLCJQUk9HUkVTU19ERUZBVUxUX0FOSU1BVElPTl9EVVJBVElPTiIsIlRPT0xUSVBfREVGQVVMVF9CQUNLR1JPVU5EIiwiQ1JPU1NfREVGQVVMVF9MSU5FX0NBUCIsIkNST1NTX0RFRkFVTFRfQ09MT1IiLCJDUk9TU19ERUZBVUxUX0xJTkVfU0laRSIsIlNDUk9MTEJBUl9ERUZBVUxUX0JBQ0tHUk9VTkQiLCJTQ1JPTExCQVJfREVGQVVMVF9IT1ZFUl9CQUNLR1JPVU5EIiwiU0NST0xMQkFSX0RFRkFVTFRfQ0xJQ0tfQkFDS0dST1VORCIsIlNDUk9MTEJBUl9ERUZBVUxUX1NJWkUiLCJERUZBVUxUX0JPUkRFUl9TSVpFIiwiREVGQVVMVF9CT1JERVJfQ09MT1JfU0VMRUNURUQiLCJERUZBVUxUX0FOSU1BVElPTl9EVVJBVElPTiIsIlRSSUFOR0xFX0RFRkFVTFRfTElORV9DQVAiLCJUUklBTkdMRV9ERUZBVUxUX0NPTE9SIiwiVFJJQU5HTEVfREVGQVVMVF9GSUxMX0NPTE9SIiwiVFJJQU5HTEVfREVGQVVMVF9MSU5FX1NJWkUiLCJUUklBTkdMRV9ERUZBVUxUX0ZJTEwiLCJTRUxFQ1RfREVGQVVMVF9CQUNLR1JPVU5EIiwiU0VMRUNUX0RFRkFVTFRfSE9WRVJfQkFDS0dST1VORCIsIlNFTEVDVF9ERUZBVUxUX0NMSUNLX0JBQ0tHUk9VTkQiLCJFUlJPUl9NRU5VX0JBQ0tHUk9VTkRfQ09MT1IiLCJLZXkiLCJVUCIsIkVOVEVSIiwiRUNIQVAiLCJUQUIiLCJERUZBVUxUIiwiRVJST1JfTUVTU0FHRV9DQU5WQVNfTEFCRUwiLCJSRVRSWSIsIldBUk5JTkdfTUVTU0FHRSIsIklOUFVUX0ZVTExTQ1JFRU4iLCJERVRBSUxTIiwiYWRkQWxsIiwic2Nyb2xsYmFySG9yaXpvbnRhbCIsIlNjcm9sbGJhckhvcml6b250YWwiLCJzY3JvbGxiYXJWZXJ0aWNhbCIsIlNjcm9sbGJhclZlcnRpY2FsIiwiY29udHJvbFNjcm9sbGluZyIsImNvbXBvbmVudENoYW5nZWQiLCJzY3JvbGxYRGlzYWJsZWQiLCJkcmF3SG9yaXpvbnRhbFNjcm9sbEJhciIsInNjcm9sbFlEaXNhYmxlZCIsImRyYXdWZXJ0aWNhbFNjcm9sbEJhciIsImhhc0NoYW5nZWQiLCJpIiwiZXZlbnRDaGFuZ2VDYWxsYmFjayIsImluZGV4T2YiLCJyZW1vdmVDaGFuZ2VBY3Rpb24iLCJmaWx0ZXIiLCJjdXJyZW50IiwicmVtb3ZlIiwiY2hhbmdlZCIsImMiLCJzY3JvbGxBcmVhU2l6ZVkiLCJwZXJjZW50U2Nyb2xsYmFyWSIsInNjcm9sbEFyZWFTaXplWCIsInBlcmNlbnRTY3JvbGxiYXJYIiwiY29tcG9uZW50V2lkdGgiLCJjb21wb25lbnRIZWlnaHQiLCJjYW52YXNXaWR0aCIsImNhbnZhc0hlaWdodCIsIkNyb3NzIiwiZHJhd0Nyb3NzIiwiZWFzZUluQ3ViaWMiLCJlYXNlT3V0Qm91bmNlIiwibjEiLCJkMSIsImVhc2VJbk91dEN1YmljIiwicG93IiwiZWFzZUluT3V0U2luZSIsImNvcyIsIlBJIiwiZWFzZUluT3V0UXVpbnQiLCJlYXNlSW5PdXRDaXJjIiwic3FydCIsImVhc2VJbk91dFF1YWQiLCJlYXNlSW5PdXRRdWFydCIsImVhc2VJbk91dEV4cG8iLCJlYXNlSW5PdXRCYWNrIiwiYzEiLCJjMiIsImxhYmVsRGV0YWlsc1NjZW5lRXJyb3IiLCJMYWJlbCIsImJ1dHRvblNjZW5lRXJyb3IiLCJidXR0b25EZXRhaWxzU2NlbmVFcnJvciIsImNvbERldGFpbHNTY2VuZUVycm9yIiwibWVudVNjZW5lRXJyb3IiLCJNZW51IiwidGV4dCIsIkV2ZW50IiwibmFtZSIsImNhbGxiYWNrcyIsIkZQU01ldGVyIiwiZGlzcGxheUZyYW1lcyIsImZyYW1lcyIsImxhc3RGcmFtZSIsImN1cnJlbnRGUFMiLCJpbnRlcnZhbENvdW50RlBTIiwic2V0SW50ZXJ2YWwiLCJjb3VudEZQUyIsIkltYWdlIiwic3JjIiwiZHJhd0ltYWdlIiwiaW1nV2lkdGgiLCJpbWdIZWlnaHQiLCJhc3BlY3RSYXRpbyIsImZsb29yIiwic2l6ZXMiLCJnZXQiLCJJbWFnZUxvYWRlciIsImltYWdlcyIsImltYWdlc1Jlc2l6ZWQiLCJ0cmllZExvYWRpbmciLCJuYkltYWdlc1RvTG9hZCIsImZpcnN0SW1hZ2UiLCJpbWciLCJzaGlmdCIsImxvYWQiLCJvbmxvYWQiLCJvbmVycm9yIiwic2V0VGltZW91dCIsImhhc093blByb3BlcnR5IiwidyIsImgiLCJpZCIsIklucHV0IiwiZGVmYXVsdFRleHQiLCJsYXN0SW5wdXRUZXh0Iiwib2Zmc2V0WCIsImxhc3RUaW1lIiwidG90YWxUaW1lIiwiY2xpY2tDdXJyZW50UG9zaXRpb24iLCJ0ZXh0Q2FjaGUiLCJpbnB1dCIsInNldEF0dHJpYnV0ZSIsImxlZnQiLCJ0YWJJbmRleCIsInZhbHVlIiwicG9zaXRpb25TdGFydCIsInNlbGVjdGlvblN0YXJ0IiwicG9zaXRpb25FbmQiLCJzZWxlY3Rpb25FbmQiLCJib2R5IiwiYXBwZW5kVG9DYW52YXMiLCJub3RpY2VMb2dnZWQiLCJtb3ZlQWN0aW9uQ2FsbGJhY2siLCJpQ2xpY2siLCJnZXRMZXR0ZXJDbGlja2VkIiwicG9zaXRpb25TdGFydENsaWNrIiwic2V0U2VsZWN0aW9uUmFuZ2UiLCJjbGljayIsImJsdXIiLCJwZXJmb3JtYW5jZSIsIm5vdyIsIm9mZnNldFRpbWUiLCJjdHhUZXh0IiwidXBkYXRlVGV4dENhY2hlIiwiYXV0b1Njcm9sbCIsImRyYXdUZXh0IiwiY3VycmVudFgiLCJsZXR0ZXJzIiwieERyYXciLCJ5RHJhdyIsImlzTGV0dGVyVmlzaWJsZSIsImRyYXdIaWdobGlnaHQiLCJmb250Q29sb3IiLCJmb250U2l6ZSIsImZvbnRGYW1pbHkiLCJkcmF3Q3Vyc29yIiwiYmVnaW5QYXRoIiwibW92ZVRvIiwibGluZVRvIiwic3Ryb2tlIiwic2VsZWN0Q29sb3IiLCJ3cmFwVGV4dExpbmVzIiwibGV0dGVyIiwiaXNDbGlja0N1cnJlbnRQb3NpdGlvbiIsImlzQ2xpY2tBZnRlclBvc2l0aW9uIiwiY3VycmVudExldHRlciIsImxldHRlcklkIiwiY3Vyc29yUG9zaXRpb24iLCJjdXJyZW50TGV0dGVyU2l6ZSIsImN1cnNvclBvc2l0aW9uUG9zIiwiY3Vyc29yUG9zaXRpb25OZWciLCJvZmZzZXRYTmVnIiwiZm9jdXMiLCJlbmQiLCJkaXJlY3Rpb24iLCJzaXplc0NhY2hlIiwidXBkYXRlU2l6ZXMiLCJ3cmFwIiwiYm9sZCIsInVuZGVybGluZSIsIkxpbmsiLCJpbml0aWFsQ29sb3IiLCJpbml0aWFsVW5kZXJsaW5lIiwiZm9udENvbG9yRG93biIsImZvbnRDb2xvckhvdmVyIiwibGFzdEtleSIsInVuZGVmaW5lZCIsInNlbGVjdGVkQ29tcG9uZW50IiwiYmx1ckJhY2tncm91bmQiLCJkcmF3Qmx1ciIsImtleUNvZGUiLCJrZXlBY3Rpb24iLCJzZWxlY3QiLCJibHVyQ2FudmFzIiwiaW5kZXgiLCJzZWxlY3RhYmxlQ29tcG9uZW50cyIsImNvbXBhcmVUb01lbnUiLCJOb3RpZmljYXRpb25NZXNzYWdlIiwiZGVsYXlCZWZvcmVDbG9zaW5nIiwiZWFzaW5nRnVuY3Rpb24iLCJ0aW1lTGFzdEZyYW1lIiwiYW5pbWF0aW9uVGltZSIsImNsb3NlZCIsImNsb3NpbmciLCJjbG9zZUJ1dHRvbiIsInNldENsaWNrQWN0aW9uIiwiY2xvc2UiLCJkaXNhYmxlQW5pbWF0aW9uIiwiZW5hYmxlQ2xvc2VCdXR0b24iLCJkaXNhYmxlQ2xvc2VCdXR0b24iLCJvZmZzZXRZIiwiYW5pbWF0aW9uRHVyYXRpb24iLCJjb3B5IiwiZm9yY2VDbG9zZSIsIm9wZW4iLCJjb21wYXJlVG9Ob3RpZmljYXRpb24iLCJQcm9ncmVzc0JhciIsImRlZmF1bHRQZXJjZW50IiwicGVyY2VudCIsImRyYXdGb3JlZ3JvdW5kIiwid2lkdGhGb3JlZ3JvdW5kIiwiYW5pbWF0aW9uUGVyY2VudCIsImZvcmVncm91bmRDb2xvciIsImV2ZW50cyIsImV2ZW50QXJncyIsInJlZ2lzdGVyQ2FsbGJhY2siLCJyZW1vdmVDYWxsYmFjayIsInJlbW92ZUFsbENhbGxiYWNrcyIsInRvdGFsV2lkdGgiLCJjb21wYXJlQ29tcG9uZW50cyIsIlNjcm9sbGJhciIsInNpemUiLCJtYXhXaWR0aFBhcmVudCIsImlubmVyV2lkdGhQYXJlbnQiLCJtYXhIZWlnaHRQYXJlbnQiLCJpbm5lckhlaWdodFBhcmVudCIsImNvbnRlbnRSYXRpb1giLCJjb250ZW50UmF0aW9ZIiwid2luZG93U2Nyb2xsU2l6ZVgiLCJ3aW5kb3dTY3JvbGxTaXplWSIsImNvbXBhcmVUb1Njcm9sbGJhciIsInBlcmNlbnRTY3JvbGxiYXJOZXh0IiwibmV3RGVsdGFYIiwibmV3RGVsdGFZIiwiU2VsZWN0Iiwib3B0aW9uQ29udGFpbmVyIiwiZGVmYXVsdE9wdGlvbiIsInNlbGVjdGVkT3B0aW9uIiwibGFiZWwiLCJ0cmlhbmdsZSIsIlRyaWFuZ2xlIiwidXBkYXRlV2lkdGgiLCJTZWxlY3RPcHRpb24iLCJkZWZhdWx0TGFiZWwiLCJTZWxlY3REcm9wZG93biIsIm1heEhlaWdodERyb3Bkb3duIiwib3B0aW9ucyIsInNlbGVjdEhlaWdodCIsImdldENvbXBvbmVudElkIiwic3R5bGVzIiwiVG9vbHRpcCIsImNvbXBhcmVUb1Rvb2x0aXAiLCJkcmF3VHJpYW5nbGUiLCJwcmVSZW5kZXJlZEZvbnQiLCJwcmVSZW5kZXJGb250IiwiY2FycyIsImN0eFRtcCIsImZvbnQiLCJtZWFzdXJlVGV4dCIsInRleHRCYXNlbGluZSIsImZpbGxUZXh0Iiwic3giLCJzeSIsInNXaWR0aCIsInNIZWlnaHQiLCJlcmFzZUJlbG93IiwiZGVncmVlcyIsImRyYXdJbWFnZVdyYXBwZXIiLCJpbWFnZURhdGEiLCJpc05hTiIsInRyYW5zbGF0ZSIsInJvdGF0ZSIsImNsZWFyUmVjdCIsIkFycmF5IiwiaXNBcnJheSIsImxpbmVzIiwic3BsaXQiLCJ4Q3VycmVudCIsInlDdXJyZW50IiwieUZpcnN0IiwiY3VycmVudFRleHQiLCJjdXJyZW50V2lkdGgiLCJjb2xvckluZGV4Iiwid3JhcFRleHQiLCJsaW1pdCIsInAiLCJzdWJzdHJpbmciLCJyaWdodCIsImRpc2FibGVXcmFwIiwiaW1hZ2VTbW9vdGhpbmdFbmFibGVkIiwibmV3VGV4dCIsIndpZHRoQ2FyIiwibmJDYXJMaW5lIiwiaGVpZ2h0VG90YWwiLCJsaW5lV3JhcCIsImoiLCJ3aWR0aFRleHQiLCJjYXJXaWR0aCIsImZyb214IiwiZnJvbXkiLCJ0b3giLCJ0b3kiLCJoZWFkbGVuIiwiZHgiLCJkeSIsImFuZ2xlIiwiYXRhbjIiLCJzaW4iLCJyYWRpdXMiLCJhcmMiLCJpc0ZpbHRlckh1ZUF2YWlsYWJsZSIsImdldEltYWdlRGF0YSIsImRhdGEiLCJwYXJzZU51bWJlciIsInN0ciIsInBhcnNlSW50IiwibWF0Y2giLCJnZXRGb250U2l6ZSIsInJlY3QiLCJnZXRCb3VuZGluZ0NsaWVudFJlY3QiLCJhdXRvUmVzaXplQ2FudmFzIiwiaW5pdGlhbFdpZHRoIiwiaW5pdGlhbEhlaWdodCIsImRvY3VtZW50RWxlbWVudCIsImNsaWVudFdpZHRoIiwicmF0aW8iLCJnZXRBdHRyaWJ1dGUiLCJhdXRvUmVzaXplQ2FudmFzRnVsbHNjcmVlbiIsImVuYWJsZUF1dG9SZXNpemVDYW52YXNGdWxsc2NyZWVuIiwiYXV0b1Jlc2l6ZUNhbnZhc0Z1bGxwYWdlIiwibWFyZ2luIiwiZW5hYmxlQXV0b1Jlc2l6ZUNhbnZhc0Z1bGxwYWdlIiwicmVxdWVzdEZ1bGxzY3JlZW4iLCJtb3pSZXF1ZXN0RnVsbFNjcmVlbiIsIndlYmtpdFJlcXVlc3RGdWxsc2NyZWVuIiwibXNSZXF1ZXN0RnVsbHNjcmVlbiIsIm9SZXF1ZXN0RnVsbHNjcmVlbiIsImV4aXRGdWxsc2NyZWVuIiwib25mdWxsc2NyZWVuY2hhbmdlIiwib25tc2Z1bGxzY3JlZW5jaGFuZ2UiLCJvbm1vemZ1bGxzY3JlZW5jaGFuZ2UiLCJvbndlYmtpdGZ1bGxzY3JlZW5jaGFuZ2UiLCJvbm9raXRmdWxsc2NyZWVuY2hhbmdlIiwib25vZnVsbHNjcmVlbmNoYW5nZSIsImNsaWVudFgiLCJjbGllbnRZIiwidG9wIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0QsTztRQ1ZBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EseUNBQXlDLGlDQUFpQztR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QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoiSlNHYW1lVG9vbHMuZGV2LmpzIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIHdlYnBhY2tVbml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uKHJvb3QsIGZhY3RvcnkpIHtcblx0aWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnICYmIHR5cGVvZiBtb2R1bGUgPT09ICdvYmplY3QnKVxuXHRcdG1vZHVsZS5leHBvcnRzID0gZmFjdG9yeSgpO1xuXHRlbHNlIGlmKHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZClcblx0XHRkZWZpbmUoW10sIGZhY3RvcnkpO1xuXHRlbHNlIGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0Jylcblx0XHRleHBvcnRzW1wiSlNHYW1lVG9vbHNcIl0gPSBmYWN0b3J5KCk7XG5cdGVsc2Vcblx0XHRyb290W1wiSlNHYW1lVG9vbHNcIl0gPSBmYWN0b3J5KCk7XG59KSh0eXBlb2Ygc2VsZiAhPT0gXCJ1bmRlZmluZWRcIiA/IHNlbGYgOiB0aGlzLCBmdW5jdGlvbigpIHtcbnJldHVybiAiLCIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3NyYy9pbmRleC5qc1wiKTtcbiIsImZ1bmN0aW9uIF9hcnJheUxpa2VUb0FycmF5KGFyciwgbGVuKSB7XG4gIGlmIChsZW4gPT0gbnVsbCB8fCBsZW4gPiBhcnIubGVuZ3RoKSBsZW4gPSBhcnIubGVuZ3RoO1xuXG4gIGZvciAodmFyIGkgPSAwLCBhcnIyID0gbmV3IEFycmF5KGxlbik7IGkgPCBsZW47IGkrKykge1xuICAgIGFycjJbaV0gPSBhcnJbaV07XG4gIH1cblxuICByZXR1cm4gYXJyMjtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfYXJyYXlMaWtlVG9BcnJheTsiLCJ2YXIgYXJyYXlMaWtlVG9BcnJheSA9IHJlcXVpcmUoXCIuL2FycmF5TGlrZVRvQXJyYXlcIik7XG5cbmZ1bmN0aW9uIF9hcnJheVdpdGhvdXRIb2xlcyhhcnIpIHtcbiAgaWYgKEFycmF5LmlzQXJyYXkoYXJyKSkgcmV0dXJuIGFycmF5TGlrZVRvQXJyYXkoYXJyKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfYXJyYXlXaXRob3V0SG9sZXM7IiwiZnVuY3Rpb24gX2Fzc2VydFRoaXNJbml0aWFsaXplZChzZWxmKSB7XG4gIGlmIChzZWxmID09PSB2b2lkIDApIHtcbiAgICB0aHJvdyBuZXcgUmVmZXJlbmNlRXJyb3IoXCJ0aGlzIGhhc24ndCBiZWVuIGluaXRpYWxpc2VkIC0gc3VwZXIoKSBoYXNuJ3QgYmVlbiBjYWxsZWRcIik7XG4gIH1cblxuICByZXR1cm4gc2VsZjtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfYXNzZXJ0VGhpc0luaXRpYWxpemVkOyIsImZ1bmN0aW9uIF9jbGFzc0NhbGxDaGVjayhpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHtcbiAgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHtcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXCIpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX2NsYXNzQ2FsbENoZWNrOyIsImZ1bmN0aW9uIF9jbGFzc1ByaXZhdGVGaWVsZEdldChyZWNlaXZlciwgcHJpdmF0ZU1hcCkge1xuICB2YXIgZGVzY3JpcHRvciA9IHByaXZhdGVNYXAuZ2V0KHJlY2VpdmVyKTtcblxuICBpZiAoIWRlc2NyaXB0b3IpIHtcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiYXR0ZW1wdGVkIHRvIGdldCBwcml2YXRlIGZpZWxkIG9uIG5vbi1pbnN0YW5jZVwiKTtcbiAgfVxuXG4gIGlmIChkZXNjcmlwdG9yLmdldCkge1xuICAgIHJldHVybiBkZXNjcmlwdG9yLmdldC5jYWxsKHJlY2VpdmVyKTtcbiAgfVxuXG4gIHJldHVybiBkZXNjcmlwdG9yLnZhbHVlO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9jbGFzc1ByaXZhdGVGaWVsZEdldDsiLCJmdW5jdGlvbiBfY2xhc3NQcml2YXRlRmllbGRTZXQocmVjZWl2ZXIsIHByaXZhdGVNYXAsIHZhbHVlKSB7XG4gIHZhciBkZXNjcmlwdG9yID0gcHJpdmF0ZU1hcC5nZXQocmVjZWl2ZXIpO1xuXG4gIGlmICghZGVzY3JpcHRvcikge1xuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJhdHRlbXB0ZWQgdG8gc2V0IHByaXZhdGUgZmllbGQgb24gbm9uLWluc3RhbmNlXCIpO1xuICB9XG5cbiAgaWYgKGRlc2NyaXB0b3Iuc2V0KSB7XG4gICAgZGVzY3JpcHRvci5zZXQuY2FsbChyZWNlaXZlciwgdmFsdWUpO1xuICB9IGVsc2Uge1xuICAgIGlmICghZGVzY3JpcHRvci53cml0YWJsZSkge1xuICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcImF0dGVtcHRlZCB0byBzZXQgcmVhZCBvbmx5IHByaXZhdGUgZmllbGRcIik7XG4gICAgfVxuXG4gICAgZGVzY3JpcHRvci52YWx1ZSA9IHZhbHVlO1xuICB9XG5cbiAgcmV0dXJuIHZhbHVlO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9jbGFzc1ByaXZhdGVGaWVsZFNldDsiLCJ2YXIgc2V0UHJvdG90eXBlT2YgPSByZXF1aXJlKFwiLi9zZXRQcm90b3R5cGVPZlwiKTtcblxudmFyIGlzTmF0aXZlUmVmbGVjdENvbnN0cnVjdCA9IHJlcXVpcmUoXCIuL2lzTmF0aXZlUmVmbGVjdENvbnN0cnVjdFwiKTtcblxuZnVuY3Rpb24gX2NvbnN0cnVjdChQYXJlbnQsIGFyZ3MsIENsYXNzKSB7XG4gIGlmIChpc05hdGl2ZVJlZmxlY3RDb25zdHJ1Y3QoKSkge1xuICAgIG1vZHVsZS5leHBvcnRzID0gX2NvbnN0cnVjdCA9IFJlZmxlY3QuY29uc3RydWN0O1xuICB9IGVsc2Uge1xuICAgIG1vZHVsZS5leHBvcnRzID0gX2NvbnN0cnVjdCA9IGZ1bmN0aW9uIF9jb25zdHJ1Y3QoUGFyZW50LCBhcmdzLCBDbGFzcykge1xuICAgICAgdmFyIGEgPSBbbnVsbF07XG4gICAgICBhLnB1c2guYXBwbHkoYSwgYXJncyk7XG4gICAgICB2YXIgQ29uc3RydWN0b3IgPSBGdW5jdGlvbi5iaW5kLmFwcGx5KFBhcmVudCwgYSk7XG4gICAgICB2YXIgaW5zdGFuY2UgPSBuZXcgQ29uc3RydWN0b3IoKTtcbiAgICAgIGlmIChDbGFzcykgc2V0UHJvdG90eXBlT2YoaW5zdGFuY2UsIENsYXNzLnByb3RvdHlwZSk7XG4gICAgICByZXR1cm4gaW5zdGFuY2U7XG4gICAgfTtcbiAgfVxuXG4gIHJldHVybiBfY29uc3RydWN0LmFwcGx5KG51bGwsIGFyZ3VtZW50cyk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX2NvbnN0cnVjdDsiLCJmdW5jdGlvbiBfZGVmaW5lUHJvcGVydGllcyh0YXJnZXQsIHByb3BzKSB7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgcHJvcHMubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgZGVzY3JpcHRvciA9IHByb3BzW2ldO1xuICAgIGRlc2NyaXB0b3IuZW51bWVyYWJsZSA9IGRlc2NyaXB0b3IuZW51bWVyYWJsZSB8fCBmYWxzZTtcbiAgICBkZXNjcmlwdG9yLmNvbmZpZ3VyYWJsZSA9IHRydWU7XG4gICAgaWYgKFwidmFsdWVcIiBpbiBkZXNjcmlwdG9yKSBkZXNjcmlwdG9yLndyaXRhYmxlID0gdHJ1ZTtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBkZXNjcmlwdG9yLmtleSwgZGVzY3JpcHRvcik7XG4gIH1cbn1cblxuZnVuY3Rpb24gX2NyZWF0ZUNsYXNzKENvbnN0cnVjdG9yLCBwcm90b1Byb3BzLCBzdGF0aWNQcm9wcykge1xuICBpZiAocHJvdG9Qcm9wcykgX2RlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IucHJvdG90eXBlLCBwcm90b1Byb3BzKTtcbiAgaWYgKHN0YXRpY1Byb3BzKSBfZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvciwgc3RhdGljUHJvcHMpO1xuICByZXR1cm4gQ29uc3RydWN0b3I7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX2NyZWF0ZUNsYXNzOyIsImZ1bmN0aW9uIF9kZWZpbmVQcm9wZXJ0eShvYmosIGtleSwgdmFsdWUpIHtcbiAgaWYgKGtleSBpbiBvYmopIHtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkob2JqLCBrZXksIHtcbiAgICAgIHZhbHVlOiB2YWx1ZSxcbiAgICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgICBjb25maWd1cmFibGU6IHRydWUsXG4gICAgICB3cml0YWJsZTogdHJ1ZVxuICAgIH0pO1xuICB9IGVsc2Uge1xuICAgIG9ialtrZXldID0gdmFsdWU7XG4gIH1cblxuICByZXR1cm4gb2JqO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9kZWZpbmVQcm9wZXJ0eTsiLCJ2YXIgc3VwZXJQcm9wQmFzZSA9IHJlcXVpcmUoXCIuL3N1cGVyUHJvcEJhc2VcIik7XG5cbmZ1bmN0aW9uIF9nZXQodGFyZ2V0LCBwcm9wZXJ0eSwgcmVjZWl2ZXIpIHtcbiAgaWYgKHR5cGVvZiBSZWZsZWN0ICE9PSBcInVuZGVmaW5lZFwiICYmIFJlZmxlY3QuZ2V0KSB7XG4gICAgbW9kdWxlLmV4cG9ydHMgPSBfZ2V0ID0gUmVmbGVjdC5nZXQ7XG4gIH0gZWxzZSB7XG4gICAgbW9kdWxlLmV4cG9ydHMgPSBfZ2V0ID0gZnVuY3Rpb24gX2dldCh0YXJnZXQsIHByb3BlcnR5LCByZWNlaXZlcikge1xuICAgICAgdmFyIGJhc2UgPSBzdXBlclByb3BCYXNlKHRhcmdldCwgcHJvcGVydHkpO1xuICAgICAgaWYgKCFiYXNlKSByZXR1cm47XG4gICAgICB2YXIgZGVzYyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IoYmFzZSwgcHJvcGVydHkpO1xuXG4gICAgICBpZiAoZGVzYy5nZXQpIHtcbiAgICAgICAgcmV0dXJuIGRlc2MuZ2V0LmNhbGwocmVjZWl2ZXIpO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gZGVzYy52YWx1ZTtcbiAgICB9O1xuICB9XG5cbiAgcmV0dXJuIF9nZXQodGFyZ2V0LCBwcm9wZXJ0eSwgcmVjZWl2ZXIgfHwgdGFyZ2V0KTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfZ2V0OyIsImZ1bmN0aW9uIF9nZXRQcm90b3R5cGVPZihvKSB7XG4gIG1vZHVsZS5leHBvcnRzID0gX2dldFByb3RvdHlwZU9mID0gT2JqZWN0LnNldFByb3RvdHlwZU9mID8gT2JqZWN0LmdldFByb3RvdHlwZU9mIDogZnVuY3Rpb24gX2dldFByb3RvdHlwZU9mKG8pIHtcbiAgICByZXR1cm4gby5fX3Byb3RvX18gfHwgT2JqZWN0LmdldFByb3RvdHlwZU9mKG8pO1xuICB9O1xuICByZXR1cm4gX2dldFByb3RvdHlwZU9mKG8pO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9nZXRQcm90b3R5cGVPZjsiLCJ2YXIgc2V0UHJvdG90eXBlT2YgPSByZXF1aXJlKFwiLi9zZXRQcm90b3R5cGVPZlwiKTtcblxuZnVuY3Rpb24gX2luaGVyaXRzKHN1YkNsYXNzLCBzdXBlckNsYXNzKSB7XG4gIGlmICh0eXBlb2Ygc3VwZXJDbGFzcyAhPT0gXCJmdW5jdGlvblwiICYmIHN1cGVyQ2xhc3MgIT09IG51bGwpIHtcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiU3VwZXIgZXhwcmVzc2lvbiBtdXN0IGVpdGhlciBiZSBudWxsIG9yIGEgZnVuY3Rpb25cIik7XG4gIH1cblxuICBzdWJDbGFzcy5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKHN1cGVyQ2xhc3MgJiYgc3VwZXJDbGFzcy5wcm90b3R5cGUsIHtcbiAgICBjb25zdHJ1Y3Rvcjoge1xuICAgICAgdmFsdWU6IHN1YkNsYXNzLFxuICAgICAgd3JpdGFibGU6IHRydWUsXG4gICAgICBjb25maWd1cmFibGU6IHRydWVcbiAgICB9XG4gIH0pO1xuICBpZiAoc3VwZXJDbGFzcykgc2V0UHJvdG90eXBlT2Yoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9pbmhlcml0czsiLCJmdW5jdGlvbiBfaXNOYXRpdmVSZWZsZWN0Q29uc3RydWN0KCkge1xuICBpZiAodHlwZW9mIFJlZmxlY3QgPT09IFwidW5kZWZpbmVkXCIgfHwgIVJlZmxlY3QuY29uc3RydWN0KSByZXR1cm4gZmFsc2U7XG4gIGlmIChSZWZsZWN0LmNvbnN0cnVjdC5zaGFtKSByZXR1cm4gZmFsc2U7XG4gIGlmICh0eXBlb2YgUHJveHkgPT09IFwiZnVuY3Rpb25cIikgcmV0dXJuIHRydWU7XG5cbiAgdHJ5IHtcbiAgICBEYXRlLnByb3RvdHlwZS50b1N0cmluZy5jYWxsKFJlZmxlY3QuY29uc3RydWN0KERhdGUsIFtdLCBmdW5jdGlvbiAoKSB7fSkpO1xuICAgIHJldHVybiB0cnVlO1xuICB9IGNhdGNoIChlKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX2lzTmF0aXZlUmVmbGVjdENvbnN0cnVjdDsiLCJmdW5jdGlvbiBfaXRlcmFibGVUb0FycmF5KGl0ZXIpIHtcbiAgaWYgKHR5cGVvZiBTeW1ib2wgIT09IFwidW5kZWZpbmVkXCIgJiYgU3ltYm9sLml0ZXJhdG9yIGluIE9iamVjdChpdGVyKSkgcmV0dXJuIEFycmF5LmZyb20oaXRlcik7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX2l0ZXJhYmxlVG9BcnJheTsiLCJmdW5jdGlvbiBfbm9uSXRlcmFibGVTcHJlYWQoKSB7XG4gIHRocm93IG5ldyBUeXBlRXJyb3IoXCJJbnZhbGlkIGF0dGVtcHQgdG8gc3ByZWFkIG5vbi1pdGVyYWJsZSBpbnN0YW5jZS5cXG5JbiBvcmRlciB0byBiZSBpdGVyYWJsZSwgbm9uLWFycmF5IG9iamVjdHMgbXVzdCBoYXZlIGEgW1N5bWJvbC5pdGVyYXRvcl0oKSBtZXRob2QuXCIpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9ub25JdGVyYWJsZVNwcmVhZDsiLCJ2YXIgX3R5cGVvZiA9IHJlcXVpcmUoXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL3R5cGVvZlwiKTtcblxudmFyIGFzc2VydFRoaXNJbml0aWFsaXplZCA9IHJlcXVpcmUoXCIuL2Fzc2VydFRoaXNJbml0aWFsaXplZFwiKTtcblxuZnVuY3Rpb24gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4oc2VsZiwgY2FsbCkge1xuICBpZiAoY2FsbCAmJiAoX3R5cGVvZihjYWxsKSA9PT0gXCJvYmplY3RcIiB8fCB0eXBlb2YgY2FsbCA9PT0gXCJmdW5jdGlvblwiKSkge1xuICAgIHJldHVybiBjYWxsO1xuICB9XG5cbiAgcmV0dXJuIGFzc2VydFRoaXNJbml0aWFsaXplZChzZWxmKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybjsiLCJ2YXIgc3VwZXJQcm9wQmFzZSA9IHJlcXVpcmUoXCIuL3N1cGVyUHJvcEJhc2VcIik7XG5cbnZhciBkZWZpbmVQcm9wZXJ0eSA9IHJlcXVpcmUoXCIuL2RlZmluZVByb3BlcnR5XCIpO1xuXG5mdW5jdGlvbiBzZXQodGFyZ2V0LCBwcm9wZXJ0eSwgdmFsdWUsIHJlY2VpdmVyKSB7XG4gIGlmICh0eXBlb2YgUmVmbGVjdCAhPT0gXCJ1bmRlZmluZWRcIiAmJiBSZWZsZWN0LnNldCkge1xuICAgIHNldCA9IFJlZmxlY3Quc2V0O1xuICB9IGVsc2Uge1xuICAgIHNldCA9IGZ1bmN0aW9uIHNldCh0YXJnZXQsIHByb3BlcnR5LCB2YWx1ZSwgcmVjZWl2ZXIpIHtcbiAgICAgIHZhciBiYXNlID0gc3VwZXJQcm9wQmFzZSh0YXJnZXQsIHByb3BlcnR5KTtcbiAgICAgIHZhciBkZXNjO1xuXG4gICAgICBpZiAoYmFzZSkge1xuICAgICAgICBkZXNjID0gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihiYXNlLCBwcm9wZXJ0eSk7XG5cbiAgICAgICAgaWYgKGRlc2Muc2V0KSB7XG4gICAgICAgICAgZGVzYy5zZXQuY2FsbChyZWNlaXZlciwgdmFsdWUpO1xuICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9IGVsc2UgaWYgKCFkZXNjLndyaXRhYmxlKSB7XG4gICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGRlc2MgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKHJlY2VpdmVyLCBwcm9wZXJ0eSk7XG5cbiAgICAgIGlmIChkZXNjKSB7XG4gICAgICAgIGlmICghZGVzYy53cml0YWJsZSkge1xuICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuXG4gICAgICAgIGRlc2MudmFsdWUgPSB2YWx1ZTtcbiAgICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KHJlY2VpdmVyLCBwcm9wZXJ0eSwgZGVzYyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBkZWZpbmVQcm9wZXJ0eShyZWNlaXZlciwgcHJvcGVydHksIHZhbHVlKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfTtcbiAgfVxuXG4gIHJldHVybiBzZXQodGFyZ2V0LCBwcm9wZXJ0eSwgdmFsdWUsIHJlY2VpdmVyKTtcbn1cblxuZnVuY3Rpb24gX3NldCh0YXJnZXQsIHByb3BlcnR5LCB2YWx1ZSwgcmVjZWl2ZXIsIGlzU3RyaWN0KSB7XG4gIHZhciBzID0gc2V0KHRhcmdldCwgcHJvcGVydHksIHZhbHVlLCByZWNlaXZlciB8fCB0YXJnZXQpO1xuXG4gIGlmICghcyAmJiBpc1N0cmljdCkge1xuICAgIHRocm93IG5ldyBFcnJvcignZmFpbGVkIHRvIHNldCBwcm9wZXJ0eScpO1xuICB9XG5cbiAgcmV0dXJuIHZhbHVlO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9zZXQ7IiwiZnVuY3Rpb24gX3NldFByb3RvdHlwZU9mKG8sIHApIHtcbiAgbW9kdWxlLmV4cG9ydHMgPSBfc2V0UHJvdG90eXBlT2YgPSBPYmplY3Quc2V0UHJvdG90eXBlT2YgfHwgZnVuY3Rpb24gX3NldFByb3RvdHlwZU9mKG8sIHApIHtcbiAgICBvLl9fcHJvdG9fXyA9IHA7XG4gICAgcmV0dXJuIG87XG4gIH07XG5cbiAgcmV0dXJuIF9zZXRQcm90b3R5cGVPZihvLCBwKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfc2V0UHJvdG90eXBlT2Y7IiwidmFyIGdldFByb3RvdHlwZU9mID0gcmVxdWlyZShcIi4vZ2V0UHJvdG90eXBlT2ZcIik7XG5cbmZ1bmN0aW9uIF9zdXBlclByb3BCYXNlKG9iamVjdCwgcHJvcGVydHkpIHtcbiAgd2hpbGUgKCFPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSkpIHtcbiAgICBvYmplY3QgPSBnZXRQcm90b3R5cGVPZihvYmplY3QpO1xuICAgIGlmIChvYmplY3QgPT09IG51bGwpIGJyZWFrO1xuICB9XG5cbiAgcmV0dXJuIG9iamVjdDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfc3VwZXJQcm9wQmFzZTsiLCJ2YXIgYXJyYXlXaXRob3V0SG9sZXMgPSByZXF1aXJlKFwiLi9hcnJheVdpdGhvdXRIb2xlc1wiKTtcblxudmFyIGl0ZXJhYmxlVG9BcnJheSA9IHJlcXVpcmUoXCIuL2l0ZXJhYmxlVG9BcnJheVwiKTtcblxudmFyIHVuc3VwcG9ydGVkSXRlcmFibGVUb0FycmF5ID0gcmVxdWlyZShcIi4vdW5zdXBwb3J0ZWRJdGVyYWJsZVRvQXJyYXlcIik7XG5cbnZhciBub25JdGVyYWJsZVNwcmVhZCA9IHJlcXVpcmUoXCIuL25vbkl0ZXJhYmxlU3ByZWFkXCIpO1xuXG5mdW5jdGlvbiBfdG9Db25zdW1hYmxlQXJyYXkoYXJyKSB7XG4gIHJldHVybiBhcnJheVdpdGhvdXRIb2xlcyhhcnIpIHx8IGl0ZXJhYmxlVG9BcnJheShhcnIpIHx8IHVuc3VwcG9ydGVkSXRlcmFibGVUb0FycmF5KGFycikgfHwgbm9uSXRlcmFibGVTcHJlYWQoKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfdG9Db25zdW1hYmxlQXJyYXk7IiwiZnVuY3Rpb24gX3R5cGVvZihvYmopIHtcbiAgXCJAYmFiZWwvaGVscGVycyAtIHR5cGVvZlwiO1xuXG4gIGlmICh0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgdHlwZW9mIFN5bWJvbC5pdGVyYXRvciA9PT0gXCJzeW1ib2xcIikge1xuICAgIG1vZHVsZS5leHBvcnRzID0gX3R5cGVvZiA9IGZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7XG4gICAgICByZXR1cm4gdHlwZW9mIG9iajtcbiAgICB9O1xuICB9IGVsc2Uge1xuICAgIG1vZHVsZS5leHBvcnRzID0gX3R5cGVvZiA9IGZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7XG4gICAgICByZXR1cm4gb2JqICYmIHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiBvYmouY29uc3RydWN0b3IgPT09IFN5bWJvbCAmJiBvYmogIT09IFN5bWJvbC5wcm90b3R5cGUgPyBcInN5bWJvbFwiIDogdHlwZW9mIG9iajtcbiAgICB9O1xuICB9XG5cbiAgcmV0dXJuIF90eXBlb2Yob2JqKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfdHlwZW9mOyIsInZhciBhcnJheUxpa2VUb0FycmF5ID0gcmVxdWlyZShcIi4vYXJyYXlMaWtlVG9BcnJheVwiKTtcblxuZnVuY3Rpb24gX3Vuc3VwcG9ydGVkSXRlcmFibGVUb0FycmF5KG8sIG1pbkxlbikge1xuICBpZiAoIW8pIHJldHVybjtcbiAgaWYgKHR5cGVvZiBvID09PSBcInN0cmluZ1wiKSByZXR1cm4gYXJyYXlMaWtlVG9BcnJheShvLCBtaW5MZW4pO1xuICB2YXIgbiA9IE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChvKS5zbGljZSg4LCAtMSk7XG4gIGlmIChuID09PSBcIk9iamVjdFwiICYmIG8uY29uc3RydWN0b3IpIG4gPSBvLmNvbnN0cnVjdG9yLm5hbWU7XG4gIGlmIChuID09PSBcIk1hcFwiIHx8IG4gPT09IFwiU2V0XCIpIHJldHVybiBBcnJheS5mcm9tKG8pO1xuICBpZiAobiA9PT0gXCJBcmd1bWVudHNcIiB8fCAvXig/OlVpfEkpbnQoPzo4fDE2fDMyKSg/OkNsYW1wZWQpP0FycmF5JC8udGVzdChuKSkgcmV0dXJuIGFycmF5TGlrZVRvQXJyYXkobywgbWluTGVuKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfdW5zdXBwb3J0ZWRJdGVyYWJsZVRvQXJyYXk7IiwiLypcbiAqIENvcHlyaWdodCAoQykgMjAyMCBFbGlhc3RpayAoZWxpYXN0aWtzb2Z0cy5jb20pXG4gKlxuICogVGhpcyBmaWxlIGlzIHBhcnQgb2YgXCJKU0dhbWVUb29sc1wiLlxuICpcbiAqIFwiSlNHYW1lVG9vbHNcIiBpcyBmcmVlIHNvZnR3YXJlOiB5b3UgY2FuIHJlZGlzdHJpYnV0ZSBpdCBhbmQvb3IgbW9kaWZ5XG4gKiBpdCB1bmRlciB0aGUgdGVybXMgb2YgdGhlIEdOVSBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlIGFzIHB1Ymxpc2hlZCBieVxuICogdGhlIEZyZWUgU29mdHdhcmUgRm91bmRhdGlvbiwgZWl0aGVyIHZlcnNpb24gMyBvZiB0aGUgTGljZW5zZSwgb3JcbiAqIChhdCB5b3VyIG9wdGlvbikgYW55IGxhdGVyIHZlcnNpb24uXG4gKlxuICogXCJKU0dhbWVUb29sc1wiIGlzIGRpc3RyaWJ1dGVkIGluIHRoZSBob3BlIHRoYXQgaXQgd2lsbCBiZSB1c2VmdWwsXG4gKiBidXQgV0lUSE9VVCBBTlkgV0FSUkFOVFk7IHdpdGhvdXQgZXZlbiB0aGUgaW1wbGllZCB3YXJyYW50eSBvZlxuICogTUVSQ0hBTlRBQklMSVRZIG9yIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFLiAgU2VlIHRoZVxuICogR05VIEdlbmVyYWwgUHVibGljIExpY2Vuc2UgZm9yIG1vcmUgZGV0YWlscy5cbiAqXG4gKiBZb3Ugc2hvdWxkIGhhdmUgcmVjZWl2ZWQgYSBjb3B5IG9mIHRoZSBHTlUgR2VuZXJhbCBQdWJsaWMgTGljZW5zZVxuICogYWxvbmcgd2l0aCBcIkpTR2FtZVRvb2xzXCIuICBJZiBub3QsIHNlZSA8aHR0cDovL3d3dy5nbnUub3JnL2xpY2Vuc2VzLz4uXG4gKi9cbmltcG9ydCBDb21wb25lbnQgZnJvbSBcIi4vQ29tcG9uZW50XCI7XG5pbXBvcnQgQ29uc3RhbnRzIGZyb20gXCIuL0NvbnN0YW50c1wiO1xuaW1wb3J0IFN0eWxlIGZyb20gXCIuL1N0eWxlXCI7XG5pbXBvcnQgVXRpbHMgZnJvbSBcIi4vVXRpbHNcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQXJyb3cgZXh0ZW5kcyBDb21wb25lbnQge1xuICBzZWxlY3RhYmxlID0gZmFsc2U7XG5cbiAgY29uc3RydWN0b3IoeCwgeSwgdG9YLCB0b1ksIHN0eWxlKSB7XG4gICAgc3VwZXIoeCwgeSwgbnVsbCwgbnVsbCwgc3R5bGUpO1xuXG4gICAgdGhpcy50b1ggPSB0b1g7XG4gICAgdGhpcy50b1kgPSB0b1k7XG4gIH1cblxuICBkcmF3KGNvbnRleHQpIHtcbiAgICBpZih0aGlzLmhpZGRlbikgcmV0dXJuO1xuICAgIHN1cGVyLmRyYXcoY29udGV4dCk7XG5cbiAgICBjb25zdCBjYW52YXMgPSBjb250ZXh0LmNhbnZhcztcbiAgICBjb25zdCBjdHggPSBjYW52YXMuZ2V0Q29udGV4dChcIjJkXCIpO1xuICAgIFxuICAgIFV0aWxzLmRyYXdBcnJvdyhjdHgsIHRoaXMueCwgdGhpcy55LCB0aGlzLnRvWCwgdGhpcy50b1ksIHRoaXMuc3R5bGUubGluZVdpZHRoLCB0aGlzLnN0eWxlLmhlYWRTaXplLCB0aGlzLnN0eWxlLmNvbG9yLCB0aGlzLnN0eWxlLmxpbmVDYXApO1xuXG4gICAgdGhpcy5pbml0ID0gdHJ1ZTtcbiAgfVxuXG4gIGdldCB3aWR0aCgpIHtcbiAgICByZXR1cm4gTWF0aC5hYnModGhpcy54IC0gdGhpcy50b1gpO1xuICB9XG5cbiAgZ2V0IGhlaWdodCgpIHtcbiAgICByZXR1cm4gTWF0aC5hYnModGhpcy55IC0gdGhpcy50b1kpO1xuICB9XG5cbiAgZ2V0IGRlZmF1bHRTdHlsZSgpIHtcbiAgICByZXR1cm4gbmV3IFN0eWxlKHtcbiAgICAgIFwibGluZVdpZHRoXCI6IENvbnN0YW50cy5TZXR0aW5nLkFSUk9XX0RFRkFVTFRfTElORV9TSVpFLFxuICAgICAgXCJoZWFkU2l6ZVwiOiBDb25zdGFudHMuU2V0dGluZy5BUlJPV19ERUZBVUxUX0hFQURfU0laRSxcbiAgICAgIFwiY29sb3JcIjogQ29uc3RhbnRzLlNldHRpbmcuQVJST1dfREVGQVVMVF9DT0xPUixcbiAgICAgIFwibGluZUNhcFwiOiBDb25zdGFudHMuU2V0dGluZy5BUlJPV19ERUZBVUxUX0xJTkVfQ0FQXG4gICAgfSk7XG4gIH1cbn0iLCIvKlxuICogQ29weXJpZ2h0IChDKSAyMDIwIEVsaWFzdGlrIChlbGlhc3Rpa3NvZnRzLmNvbSlcbiAqXG4gKiBUaGlzIGZpbGUgaXMgcGFydCBvZiBcIkpTR2FtZVRvb2xzXCIuXG4gKlxuICogXCJKU0dhbWVUb29sc1wiIGlzIGZyZWUgc29mdHdhcmU6IHlvdSBjYW4gcmVkaXN0cmlidXRlIGl0IGFuZC9vciBtb2RpZnlcbiAqIGl0IHVuZGVyIHRoZSB0ZXJtcyBvZiB0aGUgR05VIEdlbmVyYWwgUHVibGljIExpY2Vuc2UgYXMgcHVibGlzaGVkIGJ5XG4gKiB0aGUgRnJlZSBTb2Z0d2FyZSBGb3VuZGF0aW9uLCBlaXRoZXIgdmVyc2lvbiAzIG9mIHRoZSBMaWNlbnNlLCBvclxuICogKGF0IHlvdXIgb3B0aW9uKSBhbnkgbGF0ZXIgdmVyc2lvbi5cbiAqXG4gKiBcIkpTR2FtZVRvb2xzXCIgaXMgZGlzdHJpYnV0ZWQgaW4gdGhlIGhvcGUgdGhhdCBpdCB3aWxsIGJlIHVzZWZ1bCxcbiAqIGJ1dCBXSVRIT1VUIEFOWSBXQVJSQU5UWTsgd2l0aG91dCBldmVuIHRoZSBpbXBsaWVkIHdhcnJhbnR5IG9mXG4gKiBNRVJDSEFOVEFCSUxJVFkgb3IgRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UuICBTZWUgdGhlXG4gKiBHTlUgR2VuZXJhbCBQdWJsaWMgTGljZW5zZSBmb3IgbW9yZSBkZXRhaWxzLlxuICpcbiAqIFlvdSBzaG91bGQgaGF2ZSByZWNlaXZlZCBhIGNvcHkgb2YgdGhlIEdOVSBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlXG4gKiBhbG9uZyB3aXRoIFwiSlNHYW1lVG9vbHNcIi4gIElmIG5vdCwgc2VlIDxodHRwOi8vd3d3LmdudS5vcmcvbGljZW5zZXMvPi5cbiAqL1xuaW1wb3J0IENvbXBvbmVudCBmcm9tIFwiLi9Db21wb25lbnRcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQm94IGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgc2VsZWN0YWJsZSA9IGZhbHNlO1xuXG4gIGNvbnN0cnVjdG9yKHgsIHksIHdpZHRoLCBoZWlnaHQsIHN0eWxlKSB7XG4gICAgc3VwZXIoeCwgeSwgd2lkdGgsIGhlaWdodCwgc3R5bGUpO1xuICB9XG4gIFxuICBkcmF3KGNvbnRleHQpIHtcbiAgICBpZih0aGlzLmhpZGRlbikgcmV0dXJuO1xuICAgIHN1cGVyLmRyYXcoY29udGV4dCk7XG5cbiAgICBjb25zdCBjYW52YXMgPSBjb250ZXh0LmNhbnZhcztcbiAgICBjb25zdCBjdHggPSBjYW52YXMuZ2V0Q29udGV4dChcIjJkXCIpO1xuICAgIGN0eC5zYXZlKCk7XG5cbiAgICB0aGlzLmRyYXdCYWNrZ3JvdW5kKGN0eCk7XG4gICAgdGhpcy5kcmF3Qm9yZGVyKGN0eCk7XG4gICAgXG4gICAgY3R4LnJlc3RvcmUoKTtcbiAgfVxuXG4gIGRyYXdCYWNrZ3JvdW5kKGN0eCkge1xuICAgIGNvbnN0IGNvbG9yID0gdGhpcy5iYWNrZ3JvdW5kQ29sb3I7XG5cbiAgICBpZihjb2xvcikge1xuICAgICAgY3R4LnNhdmUoKTtcbiAgXG4gICAgICBjdHguZmlsbFN0eWxlID0gY29sb3I7XG4gICAgICBjdHguZmlsbFJlY3QoTWF0aC5yb3VuZCh0aGlzLngpLCBNYXRoLnJvdW5kKHRoaXMueSksIE1hdGgucm91bmQodGhpcy53aWR0aCksIE1hdGgucm91bmQodGhpcy5oZWlnaHQpKTtcblxuICAgICAgY3R4LnJlc3RvcmUoKTtcbiAgICB9XG4gIH1cblxuICBnZXQgYmFja2dyb3VuZENvbG9yKCkge1xuICAgIGxldCBjb2xvciA9IG51bGw7XG5cbiAgICBpZih0aGlzLmhvdmVyZWQgJiYgdGhpcy5jbGlja2VkICYmIHRoaXMuc3R5bGUuYmFja2dyb3VuZENvbG9yRG93biAhPSBudWxsKSB7XG4gICAgICBjb2xvciA9IHRoaXMuc3R5bGUuYmFja2dyb3VuZENvbG9yRG93bjtcbiAgICB9IGVsc2UgaWYodGhpcy5ob3ZlcmVkICYmIHRoaXMuc3R5bGUuYmFja2dyb3VuZENvbG9ySG92ZXIgIT0gbnVsbCkge1xuICAgICAgY29sb3IgPSB0aGlzLnN0eWxlLmJhY2tncm91bmRDb2xvckhvdmVyO1xuICAgIH0gZWxzZSB7XG4gICAgICBjb2xvciA9IHRoaXMuc3R5bGUuYmFja2dyb3VuZENvbG9yO1xuICAgIH1cblxuICAgIHJldHVybiBjb2xvcjtcbiAgfVxuXG4gIGRyYXdCb3JkZXIoY3R4KSB7XG4gICAgY29uc3QgY29sb3IgPSB0aGlzLmJvcmRlckNvbG9yO1xuXG4gICAgaWYoY29sb3IgJiYgdGhpcy5zdHlsZS5ib3JkZXJTaXplID4gMCkge1xuICAgICAgY3R4LnNhdmUoKTtcbiAgICAgIFxuICAgICAgY3R4LnN0cm9rZVN0eWxlID0gY29sb3I7XG4gICAgICBjdHgubGluZVdpZHRoID0gdGhpcy5zdHlsZS5ib3JkZXJTaXplO1xuICAgICAgXG4gICAgICBjdHguc3Ryb2tlUmVjdChNYXRoLnJvdW5kKHRoaXMueCksIE1hdGgucm91bmQodGhpcy55KSwgTWF0aC5yb3VuZCh0aGlzLndpZHRoIC0gdGhpcy5zdHlsZS5ib3JkZXJTaXplIC8gMiksIE1hdGgucm91bmQodGhpcy5oZWlnaHQgLSB0aGlzLnN0eWxlLmJvcmRlclNpemUgLyAyKSk7XG4gIFxuICAgICAgY3R4LnJlc3RvcmUoKTtcbiAgICB9XG4gIH1cblxuICBnZXQgYm9yZGVyQ29sb3IoKSB7XG4gICAgbGV0IGNvbG9yID0gbnVsbDtcblxuICAgIGlmKHRoaXMuY2xpY2tlZCAmJiB0aGlzLmhvdmVyZWQgJiYgdGhpcy5zdHlsZS5ib3JkZXJDb2xvckRvd24gIT0gbnVsbCkge1xuICAgICAgY29sb3IgPSB0aGlzLnN0eWxlLmJvcmRlckNvbG9yRG93bjtcbiAgICB9IGVsc2UgaWYoIXRoaXMuY2xpY2tlZCAmJiB0aGlzLmhvdmVyZWQgJiYgdGhpcy5zdHlsZS5ib3JkZXJDb2xvckhvdmVyICE9IG51bGwpIHtcbiAgICAgIGNvbG9yID0gdGhpcy5zdHlsZS5ib3JkZXJDb2xvckhvdmVyO1xuICAgIH0gZWxzZSBpZih0aGlzLnNlbGVjdGFibGUgJiYgdGhpcy5zZWxlY3RlZCAmJiB0aGlzLnN0eWxlLmJvcmRlckNvbG9yU2VsZWN0ZWQgIT0gbnVsbCkge1xuICAgICAgY29sb3IgPSB0aGlzLnN0eWxlLmJvcmRlckNvbG9yU2VsZWN0ZWQ7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbG9yID0gdGhpcy5zdHlsZS5ib3JkZXJDb2xvcjtcbiAgICB9XG5cbiAgICByZXR1cm4gY29sb3I7XG4gIH1cbn0iLCIvKlxuICogQ29weXJpZ2h0IChDKSAyMDIwIEVsaWFzdGlrIChlbGlhc3Rpa3NvZnRzLmNvbSlcbiAqXG4gKiBUaGlzIGZpbGUgaXMgcGFydCBvZiBcIkpTR2FtZVRvb2xzXCIuXG4gKlxuICogXCJKU0dhbWVUb29sc1wiIGlzIGZyZWUgc29mdHdhcmU6IHlvdSBjYW4gcmVkaXN0cmlidXRlIGl0IGFuZC9vciBtb2RpZnlcbiAqIGl0IHVuZGVyIHRoZSB0ZXJtcyBvZiB0aGUgR05VIEdlbmVyYWwgUHVibGljIExpY2Vuc2UgYXMgcHVibGlzaGVkIGJ5XG4gKiB0aGUgRnJlZSBTb2Z0d2FyZSBGb3VuZGF0aW9uLCBlaXRoZXIgdmVyc2lvbiAzIG9mIHRoZSBMaWNlbnNlLCBvclxuICogKGF0IHlvdXIgb3B0aW9uKSBhbnkgbGF0ZXIgdmVyc2lvbi5cbiAqXG4gKiBcIkpTR2FtZVRvb2xzXCIgaXMgZGlzdHJpYnV0ZWQgaW4gdGhlIGhvcGUgdGhhdCBpdCB3aWxsIGJlIHVzZWZ1bCxcbiAqIGJ1dCBXSVRIT1VUIEFOWSBXQVJSQU5UWTsgd2l0aG91dCBldmVuIHRoZSBpbXBsaWVkIHdhcnJhbnR5IG9mXG4gKiBNRVJDSEFOVEFCSUxJVFkgb3IgRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UuICBTZWUgdGhlXG4gKiBHTlUgR2VuZXJhbCBQdWJsaWMgTGljZW5zZSBmb3IgbW9yZSBkZXRhaWxzLlxuICpcbiAqIFlvdSBzaG91bGQgaGF2ZSByZWNlaXZlZCBhIGNvcHkgb2YgdGhlIEdOVSBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlXG4gKiBhbG9uZyB3aXRoIFwiSlNHYW1lVG9vbHNcIi4gIElmIG5vdCwgc2VlIDxodHRwOi8vd3d3LmdudS5vcmcvbGljZW5zZXMvPi5cbiAqL1xuaW1wb3J0IFJvdyBmcm9tIFwiLi9Sb3dcIjtcbmltcG9ydCBDb25zdGFudHMgZnJvbSBcIi4vQ29uc3RhbnRzXCI7XG5pbXBvcnQgU3R5bGUgZnJvbSBcIi4vU3R5bGVcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQnV0dG9uIGV4dGVuZHMgUm93IHtcbiAgc2VsZWN0YWJsZSA9IHRydWU7XG5cbiAgY29uc3RydWN0b3IoeCwgeSwgbWF4V2lkdGgsIG1heEhlaWdodCwgc3R5bGUsIC4uLmNvbXBvbmVudHMpIHtcbiAgICBzdXBlcih4LCB5LCBtYXhXaWR0aCwgbWF4SGVpZ2h0LCBzdHlsZSwgLi4uY29tcG9uZW50cyk7XG4gIH1cbiAgXG4gIGRyYXcoY29udGV4dCkge1xuICAgIGlmKHRoaXMuaGlkZGVuKSByZXR1cm47XG4gICAgc3VwZXIuZHJhdyhjb250ZXh0KTtcblxuICAgIGNvbnN0IGNhbnZhcyA9IGNvbnRleHQuY2FudmFzO1xuICAgIGNvbnN0IGN0eCA9IGNhbnZhcy5nZXRDb250ZXh0KFwiMmRcIik7XG4gICAgY3R4LnNhdmUoKTtcbiAgICBcbiAgICB0aGlzLmRyYXdDb21wb25lbnRzKGN0eCk7XG4gICAgXG4gICAgY3R4LnJlc3RvcmUoKTtcbiAgfVxuXG4gIGRyYXdDb21wb25lbnRzKGN0eCkge1xuICAgIHN1cGVyLmRyYXcoY3R4KTtcbiAgfVxuXG4gIGdldCBoZWlnaHQoKSB7XG4gICAgcmV0dXJuICh0aGlzLm1heEhlaWdodCB8fCBzdXBlci5oZWlnaHQpICsgdGhpcy5zdHlsZS5wYWRkaW5nO1xuICB9XG5cbiAgZ2V0IHdpZHRoKCkge1xuICAgIHJldHVybiAodGhpcy5tYXhXaWR0aCB8fCBzdXBlci53aWR0aCkgKyB0aGlzLnN0eWxlLnBhZGRpbmc7XG4gIH1cblxuICBnZXQgZGVmYXVsdFN0eWxlKCkge1xuICAgIHJldHVybiBuZXcgU3R5bGUoe1xuICAgICAgXCJiYWNrZ3JvdW5kQ29sb3JcIjogQ29uc3RhbnRzLlNldHRpbmcuQlVUVE9OX0RFRkFVTFRfQkFDS0dST1VORCxcbiAgICAgIFwiYmFja2dyb3VuZENvbG9ySG92ZXJcIjogQ29uc3RhbnRzLlNldHRpbmcuQlVUVE9OX0RFRkFVTFRfSE9WRVJfQkFDS0dST1VORCxcbiAgICAgIFwiYmFja2dyb3VuZENvbG9yRG93blwiOiBDb25zdGFudHMuU2V0dGluZy5CVVRUT05fREVGQVVMVF9DTElDS19CQUNLR1JPVU5ELFxuICAgICAgXCJzY3JvbGxYRGlzYWJsZWRcIjogdHJ1ZSxcbiAgICAgIFwic2Nyb2xsWURpc2FibGVkXCI6IHRydWVcbiAgICB9KTtcbiAgfVxufSIsIi8qXG4gKiBDb3B5cmlnaHQgKEMpIDIwMjAgRWxpYXN0aWsgKGVsaWFzdGlrc29mdHMuY29tKVxuICpcbiAqIFRoaXMgZmlsZSBpcyBwYXJ0IG9mIFwiSlNHYW1lVG9vbHNcIi5cbiAqXG4gKiBcIkpTR2FtZVRvb2xzXCIgaXMgZnJlZSBzb2Z0d2FyZTogeW91IGNhbiByZWRpc3RyaWJ1dGUgaXQgYW5kL29yIG1vZGlmeVxuICogaXQgdW5kZXIgdGhlIHRlcm1zIG9mIHRoZSBHTlUgR2VuZXJhbCBQdWJsaWMgTGljZW5zZSBhcyBwdWJsaXNoZWQgYnlcbiAqIHRoZSBGcmVlIFNvZnR3YXJlIEZvdW5kYXRpb24sIGVpdGhlciB2ZXJzaW9uIDMgb2YgdGhlIExpY2Vuc2UsIG9yXG4gKiAoYXQgeW91ciBvcHRpb24pIGFueSBsYXRlciB2ZXJzaW9uLlxuICpcbiAqIFwiSlNHYW1lVG9vbHNcIiBpcyBkaXN0cmlidXRlZCBpbiB0aGUgaG9wZSB0aGF0IGl0IHdpbGwgYmUgdXNlZnVsLFxuICogYnV0IFdJVEhPVVQgQU5ZIFdBUlJBTlRZOyB3aXRob3V0IGV2ZW4gdGhlIGltcGxpZWQgd2FycmFudHkgb2ZcbiAqIE1FUkNIQU5UQUJJTElUWSBvciBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRS4gIFNlZSB0aGVcbiAqIEdOVSBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlIGZvciBtb3JlIGRldGFpbHMuXG4gKlxuICogWW91IHNob3VsZCBoYXZlIHJlY2VpdmVkIGEgY29weSBvZiB0aGUgR05VIEdlbmVyYWwgUHVibGljIExpY2Vuc2VcbiAqIGFsb25nIHdpdGggXCJKU0dhbWVUb29sc1wiLiAgSWYgbm90LCBzZWUgPGh0dHA6Ly93d3cuZ251Lm9yZy9saWNlbnNlcy8+LlxuICovXG5pbXBvcnQgSW1hZ2VDb250YWluZXIgZnJvbSBcIi4vSW1hZ2VDb250YWluZXJcIjtcbmltcG9ydCBCdXR0b24gZnJvbSBcIi4vQnV0dG9uXCI7XG5pbXBvcnQgU3R5bGUgZnJvbSBcIi4vU3R5bGVcIjtcbmltcG9ydCBDb25zdGFudHMgZnJvbSBcIi4vQ29uc3RhbnRzXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEJ1dHRvbkltYWdlIGV4dGVuZHMgQnV0dG9uIHtcbiAgY29uc3RydWN0b3IoaW1nU3JjLCB4LCB5LCBhbGlnbmVtZW50LCB2ZXJ0aWNhbEFsaWduZW1lbnQsIHdpZHRoLCBoZWlnaHQsIGJhY2tncm91bmRDb2xvciwgYmFja2dyb3VuZENvbG9ySG92ZXIsIGltYWdlTG9hZGVyKSB7XG4gICAgY29uc3Qgc3R5bGUgPSBuZXcgU3R5bGUoe1xuICAgICAgXCJhbGlnbmVtZW50XCI6IGFsaWduZW1lbnQsXG4gICAgICBcInZlcnRpY2FsQWxpZ25lbWVudFwiOiB2ZXJ0aWNhbEFsaWduZW1lbnQsXG4gICAgICBcImJhY2tncm91bmRDb2xvclwiOiBiYWNrZ3JvdW5kQ29sb3IgfHwgQ29uc3RhbnRzLlNldHRpbmcuQlVUVE9OX0RFRkFVTFRfQkFDS0dST1VORCxcbiAgICAgIFwiYmFja2dyb3VuZENvbG9ySG92ZXJcIjogYmFja2dyb3VuZENvbG9ySG92ZXIgfHwgQ29uc3RhbnRzLlNldHRpbmcuQlVUVE9OX0RFRkFVTFRfSE9WRVJfQkFDS0dST1VORFxuICAgIH0pO1xuXG4gICAgc3VwZXIoeCwgeSwgd2lkdGgsIGhlaWdodCwgc3R5bGUpO1xuICAgIHRoaXMuaW1hZ2UgPSBuZXcgSW1hZ2VDb250YWluZXIoaW1nU3JjLCB4LCB5LCB3aWR0aCwgaGVpZ2h0LCBuZXcgU3R5bGUoeyBcImFsaWduZW1lbnRcIjogXCJjZW50ZXJcIiwgXCJ2ZXJ0aWNhbEFsaWduZW1lbnRcIjogXCJjZW50ZXJcIiB9KSwgaW1hZ2VMb2FkZXIpO1xuICAgIHRoaXMuYWRkKHRoaXMuaW1hZ2UpO1xuXG4gICAgY29uc29sZSAmJiBjb25zb2xlLndhcm4gJiYgY29uc29sZS53YXJuKENvbnN0YW50cy5TdHJpbmcuTk9USUNFX01FU1NBR0UgKyBcIiBcIiArIENvbnN0YW50cy5TdHJpbmcuQlVUVE9OX0lNQUdFX0RFUFJFQ0FURUQpO1xuICB9XG5cbiAgbG9hZEltYWdlKGltYWdlTG9hZGVyKSB7XG4gICAgaWYodGhpcy5jb21wb25lbnRzWzBdIGluc3RhbmNlb2YgSW1hZ2VDb250YWluZXIpIHRoaXMuY29tcG9uZW50c1swXS5sb2FkSW1hZ2UoaW1hZ2VMb2FkZXIpO1xuICB9XG5cbiAgc2V0IG1pbldpZHRoKHdpZHRoKSB7XG4gICAgdGhpcy5pbWFnZS53aWR0aCA9IHdpZHRoO1xuICAgIHN1cGVyLm1pbldpZHRoID0gd2lkdGg7XG4gIH1cblxuICBzZXQgbWluSGVpZ2h0KGhlaWdodCkge1xuICAgIHRoaXMuaW1hZ2UuaGVpZ2h0ID0gaGVpZ2h0O1xuICAgIHN1cGVyLm1pbkhlaWdodCA9IGhlaWdodDtcbiAgfVxuXG4gIGdldCBtaW5XaWR0aCgpIHtcbiAgICByZXR1cm4gc3VwZXIubWluV2lkdGg7XG4gIH1cblxuICBnZXQgbWluSGVpZ2h0KCkge1xuICAgIHJldHVybiBzdXBlci5taW5IZWlnaHQ7XG4gIH1cblxuICBzZXQgbWF4V2lkdGgod2lkdGgpIHtcbiAgICB0aGlzLmltYWdlLndpZHRoID0gd2lkdGg7XG4gICAgc3VwZXIubWF4V2lkdGggPSB3aWR0aDtcbiAgfVxuXG4gIHNldCBtYXhIZWlnaHQoaGVpZ2h0KSB7XG4gICAgdGhpcy5pbWFnZS5oZWlnaHQgPSBoZWlnaHQ7XG4gICAgc3VwZXIubWF4SGVpZ2h0ID0gaGVpZ2h0O1xuICB9XG5cbiAgZ2V0IG1heFdpZHRoKCkge1xuICAgIHJldHVybiBzdXBlci5tYXhXaWR0aDtcbiAgfVxuXG4gIGdldCBtYXhIZWlnaHQoKSB7XG4gICAgcmV0dXJuIHN1cGVyLm1heEhlaWdodDtcbiAgfVxuXG4gIHNldCB3aWR0aCh3aWR0aCkge1xuICAgIHRoaXMubWluV2lkdGggPSB3aWR0aDtcbiAgICB0aGlzLm1heFdpZHRoID0gd2lkdGg7XG4gIH1cblxuICBnZXQgd2lkdGgoKSB7XG4gICAgcmV0dXJuIHN1cGVyLndpZHRoO1xuICB9XG5cbiAgc2V0IGhlaWdodChoZWlnaHQpIHtcbiAgICB0aGlzLm1pbkhlaWdodCA9IGhlaWdodDtcbiAgICB0aGlzLm1heEhlaWdodCA9IGhlaWdodDtcbiAgfVxuXG4gIGdldCBoZWlnaHQoKSB7XG4gICAgcmV0dXJuIHN1cGVyLmhlaWdodDtcbiAgfVxufSIsIi8qXG4gKiBDb3B5cmlnaHQgKEMpIDIwMjAgRWxpYXN0aWsgKGVsaWFzdGlrc29mdHMuY29tKVxuICpcbiAqIFRoaXMgZmlsZSBpcyBwYXJ0IG9mIFwiSlNHYW1lVG9vbHNcIi5cbiAqXG4gKiBcIkpTR2FtZVRvb2xzXCIgaXMgZnJlZSBzb2Z0d2FyZTogeW91IGNhbiByZWRpc3RyaWJ1dGUgaXQgYW5kL29yIG1vZGlmeVxuICogaXQgdW5kZXIgdGhlIHRlcm1zIG9mIHRoZSBHTlUgR2VuZXJhbCBQdWJsaWMgTGljZW5zZSBhcyBwdWJsaXNoZWQgYnlcbiAqIHRoZSBGcmVlIFNvZnR3YXJlIEZvdW5kYXRpb24sIGVpdGhlciB2ZXJzaW9uIDMgb2YgdGhlIExpY2Vuc2UsIG9yXG4gKiAoYXQgeW91ciBvcHRpb24pIGFueSBsYXRlciB2ZXJzaW9uLlxuICpcbiAqIFwiSlNHYW1lVG9vbHNcIiBpcyBkaXN0cmlidXRlZCBpbiB0aGUgaG9wZSB0aGF0IGl0IHdpbGwgYmUgdXNlZnVsLFxuICogYnV0IFdJVEhPVVQgQU5ZIFdBUlJBTlRZOyB3aXRob3V0IGV2ZW4gdGhlIGltcGxpZWQgd2FycmFudHkgb2ZcbiAqIE1FUkNIQU5UQUJJTElUWSBvciBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRS4gIFNlZSB0aGVcbiAqIEdOVSBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlIGZvciBtb3JlIGRldGFpbHMuXG4gKlxuICogWW91IHNob3VsZCBoYXZlIHJlY2VpdmVkIGEgY29weSBvZiB0aGUgR05VIEdlbmVyYWwgUHVibGljIExpY2Vuc2VcbiAqIGFsb25nIHdpdGggXCJKU0dhbWVUb29sc1wiLiAgSWYgbm90LCBzZWUgPGh0dHA6Ly93d3cuZ251Lm9yZy9saWNlbnNlcy8+LlxuICovXG5pbXBvcnQgQ29uc3RhbnRzIGZyb20gXCIuL0NvbnN0YW50c1wiO1xuaW1wb3J0IFV0aWxzIGZyb20gXCIuL1V0aWxzXCI7XG5pbXBvcnQgU2NlbmUgZnJvbSBcIi4vU2NlbmVcIjtcbmltcG9ydCBSZWFjdG9yQ2FudmFzIGZyb20gXCIuL1JlYWN0b3JDYW52YXNcIjtcbmltcG9ydCBFcnJvclNjcmVlbiBmcm9tIFwiLi9FcnJvclNjcmVlblwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDYW52YXMge1xuICAjbGFzdEZyYW1lVGltZTtcbiAgI193aWR0aDtcbiAgI19oZWlnaHQ7XG5cbiAgY29uc3RydWN0b3Ioc2NlbmUsIGNhbnZhcywgd2lkdGgsIGhlaWdodCwgYXV0b1Jlc2l6ZSwgbWF4RlBTKSB7XG4gICAgdGhpcy5jYW52YXMgPSBjYW52YXMgfHwgZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImNhbnZhc1wiKTtcbiAgICB0aGlzLmNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgdGhpcy53aWR0aCA9IHdpZHRoIHx8IENvbnN0YW50cy5TZXR0aW5nLkNBTlZBU19XSURUSDtcbiAgICB0aGlzLmhlaWdodCA9IGhlaWdodCB8fCBDb25zdGFudHMuU2V0dGluZy5DQU5WQVNfSEVJR0hUO1xuICAgIHRoaXMuc2NlbmUgPSBzY2VuZTtcbiAgICB0aGlzLmNvbnRhaW5lci5hcHBlbmRDaGlsZCh0aGlzLmNhbnZhcyk7XG4gICAgdGhpcy5zdGFydGVkID0gZmFsc2U7XG4gICAgdGhpcy5pbml0ID0gZmFsc2U7XG4gICAgdGhpcy5tYXhGUFMgPSBtYXhGUFMgfHwgLTE7XG4gICAgdGhpcy4jbGFzdEZyYW1lVGltZSA9IDA7XG4gICAgdGhpcy5oYXNFcnJvciA9IGZhbHNlO1xuICAgIHRoaXMuZnVsbHNjcmVlbiA9IGZhbHNlO1xuICAgIHRoaXMuZnVsbHBhZ2UgPSBmYWxzZTtcblxuICAgIC8vIEVycm9yIG1lc3NhZ2Ugc2NyZWVuXG4gICAgdGhpcy5zY2VuZUVycm9yID0gbmV3IEVycm9yU2NyZWVuKHRoaXMpO1xuICAgIHRoaXMuc2NlbmVQcmV2aW91cyA9IHRoaXMuc2NlbmU7XG4gICAgXG4gICAgLy8gUmVhY3RvcnMvZXZlbnRzXG4gICAgdGhpcy5yZWFjdG9yID0gbmV3IFJlYWN0b3JDYW52YXMoKTtcbiAgICB0aGlzLnJlYWN0b3IucmVnaXN0ZXJFdmVudChcIm1vdXNlbW92ZVwiKTtcbiAgICB0aGlzLnJlYWN0b3IucmVnaXN0ZXJFdmVudChcImNsaWNrXCIpO1xuICAgIHRoaXMucmVhY3Rvci5yZWdpc3RlckV2ZW50KFwibW91c2Vkb3duXCIpO1xuICAgIHRoaXMucmVhY3Rvci5yZWdpc3RlckV2ZW50KFwibW91c2V1cFwiKTtcbiAgICB0aGlzLnJlYWN0b3IucmVnaXN0ZXJFdmVudChcIndoZWVsXCIpO1xuICAgIHRoaXMucmVhY3Rvci5yZWdpc3RlckV2ZW50KFwidG91Y2hzdGFydFwiKTtcbiAgICB0aGlzLnJlYWN0b3IucmVnaXN0ZXJFdmVudChcInRvdWNoZW5kXCIpO1xuICAgIHRoaXMucmVhY3Rvci5yZWdpc3RlckV2ZW50KFwidG91Y2htb3ZlXCIpO1xuXG4gICAgaWYoYXV0b1Jlc2l6ZSkgdGhpcy5hdXRvUmVzaXplKCk7XG4gICAgdGhpcy5jcmVhdGVFdmVudHMoKTtcblxuICAgIGlmKENvbnN0YW50cy5TZXR0aW5nLkRJU0FCTEVfT1BUSU1JWkFUSU9OUykge1xuICAgICAgY29uc29sZSAmJiBjb25zb2xlLmluZm8oQ29uc3RhbnRzLlN0cmluZy5OT1RJQ0VfTUVTU0FHRSArIFwiIFwiICsgQ29uc3RhbnRzLlN0cmluZy5PUFRJTUlaQVRJT05fRElTQUJMRUQpO1xuICAgIH1cblxuICAgIGlmKENvbnN0YW50cy5TZXR0aW5nLkRJU0FCTEVfQ09OVEFJTkVSU19DVVRUSU5HKSB7XG4gICAgICBjb25zb2xlICYmIGNvbnNvbGUuaW5mbyhDb25zdGFudHMuU3RyaW5nLk5PVElDRV9NRVNTQUdFICsgXCIgXCIgKyBDb25zdGFudHMuU3RyaW5nLkNPTlRBSU5FUl9DVVRUSU5HX0RJU0FCTEVEKTtcbiAgICB9XG4gIH1cblxuICBkcmF3KCkge1xuICAgIGNvbnN0IGN0eCA9IHRoaXMuY2FudmFzLmdldENvbnRleHQoXCIyZFwiKTtcbiAgICB0aGlzLmRyYXdDbGVhcihjdHgpO1xuICAgIHRoaXMuZHJhd1NjZW5lKGN0eCk7XG4gIH1cblxuICBkcmF3U2NlbmUoY3R4KSB7XG4gICAgaWYodGhpcy5zY2VuZSkge1xuICAgICAgdGhpcy5zY2VuZS5wYXJlbnQgPSB0aGlzO1xuICAgICAgdGhpcy5zY2VuZS5jYW52YXMgPSB0aGlzO1xuXG4gICAgICB0cnkge1xuICAgICAgICBjdHguc2NhbGUoQ29uc3RhbnRzLlNldHRpbmcuUElYRUxfUkFUSU8sIENvbnN0YW50cy5TZXR0aW5nLlBJWEVMX1JBVElPKTtcbiAgICAgICAgdGhpcy5zY2VuZS5kcmF3KGN0eCk7XG4gICAgICB9IGNhdGNoKGUpIHtcbiAgICAgICAgdGhpcy5oYXNFcnJvciA9IHRydWU7XG4gICAgICAgIHRoaXMuc2NlbmUgPSB0aGlzLnNjZW5lRXJyb3I7XG4gICAgICAgIHRoaXMuc2NlbmVFcnJvci5lcnJvclRleHQgPSBcIlwiICsgZS5zdGFjaztcbiAgICAgICAgY29uc29sZS5lcnJvcihDb25zdGFudHMuU3RyaW5nLkVSUk9SX01FU1NBR0UgKyBcIiBcIiArIENvbnN0YW50cy5TdHJpbmcuRVJST1JfTUVTU0FHRV9DQU5WQVMgKyBcIlxcblwiLCBlKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBkcmF3Q2xlYXIoY3R4KSB7XG4gICAgVXRpbHMuY2xlYXIoY3R4KTtcbiAgfVxuXG4gIHN0YXJ0RHJhdyhmdW5jKSB7XG4gICAgdGhpcy5zdGFydGVkID0gdHJ1ZTtcblxuICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZSh0aW1lID0+IHtcbiAgICAgIGlmKHRoaXMuc3RhcnRlZCkge1xuICAgICAgICBjb25zdCBvZmZzZXRGcmFtZSA9IHRpbWUgLSB0aGlzLiNsYXN0RnJhbWVUaW1lO1xuXG4gICAgICAgIHRoaXMuZnVsbHNjcmVlbiA9IGRvY3VtZW50LmZ1bGxzY3JlZW5FbGVtZW50ID09IHRoaXMuY2FudmFzIHx8IGRvY3VtZW50LmZ1bGxzY3JlZW5FbGVtZW50ID09IHRoaXMuY29udGFpbmVyO1xuXG4gICAgICAgIGlmKENvbnN0YW50cy5TZXR0aW5nLkVOQUJMRV9QSVhFTF9SQVRJT19SRVNJWklORykge1xuICAgICAgICAgIENvbnN0YW50cy5TZXR0aW5nLlBJWEVMX1JBVElPID0gd2luZG93LmRldmljZVBpeGVsUmF0aW8gKiBDb25zdGFudHMuU2V0dGluZy5SRVNPTFVUSU9OX1NDQUxFOyAvLyBVcGRhdGUgdGhlIGRldmljZSBwaXhlbCByYXRpbywgb25seSBpbiBmdWxsc2NyZWVuIG1vZGUvZnVsbHBhZ2UgbW9kZVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIENvbnN0YW50cy5TZXR0aW5nLlBJWEVMX1JBVElPID0gMSAqIENvbnN0YW50cy5TZXR0aW5nLlJFU09MVVRJT05fU0NBTEU7XG4gICAgICAgIH1cblxuICAgICAgICBVdGlscy5hdXRvRFBJKHRoaXMuY2FudmFzKTtcblxuICAgICAgICBpZih0aGlzLm1heEZQUyA8IDEgfHwgb2Zmc2V0RnJhbWUgPiAxMDAwIC8gdGhpcy5tYXhGUFMpIHtcbiAgICAgICAgICB0aGlzLiNsYXN0RnJhbWVUaW1lID0gdGltZTtcbiAgICAgICAgICB0aGlzLmRyYXcoKTtcbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgdGhpcy5zdGFydERyYXcoZnVuYyk7XG4gICAgICAgIGlmKGZ1bmMpIGZ1bmMoKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIHN0b3BEcmF3KCkge1xuICAgIHRoaXMuc3RhcnRlZCA9IGZhbHNlO1xuICB9XG5cbiAgYXBwZW5kVG8oZWxlbWVudCkge1xuICAgIGVsZW1lbnQuYXBwZW5kQ2hpbGQodGhpcy5jb250YWluZXIpO1xuICB9XG5cbiAgcmVtb3ZlKGVsZW1lbnQpIHtcbiAgICBlbGVtZW50LnJlbW92ZUNoaWxkKHRoaXMuY29udGFpbmVyKTtcbiAgICB0aGlzLmNvbnRhaW5lci5yZW1vdmVDaGlsZCh0aGlzLmNhbnZhcyk7XG4gIH1cblxuICB0b2dnbGVGdWxsc2NyZWVuKCkge1xuICAgIFV0aWxzLnRvZ2dsZUZ1bGxzY3JlZW4odGhpcy5jYW52YXMsIHRoaXMuY29udGFpbmVyKTtcbiAgfVxuXG4gIHRvZ2dsZUZ1bGxwYWdlKCkge1xuICAgIFV0aWxzLnRvZ2dsZUZ1bGxwYWdlKHRoaXMuY2FudmFzLCB0aGlzLmNvbnRhaW5lcik7XG4gICAgdGhpcy5mdWxscGFnZSA9ICF0aGlzLmZ1bGxwYWdlO1xuICB9XG5cbiAgYXV0b1Jlc2l6ZSgpIHtcbiAgICBVdGlscy5lbmFibGVBdXRvUmVzaXplQ2FudmFzKHRoaXMuY2FudmFzLCB0aGlzLmNvbnRhaW5lciwgdGhpcy53aWR0aCwgdGhpcy5oZWlnaHQpO1xuICB9XG5cbiAgZ2V0IHgoKSB7XG4gICAgcmV0dXJuIDA7XG4gIH1cblxuICBnZXQgeSgpIHtcbiAgICByZXR1cm4gMDtcbiAgfVxuXG4gIGdldCB3aWR0aCgpIHtcbiAgICByZXR1cm4gdGhpcy5jYW52YXMgPyBVdGlscy5nZXRDYW52YXNXaWR0aCh0aGlzLmNhbnZhcykgOiB0aGlzLiNfd2lkdGg7XG4gIH1cblxuICBnZXQgaGVpZ2h0KCkge1xuICAgIHJldHVybiB0aGlzLmNhbnZhcyA/IFV0aWxzLmdldENhbnZhc0hlaWdodCh0aGlzLmNhbnZhcykgOiB0aGlzLiNfaGVpZ2h0O1xuICB9XG5cbiAgZ2V0IHN0eWxlKCkge1xuICAgIHJldHVybiB0aGlzLmNhbnZhcyA/IHRoaXMuY2FudmFzLnN0eWxlIDogbnVsbDtcbiAgfVxuXG4gIHNldCB3aWR0aCh3aWR0aCkge1xuICAgIGlmKHdpZHRoICE9IHRoaXMuI193aWR0aCkge1xuICAgICAgdGhpcy4jX3dpZHRoID0gd2lkdGg7XG4gICAgICB0aGlzLmNhbnZhcy53aWR0aCA9IHdpZHRoO1xuICAgICAgdGhpcy5zY2VuZSAmJiB0aGlzLnNjZW5lLnJlYWN0b3IuZGlzcGF0Y2hFdmVudChcIm9uQ2hhbmdlXCIsIHRoaXMpO1xuICAgIH1cbiAgfVxuXG4gIHNldCBoZWlnaHQoaGVpZ2h0KSB7XG4gICAgaWYoaGVpZ2h0ICE9IHRoaXMuI19oZWlnaHQpIHtcbiAgICAgIHRoaXMuI19oZWlnaHQgPSBoZWlnaHQ7XG4gICAgICB0aGlzLmNhbnZhcy5oZWlnaHQgPSBoZWlnaHQ7XG4gICAgICB0aGlzLnNjZW5lICYmIHRoaXMuc2NlbmUucmVhY3Rvci5kaXNwYXRjaEV2ZW50KFwib25DaGFuZ2VcIiwgdGhpcyk7XG4gICAgfVxuICB9XG5cbiAgc2V0IGN1cnNvcihjdXJzb3IpIHtcbiAgIGlmKHRoaXMuY2FudmFzKSB0aGlzLmNhbnZhcy5zdHlsZS5jdXJzb3IgPSBjdXJzb3I7XG4gIH1cblxuICBnZXQgY3Vyc29yKCkge1xuICAgIHJldHVybiB0aGlzLmNhbnZhcyA/IHRoaXMuY2FudmFzLnN0eWxlLmN1cnNvciA6IFwiXCI7XG4gIH1cblxuICBnZXRDb250ZXh0KGNvbnRleHQpIHtcbiAgICByZXR1cm4gdGhpcy5jYW52YXMgPyB0aGlzLmNhbnZhcy5nZXRDb250ZXh0KGNvbnRleHQgPyBjb250ZXh0IDogXCIyZFwiKSA6IG51bGw7XG4gIH1cblxuICBjcmVhdGVFdmVudHMoKSB7XG4gICAgaWYoIXRoaXMuaW5pdCAmJiB0aGlzLmNhbnZhcykge1xuICAgICAgW1wibW91c2Vtb3ZlXCIsIFwiY2xpY2tcIiwgXCJtb3VzZWRvd25cIiwgXCJtb3VzZXVwXCIsIFwid2hlZWxcIl0uZm9yRWFjaChldmVudE5hbWUgPT4ge1xuICAgICAgICB0aGlzLmNhbnZhcy5hZGRFdmVudExpc3RlbmVyKGV2ZW50TmFtZSwgZXZlbnQgPT4ge1xuICAgICAgICAgIGNvbnN0IG1vdXNlUG9zaXRpb24gPSB0aGlzLmdldE1vdXNlUG9zKGV2ZW50KTtcbiAgICAgICAgICB0aGlzLmRvRXZlbnRzKGV2ZW50LCBldmVudE5hbWUsIG1vdXNlUG9zaXRpb24pO1xuICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIH0sIGZhbHNlKTtcbiAgICAgIH0pO1xuXG4gICAgICBbXCJ0b3VjaHN0YXJ0XCIsIFwidG91Y2htb3ZlXCIsIFwidG91Y2hlbmRcIl0uZm9yRWFjaChldmVudE5hbWUgPT4ge1xuICAgICAgICB0aGlzLmNhbnZhcy5hZGRFdmVudExpc3RlbmVyKGV2ZW50TmFtZSwgZXZlbnQgPT4ge1xuICAgICAgICAgIGNvbnN0IGNoYW5nZWRUb3VjaGVzID0gZXZlbnQuY2hhbmdlZFRvdWNoZXNbMF07XG4gICAgICAgICAgY29uc3QgcG9zaXRpb24gPSB0aGlzLmdldE1vdXNlUG9zKGNoYW5nZWRUb3VjaGVzKTtcbiAgICAgICAgICB0aGlzLmRvRXZlbnRzKGV2ZW50LCBldmVudE5hbWUsIHBvc2l0aW9uKTtcbiAgICAgICAgfSk7XG4gICAgICB9KTtcblxuICAgICAgdGhpcy5pbml0ID0gdHJ1ZTtcbiAgICB9XG4gIH1cblxuICBkb0V2ZW50cyhldmVudCwgZXZlbnROYW1lLCBwb3NpdGlvbikge1xuICAgIGNvbnN0IGNvbXBvbmVudHMgPSB0aGlzLmdldENvbXBvbmVudHNBdFBvc2l0aW9uKHBvc2l0aW9uKTsgLy8gR2V0IGFsbCBlbGVtZW50cyBhdCB0aGUgY3VycmVudCBwb3NpdGlvblxuICAgIHRoaXMucmVhY3Rvci5kaXNwYXRjaEV2ZW50KGV2ZW50TmFtZSwgZXZlbnQsIGZhbHNlKTsgLy8gRGlzcGF0Y2ggdG8gYWxsIGNvbXBvbmVudHMgdG8gZGlzYWJsZSB0aGVtIChjYWxsIHdpdGggZmFsc2UpXG4gICAgWy4uLmNvbXBvbmVudHNdLnJldmVyc2UoKS5mb3JFYWNoKGNvbXBvbmVudCA9PiB0aGlzLnJlYWN0b3IuZGlzcGF0Y2hFdmVudENvbXBvbmVudChldmVudE5hbWUsIGNvbXBvbmVudCwgZXZlbnQsIHRydWUpKTsgLy8gRGlzcGF0Y2ggdG8gY29tcG9uZW50IGRldGVjdGVkIHRvIGVuYWJsZSB0aGVtIChjYWxsIHdpdGggdHJ1ZSlcbiAgfVxuXG4gIGFkZEV2ZW50TGlzdGVuZXIoZXZlbnQsIGNvbXBvbmVudCwgY2FsbGJhY2spIHtcbiAgICB0aGlzLnJlYWN0b3IuYWRkRXZlbnRMaXN0ZW5lcihldmVudCwgY29tcG9uZW50LCBjYWxsYmFjayk7XG4gIH1cbiAgXG4gIGdldE1vdXNlUG9zKGV2ZW50KSB7XG4gICAgcmV0dXJuIFV0aWxzLmdldE1vdXNlUG9zKHRoaXMuY2FudmFzLCBldmVudCk7XG4gIH1cblxuICBnZXRBbGxDb21wb25lbnRzKHN0YXJ0ID0gdGhpcy5zY2VuZSkge1xuICAgIHJldHVybiB0aGlzLnNjZW5lLmdldEFsbENvbXBvbmVudHMoc3RhcnQpO1xuICB9XG5cbiAgZ2V0Q29tcG9uZW50c0F0UG9zaXRpb24obW91c2VQb3NpdGlvbiwgc3RhcnQgPSB0aGlzLnNjZW5lKSB7XG4gICAgY29uc3QgYWxsQ29tcG9uZW50cyA9IHRoaXMuc2NlbmUuZ2V0Q29tcG9uZW50c1RyZWUoc3RhcnQpO1xuICAgIGNvbnN0IHJlc3VsdCA9IFtzdGFydF07XG5cbiAgICBpZihhbGxDb21wb25lbnRzLmNoaWxkcykge1xuICAgICAgYWxsQ29tcG9uZW50cy5jaGlsZHMuc29ydChTY2VuZS5zb3J0Q29tcG9uZW50c1RyZWUpLnJldmVyc2UoKS5zb21lKGNoaWxkID0+IHtcbiAgICAgICAgaWYoY2hpbGQuY29tcG9uZW50LmlzSW5zaWRlKG1vdXNlUG9zaXRpb24pICYmICFjaGlsZC5jb21wb25lbnQuaGlkZGVuICYmICFjaGlsZC5jb21wb25lbnQuZGlzYWJsZWQpIHtcbiAgICAgICAgICByZXN1bHQucHVzaCguLi50aGlzLmdldENvbXBvbmVudHNBdFBvc2l0aW9uKG1vdXNlUG9zaXRpb24sIGNoaWxkLmNvbXBvbmVudCkpO1xuICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9XG5cbiAgICByZXR1cm4gcmVzdWx0O1xuICB9XG59IiwiLypcbiAqIENvcHlyaWdodCAoQykgMjAyMCBFbGlhc3RpayAoZWxpYXN0aWtzb2Z0cy5jb20pXG4gKlxuICogVGhpcyBmaWxlIGlzIHBhcnQgb2YgXCJKU0dhbWVUb29sc1wiLlxuICpcbiAqIFwiSlNHYW1lVG9vbHNcIiBpcyBmcmVlIHNvZnR3YXJlOiB5b3UgY2FuIHJlZGlzdHJpYnV0ZSBpdCBhbmQvb3IgbW9kaWZ5XG4gKiBpdCB1bmRlciB0aGUgdGVybXMgb2YgdGhlIEdOVSBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlIGFzIHB1Ymxpc2hlZCBieVxuICogdGhlIEZyZWUgU29mdHdhcmUgRm91bmRhdGlvbiwgZWl0aGVyIHZlcnNpb24gMyBvZiB0aGUgTGljZW5zZSwgb3JcbiAqIChhdCB5b3VyIG9wdGlvbikgYW55IGxhdGVyIHZlcnNpb24uXG4gKlxuICogXCJKU0dhbWVUb29sc1wiIGlzIGRpc3RyaWJ1dGVkIGluIHRoZSBob3BlIHRoYXQgaXQgd2lsbCBiZSB1c2VmdWwsXG4gKiBidXQgV0lUSE9VVCBBTlkgV0FSUkFOVFk7IHdpdGhvdXQgZXZlbiB0aGUgaW1wbGllZCB3YXJyYW50eSBvZlxuICogTUVSQ0hBTlRBQklMSVRZIG9yIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFLiAgU2VlIHRoZVxuICogR05VIEdlbmVyYWwgUHVibGljIExpY2Vuc2UgZm9yIG1vcmUgZGV0YWlscy5cbiAqXG4gKiBZb3Ugc2hvdWxkIGhhdmUgcmVjZWl2ZWQgYSBjb3B5IG9mIHRoZSBHTlUgR2VuZXJhbCBQdWJsaWMgTGljZW5zZVxuICogYWxvbmcgd2l0aCBcIkpTR2FtZVRvb2xzXCIuICBJZiBub3QsIHNlZSA8aHR0cDovL3d3dy5nbnUub3JnL2xpY2Vuc2VzLz4uXG4gKi9cbmltcG9ydCBDb21wb25lbnQgZnJvbSBcIi4vQ29tcG9uZW50XCI7XG5pbXBvcnQgQ29uc3RhbnRzIGZyb20gXCIuL0NvbnN0YW50c1wiO1xuaW1wb3J0IFV0aWxzIGZyb20gXCIuL1V0aWxzXCI7XG5pbXBvcnQgU3R5bGUgZnJvbSBcIi4vU3R5bGVcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ2lyY2xlIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgc2VsZWN0YWJsZSA9IGZhbHNlO1xuXG4gIGNvbnN0cnVjdG9yKHgsIHksIHdpZHRoLCBzdHlsZSkge1xuICAgIHN1cGVyKHgsIHksIHdpZHRoLCB3aWR0aCwgc3R5bGUpO1xuICB9XG5cbiAgZHJhdyhjb250ZXh0KSB7XG4gICAgaWYodGhpcy5oaWRkZW4pIHJldHVybjtcbiAgICBzdXBlci5kcmF3KGNvbnRleHQpO1xuXG4gICAgY29uc3QgY2FudmFzID0gY29udGV4dC5jYW52YXM7XG4gICAgY29uc3QgY3R4ID0gY2FudmFzLmdldENvbnRleHQoXCIyZFwiKTtcbiAgICBcbiAgICBVdGlscy5kcmF3Q2lyY2xlKGN0eCwgdGhpcy54LCB0aGlzLnksIHRoaXMud2lkdGgsIHRoaXMuc3R5bGUubGluZVdpZHRoLCB0aGlzLnN0eWxlLmNvbG9yLCB0aGlzLnN0eWxlLmxpbmVDYXAsIHRoaXMuc3R5bGUuZmlsbCwgdGhpcy5zdHlsZS5maWxsQ29sb3IpO1xuXG4gICAgdGhpcy5pbml0ID0gdHJ1ZTtcbiAgfVxuXG4gIGdldCB3aWR0aCgpIHtcbiAgICByZXR1cm4gc3VwZXIud2lkdGggKyB0aGlzLnN0eWxlLmxpbmVXaWR0aDtcbiAgfVxuXG4gIGdldCBoZWlnaHQoKSB7XG4gICAgcmV0dXJuIHN1cGVyLmhlaWdodCArIHRoaXMuc3R5bGUubGluZVdpZHRoO1xuICB9XG5cbiAgc2V0IHdpZHRoKHdpZHRoKSB7XG4gICAgc3VwZXIud2lkdGggPSB3aWR0aDtcbiAgfVxuXG4gIHNldCBoZWlnaHQoaGVpZ2h0KSB7XG4gICAgc3VwZXIuaGVpZ2h0ID0gaGVpZ2h0O1xuICB9XG5cbiAgZ2V0IGRlZmF1bHRTdHlsZSgpIHtcbiAgICByZXR1cm4gbmV3IFN0eWxlKHtcbiAgICAgIFwibGluZVdpZHRoXCI6IENvbnN0YW50cy5TZXR0aW5nLkNJUkNMRV9ERUZBVUxUX0xJTkVfU0laRSxcbiAgICAgIFwiY29sb3JcIjogQ29uc3RhbnRzLlNldHRpbmcuQ0lSQ0xFX0RFRkFVTFRfQ09MT1IsXG4gICAgICBcImZpbGxcIjogQ29uc3RhbnRzLlNldHRpbmcuQ0lSQ0xFX0RFRkFVTFRfRklMTCxcbiAgICAgIFwibGluZUNhcFwiOiBDb25zdGFudHMuU2V0dGluZy5DSVJDTEVfREVGQVVMVF9MSU5FX0NBUCxcbiAgICAgIFwiZmlsbENvbG9yXCI6IENvbnN0YW50cy5TZXR0aW5nLkNJUkNMRV9ERUZBVUxUX0ZJTExfQ09MT1JcbiAgICB9KTtcbiAgfVxufSIsIi8qXG4gKiBDb3B5cmlnaHQgKEMpIDIwMjAgRWxpYXN0aWsgKGVsaWFzdGlrc29mdHMuY29tKVxuICpcbiAqIFRoaXMgZmlsZSBpcyBwYXJ0IG9mIFwiSlNHYW1lVG9vbHNcIi5cbiAqXG4gKiBcIkpTR2FtZVRvb2xzXCIgaXMgZnJlZSBzb2Z0d2FyZTogeW91IGNhbiByZWRpc3RyaWJ1dGUgaXQgYW5kL29yIG1vZGlmeVxuICogaXQgdW5kZXIgdGhlIHRlcm1zIG9mIHRoZSBHTlUgR2VuZXJhbCBQdWJsaWMgTGljZW5zZSBhcyBwdWJsaXNoZWQgYnlcbiAqIHRoZSBGcmVlIFNvZnR3YXJlIEZvdW5kYXRpb24sIGVpdGhlciB2ZXJzaW9uIDMgb2YgdGhlIExpY2Vuc2UsIG9yXG4gKiAoYXQgeW91ciBvcHRpb24pIGFueSBsYXRlciB2ZXJzaW9uLlxuICpcbiAqIFwiSlNHYW1lVG9vbHNcIiBpcyBkaXN0cmlidXRlZCBpbiB0aGUgaG9wZSB0aGF0IGl0IHdpbGwgYmUgdXNlZnVsLFxuICogYnV0IFdJVEhPVVQgQU5ZIFdBUlJBTlRZOyB3aXRob3V0IGV2ZW4gdGhlIGltcGxpZWQgd2FycmFudHkgb2ZcbiAqIE1FUkNIQU5UQUJJTElUWSBvciBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRS4gIFNlZSB0aGVcbiAqIEdOVSBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlIGZvciBtb3JlIGRldGFpbHMuXG4gKlxuICogWW91IHNob3VsZCBoYXZlIHJlY2VpdmVkIGEgY29weSBvZiB0aGUgR05VIEdlbmVyYWwgUHVibGljIExpY2Vuc2VcbiAqIGFsb25nIHdpdGggXCJKU0dhbWVUb29sc1wiLiAgSWYgbm90LCBzZWUgPGh0dHA6Ly93d3cuZ251Lm9yZy9saWNlbnNlcy8+LlxuICovXG5pbXBvcnQgQ29tcG9uZW50IGZyb20gXCIuL0NvbXBvbmVudFwiO1xuaW1wb3J0IENvbnRhaW5lciBmcm9tIFwiLi9Db250YWluZXJcIjtcbmltcG9ydCBVdGlscyBmcm9tIFwiLi9VdGlsc1wiO1xuaW1wb3J0IENvbnN0YW50cyBmcm9tIFwiLi9Db25zdGFudHNcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ29sIGV4dGVuZHMgQ29udGFpbmVyIHtcbiAgc2VsZWN0YWJsZSA9IGZhbHNlO1xuICAjX2lubmVySGVpZ2h0ID0gMDtcbiAgI19pbm5lcldpZHRoID0gMDtcblxuICBjb25zdHJ1Y3Rvcih4LCB5LCBtYXhXaWR0aCwgbWF4SGVpZ2h0LCBzdHlsZSwgLi4uY29tcG9uZW50cykge1xuICAgIHN1cGVyKHgsIHksIG1heFdpZHRoLCBtYXhIZWlnaHQsIHN0eWxlLCAuLi5jb21wb25lbnRzKTtcblxuICAgIGlmKCFDb25zdGFudHMuU2V0dGluZy5ESVNBQkxFX0VYUEVSSU1FTlRBTF9PUFRJTUlaQVRJT05TKSB7XG4gICAgICB0aGlzLnVwZGF0ZUlubmVyV2lkdGgoKTtcbiAgICAgIHRoaXMudXBkYXRlSW5uZXJIZWlnaHQoKTtcbiAgXG4gICAgICB0aGlzLmFkZENoYW5nZUFjdGlvbigoKSA9PiB7XG4gICAgICAgIHRoaXMudXBkYXRlSW5uZXJXaWR0aCgpO1xuICAgICAgICB0aGlzLnVwZGF0ZUlubmVySGVpZ2h0KCk7XG4gICAgICB9KTtcbiAgICB9XG4gIH1cblxuICBkcmF3KGNvbnRleHQpIHtcbiAgICBpZih0aGlzLmhpZGRlbikgcmV0dXJuO1xuICAgIHN1cGVyLmRyYXcoY29udGV4dCk7XG5cbiAgICBjb25zdCBjYW52YXMgPSBjb250ZXh0LmNhbnZhcztcbiAgICBjb25zdCBjdHggPSBjYW52YXMuZ2V0Q29udGV4dChcIjJkXCIpO1xuICAgIGN0eC5zYXZlKCk7XG5cbiAgICBsZXQgY3R4VGVtcCA9IGN0eDtcblxuICAgIGlmKHRoaXMuaXNDdXR0aW5nKSB7XG4gICAgICBjdHhUZW1wID0gdGhpcy5jYW52YXNUbXAuZ2V0Q29udGV4dChcIjJkXCIpO1xuICAgICAgY3R4VGVtcC5zY2FsZShDb25zdGFudHMuU2V0dGluZy5QSVhFTF9SQVRJTywgQ29uc3RhbnRzLlNldHRpbmcuUElYRUxfUkFUSU8pO1xuICAgIH1cbiAgXG4gICAgaWYoc3VwZXIuY29tcG9uZW50cyAhPSBudWxsKSB7XG4gICAgICBsZXQgY3VycmVudFkgPSB0aGlzLnN0eWxlLnBhZGRpbmc7XG5cbiAgICAgIHN1cGVyLmNvbXBvbmVudHMuZm9yRWFjaChjb21wb25lbnQgPT4ge1xuICAgICAgICBjdXJyZW50WSA9IHRoaXMuZHJhd0NvbXBvbmVudChjb21wb25lbnQsIGN1cnJlbnRZLCBjdHhUZW1wKTtcbiAgICAgIH0pO1xuICAgIH1cbiAgICBcbiAgICBpZih0aGlzLmlzQ3V0dGluZykge1xuICAgICAgVXRpbHMuZHJhd0ltYWdlRGF0YShjdHgsIHRoaXMuY2FudmFzVG1wLCB0aGlzLngsIHRoaXMueSwgdGhpcy53aWR0aCwgdGhpcy5oZWlnaHQsIHRoaXMueCAqIENvbnN0YW50cy5TZXR0aW5nLlBJWEVMX1JBVElPLCB0aGlzLnkgKiBDb25zdGFudHMuU2V0dGluZy5QSVhFTF9SQVRJTywgdGhpcy53aWR0aCAqIENvbnN0YW50cy5TZXR0aW5nLlBJWEVMX1JBVElPLCB0aGlzLmhlaWdodCAqIENvbnN0YW50cy5TZXR0aW5nLlBJWEVMX1JBVElPKTtcbiAgICB9XG4gICAgXG4gICAgc3VwZXIuZHJhd1Njcm9sbGJhcnMoY3R4KTtcbiAgICBcbiAgICBjdHgucmVzdG9yZSgpO1xuICB9XG5cbiAgZHJhd0NvbXBvbmVudChjb21wb25lbnQsIGN1cnJlbnRZLCBjdHgpIHtcbiAgICBpZihjb21wb25lbnQgaW5zdGFuY2VvZiBDb21wb25lbnQpIHtcbiAgICAgIGNvbXBvbmVudC54ID0gdGhpcy5zdHlsZS5wYWRkaW5nIC0gdGhpcy5vZmZzZXRTY3JvbGxYO1xuICAgICAgY29tcG9uZW50LnkgPSBjdXJyZW50WSAtIHRoaXMub2Zmc2V0U2Nyb2xsWTtcbiAgICAgIFxuICAgICAgaWYoIWNvbXBvbmVudC5oaWRkZW4pIHtcbiAgICAgICAgaWYodGhpcy5pc0NvbXBvbmVudFZpc2libGUoY29tcG9uZW50KSkge1xuICAgICAgICAgIGNvbXBvbmVudC5kcmF3KGN0eCk7XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgIGN1cnJlbnRZICs9IGNvbXBvbmVudC5oZWlnaHQgKyB0aGlzLnN0eWxlLnNwYWNlQmV0d2VlbkNvbXBvbmVudHM7XG4gICAgICB9XG4gICAgfVxuICAgIFxuICAgIHJldHVybiBjdXJyZW50WTtcbiAgfVxuXG4gIHVwZGF0ZUlubmVySGVpZ2h0KCkge1xuICAgIGxldCB0b3RhbEhlaWdodCA9IDA7XG4gICAgc3VwZXIuY29tcG9uZW50cy5mb3JFYWNoKGNvbXBvbmVudCA9PiB7IGlmKCFjb21wb25lbnQuaGlkZGVuKSB0b3RhbEhlaWdodCArPSBjb21wb25lbnQuaGVpZ2h0IH0pO1xuICAgIHRoaXMuI19pbm5lckhlaWdodCA9IHRvdGFsSGVpZ2h0ICsgdGhpcy5zdHlsZS5zcGFjZUJldHdlZW5Db21wb25lbnRzICogKHN1cGVyLmNvbXBvbmVudHMubGVuZ3RoIC0gMSkgKyB0aGlzLnN0eWxlLnBhZGRpbmc7XG4gIH1cblxuICB1cGRhdGVJbm5lcldpZHRoKCkge1xuICAgIGxldCBtYXhXaWR0aCA9IDA7XG4gICAgc3VwZXIuY29tcG9uZW50cy5mb3JFYWNoKGNvbXBvbmVudCA9PiB7IGlmKGNvbXBvbmVudC53aWR0aCA+IG1heFdpZHRoICYmICFjb21wb25lbnQuaGlkZGVuKSBtYXhXaWR0aCA9IGNvbXBvbmVudC53aWR0aDsgfSk7XG4gICAgdGhpcy4jX2lubmVyV2lkdGggPSBtYXhXaWR0aCArIHRoaXMuc3R5bGUucGFkZGluZztcbiAgfVxuXG4gIGdldCBpbm5lckhlaWdodCgpIHtcbiAgICBpZihDb25zdGFudHMuU2V0dGluZy5ESVNBQkxFX0VYUEVSSU1FTlRBTF9PUFRJTUlaQVRJT05TKSB0aGlzLnVwZGF0ZUlubmVySGVpZ2h0KCk7XG4gICAgcmV0dXJuIHRoaXMuI19pbm5lckhlaWdodDtcbiAgfVxuXG4gIGdldCBpbm5lcldpZHRoKCkge1xuICAgIGlmKENvbnN0YW50cy5TZXR0aW5nLkRJU0FCTEVfRVhQRVJJTUVOVEFMX09QVElNSVpBVElPTlMpIHRoaXMudXBkYXRlSW5uZXJXaWR0aCgpO1xuICAgIHJldHVybiB0aGlzLiNfaW5uZXJXaWR0aDtcbiAgfVxuXG4gIGdldCB3aWR0aCgpIHtcbiAgICBjb25zdCB3aWR0aCA9IHRoaXMuaW5uZXJXaWR0aCB8fCAodGhpcy5wYXJlbnQgJiYgdGhpcy5wYXJlbnQud2lkdGgpO1xuICAgIGNvbnN0IG1pbiA9IHRoaXMubWF4V2lkdGggIT0gbnVsbCA/IE1hdGgubWluKHRoaXMubWF4V2lkdGgsIHdpZHRoKSA6IG51bGw7XG4gICAgcmV0dXJuIHRoaXMubWluV2lkdGggIT0gbnVsbCA/IE1hdGgubWF4KHRoaXMubWluV2lkdGgsIG1pbiAhPSBudWxsID8gbWluIDogd2lkdGgpIDogbWluICE9IG51bGwgPyBtaW4gOiB3aWR0aDtcbiAgfVxuXG4gIGdldCBoZWlnaHQoKSB7XG4gICAgY29uc3QgaGVpZ2h0ID0gdGhpcy5pbm5lckhlaWdodCB8fCAodGhpcy5wYXJlbnQgJiYgdGhpcy5wYXJlbnQuaGVpZ2h0KTtcbiAgICBjb25zdCBtaW4gPSB0aGlzLm1heEhlaWdodCAhPSBudWxsID8gTWF0aC5taW4odGhpcy5tYXhIZWlnaHQsIGhlaWdodCkgOiBudWxsO1xuICAgIHJldHVybiB0aGlzLm1pbkhlaWdodCAhPSBudWxsID8gTWF0aC5tYXgodGhpcy5taW5IZWlnaHQsIG1pbiAhPSBudWxsID8gbWluIDogaGVpZ2h0KSA6IG1pbiAhPSBudWxsID8gbWluIDogaGVpZ2h0O1xuICB9XG5cbiAgZ2V0IGRlZmF1bHRTdHlsZSgpIHtcbiAgICByZXR1cm4gc3VwZXIuZGVmYXVsdFN0eWxlO1xuICB9XG59IiwiLypcbiAqIENvcHlyaWdodCAoQykgMjAyMCBFbGlhc3RpayAoZWxpYXN0aWtzb2Z0cy5jb20pXG4gKlxuICogVGhpcyBmaWxlIGlzIHBhcnQgb2YgXCJKU0dhbWVUb29sc1wiLlxuICpcbiAqIFwiSlNHYW1lVG9vbHNcIiBpcyBmcmVlIHNvZnR3YXJlOiB5b3UgY2FuIHJlZGlzdHJpYnV0ZSBpdCBhbmQvb3IgbW9kaWZ5XG4gKiBpdCB1bmRlciB0aGUgdGVybXMgb2YgdGhlIEdOVSBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlIGFzIHB1Ymxpc2hlZCBieVxuICogdGhlIEZyZWUgU29mdHdhcmUgRm91bmRhdGlvbiwgZWl0aGVyIHZlcnNpb24gMyBvZiB0aGUgTGljZW5zZSwgb3JcbiAqIChhdCB5b3VyIG9wdGlvbikgYW55IGxhdGVyIHZlcnNpb24uXG4gKlxuICogXCJKU0dhbWVUb29sc1wiIGlzIGRpc3RyaWJ1dGVkIGluIHRoZSBob3BlIHRoYXQgaXQgd2lsbCBiZSB1c2VmdWwsXG4gKiBidXQgV0lUSE9VVCBBTlkgV0FSUkFOVFk7IHdpdGhvdXQgZXZlbiB0aGUgaW1wbGllZCB3YXJyYW50eSBvZlxuICogTUVSQ0hBTlRBQklMSVRZIG9yIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFLiAgU2VlIHRoZVxuICogR05VIEdlbmVyYWwgUHVibGljIExpY2Vuc2UgZm9yIG1vcmUgZGV0YWlscy5cbiAqXG4gKiBZb3Ugc2hvdWxkIGhhdmUgcmVjZWl2ZWQgYSBjb3B5IG9mIHRoZSBHTlUgR2VuZXJhbCBQdWJsaWMgTGljZW5zZVxuICogYWxvbmcgd2l0aCBcIkpTR2FtZVRvb2xzXCIuICBJZiBub3QsIHNlZSA8aHR0cDovL3d3dy5nbnUub3JnL2xpY2Vuc2VzLz4uXG4gKi9cbmltcG9ydCBDb25zdGFudHMgZnJvbSBcIi4vQ29uc3RhbnRzXCI7XG5pbXBvcnQgU3R5bGUgZnJvbSBcIi4vU3R5bGVcIjtcbmltcG9ydCBSZWFjdG9yIGZyb20gXCIuL1JlYWN0b3JcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ29tcG9uZW50IHtcbiAgc2VsZWN0YWJsZSA9IHRydWU7XG4gICNfd2lkdGggPSAwO1xuICAjX2hlaWdodCA9IDA7XG4gICNfeCA9IDA7XG4gICNfeSA9IDA7XG4gICNfZGlzYWJsZWQgPSBmYWxzZTtcbiAgI19zZWxlY3RlZCA9IGZhbHNlO1xuICAjX3N0eWxlO1xuXG4gIGNvbnN0cnVjdG9yKHgsIHksIHdpZHRoLCBoZWlnaHQsIHN0eWxlKSB7XG4gICAgdGhpcy4jX3ggPSB4IHx8IDA7XG4gICAgdGhpcy4jX3kgPSB5IHx8IDA7XG4gICAgdGhpcy5kZWx0YVggPSAwO1xuICAgIHRoaXMuZGVsdGFZID0gMDtcbiAgICB0aGlzLiNfd2lkdGggPSB3aWR0aDtcbiAgICB0aGlzLiNfaGVpZ2h0ID0gaGVpZ2h0O1xuICAgIHRoaXMuY2FudmFzO1xuICAgIHRoaXMucGFyZW50O1xuXG4gICAgLy8gU3R5bGVcbiAgICB0aGlzLnN0eWxlID0gc3R5bGU7XG4gICAgXG4gICAgLy8gRnVuY3Rpb25zIHRyaWdnZXJlZCBieSBldmVudHNcbiAgICB0aGlzLnJlYWN0b3IgPSBuZXcgUmVhY3RvcigpO1xuICAgIHRoaXMucmVhY3Rvci5yZWdpc3RlckV2ZW50KFwib25DbGlja1wiKTtcbiAgICB0aGlzLnJlYWN0b3IucmVnaXN0ZXJFdmVudChcIm9uSG92ZXJcIik7XG4gICAgdGhpcy5yZWFjdG9yLnJlZ2lzdGVyRXZlbnQoXCJvbkRvd25cIik7XG4gICAgdGhpcy5yZWFjdG9yLnJlZ2lzdGVyRXZlbnQoXCJvblNjcm9sbFwiKTtcbiAgICB0aGlzLnJlYWN0b3IucmVnaXN0ZXJFdmVudChcIm9uTW92ZVwiKTtcbiAgICB0aGlzLnJlYWN0b3IucmVnaXN0ZXJFdmVudChcIm9uVXBcIik7XG4gICAgdGhpcy5yZWFjdG9yLnJlZ2lzdGVyRXZlbnQoXCJvbkNoYW5nZVwiKTtcblxuICAgIC8vIFN0YXRlXG4gICAgdGhpcy5pbml0ID0gZmFsc2U7XG4gICAgdGhpcy5oYXNJbml0RXZlbnRzID0gZmFsc2U7XG4gICAgdGhpcy4jX3NlbGVjdGVkID0gZmFsc2U7XG4gICAgdGhpcy5jbGlja2VkID0gZmFsc2U7XG4gICAgdGhpcy5ob3ZlcmVkID0gZmFsc2U7XG4gICAgdGhpcy4jX2Rpc2FibGVkID0gZmFsc2U7XG4gICAgdGhpcy5tb3ZhYmxlID0gZmFsc2U7XG4gICAgdGhpcy5tb3ZpbmcgPSBmYWxzZTtcblxuICAgIC8vIFNjcm9sbCBzdGF0ZVxuICAgIHRoaXMub2Zmc2V0U2Nyb2xsWCA9IDA7XG4gICAgdGhpcy5vZmZzZXRTY3JvbGxZID0gMDtcblxuICAgIC8vIE1vdmUgZXZlbnRcbiAgICB0aGlzLm9mZnNldE1vdmVYID0gMDtcbiAgICB0aGlzLm9mZnNldE1vdmVZID0gMDtcbiAgICB0aGlzLm1vdmVFdmVudFN0YXJ0WCA9IDA7XG4gICAgdGhpcy5tb3ZlRXZlbnRTdGFydFkgPSAwO1xuXG4gICAgLy8gVG91Y2ggZXZlbnRzXG4gICAgdGhpcy50b3VjaEV2ZW50U3RhcnRYID0gMDtcbiAgICB0aGlzLnRvdWNoRXZlbnRTdGFydFkgPSAwO1xuICAgIHRoaXMudG91Y2hFdmVudFN0YXJ0VGltZXN0YW1wID0gMDtcblxuICAgIHRoaXMudG9vbHRpcDtcbiAgICB0aGlzLmluaXRFdmVudHMoKTtcblxuICAgIHRoaXMuYWRkTW92ZUFjdGlvbigoZGVsdGFYLCBkZWx0YVkpID0+IHtcbiAgICAgIGlmKHRoaXMubW92YWJsZSAmJiAhdGhpcy5kaXNhYmxlZCAmJiB0aGlzLmNsaWNrZWQpIHtcbiAgICAgICAgdGhpcy5kZWx0YVggLT0gZGVsdGFYO1xuICAgICAgICB0aGlzLmRlbHRhWSAtPSBkZWx0YVk7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICBpbml0RXZlbnRzKCkge1xuICAgIGlmKCF0aGlzLmhhc0luaXRFdmVudHMgJiYgdGhpcy5jYW52YXMgIT0gbnVsbCkge1xuICAgICAgdGhpcy5jYW52YXMuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlbW92ZVwiLCB0aGlzLCAoZXZlbnQsIHJlc3VsdCkgPT4ge1xuICAgICAgICBpZighdGhpcy5kaXNhYmxlZCkge1xuICAgICAgICAgIGNvbnN0IG1vdXNlUG9zaXRpb24gPSB0aGlzLmdldE1vdXNlUG9zKGV2ZW50KTtcbiAgICAgICAgICB0aGlzLm1vdmluZyA9IGZhbHNlO1xuXG4gICAgICAgICAgaWYodGhpcy5jbGlja2VkKSB7XG4gICAgICAgICAgICBjb25zdCBkZWx0YVggPSB0aGlzLm1vdmVFdmVudFN0YXJ0WCAtIG1vdXNlUG9zaXRpb24ueDtcbiAgICAgICAgICAgIGNvbnN0IGRlbHRhWSA9IHRoaXMubW92ZUV2ZW50U3RhcnRZIC0gbW91c2VQb3NpdGlvbi55O1xuXG4gICAgICAgICAgICB0aGlzLm9mZnNldE1vdmVYICs9IGRlbHRhWDtcbiAgICAgICAgICAgIHRoaXMub2Zmc2V0TW92ZVkgKz0gZGVsdGFZO1xuXG4gICAgICAgICAgICBpZih0aGlzLnJlYWN0b3IpIHtcbiAgICAgICAgICAgICAgdGhpcy5yZWFjdG9yLmRpc3BhdGNoRXZlbnQoXCJvbk1vdmVcIiwgZGVsdGFYLCBkZWx0YVksIG1vdXNlUG9zaXRpb24pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgXG4gICAgICAgICAgICB0aGlzLm1vdmVFdmVudFN0YXJ0WCA9IG1vdXNlUG9zaXRpb24ueDtcbiAgICAgICAgICAgIHRoaXMubW92ZUV2ZW50U3RhcnRZID0gbW91c2VQb3NpdGlvbi55O1xuICAgICAgICAgICAgdGhpcy5tb3ZpbmcgPSB0cnVlO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGlmKHJlc3VsdCkge1xuICAgICAgICAgICAgaWYodGhpcy5yZWFjdG9yICYmICF0aGlzLmRpc2FibGVkKSB7XG4gICAgICAgICAgICAgIHRoaXMucmVhY3Rvci5kaXNwYXRjaEV2ZW50KFwib25Ib3ZlclwiLCBtb3VzZVBvc2l0aW9uKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYodGhpcy50b29sdGlwKSB7XG4gICAgICAgICAgICAgIHRoaXMudG9vbHRpcC54ID0gbW91c2VQb3NpdGlvbi54ICsgMTA7XG4gICAgICAgICAgICAgIHRoaXMudG9vbHRpcC55ID0gbW91c2VQb3NpdGlvbi55ICsgMTA7XG4gICAgICAgICAgICAgIHRoaXMudG9vbHRpcC5lbmFibGUoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIFxuICAgICAgICAgICAgdGhpcy5ob3ZlcmVkID0gdHJ1ZTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5ob3ZlcmVkID0gZmFsc2U7XG4gICAgICAgICAgICBpZih0aGlzLnRvb2x0aXApIHRoaXMudG9vbHRpcC5kaXNhYmxlKClcbiAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdGhpcy5ob3ZlcmVkID0gZmFsc2U7XG4gICAgICAgICAgdGhpcy5jbGlja2VkID0gZmFsc2U7XG4gICAgICAgICAgaWYodGhpcy50b29sdGlwKSB0aGlzLnRvb2x0aXAuZGlzYWJsZSgpO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICAgIFxuICAgICAgdGhpcy5jYW52YXMuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIHRoaXMsIChldmVudCwgcmVzdWx0KSA9PiB7XG4gICAgICAgIGlmKCF0aGlzLmRpc2FibGVkKSB7XG4gICAgICAgICAgY29uc3QgbW91c2VQb3NpdGlvbiA9IHRoaXMuZ2V0TW91c2VQb3MoZXZlbnQpO1xuXG4gICAgICAgICAgaWYocmVzdWx0ICYmIHRoaXMuaG92ZXJlZCkge1xuICAgICAgICAgICAgaWYoIXRoaXMubW92aW5nKSB7XG4gICAgICAgICAgICAgIGlmKHRoaXMucmVhY3Rvcikge1xuICAgICAgICAgICAgICAgIHRoaXMucmVhY3Rvci5kaXNwYXRjaEV2ZW50KFwib25DbGlja1wiLCBtb3VzZVBvc2l0aW9uKTtcbiAgICAgICAgICAgICAgfVxuICBcbiAgICAgICAgICAgICAgdGhpcy5zZWxlY3RlZCA9IHRydWU7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICB0aGlzLm1vdmluZyA9IGZhbHNlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLmNsaWNrZWQgPSBmYWxzZTtcbiAgICAgICAgICAgIHRoaXMuc2VsZWN0ZWQgPSBmYWxzZTtcbiAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdGhpcy5ob3ZlcmVkID0gZmFsc2U7XG4gICAgICAgICAgdGhpcy5jbGlja2VkID0gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgICAgXG4gICAgICB0aGlzLmNhbnZhcy5hZGRFdmVudExpc3RlbmVyKFwibW91c2Vkb3duXCIsIHRoaXMsIChldmVudCwgcmVzdWx0KSA9PiB7XG4gICAgICAgIGlmKCF0aGlzLmRpc2FibGVkKSB7XG4gICAgICAgICAgY29uc3QgbW91c2VQb3NpdGlvbiA9IHRoaXMuZ2V0TW91c2VQb3MoZXZlbnQpO1xuXG4gICAgICAgICAgaWYocmVzdWx0ICYmICF0aGlzLm1vdmluZykge1xuICAgICAgICAgICAgaWYodGhpcy5yZWFjdG9yKSB7XG4gICAgICAgICAgICAgIHRoaXMucmVhY3Rvci5kaXNwYXRjaEV2ZW50KFwib25Eb3duXCIsIG1vdXNlUG9zaXRpb24pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgXG4gICAgICAgICAgICB0aGlzLmNsaWNrZWQgPSB0cnVlO1xuICAgICAgICAgICAgdGhpcy5tb3ZlRXZlbnRTdGFydFggPSBtb3VzZVBvc2l0aW9uLng7XG4gICAgICAgICAgICB0aGlzLm1vdmVFdmVudFN0YXJ0WSA9IG1vdXNlUG9zaXRpb24ueTtcbiAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdGhpcy5ob3ZlcmVkID0gZmFsc2U7XG4gICAgICAgICAgdGhpcy5jbGlja2VkID0gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgICAgXG4gICAgICB0aGlzLmNhbnZhcy5hZGRFdmVudExpc3RlbmVyKFwibW91c2V1cFwiLCB0aGlzLCAoZXZlbnQpID0+IHtcbiAgICAgICAgaWYoIXRoaXMuZGlzYWJsZWQpIHtcbiAgICAgICAgICBjb25zdCBtb3VzZVBvc2l0aW9uID0gdGhpcy5nZXRNb3VzZVBvcyhldmVudCk7XG5cbiAgICAgICAgICBpZih0aGlzLnJlYWN0b3IpIHtcbiAgICAgICAgICAgIHRoaXMucmVhY3Rvci5kaXNwYXRjaEV2ZW50KFwib25VcFwiLCBtb3VzZVBvc2l0aW9uKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgXG4gICAgICAgICAgdGhpcy5jbGlja2VkID0gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuXG4gICAgICB0aGlzLmNhbnZhcy5hZGRFdmVudExpc3RlbmVyKFwid2hlZWxcIiwgdGhpcywgKGV2ZW50KSA9PiB7XG4gICAgICAgIGlmKHRoaXMuaG92ZXJlZCAmJiAhdGhpcy5kaXNhYmxlZCAmJiAhdGhpcy5zY3JvbGxEaXNhYmxlZCkge1xuICAgICAgICAgIHRoaXMub2Zmc2V0U2Nyb2xsWCArPSBldmVudC5kZWx0YVg7XG4gICAgICAgICAgdGhpcy5vZmZzZXRTY3JvbGxZICs9IGV2ZW50LmRlbHRhWTtcblxuICAgICAgICAgIGlmKHRoaXMucmVhY3Rvcikge1xuICAgICAgICAgICAgdGhpcy5yZWFjdG9yLmRpc3BhdGNoRXZlbnQoXCJvblNjcm9sbFwiLCBldmVudC5kZWx0YVgsIGV2ZW50LmRlbHRhWSk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9KTtcblxuICAgICAgY29uc3QgdG91Y2hTY3JvbGxFdmVudCA9IChldmVudCkgPT4ge1xuICAgICAgICBjb25zdCBjaGFuZ2VkVG91Y2hlcyA9IGV2ZW50LmNoYW5nZWRUb3VjaGVzWzBdO1xuICAgICAgICBjb25zdCBwb3NpdGlvbiA9IHRoaXMuZ2V0TW91c2VQb3MoY2hhbmdlZFRvdWNoZXMpO1xuXG4gICAgICAgIGlmKHRoaXMuaG92ZXJlZCAmJiAhdGhpcy5kaXNhYmxlZCAmJiAhdGhpcy5zY3JvbGxEaXNhYmxlZCkge1xuICAgICAgICAgIGNvbnN0IGRlbHRhWCA9IHRoaXMudG91Y2hFdmVudFN0YXJ0WCAtIHBvc2l0aW9uLng7XG4gICAgICAgICAgY29uc3QgZGVsdGFZID0gdGhpcy50b3VjaEV2ZW50U3RhcnRZIC0gcG9zaXRpb24ueTtcblxuICAgICAgICAgIHRoaXMub2Zmc2V0U2Nyb2xsWCArPSBkZWx0YVg7XG4gICAgICAgICAgdGhpcy5vZmZzZXRTY3JvbGxZICs9IGRlbHRhWTtcblxuICAgICAgICAgIGlmKHRoaXMucmVhY3Rvcikge1xuICAgICAgICAgICAgdGhpcy5yZWFjdG9yLmRpc3BhdGNoRXZlbnQoXCJvblNjcm9sbFwiLCBkZWx0YVgsIGRlbHRhWSwgcG9zaXRpb24pO1xuICAgICAgICAgIH1cbiAgICAgICAgICBcbiAgICAgICAgICB0aGlzLnRvdWNoRXZlbnRTdGFydFggPSBwb3NpdGlvbi54O1xuICAgICAgICAgIHRoaXMudG91Y2hFdmVudFN0YXJ0WSA9IHBvc2l0aW9uLnk7XG4gICAgICAgIH1cbiAgICAgIH07XG5cbiAgICAgIGNvbnN0IHRvdWNoU3RhcnRFbmRFdmVudCA9IChldmVudCwgcmVzdWx0KSA9PiB7XG4gICAgICAgIGNvbnN0IGNoYW5nZWRUb3VjaGVzID0gZXZlbnQuY2hhbmdlZFRvdWNoZXNbMF07XG4gICAgICAgIGNvbnN0IHBvc2l0aW9uID0gdGhpcy5nZXRNb3VzZVBvcyhjaGFuZ2VkVG91Y2hlcyk7XG4gICAgICAgIFxuICAgICAgICBpZihyZXN1bHQpIHtcbiAgICAgICAgICB0aGlzLmhvdmVyZWQgPSB0cnVlO1xuICAgICAgICAgIHRoaXMuc2VsZWN0ZWQgPSB0cnVlO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHRoaXMuaG92ZXJlZCA9IGZhbHNlO1xuICAgICAgICAgIHRoaXMuc2VsZWN0ZWQgPSBmYWxzZTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmKHRoaXMuaG92ZXJlZCAmJiAhdGhpcy5kaXNhYmxlZCkge1xuICAgICAgICAgIHRoaXMudG91Y2hFdmVudFN0YXJ0WCA9IHBvc2l0aW9uLng7XG4gICAgICAgICAgdGhpcy50b3VjaEV2ZW50U3RhcnRZID0gcG9zaXRpb24ueTtcbiAgICAgICAgICB0aGlzLnRvdWNoRXZlbnRTdGFydFRpbWVzdGFtcCA9IGV2ZW50LnRpbWVzdGFtcDtcbiAgICAgICAgfVxuICAgICAgfTtcblxuICAgICAgdGhpcy5jYW52YXMuYWRkRXZlbnRMaXN0ZW5lcihcInRvdWNoc3RhcnRcIiwgdGhpcywgdG91Y2hTdGFydEVuZEV2ZW50KTtcbiAgICAgIHRoaXMuY2FudmFzLmFkZEV2ZW50TGlzdGVuZXIoXCJ0b3VjaGVuZFwiLCB0aGlzLCB0b3VjaFN0YXJ0RW5kRXZlbnQpO1xuXG4gICAgICB0aGlzLmNhbnZhcy5hZGRFdmVudExpc3RlbmVyKFwidG91Y2htb3ZlXCIsIHRoaXMsIChldmVudCkgPT4ge1xuICAgICAgICB0b3VjaFNjcm9sbEV2ZW50KGV2ZW50KTtcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgIH0pO1xuXG4gICAgICB0aGlzLmhhc0luaXRFdmVudHMgPSB0cnVlO1xuICAgIH1cbiAgfVxuXG4gIGRyYXcoY29udGV4dCkge1xuICAgIGlmKHRoaXMuaGlkZGVuKSByZXR1cm47XG4gICAgdGhpcy5pbml0RXZlbnRzKCk7XG5cbiAgICBpZih0aGlzLmRpc2FibGVkKSB7XG4gICAgICB0aGlzLnNlbGVjdGVkID0gZmFsc2U7XG4gICAgICB0aGlzLmNsaWNrZWQgPSBmYWxzZTtcbiAgICAgIHRoaXMuaG92ZXJlZCA9IGZhbHNlO1xuICAgICAgaWYodGhpcy50b29sdGlwKSB0aGlzLnRvb2x0aXAuZGlzYWJsZWQgPSB0cnVlO1xuICAgIH0gZWxzZSBpZih0aGlzLm1vdmFibGUgJiYgdGhpcy5ob3ZlcmVkKSB7XG4gICAgICB0aGlzLmNhbnZhcy5jdXJzb3IgPSBcImdyYWJcIjtcbiAgICB9XG4gIH1cbiAgXG4gIGdldE1vdXNlUG9zKGV2ZW50KSB7XG4gICAgcmV0dXJuIHRoaXMuY2FudmFzLmdldE1vdXNlUG9zKGV2ZW50KTtcbiAgfVxuICBcbiAgaXNJbnNpZGUocG9zKSB7XG4gICAgcmV0dXJuIHBvcy54ID4gdGhpcy54ICYmIHBvcy54IDwgdGhpcy54ICsgdGhpcy53aWR0aCAmJiBwb3MueSA8IHRoaXMueSArIHRoaXMuaGVpZ2h0ICYmIHBvcy55ID4gdGhpcy55O1xuICB9XG4gIFxuICBkaXNhYmxlKCkge1xuICAgIHRoaXMuZGlzYWJsZWQgPSB0cnVlO1xuICAgIHJldHVybiB0cnVlO1xuICB9XG4gIFxuICBlbmFibGUoKSB7XG4gICAgdGhpcy5kaXNhYmxlZCA9IGZhbHNlO1xuICAgIHJldHVybiB0cnVlO1xuICB9XG5cbiAgZ2V0IGRpc2FibGVkKCkge1xuICAgIHJldHVybiB0aGlzLiNfZGlzYWJsZWQgfHwgKHRoaXMucGFyZW50ICYmIHRoaXMucGFyZW50LmRpc2FibGVkKTtcbiAgfVxuXG4gIHNldCBkaXNhYmxlZChkaXNhYmxlZCkge1xuICAgIGlmKGRpc2FibGVkICE9IHRoaXMuI19kaXNhYmxlZCkge1xuICAgICAgdGhpcy4jX2Rpc2FibGVkID0gZGlzYWJsZWQ7XG4gICAgICB0aGlzLnJlYWN0b3IgJiYgdGhpcy5yZWFjdG9yLmRpc3BhdGNoRXZlbnQoXCJvbkNoYW5nZVwiLCB0aGlzKTtcbiAgICB9XG4gIH1cblxuICBzZXRDbGlja0FjdGlvbih0cmlnZ2VyKSB7XG4gICAgdGhpcy5yZW1vdmVBbGxDbGlja0FjdGlvbnMoKTtcbiAgICB0aGlzLmFkZENsaWNrQWN0aW9uKHRyaWdnZXIpO1xuICB9XG4gIFxuICBhZGRDbGlja0FjdGlvbih0cmlnZ2VyKSB7XG4gICAgdGhpcy5yZWFjdG9yLmFkZEV2ZW50TGlzdGVuZXIoXCJvbkNsaWNrXCIsIHRyaWdnZXIpO1xuICB9XG4gIFxuICByZW1vdmVDbGlja0FjdGlvbih0cmlnZ2VyKSB7XG4gICAgdGhpcy5yZWFjdG9yLnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJvbkNsaWNrXCIsIHRyaWdnZXIpO1xuICB9XG5cbiAgcmVtb3ZlQWxsQ2xpY2tBY3Rpb25zKCkge1xuICAgIHRoaXMucmVhY3Rvci5yZW1vdmVBbGxFdmVudExpc3RlbmVyKFwib25DbGlja1wiKTtcbiAgfVxuXG4gIHNldEhvdmVyQWN0aW9uKHRyaWdnZXIpIHtcbiAgICB0aGlzLnJlbW92ZUFsbEhvdmVyQWN0aW9ucygpO1xuICAgIHRoaXMuYWRkSG92ZXJBY3Rpb24odHJpZ2dlcik7XG4gIH1cbiAgXG4gIGFkZEhvdmVyQWN0aW9uKHRyaWdnZXIpIHtcbiAgICB0aGlzLnJlYWN0b3IuYWRkRXZlbnRMaXN0ZW5lcihcIm9uSG92ZXJcIiwgdHJpZ2dlcik7XG4gIH1cbiAgXG4gIHJlbW92ZUhvdmVyQWN0aW9uKHRyaWdnZXIpIHtcbiAgICB0aGlzLnJlYWN0b3IucmVtb3ZlRXZlbnRMaXN0ZW5lcihcIm9uSG92ZXJcIiwgdHJpZ2dlcik7XG4gIH1cblxuICByZW1vdmVBbGxIb3ZlckFjdGlvbnMoKSB7XG4gICAgdGhpcy5yZWFjdG9yLnJlbW92ZUFsbEV2ZW50TGlzdGVuZXIoXCJvbkhvdmVyXCIpO1xuICB9XG5cbiAgc2V0RG93bkFjdGlvbih0cmlnZ2VyKSB7XG4gICAgdGhpcy5yZW1vdmVBbGxEb3duQWN0aW9ucygpO1xuICAgIHRoaXMuYWRkRG93bkFjdGlvbih0cmlnZ2VyKTtcbiAgfVxuICBcbiAgYWRkRG93bkFjdGlvbih0cmlnZ2VyKSB7XG4gICAgdGhpcy5yZWFjdG9yLmFkZEV2ZW50TGlzdGVuZXIoXCJvbkRvd25cIiwgdHJpZ2dlcik7XG4gIH1cbiAgXG4gIHJlbW92ZURvd25BY3Rpb24odHJpZ2dlcikge1xuICAgIHRoaXMucmVhY3Rvci5yZW1vdmVFdmVudExpc3RlbmVyKFwib25Eb3duXCIsIHRyaWdnZXIpO1xuICB9XG5cbiAgcmVtb3ZlQWxsRG93bkFjdGlvbnMoKSB7XG4gICAgdGhpcy5yZWFjdG9yLnJlbW92ZUFsbEV2ZW50TGlzdGVuZXIoXCJvbkRvd25cIik7XG4gIH1cblxuICBzZXRTY3JvbGxBY3Rpb24odHJpZ2dlcikge1xuICAgIHRoaXMucmVtb3ZlQWxsU2Nyb2xsQWN0aW9ucygpO1xuICAgIHRoaXMuYWRkU2Nyb2xsQWN0aW9uKHRyaWdnZXIpO1xuICB9XG4gIFxuICBhZGRTY3JvbGxBY3Rpb24odHJpZ2dlcikge1xuICAgIHRoaXMucmVhY3Rvci5hZGRFdmVudExpc3RlbmVyKFwib25TY3JvbGxcIiwgdHJpZ2dlcik7XG4gIH1cbiAgXG4gIHJlbW92ZVNjcm9sbEFjdGlvbih0cmlnZ2VyKSB7XG4gICAgdGhpcy5yZWFjdG9yLnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJvblNjcm9sbFwiLCB0cmlnZ2VyKTtcbiAgfVxuXG4gIHJlbW92ZUFsbFNjcm9sbEFjdGlvbnMoKSB7XG4gICAgdGhpcy5yZWFjdG9yLnJlbW92ZUFsbEV2ZW50TGlzdGVuZXIoXCJvblNjcm9sbFwiKTtcbiAgfVxuXG4gIHNldE1vdmVBY3Rpb24odHJpZ2dlcikge1xuICAgIHRoaXMucmVtb3ZlQWxsTW92ZUFjdGlvbnMoKTtcbiAgICB0aGlzLmFkZE1vdmVBY3Rpb24odHJpZ2dlcik7XG4gIH1cbiAgXG4gIGFkZE1vdmVBY3Rpb24odHJpZ2dlcikge1xuICAgIHRoaXMucmVhY3Rvci5hZGRFdmVudExpc3RlbmVyKFwib25Nb3ZlXCIsIHRyaWdnZXIpO1xuICB9XG4gIFxuICByZW1vdmVNb3ZlQWN0aW9uKHRyaWdnZXIpIHtcbiAgICB0aGlzLnJlYWN0b3IucmVtb3ZlRXZlbnRMaXN0ZW5lcihcIm9uTW92ZVwiLCB0cmlnZ2VyKTtcbiAgfVxuXG4gIHJlbW92ZUFsbE1vdmVBY3Rpb25zKCkge1xuICAgIHRoaXMucmVhY3Rvci5yZW1vdmVBbGxFdmVudExpc3RlbmVyKFwib25Nb3ZlXCIpO1xuICB9XG4gIFxuICBzZXRDaGFuZ2VBY3Rpb24odHJpZ2dlcikge1xuICAgIHRoaXMucmVtb3ZlQWxsQ2hhbmdlQWN0aW9ucygpO1xuICAgIHRoaXMuYWRkQ2hhbmdlQWN0aW9uKHRyaWdnZXIpO1xuICB9XG4gIFxuICBhZGRDaGFuZ2VBY3Rpb24odHJpZ2dlcikge1xuICAgIHRoaXMucmVhY3Rvci5hZGRFdmVudExpc3RlbmVyKFwib25DaGFuZ2VcIiwgdHJpZ2dlcik7XG4gIH1cbiAgXG4gIHJlbW92ZUNoYW5nZUFjdGlvbih0cmlnZ2VyKSB7XG4gICAgdGhpcy5yZWFjdG9yLnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJvbkNoYW5nZVwiLCB0cmlnZ2VyKTtcbiAgfVxuXG4gIHJlbW92ZUFsbENoYW5nZUFjdGlvbnMoKSB7XG4gICAgdGhpcy5yZWFjdG9yLnJlbW92ZUFsbEV2ZW50TGlzdGVuZXIoXCJvbkNoYW5nZVwiKTtcbiAgfVxuXG4gIHNldFVwQWN0aW9uKHRyaWdnZXIpIHtcbiAgICB0aGlzLnJlbW92ZUFsbFVwQWN0aW9ucygpO1xuICAgIHRoaXMuYWRkVXBBY3Rpb24odHJpZ2dlcik7XG4gIH1cbiAgXG4gIGFkZFVwQWN0aW9uKHRyaWdnZXIpIHtcbiAgICB0aGlzLnJlYWN0b3IuYWRkRXZlbnRMaXN0ZW5lcihcIm9uVXBcIiwgdHJpZ2dlcik7XG4gIH1cbiAgXG4gIHJlbW92ZVVwQWN0aW9uKHRyaWdnZXIpIHtcbiAgICB0aGlzLnJlYWN0b3IucmVtb3ZlRXZlbnRMaXN0ZW5lcihcIm9uVXBcIiwgdHJpZ2dlcik7XG4gIH1cblxuICByZW1vdmVBbGxVcEFjdGlvbnMoKSB7XG4gICAgdGhpcy5yZWFjdG9yLnJlbW92ZUFsbEV2ZW50TGlzdGVuZXIoXCJvblVwXCIpO1xuICB9XG5cbiAgZ2V0IGhlaWdodCgpIHtcbiAgICByZXR1cm4gdGhpcy4jX2hlaWdodDtcbiAgfVxuXG4gIGdldCB3aWR0aCgpIHtcbiAgICByZXR1cm4gdGhpcy4jX3dpZHRoO1xuICB9XG5cbiAgc2V0IHdpZHRoKHdpZHRoKSB7XG4gICAgaWYod2lkdGggIT0gdGhpcy4jX3dpZHRoKSB7XG4gICAgICB0aGlzLiNfd2lkdGggPSB3aWR0aDtcbiAgICAgIHRoaXMucmVhY3RvciAmJiB0aGlzLnJlYWN0b3IuZGlzcGF0Y2hFdmVudChcIm9uQ2hhbmdlXCIsIHRoaXMpO1xuICAgIH1cbiAgfVxuXG4gIHNldCBoZWlnaHQoaGVpZ2h0KSB7XG4gICAgaWYoaGVpZ2h0ICE9IHRoaXMuI19oZWlnaHQpIHtcbiAgICAgIHRoaXMuI19oZWlnaHQgPSBoZWlnaHQ7XG4gICAgICB0aGlzLnJlYWN0b3IgJiYgdGhpcy5yZWFjdG9yLmRpc3BhdGNoRXZlbnQoXCJvbkNoYW5nZVwiLCB0aGlzKTtcbiAgICB9XG4gIH1cblxuICBnZXQgbWF4V2lkdGgoKSB7XG4gICAgcmV0dXJuIHRoaXMud2lkdGg7XG4gIH1cblxuICBnZXQgbWF4SGVpZ2h0KCkge1xuICAgIHJldHVybiB0aGlzLmhlaWdodDtcbiAgfVxuXG4gIGdldCBpbm5lcldpZHRoKCkge1xuICAgIHJldHVybiB0aGlzLndpZHRoO1xuICB9XG5cbiAgZ2V0IGlubmVySGVpZ2h0KCkge1xuICAgIHJldHVybiB0aGlzLmhlaWdodDtcbiAgfVxuXG4gIGdldCBtaW5XaWR0aCgpIHtcbiAgICByZXR1cm4gdGhpcy53aWR0aDtcbiAgfVxuXG4gIGdldCBtaW5IZWlnaHQoKSB7XG4gICAgcmV0dXJuIHRoaXMuaGVpZ2h0O1xuICB9XG5cbiAgZ2V0IHgoKSB7XG4gICAgY29uc3QgcGFyZW50ID0gdGhpcy5wYXJlbnQgfHwgdGhpcy5jYW52YXM7XG5cbiAgICBpZih0aGlzLnN0eWxlLmFsaWduZW1lbnQgJiYgcGFyZW50KSB7XG4gICAgICBjb25zdCBwYXJlbnRXaWR0aCA9IHBhcmVudC53aWR0aDtcbiAgICAgIGNvbnN0IHBhcmVudFBhZGRpbmcgPSAocGFyZW50LnN0eWxlICYmIHBhcmVudC5zdHlsZS5wYWRkaW5nKSB8fCAwO1xuXG4gICAgICBpZih0aGlzLnN0eWxlLmFsaWduZW1lbnQgPT0gQ29uc3RhbnRzLkFsaWduZW1lbnQuQ0VOVEVSKSB7XG4gICAgICAgIHJldHVybiBwYXJlbnQueCArIChwYXJlbnRXaWR0aCAvIDIpIC0gKHRoaXMud2lkdGggLyAyKSArIHRoaXMuZGVsdGFYO1xuICAgICAgfSBlbHNlIGlmKHRoaXMuc3R5bGUuYWxpZ25lbWVudCA9PSBDb25zdGFudHMuQWxpZ25lbWVudC5SSUdIVCkge1xuICAgICAgICByZXR1cm4gcGFyZW50LnggKyAocGFyZW50V2lkdGgpIC0gKHRoaXMud2lkdGgpIC0gcGFyZW50UGFkZGluZyArIHRoaXMuZGVsdGFYO1xuICAgICAgfSBlbHNlIGlmKHRoaXMuc3R5bGUuYWxpZ25lbWVudCA9PSBDb25zdGFudHMuQWxpZ25lbWVudC5MRUZUKSB7XG4gICAgICAgIHJldHVybiBwYXJlbnQueCArIHBhcmVudFBhZGRpbmcgKyB0aGlzLmRlbHRhWDtcbiAgICAgIH1cbiAgICB9IGVsc2UgaWYocGFyZW50KSB7XG4gICAgICByZXR1cm4gcGFyZW50LnggKyB0aGlzLiNfeCArIHRoaXMuZGVsdGFYO1xuICAgIH1cbiAgICBcbiAgICByZXR1cm4gdGhpcy4jX3ggKyB0aGlzLmRlbHRhWDtcbiAgfVxuXG4gIHNldCB4KHgpIHtcbiAgICB0aGlzLiNfeCA9IHg7XG4gICAgdGhpcy5yZWFjdG9yICYmIHRoaXMucmVhY3Rvci5kaXNwYXRjaEV2ZW50KFwib25DaGFuZ2VcIiwgdGhpcyk7XG4gIH1cblxuICBnZXQgeSgpIHtcbiAgICBjb25zdCBwYXJlbnQgPSB0aGlzLnBhcmVudCB8fCB0aGlzLmNhbnZhcztcblxuICAgIGlmKHRoaXMuc3R5bGUudmVydGljYWxBbGlnbmVtZW50ICYmIHBhcmVudCkge1xuICAgICAgY29uc3QgcGFyZW50SGVpZ2h0ID0gcGFyZW50LmhlaWdodDtcbiAgICAgIGNvbnN0IHBhcmVudFBhZGRpbmcgPSAocGFyZW50LnN0eWxlICYmIHBhcmVudC5zdHlsZS5wYWRkaW5nKSB8fCAwO1xuXG4gICAgICBpZih0aGlzLnN0eWxlLnZlcnRpY2FsQWxpZ25lbWVudCA9PSBDb25zdGFudHMuVmVydGljYWxBbGlnbmVtZW50LkJPVFRPTSkge1xuICAgICAgICByZXR1cm4gcGFyZW50LnkgKyAocGFyZW50SGVpZ2h0KSAtICh0aGlzLmhlaWdodCkgLSBwYXJlbnRQYWRkaW5nICsgdGhpcy5kZWx0YVk7XG4gICAgICB9IGVsc2UgaWYodGhpcy5zdHlsZS52ZXJ0aWNhbEFsaWduZW1lbnQgPT0gQ29uc3RhbnRzLlZlcnRpY2FsQWxpZ25lbWVudC5DRU5URVIpIHtcbiAgICAgICAgcmV0dXJuIHBhcmVudC55ICsgKHBhcmVudEhlaWdodCAvIDIpIC0gKHRoaXMuaGVpZ2h0IC8gMikgKyB0aGlzLmRlbHRhWTtcbiAgICAgIH0gZWxzZSBpZih0aGlzLnN0eWxlLnZlcnRpY2FsQWxpZ25lbWVudCA9PSBDb25zdGFudHMuVmVydGljYWxBbGlnbmVtZW50LlRPUCkge1xuICAgICAgICByZXR1cm4gcGFyZW50LnkgKyBwYXJlbnRQYWRkaW5nICsgdGhpcy5kZWx0YVk7XG4gICAgICB9XG4gICAgfSBlbHNlIGlmKHBhcmVudCkge1xuICAgICAgcmV0dXJuIHBhcmVudC55ICsgdGhpcy4jX3kgKyB0aGlzLmRlbHRhWTtcbiAgICB9XG4gICAgXG4gICAgcmV0dXJuIHRoaXMuI195ICsgdGhpcy5kZWx0YVk7XG4gIH1cblxuICBzZXQgeSh5KSB7XG4gICAgdGhpcy4jX3kgPSB5O1xuICAgIHRoaXMucmVhY3RvciAmJiB0aGlzLnJlYWN0b3IuZGlzcGF0Y2hFdmVudChcIm9uQ2hhbmdlXCIsIHRoaXMpO1xuICB9XG5cbiAgZ2V0IGRlZmF1bHRTdHlsZSgpIHtcbiAgICByZXR1cm4gbmV3IFN0eWxlKHtcbiAgICAgIFwicGFkZGluZ1wiOiBDb25zdGFudHMuU2V0dGluZy5ERUZBVUxUX1BBRERJTkcsXG4gICAgICBcInNwYWNlQmV0d2VlbkNvbXBvbmVudHNcIjogQ29uc3RhbnRzLlNldHRpbmcuREVGQVVMVF9TUEFDSU5HXG4gICAgfSk7XG4gIH1cblxuICBnZXQgc3R5bGUoKSB7XG4gICAgcmV0dXJuIHRoaXMuI19zdHlsZSB8fCB0aGlzLmRlZmF1bHRTdHlsZTtcbiAgfVxuXG4gIHNldCBzdHlsZShzdHlsZSkge1xuICAgIHRoaXMuI19zdHlsZSA9IG5ldyBTdHlsZSgpO1xuICAgIHRoaXMuI19zdHlsZS5zZXRBbGwodGhpcy5kZWZhdWx0U3R5bGUuZ2V0U3R5bGVzKCkpO1xuXG4gICAgaWYoc3R5bGUgJiYgc3R5bGUgaW5zdGFuY2VvZiBTdHlsZSkge1xuICAgICAgdGhpcy4jX3N0eWxlLnNldEFsbChzdHlsZS5nZXRTdHlsZXMoKSk7XG4gICAgfVxuXG4gICAgdGhpcy4jX3N0eWxlLmNvbXBvbmVudCA9IHRoaXM7XG4gICAgdGhpcy5yZWFjdG9yICYmIHRoaXMucmVhY3Rvci5kaXNwYXRjaEV2ZW50KFwib25DaGFuZ2VcIiwgdGhpcyk7XG4gIH1cblxuICBnZXQgaGlkZGVuKCkge1xuICAgIHJldHVybiAodGhpcy5zdHlsZSAmJiB0aGlzLnN0eWxlLmhpZGRlbikgfHwgKHRoaXMucGFyZW50ICYmIHRoaXMucGFyZW50LmhpZGRlbik7XG4gIH1cblxuICBzZXQgaGlkZGVuKGhpZGRlbikge1xuICAgIGlmKGhpZGRlbiAhPSB0aGlzLmRpc2FibGVkIHx8IGhpZGRlbiAhPSB0aGlzLnN0eWxlLmhpZGRlbikge1xuICAgICAgdGhpcy5kaXNhYmxlZCA9IGhpZGRlbjtcbiAgICAgIGlmKHRoaXMuc3R5bGUpIHRoaXMuc3R5bGUuc2V0KFwiaGlkZGVuXCIsIGhpZGRlbik7XG4gICAgICB0aGlzLnJlYWN0b3IgJiYgdGhpcy5yZWFjdG9yLmRpc3BhdGNoRXZlbnQoXCJvbkNoYW5nZVwiLCB0aGlzKTtcbiAgICB9XG4gIH1cblxuICBnZXQgc2VsZWN0ZWQoKSB7XG4gICAgcmV0dXJuIHRoaXMuI19zZWxlY3RlZDtcbiAgfVxuXG4gIHNldCBzZWxlY3RlZChzZWxlY3RlZCkge1xuICAgIGlmKHNlbGVjdGVkICE9IHRoaXMuI19zZWxlY3RlZCkge1xuICAgICAgdGhpcy4jX3NlbGVjdGVkID0gc2VsZWN0ZWQ7XG4gICAgICB0aGlzLnJlYWN0b3IgJiYgdGhpcy5yZWFjdG9yLmRpc3BhdGNoRXZlbnQoXCJvbkNoYW5nZVwiLCB0aGlzKTtcbiAgICB9XG4gIH1cblxuICBnZXRBbGxQYXJlbnRzKCkge1xuICAgIGxldCBwYXJlbnQgPSB0aGlzLnBhcmVudDtcbiAgICBsZXQgcmVzID0gW107XG5cbiAgICB3aGlsZShwYXJlbnQpIHtcbiAgICAgIHJlcy5wdXNoKHBhcmVudCk7XG4gICAgICBwYXJlbnQgPSBwYXJlbnQucGFyZW50O1xuICAgIH1cblxuICAgIHJldHVybiByZXM7XG4gIH1cblxuICBzdGF0aWMgY29tcGFyZUNvbXBvbmVudHMoY29tcG9uZW50LCBvdGhlcikge1xuICAgIHJldHVybiBjb21wb25lbnQuY29tcGFyZVRvKG90aGVyKTtcbiAgfVxuXG4gIGNvbXBhcmVUbyhvdGhlckNvbXBvbmVudCkge1xuICAgIGNvbnN0IGlzRm9yZWdyb3VuZCA9IHRoaXMuc3R5bGUgJiYgdGhpcy5zdHlsZS5mb3JlZ3JvdW5kO1xuICAgIGNvbnN0IG90aGVySXNGb3JlZ3JvdW5kID0gb3RoZXJDb21wb25lbnQuc3R5bGUgJiYgb3RoZXJDb21wb25lbnQuc3R5bGUuZm9yZWdyb3VuZDtcbiAgICBjb25zdCB6SW5kZXggPSB0aGlzLnN0eWxlICYmIHRoaXMuc3R5bGUuekluZGV4O1xuICAgIGNvbnN0IG90aGVyekluZGV4ID0gb3RoZXJDb21wb25lbnQuc3R5bGUgJiYgb3RoZXJDb21wb25lbnQuc3R5bGUuekluZGV4O1xuXG4gICAgaWYodGhpcy5wYXJlbnQgPT0gb3RoZXJDb21wb25lbnQpIHtcbiAgICAgIHJldHVybiAxO1xuICAgIH0gZWxzZSBpZihvdGhlckNvbXBvbmVudC5wYXJlbnQgPT0gdGhpcykge1xuICAgICAgcmV0dXJuIC0xO1xuICAgIH0gZWxzZSBpZihpc0ZvcmVncm91bmQgJiYgIW90aGVySXNGb3JlZ3JvdW5kKSB7XG4gICAgICByZXR1cm4gMVxuICAgIH0gZWxzZSBpZighaXNGb3JlZ3JvdW5kICYmIG90aGVySXNGb3JlZ3JvdW5kKSB7XG4gICAgICByZXR1cm4gLTE7XG4gICAgfSBlbHNlIGlmKHpJbmRleCA+IG90aGVyekluZGV4KSB7XG4gICAgICByZXR1cm4gMTtcbiAgICB9IGVsc2UgaWYoekluZGV4IDwgb3RoZXJ6SW5kZXgpIHtcbiAgICAgIHJldHVybiAtMTtcbiAgICB9XG5cbiAgICByZXR1cm4gb3RoZXJDb21wb25lbnQuY29tcGFyZVRvQ29tcG9uZW50KHRoaXMpIHx8IC10aGlzLmNvbXBhcmVUb0NvbXBvbmVudChvdGhlckNvbXBvbmVudCk7XG4gIH1cblxuICBjb21wYXJlVG9Db21wb25lbnQob3RoZXJDb21wb25lbnQpIHtcbiAgICByZXR1cm4gMDtcbiAgfVxuXG4gIGNvbXBhcmVUb01lbnUob3RoZXJDb21wb25lbnQpIHtcbiAgICByZXR1cm4gLTE7XG4gIH1cblxuICBjb21wYXJlVG9Ub29sdGlwKG90aGVyQ29tcG9uZW50KSB7XG4gICAgcmV0dXJuIC0xO1xuICB9XG5cbiAgY29tcGFyZVRvTm90aWZpY2F0aW9uKG90aGVyQ29tcG9uZW50KSB7XG4gICAgcmV0dXJuIC0xO1xuICB9XG5cbiAgY29tcGFyZVRvU2Nyb2xsYmFyKG90aGVyQ29tcG9uZW50KSB7XG4gICAgcmV0dXJuIC0xO1xuICB9XG59IiwiLypcbiAqIENvcHlyaWdodCAoQykgMjAyMCBFbGlhc3RpayAoZWxpYXN0aWtzb2Z0cy5jb20pXG4gKlxuICogVGhpcyBmaWxlIGlzIHBhcnQgb2YgXCJKU0dhbWVUb29sc1wiLlxuICpcbiAqIFwiSlNHYW1lVG9vbHNcIiBpcyBmcmVlIHNvZnR3YXJlOiB5b3UgY2FuIHJlZGlzdHJpYnV0ZSBpdCBhbmQvb3IgbW9kaWZ5XG4gKiBpdCB1bmRlciB0aGUgdGVybXMgb2YgdGhlIEdOVSBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlIGFzIHB1Ymxpc2hlZCBieVxuICogdGhlIEZyZWUgU29mdHdhcmUgRm91bmRhdGlvbiwgZWl0aGVyIHZlcnNpb24gMyBvZiB0aGUgTGljZW5zZSwgb3JcbiAqIChhdCB5b3VyIG9wdGlvbikgYW55IGxhdGVyIHZlcnNpb24uXG4gKlxuICogXCJKU0dhbWVUb29sc1wiIGlzIGRpc3RyaWJ1dGVkIGluIHRoZSBob3BlIHRoYXQgaXQgd2lsbCBiZSB1c2VmdWwsXG4gKiBidXQgV0lUSE9VVCBBTlkgV0FSUkFOVFk7IHdpdGhvdXQgZXZlbiB0aGUgaW1wbGllZCB3YXJyYW50eSBvZlxuICogTUVSQ0hBTlRBQklMSVRZIG9yIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFLiAgU2VlIHRoZVxuICogR05VIEdlbmVyYWwgUHVibGljIExpY2Vuc2UgZm9yIG1vcmUgZGV0YWlscy5cbiAqXG4gKiBZb3Ugc2hvdWxkIGhhdmUgcmVjZWl2ZWQgYSBjb3B5IG9mIHRoZSBHTlUgR2VuZXJhbCBQdWJsaWMgTGljZW5zZVxuICogYWxvbmcgd2l0aCBcIkpTR2FtZVRvb2xzXCIuICBJZiBub3QsIHNlZSA8aHR0cDovL3d3dy5nbnUub3JnL2xpY2Vuc2VzLz4uXG4gKi9cbmV4cG9ydCBkZWZhdWx0IHtcbiAgU2V0dGluZzoge1xuICAgIERJU0FCTEVfT1BUSU1JWkFUSU9OUzogZmFsc2UsIC8vIHRydWUgdG8gZGlzYWJsZSBvcHRpbWl6YXRpb25zLCBjYW4gZml4IHNvbWUgcHJvYmxlbXMsIGRpc2FibGluZyBvcHRpbWl6YXRpb24gcmVkdWNlcyBwZXJmb3JtYW5jZVxuICAgIERJU0FCTEVfRVhQRVJJTUVOVEFMX09QVElNSVpBVElPTlM6IGZhbHNlLCAvLyB0cnVlIHRvIGRpc2FibGUgb3B0aW1pemF0aW9ucyB0aGF0IGFyZSBjb25zaWRlcmVkIGV4cGVyaW1lbnRhbFxuICAgIERJU0FCTEVfSVNfQ09NUE9ORU5UX1ZJU0lCTEVfT1BUSU1JWkFUSU9OUzogdHJ1ZSwgLy8gdHJ1ZSB0byBkaXNhYmxlIG9wdGltaXphdGlvbnMgb2YgdGhlIENvbnRhaW5lci5pc0NvbXBvbmVudFZpc2libGUgbWV0aG9kXG4gICAgRElTQUJMRV9DT05UQUlORVJTX0NVVFRJTkc6IGZhbHNlLCAvLyBkaXNhYmxpbmcgY29udGFpbmVycyBjdXR0aW5nIGFsbG93IHRvIHZpZXcgdGhlIGNvbXBvbmVudHMgb2YgYSBjb250YWluZXIgdGhhdCBhcmUgbm90IHRvdGFsbHkgdmlzaWJsZSwgeW91IGNhbiBhbHNvIGRpc2FibGUgb3B0aW1pemF0aW9ucyB0byBkaXNwbGF5cyBlbGVtZW50cyB0aGF0IGFyZSBub3QgZHJhd24gZm9yIG9wdGltaXphdGlvbiBwdXJwb3Nlc1xuICAgIEVOQUJMRV9QSVhFTF9SQVRJT19SRVNJWklORzogdHJ1ZSwgLy8gZW5hYmxpbmcgdGhpcyBhbGxvdyByZXNpemluZyB0aGUgY2FudmFzIHRvIG1hdGNoIHRoZSBzY3JlZW4gcGl4ZWwgcmF0aW9cbiAgICBQSVhFTF9SQVRJTzogMSwgLy8gdGhlIGN1cnJlbnQgcGl4ZWwgcmF0aW8sIGF1dG9tYXRpY2FsbHkgdXBkYXRlZFxuICAgIFJFU09MVVRJT05fU0NBTEU6IDEsIC8vIHRoZSByZXNvbHV0aW9uIHNjYWxlXG4gICAgRk9OVF9GQU1JTFk6IFwic2Fucy1zZXJpZlwiLFxuICAgIEZPTlRfU0laRTogMjgsXG4gICAgQ0FOVkFTX1dJRFRIOiA2MDAsXG4gICAgQ0FOVkFTX0hFSUdIVDogNDAwLFxuICAgIERFRkFVTFRfUEFERElORzogNixcbiAgICBERUZBVUxUX1NQQUNJTkc6IDYsXG4gICAgQlVUVE9OX0RFRkFVTFRfQkFDS0dST1VORDogXCJyZ2JhKDAsIDAsIDAsIDApXCIsXG4gICAgQlVUVE9OX0RFRkFVTFRfSE9WRVJfQkFDS0dST1VORDogXCIjOTVBNUE2XCIsXG4gICAgQlVUVE9OX0RFRkFVTFRfQ0xJQ0tfQkFDS0dST1VORDogXCIjNzI3RjgwXCIsXG4gICAgQlVUVE9OX0RFRkFVTFRfQUxURVJOQVRJVkVfQkFDS0dST1VORDogXCIjQUNCRUJGXCIsXG4gICAgSU5QVVRfREVGQVVMVF9GT05UX0NPTE9SOiBcIiMwMDBcIixcbiAgICBJTlBVVF9ERUZBVUxUX0JBQ0tHUk9VTkRfQ09MT1I6IFwiI2ZmZlwiLFxuICAgIElOUFVUX0RFRkFVTFRfQk9SREVSX0NPTE9SOiBcIiMwMDBcIixcbiAgICBJTlBVVF9ERUZBVUxUX0JPUkRFUl9DT0xPUl9TRUxFQ1RFRDogXCIjYTJjZGQ4XCIsXG4gICAgSU5QVVRfREVGQVVMVF9TRUxFQ1RfQ09MT1I6IFwiIzI5ODBiOVwiLFxuICAgIExBQkVMX0RFRkFVTFRfRk9OVF9DT0xPUjogXCIjMDAwXCIsXG4gICAgTElOS19ERUZBVUxUX0NPTE9SOiBcIiMwMDAwRUVcIixcbiAgICBMSU5LX0RFRkFVTFRfSE9WRVJfQ09MT1I6IFwiIzRENERGRlwiLFxuICAgIExJTktfREVGQVVMVF9DTElDS19DT0xPUjogXCIjRUU3NzAwXCIsXG4gICAgTUVOVV9ERUZBVUxUX0JBQ0tHUk9VTkQ6IFwicmdiYSg0NCwgNjIsIDgwLCAwLjc1KVwiLFxuICAgIE1FTlVfREVGQVVMVF9CTFVSX0JBQ0tHUk9VTkQ6IGZhbHNlLFxuICAgIE5PVElGSUNBVElPTl9ERUZBVUxUX0JBQ0tHUk9VTkQ6IFwicmdiYSg0NiwgMjA0LCAxMTMsIDAuNSlcIixcbiAgICBOT1RJRklDQVRJT05fREVGQVVMVF9BTklNQVRJT05fRFVSQVRJT046IDUwMCwgLy8gbXNcbiAgICBQUk9HUkVTU19ERUZBVUxUX0JBQ0tHUk9VTkQ6IFwiI2JkYzNjN1wiLFxuICAgIFBST0dSRVNTX0RFRkFVTFRfRk9SRUdST1VORDogXCIjMjdhZTYwXCIsXG4gICAgUFJPR1JFU1NfREVGQVVMVF9BTklNQVRJT05fRFVSQVRJT046IDIwMDAsIC8vIG1zXG4gICAgVE9PTFRJUF9ERUZBVUxUX0JBQ0tHUk9VTkQ6IFwicmdiYSgyNTUsIDI1NSwgMjU1LCAwLjI1KVwiLFxuICAgIEFSUk9XX0RFRkFVTFRfTElORV9DQVA6IFwicm91bmRcIixcbiAgICBBUlJPV19ERUZBVUxUX0NPTE9SOiBcIiNGRjAwMDBcIixcbiAgICBBUlJPV19ERUZBVUxUX0xJTkVfU0laRTogOCxcbiAgICBBUlJPV19ERUZBVUxUX0hFQURfU0laRTogMjAsXG4gICAgQ1JPU1NfREVGQVVMVF9MSU5FX0NBUDogXCJyb3VuZFwiLFxuICAgIENST1NTX0RFRkFVTFRfQ09MT1I6IFwiI2ZmZlwiLFxuICAgIENST1NTX0RFRkFVTFRfTElORV9TSVpFOiAzLFxuICAgIFNDUk9MTEJBUl9ERUZBVUxUX0JBQ0tHUk9VTkQ6IFwicmdiYSgxNDksIDE2NSwgMTY2LCAwLjc1KVwiLFxuICAgIFNDUk9MTEJBUl9ERUZBVUxUX0hPVkVSX0JBQ0tHUk9VTkQ6IFwicmdiYSgxNDksIDE2NSwgMTY2LCAwLjkpXCIsXG4gICAgU0NST0xMQkFSX0RFRkFVTFRfQ0xJQ0tfQkFDS0dST1VORDogXCJyZ2JhKDE0OSwgMTY1LCAxNjYsIDAuNSlcIixcbiAgICBTQ1JPTExCQVJfREVGQVVMVF9TSVpFOiAxMCxcbiAgICBERUZBVUxUX0JPUkRFUl9TSVpFOiAzLFxuICAgIERFRkFVTFRfQk9SREVSX0NPTE9SX1NFTEVDVEVEOiBcIiNhMmNkZDhcIixcbiAgICBERUZBVUxUX0FOSU1BVElPTl9EVVJBVElPTjogMjAwMCwgLy8gbXNcbiAgICBUUklBTkdMRV9ERUZBVUxUX0xJTkVfQ0FQOiBcInJvdW5kXCIsXG4gICAgVFJJQU5HTEVfREVGQVVMVF9DT0xPUjogXCIjMDAwXCIsXG4gICAgVFJJQU5HTEVfREVGQVVMVF9GSUxMX0NPTE9SOiBcIiMwMDBcIixcbiAgICBUUklBTkdMRV9ERUZBVUxUX0xJTkVfU0laRTogMyxcbiAgICBUUklBTkdMRV9ERUZBVUxUX0ZJTEw6IHRydWUsXG4gICAgU0VMRUNUX0RFRkFVTFRfQkFDS0dST1VORDogXCIjZWNmMGYxXCIsXG4gICAgU0VMRUNUX0RFRkFVTFRfSE9WRVJfQkFDS0dST1VORDogXCIjYmRjM2M3XCIsXG4gICAgU0VMRUNUX0RFRkFVTFRfQ0xJQ0tfQkFDS0dST1VORDogXCIjYWRiMmI1XCIsXG4gICAgQ0lSQ0xFX0RFRkFVTFRfTElORV9DQVA6IFwicm91bmRcIixcbiAgICBDSVJDTEVfREVGQVVMVF9DT0xPUjogXCIjZmZmXCIsXG4gICAgQ0lSQ0xFX0RFRkFVTFRfRklMTF9DT0xPUjogXCIjMDAwXCIsXG4gICAgQ0lSQ0xFX0RFRkFVTFRfTElORV9TSVpFOiAzLFxuICAgIENJUkNMRV9ERUZBVUxUX0ZJTEw6IHRydWUsXG4gICAgRVJST1JfTUVOVV9CQUNLR1JPVU5EX0NPTE9SOiBcIiMzNDk4ZGJcIlxuICB9LFxuICBLZXk6IHtcbiAgICBVUDogMzgsXG4gICAgUklHSFQ6IDM5LFxuICAgIEJPVFRPTTogNDAsXG4gICAgTEVGVDogMzcsXG4gICAgRU5URVI6IDEzLFxuICAgIEVDSEFQOiAyNyxcbiAgICBUQUI6IDlcbiAgfSxcbiAgQWxpZ25lbWVudDoge1xuICAgIFJJR0hUOiBcInJpZ2h0XCIsXG4gICAgTEVGVDogXCJsZWZ0XCIsXG4gICAgQ0VOVEVSOiBcImNlbnRlclwiLFxuICAgIERFRkFVTFQ6IFwiZGVmYXVsdFwiXG4gIH0sXG4gIFZlcnRpY2FsQWxpZ25lbWVudDoge1xuICAgIFRPUDogXCJ0b3BcIixcbiAgICBDRU5URVI6IFwiY2VudGVyXCIsXG4gICAgQk9UVE9NOiBcImJvdHRvbVwiLFxuICAgIERFRkFVTFQ6IFwiZGVmYXVsdFwiXG4gIH0sXG4gIFN0cmluZzoge1xuICAgIEVSUk9SX01FU1NBR0VfQ0FOVkFTOiBcIkEgZmF0YWwgZXJyb3IgaGFzIG9jY3VycmVkIGF0IHRoZSBKU0dhbWVUb29scyBsZXZlbC5cIixcbiAgICBFUlJPUl9NRVNTQUdFX0NBTlZBU19MQUJFTCA6IFwiOicoXFxuQSBmYXRhbCBlcnJvciBoYXMgb2NjdXJyZWQgYXQgdGhlIEpTR2FtZVRvb2xzIGxldmVsLlwiLFxuICAgIFJFVFJZOiBcIlJldHJ5XCIsXG4gICAgTk9USUNFX01FU1NBR0U6IFwiTm90aWNlOlwiLFxuICAgIFdBUk5JTkdfTUVTU0FHRTogXCJXYXJuaW5nOlwiLFxuICAgIEVSUk9SX01FU1NBR0U6IFwiRXJyb3I6XCIsXG4gICAgT1BUSU1JWkFUSU9OX0RJU0FCTEVEOiBcIk9wdGltaXphdGlvbnMgYXJlIGRpc2FibGVkLiBZb3UgbWF5IG5vdGljZSBsb3cgcGVyZm9ybWFuY2UuXCIsXG4gICAgQ09OVEFJTkVSX0NVVFRJTkdfRElTQUJMRUQ6IFwiQ29udGFpbmVycyBjdXR0aW5nIGlzIGRpc2FibGVkLlwiLFxuICAgIEJVVFRPTl9JTUFHRV9ERVBSRUNBVEVEOiBcIkpTR2FtZVRvb2xzLkJ1dHRvbkltYWdlIGlzIGRlcHJlY2F0ZWQuIFBsZWFzZSB1c2UgYSBCdXR0b24gd2l0aCBhbiBJbWFnZUNvbnRhaW5lciBpbnN0ZWFkLlwiLFxuICAgIElOUFVUX0ZVTExTQ1JFRU46IFwiVGhlIHVzZSBvZiBKU0dhbWVUb29scy5DYW52YXMgaXMgbmVlZGVkIGZvciBJbnB1dCBjb21wb25lbnRzIHRvIHByb3Blcmx5IHdvcmsgaW4gZnVsbHNjcmVlbiBtb2RlLlwiLFxuICAgIERFVEFJTFM6IFwiRGV0YWlsc1wiXG4gIH1cbn07IiwiLypcbiAqIENvcHlyaWdodCAoQykgMjAyMCBFbGlhc3RpayAoZWxpYXN0aWtzb2Z0cy5jb20pXG4gKlxuICogVGhpcyBmaWxlIGlzIHBhcnQgb2YgXCJKU0dhbWVUb29sc1wiLlxuICpcbiAqIFwiSlNHYW1lVG9vbHNcIiBpcyBmcmVlIHNvZnR3YXJlOiB5b3UgY2FuIHJlZGlzdHJpYnV0ZSBpdCBhbmQvb3IgbW9kaWZ5XG4gKiBpdCB1bmRlciB0aGUgdGVybXMgb2YgdGhlIEdOVSBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlIGFzIHB1Ymxpc2hlZCBieVxuICogdGhlIEZyZWUgU29mdHdhcmUgRm91bmRhdGlvbiwgZWl0aGVyIHZlcnNpb24gMyBvZiB0aGUgTGljZW5zZSwgb3JcbiAqIChhdCB5b3VyIG9wdGlvbikgYW55IGxhdGVyIHZlcnNpb24uXG4gKlxuICogXCJKU0dhbWVUb29sc1wiIGlzIGRpc3RyaWJ1dGVkIGluIHRoZSBob3BlIHRoYXQgaXQgd2lsbCBiZSB1c2VmdWwsXG4gKiBidXQgV0lUSE9VVCBBTlkgV0FSUkFOVFk7IHdpdGhvdXQgZXZlbiB0aGUgaW1wbGllZCB3YXJyYW50eSBvZlxuICogTUVSQ0hBTlRBQklMSVRZIG9yIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFLiAgU2VlIHRoZVxuICogR05VIEdlbmVyYWwgUHVibGljIExpY2Vuc2UgZm9yIG1vcmUgZGV0YWlscy5cbiAqXG4gKiBZb3Ugc2hvdWxkIGhhdmUgcmVjZWl2ZWQgYSBjb3B5IG9mIHRoZSBHTlUgR2VuZXJhbCBQdWJsaWMgTGljZW5zZVxuICogYWxvbmcgd2l0aCBcIkpTR2FtZVRvb2xzXCIuICBJZiBub3QsIHNlZSA8aHR0cDovL3d3dy5nbnUub3JnL2xpY2Vuc2VzLz4uXG4gKi9cbmltcG9ydCBCb3ggZnJvbSBcIi4vQm94XCI7XG5pbXBvcnQgQ29tcG9uZW50IGZyb20gXCIuL0NvbXBvbmVudFwiO1xuaW1wb3J0IENvbnN0YW50cyBmcm9tIFwiLi9Db25zdGFudHNcIjtcbmltcG9ydCBTY3JvbGxiYXJIb3Jpem9udGFsIGZyb20gXCIuL1Njcm9sbGJhckhvcml6b250YWxcIjtcbmltcG9ydCBTY3JvbGxiYXJWZXJ0aWNhbCBmcm9tIFwiLi9TY3JvbGxiYXJWZXJ0aWNhbFwiO1xuaW1wb3J0IFN0eWxlIGZyb20gXCIuL1N0eWxlXCI7XG5pbXBvcnQgVXRpbHMgZnJvbSBcIi4vVXRpbHNcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ29udGFpbmVyIGV4dGVuZHMgQm94IHtcbiAgc2VsZWN0YWJsZSA9IGZhbHNlO1xuICAjY29tcG9uZW50cyA9IFtdO1xuICAjX21heFdpZHRoID0gMDtcbiAgI19tYXhIZWlnaHQgPSAwO1xuICAjX21pbldpZHRoID0gMDtcbiAgI19taW5IZWlnaHQgPSAwO1xuICBldmVudENoYW5nZUNhbGxiYWNrID0gKCkgPT4gdGhpcy5yZWFjdG9yLmRpc3BhdGNoRXZlbnQoXCJvbkNoYW5nZVwiLCB0aGlzKTtcblxuICBjb25zdHJ1Y3Rvcih4LCB5LCBtYXhXaWR0aCwgbWF4SGVpZ2h0LCBzdHlsZSwgLi4uY29tcG9uZW50cykge1xuICAgIHN1cGVyKHgsIHksIG51bGwsIG51bGwsIHN0eWxlKTtcblxuICAgIHRoaXMuYWRkQWxsKC4uLmNvbXBvbmVudHMpO1xuICAgIHRoaXMuY2FudmFzVG1wID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImNhbnZhc1wiKTtcbiAgICB0aGlzLiNfbWF4V2lkdGggPSBtYXhXaWR0aDtcbiAgICB0aGlzLiNfbWF4SGVpZ2h0ID0gbWF4SGVpZ2h0O1xuICAgIHRoaXMuc2Nyb2xsYmFySG9yaXpvbnRhbCA9IG5ldyBTY3JvbGxiYXJIb3Jpem9udGFsKG51bGwsIG51bGwsIHRoaXMpO1xuICAgIHRoaXMuc2Nyb2xsYmFyVmVydGljYWwgPSBuZXcgU2Nyb2xsYmFyVmVydGljYWwobnVsbCwgbnVsbCwgdGhpcyk7XG5cbiAgICB0aGlzLmFkZFNjcm9sbEFjdGlvbigoZGVsdGFYLCBkZWx0YVkpID0+IHRoaXMuY29udHJvbFNjcm9sbGluZyhkZWx0YVgsIGRlbHRhWSkpO1xuXG4gICAgaWYoIUNvbnN0YW50cy5TZXR0aW5nLkRJU0FCTEVfRVhQRVJJTUVOVEFMX09QVElNSVpBVElPTlMpIHtcbiAgICAgIHRoaXMuYWRkQ2hhbmdlQWN0aW9uKGNvbXBvbmVudENoYW5nZWQgPT4ge1xuICAgICAgICBjb21wb25lbnRDaGFuZ2VkID09IHRoaXMucGFyZW50ICYmIHRoaXMuY29tcG9uZW50cy5mb3JFYWNoKGNvbXBvbmVudCA9PiBjb21wb25lbnQgJiYgY29tcG9uZW50LnJlYWN0b3IuZGlzcGF0Y2hFdmVudChcIm9uQ2hhbmdlXCIsIHRoaXMpKTtcbiAgICAgIH0pO1xuICAgIH1cbiAgfVxuXG4gIGRyYXcoY29udGV4dCkge1xuICAgIGlmKHRoaXMuaGlkZGVuKSByZXR1cm47XG4gICAgY29uc3QgY2FudmFzID0gY29udGV4dC5jYW52YXM7XG4gICAgY29uc3QgY3R4ID0gY2FudmFzLmdldENvbnRleHQoXCIyZFwiKTtcbiAgICBjdHguc2F2ZSgpO1xuXG4gICAgaWYodGhpcy5pc0N1dHRpbmcpIHtcbiAgICAgIGNvbnN0IGN0eFRlbXAgPSB0aGlzLmNhbnZhc1RtcC5nZXRDb250ZXh0KFwiMmRcIik7XG4gICAgICB0aGlzLmNhbnZhc1RtcC53aWR0aCA9IFV0aWxzLmdldENhbnZhc1dpZHRoKGNhbnZhcykgKiBDb25zdGFudHMuU2V0dGluZy5QSVhFTF9SQVRJTztcbiAgICAgIHRoaXMuY2FudmFzVG1wLmhlaWdodCA9IFV0aWxzLmdldENhbnZhc0hlaWdodChjYW52YXMpICogQ29uc3RhbnRzLlNldHRpbmcuUElYRUxfUkFUSU87XG4gICAgICB0aGlzLmNhbnZhc1RtcC5zdHlsZS53aWR0aCA9IFV0aWxzLmdldENhbnZhc1dpZHRoKGNhbnZhcyk7XG4gICAgICB0aGlzLmNhbnZhc1RtcC5zdHlsZS5oZWlnaHQgPSBVdGlscy5nZXRDYW52YXNIZWlnaHQoY2FudmFzKTtcbiAgICAgIFV0aWxzLmNsZWFyKGN0eFRlbXApO1xuICAgIH1cbiAgICBcbiAgICB0aGlzLmNvbXBvbmVudHMuZm9yRWFjaChjb21wb25lbnQgPT4ge1xuICAgICAgaWYodGhpcy5jYW52YXMpIGNvbXBvbmVudC5jYW52YXMgPSB0aGlzLmNhbnZhcztcbiAgICB9KTtcbiAgICBcbiAgICB0aGlzLmNvbnRyb2xTY3JvbGxpbmcoMCwgMCk7XG4gICAgc3VwZXIuZHJhdyhjb250ZXh0KTtcblxuICAgIGN0eC5yZXN0b3JlKCk7XG4gIH1cblxuICBkcmF3VmVydGljYWxTY3JvbGxCYXIoY3R4KSB7XG4gICAgaWYodGhpcy5zY3JvbGxiYXJWZXJ0aWNhbCkge1xuICAgICAgdGhpcy5zY3JvbGxiYXJWZXJ0aWNhbC5jYW52YXMgPSB0aGlzLmNhbnZhcztcbiAgICAgIHRoaXMuc2Nyb2xsYmFyVmVydGljYWwuZHJhdyhjdHgpO1xuICAgIH1cbiAgfVxuXG4gIGRyYXdIb3Jpem9udGFsU2Nyb2xsQmFyKGN0eCkge1xuICAgIGlmKHRoaXMuc2Nyb2xsYmFySG9yaXpvbnRhbCkge1xuICAgICAgdGhpcy5zY3JvbGxiYXJIb3Jpem9udGFsLmNhbnZhcyA9IHRoaXMuY2FudmFzO1xuICAgICAgdGhpcy5zY3JvbGxiYXJIb3Jpem9udGFsLmRyYXcoY3R4KTtcbiAgICB9XG4gIH1cblxuICBkcmF3U2Nyb2xsYmFycyhjdHgpIHtcbiAgICBpZighdGhpcy5zdHlsZS5zY3JvbGxYRGlzYWJsZWQpIHRoaXMuZHJhd0hvcml6b250YWxTY3JvbGxCYXIoY3R4KTtcbiAgICBpZighdGhpcy5zdHlsZS5zY3JvbGxZRGlzYWJsZWQpIHRoaXMuZHJhd1ZlcnRpY2FsU2Nyb2xsQmFyKGN0eCk7XG4gIH1cblxuICBzZXQoLi4uY29tcG9uZW50cykge1xuICAgIGxldCBoYXNDaGFuZ2VkID0gZmFsc2U7XG5cbiAgICBpZihjb21wb25lbnRzLmxlbmd0aCA9PSB0aGlzLmNvbXBvbmVudHMubGVuZ3RoKSB7XG4gICAgICBjb21wb25lbnRzLmZvckVhY2goKGNvbXBvbmVudCwgaSkgPT4ge1xuICAgICAgICBpZih0aGlzLmNvbXBvbmVudHNbaV0gIT0gY29tcG9uZW50KSBoYXNDaGFuZ2VkID0gdHJ1ZTtcbiAgICAgIH0pO1xuICAgIH0gZWxzZSB7XG4gICAgICBoYXNDaGFuZ2VkID0gdHJ1ZTtcbiAgICB9XG5cbiAgICBpZihoYXNDaGFuZ2VkKSB7XG4gICAgICB0aGlzLmNsZWFyKCk7XG4gICAgICB0aGlzLmFkZEFsbCguLi5jb21wb25lbnRzKTtcbiAgICB9XG4gIH1cblxuICBhZGQoY29tcG9uZW50KSB7XG4gICAgdGhpcy4jY29tcG9uZW50cy5wdXNoKGNvbXBvbmVudCk7XG4gICAgY29tcG9uZW50LnBhcmVudCA9IHRoaXM7XG4gICAgaWYodGhpcy5jYW52YXMpIGNvbXBvbmVudC5jYW52YXMgPSB0aGlzLmNhbnZhcztcbiAgICBjb21wb25lbnQuYWRkQ2hhbmdlQWN0aW9uKHRoaXMuZXZlbnRDaGFuZ2VDYWxsYmFjayk7XG4gICAgdGhpcy5yZWFjdG9yLmRpc3BhdGNoRXZlbnQoXCJvbkNoYW5nZVwiLCB0aGlzKTtcbiAgfVxuXG4gIGFkZEFsbCguLi5jb21wb25lbnRzKSB7XG4gICAgY29tcG9uZW50cy5mb3JFYWNoKGNvbXBvbmVudCA9PiB0aGlzLmFkZChjb21wb25lbnQpKTtcbiAgfVxuXG4gIHJlbW92ZShjb21wb25lbnQpIHtcbiAgICBpZih0aGlzLiNjb21wb25lbnRzLmluZGV4T2YoY29tcG9uZW50KSAhPSAtMSkge1xuICAgICAgY29tcG9uZW50LnJlbW92ZUNoYW5nZUFjdGlvbih0aGlzLmV2ZW50Q2hhbmdlQ2FsbGJhY2spO1xuICAgICAgdGhpcy4jY29tcG9uZW50cyA9IHRoaXMuI2NvbXBvbmVudHMuZmlsdGVyKGN1cnJlbnQgPT4gY29tcG9uZW50ICE9IGN1cnJlbnQpO1xuICAgICAgdGhpcy5yZWFjdG9yLmRpc3BhdGNoRXZlbnQoXCJvbkNoYW5nZVwiLCB0aGlzKTtcbiAgICB9XG4gIH1cblxuICBjbGVhcigpIHtcbiAgICB0aGlzLiNjb21wb25lbnRzLmZvckVhY2goY29tcG9uZW50ID0+IHRoaXMucmVtb3ZlKGNvbXBvbmVudCkpO1xuICAgIHRoaXMucmVhY3Rvci5kaXNwYXRjaEV2ZW50KFwib25DaGFuZ2VcIiwgdGhpcyk7XG4gIH1cblxuICBnZXQgY29tcG9uZW50cygpIHtcbiAgICBjb25zdCBjb21wb25lbnRzID0gW107XG4gICAgdGhpcy4jY29tcG9uZW50cy5mb3JFYWNoKGNvbXBvbmVudCA9PiBjb21wb25lbnRzLnB1c2goY29tcG9uZW50KSk7XG4gICAgcmV0dXJuIGNvbXBvbmVudHM7XG4gIH1cblxuICBnZXQgYWxsQ29tcG9uZW50cygpIHtcbiAgICBjb25zdCBjb21wb25lbnRzID0gdGhpcy5jb21wb25lbnRzO1xuICAgIGNvbXBvbmVudHMucHVzaCh0aGlzLnNjcm9sbGJhckhvcml6b250YWwpO1xuICAgIGNvbXBvbmVudHMucHVzaCh0aGlzLnNjcm9sbGJhclZlcnRpY2FsKTtcbiAgICByZXR1cm4gY29tcG9uZW50cztcbiAgfVxuXG4gIGdldENvbXBvbmVudHNUcmVlKHN0YXJ0ID0gdGhpcykge1xuICAgIGNvbnN0IGNvbXBvbmVudHMgPSB7XG4gICAgICBcImNvbXBvbmVudFwiOiBzdGFydCxcbiAgICAgIFwiY2hpbGRzXCI6IFtdXG4gICAgfTtcblxuICAgIGlmKHN0YXJ0LmFsbENvbXBvbmVudHMpIHtcbiAgICAgIHN0YXJ0LmFsbENvbXBvbmVudHMuZm9yRWFjaChjb21wb25lbnQgPT4gY29tcG9uZW50cy5jaGlsZHMucHVzaCh0aGlzLmdldENvbXBvbmVudHNUcmVlKGNvbXBvbmVudCkpKTtcbiAgICB9XG5cbiAgICByZXR1cm4gY29tcG9uZW50cztcbiAgfVxuXG4gIHN0YXRpYyBzb3J0Q29tcG9uZW50c1RyZWUoY29tcG9uZW50LCBvdGhlcikge1xuICAgIHJldHVybiBjb21wb25lbnQuY29tcG9uZW50LmNvbXBhcmVUbyhvdGhlci5jb21wb25lbnQpO1xuICB9XG5cbiAgZGlzYWJsZSgpIHtcbiAgICBsZXQgY2hhbmdlZCA9IHN1cGVyLmRpc2FibGUoKTtcblxuICAgIHRoaXMuI2NvbXBvbmVudHMuZm9yRWFjaChjb21wb25lbnQgPT4ge1xuICAgICAgaWYoY29tcG9uZW50ICYmIGNvbXBvbmVudC5kaXNhYmxlICYmIGNvbXBvbmVudC5kaXNhYmxlKCkpIHtcbiAgICAgICAgY2hhbmdlZCA9IHRydWU7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICBpZihjaGFuZ2VkKSB0aGlzLnJlYWN0b3IuZGlzcGF0Y2hFdmVudChcIm9uQ2hhbmdlXCIsIHRoaXMpO1xuICB9XG5cbiAgZW5hYmxlKCkge1xuICAgIGxldCBjaGFuZ2VkID0gc3VwZXIuZW5hYmxlKCk7XG5cbiAgICB0aGlzLiNjb21wb25lbnRzLmZvckVhY2goY29tcG9uZW50ID0+IHtcbiAgICAgIGlmKGNvbXBvbmVudCAmJiBjb21wb25lbnQuZW5hYmxlICYmIGNvbXBvbmVudC5lbmFibGUoKSkge1xuICAgICAgICBjaGFuZ2VkID0gdHJ1ZTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIGlmKGNoYW5nZWQpIHRoaXMucmVhY3Rvci5kaXNwYXRjaEV2ZW50KFwib25DaGFuZ2VcIiwgdGhpcyk7XG4gIH1cblxuICBnZXQgd2lkdGgoKSB7XG4gICAgY29uc3Qgd2lkdGggPSAodGhpcy5wYXJlbnQgJiYgdGhpcy5wYXJlbnQud2lkdGgpO1xuICAgIGNvbnN0IG1pbiA9IHRoaXMubWF4V2lkdGggIT0gbnVsbCA/IE1hdGgubWluKHRoaXMubWF4V2lkdGgsIHdpZHRoKSA6IG51bGw7XG4gICAgcmV0dXJuIHRoaXMubWluV2lkdGggIT0gbnVsbCA/IE1hdGgubWF4KHRoaXMubWluV2lkdGgsIG1pbiAhPSBudWxsID8gbWluIDogd2lkdGgpIDogd2lkdGg7XG4gIH1cblxuICBnZXQgaGVpZ2h0KCkge1xuICAgIGNvbnN0IGhlaWdodCA9ICh0aGlzLnBhcmVudCAmJiB0aGlzLnBhcmVudC5oZWlnaHQpO1xuICAgIGNvbnN0IG1pbiA9IHRoaXMubWF4V2lkdGggIT0gbnVsbCA/IE1hdGgubWluKHRoaXMubWF4SGVpZ2h0LCBoZWlnaHQpIDogbnVsbDtcbiAgICByZXR1cm4gdGhpcy5taW5IZWlnaHQgIT0gbnVsbCA/IE1hdGgubWF4KHRoaXMubWluSGVpZ2h0LCBtaW4gIT0gbnVsbCA/IG1pbiA6IGhlaWdodCkgOiBoZWlnaHQ7XG4gIH1cblxuICBnZXQgbWF4V2lkdGgoKSB7XG4gICAgcmV0dXJuIHRoaXMuI19tYXhXaWR0aDtcbiAgfVxuXG4gIGdldCBtYXhIZWlnaHQoKSB7XG4gICAgcmV0dXJuIHRoaXMuI19tYXhIZWlnaHQ7XG4gIH1cblxuICBzZXQgbWF4V2lkdGgobWF4V2lkdGgpIHtcbiAgICBpZihtYXhXaWR0aCAhPSB0aGlzLiNfbWF4V2lkdGgpIHtcbiAgICAgIHRoaXMuI19tYXhXaWR0aCA9IG1heFdpZHRoO1xuICAgICAgdGhpcy5yZWFjdG9yLmRpc3BhdGNoRXZlbnQoXCJvbkNoYW5nZVwiLCB0aGlzKTtcbiAgICB9XG4gIH1cblxuICBzZXQgbWF4SGVpZ2h0KG1heEhlaWdodCkge1xuICAgIGlmKG1heEhlaWdodCAhPSB0aGlzLiNfbWF4SGVpZ2h0KSB7XG4gICAgICB0aGlzLiNfbWF4SGVpZ2h0ID0gbWF4SGVpZ2h0O1xuICAgICAgdGhpcy5yZWFjdG9yLmRpc3BhdGNoRXZlbnQoXCJvbkNoYW5nZVwiLCB0aGlzKTtcbiAgICB9XG4gIH1cblxuICBnZXQgbWluV2lkdGgoKSB7XG4gICAgcmV0dXJuIHRoaXMuI19taW5XaWR0aDtcbiAgfVxuXG4gIGdldCBtaW5IZWlnaHQoKSB7XG4gICAgcmV0dXJuIHRoaXMuI19taW5IZWlnaHQ7XG4gIH1cblxuICBzZXQgbWluV2lkdGgobWluV2lkdGgpIHtcbiAgICBpZihtaW5XaWR0aCAhPSB0aGlzLiNfbWluV2lkdGgpIHtcbiAgICAgIHRoaXMuI19taW5XaWR0aCA9IG1pbldpZHRoO1xuICAgICAgdGhpcy5yZWFjdG9yLmRpc3BhdGNoRXZlbnQoXCJvbkNoYW5nZVwiLCB0aGlzKTtcbiAgICB9XG4gIH1cblxuICBzZXQgbWluSGVpZ2h0KG1pbkhlaWdodCkge1xuICAgIGlmKG1pbkhlaWdodCAhPSB0aGlzLiNfbWluSGVpZ2h0KSB7XG4gICAgICB0aGlzLiNfbWluSGVpZ2h0ID0gbWluSGVpZ2h0O1xuICAgICAgdGhpcy5yZWFjdG9yLmRpc3BhdGNoRXZlbnQoXCJvbkNoYW5nZVwiLCB0aGlzKTtcbiAgICB9XG4gIH1cblxuICB1cGRhdGVJbm5lckhlaWdodCgpIHsgfVxuXG4gIHVwZGF0ZUlubmVyV2lkdGgoKSB7IH1cblxuICBzZXQgY2FudmFzKGNhbnZhcykge1xuICAgIGlmKGNhbnZhcyAhPSB0aGlzLmNhbnZhcykge1xuICAgICAgc3VwZXIuY2FudmFzID0gY2FudmFzO1xuICBcbiAgICAgIHRoaXMuI2NvbXBvbmVudHMuZm9yRWFjaChjb21wb25lbnQgPT4ge1xuICAgICAgICBjb21wb25lbnQuY2FudmFzID0gY2FudmFzO1xuICAgICAgICBpZihjb21wb25lbnQucmVhY3RvcikgY29tcG9uZW50LnJlYWN0b3IuZGlzcGF0Y2hFdmVudChcIm9uQ2hhbmdlXCIsIHRoaXMpO1xuICAgICAgfSk7XG4gIFxuICAgICAgdGhpcy5yZWFjdG9yLmRpc3BhdGNoRXZlbnQoXCJvbkNoYW5nZVwiLCB0aGlzKTtcbiAgICB9XG4gIH1cblxuICBnZXQgY2FudmFzKCkge1xuICAgIHJldHVybiBzdXBlci5jYW52YXM7XG4gIH1cblxuICBnZXRDb21wb25lbnRJZChjb21wb25lbnQpIHtcbiAgICBsZXQgcmVzdWx0ID0gbnVsbDtcblxuICAgIHRoaXMuI2NvbXBvbmVudHMuZm9yRWFjaCgoYywgaSkgPT4ge1xuICAgICAgaWYoYyA9PSBjb21wb25lbnQpIHJlc3VsdCA9IGk7XG4gICAgfSk7XG5cbiAgICByZXR1cm4gcmVzdWx0O1xuICB9XG5cbiAgZ2V0IHNjcm9sbEFyZWFTaXplWCgpIHtcbiAgICByZXR1cm4gdGhpcy5pbm5lcldpZHRoIC0gdGhpcy53aWR0aDtcbiAgfVxuXG4gIGdldCBzY3JvbGxBcmVhU2l6ZVkoKSB7XG4gICAgcmV0dXJuIHRoaXMuaW5uZXJIZWlnaHQgLSB0aGlzLmhlaWdodDtcbiAgfVxuXG4gIGNvbnRyb2xTY3JvbGxpbmcoZGVsdGFYLCBkZWx0YVkpIHtcbiAgICBpZighdGhpcy5zdHlsZS5zY3JvbGxZRGlzYWJsZWQpIHtcbiAgICAgIGlmKHRoaXMuc2Nyb2xsQXJlYVNpemVZIDw9IDApIHtcbiAgICAgICAgdGhpcy5vZmZzZXRTY3JvbGxZID0gMDtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGNvbnN0IHBlcmNlbnRTY3JvbGxiYXJZID0gdGhpcy5vZmZzZXRTY3JvbGxZIC8gdGhpcy5zY3JvbGxBcmVhU2l6ZVk7XG4gIFxuICAgICAgICBpZihwZXJjZW50U2Nyb2xsYmFyWSA8PSAwICYmIGRlbHRhWSA8PSAwKSB7XG4gICAgICAgICAgdGhpcy5vZmZzZXRTY3JvbGxZID0gTWF0aC5taW4oMCwgdGhpcy55KTtcbiAgICAgICAgfSBlbHNlIGlmKHBlcmNlbnRTY3JvbGxiYXJZID4gMSAmJiBkZWx0YVkgPj0gMCkge1xuICAgICAgICAgIHRoaXMub2Zmc2V0U2Nyb2xsWSA9IHRoaXMuc2Nyb2xsQXJlYVNpemVZO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMub2Zmc2V0U2Nyb2xsWSAtPSBkZWx0YVk7XG4gICAgfVxuXG4gICAgaWYoIXRoaXMuc3R5bGUuc2Nyb2xsWERpc2FibGVkKSB7XG4gICAgICBpZih0aGlzLnNjcm9sbEFyZWFTaXplWCA8PSAwKSB7XG4gICAgICAgIHRoaXMub2Zmc2V0U2Nyb2xsWCA9IDA7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBjb25zdCBwZXJjZW50U2Nyb2xsYmFyWCA9IHRoaXMub2Zmc2V0U2Nyb2xsWCAvIHRoaXMuc2Nyb2xsQXJlYVNpemVYO1xuICBcbiAgICAgICAgaWYocGVyY2VudFNjcm9sbGJhclggPD0gMCAmJiBkZWx0YVggPD0gMCkge1xuICAgICAgICAgIHRoaXMub2Zmc2V0U2Nyb2xsWCA9IE1hdGgubWluKDAsIHRoaXMueCk7XG4gICAgICAgIH0gZWxzZSBpZihwZXJjZW50U2Nyb2xsYmFyWCA+IDEgJiYgZGVsdGFYID49IDApIHtcbiAgICAgICAgICB0aGlzLm9mZnNldFNjcm9sbFggPSB0aGlzLnNjcm9sbEFyZWFTaXplWDtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLm9mZnNldFNjcm9sbFggLT0gZGVsdGFYO1xuICAgIH1cbiAgfVxuXG4gIGlzQ29tcG9uZW50VmlzaWJsZShjb21wb25lbnQpIHtcbiAgICBpZihDb25zdGFudHMuU2V0dGluZy5ESVNBQkxFX09QVElNSVpBVElPTlMpIHJldHVybiB0cnVlO1xuICAgIFxuICAgIGlmKGNvbXBvbmVudCBpbnN0YW5jZW9mIENvbXBvbmVudCAmJiAhY29tcG9uZW50LmhpZGRlbikge1xuICAgICAgaWYoIUNvbnN0YW50cy5TZXR0aW5nLkRJU0FCTEVfSVNfQ09NUE9ORU5UX1ZJU0lCTEVfT1BUSU1JWkFUSU9OUyAmJiB0aGlzLnBhcmVudCAmJiB0aGlzLnBhcmVudC5pc0NvbXBvbmVudFZpc2libGUgJiYgIXRoaXMucGFyZW50LmlzQ29tcG9uZW50VmlzaWJsZShjb21wb25lbnQpKSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgIH1cblxuICAgICAgY29uc3Qgd2lkdGggPSB0aGlzLndpZHRoO1xuICAgICAgY29uc3QgaGVpZ2h0ID0gdGhpcy5oZWlnaHQ7XG4gICAgICBjb25zdCBjb21wb25lbnRXaWR0aCA9IGNvbXBvbmVudC53aWR0aDtcbiAgICAgIGNvbnN0IGNvbXBvbmVudEhlaWdodCA9IGNvbXBvbmVudC5oZWlnaHQ7XG4gICAgICBjb25zdCBjYW52YXNXaWR0aCA9ICh0aGlzLmNhbnZhcyAmJiB0aGlzLmNhbnZhcy53aWR0aCkgfHwgd2lkdGg7XG4gICAgICBjb25zdCBjYW52YXNIZWlnaHQgPSAodGhpcy5jYW52YXMgJiYgdGhpcy5jYW52YXMuaGVpZ2h0KSB8fCBoZWlnaHQ7XG5cbiAgICAgIGlmKGNvbXBvbmVudC54ICsgY29tcG9uZW50V2lkdGggPj0gdGhpcy54ICYmIGNvbXBvbmVudC54IDw9IHRoaXMueCArIHdpZHRoICYmIGNvbXBvbmVudC55ICsgY29tcG9uZW50SGVpZ2h0ID49IHRoaXMueSAmJiBjb21wb25lbnQueSA8PSB0aGlzLnkgKyBoZWlnaHQgJiYgY29tcG9uZW50LnggKyBjb21wb25lbnRXaWR0aCA+PSAwICYmIGNvbXBvbmVudC54IDw9IGNhbnZhc1dpZHRoICYmIGNvbXBvbmVudC55ICsgY29tcG9uZW50SGVpZ2h0ID49IDAgJiYgY29tcG9uZW50LnkgPD0gY2FudmFzSGVpZ2h0KSB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIGdldCBpc0N1dHRpbmcoKSB7XG4gICAgcmV0dXJuICFDb25zdGFudHMuU2V0dGluZy5ESVNBQkxFX0NPTlRBSU5FUlNfQ1VUVElORyAmJiAoKCh0aGlzLm1heFdpZHRoICYmIHRoaXMuaW5uZXJXaWR0aCA+IHRoaXMubWF4V2lkdGgpIHx8ICh0aGlzLm1heEhlaWdodCAmJiB0aGlzLmlubmVySGVpZ2h0ID4gdGhpcy5tYXhIZWlnaHQpKSkgJiYgdGhpcy5jYW52YXNUbXAgIT0gbnVsbDtcbiAgfVxuXG4gIGdldCBkZWZhdWx0U3R5bGUoKSB7XG4gICAgcmV0dXJuIG5ldyBTdHlsZSh7XG4gICAgICBcInBhZGRpbmdcIjogMCxcbiAgICAgIFwic3BhY2VCZXR3ZWVuQ29tcG9uZW50c1wiOiBDb25zdGFudHMuU2V0dGluZy5ERUZBVUxUX1NQQUNJTkdcbiAgICB9KTtcbiAgfVxufSIsIi8qXG4gKiBDb3B5cmlnaHQgKEMpIDIwMjAgRWxpYXN0aWsgKGVsaWFzdGlrc29mdHMuY29tKVxuICpcbiAqIFRoaXMgZmlsZSBpcyBwYXJ0IG9mIFwiSlNHYW1lVG9vbHNcIi5cbiAqXG4gKiBcIkpTR2FtZVRvb2xzXCIgaXMgZnJlZSBzb2Z0d2FyZTogeW91IGNhbiByZWRpc3RyaWJ1dGUgaXQgYW5kL29yIG1vZGlmeVxuICogaXQgdW5kZXIgdGhlIHRlcm1zIG9mIHRoZSBHTlUgR2VuZXJhbCBQdWJsaWMgTGljZW5zZSBhcyBwdWJsaXNoZWQgYnlcbiAqIHRoZSBGcmVlIFNvZnR3YXJlIEZvdW5kYXRpb24sIGVpdGhlciB2ZXJzaW9uIDMgb2YgdGhlIExpY2Vuc2UsIG9yXG4gKiAoYXQgeW91ciBvcHRpb24pIGFueSBsYXRlciB2ZXJzaW9uLlxuICpcbiAqIFwiSlNHYW1lVG9vbHNcIiBpcyBkaXN0cmlidXRlZCBpbiB0aGUgaG9wZSB0aGF0IGl0IHdpbGwgYmUgdXNlZnVsLFxuICogYnV0IFdJVEhPVVQgQU5ZIFdBUlJBTlRZOyB3aXRob3V0IGV2ZW4gdGhlIGltcGxpZWQgd2FycmFudHkgb2ZcbiAqIE1FUkNIQU5UQUJJTElUWSBvciBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRS4gIFNlZSB0aGVcbiAqIEdOVSBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlIGZvciBtb3JlIGRldGFpbHMuXG4gKlxuICogWW91IHNob3VsZCBoYXZlIHJlY2VpdmVkIGEgY29weSBvZiB0aGUgR05VIEdlbmVyYWwgUHVibGljIExpY2Vuc2VcbiAqIGFsb25nIHdpdGggXCJKU0dhbWVUb29sc1wiLiAgSWYgbm90LCBzZWUgPGh0dHA6Ly93d3cuZ251Lm9yZy9saWNlbnNlcy8+LlxuICovXG5pbXBvcnQgQ29tcG9uZW50IGZyb20gXCIuL0NvbXBvbmVudFwiO1xuaW1wb3J0IENvbnN0YW50cyBmcm9tIFwiLi9Db25zdGFudHNcIjtcbmltcG9ydCBVdGlscyBmcm9tIFwiLi9VdGlsc1wiO1xuaW1wb3J0IFN0eWxlIGZyb20gXCIuL1N0eWxlXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIENyb3NzIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgc2VsZWN0YWJsZSA9IGZhbHNlO1xuXG4gIGNvbnN0cnVjdG9yKHgsIHksIHdpZHRoLCBoZWlnaHQsIHN0eWxlKSB7XG4gICAgc3VwZXIoeCwgeSwgd2lkdGgsIGhlaWdodCwgc3R5bGUpO1xuICB9XG5cbiAgZHJhdyhjb250ZXh0KSB7XG4gICAgaWYodGhpcy5oaWRkZW4pIHJldHVybjtcbiAgICBzdXBlci5kcmF3KGNvbnRleHQpO1xuXG4gICAgY29uc3QgY2FudmFzID0gY29udGV4dC5jYW52YXM7XG4gICAgY29uc3QgY3R4ID0gY2FudmFzLmdldENvbnRleHQoXCIyZFwiKTtcbiAgICBcbiAgICBVdGlscy5kcmF3Q3Jvc3MoY3R4LCB0aGlzLngsIHRoaXMueSwgdGhpcy53aWR0aCwgdGhpcy5oZWlnaHQsIHRoaXMuc3R5bGUubGluZVdpZHRoLCB0aGlzLnN0eWxlLmNvbG9yLCB0aGlzLnN0eWxlLmxpbmVDYXApO1xuXG4gICAgdGhpcy5pbml0ID0gdHJ1ZTtcbiAgfVxuXG4gIGdldCB3aWR0aCgpIHtcbiAgICByZXR1cm4gc3VwZXIud2lkdGggKyB0aGlzLnN0eWxlLmxpbmVXaWR0aDtcbiAgfVxuXG4gIGdldCBoZWlnaHQoKSB7XG4gICAgcmV0dXJuIHN1cGVyLmhlaWdodCArIHRoaXMuc3R5bGUubGluZVdpZHRoO1xuICB9XG5cbiAgc2V0IHdpZHRoKHdpZHRoKSB7XG4gICAgc3VwZXIud2lkdGggPSB3aWR0aDtcbiAgfVxuXG4gIHNldCBoZWlnaHQoaGVpZ2h0KSB7XG4gICAgc3VwZXIuaGVpZ2h0ID0gaGVpZ2h0O1xuICB9XG5cbiAgZ2V0IGRlZmF1bHRTdHlsZSgpIHtcbiAgICByZXR1cm4gbmV3IFN0eWxlKHtcbiAgICAgIFwibGluZVdpZHRoXCI6IENvbnN0YW50cy5TZXR0aW5nLkNST1NTX0RFRkFVTFRfTElORV9TSVpFLFxuICAgICAgXCJjb2xvclwiOiBDb25zdGFudHMuU2V0dGluZy5DUk9TU19ERUZBVUxUX0NPTE9SLFxuICAgICAgXCJsaW5lQ2FwXCI6IENvbnN0YW50cy5TZXR0aW5nLkNST1NTX0RFRkFVTFRfTElORV9DQVBcbiAgICB9KTtcbiAgfVxufSIsIi8qXG4gKiBDb3B5cmlnaHQgKEMpIDIwMjAgRWxpYXN0aWsgKGVsaWFzdGlrc29mdHMuY29tKVxuICpcbiAqIFRoaXMgZmlsZSBpcyBwYXJ0IG9mIFwiSlNHYW1lVG9vbHNcIi5cbiAqXG4gKiBcIkpTR2FtZVRvb2xzXCIgaXMgZnJlZSBzb2Z0d2FyZTogeW91IGNhbiByZWRpc3RyaWJ1dGUgaXQgYW5kL29yIG1vZGlmeVxuICogaXQgdW5kZXIgdGhlIHRlcm1zIG9mIHRoZSBHTlUgR2VuZXJhbCBQdWJsaWMgTGljZW5zZSBhcyBwdWJsaXNoZWQgYnlcbiAqIHRoZSBGcmVlIFNvZnR3YXJlIEZvdW5kYXRpb24sIGVpdGhlciB2ZXJzaW9uIDMgb2YgdGhlIExpY2Vuc2UsIG9yXG4gKiAoYXQgeW91ciBvcHRpb24pIGFueSBsYXRlciB2ZXJzaW9uLlxuICpcbiAqIFwiSlNHYW1lVG9vbHNcIiBpcyBkaXN0cmlidXRlZCBpbiB0aGUgaG9wZSB0aGF0IGl0IHdpbGwgYmUgdXNlZnVsLFxuICogYnV0IFdJVEhPVVQgQU5ZIFdBUlJBTlRZOyB3aXRob3V0IGV2ZW4gdGhlIGltcGxpZWQgd2FycmFudHkgb2ZcbiAqIE1FUkNIQU5UQUJJTElUWSBvciBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRS4gIFNlZSB0aGVcbiAqIEdOVSBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlIGZvciBtb3JlIGRldGFpbHMuXG4gKlxuICogWW91IHNob3VsZCBoYXZlIHJlY2VpdmVkIGEgY29weSBvZiB0aGUgR05VIEdlbmVyYWwgUHVibGljIExpY2Vuc2VcbiAqIGFsb25nIHdpdGggXCJKU0dhbWVUb29sc1wiLiAgSWYgbm90LCBzZWUgPGh0dHA6Ly93d3cuZ251Lm9yZy9saWNlbnNlcy8+LlxuICovXG5leHBvcnQgZGVmYXVsdCB7XG4gIGVhc2VJbkN1YmljKHgpIHtcbiAgICByZXR1cm4geCAqIHggKiB4O1xuICB9LFxuICBlYXNlT3V0Qm91bmNlKHgpIHtcbiAgICBjb25zdCBuMSA9IDcuNTYyNTtcbiAgICBjb25zdCBkMSA9IDIuNzU7XG4gICAgXG4gICAgaWYoeCA8IDEgLyBkMSkge1xuICAgICAgcmV0dXJuIG4xICogeCAqIHg7XG4gICAgfSBlbHNlIGlmKHggPCAyIC8gZDEpIHtcbiAgICAgIHJldHVybiBuMSAqICh4IC09IDEuNSAvIGQxKSAqIHggKyAwLjc1O1xuICAgIH0gZWxzZSBpZih4IDwgMi41IC8gZDEpIHtcbiAgICAgIHJldHVybiBuMSAqICh4IC09IDIuMjUgLyBkMSkgKiB4ICsgMC45Mzc1O1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gbjEgKiAoeCAtPSAyLjYyNSAvIGQxKSAqIHggKyAwLjk4NDM3NTtcbiAgICB9XG4gIH0sXG4gIGVhc2VJbk91dEN1YmljKHgpIHtcbiAgICByZXR1cm4geCA8IDAuNSA/IDQgKiB4ICogeCAqIHggOiAxIC0gTWF0aC5wb3coLTIgKiB4ICsgMiwgMykgLyAyO1xuICB9LFxuICBlYXNlSW5PdXRTaW5lKHgpIHtcbiAgICByZXR1cm4gLShNYXRoLmNvcyhNYXRoLlBJICogeCkgLSAxKSAvIDI7XG4gIH0sXG4gIGVhc2VJbk91dFF1aW50KHgpIHtcbiAgICByZXR1cm4geCA8IDAuNSA/IDE2ICogeCAqIHggKiB4ICogeCAqIHggOiAxIC0gTWF0aC5wb3coLTIgKiB4ICsgMiwgNSkgLyAyO1xuICB9LFxuICBlYXNlSW5PdXRDaXJjKHgpIHtcbiAgICByZXR1cm4geCA8IDAuNSA/ICgxIC0gTWF0aC5zcXJ0KDEgLSBNYXRoLnBvdygyICogeCwgMikpKSAvIDIgOiAoTWF0aC5zcXJ0KDEgLSBNYXRoLnBvdygtMiAqIHggKyAyLCAyKSkgKyAxKSAvIDI7XG4gIH0sXG4gIGVhc2VJbk91dFF1YWQoeCkge1xuICAgIHJldHVybiB4IDwgMC41ID8gMiAqIHggKiB4IDogMSAtIE1hdGgucG93KC0yICogeCArIDIsIDIpIC8gMjtcbiAgfSxcbiAgZWFzZUluT3V0UXVhcnQoeCkge1xuICAgIHJldHVybiB4IDwgMC41ID8gOCAqIHggKiB4ICogeCAqIHggOiAxIC0gTWF0aC5wb3coLTIgKiB4ICsgMiwgNCkgLyAyO1xuICB9LFxuICBlYXNlSW5PdXRFeHBvKHgpIHtcbiAgICByZXR1cm4geCA9PT0gMCA/IDAgOiB4ID09PSAxID8gMSA6IHggPCAwLjUgPyBNYXRoLnBvdygyLCAyMCAqIHggLSAxMCkgLyAyIDogKDIgLSBNYXRoLnBvdygyLCAtMjAgKiB4ICsgMTApKSAvIDI7XG4gIH0sXG4gIGVhc2VJbk91dEJhY2soeCkge1xuICAgIGNvbnN0IGMxID0gMS43MDE1ODtcbiAgICBjb25zdCBjMiA9IGMxICogMS41MjU7XG4gICAgXG4gICAgcmV0dXJuIHggPCAwLjUgPyAoTWF0aC5wb3coMiAqIHgsIDIpICogKChjMiArIDEpICogMiAqIHggLSBjMikpIC8gMiA6IChNYXRoLnBvdygyICogeCAtIDIsIDIpICogKChjMiArIDEpICogKHggKiAyIC0gMikgKyBjMikgKyAyKSAvIDI7XG4gIH1cbn07IiwiLypcbiAqIENvcHlyaWdodCAoQykgMjAyMC0yMDIxIEVsaWFzdGlrIChlbGlhc3Rpa3NvZnRzLmNvbSlcbiAqXG4gKiBUaGlzIGZpbGUgaXMgcGFydCBvZiBcIkpTR2FtZVRvb2xzXCIuXG4gKlxuICogXCJKU0dhbWVUb29sc1wiIGlzIGZyZWUgc29mdHdhcmU6IHlvdSBjYW4gcmVkaXN0cmlidXRlIGl0IGFuZC9vciBtb2RpZnlcbiAqIGl0IHVuZGVyIHRoZSB0ZXJtcyBvZiB0aGUgR05VIEdlbmVyYWwgUHVibGljIExpY2Vuc2UgYXMgcHVibGlzaGVkIGJ5XG4gKiB0aGUgRnJlZSBTb2Z0d2FyZSBGb3VuZGF0aW9uLCBlaXRoZXIgdmVyc2lvbiAzIG9mIHRoZSBMaWNlbnNlLCBvclxuICogKGF0IHlvdXIgb3B0aW9uKSBhbnkgbGF0ZXIgdmVyc2lvbi5cbiAqXG4gKiBcIkpTR2FtZVRvb2xzXCIgaXMgZGlzdHJpYnV0ZWQgaW4gdGhlIGhvcGUgdGhhdCBpdCB3aWxsIGJlIHVzZWZ1bCxcbiAqIGJ1dCBXSVRIT1VUIEFOWSBXQVJSQU5UWTsgd2l0aG91dCBldmVuIHRoZSBpbXBsaWVkIHdhcnJhbnR5IG9mXG4gKiBNRVJDSEFOVEFCSUxJVFkgb3IgRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UuICBTZWUgdGhlXG4gKiBHTlUgR2VuZXJhbCBQdWJsaWMgTGljZW5zZSBmb3IgbW9yZSBkZXRhaWxzLlxuICpcbiAqIFlvdSBzaG91bGQgaGF2ZSByZWNlaXZlZCBhIGNvcHkgb2YgdGhlIEdOVSBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlXG4gKiBhbG9uZyB3aXRoIFwiSlNHYW1lVG9vbHNcIi4gIElmIG5vdCwgc2VlIDxodHRwOi8vd3d3LmdudS5vcmcvbGljZW5zZXMvPi5cbiAqL1xuaW1wb3J0IFNjZW5lIGZyb20gXCIuL1NjZW5lXCI7XG5pbXBvcnQgQ29uc3RhbnRzIGZyb20gXCIuL0NvbnN0YW50c1wiO1xuaW1wb3J0IFN0eWxlIGZyb20gXCIuL1N0eWxlXCI7XG5pbXBvcnQgTWVudSBmcm9tIFwiLi9NZW51XCI7XG5pbXBvcnQgTGFiZWwgZnJvbSBcIi4vTGFiZWxcIjtcbmltcG9ydCBCdXR0b24gZnJvbSBcIi4vQnV0dG9uXCI7XG5pbXBvcnQgUm93IGZyb20gXCIuL1Jvd1wiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBFcnJvclNjcmVlbiBleHRlbmRzIFNjZW5lIHtcbiAgY29uc3RydWN0b3IoY2FudmFzKSB7XG4gICAgc3VwZXIoKTtcbiAgICB0aGlzLmNhbnZhcyA9IGNhbnZhcztcbiAgICB0aGlzLmxhYmVsRGV0YWlsc1NjZW5lRXJyb3IgPSBuZXcgTGFiZWwoXCJcIiwgbnVsbCwgbnVsbCwgbmV3IFN0eWxlKHsgXCJmb250Q29sb3JcIjogXCJ3aGl0ZVwiLCBcImFsaWduZW1lbnRcIjogXCJjZW50ZXJcIiwgXCJmb250U2l6ZVwiOiBDb25zdGFudHMuU2V0dGluZy5GT05UX1NJWkUgLyAxLjc1IH0pKTtcbiAgICB0aGlzLmxhYmVsRGV0YWlsc1NjZW5lRXJyb3IuaGlkZGVuID0gdHJ1ZTtcblxuICAgIGNvbnN0IGJ1dHRvblNjZW5lRXJyb3IgPSBuZXcgQnV0dG9uKG51bGwsIG51bGwsIG51bGwsIG51bGwsIG5ldyBTdHlsZSh7IFwiYmFja2dyb3VuZENvbG9yXCI6IENvbnN0YW50cy5TZXR0aW5nLkJVVFRPTl9ERUZBVUxUX0FMVEVSTkFUSVZFX0JBQ0tHUk9VTkQgfSksIG5ldyBMYWJlbChDb25zdGFudHMuU3RyaW5nLlJFVFJZLCBudWxsLCBudWxsLCBuZXcgU3R5bGUoeyBcImZvbnRDb2xvclwiOiBcIndoaXRlXCIsIFwiYWxpZ25lbWVudFwiOiBcImNlbnRlclwiIH0pKSk7XG4gICAgY29uc3QgYnV0dG9uRGV0YWlsc1NjZW5lRXJyb3IgPSBuZXcgQnV0dG9uKG51bGwsIG51bGwsIG51bGwsIG51bGwsIG5ldyBTdHlsZSh7IFwiYmFja2dyb3VuZENvbG9yXCI6IENvbnN0YW50cy5TZXR0aW5nLkJVVFRPTl9ERUZBVUxUX0FMVEVSTkFUSVZFX0JBQ0tHUk9VTkQgfSksIG5ldyBMYWJlbChDb25zdGFudHMuU3RyaW5nLkRFVEFJTFMsIG51bGwsIG51bGwsIG5ldyBTdHlsZSh7IFwiZm9udENvbG9yXCI6IFwid2hpdGVcIiwgXCJhbGlnbmVtZW50XCI6IFwiY2VudGVyXCIgfSkpKTtcbiAgICBjb25zdCBjb2xEZXRhaWxzU2NlbmVFcnJvciA9IG5ldyBSb3cobnVsbCwgbnVsbCwgbnVsbCwgMCwgbmV3IFN0eWxlKHsgXCJhbGlnbmVtZW50XCI6IFwiY2VudGVyXCIgfSksIHRoaXMubGFiZWxEZXRhaWxzU2NlbmVFcnJvcik7XG4gICAgY29uc3QgbWVudVNjZW5lRXJyb3IgPSBuZXcgTWVudShuZXcgU3R5bGUoeyBcInNwYWNlQmV0d2VlbkNvbXBvbmVudHNcIjogMTUsIFwiYmFja2dyb3VuZENvbG9yXCI6IENvbnN0YW50cy5TZXR0aW5nLkVSUk9SX01FTlVfQkFDS0dST1VORF9DT0xPUiB9KSwgbmV3IExhYmVsKENvbnN0YW50cy5TdHJpbmcuRVJST1JfTUVTU0FHRV9DQU5WQVNfTEFCRUwsIG51bGwsIG51bGwsIG5ldyBTdHlsZSh7IFwiZm9udENvbG9yXCI6IFwid2hpdGVcIiwgXCJhbGlnbmVtZW50XCI6IFwiY2VudGVyXCIgfSkpLCBjb2xEZXRhaWxzU2NlbmVFcnJvciwgbmV3IFJvdyhudWxsLCBudWxsLCBudWxsLCBudWxsLCBuZXcgU3R5bGUoeyBcImFsaWduZW1lbnRcIjogXCJjZW50ZXJcIiB9KSwgYnV0dG9uU2NlbmVFcnJvciwgYnV0dG9uRGV0YWlsc1NjZW5lRXJyb3IpKTtcbiAgICBtZW51U2NlbmVFcnJvci5lbmFibGUoKTtcblxuICAgIGJ1dHRvblNjZW5lRXJyb3IuYWRkQ2xpY2tBY3Rpb24oKCkgPT4ge1xuICAgICAgICB0aGlzLmNhbnZhcy5oYXNFcnJvciA9IGZhbHNlO1xuICAgICAgICB0aGlzLmNhbnZhcy5zY2VuZSA9IHRoaXMuY2FudmFzLnNjZW5lUHJldmlvdXM7XG4gICAgICAgIHRoaXMubGFiZWxEZXRhaWxzU2NlbmVFcnJvci5oaWRkZW4gPSB0cnVlO1xuICAgICAgICBjb2xEZXRhaWxzU2NlbmVFcnJvci5tYXhIZWlnaHQgPSAwO1xuICAgIH0pO1xuXG4gICAgYnV0dG9uRGV0YWlsc1NjZW5lRXJyb3IuYWRkQ2xpY2tBY3Rpb24oKCkgPT4ge1xuICAgICAgICB0aGlzLmxhYmVsRGV0YWlsc1NjZW5lRXJyb3IuaGlkZGVuID0gIXRoaXMubGFiZWxEZXRhaWxzU2NlbmVFcnJvci5oaWRkZW47XG4gICAgICAgIGNvbERldGFpbHNTY2VuZUVycm9yLm1heEhlaWdodCA9ICF0aGlzLmxhYmVsRGV0YWlsc1NjZW5lRXJyb3IuaGlkZGVuID8gMTAwIDogMDtcbiAgICB9KTtcblxuICAgIHRoaXMuYWRkKG1lbnVTY2VuZUVycm9yKTtcbiAgfVxuXG4gIHNldCBlcnJvclRleHQodGV4dCkge1xuICAgIHRoaXMubGFiZWxEZXRhaWxzU2NlbmVFcnJvci50ZXh0ID0gdGV4dDtcbiAgfVxuXG4gIGdldCBlcnJvclRleHQoKSB7XG4gICAgcmV0dXJuIHRoaXMubGFiZWxEZXRhaWxzU2NlbmVFcnJvci50ZXh0O1xuICB9XG59IiwiLypcbiAqIENvcHlyaWdodCAoQykgMjAyMCBFbGlhc3RpayAoZWxpYXN0aWtzb2Z0cy5jb20pXG4gKlxuICogVGhpcyBmaWxlIGlzIHBhcnQgb2YgXCJKU0dhbWVUb29sc1wiLlxuICpcbiAqIFwiSlNHYW1lVG9vbHNcIiBpcyBmcmVlIHNvZnR3YXJlOiB5b3UgY2FuIHJlZGlzdHJpYnV0ZSBpdCBhbmQvb3IgbW9kaWZ5XG4gKiBpdCB1bmRlciB0aGUgdGVybXMgb2YgdGhlIEdOVSBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlIGFzIHB1Ymxpc2hlZCBieVxuICogdGhlIEZyZWUgU29mdHdhcmUgRm91bmRhdGlvbiwgZWl0aGVyIHZlcnNpb24gMyBvZiB0aGUgTGljZW5zZSwgb3JcbiAqIChhdCB5b3VyIG9wdGlvbikgYW55IGxhdGVyIHZlcnNpb24uXG4gKlxuICogXCJKU0dhbWVUb29sc1wiIGlzIGRpc3RyaWJ1dGVkIGluIHRoZSBob3BlIHRoYXQgaXQgd2lsbCBiZSB1c2VmdWwsXG4gKiBidXQgV0lUSE9VVCBBTlkgV0FSUkFOVFk7IHdpdGhvdXQgZXZlbiB0aGUgaW1wbGllZCB3YXJyYW50eSBvZlxuICogTUVSQ0hBTlRBQklMSVRZIG9yIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFLiAgU2VlIHRoZVxuICogR05VIEdlbmVyYWwgUHVibGljIExpY2Vuc2UgZm9yIG1vcmUgZGV0YWlscy5cbiAqXG4gKiBZb3Ugc2hvdWxkIGhhdmUgcmVjZWl2ZWQgYSBjb3B5IG9mIHRoZSBHTlUgR2VuZXJhbCBQdWJsaWMgTGljZW5zZVxuICogYWxvbmcgd2l0aCBcIkpTR2FtZVRvb2xzXCIuICBJZiBub3QsIHNlZSA8aHR0cDovL3d3dy5nbnUub3JnL2xpY2Vuc2VzLz4uXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEV2ZW50IHtcbiAgY29uc3RydWN0b3IobmFtZSkge1xuICAgIHRoaXMubmFtZSA9IG5hbWU7XG4gICAgdGhpcy5jYWxsYmFja3MgPSBbXTtcbiAgfVxuXG4gIHJlZ2lzdGVyQ2FsbGJhY2soY2FsbGJhY2spIHtcbiAgICB0aGlzLmNhbGxiYWNrcy5wdXNoKGNhbGxiYWNrKTtcbiAgfVxuXG4gIHJlbW92ZUNhbGxiYWNrKGNhbGxiYWNrKSB7XG4gICAgdGhpcy5jYWxsYmFja3MuZmlsdGVyKGN1cnJlbnQgPT4gY3VycmVudCAhPSBjYWxsYmFjayk7XG4gIH1cblxuICByZW1vdmVBbGxDYWxsYmFja3MoKSB7XG4gICAgdGhpcy5jYWxsYmFja3MgPSBbXTtcbiAgfVxufSIsIi8qXG4gKiBDb3B5cmlnaHQgKEMpIDIwMjAgRWxpYXN0aWsgKGVsaWFzdGlrc29mdHMuY29tKVxuICpcbiAqIFRoaXMgZmlsZSBpcyBwYXJ0IG9mIFwiSlNHYW1lVG9vbHNcIi5cbiAqXG4gKiBcIkpTR2FtZVRvb2xzXCIgaXMgZnJlZSBzb2Z0d2FyZTogeW91IGNhbiByZWRpc3RyaWJ1dGUgaXQgYW5kL29yIG1vZGlmeVxuICogaXQgdW5kZXIgdGhlIHRlcm1zIG9mIHRoZSBHTlUgR2VuZXJhbCBQdWJsaWMgTGljZW5zZSBhcyBwdWJsaXNoZWQgYnlcbiAqIHRoZSBGcmVlIFNvZnR3YXJlIEZvdW5kYXRpb24sIGVpdGhlciB2ZXJzaW9uIDMgb2YgdGhlIExpY2Vuc2UsIG9yXG4gKiAoYXQgeW91ciBvcHRpb24pIGFueSBsYXRlciB2ZXJzaW9uLlxuICpcbiAqIFwiSlNHYW1lVG9vbHNcIiBpcyBkaXN0cmlidXRlZCBpbiB0aGUgaG9wZSB0aGF0IGl0IHdpbGwgYmUgdXNlZnVsLFxuICogYnV0IFdJVEhPVVQgQU5ZIFdBUlJBTlRZOyB3aXRob3V0IGV2ZW4gdGhlIGltcGxpZWQgd2FycmFudHkgb2ZcbiAqIE1FUkNIQU5UQUJJTElUWSBvciBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRS4gIFNlZSB0aGVcbiAqIEdOVSBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlIGZvciBtb3JlIGRldGFpbHMuXG4gKlxuICogWW91IHNob3VsZCBoYXZlIHJlY2VpdmVkIGEgY29weSBvZiB0aGUgR05VIEdlbmVyYWwgUHVibGljIExpY2Vuc2VcbiAqIGFsb25nIHdpdGggXCJKU0dhbWVUb29sc1wiLiAgSWYgbm90LCBzZWUgPGh0dHA6Ly93d3cuZ251Lm9yZy9saWNlbnNlcy8+LlxuICovXG5pbXBvcnQgTGFiZWwgZnJvbSBcIi4vTGFiZWxcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRlBTTWV0ZXIgZXh0ZW5kcyBMYWJlbCB7XG4gIHNlbGVjdGFibGUgPSBmYWxzZTtcblxuICBjb25zdHJ1Y3RvcihkaXNwbGF5RnJhbWVzLCB4LCB5LCBzdHlsZSkge1xuICAgIHN1cGVyKG51bGwsIHgsIHksIHN0eWxlKTtcblxuICAgIHRoaXMuZGlzcGxheUZyYW1lcyA9IGRpc3BsYXlGcmFtZXMgfHwgZmFsc2U7XG4gICAgdGhpcy5mcmFtZXMgPSAwO1xuICAgIHRoaXMubGFzdEZyYW1lID0gMDtcbiAgICB0aGlzLmN1cnJlbnRGUFMgPSAwO1xuXG4gICAgdGhpcy5pbnRlcnZhbENvdW50RlBTID0gc2V0SW50ZXJ2YWwoKCkgPT4gdGhpcy5jb3VudEZQUygpLCAxMDAwKTtcbiAgfVxuXG4gIGRyYXcoY29udGV4dCkge1xuICAgIGlmKHRoaXMuaGlkZGVuKSByZXR1cm47XG4gICAgdGhpcy50ZXh0ID0gXCJGUFM6IFwiICsgdGhpcy5jdXJyZW50RlBTICsgKHRoaXMuZGlzcGxheUZyYW1lcyA/IFwiIC8gRnJhbWVzOiBcIiArIHRoaXMuZnJhbWVzIDogXCJcIik7XG4gICAgc3VwZXIuZHJhdyhjb250ZXh0KTtcbiAgICB0aGlzLmZyYW1lcysrO1xuICB9XG5cbiAgY291bnRGUFMoKSB7XG4gICAgaWYodGhpcy5sYXN0RnJhbWUgPiAwKSB0aGlzLmN1cnJlbnRGUFMgPSB0aGlzLmZyYW1lcyAtIHRoaXMubGFzdEZyYW1lO1xuICAgIHRoaXMubGFzdEZyYW1lID0gdGhpcy5mcmFtZXM7XG4gIH1cbn0iLCIvKlxuICogQ29weXJpZ2h0IChDKSAyMDIwIEVsaWFzdGlrIChlbGlhc3Rpa3NvZnRzLmNvbSlcbiAqXG4gKiBUaGlzIGZpbGUgaXMgcGFydCBvZiBcIkpTR2FtZVRvb2xzXCIuXG4gKlxuICogXCJKU0dhbWVUb29sc1wiIGlzIGZyZWUgc29mdHdhcmU6IHlvdSBjYW4gcmVkaXN0cmlidXRlIGl0IGFuZC9vciBtb2RpZnlcbiAqIGl0IHVuZGVyIHRoZSB0ZXJtcyBvZiB0aGUgR05VIEdlbmVyYWwgUHVibGljIExpY2Vuc2UgYXMgcHVibGlzaGVkIGJ5XG4gKiB0aGUgRnJlZSBTb2Z0d2FyZSBGb3VuZGF0aW9uLCBlaXRoZXIgdmVyc2lvbiAzIG9mIHRoZSBMaWNlbnNlLCBvclxuICogKGF0IHlvdXIgb3B0aW9uKSBhbnkgbGF0ZXIgdmVyc2lvbi5cbiAqXG4gKiBcIkpTR2FtZVRvb2xzXCIgaXMgZGlzdHJpYnV0ZWQgaW4gdGhlIGhvcGUgdGhhdCBpdCB3aWxsIGJlIHVzZWZ1bCxcbiAqIGJ1dCBXSVRIT1VUIEFOWSBXQVJSQU5UWTsgd2l0aG91dCBldmVuIHRoZSBpbXBsaWVkIHdhcnJhbnR5IG9mXG4gKiBNRVJDSEFOVEFCSUxJVFkgb3IgRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UuICBTZWUgdGhlXG4gKiBHTlUgR2VuZXJhbCBQdWJsaWMgTGljZW5zZSBmb3IgbW9yZSBkZXRhaWxzLlxuICpcbiAqIFlvdSBzaG91bGQgaGF2ZSByZWNlaXZlZCBhIGNvcHkgb2YgdGhlIEdOVSBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlXG4gKiBhbG9uZyB3aXRoIFwiSlNHYW1lVG9vbHNcIi4gIElmIG5vdCwgc2VlIDxodHRwOi8vd3d3LmdudS5vcmcvbGljZW5zZXMvPi5cbiAqL1xuaW1wb3J0IFV0aWxzIGZyb20gXCIuL1V0aWxzXCI7XG5pbXBvcnQgQ29tcG9uZW50IGZyb20gXCIuL0NvbXBvbmVudFwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBJbWFnZUNvbnRhaW5lciBleHRlbmRzIENvbXBvbmVudCB7XG4gIHNlbGVjdGFibGUgPSBmYWxzZTtcblxuICBjb25zdHJ1Y3RvcihpbWFnZSwgeCwgeSwgd2lkdGgsIGhlaWdodCwgc3R5bGUsIGltYWdlTG9hZGVyKSB7XG4gICAgc3VwZXIoeCwgeSwgd2lkdGgsIGhlaWdodCwgc3R5bGUpO1xuICAgIHRoaXMuaW1hZ2U7XG4gICAgdGhpcy5pbWdTcmM7XG4gICAgdGhpcy5pbWFnZUxvYWRlciA9IGltYWdlTG9hZGVyO1xuXG4gICAgaWYoaW1hZ2UgaW5zdGFuY2VvZiBJbWFnZSkge1xuICAgICAgdGhpcy5pbWFnZSA9IGltYWdlO1xuICAgICAgdGhpcy5pbWdTcmMgPSBpbWFnZS5zcmM7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuaW1nU3JjID0gaW1hZ2U7XG4gICAgfVxuICB9XG5cbiAgZHJhdyhjb250ZXh0KSB7XG4gICAgaWYodGhpcy5oaWRkZW4pIHJldHVybjtcbiAgICBzdXBlci5kcmF3KGNvbnRleHQpO1xuICAgIFxuICAgIGNvbnN0IGNhbnZhcyA9IGNvbnRleHQuY2FudmFzO1xuICAgIGNvbnN0IGN0eCA9IGNhbnZhcy5nZXRDb250ZXh0KFwiMmRcIik7XG4gICAgY3R4LnNhdmUoKTtcbiAgICBcbiAgICBpZih0aGlzLmltZ1NyYyAhPSBudWxsICYmIHRoaXMuaW1hZ2VMb2FkZXIgIT0gbnVsbCkge1xuICAgICAgdGhpcy5sb2FkSW1hZ2UodGhpcy5pbWFnZUxvYWRlcik7XG4gICAgfVxuXG4gICAgaWYodGhpcy5pbWFnZSAhPSBudWxsKSB7XG4gICAgICB0aGlzLmRyYXdJbWFnZShjdHgpO1xuICAgIH1cblxuICAgIGN0eC5yZXN0b3JlKCk7XG4gIH1cblxuICBkcmF3SW1hZ2UoY3R4KSB7XG4gICAgVXRpbHMuZHJhd0ltYWdlKGN0eCwgdGhpcy5pbWFnZSwgTWF0aC5yb3VuZCh0aGlzLngpLCBNYXRoLnJvdW5kKHRoaXMueSksIE1hdGgucm91bmQodGhpcy53aWR0aCksIE1hdGgucm91bmQodGhpcy5oZWlnaHQpKTtcbiAgfVxuXG4gIGdldCBzaXplcygpIHtcbiAgICBsZXQgaW1nV2lkdGggPSBzdXBlci53aWR0aDtcbiAgICBsZXQgaW1nSGVpZ2h0ID0gc3VwZXIuaGVpZ2h0O1xuXG4gICAgaWYodGhpcy5pbWFnZUxvYWRlcikge1xuICAgICAgdGhpcy5sb2FkSW1hZ2UodGhpcy5pbWFnZUxvYWRlcik7XG4gICAgfVxuICAgIFxuICAgIGlmKHRoaXMuaW1hZ2UgJiYgKHRoaXMuaW1hZ2Uud2lkdGggPiBzdXBlci53aWR0aCB8fCB0aGlzLmltYWdlLmhlaWdodCA+IHN1cGVyLmhlaWdodCkpIHtcbiAgICAgIGNvbnN0IGFzcGVjdFJhdGlvID0gdGhpcy5pbWFnZS53aWR0aCAvIHRoaXMuaW1hZ2UuaGVpZ2h0O1xuICAgICAgaW1nV2lkdGggPSBNYXRoLmZsb29yKHN1cGVyLndpZHRoIC8gMS4yNSk7XG4gICAgICBpbWdIZWlnaHQgPSBNYXRoLmZsb29yKGltZ1dpZHRoIC8gYXNwZWN0UmF0aW8pO1xuICAgIH1cblxuICAgIHJldHVybiB7XG4gICAgICB3aWR0aDogaW1nV2lkdGgsXG4gICAgICBoZWlnaHQ6IGltZ0hlaWdodFxuICAgIH1cbiAgfVxuXG4gIGdldCBoZWlnaHQoKSB7XG4gICAgcmV0dXJuIHRoaXMuc2l6ZXMuaGVpZ2h0O1xuICB9XG5cbiAgZ2V0IHdpZHRoKCkge1xuICAgIHJldHVybiB0aGlzLnNpemVzLndpZHRoO1xuICB9XG5cbiAgc2V0IHdpZHRoKHdpZHRoKSB7XG4gICAgc3VwZXIud2lkdGggPSB3aWR0aDtcbiAgfVxuXG4gIHNldCBoZWlnaHQoaGVpZ2h0KSB7XG4gICAgc3VwZXIuaGVpZ2h0ID0gaGVpZ2h0O1xuICB9XG4gIFxuICBsb2FkSW1hZ2UoaW1hZ2VMb2FkZXIpIHtcbiAgICB0aGlzLmltYWdlID0gaW1hZ2VMb2FkZXIuZ2V0KHRoaXMuaW1nU3JjKTtcbiAgfVxufSIsIi8qXG4gKiBDb3B5cmlnaHQgKEMpIDIwMjAgRWxpYXN0aWsgKGVsaWFzdGlrc29mdHMuY29tKVxuICpcbiAqIFRoaXMgZmlsZSBpcyBwYXJ0IG9mIFwiSlNHYW1lVG9vbHNcIi5cbiAqXG4gKiBcIkpTR2FtZVRvb2xzXCIgaXMgZnJlZSBzb2Z0d2FyZTogeW91IGNhbiByZWRpc3RyaWJ1dGUgaXQgYW5kL29yIG1vZGlmeVxuICogaXQgdW5kZXIgdGhlIHRlcm1zIG9mIHRoZSBHTlUgR2VuZXJhbCBQdWJsaWMgTGljZW5zZSBhcyBwdWJsaXNoZWQgYnlcbiAqIHRoZSBGcmVlIFNvZnR3YXJlIEZvdW5kYXRpb24sIGVpdGhlciB2ZXJzaW9uIDMgb2YgdGhlIExpY2Vuc2UsIG9yXG4gKiAoYXQgeW91ciBvcHRpb24pIGFueSBsYXRlciB2ZXJzaW9uLlxuICpcbiAqIFwiSlNHYW1lVG9vbHNcIiBpcyBkaXN0cmlidXRlZCBpbiB0aGUgaG9wZSB0aGF0IGl0IHdpbGwgYmUgdXNlZnVsLFxuICogYnV0IFdJVEhPVVQgQU5ZIFdBUlJBTlRZOyB3aXRob3V0IGV2ZW4gdGhlIGltcGxpZWQgd2FycmFudHkgb2ZcbiAqIE1FUkNIQU5UQUJJTElUWSBvciBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRS4gIFNlZSB0aGVcbiAqIEdOVSBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlIGZvciBtb3JlIGRldGFpbHMuXG4gKlxuICogWW91IHNob3VsZCBoYXZlIHJlY2VpdmVkIGEgY29weSBvZiB0aGUgR05VIEdlbmVyYWwgUHVibGljIExpY2Vuc2VcbiAqIGFsb25nIHdpdGggXCJKU0dhbWVUb29sc1wiLiAgSWYgbm90LCBzZWUgPGh0dHA6Ly93d3cuZ251Lm9yZy9saWNlbnNlcy8+LlxuICovXG5pbXBvcnQgVXRpbHMgZnJvbSBcIi4vVXRpbHNcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgSW1hZ2VMb2FkZXIge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICB0aGlzLmltYWdlcyA9IHt9O1xuICAgIHRoaXMuaW1hZ2VzUmVzaXplZCA9IHt9O1xuICAgIHRoaXMudHJpZWRMb2FkaW5nID0gMDtcbiAgICB0aGlzLmhhc0Vycm9yID0gZmFsc2U7XG4gICAgdGhpcy5uYkltYWdlc1RvTG9hZCA9IDE7XG4gICAgdGhpcy5maXJzdEltYWdlID0gdHJ1ZTtcbiAgfVxuXG4gIGxvYWQoaW1nLCBmdW5jKSB7XG4gICAgaWYodGhpcy5maXJzdEltYWdlKSB7XG4gICAgICB0aGlzLm5iSW1hZ2VzVG9Mb2FkID0gaW1nLmxlbmd0aDtcbiAgICAgIHRoaXMuZmlyc3RJbWFnZSA9IGZhbHNlO1xuICAgIH1cbiAgICBcbiAgICBpZihpbWcubGVuZ3RoID4gMCkge1xuICAgICAgdGhpcy5sb2FkSW1hZ2UoaW1nWzBdLCByZXN1bHQgPT4ge1xuICAgICAgICBpZihyZXN1bHQgPT0gdHJ1ZSkge1xuICAgICAgICAgIGltZy5zaGlmdCgpO1xuICAgICAgICAgIHRoaXMubG9hZChpbWcsIGZ1bmMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHRoaXMuaGFzRXJyb3IgPSB0cnVlO1xuICAgICAgICAgIHJldHVybiBmdW5jKCk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gZnVuYygpO1xuICAgIH1cbiAgfVxuXG4gIGxvYWRJbWFnZShzcmMsIGZ1bmMpIHtcbiAgICB0aGlzLnRyaWVkTG9hZGluZysrO1xuICBcbiAgICBjb25zdCBpbWFnZSA9IG5ldyBJbWFnZSgpO1xuICAgIGltYWdlLnNyYyA9IHNyYztcbiAgXG4gICAgaW1hZ2Uub25sb2FkID0gKCkgPT4ge1xuICAgICAgaWYodGhpcy5pbWFnZXMgIT0gbnVsbCkge1xuICAgICAgICB0aGlzLmltYWdlc1tzcmNdID0gaW1hZ2U7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gZnVuYyhmYWxzZSk7XG4gICAgICB9XG4gIFxuICAgICAgdGhpcy50cmllZExvYWRpbmcgPSAwO1xuICAgICAgcmV0dXJuIGZ1bmModHJ1ZSk7XG4gICAgfTtcbiAgXG4gICAgaW1hZ2Uub25lcnJvciA9ICgpID0+IHtcbiAgICAgIGlmKHRoaXMudHJpZWRMb2FkaW5nID49IDUpIHtcbiAgICAgICAgaWYodGhpcy5pbWFnZXMgIT0gbnVsbCkge1xuICAgICAgICAgIHRoaXMuaW1hZ2VzW3NyY10gPSBpbWFnZTtcbiAgICAgICAgfVxuICBcbiAgICAgICAgdGhpcy50cmllZExvYWRpbmcgPSAwO1xuICAgICAgICByZXR1cm4gZnVuYyhmYWxzZSk7XG4gICAgICB9XG4gIFxuICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgIHRoaXMubG9hZEltYWdlKHNyYywgZnVuYyk7XG4gICAgICB9LCAyNTApO1xuICAgIH1cbiAgfVxuXG4gIGdldChzcmMsIHdpZHRoLCBoZWlnaHQpIHtcbiAgICBpZih0aGlzLmltYWdlcyAhPSBudWxsICYmIHRoaXMuaW1hZ2VzLmhhc093blByb3BlcnR5KHNyYykpIHtcbiAgICAgIGNvbnN0IGltYWdlID0gdGhpcy5pbWFnZXNbc3JjXTtcblxuICAgICAgaWYoKHdpZHRoIHx8IGhlaWdodCkgJiYgKGltYWdlLndpZHRoICE9IHdpZHRoIHx8IGltYWdlLmhlaWdodCAhPSBoZWlnaHQpKSB7XG4gICAgICAgIGNvbnN0IHcgPSBNYXRoLnJvdW5kKHdpZHRoKTtcbiAgICAgICAgY29uc3QgaCA9IE1hdGgucm91bmQoaGVpZ2h0KTtcbiAgICAgICAgY29uc3QgaWQgPSBzcmMgKyBcIkBcIiArIHcgKyBcIi1cIiArIGg7XG5cbiAgICAgICAgaWYoIXRoaXMuaW1hZ2VzUmVzaXplZC5oYXNPd25Qcm9wZXJ0eShpZCkpIHtcbiAgICAgICAgICBjb25zdCBjYW52YXNUbXAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiY2FudmFzXCIpO1xuICAgICAgICAgIGNvbnN0IGN0eCA9IGNhbnZhc1RtcC5nZXRDb250ZXh0KFwiMmRcIik7XG4gICAgICAgICAgY2FudmFzVG1wLndpZHRoID0gdztcbiAgICAgICAgICBjYW52YXNUbXAuaGVpZ2h0ID0gaDtcblxuICAgICAgICAgIFV0aWxzLmRyYXdJbWFnZShjdHgsIGltYWdlLCAwLCAwLCB3LCBoLCAwLCAwLCBpbWFnZS53aWR0aCwgaW1hZ2UuaGVpZ2h0KTtcbiAgICAgICAgICB0aGlzLmltYWdlc1Jlc2l6ZWRbaWRdID0gY2FudmFzVG1wO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHRoaXMuaW1hZ2VzUmVzaXplZFtpZF07XG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gaW1hZ2U7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cbiAgfVxuXG4gIGNsZWFyKCkge1xuICAgIHRoaXMuaW1hZ2VzID0gbnVsbDtcbiAgfVxufSIsIi8qXG4gKiBDb3B5cmlnaHQgKEMpIDIwMjAgRWxpYXN0aWsgKGVsaWFzdGlrc29mdHMuY29tKVxuICpcbiAqIFRoaXMgZmlsZSBpcyBwYXJ0IG9mIFwiSlNHYW1lVG9vbHNcIi5cbiAqXG4gKiBcIkpTR2FtZVRvb2xzXCIgaXMgZnJlZSBzb2Z0d2FyZTogeW91IGNhbiByZWRpc3RyaWJ1dGUgaXQgYW5kL29yIG1vZGlmeVxuICogaXQgdW5kZXIgdGhlIHRlcm1zIG9mIHRoZSBHTlUgR2VuZXJhbCBQdWJsaWMgTGljZW5zZSBhcyBwdWJsaXNoZWQgYnlcbiAqIHRoZSBGcmVlIFNvZnR3YXJlIEZvdW5kYXRpb24sIGVpdGhlciB2ZXJzaW9uIDMgb2YgdGhlIExpY2Vuc2UsIG9yXG4gKiAoYXQgeW91ciBvcHRpb24pIGFueSBsYXRlciB2ZXJzaW9uLlxuICpcbiAqIFwiSlNHYW1lVG9vbHNcIiBpcyBkaXN0cmlidXRlZCBpbiB0aGUgaG9wZSB0aGF0IGl0IHdpbGwgYmUgdXNlZnVsLFxuICogYnV0IFdJVEhPVVQgQU5ZIFdBUlJBTlRZOyB3aXRob3V0IGV2ZW4gdGhlIGltcGxpZWQgd2FycmFudHkgb2ZcbiAqIE1FUkNIQU5UQUJJTElUWSBvciBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRS4gIFNlZSB0aGVcbiAqIEdOVSBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlIGZvciBtb3JlIGRldGFpbHMuXG4gKlxuICogWW91IHNob3VsZCBoYXZlIHJlY2VpdmVkIGEgY29weSBvZiB0aGUgR05VIEdlbmVyYWwgUHVibGljIExpY2Vuc2VcbiAqIGFsb25nIHdpdGggXCJKU0dhbWVUb29sc1wiLiAgSWYgbm90LCBzZWUgPGh0dHA6Ly93d3cuZ251Lm9yZy9saWNlbnNlcy8+LlxuICovXG5pbXBvcnQgQ29uc3RhbnRzIGZyb20gXCIuL0NvbnN0YW50c1wiO1xuaW1wb3J0IFV0aWxzIGZyb20gXCIuL1V0aWxzXCI7XG5pbXBvcnQgQm94IGZyb20gXCIuL0JveFwiO1xuaW1wb3J0IFN0eWxlIGZyb20gXCIuL1N0eWxlXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIElucHV0IGV4dGVuZHMgQm94IHtcbiAgc2VsZWN0YWJsZSA9IHRydWU7XG4gICNfcG9zaXRpb25TdGFydCA9IDA7XG4gICNfcG9zaXRpb25TdGFydENsaWNrID0gMDtcbiAgI19wb3NpdGlvbkVuZCA9IDA7XG5cbiAgY29uc3RydWN0b3IoeCwgeSwgd2lkdGgsIGhlaWdodCwgc3R5bGUsIGRlZmF1bHRUZXh0KSB7XG4gICAgc3VwZXIoeCwgeSwgd2lkdGgsIGhlaWdodCwgc3R5bGUpO1xuICAgIFxuICAgIHRoaXMudGV4dCA9IGRlZmF1bHRUZXh0IHx8IFwiXCI7XG4gICAgdGhpcy4jX3Bvc2l0aW9uU3RhcnQgPSAwO1xuICAgIHRoaXMuI19wb3NpdGlvbkVuZCA9IDA7XG4gICAgdGhpcy4jX3Bvc2l0aW9uU3RhcnRDbGljayA9IDA7XG4gICAgdGhpcy5sYXN0SW5wdXRUZXh0ID0gZmFsc2U7XG4gICAgdGhpcy5vZmZzZXRYID0gMDtcbiAgICB0aGlzLmxhc3RUaW1lID0gMDtcbiAgICB0aGlzLnRvdGFsVGltZSA9IDA7XG4gICAgdGhpcy5jbGlja0N1cnJlbnRQb3NpdGlvbiA9IG51bGw7XG4gICAgdGhpcy50ZXh0Q2FjaGUgPSBudWxsO1xuXG4gICAgdGhpcy5pbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcbiAgICB0aGlzLmlucHV0LnNldEF0dHJpYnV0ZShcInR5cGVcIiwgXCJ0ZXh0XCIpO1xuICAgIHRoaXMuaW5wdXQuc3R5bGUucG9zaXRpb24gPSBcImFic29sdXRlXCI7XG4gICAgdGhpcy5pbnB1dC5zdHlsZS5sZWZ0ID0gXCItOTk5OXB4XCI7XG4gICAgdGhpcy5pbnB1dC50YWJJbmRleCA9IC0xO1xuICAgIHRoaXMuaW5wdXQudmFsdWUgPSB0aGlzLnRleHQ7XG4gICAgdGhpcy5pbnB1dC5hZGRFdmVudExpc3RlbmVyKFwiYmx1clwiLCAoKSA9PiB0aGlzLnNlbGVjdGVkID0gZmFsc2UpO1xuICAgIHRoaXMuaW5wdXQuYWRkRXZlbnRMaXN0ZW5lcihcImZvY3VzXCIsICgpID0+IHRoaXMuc2VsZWN0ZWQgPSB0cnVlKTtcbiAgICB0aGlzLmlucHV0LmFkZEV2ZW50TGlzdGVuZXIoXCJpbnB1dFwiLCAoKSA9PiB7XG4gICAgICB0aGlzLnRvdGFsVGltZSA9IDBcbiAgICAgIHRoaXMubGFzdElucHV0VGV4dCA9IHRydWU7XG4gICAgICB0aGlzLnBvc2l0aW9uU3RhcnQgPSB0aGlzLmlucHV0LnNlbGVjdGlvblN0YXJ0O1xuICAgICAgdGhpcy5wb3NpdGlvbkVuZCA9IHRoaXMuaW5wdXQuc2VsZWN0aW9uRW5kO1xuICAgIH0pO1xuXG4gICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZCh0aGlzLmlucHV0KTtcblxuICAgIHRoaXMuYXBwZW5kVG9DYW52YXMgPSBmYWxzZTtcbiAgICB0aGlzLm5vdGljZUxvZ2dlZCA9IGZhbHNlO1xuXG4gICAgdGhpcy5jYW52YXNUbXAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiY2FudmFzXCIpO1xuXG4gICAgY29uc3QgbW92ZUFjdGlvbkNhbGxiYWNrID0gKGRlbHRhWCwgZGVsdGFZLCBwb3NpdGlvbikgPT4ge1xuICAgICAgaWYocG9zaXRpb24pIHtcbiAgICAgICAgY29uc3QgaUNsaWNrID0gdGhpcy5nZXRMZXR0ZXJDbGlja2VkKHBvc2l0aW9uKTtcbiAgXG4gICAgICAgIGlmKGlDbGljayAhPSBudWxsKSB7XG4gICAgICAgICAgaWYoaUNsaWNrID4gdGhpcy5wb3NpdGlvblN0YXJ0Q2xpY2spIHtcbiAgICAgICAgICAgIHRoaXMuc2V0U2VsZWN0aW9uUmFuZ2UodGhpcy5wb3NpdGlvblN0YXJ0Q2xpY2ssIGlDbGljaywgXCJmb3J3YXJkXCIpO1xuICAgICAgICAgIH0gZWxzZSBpZihpQ2xpY2sgPCB0aGlzLnBvc2l0aW9uU3RhcnRDbGljaykge1xuICAgICAgICAgICAgdGhpcy5zZXRTZWxlY3Rpb25SYW5nZShpQ2xpY2ssIHRoaXMucG9zaXRpb25TdGFydENsaWNrLCBcImJhY2t3YXJkXCIpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH07XG5cbiAgICB0aGlzLmFkZERvd25BY3Rpb24ocG9zaXRpb24gPT4ge1xuICAgICAgY29uc3QgaUNsaWNrID0gdGhpcy5nZXRMZXR0ZXJDbGlja2VkKHBvc2l0aW9uKTtcblxuICAgICAgaWYoaUNsaWNrICE9IG51bGwpIHtcbiAgICAgICAgdGhpcy5wb3NpdGlvblN0YXJ0Q2xpY2sgPSBpQ2xpY2s7XG4gICAgICAgIHRoaXMuc2V0U2VsZWN0aW9uUmFuZ2UoaUNsaWNrLCBpQ2xpY2ssIFwiZm9yd2FyZFwiKTtcbiAgICAgIH1cblxuICAgICAgdGhpcy50b3RhbFRpbWUgPSAwO1xuICAgIH0pO1xuXG4gICAgdGhpcy5hZGRDbGlja0FjdGlvbigoKSA9PiB0aGlzLmNsaWNrKCkpO1xuICAgIHRoaXMuYWRkTW92ZUFjdGlvbihtb3ZlQWN0aW9uQ2FsbGJhY2spO1xuICAgIHRoaXMuYWRkU2Nyb2xsQWN0aW9uKG1vdmVBY3Rpb25DYWxsYmFjayk7XG4gIH1cblxuICBkcmF3KGNvbnRleHQpIHtcbiAgICBpZih0aGlzLmhpZGRlbikgcmV0dXJuO1xuICAgIHN1cGVyLmRyYXcoY29udGV4dCk7XG4gICAgXG4gICAgY29uc3QgY2FudmFzID0gY29udGV4dC5jYW52YXM7XG4gICAgY29uc3QgY3R4ID0gY2FudmFzLmdldENvbnRleHQoXCIyZFwiKTtcbiAgICBjdHguc2F2ZSgpO1xuXG4gICAgaWYodGhpcy5pbnB1dC5zZWxlY3Rpb25FbmQgIT0gdGhpcy5wb3NpdGlvbkVuZCkgdGhpcy50b3RhbFRpbWUgPSAwO1xuXG4gICAgaWYodGhpcy5jYW52YXMgJiYgdGhpcy5jYW52YXMuY29udGFpbmVyICYmICF0aGlzLmFwcGVuZFRvQ2FudmFzKSB7XG4gICAgICBkb2N1bWVudC5ib2R5LnJlbW92ZUNoaWxkKHRoaXMuaW5wdXQpO1xuICAgICAgdGhpcy5jYW52YXMuY29udGFpbmVyLmFwcGVuZENoaWxkKHRoaXMuaW5wdXQpO1xuICAgICAgdGhpcy5hcHBlbmRUb0NhbnZhcyA9IHRydWU7XG4gICAgfSBlbHNlIGlmKCF0aGlzLmNhbnZhcyAmJiAhdGhpcy5ub3RpY2VMb2dnZWQpIHtcbiAgICAgIGNvbnNvbGUgJiYgY29uc29sZS53YXJuICYmIGNvbnNvbGUud2FybihDb25zdGFudHMuU3RyaW5nLldBUk5JTkdfTUVTU0FHRSArIFwiIFwiICsgQ29uc3RhbnRzLlN0cmluZy5JTlBVVF9GVUxMU0NSRUVOKTtcbiAgICAgIHRoaXMubm90aWNlTG9nZ2VkID0gdHJ1ZTtcbiAgICB9XG5cbiAgICBpZih0aGlzLnNlbGVjdGVkICYmICF0aGlzLmRpc2FibGVkKSB7XG4gICAgICB0aGlzLmNsaWNrKCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuYmx1cigpO1xuICAgIH1cblxuICAgIHRoaXMudGV4dCA9IHRoaXMuaW5wdXQudmFsdWU7XG4gICAgdGhpcy5wb3NpdGlvblN0YXJ0ID0gdGhpcy5pbnB1dC5zZWxlY3Rpb25TdGFydDtcbiAgICB0aGlzLnBvc2l0aW9uRW5kID0gdGhpcy5pbnB1dC5zZWxlY3Rpb25FbmQ7XG5cbiAgICBjb25zdCB0aW1lID0gcGVyZm9ybWFuY2Uubm93KCk7XG4gICAgbGV0IG9mZnNldFRpbWUgPSAwO1xuXG4gICAgaWYodGhpcy5sYXN0VGltZSA+IDApIG9mZnNldFRpbWUgPSB0aW1lIC0gdGhpcy5sYXN0VGltZTtcbiAgICB0aGlzLmxhc3RUaW1lID0gdGltZTtcbiAgICB0aGlzLnRvdGFsVGltZSArPSBvZmZzZXRUaW1lO1xuXG4gICAgdGhpcy5kcmF3QmFja2dyb3VuZChjdHgpO1xuICAgIHRoaXMuZHJhd0JvcmRlcihjdHgpO1xuXG4gICAgdGhpcy5jYW52YXNUbXAud2lkdGggPSBVdGlscy5nZXRDYW52YXNXaWR0aChjYW52YXMpICogQ29uc3RhbnRzLlNldHRpbmcuUElYRUxfUkFUSU87XG4gICAgdGhpcy5jYW52YXNUbXAuaGVpZ2h0ID0gVXRpbHMuZ2V0Q2FudmFzSGVpZ2h0KGNhbnZhcykgKiBDb25zdGFudHMuU2V0dGluZy5QSVhFTF9SQVRJTztcbiAgICB0aGlzLmNhbnZhc1RtcC5zdHlsZS53aWR0aCA9IFV0aWxzLmdldENhbnZhc1dpZHRoKGNhbnZhcyk7XG4gICAgdGhpcy5jYW52YXNUbXAuc3R5bGUuaGVpZ2h0ID0gVXRpbHMuZ2V0Q2FudmFzSGVpZ2h0KGNhbnZhcyk7XG4gICAgY29uc3QgY3R4VGV4dCA9IHRoaXMuY2FudmFzVG1wLmdldENvbnRleHQoXCIyZFwiKTtcbiAgICBVdGlscy5jbGVhcihjdHhUZXh0KTtcbiAgICBjdHhUZXh0LnNjYWxlKENvbnN0YW50cy5TZXR0aW5nLlBJWEVMX1JBVElPLCBDb25zdGFudHMuU2V0dGluZy5QSVhFTF9SQVRJTyk7XG5cbiAgICB0aGlzLnVwZGF0ZVRleHRDYWNoZSh0aGlzLnggKyA1KTtcbiAgICB0aGlzLmF1dG9TY3JvbGwoKTtcbiAgICB0aGlzLmRyYXdUZXh0KGN0eFRleHQsIHRoaXMueCArIDUpO1xuXG4gICAgVXRpbHMuZHJhd0ltYWdlRGF0YShjdHgsIHRoaXMuY2FudmFzVG1wLCB0aGlzLnggKyB0aGlzLnN0eWxlLmJvcmRlclNpemUsIHRoaXMueSArIHRoaXMuc3R5bGUuYm9yZGVyU2l6ZSwgdGhpcy53aWR0aCAtIHRoaXMuc3R5bGUuYm9yZGVyU2l6ZSAqIDIsIHRoaXMuaGVpZ2h0IC0gdGhpcy5zdHlsZS5ib3JkZXJTaXplICogMiwgKHRoaXMueCArIHRoaXMuc3R5bGUuYm9yZGVyU2l6ZSkgKiBDb25zdGFudHMuU2V0dGluZy5QSVhFTF9SQVRJTywgKHRoaXMueSArIHRoaXMuc3R5bGUuYm9yZGVyU2l6ZSkgKiBDb25zdGFudHMuU2V0dGluZy5QSVhFTF9SQVRJTywgKHRoaXMud2lkdGggLSB0aGlzLnN0eWxlLmJvcmRlclNpemUgKiAyKSAgKiBDb25zdGFudHMuU2V0dGluZy5QSVhFTF9SQVRJTywgKHRoaXMuaGVpZ2h0IC0gdGhpcy5zdHlsZS5ib3JkZXJTaXplICogMikgKiBDb25zdGFudHMuU2V0dGluZy5QSVhFTF9SQVRJTyk7XG5cbiAgICBpZigodGhpcy5ob3ZlcmVkIHx8IHRoaXMuY2xpY2tlZCkgJiYgdGhpcy5jYW52YXMpIHRoaXMuY2FudmFzLmN1cnNvciA9IFwidGV4dFwiO1xuXG4gICAgaWYoIXRoaXMuc2VsZWN0ZWQpIHtcbiAgICAgIHRoaXMudG90YWxUaW1lID0gMDtcbiAgICB9XG5cbiAgICBjdHgucmVzdG9yZSgpO1xuICB9XG5cbiAgZHJhd1RleHQoY3R4VGV4dCwgY3VycmVudFgpIHtcbiAgICBmb3IobGV0IGkgPSAtMTsgaSA8IHRoaXMudGV4dC5sZW5ndGg7IGkrKykge1xuICAgICAgaWYoaSA+IC0xKSB7XG4gICAgICAgIGNvbnN0IHNpemVzID0gdGhpcy50ZXh0Q2FjaGUubGV0dGVyc1tpXS5zaXplcztcblxuICAgICAgICBjb25zdCB4RHJhdyA9IGN1cnJlbnRYIC0gdGhpcy5vZmZzZXRYO1xuICAgICAgICBjb25zdCB5RHJhdyA9IHRoaXMueSArIHRoaXMuc3R5bGUuYm9yZGVyU2l6ZTtcblxuICAgICAgICBpZih0aGlzLmlzTGV0dGVyVmlzaWJsZShpKSkgeyAvLyBEb24ndCBkcmF3IHRoZSB0ZXh0IGlmIGl0IGlzIG91dHNpZGUgdGhlIGlucHV0IChvdmVyZmxvdylcbiAgICAgICAgICBpZih0aGlzLnBvc2l0aW9uU3RhcnQgIT0gdGhpcy5wb3NpdGlvbkVuZCAmJiBpID49IHRoaXMucG9zaXRpb25TdGFydCAmJiBpIDwgdGhpcy5wb3NpdGlvbkVuZCkge1xuICAgICAgICAgICAgdGhpcy5kcmF3SGlnaGxpZ2h0KGN0eFRleHQsIGN1cnJlbnRYLCBzaXplcyk7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgVXRpbHMuZHJhd1RleHQoY3R4VGV4dCwgdGhpcy50ZXh0W2ldLCB0aGlzLnN0eWxlLmZvbnRDb2xvciwgdGhpcy5zdHlsZS5mb250U2l6ZSwgdGhpcy5zdHlsZS5mb250RmFtaWx5LCBcImRlZmF1bHRcIiwgXCJkZWZhdWx0XCIsIHhEcmF3LCB5RHJhdywgZmFsc2UpO1xuICAgICAgICB9XG5cbiAgICAgICAgY3VycmVudFggKz0gc2l6ZXNbXCJ3aWR0aFwiXSArIHRoaXMuc3R5bGUuc3BhY2VCZXR3ZWVuQ29tcG9uZW50cztcbiAgICAgIH1cblxuICAgICAgaWYodGhpcy5wb3NpdGlvbkVuZCA9PSBpICsgMSAmJiB0aGlzLnNlbGVjdGVkKSB7XG4gICAgICAgIGlmKHRoaXMudG90YWxUaW1lIDw9IDUwMCkge1xuICAgICAgICAgIHRoaXMuZHJhd0N1cnNvcihjdHhUZXh0LCBjdXJyZW50WCk7XG4gICAgICAgIH0gZWxzZSBpZih0aGlzLnRvdGFsVGltZSA+IDEwMDApIHtcbiAgICAgICAgICB0aGlzLnRvdGFsVGltZSA9IDA7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gY3VycmVudFg7XG4gIH1cblxuICBkcmF3Q3Vyc29yKGN0eFRleHQsIGN1cnJlbnRYKSB7XG4gICAgY3R4VGV4dC5zdHJva2VTdHlsZSA9IHRoaXMuc3R5bGUuYm9yZGVyQ29sb3I7XG4gICAgY3R4VGV4dC5saW5lV2lkdGggPSAxO1xuICAgIGN0eFRleHQuYmVnaW5QYXRoKCk7XG4gICAgY3R4VGV4dC5tb3ZlVG8oY3VycmVudFggLSB0aGlzLm9mZnNldFgsIHRoaXMueSArIDMpO1xuICAgIGN0eFRleHQubGluZVRvKGN1cnJlbnRYIC0gdGhpcy5vZmZzZXRYLCB0aGlzLnkgKyB0aGlzLnN0eWxlLmZvbnRTaXplKTtcbiAgICBjdHhUZXh0LnN0cm9rZSgpO1xuICB9XG5cbiAgZHJhd0hpZ2hsaWdodChjdHhUZXh0LCBjdXJyZW50WCwgc2l6ZXMpIHtcbiAgICBjdHhUZXh0LmZpbGxTdHlsZSA9IHRoaXMuc3R5bGUuc2VsZWN0Q29sb3I7XG4gICAgY3R4VGV4dC5maWxsUmVjdChjdXJyZW50WCAtIHRoaXMub2Zmc2V0WCwgdGhpcy55ICsgdGhpcy5zdHlsZS5ib3JkZXJTaXplLCBzaXplc1tcIndpZHRoXCJdICsgMiwgdGhpcy5oZWlnaHQgLSB0aGlzLnN0eWxlLmJvcmRlclNpemUgKiAyIC0gMSk7XG4gIH1cblxuICB1cGRhdGVUZXh0Q2FjaGUoY3VycmVudFgpIHtcbiAgICBjb25zdCBjdHggPSB0aGlzLmNhbnZhcyA/IHRoaXMuY2FudmFzLmdldENvbnRleHQoXCIyZFwiKSA6IG51bGw7XG4gICAgY29uc3QgcGFyZW50ID0gKHRoaXMuY2FudmFzICYmIHRoaXMuY2FudmFzLnNjZW5lKSB8fCB0aGlzLmNhbnZhcyB8fCAoY3R4ICYmIGN0eC5jYW52YXMpO1xuXG4gICAgaWYoY3R4ICYmIChDb25zdGFudHMuU2V0dGluZy5ESVNBQkxFX09QVElNSVpBVElPTlMgfHwgIXRoaXMudGV4dENhY2hlIHx8IHRoaXMudGV4dENhY2hlLmZvbnRTaXplICE9IHRoaXMuc3R5bGUuZm9udFNpemUgfHwgdGhpcy50ZXh0Q2FjaGUuZm9udEZhbWlseSAhPSB0aGlzLnN0eWxlLmZvbnRGYW1pbHkgfHwgdGhpcy50ZXh0ICE9IHRoaXMudGV4dENhY2hlLnRleHQgfHwgKHBhcmVudCAmJiBwYXJlbnQud2lkdGggIT0gdGhpcy50ZXh0Q2FjaGUucGFyZW50V2lkdGgpKSkge1xuICAgICAgdGhpcy50ZXh0Q2FjaGUgPSB7IFwiZm9udFNpemVcIjogdGhpcy5zdHlsZS5mb250U2l6ZSwgXCJmb250RmFtaWx5XCI6IHRoaXMuc3R5bGUuZm9udEZhbWlseSwgXCJ0ZXh0XCI6IHRoaXMudGV4dCwgXCJwYXJlbnRXaWR0aFwiOiBwYXJlbnQud2lkdGgsIFwibGV0dGVyc1wiOiBbXSB9O1xuXG4gICAgICBmb3IobGV0IGkgPSAwOyBpIDwgdGhpcy50ZXh0Lmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGNvbnN0IHNpemVzID0gVXRpbHMud3JhcFRleHRMaW5lcyhjdHgsIHRoaXMudGV4dFtpXSwgdGhpcy53aWR0aCwgdGhpcy5zdHlsZS5mb250U2l6ZSwgdGhpcy5zdHlsZS5mb250RmFtaWx5LCB0cnVlKTtcbiAgICAgICAgdGhpcy50ZXh0Q2FjaGUubGV0dGVyc1tpXSA9IHtcInRleHRcIjogdGhpcy50ZXh0W2ldLCBcImN1cnJlbnRYXCI6IGN1cnJlbnRYLCBcInNpemVzXCI6IHNpemVzIH07IFxuICAgICAgICBjdXJyZW50WCArPSBzaXplc1tcIndpZHRoXCJdICsgdGhpcy5zdHlsZS5zcGFjZUJldHdlZW5Db21wb25lbnRzO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIGlzQ2xpY2tDdXJyZW50UG9zaXRpb24ocG9zaXRpb24sIGN1cnJlbnRYLCBzaXplcykge1xuICAgIGlmKHBvc2l0aW9uLnggKyB0aGlzLm9mZnNldFggPD0gY3VycmVudFggKyBzaXplc1tcIndpZHRoXCJdICsgdGhpcy5zdHlsZS5zcGFjZUJldHdlZW5Db21wb25lbnRzICYmIHBvc2l0aW9uLnggKyB0aGlzLm9mZnNldFggPj0gY3VycmVudFgpIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cblxuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIGlzQ2xpY2tBZnRlclBvc2l0aW9uKHBvc2l0aW9uLCBjdXJyZW50WCwgc2l6ZXMpIHtcbiAgICBpZihwb3NpdGlvbi54ICsgdGhpcy5vZmZzZXRYID49IGN1cnJlbnRYICsgc2l6ZXNbXCJ3aWR0aFwiXSArIHRoaXMuc3R5bGUuc3BhY2VCZXR3ZWVuQ29tcG9uZW50cykge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuXG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgZ2V0TGV0dGVyQ2xpY2tlZChwb3NpdGlvbikge1xuICAgIGlmKHRoaXMudGV4dENhY2hlKSB7XG4gICAgICBmb3IobGV0IGkgPSAwOyBpIDwgdGhpcy50ZXh0Lmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGNvbnN0IGxldHRlciA9IHRoaXMudGV4dENhY2hlLmxldHRlcnNbaV07XG4gICAgICAgIFxuICAgICAgICBpZih0aGlzLmlzQ2xpY2tDdXJyZW50UG9zaXRpb24ocG9zaXRpb24sIE1hdGgucm91bmQobGV0dGVyLmN1cnJlbnRYKSwgbGV0dGVyLnNpemVzKSkge1xuICAgICAgICAgIHJldHVybiBpO1xuICAgICAgICB9IGVsc2UgaWYoaSA+PSB0aGlzLnRleHQubGVuZ3RoIC0gMSAmJiB0aGlzLmlzQ2xpY2tBZnRlclBvc2l0aW9uKHBvc2l0aW9uLCBNYXRoLnJvdW5kKGxldHRlci5jdXJyZW50WCksIGxldHRlci5zaXplcykpIHtcbiAgICAgICAgICByZXR1cm4gaSArIDE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBnZXQgY3Vyc29yUG9zaXRpb24oKSB7XG4gICAgaWYodGhpcy50ZXh0Q2FjaGUpIHtcbiAgICAgIGxldCBwb3NpdGlvbiA9IHRoaXMucG9zaXRpb25FbmQgLSAxO1xuXG4gICAgICBpZih0aGlzLnBvc2l0aW9uRW5kICE9IHRoaXMucG9zaXRpb25TdGFydCAmJiB0aGlzLnBvc2l0aW9uRW5kID09IHRoaXMucG9zaXRpb25TdGFydENsaWNrICYmIHRoaXMucG9zaXRpb25TdGFydCA8IHRoaXMucG9zaXRpb25TdGFydENsaWNrKSB7XG4gICAgICAgIHBvc2l0aW9uID0gdGhpcy5wb3NpdGlvblN0YXJ0IC0gMTtcbiAgICAgIH1cbiAgICAgIFxuICAgICAgaWYocG9zaXRpb24gPCAwKSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgXCJjdXJyZW50TGV0dGVyXCI6IHRoaXMudGV4dENhY2hlLmxldHRlcnNbMF0sXG4gICAgICAgICAgXCJ4XCI6IHRoaXMueCArIHRoaXMuc3R5bGUuYm9yZGVyU2l6ZVxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGNvbnN0IGN1cnJlbnRMZXR0ZXIgPSB0aGlzLnRleHRDYWNoZS5sZXR0ZXJzW3Bvc2l0aW9uXTtcblxuICAgICAgaWYoY3VycmVudExldHRlcikge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgIFwiY3VycmVudExldHRlclwiOiBjdXJyZW50TGV0dGVyLFxuICAgICAgICAgIFwieFwiOiBjdXJyZW50TGV0dGVyLmN1cnJlbnRYXG4gICAgICAgIH07XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgaXNMZXR0ZXJWaXNpYmxlKGxldHRlcklkKSB7XG4gICAgaWYodGhpcy50ZXh0Q2FjaGUpIHtcbiAgICAgIGNvbnN0IGxldHRlciA9IHRoaXMudGV4dENhY2hlLmxldHRlcnNbbGV0dGVySWRdO1xuXG4gICAgICBpZihsZXR0ZXIpIHtcbiAgICAgICAgY29uc3QgeERyYXcgPSBsZXR0ZXIuY3VycmVudFggLSB0aGlzLm9mZnNldFg7XG4gIFxuICAgICAgICBpZih4RHJhdyA+PSB0aGlzLnggLSBsZXR0ZXIuc2l6ZXNbXCJ3aWR0aFwiXSAmJiB4RHJhdyA8PSB0aGlzLnggKyB0aGlzLndpZHRoKSB7XG4gICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBhdXRvU2Nyb2xsKCkge1xuICAgIGlmKHRoaXMudGV4dENhY2hlKSB7XG4gICAgICBjb25zdCBjdXJzb3JQb3NpdGlvbiA9IHRoaXMuY3Vyc29yUG9zaXRpb247XG4gICAgICBjb25zdCBjdXJyZW50TGV0dGVyU2l6ZSA9IGN1cnNvclBvc2l0aW9uLmN1cnJlbnRMZXR0ZXIgPyBjdXJzb3JQb3NpdGlvbi5jdXJyZW50TGV0dGVyLnNpemVzW1wid2lkdGhcIl0gOiAwO1xuICAgICAgY29uc3QgY3Vyc29yUG9zaXRpb25Qb3MgPSBjdXJzb3JQb3NpdGlvbi54ICsgY3VycmVudExldHRlclNpemUgKyB0aGlzLnN0eWxlLnNwYWNlQmV0d2VlbkNvbXBvbmVudHM7XG4gICAgICBjb25zdCBjdXJzb3JQb3NpdGlvbk5lZyA9IGN1cnNvclBvc2l0aW9uLnggLSBjdXJyZW50TGV0dGVyU2l6ZSAtIHRoaXMuc3R5bGUuc3BhY2VCZXR3ZWVuQ29tcG9uZW50cztcblxuICAgICAgY29uc3Qgb2Zmc2V0WCA9IE1hdGgubWF4KDAsIE1hdGgucm91bmQoY3Vyc29yUG9zaXRpb25Qb3MgLSB0aGlzLnggLSB0aGlzLndpZHRoICsgdGhpcy5zdHlsZS5ib3JkZXJTaXplICsgdGhpcy5zdHlsZS5zcGFjZUJldHdlZW5Db21wb25lbnRzICogMikpO1xuICAgICAgY29uc3Qgb2Zmc2V0WE5lZyA9IE1hdGgubWF4KDAsIE1hdGgucm91bmQoY3Vyc29yUG9zaXRpb25OZWcgLSB0aGlzLnggLSB0aGlzLnN0eWxlLmJvcmRlclNpemUgLSB0aGlzLnN0eWxlLnNwYWNlQmV0d2VlbkNvbXBvbmVudHMgKiAyKSk7XG5cbiAgICAgIGlmKHRoaXMub2Zmc2V0WCA8IDApIHtcbiAgICAgICAgdGhpcy5vZmZzZXRYID0gMDtcbiAgICAgIH1cblxuICAgICAgaWYoY3Vyc29yUG9zaXRpb25Qb3MgLSB0aGlzLm9mZnNldFggPj0gdGhpcy54ICsgdGhpcy53aWR0aCAtIHRoaXMuc3R5bGUuYm9yZGVyU2l6ZSkge1xuICAgICAgICB0aGlzLm9mZnNldFggPSBvZmZzZXRYO1xuICAgICAgICByZXR1cm4gb2Zmc2V0WDtcbiAgICAgIH0gZWxzZSBpZihjdXJzb3JQb3NpdGlvbk5lZyAtIHRoaXMub2Zmc2V0WCA8PSB0aGlzLnggKyB0aGlzLnN0eWxlLmJvcmRlclNpemUpIHtcbiAgICAgICAgdGhpcy5vZmZzZXRYID0gb2Zmc2V0WE5lZztcbiAgICAgICAgcmV0dXJuIG9mZnNldFhOZWc7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgY2xpY2soKSB7XG4gICAgdGhpcy5pbnB1dC5mb2N1cygpO1xuICB9XG5cbiAgYmx1cigpIHtcbiAgICB0aGlzLmlucHV0LmJsdXIoKTtcbiAgfVxuXG4gIGdldCBwb3NpdGlvblN0YXJ0KCkge1xuICAgIHJldHVybiB0aGlzLiNfcG9zaXRpb25TdGFydDtcbiAgfVxuXG4gIGdldCBwb3NpdGlvblN0YXJ0Q2xpY2soKSB7XG4gICAgcmV0dXJuIHRoaXMuI19wb3NpdGlvblN0YXJ0Q2xpY2s7XG4gIH1cblxuICBnZXQgcG9zaXRpb25FbmQoKSB7XG4gICAgcmV0dXJuIHRoaXMuI19wb3NpdGlvbkVuZDtcbiAgfVxuXG4gIHNldCBwb3NpdGlvblN0YXJ0KHBvc2l0aW9uKSB7XG4gICAgdGhpcy5pbnB1dC5zZWxlY3Rpb25TdGFydCA9IHBvc2l0aW9uO1xuICAgIHRoaXMuI19wb3NpdGlvblN0YXJ0ID0gcG9zaXRpb247XG4gIH1cblxuICBzZXQgcG9zaXRpb25TdGFydENsaWNrKHBvc2l0aW9uKSB7XG4gICAgdGhpcy4jX3Bvc2l0aW9uU3RhcnRDbGljayA9IHBvc2l0aW9uO1xuICB9XG5cbiAgc2V0IHBvc2l0aW9uRW5kKHBvc2l0aW9uKSB7XG4gICAgdGhpcy5pbnB1dC5zZWxlY3Rpb25FbmQgPSBwb3NpdGlvbjtcbiAgICB0aGlzLiNfcG9zaXRpb25FbmQgPSBwb3NpdGlvbjtcbiAgfVxuXG4gIHNldFNlbGVjdGlvblJhbmdlKHN0YXJ0LCBlbmQsIGRpcmVjdGlvbikge1xuICAgIHRoaXMuaW5wdXQuc2V0U2VsZWN0aW9uUmFuZ2Uoc3RhcnQsIGVuZCwgZGlyZWN0aW9uKTtcbiAgICB0aGlzLnBvc2l0aW9uU3RhcnQgPSBzdGFydDtcbiAgICB0aGlzLnBvc2l0aW9uRW5kID0gZW5kO1xuICB9XG5cbiAgZ2V0IGhlaWdodCgpIHtcbiAgICBjb25zdCBib3JkZXJTaXplID0gdGhpcy5zdHlsZSAmJiB0aGlzLnN0eWxlLmJvcmRlclNpemUgPyB0aGlzLnN0eWxlLmJvcmRlclNpemUgOiAwO1xuICAgIHJldHVybiBzdXBlci5oZWlnaHQgPyBzdXBlci5oZWlnaHQgOiB0aGlzLnN0eWxlLmZvbnRTaXplICsgYm9yZGVyU2l6ZSAqIDI7XG4gIH1cblxuICBnZXQgZGVmYXVsdFN0eWxlKCkge1xuICAgIHJldHVybiBuZXcgU3R5bGUoe1xuICAgICAgXCJmb250U2l6ZVwiOiBNYXRoLmZsb29yKENvbnN0YW50cy5TZXR0aW5nLkZPTlRfU0laRSAvIDEuMjUpLFxuICAgICAgXCJmb250RmFtaWx5XCI6IENvbnN0YW50cy5TZXR0aW5nLkZPTlRfRkFNSUxZLFxuICAgICAgXCJmb250Q29sb3JcIjogQ29uc3RhbnRzLlNldHRpbmcuSU5QVVRfREVGQVVMVF9GT05UX0NPTE9SLFxuICAgICAgXCJiYWNrZ3JvdW5kQ29sb3JcIjogQ29uc3RhbnRzLlNldHRpbmcuSU5QVVRfREVGQVVMVF9CQUNLR1JPVU5EX0NPTE9SLFxuICAgICAgXCJib3JkZXJDb2xvclwiOiBDb25zdGFudHMuU2V0dGluZy5JTlBVVF9ERUZBVUxUX0JPUkRFUl9DT0xPUixcbiAgICAgIFwiYm9yZGVyQ29sb3JTZWxlY3RlZFwiOiBDb25zdGFudHMuU2V0dGluZy5JTlBVVF9ERUZBVUxUX0JPUkRFUl9DT0xPUl9TRUxFQ1RFRCxcbiAgICAgIFwic2VsZWN0Q29sb3JcIjogQ29uc3RhbnRzLlNldHRpbmcuSU5QVVRfREVGQVVMVF9TRUxFQ1RfQ09MT1IsXG4gICAgICBcInNwYWNlQmV0d2VlbkNvbXBvbmVudHNcIjogMVxuICAgIH0pO1xuICB9XG59IiwiLypcbiAqIENvcHlyaWdodCAoQykgMjAyMCBFbGlhc3RpayAoZWxpYXN0aWtzb2Z0cy5jb20pXG4gKlxuICogVGhpcyBmaWxlIGlzIHBhcnQgb2YgXCJKU0dhbWVUb29sc1wiLlxuICpcbiAqIFwiSlNHYW1lVG9vbHNcIiBpcyBmcmVlIHNvZnR3YXJlOiB5b3UgY2FuIHJlZGlzdHJpYnV0ZSBpdCBhbmQvb3IgbW9kaWZ5XG4gKiBpdCB1bmRlciB0aGUgdGVybXMgb2YgdGhlIEdOVSBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlIGFzIHB1Ymxpc2hlZCBieVxuICogdGhlIEZyZWUgU29mdHdhcmUgRm91bmRhdGlvbiwgZWl0aGVyIHZlcnNpb24gMyBvZiB0aGUgTGljZW5zZSwgb3JcbiAqIChhdCB5b3VyIG9wdGlvbikgYW55IGxhdGVyIHZlcnNpb24uXG4gKlxuICogXCJKU0dhbWVUb29sc1wiIGlzIGRpc3RyaWJ1dGVkIGluIHRoZSBob3BlIHRoYXQgaXQgd2lsbCBiZSB1c2VmdWwsXG4gKiBidXQgV0lUSE9VVCBBTlkgV0FSUkFOVFk7IHdpdGhvdXQgZXZlbiB0aGUgaW1wbGllZCB3YXJyYW50eSBvZlxuICogTUVSQ0hBTlRBQklMSVRZIG9yIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFLiAgU2VlIHRoZVxuICogR05VIEdlbmVyYWwgUHVibGljIExpY2Vuc2UgZm9yIG1vcmUgZGV0YWlscy5cbiAqXG4gKiBZb3Ugc2hvdWxkIGhhdmUgcmVjZWl2ZWQgYSBjb3B5IG9mIHRoZSBHTlUgR2VuZXJhbCBQdWJsaWMgTGljZW5zZVxuICogYWxvbmcgd2l0aCBcIkpTR2FtZVRvb2xzXCIuICBJZiBub3QsIHNlZSA8aHR0cDovL3d3dy5nbnUub3JnL2xpY2Vuc2VzLz4uXG4gKi9cbmltcG9ydCBDb25zdGFudHMgZnJvbSBcIi4vQ29uc3RhbnRzXCI7XG5pbXBvcnQgVXRpbHMgZnJvbSBcIi4vVXRpbHNcIjtcbmltcG9ydCBDb21wb25lbnQgZnJvbSBcIi4vQ29tcG9uZW50XCI7XG5pbXBvcnQgU3R5bGUgZnJvbSBcIi4vU3R5bGVcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTGFiZWwgZXh0ZW5kcyBDb21wb25lbnQge1xuICBzZWxlY3RhYmxlID0gZmFsc2U7XG4gICNfdGV4dCA9IFwiXCI7XG5cbiAgY29uc3RydWN0b3IodGV4dCwgeCwgeSwgc3R5bGUpIHtcbiAgICBzdXBlcih4LCB5LCBudWxsLCBudWxsLCBzdHlsZSk7XG4gICAgdGhpcy50ZXh0ID0gdGV4dDtcbiAgICB0aGlzLnNpemVzQ2FjaGUgPSBudWxsO1xuXG4gICAgaWYoIUNvbnN0YW50cy5TZXR0aW5nLkRJU0FCTEVfRVhQRVJJTUVOVEFMX09QVElNSVpBVElPTlMpIHtcbiAgICAgIHRoaXMudXBkYXRlU2l6ZXMoKTtcblxuICAgICAgdGhpcy5hZGRDaGFuZ2VBY3Rpb24oY29tcG9uZW50Q2hhbmdlZCA9PiB7XG4gICAgICAgIHRoaXMudXBkYXRlU2l6ZXMoKTtcbiAgICAgICAgY29tcG9uZW50Q2hhbmdlZCAhPSB0aGlzLnBhcmVudCAmJiB0aGlzLnBhcmVudCAmJiB0aGlzLnBhcmVudC5yZWFjdG9yICYmIHRoaXMucGFyZW50LnJlYWN0b3IuZGlzcGF0Y2hFdmVudChcIm9uQ2hhbmdlXCIsIHRoaXMpO1xuICAgICAgfSk7XG4gICAgfVxuICB9XG5cbiAgZHJhdyhjb250ZXh0KSB7XG4gICAgaWYodGhpcy5oaWRkZW4pIHJldHVybjtcbiAgICBzdXBlci5kcmF3KGNvbnRleHQpO1xuICAgIFxuICAgIGNvbnN0IGNhbnZhcyA9IGNvbnRleHQuY2FudmFzO1xuICAgIGNvbnN0IGN0eCA9IGNhbnZhcy5nZXRDb250ZXh0KFwiMmRcIik7XG4gICAgY3R4LnNhdmUoKTtcblxuICAgIFV0aWxzLmRyYXdUZXh0KGN0eCwgdGhpcy50ZXh0LCB0aGlzLnN0eWxlLmZvbnRDb2xvciwgdGhpcy5zdHlsZS5mb250U2l6ZSwgdGhpcy5zdHlsZS5mb250RmFtaWx5LCB0aGlzLnN0eWxlLmFsaWduZW1lbnQsIHRoaXMuc3R5bGUudmVydGljYWxBbGlnbmVtZW50LCB0aGlzLngsIHRoaXMueSwgdGhpcy5zdHlsZS53cmFwLCB0aGlzLnN0eWxlLmJvbGQsIHRoaXMuc3R5bGUudW5kZXJsaW5lLCBudWxsLCB0aGlzLnBhcmVudCk7XG5cbiAgICBjdHgucmVzdG9yZSgpO1xuICB9XG5cbiAgc2V0IHRleHQodGV4dCkge1xuICAgIGlmKHRleHQgIT0gdGhpcy4jX3RleHQpIHtcbiAgICAgIHRoaXMuI190ZXh0ID0gdGV4dDtcbiAgICAgIHRoaXMucmVhY3Rvci5kaXNwYXRjaEV2ZW50KFwib25DaGFuZ2VcIiwgdGhpcyk7XG4gICAgfVxuICB9XG5cbiAgZ2V0IHRleHQoKSB7XG4gICAgcmV0dXJuIHRoaXMuI190ZXh0O1xuICB9XG5cbiAgdXBkYXRlU2l6ZXMoKSB7XG4gICAgY29uc3QgY3R4ID0gdGhpcy5jYW52YXMgPyB0aGlzLmNhbnZhcy5nZXRDb250ZXh0KFwiMmRcIikgOiBudWxsO1xuICAgIGNvbnN0IHBhcmVudCA9ICh0aGlzLmNhbnZhcyAmJiB0aGlzLmNhbnZhcy5zY2VuZSkgfHwgdGhpcy5jYW52YXMgfHwgKGN0eCAmJiBjdHguY2FudmFzKSB8fCB0aGlzLnBhcmVudDtcbiAgICBcbiAgICBpZihjdHggJiYgKENvbnN0YW50cy5TZXR0aW5nLkRJU0FCTEVfT1BUSU1JWkFUSU9OUyB8fCAhdGhpcy5zaXplc0NhY2hlIHx8IHRoaXMuc2l6ZXNDYWNoZS5mb250U2l6ZSAhPSB0aGlzLnN0eWxlLmZvbnRTaXplIHx8IHRoaXMuc2l6ZXNDYWNoZS5mb250RmFtaWx5ICE9IHRoaXMuc3R5bGUuZm9udEZhbWlseSB8fCB0aGlzLnNpemVzQ2FjaGUud3JhcCAhPSB0aGlzLnN0eWxlLndyYXAgfHwgdGhpcy50ZXh0ICE9IHRoaXMuc2l6ZXNDYWNoZS50ZXh0IHx8IChwYXJlbnQgJiYgcGFyZW50LndpZHRoICE9IHRoaXMuc2l6ZXNDYWNoZS5wYXJlbnRXaWR0aCkgfHwgdGhpcy5zaXplc0NhY2hlLnZhbHVlID09IG51bGwpKSB7XG4gICAgICBjb25zdCBzaXplcyA9IFV0aWxzLndyYXBUZXh0TGluZXMoY3R4LCB0aGlzLnRleHQsIG51bGwsIHRoaXMuc3R5bGUuZm9udFNpemUsIHRoaXMuc3R5bGUuZm9udEZhbWlseSwgIXRoaXMuc3R5bGUud3JhcCk7XG4gICAgICBcbiAgICAgIGlmKHBhcmVudCkge1xuICAgICAgICB0aGlzLnNpemVzQ2FjaGUgPSB7IFwiZm9udFNpemVcIjogdGhpcy5zdHlsZS5mb250U2l6ZSwgXCJmb250RmFtaWx5XCI6IHRoaXMuc3R5bGUuZm9udEZhbWlseSwgXCJ3cmFwXCI6IHRoaXMuc3R5bGUud3JhcCwgXCJ0ZXh0XCI6IHRoaXMudGV4dCwgXCJwYXJlbnRXaWR0aFwiOiBwYXJlbnQud2lkdGgsIFwidmFsdWVcIjogc2l6ZXMgfTtcbiAgICAgICAgcGFyZW50LnJlYWN0b3IuZGlzcGF0Y2hFdmVudChcIm9uQ2hhbmdlXCIsIHRoaXMpO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiB0aGlzLnNpemVzQ2FjaGUgJiYgdGhpcy5zaXplc0NhY2hlLnZhbHVlO1xuICB9XG5cbiAgZ2V0IHNpemVzKCkge1xuICAgIGlmKENvbnN0YW50cy5TZXR0aW5nLkRJU0FCTEVfRVhQRVJJTUVOVEFMX09QVElNSVpBVElPTlMpIHRoaXMudXBkYXRlU2l6ZXMoKTtcbiAgICByZXR1cm4gdGhpcy5zaXplc0NhY2hlID8gdGhpcy5zaXplc0NhY2hlLnZhbHVlIDogbnVsbDtcbiAgfVxuXG4gIGdldCBoZWlnaHQoKSB7XG4gICAgY29uc3Qgc2l6ZXMgPSB0aGlzLnNpemVzO1xuICAgIHJldHVybiBzaXplcyAmJiBzaXplc1tcImhlaWdodFwiXTtcbiAgfVxuXG4gIGdldCB3aWR0aCgpIHtcbiAgICBjb25zdCBzaXplcyA9IHRoaXMuc2l6ZXM7XG4gICAgcmV0dXJuIHNpemVzICYmIHNpemVzW1wid2lkdGhcIl07XG4gIH1cblxuICBnZXQgZGVmYXVsdFN0eWxlKCkge1xuICAgIHJldHVybiBuZXcgU3R5bGUoe1xuICAgICAgXCJmb250Q29sb3JcIjogQ29uc3RhbnRzLlNldHRpbmcuTEFCRUxfREVGQVVMVF9GT05UX0NPTE9SLFxuICAgICAgXCJ3cmFwXCI6IHRydWUsXG4gICAgICBcImJvbGRcIjogZmFsc2UsXG4gICAgICBcInVuZGVybGluZVwiOiBmYWxzZVxuICAgIH0pO1xuICB9XG59IiwiLypcbiAqIENvcHlyaWdodCAoQykgMjAyMCBFbGlhc3RpayAoZWxpYXN0aWtzb2Z0cy5jb20pXG4gKlxuICogVGhpcyBmaWxlIGlzIHBhcnQgb2YgXCJKU0dhbWVUb29sc1wiLlxuICpcbiAqIFwiSlNHYW1lVG9vbHNcIiBpcyBmcmVlIHNvZnR3YXJlOiB5b3UgY2FuIHJlZGlzdHJpYnV0ZSBpdCBhbmQvb3IgbW9kaWZ5XG4gKiBpdCB1bmRlciB0aGUgdGVybXMgb2YgdGhlIEdOVSBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlIGFzIHB1Ymxpc2hlZCBieVxuICogdGhlIEZyZWUgU29mdHdhcmUgRm91bmRhdGlvbiwgZWl0aGVyIHZlcnNpb24gMyBvZiB0aGUgTGljZW5zZSwgb3JcbiAqIChhdCB5b3VyIG9wdGlvbikgYW55IGxhdGVyIHZlcnNpb24uXG4gKlxuICogXCJKU0dhbWVUb29sc1wiIGlzIGRpc3RyaWJ1dGVkIGluIHRoZSBob3BlIHRoYXQgaXQgd2lsbCBiZSB1c2VmdWwsXG4gKiBidXQgV0lUSE9VVCBBTlkgV0FSUkFOVFk7IHdpdGhvdXQgZXZlbiB0aGUgaW1wbGllZCB3YXJyYW50eSBvZlxuICogTUVSQ0hBTlRBQklMSVRZIG9yIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFLiAgU2VlIHRoZVxuICogR05VIEdlbmVyYWwgUHVibGljIExpY2Vuc2UgZm9yIG1vcmUgZGV0YWlscy5cbiAqXG4gKiBZb3Ugc2hvdWxkIGhhdmUgcmVjZWl2ZWQgYSBjb3B5IG9mIHRoZSBHTlUgR2VuZXJhbCBQdWJsaWMgTGljZW5zZVxuICogYWxvbmcgd2l0aCBcIkpTR2FtZVRvb2xzXCIuICBJZiBub3QsIHNlZSA8aHR0cDovL3d3dy5nbnUub3JnL2xpY2Vuc2VzLz4uXG4gKi9cbmltcG9ydCBDb25zdGFudHMgZnJvbSBcIi4vQ29uc3RhbnRzXCI7XG5pbXBvcnQgTGFiZWwgZnJvbSBcIi4vTGFiZWxcIjtcbmltcG9ydCBTdHlsZSBmcm9tIFwiLi9TdHlsZVwiO1xuaW1wb3J0IFV0aWxzIGZyb20gXCIuL1V0aWxzXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIExpbmsgZXh0ZW5kcyBMYWJlbCB7XG4gIHNlbGVjdGFibGUgPSB0cnVlO1xuXG4gIGNvbnN0cnVjdG9yKHRleHQsIHgsIHksIHN0eWxlKSB7XG4gICAgc3VwZXIodGV4dCwgeCwgeSwgc3R5bGUpO1xuXG4gICAgdGhpcy5pbml0aWFsQ29sb3IgPSB0aGlzLnN0eWxlLmZvbnRDb2xvcjtcbiAgICB0aGlzLmluaXRpYWxVbmRlcmxpbmUgPSB0aGlzLnN0eWxlLnVuZGVybGluZTtcbiAgfVxuXG4gIGRyYXcoY29udGV4dCkge1xuICAgIGlmKHRoaXMuaGlkZGVuKSByZXR1cm47XG4gICAgc3VwZXIuZHJhdyhjb250ZXh0KTtcblxuICAgIGlmKHRoaXMuY2xpY2tlZCkge1xuICAgICAgdGhpcy5zdHlsZS5zZXQoXCJ1bmRlcmxpbmVcIiwgZmFsc2UpO1xuICAgICAgdGhpcy5zdHlsZS5zZXQoXCJmb250Q29sb3JcIiwgdGhpcy5zdHlsZS5mb250Q29sb3JEb3duKTtcbiAgICAgIGlmKCF0aGlzLm1vdmFibGUpIHRoaXMuY2FudmFzLmN1cnNvciA9IFwicG9pbnRlclwiO1xuICAgIH0gZWxzZSBpZih0aGlzLmhvdmVyZWQgfHwgdGhpcy5zZWxlY3RlZCkge1xuICAgICAgdGhpcy5zdHlsZS5zZXQoXCJ1bmRlcmxpbmVcIiwgZmFsc2UpO1xuICAgICAgdGhpcy5zdHlsZS5zZXQoXCJmb250Q29sb3JcIiwgdGhpcy5zdHlsZS5mb250Q29sb3JIb3Zlcik7XG4gICAgICBpZih0aGlzLmhvdmVyZWQgJiYgIXRoaXMubW92YWJsZSkgdGhpcy5jYW52YXMuY3Vyc29yID0gXCJwb2ludGVyXCI7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuc3R5bGUuc2V0KFwidW5kZXJsaW5lXCIsIHRoaXMuaW5pdGlhbFVuZGVybGluZSk7XG4gICAgICB0aGlzLnN0eWxlLnNldChcImZvbnRDb2xvclwiLCB0aGlzLmluaXRpYWxDb2xvcik7XG4gICAgfVxuXG4gICAgdGhpcy5pbml0ID0gdHJ1ZTtcbiAgfVxuXG4gIGdldCBkZWZhdWx0U3R5bGUoKSB7XG4gICAgcmV0dXJuIG5ldyBTdHlsZSh7XG4gICAgICBcImZvbnRDb2xvclwiOiBDb25zdGFudHMuU2V0dGluZy5MSU5LX0RFRkFVTFRfQ09MT1IsXG4gICAgICBcImZvbnRDb2xvckhvdmVyXCI6IENvbnN0YW50cy5TZXR0aW5nLkxJTktfREVGQVVMVF9IT1ZFUl9DT0xPUixcbiAgICAgIFwiZm9udENvbG9yRG93blwiOiBDb25zdGFudHMuU2V0dGluZy5MSU5LX0RFRkFVTFRfQ0xJQ0tfQ09MT1IsXG4gICAgICBcIndyYXBcIjogdHJ1ZSxcbiAgICAgIFwiYm9sZFwiOiBmYWxzZSxcbiAgICAgIFwidW5kZXJsaW5lXCI6IHRydWVcbiAgICB9KTtcbiAgfVxufSIsIi8qXG4gKiBDb3B5cmlnaHQgKEMpIDIwMjAgRWxpYXN0aWsgKGVsaWFzdGlrc29mdHMuY29tKVxuICpcbiAqIFRoaXMgZmlsZSBpcyBwYXJ0IG9mIFwiSlNHYW1lVG9vbHNcIi5cbiAqXG4gKiBcIkpTR2FtZVRvb2xzXCIgaXMgZnJlZSBzb2Z0d2FyZTogeW91IGNhbiByZWRpc3RyaWJ1dGUgaXQgYW5kL29yIG1vZGlmeVxuICogaXQgdW5kZXIgdGhlIHRlcm1zIG9mIHRoZSBHTlUgR2VuZXJhbCBQdWJsaWMgTGljZW5zZSBhcyBwdWJsaXNoZWQgYnlcbiAqIHRoZSBGcmVlIFNvZnR3YXJlIEZvdW5kYXRpb24sIGVpdGhlciB2ZXJzaW9uIDMgb2YgdGhlIExpY2Vuc2UsIG9yXG4gKiAoYXQgeW91ciBvcHRpb24pIGFueSBsYXRlciB2ZXJzaW9uLlxuICpcbiAqIFwiSlNHYW1lVG9vbHNcIiBpcyBkaXN0cmlidXRlZCBpbiB0aGUgaG9wZSB0aGF0IGl0IHdpbGwgYmUgdXNlZnVsLFxuICogYnV0IFdJVEhPVVQgQU5ZIFdBUlJBTlRZOyB3aXRob3V0IGV2ZW4gdGhlIGltcGxpZWQgd2FycmFudHkgb2ZcbiAqIE1FUkNIQU5UQUJJTElUWSBvciBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRS4gIFNlZSB0aGVcbiAqIEdOVSBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlIGZvciBtb3JlIGRldGFpbHMuXG4gKlxuICogWW91IHNob3VsZCBoYXZlIHJlY2VpdmVkIGEgY29weSBvZiB0aGUgR05VIEdlbmVyYWwgUHVibGljIExpY2Vuc2VcbiAqIGFsb25nIHdpdGggXCJKU0dhbWVUb29sc1wiLiAgSWYgbm90LCBzZWUgPGh0dHA6Ly93d3cuZ251Lm9yZy9saWNlbnNlcy8+LlxuICovXG5pbXBvcnQgQ29uc3RhbnRzIGZyb20gXCIuL0NvbnN0YW50c1wiO1xuaW1wb3J0IFV0aWxzIGZyb20gXCIuL1V0aWxzXCI7XG5pbXBvcnQgQ29tcG9uZW50IGZyb20gXCIuL0NvbXBvbmVudFwiO1xuaW1wb3J0IENvbCBmcm9tIFwiLi9Db2xcIjtcbmltcG9ydCBTdHlsZSBmcm9tIFwiLi9TdHlsZVwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBNZW51IGV4dGVuZHMgQ29sIHtcbiAgc2VsZWN0YWJsZSA9IGZhbHNlO1xuXG4gIGNvbnN0cnVjdG9yKHN0eWxlLCAuLi5jb21wb25lbnRzKSB7XG4gICAgc3VwZXIoMCwgMCwgbnVsbCwgbnVsbCwgc3R5bGUsIC4uLmNvbXBvbmVudHMpO1xuXG4gICAgdGhpcy5sYXN0S2V5ID0gdGhpcy5sYXN0S2V5ID09IHVuZGVmaW5lZCA/IC0xIDogdGhpcy5sYXN0S2V5O1xuICAgIHRoaXMuc2VsZWN0ZWRDb21wb25lbnQgPSB0aGlzLnNlbGVjdGVkQ29tcG9uZW50ID09IHVuZGVmaW5lZCA/IDAgOiB0aGlzLnNlbGVjdGVkQ29tcG9uZW50O1xuXG4gICAgdGhpcy5kaXNhYmxlKCk7XG4gIH1cblxuICBkcmF3KGNvbnRleHQpIHtcbiAgICBpZih0aGlzLmhpZGRlbikgcmV0dXJuO1xuICAgIGNvbnN0IGNhbnZhcyA9IGNvbnRleHQuY2FudmFzO1xuICAgIGNvbnN0IGN0eCA9IGNhbnZhcy5nZXRDb250ZXh0KFwiMmRcIik7XG5cbiAgICBpZih0aGlzLnN0eWxlLmJsdXJCYWNrZ3JvdW5kKSB7XG4gICAgICB0aGlzLmRyYXdCbHVyKGN0eCk7XG4gICAgfVxuXG4gICAgY3R4LnNhdmUoKTtcblxuICAgIHRoaXMuZHJhd0NvbXBvbmVudHMoY3R4KTtcbiAgICBcbiAgICBpZighdGhpcy5pbml0KSB7XG4gICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwia2V5ZG93blwiLCBldmVudCA9PiB7XG4gICAgICAgIGlmKCF0aGlzLmRpc2FibGVkKSB7XG4gICAgICAgICAgdGhpcy5sYXN0S2V5ID0gZXZlbnQua2V5Q29kZTtcbiAgICAgICAgICBpZih0aGlzLmxhc3RLZXkgPT0gQ29uc3RhbnRzLktleS5VUCB8fCB0aGlzLmxhc3RLZXkgPT0gQ29uc3RhbnRzLktleS5CT1RUT00pIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuXG4gICAgICB0aGlzLmluaXQgPSB0cnVlO1xuICAgIH1cblxuICAgIGxldCBrZXlBY3Rpb24gPSBmYWxzZTtcbiAgXG4gICAgaWYodGhpcy5jb21wb25lbnRzICE9IG51bGwpIHtcbiAgICAgIGlmKHRoaXMubGFzdEtleSA9PSBDb25zdGFudHMuS2V5LlVQKSB7XG4gICAgICAgIHRoaXMuc2VsZWN0KHRoaXMuc2VsZWN0ZWRDb21wb25lbnQgLSAxKTtcbiAgICAgICAga2V5QWN0aW9uID0gdHJ1ZTtcbiAgICAgIH0gZWxzZSBpZih0aGlzLmxhc3RLZXkgPT0gQ29uc3RhbnRzLktleS5CT1RUT00pIHtcbiAgICAgICAgdGhpcy5zZWxlY3QodGhpcy5zZWxlY3RlZENvbXBvbmVudCArIDEpO1xuICAgICAgICBrZXlBY3Rpb24gPSB0cnVlO1xuICAgICAgfSBlbHNlIGlmKHRoaXMubGFzdEtleSA9PSBDb25zdGFudHMuS2V5LkVDSEFQKSB7XG4gICAgICAgIHRoaXMuZGlzYWJsZSgpO1xuICAgICAgICBrZXlBY3Rpb24gPSB0cnVlO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5jb21wb25lbnRzLmZvckVhY2goKGNvbXBvbmVudCwgaSkgPT4ge1xuICAgICAgICAgIGlmKGNvbXBvbmVudC5zZWxlY3RlZCkgdGhpcy5zZWxlY3QoaSk7XG4gICAgICAgIH0pO1xuICAgICAgfVxuXG4gICAgICB0aGlzLmNvbXBvbmVudHMuZm9yRWFjaCgoY29tcG9uZW50LCBpKSA9PiB7XG4gICAgICAgIGlmKGNvbXBvbmVudCBpbnN0YW5jZW9mIENvbXBvbmVudCkge1xuICAgICAgICAgIGlmKGtleUFjdGlvbikge1xuICAgICAgICAgICAgaWYodGhpcy5zZWxlY3RlZENvbXBvbmVudCA9PSBpKSB7XG4gICAgICAgICAgICAgIGlmKGNvbXBvbmVudC5zZWxlY3RhYmxlKSB7XG4gICAgICAgICAgICAgICAgY29tcG9uZW50LnNlbGVjdGVkID0gdHJ1ZTtcbiAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgIGlmKCF0aGlzLmlzQ29tcG9uZW50VmlzaWJsZShjb21wb25lbnQpKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgY29tcG9uZW50SGVpZ2h0ID0gY29tcG9uZW50LmhlaWdodDtcbiAgICAgICAgICAgICAgICBjb25zdCBkZWx0YVkgPSAodGhpcy5tYXhIZWlnaHQgLSB0aGlzLm9mZnNldFNjcm9sbFkpIC0gKGNvbXBvbmVudC55ICsgY29tcG9uZW50SGVpZ2h0KTtcbiAgICAgICAgICAgICAgICB0aGlzLm9mZnNldFNjcm9sbFkgPSAtZGVsdGFZO1xuXG4gICAgICAgICAgICAgICAgdGhpcy5jb250cm9sU2Nyb2xsaW5nKG51bGwsIC1kZWx0YVkpO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICBjb21wb25lbnQuc2VsZWN0ZWQgPSBmYWxzZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgXG4gICAgICAgICAgaWYodGhpcy5zZWxlY3RlZENvbXBvbmVudCA9PSBpICYmIHRoaXMubGFzdEtleSA9PSBDb25zdGFudHMuS2V5LkVOVEVSICYmIGNvbXBvbmVudC5yZWFjdG9yICYmICFjb21wb25lbnQuZGlzYWJsZWQpIHtcbiAgICAgICAgICAgIHRoaXMubGFzdEtleSA9IC0xO1xuICAgICAgICAgICAgdGhpcy5zZWxlY3RlZENvbXBvbmVudCA9IDA7XG4gICAgICAgICAgICBjb21wb25lbnQucmVhY3Rvci5kaXNwYXRjaEV2ZW50KFwib25DbGlja1wiKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH1cbiAgICBcbiAgICBjdHgucmVzdG9yZSgpO1xuICAgIHRoaXMubGFzdEtleSA9IC0xO1xuICB9XG5cbiAgZHJhd0NvbXBvbmVudHMoY3R4KSB7XG4gICAgc3VwZXIuZHJhdyhjdHgpO1xuICB9XG5cbiAgZHJhd0JsdXIoY3R4KSB7XG4gICAgVXRpbHMuYmx1ckNhbnZhcyhjdHgsIDUpO1xuICB9XG5cbiAgZHJhd0JhY2tncm91bmQoY3R4KSB7XG4gICAgY3R4LmZpbGxTdHlsZSA9IHRoaXMuc3R5bGUuYmFja2dyb3VuZENvbG9yO1xuICAgIGN0eC5maWxsUmVjdCh0aGlzLnBhcmVudCA/IHRoaXMucGFyZW50LnggOiAwLCB0aGlzLnBhcmVudCA/IHRoaXMucGFyZW50LnkgOiAwLCB0aGlzLm1heFdpZHRoLCB0aGlzLm1heEhlaWdodCk7XG4gIH1cblxuICBkaXNhYmxlKCkge1xuICAgIHN1cGVyLmRpc2FibGUoKTtcbiAgICB0aGlzLmNvbXBvbmVudHMuZm9yRWFjaChjb21wb25lbnQgPT4gY29tcG9uZW50ICYmIGNvbXBvbmVudC5kaXNhYmxlICYmIGNvbXBvbmVudC5kaXNhYmxlKCkpO1xuICB9XG5cbiAgZW5hYmxlKCkge1xuICAgIHN1cGVyLmVuYWJsZSgpO1xuICAgIHRoaXMuY29tcG9uZW50cy5mb3JFYWNoKGNvbXBvbmVudCA9PiBjb21wb25lbnQgJiYgY29tcG9uZW50LmVuYWJsZSAmJiBjb21wb25lbnQuZW5hYmxlKCkpO1xuICB9XG5cbiAgc2VsZWN0KGluZGV4KSB7XG4gICAgdGhpcy5zZWxlY3RlZENvbXBvbmVudCA9IGluZGV4O1xuXG4gICAgY29uc3Qgc2VsZWN0YWJsZUNvbXBvbmVudHMgPSB0aGlzLmNvbXBvbmVudHMuZmlsdGVyKGNvbXBvbmVudCA9PiBjb21wb25lbnQuc2VsZWN0YWJsZSk7XG4gICAgaWYoc2VsZWN0YWJsZUNvbXBvbmVudHMubGVuZ3RoIDw9IDApIHJldHVybjtcblxuICAgIGlmKHRoaXMuc2VsZWN0ZWRDb21wb25lbnQgPj0gdGhpcy5jb21wb25lbnRzLmxlbmd0aCkge1xuICAgICAgdGhpcy5zZWxlY3RlZENvbXBvbmVudCA9IDA7XG4gICAgfSBlbHNlIGlmKHRoaXMuc2VsZWN0ZWRDb21wb25lbnQgPCAwKSB7XG4gICAgICB0aGlzLnNlbGVjdGVkQ29tcG9uZW50ID0gdGhpcy5jb21wb25lbnRzLmxlbmd0aCAtIDE7XG4gICAgfVxuXG4gICAgaWYodGhpcy5jb21wb25lbnRzW3RoaXMuc2VsZWN0ZWRDb21wb25lbnRdICYmICF0aGlzLmNvbXBvbmVudHNbdGhpcy5zZWxlY3RlZENvbXBvbmVudF0uc2VsZWN0YWJsZSkge1xuICAgICAgaWYodGhpcy5sYXN0S2V5ID09IENvbnN0YW50cy5LZXkuVVApIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuc2VsZWN0KHRoaXMuc2VsZWN0ZWRDb21wb25lbnQgLSAxKTtcbiAgICAgIH0gZWxzZSBpZih0aGlzLmxhc3RLZXkgPT0gQ29uc3RhbnRzLktleS5CT1RUT00pIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuc2VsZWN0KHRoaXMuc2VsZWN0ZWRDb21wb25lbnQgKyAxKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBnZXQgc2Nyb2xsQXJlYVNpemVYKCkge1xuICAgIHJldHVybiB0aGlzLmlubmVyV2lkdGggLSB0aGlzLm1heFdpZHRoO1xuICB9XG5cbiAgZ2V0IHNjcm9sbEFyZWFTaXplWSgpIHtcbiAgICByZXR1cm4gdGhpcy5pbm5lckhlaWdodCAtIHRoaXMubWF4SGVpZ2h0O1xuICB9XG5cbiAgZ2V0IG1heEhlaWdodCgpIHtcbiAgICByZXR1cm4gc3VwZXIubWF4SGVpZ2h0IHx8ICh0aGlzLmNhbnZhcyAmJiB0aGlzLmNhbnZhcy5zY2VuZSAmJiB0aGlzLmNhbnZhcy5zY2VuZS5oZWlnaHQpO1xuICB9XG5cbiAgZ2V0IG1heFdpZHRoKCkge1xuICAgIHJldHVybiAodGhpcy5jYW52YXMgJiYgdGhpcy5jYW52YXMuc2NlbmUgJiYgdGhpcy5jYW52YXMuc2NlbmUud2lkdGgpO1xuICB9XG5cbiAgZ2V0IG1pbldpZHRoKCkge1xuICAgIHJldHVybiB0aGlzLnBhcmVudCA/IHRoaXMucGFyZW50LndpZHRoIDogMDtcbiAgfVxuXG4gIGdldCBkZWZhdWx0U3R5bGUoKSB7XG4gICAgcmV0dXJuIG5ldyBTdHlsZSh7XG4gICAgICBcImJsdXJCYWNrZ3JvdW5kXCI6IENvbnN0YW50cy5TZXR0aW5nLk1FTlVfREVGQVVMVF9CTFVSX0JBQ0tHUk9VTkQsXG4gICAgICBcImJhY2tncm91bmRDb2xvclwiOiBDb25zdGFudHMuU2V0dGluZy5NRU5VX0RFRkFVTFRfQkFDS0dST1VORCxcbiAgICAgIFwidmVydGljYWxBbGlnbmVtZW50XCI6IENvbnN0YW50cy5WZXJ0aWNhbEFsaWduZW1lbnQuQ0VOVEVSLFxuICAgICAgXCJzY3JvbGxYRGlzYWJsZWRcIjogdHJ1ZVxuICAgIH0pO1xuICB9XG5cbiAgY29tcGFyZVRvQ29tcG9uZW50KG90aGVyQ29tcG9uZW50KSB7XG4gICAgcmV0dXJuIG90aGVyQ29tcG9uZW50LmNvbXBhcmVUb01lbnUodGhpcyk7XG4gIH1cblxuICBjb21wYXJlVG9NZW51KG90aGVyQ29tcG9uZW50KSB7XG4gICAgcmV0dXJuIDA7XG4gIH1cblxuICBjb21wYXJlVG9Ub29sdGlwKG90aGVyQ29tcG9uZW50KSB7XG4gICAgcmV0dXJuIC0xO1xuICB9XG5cbiAgY29tcGFyZVRvTm90aWZpY2F0aW9uKG90aGVyQ29tcG9uZW50KSB7XG4gICAgcmV0dXJuIDE7XG4gIH1cblxuICBnZXQgaGlkZGVuKCkge1xuICAgIHJldHVybiBzdXBlci5oaWRkZW4gfHwgdGhpcy5kaXNhYmxlZDtcbiAgfVxuXG4gIHNldCBoaWRkZW4oaGlkZGVuKSB7XG4gICAgc3VwZXIuaGlkZGVuID0gaGlkZGVuO1xuICAgIHRoaXMuZGlzYWJsZWQgPSBoaWRkZW47XG4gIH1cblxuICBpc0luc2lkZShwb3MpIHtcbiAgICByZXR1cm4gIXRoaXMuaGlkZGVuO1xuICB9XG59IiwiLypcbiAqIENvcHlyaWdodCAoQykgMjAyMCBFbGlhc3RpayAoZWxpYXN0aWtzb2Z0cy5jb20pXG4gKlxuICogVGhpcyBmaWxlIGlzIHBhcnQgb2YgXCJKU0dhbWVUb29sc1wiLlxuICpcbiAqIFwiSlNHYW1lVG9vbHNcIiBpcyBmcmVlIHNvZnR3YXJlOiB5b3UgY2FuIHJlZGlzdHJpYnV0ZSBpdCBhbmQvb3IgbW9kaWZ5XG4gKiBpdCB1bmRlciB0aGUgdGVybXMgb2YgdGhlIEdOVSBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlIGFzIHB1Ymxpc2hlZCBieVxuICogdGhlIEZyZWUgU29mdHdhcmUgRm91bmRhdGlvbiwgZWl0aGVyIHZlcnNpb24gMyBvZiB0aGUgTGljZW5zZSwgb3JcbiAqIChhdCB5b3VyIG9wdGlvbikgYW55IGxhdGVyIHZlcnNpb24uXG4gKlxuICogXCJKU0dhbWVUb29sc1wiIGlzIGRpc3RyaWJ1dGVkIGluIHRoZSBob3BlIHRoYXQgaXQgd2lsbCBiZSB1c2VmdWwsXG4gKiBidXQgV0lUSE9VVCBBTlkgV0FSUkFOVFk7IHdpdGhvdXQgZXZlbiB0aGUgaW1wbGllZCB3YXJyYW50eSBvZlxuICogTUVSQ0hBTlRBQklMSVRZIG9yIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFLiAgU2VlIHRoZVxuICogR05VIEdlbmVyYWwgUHVibGljIExpY2Vuc2UgZm9yIG1vcmUgZGV0YWlscy5cbiAqXG4gKiBZb3Ugc2hvdWxkIGhhdmUgcmVjZWl2ZWQgYSBjb3B5IG9mIHRoZSBHTlUgR2VuZXJhbCBQdWJsaWMgTGljZW5zZVxuICogYWxvbmcgd2l0aCBcIkpTR2FtZVRvb2xzXCIuICBJZiBub3QsIHNlZSA8aHR0cDovL3d3dy5nbnUub3JnL2xpY2Vuc2VzLz4uXG4gKi9cbmltcG9ydCBDb25zdGFudHMgZnJvbSBcIi4vQ29uc3RhbnRzXCI7XG5pbXBvcnQgQ29sIGZyb20gXCIuL0NvbFwiO1xuaW1wb3J0IEJ1dHRvbiBmcm9tIFwiLi9CdXR0b25cIjtcbmltcG9ydCBDcm9zcyBmcm9tIFwiLi9Dcm9zc1wiO1xuaW1wb3J0IFN0eWxlIGZyb20gXCIuL1N0eWxlXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE5vdGlmaWNhdGlvbk1lc3NhZ2UgZXh0ZW5kcyBDb2wge1xuICBzZWxlY3RhYmxlID0gZmFsc2U7XG5cbiAgY29uc3RydWN0b3Ioc3R5bGUsIGRlbGF5QmVmb3JlQ2xvc2luZywgZWFzaW5nRnVuY3Rpb24sIC4uLmNvbXBvbmVudHMpIHtcbiAgICBzdXBlcigwLCAwLCBudWxsLCBudWxsLCBzdHlsZSwgLi4uY29tcG9uZW50cyk7XG5cbiAgICB0aGlzLmRlbGF5QmVmb3JlQ2xvc2luZyA9IGRlbGF5QmVmb3JlQ2xvc2luZyA9PSB1bmRlZmluZWQgPyA1IDogZGVsYXlCZWZvcmVDbG9zaW5nOyAvLyBzZWNvbmRcbiAgICB0aGlzLnRpbWVMYXN0RnJhbWUgPSAwO1xuICAgIHRoaXMuYW5pbWF0aW9uVGltZSA9IDA7XG4gICAgdGhpcy5jbG9zZWQgPSB0cnVlO1xuICAgIHRoaXMuY2xvc2luZyA9IGZhbHNlO1xuICAgIHRoaXMuZWFzaW5nRnVuY3Rpb24gPSBlYXNpbmdGdW5jdGlvbjtcblxuICAgIHRoaXMuY2xvc2VCdXR0b24gPSBuZXcgQnV0dG9uKG51bGwsIG51bGwsIG51bGwsIG51bGwsIG5ldyBTdHlsZSh7XCJhbGlnbmVtZW50XCI6IENvbnN0YW50cy5BbGlnbmVtZW50LlJJR0hULCBcInZlcnRpY2FsQWxpZ25lbWVudFwiOiBDb25zdGFudHMuVmVydGljYWxBbGlnbmVtZW50LlRPUCwgXCJwYWRkaW5nXCI6IDEwIH0pLCBuZXcgQ3Jvc3MobnVsbCwgbnVsbCwgMTAsIDEwKSk7XG4gICAgdGhpcy5hZGQodGhpcy5jbG9zZUJ1dHRvbik7XG4gIH1cbiAgXG4gIGRyYXcoY29udGV4dCkge1xuICAgIGlmKHRoaXMuaGlkZGVuKSByZXR1cm47XG4gICAgdGhpcy5jbG9zZUJ1dHRvbi5jYW52YXMgPSB0aGlzLmNhbnZhcztcblxuICAgIGNvbnN0IGNhbnZhcyA9IGNvbnRleHQuY2FudmFzO1xuICAgIGNvbnN0IGN0eCA9IGNhbnZhcy5nZXRDb250ZXh0KFwiMmRcIik7XG5cbiAgICBjdHguc2F2ZSgpO1xuXG4gICAgaWYoIXRoaXMuaW5pdCkge1xuICAgICAgdGhpcy50aW1lTGFzdEZyYW1lID0gcGVyZm9ybWFuY2Uubm93KCk7XG4gICAgfVxuICAgIFxuICAgIGlmKHRoaXMuY2xvc2VCdXR0b24gIT0gbnVsbCkge1xuICAgICAgdGhpcy5jbG9zZUJ1dHRvbi5zZXRDbGlja0FjdGlvbigoKSA9PiB7XG4gICAgICAgIHRoaXMuY2xvc2UoKTtcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGNvbnN0IG9mZnNldFRpbWUgPSBwZXJmb3JtYW5jZS5ub3coKSAtIHRoaXMudGltZUxhc3RGcmFtZTtcbiAgICB0aGlzLnRpbWVMYXN0RnJhbWUgPSBwZXJmb3JtYW5jZS5ub3coKTtcblxuICAgIGlmKHRoaXMuYW5pbWF0aW9uVGltZSA+PSB0aGlzLmRlbGF5QmVmb3JlQ2xvc2luZyAqIDEwMDAgJiYgIXRoaXMuY2xvc2luZyAmJiAhdGhpcy5jbG9zZWQpIHtcbiAgICAgIHRoaXMuY2xvc2UoKTtcbiAgICB9XG5cbiAgICBpZighdGhpcy5jbG9zaW5nKSB7XG4gICAgICB0aGlzLmFuaW1hdGlvblRpbWUgKz0gb2Zmc2V0VGltZTtcbiAgICB9IGVsc2Uge1xuICAgICAgaWYodGhpcy5zdHlsZS5kaXNhYmxlQW5pbWF0aW9uKSB7XG4gICAgICAgIHRoaXMuYW5pbWF0aW9uVGltZSA9IC0xO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5hbmltYXRpb25UaW1lIC09IG9mZnNldFRpbWU7XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYodGhpcy5hbmltYXRpb25UaW1lIDwgMCkge1xuICAgICAgdGhpcy5jbG9zZWQgPSB0cnVlO1xuICAgICAgdGhpcy5jbG9zaW5nID0gZmFsc2U7XG4gICAgfVxuXG4gICAgaWYoIXRoaXMuY2xvc2VkKSB7XG4gICAgICB0aGlzLmRyYXdDb21wb25lbnRzKGN0eCk7XG5cbiAgICAgIGlmKHRoaXMuY2xvc2VCdXR0b24gIT0gbnVsbCkge1xuICAgICAgICB0aGlzLmNsb3NlQnV0dG9uLnkgPSB0aGlzLnkgKyB0aGlzLnN0eWxlLnBhZGRpbmcgLyAyO1xuICAgICAgICB0aGlzLmNsb3NlQnV0dG9uLmRyYXcoY3R4KTtcbiAgICAgIH1cblxuICAgICAgdGhpcy5lbmFibGVDbG9zZUJ1dHRvbigpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmRpc2FibGVDbG9zZUJ1dHRvbigpO1xuICAgIH1cblxuICAgIGN0eC5yZXN0b3JlKCk7XG5cbiAgICB0aGlzLmluaXQgPSB0cnVlO1xuICB9XG4gIFxuICBnZXQgb2Zmc2V0WSgpIHtcbiAgICBsZXQgb2Zmc2V0WSA9IDE7XG5cbiAgICBpZighdGhpcy5zdHlsZS5kaXNhYmxlQW5pbWF0aW9uKSB7XG4gICAgICBvZmZzZXRZID0gdGhpcy5hbmltYXRpb25UaW1lIC8gdGhpcy5zdHlsZS5hbmltYXRpb25EdXJhdGlvbjtcblxuICAgICAgaWYodGhpcy5lYXNpbmdGdW5jdGlvbikge1xuICAgICAgICBvZmZzZXRZID0gdGhpcy5lYXNpbmdGdW5jdGlvbihvZmZzZXRZKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gb2Zmc2V0WTtcbiAgfVxuXG4gIGdldCB5KCkge1xuICAgIGNvbnN0IG9mZnNldFkgPSB0aGlzLm9mZnNldFk7XG5cbiAgICBpZih0aGlzLnN0eWxlLnZlcnRpY2FsQWxpZ25lbWVudCA9PSBDb25zdGFudHMuVmVydGljYWxBbGlnbmVtZW50LlRPUCkge1xuICAgICAgcmV0dXJuICh0aGlzLmhlaWdodCAqIChvZmZzZXRZIDw9IDEgPyBvZmZzZXRZIDogMSkpIC0gdGhpcy5oZWlnaHQ7XG4gICAgfSBcbiAgICBcbiAgICByZXR1cm4gdGhpcy5jYW52YXMuc2NlbmUuaGVpZ2h0IC0gKHRoaXMuaGVpZ2h0ICogKG9mZnNldFkgPD0gMSA/IG9mZnNldFkgOiAxKSk7XG4gIH1cblxuICBzZXQgeSh5KSB7XG4gICAgc3VwZXIueSA9IHk7XG4gIH1cblxuICBkcmF3Q29tcG9uZW50cyhjdHgpIHtcbiAgICBzdXBlci5kcmF3KGN0eCk7XG4gIH1cblxuICBjbG9zZSgpIHtcbiAgICB0aGlzLmRpc2FibGVDbG9zZUJ1dHRvbigpO1xuICBcbiAgICBpZighdGhpcy5jbG9zaW5nKSB7XG4gICAgICB0aGlzLmNsb3NpbmcgPSB0cnVlO1xuICAgICAgdGhpcy5hbmltYXRpb25UaW1lID0gdGhpcy5zdHlsZS5hbmltYXRpb25EdXJhdGlvbjtcbiAgICB9XG4gIH1cbiAgXG4gIG9wZW4oKSB7XG4gICAgdGhpcy50aW1lTGFzdEZyYW1lID0gMDtcbiAgICB0aGlzLmFuaW1hdGlvblRpbWUgPSAwO1xuICAgIHRoaXMuaW5pdCA9IGZhbHNlO1xuICAgIHRoaXMuY2xvc2VkID0gZmFsc2U7XG4gICAgdGhpcy5jbG9zaW5nID0gZmFsc2U7XG4gIH1cbiAgXG4gIGRpc2FibGVDbG9zZUJ1dHRvbigpIHtcbiAgICBpZih0aGlzLmNsb3NlQnV0dG9uICE9IHVuZGVmaW5lZCAmJiB0aGlzLmNsb3NlQnV0dG9uICE9IG51bGwgJiYgdGhpcy5jbG9zZUJ1dHRvbiBpbnN0YW5jZW9mIEJ1dHRvbikge1xuICAgICAgdGhpcy5jbG9zZUJ1dHRvbi5kaXNhYmxlKCk7XG4gICAgfVxuICB9XG4gIFxuICBlbmFibGVDbG9zZUJ1dHRvbigpIHtcbiAgICBpZih0aGlzLmNsb3NlQnV0dG9uICE9IHVuZGVmaW5lZCAmJiB0aGlzLmNsb3NlQnV0dG9uICE9IG51bGwgJiYgdGhpcy5jbG9zZUJ1dHRvbiBpbnN0YW5jZW9mIEJ1dHRvbikge1xuICAgICAgdGhpcy5jbG9zZUJ1dHRvbi5lbmFibGUoKTtcbiAgICB9XG4gIH07XG4gIFxuICBjb3B5KCkge1xuICAgIHJldHVybiBuZXcgTm90aWZpY2F0aW9uTWVzc2FnZSh0aGlzLnN0eWxlLmNvcHkoKSwgdGhpcy5kZWxheUJlZm9yZUNsb3NpbmcsIHRoaXMuZWFzaW5nRnVuY3Rpb24sIC4uLnRoaXMuY29tcG9uZW50cyk7XG4gIH1cblxuICBnZXQgd2lkdGgoKSB7XG4gICAgcmV0dXJuIHRoaXMuY2FudmFzICYmIHRoaXMuY2FudmFzLnNjZW5lID8gdGhpcy5jYW52YXMuc2NlbmUud2lkdGggOiBudWxsO1xuICB9XG5cbiAgZ2V0IGhlaWdodCgpIHtcbiAgICByZXR1cm4gc3VwZXIuaGVpZ2h0IC0gKHRoaXMuY2xvc2VCdXR0b24gPyB0aGlzLmNsb3NlQnV0dG9uLmhlaWdodCA6IDApO1xuICB9XG5cbiAgZ2V0IGRlZmF1bHRTdHlsZSgpIHtcbiAgICByZXR1cm4gbmV3IFN0eWxlKHtcbiAgICAgIFwiYWxpZ25lbWVudFwiOiBDb25zdGFudHMuQWxpZ25lbWVudC5DRU5URVIsXG4gICAgICBcImJhY2tncm91bmRDb2xvclwiOiBDb25zdGFudHMuU2V0dGluZy5OT1RJRklDQVRJT05fREVGQVVMVF9CQUNLR1JPVU5ELFxuICAgICAgXCJhbmltYXRpb25EdXJhdGlvblwiOiBDb25zdGFudHMuU2V0dGluZy5OT1RJRklDQVRJT05fREVGQVVMVF9BTklNQVRJT05fRFVSQVRJT05cbiAgICB9KTtcbiAgfVxuXG4gIGdldCBoaWRkZW4oKSB7XG4gICAgcmV0dXJuIHN1cGVyLmhpZGRlbiB8fCB0aGlzLmNsb3NlZDtcbiAgfVxuXG4gIHNldCBoaWRkZW4oaGlkZGVuKSB7XG4gICAgc3VwZXIuaGlkZGVuID0gaGlkZGVuO1xuXG4gICAgaWYoaGlkZGVuKSB7XG4gICAgICB0aGlzLmZvcmNlQ2xvc2UoKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5vcGVuKCk7XG4gICAgfVxuICB9XG5cbiAgY29tcGFyZVRvQ29tcG9uZW50KG90aGVyQ29tcG9uZW50KSB7XG4gICAgcmV0dXJuIG90aGVyQ29tcG9uZW50LmNvbXBhcmVUb05vdGlmaWNhdGlvbih0aGlzKTtcbiAgfVxuXG4gIGNvbXBhcmVUb1Rvb2x0aXAob3RoZXJDb21wb25lbnQpIHtcbiAgICByZXR1cm4gLTE7XG4gIH1cblxuICBjb21wYXJlVG9Ob3RpZmljYXRpb24ob3RoZXJDb21wb25lbnQpIHtcbiAgICByZXR1cm4gMDtcbiAgfVxuXG4gIGNvbXBhcmVUb01lbnUob3RoZXJDb21wb25lbnQpIHtcbiAgICByZXR1cm4gLTE7XG4gIH1cbn0iLCIvKlxuICogQ29weXJpZ2h0IChDKSAyMDIwIEVsaWFzdGlrIChlbGlhc3Rpa3NvZnRzLmNvbSlcbiAqXG4gKiBUaGlzIGZpbGUgaXMgcGFydCBvZiBcIkpTR2FtZVRvb2xzXCIuXG4gKlxuICogXCJKU0dhbWVUb29sc1wiIGlzIGZyZWUgc29mdHdhcmU6IHlvdSBjYW4gcmVkaXN0cmlidXRlIGl0IGFuZC9vciBtb2RpZnlcbiAqIGl0IHVuZGVyIHRoZSB0ZXJtcyBvZiB0aGUgR05VIEdlbmVyYWwgUHVibGljIExpY2Vuc2UgYXMgcHVibGlzaGVkIGJ5XG4gKiB0aGUgRnJlZSBTb2Z0d2FyZSBGb3VuZGF0aW9uLCBlaXRoZXIgdmVyc2lvbiAzIG9mIHRoZSBMaWNlbnNlLCBvclxuICogKGF0IHlvdXIgb3B0aW9uKSBhbnkgbGF0ZXIgdmVyc2lvbi5cbiAqXG4gKiBcIkpTR2FtZVRvb2xzXCIgaXMgZGlzdHJpYnV0ZWQgaW4gdGhlIGhvcGUgdGhhdCBpdCB3aWxsIGJlIHVzZWZ1bCxcbiAqIGJ1dCBXSVRIT1VUIEFOWSBXQVJSQU5UWTsgd2l0aG91dCBldmVuIHRoZSBpbXBsaWVkIHdhcnJhbnR5IG9mXG4gKiBNRVJDSEFOVEFCSUxJVFkgb3IgRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UuICBTZWUgdGhlXG4gKiBHTlUgR2VuZXJhbCBQdWJsaWMgTGljZW5zZSBmb3IgbW9yZSBkZXRhaWxzLlxuICpcbiAqIFlvdSBzaG91bGQgaGF2ZSByZWNlaXZlZCBhIGNvcHkgb2YgdGhlIEdOVSBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlXG4gKiBhbG9uZyB3aXRoIFwiSlNHYW1lVG9vbHNcIi4gIElmIG5vdCwgc2VlIDxodHRwOi8vd3d3LmdudS5vcmcvbGljZW5zZXMvPi5cbiAqL1xuaW1wb3J0IEJveCBmcm9tIFwiLi9Cb3hcIjtcbmltcG9ydCBDb25zdGFudHMgZnJvbSBcIi4vQ29uc3RhbnRzXCI7XG5pbXBvcnQgU3R5bGUgZnJvbSBcIi4vU3R5bGVcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUHJvZ3Jlc3NCYXIgZXh0ZW5kcyBCb3gge1xuICAjcHJlY1BlcmNlbnQgPSAwO1xuICBzZWxlY3RhYmxlID0gZmFsc2U7XG5cbiAgY29uc3RydWN0b3IoeCwgeSwgd2lkdGgsIGhlaWdodCwgc3R5bGUsIGRlZmF1bHRQZXJjZW50LCBlYXNpbmdGdW5jdGlvbikge1xuICAgIHN1cGVyKHgsIHksIHdpZHRoLCBoZWlnaHQsIHN0eWxlKTtcblxuICAgIHRoaXMucGVyY2VudCA9IGRlZmF1bHRQZXJjZW50ID09IHVuZGVmaW5lZCA/IDAgOiBkZWZhdWx0UGVyY2VudDtcbiAgICB0aGlzLiNwcmVjUGVyY2VudCA9IHRoaXMucGVyY2VudDtcbiAgICB0aGlzLmVhc2luZ0Z1bmN0aW9uID0gZWFzaW5nRnVuY3Rpb247XG5cbiAgICB0aGlzLmxhc3RUaW1lID0gMDtcbiAgICB0aGlzLnRvdGFsVGltZSA9IDA7XG4gIH1cblxuICBkcmF3KGNvbnRleHQpIHtcbiAgICBpZih0aGlzLmhpZGRlbikgcmV0dXJuO1xuICAgIHN1cGVyLmRyYXcoY29udGV4dCk7XG5cbiAgICBjb25zdCBjYW52YXMgPSBjb250ZXh0LmNhbnZhcztcbiAgICBjb25zdCBjdHggPSBjYW52YXMuZ2V0Q29udGV4dChcIjJkXCIpO1xuICAgIGN0eC5zYXZlKCk7XG5cbiAgICBjb25zdCB0aW1lID0gcGVyZm9ybWFuY2Uubm93KCk7XG4gICAgbGV0IG9mZnNldFRpbWUgPSAwO1xuXG4gICAgaWYodGhpcy4jcHJlY1BlcmNlbnQgIT0gdGhpcy5wZXJjZW50ICYmICF0aGlzLnN0eWxlLmRpc2FibGVBbmltYXRpb24pIHtcbiAgICAgIGlmKHRoaXMubGFzdFRpbWUgPiAwKSBvZmZzZXRUaW1lID0gdGltZSAtIHRoaXMubGFzdFRpbWU7XG4gICAgICB0aGlzLnRvdGFsVGltZSArPSBvZmZzZXRUaW1lO1xuXG4gICAgICBpZih0aGlzLnRvdGFsVGltZSA+PSB0aGlzLnN0eWxlLmFuaW1hdGlvbkR1cmF0aW9uKSB7XG4gICAgICAgIHRoaXMuI3ByZWNQZXJjZW50ID0gdGhpcy5wZXJjZW50O1xuICAgICAgICB0aGlzLnRvdGFsVGltZSA9IDA7XG4gICAgICAgIHRoaXMubGFzdFRpbWUgPSAwO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5sYXN0VGltZSA9IHRpbWU7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMudG90YWxUaW1lID0gMDtcbiAgICAgIHRoaXMubGFzdFRpbWUgPSAwO1xuICAgIH1cblxuICAgIHRoaXMuZHJhd0JhY2tncm91bmQoY3R4KTtcbiAgICB0aGlzLmRyYXdGb3JlZ3JvdW5kKGN0eCwgdGhpcy53aWR0aEZvcmVncm91bmQpO1xuXG4gICAgY3R4LnJlc3RvcmUoKTtcbiAgfVxuXG4gIGdldCBhbmltYXRpb25QZXJjZW50KCkge1xuICAgIGxldCBhbmltYXRpb25QZXJjZW50ID0gKHRoaXMuI3ByZWNQZXJjZW50ICE9IHRoaXMucGVyY2VudCAmJiAhdGhpcy5zdHlsZS5kaXNhYmxlQW5pbWF0aW9uID8gdGhpcy50b3RhbFRpbWUgLyAodGhpcy5zdHlsZS5hbmltYXRpb25EdXJhdGlvbikgOiAxKTtcblxuICAgIGlmKHRoaXMuZWFzaW5nRnVuY3Rpb24pIHtcbiAgICAgIGFuaW1hdGlvblBlcmNlbnQgPSB0aGlzLmVhc2luZ0Z1bmN0aW9uKGFuaW1hdGlvblBlcmNlbnQpO1xuICAgIH1cblxuICAgIHJldHVybiBhbmltYXRpb25QZXJjZW50O1xuICB9XG5cbiAgZ2V0IHdpZHRoRm9yZWdyb3VuZCgpIHtcbiAgICByZXR1cm4gTWF0aC5tYXgoMCwgTWF0aC5taW4odGhpcy53aWR0aCwgdGhpcy53aWR0aCAqICh0aGlzLiNwcmVjUGVyY2VudCArICh0aGlzLnBlcmNlbnQgLSB0aGlzLiNwcmVjUGVyY2VudCkgKiB0aGlzLmFuaW1hdGlvblBlcmNlbnQpKSk7XG4gIH1cblxuICBkcmF3Rm9yZWdyb3VuZChjdHgsIHdpZHRoRm9yZWdyb3VuZCkge1xuICAgIGN0eC5zYXZlKCk7XG5cbiAgICBjdHguZmlsbFN0eWxlID0gdGhpcy5zdHlsZS5mb3JlZ3JvdW5kQ29sb3I7XG4gICAgY3R4LmZpbGxSZWN0KHRoaXMueCwgdGhpcy55LCB3aWR0aEZvcmVncm91bmQsIHRoaXMuaGVpZ2h0KTtcblxuICAgIGN0eC5yZXN0b3JlKCk7XG4gIH1cblxuICBnZXQgZGVmYXVsdFN0eWxlKCkge1xuICAgIHJldHVybiBuZXcgU3R5bGUoe1xuICAgICAgXCJiYWNrZ3JvdW5kQ29sb3JcIjogQ29uc3RhbnRzLlNldHRpbmcuUFJPR1JFU1NfREVGQVVMVF9CQUNLR1JPVU5ELFxuICAgICAgXCJmb3JlZ3JvdW5kQ29sb3JcIjogQ29uc3RhbnRzLlNldHRpbmcuUFJPR1JFU1NfREVGQVVMVF9GT1JFR1JPVU5ELFxuICAgICAgXCJhbmltYXRpb25EdXJhdGlvblwiOiBDb25zdGFudHMuU2V0dGluZy5QUk9HUkVTU19ERUZBVUxUX0FOSU1BVElPTl9EVVJBVElPTlxuICAgIH0pO1xuICB9XG59IiwiLypcbiAqIENvcHlyaWdodCAoQykgMjAyMCBFbGlhc3RpayAoZWxpYXN0aWtzb2Z0cy5jb20pXG4gKlxuICogVGhpcyBmaWxlIGlzIHBhcnQgb2YgXCJKU0dhbWVUb29sc1wiLlxuICpcbiAqIFwiSlNHYW1lVG9vbHNcIiBpcyBmcmVlIHNvZnR3YXJlOiB5b3UgY2FuIHJlZGlzdHJpYnV0ZSBpdCBhbmQvb3IgbW9kaWZ5XG4gKiBpdCB1bmRlciB0aGUgdGVybXMgb2YgdGhlIEdOVSBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlIGFzIHB1Ymxpc2hlZCBieVxuICogdGhlIEZyZWUgU29mdHdhcmUgRm91bmRhdGlvbiwgZWl0aGVyIHZlcnNpb24gMyBvZiB0aGUgTGljZW5zZSwgb3JcbiAqIChhdCB5b3VyIG9wdGlvbikgYW55IGxhdGVyIHZlcnNpb24uXG4gKlxuICogXCJKU0dhbWVUb29sc1wiIGlzIGRpc3RyaWJ1dGVkIGluIHRoZSBob3BlIHRoYXQgaXQgd2lsbCBiZSB1c2VmdWwsXG4gKiBidXQgV0lUSE9VVCBBTlkgV0FSUkFOVFk7IHdpdGhvdXQgZXZlbiB0aGUgaW1wbGllZCB3YXJyYW50eSBvZlxuICogTUVSQ0hBTlRBQklMSVRZIG9yIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFLiAgU2VlIHRoZVxuICogR05VIEdlbmVyYWwgUHVibGljIExpY2Vuc2UgZm9yIG1vcmUgZGV0YWlscy5cbiAqXG4gKiBZb3Ugc2hvdWxkIGhhdmUgcmVjZWl2ZWQgYSBjb3B5IG9mIHRoZSBHTlUgR2VuZXJhbCBQdWJsaWMgTGljZW5zZVxuICogYWxvbmcgd2l0aCBcIkpTR2FtZVRvb2xzXCIuICBJZiBub3QsIHNlZSA8aHR0cDovL3d3dy5nbnUub3JnL2xpY2Vuc2VzLz4uXG4gKi9cbmltcG9ydCBFdmVudCBmcm9tIFwiLi9FdmVudFwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBSZWFjdG9yIHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgdGhpcy5ldmVudHMgPSB7fTtcbiAgfVxuXG4gIHJlZ2lzdGVyRXZlbnQoZXZlbnROYW1lKSB7XG4gICAgdGhpcy5ldmVudHNbZXZlbnROYW1lXSA9IG5ldyBFdmVudChldmVudE5hbWUpO1xuICB9XG5cbiAgZGlzcGF0Y2hFdmVudChldmVudE5hbWUsIC4uLmV2ZW50QXJncykge1xuICAgIGlmKHRoaXMuZXZlbnRzW2V2ZW50TmFtZV0pIHtcbiAgICAgIGNvbnN0IGNhbGxiYWNrcyA9IHRoaXMuZXZlbnRzW2V2ZW50TmFtZV0uY2FsbGJhY2tzO1xuICAgICAgY2FsbGJhY2tzLmZvckVhY2goY2FsbGJhY2sgPT4gY2FsbGJhY2sgJiYgY2FsbGJhY2soLi4uZXZlbnRBcmdzKSk7XG4gICAgfVxuICB9XG5cbiAgYWRkRXZlbnRMaXN0ZW5lcihldmVudE5hbWUsIGNhbGxiYWNrKSB7XG4gICAgaWYodGhpcy5ldmVudHNbZXZlbnROYW1lXSkgdGhpcy5ldmVudHNbZXZlbnROYW1lXS5yZWdpc3RlckNhbGxiYWNrKGNhbGxiYWNrKTtcbiAgfVxuXG4gIHJlbW92ZUV2ZW50TGlzdGVuZXIoZXZlbnROYW1lLCBjYWxsYmFjaykge1xuICAgIGlmKHRoaXMuZXZlbnRzW2V2ZW50TmFtZV0pIHRoaXMuZXZlbnRzW2V2ZW50TmFtZV0ucmVtb3ZlQ2FsbGJhY2soY2FsbGJhY2spO1xuICB9XG5cbiAgcmVtb3ZlQWxsRXZlbnRMaXN0ZW5lcihldmVudE5hbWUpIHtcbiAgICBpZih0aGlzLmV2ZW50c1tldmVudE5hbWVdKSB0aGlzLmV2ZW50c1tldmVudE5hbWVdLnJlbW92ZUFsbENhbGxiYWNrcygpO1xuICB9XG59IiwiLypcbiAqIENvcHlyaWdodCAoQykgMjAyMCBFbGlhc3RpayAoZWxpYXN0aWtzb2Z0cy5jb20pXG4gKlxuICogVGhpcyBmaWxlIGlzIHBhcnQgb2YgXCJKU0dhbWVUb29sc1wiLlxuICpcbiAqIFwiSlNHYW1lVG9vbHNcIiBpcyBmcmVlIHNvZnR3YXJlOiB5b3UgY2FuIHJlZGlzdHJpYnV0ZSBpdCBhbmQvb3IgbW9kaWZ5XG4gKiBpdCB1bmRlciB0aGUgdGVybXMgb2YgdGhlIEdOVSBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlIGFzIHB1Ymxpc2hlZCBieVxuICogdGhlIEZyZWUgU29mdHdhcmUgRm91bmRhdGlvbiwgZWl0aGVyIHZlcnNpb24gMyBvZiB0aGUgTGljZW5zZSwgb3JcbiAqIChhdCB5b3VyIG9wdGlvbikgYW55IGxhdGVyIHZlcnNpb24uXG4gKlxuICogXCJKU0dhbWVUb29sc1wiIGlzIGRpc3RyaWJ1dGVkIGluIHRoZSBob3BlIHRoYXQgaXQgd2lsbCBiZSB1c2VmdWwsXG4gKiBidXQgV0lUSE9VVCBBTlkgV0FSUkFOVFk7IHdpdGhvdXQgZXZlbiB0aGUgaW1wbGllZCB3YXJyYW50eSBvZlxuICogTUVSQ0hBTlRBQklMSVRZIG9yIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFLiAgU2VlIHRoZVxuICogR05VIEdlbmVyYWwgUHVibGljIExpY2Vuc2UgZm9yIG1vcmUgZGV0YWlscy5cbiAqXG4gKiBZb3Ugc2hvdWxkIGhhdmUgcmVjZWl2ZWQgYSBjb3B5IG9mIHRoZSBHTlUgR2VuZXJhbCBQdWJsaWMgTGljZW5zZVxuICogYWxvbmcgd2l0aCBcIkpTR2FtZVRvb2xzXCIuICBJZiBub3QsIHNlZSA8aHR0cDovL3d3dy5nbnUub3JnL2xpY2Vuc2VzLz4uXG4gKi9cbmltcG9ydCBSZWFjdG9yIGZyb20gXCIuL1JlYWN0b3JcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUmVhY3RvckNhbnZhcyBleHRlbmRzIFJlYWN0b3Ige1xuICByZWdpc3RlckV2ZW50KGV2ZW50TmFtZSkge1xuICAgIGlmKCF0aGlzLmV2ZW50c1tldmVudE5hbWVdKSB0aGlzLmV2ZW50c1tldmVudE5hbWVdID0gW107XG4gIH1cblxuICBkaXNwYXRjaEV2ZW50KGV2ZW50TmFtZSwgLi4uZXZlbnRBcmdzKSB7XG4gICAgaWYodGhpcy5ldmVudHNbZXZlbnROYW1lXSkge1xuICAgICAgY29uc3QgZXZlbnRzID0gdGhpcy5ldmVudHNbZXZlbnROYW1lXTtcbiAgICAgIGV2ZW50cy5mb3JFYWNoKGV2ZW50ID0+IGV2ZW50ICYmIGV2ZW50LmNhbGxiYWNrICYmIGV2ZW50LmNhbGxiYWNrKC4uLmV2ZW50QXJncykpO1xuICAgIH1cbiAgfVxuXG4gIGRpc3BhdGNoRXZlbnRDb21wb25lbnQoZXZlbnROYW1lLCBjb21wb25lbnQsIC4uLmV2ZW50QXJncykge1xuICAgIGlmKHRoaXMuZXZlbnRzW2V2ZW50TmFtZV0pIHtcbiAgICAgIGNvbnN0IGV2ZW50cyA9IHRoaXMuZXZlbnRzW2V2ZW50TmFtZV07XG4gICAgICBldmVudHMuZm9yRWFjaChldmVudCA9PiBldmVudCAmJiBldmVudC5jYWxsYmFjayAmJiBldmVudC5jb21wb25lbnQgPT0gY29tcG9uZW50ICYmIGV2ZW50LmNhbGxiYWNrKC4uLmV2ZW50QXJncykpO1xuICAgIH1cbiAgfVxuXG4gIGFkZEV2ZW50TGlzdGVuZXIoZXZlbnROYW1lLCBjb21wb25lbnQsIGNhbGxiYWNrKSB7XG4gICAgaWYodGhpcy5ldmVudHNbZXZlbnROYW1lXSkge1xuICAgICAgdGhpcy5ldmVudHNbZXZlbnROYW1lXS5wdXNoKHtcbiAgICAgICAgXCJjb21wb25lbnRcIjogY29tcG9uZW50LFxuICAgICAgICBcImNhbGxiYWNrXCI6IGNhbGxiYWNrXG4gICAgICB9KTtcbiAgICB9XG4gIH1cblxuICByZW1vdmVFdmVudExpc3RlbmVyKGV2ZW50TmFtZSwgY2FsbGJhY2spIHtcbiAgICBpZih0aGlzLmV2ZW50c1tldmVudE5hbWVdKSB0aGlzLmV2ZW50c1tldmVudE5hbWVdLmZpbHRlcihldmVudCA9PiBldmVudCAmJiBldmVudC5jYWxsYmFjayAhPSBjYWxsYmFjayk7XG4gIH1cblxuICByZW1vdmVFdmVudExpc3RlbmVyQ29tcG9uZW50KGV2ZW50TmFtZSwgY29tcG9uZW50KSB7XG4gICAgaWYodGhpcy5ldmVudHNbZXZlbnROYW1lXSkgdGhpcy5ldmVudHNbZXZlbnROYW1lXS5maWx0ZXIoZXZlbnQgPT4gZXZlbnQgJiYgZXZlbnQuY29tcG9uZW50ICE9IGNvbXBvbmVudCk7XG4gIH1cblxuICByZW1vdmVBbGxFdmVudExpc3RlbmVyKCkge1xuICAgIHRoaXMuZXZlbnRzID0gW107XG4gIH1cbn0iLCIvKlxuICogQ29weXJpZ2h0IChDKSAyMDIwIEVsaWFzdGlrIChlbGlhc3Rpa3NvZnRzLmNvbSlcbiAqXG4gKiBUaGlzIGZpbGUgaXMgcGFydCBvZiBcIkpTR2FtZVRvb2xzXCIuXG4gKlxuICogXCJKU0dhbWVUb29sc1wiIGlzIGZyZWUgc29mdHdhcmU6IHlvdSBjYW4gcmVkaXN0cmlidXRlIGl0IGFuZC9vciBtb2RpZnlcbiAqIGl0IHVuZGVyIHRoZSB0ZXJtcyBvZiB0aGUgR05VIEdlbmVyYWwgUHVibGljIExpY2Vuc2UgYXMgcHVibGlzaGVkIGJ5XG4gKiB0aGUgRnJlZSBTb2Z0d2FyZSBGb3VuZGF0aW9uLCBlaXRoZXIgdmVyc2lvbiAzIG9mIHRoZSBMaWNlbnNlLCBvclxuICogKGF0IHlvdXIgb3B0aW9uKSBhbnkgbGF0ZXIgdmVyc2lvbi5cbiAqXG4gKiBcIkpTR2FtZVRvb2xzXCIgaXMgZGlzdHJpYnV0ZWQgaW4gdGhlIGhvcGUgdGhhdCBpdCB3aWxsIGJlIHVzZWZ1bCxcbiAqIGJ1dCBXSVRIT1VUIEFOWSBXQVJSQU5UWTsgd2l0aG91dCBldmVuIHRoZSBpbXBsaWVkIHdhcnJhbnR5IG9mXG4gKiBNRVJDSEFOVEFCSUxJVFkgb3IgRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UuICBTZWUgdGhlXG4gKiBHTlUgR2VuZXJhbCBQdWJsaWMgTGljZW5zZSBmb3IgbW9yZSBkZXRhaWxzLlxuICpcbiAqIFlvdSBzaG91bGQgaGF2ZSByZWNlaXZlZCBhIGNvcHkgb2YgdGhlIEdOVSBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlXG4gKiBhbG9uZyB3aXRoIFwiSlNHYW1lVG9vbHNcIi4gIElmIG5vdCwgc2VlIDxodHRwOi8vd3d3LmdudS5vcmcvbGljZW5zZXMvPi5cbiAqL1xuaW1wb3J0IENvbXBvbmVudCBmcm9tIFwiLi9Db21wb25lbnRcIjtcbmltcG9ydCBDb250YWluZXIgZnJvbSBcIi4vQ29udGFpbmVyXCI7XG5pbXBvcnQgVXRpbHMgZnJvbSBcIi4vVXRpbHNcIjtcbmltcG9ydCBDb25zdGFudHMgZnJvbSBcIi4vQ29uc3RhbnRzXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFJvdyBleHRlbmRzIENvbnRhaW5lciB7XG4gIHNlbGVjdGFibGUgPSBmYWxzZTtcbiAgI19pbm5lckhlaWdodCA9IDA7XG4gICNfaW5uZXJXaWR0aCA9IDA7XG5cbiAgY29uc3RydWN0b3IoeCwgeSwgbWF4V2lkdGgsIG1heEhlaWdodCwgc3R5bGUsIC4uLmNvbXBvbmVudHMpIHtcbiAgICBzdXBlcih4LCB5LCBtYXhXaWR0aCwgbWF4SGVpZ2h0LCBzdHlsZSwgLi4uY29tcG9uZW50cyk7XG5cbiAgICBpZighQ29uc3RhbnRzLlNldHRpbmcuRElTQUJMRV9FWFBFUklNRU5UQUxfT1BUSU1JWkFUSU9OUykge1xuICAgICAgdGhpcy51cGRhdGVJbm5lcldpZHRoKCk7XG4gICAgICB0aGlzLnVwZGF0ZUlubmVySGVpZ2h0KCk7XG4gIFxuICAgICAgdGhpcy5hZGRDaGFuZ2VBY3Rpb24oKCkgPT4ge1xuICAgICAgICB0aGlzLnVwZGF0ZUlubmVyV2lkdGgoKTtcbiAgICAgICAgdGhpcy51cGRhdGVJbm5lckhlaWdodCgpO1xuICAgICAgfSk7XG4gICAgfVxuICB9XG5cbiAgZHJhdyhjb250ZXh0KSB7XG4gICAgaWYodGhpcy5oaWRkZW4pIHJldHVybjtcbiAgICBzdXBlci5kcmF3KGNvbnRleHQpO1xuXG4gICAgY29uc3QgY2FudmFzID0gY29udGV4dC5jYW52YXM7XG4gICAgY29uc3QgY3R4ID0gY2FudmFzLmdldENvbnRleHQoXCIyZFwiKTtcbiAgICBjdHguc2F2ZSgpO1xuXG4gICAgbGV0IGN0eFRlbXAgPSBjdHg7XG4gICAgXG4gICAgaWYodGhpcy5pc0N1dHRpbmcpIHtcbiAgICAgIGN0eFRlbXAgPSB0aGlzLmNhbnZhc1RtcC5nZXRDb250ZXh0KFwiMmRcIik7XG4gICAgICBjdHhUZW1wLnNjYWxlKENvbnN0YW50cy5TZXR0aW5nLlBJWEVMX1JBVElPLCBDb25zdGFudHMuU2V0dGluZy5QSVhFTF9SQVRJTyk7XG4gICAgfVxuICBcbiAgICBpZihzdXBlci5jb21wb25lbnRzICE9IG51bGwpIHtcbiAgICAgIGxldCBjdXJyZW50WCA9IHRoaXMuc3R5bGUucGFkZGluZztcblxuICAgICAgc3VwZXIuY29tcG9uZW50cy5mb3JFYWNoKGNvbXBvbmVudCA9PiB7XG4gICAgICAgIGN1cnJlbnRYID0gdGhpcy5kcmF3Q29tcG9uZW50KGNvbXBvbmVudCwgY3VycmVudFgsIGN0eFRlbXApO1xuICAgICAgfSk7XG4gICAgfVxuICAgIFxuICAgIGlmKHRoaXMuaXNDdXR0aW5nKSB7XG4gICAgICBVdGlscy5kcmF3SW1hZ2VEYXRhKGN0eCwgdGhpcy5jYW52YXNUbXAsIHRoaXMueCwgdGhpcy55LCB0aGlzLndpZHRoLCB0aGlzLmhlaWdodCwgdGhpcy54ICogQ29uc3RhbnRzLlNldHRpbmcuUElYRUxfUkFUSU8sIHRoaXMueSAqIENvbnN0YW50cy5TZXR0aW5nLlBJWEVMX1JBVElPLCB0aGlzLndpZHRoICogQ29uc3RhbnRzLlNldHRpbmcuUElYRUxfUkFUSU8sIHRoaXMuaGVpZ2h0ICogQ29uc3RhbnRzLlNldHRpbmcuUElYRUxfUkFUSU8pO1xuICAgIH1cblxuICAgIHN1cGVyLmRyYXdTY3JvbGxiYXJzKGN0eCk7XG5cbiAgICBjdHgucmVzdG9yZSgpO1xuICB9XG5cbiAgZHJhd0NvbXBvbmVudChjb21wb25lbnQsIGN1cnJlbnRYLCBjdHgpIHtcbiAgICBpZihjb21wb25lbnQgaW5zdGFuY2VvZiBDb21wb25lbnQpIHtcbiAgICAgIGNvbXBvbmVudC54ID0gY3VycmVudFggLSB0aGlzLm9mZnNldFNjcm9sbFg7XG4gICAgICBjb21wb25lbnQueSA9IHRoaXMuc3R5bGUucGFkZGluZyAtIHRoaXMub2Zmc2V0U2Nyb2xsWTtcbiAgICAgIFxuICAgICAgaWYoIWNvbXBvbmVudC5oaWRkZW4pIHtcbiAgICAgICAgaWYodGhpcy5pc0NvbXBvbmVudFZpc2libGUoY29tcG9uZW50KSkge1xuICAgICAgICAgIGNvbXBvbmVudC5kcmF3KGN0eCk7XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgIGN1cnJlbnRYICs9IGNvbXBvbmVudC53aWR0aCArIHRoaXMuc3R5bGUuc3BhY2VCZXR3ZWVuQ29tcG9uZW50cztcbiAgICAgIH1cbiAgICB9XG4gICAgXG4gICAgcmV0dXJuIGN1cnJlbnRYO1xuICB9XG5cbiAgdXBkYXRlSW5uZXJIZWlnaHQoKSB7XG4gICAgbGV0IG1heEhlaWdodCA9IDA7XG4gICAgc3VwZXIuY29tcG9uZW50cy5mb3JFYWNoKGNvbXBvbmVudCA9PiB7IGlmKGNvbXBvbmVudC5oZWlnaHQgPiBtYXhIZWlnaHQgJiYgIWNvbXBvbmVudC5oaWRkZW4pIG1heEhlaWdodCA9IGNvbXBvbmVudC5oZWlnaHQ7IH0pO1xuICAgIHRoaXMuI19pbm5lckhlaWdodCA9IG1heEhlaWdodCArIHRoaXMuc3R5bGUucGFkZGluZztcbiAgfVxuXG4gIHVwZGF0ZUlubmVyV2lkdGgoKSB7XG4gICAgbGV0IHRvdGFsV2lkdGggPSAwO1xuICAgIHN1cGVyLmNvbXBvbmVudHMuZm9yRWFjaChjb21wb25lbnQgPT4geyBpZighY29tcG9uZW50LmhpZGRlbikgdG90YWxXaWR0aCArPSBjb21wb25lbnQud2lkdGggfSk7XG4gICAgdGhpcy4jX2lubmVyV2lkdGggPSB0b3RhbFdpZHRoICsgdGhpcy5zdHlsZS5zcGFjZUJldHdlZW5Db21wb25lbnRzICogKHN1cGVyLmNvbXBvbmVudHMubGVuZ3RoIC0gMSkgKyB0aGlzLnN0eWxlLnBhZGRpbmc7XG4gIH1cblxuICBnZXQgaW5uZXJIZWlnaHQoKSB7XG4gICAgaWYoQ29uc3RhbnRzLlNldHRpbmcuRElTQUJMRV9FWFBFUklNRU5UQUxfT1BUSU1JWkFUSU9OUykgdGhpcy51cGRhdGVJbm5lckhlaWdodCgpO1xuICAgIHJldHVybiB0aGlzLiNfaW5uZXJIZWlnaHQ7XG4gIH1cblxuICBnZXQgaW5uZXJXaWR0aCgpIHtcbiAgICBpZihDb25zdGFudHMuU2V0dGluZy5ESVNBQkxFX0VYUEVSSU1FTlRBTF9PUFRJTUlaQVRJT05TKSB0aGlzLnVwZGF0ZUlubmVyV2lkdGgoKTtcbiAgICByZXR1cm4gdGhpcy4jX2lubmVyV2lkdGg7XG4gIH1cblxuICBnZXQgd2lkdGgoKSB7XG4gICAgY29uc3Qgd2lkdGggPSB0aGlzLmlubmVyV2lkdGggfHwgKHRoaXMucGFyZW50ICYmIHRoaXMucGFyZW50LndpZHRoKTtcbiAgICBjb25zdCBtaW4gPSB0aGlzLm1heFdpZHRoICE9IG51bGwgPyBNYXRoLm1pbih0aGlzLm1heFdpZHRoLCB3aWR0aCkgOiBudWxsO1xuICAgIHJldHVybiB0aGlzLm1pbldpZHRoICE9IG51bGwgPyBNYXRoLm1heCh0aGlzLm1pbldpZHRoLCBtaW4gIT0gbnVsbCA/IG1pbiA6IHdpZHRoKSA6IG1pbiAhPSBudWxsID8gbWluIDogd2lkdGg7XG4gIH1cblxuICBnZXQgaGVpZ2h0KCkge1xuICAgIGNvbnN0IGhlaWdodCA9IHRoaXMuaW5uZXJIZWlnaHQgfHwgKHRoaXMucGFyZW50ICYmIHRoaXMucGFyZW50LmhlaWdodCk7XG4gICAgY29uc3QgbWluID0gdGhpcy5tYXhIZWlnaHQgIT0gbnVsbCA/IE1hdGgubWluKHRoaXMubWF4SGVpZ2h0LCBoZWlnaHQpIDogbnVsbDtcbiAgICByZXR1cm4gdGhpcy5taW5IZWlnaHQgIT0gbnVsbCA/IE1hdGgubWF4KHRoaXMubWluSGVpZ2h0LCBtaW4gIT0gbnVsbCA/IG1pbiA6IGhlaWdodCkgOiBtaW4gIT0gbnVsbCA/IG1pbiA6IGhlaWdodDtcbiAgfVxuXG4gIGdldCBkZWZhdWx0U3R5bGUoKSB7XG4gICAgcmV0dXJuIHN1cGVyLmRlZmF1bHRTdHlsZTtcbiAgfVxufSIsIi8qXG4gKiBDb3B5cmlnaHQgKEMpIDIwMjAgRWxpYXN0aWsgKGVsaWFzdGlrc29mdHMuY29tKVxuICpcbiAqIFRoaXMgZmlsZSBpcyBwYXJ0IG9mIFwiSlNHYW1lVG9vbHNcIi5cbiAqXG4gKiBcIkpTR2FtZVRvb2xzXCIgaXMgZnJlZSBzb2Z0d2FyZTogeW91IGNhbiByZWRpc3RyaWJ1dGUgaXQgYW5kL29yIG1vZGlmeVxuICogaXQgdW5kZXIgdGhlIHRlcm1zIG9mIHRoZSBHTlUgR2VuZXJhbCBQdWJsaWMgTGljZW5zZSBhcyBwdWJsaXNoZWQgYnlcbiAqIHRoZSBGcmVlIFNvZnR3YXJlIEZvdW5kYXRpb24sIGVpdGhlciB2ZXJzaW9uIDMgb2YgdGhlIExpY2Vuc2UsIG9yXG4gKiAoYXQgeW91ciBvcHRpb24pIGFueSBsYXRlciB2ZXJzaW9uLlxuICpcbiAqIFwiSlNHYW1lVG9vbHNcIiBpcyBkaXN0cmlidXRlZCBpbiB0aGUgaG9wZSB0aGF0IGl0IHdpbGwgYmUgdXNlZnVsLFxuICogYnV0IFdJVEhPVVQgQU5ZIFdBUlJBTlRZOyB3aXRob3V0IGV2ZW4gdGhlIGltcGxpZWQgd2FycmFudHkgb2ZcbiAqIE1FUkNIQU5UQUJJTElUWSBvciBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRS4gIFNlZSB0aGVcbiAqIEdOVSBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlIGZvciBtb3JlIGRldGFpbHMuXG4gKlxuICogWW91IHNob3VsZCBoYXZlIHJlY2VpdmVkIGEgY29weSBvZiB0aGUgR05VIEdlbmVyYWwgUHVibGljIExpY2Vuc2VcbiAqIGFsb25nIHdpdGggXCJKU0dhbWVUb29sc1wiLiAgSWYgbm90LCBzZWUgPGh0dHA6Ly93d3cuZ251Lm9yZy9saWNlbnNlcy8+LlxuICovXG5pbXBvcnQgSW5wdXQgZnJvbSBcIi4vSW5wdXRcIjtcbmltcG9ydCBDb250YWluZXIgZnJvbSBcIi4vQ29udGFpbmVyXCI7XG5pbXBvcnQgVXRpbHMgZnJvbSBcIi4vVXRpbHNcIjtcbmltcG9ydCBTdHlsZSBmcm9tIFwiLi9TdHlsZVwiO1xuaW1wb3J0IENvbnN0YW50cyBmcm9tIFwiLi9Db25zdGFudHNcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU2NlbmUgZXh0ZW5kcyBDb250YWluZXIge1xuICBzZWxlY3RhYmxlID0gZmFsc2U7XG4gIGVuYWJsZUV2ZW50cyA9IGZhbHNlO1xuXG4gIGNvbnN0cnVjdG9yKC4uLmNvbXBvbmVudHMpIHtcbiAgICBzdXBlcigpO1xuICAgIHRoaXMuYWRkQWxsKC4uLmNvbXBvbmVudHMpO1xuICB9XG5cbiAgZHJhdyhjb250ZXh0KSB7XG4gICAgaWYodGhpcy5oaWRkZW4pIHJldHVybjtcbiAgICBzdXBlci5kcmF3KGNvbnRleHQpO1xuXG4gICAgY29uc3QgY2FudmFzID0gY29udGV4dC5jYW52YXM7XG4gICAgY29uc3QgY3R4ID0gY2FudmFzLmdldENvbnRleHQoXCIyZFwiKTtcbiAgICBjdHguc2F2ZSgpO1xuICAgIHRoaXMuY2FudmFzLmN1cnNvciA9IFwiZGVmYXVsdFwiO1xuXG4gICAgbGV0IGN0eFRlbXAgPSBjdHg7XG4gICAgaWYodGhpcy5tYXhXaWR0aCB8fCB0aGlzLm1heEhlaWdodCkgY3R4VGVtcCA9IHRoaXMuY2FudmFzVG1wLmdldENvbnRleHQoXCIyZFwiKTtcblxuICAgIHRoaXMuZHJhd0NvbXBvbmVudHMoY3R4VGVtcCk7IC8vIERyYXcgc29ydGVkIGNvbXBvbmVudHNcbiAgICBcbiAgICBpZih0aGlzLm1heFdpZHRoIHx8IHRoaXMubWF4SGVpZ2h0KSBVdGlscy5kcmF3SW1hZ2VEYXRhKGN0eCwgdGhpcy5jYW52YXNUbXAsIHRoaXMueCwgdGhpcy55LCB0aGlzLndpZHRoLCB0aGlzLmhlaWdodCwgdGhpcy54LCB0aGlzLnksIHRoaXMud2lkdGgsIHRoaXMuaGVpZ2h0KTtcbiAgICBzdXBlci5kcmF3U2Nyb2xsYmFycyhjdHgpO1xuXG4gICAgY3R4LnJlc3RvcmUoKTtcbiAgfVxuXG4gIGRyYXdDb21wb25lbnRzKGN0eCkge1xuICAgIHRoaXMuY29tcG9uZW50cy5zb3J0KFNjZW5lLmNvbXBhcmVDb21wb25lbnRzKS5mb3JFYWNoKGNvbXBvbmVudCA9PiBjb21wb25lbnQuZHJhdyhjdHgpKTtcbiAgfVxuXG4gIGdldCBkZWZhdWx0U3R5bGUoKSB7XG4gICAgcmV0dXJuIG5ldyBTdHlsZSh7XG4gICAgICBcInBhZGRpbmdcIjogQ29uc3RhbnRzLlNldHRpbmcuREVGQVVMVF9QQURESU5HXG4gICAgfSk7XG4gIH1cbn0iLCIvKlxuICogQ29weXJpZ2h0IChDKSAyMDIwIEVsaWFzdGlrIChlbGlhc3Rpa3NvZnRzLmNvbSlcbiAqXG4gKiBUaGlzIGZpbGUgaXMgcGFydCBvZiBcIkpTR2FtZVRvb2xzXCIuXG4gKlxuICogXCJKU0dhbWVUb29sc1wiIGlzIGZyZWUgc29mdHdhcmU6IHlvdSBjYW4gcmVkaXN0cmlidXRlIGl0IGFuZC9vciBtb2RpZnlcbiAqIGl0IHVuZGVyIHRoZSB0ZXJtcyBvZiB0aGUgR05VIEdlbmVyYWwgUHVibGljIExpY2Vuc2UgYXMgcHVibGlzaGVkIGJ5XG4gKiB0aGUgRnJlZSBTb2Z0d2FyZSBGb3VuZGF0aW9uLCBlaXRoZXIgdmVyc2lvbiAzIG9mIHRoZSBMaWNlbnNlLCBvclxuICogKGF0IHlvdXIgb3B0aW9uKSBhbnkgbGF0ZXIgdmVyc2lvbi5cbiAqXG4gKiBcIkpTR2FtZVRvb2xzXCIgaXMgZGlzdHJpYnV0ZWQgaW4gdGhlIGhvcGUgdGhhdCBpdCB3aWxsIGJlIHVzZWZ1bCxcbiAqIGJ1dCBXSVRIT1VUIEFOWSBXQVJSQU5UWTsgd2l0aG91dCBldmVuIHRoZSBpbXBsaWVkIHdhcnJhbnR5IG9mXG4gKiBNRVJDSEFOVEFCSUxJVFkgb3IgRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UuICBTZWUgdGhlXG4gKiBHTlUgR2VuZXJhbCBQdWJsaWMgTGljZW5zZSBmb3IgbW9yZSBkZXRhaWxzLlxuICpcbiAqIFlvdSBzaG91bGQgaGF2ZSByZWNlaXZlZCBhIGNvcHkgb2YgdGhlIEdOVSBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlXG4gKiBhbG9uZyB3aXRoIFwiSlNHYW1lVG9vbHNcIi4gIElmIG5vdCwgc2VlIDxodHRwOi8vd3d3LmdudS5vcmcvbGljZW5zZXMvPi5cbiAqL1xuaW1wb3J0IENvbnN0YW50cyBmcm9tIFwiLi9Db25zdGFudHNcIjtcbmltcG9ydCBCb3ggZnJvbSBcIi4vQm94XCI7XG5pbXBvcnQgU3R5bGUgZnJvbSBcIi4vU3R5bGVcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU2Nyb2xsYmFyIGV4dGVuZHMgQm94IHtcbiAgc2VsZWN0YWJsZSA9IHRydWU7XG5cbiAgY29uc3RydWN0b3Ioc2l6ZSwgc3R5bGUsIHBhcmVudCkge1xuICAgIHN1cGVyKG51bGwsIG51bGwsIG51bGwsIG51bGwsIHN0eWxlKTtcbiAgICB0aGlzLnBhcmVudCA9IHBhcmVudDtcbiAgICB0aGlzLnNpemUgPSBzaXplIHx8IENvbnN0YW50cy5TZXR0aW5nLlNDUk9MTEJBUl9ERUZBVUxUX1NJWkU7XG4gIH1cbiAgXG4gIGRyYXcoY29udGV4dCkge1xuICAgIGlmKHRoaXMuaGlkZGVuKSByZXR1cm47XG4gICAgaWYodGhpcy5jbGlja2VkKSB7XG4gICAgICB0aGlzLmhvdmVyZWQgPSB0cnVlO1xuICAgIH1cbiAgICBcbiAgICBzdXBlci5kcmF3KGNvbnRleHQpO1xuICB9XG5cbiAgZ2V0IG1heFdpZHRoUGFyZW50KCkge1xuICAgIHJldHVybiB0aGlzLnBhcmVudCA/IHRoaXMucGFyZW50Lm1heFdpZHRoIC0gTWF0aC5hYnMoTWF0aC5taW4oMCwgdGhpcy5wYXJlbnQueCkpIDogMDtcbiAgfVxuXG4gIGdldCBtYXhIZWlnaHRQYXJlbnQoKSB7XG4gICAgcmV0dXJuIHRoaXMucGFyZW50ID8gdGhpcy5wYXJlbnQubWF4SGVpZ2h0IC0gTWF0aC5hYnMoTWF0aC5taW4oMCwgdGhpcy5wYXJlbnQueSkpIDogMDtcbiAgfVxuXG4gIGdldCBpbm5lcldpZHRoUGFyZW50KCkge1xuICAgIHJldHVybiB0aGlzLnBhcmVudCA/IHRoaXMucGFyZW50LmlubmVyV2lkdGggLSBNYXRoLmFicyhNYXRoLm1pbigwLCB0aGlzLnBhcmVudC54KSkgOiAwO1xuICB9XG5cbiAgZ2V0IGlubmVySGVpZ2h0UGFyZW50KCkge1xuICAgIHJldHVybiB0aGlzLnBhcmVudCA/IHRoaXMucGFyZW50LmlubmVySGVpZ2h0IC0gTWF0aC5hYnMoTWF0aC5taW4oMCwgdGhpcy5wYXJlbnQueSkpIDogMDtcbiAgfVxuXG4gIGdldCBtYXhXaWR0aCgpIHtcbiAgICByZXR1cm4gdGhpcy53aWR0aDtcbiAgfVxuXG4gIGdldCBtYXhIZWlnaHQoKSB7XG4gICAgcmV0dXJuIHRoaXMuaGVpZ2h0O1xuICB9XG5cbiAgZ2V0IGNvbnRlbnRSYXRpb1goKSB7XG4gICAgcmV0dXJuIHRoaXMucGFyZW50ID8gdGhpcy5tYXhXaWR0aFBhcmVudCAvIHRoaXMuaW5uZXJXaWR0aFBhcmVudCA6IDA7XG4gIH1cblxuICBnZXQgY29udGVudFJhdGlvWSgpIHtcbiAgICByZXR1cm4gdGhpcy5wYXJlbnQgPyB0aGlzLm1heEhlaWdodFBhcmVudCAvIHRoaXMuaW5uZXJIZWlnaHRQYXJlbnQgOiAwO1xuICB9XG5cbiAgZ2V0IHdpZHRoKCkge1xuICAgIHJldHVybiB0aGlzLm1heFdpZHRoUGFyZW50ICogdGhpcy5jb250ZW50UmF0aW9YO1xuICB9XG5cbiAgZ2V0IGhlaWdodCgpIHtcbiAgICByZXR1cm4gdGhpcy5tYXhIZWlnaHRQYXJlbnQgKiB0aGlzLmNvbnRlbnRSYXRpb1k7XG4gIH1cblxuICBnZXQgd2luZG93U2Nyb2xsU2l6ZVgoKSB7XG4gICAgcmV0dXJuIHRoaXMuaW5uZXJXaWR0aFBhcmVudCAtIHRoaXMubWF4V2lkdGhQYXJlbnQ7XG4gIH1cblxuICBnZXQgd2luZG93U2Nyb2xsU2l6ZVkoKSB7XG4gICAgcmV0dXJuIHRoaXMuaW5uZXJIZWlnaHRQYXJlbnQgLSB0aGlzLm1heEhlaWdodFBhcmVudDtcbiAgfVxuXG4gIGdldCBwZXJjZW50U2Nyb2xsYmFyWCgpIHtcbiAgICByZXR1cm4gdGhpcy5wYXJlbnQgPyB0aGlzLnBhcmVudC5vZmZzZXRTY3JvbGxYIC8gdGhpcy53aW5kb3dTY3JvbGxTaXplWCA6IDA7XG4gIH1cblxuICBnZXQgcGVyY2VudFNjcm9sbGJhclkoKSB7XG4gICAgcmV0dXJuIHRoaXMucGFyZW50ID8gdGhpcy5wYXJlbnQub2Zmc2V0U2Nyb2xsWSAvIHRoaXMud2luZG93U2Nyb2xsU2l6ZVkgOiAwO1xuICB9XG5cbiAgZ2V0IHNjcm9sbEFyZWFTaXplWCgpIHtcbiAgICByZXR1cm4gdGhpcy5tYXhXaWR0aFBhcmVudCAtIHRoaXMud2lkdGg7XG4gIH1cblxuICBnZXQgc2Nyb2xsQXJlYVNpemVZKCkge1xuICAgIHJldHVybiB0aGlzLm1heEhlaWdodFBhcmVudCAtIHRoaXMuaGVpZ2h0O1xuICB9XG5cbiAgZ2V0IHgoKSB7XG4gICAgcmV0dXJuIHRoaXMucGFyZW50ID8gTWF0aC5hYnModGhpcy5wYXJlbnQueCkgKyB0aGlzLnNjcm9sbEFyZWFTaXplWCAqIHRoaXMucGVyY2VudFNjcm9sbGJhclggOiAwO1xuICB9XG5cbiAgZ2V0IHkoKSB7XG4gICAgcmV0dXJuIHRoaXMucGFyZW50ID8gTWF0aC5hYnModGhpcy5wYXJlbnQueSkgKyB0aGlzLnNjcm9sbEFyZWFTaXplWSAqIHRoaXMucGVyY2VudFNjcm9sbGJhclkgOiAwO1xuICB9XG5cbiAgZ2V0IGRlZmF1bHRTdHlsZSgpIHtcbiAgICByZXR1cm4gbmV3IFN0eWxlKHtcbiAgICAgIFwiYmFja2dyb3VuZENvbG9yXCI6IENvbnN0YW50cy5TZXR0aW5nLlNDUk9MTEJBUl9ERUZBVUxUX0JBQ0tHUk9VTkQsXG4gICAgICBcImJhY2tncm91bmRDb2xvckhvdmVyXCI6IENvbnN0YW50cy5TZXR0aW5nLlNDUk9MTEJBUl9ERUZBVUxUX0hPVkVSX0JBQ0tHUk9VTkQsXG4gICAgICBcImJhY2tncm91bmRDb2xvckRvd25cIjogQ29uc3RhbnRzLlNldHRpbmcuU0NST0xMQkFSX0RFRkFVTFRfQ0xJQ0tfQkFDS0dST1VORCxcbiAgICAgIFwiYm9yZGVyU2l6ZVwiOiAwXG4gICAgfSk7XG4gIH1cblxuICBjb21wYXJlVG9Db21wb25lbnQob3RoZXJDb21wb25lbnQpIHtcbiAgICByZXR1cm4gb3RoZXJDb21wb25lbnQuY29tcGFyZVRvU2Nyb2xsYmFyKHRoaXMpO1xuICB9XG5cbiAgY29tcGFyZVRvU2Nyb2xsYmFyKG90aGVyQ29tcG9uZW50KSB7XG4gICAgcmV0dXJuIDA7XG4gIH1cbn0iLCIvKlxuICogQ29weXJpZ2h0IChDKSAyMDIwIEVsaWFzdGlrIChlbGlhc3Rpa3NvZnRzLmNvbSlcbiAqXG4gKiBUaGlzIGZpbGUgaXMgcGFydCBvZiBcIkpTR2FtZVRvb2xzXCIuXG4gKlxuICogXCJKU0dhbWVUb29sc1wiIGlzIGZyZWUgc29mdHdhcmU6IHlvdSBjYW4gcmVkaXN0cmlidXRlIGl0IGFuZC9vciBtb2RpZnlcbiAqIGl0IHVuZGVyIHRoZSB0ZXJtcyBvZiB0aGUgR05VIEdlbmVyYWwgUHVibGljIExpY2Vuc2UgYXMgcHVibGlzaGVkIGJ5XG4gKiB0aGUgRnJlZSBTb2Z0d2FyZSBGb3VuZGF0aW9uLCBlaXRoZXIgdmVyc2lvbiAzIG9mIHRoZSBMaWNlbnNlLCBvclxuICogKGF0IHlvdXIgb3B0aW9uKSBhbnkgbGF0ZXIgdmVyc2lvbi5cbiAqXG4gKiBcIkpTR2FtZVRvb2xzXCIgaXMgZGlzdHJpYnV0ZWQgaW4gdGhlIGhvcGUgdGhhdCBpdCB3aWxsIGJlIHVzZWZ1bCxcbiAqIGJ1dCBXSVRIT1VUIEFOWSBXQVJSQU5UWTsgd2l0aG91dCBldmVuIHRoZSBpbXBsaWVkIHdhcnJhbnR5IG9mXG4gKiBNRVJDSEFOVEFCSUxJVFkgb3IgRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UuICBTZWUgdGhlXG4gKiBHTlUgR2VuZXJhbCBQdWJsaWMgTGljZW5zZSBmb3IgbW9yZSBkZXRhaWxzLlxuICpcbiAqIFlvdSBzaG91bGQgaGF2ZSByZWNlaXZlZCBhIGNvcHkgb2YgdGhlIEdOVSBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlXG4gKiBhbG9uZyB3aXRoIFwiSlNHYW1lVG9vbHNcIi4gIElmIG5vdCwgc2VlIDxodHRwOi8vd3d3LmdudS5vcmcvbGljZW5zZXMvPi5cbiAqL1xuaW1wb3J0IFNjcm9sbGJhciBmcm9tIFwiLi9TY3JvbGxiYXJcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU2Nyb2xsYmFySG9yaXpvbnRhbCBleHRlbmRzIFNjcm9sbGJhciB7XG4gIHNlbGVjdGFibGUgPSB0cnVlO1xuXG4gIGNvbnN0cnVjdG9yKHNpemUsIHN0eWxlLCBwYXJlbnQpIHtcbiAgICBzdXBlcihzaXplLCBzdHlsZSwgcGFyZW50KTtcblxuICAgIHRoaXMuYWRkTW92ZUFjdGlvbigoZGVsdGFYKSA9PiB7XG4gICAgICBpZih0aGlzLnBhcmVudCkge1xuICAgICAgICBjb25zdCBwZXJjZW50U2Nyb2xsYmFyTmV4dCA9IE1hdGguYWJzKCh0aGlzLnBhcmVudC54IC0gTWF0aC5tYXgodGhpcy5wYXJlbnQueCwgdGhpcy54ICsgLWRlbHRhWCkpIC8gKHRoaXMucGFyZW50LndpZHRoIC0gdGhpcy53aWR0aCkpO1xuICAgICAgICBjb25zdCBuZXdEZWx0YVggPSAodGhpcy53aW5kb3dTY3JvbGxTaXplWCAqIHBlcmNlbnRTY3JvbGxiYXJOZXh0KSAtIHRoaXMucGFyZW50Lm9mZnNldFNjcm9sbFg7XG4gICAgICAgIHRoaXMucGFyZW50Lm9mZnNldFNjcm9sbFggKz0gbmV3RGVsdGFYO1xuXG4gICAgICAgIGlmKHRoaXMucGFyZW50LnJlYWN0b3IpIHtcbiAgICAgICAgICB0aGlzLnBhcmVudC5yZWFjdG9yLmRpc3BhdGNoRXZlbnQoXCJvblNjcm9sbFwiLCBuZXdEZWx0YVgsIDApO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSk7XG4gIH1cbiAgXG4gIGRyYXcoY29udGV4dCkge1xuICAgIGlmKHRoaXMuc2Nyb2xsQXJlYVNpemVYID4gMCkge1xuICAgICAgc3VwZXIuZHJhdyhjb250ZXh0KTtcbiAgICB9XG4gIH1cblxuICBnZXQgaGVpZ2h0KCkge1xuICAgIHJldHVybiB0aGlzLnNpemU7XG4gIH1cblxuICBnZXQgeSgpIHtcbiAgICByZXR1cm4gdGhpcy5wYXJlbnQgPyB0aGlzLnBhcmVudC55ICsgdGhpcy5wYXJlbnQuaGVpZ2h0IC0gdGhpcy5zaXplIDogbnVsbDtcbiAgfVxufSIsIi8qXG4gKiBDb3B5cmlnaHQgKEMpIDIwMjAgRWxpYXN0aWsgKGVsaWFzdGlrc29mdHMuY29tKVxuICpcbiAqIFRoaXMgZmlsZSBpcyBwYXJ0IG9mIFwiSlNHYW1lVG9vbHNcIi5cbiAqXG4gKiBcIkpTR2FtZVRvb2xzXCIgaXMgZnJlZSBzb2Z0d2FyZTogeW91IGNhbiByZWRpc3RyaWJ1dGUgaXQgYW5kL29yIG1vZGlmeVxuICogaXQgdW5kZXIgdGhlIHRlcm1zIG9mIHRoZSBHTlUgR2VuZXJhbCBQdWJsaWMgTGljZW5zZSBhcyBwdWJsaXNoZWQgYnlcbiAqIHRoZSBGcmVlIFNvZnR3YXJlIEZvdW5kYXRpb24sIGVpdGhlciB2ZXJzaW9uIDMgb2YgdGhlIExpY2Vuc2UsIG9yXG4gKiAoYXQgeW91ciBvcHRpb24pIGFueSBsYXRlciB2ZXJzaW9uLlxuICpcbiAqIFwiSlNHYW1lVG9vbHNcIiBpcyBkaXN0cmlidXRlZCBpbiB0aGUgaG9wZSB0aGF0IGl0IHdpbGwgYmUgdXNlZnVsLFxuICogYnV0IFdJVEhPVVQgQU5ZIFdBUlJBTlRZOyB3aXRob3V0IGV2ZW4gdGhlIGltcGxpZWQgd2FycmFudHkgb2ZcbiAqIE1FUkNIQU5UQUJJTElUWSBvciBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRS4gIFNlZSB0aGVcbiAqIEdOVSBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlIGZvciBtb3JlIGRldGFpbHMuXG4gKlxuICogWW91IHNob3VsZCBoYXZlIHJlY2VpdmVkIGEgY29weSBvZiB0aGUgR05VIEdlbmVyYWwgUHVibGljIExpY2Vuc2VcbiAqIGFsb25nIHdpdGggXCJKU0dhbWVUb29sc1wiLiAgSWYgbm90LCBzZWUgPGh0dHA6Ly93d3cuZ251Lm9yZy9saWNlbnNlcy8+LlxuICovXG5pbXBvcnQgU2Nyb2xsYmFyIGZyb20gXCIuL1Njcm9sbGJhclwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTY3JvbGxiYXJWZXJ0aWNhbCBleHRlbmRzIFNjcm9sbGJhciB7XG4gIHNlbGVjdGFibGUgPSB0cnVlO1xuXG4gIGNvbnN0cnVjdG9yKHNpemUsIHN0eWxlLCBwYXJlbnQpIHtcbiAgICBzdXBlcihzaXplLCBzdHlsZSwgcGFyZW50KTtcbiAgICBcbiAgICB0aGlzLmFkZE1vdmVBY3Rpb24oKGRlbHRhWCwgZGVsdGFZKSA9PiB7XG4gICAgICBpZih0aGlzLnBhcmVudCkge1xuICAgICAgICBjb25zdCBwZXJjZW50U2Nyb2xsYmFyTmV4dCA9IE1hdGguYWJzKCh0aGlzLnBhcmVudC55IC0gTWF0aC5tYXgodGhpcy5wYXJlbnQueSwgdGhpcy55ICsgLWRlbHRhWSkpIC8gKHRoaXMucGFyZW50LmhlaWdodCAtIHRoaXMuaGVpZ2h0KSk7XG4gICAgICAgIGNvbnN0IG5ld0RlbHRhWSA9ICh0aGlzLndpbmRvd1Njcm9sbFNpemVZICogcGVyY2VudFNjcm9sbGJhck5leHQpIC0gdGhpcy5wYXJlbnQub2Zmc2V0U2Nyb2xsWTtcbiAgICAgICAgdGhpcy5wYXJlbnQub2Zmc2V0U2Nyb2xsWSArPSBuZXdEZWx0YVk7XG5cbiAgICAgICAgaWYodGhpcy5wYXJlbnQucmVhY3Rvcikge1xuICAgICAgICAgIHRoaXMucGFyZW50LnJlYWN0b3IuZGlzcGF0Y2hFdmVudChcIm9uU2Nyb2xsXCIsIDAsIG5ld0RlbHRhWSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuICBcbiAgZHJhdyhjb250ZXh0KSB7XG4gICAgaWYodGhpcy5zY3JvbGxBcmVhU2l6ZVkgPiAwKSB7XG4gICAgICBzdXBlci5kcmF3KGNvbnRleHQpO1xuICAgIH1cbiAgfVxuXG4gIGdldCB3aWR0aCgpIHtcbiAgICByZXR1cm4gdGhpcy5zaXplO1xuICB9XG5cbiAgZ2V0IHgoKSB7XG4gICAgcmV0dXJuIHRoaXMucGFyZW50ID8gdGhpcy5wYXJlbnQueCArIHRoaXMucGFyZW50LndpZHRoIC0gdGhpcy5zaXplIDogMDtcbiAgfVxufSIsIi8qXG4gKiBDb3B5cmlnaHQgKEMpIDIwMjAgRWxpYXN0aWsgKGVsaWFzdGlrc29mdHMuY29tKVxuICpcbiAqIFRoaXMgZmlsZSBpcyBwYXJ0IG9mIFwiSlNHYW1lVG9vbHNcIi5cbiAqXG4gKiBcIkpTR2FtZVRvb2xzXCIgaXMgZnJlZSBzb2Z0d2FyZTogeW91IGNhbiByZWRpc3RyaWJ1dGUgaXQgYW5kL29yIG1vZGlmeVxuICogaXQgdW5kZXIgdGhlIHRlcm1zIG9mIHRoZSBHTlUgR2VuZXJhbCBQdWJsaWMgTGljZW5zZSBhcyBwdWJsaXNoZWQgYnlcbiAqIHRoZSBGcmVlIFNvZnR3YXJlIEZvdW5kYXRpb24sIGVpdGhlciB2ZXJzaW9uIDMgb2YgdGhlIExpY2Vuc2UsIG9yXG4gKiAoYXQgeW91ciBvcHRpb24pIGFueSBsYXRlciB2ZXJzaW9uLlxuICpcbiAqIFwiSlNHYW1lVG9vbHNcIiBpcyBkaXN0cmlidXRlZCBpbiB0aGUgaG9wZSB0aGF0IGl0IHdpbGwgYmUgdXNlZnVsLFxuICogYnV0IFdJVEhPVVQgQU5ZIFdBUlJBTlRZOyB3aXRob3V0IGV2ZW4gdGhlIGltcGxpZWQgd2FycmFudHkgb2ZcbiAqIE1FUkNIQU5UQUJJTElUWSBvciBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRS4gIFNlZSB0aGVcbiAqIEdOVSBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlIGZvciBtb3JlIGRldGFpbHMuXG4gKlxuICogWW91IHNob3VsZCBoYXZlIHJlY2VpdmVkIGEgY29weSBvZiB0aGUgR05VIEdlbmVyYWwgUHVibGljIExpY2Vuc2VcbiAqIGFsb25nIHdpdGggXCJKU0dhbWVUb29sc1wiLiAgSWYgbm90LCBzZWUgPGh0dHA6Ly93d3cuZ251Lm9yZy9saWNlbnNlcy8+LlxuICovXG5pbXBvcnQgTGFiZWwgZnJvbSBcIi4vTGFiZWxcIjtcbmltcG9ydCBCdXR0b24gZnJvbSBcIi4vQnV0dG9uXCI7XG5pbXBvcnQgVHJpYW5nbGUgZnJvbSBcIi4vVHJpYW5nbGVcIjtcbmltcG9ydCBTdHlsZSBmcm9tIFwiLi9TdHlsZVwiO1xuaW1wb3J0IENvbnN0YW50cyBmcm9tIFwiLi9Db25zdGFudHNcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU2VsZWN0IGV4dGVuZHMgQnV0dG9uIHtcbiAgI193aWR0aCA9IDA7XG5cbiAgY29uc3RydWN0b3IoeCwgeSwgbWF4V2lkdGgsIG1heEhlaWdodCwgc3R5bGUsIG9wdGlvbkNvbnRhaW5lciwgZGVmYXVsdE9wdGlvbikge1xuICAgIHN1cGVyKHgsIHksIG1heFdpZHRoLCBtYXhIZWlnaHQsIHN0eWxlKTtcblxuICAgIHRoaXMub3B0aW9uQ29udGFpbmVyID0gb3B0aW9uQ29udGFpbmVyO1xuICAgIGlmKGRlZmF1bHRPcHRpb24pIHRoaXMuc2VsZWN0ZWRPcHRpb24gPSBkZWZhdWx0T3B0aW9uO1xuXG4gICAgdGhpcy5sYWJlbCA9IG5ldyBMYWJlbChcIlwiLCB4LCB5LCBzdHlsZSk7XG4gICAgdGhpcy5sYWJlbC5zdHlsZS5zZXRBbGwoeyBcImFsaWduZW1lbnRcIjogQ29uc3RhbnRzLkFsaWduZW1lbnQuTEVGVCwgXCJ2ZXJ0aWNhbEFsaWduZW1lbnRcIjogQ29uc3RhbnRzLlZlcnRpY2FsQWxpZ25lbWVudC5DRU5URVIgfSk7XG4gICAgdGhpcy50cmlhbmdsZSA9IG5ldyBUcmlhbmdsZShudWxsLCBudWxsLCA4LCA4LCBzdHlsZSk7XG4gICAgdGhpcy50cmlhbmdsZS5zdHlsZS5zZXRBbGwoeyBcImFsaWduZW1lbnRcIjogQ29uc3RhbnRzLkFsaWduZW1lbnQuUklHSFQsIFwidmVydGljYWxBbGlnbmVtZW50XCI6IENvbnN0YW50cy5WZXJ0aWNhbEFsaWduZW1lbnQuQ0VOVEVSIH0pO1xuXG4gICAgdGhpcy5hZGRBbGwodGhpcy5sYWJlbCwgdGhpcy50cmlhbmdsZSk7XG5cbiAgICB0aGlzLmFkZENsaWNrQWN0aW9uKCgpID0+IHtcbiAgICAgIGlmKHRoaXMub3B0aW9uQ29udGFpbmVyKSB7XG4gICAgICAgIHRoaXMub3B0aW9uQ29udGFpbmVyLmhpZGRlbiA9IGZhbHNlO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgaWYoIUNvbnN0YW50cy5TZXR0aW5nLkRJU0FCTEVfRVhQRVJJTUVOVEFMX09QVElNSVpBVElPTlMpIHtcbiAgICAgIHRoaXMudXBkYXRlV2lkdGgoKTtcbiAgICAgIHRoaXMuYWRkQ2hhbmdlQWN0aW9uKCgpID0+IHRoaXMudXBkYXRlV2lkdGgoKSk7XG4gICAgfVxuICB9XG5cbiAgZHJhdyhjb250ZXh0KSB7XG4gICAgaWYodGhpcy5oaWRkZW4pIHJldHVybjtcbiAgICBpZih0aGlzLnNlbGVjdGVkT3B0aW9uICYmIHRoaXMuc2VsZWN0ZWRPcHRpb24ubGFiZWwpIHtcbiAgICAgIHRoaXMubGFiZWwudGV4dCA9IHRoaXMuc2VsZWN0ZWRPcHRpb24ubGFiZWwudGV4dDtcbiAgICB9XG5cbiAgICBzdXBlci5kcmF3KGNvbnRleHQpO1xuXG4gICAgaWYodGhpcy5vcHRpb25Db250YWluZXIpIHtcbiAgICAgIHRoaXMub3B0aW9uQ29udGFpbmVyLnNlbGVjdCA9IHRoaXM7XG4gICAgfVxuICB9XG5cbiAgZ2V0IHNlbGVjdGVkT3B0aW9uKCkge1xuICAgIHJldHVybiB0aGlzLm9wdGlvbkNvbnRhaW5lciA/IHRoaXMub3B0aW9uQ29udGFpbmVyLmNvbXBvbmVudHNbdGhpcy5vcHRpb25Db250YWluZXIuc2VsZWN0ZWRPcHRpb25dIDogbnVsbDtcbiAgfVxuXG4gIHNldCBzZWxlY3RlZE9wdGlvbihpZCkge1xuICAgIGlmKGlkICE9IHRoaXMub3B0aW9uQ29udGFpbmVyLnNlbGVjdGVkT3B0aW9uKSB7XG4gICAgICB0aGlzLm9wdGlvbkNvbnRhaW5lci5zZWxlY3RlZE9wdGlvbiA9IGlkO1xuICAgICAgdGhpcy5yZWFjdG9yLmRpc3BhdGNoRXZlbnQoXCJvbkNoYW5nZVwiLCB0aGlzKTtcbiAgICB9XG4gIH1cblxuICBnZXQgdGV4dCgpIHtcbiAgICByZXR1cm4gdGhpcy5zZWxlY3RlZE9wdGlvbiAmJiB0aGlzLnNlbGVjdGVkT3B0aW9uLmxhYmVsID8gdGhpcy5zZWxlY3RlZE9wdGlvbi5sYWJlbC50ZXh0IDogbnVsbDtcbiAgfVxuXG4gIHVwZGF0ZVdpZHRoKCkge1xuICAgIGxldCBtYXhXaWR0aCA9IHRoaXMubGFiZWwud2lkdGg7XG5cbiAgICBpZih0aGlzLm9wdGlvbkNvbnRhaW5lcikge1xuICAgICAgdGhpcy5vcHRpb25Db250YWluZXIuY29tcG9uZW50cy5mb3JFYWNoKGNvbXBvbmVudCA9PiB7XG4gICAgICAgIGNvbnN0IGxhYmVsID0gY29tcG9uZW50LmxhYmVsO1xuXG4gICAgICAgIGlmKGxhYmVsKSB7XG4gICAgICAgICAgaWYobGFiZWwudXBkYXRlU2l6ZXMpIGxhYmVsLnVwZGF0ZVNpemVzKCk7XG4gICAgICAgICAgaWYobGFiZWwud2lkdGggPiBtYXhXaWR0aCkgbWF4V2lkdGggPSBsYWJlbC53aWR0aDtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgdGhpcy4jX3dpZHRoID0gbWF4V2lkdGggKyB0aGlzLnN0eWxlLnBhZGRpbmcgKyB0aGlzLnRyaWFuZ2xlLndpZHRoICsgMTU7XG4gIH1cblxuICBnZXQgd2lkdGgoKSB7XG4gICAgaWYoQ29uc3RhbnRzLlNldHRpbmcuRElTQUJMRV9FWFBFUklNRU5UQUxfT1BUSU1JWkFUSU9OUykgdGhpcy51cGRhdGVXaWR0aCgpO1xuICAgIHJldHVybiB0aGlzLiNfd2lkdGg7XG4gIH1cblxuICBnZXQgYWxsQ29tcG9uZW50cygpIHtcbiAgICBjb25zdCBjb21wb25lbnRzID0gW107XG4gICAgY29tcG9uZW50cy5wdXNoKC4uLnN1cGVyLmFsbENvbXBvbmVudHMpO1xuICAgIHJldHVybiBjb21wb25lbnRzO1xuICB9XG5cbiAgZ2V0IGRlZmF1bHRTdHlsZSgpIHtcbiAgICByZXR1cm4gbmV3IFN0eWxlKHtcbiAgICAgIFwiYmFja2dyb3VuZENvbG9yXCI6IENvbnN0YW50cy5TZXR0aW5nLlNFTEVDVF9ERUZBVUxUX0JBQ0tHUk9VTkQsXG4gICAgICBcImJhY2tncm91bmRDb2xvckhvdmVyXCI6IENvbnN0YW50cy5TZXR0aW5nLlNFTEVDVF9ERUZBVUxUX0hPVkVSX0JBQ0tHUk9VTkQsXG4gICAgICBcImJhY2tncm91bmRDb2xvckRvd25cIjogQ29uc3RhbnRzLlNldHRpbmcuU0VMRUNUX0RFRkFVTFRfQ0xJQ0tfQkFDS0dST1VORCxcbiAgICAgIFwicGFkZGluZ1wiOiBDb25zdGFudHMuU2V0dGluZy5ERUZBVUxUX1BBRERJTkdcbiAgICB9KTtcbiAgfVxuXG4gIGdldCBzZWxlY3RlZCgpIHtcbiAgICByZXR1cm4gc3VwZXIuc2VsZWN0ZWQgfHwgdGhpcy5vcHRpb25Db250YWluZXIuc2VsZWN0ZWQ7XG4gIH1cblxuICBzZXQgc2VsZWN0ZWQoc2VsZWN0ZWQpIHtcbiAgICBzdXBlci5zZWxlY3RlZCA9IHNlbGVjdGVkO1xuICB9XG59IiwiLypcbiAqIENvcHlyaWdodCAoQykgMjAyMCBFbGlhc3RpayAoZWxpYXN0aWtzb2Z0cy5jb20pXG4gKlxuICogVGhpcyBmaWxlIGlzIHBhcnQgb2YgXCJKU0dhbWVUb29sc1wiLlxuICpcbiAqIFwiSlNHYW1lVG9vbHNcIiBpcyBmcmVlIHNvZnR3YXJlOiB5b3UgY2FuIHJlZGlzdHJpYnV0ZSBpdCBhbmQvb3IgbW9kaWZ5XG4gKiBpdCB1bmRlciB0aGUgdGVybXMgb2YgdGhlIEdOVSBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlIGFzIHB1Ymxpc2hlZCBieVxuICogdGhlIEZyZWUgU29mdHdhcmUgRm91bmRhdGlvbiwgZWl0aGVyIHZlcnNpb24gMyBvZiB0aGUgTGljZW5zZSwgb3JcbiAqIChhdCB5b3VyIG9wdGlvbikgYW55IGxhdGVyIHZlcnNpb24uXG4gKlxuICogXCJKU0dhbWVUb29sc1wiIGlzIGRpc3RyaWJ1dGVkIGluIHRoZSBob3BlIHRoYXQgaXQgd2lsbCBiZSB1c2VmdWwsXG4gKiBidXQgV0lUSE9VVCBBTlkgV0FSUkFOVFk7IHdpdGhvdXQgZXZlbiB0aGUgaW1wbGllZCB3YXJyYW50eSBvZlxuICogTUVSQ0hBTlRBQklMSVRZIG9yIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFLiAgU2VlIHRoZVxuICogR05VIEdlbmVyYWwgUHVibGljIExpY2Vuc2UgZm9yIG1vcmUgZGV0YWlscy5cbiAqXG4gKiBZb3Ugc2hvdWxkIGhhdmUgcmVjZWl2ZWQgYSBjb3B5IG9mIHRoZSBHTlUgR2VuZXJhbCBQdWJsaWMgTGljZW5zZVxuICogYWxvbmcgd2l0aCBcIkpTR2FtZVRvb2xzXCIuICBJZiBub3QsIHNlZSA8aHR0cDovL3d3dy5nbnUub3JnL2xpY2Vuc2VzLz4uXG4gKi9cbmltcG9ydCBCdXR0b24gZnJvbSBcIi4vQnV0dG9uXCI7XG5pbXBvcnQgQ29uc3RhbnRzIGZyb20gXCIuL0NvbnN0YW50c1wiO1xuaW1wb3J0IExhYmVsIGZyb20gXCIuL0xhYmVsXCI7XG5pbXBvcnQgU3R5bGUgZnJvbSBcIi4vU3R5bGVcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU2VsZWN0T3B0aW9uIGV4dGVuZHMgQnV0dG9uIHtcbiAgY29uc3RydWN0b3IobGFiZWwsIHN0eWxlKSB7XG4gICAgY29uc3QgZGVmYXVsdExhYmVsID0gbmV3IExhYmVsKFwiT3B0aW9uXCIpO1xuICAgIHN1cGVyKG51bGwsIG51bGwsIG51bGwsIG51bGwsIHN0eWxlLCBsYWJlbCB8fCBkZWZhdWx0TGFiZWwpO1xuICAgIHRoaXMubGFiZWwgPSBsYWJlbCB8fCBkZWZhdWx0TGFiZWw7XG4gIH1cblxuICBhZGQoY29tcG9uZW50KSB7XG4gICAgaWYoY29tcG9uZW50IGluc3RhbmNlb2YgTGFiZWwpIHtcbiAgICAgIHRoaXMuY2xlYXIoKTtcbiAgICAgIHN1cGVyLmFkZChjb21wb25lbnQpO1xuICAgIH1cbiAgfVxuXG4gIGdldCB3aWR0aCgpIHtcbiAgICByZXR1cm4gdGhpcy5wYXJlbnQgJiYgdGhpcy5wYXJlbnQud2lkdGg7XG4gIH1cblxuICBnZXQgZGVmYXVsdFN0eWxlKCkge1xuICAgIHJldHVybiBuZXcgU3R5bGUoe1xuICAgICAgXCJiYWNrZ3JvdW5kQ29sb3JcIjogQ29uc3RhbnRzLlNldHRpbmcuU0VMRUNUX0RFRkFVTFRfQkFDS0dST1VORCxcbiAgICAgIFwiYmFja2dyb3VuZENvbG9ySG92ZXJcIjogQ29uc3RhbnRzLlNldHRpbmcuU0VMRUNUX0RFRkFVTFRfSE9WRVJfQkFDS0dST1VORCxcbiAgICAgIFwiYmFja2dyb3VuZENvbG9yRG93blwiOiBDb25zdGFudHMuU2V0dGluZy5TRUxFQ1RfREVGQVVMVF9DTElDS19CQUNLR1JPVU5ELFxuICAgICAgXCJwYWRkaW5nXCI6IENvbnN0YW50cy5TZXR0aW5nLkRFRkFVTFRfUEFERElOR1xuICAgIH0pO1xuICB9XG59IiwiLypcbiAqIENvcHlyaWdodCAoQykgMjAyMCBFbGlhc3RpayAoZWxpYXN0aWtzb2Z0cy5jb20pXG4gKlxuICogVGhpcyBmaWxlIGlzIHBhcnQgb2YgXCJKU0dhbWVUb29sc1wiLlxuICpcbiAqIFwiSlNHYW1lVG9vbHNcIiBpcyBmcmVlIHNvZnR3YXJlOiB5b3UgY2FuIHJlZGlzdHJpYnV0ZSBpdCBhbmQvb3IgbW9kaWZ5XG4gKiBpdCB1bmRlciB0aGUgdGVybXMgb2YgdGhlIEdOVSBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlIGFzIHB1Ymxpc2hlZCBieVxuICogdGhlIEZyZWUgU29mdHdhcmUgRm91bmRhdGlvbiwgZWl0aGVyIHZlcnNpb24gMyBvZiB0aGUgTGljZW5zZSwgb3JcbiAqIChhdCB5b3VyIG9wdGlvbikgYW55IGxhdGVyIHZlcnNpb24uXG4gKlxuICogXCJKU0dhbWVUb29sc1wiIGlzIGRpc3RyaWJ1dGVkIGluIHRoZSBob3BlIHRoYXQgaXQgd2lsbCBiZSB1c2VmdWwsXG4gKiBidXQgV0lUSE9VVCBBTlkgV0FSUkFOVFk7IHdpdGhvdXQgZXZlbiB0aGUgaW1wbGllZCB3YXJyYW50eSBvZlxuICogTUVSQ0hBTlRBQklMSVRZIG9yIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFLiAgU2VlIHRoZVxuICogR05VIEdlbmVyYWwgUHVibGljIExpY2Vuc2UgZm9yIG1vcmUgZGV0YWlscy5cbiAqXG4gKiBZb3Ugc2hvdWxkIGhhdmUgcmVjZWl2ZWQgYSBjb3B5IG9mIHRoZSBHTlUgR2VuZXJhbCBQdWJsaWMgTGljZW5zZVxuICogYWxvbmcgd2l0aCBcIkpTR2FtZVRvb2xzXCIuICBJZiBub3QsIHNlZSA8aHR0cDovL3d3dy5nbnUub3JnL2xpY2Vuc2VzLz4uXG4gKi9cbmltcG9ydCBDb2wgZnJvbSBcIi4vQ29sXCI7XG5pbXBvcnQgU3R5bGUgZnJvbSBcIi4vU3R5bGVcIjtcbmltcG9ydCBDb25zdGFudHMgZnJvbSBcIi4vQ29uc3RhbnRzXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFNlbGVjdERyb3Bkb3duIGV4dGVuZHMgQ29sIHtcbiAgI19zZWxlY3RlZE9wdGlvbjtcbiAgc2VsZWN0YWJsZSA9IGZhbHNlO1xuXG4gIGNvbnN0cnVjdG9yKG1heEhlaWdodERyb3Bkb3duLCBzdHlsZSwgLi4ub3B0aW9ucykge1xuICAgIHN1cGVyKG51bGwsIG51bGwsIG51bGwsIG1heEhlaWdodERyb3Bkb3duLCBzdHlsZSwgLi4ub3B0aW9ucyk7XG4gICAgdGhpcy4jX3NlbGVjdGVkT3B0aW9uID0gMDtcbiAgICB0aGlzLnNlbGVjdCA9IG51bGw7XG4gIH1cblxuICBkcmF3KGNvbnRleHQpIHtcbiAgICBzdXBlci5kcmF3KGNvbnRleHQpO1xuICB9XG5cbiAgZ2V0IHgoKSB7XG4gICAgcmV0dXJuIHRoaXMuc2VsZWN0ICYmIHRoaXMuc2VsZWN0Lng7XG4gIH1cblxuICBnZXQgeSgpIHtcbiAgICBjb25zdCBzZWxlY3RIZWlnaHQgPSAodGhpcy5zZWxlY3QgJiYgdGhpcy5zZWxlY3QuaGVpZ2h0KTtcbiAgICBjb25zdCBoZWlnaHQgPSB0aGlzLmhlaWdodDtcbiAgICBjb25zdCB5ID0gdGhpcy5zZWxlY3QgJiYgdGhpcy5zZWxlY3QueTtcblxuICAgIGlmKHRoaXMuY2FudmFzICYmIHRoaXMuY2FudmFzLnNjZW5lICYmIHkgKyBzZWxlY3RIZWlnaHQgKyBoZWlnaHQgPj0gdGhpcy5jYW52YXMuc2NlbmUuaGVpZ2h0KSB7XG4gICAgICByZXR1cm4geSAtIGhlaWdodDtcbiAgICB9XG5cbiAgICByZXR1cm4geSArIHNlbGVjdEhlaWdodDtcbiAgfVxuXG4gIGdldCB3aWR0aCgpIHtcbiAgICByZXR1cm4gdGhpcy5zZWxlY3QgJiYgdGhpcy5zZWxlY3Qud2lkdGg7XG4gIH1cblxuICBnZXQgc2VsZWN0ZWRPcHRpb24oKSB7XG4gICAgcmV0dXJuIE1hdGgubWF4KDAsIE1hdGgubWluKHRoaXMuY29tcG9uZW50cy5sZW5ndGggLSAxLCB0aGlzLiNfc2VsZWN0ZWRPcHRpb24pKTtcbiAgfVxuXG4gIHNldCBzZWxlY3RlZE9wdGlvbihpZCkge1xuICAgIGlmKGlkICE9IHRoaXMuI19zZWxlY3RlZE9wdGlvbikge1xuICAgICAgdGhpcy4jX3NlbGVjdGVkT3B0aW9uID0gaWQ7XG4gICAgICB0aGlzLnJlYWN0b3IuZGlzcGF0Y2hFdmVudChcIm9uQ2hhbmdlXCIsIHRoaXMpO1xuICAgIH1cbiAgfVxuXG4gIGFkZChjb21wb25lbnQpIHtcbiAgICBzdXBlci5hZGQoY29tcG9uZW50KTtcblxuICAgIGNvbXBvbmVudC5hZGRDbGlja0FjdGlvbigoKSA9PiB7XG4gICAgICB0aGlzLiNfc2VsZWN0ZWRPcHRpb24gPSB0aGlzLmdldENvbXBvbmVudElkKGNvbXBvbmVudCk7XG4gICAgICB0aGlzLnNlbGVjdGVkID0gZmFsc2U7XG4gICAgICB0aGlzLmhpZGRlbiA9IHRydWU7XG4gICAgICBpZih0aGlzLnNlbGVjdCkgdGhpcy5zZWxlY3Quc2VsZWN0ZWQgPSBmYWxzZTtcbiAgICB9KTtcbiAgfVxuXG4gIGdldCBkZWZhdWx0U3R5bGUoKSB7XG4gICAgcmV0dXJuIG5ldyBTdHlsZSh7XG4gICAgICBcInBhZGRpbmdcIjogMCxcbiAgICAgIFwic3BhY2VCZXR3ZWVuQ29tcG9uZW50c1wiOiAwLFxuICAgICAgXCJiYWNrZ3JvdW5kQ29sb3JcIjogQ29uc3RhbnRzLlNldHRpbmcuU0VMRUNUX0RFRkFVTFRfQkFDS0dST1VORCxcbiAgICAgIFwiYmFja2dyb3VuZENvbG9ySG92ZXJcIjogbnVsbCxcbiAgICAgIFwiYmFja2dyb3VuZENvbG9yRG93blwiOiBudWxsLFxuICAgICAgXCJzY3JvbGxYRGlzYWJsZWRcIjogZmFsc2UsXG4gICAgICBcInNjcm9sbFlEaXNhYmxlZFwiOiBmYWxzZVxuICAgIH0pO1xuICB9XG5cbiAgZ2V0IGhpZGRlbigpIHtcbiAgICByZXR1cm4gc3VwZXIuaGlkZGVuIHx8ICh0aGlzLnNlbGVjdCAmJiAhdGhpcy5zZWxlY3Quc2VsZWN0ZWQpIHx8ICF0aGlzLnNlbGVjdDtcbiAgfVxuXG4gIHNldCBoaWRkZW4oaGlkZGVuKSB7XG4gICAgcmV0dXJuIHN1cGVyLmhpZGRlbiA9IGhpZGRlbjtcbiAgfVxufSIsIi8qXG4gKiBDb3B5cmlnaHQgKEMpIDIwMjAgRWxpYXN0aWsgKGVsaWFzdGlrc29mdHMuY29tKVxuICpcbiAqIFRoaXMgZmlsZSBpcyBwYXJ0IG9mIFwiSlNHYW1lVG9vbHNcIi5cbiAqXG4gKiBcIkpTR2FtZVRvb2xzXCIgaXMgZnJlZSBzb2Z0d2FyZTogeW91IGNhbiByZWRpc3RyaWJ1dGUgaXQgYW5kL29yIG1vZGlmeVxuICogaXQgdW5kZXIgdGhlIHRlcm1zIG9mIHRoZSBHTlUgR2VuZXJhbCBQdWJsaWMgTGljZW5zZSBhcyBwdWJsaXNoZWQgYnlcbiAqIHRoZSBGcmVlIFNvZnR3YXJlIEZvdW5kYXRpb24sIGVpdGhlciB2ZXJzaW9uIDMgb2YgdGhlIExpY2Vuc2UsIG9yXG4gKiAoYXQgeW91ciBvcHRpb24pIGFueSBsYXRlciB2ZXJzaW9uLlxuICpcbiAqIFwiSlNHYW1lVG9vbHNcIiBpcyBkaXN0cmlidXRlZCBpbiB0aGUgaG9wZSB0aGF0IGl0IHdpbGwgYmUgdXNlZnVsLFxuICogYnV0IFdJVEhPVVQgQU5ZIFdBUlJBTlRZOyB3aXRob3V0IGV2ZW4gdGhlIGltcGxpZWQgd2FycmFudHkgb2ZcbiAqIE1FUkNIQU5UQUJJTElUWSBvciBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRS4gIFNlZSB0aGVcbiAqIEdOVSBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlIGZvciBtb3JlIGRldGFpbHMuXG4gKlxuICogWW91IHNob3VsZCBoYXZlIHJlY2VpdmVkIGEgY29weSBvZiB0aGUgR05VIEdlbmVyYWwgUHVibGljIExpY2Vuc2VcbiAqIGFsb25nIHdpdGggXCJKU0dhbWVUb29sc1wiLiAgSWYgbm90LCBzZWUgPGh0dHA6Ly93d3cuZ251Lm9yZy9saWNlbnNlcy8+LlxuICovXG5pbXBvcnQgQ29uc3RhbnRzIGZyb20gXCIuL0NvbnN0YW50c1wiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTdHlsZSB7XG4gICNzdHlsZXMgPSB7fTtcbiAgY29tcG9uZW50O1xuXG4gIGNvbnN0cnVjdG9yKHN0eWxlcykge1xuICAgIHRoaXMuc2V0QWxsKHN0eWxlcyk7XG4gIH1cblxuICBnZXQgZm9udENvbG9yKCkge1xuICAgIHJldHVybiB0aGlzLiNzdHlsZXMuZm9udENvbG9yO1xuICB9XG5cbiAgZ2V0IGZvbnRDb2xvckhvdmVyKCkge1xuICAgIHJldHVybiB0aGlzLiNzdHlsZXMuZm9udENvbG9ySG92ZXI7XG4gIH1cblxuICBnZXQgZm9udENvbG9yRG93bigpIHtcbiAgICByZXR1cm4gdGhpcy4jc3R5bGVzLmZvbnRDb2xvckRvd247XG4gIH1cblxuICBnZXQgZm9udEZhbWlseSgpIHtcbiAgICByZXR1cm4gdGhpcy4jc3R5bGVzLmZvbnRGYW1pbHkgIT0gbnVsbCA/IHRoaXMuI3N0eWxlcy5mb250RmFtaWx5IDogQ29uc3RhbnRzLlNldHRpbmcuRk9OVF9GQU1JTFk7XG4gIH1cblxuICBnZXQgZm9udFNpemUoKSB7XG4gICAgcmV0dXJuIHRoaXMuI3N0eWxlcy5mb250U2l6ZSAhPSBudWxsID8gdGhpcy4jc3R5bGVzLmZvbnRTaXplIDogQ29uc3RhbnRzLlNldHRpbmcuRk9OVF9TSVpFO1xuICB9XG5cbiAgZ2V0IGJvbGQoKSB7XG4gICAgcmV0dXJuIHRoaXMuI3N0eWxlcy5ib2xkO1xuICB9XG5cbiAgZ2V0IHVuZGVybGluZSgpIHtcbiAgICByZXR1cm4gdGhpcy4jc3R5bGVzLnVuZGVybGluZTtcbiAgfVxuXG4gIGdldCB3cmFwKCkge1xuICAgIHJldHVybiB0aGlzLiNzdHlsZXMud3JhcDtcbiAgfVxuXG4gIGdldCBiYWNrZ3JvdW5kQ29sb3IoKSB7XG4gICAgcmV0dXJuIHRoaXMuI3N0eWxlcy5iYWNrZ3JvdW5kQ29sb3I7XG4gIH1cblxuICBnZXQgZm9yZWdyb3VuZENvbG9yKCkge1xuICAgIHJldHVybiB0aGlzLiNzdHlsZXMuZm9yZWdyb3VuZENvbG9yO1xuICB9XG5cbiAgZ2V0IGJhY2tncm91bmRDb2xvckhvdmVyKCkge1xuICAgIHJldHVybiB0aGlzLiNzdHlsZXMuYmFja2dyb3VuZENvbG9ySG92ZXI7XG4gIH1cblxuICBnZXQgYmFja2dyb3VuZENvbG9yRG93bigpIHtcbiAgICByZXR1cm4gdGhpcy4jc3R5bGVzLmJhY2tncm91bmRDb2xvckRvd247XG4gIH1cblxuICBnZXQgYm9yZGVyQ29sb3IoKSB7XG4gICAgcmV0dXJuIHRoaXMuI3N0eWxlcy5ib3JkZXJDb2xvcjtcbiAgfVxuXG4gIGdldCBib3JkZXJDb2xvckhvdmVyKCkge1xuICAgIHJldHVybiB0aGlzLiNzdHlsZXMuYm9yZGVyQ29sb3JIb3ZlcjtcbiAgfVxuXG4gIGdldCBib3JkZXJDb2xvckRvd24oKSB7XG4gICAgcmV0dXJuIHRoaXMuI3N0eWxlcy5ib3JkZXJDb2xvckRvd247XG4gIH1cblxuICBnZXQgYm9yZGVyQ29sb3JTZWxlY3RlZCgpIHtcbiAgICByZXR1cm4gdGhpcy4jc3R5bGVzLmJvcmRlckNvbG9yU2VsZWN0ZWQgIT0gbnVsbCA/IHRoaXMuI3N0eWxlcy5ib3JkZXJDb2xvclNlbGVjdGVkIDogQ29uc3RhbnRzLlNldHRpbmcuREVGQVVMVF9CT1JERVJfQ09MT1JfU0VMRUNURUQ7XG4gIH1cblxuICBnZXQgYm9yZGVyU2l6ZSgpIHtcbiAgICByZXR1cm4gdGhpcy4jc3R5bGVzLmJvcmRlclNpemUgIT0gbnVsbCA/IHRoaXMuI3N0eWxlcy5ib3JkZXJTaXplIDogQ29uc3RhbnRzLlNldHRpbmcuREVGQVVMVF9CT1JERVJfU0laRTtcbiAgfVxuXG4gIGdldCBzZWxlY3RDb2xvcigpIHtcbiAgICByZXR1cm4gdGhpcy4jc3R5bGVzLnNlbGVjdENvbG9yO1xuICB9XG5cbiAgZ2V0IGFsaWduZW1lbnQoKSB7XG4gICAgcmV0dXJuIHRoaXMuI3N0eWxlcy5hbGlnbmVtZW50O1xuICB9XG5cbiAgZ2V0IHZlcnRpY2FsQWxpZ25lbWVudCgpIHtcbiAgICByZXR1cm4gdGhpcy4jc3R5bGVzLnZlcnRpY2FsQWxpZ25lbWVudDtcbiAgfVxuXG4gIGdldCBkaXNhYmxlQW5pbWF0aW9uKCkge1xuICAgIHJldHVybiB0aGlzLiNzdHlsZXMuZGlzYWJsZUFuaW1hdGlvbjtcbiAgfVxuXG4gIGdldCBzY3JvbGxYRGlzYWJsZWQoKSB7XG4gICAgcmV0dXJuIHRoaXMuI3N0eWxlcy5zY3JvbGxYRGlzYWJsZWQ7XG4gIH1cblxuICBnZXQgc2Nyb2xsWURpc2FibGVkKCkge1xuICAgIHJldHVybiB0aGlzLiNzdHlsZXMuc2Nyb2xsWURpc2FibGVkO1xuICB9XG5cbiAgZ2V0IHBhZGRpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMuI3N0eWxlcy5wYWRkaW5nICE9IG51bGwgPyB0aGlzLiNzdHlsZXMucGFkZGluZyA6IENvbnN0YW50cy5TZXR0aW5nLkRFRkFVTFRfUEFERElORztcbiAgfVxuXG4gIGdldCBzcGFjZUJldHdlZW5Db21wb25lbnRzKCkge1xuICAgIHJldHVybiB0aGlzLiNzdHlsZXMuc3BhY2VCZXR3ZWVuQ29tcG9uZW50cyAhPSBudWxsID8gdGhpcy4jc3R5bGVzLnNwYWNlQmV0d2VlbkNvbXBvbmVudHMgOiBDb25zdGFudHMuU2V0dGluZy5ERUZBVUxUX1NQQUNJTkc7XG4gIH1cblxuICBnZXQgaGlkZGVuKCkge1xuICAgIHJldHVybiB0aGlzLiNzdHlsZXMuaGlkZGVuO1xuICB9XG5cbiAgZ2V0IGJsdXJCYWNrZ3JvdW5kKCkge1xuICAgIHJldHVybiB0aGlzLiNzdHlsZXMuYmx1ckJhY2tncm91bmQ7XG4gIH1cblxuICBnZXQgbGluZVdpZHRoKCkge1xuICAgIHJldHVybiB0aGlzLiNzdHlsZXMubGluZVdpZHRoO1xuICB9XG5cbiAgZ2V0IGFuaW1hdGlvbkR1cmF0aW9uKCkge1xuICAgIHJldHVybiB0aGlzLiNzdHlsZXMuYW5pbWF0aW9uRHVyYXRpb24gIT0gbnVsbCA/IHRoaXMuI3N0eWxlcy5hbmltYXRpb25EdXJhdGlvbiA6IENvbnN0YW50cy5TZXR0aW5nLkRFRkFVTFRfQU5JTUFUSU9OX0RVUkFUSU9OO1xuICB9XG5cbiAgZ2V0IGZvcmVncm91bmQoKSB7XG4gICAgcmV0dXJuIHRoaXMuI3N0eWxlcy5mb3JlZ3JvdW5kO1xuICB9XG5cbiAgZ2V0IHpJbmRleCgpIHtcbiAgICByZXR1cm4gdGhpcy4jc3R5bGVzLnpJbmRleCAhPSBudWxsID8gdGhpcy4jc3R5bGVzLnpJbmRleCA6IDA7XG4gIH1cbiAgXG4gIGdldCBsaW5lQ2FwKCkge1xuICAgIHJldHVybiB0aGlzLiNzdHlsZXMubGluZUNhcDtcbiAgfVxuICBcbiAgZ2V0IGZpbGwoKSB7XG4gICAgcmV0dXJuIHRoaXMuI3N0eWxlcy5maWxsO1xuICB9XG5cbiAgZ2V0IGZpbGxDb2xvcigpIHtcbiAgICByZXR1cm4gdGhpcy4jc3R5bGVzLmZpbGxDb2xvcjtcbiAgfVxuXG4gIGdldCBjb2xvcigpIHtcbiAgICByZXR1cm4gdGhpcy4jc3R5bGVzLmNvbG9yO1xuICB9XG5cbiAgZ2V0IG1vdmFibGUoKSB7XG4gICAgcmV0dXJuIHRoaXMuI3N0eWxlcy5tb3ZhYmxlIHx8IGZhbHNlO1xuICB9XG5cbiAgc2V0KHN0eWxlLCB2YWx1ZSkge1xuICAgIGlmKHRoaXMuI3N0eWxlc1tzdHlsZV0gIT0gdmFsdWUpIHtcbiAgICAgIHRoaXMuI3N0eWxlc1tzdHlsZV0gPSB2YWx1ZTtcbiAgICAgIGlmKHRoaXMuY29tcG9uZW50ICYmIHRoaXMuY29tcG9uZW50LnJlYWN0b3IpIHRoaXMuY29tcG9uZW50LnJlYWN0b3IuZGlzcGF0Y2hFdmVudChcIm9uQ2hhbmdlXCIsIHRoaXMpO1xuICAgIH1cbiAgfVxuXG4gIHNldEFsbChzdHlsZXMpIHtcbiAgICBpZihzdHlsZXMpIHtcbiAgICAgIGZvcihjb25zdCBzdHlsZSBpbiBzdHlsZXMpIHtcbiAgICAgICAgaWYoc3R5bGVzLmhhc093blByb3BlcnR5KHN0eWxlKSkge1xuICAgICAgICAgIHRoaXMuc2V0KHN0eWxlLCBzdHlsZXNbc3R5bGVdKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIGNvcHkoKSB7XG4gICAgcmV0dXJuIG5ldyBTdHlsZSh0aGlzLiNzdHlsZXMpO1xuICB9XG5cbiAgZ2V0U3R5bGVzKCkge1xuICAgIGNvbnN0IHN0eWxlcyA9IHt9O1xuXG4gICAgZm9yKGNvbnN0IHN0eWxlIGluIHRoaXMuI3N0eWxlcykge1xuICAgICAgaWYodGhpcy4jc3R5bGVzLmhhc093blByb3BlcnR5KHN0eWxlKSkge1xuICAgICAgICBzdHlsZXNbc3R5bGVdID0gdGhpcy4jc3R5bGVzW3N0eWxlXTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gc3R5bGVzO1xuICB9XG59IiwiLypcbiAqIENvcHlyaWdodCAoQykgMjAyMCBFbGlhc3RpayAoZWxpYXN0aWtzb2Z0cy5jb20pXG4gKlxuICogVGhpcyBmaWxlIGlzIHBhcnQgb2YgXCJKU0dhbWVUb29sc1wiLlxuICpcbiAqIFwiSlNHYW1lVG9vbHNcIiBpcyBmcmVlIHNvZnR3YXJlOiB5b3UgY2FuIHJlZGlzdHJpYnV0ZSBpdCBhbmQvb3IgbW9kaWZ5XG4gKiBpdCB1bmRlciB0aGUgdGVybXMgb2YgdGhlIEdOVSBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlIGFzIHB1Ymxpc2hlZCBieVxuICogdGhlIEZyZWUgU29mdHdhcmUgRm91bmRhdGlvbiwgZWl0aGVyIHZlcnNpb24gMyBvZiB0aGUgTGljZW5zZSwgb3JcbiAqIChhdCB5b3VyIG9wdGlvbikgYW55IGxhdGVyIHZlcnNpb24uXG4gKlxuICogXCJKU0dhbWVUb29sc1wiIGlzIGRpc3RyaWJ1dGVkIGluIHRoZSBob3BlIHRoYXQgaXQgd2lsbCBiZSB1c2VmdWwsXG4gKiBidXQgV0lUSE9VVCBBTlkgV0FSUkFOVFk7IHdpdGhvdXQgZXZlbiB0aGUgaW1wbGllZCB3YXJyYW50eSBvZlxuICogTUVSQ0hBTlRBQklMSVRZIG9yIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFLiAgU2VlIHRoZVxuICogR05VIEdlbmVyYWwgUHVibGljIExpY2Vuc2UgZm9yIG1vcmUgZGV0YWlscy5cbiAqXG4gKiBZb3Ugc2hvdWxkIGhhdmUgcmVjZWl2ZWQgYSBjb3B5IG9mIHRoZSBHTlUgR2VuZXJhbCBQdWJsaWMgTGljZW5zZVxuICogYWxvbmcgd2l0aCBcIkpTR2FtZVRvb2xzXCIuICBJZiBub3QsIHNlZSA8aHR0cDovL3d3dy5nbnUub3JnL2xpY2Vuc2VzLz4uXG4gKi9cbmltcG9ydCBDb2wgZnJvbSBcIi4vQ29sXCI7XG5pbXBvcnQgQ29uc3RhbnRzIGZyb20gXCIuL0NvbnN0YW50c1wiO1xuaW1wb3J0IFN0eWxlIGZyb20gXCIuL1N0eWxlXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFRvb2x0aXAgZXh0ZW5kcyBDb2wge1xuICBzZWxlY3RhYmxlID0gZmFsc2U7XG4gIFxuICBjb25zdHJ1Y3RvcihzdHlsZSwgLi4uY29tcG9uZW50cykge1xuICAgIHN1cGVyKG51bGwsIG51bGwsIG51bGwsIG51bGwsIHN0eWxlLCAuLi5jb21wb25lbnRzKTtcbiAgICB0aGlzLmRpc2FibGVkID0gdHJ1ZTtcbiAgfVxuXG4gIGRyYXcoY29udGV4dCkge1xuICAgIGlmKHRoaXMuaGlkZGVuKSByZXR1cm47XG4gICAgY29uc3QgY2FudmFzID0gY29udGV4dC5jYW52YXM7XG4gICAgY29uc3QgY3R4ID0gY2FudmFzLmdldENvbnRleHQoXCIyZFwiKTtcbiAgICBjdHguc2F2ZSgpO1xuXG4gICAgaWYodGhpcy54ICsgdGhpcy53aWR0aCArIHRoaXMuc3R5bGUucGFkZGluZyA+IHRoaXMucGFyZW50LndpZHRoKSB7XG4gICAgICB0aGlzLnggLT0gKHRoaXMud2lkdGggKyB0aGlzLnN0eWxlLnBhZGRpbmcpO1xuICAgIH1cblxuICAgIGlmKHRoaXMueSArIHRoaXMuaGVpZ2h0ICsgdGhpcy5zdHlsZS5wYWRkaW5nID4gdGhpcy5wYXJlbnQuaGVpZ2h0KSB7XG4gICAgICB0aGlzLnkgLT0gKHRoaXMuaGVpZ2h0ICsgdGhpcy5zdHlsZS5wYWRkaW5nKTtcbiAgICB9XG5cbiAgICBzdXBlci5kcmF3KGN0eCk7XG4gICAgXG4gICAgY3R4LnJlc3RvcmUoKTtcbiAgfVxuXG4gIGdldCB3aWR0aCgpIHtcbiAgICByZXR1cm4gc3VwZXIud2lkdGggKyB0aGlzLnN0eWxlLnBhZGRpbmc7XG4gIH1cblxuICBnZXQgaGVpZ2h0KCkge1xuICAgIHJldHVybiBzdXBlci5oZWlnaHQgKyB0aGlzLnN0eWxlLnBhZGRpbmc7XG4gIH1cblxuICBzZXQgd2lkdGgod2lkdGgpIHtcbiAgICBzdXBlci53aWR0aCA9IHdpZHRoO1xuICB9XG5cbiAgc2V0IGhlaWdodChoZWlnaHQpIHtcbiAgICBzdXBlci5oZWlnaHQgPSBoZWlnaHQ7XG4gIH1cblxuICBnZXQgZGVmYXVsdFN0eWxlKCkge1xuICAgIHJldHVybiBuZXcgU3R5bGUoe1xuICAgICAgXCJiYWNrZ3JvdW5kQ29sb3JcIjogQ29uc3RhbnRzLlNldHRpbmcuVE9PTFRJUF9ERUZBVUxUX0JBQ0tHUk9VTkRcbiAgICB9KTtcbiAgfVxuXG4gIGNvbXBhcmVUb0NvbXBvbmVudChvdGhlckNvbXBvbmVudCkge1xuICAgIHJldHVybiBvdGhlckNvbXBvbmVudC5jb21wYXJlVG9Ub29sdGlwKHRoaXMpO1xuICB9XG5cbiAgY29tcGFyZVRvTWVudShvdGhlckNvbXBvbmVudCkge1xuICAgIHJldHVybiAxO1xuICB9XG5cbiAgY29tcGFyZVRvVG9vbHRpcChvdGhlckNvbXBvbmVudCkge1xuICAgIHJldHVybiAwO1xuICB9XG5cbiAgY29tcGFyZVRvTm90aWZpY2F0aW9uKG90aGVyQ29tcG9uZW50KSB7XG4gICAgcmV0dXJuIDE7XG4gIH1cblxuICBnZXQgaGlkZGVuKCkge1xuICAgIHJldHVybiBzdXBlci5oaWRkZW4gfHwgdGhpcy5kaXNhYmxlZDtcbiAgfVxuXG4gIHNldCBoaWRkZW4oaGlkZGVuKSB7XG4gICAgc3VwZXIuaGlkZGVuID0gaGlkZGVuO1xuICAgIHRoaXMuZGlzYWJsZWQgPSBoaWRkZW47XG4gIH1cbn0iLCIvKlxuICogQ29weXJpZ2h0IChDKSAyMDIwIEVsaWFzdGlrIChlbGlhc3Rpa3NvZnRzLmNvbSlcbiAqXG4gKiBUaGlzIGZpbGUgaXMgcGFydCBvZiBcIkpTR2FtZVRvb2xzXCIuXG4gKlxuICogXCJKU0dhbWVUb29sc1wiIGlzIGZyZWUgc29mdHdhcmU6IHlvdSBjYW4gcmVkaXN0cmlidXRlIGl0IGFuZC9vciBtb2RpZnlcbiAqIGl0IHVuZGVyIHRoZSB0ZXJtcyBvZiB0aGUgR05VIEdlbmVyYWwgUHVibGljIExpY2Vuc2UgYXMgcHVibGlzaGVkIGJ5XG4gKiB0aGUgRnJlZSBTb2Z0d2FyZSBGb3VuZGF0aW9uLCBlaXRoZXIgdmVyc2lvbiAzIG9mIHRoZSBMaWNlbnNlLCBvclxuICogKGF0IHlvdXIgb3B0aW9uKSBhbnkgbGF0ZXIgdmVyc2lvbi5cbiAqXG4gKiBcIkpTR2FtZVRvb2xzXCIgaXMgZGlzdHJpYnV0ZWQgaW4gdGhlIGhvcGUgdGhhdCBpdCB3aWxsIGJlIHVzZWZ1bCxcbiAqIGJ1dCBXSVRIT1VUIEFOWSBXQVJSQU5UWTsgd2l0aG91dCBldmVuIHRoZSBpbXBsaWVkIHdhcnJhbnR5IG9mXG4gKiBNRVJDSEFOVEFCSUxJVFkgb3IgRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UuICBTZWUgdGhlXG4gKiBHTlUgR2VuZXJhbCBQdWJsaWMgTGljZW5zZSBmb3IgbW9yZSBkZXRhaWxzLlxuICpcbiAqIFlvdSBzaG91bGQgaGF2ZSByZWNlaXZlZCBhIGNvcHkgb2YgdGhlIEdOVSBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlXG4gKiBhbG9uZyB3aXRoIFwiSlNHYW1lVG9vbHNcIi4gIElmIG5vdCwgc2VlIDxodHRwOi8vd3d3LmdudS5vcmcvbGljZW5zZXMvPi5cbiAqL1xuaW1wb3J0IENvbXBvbmVudCBmcm9tIFwiLi9Db21wb25lbnRcIjtcbmltcG9ydCBDb25zdGFudHMgZnJvbSBcIi4vQ29uc3RhbnRzXCI7XG5pbXBvcnQgVXRpbHMgZnJvbSBcIi4vVXRpbHNcIjtcbmltcG9ydCBTdHlsZSBmcm9tIFwiLi9TdHlsZVwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBUcmlhbmdsZSBleHRlbmRzIENvbXBvbmVudCB7XG4gIHNlbGVjdGFibGUgPSBmYWxzZTtcblxuICBjb25zdHJ1Y3Rvcih4LCB5LCB3aWR0aCwgaGVpZ2h0LCBzdHlsZSkge1xuICAgIHN1cGVyKHgsIHksIHdpZHRoLCBoZWlnaHQsIHN0eWxlKTtcbiAgfVxuXG4gIGRyYXcoY29udGV4dCkge1xuICAgIGlmKHRoaXMuaGlkZGVuKSByZXR1cm47XG4gICAgc3VwZXIuZHJhdyhjb250ZXh0KTtcblxuICAgIGNvbnN0IGNhbnZhcyA9IGNvbnRleHQuY2FudmFzO1xuICAgIGNvbnN0IGN0eCA9IGNhbnZhcy5nZXRDb250ZXh0KFwiMmRcIik7XG4gICAgXG4gICAgVXRpbHMuZHJhd1RyaWFuZ2xlKGN0eCwgdGhpcy54LCB0aGlzLnksIHRoaXMud2lkdGgsIHRoaXMuaGVpZ2h0LCB0aGlzLnN0eWxlLmxpbmVXaWR0aCwgdGhpcy5zdHlsZS5jb2xvciwgdGhpcy5zdHlsZS5saW5lQ2FwLCB0aGlzLnN0eWxlLmZpbGwsIHRoaXMuc3R5bGUuZmlsbENvbG9yKTtcblxuICAgIHRoaXMuaW5pdCA9IHRydWU7XG4gIH1cblxuICBnZXQgd2lkdGgoKSB7XG4gICAgcmV0dXJuIHN1cGVyLndpZHRoICsgdGhpcy5zdHlsZS5saW5lV2lkdGg7XG4gIH1cblxuICBnZXQgaGVpZ2h0KCkge1xuICAgIHJldHVybiBzdXBlci5oZWlnaHQgKyB0aGlzLnN0eWxlLmxpbmVXaWR0aDtcbiAgfVxuXG4gIHNldCB3aWR0aCh3aWR0aCkge1xuICAgIHN1cGVyLndpZHRoID0gd2lkdGg7XG4gIH1cblxuICBzZXQgaGVpZ2h0KGhlaWdodCkge1xuICAgIHN1cGVyLmhlaWdodCA9IGhlaWdodDtcbiAgfVxuXG4gIGdldCBkZWZhdWx0U3R5bGUoKSB7XG4gICAgcmV0dXJuIG5ldyBTdHlsZSh7XG4gICAgICBcImxpbmVXaWR0aFwiOiBDb25zdGFudHMuU2V0dGluZy5UUklBTkdMRV9ERUZBVUxUX0xJTkVfU0laRSxcbiAgICAgIFwiY29sb3JcIjogQ29uc3RhbnRzLlNldHRpbmcuVFJJQU5HTEVfREVGQVVMVF9DT0xPUixcbiAgICAgIFwiZmlsbFwiOiBDb25zdGFudHMuU2V0dGluZy5UUklBTkdMRV9ERUZBVUxUX0ZJTEwsXG4gICAgICBcImxpbmVDYXBcIjogQ29uc3RhbnRzLlNldHRpbmcuVFJJQU5HTEVfREVGQVVMVF9MSU5FX0NBUCxcbiAgICAgIFwiZmlsbENvbG9yXCI6IENvbnN0YW50cy5TZXR0aW5nLlRSSUFOR0xFX0RFRkFVTFRfRklMTF9DT0xPUlxuICAgIH0pO1xuICB9XG59IiwiLypcbiAqIENvcHlyaWdodCAoQykgMjAyMCBFbGlhc3RpayAoZWxpYXN0aWtzb2Z0cy5jb20pXG4gKlxuICogVGhpcyBmaWxlIGlzIHBhcnQgb2YgXCJKU0dhbWVUb29sc1wiLlxuICpcbiAqIFwiSlNHYW1lVG9vbHNcIiBpcyBmcmVlIHNvZnR3YXJlOiB5b3UgY2FuIHJlZGlzdHJpYnV0ZSBpdCBhbmQvb3IgbW9kaWZ5XG4gKiBpdCB1bmRlciB0aGUgdGVybXMgb2YgdGhlIEdOVSBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlIGFzIHB1Ymxpc2hlZCBieVxuICogdGhlIEZyZWUgU29mdHdhcmUgRm91bmRhdGlvbiwgZWl0aGVyIHZlcnNpb24gMyBvZiB0aGUgTGljZW5zZSwgb3JcbiAqIChhdCB5b3VyIG9wdGlvbikgYW55IGxhdGVyIHZlcnNpb24uXG4gKlxuICogXCJKU0dhbWVUb29sc1wiIGlzIGRpc3RyaWJ1dGVkIGluIHRoZSBob3BlIHRoYXQgaXQgd2lsbCBiZSB1c2VmdWwsXG4gKiBidXQgV0lUSE9VVCBBTlkgV0FSUkFOVFk7IHdpdGhvdXQgZXZlbiB0aGUgaW1wbGllZCB3YXJyYW50eSBvZlxuICogTUVSQ0hBTlRBQklMSVRZIG9yIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFLiAgU2VlIHRoZVxuICogR05VIEdlbmVyYWwgUHVibGljIExpY2Vuc2UgZm9yIG1vcmUgZGV0YWlscy5cbiAqXG4gKiBZb3Ugc2hvdWxkIGhhdmUgcmVjZWl2ZWQgYSBjb3B5IG9mIHRoZSBHTlUgR2VuZXJhbCBQdWJsaWMgTGljZW5zZVxuICogYWxvbmcgd2l0aCBcIkpTR2FtZVRvb2xzXCIuICBJZiBub3QsIHNlZSA8aHR0cDovL3d3dy5nbnUub3JnL2xpY2Vuc2VzLz4uXG4gKi9cbmltcG9ydCBDb25zdGFudHMgZnJvbSBcIi4vQ29uc3RhbnRzXCI7XG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgcHJlUmVuZGVyZWRGb250OiB7fSxcbiAgbGFzdEtleTogLTEsXG4gIHByZVJlbmRlckZvbnQ6IGZ1bmN0aW9uKGNhcnMsIHNpemUsIGNvbG9yLCBmb250RmFtaWx5KSB7XG4gICAgY2Fycy5wdXNoKFwiP1wiKTsgY2Fycy5wdXNoKFwiIFwiKTsgY2Fycy5wdXNoKFwiQVwiKTtcbiAgICBcbiAgICBmb3IobGV0IGkgPSAwOyBpIDwgY2Fycy5sZW5ndGg7IGkrKykge1xuICAgICAgY29uc3QgY2FudmFzVG1wID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImNhbnZhc1wiKTtcbiAgICAgIGNvbnN0IGN0eFRtcCA9IGNhbnZhc1RtcC5nZXRDb250ZXh0KFwiMmRcIik7XG4gICAgICBjdHhUbXAuZm9udCA9IHNpemUgKyBcInB4IFwiICsgZm9udEZhbWlseTtcbiAgICAgIGNvbnN0IHdpZHRoID0gY3R4VG1wLm1lYXN1cmVUZXh0KGNhcnNbaV0pLndpZHRoO1xuICAgICAgXG4gICAgICBjYW52YXNUbXAud2lkdGggPSB3aWR0aDtcbiAgICAgIGNhbnZhc1RtcC5oZWlnaHQgPSBzaXplICsgKHNpemUgLyA2KTtcbiAgICAgIFxuICAgICAgY3R4VG1wLmZvbnQgPSBzaXplICsgXCJweCBcIiArIGZvbnRGYW1pbHk7XG4gICAgICBjdHhUbXAuZmlsbFN0eWxlID0gY29sb3I7XG4gICAgICBjdHhUbXAudGV4dEJhc2VsaW5lID0gXCJ0b3BcIjtcbiAgICAgIGN0eFRtcC5maWxsVGV4dChjYXJzW2ldLCAwLCAwKTtcbiAgICAgIFxuICAgICAgdGhpcy5wcmVSZW5kZXJlZEZvbnRbY2Fyc1tpXV0gPSBjYW52YXNUbXA7XG4gICAgfVxuICB9LFxuICBkcmF3SW1hZ2U6IGZ1bmN0aW9uKGN0eCwgaW1hZ2UsIHgsIHksIHdpZHRoLCBoZWlnaHQsIHN4LCBzeSwgc1dpZHRoLCBzSGVpZ2h0LCBlcmFzZUJlbG93LCBkZWdyZWVzKSB7XG4gICAgdGhpcy5kcmF3SW1hZ2VXcmFwcGVyKGN0eCwgaW1hZ2UsIHgsIHksIHdpZHRoLCBoZWlnaHQsIHN4LCBzeSwgc1dpZHRoLCBzSGVpZ2h0LCBlcmFzZUJlbG93LCBkZWdyZWVzKTtcbiAgfSxcbiAgZHJhd0ltYWdlRGF0YTogZnVuY3Rpb24oY3R4LCBpbWFnZURhdGEsIHgsIHksIHdpZHRoLCBoZWlnaHQsIHN4LCBzeSwgc1dpZHRoLCBzSGVpZ2h0LCBlcmFzZUJlbG93LCBkZWdyZWVzKSB7XG4gICAgdGhpcy5kcmF3SW1hZ2VXcmFwcGVyKGN0eCwgaW1hZ2VEYXRhLCB4LCB5LCB3aWR0aCwgaGVpZ2h0LCBzeCwgc3ksIHNXaWR0aCwgc0hlaWdodCwgZXJhc2VCZWxvdywgZGVncmVlcyk7XG4gIH0sXG4gIGRyYXdJbWFnZVdyYXBwZXI6IGZ1bmN0aW9uKGN0eCwgaW1hZ2UsIHgsIHksIHdpZHRoLCBoZWlnaHQsIHN4LCBzeSwgc1dpZHRoLCBzSGVpZ2h0LCBlcmFzZUJlbG93LCBkZWdyZWVzKSB7XG4gICAgeCA9ICh4ID09IHVuZGVmaW5lZCB8fCBpc05hTih4KSkgPyBudWxsIDogTWF0aC5yb3VuZCh4KTtcbiAgICB5ID0gKHkgPT0gdW5kZWZpbmVkIHx8IGlzTmFOKHkpKSA/IG51bGwgOiBNYXRoLnJvdW5kKHkpO1xuICAgIHdpZHRoID0gKHdpZHRoID09IHVuZGVmaW5lZCB8fCBpc05hTih3aWR0aCkpID8gbnVsbCA6IE1hdGgucm91bmQod2lkdGgpO1xuICAgIGhlaWdodCA9IChoZWlnaHQgPT0gdW5kZWZpbmVkIHx8IGlzTmFOKGhlaWdodCkpID8gbnVsbCA6IE1hdGgucm91bmQoaGVpZ2h0KTtcbiAgICBzeCA9IChzeCA9PSB1bmRlZmluZWQgfHwgaXNOYU4oc3gpKSA/IG51bGwgOiBNYXRoLnJvdW5kKHN4KTtcbiAgICBzeSA9IChzeSA9PSB1bmRlZmluZWQgfHwgaXNOYU4oc3kpKSA/IG51bGwgOiBNYXRoLnJvdW5kKHN5KTtcbiAgICBzV2lkdGggPSAoc1dpZHRoID09IHVuZGVmaW5lZCB8fCBpc05hTihzV2lkdGgpKSA/IG51bGwgOiBNYXRoLnJvdW5kKHNXaWR0aCk7XG4gICAgc0hlaWdodCA9IChzSGVpZ2h0ID09IHVuZGVmaW5lZCB8fCBpc05hTihzSGVpZ2h0KSkgPyBudWxsIDogTWF0aC5yb3VuZChzSGVpZ2h0KTtcbiAgICBlcmFzZUJlbG93ID0gZXJhc2VCZWxvdyA9PSB1bmRlZmluZWQgPyBmYWxzZSA6IGVyYXNlQmVsb3c7XG4gICAgZGVncmVlcyA9IChkZWdyZWVzID09IHVuZGVmaW5lZCB8fCBpc05hTihkZWdyZWVzKSkgPyBudWxsIDogZGVncmVlcztcbiAgXG4gICAgaWYoZGVncmVlcyAhPSB1bmRlZmluZWQpIHtcbiAgICAgIGN0eC5zYXZlKCk7XG4gICAgICBjdHgudHJhbnNsYXRlKHggKyB3aWR0aCAvIDIsIHkgKyBoZWlnaHQgLyAyKTtcbiAgICAgIGN0eC5yb3RhdGUoZGVncmVlcyAqIE1hdGguUEkgLyAxODApO1xuICAgICAgeCA9IC0od2lkdGggLyAyKTtcbiAgICAgIHkgPSAtKGhlaWdodCAvIDIpO1xuICAgIH1cbiAgXG4gICAgaWYoZXJhc2VCZWxvdykge1xuICAgICAgY3R4LmNsZWFyUmVjdCh4LCB5LCB3aWR0aCwgaGVpZ2h0KTtcbiAgICB9XG4gIFxuICAgIGlmKGN0eCAhPSB1bmRlZmluZWQgJiYgaW1hZ2UgIT0gdW5kZWZpbmVkKSB7XG4gICAgICBpZihpbWFnZS53aWR0aCA+IDAgJiYgaW1hZ2UuaGVpZ2h0ID4gMCkge1xuICAgICAgICBpZihzeCAhPSB1bmRlZmluZWQgJiYgc3kgIT0gdW5kZWZpbmVkICYmIHNXaWR0aCAhPSB1bmRlZmluZWQgJiYgc0hlaWdodCAhPSB1bmRlZmluZWQpIHtcbiAgICAgICAgICBjdHguZHJhd0ltYWdlKGltYWdlLCBzeCwgc3ksIHNXaWR0aCwgc0hlaWdodCwgeCwgeSwgd2lkdGgsIGhlaWdodCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgY3R4LmRyYXdJbWFnZShpbWFnZSwgeCwgeSwgd2lkdGgsIGhlaWdodCk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIFxuICAgIGlmKGRlZ3JlZXMgIT0gdW5kZWZpbmVkKSB7XG4gICAgICBjdHgucmVzdG9yZSgpO1xuICAgIH1cbiAgfSxcbiAgZHJhd1RleHQ6IGZ1bmN0aW9uKGN0eCwgdGV4dCwgY29sb3IsIHNpemUsIGZvbnRGYW1pbHksIGFsaWduZW1lbnQsIHZlcnRpY2FsQWxpZ25lbWVudCwgeCwgeSwgd3JhcCwgYm9sZCwgdW5kZXJsaW5lLCB0ZXh0QmFzZWxpbmUsIHBhcmVudCkge1xuICAgIGlmKGN0eCkge1xuICAgICAgY3R4LnNhdmUoKTtcblxuICAgICAgaWYoIUFycmF5LmlzQXJyYXkoY29sb3IpKSB7XG4gICAgICAgIGN0eC5maWxsU3R5bGUgPSBjb2xvcjtcbiAgICAgICAgY3R4LnN0cm9rZVN0eWxlID0gY29sb3I7XG4gICAgICB9XG4gIFxuICAgICAgY3R4LmZvbnQgPSAoYm9sZCA/IFwiYm9sZCBcIiA6IFwiXCIpICsgc2l6ZSArIFwicHggXCIgKyBmb250RmFtaWx5O1xuICAgICAgY3R4LnRleHRCYXNlbGluZSA9IHRleHRCYXNlbGluZSB8fCBcImJvdHRvbVwiO1xuICAgICAgY3R4LmZpbHRlciA9IFwibm9uZVwiO1xuICBcbiAgICAgIGlmKHdyYXApIHtcbiAgICAgICAgdGV4dCA9IHRoaXMud3JhcFRleHRMaW5lcyhjdHgsIHRleHQpW1widGV4dFwiXTtcbiAgICAgIH1cbiAgICAgIFxuICAgICAgY29uc3QgbGluZXMgPSB0ZXh0LnNwbGl0KFwiXFxuXCIpO1xuICAgICAgbGV0IG1heFdpZHRoID0gMDtcbiAgICAgIGxldCB4Q3VycmVudCA9IE1hdGgucm91bmQoeCk7XG4gICAgICBsZXQgeUN1cnJlbnQgPSBNYXRoLnJvdW5kKHkpICsgc2l6ZTtcbiAgICAgIGxldCB5Rmlyc3QgPSAwO1xuXG4gICAgICBpZigheSkge1xuICAgICAgICBpZih2ZXJ0aWNhbEFsaWduZW1lbnQgPT0gQ29uc3RhbnRzLlZlcnRpY2FsQWxpZ25lbWVudC5DRU5URVIpIHtcbiAgICAgICAgICB5Q3VycmVudCArPSBNYXRoLnJvdW5kKCgocGFyZW50ICYmIHBhcmVudC5oZWlnaHQgPyBwYXJlbnQuaGVpZ2h0IDogdGhpcy5nZXRDYW52YXNIZWlnaHQoY3R4LmNhbnZhcykpIC8gMikgLSAoc2l6ZSAqIGxpbmVzLmxlbmd0aCAvIDIpKTtcbiAgICAgICAgfSBlbHNlIGlmKHZlcnRpY2FsQWxpZ25lbWVudCA9PSBDb25zdGFudHMuVmVydGljYWxBbGlnbmVtZW50LkJPVFRPTSkge1xuICAgICAgICAgIHlDdXJyZW50ICs9IE1hdGgucm91bmQoKChwYXJlbnQgJiYgcGFyZW50LmhlaWdodCA/IHBhcmVudC5oZWlnaHQgOiB0aGlzLmdldENhbnZhc0hlaWdodChjdHguY2FudmFzKSkpIC0gKHNpemUgKiBsaW5lcy5sZW5ndGgpIC8gMiAtIHNpemUgLyA1KTtcbiAgICAgICAgfVxuICAgICAgfVxuICBcbiAgICAgIGZvcihsZXQgaSA9IDA7IGkgPCBsaW5lcy5sZW5ndGg7IGkrKykge1xuICAgICAgICBjb25zdCBjdXJyZW50VGV4dCA9IGxpbmVzW2ldO1xuICAgICAgICBjb25zdCBjdXJyZW50V2lkdGggPSBjdHgubWVhc3VyZVRleHQoY3VycmVudFRleHQpLndpZHRoO1xuICBcbiAgICAgICAgaWYoQXJyYXkuaXNBcnJheShjb2xvcikpIHtcbiAgICAgICAgICBsZXQgY29sb3JJbmRleCA9IGk7XG4gIFxuICAgICAgICAgIGlmKGNvbG9ySW5kZXggPiBjb2xvci5sZW5ndGggLSAxKSB7XG4gICAgICAgICAgICBjb2xvckluZGV4ID0gY29sb3IubGVuZ3RoIC0gMTtcbiAgICAgICAgICB9XG4gIFxuICAgICAgICAgIGN0eC5maWxsU3R5bGUgPSBjb2xvcltjb2xvckluZGV4XTtcbiAgICAgICAgICBjdHguc3Ryb2tlU3R5bGUgPSBjb2xvcltjb2xvckluZGV4XTtcbiAgICAgICAgfVxuICBcbiAgICAgICAgaWYoYWxpZ25lbWVudCA9PSBDb25zdGFudHMuQWxpZ25lbWVudC5DRU5URVIpIHtcbiAgICAgICAgICB4Q3VycmVudCA9IE1hdGgucm91bmQoKHBhcmVudCAmJiBwYXJlbnQueCA/IHBhcmVudC54IDogMCkpICsgTWF0aC5yb3VuZCgoKHBhcmVudCAmJiBwYXJlbnQud2lkdGggPyBwYXJlbnQud2lkdGggOiB0aGlzLmdldENhbnZhc1dpZHRoKGN0eC5jYW52YXMpKSAvIDIpIC0gKGN0eC5tZWFzdXJlVGV4dChjdXJyZW50VGV4dCkud2lkdGggLyAyKSk7XG4gICAgICAgIH0gZWxzZSBpZihhbGlnbmVtZW50ID09IENvbnN0YW50cy5BbGlnbmVtZW50LlJJR0hUKSB7XG4gICAgICAgICAgeEN1cnJlbnQgPSBNYXRoLnJvdW5kKChwYXJlbnQgJiYgcGFyZW50LnggPyBwYXJlbnQueCA6IDApKSArIE1hdGgucm91bmQoKHBhcmVudCAmJiBwYXJlbnQud2lkdGggPyBwYXJlbnQud2lkdGggOiB0aGlzLmdldENhbnZhc1dpZHRoKGN0eC5jYW52YXMpKSAtIChjdHgubWVhc3VyZVRleHQoY3VycmVudFRleHQpLndpZHRoKSAtIChwYXJlbnQgJiYgcGFyZW50LnNwYWNlQmV0d2VlbkNvbXBvbmVudHMgPyBwYXJlbnQuc3BhY2VCZXR3ZWVuQ29tcG9uZW50cyA6IENvbnN0YW50cy5TZXR0aW5nLkRFRkFVTFRfU1BBQ0lORykpO1xuICAgICAgICB9XG5cbiAgICAgICAgY3R4LmZpbGxUZXh0KGN1cnJlbnRUZXh0LCB4Q3VycmVudCwgeUN1cnJlbnQpO1xuICBcbiAgICAgICAgaWYodW5kZXJsaW5lKSB7XG4gICAgICAgICAgY3R4LmxpbmVXaWR0aCA9IDE7XG4gICAgICAgICAgY3R4LmJlZ2luUGF0aCgpO1xuICAgICAgICAgIGN0eC5tb3ZlVG8oeEN1cnJlbnQsIHlDdXJyZW50IC0gMik7XG4gICAgICAgICAgY3R4LmxpbmVUbyhNYXRoLnJvdW5kKHhDdXJyZW50ICsgY3VycmVudFdpZHRoKSwgeUN1cnJlbnQgLSAyKTtcbiAgICAgICAgICBjdHguc3Ryb2tlKCk7XG4gICAgICAgIH1cbiAgXG4gICAgICAgIGlmKGN1cnJlbnRXaWR0aCA+IG1heFdpZHRoKSBtYXhXaWR0aCA9IGN1cnJlbnRXaWR0aDtcbiAgICAgICAgaWYoaSA9PSAwKSB5Rmlyc3QgPSB5Q3VycmVudDtcblxuICAgICAgICB5Q3VycmVudCArPSBzaXplO1xuICAgICAgfVxuICBcbiAgICAgIGN0eC5yZXN0b3JlKCk7XG4gIFxuICAgICAgcmV0dXJuIHtcbiAgICAgICAgeDogeEN1cnJlbnQsXG4gICAgICAgIHk6IHlGaXJzdCxcbiAgICAgICAgaGVpZ2h0OiBzaXplICogbGluZXMubGVuZ3RoLFxuICAgICAgICB3aWR0aDogbWF4V2lkdGhcbiAgICAgIH07XG4gICAgfVxuICB9LFxuICB3cmFwVGV4dDogZnVuY3Rpb24odGV4dCwgbGltaXQpIHtcbiAgICBpZih0ZXh0Lmxlbmd0aCA+IGxpbWl0KSB7XG4gICAgICBsZXQgcCA9IGxpbWl0O1xuXG4gICAgICBmb3IoOyBwID4gMCAmJiB0ZXh0W3BdICE9IFwiIFwiOyBwLS0pO1xuXG4gICAgICBpZihwID4gMCkge1xuICAgICAgICBjb25zdCBsZWZ0ID0gdGV4dC5zdWJzdHJpbmcoMCwgcCk7XG4gICAgICAgIGNvbnN0IHJpZ2h0ID0gdGV4dC5zdWJzdHJpbmcocCArIDEpO1xuICAgICAgICByZXR1cm4gbGVmdCArIFwiXFxuXCIgKyB0aGlzLndyYXBUZXh0KHJpZ2h0LCBsaW1pdCk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHRleHQ7XG4gIH0sXG4gIHdyYXBUZXh0TGluZXM6IGZ1bmN0aW9uKGN0eCwgdGV4dCwgd2lkdGgsIGZvbnRTaXplLCBmb250RmFtaWx5LCBkaXNhYmxlV3JhcCkge1xuICAgIGlmKGN0eCAmJiB0ZXh0KSB7XG4gICAgICBjdHguc2F2ZSgpO1xuICAgICAgY3R4LmZvbnQgPSBNYXRoLnJvdW5kKGZvbnRTaXplKSArIFwicHggXCIgKyBmb250RmFtaWx5O1xuICAgICAgY3R4LmltYWdlU21vb3RoaW5nRW5hYmxlZCA9IGZhbHNlO1xuICBcbiAgICAgIGNvbnN0IGxpbmVzID0gdGV4dC5zcGxpdChcIlxcblwiKTtcbiAgICAgIGxldCBuZXdUZXh0ID0gXCJcIjtcbiAgICAgIGNvbnN0IHdpZHRoQ2FyID0gd2lkdGggfHwgY3R4Lm1lYXN1cmVUZXh0KFwiQVwiKS53aWR0aDtcbiAgICAgIGNvbnN0IG5iQ2FyTGluZSA9IE1hdGgucm91bmQodGhpcy5nZXRDYW52YXNXaWR0aChjdHguY2FudmFzKSAvIHdpZHRoQ2FyKTtcbiAgXG4gICAgICBsZXQgaGVpZ2h0VG90YWwgPSAwO1xuICAgICAgbGV0IG1heFdpZHRoID0gMDtcbiAgXG4gICAgICBmb3IobGV0IGkgPSAwOyBpIDwgbGluZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgY29uc3QgbGluZVdyYXAgPSBkaXNhYmxlV3JhcCA/IGxpbmVzW2ldIDogdGhpcy53cmFwVGV4dChsaW5lc1tpXSwgbmJDYXJMaW5lKTtcbiAgICAgICAgbmV3VGV4dCArPSBsaW5lV3JhcDtcbiAgXG4gICAgICAgIGlmKGkgPCBsaW5lcy5sZW5ndGggLSAxKSB7XG4gICAgICAgICAgbmV3VGV4dCArPSBcIlxcblwiO1xuICAgICAgICB9XG4gIFxuICAgICAgICBmb3IobGV0IGogPSAwOyBqIDwgbGluZVdyYXAuc3BsaXQoXCJcXG5cIikubGVuZ3RoOyBqKyspIHtcbiAgICAgICAgICBjb25zdCB3aWR0aFRleHQgPSBjdHgubWVhc3VyZVRleHQobGluZVdyYXAuc3BsaXQoXCJcXG5cIilbal0pLndpZHRoO1xuICAgICAgICAgIGhlaWdodFRvdGFsICs9IGZvbnRTaXplO1xuICAgICAgICAgIGlmKHdpZHRoVGV4dCA+IG1heFdpZHRoKSBtYXhXaWR0aCA9IHdpZHRoVGV4dDtcbiAgICAgICAgfVxuICAgICAgfVxuICBcbiAgICAgIGN0eC5yZXN0b3JlKCk7XG5cbiAgICAgIHJldHVybiB7XG4gICAgICAgIHRleHQ6IG5ld1RleHQsXG4gICAgICAgIGhlaWdodDogaGVpZ2h0VG90YWwsXG4gICAgICAgIHdpZHRoOiBtYXhXaWR0aCxcbiAgICAgICAgY2FyV2lkdGg6IHdpZHRoQ2FyXG4gICAgICB9O1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICB0ZXh0OiBcIlwiLFxuICAgICAgICBoZWlnaHQ6IDAsXG4gICAgICAgIHdpZHRoOiAwLFxuICAgICAgICBjYXJXaWR0aDogMFxuICAgICAgfTtcbiAgICB9XG4gIH0sXG4gIGRyYXdBcnJvdzogZnVuY3Rpb24oY3R4LCBmcm9teCwgZnJvbXksIHRveCwgdG95LCBsaW5lV2lkdGgsIGhlYWRTaXplLCBjb2xvciwgbGluZUNhcCkge1xuICAgIGN0eC5zYXZlKCk7XG5cbiAgICBjdHgubGluZUNhcCA9IGxpbmVDYXAgfHwgQ29uc3RhbnRzLlNldHRpbmcuQVJST1dfREVGQVVMVF9MSU5FX0NBUDtcbiAgICBjdHgubGluZVdpZHRoID0gbGluZVdpZHRoIHx8IENvbnN0YW50cy5TZXR0aW5nLkFSUk9XX0RFRkFVTFRfTElORV9TSVpFO1xuICAgIGN0eC5zdHJva2VTdHlsZSA9IGNvbG9yIHx8IENvbnN0YW50cy5TZXR0aW5nLkFSUk9XX0RFRkFVTFRfQ09MT1I7XG4gICAgY3R4LmZpbHRlciA9IFwiXCI7XG4gIFxuICAgIGN0eC5iZWdpblBhdGgoKTtcbiAgICBjb25zdCBoZWFkbGVuID0gaGVhZFNpemUgfHwgQ29uc3RhbnRzLlNldHRpbmcuQVJST1dfREVGQVVMVF9IRUFEX1NJWkU7XG4gICAgY29uc3QgZHggPSB0b3ggLSBmcm9teDtcbiAgICBjb25zdCBkeSA9IHRveSAtIGZyb215O1xuICAgIGNvbnN0IGFuZ2xlID0gTWF0aC5hdGFuMihkeSwgZHgpO1xuICAgIGN0eC5tb3ZlVG8oZnJvbXgsIGZyb215KTtcbiAgICBjdHgubGluZVRvKHRveCwgdG95KTtcbiAgICBjdHgubW92ZVRvKHRveCwgdG95KTtcbiAgICBjdHgubGluZVRvKHRveCAtIGhlYWRsZW4gKiBNYXRoLmNvcyhhbmdsZSAtIE1hdGguUEkgLyA2KSwgdG95IC0gaGVhZGxlbiAqIE1hdGguc2luKGFuZ2xlIC0gTWF0aC5QSSAvIDYpKTtcbiAgICBjdHgubW92ZVRvKHRveCwgdG95KTtcbiAgICBjdHgubGluZVRvKHRveCAtIGhlYWRsZW4gKiBNYXRoLmNvcyhhbmdsZSArIE1hdGguUEkgLyA2KSwgdG95IC0gaGVhZGxlbiAqIE1hdGguc2luKGFuZ2xlICsgTWF0aC5QSSAvIDYpKTtcbiAgICBjdHguc3Ryb2tlKCk7XG4gICAgXG4gICAgY3R4LnJlc3RvcmUoKTtcbiAgfSxcbiAgZHJhd0Nyb3NzOiBmdW5jdGlvbihjdHgsIHgsIHksIHdpZHRoLCBoZWlnaHQsIGxpbmVXaWR0aCwgY29sb3IsIGxpbmVDYXApIHtcbiAgICBjdHguc2F2ZSgpO1xuXG4gICAgY3R4LmxpbmVDYXAgPSBsaW5lQ2FwIHx8IENvbnN0YW50cy5TZXR0aW5nLkNST1NTX0RFRkFVTFRfTElORV9DQVA7XG4gICAgY3R4LmxpbmVXaWR0aCA9IGxpbmVXaWR0aCB8fCBDb25zdGFudHMuU2V0dGluZy5DUk9TU19ERUZBVUxUX0xJTkVfU0laRTtcbiAgICBjdHguc3Ryb2tlU3R5bGUgPSBjb2xvciB8fCBDb25zdGFudHMuU2V0dGluZy5DUk9TU19ERUZBVUxUX0NPTE9SO1xuICAgIGN0eC5maWx0ZXIgPSBcIlwiO1xuICBcbiAgICBjdHguYmVnaW5QYXRoKCk7XG4gICAgY3R4Lm1vdmVUbyh4LCB5KTtcbiAgICBjdHgubGluZVRvKHggKyB3aWR0aCwgeSArIGhlaWdodCk7XG4gICAgY3R4Lm1vdmVUbyh4ICsgd2lkdGgsIHkpO1xuICAgIGN0eC5saW5lVG8oeCwgeSArIGhlaWdodCk7XG4gICAgY3R4LnN0cm9rZSgpO1xuICAgIFxuICAgIGN0eC5yZXN0b3JlKCk7XG4gIH0sXG4gIGRyYXdUcmlhbmdsZTogZnVuY3Rpb24oY3R4LCB4LCB5LCB3aWR0aCwgaGVpZ2h0LCBsaW5lV2lkdGgsIGNvbG9yLCBsaW5lQ2FwLCBmaWxsID0gQ29uc3RhbnRzLlNldHRpbmcuVFJJQU5HTEVfREVGQVVMVF9GSUxMLCBmaWxsQ29sb3IpIHtcbiAgICBjdHguc2F2ZSgpO1xuXG4gICAgY3R4LmxpbmVDYXAgPSBsaW5lQ2FwIHx8IENvbnN0YW50cy5TZXR0aW5nLlRSSUFOR0xFX0RFRkFVTFRfTElORV9DQVA7XG4gICAgY3R4LmxpbmVXaWR0aCA9IGxpbmVXaWR0aCB8fCBDb25zdGFudHMuU2V0dGluZy5UUklBTkdMRV9ERUZBVUxUX0xJTkVfU0laRTtcbiAgICBjdHguZmlsdGVyID0gXCJcIjtcblxuICAgIGlmKGZpbGwpIHtcbiAgICAgIGN0eC5maWxsU3R5bGUgPSBmaWxsQ29sb3IgfHwgQ29uc3RhbnRzLlNldHRpbmcuVFJJQU5HTEVfREVGQVVMVF9GSUxMX0NPTE9SO1xuICAgICAgY3R4LnN0cm9rZVN0eWxlID0gY29sb3IgfHwgQ29uc3RhbnRzLlNldHRpbmcuVFJJQU5HTEVfREVGQVVMVF9DT0xPUjtcbiAgICB9IGVsc2Uge1xuICAgICAgY3R4LnN0cm9rZVN0eWxlID0gY29sb3IgfHwgQ29uc3RhbnRzLlNldHRpbmcuVFJJQU5HTEVfREVGQVVMVF9DT0xPUjtcbiAgICB9XG4gIFxuICAgIGN0eC5iZWdpblBhdGgoKTtcbiAgICBjdHgubW92ZVRvKHgsIHkpO1xuICAgIGN0eC5saW5lVG8oeCArIHdpZHRoLCB5KTtcbiAgICBjdHgubGluZVRvKHggKyB3aWR0aCAvIDIsIHkgKyBoZWlnaHQpO1xuICAgIGN0eC5saW5lVG8oeCwgeSk7XG5cbiAgICBpZihmaWxsKSB7XG4gICAgICBjdHguZmlsbCgpO1xuICAgICAgY3R4LnN0cm9rZSgpO1xuICAgIH0gZWxzZSB7XG4gICAgICBjdHguc3Ryb2tlKCk7XG4gICAgfVxuICAgIFxuICAgIGN0eC5yZXN0b3JlKCk7XG4gIH0sXG4gIGRyYXdDaXJjbGU6IGZ1bmN0aW9uKGN0eCwgeCwgeSwgcmFkaXVzLCBsaW5lV2lkdGgsIGNvbG9yLCBsaW5lQ2FwLCBmaWxsID0gQ29uc3RhbnRzLlNldHRpbmcuQ0lSQ0xFX0RFRkFVTFRfRklMTCwgZmlsbENvbG9yKSB7XG4gICAgY3R4LnNhdmUoKTtcblxuICAgIGN0eC5saW5lQ2FwID0gbGluZUNhcCB8fCBDb25zdGFudHMuU2V0dGluZy5DSVJDTEVfREVGQVVMVF9MSU5FX0NBUDtcbiAgICBjdHgubGluZVdpZHRoID0gbGluZVdpZHRoIHx8IENvbnN0YW50cy5TZXR0aW5nLkNJUkNMRV9ERUZBVUxUX0xJTkVfU0laRTtcbiAgICBjdHguZmlsdGVyID0gXCJcIjtcblxuICAgIGlmKGZpbGwpIHtcbiAgICAgIGN0eC5maWxsU3R5bGUgPSBmaWxsQ29sb3IgfHwgQ29uc3RhbnRzLlNldHRpbmcuQ0lSQ0xFX0RFRkFVTFRfRklMTF9DT0xPUjtcbiAgICAgIGN0eC5zdHJva2VTdHlsZSA9IGNvbG9yIHx8IENvbnN0YW50cy5TZXR0aW5nLkNJUkNMRV9ERUZBVUxUX0NPTE9SO1xuICAgIH0gZWxzZSB7XG4gICAgICBjdHguc3Ryb2tlU3R5bGUgPSBjb2xvciB8fCBDb25zdGFudHMuU2V0dGluZy5DSVJDTEVfREVGQVVMVF9DT0xPUjtcbiAgICB9XG4gICAgXG4gICAgY3R4LmJlZ2luUGF0aCgpO1xuICAgIGN0eC5hcmMoeCArIHJhZGl1cyAvIDIsIHkgKyByYWRpdXMgLyAyLCByYWRpdXMgLyAyLCAwLCAyICogTWF0aC5QSSwgZmFsc2UpO1xuXG4gICAgaWYoZmlsbCkge1xuICAgICAgY3R4LmZpbGwoKTtcbiAgICAgIGN0eC5zdHJva2UoKTtcbiAgICB9IGVsc2Uge1xuICAgICAgY3R4LnN0cm9rZSgpO1xuICAgIH1cbiAgICBcbiAgICBjdHgucmVzdG9yZSgpO1xuICB9LFxuICBjbGVhcjogZnVuY3Rpb24oY3R4KSB7XG4gICAgY3R4LmNsZWFyUmVjdCgwLCAwLCB0aGlzLmdldENhbnZhc1dpZHRoKGN0eC5jYW52YXMpLCB0aGlzLmdldENhbnZhc0hlaWdodChjdHguY2FudmFzKSk7XG4gIH0sXG4gIGlzRmlsdGVySHVlQXZhaWxhYmxlOiBmdW5jdGlvbigpIHtcbiAgICBjb25zdCBjYW52YXMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiY2FudmFzXCIpO1xuICAgIGNhbnZhcy53aWR0aCA9IDU7XG4gICAgY2FudmFzLmhlaWdodCA9IDU7XG4gICAgY29uc3QgY3R4ID0gY2FudmFzLmdldENvbnRleHQoXCIyZFwiKTtcbiAgICBjdHguc2F2ZSgpO1xuICBcbiAgICBjdHguZmlsbFN0eWxlID0gXCIjRkYwMDAwXCI7XG4gICAgY3R4LmZpbHRlciA9IFwiaHVlLXJvdGF0ZSg5MGRlZylcIjtcbiAgICBjdHguZmlsbFJlY3QoMCwgMCwgNSwgNSk7XG4gICAgY29uc3QgY29sb3IgPSBjdHguZ2V0SW1hZ2VEYXRhKDAsIDAsIDEsIDEpLmRhdGE7XG4gICAgY3R4LnJlc3RvcmUoKTtcbiAgXG4gICAgaWYoY29sb3JbMF0gPT0gMjU1ICYmIGNvbG9yWzFdID09IDAgJiYgY29sb3JbMl0gPT0gMCkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgXG4gICAgcmV0dXJuIHRydWU7XG4gIH0sXG4gIGJsdXJDYW52YXM6IGZ1bmN0aW9uKGN0eCwgbGVuZ3RoKSB7XG4gICAgY3R4LnNhdmUoKTtcbiAgICBjdHguZmlsdGVyID0gXCJibHVyKFwiICsgbGVuZ3RoICArIFwicHgpXCI7XG4gICAgdGhpcy5kcmF3SW1hZ2VEYXRhKGN0eCwgY3R4LmNhbnZhcywgMCwgMCwgdGhpcy5nZXRDYW52YXNXaWR0aChjdHguY2FudmFzKSwgdGhpcy5nZXRDYW52YXNIZWlnaHQoY3R4LmNhbnZhcykpO1xuICAgIGN0eC5yZXN0b3JlKCk7XG4gIH0sXG4gIHBhcnNlTnVtYmVyOiBmdW5jdGlvbihzdHIpIHtcbiAgICByZXR1cm4gc3RyID8gcGFyc2VJbnQoc3RyLm1hdGNoKC9cXGQrLyksIDEwKSA6IDA7XG4gIH0sXG4gIGdldEZvbnRTaXplOiBmdW5jdGlvbihjdHgpIHtcbiAgICByZXR1cm4gTWF0aC5mbG9vcihwYXJzZU51bWJlcihjdHguZm9udCkgLyAxLjI1KTtcbiAgfSxcbiAgZ2V0Q2FudmFzV2lkdGgoY2FudmFzKSB7XG4gICAgcmV0dXJuIHRoaXMucGFyc2VOdW1iZXIoY2FudmFzLnN0eWxlLndpZHRoKSB8fCBjYW52YXMud2lkdGg7XG4gIH0sXG4gIGdldENhbnZhc0hlaWdodChjYW52YXMpIHtcbiAgICByZXR1cm4gdGhpcy5wYXJzZU51bWJlcihjYW52YXMuc3R5bGUuaGVpZ2h0KSB8fCBjYW52YXMuaGVpZ2h0O1xuICB9LFxuICBhdXRvRFBJKGNhbnZhcykge1xuICAgIGNvbnN0IHJlY3QgPSBjYW52YXMuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG5cbiAgICBjYW52YXMud2lkdGggPSByZWN0LndpZHRoICogQ29uc3RhbnRzLlNldHRpbmcuUElYRUxfUkFUSU87XG4gICAgY2FudmFzLmhlaWdodCA9IHJlY3QuaGVpZ2h0ICogQ29uc3RhbnRzLlNldHRpbmcuUElYRUxfUkFUSU87XG4gICAgXG4gICAgY2FudmFzLnN0eWxlLndpZHRoID0gcmVjdC53aWR0aCArIFwicHhcIjtcbiAgICBjYW52YXMuc3R5bGUuaGVpZ2h0ID0gIHJlY3QuaGVpZ2h0ICsgXCJweFwiO1xuICB9LFxuICBhdXRvUmVzaXplQ2FudmFzOiBmdW5jdGlvbihjYW52YXMsIGNvbnRhaW5lciwgaW5pdGlhbFdpZHRoLCBpbml0aWFsSGVpZ2h0KSB7XG4gICAgaWYoIWRvY3VtZW50LmZ1bGxzY3JlZW5FbGVtZW50KSB7XG4gICAgICBpZihpbml0aWFsV2lkdGggPj0gZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmNsaWVudFdpZHRoICogMC44NSkge1xuICAgICAgICB2YXIgcmF0aW8gPSBpbml0aWFsV2lkdGggLyBpbml0aWFsSGVpZ2h0O1xuICAgICAgICBjYW52YXMud2lkdGggPSBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuY2xpZW50V2lkdGggKiAwLjg1O1xuICAgICAgICBjYW52YXMuaGVpZ2h0ID0gY2FudmFzLndpZHRoIC8gcmF0aW87XG5cbiAgICAgICAgaWYoY2FudmFzLnN0eWxlKSB7XG4gICAgICAgICAgY2FudmFzLnN0eWxlLndpZHRoID0gY2FudmFzLndpZHRoICsgXCJweFwiO1xuICAgICAgICAgIGNhbnZhcy5zdHlsZS5oZWlnaHQgPSBjYW52YXMuaGVpZ2h0ICsgXCJweFwiO1xuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBjYW52YXMud2lkdGggPSBpbml0aWFsV2lkdGg7XG4gICAgICAgIGNhbnZhcy5oZWlnaHQgPSBpbml0aWFsSGVpZ2h0O1xuXG4gICAgICAgIGlmKGNhbnZhcy5zdHlsZSkge1xuICAgICAgICAgIGNhbnZhcy5zdHlsZS53aWR0aCA9IGluaXRpYWxXaWR0aCArIFwicHhcIjtcbiAgICAgICAgICBjYW52YXMuc3R5bGUuaGVpZ2h0ID0gaW5pdGlhbEhlaWdodCArIFwicHhcIjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0gZWxzZSBpZihkb2N1bWVudC5mdWxsc2NyZWVuRWxlbWVudCA9PSBjYW52YXMgfHwgZG9jdW1lbnQuZnVsbHNjcmVlbkVsZW1lbnQgPT0gY29udGFpbmVyKSB7XG4gICAgICBjYW52YXMud2lkdGggPSB3aW5kb3cuaW5uZXJXaWR0aDtcbiAgICAgIGNhbnZhcy5oZWlnaHQgPSB3aW5kb3cuaW5uZXJIZWlnaHQ7XG5cbiAgICAgIGlmKGNhbnZhcy5zdHlsZSkge1xuICAgICAgICBjYW52YXMuc3R5bGUud2lkdGggPSB3aW5kb3cuaW5uZXJXaWR0aCArIFwicHhcIjtcbiAgICAgICAgY2FudmFzLnN0eWxlLmhlaWdodCA9IHdpbmRvdy5pbm5lckhlaWdodCArIFwicHhcIjtcbiAgICAgIH1cblxuICAgICAgaWYoY29udGFpbmVyKSB7XG4gICAgICAgIGNvbnRhaW5lci53aWR0aCA9IHdpbmRvdy5pbm5lcldpZHRoO1xuICAgICAgICBjb250YWluZXIuaGVpZ2h0ID0gd2luZG93LmlubmVySGVpZ2h0O1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBjYW52YXMud2lkdGggPSBpbml0aWFsV2lkdGg7XG4gICAgICBjYW52YXMuaGVpZ2h0ID0gaW5pdGlhbEhlaWdodDtcblxuICAgICAgaWYoY2FudmFzLnN0eWxlKSB7XG4gICAgICAgIGNhbnZhcy5zdHlsZS53aWR0aCA9IGluaXRpYWxXaWR0aCArIFwicHhcIjtcbiAgICAgICAgY2FudmFzLnN0eWxlLmhlaWdodCA9IGluaXRpYWxIZWlnaHQgKyBcInB4XCI7XG4gICAgICB9XG4gICAgfVxuICB9LFxuICBlbmFibGVBdXRvUmVzaXplQ2FudmFzOiBmdW5jdGlvbihjYW52YXMsIGNvbnRhaW5lciwgaW5pdGlhbFdpZHRoLCBpbml0aWFsSGVpZ2h0KSB7XG4gICAgaWYoY2FudmFzICYmIGNhbnZhcy5nZXRBdHRyaWJ1dGUoXCJhdXRvcmVzaXplLWNhbnZhcy1ldmVudFwiKSAhPSBcInRydWVcIikge1xuICAgICAgdGhpcy5hdXRvUmVzaXplQ2FudmFzKGNhbnZhcywgY29udGFpbmVyLCBpbml0aWFsV2lkdGgsIGluaXRpYWxIZWlnaHQpO1xuICBcbiAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwicmVzaXplXCIsICgpID0+IHtcbiAgICAgICAgY2FudmFzLnNldEF0dHJpYnV0ZShcImF1dG9yZXNpemUtY2FudmFzLWV2ZW50XCIsIFwidHJ1ZVwiKTtcbiAgICAgICAgdGhpcy5hdXRvUmVzaXplQ2FudmFzKGNhbnZhcywgY29udGFpbmVyLCBpbml0aWFsV2lkdGgsIGluaXRpYWxIZWlnaHQpO1xuICAgICAgfSk7XG4gICAgfVxuICB9LFxuICBhdXRvUmVzaXplQ2FudmFzRnVsbHNjcmVlbjogZnVuY3Rpb24oY2FudmFzLCBjb250YWluZXIpIHtcbiAgICBpZihkb2N1bWVudC5mdWxsc2NyZWVuRWxlbWVudCA9PSBjYW52YXMgfHwgZG9jdW1lbnQuZnVsbHNjcmVlbkVsZW1lbnQgPT0gY29udGFpbmVyKSB7XG4gICAgICBjYW52YXMud2lkdGggPSB3aW5kb3cuaW5uZXJXaWR0aDtcbiAgICAgIGNhbnZhcy5oZWlnaHQgPSB3aW5kb3cuaW5uZXJIZWlnaHQ7XG5cbiAgICAgIGlmKGNhbnZhcy5zdHlsZSkge1xuICAgICAgICBjYW52YXMuc3R5bGUud2lkdGggPSB3aW5kb3cuaW5uZXJXaWR0aCArIFwicHhcIjtcbiAgICAgICAgY2FudmFzLnN0eWxlLmhlaWdodCA9IHdpbmRvdy5pbm5lckhlaWdodCArIFwicHhcIjtcbiAgICAgIH1cbiAgICAgIFxuICAgICAgaWYoY29udGFpbmVyKSB7XG4gICAgICAgIGNvbnRhaW5lci53aWR0aCA9IHdpbmRvdy5pbm5lcldpZHRoO1xuICAgICAgICBjb250YWluZXIuaGVpZ2h0ID0gd2luZG93LmlubmVySGVpZ2h0O1xuICAgICAgfVxuICAgIH1cbiAgfSxcbiAgZW5hYmxlQXV0b1Jlc2l6ZUNhbnZhc0Z1bGxzY3JlZW46IGZ1bmN0aW9uKGNhbnZhcywgY29udGFpbmVyKSB7XG4gICAgaWYoY2FudmFzICYmIGNhbnZhcy5nZXRBdHRyaWJ1dGUoXCJhdXRvcmVzaXplZnVsbHNjcmVlbi1jYW52YXMtZXZlbnRcIikgIT0gXCJ0cnVlXCIpIHtcbiAgICAgIHRoaXMuYXV0b1Jlc2l6ZUNhbnZhc0Z1bGxzY3JlZW4oY2FudmFzLCBjb250YWluZXIpO1xuICBcbiAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwicmVzaXplXCIsICgpID0+IHtcbiAgICAgICAgY2FudmFzLnNldEF0dHJpYnV0ZShcImF1dG9yZXNpemVmdWxsc2NyZWVuLWNhbnZhcy1ldmVudFwiLCBcInRydWVcIik7XG4gICAgICAgIHRoaXMuYXV0b1Jlc2l6ZUNhbnZhc0Z1bGxzY3JlZW4oY2FudmFzLCBjb250YWluZXIpO1xuICAgICAgfSk7XG4gICAgfVxuICB9LFxuICBhdXRvUmVzaXplQ2FudmFzRnVsbHBhZ2U6IGZ1bmN0aW9uKGNhbnZhcywgY29udGFpbmVyKSB7XG4gICAgaWYoY2FudmFzICYmIGNhbnZhcy5nZXRBdHRyaWJ1dGUoXCJmdWxscGFnZS1jYW52YXMtZW5hYmxlXCIpID09IFwidHJ1ZVwiKSB7XG4gICAgICBjYW52YXMud2lkdGggPSB3aW5kb3cuaW5uZXJXaWR0aDtcbiAgICAgIGNhbnZhcy5oZWlnaHQgPSB3aW5kb3cuaW5uZXJIZWlnaHQ7XG4gICAgICBcbiAgICAgIGlmKGNhbnZhcy5zdHlsZSkge1xuICAgICAgICBjYW52YXMuc3R5bGUud2lkdGggPSB3aW5kb3cuaW5uZXJXaWR0aCArIFwicHhcIjtcbiAgICAgICAgY2FudmFzLnN0eWxlLmhlaWdodCA9IHdpbmRvdy5pbm5lckhlaWdodCArIFwicHhcIjtcbiAgICAgIH1cbiAgICAgIFxuICAgICAgaWYoY29udGFpbmVyKSB7XG4gICAgICAgIGNvbnRhaW5lci53aWR0aCA9IHdpbmRvdy5pbm5lcldpZHRoO1xuICAgICAgICBjb250YWluZXIuaGVpZ2h0ID0gd2luZG93LmlubmVySGVpZ2h0O1xuICAgICAgICBjb250YWluZXIuc3R5bGUubWFyZ2luID0gMDtcbiAgICAgICAgY29udGFpbmVyLnN0eWxlLnBhZGRpbmcgPSAwO1xuICAgICAgfVxuXG4gICAgICBkb2N1bWVudC5ib2R5LnN0eWxlLm1hcmdpbiA9IDA7XG4gICAgICBkb2N1bWVudC5ib2R5LnN0eWxlLnBhZGRpbmcgPSAwO1xuICAgIH1cbiAgfSxcbiAgZW5hYmxlQXV0b1Jlc2l6ZUNhbnZhc0Z1bGxwYWdlOiBmdW5jdGlvbihjYW52YXMsIGNvbnRhaW5lcikge1xuICAgIGlmKGNhbnZhcyAmJiBjYW52YXMuZ2V0QXR0cmlidXRlKFwiYXV0b3Jlc2l6ZWZ1bGxwYWdlLWNhbnZhcy1ldmVudFwiKSAhPSBcInRydWVcIikge1xuICAgICAgdGhpcy5hdXRvUmVzaXplQ2FudmFzRnVsbHBhZ2UoY2FudmFzLCBjb250YWluZXIpO1xuICBcbiAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwicmVzaXplXCIsICgpID0+IHtcbiAgICAgICAgY2FudmFzLnNldEF0dHJpYnV0ZShcImF1dG9yZXNpemVmdWxscGFnZS1jYW52YXMtZXZlbnRcIiwgXCJ0cnVlXCIpO1xuICAgICAgICB0aGlzLmF1dG9SZXNpemVDYW52YXNGdWxscGFnZShjYW52YXMsIGNvbnRhaW5lcik7XG4gICAgICB9KTtcbiAgICB9XG4gIH0sXG4gIHRvZ2dsZUZ1bGxzY3JlZW46IGZ1bmN0aW9uKGNhbnZhcywgY29udGFpbmVyKSB7XG4gICAgaWYoY2FudmFzKSB7XG4gICAgICBjb25zdCBpbml0aWFsV2lkdGggPSBjYW52YXMud2lkdGg7XG4gICAgICBjb25zdCBpbml0aWFsSGVpZ2h0ID0gY2FudmFzLmhlaWdodDtcblxuICAgICAgaWYoY29udGFpbmVyKSB7XG4gICAgICAgIGNvbnRhaW5lci53aWR0aCA9IGluaXRpYWxXaWR0aDtcbiAgICAgICAgY29udGFpbmVyLmhlaWdodCA9IGluaXRpYWxIZWlnaHQ7XG4gICAgICB9XG5cbiAgICAgIGlmKCFkb2N1bWVudC5mdWxsc2NyZWVuRWxlbWVudCkge1xuICAgICAgICBpZigoY29udGFpbmVyIHx8IGNhbnZhcykucmVxdWVzdEZ1bGxzY3JlZW4pIHtcbiAgICAgICAgICAoY29udGFpbmVyIHx8IGNhbnZhcykucmVxdWVzdEZ1bGxzY3JlZW4oKTtcbiAgICAgICAgfSBlbHNlIGlmKChjb250YWluZXIgfHwgY2FudmFzKS5tb3pSZXF1ZXN0RnVsbFNjcmVlbikge1xuICAgICAgICAgIChjb250YWluZXIgfHwgY2FudmFzKS5tb3pSZXF1ZXN0RnVsbFNjcmVlbigpO1xuICAgICAgICB9IGVsc2UgaWYoKGNvbnRhaW5lciB8fCBjYW52YXMpLndlYmtpdFJlcXVlc3RGdWxsc2NyZWVuKSB7XG4gICAgICAgICAgKGNvbnRhaW5lciB8fCBjYW52YXMpLndlYmtpdFJlcXVlc3RGdWxsc2NyZWVuKCk7XG4gICAgICAgIH0gZWxzZSBpZigoY29udGFpbmVyIHx8IGNhbnZhcykubXNSZXF1ZXN0RnVsbHNjcmVlbikge1xuICAgICAgICAgIChjb250YWluZXIgfHwgY2FudmFzKS5tc1JlcXVlc3RGdWxsc2NyZWVuKCk7XG4gICAgICAgIH0gZWxzZSBpZigoY29udGFpbmVyIHx8IGNhbnZhcykub1JlcXVlc3RGdWxsc2NyZWVuKSB7XG4gICAgICAgICAgKGNvbnRhaW5lciB8fCBjYW52YXMpLm9SZXF1ZXN0RnVsbHNjcmVlbigpO1xuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBpZihkb2N1bWVudC5leGl0RnVsbHNjcmVlbikge1xuICAgICAgICAgIGRvY3VtZW50LmV4aXRGdWxsc2NyZWVuKCk7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgdGhpcy5lbmFibGVBdXRvUmVzaXplQ2FudmFzRnVsbHNjcmVlbihjYW52YXMsIGNvbnRhaW5lcik7XG5cbiAgICAgIGlmKGNhbnZhcy5nZXRBdHRyaWJ1dGUoXCJmdWxsc2NyZWVuY2hhbmdlLWNhbnZhcy1ldmVudFwiKSAhPSBcInRydWVcIikge1xuICAgICAgICBjYW52YXMuc2V0QXR0cmlidXRlKFwiZnVsbHNjcmVlbmNoYW5nZS1jYW52YXMtZXZlbnRcIiwgXCJ0cnVlXCIpO1xuXG4gICAgICAgIGNvbnN0IG9uZnVsbHNjcmVlbmNoYW5nZSA9ICgpID0+IHtcbiAgICAgICAgICBpZihkb2N1bWVudC5mdWxsc2NyZWVuRWxlbWVudCAhPSAoY29udGFpbmVyIHx8IGNhbnZhcykpIHtcbiAgICAgICAgICAgIGNhbnZhcy53aWR0aCA9IGluaXRpYWxXaWR0aDtcbiAgICAgICAgICAgIGNhbnZhcy5oZWlnaHQgPSBpbml0aWFsSGVpZ2h0O1xuICAgICAgXG4gICAgICAgICAgICBpZihjb250YWluZXIpIHtcbiAgICAgICAgICAgICAgY29udGFpbmVyLndpZHRoID0gaW5pdGlhbFdpZHRoO1xuICAgICAgICAgICAgICBjb250YWluZXIuaGVpZ2h0ID0gaW5pdGlhbEhlaWdodDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgXG4gICAgICAgIGlmKHR5cGVvZihkb2N1bWVudC5vbmZ1bGxzY3JlZW5jaGFuZ2UpICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgZG9jdW1lbnQub25mdWxsc2NyZWVuY2hhbmdlID0gb25mdWxsc2NyZWVuY2hhbmdlO1xuICAgICAgICB9IGVsc2UgaWYodHlwZW9mKGRvY3VtZW50Lm9ubXNmdWxsc2NyZWVuY2hhbmdlKSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGRvY3VtZW50Lm9ubXNmdWxsc2NyZWVuY2hhbmdlID0gb25mdWxsc2NyZWVuY2hhbmdlO1xuICAgICAgICB9IGVsc2UgaWYodHlwZW9mKGRvY3VtZW50Lm9ubW96ZnVsbHNjcmVlbmNoYW5nZSkgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBkb2N1bWVudC5vbm1vemZ1bGxzY3JlZW5jaGFuZ2UgPSBvbmZ1bGxzY3JlZW5jaGFuZ2U7XG4gICAgICAgIH0gZWxzZSBpZih0eXBlb2YoZG9jdW1lbnQub253ZWJraXRmdWxsc2NyZWVuY2hhbmdlKSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGRvY3VtZW50Lm9ud2Via2l0ZnVsbHNjcmVlbmNoYW5nZSA9IG9uZnVsbHNjcmVlbmNoYW5nZTtcbiAgICAgICAgfSBlbHNlIGlmKHR5cGVvZihkb2N1bWVudC5vbm9raXRmdWxsc2NyZWVuY2hhbmdlKSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGRvY3VtZW50Lm9ub2Z1bGxzY3JlZW5jaGFuZ2UgPSBvbmZ1bGxzY3JlZW5jaGFuZ2U7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH0sXG4gIHRvZ2dsZUZ1bGxwYWdlOiBmdW5jdGlvbihjYW52YXMsIGNvbnRhaW5lcikge1xuICAgIGlmKGNhbnZhcykge1xuICAgICAgY29uc3QgaW5pdGlhbFdpZHRoID0gY2FudmFzLndpZHRoO1xuICAgICAgY29uc3QgaW5pdGlhbEhlaWdodCA9IGNhbnZhcy5oZWlnaHQ7XG5cbiAgICAgIGlmKGNvbnRhaW5lcikge1xuICAgICAgICBjb250YWluZXIud2lkdGggPSBpbml0aWFsV2lkdGg7XG4gICAgICAgIGNvbnRhaW5lci5oZWlnaHQgPSBpbml0aWFsSGVpZ2h0O1xuICAgICAgfVxuXG4gICAgICBpZighY2FudmFzLmdldEF0dHJpYnV0ZShcImZ1bGxwYWdlLWNhbnZhcy1lbmFibGVcIikgfHwgY2FudmFzLmdldEF0dHJpYnV0ZShcImZ1bGxwYWdlLWNhbnZhcy1lbmFibGVcIikgPT0gXCJmYWxzZVwiKSB7XG4gICAgICAgIGNhbnZhcy5zZXRBdHRyaWJ1dGUoXCJmdWxscGFnZS1jYW52YXMtZW5hYmxlXCIsIFwidHJ1ZVwiKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGNhbnZhcy5zZXRBdHRyaWJ1dGUoXCJmdWxscGFnZS1jYW52YXMtZW5hYmxlXCIsIFwiZmFsc2VcIik7XG4gICAgICB9XG5cbiAgICAgIHRoaXMuZW5hYmxlQXV0b1Jlc2l6ZUNhbnZhc0Z1bGxwYWdlKGNhbnZhcywgY29udGFpbmVyKTtcbiAgICB9XG4gIH0sXG4gIGdldE1vdXNlUG9zKGNhbnZhcywgZXZlbnQpIHtcbiAgICBjb25zdCByZWN0ID0gY2FudmFzLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuICAgIFxuICAgIHJldHVybiB7XG4gICAgICB4OiBldmVudC5jbGllbnRYIC0gcmVjdC5sZWZ0LFxuICAgICAgeTogZXZlbnQuY2xpZW50WSAtIHJlY3QudG9wXG4gICAgfTtcbiAgfVxufTsiLCIvKlxuICogQ29weXJpZ2h0IChDKSAyMDIwIEVsaWFzdGlrIChlbGlhc3Rpa3NvZnRzLmNvbSlcbiAqXG4gKiBUaGlzIGZpbGUgaXMgcGFydCBvZiBcIkpTR2FtZVRvb2xzXCIuXG4gKlxuICogXCJKU0dhbWVUb29sc1wiIGlzIGZyZWUgc29mdHdhcmU6IHlvdSBjYW4gcmVkaXN0cmlidXRlIGl0IGFuZC9vciBtb2RpZnlcbiAqIGl0IHVuZGVyIHRoZSB0ZXJtcyBvZiB0aGUgR05VIEdlbmVyYWwgUHVibGljIExpY2Vuc2UgYXMgcHVibGlzaGVkIGJ5XG4gKiB0aGUgRnJlZSBTb2Z0d2FyZSBGb3VuZGF0aW9uLCBlaXRoZXIgdmVyc2lvbiAzIG9mIHRoZSBMaWNlbnNlLCBvclxuICogKGF0IHlvdXIgb3B0aW9uKSBhbnkgbGF0ZXIgdmVyc2lvbi5cbiAqXG4gKiBcIkpTR2FtZVRvb2xzXCIgaXMgZGlzdHJpYnV0ZWQgaW4gdGhlIGhvcGUgdGhhdCBpdCB3aWxsIGJlIHVzZWZ1bCxcbiAqIGJ1dCBXSVRIT1VUIEFOWSBXQVJSQU5UWTsgd2l0aG91dCBldmVuIHRoZSBpbXBsaWVkIHdhcnJhbnR5IG9mXG4gKiBNRVJDSEFOVEFCSUxJVFkgb3IgRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UuICBTZWUgdGhlXG4gKiBHTlUgR2VuZXJhbCBQdWJsaWMgTGljZW5zZSBmb3IgbW9yZSBkZXRhaWxzLlxuICpcbiAqIFlvdSBzaG91bGQgaGF2ZSByZWNlaXZlZCBhIGNvcHkgb2YgdGhlIEdOVSBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlXG4gKiBhbG9uZyB3aXRoIFwiSlNHYW1lVG9vbHNcIi4gIElmIG5vdCwgc2VlIDxodHRwOi8vd3d3LmdudS5vcmcvbGljZW5zZXMvPi5cbiAqL1xuaW1wb3J0IENvbnN0YW50cyBmcm9tIFwiLi9Db25zdGFudHNcIjtcbmltcG9ydCBCdXR0b24gZnJvbSBcIi4vQnV0dG9uXCI7XG5pbXBvcnQgQnV0dG9uSW1hZ2UgZnJvbSBcIi4vQnV0dG9uSW1hZ2VcIjtcbmltcG9ydCBJbWFnZUxvYWRlciBmcm9tIFwiLi9JbWFnZUxvYWRlclwiO1xuaW1wb3J0IE5vdGlmaWNhdGlvbk1lc3NhZ2UgZnJvbSBcIi4vTm90aWZpY2F0aW9uTWVzc2FnZVwiO1xuaW1wb3J0IFV0aWxzIGZyb20gXCIuL1V0aWxzXCI7XG5pbXBvcnQgTWVudSBmcm9tIFwiLi9NZW51XCI7XG5pbXBvcnQgSW5wdXQgZnJvbSBcIi4vSW5wdXRcIjtcbmltcG9ydCBMYWJlbCBmcm9tIFwiLi9MYWJlbFwiO1xuaW1wb3J0IExpbmsgZnJvbSBcIi4vTGlua1wiO1xuaW1wb3J0IFRvb2x0aXAgZnJvbSBcIi4vVG9vbHRpcFwiO1xuaW1wb3J0IFNjZW5lIGZyb20gXCIuL1NjZW5lXCI7XG5pbXBvcnQgRlBTTWV0ZXIgZnJvbSBcIi4vRlBTTWV0ZXJcIjtcbmltcG9ydCBQcm9ncmVzc0JhciBmcm9tIFwiLi9Qcm9ncmVzc0JhclwiO1xuaW1wb3J0IENhbnZhcyBmcm9tIFwiLi9DYW52YXNcIjtcbmltcG9ydCBDb21wb25lbnQgZnJvbSBcIi4vQ29tcG9uZW50XCI7XG5pbXBvcnQgRWFzaW5nRnVuY3Rpb25zIGZyb20gXCIuL0Vhc2luZ0Z1bmN0aW9uc1wiO1xuaW1wb3J0IENvbCBmcm9tIFwiLi9Db2xcIjtcbmltcG9ydCBDb250YWluZXIgZnJvbSBcIi4vQ29udGFpbmVyXCI7XG5pbXBvcnQgUm93IGZyb20gXCIuL1Jvd1wiO1xuaW1wb3J0IEltYWdlQ29udGFpbmVyIGZyb20gXCIuL0ltYWdlQ29udGFpbmVyXCI7XG5pbXBvcnQgQXJyb3cgZnJvbSBcIi4vQXJyb3dcIjtcbmltcG9ydCBDcm9zcyBmcm9tIFwiLi9Dcm9zc1wiO1xuaW1wb3J0IFNjcm9sbGJhciBmcm9tIFwiLi9TY3JvbGxiYXJcIjtcbmltcG9ydCBTY3JvbGxiYXJWZXJ0aWNhbCBmcm9tIFwiLi9TY3JvbGxiYXJWZXJ0aWNhbFwiO1xuaW1wb3J0IFNjcm9sbGJhckhvcml6b250YWwgZnJvbSBcIi4vU2Nyb2xsYmFySG9yaXpvbnRhbFwiO1xuaW1wb3J0IEJveCBmcm9tIFwiLi9Cb3hcIjtcbmltcG9ydCBTdHlsZSBmcm9tIFwiLi9TdHlsZVwiO1xuaW1wb3J0IFNlbGVjdCBmcm9tIFwiLi9TZWxlY3RcIjtcbmltcG9ydCBTZWxlY3RPcHRpb24gZnJvbSBcIi4vU2VsZWN0T3B0aW9uXCI7XG5pbXBvcnQgU2VsZWN0T3B0aW9uc0NvbnRhaW5lciBmcm9tIFwiLi9TZWxlY3RPcHRpb25zQ29udGFpbmVyXCI7XG5pbXBvcnQgVHJpYW5nbGUgZnJvbSBcIi4vVHJpYW5nbGVcIjtcbmltcG9ydCBDaXJjbGUgZnJvbSBcIi4vQ2lyY2xlXCI7XG5pbXBvcnQgUmVhY3RvciBmcm9tIFwiLi9SZWFjdG9yXCI7XG5pbXBvcnQgRXZlbnQgZnJvbSBcIi4vRXZlbnRcIjtcbmltcG9ydCBSZWFjdG9yQ2FudmFzIGZyb20gXCIuL1JlYWN0b3JDYW52YXNcIjtcbmltcG9ydCBFcnJvclNjcmVlbiBmcm9tIFwiLi9FcnJvclNjcmVlblwiO1xuXG5leHBvcnQgeyBDb25zdGFudHMsIEJ1dHRvbiwgQnV0dG9uSW1hZ2UsIEltYWdlTG9hZGVyLCBOb3RpZmljYXRpb25NZXNzYWdlLCBVdGlscywgTWVudSwgSW5wdXQsIExhYmVsLCBMaW5rLCBUb29sdGlwLCBTY2VuZSwgRlBTTWV0ZXIsIFByb2dyZXNzQmFyLCBDYW52YXMsIENvbXBvbmVudCwgRWFzaW5nRnVuY3Rpb25zLCBDb2wsIENvbnRhaW5lciwgUm93LCBJbWFnZUNvbnRhaW5lciwgQXJyb3csIENyb3NzLCBTY3JvbGxiYXIsIFNjcm9sbGJhclZlcnRpY2FsLCBTY3JvbGxiYXJIb3Jpem9udGFsLCBCb3gsIFN0eWxlLCBTZWxlY3QsIFNlbGVjdE9wdGlvbiwgU2VsZWN0T3B0aW9uc0NvbnRhaW5lciwgVHJpYW5nbGUsIENpcmNsZSwgUmVhY3RvciwgRXZlbnQsIFJlYWN0b3JDYW52YXMsIEVycm9yU2NyZWVuIH07Il0sInNvdXJjZVJvb3QiOiIifQ==