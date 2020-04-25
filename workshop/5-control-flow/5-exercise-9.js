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

let gridString = "";

for (let number = 1; number < 9; number++) {

    if (number %2 == 0) {
        for (let oddRowNumber = 1; oddRowNumber < 9; oddRowNumber++) {

            if (oddRowNumber %2 == 0) {
                gridString = gridString + "#"
            } else 
            {
                gridString = gridString + "_"
            }
        }
    } else  {
        for (let evenRowNumber = 1; evenRowNumber < 9; evenRowNumber++) {
            if (evenRowNumber %2 == 0) {
                gridString = gridString + "_"
            } else 
            {
                gridString = gridString + "#"
            }
        }
    } 
    gridString = gridString + "\n";
}
console.log(gridString);