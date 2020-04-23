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

let cell = ["#", "_"];
let chessboard = ""
let position = 0;
for (let width = 1; width <= 8; width++) {
  for (let height = 1; height <= 8; height++) {
    chessboard += cell[position];
    (position >= 1) ? position = 0 : position++;
  }
  (position === 0) ? position = 1 : position = 0;
  chessboard += "\n"
}