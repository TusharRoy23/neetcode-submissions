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
     * @return {number[]}
     */
    preorderTraversal(root) {
        const arr = [];
        const traverse = (node) => {
            if (!node) return;

            arr.push(node.val);
            traverse(node.left);
            traverse(node.right);
        }
        traverse(root);

        return arr;
    }
}
