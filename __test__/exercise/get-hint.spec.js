import { getHint } from "@/exercise/get-hint";
describe("getHint", () => {
    it(`secret = "1807", guess = "7810", result ="1A3B" `, () => {
        const secret = "1807";
        const guess = "7810";

        expect(getHint(secret, guess)).toBe("1A3B");
    });

    it(`secret = "1123", guess = "0111", result="1A1B" `, () => {
        const secret = "1123";
        const guess = "0111";

        expect(getHint(secret, guess)).toBe("1A1B");
    });
});
