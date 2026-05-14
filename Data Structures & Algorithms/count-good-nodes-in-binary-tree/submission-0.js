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
    goodNodes(root) {
        let count = 0;
        const countGoodNodes = (root, maxVal) => {
            if (!root) return 0;

            if (root.val >= maxVal) {
                count++;
            }
            maxVal = Math.max(root.val, maxVal);
            
            countGoodNodes(root.left, maxVal);
            countGoodNodes(root.right, maxVal);
            return 0;
        }

        countGoodNodes(root, root.val);
        return count;
    }
}
