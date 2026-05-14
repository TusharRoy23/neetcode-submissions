class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    threeSum(nums) {
        const result = [];
        nums = nums.sort((a, b) => a -b);
        for (let i = 0; i < nums.length; i++) {
            if (i > 0 && nums[i] === nums[i - 1]) {
                continue;
            }
            const target = nums[i] < 0 ? Math.abs(nums[i]) : (0 - nums[i]);

            // perform 2 sum
            const arr = nums.slice(i+1);
            let left = 0;
            let right = arr.length - 1;

            while (left < right) {
                if (left > 0 && arr[left] === arr[left - 1]) {
                    left++;
                    continue;
                }
                if (right < arr.length - 1 && arr[right] === arr[right + 1]) {
                    right--;
                    continue;
                }

                const sum = arr[right] + arr[left];
                if (sum === target) {
                    result.push([nums[i], arr[left], arr[right]]);
                    left++;
                    right--;
                } else if (sum > target) {
                    right--;
                } else {
                    left++;
                }
            }
        }

        return result;
    }
}
