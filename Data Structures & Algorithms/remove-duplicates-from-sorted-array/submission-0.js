class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    removeDuplicates(nums) {
        let left = 0;
        let right = 0;
        let k = 1;
        while (right < nums.length) {
            if (nums[left] !== nums[right]) {
                [nums[left + 1], nums[right]] = [nums[right], nums[left + 1]];
                left++;
                k++;
            } 
            right++;
        }
        return k;
    }
}
