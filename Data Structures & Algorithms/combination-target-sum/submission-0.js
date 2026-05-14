class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @returns {number[][]}
     */
    combinationSum(nums, target) {
        const result = [];
        const dfs = (i, currList, sum) => {
            if (sum === target) {
                result.push([...currList]);
                return;
            }

            for (let j = i; j < nums.length; j++) {
                if (sum > target) return;

                currList.push(nums[j]);
                dfs(j, currList, sum + nums[j]);
                currList.pop();
            }
        }

        dfs(0, [], 0);

        return result;
    }
}
