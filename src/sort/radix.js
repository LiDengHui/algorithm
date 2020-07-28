import Queue from "@/queue/index.js";
/**
 * 基数排序
 * @param {*} numAry 数组
 * @param {*} n 数组最大位数
 */
export function radixSort(nums, n) {
    const queues = [];
    for (let i = 0; i < 10; i++) {
        queues.push(new Queue());
    }
    for (let i = 0; i < n; i++) {
        distribute(nums, queues, nums.length, 10 ** i);
        collect(queues, nums);
    }
    return nums;
}

/**
 *
 * @param {*} nums 数组
 * @param {*} queues 队列
 * @param {*} n 循环次数
 * @param {*} digit 数位，1为个位，10为十位
 */
function distribute(nums, queues, n, digit) {
    for (let i = 0; i < n; i++) {
        queues[Math.floor((nums[i] % (10 * digit)) / digit)].enqueue(nums[i]);
    }
}

/**
 *
 * @param {*} queues // 按位排列后的数组
 * @param {*} nums // 返回数组
 */
function collect(queues, nums) {
    let i = 0;
    for (let j = 0; j < 10; j++) {
        while (!queues[j].empty()) {
            nums[i++] = queues[j].dequeue();
        }
    }
}
