🚀 Day 62 of My 200-Day DSA Challenge!

Continuing my consistency in sharing one problem daily with the community!

🔥 Today’s Problem: LeetCode 162 – Find Peak Element
🖥 Language: JavaScript
🔍 Concept: Binary Search
⏱ Time Complexity: O(log n)
💾 Space Complexity: O(1)
📚 Learning Source: Namaste DSA by @Akshay Saini

✅ Approach:

Used Binary Search to efficiently find a peak element by checking the middle element and moving towards the side where a greater element exists.

💻 Solution (JavaScript):
var findPeakElement = function(arr) {
    let l = 0;
    let r = arr.length - 1;
    
    while (l < r) {
        let m = l + Math.floor((r - l) / 2);
        if (arr[m] < arr[m + 1]) {
            l = m + 1;
        } else {
            r = m;
        }
    }
    return l;
};

💡 Question for You:
👉 Do you prefer Binary Search problems or Two Pointers problems for interviews?

Let’s connect and grow together! 🚀

#DSA #JavaScript #ProblemSolving #LeetCode #NamasteDSA #BackendDevelopment #CodingChallenge #100DaysOfCode