/*
把n个骰子扔在地上，所有骰子朝上一面的点数之和为s。输入n，打印出s的所有可能的值出现的概率。

 

你需要用一个浮点数数组返回答案，其中第 i 个元素代表这 n 个骰子所能掷出的点数集合中第 i 小的那个的概率。

 

示例 1:

输入: 1
输出: [0.16667,0.16667,0.16667,0.16667,0.16667,0.16667]
示例 2:

输入: 2
输出: [0.02778,0.05556,0.08333,0.11111,0.13889,0.16667,0.13889,0.11111,0.08333,0.05556,0.02778]
 

限制：

1 <= n <= 11

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/nge-tou-zi-de-dian-shu-lcof
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
*/

export function twoSum(n) {
    return twoSum2(n);
    // return twoSum1(n);
}

function twoSum1(n) {
    const map = new Map();
    const totalTimes = Math.pow(6, n);
    inner(0, 1);

    const res = [];
    for (const times of map.values()) {
        res.push(+(times / totalTimes).toFixed(5));
    }
    return res;

    function inner(total, step) {
        if (step > n) {
            map.set(total, map.has(total) ? map.get(total) + 1 : 1);
            return;
        }

        for (let i = 1; i <= 6; i++) {
            inner(total + i, step + 1);
        }
    }
}

function twoSum2(n) {
    const dp = new Array(n + 1);

    for (let i = 1; i <= n; ++i) {
        dp[i] = new Array(67).fill(0);
    }

    for (let j = 1; j <= 6; j++) {
        dp[1][j] = 1;
    }

    for (let i = 2; i <= n; ++i) {
        for (let j = i; j <= 6 * i; ++j) {
            for (let k = 1; j - k > 0 && k <= 6; k++) {
                dp[i][j] += dp[i - 1][j - k];
            }
        }
    }

    let totalTimes = Math.pow(6, n);

    const ans = [];

    for (let j = n; j <= n * 6; j++) {
        ans.push(+(dp[n][j] / totalTimes).toFixed(5));
    }
    return ans;
}
