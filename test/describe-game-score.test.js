const describeGameScore = require("../lib/describe-game-score");

describe("describeGameScore", () => {
  test("should handle before-deuce situation", () => {
    expect(describeGameScore(0, 0)).toBe("love-all");
    expect(describeGameScore(1, 0)).toBe("15-love");
    expect(describeGameScore(2, 2)).toBe("30-all");
    expect(describeGameScore(2, 3)).toBe("30-40");
  });

  test("should handle deuce situation", () => {
    expect(describeGameScore(3, 3)).toBe("deuce");
  });

  test("should handle advantage situation", () => {
    expect(describeGameScore(6, 5)).toBe("advantage in");
    expect(describeGameScore(7, 8)).toBe("advantage out");
  });

  test("should handle game-winning situation", () => {
    expect(describeGameScore(10, 8)).toBe("server won");
    expect(describeGameScore(2, 4)).toBe("receiver won");
  });

  test("should handle invalid score", () => {
    expect(() => {
      describeGameScore("one", 2);
    }).toThrow("Invalid score!");
    expect(() => {
      describeGameScore(-1, 3);
    }).toThrow("Invalid score!");
    expect(() => {
      describeGameScore(2, 5);
    }).toThrow("Invalid score!");
    expect(() => {
      describeGameScore(6, 9);
    }).toThrow("Invalid score!");
  });
});
