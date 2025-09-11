// 💾 What is Space Complexity?
// Space Complexity is the amount of memory (or space) your algorithm uses as the input size grows.

// 🧠 In Plain English:
// It tells you how much RAM your program needs to:

// Run properly

// Store data

// Handle function calls, variables, and data structures

// function sum(arr) {
//     let total = 0;         // takes space
//     for (let i = 0; i < arr.length; i++) {
//         total += arr[i];   // no extra space, reusing `total`
//     }
//     return total;
// }

// * 🔢 If arr has 1,000 numbers → Space Complexity is O(1) (constant)

// * Because you're not creating anything new based on n

// * 📦 Another Example (Bad Space):

// function makeCopy(arr) {
//     let newArr = [];
//     for (let i = 0; i < arr.length; i++) {
//         newArr.push(arr[i]);
//     }
//     return newArr;
// }

// 📌 Key Takeaways:

// | Space Complexity | What It Means                              |
// | ---------------- | ------------------------------------------ |
// | **O(1)**         | Uses the same space no matter the input    |
// | **O(n)**         | Space grows directly with input size       |
// | **O(n²)**        | For 2D arrays, matrices, or nested storage |


// 🧠 Time vs Space Complexity : 
// * Time complexity = How long your code runs
// * Space complexity = How much memory it needs

// -------------------------- --------------------------

// 💽 What is a Hard Drive?
// * A Hard Drive (HDD or SSD) is your computer’s permanent storage — it's where all your files, apps, operating system, and projects are saved.

// 💾 What is RAM?
// RAM = Random Access Memory

// 🧠 It's your computer’s short-term memory

// 🔥 It stores data that your program is actively using

// ⚡ Super fast, but temporary.

// 🧽 Gets cleared when you restart your device


// 🚀 How RAM helps in programming:
// Stores variables, data structures, call stacks

// Keeps your running code and loaded resources

// Fast access = faster program execution

// Used for caching frequently accessed data

// Helps avoid repeated calculations

// 🔁 Example: When you open a website, its CSS, JavaScript, and images may be cached in RAM for quicker use

// -------------------------- --------------------------

// 🗃️ What is ROM?
// ROM = Read-Only Memory

// 🧱 It's your computer’s permanent memory

// * Stores instructions your device needs to boot up

// * You can’t change or erase it easily

// * Slower than RAM


// * ROM only contains firmware, like BIOS or UEFI, that starts the computer and points to your hard disk to load the OS. That’s it.

// -------------------------- --------------------------

// RAM -> It is small memoer in you



// 🧑‍💻 As a Developer:
// You save your projects on the hard drive

// When you run them (node index.js), they are loaded into RAM.

// Apps like Angular CLI and Node are stored on your hard drive but executed in RAM.

// -------------------------- --------------------------






// -------------------------- --------------------------

// 🧠 What is a CPU?
// CPU stands for Central Processing Unit — it’s often called the brain of the computer.

// 📦 Think of it like this:
// Imagine you're a chef in a kitchen:

// The recipe is your code (JavaScript, Node.js, etc.)

// The ingredients are your data (numbers, strings, etc.)

// The CPU is you, the chef — following the recipe and preparing the dish

// The CPU takes your code, understands it, and then executes it step-by-step, just like a chef follows a recipe.

// 🧑‍💻 For example:
// let total = 2 + 3;
// The CPU reads this

// Adds the numbers

// Saves the result in memory

// * The value 5 (i.e., result of 2 + 3) is stored in RAM, not on the hard disk.

// -------------------------- --------------------------

// What is HDD?
// HDD = Hard Disk Drive
// * An HDD is a storage device in your computer. It is where all your files, software, and even the operating system (like Windows or Linux) are saved permanently — even when the computer is turned off.

// Key Points:
// * It stores documents, apps, games, music, videos, etc.

// * Unlike RAM, data in an HDD does not disappear when you shut down the computer.

// * It uses a spinning disk (like a CD) and a magnetic head to read/write data.

// Example:
// * If you download a movie, it's saved on your HDD.

// * When you install software (like Chrome or Node.js), it goes into your HDD.

// What is SSD?
// * SSD = Solid State Drive
// * An SSD is a type of storage device used in computers.
// * It stores your files, apps, and system (like Windows), just like a hard disk (HDD),
// but it works faster because it has no moving parts inside.

// 🔍 Simple Example:
// * Just like a pen drive or your mobile phone memory, an SSD saves your data and lets you open it quickly.

// 🎮 What is a Graphics Card?
// A graphics card (also called GPU – Graphics Processing Unit) is a special part of your computer that is designed to handle images, videos, and graphics.

// 🧑‍💻 In Development:
// Frontend (Angular, React, etc.):
// The GPU helps with animations, transitions, image rendering in the browser.

// Backend (Node.js, Express, etc.):
// The GPU is not typically used unless you're doing something graphical or AI-related.


// 🎯 Summary:
// The graphics card (GPU) makes sure everything you see on screen is fast and smooth — from simple animations to advanced 3D rendering.



