const user = {

    username : "mohit",
    price : 999,

    welcomemessage : function(){

        console.log(`${this.username},  Welcome to the website`)
    }
}

user.welcomemessage()
user.username ="rahul"
user.welcomemessage()


// const life = function(){

//      let username = "mohit paul"
//      console.log(this.username);
// }

const life = () =>{                      // arrow function syntax

    let username = "mohit paul"
    console.log(this.username);
}

console.log(life())


const addTwo = (num1, numb2) =>{
        
    return num1 +numb2                            // arrow function 

}

console.log(addTwo(3,9));


const addTwonumber = (num1, numb2) => ( num1 +numb2);   // implicit return 

console.log(addTwonumber(4,6))
