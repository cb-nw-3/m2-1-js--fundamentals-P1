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
for (let y = 1; y <= 7; y++) {
  for (let x = 1; x <= y; x++) {
    console.log("#");
  }
  console.log("\n");
}
