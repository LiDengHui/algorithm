import { isIsomorphic } from "@/exercise/is-isomorphic";

describe("is-Isomorphic", () => {
    it("egg和add是同构字符串", () => {
        expect(isIsomorphic("egg", "add")).toBeTruthy();
    });

    it("foo 和 bar 不是同构字符串", () => {
        expect(isIsomorphic("foo", "bar")).toBeFalsy();
    });

    it("paper 和 title 是同构字符串", () => {
        expect(isIsomorphic("paper", "title")).toBeTruthy();
    });
});
