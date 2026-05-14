class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums) {
        const output = [];
    let prefix = 1;
    let postfix = 1;

    let i = 0;
    // prefix
    while (i < nums.length) {
        output.push(prefix);
        prefix *= nums[i];
        i++;
    }

    // postfix
    i = nums.length - 1;
    while (i > -1) {
        output[i] *= postfix;
        postfix *= nums[i];
        i--;
    }

    return output;
    }
}
