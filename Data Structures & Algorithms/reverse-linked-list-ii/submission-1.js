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
     * @param {number} left
     * @param {number} right
     * @return {ListNode}
     */
    reverseBetween(head, left, right) {
        let newNode = new ListNode(0, head);
        let i = 0;
        let leftPrev = newNode;
        let curr = head;
        // solve left part
        while (i < left - 1) {
            leftPrev = curr;
            curr = curr.next;
            i++
        }
        // reverse the linkedlist
        let prev = null;
        i = 0;
        while (i < right - left + 1) {
            let tmpN = curr.next;
            curr.next = prev;
            prev = curr;
            curr = tmpN;
            i++;
        }

        // solve right part
        leftPrev.next.next = curr;
        leftPrev.next = prev;

        return newNode.next;
    }
}
