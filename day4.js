const fs = require('fs')
const file = fs.readFileSync('./day4Inputs.txt',"utf8")
const fileLines = file.split('\n')
let isBirth = false
let isIssue = false
let isExp = false
let isHeight = false
let isHair = false
let isEye = false
let isPid = false

let niceDocsCount = 0
fileLines.forEach(line => {
    if(line.match("byr:")){
        const birthYear = line.split('byr:')[1].substring(0,4)
        if(birthYear > 1919 && birthYear < 2003){
            isBirth = true
        }
    }
    if(line.match("iyr:")){
        const issueYear = line.split('iyr:')[1].substring(0,4)
        if(issueYear > 2009 && issueYear < 2021){
            isIssue = true
        }
    }
    if(line.match("eyr:")){
        const expirationYear = line.split('eyr:')[1].substring(0,4)
        if(expirationYear > 2019 && expirationYear < 2031){
            isExp = true
        }
    }
    if(line.match("hgt:")){
        const heightWithUnit = line.split('hgt:')[1].substring(0,5)
        if(heightWithUnit.match("in") && heightWithUnit.substring(0,2) > 58 && heightWithUnit.substring(0,2) < 77){
            isHeight = true
        }
        if(heightWithUnit.match("cm") && heightWithUnit.substring(0,3) > 149 && heightWithUnit.substring(0,2) < 194){
            isHeight = true
        }
    }
    if(line.match("hcl:")){
        const hairSign = line.split('hcl:')[1][0]
        const hairColor = line.split('hcl:')[1].substring(1,7)
        const colorTest = /[0-9A-Fa-f]{6}/
        if(hairSign === "#" && colorTest.test(hairColor)){
            isHair = true
        }

    }
    if(line.match("ecl:")){
        const eyeColor = line.split('ecl:')[1].substring(0,3)
        if(["amb", "blu", "brn", "gry", "grn", "hzl", "oth"].findIndex(el => el === eyeColor) > -1){
            isEye = true
        }
    }
    if(line.match("pid:")){
        const passportNumber = line.split('pid:')[1].split(' ')[0]
        const passportNumberTest = /[0-9]{9}/
        if(passportNumberTest.test(passportNumber) && passportNumber.length === 9){
            isPid = true
            console.log(passportNumber)
        }

    }
    if(line === ""){
        if(isBirth&&isIssue&&isExp&&isHeight&&isHair&&isEye&&isPid){
            niceDocsCount++
        }
        isBirth = false
isIssue = false
isExp = false
isHeight = false
isHair = false
isEye = false
isPid = false
    }
})

console.log("nice docs: ", niceDocsCount)