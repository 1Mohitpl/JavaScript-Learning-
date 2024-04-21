// let CreatePromise = new Promise(function(resolve, reject) {

//      setTimeout(function() {
//         console.log('i am here2')
//      },5000);
    
// });

// let CreatePromise2 = new Promise(function(resolve, reject) {

//     setTimeout(function() {
//        console.log('i am here1')
//     },3000);
   
// });

// console.log('start');          // parallaly run two function using promise

// async function asyncFunction () {     // create asnyc function 

//     return 8;

// }

// asyncFunction();

// async function changes (){

//     let KolkataWeather =  new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve('kolkata is getting hot')
//         }, 1000);
//     });


//     let RaiganjWeather = new Promise((resolve, reject) =>{
//         setTimeout(() => {
//         resolve('Raiganj is much better');
//           },7000);
//     });


//     let kw =  await KolkataWeather;
//     let rw =  await RaiganjWeather;

//     return [kw, rw];
// }

// fecth api call

async  function utility () {

    let product = await fetch('https://jsonplaceholder.typicode.com/todos/1');
     let output = await product.json();
   console.log(output);
}

utility();