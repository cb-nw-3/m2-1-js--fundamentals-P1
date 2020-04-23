// -------------------------------------------------------------
// Control Flow Exercises
// ----------
// note: need to have covered control flow for these exercises
// -------------------------------------------------------------

// Q4.4
// Write a loop that will print to the console all of the EVEN integers from 100 to 0.

for (let x = 100; x >= 0; x--) {
    console.log(x);
}
here is mine:
for (num=100; num >= 0; num--){
    if(num % 2 === 0){
        console.log(num)
    }
}