import { mulBase } from "@/stack/example/mulBase.js";
describe("数值进制转换", () => {
    it("32 to 2 equal 100000", () => {
        expect(mulBase(32, 2)).toBe("100000");
    });

    it("125 to 8 equal 175", () => {
        expect(mulBase(125, 8)).toBe("175");
    });
});
