import { CQueue } from "@/exercise/c-queue";

describe("CQueue", () => {
    it("test1", () => {
        const cqueue = new CQueue();
        cqueue.appendTail(3);

        expect(cqueue.deleteHead()).toBe(3);
        expect(cqueue.deleteHead()).toBe(-1);
    });

    it("test2", () => {
        const cqueue = new CQueue();

        expect(cqueue.deleteHead()).toBe(-1);

        cqueue.appendTail(5);
        cqueue.appendTail(2);
        expect(cqueue.deleteHead()).toBe(5);
        expect(cqueue.deleteHead()).toBe(2);
    });
});
