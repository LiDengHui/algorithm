/*
请从字符串中找出一个最长的不包含重复字符的子字符串，计算该最长子字符串的长度。

 

示例 1:

输入: "abcabcbb"
输出: 3 
解释: 因为无重复字符的最长子串是 "abc"，所以其长度为 3。
示例 2:

输入: "bbbbb"
输出: 1
解释: 因为无重复字符的最长子串是 "b"，所以其长度为 1。
示例 3:

输入: "pwwkew"
输出: 3
解释: 因为无重复字符的最长子串是 "wke"，所以其长度为 3。
     请注意，你的答案必须是 子串 的长度，"pwke" 是一个子序列，不是子串。

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/zui-chang-bu-han-zhong-fu-zi-fu-de-zi-zi-fu-chuan-lcof
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
 */
export function lengthOfLongestSubstring(s) {
    return lengthOfLongestSubstring2(s);
}
/*
解法一: 滑动窗口
准备 2 个指针 i,j, i指向窗口的左边，j指向右边，指针每次可以向前滑动一个位置，他们之间的区域就是窗口

步骤：

1. 准备哈希表 map, key是char，value是boolean，代表字符char是否出现在滑动窗口内
2. i 和 j 初始化为 0 ， 结果 ans 初始化为 0 ；
3. 检查s[j]是否出现过：
    没有出现过,扩大窗口：记录s[j],指针向右滑动一个，更新ans
    出现过，缩小窗口，指针i向右移动一个，map[s[i]]更新为false
4. 如果 i 和 j 没有越界，回到 step3， 否则返回ans

由于整个过程是“推着”滑动窗口从做向右，时间复杂度O(n),空间复杂度O(n),
 */
export function lengthOfLongestSubstring1(s) {
    let length = s.length;
    let map = {};
    let i = 0;
    let j = 0;
    let ans = 0;
    while (j < length && i < length) {
        if (!map[s[j]]) {
            ans = Math.max(j - i + 1, ans);
            map[s[j]] = true;
            ++j;
        } else {
            map[s[i]] = false;
            ++i;
        }
    }
    return ans;
}

/*
解法二： 优化后的滑动窗口

在解法1的基础上，第三部，如果s[j]出现在滑动窗口内，采用大的作法是左边逐步缩小滑动窗口，事实上不需要逐步缩小，假设滑动窗口内的s[j]相同字符下标是j，那幕直接跳过[i,j]范围即可

为了做到“跳动优化”，需要改造一对哈希表 map 的用法：key还是char；value为int，记录char对应的下标
*/
export function lengthOfLongestSubstring2(s) {
    let length = s.length;
    let map = new Map();
    let i = 0;
    let j = 0;
    let ans = 0;
    while (j < length && i < length) {
        if (map.has(s[j]) && map.get(s[j]) >= i) {
            i = map.get(s[j]) + 1;
        }
        ans = Math.max(j - i + 1, ans);
        map.set(s[j], j);
        ++j;
    }
    return ans;
}
