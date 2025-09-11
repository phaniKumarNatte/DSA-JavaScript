// 1021. Remove Outermost Parentheses
// A valid parentheses string is either empty "", or "(" + A + ")", or A + B, 
// where A and B are valid parentheses strings.
// A primitive parentheses string is a nonempty string that cannot be split 
// into two nonempty valid parentheses strings.
//
// Given a valid parentheses string s, remove the outermost parentheses of every primitive string.
//
// Example:
// Input: s = "(()())(())"
// Output: "()()()"
// Explanation: 
// - Primitive parts: "(()())", "(())"
// - Removing outermost brackets → "()()", "()"
// - Final: "()()()"
//
// Approach 1 (Counter-based, preferred):
// - Use a counter `len` to track depth of parentheses.
// - When encountering '(': 
//   • Increment depth.
//   • If depth > 1, it's not outermost, so add to result.
// - When encountering ')':
//   • If depth > 1, add to result before decrementing.
//   • Decrement depth.
// - This way, outermost parentheses (where depth = 1) are skipped.
// - Time O(n), Space O(n).
//
// Approach 2 (Stack-based, alternate - commented):
// - Maintain a stack to push '(' and pop on ')'.
// - Only add to result if stack size > 1 (not outermost).
// - Works but uses extra memory for stack.

var removeOuterParentheses = function(s) {
//   let stack = [];
  let result = "";
  let len =0;
    for(let i =0;i<s.length;i++){
        if(s[i] =='('){            
            len++;
            if(len>1){
                result = result+"(";
            }
        }else {
            
            if(len>1){
                result = result+")";
            }
            len--;
        }
    }
    // for(let i=0;i<s.length;i++){
    //     if(s[i] === '('){
    //         stack.push(s[i]);
    //         if(stack.length>1){
    //             result= result+s[i];
    //         }            
    //     } else {
    //         if(stack.length>1){
    //             result= result+s[i];
    //         }
    //         stack.pop();
            
    //     }
    // }
    
  return result; 
};