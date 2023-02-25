
// javascript user input - import library
const prompt = require('prompt-sync')()



console.clear()
console.log(`\n`)
console.log(`Hello, Moin`)

// var a, b, c
var a = 5
var b = 8
var c = a+b
console.log(c)
console.log('\n')

// string
var myName = 'Moin Sarkar'
var nameLength = myName.length
console.log(nameLength)
console.log(myName[2])
console.log('\n')

// function call
function func(myName, age, height){
    var store = "I'm " + myName + ".\n" + "My age is " + age + ", and I'm " + height + '.'
    console.log(store)
}
func('Moin', 26, '5\'6\"')

// array
var myArray = [5, 6, 7]
for(i=0; i<myArray.length; i++){
    console.log(myArray[i])
}

var newArray = [[5, 6], [3, 4], [[20, 30], [40, 50]], 9, 7]
console.log(newArray[1])
console.log(newArray[1][0])
console.log(newArray[1][1])

console.log(newArray[2])
console.log(newArray[2][0])
console.log(newArray[2][1])
console.log(newArray[2][1][0])
console.log(newArray[2][1][1])


// Array push
var aaArray = ['Moin', 'Mim']
// aaArray.push('Mrittika')
aaArray.push (['Mrittika', 'Saba'])
console.log (aaArray)

var nw = aaArray.pop ()
console.log (nw)
console.log (aaArray)
console.log ("\n")

nw.push ('Maria')
console.log (nw)

console.log (nw.shift())
console.log (nw)

nw.unshift('AA')
console.log (nw)

// printing array elements in a single line
var arr = [1, 5, 3,  65, 34, 2, 23, 23]
var str = arr.join(', ') + '.'
console.log('Array elements: ' + str + '\n')


// global local variable
console.log('\n')
var outerWear = 'T-shirt'
function func (){
    var outerWear = 'Sweater'
    return outerWear
}
console.log (func())
console.log (outerWear)


// function return
function func1 (num){
    num = num - 7
    return num
}
console.log("num = " + func1(10))


// javascript user input from console
// const aName = prompt ('Enter your name: ')
// const aAge = parseInt(prompt("Enter your age: "))
// console.log ('\nHi ' + aName)
// console.log('You are ' + aAge + '.')

// console.log(typeof(aAge))
// console.log(typeof(aName))



// js typecasting
var num2 = '26'
console.log(num2)
console.log(typeof(num2))

num2 = parseInt(num2)
console.log(typeof(num2))
console.log(num2)













