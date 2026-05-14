class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[][]}
     */
    fourSum(nums, target) {
        const k = 4;
        const n = nums.length;
        const result = [];
        const quadruplet = [];

        if (n < k) return [];
        
        nums.sort((a, b) => a - b);

        const twoSum = (left, right, target) => {
            while (left < right) {
                const sum = nums[left] + nums[right];
                if (sum < target) {
                    left++;
                } else if (sum > target) {
                    right--;
                } else {
                    result.push([...quadruplet, nums[left], nums[right]]);
                    left++;
                    right--;
                    while (left < right && nums[left] === nums[left - 1]) left++;
                    while (left < right && nums[right] === nums[right + 1]) right--;
                }
            }
        }
        
        const helper = (start, k, target) => {
            if (k !== 2) {
                for (let i = start; i < n - k + 1; i++) {
                    if (i != start && nums[i] === nums[i - 1]) continue;

                    quadruplet.push(nums[i]);
                    helper(i + 1, k - 1, target - nums[i]);
                    quadruplet.pop();
                }
            } else {
                twoSum(start, n - 1, target);
            }
            
            return;
        }

        helper(0, k, target);
        return result;
    }
}
