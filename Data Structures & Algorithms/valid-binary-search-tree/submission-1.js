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
    isValidBST(root) {
        const isValid = (root, min, max) => {
            if (root.val <= min || root.val >= max) return false;

            if (root.left && !isValid(root.left, min, root.val)) return false;
            if (root.right && !isValid(root.right, root.val, max)) return false;

            return true;
        }
        return isValid(root, -Infinity, Infinity);
    }
}
