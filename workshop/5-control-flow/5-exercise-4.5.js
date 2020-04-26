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
// ...

// many other possibilities here.

for (let x = 0; x <= 15; x = x + 1) {
  if (x % 2 === 0) {
    type = "even";
  } else {
    type = "odd";
  }
  console.log(x + " is " + type);
}
