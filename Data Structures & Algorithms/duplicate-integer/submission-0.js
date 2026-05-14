class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        const map = new Map();

        let i = 0;
        while (i < nums.length) {
            const mapValue = map.get(nums[i]);
            if (mapValue != undefined) return true;

            map.set(nums[i], 1);
            i++;
        }
        return false;
    }
}
