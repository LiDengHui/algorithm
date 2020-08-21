import { makeListFromLinked } from "@/util/make-list-from-linked";
import { makeLinkedFromList } from "@/util/make-linked-from-list";
import { linkedConcat } from "@/util/linked-concat";
import { getIntersectionNode } from "@/exercise/get-intersession-node";

describe("getIntersection", () => {
    it("a = [a1,a2,c1,c2,c3], b = [b1,b2,b3,c1,c2,c3]", () => {
        const headC = makeLinkedFromList(["c1", "c2", "c3"]);
        const headA = makeLinkedFromList(["a1", "a2"]);
        linkedConcat(headA, headC);
        const headB = makeLinkedFromList(["b1", "b2", "b3"]);
        linkedConcat(headB, headC);

        const head = getIntersectionNode(headA, headB);
        expect(head).toBe(headC);
    });
});
