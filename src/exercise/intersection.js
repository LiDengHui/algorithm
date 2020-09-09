/*
给定两个数组，编写一个函数来计算它们的交集。

 

示例 1：

输入：nums1 = [1,2,2,1], nums2 = [2,2]
输出：[2]
示例 2：

输入：nums1 = [4,9,5], nums2 = [9,4,9,8,4]
输出：[9,4]
 

说明：

输出结果中的每个元素一定是唯一的。
我们可以不考虑输出结果的顺序。

*/

/**
 * 参考答案1:
 *
 * 1. 先判断两个数组的长度, 长的为store, 短的为 ary
 * 2. ary[i] 如何可以在 store中找到,则表示这个是交集数字
 * 3. 判断结果数组result是否已经有交集数字,如果没有就新增到结果数组中.
 * 时间复杂度为O(m*n)
 *
 * @param {*} nums1
 * @param {*} nums2
 */
export const intersection1 = (nums1, nums2) => {
    let ary = [];
    let store = [];

    if (nums1.length > nums2.length) {
        ary = nums2;
        store = nums1;
    } else {
        ary = nums1;
        store = nums2;
    }

    const result = [];
    for (let i = 0; i < ary.length; i++) {
        const value = ary[i];

        if (store.indexOf(value) >= 0 && result.indexOf(value) < 0) {
            result.push(value);
        }
    }
    return result;
};

/**
 * 参考答案2:
 *
 * 为了线性解决这个问题, 我们使用集合set 这一个数据结构,该结构可以提供平均时间复杂度 O(1)
 *
 * 将两个数组都转换为集合, 然后迭代较小的集合, 检查其中的每个元素是否同样存在于较大的集合中,平均情况下,这种方法的时间复杂度为O(n+m)
 * @param {*} nums1
 * @param {*} nums2
 */
export const intersection2 = (nums1, nums2) => {
    let arr = [];

    if (nums2.length >= nums1.length) {
        for (let i = 0; i < nums1.length; i++) {
            if (nums2.includes(nums1[i])) {
                arr.push(nums1[i]);
            }
        }
    } else {
        for (let i = 0; i < nums2.length; i++) {
            if (nums1.includes(nums2[i])) {
                arr.push(nums2[i]);
            }
        }
    }

    return Array.from(new Set(arr));
};
