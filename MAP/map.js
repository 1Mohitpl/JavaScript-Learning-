// const arr = [5, 2,3,1, 6]

// // double  - [10, 4, 6, 2, 12]

// function double(x){
//     return x*2;
// }

// function binary(a){
//     return a.toString(2);
// }

// const output = arr.map(double);
// const output2 = arr.map(binary);
// console.log(output);
// console.log(output2);


// example of another map function

const users = [
    {fisrtName: "ram", lastName: "saha", Age: 23},
    {fisrtName: "mohit", lastName: "paul", Age: 23},
    {fisrtName: "neha", lastName: "saha", Age: 27}
];

// findout the list of full name

const output = users.map((X) => X.fisrtName + " " + X.lastName);
console.log(output);


// findout the number of pepole in different level of age

const outputAge = users.reduce((acc, curr) => {
    if(acc[curr.Age]){
        acc[curr.Age] = ++ acc[curr.Age];

    } else{
        acc[curr.Age] = 1;
    }
     return acc;
}, {})

console.log(outputAge)

// findout the fisrtname whose age < 26 using filter function

const result = users.filter((X) => X.Age<26).map((X) => X.fisrtName);
console.log(result);

// perform this into the reduce function

const result2 = users.reduce((acc, curr) => {
    if(curr.Age<26){
        acc.push(curr.fisrtName);

    }
    return acc;
},[])

console.log(result2);
