
var prompt = require('prompt-sync')()

var guestList = ['Angela', 'Sarah', 'Moin']
var guestName = prompt("What is your name? ")


if (guestList.includes(guestName))
    console.log('Welcome! to the party.')
else
    console.log('Sorry, next time!')
