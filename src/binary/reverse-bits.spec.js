import { reverseBits } from "./reverse-bits";

describe("reverse-bits", () => {
    it("should reverse n = 0b0000010100101000001111010011100", () => {
        const n = 0b0000010100101000001111010011100;
        const m = 0b0111001011110000010100101000000;
        expect(reverseBits(n)).toBe(m);
    });

    it("should reverse n = 11111111111111111111111111111101", () => {
        const n = 0b11111111111111111111111111111101;
        const m = 0b10111111111111111111111111111111;
        expect(reverseBits(n)).toBe(m);
    });
});
