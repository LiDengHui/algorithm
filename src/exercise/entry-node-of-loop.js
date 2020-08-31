/**
 * 给出一个链表,若其中包含环,请找出该链表的环的入口节点, 否则输出null
 *
 * 参考答案:
 *
 * 声明两个执政 p1 p2
 *
 * 1. 判断链表是否有环: p1 p2从头部出发,p1 走两步, p2 走一步,如果可以相遇,
 * 则环存在
 * 2. 从环内部某个节点开始计数,再回到此节点时得到链表的长度
 * 3. p1\p2 回到 head 节点,让 p1先走 length 步, 当 p2 和 p1 相遇时即为链表环的起点
 */

export function entryNodeOfLoop(pHead) {
    if (!pHead || !pHead.next) {
        return null;
    }

    let p1 = pHead.next;
    let p2 = pHead.next.next;

    // 判断是否有环
    while (p1 != p2) {
        if (p2 === null || p2.next === null) {
            return null;
        }

        p1 = p1.next;
        p2 = p2.next.next;
    }

    // 获取环的长度
    let temp = p1;
    let length = 1;
    p1 = p1.next;
    while (temp != p1) {
        p1 = p1.next;
        length++;
    }

    // 找公共节点
    p1 = p2 = pHead;

    while (length-- > 0) {
        p2 = p2.next;
    }

    while (p1 != p2) {
        p1 = p1.next;
        p2 = p2.next;
    }

    return p1;
}
