// -------------------------------------------------------------
// Control Flow Exercises
// ----------
// note: need to have covered control flow for these exercises
// -------------------------------------------------------------

// Q4.5
// Write a loop that will iterate from 0 to 15.
// For each iteration, it should check whether a number is even or odd
// and display that state along with the number.
// e.g.
// 0 is even
// 1 is odd
// 2 is even

// let number = x;
// for (x = 0; x < 16; x++) {
// if x % 2 !== 0; {
//     console.log (x, "is an even number");
// } else {
//     console.log (x, "is an odd number");
// }
// }

// for (x = 0; x < 16; x++) {
// let isEven = x%2 === 0;
// If (isEven) {
// console.log(x, "is an even number");
// } else {
// console.log(x, "is an odd number");
// }
// }

// many other possibilities here.
let number = x;
for (x = 0; x < 16; x++) {
  if (x % 2 === 0) {
    console.log(x, "is an even number");
  } else {
    console.log(x, "is an odd number");
  }
}
