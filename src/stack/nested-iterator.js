/**
 * 扁平化嵌套列表迭代器
 * 
 * 给你一个嵌套的整型列表。请你设计一个迭代器，使其能够遍历这个整型列表中的所有整数。

列表中的每一项或者为一个整数，或者是另一个列表。其中列表的元素也可能是整数或是其他列表。

 

示例 1:

输入: [[1,1],2,[1,1]]
输出: [1,1,2,1,1]
解释: 通过重复调用 next 直到 hasNext 返回 false，next 返回的元素的顺序应该是: [1,1,2,1,1]。
示例 2:

输入: [1,[4,[6]]]
输出: [1,4,6]
解释: 通过重复调用 next 直到 hasNext 返回 false，next 返回的元素的顺序应该是: [1,4,6]。

链接：https://leetcode-cn.com/problems/flatten-nested-list-iterator
 */

/**
 * 方法一: 深度优先遍历
 *
 * 方法二: 栈
 *
 * 用一个栈来维护深度优先搜索时,从根节点到当前节点路径上的所有节点,
 *
 * 由于非叶子节点对应的时一个列表,我们在栈中存储的是指向列表当前遍历的元素的指针(下标)
 *
 * 每次向下搜索时,取出列表的当前指针指向的元素并将其入栈
 * 同时将该指针向后移动一位,如此反复直到找到一个整数.
 * 循环时若栈顶指针指向了列表末尾,则将其从栈顶弹出
 *
 * 复杂度分析
 * 1. 时间复杂度: 初始化和next为O(1), hasNext为均摊O(1)
 * 2. 空间复杂度: O(n). 最坏情况下嵌套的整型列表是一条链,我们需要一个O(n)大小的栈来存储链上的所有的元素
 *
 */
export class NestedIterator {
    constructor(nestedList) {
        this.stack = nestedList;
    }

    hasNext() {
        while (this.stack.length !== 0) {
            if (this.stack[0].isInteger()) {
                return true;
            } else {
                let cur = this.stack[0].getList();
                this.stack.shift();
                this.stack.unshift(...cur);
            }
        }
    }

    next() {
        return this.stack.shift().getInteger();
    }
}
