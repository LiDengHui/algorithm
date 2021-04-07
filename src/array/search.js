/**
 * 
81. 搜索旋转排序数组 II
已知存在一个按非降序排列的整数数组 nums ，数组中的值不必互不相同。

在传递给函数之前，nums 在预先未知的某个下标 k（0 <= k < nums.length）上进行了 旋转 ，使数组变为 [nums[k], nums[k+1], ..., nums[n-1], nums[0], nums[1], ..., nums[k-1]]（下标 从 0 开始 计数）。例如， [0,1,2,4,4,4,5,6,6,7] 在下标 5 处经旋转后可能变为 [4,5,6,6,7,0,1,2,4,4] 。

给你 旋转后 的数组 nums 和一个整数 target ，请你编写一个函数来判断给定的目标值是否存在于数组中。如果 nums 中存在这个目标值 target ，则返回 true ，否则返回 false 。

 

示例 1：

输入：nums = [2,5,6,0,0,1,2], target = 0
输出：true
示例 2：

输入：nums = [2,5,6,0,0,1,2], target = 3
输出：false
 

提示：

1 <= nums.length <= 5000
-104 <= nums[i] <= 104
题目数据保证 nums 在预先未知的某个下标上进行了旋转
-104 <= target <= 104
 */
/**
 * 解法一:
 * 二分查找法
 *
 * 对于元素中的重复元素的情况,二分查找时可能会有a[l] = a[mid] = a[r],
 * 此时无法判断区间 [l, mid] 和 区间 [mid+1, r] 哪个是有序的
 *
 * 例如: nums [3, 1,2,3,3,3,3] target = 2, 首先二分法时无法判断区间[0,3] 和区间[4, 6]
 * 那个是有序的, 对于这种情况,我们只能将当前二分区间的左界加1, 右界减一,然后在新的区间上查找
 * @param {*} nums
 * @param {*} target
 * @returns
 */
export function search(nums, target) {
    const n = nums.length;
    if (n === 0) return false;
    if (n === 1) return nums[0] === target;

    let l = 0;
    let r = n - 1;

    while (l <= r) {
        const mid = Math.floor((l + r) / 2);

        if (nums[mid] === target) {
            return true;
        }
        if (nums[mid] === nums[l] && nums[mid] === nums[r]) {
            ++l;
            --r;
        } else if (nums[l] <= nums[mid]) {
            if (nums[l] <= target && target < nums[mid]) {
                r = mid - 1;
            } else {
                l = mid + 1;
            }
        } else {
            if (nums[mid] < target && target <= nums[n - 1]) {
                l = mid + 1;
            } else {
                r = mid - 1;
            }
        }
    }
    return false;
}
