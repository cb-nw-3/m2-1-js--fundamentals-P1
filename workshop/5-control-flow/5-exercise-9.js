// -------------------------------------------------------------
// Control Flow Exercises
// ----------
// note: need to have covered control flow for these exercises
// -------------------------------------------------------------

// Q9
// Write a program that creates a string that represents an 8×8 grid,
// using newline characters to separate lines. At each position of the grid
// there is either an "_" or a "#" character. The characters should form a chessboard.
//
// #_#_#_#_
// _#_#_#_#
// #_#_#_#_
// _#_#_#_#
// #_#_#_#_
// _#_#_#_#
// #_#_#_#_
// _#_#_#_#

for (let y = 0; y <= 7; y++) {
  let numberArray = [];
  for (let x = y; x <= 7 + y; x++) {
    if (x % 2 == 0) {
      numberArray.push("#");
    } else {
      numberArray.push("_");
    }
  }
  console.log(numberArray.join(""));
}
