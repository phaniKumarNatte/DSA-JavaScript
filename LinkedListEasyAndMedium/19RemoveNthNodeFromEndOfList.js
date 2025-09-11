
// 19. Remove Nth Node From End of List
// Given the head of a linked list, remove the nth node from the end of the list and return its head.

// Approaches:

// 1. Two-Pass Approach:
//    - First pass: Count total length of the linked list.
//    - Compute index = length - n (the node to remove from start).
//    - Second pass: Move to (index - 1) node and adjust pointers to skip nth node.
//    - Time: O(2n) ≈ O(n), Space: O(1)

// 2. One-Pass Approach (Optimal):
//    - Use two pointers (fast and slow).
//    - Move fast pointer n steps ahead.
//    - Then move both fast and slow together until fast reaches the end.
//    - At this point, slow is just before the node to remove.
//    - Adjust slow.next to skip the nth node.
//    - Time: O(n), Space: O(1)

// Example:
// Input: head = [1,2,3,4,5], n = 2
// Fast moves 2 steps → [3,4,5]
// Move both until fast reaches end → slow at 3
// Delete 4 → Result: [1,2,3,5]

// Edge Cases:
// - Removing head node (n == length)
// - Single-node list
// - n is always valid (1 ≤ n ≤ length)

// Complexity:
// Time Complexity: O(n) in both approaches
// Space Complexity: O(1)


/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function(head, n) {


//     // two-pass approch
// let sentinel = new ListNode();        // dummy node to simplify edge cases
// sentinel.next = head;
// let prev = sentinel;
// let length = 0;

// // 1st pass: calculate length of list
// while (head) {
//     head = head.next;
//     length++;
// }

// // Calculate position from start: length - n
// let pos = length - n;

// // 2nd pass: move prev to just before the node to delete
// for (let i = 0; i < pos; i++) {
//     prev = prev.next;
// }

// // Delete the node
// prev.next = prev.next.next;

// return sentinel.next;

    // one-pass approch

    let sentinal = new ListNode();
    sentinal.next = head;
    first = head;
    for(let i = 1;i<n;i++){
        first = first.next;
    }

    let second = sentinal;
    while(first && first.next){
        second = second.next;
        first = first.next;   
    }
    second.next = second.next.next;
    return sentinal.next;
};