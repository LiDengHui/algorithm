/**
 * 给定一个字符串 s 和一个字符串 t ，计算在 s 的子序列中 t 出现的个数。

字符串的一个 子序列 是指，通过删除一些（也可以不删除）字符且不干扰剩余字符相对位置所组成的新字符串。（例如，"ACE" 是 "ABCDE" 的一个子序列，而 "AEC" 不是）

题目数据保证答案符合 32 位带符号整数范围。

 

示例 1：

输入：s = "rabbbit", t = "rabbit"
输出：3
解释：
如下图所示, 有 3 种可以从 s 中得到 "rabbit" 的方案。
(上箭头符号 ^ 表示选取的字母)
rabbbit
^^^^ ^^
rabbbit
^^ ^^^^
rabbbit
^^^ ^^^
示例 2：

输入：s = "babgbag", t = "bag"
输出：5
解释：
如下图所示, 有 5 种可以从 s 中得到 "bag" 的方案。 
(上箭头符号 ^ 表示选取的字母)
babgbag
^^ ^
babgbag
^^    ^
babgbag
^    ^^
babgbag
  ^  ^^
babgbag
    ^^^
 

提示：

0 <= s.length, t.length <= 1000
s 和 t 由英文字母组成

链接：https://leetcode-cn.com/problems/distinct-subsequences
 */

/**
 * 方法一: 动态规划法
 *
 * 假设字符串s和t的长度分别是m和n, 如果 t是s的子序列,则s的长度一定大于或等于t的长度,
 * 即只有当m>=n时,t才可能是s的子序列.
 * 如果m<n,则t一定不是s的子序列,因此直接返回0
 * 当m>=n时, 可以通过动态规划的方法计算在s的子序列中t出现的个数
 * 创建二维数组dp, 其中dp[i][j]表示在s[i:]t[j:]出现的个数
 *  上述表示中,
 *      s[i:]: 表示s从下标i到末尾的字符串,
 *      t[j:]: 表示t从下标j到末尾的字符串
 * 考虑动态规划的边界情况
 *
 * .当j = n 时, t[j:]为空字符串,由于空字符串是任何字符串的子序列,因此对任意 0<= i <= m, 有 dp[i][n] = 1;
 *  当i = m 且 j < n 时, s[i:]为空字符串, t[j:] 为非空字符串, 由于非空字符串不是空字符串的子序列,因此对任意0<=j<=n,有 dp[m][j]=0
 *  当i< m 且 j< n 时, 考虑 dp[i][j]的计算
 *  * 当s[i] = s[j] 时, dp[i][j] 由两部分组成:
 *      1. 如果 s[i] 和 t[j] 匹配, 则考虑 t[j+1:] 作为 s[i+1:]的子序列, 子序列数为dp[i+1][j+1];
 *      2. 如果 s[i] 不和 t[j]匹配, 则考虑 t[j:] 作为 s[i+1:]的子序列, 子序列数为dp[i+1][j];
 *      因此当s[i] = t[j]时, 有 dp[i][j] = dp[i+1][j+1] + dp[i+1][j]
 *  * 当s[i] != s[j]时, s[i]不能和t[j] 匹配, 因此 只考虑t[j:] 作为 s[i+1:] 的子序列, 子序列数为 dp[i+1][j]
 *      因此 s[i] != t[j] 时, 有 dp[i][j] = dp[i+1][j]
 *
 * @param {*} s
 * @param {*} t
 * @returns
 */
export function numDistinct(s, t) {
    const m = s.length;
    const n = t.length;

    const dp = new Array(m + 1).fill(0).map(() => new Array(n + 1).fill(0));

    for (let i = 0; i <= m; i++) {
        dp[i][n] = 1;
    }

    for (let i = m - 1; i >= 0; i--) {
        for (let j = n - 1; j >= 0; j--) {
            if (s[i] == t[j]) {
                dp[i][j] = dp[i + 1][j + 1] + dp[i + 1][j];
            } else {
                dp[i][j] = dp[i + 1][j];
            }
        }
    }
    return dp[0][0];
}
