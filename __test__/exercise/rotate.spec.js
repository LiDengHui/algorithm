import { rotate } from "@/exercise/rotate";

describe("rotate", () => {
    it(`nums = [1,2,3,4,5,6,7], right rotate 3, result [5,6,7,1,2,3,4]`, () => {
        const nums = [1, 2, 3, 4, 5, 6, 7];
        rotate(nums, 3);
        expect(nums).toStrictEqual([5, 6, 7, 1, 2, 3, 4]);
    });
});
