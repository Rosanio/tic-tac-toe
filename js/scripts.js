var Player = function(symbol) {
  this.symbol = symbol;
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
}

Player.prototype.mark = function() {
  return this.symbol;
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
  var randomPlayerChoice = (Math.floor(Math.random()*10))+1;
  if (randomPlayerChoice <= 5) {
    this.currentPlayer = player1;
  } else {
    this.currentPlayer = player2;
  }
  return [player1, player2];
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
  var game = new Game();
  game.initPlayers();
  game.initBoard();
  // var chooseSymbol = prompt("Would you like to be X's or O's?").toUpperCase();
  // if(chooseSymbol !== 'X' || chooseSymbol !== 'O') {
  //   alert("Please enter either 'X' or 'O'")
  // }else if(chooseSymbol === game.currentPlayer.symbol) {
  //   alert("Alright, you get to go first!");
  // } else {
  //   alert("Sorry, the other guy gets to go first...")
  // }
  var divIDs = ["top-left", "top-mid", "top-right", "left-mid", "mid-mid", "right-mid", "bottom-left", "bottom-mid", "bottom-right"]
  var matrixIDs = [];
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
});
