// -------------------------------------------------------------
// Control Flow Exercises
// ----------
// note: need to have covered control flow for these exercises
// -------------------------------------------------------------

// Q8
// Write a loop that makes seven calls to console.log to output the following triangle:
// #
// ##
// ###
// ####
// #####
// ######
// #######

for (let x = 0; x < 7; x += 1) {
    let triangle = '#';
    for (let y = 1; y <= x; y += 1){
        triangle += '#';
    }
    
    console.log(triangle);
}