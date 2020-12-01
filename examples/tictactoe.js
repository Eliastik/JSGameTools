/*
 * Copyright (C) 2020 Eliastik (eliastiksofts.com)
 *
 * This file is part of "JSGameTools".
 *
 * "JSGameTools" is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
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
const JGT = JSGameTools;
JGT.Constants.Setting.FONT_FAMILY = "Gaegu";
JGT.Constants.Setting.FONT_SIZE = 35;

// Graphic components
const imageLoader = new JGT.ImageLoader();

const buttonStyle = new JGT.Style({ "backgroundColor": "gray", "borderSize": 2, "borderColor": "black" });
const labelStyle = new JGT.Style({ "fontColor": "white", "alignement": "center" });
const labelStyleDefault = new JGT.Style({ "fontColor": "white" });
const buttonStyle2 = new JGT.Style({ "backgroundColor": "#2ecc71", "backgroundColorHover": "#1abc9c", "backgroundColorDown": "#16a085", "alignement": "center" });
const buttonStyleDefault = new JGT.Style({ "backgroundColor": "#2ecc71", "backgroundColorHover": "#1abc9c", "backgroundColorDown": "#16a085" });
const buttonStyleRed = new JGT.Style({ "backgroundColor": "#CC2F2F", "backgroundColorHover": "#F23838", "backgroundColorDown": "#A62626", "alignement": "center" });
const buttonStyleRedDefault = new JGT.Style({ "backgroundColor": "#CC2F2F", "backgroundColorHover": "#F23838", "backgroundColorDown": "#A62626" });

const box = new JGT.Box(0, 0, 800, 600, new JGT.Style({ "backgroundColor": "lightgray" }));
const gameInfos = new JGT.Label("", null, null, new JGT.Style({ "alignement": "center", "fontSize": 30 }));
const fpsMeter = new JGT.FPSMeter(false, null, null, new JGT.Style({ "alignement": "right", "verticalAlignement": "bottom", "foreground": true }));

const pauseImage = new JGT.ImageContainer("pause.png", null, null, 64, 64, new JGT.Style({ "verticalAlignement": "center", "alignement": "center" }));
const fullscreenImage = new JGT.ImageContainer("fullscreen.png", null, null, 64, 64, new JGT.Style({ "verticalAlignement": "center", "alignement": "center" }));
const pauseButton = new JGT.Button(null, 50, null, null, new JGT.Style({ "alignement": "right", "verticalAlignement": "center" }), new JGT.Row(5, 250, null, null, null, pauseImage));
const fullscreenButton = new JGT.Button(null, 50, null, null, new JGT.Style({ "alignement": "left", "verticalAlignement": "center" }), new JGT.Row(5, 250, null, null, null, fullscreenImage));
const rowButtons = new JGT.Row(null, null, null, null, new JGT.Style({ "alignement": "right", "verticalAlignement": "top" }), fullscreenButton, pauseButton);

// Pause menu
const buttonNewGame = new JGT.Button(5, 5, null, null, buttonStyle2, new JGT.Label("New game", null, null, labelStyle));
const buttonMenu1 = new JGT.Button(5, 5, null, null, buttonStyle2, new JGT.Label("Reset the game", null, null, labelStyle));
const buttonMenu2 = new JGT.Button(5, 5, null, null, buttonStyleRed, new JGT.Label("Close", null, null, labelStyle));
const menuLabel = new JGT.Label("Pause menu", null, null, labelStyle);
const menu = new JGT.Menu(null, menuLabel, buttonNewGame, buttonMenu1, buttonMenu2);

// Result menu
const buttonNewGame2 = new JGT.Button(5, 5, null, null, buttonStyle2, new JGT.Label("New game", null, null, labelStyle));
const buttonMenu3 = new JGT.Button(5, 5, null, null, buttonStyle2, new JGT.Label("Reset the game", null, null, labelStyle));
const menuResultLabel = new JGT.Label("???", null, null, labelStyle);
const menuResult = new JGT.Menu(null, menuResultLabel, buttonNewGame2, buttonMenu3);

// Main menu
const buttonPlayerVSAI = new JGT.Button(5, 5, null, null, buttonStyle2, new JGT.Label("Player VS AI", null, null, labelStyle));
const buttonPlayerVSPlayer = new JGT.Button(5, 5, null, null, buttonStyle2, new JGT.Label("Player VS Player", null, null, labelStyle));
const buttonExit = new JGT.Button(5, 5, null, null, buttonStyleRed, new JGT.Label("Exit", null, null, labelStyle));
const mainMenuLabel = new JGT.Label("JSGameTools\nTic Tac Toe example", null, null, labelStyle);
const mainMenu = new JGT.Menu(new JGT.Style({ "backgroundColor": "rgba(44, 62, 80, 1)" }), mainMenuLabel, buttonPlayerVSAI, buttonPlayerVSPlayer, buttonExit);
mainMenu.enable();

// Player VS Player settings
const labelPlayerVSPlayerMenu = new JGT.Label("Player VS Player", null, null, labelStyle);
const labelGridParamPlayerVSPlayerMenu = new JGT.Label("Grid size: ", null, null, labelStyleDefault);
const inputRow = new JGT.Input(null, null, 50, null, null, "3");
const xSign = new JGT.Label("×", null, null, labelStyleDefault);
const inputCol = new JGT.Input(null, null, 50, null, null, "3");
const validatePlayerVSPlayer = new JGT.Button(5, 5, null, null, buttonStyleDefault, new JGT.Label("Play", null, null, labelStyle));
const cancelPlayerVSPlayer = new JGT.Button(5, 5, null, null, buttonStyleRedDefault, new JGT.Label("Cancel", null, null, labelStyle));
const playerVSPlayerMenu = new JGT.Menu(new JGT.Style({ "backgroundColor": "rgba(44, 62, 80, 1)" }), labelPlayerVSPlayerMenu, new JGT.Row(null, null, null, null, new JGT.Style({ "alignement": "center", "padding": 20 }), labelGridParamPlayerVSPlayerMenu, inputRow, xSign, inputCol), new JGT.Row(null, null, null, null, new JGT.Style({ "alignement": "center", "padding": 20 }), validatePlayerVSPlayer, cancelPlayerVSPlayer));

// Player VS AI settings
const labelPlayerVSAIMenu = new JGT.Label("Player VS AI", null, null, labelStyle);
const labelGridParamPlayerVSAIMenu = new JGT.Label("Grid size: ", null, null, labelStyleDefault);
const inputRowAI = new JGT.Input(null, null, 50, null, null, "3");
const xSignAI = new JGT.Label("×", null, null, labelStyleDefault);
const inputColAI = new JGT.Input(null, null, 50, null, null, "3");
const labelAILevel = new JGT.Label("AI level: ", null, null, labelStyleDefault);
const optionsAILevel = new JGT.SelectOptionsContainer(75, new JGT.Style({ "foreground": true }), new JGT.SelectOption(new JGT.Label("Low")), new JGT.SelectOption(new JGT.Label("Normal")), new JGT.SelectOption(new JGT.Label("High")));
const selectAILevel = new JGT.Select(255, 315, null, null, null, optionsAILevel, 1);
const labelAIFirstPlayer = new JGT.Label("First player: ", null, null, labelStyleDefault);
const optionsAIFirstPlayer = new JGT.SelectOptionsContainer(75, new JGT.Style({ "foreground": true }), new JGT.SelectOption(new JGT.Label("You")), new JGT.SelectOption(new JGT.Label("AI")));
const selectAIFirstPlayer = new JGT.Select(255, 315, null, null, null, optionsAIFirstPlayer, 1);
const validatePlayerVSAI = new JGT.Button(5, 5, null, null, buttonStyleDefault, new JGT.Label("Play", null, null, labelStyle));
const cancelPlayerVSAI = new JGT.Button(5, 5, null, null, buttonStyleRedDefault, new JGT.Label("Cancel", null, null, labelStyle));
const playerVSAIMenu = new JGT.Menu(new JGT.Style({ "backgroundColor": "rgba(44, 62, 80, 1)" }), labelPlayerVSAIMenu, new JGT.Row(null, null, null, null, new JGT.Style({ "alignement": "center", "padding": 20 }), labelGridParamPlayerVSAIMenu, inputRowAI, xSignAI, inputColAI), new JGT.Row(null, null, null, null, new JGT.Style({ "alignement": "center", "padding": 20 }), labelAILevel, selectAILevel), new JGT.Row(null, null, null, null, new JGT.Style({ "alignement": "center", "padding": 20 }), labelAIFirstPlayer, selectAIFirstPlayer), new JGT.Row(null, null, null, null, new JGT.Style({ "alignement": "center", "padding": 20 }), validatePlayerVSAI, cancelPlayerVSAI));

pauseButton.addClickAction(() => {
  menu.enable();
});

fullscreenButton.addClickAction(() => {
  canvas.toggleFullscreen();
});

buttonMenu2.addClickAction(() => {
  menu.disable();
});

buttonExit.addClickAction(() => {
  location.href = "./index.html";
});

buttonNewGame.addClickAction(openMainMenu);
buttonNewGame2.addClickAction(openMainMenu);

validatePlayerVSPlayer.addClickAction(() => {
  runGame(GAME_MODE.PLAYER_VS_PLAYER, [inputRow.text.trim() == "" || isNaN(inputRow.text) ? 3 : parseInt(inputRow.text), inputCol.text.trim() == "" || isNaN(inputCol.text) ? 3 : parseInt(inputCol.text)]);
});

buttonPlayerVSPlayer.addClickAction(() => {
  mainMenu.disable();
  playerVSPlayerMenu.enable();
});

cancelPlayerVSPlayer.addClickAction(() => {
  mainMenu.enable();
  playerVSPlayerMenu.disable();
});

buttonPlayerVSAI.addClickAction(() => {
  mainMenu.disable();
  playerVSAIMenu.enable();
});

validatePlayerVSAI.addClickAction(() => {
  aiPlayer = PLAYER_NUM.PLAYER_TWO;
  otherPlayer = PLAYER_NUM.PLAYER_ONE;
  aiLevel = AI_LEVEL.NORMAL;

  switch(selectAILevel.text) {
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

  switch(selectAIFirstPlayer.text) {
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

cancelPlayerVSAI.addClickAction(() => {
  mainMenu.enable();
  playerVSAIMenu.disable();
});

buttonMenu1.addClickAction(() => runGame(currentGameMode, sizeBoard));
buttonMenu3.addClickAction(() => runGame(currentGameMode, sizeBoard));

// Board col
const col = new JGT.Col(null, null, null, null, new JGT.Style({ "alignement": "center", "verticalAlignement": "center" }));

// Events, game variables and logic
const MARK_TYPE = { CROSS: "cross", CIRCLE: "circle", EMPTY: "empty" };
const PLAYER_NUM = { PLAYER_ONE: MARK_TYPE.CROSS, PLAYER_TWO: MARK_TYPE.CIRCLE };
const WIN_SITUATION = { PLAYER_ONE: PLAYER_NUM.PLAYER_ONE, PLAYER_TWO: PLAYER_NUM.PLAYER_TWO, DRAW: 0 };
const GAME_MODE = { PLAYER_VS_AI: 1, PLAYER_VS_PLAYER: 2 };
const AI_LEVEL = { HIGH: 10, NORMAL: 5, LOW: 3 };
const AI_WIN_SITUATION_SCORES = { WIN: 10, LOSE: -10, DRAW: 0 };
const DEFAULT_MAX_DEPTH_MINIMAX = AI_LEVEL.HIGH;

let currentPlayer = PLAYER_NUM.PLAYER_ONE;
let aiPlayer = PLAYER_NUM.PLAYER_TWO;
let otherPlayer = PLAYER_NUM.PLAYER_ONE;
let currentGameMode = GAME_MODE.PLAYER_VS_AI;
let aiLevel = AI_LEVEL.HIGH;
let sizeBoard = [3, 3];
let buttons = [];
let buttonsBoard = [];
let gameBoard = [];

function createBoard() {
  col.clear();
  col.add(gameInfos);
  gameBoard = [];
  buttons = [];
  buttonsBoard = [];

  for(let i = 0; i < sizeBoard[0]; i++) {
    const row = new JGT.Row();
    const line = [];
    const lineButton = [];
  
    for(let j = 0; j < sizeBoard[1]; j++) {
      const button = new JGT.Button(null, null, 75, 75, buttonStyle);
      buttons.push(button);
      lineButton.push(button);
      row.add(button);
      line.push(MARK_TYPE.EMPTY);
    }

    gameBoard.push(line);
    buttonsBoard.push(lineButton);
    col.add(row);
  }

  buttons.forEach((button, i) => button.addClickAction(() => {
    const currentCellPosition = [Math.floor(i / sizeBoard[1]), i % sizeBoard[1]];
    gameAction(gameBoard, currentCellPosition);
  }));
}

function toStr(board) {
  let str = "";

  for(let i = 0; i < board.length; i++) {
    for(let j = 0; j < board[i].length; j++) {
      if(board[i][j] == MARK_TYPE.EMPTY) {
        str += "   ";
      } else if(board[i][j] == MARK_TYPE.CIRCLE) {
        str += " o ";
      } else if(board[i][j] == MARK_TYPE.CROSS) {
        str += " x ";
      }
    }

    str += "\n";
  }

  return str;
}

function checkWinHoriz(board) {
  let countCross = 0;
  let countCircle = 0;

  for(let i = 0; i < board.length; i++) {
    const currentLine = board[i];

    for(let j = 0; j < currentLine.length; j++) {
      if(currentLine[j] == MARK_TYPE.CROSS) {
        countCross++;
        countCircle = 0;
      } else if(currentLine[j] == MARK_TYPE.CIRCLE) {
        countCircle++;
        countCross = 0;
      } else {
        countCircle = 0;
        countCross = 0;
      }

      if(countCross >= 3) {
        return PLAYER_NUM.PLAYER_ONE;
      } else if(countCircle >= 3) {
        return PLAYER_NUM.PLAYER_TWO;
      }
    }

    countCross = 0;
    countCircle = 0;
  }

  return null;
}

function checkWinVerti(board) {
  let countCross = 0;
  let countCircle = 0;

  for(let i = 0; i < board[0].length; i++) {
    for(let j = 0; j < board.length; j++) {
        const currentCase = board[j][i];

        if(currentCase == MARK_TYPE.CROSS) {
          countCross++;
          countCircle = 0;
        } else if(currentCase == MARK_TYPE.CIRCLE) {
          countCircle++;
          countCross = 0;
        } else {
          countCircle = 0;
          countCross = 0;
        }

        if(countCross >= 3) {
          return PLAYER_NUM.PLAYER_ONE;
        } else if(countCircle >= 3) {
          return PLAYER_NUM.PLAYER_TWO;
        }
      }

      countCross = 0;
      countCircle = 0;
  }

  return null;
}

function checkWinDiago(board) {
  for(let i = 0; i < board.length; i++) {
    const currentLine = board[i];

    for(let j = 0; j < currentLine.length; j++) {
        const cellsToCheck = [[j, i], [j - 1, i - 1], [j - 2, i - 2]];
        const cellsToCheckTwo = [[j, i], [j + 1, i + 1], [j + 2, i + 2]];
        const cellsToCheckAnti = [[j, i], [j - 1, i + 1], [j - 2, i + 2]];
        const cellsToCheckAntiTwo = [[j, i], [j + 1, i - 1], [j + 2, i - 2]];

        const checkCells = checkCasesDiago(board, currentLine, cellsToCheck);
        const checkCellsAnti = checkCasesDiago(board, currentLine, cellsToCheckAnti);
        const checkCellsTwo = checkCasesDiago(board, currentLine, cellsToCheckTwo);
        const checkCellsAntiTwo = checkCasesDiago(board, currentLine, cellsToCheckAntiTwo);

        if(checkCells) return checkCells;
        if(checkCellsAnti) return checkCellsAnti;
        if(checkCellsTwo) return checkCellsTwo;
        if(checkCellsAntiTwo) return checkCellsAntiTwo;
    }
  }

  return null;
}

function checkCasesDiago(board, currentLine, cellsToCheck) {
  let countCross = 0;
  let countCircle = 0;

  for(let k = 0; k < cellsToCheck.length; k++) {
    const c = cellsToCheck[k];

    if(c[1] >= 0 && c[1] < board.length && c[0] >= 0 && c[0] < currentLine.length) {
      const cell = board[c[1]][c[0]];

      if(cell == MARK_TYPE.CROSS) {
        countCross++;
        countCircle = 0;
      } else if(cell == MARK_TYPE.CIRCLE) {
        countCircle++;
        countCross = 0;
      } else {
        countCircle = 0;
        countCross = 0;
      }

      if(countCross >= 3) {
        return PLAYER_NUM.PLAYER_ONE;
      } else if(countCircle >= 3) {
        return PLAYER_NUM.PLAYER_TWO;
      }
    }
  }
}

function checkFull(board) {
  for(let i = 0; i < board[0].length; i++) {
    const currentLine = board[i];

    for(let j = 0; j < currentLine.length; j++) {
      const currentCase = currentLine[j];

      if(currentCase == MARK_TYPE.EMPTY) {
        return false;
      }
    }
  }

  return true;
}

function checkWin(board) {
  const checkHoriz = checkWinHoriz(board);
  const checkVerti = checkWinVerti(board);
  const checkDiag = checkWinDiago(board);
  const checkIsFull = checkFull(board);

  if(checkHoriz == PLAYER_NUM.PLAYER_ONE || checkVerti == PLAYER_NUM.PLAYER_ONE || checkDiag == PLAYER_NUM.PLAYER_ONE) {
    return WIN_SITUATION.PLAYER_ONE;
  } else if(checkHoriz == PLAYER_NUM.PLAYER_TWO || checkVerti == PLAYER_NUM.PLAYER_TWO || checkDiag == PLAYER_NUM.PLAYER_TWO) {
    return WIN_SITUATION.PLAYER_TWO;
  } else if(checkIsFull) {
    return WIN_SITUATION.DRAW;
  }
}

function displayResultGame(board) {
  const winner = checkWin(board);

  if(winner == WIN_SITUATION.PLAYER_ONE) {
    menuResultLabel.text = "Player 1 won!";
    menuResult.enable();
  } else if(winner == WIN_SITUATION.PLAYER_TWO) {
    menuResultLabel.text = "Player 2 won!";
    menuResult.enable();
  } else if(winner == WIN_SITUATION.DRAW) {
    menuResultLabel.text = "Draw!";
    menuResult.enable();
  }
}

function gameAction(board, position) {
  if(position != null) {
    const currentCell = board[position[0]][position[1]];
    let mark = null;

    if(currentCell == MARK_TYPE.EMPTY) {
      if(currentPlayer == PLAYER_NUM.PLAYER_ONE) {
        mark = new JGT.Cross(null, null, 25, 25, new JGT.Style({ "alignement": "center", "verticalAlignement": "center", "lineWidth": 5, "color": "white" }));
        currentPlayer = PLAYER_NUM.PLAYER_TWO;
        gameInfos.text = "It's the turn of\nplayer 2";
        board[position[0]][position[1]] = PLAYER_NUM.PLAYER_ONE;
      } else {
        mark = new JGT.Circle(null, null, 25, new JGT.Style({ "alignement": "center", "verticalAlignement": "center", "lineWidth": 5, "color": "white", "fill": false }));
        currentPlayer = PLAYER_NUM.PLAYER_ONE;
        gameInfos.text = "It's the turn of\nplayer 1";
        board[position[0]][position[1]] = PLAYER_NUM.PLAYER_TWO;
      }

      if(mark) buttonsBoard[position[0]][position[1]].set(mark);
    
      if(currentGameMode == GAME_MODE.PLAYER_VS_AI && currentPlayer == aiPlayer) {
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
  const gameBoard = [];

  for(let i = 0; i < boardToCopy.length; i++) {
    gameBoard.push([]);
    gameBoard[i] = [...boardToCopy[i]];
  }

  return gameBoard;
}

function eval(board) {
  const check = checkWin(board);

  if(check) {
    if(check == WIN_SITUATION.DRAW) {
      return AI_WIN_SITUATION_SCORES.DRAW;
    } else if(check == aiPlayer) {
      return AI_WIN_SITUATION_SCORES.WIN;
    } else {
      return AI_WIN_SITUATION_SCORES.LOSE;
    }
  }

  return null;
}

function nextSituations(board) {
  const situs = [];

  for(let i = 0; i < board.length; i++) {
    for(let j = 0; j < board[i].length; j++) {
      if(board[i][j] == MARK_TYPE.EMPTY) {
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
  const evaluation = eval(board);

  let bestState = {
    "position": null,
    "eval": isAI ? -Infinity : Infinity
  };

  if(depth <= 0 || evaluation != null) {
    bestState.eval = evaluation;
    return bestState;
  }

  const situations = nextSituations(board);

  for(let i = 0; i < situations.length; i++) {
    const situation = situations[i];
    const position = situation.position;
    board[position[0]][position[1]] = isAI ? aiPlayer : otherPlayer;

    if(isAI) {
      const state = ai(board, depth - 1, false);

      if(state.eval >= bestState.eval) {
        bestState.eval = state.eval;
        situation.eval = state.eval;
        bestState.position = position;
      }
    } else {
      const state = ai(board, depth - 1, true);

      if(state.eval <= bestState.eval) {
        bestState.eval = state.eval;
        situation.eval = state.eval;
        bestState.position = position;
      }
    }

    board[position[0]][position[1]] = MARK_TYPE.EMPTY;
  }

  return bestState;
}

function playAi(board) {
  const bestMove = ai(copyBoard(board), aiLevel, true);

  if(bestMove) {
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
  if(gameMode) currentGameMode = gameMode;

  if(size) {
    sizeBoard[0] = Math.max(3, size[0]);
    sizeBoard[1] = Math.max(3, size[1]);
  }

  createBoard();
  closeAllMenus();

  if(gameMode == GAME_MODE.PLAYER_VS_AI && aiPlayer == PLAYER_NUM.PLAYER_ONE) {
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
const scene = new JGT.Scene(box, col, rowButtons, menu, menuResult, mainMenu, playerVSPlayerMenu, playerVSAIMenu, optionsAILevel, optionsAIFirstPlayer, fpsMeter);
const canvas = new JGT.Canvas(scene, document.getElementById("canvas"), null, null, true);
canvas.appendTo(document.body);
canvas.toggleFullpage();

col.maxHeight = canvas.height;
col.maxWidth = canvas.width;
box.height = canvas.height;
box.width = canvas.width;

// Load pause image and start the canvas rendering
imageLoader.load(["pause.png", "fullscreen.png"], () => {
  pauseImage.loadImage(imageLoader);
  fullscreenImage.loadImage(imageLoader);
  
  canvas.startDraw(() => {
    col.maxHeight = canvas.height;
    col.maxWidth = canvas.width;
    box.height = canvas.height;
    box.width = canvas.width;
  });
});