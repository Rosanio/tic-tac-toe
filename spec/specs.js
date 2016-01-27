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

  it("lets a player mark a space", function() {
    var testPlayer = new Player("X")
    var testSpace = new Space(1,2);
    testSpace.markedBy(testPlayer)
    expect(testSpace.markedBy(testPlayer)).to.equal(testPlayer);
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
        testBoardMatrix[i-1,j-1] = new Space(i,j);
      }
    }
    expect(testBoard.makeSpaces()).to.eql(testBoardMatrix);
  });
});
