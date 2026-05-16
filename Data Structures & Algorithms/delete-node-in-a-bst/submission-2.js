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
     * @param {number} key
     * @return {TreeNode}
     */
    deleteNode(root, key) {
        // org tree
        const arrangeTree = (mainNode, leafNode) => {
            if (!mainNode) return leafNode;
            if (!leafNode) return mainNode;
            
            if (mainNode.val > leafNode.val) {
                mainNode.left = arrangeTree(mainNode.left, leafNode);
            } else {
                mainNode.right = arrangeTree(mainNode.right, leafNode);
            }
            
            return mainNode;
        }
        // find the key
        const findNode = (node) => {
            if (!node) return;

            if (node && key < node.val) {
                // search left
                const retNode = findNode(node.left);
                if (node.left && node.left.val === key) {
                    node.left = retNode;
                }
                return node;
            } else if (node && key > node.val) {
                // search right
                const retNode = findNode(node.right);
                if (node.right && node.right.val === key) {
                    node.right = retNode;
                }
                return node
            } else {
                // add left sub-tree
                return arrangeTree(node.left, node.right);
            }
        }
        return findNode(root);
    }
}
