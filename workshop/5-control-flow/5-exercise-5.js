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
for (let i = 0; i < 24; i++) {
  if (i < 5) {
    console.log(`It's ${i}h. Still early, zzzZZzz`);
  } else if (i === 5) {
    console.log(`It's ${i}h. Wake up soldier.`);
  } else if (i === 7 || i === 13 || i === 18) {
    switch (i) {
      case 7: {
        console.log(`It's ${i}h. Time for breakfast.`);
        break;
      }
      case 13: {
        console.log(`It's ${i}h. Time for lunch.`);
        break;
      }
      case 18: {
        console.log(`It's ${i}h. Time for dinner.`);
        break;
      }
      default:
        break;
    }
  } else if (i === 22) {
    console.log(`It's ${i}h. Time to sleep.`);
  } else if (i >= 22) {
    console.log(`It's ${i}h. zzZZZzzZ`);
  } else {
    console.log(`It's ${i}h. Time to train!`);
  }
}
