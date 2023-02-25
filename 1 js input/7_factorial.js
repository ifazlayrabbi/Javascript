'use strict'
const input = require('prompt-sync')()


let x = input('\nEnter the number, n = ')
let result = factorial(x)
console.log('\nFactorial of ' + x + ' = ' + result + '.\n')

function factorial(m){
    let result =1;
    for(let i=1; i<=m; i++){
        result *= i 
    }
    return result
}