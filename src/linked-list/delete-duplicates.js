/**
 * 存在一个按升序排列的链表，给你这个链表的头节点 head ，请你删除链表中所有存在数字重复情况的节点，只保留原始链表中 没有重复出现 的数字。

返回同样按升序排列的结果链表。

示例 1：


输入：head = [1,2,3,3,4,4,5]
输出：[1,2,5]
示例 2：


输入：head = [1,1,1,2,3]
输出：[2,3]


链接：https://leetcode-cn.com/problems/remove-duplicates-from-sorted-list-ii
 * @param {*} head 
 */

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
function ListNode(val, next) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
}
/**
 * 方法一: 一次遍历
 *
 * 思路:
 *  由于给定的链表是排序好的,因此重复的元素在链表中出现的位置是连续的,因此我们只需要对链表进行一次遍历,
 * 就可以删除重复的元素,由于链表的头节点可能会删除,因此我们需要额外使用一个哑节点 dummy node 指向链表的头节点
 *
 * 具体的恶,我们从指针cur指向链表的哑节点,随后开始对链表进行遍历.如果当前cur.next与cur.next.next对应的恶元素相同,
 * 那幕我们就需要删除cur.next以及所有后面拥有相同元素值的链表接节点全部删除.我们记下这俄格元素值x,随后不断将cur.next 从链表中移除,直到cur.next 为空
 * 节点或者其元素值不等于x为止, 此时我们将链表中所有的元素值为x的节点全部删除
 *
 * 如果当前cur.next 与cur.next.next 对应的元素不相同, 那么说名链表中只有一个元素值为cur.next 的节点的,那幕我们就可以将cur指向cur.next.next
 * 当遍历完整个链表后.我们返回链币的哑节点的下一个节点 dummy.next即可
 * @param {*} head
 * @returns
 */
export function deleteDuplicates(head) {
    const start = new ListNode(0, head);

    let current = start;
    while (current.next && current.next.next) {
        if (current.next.val === current.next.next.val) {
            const val = current.next.val;
            while (current.next && current.next.val === val) {
                current.next = current.next.next;
            }
        } else {
            current = current.next;
        }
    }
    return start.next;
}
