import { isStraight } from "@/exercise/is-straight";

describe("is-straight", () => {
    it("[1,2,3,4,5]", () => {
        const nums = [1, 2, 3, 4, 5];
        expect(isStraight(nums)).toBeTruthy;
    });

    it("[0,0,1,2,5]", () => {
        const nums = [0, 0, 1, 2, 5];
        expect(isStraight(nums)).toBeTruthy;
    });
});
