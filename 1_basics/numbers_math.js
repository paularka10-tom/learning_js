const x = 2000
//console.log(x)
const bal = new Number(6543)
//console.log(bal)

//console.log(bal.toString().length)
console.log(bal.toFixed(3))

let goodNumber = 36.54354
//console.log(goodNumber.toPrecision(5))
const hundreds = 1000000
console.log(hundreds.toLocaleString('en-IN'))



// MATHS -----   -----  -----  ----  ----  -----  -----

console.log(Math)

//console.log(Math.round(-2.6564))
//console.log(Math.ceil(5.002))
//console.log(Math.floor(5.989))
//console.log(Math.min(5, 7, 9, 4, 2,6,5))
//console.log(Math.max(5, 7, 9, 4, 2,6,5))

console.log(Math.random()) // 0<value<1
console.log(Math.floor(Math.random()*10)+1)

const min = 10
const max = 20
console.log(Math.floor(Math.random() * (max - min +1))+min)
