class Solution {
    /**
     * @param {number} target
     * @param {number[]} nums
     * @return {number}
     */
    minSubArrayLen(target, nums) {
        let minLen = 0;
        let left = 0;
        let right = 0;
        let sum = 0;

        while (right < nums.length) {
            sum += nums[right];
            while (sum >= target) {
                const length = right - left + 1;
                minLen = minLen == 0 ? length : Math.min(minLen, length);
                sum -= nums[left];
                left++;
            }
            right++;
        }
        return minLen;
    }
}
