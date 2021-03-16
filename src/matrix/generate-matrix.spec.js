import { generateMatrix } from "./generate-matrix";

describe("generate-matrix", function () {
    it("3 * 3 matrix", function () {
        expect(generateMatrix(3)).toStrictEqual([
            [1, 2, 3],
            [8, 9, 4],
            [7, 6, 5],
        ]);
    });
    it("1 * 1 matrix", function () {
        expect(generateMatrix(1)).toStrictEqual([[1]]);
    });
});
