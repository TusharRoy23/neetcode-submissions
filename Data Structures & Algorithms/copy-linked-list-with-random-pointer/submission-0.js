// class Node {
//   constructor(val, next = null, random = null) {
//       this.val = val;
//       this.next = next;
//       this.random = random;
//   }
// }

class Solution {
    /**
     * @param {Node} head
     * @return {Node}
     */
    copyRandomList(head) {
        if (!head) return null;

        const copyNodeMap = new Map();

        let curr = head;
        while (curr) {
            copyNodeMap.set(curr, new Node(curr.val));
            curr = curr.next;
        }

        curr = head;
        while (curr) {
            const copy = copyNodeMap.get(curr);
            copy.next = copyNodeMap.get(curr.next) || null;
            copy.random = copyNodeMap.get(curr.random) || null;
            curr = curr.next;
        }

        return copyNodeMap.get(head);
    }
}
