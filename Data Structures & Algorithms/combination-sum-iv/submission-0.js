class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number}
     */
    combinationSum4(nums, target) {
        /*
            Brute force & traverse through all possible paths which is causing time limit exceed.
        */
        // let total = 0;
        // const combine = (sum) => {
        //     if (sum > target) return;

        //     if (sum === target) {
        //         total++;
        //         return;
        //     }
        //     for (const num of nums) {
        //         combine(sum + num);
        //     }
        // }

        /*
            Instead of going each combination, saving the total of each num or sum 
            to stop traversing the repeated branches. Ex. When sum is 3 in the params of combine(),
            storing how many successful path possible to the target.
        */
        const numMap = new Map();
        const combine = (sum) => {
            if (sum > target) return 0;
            if (numMap.get(sum) != undefined) return numMap.get(sum);
            if (sum === target) return 1;

            let sumTotal = 0;
            for (const num of nums) {
                sumTotal += combine(sum + num);;
            }

            numMap.set(sum, sumTotal);
            return numMap.get(sum);
        }

        return combine(0);
    }
}
