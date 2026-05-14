class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    maxArea(heights) {
        let n = heights.length;
        let max = 0;
        let left = 0;
        let right = n - 1;

        while (left < right) {
            const area = (right - left) * Math.min(heights[left], heights[right]);
            max = Math.max(max, area);

            if (heights[left] <= heights[right]) {
                left++;
            } else {
                right--;
            }
        }

        return max;
    }
}
