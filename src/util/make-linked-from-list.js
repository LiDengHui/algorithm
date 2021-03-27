import { ListNode } from "./list-node.js";
// 数组转成链表
export function makeLinkedFromList([one, ...arr]) {
    if (one == null) {
        return;
    }
    let head = new ListNode(one);
    arr.reduce((arr, e) => {
        arr.next = new ListNode(e);
        return arr.next;
    }, head);
    return head;
}
