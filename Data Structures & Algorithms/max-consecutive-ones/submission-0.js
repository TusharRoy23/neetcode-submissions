class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    findMaxConsecutiveOnes(nums) {
        let i = 0;
        let count = 0;
        let max = 0;

        while (i < nums.length) {
            if (nums[i] === 0) {
                max = Math.max(count, max);
                count = 0;
            } else {
                count++;
            }

            i++;
        }

        return Math.max(count, max);
    }
}
