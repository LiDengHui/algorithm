/**
 * 题目:旋转链表
 * 给你一个链表的头节点 head ，旋转链表，将链表每个节点向右移动 k 个位置。

 

示例 1：

输入：head = [1,2,3,4,5], k = 2
输出：[4,5,1,2,3]
示例 2：

输入：head = [0,1,2], k = 4
输出：[2,0,1]
 
提示：
链表中节点的数目在范围 [0, 500] 内
-100 <= Node.val <= 100
0 <= k <= 2 * 109

链接：https://leetcode-cn.com/problems/rotate-list
 *
 */

/**
 * 方法一: 闭合为环
 *
 * 思路及算法
 *
 * 记给定链表的长度为n, 注意到当向右移的次数 k>=n时, 我们仅需要向右移动 k mod n次即可,
 * 因为每n次移动都会让链表变为原始状态.这样我们可以知道,新链表的最后一个节点为原链表的第(n-1)-(k mod n)
 * 个节点(从0开始计数)
 *
 * 这样,我们可以先将给定的链表连接成环, 然后将指定位置断开
 *
 * 具体代码中, 我们首先要计算出链表的长度n, 并找到该链表的末尾节点, 将其与头节点相连, 这样就得到了闭合为环的链表
 * 然后我们找到新链表的最后一个节点(即原链表的第(n-1)-(k mod n)个节点), 将当前闭合为环的链表断开,即可得到我们
 * 所需要的结果
 * 特别的,当链表长度不大于1, 或者k 为 n 的倍数时,新链表将与原链表相同, 我们无需任何处理
 * @param {*} head
 * @param {*} k
 * @returns
 */
export function rotateRight(head, k) {
    if (k === 0) return head;

    let cur = head;
    let n = 1;

    while (cur.next) {
        cur = cur.next;
        n++;
    }

    let add = n - (k % n);

    if (add === n) {
        return head;
    }
    cur.next = head;

    while (add) {
        cur = cur.next;
        add--;
    }

    const ret = cur.next;
    cur.next = null;
    return ret;
}
