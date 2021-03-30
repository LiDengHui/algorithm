import { searchMatrix } from "./search-matrix";
describe("exercise searchMatrix", () => {
    it("should support 3*3 matrix", () => {
        const arr = [
            [1, 3, 5, 7],
            [10, 11, 16, 20],
            [23, 30, 34, 60],
        ];
        expect(searchMatrix(arr, 3)).toBe(true);
    });
    it("should support 3* 4 matrix", () => {
        const arr = [
            [1, 3, 5, 7],
            [10, 11, 16, 20],
            [23, 30, 34, 60],
        ];

        expect(searchMatrix(arr, 13)).toBe(false);
    });

    it("should support 1 * 1 matrix", () => {
        const arr = [[1]];
        expect(searchMatrix(arr, 1)).toBe(true);
    });
});
