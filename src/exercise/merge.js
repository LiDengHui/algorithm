/*
给你两个有序整数数组 nums1 和 nums2，请你将 nums2 合并到 nums1 中，使 nums1 成为一个有序数组。

 

说明:

初始化 nums1 和 nums2 的元素数量分别为 m 和 n 。
你可以假设 nums1 有足够的空间（空间大小大于或等于 m + n）来保存 nums2 中的元素。
 

示例:

输入:
nums1 = [1,2,3,0,0,0], m = 3
nums2 = [2,5,6],       n = 3

输出: [1,2,2,3,5,6]
*/

/**
 * 参考答案:
 *
 * 1. 合并两个有序数组,就是归并排序的一步
 * 2. 归并排序会开辟一个长度为 nums1 + nums2 的空间, 用两个指针遍历两个数组,把小的放到新的数组里
 * 3. 这里 nums1 就是我们开辟的新数组,我们沿用归并排序的思路,用三个指针
 *
 * 从后开始遍历的好处
 * 先比较较大的数,把大的数放到数组 nums1 的后面
 * 如果从小的比较,需要把数据 nums1 的所有数往后移动一位,时间复杂度比较高
 *
 * @param {*} num1
 * @param {*} m
 * @param {*} num2
 * @param {*} n
 */
export const merge = (num1, m, num2, n) => {
    let index1 = m - 1;
    let index2 = n - 1;

    let tail = m + n - 1;

    while (index2 >= 0) {
        if (num1[index1] > num2[index2]) {
            num1[tail] = num1[index1];
            index1--;
            tail--;
        } else {
            num1[tail] = num2[index2];
            index2--;
            tail--;
        }
    }
};
