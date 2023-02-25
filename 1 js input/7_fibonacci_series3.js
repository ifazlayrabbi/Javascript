"use strict"
var prompt = require('prompt-sync')()


let x = prompt('Number of elements in the series, n = ')
fibonacci(x)

function fibonacci(n){
    let arr = [0, 1]

    for(let i=2; i<n; i++)
        arr.push(arr[arr.length-1] + arr[arr.length-2])
    
    const str = arr.join(', ')
    console.log('Fibonacci series: ' + str + '\n')
}





// const arr = [1, 2, 3]
// var str = arr.join(' ') + '.'
// console.log(str)
