class Solution {
    /**
     * @param {string} s1
     * @param {string} s2
     * @return {boolean}
     */
    checkInclusion(s1, s2) {
        const map = new Map();
        let i = 0;

        while (i < s1.length) {
            map.set(s1[i], (map.get(s1[i]) || 0) + 1);
            i++;
        }

        let left = 0;
        let right = 0;

        const checkSubStr = (copyMap, s3) => {
            if (s3.length < s1.length) return false;
            
            let i = 0;
            while (i < s3.length) {
                if (!copyMap.get(s3[i])) return false;
                copyMap.set(s3[i], copyMap.get(s3[i]) - 1);

                i++;
            }
            return true;
        }

        while (right < s2.length) {
            right = left + s1.length;
            if (checkSubStr(new Map(map), s2.slice(left, right))) return true;
            left++;
        }
        
        return false;
    }
}
