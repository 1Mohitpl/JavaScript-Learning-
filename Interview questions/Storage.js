/** Local storage vs session storage vs cookies */


// local storage

// localStorage.setItem('name', 'mohit');
// localStorage.setItem('place', 'kolkata');



// localStorage.clear();
function User(name) {
  this.name = name || "JsGeeks";
}

var person = new User("xyz");
person["location"] = "USA";
console.log(person);


let bookprice  = 200;
let pen = 100;

const result = bookprice > pen;

console.log(result)


// what will be outPut of the  following codd?

var objA = {prop1: 42};
var objB = objA;
objB = {};
console.log(objA)

// The output will be {prop1: 42}.

/*When we assign objA to objB, the objB variable will point to the same object as the objB variable.

However, when we reassign objB to an empty object, we simply change where objB variable references to. This doesn't affect where objA variable references to.*/


