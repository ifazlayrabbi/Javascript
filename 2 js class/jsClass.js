'use strict'
// A 'JS class' is a template for objects.

class Car {
  constructor(name, year){
    this.name = name
    this.year = year
  }
}
const car1 = new Car('Toyota', 2022)
const car2 = new Car('Audi', 2023)
console.log(car1.name)







class Calculation {

  addition (num1, num2){
    const ADD = num1 + num2
    return ADD
  }

  subtraction (num1, num2){
    const SUB = num1 - num2
    return SUB
  }
  
  multiplication (num1, num2){
    const MUL = num1 * num2
    return MUL
  }
  
  division (num1, num2){
    const DIV = num1 / num2
    return DIV
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

