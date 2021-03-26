/**
 * 题目: Z 字形变换
 * 
 * 将一个给定字符串 s 根据给定的行数 numRows ，以从上往下、从左到右进行 Z 字形排列。

比如输入字符串为 "PAYPALISHIRING" 行数为 3 时，排列如下：

P   A   H   N
A P L S I I G
Y   I   R
之后，你的输出需要从左往右逐行读取，产生出一个新的字符串，比如："PAHNAPLSIIGYIR"。

请你实现这个将字符串进行指定行数变换的函数：

string convert(string s, int numRows);
 

示例 1：

输入：s = "PAYPALISHIRING", numRows = 3
输出："PAHNAPLSIIGYIR"
示例 2：
输入：s = "PAYPALISHIRING", numRows = 4
输出："PINALSIGYAHRPI"
解释：
P     I    N
A   L S  I G
Y A   H R
P     I
示例 3：

输入：s = "A", numRows = 1
输出："A"
 

提示：

1 <= s.length <= 1000
s 由英文字母（小写和大写）、',' 和 '.' 组成
1 <= numRows <= 1000

链接：https://leetcode-cn.com/problems/zigzag-conversion
 */

/**
 * 解法一: 模拟法
 *
 * 1. 定义当前行row, 方向变量 direction, 当向下排列时row+=1; 当 向上排列时 row+=-1;
 * 2. 当row 为 0 时: 表示当前在队列在最上面,需要变换方向,使 direction = true;
 *    当row为 rows-1 时:表示当前在队列最下面,需要变换方向, 使 direction = false;
 * 
 * 复杂度分析:
 * 
 * 1. 时间复杂度: O(n),
 * 2. 空间复杂度: O(n)
    
 * @param {*} s
 * @param {*} numRows
 * @returns
 */
export function convert1(s, numRows) {
    if (numRows === 1) return s;

    const arr = new Array(Math.min(s.length, numRows)).fill("");
    let direction = false;

    let row = 0;
    for (const c of s) {
        arr[row] += c;
        if (row === 0 || row === numRows - 1) direction = !direction;
        row += direction ? 1 : -1;
    }
    return arr.join("");
}

/**
 * 解法二 公式提取
 *
 * 由题目可知: Z 字排序可以当成是一个以2*rows-2为周期的变化
 *
 * 当 rows 为 4时
 * 当在第一行的时候,可以取出
 *      第0位,|
 *      第(2*4 -2)=6位,|
 *      第(2*4-2)*2=12位,字母
 * 当在第二行的时候,可以取出
 *      第1位, 第(2*4-2)-1 = 5 位
 *      第 (2*4-2)+1 = 7位, 第 (2*4-2)*2-1 = 11
 *      第(2*4-2)*2 + 1=13位位字母
 * 当在第三行的时候,可以取出
 *      第2位, 第(2*4-2)-2 = 4位|
 *      第 (2*4-2)+2 = 8位, 第 (2*4-2)*2-2 = 10
 *      第(2*4-2)*2 + 2=14位位字母
 * 当在第四行的时候,可以取出
 *      第3位,
 *      第(2*4 -2)*+3=9位,
 *      第(2*4-2)*2+3=15位,字母
 *
 * 所以只要不是第一行,和最后一行,其他都是单次循环两个字母
 *
 * 我们设立 i 为 行数, cycle 为 周期长度, j为 循环周期基数;比如第一个周期j = 0, 第二个周期 j = cycle ,第三个周期为 j = cycle*2;
 * 则竖列字母的位置可以表示为 j+i,
 * 斜列字母的位置可以表示为 j+cycle - i
 * 同时要注意的是: 竖列第一行和最后一行没有斜列字母,且在取斜裂字母时需要判断位置是否越界
 *
 * @param {*} s
 * @param {*} numRows
 * @returns
 */
export function convert2(s, numRows) {
    if (numRows === 1) return s;

    let str = "";
    let n = s.length;
    let cycle = 2 * numRows - 2;

    for (let i = 0; i < numRows; i++) {
        for (let j = 0; j + i < n; j += cycle) {
            str += s[j + i];

            if (i !== 0 && i !== numRows - 1 && j + cycle - i < n) {
                str += s[j + cycle - i];
            }
        }
    }

    return str;
}
