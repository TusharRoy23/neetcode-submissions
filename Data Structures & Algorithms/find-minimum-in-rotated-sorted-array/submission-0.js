class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    findMin(nums) {
        let left = 0;
        let right = nums.length - 1;
        let min = nums[0];

        while (left <= right) {
            if (nums[left] <= nums[right]) {
                return Math.min(min, nums[left]);
            }
            const mid = left + Math.floor((right - left)/2);
            min = Math.min(min, nums[mid]);
            
            if (nums[mid] >= nums[left]) {
                left = mid + 1;
            } else {
                right = mid - 1;
            }
        }

        return min;
    }
}
