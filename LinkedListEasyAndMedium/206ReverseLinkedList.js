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
var reverseList = function(head) {
  let prev = null;
  let curr = head;
  while(curr){
    let temp = curr.next;
    curr.next = prev;
    prev = curr;
    curr = temp;
  }  
  head = prev;
  return head;
};

// Input: head = [1,2,3,4,5]
// Output: [5,4,3,2,1]