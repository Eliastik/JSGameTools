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

const imageLoader = new JGT.ImageLoader();

const buttonStyle = new JGT.Style({ "backgroundColor": "gray", "borderSize": 2, "borderColor": "black" });
const labelStyle = new JGT.Style({ "fontColor": "white" });
const buttonStyle2 = new JGT.Style({ "backgroundColor": "#2ecc71", "backgroundColorHover": "#1abc9c", "backgroundColorDown": "#16a085" });
const buttonStyleRed = new JGT.Style({ "backgroundColor": "#CC2F2F", "backgroundColorHover": "#F23838", "backgroundColorDown": "#A62626" });

const box = new JGT.Box(0, 0, 800, 600, new JGT.Style({ "backgroundColor": "lightgray" }));
const gameTitle = new JGT.Label("Tic Tac Toe created\nusing JSGameTools", null, null, new JGT.Style({ "alignement": "center", "fontSize": 24 }));
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
}

createBoard();

function checkWinHorizForWin() {
  let countCross = 0;
  let countCircle = 0;

  for(let i = 0; i < gameBoard[0].length; i++) {
    let currentLine = gameBoard[i];

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
    }

    if(countCross >= 3) {
      return PLAYER_NUM.PLAYER_ONE;
    } else if(countCircle >= 3) {
      return PLAYER_NUM.PLAYER_TWO;
    }

    countCross = 0;
    countCircle = 0;
  }

  return null;
}

function checkWinVertiForWin() {
  let countCross = 0;
  let countCircle = 0;

  for(let i = 0; i < gameBoard[0].length; i++) {
    for(let j = 0; j < gameBoard[i].length; j++) {
        let currentCase = gameBoard[j][i];

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
      }

      if(countCross >= 3) {
        return PLAYER_NUM.PLAYER_ONE;
      } else if(countCircle >= 3) {
        return PLAYER_NUM.PLAYER_TWO;
      }

      countCross = 0;
      countCircle = 0;
  }

  return null;
}

function checkWinDiagoForWin() {
  let countCross = 0;
  let countCircle = 0;

  for(let i = 0; i < gameBoard[0].length; i++) {
    for(let j = 0; j < gameBoard[i].length; j++) {
        let currentCase = gameBoard[j][i];

        if(currentCase == MARK_TYPE.CROSS) {
          countCross++;
        } else if(currentCase == MARK_TYPE.CIRCLE) {
          countCircle++;
        }
      }

      if(countCross >= 3) {
        return PLAYER_NUM.PLAYER_ONE;
      } else if(countCircle >= 3) {
        return PLAYER_NUM.PLAYER_TWO;
      }

      countCross = 0;
      countCircle = 0;
  }

  return null;
}

function checkWin() {
  if(checkWinHorizForWin() == PLAYER_NUM.PLAYER_ONE || checkWinVertiForWin() == PLAYER_NUM.PLAYER_ONE) {
    alert("1 won");
  } else if(checkWinHorizForWin() == PLAYER_NUM.PLAYER_TWO || checkWinVertiForWin() == PLAYER_NUM.PLAYER_TWO) {
    alert("2 won");
  }
}

function gameAction(buttonClicked) {
  let mark = null;
  let currentCellNumber = buttons.indexOf(buttonClicked);

  if(currentCellNumber != -1) {
    console.log(currentCellNumber, Math.floor(currentCellNumber / sizeBoard[1]), currentCellNumber % sizeBoard[1]);
    let currentCell = gameBoard[Math.floor(currentCellNumber / sizeBoard[1])][currentCellNumber % sizeBoard[1]];
  
    if(currentCell == MARK_TYPE.EMPTY) {
      if(currentPlayer == PLAYER_NUM.PLAYER_ONE) {
        mark = new JGT.Cross(null, null, 25, 25, new JGT.Style({ "alignement": "center", "verticalAlignement": "center", "lineWidth": 5, "color": "white" }));
        currentPlayer = PLAYER_NUM.PLAYER_TWO;
        gameBoard[Math.floor(currentCellNumber / sizeBoard[1])][currentCellNumber % sizeBoard[1]] = PLAYER_NUM.PLAYER_ONE;
      } else {
        mark = new JGT.Label("-", null, null, new JGT.Style({ "alignement": "center", "verticalAlignement": "center", "fontSize": 50, "fontColor": "white" }));
        currentPlayer = PLAYER_NUM.PLAYER_ONE;
        gameBoard[Math.floor(currentCellNumber / sizeBoard[1])][currentCellNumber % sizeBoard[1]] = PLAYER_NUM.PLAYER_TWO;
      }
  
      buttonClicked.set(mark);
      console.log(gameBoard);
    }
  }

  checkWin();
}

buttonMenu1.addClickAction(() => {
  currentPlayer = PLAYER_NUM.PLAYER_ONE;
  createBoard();
  buttons.forEach(button => button.clear());
  menu.disable();
});

// Create scene (containing components) and canvas
const scene = new JGT.Scene(box, col, pauseButton, menu, fpsMeter);
const canvas = new JGT.Canvas(scene, document.getElementById("canvas"), null, null, true);
canvas.appendTo(document.body);
col.maxHeight = canvas.height;
col.maxWidth = canvas.width;

// Load pause image and start the canvas rendering
imageLoader.load(["pause.png"], () => {
  pauseImage.loadImage(imageLoader);
  canvas.startDraw();
});