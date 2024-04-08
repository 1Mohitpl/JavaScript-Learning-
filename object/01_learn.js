// object literals 


const mySynbol = Symbol("key1")
const  iUser = {
     name : "mohit",
     "full_name " : "mohit paul",
     age : 22,
     [mySynbol] : "mykey1",    // use ' [] ' to declare the object 
     location:"India",
     email : "mohitpaul@gmail.com",
     isloggedin : false,
     lastLogin:["sunday", " saterday"]
}

console.log(iUser["email"])
console.log(iUser["full_name "])    // another way to access object 
console.log( iUser[mySynbol])       // use case of object 

Object.freeze(iUser)  // using these we can't change the value of object 

console.log(iUser)