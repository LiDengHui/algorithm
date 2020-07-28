import Queue from "@/queue/index.js";

describe("Queue", () => {
    it("enqueue", () => {
        const queue = new Queue();
        queue.enqueue(1);
        queue.enqueue(2);
        expect(queue.toString()).toEqual("1,2");
        expect(queue.length()).toBe(2);
    });

    it("dequeue", () => {
        const queue = new Queue();
        queue.enqueue(1);
        queue.enqueue(2);
        expect(queue.dequeue()).toBe(1);
        expect(queue.length()).toBe(1);
    });

    it("front", () => {
        const queue = new Queue();
        queue.enqueue(1);
        queue.enqueue(2);

        expect(queue.front()).toBe(1);
        expect(queue.length()).toBe(2);
    });

    it("back", () => {
        const queue = new Queue();
        queue.enqueue(1);
        queue.enqueue(2);

        expect(queue.back()).toBe(2);
        expect(queue.length()).toBe(2);
    });

    it("empty", () => {
        const queue = new Queue();

        expect(queue.empty()).toBeTruthy();
    });
});
