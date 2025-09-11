// 203. Remove Linked List Elements
// Given the head of a linked list and an integer val, remove all the nodes of the linked list that have Node.val == val, 
// and return the new head.

// Approach:
// 1. Create a sentinel (dummy) node that points to the head. 
//    - This handles edge cases where the head itself needs to be removed.
// 2. Use a pointer (prev) to traverse the list.
// 3. If prev.next.val == val → skip that node (prev.next = prev.next.next).
// 4. Else → move prev forward.
// 5. Return sentinel.next as the new head.

// Example:
// Input:  [1,2,6,3,4,5,6], val = 6
// Process: remove 6 → [1,2,3,4,5]
// Output: [1,2,3,4,5]

// Time Complexity: O(n) → Traverse each node once
// Space Complexity: O(1) → Only a few extra pointers


/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} val
 * @return {ListNode}
 */
var removeElements = function(head, val) {
    let sentinel = new ListNode();
    sentinel.next = head;
    let prev = sentinel;
    while(prev && prev.next){
        if(prev.next.val == val){
            prev.next = prev.next.next;
        } else {
            prev = prev.next;
        }
    }
    return sentinel.next;
};