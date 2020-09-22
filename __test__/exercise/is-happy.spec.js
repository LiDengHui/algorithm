import { isHappy } from "@/exercise/is-happy";
describe("is-happy", () => {
    it("19 is a happy number", () => {
        expect(isHappy(19)).toBe(true);
    });

    it("4 is a not happy number", () => {
        expect(isHappy(4)).toBe(false);
    });
});
