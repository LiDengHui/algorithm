import { swapPairs } from "@/exercise/swap-pairs.js";
import { makeListFromLinked } from "@/util/make-list-from-linked";
import { makeLinkedFromList } from "@/util/make-linked-from-list";
describe("swap pairs", () => {
    it("给定 1->2->3->4, 你应该返回 2->1->4->3", () => {
        const head = makeLinkedFromList([1, 2, 3, 4]);

        const swapHead = swapPairs(head);

        expect(makeListFromLinked(swapHead)).toStrictEqual([2, 1, 4, 3]);
    });
});
