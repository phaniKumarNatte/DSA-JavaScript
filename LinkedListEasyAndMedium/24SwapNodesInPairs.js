// 24. Swap Nodes in Pairs
// Given a linked list, swap every two adjacent nodes and return its head.
// You must solve the problem without modifying the values in the list’s nodes (i.e., only nodes themselves can be changed).

// Approaches:

// 1. Recursive Approach:
//    - Base case: if head is null or head.next is null → return head
//    - Let l = head, r = head.next
//    - Swap pairs recursively: l.next = swapPairs(r.next)
//    - Set r.next = l
//    - Return r as new head

// 2. Iterative Approach:
//    - Use a dummy node to simplify handling head
//    - Use pointers: p (previous), c (current), n (next)
//    - While c and c.next exist:
//        - Swap c and n
//        - Move pointers forward
//    - Return dummy.next

// Example:
// Input: [1,2,3,4]
// Process:
//   Recursive: swap 1 & 2 → 2→1→swapPairs(3→4)
//   swap 3 & 4 → 4→3
// Output: [2,1,4,3]

// Edge Cases:
// - Empty list → return null
// - Single node → return head
// - Odd number of nodes → last node remains as is

// Complexity:
// Time Complexity: O(n) → visit each node once
// Space Complexity:
//   - Recursive: O(n) → recursion stack
//   - Iterative: O(1) → in-place swaps


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
 var swapPairs = function(head){
    if(!head || !head.next) return head;
    let l = head;
    let r = head.next;
    l.next = swapPairs(r.next);
    r.next = l;
    return r;
 }
// var swapPairs = function(head) {
//   if(!head || !head.next) return head;
//   let dummyNode = new ListNode();
//   let p = dummyNode;  
//   let c = head;
//   let n = head.next;

//   while(c && c.next){
//     p.next = n;
//     c.next = n.next;
//     n.next = c;

//     p = c;
//     c = p.next;
//     n = c && c.next;
//   }
//   return dummyNode.next;
// };