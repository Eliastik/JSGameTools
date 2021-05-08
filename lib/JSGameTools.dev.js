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
module.exports["default"] = module.exports, module.exports.__esModule = true;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/arrayWithoutHoles.js":
/*!******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/arrayWithoutHoles.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var arrayLikeToArray = __webpack_require__(/*! ./arrayLikeToArray.js */ "./node_modules/@babel/runtime/helpers/arrayLikeToArray.js");

function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr)) return arrayLikeToArray(arr);
}

module.exports = _arrayWithoutHoles;
module.exports["default"] = module.exports, module.exports.__esModule = true;

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
module.exports["default"] = module.exports, module.exports.__esModule = true;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/classApplyDescriptorGet.js":
/*!************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/classApplyDescriptorGet.js ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _classApplyDescriptorGet(receiver, descriptor) {
  if (descriptor.get) {
    return descriptor.get.call(receiver);
  }

  return descriptor.value;
}

module.exports = _classApplyDescriptorGet;
module.exports["default"] = module.exports, module.exports.__esModule = true;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/classApplyDescriptorSet.js":
/*!************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/classApplyDescriptorSet.js ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _classApplyDescriptorSet(receiver, descriptor, value) {
  if (descriptor.set) {
    descriptor.set.call(receiver, value);
  } else {
    if (!descriptor.writable) {
      throw new TypeError("attempted to set read only private field");
    }

    descriptor.value = value;
  }
}

module.exports = _classApplyDescriptorSet;
module.exports["default"] = module.exports, module.exports.__esModule = true;

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
module.exports["default"] = module.exports, module.exports.__esModule = true;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/classExtractFieldDescriptor.js":
/*!****************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/classExtractFieldDescriptor.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _classExtractFieldDescriptor(receiver, privateMap, action) {
  if (!privateMap.has(receiver)) {
    throw new TypeError("attempted to " + action + " private field on non-instance");
  }

  return privateMap.get(receiver);
}

module.exports = _classExtractFieldDescriptor;
module.exports["default"] = module.exports, module.exports.__esModule = true;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/classPrivateFieldGet.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/classPrivateFieldGet.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var classApplyDescriptorGet = __webpack_require__(/*! ./classApplyDescriptorGet.js */ "./node_modules/@babel/runtime/helpers/classApplyDescriptorGet.js");

var classExtractFieldDescriptor = __webpack_require__(/*! ./classExtractFieldDescriptor.js */ "./node_modules/@babel/runtime/helpers/classExtractFieldDescriptor.js");

function _classPrivateFieldGet(receiver, privateMap) {
  var descriptor = classExtractFieldDescriptor(receiver, privateMap, "get");
  return classApplyDescriptorGet(receiver, descriptor);
}

module.exports = _classPrivateFieldGet;
module.exports["default"] = module.exports, module.exports.__esModule = true;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/classPrivateFieldSet.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/classPrivateFieldSet.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var classApplyDescriptorSet = __webpack_require__(/*! ./classApplyDescriptorSet.js */ "./node_modules/@babel/runtime/helpers/classApplyDescriptorSet.js");

var classExtractFieldDescriptor = __webpack_require__(/*! ./classExtractFieldDescriptor.js */ "./node_modules/@babel/runtime/helpers/classExtractFieldDescriptor.js");

function _classPrivateFieldSet(receiver, privateMap, value) {
  var descriptor = classExtractFieldDescriptor(receiver, privateMap, "set");
  classApplyDescriptorSet(receiver, descriptor, value);
  return value;
}

module.exports = _classPrivateFieldSet;
module.exports["default"] = module.exports, module.exports.__esModule = true;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/construct.js":
/*!**********************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/construct.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var setPrototypeOf = __webpack_require__(/*! ./setPrototypeOf.js */ "./node_modules/@babel/runtime/helpers/setPrototypeOf.js");

var isNativeReflectConstruct = __webpack_require__(/*! ./isNativeReflectConstruct.js */ "./node_modules/@babel/runtime/helpers/isNativeReflectConstruct.js");

function _construct(Parent, args, Class) {
  if (isNativeReflectConstruct()) {
    module.exports = _construct = Reflect.construct;
    module.exports["default"] = module.exports, module.exports.__esModule = true;
  } else {
    module.exports = _construct = function _construct(Parent, args, Class) {
      var a = [null];
      a.push.apply(a, args);
      var Constructor = Function.bind.apply(Parent, a);
      var instance = new Constructor();
      if (Class) setPrototypeOf(instance, Class.prototype);
      return instance;
    };

    module.exports["default"] = module.exports, module.exports.__esModule = true;
  }

  return _construct.apply(null, arguments);
}

module.exports = _construct;
module.exports["default"] = module.exports, module.exports.__esModule = true;

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
module.exports["default"] = module.exports, module.exports.__esModule = true;

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
module.exports["default"] = module.exports, module.exports.__esModule = true;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/get.js":
/*!****************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/get.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var superPropBase = __webpack_require__(/*! ./superPropBase.js */ "./node_modules/@babel/runtime/helpers/superPropBase.js");

function _get(target, property, receiver) {
  if (typeof Reflect !== "undefined" && Reflect.get) {
    module.exports = _get = Reflect.get;
    module.exports["default"] = module.exports, module.exports.__esModule = true;
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

    module.exports["default"] = module.exports, module.exports.__esModule = true;
  }

  return _get(target, property, receiver || target);
}

module.exports = _get;
module.exports["default"] = module.exports, module.exports.__esModule = true;

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
  module.exports["default"] = module.exports, module.exports.__esModule = true;
  return _getPrototypeOf(o);
}

module.exports = _getPrototypeOf;
module.exports["default"] = module.exports, module.exports.__esModule = true;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/inherits.js":
/*!*********************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/inherits.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var setPrototypeOf = __webpack_require__(/*! ./setPrototypeOf.js */ "./node_modules/@babel/runtime/helpers/setPrototypeOf.js");

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
module.exports["default"] = module.exports, module.exports.__esModule = true;

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
    Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
    return true;
  } catch (e) {
    return false;
  }
}

module.exports = _isNativeReflectConstruct;
module.exports["default"] = module.exports, module.exports.__esModule = true;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/iterableToArray.js":
/*!****************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/iterableToArray.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _iterableToArray(iter) {
  if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter);
}

module.exports = _iterableToArray;
module.exports["default"] = module.exports, module.exports.__esModule = true;

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
module.exports["default"] = module.exports, module.exports.__esModule = true;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js":
/*!**************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _typeof = __webpack_require__(/*! @babel/runtime/helpers/typeof */ "./node_modules/@babel/runtime/helpers/typeof.js")["default"];

var assertThisInitialized = __webpack_require__(/*! ./assertThisInitialized.js */ "./node_modules/@babel/runtime/helpers/assertThisInitialized.js");

function _possibleConstructorReturn(self, call) {
  if (call && (_typeof(call) === "object" || typeof call === "function")) {
    return call;
  }

  return assertThisInitialized(self);
}

module.exports = _possibleConstructorReturn;
module.exports["default"] = module.exports, module.exports.__esModule = true;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/set.js":
/*!****************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/set.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var superPropBase = __webpack_require__(/*! ./superPropBase.js */ "./node_modules/@babel/runtime/helpers/superPropBase.js");

var defineProperty = __webpack_require__(/*! ./defineProperty.js */ "./node_modules/@babel/runtime/helpers/defineProperty.js");

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
module.exports["default"] = module.exports, module.exports.__esModule = true;

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

  module.exports["default"] = module.exports, module.exports.__esModule = true;
  return _setPrototypeOf(o, p);
}

module.exports = _setPrototypeOf;
module.exports["default"] = module.exports, module.exports.__esModule = true;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/superPropBase.js":
/*!**************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/superPropBase.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var getPrototypeOf = __webpack_require__(/*! ./getPrototypeOf.js */ "./node_modules/@babel/runtime/helpers/getPrototypeOf.js");

function _superPropBase(object, property) {
  while (!Object.prototype.hasOwnProperty.call(object, property)) {
    object = getPrototypeOf(object);
    if (object === null) break;
  }

  return object;
}

module.exports = _superPropBase;
module.exports["default"] = module.exports, module.exports.__esModule = true;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/toConsumableArray.js":
/*!******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/toConsumableArray.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var arrayWithoutHoles = __webpack_require__(/*! ./arrayWithoutHoles.js */ "./node_modules/@babel/runtime/helpers/arrayWithoutHoles.js");

var iterableToArray = __webpack_require__(/*! ./iterableToArray.js */ "./node_modules/@babel/runtime/helpers/iterableToArray.js");

var unsupportedIterableToArray = __webpack_require__(/*! ./unsupportedIterableToArray.js */ "./node_modules/@babel/runtime/helpers/unsupportedIterableToArray.js");

var nonIterableSpread = __webpack_require__(/*! ./nonIterableSpread.js */ "./node_modules/@babel/runtime/helpers/nonIterableSpread.js");

function _toConsumableArray(arr) {
  return arrayWithoutHoles(arr) || iterableToArray(arr) || unsupportedIterableToArray(arr) || nonIterableSpread();
}

module.exports = _toConsumableArray;
module.exports["default"] = module.exports, module.exports.__esModule = true;

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

    module.exports["default"] = module.exports, module.exports.__esModule = true;
  } else {
    module.exports = _typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };

    module.exports["default"] = module.exports, module.exports.__esModule = true;
  }

  return _typeof(obj);
}

module.exports = _typeof;
module.exports["default"] = module.exports, module.exports.__esModule = true;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/unsupportedIterableToArray.js":
/*!***************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/unsupportedIterableToArray.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var arrayLikeToArray = __webpack_require__(/*! ./arrayLikeToArray.js */ "./node_modules/@babel/runtime/helpers/arrayLikeToArray.js");

function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return arrayLikeToArray(o, minLen);
}

module.exports = _unsupportedIterableToArray;
module.exports["default"] = module.exports, module.exports.__esModule = true;

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

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

/*
 * Copyright (C) 2020 Eliastik (eliastiksofts.com)
 *
 * This file is part of "JSGameTools".
 *
 * "JSGameTools" is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
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

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

/*
 * Copyright (C) 2020 Eliastik (eliastiksofts.com)
 *
 * This file is part of "JSGameTools".
 *
 * "JSGameTools" is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
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

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

/*
 * Copyright (C) 2020 Eliastik (eliastiksofts.com)
 *
 * This file is part of "JSGameTools".
 *
 * "JSGameTools" is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
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

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

/*
 * Copyright (C) 2020 Eliastik (eliastiksofts.com)
 *
 * This file is part of "JSGameTools".
 *
 * "JSGameTools" is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
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






var _lastFrameTime = /*#__PURE__*/new WeakMap();

var _width = /*#__PURE__*/new WeakMap();

var _height = /*#__PURE__*/new WeakMap();

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

          if (_this.maxFPS < 1 || offsetFrame > 1000 / _this.maxFPS) {
            _Utils__WEBPACK_IMPORTED_MODULE_6__["default"].autoDPI(_this.canvas);

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

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

/*
 * Copyright (C) 2020 Eliastik (eliastiksofts.com)
 *
 * This file is part of "JSGameTools".
 *
 * "JSGameTools" is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
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

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

/*
 * Copyright (C) 2020 Eliastik (eliastiksofts.com)
 *
 * This file is part of "JSGameTools".
 *
 * "JSGameTools" is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * "JSGameTools" is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with "JSGameTools".  If not, see <http://www.gnu.org/licenses/>.
 */





var _innerHeight = /*#__PURE__*/new WeakMap();

var _innerWidth = /*#__PURE__*/new WeakMap();

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




var _width = /*#__PURE__*/new WeakMap();

var _height = /*#__PURE__*/new WeakMap();

var _x = /*#__PURE__*/new WeakMap();

var _y = /*#__PURE__*/new WeakMap();

var _disabled = /*#__PURE__*/new WeakMap();

var _selected = /*#__PURE__*/new WeakMap();

var _style = /*#__PURE__*/new WeakMap();

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
              if (_this2.movable) _this2.moving = true;
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

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

/*
 * Copyright (C) 2020 Eliastik (eliastiksofts.com)
 *
 * This file is part of "JSGameTools".
 *
 * "JSGameTools" is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * "JSGameTools" is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with "JSGameTools".  If not, see <http://www.gnu.org/licenses/>.
 */








var _components = /*#__PURE__*/new WeakMap();

var _maxWidth = /*#__PURE__*/new WeakMap();

var _maxHeight = /*#__PURE__*/new WeakMap();

var _minWidth = /*#__PURE__*/new WeakMap();

var _minHeight = /*#__PURE__*/new WeakMap();

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

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

/*
 * Copyright (C) 2020 Eliastik (eliastiksofts.com)
 *
 * This file is part of "JSGameTools".
 *
 * "JSGameTools" is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
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

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

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

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

/*
 * Copyright (C) 2020 Eliastik (eliastiksofts.com)
 *
 * This file is part of "JSGameTools".
 *
 * "JSGameTools" is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
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

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

/*
 * Copyright (C) 2020 Eliastik (eliastiksofts.com)
 *
 * This file is part of "JSGameTools".
 *
 * "JSGameTools" is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
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

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

/*
 * Copyright (C) 2020 Eliastik (eliastiksofts.com)
 *
 * This file is part of "JSGameTools".
 *
 * "JSGameTools" is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * "JSGameTools" is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with "JSGameTools".  If not, see <http://www.gnu.org/licenses/>.
 */





var _positionStart = /*#__PURE__*/new WeakMap();

var _positionStartClick = /*#__PURE__*/new WeakMap();

var _positionEnd = /*#__PURE__*/new WeakMap();

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

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

/*
 * Copyright (C) 2020 Eliastik (eliastiksofts.com)
 *
 * This file is part of "JSGameTools".
 *
 * "JSGameTools" is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * "JSGameTools" is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with "JSGameTools".  If not, see <http://www.gnu.org/licenses/>.
 */





var _text = /*#__PURE__*/new WeakMap();

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

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

/*
 * Copyright (C) 2020 Eliastik (eliastiksofts.com)
 *
 * This file is part of "JSGameTools".
 *
 * "JSGameTools" is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
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

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

/*
 * Copyright (C) 2020 Eliastik (eliastiksofts.com)
 *
 * This file is part of "JSGameTools".
 *
 * "JSGameTools" is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
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

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

/*
 * Copyright (C) 2020 Eliastik (eliastiksofts.com)
 *
 * This file is part of "JSGameTools".
 *
 * "JSGameTools" is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
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

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

/*
 * Copyright (C) 2020 Eliastik (eliastiksofts.com)
 *
 * This file is part of "JSGameTools".
 *
 * "JSGameTools" is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * "JSGameTools" is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with "JSGameTools".  If not, see <http://www.gnu.org/licenses/>.
 */




var _precPercent = /*#__PURE__*/new WeakMap();

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

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

/*
 * Copyright (C) 2020 Eliastik (eliastiksofts.com)
 *
 * This file is part of "JSGameTools".
 *
 * "JSGameTools" is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
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

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

/*
 * Copyright (C) 2020 Eliastik (eliastiksofts.com)
 *
 * This file is part of "JSGameTools".
 *
 * "JSGameTools" is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * "JSGameTools" is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with "JSGameTools".  If not, see <http://www.gnu.org/licenses/>.
 */





var _innerHeight = /*#__PURE__*/new WeakMap();

var _innerWidth = /*#__PURE__*/new WeakMap();

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

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

/*
 * Copyright (C) 2020 Eliastik (eliastiksofts.com)
 *
 * This file is part of "JSGameTools".
 *
 * "JSGameTools" is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
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

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

/*
 * Copyright (C) 2020 Eliastik (eliastiksofts.com)
 *
 * This file is part of "JSGameTools".
 *
 * "JSGameTools" is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
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

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

/*
 * Copyright (C) 2020 Eliastik (eliastiksofts.com)
 *
 * This file is part of "JSGameTools".
 *
 * "JSGameTools" is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
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

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

/*
 * Copyright (C) 2020 Eliastik (eliastiksofts.com)
 *
 * This file is part of "JSGameTools".
 *
 * "JSGameTools" is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
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

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

/*
 * Copyright (C) 2020 Eliastik (eliastiksofts.com)
 *
 * This file is part of "JSGameTools".
 *
 * "JSGameTools" is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * "JSGameTools" is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with "JSGameTools".  If not, see <http://www.gnu.org/licenses/>.
 */






var _width = /*#__PURE__*/new WeakMap();

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

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

/*
 * Copyright (C) 2020 Eliastik (eliastiksofts.com)
 *
 * This file is part of "JSGameTools".
 *
 * "JSGameTools" is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
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

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

/*
 * Copyright (C) 2020 Eliastik (eliastiksofts.com)
 *
 * This file is part of "JSGameTools".
 *
 * "JSGameTools" is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * "JSGameTools" is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with "JSGameTools".  If not, see <http://www.gnu.org/licenses/>.
 */




var _selectedOption = /*#__PURE__*/new WeakMap();

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


var _styles = /*#__PURE__*/new WeakMap();

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

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

/*
 * Copyright (C) 2020 Eliastik (eliastiksofts.com)
 *
 * This file is part of "JSGameTools".
 *
 * "JSGameTools" is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
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

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

/*
 * Copyright (C) 2020 Eliastik (eliastiksofts.com)
 *
 * This file is part of "JSGameTools".
 *
 * "JSGameTools" is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9KU0dhbWVUb29scy93ZWJwYWNrL3VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24iLCJ3ZWJwYWNrOi8vSlNHYW1lVG9vbHMvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vSlNHYW1lVG9vbHMvLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9hcnJheUxpa2VUb0FycmF5LmpzIiwid2VicGFjazovL0pTR2FtZVRvb2xzLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvYXJyYXlXaXRob3V0SG9sZXMuanMiLCJ3ZWJwYWNrOi8vSlNHYW1lVG9vbHMvLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQuanMiLCJ3ZWJwYWNrOi8vSlNHYW1lVG9vbHMvLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9jbGFzc0FwcGx5RGVzY3JpcHRvckdldC5qcyIsIndlYnBhY2s6Ly9KU0dhbWVUb29scy8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2NsYXNzQXBwbHlEZXNjcmlwdG9yU2V0LmpzIiwid2VicGFjazovL0pTR2FtZVRvb2xzLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvY2xhc3NDYWxsQ2hlY2suanMiLCJ3ZWJwYWNrOi8vSlNHYW1lVG9vbHMvLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9jbGFzc0V4dHJhY3RGaWVsZERlc2NyaXB0b3IuanMiLCJ3ZWJwYWNrOi8vSlNHYW1lVG9vbHMvLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9jbGFzc1ByaXZhdGVGaWVsZEdldC5qcyIsIndlYnBhY2s6Ly9KU0dhbWVUb29scy8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2NsYXNzUHJpdmF0ZUZpZWxkU2V0LmpzIiwid2VicGFjazovL0pTR2FtZVRvb2xzLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvY29uc3RydWN0LmpzIiwid2VicGFjazovL0pTR2FtZVRvb2xzLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvY3JlYXRlQ2xhc3MuanMiLCJ3ZWJwYWNrOi8vSlNHYW1lVG9vbHMvLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9kZWZpbmVQcm9wZXJ0eS5qcyIsIndlYnBhY2s6Ly9KU0dhbWVUb29scy8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2dldC5qcyIsIndlYnBhY2s6Ly9KU0dhbWVUb29scy8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2dldFByb3RvdHlwZU9mLmpzIiwid2VicGFjazovL0pTR2FtZVRvb2xzLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvaW5oZXJpdHMuanMiLCJ3ZWJwYWNrOi8vSlNHYW1lVG9vbHMvLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9pc05hdGl2ZVJlZmxlY3RDb25zdHJ1Y3QuanMiLCJ3ZWJwYWNrOi8vSlNHYW1lVG9vbHMvLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9pdGVyYWJsZVRvQXJyYXkuanMiLCJ3ZWJwYWNrOi8vSlNHYW1lVG9vbHMvLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9ub25JdGVyYWJsZVNwcmVhZC5qcyIsIndlYnBhY2s6Ly9KU0dhbWVUb29scy8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4uanMiLCJ3ZWJwYWNrOi8vSlNHYW1lVG9vbHMvLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9zZXQuanMiLCJ3ZWJwYWNrOi8vSlNHYW1lVG9vbHMvLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9zZXRQcm90b3R5cGVPZi5qcyIsIndlYnBhY2s6Ly9KU0dhbWVUb29scy8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL3N1cGVyUHJvcEJhc2UuanMiLCJ3ZWJwYWNrOi8vSlNHYW1lVG9vbHMvLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy90b0NvbnN1bWFibGVBcnJheS5qcyIsIndlYnBhY2s6Ly9KU0dhbWVUb29scy8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL3R5cGVvZi5qcyIsIndlYnBhY2s6Ly9KU0dhbWVUb29scy8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL3Vuc3VwcG9ydGVkSXRlcmFibGVUb0FycmF5LmpzIiwid2VicGFjazovL0pTR2FtZVRvb2xzLy4vc3JjL0Fycm93LmpzIiwid2VicGFjazovL0pTR2FtZVRvb2xzLy4vc3JjL0JveC5qcyIsIndlYnBhY2s6Ly9KU0dhbWVUb29scy8uL3NyYy9CdXR0b24uanMiLCJ3ZWJwYWNrOi8vSlNHYW1lVG9vbHMvLi9zcmMvQnV0dG9uSW1hZ2UuanMiLCJ3ZWJwYWNrOi8vSlNHYW1lVG9vbHMvLi9zcmMvQ2FudmFzLmpzIiwid2VicGFjazovL0pTR2FtZVRvb2xzLy4vc3JjL0NpcmNsZS5qcyIsIndlYnBhY2s6Ly9KU0dhbWVUb29scy8uL3NyYy9Db2wuanMiLCJ3ZWJwYWNrOi8vSlNHYW1lVG9vbHMvLi9zcmMvQ29tcG9uZW50LmpzIiwid2VicGFjazovL0pTR2FtZVRvb2xzLy4vc3JjL0NvbnN0YW50cy5qcyIsIndlYnBhY2s6Ly9KU0dhbWVUb29scy8uL3NyYy9Db250YWluZXIuanMiLCJ3ZWJwYWNrOi8vSlNHYW1lVG9vbHMvLi9zcmMvQ3Jvc3MuanMiLCJ3ZWJwYWNrOi8vSlNHYW1lVG9vbHMvLi9zcmMvRWFzaW5nRnVuY3Rpb25zLmpzIiwid2VicGFjazovL0pTR2FtZVRvb2xzLy4vc3JjL0Vycm9yU2NyZWVuLmpzIiwid2VicGFjazovL0pTR2FtZVRvb2xzLy4vc3JjL0V2ZW50LmpzIiwid2VicGFjazovL0pTR2FtZVRvb2xzLy4vc3JjL0ZQU01ldGVyLmpzIiwid2VicGFjazovL0pTR2FtZVRvb2xzLy4vc3JjL0ltYWdlQ29udGFpbmVyLmpzIiwid2VicGFjazovL0pTR2FtZVRvb2xzLy4vc3JjL0ltYWdlTG9hZGVyLmpzIiwid2VicGFjazovL0pTR2FtZVRvb2xzLy4vc3JjL0lucHV0LmpzIiwid2VicGFjazovL0pTR2FtZVRvb2xzLy4vc3JjL0xhYmVsLmpzIiwid2VicGFjazovL0pTR2FtZVRvb2xzLy4vc3JjL0xpbmsuanMiLCJ3ZWJwYWNrOi8vSlNHYW1lVG9vbHMvLi9zcmMvTWVudS5qcyIsIndlYnBhY2s6Ly9KU0dhbWVUb29scy8uL3NyYy9Ob3RpZmljYXRpb25NZXNzYWdlLmpzIiwid2VicGFjazovL0pTR2FtZVRvb2xzLy4vc3JjL1Byb2dyZXNzQmFyLmpzIiwid2VicGFjazovL0pTR2FtZVRvb2xzLy4vc3JjL1JlYWN0b3IuanMiLCJ3ZWJwYWNrOi8vSlNHYW1lVG9vbHMvLi9zcmMvUmVhY3RvckNhbnZhcy5qcyIsIndlYnBhY2s6Ly9KU0dhbWVUb29scy8uL3NyYy9Sb3cuanMiLCJ3ZWJwYWNrOi8vSlNHYW1lVG9vbHMvLi9zcmMvU2NlbmUuanMiLCJ3ZWJwYWNrOi8vSlNHYW1lVG9vbHMvLi9zcmMvU2Nyb2xsYmFyLmpzIiwid2VicGFjazovL0pTR2FtZVRvb2xzLy4vc3JjL1Njcm9sbGJhckhvcml6b250YWwuanMiLCJ3ZWJwYWNrOi8vSlNHYW1lVG9vbHMvLi9zcmMvU2Nyb2xsYmFyVmVydGljYWwuanMiLCJ3ZWJwYWNrOi8vSlNHYW1lVG9vbHMvLi9zcmMvU2VsZWN0LmpzIiwid2VicGFjazovL0pTR2FtZVRvb2xzLy4vc3JjL1NlbGVjdE9wdGlvbi5qcyIsIndlYnBhY2s6Ly9KU0dhbWVUb29scy8uL3NyYy9TZWxlY3RPcHRpb25zQ29udGFpbmVyLmpzIiwid2VicGFjazovL0pTR2FtZVRvb2xzLy4vc3JjL1N0eWxlLmpzIiwid2VicGFjazovL0pTR2FtZVRvb2xzLy4vc3JjL1Rvb2x0aXAuanMiLCJ3ZWJwYWNrOi8vSlNHYW1lVG9vbHMvLi9zcmMvVHJpYW5nbGUuanMiLCJ3ZWJwYWNrOi8vSlNHYW1lVG9vbHMvLi9zcmMvVXRpbHMuanMiLCJ3ZWJwYWNrOi8vSlNHYW1lVG9vbHMvLi9zcmMvaW5kZXguanMiXSwibmFtZXMiOlsiQXJyb3ciLCJ4IiwieSIsInRvWCIsInRvWSIsInN0eWxlIiwiY29udGV4dCIsImhpZGRlbiIsImNhbnZhcyIsImN0eCIsImdldENvbnRleHQiLCJVdGlscyIsImRyYXdBcnJvdyIsImxpbmVXaWR0aCIsImhlYWRTaXplIiwiY29sb3IiLCJsaW5lQ2FwIiwiaW5pdCIsIk1hdGgiLCJhYnMiLCJTdHlsZSIsIkNvbnN0YW50cyIsIlNldHRpbmciLCJBUlJPV19ERUZBVUxUX0xJTkVfU0laRSIsIkFSUk9XX0RFRkFVTFRfSEVBRF9TSVpFIiwiQVJST1dfREVGQVVMVF9DT0xPUiIsIkFSUk9XX0RFRkFVTFRfTElORV9DQVAiLCJDb21wb25lbnQiLCJCb3giLCJ3aWR0aCIsImhlaWdodCIsInNhdmUiLCJkcmF3QmFja2dyb3VuZCIsImRyYXdCb3JkZXIiLCJyZXN0b3JlIiwiYmFja2dyb3VuZENvbG9yIiwiZmlsbFN0eWxlIiwiZmlsbFJlY3QiLCJyb3VuZCIsImhvdmVyZWQiLCJjbGlja2VkIiwiYmFja2dyb3VuZENvbG9yRG93biIsImJhY2tncm91bmRDb2xvckhvdmVyIiwiYm9yZGVyQ29sb3IiLCJib3JkZXJTaXplIiwic3Ryb2tlU3R5bGUiLCJzdHJva2VSZWN0IiwiYm9yZGVyQ29sb3JEb3duIiwiYm9yZGVyQ29sb3JIb3ZlciIsInNlbGVjdGFibGUiLCJzZWxlY3RlZCIsImJvcmRlckNvbG9yU2VsZWN0ZWQiLCJCdXR0b24iLCJtYXhXaWR0aCIsIm1heEhlaWdodCIsImNvbXBvbmVudHMiLCJkcmF3Q29tcG9uZW50cyIsInBhZGRpbmciLCJCVVRUT05fREVGQVVMVF9CQUNLR1JPVU5EIiwiQlVUVE9OX0RFRkFVTFRfSE9WRVJfQkFDS0dST1VORCIsIkJVVFRPTl9ERUZBVUxUX0NMSUNLX0JBQ0tHUk9VTkQiLCJSb3ciLCJCdXR0b25JbWFnZSIsImltZ1NyYyIsImFsaWduZW1lbnQiLCJ2ZXJ0aWNhbEFsaWduZW1lbnQiLCJpbWFnZUxvYWRlciIsImltYWdlIiwiSW1hZ2VDb250YWluZXIiLCJhZGQiLCJjb25zb2xlIiwid2FybiIsIlN0cmluZyIsIk5PVElDRV9NRVNTQUdFIiwiQlVUVE9OX0lNQUdFX0RFUFJFQ0FURUQiLCJsb2FkSW1hZ2UiLCJtaW5XaWR0aCIsIm1pbkhlaWdodCIsIkNhbnZhcyIsInNjZW5lIiwiYXV0b1Jlc2l6ZSIsIm1heEZQUyIsImRvY3VtZW50IiwiY3JlYXRlRWxlbWVudCIsImNvbnRhaW5lciIsIkNBTlZBU19XSURUSCIsIkNBTlZBU19IRUlHSFQiLCJhcHBlbmRDaGlsZCIsInN0YXJ0ZWQiLCJoYXNFcnJvciIsImZ1bGxzY3JlZW4iLCJmdWxscGFnZSIsInNjZW5lRXJyb3IiLCJFcnJvclNjcmVlbiIsInNjZW5lUHJldmlvdXMiLCJyZWFjdG9yIiwiUmVhY3RvckNhbnZhcyIsInJlZ2lzdGVyRXZlbnQiLCJjcmVhdGVFdmVudHMiLCJESVNBQkxFX09QVElNSVpBVElPTlMiLCJpbmZvIiwiT1BUSU1JWkFUSU9OX0RJU0FCTEVEIiwiRElTQUJMRV9DT05UQUlORVJTX0NVVFRJTkciLCJDT05UQUlORVJfQ1VUVElOR19ESVNBQkxFRCIsImRyYXdDbGVhciIsImRyYXdTY2VuZSIsInBhcmVudCIsInNjYWxlIiwiUElYRUxfUkFUSU8iLCJkcmF3IiwiZSIsImVycm9yVGV4dCIsInN0YWNrIiwiZXJyb3IiLCJFUlJPUl9NRVNTQUdFIiwiRVJST1JfTUVTU0FHRV9DQU5WQVMiLCJjbGVhciIsImZ1bmMiLCJyZXF1ZXN0QW5pbWF0aW9uRnJhbWUiLCJ0aW1lIiwib2Zmc2V0RnJhbWUiLCJmdWxsc2NyZWVuRWxlbWVudCIsIkVOQUJMRV9QSVhFTF9SQVRJT19SRVNJWklORyIsIndpbmRvdyIsImRldmljZVBpeGVsUmF0aW8iLCJSRVNPTFVUSU9OX1NDQUxFIiwiYXV0b0RQSSIsInN0YXJ0RHJhdyIsImVsZW1lbnQiLCJyZW1vdmVDaGlsZCIsInRvZ2dsZUZ1bGxzY3JlZW4iLCJ0b2dnbGVGdWxscGFnZSIsImVuYWJsZUF1dG9SZXNpemVDYW52YXMiLCJnZXRDYW52YXNXaWR0aCIsImRpc3BhdGNoRXZlbnQiLCJnZXRDYW52YXNIZWlnaHQiLCJjdXJzb3IiLCJmb3JFYWNoIiwiZXZlbnROYW1lIiwiYWRkRXZlbnRMaXN0ZW5lciIsImV2ZW50IiwibW91c2VQb3NpdGlvbiIsImdldE1vdXNlUG9zIiwiZG9FdmVudHMiLCJwcmV2ZW50RGVmYXVsdCIsImNoYW5nZWRUb3VjaGVzIiwicG9zaXRpb24iLCJnZXRDb21wb25lbnRzQXRQb3NpdGlvbiIsInJldmVyc2UiLCJjb21wb25lbnQiLCJkaXNwYXRjaEV2ZW50Q29tcG9uZW50IiwiY2FsbGJhY2siLCJzdGFydCIsImdldEFsbENvbXBvbmVudHMiLCJhbGxDb21wb25lbnRzIiwiZ2V0Q29tcG9uZW50c1RyZWUiLCJyZXN1bHQiLCJjaGlsZHMiLCJzb3J0IiwiU2NlbmUiLCJzb3J0Q29tcG9uZW50c1RyZWUiLCJzb21lIiwiY2hpbGQiLCJpc0luc2lkZSIsImRpc2FibGVkIiwicHVzaCIsIkNpcmNsZSIsImRyYXdDaXJjbGUiLCJmaWxsIiwiZmlsbENvbG9yIiwiQ0lSQ0xFX0RFRkFVTFRfTElORV9TSVpFIiwiQ0lSQ0xFX0RFRkFVTFRfQ09MT1IiLCJDSVJDTEVfREVGQVVMVF9GSUxMIiwiQ0lSQ0xFX0RFRkFVTFRfTElORV9DQVAiLCJDSVJDTEVfREVGQVVMVF9GSUxMX0NPTE9SIiwiQ29sIiwiRElTQUJMRV9FWFBFUklNRU5UQUxfT1BUSU1JWkFUSU9OUyIsInVwZGF0ZUlubmVyV2lkdGgiLCJ1cGRhdGVJbm5lckhlaWdodCIsImFkZENoYW5nZUFjdGlvbiIsImN0eFRlbXAiLCJpc0N1dHRpbmciLCJjYW52YXNUbXAiLCJjdXJyZW50WSIsImRyYXdDb21wb25lbnQiLCJkcmF3SW1hZ2VEYXRhIiwib2Zmc2V0U2Nyb2xsWCIsIm9mZnNldFNjcm9sbFkiLCJpc0NvbXBvbmVudFZpc2libGUiLCJzcGFjZUJldHdlZW5Db21wb25lbnRzIiwidG90YWxIZWlnaHQiLCJsZW5ndGgiLCJpbm5lcldpZHRoIiwibWluIiwibWF4IiwiaW5uZXJIZWlnaHQiLCJDb250YWluZXIiLCJkZWx0YVgiLCJkZWx0YVkiLCJSZWFjdG9yIiwiaGFzSW5pdEV2ZW50cyIsIm1vdmFibGUiLCJtb3ZpbmciLCJvZmZzZXRNb3ZlWCIsIm9mZnNldE1vdmVZIiwibW92ZUV2ZW50U3RhcnRYIiwibW92ZUV2ZW50U3RhcnRZIiwidG91Y2hFdmVudFN0YXJ0WCIsInRvdWNoRXZlbnRTdGFydFkiLCJ0b3VjaEV2ZW50U3RhcnRUaW1lc3RhbXAiLCJ0b29sdGlwIiwiaW5pdEV2ZW50cyIsImFkZE1vdmVBY3Rpb24iLCJlbmFibGUiLCJkaXNhYmxlIiwic2Nyb2xsRGlzYWJsZWQiLCJ0b3VjaFNjcm9sbEV2ZW50IiwidG91Y2hTdGFydEVuZEV2ZW50IiwidGltZXN0YW1wIiwicG9zIiwidHJpZ2dlciIsInJlbW92ZUFsbENsaWNrQWN0aW9ucyIsImFkZENsaWNrQWN0aW9uIiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsInJlbW92ZUFsbEV2ZW50TGlzdGVuZXIiLCJyZW1vdmVBbGxIb3ZlckFjdGlvbnMiLCJhZGRIb3ZlckFjdGlvbiIsInJlbW92ZUFsbERvd25BY3Rpb25zIiwiYWRkRG93bkFjdGlvbiIsInJlbW92ZUFsbFNjcm9sbEFjdGlvbnMiLCJhZGRTY3JvbGxBY3Rpb24iLCJyZW1vdmVBbGxNb3ZlQWN0aW9ucyIsInJlbW92ZUFsbENoYW5nZUFjdGlvbnMiLCJyZW1vdmVBbGxVcEFjdGlvbnMiLCJhZGRVcEFjdGlvbiIsInBhcmVudFdpZHRoIiwicGFyZW50UGFkZGluZyIsIkFsaWduZW1lbnQiLCJDRU5URVIiLCJSSUdIVCIsIkxFRlQiLCJwYXJlbnRIZWlnaHQiLCJWZXJ0aWNhbEFsaWduZW1lbnQiLCJCT1RUT00iLCJUT1AiLCJERUZBVUxUX1BBRERJTkciLCJERUZBVUxUX1NQQUNJTkciLCJkZWZhdWx0U3R5bGUiLCJzZXRBbGwiLCJnZXRTdHlsZXMiLCJzZXQiLCJyZXMiLCJvdGhlckNvbXBvbmVudCIsImlzRm9yZWdyb3VuZCIsImZvcmVncm91bmQiLCJvdGhlcklzRm9yZWdyb3VuZCIsInpJbmRleCIsIm90aGVyekluZGV4IiwiY29tcGFyZVRvQ29tcG9uZW50Iiwib3RoZXIiLCJjb21wYXJlVG8iLCJESVNBQkxFX0lTX0NPTVBPTkVOVF9WSVNJQkxFX09QVElNSVpBVElPTlMiLCJGT05UX0ZBTUlMWSIsIkZPTlRfU0laRSIsIkJVVFRPTl9ERUZBVUxUX0FMVEVSTkFUSVZFX0JBQ0tHUk9VTkQiLCJJTlBVVF9ERUZBVUxUX0ZPTlRfQ09MT1IiLCJJTlBVVF9ERUZBVUxUX0JBQ0tHUk9VTkRfQ09MT1IiLCJJTlBVVF9ERUZBVUxUX0JPUkRFUl9DT0xPUiIsIklOUFVUX0RFRkFVTFRfQk9SREVSX0NPTE9SX1NFTEVDVEVEIiwiSU5QVVRfREVGQVVMVF9TRUxFQ1RfQ09MT1IiLCJMQUJFTF9ERUZBVUxUX0ZPTlRfQ09MT1IiLCJMSU5LX0RFRkFVTFRfQ09MT1IiLCJMSU5LX0RFRkFVTFRfSE9WRVJfQ09MT1IiLCJMSU5LX0RFRkFVTFRfQ0xJQ0tfQ09MT1IiLCJNRU5VX0RFRkFVTFRfQkFDS0dST1VORCIsIk1FTlVfREVGQVVMVF9CTFVSX0JBQ0tHUk9VTkQiLCJOT1RJRklDQVRJT05fREVGQVVMVF9CQUNLR1JPVU5EIiwiTk9USUZJQ0FUSU9OX0RFRkFVTFRfQU5JTUFUSU9OX0RVUkFUSU9OIiwiUFJPR1JFU1NfREVGQVVMVF9CQUNLR1JPVU5EIiwiUFJPR1JFU1NfREVGQVVMVF9GT1JFR1JPVU5EIiwiUFJPR1JFU1NfREVGQVVMVF9BTklNQVRJT05fRFVSQVRJT04iLCJUT09MVElQX0RFRkFVTFRfQkFDS0dST1VORCIsIkNST1NTX0RFRkFVTFRfTElORV9DQVAiLCJDUk9TU19ERUZBVUxUX0NPTE9SIiwiQ1JPU1NfREVGQVVMVF9MSU5FX1NJWkUiLCJTQ1JPTExCQVJfREVGQVVMVF9CQUNLR1JPVU5EIiwiU0NST0xMQkFSX0RFRkFVTFRfSE9WRVJfQkFDS0dST1VORCIsIlNDUk9MTEJBUl9ERUZBVUxUX0NMSUNLX0JBQ0tHUk9VTkQiLCJTQ1JPTExCQVJfREVGQVVMVF9TSVpFIiwiREVGQVVMVF9CT1JERVJfU0laRSIsIkRFRkFVTFRfQk9SREVSX0NPTE9SX1NFTEVDVEVEIiwiREVGQVVMVF9BTklNQVRJT05fRFVSQVRJT04iLCJUUklBTkdMRV9ERUZBVUxUX0xJTkVfQ0FQIiwiVFJJQU5HTEVfREVGQVVMVF9DT0xPUiIsIlRSSUFOR0xFX0RFRkFVTFRfRklMTF9DT0xPUiIsIlRSSUFOR0xFX0RFRkFVTFRfTElORV9TSVpFIiwiVFJJQU5HTEVfREVGQVVMVF9GSUxMIiwiU0VMRUNUX0RFRkFVTFRfQkFDS0dST1VORCIsIlNFTEVDVF9ERUZBVUxUX0hPVkVSX0JBQ0tHUk9VTkQiLCJTRUxFQ1RfREVGQVVMVF9DTElDS19CQUNLR1JPVU5EIiwiRVJST1JfTUVOVV9CQUNLR1JPVU5EX0NPTE9SIiwiS2V5IiwiVVAiLCJFTlRFUiIsIkVDSEFQIiwiVEFCIiwiREVGQVVMVCIsIkVSUk9SX01FU1NBR0VfQ0FOVkFTX0xBQkVMIiwiUkVUUlkiLCJXQVJOSU5HX01FU1NBR0UiLCJJTlBVVF9GVUxMU0NSRUVOIiwiREVUQUlMUyIsImFkZEFsbCIsInNjcm9sbGJhckhvcml6b250YWwiLCJTY3JvbGxiYXJIb3Jpem9udGFsIiwic2Nyb2xsYmFyVmVydGljYWwiLCJTY3JvbGxiYXJWZXJ0aWNhbCIsImNvbnRyb2xTY3JvbGxpbmciLCJjb21wb25lbnRDaGFuZ2VkIiwic2Nyb2xsWERpc2FibGVkIiwiZHJhd0hvcml6b250YWxTY3JvbGxCYXIiLCJzY3JvbGxZRGlzYWJsZWQiLCJkcmF3VmVydGljYWxTY3JvbGxCYXIiLCJoYXNDaGFuZ2VkIiwiaSIsImV2ZW50Q2hhbmdlQ2FsbGJhY2siLCJpbmRleE9mIiwicmVtb3ZlQ2hhbmdlQWN0aW9uIiwiZmlsdGVyIiwiY3VycmVudCIsInJlbW92ZSIsImNoYW5nZWQiLCJjIiwic2Nyb2xsQXJlYVNpemVZIiwicGVyY2VudFNjcm9sbGJhclkiLCJzY3JvbGxBcmVhU2l6ZVgiLCJwZXJjZW50U2Nyb2xsYmFyWCIsImNvbXBvbmVudFdpZHRoIiwiY29tcG9uZW50SGVpZ2h0IiwiY2FudmFzV2lkdGgiLCJjYW52YXNIZWlnaHQiLCJDcm9zcyIsImRyYXdDcm9zcyIsImVhc2VJbkN1YmljIiwiZWFzZU91dEJvdW5jZSIsIm4xIiwiZDEiLCJlYXNlSW5PdXRDdWJpYyIsInBvdyIsImVhc2VJbk91dFNpbmUiLCJjb3MiLCJQSSIsImVhc2VJbk91dFF1aW50IiwiZWFzZUluT3V0Q2lyYyIsInNxcnQiLCJlYXNlSW5PdXRRdWFkIiwiZWFzZUluT3V0UXVhcnQiLCJlYXNlSW5PdXRFeHBvIiwiZWFzZUluT3V0QmFjayIsImMxIiwiYzIiLCJsYWJlbERldGFpbHNTY2VuZUVycm9yIiwiTGFiZWwiLCJidXR0b25TY2VuZUVycm9yIiwiYnV0dG9uRGV0YWlsc1NjZW5lRXJyb3IiLCJjb2xEZXRhaWxzU2NlbmVFcnJvciIsIm1lbnVTY2VuZUVycm9yIiwiTWVudSIsInRleHQiLCJFdmVudCIsIm5hbWUiLCJjYWxsYmFja3MiLCJGUFNNZXRlciIsImRpc3BsYXlGcmFtZXMiLCJmcmFtZXMiLCJsYXN0RnJhbWUiLCJjdXJyZW50RlBTIiwiaW50ZXJ2YWxDb3VudEZQUyIsInNldEludGVydmFsIiwiY291bnRGUFMiLCJJbWFnZSIsInNyYyIsImRyYXdJbWFnZSIsImltZ1dpZHRoIiwiaW1nSGVpZ2h0IiwiYXNwZWN0UmF0aW8iLCJmbG9vciIsInNpemVzIiwiZ2V0IiwiSW1hZ2VMb2FkZXIiLCJpbWFnZXMiLCJpbWFnZXNSZXNpemVkIiwidHJpZWRMb2FkaW5nIiwibmJJbWFnZXNUb0xvYWQiLCJmaXJzdEltYWdlIiwiaW1nIiwic2hpZnQiLCJsb2FkIiwib25sb2FkIiwib25lcnJvciIsInNldFRpbWVvdXQiLCJoYXNPd25Qcm9wZXJ0eSIsInciLCJoIiwiaWQiLCJJbnB1dCIsImRlZmF1bHRUZXh0IiwibGFzdElucHV0VGV4dCIsIm9mZnNldFgiLCJsYXN0VGltZSIsInRvdGFsVGltZSIsImNsaWNrQ3VycmVudFBvc2l0aW9uIiwidGV4dENhY2hlIiwiaW5wdXQiLCJzZXRBdHRyaWJ1dGUiLCJsZWZ0IiwidGFiSW5kZXgiLCJ2YWx1ZSIsInBvc2l0aW9uU3RhcnQiLCJzZWxlY3Rpb25TdGFydCIsInBvc2l0aW9uRW5kIiwic2VsZWN0aW9uRW5kIiwiYm9keSIsImFwcGVuZFRvQ2FudmFzIiwibm90aWNlTG9nZ2VkIiwibW92ZUFjdGlvbkNhbGxiYWNrIiwiaUNsaWNrIiwiZ2V0TGV0dGVyQ2xpY2tlZCIsInBvc2l0aW9uU3RhcnRDbGljayIsInNldFNlbGVjdGlvblJhbmdlIiwiY2xpY2siLCJibHVyIiwicGVyZm9ybWFuY2UiLCJub3ciLCJvZmZzZXRUaW1lIiwiY3R4VGV4dCIsInVwZGF0ZVRleHRDYWNoZSIsImF1dG9TY3JvbGwiLCJkcmF3VGV4dCIsImN1cnJlbnRYIiwibGV0dGVycyIsInhEcmF3IiwieURyYXciLCJpc0xldHRlclZpc2libGUiLCJkcmF3SGlnaGxpZ2h0IiwiZm9udENvbG9yIiwiZm9udFNpemUiLCJmb250RmFtaWx5IiwiZHJhd0N1cnNvciIsImJlZ2luUGF0aCIsIm1vdmVUbyIsImxpbmVUbyIsInN0cm9rZSIsInNlbGVjdENvbG9yIiwid3JhcFRleHRMaW5lcyIsImxldHRlciIsImlzQ2xpY2tDdXJyZW50UG9zaXRpb24iLCJpc0NsaWNrQWZ0ZXJQb3NpdGlvbiIsImN1cnJlbnRMZXR0ZXIiLCJsZXR0ZXJJZCIsImN1cnNvclBvc2l0aW9uIiwiY3VycmVudExldHRlclNpemUiLCJjdXJzb3JQb3NpdGlvblBvcyIsImN1cnNvclBvc2l0aW9uTmVnIiwib2Zmc2V0WE5lZyIsImZvY3VzIiwiZW5kIiwiZGlyZWN0aW9uIiwic2l6ZXNDYWNoZSIsInVwZGF0ZVNpemVzIiwid3JhcCIsImJvbGQiLCJ1bmRlcmxpbmUiLCJMaW5rIiwiaW5pdGlhbENvbG9yIiwiaW5pdGlhbFVuZGVybGluZSIsImZvbnRDb2xvckRvd24iLCJmb250Q29sb3JIb3ZlciIsImxhc3RLZXkiLCJ1bmRlZmluZWQiLCJzZWxlY3RlZENvbXBvbmVudCIsImJsdXJCYWNrZ3JvdW5kIiwiZHJhd0JsdXIiLCJrZXlDb2RlIiwia2V5QWN0aW9uIiwic2VsZWN0IiwiYmx1ckNhbnZhcyIsImluZGV4Iiwic2VsZWN0YWJsZUNvbXBvbmVudHMiLCJjb21wYXJlVG9NZW51IiwiTm90aWZpY2F0aW9uTWVzc2FnZSIsImRlbGF5QmVmb3JlQ2xvc2luZyIsImVhc2luZ0Z1bmN0aW9uIiwidGltZUxhc3RGcmFtZSIsImFuaW1hdGlvblRpbWUiLCJjbG9zZWQiLCJjbG9zaW5nIiwiY2xvc2VCdXR0b24iLCJzZXRDbGlja0FjdGlvbiIsImNsb3NlIiwiZGlzYWJsZUFuaW1hdGlvbiIsImVuYWJsZUNsb3NlQnV0dG9uIiwiZGlzYWJsZUNsb3NlQnV0dG9uIiwib2Zmc2V0WSIsImFuaW1hdGlvbkR1cmF0aW9uIiwiY29weSIsImZvcmNlQ2xvc2UiLCJvcGVuIiwiY29tcGFyZVRvTm90aWZpY2F0aW9uIiwiUHJvZ3Jlc3NCYXIiLCJkZWZhdWx0UGVyY2VudCIsInBlcmNlbnQiLCJkcmF3Rm9yZWdyb3VuZCIsIndpZHRoRm9yZWdyb3VuZCIsImFuaW1hdGlvblBlcmNlbnQiLCJmb3JlZ3JvdW5kQ29sb3IiLCJldmVudHMiLCJldmVudEFyZ3MiLCJyZWdpc3RlckNhbGxiYWNrIiwicmVtb3ZlQ2FsbGJhY2siLCJyZW1vdmVBbGxDYWxsYmFja3MiLCJ0b3RhbFdpZHRoIiwiY29tcGFyZUNvbXBvbmVudHMiLCJTY3JvbGxiYXIiLCJzaXplIiwibWF4V2lkdGhQYXJlbnQiLCJpbm5lcldpZHRoUGFyZW50IiwibWF4SGVpZ2h0UGFyZW50IiwiaW5uZXJIZWlnaHRQYXJlbnQiLCJjb250ZW50UmF0aW9YIiwiY29udGVudFJhdGlvWSIsIndpbmRvd1Njcm9sbFNpemVYIiwid2luZG93U2Nyb2xsU2l6ZVkiLCJjb21wYXJlVG9TY3JvbGxiYXIiLCJwZXJjZW50U2Nyb2xsYmFyTmV4dCIsIm5ld0RlbHRhWCIsIm5ld0RlbHRhWSIsIlNlbGVjdCIsIm9wdGlvbkNvbnRhaW5lciIsImRlZmF1bHRPcHRpb24iLCJzZWxlY3RlZE9wdGlvbiIsImxhYmVsIiwidHJpYW5nbGUiLCJUcmlhbmdsZSIsInVwZGF0ZVdpZHRoIiwiU2VsZWN0T3B0aW9uIiwiZGVmYXVsdExhYmVsIiwiU2VsZWN0RHJvcGRvd24iLCJtYXhIZWlnaHREcm9wZG93biIsIm9wdGlvbnMiLCJzZWxlY3RIZWlnaHQiLCJnZXRDb21wb25lbnRJZCIsInN0eWxlcyIsIlRvb2x0aXAiLCJjb21wYXJlVG9Ub29sdGlwIiwiZHJhd1RyaWFuZ2xlIiwicHJlUmVuZGVyZWRGb250IiwicHJlUmVuZGVyRm9udCIsImNhcnMiLCJjdHhUbXAiLCJmb250IiwibWVhc3VyZVRleHQiLCJ0ZXh0QmFzZWxpbmUiLCJmaWxsVGV4dCIsInN4Iiwic3kiLCJzV2lkdGgiLCJzSGVpZ2h0IiwiZXJhc2VCZWxvdyIsImRlZ3JlZXMiLCJkcmF3SW1hZ2VXcmFwcGVyIiwiaW1hZ2VEYXRhIiwiaXNOYU4iLCJ0cmFuc2xhdGUiLCJyb3RhdGUiLCJjbGVhclJlY3QiLCJBcnJheSIsImlzQXJyYXkiLCJsaW5lcyIsInNwbGl0IiwieEN1cnJlbnQiLCJ5Q3VycmVudCIsInlGaXJzdCIsImN1cnJlbnRUZXh0IiwiY3VycmVudFdpZHRoIiwiY29sb3JJbmRleCIsIndyYXBUZXh0IiwibGltaXQiLCJwIiwic3Vic3RyaW5nIiwicmlnaHQiLCJkaXNhYmxlV3JhcCIsImltYWdlU21vb3RoaW5nRW5hYmxlZCIsIm5ld1RleHQiLCJ3aWR0aENhciIsIm5iQ2FyTGluZSIsImhlaWdodFRvdGFsIiwibGluZVdyYXAiLCJqIiwid2lkdGhUZXh0IiwiY2FyV2lkdGgiLCJmcm9teCIsImZyb215IiwidG94IiwidG95IiwiaGVhZGxlbiIsImR4IiwiZHkiLCJhbmdsZSIsImF0YW4yIiwic2luIiwicmFkaXVzIiwiYXJjIiwiaXNGaWx0ZXJIdWVBdmFpbGFibGUiLCJnZXRJbWFnZURhdGEiLCJkYXRhIiwicGFyc2VOdW1iZXIiLCJzdHIiLCJwYXJzZUludCIsIm1hdGNoIiwiZ2V0Rm9udFNpemUiLCJyZWN0IiwiZ2V0Qm91bmRpbmdDbGllbnRSZWN0IiwiYXV0b1Jlc2l6ZUNhbnZhcyIsImluaXRpYWxXaWR0aCIsImluaXRpYWxIZWlnaHQiLCJkb2N1bWVudEVsZW1lbnQiLCJjbGllbnRXaWR0aCIsInJhdGlvIiwiZ2V0QXR0cmlidXRlIiwiYXV0b1Jlc2l6ZUNhbnZhc0Z1bGxzY3JlZW4iLCJlbmFibGVBdXRvUmVzaXplQ2FudmFzRnVsbHNjcmVlbiIsImF1dG9SZXNpemVDYW52YXNGdWxscGFnZSIsIm1hcmdpbiIsImVuYWJsZUF1dG9SZXNpemVDYW52YXNGdWxscGFnZSIsInJlcXVlc3RGdWxsc2NyZWVuIiwibW96UmVxdWVzdEZ1bGxTY3JlZW4iLCJ3ZWJraXRSZXF1ZXN0RnVsbHNjcmVlbiIsIm1zUmVxdWVzdEZ1bGxzY3JlZW4iLCJvUmVxdWVzdEZ1bGxzY3JlZW4iLCJleGl0RnVsbHNjcmVlbiIsIm9uZnVsbHNjcmVlbmNoYW5nZSIsIm9ubXNmdWxsc2NyZWVuY2hhbmdlIiwib25tb3pmdWxsc2NyZWVuY2hhbmdlIiwib253ZWJraXRmdWxsc2NyZWVuY2hhbmdlIiwib25va2l0ZnVsbHNjcmVlbmNoYW5nZSIsIm9ub2Z1bGxzY3JlZW5jaGFuZ2UiLCJjbGllbnRYIiwiY2xpZW50WSIsInRvcCJdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNELE87UUNWQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtR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QUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6IkpTR2FtZVRvb2xzLmRldi5qcyIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiB3ZWJwYWNrVW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbihyb290LCBmYWN0b3J5KSB7XG5cdGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0JyAmJiB0eXBlb2YgbW9kdWxlID09PSAnb2JqZWN0Jylcblx0XHRtb2R1bGUuZXhwb3J0cyA9IGZhY3RvcnkoKTtcblx0ZWxzZSBpZih0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQpXG5cdFx0ZGVmaW5lKFtdLCBmYWN0b3J5KTtcblx0ZWxzZSBpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcpXG5cdFx0ZXhwb3J0c1tcIkpTR2FtZVRvb2xzXCJdID0gZmFjdG9yeSgpO1xuXHRlbHNlXG5cdFx0cm9vdFtcIkpTR2FtZVRvb2xzXCJdID0gZmFjdG9yeSgpO1xufSkodHlwZW9mIHNlbGYgIT09IFwidW5kZWZpbmVkXCIgPyBzZWxmIDogdGhpcywgZnVuY3Rpb24oKSB7XG5yZXR1cm4gIiwiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zcmMvaW5kZXguanNcIik7XG4iLCJmdW5jdGlvbiBfYXJyYXlMaWtlVG9BcnJheShhcnIsIGxlbikge1xuICBpZiAobGVuID09IG51bGwgfHwgbGVuID4gYXJyLmxlbmd0aCkgbGVuID0gYXJyLmxlbmd0aDtcblxuICBmb3IgKHZhciBpID0gMCwgYXJyMiA9IG5ldyBBcnJheShsZW4pOyBpIDwgbGVuOyBpKyspIHtcbiAgICBhcnIyW2ldID0gYXJyW2ldO1xuICB9XG5cbiAgcmV0dXJuIGFycjI7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX2FycmF5TGlrZVRvQXJyYXk7XG5tb2R1bGUuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBtb2R1bGUuZXhwb3J0cywgbW9kdWxlLmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7IiwidmFyIGFycmF5TGlrZVRvQXJyYXkgPSByZXF1aXJlKFwiLi9hcnJheUxpa2VUb0FycmF5LmpzXCIpO1xuXG5mdW5jdGlvbiBfYXJyYXlXaXRob3V0SG9sZXMoYXJyKSB7XG4gIGlmIChBcnJheS5pc0FycmF5KGFycikpIHJldHVybiBhcnJheUxpa2VUb0FycmF5KGFycik7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX2FycmF5V2l0aG91dEhvbGVzO1xubW9kdWxlLmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gbW9kdWxlLmV4cG9ydHMsIG1vZHVsZS5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlOyIsImZ1bmN0aW9uIF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoc2VsZikge1xuICBpZiAoc2VsZiA9PT0gdm9pZCAwKSB7XG4gICAgdGhyb3cgbmV3IFJlZmVyZW5jZUVycm9yKFwidGhpcyBoYXNuJ3QgYmVlbiBpbml0aWFsaXNlZCAtIHN1cGVyKCkgaGFzbid0IGJlZW4gY2FsbGVkXCIpO1xuICB9XG5cbiAgcmV0dXJuIHNlbGY7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX2Fzc2VydFRoaXNJbml0aWFsaXplZDtcbm1vZHVsZS5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IG1vZHVsZS5leHBvcnRzLCBtb2R1bGUuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTsiLCJmdW5jdGlvbiBfY2xhc3NBcHBseURlc2NyaXB0b3JHZXQocmVjZWl2ZXIsIGRlc2NyaXB0b3IpIHtcbiAgaWYgKGRlc2NyaXB0b3IuZ2V0KSB7XG4gICAgcmV0dXJuIGRlc2NyaXB0b3IuZ2V0LmNhbGwocmVjZWl2ZXIpO1xuICB9XG5cbiAgcmV0dXJuIGRlc2NyaXB0b3IudmFsdWU7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX2NsYXNzQXBwbHlEZXNjcmlwdG9yR2V0O1xubW9kdWxlLmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gbW9kdWxlLmV4cG9ydHMsIG1vZHVsZS5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlOyIsImZ1bmN0aW9uIF9jbGFzc0FwcGx5RGVzY3JpcHRvclNldChyZWNlaXZlciwgZGVzY3JpcHRvciwgdmFsdWUpIHtcbiAgaWYgKGRlc2NyaXB0b3Iuc2V0KSB7XG4gICAgZGVzY3JpcHRvci5zZXQuY2FsbChyZWNlaXZlciwgdmFsdWUpO1xuICB9IGVsc2Uge1xuICAgIGlmICghZGVzY3JpcHRvci53cml0YWJsZSkge1xuICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcImF0dGVtcHRlZCB0byBzZXQgcmVhZCBvbmx5IHByaXZhdGUgZmllbGRcIik7XG4gICAgfVxuXG4gICAgZGVzY3JpcHRvci52YWx1ZSA9IHZhbHVlO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX2NsYXNzQXBwbHlEZXNjcmlwdG9yU2V0O1xubW9kdWxlLmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gbW9kdWxlLmV4cG9ydHMsIG1vZHVsZS5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlOyIsImZ1bmN0aW9uIF9jbGFzc0NhbGxDaGVjayhpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHtcbiAgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHtcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXCIpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX2NsYXNzQ2FsbENoZWNrO1xubW9kdWxlLmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gbW9kdWxlLmV4cG9ydHMsIG1vZHVsZS5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlOyIsImZ1bmN0aW9uIF9jbGFzc0V4dHJhY3RGaWVsZERlc2NyaXB0b3IocmVjZWl2ZXIsIHByaXZhdGVNYXAsIGFjdGlvbikge1xuICBpZiAoIXByaXZhdGVNYXAuaGFzKHJlY2VpdmVyKSkge1xuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJhdHRlbXB0ZWQgdG8gXCIgKyBhY3Rpb24gKyBcIiBwcml2YXRlIGZpZWxkIG9uIG5vbi1pbnN0YW5jZVwiKTtcbiAgfVxuXG4gIHJldHVybiBwcml2YXRlTWFwLmdldChyZWNlaXZlcik7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX2NsYXNzRXh0cmFjdEZpZWxkRGVzY3JpcHRvcjtcbm1vZHVsZS5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IG1vZHVsZS5leHBvcnRzLCBtb2R1bGUuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTsiLCJ2YXIgY2xhc3NBcHBseURlc2NyaXB0b3JHZXQgPSByZXF1aXJlKFwiLi9jbGFzc0FwcGx5RGVzY3JpcHRvckdldC5qc1wiKTtcblxudmFyIGNsYXNzRXh0cmFjdEZpZWxkRGVzY3JpcHRvciA9IHJlcXVpcmUoXCIuL2NsYXNzRXh0cmFjdEZpZWxkRGVzY3JpcHRvci5qc1wiKTtcblxuZnVuY3Rpb24gX2NsYXNzUHJpdmF0ZUZpZWxkR2V0KHJlY2VpdmVyLCBwcml2YXRlTWFwKSB7XG4gIHZhciBkZXNjcmlwdG9yID0gY2xhc3NFeHRyYWN0RmllbGREZXNjcmlwdG9yKHJlY2VpdmVyLCBwcml2YXRlTWFwLCBcImdldFwiKTtcbiAgcmV0dXJuIGNsYXNzQXBwbHlEZXNjcmlwdG9yR2V0KHJlY2VpdmVyLCBkZXNjcmlwdG9yKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfY2xhc3NQcml2YXRlRmllbGRHZXQ7XG5tb2R1bGUuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBtb2R1bGUuZXhwb3J0cywgbW9kdWxlLmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7IiwidmFyIGNsYXNzQXBwbHlEZXNjcmlwdG9yU2V0ID0gcmVxdWlyZShcIi4vY2xhc3NBcHBseURlc2NyaXB0b3JTZXQuanNcIik7XG5cbnZhciBjbGFzc0V4dHJhY3RGaWVsZERlc2NyaXB0b3IgPSByZXF1aXJlKFwiLi9jbGFzc0V4dHJhY3RGaWVsZERlc2NyaXB0b3IuanNcIik7XG5cbmZ1bmN0aW9uIF9jbGFzc1ByaXZhdGVGaWVsZFNldChyZWNlaXZlciwgcHJpdmF0ZU1hcCwgdmFsdWUpIHtcbiAgdmFyIGRlc2NyaXB0b3IgPSBjbGFzc0V4dHJhY3RGaWVsZERlc2NyaXB0b3IocmVjZWl2ZXIsIHByaXZhdGVNYXAsIFwic2V0XCIpO1xuICBjbGFzc0FwcGx5RGVzY3JpcHRvclNldChyZWNlaXZlciwgZGVzY3JpcHRvciwgdmFsdWUpO1xuICByZXR1cm4gdmFsdWU7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX2NsYXNzUHJpdmF0ZUZpZWxkU2V0O1xubW9kdWxlLmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gbW9kdWxlLmV4cG9ydHMsIG1vZHVsZS5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlOyIsInZhciBzZXRQcm90b3R5cGVPZiA9IHJlcXVpcmUoXCIuL3NldFByb3RvdHlwZU9mLmpzXCIpO1xuXG52YXIgaXNOYXRpdmVSZWZsZWN0Q29uc3RydWN0ID0gcmVxdWlyZShcIi4vaXNOYXRpdmVSZWZsZWN0Q29uc3RydWN0LmpzXCIpO1xuXG5mdW5jdGlvbiBfY29uc3RydWN0KFBhcmVudCwgYXJncywgQ2xhc3MpIHtcbiAgaWYgKGlzTmF0aXZlUmVmbGVjdENvbnN0cnVjdCgpKSB7XG4gICAgbW9kdWxlLmV4cG9ydHMgPSBfY29uc3RydWN0ID0gUmVmbGVjdC5jb25zdHJ1Y3Q7XG4gICAgbW9kdWxlLmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gbW9kdWxlLmV4cG9ydHMsIG1vZHVsZS5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuICB9IGVsc2Uge1xuICAgIG1vZHVsZS5leHBvcnRzID0gX2NvbnN0cnVjdCA9IGZ1bmN0aW9uIF9jb25zdHJ1Y3QoUGFyZW50LCBhcmdzLCBDbGFzcykge1xuICAgICAgdmFyIGEgPSBbbnVsbF07XG4gICAgICBhLnB1c2guYXBwbHkoYSwgYXJncyk7XG4gICAgICB2YXIgQ29uc3RydWN0b3IgPSBGdW5jdGlvbi5iaW5kLmFwcGx5KFBhcmVudCwgYSk7XG4gICAgICB2YXIgaW5zdGFuY2UgPSBuZXcgQ29uc3RydWN0b3IoKTtcbiAgICAgIGlmIChDbGFzcykgc2V0UHJvdG90eXBlT2YoaW5zdGFuY2UsIENsYXNzLnByb3RvdHlwZSk7XG4gICAgICByZXR1cm4gaW5zdGFuY2U7XG4gICAgfTtcblxuICAgIG1vZHVsZS5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IG1vZHVsZS5leHBvcnRzLCBtb2R1bGUuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcbiAgfVxuXG4gIHJldHVybiBfY29uc3RydWN0LmFwcGx5KG51bGwsIGFyZ3VtZW50cyk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX2NvbnN0cnVjdDtcbm1vZHVsZS5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IG1vZHVsZS5leHBvcnRzLCBtb2R1bGUuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTsiLCJmdW5jdGlvbiBfZGVmaW5lUHJvcGVydGllcyh0YXJnZXQsIHByb3BzKSB7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgcHJvcHMubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgZGVzY3JpcHRvciA9IHByb3BzW2ldO1xuICAgIGRlc2NyaXB0b3IuZW51bWVyYWJsZSA9IGRlc2NyaXB0b3IuZW51bWVyYWJsZSB8fCBmYWxzZTtcbiAgICBkZXNjcmlwdG9yLmNvbmZpZ3VyYWJsZSA9IHRydWU7XG4gICAgaWYgKFwidmFsdWVcIiBpbiBkZXNjcmlwdG9yKSBkZXNjcmlwdG9yLndyaXRhYmxlID0gdHJ1ZTtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBkZXNjcmlwdG9yLmtleSwgZGVzY3JpcHRvcik7XG4gIH1cbn1cblxuZnVuY3Rpb24gX2NyZWF0ZUNsYXNzKENvbnN0cnVjdG9yLCBwcm90b1Byb3BzLCBzdGF0aWNQcm9wcykge1xuICBpZiAocHJvdG9Qcm9wcykgX2RlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IucHJvdG90eXBlLCBwcm90b1Byb3BzKTtcbiAgaWYgKHN0YXRpY1Byb3BzKSBfZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvciwgc3RhdGljUHJvcHMpO1xuICByZXR1cm4gQ29uc3RydWN0b3I7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX2NyZWF0ZUNsYXNzO1xubW9kdWxlLmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gbW9kdWxlLmV4cG9ydHMsIG1vZHVsZS5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlOyIsImZ1bmN0aW9uIF9kZWZpbmVQcm9wZXJ0eShvYmosIGtleSwgdmFsdWUpIHtcbiAgaWYgKGtleSBpbiBvYmopIHtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkob2JqLCBrZXksIHtcbiAgICAgIHZhbHVlOiB2YWx1ZSxcbiAgICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgICBjb25maWd1cmFibGU6IHRydWUsXG4gICAgICB3cml0YWJsZTogdHJ1ZVxuICAgIH0pO1xuICB9IGVsc2Uge1xuICAgIG9ialtrZXldID0gdmFsdWU7XG4gIH1cblxuICByZXR1cm4gb2JqO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9kZWZpbmVQcm9wZXJ0eTtcbm1vZHVsZS5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IG1vZHVsZS5leHBvcnRzLCBtb2R1bGUuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTsiLCJ2YXIgc3VwZXJQcm9wQmFzZSA9IHJlcXVpcmUoXCIuL3N1cGVyUHJvcEJhc2UuanNcIik7XG5cbmZ1bmN0aW9uIF9nZXQodGFyZ2V0LCBwcm9wZXJ0eSwgcmVjZWl2ZXIpIHtcbiAgaWYgKHR5cGVvZiBSZWZsZWN0ICE9PSBcInVuZGVmaW5lZFwiICYmIFJlZmxlY3QuZ2V0KSB7XG4gICAgbW9kdWxlLmV4cG9ydHMgPSBfZ2V0ID0gUmVmbGVjdC5nZXQ7XG4gICAgbW9kdWxlLmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gbW9kdWxlLmV4cG9ydHMsIG1vZHVsZS5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuICB9IGVsc2Uge1xuICAgIG1vZHVsZS5leHBvcnRzID0gX2dldCA9IGZ1bmN0aW9uIF9nZXQodGFyZ2V0LCBwcm9wZXJ0eSwgcmVjZWl2ZXIpIHtcbiAgICAgIHZhciBiYXNlID0gc3VwZXJQcm9wQmFzZSh0YXJnZXQsIHByb3BlcnR5KTtcbiAgICAgIGlmICghYmFzZSkgcmV0dXJuO1xuICAgICAgdmFyIGRlc2MgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKGJhc2UsIHByb3BlcnR5KTtcblxuICAgICAgaWYgKGRlc2MuZ2V0KSB7XG4gICAgICAgIHJldHVybiBkZXNjLmdldC5jYWxsKHJlY2VpdmVyKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGRlc2MudmFsdWU7XG4gICAgfTtcblxuICAgIG1vZHVsZS5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IG1vZHVsZS5leHBvcnRzLCBtb2R1bGUuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcbiAgfVxuXG4gIHJldHVybiBfZ2V0KHRhcmdldCwgcHJvcGVydHksIHJlY2VpdmVyIHx8IHRhcmdldCk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX2dldDtcbm1vZHVsZS5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IG1vZHVsZS5leHBvcnRzLCBtb2R1bGUuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTsiLCJmdW5jdGlvbiBfZ2V0UHJvdG90eXBlT2Yobykge1xuICBtb2R1bGUuZXhwb3J0cyA9IF9nZXRQcm90b3R5cGVPZiA9IE9iamVjdC5zZXRQcm90b3R5cGVPZiA/IE9iamVjdC5nZXRQcm90b3R5cGVPZiA6IGZ1bmN0aW9uIF9nZXRQcm90b3R5cGVPZihvKSB7XG4gICAgcmV0dXJuIG8uX19wcm90b19fIHx8IE9iamVjdC5nZXRQcm90b3R5cGVPZihvKTtcbiAgfTtcbiAgbW9kdWxlLmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gbW9kdWxlLmV4cG9ydHMsIG1vZHVsZS5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuICByZXR1cm4gX2dldFByb3RvdHlwZU9mKG8pO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9nZXRQcm90b3R5cGVPZjtcbm1vZHVsZS5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IG1vZHVsZS5leHBvcnRzLCBtb2R1bGUuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTsiLCJ2YXIgc2V0UHJvdG90eXBlT2YgPSByZXF1aXJlKFwiLi9zZXRQcm90b3R5cGVPZi5qc1wiKTtcblxuZnVuY3Rpb24gX2luaGVyaXRzKHN1YkNsYXNzLCBzdXBlckNsYXNzKSB7XG4gIGlmICh0eXBlb2Ygc3VwZXJDbGFzcyAhPT0gXCJmdW5jdGlvblwiICYmIHN1cGVyQ2xhc3MgIT09IG51bGwpIHtcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiU3VwZXIgZXhwcmVzc2lvbiBtdXN0IGVpdGhlciBiZSBudWxsIG9yIGEgZnVuY3Rpb25cIik7XG4gIH1cblxuICBzdWJDbGFzcy5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKHN1cGVyQ2xhc3MgJiYgc3VwZXJDbGFzcy5wcm90b3R5cGUsIHtcbiAgICBjb25zdHJ1Y3Rvcjoge1xuICAgICAgdmFsdWU6IHN1YkNsYXNzLFxuICAgICAgd3JpdGFibGU6IHRydWUsXG4gICAgICBjb25maWd1cmFibGU6IHRydWVcbiAgICB9XG4gIH0pO1xuICBpZiAoc3VwZXJDbGFzcykgc2V0UHJvdG90eXBlT2Yoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9pbmhlcml0cztcbm1vZHVsZS5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IG1vZHVsZS5leHBvcnRzLCBtb2R1bGUuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTsiLCJmdW5jdGlvbiBfaXNOYXRpdmVSZWZsZWN0Q29uc3RydWN0KCkge1xuICBpZiAodHlwZW9mIFJlZmxlY3QgPT09IFwidW5kZWZpbmVkXCIgfHwgIVJlZmxlY3QuY29uc3RydWN0KSByZXR1cm4gZmFsc2U7XG4gIGlmIChSZWZsZWN0LmNvbnN0cnVjdC5zaGFtKSByZXR1cm4gZmFsc2U7XG4gIGlmICh0eXBlb2YgUHJveHkgPT09IFwiZnVuY3Rpb25cIikgcmV0dXJuIHRydWU7XG5cbiAgdHJ5IHtcbiAgICBCb29sZWFuLnByb3RvdHlwZS52YWx1ZU9mLmNhbGwoUmVmbGVjdC5jb25zdHJ1Y3QoQm9vbGVhbiwgW10sIGZ1bmN0aW9uICgpIHt9KSk7XG4gICAgcmV0dXJuIHRydWU7XG4gIH0gY2F0Y2ggKGUpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfaXNOYXRpdmVSZWZsZWN0Q29uc3RydWN0O1xubW9kdWxlLmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gbW9kdWxlLmV4cG9ydHMsIG1vZHVsZS5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlOyIsImZ1bmN0aW9uIF9pdGVyYWJsZVRvQXJyYXkoaXRlcikge1xuICBpZiAodHlwZW9mIFN5bWJvbCAhPT0gXCJ1bmRlZmluZWRcIiAmJiBpdGVyW1N5bWJvbC5pdGVyYXRvcl0gIT0gbnVsbCB8fCBpdGVyW1wiQEBpdGVyYXRvclwiXSAhPSBudWxsKSByZXR1cm4gQXJyYXkuZnJvbShpdGVyKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfaXRlcmFibGVUb0FycmF5O1xubW9kdWxlLmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gbW9kdWxlLmV4cG9ydHMsIG1vZHVsZS5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlOyIsImZ1bmN0aW9uIF9ub25JdGVyYWJsZVNwcmVhZCgpIHtcbiAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkludmFsaWQgYXR0ZW1wdCB0byBzcHJlYWQgbm9uLWl0ZXJhYmxlIGluc3RhbmNlLlxcbkluIG9yZGVyIHRvIGJlIGl0ZXJhYmxlLCBub24tYXJyYXkgb2JqZWN0cyBtdXN0IGhhdmUgYSBbU3ltYm9sLml0ZXJhdG9yXSgpIG1ldGhvZC5cIik7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX25vbkl0ZXJhYmxlU3ByZWFkO1xubW9kdWxlLmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gbW9kdWxlLmV4cG9ydHMsIG1vZHVsZS5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlOyIsInZhciBfdHlwZW9mID0gcmVxdWlyZShcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvdHlwZW9mXCIpW1wiZGVmYXVsdFwiXTtcblxudmFyIGFzc2VydFRoaXNJbml0aWFsaXplZCA9IHJlcXVpcmUoXCIuL2Fzc2VydFRoaXNJbml0aWFsaXplZC5qc1wiKTtcblxuZnVuY3Rpb24gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4oc2VsZiwgY2FsbCkge1xuICBpZiAoY2FsbCAmJiAoX3R5cGVvZihjYWxsKSA9PT0gXCJvYmplY3RcIiB8fCB0eXBlb2YgY2FsbCA9PT0gXCJmdW5jdGlvblwiKSkge1xuICAgIHJldHVybiBjYWxsO1xuICB9XG5cbiAgcmV0dXJuIGFzc2VydFRoaXNJbml0aWFsaXplZChzZWxmKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybjtcbm1vZHVsZS5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IG1vZHVsZS5leHBvcnRzLCBtb2R1bGUuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTsiLCJ2YXIgc3VwZXJQcm9wQmFzZSA9IHJlcXVpcmUoXCIuL3N1cGVyUHJvcEJhc2UuanNcIik7XG5cbnZhciBkZWZpbmVQcm9wZXJ0eSA9IHJlcXVpcmUoXCIuL2RlZmluZVByb3BlcnR5LmpzXCIpO1xuXG5mdW5jdGlvbiBzZXQodGFyZ2V0LCBwcm9wZXJ0eSwgdmFsdWUsIHJlY2VpdmVyKSB7XG4gIGlmICh0eXBlb2YgUmVmbGVjdCAhPT0gXCJ1bmRlZmluZWRcIiAmJiBSZWZsZWN0LnNldCkge1xuICAgIHNldCA9IFJlZmxlY3Quc2V0O1xuICB9IGVsc2Uge1xuICAgIHNldCA9IGZ1bmN0aW9uIHNldCh0YXJnZXQsIHByb3BlcnR5LCB2YWx1ZSwgcmVjZWl2ZXIpIHtcbiAgICAgIHZhciBiYXNlID0gc3VwZXJQcm9wQmFzZSh0YXJnZXQsIHByb3BlcnR5KTtcbiAgICAgIHZhciBkZXNjO1xuXG4gICAgICBpZiAoYmFzZSkge1xuICAgICAgICBkZXNjID0gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihiYXNlLCBwcm9wZXJ0eSk7XG5cbiAgICAgICAgaWYgKGRlc2Muc2V0KSB7XG4gICAgICAgICAgZGVzYy5zZXQuY2FsbChyZWNlaXZlciwgdmFsdWUpO1xuICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9IGVsc2UgaWYgKCFkZXNjLndyaXRhYmxlKSB7XG4gICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGRlc2MgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKHJlY2VpdmVyLCBwcm9wZXJ0eSk7XG5cbiAgICAgIGlmIChkZXNjKSB7XG4gICAgICAgIGlmICghZGVzYy53cml0YWJsZSkge1xuICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuXG4gICAgICAgIGRlc2MudmFsdWUgPSB2YWx1ZTtcbiAgICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KHJlY2VpdmVyLCBwcm9wZXJ0eSwgZGVzYyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBkZWZpbmVQcm9wZXJ0eShyZWNlaXZlciwgcHJvcGVydHksIHZhbHVlKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfTtcbiAgfVxuXG4gIHJldHVybiBzZXQodGFyZ2V0LCBwcm9wZXJ0eSwgdmFsdWUsIHJlY2VpdmVyKTtcbn1cblxuZnVuY3Rpb24gX3NldCh0YXJnZXQsIHByb3BlcnR5LCB2YWx1ZSwgcmVjZWl2ZXIsIGlzU3RyaWN0KSB7XG4gIHZhciBzID0gc2V0KHRhcmdldCwgcHJvcGVydHksIHZhbHVlLCByZWNlaXZlciB8fCB0YXJnZXQpO1xuXG4gIGlmICghcyAmJiBpc1N0cmljdCkge1xuICAgIHRocm93IG5ldyBFcnJvcignZmFpbGVkIHRvIHNldCBwcm9wZXJ0eScpO1xuICB9XG5cbiAgcmV0dXJuIHZhbHVlO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9zZXQ7XG5tb2R1bGUuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBtb2R1bGUuZXhwb3J0cywgbW9kdWxlLmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7IiwiZnVuY3Rpb24gX3NldFByb3RvdHlwZU9mKG8sIHApIHtcbiAgbW9kdWxlLmV4cG9ydHMgPSBfc2V0UHJvdG90eXBlT2YgPSBPYmplY3Quc2V0UHJvdG90eXBlT2YgfHwgZnVuY3Rpb24gX3NldFByb3RvdHlwZU9mKG8sIHApIHtcbiAgICBvLl9fcHJvdG9fXyA9IHA7XG4gICAgcmV0dXJuIG87XG4gIH07XG5cbiAgbW9kdWxlLmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gbW9kdWxlLmV4cG9ydHMsIG1vZHVsZS5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuICByZXR1cm4gX3NldFByb3RvdHlwZU9mKG8sIHApO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9zZXRQcm90b3R5cGVPZjtcbm1vZHVsZS5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IG1vZHVsZS5leHBvcnRzLCBtb2R1bGUuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTsiLCJ2YXIgZ2V0UHJvdG90eXBlT2YgPSByZXF1aXJlKFwiLi9nZXRQcm90b3R5cGVPZi5qc1wiKTtcblxuZnVuY3Rpb24gX3N1cGVyUHJvcEJhc2Uob2JqZWN0LCBwcm9wZXJ0eSkge1xuICB3aGlsZSAoIU9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KSkge1xuICAgIG9iamVjdCA9IGdldFByb3RvdHlwZU9mKG9iamVjdCk7XG4gICAgaWYgKG9iamVjdCA9PT0gbnVsbCkgYnJlYWs7XG4gIH1cblxuICByZXR1cm4gb2JqZWN0O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9zdXBlclByb3BCYXNlO1xubW9kdWxlLmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gbW9kdWxlLmV4cG9ydHMsIG1vZHVsZS5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlOyIsInZhciBhcnJheVdpdGhvdXRIb2xlcyA9IHJlcXVpcmUoXCIuL2FycmF5V2l0aG91dEhvbGVzLmpzXCIpO1xuXG52YXIgaXRlcmFibGVUb0FycmF5ID0gcmVxdWlyZShcIi4vaXRlcmFibGVUb0FycmF5LmpzXCIpO1xuXG52YXIgdW5zdXBwb3J0ZWRJdGVyYWJsZVRvQXJyYXkgPSByZXF1aXJlKFwiLi91bnN1cHBvcnRlZEl0ZXJhYmxlVG9BcnJheS5qc1wiKTtcblxudmFyIG5vbkl0ZXJhYmxlU3ByZWFkID0gcmVxdWlyZShcIi4vbm9uSXRlcmFibGVTcHJlYWQuanNcIik7XG5cbmZ1bmN0aW9uIF90b0NvbnN1bWFibGVBcnJheShhcnIpIHtcbiAgcmV0dXJuIGFycmF5V2l0aG91dEhvbGVzKGFycikgfHwgaXRlcmFibGVUb0FycmF5KGFycikgfHwgdW5zdXBwb3J0ZWRJdGVyYWJsZVRvQXJyYXkoYXJyKSB8fCBub25JdGVyYWJsZVNwcmVhZCgpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF90b0NvbnN1bWFibGVBcnJheTtcbm1vZHVsZS5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IG1vZHVsZS5leHBvcnRzLCBtb2R1bGUuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTsiLCJmdW5jdGlvbiBfdHlwZW9mKG9iaikge1xuICBcIkBiYWJlbC9oZWxwZXJzIC0gdHlwZW9mXCI7XG5cbiAgaWYgKHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiB0eXBlb2YgU3ltYm9sLml0ZXJhdG9yID09PSBcInN5bWJvbFwiKSB7XG4gICAgbW9kdWxlLmV4cG9ydHMgPSBfdHlwZW9mID0gZnVuY3Rpb24gX3R5cGVvZihvYmopIHtcbiAgICAgIHJldHVybiB0eXBlb2Ygb2JqO1xuICAgIH07XG5cbiAgICBtb2R1bGUuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBtb2R1bGUuZXhwb3J0cywgbW9kdWxlLmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG4gIH0gZWxzZSB7XG4gICAgbW9kdWxlLmV4cG9ydHMgPSBfdHlwZW9mID0gZnVuY3Rpb24gX3R5cGVvZihvYmopIHtcbiAgICAgIHJldHVybiBvYmogJiYgdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIG9iai5jb25zdHJ1Y3RvciA9PT0gU3ltYm9sICYmIG9iaiAhPT0gU3ltYm9sLnByb3RvdHlwZSA/IFwic3ltYm9sXCIgOiB0eXBlb2Ygb2JqO1xuICAgIH07XG5cbiAgICBtb2R1bGUuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBtb2R1bGUuZXhwb3J0cywgbW9kdWxlLmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG4gIH1cblxuICByZXR1cm4gX3R5cGVvZihvYmopO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF90eXBlb2Y7XG5tb2R1bGUuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBtb2R1bGUuZXhwb3J0cywgbW9kdWxlLmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7IiwidmFyIGFycmF5TGlrZVRvQXJyYXkgPSByZXF1aXJlKFwiLi9hcnJheUxpa2VUb0FycmF5LmpzXCIpO1xuXG5mdW5jdGlvbiBfdW5zdXBwb3J0ZWRJdGVyYWJsZVRvQXJyYXkobywgbWluTGVuKSB7XG4gIGlmICghbykgcmV0dXJuO1xuICBpZiAodHlwZW9mIG8gPT09IFwic3RyaW5nXCIpIHJldHVybiBhcnJheUxpa2VUb0FycmF5KG8sIG1pbkxlbik7XG4gIHZhciBuID0gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKG8pLnNsaWNlKDgsIC0xKTtcbiAgaWYgKG4gPT09IFwiT2JqZWN0XCIgJiYgby5jb25zdHJ1Y3RvcikgbiA9IG8uY29uc3RydWN0b3IubmFtZTtcbiAgaWYgKG4gPT09IFwiTWFwXCIgfHwgbiA9PT0gXCJTZXRcIikgcmV0dXJuIEFycmF5LmZyb20obyk7XG4gIGlmIChuID09PSBcIkFyZ3VtZW50c1wiIHx8IC9eKD86VWl8SSludCg/Ojh8MTZ8MzIpKD86Q2xhbXBlZCk/QXJyYXkkLy50ZXN0KG4pKSByZXR1cm4gYXJyYXlMaWtlVG9BcnJheShvLCBtaW5MZW4pO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF91bnN1cHBvcnRlZEl0ZXJhYmxlVG9BcnJheTtcbm1vZHVsZS5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IG1vZHVsZS5leHBvcnRzLCBtb2R1bGUuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTsiLCIvKlxuICogQ29weXJpZ2h0IChDKSAyMDIwIEVsaWFzdGlrIChlbGlhc3Rpa3NvZnRzLmNvbSlcbiAqXG4gKiBUaGlzIGZpbGUgaXMgcGFydCBvZiBcIkpTR2FtZVRvb2xzXCIuXG4gKlxuICogXCJKU0dhbWVUb29sc1wiIGlzIGZyZWUgc29mdHdhcmU6IHlvdSBjYW4gcmVkaXN0cmlidXRlIGl0IGFuZC9vciBtb2RpZnlcbiAqIGl0IHVuZGVyIHRoZSB0ZXJtcyBvZiB0aGUgR05VIEdlbmVyYWwgUHVibGljIExpY2Vuc2UgYXMgcHVibGlzaGVkIGJ5XG4gKiB0aGUgRnJlZSBTb2Z0d2FyZSBGb3VuZGF0aW9uLCBlaXRoZXIgdmVyc2lvbiAzIG9mIHRoZSBMaWNlbnNlLCBvclxuICogKGF0IHlvdXIgb3B0aW9uKSBhbnkgbGF0ZXIgdmVyc2lvbi5cbiAqXG4gKiBcIkpTR2FtZVRvb2xzXCIgaXMgZGlzdHJpYnV0ZWQgaW4gdGhlIGhvcGUgdGhhdCBpdCB3aWxsIGJlIHVzZWZ1bCxcbiAqIGJ1dCBXSVRIT1VUIEFOWSBXQVJSQU5UWTsgd2l0aG91dCBldmVuIHRoZSBpbXBsaWVkIHdhcnJhbnR5IG9mXG4gKiBNRVJDSEFOVEFCSUxJVFkgb3IgRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UuICBTZWUgdGhlXG4gKiBHTlUgR2VuZXJhbCBQdWJsaWMgTGljZW5zZSBmb3IgbW9yZSBkZXRhaWxzLlxuICpcbiAqIFlvdSBzaG91bGQgaGF2ZSByZWNlaXZlZCBhIGNvcHkgb2YgdGhlIEdOVSBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlXG4gKiBhbG9uZyB3aXRoIFwiSlNHYW1lVG9vbHNcIi4gIElmIG5vdCwgc2VlIDxodHRwOi8vd3d3LmdudS5vcmcvbGljZW5zZXMvPi5cbiAqL1xuaW1wb3J0IENvbXBvbmVudCBmcm9tIFwiLi9Db21wb25lbnRcIjtcbmltcG9ydCBDb25zdGFudHMgZnJvbSBcIi4vQ29uc3RhbnRzXCI7XG5pbXBvcnQgU3R5bGUgZnJvbSBcIi4vU3R5bGVcIjtcbmltcG9ydCBVdGlscyBmcm9tIFwiLi9VdGlsc1wiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBBcnJvdyBleHRlbmRzIENvbXBvbmVudCB7XG4gIHNlbGVjdGFibGUgPSBmYWxzZTtcblxuICBjb25zdHJ1Y3Rvcih4LCB5LCB0b1gsIHRvWSwgc3R5bGUpIHtcbiAgICBzdXBlcih4LCB5LCBudWxsLCBudWxsLCBzdHlsZSk7XG5cbiAgICB0aGlzLnRvWCA9IHRvWDtcbiAgICB0aGlzLnRvWSA9IHRvWTtcbiAgfVxuXG4gIGRyYXcoY29udGV4dCkge1xuICAgIGlmKHRoaXMuaGlkZGVuKSByZXR1cm47XG4gICAgc3VwZXIuZHJhdyhjb250ZXh0KTtcblxuICAgIGNvbnN0IGNhbnZhcyA9IGNvbnRleHQuY2FudmFzO1xuICAgIGNvbnN0IGN0eCA9IGNhbnZhcy5nZXRDb250ZXh0KFwiMmRcIik7XG4gICAgXG4gICAgVXRpbHMuZHJhd0Fycm93KGN0eCwgdGhpcy54LCB0aGlzLnksIHRoaXMudG9YLCB0aGlzLnRvWSwgdGhpcy5zdHlsZS5saW5lV2lkdGgsIHRoaXMuc3R5bGUuaGVhZFNpemUsIHRoaXMuc3R5bGUuY29sb3IsIHRoaXMuc3R5bGUubGluZUNhcCk7XG5cbiAgICB0aGlzLmluaXQgPSB0cnVlO1xuICB9XG5cbiAgZ2V0IHdpZHRoKCkge1xuICAgIHJldHVybiBNYXRoLmFicyh0aGlzLnggLSB0aGlzLnRvWCk7XG4gIH1cblxuICBnZXQgaGVpZ2h0KCkge1xuICAgIHJldHVybiBNYXRoLmFicyh0aGlzLnkgLSB0aGlzLnRvWSk7XG4gIH1cblxuICBnZXQgZGVmYXVsdFN0eWxlKCkge1xuICAgIHJldHVybiBuZXcgU3R5bGUoe1xuICAgICAgXCJsaW5lV2lkdGhcIjogQ29uc3RhbnRzLlNldHRpbmcuQVJST1dfREVGQVVMVF9MSU5FX1NJWkUsXG4gICAgICBcImhlYWRTaXplXCI6IENvbnN0YW50cy5TZXR0aW5nLkFSUk9XX0RFRkFVTFRfSEVBRF9TSVpFLFxuICAgICAgXCJjb2xvclwiOiBDb25zdGFudHMuU2V0dGluZy5BUlJPV19ERUZBVUxUX0NPTE9SLFxuICAgICAgXCJsaW5lQ2FwXCI6IENvbnN0YW50cy5TZXR0aW5nLkFSUk9XX0RFRkFVTFRfTElORV9DQVBcbiAgICB9KTtcbiAgfVxufSIsIi8qXG4gKiBDb3B5cmlnaHQgKEMpIDIwMjAgRWxpYXN0aWsgKGVsaWFzdGlrc29mdHMuY29tKVxuICpcbiAqIFRoaXMgZmlsZSBpcyBwYXJ0IG9mIFwiSlNHYW1lVG9vbHNcIi5cbiAqXG4gKiBcIkpTR2FtZVRvb2xzXCIgaXMgZnJlZSBzb2Z0d2FyZTogeW91IGNhbiByZWRpc3RyaWJ1dGUgaXQgYW5kL29yIG1vZGlmeVxuICogaXQgdW5kZXIgdGhlIHRlcm1zIG9mIHRoZSBHTlUgR2VuZXJhbCBQdWJsaWMgTGljZW5zZSBhcyBwdWJsaXNoZWQgYnlcbiAqIHRoZSBGcmVlIFNvZnR3YXJlIEZvdW5kYXRpb24sIGVpdGhlciB2ZXJzaW9uIDMgb2YgdGhlIExpY2Vuc2UsIG9yXG4gKiAoYXQgeW91ciBvcHRpb24pIGFueSBsYXRlciB2ZXJzaW9uLlxuICpcbiAqIFwiSlNHYW1lVG9vbHNcIiBpcyBkaXN0cmlidXRlZCBpbiB0aGUgaG9wZSB0aGF0IGl0IHdpbGwgYmUgdXNlZnVsLFxuICogYnV0IFdJVEhPVVQgQU5ZIFdBUlJBTlRZOyB3aXRob3V0IGV2ZW4gdGhlIGltcGxpZWQgd2FycmFudHkgb2ZcbiAqIE1FUkNIQU5UQUJJTElUWSBvciBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRS4gIFNlZSB0aGVcbiAqIEdOVSBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlIGZvciBtb3JlIGRldGFpbHMuXG4gKlxuICogWW91IHNob3VsZCBoYXZlIHJlY2VpdmVkIGEgY29weSBvZiB0aGUgR05VIEdlbmVyYWwgUHVibGljIExpY2Vuc2VcbiAqIGFsb25nIHdpdGggXCJKU0dhbWVUb29sc1wiLiAgSWYgbm90LCBzZWUgPGh0dHA6Ly93d3cuZ251Lm9yZy9saWNlbnNlcy8+LlxuICovXG5pbXBvcnQgQ29tcG9uZW50IGZyb20gXCIuL0NvbXBvbmVudFwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBCb3ggZXh0ZW5kcyBDb21wb25lbnQge1xuICBzZWxlY3RhYmxlID0gZmFsc2U7XG5cbiAgY29uc3RydWN0b3IoeCwgeSwgd2lkdGgsIGhlaWdodCwgc3R5bGUpIHtcbiAgICBzdXBlcih4LCB5LCB3aWR0aCwgaGVpZ2h0LCBzdHlsZSk7XG4gIH1cbiAgXG4gIGRyYXcoY29udGV4dCkge1xuICAgIGlmKHRoaXMuaGlkZGVuKSByZXR1cm47XG4gICAgc3VwZXIuZHJhdyhjb250ZXh0KTtcblxuICAgIGNvbnN0IGNhbnZhcyA9IGNvbnRleHQuY2FudmFzO1xuICAgIGNvbnN0IGN0eCA9IGNhbnZhcy5nZXRDb250ZXh0KFwiMmRcIik7XG4gICAgY3R4LnNhdmUoKTtcblxuICAgIHRoaXMuZHJhd0JhY2tncm91bmQoY3R4KTtcbiAgICB0aGlzLmRyYXdCb3JkZXIoY3R4KTtcbiAgICBcbiAgICBjdHgucmVzdG9yZSgpO1xuICB9XG5cbiAgZHJhd0JhY2tncm91bmQoY3R4KSB7XG4gICAgY29uc3QgY29sb3IgPSB0aGlzLmJhY2tncm91bmRDb2xvcjtcblxuICAgIGlmKGNvbG9yKSB7XG4gICAgICBjdHguc2F2ZSgpO1xuICBcbiAgICAgIGN0eC5maWxsU3R5bGUgPSBjb2xvcjtcbiAgICAgIGN0eC5maWxsUmVjdChNYXRoLnJvdW5kKHRoaXMueCksIE1hdGgucm91bmQodGhpcy55KSwgTWF0aC5yb3VuZCh0aGlzLndpZHRoKSwgTWF0aC5yb3VuZCh0aGlzLmhlaWdodCkpO1xuXG4gICAgICBjdHgucmVzdG9yZSgpO1xuICAgIH1cbiAgfVxuXG4gIGdldCBiYWNrZ3JvdW5kQ29sb3IoKSB7XG4gICAgbGV0IGNvbG9yID0gbnVsbDtcblxuICAgIGlmKHRoaXMuaG92ZXJlZCAmJiB0aGlzLmNsaWNrZWQgJiYgdGhpcy5zdHlsZS5iYWNrZ3JvdW5kQ29sb3JEb3duICE9IG51bGwpIHtcbiAgICAgIGNvbG9yID0gdGhpcy5zdHlsZS5iYWNrZ3JvdW5kQ29sb3JEb3duO1xuICAgIH0gZWxzZSBpZih0aGlzLmhvdmVyZWQgJiYgdGhpcy5zdHlsZS5iYWNrZ3JvdW5kQ29sb3JIb3ZlciAhPSBudWxsKSB7XG4gICAgICBjb2xvciA9IHRoaXMuc3R5bGUuYmFja2dyb3VuZENvbG9ySG92ZXI7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbG9yID0gdGhpcy5zdHlsZS5iYWNrZ3JvdW5kQ29sb3I7XG4gICAgfVxuXG4gICAgcmV0dXJuIGNvbG9yO1xuICB9XG5cbiAgZHJhd0JvcmRlcihjdHgpIHtcbiAgICBjb25zdCBjb2xvciA9IHRoaXMuYm9yZGVyQ29sb3I7XG5cbiAgICBpZihjb2xvciAmJiB0aGlzLnN0eWxlLmJvcmRlclNpemUgPiAwKSB7XG4gICAgICBjdHguc2F2ZSgpO1xuICAgICAgXG4gICAgICBjdHguc3Ryb2tlU3R5bGUgPSBjb2xvcjtcbiAgICAgIGN0eC5saW5lV2lkdGggPSB0aGlzLnN0eWxlLmJvcmRlclNpemU7XG4gICAgICBcbiAgICAgIGN0eC5zdHJva2VSZWN0KE1hdGgucm91bmQodGhpcy54KSwgTWF0aC5yb3VuZCh0aGlzLnkpLCBNYXRoLnJvdW5kKHRoaXMud2lkdGggLSB0aGlzLnN0eWxlLmJvcmRlclNpemUgLyAyKSwgTWF0aC5yb3VuZCh0aGlzLmhlaWdodCAtIHRoaXMuc3R5bGUuYm9yZGVyU2l6ZSAvIDIpKTtcbiAgXG4gICAgICBjdHgucmVzdG9yZSgpO1xuICAgIH1cbiAgfVxuXG4gIGdldCBib3JkZXJDb2xvcigpIHtcbiAgICBsZXQgY29sb3IgPSBudWxsO1xuXG4gICAgaWYodGhpcy5jbGlja2VkICYmIHRoaXMuaG92ZXJlZCAmJiB0aGlzLnN0eWxlLmJvcmRlckNvbG9yRG93biAhPSBudWxsKSB7XG4gICAgICBjb2xvciA9IHRoaXMuc3R5bGUuYm9yZGVyQ29sb3JEb3duO1xuICAgIH0gZWxzZSBpZighdGhpcy5jbGlja2VkICYmIHRoaXMuaG92ZXJlZCAmJiB0aGlzLnN0eWxlLmJvcmRlckNvbG9ySG92ZXIgIT0gbnVsbCkge1xuICAgICAgY29sb3IgPSB0aGlzLnN0eWxlLmJvcmRlckNvbG9ySG92ZXI7XG4gICAgfSBlbHNlIGlmKHRoaXMuc2VsZWN0YWJsZSAmJiB0aGlzLnNlbGVjdGVkICYmIHRoaXMuc3R5bGUuYm9yZGVyQ29sb3JTZWxlY3RlZCAhPSBudWxsKSB7XG4gICAgICBjb2xvciA9IHRoaXMuc3R5bGUuYm9yZGVyQ29sb3JTZWxlY3RlZDtcbiAgICB9IGVsc2Uge1xuICAgICAgY29sb3IgPSB0aGlzLnN0eWxlLmJvcmRlckNvbG9yO1xuICAgIH1cblxuICAgIHJldHVybiBjb2xvcjtcbiAgfVxufSIsIi8qXG4gKiBDb3B5cmlnaHQgKEMpIDIwMjAgRWxpYXN0aWsgKGVsaWFzdGlrc29mdHMuY29tKVxuICpcbiAqIFRoaXMgZmlsZSBpcyBwYXJ0IG9mIFwiSlNHYW1lVG9vbHNcIi5cbiAqXG4gKiBcIkpTR2FtZVRvb2xzXCIgaXMgZnJlZSBzb2Z0d2FyZTogeW91IGNhbiByZWRpc3RyaWJ1dGUgaXQgYW5kL29yIG1vZGlmeVxuICogaXQgdW5kZXIgdGhlIHRlcm1zIG9mIHRoZSBHTlUgR2VuZXJhbCBQdWJsaWMgTGljZW5zZSBhcyBwdWJsaXNoZWQgYnlcbiAqIHRoZSBGcmVlIFNvZnR3YXJlIEZvdW5kYXRpb24sIGVpdGhlciB2ZXJzaW9uIDMgb2YgdGhlIExpY2Vuc2UsIG9yXG4gKiAoYXQgeW91ciBvcHRpb24pIGFueSBsYXRlciB2ZXJzaW9uLlxuICpcbiAqIFwiSlNHYW1lVG9vbHNcIiBpcyBkaXN0cmlidXRlZCBpbiB0aGUgaG9wZSB0aGF0IGl0IHdpbGwgYmUgdXNlZnVsLFxuICogYnV0IFdJVEhPVVQgQU5ZIFdBUlJBTlRZOyB3aXRob3V0IGV2ZW4gdGhlIGltcGxpZWQgd2FycmFudHkgb2ZcbiAqIE1FUkNIQU5UQUJJTElUWSBvciBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRS4gIFNlZSB0aGVcbiAqIEdOVSBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlIGZvciBtb3JlIGRldGFpbHMuXG4gKlxuICogWW91IHNob3VsZCBoYXZlIHJlY2VpdmVkIGEgY29weSBvZiB0aGUgR05VIEdlbmVyYWwgUHVibGljIExpY2Vuc2VcbiAqIGFsb25nIHdpdGggXCJKU0dhbWVUb29sc1wiLiAgSWYgbm90LCBzZWUgPGh0dHA6Ly93d3cuZ251Lm9yZy9saWNlbnNlcy8+LlxuICovXG5pbXBvcnQgUm93IGZyb20gXCIuL1Jvd1wiO1xuaW1wb3J0IENvbnN0YW50cyBmcm9tIFwiLi9Db25zdGFudHNcIjtcbmltcG9ydCBTdHlsZSBmcm9tIFwiLi9TdHlsZVwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBCdXR0b24gZXh0ZW5kcyBSb3cge1xuICBzZWxlY3RhYmxlID0gdHJ1ZTtcblxuICBjb25zdHJ1Y3Rvcih4LCB5LCBtYXhXaWR0aCwgbWF4SGVpZ2h0LCBzdHlsZSwgLi4uY29tcG9uZW50cykge1xuICAgIHN1cGVyKHgsIHksIG1heFdpZHRoLCBtYXhIZWlnaHQsIHN0eWxlLCAuLi5jb21wb25lbnRzKTtcbiAgfVxuICBcbiAgZHJhdyhjb250ZXh0KSB7XG4gICAgaWYodGhpcy5oaWRkZW4pIHJldHVybjtcbiAgICBzdXBlci5kcmF3KGNvbnRleHQpO1xuXG4gICAgY29uc3QgY2FudmFzID0gY29udGV4dC5jYW52YXM7XG4gICAgY29uc3QgY3R4ID0gY2FudmFzLmdldENvbnRleHQoXCIyZFwiKTtcbiAgICBjdHguc2F2ZSgpO1xuICAgIFxuICAgIHRoaXMuZHJhd0NvbXBvbmVudHMoY3R4KTtcbiAgICBcbiAgICBjdHgucmVzdG9yZSgpO1xuICB9XG5cbiAgZHJhd0NvbXBvbmVudHMoY3R4KSB7XG4gICAgc3VwZXIuZHJhdyhjdHgpO1xuICB9XG5cbiAgZ2V0IGhlaWdodCgpIHtcbiAgICByZXR1cm4gKHRoaXMubWF4SGVpZ2h0IHx8IHN1cGVyLmhlaWdodCkgKyB0aGlzLnN0eWxlLnBhZGRpbmc7XG4gIH1cblxuICBnZXQgd2lkdGgoKSB7XG4gICAgcmV0dXJuICh0aGlzLm1heFdpZHRoIHx8IHN1cGVyLndpZHRoKSArIHRoaXMuc3R5bGUucGFkZGluZztcbiAgfVxuXG4gIGdldCBkZWZhdWx0U3R5bGUoKSB7XG4gICAgcmV0dXJuIG5ldyBTdHlsZSh7XG4gICAgICBcImJhY2tncm91bmRDb2xvclwiOiBDb25zdGFudHMuU2V0dGluZy5CVVRUT05fREVGQVVMVF9CQUNLR1JPVU5ELFxuICAgICAgXCJiYWNrZ3JvdW5kQ29sb3JIb3ZlclwiOiBDb25zdGFudHMuU2V0dGluZy5CVVRUT05fREVGQVVMVF9IT1ZFUl9CQUNLR1JPVU5ELFxuICAgICAgXCJiYWNrZ3JvdW5kQ29sb3JEb3duXCI6IENvbnN0YW50cy5TZXR0aW5nLkJVVFRPTl9ERUZBVUxUX0NMSUNLX0JBQ0tHUk9VTkQsXG4gICAgICBcInNjcm9sbFhEaXNhYmxlZFwiOiB0cnVlLFxuICAgICAgXCJzY3JvbGxZRGlzYWJsZWRcIjogdHJ1ZVxuICAgIH0pO1xuICB9XG59IiwiLypcbiAqIENvcHlyaWdodCAoQykgMjAyMCBFbGlhc3RpayAoZWxpYXN0aWtzb2Z0cy5jb20pXG4gKlxuICogVGhpcyBmaWxlIGlzIHBhcnQgb2YgXCJKU0dhbWVUb29sc1wiLlxuICpcbiAqIFwiSlNHYW1lVG9vbHNcIiBpcyBmcmVlIHNvZnR3YXJlOiB5b3UgY2FuIHJlZGlzdHJpYnV0ZSBpdCBhbmQvb3IgbW9kaWZ5XG4gKiBpdCB1bmRlciB0aGUgdGVybXMgb2YgdGhlIEdOVSBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlIGFzIHB1Ymxpc2hlZCBieVxuICogdGhlIEZyZWUgU29mdHdhcmUgRm91bmRhdGlvbiwgZWl0aGVyIHZlcnNpb24gMyBvZiB0aGUgTGljZW5zZSwgb3JcbiAqIChhdCB5b3VyIG9wdGlvbikgYW55IGxhdGVyIHZlcnNpb24uXG4gKlxuICogXCJKU0dhbWVUb29sc1wiIGlzIGRpc3RyaWJ1dGVkIGluIHRoZSBob3BlIHRoYXQgaXQgd2lsbCBiZSB1c2VmdWwsXG4gKiBidXQgV0lUSE9VVCBBTlkgV0FSUkFOVFk7IHdpdGhvdXQgZXZlbiB0aGUgaW1wbGllZCB3YXJyYW50eSBvZlxuICogTUVSQ0hBTlRBQklMSVRZIG9yIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFLiAgU2VlIHRoZVxuICogR05VIEdlbmVyYWwgUHVibGljIExpY2Vuc2UgZm9yIG1vcmUgZGV0YWlscy5cbiAqXG4gKiBZb3Ugc2hvdWxkIGhhdmUgcmVjZWl2ZWQgYSBjb3B5IG9mIHRoZSBHTlUgR2VuZXJhbCBQdWJsaWMgTGljZW5zZVxuICogYWxvbmcgd2l0aCBcIkpTR2FtZVRvb2xzXCIuICBJZiBub3QsIHNlZSA8aHR0cDovL3d3dy5nbnUub3JnL2xpY2Vuc2VzLz4uXG4gKi9cbmltcG9ydCBJbWFnZUNvbnRhaW5lciBmcm9tIFwiLi9JbWFnZUNvbnRhaW5lclwiO1xuaW1wb3J0IEJ1dHRvbiBmcm9tIFwiLi9CdXR0b25cIjtcbmltcG9ydCBTdHlsZSBmcm9tIFwiLi9TdHlsZVwiO1xuaW1wb3J0IENvbnN0YW50cyBmcm9tIFwiLi9Db25zdGFudHNcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQnV0dG9uSW1hZ2UgZXh0ZW5kcyBCdXR0b24ge1xuICBjb25zdHJ1Y3RvcihpbWdTcmMsIHgsIHksIGFsaWduZW1lbnQsIHZlcnRpY2FsQWxpZ25lbWVudCwgd2lkdGgsIGhlaWdodCwgYmFja2dyb3VuZENvbG9yLCBiYWNrZ3JvdW5kQ29sb3JIb3ZlciwgaW1hZ2VMb2FkZXIpIHtcbiAgICBjb25zdCBzdHlsZSA9IG5ldyBTdHlsZSh7XG4gICAgICBcImFsaWduZW1lbnRcIjogYWxpZ25lbWVudCxcbiAgICAgIFwidmVydGljYWxBbGlnbmVtZW50XCI6IHZlcnRpY2FsQWxpZ25lbWVudCxcbiAgICAgIFwiYmFja2dyb3VuZENvbG9yXCI6IGJhY2tncm91bmRDb2xvciB8fCBDb25zdGFudHMuU2V0dGluZy5CVVRUT05fREVGQVVMVF9CQUNLR1JPVU5ELFxuICAgICAgXCJiYWNrZ3JvdW5kQ29sb3JIb3ZlclwiOiBiYWNrZ3JvdW5kQ29sb3JIb3ZlciB8fCBDb25zdGFudHMuU2V0dGluZy5CVVRUT05fREVGQVVMVF9IT1ZFUl9CQUNLR1JPVU5EXG4gICAgfSk7XG5cbiAgICBzdXBlcih4LCB5LCB3aWR0aCwgaGVpZ2h0LCBzdHlsZSk7XG4gICAgdGhpcy5pbWFnZSA9IG5ldyBJbWFnZUNvbnRhaW5lcihpbWdTcmMsIHgsIHksIHdpZHRoLCBoZWlnaHQsIG5ldyBTdHlsZSh7IFwiYWxpZ25lbWVudFwiOiBcImNlbnRlclwiLCBcInZlcnRpY2FsQWxpZ25lbWVudFwiOiBcImNlbnRlclwiIH0pLCBpbWFnZUxvYWRlcik7XG4gICAgdGhpcy5hZGQodGhpcy5pbWFnZSk7XG5cbiAgICBjb25zb2xlICYmIGNvbnNvbGUud2FybiAmJiBjb25zb2xlLndhcm4oQ29uc3RhbnRzLlN0cmluZy5OT1RJQ0VfTUVTU0FHRSArIFwiIFwiICsgQ29uc3RhbnRzLlN0cmluZy5CVVRUT05fSU1BR0VfREVQUkVDQVRFRCk7XG4gIH1cblxuICBsb2FkSW1hZ2UoaW1hZ2VMb2FkZXIpIHtcbiAgICBpZih0aGlzLmNvbXBvbmVudHNbMF0gaW5zdGFuY2VvZiBJbWFnZUNvbnRhaW5lcikgdGhpcy5jb21wb25lbnRzWzBdLmxvYWRJbWFnZShpbWFnZUxvYWRlcik7XG4gIH1cblxuICBzZXQgbWluV2lkdGgod2lkdGgpIHtcbiAgICB0aGlzLmltYWdlLndpZHRoID0gd2lkdGg7XG4gICAgc3VwZXIubWluV2lkdGggPSB3aWR0aDtcbiAgfVxuXG4gIHNldCBtaW5IZWlnaHQoaGVpZ2h0KSB7XG4gICAgdGhpcy5pbWFnZS5oZWlnaHQgPSBoZWlnaHQ7XG4gICAgc3VwZXIubWluSGVpZ2h0ID0gaGVpZ2h0O1xuICB9XG5cbiAgZ2V0IG1pbldpZHRoKCkge1xuICAgIHJldHVybiBzdXBlci5taW5XaWR0aDtcbiAgfVxuXG4gIGdldCBtaW5IZWlnaHQoKSB7XG4gICAgcmV0dXJuIHN1cGVyLm1pbkhlaWdodDtcbiAgfVxuXG4gIHNldCBtYXhXaWR0aCh3aWR0aCkge1xuICAgIHRoaXMuaW1hZ2Uud2lkdGggPSB3aWR0aDtcbiAgICBzdXBlci5tYXhXaWR0aCA9IHdpZHRoO1xuICB9XG5cbiAgc2V0IG1heEhlaWdodChoZWlnaHQpIHtcbiAgICB0aGlzLmltYWdlLmhlaWdodCA9IGhlaWdodDtcbiAgICBzdXBlci5tYXhIZWlnaHQgPSBoZWlnaHQ7XG4gIH1cblxuICBnZXQgbWF4V2lkdGgoKSB7XG4gICAgcmV0dXJuIHN1cGVyLm1heFdpZHRoO1xuICB9XG5cbiAgZ2V0IG1heEhlaWdodCgpIHtcbiAgICByZXR1cm4gc3VwZXIubWF4SGVpZ2h0O1xuICB9XG5cbiAgc2V0IHdpZHRoKHdpZHRoKSB7XG4gICAgdGhpcy5taW5XaWR0aCA9IHdpZHRoO1xuICAgIHRoaXMubWF4V2lkdGggPSB3aWR0aDtcbiAgfVxuXG4gIGdldCB3aWR0aCgpIHtcbiAgICByZXR1cm4gc3VwZXIud2lkdGg7XG4gIH1cblxuICBzZXQgaGVpZ2h0KGhlaWdodCkge1xuICAgIHRoaXMubWluSGVpZ2h0ID0gaGVpZ2h0O1xuICAgIHRoaXMubWF4SGVpZ2h0ID0gaGVpZ2h0O1xuICB9XG5cbiAgZ2V0IGhlaWdodCgpIHtcbiAgICByZXR1cm4gc3VwZXIuaGVpZ2h0O1xuICB9XG59IiwiLypcbiAqIENvcHlyaWdodCAoQykgMjAyMCBFbGlhc3RpayAoZWxpYXN0aWtzb2Z0cy5jb20pXG4gKlxuICogVGhpcyBmaWxlIGlzIHBhcnQgb2YgXCJKU0dhbWVUb29sc1wiLlxuICpcbiAqIFwiSlNHYW1lVG9vbHNcIiBpcyBmcmVlIHNvZnR3YXJlOiB5b3UgY2FuIHJlZGlzdHJpYnV0ZSBpdCBhbmQvb3IgbW9kaWZ5XG4gKiBpdCB1bmRlciB0aGUgdGVybXMgb2YgdGhlIEdOVSBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlIGFzIHB1Ymxpc2hlZCBieVxuICogdGhlIEZyZWUgU29mdHdhcmUgRm91bmRhdGlvbiwgZWl0aGVyIHZlcnNpb24gMyBvZiB0aGUgTGljZW5zZSwgb3JcbiAqIChhdCB5b3VyIG9wdGlvbikgYW55IGxhdGVyIHZlcnNpb24uXG4gKlxuICogXCJKU0dhbWVUb29sc1wiIGlzIGRpc3RyaWJ1dGVkIGluIHRoZSBob3BlIHRoYXQgaXQgd2lsbCBiZSB1c2VmdWwsXG4gKiBidXQgV0lUSE9VVCBBTlkgV0FSUkFOVFk7IHdpdGhvdXQgZXZlbiB0aGUgaW1wbGllZCB3YXJyYW50eSBvZlxuICogTUVSQ0hBTlRBQklMSVRZIG9yIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFLiAgU2VlIHRoZVxuICogR05VIEdlbmVyYWwgUHVibGljIExpY2Vuc2UgZm9yIG1vcmUgZGV0YWlscy5cbiAqXG4gKiBZb3Ugc2hvdWxkIGhhdmUgcmVjZWl2ZWQgYSBjb3B5IG9mIHRoZSBHTlUgR2VuZXJhbCBQdWJsaWMgTGljZW5zZVxuICogYWxvbmcgd2l0aCBcIkpTR2FtZVRvb2xzXCIuICBJZiBub3QsIHNlZSA8aHR0cDovL3d3dy5nbnUub3JnL2xpY2Vuc2VzLz4uXG4gKi9cbmltcG9ydCBDb25zdGFudHMgZnJvbSBcIi4vQ29uc3RhbnRzXCI7XG5pbXBvcnQgVXRpbHMgZnJvbSBcIi4vVXRpbHNcIjtcbmltcG9ydCBTY2VuZSBmcm9tIFwiLi9TY2VuZVwiO1xuaW1wb3J0IFJlYWN0b3JDYW52YXMgZnJvbSBcIi4vUmVhY3RvckNhbnZhc1wiO1xuaW1wb3J0IEVycm9yU2NyZWVuIGZyb20gXCIuL0Vycm9yU2NyZWVuXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIENhbnZhcyB7XG4gICNsYXN0RnJhbWVUaW1lO1xuICAjX3dpZHRoO1xuICAjX2hlaWdodDtcblxuICBjb25zdHJ1Y3RvcihzY2VuZSwgY2FudmFzLCB3aWR0aCwgaGVpZ2h0LCBhdXRvUmVzaXplLCBtYXhGUFMpIHtcbiAgICB0aGlzLmNhbnZhcyA9IGNhbnZhcyB8fCBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiY2FudmFzXCIpO1xuICAgIHRoaXMuY29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICB0aGlzLndpZHRoID0gd2lkdGggfHwgQ29uc3RhbnRzLlNldHRpbmcuQ0FOVkFTX1dJRFRIO1xuICAgIHRoaXMuaGVpZ2h0ID0gaGVpZ2h0IHx8IENvbnN0YW50cy5TZXR0aW5nLkNBTlZBU19IRUlHSFQ7XG4gICAgdGhpcy5zY2VuZSA9IHNjZW5lO1xuICAgIHRoaXMuY29udGFpbmVyLmFwcGVuZENoaWxkKHRoaXMuY2FudmFzKTtcbiAgICB0aGlzLnN0YXJ0ZWQgPSBmYWxzZTtcbiAgICB0aGlzLmluaXQgPSBmYWxzZTtcbiAgICB0aGlzLm1heEZQUyA9IG1heEZQUyB8fCAtMTtcbiAgICB0aGlzLiNsYXN0RnJhbWVUaW1lID0gMDtcbiAgICB0aGlzLmhhc0Vycm9yID0gZmFsc2U7XG4gICAgdGhpcy5mdWxsc2NyZWVuID0gZmFsc2U7XG4gICAgdGhpcy5mdWxscGFnZSA9IGZhbHNlO1xuXG4gICAgLy8gRXJyb3IgbWVzc2FnZSBzY3JlZW5cbiAgICB0aGlzLnNjZW5lRXJyb3IgPSBuZXcgRXJyb3JTY3JlZW4odGhpcyk7XG4gICAgdGhpcy5zY2VuZVByZXZpb3VzID0gdGhpcy5zY2VuZTtcbiAgICBcbiAgICAvLyBSZWFjdG9ycy9ldmVudHNcbiAgICB0aGlzLnJlYWN0b3IgPSBuZXcgUmVhY3RvckNhbnZhcygpO1xuICAgIHRoaXMucmVhY3Rvci5yZWdpc3RlckV2ZW50KFwibW91c2Vtb3ZlXCIpO1xuICAgIHRoaXMucmVhY3Rvci5yZWdpc3RlckV2ZW50KFwiY2xpY2tcIik7XG4gICAgdGhpcy5yZWFjdG9yLnJlZ2lzdGVyRXZlbnQoXCJtb3VzZWRvd25cIik7XG4gICAgdGhpcy5yZWFjdG9yLnJlZ2lzdGVyRXZlbnQoXCJtb3VzZXVwXCIpO1xuICAgIHRoaXMucmVhY3Rvci5yZWdpc3RlckV2ZW50KFwid2hlZWxcIik7XG4gICAgdGhpcy5yZWFjdG9yLnJlZ2lzdGVyRXZlbnQoXCJ0b3VjaHN0YXJ0XCIpO1xuICAgIHRoaXMucmVhY3Rvci5yZWdpc3RlckV2ZW50KFwidG91Y2hlbmRcIik7XG4gICAgdGhpcy5yZWFjdG9yLnJlZ2lzdGVyRXZlbnQoXCJ0b3VjaG1vdmVcIik7XG5cbiAgICBpZihhdXRvUmVzaXplKSB0aGlzLmF1dG9SZXNpemUoKTtcbiAgICB0aGlzLmNyZWF0ZUV2ZW50cygpO1xuXG4gICAgaWYoQ29uc3RhbnRzLlNldHRpbmcuRElTQUJMRV9PUFRJTUlaQVRJT05TKSB7XG4gICAgICBjb25zb2xlICYmIGNvbnNvbGUuaW5mbyhDb25zdGFudHMuU3RyaW5nLk5PVElDRV9NRVNTQUdFICsgXCIgXCIgKyBDb25zdGFudHMuU3RyaW5nLk9QVElNSVpBVElPTl9ESVNBQkxFRCk7XG4gICAgfVxuXG4gICAgaWYoQ29uc3RhbnRzLlNldHRpbmcuRElTQUJMRV9DT05UQUlORVJTX0NVVFRJTkcpIHtcbiAgICAgIGNvbnNvbGUgJiYgY29uc29sZS5pbmZvKENvbnN0YW50cy5TdHJpbmcuTk9USUNFX01FU1NBR0UgKyBcIiBcIiArIENvbnN0YW50cy5TdHJpbmcuQ09OVEFJTkVSX0NVVFRJTkdfRElTQUJMRUQpO1xuICAgIH1cbiAgfVxuXG4gIGRyYXcoKSB7XG4gICAgY29uc3QgY3R4ID0gdGhpcy5jYW52YXMuZ2V0Q29udGV4dChcIjJkXCIpO1xuICAgIHRoaXMuZHJhd0NsZWFyKGN0eCk7XG4gICAgdGhpcy5kcmF3U2NlbmUoY3R4KTtcbiAgfVxuXG4gIGRyYXdTY2VuZShjdHgpIHtcbiAgICBpZih0aGlzLnNjZW5lKSB7XG4gICAgICB0aGlzLnNjZW5lLnBhcmVudCA9IHRoaXM7XG4gICAgICB0aGlzLnNjZW5lLmNhbnZhcyA9IHRoaXM7XG5cbiAgICAgIHRyeSB7XG4gICAgICAgIGN0eC5zY2FsZShDb25zdGFudHMuU2V0dGluZy5QSVhFTF9SQVRJTywgQ29uc3RhbnRzLlNldHRpbmcuUElYRUxfUkFUSU8pO1xuICAgICAgICB0aGlzLnNjZW5lLmRyYXcoY3R4KTtcbiAgICAgIH0gY2F0Y2goZSkge1xuICAgICAgICB0aGlzLmhhc0Vycm9yID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5zY2VuZSA9IHRoaXMuc2NlbmVFcnJvcjtcbiAgICAgICAgdGhpcy5zY2VuZUVycm9yLmVycm9yVGV4dCA9IFwiXCIgKyBlLnN0YWNrO1xuICAgICAgICBjb25zb2xlLmVycm9yKENvbnN0YW50cy5TdHJpbmcuRVJST1JfTUVTU0FHRSArIFwiIFwiICsgQ29uc3RhbnRzLlN0cmluZy5FUlJPUl9NRVNTQUdFX0NBTlZBUyArIFwiXFxuXCIsIGUpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIGRyYXdDbGVhcihjdHgpIHtcbiAgICBVdGlscy5jbGVhcihjdHgpO1xuICB9XG5cbiAgc3RhcnREcmF3KGZ1bmMpIHtcbiAgICB0aGlzLnN0YXJ0ZWQgPSB0cnVlO1xuXG4gICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKHRpbWUgPT4ge1xuICAgICAgaWYodGhpcy5zdGFydGVkKSB7XG4gICAgICAgIGNvbnN0IG9mZnNldEZyYW1lID0gdGltZSAtIHRoaXMuI2xhc3RGcmFtZVRpbWU7XG5cbiAgICAgICAgdGhpcy5mdWxsc2NyZWVuID0gZG9jdW1lbnQuZnVsbHNjcmVlbkVsZW1lbnQgPT0gdGhpcy5jYW52YXMgfHwgZG9jdW1lbnQuZnVsbHNjcmVlbkVsZW1lbnQgPT0gdGhpcy5jb250YWluZXI7XG5cbiAgICAgICAgaWYoQ29uc3RhbnRzLlNldHRpbmcuRU5BQkxFX1BJWEVMX1JBVElPX1JFU0laSU5HKSB7XG4gICAgICAgICAgQ29uc3RhbnRzLlNldHRpbmcuUElYRUxfUkFUSU8gPSB3aW5kb3cuZGV2aWNlUGl4ZWxSYXRpbyAqIENvbnN0YW50cy5TZXR0aW5nLlJFU09MVVRJT05fU0NBTEU7IC8vIFVwZGF0ZSB0aGUgZGV2aWNlIHBpeGVsIHJhdGlvLCBvbmx5IGluIGZ1bGxzY3JlZW4gbW9kZS9mdWxscGFnZSBtb2RlXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgQ29uc3RhbnRzLlNldHRpbmcuUElYRUxfUkFUSU8gPSAxICogQ29uc3RhbnRzLlNldHRpbmcuUkVTT0xVVElPTl9TQ0FMRTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmKHRoaXMubWF4RlBTIDwgMSB8fCBvZmZzZXRGcmFtZSA+IDEwMDAgLyB0aGlzLm1heEZQUykge1xuICAgICAgICAgIFV0aWxzLmF1dG9EUEkodGhpcy5jYW52YXMpO1xuICAgICAgICAgIHRoaXMuI2xhc3RGcmFtZVRpbWUgPSB0aW1lO1xuICAgICAgICAgIHRoaXMuZHJhdygpO1xuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICB0aGlzLnN0YXJ0RHJhdyhmdW5jKTtcbiAgICAgICAgaWYoZnVuYykgZnVuYygpO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgc3RvcERyYXcoKSB7XG4gICAgdGhpcy5zdGFydGVkID0gZmFsc2U7XG4gIH1cblxuICBhcHBlbmRUbyhlbGVtZW50KSB7XG4gICAgZWxlbWVudC5hcHBlbmRDaGlsZCh0aGlzLmNvbnRhaW5lcik7XG4gIH1cblxuICByZW1vdmUoZWxlbWVudCkge1xuICAgIGVsZW1lbnQucmVtb3ZlQ2hpbGQodGhpcy5jb250YWluZXIpO1xuICAgIHRoaXMuY29udGFpbmVyLnJlbW92ZUNoaWxkKHRoaXMuY2FudmFzKTtcbiAgfVxuXG4gIHRvZ2dsZUZ1bGxzY3JlZW4oKSB7XG4gICAgVXRpbHMudG9nZ2xlRnVsbHNjcmVlbih0aGlzLmNhbnZhcywgdGhpcy5jb250YWluZXIpO1xuICB9XG5cbiAgdG9nZ2xlRnVsbHBhZ2UoKSB7XG4gICAgVXRpbHMudG9nZ2xlRnVsbHBhZ2UodGhpcy5jYW52YXMsIHRoaXMuY29udGFpbmVyKTtcbiAgICB0aGlzLmZ1bGxwYWdlID0gIXRoaXMuZnVsbHBhZ2U7XG4gIH1cblxuICBhdXRvUmVzaXplKCkge1xuICAgIFV0aWxzLmVuYWJsZUF1dG9SZXNpemVDYW52YXModGhpcy5jYW52YXMsIHRoaXMuY29udGFpbmVyLCB0aGlzLndpZHRoLCB0aGlzLmhlaWdodCk7XG4gIH1cblxuICBnZXQgeCgpIHtcbiAgICByZXR1cm4gMDtcbiAgfVxuXG4gIGdldCB5KCkge1xuICAgIHJldHVybiAwO1xuICB9XG5cbiAgZ2V0IHdpZHRoKCkge1xuICAgIHJldHVybiB0aGlzLmNhbnZhcyA/IFV0aWxzLmdldENhbnZhc1dpZHRoKHRoaXMuY2FudmFzKSA6IHRoaXMuI193aWR0aDtcbiAgfVxuXG4gIGdldCBoZWlnaHQoKSB7XG4gICAgcmV0dXJuIHRoaXMuY2FudmFzID8gVXRpbHMuZ2V0Q2FudmFzSGVpZ2h0KHRoaXMuY2FudmFzKSA6IHRoaXMuI19oZWlnaHQ7XG4gIH1cblxuICBnZXQgc3R5bGUoKSB7XG4gICAgcmV0dXJuIHRoaXMuY2FudmFzID8gdGhpcy5jYW52YXMuc3R5bGUgOiBudWxsO1xuICB9XG5cbiAgc2V0IHdpZHRoKHdpZHRoKSB7XG4gICAgaWYod2lkdGggIT0gdGhpcy4jX3dpZHRoKSB7XG4gICAgICB0aGlzLiNfd2lkdGggPSB3aWR0aDtcbiAgICAgIHRoaXMuY2FudmFzLndpZHRoID0gd2lkdGg7XG4gICAgICB0aGlzLnNjZW5lICYmIHRoaXMuc2NlbmUucmVhY3Rvci5kaXNwYXRjaEV2ZW50KFwib25DaGFuZ2VcIiwgdGhpcyk7XG4gICAgfVxuICB9XG5cbiAgc2V0IGhlaWdodChoZWlnaHQpIHtcbiAgICBpZihoZWlnaHQgIT0gdGhpcy4jX2hlaWdodCkge1xuICAgICAgdGhpcy4jX2hlaWdodCA9IGhlaWdodDtcbiAgICAgIHRoaXMuY2FudmFzLmhlaWdodCA9IGhlaWdodDtcbiAgICAgIHRoaXMuc2NlbmUgJiYgdGhpcy5zY2VuZS5yZWFjdG9yLmRpc3BhdGNoRXZlbnQoXCJvbkNoYW5nZVwiLCB0aGlzKTtcbiAgICB9XG4gIH1cblxuICBzZXQgY3Vyc29yKGN1cnNvcikge1xuICAgIGlmKHRoaXMuY2FudmFzKSB0aGlzLmNhbnZhcy5zdHlsZS5jdXJzb3IgPSBjdXJzb3I7XG4gIH1cblxuICBnZXQgY3Vyc29yKCkge1xuICAgIHJldHVybiB0aGlzLmNhbnZhcyA/IHRoaXMuY2FudmFzLnN0eWxlLmN1cnNvciA6IFwiXCI7XG4gIH1cblxuICBnZXRDb250ZXh0KGNvbnRleHQpIHtcbiAgICByZXR1cm4gdGhpcy5jYW52YXMgPyB0aGlzLmNhbnZhcy5nZXRDb250ZXh0KGNvbnRleHQgPyBjb250ZXh0IDogXCIyZFwiKSA6IG51bGw7XG4gIH1cblxuICBjcmVhdGVFdmVudHMoKSB7XG4gICAgaWYoIXRoaXMuaW5pdCAmJiB0aGlzLmNhbnZhcykge1xuICAgICAgW1wibW91c2Vtb3ZlXCIsIFwiY2xpY2tcIiwgXCJtb3VzZWRvd25cIiwgXCJtb3VzZXVwXCIsIFwid2hlZWxcIl0uZm9yRWFjaChldmVudE5hbWUgPT4ge1xuICAgICAgICB0aGlzLmNhbnZhcy5hZGRFdmVudExpc3RlbmVyKGV2ZW50TmFtZSwgZXZlbnQgPT4ge1xuICAgICAgICAgIGNvbnN0IG1vdXNlUG9zaXRpb24gPSB0aGlzLmdldE1vdXNlUG9zKGV2ZW50KTtcbiAgICAgICAgICB0aGlzLmRvRXZlbnRzKGV2ZW50LCBldmVudE5hbWUsIG1vdXNlUG9zaXRpb24pO1xuICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIH0sIGZhbHNlKTtcbiAgICAgIH0pO1xuXG4gICAgICBbXCJ0b3VjaHN0YXJ0XCIsIFwidG91Y2htb3ZlXCIsIFwidG91Y2hlbmRcIl0uZm9yRWFjaChldmVudE5hbWUgPT4ge1xuICAgICAgICB0aGlzLmNhbnZhcy5hZGRFdmVudExpc3RlbmVyKGV2ZW50TmFtZSwgZXZlbnQgPT4ge1xuICAgICAgICAgIGNvbnN0IGNoYW5nZWRUb3VjaGVzID0gZXZlbnQuY2hhbmdlZFRvdWNoZXNbMF07XG4gICAgICAgICAgY29uc3QgcG9zaXRpb24gPSB0aGlzLmdldE1vdXNlUG9zKGNoYW5nZWRUb3VjaGVzKTtcbiAgICAgICAgICB0aGlzLmRvRXZlbnRzKGV2ZW50LCBldmVudE5hbWUsIHBvc2l0aW9uKTtcbiAgICAgICAgfSk7XG4gICAgICB9KTtcblxuICAgICAgdGhpcy5pbml0ID0gdHJ1ZTtcbiAgICB9XG4gIH1cblxuICBkb0V2ZW50cyhldmVudCwgZXZlbnROYW1lLCBwb3NpdGlvbikge1xuICAgIGNvbnN0IGNvbXBvbmVudHMgPSB0aGlzLmdldENvbXBvbmVudHNBdFBvc2l0aW9uKHBvc2l0aW9uKTsgLy8gR2V0IGFsbCBlbGVtZW50cyBhdCB0aGUgY3VycmVudCBwb3NpdGlvblxuICAgIHRoaXMucmVhY3Rvci5kaXNwYXRjaEV2ZW50KGV2ZW50TmFtZSwgZXZlbnQsIGZhbHNlKTsgLy8gRGlzcGF0Y2ggdG8gYWxsIGNvbXBvbmVudHMgdG8gZGlzYWJsZSB0aGVtIChjYWxsIHdpdGggZmFsc2UpXG4gICAgWy4uLmNvbXBvbmVudHNdLnJldmVyc2UoKS5mb3JFYWNoKGNvbXBvbmVudCA9PiB0aGlzLnJlYWN0b3IuZGlzcGF0Y2hFdmVudENvbXBvbmVudChldmVudE5hbWUsIGNvbXBvbmVudCwgZXZlbnQsIHRydWUpKTsgLy8gRGlzcGF0Y2ggdG8gY29tcG9uZW50IGRldGVjdGVkIHRvIGVuYWJsZSB0aGVtIChjYWxsIHdpdGggdHJ1ZSlcbiAgfVxuXG4gIGFkZEV2ZW50TGlzdGVuZXIoZXZlbnQsIGNvbXBvbmVudCwgY2FsbGJhY2spIHtcbiAgICB0aGlzLnJlYWN0b3IuYWRkRXZlbnRMaXN0ZW5lcihldmVudCwgY29tcG9uZW50LCBjYWxsYmFjayk7XG4gIH1cbiAgXG4gIGdldE1vdXNlUG9zKGV2ZW50KSB7XG4gICAgcmV0dXJuIFV0aWxzLmdldE1vdXNlUG9zKHRoaXMuY2FudmFzLCBldmVudCk7XG4gIH1cblxuICBnZXRBbGxDb21wb25lbnRzKHN0YXJ0ID0gdGhpcy5zY2VuZSkge1xuICAgIHJldHVybiB0aGlzLnNjZW5lLmdldEFsbENvbXBvbmVudHMoc3RhcnQpO1xuICB9XG5cbiAgZ2V0Q29tcG9uZW50c0F0UG9zaXRpb24obW91c2VQb3NpdGlvbiwgc3RhcnQgPSB0aGlzLnNjZW5lKSB7XG4gICAgY29uc3QgYWxsQ29tcG9uZW50cyA9IHRoaXMuc2NlbmUuZ2V0Q29tcG9uZW50c1RyZWUoc3RhcnQpO1xuICAgIGNvbnN0IHJlc3VsdCA9IFtzdGFydF07XG5cbiAgICBpZihhbGxDb21wb25lbnRzLmNoaWxkcykge1xuICAgICAgYWxsQ29tcG9uZW50cy5jaGlsZHMuc29ydChTY2VuZS5zb3J0Q29tcG9uZW50c1RyZWUpLnJldmVyc2UoKS5zb21lKGNoaWxkID0+IHtcbiAgICAgICAgaWYoY2hpbGQuY29tcG9uZW50LmlzSW5zaWRlKG1vdXNlUG9zaXRpb24pICYmICFjaGlsZC5jb21wb25lbnQuaGlkZGVuICYmICFjaGlsZC5jb21wb25lbnQuZGlzYWJsZWQpIHtcbiAgICAgICAgICByZXN1bHQucHVzaCguLi50aGlzLmdldENvbXBvbmVudHNBdFBvc2l0aW9uKG1vdXNlUG9zaXRpb24sIGNoaWxkLmNvbXBvbmVudCkpO1xuICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9XG5cbiAgICByZXR1cm4gcmVzdWx0O1xuICB9XG59IiwiLypcbiAqIENvcHlyaWdodCAoQykgMjAyMCBFbGlhc3RpayAoZWxpYXN0aWtzb2Z0cy5jb20pXG4gKlxuICogVGhpcyBmaWxlIGlzIHBhcnQgb2YgXCJKU0dhbWVUb29sc1wiLlxuICpcbiAqIFwiSlNHYW1lVG9vbHNcIiBpcyBmcmVlIHNvZnR3YXJlOiB5b3UgY2FuIHJlZGlzdHJpYnV0ZSBpdCBhbmQvb3IgbW9kaWZ5XG4gKiBpdCB1bmRlciB0aGUgdGVybXMgb2YgdGhlIEdOVSBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlIGFzIHB1Ymxpc2hlZCBieVxuICogdGhlIEZyZWUgU29mdHdhcmUgRm91bmRhdGlvbiwgZWl0aGVyIHZlcnNpb24gMyBvZiB0aGUgTGljZW5zZSwgb3JcbiAqIChhdCB5b3VyIG9wdGlvbikgYW55IGxhdGVyIHZlcnNpb24uXG4gKlxuICogXCJKU0dhbWVUb29sc1wiIGlzIGRpc3RyaWJ1dGVkIGluIHRoZSBob3BlIHRoYXQgaXQgd2lsbCBiZSB1c2VmdWwsXG4gKiBidXQgV0lUSE9VVCBBTlkgV0FSUkFOVFk7IHdpdGhvdXQgZXZlbiB0aGUgaW1wbGllZCB3YXJyYW50eSBvZlxuICogTUVSQ0hBTlRBQklMSVRZIG9yIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFLiAgU2VlIHRoZVxuICogR05VIEdlbmVyYWwgUHVibGljIExpY2Vuc2UgZm9yIG1vcmUgZGV0YWlscy5cbiAqXG4gKiBZb3Ugc2hvdWxkIGhhdmUgcmVjZWl2ZWQgYSBjb3B5IG9mIHRoZSBHTlUgR2VuZXJhbCBQdWJsaWMgTGljZW5zZVxuICogYWxvbmcgd2l0aCBcIkpTR2FtZVRvb2xzXCIuICBJZiBub3QsIHNlZSA8aHR0cDovL3d3dy5nbnUub3JnL2xpY2Vuc2VzLz4uXG4gKi9cbmltcG9ydCBDb21wb25lbnQgZnJvbSBcIi4vQ29tcG9uZW50XCI7XG5pbXBvcnQgQ29uc3RhbnRzIGZyb20gXCIuL0NvbnN0YW50c1wiO1xuaW1wb3J0IFV0aWxzIGZyb20gXCIuL1V0aWxzXCI7XG5pbXBvcnQgU3R5bGUgZnJvbSBcIi4vU3R5bGVcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ2lyY2xlIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgc2VsZWN0YWJsZSA9IGZhbHNlO1xuXG4gIGNvbnN0cnVjdG9yKHgsIHksIHdpZHRoLCBzdHlsZSkge1xuICAgIHN1cGVyKHgsIHksIHdpZHRoLCB3aWR0aCwgc3R5bGUpO1xuICB9XG5cbiAgZHJhdyhjb250ZXh0KSB7XG4gICAgaWYodGhpcy5oaWRkZW4pIHJldHVybjtcbiAgICBzdXBlci5kcmF3KGNvbnRleHQpO1xuXG4gICAgY29uc3QgY2FudmFzID0gY29udGV4dC5jYW52YXM7XG4gICAgY29uc3QgY3R4ID0gY2FudmFzLmdldENvbnRleHQoXCIyZFwiKTtcbiAgICBcbiAgICBVdGlscy5kcmF3Q2lyY2xlKGN0eCwgdGhpcy54LCB0aGlzLnksIHRoaXMud2lkdGgsIHRoaXMuc3R5bGUubGluZVdpZHRoLCB0aGlzLnN0eWxlLmNvbG9yLCB0aGlzLnN0eWxlLmxpbmVDYXAsIHRoaXMuc3R5bGUuZmlsbCwgdGhpcy5zdHlsZS5maWxsQ29sb3IpO1xuXG4gICAgdGhpcy5pbml0ID0gdHJ1ZTtcbiAgfVxuXG4gIGdldCB3aWR0aCgpIHtcbiAgICByZXR1cm4gc3VwZXIud2lkdGggKyB0aGlzLnN0eWxlLmxpbmVXaWR0aDtcbiAgfVxuXG4gIGdldCBoZWlnaHQoKSB7XG4gICAgcmV0dXJuIHN1cGVyLmhlaWdodCArIHRoaXMuc3R5bGUubGluZVdpZHRoO1xuICB9XG5cbiAgc2V0IHdpZHRoKHdpZHRoKSB7XG4gICAgc3VwZXIud2lkdGggPSB3aWR0aDtcbiAgfVxuXG4gIHNldCBoZWlnaHQoaGVpZ2h0KSB7XG4gICAgc3VwZXIuaGVpZ2h0ID0gaGVpZ2h0O1xuICB9XG5cbiAgZ2V0IGRlZmF1bHRTdHlsZSgpIHtcbiAgICByZXR1cm4gbmV3IFN0eWxlKHtcbiAgICAgIFwibGluZVdpZHRoXCI6IENvbnN0YW50cy5TZXR0aW5nLkNJUkNMRV9ERUZBVUxUX0xJTkVfU0laRSxcbiAgICAgIFwiY29sb3JcIjogQ29uc3RhbnRzLlNldHRpbmcuQ0lSQ0xFX0RFRkFVTFRfQ09MT1IsXG4gICAgICBcImZpbGxcIjogQ29uc3RhbnRzLlNldHRpbmcuQ0lSQ0xFX0RFRkFVTFRfRklMTCxcbiAgICAgIFwibGluZUNhcFwiOiBDb25zdGFudHMuU2V0dGluZy5DSVJDTEVfREVGQVVMVF9MSU5FX0NBUCxcbiAgICAgIFwiZmlsbENvbG9yXCI6IENvbnN0YW50cy5TZXR0aW5nLkNJUkNMRV9ERUZBVUxUX0ZJTExfQ09MT1JcbiAgICB9KTtcbiAgfVxufSIsIi8qXG4gKiBDb3B5cmlnaHQgKEMpIDIwMjAgRWxpYXN0aWsgKGVsaWFzdGlrc29mdHMuY29tKVxuICpcbiAqIFRoaXMgZmlsZSBpcyBwYXJ0IG9mIFwiSlNHYW1lVG9vbHNcIi5cbiAqXG4gKiBcIkpTR2FtZVRvb2xzXCIgaXMgZnJlZSBzb2Z0d2FyZTogeW91IGNhbiByZWRpc3RyaWJ1dGUgaXQgYW5kL29yIG1vZGlmeVxuICogaXQgdW5kZXIgdGhlIHRlcm1zIG9mIHRoZSBHTlUgR2VuZXJhbCBQdWJsaWMgTGljZW5zZSBhcyBwdWJsaXNoZWQgYnlcbiAqIHRoZSBGcmVlIFNvZnR3YXJlIEZvdW5kYXRpb24sIGVpdGhlciB2ZXJzaW9uIDMgb2YgdGhlIExpY2Vuc2UsIG9yXG4gKiAoYXQgeW91ciBvcHRpb24pIGFueSBsYXRlciB2ZXJzaW9uLlxuICpcbiAqIFwiSlNHYW1lVG9vbHNcIiBpcyBkaXN0cmlidXRlZCBpbiB0aGUgaG9wZSB0aGF0IGl0IHdpbGwgYmUgdXNlZnVsLFxuICogYnV0IFdJVEhPVVQgQU5ZIFdBUlJBTlRZOyB3aXRob3V0IGV2ZW4gdGhlIGltcGxpZWQgd2FycmFudHkgb2ZcbiAqIE1FUkNIQU5UQUJJTElUWSBvciBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRS4gIFNlZSB0aGVcbiAqIEdOVSBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlIGZvciBtb3JlIGRldGFpbHMuXG4gKlxuICogWW91IHNob3VsZCBoYXZlIHJlY2VpdmVkIGEgY29weSBvZiB0aGUgR05VIEdlbmVyYWwgUHVibGljIExpY2Vuc2VcbiAqIGFsb25nIHdpdGggXCJKU0dhbWVUb29sc1wiLiAgSWYgbm90LCBzZWUgPGh0dHA6Ly93d3cuZ251Lm9yZy9saWNlbnNlcy8+LlxuICovXG5pbXBvcnQgQ29tcG9uZW50IGZyb20gXCIuL0NvbXBvbmVudFwiO1xuaW1wb3J0IENvbnRhaW5lciBmcm9tIFwiLi9Db250YWluZXJcIjtcbmltcG9ydCBVdGlscyBmcm9tIFwiLi9VdGlsc1wiO1xuaW1wb3J0IENvbnN0YW50cyBmcm9tIFwiLi9Db25zdGFudHNcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ29sIGV4dGVuZHMgQ29udGFpbmVyIHtcbiAgc2VsZWN0YWJsZSA9IGZhbHNlO1xuICAjX2lubmVySGVpZ2h0ID0gMDtcbiAgI19pbm5lcldpZHRoID0gMDtcblxuICBjb25zdHJ1Y3Rvcih4LCB5LCBtYXhXaWR0aCwgbWF4SGVpZ2h0LCBzdHlsZSwgLi4uY29tcG9uZW50cykge1xuICAgIHN1cGVyKHgsIHksIG1heFdpZHRoLCBtYXhIZWlnaHQsIHN0eWxlLCAuLi5jb21wb25lbnRzKTtcblxuICAgIGlmKCFDb25zdGFudHMuU2V0dGluZy5ESVNBQkxFX0VYUEVSSU1FTlRBTF9PUFRJTUlaQVRJT05TKSB7XG4gICAgICB0aGlzLnVwZGF0ZUlubmVyV2lkdGgoKTtcbiAgICAgIHRoaXMudXBkYXRlSW5uZXJIZWlnaHQoKTtcbiAgXG4gICAgICB0aGlzLmFkZENoYW5nZUFjdGlvbigoKSA9PiB7XG4gICAgICAgIHRoaXMudXBkYXRlSW5uZXJXaWR0aCgpO1xuICAgICAgICB0aGlzLnVwZGF0ZUlubmVySGVpZ2h0KCk7XG4gICAgICB9KTtcbiAgICB9XG4gIH1cblxuICBkcmF3KGNvbnRleHQpIHtcbiAgICBpZih0aGlzLmhpZGRlbikgcmV0dXJuO1xuICAgIHN1cGVyLmRyYXcoY29udGV4dCk7XG5cbiAgICBjb25zdCBjYW52YXMgPSBjb250ZXh0LmNhbnZhcztcbiAgICBjb25zdCBjdHggPSBjYW52YXMuZ2V0Q29udGV4dChcIjJkXCIpO1xuICAgIGN0eC5zYXZlKCk7XG5cbiAgICBsZXQgY3R4VGVtcCA9IGN0eDtcblxuICAgIGlmKHRoaXMuaXNDdXR0aW5nKSB7XG4gICAgICBjdHhUZW1wID0gdGhpcy5jYW52YXNUbXAuZ2V0Q29udGV4dChcIjJkXCIpO1xuICAgICAgY3R4VGVtcC5zY2FsZShDb25zdGFudHMuU2V0dGluZy5QSVhFTF9SQVRJTywgQ29uc3RhbnRzLlNldHRpbmcuUElYRUxfUkFUSU8pO1xuICAgIH1cbiAgXG4gICAgaWYoc3VwZXIuY29tcG9uZW50cyAhPSBudWxsKSB7XG4gICAgICBsZXQgY3VycmVudFkgPSB0aGlzLnN0eWxlLnBhZGRpbmc7XG5cbiAgICAgIHN1cGVyLmNvbXBvbmVudHMuZm9yRWFjaChjb21wb25lbnQgPT4ge1xuICAgICAgICBjdXJyZW50WSA9IHRoaXMuZHJhd0NvbXBvbmVudChjb21wb25lbnQsIGN1cnJlbnRZLCBjdHhUZW1wKTtcbiAgICAgIH0pO1xuICAgIH1cbiAgICBcbiAgICBpZih0aGlzLmlzQ3V0dGluZykge1xuICAgICAgVXRpbHMuZHJhd0ltYWdlRGF0YShjdHgsIHRoaXMuY2FudmFzVG1wLCB0aGlzLngsIHRoaXMueSwgdGhpcy53aWR0aCwgdGhpcy5oZWlnaHQsIHRoaXMueCAqIENvbnN0YW50cy5TZXR0aW5nLlBJWEVMX1JBVElPLCB0aGlzLnkgKiBDb25zdGFudHMuU2V0dGluZy5QSVhFTF9SQVRJTywgdGhpcy53aWR0aCAqIENvbnN0YW50cy5TZXR0aW5nLlBJWEVMX1JBVElPLCB0aGlzLmhlaWdodCAqIENvbnN0YW50cy5TZXR0aW5nLlBJWEVMX1JBVElPKTtcbiAgICB9XG4gICAgXG4gICAgc3VwZXIuZHJhd1Njcm9sbGJhcnMoY3R4KTtcbiAgICBcbiAgICBjdHgucmVzdG9yZSgpO1xuICB9XG5cbiAgZHJhd0NvbXBvbmVudChjb21wb25lbnQsIGN1cnJlbnRZLCBjdHgpIHtcbiAgICBpZihjb21wb25lbnQgaW5zdGFuY2VvZiBDb21wb25lbnQpIHtcbiAgICAgIGNvbXBvbmVudC54ID0gdGhpcy5zdHlsZS5wYWRkaW5nIC0gdGhpcy5vZmZzZXRTY3JvbGxYO1xuICAgICAgY29tcG9uZW50LnkgPSBjdXJyZW50WSAtIHRoaXMub2Zmc2V0U2Nyb2xsWTtcbiAgICAgIFxuICAgICAgaWYoIWNvbXBvbmVudC5oaWRkZW4pIHtcbiAgICAgICAgaWYodGhpcy5pc0NvbXBvbmVudFZpc2libGUoY29tcG9uZW50KSkge1xuICAgICAgICAgIGNvbXBvbmVudC5kcmF3KGN0eCk7XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgIGN1cnJlbnRZICs9IGNvbXBvbmVudC5oZWlnaHQgKyB0aGlzLnN0eWxlLnNwYWNlQmV0d2VlbkNvbXBvbmVudHM7XG4gICAgICB9XG4gICAgfVxuICAgIFxuICAgIHJldHVybiBjdXJyZW50WTtcbiAgfVxuXG4gIHVwZGF0ZUlubmVySGVpZ2h0KCkge1xuICAgIGxldCB0b3RhbEhlaWdodCA9IDA7XG4gICAgc3VwZXIuY29tcG9uZW50cy5mb3JFYWNoKGNvbXBvbmVudCA9PiB7IGlmKCFjb21wb25lbnQuaGlkZGVuKSB0b3RhbEhlaWdodCArPSBjb21wb25lbnQuaGVpZ2h0IH0pO1xuICAgIHRoaXMuI19pbm5lckhlaWdodCA9IHRvdGFsSGVpZ2h0ICsgdGhpcy5zdHlsZS5zcGFjZUJldHdlZW5Db21wb25lbnRzICogKHN1cGVyLmNvbXBvbmVudHMubGVuZ3RoIC0gMSkgKyB0aGlzLnN0eWxlLnBhZGRpbmc7XG4gIH1cblxuICB1cGRhdGVJbm5lcldpZHRoKCkge1xuICAgIGxldCBtYXhXaWR0aCA9IDA7XG4gICAgc3VwZXIuY29tcG9uZW50cy5mb3JFYWNoKGNvbXBvbmVudCA9PiB7IGlmKGNvbXBvbmVudC53aWR0aCA+IG1heFdpZHRoICYmICFjb21wb25lbnQuaGlkZGVuKSBtYXhXaWR0aCA9IGNvbXBvbmVudC53aWR0aDsgfSk7XG4gICAgdGhpcy4jX2lubmVyV2lkdGggPSBtYXhXaWR0aCArIHRoaXMuc3R5bGUucGFkZGluZztcbiAgfVxuXG4gIGdldCBpbm5lckhlaWdodCgpIHtcbiAgICBpZihDb25zdGFudHMuU2V0dGluZy5ESVNBQkxFX0VYUEVSSU1FTlRBTF9PUFRJTUlaQVRJT05TKSB0aGlzLnVwZGF0ZUlubmVySGVpZ2h0KCk7XG4gICAgcmV0dXJuIHRoaXMuI19pbm5lckhlaWdodDtcbiAgfVxuXG4gIGdldCBpbm5lcldpZHRoKCkge1xuICAgIGlmKENvbnN0YW50cy5TZXR0aW5nLkRJU0FCTEVfRVhQRVJJTUVOVEFMX09QVElNSVpBVElPTlMpIHRoaXMudXBkYXRlSW5uZXJXaWR0aCgpO1xuICAgIHJldHVybiB0aGlzLiNfaW5uZXJXaWR0aDtcbiAgfVxuXG4gIGdldCB3aWR0aCgpIHtcbiAgICBjb25zdCB3aWR0aCA9IHRoaXMuaW5uZXJXaWR0aCB8fCAodGhpcy5wYXJlbnQgJiYgdGhpcy5wYXJlbnQud2lkdGgpO1xuICAgIGNvbnN0IG1pbiA9IHRoaXMubWF4V2lkdGggIT0gbnVsbCA/IE1hdGgubWluKHRoaXMubWF4V2lkdGgsIHdpZHRoKSA6IG51bGw7XG4gICAgcmV0dXJuIHRoaXMubWluV2lkdGggIT0gbnVsbCA/IE1hdGgubWF4KHRoaXMubWluV2lkdGgsIG1pbiAhPSBudWxsID8gbWluIDogd2lkdGgpIDogbWluICE9IG51bGwgPyBtaW4gOiB3aWR0aDtcbiAgfVxuXG4gIGdldCBoZWlnaHQoKSB7XG4gICAgY29uc3QgaGVpZ2h0ID0gdGhpcy5pbm5lckhlaWdodCB8fCAodGhpcy5wYXJlbnQgJiYgdGhpcy5wYXJlbnQuaGVpZ2h0KTtcbiAgICBjb25zdCBtaW4gPSB0aGlzLm1heEhlaWdodCAhPSBudWxsID8gTWF0aC5taW4odGhpcy5tYXhIZWlnaHQsIGhlaWdodCkgOiBudWxsO1xuICAgIHJldHVybiB0aGlzLm1pbkhlaWdodCAhPSBudWxsID8gTWF0aC5tYXgodGhpcy5taW5IZWlnaHQsIG1pbiAhPSBudWxsID8gbWluIDogaGVpZ2h0KSA6IG1pbiAhPSBudWxsID8gbWluIDogaGVpZ2h0O1xuICB9XG5cbiAgZ2V0IGRlZmF1bHRTdHlsZSgpIHtcbiAgICByZXR1cm4gc3VwZXIuZGVmYXVsdFN0eWxlO1xuICB9XG59IiwiLypcbiAqIENvcHlyaWdodCAoQykgMjAyMCBFbGlhc3RpayAoZWxpYXN0aWtzb2Z0cy5jb20pXG4gKlxuICogVGhpcyBmaWxlIGlzIHBhcnQgb2YgXCJKU0dhbWVUb29sc1wiLlxuICpcbiAqIFwiSlNHYW1lVG9vbHNcIiBpcyBmcmVlIHNvZnR3YXJlOiB5b3UgY2FuIHJlZGlzdHJpYnV0ZSBpdCBhbmQvb3IgbW9kaWZ5XG4gKiBpdCB1bmRlciB0aGUgdGVybXMgb2YgdGhlIEdOVSBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlIGFzIHB1Ymxpc2hlZCBieVxuICogdGhlIEZyZWUgU29mdHdhcmUgRm91bmRhdGlvbiwgZWl0aGVyIHZlcnNpb24gMyBvZiB0aGUgTGljZW5zZSwgb3JcbiAqIChhdCB5b3VyIG9wdGlvbikgYW55IGxhdGVyIHZlcnNpb24uXG4gKlxuICogXCJKU0dhbWVUb29sc1wiIGlzIGRpc3RyaWJ1dGVkIGluIHRoZSBob3BlIHRoYXQgaXQgd2lsbCBiZSB1c2VmdWwsXG4gKiBidXQgV0lUSE9VVCBBTlkgV0FSUkFOVFk7IHdpdGhvdXQgZXZlbiB0aGUgaW1wbGllZCB3YXJyYW50eSBvZlxuICogTUVSQ0hBTlRBQklMSVRZIG9yIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFLiAgU2VlIHRoZVxuICogR05VIEdlbmVyYWwgUHVibGljIExpY2Vuc2UgZm9yIG1vcmUgZGV0YWlscy5cbiAqXG4gKiBZb3Ugc2hvdWxkIGhhdmUgcmVjZWl2ZWQgYSBjb3B5IG9mIHRoZSBHTlUgR2VuZXJhbCBQdWJsaWMgTGljZW5zZVxuICogYWxvbmcgd2l0aCBcIkpTR2FtZVRvb2xzXCIuICBJZiBub3QsIHNlZSA8aHR0cDovL3d3dy5nbnUub3JnL2xpY2Vuc2VzLz4uXG4gKi9cbmltcG9ydCBDb25zdGFudHMgZnJvbSBcIi4vQ29uc3RhbnRzXCI7XG5pbXBvcnQgU3R5bGUgZnJvbSBcIi4vU3R5bGVcIjtcbmltcG9ydCBSZWFjdG9yIGZyb20gXCIuL1JlYWN0b3JcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ29tcG9uZW50IHtcbiAgc2VsZWN0YWJsZSA9IHRydWU7XG4gICNfd2lkdGggPSAwO1xuICAjX2hlaWdodCA9IDA7XG4gICNfeCA9IDA7XG4gICNfeSA9IDA7XG4gICNfZGlzYWJsZWQgPSBmYWxzZTtcbiAgI19zZWxlY3RlZCA9IGZhbHNlO1xuICAjX3N0eWxlO1xuXG4gIGNvbnN0cnVjdG9yKHgsIHksIHdpZHRoLCBoZWlnaHQsIHN0eWxlKSB7XG4gICAgdGhpcy4jX3ggPSB4IHx8IDA7XG4gICAgdGhpcy4jX3kgPSB5IHx8IDA7XG4gICAgdGhpcy5kZWx0YVggPSAwO1xuICAgIHRoaXMuZGVsdGFZID0gMDtcbiAgICB0aGlzLiNfd2lkdGggPSB3aWR0aDtcbiAgICB0aGlzLiNfaGVpZ2h0ID0gaGVpZ2h0O1xuICAgIHRoaXMuY2FudmFzO1xuICAgIHRoaXMucGFyZW50O1xuXG4gICAgLy8gU3R5bGVcbiAgICB0aGlzLnN0eWxlID0gc3R5bGU7XG4gICAgXG4gICAgLy8gRnVuY3Rpb25zIHRyaWdnZXJlZCBieSBldmVudHNcbiAgICB0aGlzLnJlYWN0b3IgPSBuZXcgUmVhY3RvcigpO1xuICAgIHRoaXMucmVhY3Rvci5yZWdpc3RlckV2ZW50KFwib25DbGlja1wiKTtcbiAgICB0aGlzLnJlYWN0b3IucmVnaXN0ZXJFdmVudChcIm9uSG92ZXJcIik7XG4gICAgdGhpcy5yZWFjdG9yLnJlZ2lzdGVyRXZlbnQoXCJvbkRvd25cIik7XG4gICAgdGhpcy5yZWFjdG9yLnJlZ2lzdGVyRXZlbnQoXCJvblNjcm9sbFwiKTtcbiAgICB0aGlzLnJlYWN0b3IucmVnaXN0ZXJFdmVudChcIm9uTW92ZVwiKTtcbiAgICB0aGlzLnJlYWN0b3IucmVnaXN0ZXJFdmVudChcIm9uVXBcIik7XG4gICAgdGhpcy5yZWFjdG9yLnJlZ2lzdGVyRXZlbnQoXCJvbkNoYW5nZVwiKTtcblxuICAgIC8vIFN0YXRlXG4gICAgdGhpcy5pbml0ID0gZmFsc2U7XG4gICAgdGhpcy5oYXNJbml0RXZlbnRzID0gZmFsc2U7XG4gICAgdGhpcy4jX3NlbGVjdGVkID0gZmFsc2U7XG4gICAgdGhpcy5jbGlja2VkID0gZmFsc2U7XG4gICAgdGhpcy5ob3ZlcmVkID0gZmFsc2U7XG4gICAgdGhpcy4jX2Rpc2FibGVkID0gZmFsc2U7XG4gICAgdGhpcy5tb3ZhYmxlID0gZmFsc2U7XG4gICAgdGhpcy5tb3ZpbmcgPSBmYWxzZTtcblxuICAgIC8vIFNjcm9sbCBzdGF0ZVxuICAgIHRoaXMub2Zmc2V0U2Nyb2xsWCA9IDA7XG4gICAgdGhpcy5vZmZzZXRTY3JvbGxZID0gMDtcblxuICAgIC8vIE1vdmUgZXZlbnRcbiAgICB0aGlzLm9mZnNldE1vdmVYID0gMDtcbiAgICB0aGlzLm9mZnNldE1vdmVZID0gMDtcbiAgICB0aGlzLm1vdmVFdmVudFN0YXJ0WCA9IDA7XG4gICAgdGhpcy5tb3ZlRXZlbnRTdGFydFkgPSAwO1xuXG4gICAgLy8gVG91Y2ggZXZlbnRzXG4gICAgdGhpcy50b3VjaEV2ZW50U3RhcnRYID0gMDtcbiAgICB0aGlzLnRvdWNoRXZlbnRTdGFydFkgPSAwO1xuICAgIHRoaXMudG91Y2hFdmVudFN0YXJ0VGltZXN0YW1wID0gMDtcblxuICAgIHRoaXMudG9vbHRpcDtcbiAgICB0aGlzLmluaXRFdmVudHMoKTtcblxuICAgIHRoaXMuYWRkTW92ZUFjdGlvbigoZGVsdGFYLCBkZWx0YVkpID0+IHtcbiAgICAgIGlmKHRoaXMubW92YWJsZSAmJiAhdGhpcy5kaXNhYmxlZCAmJiB0aGlzLmNsaWNrZWQpIHtcbiAgICAgICAgdGhpcy5kZWx0YVggLT0gZGVsdGFYO1xuICAgICAgICB0aGlzLmRlbHRhWSAtPSBkZWx0YVk7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICBpbml0RXZlbnRzKCkge1xuICAgIGlmKCF0aGlzLmhhc0luaXRFdmVudHMgJiYgdGhpcy5jYW52YXMgIT0gbnVsbCkge1xuICAgICAgdGhpcy5jYW52YXMuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlbW92ZVwiLCB0aGlzLCAoZXZlbnQsIHJlc3VsdCkgPT4ge1xuICAgICAgICBpZighdGhpcy5kaXNhYmxlZCkge1xuICAgICAgICAgIGNvbnN0IG1vdXNlUG9zaXRpb24gPSB0aGlzLmdldE1vdXNlUG9zKGV2ZW50KTtcbiAgICAgICAgICB0aGlzLm1vdmluZyA9IGZhbHNlO1xuXG4gICAgICAgICAgaWYodGhpcy5jbGlja2VkKSB7XG4gICAgICAgICAgICBjb25zdCBkZWx0YVggPSB0aGlzLm1vdmVFdmVudFN0YXJ0WCAtIG1vdXNlUG9zaXRpb24ueDtcbiAgICAgICAgICAgIGNvbnN0IGRlbHRhWSA9IHRoaXMubW92ZUV2ZW50U3RhcnRZIC0gbW91c2VQb3NpdGlvbi55O1xuXG4gICAgICAgICAgICB0aGlzLm9mZnNldE1vdmVYICs9IGRlbHRhWDtcbiAgICAgICAgICAgIHRoaXMub2Zmc2V0TW92ZVkgKz0gZGVsdGFZO1xuXG4gICAgICAgICAgICBpZih0aGlzLnJlYWN0b3IpIHtcbiAgICAgICAgICAgICAgdGhpcy5yZWFjdG9yLmRpc3BhdGNoRXZlbnQoXCJvbk1vdmVcIiwgZGVsdGFYLCBkZWx0YVksIG1vdXNlUG9zaXRpb24pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgXG4gICAgICAgICAgICB0aGlzLm1vdmVFdmVudFN0YXJ0WCA9IG1vdXNlUG9zaXRpb24ueDtcbiAgICAgICAgICAgIHRoaXMubW92ZUV2ZW50U3RhcnRZID0gbW91c2VQb3NpdGlvbi55O1xuICAgICAgICAgICAgaWYodGhpcy5tb3ZhYmxlKSB0aGlzLm1vdmluZyA9IHRydWU7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgaWYocmVzdWx0KSB7XG4gICAgICAgICAgICBpZih0aGlzLnJlYWN0b3IgJiYgIXRoaXMuZGlzYWJsZWQpIHtcbiAgICAgICAgICAgICAgdGhpcy5yZWFjdG9yLmRpc3BhdGNoRXZlbnQoXCJvbkhvdmVyXCIsIG1vdXNlUG9zaXRpb24pO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZih0aGlzLnRvb2x0aXApIHtcbiAgICAgICAgICAgICAgdGhpcy50b29sdGlwLnggPSBtb3VzZVBvc2l0aW9uLnggKyAxMDtcbiAgICAgICAgICAgICAgdGhpcy50b29sdGlwLnkgPSBtb3VzZVBvc2l0aW9uLnkgKyAxMDtcbiAgICAgICAgICAgICAgdGhpcy50b29sdGlwLmVuYWJsZSgpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgXG4gICAgICAgICAgICB0aGlzLmhvdmVyZWQgPSB0cnVlO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLmhvdmVyZWQgPSBmYWxzZTtcbiAgICAgICAgICAgIGlmKHRoaXMudG9vbHRpcCkgdGhpcy50b29sdGlwLmRpc2FibGUoKVxuICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB0aGlzLmhvdmVyZWQgPSBmYWxzZTtcbiAgICAgICAgICB0aGlzLmNsaWNrZWQgPSBmYWxzZTtcbiAgICAgICAgICBpZih0aGlzLnRvb2x0aXApIHRoaXMudG9vbHRpcC5kaXNhYmxlKCk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgICAgXG4gICAgICB0aGlzLmNhbnZhcy5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgdGhpcywgKGV2ZW50LCByZXN1bHQpID0+IHtcbiAgICAgICAgaWYoIXRoaXMuZGlzYWJsZWQpIHtcbiAgICAgICAgICBjb25zdCBtb3VzZVBvc2l0aW9uID0gdGhpcy5nZXRNb3VzZVBvcyhldmVudCk7XG5cbiAgICAgICAgICBpZihyZXN1bHQgJiYgdGhpcy5ob3ZlcmVkKSB7XG4gICAgICAgICAgICBpZighdGhpcy5tb3ZpbmcpIHtcbiAgICAgICAgICAgICAgaWYodGhpcy5yZWFjdG9yKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5yZWFjdG9yLmRpc3BhdGNoRXZlbnQoXCJvbkNsaWNrXCIsIG1vdXNlUG9zaXRpb24pO1xuICAgICAgICAgICAgICB9XG4gIFxuICAgICAgICAgICAgICB0aGlzLnNlbGVjdGVkID0gdHJ1ZTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIHRoaXMubW92aW5nID0gZmFsc2U7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuY2xpY2tlZCA9IGZhbHNlO1xuICAgICAgICAgICAgdGhpcy5zZWxlY3RlZCA9IGZhbHNlO1xuICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB0aGlzLmhvdmVyZWQgPSBmYWxzZTtcbiAgICAgICAgICB0aGlzLmNsaWNrZWQgPSBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgICBcbiAgICAgIHRoaXMuY2FudmFzLmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZWRvd25cIiwgdGhpcywgKGV2ZW50LCByZXN1bHQpID0+IHtcbiAgICAgICAgaWYoIXRoaXMuZGlzYWJsZWQpIHtcbiAgICAgICAgICBjb25zdCBtb3VzZVBvc2l0aW9uID0gdGhpcy5nZXRNb3VzZVBvcyhldmVudCk7XG5cbiAgICAgICAgICBpZihyZXN1bHQgJiYgIXRoaXMubW92aW5nKSB7XG4gICAgICAgICAgICBpZih0aGlzLnJlYWN0b3IpIHtcbiAgICAgICAgICAgICAgdGhpcy5yZWFjdG9yLmRpc3BhdGNoRXZlbnQoXCJvbkRvd25cIiwgbW91c2VQb3NpdGlvbik7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIHRoaXMuY2xpY2tlZCA9IHRydWU7XG4gICAgICAgICAgICB0aGlzLm1vdmVFdmVudFN0YXJ0WCA9IG1vdXNlUG9zaXRpb24ueDtcbiAgICAgICAgICAgIHRoaXMubW92ZUV2ZW50U3RhcnRZID0gbW91c2VQb3NpdGlvbi55O1xuICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB0aGlzLmhvdmVyZWQgPSBmYWxzZTtcbiAgICAgICAgICB0aGlzLmNsaWNrZWQgPSBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgICBcbiAgICAgIHRoaXMuY2FudmFzLmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZXVwXCIsIHRoaXMsIChldmVudCkgPT4ge1xuICAgICAgICBpZighdGhpcy5kaXNhYmxlZCkge1xuICAgICAgICAgIGNvbnN0IG1vdXNlUG9zaXRpb24gPSB0aGlzLmdldE1vdXNlUG9zKGV2ZW50KTtcblxuICAgICAgICAgIGlmKHRoaXMucmVhY3Rvcikge1xuICAgICAgICAgICAgdGhpcy5yZWFjdG9yLmRpc3BhdGNoRXZlbnQoXCJvblVwXCIsIG1vdXNlUG9zaXRpb24pO1xuICAgICAgICAgIH1cbiAgICAgICAgICBcbiAgICAgICAgICB0aGlzLmNsaWNrZWQgPSBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgfSk7XG5cbiAgICAgIHRoaXMuY2FudmFzLmFkZEV2ZW50TGlzdGVuZXIoXCJ3aGVlbFwiLCB0aGlzLCAoZXZlbnQpID0+IHtcbiAgICAgICAgaWYodGhpcy5ob3ZlcmVkICYmICF0aGlzLmRpc2FibGVkICYmICF0aGlzLnNjcm9sbERpc2FibGVkKSB7XG4gICAgICAgICAgdGhpcy5vZmZzZXRTY3JvbGxYICs9IGV2ZW50LmRlbHRhWDtcbiAgICAgICAgICB0aGlzLm9mZnNldFNjcm9sbFkgKz0gZXZlbnQuZGVsdGFZO1xuXG4gICAgICAgICAgaWYodGhpcy5yZWFjdG9yKSB7XG4gICAgICAgICAgICB0aGlzLnJlYWN0b3IuZGlzcGF0Y2hFdmVudChcIm9uU2Nyb2xsXCIsIGV2ZW50LmRlbHRhWCwgZXZlbnQuZGVsdGFZKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH0pO1xuXG4gICAgICBjb25zdCB0b3VjaFNjcm9sbEV2ZW50ID0gKGV2ZW50KSA9PiB7XG4gICAgICAgIGNvbnN0IGNoYW5nZWRUb3VjaGVzID0gZXZlbnQuY2hhbmdlZFRvdWNoZXNbMF07XG4gICAgICAgIGNvbnN0IHBvc2l0aW9uID0gdGhpcy5nZXRNb3VzZVBvcyhjaGFuZ2VkVG91Y2hlcyk7XG5cbiAgICAgICAgaWYodGhpcy5ob3ZlcmVkICYmICF0aGlzLmRpc2FibGVkICYmICF0aGlzLnNjcm9sbERpc2FibGVkKSB7XG4gICAgICAgICAgY29uc3QgZGVsdGFYID0gdGhpcy50b3VjaEV2ZW50U3RhcnRYIC0gcG9zaXRpb24ueDtcbiAgICAgICAgICBjb25zdCBkZWx0YVkgPSB0aGlzLnRvdWNoRXZlbnRTdGFydFkgLSBwb3NpdGlvbi55O1xuXG4gICAgICAgICAgdGhpcy5vZmZzZXRTY3JvbGxYICs9IGRlbHRhWDtcbiAgICAgICAgICB0aGlzLm9mZnNldFNjcm9sbFkgKz0gZGVsdGFZO1xuXG4gICAgICAgICAgaWYodGhpcy5yZWFjdG9yKSB7XG4gICAgICAgICAgICB0aGlzLnJlYWN0b3IuZGlzcGF0Y2hFdmVudChcIm9uU2Nyb2xsXCIsIGRlbHRhWCwgZGVsdGFZLCBwb3NpdGlvbik7XG4gICAgICAgICAgfVxuICAgICAgICAgIFxuICAgICAgICAgIHRoaXMudG91Y2hFdmVudFN0YXJ0WCA9IHBvc2l0aW9uLng7XG4gICAgICAgICAgdGhpcy50b3VjaEV2ZW50U3RhcnRZID0gcG9zaXRpb24ueTtcbiAgICAgICAgfVxuICAgICAgfTtcblxuICAgICAgY29uc3QgdG91Y2hTdGFydEVuZEV2ZW50ID0gKGV2ZW50LCByZXN1bHQpID0+IHtcbiAgICAgICAgY29uc3QgY2hhbmdlZFRvdWNoZXMgPSBldmVudC5jaGFuZ2VkVG91Y2hlc1swXTtcbiAgICAgICAgY29uc3QgcG9zaXRpb24gPSB0aGlzLmdldE1vdXNlUG9zKGNoYW5nZWRUb3VjaGVzKTtcbiAgICAgICAgXG4gICAgICAgIGlmKHJlc3VsdCkge1xuICAgICAgICAgIHRoaXMuaG92ZXJlZCA9IHRydWU7XG4gICAgICAgICAgdGhpcy5zZWxlY3RlZCA9IHRydWU7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdGhpcy5ob3ZlcmVkID0gZmFsc2U7XG4gICAgICAgICAgdGhpcy5zZWxlY3RlZCA9IGZhbHNlO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYodGhpcy5ob3ZlcmVkICYmICF0aGlzLmRpc2FibGVkKSB7XG4gICAgICAgICAgdGhpcy50b3VjaEV2ZW50U3RhcnRYID0gcG9zaXRpb24ueDtcbiAgICAgICAgICB0aGlzLnRvdWNoRXZlbnRTdGFydFkgPSBwb3NpdGlvbi55O1xuICAgICAgICAgIHRoaXMudG91Y2hFdmVudFN0YXJ0VGltZXN0YW1wID0gZXZlbnQudGltZXN0YW1wO1xuICAgICAgICB9XG4gICAgICB9O1xuXG4gICAgICB0aGlzLmNhbnZhcy5hZGRFdmVudExpc3RlbmVyKFwidG91Y2hzdGFydFwiLCB0aGlzLCB0b3VjaFN0YXJ0RW5kRXZlbnQpO1xuICAgICAgdGhpcy5jYW52YXMuYWRkRXZlbnRMaXN0ZW5lcihcInRvdWNoZW5kXCIsIHRoaXMsIHRvdWNoU3RhcnRFbmRFdmVudCk7XG5cbiAgICAgIHRoaXMuY2FudmFzLmFkZEV2ZW50TGlzdGVuZXIoXCJ0b3VjaG1vdmVcIiwgdGhpcywgKGV2ZW50KSA9PiB7XG4gICAgICAgIHRvdWNoU2Nyb2xsRXZlbnQoZXZlbnQpO1xuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgfSk7XG5cbiAgICAgIHRoaXMuaGFzSW5pdEV2ZW50cyA9IHRydWU7XG4gICAgfVxuICB9XG5cbiAgZHJhdyhjb250ZXh0KSB7XG4gICAgaWYodGhpcy5oaWRkZW4pIHJldHVybjtcbiAgICB0aGlzLmluaXRFdmVudHMoKTtcblxuICAgIGlmKHRoaXMuZGlzYWJsZWQpIHtcbiAgICAgIHRoaXMuc2VsZWN0ZWQgPSBmYWxzZTtcbiAgICAgIHRoaXMuY2xpY2tlZCA9IGZhbHNlO1xuICAgICAgdGhpcy5ob3ZlcmVkID0gZmFsc2U7XG4gICAgICBpZih0aGlzLnRvb2x0aXApIHRoaXMudG9vbHRpcC5kaXNhYmxlZCA9IHRydWU7XG4gICAgfSBlbHNlIGlmKHRoaXMubW92YWJsZSAmJiB0aGlzLmhvdmVyZWQpIHtcbiAgICAgIHRoaXMuY2FudmFzLmN1cnNvciA9IFwiZ3JhYlwiO1xuICAgIH1cbiAgfVxuICBcbiAgZ2V0TW91c2VQb3MoZXZlbnQpIHtcbiAgICByZXR1cm4gdGhpcy5jYW52YXMuZ2V0TW91c2VQb3MoZXZlbnQpO1xuICB9XG4gIFxuICBpc0luc2lkZShwb3MpIHtcbiAgICByZXR1cm4gcG9zLnggPiB0aGlzLnggJiYgcG9zLnggPCB0aGlzLnggKyB0aGlzLndpZHRoICYmIHBvcy55IDwgdGhpcy55ICsgdGhpcy5oZWlnaHQgJiYgcG9zLnkgPiB0aGlzLnk7XG4gIH1cbiAgXG4gIGRpc2FibGUoKSB7XG4gICAgdGhpcy5kaXNhYmxlZCA9IHRydWU7XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cbiAgXG4gIGVuYWJsZSgpIHtcbiAgICB0aGlzLmRpc2FibGVkID0gZmFsc2U7XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cblxuICBnZXQgZGlzYWJsZWQoKSB7XG4gICAgcmV0dXJuIHRoaXMuI19kaXNhYmxlZCB8fCAodGhpcy5wYXJlbnQgJiYgdGhpcy5wYXJlbnQuZGlzYWJsZWQpO1xuICB9XG5cbiAgc2V0IGRpc2FibGVkKGRpc2FibGVkKSB7XG4gICAgaWYoZGlzYWJsZWQgIT0gdGhpcy4jX2Rpc2FibGVkKSB7XG4gICAgICB0aGlzLiNfZGlzYWJsZWQgPSBkaXNhYmxlZDtcbiAgICAgIHRoaXMucmVhY3RvciAmJiB0aGlzLnJlYWN0b3IuZGlzcGF0Y2hFdmVudChcIm9uQ2hhbmdlXCIsIHRoaXMpO1xuICAgIH1cbiAgfVxuXG4gIHNldENsaWNrQWN0aW9uKHRyaWdnZXIpIHtcbiAgICB0aGlzLnJlbW92ZUFsbENsaWNrQWN0aW9ucygpO1xuICAgIHRoaXMuYWRkQ2xpY2tBY3Rpb24odHJpZ2dlcik7XG4gIH1cbiAgXG4gIGFkZENsaWNrQWN0aW9uKHRyaWdnZXIpIHtcbiAgICB0aGlzLnJlYWN0b3IuYWRkRXZlbnRMaXN0ZW5lcihcIm9uQ2xpY2tcIiwgdHJpZ2dlcik7XG4gIH1cbiAgXG4gIHJlbW92ZUNsaWNrQWN0aW9uKHRyaWdnZXIpIHtcbiAgICB0aGlzLnJlYWN0b3IucmVtb3ZlRXZlbnRMaXN0ZW5lcihcIm9uQ2xpY2tcIiwgdHJpZ2dlcik7XG4gIH1cblxuICByZW1vdmVBbGxDbGlja0FjdGlvbnMoKSB7XG4gICAgdGhpcy5yZWFjdG9yLnJlbW92ZUFsbEV2ZW50TGlzdGVuZXIoXCJvbkNsaWNrXCIpO1xuICB9XG5cbiAgc2V0SG92ZXJBY3Rpb24odHJpZ2dlcikge1xuICAgIHRoaXMucmVtb3ZlQWxsSG92ZXJBY3Rpb25zKCk7XG4gICAgdGhpcy5hZGRIb3ZlckFjdGlvbih0cmlnZ2VyKTtcbiAgfVxuICBcbiAgYWRkSG92ZXJBY3Rpb24odHJpZ2dlcikge1xuICAgIHRoaXMucmVhY3Rvci5hZGRFdmVudExpc3RlbmVyKFwib25Ib3ZlclwiLCB0cmlnZ2VyKTtcbiAgfVxuICBcbiAgcmVtb3ZlSG92ZXJBY3Rpb24odHJpZ2dlcikge1xuICAgIHRoaXMucmVhY3Rvci5yZW1vdmVFdmVudExpc3RlbmVyKFwib25Ib3ZlclwiLCB0cmlnZ2VyKTtcbiAgfVxuXG4gIHJlbW92ZUFsbEhvdmVyQWN0aW9ucygpIHtcbiAgICB0aGlzLnJlYWN0b3IucmVtb3ZlQWxsRXZlbnRMaXN0ZW5lcihcIm9uSG92ZXJcIik7XG4gIH1cblxuICBzZXREb3duQWN0aW9uKHRyaWdnZXIpIHtcbiAgICB0aGlzLnJlbW92ZUFsbERvd25BY3Rpb25zKCk7XG4gICAgdGhpcy5hZGREb3duQWN0aW9uKHRyaWdnZXIpO1xuICB9XG4gIFxuICBhZGREb3duQWN0aW9uKHRyaWdnZXIpIHtcbiAgICB0aGlzLnJlYWN0b3IuYWRkRXZlbnRMaXN0ZW5lcihcIm9uRG93blwiLCB0cmlnZ2VyKTtcbiAgfVxuICBcbiAgcmVtb3ZlRG93bkFjdGlvbih0cmlnZ2VyKSB7XG4gICAgdGhpcy5yZWFjdG9yLnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJvbkRvd25cIiwgdHJpZ2dlcik7XG4gIH1cblxuICByZW1vdmVBbGxEb3duQWN0aW9ucygpIHtcbiAgICB0aGlzLnJlYWN0b3IucmVtb3ZlQWxsRXZlbnRMaXN0ZW5lcihcIm9uRG93blwiKTtcbiAgfVxuXG4gIHNldFNjcm9sbEFjdGlvbih0cmlnZ2VyKSB7XG4gICAgdGhpcy5yZW1vdmVBbGxTY3JvbGxBY3Rpb25zKCk7XG4gICAgdGhpcy5hZGRTY3JvbGxBY3Rpb24odHJpZ2dlcik7XG4gIH1cbiAgXG4gIGFkZFNjcm9sbEFjdGlvbih0cmlnZ2VyKSB7XG4gICAgdGhpcy5yZWFjdG9yLmFkZEV2ZW50TGlzdGVuZXIoXCJvblNjcm9sbFwiLCB0cmlnZ2VyKTtcbiAgfVxuICBcbiAgcmVtb3ZlU2Nyb2xsQWN0aW9uKHRyaWdnZXIpIHtcbiAgICB0aGlzLnJlYWN0b3IucmVtb3ZlRXZlbnRMaXN0ZW5lcihcIm9uU2Nyb2xsXCIsIHRyaWdnZXIpO1xuICB9XG5cbiAgcmVtb3ZlQWxsU2Nyb2xsQWN0aW9ucygpIHtcbiAgICB0aGlzLnJlYWN0b3IucmVtb3ZlQWxsRXZlbnRMaXN0ZW5lcihcIm9uU2Nyb2xsXCIpO1xuICB9XG5cbiAgc2V0TW92ZUFjdGlvbih0cmlnZ2VyKSB7XG4gICAgdGhpcy5yZW1vdmVBbGxNb3ZlQWN0aW9ucygpO1xuICAgIHRoaXMuYWRkTW92ZUFjdGlvbih0cmlnZ2VyKTtcbiAgfVxuICBcbiAgYWRkTW92ZUFjdGlvbih0cmlnZ2VyKSB7XG4gICAgdGhpcy5yZWFjdG9yLmFkZEV2ZW50TGlzdGVuZXIoXCJvbk1vdmVcIiwgdHJpZ2dlcik7XG4gIH1cbiAgXG4gIHJlbW92ZU1vdmVBY3Rpb24odHJpZ2dlcikge1xuICAgIHRoaXMucmVhY3Rvci5yZW1vdmVFdmVudExpc3RlbmVyKFwib25Nb3ZlXCIsIHRyaWdnZXIpO1xuICB9XG5cbiAgcmVtb3ZlQWxsTW92ZUFjdGlvbnMoKSB7XG4gICAgdGhpcy5yZWFjdG9yLnJlbW92ZUFsbEV2ZW50TGlzdGVuZXIoXCJvbk1vdmVcIik7XG4gIH1cbiAgXG4gIHNldENoYW5nZUFjdGlvbih0cmlnZ2VyKSB7XG4gICAgdGhpcy5yZW1vdmVBbGxDaGFuZ2VBY3Rpb25zKCk7XG4gICAgdGhpcy5hZGRDaGFuZ2VBY3Rpb24odHJpZ2dlcik7XG4gIH1cbiAgXG4gIGFkZENoYW5nZUFjdGlvbih0cmlnZ2VyKSB7XG4gICAgdGhpcy5yZWFjdG9yLmFkZEV2ZW50TGlzdGVuZXIoXCJvbkNoYW5nZVwiLCB0cmlnZ2VyKTtcbiAgfVxuICBcbiAgcmVtb3ZlQ2hhbmdlQWN0aW9uKHRyaWdnZXIpIHtcbiAgICB0aGlzLnJlYWN0b3IucmVtb3ZlRXZlbnRMaXN0ZW5lcihcIm9uQ2hhbmdlXCIsIHRyaWdnZXIpO1xuICB9XG5cbiAgcmVtb3ZlQWxsQ2hhbmdlQWN0aW9ucygpIHtcbiAgICB0aGlzLnJlYWN0b3IucmVtb3ZlQWxsRXZlbnRMaXN0ZW5lcihcIm9uQ2hhbmdlXCIpO1xuICB9XG5cbiAgc2V0VXBBY3Rpb24odHJpZ2dlcikge1xuICAgIHRoaXMucmVtb3ZlQWxsVXBBY3Rpb25zKCk7XG4gICAgdGhpcy5hZGRVcEFjdGlvbih0cmlnZ2VyKTtcbiAgfVxuICBcbiAgYWRkVXBBY3Rpb24odHJpZ2dlcikge1xuICAgIHRoaXMucmVhY3Rvci5hZGRFdmVudExpc3RlbmVyKFwib25VcFwiLCB0cmlnZ2VyKTtcbiAgfVxuICBcbiAgcmVtb3ZlVXBBY3Rpb24odHJpZ2dlcikge1xuICAgIHRoaXMucmVhY3Rvci5yZW1vdmVFdmVudExpc3RlbmVyKFwib25VcFwiLCB0cmlnZ2VyKTtcbiAgfVxuXG4gIHJlbW92ZUFsbFVwQWN0aW9ucygpIHtcbiAgICB0aGlzLnJlYWN0b3IucmVtb3ZlQWxsRXZlbnRMaXN0ZW5lcihcIm9uVXBcIik7XG4gIH1cblxuICBnZXQgaGVpZ2h0KCkge1xuICAgIHJldHVybiB0aGlzLiNfaGVpZ2h0O1xuICB9XG5cbiAgZ2V0IHdpZHRoKCkge1xuICAgIHJldHVybiB0aGlzLiNfd2lkdGg7XG4gIH1cblxuICBzZXQgd2lkdGgod2lkdGgpIHtcbiAgICBpZih3aWR0aCAhPSB0aGlzLiNfd2lkdGgpIHtcbiAgICAgIHRoaXMuI193aWR0aCA9IHdpZHRoO1xuICAgICAgdGhpcy5yZWFjdG9yICYmIHRoaXMucmVhY3Rvci5kaXNwYXRjaEV2ZW50KFwib25DaGFuZ2VcIiwgdGhpcyk7XG4gICAgfVxuICB9XG5cbiAgc2V0IGhlaWdodChoZWlnaHQpIHtcbiAgICBpZihoZWlnaHQgIT0gdGhpcy4jX2hlaWdodCkge1xuICAgICAgdGhpcy4jX2hlaWdodCA9IGhlaWdodDtcbiAgICAgIHRoaXMucmVhY3RvciAmJiB0aGlzLnJlYWN0b3IuZGlzcGF0Y2hFdmVudChcIm9uQ2hhbmdlXCIsIHRoaXMpO1xuICAgIH1cbiAgfVxuXG4gIGdldCBtYXhXaWR0aCgpIHtcbiAgICByZXR1cm4gdGhpcy53aWR0aDtcbiAgfVxuXG4gIGdldCBtYXhIZWlnaHQoKSB7XG4gICAgcmV0dXJuIHRoaXMuaGVpZ2h0O1xuICB9XG5cbiAgZ2V0IGlubmVyV2lkdGgoKSB7XG4gICAgcmV0dXJuIHRoaXMud2lkdGg7XG4gIH1cblxuICBnZXQgaW5uZXJIZWlnaHQoKSB7XG4gICAgcmV0dXJuIHRoaXMuaGVpZ2h0O1xuICB9XG5cbiAgZ2V0IG1pbldpZHRoKCkge1xuICAgIHJldHVybiB0aGlzLndpZHRoO1xuICB9XG5cbiAgZ2V0IG1pbkhlaWdodCgpIHtcbiAgICByZXR1cm4gdGhpcy5oZWlnaHQ7XG4gIH1cblxuICBnZXQgeCgpIHtcbiAgICBjb25zdCBwYXJlbnQgPSB0aGlzLnBhcmVudCB8fCB0aGlzLmNhbnZhcztcblxuICAgIGlmKHRoaXMuc3R5bGUuYWxpZ25lbWVudCAmJiBwYXJlbnQpIHtcbiAgICAgIGNvbnN0IHBhcmVudFdpZHRoID0gcGFyZW50LndpZHRoO1xuICAgICAgY29uc3QgcGFyZW50UGFkZGluZyA9IChwYXJlbnQuc3R5bGUgJiYgcGFyZW50LnN0eWxlLnBhZGRpbmcpIHx8IDA7XG5cbiAgICAgIGlmKHRoaXMuc3R5bGUuYWxpZ25lbWVudCA9PSBDb25zdGFudHMuQWxpZ25lbWVudC5DRU5URVIpIHtcbiAgICAgICAgcmV0dXJuIHBhcmVudC54ICsgKHBhcmVudFdpZHRoIC8gMikgLSAodGhpcy53aWR0aCAvIDIpICsgdGhpcy5kZWx0YVg7XG4gICAgICB9IGVsc2UgaWYodGhpcy5zdHlsZS5hbGlnbmVtZW50ID09IENvbnN0YW50cy5BbGlnbmVtZW50LlJJR0hUKSB7XG4gICAgICAgIHJldHVybiBwYXJlbnQueCArIChwYXJlbnRXaWR0aCkgLSAodGhpcy53aWR0aCkgLSBwYXJlbnRQYWRkaW5nICsgdGhpcy5kZWx0YVg7XG4gICAgICB9IGVsc2UgaWYodGhpcy5zdHlsZS5hbGlnbmVtZW50ID09IENvbnN0YW50cy5BbGlnbmVtZW50LkxFRlQpIHtcbiAgICAgICAgcmV0dXJuIHBhcmVudC54ICsgcGFyZW50UGFkZGluZyArIHRoaXMuZGVsdGFYO1xuICAgICAgfVxuICAgIH0gZWxzZSBpZihwYXJlbnQpIHtcbiAgICAgIHJldHVybiBwYXJlbnQueCArIHRoaXMuI194ICsgdGhpcy5kZWx0YVg7XG4gICAgfVxuICAgIFxuICAgIHJldHVybiB0aGlzLiNfeCArIHRoaXMuZGVsdGFYO1xuICB9XG5cbiAgc2V0IHgoeCkge1xuICAgIHRoaXMuI194ID0geDtcbiAgICB0aGlzLnJlYWN0b3IgJiYgdGhpcy5yZWFjdG9yLmRpc3BhdGNoRXZlbnQoXCJvbkNoYW5nZVwiLCB0aGlzKTtcbiAgfVxuXG4gIGdldCB5KCkge1xuICAgIGNvbnN0IHBhcmVudCA9IHRoaXMucGFyZW50IHx8IHRoaXMuY2FudmFzO1xuXG4gICAgaWYodGhpcy5zdHlsZS52ZXJ0aWNhbEFsaWduZW1lbnQgJiYgcGFyZW50KSB7XG4gICAgICBjb25zdCBwYXJlbnRIZWlnaHQgPSBwYXJlbnQuaGVpZ2h0O1xuICAgICAgY29uc3QgcGFyZW50UGFkZGluZyA9IChwYXJlbnQuc3R5bGUgJiYgcGFyZW50LnN0eWxlLnBhZGRpbmcpIHx8IDA7XG5cbiAgICAgIGlmKHRoaXMuc3R5bGUudmVydGljYWxBbGlnbmVtZW50ID09IENvbnN0YW50cy5WZXJ0aWNhbEFsaWduZW1lbnQuQk9UVE9NKSB7XG4gICAgICAgIHJldHVybiBwYXJlbnQueSArIChwYXJlbnRIZWlnaHQpIC0gKHRoaXMuaGVpZ2h0KSAtIHBhcmVudFBhZGRpbmcgKyB0aGlzLmRlbHRhWTtcbiAgICAgIH0gZWxzZSBpZih0aGlzLnN0eWxlLnZlcnRpY2FsQWxpZ25lbWVudCA9PSBDb25zdGFudHMuVmVydGljYWxBbGlnbmVtZW50LkNFTlRFUikge1xuICAgICAgICByZXR1cm4gcGFyZW50LnkgKyAocGFyZW50SGVpZ2h0IC8gMikgLSAodGhpcy5oZWlnaHQgLyAyKSArIHRoaXMuZGVsdGFZO1xuICAgICAgfSBlbHNlIGlmKHRoaXMuc3R5bGUudmVydGljYWxBbGlnbmVtZW50ID09IENvbnN0YW50cy5WZXJ0aWNhbEFsaWduZW1lbnQuVE9QKSB7XG4gICAgICAgIHJldHVybiBwYXJlbnQueSArIHBhcmVudFBhZGRpbmcgKyB0aGlzLmRlbHRhWTtcbiAgICAgIH1cbiAgICB9IGVsc2UgaWYocGFyZW50KSB7XG4gICAgICByZXR1cm4gcGFyZW50LnkgKyB0aGlzLiNfeSArIHRoaXMuZGVsdGFZO1xuICAgIH1cbiAgICBcbiAgICByZXR1cm4gdGhpcy4jX3kgKyB0aGlzLmRlbHRhWTtcbiAgfVxuXG4gIHNldCB5KHkpIHtcbiAgICB0aGlzLiNfeSA9IHk7XG4gICAgdGhpcy5yZWFjdG9yICYmIHRoaXMucmVhY3Rvci5kaXNwYXRjaEV2ZW50KFwib25DaGFuZ2VcIiwgdGhpcyk7XG4gIH1cblxuICBnZXQgZGVmYXVsdFN0eWxlKCkge1xuICAgIHJldHVybiBuZXcgU3R5bGUoe1xuICAgICAgXCJwYWRkaW5nXCI6IENvbnN0YW50cy5TZXR0aW5nLkRFRkFVTFRfUEFERElORyxcbiAgICAgIFwic3BhY2VCZXR3ZWVuQ29tcG9uZW50c1wiOiBDb25zdGFudHMuU2V0dGluZy5ERUZBVUxUX1NQQUNJTkdcbiAgICB9KTtcbiAgfVxuXG4gIGdldCBzdHlsZSgpIHtcbiAgICByZXR1cm4gdGhpcy4jX3N0eWxlIHx8IHRoaXMuZGVmYXVsdFN0eWxlO1xuICB9XG5cbiAgc2V0IHN0eWxlKHN0eWxlKSB7XG4gICAgdGhpcy4jX3N0eWxlID0gbmV3IFN0eWxlKCk7XG4gICAgdGhpcy4jX3N0eWxlLnNldEFsbCh0aGlzLmRlZmF1bHRTdHlsZS5nZXRTdHlsZXMoKSk7XG5cbiAgICBpZihzdHlsZSAmJiBzdHlsZSBpbnN0YW5jZW9mIFN0eWxlKSB7XG4gICAgICB0aGlzLiNfc3R5bGUuc2V0QWxsKHN0eWxlLmdldFN0eWxlcygpKTtcbiAgICB9XG5cbiAgICB0aGlzLiNfc3R5bGUuY29tcG9uZW50ID0gdGhpcztcbiAgICB0aGlzLnJlYWN0b3IgJiYgdGhpcy5yZWFjdG9yLmRpc3BhdGNoRXZlbnQoXCJvbkNoYW5nZVwiLCB0aGlzKTtcbiAgfVxuXG4gIGdldCBoaWRkZW4oKSB7XG4gICAgcmV0dXJuICh0aGlzLnN0eWxlICYmIHRoaXMuc3R5bGUuaGlkZGVuKSB8fCAodGhpcy5wYXJlbnQgJiYgdGhpcy5wYXJlbnQuaGlkZGVuKTtcbiAgfVxuXG4gIHNldCBoaWRkZW4oaGlkZGVuKSB7XG4gICAgaWYoaGlkZGVuICE9IHRoaXMuZGlzYWJsZWQgfHwgaGlkZGVuICE9IHRoaXMuc3R5bGUuaGlkZGVuKSB7XG4gICAgICB0aGlzLmRpc2FibGVkID0gaGlkZGVuO1xuICAgICAgaWYodGhpcy5zdHlsZSkgdGhpcy5zdHlsZS5zZXQoXCJoaWRkZW5cIiwgaGlkZGVuKTtcbiAgICAgIHRoaXMucmVhY3RvciAmJiB0aGlzLnJlYWN0b3IuZGlzcGF0Y2hFdmVudChcIm9uQ2hhbmdlXCIsIHRoaXMpO1xuICAgIH1cbiAgfVxuXG4gIGdldCBzZWxlY3RlZCgpIHtcbiAgICByZXR1cm4gdGhpcy4jX3NlbGVjdGVkO1xuICB9XG5cbiAgc2V0IHNlbGVjdGVkKHNlbGVjdGVkKSB7XG4gICAgaWYoc2VsZWN0ZWQgIT0gdGhpcy4jX3NlbGVjdGVkKSB7XG4gICAgICB0aGlzLiNfc2VsZWN0ZWQgPSBzZWxlY3RlZDtcbiAgICAgIHRoaXMucmVhY3RvciAmJiB0aGlzLnJlYWN0b3IuZGlzcGF0Y2hFdmVudChcIm9uQ2hhbmdlXCIsIHRoaXMpO1xuICAgIH1cbiAgfVxuXG4gIGdldEFsbFBhcmVudHMoKSB7XG4gICAgbGV0IHBhcmVudCA9IHRoaXMucGFyZW50O1xuICAgIGxldCByZXMgPSBbXTtcblxuICAgIHdoaWxlKHBhcmVudCkge1xuICAgICAgcmVzLnB1c2gocGFyZW50KTtcbiAgICAgIHBhcmVudCA9IHBhcmVudC5wYXJlbnQ7XG4gICAgfVxuXG4gICAgcmV0dXJuIHJlcztcbiAgfVxuXG4gIHN0YXRpYyBjb21wYXJlQ29tcG9uZW50cyhjb21wb25lbnQsIG90aGVyKSB7XG4gICAgcmV0dXJuIGNvbXBvbmVudC5jb21wYXJlVG8ob3RoZXIpO1xuICB9XG5cbiAgY29tcGFyZVRvKG90aGVyQ29tcG9uZW50KSB7XG4gICAgY29uc3QgaXNGb3JlZ3JvdW5kID0gdGhpcy5zdHlsZSAmJiB0aGlzLnN0eWxlLmZvcmVncm91bmQ7XG4gICAgY29uc3Qgb3RoZXJJc0ZvcmVncm91bmQgPSBvdGhlckNvbXBvbmVudC5zdHlsZSAmJiBvdGhlckNvbXBvbmVudC5zdHlsZS5mb3JlZ3JvdW5kO1xuICAgIGNvbnN0IHpJbmRleCA9IHRoaXMuc3R5bGUgJiYgdGhpcy5zdHlsZS56SW5kZXg7XG4gICAgY29uc3Qgb3RoZXJ6SW5kZXggPSBvdGhlckNvbXBvbmVudC5zdHlsZSAmJiBvdGhlckNvbXBvbmVudC5zdHlsZS56SW5kZXg7XG5cbiAgICBpZih0aGlzLnBhcmVudCA9PSBvdGhlckNvbXBvbmVudCkge1xuICAgICAgcmV0dXJuIDE7XG4gICAgfSBlbHNlIGlmKG90aGVyQ29tcG9uZW50LnBhcmVudCA9PSB0aGlzKSB7XG4gICAgICByZXR1cm4gLTE7XG4gICAgfSBlbHNlIGlmKGlzRm9yZWdyb3VuZCAmJiAhb3RoZXJJc0ZvcmVncm91bmQpIHtcbiAgICAgIHJldHVybiAxXG4gICAgfSBlbHNlIGlmKCFpc0ZvcmVncm91bmQgJiYgb3RoZXJJc0ZvcmVncm91bmQpIHtcbiAgICAgIHJldHVybiAtMTtcbiAgICB9IGVsc2UgaWYoekluZGV4ID4gb3RoZXJ6SW5kZXgpIHtcbiAgICAgIHJldHVybiAxO1xuICAgIH0gZWxzZSBpZih6SW5kZXggPCBvdGhlcnpJbmRleCkge1xuICAgICAgcmV0dXJuIC0xO1xuICAgIH1cblxuICAgIHJldHVybiBvdGhlckNvbXBvbmVudC5jb21wYXJlVG9Db21wb25lbnQodGhpcykgfHwgLXRoaXMuY29tcGFyZVRvQ29tcG9uZW50KG90aGVyQ29tcG9uZW50KTtcbiAgfVxuXG4gIGNvbXBhcmVUb0NvbXBvbmVudChvdGhlckNvbXBvbmVudCkge1xuICAgIHJldHVybiAwO1xuICB9XG5cbiAgY29tcGFyZVRvTWVudShvdGhlckNvbXBvbmVudCkge1xuICAgIHJldHVybiAtMTtcbiAgfVxuXG4gIGNvbXBhcmVUb1Rvb2x0aXAob3RoZXJDb21wb25lbnQpIHtcbiAgICByZXR1cm4gLTE7XG4gIH1cblxuICBjb21wYXJlVG9Ob3RpZmljYXRpb24ob3RoZXJDb21wb25lbnQpIHtcbiAgICByZXR1cm4gLTE7XG4gIH1cblxuICBjb21wYXJlVG9TY3JvbGxiYXIob3RoZXJDb21wb25lbnQpIHtcbiAgICByZXR1cm4gLTE7XG4gIH1cbn0iLCIvKlxuICogQ29weXJpZ2h0IChDKSAyMDIwIEVsaWFzdGlrIChlbGlhc3Rpa3NvZnRzLmNvbSlcbiAqXG4gKiBUaGlzIGZpbGUgaXMgcGFydCBvZiBcIkpTR2FtZVRvb2xzXCIuXG4gKlxuICogXCJKU0dhbWVUb29sc1wiIGlzIGZyZWUgc29mdHdhcmU6IHlvdSBjYW4gcmVkaXN0cmlidXRlIGl0IGFuZC9vciBtb2RpZnlcbiAqIGl0IHVuZGVyIHRoZSB0ZXJtcyBvZiB0aGUgR05VIEdlbmVyYWwgUHVibGljIExpY2Vuc2UgYXMgcHVibGlzaGVkIGJ5XG4gKiB0aGUgRnJlZSBTb2Z0d2FyZSBGb3VuZGF0aW9uLCBlaXRoZXIgdmVyc2lvbiAzIG9mIHRoZSBMaWNlbnNlLCBvclxuICogKGF0IHlvdXIgb3B0aW9uKSBhbnkgbGF0ZXIgdmVyc2lvbi5cbiAqXG4gKiBcIkpTR2FtZVRvb2xzXCIgaXMgZGlzdHJpYnV0ZWQgaW4gdGhlIGhvcGUgdGhhdCBpdCB3aWxsIGJlIHVzZWZ1bCxcbiAqIGJ1dCBXSVRIT1VUIEFOWSBXQVJSQU5UWTsgd2l0aG91dCBldmVuIHRoZSBpbXBsaWVkIHdhcnJhbnR5IG9mXG4gKiBNRVJDSEFOVEFCSUxJVFkgb3IgRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UuICBTZWUgdGhlXG4gKiBHTlUgR2VuZXJhbCBQdWJsaWMgTGljZW5zZSBmb3IgbW9yZSBkZXRhaWxzLlxuICpcbiAqIFlvdSBzaG91bGQgaGF2ZSByZWNlaXZlZCBhIGNvcHkgb2YgdGhlIEdOVSBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlXG4gKiBhbG9uZyB3aXRoIFwiSlNHYW1lVG9vbHNcIi4gIElmIG5vdCwgc2VlIDxodHRwOi8vd3d3LmdudS5vcmcvbGljZW5zZXMvPi5cbiAqL1xuZXhwb3J0IGRlZmF1bHQge1xuICBTZXR0aW5nOiB7XG4gICAgRElTQUJMRV9PUFRJTUlaQVRJT05TOiBmYWxzZSwgLy8gdHJ1ZSB0byBkaXNhYmxlIG9wdGltaXphdGlvbnMsIGNhbiBmaXggc29tZSBwcm9ibGVtcywgZGlzYWJsaW5nIG9wdGltaXphdGlvbiByZWR1Y2VzIHBlcmZvcm1hbmNlXG4gICAgRElTQUJMRV9FWFBFUklNRU5UQUxfT1BUSU1JWkFUSU9OUzogZmFsc2UsIC8vIHRydWUgdG8gZGlzYWJsZSBvcHRpbWl6YXRpb25zIHRoYXQgYXJlIGNvbnNpZGVyZWQgZXhwZXJpbWVudGFsXG4gICAgRElTQUJMRV9JU19DT01QT05FTlRfVklTSUJMRV9PUFRJTUlaQVRJT05TOiB0cnVlLCAvLyB0cnVlIHRvIGRpc2FibGUgb3B0aW1pemF0aW9ucyBvZiB0aGUgQ29udGFpbmVyLmlzQ29tcG9uZW50VmlzaWJsZSBtZXRob2RcbiAgICBESVNBQkxFX0NPTlRBSU5FUlNfQ1VUVElORzogZmFsc2UsIC8vIGRpc2FibGluZyBjb250YWluZXJzIGN1dHRpbmcgYWxsb3cgdG8gdmlldyB0aGUgY29tcG9uZW50cyBvZiBhIGNvbnRhaW5lciB0aGF0IGFyZSBub3QgdG90YWxseSB2aXNpYmxlLCB5b3UgY2FuIGFsc28gZGlzYWJsZSBvcHRpbWl6YXRpb25zIHRvIGRpc3BsYXlzIGVsZW1lbnRzIHRoYXQgYXJlIG5vdCBkcmF3biBmb3Igb3B0aW1pemF0aW9uIHB1cnBvc2VzXG4gICAgRU5BQkxFX1BJWEVMX1JBVElPX1JFU0laSU5HOiB0cnVlLCAvLyBlbmFibGluZyB0aGlzIGFsbG93IHJlc2l6aW5nIHRoZSBjYW52YXMgdG8gbWF0Y2ggdGhlIHNjcmVlbiBwaXhlbCByYXRpb1xuICAgIFBJWEVMX1JBVElPOiAxLCAvLyB0aGUgY3VycmVudCBwaXhlbCByYXRpbywgYXV0b21hdGljYWxseSB1cGRhdGVkXG4gICAgUkVTT0xVVElPTl9TQ0FMRTogMSwgLy8gdGhlIHJlc29sdXRpb24gc2NhbGVcbiAgICBGT05UX0ZBTUlMWTogXCJzYW5zLXNlcmlmXCIsXG4gICAgRk9OVF9TSVpFOiAyOCxcbiAgICBDQU5WQVNfV0lEVEg6IDYwMCxcbiAgICBDQU5WQVNfSEVJR0hUOiA0MDAsXG4gICAgREVGQVVMVF9QQURESU5HOiA2LFxuICAgIERFRkFVTFRfU1BBQ0lORzogNixcbiAgICBCVVRUT05fREVGQVVMVF9CQUNLR1JPVU5EOiBcInJnYmEoMCwgMCwgMCwgMClcIixcbiAgICBCVVRUT05fREVGQVVMVF9IT1ZFUl9CQUNLR1JPVU5EOiBcIiM5NUE1QTZcIixcbiAgICBCVVRUT05fREVGQVVMVF9DTElDS19CQUNLR1JPVU5EOiBcIiM3MjdGODBcIixcbiAgICBCVVRUT05fREVGQVVMVF9BTFRFUk5BVElWRV9CQUNLR1JPVU5EOiBcIiNBQ0JFQkZcIixcbiAgICBJTlBVVF9ERUZBVUxUX0ZPTlRfQ09MT1I6IFwiIzAwMFwiLFxuICAgIElOUFVUX0RFRkFVTFRfQkFDS0dST1VORF9DT0xPUjogXCIjZmZmXCIsXG4gICAgSU5QVVRfREVGQVVMVF9CT1JERVJfQ09MT1I6IFwiIzAwMFwiLFxuICAgIElOUFVUX0RFRkFVTFRfQk9SREVSX0NPTE9SX1NFTEVDVEVEOiBcIiNhMmNkZDhcIixcbiAgICBJTlBVVF9ERUZBVUxUX1NFTEVDVF9DT0xPUjogXCIjMjk4MGI5XCIsXG4gICAgTEFCRUxfREVGQVVMVF9GT05UX0NPTE9SOiBcIiMwMDBcIixcbiAgICBMSU5LX0RFRkFVTFRfQ09MT1I6IFwiIzAwMDBFRVwiLFxuICAgIExJTktfREVGQVVMVF9IT1ZFUl9DT0xPUjogXCIjNEQ0REZGXCIsXG4gICAgTElOS19ERUZBVUxUX0NMSUNLX0NPTE9SOiBcIiNFRTc3MDBcIixcbiAgICBNRU5VX0RFRkFVTFRfQkFDS0dST1VORDogXCJyZ2JhKDQ0LCA2MiwgODAsIDAuNzUpXCIsXG4gICAgTUVOVV9ERUZBVUxUX0JMVVJfQkFDS0dST1VORDogZmFsc2UsXG4gICAgTk9USUZJQ0FUSU9OX0RFRkFVTFRfQkFDS0dST1VORDogXCJyZ2JhKDQ2LCAyMDQsIDExMywgMC41KVwiLFxuICAgIE5PVElGSUNBVElPTl9ERUZBVUxUX0FOSU1BVElPTl9EVVJBVElPTjogNTAwLCAvLyBtc1xuICAgIFBST0dSRVNTX0RFRkFVTFRfQkFDS0dST1VORDogXCIjYmRjM2M3XCIsXG4gICAgUFJPR1JFU1NfREVGQVVMVF9GT1JFR1JPVU5EOiBcIiMyN2FlNjBcIixcbiAgICBQUk9HUkVTU19ERUZBVUxUX0FOSU1BVElPTl9EVVJBVElPTjogMjAwMCwgLy8gbXNcbiAgICBUT09MVElQX0RFRkFVTFRfQkFDS0dST1VORDogXCJyZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMjUpXCIsXG4gICAgQVJST1dfREVGQVVMVF9MSU5FX0NBUDogXCJyb3VuZFwiLFxuICAgIEFSUk9XX0RFRkFVTFRfQ09MT1I6IFwiI0ZGMDAwMFwiLFxuICAgIEFSUk9XX0RFRkFVTFRfTElORV9TSVpFOiA4LFxuICAgIEFSUk9XX0RFRkFVTFRfSEVBRF9TSVpFOiAyMCxcbiAgICBDUk9TU19ERUZBVUxUX0xJTkVfQ0FQOiBcInJvdW5kXCIsXG4gICAgQ1JPU1NfREVGQVVMVF9DT0xPUjogXCIjZmZmXCIsXG4gICAgQ1JPU1NfREVGQVVMVF9MSU5FX1NJWkU6IDMsXG4gICAgU0NST0xMQkFSX0RFRkFVTFRfQkFDS0dST1VORDogXCJyZ2JhKDE0OSwgMTY1LCAxNjYsIDAuNzUpXCIsXG4gICAgU0NST0xMQkFSX0RFRkFVTFRfSE9WRVJfQkFDS0dST1VORDogXCJyZ2JhKDE0OSwgMTY1LCAxNjYsIDAuOSlcIixcbiAgICBTQ1JPTExCQVJfREVGQVVMVF9DTElDS19CQUNLR1JPVU5EOiBcInJnYmEoMTQ5LCAxNjUsIDE2NiwgMC41KVwiLFxuICAgIFNDUk9MTEJBUl9ERUZBVUxUX1NJWkU6IDEwLFxuICAgIERFRkFVTFRfQk9SREVSX1NJWkU6IDMsXG4gICAgREVGQVVMVF9CT1JERVJfQ09MT1JfU0VMRUNURUQ6IFwiI2EyY2RkOFwiLFxuICAgIERFRkFVTFRfQU5JTUFUSU9OX0RVUkFUSU9OOiAyMDAwLCAvLyBtc1xuICAgIFRSSUFOR0xFX0RFRkFVTFRfTElORV9DQVA6IFwicm91bmRcIixcbiAgICBUUklBTkdMRV9ERUZBVUxUX0NPTE9SOiBcIiMwMDBcIixcbiAgICBUUklBTkdMRV9ERUZBVUxUX0ZJTExfQ09MT1I6IFwiIzAwMFwiLFxuICAgIFRSSUFOR0xFX0RFRkFVTFRfTElORV9TSVpFOiAzLFxuICAgIFRSSUFOR0xFX0RFRkFVTFRfRklMTDogdHJ1ZSxcbiAgICBTRUxFQ1RfREVGQVVMVF9CQUNLR1JPVU5EOiBcIiNlY2YwZjFcIixcbiAgICBTRUxFQ1RfREVGQVVMVF9IT1ZFUl9CQUNLR1JPVU5EOiBcIiNiZGMzYzdcIixcbiAgICBTRUxFQ1RfREVGQVVMVF9DTElDS19CQUNLR1JPVU5EOiBcIiNhZGIyYjVcIixcbiAgICBDSVJDTEVfREVGQVVMVF9MSU5FX0NBUDogXCJyb3VuZFwiLFxuICAgIENJUkNMRV9ERUZBVUxUX0NPTE9SOiBcIiNmZmZcIixcbiAgICBDSVJDTEVfREVGQVVMVF9GSUxMX0NPTE9SOiBcIiMwMDBcIixcbiAgICBDSVJDTEVfREVGQVVMVF9MSU5FX1NJWkU6IDMsXG4gICAgQ0lSQ0xFX0RFRkFVTFRfRklMTDogdHJ1ZSxcbiAgICBFUlJPUl9NRU5VX0JBQ0tHUk9VTkRfQ09MT1I6IFwiIzM0OThkYlwiXG4gIH0sXG4gIEtleToge1xuICAgIFVQOiAzOCxcbiAgICBSSUdIVDogMzksXG4gICAgQk9UVE9NOiA0MCxcbiAgICBMRUZUOiAzNyxcbiAgICBFTlRFUjogMTMsXG4gICAgRUNIQVA6IDI3LFxuICAgIFRBQjogOVxuICB9LFxuICBBbGlnbmVtZW50OiB7XG4gICAgUklHSFQ6IFwicmlnaHRcIixcbiAgICBMRUZUOiBcImxlZnRcIixcbiAgICBDRU5URVI6IFwiY2VudGVyXCIsXG4gICAgREVGQVVMVDogXCJkZWZhdWx0XCJcbiAgfSxcbiAgVmVydGljYWxBbGlnbmVtZW50OiB7XG4gICAgVE9QOiBcInRvcFwiLFxuICAgIENFTlRFUjogXCJjZW50ZXJcIixcbiAgICBCT1RUT006IFwiYm90dG9tXCIsXG4gICAgREVGQVVMVDogXCJkZWZhdWx0XCJcbiAgfSxcbiAgU3RyaW5nOiB7XG4gICAgRVJST1JfTUVTU0FHRV9DQU5WQVM6IFwiQSBmYXRhbCBlcnJvciBoYXMgb2NjdXJyZWQgYXQgdGhlIEpTR2FtZVRvb2xzIGxldmVsLlwiLFxuICAgIEVSUk9SX01FU1NBR0VfQ0FOVkFTX0xBQkVMIDogXCI6JyhcXG5BIGZhdGFsIGVycm9yIGhhcyBvY2N1cnJlZCBhdCB0aGUgSlNHYW1lVG9vbHMgbGV2ZWwuXCIsXG4gICAgUkVUUlk6IFwiUmV0cnlcIixcbiAgICBOT1RJQ0VfTUVTU0FHRTogXCJOb3RpY2U6XCIsXG4gICAgV0FSTklOR19NRVNTQUdFOiBcIldhcm5pbmc6XCIsXG4gICAgRVJST1JfTUVTU0FHRTogXCJFcnJvcjpcIixcbiAgICBPUFRJTUlaQVRJT05fRElTQUJMRUQ6IFwiT3B0aW1pemF0aW9ucyBhcmUgZGlzYWJsZWQuIFlvdSBtYXkgbm90aWNlIGxvdyBwZXJmb3JtYW5jZS5cIixcbiAgICBDT05UQUlORVJfQ1VUVElOR19ESVNBQkxFRDogXCJDb250YWluZXJzIGN1dHRpbmcgaXMgZGlzYWJsZWQuXCIsXG4gICAgQlVUVE9OX0lNQUdFX0RFUFJFQ0FURUQ6IFwiSlNHYW1lVG9vbHMuQnV0dG9uSW1hZ2UgaXMgZGVwcmVjYXRlZC4gUGxlYXNlIHVzZSBhIEJ1dHRvbiB3aXRoIGFuIEltYWdlQ29udGFpbmVyIGluc3RlYWQuXCIsXG4gICAgSU5QVVRfRlVMTFNDUkVFTjogXCJUaGUgdXNlIG9mIEpTR2FtZVRvb2xzLkNhbnZhcyBpcyBuZWVkZWQgZm9yIElucHV0IGNvbXBvbmVudHMgdG8gcHJvcGVybHkgd29yayBpbiBmdWxsc2NyZWVuIG1vZGUuXCIsXG4gICAgREVUQUlMUzogXCJEZXRhaWxzXCJcbiAgfVxufTsiLCIvKlxuICogQ29weXJpZ2h0IChDKSAyMDIwIEVsaWFzdGlrIChlbGlhc3Rpa3NvZnRzLmNvbSlcbiAqXG4gKiBUaGlzIGZpbGUgaXMgcGFydCBvZiBcIkpTR2FtZVRvb2xzXCIuXG4gKlxuICogXCJKU0dhbWVUb29sc1wiIGlzIGZyZWUgc29mdHdhcmU6IHlvdSBjYW4gcmVkaXN0cmlidXRlIGl0IGFuZC9vciBtb2RpZnlcbiAqIGl0IHVuZGVyIHRoZSB0ZXJtcyBvZiB0aGUgR05VIEdlbmVyYWwgUHVibGljIExpY2Vuc2UgYXMgcHVibGlzaGVkIGJ5XG4gKiB0aGUgRnJlZSBTb2Z0d2FyZSBGb3VuZGF0aW9uLCBlaXRoZXIgdmVyc2lvbiAzIG9mIHRoZSBMaWNlbnNlLCBvclxuICogKGF0IHlvdXIgb3B0aW9uKSBhbnkgbGF0ZXIgdmVyc2lvbi5cbiAqXG4gKiBcIkpTR2FtZVRvb2xzXCIgaXMgZGlzdHJpYnV0ZWQgaW4gdGhlIGhvcGUgdGhhdCBpdCB3aWxsIGJlIHVzZWZ1bCxcbiAqIGJ1dCBXSVRIT1VUIEFOWSBXQVJSQU5UWTsgd2l0aG91dCBldmVuIHRoZSBpbXBsaWVkIHdhcnJhbnR5IG9mXG4gKiBNRVJDSEFOVEFCSUxJVFkgb3IgRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UuICBTZWUgdGhlXG4gKiBHTlUgR2VuZXJhbCBQdWJsaWMgTGljZW5zZSBmb3IgbW9yZSBkZXRhaWxzLlxuICpcbiAqIFlvdSBzaG91bGQgaGF2ZSByZWNlaXZlZCBhIGNvcHkgb2YgdGhlIEdOVSBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlXG4gKiBhbG9uZyB3aXRoIFwiSlNHYW1lVG9vbHNcIi4gIElmIG5vdCwgc2VlIDxodHRwOi8vd3d3LmdudS5vcmcvbGljZW5zZXMvPi5cbiAqL1xuaW1wb3J0IEJveCBmcm9tIFwiLi9Cb3hcIjtcbmltcG9ydCBDb21wb25lbnQgZnJvbSBcIi4vQ29tcG9uZW50XCI7XG5pbXBvcnQgQ29uc3RhbnRzIGZyb20gXCIuL0NvbnN0YW50c1wiO1xuaW1wb3J0IFNjcm9sbGJhckhvcml6b250YWwgZnJvbSBcIi4vU2Nyb2xsYmFySG9yaXpvbnRhbFwiO1xuaW1wb3J0IFNjcm9sbGJhclZlcnRpY2FsIGZyb20gXCIuL1Njcm9sbGJhclZlcnRpY2FsXCI7XG5pbXBvcnQgU3R5bGUgZnJvbSBcIi4vU3R5bGVcIjtcbmltcG9ydCBVdGlscyBmcm9tIFwiLi9VdGlsc1wiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDb250YWluZXIgZXh0ZW5kcyBCb3gge1xuICBzZWxlY3RhYmxlID0gZmFsc2U7XG4gICNjb21wb25lbnRzID0gW107XG4gICNfbWF4V2lkdGggPSAwO1xuICAjX21heEhlaWdodCA9IDA7XG4gICNfbWluV2lkdGggPSAwO1xuICAjX21pbkhlaWdodCA9IDA7XG4gIGV2ZW50Q2hhbmdlQ2FsbGJhY2sgPSAoKSA9PiB0aGlzLnJlYWN0b3IuZGlzcGF0Y2hFdmVudChcIm9uQ2hhbmdlXCIsIHRoaXMpO1xuXG4gIGNvbnN0cnVjdG9yKHgsIHksIG1heFdpZHRoLCBtYXhIZWlnaHQsIHN0eWxlLCAuLi5jb21wb25lbnRzKSB7XG4gICAgc3VwZXIoeCwgeSwgbnVsbCwgbnVsbCwgc3R5bGUpO1xuXG4gICAgdGhpcy5hZGRBbGwoLi4uY29tcG9uZW50cyk7XG4gICAgdGhpcy5jYW52YXNUbXAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiY2FudmFzXCIpO1xuICAgIHRoaXMuI19tYXhXaWR0aCA9IG1heFdpZHRoO1xuICAgIHRoaXMuI19tYXhIZWlnaHQgPSBtYXhIZWlnaHQ7XG4gICAgdGhpcy5zY3JvbGxiYXJIb3Jpem9udGFsID0gbmV3IFNjcm9sbGJhckhvcml6b250YWwobnVsbCwgbnVsbCwgdGhpcyk7XG4gICAgdGhpcy5zY3JvbGxiYXJWZXJ0aWNhbCA9IG5ldyBTY3JvbGxiYXJWZXJ0aWNhbChudWxsLCBudWxsLCB0aGlzKTtcblxuICAgIHRoaXMuYWRkU2Nyb2xsQWN0aW9uKChkZWx0YVgsIGRlbHRhWSkgPT4gdGhpcy5jb250cm9sU2Nyb2xsaW5nKGRlbHRhWCwgZGVsdGFZKSk7XG5cbiAgICBpZighQ29uc3RhbnRzLlNldHRpbmcuRElTQUJMRV9FWFBFUklNRU5UQUxfT1BUSU1JWkFUSU9OUykge1xuICAgICAgdGhpcy5hZGRDaGFuZ2VBY3Rpb24oY29tcG9uZW50Q2hhbmdlZCA9PiB7XG4gICAgICAgIGNvbXBvbmVudENoYW5nZWQgPT0gdGhpcy5wYXJlbnQgJiYgdGhpcy5jb21wb25lbnRzLmZvckVhY2goY29tcG9uZW50ID0+IGNvbXBvbmVudCAmJiBjb21wb25lbnQucmVhY3Rvci5kaXNwYXRjaEV2ZW50KFwib25DaGFuZ2VcIiwgdGhpcykpO1xuICAgICAgfSk7XG4gICAgfVxuICB9XG5cbiAgZHJhdyhjb250ZXh0KSB7XG4gICAgaWYodGhpcy5oaWRkZW4pIHJldHVybjtcbiAgICBjb25zdCBjYW52YXMgPSBjb250ZXh0LmNhbnZhcztcbiAgICBjb25zdCBjdHggPSBjYW52YXMuZ2V0Q29udGV4dChcIjJkXCIpO1xuICAgIGN0eC5zYXZlKCk7XG5cbiAgICBpZih0aGlzLmlzQ3V0dGluZykge1xuICAgICAgY29uc3QgY3R4VGVtcCA9IHRoaXMuY2FudmFzVG1wLmdldENvbnRleHQoXCIyZFwiKTtcbiAgICAgIHRoaXMuY2FudmFzVG1wLndpZHRoID0gVXRpbHMuZ2V0Q2FudmFzV2lkdGgoY2FudmFzKSAqIENvbnN0YW50cy5TZXR0aW5nLlBJWEVMX1JBVElPO1xuICAgICAgdGhpcy5jYW52YXNUbXAuaGVpZ2h0ID0gVXRpbHMuZ2V0Q2FudmFzSGVpZ2h0KGNhbnZhcykgKiBDb25zdGFudHMuU2V0dGluZy5QSVhFTF9SQVRJTztcbiAgICAgIHRoaXMuY2FudmFzVG1wLnN0eWxlLndpZHRoID0gVXRpbHMuZ2V0Q2FudmFzV2lkdGgoY2FudmFzKTtcbiAgICAgIHRoaXMuY2FudmFzVG1wLnN0eWxlLmhlaWdodCA9IFV0aWxzLmdldENhbnZhc0hlaWdodChjYW52YXMpO1xuICAgICAgVXRpbHMuY2xlYXIoY3R4VGVtcCk7XG4gICAgfVxuICAgIFxuICAgIHRoaXMuY29tcG9uZW50cy5mb3JFYWNoKGNvbXBvbmVudCA9PiB7XG4gICAgICBpZih0aGlzLmNhbnZhcykgY29tcG9uZW50LmNhbnZhcyA9IHRoaXMuY2FudmFzO1xuICAgIH0pO1xuICAgIFxuICAgIHRoaXMuY29udHJvbFNjcm9sbGluZygwLCAwKTtcbiAgICBzdXBlci5kcmF3KGNvbnRleHQpO1xuXG4gICAgY3R4LnJlc3RvcmUoKTtcbiAgfVxuXG4gIGRyYXdWZXJ0aWNhbFNjcm9sbEJhcihjdHgpIHtcbiAgICBpZih0aGlzLnNjcm9sbGJhclZlcnRpY2FsKSB7XG4gICAgICB0aGlzLnNjcm9sbGJhclZlcnRpY2FsLmNhbnZhcyA9IHRoaXMuY2FudmFzO1xuICAgICAgdGhpcy5zY3JvbGxiYXJWZXJ0aWNhbC5kcmF3KGN0eCk7XG4gICAgfVxuICB9XG5cbiAgZHJhd0hvcml6b250YWxTY3JvbGxCYXIoY3R4KSB7XG4gICAgaWYodGhpcy5zY3JvbGxiYXJIb3Jpem9udGFsKSB7XG4gICAgICB0aGlzLnNjcm9sbGJhckhvcml6b250YWwuY2FudmFzID0gdGhpcy5jYW52YXM7XG4gICAgICB0aGlzLnNjcm9sbGJhckhvcml6b250YWwuZHJhdyhjdHgpO1xuICAgIH1cbiAgfVxuXG4gIGRyYXdTY3JvbGxiYXJzKGN0eCkge1xuICAgIGlmKCF0aGlzLnN0eWxlLnNjcm9sbFhEaXNhYmxlZCkgdGhpcy5kcmF3SG9yaXpvbnRhbFNjcm9sbEJhcihjdHgpO1xuICAgIGlmKCF0aGlzLnN0eWxlLnNjcm9sbFlEaXNhYmxlZCkgdGhpcy5kcmF3VmVydGljYWxTY3JvbGxCYXIoY3R4KTtcbiAgfVxuXG4gIHNldCguLi5jb21wb25lbnRzKSB7XG4gICAgbGV0IGhhc0NoYW5nZWQgPSBmYWxzZTtcblxuICAgIGlmKGNvbXBvbmVudHMubGVuZ3RoID09IHRoaXMuY29tcG9uZW50cy5sZW5ndGgpIHtcbiAgICAgIGNvbXBvbmVudHMuZm9yRWFjaCgoY29tcG9uZW50LCBpKSA9PiB7XG4gICAgICAgIGlmKHRoaXMuY29tcG9uZW50c1tpXSAhPSBjb21wb25lbnQpIGhhc0NoYW5nZWQgPSB0cnVlO1xuICAgICAgfSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGhhc0NoYW5nZWQgPSB0cnVlO1xuICAgIH1cblxuICAgIGlmKGhhc0NoYW5nZWQpIHtcbiAgICAgIHRoaXMuY2xlYXIoKTtcbiAgICAgIHRoaXMuYWRkQWxsKC4uLmNvbXBvbmVudHMpO1xuICAgIH1cbiAgfVxuXG4gIGFkZChjb21wb25lbnQpIHtcbiAgICB0aGlzLiNjb21wb25lbnRzLnB1c2goY29tcG9uZW50KTtcbiAgICBjb21wb25lbnQucGFyZW50ID0gdGhpcztcbiAgICBpZih0aGlzLmNhbnZhcykgY29tcG9uZW50LmNhbnZhcyA9IHRoaXMuY2FudmFzO1xuICAgIGNvbXBvbmVudC5hZGRDaGFuZ2VBY3Rpb24odGhpcy5ldmVudENoYW5nZUNhbGxiYWNrKTtcbiAgICB0aGlzLnJlYWN0b3IuZGlzcGF0Y2hFdmVudChcIm9uQ2hhbmdlXCIsIHRoaXMpO1xuICB9XG5cbiAgYWRkQWxsKC4uLmNvbXBvbmVudHMpIHtcbiAgICBjb21wb25lbnRzLmZvckVhY2goY29tcG9uZW50ID0+IHRoaXMuYWRkKGNvbXBvbmVudCkpO1xuICB9XG5cbiAgcmVtb3ZlKGNvbXBvbmVudCkge1xuICAgIGlmKHRoaXMuI2NvbXBvbmVudHMuaW5kZXhPZihjb21wb25lbnQpICE9IC0xKSB7XG4gICAgICBjb21wb25lbnQucmVtb3ZlQ2hhbmdlQWN0aW9uKHRoaXMuZXZlbnRDaGFuZ2VDYWxsYmFjayk7XG4gICAgICB0aGlzLiNjb21wb25lbnRzID0gdGhpcy4jY29tcG9uZW50cy5maWx0ZXIoY3VycmVudCA9PiBjb21wb25lbnQgIT0gY3VycmVudCk7XG4gICAgICB0aGlzLnJlYWN0b3IuZGlzcGF0Y2hFdmVudChcIm9uQ2hhbmdlXCIsIHRoaXMpO1xuICAgIH1cbiAgfVxuXG4gIGNsZWFyKCkge1xuICAgIHRoaXMuI2NvbXBvbmVudHMuZm9yRWFjaChjb21wb25lbnQgPT4gdGhpcy5yZW1vdmUoY29tcG9uZW50KSk7XG4gICAgdGhpcy5yZWFjdG9yLmRpc3BhdGNoRXZlbnQoXCJvbkNoYW5nZVwiLCB0aGlzKTtcbiAgfVxuXG4gIGdldCBjb21wb25lbnRzKCkge1xuICAgIGNvbnN0IGNvbXBvbmVudHMgPSBbXTtcbiAgICB0aGlzLiNjb21wb25lbnRzLmZvckVhY2goY29tcG9uZW50ID0+IGNvbXBvbmVudHMucHVzaChjb21wb25lbnQpKTtcbiAgICByZXR1cm4gY29tcG9uZW50cztcbiAgfVxuXG4gIGdldCBhbGxDb21wb25lbnRzKCkge1xuICAgIGNvbnN0IGNvbXBvbmVudHMgPSB0aGlzLmNvbXBvbmVudHM7XG4gICAgY29tcG9uZW50cy5wdXNoKHRoaXMuc2Nyb2xsYmFySG9yaXpvbnRhbCk7XG4gICAgY29tcG9uZW50cy5wdXNoKHRoaXMuc2Nyb2xsYmFyVmVydGljYWwpO1xuICAgIHJldHVybiBjb21wb25lbnRzO1xuICB9XG5cbiAgZ2V0Q29tcG9uZW50c1RyZWUoc3RhcnQgPSB0aGlzKSB7XG4gICAgY29uc3QgY29tcG9uZW50cyA9IHtcbiAgICAgIFwiY29tcG9uZW50XCI6IHN0YXJ0LFxuICAgICAgXCJjaGlsZHNcIjogW11cbiAgICB9O1xuXG4gICAgaWYoc3RhcnQuYWxsQ29tcG9uZW50cykge1xuICAgICAgc3RhcnQuYWxsQ29tcG9uZW50cy5mb3JFYWNoKGNvbXBvbmVudCA9PiBjb21wb25lbnRzLmNoaWxkcy5wdXNoKHRoaXMuZ2V0Q29tcG9uZW50c1RyZWUoY29tcG9uZW50KSkpO1xuICAgIH1cblxuICAgIHJldHVybiBjb21wb25lbnRzO1xuICB9XG5cbiAgc3RhdGljIHNvcnRDb21wb25lbnRzVHJlZShjb21wb25lbnQsIG90aGVyKSB7XG4gICAgcmV0dXJuIGNvbXBvbmVudC5jb21wb25lbnQuY29tcGFyZVRvKG90aGVyLmNvbXBvbmVudCk7XG4gIH1cblxuICBkaXNhYmxlKCkge1xuICAgIGxldCBjaGFuZ2VkID0gc3VwZXIuZGlzYWJsZSgpO1xuXG4gICAgdGhpcy4jY29tcG9uZW50cy5mb3JFYWNoKGNvbXBvbmVudCA9PiB7XG4gICAgICBpZihjb21wb25lbnQgJiYgY29tcG9uZW50LmRpc2FibGUgJiYgY29tcG9uZW50LmRpc2FibGUoKSkge1xuICAgICAgICBjaGFuZ2VkID0gdHJ1ZTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIGlmKGNoYW5nZWQpIHRoaXMucmVhY3Rvci5kaXNwYXRjaEV2ZW50KFwib25DaGFuZ2VcIiwgdGhpcyk7XG4gIH1cblxuICBlbmFibGUoKSB7XG4gICAgbGV0IGNoYW5nZWQgPSBzdXBlci5lbmFibGUoKTtcblxuICAgIHRoaXMuI2NvbXBvbmVudHMuZm9yRWFjaChjb21wb25lbnQgPT4ge1xuICAgICAgaWYoY29tcG9uZW50ICYmIGNvbXBvbmVudC5lbmFibGUgJiYgY29tcG9uZW50LmVuYWJsZSgpKSB7XG4gICAgICAgIGNoYW5nZWQgPSB0cnVlO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgaWYoY2hhbmdlZCkgdGhpcy5yZWFjdG9yLmRpc3BhdGNoRXZlbnQoXCJvbkNoYW5nZVwiLCB0aGlzKTtcbiAgfVxuXG4gIGdldCB3aWR0aCgpIHtcbiAgICBjb25zdCB3aWR0aCA9ICh0aGlzLnBhcmVudCAmJiB0aGlzLnBhcmVudC53aWR0aCk7XG4gICAgY29uc3QgbWluID0gdGhpcy5tYXhXaWR0aCAhPSBudWxsID8gTWF0aC5taW4odGhpcy5tYXhXaWR0aCwgd2lkdGgpIDogbnVsbDtcbiAgICByZXR1cm4gdGhpcy5taW5XaWR0aCAhPSBudWxsID8gTWF0aC5tYXgodGhpcy5taW5XaWR0aCwgbWluICE9IG51bGwgPyBtaW4gOiB3aWR0aCkgOiB3aWR0aDtcbiAgfVxuXG4gIGdldCBoZWlnaHQoKSB7XG4gICAgY29uc3QgaGVpZ2h0ID0gKHRoaXMucGFyZW50ICYmIHRoaXMucGFyZW50LmhlaWdodCk7XG4gICAgY29uc3QgbWluID0gdGhpcy5tYXhXaWR0aCAhPSBudWxsID8gTWF0aC5taW4odGhpcy5tYXhIZWlnaHQsIGhlaWdodCkgOiBudWxsO1xuICAgIHJldHVybiB0aGlzLm1pbkhlaWdodCAhPSBudWxsID8gTWF0aC5tYXgodGhpcy5taW5IZWlnaHQsIG1pbiAhPSBudWxsID8gbWluIDogaGVpZ2h0KSA6IGhlaWdodDtcbiAgfVxuXG4gIGdldCBtYXhXaWR0aCgpIHtcbiAgICByZXR1cm4gdGhpcy4jX21heFdpZHRoO1xuICB9XG5cbiAgZ2V0IG1heEhlaWdodCgpIHtcbiAgICByZXR1cm4gdGhpcy4jX21heEhlaWdodDtcbiAgfVxuXG4gIHNldCBtYXhXaWR0aChtYXhXaWR0aCkge1xuICAgIGlmKG1heFdpZHRoICE9IHRoaXMuI19tYXhXaWR0aCkge1xuICAgICAgdGhpcy4jX21heFdpZHRoID0gbWF4V2lkdGg7XG4gICAgICB0aGlzLnJlYWN0b3IuZGlzcGF0Y2hFdmVudChcIm9uQ2hhbmdlXCIsIHRoaXMpO1xuICAgIH1cbiAgfVxuXG4gIHNldCBtYXhIZWlnaHQobWF4SGVpZ2h0KSB7XG4gICAgaWYobWF4SGVpZ2h0ICE9IHRoaXMuI19tYXhIZWlnaHQpIHtcbiAgICAgIHRoaXMuI19tYXhIZWlnaHQgPSBtYXhIZWlnaHQ7XG4gICAgICB0aGlzLnJlYWN0b3IuZGlzcGF0Y2hFdmVudChcIm9uQ2hhbmdlXCIsIHRoaXMpO1xuICAgIH1cbiAgfVxuXG4gIGdldCBtaW5XaWR0aCgpIHtcbiAgICByZXR1cm4gdGhpcy4jX21pbldpZHRoO1xuICB9XG5cbiAgZ2V0IG1pbkhlaWdodCgpIHtcbiAgICByZXR1cm4gdGhpcy4jX21pbkhlaWdodDtcbiAgfVxuXG4gIHNldCBtaW5XaWR0aChtaW5XaWR0aCkge1xuICAgIGlmKG1pbldpZHRoICE9IHRoaXMuI19taW5XaWR0aCkge1xuICAgICAgdGhpcy4jX21pbldpZHRoID0gbWluV2lkdGg7XG4gICAgICB0aGlzLnJlYWN0b3IuZGlzcGF0Y2hFdmVudChcIm9uQ2hhbmdlXCIsIHRoaXMpO1xuICAgIH1cbiAgfVxuXG4gIHNldCBtaW5IZWlnaHQobWluSGVpZ2h0KSB7XG4gICAgaWYobWluSGVpZ2h0ICE9IHRoaXMuI19taW5IZWlnaHQpIHtcbiAgICAgIHRoaXMuI19taW5IZWlnaHQgPSBtaW5IZWlnaHQ7XG4gICAgICB0aGlzLnJlYWN0b3IuZGlzcGF0Y2hFdmVudChcIm9uQ2hhbmdlXCIsIHRoaXMpO1xuICAgIH1cbiAgfVxuXG4gIHVwZGF0ZUlubmVySGVpZ2h0KCkgeyB9XG5cbiAgdXBkYXRlSW5uZXJXaWR0aCgpIHsgfVxuXG4gIHNldCBjYW52YXMoY2FudmFzKSB7XG4gICAgaWYoY2FudmFzICE9IHRoaXMuY2FudmFzKSB7XG4gICAgICBzdXBlci5jYW52YXMgPSBjYW52YXM7XG4gIFxuICAgICAgdGhpcy4jY29tcG9uZW50cy5mb3JFYWNoKGNvbXBvbmVudCA9PiB7XG4gICAgICAgIGNvbXBvbmVudC5jYW52YXMgPSBjYW52YXM7XG4gICAgICAgIGlmKGNvbXBvbmVudC5yZWFjdG9yKSBjb21wb25lbnQucmVhY3Rvci5kaXNwYXRjaEV2ZW50KFwib25DaGFuZ2VcIiwgdGhpcyk7XG4gICAgICB9KTtcbiAgXG4gICAgICB0aGlzLnJlYWN0b3IuZGlzcGF0Y2hFdmVudChcIm9uQ2hhbmdlXCIsIHRoaXMpO1xuICAgIH1cbiAgfVxuXG4gIGdldCBjYW52YXMoKSB7XG4gICAgcmV0dXJuIHN1cGVyLmNhbnZhcztcbiAgfVxuXG4gIGdldENvbXBvbmVudElkKGNvbXBvbmVudCkge1xuICAgIGxldCByZXN1bHQgPSBudWxsO1xuXG4gICAgdGhpcy4jY29tcG9uZW50cy5mb3JFYWNoKChjLCBpKSA9PiB7XG4gICAgICBpZihjID09IGNvbXBvbmVudCkgcmVzdWx0ID0gaTtcbiAgICB9KTtcblxuICAgIHJldHVybiByZXN1bHQ7XG4gIH1cblxuICBnZXQgc2Nyb2xsQXJlYVNpemVYKCkge1xuICAgIHJldHVybiB0aGlzLmlubmVyV2lkdGggLSB0aGlzLndpZHRoO1xuICB9XG5cbiAgZ2V0IHNjcm9sbEFyZWFTaXplWSgpIHtcbiAgICByZXR1cm4gdGhpcy5pbm5lckhlaWdodCAtIHRoaXMuaGVpZ2h0O1xuICB9XG5cbiAgY29udHJvbFNjcm9sbGluZyhkZWx0YVgsIGRlbHRhWSkge1xuICAgIGlmKCF0aGlzLnN0eWxlLnNjcm9sbFlEaXNhYmxlZCkge1xuICAgICAgaWYodGhpcy5zY3JvbGxBcmVhU2l6ZVkgPD0gMCkge1xuICAgICAgICB0aGlzLm9mZnNldFNjcm9sbFkgPSAwO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgY29uc3QgcGVyY2VudFNjcm9sbGJhclkgPSB0aGlzLm9mZnNldFNjcm9sbFkgLyB0aGlzLnNjcm9sbEFyZWFTaXplWTtcbiAgXG4gICAgICAgIGlmKHBlcmNlbnRTY3JvbGxiYXJZIDw9IDAgJiYgZGVsdGFZIDw9IDApIHtcbiAgICAgICAgICB0aGlzLm9mZnNldFNjcm9sbFkgPSBNYXRoLm1pbigwLCB0aGlzLnkpO1xuICAgICAgICB9IGVsc2UgaWYocGVyY2VudFNjcm9sbGJhclkgPiAxICYmIGRlbHRhWSA+PSAwKSB7XG4gICAgICAgICAgdGhpcy5vZmZzZXRTY3JvbGxZID0gdGhpcy5zY3JvbGxBcmVhU2l6ZVk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5vZmZzZXRTY3JvbGxZIC09IGRlbHRhWTtcbiAgICB9XG5cbiAgICBpZighdGhpcy5zdHlsZS5zY3JvbGxYRGlzYWJsZWQpIHtcbiAgICAgIGlmKHRoaXMuc2Nyb2xsQXJlYVNpemVYIDw9IDApIHtcbiAgICAgICAgdGhpcy5vZmZzZXRTY3JvbGxYID0gMDtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGNvbnN0IHBlcmNlbnRTY3JvbGxiYXJYID0gdGhpcy5vZmZzZXRTY3JvbGxYIC8gdGhpcy5zY3JvbGxBcmVhU2l6ZVg7XG4gIFxuICAgICAgICBpZihwZXJjZW50U2Nyb2xsYmFyWCA8PSAwICYmIGRlbHRhWCA8PSAwKSB7XG4gICAgICAgICAgdGhpcy5vZmZzZXRTY3JvbGxYID0gTWF0aC5taW4oMCwgdGhpcy54KTtcbiAgICAgICAgfSBlbHNlIGlmKHBlcmNlbnRTY3JvbGxiYXJYID4gMSAmJiBkZWx0YVggPj0gMCkge1xuICAgICAgICAgIHRoaXMub2Zmc2V0U2Nyb2xsWCA9IHRoaXMuc2Nyb2xsQXJlYVNpemVYO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMub2Zmc2V0U2Nyb2xsWCAtPSBkZWx0YVg7XG4gICAgfVxuICB9XG5cbiAgaXNDb21wb25lbnRWaXNpYmxlKGNvbXBvbmVudCkge1xuICAgIGlmKENvbnN0YW50cy5TZXR0aW5nLkRJU0FCTEVfT1BUSU1JWkFUSU9OUykgcmV0dXJuIHRydWU7XG4gICAgXG4gICAgaWYoY29tcG9uZW50IGluc3RhbmNlb2YgQ29tcG9uZW50ICYmICFjb21wb25lbnQuaGlkZGVuKSB7XG4gICAgICBpZighQ29uc3RhbnRzLlNldHRpbmcuRElTQUJMRV9JU19DT01QT05FTlRfVklTSUJMRV9PUFRJTUlaQVRJT05TICYmIHRoaXMucGFyZW50ICYmIHRoaXMucGFyZW50LmlzQ29tcG9uZW50VmlzaWJsZSAmJiAhdGhpcy5wYXJlbnQuaXNDb21wb25lbnRWaXNpYmxlKGNvbXBvbmVudCkpIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgfVxuXG4gICAgICBjb25zdCB3aWR0aCA9IHRoaXMud2lkdGg7XG4gICAgICBjb25zdCBoZWlnaHQgPSB0aGlzLmhlaWdodDtcbiAgICAgIGNvbnN0IGNvbXBvbmVudFdpZHRoID0gY29tcG9uZW50LndpZHRoO1xuICAgICAgY29uc3QgY29tcG9uZW50SGVpZ2h0ID0gY29tcG9uZW50LmhlaWdodDtcbiAgICAgIGNvbnN0IGNhbnZhc1dpZHRoID0gKHRoaXMuY2FudmFzICYmIHRoaXMuY2FudmFzLndpZHRoKSB8fCB3aWR0aDtcbiAgICAgIGNvbnN0IGNhbnZhc0hlaWdodCA9ICh0aGlzLmNhbnZhcyAmJiB0aGlzLmNhbnZhcy5oZWlnaHQpIHx8IGhlaWdodDtcblxuICAgICAgaWYoY29tcG9uZW50LnggKyBjb21wb25lbnRXaWR0aCA+PSB0aGlzLnggJiYgY29tcG9uZW50LnggPD0gdGhpcy54ICsgd2lkdGggJiYgY29tcG9uZW50LnkgKyBjb21wb25lbnRIZWlnaHQgPj0gdGhpcy55ICYmIGNvbXBvbmVudC55IDw9IHRoaXMueSArIGhlaWdodCAmJiBjb21wb25lbnQueCArIGNvbXBvbmVudFdpZHRoID49IDAgJiYgY29tcG9uZW50LnggPD0gY2FudmFzV2lkdGggJiYgY29tcG9uZW50LnkgKyBjb21wb25lbnRIZWlnaHQgPj0gMCAmJiBjb21wb25lbnQueSA8PSBjYW52YXNIZWlnaHQpIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgZ2V0IGlzQ3V0dGluZygpIHtcbiAgICByZXR1cm4gIUNvbnN0YW50cy5TZXR0aW5nLkRJU0FCTEVfQ09OVEFJTkVSU19DVVRUSU5HICYmICgoKHRoaXMubWF4V2lkdGggJiYgdGhpcy5pbm5lcldpZHRoID4gdGhpcy5tYXhXaWR0aCkgfHwgKHRoaXMubWF4SGVpZ2h0ICYmIHRoaXMuaW5uZXJIZWlnaHQgPiB0aGlzLm1heEhlaWdodCkpKSAmJiB0aGlzLmNhbnZhc1RtcCAhPSBudWxsO1xuICB9XG5cbiAgZ2V0IGRlZmF1bHRTdHlsZSgpIHtcbiAgICByZXR1cm4gbmV3IFN0eWxlKHtcbiAgICAgIFwicGFkZGluZ1wiOiAwLFxuICAgICAgXCJzcGFjZUJldHdlZW5Db21wb25lbnRzXCI6IENvbnN0YW50cy5TZXR0aW5nLkRFRkFVTFRfU1BBQ0lOR1xuICAgIH0pO1xuICB9XG59IiwiLypcbiAqIENvcHlyaWdodCAoQykgMjAyMCBFbGlhc3RpayAoZWxpYXN0aWtzb2Z0cy5jb20pXG4gKlxuICogVGhpcyBmaWxlIGlzIHBhcnQgb2YgXCJKU0dhbWVUb29sc1wiLlxuICpcbiAqIFwiSlNHYW1lVG9vbHNcIiBpcyBmcmVlIHNvZnR3YXJlOiB5b3UgY2FuIHJlZGlzdHJpYnV0ZSBpdCBhbmQvb3IgbW9kaWZ5XG4gKiBpdCB1bmRlciB0aGUgdGVybXMgb2YgdGhlIEdOVSBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlIGFzIHB1Ymxpc2hlZCBieVxuICogdGhlIEZyZWUgU29mdHdhcmUgRm91bmRhdGlvbiwgZWl0aGVyIHZlcnNpb24gMyBvZiB0aGUgTGljZW5zZSwgb3JcbiAqIChhdCB5b3VyIG9wdGlvbikgYW55IGxhdGVyIHZlcnNpb24uXG4gKlxuICogXCJKU0dhbWVUb29sc1wiIGlzIGRpc3RyaWJ1dGVkIGluIHRoZSBob3BlIHRoYXQgaXQgd2lsbCBiZSB1c2VmdWwsXG4gKiBidXQgV0lUSE9VVCBBTlkgV0FSUkFOVFk7IHdpdGhvdXQgZXZlbiB0aGUgaW1wbGllZCB3YXJyYW50eSBvZlxuICogTUVSQ0hBTlRBQklMSVRZIG9yIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFLiAgU2VlIHRoZVxuICogR05VIEdlbmVyYWwgUHVibGljIExpY2Vuc2UgZm9yIG1vcmUgZGV0YWlscy5cbiAqXG4gKiBZb3Ugc2hvdWxkIGhhdmUgcmVjZWl2ZWQgYSBjb3B5IG9mIHRoZSBHTlUgR2VuZXJhbCBQdWJsaWMgTGljZW5zZVxuICogYWxvbmcgd2l0aCBcIkpTR2FtZVRvb2xzXCIuICBJZiBub3QsIHNlZSA8aHR0cDovL3d3dy5nbnUub3JnL2xpY2Vuc2VzLz4uXG4gKi9cbmltcG9ydCBDb21wb25lbnQgZnJvbSBcIi4vQ29tcG9uZW50XCI7XG5pbXBvcnQgQ29uc3RhbnRzIGZyb20gXCIuL0NvbnN0YW50c1wiO1xuaW1wb3J0IFV0aWxzIGZyb20gXCIuL1V0aWxzXCI7XG5pbXBvcnQgU3R5bGUgZnJvbSBcIi4vU3R5bGVcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ3Jvc3MgZXh0ZW5kcyBDb21wb25lbnQge1xuICBzZWxlY3RhYmxlID0gZmFsc2U7XG5cbiAgY29uc3RydWN0b3IoeCwgeSwgd2lkdGgsIGhlaWdodCwgc3R5bGUpIHtcbiAgICBzdXBlcih4LCB5LCB3aWR0aCwgaGVpZ2h0LCBzdHlsZSk7XG4gIH1cblxuICBkcmF3KGNvbnRleHQpIHtcbiAgICBpZih0aGlzLmhpZGRlbikgcmV0dXJuO1xuICAgIHN1cGVyLmRyYXcoY29udGV4dCk7XG5cbiAgICBjb25zdCBjYW52YXMgPSBjb250ZXh0LmNhbnZhcztcbiAgICBjb25zdCBjdHggPSBjYW52YXMuZ2V0Q29udGV4dChcIjJkXCIpO1xuICAgIFxuICAgIFV0aWxzLmRyYXdDcm9zcyhjdHgsIHRoaXMueCwgdGhpcy55LCB0aGlzLndpZHRoLCB0aGlzLmhlaWdodCwgdGhpcy5zdHlsZS5saW5lV2lkdGgsIHRoaXMuc3R5bGUuY29sb3IsIHRoaXMuc3R5bGUubGluZUNhcCk7XG5cbiAgICB0aGlzLmluaXQgPSB0cnVlO1xuICB9XG5cbiAgZ2V0IHdpZHRoKCkge1xuICAgIHJldHVybiBzdXBlci53aWR0aCArIHRoaXMuc3R5bGUubGluZVdpZHRoO1xuICB9XG5cbiAgZ2V0IGhlaWdodCgpIHtcbiAgICByZXR1cm4gc3VwZXIuaGVpZ2h0ICsgdGhpcy5zdHlsZS5saW5lV2lkdGg7XG4gIH1cblxuICBzZXQgd2lkdGgod2lkdGgpIHtcbiAgICBzdXBlci53aWR0aCA9IHdpZHRoO1xuICB9XG5cbiAgc2V0IGhlaWdodChoZWlnaHQpIHtcbiAgICBzdXBlci5oZWlnaHQgPSBoZWlnaHQ7XG4gIH1cblxuICBnZXQgZGVmYXVsdFN0eWxlKCkge1xuICAgIHJldHVybiBuZXcgU3R5bGUoe1xuICAgICAgXCJsaW5lV2lkdGhcIjogQ29uc3RhbnRzLlNldHRpbmcuQ1JPU1NfREVGQVVMVF9MSU5FX1NJWkUsXG4gICAgICBcImNvbG9yXCI6IENvbnN0YW50cy5TZXR0aW5nLkNST1NTX0RFRkFVTFRfQ09MT1IsXG4gICAgICBcImxpbmVDYXBcIjogQ29uc3RhbnRzLlNldHRpbmcuQ1JPU1NfREVGQVVMVF9MSU5FX0NBUFxuICAgIH0pO1xuICB9XG59IiwiLypcbiAqIENvcHlyaWdodCAoQykgMjAyMCBFbGlhc3RpayAoZWxpYXN0aWtzb2Z0cy5jb20pXG4gKlxuICogVGhpcyBmaWxlIGlzIHBhcnQgb2YgXCJKU0dhbWVUb29sc1wiLlxuICpcbiAqIFwiSlNHYW1lVG9vbHNcIiBpcyBmcmVlIHNvZnR3YXJlOiB5b3UgY2FuIHJlZGlzdHJpYnV0ZSBpdCBhbmQvb3IgbW9kaWZ5XG4gKiBpdCB1bmRlciB0aGUgdGVybXMgb2YgdGhlIEdOVSBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlIGFzIHB1Ymxpc2hlZCBieVxuICogdGhlIEZyZWUgU29mdHdhcmUgRm91bmRhdGlvbiwgZWl0aGVyIHZlcnNpb24gMyBvZiB0aGUgTGljZW5zZSwgb3JcbiAqIChhdCB5b3VyIG9wdGlvbikgYW55IGxhdGVyIHZlcnNpb24uXG4gKlxuICogXCJKU0dhbWVUb29sc1wiIGlzIGRpc3RyaWJ1dGVkIGluIHRoZSBob3BlIHRoYXQgaXQgd2lsbCBiZSB1c2VmdWwsXG4gKiBidXQgV0lUSE9VVCBBTlkgV0FSUkFOVFk7IHdpdGhvdXQgZXZlbiB0aGUgaW1wbGllZCB3YXJyYW50eSBvZlxuICogTUVSQ0hBTlRBQklMSVRZIG9yIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFLiAgU2VlIHRoZVxuICogR05VIEdlbmVyYWwgUHVibGljIExpY2Vuc2UgZm9yIG1vcmUgZGV0YWlscy5cbiAqXG4gKiBZb3Ugc2hvdWxkIGhhdmUgcmVjZWl2ZWQgYSBjb3B5IG9mIHRoZSBHTlUgR2VuZXJhbCBQdWJsaWMgTGljZW5zZVxuICogYWxvbmcgd2l0aCBcIkpTR2FtZVRvb2xzXCIuICBJZiBub3QsIHNlZSA8aHR0cDovL3d3dy5nbnUub3JnL2xpY2Vuc2VzLz4uXG4gKi9cbmV4cG9ydCBkZWZhdWx0IHtcbiAgZWFzZUluQ3ViaWMoeCkge1xuICAgIHJldHVybiB4ICogeCAqIHg7XG4gIH0sXG4gIGVhc2VPdXRCb3VuY2UoeCkge1xuICAgIGNvbnN0IG4xID0gNy41NjI1O1xuICAgIGNvbnN0IGQxID0gMi43NTtcbiAgICBcbiAgICBpZih4IDwgMSAvIGQxKSB7XG4gICAgICByZXR1cm4gbjEgKiB4ICogeDtcbiAgICB9IGVsc2UgaWYoeCA8IDIgLyBkMSkge1xuICAgICAgcmV0dXJuIG4xICogKHggLT0gMS41IC8gZDEpICogeCArIDAuNzU7XG4gICAgfSBlbHNlIGlmKHggPCAyLjUgLyBkMSkge1xuICAgICAgcmV0dXJuIG4xICogKHggLT0gMi4yNSAvIGQxKSAqIHggKyAwLjkzNzU7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiBuMSAqICh4IC09IDIuNjI1IC8gZDEpICogeCArIDAuOTg0Mzc1O1xuICAgIH1cbiAgfSxcbiAgZWFzZUluT3V0Q3ViaWMoeCkge1xuICAgIHJldHVybiB4IDwgMC41ID8gNCAqIHggKiB4ICogeCA6IDEgLSBNYXRoLnBvdygtMiAqIHggKyAyLCAzKSAvIDI7XG4gIH0sXG4gIGVhc2VJbk91dFNpbmUoeCkge1xuICAgIHJldHVybiAtKE1hdGguY29zKE1hdGguUEkgKiB4KSAtIDEpIC8gMjtcbiAgfSxcbiAgZWFzZUluT3V0UXVpbnQoeCkge1xuICAgIHJldHVybiB4IDwgMC41ID8gMTYgKiB4ICogeCAqIHggKiB4ICogeCA6IDEgLSBNYXRoLnBvdygtMiAqIHggKyAyLCA1KSAvIDI7XG4gIH0sXG4gIGVhc2VJbk91dENpcmMoeCkge1xuICAgIHJldHVybiB4IDwgMC41ID8gKDEgLSBNYXRoLnNxcnQoMSAtIE1hdGgucG93KDIgKiB4LCAyKSkpIC8gMiA6IChNYXRoLnNxcnQoMSAtIE1hdGgucG93KC0yICogeCArIDIsIDIpKSArIDEpIC8gMjtcbiAgfSxcbiAgZWFzZUluT3V0UXVhZCh4KSB7XG4gICAgcmV0dXJuIHggPCAwLjUgPyAyICogeCAqIHggOiAxIC0gTWF0aC5wb3coLTIgKiB4ICsgMiwgMikgLyAyO1xuICB9LFxuICBlYXNlSW5PdXRRdWFydCh4KSB7XG4gICAgcmV0dXJuIHggPCAwLjUgPyA4ICogeCAqIHggKiB4ICogeCA6IDEgLSBNYXRoLnBvdygtMiAqIHggKyAyLCA0KSAvIDI7XG4gIH0sXG4gIGVhc2VJbk91dEV4cG8oeCkge1xuICAgIHJldHVybiB4ID09PSAwID8gMCA6IHggPT09IDEgPyAxIDogeCA8IDAuNSA/IE1hdGgucG93KDIsIDIwICogeCAtIDEwKSAvIDIgOiAoMiAtIE1hdGgucG93KDIsIC0yMCAqIHggKyAxMCkpIC8gMjtcbiAgfSxcbiAgZWFzZUluT3V0QmFjayh4KSB7XG4gICAgY29uc3QgYzEgPSAxLjcwMTU4O1xuICAgIGNvbnN0IGMyID0gYzEgKiAxLjUyNTtcbiAgICBcbiAgICByZXR1cm4geCA8IDAuNSA/IChNYXRoLnBvdygyICogeCwgMikgKiAoKGMyICsgMSkgKiAyICogeCAtIGMyKSkgLyAyIDogKE1hdGgucG93KDIgKiB4IC0gMiwgMikgKiAoKGMyICsgMSkgKiAoeCAqIDIgLSAyKSArIGMyKSArIDIpIC8gMjtcbiAgfVxufTsiLCIvKlxuICogQ29weXJpZ2h0IChDKSAyMDIwLTIwMjEgRWxpYXN0aWsgKGVsaWFzdGlrc29mdHMuY29tKVxuICpcbiAqIFRoaXMgZmlsZSBpcyBwYXJ0IG9mIFwiSlNHYW1lVG9vbHNcIi5cbiAqXG4gKiBcIkpTR2FtZVRvb2xzXCIgaXMgZnJlZSBzb2Z0d2FyZTogeW91IGNhbiByZWRpc3RyaWJ1dGUgaXQgYW5kL29yIG1vZGlmeVxuICogaXQgdW5kZXIgdGhlIHRlcm1zIG9mIHRoZSBHTlUgR2VuZXJhbCBQdWJsaWMgTGljZW5zZSBhcyBwdWJsaXNoZWQgYnlcbiAqIHRoZSBGcmVlIFNvZnR3YXJlIEZvdW5kYXRpb24sIGVpdGhlciB2ZXJzaW9uIDMgb2YgdGhlIExpY2Vuc2UsIG9yXG4gKiAoYXQgeW91ciBvcHRpb24pIGFueSBsYXRlciB2ZXJzaW9uLlxuICpcbiAqIFwiSlNHYW1lVG9vbHNcIiBpcyBkaXN0cmlidXRlZCBpbiB0aGUgaG9wZSB0aGF0IGl0IHdpbGwgYmUgdXNlZnVsLFxuICogYnV0IFdJVEhPVVQgQU5ZIFdBUlJBTlRZOyB3aXRob3V0IGV2ZW4gdGhlIGltcGxpZWQgd2FycmFudHkgb2ZcbiAqIE1FUkNIQU5UQUJJTElUWSBvciBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRS4gIFNlZSB0aGVcbiAqIEdOVSBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlIGZvciBtb3JlIGRldGFpbHMuXG4gKlxuICogWW91IHNob3VsZCBoYXZlIHJlY2VpdmVkIGEgY29weSBvZiB0aGUgR05VIEdlbmVyYWwgUHVibGljIExpY2Vuc2VcbiAqIGFsb25nIHdpdGggXCJKU0dhbWVUb29sc1wiLiAgSWYgbm90LCBzZWUgPGh0dHA6Ly93d3cuZ251Lm9yZy9saWNlbnNlcy8+LlxuICovXG5pbXBvcnQgU2NlbmUgZnJvbSBcIi4vU2NlbmVcIjtcbmltcG9ydCBDb25zdGFudHMgZnJvbSBcIi4vQ29uc3RhbnRzXCI7XG5pbXBvcnQgU3R5bGUgZnJvbSBcIi4vU3R5bGVcIjtcbmltcG9ydCBNZW51IGZyb20gXCIuL01lbnVcIjtcbmltcG9ydCBMYWJlbCBmcm9tIFwiLi9MYWJlbFwiO1xuaW1wb3J0IEJ1dHRvbiBmcm9tIFwiLi9CdXR0b25cIjtcbmltcG9ydCBSb3cgZnJvbSBcIi4vUm93XCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEVycm9yU2NyZWVuIGV4dGVuZHMgU2NlbmUge1xuICBjb25zdHJ1Y3RvcihjYW52YXMpIHtcbiAgICBzdXBlcigpO1xuICAgIHRoaXMuY2FudmFzID0gY2FudmFzO1xuICAgIHRoaXMubGFiZWxEZXRhaWxzU2NlbmVFcnJvciA9IG5ldyBMYWJlbChcIlwiLCBudWxsLCBudWxsLCBuZXcgU3R5bGUoeyBcImZvbnRDb2xvclwiOiBcIndoaXRlXCIsIFwiYWxpZ25lbWVudFwiOiBcImNlbnRlclwiLCBcImZvbnRTaXplXCI6IENvbnN0YW50cy5TZXR0aW5nLkZPTlRfU0laRSAvIDEuNzUgfSkpO1xuICAgIHRoaXMubGFiZWxEZXRhaWxzU2NlbmVFcnJvci5oaWRkZW4gPSB0cnVlO1xuXG4gICAgY29uc3QgYnV0dG9uU2NlbmVFcnJvciA9IG5ldyBCdXR0b24obnVsbCwgbnVsbCwgbnVsbCwgbnVsbCwgbmV3IFN0eWxlKHsgXCJiYWNrZ3JvdW5kQ29sb3JcIjogQ29uc3RhbnRzLlNldHRpbmcuQlVUVE9OX0RFRkFVTFRfQUxURVJOQVRJVkVfQkFDS0dST1VORCB9KSwgbmV3IExhYmVsKENvbnN0YW50cy5TdHJpbmcuUkVUUlksIG51bGwsIG51bGwsIG5ldyBTdHlsZSh7IFwiZm9udENvbG9yXCI6IFwid2hpdGVcIiwgXCJhbGlnbmVtZW50XCI6IFwiY2VudGVyXCIgfSkpKTtcbiAgICBjb25zdCBidXR0b25EZXRhaWxzU2NlbmVFcnJvciA9IG5ldyBCdXR0b24obnVsbCwgbnVsbCwgbnVsbCwgbnVsbCwgbmV3IFN0eWxlKHsgXCJiYWNrZ3JvdW5kQ29sb3JcIjogQ29uc3RhbnRzLlNldHRpbmcuQlVUVE9OX0RFRkFVTFRfQUxURVJOQVRJVkVfQkFDS0dST1VORCB9KSwgbmV3IExhYmVsKENvbnN0YW50cy5TdHJpbmcuREVUQUlMUywgbnVsbCwgbnVsbCwgbmV3IFN0eWxlKHsgXCJmb250Q29sb3JcIjogXCJ3aGl0ZVwiLCBcImFsaWduZW1lbnRcIjogXCJjZW50ZXJcIiB9KSkpO1xuICAgIGNvbnN0IGNvbERldGFpbHNTY2VuZUVycm9yID0gbmV3IFJvdyhudWxsLCBudWxsLCBudWxsLCAwLCBuZXcgU3R5bGUoeyBcImFsaWduZW1lbnRcIjogXCJjZW50ZXJcIiB9KSwgdGhpcy5sYWJlbERldGFpbHNTY2VuZUVycm9yKTtcbiAgICBjb25zdCBtZW51U2NlbmVFcnJvciA9IG5ldyBNZW51KG5ldyBTdHlsZSh7IFwic3BhY2VCZXR3ZWVuQ29tcG9uZW50c1wiOiAxNSwgXCJiYWNrZ3JvdW5kQ29sb3JcIjogQ29uc3RhbnRzLlNldHRpbmcuRVJST1JfTUVOVV9CQUNLR1JPVU5EX0NPTE9SIH0pLCBuZXcgTGFiZWwoQ29uc3RhbnRzLlN0cmluZy5FUlJPUl9NRVNTQUdFX0NBTlZBU19MQUJFTCwgbnVsbCwgbnVsbCwgbmV3IFN0eWxlKHsgXCJmb250Q29sb3JcIjogXCJ3aGl0ZVwiLCBcImFsaWduZW1lbnRcIjogXCJjZW50ZXJcIiB9KSksIGNvbERldGFpbHNTY2VuZUVycm9yLCBuZXcgUm93KG51bGwsIG51bGwsIG51bGwsIG51bGwsIG5ldyBTdHlsZSh7IFwiYWxpZ25lbWVudFwiOiBcImNlbnRlclwiIH0pLCBidXR0b25TY2VuZUVycm9yLCBidXR0b25EZXRhaWxzU2NlbmVFcnJvcikpO1xuICAgIG1lbnVTY2VuZUVycm9yLmVuYWJsZSgpO1xuXG4gICAgYnV0dG9uU2NlbmVFcnJvci5hZGRDbGlja0FjdGlvbigoKSA9PiB7XG4gICAgICAgIHRoaXMuY2FudmFzLmhhc0Vycm9yID0gZmFsc2U7XG4gICAgICAgIHRoaXMuY2FudmFzLnNjZW5lID0gdGhpcy5jYW52YXMuc2NlbmVQcmV2aW91cztcbiAgICAgICAgdGhpcy5sYWJlbERldGFpbHNTY2VuZUVycm9yLmhpZGRlbiA9IHRydWU7XG4gICAgICAgIGNvbERldGFpbHNTY2VuZUVycm9yLm1heEhlaWdodCA9IDA7XG4gICAgfSk7XG5cbiAgICBidXR0b25EZXRhaWxzU2NlbmVFcnJvci5hZGRDbGlja0FjdGlvbigoKSA9PiB7XG4gICAgICAgIHRoaXMubGFiZWxEZXRhaWxzU2NlbmVFcnJvci5oaWRkZW4gPSAhdGhpcy5sYWJlbERldGFpbHNTY2VuZUVycm9yLmhpZGRlbjtcbiAgICAgICAgY29sRGV0YWlsc1NjZW5lRXJyb3IubWF4SGVpZ2h0ID0gIXRoaXMubGFiZWxEZXRhaWxzU2NlbmVFcnJvci5oaWRkZW4gPyAxMDAgOiAwO1xuICAgIH0pO1xuXG4gICAgdGhpcy5hZGQobWVudVNjZW5lRXJyb3IpO1xuICB9XG5cbiAgc2V0IGVycm9yVGV4dCh0ZXh0KSB7XG4gICAgdGhpcy5sYWJlbERldGFpbHNTY2VuZUVycm9yLnRleHQgPSB0ZXh0O1xuICB9XG5cbiAgZ2V0IGVycm9yVGV4dCgpIHtcbiAgICByZXR1cm4gdGhpcy5sYWJlbERldGFpbHNTY2VuZUVycm9yLnRleHQ7XG4gIH1cbn0iLCIvKlxuICogQ29weXJpZ2h0IChDKSAyMDIwIEVsaWFzdGlrIChlbGlhc3Rpa3NvZnRzLmNvbSlcbiAqXG4gKiBUaGlzIGZpbGUgaXMgcGFydCBvZiBcIkpTR2FtZVRvb2xzXCIuXG4gKlxuICogXCJKU0dhbWVUb29sc1wiIGlzIGZyZWUgc29mdHdhcmU6IHlvdSBjYW4gcmVkaXN0cmlidXRlIGl0IGFuZC9vciBtb2RpZnlcbiAqIGl0IHVuZGVyIHRoZSB0ZXJtcyBvZiB0aGUgR05VIEdlbmVyYWwgUHVibGljIExpY2Vuc2UgYXMgcHVibGlzaGVkIGJ5XG4gKiB0aGUgRnJlZSBTb2Z0d2FyZSBGb3VuZGF0aW9uLCBlaXRoZXIgdmVyc2lvbiAzIG9mIHRoZSBMaWNlbnNlLCBvclxuICogKGF0IHlvdXIgb3B0aW9uKSBhbnkgbGF0ZXIgdmVyc2lvbi5cbiAqXG4gKiBcIkpTR2FtZVRvb2xzXCIgaXMgZGlzdHJpYnV0ZWQgaW4gdGhlIGhvcGUgdGhhdCBpdCB3aWxsIGJlIHVzZWZ1bCxcbiAqIGJ1dCBXSVRIT1VUIEFOWSBXQVJSQU5UWTsgd2l0aG91dCBldmVuIHRoZSBpbXBsaWVkIHdhcnJhbnR5IG9mXG4gKiBNRVJDSEFOVEFCSUxJVFkgb3IgRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UuICBTZWUgdGhlXG4gKiBHTlUgR2VuZXJhbCBQdWJsaWMgTGljZW5zZSBmb3IgbW9yZSBkZXRhaWxzLlxuICpcbiAqIFlvdSBzaG91bGQgaGF2ZSByZWNlaXZlZCBhIGNvcHkgb2YgdGhlIEdOVSBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlXG4gKiBhbG9uZyB3aXRoIFwiSlNHYW1lVG9vbHNcIi4gIElmIG5vdCwgc2VlIDxodHRwOi8vd3d3LmdudS5vcmcvbGljZW5zZXMvPi5cbiAqL1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRXZlbnQge1xuICBjb25zdHJ1Y3RvcihuYW1lKSB7XG4gICAgdGhpcy5uYW1lID0gbmFtZTtcbiAgICB0aGlzLmNhbGxiYWNrcyA9IFtdO1xuICB9XG5cbiAgcmVnaXN0ZXJDYWxsYmFjayhjYWxsYmFjaykge1xuICAgIHRoaXMuY2FsbGJhY2tzLnB1c2goY2FsbGJhY2spO1xuICB9XG5cbiAgcmVtb3ZlQ2FsbGJhY2soY2FsbGJhY2spIHtcbiAgICB0aGlzLmNhbGxiYWNrcy5maWx0ZXIoY3VycmVudCA9PiBjdXJyZW50ICE9IGNhbGxiYWNrKTtcbiAgfVxuXG4gIHJlbW92ZUFsbENhbGxiYWNrcygpIHtcbiAgICB0aGlzLmNhbGxiYWNrcyA9IFtdO1xuICB9XG59IiwiLypcbiAqIENvcHlyaWdodCAoQykgMjAyMCBFbGlhc3RpayAoZWxpYXN0aWtzb2Z0cy5jb20pXG4gKlxuICogVGhpcyBmaWxlIGlzIHBhcnQgb2YgXCJKU0dhbWVUb29sc1wiLlxuICpcbiAqIFwiSlNHYW1lVG9vbHNcIiBpcyBmcmVlIHNvZnR3YXJlOiB5b3UgY2FuIHJlZGlzdHJpYnV0ZSBpdCBhbmQvb3IgbW9kaWZ5XG4gKiBpdCB1bmRlciB0aGUgdGVybXMgb2YgdGhlIEdOVSBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlIGFzIHB1Ymxpc2hlZCBieVxuICogdGhlIEZyZWUgU29mdHdhcmUgRm91bmRhdGlvbiwgZWl0aGVyIHZlcnNpb24gMyBvZiB0aGUgTGljZW5zZSwgb3JcbiAqIChhdCB5b3VyIG9wdGlvbikgYW55IGxhdGVyIHZlcnNpb24uXG4gKlxuICogXCJKU0dhbWVUb29sc1wiIGlzIGRpc3RyaWJ1dGVkIGluIHRoZSBob3BlIHRoYXQgaXQgd2lsbCBiZSB1c2VmdWwsXG4gKiBidXQgV0lUSE9VVCBBTlkgV0FSUkFOVFk7IHdpdGhvdXQgZXZlbiB0aGUgaW1wbGllZCB3YXJyYW50eSBvZlxuICogTUVSQ0hBTlRBQklMSVRZIG9yIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFLiAgU2VlIHRoZVxuICogR05VIEdlbmVyYWwgUHVibGljIExpY2Vuc2UgZm9yIG1vcmUgZGV0YWlscy5cbiAqXG4gKiBZb3Ugc2hvdWxkIGhhdmUgcmVjZWl2ZWQgYSBjb3B5IG9mIHRoZSBHTlUgR2VuZXJhbCBQdWJsaWMgTGljZW5zZVxuICogYWxvbmcgd2l0aCBcIkpTR2FtZVRvb2xzXCIuICBJZiBub3QsIHNlZSA8aHR0cDovL3d3dy5nbnUub3JnL2xpY2Vuc2VzLz4uXG4gKi9cbmltcG9ydCBMYWJlbCBmcm9tIFwiLi9MYWJlbFwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBGUFNNZXRlciBleHRlbmRzIExhYmVsIHtcbiAgc2VsZWN0YWJsZSA9IGZhbHNlO1xuXG4gIGNvbnN0cnVjdG9yKGRpc3BsYXlGcmFtZXMsIHgsIHksIHN0eWxlKSB7XG4gICAgc3VwZXIobnVsbCwgeCwgeSwgc3R5bGUpO1xuXG4gICAgdGhpcy5kaXNwbGF5RnJhbWVzID0gZGlzcGxheUZyYW1lcyB8fCBmYWxzZTtcbiAgICB0aGlzLmZyYW1lcyA9IDA7XG4gICAgdGhpcy5sYXN0RnJhbWUgPSAwO1xuICAgIHRoaXMuY3VycmVudEZQUyA9IDA7XG5cbiAgICB0aGlzLmludGVydmFsQ291bnRGUFMgPSBzZXRJbnRlcnZhbCgoKSA9PiB0aGlzLmNvdW50RlBTKCksIDEwMDApO1xuICB9XG5cbiAgZHJhdyhjb250ZXh0KSB7XG4gICAgaWYodGhpcy5oaWRkZW4pIHJldHVybjtcbiAgICB0aGlzLnRleHQgPSBcIkZQUzogXCIgKyB0aGlzLmN1cnJlbnRGUFMgKyAodGhpcy5kaXNwbGF5RnJhbWVzID8gXCIgLyBGcmFtZXM6IFwiICsgdGhpcy5mcmFtZXMgOiBcIlwiKTtcbiAgICBzdXBlci5kcmF3KGNvbnRleHQpO1xuICAgIHRoaXMuZnJhbWVzKys7XG4gIH1cblxuICBjb3VudEZQUygpIHtcbiAgICBpZih0aGlzLmxhc3RGcmFtZSA+IDApIHRoaXMuY3VycmVudEZQUyA9IHRoaXMuZnJhbWVzIC0gdGhpcy5sYXN0RnJhbWU7XG4gICAgdGhpcy5sYXN0RnJhbWUgPSB0aGlzLmZyYW1lcztcbiAgfVxufSIsIi8qXG4gKiBDb3B5cmlnaHQgKEMpIDIwMjAgRWxpYXN0aWsgKGVsaWFzdGlrc29mdHMuY29tKVxuICpcbiAqIFRoaXMgZmlsZSBpcyBwYXJ0IG9mIFwiSlNHYW1lVG9vbHNcIi5cbiAqXG4gKiBcIkpTR2FtZVRvb2xzXCIgaXMgZnJlZSBzb2Z0d2FyZTogeW91IGNhbiByZWRpc3RyaWJ1dGUgaXQgYW5kL29yIG1vZGlmeVxuICogaXQgdW5kZXIgdGhlIHRlcm1zIG9mIHRoZSBHTlUgR2VuZXJhbCBQdWJsaWMgTGljZW5zZSBhcyBwdWJsaXNoZWQgYnlcbiAqIHRoZSBGcmVlIFNvZnR3YXJlIEZvdW5kYXRpb24sIGVpdGhlciB2ZXJzaW9uIDMgb2YgdGhlIExpY2Vuc2UsIG9yXG4gKiAoYXQgeW91ciBvcHRpb24pIGFueSBsYXRlciB2ZXJzaW9uLlxuICpcbiAqIFwiSlNHYW1lVG9vbHNcIiBpcyBkaXN0cmlidXRlZCBpbiB0aGUgaG9wZSB0aGF0IGl0IHdpbGwgYmUgdXNlZnVsLFxuICogYnV0IFdJVEhPVVQgQU5ZIFdBUlJBTlRZOyB3aXRob3V0IGV2ZW4gdGhlIGltcGxpZWQgd2FycmFudHkgb2ZcbiAqIE1FUkNIQU5UQUJJTElUWSBvciBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRS4gIFNlZSB0aGVcbiAqIEdOVSBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlIGZvciBtb3JlIGRldGFpbHMuXG4gKlxuICogWW91IHNob3VsZCBoYXZlIHJlY2VpdmVkIGEgY29weSBvZiB0aGUgR05VIEdlbmVyYWwgUHVibGljIExpY2Vuc2VcbiAqIGFsb25nIHdpdGggXCJKU0dhbWVUb29sc1wiLiAgSWYgbm90LCBzZWUgPGh0dHA6Ly93d3cuZ251Lm9yZy9saWNlbnNlcy8+LlxuICovXG5pbXBvcnQgVXRpbHMgZnJvbSBcIi4vVXRpbHNcIjtcbmltcG9ydCBDb21wb25lbnQgZnJvbSBcIi4vQ29tcG9uZW50XCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEltYWdlQ29udGFpbmVyIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgc2VsZWN0YWJsZSA9IGZhbHNlO1xuXG4gIGNvbnN0cnVjdG9yKGltYWdlLCB4LCB5LCB3aWR0aCwgaGVpZ2h0LCBzdHlsZSwgaW1hZ2VMb2FkZXIpIHtcbiAgICBzdXBlcih4LCB5LCB3aWR0aCwgaGVpZ2h0LCBzdHlsZSk7XG4gICAgdGhpcy5pbWFnZTtcbiAgICB0aGlzLmltZ1NyYztcbiAgICB0aGlzLmltYWdlTG9hZGVyID0gaW1hZ2VMb2FkZXI7XG5cbiAgICBpZihpbWFnZSBpbnN0YW5jZW9mIEltYWdlKSB7XG4gICAgICB0aGlzLmltYWdlID0gaW1hZ2U7XG4gICAgICB0aGlzLmltZ1NyYyA9IGltYWdlLnNyYztcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5pbWdTcmMgPSBpbWFnZTtcbiAgICB9XG4gIH1cblxuICBkcmF3KGNvbnRleHQpIHtcbiAgICBpZih0aGlzLmhpZGRlbikgcmV0dXJuO1xuICAgIHN1cGVyLmRyYXcoY29udGV4dCk7XG4gICAgXG4gICAgY29uc3QgY2FudmFzID0gY29udGV4dC5jYW52YXM7XG4gICAgY29uc3QgY3R4ID0gY2FudmFzLmdldENvbnRleHQoXCIyZFwiKTtcbiAgICBjdHguc2F2ZSgpO1xuICAgIFxuICAgIGlmKHRoaXMuaW1nU3JjICE9IG51bGwgJiYgdGhpcy5pbWFnZUxvYWRlciAhPSBudWxsKSB7XG4gICAgICB0aGlzLmxvYWRJbWFnZSh0aGlzLmltYWdlTG9hZGVyKTtcbiAgICB9XG5cbiAgICBpZih0aGlzLmltYWdlICE9IG51bGwpIHtcbiAgICAgIHRoaXMuZHJhd0ltYWdlKGN0eCk7XG4gICAgfVxuXG4gICAgY3R4LnJlc3RvcmUoKTtcbiAgfVxuXG4gIGRyYXdJbWFnZShjdHgpIHtcbiAgICBVdGlscy5kcmF3SW1hZ2UoY3R4LCB0aGlzLmltYWdlLCBNYXRoLnJvdW5kKHRoaXMueCksIE1hdGgucm91bmQodGhpcy55KSwgTWF0aC5yb3VuZCh0aGlzLndpZHRoKSwgTWF0aC5yb3VuZCh0aGlzLmhlaWdodCkpO1xuICB9XG5cbiAgZ2V0IHNpemVzKCkge1xuICAgIGxldCBpbWdXaWR0aCA9IHN1cGVyLndpZHRoO1xuICAgIGxldCBpbWdIZWlnaHQgPSBzdXBlci5oZWlnaHQ7XG5cbiAgICBpZih0aGlzLmltYWdlTG9hZGVyKSB7XG4gICAgICB0aGlzLmxvYWRJbWFnZSh0aGlzLmltYWdlTG9hZGVyKTtcbiAgICB9XG4gICAgXG4gICAgaWYodGhpcy5pbWFnZSAmJiAodGhpcy5pbWFnZS53aWR0aCA+IHN1cGVyLndpZHRoIHx8IHRoaXMuaW1hZ2UuaGVpZ2h0ID4gc3VwZXIuaGVpZ2h0KSkge1xuICAgICAgY29uc3QgYXNwZWN0UmF0aW8gPSB0aGlzLmltYWdlLndpZHRoIC8gdGhpcy5pbWFnZS5oZWlnaHQ7XG4gICAgICBpbWdXaWR0aCA9IE1hdGguZmxvb3Ioc3VwZXIud2lkdGggLyAxLjI1KTtcbiAgICAgIGltZ0hlaWdodCA9IE1hdGguZmxvb3IoaW1nV2lkdGggLyBhc3BlY3RSYXRpbyk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHtcbiAgICAgIHdpZHRoOiBpbWdXaWR0aCxcbiAgICAgIGhlaWdodDogaW1nSGVpZ2h0XG4gICAgfVxuICB9XG5cbiAgZ2V0IGhlaWdodCgpIHtcbiAgICByZXR1cm4gdGhpcy5zaXplcy5oZWlnaHQ7XG4gIH1cblxuICBnZXQgd2lkdGgoKSB7XG4gICAgcmV0dXJuIHRoaXMuc2l6ZXMud2lkdGg7XG4gIH1cblxuICBzZXQgd2lkdGgod2lkdGgpIHtcbiAgICBzdXBlci53aWR0aCA9IHdpZHRoO1xuICB9XG5cbiAgc2V0IGhlaWdodChoZWlnaHQpIHtcbiAgICBzdXBlci5oZWlnaHQgPSBoZWlnaHQ7XG4gIH1cbiAgXG4gIGxvYWRJbWFnZShpbWFnZUxvYWRlcikge1xuICAgIHRoaXMuaW1hZ2UgPSBpbWFnZUxvYWRlci5nZXQodGhpcy5pbWdTcmMpO1xuICB9XG59IiwiLypcbiAqIENvcHlyaWdodCAoQykgMjAyMCBFbGlhc3RpayAoZWxpYXN0aWtzb2Z0cy5jb20pXG4gKlxuICogVGhpcyBmaWxlIGlzIHBhcnQgb2YgXCJKU0dhbWVUb29sc1wiLlxuICpcbiAqIFwiSlNHYW1lVG9vbHNcIiBpcyBmcmVlIHNvZnR3YXJlOiB5b3UgY2FuIHJlZGlzdHJpYnV0ZSBpdCBhbmQvb3IgbW9kaWZ5XG4gKiBpdCB1bmRlciB0aGUgdGVybXMgb2YgdGhlIEdOVSBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlIGFzIHB1Ymxpc2hlZCBieVxuICogdGhlIEZyZWUgU29mdHdhcmUgRm91bmRhdGlvbiwgZWl0aGVyIHZlcnNpb24gMyBvZiB0aGUgTGljZW5zZSwgb3JcbiAqIChhdCB5b3VyIG9wdGlvbikgYW55IGxhdGVyIHZlcnNpb24uXG4gKlxuICogXCJKU0dhbWVUb29sc1wiIGlzIGRpc3RyaWJ1dGVkIGluIHRoZSBob3BlIHRoYXQgaXQgd2lsbCBiZSB1c2VmdWwsXG4gKiBidXQgV0lUSE9VVCBBTlkgV0FSUkFOVFk7IHdpdGhvdXQgZXZlbiB0aGUgaW1wbGllZCB3YXJyYW50eSBvZlxuICogTUVSQ0hBTlRBQklMSVRZIG9yIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFLiAgU2VlIHRoZVxuICogR05VIEdlbmVyYWwgUHVibGljIExpY2Vuc2UgZm9yIG1vcmUgZGV0YWlscy5cbiAqXG4gKiBZb3Ugc2hvdWxkIGhhdmUgcmVjZWl2ZWQgYSBjb3B5IG9mIHRoZSBHTlUgR2VuZXJhbCBQdWJsaWMgTGljZW5zZVxuICogYWxvbmcgd2l0aCBcIkpTR2FtZVRvb2xzXCIuICBJZiBub3QsIHNlZSA8aHR0cDovL3d3dy5nbnUub3JnL2xpY2Vuc2VzLz4uXG4gKi9cbmltcG9ydCBVdGlscyBmcm9tIFwiLi9VdGlsc1wiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBJbWFnZUxvYWRlciB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHRoaXMuaW1hZ2VzID0ge307XG4gICAgdGhpcy5pbWFnZXNSZXNpemVkID0ge307XG4gICAgdGhpcy50cmllZExvYWRpbmcgPSAwO1xuICAgIHRoaXMuaGFzRXJyb3IgPSBmYWxzZTtcbiAgICB0aGlzLm5iSW1hZ2VzVG9Mb2FkID0gMTtcbiAgICB0aGlzLmZpcnN0SW1hZ2UgPSB0cnVlO1xuICB9XG5cbiAgbG9hZChpbWcsIGZ1bmMpIHtcbiAgICBpZih0aGlzLmZpcnN0SW1hZ2UpIHtcbiAgICAgIHRoaXMubmJJbWFnZXNUb0xvYWQgPSBpbWcubGVuZ3RoO1xuICAgICAgdGhpcy5maXJzdEltYWdlID0gZmFsc2U7XG4gICAgfVxuICAgIFxuICAgIGlmKGltZy5sZW5ndGggPiAwKSB7XG4gICAgICB0aGlzLmxvYWRJbWFnZShpbWdbMF0sIHJlc3VsdCA9PiB7XG4gICAgICAgIGlmKHJlc3VsdCA9PSB0cnVlKSB7XG4gICAgICAgICAgaW1nLnNoaWZ0KCk7XG4gICAgICAgICAgdGhpcy5sb2FkKGltZywgZnVuYyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdGhpcy5oYXNFcnJvciA9IHRydWU7XG4gICAgICAgICAgcmV0dXJuIGZ1bmMoKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiBmdW5jKCk7XG4gICAgfVxuICB9XG5cbiAgbG9hZEltYWdlKHNyYywgZnVuYykge1xuICAgIHRoaXMudHJpZWRMb2FkaW5nKys7XG4gIFxuICAgIGNvbnN0IGltYWdlID0gbmV3IEltYWdlKCk7XG4gICAgaW1hZ2Uuc3JjID0gc3JjO1xuICBcbiAgICBpbWFnZS5vbmxvYWQgPSAoKSA9PiB7XG4gICAgICBpZih0aGlzLmltYWdlcyAhPSBudWxsKSB7XG4gICAgICAgIHRoaXMuaW1hZ2VzW3NyY10gPSBpbWFnZTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiBmdW5jKGZhbHNlKTtcbiAgICAgIH1cbiAgXG4gICAgICB0aGlzLnRyaWVkTG9hZGluZyA9IDA7XG4gICAgICByZXR1cm4gZnVuYyh0cnVlKTtcbiAgICB9O1xuICBcbiAgICBpbWFnZS5vbmVycm9yID0gKCkgPT4ge1xuICAgICAgaWYodGhpcy50cmllZExvYWRpbmcgPj0gNSkge1xuICAgICAgICBpZih0aGlzLmltYWdlcyAhPSBudWxsKSB7XG4gICAgICAgICAgdGhpcy5pbWFnZXNbc3JjXSA9IGltYWdlO1xuICAgICAgICB9XG4gIFxuICAgICAgICB0aGlzLnRyaWVkTG9hZGluZyA9IDA7XG4gICAgICAgIHJldHVybiBmdW5jKGZhbHNlKTtcbiAgICAgIH1cbiAgXG4gICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgdGhpcy5sb2FkSW1hZ2Uoc3JjLCBmdW5jKTtcbiAgICAgIH0sIDI1MCk7XG4gICAgfVxuICB9XG5cbiAgZ2V0KHNyYywgd2lkdGgsIGhlaWdodCkge1xuICAgIGlmKHRoaXMuaW1hZ2VzICE9IG51bGwgJiYgdGhpcy5pbWFnZXMuaGFzT3duUHJvcGVydHkoc3JjKSkge1xuICAgICAgY29uc3QgaW1hZ2UgPSB0aGlzLmltYWdlc1tzcmNdO1xuXG4gICAgICBpZigod2lkdGggfHwgaGVpZ2h0KSAmJiAoaW1hZ2Uud2lkdGggIT0gd2lkdGggfHwgaW1hZ2UuaGVpZ2h0ICE9IGhlaWdodCkpIHtcbiAgICAgICAgY29uc3QgdyA9IE1hdGgucm91bmQod2lkdGgpO1xuICAgICAgICBjb25zdCBoID0gTWF0aC5yb3VuZChoZWlnaHQpO1xuICAgICAgICBjb25zdCBpZCA9IHNyYyArIFwiQFwiICsgdyArIFwiLVwiICsgaDtcblxuICAgICAgICBpZighdGhpcy5pbWFnZXNSZXNpemVkLmhhc093blByb3BlcnR5KGlkKSkge1xuICAgICAgICAgIGNvbnN0IGNhbnZhc1RtcCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJjYW52YXNcIik7XG4gICAgICAgICAgY29uc3QgY3R4ID0gY2FudmFzVG1wLmdldENvbnRleHQoXCIyZFwiKTtcbiAgICAgICAgICBjYW52YXNUbXAud2lkdGggPSB3O1xuICAgICAgICAgIGNhbnZhc1RtcC5oZWlnaHQgPSBoO1xuXG4gICAgICAgICAgVXRpbHMuZHJhd0ltYWdlKGN0eCwgaW1hZ2UsIDAsIDAsIHcsIGgsIDAsIDAsIGltYWdlLndpZHRoLCBpbWFnZS5oZWlnaHQpO1xuICAgICAgICAgIHRoaXMuaW1hZ2VzUmVzaXplZFtpZF0gPSBjYW52YXNUbXA7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gdGhpcy5pbWFnZXNSZXNpemVkW2lkXTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiBpbWFnZTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuICB9XG5cbiAgY2xlYXIoKSB7XG4gICAgdGhpcy5pbWFnZXMgPSBudWxsO1xuICB9XG59IiwiLypcbiAqIENvcHlyaWdodCAoQykgMjAyMCBFbGlhc3RpayAoZWxpYXN0aWtzb2Z0cy5jb20pXG4gKlxuICogVGhpcyBmaWxlIGlzIHBhcnQgb2YgXCJKU0dhbWVUb29sc1wiLlxuICpcbiAqIFwiSlNHYW1lVG9vbHNcIiBpcyBmcmVlIHNvZnR3YXJlOiB5b3UgY2FuIHJlZGlzdHJpYnV0ZSBpdCBhbmQvb3IgbW9kaWZ5XG4gKiBpdCB1bmRlciB0aGUgdGVybXMgb2YgdGhlIEdOVSBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlIGFzIHB1Ymxpc2hlZCBieVxuICogdGhlIEZyZWUgU29mdHdhcmUgRm91bmRhdGlvbiwgZWl0aGVyIHZlcnNpb24gMyBvZiB0aGUgTGljZW5zZSwgb3JcbiAqIChhdCB5b3VyIG9wdGlvbikgYW55IGxhdGVyIHZlcnNpb24uXG4gKlxuICogXCJKU0dhbWVUb29sc1wiIGlzIGRpc3RyaWJ1dGVkIGluIHRoZSBob3BlIHRoYXQgaXQgd2lsbCBiZSB1c2VmdWwsXG4gKiBidXQgV0lUSE9VVCBBTlkgV0FSUkFOVFk7IHdpdGhvdXQgZXZlbiB0aGUgaW1wbGllZCB3YXJyYW50eSBvZlxuICogTUVSQ0hBTlRBQklMSVRZIG9yIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFLiAgU2VlIHRoZVxuICogR05VIEdlbmVyYWwgUHVibGljIExpY2Vuc2UgZm9yIG1vcmUgZGV0YWlscy5cbiAqXG4gKiBZb3Ugc2hvdWxkIGhhdmUgcmVjZWl2ZWQgYSBjb3B5IG9mIHRoZSBHTlUgR2VuZXJhbCBQdWJsaWMgTGljZW5zZVxuICogYWxvbmcgd2l0aCBcIkpTR2FtZVRvb2xzXCIuICBJZiBub3QsIHNlZSA8aHR0cDovL3d3dy5nbnUub3JnL2xpY2Vuc2VzLz4uXG4gKi9cbmltcG9ydCBDb25zdGFudHMgZnJvbSBcIi4vQ29uc3RhbnRzXCI7XG5pbXBvcnQgVXRpbHMgZnJvbSBcIi4vVXRpbHNcIjtcbmltcG9ydCBCb3ggZnJvbSBcIi4vQm94XCI7XG5pbXBvcnQgU3R5bGUgZnJvbSBcIi4vU3R5bGVcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgSW5wdXQgZXh0ZW5kcyBCb3gge1xuICBzZWxlY3RhYmxlID0gdHJ1ZTtcbiAgI19wb3NpdGlvblN0YXJ0ID0gMDtcbiAgI19wb3NpdGlvblN0YXJ0Q2xpY2sgPSAwO1xuICAjX3Bvc2l0aW9uRW5kID0gMDtcblxuICBjb25zdHJ1Y3Rvcih4LCB5LCB3aWR0aCwgaGVpZ2h0LCBzdHlsZSwgZGVmYXVsdFRleHQpIHtcbiAgICBzdXBlcih4LCB5LCB3aWR0aCwgaGVpZ2h0LCBzdHlsZSk7XG4gICAgXG4gICAgdGhpcy50ZXh0ID0gZGVmYXVsdFRleHQgfHwgXCJcIjtcbiAgICB0aGlzLiNfcG9zaXRpb25TdGFydCA9IDA7XG4gICAgdGhpcy4jX3Bvc2l0aW9uRW5kID0gMDtcbiAgICB0aGlzLiNfcG9zaXRpb25TdGFydENsaWNrID0gMDtcbiAgICB0aGlzLmxhc3RJbnB1dFRleHQgPSBmYWxzZTtcbiAgICB0aGlzLm9mZnNldFggPSAwO1xuICAgIHRoaXMubGFzdFRpbWUgPSAwO1xuICAgIHRoaXMudG90YWxUaW1lID0gMDtcbiAgICB0aGlzLmNsaWNrQ3VycmVudFBvc2l0aW9uID0gbnVsbDtcbiAgICB0aGlzLnRleHRDYWNoZSA9IG51bGw7XG5cbiAgICB0aGlzLmlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xuICAgIHRoaXMuaW5wdXQuc2V0QXR0cmlidXRlKFwidHlwZVwiLCBcInRleHRcIik7XG4gICAgdGhpcy5pbnB1dC5zdHlsZS5wb3NpdGlvbiA9IFwiYWJzb2x1dGVcIjtcbiAgICB0aGlzLmlucHV0LnN0eWxlLmxlZnQgPSBcIi05OTk5cHhcIjtcbiAgICB0aGlzLmlucHV0LnRhYkluZGV4ID0gLTE7XG4gICAgdGhpcy5pbnB1dC52YWx1ZSA9IHRoaXMudGV4dDtcbiAgICB0aGlzLmlucHV0LmFkZEV2ZW50TGlzdGVuZXIoXCJibHVyXCIsICgpID0+IHRoaXMuc2VsZWN0ZWQgPSBmYWxzZSk7XG4gICAgdGhpcy5pbnB1dC5hZGRFdmVudExpc3RlbmVyKFwiZm9jdXNcIiwgKCkgPT4gdGhpcy5zZWxlY3RlZCA9IHRydWUpO1xuICAgIHRoaXMuaW5wdXQuYWRkRXZlbnRMaXN0ZW5lcihcImlucHV0XCIsICgpID0+IHtcbiAgICAgIHRoaXMudG90YWxUaW1lID0gMFxuICAgICAgdGhpcy5sYXN0SW5wdXRUZXh0ID0gdHJ1ZTtcbiAgICAgIHRoaXMucG9zaXRpb25TdGFydCA9IHRoaXMuaW5wdXQuc2VsZWN0aW9uU3RhcnQ7XG4gICAgICB0aGlzLnBvc2l0aW9uRW5kID0gdGhpcy5pbnB1dC5zZWxlY3Rpb25FbmQ7XG4gICAgfSk7XG5cbiAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKHRoaXMuaW5wdXQpO1xuXG4gICAgdGhpcy5hcHBlbmRUb0NhbnZhcyA9IGZhbHNlO1xuICAgIHRoaXMubm90aWNlTG9nZ2VkID0gZmFsc2U7XG5cbiAgICB0aGlzLmNhbnZhc1RtcCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJjYW52YXNcIik7XG5cbiAgICBjb25zdCBtb3ZlQWN0aW9uQ2FsbGJhY2sgPSAoZGVsdGFYLCBkZWx0YVksIHBvc2l0aW9uKSA9PiB7XG4gICAgICBpZihwb3NpdGlvbikge1xuICAgICAgICBjb25zdCBpQ2xpY2sgPSB0aGlzLmdldExldHRlckNsaWNrZWQocG9zaXRpb24pO1xuICBcbiAgICAgICAgaWYoaUNsaWNrICE9IG51bGwpIHtcbiAgICAgICAgICBpZihpQ2xpY2sgPiB0aGlzLnBvc2l0aW9uU3RhcnRDbGljaykge1xuICAgICAgICAgICAgdGhpcy5zZXRTZWxlY3Rpb25SYW5nZSh0aGlzLnBvc2l0aW9uU3RhcnRDbGljaywgaUNsaWNrLCBcImZvcndhcmRcIik7XG4gICAgICAgICAgfSBlbHNlIGlmKGlDbGljayA8IHRoaXMucG9zaXRpb25TdGFydENsaWNrKSB7XG4gICAgICAgICAgICB0aGlzLnNldFNlbGVjdGlvblJhbmdlKGlDbGljaywgdGhpcy5wb3NpdGlvblN0YXJ0Q2xpY2ssIFwiYmFja3dhcmRcIik7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfTtcblxuICAgIHRoaXMuYWRkRG93bkFjdGlvbihwb3NpdGlvbiA9PiB7XG4gICAgICBjb25zdCBpQ2xpY2sgPSB0aGlzLmdldExldHRlckNsaWNrZWQocG9zaXRpb24pO1xuXG4gICAgICBpZihpQ2xpY2sgIT0gbnVsbCkge1xuICAgICAgICB0aGlzLnBvc2l0aW9uU3RhcnRDbGljayA9IGlDbGljaztcbiAgICAgICAgdGhpcy5zZXRTZWxlY3Rpb25SYW5nZShpQ2xpY2ssIGlDbGljaywgXCJmb3J3YXJkXCIpO1xuICAgICAgfVxuXG4gICAgICB0aGlzLnRvdGFsVGltZSA9IDA7XG4gICAgfSk7XG5cbiAgICB0aGlzLmFkZENsaWNrQWN0aW9uKCgpID0+IHRoaXMuY2xpY2soKSk7XG4gICAgdGhpcy5hZGRNb3ZlQWN0aW9uKG1vdmVBY3Rpb25DYWxsYmFjayk7XG4gICAgdGhpcy5hZGRTY3JvbGxBY3Rpb24obW92ZUFjdGlvbkNhbGxiYWNrKTtcbiAgfVxuXG4gIGRyYXcoY29udGV4dCkge1xuICAgIGlmKHRoaXMuaGlkZGVuKSByZXR1cm47XG4gICAgc3VwZXIuZHJhdyhjb250ZXh0KTtcbiAgICBcbiAgICBjb25zdCBjYW52YXMgPSBjb250ZXh0LmNhbnZhcztcbiAgICBjb25zdCBjdHggPSBjYW52YXMuZ2V0Q29udGV4dChcIjJkXCIpO1xuICAgIGN0eC5zYXZlKCk7XG5cbiAgICBpZih0aGlzLmlucHV0LnNlbGVjdGlvbkVuZCAhPSB0aGlzLnBvc2l0aW9uRW5kKSB0aGlzLnRvdGFsVGltZSA9IDA7XG5cbiAgICBpZih0aGlzLmNhbnZhcyAmJiB0aGlzLmNhbnZhcy5jb250YWluZXIgJiYgIXRoaXMuYXBwZW5kVG9DYW52YXMpIHtcbiAgICAgIGRvY3VtZW50LmJvZHkucmVtb3ZlQ2hpbGQodGhpcy5pbnB1dCk7XG4gICAgICB0aGlzLmNhbnZhcy5jb250YWluZXIuYXBwZW5kQ2hpbGQodGhpcy5pbnB1dCk7XG4gICAgICB0aGlzLmFwcGVuZFRvQ2FudmFzID0gdHJ1ZTtcbiAgICB9IGVsc2UgaWYoIXRoaXMuY2FudmFzICYmICF0aGlzLm5vdGljZUxvZ2dlZCkge1xuICAgICAgY29uc29sZSAmJiBjb25zb2xlLndhcm4gJiYgY29uc29sZS53YXJuKENvbnN0YW50cy5TdHJpbmcuV0FSTklOR19NRVNTQUdFICsgXCIgXCIgKyBDb25zdGFudHMuU3RyaW5nLklOUFVUX0ZVTExTQ1JFRU4pO1xuICAgICAgdGhpcy5ub3RpY2VMb2dnZWQgPSB0cnVlO1xuICAgIH1cblxuICAgIGlmKHRoaXMuc2VsZWN0ZWQgJiYgIXRoaXMuZGlzYWJsZWQpIHtcbiAgICAgIHRoaXMuY2xpY2soKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5ibHVyKCk7XG4gICAgfVxuXG4gICAgdGhpcy50ZXh0ID0gdGhpcy5pbnB1dC52YWx1ZTtcbiAgICB0aGlzLnBvc2l0aW9uU3RhcnQgPSB0aGlzLmlucHV0LnNlbGVjdGlvblN0YXJ0O1xuICAgIHRoaXMucG9zaXRpb25FbmQgPSB0aGlzLmlucHV0LnNlbGVjdGlvbkVuZDtcblxuICAgIGNvbnN0IHRpbWUgPSBwZXJmb3JtYW5jZS5ub3coKTtcbiAgICBsZXQgb2Zmc2V0VGltZSA9IDA7XG5cbiAgICBpZih0aGlzLmxhc3RUaW1lID4gMCkgb2Zmc2V0VGltZSA9IHRpbWUgLSB0aGlzLmxhc3RUaW1lO1xuICAgIHRoaXMubGFzdFRpbWUgPSB0aW1lO1xuICAgIHRoaXMudG90YWxUaW1lICs9IG9mZnNldFRpbWU7XG5cbiAgICB0aGlzLmRyYXdCYWNrZ3JvdW5kKGN0eCk7XG4gICAgdGhpcy5kcmF3Qm9yZGVyKGN0eCk7XG5cbiAgICB0aGlzLmNhbnZhc1RtcC53aWR0aCA9IFV0aWxzLmdldENhbnZhc1dpZHRoKGNhbnZhcykgKiBDb25zdGFudHMuU2V0dGluZy5QSVhFTF9SQVRJTztcbiAgICB0aGlzLmNhbnZhc1RtcC5oZWlnaHQgPSBVdGlscy5nZXRDYW52YXNIZWlnaHQoY2FudmFzKSAqIENvbnN0YW50cy5TZXR0aW5nLlBJWEVMX1JBVElPO1xuICAgIHRoaXMuY2FudmFzVG1wLnN0eWxlLndpZHRoID0gVXRpbHMuZ2V0Q2FudmFzV2lkdGgoY2FudmFzKTtcbiAgICB0aGlzLmNhbnZhc1RtcC5zdHlsZS5oZWlnaHQgPSBVdGlscy5nZXRDYW52YXNIZWlnaHQoY2FudmFzKTtcbiAgICBjb25zdCBjdHhUZXh0ID0gdGhpcy5jYW52YXNUbXAuZ2V0Q29udGV4dChcIjJkXCIpO1xuICAgIFV0aWxzLmNsZWFyKGN0eFRleHQpO1xuICAgIGN0eFRleHQuc2NhbGUoQ29uc3RhbnRzLlNldHRpbmcuUElYRUxfUkFUSU8sIENvbnN0YW50cy5TZXR0aW5nLlBJWEVMX1JBVElPKTtcblxuICAgIHRoaXMudXBkYXRlVGV4dENhY2hlKHRoaXMueCArIDUpO1xuICAgIHRoaXMuYXV0b1Njcm9sbCgpO1xuICAgIHRoaXMuZHJhd1RleHQoY3R4VGV4dCwgdGhpcy54ICsgNSk7XG5cbiAgICBVdGlscy5kcmF3SW1hZ2VEYXRhKGN0eCwgdGhpcy5jYW52YXNUbXAsIHRoaXMueCArIHRoaXMuc3R5bGUuYm9yZGVyU2l6ZSwgdGhpcy55ICsgdGhpcy5zdHlsZS5ib3JkZXJTaXplLCB0aGlzLndpZHRoIC0gdGhpcy5zdHlsZS5ib3JkZXJTaXplICogMiwgdGhpcy5oZWlnaHQgLSB0aGlzLnN0eWxlLmJvcmRlclNpemUgKiAyLCAodGhpcy54ICsgdGhpcy5zdHlsZS5ib3JkZXJTaXplKSAqIENvbnN0YW50cy5TZXR0aW5nLlBJWEVMX1JBVElPLCAodGhpcy55ICsgdGhpcy5zdHlsZS5ib3JkZXJTaXplKSAqIENvbnN0YW50cy5TZXR0aW5nLlBJWEVMX1JBVElPLCAodGhpcy53aWR0aCAtIHRoaXMuc3R5bGUuYm9yZGVyU2l6ZSAqIDIpICAqIENvbnN0YW50cy5TZXR0aW5nLlBJWEVMX1JBVElPLCAodGhpcy5oZWlnaHQgLSB0aGlzLnN0eWxlLmJvcmRlclNpemUgKiAyKSAqIENvbnN0YW50cy5TZXR0aW5nLlBJWEVMX1JBVElPKTtcblxuICAgIGlmKCh0aGlzLmhvdmVyZWQgfHwgdGhpcy5jbGlja2VkKSAmJiB0aGlzLmNhbnZhcykgdGhpcy5jYW52YXMuY3Vyc29yID0gXCJ0ZXh0XCI7XG5cbiAgICBpZighdGhpcy5zZWxlY3RlZCkge1xuICAgICAgdGhpcy50b3RhbFRpbWUgPSAwO1xuICAgIH1cblxuICAgIGN0eC5yZXN0b3JlKCk7XG4gIH1cblxuICBkcmF3VGV4dChjdHhUZXh0LCBjdXJyZW50WCkge1xuICAgIGZvcihsZXQgaSA9IC0xOyBpIDwgdGhpcy50ZXh0Lmxlbmd0aDsgaSsrKSB7XG4gICAgICBpZihpID4gLTEpIHtcbiAgICAgICAgY29uc3Qgc2l6ZXMgPSB0aGlzLnRleHRDYWNoZS5sZXR0ZXJzW2ldLnNpemVzO1xuXG4gICAgICAgIGNvbnN0IHhEcmF3ID0gY3VycmVudFggLSB0aGlzLm9mZnNldFg7XG4gICAgICAgIGNvbnN0IHlEcmF3ID0gdGhpcy55ICsgdGhpcy5zdHlsZS5ib3JkZXJTaXplO1xuXG4gICAgICAgIGlmKHRoaXMuaXNMZXR0ZXJWaXNpYmxlKGkpKSB7IC8vIERvbid0IGRyYXcgdGhlIHRleHQgaWYgaXQgaXMgb3V0c2lkZSB0aGUgaW5wdXQgKG92ZXJmbG93KVxuICAgICAgICAgIGlmKHRoaXMucG9zaXRpb25TdGFydCAhPSB0aGlzLnBvc2l0aW9uRW5kICYmIGkgPj0gdGhpcy5wb3NpdGlvblN0YXJ0ICYmIGkgPCB0aGlzLnBvc2l0aW9uRW5kKSB7XG4gICAgICAgICAgICB0aGlzLmRyYXdIaWdobGlnaHQoY3R4VGV4dCwgY3VycmVudFgsIHNpemVzKTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBVdGlscy5kcmF3VGV4dChjdHhUZXh0LCB0aGlzLnRleHRbaV0sIHRoaXMuc3R5bGUuZm9udENvbG9yLCB0aGlzLnN0eWxlLmZvbnRTaXplLCB0aGlzLnN0eWxlLmZvbnRGYW1pbHksIFwiZGVmYXVsdFwiLCBcImRlZmF1bHRcIiwgeERyYXcsIHlEcmF3LCBmYWxzZSk7XG4gICAgICAgIH1cblxuICAgICAgICBjdXJyZW50WCArPSBzaXplc1tcIndpZHRoXCJdICsgdGhpcy5zdHlsZS5zcGFjZUJldHdlZW5Db21wb25lbnRzO1xuICAgICAgfVxuXG4gICAgICBpZih0aGlzLnBvc2l0aW9uRW5kID09IGkgKyAxICYmIHRoaXMuc2VsZWN0ZWQpIHtcbiAgICAgICAgaWYodGhpcy50b3RhbFRpbWUgPD0gNTAwKSB7XG4gICAgICAgICAgdGhpcy5kcmF3Q3Vyc29yKGN0eFRleHQsIGN1cnJlbnRYKTtcbiAgICAgICAgfSBlbHNlIGlmKHRoaXMudG90YWxUaW1lID4gMTAwMCkge1xuICAgICAgICAgIHRoaXMudG90YWxUaW1lID0gMDtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBjdXJyZW50WDtcbiAgfVxuXG4gIGRyYXdDdXJzb3IoY3R4VGV4dCwgY3VycmVudFgpIHtcbiAgICBjdHhUZXh0LnN0cm9rZVN0eWxlID0gdGhpcy5zdHlsZS5ib3JkZXJDb2xvcjtcbiAgICBjdHhUZXh0LmxpbmVXaWR0aCA9IDE7XG4gICAgY3R4VGV4dC5iZWdpblBhdGgoKTtcbiAgICBjdHhUZXh0Lm1vdmVUbyhjdXJyZW50WCAtIHRoaXMub2Zmc2V0WCwgdGhpcy55ICsgMyk7XG4gICAgY3R4VGV4dC5saW5lVG8oY3VycmVudFggLSB0aGlzLm9mZnNldFgsIHRoaXMueSArIHRoaXMuc3R5bGUuZm9udFNpemUpO1xuICAgIGN0eFRleHQuc3Ryb2tlKCk7XG4gIH1cblxuICBkcmF3SGlnaGxpZ2h0KGN0eFRleHQsIGN1cnJlbnRYLCBzaXplcykge1xuICAgIGN0eFRleHQuZmlsbFN0eWxlID0gdGhpcy5zdHlsZS5zZWxlY3RDb2xvcjtcbiAgICBjdHhUZXh0LmZpbGxSZWN0KGN1cnJlbnRYIC0gdGhpcy5vZmZzZXRYLCB0aGlzLnkgKyB0aGlzLnN0eWxlLmJvcmRlclNpemUsIHNpemVzW1wid2lkdGhcIl0gKyAyLCB0aGlzLmhlaWdodCAtIHRoaXMuc3R5bGUuYm9yZGVyU2l6ZSAqIDIgLSAxKTtcbiAgfVxuXG4gIHVwZGF0ZVRleHRDYWNoZShjdXJyZW50WCkge1xuICAgIGNvbnN0IGN0eCA9IHRoaXMuY2FudmFzID8gdGhpcy5jYW52YXMuZ2V0Q29udGV4dChcIjJkXCIpIDogbnVsbDtcbiAgICBjb25zdCBwYXJlbnQgPSAodGhpcy5jYW52YXMgJiYgdGhpcy5jYW52YXMuc2NlbmUpIHx8IHRoaXMuY2FudmFzIHx8IChjdHggJiYgY3R4LmNhbnZhcyk7XG5cbiAgICBpZihjdHggJiYgKENvbnN0YW50cy5TZXR0aW5nLkRJU0FCTEVfT1BUSU1JWkFUSU9OUyB8fCAhdGhpcy50ZXh0Q2FjaGUgfHwgdGhpcy50ZXh0Q2FjaGUuZm9udFNpemUgIT0gdGhpcy5zdHlsZS5mb250U2l6ZSB8fCB0aGlzLnRleHRDYWNoZS5mb250RmFtaWx5ICE9IHRoaXMuc3R5bGUuZm9udEZhbWlseSB8fCB0aGlzLnRleHQgIT0gdGhpcy50ZXh0Q2FjaGUudGV4dCB8fCAocGFyZW50ICYmIHBhcmVudC53aWR0aCAhPSB0aGlzLnRleHRDYWNoZS5wYXJlbnRXaWR0aCkpKSB7XG4gICAgICB0aGlzLnRleHRDYWNoZSA9IHsgXCJmb250U2l6ZVwiOiB0aGlzLnN0eWxlLmZvbnRTaXplLCBcImZvbnRGYW1pbHlcIjogdGhpcy5zdHlsZS5mb250RmFtaWx5LCBcInRleHRcIjogdGhpcy50ZXh0LCBcInBhcmVudFdpZHRoXCI6IHBhcmVudC53aWR0aCwgXCJsZXR0ZXJzXCI6IFtdIH07XG5cbiAgICAgIGZvcihsZXQgaSA9IDA7IGkgPCB0aGlzLnRleHQubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgY29uc3Qgc2l6ZXMgPSBVdGlscy53cmFwVGV4dExpbmVzKGN0eCwgdGhpcy50ZXh0W2ldLCB0aGlzLndpZHRoLCB0aGlzLnN0eWxlLmZvbnRTaXplLCB0aGlzLnN0eWxlLmZvbnRGYW1pbHksIHRydWUpO1xuICAgICAgICB0aGlzLnRleHRDYWNoZS5sZXR0ZXJzW2ldID0ge1widGV4dFwiOiB0aGlzLnRleHRbaV0sIFwiY3VycmVudFhcIjogY3VycmVudFgsIFwic2l6ZXNcIjogc2l6ZXMgfTsgXG4gICAgICAgIGN1cnJlbnRYICs9IHNpemVzW1wid2lkdGhcIl0gKyB0aGlzLnN0eWxlLnNwYWNlQmV0d2VlbkNvbXBvbmVudHM7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgaXNDbGlja0N1cnJlbnRQb3NpdGlvbihwb3NpdGlvbiwgY3VycmVudFgsIHNpemVzKSB7XG4gICAgaWYocG9zaXRpb24ueCArIHRoaXMub2Zmc2V0WCA8PSBjdXJyZW50WCArIHNpemVzW1wid2lkdGhcIl0gKyB0aGlzLnN0eWxlLnNwYWNlQmV0d2VlbkNvbXBvbmVudHMgJiYgcG9zaXRpb24ueCArIHRoaXMub2Zmc2V0WCA+PSBjdXJyZW50WCkge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuXG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgaXNDbGlja0FmdGVyUG9zaXRpb24ocG9zaXRpb24sIGN1cnJlbnRYLCBzaXplcykge1xuICAgIGlmKHBvc2l0aW9uLnggKyB0aGlzLm9mZnNldFggPj0gY3VycmVudFggKyBzaXplc1tcIndpZHRoXCJdICsgdGhpcy5zdHlsZS5zcGFjZUJldHdlZW5Db21wb25lbnRzKSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG5cbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBnZXRMZXR0ZXJDbGlja2VkKHBvc2l0aW9uKSB7XG4gICAgaWYodGhpcy50ZXh0Q2FjaGUpIHtcbiAgICAgIGZvcihsZXQgaSA9IDA7IGkgPCB0aGlzLnRleHQubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgY29uc3QgbGV0dGVyID0gdGhpcy50ZXh0Q2FjaGUubGV0dGVyc1tpXTtcbiAgICAgICAgXG4gICAgICAgIGlmKHRoaXMuaXNDbGlja0N1cnJlbnRQb3NpdGlvbihwb3NpdGlvbiwgTWF0aC5yb3VuZChsZXR0ZXIuY3VycmVudFgpLCBsZXR0ZXIuc2l6ZXMpKSB7XG4gICAgICAgICAgcmV0dXJuIGk7XG4gICAgICAgIH0gZWxzZSBpZihpID49IHRoaXMudGV4dC5sZW5ndGggLSAxICYmIHRoaXMuaXNDbGlja0FmdGVyUG9zaXRpb24ocG9zaXRpb24sIE1hdGgucm91bmQobGV0dGVyLmN1cnJlbnRYKSwgbGV0dGVyLnNpemVzKSkge1xuICAgICAgICAgIHJldHVybiBpICsgMTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIGdldCBjdXJzb3JQb3NpdGlvbigpIHtcbiAgICBpZih0aGlzLnRleHRDYWNoZSkge1xuICAgICAgbGV0IHBvc2l0aW9uID0gdGhpcy5wb3NpdGlvbkVuZCAtIDE7XG5cbiAgICAgIGlmKHRoaXMucG9zaXRpb25FbmQgIT0gdGhpcy5wb3NpdGlvblN0YXJ0ICYmIHRoaXMucG9zaXRpb25FbmQgPT0gdGhpcy5wb3NpdGlvblN0YXJ0Q2xpY2sgJiYgdGhpcy5wb3NpdGlvblN0YXJ0IDwgdGhpcy5wb3NpdGlvblN0YXJ0Q2xpY2spIHtcbiAgICAgICAgcG9zaXRpb24gPSB0aGlzLnBvc2l0aW9uU3RhcnQgLSAxO1xuICAgICAgfVxuICAgICAgXG4gICAgICBpZihwb3NpdGlvbiA8IDApIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICBcImN1cnJlbnRMZXR0ZXJcIjogdGhpcy50ZXh0Q2FjaGUubGV0dGVyc1swXSxcbiAgICAgICAgICBcInhcIjogdGhpcy54ICsgdGhpcy5zdHlsZS5ib3JkZXJTaXplXG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgY29uc3QgY3VycmVudExldHRlciA9IHRoaXMudGV4dENhY2hlLmxldHRlcnNbcG9zaXRpb25dO1xuXG4gICAgICBpZihjdXJyZW50TGV0dGVyKSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgXCJjdXJyZW50TGV0dGVyXCI6IGN1cnJlbnRMZXR0ZXIsXG4gICAgICAgICAgXCJ4XCI6IGN1cnJlbnRMZXR0ZXIuY3VycmVudFhcbiAgICAgICAgfTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBpc0xldHRlclZpc2libGUobGV0dGVySWQpIHtcbiAgICBpZih0aGlzLnRleHRDYWNoZSkge1xuICAgICAgY29uc3QgbGV0dGVyID0gdGhpcy50ZXh0Q2FjaGUubGV0dGVyc1tsZXR0ZXJJZF07XG5cbiAgICAgIGlmKGxldHRlcikge1xuICAgICAgICBjb25zdCB4RHJhdyA9IGxldHRlci5jdXJyZW50WCAtIHRoaXMub2Zmc2V0WDtcbiAgXG4gICAgICAgIGlmKHhEcmF3ID49IHRoaXMueCAtIGxldHRlci5zaXplc1tcIndpZHRoXCJdICYmIHhEcmF3IDw9IHRoaXMueCArIHRoaXMud2lkdGgpIHtcbiAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIGF1dG9TY3JvbGwoKSB7XG4gICAgaWYodGhpcy50ZXh0Q2FjaGUpIHtcbiAgICAgIGNvbnN0IGN1cnNvclBvc2l0aW9uID0gdGhpcy5jdXJzb3JQb3NpdGlvbjtcbiAgICAgIGNvbnN0IGN1cnJlbnRMZXR0ZXJTaXplID0gY3Vyc29yUG9zaXRpb24uY3VycmVudExldHRlciA/IGN1cnNvclBvc2l0aW9uLmN1cnJlbnRMZXR0ZXIuc2l6ZXNbXCJ3aWR0aFwiXSA6IDA7XG4gICAgICBjb25zdCBjdXJzb3JQb3NpdGlvblBvcyA9IGN1cnNvclBvc2l0aW9uLnggKyBjdXJyZW50TGV0dGVyU2l6ZSArIHRoaXMuc3R5bGUuc3BhY2VCZXR3ZWVuQ29tcG9uZW50cztcbiAgICAgIGNvbnN0IGN1cnNvclBvc2l0aW9uTmVnID0gY3Vyc29yUG9zaXRpb24ueCAtIGN1cnJlbnRMZXR0ZXJTaXplIC0gdGhpcy5zdHlsZS5zcGFjZUJldHdlZW5Db21wb25lbnRzO1xuXG4gICAgICBjb25zdCBvZmZzZXRYID0gTWF0aC5tYXgoMCwgTWF0aC5yb3VuZChjdXJzb3JQb3NpdGlvblBvcyAtIHRoaXMueCAtIHRoaXMud2lkdGggKyB0aGlzLnN0eWxlLmJvcmRlclNpemUgKyB0aGlzLnN0eWxlLnNwYWNlQmV0d2VlbkNvbXBvbmVudHMgKiAyKSk7XG4gICAgICBjb25zdCBvZmZzZXRYTmVnID0gTWF0aC5tYXgoMCwgTWF0aC5yb3VuZChjdXJzb3JQb3NpdGlvbk5lZyAtIHRoaXMueCAtIHRoaXMuc3R5bGUuYm9yZGVyU2l6ZSAtIHRoaXMuc3R5bGUuc3BhY2VCZXR3ZWVuQ29tcG9uZW50cyAqIDIpKTtcblxuICAgICAgaWYodGhpcy5vZmZzZXRYIDwgMCkge1xuICAgICAgICB0aGlzLm9mZnNldFggPSAwO1xuICAgICAgfVxuXG4gICAgICBpZihjdXJzb3JQb3NpdGlvblBvcyAtIHRoaXMub2Zmc2V0WCA+PSB0aGlzLnggKyB0aGlzLndpZHRoIC0gdGhpcy5zdHlsZS5ib3JkZXJTaXplKSB7XG4gICAgICAgIHRoaXMub2Zmc2V0WCA9IG9mZnNldFg7XG4gICAgICAgIHJldHVybiBvZmZzZXRYO1xuICAgICAgfSBlbHNlIGlmKGN1cnNvclBvc2l0aW9uTmVnIC0gdGhpcy5vZmZzZXRYIDw9IHRoaXMueCArIHRoaXMuc3R5bGUuYm9yZGVyU2l6ZSkge1xuICAgICAgICB0aGlzLm9mZnNldFggPSBvZmZzZXRYTmVnO1xuICAgICAgICByZXR1cm4gb2Zmc2V0WE5lZztcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBjbGljaygpIHtcbiAgICB0aGlzLmlucHV0LmZvY3VzKCk7XG4gIH1cblxuICBibHVyKCkge1xuICAgIHRoaXMuaW5wdXQuYmx1cigpO1xuICB9XG5cbiAgZ2V0IHBvc2l0aW9uU3RhcnQoKSB7XG4gICAgcmV0dXJuIHRoaXMuI19wb3NpdGlvblN0YXJ0O1xuICB9XG5cbiAgZ2V0IHBvc2l0aW9uU3RhcnRDbGljaygpIHtcbiAgICByZXR1cm4gdGhpcy4jX3Bvc2l0aW9uU3RhcnRDbGljaztcbiAgfVxuXG4gIGdldCBwb3NpdGlvbkVuZCgpIHtcbiAgICByZXR1cm4gdGhpcy4jX3Bvc2l0aW9uRW5kO1xuICB9XG5cbiAgc2V0IHBvc2l0aW9uU3RhcnQocG9zaXRpb24pIHtcbiAgICB0aGlzLmlucHV0LnNlbGVjdGlvblN0YXJ0ID0gcG9zaXRpb247XG4gICAgdGhpcy4jX3Bvc2l0aW9uU3RhcnQgPSBwb3NpdGlvbjtcbiAgfVxuXG4gIHNldCBwb3NpdGlvblN0YXJ0Q2xpY2socG9zaXRpb24pIHtcbiAgICB0aGlzLiNfcG9zaXRpb25TdGFydENsaWNrID0gcG9zaXRpb247XG4gIH1cblxuICBzZXQgcG9zaXRpb25FbmQocG9zaXRpb24pIHtcbiAgICB0aGlzLmlucHV0LnNlbGVjdGlvbkVuZCA9IHBvc2l0aW9uO1xuICAgIHRoaXMuI19wb3NpdGlvbkVuZCA9IHBvc2l0aW9uO1xuICB9XG5cbiAgc2V0U2VsZWN0aW9uUmFuZ2Uoc3RhcnQsIGVuZCwgZGlyZWN0aW9uKSB7XG4gICAgdGhpcy5pbnB1dC5zZXRTZWxlY3Rpb25SYW5nZShzdGFydCwgZW5kLCBkaXJlY3Rpb24pO1xuICAgIHRoaXMucG9zaXRpb25TdGFydCA9IHN0YXJ0O1xuICAgIHRoaXMucG9zaXRpb25FbmQgPSBlbmQ7XG4gIH1cblxuICBnZXQgaGVpZ2h0KCkge1xuICAgIGNvbnN0IGJvcmRlclNpemUgPSB0aGlzLnN0eWxlICYmIHRoaXMuc3R5bGUuYm9yZGVyU2l6ZSA/IHRoaXMuc3R5bGUuYm9yZGVyU2l6ZSA6IDA7XG4gICAgcmV0dXJuIHN1cGVyLmhlaWdodCA/IHN1cGVyLmhlaWdodCA6IHRoaXMuc3R5bGUuZm9udFNpemUgKyBib3JkZXJTaXplICogMjtcbiAgfVxuXG4gIGdldCBkZWZhdWx0U3R5bGUoKSB7XG4gICAgcmV0dXJuIG5ldyBTdHlsZSh7XG4gICAgICBcImZvbnRTaXplXCI6IE1hdGguZmxvb3IoQ29uc3RhbnRzLlNldHRpbmcuRk9OVF9TSVpFIC8gMS4yNSksXG4gICAgICBcImZvbnRGYW1pbHlcIjogQ29uc3RhbnRzLlNldHRpbmcuRk9OVF9GQU1JTFksXG4gICAgICBcImZvbnRDb2xvclwiOiBDb25zdGFudHMuU2V0dGluZy5JTlBVVF9ERUZBVUxUX0ZPTlRfQ09MT1IsXG4gICAgICBcImJhY2tncm91bmRDb2xvclwiOiBDb25zdGFudHMuU2V0dGluZy5JTlBVVF9ERUZBVUxUX0JBQ0tHUk9VTkRfQ09MT1IsXG4gICAgICBcImJvcmRlckNvbG9yXCI6IENvbnN0YW50cy5TZXR0aW5nLklOUFVUX0RFRkFVTFRfQk9SREVSX0NPTE9SLFxuICAgICAgXCJib3JkZXJDb2xvclNlbGVjdGVkXCI6IENvbnN0YW50cy5TZXR0aW5nLklOUFVUX0RFRkFVTFRfQk9SREVSX0NPTE9SX1NFTEVDVEVELFxuICAgICAgXCJzZWxlY3RDb2xvclwiOiBDb25zdGFudHMuU2V0dGluZy5JTlBVVF9ERUZBVUxUX1NFTEVDVF9DT0xPUixcbiAgICAgIFwic3BhY2VCZXR3ZWVuQ29tcG9uZW50c1wiOiAxXG4gICAgfSk7XG4gIH1cbn0iLCIvKlxuICogQ29weXJpZ2h0IChDKSAyMDIwIEVsaWFzdGlrIChlbGlhc3Rpa3NvZnRzLmNvbSlcbiAqXG4gKiBUaGlzIGZpbGUgaXMgcGFydCBvZiBcIkpTR2FtZVRvb2xzXCIuXG4gKlxuICogXCJKU0dhbWVUb29sc1wiIGlzIGZyZWUgc29mdHdhcmU6IHlvdSBjYW4gcmVkaXN0cmlidXRlIGl0IGFuZC9vciBtb2RpZnlcbiAqIGl0IHVuZGVyIHRoZSB0ZXJtcyBvZiB0aGUgR05VIEdlbmVyYWwgUHVibGljIExpY2Vuc2UgYXMgcHVibGlzaGVkIGJ5XG4gKiB0aGUgRnJlZSBTb2Z0d2FyZSBGb3VuZGF0aW9uLCBlaXRoZXIgdmVyc2lvbiAzIG9mIHRoZSBMaWNlbnNlLCBvclxuICogKGF0IHlvdXIgb3B0aW9uKSBhbnkgbGF0ZXIgdmVyc2lvbi5cbiAqXG4gKiBcIkpTR2FtZVRvb2xzXCIgaXMgZGlzdHJpYnV0ZWQgaW4gdGhlIGhvcGUgdGhhdCBpdCB3aWxsIGJlIHVzZWZ1bCxcbiAqIGJ1dCBXSVRIT1VUIEFOWSBXQVJSQU5UWTsgd2l0aG91dCBldmVuIHRoZSBpbXBsaWVkIHdhcnJhbnR5IG9mXG4gKiBNRVJDSEFOVEFCSUxJVFkgb3IgRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UuICBTZWUgdGhlXG4gKiBHTlUgR2VuZXJhbCBQdWJsaWMgTGljZW5zZSBmb3IgbW9yZSBkZXRhaWxzLlxuICpcbiAqIFlvdSBzaG91bGQgaGF2ZSByZWNlaXZlZCBhIGNvcHkgb2YgdGhlIEdOVSBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlXG4gKiBhbG9uZyB3aXRoIFwiSlNHYW1lVG9vbHNcIi4gIElmIG5vdCwgc2VlIDxodHRwOi8vd3d3LmdudS5vcmcvbGljZW5zZXMvPi5cbiAqL1xuaW1wb3J0IENvbnN0YW50cyBmcm9tIFwiLi9Db25zdGFudHNcIjtcbmltcG9ydCBVdGlscyBmcm9tIFwiLi9VdGlsc1wiO1xuaW1wb3J0IENvbXBvbmVudCBmcm9tIFwiLi9Db21wb25lbnRcIjtcbmltcG9ydCBTdHlsZSBmcm9tIFwiLi9TdHlsZVwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBMYWJlbCBleHRlbmRzIENvbXBvbmVudCB7XG4gIHNlbGVjdGFibGUgPSBmYWxzZTtcbiAgI190ZXh0ID0gXCJcIjtcblxuICBjb25zdHJ1Y3Rvcih0ZXh0LCB4LCB5LCBzdHlsZSkge1xuICAgIHN1cGVyKHgsIHksIG51bGwsIG51bGwsIHN0eWxlKTtcbiAgICB0aGlzLnRleHQgPSB0ZXh0O1xuICAgIHRoaXMuc2l6ZXNDYWNoZSA9IG51bGw7XG5cbiAgICBpZighQ29uc3RhbnRzLlNldHRpbmcuRElTQUJMRV9FWFBFUklNRU5UQUxfT1BUSU1JWkFUSU9OUykge1xuICAgICAgdGhpcy51cGRhdGVTaXplcygpO1xuXG4gICAgICB0aGlzLmFkZENoYW5nZUFjdGlvbihjb21wb25lbnRDaGFuZ2VkID0+IHtcbiAgICAgICAgdGhpcy51cGRhdGVTaXplcygpO1xuICAgICAgICBjb21wb25lbnRDaGFuZ2VkICE9IHRoaXMucGFyZW50ICYmIHRoaXMucGFyZW50ICYmIHRoaXMucGFyZW50LnJlYWN0b3IgJiYgdGhpcy5wYXJlbnQucmVhY3Rvci5kaXNwYXRjaEV2ZW50KFwib25DaGFuZ2VcIiwgdGhpcyk7XG4gICAgICB9KTtcbiAgICB9XG4gIH1cblxuICBkcmF3KGNvbnRleHQpIHtcbiAgICBpZih0aGlzLmhpZGRlbikgcmV0dXJuO1xuICAgIHN1cGVyLmRyYXcoY29udGV4dCk7XG4gICAgXG4gICAgY29uc3QgY2FudmFzID0gY29udGV4dC5jYW52YXM7XG4gICAgY29uc3QgY3R4ID0gY2FudmFzLmdldENvbnRleHQoXCIyZFwiKTtcbiAgICBjdHguc2F2ZSgpO1xuXG4gICAgVXRpbHMuZHJhd1RleHQoY3R4LCB0aGlzLnRleHQsIHRoaXMuc3R5bGUuZm9udENvbG9yLCB0aGlzLnN0eWxlLmZvbnRTaXplLCB0aGlzLnN0eWxlLmZvbnRGYW1pbHksIHRoaXMuc3R5bGUuYWxpZ25lbWVudCwgdGhpcy5zdHlsZS52ZXJ0aWNhbEFsaWduZW1lbnQsIHRoaXMueCwgdGhpcy55LCB0aGlzLnN0eWxlLndyYXAsIHRoaXMuc3R5bGUuYm9sZCwgdGhpcy5zdHlsZS51bmRlcmxpbmUsIG51bGwsIHRoaXMucGFyZW50KTtcblxuICAgIGN0eC5yZXN0b3JlKCk7XG4gIH1cblxuICBzZXQgdGV4dCh0ZXh0KSB7XG4gICAgaWYodGV4dCAhPSB0aGlzLiNfdGV4dCkge1xuICAgICAgdGhpcy4jX3RleHQgPSB0ZXh0O1xuICAgICAgdGhpcy5yZWFjdG9yLmRpc3BhdGNoRXZlbnQoXCJvbkNoYW5nZVwiLCB0aGlzKTtcbiAgICB9XG4gIH1cblxuICBnZXQgdGV4dCgpIHtcbiAgICByZXR1cm4gdGhpcy4jX3RleHQ7XG4gIH1cblxuICB1cGRhdGVTaXplcygpIHtcbiAgICBjb25zdCBjdHggPSB0aGlzLmNhbnZhcyA/IHRoaXMuY2FudmFzLmdldENvbnRleHQoXCIyZFwiKSA6IG51bGw7XG4gICAgY29uc3QgcGFyZW50ID0gKHRoaXMuY2FudmFzICYmIHRoaXMuY2FudmFzLnNjZW5lKSB8fCB0aGlzLmNhbnZhcyB8fCAoY3R4ICYmIGN0eC5jYW52YXMpIHx8IHRoaXMucGFyZW50O1xuICAgIFxuICAgIGlmKGN0eCAmJiAoQ29uc3RhbnRzLlNldHRpbmcuRElTQUJMRV9PUFRJTUlaQVRJT05TIHx8ICF0aGlzLnNpemVzQ2FjaGUgfHwgdGhpcy5zaXplc0NhY2hlLmZvbnRTaXplICE9IHRoaXMuc3R5bGUuZm9udFNpemUgfHwgdGhpcy5zaXplc0NhY2hlLmZvbnRGYW1pbHkgIT0gdGhpcy5zdHlsZS5mb250RmFtaWx5IHx8IHRoaXMuc2l6ZXNDYWNoZS53cmFwICE9IHRoaXMuc3R5bGUud3JhcCB8fCB0aGlzLnRleHQgIT0gdGhpcy5zaXplc0NhY2hlLnRleHQgfHwgKHBhcmVudCAmJiBwYXJlbnQud2lkdGggIT0gdGhpcy5zaXplc0NhY2hlLnBhcmVudFdpZHRoKSB8fCB0aGlzLnNpemVzQ2FjaGUudmFsdWUgPT0gbnVsbCkpIHtcbiAgICAgIGNvbnN0IHNpemVzID0gVXRpbHMud3JhcFRleHRMaW5lcyhjdHgsIHRoaXMudGV4dCwgbnVsbCwgdGhpcy5zdHlsZS5mb250U2l6ZSwgdGhpcy5zdHlsZS5mb250RmFtaWx5LCAhdGhpcy5zdHlsZS53cmFwKTtcbiAgICAgIFxuICAgICAgaWYocGFyZW50KSB7XG4gICAgICAgIHRoaXMuc2l6ZXNDYWNoZSA9IHsgXCJmb250U2l6ZVwiOiB0aGlzLnN0eWxlLmZvbnRTaXplLCBcImZvbnRGYW1pbHlcIjogdGhpcy5zdHlsZS5mb250RmFtaWx5LCBcIndyYXBcIjogdGhpcy5zdHlsZS53cmFwLCBcInRleHRcIjogdGhpcy50ZXh0LCBcInBhcmVudFdpZHRoXCI6IHBhcmVudC53aWR0aCwgXCJ2YWx1ZVwiOiBzaXplcyB9O1xuICAgICAgICBwYXJlbnQucmVhY3Rvci5kaXNwYXRjaEV2ZW50KFwib25DaGFuZ2VcIiwgdGhpcyk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHRoaXMuc2l6ZXNDYWNoZSAmJiB0aGlzLnNpemVzQ2FjaGUudmFsdWU7XG4gIH1cblxuICBnZXQgc2l6ZXMoKSB7XG4gICAgaWYoQ29uc3RhbnRzLlNldHRpbmcuRElTQUJMRV9FWFBFUklNRU5UQUxfT1BUSU1JWkFUSU9OUykgdGhpcy51cGRhdGVTaXplcygpO1xuICAgIHJldHVybiB0aGlzLnNpemVzQ2FjaGUgPyB0aGlzLnNpemVzQ2FjaGUudmFsdWUgOiBudWxsO1xuICB9XG5cbiAgZ2V0IGhlaWdodCgpIHtcbiAgICBjb25zdCBzaXplcyA9IHRoaXMuc2l6ZXM7XG4gICAgcmV0dXJuIHNpemVzICYmIHNpemVzW1wiaGVpZ2h0XCJdO1xuICB9XG5cbiAgZ2V0IHdpZHRoKCkge1xuICAgIGNvbnN0IHNpemVzID0gdGhpcy5zaXplcztcbiAgICByZXR1cm4gc2l6ZXMgJiYgc2l6ZXNbXCJ3aWR0aFwiXTtcbiAgfVxuXG4gIGdldCBkZWZhdWx0U3R5bGUoKSB7XG4gICAgcmV0dXJuIG5ldyBTdHlsZSh7XG4gICAgICBcImZvbnRDb2xvclwiOiBDb25zdGFudHMuU2V0dGluZy5MQUJFTF9ERUZBVUxUX0ZPTlRfQ09MT1IsXG4gICAgICBcIndyYXBcIjogdHJ1ZSxcbiAgICAgIFwiYm9sZFwiOiBmYWxzZSxcbiAgICAgIFwidW5kZXJsaW5lXCI6IGZhbHNlXG4gICAgfSk7XG4gIH1cbn0iLCIvKlxuICogQ29weXJpZ2h0IChDKSAyMDIwIEVsaWFzdGlrIChlbGlhc3Rpa3NvZnRzLmNvbSlcbiAqXG4gKiBUaGlzIGZpbGUgaXMgcGFydCBvZiBcIkpTR2FtZVRvb2xzXCIuXG4gKlxuICogXCJKU0dhbWVUb29sc1wiIGlzIGZyZWUgc29mdHdhcmU6IHlvdSBjYW4gcmVkaXN0cmlidXRlIGl0IGFuZC9vciBtb2RpZnlcbiAqIGl0IHVuZGVyIHRoZSB0ZXJtcyBvZiB0aGUgR05VIEdlbmVyYWwgUHVibGljIExpY2Vuc2UgYXMgcHVibGlzaGVkIGJ5XG4gKiB0aGUgRnJlZSBTb2Z0d2FyZSBGb3VuZGF0aW9uLCBlaXRoZXIgdmVyc2lvbiAzIG9mIHRoZSBMaWNlbnNlLCBvclxuICogKGF0IHlvdXIgb3B0aW9uKSBhbnkgbGF0ZXIgdmVyc2lvbi5cbiAqXG4gKiBcIkpTR2FtZVRvb2xzXCIgaXMgZGlzdHJpYnV0ZWQgaW4gdGhlIGhvcGUgdGhhdCBpdCB3aWxsIGJlIHVzZWZ1bCxcbiAqIGJ1dCBXSVRIT1VUIEFOWSBXQVJSQU5UWTsgd2l0aG91dCBldmVuIHRoZSBpbXBsaWVkIHdhcnJhbnR5IG9mXG4gKiBNRVJDSEFOVEFCSUxJVFkgb3IgRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UuICBTZWUgdGhlXG4gKiBHTlUgR2VuZXJhbCBQdWJsaWMgTGljZW5zZSBmb3IgbW9yZSBkZXRhaWxzLlxuICpcbiAqIFlvdSBzaG91bGQgaGF2ZSByZWNlaXZlZCBhIGNvcHkgb2YgdGhlIEdOVSBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlXG4gKiBhbG9uZyB3aXRoIFwiSlNHYW1lVG9vbHNcIi4gIElmIG5vdCwgc2VlIDxodHRwOi8vd3d3LmdudS5vcmcvbGljZW5zZXMvPi5cbiAqL1xuaW1wb3J0IENvbnN0YW50cyBmcm9tIFwiLi9Db25zdGFudHNcIjtcbmltcG9ydCBMYWJlbCBmcm9tIFwiLi9MYWJlbFwiO1xuaW1wb3J0IFN0eWxlIGZyb20gXCIuL1N0eWxlXCI7XG5pbXBvcnQgVXRpbHMgZnJvbSBcIi4vVXRpbHNcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTGluayBleHRlbmRzIExhYmVsIHtcbiAgc2VsZWN0YWJsZSA9IHRydWU7XG5cbiAgY29uc3RydWN0b3IodGV4dCwgeCwgeSwgc3R5bGUpIHtcbiAgICBzdXBlcih0ZXh0LCB4LCB5LCBzdHlsZSk7XG5cbiAgICB0aGlzLmluaXRpYWxDb2xvciA9IHRoaXMuc3R5bGUuZm9udENvbG9yO1xuICAgIHRoaXMuaW5pdGlhbFVuZGVybGluZSA9IHRoaXMuc3R5bGUudW5kZXJsaW5lO1xuICB9XG5cbiAgZHJhdyhjb250ZXh0KSB7XG4gICAgaWYodGhpcy5oaWRkZW4pIHJldHVybjtcbiAgICBzdXBlci5kcmF3KGNvbnRleHQpO1xuXG4gICAgaWYodGhpcy5jbGlja2VkKSB7XG4gICAgICB0aGlzLnN0eWxlLnNldChcInVuZGVybGluZVwiLCBmYWxzZSk7XG4gICAgICB0aGlzLnN0eWxlLnNldChcImZvbnRDb2xvclwiLCB0aGlzLnN0eWxlLmZvbnRDb2xvckRvd24pO1xuICAgICAgaWYoIXRoaXMubW92YWJsZSkgdGhpcy5jYW52YXMuY3Vyc29yID0gXCJwb2ludGVyXCI7XG4gICAgfSBlbHNlIGlmKHRoaXMuaG92ZXJlZCB8fCB0aGlzLnNlbGVjdGVkKSB7XG4gICAgICB0aGlzLnN0eWxlLnNldChcInVuZGVybGluZVwiLCBmYWxzZSk7XG4gICAgICB0aGlzLnN0eWxlLnNldChcImZvbnRDb2xvclwiLCB0aGlzLnN0eWxlLmZvbnRDb2xvckhvdmVyKTtcbiAgICAgIGlmKHRoaXMuaG92ZXJlZCAmJiAhdGhpcy5tb3ZhYmxlKSB0aGlzLmNhbnZhcy5jdXJzb3IgPSBcInBvaW50ZXJcIjtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5zdHlsZS5zZXQoXCJ1bmRlcmxpbmVcIiwgdGhpcy5pbml0aWFsVW5kZXJsaW5lKTtcbiAgICAgIHRoaXMuc3R5bGUuc2V0KFwiZm9udENvbG9yXCIsIHRoaXMuaW5pdGlhbENvbG9yKTtcbiAgICB9XG5cbiAgICB0aGlzLmluaXQgPSB0cnVlO1xuICB9XG5cbiAgZ2V0IGRlZmF1bHRTdHlsZSgpIHtcbiAgICByZXR1cm4gbmV3IFN0eWxlKHtcbiAgICAgIFwiZm9udENvbG9yXCI6IENvbnN0YW50cy5TZXR0aW5nLkxJTktfREVGQVVMVF9DT0xPUixcbiAgICAgIFwiZm9udENvbG9ySG92ZXJcIjogQ29uc3RhbnRzLlNldHRpbmcuTElOS19ERUZBVUxUX0hPVkVSX0NPTE9SLFxuICAgICAgXCJmb250Q29sb3JEb3duXCI6IENvbnN0YW50cy5TZXR0aW5nLkxJTktfREVGQVVMVF9DTElDS19DT0xPUixcbiAgICAgIFwid3JhcFwiOiB0cnVlLFxuICAgICAgXCJib2xkXCI6IGZhbHNlLFxuICAgICAgXCJ1bmRlcmxpbmVcIjogdHJ1ZVxuICAgIH0pO1xuICB9XG59IiwiLypcbiAqIENvcHlyaWdodCAoQykgMjAyMCBFbGlhc3RpayAoZWxpYXN0aWtzb2Z0cy5jb20pXG4gKlxuICogVGhpcyBmaWxlIGlzIHBhcnQgb2YgXCJKU0dhbWVUb29sc1wiLlxuICpcbiAqIFwiSlNHYW1lVG9vbHNcIiBpcyBmcmVlIHNvZnR3YXJlOiB5b3UgY2FuIHJlZGlzdHJpYnV0ZSBpdCBhbmQvb3IgbW9kaWZ5XG4gKiBpdCB1bmRlciB0aGUgdGVybXMgb2YgdGhlIEdOVSBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlIGFzIHB1Ymxpc2hlZCBieVxuICogdGhlIEZyZWUgU29mdHdhcmUgRm91bmRhdGlvbiwgZWl0aGVyIHZlcnNpb24gMyBvZiB0aGUgTGljZW5zZSwgb3JcbiAqIChhdCB5b3VyIG9wdGlvbikgYW55IGxhdGVyIHZlcnNpb24uXG4gKlxuICogXCJKU0dhbWVUb29sc1wiIGlzIGRpc3RyaWJ1dGVkIGluIHRoZSBob3BlIHRoYXQgaXQgd2lsbCBiZSB1c2VmdWwsXG4gKiBidXQgV0lUSE9VVCBBTlkgV0FSUkFOVFk7IHdpdGhvdXQgZXZlbiB0aGUgaW1wbGllZCB3YXJyYW50eSBvZlxuICogTUVSQ0hBTlRBQklMSVRZIG9yIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFLiAgU2VlIHRoZVxuICogR05VIEdlbmVyYWwgUHVibGljIExpY2Vuc2UgZm9yIG1vcmUgZGV0YWlscy5cbiAqXG4gKiBZb3Ugc2hvdWxkIGhhdmUgcmVjZWl2ZWQgYSBjb3B5IG9mIHRoZSBHTlUgR2VuZXJhbCBQdWJsaWMgTGljZW5zZVxuICogYWxvbmcgd2l0aCBcIkpTR2FtZVRvb2xzXCIuICBJZiBub3QsIHNlZSA8aHR0cDovL3d3dy5nbnUub3JnL2xpY2Vuc2VzLz4uXG4gKi9cbmltcG9ydCBDb25zdGFudHMgZnJvbSBcIi4vQ29uc3RhbnRzXCI7XG5pbXBvcnQgVXRpbHMgZnJvbSBcIi4vVXRpbHNcIjtcbmltcG9ydCBDb21wb25lbnQgZnJvbSBcIi4vQ29tcG9uZW50XCI7XG5pbXBvcnQgQ29sIGZyb20gXCIuL0NvbFwiO1xuaW1wb3J0IFN0eWxlIGZyb20gXCIuL1N0eWxlXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE1lbnUgZXh0ZW5kcyBDb2wge1xuICBzZWxlY3RhYmxlID0gZmFsc2U7XG5cbiAgY29uc3RydWN0b3Ioc3R5bGUsIC4uLmNvbXBvbmVudHMpIHtcbiAgICBzdXBlcigwLCAwLCBudWxsLCBudWxsLCBzdHlsZSwgLi4uY29tcG9uZW50cyk7XG5cbiAgICB0aGlzLmxhc3RLZXkgPSB0aGlzLmxhc3RLZXkgPT0gdW5kZWZpbmVkID8gLTEgOiB0aGlzLmxhc3RLZXk7XG4gICAgdGhpcy5zZWxlY3RlZENvbXBvbmVudCA9IHRoaXMuc2VsZWN0ZWRDb21wb25lbnQgPT0gdW5kZWZpbmVkID8gMCA6IHRoaXMuc2VsZWN0ZWRDb21wb25lbnQ7XG5cbiAgICB0aGlzLmRpc2FibGUoKTtcbiAgfVxuXG4gIGRyYXcoY29udGV4dCkge1xuICAgIGlmKHRoaXMuaGlkZGVuKSByZXR1cm47XG4gICAgY29uc3QgY2FudmFzID0gY29udGV4dC5jYW52YXM7XG4gICAgY29uc3QgY3R4ID0gY2FudmFzLmdldENvbnRleHQoXCIyZFwiKTtcblxuICAgIGlmKHRoaXMuc3R5bGUuYmx1ckJhY2tncm91bmQpIHtcbiAgICAgIHRoaXMuZHJhd0JsdXIoY3R4KTtcbiAgICB9XG5cbiAgICBjdHguc2F2ZSgpO1xuXG4gICAgdGhpcy5kcmF3Q29tcG9uZW50cyhjdHgpO1xuICAgIFxuICAgIGlmKCF0aGlzLmluaXQpIHtcbiAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJrZXlkb3duXCIsIGV2ZW50ID0+IHtcbiAgICAgICAgaWYoIXRoaXMuZGlzYWJsZWQpIHtcbiAgICAgICAgICB0aGlzLmxhc3RLZXkgPSBldmVudC5rZXlDb2RlO1xuICAgICAgICAgIGlmKHRoaXMubGFzdEtleSA9PSBDb25zdGFudHMuS2V5LlVQIHx8IHRoaXMubGFzdEtleSA9PSBDb25zdGFudHMuS2V5LkJPVFRPTSkgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG5cbiAgICAgIHRoaXMuaW5pdCA9IHRydWU7XG4gICAgfVxuXG4gICAgbGV0IGtleUFjdGlvbiA9IGZhbHNlO1xuICBcbiAgICBpZih0aGlzLmNvbXBvbmVudHMgIT0gbnVsbCkge1xuICAgICAgaWYodGhpcy5sYXN0S2V5ID09IENvbnN0YW50cy5LZXkuVVApIHtcbiAgICAgICAgdGhpcy5zZWxlY3QodGhpcy5zZWxlY3RlZENvbXBvbmVudCAtIDEpO1xuICAgICAgICBrZXlBY3Rpb24gPSB0cnVlO1xuICAgICAgfSBlbHNlIGlmKHRoaXMubGFzdEtleSA9PSBDb25zdGFudHMuS2V5LkJPVFRPTSkge1xuICAgICAgICB0aGlzLnNlbGVjdCh0aGlzLnNlbGVjdGVkQ29tcG9uZW50ICsgMSk7XG4gICAgICAgIGtleUFjdGlvbiA9IHRydWU7XG4gICAgICB9IGVsc2UgaWYodGhpcy5sYXN0S2V5ID09IENvbnN0YW50cy5LZXkuRUNIQVApIHtcbiAgICAgICAgdGhpcy5kaXNhYmxlKCk7XG4gICAgICAgIGtleUFjdGlvbiA9IHRydWU7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLmNvbXBvbmVudHMuZm9yRWFjaCgoY29tcG9uZW50LCBpKSA9PiB7XG4gICAgICAgICAgaWYoY29tcG9uZW50LnNlbGVjdGVkKSB0aGlzLnNlbGVjdChpKTtcbiAgICAgICAgfSk7XG4gICAgICB9XG5cbiAgICAgIHRoaXMuY29tcG9uZW50cy5mb3JFYWNoKChjb21wb25lbnQsIGkpID0+IHtcbiAgICAgICAgaWYoY29tcG9uZW50IGluc3RhbmNlb2YgQ29tcG9uZW50KSB7XG4gICAgICAgICAgaWYoa2V5QWN0aW9uKSB7XG4gICAgICAgICAgICBpZih0aGlzLnNlbGVjdGVkQ29tcG9uZW50ID09IGkpIHtcbiAgICAgICAgICAgICAgaWYoY29tcG9uZW50LnNlbGVjdGFibGUpIHtcbiAgICAgICAgICAgICAgICBjb21wb25lbnQuc2VsZWN0ZWQgPSB0cnVlO1xuICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgaWYoIXRoaXMuaXNDb21wb25lbnRWaXNpYmxlKGNvbXBvbmVudCkpIHtcbiAgICAgICAgICAgICAgICBjb25zdCBjb21wb25lbnRIZWlnaHQgPSBjb21wb25lbnQuaGVpZ2h0O1xuICAgICAgICAgICAgICAgIGNvbnN0IGRlbHRhWSA9ICh0aGlzLm1heEhlaWdodCAtIHRoaXMub2Zmc2V0U2Nyb2xsWSkgLSAoY29tcG9uZW50LnkgKyBjb21wb25lbnRIZWlnaHQpO1xuICAgICAgICAgICAgICAgIHRoaXMub2Zmc2V0U2Nyb2xsWSA9IC1kZWx0YVk7XG5cbiAgICAgICAgICAgICAgICB0aGlzLmNvbnRyb2xTY3JvbGxpbmcobnVsbCwgLWRlbHRhWSk7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIGNvbXBvbmVudC5zZWxlY3RlZCA9IGZhbHNlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICBcbiAgICAgICAgICBpZih0aGlzLnNlbGVjdGVkQ29tcG9uZW50ID09IGkgJiYgdGhpcy5sYXN0S2V5ID09IENvbnN0YW50cy5LZXkuRU5URVIgJiYgY29tcG9uZW50LnJlYWN0b3IgJiYgIWNvbXBvbmVudC5kaXNhYmxlZCkge1xuICAgICAgICAgICAgdGhpcy5sYXN0S2V5ID0gLTE7XG4gICAgICAgICAgICB0aGlzLnNlbGVjdGVkQ29tcG9uZW50ID0gMDtcbiAgICAgICAgICAgIGNvbXBvbmVudC5yZWFjdG9yLmRpc3BhdGNoRXZlbnQoXCJvbkNsaWNrXCIpO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfVxuICAgIFxuICAgIGN0eC5yZXN0b3JlKCk7XG4gICAgdGhpcy5sYXN0S2V5ID0gLTE7XG4gIH1cblxuICBkcmF3Q29tcG9uZW50cyhjdHgpIHtcbiAgICBzdXBlci5kcmF3KGN0eCk7XG4gIH1cblxuICBkcmF3Qmx1cihjdHgpIHtcbiAgICBVdGlscy5ibHVyQ2FudmFzKGN0eCwgNSk7XG4gIH1cblxuICBkcmF3QmFja2dyb3VuZChjdHgpIHtcbiAgICBjdHguZmlsbFN0eWxlID0gdGhpcy5zdHlsZS5iYWNrZ3JvdW5kQ29sb3I7XG4gICAgY3R4LmZpbGxSZWN0KHRoaXMucGFyZW50ID8gdGhpcy5wYXJlbnQueCA6IDAsIHRoaXMucGFyZW50ID8gdGhpcy5wYXJlbnQueSA6IDAsIHRoaXMubWF4V2lkdGgsIHRoaXMubWF4SGVpZ2h0KTtcbiAgfVxuXG4gIGRpc2FibGUoKSB7XG4gICAgc3VwZXIuZGlzYWJsZSgpO1xuICAgIHRoaXMuY29tcG9uZW50cy5mb3JFYWNoKGNvbXBvbmVudCA9PiBjb21wb25lbnQgJiYgY29tcG9uZW50LmRpc2FibGUgJiYgY29tcG9uZW50LmRpc2FibGUoKSk7XG4gIH1cblxuICBlbmFibGUoKSB7XG4gICAgc3VwZXIuZW5hYmxlKCk7XG4gICAgdGhpcy5jb21wb25lbnRzLmZvckVhY2goY29tcG9uZW50ID0+IGNvbXBvbmVudCAmJiBjb21wb25lbnQuZW5hYmxlICYmIGNvbXBvbmVudC5lbmFibGUoKSk7XG4gIH1cblxuICBzZWxlY3QoaW5kZXgpIHtcbiAgICB0aGlzLnNlbGVjdGVkQ29tcG9uZW50ID0gaW5kZXg7XG5cbiAgICBjb25zdCBzZWxlY3RhYmxlQ29tcG9uZW50cyA9IHRoaXMuY29tcG9uZW50cy5maWx0ZXIoY29tcG9uZW50ID0+IGNvbXBvbmVudC5zZWxlY3RhYmxlKTtcbiAgICBpZihzZWxlY3RhYmxlQ29tcG9uZW50cy5sZW5ndGggPD0gMCkgcmV0dXJuO1xuXG4gICAgaWYodGhpcy5zZWxlY3RlZENvbXBvbmVudCA+PSB0aGlzLmNvbXBvbmVudHMubGVuZ3RoKSB7XG4gICAgICB0aGlzLnNlbGVjdGVkQ29tcG9uZW50ID0gMDtcbiAgICB9IGVsc2UgaWYodGhpcy5zZWxlY3RlZENvbXBvbmVudCA8IDApIHtcbiAgICAgIHRoaXMuc2VsZWN0ZWRDb21wb25lbnQgPSB0aGlzLmNvbXBvbmVudHMubGVuZ3RoIC0gMTtcbiAgICB9XG5cbiAgICBpZih0aGlzLmNvbXBvbmVudHNbdGhpcy5zZWxlY3RlZENvbXBvbmVudF0gJiYgIXRoaXMuY29tcG9uZW50c1t0aGlzLnNlbGVjdGVkQ29tcG9uZW50XS5zZWxlY3RhYmxlKSB7XG4gICAgICBpZih0aGlzLmxhc3RLZXkgPT0gQ29uc3RhbnRzLktleS5VUCkge1xuICAgICAgICByZXR1cm4gdGhpcy5zZWxlY3QodGhpcy5zZWxlY3RlZENvbXBvbmVudCAtIDEpO1xuICAgICAgfSBlbHNlIGlmKHRoaXMubGFzdEtleSA9PSBDb25zdGFudHMuS2V5LkJPVFRPTSkge1xuICAgICAgICByZXR1cm4gdGhpcy5zZWxlY3QodGhpcy5zZWxlY3RlZENvbXBvbmVudCArIDEpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIGdldCBzY3JvbGxBcmVhU2l6ZVgoKSB7XG4gICAgcmV0dXJuIHRoaXMuaW5uZXJXaWR0aCAtIHRoaXMubWF4V2lkdGg7XG4gIH1cblxuICBnZXQgc2Nyb2xsQXJlYVNpemVZKCkge1xuICAgIHJldHVybiB0aGlzLmlubmVySGVpZ2h0IC0gdGhpcy5tYXhIZWlnaHQ7XG4gIH1cblxuICBnZXQgbWF4SGVpZ2h0KCkge1xuICAgIHJldHVybiBzdXBlci5tYXhIZWlnaHQgfHwgKHRoaXMuY2FudmFzICYmIHRoaXMuY2FudmFzLnNjZW5lICYmIHRoaXMuY2FudmFzLnNjZW5lLmhlaWdodCk7XG4gIH1cblxuICBnZXQgbWF4V2lkdGgoKSB7XG4gICAgcmV0dXJuICh0aGlzLmNhbnZhcyAmJiB0aGlzLmNhbnZhcy5zY2VuZSAmJiB0aGlzLmNhbnZhcy5zY2VuZS53aWR0aCk7XG4gIH1cblxuICBnZXQgbWluV2lkdGgoKSB7XG4gICAgcmV0dXJuIHRoaXMucGFyZW50ID8gdGhpcy5wYXJlbnQud2lkdGggOiAwO1xuICB9XG5cbiAgZ2V0IGRlZmF1bHRTdHlsZSgpIHtcbiAgICByZXR1cm4gbmV3IFN0eWxlKHtcbiAgICAgIFwiYmx1ckJhY2tncm91bmRcIjogQ29uc3RhbnRzLlNldHRpbmcuTUVOVV9ERUZBVUxUX0JMVVJfQkFDS0dST1VORCxcbiAgICAgIFwiYmFja2dyb3VuZENvbG9yXCI6IENvbnN0YW50cy5TZXR0aW5nLk1FTlVfREVGQVVMVF9CQUNLR1JPVU5ELFxuICAgICAgXCJ2ZXJ0aWNhbEFsaWduZW1lbnRcIjogQ29uc3RhbnRzLlZlcnRpY2FsQWxpZ25lbWVudC5DRU5URVIsXG4gICAgICBcInNjcm9sbFhEaXNhYmxlZFwiOiB0cnVlXG4gICAgfSk7XG4gIH1cblxuICBjb21wYXJlVG9Db21wb25lbnQob3RoZXJDb21wb25lbnQpIHtcbiAgICByZXR1cm4gb3RoZXJDb21wb25lbnQuY29tcGFyZVRvTWVudSh0aGlzKTtcbiAgfVxuXG4gIGNvbXBhcmVUb01lbnUob3RoZXJDb21wb25lbnQpIHtcbiAgICByZXR1cm4gMDtcbiAgfVxuXG4gIGNvbXBhcmVUb1Rvb2x0aXAob3RoZXJDb21wb25lbnQpIHtcbiAgICByZXR1cm4gLTE7XG4gIH1cblxuICBjb21wYXJlVG9Ob3RpZmljYXRpb24ob3RoZXJDb21wb25lbnQpIHtcbiAgICByZXR1cm4gMTtcbiAgfVxuXG4gIGdldCBoaWRkZW4oKSB7XG4gICAgcmV0dXJuIHN1cGVyLmhpZGRlbiB8fCB0aGlzLmRpc2FibGVkO1xuICB9XG5cbiAgc2V0IGhpZGRlbihoaWRkZW4pIHtcbiAgICBzdXBlci5oaWRkZW4gPSBoaWRkZW47XG4gICAgdGhpcy5kaXNhYmxlZCA9IGhpZGRlbjtcbiAgfVxuXG4gIGlzSW5zaWRlKHBvcykge1xuICAgIHJldHVybiAhdGhpcy5oaWRkZW47XG4gIH1cbn0iLCIvKlxuICogQ29weXJpZ2h0IChDKSAyMDIwIEVsaWFzdGlrIChlbGlhc3Rpa3NvZnRzLmNvbSlcbiAqXG4gKiBUaGlzIGZpbGUgaXMgcGFydCBvZiBcIkpTR2FtZVRvb2xzXCIuXG4gKlxuICogXCJKU0dhbWVUb29sc1wiIGlzIGZyZWUgc29mdHdhcmU6IHlvdSBjYW4gcmVkaXN0cmlidXRlIGl0IGFuZC9vciBtb2RpZnlcbiAqIGl0IHVuZGVyIHRoZSB0ZXJtcyBvZiB0aGUgR05VIEdlbmVyYWwgUHVibGljIExpY2Vuc2UgYXMgcHVibGlzaGVkIGJ5XG4gKiB0aGUgRnJlZSBTb2Z0d2FyZSBGb3VuZGF0aW9uLCBlaXRoZXIgdmVyc2lvbiAzIG9mIHRoZSBMaWNlbnNlLCBvclxuICogKGF0IHlvdXIgb3B0aW9uKSBhbnkgbGF0ZXIgdmVyc2lvbi5cbiAqXG4gKiBcIkpTR2FtZVRvb2xzXCIgaXMgZGlzdHJpYnV0ZWQgaW4gdGhlIGhvcGUgdGhhdCBpdCB3aWxsIGJlIHVzZWZ1bCxcbiAqIGJ1dCBXSVRIT1VUIEFOWSBXQVJSQU5UWTsgd2l0aG91dCBldmVuIHRoZSBpbXBsaWVkIHdhcnJhbnR5IG9mXG4gKiBNRVJDSEFOVEFCSUxJVFkgb3IgRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UuICBTZWUgdGhlXG4gKiBHTlUgR2VuZXJhbCBQdWJsaWMgTGljZW5zZSBmb3IgbW9yZSBkZXRhaWxzLlxuICpcbiAqIFlvdSBzaG91bGQgaGF2ZSByZWNlaXZlZCBhIGNvcHkgb2YgdGhlIEdOVSBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlXG4gKiBhbG9uZyB3aXRoIFwiSlNHYW1lVG9vbHNcIi4gIElmIG5vdCwgc2VlIDxodHRwOi8vd3d3LmdudS5vcmcvbGljZW5zZXMvPi5cbiAqL1xuaW1wb3J0IENvbnN0YW50cyBmcm9tIFwiLi9Db25zdGFudHNcIjtcbmltcG9ydCBDb2wgZnJvbSBcIi4vQ29sXCI7XG5pbXBvcnQgQnV0dG9uIGZyb20gXCIuL0J1dHRvblwiO1xuaW1wb3J0IENyb3NzIGZyb20gXCIuL0Nyb3NzXCI7XG5pbXBvcnQgU3R5bGUgZnJvbSBcIi4vU3R5bGVcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTm90aWZpY2F0aW9uTWVzc2FnZSBleHRlbmRzIENvbCB7XG4gIHNlbGVjdGFibGUgPSBmYWxzZTtcblxuICBjb25zdHJ1Y3RvcihzdHlsZSwgZGVsYXlCZWZvcmVDbG9zaW5nLCBlYXNpbmdGdW5jdGlvbiwgLi4uY29tcG9uZW50cykge1xuICAgIHN1cGVyKDAsIDAsIG51bGwsIG51bGwsIHN0eWxlLCAuLi5jb21wb25lbnRzKTtcblxuICAgIHRoaXMuZGVsYXlCZWZvcmVDbG9zaW5nID0gZGVsYXlCZWZvcmVDbG9zaW5nID09IHVuZGVmaW5lZCA/IDUgOiBkZWxheUJlZm9yZUNsb3Npbmc7IC8vIHNlY29uZFxuICAgIHRoaXMudGltZUxhc3RGcmFtZSA9IDA7XG4gICAgdGhpcy5hbmltYXRpb25UaW1lID0gMDtcbiAgICB0aGlzLmNsb3NlZCA9IHRydWU7XG4gICAgdGhpcy5jbG9zaW5nID0gZmFsc2U7XG4gICAgdGhpcy5lYXNpbmdGdW5jdGlvbiA9IGVhc2luZ0Z1bmN0aW9uO1xuXG4gICAgdGhpcy5jbG9zZUJ1dHRvbiA9IG5ldyBCdXR0b24obnVsbCwgbnVsbCwgbnVsbCwgbnVsbCwgbmV3IFN0eWxlKHtcImFsaWduZW1lbnRcIjogQ29uc3RhbnRzLkFsaWduZW1lbnQuUklHSFQsIFwidmVydGljYWxBbGlnbmVtZW50XCI6IENvbnN0YW50cy5WZXJ0aWNhbEFsaWduZW1lbnQuVE9QLCBcInBhZGRpbmdcIjogMTAgfSksIG5ldyBDcm9zcyhudWxsLCBudWxsLCAxMCwgMTApKTtcbiAgICB0aGlzLmFkZCh0aGlzLmNsb3NlQnV0dG9uKTtcbiAgfVxuICBcbiAgZHJhdyhjb250ZXh0KSB7XG4gICAgaWYodGhpcy5oaWRkZW4pIHJldHVybjtcbiAgICB0aGlzLmNsb3NlQnV0dG9uLmNhbnZhcyA9IHRoaXMuY2FudmFzO1xuXG4gICAgY29uc3QgY2FudmFzID0gY29udGV4dC5jYW52YXM7XG4gICAgY29uc3QgY3R4ID0gY2FudmFzLmdldENvbnRleHQoXCIyZFwiKTtcblxuICAgIGN0eC5zYXZlKCk7XG5cbiAgICBpZighdGhpcy5pbml0KSB7XG4gICAgICB0aGlzLnRpbWVMYXN0RnJhbWUgPSBwZXJmb3JtYW5jZS5ub3coKTtcbiAgICB9XG4gICAgXG4gICAgaWYodGhpcy5jbG9zZUJ1dHRvbiAhPSBudWxsKSB7XG4gICAgICB0aGlzLmNsb3NlQnV0dG9uLnNldENsaWNrQWN0aW9uKCgpID0+IHtcbiAgICAgICAgdGhpcy5jbG9zZSgpO1xuICAgICAgfSk7XG4gICAgfVxuXG4gICAgY29uc3Qgb2Zmc2V0VGltZSA9IHBlcmZvcm1hbmNlLm5vdygpIC0gdGhpcy50aW1lTGFzdEZyYW1lO1xuICAgIHRoaXMudGltZUxhc3RGcmFtZSA9IHBlcmZvcm1hbmNlLm5vdygpO1xuXG4gICAgaWYodGhpcy5hbmltYXRpb25UaW1lID49IHRoaXMuZGVsYXlCZWZvcmVDbG9zaW5nICogMTAwMCAmJiAhdGhpcy5jbG9zaW5nICYmICF0aGlzLmNsb3NlZCkge1xuICAgICAgdGhpcy5jbG9zZSgpO1xuICAgIH1cblxuICAgIGlmKCF0aGlzLmNsb3NpbmcpIHtcbiAgICAgIHRoaXMuYW5pbWF0aW9uVGltZSArPSBvZmZzZXRUaW1lO1xuICAgIH0gZWxzZSB7XG4gICAgICBpZih0aGlzLnN0eWxlLmRpc2FibGVBbmltYXRpb24pIHtcbiAgICAgICAgdGhpcy5hbmltYXRpb25UaW1lID0gLTE7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLmFuaW1hdGlvblRpbWUgLT0gb2Zmc2V0VGltZTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZih0aGlzLmFuaW1hdGlvblRpbWUgPCAwKSB7XG4gICAgICB0aGlzLmNsb3NlZCA9IHRydWU7XG4gICAgICB0aGlzLmNsb3NpbmcgPSBmYWxzZTtcbiAgICB9XG5cbiAgICBpZighdGhpcy5jbG9zZWQpIHtcbiAgICAgIHRoaXMuZHJhd0NvbXBvbmVudHMoY3R4KTtcblxuICAgICAgaWYodGhpcy5jbG9zZUJ1dHRvbiAhPSBudWxsKSB7XG4gICAgICAgIHRoaXMuY2xvc2VCdXR0b24ueSA9IHRoaXMueSArIHRoaXMuc3R5bGUucGFkZGluZyAvIDI7XG4gICAgICAgIHRoaXMuY2xvc2VCdXR0b24uZHJhdyhjdHgpO1xuICAgICAgfVxuXG4gICAgICB0aGlzLmVuYWJsZUNsb3NlQnV0dG9uKCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuZGlzYWJsZUNsb3NlQnV0dG9uKCk7XG4gICAgfVxuXG4gICAgY3R4LnJlc3RvcmUoKTtcblxuICAgIHRoaXMuaW5pdCA9IHRydWU7XG4gIH1cbiAgXG4gIGdldCBvZmZzZXRZKCkge1xuICAgIGxldCBvZmZzZXRZID0gMTtcblxuICAgIGlmKCF0aGlzLnN0eWxlLmRpc2FibGVBbmltYXRpb24pIHtcbiAgICAgIG9mZnNldFkgPSB0aGlzLmFuaW1hdGlvblRpbWUgLyB0aGlzLnN0eWxlLmFuaW1hdGlvbkR1cmF0aW9uO1xuXG4gICAgICBpZih0aGlzLmVhc2luZ0Z1bmN0aW9uKSB7XG4gICAgICAgIG9mZnNldFkgPSB0aGlzLmVhc2luZ0Z1bmN0aW9uKG9mZnNldFkpO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBvZmZzZXRZO1xuICB9XG5cbiAgZ2V0IHkoKSB7XG4gICAgY29uc3Qgb2Zmc2V0WSA9IHRoaXMub2Zmc2V0WTtcblxuICAgIGlmKHRoaXMuc3R5bGUudmVydGljYWxBbGlnbmVtZW50ID09IENvbnN0YW50cy5WZXJ0aWNhbEFsaWduZW1lbnQuVE9QKSB7XG4gICAgICByZXR1cm4gKHRoaXMuaGVpZ2h0ICogKG9mZnNldFkgPD0gMSA/IG9mZnNldFkgOiAxKSkgLSB0aGlzLmhlaWdodDtcbiAgICB9IFxuICAgIFxuICAgIHJldHVybiB0aGlzLmNhbnZhcy5zY2VuZS5oZWlnaHQgLSAodGhpcy5oZWlnaHQgKiAob2Zmc2V0WSA8PSAxID8gb2Zmc2V0WSA6IDEpKTtcbiAgfVxuXG4gIHNldCB5KHkpIHtcbiAgICBzdXBlci55ID0geTtcbiAgfVxuXG4gIGRyYXdDb21wb25lbnRzKGN0eCkge1xuICAgIHN1cGVyLmRyYXcoY3R4KTtcbiAgfVxuXG4gIGNsb3NlKCkge1xuICAgIHRoaXMuZGlzYWJsZUNsb3NlQnV0dG9uKCk7XG4gIFxuICAgIGlmKCF0aGlzLmNsb3NpbmcpIHtcbiAgICAgIHRoaXMuY2xvc2luZyA9IHRydWU7XG4gICAgICB0aGlzLmFuaW1hdGlvblRpbWUgPSB0aGlzLnN0eWxlLmFuaW1hdGlvbkR1cmF0aW9uO1xuICAgIH1cbiAgfVxuICBcbiAgb3BlbigpIHtcbiAgICB0aGlzLnRpbWVMYXN0RnJhbWUgPSAwO1xuICAgIHRoaXMuYW5pbWF0aW9uVGltZSA9IDA7XG4gICAgdGhpcy5pbml0ID0gZmFsc2U7XG4gICAgdGhpcy5jbG9zZWQgPSBmYWxzZTtcbiAgICB0aGlzLmNsb3NpbmcgPSBmYWxzZTtcbiAgfVxuICBcbiAgZGlzYWJsZUNsb3NlQnV0dG9uKCkge1xuICAgIGlmKHRoaXMuY2xvc2VCdXR0b24gIT0gdW5kZWZpbmVkICYmIHRoaXMuY2xvc2VCdXR0b24gIT0gbnVsbCAmJiB0aGlzLmNsb3NlQnV0dG9uIGluc3RhbmNlb2YgQnV0dG9uKSB7XG4gICAgICB0aGlzLmNsb3NlQnV0dG9uLmRpc2FibGUoKTtcbiAgICB9XG4gIH1cbiAgXG4gIGVuYWJsZUNsb3NlQnV0dG9uKCkge1xuICAgIGlmKHRoaXMuY2xvc2VCdXR0b24gIT0gdW5kZWZpbmVkICYmIHRoaXMuY2xvc2VCdXR0b24gIT0gbnVsbCAmJiB0aGlzLmNsb3NlQnV0dG9uIGluc3RhbmNlb2YgQnV0dG9uKSB7XG4gICAgICB0aGlzLmNsb3NlQnV0dG9uLmVuYWJsZSgpO1xuICAgIH1cbiAgfTtcbiAgXG4gIGNvcHkoKSB7XG4gICAgcmV0dXJuIG5ldyBOb3RpZmljYXRpb25NZXNzYWdlKHRoaXMuc3R5bGUuY29weSgpLCB0aGlzLmRlbGF5QmVmb3JlQ2xvc2luZywgdGhpcy5lYXNpbmdGdW5jdGlvbiwgLi4udGhpcy5jb21wb25lbnRzKTtcbiAgfVxuXG4gIGdldCB3aWR0aCgpIHtcbiAgICByZXR1cm4gdGhpcy5jYW52YXMgJiYgdGhpcy5jYW52YXMuc2NlbmUgPyB0aGlzLmNhbnZhcy5zY2VuZS53aWR0aCA6IG51bGw7XG4gIH1cblxuICBnZXQgaGVpZ2h0KCkge1xuICAgIHJldHVybiBzdXBlci5oZWlnaHQgLSAodGhpcy5jbG9zZUJ1dHRvbiA/IHRoaXMuY2xvc2VCdXR0b24uaGVpZ2h0IDogMCk7XG4gIH1cblxuICBnZXQgZGVmYXVsdFN0eWxlKCkge1xuICAgIHJldHVybiBuZXcgU3R5bGUoe1xuICAgICAgXCJhbGlnbmVtZW50XCI6IENvbnN0YW50cy5BbGlnbmVtZW50LkNFTlRFUixcbiAgICAgIFwiYmFja2dyb3VuZENvbG9yXCI6IENvbnN0YW50cy5TZXR0aW5nLk5PVElGSUNBVElPTl9ERUZBVUxUX0JBQ0tHUk9VTkQsXG4gICAgICBcImFuaW1hdGlvbkR1cmF0aW9uXCI6IENvbnN0YW50cy5TZXR0aW5nLk5PVElGSUNBVElPTl9ERUZBVUxUX0FOSU1BVElPTl9EVVJBVElPTlxuICAgIH0pO1xuICB9XG5cbiAgZ2V0IGhpZGRlbigpIHtcbiAgICByZXR1cm4gc3VwZXIuaGlkZGVuIHx8IHRoaXMuY2xvc2VkO1xuICB9XG5cbiAgc2V0IGhpZGRlbihoaWRkZW4pIHtcbiAgICBzdXBlci5oaWRkZW4gPSBoaWRkZW47XG5cbiAgICBpZihoaWRkZW4pIHtcbiAgICAgIHRoaXMuZm9yY2VDbG9zZSgpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLm9wZW4oKTtcbiAgICB9XG4gIH1cblxuICBjb21wYXJlVG9Db21wb25lbnQob3RoZXJDb21wb25lbnQpIHtcbiAgICByZXR1cm4gb3RoZXJDb21wb25lbnQuY29tcGFyZVRvTm90aWZpY2F0aW9uKHRoaXMpO1xuICB9XG5cbiAgY29tcGFyZVRvVG9vbHRpcChvdGhlckNvbXBvbmVudCkge1xuICAgIHJldHVybiAtMTtcbiAgfVxuXG4gIGNvbXBhcmVUb05vdGlmaWNhdGlvbihvdGhlckNvbXBvbmVudCkge1xuICAgIHJldHVybiAwO1xuICB9XG5cbiAgY29tcGFyZVRvTWVudShvdGhlckNvbXBvbmVudCkge1xuICAgIHJldHVybiAtMTtcbiAgfVxufSIsIi8qXG4gKiBDb3B5cmlnaHQgKEMpIDIwMjAgRWxpYXN0aWsgKGVsaWFzdGlrc29mdHMuY29tKVxuICpcbiAqIFRoaXMgZmlsZSBpcyBwYXJ0IG9mIFwiSlNHYW1lVG9vbHNcIi5cbiAqXG4gKiBcIkpTR2FtZVRvb2xzXCIgaXMgZnJlZSBzb2Z0d2FyZTogeW91IGNhbiByZWRpc3RyaWJ1dGUgaXQgYW5kL29yIG1vZGlmeVxuICogaXQgdW5kZXIgdGhlIHRlcm1zIG9mIHRoZSBHTlUgR2VuZXJhbCBQdWJsaWMgTGljZW5zZSBhcyBwdWJsaXNoZWQgYnlcbiAqIHRoZSBGcmVlIFNvZnR3YXJlIEZvdW5kYXRpb24sIGVpdGhlciB2ZXJzaW9uIDMgb2YgdGhlIExpY2Vuc2UsIG9yXG4gKiAoYXQgeW91ciBvcHRpb24pIGFueSBsYXRlciB2ZXJzaW9uLlxuICpcbiAqIFwiSlNHYW1lVG9vbHNcIiBpcyBkaXN0cmlidXRlZCBpbiB0aGUgaG9wZSB0aGF0IGl0IHdpbGwgYmUgdXNlZnVsLFxuICogYnV0IFdJVEhPVVQgQU5ZIFdBUlJBTlRZOyB3aXRob3V0IGV2ZW4gdGhlIGltcGxpZWQgd2FycmFudHkgb2ZcbiAqIE1FUkNIQU5UQUJJTElUWSBvciBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRS4gIFNlZSB0aGVcbiAqIEdOVSBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlIGZvciBtb3JlIGRldGFpbHMuXG4gKlxuICogWW91IHNob3VsZCBoYXZlIHJlY2VpdmVkIGEgY29weSBvZiB0aGUgR05VIEdlbmVyYWwgUHVibGljIExpY2Vuc2VcbiAqIGFsb25nIHdpdGggXCJKU0dhbWVUb29sc1wiLiAgSWYgbm90LCBzZWUgPGh0dHA6Ly93d3cuZ251Lm9yZy9saWNlbnNlcy8+LlxuICovXG5pbXBvcnQgQm94IGZyb20gXCIuL0JveFwiO1xuaW1wb3J0IENvbnN0YW50cyBmcm9tIFwiLi9Db25zdGFudHNcIjtcbmltcG9ydCBTdHlsZSBmcm9tIFwiLi9TdHlsZVwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBQcm9ncmVzc0JhciBleHRlbmRzIEJveCB7XG4gICNwcmVjUGVyY2VudCA9IDA7XG4gIHNlbGVjdGFibGUgPSBmYWxzZTtcblxuICBjb25zdHJ1Y3Rvcih4LCB5LCB3aWR0aCwgaGVpZ2h0LCBzdHlsZSwgZGVmYXVsdFBlcmNlbnQsIGVhc2luZ0Z1bmN0aW9uKSB7XG4gICAgc3VwZXIoeCwgeSwgd2lkdGgsIGhlaWdodCwgc3R5bGUpO1xuXG4gICAgdGhpcy5wZXJjZW50ID0gZGVmYXVsdFBlcmNlbnQgPT0gdW5kZWZpbmVkID8gMCA6IGRlZmF1bHRQZXJjZW50O1xuICAgIHRoaXMuI3ByZWNQZXJjZW50ID0gdGhpcy5wZXJjZW50O1xuICAgIHRoaXMuZWFzaW5nRnVuY3Rpb24gPSBlYXNpbmdGdW5jdGlvbjtcblxuICAgIHRoaXMubGFzdFRpbWUgPSAwO1xuICAgIHRoaXMudG90YWxUaW1lID0gMDtcbiAgfVxuXG4gIGRyYXcoY29udGV4dCkge1xuICAgIGlmKHRoaXMuaGlkZGVuKSByZXR1cm47XG4gICAgc3VwZXIuZHJhdyhjb250ZXh0KTtcblxuICAgIGNvbnN0IGNhbnZhcyA9IGNvbnRleHQuY2FudmFzO1xuICAgIGNvbnN0IGN0eCA9IGNhbnZhcy5nZXRDb250ZXh0KFwiMmRcIik7XG4gICAgY3R4LnNhdmUoKTtcblxuICAgIGNvbnN0IHRpbWUgPSBwZXJmb3JtYW5jZS5ub3coKTtcbiAgICBsZXQgb2Zmc2V0VGltZSA9IDA7XG5cbiAgICBpZih0aGlzLiNwcmVjUGVyY2VudCAhPSB0aGlzLnBlcmNlbnQgJiYgIXRoaXMuc3R5bGUuZGlzYWJsZUFuaW1hdGlvbikge1xuICAgICAgaWYodGhpcy5sYXN0VGltZSA+IDApIG9mZnNldFRpbWUgPSB0aW1lIC0gdGhpcy5sYXN0VGltZTtcbiAgICAgIHRoaXMudG90YWxUaW1lICs9IG9mZnNldFRpbWU7XG5cbiAgICAgIGlmKHRoaXMudG90YWxUaW1lID49IHRoaXMuc3R5bGUuYW5pbWF0aW9uRHVyYXRpb24pIHtcbiAgICAgICAgdGhpcy4jcHJlY1BlcmNlbnQgPSB0aGlzLnBlcmNlbnQ7XG4gICAgICAgIHRoaXMudG90YWxUaW1lID0gMDtcbiAgICAgICAgdGhpcy5sYXN0VGltZSA9IDA7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLmxhc3RUaW1lID0gdGltZTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy50b3RhbFRpbWUgPSAwO1xuICAgICAgdGhpcy5sYXN0VGltZSA9IDA7XG4gICAgfVxuXG4gICAgdGhpcy5kcmF3QmFja2dyb3VuZChjdHgpO1xuICAgIHRoaXMuZHJhd0ZvcmVncm91bmQoY3R4LCB0aGlzLndpZHRoRm9yZWdyb3VuZCk7XG5cbiAgICBjdHgucmVzdG9yZSgpO1xuICB9XG5cbiAgZ2V0IGFuaW1hdGlvblBlcmNlbnQoKSB7XG4gICAgbGV0IGFuaW1hdGlvblBlcmNlbnQgPSAodGhpcy4jcHJlY1BlcmNlbnQgIT0gdGhpcy5wZXJjZW50ICYmICF0aGlzLnN0eWxlLmRpc2FibGVBbmltYXRpb24gPyB0aGlzLnRvdGFsVGltZSAvICh0aGlzLnN0eWxlLmFuaW1hdGlvbkR1cmF0aW9uKSA6IDEpO1xuXG4gICAgaWYodGhpcy5lYXNpbmdGdW5jdGlvbikge1xuICAgICAgYW5pbWF0aW9uUGVyY2VudCA9IHRoaXMuZWFzaW5nRnVuY3Rpb24oYW5pbWF0aW9uUGVyY2VudCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGFuaW1hdGlvblBlcmNlbnQ7XG4gIH1cblxuICBnZXQgd2lkdGhGb3JlZ3JvdW5kKCkge1xuICAgIHJldHVybiBNYXRoLm1heCgwLCBNYXRoLm1pbih0aGlzLndpZHRoLCB0aGlzLndpZHRoICogKHRoaXMuI3ByZWNQZXJjZW50ICsgKHRoaXMucGVyY2VudCAtIHRoaXMuI3ByZWNQZXJjZW50KSAqIHRoaXMuYW5pbWF0aW9uUGVyY2VudCkpKTtcbiAgfVxuXG4gIGRyYXdGb3JlZ3JvdW5kKGN0eCwgd2lkdGhGb3JlZ3JvdW5kKSB7XG4gICAgY3R4LnNhdmUoKTtcblxuICAgIGN0eC5maWxsU3R5bGUgPSB0aGlzLnN0eWxlLmZvcmVncm91bmRDb2xvcjtcbiAgICBjdHguZmlsbFJlY3QodGhpcy54LCB0aGlzLnksIHdpZHRoRm9yZWdyb3VuZCwgdGhpcy5oZWlnaHQpO1xuXG4gICAgY3R4LnJlc3RvcmUoKTtcbiAgfVxuXG4gIGdldCBkZWZhdWx0U3R5bGUoKSB7XG4gICAgcmV0dXJuIG5ldyBTdHlsZSh7XG4gICAgICBcImJhY2tncm91bmRDb2xvclwiOiBDb25zdGFudHMuU2V0dGluZy5QUk9HUkVTU19ERUZBVUxUX0JBQ0tHUk9VTkQsXG4gICAgICBcImZvcmVncm91bmRDb2xvclwiOiBDb25zdGFudHMuU2V0dGluZy5QUk9HUkVTU19ERUZBVUxUX0ZPUkVHUk9VTkQsXG4gICAgICBcImFuaW1hdGlvbkR1cmF0aW9uXCI6IENvbnN0YW50cy5TZXR0aW5nLlBST0dSRVNTX0RFRkFVTFRfQU5JTUFUSU9OX0RVUkFUSU9OXG4gICAgfSk7XG4gIH1cbn0iLCIvKlxuICogQ29weXJpZ2h0IChDKSAyMDIwIEVsaWFzdGlrIChlbGlhc3Rpa3NvZnRzLmNvbSlcbiAqXG4gKiBUaGlzIGZpbGUgaXMgcGFydCBvZiBcIkpTR2FtZVRvb2xzXCIuXG4gKlxuICogXCJKU0dhbWVUb29sc1wiIGlzIGZyZWUgc29mdHdhcmU6IHlvdSBjYW4gcmVkaXN0cmlidXRlIGl0IGFuZC9vciBtb2RpZnlcbiAqIGl0IHVuZGVyIHRoZSB0ZXJtcyBvZiB0aGUgR05VIEdlbmVyYWwgUHVibGljIExpY2Vuc2UgYXMgcHVibGlzaGVkIGJ5XG4gKiB0aGUgRnJlZSBTb2Z0d2FyZSBGb3VuZGF0aW9uLCBlaXRoZXIgdmVyc2lvbiAzIG9mIHRoZSBMaWNlbnNlLCBvclxuICogKGF0IHlvdXIgb3B0aW9uKSBhbnkgbGF0ZXIgdmVyc2lvbi5cbiAqXG4gKiBcIkpTR2FtZVRvb2xzXCIgaXMgZGlzdHJpYnV0ZWQgaW4gdGhlIGhvcGUgdGhhdCBpdCB3aWxsIGJlIHVzZWZ1bCxcbiAqIGJ1dCBXSVRIT1VUIEFOWSBXQVJSQU5UWTsgd2l0aG91dCBldmVuIHRoZSBpbXBsaWVkIHdhcnJhbnR5IG9mXG4gKiBNRVJDSEFOVEFCSUxJVFkgb3IgRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UuICBTZWUgdGhlXG4gKiBHTlUgR2VuZXJhbCBQdWJsaWMgTGljZW5zZSBmb3IgbW9yZSBkZXRhaWxzLlxuICpcbiAqIFlvdSBzaG91bGQgaGF2ZSByZWNlaXZlZCBhIGNvcHkgb2YgdGhlIEdOVSBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlXG4gKiBhbG9uZyB3aXRoIFwiSlNHYW1lVG9vbHNcIi4gIElmIG5vdCwgc2VlIDxodHRwOi8vd3d3LmdudS5vcmcvbGljZW5zZXMvPi5cbiAqL1xuaW1wb3J0IEV2ZW50IGZyb20gXCIuL0V2ZW50XCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFJlYWN0b3Ige1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICB0aGlzLmV2ZW50cyA9IHt9O1xuICB9XG5cbiAgcmVnaXN0ZXJFdmVudChldmVudE5hbWUpIHtcbiAgICB0aGlzLmV2ZW50c1tldmVudE5hbWVdID0gbmV3IEV2ZW50KGV2ZW50TmFtZSk7XG4gIH1cblxuICBkaXNwYXRjaEV2ZW50KGV2ZW50TmFtZSwgLi4uZXZlbnRBcmdzKSB7XG4gICAgaWYodGhpcy5ldmVudHNbZXZlbnROYW1lXSkge1xuICAgICAgY29uc3QgY2FsbGJhY2tzID0gdGhpcy5ldmVudHNbZXZlbnROYW1lXS5jYWxsYmFja3M7XG4gICAgICBjYWxsYmFja3MuZm9yRWFjaChjYWxsYmFjayA9PiBjYWxsYmFjayAmJiBjYWxsYmFjayguLi5ldmVudEFyZ3MpKTtcbiAgICB9XG4gIH1cblxuICBhZGRFdmVudExpc3RlbmVyKGV2ZW50TmFtZSwgY2FsbGJhY2spIHtcbiAgICBpZih0aGlzLmV2ZW50c1tldmVudE5hbWVdKSB0aGlzLmV2ZW50c1tldmVudE5hbWVdLnJlZ2lzdGVyQ2FsbGJhY2soY2FsbGJhY2spO1xuICB9XG5cbiAgcmVtb3ZlRXZlbnRMaXN0ZW5lcihldmVudE5hbWUsIGNhbGxiYWNrKSB7XG4gICAgaWYodGhpcy5ldmVudHNbZXZlbnROYW1lXSkgdGhpcy5ldmVudHNbZXZlbnROYW1lXS5yZW1vdmVDYWxsYmFjayhjYWxsYmFjayk7XG4gIH1cblxuICByZW1vdmVBbGxFdmVudExpc3RlbmVyKGV2ZW50TmFtZSkge1xuICAgIGlmKHRoaXMuZXZlbnRzW2V2ZW50TmFtZV0pIHRoaXMuZXZlbnRzW2V2ZW50TmFtZV0ucmVtb3ZlQWxsQ2FsbGJhY2tzKCk7XG4gIH1cbn0iLCIvKlxuICogQ29weXJpZ2h0IChDKSAyMDIwIEVsaWFzdGlrIChlbGlhc3Rpa3NvZnRzLmNvbSlcbiAqXG4gKiBUaGlzIGZpbGUgaXMgcGFydCBvZiBcIkpTR2FtZVRvb2xzXCIuXG4gKlxuICogXCJKU0dhbWVUb29sc1wiIGlzIGZyZWUgc29mdHdhcmU6IHlvdSBjYW4gcmVkaXN0cmlidXRlIGl0IGFuZC9vciBtb2RpZnlcbiAqIGl0IHVuZGVyIHRoZSB0ZXJtcyBvZiB0aGUgR05VIEdlbmVyYWwgUHVibGljIExpY2Vuc2UgYXMgcHVibGlzaGVkIGJ5XG4gKiB0aGUgRnJlZSBTb2Z0d2FyZSBGb3VuZGF0aW9uLCBlaXRoZXIgdmVyc2lvbiAzIG9mIHRoZSBMaWNlbnNlLCBvclxuICogKGF0IHlvdXIgb3B0aW9uKSBhbnkgbGF0ZXIgdmVyc2lvbi5cbiAqXG4gKiBcIkpTR2FtZVRvb2xzXCIgaXMgZGlzdHJpYnV0ZWQgaW4gdGhlIGhvcGUgdGhhdCBpdCB3aWxsIGJlIHVzZWZ1bCxcbiAqIGJ1dCBXSVRIT1VUIEFOWSBXQVJSQU5UWTsgd2l0aG91dCBldmVuIHRoZSBpbXBsaWVkIHdhcnJhbnR5IG9mXG4gKiBNRVJDSEFOVEFCSUxJVFkgb3IgRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UuICBTZWUgdGhlXG4gKiBHTlUgR2VuZXJhbCBQdWJsaWMgTGljZW5zZSBmb3IgbW9yZSBkZXRhaWxzLlxuICpcbiAqIFlvdSBzaG91bGQgaGF2ZSByZWNlaXZlZCBhIGNvcHkgb2YgdGhlIEdOVSBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlXG4gKiBhbG9uZyB3aXRoIFwiSlNHYW1lVG9vbHNcIi4gIElmIG5vdCwgc2VlIDxodHRwOi8vd3d3LmdudS5vcmcvbGljZW5zZXMvPi5cbiAqL1xuaW1wb3J0IFJlYWN0b3IgZnJvbSBcIi4vUmVhY3RvclwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBSZWFjdG9yQ2FudmFzIGV4dGVuZHMgUmVhY3RvciB7XG4gIHJlZ2lzdGVyRXZlbnQoZXZlbnROYW1lKSB7XG4gICAgaWYoIXRoaXMuZXZlbnRzW2V2ZW50TmFtZV0pIHRoaXMuZXZlbnRzW2V2ZW50TmFtZV0gPSBbXTtcbiAgfVxuXG4gIGRpc3BhdGNoRXZlbnQoZXZlbnROYW1lLCAuLi5ldmVudEFyZ3MpIHtcbiAgICBpZih0aGlzLmV2ZW50c1tldmVudE5hbWVdKSB7XG4gICAgICBjb25zdCBldmVudHMgPSB0aGlzLmV2ZW50c1tldmVudE5hbWVdO1xuICAgICAgZXZlbnRzLmZvckVhY2goZXZlbnQgPT4gZXZlbnQgJiYgZXZlbnQuY2FsbGJhY2sgJiYgZXZlbnQuY2FsbGJhY2soLi4uZXZlbnRBcmdzKSk7XG4gICAgfVxuICB9XG5cbiAgZGlzcGF0Y2hFdmVudENvbXBvbmVudChldmVudE5hbWUsIGNvbXBvbmVudCwgLi4uZXZlbnRBcmdzKSB7XG4gICAgaWYodGhpcy5ldmVudHNbZXZlbnROYW1lXSkge1xuICAgICAgY29uc3QgZXZlbnRzID0gdGhpcy5ldmVudHNbZXZlbnROYW1lXTtcbiAgICAgIGV2ZW50cy5mb3JFYWNoKGV2ZW50ID0+IGV2ZW50ICYmIGV2ZW50LmNhbGxiYWNrICYmIGV2ZW50LmNvbXBvbmVudCA9PSBjb21wb25lbnQgJiYgZXZlbnQuY2FsbGJhY2soLi4uZXZlbnRBcmdzKSk7XG4gICAgfVxuICB9XG5cbiAgYWRkRXZlbnRMaXN0ZW5lcihldmVudE5hbWUsIGNvbXBvbmVudCwgY2FsbGJhY2spIHtcbiAgICBpZih0aGlzLmV2ZW50c1tldmVudE5hbWVdKSB7XG4gICAgICB0aGlzLmV2ZW50c1tldmVudE5hbWVdLnB1c2goe1xuICAgICAgICBcImNvbXBvbmVudFwiOiBjb21wb25lbnQsXG4gICAgICAgIFwiY2FsbGJhY2tcIjogY2FsbGJhY2tcbiAgICAgIH0pO1xuICAgIH1cbiAgfVxuXG4gIHJlbW92ZUV2ZW50TGlzdGVuZXIoZXZlbnROYW1lLCBjYWxsYmFjaykge1xuICAgIGlmKHRoaXMuZXZlbnRzW2V2ZW50TmFtZV0pIHRoaXMuZXZlbnRzW2V2ZW50TmFtZV0uZmlsdGVyKGV2ZW50ID0+IGV2ZW50ICYmIGV2ZW50LmNhbGxiYWNrICE9IGNhbGxiYWNrKTtcbiAgfVxuXG4gIHJlbW92ZUV2ZW50TGlzdGVuZXJDb21wb25lbnQoZXZlbnROYW1lLCBjb21wb25lbnQpIHtcbiAgICBpZih0aGlzLmV2ZW50c1tldmVudE5hbWVdKSB0aGlzLmV2ZW50c1tldmVudE5hbWVdLmZpbHRlcihldmVudCA9PiBldmVudCAmJiBldmVudC5jb21wb25lbnQgIT0gY29tcG9uZW50KTtcbiAgfVxuXG4gIHJlbW92ZUFsbEV2ZW50TGlzdGVuZXIoKSB7XG4gICAgdGhpcy5ldmVudHMgPSBbXTtcbiAgfVxufSIsIi8qXG4gKiBDb3B5cmlnaHQgKEMpIDIwMjAgRWxpYXN0aWsgKGVsaWFzdGlrc29mdHMuY29tKVxuICpcbiAqIFRoaXMgZmlsZSBpcyBwYXJ0IG9mIFwiSlNHYW1lVG9vbHNcIi5cbiAqXG4gKiBcIkpTR2FtZVRvb2xzXCIgaXMgZnJlZSBzb2Z0d2FyZTogeW91IGNhbiByZWRpc3RyaWJ1dGUgaXQgYW5kL29yIG1vZGlmeVxuICogaXQgdW5kZXIgdGhlIHRlcm1zIG9mIHRoZSBHTlUgR2VuZXJhbCBQdWJsaWMgTGljZW5zZSBhcyBwdWJsaXNoZWQgYnlcbiAqIHRoZSBGcmVlIFNvZnR3YXJlIEZvdW5kYXRpb24sIGVpdGhlciB2ZXJzaW9uIDMgb2YgdGhlIExpY2Vuc2UsIG9yXG4gKiAoYXQgeW91ciBvcHRpb24pIGFueSBsYXRlciB2ZXJzaW9uLlxuICpcbiAqIFwiSlNHYW1lVG9vbHNcIiBpcyBkaXN0cmlidXRlZCBpbiB0aGUgaG9wZSB0aGF0IGl0IHdpbGwgYmUgdXNlZnVsLFxuICogYnV0IFdJVEhPVVQgQU5ZIFdBUlJBTlRZOyB3aXRob3V0IGV2ZW4gdGhlIGltcGxpZWQgd2FycmFudHkgb2ZcbiAqIE1FUkNIQU5UQUJJTElUWSBvciBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRS4gIFNlZSB0aGVcbiAqIEdOVSBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlIGZvciBtb3JlIGRldGFpbHMuXG4gKlxuICogWW91IHNob3VsZCBoYXZlIHJlY2VpdmVkIGEgY29weSBvZiB0aGUgR05VIEdlbmVyYWwgUHVibGljIExpY2Vuc2VcbiAqIGFsb25nIHdpdGggXCJKU0dhbWVUb29sc1wiLiAgSWYgbm90LCBzZWUgPGh0dHA6Ly93d3cuZ251Lm9yZy9saWNlbnNlcy8+LlxuICovXG5pbXBvcnQgQ29tcG9uZW50IGZyb20gXCIuL0NvbXBvbmVudFwiO1xuaW1wb3J0IENvbnRhaW5lciBmcm9tIFwiLi9Db250YWluZXJcIjtcbmltcG9ydCBVdGlscyBmcm9tIFwiLi9VdGlsc1wiO1xuaW1wb3J0IENvbnN0YW50cyBmcm9tIFwiLi9Db25zdGFudHNcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUm93IGV4dGVuZHMgQ29udGFpbmVyIHtcbiAgc2VsZWN0YWJsZSA9IGZhbHNlO1xuICAjX2lubmVySGVpZ2h0ID0gMDtcbiAgI19pbm5lcldpZHRoID0gMDtcblxuICBjb25zdHJ1Y3Rvcih4LCB5LCBtYXhXaWR0aCwgbWF4SGVpZ2h0LCBzdHlsZSwgLi4uY29tcG9uZW50cykge1xuICAgIHN1cGVyKHgsIHksIG1heFdpZHRoLCBtYXhIZWlnaHQsIHN0eWxlLCAuLi5jb21wb25lbnRzKTtcblxuICAgIGlmKCFDb25zdGFudHMuU2V0dGluZy5ESVNBQkxFX0VYUEVSSU1FTlRBTF9PUFRJTUlaQVRJT05TKSB7XG4gICAgICB0aGlzLnVwZGF0ZUlubmVyV2lkdGgoKTtcbiAgICAgIHRoaXMudXBkYXRlSW5uZXJIZWlnaHQoKTtcbiAgXG4gICAgICB0aGlzLmFkZENoYW5nZUFjdGlvbigoKSA9PiB7XG4gICAgICAgIHRoaXMudXBkYXRlSW5uZXJXaWR0aCgpO1xuICAgICAgICB0aGlzLnVwZGF0ZUlubmVySGVpZ2h0KCk7XG4gICAgICB9KTtcbiAgICB9XG4gIH1cblxuICBkcmF3KGNvbnRleHQpIHtcbiAgICBpZih0aGlzLmhpZGRlbikgcmV0dXJuO1xuICAgIHN1cGVyLmRyYXcoY29udGV4dCk7XG5cbiAgICBjb25zdCBjYW52YXMgPSBjb250ZXh0LmNhbnZhcztcbiAgICBjb25zdCBjdHggPSBjYW52YXMuZ2V0Q29udGV4dChcIjJkXCIpO1xuICAgIGN0eC5zYXZlKCk7XG5cbiAgICBsZXQgY3R4VGVtcCA9IGN0eDtcbiAgICBcbiAgICBpZih0aGlzLmlzQ3V0dGluZykge1xuICAgICAgY3R4VGVtcCA9IHRoaXMuY2FudmFzVG1wLmdldENvbnRleHQoXCIyZFwiKTtcbiAgICAgIGN0eFRlbXAuc2NhbGUoQ29uc3RhbnRzLlNldHRpbmcuUElYRUxfUkFUSU8sIENvbnN0YW50cy5TZXR0aW5nLlBJWEVMX1JBVElPKTtcbiAgICB9XG4gIFxuICAgIGlmKHN1cGVyLmNvbXBvbmVudHMgIT0gbnVsbCkge1xuICAgICAgbGV0IGN1cnJlbnRYID0gdGhpcy5zdHlsZS5wYWRkaW5nO1xuXG4gICAgICBzdXBlci5jb21wb25lbnRzLmZvckVhY2goY29tcG9uZW50ID0+IHtcbiAgICAgICAgY3VycmVudFggPSB0aGlzLmRyYXdDb21wb25lbnQoY29tcG9uZW50LCBjdXJyZW50WCwgY3R4VGVtcCk7XG4gICAgICB9KTtcbiAgICB9XG4gICAgXG4gICAgaWYodGhpcy5pc0N1dHRpbmcpIHtcbiAgICAgIFV0aWxzLmRyYXdJbWFnZURhdGEoY3R4LCB0aGlzLmNhbnZhc1RtcCwgdGhpcy54LCB0aGlzLnksIHRoaXMud2lkdGgsIHRoaXMuaGVpZ2h0LCB0aGlzLnggKiBDb25zdGFudHMuU2V0dGluZy5QSVhFTF9SQVRJTywgdGhpcy55ICogQ29uc3RhbnRzLlNldHRpbmcuUElYRUxfUkFUSU8sIHRoaXMud2lkdGggKiBDb25zdGFudHMuU2V0dGluZy5QSVhFTF9SQVRJTywgdGhpcy5oZWlnaHQgKiBDb25zdGFudHMuU2V0dGluZy5QSVhFTF9SQVRJTyk7XG4gICAgfVxuXG4gICAgc3VwZXIuZHJhd1Njcm9sbGJhcnMoY3R4KTtcblxuICAgIGN0eC5yZXN0b3JlKCk7XG4gIH1cblxuICBkcmF3Q29tcG9uZW50KGNvbXBvbmVudCwgY3VycmVudFgsIGN0eCkge1xuICAgIGlmKGNvbXBvbmVudCBpbnN0YW5jZW9mIENvbXBvbmVudCkge1xuICAgICAgY29tcG9uZW50LnggPSBjdXJyZW50WCAtIHRoaXMub2Zmc2V0U2Nyb2xsWDtcbiAgICAgIGNvbXBvbmVudC55ID0gdGhpcy5zdHlsZS5wYWRkaW5nIC0gdGhpcy5vZmZzZXRTY3JvbGxZO1xuICAgICAgXG4gICAgICBpZighY29tcG9uZW50LmhpZGRlbikge1xuICAgICAgICBpZih0aGlzLmlzQ29tcG9uZW50VmlzaWJsZShjb21wb25lbnQpKSB7XG4gICAgICAgICAgY29tcG9uZW50LmRyYXcoY3R4KTtcbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgY3VycmVudFggKz0gY29tcG9uZW50LndpZHRoICsgdGhpcy5zdHlsZS5zcGFjZUJldHdlZW5Db21wb25lbnRzO1xuICAgICAgfVxuICAgIH1cbiAgICBcbiAgICByZXR1cm4gY3VycmVudFg7XG4gIH1cblxuICB1cGRhdGVJbm5lckhlaWdodCgpIHtcbiAgICBsZXQgbWF4SGVpZ2h0ID0gMDtcbiAgICBzdXBlci5jb21wb25lbnRzLmZvckVhY2goY29tcG9uZW50ID0+IHsgaWYoY29tcG9uZW50LmhlaWdodCA+IG1heEhlaWdodCAmJiAhY29tcG9uZW50LmhpZGRlbikgbWF4SGVpZ2h0ID0gY29tcG9uZW50LmhlaWdodDsgfSk7XG4gICAgdGhpcy4jX2lubmVySGVpZ2h0ID0gbWF4SGVpZ2h0ICsgdGhpcy5zdHlsZS5wYWRkaW5nO1xuICB9XG5cbiAgdXBkYXRlSW5uZXJXaWR0aCgpIHtcbiAgICBsZXQgdG90YWxXaWR0aCA9IDA7XG4gICAgc3VwZXIuY29tcG9uZW50cy5mb3JFYWNoKGNvbXBvbmVudCA9PiB7IGlmKCFjb21wb25lbnQuaGlkZGVuKSB0b3RhbFdpZHRoICs9IGNvbXBvbmVudC53aWR0aCB9KTtcbiAgICB0aGlzLiNfaW5uZXJXaWR0aCA9IHRvdGFsV2lkdGggKyB0aGlzLnN0eWxlLnNwYWNlQmV0d2VlbkNvbXBvbmVudHMgKiAoc3VwZXIuY29tcG9uZW50cy5sZW5ndGggLSAxKSArIHRoaXMuc3R5bGUucGFkZGluZztcbiAgfVxuXG4gIGdldCBpbm5lckhlaWdodCgpIHtcbiAgICBpZihDb25zdGFudHMuU2V0dGluZy5ESVNBQkxFX0VYUEVSSU1FTlRBTF9PUFRJTUlaQVRJT05TKSB0aGlzLnVwZGF0ZUlubmVySGVpZ2h0KCk7XG4gICAgcmV0dXJuIHRoaXMuI19pbm5lckhlaWdodDtcbiAgfVxuXG4gIGdldCBpbm5lcldpZHRoKCkge1xuICAgIGlmKENvbnN0YW50cy5TZXR0aW5nLkRJU0FCTEVfRVhQRVJJTUVOVEFMX09QVElNSVpBVElPTlMpIHRoaXMudXBkYXRlSW5uZXJXaWR0aCgpO1xuICAgIHJldHVybiB0aGlzLiNfaW5uZXJXaWR0aDtcbiAgfVxuXG4gIGdldCB3aWR0aCgpIHtcbiAgICBjb25zdCB3aWR0aCA9IHRoaXMuaW5uZXJXaWR0aCB8fCAodGhpcy5wYXJlbnQgJiYgdGhpcy5wYXJlbnQud2lkdGgpO1xuICAgIGNvbnN0IG1pbiA9IHRoaXMubWF4V2lkdGggIT0gbnVsbCA/IE1hdGgubWluKHRoaXMubWF4V2lkdGgsIHdpZHRoKSA6IG51bGw7XG4gICAgcmV0dXJuIHRoaXMubWluV2lkdGggIT0gbnVsbCA/IE1hdGgubWF4KHRoaXMubWluV2lkdGgsIG1pbiAhPSBudWxsID8gbWluIDogd2lkdGgpIDogbWluICE9IG51bGwgPyBtaW4gOiB3aWR0aDtcbiAgfVxuXG4gIGdldCBoZWlnaHQoKSB7XG4gICAgY29uc3QgaGVpZ2h0ID0gdGhpcy5pbm5lckhlaWdodCB8fCAodGhpcy5wYXJlbnQgJiYgdGhpcy5wYXJlbnQuaGVpZ2h0KTtcbiAgICBjb25zdCBtaW4gPSB0aGlzLm1heEhlaWdodCAhPSBudWxsID8gTWF0aC5taW4odGhpcy5tYXhIZWlnaHQsIGhlaWdodCkgOiBudWxsO1xuICAgIHJldHVybiB0aGlzLm1pbkhlaWdodCAhPSBudWxsID8gTWF0aC5tYXgodGhpcy5taW5IZWlnaHQsIG1pbiAhPSBudWxsID8gbWluIDogaGVpZ2h0KSA6IG1pbiAhPSBudWxsID8gbWluIDogaGVpZ2h0O1xuICB9XG5cbiAgZ2V0IGRlZmF1bHRTdHlsZSgpIHtcbiAgICByZXR1cm4gc3VwZXIuZGVmYXVsdFN0eWxlO1xuICB9XG59IiwiLypcbiAqIENvcHlyaWdodCAoQykgMjAyMCBFbGlhc3RpayAoZWxpYXN0aWtzb2Z0cy5jb20pXG4gKlxuICogVGhpcyBmaWxlIGlzIHBhcnQgb2YgXCJKU0dhbWVUb29sc1wiLlxuICpcbiAqIFwiSlNHYW1lVG9vbHNcIiBpcyBmcmVlIHNvZnR3YXJlOiB5b3UgY2FuIHJlZGlzdHJpYnV0ZSBpdCBhbmQvb3IgbW9kaWZ5XG4gKiBpdCB1bmRlciB0aGUgdGVybXMgb2YgdGhlIEdOVSBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlIGFzIHB1Ymxpc2hlZCBieVxuICogdGhlIEZyZWUgU29mdHdhcmUgRm91bmRhdGlvbiwgZWl0aGVyIHZlcnNpb24gMyBvZiB0aGUgTGljZW5zZSwgb3JcbiAqIChhdCB5b3VyIG9wdGlvbikgYW55IGxhdGVyIHZlcnNpb24uXG4gKlxuICogXCJKU0dhbWVUb29sc1wiIGlzIGRpc3RyaWJ1dGVkIGluIHRoZSBob3BlIHRoYXQgaXQgd2lsbCBiZSB1c2VmdWwsXG4gKiBidXQgV0lUSE9VVCBBTlkgV0FSUkFOVFk7IHdpdGhvdXQgZXZlbiB0aGUgaW1wbGllZCB3YXJyYW50eSBvZlxuICogTUVSQ0hBTlRBQklMSVRZIG9yIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFLiAgU2VlIHRoZVxuICogR05VIEdlbmVyYWwgUHVibGljIExpY2Vuc2UgZm9yIG1vcmUgZGV0YWlscy5cbiAqXG4gKiBZb3Ugc2hvdWxkIGhhdmUgcmVjZWl2ZWQgYSBjb3B5IG9mIHRoZSBHTlUgR2VuZXJhbCBQdWJsaWMgTGljZW5zZVxuICogYWxvbmcgd2l0aCBcIkpTR2FtZVRvb2xzXCIuICBJZiBub3QsIHNlZSA8aHR0cDovL3d3dy5nbnUub3JnL2xpY2Vuc2VzLz4uXG4gKi9cbmltcG9ydCBJbnB1dCBmcm9tIFwiLi9JbnB1dFwiO1xuaW1wb3J0IENvbnRhaW5lciBmcm9tIFwiLi9Db250YWluZXJcIjtcbmltcG9ydCBVdGlscyBmcm9tIFwiLi9VdGlsc1wiO1xuaW1wb3J0IFN0eWxlIGZyb20gXCIuL1N0eWxlXCI7XG5pbXBvcnQgQ29uc3RhbnRzIGZyb20gXCIuL0NvbnN0YW50c1wiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTY2VuZSBleHRlbmRzIENvbnRhaW5lciB7XG4gIHNlbGVjdGFibGUgPSBmYWxzZTtcbiAgZW5hYmxlRXZlbnRzID0gZmFsc2U7XG5cbiAgY29uc3RydWN0b3IoLi4uY29tcG9uZW50cykge1xuICAgIHN1cGVyKCk7XG4gICAgdGhpcy5hZGRBbGwoLi4uY29tcG9uZW50cyk7XG4gIH1cblxuICBkcmF3KGNvbnRleHQpIHtcbiAgICBpZih0aGlzLmhpZGRlbikgcmV0dXJuO1xuICAgIHN1cGVyLmRyYXcoY29udGV4dCk7XG5cbiAgICBjb25zdCBjYW52YXMgPSBjb250ZXh0LmNhbnZhcztcbiAgICBjb25zdCBjdHggPSBjYW52YXMuZ2V0Q29udGV4dChcIjJkXCIpO1xuICAgIGN0eC5zYXZlKCk7XG4gICAgdGhpcy5jYW52YXMuY3Vyc29yID0gXCJkZWZhdWx0XCI7XG5cbiAgICBsZXQgY3R4VGVtcCA9IGN0eDtcbiAgICBpZih0aGlzLm1heFdpZHRoIHx8IHRoaXMubWF4SGVpZ2h0KSBjdHhUZW1wID0gdGhpcy5jYW52YXNUbXAuZ2V0Q29udGV4dChcIjJkXCIpO1xuXG4gICAgdGhpcy5kcmF3Q29tcG9uZW50cyhjdHhUZW1wKTsgLy8gRHJhdyBzb3J0ZWQgY29tcG9uZW50c1xuICAgIFxuICAgIGlmKHRoaXMubWF4V2lkdGggfHwgdGhpcy5tYXhIZWlnaHQpIFV0aWxzLmRyYXdJbWFnZURhdGEoY3R4LCB0aGlzLmNhbnZhc1RtcCwgdGhpcy54LCB0aGlzLnksIHRoaXMud2lkdGgsIHRoaXMuaGVpZ2h0LCB0aGlzLngsIHRoaXMueSwgdGhpcy53aWR0aCwgdGhpcy5oZWlnaHQpO1xuICAgIHN1cGVyLmRyYXdTY3JvbGxiYXJzKGN0eCk7XG5cbiAgICBjdHgucmVzdG9yZSgpO1xuICB9XG5cbiAgZHJhd0NvbXBvbmVudHMoY3R4KSB7XG4gICAgdGhpcy5jb21wb25lbnRzLnNvcnQoU2NlbmUuY29tcGFyZUNvbXBvbmVudHMpLmZvckVhY2goY29tcG9uZW50ID0+IGNvbXBvbmVudC5kcmF3KGN0eCkpO1xuICB9XG5cbiAgZ2V0IGRlZmF1bHRTdHlsZSgpIHtcbiAgICByZXR1cm4gbmV3IFN0eWxlKHtcbiAgICAgIFwicGFkZGluZ1wiOiBDb25zdGFudHMuU2V0dGluZy5ERUZBVUxUX1BBRERJTkdcbiAgICB9KTtcbiAgfVxufSIsIi8qXG4gKiBDb3B5cmlnaHQgKEMpIDIwMjAgRWxpYXN0aWsgKGVsaWFzdGlrc29mdHMuY29tKVxuICpcbiAqIFRoaXMgZmlsZSBpcyBwYXJ0IG9mIFwiSlNHYW1lVG9vbHNcIi5cbiAqXG4gKiBcIkpTR2FtZVRvb2xzXCIgaXMgZnJlZSBzb2Z0d2FyZTogeW91IGNhbiByZWRpc3RyaWJ1dGUgaXQgYW5kL29yIG1vZGlmeVxuICogaXQgdW5kZXIgdGhlIHRlcm1zIG9mIHRoZSBHTlUgR2VuZXJhbCBQdWJsaWMgTGljZW5zZSBhcyBwdWJsaXNoZWQgYnlcbiAqIHRoZSBGcmVlIFNvZnR3YXJlIEZvdW5kYXRpb24sIGVpdGhlciB2ZXJzaW9uIDMgb2YgdGhlIExpY2Vuc2UsIG9yXG4gKiAoYXQgeW91ciBvcHRpb24pIGFueSBsYXRlciB2ZXJzaW9uLlxuICpcbiAqIFwiSlNHYW1lVG9vbHNcIiBpcyBkaXN0cmlidXRlZCBpbiB0aGUgaG9wZSB0aGF0IGl0IHdpbGwgYmUgdXNlZnVsLFxuICogYnV0IFdJVEhPVVQgQU5ZIFdBUlJBTlRZOyB3aXRob3V0IGV2ZW4gdGhlIGltcGxpZWQgd2FycmFudHkgb2ZcbiAqIE1FUkNIQU5UQUJJTElUWSBvciBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRS4gIFNlZSB0aGVcbiAqIEdOVSBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlIGZvciBtb3JlIGRldGFpbHMuXG4gKlxuICogWW91IHNob3VsZCBoYXZlIHJlY2VpdmVkIGEgY29weSBvZiB0aGUgR05VIEdlbmVyYWwgUHVibGljIExpY2Vuc2VcbiAqIGFsb25nIHdpdGggXCJKU0dhbWVUb29sc1wiLiAgSWYgbm90LCBzZWUgPGh0dHA6Ly93d3cuZ251Lm9yZy9saWNlbnNlcy8+LlxuICovXG5pbXBvcnQgQ29uc3RhbnRzIGZyb20gXCIuL0NvbnN0YW50c1wiO1xuaW1wb3J0IEJveCBmcm9tIFwiLi9Cb3hcIjtcbmltcG9ydCBTdHlsZSBmcm9tIFwiLi9TdHlsZVwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTY3JvbGxiYXIgZXh0ZW5kcyBCb3gge1xuICBzZWxlY3RhYmxlID0gdHJ1ZTtcblxuICBjb25zdHJ1Y3RvcihzaXplLCBzdHlsZSwgcGFyZW50KSB7XG4gICAgc3VwZXIobnVsbCwgbnVsbCwgbnVsbCwgbnVsbCwgc3R5bGUpO1xuICAgIHRoaXMucGFyZW50ID0gcGFyZW50O1xuICAgIHRoaXMuc2l6ZSA9IHNpemUgfHwgQ29uc3RhbnRzLlNldHRpbmcuU0NST0xMQkFSX0RFRkFVTFRfU0laRTtcbiAgfVxuICBcbiAgZHJhdyhjb250ZXh0KSB7XG4gICAgaWYodGhpcy5oaWRkZW4pIHJldHVybjtcbiAgICBpZih0aGlzLmNsaWNrZWQpIHtcbiAgICAgIHRoaXMuaG92ZXJlZCA9IHRydWU7XG4gICAgfVxuICAgIFxuICAgIHN1cGVyLmRyYXcoY29udGV4dCk7XG4gIH1cblxuICBnZXQgbWF4V2lkdGhQYXJlbnQoKSB7XG4gICAgcmV0dXJuIHRoaXMucGFyZW50ID8gdGhpcy5wYXJlbnQubWF4V2lkdGggLSBNYXRoLmFicyhNYXRoLm1pbigwLCB0aGlzLnBhcmVudC54KSkgOiAwO1xuICB9XG5cbiAgZ2V0IG1heEhlaWdodFBhcmVudCgpIHtcbiAgICByZXR1cm4gdGhpcy5wYXJlbnQgPyB0aGlzLnBhcmVudC5tYXhIZWlnaHQgLSBNYXRoLmFicyhNYXRoLm1pbigwLCB0aGlzLnBhcmVudC55KSkgOiAwO1xuICB9XG5cbiAgZ2V0IGlubmVyV2lkdGhQYXJlbnQoKSB7XG4gICAgcmV0dXJuIHRoaXMucGFyZW50ID8gdGhpcy5wYXJlbnQuaW5uZXJXaWR0aCAtIE1hdGguYWJzKE1hdGgubWluKDAsIHRoaXMucGFyZW50LngpKSA6IDA7XG4gIH1cblxuICBnZXQgaW5uZXJIZWlnaHRQYXJlbnQoKSB7XG4gICAgcmV0dXJuIHRoaXMucGFyZW50ID8gdGhpcy5wYXJlbnQuaW5uZXJIZWlnaHQgLSBNYXRoLmFicyhNYXRoLm1pbigwLCB0aGlzLnBhcmVudC55KSkgOiAwO1xuICB9XG5cbiAgZ2V0IG1heFdpZHRoKCkge1xuICAgIHJldHVybiB0aGlzLndpZHRoO1xuICB9XG5cbiAgZ2V0IG1heEhlaWdodCgpIHtcbiAgICByZXR1cm4gdGhpcy5oZWlnaHQ7XG4gIH1cblxuICBnZXQgY29udGVudFJhdGlvWCgpIHtcbiAgICByZXR1cm4gdGhpcy5wYXJlbnQgPyB0aGlzLm1heFdpZHRoUGFyZW50IC8gdGhpcy5pbm5lcldpZHRoUGFyZW50IDogMDtcbiAgfVxuXG4gIGdldCBjb250ZW50UmF0aW9ZKCkge1xuICAgIHJldHVybiB0aGlzLnBhcmVudCA/IHRoaXMubWF4SGVpZ2h0UGFyZW50IC8gdGhpcy5pbm5lckhlaWdodFBhcmVudCA6IDA7XG4gIH1cblxuICBnZXQgd2lkdGgoKSB7XG4gICAgcmV0dXJuIHRoaXMubWF4V2lkdGhQYXJlbnQgKiB0aGlzLmNvbnRlbnRSYXRpb1g7XG4gIH1cblxuICBnZXQgaGVpZ2h0KCkge1xuICAgIHJldHVybiB0aGlzLm1heEhlaWdodFBhcmVudCAqIHRoaXMuY29udGVudFJhdGlvWTtcbiAgfVxuXG4gIGdldCB3aW5kb3dTY3JvbGxTaXplWCgpIHtcbiAgICByZXR1cm4gdGhpcy5pbm5lcldpZHRoUGFyZW50IC0gdGhpcy5tYXhXaWR0aFBhcmVudDtcbiAgfVxuXG4gIGdldCB3aW5kb3dTY3JvbGxTaXplWSgpIHtcbiAgICByZXR1cm4gdGhpcy5pbm5lckhlaWdodFBhcmVudCAtIHRoaXMubWF4SGVpZ2h0UGFyZW50O1xuICB9XG5cbiAgZ2V0IHBlcmNlbnRTY3JvbGxiYXJYKCkge1xuICAgIHJldHVybiB0aGlzLnBhcmVudCA/IHRoaXMucGFyZW50Lm9mZnNldFNjcm9sbFggLyB0aGlzLndpbmRvd1Njcm9sbFNpemVYIDogMDtcbiAgfVxuXG4gIGdldCBwZXJjZW50U2Nyb2xsYmFyWSgpIHtcbiAgICByZXR1cm4gdGhpcy5wYXJlbnQgPyB0aGlzLnBhcmVudC5vZmZzZXRTY3JvbGxZIC8gdGhpcy53aW5kb3dTY3JvbGxTaXplWSA6IDA7XG4gIH1cblxuICBnZXQgc2Nyb2xsQXJlYVNpemVYKCkge1xuICAgIHJldHVybiB0aGlzLm1heFdpZHRoUGFyZW50IC0gdGhpcy53aWR0aDtcbiAgfVxuXG4gIGdldCBzY3JvbGxBcmVhU2l6ZVkoKSB7XG4gICAgcmV0dXJuIHRoaXMubWF4SGVpZ2h0UGFyZW50IC0gdGhpcy5oZWlnaHQ7XG4gIH1cblxuICBnZXQgeCgpIHtcbiAgICByZXR1cm4gdGhpcy5wYXJlbnQgPyBNYXRoLmFicyh0aGlzLnBhcmVudC54KSArIHRoaXMuc2Nyb2xsQXJlYVNpemVYICogdGhpcy5wZXJjZW50U2Nyb2xsYmFyWCA6IDA7XG4gIH1cblxuICBnZXQgeSgpIHtcbiAgICByZXR1cm4gdGhpcy5wYXJlbnQgPyBNYXRoLmFicyh0aGlzLnBhcmVudC55KSArIHRoaXMuc2Nyb2xsQXJlYVNpemVZICogdGhpcy5wZXJjZW50U2Nyb2xsYmFyWSA6IDA7XG4gIH1cblxuICBnZXQgZGVmYXVsdFN0eWxlKCkge1xuICAgIHJldHVybiBuZXcgU3R5bGUoe1xuICAgICAgXCJiYWNrZ3JvdW5kQ29sb3JcIjogQ29uc3RhbnRzLlNldHRpbmcuU0NST0xMQkFSX0RFRkFVTFRfQkFDS0dST1VORCxcbiAgICAgIFwiYmFja2dyb3VuZENvbG9ySG92ZXJcIjogQ29uc3RhbnRzLlNldHRpbmcuU0NST0xMQkFSX0RFRkFVTFRfSE9WRVJfQkFDS0dST1VORCxcbiAgICAgIFwiYmFja2dyb3VuZENvbG9yRG93blwiOiBDb25zdGFudHMuU2V0dGluZy5TQ1JPTExCQVJfREVGQVVMVF9DTElDS19CQUNLR1JPVU5ELFxuICAgICAgXCJib3JkZXJTaXplXCI6IDBcbiAgICB9KTtcbiAgfVxuXG4gIGNvbXBhcmVUb0NvbXBvbmVudChvdGhlckNvbXBvbmVudCkge1xuICAgIHJldHVybiBvdGhlckNvbXBvbmVudC5jb21wYXJlVG9TY3JvbGxiYXIodGhpcyk7XG4gIH1cblxuICBjb21wYXJlVG9TY3JvbGxiYXIob3RoZXJDb21wb25lbnQpIHtcbiAgICByZXR1cm4gMDtcbiAgfVxufSIsIi8qXG4gKiBDb3B5cmlnaHQgKEMpIDIwMjAgRWxpYXN0aWsgKGVsaWFzdGlrc29mdHMuY29tKVxuICpcbiAqIFRoaXMgZmlsZSBpcyBwYXJ0IG9mIFwiSlNHYW1lVG9vbHNcIi5cbiAqXG4gKiBcIkpTR2FtZVRvb2xzXCIgaXMgZnJlZSBzb2Z0d2FyZTogeW91IGNhbiByZWRpc3RyaWJ1dGUgaXQgYW5kL29yIG1vZGlmeVxuICogaXQgdW5kZXIgdGhlIHRlcm1zIG9mIHRoZSBHTlUgR2VuZXJhbCBQdWJsaWMgTGljZW5zZSBhcyBwdWJsaXNoZWQgYnlcbiAqIHRoZSBGcmVlIFNvZnR3YXJlIEZvdW5kYXRpb24sIGVpdGhlciB2ZXJzaW9uIDMgb2YgdGhlIExpY2Vuc2UsIG9yXG4gKiAoYXQgeW91ciBvcHRpb24pIGFueSBsYXRlciB2ZXJzaW9uLlxuICpcbiAqIFwiSlNHYW1lVG9vbHNcIiBpcyBkaXN0cmlidXRlZCBpbiB0aGUgaG9wZSB0aGF0IGl0IHdpbGwgYmUgdXNlZnVsLFxuICogYnV0IFdJVEhPVVQgQU5ZIFdBUlJBTlRZOyB3aXRob3V0IGV2ZW4gdGhlIGltcGxpZWQgd2FycmFudHkgb2ZcbiAqIE1FUkNIQU5UQUJJTElUWSBvciBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRS4gIFNlZSB0aGVcbiAqIEdOVSBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlIGZvciBtb3JlIGRldGFpbHMuXG4gKlxuICogWW91IHNob3VsZCBoYXZlIHJlY2VpdmVkIGEgY29weSBvZiB0aGUgR05VIEdlbmVyYWwgUHVibGljIExpY2Vuc2VcbiAqIGFsb25nIHdpdGggXCJKU0dhbWVUb29sc1wiLiAgSWYgbm90LCBzZWUgPGh0dHA6Ly93d3cuZ251Lm9yZy9saWNlbnNlcy8+LlxuICovXG5pbXBvcnQgU2Nyb2xsYmFyIGZyb20gXCIuL1Njcm9sbGJhclwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTY3JvbGxiYXJIb3Jpem9udGFsIGV4dGVuZHMgU2Nyb2xsYmFyIHtcbiAgc2VsZWN0YWJsZSA9IHRydWU7XG5cbiAgY29uc3RydWN0b3Ioc2l6ZSwgc3R5bGUsIHBhcmVudCkge1xuICAgIHN1cGVyKHNpemUsIHN0eWxlLCBwYXJlbnQpO1xuXG4gICAgdGhpcy5hZGRNb3ZlQWN0aW9uKChkZWx0YVgpID0+IHtcbiAgICAgIGlmKHRoaXMucGFyZW50KSB7XG4gICAgICAgIGNvbnN0IHBlcmNlbnRTY3JvbGxiYXJOZXh0ID0gTWF0aC5hYnMoKHRoaXMucGFyZW50LnggLSBNYXRoLm1heCh0aGlzLnBhcmVudC54LCB0aGlzLnggKyAtZGVsdGFYKSkgLyAodGhpcy5wYXJlbnQud2lkdGggLSB0aGlzLndpZHRoKSk7XG4gICAgICAgIGNvbnN0IG5ld0RlbHRhWCA9ICh0aGlzLndpbmRvd1Njcm9sbFNpemVYICogcGVyY2VudFNjcm9sbGJhck5leHQpIC0gdGhpcy5wYXJlbnQub2Zmc2V0U2Nyb2xsWDtcbiAgICAgICAgdGhpcy5wYXJlbnQub2Zmc2V0U2Nyb2xsWCArPSBuZXdEZWx0YVg7XG5cbiAgICAgICAgaWYodGhpcy5wYXJlbnQucmVhY3Rvcikge1xuICAgICAgICAgIHRoaXMucGFyZW50LnJlYWN0b3IuZGlzcGF0Y2hFdmVudChcIm9uU2Nyb2xsXCIsIG5ld0RlbHRhWCwgMCk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuICBcbiAgZHJhdyhjb250ZXh0KSB7XG4gICAgaWYodGhpcy5zY3JvbGxBcmVhU2l6ZVggPiAwKSB7XG4gICAgICBzdXBlci5kcmF3KGNvbnRleHQpO1xuICAgIH1cbiAgfVxuXG4gIGdldCBoZWlnaHQoKSB7XG4gICAgcmV0dXJuIHRoaXMuc2l6ZTtcbiAgfVxuXG4gIGdldCB5KCkge1xuICAgIHJldHVybiB0aGlzLnBhcmVudCA/IHRoaXMucGFyZW50LnkgKyB0aGlzLnBhcmVudC5oZWlnaHQgLSB0aGlzLnNpemUgOiBudWxsO1xuICB9XG59IiwiLypcbiAqIENvcHlyaWdodCAoQykgMjAyMCBFbGlhc3RpayAoZWxpYXN0aWtzb2Z0cy5jb20pXG4gKlxuICogVGhpcyBmaWxlIGlzIHBhcnQgb2YgXCJKU0dhbWVUb29sc1wiLlxuICpcbiAqIFwiSlNHYW1lVG9vbHNcIiBpcyBmcmVlIHNvZnR3YXJlOiB5b3UgY2FuIHJlZGlzdHJpYnV0ZSBpdCBhbmQvb3IgbW9kaWZ5XG4gKiBpdCB1bmRlciB0aGUgdGVybXMgb2YgdGhlIEdOVSBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlIGFzIHB1Ymxpc2hlZCBieVxuICogdGhlIEZyZWUgU29mdHdhcmUgRm91bmRhdGlvbiwgZWl0aGVyIHZlcnNpb24gMyBvZiB0aGUgTGljZW5zZSwgb3JcbiAqIChhdCB5b3VyIG9wdGlvbikgYW55IGxhdGVyIHZlcnNpb24uXG4gKlxuICogXCJKU0dhbWVUb29sc1wiIGlzIGRpc3RyaWJ1dGVkIGluIHRoZSBob3BlIHRoYXQgaXQgd2lsbCBiZSB1c2VmdWwsXG4gKiBidXQgV0lUSE9VVCBBTlkgV0FSUkFOVFk7IHdpdGhvdXQgZXZlbiB0aGUgaW1wbGllZCB3YXJyYW50eSBvZlxuICogTUVSQ0hBTlRBQklMSVRZIG9yIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFLiAgU2VlIHRoZVxuICogR05VIEdlbmVyYWwgUHVibGljIExpY2Vuc2UgZm9yIG1vcmUgZGV0YWlscy5cbiAqXG4gKiBZb3Ugc2hvdWxkIGhhdmUgcmVjZWl2ZWQgYSBjb3B5IG9mIHRoZSBHTlUgR2VuZXJhbCBQdWJsaWMgTGljZW5zZVxuICogYWxvbmcgd2l0aCBcIkpTR2FtZVRvb2xzXCIuICBJZiBub3QsIHNlZSA8aHR0cDovL3d3dy5nbnUub3JnL2xpY2Vuc2VzLz4uXG4gKi9cbmltcG9ydCBTY3JvbGxiYXIgZnJvbSBcIi4vU2Nyb2xsYmFyXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFNjcm9sbGJhclZlcnRpY2FsIGV4dGVuZHMgU2Nyb2xsYmFyIHtcbiAgc2VsZWN0YWJsZSA9IHRydWU7XG5cbiAgY29uc3RydWN0b3Ioc2l6ZSwgc3R5bGUsIHBhcmVudCkge1xuICAgIHN1cGVyKHNpemUsIHN0eWxlLCBwYXJlbnQpO1xuICAgIFxuICAgIHRoaXMuYWRkTW92ZUFjdGlvbigoZGVsdGFYLCBkZWx0YVkpID0+IHtcbiAgICAgIGlmKHRoaXMucGFyZW50KSB7XG4gICAgICAgIGNvbnN0IHBlcmNlbnRTY3JvbGxiYXJOZXh0ID0gTWF0aC5hYnMoKHRoaXMucGFyZW50LnkgLSBNYXRoLm1heCh0aGlzLnBhcmVudC55LCB0aGlzLnkgKyAtZGVsdGFZKSkgLyAodGhpcy5wYXJlbnQuaGVpZ2h0IC0gdGhpcy5oZWlnaHQpKTtcbiAgICAgICAgY29uc3QgbmV3RGVsdGFZID0gKHRoaXMud2luZG93U2Nyb2xsU2l6ZVkgKiBwZXJjZW50U2Nyb2xsYmFyTmV4dCkgLSB0aGlzLnBhcmVudC5vZmZzZXRTY3JvbGxZO1xuICAgICAgICB0aGlzLnBhcmVudC5vZmZzZXRTY3JvbGxZICs9IG5ld0RlbHRhWTtcblxuICAgICAgICBpZih0aGlzLnBhcmVudC5yZWFjdG9yKSB7XG4gICAgICAgICAgdGhpcy5wYXJlbnQucmVhY3Rvci5kaXNwYXRjaEV2ZW50KFwib25TY3JvbGxcIiwgMCwgbmV3RGVsdGFZKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0pO1xuICB9XG4gIFxuICBkcmF3KGNvbnRleHQpIHtcbiAgICBpZih0aGlzLnNjcm9sbEFyZWFTaXplWSA+IDApIHtcbiAgICAgIHN1cGVyLmRyYXcoY29udGV4dCk7XG4gICAgfVxuICB9XG5cbiAgZ2V0IHdpZHRoKCkge1xuICAgIHJldHVybiB0aGlzLnNpemU7XG4gIH1cblxuICBnZXQgeCgpIHtcbiAgICByZXR1cm4gdGhpcy5wYXJlbnQgPyB0aGlzLnBhcmVudC54ICsgdGhpcy5wYXJlbnQud2lkdGggLSB0aGlzLnNpemUgOiAwO1xuICB9XG59IiwiLypcbiAqIENvcHlyaWdodCAoQykgMjAyMCBFbGlhc3RpayAoZWxpYXN0aWtzb2Z0cy5jb20pXG4gKlxuICogVGhpcyBmaWxlIGlzIHBhcnQgb2YgXCJKU0dhbWVUb29sc1wiLlxuICpcbiAqIFwiSlNHYW1lVG9vbHNcIiBpcyBmcmVlIHNvZnR3YXJlOiB5b3UgY2FuIHJlZGlzdHJpYnV0ZSBpdCBhbmQvb3IgbW9kaWZ5XG4gKiBpdCB1bmRlciB0aGUgdGVybXMgb2YgdGhlIEdOVSBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlIGFzIHB1Ymxpc2hlZCBieVxuICogdGhlIEZyZWUgU29mdHdhcmUgRm91bmRhdGlvbiwgZWl0aGVyIHZlcnNpb24gMyBvZiB0aGUgTGljZW5zZSwgb3JcbiAqIChhdCB5b3VyIG9wdGlvbikgYW55IGxhdGVyIHZlcnNpb24uXG4gKlxuICogXCJKU0dhbWVUb29sc1wiIGlzIGRpc3RyaWJ1dGVkIGluIHRoZSBob3BlIHRoYXQgaXQgd2lsbCBiZSB1c2VmdWwsXG4gKiBidXQgV0lUSE9VVCBBTlkgV0FSUkFOVFk7IHdpdGhvdXQgZXZlbiB0aGUgaW1wbGllZCB3YXJyYW50eSBvZlxuICogTUVSQ0hBTlRBQklMSVRZIG9yIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFLiAgU2VlIHRoZVxuICogR05VIEdlbmVyYWwgUHVibGljIExpY2Vuc2UgZm9yIG1vcmUgZGV0YWlscy5cbiAqXG4gKiBZb3Ugc2hvdWxkIGhhdmUgcmVjZWl2ZWQgYSBjb3B5IG9mIHRoZSBHTlUgR2VuZXJhbCBQdWJsaWMgTGljZW5zZVxuICogYWxvbmcgd2l0aCBcIkpTR2FtZVRvb2xzXCIuICBJZiBub3QsIHNlZSA8aHR0cDovL3d3dy5nbnUub3JnL2xpY2Vuc2VzLz4uXG4gKi9cbmltcG9ydCBMYWJlbCBmcm9tIFwiLi9MYWJlbFwiO1xuaW1wb3J0IEJ1dHRvbiBmcm9tIFwiLi9CdXR0b25cIjtcbmltcG9ydCBUcmlhbmdsZSBmcm9tIFwiLi9UcmlhbmdsZVwiO1xuaW1wb3J0IFN0eWxlIGZyb20gXCIuL1N0eWxlXCI7XG5pbXBvcnQgQ29uc3RhbnRzIGZyb20gXCIuL0NvbnN0YW50c1wiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTZWxlY3QgZXh0ZW5kcyBCdXR0b24ge1xuICAjX3dpZHRoID0gMDtcblxuICBjb25zdHJ1Y3Rvcih4LCB5LCBtYXhXaWR0aCwgbWF4SGVpZ2h0LCBzdHlsZSwgb3B0aW9uQ29udGFpbmVyLCBkZWZhdWx0T3B0aW9uKSB7XG4gICAgc3VwZXIoeCwgeSwgbWF4V2lkdGgsIG1heEhlaWdodCwgc3R5bGUpO1xuXG4gICAgdGhpcy5vcHRpb25Db250YWluZXIgPSBvcHRpb25Db250YWluZXI7XG4gICAgaWYoZGVmYXVsdE9wdGlvbikgdGhpcy5zZWxlY3RlZE9wdGlvbiA9IGRlZmF1bHRPcHRpb247XG5cbiAgICB0aGlzLmxhYmVsID0gbmV3IExhYmVsKFwiXCIsIHgsIHksIHN0eWxlKTtcbiAgICB0aGlzLmxhYmVsLnN0eWxlLnNldEFsbCh7IFwiYWxpZ25lbWVudFwiOiBDb25zdGFudHMuQWxpZ25lbWVudC5MRUZULCBcInZlcnRpY2FsQWxpZ25lbWVudFwiOiBDb25zdGFudHMuVmVydGljYWxBbGlnbmVtZW50LkNFTlRFUiB9KTtcbiAgICB0aGlzLnRyaWFuZ2xlID0gbmV3IFRyaWFuZ2xlKG51bGwsIG51bGwsIDgsIDgsIHN0eWxlKTtcbiAgICB0aGlzLnRyaWFuZ2xlLnN0eWxlLnNldEFsbCh7IFwiYWxpZ25lbWVudFwiOiBDb25zdGFudHMuQWxpZ25lbWVudC5SSUdIVCwgXCJ2ZXJ0aWNhbEFsaWduZW1lbnRcIjogQ29uc3RhbnRzLlZlcnRpY2FsQWxpZ25lbWVudC5DRU5URVIgfSk7XG5cbiAgICB0aGlzLmFkZEFsbCh0aGlzLmxhYmVsLCB0aGlzLnRyaWFuZ2xlKTtcblxuICAgIHRoaXMuYWRkQ2xpY2tBY3Rpb24oKCkgPT4ge1xuICAgICAgaWYodGhpcy5vcHRpb25Db250YWluZXIpIHtcbiAgICAgICAgdGhpcy5vcHRpb25Db250YWluZXIuaGlkZGVuID0gZmFsc2U7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICBpZighQ29uc3RhbnRzLlNldHRpbmcuRElTQUJMRV9FWFBFUklNRU5UQUxfT1BUSU1JWkFUSU9OUykge1xuICAgICAgdGhpcy51cGRhdGVXaWR0aCgpO1xuICAgICAgdGhpcy5hZGRDaGFuZ2VBY3Rpb24oKCkgPT4gdGhpcy51cGRhdGVXaWR0aCgpKTtcbiAgICB9XG4gIH1cblxuICBkcmF3KGNvbnRleHQpIHtcbiAgICBpZih0aGlzLmhpZGRlbikgcmV0dXJuO1xuICAgIGlmKHRoaXMuc2VsZWN0ZWRPcHRpb24gJiYgdGhpcy5zZWxlY3RlZE9wdGlvbi5sYWJlbCkge1xuICAgICAgdGhpcy5sYWJlbC50ZXh0ID0gdGhpcy5zZWxlY3RlZE9wdGlvbi5sYWJlbC50ZXh0O1xuICAgIH1cblxuICAgIHN1cGVyLmRyYXcoY29udGV4dCk7XG5cbiAgICBpZih0aGlzLm9wdGlvbkNvbnRhaW5lcikge1xuICAgICAgdGhpcy5vcHRpb25Db250YWluZXIuc2VsZWN0ID0gdGhpcztcbiAgICB9XG4gIH1cblxuICBnZXQgc2VsZWN0ZWRPcHRpb24oKSB7XG4gICAgcmV0dXJuIHRoaXMub3B0aW9uQ29udGFpbmVyID8gdGhpcy5vcHRpb25Db250YWluZXIuY29tcG9uZW50c1t0aGlzLm9wdGlvbkNvbnRhaW5lci5zZWxlY3RlZE9wdGlvbl0gOiBudWxsO1xuICB9XG5cbiAgc2V0IHNlbGVjdGVkT3B0aW9uKGlkKSB7XG4gICAgaWYoaWQgIT0gdGhpcy5vcHRpb25Db250YWluZXIuc2VsZWN0ZWRPcHRpb24pIHtcbiAgICAgIHRoaXMub3B0aW9uQ29udGFpbmVyLnNlbGVjdGVkT3B0aW9uID0gaWQ7XG4gICAgICB0aGlzLnJlYWN0b3IuZGlzcGF0Y2hFdmVudChcIm9uQ2hhbmdlXCIsIHRoaXMpO1xuICAgIH1cbiAgfVxuXG4gIGdldCB0ZXh0KCkge1xuICAgIHJldHVybiB0aGlzLnNlbGVjdGVkT3B0aW9uICYmIHRoaXMuc2VsZWN0ZWRPcHRpb24ubGFiZWwgPyB0aGlzLnNlbGVjdGVkT3B0aW9uLmxhYmVsLnRleHQgOiBudWxsO1xuICB9XG5cbiAgdXBkYXRlV2lkdGgoKSB7XG4gICAgbGV0IG1heFdpZHRoID0gdGhpcy5sYWJlbC53aWR0aDtcblxuICAgIGlmKHRoaXMub3B0aW9uQ29udGFpbmVyKSB7XG4gICAgICB0aGlzLm9wdGlvbkNvbnRhaW5lci5jb21wb25lbnRzLmZvckVhY2goY29tcG9uZW50ID0+IHtcbiAgICAgICAgY29uc3QgbGFiZWwgPSBjb21wb25lbnQubGFiZWw7XG5cbiAgICAgICAgaWYobGFiZWwpIHtcbiAgICAgICAgICBpZihsYWJlbC51cGRhdGVTaXplcykgbGFiZWwudXBkYXRlU2l6ZXMoKTtcbiAgICAgICAgICBpZihsYWJlbC53aWR0aCA+IG1heFdpZHRoKSBtYXhXaWR0aCA9IGxhYmVsLndpZHRoO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9XG5cbiAgICB0aGlzLiNfd2lkdGggPSBtYXhXaWR0aCArIHRoaXMuc3R5bGUucGFkZGluZyArIHRoaXMudHJpYW5nbGUud2lkdGggKyAxNTtcbiAgfVxuXG4gIGdldCB3aWR0aCgpIHtcbiAgICBpZihDb25zdGFudHMuU2V0dGluZy5ESVNBQkxFX0VYUEVSSU1FTlRBTF9PUFRJTUlaQVRJT05TKSB0aGlzLnVwZGF0ZVdpZHRoKCk7XG4gICAgcmV0dXJuIHRoaXMuI193aWR0aDtcbiAgfVxuXG4gIGdldCBhbGxDb21wb25lbnRzKCkge1xuICAgIGNvbnN0IGNvbXBvbmVudHMgPSBbXTtcbiAgICBjb21wb25lbnRzLnB1c2goLi4uc3VwZXIuYWxsQ29tcG9uZW50cyk7XG4gICAgcmV0dXJuIGNvbXBvbmVudHM7XG4gIH1cblxuICBnZXQgZGVmYXVsdFN0eWxlKCkge1xuICAgIHJldHVybiBuZXcgU3R5bGUoe1xuICAgICAgXCJiYWNrZ3JvdW5kQ29sb3JcIjogQ29uc3RhbnRzLlNldHRpbmcuU0VMRUNUX0RFRkFVTFRfQkFDS0dST1VORCxcbiAgICAgIFwiYmFja2dyb3VuZENvbG9ySG92ZXJcIjogQ29uc3RhbnRzLlNldHRpbmcuU0VMRUNUX0RFRkFVTFRfSE9WRVJfQkFDS0dST1VORCxcbiAgICAgIFwiYmFja2dyb3VuZENvbG9yRG93blwiOiBDb25zdGFudHMuU2V0dGluZy5TRUxFQ1RfREVGQVVMVF9DTElDS19CQUNLR1JPVU5ELFxuICAgICAgXCJwYWRkaW5nXCI6IENvbnN0YW50cy5TZXR0aW5nLkRFRkFVTFRfUEFERElOR1xuICAgIH0pO1xuICB9XG5cbiAgZ2V0IHNlbGVjdGVkKCkge1xuICAgIHJldHVybiBzdXBlci5zZWxlY3RlZCB8fCB0aGlzLm9wdGlvbkNvbnRhaW5lci5zZWxlY3RlZDtcbiAgfVxuXG4gIHNldCBzZWxlY3RlZChzZWxlY3RlZCkge1xuICAgIHN1cGVyLnNlbGVjdGVkID0gc2VsZWN0ZWQ7XG4gIH1cbn0iLCIvKlxuICogQ29weXJpZ2h0IChDKSAyMDIwIEVsaWFzdGlrIChlbGlhc3Rpa3NvZnRzLmNvbSlcbiAqXG4gKiBUaGlzIGZpbGUgaXMgcGFydCBvZiBcIkpTR2FtZVRvb2xzXCIuXG4gKlxuICogXCJKU0dhbWVUb29sc1wiIGlzIGZyZWUgc29mdHdhcmU6IHlvdSBjYW4gcmVkaXN0cmlidXRlIGl0IGFuZC9vciBtb2RpZnlcbiAqIGl0IHVuZGVyIHRoZSB0ZXJtcyBvZiB0aGUgR05VIEdlbmVyYWwgUHVibGljIExpY2Vuc2UgYXMgcHVibGlzaGVkIGJ5XG4gKiB0aGUgRnJlZSBTb2Z0d2FyZSBGb3VuZGF0aW9uLCBlaXRoZXIgdmVyc2lvbiAzIG9mIHRoZSBMaWNlbnNlLCBvclxuICogKGF0IHlvdXIgb3B0aW9uKSBhbnkgbGF0ZXIgdmVyc2lvbi5cbiAqXG4gKiBcIkpTR2FtZVRvb2xzXCIgaXMgZGlzdHJpYnV0ZWQgaW4gdGhlIGhvcGUgdGhhdCBpdCB3aWxsIGJlIHVzZWZ1bCxcbiAqIGJ1dCBXSVRIT1VUIEFOWSBXQVJSQU5UWTsgd2l0aG91dCBldmVuIHRoZSBpbXBsaWVkIHdhcnJhbnR5IG9mXG4gKiBNRVJDSEFOVEFCSUxJVFkgb3IgRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UuICBTZWUgdGhlXG4gKiBHTlUgR2VuZXJhbCBQdWJsaWMgTGljZW5zZSBmb3IgbW9yZSBkZXRhaWxzLlxuICpcbiAqIFlvdSBzaG91bGQgaGF2ZSByZWNlaXZlZCBhIGNvcHkgb2YgdGhlIEdOVSBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlXG4gKiBhbG9uZyB3aXRoIFwiSlNHYW1lVG9vbHNcIi4gIElmIG5vdCwgc2VlIDxodHRwOi8vd3d3LmdudS5vcmcvbGljZW5zZXMvPi5cbiAqL1xuaW1wb3J0IEJ1dHRvbiBmcm9tIFwiLi9CdXR0b25cIjtcbmltcG9ydCBDb25zdGFudHMgZnJvbSBcIi4vQ29uc3RhbnRzXCI7XG5pbXBvcnQgTGFiZWwgZnJvbSBcIi4vTGFiZWxcIjtcbmltcG9ydCBTdHlsZSBmcm9tIFwiLi9TdHlsZVwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTZWxlY3RPcHRpb24gZXh0ZW5kcyBCdXR0b24ge1xuICBjb25zdHJ1Y3RvcihsYWJlbCwgc3R5bGUpIHtcbiAgICBjb25zdCBkZWZhdWx0TGFiZWwgPSBuZXcgTGFiZWwoXCJPcHRpb25cIik7XG4gICAgc3VwZXIobnVsbCwgbnVsbCwgbnVsbCwgbnVsbCwgc3R5bGUsIGxhYmVsIHx8IGRlZmF1bHRMYWJlbCk7XG4gICAgdGhpcy5sYWJlbCA9IGxhYmVsIHx8IGRlZmF1bHRMYWJlbDtcbiAgfVxuXG4gIGFkZChjb21wb25lbnQpIHtcbiAgICBpZihjb21wb25lbnQgaW5zdGFuY2VvZiBMYWJlbCkge1xuICAgICAgdGhpcy5jbGVhcigpO1xuICAgICAgc3VwZXIuYWRkKGNvbXBvbmVudCk7XG4gICAgfVxuICB9XG5cbiAgZ2V0IHdpZHRoKCkge1xuICAgIHJldHVybiB0aGlzLnBhcmVudCAmJiB0aGlzLnBhcmVudC53aWR0aDtcbiAgfVxuXG4gIGdldCBkZWZhdWx0U3R5bGUoKSB7XG4gICAgcmV0dXJuIG5ldyBTdHlsZSh7XG4gICAgICBcImJhY2tncm91bmRDb2xvclwiOiBDb25zdGFudHMuU2V0dGluZy5TRUxFQ1RfREVGQVVMVF9CQUNLR1JPVU5ELFxuICAgICAgXCJiYWNrZ3JvdW5kQ29sb3JIb3ZlclwiOiBDb25zdGFudHMuU2V0dGluZy5TRUxFQ1RfREVGQVVMVF9IT1ZFUl9CQUNLR1JPVU5ELFxuICAgICAgXCJiYWNrZ3JvdW5kQ29sb3JEb3duXCI6IENvbnN0YW50cy5TZXR0aW5nLlNFTEVDVF9ERUZBVUxUX0NMSUNLX0JBQ0tHUk9VTkQsXG4gICAgICBcInBhZGRpbmdcIjogQ29uc3RhbnRzLlNldHRpbmcuREVGQVVMVF9QQURESU5HXG4gICAgfSk7XG4gIH1cbn0iLCIvKlxuICogQ29weXJpZ2h0IChDKSAyMDIwIEVsaWFzdGlrIChlbGlhc3Rpa3NvZnRzLmNvbSlcbiAqXG4gKiBUaGlzIGZpbGUgaXMgcGFydCBvZiBcIkpTR2FtZVRvb2xzXCIuXG4gKlxuICogXCJKU0dhbWVUb29sc1wiIGlzIGZyZWUgc29mdHdhcmU6IHlvdSBjYW4gcmVkaXN0cmlidXRlIGl0IGFuZC9vciBtb2RpZnlcbiAqIGl0IHVuZGVyIHRoZSB0ZXJtcyBvZiB0aGUgR05VIEdlbmVyYWwgUHVibGljIExpY2Vuc2UgYXMgcHVibGlzaGVkIGJ5XG4gKiB0aGUgRnJlZSBTb2Z0d2FyZSBGb3VuZGF0aW9uLCBlaXRoZXIgdmVyc2lvbiAzIG9mIHRoZSBMaWNlbnNlLCBvclxuICogKGF0IHlvdXIgb3B0aW9uKSBhbnkgbGF0ZXIgdmVyc2lvbi5cbiAqXG4gKiBcIkpTR2FtZVRvb2xzXCIgaXMgZGlzdHJpYnV0ZWQgaW4gdGhlIGhvcGUgdGhhdCBpdCB3aWxsIGJlIHVzZWZ1bCxcbiAqIGJ1dCBXSVRIT1VUIEFOWSBXQVJSQU5UWTsgd2l0aG91dCBldmVuIHRoZSBpbXBsaWVkIHdhcnJhbnR5IG9mXG4gKiBNRVJDSEFOVEFCSUxJVFkgb3IgRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UuICBTZWUgdGhlXG4gKiBHTlUgR2VuZXJhbCBQdWJsaWMgTGljZW5zZSBmb3IgbW9yZSBkZXRhaWxzLlxuICpcbiAqIFlvdSBzaG91bGQgaGF2ZSByZWNlaXZlZCBhIGNvcHkgb2YgdGhlIEdOVSBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlXG4gKiBhbG9uZyB3aXRoIFwiSlNHYW1lVG9vbHNcIi4gIElmIG5vdCwgc2VlIDxodHRwOi8vd3d3LmdudS5vcmcvbGljZW5zZXMvPi5cbiAqL1xuaW1wb3J0IENvbCBmcm9tIFwiLi9Db2xcIjtcbmltcG9ydCBTdHlsZSBmcm9tIFwiLi9TdHlsZVwiO1xuaW1wb3J0IENvbnN0YW50cyBmcm9tIFwiLi9Db25zdGFudHNcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU2VsZWN0RHJvcGRvd24gZXh0ZW5kcyBDb2wge1xuICAjX3NlbGVjdGVkT3B0aW9uO1xuICBzZWxlY3RhYmxlID0gZmFsc2U7XG5cbiAgY29uc3RydWN0b3IobWF4SGVpZ2h0RHJvcGRvd24sIHN0eWxlLCAuLi5vcHRpb25zKSB7XG4gICAgc3VwZXIobnVsbCwgbnVsbCwgbnVsbCwgbWF4SGVpZ2h0RHJvcGRvd24sIHN0eWxlLCAuLi5vcHRpb25zKTtcbiAgICB0aGlzLiNfc2VsZWN0ZWRPcHRpb24gPSAwO1xuICAgIHRoaXMuc2VsZWN0ID0gbnVsbDtcbiAgfVxuXG4gIGRyYXcoY29udGV4dCkge1xuICAgIHN1cGVyLmRyYXcoY29udGV4dCk7XG4gIH1cblxuICBnZXQgeCgpIHtcbiAgICByZXR1cm4gdGhpcy5zZWxlY3QgJiYgdGhpcy5zZWxlY3QueDtcbiAgfVxuXG4gIGdldCB5KCkge1xuICAgIGNvbnN0IHNlbGVjdEhlaWdodCA9ICh0aGlzLnNlbGVjdCAmJiB0aGlzLnNlbGVjdC5oZWlnaHQpO1xuICAgIGNvbnN0IGhlaWdodCA9IHRoaXMuaGVpZ2h0O1xuICAgIGNvbnN0IHkgPSB0aGlzLnNlbGVjdCAmJiB0aGlzLnNlbGVjdC55O1xuXG4gICAgaWYodGhpcy5jYW52YXMgJiYgdGhpcy5jYW52YXMuc2NlbmUgJiYgeSArIHNlbGVjdEhlaWdodCArIGhlaWdodCA+PSB0aGlzLmNhbnZhcy5zY2VuZS5oZWlnaHQpIHtcbiAgICAgIHJldHVybiB5IC0gaGVpZ2h0O1xuICAgIH1cblxuICAgIHJldHVybiB5ICsgc2VsZWN0SGVpZ2h0O1xuICB9XG5cbiAgZ2V0IHdpZHRoKCkge1xuICAgIHJldHVybiB0aGlzLnNlbGVjdCAmJiB0aGlzLnNlbGVjdC53aWR0aDtcbiAgfVxuXG4gIGdldCBzZWxlY3RlZE9wdGlvbigpIHtcbiAgICByZXR1cm4gTWF0aC5tYXgoMCwgTWF0aC5taW4odGhpcy5jb21wb25lbnRzLmxlbmd0aCAtIDEsIHRoaXMuI19zZWxlY3RlZE9wdGlvbikpO1xuICB9XG5cbiAgc2V0IHNlbGVjdGVkT3B0aW9uKGlkKSB7XG4gICAgaWYoaWQgIT0gdGhpcy4jX3NlbGVjdGVkT3B0aW9uKSB7XG4gICAgICB0aGlzLiNfc2VsZWN0ZWRPcHRpb24gPSBpZDtcbiAgICAgIHRoaXMucmVhY3Rvci5kaXNwYXRjaEV2ZW50KFwib25DaGFuZ2VcIiwgdGhpcyk7XG4gICAgfVxuICB9XG5cbiAgYWRkKGNvbXBvbmVudCkge1xuICAgIHN1cGVyLmFkZChjb21wb25lbnQpO1xuXG4gICAgY29tcG9uZW50LmFkZENsaWNrQWN0aW9uKCgpID0+IHtcbiAgICAgIHRoaXMuI19zZWxlY3RlZE9wdGlvbiA9IHRoaXMuZ2V0Q29tcG9uZW50SWQoY29tcG9uZW50KTtcbiAgICAgIHRoaXMuc2VsZWN0ZWQgPSBmYWxzZTtcbiAgICAgIHRoaXMuaGlkZGVuID0gdHJ1ZTtcbiAgICAgIGlmKHRoaXMuc2VsZWN0KSB0aGlzLnNlbGVjdC5zZWxlY3RlZCA9IGZhbHNlO1xuICAgIH0pO1xuICB9XG5cbiAgZ2V0IGRlZmF1bHRTdHlsZSgpIHtcbiAgICByZXR1cm4gbmV3IFN0eWxlKHtcbiAgICAgIFwicGFkZGluZ1wiOiAwLFxuICAgICAgXCJzcGFjZUJldHdlZW5Db21wb25lbnRzXCI6IDAsXG4gICAgICBcImJhY2tncm91bmRDb2xvclwiOiBDb25zdGFudHMuU2V0dGluZy5TRUxFQ1RfREVGQVVMVF9CQUNLR1JPVU5ELFxuICAgICAgXCJiYWNrZ3JvdW5kQ29sb3JIb3ZlclwiOiBudWxsLFxuICAgICAgXCJiYWNrZ3JvdW5kQ29sb3JEb3duXCI6IG51bGwsXG4gICAgICBcInNjcm9sbFhEaXNhYmxlZFwiOiBmYWxzZSxcbiAgICAgIFwic2Nyb2xsWURpc2FibGVkXCI6IGZhbHNlXG4gICAgfSk7XG4gIH1cblxuICBnZXQgaGlkZGVuKCkge1xuICAgIHJldHVybiBzdXBlci5oaWRkZW4gfHwgKHRoaXMuc2VsZWN0ICYmICF0aGlzLnNlbGVjdC5zZWxlY3RlZCkgfHwgIXRoaXMuc2VsZWN0O1xuICB9XG5cbiAgc2V0IGhpZGRlbihoaWRkZW4pIHtcbiAgICByZXR1cm4gc3VwZXIuaGlkZGVuID0gaGlkZGVuO1xuICB9XG59IiwiLypcbiAqIENvcHlyaWdodCAoQykgMjAyMCBFbGlhc3RpayAoZWxpYXN0aWtzb2Z0cy5jb20pXG4gKlxuICogVGhpcyBmaWxlIGlzIHBhcnQgb2YgXCJKU0dhbWVUb29sc1wiLlxuICpcbiAqIFwiSlNHYW1lVG9vbHNcIiBpcyBmcmVlIHNvZnR3YXJlOiB5b3UgY2FuIHJlZGlzdHJpYnV0ZSBpdCBhbmQvb3IgbW9kaWZ5XG4gKiBpdCB1bmRlciB0aGUgdGVybXMgb2YgdGhlIEdOVSBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlIGFzIHB1Ymxpc2hlZCBieVxuICogdGhlIEZyZWUgU29mdHdhcmUgRm91bmRhdGlvbiwgZWl0aGVyIHZlcnNpb24gMyBvZiB0aGUgTGljZW5zZSwgb3JcbiAqIChhdCB5b3VyIG9wdGlvbikgYW55IGxhdGVyIHZlcnNpb24uXG4gKlxuICogXCJKU0dhbWVUb29sc1wiIGlzIGRpc3RyaWJ1dGVkIGluIHRoZSBob3BlIHRoYXQgaXQgd2lsbCBiZSB1c2VmdWwsXG4gKiBidXQgV0lUSE9VVCBBTlkgV0FSUkFOVFk7IHdpdGhvdXQgZXZlbiB0aGUgaW1wbGllZCB3YXJyYW50eSBvZlxuICogTUVSQ0hBTlRBQklMSVRZIG9yIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFLiAgU2VlIHRoZVxuICogR05VIEdlbmVyYWwgUHVibGljIExpY2Vuc2UgZm9yIG1vcmUgZGV0YWlscy5cbiAqXG4gKiBZb3Ugc2hvdWxkIGhhdmUgcmVjZWl2ZWQgYSBjb3B5IG9mIHRoZSBHTlUgR2VuZXJhbCBQdWJsaWMgTGljZW5zZVxuICogYWxvbmcgd2l0aCBcIkpTR2FtZVRvb2xzXCIuICBJZiBub3QsIHNlZSA8aHR0cDovL3d3dy5nbnUub3JnL2xpY2Vuc2VzLz4uXG4gKi9cbmltcG9ydCBDb25zdGFudHMgZnJvbSBcIi4vQ29uc3RhbnRzXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFN0eWxlIHtcbiAgI3N0eWxlcyA9IHt9O1xuICBjb21wb25lbnQ7XG5cbiAgY29uc3RydWN0b3Ioc3R5bGVzKSB7XG4gICAgdGhpcy5zZXRBbGwoc3R5bGVzKTtcbiAgfVxuXG4gIGdldCBmb250Q29sb3IoKSB7XG4gICAgcmV0dXJuIHRoaXMuI3N0eWxlcy5mb250Q29sb3I7XG4gIH1cblxuICBnZXQgZm9udENvbG9ySG92ZXIoKSB7XG4gICAgcmV0dXJuIHRoaXMuI3N0eWxlcy5mb250Q29sb3JIb3ZlcjtcbiAgfVxuXG4gIGdldCBmb250Q29sb3JEb3duKCkge1xuICAgIHJldHVybiB0aGlzLiNzdHlsZXMuZm9udENvbG9yRG93bjtcbiAgfVxuXG4gIGdldCBmb250RmFtaWx5KCkge1xuICAgIHJldHVybiB0aGlzLiNzdHlsZXMuZm9udEZhbWlseSAhPSBudWxsID8gdGhpcy4jc3R5bGVzLmZvbnRGYW1pbHkgOiBDb25zdGFudHMuU2V0dGluZy5GT05UX0ZBTUlMWTtcbiAgfVxuXG4gIGdldCBmb250U2l6ZSgpIHtcbiAgICByZXR1cm4gdGhpcy4jc3R5bGVzLmZvbnRTaXplICE9IG51bGwgPyB0aGlzLiNzdHlsZXMuZm9udFNpemUgOiBDb25zdGFudHMuU2V0dGluZy5GT05UX1NJWkU7XG4gIH1cblxuICBnZXQgYm9sZCgpIHtcbiAgICByZXR1cm4gdGhpcy4jc3R5bGVzLmJvbGQ7XG4gIH1cblxuICBnZXQgdW5kZXJsaW5lKCkge1xuICAgIHJldHVybiB0aGlzLiNzdHlsZXMudW5kZXJsaW5lO1xuICB9XG5cbiAgZ2V0IHdyYXAoKSB7XG4gICAgcmV0dXJuIHRoaXMuI3N0eWxlcy53cmFwO1xuICB9XG5cbiAgZ2V0IGJhY2tncm91bmRDb2xvcigpIHtcbiAgICByZXR1cm4gdGhpcy4jc3R5bGVzLmJhY2tncm91bmRDb2xvcjtcbiAgfVxuXG4gIGdldCBmb3JlZ3JvdW5kQ29sb3IoKSB7XG4gICAgcmV0dXJuIHRoaXMuI3N0eWxlcy5mb3JlZ3JvdW5kQ29sb3I7XG4gIH1cblxuICBnZXQgYmFja2dyb3VuZENvbG9ySG92ZXIoKSB7XG4gICAgcmV0dXJuIHRoaXMuI3N0eWxlcy5iYWNrZ3JvdW5kQ29sb3JIb3ZlcjtcbiAgfVxuXG4gIGdldCBiYWNrZ3JvdW5kQ29sb3JEb3duKCkge1xuICAgIHJldHVybiB0aGlzLiNzdHlsZXMuYmFja2dyb3VuZENvbG9yRG93bjtcbiAgfVxuXG4gIGdldCBib3JkZXJDb2xvcigpIHtcbiAgICByZXR1cm4gdGhpcy4jc3R5bGVzLmJvcmRlckNvbG9yO1xuICB9XG5cbiAgZ2V0IGJvcmRlckNvbG9ySG92ZXIoKSB7XG4gICAgcmV0dXJuIHRoaXMuI3N0eWxlcy5ib3JkZXJDb2xvckhvdmVyO1xuICB9XG5cbiAgZ2V0IGJvcmRlckNvbG9yRG93bigpIHtcbiAgICByZXR1cm4gdGhpcy4jc3R5bGVzLmJvcmRlckNvbG9yRG93bjtcbiAgfVxuXG4gIGdldCBib3JkZXJDb2xvclNlbGVjdGVkKCkge1xuICAgIHJldHVybiB0aGlzLiNzdHlsZXMuYm9yZGVyQ29sb3JTZWxlY3RlZCAhPSBudWxsID8gdGhpcy4jc3R5bGVzLmJvcmRlckNvbG9yU2VsZWN0ZWQgOiBDb25zdGFudHMuU2V0dGluZy5ERUZBVUxUX0JPUkRFUl9DT0xPUl9TRUxFQ1RFRDtcbiAgfVxuXG4gIGdldCBib3JkZXJTaXplKCkge1xuICAgIHJldHVybiB0aGlzLiNzdHlsZXMuYm9yZGVyU2l6ZSAhPSBudWxsID8gdGhpcy4jc3R5bGVzLmJvcmRlclNpemUgOiBDb25zdGFudHMuU2V0dGluZy5ERUZBVUxUX0JPUkRFUl9TSVpFO1xuICB9XG5cbiAgZ2V0IHNlbGVjdENvbG9yKCkge1xuICAgIHJldHVybiB0aGlzLiNzdHlsZXMuc2VsZWN0Q29sb3I7XG4gIH1cblxuICBnZXQgYWxpZ25lbWVudCgpIHtcbiAgICByZXR1cm4gdGhpcy4jc3R5bGVzLmFsaWduZW1lbnQ7XG4gIH1cblxuICBnZXQgdmVydGljYWxBbGlnbmVtZW50KCkge1xuICAgIHJldHVybiB0aGlzLiNzdHlsZXMudmVydGljYWxBbGlnbmVtZW50O1xuICB9XG5cbiAgZ2V0IGRpc2FibGVBbmltYXRpb24oKSB7XG4gICAgcmV0dXJuIHRoaXMuI3N0eWxlcy5kaXNhYmxlQW5pbWF0aW9uO1xuICB9XG5cbiAgZ2V0IHNjcm9sbFhEaXNhYmxlZCgpIHtcbiAgICByZXR1cm4gdGhpcy4jc3R5bGVzLnNjcm9sbFhEaXNhYmxlZDtcbiAgfVxuXG4gIGdldCBzY3JvbGxZRGlzYWJsZWQoKSB7XG4gICAgcmV0dXJuIHRoaXMuI3N0eWxlcy5zY3JvbGxZRGlzYWJsZWQ7XG4gIH1cblxuICBnZXQgcGFkZGluZygpIHtcbiAgICByZXR1cm4gdGhpcy4jc3R5bGVzLnBhZGRpbmcgIT0gbnVsbCA/IHRoaXMuI3N0eWxlcy5wYWRkaW5nIDogQ29uc3RhbnRzLlNldHRpbmcuREVGQVVMVF9QQURESU5HO1xuICB9XG5cbiAgZ2V0IHNwYWNlQmV0d2VlbkNvbXBvbmVudHMoKSB7XG4gICAgcmV0dXJuIHRoaXMuI3N0eWxlcy5zcGFjZUJldHdlZW5Db21wb25lbnRzICE9IG51bGwgPyB0aGlzLiNzdHlsZXMuc3BhY2VCZXR3ZWVuQ29tcG9uZW50cyA6IENvbnN0YW50cy5TZXR0aW5nLkRFRkFVTFRfU1BBQ0lORztcbiAgfVxuXG4gIGdldCBoaWRkZW4oKSB7XG4gICAgcmV0dXJuIHRoaXMuI3N0eWxlcy5oaWRkZW47XG4gIH1cblxuICBnZXQgYmx1ckJhY2tncm91bmQoKSB7XG4gICAgcmV0dXJuIHRoaXMuI3N0eWxlcy5ibHVyQmFja2dyb3VuZDtcbiAgfVxuXG4gIGdldCBsaW5lV2lkdGgoKSB7XG4gICAgcmV0dXJuIHRoaXMuI3N0eWxlcy5saW5lV2lkdGg7XG4gIH1cblxuICBnZXQgYW5pbWF0aW9uRHVyYXRpb24oKSB7XG4gICAgcmV0dXJuIHRoaXMuI3N0eWxlcy5hbmltYXRpb25EdXJhdGlvbiAhPSBudWxsID8gdGhpcy4jc3R5bGVzLmFuaW1hdGlvbkR1cmF0aW9uIDogQ29uc3RhbnRzLlNldHRpbmcuREVGQVVMVF9BTklNQVRJT05fRFVSQVRJT047XG4gIH1cblxuICBnZXQgZm9yZWdyb3VuZCgpIHtcbiAgICByZXR1cm4gdGhpcy4jc3R5bGVzLmZvcmVncm91bmQ7XG4gIH1cblxuICBnZXQgekluZGV4KCkge1xuICAgIHJldHVybiB0aGlzLiNzdHlsZXMuekluZGV4ICE9IG51bGwgPyB0aGlzLiNzdHlsZXMuekluZGV4IDogMDtcbiAgfVxuICBcbiAgZ2V0IGxpbmVDYXAoKSB7XG4gICAgcmV0dXJuIHRoaXMuI3N0eWxlcy5saW5lQ2FwO1xuICB9XG4gIFxuICBnZXQgZmlsbCgpIHtcbiAgICByZXR1cm4gdGhpcy4jc3R5bGVzLmZpbGw7XG4gIH1cblxuICBnZXQgZmlsbENvbG9yKCkge1xuICAgIHJldHVybiB0aGlzLiNzdHlsZXMuZmlsbENvbG9yO1xuICB9XG5cbiAgZ2V0IGNvbG9yKCkge1xuICAgIHJldHVybiB0aGlzLiNzdHlsZXMuY29sb3I7XG4gIH1cblxuICBnZXQgbW92YWJsZSgpIHtcbiAgICByZXR1cm4gdGhpcy4jc3R5bGVzLm1vdmFibGUgfHwgZmFsc2U7XG4gIH1cblxuICBzZXQoc3R5bGUsIHZhbHVlKSB7XG4gICAgaWYodGhpcy4jc3R5bGVzW3N0eWxlXSAhPSB2YWx1ZSkge1xuICAgICAgdGhpcy4jc3R5bGVzW3N0eWxlXSA9IHZhbHVlO1xuICAgICAgaWYodGhpcy5jb21wb25lbnQgJiYgdGhpcy5jb21wb25lbnQucmVhY3RvcikgdGhpcy5jb21wb25lbnQucmVhY3Rvci5kaXNwYXRjaEV2ZW50KFwib25DaGFuZ2VcIiwgdGhpcyk7XG4gICAgfVxuICB9XG5cbiAgc2V0QWxsKHN0eWxlcykge1xuICAgIGlmKHN0eWxlcykge1xuICAgICAgZm9yKGNvbnN0IHN0eWxlIGluIHN0eWxlcykge1xuICAgICAgICBpZihzdHlsZXMuaGFzT3duUHJvcGVydHkoc3R5bGUpKSB7XG4gICAgICAgICAgdGhpcy5zZXQoc3R5bGUsIHN0eWxlc1tzdHlsZV0pO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgY29weSgpIHtcbiAgICByZXR1cm4gbmV3IFN0eWxlKHRoaXMuI3N0eWxlcyk7XG4gIH1cblxuICBnZXRTdHlsZXMoKSB7XG4gICAgY29uc3Qgc3R5bGVzID0ge307XG5cbiAgICBmb3IoY29uc3Qgc3R5bGUgaW4gdGhpcy4jc3R5bGVzKSB7XG4gICAgICBpZih0aGlzLiNzdHlsZXMuaGFzT3duUHJvcGVydHkoc3R5bGUpKSB7XG4gICAgICAgIHN0eWxlc1tzdHlsZV0gPSB0aGlzLiNzdHlsZXNbc3R5bGVdO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBzdHlsZXM7XG4gIH1cbn0iLCIvKlxuICogQ29weXJpZ2h0IChDKSAyMDIwIEVsaWFzdGlrIChlbGlhc3Rpa3NvZnRzLmNvbSlcbiAqXG4gKiBUaGlzIGZpbGUgaXMgcGFydCBvZiBcIkpTR2FtZVRvb2xzXCIuXG4gKlxuICogXCJKU0dhbWVUb29sc1wiIGlzIGZyZWUgc29mdHdhcmU6IHlvdSBjYW4gcmVkaXN0cmlidXRlIGl0IGFuZC9vciBtb2RpZnlcbiAqIGl0IHVuZGVyIHRoZSB0ZXJtcyBvZiB0aGUgR05VIEdlbmVyYWwgUHVibGljIExpY2Vuc2UgYXMgcHVibGlzaGVkIGJ5XG4gKiB0aGUgRnJlZSBTb2Z0d2FyZSBGb3VuZGF0aW9uLCBlaXRoZXIgdmVyc2lvbiAzIG9mIHRoZSBMaWNlbnNlLCBvclxuICogKGF0IHlvdXIgb3B0aW9uKSBhbnkgbGF0ZXIgdmVyc2lvbi5cbiAqXG4gKiBcIkpTR2FtZVRvb2xzXCIgaXMgZGlzdHJpYnV0ZWQgaW4gdGhlIGhvcGUgdGhhdCBpdCB3aWxsIGJlIHVzZWZ1bCxcbiAqIGJ1dCBXSVRIT1VUIEFOWSBXQVJSQU5UWTsgd2l0aG91dCBldmVuIHRoZSBpbXBsaWVkIHdhcnJhbnR5IG9mXG4gKiBNRVJDSEFOVEFCSUxJVFkgb3IgRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UuICBTZWUgdGhlXG4gKiBHTlUgR2VuZXJhbCBQdWJsaWMgTGljZW5zZSBmb3IgbW9yZSBkZXRhaWxzLlxuICpcbiAqIFlvdSBzaG91bGQgaGF2ZSByZWNlaXZlZCBhIGNvcHkgb2YgdGhlIEdOVSBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlXG4gKiBhbG9uZyB3aXRoIFwiSlNHYW1lVG9vbHNcIi4gIElmIG5vdCwgc2VlIDxodHRwOi8vd3d3LmdudS5vcmcvbGljZW5zZXMvPi5cbiAqL1xuaW1wb3J0IENvbCBmcm9tIFwiLi9Db2xcIjtcbmltcG9ydCBDb25zdGFudHMgZnJvbSBcIi4vQ29uc3RhbnRzXCI7XG5pbXBvcnQgU3R5bGUgZnJvbSBcIi4vU3R5bGVcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVG9vbHRpcCBleHRlbmRzIENvbCB7XG4gIHNlbGVjdGFibGUgPSBmYWxzZTtcbiAgXG4gIGNvbnN0cnVjdG9yKHN0eWxlLCAuLi5jb21wb25lbnRzKSB7XG4gICAgc3VwZXIobnVsbCwgbnVsbCwgbnVsbCwgbnVsbCwgc3R5bGUsIC4uLmNvbXBvbmVudHMpO1xuICAgIHRoaXMuZGlzYWJsZWQgPSB0cnVlO1xuICB9XG5cbiAgZHJhdyhjb250ZXh0KSB7XG4gICAgaWYodGhpcy5oaWRkZW4pIHJldHVybjtcbiAgICBjb25zdCBjYW52YXMgPSBjb250ZXh0LmNhbnZhcztcbiAgICBjb25zdCBjdHggPSBjYW52YXMuZ2V0Q29udGV4dChcIjJkXCIpO1xuICAgIGN0eC5zYXZlKCk7XG5cbiAgICBpZih0aGlzLnggKyB0aGlzLndpZHRoICsgdGhpcy5zdHlsZS5wYWRkaW5nID4gdGhpcy5wYXJlbnQud2lkdGgpIHtcbiAgICAgIHRoaXMueCAtPSAodGhpcy53aWR0aCArIHRoaXMuc3R5bGUucGFkZGluZyk7XG4gICAgfVxuXG4gICAgaWYodGhpcy55ICsgdGhpcy5oZWlnaHQgKyB0aGlzLnN0eWxlLnBhZGRpbmcgPiB0aGlzLnBhcmVudC5oZWlnaHQpIHtcbiAgICAgIHRoaXMueSAtPSAodGhpcy5oZWlnaHQgKyB0aGlzLnN0eWxlLnBhZGRpbmcpO1xuICAgIH1cblxuICAgIHN1cGVyLmRyYXcoY3R4KTtcbiAgICBcbiAgICBjdHgucmVzdG9yZSgpO1xuICB9XG5cbiAgZ2V0IHdpZHRoKCkge1xuICAgIHJldHVybiBzdXBlci53aWR0aCArIHRoaXMuc3R5bGUucGFkZGluZztcbiAgfVxuXG4gIGdldCBoZWlnaHQoKSB7XG4gICAgcmV0dXJuIHN1cGVyLmhlaWdodCArIHRoaXMuc3R5bGUucGFkZGluZztcbiAgfVxuXG4gIHNldCB3aWR0aCh3aWR0aCkge1xuICAgIHN1cGVyLndpZHRoID0gd2lkdGg7XG4gIH1cblxuICBzZXQgaGVpZ2h0KGhlaWdodCkge1xuICAgIHN1cGVyLmhlaWdodCA9IGhlaWdodDtcbiAgfVxuXG4gIGdldCBkZWZhdWx0U3R5bGUoKSB7XG4gICAgcmV0dXJuIG5ldyBTdHlsZSh7XG4gICAgICBcImJhY2tncm91bmRDb2xvclwiOiBDb25zdGFudHMuU2V0dGluZy5UT09MVElQX0RFRkFVTFRfQkFDS0dST1VORFxuICAgIH0pO1xuICB9XG5cbiAgY29tcGFyZVRvQ29tcG9uZW50KG90aGVyQ29tcG9uZW50KSB7XG4gICAgcmV0dXJuIG90aGVyQ29tcG9uZW50LmNvbXBhcmVUb1Rvb2x0aXAodGhpcyk7XG4gIH1cblxuICBjb21wYXJlVG9NZW51KG90aGVyQ29tcG9uZW50KSB7XG4gICAgcmV0dXJuIDE7XG4gIH1cblxuICBjb21wYXJlVG9Ub29sdGlwKG90aGVyQ29tcG9uZW50KSB7XG4gICAgcmV0dXJuIDA7XG4gIH1cblxuICBjb21wYXJlVG9Ob3RpZmljYXRpb24ob3RoZXJDb21wb25lbnQpIHtcbiAgICByZXR1cm4gMTtcbiAgfVxuXG4gIGdldCBoaWRkZW4oKSB7XG4gICAgcmV0dXJuIHN1cGVyLmhpZGRlbiB8fCB0aGlzLmRpc2FibGVkO1xuICB9XG5cbiAgc2V0IGhpZGRlbihoaWRkZW4pIHtcbiAgICBzdXBlci5oaWRkZW4gPSBoaWRkZW47XG4gICAgdGhpcy5kaXNhYmxlZCA9IGhpZGRlbjtcbiAgfVxufSIsIi8qXG4gKiBDb3B5cmlnaHQgKEMpIDIwMjAgRWxpYXN0aWsgKGVsaWFzdGlrc29mdHMuY29tKVxuICpcbiAqIFRoaXMgZmlsZSBpcyBwYXJ0IG9mIFwiSlNHYW1lVG9vbHNcIi5cbiAqXG4gKiBcIkpTR2FtZVRvb2xzXCIgaXMgZnJlZSBzb2Z0d2FyZTogeW91IGNhbiByZWRpc3RyaWJ1dGUgaXQgYW5kL29yIG1vZGlmeVxuICogaXQgdW5kZXIgdGhlIHRlcm1zIG9mIHRoZSBHTlUgR2VuZXJhbCBQdWJsaWMgTGljZW5zZSBhcyBwdWJsaXNoZWQgYnlcbiAqIHRoZSBGcmVlIFNvZnR3YXJlIEZvdW5kYXRpb24sIGVpdGhlciB2ZXJzaW9uIDMgb2YgdGhlIExpY2Vuc2UsIG9yXG4gKiAoYXQgeW91ciBvcHRpb24pIGFueSBsYXRlciB2ZXJzaW9uLlxuICpcbiAqIFwiSlNHYW1lVG9vbHNcIiBpcyBkaXN0cmlidXRlZCBpbiB0aGUgaG9wZSB0aGF0IGl0IHdpbGwgYmUgdXNlZnVsLFxuICogYnV0IFdJVEhPVVQgQU5ZIFdBUlJBTlRZOyB3aXRob3V0IGV2ZW4gdGhlIGltcGxpZWQgd2FycmFudHkgb2ZcbiAqIE1FUkNIQU5UQUJJTElUWSBvciBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRS4gIFNlZSB0aGVcbiAqIEdOVSBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlIGZvciBtb3JlIGRldGFpbHMuXG4gKlxuICogWW91IHNob3VsZCBoYXZlIHJlY2VpdmVkIGEgY29weSBvZiB0aGUgR05VIEdlbmVyYWwgUHVibGljIExpY2Vuc2VcbiAqIGFsb25nIHdpdGggXCJKU0dhbWVUb29sc1wiLiAgSWYgbm90LCBzZWUgPGh0dHA6Ly93d3cuZ251Lm9yZy9saWNlbnNlcy8+LlxuICovXG5pbXBvcnQgQ29tcG9uZW50IGZyb20gXCIuL0NvbXBvbmVudFwiO1xuaW1wb3J0IENvbnN0YW50cyBmcm9tIFwiLi9Db25zdGFudHNcIjtcbmltcG9ydCBVdGlscyBmcm9tIFwiLi9VdGlsc1wiO1xuaW1wb3J0IFN0eWxlIGZyb20gXCIuL1N0eWxlXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFRyaWFuZ2xlIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgc2VsZWN0YWJsZSA9IGZhbHNlO1xuXG4gIGNvbnN0cnVjdG9yKHgsIHksIHdpZHRoLCBoZWlnaHQsIHN0eWxlKSB7XG4gICAgc3VwZXIoeCwgeSwgd2lkdGgsIGhlaWdodCwgc3R5bGUpO1xuICB9XG5cbiAgZHJhdyhjb250ZXh0KSB7XG4gICAgaWYodGhpcy5oaWRkZW4pIHJldHVybjtcbiAgICBzdXBlci5kcmF3KGNvbnRleHQpO1xuXG4gICAgY29uc3QgY2FudmFzID0gY29udGV4dC5jYW52YXM7XG4gICAgY29uc3QgY3R4ID0gY2FudmFzLmdldENvbnRleHQoXCIyZFwiKTtcbiAgICBcbiAgICBVdGlscy5kcmF3VHJpYW5nbGUoY3R4LCB0aGlzLngsIHRoaXMueSwgdGhpcy53aWR0aCwgdGhpcy5oZWlnaHQsIHRoaXMuc3R5bGUubGluZVdpZHRoLCB0aGlzLnN0eWxlLmNvbG9yLCB0aGlzLnN0eWxlLmxpbmVDYXAsIHRoaXMuc3R5bGUuZmlsbCwgdGhpcy5zdHlsZS5maWxsQ29sb3IpO1xuXG4gICAgdGhpcy5pbml0ID0gdHJ1ZTtcbiAgfVxuXG4gIGdldCB3aWR0aCgpIHtcbiAgICByZXR1cm4gc3VwZXIud2lkdGggKyB0aGlzLnN0eWxlLmxpbmVXaWR0aDtcbiAgfVxuXG4gIGdldCBoZWlnaHQoKSB7XG4gICAgcmV0dXJuIHN1cGVyLmhlaWdodCArIHRoaXMuc3R5bGUubGluZVdpZHRoO1xuICB9XG5cbiAgc2V0IHdpZHRoKHdpZHRoKSB7XG4gICAgc3VwZXIud2lkdGggPSB3aWR0aDtcbiAgfVxuXG4gIHNldCBoZWlnaHQoaGVpZ2h0KSB7XG4gICAgc3VwZXIuaGVpZ2h0ID0gaGVpZ2h0O1xuICB9XG5cbiAgZ2V0IGRlZmF1bHRTdHlsZSgpIHtcbiAgICByZXR1cm4gbmV3IFN0eWxlKHtcbiAgICAgIFwibGluZVdpZHRoXCI6IENvbnN0YW50cy5TZXR0aW5nLlRSSUFOR0xFX0RFRkFVTFRfTElORV9TSVpFLFxuICAgICAgXCJjb2xvclwiOiBDb25zdGFudHMuU2V0dGluZy5UUklBTkdMRV9ERUZBVUxUX0NPTE9SLFxuICAgICAgXCJmaWxsXCI6IENvbnN0YW50cy5TZXR0aW5nLlRSSUFOR0xFX0RFRkFVTFRfRklMTCxcbiAgICAgIFwibGluZUNhcFwiOiBDb25zdGFudHMuU2V0dGluZy5UUklBTkdMRV9ERUZBVUxUX0xJTkVfQ0FQLFxuICAgICAgXCJmaWxsQ29sb3JcIjogQ29uc3RhbnRzLlNldHRpbmcuVFJJQU5HTEVfREVGQVVMVF9GSUxMX0NPTE9SXG4gICAgfSk7XG4gIH1cbn0iLCIvKlxuICogQ29weXJpZ2h0IChDKSAyMDIwIEVsaWFzdGlrIChlbGlhc3Rpa3NvZnRzLmNvbSlcbiAqXG4gKiBUaGlzIGZpbGUgaXMgcGFydCBvZiBcIkpTR2FtZVRvb2xzXCIuXG4gKlxuICogXCJKU0dhbWVUb29sc1wiIGlzIGZyZWUgc29mdHdhcmU6IHlvdSBjYW4gcmVkaXN0cmlidXRlIGl0IGFuZC9vciBtb2RpZnlcbiAqIGl0IHVuZGVyIHRoZSB0ZXJtcyBvZiB0aGUgR05VIEdlbmVyYWwgUHVibGljIExpY2Vuc2UgYXMgcHVibGlzaGVkIGJ5XG4gKiB0aGUgRnJlZSBTb2Z0d2FyZSBGb3VuZGF0aW9uLCBlaXRoZXIgdmVyc2lvbiAzIG9mIHRoZSBMaWNlbnNlLCBvclxuICogKGF0IHlvdXIgb3B0aW9uKSBhbnkgbGF0ZXIgdmVyc2lvbi5cbiAqXG4gKiBcIkpTR2FtZVRvb2xzXCIgaXMgZGlzdHJpYnV0ZWQgaW4gdGhlIGhvcGUgdGhhdCBpdCB3aWxsIGJlIHVzZWZ1bCxcbiAqIGJ1dCBXSVRIT1VUIEFOWSBXQVJSQU5UWTsgd2l0aG91dCBldmVuIHRoZSBpbXBsaWVkIHdhcnJhbnR5IG9mXG4gKiBNRVJDSEFOVEFCSUxJVFkgb3IgRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UuICBTZWUgdGhlXG4gKiBHTlUgR2VuZXJhbCBQdWJsaWMgTGljZW5zZSBmb3IgbW9yZSBkZXRhaWxzLlxuICpcbiAqIFlvdSBzaG91bGQgaGF2ZSByZWNlaXZlZCBhIGNvcHkgb2YgdGhlIEdOVSBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlXG4gKiBhbG9uZyB3aXRoIFwiSlNHYW1lVG9vbHNcIi4gIElmIG5vdCwgc2VlIDxodHRwOi8vd3d3LmdudS5vcmcvbGljZW5zZXMvPi5cbiAqL1xuaW1wb3J0IENvbnN0YW50cyBmcm9tIFwiLi9Db25zdGFudHNcIjtcblxuZXhwb3J0IGRlZmF1bHQge1xuICBwcmVSZW5kZXJlZEZvbnQ6IHt9LFxuICBsYXN0S2V5OiAtMSxcbiAgcHJlUmVuZGVyRm9udDogZnVuY3Rpb24oY2Fycywgc2l6ZSwgY29sb3IsIGZvbnRGYW1pbHkpIHtcbiAgICBjYXJzLnB1c2goXCI/XCIpOyBjYXJzLnB1c2goXCIgXCIpOyBjYXJzLnB1c2goXCJBXCIpO1xuICAgIFxuICAgIGZvcihsZXQgaSA9IDA7IGkgPCBjYXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICBjb25zdCBjYW52YXNUbXAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiY2FudmFzXCIpO1xuICAgICAgY29uc3QgY3R4VG1wID0gY2FudmFzVG1wLmdldENvbnRleHQoXCIyZFwiKTtcbiAgICAgIGN0eFRtcC5mb250ID0gc2l6ZSArIFwicHggXCIgKyBmb250RmFtaWx5O1xuICAgICAgY29uc3Qgd2lkdGggPSBjdHhUbXAubWVhc3VyZVRleHQoY2Fyc1tpXSkud2lkdGg7XG4gICAgICBcbiAgICAgIGNhbnZhc1RtcC53aWR0aCA9IHdpZHRoO1xuICAgICAgY2FudmFzVG1wLmhlaWdodCA9IHNpemUgKyAoc2l6ZSAvIDYpO1xuICAgICAgXG4gICAgICBjdHhUbXAuZm9udCA9IHNpemUgKyBcInB4IFwiICsgZm9udEZhbWlseTtcbiAgICAgIGN0eFRtcC5maWxsU3R5bGUgPSBjb2xvcjtcbiAgICAgIGN0eFRtcC50ZXh0QmFzZWxpbmUgPSBcInRvcFwiO1xuICAgICAgY3R4VG1wLmZpbGxUZXh0KGNhcnNbaV0sIDAsIDApO1xuICAgICAgXG4gICAgICB0aGlzLnByZVJlbmRlcmVkRm9udFtjYXJzW2ldXSA9IGNhbnZhc1RtcDtcbiAgICB9XG4gIH0sXG4gIGRyYXdJbWFnZTogZnVuY3Rpb24oY3R4LCBpbWFnZSwgeCwgeSwgd2lkdGgsIGhlaWdodCwgc3gsIHN5LCBzV2lkdGgsIHNIZWlnaHQsIGVyYXNlQmVsb3csIGRlZ3JlZXMpIHtcbiAgICB0aGlzLmRyYXdJbWFnZVdyYXBwZXIoY3R4LCBpbWFnZSwgeCwgeSwgd2lkdGgsIGhlaWdodCwgc3gsIHN5LCBzV2lkdGgsIHNIZWlnaHQsIGVyYXNlQmVsb3csIGRlZ3JlZXMpO1xuICB9LFxuICBkcmF3SW1hZ2VEYXRhOiBmdW5jdGlvbihjdHgsIGltYWdlRGF0YSwgeCwgeSwgd2lkdGgsIGhlaWdodCwgc3gsIHN5LCBzV2lkdGgsIHNIZWlnaHQsIGVyYXNlQmVsb3csIGRlZ3JlZXMpIHtcbiAgICB0aGlzLmRyYXdJbWFnZVdyYXBwZXIoY3R4LCBpbWFnZURhdGEsIHgsIHksIHdpZHRoLCBoZWlnaHQsIHN4LCBzeSwgc1dpZHRoLCBzSGVpZ2h0LCBlcmFzZUJlbG93LCBkZWdyZWVzKTtcbiAgfSxcbiAgZHJhd0ltYWdlV3JhcHBlcjogZnVuY3Rpb24oY3R4LCBpbWFnZSwgeCwgeSwgd2lkdGgsIGhlaWdodCwgc3gsIHN5LCBzV2lkdGgsIHNIZWlnaHQsIGVyYXNlQmVsb3csIGRlZ3JlZXMpIHtcbiAgICB4ID0gKHggPT0gdW5kZWZpbmVkIHx8IGlzTmFOKHgpKSA/IG51bGwgOiBNYXRoLnJvdW5kKHgpO1xuICAgIHkgPSAoeSA9PSB1bmRlZmluZWQgfHwgaXNOYU4oeSkpID8gbnVsbCA6IE1hdGgucm91bmQoeSk7XG4gICAgd2lkdGggPSAod2lkdGggPT0gdW5kZWZpbmVkIHx8IGlzTmFOKHdpZHRoKSkgPyBudWxsIDogTWF0aC5yb3VuZCh3aWR0aCk7XG4gICAgaGVpZ2h0ID0gKGhlaWdodCA9PSB1bmRlZmluZWQgfHwgaXNOYU4oaGVpZ2h0KSkgPyBudWxsIDogTWF0aC5yb3VuZChoZWlnaHQpO1xuICAgIHN4ID0gKHN4ID09IHVuZGVmaW5lZCB8fCBpc05hTihzeCkpID8gbnVsbCA6IE1hdGgucm91bmQoc3gpO1xuICAgIHN5ID0gKHN5ID09IHVuZGVmaW5lZCB8fCBpc05hTihzeSkpID8gbnVsbCA6IE1hdGgucm91bmQoc3kpO1xuICAgIHNXaWR0aCA9IChzV2lkdGggPT0gdW5kZWZpbmVkIHx8IGlzTmFOKHNXaWR0aCkpID8gbnVsbCA6IE1hdGgucm91bmQoc1dpZHRoKTtcbiAgICBzSGVpZ2h0ID0gKHNIZWlnaHQgPT0gdW5kZWZpbmVkIHx8IGlzTmFOKHNIZWlnaHQpKSA/IG51bGwgOiBNYXRoLnJvdW5kKHNIZWlnaHQpO1xuICAgIGVyYXNlQmVsb3cgPSBlcmFzZUJlbG93ID09IHVuZGVmaW5lZCA/IGZhbHNlIDogZXJhc2VCZWxvdztcbiAgICBkZWdyZWVzID0gKGRlZ3JlZXMgPT0gdW5kZWZpbmVkIHx8IGlzTmFOKGRlZ3JlZXMpKSA/IG51bGwgOiBkZWdyZWVzO1xuICBcbiAgICBpZihkZWdyZWVzICE9IHVuZGVmaW5lZCkge1xuICAgICAgY3R4LnNhdmUoKTtcbiAgICAgIGN0eC50cmFuc2xhdGUoeCArIHdpZHRoIC8gMiwgeSArIGhlaWdodCAvIDIpO1xuICAgICAgY3R4LnJvdGF0ZShkZWdyZWVzICogTWF0aC5QSSAvIDE4MCk7XG4gICAgICB4ID0gLSh3aWR0aCAvIDIpO1xuICAgICAgeSA9IC0oaGVpZ2h0IC8gMik7XG4gICAgfVxuICBcbiAgICBpZihlcmFzZUJlbG93KSB7XG4gICAgICBjdHguY2xlYXJSZWN0KHgsIHksIHdpZHRoLCBoZWlnaHQpO1xuICAgIH1cbiAgXG4gICAgaWYoY3R4ICE9IHVuZGVmaW5lZCAmJiBpbWFnZSAhPSB1bmRlZmluZWQpIHtcbiAgICAgIGlmKGltYWdlLndpZHRoID4gMCAmJiBpbWFnZS5oZWlnaHQgPiAwKSB7XG4gICAgICAgIGlmKHN4ICE9IHVuZGVmaW5lZCAmJiBzeSAhPSB1bmRlZmluZWQgJiYgc1dpZHRoICE9IHVuZGVmaW5lZCAmJiBzSGVpZ2h0ICE9IHVuZGVmaW5lZCkge1xuICAgICAgICAgIGN0eC5kcmF3SW1hZ2UoaW1hZ2UsIHN4LCBzeSwgc1dpZHRoLCBzSGVpZ2h0LCB4LCB5LCB3aWR0aCwgaGVpZ2h0KTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBjdHguZHJhd0ltYWdlKGltYWdlLCB4LCB5LCB3aWR0aCwgaGVpZ2h0KTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgXG4gICAgaWYoZGVncmVlcyAhPSB1bmRlZmluZWQpIHtcbiAgICAgIGN0eC5yZXN0b3JlKCk7XG4gICAgfVxuICB9LFxuICBkcmF3VGV4dDogZnVuY3Rpb24oY3R4LCB0ZXh0LCBjb2xvciwgc2l6ZSwgZm9udEZhbWlseSwgYWxpZ25lbWVudCwgdmVydGljYWxBbGlnbmVtZW50LCB4LCB5LCB3cmFwLCBib2xkLCB1bmRlcmxpbmUsIHRleHRCYXNlbGluZSwgcGFyZW50KSB7XG4gICAgaWYoY3R4KSB7XG4gICAgICBjdHguc2F2ZSgpO1xuXG4gICAgICBpZighQXJyYXkuaXNBcnJheShjb2xvcikpIHtcbiAgICAgICAgY3R4LmZpbGxTdHlsZSA9IGNvbG9yO1xuICAgICAgICBjdHguc3Ryb2tlU3R5bGUgPSBjb2xvcjtcbiAgICAgIH1cbiAgXG4gICAgICBjdHguZm9udCA9IChib2xkID8gXCJib2xkIFwiIDogXCJcIikgKyBzaXplICsgXCJweCBcIiArIGZvbnRGYW1pbHk7XG4gICAgICBjdHgudGV4dEJhc2VsaW5lID0gdGV4dEJhc2VsaW5lIHx8IFwiYm90dG9tXCI7XG4gICAgICBjdHguZmlsdGVyID0gXCJub25lXCI7XG4gIFxuICAgICAgaWYod3JhcCkge1xuICAgICAgICB0ZXh0ID0gdGhpcy53cmFwVGV4dExpbmVzKGN0eCwgdGV4dClbXCJ0ZXh0XCJdO1xuICAgICAgfVxuICAgICAgXG4gICAgICBjb25zdCBsaW5lcyA9IHRleHQuc3BsaXQoXCJcXG5cIik7XG4gICAgICBsZXQgbWF4V2lkdGggPSAwO1xuICAgICAgbGV0IHhDdXJyZW50ID0gTWF0aC5yb3VuZCh4KTtcbiAgICAgIGxldCB5Q3VycmVudCA9IE1hdGgucm91bmQoeSkgKyBzaXplO1xuICAgICAgbGV0IHlGaXJzdCA9IDA7XG5cbiAgICAgIGlmKCF5KSB7XG4gICAgICAgIGlmKHZlcnRpY2FsQWxpZ25lbWVudCA9PSBDb25zdGFudHMuVmVydGljYWxBbGlnbmVtZW50LkNFTlRFUikge1xuICAgICAgICAgIHlDdXJyZW50ICs9IE1hdGgucm91bmQoKChwYXJlbnQgJiYgcGFyZW50LmhlaWdodCA/IHBhcmVudC5oZWlnaHQgOiB0aGlzLmdldENhbnZhc0hlaWdodChjdHguY2FudmFzKSkgLyAyKSAtIChzaXplICogbGluZXMubGVuZ3RoIC8gMikpO1xuICAgICAgICB9IGVsc2UgaWYodmVydGljYWxBbGlnbmVtZW50ID09IENvbnN0YW50cy5WZXJ0aWNhbEFsaWduZW1lbnQuQk9UVE9NKSB7XG4gICAgICAgICAgeUN1cnJlbnQgKz0gTWF0aC5yb3VuZCgoKHBhcmVudCAmJiBwYXJlbnQuaGVpZ2h0ID8gcGFyZW50LmhlaWdodCA6IHRoaXMuZ2V0Q2FudmFzSGVpZ2h0KGN0eC5jYW52YXMpKSkgLSAoc2l6ZSAqIGxpbmVzLmxlbmd0aCkgLyAyIC0gc2l6ZSAvIDUpO1xuICAgICAgICB9XG4gICAgICB9XG4gIFxuICAgICAgZm9yKGxldCBpID0gMDsgaSA8IGxpbmVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGNvbnN0IGN1cnJlbnRUZXh0ID0gbGluZXNbaV07XG4gICAgICAgIGNvbnN0IGN1cnJlbnRXaWR0aCA9IGN0eC5tZWFzdXJlVGV4dChjdXJyZW50VGV4dCkud2lkdGg7XG4gIFxuICAgICAgICBpZihBcnJheS5pc0FycmF5KGNvbG9yKSkge1xuICAgICAgICAgIGxldCBjb2xvckluZGV4ID0gaTtcbiAgXG4gICAgICAgICAgaWYoY29sb3JJbmRleCA+IGNvbG9yLmxlbmd0aCAtIDEpIHtcbiAgICAgICAgICAgIGNvbG9ySW5kZXggPSBjb2xvci5sZW5ndGggLSAxO1xuICAgICAgICAgIH1cbiAgXG4gICAgICAgICAgY3R4LmZpbGxTdHlsZSA9IGNvbG9yW2NvbG9ySW5kZXhdO1xuICAgICAgICAgIGN0eC5zdHJva2VTdHlsZSA9IGNvbG9yW2NvbG9ySW5kZXhdO1xuICAgICAgICB9XG4gIFxuICAgICAgICBpZihhbGlnbmVtZW50ID09IENvbnN0YW50cy5BbGlnbmVtZW50LkNFTlRFUikge1xuICAgICAgICAgIHhDdXJyZW50ID0gTWF0aC5yb3VuZCgocGFyZW50ICYmIHBhcmVudC54ID8gcGFyZW50LnggOiAwKSkgKyBNYXRoLnJvdW5kKCgocGFyZW50ICYmIHBhcmVudC53aWR0aCA/IHBhcmVudC53aWR0aCA6IHRoaXMuZ2V0Q2FudmFzV2lkdGgoY3R4LmNhbnZhcykpIC8gMikgLSAoY3R4Lm1lYXN1cmVUZXh0KGN1cnJlbnRUZXh0KS53aWR0aCAvIDIpKTtcbiAgICAgICAgfSBlbHNlIGlmKGFsaWduZW1lbnQgPT0gQ29uc3RhbnRzLkFsaWduZW1lbnQuUklHSFQpIHtcbiAgICAgICAgICB4Q3VycmVudCA9IE1hdGgucm91bmQoKHBhcmVudCAmJiBwYXJlbnQueCA/IHBhcmVudC54IDogMCkpICsgTWF0aC5yb3VuZCgocGFyZW50ICYmIHBhcmVudC53aWR0aCA/IHBhcmVudC53aWR0aCA6IHRoaXMuZ2V0Q2FudmFzV2lkdGgoY3R4LmNhbnZhcykpIC0gKGN0eC5tZWFzdXJlVGV4dChjdXJyZW50VGV4dCkud2lkdGgpIC0gKHBhcmVudCAmJiBwYXJlbnQuc3BhY2VCZXR3ZWVuQ29tcG9uZW50cyA/IHBhcmVudC5zcGFjZUJldHdlZW5Db21wb25lbnRzIDogQ29uc3RhbnRzLlNldHRpbmcuREVGQVVMVF9TUEFDSU5HKSk7XG4gICAgICAgIH1cblxuICAgICAgICBjdHguZmlsbFRleHQoY3VycmVudFRleHQsIHhDdXJyZW50LCB5Q3VycmVudCk7XG4gIFxuICAgICAgICBpZih1bmRlcmxpbmUpIHtcbiAgICAgICAgICBjdHgubGluZVdpZHRoID0gMTtcbiAgICAgICAgICBjdHguYmVnaW5QYXRoKCk7XG4gICAgICAgICAgY3R4Lm1vdmVUbyh4Q3VycmVudCwgeUN1cnJlbnQgLSAyKTtcbiAgICAgICAgICBjdHgubGluZVRvKE1hdGgucm91bmQoeEN1cnJlbnQgKyBjdXJyZW50V2lkdGgpLCB5Q3VycmVudCAtIDIpO1xuICAgICAgICAgIGN0eC5zdHJva2UoKTtcbiAgICAgICAgfVxuICBcbiAgICAgICAgaWYoY3VycmVudFdpZHRoID4gbWF4V2lkdGgpIG1heFdpZHRoID0gY3VycmVudFdpZHRoO1xuICAgICAgICBpZihpID09IDApIHlGaXJzdCA9IHlDdXJyZW50O1xuXG4gICAgICAgIHlDdXJyZW50ICs9IHNpemU7XG4gICAgICB9XG4gIFxuICAgICAgY3R4LnJlc3RvcmUoKTtcbiAgXG4gICAgICByZXR1cm4ge1xuICAgICAgICB4OiB4Q3VycmVudCxcbiAgICAgICAgeTogeUZpcnN0LFxuICAgICAgICBoZWlnaHQ6IHNpemUgKiBsaW5lcy5sZW5ndGgsXG4gICAgICAgIHdpZHRoOiBtYXhXaWR0aFxuICAgICAgfTtcbiAgICB9XG4gIH0sXG4gIHdyYXBUZXh0OiBmdW5jdGlvbih0ZXh0LCBsaW1pdCkge1xuICAgIGlmKHRleHQubGVuZ3RoID4gbGltaXQpIHtcbiAgICAgIGxldCBwID0gbGltaXQ7XG5cbiAgICAgIGZvcig7IHAgPiAwICYmIHRleHRbcF0gIT0gXCIgXCI7IHAtLSk7XG5cbiAgICAgIGlmKHAgPiAwKSB7XG4gICAgICAgIGNvbnN0IGxlZnQgPSB0ZXh0LnN1YnN0cmluZygwLCBwKTtcbiAgICAgICAgY29uc3QgcmlnaHQgPSB0ZXh0LnN1YnN0cmluZyhwICsgMSk7XG4gICAgICAgIHJldHVybiBsZWZ0ICsgXCJcXG5cIiArIHRoaXMud3JhcFRleHQocmlnaHQsIGxpbWl0KTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gdGV4dDtcbiAgfSxcbiAgd3JhcFRleHRMaW5lczogZnVuY3Rpb24oY3R4LCB0ZXh0LCB3aWR0aCwgZm9udFNpemUsIGZvbnRGYW1pbHksIGRpc2FibGVXcmFwKSB7XG4gICAgaWYoY3R4ICYmIHRleHQpIHtcbiAgICAgIGN0eC5zYXZlKCk7XG4gICAgICBjdHguZm9udCA9IE1hdGgucm91bmQoZm9udFNpemUpICsgXCJweCBcIiArIGZvbnRGYW1pbHk7XG4gICAgICBjdHguaW1hZ2VTbW9vdGhpbmdFbmFibGVkID0gZmFsc2U7XG4gIFxuICAgICAgY29uc3QgbGluZXMgPSB0ZXh0LnNwbGl0KFwiXFxuXCIpO1xuICAgICAgbGV0IG5ld1RleHQgPSBcIlwiO1xuICAgICAgY29uc3Qgd2lkdGhDYXIgPSB3aWR0aCB8fCBjdHgubWVhc3VyZVRleHQoXCJBXCIpLndpZHRoO1xuICAgICAgY29uc3QgbmJDYXJMaW5lID0gTWF0aC5yb3VuZCh0aGlzLmdldENhbnZhc1dpZHRoKGN0eC5jYW52YXMpIC8gd2lkdGhDYXIpO1xuICBcbiAgICAgIGxldCBoZWlnaHRUb3RhbCA9IDA7XG4gICAgICBsZXQgbWF4V2lkdGggPSAwO1xuICBcbiAgICAgIGZvcihsZXQgaSA9IDA7IGkgPCBsaW5lcy5sZW5ndGg7IGkrKykge1xuICAgICAgICBjb25zdCBsaW5lV3JhcCA9IGRpc2FibGVXcmFwID8gbGluZXNbaV0gOiB0aGlzLndyYXBUZXh0KGxpbmVzW2ldLCBuYkNhckxpbmUpO1xuICAgICAgICBuZXdUZXh0ICs9IGxpbmVXcmFwO1xuICBcbiAgICAgICAgaWYoaSA8IGxpbmVzLmxlbmd0aCAtIDEpIHtcbiAgICAgICAgICBuZXdUZXh0ICs9IFwiXFxuXCI7XG4gICAgICAgIH1cbiAgXG4gICAgICAgIGZvcihsZXQgaiA9IDA7IGogPCBsaW5lV3JhcC5zcGxpdChcIlxcblwiKS5sZW5ndGg7IGorKykge1xuICAgICAgICAgIGNvbnN0IHdpZHRoVGV4dCA9IGN0eC5tZWFzdXJlVGV4dChsaW5lV3JhcC5zcGxpdChcIlxcblwiKVtqXSkud2lkdGg7XG4gICAgICAgICAgaGVpZ2h0VG90YWwgKz0gZm9udFNpemU7XG4gICAgICAgICAgaWYod2lkdGhUZXh0ID4gbWF4V2lkdGgpIG1heFdpZHRoID0gd2lkdGhUZXh0O1xuICAgICAgICB9XG4gICAgICB9XG4gIFxuICAgICAgY3R4LnJlc3RvcmUoKTtcblxuICAgICAgcmV0dXJuIHtcbiAgICAgICAgdGV4dDogbmV3VGV4dCxcbiAgICAgICAgaGVpZ2h0OiBoZWlnaHRUb3RhbCxcbiAgICAgICAgd2lkdGg6IG1heFdpZHRoLFxuICAgICAgICBjYXJXaWR0aDogd2lkdGhDYXJcbiAgICAgIH07XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIHRleHQ6IFwiXCIsXG4gICAgICAgIGhlaWdodDogMCxcbiAgICAgICAgd2lkdGg6IDAsXG4gICAgICAgIGNhcldpZHRoOiAwXG4gICAgICB9O1xuICAgIH1cbiAgfSxcbiAgZHJhd0Fycm93OiBmdW5jdGlvbihjdHgsIGZyb214LCBmcm9teSwgdG94LCB0b3ksIGxpbmVXaWR0aCwgaGVhZFNpemUsIGNvbG9yLCBsaW5lQ2FwKSB7XG4gICAgY3R4LnNhdmUoKTtcblxuICAgIGN0eC5saW5lQ2FwID0gbGluZUNhcCB8fCBDb25zdGFudHMuU2V0dGluZy5BUlJPV19ERUZBVUxUX0xJTkVfQ0FQO1xuICAgIGN0eC5saW5lV2lkdGggPSBsaW5lV2lkdGggfHwgQ29uc3RhbnRzLlNldHRpbmcuQVJST1dfREVGQVVMVF9MSU5FX1NJWkU7XG4gICAgY3R4LnN0cm9rZVN0eWxlID0gY29sb3IgfHwgQ29uc3RhbnRzLlNldHRpbmcuQVJST1dfREVGQVVMVF9DT0xPUjtcbiAgICBjdHguZmlsdGVyID0gXCJcIjtcbiAgXG4gICAgY3R4LmJlZ2luUGF0aCgpO1xuICAgIGNvbnN0IGhlYWRsZW4gPSBoZWFkU2l6ZSB8fCBDb25zdGFudHMuU2V0dGluZy5BUlJPV19ERUZBVUxUX0hFQURfU0laRTtcbiAgICBjb25zdCBkeCA9IHRveCAtIGZyb214O1xuICAgIGNvbnN0IGR5ID0gdG95IC0gZnJvbXk7XG4gICAgY29uc3QgYW5nbGUgPSBNYXRoLmF0YW4yKGR5LCBkeCk7XG4gICAgY3R4Lm1vdmVUbyhmcm9teCwgZnJvbXkpO1xuICAgIGN0eC5saW5lVG8odG94LCB0b3kpO1xuICAgIGN0eC5tb3ZlVG8odG94LCB0b3kpO1xuICAgIGN0eC5saW5lVG8odG94IC0gaGVhZGxlbiAqIE1hdGguY29zKGFuZ2xlIC0gTWF0aC5QSSAvIDYpLCB0b3kgLSBoZWFkbGVuICogTWF0aC5zaW4oYW5nbGUgLSBNYXRoLlBJIC8gNikpO1xuICAgIGN0eC5tb3ZlVG8odG94LCB0b3kpO1xuICAgIGN0eC5saW5lVG8odG94IC0gaGVhZGxlbiAqIE1hdGguY29zKGFuZ2xlICsgTWF0aC5QSSAvIDYpLCB0b3kgLSBoZWFkbGVuICogTWF0aC5zaW4oYW5nbGUgKyBNYXRoLlBJIC8gNikpO1xuICAgIGN0eC5zdHJva2UoKTtcbiAgICBcbiAgICBjdHgucmVzdG9yZSgpO1xuICB9LFxuICBkcmF3Q3Jvc3M6IGZ1bmN0aW9uKGN0eCwgeCwgeSwgd2lkdGgsIGhlaWdodCwgbGluZVdpZHRoLCBjb2xvciwgbGluZUNhcCkge1xuICAgIGN0eC5zYXZlKCk7XG5cbiAgICBjdHgubGluZUNhcCA9IGxpbmVDYXAgfHwgQ29uc3RhbnRzLlNldHRpbmcuQ1JPU1NfREVGQVVMVF9MSU5FX0NBUDtcbiAgICBjdHgubGluZVdpZHRoID0gbGluZVdpZHRoIHx8IENvbnN0YW50cy5TZXR0aW5nLkNST1NTX0RFRkFVTFRfTElORV9TSVpFO1xuICAgIGN0eC5zdHJva2VTdHlsZSA9IGNvbG9yIHx8IENvbnN0YW50cy5TZXR0aW5nLkNST1NTX0RFRkFVTFRfQ09MT1I7XG4gICAgY3R4LmZpbHRlciA9IFwiXCI7XG4gIFxuICAgIGN0eC5iZWdpblBhdGgoKTtcbiAgICBjdHgubW92ZVRvKHgsIHkpO1xuICAgIGN0eC5saW5lVG8oeCArIHdpZHRoLCB5ICsgaGVpZ2h0KTtcbiAgICBjdHgubW92ZVRvKHggKyB3aWR0aCwgeSk7XG4gICAgY3R4LmxpbmVUbyh4LCB5ICsgaGVpZ2h0KTtcbiAgICBjdHguc3Ryb2tlKCk7XG4gICAgXG4gICAgY3R4LnJlc3RvcmUoKTtcbiAgfSxcbiAgZHJhd1RyaWFuZ2xlOiBmdW5jdGlvbihjdHgsIHgsIHksIHdpZHRoLCBoZWlnaHQsIGxpbmVXaWR0aCwgY29sb3IsIGxpbmVDYXAsIGZpbGwgPSBDb25zdGFudHMuU2V0dGluZy5UUklBTkdMRV9ERUZBVUxUX0ZJTEwsIGZpbGxDb2xvcikge1xuICAgIGN0eC5zYXZlKCk7XG5cbiAgICBjdHgubGluZUNhcCA9IGxpbmVDYXAgfHwgQ29uc3RhbnRzLlNldHRpbmcuVFJJQU5HTEVfREVGQVVMVF9MSU5FX0NBUDtcbiAgICBjdHgubGluZVdpZHRoID0gbGluZVdpZHRoIHx8IENvbnN0YW50cy5TZXR0aW5nLlRSSUFOR0xFX0RFRkFVTFRfTElORV9TSVpFO1xuICAgIGN0eC5maWx0ZXIgPSBcIlwiO1xuXG4gICAgaWYoZmlsbCkge1xuICAgICAgY3R4LmZpbGxTdHlsZSA9IGZpbGxDb2xvciB8fCBDb25zdGFudHMuU2V0dGluZy5UUklBTkdMRV9ERUZBVUxUX0ZJTExfQ09MT1I7XG4gICAgICBjdHguc3Ryb2tlU3R5bGUgPSBjb2xvciB8fCBDb25zdGFudHMuU2V0dGluZy5UUklBTkdMRV9ERUZBVUxUX0NPTE9SO1xuICAgIH0gZWxzZSB7XG4gICAgICBjdHguc3Ryb2tlU3R5bGUgPSBjb2xvciB8fCBDb25zdGFudHMuU2V0dGluZy5UUklBTkdMRV9ERUZBVUxUX0NPTE9SO1xuICAgIH1cbiAgXG4gICAgY3R4LmJlZ2luUGF0aCgpO1xuICAgIGN0eC5tb3ZlVG8oeCwgeSk7XG4gICAgY3R4LmxpbmVUbyh4ICsgd2lkdGgsIHkpO1xuICAgIGN0eC5saW5lVG8oeCArIHdpZHRoIC8gMiwgeSArIGhlaWdodCk7XG4gICAgY3R4LmxpbmVUbyh4LCB5KTtcblxuICAgIGlmKGZpbGwpIHtcbiAgICAgIGN0eC5maWxsKCk7XG4gICAgICBjdHguc3Ryb2tlKCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGN0eC5zdHJva2UoKTtcbiAgICB9XG4gICAgXG4gICAgY3R4LnJlc3RvcmUoKTtcbiAgfSxcbiAgZHJhd0NpcmNsZTogZnVuY3Rpb24oY3R4LCB4LCB5LCByYWRpdXMsIGxpbmVXaWR0aCwgY29sb3IsIGxpbmVDYXAsIGZpbGwgPSBDb25zdGFudHMuU2V0dGluZy5DSVJDTEVfREVGQVVMVF9GSUxMLCBmaWxsQ29sb3IpIHtcbiAgICBjdHguc2F2ZSgpO1xuXG4gICAgY3R4LmxpbmVDYXAgPSBsaW5lQ2FwIHx8IENvbnN0YW50cy5TZXR0aW5nLkNJUkNMRV9ERUZBVUxUX0xJTkVfQ0FQO1xuICAgIGN0eC5saW5lV2lkdGggPSBsaW5lV2lkdGggfHwgQ29uc3RhbnRzLlNldHRpbmcuQ0lSQ0xFX0RFRkFVTFRfTElORV9TSVpFO1xuICAgIGN0eC5maWx0ZXIgPSBcIlwiO1xuXG4gICAgaWYoZmlsbCkge1xuICAgICAgY3R4LmZpbGxTdHlsZSA9IGZpbGxDb2xvciB8fCBDb25zdGFudHMuU2V0dGluZy5DSVJDTEVfREVGQVVMVF9GSUxMX0NPTE9SO1xuICAgICAgY3R4LnN0cm9rZVN0eWxlID0gY29sb3IgfHwgQ29uc3RhbnRzLlNldHRpbmcuQ0lSQ0xFX0RFRkFVTFRfQ09MT1I7XG4gICAgfSBlbHNlIHtcbiAgICAgIGN0eC5zdHJva2VTdHlsZSA9IGNvbG9yIHx8IENvbnN0YW50cy5TZXR0aW5nLkNJUkNMRV9ERUZBVUxUX0NPTE9SO1xuICAgIH1cbiAgICBcbiAgICBjdHguYmVnaW5QYXRoKCk7XG4gICAgY3R4LmFyYyh4ICsgcmFkaXVzIC8gMiwgeSArIHJhZGl1cyAvIDIsIHJhZGl1cyAvIDIsIDAsIDIgKiBNYXRoLlBJLCBmYWxzZSk7XG5cbiAgICBpZihmaWxsKSB7XG4gICAgICBjdHguZmlsbCgpO1xuICAgICAgY3R4LnN0cm9rZSgpO1xuICAgIH0gZWxzZSB7XG4gICAgICBjdHguc3Ryb2tlKCk7XG4gICAgfVxuICAgIFxuICAgIGN0eC5yZXN0b3JlKCk7XG4gIH0sXG4gIGNsZWFyOiBmdW5jdGlvbihjdHgpIHtcbiAgICBjdHguY2xlYXJSZWN0KDAsIDAsIHRoaXMuZ2V0Q2FudmFzV2lkdGgoY3R4LmNhbnZhcyksIHRoaXMuZ2V0Q2FudmFzSGVpZ2h0KGN0eC5jYW52YXMpKTtcbiAgfSxcbiAgaXNGaWx0ZXJIdWVBdmFpbGFibGU6IGZ1bmN0aW9uKCkge1xuICAgIGNvbnN0IGNhbnZhcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJjYW52YXNcIik7XG4gICAgY2FudmFzLndpZHRoID0gNTtcbiAgICBjYW52YXMuaGVpZ2h0ID0gNTtcbiAgICBjb25zdCBjdHggPSBjYW52YXMuZ2V0Q29udGV4dChcIjJkXCIpO1xuICAgIGN0eC5zYXZlKCk7XG4gIFxuICAgIGN0eC5maWxsU3R5bGUgPSBcIiNGRjAwMDBcIjtcbiAgICBjdHguZmlsdGVyID0gXCJodWUtcm90YXRlKDkwZGVnKVwiO1xuICAgIGN0eC5maWxsUmVjdCgwLCAwLCA1LCA1KTtcbiAgICBjb25zdCBjb2xvciA9IGN0eC5nZXRJbWFnZURhdGEoMCwgMCwgMSwgMSkuZGF0YTtcbiAgICBjdHgucmVzdG9yZSgpO1xuICBcbiAgICBpZihjb2xvclswXSA9PSAyNTUgJiYgY29sb3JbMV0gPT0gMCAmJiBjb2xvclsyXSA9PSAwKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICBcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfSxcbiAgYmx1ckNhbnZhczogZnVuY3Rpb24oY3R4LCBsZW5ndGgpIHtcbiAgICBjdHguc2F2ZSgpO1xuICAgIGN0eC5maWx0ZXIgPSBcImJsdXIoXCIgKyBsZW5ndGggICsgXCJweClcIjtcbiAgICB0aGlzLmRyYXdJbWFnZURhdGEoY3R4LCBjdHguY2FudmFzLCAwLCAwLCB0aGlzLmdldENhbnZhc1dpZHRoKGN0eC5jYW52YXMpLCB0aGlzLmdldENhbnZhc0hlaWdodChjdHguY2FudmFzKSk7XG4gICAgY3R4LnJlc3RvcmUoKTtcbiAgfSxcbiAgcGFyc2VOdW1iZXI6IGZ1bmN0aW9uKHN0cikge1xuICAgIHJldHVybiBzdHIgPyBwYXJzZUludChzdHIubWF0Y2goL1xcZCsvKSwgMTApIDogMDtcbiAgfSxcbiAgZ2V0Rm9udFNpemU6IGZ1bmN0aW9uKGN0eCkge1xuICAgIHJldHVybiBNYXRoLmZsb29yKHBhcnNlTnVtYmVyKGN0eC5mb250KSAvIDEuMjUpO1xuICB9LFxuICBnZXRDYW52YXNXaWR0aChjYW52YXMpIHtcbiAgICByZXR1cm4gdGhpcy5wYXJzZU51bWJlcihjYW52YXMuc3R5bGUud2lkdGgpIHx8IGNhbnZhcy53aWR0aDtcbiAgfSxcbiAgZ2V0Q2FudmFzSGVpZ2h0KGNhbnZhcykge1xuICAgIHJldHVybiB0aGlzLnBhcnNlTnVtYmVyKGNhbnZhcy5zdHlsZS5oZWlnaHQpIHx8IGNhbnZhcy5oZWlnaHQ7XG4gIH0sXG4gIGF1dG9EUEkoY2FudmFzKSB7XG4gICAgY29uc3QgcmVjdCA9IGNhbnZhcy5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcblxuICAgIGNhbnZhcy53aWR0aCA9IHJlY3Qud2lkdGggKiBDb25zdGFudHMuU2V0dGluZy5QSVhFTF9SQVRJTztcbiAgICBjYW52YXMuaGVpZ2h0ID0gcmVjdC5oZWlnaHQgKiBDb25zdGFudHMuU2V0dGluZy5QSVhFTF9SQVRJTztcbiAgICBcbiAgICBjYW52YXMuc3R5bGUud2lkdGggPSByZWN0LndpZHRoICsgXCJweFwiO1xuICAgIGNhbnZhcy5zdHlsZS5oZWlnaHQgPSAgcmVjdC5oZWlnaHQgKyBcInB4XCI7XG4gIH0sXG4gIGF1dG9SZXNpemVDYW52YXM6IGZ1bmN0aW9uKGNhbnZhcywgY29udGFpbmVyLCBpbml0aWFsV2lkdGgsIGluaXRpYWxIZWlnaHQpIHtcbiAgICBpZighZG9jdW1lbnQuZnVsbHNjcmVlbkVsZW1lbnQpIHtcbiAgICAgIGlmKGluaXRpYWxXaWR0aCA+PSBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuY2xpZW50V2lkdGggKiAwLjg1KSB7XG4gICAgICAgIHZhciByYXRpbyA9IGluaXRpYWxXaWR0aCAvIGluaXRpYWxIZWlnaHQ7XG4gICAgICAgIGNhbnZhcy53aWR0aCA9IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5jbGllbnRXaWR0aCAqIDAuODU7XG4gICAgICAgIGNhbnZhcy5oZWlnaHQgPSBjYW52YXMud2lkdGggLyByYXRpbztcblxuICAgICAgICBpZihjYW52YXMuc3R5bGUpIHtcbiAgICAgICAgICBjYW52YXMuc3R5bGUud2lkdGggPSBjYW52YXMud2lkdGggKyBcInB4XCI7XG4gICAgICAgICAgY2FudmFzLnN0eWxlLmhlaWdodCA9IGNhbnZhcy5oZWlnaHQgKyBcInB4XCI7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGNhbnZhcy53aWR0aCA9IGluaXRpYWxXaWR0aDtcbiAgICAgICAgY2FudmFzLmhlaWdodCA9IGluaXRpYWxIZWlnaHQ7XG5cbiAgICAgICAgaWYoY2FudmFzLnN0eWxlKSB7XG4gICAgICAgICAgY2FudmFzLnN0eWxlLndpZHRoID0gaW5pdGlhbFdpZHRoICsgXCJweFwiO1xuICAgICAgICAgIGNhbnZhcy5zdHlsZS5oZWlnaHQgPSBpbml0aWFsSGVpZ2h0ICsgXCJweFwiO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSBlbHNlIGlmKGRvY3VtZW50LmZ1bGxzY3JlZW5FbGVtZW50ID09IGNhbnZhcyB8fCBkb2N1bWVudC5mdWxsc2NyZWVuRWxlbWVudCA9PSBjb250YWluZXIpIHtcbiAgICAgIGNhbnZhcy53aWR0aCA9IHdpbmRvdy5pbm5lcldpZHRoO1xuICAgICAgY2FudmFzLmhlaWdodCA9IHdpbmRvdy5pbm5lckhlaWdodDtcblxuICAgICAgaWYoY2FudmFzLnN0eWxlKSB7XG4gICAgICAgIGNhbnZhcy5zdHlsZS53aWR0aCA9IHdpbmRvdy5pbm5lcldpZHRoICsgXCJweFwiO1xuICAgICAgICBjYW52YXMuc3R5bGUuaGVpZ2h0ID0gd2luZG93LmlubmVySGVpZ2h0ICsgXCJweFwiO1xuICAgICAgfVxuXG4gICAgICBpZihjb250YWluZXIpIHtcbiAgICAgICAgY29udGFpbmVyLndpZHRoID0gd2luZG93LmlubmVyV2lkdGg7XG4gICAgICAgIGNvbnRhaW5lci5oZWlnaHQgPSB3aW5kb3cuaW5uZXJIZWlnaHQ7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIGNhbnZhcy53aWR0aCA9IGluaXRpYWxXaWR0aDtcbiAgICAgIGNhbnZhcy5oZWlnaHQgPSBpbml0aWFsSGVpZ2h0O1xuXG4gICAgICBpZihjYW52YXMuc3R5bGUpIHtcbiAgICAgICAgY2FudmFzLnN0eWxlLndpZHRoID0gaW5pdGlhbFdpZHRoICsgXCJweFwiO1xuICAgICAgICBjYW52YXMuc3R5bGUuaGVpZ2h0ID0gaW5pdGlhbEhlaWdodCArIFwicHhcIjtcbiAgICAgIH1cbiAgICB9XG4gIH0sXG4gIGVuYWJsZUF1dG9SZXNpemVDYW52YXM6IGZ1bmN0aW9uKGNhbnZhcywgY29udGFpbmVyLCBpbml0aWFsV2lkdGgsIGluaXRpYWxIZWlnaHQpIHtcbiAgICBpZihjYW52YXMgJiYgY2FudmFzLmdldEF0dHJpYnV0ZShcImF1dG9yZXNpemUtY2FudmFzLWV2ZW50XCIpICE9IFwidHJ1ZVwiKSB7XG4gICAgICB0aGlzLmF1dG9SZXNpemVDYW52YXMoY2FudmFzLCBjb250YWluZXIsIGluaXRpYWxXaWR0aCwgaW5pdGlhbEhlaWdodCk7XG4gIFxuICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJyZXNpemVcIiwgKCkgPT4ge1xuICAgICAgICBjYW52YXMuc2V0QXR0cmlidXRlKFwiYXV0b3Jlc2l6ZS1jYW52YXMtZXZlbnRcIiwgXCJ0cnVlXCIpO1xuICAgICAgICB0aGlzLmF1dG9SZXNpemVDYW52YXMoY2FudmFzLCBjb250YWluZXIsIGluaXRpYWxXaWR0aCwgaW5pdGlhbEhlaWdodCk7XG4gICAgICB9KTtcbiAgICB9XG4gIH0sXG4gIGF1dG9SZXNpemVDYW52YXNGdWxsc2NyZWVuOiBmdW5jdGlvbihjYW52YXMsIGNvbnRhaW5lcikge1xuICAgIGlmKGRvY3VtZW50LmZ1bGxzY3JlZW5FbGVtZW50ID09IGNhbnZhcyB8fCBkb2N1bWVudC5mdWxsc2NyZWVuRWxlbWVudCA9PSBjb250YWluZXIpIHtcbiAgICAgIGNhbnZhcy53aWR0aCA9IHdpbmRvdy5pbm5lcldpZHRoO1xuICAgICAgY2FudmFzLmhlaWdodCA9IHdpbmRvdy5pbm5lckhlaWdodDtcblxuICAgICAgaWYoY2FudmFzLnN0eWxlKSB7XG4gICAgICAgIGNhbnZhcy5zdHlsZS53aWR0aCA9IHdpbmRvdy5pbm5lcldpZHRoICsgXCJweFwiO1xuICAgICAgICBjYW52YXMuc3R5bGUuaGVpZ2h0ID0gd2luZG93LmlubmVySGVpZ2h0ICsgXCJweFwiO1xuICAgICAgfVxuICAgICAgXG4gICAgICBpZihjb250YWluZXIpIHtcbiAgICAgICAgY29udGFpbmVyLndpZHRoID0gd2luZG93LmlubmVyV2lkdGg7XG4gICAgICAgIGNvbnRhaW5lci5oZWlnaHQgPSB3aW5kb3cuaW5uZXJIZWlnaHQ7XG4gICAgICB9XG4gICAgfVxuICB9LFxuICBlbmFibGVBdXRvUmVzaXplQ2FudmFzRnVsbHNjcmVlbjogZnVuY3Rpb24oY2FudmFzLCBjb250YWluZXIpIHtcbiAgICBpZihjYW52YXMgJiYgY2FudmFzLmdldEF0dHJpYnV0ZShcImF1dG9yZXNpemVmdWxsc2NyZWVuLWNhbnZhcy1ldmVudFwiKSAhPSBcInRydWVcIikge1xuICAgICAgdGhpcy5hdXRvUmVzaXplQ2FudmFzRnVsbHNjcmVlbihjYW52YXMsIGNvbnRhaW5lcik7XG4gIFxuICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJyZXNpemVcIiwgKCkgPT4ge1xuICAgICAgICBjYW52YXMuc2V0QXR0cmlidXRlKFwiYXV0b3Jlc2l6ZWZ1bGxzY3JlZW4tY2FudmFzLWV2ZW50XCIsIFwidHJ1ZVwiKTtcbiAgICAgICAgdGhpcy5hdXRvUmVzaXplQ2FudmFzRnVsbHNjcmVlbihjYW52YXMsIGNvbnRhaW5lcik7XG4gICAgICB9KTtcbiAgICB9XG4gIH0sXG4gIGF1dG9SZXNpemVDYW52YXNGdWxscGFnZTogZnVuY3Rpb24oY2FudmFzLCBjb250YWluZXIpIHtcbiAgICBpZihjYW52YXMgJiYgY2FudmFzLmdldEF0dHJpYnV0ZShcImZ1bGxwYWdlLWNhbnZhcy1lbmFibGVcIikgPT0gXCJ0cnVlXCIpIHtcbiAgICAgIGNhbnZhcy53aWR0aCA9IHdpbmRvdy5pbm5lcldpZHRoO1xuICAgICAgY2FudmFzLmhlaWdodCA9IHdpbmRvdy5pbm5lckhlaWdodDtcbiAgICAgIFxuICAgICAgaWYoY2FudmFzLnN0eWxlKSB7XG4gICAgICAgIGNhbnZhcy5zdHlsZS53aWR0aCA9IHdpbmRvdy5pbm5lcldpZHRoICsgXCJweFwiO1xuICAgICAgICBjYW52YXMuc3R5bGUuaGVpZ2h0ID0gd2luZG93LmlubmVySGVpZ2h0ICsgXCJweFwiO1xuICAgICAgfVxuICAgICAgXG4gICAgICBpZihjb250YWluZXIpIHtcbiAgICAgICAgY29udGFpbmVyLndpZHRoID0gd2luZG93LmlubmVyV2lkdGg7XG4gICAgICAgIGNvbnRhaW5lci5oZWlnaHQgPSB3aW5kb3cuaW5uZXJIZWlnaHQ7XG4gICAgICAgIGNvbnRhaW5lci5zdHlsZS5tYXJnaW4gPSAwO1xuICAgICAgICBjb250YWluZXIuc3R5bGUucGFkZGluZyA9IDA7XG4gICAgICB9XG5cbiAgICAgIGRvY3VtZW50LmJvZHkuc3R5bGUubWFyZ2luID0gMDtcbiAgICAgIGRvY3VtZW50LmJvZHkuc3R5bGUucGFkZGluZyA9IDA7XG4gICAgfVxuICB9LFxuICBlbmFibGVBdXRvUmVzaXplQ2FudmFzRnVsbHBhZ2U6IGZ1bmN0aW9uKGNhbnZhcywgY29udGFpbmVyKSB7XG4gICAgaWYoY2FudmFzICYmIGNhbnZhcy5nZXRBdHRyaWJ1dGUoXCJhdXRvcmVzaXplZnVsbHBhZ2UtY2FudmFzLWV2ZW50XCIpICE9IFwidHJ1ZVwiKSB7XG4gICAgICB0aGlzLmF1dG9SZXNpemVDYW52YXNGdWxscGFnZShjYW52YXMsIGNvbnRhaW5lcik7XG4gIFxuICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJyZXNpemVcIiwgKCkgPT4ge1xuICAgICAgICBjYW52YXMuc2V0QXR0cmlidXRlKFwiYXV0b3Jlc2l6ZWZ1bGxwYWdlLWNhbnZhcy1ldmVudFwiLCBcInRydWVcIik7XG4gICAgICAgIHRoaXMuYXV0b1Jlc2l6ZUNhbnZhc0Z1bGxwYWdlKGNhbnZhcywgY29udGFpbmVyKTtcbiAgICAgIH0pO1xuICAgIH1cbiAgfSxcbiAgdG9nZ2xlRnVsbHNjcmVlbjogZnVuY3Rpb24oY2FudmFzLCBjb250YWluZXIpIHtcbiAgICBpZihjYW52YXMpIHtcbiAgICAgIGNvbnN0IGluaXRpYWxXaWR0aCA9IGNhbnZhcy53aWR0aDtcbiAgICAgIGNvbnN0IGluaXRpYWxIZWlnaHQgPSBjYW52YXMuaGVpZ2h0O1xuXG4gICAgICBpZihjb250YWluZXIpIHtcbiAgICAgICAgY29udGFpbmVyLndpZHRoID0gaW5pdGlhbFdpZHRoO1xuICAgICAgICBjb250YWluZXIuaGVpZ2h0ID0gaW5pdGlhbEhlaWdodDtcbiAgICAgIH1cblxuICAgICAgaWYoIWRvY3VtZW50LmZ1bGxzY3JlZW5FbGVtZW50KSB7XG4gICAgICAgIGlmKChjb250YWluZXIgfHwgY2FudmFzKS5yZXF1ZXN0RnVsbHNjcmVlbikge1xuICAgICAgICAgIChjb250YWluZXIgfHwgY2FudmFzKS5yZXF1ZXN0RnVsbHNjcmVlbigpO1xuICAgICAgICB9IGVsc2UgaWYoKGNvbnRhaW5lciB8fCBjYW52YXMpLm1velJlcXVlc3RGdWxsU2NyZWVuKSB7XG4gICAgICAgICAgKGNvbnRhaW5lciB8fCBjYW52YXMpLm1velJlcXVlc3RGdWxsU2NyZWVuKCk7XG4gICAgICAgIH0gZWxzZSBpZigoY29udGFpbmVyIHx8IGNhbnZhcykud2Via2l0UmVxdWVzdEZ1bGxzY3JlZW4pIHtcbiAgICAgICAgICAoY29udGFpbmVyIHx8IGNhbnZhcykud2Via2l0UmVxdWVzdEZ1bGxzY3JlZW4oKTtcbiAgICAgICAgfSBlbHNlIGlmKChjb250YWluZXIgfHwgY2FudmFzKS5tc1JlcXVlc3RGdWxsc2NyZWVuKSB7XG4gICAgICAgICAgKGNvbnRhaW5lciB8fCBjYW52YXMpLm1zUmVxdWVzdEZ1bGxzY3JlZW4oKTtcbiAgICAgICAgfSBlbHNlIGlmKChjb250YWluZXIgfHwgY2FudmFzKS5vUmVxdWVzdEZ1bGxzY3JlZW4pIHtcbiAgICAgICAgICAoY29udGFpbmVyIHx8IGNhbnZhcykub1JlcXVlc3RGdWxsc2NyZWVuKCk7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGlmKGRvY3VtZW50LmV4aXRGdWxsc2NyZWVuKSB7XG4gICAgICAgICAgZG9jdW1lbnQuZXhpdEZ1bGxzY3JlZW4oKTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICB0aGlzLmVuYWJsZUF1dG9SZXNpemVDYW52YXNGdWxsc2NyZWVuKGNhbnZhcywgY29udGFpbmVyKTtcblxuICAgICAgaWYoY2FudmFzLmdldEF0dHJpYnV0ZShcImZ1bGxzY3JlZW5jaGFuZ2UtY2FudmFzLWV2ZW50XCIpICE9IFwidHJ1ZVwiKSB7XG4gICAgICAgIGNhbnZhcy5zZXRBdHRyaWJ1dGUoXCJmdWxsc2NyZWVuY2hhbmdlLWNhbnZhcy1ldmVudFwiLCBcInRydWVcIik7XG5cbiAgICAgICAgY29uc3Qgb25mdWxsc2NyZWVuY2hhbmdlID0gKCkgPT4ge1xuICAgICAgICAgIGlmKGRvY3VtZW50LmZ1bGxzY3JlZW5FbGVtZW50ICE9IChjb250YWluZXIgfHwgY2FudmFzKSkge1xuICAgICAgICAgICAgY2FudmFzLndpZHRoID0gaW5pdGlhbFdpZHRoO1xuICAgICAgICAgICAgY2FudmFzLmhlaWdodCA9IGluaXRpYWxIZWlnaHQ7XG4gICAgICBcbiAgICAgICAgICAgIGlmKGNvbnRhaW5lcikge1xuICAgICAgICAgICAgICBjb250YWluZXIud2lkdGggPSBpbml0aWFsV2lkdGg7XG4gICAgICAgICAgICAgIGNvbnRhaW5lci5oZWlnaHQgPSBpbml0aWFsSGVpZ2h0O1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICBcbiAgICAgICAgaWYodHlwZW9mKGRvY3VtZW50Lm9uZnVsbHNjcmVlbmNoYW5nZSkgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBkb2N1bWVudC5vbmZ1bGxzY3JlZW5jaGFuZ2UgPSBvbmZ1bGxzY3JlZW5jaGFuZ2U7XG4gICAgICAgIH0gZWxzZSBpZih0eXBlb2YoZG9jdW1lbnQub25tc2Z1bGxzY3JlZW5jaGFuZ2UpICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgZG9jdW1lbnQub25tc2Z1bGxzY3JlZW5jaGFuZ2UgPSBvbmZ1bGxzY3JlZW5jaGFuZ2U7XG4gICAgICAgIH0gZWxzZSBpZih0eXBlb2YoZG9jdW1lbnQub25tb3pmdWxsc2NyZWVuY2hhbmdlKSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGRvY3VtZW50Lm9ubW96ZnVsbHNjcmVlbmNoYW5nZSA9IG9uZnVsbHNjcmVlbmNoYW5nZTtcbiAgICAgICAgfSBlbHNlIGlmKHR5cGVvZihkb2N1bWVudC5vbndlYmtpdGZ1bGxzY3JlZW5jaGFuZ2UpICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgZG9jdW1lbnQub253ZWJraXRmdWxsc2NyZWVuY2hhbmdlID0gb25mdWxsc2NyZWVuY2hhbmdlO1xuICAgICAgICB9IGVsc2UgaWYodHlwZW9mKGRvY3VtZW50Lm9ub2tpdGZ1bGxzY3JlZW5jaGFuZ2UpICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgZG9jdW1lbnQub25vZnVsbHNjcmVlbmNoYW5nZSA9IG9uZnVsbHNjcmVlbmNoYW5nZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfSxcbiAgdG9nZ2xlRnVsbHBhZ2U6IGZ1bmN0aW9uKGNhbnZhcywgY29udGFpbmVyKSB7XG4gICAgaWYoY2FudmFzKSB7XG4gICAgICBjb25zdCBpbml0aWFsV2lkdGggPSBjYW52YXMud2lkdGg7XG4gICAgICBjb25zdCBpbml0aWFsSGVpZ2h0ID0gY2FudmFzLmhlaWdodDtcblxuICAgICAgaWYoY29udGFpbmVyKSB7XG4gICAgICAgIGNvbnRhaW5lci53aWR0aCA9IGluaXRpYWxXaWR0aDtcbiAgICAgICAgY29udGFpbmVyLmhlaWdodCA9IGluaXRpYWxIZWlnaHQ7XG4gICAgICB9XG5cbiAgICAgIGlmKCFjYW52YXMuZ2V0QXR0cmlidXRlKFwiZnVsbHBhZ2UtY2FudmFzLWVuYWJsZVwiKSB8fCBjYW52YXMuZ2V0QXR0cmlidXRlKFwiZnVsbHBhZ2UtY2FudmFzLWVuYWJsZVwiKSA9PSBcImZhbHNlXCIpIHtcbiAgICAgICAgY2FudmFzLnNldEF0dHJpYnV0ZShcImZ1bGxwYWdlLWNhbnZhcy1lbmFibGVcIiwgXCJ0cnVlXCIpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgY2FudmFzLnNldEF0dHJpYnV0ZShcImZ1bGxwYWdlLWNhbnZhcy1lbmFibGVcIiwgXCJmYWxzZVwiKTtcbiAgICAgIH1cblxuICAgICAgdGhpcy5lbmFibGVBdXRvUmVzaXplQ2FudmFzRnVsbHBhZ2UoY2FudmFzLCBjb250YWluZXIpO1xuICAgIH1cbiAgfSxcbiAgZ2V0TW91c2VQb3MoY2FudmFzLCBldmVudCkge1xuICAgIGNvbnN0IHJlY3QgPSBjYW52YXMuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG4gICAgXG4gICAgcmV0dXJuIHtcbiAgICAgIHg6IGV2ZW50LmNsaWVudFggLSByZWN0LmxlZnQsXG4gICAgICB5OiBldmVudC5jbGllbnRZIC0gcmVjdC50b3BcbiAgICB9O1xuICB9XG59OyIsIi8qXG4gKiBDb3B5cmlnaHQgKEMpIDIwMjAgRWxpYXN0aWsgKGVsaWFzdGlrc29mdHMuY29tKVxuICpcbiAqIFRoaXMgZmlsZSBpcyBwYXJ0IG9mIFwiSlNHYW1lVG9vbHNcIi5cbiAqXG4gKiBcIkpTR2FtZVRvb2xzXCIgaXMgZnJlZSBzb2Z0d2FyZTogeW91IGNhbiByZWRpc3RyaWJ1dGUgaXQgYW5kL29yIG1vZGlmeVxuICogaXQgdW5kZXIgdGhlIHRlcm1zIG9mIHRoZSBHTlUgR2VuZXJhbCBQdWJsaWMgTGljZW5zZSBhcyBwdWJsaXNoZWQgYnlcbiAqIHRoZSBGcmVlIFNvZnR3YXJlIEZvdW5kYXRpb24sIGVpdGhlciB2ZXJzaW9uIDMgb2YgdGhlIExpY2Vuc2UsIG9yXG4gKiAoYXQgeW91ciBvcHRpb24pIGFueSBsYXRlciB2ZXJzaW9uLlxuICpcbiAqIFwiSlNHYW1lVG9vbHNcIiBpcyBkaXN0cmlidXRlZCBpbiB0aGUgaG9wZSB0aGF0IGl0IHdpbGwgYmUgdXNlZnVsLFxuICogYnV0IFdJVEhPVVQgQU5ZIFdBUlJBTlRZOyB3aXRob3V0IGV2ZW4gdGhlIGltcGxpZWQgd2FycmFudHkgb2ZcbiAqIE1FUkNIQU5UQUJJTElUWSBvciBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRS4gIFNlZSB0aGVcbiAqIEdOVSBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlIGZvciBtb3JlIGRldGFpbHMuXG4gKlxuICogWW91IHNob3VsZCBoYXZlIHJlY2VpdmVkIGEgY29weSBvZiB0aGUgR05VIEdlbmVyYWwgUHVibGljIExpY2Vuc2VcbiAqIGFsb25nIHdpdGggXCJKU0dhbWVUb29sc1wiLiAgSWYgbm90LCBzZWUgPGh0dHA6Ly93d3cuZ251Lm9yZy9saWNlbnNlcy8+LlxuICovXG5pbXBvcnQgQ29uc3RhbnRzIGZyb20gXCIuL0NvbnN0YW50c1wiO1xuaW1wb3J0IEJ1dHRvbiBmcm9tIFwiLi9CdXR0b25cIjtcbmltcG9ydCBCdXR0b25JbWFnZSBmcm9tIFwiLi9CdXR0b25JbWFnZVwiO1xuaW1wb3J0IEltYWdlTG9hZGVyIGZyb20gXCIuL0ltYWdlTG9hZGVyXCI7XG5pbXBvcnQgTm90aWZpY2F0aW9uTWVzc2FnZSBmcm9tIFwiLi9Ob3RpZmljYXRpb25NZXNzYWdlXCI7XG5pbXBvcnQgVXRpbHMgZnJvbSBcIi4vVXRpbHNcIjtcbmltcG9ydCBNZW51IGZyb20gXCIuL01lbnVcIjtcbmltcG9ydCBJbnB1dCBmcm9tIFwiLi9JbnB1dFwiO1xuaW1wb3J0IExhYmVsIGZyb20gXCIuL0xhYmVsXCI7XG5pbXBvcnQgTGluayBmcm9tIFwiLi9MaW5rXCI7XG5pbXBvcnQgVG9vbHRpcCBmcm9tIFwiLi9Ub29sdGlwXCI7XG5pbXBvcnQgU2NlbmUgZnJvbSBcIi4vU2NlbmVcIjtcbmltcG9ydCBGUFNNZXRlciBmcm9tIFwiLi9GUFNNZXRlclwiO1xuaW1wb3J0IFByb2dyZXNzQmFyIGZyb20gXCIuL1Byb2dyZXNzQmFyXCI7XG5pbXBvcnQgQ2FudmFzIGZyb20gXCIuL0NhbnZhc1wiO1xuaW1wb3J0IENvbXBvbmVudCBmcm9tIFwiLi9Db21wb25lbnRcIjtcbmltcG9ydCBFYXNpbmdGdW5jdGlvbnMgZnJvbSBcIi4vRWFzaW5nRnVuY3Rpb25zXCI7XG5pbXBvcnQgQ29sIGZyb20gXCIuL0NvbFwiO1xuaW1wb3J0IENvbnRhaW5lciBmcm9tIFwiLi9Db250YWluZXJcIjtcbmltcG9ydCBSb3cgZnJvbSBcIi4vUm93XCI7XG5pbXBvcnQgSW1hZ2VDb250YWluZXIgZnJvbSBcIi4vSW1hZ2VDb250YWluZXJcIjtcbmltcG9ydCBBcnJvdyBmcm9tIFwiLi9BcnJvd1wiO1xuaW1wb3J0IENyb3NzIGZyb20gXCIuL0Nyb3NzXCI7XG5pbXBvcnQgU2Nyb2xsYmFyIGZyb20gXCIuL1Njcm9sbGJhclwiO1xuaW1wb3J0IFNjcm9sbGJhclZlcnRpY2FsIGZyb20gXCIuL1Njcm9sbGJhclZlcnRpY2FsXCI7XG5pbXBvcnQgU2Nyb2xsYmFySG9yaXpvbnRhbCBmcm9tIFwiLi9TY3JvbGxiYXJIb3Jpem9udGFsXCI7XG5pbXBvcnQgQm94IGZyb20gXCIuL0JveFwiO1xuaW1wb3J0IFN0eWxlIGZyb20gXCIuL1N0eWxlXCI7XG5pbXBvcnQgU2VsZWN0IGZyb20gXCIuL1NlbGVjdFwiO1xuaW1wb3J0IFNlbGVjdE9wdGlvbiBmcm9tIFwiLi9TZWxlY3RPcHRpb25cIjtcbmltcG9ydCBTZWxlY3RPcHRpb25zQ29udGFpbmVyIGZyb20gXCIuL1NlbGVjdE9wdGlvbnNDb250YWluZXJcIjtcbmltcG9ydCBUcmlhbmdsZSBmcm9tIFwiLi9UcmlhbmdsZVwiO1xuaW1wb3J0IENpcmNsZSBmcm9tIFwiLi9DaXJjbGVcIjtcbmltcG9ydCBSZWFjdG9yIGZyb20gXCIuL1JlYWN0b3JcIjtcbmltcG9ydCBFdmVudCBmcm9tIFwiLi9FdmVudFwiO1xuaW1wb3J0IFJlYWN0b3JDYW52YXMgZnJvbSBcIi4vUmVhY3RvckNhbnZhc1wiO1xuaW1wb3J0IEVycm9yU2NyZWVuIGZyb20gXCIuL0Vycm9yU2NyZWVuXCI7XG5cbmV4cG9ydCB7IENvbnN0YW50cywgQnV0dG9uLCBCdXR0b25JbWFnZSwgSW1hZ2VMb2FkZXIsIE5vdGlmaWNhdGlvbk1lc3NhZ2UsIFV0aWxzLCBNZW51LCBJbnB1dCwgTGFiZWwsIExpbmssIFRvb2x0aXAsIFNjZW5lLCBGUFNNZXRlciwgUHJvZ3Jlc3NCYXIsIENhbnZhcywgQ29tcG9uZW50LCBFYXNpbmdGdW5jdGlvbnMsIENvbCwgQ29udGFpbmVyLCBSb3csIEltYWdlQ29udGFpbmVyLCBBcnJvdywgQ3Jvc3MsIFNjcm9sbGJhciwgU2Nyb2xsYmFyVmVydGljYWwsIFNjcm9sbGJhckhvcml6b250YWwsIEJveCwgU3R5bGUsIFNlbGVjdCwgU2VsZWN0T3B0aW9uLCBTZWxlY3RPcHRpb25zQ29udGFpbmVyLCBUcmlhbmdsZSwgQ2lyY2xlLCBSZWFjdG9yLCBFdmVudCwgUmVhY3RvckNhbnZhcywgRXJyb3JTY3JlZW4gfTsiXSwic291cmNlUm9vdCI6IiJ9