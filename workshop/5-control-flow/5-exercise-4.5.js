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

for(num = 0 ; num <=15; num++){
    if(num % 2 === 0){
        console.log(`${num} is even`)
    }else {
        console.log(`${num} is odd`)
    }
}