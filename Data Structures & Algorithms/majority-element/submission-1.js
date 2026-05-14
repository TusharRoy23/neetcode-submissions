class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    majorityElement(nums) {
        const map = new Map();
        const n = nums.length;
        const majority = Math.floor(n / 2);

        let i = 0;
        while (i < n) {
            const mapValue = map.get(nums[i]); 
            if (mapValue != undefined) {
                const newValue = mapValue + 1;
                map.set(nums[i], newValue);
                if (newValue > majority) return nums[i];
            } else {
                map.set(nums[i], 1);
            }
            i++;
        }
        return nums[0]
    }
}
