// -------------------------------------------------------------
// Control Flow Exercises
// ----------
// note: need to have covered control flow for these exercises
// -------------------------------------------------------------

// Q4.3
// Write a loop that will print to the console all of the EVEN integers from 1 to 100.
for (let number = 2; number < 101; number++) {
    if (number !==0) {
        if (number % 2 === 0) {
            console.log(number);
             }
        }
    }