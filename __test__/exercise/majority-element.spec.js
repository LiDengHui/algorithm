import {
    majorityElement1,
    majorityElement2,
    majorityElement3,
} from "@/exercise/majority-element";

describe("majority-element", () => {
    [majorityElement1, , majorityElement2, majorityElement3].forEach((fn) => {
        it("nums = [3,2,3], return 3", () => {
            const nums = [3, 2, 3];
            expect(fn(nums)).toBe(3);
        });
        it("nums = [2,2,1,1,1,2,2] return 2", () => {
            const nums = [2, 2, 1, 1, 1, 2, 2];
            expect(fn(nums)).toBe(2);
        });
    });
});
