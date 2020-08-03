/*
输入一个字符串，打印出该字符串中字符的所有排列。

 

你可以以任意顺序返回这个字符串数组，但里面不能有重复元素。

 

示例:

输入：s = "abc"
输出：["abc","acb","bac","bca","cab","cba"]
 

限制：

1 <= s 的长度 <= 8

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/zi-fu-chuan-de-pai-lie-lcof
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
*/
/**
 *
 * @param {*} str
 */
export function permutation(str) {
    const result = [];

    if (!str) return result;

    var arr = str.split("");

    permutate(arr, result);

    return [...new Set(result.sort())];
}

function permutate(queue, result, temp = "", current = "") {
    current += temp;

    if (queue.length === 0) {
        result.push(current);
        return;
    }

    for (let i = 0; i < queue.length; i++) {
        temp = queue.shift();
        permutate(queue, result, temp, current);
        queue.push(temp);
    }
}

/**
 * 数组交换方式
 * @param {*} str
 */
export function permutation1(str) {
    const result = [];

    if (!str) return result;

    var arr = str.split("");

    permutate1(arr, result);

    return [...new Set(result.sort())];
}

function permutate1(queue, result, index = 0) {
    if (queue.length - 1 === index) {
        result.push(queue.join(""));
    }

    for (let i = index; i < queue.length; i++) {
        swap(queue, index, i);
        permutate1(queue, result, index + 1);
        swap(queue, i, index);
    }
}

function swap(arr, a, b) {
    [arr[a], arr[b]] = [arr[b], arr[a]];
}
