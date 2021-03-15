import { transpose } from "@/exercise/array/transpose-matrix";

describe("array/transpose-matrix", () => {
    it("[[1,2,3],[4,5,6],[7,8,9]] transpose matrix is [[1,4,7],[2,5,8],[3,6,9]]", () => {
        const A = [
            [1, 2, 3],
            [4, 5, 6],
            [7, 8, 9],
        ];

        const B = transpose(A);

        expect(B).toStrictEqual([
            [1, 4, 7],
            [2, 5, 8],
            [3, 6, 9],
        ]);
    });

    it("[[1,2,3],[4,5,6]] transpose matrix is [[1,4],[2,5],[3,6]]", () => {
        const A = [
            [1, 2, 3],
            [4, 5, 6],
        ];

        const B = transpose(A);

        expect(B).toStrictEqual([
            [1, 4],
            [2, 5],
            [3, 6],
        ]);
    });
});
