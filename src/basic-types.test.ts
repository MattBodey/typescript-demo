import { add, stringAdder } from "./basic-types";

describe("add tests", () => {
  it("adds two numbers", () => {
    expect(add(1, 2)).toEqual(3);
  });

  it("turns numbers into strings", () => {
    expect(stringAdder(1, 3)).toEqual("13");
  });
});
