var prompt = require ('prompt-sync')();



let aName = prompt('Enter name: ')
let aName_slice1 = aName.slice(0, 1).toUpperCase()
let aName_slice2 = aName.slice(1, aName.length).toLowerCase()

aName_slice1 = aName_slice1 + aName_slice2
console.log(aName_slice1)




/*
var aText = prompt ('Enter text: ')
var newText = aText.slice(0, 20)
console.log ('\nYou have entered ' + newText.length + ' characters, ' + (140-newText.length) + ' remaining.')
*/

/*
var aName = 'Moin'
console.log(aName.toUpperCase())
console.log(aName.toLowerCase())
*/




