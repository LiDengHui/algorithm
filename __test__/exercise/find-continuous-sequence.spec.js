import { findContinuousSequence } from "@/exercise/find-continuous-sequence";

describe("find-continuous-sequence", () => {
    it("9", () => {
        expect(findContinuousSequence(9)).toStrictEqual([
            [2, 3, 4],
            [4, 5],
        ]);
    });

    it("15", () => {
        expect(findContinuousSequence(15)).toStrictEqual([
            [1, 2, 3, 4, 5],
            [4, 5, 6],
            [7, 8],
        ]);
    });
});
