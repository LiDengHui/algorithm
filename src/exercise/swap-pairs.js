/*
给定一个链表，两两交换其中相邻的节点，并返回交换后的链表。

你不能只是单纯的改变节点内部的值，而是需要实际的进行节点交换。
 
示例:

给定 1->2->3->4, 你应该返回 2->1->4->3.

*/

import { ListNode } from "@/util/list-node.js";
/**
 *
 * 1. 首先先弄一个不动的首节点,firstNode, 后面节点移动才不会受影响
 * 2. 以[1,2,3,4] 一开始交换 [1,2], 因此需要先存储[3,4] 稍后处理
 * 3. 存储后将 list 要处理的部分[1,2], 跟不处理的 [3, 4] 切开 (图下)
 * 切开的同时让 2 的 next 指向 1
 * 4. 将前一个节点 prev 的 next 节点指向 [2], 因为 2 的 next 已经指向 1, 因此这边已经完成
 * [1,2]-> [2,1]的步骤
 * 5. 接下来把存储的[3,4]链接到 1 后面,就可以继续处理 3,4 了
 * @param {ListNode} head
 * @return {ListNode}
 */

export const swapPairs = (head) => {
    const firstNode = new ListNode(-1);
    firstNode.next = head;
    // 1
    let current = head;
    // 0
    let pre = firstNode;
    let nextKeep;

    while (current && current.next) {
        // 存储 3->4;
        nextKeep = current.next.next;

        // 2->1,
        current.next.next = current;
        // -1 -> 2
        pre.next = current.next;
        // 1 -> 3
        current.next = nextKeep;

        pre = current;
        current = current.next;
    }
    return firstNode.next;
};
