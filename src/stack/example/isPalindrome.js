import Stack from "@/stack/index.js";

/**
 * 判断一个单词是不是回文
 * @param {String} word
 * @returns Boolean
 */
export function isPalindrome(word) {
    const s = new Stack();

    for (let i = 0; i < word.length; i++) {
        s.push(word[i]);
    }

    let rword = "";
    while (s.length() > 0) {
        rword += s.pop();
    }
    return rword === word;
}
