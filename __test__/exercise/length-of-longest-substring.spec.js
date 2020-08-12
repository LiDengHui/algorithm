import {
    lengthOfLongestSubstring1,
    lengthOfLongestSubstring2,
} from "@/exercise/length-of-longest-substring";

describe("length-of-longest-substring", () => {
    [lengthOfLongestSubstring1, lengthOfLongestSubstring2].forEach(
        (lengthOfLongestSubstring) => {
            it("abcabcbb", () => {
                expect(lengthOfLongestSubstring("abcabcbb")).toBe(3);
            });

            it("bbbbb", () => {
                expect(lengthOfLongestSubstring("bbbbb")).toBe(1);
            });
            it("pwwkew", () => {
                expect(lengthOfLongestSubstring("pwwkew")).toBe(3);
            });
        }
    );
});
