import { findMin } from "./find-min";

describe("findMin", () => {
    it("should return min number of nums", () => {
        expect(findMin([3, 4, 5, 1, 2])).toBe(1);
    });

    it("should return number, when nums not rotate", () => {
        expect(findMin([1, 2, 3, 4, 5])).toBe(1);
    });

    it("should return min , when nums length  is 2", () => {
        expect(findMin([2, 1])).toBe(1);
    });
});
