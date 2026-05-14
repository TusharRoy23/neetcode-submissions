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
     * @return {void}
     */
    reorderList(head) {
        let slow = head;
        let fast = head.next;

        while (fast && fast.next) {
            slow = slow.next;
            fast = fast.next.next;
        }
        let curr = slow.next;
        let prev = slow.next = null;

        while (curr) {
            const tmp = curr.next;
            curr.next = prev;
            prev = curr;
            curr = tmp;
        }

        console.log(prev);
        
        // merge 2 list
        while (prev) {
            const headNxt = head.next;
            
            head = head.next = new ListNode(prev.val);
            head = head.next = headNxt;
            
            prev = prev.next;
        }
    }
}
