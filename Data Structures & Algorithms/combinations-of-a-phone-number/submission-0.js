class Solution {
    /**
     * @param {string} digits
     * @return {string[]}
     */
    letterCombinations(digits) {
        if (digits.length === 0) return [];
        
        const map = {
            "2": "abc",
            "3": "def",
            "4": "ghi",
            "5": "jkl",
            "6": "mno",
            "7": "pqrs",
            "8": "tuv",
            "9": "wxyz"
        }

        const result = [];
        const combine = (digitIdx, str) => {
            if (digitIdx >= digits.length) {
                result.push(str);
                return;
            }

            const text = map[digits[digitIdx]];

            for (let i = 0; i < text.length; i++) {
                combine(digitIdx + 1, `${str}${text[i]}`);
            }
        }
        combine(0, '');
        return result;
    }
}
