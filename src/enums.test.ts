import { isStaff, Affiliation } from "./enums";

describe("is staff tests", () => {
  it("returns true for staff", () => {
    expect(isStaff(Affiliation.staff)).toEqual(true);
  });
  it("returns false for student", () => {
    expect(isStaff(Affiliation.student)).toEqual(false);
  });
  it("returns false for associate", () => {
    expect(isStaff(Affiliation.associate)).toEqual(false);
  });
});
