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
          console.log('hor');
          return true;
        }
      }
    } else if(i === 2) {
      for(var k = 0; k < 3; k++) {
        if(this.matrix[k][0].symbol === "") {
          continue;
        }
        if((this.matrix[k][0].symbol === this.matrix[k][1].symbol) && (this.matrix[k][1].symbol === this.matrix[k][2].symbol)) {
          console.log('ver');
          return true;
        }
      }
    } else if(this.matrix[0][0].symbol === "") {
      return false;
    } else if(i === 3) {
      if((this.matrix[0][0].symbol === this.matrix[1][1].symbol) && (this.matrix[1][1].symbol === this.matrix[2][2].symbol)) {
        console.log('dia1');
        return true;
      }
    } else if (this.matrix[0][2].symbol === "") {
      return false;
    } else if (i === 4) {
      if((this.matrix[2][0].symbol === this.matrix[1][1].symbol) && (this.matrix[1][1].symbol === this.matrix[0][2].symbol)) {
        console.log('dia2');
        return true;
      }
    }
  }
  return false;
}
