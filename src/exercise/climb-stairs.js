/**
假设你正在爬楼梯。需要 n 阶你才能到达楼顶。

每次你可以爬 1 或 2 个台阶。你有多少种不同的方法可以爬到楼顶呢？

注意：给定 n 是一个正整数。

示例 1：

输入： 2
输出： 2
解释： 有两种方法可以爬到楼顶。
1.  1 阶 + 1 阶
2.  2 阶
示例 2：

输入： 3
输出： 3
解释： 有三种方法可以爬到楼顶。
1.  1 阶 + 1 阶 + 1 阶
2.  1 阶 + 2 阶
3.  2 阶 + 1 阶

 */
/**
 * 参考答案: 斐波拉契数列
 *
 * 1. n =1, result =1
 * 2. n = 2, result = 1 + 1 (爬 1 阶2 次+ 一次爬两阶)
 * 3. n = 3, result = 1 + 2 (前面两个 case 相加)
 * 4. n = 4, result = 3 + 2 (前面两个 case 相加)
 */
export const climbStairs = (n) => {
    if (n <= 1) {
        return 1;
    }
    let prev = 1;
    let cur = 1;
    for (var i = 2; i <= n; i++) {
        const temp = cur;
        cur = cur + prev;
        prev = temp;
    }
    return cur;
};
