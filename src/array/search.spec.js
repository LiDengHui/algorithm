import { search } from "./search";

describe("search", () => {
    it("should return true", () => {
        const arr = [2, 5, 6, 0, 0, 1, 2];
        expect(search(arr, 0)).toBe(true);
    });

    it("should return false", () => {
        const arr = [2, 5, 6, 0, 0, 1, 2];
        expect(search(arr, 3)).toBe(false);
    });
});
