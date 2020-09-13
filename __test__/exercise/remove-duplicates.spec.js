import { removeDuplicates } from "@/exercise/remove-duplicates";

describe("remove duplicates", () => {
    it("nums = [1,1,2], return 2, nums=[1,2] ", () => {
        const nums = [1, 1, 2];
        const count = removeDuplicates(nums);

        expect(nums.slice(0, count)).toStrictEqual([1, 2]);
    });

    it("nums = [0,0,1,1,1,2,2,3,3,4], result 5, nums = [0, 1, 2, 3, 4]", () => {
        const nums = [0, 0, 1, 1, 1, 2, 2, 3, 3, 4];

        const count = removeDuplicates(nums);

        expect(nums.slice(0, count)).toStrictEqual([0, 1, 2, 3, 4]);
    });
});
