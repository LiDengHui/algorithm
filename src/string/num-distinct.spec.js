import { numDistinct } from "./num-distinct";

describe("num-distinct", function () {
    it('should return 3 , when s="rabbbit", t="rabbit"', () => {
        expect(numDistinct("rabbbit", "rabbit")).toBe(3);
    });
});
