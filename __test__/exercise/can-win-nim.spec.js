import { canWinNim } from "@/exercise/can-win-nim";

describe("can-win-nim", () => {
    it("storn less 4 , can win", () => {
        expect(canWinNim(1)).toBe(true);
        expect(canWinNim(3)).toBe(true);
    });

    it("storn equal 4 , can fail", () => {
        expect(canWinNim(4)).toBe(false);
    });

    it("storn more than", () => {
        expect(canWinNim(9)).toBe(true);
        expect(canWinNim(8)).toBe(false);
    });
});
