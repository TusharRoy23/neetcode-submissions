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
     * @return {number}
     */
    diameterOfBinaryTree(root) {
        const res = [0];

        const diameter = (root) => {
            if (!root) return 0;

            const left = diameter(root.left);
            const right = diameter(root.right);
            res[0] = Math.max(res[0], left + right);
            return 1 + Math.max(left, right);
        }

        diameter(root);
        return res[0]
    }
}
