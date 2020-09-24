import { removeElement } from "@/exercise/remove-element";

describe("remove-element", () => {
    it("[3,2,2,3] remove 3, [2,2]", () => {
        const nums = [3, 2, 2, 3];

        expect(removeElement(nums, 3)).toBe(2);
        expect(nums.slice(0, 2)).toStrictEqual([2, 2]);
    });

    it("[0,1,2,2,3,0,4,2] remove 2, [0, 1, 3, 0, 4]", () => {
        const nums = [0, 1, 2, 2, 3, 0, 4, 2];

        expect(removeElement(nums, 2)).toBe(5);
        expect(nums.slice(0, 5)).toStrictEqual([0, 1, 3, 0, 4]);
    });
});
