import { climbStairs } from "@/exercise/climb-stairs";

describe("climbStairs", () => {
    it("n = 2, return 2", () => {
        expect(climbStairs(2)).toBe(2);
    });
    it("n=3, return 3", () => {
        expect(climbStairs(3)).toBe(3);
    });

    it("n=4, return 8", () => {
        expect(climbStairs(3)).toBe(3);
    });
});
