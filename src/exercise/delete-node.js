/*
实现一种算法，删除单向链表中间的某个节点（即不是第一个或最后一个节点），假定你只能访问该节点。

 

示例：

输入：单向链表a->b->c->d->e->f中的节点c
结果：不返回任何数据，但该链表变为a->b->d->e->f

*/
/**
 * 参考答案:
 *
 * 每个节点(Node) 有两个属性, 值 val 与下一个节点(next), 删除节点
 * 其实就是让连接的 val 与 next,都跳过当前的节点指向下一个节点
 * @param {*} node
 */
export const deleteNode = (node) => {
    node.val = node.next.val;
    node.next = node.next.next;
};
