
var prompt = require('prompt-sync')()

var year = prompt("Enter a year: ")

if(year % 4 == 0){
    if(year % 100 == 0){
        if(year % 400 == 0)
            console.log(year + ' - leap year')
        else
            console.log(year + ' - not a leap year')
    }
    else
        console.log(year + ' - leap year')
}
else
    console.log(year + ' - not a leap year')


