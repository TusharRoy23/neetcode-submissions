class Solution {
    /**
     * @param {number[]} nums
     * @return {void} Do not return anything, modify nums in-place instead.
     */
    sortColors(nums) {
        const getPivot = (left, right) => {
            const pivot = nums[right];
            let pointer = left;
            for (let i = left; i < right; i++) {
                if (pivot >= nums[i]) {
                    [nums[pointer], nums[i]] = [nums[i], nums[pointer]];
                    pointer++;
                }
            }
            [nums[pointer], nums[right]] = [nums[right], nums[pointer]];
            return pointer;
        }

        const quickSort = (left, right) => {
            if (left >= right) return;
            const pivot = getPivot(left, right);
            quickSort(left, pivot - 1);
            quickSort(pivot + 1, right);
        }

        quickSort(0, nums.length - 1);
    }
}
