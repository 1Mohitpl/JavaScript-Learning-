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


// every fuction is an objetc at the end in javascript
function multiplye (num) {
     return num *6;

}

multiplye.power = 3;
console.log(multiplye(4));
console.log(multiplye.power);

console.log(multiplye.prototype);



function createUser  (username, score) {
     this.username = username // to point the currenct context
     this.score = score;
}

createUser.prototype.increment = function () {
     this.score++;
}

const chai  = new createUser("chai", 24);
const coffe = createUser("coffe", 250);


chai.increment();
console.log(chai);


