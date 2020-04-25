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

// generate entire board

for (let i = 0; i < 8; i++) {
    let checkerboardLine;

    // generate one line
    if (i % 2 === 0) {
        for (let j = 0; j < 8; j++) {
            if (j % 2 === 0) {
                checkerboardLine += "#";
            } else {
                checkerboardLine += "_";
            }
        }
    } else {
        for (let j = 0; j < 8; j++) {
            if (j % 2 === 0) {
                checkerboardLine += "_";
            } else {
                checkerboardLine += "#";
            }
        }
    }
    console.log(checkerboardLine);
}