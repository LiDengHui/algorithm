import { mergeTwoLists } from "@/exercise/merge-two-lists";
import { makeLinkedFromList } from "@/util/make-linked-from-list";
import { makeListFromLinked } from "@/util/make-list-from-linked";

describe("merge-two-lists", () => {
    it("1->2->4, 1->3->4", () => {
        let p1 = [1, 2, 4];
        let p2 = [1, 3, 4];
        let p1Head = makeLinkedFromList(p1);
        let p2Head = makeLinkedFromList(p2);

        let head = mergeTwoLists(p1Head, p2Head);

        expect(makeListFromLinked(head)).toStrictEqual([1, 1, 2, 3, 4, 4]);
    });
});
