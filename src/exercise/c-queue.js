/**
用两个栈实现一个队列。
队列的声明如下，请实现它的两个函数 appendTail 和 deleteHead ，分别完成在队列尾部插入整数和在队列头部删除整数的功能。(若队列中没有元素，deleteHead 操作返回 -1 )
 

示例 1：

输入：
["CQueue","appendTail","deleteHead","deleteHead"]
[[],[3],[],[]]
输出：[null,null,3,-1]
示例 2：

输入：
["CQueue","deleteHead","appendTail","appendTail","deleteHead","deleteHead"]
[[],[],[5],[2],[],[]]
输出：[null,-1,null,null,5,2]
提示：

1 <= values <= 10000
最多会对 appendTail、deleteHead 进行 10000 次调用

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/yong-liang-ge-zhan-shi-xian-dui-lie-lcof
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
 */

/**
 * 参考答案
 *
 * 栈的特性是: 后入先出,根据题目提示,使用两个栈即可,一个栈inStack用来存储插入队列的数据,一个栈outStack用来从队列中取出数据
 *
 * 算法分入队和出队过程
 *
 * 入队过程: 将元素放入inStack中
 *
 * 出对过程:
 * outStack 不为空,弹出元素
 * outStack 为空, 将inStack元素依次弹出,放入到outStakc中(在数据转移过程中,顺序已经从后入先出变成了先入先出)
 * 时间复杂度O(N),空间复杂度O(N)
 */

export var CQueue = function () {
    this.inStack = [];
    this.outStack = [];
};

CQueue.prototype.appendTail = function (value) {
    this.inStack.push(value);
};

CQueue.prototype.deleteHead = function () {
    const { inStack, outStack } = this;

    if (outStack.length) {
        return outStack.pop();
    } else {
        while (inStack.length) {
            outStack.push(inStack.pop());
        }
        return outStack.pop() || -1;
    }
};

/**
 * 拓展思考: 用两队列实现一个栈
 *
 * 类似的,用两个队列也可以实现一个栈,但由于队列是先入后出,无论怎么倒换,都不可能逆序队列,
 *
 * 入栈过程
 *
 * q1 为空,放入q2
 * q2 为空, 放入q1
 * 均为空,默认放入q1
 * 出栈过程:
 * q1 为空:
 * 依次取出 q2中的元素(除了最后一个),并且放入q1中,
 * 取出q2中的最后一个元素返回结果
 * q2 为空:
 * 依次取出q1中的元素(除最后一个),并放入q2中
 * 取出q1中的最后一个元素,返回结果
 * 时间复杂度O(N), 空间复杂度O(N)
 */
