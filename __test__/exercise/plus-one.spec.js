import { plusOne2, plusOne1 } from "@/exercise/plus-one";

describe("plus one", () => {
    [plusOne1, plusOne2].forEach((plusOne) => {
        it("nums = [1,2,3], result = [1,2,4]", () => {
            const nums = [1, 2, 3];

            expect(plusOne(nums)).toStrictEqual([1, 2, 4]);
        });

        it("nums = [4, 3, 2, 1], result = [4, 3, 2, 2]", () => {
            const nums = [4, 3, 2, 1];

            expect(plusOne(nums)).toStrictEqual([4, 3, 2, 2]);
        });
    });
});
