let myName  = "Mohit           ";

console.log(myName.trim().length);


let myheros = ["spiderman", "badman"]  // array 

let heroPower = {
    spiderman : "flying",             // object 
    badman : "fighting",


}

Object.prototype.mohit = function() {
    console.log(`mohit is preasent in all objects`)
}

Array.prototype.heyMohit = function() {
    console.log(`mohit is a software enginner`);
    
}
// heroPower.mohit();
// myheros.mohit();
myheros.heyMohit();   // array get the access of the prototype as expected 

// heroPower.heyMohit();   // object here not access the prototype

myheros.prototype