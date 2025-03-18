console.log("Looking for software enginnering role");

setTimeout(() => {
  console.log("Inside setTimeout");
}, 0);

fetch("https://jsonplaceholder.typicode.com/todos/1")
  .then((response) => response.json())
  .then((data) => console.log("Fetched Data:", data));

Promise.resolve().then(() => {
  console.log("Inside Promise");
});

console.log("ready to join immediately");


const Person = {
    name : 'jhon',
    age : 25,
    proffession : 'programmer'
}

console.table(Person);
