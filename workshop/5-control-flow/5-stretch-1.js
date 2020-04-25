/**
 * PRIME NUMBER GENERATOR
 *
 * Write a program that generates a list of all prime numbers between 1 and 200.
 *
 * A prime number is a number that is ONLY divisible by 1 and itself.
 *
 * 6 -> NOT prime (2 * 3)
 * 7 -> PRIME (can only be divided by 1 and 7, no other numbers)
 * 12 -> NOT prime (3 * 4, 2 * 6)
 * 37 -> PRIME ()
 *
 * NOTE: 1 and 2 are both prime numbers.
 *
 * EXPECTED OUTPUT:
 *
 * [1, 2, 3, 5, 7, 11, 13, ...]
 */

// FYI I DON'T THINK 1 IS CONSIDERED A PRIME NUMBER. HOWEVER, AS REQUIRED ABOVE THIS CODE OUTPUTS 1 AS A PRIME NUMBER.

let arr = [];

const isItPrime = (n) => {
  for (j = 2; j < n; j++) {
    if (n % j === 0) {
      return false;
    }
  }
  arr.push(n);
  return false;
};

for (i = 1; i <= 200; i++) {
  if (i === 1) {
    arr.push(i);
  } else if (i === 2) {
    arr.push(i);
  } else {
    isItPrime(i);
  }
}

console.log(arr);
