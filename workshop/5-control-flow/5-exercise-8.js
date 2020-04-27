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
let word = "";
for (let count = 1; count <= 7; count++){
    word = word+"#";
    console.log(word);
}