import { add } from "./basic-types";

describe("add tests", () => {
  it("adds two numbers", () => {
    expect(add(1, 2)).toEqual(3);
  });
});
