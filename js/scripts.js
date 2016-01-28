var Player = function(symbol) {
  this.symbol = symbol;
  this.difficulty;
}

var Space = function(xCoordinate, yCoordinate) {
  this.xCoordinate = xCoordinate;
  this.yCoordinate = yCoordinate;
  this.empty = true;
  this.symbol = "";
}

var Board = function() {
  this.matrix;
}

var Game = function() {
  this.player1;
  this.player2;
  this.gameBoard;
  this.currentPlayer;
  this.players;
}

Player.prototype.mark = function() {
  return this.symbol;
}

Player.prototype.setDifficulty = function(level) {
  this.difficulty = level;
  return level;
}

Space.prototype.clicked = function() {
  this.empty = false;
  return this.empty;
}

Space.prototype.placeMark = function(player) {
  this.symbol += player.mark();
  return this.symbol;
}

Board.prototype.makeSpaces = function() {
  var boardMatrix = [[],[],[]];
  for(var i = 1; i <= 3; i++) {
    for(var j = 1; j <= 3; j++) {
      boardMatrix[i-1][j-1] = new Space(i,j);
    }
  }
  this.matrix = boardMatrix;
  return boardMatrix;
}

Board.prototype.findSpace = function(xCoordinate, yCoordinate) {
  return this.matrix[xCoordinate-1][yCoordinate-1];
}

Board.prototype.checkWin = function() {
  for(var i = 1; i <= 4; i++) {
    if(i === 1) {
      for(var j = 0; j < 3; j++) {
        if(this.matrix[0][j].symbol === "") {
          continue;
        }
        if((this.matrix[0][j].symbol === this.matrix[1][j].symbol) && (this.matrix[1][j].symbol === this.matrix[2][j].symbol)) {
          return true;
        }
      }
    } else if(i === 2) {
      for(var k = 0; k < 3; k++) {
        if(this.matrix[k][0].symbol === "") {
          continue;
        }
        if((this.matrix[k][0].symbol === this.matrix[k][1].symbol) && (this.matrix[k][1].symbol === this.matrix[k][2].symbol)) {
          return true;
        }
      }
    } else if(this.matrix[0][0].symbol === "") {
      return false;
    } else if(i === 3) {
      if((this.matrix[0][0].symbol === this.matrix[1][1].symbol) && (this.matrix[1][1].symbol === this.matrix[2][2].symbol)) {
        return true;
      }
    } else if (this.matrix[0][2].symbol === "") {
      return false;
    } else if (i === 4) {
      if((this.matrix[2][0].symbol === this.matrix[1][1].symbol) && (this.matrix[1][1].symbol === this.matrix[0][2].symbol)) {
        return true;
      }
    }
  }
  return false;
}

Game.prototype.initPlayers = function() {
  var player1 = new Player("X");
  var player2 = new Player("O");
  this.player1 = player1;
  this.player2 = player2;
  this.currentPlayer = player1;
}

Game.prototype.initBoard = function() {
  var board = new Board();
  board.makeSpaces();
  this.gameBoard = board;
  return board;
}

Game.prototype.switchTurns = function() {
  if(this.currentPlayer === this.player1) {
    this.currentPlayer = this.player2;
    return this.player2;
  } else {
    this.currentPlayer = this.player1;
    return this.player1;
  }
}

Game.prototype.checkGameStatus = function() {
  if (this.gameBoard.checkWin()) {
    return 'win';
  }
  for (var i = 0; i < 3; i++) {
    for (var j = 0; j < 3; j++) {
      if (this.gameBoard.matrix[i][j].empty === true) {
        return 'keep playing';
      }
    }
  }
  return 'tie';
}

Game.prototype.playStyle = function () {
  var difficulty = this.player2.difficulty;
  if (difficulty === "easy") {
    var isNotEmpty = true;
    while (isNotEmpty) {
      var random = Math.floor(Math.random() * (9 - 1)) + 1;
      if (random === 1) {
        if (this.gameBoard.matrix[0][0].empty === true) {
          isNotEmpty = false;
          this.gameBoard.matrix[0][0].clicked();
          this.gameBoard.matrix[0][0].placeMark(this.currentPlayer);
          return 'space1';
        }
      }
      if (random === 2) {
        if (this.gameBoard.matrix[0][1].empty === true) {
          isNotEmpty = false;
          this.gameBoard.matrix[0][1].clicked();
          this.gameBoard.matrix[0][1].placeMark(this.currentPlayer);
          return 'space2';
        }
      }
      if (random === 3) {
        if (this.gameBoard.matrix[0][2].empty === true) {
          isNotEmpty = false;
          this.gameBoard.matrix[0][2].clicked();
          this.gameBoard.matrix[0][2].placeMark(this.currentPlayer);
          return 'space3';
        }
      }
      if (random === 4) {
        if (this.gameBoard.matrix[1][0].empty === true) {
          isNotEmpty = false;
          this.gameBoard.matrix[1][0].clicked();
          this.gameBoard.matrix[1][0].placeMark(this.currentPlayer);
          return 'space4';
        }
      }
      if (random === 5) {
        if (this.gameBoard.matrix[1][1].empty === true) {
          isNotEmpty = false;
          this.gameBoard.matrix[1][1].clicked();
          this.gameBoard.matrix[1][1].placeMark(this.currentPlayer);
          return 'space5';
        }
      }
      if (random === 6) {
        if (this.gameBoard.matrix[1][2].empty === true) {
          isNotEmpty = false;
          this.gameBoard.matrix[1][2].clicked();
          this.gameBoard.matrix[1][2].placeMark(this.currentPlayer);
          return 'space6';
        }
      }
      if (random === 7) {
        if (this.gameBoard.matrix[2][0].empty === true) {
          isNotEmpty = false;
          this.gameBoard.matrix[2][0].clicked();
          this.gameBoard.matrix[2][0].placeMark(this.currentPlayer);
          return 'space7'
        }
      }
      if (random === 8) {
        if (this.gameBoard.matrix[2][1].empty === true) {
          isNotEmpty = false;
          this.gameBoard.matrix[2][1].clicked();
          this.gameBoard.matrix[2][1].placeMark(this.currentPlayer);
          return 'space8';
        }
      }
      if (random === 9) {
        if (this.gameBoard.matrix[2][2].empty === true) {
          isNotEmpty = false;
          this.gameBoard.matrix[2][2].clicked();
          this.gameBoard.matrix[2][2].placeMark(this.currentPlayer);
          return 'space9';
        }
      }
    }
  } else if (difficulty === "hard") {

//Computer Win Check

    //Vertical Wins

    if(this.gameBoard.matrix[0][0].symbol === 'O' && this.gameBoard.matrix[0][1].symbol === 'O' && this.gameBoard.matrix[0][2].symbol === '') {
      this.gameBoard.matrix[0][2].clicked();
      this.gameBoard.matrix[0][2].placeMark(this.currentPlayer);
      return 'space3';
    }
    if(this.gameBoard.matrix[0][0].symbol === 'O' && this.gameBoard.matrix[0][1].symbol === '' && this.gameBoard.matrix[0][2].symbol === 'O') {
      this.gameBoard.matrix[0][1].clicked();
      this.gameBoard.matrix[0][1].placeMark(this.currentPlayer);
      return 'space2';
    }
    if(this.gameBoard.matrix[0][0].symbol === '' && this.gameBoard.matrix[0][1].symbol === 'O' && this.gameBoard.matrix[0][2].symbol === 'O') {
      this.gameBoard.matrix[0][0].clicked();
      this.gameBoard.matrix[0][0].placeMark(this.currentPlayer);
      return 'space1';
    }

    if(this.gameBoard.matrix[1][0].symbol === 'O' && this.gameBoard.matrix[1][1].symbol === 'O' && this.gameBoard.matrix[1][2].symbol === '') {
      this.gameBoard.matrix[1][2].clicked();
      this.gameBoard.matrix[1][2].placeMark(this.currentPlayer);
      return 'space6';
    }
    if(this.gameBoard.matrix[1][0].symbol === 'O' && this.gameBoard.matrix[1][1].symbol === '' && this.gameBoard.matrix[1][2].symbol === 'O') {
      this.gameBoard.matrix[1][1].clicked();
      this.gameBoard.matrix[1][1].placeMark(this.currentPlayer);
      return 'space5';
    }
    if(this.gameBoard.matrix[1][0].symbol === '' && this.gameBoard.matrix[1][1].symbol === 'O' && this.gameBoard.matrix[1][2].symbol === 'O') {
      this.gameBoard.matrix[1][0].clicked();
      this.gameBoard.matrix[1][0].placeMark(this.currentPlayer);
      return 'space4';
    }

    if(this.gameBoard.matrix[2][0].symbol === 'O' && this.gameBoard.matrix[2][1].symbol === 'O' && this.gameBoard.matrix[2][2].symbol === '') {
      this.gameBoard.matrix[2][2].clicked();
      this.gameBoard.matrix[2][2].placeMark(this.currentPlayer);
      return 'space9';
    }
    if(this.gameBoard.matrix[2][0].symbol === 'O' && this.gameBoard.matrix[2][1].symbol === '' && this.gameBoard.matrix[2][2].symbol === 'O') {
      this.gameBoard.matrix[2][1].clicked();
      this.gameBoard.matrix[2][1].placeMark(this.currentPlayer);
      return 'space8';
    }
    if(this.gameBoard.matrix[2][0].symbol === '' && this.gameBoard.matrix[2][1].symbol === 'O' && this.gameBoard.matrix[2][2].symbol === 'O') {
      this.gameBoard.matrix[2][0].clicked();
      this.gameBoard.matrix[2][0].placeMark(this.currentPlayer);
      return 'space7';
    }

    //Horizantal Wins

    if(this.gameBoard.matrix[0][0].symbol === '' && this.gameBoard.matrix[1][0].symbol === 'O' && this.gameBoard.matrix[2][0].symbol === 'O') {
      this.gameBoard.matrix[0][0].clicked();
      this.gameBoard.matrix[0][0].placeMark(this.currentPlayer);
      return 'space1';
    }
    if(this.gameBoard.matrix[0][0].symbol === 'O' && this.gameBoard.matrix[1][0].symbol === '' && this.gameBoard.matrix[2][0].symbol === 'O') {
      this.gameBoard.matrix[1][0].clicked();
      this.gameBoard.matrix[1][0].placeMark(this.currentPlayer);
      return 'space4';
    }
    if(this.gameBoard.matrix[0][0].symbol === 'O' && this.gameBoard.matrix[1][0].symbol === 'O' && this.gameBoard.matrix[2][0].symbol === '') {
      this.gameBoard.matrix[2][0].clicked();
      this.gameBoard.matrix[2][0].placeMark(this.currentPlayer);
      return 'space7';
    }

    if(this.gameBoard.matrix[0][1].symbol === '' && this.gameBoard.matrix[1][1].symbol === 'O' && this.gameBoard.matrix[2][1].symbol === 'O') {
      this.gameBoard.matrix[0][1].clicked();
      this.gameBoard.matrix[0][1].placeMark(this.currentPlayer);
      return 'space2';
    }
    if(this.gameBoard.matrix[0][1].symbol === 'O' && this.gameBoard.matrix[1][1].symbol === '' && this.gameBoard.matrix[2][1].symbol === 'O') {
      this.gameBoard.matrix[1][1].clicked();
      this.gameBoard.matrix[1][1].placeMark(this.currentPlayer);
      return 'space5';
    }
    if(this.gameBoard.matrix[0][1].symbol === 'O' && this.gameBoard.matrix[1][1].symbol === 'O' && this.gameBoard.matrix[2][1].symbol === '') {
      this.gameBoard.matrix[2][1].clicked();
      this.gameBoard.matrix[2][1].placeMark(this.currentPlayer);
      return 'space8';
    }

    if(this.gameBoard.matrix[0][2].symbol === '' && this.gameBoard.matrix[1][2].symbol === 'O' && this.gameBoard.matrix[2][2].symbol === 'O') {
      this.gameBoard.matrix[0][2].clicked();
      this.gameBoard.matrix[0][2].placeMark(this.currentPlayer);
      return 'space3';
    }
    if(this.gameBoard.matrix[0][2].symbol === 'O' && this.gameBoard.matrix[1][2].symbol === '' && this.gameBoard.matrix[2][2].symbol === 'O') {
      this.gameBoard.matrix[1][2].clicked();
      this.gameBoard.matrix[1][2].placeMark(this.currentPlayer);
      return 'space6';
    }
    if(this.gameBoard.matrix[0][2].symbol === 'O' && this.gameBoard.matrix[1][2].symbol === 'O' && this.gameBoard.matrix[2][2].symbol === '') {
      this.gameBoard.matrix[2][2].clicked();
      this.gameBoard.matrix[2][2].placeMark(this.currentPlayer);
      return 'space9';
    }

    //Diagonal Win Conditions

    if(this.gameBoard.matrix[0][0].symbol === 'O' && this.gameBoard.matrix[1][1].symbol === 'O' && this.gameBoard.matrix[2][2].symbol === '') {
      this.gameBoard.matrix[2][2].clicked();
      this.gameBoard.matrix[2][2].placeMark(this.currentPlayer);
      return 'space9';
    }
    if(this.gameBoard.matrix[0][0].symbol === 'O' && this.gameBoard.matrix[1][1].symbol === '' && this.gameBoard.matrix[2][2].symbol === 'O') {
      this.gameBoard.matrix[1][1].clicked();
      this.gameBoard.matrix[1][1].placeMark(this.currentPlayer);
      return 'space5';
    }
    if(this.gameBoard.matrix[0][0].symbol === '' && this.gameBoard.matrix[1][1].symbol === 'O' && this.gameBoard.matrix[2][2].symbol === 'O') {
      this.gameBoard.matrix[0][0].clicked();
      this.gameBoard.matrix[0][0].placeMark(this.currentPlayer);
      return 'space1';
    }

    if(this.gameBoard.matrix[2][0].symbol === 'O' && this.gameBoard.matrix[1][1].symbol === 'O' && this.gameBoard.matrix[0][2].symbol === '') {
      this.gameBoard.matrix[0][2].clicked();
      this.gameBoard.matrix[0][2].placeMark(this.currentPlayer);
      return 'space3';
    }
    if(this.gameBoard.matrix[2][0].symbol === 'O' && this.gameBoard.matrix[1][1].symbol === '' && this.gameBoard.matrix[0][2].symbol === 'O') {
      this.gameBoard.matrix[1][1].clicked();
      this.gameBoard.matrix[1][1].placeMark(this.currentPlayer);
      return 'space5';
    }
    if(this.gameBoard.matrix[2][0].symbol === '' && this.gameBoard.matrix[1][1].symbol === 'O' && this.gameBoard.matrix[0][2].symbol === 'O') {
      this.gameBoard.matrix[2][0].clicked();
      this.gameBoard.matrix[2][0].placeMark(this.currentPlayer);
      return 'space7';
    }

//Opponent Win Check

    //Vertical Wins

    if(this.gameBoard.matrix[0][0].symbol === 'X' && this.gameBoard.matrix[0][1].symbol === 'X' && this.gameBoard.matrix[0][2].symbol === '') {
      this.gameBoard.matrix[0][2].clicked();
      this.gameBoard.matrix[0][2].placeMark(this.currentPlayer);
      return 'space3';
    }
    if(this.gameBoard.matrix[0][0].symbol === 'X' && this.gameBoard.matrix[0][1].symbol === '' && this.gameBoard.matrix[0][2].symbol === 'X') {
      this.gameBoard.matrix[0][1].clicked();
      this.gameBoard.matrix[0][1].placeMark(this.currentPlayer);
      return 'space2';
    }
    if(this.gameBoard.matrix[0][0].symbol === '' && this.gameBoard.matrix[0][1].symbol === 'X' && this.gameBoard.matrix[0][2].symbol === 'X') {
      this.gameBoard.matrix[0][0].clicked();
      this.gameBoard.matrix[0][0].placeMark(this.currentPlayer);
      return 'space1';
    }

    if(this.gameBoard.matrix[1][0].symbol === 'X' && this.gameBoard.matrix[1][1].symbol === 'X' && this.gameBoard.matrix[1][2].symbol === '') {
      this.gameBoard.matrix[1][2].clicked();
      this.gameBoard.matrix[1][2].placeMark(this.currentPlayer);
      return 'space6';
    }
    if(this.gameBoard.matrix[1][0].symbol === 'X' && this.gameBoard.matrix[1][1].symbol === '' && this.gameBoard.matrix[1][2].symbol === 'X') {
      this.gameBoard.matrix[1][1].clicked();
      this.gameBoard.matrix[1][1].placeMark(this.currentPlayer);
      return 'space5';
    }
    if(this.gameBoard.matrix[1][0].symbol === '' && this.gameBoard.matrix[1][1].symbol === 'X' && this.gameBoard.matrix[1][2].symbol === 'X') {
      this.gameBoard.matrix[1][0].clicked();
      this.gameBoard.matrix[1][0].placeMark(this.currentPlayer);
      return 'space4';
    }

    if(this.gameBoard.matrix[2][0].symbol === 'X' && this.gameBoard.matrix[2][1].symbol === 'X' && this.gameBoard.matrix[2][2].symbol === '') {
      this.gameBoard.matrix[2][2].clicked();
      this.gameBoard.matrix[2][2].placeMark(this.currentPlayer);
      return 'space9';
    }
    if(this.gameBoard.matrix[2][0].symbol === 'X' && this.gameBoard.matrix[2][1].symbol === '' && this.gameBoard.matrix[2][2].symbol === 'X') {
      this.gameBoard.matrix[2][1].clicked();
      this.gameBoard.matrix[2][1].placeMark(this.currentPlayer);
      return 'space8';
    }
    if(this.gameBoard.matrix[2][0].symbol === '' && this.gameBoard.matrix[2][1].symbol === 'X' && this.gameBoard.matrix[2][2].symbol === 'X') {
      this.gameBoard.matrix[2][0].clicked();
      this.gameBoard.matrix[2][0].placeMark(this.currentPlayer);
      return 'space7';
    }

    //Horizantal Wins

    if(this.gameBoard.matrix[0][0].symbol === '' && this.gameBoard.matrix[1][0].symbol === 'X' && this.gameBoard.matrix[2][0].symbol === 'X') {
      this.gameBoard.matrix[0][0].clicked();
      this.gameBoard.matrix[0][0].placeMark(this.currentPlayer);
      return 'space1';
    }
    if(this.gameBoard.matrix[0][0].symbol === 'X' && this.gameBoard.matrix[1][0].symbol === '' && this.gameBoard.matrix[2][0].symbol === 'X') {
      this.gameBoard.matrix[1][0].clicked();
      this.gameBoard.matrix[1][0].placeMark(this.currentPlayer);
      return 'space4';
    }
    if(this.gameBoard.matrix[0][0].symbol === 'X' && this.gameBoard.matrix[1][0].symbol === 'X' && this.gameBoard.matrix[2][0].symbol === '') {
      this.gameBoard.matrix[2][0].clicked();
      this.gameBoard.matrix[2][0].placeMark(this.currentPlayer);
      return 'space7';
    }

    if(this.gameBoard.matrix[0][1].symbol === '' && this.gameBoard.matrix[1][1].symbol === 'X' && this.gameBoard.matrix[2][1].symbol === 'X') {
      this.gameBoard.matrix[0][1].clicked();
      this.gameBoard.matrix[0][1].placeMark(this.currentPlayer);
      return 'space2';
    }
    if(this.gameBoard.matrix[0][1].symbol === 'X' && this.gameBoard.matrix[1][1].symbol === '' && this.gameBoard.matrix[2][1].symbol === 'X') {
      this.gameBoard.matrix[1][1].clicked();
      this.gameBoard.matrix[1][1].placeMark(this.currentPlayer);
      return 'space5';
    }
    if(this.gameBoard.matrix[0][1].symbol === 'X' && this.gameBoard.matrix[1][1].symbol === 'X' && this.gameBoard.matrix[2][1].symbol === '') {
      this.gameBoard.matrix[2][1].clicked();
      this.gameBoard.matrix[2][1].placeMark(this.currentPlayer);
      return 'space8';
    }

    if(this.gameBoard.matrix[0][2].symbol === '' && this.gameBoard.matrix[1][2].symbol === 'X' && this.gameBoard.matrix[2][2].symbol === 'X') {
      this.gameBoard.matrix[0][2].clicked();
      this.gameBoard.matrix[0][2].placeMark(this.currentPlayer);
      return 'space3';
    }
    if(this.gameBoard.matrix[0][2].symbol === 'X' && this.gameBoard.matrix[1][2].symbol === '' && this.gameBoard.matrix[2][2].symbol === 'X') {
      this.gameBoard.matrix[1][2].clicked();
      this.gameBoard.matrix[1][2].placeMark(this.currentPlayer);
      return 'space6';
    }
    if(this.gameBoard.matrix[0][2].symbol === 'X' && this.gameBoard.matrix[1][2].symbol === 'X' && this.gameBoard.matrix[2][2].symbol === '') {
      this.gameBoard.matrix[2][2].clicked();
      this.gameBoard.matrix[2][2].placeMark(this.currentPlayer);
      return 'space9';
    }

    //Diagonal Win Conditions

    if(this.gameBoard.matrix[0][0].symbol === 'X' && this.gameBoard.matrix[1][1].symbol === 'X' && this.gameBoard.matrix[2][2].symbol === '') {
      this.gameBoard.matrix[2][2].clicked();
      this.gameBoard.matrix[2][2].placeMark(this.currentPlayer);
      return 'space9';
    }
    if(this.gameBoard.matrix[0][0].symbol === 'X' && this.gameBoard.matrix[1][1].symbol === '' && this.gameBoard.matrix[2][2].symbol === 'X') {
      this.gameBoard.matrix[1][1].clicked();
      this.gameBoard.matrix[1][1].placeMark(this.currentPlayer);
      return 'space5';
    }
    if(this.gameBoard.matrix[0][0].symbol === '' && this.gameBoard.matrix[1][1].symbol === 'X' && this.gameBoard.matrix[2][2].symbol === 'X') {
      this.gameBoard.matrix[0][0].clicked();
      this.gameBoard.matrix[0][0].placeMark(this.currentPlayer);
      return 'space1';
    }

    if(this.gameBoard.matrix[2][0].symbol === 'X' && this.gameBoard.matrix[1][1].symbol === 'X' && this.gameBoard.matrix[0][2].symbol === '') {
      this.gameBoard.matrix[0][2].clicked();
      this.gameBoard.matrix[0][2].placeMark(this.currentPlayer);
      return 'space3';
    }
    if(this.gameBoard.matrix[2][0].symbol === 'X' && this.gameBoard.matrix[1][1].symbol === '' && this.gameBoard.matrix[0][2].symbol === 'X') {
      this.gameBoard.matrix[1][1].clicked();
      this.gameBoard.matrix[1][1].placeMark(this.currentPlayer);
      return 'space5';
    }
    if(this.gameBoard.matrix[2][0].symbol === '' && this.gameBoard.matrix[1][1].symbol === 'X' && this.gameBoard.matrix[0][2].symbol === 'X') {
      this.gameBoard.matrix[2][0].clicked();
      this.gameBoard.matrix[2][0].placeMark(this.currentPlayer);
      return 'space7';
    }

//Check Center

    if(this.gameBoard.matrix[1][1].empty === true) {
      this.gameBoard.matrix[1][1].clicked();
      this.gameBoard.matrix[1][1].placeMark(this.currentPlayer);
      return 'space5';
    }

//Check Opposite Corner

    if(this.gameBoard.matrix[0][0].symbol === 'X' && this.gameBoard.matrix[2][2].empty === true) {
      this.gameBoard.matrix[2][2].clicked();
      this.gameBoard.matrix[2][2].placeMark(this.currentPlayer);
      return 'space9';
    }
    if(this.gameBoard.matrix[2][0].symbol === 'X' && this.gameBoard.matrix[0][2].empty === true) {
      this.gameBoard.matrix[0][2].clicked();
      this.gameBoard.matrix[0][2].placeMark(this.currentPlayer);
      return 'space3';
    }
    if(this.gameBoard.matrix[0][2].symbol === 'X' && this.gameBoard.matrix[2][0].empty === true) {
      this.gameBoard.matrix[2][0].clicked();
      this.gameBoard.matrix[2][0].placeMark(this.currentPlayer);
      return 'space7';
    }
    if(this.gameBoard.matrix[2][2].symbol === 'X' && this.gameBoard.matrix[0][0].empty === true) {
      this.gameBoard.matrix[0][0].clicked();
      this.gameBoard.matrix[0][0].placeMark(this.currentPlayer);
      return 'space1';
    }

//Check Empty Corners
    if(this.gameBoard.matrix[2][2].empty === true) {
      this.gameBoard.matrix[2][2].clicked();
      this.gameBoard.matrix[2][2].placeMark(this.currentPlayer);
      return 'space9';
    }
    if(this.gameBoard.matrix[0][2].empty === true) {
      this.gameBoard.matrix[0][2].clicked();
      this.gameBoard.matrix[0][2].placeMark(this.currentPlayer);
      return 'space3';
    }
    if(this.gameBoard.matrix[2][0].empty === true) {
      this.gameBoard.matrix[2][0].clicked();
      this.gameBoard.matrix[2][0].placeMark(this.currentPlayer);
      return 'space7';
    }
    if(this.gameBoard.matrix[0][0].empty === true) {
      this.gameBoard.matrix[0][0].clicked();
      this.gameBoard.matrix[0][0].placeMark(this.currentPlayer);
      return 'space1';
    }
//Check Empty Outside Middle Spaces

    if(this.gameBoard.matrix[1][0].empty === true) {
      this.gameBoard.matrix[1][0].clicked();
      this.gameBoard.matrix[1][0].placeMark(this.currentPlayer);
      return 'space4';
    }
    if(this.gameBoard.matrix[2][1].empty === true) {
      this.gameBoard.matrix[2][1].clicked();
      this.gameBoard.matrix[2][1].placeMark(this.currentPlayer);
      return 'space8';
    }
    if(this.gameBoard.matrix[1][2].empty === true) {
      this.gameBoard.matrix[1][2].clicked();
      this.gameBoard.matrix[1][2].placeMark(this.currentPlayer);
      return 'space6';
    }
    if(this.gameBoard.matrix[0][1].empty === true) {
      this.gameBoard.matrix[0][1].clicked();
      this.gameBoard.matrix[0][1].placeMark(this.currentPlayer);
      return 'space2';
    }
  }
  return difficulty;
}

$(function() {
  // ************************* GRID STYLING
  var div = $(".space");
  var width = div.width();

  div.css("height", width);

  $(window).ready(updateHeight);
  $(window).resize(updateHeight);

  function updateHeight() {
    var div = $(".space");
    var width = div.width();

    div.css("height", width);
  }
  // ************************* GAME FUNCTION
  debugger;
  var game = new Game();
  game.initPlayers();
  game.initBoard();

  var players = parseInt(prompt("Do you want to play with 1 or 2 human players?"));
  if (players === 1) {
    game.players = 1;
    var difficil = prompt("Do you want to have a bad time?").toLowerCase();
    if(difficil === "yes") {
      game.player2.difficulty = 'hard';
    } else if (difficil === 'no') {
      game.player2.difficulty = 'easy';
    } else {
      alert("I'll take that as a yes");
      game.player2.difficulty = 'hard';
    }
  } else if (players === 2) {
    game.players = 2;
  } else {
    alert("I guess you're doing 2 player then...");
  }
  var divIDs = ["top-left", "top-mid", "top-right", "left-mid", "mid-mid", "right-mid", "bottom-left", "bottom-mid", "bottom-right"];
  // $('#human').click(function() {
  //   game.players = 2;
  //   for (var i = 0; i < 3; i++) {
  //     for (var j = 0; j < 3; j++) {
  //       game.gameBoard.matrix[i][j].empty = true;
  //       game.gameBoard.matrix[i][j].symbol = "";
  //     }
  //   }
  //   $(".input").empty();
  // });
  // $('#computer').click(function() {
  //   game.players = 1;
  //   $('#difficulty').slideDown();
  //   for (var i = 0; i < 3; i++) {
  //     for (var j = 0; j < 3; j++) {
  //       game.gameBoard.matrix[i][j].empty = true;
  //       game.gameBoard.matrix[i][j].symbol = "";
  //     }
  //   }
  //   $(".input").empty();
  //   $('#easy').click(function() {
  //     game.player2.difficulty = 'easy';
  //     for (var i = 0; i < 3; i++) {
  //       for (var j = 0; j < 3; j++) {
  //         game.gameBoard.matrix[i][j].empty = true;
  //         game.gameBoard.matrix[i][j].symbol = "";
  //       }
  //     }
  //     $(".input").empty();
  //   });
  //   $('#hard').click(function() {
  //     game.player2.difficulty = 'hard';
  //     for (var i = 0; i < 3; i++) {
  //       for (var j = 0; j < 3; j++) {
  //         game.gameBoard.matrix[i][j].empty = true;
  //         game.gameBoard.matrix[i][j].symbol = "";
  //       }
  //     }
  //     $(".input").empty();
  //   });
  // });

  if (game.players === 1) {
    $("#" + divIDs[0]).click(function() {
      var status = game.checkGameStatus();
      if (game.gameBoard.matrix[0][0].empty === false) {
        alert('This space has been clicked on');
      } else if (status === 'win') {
        alert('This game has been won. Please re-fresh and play again!')
      } else {
        game.gameBoard.matrix[0][0].clicked();
        game.gameBoard.matrix[0][0].placeMark(game.currentPlayer);
        $('#top-left > .input').append(game.currentPlayer.symbol);
        status = game.checkGameStatus();
        if (status === 'win') {
          alert('You won!');
        } else if (status === 'tie') {
          alert("Everyone's a winner!");
        } else {
          game.switchTurns();
          var compSpace = game.playStyle();
          if(compSpace === 'space1') {
            $('#top-left > .input').append(game.currentPlayer.symbol);
          }
          if(compSpace === 'space2') {
            $('#left-mid > .input').append(game.currentPlayer.symbol);
          }
          if(compSpace === 'space3') {
            $('#bottom-left > .input').append(game.currentPlayer.symbol);
          }
          if(compSpace === 'space4') {
            $('#top-mid > .input').append(game.currentPlayer.symbol);
          }
          if(compSpace === 'space5') {
            $('#mid-mid > .input').append(game.currentPlayer.symbol);
          }
          if(compSpace === 'space6') {
            $('#bottom-mid > .input').append(game.currentPlayer.symbol);
          }
          if(compSpace === 'space7') {
            $('#top-right > .input').append(game.currentPlayer.symbol);
          }
          if(compSpace === 'space8') {
            $('#right-mid > .input').append(game.currentPlayer.symbol);
          }
          if(compSpace === 'space9') {
            $('#bottom-right > .input').append(game.currentPlayer.symbol);
          }
          status = game.checkGameStatus();
          if (status === 'win') {
            alert('You got beat by a computer!');
            game.switchTurns();
          } else if (status === 'tie') {
            alert("Everyone's a winner!");
            game.switchTurns();
          } else {
            game.switchTurns();
          }
        }
      }
    });
    $("#" + divIDs[1]).click(function() {
      var status = game.checkGameStatus();
      if (game.gameBoard.matrix[1][0].empty === false) {
        alert('This space has been clicked on');
      } else if (status === 'win') {
        alert('This game has been won. Please re-fresh and play again!')
      } else {
        game.gameBoard.matrix[1][0].clicked();
        game.gameBoard.matrix[1][0].placeMark(game.currentPlayer);
        $('#top-mid > .input').append(game.currentPlayer.symbol);
        status = game.checkGameStatus();
        if (status === 'win') {
          alert('You won!');
        } else if (status === 'tie') {
          alert("Everyone's a winner!");
        } else {
          game.switchTurns();
          var compSpace = game.playStyle();
          if(compSpace === 'space1') {
            $('#top-left > .input').append(game.currentPlayer.symbol);
          }
          if(compSpace === 'space2') {
            $('#left-mid > .input').append(game.currentPlayer.symbol);
          }
          if(compSpace === 'space3') {
            $('#bottom-left > .input').append(game.currentPlayer.symbol);
          }
          if(compSpace === 'space4') {
            $('#top-mid > .input').append(game.currentPlayer.symbol);
          }
          if(compSpace === 'space5') {
            $('#mid-mid > .input').append(game.currentPlayer.symbol);
          }
          if(compSpace === 'space6') {
            $('#bottom-mid > .input').append(game.currentPlayer.symbol);
          }
          if(compSpace === 'space7') {
            $('#top-right > .input').append(game.currentPlayer.symbol);
          }
          if(compSpace === 'space8') {
            $('#right-mid > .input').append(game.currentPlayer.symbol);
          }
          if(compSpace === 'space9') {
            $('#bottom-right > .input').append(game.currentPlayer.symbol);
          }
          status = game.checkGameStatus();
          if (status === 'win') {
            alert('You got beat by a computer!');
            game.switchTurns();
          } else if (status === 'tie') {
            alert("Everyone's a winner!");
            game.switchTurns();
          } else {
            game.switchTurns();
          }
        }
      }
    });
    $("#" + divIDs[2]).click(function() {
      var status = game.checkGameStatus();
      if (game.gameBoard.matrix[2][0].empty === false) {
        alert('This space has been clicked on');
      } else if (status === 'win') {
        alert('This game has been won. Please re-fresh and play again!')
      } else {
        game.gameBoard.matrix[2][0].clicked();
        game.gameBoard.matrix[2][0].placeMark(game.currentPlayer);
        $('#top-right > .input').append(game.currentPlayer.symbol);
        status = game.checkGameStatus();
        if (status === 'win') {
          alert('You won!');
        } else if (status === 'tie') {
          alert("Everyone's a winner!");
        } else {
          game.switchTurns();
          var compSpace = game.playStyle();
          if(compSpace === 'space1') {
            $('#top-left > .input').append(game.currentPlayer.symbol);
          }
          if(compSpace === 'space2') {
            $('#left-mid > .input').append(game.currentPlayer.symbol);
          }
          if(compSpace === 'space3') {
            $('#bottom-left > .input').append(game.currentPlayer.symbol);
          }
          if(compSpace === 'space4') {
            $('#top-mid > .input').append(game.currentPlayer.symbol);
          }
          if(compSpace === 'space5') {
            $('#mid-mid > .input').append(game.currentPlayer.symbol);
          }
          if(compSpace === 'space6') {
            $('#bottom-mid > .input').append(game.currentPlayer.symbol);
          }
          if(compSpace === 'space7') {
            $('#top-right > .input').append(game.currentPlayer.symbol);
          }
          if(compSpace === 'space8') {
            $('#right-mid > .input').append(game.currentPlayer.symbol);
          }
          if(compSpace === 'space9') {
            $('#bottom-right > .input').append(game.currentPlayer.symbol);
          }
          status = game.checkGameStatus();
          if (status === 'win') {
            alert('You got beat by a computer!');
            game.switchTurns();
          } else if (status === 'tie') {
            alert("Everyone's a winner!");
            game.switchTurns();
          } else {
            game.switchTurns();
          }
        }
      }
    });
    $("#" + divIDs[3]).click(function() {
      var status = game.checkGameStatus();
      if (game.gameBoard.matrix[0][1].empty === false) {
        alert('This space has been clicked on');
      } else if (status === 'win') {
        alert('This game has been won. Please re-fresh and play again!')
      } else {
        game.gameBoard.matrix[0][1].clicked();
        game.gameBoard.matrix[0][1].placeMark(game.currentPlayer);
        $('#left-mid > .input').append(game.currentPlayer.symbol);
        status = game.checkGameStatus();
        if (status === 'win') {
          alert('You won!');
        } else if (status === 'tie') {
          alert("Everyone's a winner!");
        } else {
          game.switchTurns();
          var compSpace = game.playStyle();
          if(compSpace === 'space1') {
            $('#top-left > .input').append(game.currentPlayer.symbol);
          }
          if(compSpace === 'space2') {
            $('#left-mid > .input').append(game.currentPlayer.symbol);
          }
          if(compSpace === 'space3') {
            $('#bottom-left > .input').append(game.currentPlayer.symbol);
          }
          if(compSpace === 'space4') {
            $('#top-mid > .input').append(game.currentPlayer.symbol);
          }
          if(compSpace === 'space5') {
            $('#mid-mid > .input').append(game.currentPlayer.symbol);
          }
          if(compSpace === 'space6') {
            $('#bottom-mid > .input').append(game.currentPlayer.symbol);
          }
          if(compSpace === 'space7') {
            $('#top-right > .input').append(game.currentPlayer.symbol);
          }
          if(compSpace === 'space8') {
            $('#right-mid > .input').append(game.currentPlayer.symbol);
          }
          if(compSpace === 'space9') {
            $('#bottom-right > .input').append(game.currentPlayer.symbol);
          }
          status = game.checkGameStatus();
          if (status === 'win') {
            alert('You got beat by a computer!');
            game.switchTurns();
          } else if (status === 'tie') {
            alert("Everyone's a winner!");
            game.switchTurns();
          } else {
            game.switchTurns();
          }
        }
      }
    });
    $("#" + divIDs[4]).click(function() {
      var status = game.checkGameStatus();
      if (game.gameBoard.matrix[1][1].empty === false) {
        alert('This space has been clicked on');
      } else if (status === 'win') {
        alert('This game has been won. Please re-fresh and play again!')
      } else {
        game.gameBoard.matrix[1][1].clicked();
        game.gameBoard.matrix[1][1].placeMark(game.currentPlayer);
        $('#mid-mid > .input').append(game.currentPlayer.symbol);
        status = game.checkGameStatus();
        if (status === 'win') {
          alert('You won!');
        } else if (status === 'tie') {
          alert("Everyone's a winner!");
        } else {
          game.switchTurns();
          var compSpace = game.playStyle();
          if(compSpace === 'space1') {
            $('#top-left > .input').append(game.currentPlayer.symbol);
          }
          if(compSpace === 'space2') {
            $('#left-mid > .input').append(game.currentPlayer.symbol);
          }
          if(compSpace === 'space3') {
            $('#bottom-left > .input').append(game.currentPlayer.symbol);
          }
          if(compSpace === 'space4') {
            $('#top-mid > .input').append(game.currentPlayer.symbol);
          }
          if(compSpace === 'space5') {
            $('#mid-mid > .input').append(game.currentPlayer.symbol);
          }
          if(compSpace === 'space6') {
            $('#bottom-mid > .input').append(game.currentPlayer.symbol);
          }
          if(compSpace === 'space7') {
            $('#top-right > .input').append(game.currentPlayer.symbol);
          }
          if(compSpace === 'space8') {
            $('#right-mid > .input').append(game.currentPlayer.symbol);
          }
          if(compSpace === 'space9') {
            $('#bottom-right > .input').append(game.currentPlayer.symbol);
          }
          status = game.checkGameStatus();
          if (status === 'win') {
            alert('You got beat by a computer!');
            game.switchTurns();
          } else if (status === 'tie') {
            alert("Everyone's a winner!");
            game.switchTurns();
          } else {
            game.switchTurns();
          }
        }
      }
    });
    $("#" + divIDs[5]).click(function() {
      var status = game.checkGameStatus();
      if (game.gameBoard.matrix[2][1].empty === false) {
        alert('This space has been clicked on');
      } else if (status === 'win') {
        alert('This game has been won. Please re-fresh and play again!')
      } else {
        game.gameBoard.matrix[2][1].clicked();
        game.gameBoard.matrix[2][1].placeMark(game.currentPlayer);
        $('#right-mid > .input').append(game.currentPlayer.symbol);
        status = game.checkGameStatus();
        if (status === 'win') {
          alert('You won!');
        } else if (status === 'tie') {
          alert("Everyone's a winner!");
        } else {
          game.switchTurns();
          var compSpace = game.playStyle();
          if(compSpace === 'space1') {
            $('#top-left > .input').append(game.currentPlayer.symbol);
          }
          if(compSpace === 'space2') {
            $('#left-mid > .input').append(game.currentPlayer.symbol);
          }
          if(compSpace === 'space3') {
            $('#bottom-left > .input').append(game.currentPlayer.symbol);
          }
          if(compSpace === 'space4') {
            $('#top-mid > .input').append(game.currentPlayer.symbol);
          }
          if(compSpace === 'space5') {
            $('#mid-mid > .input').append(game.currentPlayer.symbol);
          }
          if(compSpace === 'space6') {
            $('#bottom-mid > .input').append(game.currentPlayer.symbol);
          }
          if(compSpace === 'space7') {
            $('#top-right > .input').append(game.currentPlayer.symbol);
          }
          if(compSpace === 'space8') {
            $('#right-mid > .input').append(game.currentPlayer.symbol);
          }
          if(compSpace === 'space9') {
            $('#bottom-right > .input').append(game.currentPlayer.symbol);
          }
          status = game.checkGameStatus();
          if (status === 'win') {
            alert('You got beat by a computer!');
            game.switchTurns();
          } else if (status === 'tie') {
            alert("Everyone's a winner!");
            game.switchTurns();
          } else {
            game.switchTurns();
          }
        }
      }
    });
    $("#" + divIDs[6]).click(function() {
      var status = game.checkGameStatus();
      if (game.gameBoard.matrix[0][2].empty === false) {
        alert('This space has been clicked on');
      } else if (status === 'win') {
        alert('This game has been won. Please re-fresh and play again!')
      } else {
        game.gameBoard.matrix[0][2].clicked();
        game.gameBoard.matrix[0][2].placeMark(game.currentPlayer);
        $('#bottom-left > .input').append(game.currentPlayer.symbol);
        status = game.checkGameStatus();
        if (status === 'win') {
          alert('You won!');
        } else if (status === 'tie') {
          alert("Everyone's a winner!");
        } else {
          game.switchTurns();
          var compSpace = game.playStyle();
          if(compSpace === 'space1') {
            $('#top-left > .input').append(game.currentPlayer.symbol);
          }
          if(compSpace === 'space2') {
            $('#left-mid > .input').append(game.currentPlayer.symbol);
          }
          if(compSpace === 'space3') {
            $('#bottom-left > .input').append(game.currentPlayer.symbol);
          }
          if(compSpace === 'space4') {
            $('#top-mid > .input').append(game.currentPlayer.symbol);
          }
          if(compSpace === 'space5') {
            $('#mid-mid > .input').append(game.currentPlayer.symbol);
          }
          if(compSpace === 'space6') {
            $('#bottom-mid > .input').append(game.currentPlayer.symbol);
          }
          if(compSpace === 'space7') {
            $('#top-right > .input').append(game.currentPlayer.symbol);
          }
          if(compSpace === 'space8') {
            $('#right-mid > .input').append(game.currentPlayer.symbol);
          }
          if(compSpace === 'space9') {
            $('#bottom-right > .input').append(game.currentPlayer.symbol);
          }
          status = game.checkGameStatus();
          if (status === 'win') {
            alert('You got beat by a computer!');
            game.switchTurns();
          } else if (status === 'tie') {
            alert("Everyone's a winner!");
            game.switchTurns();
          } else {
            game.switchTurns();
          }
        }
      }
    });
    $("#" + divIDs[7]).click(function() {
      var status = game.checkGameStatus();
      if (game.gameBoard.matrix[1][2].empty === false) {
        alert('This space has been clicked on');
      } else if (status === 'win') {
        alert('This game has been won. Please re-fresh and play again!')
      } else {
        game.gameBoard.matrix[1][2].clicked();
        game.gameBoard.matrix[1][2].placeMark(game.currentPlayer);
        $('#bottom-mid > .input').append(game.currentPlayer.symbol);
        status = game.checkGameStatus();
        if (status === 'win') {
          alert('You won!');
        } else if (status === 'tie') {
          alert("Everyone's a winner!");
        } else {
          game.switchTurns();
          var compSpace = game.playStyle();
          if(compSpace === 'space1') {
            $('#top-left > .input').append(game.currentPlayer.symbol);
          }
          if(compSpace === 'space2') {
            $('#left-mid > .input').append(game.currentPlayer.symbol);
          }
          if(compSpace === 'space3') {
            $('#bottom-left > .input').append(game.currentPlayer.symbol);
          }
          if(compSpace === 'space4') {
            $('#top-mid > .input').append(game.currentPlayer.symbol);
          }
          if(compSpace === 'space5') {
            $('#mid-mid > .input').append(game.currentPlayer.symbol);
          }
          if(compSpace === 'space6') {
            $('#bottom-mid > .input').append(game.currentPlayer.symbol);
          }
          if(compSpace === 'space7') {
            $('#top-right > .input').append(game.currentPlayer.symbol);
          }
          if(compSpace === 'space8') {
            $('#right-mid > .input').append(game.currentPlayer.symbol);
          }
          if(compSpace === 'space9') {
            $('#bottom-right > .input').append(game.currentPlayer.symbol);
          }
          status = game.checkGameStatus();
          if (status === 'win') {
            alert('You got beat by a computer!');
            game.switchTurns();
          } else if (status === 'tie') {
            alert("Everyone's a winner!");
            game.switchTurns();
          } else {
            game.switchTurns();
          }
        }
      }
    });
    $("#" + divIDs[8]).click(function() {
      var status = game.checkGameStatus();
      if (game.gameBoard.matrix[2][2].empty === false) {
        alert('This space has been clicked on');
      } else if (status === 'win') {
        alert('This game has been won. Please re-fresh and play again!')
      } else {
        game.gameBoard.matrix[2][2].clicked();
        game.gameBoard.matrix[2][2].placeMark(game.currentPlayer);
        $('#bottom-right > .input').append(game.currentPlayer.symbol);
        status = game.checkGameStatus();
        if (status === 'win') {
          alert('You won!');
        } else if (status === 'tie') {
          alert("Everyone's a winner!");
        } else {
          game.switchTurns();
          var compSpace = game.playStyle();
          if(compSpace === 'space1') {
            $('#top-left > .input').append(game.currentPlayer.symbol);
          }
          if(compSpace === 'space2') {
            $('#left-mid > .input').append(game.currentPlayer.symbol);
          }
          if(compSpace === 'space3') {
            $('#bottom-left > .input').append(game.currentPlayer.symbol);
          }
          if(compSpace === 'space4') {
            $('#top-mid > .input').append(game.currentPlayer.symbol);
          }
          if(compSpace === 'space5') {
            $('#mid-mid > .input').append(game.currentPlayer.symbol);
          }
          if(compSpace === 'space6') {
            $('#bottom-mid > .input').append(game.currentPlayer.symbol);
          }
          if(compSpace === 'space7') {
            $('#top-right > .input').append(game.currentPlayer.symbol);
          }
          if(compSpace === 'space8') {
            $('#right-mid > .input').append(game.currentPlayer.symbol);
          }
          if(compSpace === 'space9') {
            $('#bottom-right > .input').append(game.currentPlayer.symbol);
          }
          status = game.checkGameStatus();
          if (status === 'win') {
            alert('You got beat by a computer!');
            game.switchTurns();
          } else if (status === 'tie') {
            alert("Everyone's a winner!");
            game.switchTurns();
          } else {
            game.switchTurns();
          }
        }
      }
    });
    $('#reset').click(function() {
      for (var i = 0; i < 3; i++) {
        for (var j = 0; j < 3; j++) {
          game.gameBoard.matrix[i][j].empty = true;
          game.gameBoard.matrix[i][j].symbol = "";
        }
      }
      $(".input").empty();
    });
  } else {
    $("#" + divIDs[0]).click(function() {
      var status = game.checkGameStatus();
      if (game.gameBoard.matrix[0][0].empty === false) {
        alert('This space has been clicked on');
      } else if (status === 'win') {
        alert('This game has been won. Please re-fresh and play again!')
      } else {
        game.gameBoard.matrix[0][0].clicked();
        game.gameBoard.matrix[0][0].placeMark(game.currentPlayer);
        $('#top-left > .input').append(game.currentPlayer.symbol);
        status = game.checkGameStatus();
        if (status === 'win') {
          alert('You won!');
        } else if (status === 'tie') {
          alert("Everyone's a winner!");
        } else {
          game.switchTurns();
        }
      }
    });
    $("#" + divIDs[1]).click(function() {
      var status = game.checkGameStatus();
      if (game.gameBoard.matrix[1][0].empty === false) {
        alert('This space has been clicked on');
      } else if (status === 'win') {
        alert('This game has been won. Please re-fresh and play again!')
      } else {
        game.gameBoard.matrix[1][0].clicked();
        game.gameBoard.matrix[1][0].placeMark(game.currentPlayer);
        $('#top-mid > .input').append(game.currentPlayer.symbol);
        status = game.checkGameStatus();
        if (status === 'win') {
          alert('You won!');
        } else if (status === 'tie') {
          alert("Everyone's a winner!");
        } else {
          game.switchTurns();
        }
      }
    });
    $("#" + divIDs[2]).click(function() {
      var status = game.checkGameStatus();
      if (game.gameBoard.matrix[2][0].empty === false) {
        alert('This space has been clicked on');
      } else if (status === 'win') {
        alert('This game has been won. Please re-fresh and play again!')
      } else {
        game.gameBoard.matrix[2][0].clicked();
        game.gameBoard.matrix[2][0].placeMark(game.currentPlayer);
        $('#top-right > .input').append(game.currentPlayer.symbol);
        status = game.checkGameStatus();
        if (status === 'win') {
          alert('You won!');
        } else if (status === 'tie') {
          alert("Everyone's a winner!");
        } else {
          game.switchTurns();
        }
      }
    });
    $("#" + divIDs[3]).click(function() {
      var status = game.checkGameStatus();
      if (game.gameBoard.matrix[0][1].empty === false) {
        alert('This space has been clicked on');
      } else if (status === 'win') {
        alert('This game has been won. Please re-fresh and play again!')
      } else {
        game.gameBoard.matrix[0][1].clicked();
        game.gameBoard.matrix[0][1].placeMark(game.currentPlayer);
        $('#left-mid > .input').append(game.currentPlayer.symbol);
        status = game.checkGameStatus();
        if (status === 'win') {
          alert('You won!');
        } else if (status === 'tie') {
          alert("Everyone's a winner!");
        } else {
          game.switchTurns();
        }
      }
    });
    $("#" + divIDs[4]).click(function() {
      var status = game.checkGameStatus();
      if (game.gameBoard.matrix[1][1].empty === false) {
        alert('This space has been clicked on');
      } else if (status === 'win') {
        alert('This game has been won. Please re-fresh and play again!')
      } else {
        game.gameBoard.matrix[1][1].clicked();
        game.gameBoard.matrix[1][1].placeMark(game.currentPlayer);
        $('#mid-mid > .input').append(game.currentPlayer.symbol);
        status = game.checkGameStatus();
        if (status === 'win') {
          alert('You won!');
        } else if (status === 'tie') {
          alert("Everyone's a winner!");
        } else {
          game.switchTurns();
        }
      }
    });
    $("#" + divIDs[5]).click(function() {
      var status = game.checkGameStatus();
      if (game.gameBoard.matrix[2][1].empty === false) {
        alert('This space has been clicked on');
      } else if (status === 'win') {
        alert('This game has been won. Please re-fresh and play again!')
      } else {
        game.gameBoard.matrix[2][1].clicked();
        game.gameBoard.matrix[2][1].placeMark(game.currentPlayer);
        $('#right-mid > .input').append(game.currentPlayer.symbol);
        status = game.checkGameStatus();
        if (status === 'win') {
          alert('You won!');
        } else if (status === 'tie') {
          alert("Everyone's a winner!");
        } else {
          game.switchTurns();
        }
      }
    });
    $("#" + divIDs[6]).click(function() {
      var status = game.checkGameStatus();
      if (game.gameBoard.matrix[0][2].empty === false) {
        alert('This space has been clicked on');
      } else if (status === 'win') {
        alert('This game has been won. Please re-fresh and play again!')
      } else {
        game.gameBoard.matrix[0][2].clicked();
        game.gameBoard.matrix[0][2].placeMark(game.currentPlayer);
        $('#bottom-left > .input').append(game.currentPlayer.symbol);
        status = game.checkGameStatus();
        if (status === 'win') {
          alert('You won!');
        } else if (status === 'tie') {
          alert("Everyone's a winner!");
        } else {
          game.switchTurns();
        }
      }
    });
    $("#" + divIDs[7]).click(function() {
      var status = game.checkGameStatus();
      if (game.gameBoard.matrix[1][2].empty === false) {
        alert('This space has been clicked on');
      } else if (status === 'win') {
        alert('This game has been won. Please re-fresh and play again!')
      } else {
        game.gameBoard.matrix[1][2].clicked();
        game.gameBoard.matrix[1][2].placeMark(game.currentPlayer);
        $('#bottom-mid > .input').append(game.currentPlayer.symbol);
        status = game.checkGameStatus();
        if (status === 'win') {
          alert('You won!');
        } else if (status === 'tie') {
          alert("Everyone's a winner!");
        } else {
          game.switchTurns();
        }
      }
    });
    $("#" + divIDs[8]).click(function() {
      var status = game.checkGameStatus();
      if (game.gameBoard.matrix[2][2].empty === false) {
        alert('This space has been clicked on');
      } else if (status === 'win') {
        alert('This game has been won. Please re-fresh and play again!')
      } else {
        game.gameBoard.matrix[2][2].clicked();
        game.gameBoard.matrix[2][2].placeMark(game.currentPlayer);
        $('#bottom-right > .input').append(game.currentPlayer.symbol);
        status = game.checkGameStatus();
        if (status === 'win') {
          alert('You won!');
        } else if (status === 'tie') {
          alert("Everyone's a winner!");
        } else {
          game.switchTurns();
        }
      }
    });
    $('#reset').click(function() {
      for (var i = 0; i < 3; i++) {
        for (var j = 0; j < 3; j++) {
          game.gameBoard.matrix[i][j].empty = true;
          game.gameBoard.matrix[i][j].symbol = "";
        }
      }
      $(".input").empty();
    });
  }
});
