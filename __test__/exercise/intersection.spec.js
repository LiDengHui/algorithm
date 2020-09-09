import { intersection1, intersection2 } from "@/exercise/intersection.js";
const sort = (arr) => arr.sort((a, b) => a - b);
describe("intersection", () => {
    [intersection1, intersection2].forEach((intersection) => {
        it("nums1 = [1, 2, 2, 1], nums2 = [2, 2] ,return [2] ", () => {
            const nums1 = [1, 2, 2, 1];
            const nums2 = [2, 2];

            expect(sort(intersection(nums1, nums2))).toStrictEqual([2]);
        });

        it("nums1 = [4, 9, 5], nums2 = [9, 4, 9, 8, 4] ,return [9, 4] ", () => {
            const nums1 = [4, 9, 5];
            const nums2 = [9, 4, 9, 8, 4];
            expect(sort(intersection(nums1, nums2))).toStrictEqual([4, 9]);
        });
    });
});
