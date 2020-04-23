// -------------------------------------------------------------
// Control Flow Exercises
// ----------
// note: need to have covered control flow for these exercises
// -------------------------------------------------------------

// Q4.3
// Write a loop that will print to the console all of the EVEN integers from 1 to 100.

for (let number = 0; number < 100;) {
  number += 2;
  console.log(number);
}

or

let counter = 1;
while (counter <= 100) {
  if (!(counter % 2)) {
    console.log(counter)
  }
  counter++;
}