// recursive approch    
var preorderTraversal = function(root) {
  let ans = [];
  function traversal(curr){        
    if(!curr) return;
    ans.push(curr.val)
    traversal(curr.left);
    traversal(curr.right);
  }  
  traversal(root);
  return ans;
};

// iterative approch
if(!root) return [];
let ans = [];
let stack = [root];
while(stack.length){
    let curr = stack.pop();
    ans.push(curr.val);
    curr.right && stack.push(curr.right);
    curr.left && stack.push(curr.left);
}
return ans;