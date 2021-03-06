/*
把一个数组最开始的若干个元素搬到数组的末尾，我们称之为数组的旋转。输入一个递增排序的数组的一个旋转，输出旋转数组的最小元素。例如，数组 [3,4,5,1,2] 为 [1,2,3,4,5] 的一个旋转，该数组的最小值为1。  

示例 1：

输入：[3,4,5,1,2]
输出：1
示例 2：

输入：[2,2,2,0,1]
输出：0

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/xuan-zhuan-shu-zu-de-zui-xiao-shu-zi-lcof
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。

解题思路二分法
*/
export function minNumberInRotateArray(arr) {
    let start = 0;
    if (arr.length === 0) return 0;
    let end = arr.length - 1;

    while (end > start) {
        let mid = Math.floor((end + start) / 2);
        if (arr[mid] > arr[end]) {
            start = mid + 1;
        } else if (arr[mid] === arr[end]) {
            end--;
        } else {
            end = mid;
        }
    }

    return arr[start];
}
