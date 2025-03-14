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
