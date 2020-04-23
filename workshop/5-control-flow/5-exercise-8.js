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

let triangle = "";
for (let counter = 1; counter <= 7; counter++) {
  triangle = "#" + triangle;
  console.log(triangle);
}