class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {void} Do not return anything, modify nums in-place instead.
     */
    rotate(nums, k) {
        const doReverse = (left, right) => {
            while (left < right) {
                [nums[left], nums[right]] = [nums[right], nums[left]];
                left++;
                right--;
            }
        }

        const n = nums.length;
        k = k % n;
        const pointer = n - k;
        // Left Side Reverse
        doReverse(0, pointer - 1);
        // Right Side Reverse
        doReverse(pointer, n - 1);
        // Full reverse
        doReverse(0, n - 1);
    }
}
