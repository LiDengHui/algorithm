import { radixSort } from "@/sort/radix.js";

describe("基数排序", () => {
    it("排序 [45, 72, 93, 51, 21, 16, 70, 41, 27, 31]", () => {
        const ary = [45, 72, 93, 51, 21, 16, 70, 41, 27, 31];
        const sorted = [16, 21, 27, 31, 41, 45, 51, 70, 72, 93];
        expect(radixSort(ary, 2)).toEqual(sorted);
    });

    it("排序 [76, 77, 15, 84, 79, 71, 69, 99, 6, 54]", () => {
        const ary = [76, 77, 15, 84, 79, 71, 69, 99, 6, 54];
        const sorted = [6, 15, 54, 69, 71, 76, 77, 79, 84, 99];
        expect(radixSort(ary, 2)).toEqual(sorted);
    });
});
