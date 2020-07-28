/**
编写一个高效的算法来搜索 m x n 矩阵 matrix 中的一个目标值 target。该矩阵具有以下特性：

每行的元素从左到右升序排列。
每列的元素从上到下升序排列。
示例:

现有矩阵 matrix 如下：

[
  [1,   4,  7, 11, 15],
  [2,   5,  8, 12, 19],
  [3,   6,  9, 16, 22],
  [10, 13, 14, 17, 24],
  [18, 21, 23, 26, 30]
]
给定 target = 5，返回 true。

给定 target = 20，返回 false。


解题思路：
用二分法思想，找中心点，将martix划分为四个区域，判断
[
A [1,   4,  7,| 11, 15], B
  [2,   5,  8,| 12, 19],
               ----------
  [3,   6,  9,| 16, 22],
  -------------
  [10, 13, 14,| 17, 24],
C  [18, 21, 23,| 26, 30] D
]
设:
    起始坐标为 start={x,y}
    终止坐标为 end={x,y}
    中心点坐标为 center={x, y}
    目标值为 target
    中心值为 mid
步骤：    

1.  找到矩阵中心点center = {x, y}，将矩阵划分为四个区域，A,B,C,D;
    center = {
        x: Math.floor((start.x+end.x)/2),
        y: Math.floor((srart.y+end.y)/2),
    }

2. 判断目标值（target）与中心值（mid）是否相等， 相等则返回true

3. 如果不想等，则判断 

目标值 (target) < 中心值（mid）, 则搜索 A，B,C 区域
    A区域坐标 : start ,center
    
目标值 (target) > 中心值（mid）, 则搜索 B, C，D 区域
    B区域坐标 : 

        start = {
            x: center.x + 1,
            y: start.y,
        }
        end = {
            x: end.x,
            y: center.y,
        }
    C区域坐标 : 
        start = {
            x: center.x + 1,
            y: center.y + 1,
        },
        end

    D区域坐标：
        start = {
            x: start.x,
            y: center.y + 1,
        },
        end = {
            x: center.x,
            y: end.y,
        } 
临界值判断条件
    1. 起始地址和 终止地址 是不是都存在
    2. 起始地址 必须小于 终止地址
    3. 起始地址 等于 终止地址
    3. 中间值是不是存在
 */

/**
 *
 * @param {*} matrix
 * @param {*} target
 */
export default function searchMatrix(matrix, target) {
    const start = {
        x: 0,
        y: 0,
    };

    if (!matrix[0]) {
        return false;
    }
    const end = {
        x: matrix[0].length - 1,
        y: matrix.length - 1,
    };
    return binarySearchMatrix(matrix, target, start, end);
}

function binarySearchMatrix(matrix, target, start, end) {
    if (start.x > end.x || start.y > end.y) {
        return false;
    }

    const center = {
        x: Math.floor((start.x + end.x) / 2),
        y: Math.floor((start.y + end.y) / 2),
    };
    if (
        matrix[center.y] == undefined ||
        matrix[center.y][center.x] == undefined
    ) {
        return false;
    }

    const mid = matrix[center.y][center.x];

    if (mid == target) {
        return true;
    } else if (start.x !== end.x || start.y !== end.y) {
        if (target < mid) {
            // A, B,C
            return (
                binarySearchMatrix(matrix, target, start, {
                    x: end.x,
                    y: center.y - 1,
                }) ||
                binarySearchMatrix(
                    matrix,
                    target,
                    {
                        x: start.x,
                        y: center.y,
                    },
                    {
                        x: center.x - 1,
                        y: end.y,
                    }
                )
            );
        } else {
            // B, C, D
            return (
                binarySearchMatrix(
                    matrix,
                    target,
                    {
                        x: center.x + 1,
                        y: start.y,
                    },
                    {
                        x: end.x,
                        y: center.y,
                    }
                ) ||
                binarySearchMatrix(
                    matrix,
                    target,
                    {
                        x: start.x,
                        y: center.y + 1,
                    },
                    end
                )
            );
        }
    } else {
        return false;
    }
}
