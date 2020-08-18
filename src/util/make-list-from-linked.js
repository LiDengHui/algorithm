// 链表转成数组
export function makeListFromLinked(head) {
    const arr = [];
    while (head) {
        arr.push(head.val);
        head = head.next;
    }
    return arr;
}
