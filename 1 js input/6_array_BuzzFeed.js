var prompt = require('prompt-sync')()


console.log('\nDisplay 1 - 100: \n')
for(var i=1; i<=100; i++){
    if((i % 3 == 0) && (i % 5 == 0)){
        var k = 'BuzzFeed'
        console.log(k)
    }
    else if(i % 3 == 0){
        var k = 'Buzz'
        console.log(k)
    }
    else if(i % 5 == 0){
        var k = 'Feed'
        console.log(k)
    }
    else
        console.log(i)
}



