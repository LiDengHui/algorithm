class Node {
    constructor(element) {
        this.element = element;
        this.next = null;
        this.previous = null;
    }
}

export default class LinkedList {
    constructor() {
        this.head = new Node("head");
        this.point = this.head;
        this.head.next = this.head;
        this.head.previous = this.head;
    }
    find(item) {
        let head = this.point;
        let currNode = this.point;
        while (currNode.element != item && currNode.next !== head) {
            currNode = currNode.next;
        }
        if (currNode.element === item) {
            this.point = currNode;
            return this.point;
        } else {
            return null;
        }
    }

    findLast() {
        this.point = this.head.previous;
        return this.point;
    }
    insert(element, item) {
        const newNode = new Node(element);
        const current = this.find(item);
        if (current) {
            newNode.next = current.next;
            newNode.previous = current;
            current.next = newNode;

            if (current === this.findLast()) {
                this.head.previous = newNode;
            }
        }
        this.point = newNode;
    }

    remove(item) {
        const currNode = this.find(item);
        if (currNode) {
            if (currNode === this.head) {
                this.head = currNode.next;
            }
            currNode.previous.next = currNode.next;
            currNode.next.previous = currNode.previous;
            this.point = currNode.next;
            currNode.next = null;
            currNode.previous = null;
        }
    }
}
