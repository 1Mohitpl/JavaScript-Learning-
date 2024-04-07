let course = [

    {no:1, name  : 'biology'},
    {no:2, name : 'mathematics'}
];

console.log(course)


let rutine  = course.find(function(course){          // call back fucntion that helps to searching in object 
    return course.name === 'biology'
})

console.log(rutine)

let course_work = course.find(course => course.name === 'biology')   // using arrow function is an another way 
console.log(course_work)



// emptying array 

let numbers = [2,6,8,4,5,24,90]

numbers.length =0; 
// console.log(numbers)      // another methode 
numbers.splice(0, numbers.length) // another methods 

// console.log(numbers)     

while(numbers.length >0){

     numbers.pop()
}                                              // another methode

console.log(numbers)

// combined array 

let numbers1 = [3,5.6,653,564,7,42,8]
let numbers2 = [20,50,35,7,25,546,70]

let all_numbers =  numbers1.concat(numbers2)    // using concat method

console.log(all_numbers)


let list = [3,2,5,-2,-6,8,-10]

let filterd_number = list.filter(value => value >=0)  // call-back function 

console.log(filterd_number)


// mapping array 


let students = [4,6,7]

let roll_number = students.map (value => 'roll_NO' + value)

console.log(roll_number)