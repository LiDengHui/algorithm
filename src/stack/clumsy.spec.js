import { clumsy } from "./clumsy";

describe("clumsy", () => {
    it("should support 4 num", () => {
        expect(clumsy(4)).toBe(7);
    });

    it("should support 10 num", () => {
        expect(clumsy(10)).toBe(12);
    });
});
