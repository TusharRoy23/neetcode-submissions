class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number}
     */
    searchInsert(nums, target) {
        let left = 0;
        let right = nums.length - 1;
        let mid = 0;

        while (left <= right) {
            mid = left + Math.floor((right - left)/2);
            console.log(mid)
            if (nums[mid] === target) {
                return mid;
            } else if (nums[mid] > target) {
                right = mid - 1;
            } else {
                left = mid + 1;
            }
        }
        console.log('lastmid: ', mid)
        if (nums[mid] > target) {
            return mid;
        } else {
            return mid + 1;
        }
    }
}
