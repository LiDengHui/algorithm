import { movingCount1, movingCount2 } from "@/exercise/moving-count";
describe("moving-count", () => {
    [movingCount1, movingCount2].forEach((movingCount) => {
        it("m = 2, n = 3, k = 1", () => {
            expect(movingCount(2, 3, 1)).toBe(3);
        });
        it("m = 3, n = 1, k = 0", () => {
            expect(movingCount(3, 1, 0)).toBe(1);
        });
    });
});
