export function linkedConcat(headA, headB) {
    let node = headA;
    while (node.next) {
        node = node.next;
    }
    node.next = headB;
}
