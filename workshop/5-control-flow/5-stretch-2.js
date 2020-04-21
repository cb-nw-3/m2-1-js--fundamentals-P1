/**
 * FIBONACCI GENERATOR
 *
 * The Fibonacci sequence is a sequence of numbers where every value is the sum
 * of the previous 2 values.
 *
 * It looks like this:
 *
 * 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, ...
 *
 * Why?
 *
 *                   13 +21 = 34
 *                8 +13 =21
 *             5 +8 =13
 *
 * See? Every number in the sequence is the result of adding the two numbers to
 * the left. The sequence starts with "0, 1", and every number beyond that
 * can be calculated by adding the previous 2 numbers.
 *
 * Write a program which calculates the 50th number in the fibonacci sequence
 *
 * (Correct answer: 12586269025)
 * (The numbers get big quickly!)
 *
 */

// Your example above Included 0 on the list, if 0 is included, 12586269025 is 51st number
// the correct answer should be 7778742049 which is the 50th
let fibList = [0, 1];

while (fibList.length < 50) {
  // If we want to include 12586269025 in the results, change the expression to <=
  let num = fibList[fibList.length - 1] + fibList[fibList.length - 2];
  fibList.push(num);
}

console.log(fibList[fibList.length - 1]);
