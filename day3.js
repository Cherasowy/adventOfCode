const fs = require('fs')

const file = fs.readFileSync('./day3Inputs.txt',"utf8")
const fileLines = file.split('\n')
let treesEncountered = {
    single: 0,
    third: 0,
    fifth: 0,
    seventh: 0,
    doubleDown: 0
}
let rightParams = {
    single: 1,
    third: 3,
    fifth: 5,
    seventh: 7,
    doubleDown: 1
}
let indexes = {
    single: 0,
    third: 0,
    fifth: 0,
    seventh: 0,
    doubleDown: 0
}

let lineNumber = 0
fileLines.forEach(line => {
    if(lineNumber){
        line[(indexes.single % line.length)] === '#' && treesEncountered.single ++;  
        line[(indexes.third % line.length)] === '#' && treesEncountered.third ++;  
        line[(indexes.fifth % line.length)] === '#' && treesEncountered.fifth ++;
        line[(indexes.seventh % line.length)] === '#' && treesEncountered.seventh ++;
        if(!(lineNumber%2)){
            line[(indexes.doubleDown % line.length)] === '#' && treesEncountered.doubleDown ++;
        }
    }
    indexes.single += rightParams.single
    indexes.third += rightParams.third
    indexes.fifth += rightParams.fifth
    indexes.seventh += rightParams.seventh
    if(!(lineNumber%2)){
        indexes.doubleDown += rightParams.doubleDown
    }
    lineNumber++
})

console.log("These are trees multiplied: ",treesEncountered.single * treesEncountered.third * treesEncountered.fifth * treesEncountered.seventh * treesEncountered.doubleDown)
