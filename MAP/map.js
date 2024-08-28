const arr = [5, 2,3,1, 6]

// double  - [10, 4, 6, 2, 12]

function double(x){
    return x*2;
}

function binary(a){
    return a.toString(2);
}

const output = arr.map(double);
const output2 = arr.map(binary);
console.log(output);
console.log(output2);