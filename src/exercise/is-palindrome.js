/**
 * 判断一个整数是否是回文数。回文数是指正序（从左向右）和倒序（从右向左）读都是一样的整数。

示例 1:

输入: 121
输出: true
示例 2:

输入: -121
输出: false
解释: 从左向右读, 为 -121 。 从右向左读, 为 121- 。因此它不是一个回文数。
示例 3:

输入: 10
输出: false
解释: 从右向左读, 为 01 。因此它不是一个回文数。
 */
export const isPalindrome = function (x) {
    if (x < 0 || x > Math.pow(2, 32) - 1) {
        return false;
    }

    if (x < 10) return true;

    let num = x;

    let recNum = x % 10;
    x = parseInt(x / 10);

    while (x != 0) {
        recNum = recNum * 10;
        recNum = recNum + (x % 10);
        x = parseInt(x / 10);
    }

    return recNum === num;
};
