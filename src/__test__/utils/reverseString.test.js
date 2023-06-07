import { reverseString } from "../../utils/reverseString.js";

describe("tests for revertString function", () => {
  it("should reverse string", () => {
    expect(reverseString("abc")).toBe("cba");
    expect(reverseString('1234')).toBe('4321');
    expect(reverseString('1a2b3c')).toBe('c3b2a1');
  });
});