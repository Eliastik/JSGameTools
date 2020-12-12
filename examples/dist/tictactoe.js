/******/ (function(modules) { // webpackBootstrap
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./examples/src/tictactoe.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./examples/src/tictactoe.js":
/*!***********************************!*\
  !*** ./examples/src/tictactoe.js ***!
  \***********************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/toConsumableArray */ "./node_modules/@babel/runtime/helpers/toConsumableArray.js");
/* harmony import */ var _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__);


/*
 * Copyright (C) 2020 Eliastik (eliastiksofts.com)
 *
 * This file is part of "JSGameTools".
 *
 * "JSGameTools" is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
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
JGT.Constants.Setting.FONT_SIZE = 35; // Graphic components

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
}), fullscreenButton, pauseButton); // Pause menu

var buttonNewGame = new JGT.Button(5, 5, null, null, buttonStyle2, new JGT.Label("New game", null, null, labelStyle));
var buttonMenu1 = new JGT.Button(5, 5, null, null, buttonStyle2, new JGT.Label("Reset the game", null, null, labelStyle));
var buttonMenu2 = new JGT.Button(5, 5, null, null, buttonStyleRed, new JGT.Label("Close", null, null, labelStyle));
var menuLabel = new JGT.Label("Pause menu", null, null, labelStyle);
var menu = new JGT.Menu(null, menuLabel, buttonNewGame, buttonMenu1, buttonMenu2); // Result menu

var buttonNewGame2 = new JGT.Button(5, 5, null, null, buttonStyle2, new JGT.Label("New game", null, null, labelStyle));
var buttonMenu3 = new JGT.Button(5, 5, null, null, buttonStyle2, new JGT.Label("Reset the game", null, null, labelStyle));
var menuResultLabel = new JGT.Label("???", null, null, labelStyle);
var menuResult = new JGT.Menu(null, menuResultLabel, buttonNewGame2, buttonMenu3); // Main menu

var buttonPlayerVSAI = new JGT.Button(5, 5, null, null, buttonStyle2, new JGT.Label("Player VS AI", null, null, labelStyle));
var buttonPlayerVSPlayer = new JGT.Button(5, 5, null, null, buttonStyle2, new JGT.Label("Player VS Player", null, null, labelStyle));
var buttonExit = new JGT.Button(5, 5, null, null, buttonStyleRed, new JGT.Label("Exit", null, null, labelStyle));
var mainMenuLabel = new JGT.Label("JSGameTools\nTic Tac Toe example", null, null, labelStyle);
var mainMenu = new JGT.Menu(new JGT.Style({
  "backgroundColor": "rgba(44, 62, 80, 1)"
}), mainMenuLabel, buttonPlayerVSAI, buttonPlayerVSPlayer, buttonExit);
mainMenu.enable(); // Player VS Player settings

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
}), validatePlayerVSPlayer, cancelPlayerVSPlayer)); // Player VS AI settings

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
}); // Board col

var col = new JGT.Col(null, null, null, null, new JGT.Style({
  "alignement": "center",
  "verticalAlignement": "center"
})); // Events, game variables and logic

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
    gameBoard[i] = _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0___default()(boardToCopy[i]);
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
} // Create scene (containing components) and canvas


var scene = new JGT.Scene(box, col, rowButtons, menu, menuResult, mainMenu, playerVSPlayerMenu, playerVSAIMenu, optionsAILevel, optionsAIFirstPlayer, fpsMeter);
var canvas = new JGT.Canvas(scene, document.getElementById("canvas"), null, null, true);
canvas.appendTo(document.body);
canvas.toggleFullpage();
col.maxHeight = canvas.height;
col.maxWidth = canvas.width;
box.height = canvas.height;
box.width = canvas.width; // Load pause image and start the canvas rendering

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

/***/ }),

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

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vZXhhbXBsZXMvc3JjL3RpY3RhY3RvZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9hcnJheUxpa2VUb0FycmF5LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2FycmF5V2l0aG91dEhvbGVzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2l0ZXJhYmxlVG9BcnJheS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9ub25JdGVyYWJsZVNwcmVhZC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy90b0NvbnN1bWFibGVBcnJheS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy91bnN1cHBvcnRlZEl0ZXJhYmxlVG9BcnJheS5qcyJdLCJuYW1lcyI6WyJKR1QiLCJKU0dhbWVUb29scyIsIkNvbnN0YW50cyIsIlNldHRpbmciLCJGT05UX0ZBTUlMWSIsIkZPTlRfU0laRSIsImltYWdlTG9hZGVyIiwiSW1hZ2VMb2FkZXIiLCJidXR0b25TdHlsZSIsIlN0eWxlIiwibGFiZWxTdHlsZSIsImxhYmVsU3R5bGVEZWZhdWx0IiwiYnV0dG9uU3R5bGUyIiwiYnV0dG9uU3R5bGVEZWZhdWx0IiwiYnV0dG9uU3R5bGVSZWQiLCJidXR0b25TdHlsZVJlZERlZmF1bHQiLCJib3giLCJCb3giLCJnYW1lSW5mb3MiLCJMYWJlbCIsImZwc01ldGVyIiwiRlBTTWV0ZXIiLCJwYXVzZUltYWdlIiwiSW1hZ2VDb250YWluZXIiLCJmdWxsc2NyZWVuSW1hZ2UiLCJwYXVzZUJ1dHRvbiIsIkJ1dHRvbiIsIlJvdyIsImZ1bGxzY3JlZW5CdXR0b24iLCJyb3dCdXR0b25zIiwiYnV0dG9uTmV3R2FtZSIsImJ1dHRvbk1lbnUxIiwiYnV0dG9uTWVudTIiLCJtZW51TGFiZWwiLCJtZW51IiwiTWVudSIsImJ1dHRvbk5ld0dhbWUyIiwiYnV0dG9uTWVudTMiLCJtZW51UmVzdWx0TGFiZWwiLCJtZW51UmVzdWx0IiwiYnV0dG9uUGxheWVyVlNBSSIsImJ1dHRvblBsYXllclZTUGxheWVyIiwiYnV0dG9uRXhpdCIsIm1haW5NZW51TGFiZWwiLCJtYWluTWVudSIsImVuYWJsZSIsImxhYmVsUGxheWVyVlNQbGF5ZXJNZW51IiwibGFiZWxHcmlkUGFyYW1QbGF5ZXJWU1BsYXllck1lbnUiLCJpbnB1dFJvdyIsIklucHV0IiwieFNpZ24iLCJpbnB1dENvbCIsInZhbGlkYXRlUGxheWVyVlNQbGF5ZXIiLCJjYW5jZWxQbGF5ZXJWU1BsYXllciIsInBsYXllclZTUGxheWVyTWVudSIsImxhYmVsUGxheWVyVlNBSU1lbnUiLCJsYWJlbEdyaWRQYXJhbVBsYXllclZTQUlNZW51IiwiaW5wdXRSb3dBSSIsInhTaWduQUkiLCJpbnB1dENvbEFJIiwibGFiZWxBSUxldmVsIiwib3B0aW9uc0FJTGV2ZWwiLCJTZWxlY3RPcHRpb25zQ29udGFpbmVyIiwiU2VsZWN0T3B0aW9uIiwic2VsZWN0QUlMZXZlbCIsIlNlbGVjdCIsImxhYmVsQUlGaXJzdFBsYXllciIsIm9wdGlvbnNBSUZpcnN0UGxheWVyIiwic2VsZWN0QUlGaXJzdFBsYXllciIsInZhbGlkYXRlUGxheWVyVlNBSSIsImNhbmNlbFBsYXllclZTQUkiLCJwbGF5ZXJWU0FJTWVudSIsImFkZENsaWNrQWN0aW9uIiwiY2FudmFzIiwidG9nZ2xlRnVsbHNjcmVlbiIsImRpc2FibGUiLCJsb2NhdGlvbiIsImhyZWYiLCJvcGVuTWFpbk1lbnUiLCJydW5HYW1lIiwiR0FNRV9NT0RFIiwiUExBWUVSX1ZTX1BMQVlFUiIsInRleHQiLCJ0cmltIiwiaXNOYU4iLCJwYXJzZUludCIsImFpUGxheWVyIiwiUExBWUVSX05VTSIsIlBMQVlFUl9UV08iLCJvdGhlclBsYXllciIsIlBMQVlFUl9PTkUiLCJhaUxldmVsIiwiQUlfTEVWRUwiLCJOT1JNQUwiLCJISUdIIiwiTE9XIiwiUExBWUVSX1ZTX0FJIiwiY3VycmVudEdhbWVNb2RlIiwic2l6ZUJvYXJkIiwiY29sIiwiQ29sIiwiTUFSS19UWVBFIiwiQ1JPU1MiLCJDSVJDTEUiLCJFTVBUWSIsIldJTl9TSVRVQVRJT04iLCJEUkFXIiwiQUlfV0lOX1NJVFVBVElPTl9TQ09SRVMiLCJXSU4iLCJMT1NFIiwiREVGQVVMVF9NQVhfREVQVEhfTUlOSU1BWCIsImN1cnJlbnRQbGF5ZXIiLCJidXR0b25zIiwiYnV0dG9uc0JvYXJkIiwiZ2FtZUJvYXJkIiwiY3JlYXRlQm9hcmQiLCJjbGVhciIsImFkZCIsImkiLCJyb3ciLCJsaW5lIiwibGluZUJ1dHRvbiIsImoiLCJidXR0b24iLCJwdXNoIiwiZm9yRWFjaCIsImN1cnJlbnRDZWxsUG9zaXRpb24iLCJNYXRoIiwiZmxvb3IiLCJnYW1lQWN0aW9uIiwidG9TdHIiLCJib2FyZCIsInN0ciIsImxlbmd0aCIsImNoZWNrV2luSG9yaXoiLCJjb3VudENyb3NzIiwiY291bnRDaXJjbGUiLCJjdXJyZW50TGluZSIsImNoZWNrV2luVmVydGkiLCJjdXJyZW50Q2FzZSIsImNoZWNrV2luRGlhZ28iLCJjZWxsc1RvQ2hlY2siLCJjZWxsc1RvQ2hlY2tUd28iLCJjZWxsc1RvQ2hlY2tBbnRpIiwiY2VsbHNUb0NoZWNrQW50aVR3byIsImNoZWNrQ2VsbHMiLCJjaGVja0Nhc2VzRGlhZ28iLCJjaGVja0NlbGxzQW50aSIsImNoZWNrQ2VsbHNUd28iLCJjaGVja0NlbGxzQW50aVR3byIsImsiLCJjIiwiY2VsbCIsImNoZWNrRnVsbCIsImNoZWNrV2luIiwiY2hlY2tIb3JpeiIsImNoZWNrVmVydGkiLCJjaGVja0RpYWciLCJjaGVja0lzRnVsbCIsImRpc3BsYXlSZXN1bHRHYW1lIiwid2lubmVyIiwicG9zaXRpb24iLCJjdXJyZW50Q2VsbCIsIm1hcmsiLCJDcm9zcyIsIkNpcmNsZSIsInNldCIsInBsYXlBaSIsImNvcHlCb2FyZCIsImJvYXJkVG9Db3B5IiwiZXZhbEJvYXJkIiwiY2hlY2siLCJuZXh0U2l0dWF0aW9ucyIsInNpdHVzIiwiYWkiLCJkZXB0aCIsImlzQUkiLCJldmFsdWF0aW9uIiwiYmVzdFN0YXRlIiwiSW5maW5pdHkiLCJldmFsIiwic2l0dWF0aW9ucyIsInNpdHVhdGlvbiIsInN0YXRlIiwiYmVzdE1vdmUiLCJyYW5kUmFuZ2UiLCJtaW4iLCJtYXgiLCJyYW5kb20iLCJnZXRSYW5kb21Qb3NpdGlvbiIsImdhbWVNb2RlIiwic2l6ZSIsImNsb3NlQWxsTWVudXMiLCJzdHlsZSIsInNjZW5lIiwiU2NlbmUiLCJDYW52YXMiLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwiYXBwZW5kVG8iLCJib2R5IiwidG9nZ2xlRnVsbHBhZ2UiLCJtYXhIZWlnaHQiLCJoZWlnaHQiLCJtYXhXaWR0aCIsIndpZHRoIiwibG9hZCIsImxvYWRJbWFnZSIsInN0YXJ0RHJhdyJdLCJtYXBwaW5ncyI6IjtRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EseUNBQXlDLGlDQUFpQztRQUMxRSxnSEFBZ0gsbUJBQW1CLEVBQUU7UUFDckk7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwyQkFBMkIsMEJBQTBCLEVBQUU7UUFDdkQs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cUJ6TSxXQUFyQjtBQUNBa0IsaUJBQWUsQ0FBQ3VMLFNBQWhCLENBQTBCek0sV0FBMUI7QUFFQW1FLFFBQU0sQ0FBQ3VJLFNBQVAsQ0FBaUIsWUFBTTtBQUNyQjdHLE9BQUcsQ0FBQ3VHLFNBQUosR0FBZ0JqSSxNQUFNLENBQUNrSSxNQUF2QjtBQUNBeEcsT0FBRyxDQUFDeUcsUUFBSixHQUFlbkksTUFBTSxDQUFDb0ksS0FBdEI7QUFDQTdMLE9BQUcsQ0FBQzJMLE1BQUosR0FBYWxJLE1BQU0sQ0FBQ2tJLE1BQXBCO0FBQ0EzTCxPQUFHLENBQUM2TCxLQUFKLEdBQVlwSSxNQUFNLENBQUNvSSxLQUFuQjtBQUNELEdBTEQ7QUFNRCxDQVZELEU7Ozs7Ozs7Ozs7O0FDOWtCQTtBQUNBOztBQUVBLHdDQUF3QyxTQUFTO0FBQ2pEO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQSxtQzs7Ozs7Ozs7Ozs7QUNWQSx1QkFBdUIsbUJBQU8sQ0FBQyxxRkFBb0I7O0FBRW5EO0FBQ0E7QUFDQTs7QUFFQSxvQzs7Ozs7Ozs7Ozs7QUNOQTtBQUNBO0FBQ0E7O0FBRUEsa0M7Ozs7Ozs7Ozs7O0FDSkE7QUFDQTtBQUNBOztBQUVBLG9DOzs7Ozs7Ozs7OztBQ0pBLHdCQUF3QixtQkFBTyxDQUFDLHVGQUFxQjs7QUFFckQsc0JBQXNCLG1CQUFPLENBQUMsbUZBQW1COztBQUVqRCxpQ0FBaUMsbUJBQU8sQ0FBQyx5R0FBOEI7O0FBRXZFLHdCQUF3QixtQkFBTyxDQUFDLHVGQUFxQjs7QUFFckQ7QUFDQTtBQUNBOztBQUVBLG9DOzs7Ozs7Ozs7OztBQ1pBLHVCQUF1QixtQkFBTyxDQUFDLHFGQUFvQjs7QUFFbkQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSw2QyIsImZpbGUiOiJ0aWN0YWN0b2UuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL2V4YW1wbGVzL3NyYy90aWN0YWN0b2UuanNcIik7XG4iLCIvKlxuICogQ29weXJpZ2h0IChDKSAyMDIwIEVsaWFzdGlrIChlbGlhc3Rpa3NvZnRzLmNvbSlcbiAqXG4gKiBUaGlzIGZpbGUgaXMgcGFydCBvZiBcIkpTR2FtZVRvb2xzXCIuXG4gKlxuICogXCJKU0dhbWVUb29sc1wiIGlzIGZyZWUgc29mdHdhcmU6IHlvdSBjYW4gcmVkaXN0cmlidXRlIGl0IGFuZC9vciBtb2RpZnlcbiAqIGl0IHVuZGVyIHRoZSB0ZXJtcyBvZiB0aGUgR05VIEdlbmVyYWwgUHVibGljIExpY2Vuc2UgYXMgcHVibGlzaGVkIGJ5XG4gKiB0aGUgRnJlZSBTb2Z0d2FyZSBGb3VuZGF0aW9uLCBlaXRoZXIgdmVyc2lvbiAzIG9mIHRoZSBMaWNlbnNlLCBvclxuICogKGF0IHlvdXIgb3B0aW9uKSBhbnkgbGF0ZXIgdmVyc2lvbi5cbiAqXG4gKiBcIkpTR2FtZVRvb2xzXCIgaXMgZGlzdHJpYnV0ZWQgaW4gdGhlIGhvcGUgdGhhdCBpdCB3aWxsIGJlIHVzZWZ1bCxcbiAqIGJ1dCBXSVRIT1VUIEFOWSBXQVJSQU5UWTsgd2l0aG91dCBldmVuIHRoZSBpbXBsaWVkIHdhcnJhbnR5IG9mXG4gKiBNRVJDSEFOVEFCSUxJVFkgb3IgRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UuICBTZWUgdGhlXG4gKiBHTlUgR2VuZXJhbCBQdWJsaWMgTGljZW5zZSBmb3IgbW9yZSBkZXRhaWxzLlxuICpcbiAqIFlvdSBzaG91bGQgaGF2ZSByZWNlaXZlZCBhIGNvcHkgb2YgdGhlIEdOVSBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlXG4gKiBhbG9uZyB3aXRoIFwiSlNHYW1lVG9vbHNcIi4gIElmIG5vdCwgc2VlIDxodHRwOi8vd3d3LmdudS5vcmcvbGljZW5zZXMvPi5cbiAqL1xuLy8gQ3JlYXRlIGNvbXBvbmVudHNcbmNvbnN0IEpHVCA9IEpTR2FtZVRvb2xzO1xuSkdULkNvbnN0YW50cy5TZXR0aW5nLkZPTlRfRkFNSUxZID0gXCJHYWVndVwiO1xuSkdULkNvbnN0YW50cy5TZXR0aW5nLkZPTlRfU0laRSA9IDM1O1xuXG4vLyBHcmFwaGljIGNvbXBvbmVudHNcbmNvbnN0IGltYWdlTG9hZGVyID0gbmV3IEpHVC5JbWFnZUxvYWRlcigpO1xuXG5jb25zdCBidXR0b25TdHlsZSA9IG5ldyBKR1QuU3R5bGUoeyBcImJhY2tncm91bmRDb2xvclwiOiBcImdyYXlcIiwgXCJib3JkZXJTaXplXCI6IDIsIFwiYm9yZGVyQ29sb3JcIjogXCJibGFja1wiIH0pO1xuY29uc3QgbGFiZWxTdHlsZSA9IG5ldyBKR1QuU3R5bGUoeyBcImZvbnRDb2xvclwiOiBcIndoaXRlXCIsIFwiYWxpZ25lbWVudFwiOiBcImNlbnRlclwiIH0pO1xuY29uc3QgbGFiZWxTdHlsZURlZmF1bHQgPSBuZXcgSkdULlN0eWxlKHsgXCJmb250Q29sb3JcIjogXCJ3aGl0ZVwiIH0pO1xuY29uc3QgYnV0dG9uU3R5bGUyID0gbmV3IEpHVC5TdHlsZSh7IFwiYmFja2dyb3VuZENvbG9yXCI6IFwiIzJlY2M3MVwiLCBcImJhY2tncm91bmRDb2xvckhvdmVyXCI6IFwiIzFhYmM5Y1wiLCBcImJhY2tncm91bmRDb2xvckRvd25cIjogXCIjMTZhMDg1XCIsIFwiYWxpZ25lbWVudFwiOiBcImNlbnRlclwiIH0pO1xuY29uc3QgYnV0dG9uU3R5bGVEZWZhdWx0ID0gbmV3IEpHVC5TdHlsZSh7IFwiYmFja2dyb3VuZENvbG9yXCI6IFwiIzJlY2M3MVwiLCBcImJhY2tncm91bmRDb2xvckhvdmVyXCI6IFwiIzFhYmM5Y1wiLCBcImJhY2tncm91bmRDb2xvckRvd25cIjogXCIjMTZhMDg1XCIgfSk7XG5jb25zdCBidXR0b25TdHlsZVJlZCA9IG5ldyBKR1QuU3R5bGUoeyBcImJhY2tncm91bmRDb2xvclwiOiBcIiNDQzJGMkZcIiwgXCJiYWNrZ3JvdW5kQ29sb3JIb3ZlclwiOiBcIiNGMjM4MzhcIiwgXCJiYWNrZ3JvdW5kQ29sb3JEb3duXCI6IFwiI0E2MjYyNlwiLCBcImFsaWduZW1lbnRcIjogXCJjZW50ZXJcIiB9KTtcbmNvbnN0IGJ1dHRvblN0eWxlUmVkRGVmYXVsdCA9IG5ldyBKR1QuU3R5bGUoeyBcImJhY2tncm91bmRDb2xvclwiOiBcIiNDQzJGMkZcIiwgXCJiYWNrZ3JvdW5kQ29sb3JIb3ZlclwiOiBcIiNGMjM4MzhcIiwgXCJiYWNrZ3JvdW5kQ29sb3JEb3duXCI6IFwiI0E2MjYyNlwiIH0pO1xuXG5jb25zdCBib3ggPSBuZXcgSkdULkJveCgwLCAwLCA4MDAsIDYwMCwgbmV3IEpHVC5TdHlsZSh7IFwiYmFja2dyb3VuZENvbG9yXCI6IFwibGlnaHRncmF5XCIgfSkpO1xuY29uc3QgZ2FtZUluZm9zID0gbmV3IEpHVC5MYWJlbChcIlwiLCBudWxsLCBudWxsLCBuZXcgSkdULlN0eWxlKHsgXCJhbGlnbmVtZW50XCI6IFwiY2VudGVyXCIsIFwiZm9udFNpemVcIjogMzAgfSkpO1xuY29uc3QgZnBzTWV0ZXIgPSBuZXcgSkdULkZQU01ldGVyKGZhbHNlLCBudWxsLCBudWxsLCBuZXcgSkdULlN0eWxlKHsgXCJhbGlnbmVtZW50XCI6IFwicmlnaHRcIiwgXCJ2ZXJ0aWNhbEFsaWduZW1lbnRcIjogXCJib3R0b21cIiwgXCJmb3JlZ3JvdW5kXCI6IHRydWUgfSkpO1xuXG5jb25zdCBwYXVzZUltYWdlID0gbmV3IEpHVC5JbWFnZUNvbnRhaW5lcihcInBhdXNlLnBuZ1wiLCBudWxsLCBudWxsLCA2NCwgNjQsIG5ldyBKR1QuU3R5bGUoeyBcInZlcnRpY2FsQWxpZ25lbWVudFwiOiBcImNlbnRlclwiLCBcImFsaWduZW1lbnRcIjogXCJjZW50ZXJcIiB9KSk7XG5jb25zdCBmdWxsc2NyZWVuSW1hZ2UgPSBuZXcgSkdULkltYWdlQ29udGFpbmVyKFwiZnVsbHNjcmVlbi5wbmdcIiwgbnVsbCwgbnVsbCwgNjQsIDY0LCBuZXcgSkdULlN0eWxlKHsgXCJ2ZXJ0aWNhbEFsaWduZW1lbnRcIjogXCJjZW50ZXJcIiwgXCJhbGlnbmVtZW50XCI6IFwiY2VudGVyXCIgfSkpO1xuY29uc3QgcGF1c2VCdXR0b24gPSBuZXcgSkdULkJ1dHRvbihudWxsLCA1MCwgbnVsbCwgbnVsbCwgbmV3IEpHVC5TdHlsZSh7IFwiYWxpZ25lbWVudFwiOiBcInJpZ2h0XCIsIFwidmVydGljYWxBbGlnbmVtZW50XCI6IFwiY2VudGVyXCIgfSksIG5ldyBKR1QuUm93KDUsIDI1MCwgbnVsbCwgbnVsbCwgbnVsbCwgcGF1c2VJbWFnZSkpO1xuY29uc3QgZnVsbHNjcmVlbkJ1dHRvbiA9IG5ldyBKR1QuQnV0dG9uKG51bGwsIDUwLCBudWxsLCBudWxsLCBuZXcgSkdULlN0eWxlKHsgXCJhbGlnbmVtZW50XCI6IFwibGVmdFwiLCBcInZlcnRpY2FsQWxpZ25lbWVudFwiOiBcImNlbnRlclwiIH0pLCBuZXcgSkdULlJvdyg1LCAyNTAsIG51bGwsIG51bGwsIG51bGwsIGZ1bGxzY3JlZW5JbWFnZSkpO1xuY29uc3Qgcm93QnV0dG9ucyA9IG5ldyBKR1QuUm93KG51bGwsIG51bGwsIG51bGwsIG51bGwsIG5ldyBKR1QuU3R5bGUoeyBcImFsaWduZW1lbnRcIjogXCJyaWdodFwiLCBcInZlcnRpY2FsQWxpZ25lbWVudFwiOiBcInRvcFwiIH0pLCBmdWxsc2NyZWVuQnV0dG9uLCBwYXVzZUJ1dHRvbik7XG5cbi8vIFBhdXNlIG1lbnVcbmNvbnN0IGJ1dHRvbk5ld0dhbWUgPSBuZXcgSkdULkJ1dHRvbig1LCA1LCBudWxsLCBudWxsLCBidXR0b25TdHlsZTIsIG5ldyBKR1QuTGFiZWwoXCJOZXcgZ2FtZVwiLCBudWxsLCBudWxsLCBsYWJlbFN0eWxlKSk7XG5jb25zdCBidXR0b25NZW51MSA9IG5ldyBKR1QuQnV0dG9uKDUsIDUsIG51bGwsIG51bGwsIGJ1dHRvblN0eWxlMiwgbmV3IEpHVC5MYWJlbChcIlJlc2V0IHRoZSBnYW1lXCIsIG51bGwsIG51bGwsIGxhYmVsU3R5bGUpKTtcbmNvbnN0IGJ1dHRvbk1lbnUyID0gbmV3IEpHVC5CdXR0b24oNSwgNSwgbnVsbCwgbnVsbCwgYnV0dG9uU3R5bGVSZWQsIG5ldyBKR1QuTGFiZWwoXCJDbG9zZVwiLCBudWxsLCBudWxsLCBsYWJlbFN0eWxlKSk7XG5jb25zdCBtZW51TGFiZWwgPSBuZXcgSkdULkxhYmVsKFwiUGF1c2UgbWVudVwiLCBudWxsLCBudWxsLCBsYWJlbFN0eWxlKTtcbmNvbnN0IG1lbnUgPSBuZXcgSkdULk1lbnUobnVsbCwgbWVudUxhYmVsLCBidXR0b25OZXdHYW1lLCBidXR0b25NZW51MSwgYnV0dG9uTWVudTIpO1xuXG4vLyBSZXN1bHQgbWVudVxuY29uc3QgYnV0dG9uTmV3R2FtZTIgPSBuZXcgSkdULkJ1dHRvbig1LCA1LCBudWxsLCBudWxsLCBidXR0b25TdHlsZTIsIG5ldyBKR1QuTGFiZWwoXCJOZXcgZ2FtZVwiLCBudWxsLCBudWxsLCBsYWJlbFN0eWxlKSk7XG5jb25zdCBidXR0b25NZW51MyA9IG5ldyBKR1QuQnV0dG9uKDUsIDUsIG51bGwsIG51bGwsIGJ1dHRvblN0eWxlMiwgbmV3IEpHVC5MYWJlbChcIlJlc2V0IHRoZSBnYW1lXCIsIG51bGwsIG51bGwsIGxhYmVsU3R5bGUpKTtcbmNvbnN0IG1lbnVSZXN1bHRMYWJlbCA9IG5ldyBKR1QuTGFiZWwoXCI/Pz9cIiwgbnVsbCwgbnVsbCwgbGFiZWxTdHlsZSk7XG5jb25zdCBtZW51UmVzdWx0ID0gbmV3IEpHVC5NZW51KG51bGwsIG1lbnVSZXN1bHRMYWJlbCwgYnV0dG9uTmV3R2FtZTIsIGJ1dHRvbk1lbnUzKTtcblxuLy8gTWFpbiBtZW51XG5jb25zdCBidXR0b25QbGF5ZXJWU0FJID0gbmV3IEpHVC5CdXR0b24oNSwgNSwgbnVsbCwgbnVsbCwgYnV0dG9uU3R5bGUyLCBuZXcgSkdULkxhYmVsKFwiUGxheWVyIFZTIEFJXCIsIG51bGwsIG51bGwsIGxhYmVsU3R5bGUpKTtcbmNvbnN0IGJ1dHRvblBsYXllclZTUGxheWVyID0gbmV3IEpHVC5CdXR0b24oNSwgNSwgbnVsbCwgbnVsbCwgYnV0dG9uU3R5bGUyLCBuZXcgSkdULkxhYmVsKFwiUGxheWVyIFZTIFBsYXllclwiLCBudWxsLCBudWxsLCBsYWJlbFN0eWxlKSk7XG5jb25zdCBidXR0b25FeGl0ID0gbmV3IEpHVC5CdXR0b24oNSwgNSwgbnVsbCwgbnVsbCwgYnV0dG9uU3R5bGVSZWQsIG5ldyBKR1QuTGFiZWwoXCJFeGl0XCIsIG51bGwsIG51bGwsIGxhYmVsU3R5bGUpKTtcbmNvbnN0IG1haW5NZW51TGFiZWwgPSBuZXcgSkdULkxhYmVsKFwiSlNHYW1lVG9vbHNcXG5UaWMgVGFjIFRvZSBleGFtcGxlXCIsIG51bGwsIG51bGwsIGxhYmVsU3R5bGUpO1xuY29uc3QgbWFpbk1lbnUgPSBuZXcgSkdULk1lbnUobmV3IEpHVC5TdHlsZSh7IFwiYmFja2dyb3VuZENvbG9yXCI6IFwicmdiYSg0NCwgNjIsIDgwLCAxKVwiIH0pLCBtYWluTWVudUxhYmVsLCBidXR0b25QbGF5ZXJWU0FJLCBidXR0b25QbGF5ZXJWU1BsYXllciwgYnV0dG9uRXhpdCk7XG5tYWluTWVudS5lbmFibGUoKTtcblxuLy8gUGxheWVyIFZTIFBsYXllciBzZXR0aW5nc1xuY29uc3QgbGFiZWxQbGF5ZXJWU1BsYXllck1lbnUgPSBuZXcgSkdULkxhYmVsKFwiUGxheWVyIFZTIFBsYXllclwiLCBudWxsLCBudWxsLCBsYWJlbFN0eWxlKTtcbmNvbnN0IGxhYmVsR3JpZFBhcmFtUGxheWVyVlNQbGF5ZXJNZW51ID0gbmV3IEpHVC5MYWJlbChcIkdyaWQgc2l6ZTogXCIsIG51bGwsIG51bGwsIGxhYmVsU3R5bGVEZWZhdWx0KTtcbmNvbnN0IGlucHV0Um93ID0gbmV3IEpHVC5JbnB1dChudWxsLCBudWxsLCA1MCwgbnVsbCwgbnVsbCwgXCIzXCIpO1xuY29uc3QgeFNpZ24gPSBuZXcgSkdULkxhYmVsKFwiw5dcIiwgbnVsbCwgbnVsbCwgbGFiZWxTdHlsZURlZmF1bHQpO1xuY29uc3QgaW5wdXRDb2wgPSBuZXcgSkdULklucHV0KG51bGwsIG51bGwsIDUwLCBudWxsLCBudWxsLCBcIjNcIik7XG5jb25zdCB2YWxpZGF0ZVBsYXllclZTUGxheWVyID0gbmV3IEpHVC5CdXR0b24oNSwgNSwgbnVsbCwgbnVsbCwgYnV0dG9uU3R5bGVEZWZhdWx0LCBuZXcgSkdULkxhYmVsKFwiUGxheVwiLCBudWxsLCBudWxsLCBsYWJlbFN0eWxlKSk7XG5jb25zdCBjYW5jZWxQbGF5ZXJWU1BsYXllciA9IG5ldyBKR1QuQnV0dG9uKDUsIDUsIG51bGwsIG51bGwsIGJ1dHRvblN0eWxlUmVkRGVmYXVsdCwgbmV3IEpHVC5MYWJlbChcIkNhbmNlbFwiLCBudWxsLCBudWxsLCBsYWJlbFN0eWxlKSk7XG5jb25zdCBwbGF5ZXJWU1BsYXllck1lbnUgPSBuZXcgSkdULk1lbnUobmV3IEpHVC5TdHlsZSh7IFwiYmFja2dyb3VuZENvbG9yXCI6IFwicmdiYSg0NCwgNjIsIDgwLCAxKVwiIH0pLCBsYWJlbFBsYXllclZTUGxheWVyTWVudSwgbmV3IEpHVC5Sb3cobnVsbCwgbnVsbCwgbnVsbCwgbnVsbCwgbmV3IEpHVC5TdHlsZSh7IFwiYWxpZ25lbWVudFwiOiBcImNlbnRlclwiLCBcInBhZGRpbmdcIjogMjAgfSksIGxhYmVsR3JpZFBhcmFtUGxheWVyVlNQbGF5ZXJNZW51LCBpbnB1dFJvdywgeFNpZ24sIGlucHV0Q29sKSwgbmV3IEpHVC5Sb3cobnVsbCwgbnVsbCwgbnVsbCwgbnVsbCwgbmV3IEpHVC5TdHlsZSh7IFwiYWxpZ25lbWVudFwiOiBcImNlbnRlclwiLCBcInBhZGRpbmdcIjogMjAgfSksIHZhbGlkYXRlUGxheWVyVlNQbGF5ZXIsIGNhbmNlbFBsYXllclZTUGxheWVyKSk7XG5cbi8vIFBsYXllciBWUyBBSSBzZXR0aW5nc1xuY29uc3QgbGFiZWxQbGF5ZXJWU0FJTWVudSA9IG5ldyBKR1QuTGFiZWwoXCJQbGF5ZXIgVlMgQUlcIiwgbnVsbCwgbnVsbCwgbGFiZWxTdHlsZSk7XG5jb25zdCBsYWJlbEdyaWRQYXJhbVBsYXllclZTQUlNZW51ID0gbmV3IEpHVC5MYWJlbChcIkdyaWQgc2l6ZTogXCIsIG51bGwsIG51bGwsIGxhYmVsU3R5bGVEZWZhdWx0KTtcbmNvbnN0IGlucHV0Um93QUkgPSBuZXcgSkdULklucHV0KG51bGwsIG51bGwsIDUwLCBudWxsLCBudWxsLCBcIjNcIik7XG5jb25zdCB4U2lnbkFJID0gbmV3IEpHVC5MYWJlbChcIsOXXCIsIG51bGwsIG51bGwsIGxhYmVsU3R5bGVEZWZhdWx0KTtcbmNvbnN0IGlucHV0Q29sQUkgPSBuZXcgSkdULklucHV0KG51bGwsIG51bGwsIDUwLCBudWxsLCBudWxsLCBcIjNcIik7XG5jb25zdCBsYWJlbEFJTGV2ZWwgPSBuZXcgSkdULkxhYmVsKFwiQUkgbGV2ZWw6IFwiLCBudWxsLCBudWxsLCBsYWJlbFN0eWxlRGVmYXVsdCk7XG5jb25zdCBvcHRpb25zQUlMZXZlbCA9IG5ldyBKR1QuU2VsZWN0T3B0aW9uc0NvbnRhaW5lcig3NSwgbmV3IEpHVC5TdHlsZSh7IFwiZm9yZWdyb3VuZFwiOiB0cnVlIH0pLCBuZXcgSkdULlNlbGVjdE9wdGlvbihuZXcgSkdULkxhYmVsKFwiTG93XCIpKSwgbmV3IEpHVC5TZWxlY3RPcHRpb24obmV3IEpHVC5MYWJlbChcIk5vcm1hbFwiKSksIG5ldyBKR1QuU2VsZWN0T3B0aW9uKG5ldyBKR1QuTGFiZWwoXCJIaWdoXCIpKSk7XG5jb25zdCBzZWxlY3RBSUxldmVsID0gbmV3IEpHVC5TZWxlY3QoMjU1LCAzMTUsIG51bGwsIG51bGwsIG51bGwsIG9wdGlvbnNBSUxldmVsLCAxKTtcbmNvbnN0IGxhYmVsQUlGaXJzdFBsYXllciA9IG5ldyBKR1QuTGFiZWwoXCJGaXJzdCBwbGF5ZXI6IFwiLCBudWxsLCBudWxsLCBsYWJlbFN0eWxlRGVmYXVsdCk7XG5jb25zdCBvcHRpb25zQUlGaXJzdFBsYXllciA9IG5ldyBKR1QuU2VsZWN0T3B0aW9uc0NvbnRhaW5lcig3NSwgbmV3IEpHVC5TdHlsZSh7IFwiZm9yZWdyb3VuZFwiOiB0cnVlIH0pLCBuZXcgSkdULlNlbGVjdE9wdGlvbihuZXcgSkdULkxhYmVsKFwiWW91XCIpKSwgbmV3IEpHVC5TZWxlY3RPcHRpb24obmV3IEpHVC5MYWJlbChcIkFJXCIpKSk7XG5jb25zdCBzZWxlY3RBSUZpcnN0UGxheWVyID0gbmV3IEpHVC5TZWxlY3QoMjU1LCAzMTUsIG51bGwsIG51bGwsIG51bGwsIG9wdGlvbnNBSUZpcnN0UGxheWVyLCAxKTtcbmNvbnN0IHZhbGlkYXRlUGxheWVyVlNBSSA9IG5ldyBKR1QuQnV0dG9uKDUsIDUsIG51bGwsIG51bGwsIGJ1dHRvblN0eWxlRGVmYXVsdCwgbmV3IEpHVC5MYWJlbChcIlBsYXlcIiwgbnVsbCwgbnVsbCwgbGFiZWxTdHlsZSkpO1xuY29uc3QgY2FuY2VsUGxheWVyVlNBSSA9IG5ldyBKR1QuQnV0dG9uKDUsIDUsIG51bGwsIG51bGwsIGJ1dHRvblN0eWxlUmVkRGVmYXVsdCwgbmV3IEpHVC5MYWJlbChcIkNhbmNlbFwiLCBudWxsLCBudWxsLCBsYWJlbFN0eWxlKSk7XG5jb25zdCBwbGF5ZXJWU0FJTWVudSA9IG5ldyBKR1QuTWVudShuZXcgSkdULlN0eWxlKHsgXCJiYWNrZ3JvdW5kQ29sb3JcIjogXCJyZ2JhKDQ0LCA2MiwgODAsIDEpXCIgfSksIGxhYmVsUGxheWVyVlNBSU1lbnUsIG5ldyBKR1QuUm93KG51bGwsIG51bGwsIG51bGwsIG51bGwsIG5ldyBKR1QuU3R5bGUoeyBcImFsaWduZW1lbnRcIjogXCJjZW50ZXJcIiwgXCJwYWRkaW5nXCI6IDIwIH0pLCBsYWJlbEdyaWRQYXJhbVBsYXllclZTQUlNZW51LCBpbnB1dFJvd0FJLCB4U2lnbkFJLCBpbnB1dENvbEFJKSwgbmV3IEpHVC5Sb3cobnVsbCwgbnVsbCwgbnVsbCwgbnVsbCwgbmV3IEpHVC5TdHlsZSh7IFwiYWxpZ25lbWVudFwiOiBcImNlbnRlclwiLCBcInBhZGRpbmdcIjogMjAgfSksIGxhYmVsQUlMZXZlbCwgc2VsZWN0QUlMZXZlbCksIG5ldyBKR1QuUm93KG51bGwsIG51bGwsIG51bGwsIG51bGwsIG5ldyBKR1QuU3R5bGUoeyBcImFsaWduZW1lbnRcIjogXCJjZW50ZXJcIiwgXCJwYWRkaW5nXCI6IDIwIH0pLCBsYWJlbEFJRmlyc3RQbGF5ZXIsIHNlbGVjdEFJRmlyc3RQbGF5ZXIpLCBuZXcgSkdULlJvdyhudWxsLCBudWxsLCBudWxsLCBudWxsLCBuZXcgSkdULlN0eWxlKHsgXCJhbGlnbmVtZW50XCI6IFwiY2VudGVyXCIsIFwicGFkZGluZ1wiOiAyMCB9KSwgdmFsaWRhdGVQbGF5ZXJWU0FJLCBjYW5jZWxQbGF5ZXJWU0FJKSk7XG5cbnBhdXNlQnV0dG9uLmFkZENsaWNrQWN0aW9uKCgpID0+IHtcbiAgbWVudS5lbmFibGUoKTtcbn0pO1xuXG5mdWxsc2NyZWVuQnV0dG9uLmFkZENsaWNrQWN0aW9uKCgpID0+IHtcbiAgY2FudmFzLnRvZ2dsZUZ1bGxzY3JlZW4oKTtcbn0pO1xuXG5idXR0b25NZW51Mi5hZGRDbGlja0FjdGlvbigoKSA9PiB7XG4gIG1lbnUuZGlzYWJsZSgpO1xufSk7XG5cbmJ1dHRvbkV4aXQuYWRkQ2xpY2tBY3Rpb24oKCkgPT4ge1xuICBsb2NhdGlvbi5ocmVmID0gXCIuL2luZGV4Lmh0bWxcIjtcbn0pO1xuXG5idXR0b25OZXdHYW1lLmFkZENsaWNrQWN0aW9uKG9wZW5NYWluTWVudSk7XG5idXR0b25OZXdHYW1lMi5hZGRDbGlja0FjdGlvbihvcGVuTWFpbk1lbnUpO1xuXG52YWxpZGF0ZVBsYXllclZTUGxheWVyLmFkZENsaWNrQWN0aW9uKCgpID0+IHtcbiAgcnVuR2FtZShHQU1FX01PREUuUExBWUVSX1ZTX1BMQVlFUiwgW2lucHV0Um93LnRleHQudHJpbSgpID09IFwiXCIgfHwgaXNOYU4oaW5wdXRSb3cudGV4dCkgPyAzIDogcGFyc2VJbnQoaW5wdXRSb3cudGV4dCksIGlucHV0Q29sLnRleHQudHJpbSgpID09IFwiXCIgfHwgaXNOYU4oaW5wdXRDb2wudGV4dCkgPyAzIDogcGFyc2VJbnQoaW5wdXRDb2wudGV4dCldKTtcbn0pO1xuXG5idXR0b25QbGF5ZXJWU1BsYXllci5hZGRDbGlja0FjdGlvbigoKSA9PiB7XG4gIG1haW5NZW51LmRpc2FibGUoKTtcbiAgcGxheWVyVlNQbGF5ZXJNZW51LmVuYWJsZSgpO1xufSk7XG5cbmNhbmNlbFBsYXllclZTUGxheWVyLmFkZENsaWNrQWN0aW9uKCgpID0+IHtcbiAgbWFpbk1lbnUuZW5hYmxlKCk7XG4gIHBsYXllclZTUGxheWVyTWVudS5kaXNhYmxlKCk7XG59KTtcblxuYnV0dG9uUGxheWVyVlNBSS5hZGRDbGlja0FjdGlvbigoKSA9PiB7XG4gIG1haW5NZW51LmRpc2FibGUoKTtcbiAgcGxheWVyVlNBSU1lbnUuZW5hYmxlKCk7XG59KTtcblxudmFsaWRhdGVQbGF5ZXJWU0FJLmFkZENsaWNrQWN0aW9uKCgpID0+IHtcbiAgYWlQbGF5ZXIgPSBQTEFZRVJfTlVNLlBMQVlFUl9UV087XG4gIG90aGVyUGxheWVyID0gUExBWUVSX05VTS5QTEFZRVJfT05FO1xuICBhaUxldmVsID0gQUlfTEVWRUwuTk9STUFMO1xuXG4gIHN3aXRjaChzZWxlY3RBSUxldmVsLnRleHQpIHtcbiAgICBjYXNlIFwiSGlnaFwiOlxuICAgICAgYWlMZXZlbCA9IEFJX0xFVkVMLkhJR0g7XG4gICAgICBicmVhaztcbiAgICBjYXNlIFwiTm9ybWFsXCI6XG4gICAgICBhaUxldmVsID0gQUlfTEVWRUwuTk9STUFMO1xuICAgICAgYnJlYWs7XG4gICAgY2FzZSBcIkxvd1wiOlxuICAgICAgYWlMZXZlbCA9IEFJX0xFVkVMLkxPVztcbiAgICAgIGJyZWFrO1xuICB9XG5cbiAgc3dpdGNoKHNlbGVjdEFJRmlyc3RQbGF5ZXIudGV4dCkge1xuICAgIGNhc2UgXCJZb3VcIjpcbiAgICAgIGFpUGxheWVyID0gUExBWUVSX05VTS5QTEFZRVJfVFdPO1xuICAgICAgb3RoZXJQbGF5ZXIgPSBQTEFZRVJfTlVNLlBMQVlFUl9PTkU7XG4gICAgICBicmVhaztcbiAgICBjYXNlIFwiQUlcIjpcbiAgICAgIGFpUGxheWVyID0gUExBWUVSX05VTS5QTEFZRVJfT05FO1xuICAgICAgb3RoZXJQbGF5ZXIgPSBQTEFZRVJfTlVNLlBMQVlFUl9UV087XG4gICAgICBicmVhaztcbiAgfVxuXG4gIHJ1bkdhbWUoR0FNRV9NT0RFLlBMQVlFUl9WU19BSSwgW2lucHV0Um93QUkudGV4dC50cmltKCkgPT0gXCJcIiB8fCBpc05hTihpbnB1dFJvd0FJLnRleHQpID8gMyA6IHBhcnNlSW50KGlucHV0Um93QUkudGV4dCksIGlucHV0Q29sQUkudGV4dC50cmltKCkgPT0gXCJcIiB8fCBpc05hTihpbnB1dENvbEFJLnRleHQpID8gMyA6IHBhcnNlSW50KGlucHV0Q29sQUkudGV4dCldKTtcbn0pO1xuXG5jYW5jZWxQbGF5ZXJWU0FJLmFkZENsaWNrQWN0aW9uKCgpID0+IHtcbiAgbWFpbk1lbnUuZW5hYmxlKCk7XG4gIHBsYXllclZTQUlNZW51LmRpc2FibGUoKTtcbn0pO1xuXG5idXR0b25NZW51MS5hZGRDbGlja0FjdGlvbigoKSA9PiBydW5HYW1lKGN1cnJlbnRHYW1lTW9kZSwgc2l6ZUJvYXJkKSk7XG5idXR0b25NZW51My5hZGRDbGlja0FjdGlvbigoKSA9PiBydW5HYW1lKGN1cnJlbnRHYW1lTW9kZSwgc2l6ZUJvYXJkKSk7XG5cbi8vIEJvYXJkIGNvbFxuY29uc3QgY29sID0gbmV3IEpHVC5Db2wobnVsbCwgbnVsbCwgbnVsbCwgbnVsbCwgbmV3IEpHVC5TdHlsZSh7IFwiYWxpZ25lbWVudFwiOiBcImNlbnRlclwiLCBcInZlcnRpY2FsQWxpZ25lbWVudFwiOiBcImNlbnRlclwiIH0pKTtcblxuLy8gRXZlbnRzLCBnYW1lIHZhcmlhYmxlcyBhbmQgbG9naWNcbmNvbnN0IE1BUktfVFlQRSA9IHsgQ1JPU1M6IFwiY3Jvc3NcIiwgQ0lSQ0xFOiBcImNpcmNsZVwiLCBFTVBUWTogXCJlbXB0eVwiIH07XG5jb25zdCBQTEFZRVJfTlVNID0geyBQTEFZRVJfT05FOiBNQVJLX1RZUEUuQ1JPU1MsIFBMQVlFUl9UV086IE1BUktfVFlQRS5DSVJDTEUgfTtcbmNvbnN0IFdJTl9TSVRVQVRJT04gPSB7IFBMQVlFUl9PTkU6IFBMQVlFUl9OVU0uUExBWUVSX09ORSwgUExBWUVSX1RXTzogUExBWUVSX05VTS5QTEFZRVJfVFdPLCBEUkFXOiAwIH07XG5jb25zdCBHQU1FX01PREUgPSB7IFBMQVlFUl9WU19BSTogMSwgUExBWUVSX1ZTX1BMQVlFUjogMiB9O1xuY29uc3QgQUlfTEVWRUwgPSB7IEhJR0g6IDEwLCBOT1JNQUw6IDYsIExPVzogNCB9O1xuY29uc3QgQUlfV0lOX1NJVFVBVElPTl9TQ09SRVMgPSB7IFdJTjogMTAsIExPU0U6IC0xMCwgRFJBVzogMCB9O1xuY29uc3QgREVGQVVMVF9NQVhfREVQVEhfTUlOSU1BWCA9IEFJX0xFVkVMLkhJR0g7XG5cbmxldCBjdXJyZW50UGxheWVyID0gUExBWUVSX05VTS5QTEFZRVJfT05FO1xubGV0IGFpUGxheWVyID0gUExBWUVSX05VTS5QTEFZRVJfVFdPO1xubGV0IG90aGVyUGxheWVyID0gUExBWUVSX05VTS5QTEFZRVJfT05FO1xubGV0IGN1cnJlbnRHYW1lTW9kZSA9IEdBTUVfTU9ERS5QTEFZRVJfVlNfQUk7XG5sZXQgYWlMZXZlbCA9IEFJX0xFVkVMLkhJR0g7XG5sZXQgc2l6ZUJvYXJkID0gWzMsIDNdO1xubGV0IGJ1dHRvbnMgPSBbXTtcbmxldCBidXR0b25zQm9hcmQgPSBbXTtcbmxldCBnYW1lQm9hcmQgPSBbXTtcblxuZnVuY3Rpb24gY3JlYXRlQm9hcmQoKSB7XG4gIGNvbC5jbGVhcigpO1xuICBjb2wuYWRkKGdhbWVJbmZvcyk7XG4gIGdhbWVCb2FyZCA9IFtdO1xuICBidXR0b25zID0gW107XG4gIGJ1dHRvbnNCb2FyZCA9IFtdO1xuXG4gIGZvcihsZXQgaSA9IDA7IGkgPCBzaXplQm9hcmRbMF07IGkrKykge1xuICAgIGNvbnN0IHJvdyA9IG5ldyBKR1QuUm93KCk7XG4gICAgY29uc3QgbGluZSA9IFtdO1xuICAgIGNvbnN0IGxpbmVCdXR0b24gPSBbXTtcbiAgXG4gICAgZm9yKGxldCBqID0gMDsgaiA8IHNpemVCb2FyZFsxXTsgaisrKSB7XG4gICAgICBjb25zdCBidXR0b24gPSBuZXcgSkdULkJ1dHRvbihudWxsLCBudWxsLCA3NSwgNzUsIGJ1dHRvblN0eWxlKTtcbiAgICAgIGJ1dHRvbnMucHVzaChidXR0b24pO1xuICAgICAgbGluZUJ1dHRvbi5wdXNoKGJ1dHRvbik7XG4gICAgICByb3cuYWRkKGJ1dHRvbik7XG4gICAgICBsaW5lLnB1c2goTUFSS19UWVBFLkVNUFRZKTtcbiAgICB9XG5cbiAgICBnYW1lQm9hcmQucHVzaChsaW5lKTtcbiAgICBidXR0b25zQm9hcmQucHVzaChsaW5lQnV0dG9uKTtcbiAgICBjb2wuYWRkKHJvdyk7XG4gIH1cblxuICBidXR0b25zLmZvckVhY2goKGJ1dHRvbiwgaSkgPT4gYnV0dG9uLmFkZENsaWNrQWN0aW9uKCgpID0+IHtcbiAgICBjb25zdCBjdXJyZW50Q2VsbFBvc2l0aW9uID0gW01hdGguZmxvb3IoaSAvIHNpemVCb2FyZFsxXSksIGkgJSBzaXplQm9hcmRbMV1dO1xuICAgIGdhbWVBY3Rpb24oZ2FtZUJvYXJkLCBjdXJyZW50Q2VsbFBvc2l0aW9uKTtcbiAgfSkpO1xufVxuXG5mdW5jdGlvbiB0b1N0cihib2FyZCkge1xuICBsZXQgc3RyID0gXCJcIjtcblxuICBmb3IobGV0IGkgPSAwOyBpIDwgYm9hcmQubGVuZ3RoOyBpKyspIHtcbiAgICBmb3IobGV0IGogPSAwOyBqIDwgYm9hcmRbaV0ubGVuZ3RoOyBqKyspIHtcbiAgICAgIGlmKGJvYXJkW2ldW2pdID09IE1BUktfVFlQRS5FTVBUWSkge1xuICAgICAgICBzdHIgKz0gXCIgICBcIjtcbiAgICAgIH0gZWxzZSBpZihib2FyZFtpXVtqXSA9PSBNQVJLX1RZUEUuQ0lSQ0xFKSB7XG4gICAgICAgIHN0ciArPSBcIiBvIFwiO1xuICAgICAgfSBlbHNlIGlmKGJvYXJkW2ldW2pdID09IE1BUktfVFlQRS5DUk9TUykge1xuICAgICAgICBzdHIgKz0gXCIgeCBcIjtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBzdHIgKz0gXCJcXG5cIjtcbiAgfVxuXG4gIHJldHVybiBzdHI7XG59XG5cbmZ1bmN0aW9uIGNoZWNrV2luSG9yaXooYm9hcmQpIHtcbiAgbGV0IGNvdW50Q3Jvc3MgPSAwO1xuICBsZXQgY291bnRDaXJjbGUgPSAwO1xuXG4gIGZvcihsZXQgaSA9IDA7IGkgPCBib2FyZC5sZW5ndGg7IGkrKykge1xuICAgIGNvbnN0IGN1cnJlbnRMaW5lID0gYm9hcmRbaV07XG5cbiAgICBmb3IobGV0IGogPSAwOyBqIDwgY3VycmVudExpbmUubGVuZ3RoOyBqKyspIHtcbiAgICAgIGlmKGN1cnJlbnRMaW5lW2pdID09IE1BUktfVFlQRS5DUk9TUykge1xuICAgICAgICBjb3VudENyb3NzKys7XG4gICAgICAgIGNvdW50Q2lyY2xlID0gMDtcbiAgICAgIH0gZWxzZSBpZihjdXJyZW50TGluZVtqXSA9PSBNQVJLX1RZUEUuQ0lSQ0xFKSB7XG4gICAgICAgIGNvdW50Q2lyY2xlKys7XG4gICAgICAgIGNvdW50Q3Jvc3MgPSAwO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgY291bnRDaXJjbGUgPSAwO1xuICAgICAgICBjb3VudENyb3NzID0gMDtcbiAgICAgIH1cblxuICAgICAgaWYoY291bnRDcm9zcyA+PSAzKSB7XG4gICAgICAgIHJldHVybiBQTEFZRVJfTlVNLlBMQVlFUl9PTkU7XG4gICAgICB9IGVsc2UgaWYoY291bnRDaXJjbGUgPj0gMykge1xuICAgICAgICByZXR1cm4gUExBWUVSX05VTS5QTEFZRVJfVFdPO1xuICAgICAgfVxuICAgIH1cblxuICAgIGNvdW50Q3Jvc3MgPSAwO1xuICAgIGNvdW50Q2lyY2xlID0gMDtcbiAgfVxuXG4gIHJldHVybiBudWxsO1xufVxuXG5mdW5jdGlvbiBjaGVja1dpblZlcnRpKGJvYXJkKSB7XG4gIGxldCBjb3VudENyb3NzID0gMDtcbiAgbGV0IGNvdW50Q2lyY2xlID0gMDtcblxuICBmb3IobGV0IGkgPSAwOyBpIDwgYm9hcmRbMF0ubGVuZ3RoOyBpKyspIHtcbiAgICBmb3IobGV0IGogPSAwOyBqIDwgYm9hcmQubGVuZ3RoOyBqKyspIHtcbiAgICAgICAgY29uc3QgY3VycmVudENhc2UgPSBib2FyZFtqXVtpXTtcblxuICAgICAgICBpZihjdXJyZW50Q2FzZSA9PSBNQVJLX1RZUEUuQ1JPU1MpIHtcbiAgICAgICAgICBjb3VudENyb3NzKys7XG4gICAgICAgICAgY291bnRDaXJjbGUgPSAwO1xuICAgICAgICB9IGVsc2UgaWYoY3VycmVudENhc2UgPT0gTUFSS19UWVBFLkNJUkNMRSkge1xuICAgICAgICAgIGNvdW50Q2lyY2xlKys7XG4gICAgICAgICAgY291bnRDcm9zcyA9IDA7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgY291bnRDaXJjbGUgPSAwO1xuICAgICAgICAgIGNvdW50Q3Jvc3MgPSAwO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYoY291bnRDcm9zcyA+PSAzKSB7XG4gICAgICAgICAgcmV0dXJuIFBMQVlFUl9OVU0uUExBWUVSX09ORTtcbiAgICAgICAgfSBlbHNlIGlmKGNvdW50Q2lyY2xlID49IDMpIHtcbiAgICAgICAgICByZXR1cm4gUExBWUVSX05VTS5QTEFZRVJfVFdPO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGNvdW50Q3Jvc3MgPSAwO1xuICAgICAgY291bnRDaXJjbGUgPSAwO1xuICB9XG5cbiAgcmV0dXJuIG51bGw7XG59XG5cbmZ1bmN0aW9uIGNoZWNrV2luRGlhZ28oYm9hcmQpIHtcbiAgZm9yKGxldCBpID0gMDsgaSA8IGJvYXJkLmxlbmd0aDsgaSsrKSB7XG4gICAgY29uc3QgY3VycmVudExpbmUgPSBib2FyZFtpXTtcblxuICAgIGZvcihsZXQgaiA9IDA7IGogPCBjdXJyZW50TGluZS5sZW5ndGg7IGorKykge1xuICAgICAgICBjb25zdCBjZWxsc1RvQ2hlY2sgPSBbW2osIGldLCBbaiAtIDEsIGkgLSAxXSwgW2ogLSAyLCBpIC0gMl1dO1xuICAgICAgICBjb25zdCBjZWxsc1RvQ2hlY2tUd28gPSBbW2osIGldLCBbaiArIDEsIGkgKyAxXSwgW2ogKyAyLCBpICsgMl1dO1xuICAgICAgICBjb25zdCBjZWxsc1RvQ2hlY2tBbnRpID0gW1tqLCBpXSwgW2ogLSAxLCBpICsgMV0sIFtqIC0gMiwgaSArIDJdXTtcbiAgICAgICAgY29uc3QgY2VsbHNUb0NoZWNrQW50aVR3byA9IFtbaiwgaV0sIFtqICsgMSwgaSAtIDFdLCBbaiArIDIsIGkgLSAyXV07XG5cbiAgICAgICAgY29uc3QgY2hlY2tDZWxscyA9IGNoZWNrQ2FzZXNEaWFnbyhib2FyZCwgY3VycmVudExpbmUsIGNlbGxzVG9DaGVjayk7XG4gICAgICAgIGNvbnN0IGNoZWNrQ2VsbHNBbnRpID0gY2hlY2tDYXNlc0RpYWdvKGJvYXJkLCBjdXJyZW50TGluZSwgY2VsbHNUb0NoZWNrQW50aSk7XG4gICAgICAgIGNvbnN0IGNoZWNrQ2VsbHNUd28gPSBjaGVja0Nhc2VzRGlhZ28oYm9hcmQsIGN1cnJlbnRMaW5lLCBjZWxsc1RvQ2hlY2tUd28pO1xuICAgICAgICBjb25zdCBjaGVja0NlbGxzQW50aVR3byA9IGNoZWNrQ2FzZXNEaWFnbyhib2FyZCwgY3VycmVudExpbmUsIGNlbGxzVG9DaGVja0FudGlUd28pO1xuXG4gICAgICAgIGlmKGNoZWNrQ2VsbHMpIHJldHVybiBjaGVja0NlbGxzO1xuICAgICAgICBpZihjaGVja0NlbGxzQW50aSkgcmV0dXJuIGNoZWNrQ2VsbHNBbnRpO1xuICAgICAgICBpZihjaGVja0NlbGxzVHdvKSByZXR1cm4gY2hlY2tDZWxsc1R3bztcbiAgICAgICAgaWYoY2hlY2tDZWxsc0FudGlUd28pIHJldHVybiBjaGVja0NlbGxzQW50aVR3bztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gbnVsbDtcbn1cblxuZnVuY3Rpb24gY2hlY2tDYXNlc0RpYWdvKGJvYXJkLCBjdXJyZW50TGluZSwgY2VsbHNUb0NoZWNrKSB7XG4gIGxldCBjb3VudENyb3NzID0gMDtcbiAgbGV0IGNvdW50Q2lyY2xlID0gMDtcblxuICBmb3IobGV0IGsgPSAwOyBrIDwgY2VsbHNUb0NoZWNrLmxlbmd0aDsgaysrKSB7XG4gICAgY29uc3QgYyA9IGNlbGxzVG9DaGVja1trXTtcblxuICAgIGlmKGNbMV0gPj0gMCAmJiBjWzFdIDwgYm9hcmQubGVuZ3RoICYmIGNbMF0gPj0gMCAmJiBjWzBdIDwgY3VycmVudExpbmUubGVuZ3RoKSB7XG4gICAgICBjb25zdCBjZWxsID0gYm9hcmRbY1sxXV1bY1swXV07XG5cbiAgICAgIGlmKGNlbGwgPT0gTUFSS19UWVBFLkNST1NTKSB7XG4gICAgICAgIGNvdW50Q3Jvc3MrKztcbiAgICAgICAgY291bnRDaXJjbGUgPSAwO1xuICAgICAgfSBlbHNlIGlmKGNlbGwgPT0gTUFSS19UWVBFLkNJUkNMRSkge1xuICAgICAgICBjb3VudENpcmNsZSsrO1xuICAgICAgICBjb3VudENyb3NzID0gMDtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGNvdW50Q2lyY2xlID0gMDtcbiAgICAgICAgY291bnRDcm9zcyA9IDA7XG4gICAgICB9XG5cbiAgICAgIGlmKGNvdW50Q3Jvc3MgPj0gMykge1xuICAgICAgICByZXR1cm4gUExBWUVSX05VTS5QTEFZRVJfT05FO1xuICAgICAgfSBlbHNlIGlmKGNvdW50Q2lyY2xlID49IDMpIHtcbiAgICAgICAgcmV0dXJuIFBMQVlFUl9OVU0uUExBWUVSX1RXTztcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cblxuZnVuY3Rpb24gY2hlY2tGdWxsKGJvYXJkKSB7XG4gIGZvcihsZXQgaSA9IDA7IGkgPCBib2FyZFswXS5sZW5ndGg7IGkrKykge1xuICAgIGNvbnN0IGN1cnJlbnRMaW5lID0gYm9hcmRbaV07XG5cbiAgICBmb3IobGV0IGogPSAwOyBqIDwgY3VycmVudExpbmUubGVuZ3RoOyBqKyspIHtcbiAgICAgIGNvbnN0IGN1cnJlbnRDYXNlID0gY3VycmVudExpbmVbal07XG5cbiAgICAgIGlmKGN1cnJlbnRDYXNlID09IE1BUktfVFlQRS5FTVBUWSkge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHRydWU7XG59XG5cbmZ1bmN0aW9uIGNoZWNrV2luKGJvYXJkKSB7XG4gIGNvbnN0IGNoZWNrSG9yaXogPSBjaGVja1dpbkhvcml6KGJvYXJkKTtcbiAgY29uc3QgY2hlY2tWZXJ0aSA9IGNoZWNrV2luVmVydGkoYm9hcmQpO1xuICBjb25zdCBjaGVja0RpYWcgPSBjaGVja1dpbkRpYWdvKGJvYXJkKTtcbiAgY29uc3QgY2hlY2tJc0Z1bGwgPSBjaGVja0Z1bGwoYm9hcmQpO1xuXG4gIGlmKGNoZWNrSG9yaXogPT0gUExBWUVSX05VTS5QTEFZRVJfT05FIHx8IGNoZWNrVmVydGkgPT0gUExBWUVSX05VTS5QTEFZRVJfT05FIHx8IGNoZWNrRGlhZyA9PSBQTEFZRVJfTlVNLlBMQVlFUl9PTkUpIHtcbiAgICByZXR1cm4gV0lOX1NJVFVBVElPTi5QTEFZRVJfT05FO1xuICB9IGVsc2UgaWYoY2hlY2tIb3JpeiA9PSBQTEFZRVJfTlVNLlBMQVlFUl9UV08gfHwgY2hlY2tWZXJ0aSA9PSBQTEFZRVJfTlVNLlBMQVlFUl9UV08gfHwgY2hlY2tEaWFnID09IFBMQVlFUl9OVU0uUExBWUVSX1RXTykge1xuICAgIHJldHVybiBXSU5fU0lUVUFUSU9OLlBMQVlFUl9UV087XG4gIH0gZWxzZSBpZihjaGVja0lzRnVsbCkge1xuICAgIHJldHVybiBXSU5fU0lUVUFUSU9OLkRSQVc7XG4gIH1cbn1cblxuZnVuY3Rpb24gZGlzcGxheVJlc3VsdEdhbWUoYm9hcmQpIHtcbiAgY29uc3Qgd2lubmVyID0gY2hlY2tXaW4oYm9hcmQpO1xuXG4gIGlmKHdpbm5lciA9PSBXSU5fU0lUVUFUSU9OLlBMQVlFUl9PTkUpIHtcbiAgICBtZW51UmVzdWx0TGFiZWwudGV4dCA9IFwiUGxheWVyIDEgd29uIVwiO1xuICAgIG1lbnVSZXN1bHQuZW5hYmxlKCk7XG4gIH0gZWxzZSBpZih3aW5uZXIgPT0gV0lOX1NJVFVBVElPTi5QTEFZRVJfVFdPKSB7XG4gICAgbWVudVJlc3VsdExhYmVsLnRleHQgPSBcIlBsYXllciAyIHdvbiFcIjtcbiAgICBtZW51UmVzdWx0LmVuYWJsZSgpO1xuICB9IGVsc2UgaWYod2lubmVyID09IFdJTl9TSVRVQVRJT04uRFJBVykge1xuICAgIG1lbnVSZXN1bHRMYWJlbC50ZXh0ID0gXCJEcmF3IVwiO1xuICAgIG1lbnVSZXN1bHQuZW5hYmxlKCk7XG4gIH1cbn1cblxuZnVuY3Rpb24gZ2FtZUFjdGlvbihib2FyZCwgcG9zaXRpb24pIHtcbiAgaWYocG9zaXRpb24gIT0gbnVsbCkge1xuICAgIGNvbnN0IGN1cnJlbnRDZWxsID0gYm9hcmRbcG9zaXRpb25bMF1dW3Bvc2l0aW9uWzFdXTtcbiAgICBsZXQgbWFyayA9IG51bGw7XG5cbiAgICBpZihjdXJyZW50Q2VsbCA9PSBNQVJLX1RZUEUuRU1QVFkpIHtcbiAgICAgIGlmKGN1cnJlbnRQbGF5ZXIgPT0gUExBWUVSX05VTS5QTEFZRVJfT05FKSB7XG4gICAgICAgIG1hcmsgPSBuZXcgSkdULkNyb3NzKG51bGwsIG51bGwsIDI1LCAyNSwgbmV3IEpHVC5TdHlsZSh7IFwiYWxpZ25lbWVudFwiOiBcImNlbnRlclwiLCBcInZlcnRpY2FsQWxpZ25lbWVudFwiOiBcImNlbnRlclwiLCBcImxpbmVXaWR0aFwiOiA1LCBcImNvbG9yXCI6IFwid2hpdGVcIiB9KSk7XG4gICAgICAgIGN1cnJlbnRQbGF5ZXIgPSBQTEFZRVJfTlVNLlBMQVlFUl9UV087XG4gICAgICAgIGdhbWVJbmZvcy50ZXh0ID0gXCJJdCdzIHRoZSB0dXJuIG9mXFxucGxheWVyIDJcIjtcbiAgICAgICAgYm9hcmRbcG9zaXRpb25bMF1dW3Bvc2l0aW9uWzFdXSA9IFBMQVlFUl9OVU0uUExBWUVSX09ORTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIG1hcmsgPSBuZXcgSkdULkNpcmNsZShudWxsLCBudWxsLCAyNSwgbmV3IEpHVC5TdHlsZSh7IFwiYWxpZ25lbWVudFwiOiBcImNlbnRlclwiLCBcInZlcnRpY2FsQWxpZ25lbWVudFwiOiBcImNlbnRlclwiLCBcImxpbmVXaWR0aFwiOiA1LCBcImNvbG9yXCI6IFwid2hpdGVcIiwgXCJmaWxsXCI6IGZhbHNlIH0pKTtcbiAgICAgICAgY3VycmVudFBsYXllciA9IFBMQVlFUl9OVU0uUExBWUVSX09ORTtcbiAgICAgICAgZ2FtZUluZm9zLnRleHQgPSBcIkl0J3MgdGhlIHR1cm4gb2ZcXG5wbGF5ZXIgMVwiO1xuICAgICAgICBib2FyZFtwb3NpdGlvblswXV1bcG9zaXRpb25bMV1dID0gUExBWUVSX05VTS5QTEFZRVJfVFdPO1xuICAgICAgfVxuXG4gICAgICBpZihtYXJrKSBidXR0b25zQm9hcmRbcG9zaXRpb25bMF1dW3Bvc2l0aW9uWzFdXS5zZXQobWFyayk7XG4gICAgXG4gICAgICBpZihjdXJyZW50R2FtZU1vZGUgPT0gR0FNRV9NT0RFLlBMQVlFUl9WU19BSSAmJiBjdXJyZW50UGxheWVyID09IGFpUGxheWVyKSB7XG4gICAgICAgIHBsYXlBaShib2FyZCk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgZGlzcGxheVJlc3VsdEdhbWUoYm9hcmQpO1xufVxuXG4vKiBGdW5jdGlvbnMgdXNlZCBmb3IgdGhlIEFJXG4gIFVzZSB0aGUgbWluaW1heCBhbGdvcml0aG1cbiAgVGhlIFBMQVlFUl9UV08gaXMgYWx3YXlzIHRoZSBhaSAqL1xuZnVuY3Rpb24gY29weUJvYXJkKGJvYXJkVG9Db3B5KSB7XG4gIGNvbnN0IGdhbWVCb2FyZCA9IFtdO1xuXG4gIGZvcihsZXQgaSA9IDA7IGkgPCBib2FyZFRvQ29weS5sZW5ndGg7IGkrKykge1xuICAgIGdhbWVCb2FyZC5wdXNoKFtdKTtcbiAgICBnYW1lQm9hcmRbaV0gPSBbLi4uYm9hcmRUb0NvcHlbaV1dO1xuICB9XG5cbiAgcmV0dXJuIGdhbWVCb2FyZDtcbn1cblxuZnVuY3Rpb24gZXZhbEJvYXJkKGJvYXJkKSB7XG4gIGNvbnN0IGNoZWNrID0gY2hlY2tXaW4oYm9hcmQpO1xuXG4gIGlmKGNoZWNrKSB7XG4gICAgaWYoY2hlY2sgPT0gV0lOX1NJVFVBVElPTi5EUkFXKSB7XG4gICAgICByZXR1cm4gQUlfV0lOX1NJVFVBVElPTl9TQ09SRVMuRFJBVztcbiAgICB9IGVsc2UgaWYoY2hlY2sgPT0gYWlQbGF5ZXIpIHtcbiAgICAgIHJldHVybiBBSV9XSU5fU0lUVUFUSU9OX1NDT1JFUy5XSU47XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiBBSV9XSU5fU0lUVUFUSU9OX1NDT1JFUy5MT1NFO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBudWxsO1xufVxuXG5mdW5jdGlvbiBuZXh0U2l0dWF0aW9ucyhib2FyZCkge1xuICBjb25zdCBzaXR1cyA9IFtdO1xuXG4gIGZvcihsZXQgaSA9IDA7IGkgPCBib2FyZC5sZW5ndGg7IGkrKykge1xuICAgIGZvcihsZXQgaiA9IDA7IGogPCBib2FyZFtpXS5sZW5ndGg7IGorKykge1xuICAgICAgaWYoYm9hcmRbaV1bal0gPT0gTUFSS19UWVBFLkVNUFRZKSB7XG4gICAgICAgIHNpdHVzLnB1c2goe1xuICAgICAgICAgIFwicG9zaXRpb25cIjogW2ksIGpdLFxuICAgICAgICAgIFwiZXZhbFwiOiBudWxsXG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiBzaXR1cztcbn1cblxuZnVuY3Rpb24gYWkoYm9hcmQsIGRlcHRoLCBpc0FJKSB7XG4gIGNvbnN0IGV2YWx1YXRpb24gPSBldmFsQm9hcmQoYm9hcmQpO1xuXG4gIGxldCBiZXN0U3RhdGUgPSB7XG4gICAgXCJwb3NpdGlvblwiOiBudWxsLFxuICAgIFwiZXZhbFwiOiBpc0FJID8gLUluZmluaXR5IDogSW5maW5pdHlcbiAgfTtcblxuICBpZihkZXB0aCA8PSAwIHx8IGV2YWx1YXRpb24gIT0gbnVsbCkge1xuICAgIGJlc3RTdGF0ZS5ldmFsID0gZXZhbHVhdGlvbjtcbiAgICByZXR1cm4gYmVzdFN0YXRlO1xuICB9XG5cbiAgY29uc3Qgc2l0dWF0aW9ucyA9IG5leHRTaXR1YXRpb25zKGJvYXJkKTtcblxuICBmb3IobGV0IGkgPSAwOyBpIDwgc2l0dWF0aW9ucy5sZW5ndGg7IGkrKykge1xuICAgIGNvbnN0IHNpdHVhdGlvbiA9IHNpdHVhdGlvbnNbaV07XG4gICAgY29uc3QgcG9zaXRpb24gPSBzaXR1YXRpb24ucG9zaXRpb247XG4gICAgYm9hcmRbcG9zaXRpb25bMF1dW3Bvc2l0aW9uWzFdXSA9IGlzQUkgPyBhaVBsYXllciA6IG90aGVyUGxheWVyO1xuXG4gICAgaWYoaXNBSSkge1xuICAgICAgY29uc3Qgc3RhdGUgPSBhaShib2FyZCwgZGVwdGggLSAxLCBmYWxzZSk7XG5cbiAgICAgIGlmKHN0YXRlLmV2YWwgPj0gYmVzdFN0YXRlLmV2YWwpIHtcbiAgICAgICAgYmVzdFN0YXRlLmV2YWwgPSBzdGF0ZS5ldmFsO1xuICAgICAgICBzaXR1YXRpb24uZXZhbCA9IHN0YXRlLmV2YWw7XG4gICAgICAgIGJlc3RTdGF0ZS5wb3NpdGlvbiA9IHBvc2l0aW9uO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBjb25zdCBzdGF0ZSA9IGFpKGJvYXJkLCBkZXB0aCAtIDEsIHRydWUpO1xuXG4gICAgICBpZihzdGF0ZS5ldmFsIDw9IGJlc3RTdGF0ZS5ldmFsKSB7XG4gICAgICAgIGJlc3RTdGF0ZS5ldmFsID0gc3RhdGUuZXZhbDtcbiAgICAgICAgc2l0dWF0aW9uLmV2YWwgPSBzdGF0ZS5ldmFsO1xuICAgICAgICBiZXN0U3RhdGUucG9zaXRpb24gPSBwb3NpdGlvbjtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBib2FyZFtwb3NpdGlvblswXV1bcG9zaXRpb25bMV1dID0gTUFSS19UWVBFLkVNUFRZO1xuICB9XG5cbiAgcmV0dXJuIGJlc3RTdGF0ZTtcbn1cblxuZnVuY3Rpb24gcGxheUFpKGJvYXJkKSB7XG4gIGNvbnN0IGJlc3RNb3ZlID0gYWkoY29weUJvYXJkKGJvYXJkKSwgYWlMZXZlbCwgdHJ1ZSk7XG5cbiAgaWYoYmVzdE1vdmUpIHtcbiAgICBnYW1lQWN0aW9uKGJvYXJkLCBiZXN0TW92ZS5wb3NpdGlvbik7XG4gIH1cbn1cblxuZnVuY3Rpb24gcmFuZFJhbmdlKG1pbiwgbWF4KSB7XG4gIHJldHVybiBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAobWF4IC0gbWluICsgMSkpICsgbWluO1xufVxuXG5mdW5jdGlvbiBnZXRSYW5kb21Qb3NpdGlvbihib2FyZCkge1xuICByZXR1cm4gW3JhbmRSYW5nZSgwLCBib2FyZC5sZW5ndGggLSAxKSwgcmFuZFJhbmdlKDAsIGJvYXJkWzBdLmxlbmd0aCAtIDEpXTtcbn1cblxuZnVuY3Rpb24gcnVuR2FtZShnYW1lTW9kZSwgc2l6ZSkge1xuICBjdXJyZW50UGxheWVyID0gUExBWUVSX05VTS5QTEFZRVJfT05FO1xuICBnYW1lSW5mb3MudGV4dCA9IFwiSXQncyB0aGUgdHVybiBvZlxcbnBsYXllciAxXCI7XG4gIGlmKGdhbWVNb2RlKSBjdXJyZW50R2FtZU1vZGUgPSBnYW1lTW9kZTtcblxuICBpZihzaXplKSB7XG4gICAgc2l6ZUJvYXJkWzBdID0gTWF0aC5tYXgoMywgc2l6ZVswXSk7XG4gICAgc2l6ZUJvYXJkWzFdID0gTWF0aC5tYXgoMywgc2l6ZVsxXSk7XG4gIH1cblxuICBjcmVhdGVCb2FyZCgpO1xuICBjbG9zZUFsbE1lbnVzKCk7XG5cbiAgaWYoZ2FtZU1vZGUgPT0gR0FNRV9NT0RFLlBMQVlFUl9WU19BSSAmJiBhaVBsYXllciA9PSBQTEFZRVJfTlVNLlBMQVlFUl9PTkUpIHtcbiAgICBnYW1lQWN0aW9uKGdhbWVCb2FyZCwgZ2V0UmFuZG9tUG9zaXRpb24oZ2FtZUJvYXJkKSk7XG4gIH1cblxuICBjb2wuc3R5bGUuc2V0KFwiaGlkZGVuXCIsIGZhbHNlKTtcbn1cblxuZnVuY3Rpb24gY2xvc2VBbGxNZW51cygpIHtcbiAgbWVudS5kaXNhYmxlKCk7XG4gIG1haW5NZW51LmRpc2FibGUoKTtcbiAgbWVudVJlc3VsdC5kaXNhYmxlKCk7XG4gIHBsYXllclZTUGxheWVyTWVudS5kaXNhYmxlKCk7XG4gIHBsYXllclZTQUlNZW51LmRpc2FibGUoKTtcbiAgY29sLnN0eWxlLnNldChcImhpZGRlblwiLCB0cnVlKTtcbn1cblxuZnVuY3Rpb24gb3Blbk1haW5NZW51KCkge1xuICBjbG9zZUFsbE1lbnVzKCk7XG4gIG1haW5NZW51LmVuYWJsZSgpO1xufVxuXG4vLyBDcmVhdGUgc2NlbmUgKGNvbnRhaW5pbmcgY29tcG9uZW50cykgYW5kIGNhbnZhc1xuY29uc3Qgc2NlbmUgPSBuZXcgSkdULlNjZW5lKGJveCwgY29sLCByb3dCdXR0b25zLCBtZW51LCBtZW51UmVzdWx0LCBtYWluTWVudSwgcGxheWVyVlNQbGF5ZXJNZW51LCBwbGF5ZXJWU0FJTWVudSwgb3B0aW9uc0FJTGV2ZWwsIG9wdGlvbnNBSUZpcnN0UGxheWVyLCBmcHNNZXRlcik7XG5jb25zdCBjYW52YXMgPSBuZXcgSkdULkNhbnZhcyhzY2VuZSwgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjYW52YXNcIiksIG51bGwsIG51bGwsIHRydWUpO1xuY2FudmFzLmFwcGVuZFRvKGRvY3VtZW50LmJvZHkpO1xuY2FudmFzLnRvZ2dsZUZ1bGxwYWdlKCk7XG5cbmNvbC5tYXhIZWlnaHQgPSBjYW52YXMuaGVpZ2h0O1xuY29sLm1heFdpZHRoID0gY2FudmFzLndpZHRoO1xuYm94LmhlaWdodCA9IGNhbnZhcy5oZWlnaHQ7XG5ib3gud2lkdGggPSBjYW52YXMud2lkdGg7XG5cbi8vIExvYWQgcGF1c2UgaW1hZ2UgYW5kIHN0YXJ0IHRoZSBjYW52YXMgcmVuZGVyaW5nXG5pbWFnZUxvYWRlci5sb2FkKFtcInBhdXNlLnBuZ1wiLCBcImZ1bGxzY3JlZW4ucG5nXCJdLCAoKSA9PiB7XG4gIHBhdXNlSW1hZ2UubG9hZEltYWdlKGltYWdlTG9hZGVyKTtcbiAgZnVsbHNjcmVlbkltYWdlLmxvYWRJbWFnZShpbWFnZUxvYWRlcik7XG4gIFxuICBjYW52YXMuc3RhcnREcmF3KCgpID0+IHtcbiAgICBjb2wubWF4SGVpZ2h0ID0gY2FudmFzLmhlaWdodDtcbiAgICBjb2wubWF4V2lkdGggPSBjYW52YXMud2lkdGg7XG4gICAgYm94LmhlaWdodCA9IGNhbnZhcy5oZWlnaHQ7XG4gICAgYm94LndpZHRoID0gY2FudmFzLndpZHRoO1xuICB9KTtcbn0pOyIsImZ1bmN0aW9uIF9hcnJheUxpa2VUb0FycmF5KGFyciwgbGVuKSB7XG4gIGlmIChsZW4gPT0gbnVsbCB8fCBsZW4gPiBhcnIubGVuZ3RoKSBsZW4gPSBhcnIubGVuZ3RoO1xuXG4gIGZvciAodmFyIGkgPSAwLCBhcnIyID0gbmV3IEFycmF5KGxlbik7IGkgPCBsZW47IGkrKykge1xuICAgIGFycjJbaV0gPSBhcnJbaV07XG4gIH1cblxuICByZXR1cm4gYXJyMjtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfYXJyYXlMaWtlVG9BcnJheTsiLCJ2YXIgYXJyYXlMaWtlVG9BcnJheSA9IHJlcXVpcmUoXCIuL2FycmF5TGlrZVRvQXJyYXlcIik7XG5cbmZ1bmN0aW9uIF9hcnJheVdpdGhvdXRIb2xlcyhhcnIpIHtcbiAgaWYgKEFycmF5LmlzQXJyYXkoYXJyKSkgcmV0dXJuIGFycmF5TGlrZVRvQXJyYXkoYXJyKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfYXJyYXlXaXRob3V0SG9sZXM7IiwiZnVuY3Rpb24gX2l0ZXJhYmxlVG9BcnJheShpdGVyKSB7XG4gIGlmICh0eXBlb2YgU3ltYm9sICE9PSBcInVuZGVmaW5lZFwiICYmIFN5bWJvbC5pdGVyYXRvciBpbiBPYmplY3QoaXRlcikpIHJldHVybiBBcnJheS5mcm9tKGl0ZXIpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9pdGVyYWJsZVRvQXJyYXk7IiwiZnVuY3Rpb24gX25vbkl0ZXJhYmxlU3ByZWFkKCkge1xuICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiSW52YWxpZCBhdHRlbXB0IHRvIHNwcmVhZCBub24taXRlcmFibGUgaW5zdGFuY2UuXFxuSW4gb3JkZXIgdG8gYmUgaXRlcmFibGUsIG5vbi1hcnJheSBvYmplY3RzIG11c3QgaGF2ZSBhIFtTeW1ib2wuaXRlcmF0b3JdKCkgbWV0aG9kLlwiKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfbm9uSXRlcmFibGVTcHJlYWQ7IiwidmFyIGFycmF5V2l0aG91dEhvbGVzID0gcmVxdWlyZShcIi4vYXJyYXlXaXRob3V0SG9sZXNcIik7XG5cbnZhciBpdGVyYWJsZVRvQXJyYXkgPSByZXF1aXJlKFwiLi9pdGVyYWJsZVRvQXJyYXlcIik7XG5cbnZhciB1bnN1cHBvcnRlZEl0ZXJhYmxlVG9BcnJheSA9IHJlcXVpcmUoXCIuL3Vuc3VwcG9ydGVkSXRlcmFibGVUb0FycmF5XCIpO1xuXG52YXIgbm9uSXRlcmFibGVTcHJlYWQgPSByZXF1aXJlKFwiLi9ub25JdGVyYWJsZVNwcmVhZFwiKTtcblxuZnVuY3Rpb24gX3RvQ29uc3VtYWJsZUFycmF5KGFycikge1xuICByZXR1cm4gYXJyYXlXaXRob3V0SG9sZXMoYXJyKSB8fCBpdGVyYWJsZVRvQXJyYXkoYXJyKSB8fCB1bnN1cHBvcnRlZEl0ZXJhYmxlVG9BcnJheShhcnIpIHx8IG5vbkl0ZXJhYmxlU3ByZWFkKCk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX3RvQ29uc3VtYWJsZUFycmF5OyIsInZhciBhcnJheUxpa2VUb0FycmF5ID0gcmVxdWlyZShcIi4vYXJyYXlMaWtlVG9BcnJheVwiKTtcblxuZnVuY3Rpb24gX3Vuc3VwcG9ydGVkSXRlcmFibGVUb0FycmF5KG8sIG1pbkxlbikge1xuICBpZiAoIW8pIHJldHVybjtcbiAgaWYgKHR5cGVvZiBvID09PSBcInN0cmluZ1wiKSByZXR1cm4gYXJyYXlMaWtlVG9BcnJheShvLCBtaW5MZW4pO1xuICB2YXIgbiA9IE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChvKS5zbGljZSg4LCAtMSk7XG4gIGlmIChuID09PSBcIk9iamVjdFwiICYmIG8uY29uc3RydWN0b3IpIG4gPSBvLmNvbnN0cnVjdG9yLm5hbWU7XG4gIGlmIChuID09PSBcIk1hcFwiIHx8IG4gPT09IFwiU2V0XCIpIHJldHVybiBBcnJheS5mcm9tKG8pO1xuICBpZiAobiA9PT0gXCJBcmd1bWVudHNcIiB8fCAvXig/OlVpfEkpbnQoPzo4fDE2fDMyKSg/OkNsYW1wZWQpP0FycmF5JC8udGVzdChuKSkgcmV0dXJuIGFycmF5TGlrZVRvQXJyYXkobywgbWluTGVuKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfdW5zdXBwb3J0ZWRJdGVyYWJsZVRvQXJyYXk7Il0sInNvdXJjZVJvb3QiOiIifQ==