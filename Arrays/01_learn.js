// const array = [34,6,75,754,45,35]
// console.log(array[2])

const array2 = new Array(2,46,687,68,43,5,5)
console.log(array2[3])

// array methodes 

array2.push(6)         // here add another value at the array
array2.unshift(4)     // here 4 is add at the first index
console.log(array2)     // print herer 
array2.shift()   // in this method, deleted the adding value from the array 
console.log(array2)  // print here

console.log(array2.includes(5))   // check the index the value, if it  is present or not 
console.log(array2.indexOf(46))   // check the index value where the attributes are exists

const newArray = array2.join()   // adds all the elemenets of an array into a string
console.log(newArray)
console.log(typeof newArray)

// slice and splice 

console.log("original array", array2)

const anotherArry = array2.slice(1,4)
                                               // slice did not manupulated the original array 
console.log("B", anotherArry)

const anotherArry2 = array2.splice(1,4)
console.log("after",array2)     // here see the splice method manupulated the original array 
console.log("c" ,anotherArry2)
