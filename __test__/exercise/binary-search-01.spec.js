import { binarySearchOfK } from "@/exercise/binary-search-01.js";
describe("binary-search-01", () => {
    it("search 8 in [5,7,7,8,8,10]", () => {
        const nums = [5, 7, 7, 8, 8, 10];
        expect(binarySearchOfK(nums, 8)).toEqual([3, 4]);
    });

    it("search 6 in [5,7,7,8,8,10]", () => {
        const nums = [5, 7, 7, 8, 8, 10];
        expect(binarySearchOfK(nums, 6)).toEqual([-1, -1]);
    });
});
