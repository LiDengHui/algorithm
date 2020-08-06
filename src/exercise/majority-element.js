/*
给定一个大小为 n 的数组，找到其中的多数元素。多数元素是指在数组中出现次数大于 ⌊ n/2 ⌋ 的元素。

你可以假设数组是非空的，并且给定的数组总是存在多数元素。

 

示例 1:

输入: [3,2,3]
输出: 3
示例 2:

输入: [2,2,1,1,1,2,2]
输出: 2

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/majority-element
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
*/
export var majorityElement = function (nums) {
    // return majorityElement1(nums);
    return majorityElement3(nums);
};

/**
 * 排序找中心点
 * @param {*} nums
 */
export function majorityElement1(nums) {
    nums = nums.sort();
    return nums[Math.floor(nums.length / 2)];
}

/**
 * 遍历统计次数
 * @param {*} nums
 */
export function majorityElement2(nums) {
    const map = new Map();
    const length = nums.length;

    nums.forEach((num) => {
        const times = map.get(num);
        if (times == undefined) {
            map.set(num, 1);
        } else {
            map.set(num, times + 1);
        }
    });
    for (const key of map.keys()) {
        if (map.get(key) > length / 2) {
            return key;
        }
    }

    return 0;
}

/**
 * 摩尔投票算法
 * @param {*} nums
 */
export function majorityElement3(nums) {
    let result = 0;
    let times = 0;
    nums.forEach((num) => {
        if (times === 0) {
            times = 1;
            result = num;
        } else if (num === result) {
            times++;
        } else {
            times--;
        }
    });

    return result;
}
