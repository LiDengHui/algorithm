import searchMatrix from "@/exercise/search-matrix";
describe("exercise searchMatrix", () => {
    let arr = [
        [1, 4, 7, 11, 15],
        [2, 5, 8, 12, 19],
        [3, 6, 9, 16, 22],
        [10, 13, 14, 17, 24],
        [18, 21, 23, 26, 30],
    ];

    // it("search 5", () => {
    //     expect(searchMatrix(arr, 5)).toBe(true);
    // });

    // it("search 10", () => {
    //     expect(searchMatrix(arr, 20)).toBe(false);
    // });

    // it("search [0][0] matrix", () => {
    //     expect(searchMatrix([[]], 5)).toBe(false);
    // });

    // it("search [1][n] matrix", () => {
    //     arr = [[1, 2, 3, 4, 5, 6]];
    //     expect(searchMatrix(arr, 4)).toBe(true);
    //     expect(searchMatrix(arr, 7)).toBe(false);
    //     expect(searchMatrix(arr, 6)).toBe(true);
    //     expect(searchMatrix([[1, 3, 5]], 5)).toBe(true);
    // });
    // it("search [n][1] matrix", () => {
    //     arr = [[1], [2], [3], [4], [5], [6]];

    //     expect(searchMatrix(arr, 4)).toBe(true);
    //     expect(searchMatrix(arr, 7)).toBe(false);
    // });
    // it("search 5  in  [[1, 3, 5]] matrix ", () => {
    //     expect(searchMatrix([[1, 3, 5]], 5)).toBe(true);
    // });

    // it("search 1  in  [[1, 3, 4,5]] matrix ", () => {
    //     arr = [[1, 2, 3, 4, 5]];
    //     expect(searchMatrix(arr, 1)).toBe(true);
    // });

    // it("search 2  in  [[1,4],[2,5]] matrix ", () => {
    //     arr = [
    //         [1, 4],
    //         [2, 5],
    //     ];
    //     expect(searchMatrix(arr, 2)).toBe(true);
    // });

    it("search 5  in  [[1,2,3,4,5],[6,7,8,9,10],[11,12,13,14,15],[16,17,18,19,20],[21,22,23,24,25]] matrix ", () => {
        arr = [
            [3, 3, 8, 13, 13, 18],
            [4, 5, 11, 13, 18, 20],
            [9, 9, 14, 15, 23, 23],
            [13, 18, 22, 22, 25, 27],
            [18, 22, 23, 28, 30, 33],
            [21, 25, 28, 30, 35, 35],
            [24, 25, 33, 36, 37, 40],
        ];
        expect(searchMatrix(arr, 21)).toBe(true);
    });
});
