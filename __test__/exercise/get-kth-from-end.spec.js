import { makeListFromLinked } from "@/util/make-list-from-linked";
import { makeLinkedFromList } from "@/util/make-linked-from-list";
import { getKthFromEnd1, getKthFromEnd2 } from "@/exercise/get-kth-from-end";

describe("get-kth-form-end", () => {
    [getKthFromEnd1, getKthFromEnd2].forEach((getKthFromEnd) => {
        it("null", () => {
            let head = makeLinkedFromList([]);
            let link = getKthFromEnd(head, 1);
            let arr = makeListFromLinked(link);
            expect(arr).toEqual([]);
        });

        it("1,2,3", () => {
            let head = makeLinkedFromList([1, 2, 3]);
            let link = getKthFromEnd(head, 1);
            let arr = makeListFromLinked(link);
            expect(arr).toEqual([3]);
        });

        it("1,2,3,4,5", () => {
            let head = makeLinkedFromList([1, 2, 3, 4, 5]);
            let link = getKthFromEnd(head, 2);
            let arr = makeListFromLinked(link);
            expect(arr).toEqual([4, 5]);
        });
    });
});
