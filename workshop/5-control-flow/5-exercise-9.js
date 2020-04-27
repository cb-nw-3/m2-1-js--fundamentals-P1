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

// i is columns and j is rows
let grid = "";

for(let j = 1; j <= 8; j++) {
    if (j%2 === 0){
        for (let i = 1; i <= 9; i++){
            if (i === 9){
                grid = grid + "\n";
            } else if (i%2 === 0){
                grid = grid + "_";
            } else if(i%2 != 0){
                grid = grid + "#";
            }
        }
    } else if (j%2 != 0){
    for (let i = 1; i <= 9; i++){
        if (i === 9){
            grid = grid + "\n";
        } else if (i%2 === 0){
            grid = grid + "#";
        } else if(i%2 != 0){
            grid = grid + "_";
        }
        }
    }
}



//even rows
