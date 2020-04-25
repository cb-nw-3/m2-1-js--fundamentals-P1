// -------------------------------------------------------------
// Control Flow Exercises
// ----------
// note: need to have covered control flow for these exercises
// -------------------------------------------------------------

// Q4.3
// Write a loop that will print to the console all of the EVEN integers from 1 to 100.

for (let i = 0; i <= 100; i += 2) {
    if(i != 0){
    console.log(i);
    }
}

for (let y = 1; y <= 100; y += 1) {
    if(y % 2 === 0){
    console.log(y);
    }
}