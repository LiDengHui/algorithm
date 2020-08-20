/**
输入一个整数数组，实现一个函数来调整该数组中数字的顺序，使得所有奇数位于数组的前半部分，所有偶数位于数组的后半部分。

 

示例：

输入：nums = [1,2,3,4]
输出：[1,3,2,4] 
注：[3,1,2,4] 也是正确的答案之一。
 

提示：

1 <= nums.length <= 50000
1 <= nums[i] <= 10000
通过次数52,136提交次数81,015

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/diao-zheng-shu-zu-shun-xu-shi-qi-shu-wei-yu-ou-shu-qian-mian-lcof
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
 */

/**
 * 解法一: 开辟新空间
 * 此过程需要循环 2 次,时间复杂度 O(N), 空间复杂度 O(N), 过程如下
 *
 * 第一次循环一次找到偶数和奇数,并且将其分别存储到新开辟的空间中
 * 第二次循环将存放奇数和偶数的空间`链接`在一起
 *
 * @param {*} nums
 */
export const exchange1 = function (nums) {
    const arr = [];
    const brr = [];
    nums.forEach((e) => {
        e % 2 ? arr.push(e) : brr.push(e);
    });

    return arr.concat(brr);
};

/**
 * 解法二: 双指针交换
 * 可以利用`双指针`,分别是指向数组的头部的指针 i, 与指向数组尾部的指针 j.
 * 过程如下:
 * i 向右移动, 直到遇到偶数; j 向左移动,直到遇到奇数
 * 检查 i 是否小于 j, 若小于, 交换 i 和 j 的元素, 回到上一步骤继续移动; 否则结束
 * 循环时间复杂度 O(N), 空间复杂度 O(1), 代码如下
 * @param {*} nums
 */
export const exchange2 = function (nums) {
    const length = nums.length;
    if (!length) return [];

    let i = 0,
        j = length - 1;

    while (i < j) {
        while (i < length && nums[i] % 2) i++;
        while (j > i && nums[j] % 2 === 0) j--;

        if (i < j) {
            [nums[i], nums[j]] = [nums[j], nums[i]];
            i++;
            j--;
        }
    }

    return nums;
};
/**
 * 拓展思考: 基于插入排序思路
 * 如果题目中的要求,加上"保障奇数和偶数,偶数和偶数之间的位置不变"这个条件
 *
 * 时间复杂度 O(N^2), 空间复杂度 O(1)
 *
 * 整体思路:
 *
 * 指针 i 从 0 开始向右移动,如果遇到奇数,继续移动;遇到偶数,停下来,并进入循环设置新指针 j=i+1, 指正 j 向右移动,遇到偶数,继续移动 l 遇到奇数,停下来,并进入下一步
 * 将数组 [i, j-1] 的元素整体向右移动 1 位,然后将 j 上的元素赋给 i 上的元素
 * 检查是否遍历完成, 为完成则回到第一步
 * @param {*} nums
 */
export const exchange3 = function (nums) {
    const length = nums.length;

    if (!length) return [];

    let i = 0;
    while (i < length) {
        if (nums[i] % 2 === 0) {
            let j = i + 1;
            for (; j < length && nums[j] % 2 === 0; ++j) {}

            if (j === length) {
                break;
            } else {
                const tmp = nums[j];
                for (let k = j; k > i; k--) {
                    nums[k] = nums[k - 1];
                }
                nums[i] = tmp;
            }
        }
        i++;
    }

    return nums;
};
