class Solution {
    /**
     * @param {number} n
     * @return {string[]}
     */
    generateParenthesis(n) {
        const result = [];

        const buildParen = (str, open, close) => {
            if (str && str.length === n * 2) {
                result.push(str);
                return;
            }

            if (open < n) {
                buildParen(str + '(', open + 1, close);
            }
            if (close < open) {
                buildParen(str + ')', open, close + 1);
            }
            
            
        }

        buildParen('', 0, 0);
        return result;
    }
}
