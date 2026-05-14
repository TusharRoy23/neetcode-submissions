class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    canPartition(nums) {
        const target = nums.reduce((acc, curr) => acc + curr, 0);
        if (target % 2 != 0) return false;

        const IsEqual = (i, target) => {
            if (i == nums.length) return target === 0;
            if (target < 0) return false;

            const withFullTarget = IsEqual(i + 1, target);
            if (withFullTarget) return true;

            return IsEqual(i + 1, target - nums[i]);
        }

        return IsEqual(0, target/2);
    }
}
