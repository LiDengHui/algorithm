/**
 * 输入一个递增排序的数组和一个数字s，在数组中查找两个数，使得它们的和正好是s。如果有多对数字的和等于s，则输出任意一对即可。

 

示例 1：

输入：nums = [2,7,11,15], target = 9
输出：[2,7] 或者 [7,2]
示例 2：

输入：nums = [10,26,30,31,47,60], target = 40
输出：[10,30] 或者 [30,10]
 

限制：

1 <= nums.length <= 10^5
1 <= nums[i] <= 10^6
 */

/**
 * 答案
 * 准备两个指针. left指向数组开始, right指向数组结尾
 * 如果 nums[left] 与 nums[right] 的和等于target,那么返回nums[left]和nums[right]
 * 如果 nums[left] 与 nums[right] 的和大于target,那么说明应该缩小和,所以right指向右移
 * 如果 nums[left] 与 nums[right] 的和小于target,那幕说名应该扩大和,所以left指针向左移
 *
 * 整个过程就是两个指针,根据所指向的数的和的大小,来不断向中间移动过查找的过程
 * @param {*} nums
 * @param {*} target
 */

export const twoSum = function (nums, target) {
    let left = 0;
    let right = nums.length - 1;

    while (right > left) {
        if (nums[left] + nums[right] > target) {
            --right;
        } else if (nums[left] + nums[right] < target) {
            ++left;
        } else {
            return [nums[left], nums[right]];
        }
    }
};
