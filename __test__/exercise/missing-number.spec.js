import { missingNumber } from "@/exercise/missing-number";
describe("missingNumber", () => {
    it("[0,1,3]", () => {
        expect(missingNumber([0, 1, 3])).toBe(2);
    });
    it("[0,1,2,3,4,5,6,7,9]", () => {
        expect(missingNumber([0, 1, 2, 3, 4, 5, 6, 7, 9])).toBe(8);
    });
});
