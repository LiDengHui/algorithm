import { convert2 as convert } from "./convert";

describe("convert", () => {
    it("should support 3 rows", () => {
        expect(convert("PAYPALISHIRING", 3)).toBe("PAHNAPLSIIGYIR");
    });

    it("should support 4 rows", () => {
        expect(convert("PAYPALISHIRING", 4)).toBe("PINALSIGYAHRPI");
    });

    it("should support the length of string less than num rows", () => {
        expect(convert("PAYPALISHIRING", 18)).toBe("PAYPALISHIRING");
    });

    it("should support num row is only one", () => {
        expect(convert("PAYPALISHIRING", 1)).toBe("PAYPALISHIRING");
    });
});
