class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    permute(nums) {
        const result = [];
        const pick = new Array(nums.length).fill(false);


        const backtrack = (perm, pick) => {
            if (perm.length === nums.length) {
                result.push([...perm]);
                return;
            }

            for (let i = 0; i < nums.length; i++) {
                if (!pick[i]) {
                    perm.push(nums[i]);
                    pick[i] = true;
                    backtrack(perm, pick);
                    perm.pop();
                    pick[i] = false;
                }
            }
        }

        backtrack([], pick);
        return result;
    }
}
