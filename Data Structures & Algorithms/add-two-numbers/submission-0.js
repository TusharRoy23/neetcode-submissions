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
     * @param {ListNode} l1
     * @param {ListNode} l2
     * @return {ListNode}
     */
    addTwoNumbers(l1, l2) {
        let newNode = new ListNode(0);
        const result = newNode;
        let remainder = 0;

        while (l1 || l2) {
            let add = 0;
            if (l1) {
                add = l1.val;
                l1 = l1.next;
            }

            if (l2) {
                add += l2.val;
                l2 = l2.next;
            }

            add += remainder;
            let lastDigit = add % 10;
            remainder = Math.floor(add/10);

            newNode = newNode.next = new ListNode(lastDigit);
        }
        if (remainder) newNode = newNode.next = new ListNode(remainder);
        
        return result.next;
    }
}
