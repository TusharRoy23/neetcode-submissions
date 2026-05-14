class Solution {
    /**
     * @param {string} word1
     * @param {string} word2
     * @return {string}
     */
    mergeAlternately(word1, word2) {
        let left = 0;
        let mergedStr = "";
        const minLen = Math.min(word1.length, word2.length);

        while (left < minLen) {
            mergedStr += word1[left] + word2[left];
            left++;
        }

        mergedStr += word1.slice(left) + word2.slice(left);
        return mergedStr;
    }
}
