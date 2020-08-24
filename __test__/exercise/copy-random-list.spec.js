import { copyRandomList } from "@/exercise/copy-random-list.js";
import {
    markRandomList,
    releaseRandomList,
} from "@/util/mark-release-random-list";

describe("copyRandomList", () => {
    it("head = [[7,null],[13,0],[11,4],[10,2],[1,0]]", () => {
        const nums = [
            [7, null],
            [13, 0],
            [11, 4],
            [10, 2],
            [1, 0],
        ];
        const head = markRandomList(nums);
        const newHead = copyRandomList(head);
        expect(releaseRandomList(newHead)).toStrictEqual(nums);
    });

    it("head = [[1,1],[2,1]]", () => {
        const nums = [
            [1, 1],
            [2, 1],
        ];
        const head = markRandomList(nums);
        const newHead = copyRandomList(head);
        expect(releaseRandomList(newHead)).toStrictEqual(nums);
    });
    it("head = [[3,null],[3,0],[3,null]]", () => {
        const nums = [
            [3, null],
            [3, 0],
            [3, null],
        ];
        const head = markRandomList(nums);
        const newHead = copyRandomList(head);

        expect(releaseRandomList(newHead)).toStrictEqual(nums);
    });
});
