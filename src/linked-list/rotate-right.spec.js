import { rotateRight } from "./rotate-right";
import { makeLinkedFromList } from "../util/make-linked-from-list";
import { makeListFromLinked } from "../util/make-list-from-linked";
describe("rotate-right", () => {
    it("should not change, then rotate k equal 0", () => {
        const arr = [1, 2, 3, 4, 5];
        const head = makeLinkedFromList(arr);
        const result = rotateRight(head, 0);
        const list = makeListFromLinked(result);
        expect(list).toStrictEqual([1, 2, 3, 4, 5]);
    });

    it("should support length of head more than k", () => {
        const arr = [1, 2, 3, 4, 5];
        const head = makeLinkedFromList(arr);
        const result = rotateRight(head, 2);
        const list = makeListFromLinked(result);
        expect(list).toStrictEqual([4, 5, 1, 2, 3]);
    });

    it("should support length of head less than k", () => {
        const arr = [0, 1, 2];
        const head = makeLinkedFromList(arr);
        const result = rotateRight(head, 4);
        const list = makeListFromLinked(result);
        expect(list).toStrictEqual([2, 0, 1]);
    });
});
