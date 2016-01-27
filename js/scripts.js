var Player = function(symbol) {
  this.symbol = symbol;
}

var Space = function(xCoordinate, yCoordinate) {
  this.xCoordinate = xCoordinate;
  this.yCoordinate = yCoordinate;
}

Player.prototype.mark = function() {
  return this.symbol;
}
