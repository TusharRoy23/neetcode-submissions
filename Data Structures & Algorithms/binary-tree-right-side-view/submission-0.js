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
    rightSideView(root) {
        if (!root) return [];

        const result = [];
        const queue = [root];

        while (queue.length > 0) {
            const qLen = queue.length;
            const level = [];
            let i = 0;
            while (i < qLen) {
                const node = queue.splice(0, 1)[0];
                if (node != null) {
                    level.push(node.val);
                    if (node.left != null) queue.push(node.left);
                    if (node.right != null) queue.push(node.right);
                }
                i++;
            }

            result.push(level.pop());
        }
        return result;
    }
}
