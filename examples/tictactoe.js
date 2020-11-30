/*
 * Copyright (C) 2020 Eliastik (eliastiksofts.com)
 *
 * This file is part of "JSGameTools".
 *
 * "JSGameTools" is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
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

const imageLoader = new JGT.ImageLoader();

const buttonStyle = new JGT.Style({ "backgroundColor": "gray", "borderSize": 2, "borderColor": "black" });
const labelStyle = new JGT.Style({ "fontColor": "white" });
const buttonStyle2 = new JGT.Style({ "backgroundColor": "#2ecc71", "backgroundColorHover": "#1abc9c", "backgroundColorDown": "#16a085" });
const buttonStyleRed = new JGT.Style({ "backgroundColor": "#CC2F2F", "backgroundColorHover": "#F23838", "backgroundColorDown": "#A62626" });

const box = new JGT.Box(0, 0, 800, 600, new JGT.Style({ "backgroundColor": "lightgray" }));
const gameTitle = new JGT.Label("Tic Tac Toe created\nusing JSGameTools", null, null, new JGT.Style({ "alignement": "center", "fontSize": 30 }));
const gameInfos = new JGT.Label("", null, null, new JGT.Style({ "alignement": "center", "fontSize": 30 }));
const fpsMeter = new JGT.FPSMeter(false, null, null, new JGT.Style({ "alignement": "right", "verticalAlignement": "bottom"}));

const pauseImage = new JGT.ImageContainer("pause.png", null, null, 64, 64, new JGT.Style({ "verticalAlignement": "center", "alignement": "center" }));
const fullscreenImage = new JGT.ImageContainer("fullscreen.png", null, null, 64, 64, new JGT.Style({ "verticalAlignement": "center", "alignement": "center" }));
const pauseButton = new JGT.Button(null, 50, null, null, new JGT.Style({ "alignement": "right", "verticalAlignement": "center" }), new JGT.Row(5, 250, null, null, null, pauseImage));
const fullscreenButton = new JGT.Button(null, 50, null, null, new JGT.Style({ "alignement": "left", "verticalAlignement": "center" }), new JGT.Row(5, 250, null, null, null, fullscreenImage));
const rowButtons = new JGT.Row(null, null, null, null, new JGT.Style({ "alignement": "right", "verticalAlignement": "top" }), fullscreenButton, pauseButton);

const buttonMenu1 = new JGT.Button(5, 5, null, null, buttonStyle2, new JGT.Label("Reset the game", null, null, labelStyle));
buttonMenu1.style.set("alignement", "center");
const buttonMenu2 = new JGT.Button(5, 5, null, null, buttonStyleRed, new JGT.Label("Close", null, null, labelStyle));
buttonMenu2.style.set("alignement", "center");
const menuLabel = new JGT.Label("Pause menu", null, null, labelStyle);
menuLabel.style.set("alignement", "center");
const menu = new JGT.Menu(null, menuLabel, buttonMenu1, buttonMenu2);

const buttonMenu3 = new JGT.Button(5, 5, null, null, buttonStyle2, new JGT.Label("Reset the game", null, null, labelStyle));
buttonMenu3.style.set("alignement", "center");
const menuResultLabel = new JGT.Label("???", null, null, labelStyle);
menuResultLabel.style.set("alignement", "center");
const menuResult = new JGT.Menu(null, menuResultLabel, buttonMenu3);

pauseButton.addClickAction(() => {
  menu.enable();
});

fullscreenButton.addClickAction(() => {
  canvas.toggleFullscreen();
});

buttonMenu2.addClickAction(() => {
  menu.disable();
});

// Board col
const col = new JGT.Col(null, null, null, null, new JGT.Style({ "alignement": "center", "verticalAlignement": "center" }));

// Events, game variables and logic
const MARK_TYPE = { CROSS: "cross", CIRCLE: "circle", EMPTY: "empty" };
const PLAYER_NUM = { PLAYER_ONE: MARK_TYPE.CROSS, PLAYER_TWO: MARK_TYPE.CIRCLE };
const WIN_SITUATION = { PLAYER_ONE: -1, PLAYER_TWO: 1, DRAW: 0 };
let currentPlayer = PLAYER_NUM.PLAYER_ONE;
const sizeBoard = [3, 3];
let buttons = [];
let buttonsBoard = [];
let gameBoard = [];

function createBoard() {
  col.clear();
  col.add(gameTitle);
  gameBoard = [];
  buttons = [];

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

  col.add(gameInfos);
}

function checkWinHoriz(board) {
  let countCross = 0;
  let countCircle = 0;

  for(let i = 0; i < board[0].length; i++) {
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
    const currentLine = board[i];

    for(let j = 0; j < currentLine.length; j++) {
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
  for(let i = 0; i < board[0].length; i++) {
    const currentLine = board[i];

    for(let j = 0; j < currentLine.length; j++) {
        const cellsToCheck = [[j, i], [j - 1, i - 1], [j - 2, i - 2], [j + 1, i + 1], [j + 2, i + 2]];
        const cellsToCheckAnti = [[j, i], [j - 1, i + 1], [j - 2, i + 2], [j + 1, i - 1], [j + 2, i - 2]];
        const checkCells = checkCasesDiago(board, currentLine, cellsToCheck);
        const checkCellsAnti = checkCasesDiago(board, currentLine, cellsToCheckAnti);

        if(checkCells) return checkCells;
        if(checkCellsAnti) return checkCellsAnti;
    }
  }

  return null;
}

function checkCasesDiago(board, currentLine, cellsToCheck) {
  let countCross = 0;
  let countCircle = 0;

  for(let k = 0; k < cellsToCheck.length; k++) {
    const c = cellsToCheck[k];

    if(c[0] >= 0 && c[0] < currentLine.length && c[1] >= 0 && c[1] <= board[0].length) {
      const cell = board[c[0]][c[1]];

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
  let mark = null;

  if(position != null) {
    const currentCell = board[position[0]][position[1]];

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
    }

    if(mark) buttonsBoard[position[0]][position[1]].set(mark);
  
    if(currentPlayer == PLAYER_NUM.PLAYER_TWO) {
      playAi(board);
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

function eval(board, player) {
  const check = checkWin(board);

  if(check) {
    return checkWin(board) * (player == PLAYER_NUM.PLAYER_TWO ? 1 : -1);
  }

  return null;
}

function nextSituations(board, player) {
  const situs = [];

  for(let i = 0; i < board.length; i++) {
    for(let j = 0; j < board[i].length; j++) {
      if(board[i][j] == MARK_TYPE.EMPTY) {
        board[i][j] = player;
        const evaluation = eval(board, player);

        situs.push({
          "position": [i, j],
          "eval": evaluation == null ? 0 : evaluation
        });

        board[i][j] = MARK_TYPE.EMPTY;
      }
    }
  }

  return situs;
}

function max(situations) {
  let max = situations[0];

  situations.forEach(situation => {
    if(situation.eval > max.eval) {
      max = situation;
    }
  });

  return max;
}

function min(situations) {
  let min = situations[0];

  situations.forEach(situation => {
    if(situation.eval < min.eval) {
      min = situation;
    }
  });

  return min;
}

function ai(board, depth, player) {
  const evaluation = eval(board, player);
  const situations = nextSituations(board, player);

  if(depth <= 0 || evaluation != null || situations.length <= 0) {
    return {
      "position": null,
      "eval": evaluation
    };
  } else {
    for(let i = 0; i < situations.length; i++) {
      const situation = situations[i];
      const position = situation.position;
      board[position[0]][position[1]] = player;

      if(player == PLAYER_NUM.PLAYER_TWO) { // ai
        const valueNext = ai(board, depth - 1, PLAYER_NUM.PLAYER_ONE).eval;
        situation.eval += valueNext;
      } else {
        const valueNext = ai(board, depth - 1, PLAYER_NUM.PLAYER_TWO).eval;
        situation.eval += valueNext;
      }
    }

    if(player == PLAYER_NUM.PLAYER_TWO) { // ai
      return max(situations);
    } else {
      return min(situations);
    }
  }
}

function playAi(board) {
  const bestMove = ai(copyBoard(board), 10, PLAYER_NUM.PLAYER_TWO);
  gameAction(board, bestMove.position);
}

function resetGame() {
  currentPlayer = PLAYER_NUM.PLAYER_ONE;
  gameInfos.text = "It's the turn of\nplayer 1";
  createBoard();
  buttons.forEach(button => button.clear());
  menu.disable();
  menuResult.disable();
}

buttonMenu1.addClickAction(resetGame);
buttonMenu3.addClickAction(resetGame);
resetGame();

// Create scene (containing components) and canvas
const scene = new JGT.Scene(box, col, rowButtons, menu, menuResult, fpsMeter);
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