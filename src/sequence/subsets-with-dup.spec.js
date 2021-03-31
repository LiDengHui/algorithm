import { subsetsWithDup } from "./subsets-with-dup";

describe("subsets-with-dup", () => {
    it("should support 3 of the arr length ", () => {
        expect(subsetsWithDup([1, 2, 3])).toStrictEqual([
            [],
            [1],
            [1, 2],
            [1, 2, 3],
            [1, 3],
            [2],
            [2, 3],
            [3],
        ]);
    });

    it("should support 3 of the arr length  ", () => {
        expect(subsetsWithDup([1, 2, 2])).toStrictEqual([
            [],
            [1],
            [1, 2],
            [1, 2, 2],
            [2],
            [2, 2],
        ]);
    });

    it("should support 1 of the arr length ", () => {
        expect(subsetsWithDup([0])).toStrictEqual([[], [0]]);
    });
});
