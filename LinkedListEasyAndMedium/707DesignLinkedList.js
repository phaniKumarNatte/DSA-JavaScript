// Input
// ["MyLinkedList", "addAtHead", "addAtTail", "addAtIndex", "get", "deleteAtIndex", "get"]
// [[], [1], [3], [1, 2], [1], [1], [1]]
// Output : [null, null, null, null, 2, null, 3]


// var Node = function(val){
//     this.val = val;
//     this.next = null;
// }
// var MyLinkedList = function() {
//     this.head = null;
//     this.size = 0;
// };



var Node = function(val){
    this.val = val;
    this.next = null;
}
var MyLinkedList = function() {
    this.head = null;
    this.size = 0;
};

/** 
 * @param {number} index
 * @return {number}
 */
MyLinkedList.prototype.get = function(index) {
    if(index < 0 || index >= this.size) return -1;

    let cur = this.head;
    for(let i = 0;i<index;i++){
        cur = cur.next;
    }
    return cur.val;
};

/** 
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtHead = function(val) {
   let newNode = new Node(val);
    newNode.next = this.head;
    this.head = newNode;
    this.size++;
};

/** 
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtTail = function(val) {
    let newNode = new Node(val);
    cur = this.head;
    if(cur ==null){
        this.head = newNode;
    } else {
        while(cur.next != null){
            cur = cur.next;
        }
        cur.next = newNode; 
    }
    
    
    this.size++;
};

/** 
 * @param {number} index 
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtIndex = function(index, val) {
    if(index<0 || index > this.size) return;
    let newNode = new Node(val);
    
    if(index == 0){
        this.addAtHead(val);
        return;
    } else if(index === this.size){
        this.addAtTail(val);
        return;
    } else {
        let cur = this.head;
        for(let i = 0;i<index-1;i++){
        cur = cur.next;
    }
        newNode.next = cur.next;
        cur.next = newNode;
    }
    
    this.size++;    
};

/** 
 * @param {number} index
 * @return {void}
 */
MyLinkedList.prototype.deleteAtIndex = function(index) {
    
    if(index<0 || index>=this.size) return;
    if(index == 0){
        this.head= this.head.next;
    } else {
        let cur = this.head;
        for(let i = 0;i<index-1;i++){
            cur = cur.next;
        }
        cur.next = cur.next.next;

    }
    
    this.size--;
};


const linkedList = new MyLinkedList();
// this.MyLinkedList();
linkedList.addAtHead(1);
linkedList.addAtTail(3);
linkedList.addAtIndex(1,2);
console.log(linkedList.get(1));
linkedList.deleteAtIndex(1);
linkedList.get(1);
/** 
 * Your MyLinkedList object will be instantiated and called as such:
 * var obj = new MyLinkedList()
 * var param_1 = obj.get(index)
 * obj.addAtHead(val)
 * obj.addAtTail(val)
 * obj.addAtIndex(index,val)
 * obj.deleteAtIndex(index)
 */