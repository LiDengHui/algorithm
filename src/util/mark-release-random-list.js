/**
 * 输入：head = [[7,null],[13,0],[11,4],[10,2],[1,0]]
 *
 * 表示复杂链表,第一个参数为链表的值,第二个值为链表的位置如,1 为链表1 号位置
 */

export function Node(val, next, random) {
    this.val = val;
    this.next = next;
    this.random = random;
}
export const markRandomList = (arrs) => {
    let head = null;
    let node = null;
    let map = {};
    for (let i = arrs.length - 1; i >= 0; i--) {
        head = new Node(arrs[i][0], null, arrs[i][1]);
        map[i] = head;
        head.next = node;
        node = head;
    }
    node = head;
    while (node) {
        node.random = map[node.random];
        node = node.next;
    }

    return head;
};
export const releaseRandomList = (head) => {
    const arrs = [];
    let node = head;
    let i = 0;
    let map = new WeakMap();
    while (node) {
        map.set(node, i);
        i++;
        node = node.next;
    }
    node = head;
    while (node) {
        const arr = [node.val];
        if (node.random) {
            arr.push(map.get(node.random));
        } else {
            arr.push(null);
        }
        arrs.push(arr);
        node = node.next;
        i++;
    }
    return arrs;
};
