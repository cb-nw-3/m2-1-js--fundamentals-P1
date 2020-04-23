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

for (let i = 0; i < 7; i++) {
  let lineOdd = "#_#_#_#_";
  let lineEven = "_#_#_#_#";
  for (let x = 1; x <= i; x++) {
    if (x % 2 === 1) {
      console.log(lineOdd);
    } else {
      console.log(lineEven);
    }
  }
}
