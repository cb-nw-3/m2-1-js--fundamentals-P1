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

// Not sure if were supposed to build the string line by line or character by character

// Version 1. Character by character
let strOutput = "";
for (let i = 1; i <= 8; i++) {
  let pound = "#";
  let uScore = "_";
  for (let j = 1; j <= 8; j++) {
    if (i % 2 !== 0) j % 2 !== 0 ? (strOutput += pound) : (strOutput += uScore);
    else j % 2 === 0 ? (strOutput += pound) : (strOutput += uScore);
  }
  strOutput += "\n";
}
console.log(strOutput);

// Version 2. Line by line
let strOutput2 = "";
for (let i = 1; i <= 8; i++) {
  let line1 = "#_#_#_#_\n";
  let line2 = "_#_#_#_#\n";
  i % 2 === 0 ? (strOutput2 += line2) : (strOutput2 += line1);
}
console.log(strOutput2);
