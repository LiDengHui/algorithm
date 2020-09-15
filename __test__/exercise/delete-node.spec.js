import { deleteNode } from "@/exercise/delete-node";
import { makeListFromLinked } from "@/util/make-list-from-linked";
import { makeLinkedFromList } from "@/util/make-linked-from-list";
describe("delete-node", () => {
    it("head = [4,5,1,9], node = 5, return [4,1,9]", () => {
        const nums = [4, 5, 1, 9];
        const head = makeLinkedFromList(nums);
        const node = head.next;

        deleteNode(node);
        const nums2 = makeListFromLinked(head);
        expect(nums2).toStrictEqual([4, 1, 9]);
    });
});
