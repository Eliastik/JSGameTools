/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/@babel/runtime/helpers/esm/arrayLikeToArray.js"
/*!*********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/arrayLikeToArray.js ***!
  \*********************************************************************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _arrayLikeToArray)
/* harmony export */ });
function _arrayLikeToArray(r, a) {
  (null == a || a > r.length) && (a = r.length);
  for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e];
  return n;
}


/***/ },

/***/ "./node_modules/@babel/runtime/helpers/esm/arrayWithoutHoles.js"
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/arrayWithoutHoles.js ***!
  \**********************************************************************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _arrayWithoutHoles)
/* harmony export */ });
/* harmony import */ var _arrayLikeToArray_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./arrayLikeToArray.js */ "./node_modules/@babel/runtime/helpers/esm/arrayLikeToArray.js");

function _arrayWithoutHoles(r) {
  if (Array.isArray(r)) return (0,_arrayLikeToArray_js__WEBPACK_IMPORTED_MODULE_0__["default"])(r);
}


/***/ },

/***/ "./node_modules/@babel/runtime/helpers/esm/iterableToArray.js"
/*!********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/iterableToArray.js ***!
  \********************************************************************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _iterableToArray)
/* harmony export */ });
function _iterableToArray(r) {
  if ("undefined" != typeof Symbol && null != r[Symbol.iterator] || null != r["@@iterator"]) return Array.from(r);
}


/***/ },

/***/ "./node_modules/@babel/runtime/helpers/esm/nonIterableSpread.js"
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/nonIterableSpread.js ***!
  \**********************************************************************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _nonIterableSpread)
/* harmony export */ });
function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}


/***/ },

/***/ "./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js"
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js ***!
  \**********************************************************************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _toConsumableArray)
/* harmony export */ });
/* harmony import */ var _arrayWithoutHoles_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./arrayWithoutHoles.js */ "./node_modules/@babel/runtime/helpers/esm/arrayWithoutHoles.js");
/* harmony import */ var _iterableToArray_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./iterableToArray.js */ "./node_modules/@babel/runtime/helpers/esm/iterableToArray.js");
/* harmony import */ var _unsupportedIterableToArray_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./unsupportedIterableToArray.js */ "./node_modules/@babel/runtime/helpers/esm/unsupportedIterableToArray.js");
/* harmony import */ var _nonIterableSpread_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./nonIterableSpread.js */ "./node_modules/@babel/runtime/helpers/esm/nonIterableSpread.js");




function _toConsumableArray(r) {
  return (0,_arrayWithoutHoles_js__WEBPACK_IMPORTED_MODULE_0__["default"])(r) || (0,_iterableToArray_js__WEBPACK_IMPORTED_MODULE_1__["default"])(r) || (0,_unsupportedIterableToArray_js__WEBPACK_IMPORTED_MODULE_2__["default"])(r) || (0,_nonIterableSpread_js__WEBPACK_IMPORTED_MODULE_3__["default"])();
}


/***/ },

/***/ "./node_modules/@babel/runtime/helpers/esm/unsupportedIterableToArray.js"
/*!*******************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/unsupportedIterableToArray.js ***!
  \*******************************************************************************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _unsupportedIterableToArray)
/* harmony export */ });
/* harmony import */ var _arrayLikeToArray_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./arrayLikeToArray.js */ "./node_modules/@babel/runtime/helpers/esm/arrayLikeToArray.js");

function _unsupportedIterableToArray(r, a) {
  if (r) {
    if ("string" == typeof r) return (0,_arrayLikeToArray_js__WEBPACK_IMPORTED_MODULE_0__["default"])(r, a);
    var t = {}.toString.call(r).slice(8, -1);
    return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? (0,_arrayLikeToArray_js__WEBPACK_IMPORTED_MODULE_0__["default"])(r, a) : void 0;
  }
}


/***/ }

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		if (!(moduleId in __webpack_modules__)) {
/******/ 			delete __webpack_module_cache__[moduleId];
/******/ 			var e = new Error("Cannot find module '" + moduleId + "'");
/******/ 			e.code = 'MODULE_NOT_FOUND';
/******/ 			throw e;
/******/ 		}
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry needs to be wrapped in an IIFE because it needs to be isolated against other modules in the chunk.
(() => {
/*!***********************************!*\
  !*** ./examples/src/tictactoe.js ***!
  \***********************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/toConsumableArray */ "./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js");

/*
 * Copyright (C) 2020 Eliastik (eliastiksofts.com)
 *
 * This file is part of "JSGameTools".
 *
 * "JSGameTools" is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
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
JGT.Constants.Setting.FONT_FAMILY = "Gaegu";
JGT.Constants.Setting.FONT_SIZE = 35;

// Graphic components
var imageLoader = new JGT.ImageLoader();
var buttonStyle = new JGT.Style({
  "backgroundColor": "gray",
  "borderSize": 2,
  "borderColor": "black"
});
var labelStyle = new JGT.Style({
  "fontColor": "white",
  "alignement": "center"
});
var labelStyleDefault = new JGT.Style({
  "fontColor": "white"
});
var buttonStyle2 = new JGT.Style({
  "backgroundColor": "#2ecc71",
  "backgroundColorHover": "#1abc9c",
  "backgroundColorDown": "#16a085",
  "alignement": "center"
});
var buttonStyleDefault = new JGT.Style({
  "backgroundColor": "#2ecc71",
  "backgroundColorHover": "#1abc9c",
  "backgroundColorDown": "#16a085"
});
var buttonStyleRed = new JGT.Style({
  "backgroundColor": "#CC2F2F",
  "backgroundColorHover": "#F23838",
  "backgroundColorDown": "#A62626",
  "alignement": "center"
});
var buttonStyleRedDefault = new JGT.Style({
  "backgroundColor": "#CC2F2F",
  "backgroundColorHover": "#F23838",
  "backgroundColorDown": "#A62626"
});
var box = new JGT.Box(0, 0, 800, 600, new JGT.Style({
  "backgroundColor": "lightgray"
}));
var gameInfos = new JGT.Label("", null, null, new JGT.Style({
  "alignement": "center",
  "fontSize": 30
}));
var fpsMeter = new JGT.FPSMeter(false, null, null, new JGT.Style({
  "alignement": "right",
  "verticalAlignement": "bottom",
  "foreground": true
}));
var pauseImage = new JGT.ImageContainer("pause.png", null, null, 64, 64, new JGT.Style({
  "verticalAlignement": "center",
  "alignement": "center"
}));
var fullscreenImage = new JGT.ImageContainer("fullscreen.png", null, null, 64, 64, new JGT.Style({
  "verticalAlignement": "center",
  "alignement": "center"
}));
var pauseButton = new JGT.Button(null, 50, null, null, new JGT.Style({
  "alignement": "right",
  "verticalAlignement": "center"
}), new JGT.Row(5, 250, null, null, null, pauseImage));
var fullscreenButton = new JGT.Button(null, 50, null, null, new JGT.Style({
  "alignement": "left",
  "verticalAlignement": "center"
}), new JGT.Row(5, 250, null, null, null, fullscreenImage));
var rowButtons = new JGT.Row(null, null, null, null, new JGT.Style({
  "alignement": "right",
  "verticalAlignement": "top"
}), fullscreenButton, pauseButton);

// Pause menu
var buttonNewGame = new JGT.Button(5, 5, null, null, buttonStyle2, new JGT.Label("New game", null, null, labelStyle));
var buttonMenu1 = new JGT.Button(5, 5, null, null, buttonStyle2, new JGT.Label("Reset the game", null, null, labelStyle));
var buttonMenu2 = new JGT.Button(5, 5, null, null, buttonStyleRed, new JGT.Label("Close", null, null, labelStyle));
var menuLabel = new JGT.Label("Pause menu", null, null, labelStyle);
var menu = new JGT.Menu(null, menuLabel, buttonNewGame, buttonMenu1, buttonMenu2);

// Result menu
var buttonNewGame2 = new JGT.Button(5, 5, null, null, buttonStyle2, new JGT.Label("New game", null, null, labelStyle));
var buttonMenu3 = new JGT.Button(5, 5, null, null, buttonStyle2, new JGT.Label("Reset the game", null, null, labelStyle));
var menuResultLabel = new JGT.Label("???", null, null, labelStyle);
var menuResult = new JGT.Menu(null, menuResultLabel, buttonNewGame2, buttonMenu3);

// Main menu
var buttonPlayerVSAI = new JGT.Button(5, 5, null, null, buttonStyle2, new JGT.Label("Player VS AI", null, null, labelStyle));
var buttonPlayerVSPlayer = new JGT.Button(5, 5, null, null, buttonStyle2, new JGT.Label("Player VS Player", null, null, labelStyle));
var buttonExit = new JGT.Button(5, 5, null, null, buttonStyleRed, new JGT.Label("Exit", null, null, labelStyle));
var mainMenuLabel = new JGT.Label("JSGameTools\nTic Tac Toe example", null, null, labelStyle);
var mainMenu = new JGT.Menu(new JGT.Style({
  "backgroundColor": "rgba(44, 62, 80, 1)"
}), mainMenuLabel, buttonPlayerVSAI, buttonPlayerVSPlayer, buttonExit);
mainMenu.enable();

// Player VS Player settings
var labelPlayerVSPlayerMenu = new JGT.Label("Player VS Player", null, null, labelStyle);
var labelGridParamPlayerVSPlayerMenu = new JGT.Label("Grid size: ", null, null, labelStyleDefault);
var inputRow = new JGT.Input(null, null, 50, null, null, "3");
var xSign = new JGT.Label("×", null, null, labelStyleDefault);
var inputCol = new JGT.Input(null, null, 50, null, null, "3");
var validatePlayerVSPlayer = new JGT.Button(5, 5, null, null, buttonStyleDefault, new JGT.Label("Play", null, null, labelStyle));
var cancelPlayerVSPlayer = new JGT.Button(5, 5, null, null, buttonStyleRedDefault, new JGT.Label("Cancel", null, null, labelStyle));
var playerVSPlayerMenu = new JGT.Menu(new JGT.Style({
  "backgroundColor": "rgba(44, 62, 80, 1)"
}), labelPlayerVSPlayerMenu, new JGT.Row(null, null, null, null, new JGT.Style({
  "alignement": "center",
  "padding": 20
}), labelGridParamPlayerVSPlayerMenu, inputRow, xSign, inputCol), new JGT.Row(null, null, null, null, new JGT.Style({
  "alignement": "center",
  "padding": 20
}), validatePlayerVSPlayer, cancelPlayerVSPlayer));

// Player VS AI settings
var labelPlayerVSAIMenu = new JGT.Label("Player VS AI", null, null, labelStyle);
var labelGridParamPlayerVSAIMenu = new JGT.Label("Grid size: ", null, null, labelStyleDefault);
var inputRowAI = new JGT.Input(null, null, 50, null, null, "3");
var xSignAI = new JGT.Label("×", null, null, labelStyleDefault);
var inputColAI = new JGT.Input(null, null, 50, null, null, "3");
var labelAILevel = new JGT.Label("AI level: ", null, null, labelStyleDefault);
var optionsAILevel = new JGT.SelectOptionsContainer(75, new JGT.Style({
  "foreground": true
}), new JGT.SelectOption(new JGT.Label("Low")), new JGT.SelectOption(new JGT.Label("Normal")), new JGT.SelectOption(new JGT.Label("High")));
var selectAILevel = new JGT.Select(255, 315, null, null, null, optionsAILevel, 1);
var labelAIFirstPlayer = new JGT.Label("First player: ", null, null, labelStyleDefault);
var optionsAIFirstPlayer = new JGT.SelectOptionsContainer(75, new JGT.Style({
  "foreground": true
}), new JGT.SelectOption(new JGT.Label("You")), new JGT.SelectOption(new JGT.Label("AI")));
var selectAIFirstPlayer = new JGT.Select(255, 315, null, null, null, optionsAIFirstPlayer, 1);
var validatePlayerVSAI = new JGT.Button(5, 5, null, null, buttonStyleDefault, new JGT.Label("Play", null, null, labelStyle));
var cancelPlayerVSAI = new JGT.Button(5, 5, null, null, buttonStyleRedDefault, new JGT.Label("Cancel", null, null, labelStyle));
var playerVSAIMenu = new JGT.Menu(new JGT.Style({
  "backgroundColor": "rgba(44, 62, 80, 1)"
}), labelPlayerVSAIMenu, new JGT.Row(null, null, null, null, new JGT.Style({
  "alignement": "center",
  "padding": 20
}), labelGridParamPlayerVSAIMenu, inputRowAI, xSignAI, inputColAI), new JGT.Row(null, null, null, null, new JGT.Style({
  "alignement": "center",
  "padding": 20
}), labelAILevel, selectAILevel), new JGT.Row(null, null, null, null, new JGT.Style({
  "alignement": "center",
  "padding": 20
}), labelAIFirstPlayer, selectAIFirstPlayer), new JGT.Row(null, null, null, null, new JGT.Style({
  "alignement": "center",
  "padding": 20
}), validatePlayerVSAI, cancelPlayerVSAI));
pauseButton.addClickAction(function () {
  menu.enable();
});
fullscreenButton.addClickAction(function () {
  canvas.toggleFullscreen();
});
buttonMenu2.addClickAction(function () {
  menu.disable();
});
buttonExit.addClickAction(function () {
  location.href = "./index.html";
});
buttonNewGame.addClickAction(openMainMenu);
buttonNewGame2.addClickAction(openMainMenu);
validatePlayerVSPlayer.addClickAction(function () {
  runGame(GAME_MODE.PLAYER_VS_PLAYER, [inputRow.text.trim() == "" || isNaN(inputRow.text) ? 3 : parseInt(inputRow.text), inputCol.text.trim() == "" || isNaN(inputCol.text) ? 3 : parseInt(inputCol.text)]);
});
buttonPlayerVSPlayer.addClickAction(function () {
  mainMenu.disable();
  playerVSPlayerMenu.enable();
});
cancelPlayerVSPlayer.addClickAction(function () {
  mainMenu.enable();
  playerVSPlayerMenu.disable();
});
buttonPlayerVSAI.addClickAction(function () {
  mainMenu.disable();
  playerVSAIMenu.enable();
});
validatePlayerVSAI.addClickAction(function () {
  aiPlayer = PLAYER_NUM.PLAYER_TWO;
  otherPlayer = PLAYER_NUM.PLAYER_ONE;
  aiLevel = AI_LEVEL.NORMAL;
  switch (selectAILevel.text) {
    case "High":
      aiLevel = AI_LEVEL.HIGH;
      break;
    case "Normal":
      aiLevel = AI_LEVEL.NORMAL;
      break;
    case "Low":
      aiLevel = AI_LEVEL.LOW;
      break;
  }
  switch (selectAIFirstPlayer.text) {
    case "You":
      aiPlayer = PLAYER_NUM.PLAYER_TWO;
      otherPlayer = PLAYER_NUM.PLAYER_ONE;
      break;
    case "AI":
      aiPlayer = PLAYER_NUM.PLAYER_ONE;
      otherPlayer = PLAYER_NUM.PLAYER_TWO;
      break;
  }
  runGame(GAME_MODE.PLAYER_VS_AI, [inputRowAI.text.trim() == "" || isNaN(inputRowAI.text) ? 3 : parseInt(inputRowAI.text), inputColAI.text.trim() == "" || isNaN(inputColAI.text) ? 3 : parseInt(inputColAI.text)]);
});
cancelPlayerVSAI.addClickAction(function () {
  mainMenu.enable();
  playerVSAIMenu.disable();
});
buttonMenu1.addClickAction(function () {
  return runGame(currentGameMode, sizeBoard);
});
buttonMenu3.addClickAction(function () {
  return runGame(currentGameMode, sizeBoard);
});

// Board col
var col = new JGT.Col(null, null, null, null, new JGT.Style({
  "alignement": "center",
  "verticalAlignement": "center"
}));

// Events, game variables and logic
var MARK_TYPE = {
  CROSS: "cross",
  CIRCLE: "circle",
  EMPTY: "empty"
};
var PLAYER_NUM = {
  PLAYER_ONE: MARK_TYPE.CROSS,
  PLAYER_TWO: MARK_TYPE.CIRCLE
};
var WIN_SITUATION = {
  PLAYER_ONE: PLAYER_NUM.PLAYER_ONE,
  PLAYER_TWO: PLAYER_NUM.PLAYER_TWO,
  DRAW: 0
};
var GAME_MODE = {
  PLAYER_VS_AI: 1,
  PLAYER_VS_PLAYER: 2
};
var AI_LEVEL = {
  HIGH: 10,
  NORMAL: 6,
  LOW: 4
};
var AI_WIN_SITUATION_SCORES = {
  WIN: 10,
  LOSE: -10,
  DRAW: 0
};
var DEFAULT_MAX_DEPTH_MINIMAX = AI_LEVEL.HIGH;
var currentPlayer = PLAYER_NUM.PLAYER_ONE;
var aiPlayer = PLAYER_NUM.PLAYER_TWO;
var otherPlayer = PLAYER_NUM.PLAYER_ONE;
var currentGameMode = GAME_MODE.PLAYER_VS_AI;
var aiLevel = AI_LEVEL.HIGH;
var sizeBoard = [3, 3];
var buttons = [];
var buttonsBoard = [];
var gameBoard = [];
function createBoard() {
  col.clear();
  col.add(gameInfos);
  gameBoard = [];
  buttons = [];
  buttonsBoard = [];
  for (var i = 0; i < sizeBoard[0]; i++) {
    var row = new JGT.Row();
    var line = [];
    var lineButton = [];
    for (var j = 0; j < sizeBoard[1]; j++) {
      var button = new JGT.Button(null, null, 75, 75, buttonStyle);
      buttons.push(button);
      lineButton.push(button);
      row.add(button);
      line.push(MARK_TYPE.EMPTY);
    }
    gameBoard.push(line);
    buttonsBoard.push(lineButton);
    col.add(row);
  }
  buttons.forEach(function (button, i) {
    return button.addClickAction(function () {
      var currentCellPosition = [Math.floor(i / sizeBoard[1]), i % sizeBoard[1]];
      gameAction(gameBoard, currentCellPosition);
    });
  });
}
function toStr(board) {
  var str = "";
  for (var i = 0; i < board.length; i++) {
    for (var j = 0; j < board[i].length; j++) {
      if (board[i][j] == MARK_TYPE.EMPTY) {
        str += "   ";
      } else if (board[i][j] == MARK_TYPE.CIRCLE) {
        str += " o ";
      } else if (board[i][j] == MARK_TYPE.CROSS) {
        str += " x ";
      }
    }
    str += "\n";
  }
  return str;
}
function checkWinHoriz(board) {
  var countCross = 0;
  var countCircle = 0;
  for (var i = 0; i < board.length; i++) {
    var currentLine = board[i];
    for (var j = 0; j < currentLine.length; j++) {
      if (currentLine[j] == MARK_TYPE.CROSS) {
        countCross++;
        countCircle = 0;
      } else if (currentLine[j] == MARK_TYPE.CIRCLE) {
        countCircle++;
        countCross = 0;
      } else {
        countCircle = 0;
        countCross = 0;
      }
      if (countCross >= 3) {
        return PLAYER_NUM.PLAYER_ONE;
      } else if (countCircle >= 3) {
        return PLAYER_NUM.PLAYER_TWO;
      }
    }
    countCross = 0;
    countCircle = 0;
  }
  return null;
}
function checkWinVerti(board) {
  var countCross = 0;
  var countCircle = 0;
  for (var i = 0; i < board[0].length; i++) {
    for (var j = 0; j < board.length; j++) {
      var currentCase = board[j][i];
      if (currentCase == MARK_TYPE.CROSS) {
        countCross++;
        countCircle = 0;
      } else if (currentCase == MARK_TYPE.CIRCLE) {
        countCircle++;
        countCross = 0;
      } else {
        countCircle = 0;
        countCross = 0;
      }
      if (countCross >= 3) {
        return PLAYER_NUM.PLAYER_ONE;
      } else if (countCircle >= 3) {
        return PLAYER_NUM.PLAYER_TWO;
      }
    }
    countCross = 0;
    countCircle = 0;
  }
  return null;
}
function checkWinDiago(board) {
  for (var i = 0; i < board.length; i++) {
    var currentLine = board[i];
    for (var j = 0; j < currentLine.length; j++) {
      var cellsToCheck = [[j, i], [j - 1, i - 1], [j - 2, i - 2]];
      var cellsToCheckTwo = [[j, i], [j + 1, i + 1], [j + 2, i + 2]];
      var cellsToCheckAnti = [[j, i], [j - 1, i + 1], [j - 2, i + 2]];
      var cellsToCheckAntiTwo = [[j, i], [j + 1, i - 1], [j + 2, i - 2]];
      var checkCells = checkCasesDiago(board, currentLine, cellsToCheck);
      var checkCellsAnti = checkCasesDiago(board, currentLine, cellsToCheckAnti);
      var checkCellsTwo = checkCasesDiago(board, currentLine, cellsToCheckTwo);
      var checkCellsAntiTwo = checkCasesDiago(board, currentLine, cellsToCheckAntiTwo);
      if (checkCells) return checkCells;
      if (checkCellsAnti) return checkCellsAnti;
      if (checkCellsTwo) return checkCellsTwo;
      if (checkCellsAntiTwo) return checkCellsAntiTwo;
    }
  }
  return null;
}
function checkCasesDiago(board, currentLine, cellsToCheck) {
  var countCross = 0;
  var countCircle = 0;
  for (var k = 0; k < cellsToCheck.length; k++) {
    var c = cellsToCheck[k];
    if (c[1] >= 0 && c[1] < board.length && c[0] >= 0 && c[0] < currentLine.length) {
      var cell = board[c[1]][c[0]];
      if (cell == MARK_TYPE.CROSS) {
        countCross++;
        countCircle = 0;
      } else if (cell == MARK_TYPE.CIRCLE) {
        countCircle++;
        countCross = 0;
      } else {
        countCircle = 0;
        countCross = 0;
      }
      if (countCross >= 3) {
        return PLAYER_NUM.PLAYER_ONE;
      } else if (countCircle >= 3) {
        return PLAYER_NUM.PLAYER_TWO;
      }
    }
  }
}
function checkFull(board) {
  for (var i = 0; i < board[0].length; i++) {
    var currentLine = board[i];
    for (var j = 0; j < currentLine.length; j++) {
      var currentCase = currentLine[j];
      if (currentCase == MARK_TYPE.EMPTY) {
        return false;
      }
    }
  }
  return true;
}
function checkWin(board) {
  var checkHoriz = checkWinHoriz(board);
  var checkVerti = checkWinVerti(board);
  var checkDiag = checkWinDiago(board);
  var checkIsFull = checkFull(board);
  if (checkHoriz == PLAYER_NUM.PLAYER_ONE || checkVerti == PLAYER_NUM.PLAYER_ONE || checkDiag == PLAYER_NUM.PLAYER_ONE) {
    return WIN_SITUATION.PLAYER_ONE;
  } else if (checkHoriz == PLAYER_NUM.PLAYER_TWO || checkVerti == PLAYER_NUM.PLAYER_TWO || checkDiag == PLAYER_NUM.PLAYER_TWO) {
    return WIN_SITUATION.PLAYER_TWO;
  } else if (checkIsFull) {
    return WIN_SITUATION.DRAW;
  }
}
function displayResultGame(board) {
  var winner = checkWin(board);
  if (winner == WIN_SITUATION.PLAYER_ONE) {
    menuResultLabel.text = "Player 1 won!";
    menuResult.enable();
  } else if (winner == WIN_SITUATION.PLAYER_TWO) {
    menuResultLabel.text = "Player 2 won!";
    menuResult.enable();
  } else if (winner == WIN_SITUATION.DRAW) {
    menuResultLabel.text = "Draw!";
    menuResult.enable();
  }
}
function gameAction(board, position) {
  if (position != null) {
    var currentCell = board[position[0]][position[1]];
    var mark = null;
    if (currentCell == MARK_TYPE.EMPTY) {
      if (currentPlayer == PLAYER_NUM.PLAYER_ONE) {
        mark = new JGT.Cross(null, null, 25, 25, new JGT.Style({
          "alignement": "center",
          "verticalAlignement": "center",
          "lineWidth": 5,
          "color": "white"
        }));
        currentPlayer = PLAYER_NUM.PLAYER_TWO;
        gameInfos.text = "It's the turn of\nplayer 2";
        board[position[0]][position[1]] = PLAYER_NUM.PLAYER_ONE;
      } else {
        mark = new JGT.Circle(null, null, 25, new JGT.Style({
          "alignement": "center",
          "verticalAlignement": "center",
          "lineWidth": 5,
          "color": "white",
          "fill": false
        }));
        currentPlayer = PLAYER_NUM.PLAYER_ONE;
        gameInfos.text = "It's the turn of\nplayer 1";
        board[position[0]][position[1]] = PLAYER_NUM.PLAYER_TWO;
      }
      if (mark) buttonsBoard[position[0]][position[1]].set(mark);
      if (currentGameMode == GAME_MODE.PLAYER_VS_AI && currentPlayer == aiPlayer) {
        playAi(board);
      }
    }
  }
  displayResultGame(board);
}

/* Functions used for the AI
  Use the minimax algorithm
  The PLAYER_TWO is always the ai */
function copyBoard(boardToCopy) {
  var gameBoard = [];
  for (var i = 0; i < boardToCopy.length; i++) {
    gameBoard.push([]);
    gameBoard[i] = (0,_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__["default"])(boardToCopy[i]);
  }
  return gameBoard;
}
function evalBoard(board) {
  var check = checkWin(board);
  if (check) {
    if (check == WIN_SITUATION.DRAW) {
      return AI_WIN_SITUATION_SCORES.DRAW;
    } else if (check == aiPlayer) {
      return AI_WIN_SITUATION_SCORES.WIN;
    } else {
      return AI_WIN_SITUATION_SCORES.LOSE;
    }
  }
  return null;
}
function nextSituations(board) {
  var situs = [];
  for (var i = 0; i < board.length; i++) {
    for (var j = 0; j < board[i].length; j++) {
      if (board[i][j] == MARK_TYPE.EMPTY) {
        situs.push({
          "position": [i, j],
          "eval": null
        });
      }
    }
  }
  return situs;
}
function ai(board, depth, isAI) {
  var evaluation = evalBoard(board);
  var bestState = {
    "position": null,
    "eval": isAI ? -Infinity : Infinity
  };
  if (depth <= 0 || evaluation != null) {
    bestState.eval = evaluation;
    return bestState;
  }
  var situations = nextSituations(board);
  for (var i = 0; i < situations.length; i++) {
    var situation = situations[i];
    var position = situation.position;
    board[position[0]][position[1]] = isAI ? aiPlayer : otherPlayer;
    if (isAI) {
      var state = ai(board, depth - 1, false);
      if (state.eval >= bestState.eval) {
        bestState.eval = state.eval;
        situation.eval = state.eval;
        bestState.position = position;
      }
    } else {
      var _state = ai(board, depth - 1, true);
      if (_state.eval <= bestState.eval) {
        bestState.eval = _state.eval;
        situation.eval = _state.eval;
        bestState.position = position;
      }
    }
    board[position[0]][position[1]] = MARK_TYPE.EMPTY;
  }
  return bestState;
}
function playAi(board) {
  var bestMove = ai(copyBoard(board), aiLevel, true);
  if (bestMove) {
    gameAction(board, bestMove.position);
  }
}
function randRange(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
function getRandomPosition(board) {
  return [randRange(0, board.length - 1), randRange(0, board[0].length - 1)];
}
function runGame(gameMode, size) {
  currentPlayer = PLAYER_NUM.PLAYER_ONE;
  gameInfos.text = "It's the turn of\nplayer 1";
  if (gameMode) currentGameMode = gameMode;
  if (size) {
    sizeBoard[0] = Math.max(3, size[0]);
    sizeBoard[1] = Math.max(3, size[1]);
  }
  createBoard();
  closeAllMenus();
  if (gameMode == GAME_MODE.PLAYER_VS_AI && aiPlayer == PLAYER_NUM.PLAYER_ONE) {
    gameAction(gameBoard, getRandomPosition(gameBoard));
  }
  col.style.set("hidden", false);
}
function closeAllMenus() {
  menu.disable();
  mainMenu.disable();
  menuResult.disable();
  playerVSPlayerMenu.disable();
  playerVSAIMenu.disable();
  col.style.set("hidden", true);
}
function openMainMenu() {
  closeAllMenus();
  mainMenu.enable();
}

// Create scene (containing components) and canvas
var scene = new JGT.Scene(box, col, rowButtons, menu, menuResult, mainMenu, playerVSPlayerMenu, playerVSAIMenu, optionsAILevel, optionsAIFirstPlayer, fpsMeter);
var canvas = new JGT.Canvas(scene, document.getElementById("canvas"), null, null, true);
canvas.appendTo(document.body);
canvas.toggleFullpage();
col.maxHeight = canvas.height;
col.maxWidth = canvas.width;
box.height = canvas.height;
box.width = canvas.width;

// Load pause image and start the canvas rendering
imageLoader.load(["pause.png", "fullscreen.png"], function () {
  pauseImage.loadImage(imageLoader);
  fullscreenImage.loadImage(imageLoader);
  canvas.startDraw(function () {
    col.maxHeight = canvas.height;
    col.maxWidth = canvas.width;
    box.height = canvas.height;
    box.width = canvas.width;
  });
});
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFDRyxJQUFJLENBQUM7QUFDOUJoSSxNQUFNLENBQUNpSSxjQUFjLENBQUMsQ0FBQztBQUV2QnZHLEdBQUcsQ0FBQ3dHLFNBQVMsR0FBR2xJLE1BQU0sQ0FBQ21JLE1BQU07QUFDN0J6RyxHQUFHLENBQUMwRyxRQUFRLEdBQUdwSSxNQUFNLENBQUNxSSxLQUFLO0FBQzNCOUwsR0FBRyxDQUFDNEwsTUFBTSxHQUFHbkksTUFBTSxDQUFDbUksTUFBTTtBQUMxQjVMLEdBQUcsQ0FBQzhMLEtBQUssR0FBR3JJLE1BQU0sQ0FBQ3FJLEtBQUs7O0FBRXhCO0FBQ0F4TSxXQUFXLENBQUN5TSxJQUFJLENBQUMsQ0FBQyxXQUFXLEVBQUUsZ0JBQWdCLENBQUMsRUFBRSxZQUFNO0VBQ3REekwsVUFBVSxDQUFDMEwsU0FBUyxDQUFDMU0sV0FBVyxDQUFDO0VBQ2pDa0IsZUFBZSxDQUFDd0wsU0FBUyxDQUFDMU0sV0FBVyxDQUFDO0VBRXRDbUUsTUFBTSxDQUFDd0ksU0FBUyxDQUFDLFlBQU07SUFDckI5RyxHQUFHLENBQUN3RyxTQUFTLEdBQUdsSSxNQUFNLENBQUNtSSxNQUFNO0lBQzdCekcsR0FBRyxDQUFDMEcsUUFBUSxHQUFHcEksTUFBTSxDQUFDcUksS0FBSztJQUMzQjlMLEdBQUcsQ0FBQzRMLE1BQU0sR0FBR25JLE1BQU0sQ0FBQ21JLE1BQU07SUFDMUI1TCxHQUFHLENBQUM4TCxLQUFLLEdBQUdySSxNQUFNLENBQUNxSSxLQUFLO0VBQzFCLENBQUMsQ0FBQztBQUNKLENBQUMsQ0FBQyxDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vanNnYW1ldG9vbHMvLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vYXJyYXlMaWtlVG9BcnJheS5qcyIsIndlYnBhY2s6Ly9qc2dhbWV0b29scy8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9hcnJheVdpdGhvdXRIb2xlcy5qcyIsIndlYnBhY2s6Ly9qc2dhbWV0b29scy8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9pdGVyYWJsZVRvQXJyYXkuanMiLCJ3ZWJwYWNrOi8vanNnYW1ldG9vbHMvLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vbm9uSXRlcmFibGVTcHJlYWQuanMiLCJ3ZWJwYWNrOi8vanNnYW1ldG9vbHMvLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vdG9Db25zdW1hYmxlQXJyYXkuanMiLCJ3ZWJwYWNrOi8vanNnYW1ldG9vbHMvLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vdW5zdXBwb3J0ZWRJdGVyYWJsZVRvQXJyYXkuanMiLCJ3ZWJwYWNrOi8vanNnYW1ldG9vbHMvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vanNnYW1ldG9vbHMvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL2pzZ2FtZXRvb2xzL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vanNnYW1ldG9vbHMvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9qc2dhbWV0b29scy8uL2V4YW1wbGVzL3NyYy90aWN0YWN0b2UuanMiXSwic291cmNlc0NvbnRlbnQiOlsiZnVuY3Rpb24gX2FycmF5TGlrZVRvQXJyYXkociwgYSkge1xuICAobnVsbCA9PSBhIHx8IGEgPiByLmxlbmd0aCkgJiYgKGEgPSByLmxlbmd0aCk7XG4gIGZvciAodmFyIGUgPSAwLCBuID0gQXJyYXkoYSk7IGUgPCBhOyBlKyspIG5bZV0gPSByW2VdO1xuICByZXR1cm4gbjtcbn1cbmV4cG9ydCB7IF9hcnJheUxpa2VUb0FycmF5IGFzIGRlZmF1bHQgfTsiLCJpbXBvcnQgYXJyYXlMaWtlVG9BcnJheSBmcm9tIFwiLi9hcnJheUxpa2VUb0FycmF5LmpzXCI7XG5mdW5jdGlvbiBfYXJyYXlXaXRob3V0SG9sZXMocikge1xuICBpZiAoQXJyYXkuaXNBcnJheShyKSkgcmV0dXJuIGFycmF5TGlrZVRvQXJyYXkocik7XG59XG5leHBvcnQgeyBfYXJyYXlXaXRob3V0SG9sZXMgYXMgZGVmYXVsdCB9OyIsImZ1bmN0aW9uIF9pdGVyYWJsZVRvQXJyYXkocikge1xuICBpZiAoXCJ1bmRlZmluZWRcIiAhPSB0eXBlb2YgU3ltYm9sICYmIG51bGwgIT0gcltTeW1ib2wuaXRlcmF0b3JdIHx8IG51bGwgIT0gcltcIkBAaXRlcmF0b3JcIl0pIHJldHVybiBBcnJheS5mcm9tKHIpO1xufVxuZXhwb3J0IHsgX2l0ZXJhYmxlVG9BcnJheSBhcyBkZWZhdWx0IH07IiwiZnVuY3Rpb24gX25vbkl0ZXJhYmxlU3ByZWFkKCkge1xuICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiSW52YWxpZCBhdHRlbXB0IHRvIHNwcmVhZCBub24taXRlcmFibGUgaW5zdGFuY2UuXFxuSW4gb3JkZXIgdG8gYmUgaXRlcmFibGUsIG5vbi1hcnJheSBvYmplY3RzIG11c3QgaGF2ZSBhIFtTeW1ib2wuaXRlcmF0b3JdKCkgbWV0aG9kLlwiKTtcbn1cbmV4cG9ydCB7IF9ub25JdGVyYWJsZVNwcmVhZCBhcyBkZWZhdWx0IH07IiwiaW1wb3J0IGFycmF5V2l0aG91dEhvbGVzIGZyb20gXCIuL2FycmF5V2l0aG91dEhvbGVzLmpzXCI7XG5pbXBvcnQgaXRlcmFibGVUb0FycmF5IGZyb20gXCIuL2l0ZXJhYmxlVG9BcnJheS5qc1wiO1xuaW1wb3J0IHVuc3VwcG9ydGVkSXRlcmFibGVUb0FycmF5IGZyb20gXCIuL3Vuc3VwcG9ydGVkSXRlcmFibGVUb0FycmF5LmpzXCI7XG5pbXBvcnQgbm9uSXRlcmFibGVTcHJlYWQgZnJvbSBcIi4vbm9uSXRlcmFibGVTcHJlYWQuanNcIjtcbmZ1bmN0aW9uIF90b0NvbnN1bWFibGVBcnJheShyKSB7XG4gIHJldHVybiBhcnJheVdpdGhvdXRIb2xlcyhyKSB8fCBpdGVyYWJsZVRvQXJyYXkocikgfHwgdW5zdXBwb3J0ZWRJdGVyYWJsZVRvQXJyYXkocikgfHwgbm9uSXRlcmFibGVTcHJlYWQoKTtcbn1cbmV4cG9ydCB7IF90b0NvbnN1bWFibGVBcnJheSBhcyBkZWZhdWx0IH07IiwiaW1wb3J0IGFycmF5TGlrZVRvQXJyYXkgZnJvbSBcIi4vYXJyYXlMaWtlVG9BcnJheS5qc1wiO1xuZnVuY3Rpb24gX3Vuc3VwcG9ydGVkSXRlcmFibGVUb0FycmF5KHIsIGEpIHtcbiAgaWYgKHIpIHtcbiAgICBpZiAoXCJzdHJpbmdcIiA9PSB0eXBlb2YgcikgcmV0dXJuIGFycmF5TGlrZVRvQXJyYXkociwgYSk7XG4gICAgdmFyIHQgPSB7fS50b1N0cmluZy5jYWxsKHIpLnNsaWNlKDgsIC0xKTtcbiAgICByZXR1cm4gXCJPYmplY3RcIiA9PT0gdCAmJiByLmNvbnN0cnVjdG9yICYmICh0ID0gci5jb25zdHJ1Y3Rvci5uYW1lKSwgXCJNYXBcIiA9PT0gdCB8fCBcIlNldFwiID09PSB0ID8gQXJyYXkuZnJvbShyKSA6IFwiQXJndW1lbnRzXCIgPT09IHQgfHwgL14oPzpVaXxJKW50KD86OHwxNnwzMikoPzpDbGFtcGVkKT9BcnJheSQvLnRlc3QodCkgPyBhcnJheUxpa2VUb0FycmF5KHIsIGEpIDogdm9pZCAwO1xuICB9XG59XG5leHBvcnQgeyBfdW5zdXBwb3J0ZWRJdGVyYWJsZVRvQXJyYXkgYXMgZGVmYXVsdCB9OyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0aWYgKCEobW9kdWxlSWQgaW4gX193ZWJwYWNrX21vZHVsZXNfXykpIHtcblx0XHRkZWxldGUgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0XHR2YXIgZSA9IG5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIgKyBtb2R1bGVJZCArIFwiJ1wiKTtcblx0XHRlLmNvZGUgPSAnTU9EVUxFX05PVF9GT1VORCc7XG5cdFx0dGhyb3cgZTtcblx0fVxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCIvKlxuICogQ29weXJpZ2h0IChDKSAyMDIwIEVsaWFzdGlrIChlbGlhc3Rpa3NvZnRzLmNvbSlcbiAqXG4gKiBUaGlzIGZpbGUgaXMgcGFydCBvZiBcIkpTR2FtZVRvb2xzXCIuXG4gKlxuICogXCJKU0dhbWVUb29sc1wiIGlzIGZyZWUgc29mdHdhcmU6IHlvdSBjYW4gcmVkaXN0cmlidXRlIGl0IGFuZC9vciBtb2RpZnlcbiAqIGl0IHVuZGVyIHRoZSB0ZXJtcyBvZiB0aGUgR05VIEdlbmVyYWwgUHVibGljIExpY2Vuc2UgYXMgcHVibGlzaGVkIGJ5XG4gKiB0aGUgRnJlZSBTb2Z0d2FyZSBGb3VuZGF0aW9uLCBlaXRoZXIgdmVyc2lvbiAzIG9mIHRoZSBMaWNlbnNlLCBvclxuICogKGF0IHlvdXIgb3B0aW9uKSBhbnkgbGF0ZXIgdmVyc2lvbi5cbiAqXG4gKiBcIkpTR2FtZVRvb2xzXCIgaXMgZGlzdHJpYnV0ZWQgaW4gdGhlIGhvcGUgdGhhdCBpdCB3aWxsIGJlIHVzZWZ1bCxcbiAqIGJ1dCBXSVRIT1VUIEFOWSBXQVJSQU5UWTsgd2l0aG91dCBldmVuIHRoZSBpbXBsaWVkIHdhcnJhbnR5IG9mXG4gKiBNRVJDSEFOVEFCSUxJVFkgb3IgRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UuICBTZWUgdGhlXG4gKiBHTlUgR2VuZXJhbCBQdWJsaWMgTGljZW5zZSBmb3IgbW9yZSBkZXRhaWxzLlxuICpcbiAqIFlvdSBzaG91bGQgaGF2ZSByZWNlaXZlZCBhIGNvcHkgb2YgdGhlIEdOVSBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlXG4gKiBhbG9uZyB3aXRoIFwiSlNHYW1lVG9vbHNcIi4gIElmIG5vdCwgc2VlIDxodHRwOi8vd3d3LmdudS5vcmcvbGljZW5zZXMvPi5cbiAqL1xuLy8gQ3JlYXRlIGNvbXBvbmVudHNcbmNvbnN0IEpHVCA9IEpTR2FtZVRvb2xzO1xuSkdULkNvbnN0YW50cy5TZXR0aW5nLkZPTlRfRkFNSUxZID0gXCJHYWVndVwiO1xuSkdULkNvbnN0YW50cy5TZXR0aW5nLkZPTlRfU0laRSA9IDM1O1xuXG4vLyBHcmFwaGljIGNvbXBvbmVudHNcbmNvbnN0IGltYWdlTG9hZGVyID0gbmV3IEpHVC5JbWFnZUxvYWRlcigpO1xuXG5jb25zdCBidXR0b25TdHlsZSA9IG5ldyBKR1QuU3R5bGUoeyBcImJhY2tncm91bmRDb2xvclwiOiBcImdyYXlcIiwgXCJib3JkZXJTaXplXCI6IDIsIFwiYm9yZGVyQ29sb3JcIjogXCJibGFja1wiIH0pO1xuY29uc3QgbGFiZWxTdHlsZSA9IG5ldyBKR1QuU3R5bGUoeyBcImZvbnRDb2xvclwiOiBcIndoaXRlXCIsIFwiYWxpZ25lbWVudFwiOiBcImNlbnRlclwiIH0pO1xuY29uc3QgbGFiZWxTdHlsZURlZmF1bHQgPSBuZXcgSkdULlN0eWxlKHsgXCJmb250Q29sb3JcIjogXCJ3aGl0ZVwiIH0pO1xuY29uc3QgYnV0dG9uU3R5bGUyID0gbmV3IEpHVC5TdHlsZSh7IFwiYmFja2dyb3VuZENvbG9yXCI6IFwiIzJlY2M3MVwiLCBcImJhY2tncm91bmRDb2xvckhvdmVyXCI6IFwiIzFhYmM5Y1wiLCBcImJhY2tncm91bmRDb2xvckRvd25cIjogXCIjMTZhMDg1XCIsIFwiYWxpZ25lbWVudFwiOiBcImNlbnRlclwiIH0pO1xuY29uc3QgYnV0dG9uU3R5bGVEZWZhdWx0ID0gbmV3IEpHVC5TdHlsZSh7IFwiYmFja2dyb3VuZENvbG9yXCI6IFwiIzJlY2M3MVwiLCBcImJhY2tncm91bmRDb2xvckhvdmVyXCI6IFwiIzFhYmM5Y1wiLCBcImJhY2tncm91bmRDb2xvckRvd25cIjogXCIjMTZhMDg1XCIgfSk7XG5jb25zdCBidXR0b25TdHlsZVJlZCA9IG5ldyBKR1QuU3R5bGUoeyBcImJhY2tncm91bmRDb2xvclwiOiBcIiNDQzJGMkZcIiwgXCJiYWNrZ3JvdW5kQ29sb3JIb3ZlclwiOiBcIiNGMjM4MzhcIiwgXCJiYWNrZ3JvdW5kQ29sb3JEb3duXCI6IFwiI0E2MjYyNlwiLCBcImFsaWduZW1lbnRcIjogXCJjZW50ZXJcIiB9KTtcbmNvbnN0IGJ1dHRvblN0eWxlUmVkRGVmYXVsdCA9IG5ldyBKR1QuU3R5bGUoeyBcImJhY2tncm91bmRDb2xvclwiOiBcIiNDQzJGMkZcIiwgXCJiYWNrZ3JvdW5kQ29sb3JIb3ZlclwiOiBcIiNGMjM4MzhcIiwgXCJiYWNrZ3JvdW5kQ29sb3JEb3duXCI6IFwiI0E2MjYyNlwiIH0pO1xuXG5jb25zdCBib3ggPSBuZXcgSkdULkJveCgwLCAwLCA4MDAsIDYwMCwgbmV3IEpHVC5TdHlsZSh7IFwiYmFja2dyb3VuZENvbG9yXCI6IFwibGlnaHRncmF5XCIgfSkpO1xuY29uc3QgZ2FtZUluZm9zID0gbmV3IEpHVC5MYWJlbChcIlwiLCBudWxsLCBudWxsLCBuZXcgSkdULlN0eWxlKHsgXCJhbGlnbmVtZW50XCI6IFwiY2VudGVyXCIsIFwiZm9udFNpemVcIjogMzAgfSkpO1xuY29uc3QgZnBzTWV0ZXIgPSBuZXcgSkdULkZQU01ldGVyKGZhbHNlLCBudWxsLCBudWxsLCBuZXcgSkdULlN0eWxlKHsgXCJhbGlnbmVtZW50XCI6IFwicmlnaHRcIiwgXCJ2ZXJ0aWNhbEFsaWduZW1lbnRcIjogXCJib3R0b21cIiwgXCJmb3JlZ3JvdW5kXCI6IHRydWUgfSkpO1xuXG5jb25zdCBwYXVzZUltYWdlID0gbmV3IEpHVC5JbWFnZUNvbnRhaW5lcihcInBhdXNlLnBuZ1wiLCBudWxsLCBudWxsLCA2NCwgNjQsIG5ldyBKR1QuU3R5bGUoeyBcInZlcnRpY2FsQWxpZ25lbWVudFwiOiBcImNlbnRlclwiLCBcImFsaWduZW1lbnRcIjogXCJjZW50ZXJcIiB9KSk7XG5jb25zdCBmdWxsc2NyZWVuSW1hZ2UgPSBuZXcgSkdULkltYWdlQ29udGFpbmVyKFwiZnVsbHNjcmVlbi5wbmdcIiwgbnVsbCwgbnVsbCwgNjQsIDY0LCBuZXcgSkdULlN0eWxlKHsgXCJ2ZXJ0aWNhbEFsaWduZW1lbnRcIjogXCJjZW50ZXJcIiwgXCJhbGlnbmVtZW50XCI6IFwiY2VudGVyXCIgfSkpO1xuY29uc3QgcGF1c2VCdXR0b24gPSBuZXcgSkdULkJ1dHRvbihudWxsLCA1MCwgbnVsbCwgbnVsbCwgbmV3IEpHVC5TdHlsZSh7IFwiYWxpZ25lbWVudFwiOiBcInJpZ2h0XCIsIFwidmVydGljYWxBbGlnbmVtZW50XCI6IFwiY2VudGVyXCIgfSksIG5ldyBKR1QuUm93KDUsIDI1MCwgbnVsbCwgbnVsbCwgbnVsbCwgcGF1c2VJbWFnZSkpO1xuY29uc3QgZnVsbHNjcmVlbkJ1dHRvbiA9IG5ldyBKR1QuQnV0dG9uKG51bGwsIDUwLCBudWxsLCBudWxsLCBuZXcgSkdULlN0eWxlKHsgXCJhbGlnbmVtZW50XCI6IFwibGVmdFwiLCBcInZlcnRpY2FsQWxpZ25lbWVudFwiOiBcImNlbnRlclwiIH0pLCBuZXcgSkdULlJvdyg1LCAyNTAsIG51bGwsIG51bGwsIG51bGwsIGZ1bGxzY3JlZW5JbWFnZSkpO1xuY29uc3Qgcm93QnV0dG9ucyA9IG5ldyBKR1QuUm93KG51bGwsIG51bGwsIG51bGwsIG51bGwsIG5ldyBKR1QuU3R5bGUoeyBcImFsaWduZW1lbnRcIjogXCJyaWdodFwiLCBcInZlcnRpY2FsQWxpZ25lbWVudFwiOiBcInRvcFwiIH0pLCBmdWxsc2NyZWVuQnV0dG9uLCBwYXVzZUJ1dHRvbik7XG5cbi8vIFBhdXNlIG1lbnVcbmNvbnN0IGJ1dHRvbk5ld0dhbWUgPSBuZXcgSkdULkJ1dHRvbig1LCA1LCBudWxsLCBudWxsLCBidXR0b25TdHlsZTIsIG5ldyBKR1QuTGFiZWwoXCJOZXcgZ2FtZVwiLCBudWxsLCBudWxsLCBsYWJlbFN0eWxlKSk7XG5jb25zdCBidXR0b25NZW51MSA9IG5ldyBKR1QuQnV0dG9uKDUsIDUsIG51bGwsIG51bGwsIGJ1dHRvblN0eWxlMiwgbmV3IEpHVC5MYWJlbChcIlJlc2V0IHRoZSBnYW1lXCIsIG51bGwsIG51bGwsIGxhYmVsU3R5bGUpKTtcbmNvbnN0IGJ1dHRvbk1lbnUyID0gbmV3IEpHVC5CdXR0b24oNSwgNSwgbnVsbCwgbnVsbCwgYnV0dG9uU3R5bGVSZWQsIG5ldyBKR1QuTGFiZWwoXCJDbG9zZVwiLCBudWxsLCBudWxsLCBsYWJlbFN0eWxlKSk7XG5jb25zdCBtZW51TGFiZWwgPSBuZXcgSkdULkxhYmVsKFwiUGF1c2UgbWVudVwiLCBudWxsLCBudWxsLCBsYWJlbFN0eWxlKTtcbmNvbnN0IG1lbnUgPSBuZXcgSkdULk1lbnUobnVsbCwgbWVudUxhYmVsLCBidXR0b25OZXdHYW1lLCBidXR0b25NZW51MSwgYnV0dG9uTWVudTIpO1xuXG4vLyBSZXN1bHQgbWVudVxuY29uc3QgYnV0dG9uTmV3R2FtZTIgPSBuZXcgSkdULkJ1dHRvbig1LCA1LCBudWxsLCBudWxsLCBidXR0b25TdHlsZTIsIG5ldyBKR1QuTGFiZWwoXCJOZXcgZ2FtZVwiLCBudWxsLCBudWxsLCBsYWJlbFN0eWxlKSk7XG5jb25zdCBidXR0b25NZW51MyA9IG5ldyBKR1QuQnV0dG9uKDUsIDUsIG51bGwsIG51bGwsIGJ1dHRvblN0eWxlMiwgbmV3IEpHVC5MYWJlbChcIlJlc2V0IHRoZSBnYW1lXCIsIG51bGwsIG51bGwsIGxhYmVsU3R5bGUpKTtcbmNvbnN0IG1lbnVSZXN1bHRMYWJlbCA9IG5ldyBKR1QuTGFiZWwoXCI/Pz9cIiwgbnVsbCwgbnVsbCwgbGFiZWxTdHlsZSk7XG5jb25zdCBtZW51UmVzdWx0ID0gbmV3IEpHVC5NZW51KG51bGwsIG1lbnVSZXN1bHRMYWJlbCwgYnV0dG9uTmV3R2FtZTIsIGJ1dHRvbk1lbnUzKTtcblxuLy8gTWFpbiBtZW51XG5jb25zdCBidXR0b25QbGF5ZXJWU0FJID0gbmV3IEpHVC5CdXR0b24oNSwgNSwgbnVsbCwgbnVsbCwgYnV0dG9uU3R5bGUyLCBuZXcgSkdULkxhYmVsKFwiUGxheWVyIFZTIEFJXCIsIG51bGwsIG51bGwsIGxhYmVsU3R5bGUpKTtcbmNvbnN0IGJ1dHRvblBsYXllclZTUGxheWVyID0gbmV3IEpHVC5CdXR0b24oNSwgNSwgbnVsbCwgbnVsbCwgYnV0dG9uU3R5bGUyLCBuZXcgSkdULkxhYmVsKFwiUGxheWVyIFZTIFBsYXllclwiLCBudWxsLCBudWxsLCBsYWJlbFN0eWxlKSk7XG5jb25zdCBidXR0b25FeGl0ID0gbmV3IEpHVC5CdXR0b24oNSwgNSwgbnVsbCwgbnVsbCwgYnV0dG9uU3R5bGVSZWQsIG5ldyBKR1QuTGFiZWwoXCJFeGl0XCIsIG51bGwsIG51bGwsIGxhYmVsU3R5bGUpKTtcbmNvbnN0IG1haW5NZW51TGFiZWwgPSBuZXcgSkdULkxhYmVsKFwiSlNHYW1lVG9vbHNcXG5UaWMgVGFjIFRvZSBleGFtcGxlXCIsIG51bGwsIG51bGwsIGxhYmVsU3R5bGUpO1xuY29uc3QgbWFpbk1lbnUgPSBuZXcgSkdULk1lbnUobmV3IEpHVC5TdHlsZSh7IFwiYmFja2dyb3VuZENvbG9yXCI6IFwicmdiYSg0NCwgNjIsIDgwLCAxKVwiIH0pLCBtYWluTWVudUxhYmVsLCBidXR0b25QbGF5ZXJWU0FJLCBidXR0b25QbGF5ZXJWU1BsYXllciwgYnV0dG9uRXhpdCk7XG5tYWluTWVudS5lbmFibGUoKTtcblxuLy8gUGxheWVyIFZTIFBsYXllciBzZXR0aW5nc1xuY29uc3QgbGFiZWxQbGF5ZXJWU1BsYXllck1lbnUgPSBuZXcgSkdULkxhYmVsKFwiUGxheWVyIFZTIFBsYXllclwiLCBudWxsLCBudWxsLCBsYWJlbFN0eWxlKTtcbmNvbnN0IGxhYmVsR3JpZFBhcmFtUGxheWVyVlNQbGF5ZXJNZW51ID0gbmV3IEpHVC5MYWJlbChcIkdyaWQgc2l6ZTogXCIsIG51bGwsIG51bGwsIGxhYmVsU3R5bGVEZWZhdWx0KTtcbmNvbnN0IGlucHV0Um93ID0gbmV3IEpHVC5JbnB1dChudWxsLCBudWxsLCA1MCwgbnVsbCwgbnVsbCwgXCIzXCIpO1xuY29uc3QgeFNpZ24gPSBuZXcgSkdULkxhYmVsKFwiw5dcIiwgbnVsbCwgbnVsbCwgbGFiZWxTdHlsZURlZmF1bHQpO1xuY29uc3QgaW5wdXRDb2wgPSBuZXcgSkdULklucHV0KG51bGwsIG51bGwsIDUwLCBudWxsLCBudWxsLCBcIjNcIik7XG5jb25zdCB2YWxpZGF0ZVBsYXllclZTUGxheWVyID0gbmV3IEpHVC5CdXR0b24oNSwgNSwgbnVsbCwgbnVsbCwgYnV0dG9uU3R5bGVEZWZhdWx0LCBuZXcgSkdULkxhYmVsKFwiUGxheVwiLCBudWxsLCBudWxsLCBsYWJlbFN0eWxlKSk7XG5jb25zdCBjYW5jZWxQbGF5ZXJWU1BsYXllciA9IG5ldyBKR1QuQnV0dG9uKDUsIDUsIG51bGwsIG51bGwsIGJ1dHRvblN0eWxlUmVkRGVmYXVsdCwgbmV3IEpHVC5MYWJlbChcIkNhbmNlbFwiLCBudWxsLCBudWxsLCBsYWJlbFN0eWxlKSk7XG5jb25zdCBwbGF5ZXJWU1BsYXllck1lbnUgPSBuZXcgSkdULk1lbnUobmV3IEpHVC5TdHlsZSh7IFwiYmFja2dyb3VuZENvbG9yXCI6IFwicmdiYSg0NCwgNjIsIDgwLCAxKVwiIH0pLCBsYWJlbFBsYXllclZTUGxheWVyTWVudSwgbmV3IEpHVC5Sb3cobnVsbCwgbnVsbCwgbnVsbCwgbnVsbCwgbmV3IEpHVC5TdHlsZSh7IFwiYWxpZ25lbWVudFwiOiBcImNlbnRlclwiLCBcInBhZGRpbmdcIjogMjAgfSksIGxhYmVsR3JpZFBhcmFtUGxheWVyVlNQbGF5ZXJNZW51LCBpbnB1dFJvdywgeFNpZ24sIGlucHV0Q29sKSwgbmV3IEpHVC5Sb3cobnVsbCwgbnVsbCwgbnVsbCwgbnVsbCwgbmV3IEpHVC5TdHlsZSh7IFwiYWxpZ25lbWVudFwiOiBcImNlbnRlclwiLCBcInBhZGRpbmdcIjogMjAgfSksIHZhbGlkYXRlUGxheWVyVlNQbGF5ZXIsIGNhbmNlbFBsYXllclZTUGxheWVyKSk7XG5cbi8vIFBsYXllciBWUyBBSSBzZXR0aW5nc1xuY29uc3QgbGFiZWxQbGF5ZXJWU0FJTWVudSA9IG5ldyBKR1QuTGFiZWwoXCJQbGF5ZXIgVlMgQUlcIiwgbnVsbCwgbnVsbCwgbGFiZWxTdHlsZSk7XG5jb25zdCBsYWJlbEdyaWRQYXJhbVBsYXllclZTQUlNZW51ID0gbmV3IEpHVC5MYWJlbChcIkdyaWQgc2l6ZTogXCIsIG51bGwsIG51bGwsIGxhYmVsU3R5bGVEZWZhdWx0KTtcbmNvbnN0IGlucHV0Um93QUkgPSBuZXcgSkdULklucHV0KG51bGwsIG51bGwsIDUwLCBudWxsLCBudWxsLCBcIjNcIik7XG5jb25zdCB4U2lnbkFJID0gbmV3IEpHVC5MYWJlbChcIsOXXCIsIG51bGwsIG51bGwsIGxhYmVsU3R5bGVEZWZhdWx0KTtcbmNvbnN0IGlucHV0Q29sQUkgPSBuZXcgSkdULklucHV0KG51bGwsIG51bGwsIDUwLCBudWxsLCBudWxsLCBcIjNcIik7XG5jb25zdCBsYWJlbEFJTGV2ZWwgPSBuZXcgSkdULkxhYmVsKFwiQUkgbGV2ZWw6IFwiLCBudWxsLCBudWxsLCBsYWJlbFN0eWxlRGVmYXVsdCk7XG5jb25zdCBvcHRpb25zQUlMZXZlbCA9IG5ldyBKR1QuU2VsZWN0T3B0aW9uc0NvbnRhaW5lcig3NSwgbmV3IEpHVC5TdHlsZSh7IFwiZm9yZWdyb3VuZFwiOiB0cnVlIH0pLCBuZXcgSkdULlNlbGVjdE9wdGlvbihuZXcgSkdULkxhYmVsKFwiTG93XCIpKSwgbmV3IEpHVC5TZWxlY3RPcHRpb24obmV3IEpHVC5MYWJlbChcIk5vcm1hbFwiKSksIG5ldyBKR1QuU2VsZWN0T3B0aW9uKG5ldyBKR1QuTGFiZWwoXCJIaWdoXCIpKSk7XG5jb25zdCBzZWxlY3RBSUxldmVsID0gbmV3IEpHVC5TZWxlY3QoMjU1LCAzMTUsIG51bGwsIG51bGwsIG51bGwsIG9wdGlvbnNBSUxldmVsLCAxKTtcbmNvbnN0IGxhYmVsQUlGaXJzdFBsYXllciA9IG5ldyBKR1QuTGFiZWwoXCJGaXJzdCBwbGF5ZXI6IFwiLCBudWxsLCBudWxsLCBsYWJlbFN0eWxlRGVmYXVsdCk7XG5jb25zdCBvcHRpb25zQUlGaXJzdFBsYXllciA9IG5ldyBKR1QuU2VsZWN0T3B0aW9uc0NvbnRhaW5lcig3NSwgbmV3IEpHVC5TdHlsZSh7IFwiZm9yZWdyb3VuZFwiOiB0cnVlIH0pLCBuZXcgSkdULlNlbGVjdE9wdGlvbihuZXcgSkdULkxhYmVsKFwiWW91XCIpKSwgbmV3IEpHVC5TZWxlY3RPcHRpb24obmV3IEpHVC5MYWJlbChcIkFJXCIpKSk7XG5jb25zdCBzZWxlY3RBSUZpcnN0UGxheWVyID0gbmV3IEpHVC5TZWxlY3QoMjU1LCAzMTUsIG51bGwsIG51bGwsIG51bGwsIG9wdGlvbnNBSUZpcnN0UGxheWVyLCAxKTtcbmNvbnN0IHZhbGlkYXRlUGxheWVyVlNBSSA9IG5ldyBKR1QuQnV0dG9uKDUsIDUsIG51bGwsIG51bGwsIGJ1dHRvblN0eWxlRGVmYXVsdCwgbmV3IEpHVC5MYWJlbChcIlBsYXlcIiwgbnVsbCwgbnVsbCwgbGFiZWxTdHlsZSkpO1xuY29uc3QgY2FuY2VsUGxheWVyVlNBSSA9IG5ldyBKR1QuQnV0dG9uKDUsIDUsIG51bGwsIG51bGwsIGJ1dHRvblN0eWxlUmVkRGVmYXVsdCwgbmV3IEpHVC5MYWJlbChcIkNhbmNlbFwiLCBudWxsLCBudWxsLCBsYWJlbFN0eWxlKSk7XG5jb25zdCBwbGF5ZXJWU0FJTWVudSA9IG5ldyBKR1QuTWVudShuZXcgSkdULlN0eWxlKHsgXCJiYWNrZ3JvdW5kQ29sb3JcIjogXCJyZ2JhKDQ0LCA2MiwgODAsIDEpXCIgfSksIGxhYmVsUGxheWVyVlNBSU1lbnUsIG5ldyBKR1QuUm93KG51bGwsIG51bGwsIG51bGwsIG51bGwsIG5ldyBKR1QuU3R5bGUoeyBcImFsaWduZW1lbnRcIjogXCJjZW50ZXJcIiwgXCJwYWRkaW5nXCI6IDIwIH0pLCBsYWJlbEdyaWRQYXJhbVBsYXllclZTQUlNZW51LCBpbnB1dFJvd0FJLCB4U2lnbkFJLCBpbnB1dENvbEFJKSwgbmV3IEpHVC5Sb3cobnVsbCwgbnVsbCwgbnVsbCwgbnVsbCwgbmV3IEpHVC5TdHlsZSh7IFwiYWxpZ25lbWVudFwiOiBcImNlbnRlclwiLCBcInBhZGRpbmdcIjogMjAgfSksIGxhYmVsQUlMZXZlbCwgc2VsZWN0QUlMZXZlbCksIG5ldyBKR1QuUm93KG51bGwsIG51bGwsIG51bGwsIG51bGwsIG5ldyBKR1QuU3R5bGUoeyBcImFsaWduZW1lbnRcIjogXCJjZW50ZXJcIiwgXCJwYWRkaW5nXCI6IDIwIH0pLCBsYWJlbEFJRmlyc3RQbGF5ZXIsIHNlbGVjdEFJRmlyc3RQbGF5ZXIpLCBuZXcgSkdULlJvdyhudWxsLCBudWxsLCBudWxsLCBudWxsLCBuZXcgSkdULlN0eWxlKHsgXCJhbGlnbmVtZW50XCI6IFwiY2VudGVyXCIsIFwicGFkZGluZ1wiOiAyMCB9KSwgdmFsaWRhdGVQbGF5ZXJWU0FJLCBjYW5jZWxQbGF5ZXJWU0FJKSk7XG5cbnBhdXNlQnV0dG9uLmFkZENsaWNrQWN0aW9uKCgpID0+IHtcbiAgbWVudS5lbmFibGUoKTtcbn0pO1xuXG5mdWxsc2NyZWVuQnV0dG9uLmFkZENsaWNrQWN0aW9uKCgpID0+IHtcbiAgY2FudmFzLnRvZ2dsZUZ1bGxzY3JlZW4oKTtcbn0pO1xuXG5idXR0b25NZW51Mi5hZGRDbGlja0FjdGlvbigoKSA9PiB7XG4gIG1lbnUuZGlzYWJsZSgpO1xufSk7XG5cbmJ1dHRvbkV4aXQuYWRkQ2xpY2tBY3Rpb24oKCkgPT4ge1xuICBsb2NhdGlvbi5ocmVmID0gXCIuL2luZGV4Lmh0bWxcIjtcbn0pO1xuXG5idXR0b25OZXdHYW1lLmFkZENsaWNrQWN0aW9uKG9wZW5NYWluTWVudSk7XG5idXR0b25OZXdHYW1lMi5hZGRDbGlja0FjdGlvbihvcGVuTWFpbk1lbnUpO1xuXG52YWxpZGF0ZVBsYXllclZTUGxheWVyLmFkZENsaWNrQWN0aW9uKCgpID0+IHtcbiAgcnVuR2FtZShHQU1FX01PREUuUExBWUVSX1ZTX1BMQVlFUiwgW2lucHV0Um93LnRleHQudHJpbSgpID09IFwiXCIgfHwgaXNOYU4oaW5wdXRSb3cudGV4dCkgPyAzIDogcGFyc2VJbnQoaW5wdXRSb3cudGV4dCksIGlucHV0Q29sLnRleHQudHJpbSgpID09IFwiXCIgfHwgaXNOYU4oaW5wdXRDb2wudGV4dCkgPyAzIDogcGFyc2VJbnQoaW5wdXRDb2wudGV4dCldKTtcbn0pO1xuXG5idXR0b25QbGF5ZXJWU1BsYXllci5hZGRDbGlja0FjdGlvbigoKSA9PiB7XG4gIG1haW5NZW51LmRpc2FibGUoKTtcbiAgcGxheWVyVlNQbGF5ZXJNZW51LmVuYWJsZSgpO1xufSk7XG5cbmNhbmNlbFBsYXllclZTUGxheWVyLmFkZENsaWNrQWN0aW9uKCgpID0+IHtcbiAgbWFpbk1lbnUuZW5hYmxlKCk7XG4gIHBsYXllclZTUGxheWVyTWVudS5kaXNhYmxlKCk7XG59KTtcblxuYnV0dG9uUGxheWVyVlNBSS5hZGRDbGlja0FjdGlvbigoKSA9PiB7XG4gIG1haW5NZW51LmRpc2FibGUoKTtcbiAgcGxheWVyVlNBSU1lbnUuZW5hYmxlKCk7XG59KTtcblxudmFsaWRhdGVQbGF5ZXJWU0FJLmFkZENsaWNrQWN0aW9uKCgpID0+IHtcbiAgYWlQbGF5ZXIgPSBQTEFZRVJfTlVNLlBMQVlFUl9UV087XG4gIG90aGVyUGxheWVyID0gUExBWUVSX05VTS5QTEFZRVJfT05FO1xuICBhaUxldmVsID0gQUlfTEVWRUwuTk9STUFMO1xuXG4gIHN3aXRjaChzZWxlY3RBSUxldmVsLnRleHQpIHtcbiAgICBjYXNlIFwiSGlnaFwiOlxuICAgICAgYWlMZXZlbCA9IEFJX0xFVkVMLkhJR0g7XG4gICAgICBicmVhaztcbiAgICBjYXNlIFwiTm9ybWFsXCI6XG4gICAgICBhaUxldmVsID0gQUlfTEVWRUwuTk9STUFMO1xuICAgICAgYnJlYWs7XG4gICAgY2FzZSBcIkxvd1wiOlxuICAgICAgYWlMZXZlbCA9IEFJX0xFVkVMLkxPVztcbiAgICAgIGJyZWFrO1xuICB9XG5cbiAgc3dpdGNoKHNlbGVjdEFJRmlyc3RQbGF5ZXIudGV4dCkge1xuICAgIGNhc2UgXCJZb3VcIjpcbiAgICAgIGFpUGxheWVyID0gUExBWUVSX05VTS5QTEFZRVJfVFdPO1xuICAgICAgb3RoZXJQbGF5ZXIgPSBQTEFZRVJfTlVNLlBMQVlFUl9PTkU7XG4gICAgICBicmVhaztcbiAgICBjYXNlIFwiQUlcIjpcbiAgICAgIGFpUGxheWVyID0gUExBWUVSX05VTS5QTEFZRVJfT05FO1xuICAgICAgb3RoZXJQbGF5ZXIgPSBQTEFZRVJfTlVNLlBMQVlFUl9UV087XG4gICAgICBicmVhaztcbiAgfVxuXG4gIHJ1bkdhbWUoR0FNRV9NT0RFLlBMQVlFUl9WU19BSSwgW2lucHV0Um93QUkudGV4dC50cmltKCkgPT0gXCJcIiB8fCBpc05hTihpbnB1dFJvd0FJLnRleHQpID8gMyA6IHBhcnNlSW50KGlucHV0Um93QUkudGV4dCksIGlucHV0Q29sQUkudGV4dC50cmltKCkgPT0gXCJcIiB8fCBpc05hTihpbnB1dENvbEFJLnRleHQpID8gMyA6IHBhcnNlSW50KGlucHV0Q29sQUkudGV4dCldKTtcbn0pO1xuXG5jYW5jZWxQbGF5ZXJWU0FJLmFkZENsaWNrQWN0aW9uKCgpID0+IHtcbiAgbWFpbk1lbnUuZW5hYmxlKCk7XG4gIHBsYXllclZTQUlNZW51LmRpc2FibGUoKTtcbn0pO1xuXG5idXR0b25NZW51MS5hZGRDbGlja0FjdGlvbigoKSA9PiBydW5HYW1lKGN1cnJlbnRHYW1lTW9kZSwgc2l6ZUJvYXJkKSk7XG5idXR0b25NZW51My5hZGRDbGlja0FjdGlvbigoKSA9PiBydW5HYW1lKGN1cnJlbnRHYW1lTW9kZSwgc2l6ZUJvYXJkKSk7XG5cbi8vIEJvYXJkIGNvbFxuY29uc3QgY29sID0gbmV3IEpHVC5Db2wobnVsbCwgbnVsbCwgbnVsbCwgbnVsbCwgbmV3IEpHVC5TdHlsZSh7IFwiYWxpZ25lbWVudFwiOiBcImNlbnRlclwiLCBcInZlcnRpY2FsQWxpZ25lbWVudFwiOiBcImNlbnRlclwiIH0pKTtcblxuLy8gRXZlbnRzLCBnYW1lIHZhcmlhYmxlcyBhbmQgbG9naWNcbmNvbnN0IE1BUktfVFlQRSA9IHsgQ1JPU1M6IFwiY3Jvc3NcIiwgQ0lSQ0xFOiBcImNpcmNsZVwiLCBFTVBUWTogXCJlbXB0eVwiIH07XG5jb25zdCBQTEFZRVJfTlVNID0geyBQTEFZRVJfT05FOiBNQVJLX1RZUEUuQ1JPU1MsIFBMQVlFUl9UV086IE1BUktfVFlQRS5DSVJDTEUgfTtcbmNvbnN0IFdJTl9TSVRVQVRJT04gPSB7IFBMQVlFUl9PTkU6IFBMQVlFUl9OVU0uUExBWUVSX09ORSwgUExBWUVSX1RXTzogUExBWUVSX05VTS5QTEFZRVJfVFdPLCBEUkFXOiAwIH07XG5jb25zdCBHQU1FX01PREUgPSB7IFBMQVlFUl9WU19BSTogMSwgUExBWUVSX1ZTX1BMQVlFUjogMiB9O1xuY29uc3QgQUlfTEVWRUwgPSB7IEhJR0g6IDEwLCBOT1JNQUw6IDYsIExPVzogNCB9O1xuY29uc3QgQUlfV0lOX1NJVFVBVElPTl9TQ09SRVMgPSB7IFdJTjogMTAsIExPU0U6IC0xMCwgRFJBVzogMCB9O1xuY29uc3QgREVGQVVMVF9NQVhfREVQVEhfTUlOSU1BWCA9IEFJX0xFVkVMLkhJR0g7XG5cbmxldCBjdXJyZW50UGxheWVyID0gUExBWUVSX05VTS5QTEFZRVJfT05FO1xubGV0IGFpUGxheWVyID0gUExBWUVSX05VTS5QTEFZRVJfVFdPO1xubGV0IG90aGVyUGxheWVyID0gUExBWUVSX05VTS5QTEFZRVJfT05FO1xubGV0IGN1cnJlbnRHYW1lTW9kZSA9IEdBTUVfTU9ERS5QTEFZRVJfVlNfQUk7XG5sZXQgYWlMZXZlbCA9IEFJX0xFVkVMLkhJR0g7XG5sZXQgc2l6ZUJvYXJkID0gWzMsIDNdO1xubGV0IGJ1dHRvbnMgPSBbXTtcbmxldCBidXR0b25zQm9hcmQgPSBbXTtcbmxldCBnYW1lQm9hcmQgPSBbXTtcblxuZnVuY3Rpb24gY3JlYXRlQm9hcmQoKSB7XG4gIGNvbC5jbGVhcigpO1xuICBjb2wuYWRkKGdhbWVJbmZvcyk7XG4gIGdhbWVCb2FyZCA9IFtdO1xuICBidXR0b25zID0gW107XG4gIGJ1dHRvbnNCb2FyZCA9IFtdO1xuXG4gIGZvcihsZXQgaSA9IDA7IGkgPCBzaXplQm9hcmRbMF07IGkrKykge1xuICAgIGNvbnN0IHJvdyA9IG5ldyBKR1QuUm93KCk7XG4gICAgY29uc3QgbGluZSA9IFtdO1xuICAgIGNvbnN0IGxpbmVCdXR0b24gPSBbXTtcbiAgXG4gICAgZm9yKGxldCBqID0gMDsgaiA8IHNpemVCb2FyZFsxXTsgaisrKSB7XG4gICAgICBjb25zdCBidXR0b24gPSBuZXcgSkdULkJ1dHRvbihudWxsLCBudWxsLCA3NSwgNzUsIGJ1dHRvblN0eWxlKTtcbiAgICAgIGJ1dHRvbnMucHVzaChidXR0b24pO1xuICAgICAgbGluZUJ1dHRvbi5wdXNoKGJ1dHRvbik7XG4gICAgICByb3cuYWRkKGJ1dHRvbik7XG4gICAgICBsaW5lLnB1c2goTUFSS19UWVBFLkVNUFRZKTtcbiAgICB9XG5cbiAgICBnYW1lQm9hcmQucHVzaChsaW5lKTtcbiAgICBidXR0b25zQm9hcmQucHVzaChsaW5lQnV0dG9uKTtcbiAgICBjb2wuYWRkKHJvdyk7XG4gIH1cblxuICBidXR0b25zLmZvckVhY2goKGJ1dHRvbiwgaSkgPT4gYnV0dG9uLmFkZENsaWNrQWN0aW9uKCgpID0+IHtcbiAgICBjb25zdCBjdXJyZW50Q2VsbFBvc2l0aW9uID0gW01hdGguZmxvb3IoaSAvIHNpemVCb2FyZFsxXSksIGkgJSBzaXplQm9hcmRbMV1dO1xuICAgIGdhbWVBY3Rpb24oZ2FtZUJvYXJkLCBjdXJyZW50Q2VsbFBvc2l0aW9uKTtcbiAgfSkpO1xufVxuXG5mdW5jdGlvbiB0b1N0cihib2FyZCkge1xuICBsZXQgc3RyID0gXCJcIjtcblxuICBmb3IobGV0IGkgPSAwOyBpIDwgYm9hcmQubGVuZ3RoOyBpKyspIHtcbiAgICBmb3IobGV0IGogPSAwOyBqIDwgYm9hcmRbaV0ubGVuZ3RoOyBqKyspIHtcbiAgICAgIGlmKGJvYXJkW2ldW2pdID09IE1BUktfVFlQRS5FTVBUWSkge1xuICAgICAgICBzdHIgKz0gXCIgICBcIjtcbiAgICAgIH0gZWxzZSBpZihib2FyZFtpXVtqXSA9PSBNQVJLX1RZUEUuQ0lSQ0xFKSB7XG4gICAgICAgIHN0ciArPSBcIiBvIFwiO1xuICAgICAgfSBlbHNlIGlmKGJvYXJkW2ldW2pdID09IE1BUktfVFlQRS5DUk9TUykge1xuICAgICAgICBzdHIgKz0gXCIgeCBcIjtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBzdHIgKz0gXCJcXG5cIjtcbiAgfVxuXG4gIHJldHVybiBzdHI7XG59XG5cbmZ1bmN0aW9uIGNoZWNrV2luSG9yaXooYm9hcmQpIHtcbiAgbGV0IGNvdW50Q3Jvc3MgPSAwO1xuICBsZXQgY291bnRDaXJjbGUgPSAwO1xuXG4gIGZvcihsZXQgaSA9IDA7IGkgPCBib2FyZC5sZW5ndGg7IGkrKykge1xuICAgIGNvbnN0IGN1cnJlbnRMaW5lID0gYm9hcmRbaV07XG5cbiAgICBmb3IobGV0IGogPSAwOyBqIDwgY3VycmVudExpbmUubGVuZ3RoOyBqKyspIHtcbiAgICAgIGlmKGN1cnJlbnRMaW5lW2pdID09IE1BUktfVFlQRS5DUk9TUykge1xuICAgICAgICBjb3VudENyb3NzKys7XG4gICAgICAgIGNvdW50Q2lyY2xlID0gMDtcbiAgICAgIH0gZWxzZSBpZihjdXJyZW50TGluZVtqXSA9PSBNQVJLX1RZUEUuQ0lSQ0xFKSB7XG4gICAgICAgIGNvdW50Q2lyY2xlKys7XG4gICAgICAgIGNvdW50Q3Jvc3MgPSAwO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgY291bnRDaXJjbGUgPSAwO1xuICAgICAgICBjb3VudENyb3NzID0gMDtcbiAgICAgIH1cblxuICAgICAgaWYoY291bnRDcm9zcyA+PSAzKSB7XG4gICAgICAgIHJldHVybiBQTEFZRVJfTlVNLlBMQVlFUl9PTkU7XG4gICAgICB9IGVsc2UgaWYoY291bnRDaXJjbGUgPj0gMykge1xuICAgICAgICByZXR1cm4gUExBWUVSX05VTS5QTEFZRVJfVFdPO1xuICAgICAgfVxuICAgIH1cblxuICAgIGNvdW50Q3Jvc3MgPSAwO1xuICAgIGNvdW50Q2lyY2xlID0gMDtcbiAgfVxuXG4gIHJldHVybiBudWxsO1xufVxuXG5mdW5jdGlvbiBjaGVja1dpblZlcnRpKGJvYXJkKSB7XG4gIGxldCBjb3VudENyb3NzID0gMDtcbiAgbGV0IGNvdW50Q2lyY2xlID0gMDtcblxuICBmb3IobGV0IGkgPSAwOyBpIDwgYm9hcmRbMF0ubGVuZ3RoOyBpKyspIHtcbiAgICBmb3IobGV0IGogPSAwOyBqIDwgYm9hcmQubGVuZ3RoOyBqKyspIHtcbiAgICAgICAgY29uc3QgY3VycmVudENhc2UgPSBib2FyZFtqXVtpXTtcblxuICAgICAgICBpZihjdXJyZW50Q2FzZSA9PSBNQVJLX1RZUEUuQ1JPU1MpIHtcbiAgICAgICAgICBjb3VudENyb3NzKys7XG4gICAgICAgICAgY291bnRDaXJjbGUgPSAwO1xuICAgICAgICB9IGVsc2UgaWYoY3VycmVudENhc2UgPT0gTUFSS19UWVBFLkNJUkNMRSkge1xuICAgICAgICAgIGNvdW50Q2lyY2xlKys7XG4gICAgICAgICAgY291bnRDcm9zcyA9IDA7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgY291bnRDaXJjbGUgPSAwO1xuICAgICAgICAgIGNvdW50Q3Jvc3MgPSAwO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYoY291bnRDcm9zcyA+PSAzKSB7XG4gICAgICAgICAgcmV0dXJuIFBMQVlFUl9OVU0uUExBWUVSX09ORTtcbiAgICAgICAgfSBlbHNlIGlmKGNvdW50Q2lyY2xlID49IDMpIHtcbiAgICAgICAgICByZXR1cm4gUExBWUVSX05VTS5QTEFZRVJfVFdPO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGNvdW50Q3Jvc3MgPSAwO1xuICAgICAgY291bnRDaXJjbGUgPSAwO1xuICB9XG5cbiAgcmV0dXJuIG51bGw7XG59XG5cbmZ1bmN0aW9uIGNoZWNrV2luRGlhZ28oYm9hcmQpIHtcbiAgZm9yKGxldCBpID0gMDsgaSA8IGJvYXJkLmxlbmd0aDsgaSsrKSB7XG4gICAgY29uc3QgY3VycmVudExpbmUgPSBib2FyZFtpXTtcblxuICAgIGZvcihsZXQgaiA9IDA7IGogPCBjdXJyZW50TGluZS5sZW5ndGg7IGorKykge1xuICAgICAgICBjb25zdCBjZWxsc1RvQ2hlY2sgPSBbW2osIGldLCBbaiAtIDEsIGkgLSAxXSwgW2ogLSAyLCBpIC0gMl1dO1xuICAgICAgICBjb25zdCBjZWxsc1RvQ2hlY2tUd28gPSBbW2osIGldLCBbaiArIDEsIGkgKyAxXSwgW2ogKyAyLCBpICsgMl1dO1xuICAgICAgICBjb25zdCBjZWxsc1RvQ2hlY2tBbnRpID0gW1tqLCBpXSwgW2ogLSAxLCBpICsgMV0sIFtqIC0gMiwgaSArIDJdXTtcbiAgICAgICAgY29uc3QgY2VsbHNUb0NoZWNrQW50aVR3byA9IFtbaiwgaV0sIFtqICsgMSwgaSAtIDFdLCBbaiArIDIsIGkgLSAyXV07XG5cbiAgICAgICAgY29uc3QgY2hlY2tDZWxscyA9IGNoZWNrQ2FzZXNEaWFnbyhib2FyZCwgY3VycmVudExpbmUsIGNlbGxzVG9DaGVjayk7XG4gICAgICAgIGNvbnN0IGNoZWNrQ2VsbHNBbnRpID0gY2hlY2tDYXNlc0RpYWdvKGJvYXJkLCBjdXJyZW50TGluZSwgY2VsbHNUb0NoZWNrQW50aSk7XG4gICAgICAgIGNvbnN0IGNoZWNrQ2VsbHNUd28gPSBjaGVja0Nhc2VzRGlhZ28oYm9hcmQsIGN1cnJlbnRMaW5lLCBjZWxsc1RvQ2hlY2tUd28pO1xuICAgICAgICBjb25zdCBjaGVja0NlbGxzQW50aVR3byA9IGNoZWNrQ2FzZXNEaWFnbyhib2FyZCwgY3VycmVudExpbmUsIGNlbGxzVG9DaGVja0FudGlUd28pO1xuXG4gICAgICAgIGlmKGNoZWNrQ2VsbHMpIHJldHVybiBjaGVja0NlbGxzO1xuICAgICAgICBpZihjaGVja0NlbGxzQW50aSkgcmV0dXJuIGNoZWNrQ2VsbHNBbnRpO1xuICAgICAgICBpZihjaGVja0NlbGxzVHdvKSByZXR1cm4gY2hlY2tDZWxsc1R3bztcbiAgICAgICAgaWYoY2hlY2tDZWxsc0FudGlUd28pIHJldHVybiBjaGVja0NlbGxzQW50aVR3bztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gbnVsbDtcbn1cblxuZnVuY3Rpb24gY2hlY2tDYXNlc0RpYWdvKGJvYXJkLCBjdXJyZW50TGluZSwgY2VsbHNUb0NoZWNrKSB7XG4gIGxldCBjb3VudENyb3NzID0gMDtcbiAgbGV0IGNvdW50Q2lyY2xlID0gMDtcblxuICBmb3IobGV0IGsgPSAwOyBrIDwgY2VsbHNUb0NoZWNrLmxlbmd0aDsgaysrKSB7XG4gICAgY29uc3QgYyA9IGNlbGxzVG9DaGVja1trXTtcblxuICAgIGlmKGNbMV0gPj0gMCAmJiBjWzFdIDwgYm9hcmQubGVuZ3RoICYmIGNbMF0gPj0gMCAmJiBjWzBdIDwgY3VycmVudExpbmUubGVuZ3RoKSB7XG4gICAgICBjb25zdCBjZWxsID0gYm9hcmRbY1sxXV1bY1swXV07XG5cbiAgICAgIGlmKGNlbGwgPT0gTUFSS19UWVBFLkNST1NTKSB7XG4gICAgICAgIGNvdW50Q3Jvc3MrKztcbiAgICAgICAgY291bnRDaXJjbGUgPSAwO1xuICAgICAgfSBlbHNlIGlmKGNlbGwgPT0gTUFSS19UWVBFLkNJUkNMRSkge1xuICAgICAgICBjb3VudENpcmNsZSsrO1xuICAgICAgICBjb3VudENyb3NzID0gMDtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGNvdW50Q2lyY2xlID0gMDtcbiAgICAgICAgY291bnRDcm9zcyA9IDA7XG4gICAgICB9XG5cbiAgICAgIGlmKGNvdW50Q3Jvc3MgPj0gMykge1xuICAgICAgICByZXR1cm4gUExBWUVSX05VTS5QTEFZRVJfT05FO1xuICAgICAgfSBlbHNlIGlmKGNvdW50Q2lyY2xlID49IDMpIHtcbiAgICAgICAgcmV0dXJuIFBMQVlFUl9OVU0uUExBWUVSX1RXTztcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cblxuZnVuY3Rpb24gY2hlY2tGdWxsKGJvYXJkKSB7XG4gIGZvcihsZXQgaSA9IDA7IGkgPCBib2FyZFswXS5sZW5ndGg7IGkrKykge1xuICAgIGNvbnN0IGN1cnJlbnRMaW5lID0gYm9hcmRbaV07XG5cbiAgICBmb3IobGV0IGogPSAwOyBqIDwgY3VycmVudExpbmUubGVuZ3RoOyBqKyspIHtcbiAgICAgIGNvbnN0IGN1cnJlbnRDYXNlID0gY3VycmVudExpbmVbal07XG5cbiAgICAgIGlmKGN1cnJlbnRDYXNlID09IE1BUktfVFlQRS5FTVBUWSkge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHRydWU7XG59XG5cbmZ1bmN0aW9uIGNoZWNrV2luKGJvYXJkKSB7XG4gIGNvbnN0IGNoZWNrSG9yaXogPSBjaGVja1dpbkhvcml6KGJvYXJkKTtcbiAgY29uc3QgY2hlY2tWZXJ0aSA9IGNoZWNrV2luVmVydGkoYm9hcmQpO1xuICBjb25zdCBjaGVja0RpYWcgPSBjaGVja1dpbkRpYWdvKGJvYXJkKTtcbiAgY29uc3QgY2hlY2tJc0Z1bGwgPSBjaGVja0Z1bGwoYm9hcmQpO1xuXG4gIGlmKGNoZWNrSG9yaXogPT0gUExBWUVSX05VTS5QTEFZRVJfT05FIHx8IGNoZWNrVmVydGkgPT0gUExBWUVSX05VTS5QTEFZRVJfT05FIHx8IGNoZWNrRGlhZyA9PSBQTEFZRVJfTlVNLlBMQVlFUl9PTkUpIHtcbiAgICByZXR1cm4gV0lOX1NJVFVBVElPTi5QTEFZRVJfT05FO1xuICB9IGVsc2UgaWYoY2hlY2tIb3JpeiA9PSBQTEFZRVJfTlVNLlBMQVlFUl9UV08gfHwgY2hlY2tWZXJ0aSA9PSBQTEFZRVJfTlVNLlBMQVlFUl9UV08gfHwgY2hlY2tEaWFnID09IFBMQVlFUl9OVU0uUExBWUVSX1RXTykge1xuICAgIHJldHVybiBXSU5fU0lUVUFUSU9OLlBMQVlFUl9UV087XG4gIH0gZWxzZSBpZihjaGVja0lzRnVsbCkge1xuICAgIHJldHVybiBXSU5fU0lUVUFUSU9OLkRSQVc7XG4gIH1cbn1cblxuZnVuY3Rpb24gZGlzcGxheVJlc3VsdEdhbWUoYm9hcmQpIHtcbiAgY29uc3Qgd2lubmVyID0gY2hlY2tXaW4oYm9hcmQpO1xuXG4gIGlmKHdpbm5lciA9PSBXSU5fU0lUVUFUSU9OLlBMQVlFUl9PTkUpIHtcbiAgICBtZW51UmVzdWx0TGFiZWwudGV4dCA9IFwiUGxheWVyIDEgd29uIVwiO1xuICAgIG1lbnVSZXN1bHQuZW5hYmxlKCk7XG4gIH0gZWxzZSBpZih3aW5uZXIgPT0gV0lOX1NJVFVBVElPTi5QTEFZRVJfVFdPKSB7XG4gICAgbWVudVJlc3VsdExhYmVsLnRleHQgPSBcIlBsYXllciAyIHdvbiFcIjtcbiAgICBtZW51UmVzdWx0LmVuYWJsZSgpO1xuICB9IGVsc2UgaWYod2lubmVyID09IFdJTl9TSVRVQVRJT04uRFJBVykge1xuICAgIG1lbnVSZXN1bHRMYWJlbC50ZXh0ID0gXCJEcmF3IVwiO1xuICAgIG1lbnVSZXN1bHQuZW5hYmxlKCk7XG4gIH1cbn1cblxuZnVuY3Rpb24gZ2FtZUFjdGlvbihib2FyZCwgcG9zaXRpb24pIHtcbiAgaWYocG9zaXRpb24gIT0gbnVsbCkge1xuICAgIGNvbnN0IGN1cnJlbnRDZWxsID0gYm9hcmRbcG9zaXRpb25bMF1dW3Bvc2l0aW9uWzFdXTtcbiAgICBsZXQgbWFyayA9IG51bGw7XG5cbiAgICBpZihjdXJyZW50Q2VsbCA9PSBNQVJLX1RZUEUuRU1QVFkpIHtcbiAgICAgIGlmKGN1cnJlbnRQbGF5ZXIgPT0gUExBWUVSX05VTS5QTEFZRVJfT05FKSB7XG4gICAgICAgIG1hcmsgPSBuZXcgSkdULkNyb3NzKG51bGwsIG51bGwsIDI1LCAyNSwgbmV3IEpHVC5TdHlsZSh7IFwiYWxpZ25lbWVudFwiOiBcImNlbnRlclwiLCBcInZlcnRpY2FsQWxpZ25lbWVudFwiOiBcImNlbnRlclwiLCBcImxpbmVXaWR0aFwiOiA1LCBcImNvbG9yXCI6IFwid2hpdGVcIiB9KSk7XG4gICAgICAgIGN1cnJlbnRQbGF5ZXIgPSBQTEFZRVJfTlVNLlBMQVlFUl9UV087XG4gICAgICAgIGdhbWVJbmZvcy50ZXh0ID0gXCJJdCdzIHRoZSB0dXJuIG9mXFxucGxheWVyIDJcIjtcbiAgICAgICAgYm9hcmRbcG9zaXRpb25bMF1dW3Bvc2l0aW9uWzFdXSA9IFBMQVlFUl9OVU0uUExBWUVSX09ORTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIG1hcmsgPSBuZXcgSkdULkNpcmNsZShudWxsLCBudWxsLCAyNSwgbmV3IEpHVC5TdHlsZSh7IFwiYWxpZ25lbWVudFwiOiBcImNlbnRlclwiLCBcInZlcnRpY2FsQWxpZ25lbWVudFwiOiBcImNlbnRlclwiLCBcImxpbmVXaWR0aFwiOiA1LCBcImNvbG9yXCI6IFwid2hpdGVcIiwgXCJmaWxsXCI6IGZhbHNlIH0pKTtcbiAgICAgICAgY3VycmVudFBsYXllciA9IFBMQVlFUl9OVU0uUExBWUVSX09ORTtcbiAgICAgICAgZ2FtZUluZm9zLnRleHQgPSBcIkl0J3MgdGhlIHR1cm4gb2ZcXG5wbGF5ZXIgMVwiO1xuICAgICAgICBib2FyZFtwb3NpdGlvblswXV1bcG9zaXRpb25bMV1dID0gUExBWUVSX05VTS5QTEFZRVJfVFdPO1xuICAgICAgfVxuXG4gICAgICBpZihtYXJrKSBidXR0b25zQm9hcmRbcG9zaXRpb25bMF1dW3Bvc2l0aW9uWzFdXS5zZXQobWFyayk7XG4gICAgXG4gICAgICBpZihjdXJyZW50R2FtZU1vZGUgPT0gR0FNRV9NT0RFLlBMQVlFUl9WU19BSSAmJiBjdXJyZW50UGxheWVyID09IGFpUGxheWVyKSB7XG4gICAgICAgIHBsYXlBaShib2FyZCk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgZGlzcGxheVJlc3VsdEdhbWUoYm9hcmQpO1xufVxuXG4vKiBGdW5jdGlvbnMgdXNlZCBmb3IgdGhlIEFJXG4gIFVzZSB0aGUgbWluaW1heCBhbGdvcml0aG1cbiAgVGhlIFBMQVlFUl9UV08gaXMgYWx3YXlzIHRoZSBhaSAqL1xuZnVuY3Rpb24gY29weUJvYXJkKGJvYXJkVG9Db3B5KSB7XG4gIGNvbnN0IGdhbWVCb2FyZCA9IFtdO1xuXG4gIGZvcihsZXQgaSA9IDA7IGkgPCBib2FyZFRvQ29weS5sZW5ndGg7IGkrKykge1xuICAgIGdhbWVCb2FyZC5wdXNoKFtdKTtcbiAgICBnYW1lQm9hcmRbaV0gPSBbLi4uYm9hcmRUb0NvcHlbaV1dO1xuICB9XG5cbiAgcmV0dXJuIGdhbWVCb2FyZDtcbn1cblxuZnVuY3Rpb24gZXZhbEJvYXJkKGJvYXJkKSB7XG4gIGNvbnN0IGNoZWNrID0gY2hlY2tXaW4oYm9hcmQpO1xuXG4gIGlmKGNoZWNrKSB7XG4gICAgaWYoY2hlY2sgPT0gV0lOX1NJVFVBVElPTi5EUkFXKSB7XG4gICAgICByZXR1cm4gQUlfV0lOX1NJVFVBVElPTl9TQ09SRVMuRFJBVztcbiAgICB9IGVsc2UgaWYoY2hlY2sgPT0gYWlQbGF5ZXIpIHtcbiAgICAgIHJldHVybiBBSV9XSU5fU0lUVUFUSU9OX1NDT1JFUy5XSU47XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiBBSV9XSU5fU0lUVUFUSU9OX1NDT1JFUy5MT1NFO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBudWxsO1xufVxuXG5mdW5jdGlvbiBuZXh0U2l0dWF0aW9ucyhib2FyZCkge1xuICBjb25zdCBzaXR1cyA9IFtdO1xuXG4gIGZvcihsZXQgaSA9IDA7IGkgPCBib2FyZC5sZW5ndGg7IGkrKykge1xuICAgIGZvcihsZXQgaiA9IDA7IGogPCBib2FyZFtpXS5sZW5ndGg7IGorKykge1xuICAgICAgaWYoYm9hcmRbaV1bal0gPT0gTUFSS19UWVBFLkVNUFRZKSB7XG4gICAgICAgIHNpdHVzLnB1c2goe1xuICAgICAgICAgIFwicG9zaXRpb25cIjogW2ksIGpdLFxuICAgICAgICAgIFwiZXZhbFwiOiBudWxsXG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiBzaXR1cztcbn1cblxuZnVuY3Rpb24gYWkoYm9hcmQsIGRlcHRoLCBpc0FJKSB7XG4gIGNvbnN0IGV2YWx1YXRpb24gPSBldmFsQm9hcmQoYm9hcmQpO1xuXG4gIGxldCBiZXN0U3RhdGUgPSB7XG4gICAgXCJwb3NpdGlvblwiOiBudWxsLFxuICAgIFwiZXZhbFwiOiBpc0FJID8gLUluZmluaXR5IDogSW5maW5pdHlcbiAgfTtcblxuICBpZihkZXB0aCA8PSAwIHx8IGV2YWx1YXRpb24gIT0gbnVsbCkge1xuICAgIGJlc3RTdGF0ZS5ldmFsID0gZXZhbHVhdGlvbjtcbiAgICByZXR1cm4gYmVzdFN0YXRlO1xuICB9XG5cbiAgY29uc3Qgc2l0dWF0aW9ucyA9IG5leHRTaXR1YXRpb25zKGJvYXJkKTtcblxuICBmb3IobGV0IGkgPSAwOyBpIDwgc2l0dWF0aW9ucy5sZW5ndGg7IGkrKykge1xuICAgIGNvbnN0IHNpdHVhdGlvbiA9IHNpdHVhdGlvbnNbaV07XG4gICAgY29uc3QgcG9zaXRpb24gPSBzaXR1YXRpb24ucG9zaXRpb247XG4gICAgYm9hcmRbcG9zaXRpb25bMF1dW3Bvc2l0aW9uWzFdXSA9IGlzQUkgPyBhaVBsYXllciA6IG90aGVyUGxheWVyO1xuXG4gICAgaWYoaXNBSSkge1xuICAgICAgY29uc3Qgc3RhdGUgPSBhaShib2FyZCwgZGVwdGggLSAxLCBmYWxzZSk7XG5cbiAgICAgIGlmKHN0YXRlLmV2YWwgPj0gYmVzdFN0YXRlLmV2YWwpIHtcbiAgICAgICAgYmVzdFN0YXRlLmV2YWwgPSBzdGF0ZS5ldmFsO1xuICAgICAgICBzaXR1YXRpb24uZXZhbCA9IHN0YXRlLmV2YWw7XG4gICAgICAgIGJlc3RTdGF0ZS5wb3NpdGlvbiA9IHBvc2l0aW9uO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBjb25zdCBzdGF0ZSA9IGFpKGJvYXJkLCBkZXB0aCAtIDEsIHRydWUpO1xuXG4gICAgICBpZihzdGF0ZS5ldmFsIDw9IGJlc3RTdGF0ZS5ldmFsKSB7XG4gICAgICAgIGJlc3RTdGF0ZS5ldmFsID0gc3RhdGUuZXZhbDtcbiAgICAgICAgc2l0dWF0aW9uLmV2YWwgPSBzdGF0ZS5ldmFsO1xuICAgICAgICBiZXN0U3RhdGUucG9zaXRpb24gPSBwb3NpdGlvbjtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBib2FyZFtwb3NpdGlvblswXV1bcG9zaXRpb25bMV1dID0gTUFSS19UWVBFLkVNUFRZO1xuICB9XG5cbiAgcmV0dXJuIGJlc3RTdGF0ZTtcbn1cblxuZnVuY3Rpb24gcGxheUFpKGJvYXJkKSB7XG4gIGNvbnN0IGJlc3RNb3ZlID0gYWkoY29weUJvYXJkKGJvYXJkKSwgYWlMZXZlbCwgdHJ1ZSk7XG5cbiAgaWYoYmVzdE1vdmUpIHtcbiAgICBnYW1lQWN0aW9uKGJvYXJkLCBiZXN0TW92ZS5wb3NpdGlvbik7XG4gIH1cbn1cblxuZnVuY3Rpb24gcmFuZFJhbmdlKG1pbiwgbWF4KSB7XG4gIHJldHVybiBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAobWF4IC0gbWluICsgMSkpICsgbWluO1xufVxuXG5mdW5jdGlvbiBnZXRSYW5kb21Qb3NpdGlvbihib2FyZCkge1xuICByZXR1cm4gW3JhbmRSYW5nZSgwLCBib2FyZC5sZW5ndGggLSAxKSwgcmFuZFJhbmdlKDAsIGJvYXJkWzBdLmxlbmd0aCAtIDEpXTtcbn1cblxuZnVuY3Rpb24gcnVuR2FtZShnYW1lTW9kZSwgc2l6ZSkge1xuICBjdXJyZW50UGxheWVyID0gUExBWUVSX05VTS5QTEFZRVJfT05FO1xuICBnYW1lSW5mb3MudGV4dCA9IFwiSXQncyB0aGUgdHVybiBvZlxcbnBsYXllciAxXCI7XG4gIGlmKGdhbWVNb2RlKSBjdXJyZW50R2FtZU1vZGUgPSBnYW1lTW9kZTtcblxuICBpZihzaXplKSB7XG4gICAgc2l6ZUJvYXJkWzBdID0gTWF0aC5tYXgoMywgc2l6ZVswXSk7XG4gICAgc2l6ZUJvYXJkWzFdID0gTWF0aC5tYXgoMywgc2l6ZVsxXSk7XG4gIH1cblxuICBjcmVhdGVCb2FyZCgpO1xuICBjbG9zZUFsbE1lbnVzKCk7XG5cbiAgaWYoZ2FtZU1vZGUgPT0gR0FNRV9NT0RFLlBMQVlFUl9WU19BSSAmJiBhaVBsYXllciA9PSBQTEFZRVJfTlVNLlBMQVlFUl9PTkUpIHtcbiAgICBnYW1lQWN0aW9uKGdhbWVCb2FyZCwgZ2V0UmFuZG9tUG9zaXRpb24oZ2FtZUJvYXJkKSk7XG4gIH1cblxuICBjb2wuc3R5bGUuc2V0KFwiaGlkZGVuXCIsIGZhbHNlKTtcbn1cblxuZnVuY3Rpb24gY2xvc2VBbGxNZW51cygpIHtcbiAgbWVudS5kaXNhYmxlKCk7XG4gIG1haW5NZW51LmRpc2FibGUoKTtcbiAgbWVudVJlc3VsdC5kaXNhYmxlKCk7XG4gIHBsYXllclZTUGxheWVyTWVudS5kaXNhYmxlKCk7XG4gIHBsYXllclZTQUlNZW51LmRpc2FibGUoKTtcbiAgY29sLnN0eWxlLnNldChcImhpZGRlblwiLCB0cnVlKTtcbn1cblxuZnVuY3Rpb24gb3Blbk1haW5NZW51KCkge1xuICBjbG9zZUFsbE1lbnVzKCk7XG4gIG1haW5NZW51LmVuYWJsZSgpO1xufVxuXG4vLyBDcmVhdGUgc2NlbmUgKGNvbnRhaW5pbmcgY29tcG9uZW50cykgYW5kIGNhbnZhc1xuY29uc3Qgc2NlbmUgPSBuZXcgSkdULlNjZW5lKGJveCwgY29sLCByb3dCdXR0b25zLCBtZW51LCBtZW51UmVzdWx0LCBtYWluTWVudSwgcGxheWVyVlNQbGF5ZXJNZW51LCBwbGF5ZXJWU0FJTWVudSwgb3B0aW9uc0FJTGV2ZWwsIG9wdGlvbnNBSUZpcnN0UGxheWVyLCBmcHNNZXRlcik7XG5jb25zdCBjYW52YXMgPSBuZXcgSkdULkNhbnZhcyhzY2VuZSwgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjYW52YXNcIiksIG51bGwsIG51bGwsIHRydWUpO1xuY2FudmFzLmFwcGVuZFRvKGRvY3VtZW50LmJvZHkpO1xuY2FudmFzLnRvZ2dsZUZ1bGxwYWdlKCk7XG5cbmNvbC5tYXhIZWlnaHQgPSBjYW52YXMuaGVpZ2h0O1xuY29sLm1heFdpZHRoID0gY2FudmFzLndpZHRoO1xuYm94LmhlaWdodCA9IGNhbnZhcy5oZWlnaHQ7XG5ib3gud2lkdGggPSBjYW52YXMud2lkdGg7XG5cbi8vIExvYWQgcGF1c2UgaW1hZ2UgYW5kIHN0YXJ0IHRoZSBjYW52YXMgcmVuZGVyaW5nXG5pbWFnZUxvYWRlci5sb2FkKFtcInBhdXNlLnBuZ1wiLCBcImZ1bGxzY3JlZW4ucG5nXCJdLCAoKSA9PiB7XG4gIHBhdXNlSW1hZ2UubG9hZEltYWdlKGltYWdlTG9hZGVyKTtcbiAgZnVsbHNjcmVlbkltYWdlLmxvYWRJbWFnZShpbWFnZUxvYWRlcik7XG4gIFxuICBjYW52YXMuc3RhcnREcmF3KCgpID0+IHtcbiAgICBjb2wubWF4SGVpZ2h0ID0gY2FudmFzLmhlaWdodDtcbiAgICBjb2wubWF4V2lkdGggPSBjYW52YXMud2lkdGg7XG4gICAgYm94LmhlaWdodCA9IGNhbnZhcy5oZWlnaHQ7XG4gICAgYm94LndpZHRoID0gY2FudmFzLndpZHRoO1xuICB9KTtcbn0pOyJdLCJuYW1lcyI6WyJKR1QiLCJKU0dhbWVUb29scyIsIkNvbnN0YW50cyIsIlNldHRpbmciLCJGT05UX0ZBTUlMWSIsIkZPTlRfU0laRSIsImltYWdlTG9hZGVyIiwiSW1hZ2VMb2FkZXIiLCJidXR0b25TdHlsZSIsIlN0eWxlIiwibGFiZWxTdHlsZSIsImxhYmVsU3R5bGVEZWZhdWx0IiwiYnV0dG9uU3R5bGUyIiwiYnV0dG9uU3R5bGVEZWZhdWx0IiwiYnV0dG9uU3R5bGVSZWQiLCJidXR0b25TdHlsZVJlZERlZmF1bHQiLCJib3giLCJCb3giLCJnYW1lSW5mb3MiLCJMYWJlbCIsImZwc01ldGVyIiwiRlBTTWV0ZXIiLCJwYXVzZUltYWdlIiwiSW1hZ2VDb250YWluZXIiLCJmdWxsc2NyZWVuSW1hZ2UiLCJwYXVzZUJ1dHRvbiIsIkJ1dHRvbiIsIlJvdyIsImZ1bGxzY3JlZW5CdXR0b24iLCJyb3dCdXR0b25zIiwiYnV0dG9uTmV3R2FtZSIsImJ1dHRvbk1lbnUxIiwiYnV0dG9uTWVudTIiLCJtZW51TGFiZWwiLCJtZW51IiwiTWVudSIsImJ1dHRvbk5ld0dhbWUyIiwiYnV0dG9uTWVudTMiLCJtZW51UmVzdWx0TGFiZWwiLCJtZW51UmVzdWx0IiwiYnV0dG9uUGxheWVyVlNBSSIsImJ1dHRvblBsYXllclZTUGxheWVyIiwiYnV0dG9uRXhpdCIsIm1haW5NZW51TGFiZWwiLCJtYWluTWVudSIsImVuYWJsZSIsImxhYmVsUGxheWVyVlNQbGF5ZXJNZW51IiwibGFiZWxHcmlkUGFyYW1QbGF5ZXJWU1BsYXllck1lbnUiLCJpbnB1dFJvdyIsIklucHV0IiwieFNpZ24iLCJpbnB1dENvbCIsInZhbGlkYXRlUGxheWVyVlNQbGF5ZXIiLCJjYW5jZWxQbGF5ZXJWU1BsYXllciIsInBsYXllclZTUGxheWVyTWVudSIsImxhYmVsUGxheWVyVlNBSU1lbnUiLCJsYWJlbEdyaWRQYXJhbVBsYXllclZTQUlNZW51IiwiaW5wdXRSb3dBSSIsInhTaWduQUkiLCJpbnB1dENvbEFJIiwibGFiZWxBSUxldmVsIiwib3B0aW9uc0FJTGV2ZWwiLCJTZWxlY3RPcHRpb25zQ29udGFpbmVyIiwiU2VsZWN0T3B0aW9uIiwic2VsZWN0QUlMZXZlbCIsIlNlbGVjdCIsImxhYmVsQUlGaXJzdFBsYXllciIsIm9wdGlvbnNBSUZpcnN0UGxheWVyIiwic2VsZWN0QUlGaXJzdFBsYXllciIsInZhbGlkYXRlUGxheWVyVlNBSSIsImNhbmNlbFBsYXllclZTQUkiLCJwbGF5ZXJWU0FJTWVudSIsImFkZENsaWNrQWN0aW9uIiwiY2FudmFzIiwidG9nZ2xlRnVsbHNjcmVlbiIsImRpc2FibGUiLCJsb2NhdGlvbiIsImhyZWYiLCJvcGVuTWFpbk1lbnUiLCJydW5HYW1lIiwiR0FNRV9NT0RFIiwiUExBWUVSX1ZTX1BMQVlFUiIsInRleHQiLCJ0cmltIiwiaXNOYU4iLCJwYXJzZUludCIsImFpUGxheWVyIiwiUExBWUVSX05VTSIsIlBMQVlFUl9UV08iLCJvdGhlclBsYXllciIsIlBMQVlFUl9PTkUiLCJhaUxldmVsIiwiQUlfTEVWRUwiLCJOT1JNQUwiLCJISUdIIiwiTE9XIiwiUExBWUVSX1ZTX0FJIiwiY3VycmVudEdhbWVNb2RlIiwic2l6ZUJvYXJkIiwiY29sIiwiQ29sIiwiTUFSS19UWVBFIiwiQ1JPU1MiLCJDSVJDTEUiLCJFTVBUWSIsIldJTl9TSVRVQVRJT04iLCJEUkFXIiwiQUlfV0lOX1NJVFVBVElPTl9TQ09SRVMiLCJXSU4iLCJMT1NFIiwiREVGQVVMVF9NQVhfREVQVEhfTUlOSU1BWCIsImN1cnJlbnRQbGF5ZXIiLCJidXR0b25zIiwiYnV0dG9uc0JvYXJkIiwiZ2FtZUJvYXJkIiwiY3JlYXRlQm9hcmQiLCJjbGVhciIsImFkZCIsImkiLCJyb3ciLCJsaW5lIiwibGluZUJ1dHRvbiIsImoiLCJidXR0b24iLCJwdXNoIiwiZm9yRWFjaCIsImN1cnJlbnRDZWxsUG9zaXRpb24iLCJNYXRoIiwiZmxvb3IiLCJnYW1lQWN0aW9uIiwidG9TdHIiLCJib2FyZCIsInN0ciIsImxlbmd0aCIsImNoZWNrV2luSG9yaXoiLCJjb3VudENyb3NzIiwiY291bnRDaXJjbGUiLCJjdXJyZW50TGluZSIsImNoZWNrV2luVmVydGkiLCJjdXJyZW50Q2FzZSIsImNoZWNrV2luRGlhZ28iLCJjZWxsc1RvQ2hlY2siLCJjZWxsc1RvQ2hlY2tUd28iLCJjZWxsc1RvQ2hlY2tBbnRpIiwiY2VsbHNUb0NoZWNrQW50aVR3byIsImNoZWNrQ2VsbHMiLCJjaGVja0Nhc2VzRGlhZ28iLCJjaGVja0NlbGxzQW50aSIsImNoZWNrQ2VsbHNUd28iLCJjaGVja0NlbGxzQW50aVR3byIsImsiLCJjIiwiY2VsbCIsImNoZWNrRnVsbCIsImNoZWNrV2luIiwiY2hlY2tIb3JpeiIsImNoZWNrVmVydGkiLCJjaGVja0RpYWciLCJjaGVja0lzRnVsbCIsImRpc3BsYXlSZXN1bHRHYW1lIiwid2lubmVyIiwicG9zaXRpb24iLCJjdXJyZW50Q2VsbCIsIm1hcmsiLCJDcm9zcyIsIkNpcmNsZSIsInNldCIsInBsYXlBaSIsImNvcHlCb2FyZCIsImJvYXJkVG9Db3B5IiwiX3RvQ29uc3VtYWJsZUFycmF5IiwiZXZhbEJvYXJkIiwiY2hlY2siLCJuZXh0U2l0dWF0aW9ucyIsInNpdHVzIiwiYWkiLCJkZXB0aCIsImlzQUkiLCJldmFsdWF0aW9uIiwiYmVzdFN0YXRlIiwiSW5maW5pdHkiLCJldmFsIiwic2l0dWF0aW9ucyIsInNpdHVhdGlvbiIsInN0YXRlIiwiYmVzdE1vdmUiLCJyYW5kUmFuZ2UiLCJtaW4iLCJtYXgiLCJyYW5kb20iLCJnZXRSYW5kb21Qb3NpdGlvbiIsImdhbWVNb2RlIiwic2l6ZSIsImNsb3NlQWxsTWVudXMiLCJzdHlsZSIsInNjZW5lIiwiU2NlbmUiLCJDYW52YXMiLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwiYXBwZW5kVG8iLCJib2R5IiwidG9nZ2xlRnVsbHBhZ2UiLCJtYXhIZWlnaHQiLCJoZWlnaHQiLCJtYXhXaWR0aCIsIndpZHRoIiwibG9hZCIsImxvYWRJbWFnZSIsInN0YXJ0RHJhdyJdLCJzb3VyY2VSb290IjoiIn0=