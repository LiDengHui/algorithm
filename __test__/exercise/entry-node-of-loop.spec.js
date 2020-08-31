import { entryNodeOfLoop } from "@/exercise/entry-node-of-loop";
import { makeLoopLinkedFromList } from "@/util/make-loop-linked-from-list.js";

describe("entry-node-of-loop", () => {
    it("head = [3,2,0,-4], pos = 1", () => {
        let head = makeLoopLinkedFromList([3, 2, 0, -4], 1);

        head = entryNodeOfLoop(head);
        expect(head.val).toBe(2);
    });
    it("head = [1,2], pos = 0", () => {
        let head = makeLoopLinkedFromList([1, 2], 0);

        head = entryNodeOfLoop(head);
        expect(head.val).toBe(1);
    });

    it("head = [1], pos = -1", () => {
        let head = makeLoopLinkedFromList([1], -1);

        head = entryNodeOfLoop(head);
        expect(head).toBe(null);
    });

    it("head = [1 ,2], pos = -1", () => {
        let head = makeLoopLinkedFromList([1, 2], -1);

        head = entryNodeOfLoop(head);
        expect(head).toBe(null);
    });
});
