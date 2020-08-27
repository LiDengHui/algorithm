/**
 *输入一个正整数 target ，输出所有和为 target 的连续正整数序列（至少含有两个数）。

序列内的数字由小到大排列，不同序列按照首个数字从小到大排列。

 

示例 1：

输入：target = 9
输出：[[2,3,4],[4,5]]
示例 2：

输入：target = 15
输出：[[1,2,3,4,5],[4,5,6],[7,8]]

 * @param {*} target
 */

/**
 * 参考答案:
 * "双指针思路"
 *
 * 1. 指针是从 第 0 个和 第 1 个位置开始的, 即 (a, b)
 * 2. 这里要计算指针范围内的所有元素和
 * 3. 每次移动 a, b 之前, 都要计算一下 当前[a , b]范围内的所有元素和,
 *     如果等于 s, 打印并且 b 右移;
 *     如果小于 s, b 右移;
 *     如果大于 s, a 右移;
 *
 * @param {*} target
 */
export const findContinuousSequence = function (target) {
    let a = 1;
    let b = 2;

    let sum = a + b;
    const res = [];

    while (a !== b && b <= target) {
        if (sum === target) {
            res.push(getSubSequence(a, b));
            ++b;
            sum += b;
        } else if (sum < target) {
            ++b;
            sum += b;
        } else {
            sum -= a; // a向右移和减少
            ++a;
        }
    }
    return res;
};

export function getSubSequence(start, end) {
    const res = [];
    for (let i = start; i <= end; i++) {
        res.push(i);
    }
    return res;
}
