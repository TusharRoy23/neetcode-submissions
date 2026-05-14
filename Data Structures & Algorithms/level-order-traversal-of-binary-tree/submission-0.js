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
     * @return {number[][]}
     */
    levelOrder(root) {
        if (!root) return [];

        const queue = [];
        const result = [];
        queue.push(root);

        while (queue.length > 0) {
            const level = [];
            const qLen = queue.length;

            for (let i = 0; i < qLen; i++) {
                const node = queue.splice(0, 1)[0];
                if (node !== null) {
                    level.push(node.val);
                    if (node.left) queue.push(node.left);
                    if (node.right) queue.push(node.right);
                }
            }
            result.push(level);
        }

        return result;
    }
}
