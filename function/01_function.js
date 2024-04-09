// function addTwoNumbers (number1, number2) {

//     console.log(number1 + number2)
// }


function addTwoNumbers (number1, number2) {

    let result = (number1 + number2)
    return result
}
const final = addTwoNumbers(7,4)

console.log(final)


function loginUserMessage(username){

      return `${username} just logged in`
}

console.log(loginUserMessage("mohit"))


function  calculatePrice (val1, val2, ...num1) {     // ... rest opertaor to use pass the multiple value as parameter 

     return num1
}

console.log(calculatePrice(200,400,460))



// create an object that pass into the function 


const user = {
     
    username :"mohit",
    price : 200
}



function handleObject(anyobject ){

      console.log(`username is ${anyobject.username} and price is ${anyobject.price}`);


}

// handleObject(user)

handleObject ({              // passing object in function 

     username : "rahul",       
     price: 399
})


const myNewarray = [300, 605,893,900]

function returnSecondvalue (getarray){

    return getarray[2]
}

console.log(returnSecondvalue(myNewarray))

console.log(returnSecondvalue([300,100,900]))    // pass a new array 



