class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices) {
        let l = 0;
        let r = 1;
        let profit = 0;

        while (r < prices.length) {
            profit = Math.max(profit, prices[r] - prices[l]);
            if (prices[l] > prices[r]) {
                l = r;
            }
            r++;
        }
        return profit;
    }
}
