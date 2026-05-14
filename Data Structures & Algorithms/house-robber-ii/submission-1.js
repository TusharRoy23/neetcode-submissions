class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    rob(nums) {
        if (nums.length === 1) return nums[0];
        if (nums.length === 2) return Math.max(nums[0], nums[1]);

        const helper = (nums) => {
            const n = nums.length;
            let i = n - 3;
            let lastBig = nums[n - 1];
            nums.push(0);

            while (i > -1) {
                lastBig = Math.max(nums[i + 2], nums[i + 3]);
                nums[i] += lastBig;
                i--;
            }

            return Math.max(nums[0], nums[1]);
        }


        const exceptFirstHouse = helper(nums.slice(1));
        const exceptLastHouse = helper(nums.slice(0, nums.length - 1));

        return Math.max(exceptFirstHouse, exceptLastHouse);
    }
}
