import { rotate } from "@/exercise/rotate";

describe("rotate", () => {
    it(`nums = [1,2,3,4,5,6,7], right rotate 3, result [5,6,7,1,2,3,4]`, () => {
        const nums = [1, 2, 3, 4, 5, 6, 7];
        rotate(nums, 3);
        expect(nums).toStrictEqual([5, 6, 7, 1, 2, 3, 4]);
    });

    it(`nums = [-1,-100,3,99], right rotate 2, result [3,99,-1,-100]`, () => {
        const nums = [-1, -100, 3, 99];
        rotate(nums, 2);
        expect(nums).toStrictEqual([3, 99, -1, -100]);
    });

    it(`nums = [1,2], right rotate 1, result [2,1]`, () => {
        const nums = [1, 2];
        rotate(nums, 1);
        expect(nums).toStrictEqual([2, 1]);
    });

    it(`nums = [-1], right rotate 2, result [-1]`, () => {
        const nums = [-1];
        rotate(nums, 2);
        expect(nums).toStrictEqual([-1]);
    });
});
