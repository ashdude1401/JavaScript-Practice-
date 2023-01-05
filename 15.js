//array are ordered pair in js
// Creating an array
const arr1 = [1, 2, 3];
const arr2 = new Array(1, 2, 3);

// Accessing elements in an array
console.log(arr1[0]);  // Output: 1
console.log(arr1[1]);  // Output: 2

// Modifying elements in an array
arr1[0] = 10;
console.log(arr1[0]);  // Output: 10

// Adding elements to an array
arr1.push(4);
console.log(arr1);  // Output: [10, 2, 3, 4]

// Removing elements from an array
arr1.pop();
console.log(arr1);  // Output: [10, 2, 3]

