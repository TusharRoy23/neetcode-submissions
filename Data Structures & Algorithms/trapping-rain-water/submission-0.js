class Solution {
    /**
     * @param {number[]} height
     * @return {number}
     */
    trap(height) {
        /*
            1. Set up MaxL & MaxR.
            2. 
        */
        let left = 0;
        let right = height.length - 1;
        let maxLeft = height[left];
        let maxRight = height[right];
        let result = 0;

        while (left < right) {
            if (maxLeft <= maxRight) {
                left++
                const water = maxLeft - height[left];
                result += water < 0 ? 0 : water;
                maxLeft = Math.max(maxLeft, height[left]);
            } else {
                right--;
                const water = maxRight - height[right];
                result += water < 0 ? 0 : water;
                maxRight = Math.max(maxRight, height[right]);
            }
        }
        return result;
    }
}
