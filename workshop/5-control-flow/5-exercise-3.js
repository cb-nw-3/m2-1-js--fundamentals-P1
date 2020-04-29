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

// the answer 
// for the even number
for (let number = 1; number <= 25; number++) {
  if (number % 2!==1) 
    console.log(number);
  }

  //for the odd number
  for (let number =0; number <= 25; number++) {
    if (number % 2!==0) 
      console.log(number);
    }