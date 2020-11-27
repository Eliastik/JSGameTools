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
const pauseButton = new JGT.Button(null, 50, null, null, new JGT.Style({ "alignement": "right", "verticalAlignement": "top" }), new JGT.Row(5, 250, null, null, null, pauseImage));

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

buttonMenu2.addClickAction(() => {
  menu.disable();
});

// Board col
const col = new JGT.Col(null, null, null, null, new JGT.Style({ "alignement": "center", "verticalAlignement": "center" }));

// Events, game variables and logic
const MARK_TYPE = { CROSS: "cross", CIRCLE: "circle", EMPTY: "empty" };
const PLAYER_NUM = { PLAYER_ONE: MARK_TYPE.CROSS, PLAYER_TWO: MARK_TYPE.CIRCLE };
let currentPlayer = PLAYER_NUM.PLAYER_ONE;
const sizeBoard = [3, 3];
let buttons = [];
let gameBoard = [];

function createBoard() {
  col.clear();
  col.add(gameTitle);
  gameBoard = [];
  buttons = [];

  for(let i = 0; i < sizeBoard[0]; i++) {
    const row = new JGT.Row();
    const line = [];
  
    for(let j = 0; j < sizeBoard[1]; j++) {
      const button = new JGT.Button(null, null, 75, 75, buttonStyle);
      buttons.push(button);
      row.add(button);
      line.push(MARK_TYPE.EMPTY);
    }

    gameBoard.push(line);
    col.add(row);
  }

  buttons.forEach(button => button.addClickAction(() => gameAction(button)));
  col.add(gameInfos);
}

function checkWinHoriz() {
  let countCross = 0;
  let countCircle = 0;

  for(let i = 0; i < gameBoard[0].length; i++) {
    const currentLine = gameBoard[i];

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

function checkWinVerti() {
  let countCross = 0;
  let countCircle = 0;

  for(let i = 0; i < gameBoard[0].length; i++) {
    const currentLine = gameBoard[i];

    for(let j = 0; j < currentLine.length; j++) {
        const currentCase = gameBoard[j][i];

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

function checkWinDiago() {
  for(let i = 0; i < gameBoard[0].length; i++) {
    const currentLine = gameBoard[i];

    for(let j = 0; j < currentLine.length; j++) {
        const cellsToCheck = [[j, i], [j - 1, i - 1], [j - 2, i - 2], [j + 1, i + 1], [j + 2, i + 2]];
        const cellsToCheckAnti = [[j, i], [j - 1, i + 1], [j - 2, i + 2], [j + 1, i - 1], [j + 2, i - 2]];
        const checkCells = checkCasesDiago(currentLine, cellsToCheck);
        const checkCellsAnti = checkCasesDiago(currentLine, cellsToCheckAnti);

        if(checkCells) return checkCells;
        if(checkCellsAnti) return checkCellsAnti;
    }
  }

  return null;
}

function checkCasesDiago(currentLine, cellsToCheck) {
  let countCross = 0;
  let countCircle = 0;

  for(let k = 0; k < cellsToCheck.length; k++) {
    const c = cellsToCheck[k];

    if(c[0] >= 0 && c[0] < currentLine.length && c[1] >= 0 && c[1] <= gameBoard[0].length) {
      const cell = gameBoard[c[0]][c[1]];

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

function checkFull() {
  for(let i = 0; i < gameBoard[0].length; i++) {
    const currentLine = gameBoard[i];

    for(let j = 0; j < currentLine.length; j++) {
      const currentCase = currentLine[j];

      if(currentCase == MARK_TYPE.EMPTY) {
        return false;
      }
    }
  }

  return true;
}

function checkWin() {
  const checkHoriz = checkWinHoriz();
  const checkVerti = checkWinVerti();
  const checkDiag = checkWinDiago();
  const checkIsFull = checkFull();

  if(checkHoriz == PLAYER_NUM.PLAYER_ONE || checkVerti == PLAYER_NUM.PLAYER_ONE || checkDiag == PLAYER_NUM.PLAYER_ONE) {
    menuResultLabel.text = "Player 1 won!";
    menuResult.enable();
  } else if(checkHoriz == PLAYER_NUM.PLAYER_TWO || checkVerti == PLAYER_NUM.PLAYER_TWO || checkDiag == PLAYER_NUM.PLAYER_TWO) {
    menuResultLabel.text = "Player 2 won!";
    menuResult.enable();
  } else if(checkIsFull) {
    menuResultLabel.text = "Draw!";
    menuResult.enable();
  }
}

function gameAction(buttonClicked) {
  let mark = null;
  let currentCellNumber = buttons.indexOf(buttonClicked);

  if(currentCellNumber != -1) {
    let currentCell = gameBoard[Math.floor(currentCellNumber / sizeBoard[1])][currentCellNumber % sizeBoard[1]];
  
    if(currentCell == MARK_TYPE.EMPTY) {
      if(currentPlayer == PLAYER_NUM.PLAYER_ONE) {
        mark = new JGT.Cross(null, null, 25, 25, new JGT.Style({ "alignement": "center", "verticalAlignement": "center", "lineWidth": 5, "color": "white" }));
        currentPlayer = PLAYER_NUM.PLAYER_TWO;
        gameInfos.text = "It's the turn of\nplayer 2";
        gameBoard[Math.floor(currentCellNumber / sizeBoard[1])][currentCellNumber % sizeBoard[1]] = PLAYER_NUM.PLAYER_ONE;
      } else {
        mark = new JGT.Circle(null, null, 25, new JGT.Style({ "alignement": "center", "verticalAlignement": "center", "lineWidth": 5, "color": "white", "fill": false }));
        currentPlayer = PLAYER_NUM.PLAYER_ONE;
        gameInfos.text = "It's the turn of\nplayer 1";
        gameBoard[Math.floor(currentCellNumber / sizeBoard[1])][currentCellNumber % sizeBoard[1]] = PLAYER_NUM.PLAYER_TWO;
      }
  
      buttonClicked.set(mark);
    }
  }

  checkWin();
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
const scene = new JGT.Scene(box, col, pauseButton, menu, menuResult, fpsMeter);
const canvas = new JGT.Canvas(scene, document.getElementById("canvas"), null, null, true);
canvas.appendTo(document.body);
canvas.toggleFullpage();

col.maxHeight = canvas.height;
col.maxWidth = canvas.width;
box.height = canvas.height;
box.width = canvas.width;

// Load pause image and start the canvas rendering
imageLoader.load(["pause.png"], () => {
  pauseImage.loadImage(imageLoader);
  
  canvas.startDraw(() => {
    col.maxHeight = canvas.height;
    col.maxWidth = canvas.width;
    box.height = canvas.height;
    box.width = canvas.width;
  });
});