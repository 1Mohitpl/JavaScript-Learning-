const pr = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("promise would be resolved")
    }, 10000)
})



async function handlePromise () {
 
    console.log("Hello world!!");
    // js engine was waiting for promise to be resolved 
    const val = await pr; 
    console.log("nameste javascript")                      // await can only be used inside the async function
    console.log(val);


    const val2 = await pr; 
    console.log("nameste javascript2")                      // await can only be used inside the async function
    console.log(val2);
   
}

handlePromise();

// function earlyHnadlePromise () {
  
//     //here JS engine will not wait for promise to be resolved 
//     pr.then((res) => console.log(res));

//     console.log("learning js ")
// }