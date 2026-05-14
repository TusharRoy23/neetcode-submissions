class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    lengthOfLIS(nums) {
        const map = new Array(nums.length).fill(-1);
        const subseq = (start) => {
            if (map[start] != -1) return map[start];

            let LIS = 1;
            for (let i = start + 1; i < nums.length; i++) {
                if (nums[start] < nums[i]) {
                    LIS = Math.max(LIS, 1 + subseq(i));
                }
            }
            map[start] = LIS;
            return LIS;
        }

        let max = 0;
        for (let i = 0; i < nums.length; i++) {
            max = Math.max(max, subseq(i));
        }
        return max;
    }
}
