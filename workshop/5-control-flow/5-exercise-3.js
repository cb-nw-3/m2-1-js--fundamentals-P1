// -------------------------------------------------------------
// Control Flow Exercises
// ----------
// note: need to have covered control flow for these exercises
// -------------------------------------------------------------

// Q3
// Fix this program
// It should output all of the odd numbers between 1 and 25 (including 1 and 25)

for (let number = 0; number < 25; number++) {
  if (number % 2) {
    console.log(number);
  }
  console.log(number);
}

Answer:

for (let number = 1; number <= 25; number++) {
  if (number % 2 != 0) {
    console.log(number);
  }
}
or

for (let number = 1; number <= 25; number += 2) {
  console.log(number);
}


