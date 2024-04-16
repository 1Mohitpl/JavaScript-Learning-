// const myNums = [1,2,3,4,5,6,7,8,9,10]

// const newNums = myNums.filter((num) => {
//     return  num >4;                                  // if it is scope, them it is mendatory to use "Return" Keyword
// })

// console.log(newNums)

const myNumbers = [1,2,3,4,5,6,7,8,9,10]

const newNums = myNumbers.map((num) => { return num +10})       // add num with 10 
// console.log(newNums)

 myNumbers.forEach((num) => { 
    
    // console.log(num +10)                          // add value by using foreach methode
})


const newValue = myNumbers 
                .map((item) => item *10)
                .map((item) => item +1 )
                .filter((item) => item >40)


console.log(newValue)