import { twoSum } from "@/exercise/two-sum-01";

describe("two Sum", () => {
    it("nums = [2,7,11,15], target = 9", () => {
        const nums = [2, 7, 11, 15];
        const target = 9;
        expect(twoSum(nums, target)).toStrictEqual([2, 7]);
    });

    it("nums = [10,26,30,31,47,60], target = 40", () => {
        const nums = [10, 26, 30, 31, 47, 60];
        const target = 40;
        expect(twoSum(nums, target)).toStrictEqual([10, 30]);
    });
});
