const pr = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("promise would be resolved")
    }, 10000)
})



async function handlePromise () {
 

    // js engine was waiting for promise to be resolved 
    const val = await pr;                       // await can only be used inside the async function
    console.log(val);
    console.log("nameste javascript")
}

handlePromise();

function earlyHnadlePromise () {
  
    //here JS engine will not wait for promise to be resolved 
    pr.then((res) => console.log(res));

    console.log("learning js ")
}