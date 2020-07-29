/**
给定一个按照升序排列的整数数组 nums，和一个目标值 target。找出给定目标值在数组中的开始位置和结束位置。

你的算法时间复杂度必须是 O(log n) 级别。

如果数组中不存在目标值，返回 [-1, -1]。

示例 1:

输入: nums = [5,7,7,8,8,10], target = 8
输出: [3,4]
示例 2:

输入: nums = [5,7,7,8,8,10], target = 6
输出: [-1,-1]

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/find-first-and-last-position-of-element-in-sorted-array
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
 */

export function binarySearchOfK(nums, k) {
    if (nums && nums.length > 0 && k != null) {
        const first = getFirstK(nums, k, 0, nums.length - 1);
        const last = getLastK(nums, k, 0, nums.length - 1);
        return [first, last];
    }

    return [-1, -1];
}

function getFirstK(nums, k, first, last) {
    if (first > last) {
        return -1;
    }

    const mid = parseInt(first + last);

    if (nums[mid] == k) {
        if (nums[mid - 1] !== k) {
            return mid;
        } else {
            return getFirstK(nums, k, first, mid - 1);
        }
    } else if (nums[mid] > k) {
        return getFirstK(nums, k, first, mid - 1);
    } else {
        return getFirstK(nums, k, mid + 1, first);
    }
}

function getLastK(nums, k, first, last) {
    if (first > last) {
        return -1;
    }

    const mid = parseInt(first + last);

    if (nums[mid] == k) {
        if (nums[mid + 1] !== k) {
            return mid;
        } else {
            return getLastK(nums, k, mid + 1, last);
        }
    } else if (nums[mid] > k) {
        return getLastK(nums, k, first, mid - 1);
    } else {
        return getLastK(nums, k, mid + 1, first);
    }
}
