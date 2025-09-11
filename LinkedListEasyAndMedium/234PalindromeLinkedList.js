// 234. Palindrome Linked List
// Given the head of a singly linked list, return true if it is a palindrome.

// Approach:
// 1. Use slow and fast pointers to find the middle of the linked list.
//    - slow moves 1 step, fast moves 2 steps.
//    - When fast reaches the end, slow is at the middle.
// 2. Reverse the second half of the linked list starting from slow.
// 3. Compare the first half and the reversed second half node by node.
// 4. If all values match → Palindrome, else → Not palindrome.

// Time Complexity: O(n)
//   - O(n) to find the middle
//   - O(n/2) to reverse half
//   - O(n/2) to compare halves
// Space Complexity: O(1)
//   - We do everything in-place (reversing links), no extra array needed.



/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */
var isPalindrome = function(head) {
    let slow = head;
    let fast = head;
    while(fast && fast.next){
        slow = slow.next;
        fast = fast.next.next;
    }

    let prev = null
    let cur = slow;
    while(cur){
        let nextNode = cur.next;
        cur.next = prev;
        prev = cur;
        cur = nextNode;
    }

    while(prev != null ){
        if(prev.val != head.val){
            return false;
        }
        prev = prev.next;
        head = head.next;
    }
    return true;


};