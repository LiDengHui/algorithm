import LinkedList from "@/linked-list/index.js";
describe("LinkedList", () => {
    const linkedList = new LinkedList();
    linkedList.insert("Conway", "head");
    linkedList.insert("Russellville", "Conway");
    linkedList.insert("Carlisle", "Russellville");
    linkedList.insert("Alma", "Carlisle");
    it("insert", () => {
        const last = linkedList.findLast();
        expect(linkedList.findLast().element).toBe("Alma");
    });
    it("remove", () => {
        linkedList.remove("Alma");
        expect(linkedList.findLast().element).toBe("Carlisle");
    });

    it("remove", () => {
        linkedList.remove("head");

        expect(linkedList.point.element).toBe("Conway");
    });
});
