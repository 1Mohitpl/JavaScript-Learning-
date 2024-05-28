const heros = ["rahul", "mohit", "dev"];
let myobj = {
    name : "mohit",
    age : "33",
};

console.log(heros.name);

const myFunction  = function() {
   
    console.log("hello mohit");

}

console.log ( myFunction())



// stcak (primitive) and heap(non-primitive) memorey in javascript 

let myYoutubeName = "mohitpaul";

let altername = myYoutubeName;

// console.log(altername);

altername = "mohitkumarpaul";
console.log(myYoutubeName);
console.log(altername);


let userOne = {

     email :"user@gmail.com",
     password: "9383",

}

let userTwo = userOne;
console.log(userTwo);

userTwo.email = "ekthaashique@gmail.com";

console.log(userOne.email);
console.log(userOne.email);
