/*
给定一个由整数组成的非空数组所表示的非负整数，在该数的基础上加一。

最高位数字存放在数组的首位， 数组中每个元素只存储单个数字。

你可以假设除了整数 0 之外，这个整数不会以零开头。

示例 1:

输入: [1,2,3]
输出: [1,2,4]
解释: 输入数组表示数字 123。
示例 2:

输入: [4,3,2,1]
输出: [4,3,2,2]
解释: 输入数组表示数字 4321。

*/

/**
 * 数组最后一个数是个位数, 所以从后面开始读, 个位数 +1 后. 如果有进位,
 * 存储进位值, val = 0; 没有进位直接存储
 *
 * 2. 处理十位数, 如果各位数有进位, 十位数+1, 再判断 十位是否有进位
 *
 * 3. 重复上面动作,直到数据结束
 * @param {*} digits
 */
export const plusOne1 = (digits) => {
    let carry = 0;

    for (var i = digits.length - 1; i >= 0; i--) {
        digits[i] = digits[i] + carry;

        if (i == digits.length - 1) {
            digits[i] = digits[i] + 1;
        }

        if (digits[i] == 10) {
            digits[i] = 0;
            carry = 1;
        } else {
            carry = 0;
        }
    }

    if (carry == 1) {
        digits.unshift(carry);
    }
    return digits;
};

/**
 * 借助 ES10 BigInt 特征实现
 * @param {*} nums
 */
export const plusOne2 = (nums) => {
    let num = BigInt(nums.join(""));

    let string = String(num + 1n);

    let ary = string.split("");

    return ary.map((e) => Number(e));
};
