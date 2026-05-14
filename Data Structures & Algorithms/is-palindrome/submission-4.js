class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {
        if (s.length === 0 || s.length === 1) return true;

        const isValidChar = (char) => {
            char = char.toLowerCase();
            return (char >= 'a' && char <= 'z') || (char >= '0' && char <= '9');
        }

        let left = 0;
        let right = s.length - 1;
        s = s.trim();

        while (left < right) {
            if (!isValidChar(s[left])) {
                left++;
                continue;
            }

            if (!isValidChar(s[right])) {
                right--;
                continue;
            }

            if (s[left].toLocaleLowerCase() !== s[right].toLocaleLowerCase()) {
                return false;
            };

            left++;
            right--;
        }
        return true;;
    }
}
