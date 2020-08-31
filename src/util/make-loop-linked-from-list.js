import { ListNode } from "./list-node.js";
// 数组转成链表
export function makeLoopLinkedFromList([one, ...arr], pos) {
    if (!one) {
        return;
    }
    let head = new ListNode(one);

    let tail = head;
    arr.reduce((arr, e) => {
        tail = new ListNode(e);
        arr.next = tail;
        return arr.next;
    }, head);

    if (pos < 0) {
        return head;
    }
    let node = head;
    for (let i = 0; i < pos; i++) {
        node = node.next;
    }
    tail.next = node;

    return head;
}
