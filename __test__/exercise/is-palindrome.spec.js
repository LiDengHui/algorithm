import { isPalindrome } from "@/exercise/is-palindrome";

describe("is-palindrome", () => {
    it("x = 121,", () => {
        expect(isPalindrome(121)).toBeTruthy;
    });

    it("x = -121,", () => {
        expect(isPalindrome(-121)).toBeFalsy;
    });
    it("x = 10,", () => {
        expect(isPalindrome(121)).toBeFalsy;
    });
});
