const score = 400
console.log( score)


const value = new Number(200)
console.log( value)


console.log( value.toString().length)
console.log(value.toFixed(2))    // usde in ecommarce application


const anotherNumber = 323.44545

console.log(anotherNumber.toPrecision(3))

const price = 30000000
console.log(price.toLocaleString('en-IN'))

console.log(Math.ceil(5.7))
console.log(Math.floor(8.7))
console.log(Math.min(4,7,8,4,6))
console.log(Math.max(5,4,9,8,9))


console.log(Math.random());

console.log((Math.random() * 10) +1)
console.log(Math.floor(Math.random()*10) +1)

const min = 10
const max = 20

console.log(Math.floor(Math.random() * (max-min+1)) +min)