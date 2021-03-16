/**
 *
 * 旋转矩阵
 * 给你一个正整数 n ，生成一个包含 1 到 n2 所有元素，且元素按顺时针顺序螺旋排列的 n x n 正方形矩阵 matrix
 *
 * 输入：n = 3
 * 输出：[[1,2,3],[8,9,4],[7,6,5]]
 * @param {*} n
 * @returns
 */

/**
 *  模拟矩阵的生成, 按照要求,初始位置设为矩阵的左下角, 初始方向设为向右, 如果下一步的位置超出矩阵边界, 或者是之前访问过的位置, 则顺时针旋转,进入下一个方向,如此反复直至填入n^2个元素
 *
 *  记matrix为生成的矩阵,其初始元素设为0, 由于填入的元素均为正数,我们可以判断当前位置的元素值,若不为0,则说明已经访问过此位置
 * @param {*} n
 * @returns
 */
export const generateMatrix = (n) => {
    const maxNum = n * n;
    let curNum = 1;
    const matrix = new Array(n).fill(0).map(() => new Array(n).fill(0));

    let row = 0;
    let column = 0;
    const directions = [
        [0, 1],
        [1, 0],
        [0, -1],
        [-1, 0],
    ]; // 右下左上

    let directionIndex = 0;

    while (curNum <= maxNum) {
        matrix[row][column] = curNum;
        curNum++;
        const nextRow = row + directions[directionIndex][0];
        const nextColumn = column + directions[directionIndex][1];

        if (
            nextRow < 0 ||
            nextRow >= n ||
            nextColumn < 0 ||
            nextColumn >= n ||
            matrix[nextRow][nextColumn] !== 0
        ) {
            directionIndex = (directionIndex + 1) % 4;
        }
        row = row + directions[directionIndex][0];
        column = column + directions[directionIndex][1];
    }

    return matrix;
};
