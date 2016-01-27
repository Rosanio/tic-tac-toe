describe('Player', function() {
  it("returns the player's mark", function() {
    var testPlayer = new Player("X");
    expect(testPlayer.mark()).to.equal("X");
  });
});

describe('Space', function() {
  it("returns the player's mark", function() {
    var testSpace = new Space(1,2);
    expect(testSpace.xCoordinate).to.equal(1);
  });

  it("returns the player's mark", function() {
    var testSpace = new Space(1,2);
    expect(testSpace.yCoordinate).to.equal(2);
  });

  it("will change the empty property of a Space when clicked is run", function() {
    var testSpace = new Space(1,2);
    expect(testSpace.clicked()).to.equal(false);
  });

  it("will update the symbol property of the Space object with a player clicks on it", function() {
    var testSpace = new Space(1,2);
    var testPlayer = new Player("X");
    expect(testSpace.placeMark(testPlayer)).to.equal("X");
  });
});

describe('Board', function() {
  it("creates 9 spaces when it is initialized", function() {
    var testBoard = new Board();
    var testBoardMatrix = [[],[],[]];
    for(var i = 1; i <= 3; i++) {
      for(var j = 1; j <= 3; j++) {
        testBoardMatrix[i-1][j-1] = new Space(i,j);
      }
    }
    expect(testBoard.makeSpaces()).to.eql(testBoardMatrix);
  });

  it("will return a specific space on the board using input coordinates", function() {
    var testBoard = new Board();
    var testSpace = new Space(1,2);
    testBoard.makeSpaces();
    expect(testBoard.findSpace(1,2)).to.eql(testSpace);
  });

  it('will return true if there are three spaces with the same symbol in a row',function() {
    var testBoard = new Board();
    testBoard.makeSpaces();
    testBoard.matrix[0][0].symbol = 'X';
    testBoard.matrix[1][1].symbol = 'X';
    testBoard.matrix[2][2].symbol = 'X';
    expect(testBoard.checkWin()).to.equal(true);
  });
});

describe('Game', function() {
  it('will initialize game object with two players', function() {
    var testGame = new Game();
    var testPlayer1 = new Player("X");
    var testPlayer2 = new Player("O");
    expect(testGame.initPlayers()).to.eql([testPlayer1,testPlayer2]);
  });

  it('will initialize a board within game object', function() {
    var testGame = new Game();
    var testBoard = new Board();
    testBoard.makeSpaces();
    expect(testGame.initBoard()).to.eql(testBoard);
  });
});
