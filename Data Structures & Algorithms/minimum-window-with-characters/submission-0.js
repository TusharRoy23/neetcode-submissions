class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {string}
     */
    minWindow(s, t) {

        const helper = (idx, tMap, tmpStr) => {
            if (tMap.size === 0) return tmpStr;
            if (idx === s.length) return "";
            

            if (tMap.get(s[idx]) != undefined) {
                tMap.set(s[idx], tMap.get(s[idx]) - 1);
                if (tMap.get(s[idx]) === 0){
                    tMap.delete(s[idx])
                }
            }
            tmpStr += s[idx];

            return helper(idx + 1, tMap, tmpStr);
        }

        const tMap = new Map();
        let i = 0;

        while (i < t.length) {
            tMap.set(t[i], tMap.get(t[i]) ? tMap.get(t[i]) + 1 : 1);
            i++;
        }

        i = 0;
        let result = '';
        while (i < s.length) {
            if (tMap.get(s[i])) {
                const value = helper(i, new Map(tMap), '');
                if (value.length === 0) return result;
                if (result.length === 0 || value.length < result.length) {
                    result = value;
                }
            }
            i++;
        }
        return result;
    }
}
