"use strict"
var prompt = require('prompt-sync')()


let x = prompt('Number of elements in the series, n = ')
fibonacci(x)

function fibonacci(n){
    var num1 = 0, num2 = 1
    let arr = [0, 1]
    // arr[0] = num1
    // arr[1] = num2
    
    for(let i=2; i<n; i++){
        var num3 = num1 + num2
        arr[i] = num3
        num1 = num2
        num2 = num3
    }
    
    let str = ''
    for(let i=0; i<n; i++)
        str = str + arr[i] + ', '
    
    console.log('Fibonacci series: ' + str + '\n')
}





// const arr = [1, 2, 3]
// var str = arr.join(' ') + '.'
// console.log(str)
