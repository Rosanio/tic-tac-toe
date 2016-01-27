var Player = function(symbol) {
  this.symbol = symbol;
}

var Space = function(xCoordinate, yCoordinate) {
  this.xCoordinate = xCoordinate;
  this.yCoordinate = yCoordinate;
  this.empty = true;
  this.symbol = "";
}

var Board = function() {}

Player.prototype.mark = function() {
  return this.symbol;
}

Space.prototype.markedBy = function(player) {
  return player;
}

Space.prototype.clicked = function() {
  this.empty = false;
  return this.empty;
}

Board.prototype.makeSpaces = function() {
  var boardMatrix = [[],[],[]];
  for(var i = 1; i <= 3; i++) {
    for(var j = 1; j <= 3; j++) {
      boardMatrix[i-1,j-1] = new Space(i,j);
    }
  }
  return boardMatrix;
}
