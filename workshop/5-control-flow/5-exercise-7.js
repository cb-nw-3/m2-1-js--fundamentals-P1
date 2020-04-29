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

for(let num=1 ;num<=100, num++){
    let answer=num;

    if (num % 3 === 0){
    answer =`fizz (${num})`;
    }

    if (num % 5 === 0){
        answer = `buzz (${num})`;
    }

    if(num % 3 === 0 && num % 5 === 0){
        answer = `fizzbuzz (${num})`;
    }

    console.log(answer)

}