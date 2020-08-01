import { numberOf1 } from "@/exercise/number-of-1";
describe("number of 1", () => {
    it("0", () => {
        expect(numberOf1(0)).toBe(0);
    });

    it("1", () => {
        expect(numberOf1(1)).toBe(1);
    });

    it("2", () => {
        expect(numberOf1(2)).toBe(1);
    });

    it("-1", () => {
        expect(numberOf1(-1)).toBe(32);
    });
});
