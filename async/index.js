// const pr1 = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve("promise would be resolved")
//     }, 4000)
// })

// const pr2 = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve("promise would be resolved2")
//     }, 10000)
// })


// async function handlePromise () {
 
//     console.log("Hello world!!");
//     // js engine was waiting for promise to be resolved 
//     const val = await pr1;                              // handlePromise now exectuted after 4s before where left 
//     console.log("nameste javascript")                      // await can only be used inside the async function
//     console.log(val);


//     const val2 = await pr2; 
//     console.log("nameste javascript2")                      // await can only be used inside the async function
//     console.log(val2);
   
// }

// handlePromise();

// handlePromise suspend 

// function earlyHnadlePromise () {
  
//     //here JS engine will not wait for promise to be resolved 
//     pr.then((res) => console.log(res));

//     console.log("learning js ")
// }


//+++++++++++++++++++++++++++++++++++++++++++++++
//Real world example of async await


const student1 = {

    name : "ram",
    age : 23,
    info:  function ()  {
     console.log(this.age);
    }
};

student1.info()


                                       // call apply bind methods (Sharing methods)
const student2 = {

    name : "sam",
    age : 24,
    fun:  function ()  {
        // console.log(this.age);
                                  // Enclosing lexical context here ;
                                  
    const result = () => {                    
        console.log(this.name);

        };

        result()
    }

    
};
 
student2.fun()      // value of this = student2


