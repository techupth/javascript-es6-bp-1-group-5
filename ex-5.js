function sum(...numbers) {
  return numbers.reduce((total, num) => total + num, 0);
}
//reduce is a higher-order function available for arrays in JavaScript. It applies a callback function against an accumulator and each element in the array (from left to right) to reduce it to a single value.

// In this case, the callback function takes two parameters: total (the accumulator) and num (the current element in the array). It adds num to the total.
// The reduce method starts with an initial value of 0.
let result1 = sum(1, 2, 3, 4, 5, 6, 7, 8);
let result2 = sum(1, 2, 3, 4);

console.log(`Result ${result1}`); 
console.log(`Result ${result2}`);