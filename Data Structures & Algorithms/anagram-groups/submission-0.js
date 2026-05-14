class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        const map = new Map();

        for (let str of strs) {
            const arr = new Array(26).fill(0);
            for (let s of str) {
                const a = 'z'.charCodeAt(0);
                const b = s.charCodeAt(0);
                const index = a - b;
                arr[index] += 1 
            }
            const key = arr.join('-')
            const mapValue = map.get(key);
            map.set(key, mapValue != undefined ? [...mapValue, str] : [str])
        }

        return [...map.values()];
    }
}
