import { fibonacci1, fibonacci2, fibonacci3 } from "@/exercise/fibonacci.js";

describe("Fibonacci", () => {
    [fibonacci1, fibonacci2, fibonacci3].forEach((fn, i) => {
        describe(`fibonacci${i}`, () => {
            it("n=9", () => {
                expect(fn(0)).toBe(0);
            });

            it("n=1", () => {
                expect(fn(1)).toBe(1);
            });

            it("n =2", () => {
                expect(fn(2)).toBe(1);
            });

            it("n = 5", () => {
                expect(fn(5)).toBe(5);
            });

            it("n = 10", () => {
                expect(fn(19)).toBe(4181);
            });
        });
    });
});
