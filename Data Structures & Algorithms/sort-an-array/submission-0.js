class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    sortArray(nums) {
        // quick sort
        const n = nums.length;

        const quickSort = (left, right) => {
            let pivot = nums[right];
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

        const sortArray = (left, right) => {
            if (left >= right) return;

            const pivotPoint = quickSort(left, right);

            sortArray(left, pivotPoint - 1);
            sortArray(pivotPoint + 1, right);
        }

        sortArray(0, n - 1);
        return nums;
    }
}
