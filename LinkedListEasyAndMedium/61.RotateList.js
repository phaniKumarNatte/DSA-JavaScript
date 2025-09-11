
// 61. Rotate List
// Given the head of a linked list, rotate the list to the right by k places.

// Approach:
// 1. Handle edge cases: if list is empty or has only 1 node → return head.
// 2. Compute the length of the list by traversing once.
// 3. Normalize k: k = k % length (rotating by length doesn’t change the list).
// 4. Use two pointers, slow and fast:
//    - Move fast k steps ahead.
//    - Move both slow and fast together until fast.next == null.
// 5. slow.next is the new head after rotation.
// 6. Connect fast.next to head to form the rotated list.
// 7. Break the connection at slow.next (slow.next = null).
// 8. Return newHead.

// Example:
// Input: [1,2,3,4,5], k = 2
// Process:
//   Length = 5, k = 2
//   fast moves 2 steps → fast = 3
//   Move both → slow = 3, fast = 5
//   newHead = slow.next = 4
//   Connect fast.next = head → 5→1
//   Break slow.next → 3→null
// Output: [4,5,1,2,3]

// Edge Cases:
// - k = 0 → return head
// - k % length = 0 → return head
// - Single node → return head
// - Empty list → return null

// Complexity:
// Time Complexity: O(n) → traverse list twice
// Space Complexity: O(1) → in-place


/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
var rotateRight = function(head, k) {
    if(!head || !head.next) return head;
    let length = 0;
    let curr = head;
    while(curr){
        curr = curr.next;
        length++;
    }
    k = k%length;
    let slow = head;
    let fast = head;

    for(let i=0;i<k;i++){
        fast = fast.next;
    }

    while(fast && fast.next){
        slow = slow.next;
        fast = fast.next;
    }
    
    fast.next = head;
    let newHead = slow.next;
    slow.next = null
    return newHead;
};