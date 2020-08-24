import {
    markRandomList,
    releaseRandomList,
} from "@/util/mark-release-random-list";

describe("mark-release-random-list", () => {
    it("head = [[7,null],[13,0],[11,4],[10,2],[1,0]]", () => {
        const head = [
            [7, null],
            [13, 0],
            [11, 4],
            [10, 2],
            [1, 0],
        ];
        const lastHead = releaseRandomList(markRandomList(head));
        expect(lastHead).toStrictEqual(head);
    });

    it("head = [[1,1],[2,1]]", () => {
        const head = [
            [1, 1],
            [2, 1],
        ];
        const lastHead = releaseRandomList(markRandomList(head));
        expect(lastHead).toStrictEqual(head);
    });
    it("head = [[3,null],[3,0],[3,null]]", () => {
        const head = [
            [3, null],
            [3, 0],
            [3, null],
        ];
        const lastHead = releaseRandomList(markRandomList(head));
        expect(lastHead).toStrictEqual(head);
    });
});
