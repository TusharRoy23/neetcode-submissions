class Solution {
    /**
     * @param {number[]} coins
     * @param {number} amount
     * @return {number}
     */
    coinChange(coins, amount) {
        const dp = new Array(amount+1).fill(amount+1);
        dp[0] = 0;
        for (let i = 1; i < amount + 1; i++) {
            coins.forEach(coin => {
                if (i - coin >= 0) {
                    dp[i] = Math.min(dp[i], 1 + dp[i - coin]);
                }
            })
        }
        return dp[amount] != amount + 1 ? dp[amount] : -1;
    }
}
