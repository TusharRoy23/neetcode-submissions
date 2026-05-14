class Solution {
    /**
     * @param {string[]} words
     * @return {string[]}
     */
    stringMatching(words) {
        const result = new Set();
        const matchStr = (baseStr, subStr) => {
            if (baseStr.length < subStr.length) {
                [baseStr, subStr] = [subStr, baseStr]
            }
            let left = 0;
            let right = subStr.length - 1;

            while (right < baseStr.length) {
                if (baseStr.slice(left, right + 1) === subStr) {
                    result.add(subStr);
                    break;
                } else {
                    left++;
                }
                right++;
            }
            return;
        }

        for (let i = 0; i < words.length; i++) {
            for (let j = i + 1; j < words.length; j++) {
                matchStr(words[i], words[j]);
            }
        }
        
        return [...result];
    }
}
