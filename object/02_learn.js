const tinderUser = {}

tinderUser.id = "435bne" 
tinderUser.name = "Rahul"
tinderUser.age = 23                       // add all the object into the empty objecr => tinderUser
tinderUser.addres = "india"

// console.log(  tinderUser)


// object under  the object 


const  dailyUser = {
    email : "rahul@gmail.com",
    fullName : {
         userName : {
            firstName : "Rahul",
            lastName : "roy"
         }
    }
}


console.log(dailyUser.fullName.userName.lastName)





const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}

// const obj3 = {obj1, obj2}

const obje3 =  Object.assign({}, obj1, obj2)    // combined two object  with assign methods

const obj4 = {...obj1, ...obj2}                // spread methods 

// console.log(obje3)


// data coming form data base in the form of array itself


const users =[
    {

         id :1,
         name : "rahul"
    },

    {

        id :2,
        name : "saam"
   },

   {

    id :3,
    name : "lipika"
},



]

console.log(users[1].name)

console.log(tinderUser)
 
console.log(Object.keys(tinderUser))    // converting all the objects into the arrays 
console.log(Object.values(tinderUser))  // get the values of an objets in the array
console.log(Object.entries(tinderUser)) // make an indivitual  key value into the array 