/*
地上有一个m行n列的方格，从坐标 [0,0] 到坐标 [m-1,n-1] 。一个机器人从坐标 [0, 0] 的格子开始移动，它每次可以向左、右、上、下移动一格（不能移动到方格外），也不能进入行坐标和列坐标的数位之和大于k的格子。例如，当k为18时，机器人能够进入方格 [35, 37] ，因为3+5+3+7=18。但它不能进入方格 [35, 38]，因为3+5+3+8=19。请问该机器人能够到达多少个格子？

 

示例 1：

输入：m = 2, n = 3, k = 1
输出：3
示例 2：

输入：m = 3, n = 1, k = 0
输出：1
提示：

1 <= n,m <= 100
0 <= k <= 20

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/ji-qi-ren-de-yun-dong-fan-wei-lcof
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
 */

/*
答案:
    题目提到了数位之和,这个可以利用取余运算即可,将其单独封装到函数,
 */
function bitSum(n) {
    let res = 0;
    while (n) {
        res = res + (n % 10);
        n = Math.floor(n / 10);
    }

    return res;
}

/**
需要注意的是: 能满足数位之和的要求的坐标,不一定能达到, 因为题目提到了机器人的移动是每次可以向上下左右4个方向移动一格, 并且开始坐标是(0,0)

例如当 m = 36, n = 15, k = 9 时, 由于只能想合法坐标移动 1 格, 从 (18, 0) 并不能到达(20,0),即使(20,0)满足数位之和的条件

这就需要使用深度优先遍历(DFS)或者广度优先遍历(BFS),而不是直接检查每个元素
 */

/**
 *
 * 解法一: 广度优先遍历
 * 和普通的BFS相比, 有两个不同点;
 *
 * 需要调用bitSum来检查数位之和
 * 应为从左上角开始遍历,因此只需要遍历[右]和[下]这两个方向
 * 代码如下
 * @param {*} m
 * @param {*} n
 * @param {*} k
 */
export function movingCount1(m, n, k) {
    let res = 0;
    const directions = [
        [1, 0],
        [0, 1],
    ];

    const queue = [[0, 0]];

    const visited = {
        "0-0": true,
    };

    while (queue.length) {
        const [x, y] = queue.shift();
        if (bitSum(x) + bitSum(y) > k) {
            continue;
        }
        ++res;

        for (const direction of directions) {
            const newx = direction[0] + x;
            const newy = direction[1] + y;

            if (
                !visited[`${newx}-${newy}`] &&
                newx >= 0 &&
                newy >= 0 &&
                newx < m &&
                newy < n
            ) {
                queue.push([newx, newy]);
                visited[`${newx}-${newy}`] = true;
            }
        }
    }
    return res;
}
// 时间复杂度是O(n), 空间复杂度O(n)

/**
 * 解法2: 深度优先遍历
 * DFS 不如BFS, 除了递归调用外,还要尝试 4 个方向(BFS 只要两个), 代码实现如下
 *
 * @param {*} m
 * @param {*} n
 * @param {*} k
 */
export function movingCount2(m, n, k) {
    let res = 0;
    const directions = [
        [-1, 0],
        [1, 0],
        [0, -1],
        [0, 1],
    ];

    const visited = {};

    dfs(0, 0);

    return res;

    function dfs(x, y) {
        visited[`${x}-${y}`] = true;

        if (bitSum(x) + bitSum(y) > k) {
            return;
        }
        ++res;

        for (const direction of directions) {
            const newx = direction[0] + x;
            const newy = direction[1] + y;

            if (
                !visited[`${newx}-${newy}`] &&
                newx >= 0 &&
                newy >= 0 &&
                newx < m &&
                newy < n
            ) {
                dfs(newx, newy);
            }
        }
    }
}

// 时间复杂度是O(n), 空间复杂度O(n)
