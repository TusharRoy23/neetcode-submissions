class Solution {
    /**
     * @param {string[]} words
     * @return {boolean}
     */
    validWordSquare(words) {
        let i = 0;
        const wLen = words.length;

        while (i < wLen) {
            const base = words[i].slice(i);

            let str = base.length ? base[0] : '';
            let j = i + 1;
            while (j < wLen) {
                if (words[j][i] != undefined) {
                    str += words[j][i]
                }
                j++;
            }
            
            if (str != base) return false;
            i++;
        }
        return true;
    }
}
