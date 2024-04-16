const languages = ["python" ,"cpp" ,"java", "Runy", "GO"]

languages.forEach(function (value)  {                 // this an method to write function
                                           
    // console.log(value)
})


languages.forEach((item) => {          // using arrow function to exectute the code



    // console.log(item)
})

function printMe (item) {
    //  console.log(item)
}

languages.forEach(printMe)    // using primtme function as an parameter 

languages.forEach((item, index, arr) => {     // not only acces to the items but it can acces the index and whole array 
    
    // console.log(item, index, arr)
})


const myCoding = [
    {
        languageName : "python",
        lanuguagefile : "py"
    },

    {
        languageName : "c++",
        lanuguagefile : "cpp"
    },

    {
        languageName : "javascript",
        lanuguagefile : "js"
    }
]

myCoding.forEach((key) => {
     
    console.log(key.languageName)            // here we can acces each element of an array 
})