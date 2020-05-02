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
for (int = 0; int < 24 ; int++){
	if (22 < int || int < 5 ){console.log(int + 'h' + ' Time To Sleep!');	
	}else if(int == 7 || int==13 || int ==18){
	console.log(int + 'h'+' Time to eat!');
	}else{
	console.log(int + 'h' + ' Time to train!');
	}

}