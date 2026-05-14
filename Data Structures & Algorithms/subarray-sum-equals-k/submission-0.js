class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number}
     */
    subarraySum(nums, k) {
        // [5,-2,3,-3] k = 3
        let left = 0;
        let sum = 0;
        let count = 0;
        const map = new Map();
        map.set(0, 1);

        while (left < nums.length) {
            sum += nums[left];
            const diff = sum - k;
            const value = map.get(diff) || 0;
            count += value;
            map.set(sum, (map.get(sum) || 0) + 1);
            left++;
        }
        
        return count;
    }
}
