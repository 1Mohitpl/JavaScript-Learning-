const pr1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("promise would be resolved")
    }, 5000)
})

const pr2 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("promise would be resolved2")
    }, 10000)
})

console.log(" start learning async");


async function handlePromise () {
 
    console.log("Hello world!!");
    // js engine was waiting for promise to be resolved 
    const val = await pr1;                              // handlePromise now exectuted after 4s before where left 
    console.log("nameste javascript")                      // await can only be used inside the async function
    console.log(val);


    const val2 = await pr2; 
    console.log("nameste javascript2")                      // await can only be used inside the async function
    console.log(val2);
   
}

handlePromise();

// handlePromise suspend 
// const pr = new  Promise((resolve, reject) => {
//     resolve("Before promised resolved");
// })




function earlyHnadlePromise () {
  
    //here JS engine will not wait for promise to be resolved 
    pr1.then((res) => console.log(res));
    console.log("first promise");
    
}

earlyHnadlePromise();


console.log("end learning");

// //+++++++++++++++++++++++++++++++++++++++++++++++
// //Real world example of async await

const API_URL = "https://api.github.com/users/1mohi";


async function  promisehandle() {
    try{
        const data =   await fetch(API_URL);
        const mydata = await data.json();
        console.log(mydata);
    }
   catch(err){
     console.log(err);
     
   }
    
}


promisehandle();
// const student = {

//     name: "ram",
//     age: 23, 
//     x:  () =>  {
//      console.log(this.age);
//     }
// };

// student.x()





















