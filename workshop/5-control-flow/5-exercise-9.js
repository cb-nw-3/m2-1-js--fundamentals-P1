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

let chess = "";
let oddRow = true;

for (i = 1; i < 65; i++) {
  let toAdd = "";
  if (oddRow) {
    if (i % 2 === 1) {
      toAdd += "#";
    } else {
      toAdd += "_";
    }
  } else if (i % 2 === 0) {
    toAdd += "#";
  } else {
    toAdd += "_";
  }

  if (i % 8 === 0) {
    toAdd += "\n";
    oddRow = !oddRow;
  }

  chess += toAdd;
}
console.log(chess);
