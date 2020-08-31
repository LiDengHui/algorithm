import { integerBreak1, integerBreak2 } from "@/exercise/integer-break.js";

describe("integer-break", () => {
    [integerBreak1, integerBreak2].forEach((integerBreak) => {
        it("n = 2, return 1", () => {
            expect(integerBreak(2)).toBe(1);
        });
        it("n = 10, return 36", () => {
            expect(integerBreak(10)).toBe(36);
        });
    });
});
