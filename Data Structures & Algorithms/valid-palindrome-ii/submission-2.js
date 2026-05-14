class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    validPalindrome(s) {
        let left = 0;
        let right = s.length - 1;

        const isPalindrom = (left, right) => {
            while (left < right) {
                if (s[left] != s[right]) return false;
                left++;
                right--;
            }
            return true;
        }

        while (left < right) {
            if (s[left] !== s[right]) {
                return isPalindrom(left, right-1) || isPalindrom(left + 1, right);
            }
            left++;
            right--;
        }
        return true;
    }
}
