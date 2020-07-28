import Stack from "@/stack/index.js";
/**
 * 将10进制数转换成 0 ～ 9 进制
 * @param {number} num 10进制数值
 * @param {number} base 0～9进制
 * @returns {number} 转换的数值
 */
export function mulBase(num, base) {
    const s = new Stack();

    do {
        s.push(num % base);
        num = Math.floor(num / base);
    } while (num > 0);

    let converted = "";
    while (s.length() > 0) {
        converted += s.pop();
    }
    return converted;
}
