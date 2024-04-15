const userEmail = "mohitpaul@gmail.com"

if (userEmail) {
     
    console.log("get the user email");
} else{
      
    console.log("don't have any user email")
}

// falsy values 

// false, 0, -0, BigInt 0n, " ",   null, undefined, NaN

// truthy values 

// "0", 'false' , " ", [], {} , function () {}

// checking the object is empty is not 

const  emtyobject = {} 

if (Object.keys(emtyobject).length == 0) {

    console.log("object is empty");
}

// Nullish coalescing Operator (??) : null undefined 

let value ;
 
value  = 5 ?? 10

console.log(value)

// Tarnary operator 

// condition ? true : false

const carPrice = 400

carPrice >= 300 ? console.log("yes you can buy") : console.log("not eligable ");