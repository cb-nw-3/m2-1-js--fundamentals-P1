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

for (let char=0;char<7;char++){
    let line='#'
    for (let draw=1;draw<=char;draw++){
        line+='#'
    }
    console.log(line)
}