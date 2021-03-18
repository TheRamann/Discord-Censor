const badwords = require('./badwords.js');

function check(checkingthismessage) {
    if (!checkingthismessage) return console.log("Please give me something to check")
    var somearray = checkingthismessage.split(" ")
    if (badwords.some(r => somearray.includes(r)) == true) return true
    else return false
}
function censor(checkingthismessage, replacethiswithcensored) {
    if (!replacethiswithcensored) {
        replacethiswithcensored = "!!Censored!!"
    }
    if (!checkingthismessage) return console.log("Please give me something to check")
    var somearray = checkingthismessage.split(" ")
    badwords.some(r => {
        if (somearray.includes(r) == true) {
            var index = somearray.indexOf(r);
            if(index == -1) return console.log("There was an error with the parameter you provided")
            somearray[index] = replacethiswithcensored
        }
    })

    return somearray.join(' ')
}
module.exports = {
    badwords: badwords,
    check: check,
    censor: censor
}