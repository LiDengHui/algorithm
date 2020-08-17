/**
 *
定义一个函数，输入一个链表的头节点，反转该链表并输出反转后链表的头节点。

 

示例:

输入: 1->2->3->4->5->NULL
输出: 5->4->3->2->1->NULL
 

限制：

0 <= 节点个数 <= 5000
 */

/**
 * 解法一: 借助栈
 * 借助栈的后入先出顺序,可以将顺序列表逆序,不过这不是原地反转
 *
 * 处理过程遍历链表,将节点val依次放入栈
 * 从栈中依次去除val,构造新的node节点,并连接节点
 * 时间复杂度O(N), 空间复杂度O(N),
 * @param {*} head
 */

export const reverseList1 = function (head) {
    if (!head) return head;
    let stack = [];
    let node = head;
    while (node) {
        stack.push(node.val);
        node = node.next;
    }
    let newHead = {
        val: stack.pop(),
        next: null,
    };

    node = newHead;
    while (stack.length) {
        node.next = {
            val: stack.pop(),
            next: null,
        };
        node = node.next;
    }
    return newHead;
};
/**
 * 解法二:
 * “原地反转”
 * 准备当前节点node, 和节点的前一个节点preNode,
 *
 * 保留当前节点的下一个节点
 * 将当前节点的next 指向前一个节点preNode,
 * 更新preNode为当前节点, 更新当前节点为第一步保留的下一节点
 * 判断当前节点是否是最后一个节点,如果不是,回到第一步;如果是,进入最后一步
 * 将当前节点的next指向前一个节点preNode
 *
 * 时间复杂度O(N),空间复杂度O(1),
 * @param {*} head
 */
export const reverseList2 = function (head) {
    if (!head) {
        return head;
    }
    let preNode = null;
    let node = head;

    while (node.next) {
        const nextNode = node.next;
        node.next = preNode;
        preNode = node;
        node = nextNode;
    }

    node.next = preNode;
    return node;
};

// 节点
export function ListNode(val) {
    this.val = val;
    this.next = null;
}

// 数组转成链表
export function makeLinkedFromList([one, ...arr]) {
    if (!one) {
        return;
    }
    let head = new ListNode(one);
    arr.reduce((arr, e) => {
        arr.next = new ListNode(e);
        return arr.next;
    }, head);
    return head;
}

// 链表转成数组
export function makeListFromLinked(head) {
    const arr = [];
    while (head) {
        arr.push(head.val);
        head = head.next;
    }
    return arr;
}
