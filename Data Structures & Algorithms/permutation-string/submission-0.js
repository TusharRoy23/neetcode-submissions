class Solution {
    /**
     * @param {string} s1
     * @param {string} s2
     * @return {boolean}
     */
    checkInclusion(s1, s2) {
        if (s1.length > s2.length) return false;

        let l = 0;
        let r = 0;
        let map = new Map();

        let i = 0;
        while (i < s1.length) {
            const mapValue = map.get(s1[i]);
            map.set(s1[i], mapValue != undefined ? mapValue + 1 : 1);

            i++;
        }

        const checkSubStr = (s1Map, s2) => {
            let i = 0;
            while (i < s2.length) {
                if (!s1Map.get(s2[i])) return false;
                const value = s1Map.get(s2[i]);
                s1Map.set(s2[i], value - 1);
                if (s1Map.get(s2[i]) === 0) {
                    s1Map.delete(s2[i]);
                }
                i++;
            }
            return s1Map.size === 0;
        }

        while (r < s2.length) {
            r = l + s1.length;
            if (checkSubStr(new Map([...map]), s2.slice(l, r))) {
                return true;
            }
            l++;
        }

        return false;
    }
}
