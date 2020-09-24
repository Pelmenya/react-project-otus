import { getRandomMatrix2D } from "./utils";

describe("Test getRandomMatrix2D", () => {
  it("3*2 full field", () => {
    expect(getRandomMatrix2D(3, 3, 100, " ")).toStrictEqual([
      [" ", " ", " "],
      [" ", " ", " "],
      [" ", " ", " "],
    ]);
  });
  it("3*3 full field", () => {
    expect(getRandomMatrix2D(3, 3, 100, "")).toStrictEqual([
      ["", "", ""],
      ["", "", ""],
      ["", "", ""],
    ]);
  });
  it("5*3 full field", () => {
    expect(getRandomMatrix2D(5, 3, 0, " ")).toStrictEqual([
      ["", "", "", "", ""],
      ["", "", "", "", ""],
      ["", "", "", "", ""],
    ]);
  });
});
