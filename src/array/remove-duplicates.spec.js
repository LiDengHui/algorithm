import { removeDuplicates } from "./remove-duplicates";

describe("removeDuplicates", () => {
    it("should remove num over two number", () => {
        const arr = [1, 1, 1, 2, 2, 3];
        expect(removeDuplicates(arr)).toBe(5);
        expect(arr).toStrictEqual([1, 1, 2, 2, 3]);
    });

    it("should not remove any number", () => {
        const arr = [1, 1, 2, 2, 3];
        expect(removeDuplicates(arr)).toBe(5);
        expect(arr).toStrictEqual([1, 1, 2, 2, 3]);
    });

    it("should not do ant thing", () => {
        const arr = [1, 1];
        expect(removeDuplicates(arr)).toBe(2);
        expect(arr).toStrictEqual([1, 1]);
    });
});
