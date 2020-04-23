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


for (let hoursOfTheDay = 0; hoursOfTheDay < 24; hoursOfTheDay++) {
  if (hoursOfTheDay === 7 || hoursOfTheDay === 13 || hoursOfTheDay === 18) {
    console.log(`It's ${hoursOfTheDay}. Time to eat`)
  } else if (hoursOfTheDay >= 22 || hoursOfTheDay <= 5) {
    console.log(`It's ${hoursOfTheDay}. Time to sleep`)
  } else {
    console.log(`It's ${hoursOfTheDay}. Time to train`)
  }
}

//or

for (let hoursOfTheDay = 0; hoursOfTheDay < 24; hoursOfTheDay++) {
  switch (hoursOfTheDay) {
    case 7: case 13: case 22:
      console.log(`It's ${hoursOfTheDay}. Time to eat`)
      break;
    case 22: case 23: case 0: case 1: case 2: case 3: case 4: case 5:
      console.log(`It's ${hoursOfTheDay}. Time to sleep`)
      break;
    default:
      console.log(`It's ${hoursOfTheDay}. Time to sleep`)
  }
}