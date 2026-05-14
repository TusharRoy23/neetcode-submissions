class Solution {
    /**
     * @param {number[]} weights
     * @param {number} days
     * @return {number}
     */
    shipWithinDays(weights, days) {
        let left = Math.max(...weights);
        let right = weights.reduce((acc, curr) => acc + curr, 0);
        let res = Infinity;

        const findMinCapacity = (target) => {
            let i = 0;
            let daysCount = 1;
            let capacity = target;

            while (i < weights.length) {
                if (capacity - weights[i] < 0) {
                    daysCount++;
                    if (daysCount > days) {
                        return false;
                    }
                    capacity = target;
                }
                capacity -= weights[i];
                i++;
            }
            return true;
        }

        while (left <= right) {
            const mid = left + Math.floor((right - left) / 2);
            const daysCount = findMinCapacity(mid);
            if (daysCount) {
                // go left to take min weight
                res = Math.min(mid, res);
                right = mid - 1;
            } else {
                // go right
                left = mid + 1;
            }
        }
        return res;
    }
}
