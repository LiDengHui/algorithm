/*
快乐数
编写一个算法来判断一个数 n 是不是快乐数。

「快乐数」定义为：对于一个正整数，每一次将该数替换为它每个位置上的数字的平方和，然后重复这个过程直到这个数变为 1，也可能是 无限循环 但始终变不到 1。如果 可以变为  1，那么这个数就是快乐数。

如果 n 是快乐数就返回 True ；不是，则返回 False 。

示例：

输入：19
输出：true
解释：
1^2 + 9^2 = 82
8^2 + 2^2 = 68
6^2 + 8^2 = 100
1^2 + 0^2 + 0^2 = 1
通过次数99,870提交次数164,599
*/

/**
 * 参考答案:
 *
 * 使用-个map存储计算过的数字, 如果目前的数字已经计算过,表示死循环,出现return false.
 * 持续计算直到1出现 true 或 死循环出现return false.
 *
 * 范例: 判断 4 是不是 Happy Number
 *
 * 4^2 = 16
 * 1^2 + 6 ^2 = 37
 * 3 ^2 + 7 ^2 = 58
 *
 * ....
 * ......... = 20
 * 2^2 + 0 = 4;
 *
 * 4 重复出现,因此进入死循环
 * @param {*} num
 */
export function isHappy(num) {
    const set = new Set();

    while (!set.has(num) && num != 1) {
        set.add(num);
        num = num
            .toString()
            .split("")
            .reduce((sum, e) => {
                return sum + e * e;
            }, 0);
    }
    return num === 1;
}
