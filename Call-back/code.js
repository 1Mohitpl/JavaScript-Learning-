// call back function

function x (y) {

}

x(function y(){    // call the function x and passing another function as an argument known as Call-back function
     
})


setTimeout(() => {
    console.log("timer");
    
}, 5000);

function x (y) {
   console.log("x");
   y();
}

x(function y(){    
     console.log("y");
     
});

function attach(){
    let count = 0;
    document.getElementById("click")
    .addEventListener("click", () =>{
    console.log("hey this is mohit", ++ count);
});

}

attach();




















// console.log("Namestay");

// setTimeout(function () {
//     console.log("javascript");
// }, 5000)      // now it is 


// console.log("learning");

