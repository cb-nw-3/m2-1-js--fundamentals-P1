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

let hashString = "";
for (let number = 1; number  < 8; number++) {
    hashString = hashString + "#"
    console.log(hashString)
}

