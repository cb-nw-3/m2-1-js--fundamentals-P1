// -------------------------------------------------------------
// Control Flow Exercises
// ----------
// note: need to have covered control flow for these exercises
// -------------------------------------------------------------

// Q7
// Write a program that goes through every number between 1 and 100, and follows the following rules:
//   - If the number is divisible by 3 (eg. 6), print "Fizz"
//   - If the number is divisible by 5 (eg. 10), print "Buzz"
//   - If the number is divisible by 3 AND 5 (eg. 15), print "FizzBuzz"
//   - For all other numbers, print the number itself.

// e.g.
//
// 1
// 2
// Fizz
// 4
// Buzz
// Fizz
// 7
// 8
// Fizz
// Buzz
// 11
// Fizz
// 13
// 14
// FizzBuzz
// 16
// ...

for (let i = 1; i <= 100; i++) {
  let isDivisibleBy3 = i % 3 === 0;
  let isDivisibleBy5 = i % 5 === 0;

  if (isDivisibleBy3 && isDivisibleBy5) {
    console.log("FizzBuzz");
  } else if (isDivisibleBy3) {
    console.log("Fizz");
  } else if (isDivisibleBy5) {
    console.log("Buzz");
  } else {
    console.log(i);
  }
}
