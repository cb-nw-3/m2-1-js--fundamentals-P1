// -------------------------------------------------------------
// Control Flow Exercises
// ----------
// note: need to have covered control flow for these exercises
// -------------------------------------------------------------

// Q4.5
// Write a loop that will iterate from 0 to 15.
// For each iteration, it should check whether a number is even or odd
// and display that state along with the number.
// e.g.
// 0 is even
// 1 is odd
// 2 is even
// ...

// many other possibilities here.
for (let y = 0; y <= 15; y += 1) {
    if (y % 2 === 0){
        console.log(y + " is even");
    } else {
        console.log(y + " is odd");
    }
}

for (let x = 0; x < 16; x ++) {
    if (x % 2 !== 1){
        console.log(x + " is even");
    } else {
        console.log(x + " is odd");
    }
}


for (let z = 0; z < 16; z++) {
    let type = 'even';

    if (z % 2 !== 0) {
        type = 'odd';
    }

    console.log(`${z} is ${type}`);
}