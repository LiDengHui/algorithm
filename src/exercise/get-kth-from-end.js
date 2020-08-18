/**
 * 
输入一个链表，输出该链表中倒数第k个节点。为了符合大多数人的习惯，本题从1开始计数，即链表的尾节点是倒数第1个节点。例如，一个链表有6个节点，从头节点开始，它们的值依次是1、2、3、4、5、6。这个链表的倒数第3个节点是值为4的节点。

 

示例：

给定一个链表: 1->2->3->4->5, 和 k = 2.

返回链表 4->5.

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/lian-biao-zhong-dao-shu-di-kge-jie-dian-lcof
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
 */

/**
 * 解法一: 两次循环
 *
 * 因为要求链表倒数第K个节点,也就是求数第length - k 个节点, 整体过程如下
 *
 * 链表是单链表, 并且没有保存长度信息,所以需要循环一次计算length
 * 二次循环找到第length - k 个节点
 * 时间复杂度O(N), 需要两次循环
 * @param {*} head
 * @param {*} k
 */
export const getKthFromEnd1 = function (head, k) {
    let length = 0;
    let node = head;
    while (node) {
        ++length;
        node = node.next;
    }

    if (k > length) {
        return null;
    }
    node = head;
    let offset = length - k;
    for (let i = 0; i < offset; ++i) {
        node = node.next;
    }
    return node;
};

/**
 * 解法2: 快慢双指针
 *
 * 准备两个指针: left(慢) 和right(快),整体过程如下
 *
 * right先向由移动k为, 此时index(right) - index(left) = k;
 *
 * left和right 一起向右移动,直到right抵达边界
 * 由于index(right) - index(left) = k,所以
 * index(right) = index(rihgt) -k = length -k
 * 也就是说left指针移动到了倒数第k个位置
 * 时间复杂度O(N),但仅需遍历一次,空间复杂度O(1)
 * @param {*} head
 * @param {*} k
 */
export const getKthFromEnd2 = function (head, k) {
    let right = head;
    for (let i = 0; i < k; ++i) {
        if (!right) {
            return null;
        }
        right = right.next;
    }
    let left = head;
    while (right) {
        left = left.next;
        right = right.next;
    }

    return left;
};
