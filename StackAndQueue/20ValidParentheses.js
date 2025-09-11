// 20. Valid Parentheses
// Given a string containing just the characters '(', ')', '{', '}', '[' and ']',
// determine if the input string is valid.
//
// A string is valid if:
// 1. Open brackets must be closed by the same type of brackets.
// 2. Open brackets must be closed in the correct order.
// 3. Every closing bracket must have a corresponding opening bracket.
//
// Example 1:
// Input: s = "()"
// Output: true
//
// Example 2:
// Input: s = "()[]{}"
// Output: true
//
// Example 3:
// Input: s = "(]"
// Output: false
//
// Approach (Stack + HashMap):
// - Use a map to store matching pairs of parentheses.
// - Traverse each character in the string:
//   • If it's an opening bracket, push to stack.
//   • If it's a closing bracket, check the top of stack:
//       - If top doesn't exist or doesn't match → return false.
// - After traversal, stack should be empty (all opened brackets matched).
//
// Time Complexity: O(n)  → traverse each char once
// Space Complexity: O(n) → stack can store all opening brackets

var isValid = function(s) {
  let map = {
    '(': ')',
    '{': '}',
    '[': ']'
  };
  
  let stack = [];
  
  for (let i = 0; i < s.length; i++) {
    if (map[s[i]]) {
      // Opening bracket → push
      stack.push(s[i]);
    } else {
      // Closing bracket → check top of stack
      let top = stack.pop();
      if (!top || map[top] !== s[i]) {
        return false;
      }
    }
  }
  
  return stack.length === 0;
};
