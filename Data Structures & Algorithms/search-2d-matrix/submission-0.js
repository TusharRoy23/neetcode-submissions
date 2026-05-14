class Solution {
    /**
     * @param {number[][]} matrix
     * @param {number} target
     * @return {boolean}
     */
    searchMatrix(matrix, target) {
        const ROW = matrix.length;
        const COL = matrix[0].length;

        const binarySearch = (nums) => {
            let l = 0;
            let r = nums.length - 1;

            while (l <= r) {
                const mid = l + Math.floor((r - l)/2);
                if (nums[mid] < target) {
                    l = mid + 1;
                } else if (nums[mid] > target) {
                    r = mid - 1;
                } else {
                    return true;
                }
            }
            return false;
        }

        for (let row = 0; row < ROW; row++) {
            if (matrix[row][0] <= target && matrix[row][COL - 1] >= target) {
                return binarySearch(matrix[row]);
            }
            
        }
        return false;
    }
}
