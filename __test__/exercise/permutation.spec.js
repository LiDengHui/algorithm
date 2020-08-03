import { permutation, permutation1 } from "@/exercise/permutation";

describe("permutation", () => {
    it("空", () => {
        expect(permutation("")).toEqual([]);
    });

    it("abc", () => {
        expect(permutation("abc")).toEqual([
            "abc",
            "acb",
            "bac",
            "bca",
            "cab",
            "cba",
        ]);
    });

    it("aab", () => {
        expect(permutation("aab")).toEqual(["aab", "aba", "baa"]);
    });
});

describe("permutation1", () => {
    it("空", () => {
        expect(permutation1("")).toEqual([]);
    });

    it("abc", () => {
        expect(permutation1("abc")).toEqual([
            "abc",
            "acb",
            "bac",
            "bca",
            "cab",
            "cba",
        ]);
    });

    it("aab", () => {
        expect(permutation1("aab")).toEqual(["aab", "aba", "baa"]);
    });
});
