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

for (let x = 0; x < 8; x += 1) {
    let line = '';

    if (x % 2 === 0) {
        line += '_';

        for (let y = 0; y < 7; y += 1){
            if (y % 2 === 0) {
                line += '#'
            } else {
                line += '_';
            }
        }
    } else {
        line += '#';

        for (let y = 0; y < 7; y += 1){
            if (y % 2 === 0) {
                line += '_'
            } else {
                line += '#';
            }
        }
    }

    console.log(line);
}