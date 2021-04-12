const censor = require('../index')

function CHECKING(CheckThis){
    return "RESULTS FOR CHECKING \""+CheckThis+"\": "
}

console.log(CHECKING("Fuck")+ censor.check("Fuck"))
console.log(CHECKING("Hi")+ censor.check("Hi"))

function CENSORCHECK(CheckThis){
    return "RESULTS FOR CENSORING \""+CheckThis+"\": "
}

console.log(CENSORCHECK("Is it a fuckin curse?")+ censor.censor("Is it a fuckin curse?"))
console.log(CENSORCHECK("Is it a curse?")+ censor.censor("Is it a curse?"))

if(censor.badwords){
    console.log("Array is also good")
}

if(!censor.badwords){
    console.log("Array is not so good")
}