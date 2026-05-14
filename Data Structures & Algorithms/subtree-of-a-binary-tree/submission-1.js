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
     * @param {TreeNode} subRoot
     * @return {boolean}
     */
    isSubtree(root, subRoot) {
        const treeMatch = (p, q) => {
            if ((!q && p) || (q && !p)) return false;

            if (!q && !p) return true;
            if (q.val !== p.val) return false;

            const left = treeMatch(p.left, q.left);
            const right = treeMatch(p.right, q.right);

            return left && right;
        }

        const meetPoint = (root) => {
            if (!root) return false;

            if (root.val === subRoot.val) {
                if (treeMatch(root, subRoot)) return true;
            }

            const left = meetPoint(root.left);
            if (left) return left;

            const right = meetPoint(root.right);
            if (right) return right;

            return false;
        }

        return meetPoint(root);
    }
}
