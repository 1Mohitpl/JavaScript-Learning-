const myNums = [1,2,3,4,5,6,7,8,9,10]

const newNums = myNums.filter((num) => {
    return  num >4;                                  // if it is scope, them it is mendatory to mention "Return" Keyword
})

console.log(newNums)