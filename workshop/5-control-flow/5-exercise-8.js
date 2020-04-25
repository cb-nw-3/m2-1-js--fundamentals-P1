// -------------------------------------------------------------
// Control Flow Exercises
// ----------
// note: need to have covered control flow for these exercises
// -------------------------------------------------------------

// Q8
// Write a loop that makes seven calls to console.log to output the following triangle:
// #
// ##
// ###
// ####
// #####
// ######
// #######

for(x=0; x<=6; x++){
    let line = "#"
    for(let i = 1; i <= x; i++){
    line = line + "#"
    }
    console.log(line)
}

// Try to do 
// MaMiMaMi
// MiMa 
// MaMiMaMi
// MiMa
// MaMiMaMi
// MiMa

for (x=0; x<=6; x++){
    let songStart=""
    if(x%2 === 0){
        songStart += "Ma"
        for(y=0; y<=2; y++){
            if(y%2 === 0){
                songStart+="Mi"
            }else{
                songStart+="Ma"
            }
        }
    }else{
        songStart +="Mi"
        for (w=0; w<1; w++){
            if (w%2 === 0){
                songStart +="Ma"
            }else{
                songStart +="Mi"
            }
        }
    }console.log(songStart)
}