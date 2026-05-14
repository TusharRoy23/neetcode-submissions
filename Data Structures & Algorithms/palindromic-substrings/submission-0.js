class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    countSubstrings(s) {
        let count = 0;
        const n = s.length;

        const palindrom = (left, right) => {
            while (left >= 0 && right < n && s[left] === s[right]) {
                count++;
                left--;
                right++;
            }
            
        }

        for (let i = 0; i < n; i++) {
            // ODD
            palindrom(i, i);

            // EVEN
            palindrom(i, i + 1)
        }

        return count;
    }
}
