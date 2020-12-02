const fs = require('fs')

const file = fs.readFileSync('./day2Inputs.txt',"utf8")
const fileLines = file.split('\n')
let validPassCount = 0
fileLines.forEach(line => {
    const [key,passwordWithTrash] = line.split(':')
    const [occurencies,letter] = key.split(' ')
    const [min,max] = occurencies.split('-')
    const password = passwordWithTrash.slice(1)
    let letterCounter = 0
    Array.from(password).forEach(passwordLetter => {
        if(passwordLetter === letter){
            letterCounter++
        }
    })
    if(letterCounter >= min && letterCounter <= max ){
        validPassCount++
    }
})
let validPassCount2 = 0
fileLines.forEach(line => {
    const [key,passwordWithTrash] = line.split(':')
    const [occurencies,letter] = key.split(' ')
    const [min,max] = occurencies.split('-')
    const password = passwordWithTrash.slice(1)
    const letterA = Array.from(password)[min-1]
    const letterB = Array.from(password)[max-1]
    if(letterA === letter){
        if(letterB !== letter){
            validPassCount2++
        }
    }else if(letterB === letter){
        if(letterA !== letter){
            validPassCount2++
        }
    }
})

console.log("Valid passwords first policy: ",validPassCount)
console.log("Valid passwords second policy: ",validPassCount2)