describe("Test for huddle.js", function() {

  beforeEach(function() {
    roundNum = 0;
    scoreCard = {};
  });

  afterEach(function() {
    roundNum = 5;
    scoreCard = {};
  });

  // test for incrementRoundString
  it("should increase the roundNum", function() {
    incrementRoundString();
    expect(roundNum).toBe(1);
  });

  // test for incrementCounter
  it("should increment counter", function() {
    incrementCounter(1);
    expect(scoreCard[1]).toBe(1);
    incrementCounter(1);
    expect(scoreCard[1]).toBe(2);
  });

  // test for decrementCounter
  it("should decrement the counter", function() {
    decrementCounter(1);
    expect(scoreCard[1]).toBe(-1);
    scoreCard[2] = 5;
    decrementCounter(2);
    expect(scoreCard[2]).toBe(4);
  });
});