import { find132Pattern } from "./find-132-pattern";

describe("find-132-pattern", () => {
    it("should be false, when num=[1,2,3,4]", () => {
        expect(find132Pattern([1, 2, 3, 4])).toBe(false);
    });

    it("should be true, when num=[3,1,4,2]", () => {
        expect(find132Pattern([3, 1, 4, 2])).toBe(true);
    });

    it("should be true, when num=[-1,3,2,0]", () => {
        expect(find132Pattern([-1, 3, 2, 0])).toBe(true);
    });
});
