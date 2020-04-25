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

let grid = "";
for (let i = 0; i < 8; i++){
    let str1 = '#_#_#_#_\n';
    let str2 = '_#_#_#_#\n';
    if(i%2 === 0){
        grid += str1;
    } else{
        grid += str2;
    }
}
console.log(grid);