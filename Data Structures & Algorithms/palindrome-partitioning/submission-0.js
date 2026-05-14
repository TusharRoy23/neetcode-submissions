class Solution {
    /**
     * @param {string} s
     * @return {string[][]}
     */
    partition(s) {
        const result = [];
        const isValidPalindrom = (left, right) => {
            while (left < right) {
                if (s[left] !== s[right]) {
                    return false;
                }
                left++;
                right--;
            }
            return true;
        }
        const dfs = (i, currList) => {
            if (i >= s.length) {
                result.push([...currList]);
                return;
            }
            for (let j = i; j < s.length; j++) {
                if (isValidPalindrom(i, j)) {
                    currList.push(s.slice(i, j + 1));
                    dfs(j + 1, currList);
                    currList.pop();
                }
            }
        }
        dfs(0, []);
        return result;
    }
}
