// var b = 200
let a = 400

if(true){

    let a = 67       
    var b = 45
    const c  = 20  
    // console.log("inner : ", a)  
}
 
// console.log(a)          // a did not acces outer of the scope 
// console.log(b)
// console.log(c)            // c did not acces outer of the scope



function one (){
    const userName = "mohit"

    function two (){
        const website = "youtube"
        console.log(userName);

    }

    // console.log(website)

    two()
}

one ()