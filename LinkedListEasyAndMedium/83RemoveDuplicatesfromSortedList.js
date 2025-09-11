
// 83. Remove Duplicates from Sorted List
// Given the head of a sorted linked list, delete all duplicates so that each element appears only once.

// Approach:
// 1. Since the list is sorted, duplicates will always be adjacent.
// 2. Traverse the list with a pointer `curr`.
// 3. If curr.val == curr.next.val → skip the next node (curr.next = curr.next.next).
// 4. Else → move curr to the next node.
// 5. Continue until end of list.
// 6. Return head.

// Example:
// Input:  [1,1,2,3,3]
// Process:
//   curr=1 → 1==1 → skip → [1,2,3,3]
//   curr=1 → 1!=2 → move
//   curr=2 → 2!=3 → move
//   curr=3 → 3==3 → skip → [1,2,3]
// Output: [1,2,3]

// Edge Cases:
// - Empty list (head == null) → return null
// - Single-node list → return head (nothing to remove)
// - All nodes same → list reduces to single node

// Complexity:
// Time Complexity: O(n) → traverse once
// Space Complexity: O(1) → in-place, no extra space


/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var deleteDuplicates = function(head) {
    let curr = head;
    while(curr && curr.next){
        if(curr.val == curr.next.val){
            curr.next = curr.next.next;
        } else {
            curr = curr.next;
        }
    }    
    return head;
};