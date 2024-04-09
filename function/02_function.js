run()

function  run () {
     
    console.log('running');
}



 // name function assignment 
let moveing = function walk () {

    console.log('walking')
}

moveing() 



// anonymous function assignment
let move = function  () {

    console.log('walking')
}

move()




// passing multiple parameter as an arguments 
function sum (a,b){

    return a +b 
}

console.log(sum(3,6,4,2,1,9))



function sumValue (a,b){

        let total = 0;
        for(let value of arguments)    // use argument object for passing multiple values as an parameter 
            total = total + value
        return total;
    
}

let ans =sumValue(3,2,5,6,4,6,3,9)
console.log(ans)