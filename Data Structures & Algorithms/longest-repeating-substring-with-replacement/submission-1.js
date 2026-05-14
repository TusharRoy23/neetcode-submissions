class Solution {
    /**
     * @param {string} s
     * @param {number} k
     * @return {number}
     */
    characterReplacement(s, k) {
        let l = 0;
        let r = 0;
        let map = new Map();
        let mf = 0;
        let mc = 0;

        while (r < s.length) {
            const windowLen = r - l + 1;
            const mapValue = map.get(s[r]);
            map.set(s[r], mapValue != undefined ? mapValue + 1 : 1);
            mf = Math.max(mf, map.get(s[r]));

            if (windowLen - mf > k) {
                map.set(s[l], map.get(s[l]) - 1);
                mf = Math.max(map.get(s[l]), map.get(s[r]));
                l++;
            } else {
                mc = Math.max(mc, windowLen);
            }
            r++;
        }
        return mc;
    }
}
