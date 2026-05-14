class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number}
     */
    findKthLargest(nums, k) {
        // 2 3 1 5 4
        k = nums.length - k;

        const quickSelection = (left, right) => {
            const pivot = nums[right];
            let pointer = left;
            for (let i = left; i < right; i++) {
                if (pivot >= nums[i]) {
                    [nums[pointer], nums[i]] = [nums[i], nums[pointer]];
                    pointer++;
                }
            }
            [nums[pointer], nums[right]] = [nums[right], nums[pointer]];
            if (k > pointer) {
                return quickSelection(pointer + 1, right);
            } else if (k < pointer) {
                return quickSelection(0, pointer - 1);
            } else {
                return nums[pointer];
            }
        }

        return quickSelection(0, nums.length - 1);
    }
}
