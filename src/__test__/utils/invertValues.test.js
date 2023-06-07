import { invertValues } from "../../utils/invertValues";

describe("Invert array values", () => {
    const zero = [-0]
    it('should invert array values', () => {
    expect(invertValues([1, 2, 3, 4, 5])).toEqual([-1, -2, -3, -4, -5]);
    expect(invertValues([1, -2, 3, -4, 5])).toEqual([-1, 2, -3, 4, -5]);
    expect(invertValues([])).toEqual([]);
    expect(invertValues([0])).toEqual(zero);
});
});