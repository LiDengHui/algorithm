/*
 *
 
 输入两个链表，找出它们的第一个公共节点。

 注意: 
 如果两个链表没有交点, 返回 null
 在返回结果后,两个链表仍要保持原有结构
 可假定整个链表结构中没有循环
 程序尽量满足 O(N)时间复杂度,仅且用 O(1) 内存
 */

/**
 * 参考答案:
 *
 * 遍历得到两个链表长度, 以及长度差 diff
 * 将快慢指针 slow 指向较长的链表, 快指针 fast 指向较短的链表
 * slow 向前移动 diff 个距离
 * slow 和 fast 同时向前移动, 每次移动一个距离, 如果存在公共节点,那么他们就会遇到
 *
 * 时间复杂度 O(N), 空间复杂度 O(1)
 * @param {*} headA
 * @param {*} headB
 */

export const getInterSessionNode = function (headA, headB) {
    let node = headA;
    let lengthA = 0;

    while (node) {
        ++lengthA;
        node = node.next;
    }

    if (!lengthA) return null;

    node = headB;

    let lengthB = 0;

    while (node) {
        ++lengthB;
        node = node.next;
    }

    if (!lengthB) return null;

    let diff = 0,
        slow,
        fast;

    if (lengthA > lengthB) {
        slow = headA;
        fast = headB;
        diff = lengthA - lengthB;
    } else {
        slow = headB;
        fast = headA;
        diff = lengthB - lengthA;
    }

    while (diff--) {
        slow = slow.next;
    }

    while (slow !== fast) {
        slow = slow.next;
        fast = fast.next;
    }
    return slow;
};
