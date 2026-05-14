class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number}
     */
    search(nums, target) {
        // find pivot
        let left = 0;
        let right = nums.length - 1;

        while (left < right) {
            const mid = left + Math.floor((right - left)/2);
            if (nums[mid] > nums[right]) {
                left = mid + 1;
            } else {
                right = mid;
            }
        }

        // binary search
        const pivot = left;
        left = 0;
        right = nums.length - 1;

        if (target >= nums[pivot] && target <= nums[right]) {
            left = pivot;
        } else {
            right = pivot - 1;
        }

        while (left <= right) {
            const mid = left + Math.floor((right - left)/2);
            if (nums[mid] === target) {
                return mid;
            } else if (nums[mid] > target) {
                right = mid - 1;
            } else {
                left = mid + 1;
            }
        }

        return -1;
    }
}
