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


//solution

for(let x=1; x<8; x++) {
    // line needs to be declared inside the block, if its outside, then when the loop ends it saves the added characters instead of creating a new line
    let line='';

    //if the first x is odd, start with a # character
    if(x % 2 != 0) {
        line += '#';
        // for the remaining 7 characters, alternate between _ and #
        for(let y=1; y<8; y++) {
            if(y % 2 != 0) {
                line += "_";
            } else {
                line += "#";
            }
        }
    //if the first x is even, start with a _ character
    } else {
        line += '_';
        // for the remaining 7 characters, alternate between # and _
        for(let y=1; y<8; y++) {
            if(y % 2 != 0) {
                line += "#";
            } else {
                line += "_";
            }
        }
    }
    console.log(line);
}