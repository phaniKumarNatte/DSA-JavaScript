// 21. Merge Two Sorted Lists
// Given two sorted linked lists (l1 and l2), merge them into a single sorted list.
// Return the head of the merged list.

// Approach:
// 1. Create a dummy node `start` to simplify edge cases.
// 2. Use a `curr` pointer to build the merged list.
// 3. Traverse both lists while l1 and l2 are not null:
//    - Compare l1.val and l2.val
//    - Attach the smaller node to curr.next
//    - Move the chosen list forward
//    - Move curr forward
// 4. When one list ends, attach the remaining nodes from the other list.
// 5. Return start.next (skipping dummy).

// Example:
// l1 = [1,2,4], l2 = [1,3,4]
// Process:
//   Compare 1 and 1 → pick l1 → [1]
//   Compare 2 and 1 → pick l2 → [1,1]
//   Compare 2 and 3 → pick l1 → [1,1,2]
//   Compare 4 and 3 → pick l2 → [1,1,2,3]
//   Compare 4 and 4 → pick l1 → [1,1,2,3,4]
//   Append l2 leftover → [1,1,2,3,4,4]
// Output: [1,1,2,3,4,4]

// Edge Cases:
// - If one list is empty → return the other
// - Both empty → return null

// Complexity:
// Time Complexity: O(m+n) → traverse both lists fully
// Space Complexity: O(1) → in-place merge using existing nodes


/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
var mergeTwoLists = function(l1, l2) {
    let start = new ListNode();
    start.next = l1 || l2;
    let curr = start;

    while(l1 && l2){
        if(l1.val<l2.val){
            curr.next = l1;
            l1 = l1.next;
        } else {
            curr.next = l2;
            l2 = l2.next;
        }
        curr = curr.next;
    }

    if(l1){
        curr.next = l1;
    } else {
        curr.next = l2;
    }

    return start.next;
    // if(!l1) return l2;
    // if(!l2) return l1;
    // let start = new ListNode();
    // let curr = start;
    // // let curr = null;
    // if(l1.val < l2.val){
    //     curr.next = l1;
    //     l1 = l1.next;
    // } else {
    //     curr.next = l2;
    //     l2 = l2.next;
    // }
    
    // while(l1 && l2){
    //     if(l1.val < l2.val){
    //         curr.next = l1;                        
    //         l1 = l1.next;
    //     } else {
    //         curr.next = l2;
    //         l2 = l2.next;
    //     }
    //     curr = curr.next;
    // }

    // curr.next = l1 || l2
    // if(!l2){
    //     curr.next = l1;
    // }
    // if(!l1){
    //    curr.next = l2;        
    // }
    

    // return start.next;

};