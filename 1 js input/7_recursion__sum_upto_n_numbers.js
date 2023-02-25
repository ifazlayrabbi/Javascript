
'use strict'
const input = require('prompt-sync')()

// let n
function sum(n){
    if(n != 0)
        return n + sum(n-1)
    else
        return n
}

num = parseInt(input('Enter the value of n: '))
let result = sum(num)

console.log('Summation of 1 to ' + num + ' = ' + result)