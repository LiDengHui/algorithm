import { heightChecker1, heightChecker2 } from "@/exercise/height-checker";

describe("height-checker", () => {
    [heightChecker1, heightChecker2].forEach((heightChecker) => {
        it("num = [1,1,4,2,1,3]", () => {
            const nums = [1, 1, 4, 2, 1, 3];
            expect(heightChecker(nums)).toBe(3);
        });

        it("num = [5,1,2,3,4]", () => {
            const nums = [5, 1, 2, 3, 4];
            expect(heightChecker(nums)).toBe(5);
        });
        it("num = [1,2,3,4,5]", () => {
            const nums = [1, 2, 3, 4, 5];
            expect(heightChecker(nums)).toBe(0);
        });
    });
});
