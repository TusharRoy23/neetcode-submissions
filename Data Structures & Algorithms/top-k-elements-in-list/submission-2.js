class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        const map = new Map();
        const bucket = new Array(nums.length).fill([]);

        let i = 0;
        while (i < nums.length) {
            const value = map.get(nums[i]);
            map.set(nums[i], value != undefined ? value + 1 : 1);
            i++;
        }

        map.forEach((value, key) => {
            bucket[value - 1] = [...bucket[value - 1], key];
        });

        const result = [];
        let j = bucket.length - 1;

        while (k > 0 && j > -1) {
            if (bucket[j].length) {
                result.push(...bucket[j]);
                k -= bucket[j].length;
            }
            j--;
        }
        
        return result;
    }
}
