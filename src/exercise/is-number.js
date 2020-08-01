export function isNumber(n) {
    return isNumber2(n);
}

function isNumber1(n) {
    n = n.trim();
    if (!n) return false;
    return !isNaN(n);
}

function isNumber2(n) {
    return (
        /^([-+]{1})?\d*\.?\d*$/.test(n.trim()) ||
        /^([-+]{1})?\d*\.?\d*[eE]\d+$/.test(n.trim())
    );
}

/**
 * 表驱动法
 * https://leetcode-cn.com/problems/valid-number/solution/biao-qu-dong-fa-by-user8973/
 */
