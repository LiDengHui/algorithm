import { minNumber1, minNumber2 } from "@/exercise/min-number";
describe("minNumber", () => {
    [minNumber1, minNumber2].forEach((minNumber) => {
        it("[10,2]", () => {
            expect(minNumber(["10", "2"])).toBe("102");
        });

        it("[10,2,1]", () => {
            expect(minNumber(["10", "2", "1"])).toBe("1012");
        });
        it("[3,30,34,5,9]", () => {
            expect(minNumber([3, 30, 34, 5, 9])).toBe("3033459");
        });
    });
});
