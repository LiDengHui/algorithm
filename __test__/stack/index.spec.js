import Stack from "@/stack/index.js";

describe("Stack", () => {
    it("push", () => {
        const stack = new Stack();
        stack.push(1);
        expect(stack.length()).toEqual(1);
    });

    it("peek", () => {
        const stack = new Stack();
        stack.push(1);
        expect(stack.peek()).toEqual(1);
        expect(stack.length()).toEqual(1);
    });

    it("pop", () => {
        const stack = new Stack();
        stack.push(1);
        expect(stack.pop()).toEqual(1);
        expect(stack.length()).toEqual(0);
    });

    it("clear", () => {
        const stack = new Stack();
        stack.push(1);
        stack.push(2);
        stack.clear();
        expect(stack.length()).toEqual(0);
    });
});
