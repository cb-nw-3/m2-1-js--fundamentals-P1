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

//Solution

// Keep the string var outside so it keeps adding
let string='';
for(let x = 1; x <=7; x++) {
    // console.log(x);
    string += "#";
    console.log(string);
}