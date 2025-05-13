// let name1 = {
//     firstname : "Jhon",
//     lasktname : "dhe",
    
// }
// const printName  =  function(city, state){
//     console.log(this.firstname + " " +  this.lasktname + " " + city + " " +  state);
// }




// // let's take another object

// let name2 = {
//     firstname : "mohit",
//     lasktname : "paul",
//     // printName : function () {
//     //     console.log(this.firstname + " " + this.lasktname);   this is not a good way of writing this, call came into the capture 
//     // }
// }

// let name3 = {
//     firstname : "Shreya",
//     lasktname : "roy",
// }

// // so we can apply function borrowing methode, where we can borrowing function from, other objects
// printName.call(name1, "kolkata", "westbengal");

// printName.apply(name2, ["Raiganj", "westbengal"]);

// // bind methode

// const ans = printName.bind(name3, "Noida", "delhi");
// ans();

// /*******Polyfill */



// let a = 10;
// a = 30;
// var c = 500;
// var c = 600;
// console.log(c);
// console.log(a);
// const b = 100;

// let fun = function() {
//     const b = 200;
//     console.log(b);

// }
//  fun();

//  console.log(b);


/** DEEP Copy vs Shallow Copy */

// shallow copy in Object
const userOne = {
    name : "mohit",
}

const userTwo = Object.assign({}, userOne);
userOne.name = "rahul"
// console.log(userOne)
// console.log(userTwo);


// shallow copy in another methode

const person1 = {
    name : "Rahul",
    address : {
        city : 'kolkata',
        state : 'west bengal'
    }

}

const person2 = {...person1}         // here both the Objects are pointing to the different memory location

person2.address.city = "siliguri"
person2.name = "Mohit"
// console.log(person2);
// console.log(person1)


// but there is an catch here, if we perform same 
// methode with nested objects then, top properties 
// are pointing to the different location, but nested objects are
// remain same pointing to the same memory reference

// solve this problem by using stringify

const person3 = {
    name : "Rahul",
    address : {
        city : 'kolkata',
        state : 'west bengal',
        school : {
        name : "rchs"
    }
    }

   

}

const person4 = JSON.parse(JSON.stringify(person3));
person4.address.school.name = "kar"
console.log(person4);
console.log(person3)

// 