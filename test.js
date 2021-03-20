console.time('test');
const censor = require('./index')
console.log(censor.censor('fuck'))
console.timeEnd('test');