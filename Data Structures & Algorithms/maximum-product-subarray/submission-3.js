class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    maxProduct(nums) {
        if (nums.length === 1) return nums[0];

        let max = 1;
        let min = 1;
        let result = 0;
        for (let i = 0; i < nums.length; i++) {
            if (nums[i] === 0) {
                max = 1;
                min = 1;
                continue;
            }
            const tmpMax = max * nums[i];
            max = Math.max(nums[i], tmpMax, nums[i] * min);
            min = Math.min(tmpMax, nums[i] * min, nums[i]);
            result = Math.max(result, max);
        }
        return result;
    }
}
