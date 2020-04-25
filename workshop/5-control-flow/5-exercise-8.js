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

for (let i = 1; i < 8; i++) {
    var foo = "";
    for (j = 0; j < i; j++) {
        foo += "#"
    }
    console.log(foo);
}