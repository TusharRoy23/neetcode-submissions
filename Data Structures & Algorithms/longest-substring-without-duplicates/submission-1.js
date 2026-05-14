class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLongestSubstring(s) {
        const position = new Map();
        let left = 0;
        let right = 0;
        let max = 0;

        while (right < s.length) {
            const mapValue = position.get(s[right]);
            if (mapValue != undefined && left <= mapValue) {
                left = mapValue + 1;
            }
            position.set(s[right], right);
            max = Math.max(right - left + 1, max);
            right++;
        }

        return max;
    }
}
