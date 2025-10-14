# 🧩 **JavaScript Array Methods**

Array methods are used for **iterating**, **transforming**, **searching**, **filtering**, and **manipulating** arrays efficiently.

---

### 📘 Categories & Methods

**Iteration / Looping**
- `forEach()` → Loops through array elements.

**Transformation**
- `map()` → Creates a new array by transforming each element.

**Filtering**
- `filter()` → Returns elements that match a condition.

**Searching**
- `find()`, `findIndex()` → Returns the first matching element or its index.

**Condition Checking**
- `some()`, `every()` → Checks if some or all elements match a condition.

**Sorting / Reversing**
- `sort()`, `reverse()` → Sorts or reverses an array.

**Adding / Removing**
- `push()`, `pop()`, `shift()`, `unshift()` → Add/remove elements at the end or start.

**Splicing / Slicing**
- `splice()`, `slice()` → Modify or extract part of an array.

**Combining**
- `concat()`, `flat()`, `flatMap()` → Merge arrays or flatten nested arrays.

**Reducing**
- `reduce()`, `reduceRight()` → Combine array values into a single value.

**Checking**
- `includes()`, `indexOf()`, `lastIndexOf()` → Check for element presence or position.

**Conversion**
- `join()`, `toString()` → Convert array elements into a string.

---

💡 **Tip:**  
Use these methods to write **cleaner**, more **functional**, and less **error-prone** JavaScript code.

---

# 🔠 **JavaScript String Methods**

String methods are used for **text manipulation** — searching, transforming, extracting, and combining.

---

### 📘 Categories & Methods

**Access / Info**
- `charAt()`, `charCodeAt()`, `length` → Access a character or get string length.

**Search**
- `includes()`, `indexOf()`, `lastIndexOf()`, `search()` → Find substrings or positions.

**Extracting**
- `slice()`, `substring()`, `substr()` → Extract part of a string.

**Transform**
- `toUpperCase()`, `toLowerCase()`, `trim()`, `trimStart()`, `trimEnd()` → Change text case or remove spaces.

**Replace / Split**
- `replace()`, `replaceAll()`, `split()` → Replace or split text.

**Check**
- `startsWith()`, `endsWith()` → Check prefix or suffix.

**Concat**
- `concat()` → Merge multiple strings.

**Repeat**
- `repeat()` → Repeat a string multiple times.

---

💡 **Tip:**  
Strings are **immutable** — every operation like `replace()` or `toUpperCase()` returns a **new string**.

---

# 🧱 **JavaScript Object Methods**

Object methods handle **key–value data**, **copying**, **merging**, and **object behavior control**.

---

### 📘 Categories & Methods

**Keys / Values / Entries**
- `Object.keys()`, `Object.values()`, `Object.entries()` → Get keys, values, or entries as arrays.

**Copy / Merge**
- `Object.assign()`, `structuredClone()` → Copy, merge, or deep-clone objects.

**Properties**
- `Object.hasOwn()`, `hasOwnProperty()` → Check if object directly contains a property.

**Freeze / Seal**
- `Object.freeze()`, `Object.seal()` → Prevent modifications or property additions/removals.

**Create / Set Prototype**
- `Object.create()`, `Object.setPrototypeOf()` → Create objects or modify their prototypes.

---

💡 **Tip:**  
`structuredClone()` performs **deep cloning**, while `Object.assign()` only does a **shallow copy**.

---

# ⏰ **JavaScript Date Methods**

Used to **create**, **extract**, **manipulate**, and **format** date/time values.

---

### 📘 Categories & Methods

**Create**
- `new Date()`, `Date.now()` → Create a new date or get current timestamp.

**Get Values**
- `getFullYear()`, `getMonth()`, `getDate()`, `getHours()`, etc. → Extract date/time parts.

**Set Values**
- `setFullYear()`, `setMonth()`, etc. → Modify parts of a date.

**Convert**
- `toISOString()`, `toLocaleString()`, `toDateString()` → Convert date to formatted strings.

**Time**
- `getTime()` → Get timestamp in milliseconds since Jan 1, 1970.

---

💡 **Tip:**  
Use `Date.now()` if you only need the **timestamp**, not a full date object.

---

# 🧮 **JavaScript Utility / Global Methods**

Built-in global methods for **type checking**, **conversion**, **encoding**, and **timing operations**.

---

### 📘 Methods & Descriptions

**Conversion**
- `parseInt()`, `parseFloat()` → Convert strings to numbers.

**Validation**
- `isNaN()`, `isFinite()` → Check number validity.

**Timing**
- `setTimeout()`, `setInterval()`, `clearTimeout()` → Schedule or clear timed calls.

**Encoding**
- `encodeURI()`, `decodeURI()` → Encode/decode URLs.

**JSON**
- `JSON.parse()`, `JSON.stringify()` → Convert between JSON and objects.

**Type Checking**
- `typeof`, `instanceof` → Check value type or constructor.

---

💡 **Tip:**  
Use `JSON.stringify(obj, null, 2)` for **pretty-printing** JSON with indentation.
