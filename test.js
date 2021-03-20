console.time('test');
const censor = require('./index')
console.log(censor.censor('it is a fuckin test'))
console.timeEnd('test');