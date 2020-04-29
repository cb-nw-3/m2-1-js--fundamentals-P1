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

let chessboard='';

for (let row=0; row<8; row++){
  const isRowEven = row % 2 === 0;

  for (let col=0; col<8; col++){
  const iscolEven = col % 2 === 0; 
  
  if(isRowEven === iscolEven){
      chessboard+='#';
  }else{
      chessboard+='_';
  }
  }
  console.log(chessboard);
chessboard+= '\n'
}