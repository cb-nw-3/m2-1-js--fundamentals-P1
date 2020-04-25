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

let row = 0;
let col = 0;
for (row; row < 8; row++) {
  let line = "";
  for (col; col <= row; col++) {
    if (row === col) {
      line += "#";
    } else {
      line += "_";
    }
    console.log("\n");
  }
  console.log(line);
}
