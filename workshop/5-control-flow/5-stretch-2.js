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
/* Modified this from Etienne Giroux by removing the console.log at the end since the question requires only the 50th
 * number to be given*; no credit to me to coming up with this. */
let secondPrevious = 0;
let previous = 1;
let fiboSum = 0;
for (i = 1; i < 50; i++) {
  fiboSum = secondPrevious + previous;
  secondPrevious = previous;
  previous = fiboSum;
}
