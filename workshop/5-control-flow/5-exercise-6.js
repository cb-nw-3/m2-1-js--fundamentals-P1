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



for (let num=0 ; num<=5000 ; num++){
    let sum= 0 ;
if (num % 4 === 0){
    sum+=num;
}
}
console.log(`sum is ${sum});
