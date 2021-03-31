/**
90. 子集 II
给你一个整数数组 nums ，其中可能包含重复元素，请你返回该数组所有可能的子集（幂集）。

解集 不能 包含重复的子集。返回的解集中，子集可以按 任意顺序 排列。

 

示例 1：

输入：nums = [1,2,2]
输出：[[],[1],[1,2],[1,2,2],[2],[2,2]]
示例 2：

输入：nums = [0]
输出：[[],[0]]
 

提示：

1 <= nums.length <= 10
-10 <= nums[i] <= 10
 */

/**
 *
 *
 */
export function subsetsWithDup(nums) {
    nums.sort((a, b) => a - b);
    const ans = [];
    const used = [];
    dfs(0, nums, ans, []);

    function dfs(start, nums, ans, temp) {
        ans.push(temp);

        if (start === nums.length) {
            return;
        }

        for (let i = start; i < nums.length; i++) {
            //
            if (nums[i] === nums[i - 1] && used[i - 1] === false) {
                continue;
            }
            const current = [...temp, nums[i]];
            used[i] = true;
            dfs(i + 1, nums, ans, current);
            used[i] = false;
        }
    }
    return ans;
}
