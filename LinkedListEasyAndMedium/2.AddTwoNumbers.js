// 2. Add Two Numbers
// You are given two non-empty linked lists representing two non-negative integers. 
// The digits are stored in reverse order, and each node contains a single digit. 
// Add the two numbers and return the sum as a linked list.

// Approach:
// 1. Initialize carry = 0 and a dummy node (ansHead) to build the result list.
// 2. Traverse both l1 and l2 simultaneously:
//    - Take value = (l1.val if exists) + (l2.val if exists) + carry.
//    - Compute carry = Math.floor(sum / 10).
//    - Create a new node with digit = sum % 10.
//    - Append it to result list.
// 3. Move l1 and l2 forward (if they exist).
// 4. At the end, if carry > 0 → add a final node.
// 5. Return ansHead.next (skipping dummy).

// Example:
// Input: l1 = [2,4,3], l2 = [5,6,4]
// Process:
//   2+5=7 (carry=0) → [7]
//   4+6=10 → digit=0, carry=1 → [7,0]
//   3+4+1=8 → [7,0,8]
// Output: [7,0,8]  (represents 807)

// Edge Cases:
// - Different lengths (e.g., [9,9] + [1])
// - Carry at the end (e.g., [9,9,9] + [1] → [0,0,0,1])
// - One list empty → return the other

// Complexity:
// Time Complexity: O(max(m, n)) → traverse both lists once
// Space Complexity: O(max(m, n)) for result list



/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
    let carry = 0;    
    let ans = new ListNode();
    let ansHead = ans;
    while(l1 || l2 || carry){
        let sum = ((!l1) ? 0 : l1.val) + ((!l2) ? 0 : l2.val)  + carry;
         carry = Math.floor(sum/10);
         let digit = sum%10;
         let newNode = new ListNode(digit);
         ans.next = newNode;
         ans = ans.next;
         l1 = l1 && l1.next;
         l2 = l2 && l2.next;
    }
    return ansHead.next;
};