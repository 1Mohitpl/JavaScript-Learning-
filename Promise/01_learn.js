let CreatePromise = new Promise(function(resolve, reject) {

     setTimeout(function() {
        console.log('i am here2')
     },5000);
    
});

let CreatePromise2 = new Promise(function(resolve, reject) {

    setTimeout(function() {
       console.log('i am here1')
    },3000);
   
});

console.log('start');          // parallaly run two function using promise