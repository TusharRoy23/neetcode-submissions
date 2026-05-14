class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    subsetsWithDup(nums) {
        const result = [];
        nums = nums.sort((a, b) => a - b);

        const dfs = (i, currList) => {
            if (i === nums.length) {
                result.push([...currList]);
                return;
            }

            currList.push(nums[i]);
            dfs(i + 1, currList);
            currList.pop();
            while (i > -1 && nums[i] === nums[i + 1]) {
                i++;
            }
            dfs(i + 1, currList);
        }

        dfs(0, []);

        return result;
    }
}
