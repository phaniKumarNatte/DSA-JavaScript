// 125. Valid Palindrome
// Given a string s, determine if it is a palindrome considering only alphanumeric characters and ignoring cases.
// Non-alphanumeric characters are ignored.

// Example:
// Input: "A man, a plan, a canal: Panama"
// Output: true

// Approach 1: Two-pointer technique (efficient)
// - Convert string to lowercase
// - Use two pointers (i at start, j at end)
// - Move pointers inward, skipping non-alphanumeric characters
// - Compare characters: if mismatch → not palindrome
// - Time Complexity: O(n)
// - Space Complexity: O(1)

// Approach 2: Build filtered string and compare with reversed version (commented)
// - Filter only alphanumeric characters and build reversed string
// - Compare filtered string with its reverse
// - Time Complexity: O(n)
// - Space Complexity: O(n)


/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
    // 2 pointer approch
    s=s.toLowerCase();
    let j = s.length-1;
    let i = 0;
while(i<j){
    if(!s[i].match(/[a-z0-9]/i)){
        i++;
    } else if(!s[j].match(/[a-z0-9]/i)){
        j--;
    } else if(s[i] == s[j]){
        i++;
        j--;
    } else {
        return false;
    }

}
return true;

    
    
    
    // s=s.toLowerCase();
    // let filter = "";
    // let rev = "";
    // for(let i =0;i<s.length;i++){
    //     if(s[i].match(/[a-z0-9]/i)){
    //         filter = filter + s[i];
    //         rev = s[i] + rev;
    //     }
    // }
    // return filter == rev;
};