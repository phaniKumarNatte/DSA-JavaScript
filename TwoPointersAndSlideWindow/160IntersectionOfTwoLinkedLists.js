// Given the heads of two singly linked-lists headA and headB, return the node at which the two lists intersect. If the two linked lists have no intersection at all, return null.
// Input: intersectVal = 8, listA = [4,1,8,4,5], listB = [5,6,1,8,4,5], skipA = 2, skipB = 3
// Output: Intersected at '8'
// Explanation: The intersected node's value is 8 (note that this must not be 0 if the two lists intersect).
// From the head of A, it reads as [4,1,8,4,5]. From the head of B, it reads as [5,6,1,8,4,5]. There are 2 nodes before the intersected node in A; There are 3 nodes before the intersected node in B.
// - Note that the intersected node's value is not 1 because the nodes with value 1 in A and B (2nd node in A and 3rd node in B) are different node references. In other words, they point to two different locations in memory, while the nodes with value 8 in A and B (3rd node in A and 4th node in B) point to the same location in memory.


// Solution : 

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
var getIntersectionNode = function(headA, headB) {
    // solution 1 using hash
    // let setBnodes = new Set();
    // while(headB != null){
    //     setBnodes.add(headB);
    //     headB = headB.next;
    // }
    // while(headA !=null){
    //     if(setBnodes.has(headA)){
    //         return headA
    //     }
    //     headA  = headA.next;
    // } 
    // return null;

    // solution 2

    // let n=0;
    // let pA = headA;
    // let pB = headB;
    // while(pA != null){
    //     n++;
    //     pA = pA.next;
    // }
    // let m =0;
    // while(pB !=null){
    //     m++;
    //     pB = pB.next;
    // }

    // let diff = Math.abs(n-m);

    // if(n>m){
    //     for(let i=0;i<diff;i++){
    //         headA = headA.next;
    //     }
    // } else if(m>n){
    //     for(let i=0;i<diff;i++){
    //         headB = headB.next;
    //     }
    // }
    // pA = headA;
    // pB = headB;

    // while(pA != null && pA != pB){
    //     pA = pA.next;
    //     pB = pB.next;
    // } 
    // return pA;

    // Solution 3: 
    
    let pA = headA;
    let pB = headB;
    while(pA != pB){
        pA = pA == null ? headB : pA.next;
        pB = pB == null ? headA : pB.next;
    }

    return pA;

};