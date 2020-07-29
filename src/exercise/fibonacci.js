/**
 * 斐波那契（Fibonacci）数列的第 n 项
 *
 */

export function fibonacci1(n) {
    if (n < 2) {
        return n;
    }
    return fibonacci1(n - 1) + fibonacci1(n - 2);
}

export function fibonacci2(n, memory = {}) {
    if (n < 2) {
        return n;
    }
    if (!memory[n]) {
        memory[n] = fibonacci2(n - 1) + fibonacci2(n - 2);
    }
    return memory[n];
}

export function fibonacci3(n) {
    if (n < 2) {
        return n;
    }

    let i = 1;
    let pre = 0;
    let current = 1;
    let result = 0;

    while (i++ < n) {
        result = pre + current;
        pre = current;
        current = result;
    }

    return result;
}
