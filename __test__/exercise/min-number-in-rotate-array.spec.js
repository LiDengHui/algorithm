import { minNumberInRotateArray } from "@/exercise/min-number-in-rotate-array.js";
describe("minNumberInRotateArray", () => {
    it("[3,4,5,6,0,1,2] => 0", () => {
        const arr = [3, 4, 5, 6, 0, 1, 2];
        expect(minNumberInRotateArray(arr)).toBe(0);
    });

    it("[1,0,1,1,1,1] => 0", () => {
        const arr = [1, 0, 1, 1, 1, 1];
        expect(minNumberInRotateArray(arr)).toBe(0);
    });

    it("[2,2,3,4,5,6,6] => 2", () => {
        const arr = [2, 2, 3, 4, 5, 6, 6];
        expect(minNumberInRotateArray(arr)).toBe(2);
    });
});
