//for loop

const arr = [2,45,65,4,8,5]

for (const num of arr) {
    console.log(num)
    
}

const Lecture = "welcome to the math class"

for (const subject of Lecture) {
    console.log(`${subject}`)
}

//maps 

const map = new Map()                             // always take unique value 
 
map.set("pen", "Use & throw")                 
map.set("notebook" , "classmate")
map.set("math", "HC verma")

// console.log(map)


for (const key of map) {                      // use forOF to get array 
    
    // console.log(key)
}

for (const [key, value] of map) {                      // use "[]" this to get the key and value of the map
    
    console.log(key, value)
}


const newObjetc = {

     Class : "Nine",
     school : "abx"
}


for (const [key, value] of newObjetc) {         // obejct is not iterable with this process 
     
    console.log(key, value)
}
