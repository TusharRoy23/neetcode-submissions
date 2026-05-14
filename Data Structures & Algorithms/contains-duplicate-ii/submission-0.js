class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {boolean}
     */
    containsNearbyDuplicate(nums, k) {
        const map = new Map();
        let left = 0;

        while (left < nums.length) {
            const value = map.get(nums[left]);
            if (value != undefined && (left - value) <= k) return true;

            map.set(nums[left], left);
            left++;
        }
        return false;
    }
}
