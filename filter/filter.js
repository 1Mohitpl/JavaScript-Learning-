const arr =  [5, 1, 3, 2, 6];
 
// filter out all the odd values

function isodd(x){
    return x % 2;
}

const oddVal = arr.filter(isodd);
console.log(oddVal);





const evenVal = arr.filter((a) => a%2 === 0    // arrow functiom things
);
console.log(evenVal);


const greatherthan4 = arr.filter((a) => a>4 // this  is another arrow functiuon things
);
console.log(greatherthan4);
