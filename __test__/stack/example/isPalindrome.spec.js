import { isPalindrome } from "@/stack/example/isPalindrome.js";
describe("判断是不是回文", () => {
    it("hello is not palindrome", () => {
        expect(isPalindrome("hello")).toBeFalsy();
    });

    it("racecar is palindrome", () => {
        expect(isPalindrome("racecar")).toBeTruthy();
    });
});
