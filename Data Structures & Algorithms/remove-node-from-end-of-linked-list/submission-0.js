/**
 * Definition for singly-linked list.
 * class ListNode {
 *     constructor(val = 0, next = null) {
 *         this.val = val;
 *         this.next = next;
 *     }
 * }
 */

class Solution {
    /**
     * @param {ListNode} head
     * @param {number} n
     * @return {ListNode}
     */
    removeNthFromEnd(head, n) {
        let newNode = new ListNode(0, head);
        let tHead = newNode;
        let totalNodes = 0;
        while (head) {
            totalNodes++;
            head = head.next;
        }
        n = totalNodes - n;
        

        while (n > 0) {
            newNode = newNode.next;
            n--;
        }
        if (newNode.next) {
            newNode.next = newNode.next.next;
        }
        
        return tHead.next;
    }
}
