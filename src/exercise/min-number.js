/**
剑指 Offer 45. 把数组组成最小的数
输入一个非负整数数组，把数组里所有数字拼接起来排成一个数，打印能拼接出的所有数字中最小的一个。

 

示例 1:

输入: [10,2]
输出: "102"
示例 2:

输入: [3,30,34,5,9]
输出: "3033459"
 

提示:

0 < nums.length <= 100
说明:

输出结果可能非常大，所以你需要返回一个字符串而不是整数
拼接起来的数字可能会有前导 0，最后结果不需要去掉前导 0
 */

/**
 * 方法1: 暴力法
 * 通过回溯得到的可能的排列结果,然后从其中挑选最小的数字
 * @param {*} nums
 */

export function minNumber1(nums) {
    const result = [];
    permutation(nums, 0, result);
    result.sort((a, b) => {
        if (a < b) return -1;
        if (a > b) return 1;
        return 0;
    });

    return result[0];
}

function permutation(nums, start, result) {
    if (start === nums.length) {
        result.push(nums.join(""));
    }
    for (let i = start; i < nums.length; ++i) {
        [nums[i], nums[start]] = [nums[start], nums[i]];
        permutation(nums, start + 1, result);
        [nums[start], nums[i]] = [nums[i], nums[start]];
    }
}

/**
 * 方法2: 快速排序
 * 使用快速排序,可以将数字放在正确的位置上,从而满足题目要求,例如对于数组 [3,32] 来说,他有两种排列方式: 332, 323.显然 323 符合题目的要求,那么在排序的过程中,就应该比较332和323,然后返回正确的顺序
 *
 * 在js中, 可以通过自定义的排序依据,作为函数传入 sort 中,
 *
 * 如果 a + b < b + a ,说明 ab 比 ba 小,a 就应该在 b 的前面,返回-1
 * 如果 a + b > b + a, 说名 ab 比 ba大, b 就应该在 a 的前面,返回1
 * 如果 相等就返回 0
 *
 * @param {*} nums
 */
export function minNumber2(nums) {
    nums.sort((a, b) => {
        const s1 = a + "" + b;
        const s2 = b + "" + a;

        if (s1 < s2) return -1;
        if (s2 > s1) return 1;
        return 0;
    });

    return nums.join("");
}
