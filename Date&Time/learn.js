let date = new Date()
console.log(date.getUTCMonth() +1)

let birthDate = new Date(2001, 0, 13, 3)
console.log(birthDate.getTimezoneOffset())

let myTimeStamp = Date.now()

console.log(Math.floor(Date.now()/1000))      // converting time milliseconed into the second 