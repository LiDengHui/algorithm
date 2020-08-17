import {
    reverseList1,
    reverseList2,
    makeListFromLinked,
    makeLinkedFromList,
} from "@/exercise/reverse-linked-list";

describe("reverse linked list", () => {
    [reverseList1, reverseList2].forEach((reverseList) => {
        it("null", () => {
            let head = makeLinkedFromList([]);
            let reverseLinked = reverseList(head);
            let arr = makeListFromLinked(reverseLinked);
            expect(arr).toEqual([]);
        });

        it("1,2,3", () => {
            let head = makeLinkedFromList([1, 2, 3]);
            let reverseLinked = reverseList(head);
            let arr = makeListFromLinked(reverseLinked);
            expect(arr).toEqual([3, 2, 1]);
        });

        it("1,2,3,4,5", () => {
            let head = makeLinkedFromList([1, 2, 3, 4, 5]);
            let reverseLinked = reverseList(head);
            let arr = makeListFromLinked(reverseLinked);
            expect(arr).toEqual([5, 4, 3, 2, 1]);
        });
    });
});
