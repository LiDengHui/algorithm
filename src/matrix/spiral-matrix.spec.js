import { spiralOrder } from "./spiral-matrix";
describe("spiral-matrix", function () {
    it("3 * 3 matrix", function () {
        const matrix = [
            [1, 2, 3],
            [4, 5, 6],
            [7, 8, 9],
        ];

        expect(spiralOrder(matrix)).toStrictEqual([1, 2, 3, 6, 9, 8, 7, 4, 5]);
    });

    it("3 * 1 matrix", function () {
        const matrix = [[1], [4], [7]];

        expect(spiralOrder(matrix)).toStrictEqual([1, 4, 7]);
    });

    it("1 * 3 matrix", function () {
        const matrix = [[1, 2, 3]];

        expect(spiralOrder(matrix)).toStrictEqual([1, 2, 3]);
    });

    it("0 * 0 matrix", function () {
        const matrix = [];

        expect(spiralOrder(matrix)).toStrictEqual([]);
    });

    it("3 * 0 matrix", function () {
        const matrix = [[], [], []];

        expect(spiralOrder(matrix)).toStrictEqual([]);
    });

    it("4 * 3 matrix", function () {
        const matrix = [
            [1, 2, 3, 4],
            [5, 6, 7, 8],
            [9, 10, 11, 12],
        ];
        expect(spiralOrder(matrix)).toStrictEqual([
            1,
            2,
            3,
            4,
            8,
            12,
            11,
            10,
            9,
            5,
            6,
            7,
        ]);
    });
});
