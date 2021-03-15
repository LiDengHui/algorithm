/**
 * 打印螺旋矩阵
 *
 * 给你一个 m 行 n 列的矩阵 matrix ，请按照 顺时针螺旋顺序 ，返回矩阵中的所有元素。
 *
 * 输入：matrix = [[1,2,3],[4,5,6],[7,8,9]]
 * 输出：[1,2,3,6,9,8,7,4,5]
 *
 * 输入：matrix = [[1,2,3,4],[5,6,7,8],[9,10,11,12]]
 * 输出：[1,2,3,4,8,12,11,10,9,5,6,7]
 * @param {*} matrix
 * @returns
 */

/**
 * 可以将矩阵看成若干层, 首先输出最外成的元素, 其次输出外层的元素, 直到输出最内层的元素
 *
 * 定义矩阵的第k层是到最近边界距离为k的所有顶点,
 *
 * 对于每层,从右上方开始以顺时针的顺序便利所有的元素, 假设当前层的左上角位于(top, left), 右下角位于(bottom, right), 按照如下规则顺序遍历当前层的元素
 *
 * 1. 从左到右遍历上侧元素, 依次 (top, left) 到 (top, right)
 * 2. 从上到下遍历右侧元素,依次为(top+1, right )到(bottom, right)
 * 3. 如果 left < right 且 top < bottom, 则从右到左遍遍历元素,依次为 (bottom, right -1) 到 (bottom, left);
 *  以及从下到上遍历左侧元素, 依次为(bottom, left) 到 (top+1, left);
 *
 * 遍历完当前层的所有元素之后, 将left 和 top 分别加1, right 和 bottom分别减1, 进入下一层继续遍历,直到遍历完所有的元素
 * @param {*} matrix
 * @returns
 */
export function spiralOrder(matrix) {
    if (!matrix.length || !matrix[0].length) return [];

    const order = [];
    const rows = matrix.length;
    const columns = matrix[0].length;

    let top = 0;
    let left = 0;
    let bottom = rows - 1;
    let right = columns - 1;

    while (top <= bottom && left <= right) {
        for (let column = left; column <= right; column++) {
            order.push(matrix[top][column]);
        }

        for (let row = top + 1; row <= bottom; row++) {
            order.push(matrix[row][right]);
        }
        if (top < bottom && left < right) {
            for (let column = right - 1; column > left; column--) {
                order.push(matrix[bottom][column]);
            }
            for (let row = bottom; row > top; row--) {
                order.push(matrix[row][left]);
            }
        }
        top++;
        left++;
        right--;
        bottom--;
    }
    return order;
}
