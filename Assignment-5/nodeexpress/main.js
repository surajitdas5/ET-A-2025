// default import 
// const add = require("./utils.js")
// const sum = require("./utils.js")


// console.log(add(10, 20));
// console.log(sum(100, 200));

// Named Import
// const x = require('./utils.js')
const {add, sub} = require('./utils.js')
// const {sum, sub} = require('./utils.js') // not correct

// // console.log(x)
// // console.log(x.sub(4,2))
// console.log(sub(40,20))