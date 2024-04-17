const myNumbers = [1,3,4]

 const newValue= myNumbers.reduce(function (acc, curr){

     console.log(`acc : ${acc} and curr : ${curr}`);
    return acc +curr;
}, 0)

 console.log(newValue)


const result =myNumbers.reduce((acc, curr) => acc +curr ,0)      // using arrow function

console.log(result)