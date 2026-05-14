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
     * @return {boolean}
     */
    isBalanced(root) {
        if (!root) return true;

        const depth = (root) => {
            if (!root) return [0, true];

            const left = depth(root.left);
            if (!left[1]) return [left[0], false];

            const right = depth(root.right);
            if (!right[1]) return [right[0], false];
            
            return [1 + Math.max(left[0], right[0]), Math.abs(right[0] - left[0]) < 2];
        }
        const result = depth(root);

        return result[1];
    }
}
