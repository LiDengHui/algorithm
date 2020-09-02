/**

学校在拍年度纪念照时，一般要求学生按照 非递减 的高度顺序排列。

请你返回能让所有学生以 非递减 高度排列的最小必要移动人数。

注意，当一组学生被选中时，他们之间可以以任何可能的方式重新排序，而未被选中的学生应该保持不动。

 

示例：

输入：heights = [1,1,4,2,1,3]
输出：3 
解释：
当前数组：[1,1,4,2,1,3]
目标数组：[1,1,1,2,3,4]
在下标 2 处（从 0 开始计数）出现 4 vs 1 ，所以我们必须移动这名学生。
在下标 4 处（从 0 开始计数）出现 1 vs 3 ，所以我们必须移动这名学生。
在下标 5 处（从 0 开始计数）出现 3 vs 4 ，所以我们必须移动这名学生。
示例 2：

输入：heights = [5,1,2,3,4]
输出：5
示例 3：

输入：heights = [1,2,3,4,5]
输出：0
 

提示：

1 <= heights.length <= 100
1 <= heights[i] <= 100

 */

/**
 * 思路:
 *
 * 对原来数组进行排序, 排序完成后与原始数组中的元素对比,遇到不同的元素count++,
 * 最后返回比较排序,时间复杂度最低有O(NlogN)
 * @param {*} heigths
 */
export const heightChecker1 = function (heigths) {
    let old = [...heigths];
    let newArr = heigths.sort((a, b) => a - b);

    let count = 0;

    for (let i = 0; i < newArr.length; i++) {
        if (old[i] !== newArr[i]) {
            count++;
        }
    }
    return count;
};

/**
 * 首先我们并不关心排序后得到的结果,我们想知道的只是在该位置上,与最小的值是否一致
 * 题目中已经明确了值的范围1<=heights[i]<=100
 * 这是个在固定范围内输入的值, 比如输入: [1,1,4,2,1,3]
 * 输入中3个1,1个2,1个3,1个4,
 * 3个1肯定会在前面,依次类推
 * 所以,我们需要的仅仅是计数
 *
 * 时间复杂度: O(n), 计数过程为O(n),比较过程外层循环次数固定为100,
 * 里循环一共也会执行n次,O(100+n), 即为O(n)
 * @param {*} heights
 */
export const heightChecker2 = function (heights) {
    let arr = new Array(101);

    for (let i = 0; i < arr.length; i++) {
        arr[i] = 0;
    }

    for (let i = 0; i < heights.length; i++) {
        arr[heights[i]]++;
    }
    let count = 0;

    for (let i = 1, j = 0; i < arr.length; i++) {
        while (arr[i]-- > 0) {
            if (heights[j++] != i) {
                count++;
            }
        }
    }

    return count;
};
