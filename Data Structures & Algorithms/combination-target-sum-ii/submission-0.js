class Solution {
    /**
     * @param {number[]} candidates
     * @param {number} target
     * @return {number[][]}
     */
    combinationSum2(candidates, target) {
        const result = [];
        candidates = candidates.sort((a, b) => a - b);
        const dfs = (i, currList, sum) => {
            

            if (sum === target) {
                result.push([...currList]);
                return;
            }

            for (let j = i; j < candidates.length; j++) {
                if (j > i && candidates[j] === candidates[j - 1]) {
                    continue;
                }
                if (j >= candidates.length || sum > target) break;

                currList.push(candidates[j]);
                dfs(j + 1, currList, sum + candidates[j]);
                currList.pop();
            }
        }

        dfs(0, [], 0);

        return result;
    }
}
