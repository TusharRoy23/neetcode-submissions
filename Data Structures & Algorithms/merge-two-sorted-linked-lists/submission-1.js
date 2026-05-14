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
     * @param {ListNode} list1
     * @param {ListNode} list2
     * @return {ListNode}
     */
    mergeTwoLists(list1, list2) {
        let node = new ListNode(0);
        let newHead = node;

        while (list1 || list2) {
            let l1Val = null;
            if (list1) {
                l1Val = list1.val;
            }

            let l2Val = null;
            if (list2) {
                l2Val = list2.val;
            }
            let value = l1Val || l2Val;
            if (l1Val != null && l2Val != null) {
                value = l1Val > l2Val ? l2Val : l1Val;
                if (l1Val > l2Val) {
                    list2 = list2.next;
                } else {
                    list1 = list1.next;
                }
            } else if (list1) {
                list1 = list1.next;
            } else {
                list2 = list2.next;
            }

            newHead.next = new ListNode(value);
            newHead = newHead.next;
        }
        return node.next;
    }
}
