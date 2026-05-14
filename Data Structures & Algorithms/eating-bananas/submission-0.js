class Solution {
    /**
     * @param {number[]} piles
     * @param {number} h
     * @return {number}
     */
    minEatingSpeed(piles, h) {
        let left = 1;
        let right = Math.max(...piles);
        let res = Infinity;
        
        while (left <= right) {
            // binary search
            const k = left + Math.floor((right - left) / 2);
            let totalTime = 0;
            for (let i = 0; i < piles.length; i++) {
                totalTime += Math.ceil(piles[i]/k);
            }
            if (totalTime > h) {
                left = k + 1;
            } else {
                res = k;
                right = k - 1;
            }
        }
        return res;
    }
}
