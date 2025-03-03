const arr = [5, 1, 3, 2, 6];

// sum of max;

function findSum(arr){         // this is simple function to find out sum of variable

    let sum = 0;
    for(let i = 0; i<arr.length; i++){   
      sum += arr[i];
    }
    return sum;
}
console.log(findSum(arr));


// now reduce the above code with reduce functiclson

const output = arr.reduce(function(acc, curr){
     acc = acc + curr;
     return acc;
}, 0)

console.log(output);

// find out max 

function findMax (arr){
    let max= 0;
    for(let i= 0; i<arr.length; i++){
        if(arr[i] > max){
            max = arr[i];
        }
    }

    return max;
}

console.log(findMax(arr));

// write the same code using reduce fuction

const result = arr.reduce((acc, curr) =>{
    if(curr >acc){
        acc = curr;
    }
    return acc;
}, 0)
console.log(result);
