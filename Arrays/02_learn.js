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