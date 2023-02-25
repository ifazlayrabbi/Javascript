'use strict'
// A 'JS class' is a template for objects.



class Car {                     // user defined class
  constructor(name, year){
    this.name = name
    this.year = year
  }
  func () {
    console.log('Good work.')
  }
}
const car1 = new Car('Toyota', 2022)
const car2 = new Car('Audi', 2023)
const car3 = new Car()

console.log(car1.name)
car3.func()







class Calculation {

  addition (num1, num2){
    const ADD = num1 + num2
    return '\nAddition = ' + ADD
  }

  subtraction (num1, num2){
    const SUB = num1 - num2
    return 'Subtraction = ' + SUB
  }
  
  multiplication (num1, num2){
    const MUL = num1 * num2
    return 'Multiplication = ' + MUL
  }
  
  division (num1, num2){
    const DIV = num1 / num2
    return 'Division = ' + DIV + '\n'
  }

}

// const add = new Calculation()
// const sub = new Calculation()
// const mul = new Calculation()
// const div = new Calculation()

// console.log(add.addition(8, 2))
// console.log(sub.subtraction(8, 2))
// console.log(mul.multiplication(8, 2))
// console.log(div.division(8, 2))


const cal = new Calculation()

console.log(cal.addition(8, 2))
console.log(cal.subtraction(8, 2))
console.log(cal.multiplication(8, 2))
console.log(cal.division(8, 2))









const date = new Date()   // system defined class
console.log(date.toLocaleString())

const options = {
  weekday: 'long',
  year: 'numeric',
  month: 'short',
  day: 'numeric'
}
console.log(date.toLocaleString('en-US', options))

