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

 //solution

 //the sequence always starts with 0,1, the current fibonacci # is 1
let first = 0;
let second = 1;
let fibo = 1;

for(let x=2; x<=50; x++){
    //the next number is the sum of the previous 2
    fibo = first + second;

    //the first number in the pair, now takes on its adjacent value
    first = second;

    //and the second number in the pair takes on the current fibonacci number
    second = fibo;

    //loop completes and x++;
}
