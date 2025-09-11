// 328. Odd Even Linked List
// Given the head of a singly linked list, group all the nodes with odd indices together 
// followed by the nodes with even indices, and return the reordered list.
// Note: Index here refers to position in the list, not node value.

// Approach:
// 1. If list has 0 or 1 node → return head directly (nothing to reorder).
// 2. Maintain two pointers:
//    - odd → points to odd-positioned nodes
//    - even → points to even-positioned nodes
//    - eventStart → store starting point of even list
// 3. Rearrange links so that odd nodes are connected together and even nodes together.
// 4. Finally, connect the last odd node to eventStart.
// 5. Return head.

// Example:
// Input:  [1,2,3,4,5]
// Process:
//   Odd: 1 → 3 → 5
//   Even: 2 → 4
// Combine: [1,3,5,2,4]
// Output: [1,3,5,2,4]

// Edge Cases:
// - Empty list → return null
// - Single node → return head
// - Two nodes → already odd-even, return as is

// Complexity:
// Time Complexity: O(n) → traverse once
// Space Complexity: O(1) → rearranged in-place


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
var oddEvenList = function(head) {
 if(!head || !head.next) return head;
  let odd = head;
  let even = head.next;
  let eventStart = even;

  while(odd.next && even.next){
    odd.next = odd.next.next;
    even.next = even.next.next;
    odd = odd.next; 
    even = even.next;
  }  
  odd.next=eventStart
  return head;
};