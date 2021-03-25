import { deleteDuplicates } from "./delete-duplicates";
import { makeLinkedFromList } from "../util/make-linked-from-list";
import { makeListFromLinked } from "../util/make-list-from-linked";
describe("delete-duplicates", () => {
    it("should not delete any number", () => {
        const head = [1, 2, 3, 4, 5];
        const start = deleteDuplicates(makeLinkedFromList(head));
        const arr = makeListFromLinked(start);
        expect(arr).toStrictEqual([1, 2, 3, 4, 5]);
    });
    it("should test delete middle number", () => {
        const head = [1, 2, 3, 3, 4, 4, 5];
        const start = deleteDuplicates(makeLinkedFromList(head));
        const arr = makeListFromLinked(start);
        expect(arr).toStrictEqual([1, 2, 5]);
    });
    it("should test header number", () => {
        const head = [1, 1, 1, 2, 3];
        const start = deleteDuplicates(makeLinkedFromList(head));
        const arr = makeListFromLinked(start);
        expect(arr).toStrictEqual([2, 3]);
    });

    it("should delete all number", () => {
        const head = [1, 1, 1];
        const start = deleteDuplicates(makeLinkedFromList(head));
        const arr = makeListFromLinked(start);
        expect(arr).toStrictEqual([]);
    });
});
