// -------------------------------------------------------------
// Control Flow Exercises
// ----------
// note: need to have covered control flow for these exercises
// -------------------------------------------------------------

// Q5
// Write a loop that will output every hour of the day (0 to 23) and
// determine whether it is time to sleep, eat or train.
// Life in the army is regimented! These are the hours alloted to each activity.
// Sleep between 22h and 5h
// Eat at 7h, 13h and 18h
// The rest of the time is spent training.

// The output should look something like
// It's 11h. Time to train!
// It's 12h. Time to train!
// It's 13h. Time to eat!

for (let hour = 0; hour < 24; hour++) {
  switch (hour) {
    case 22:
    case 23:
    case 0:
    case 1:
    case 2:
    case 3:
    case 4:
    case 5:
      console.log("It's " + hour + ", time to sleep!");
      break;
    case 7:
    case 13:
    case 18:
      console.log("It's " + hour + ", time to eat!");
      break;
    default:
      console.log("It's " + hour + ", time to train!");
  }
}
