// -------------------------------------------------------------
// Control Flow Exercises
// ----------
// note: need to have covered control flow for these exercises
// -------------------------------------------------------------

// Q6
// Write a program that will output the sum of all of the multiples of four
// between 0 and 5000
//
// ANSWER: the number you should see in the console is 3127500


// Solution
let sum = 0;
for(let x=0; x <=5000; x++) {
    if(x % 4 == 0 ) {
        sum += x;
    }
}
console.log(sum);