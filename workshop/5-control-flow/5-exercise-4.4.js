// -------------------------------------------------------------
// Control Flow Exercises
// ----------
// note: need to have covered control flow for these exercises
// -------------------------------------------------------------

// Q4.4
// Write a loop that will print to the console all of the EVEN integers from 100 to 0.


for (let number = 99; number >= 0; number -= 2) {
  console.log(number);
}

or

let counter = 100;
while (counter >= 0) {
  if ((counter % 2)) {
    console.log(counter)
  }
  counter--;
}