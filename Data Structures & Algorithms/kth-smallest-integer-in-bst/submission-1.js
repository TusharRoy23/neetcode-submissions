/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     constructor(val = 0, left = null, right = null) {
 *         this.val = val;
 *         this.left = left;
 *         this.right = right;
 *     }
 * }
 */

class Solution {
    /**
     * @param {TreeNode} root
     * @param {number} k
     * @return {number}
     */
    kthSmallest(root, k) {
        // With extra O(n) Space
        // const nums = [];
        // const findItem = (root) => {
        //     if (!root) return null;

        //     findItem(root.left);
        //     nums.push(root.val);
        //     findItem(root.right);
        // }
        // findItem(root);
        // return nums[k - 1];

        // With extra O(1) Space
        let i = 0;
        let smallest = -1;

        const findItem = (root) => {
            if (!root) return null;

            findItem(root.left);
            i++;
            if (i === k) {
                smallest = root.val;
                return smallest;
            }
            findItem(root.right);
        }
        findItem(root);
        return smallest;
    }
}
