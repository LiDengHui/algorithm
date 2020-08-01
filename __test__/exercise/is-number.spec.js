import { isNumber } from "@/exercise/is-number";
describe("is number", () => {
    it("1", () => {
        expect(isNumber("1")).toBe(true);
    });

    it("1.", () => {
        expect(isNumber("1.")).toBe(true);
    });

    it("1.1", () => {
        expect(isNumber("1.1")).toBe(true);
    });

    it("1.1e1", () => {
        expect(isNumber("1.1e1")).toBe(true);
    });

    it("1.1e1.1", () => {
        expect(isNumber("1.1e1.1")).toBe(false);
    });
});
