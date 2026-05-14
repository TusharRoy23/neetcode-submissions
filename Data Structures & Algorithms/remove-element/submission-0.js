class Solution {
    /**
     * @param {number[]} nums
     * @param {number} val
     * @return {number}
     */
    removeElement(nums, val) {
        let k = 0;
        let left = 0;
        let right = 0;

        while (right < nums.length) {
            if (nums[right] === val) {
                right++;
            } else if (nums[left] === val && nums[right] != val) {
                [nums[left], nums[right]] = [nums[right], nums[left]];
                left++;
                k++;
            } else {
                left++;
                right++;
                k++;
            }
        }
        return k;
    }
}
