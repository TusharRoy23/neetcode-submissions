class Solution {
    /**
     * @param {string} s
     * @return {string}
     */
    longestPalindrome(s) {
        // abbbbb
        // aaaaab
        // abbbba
        let longestStr = "";
        let longestStrLen = 0;
        let n = s.length;

        const expand = (left, right) => {
            while (left >= 0 && right < n && s[left] === s[right]) {
                if (right - left + 1 > longestStrLen) {
                    longestStrLen = right - left + 1;
                    longestStr = s.slice(left, right + 1);
                }
                left--;
                right++;
            }
        }

        for (let i = 0; i < s.length; i++) {
            //For ODD
            expand(i, i);

            //For EVEN
            expand(i, i + 1);
        }
        return longestStr;
    }
}
