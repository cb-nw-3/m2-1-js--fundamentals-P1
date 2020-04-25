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

for(x = 0; x <=7; x++){
    if(x % 2 === 0){
        grid = "_"
        for(y = 0; y < 7; y++){
            if(y % 2 === 0){
                grid += "#"
            }else{
                grid += "_"
            }
        }
    }else if(x % 2 !== 0){
        grid = "#"
        for(w = 0; w< 7; w++){
            if(w % 2 === 0){
                grid += "_"
            }else{
                grid += "#"
            }

        }
    }  
    console.log(grid)
}