/**
 *给定两个字符串 s 和 t，判断它们是否是同构的。

如果 s 中的字符可以被替换得到 t ，那么这两个字符串是同构的。

所有出现的字符都必须用另一个字符替换，同时保留字符的顺序。两个字符不能映射到同一个字符上，但字符可以映射自己本身。

示例 1:

输入: s = "egg", t = "add"
输出: true
示例 2:

输入: s = "foo", t = "bar"
输出: false
示例 3:

输入: s = "paper", t = "title"
输出: true
说明:
你可以假设 s 和 t 具有相同的长度。

 */
/**
 *
 * 参考答案:
 *
 * 两个字符串同构的含义就是字符串s可以唯一的映射到t,同时 t也可以唯一映射到s
 * 题目也有点像映射的知识, 两个字符串为两个集合,然后判断当前映射是否为单射
 *
 * 需要两个map. 一个记录s对t的对应关系,一个记录t到s的对应关系,
 * 如果字符没在s中出现,加到map,出现过的话就拿出来跟t对比,不一致表示为非同构字符串
 * @param {*} s
 * @param {*} t
 */
export function isIsomorphic(s, t) {
    let mapS = {};
    let mapT = {};

    for (let i in s) {
        const valueS = s[i];
        const valueT = t[i];

        if (!mapS[valueS]) {
            mapS[valueS] = valueT;
        } else if (mapS[valueS] !== valueT) {
            return false;
        }

        if (!mapT[valueT]) {
            mapT[valueT] = valueS;
        } else if (mapT[valueT] !== valueS) {
            return false;
        }
    }
    return true;
}
