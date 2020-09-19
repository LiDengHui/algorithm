/**
你和你的朋友，两个人一起玩 Nim 游戏：桌子上有一堆石头，每次你们轮流拿掉 1 - 3 块石头。 拿掉最后一块石头的人就是获胜者。你作为先手。

你们是聪明人，每一步都是最优解。 编写一个函数，来判断你是否可以在给定石头数量的情况下赢得游戏。

示例:

输入: 4
输出: false 
解释: 如果堆中有 4 块石头，那么你永远不会赢得比赛；
     因为无论你拿走 1 块、2 块 还是 3 块石头，最后一块石头总是会被你的朋友拿走。
 */

/**
 * 参考答案:
 *
 * 考虑到下面几种条件
 *
 * 1. 石头数量小于等于 3, 直接获胜
 * 2. 石头数量等于 4 , 输
 * 3. 石头数量等于 5, 先拿走一个,获胜
 * 4. 由以上推论(5-1=4,6-2=4,7-3=4) 5~ 7 都可以获胜
 * 5. 石头数量是 8 个,不管怎么都会输
 * 以上可以得到结论,只要一开始的数量为 4 的倍数,就会输
 *
 * @param {*} n
 */
export const canWinNim = (n) => {
    return n % 4 !== 0;
};