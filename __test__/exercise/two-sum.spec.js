import { twoSum } from "@/exercise/two-sum.js";

describe("twoSum", () => {
    it("n = 1", () => {
        expect(twoSum(1)).toEqual([
            0.16667,
            0.16667,
            0.16667,
            0.16667,
            0.16667,
            0.16667,
        ]);
    });

    it("n = 2", () => {
        expect(twoSum(2)).toEqual([
            0.02778,
            0.05556,
            0.08333,
            0.11111,
            0.13889,
            0.16667,
            0.13889,
            0.11111,
            0.08333,
            0.05556,
            0.02778,
        ]);
    });
});
