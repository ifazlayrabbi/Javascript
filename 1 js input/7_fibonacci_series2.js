"use strict"
var prompt = require('prompt-sync')()


let x = prompt('Number of elements in the series, n = ')
fibonacci(x)

function fibonacci(n){
    let arr = [0, 1]
    
    for(let i=2; i<n; i++)
        arr[i] = arr[i-1] + arr[i-2]
    
    let str = ''
    for(let i=0; i<n; i++)
        str = str + arr[i] + ', '
    
    console.log('Fibonacci series: ' + str + '\n')
}





// const arr = [1, 2, 3]
// var str = arr.join(' ') + '.'
// console.log(str)
