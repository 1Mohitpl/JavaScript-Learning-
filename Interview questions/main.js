let name1 = {
    firstname : "Jhon",
    lasktname : "dhe",
    
}
const printName  =  function(city, state){
    console.log(this.firstname + " " +  this.lasktname + " " + city + " " +  state);
}




// let's take another object

let name2 = {
    firstname : "mohit",
    lasktname : "paul",
    // printName : function () {
    //     console.log(this.firstname + " " + this.lasktname);   this is not a good way of writing this, call came into the capture 
    // }
}

let name3 = {
    firstname : "Shreya",
    lasktname : "roy",
}

// so we can apply function borrowing methode, where we can borrowing function from, other objects
printName.call(name1, "kolkata", "westbengal");

printName.apply(name2, ["Raiganj", "westbengal"]);

// bind methode

const ans = printName.bind(name3, "Noida", "delhi");
ans();

/*******Polyfill */