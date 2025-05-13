
- In this `interviw question` File, we see DEEP Copy vs Shallow copy
- Normally we are coping with normal methode

```
const userOne = {
    name : "mohit",
}

const userTwo = userone;
userOne.name = "rahul"
consol.log(usertwo);
consol.log(userone);

```
- Output  = `{name : "rahul"}, {name : "rahul"}`
- Because above code, both the user referr to the same memory location, So if we update the obeject properties in Usertwo, it will update the userone as well. This is a problem, So that we can solve this problem by using object assign methode

# Shallow Copy

## What is Shallow copy?
- shallow copy create an new object with copies with top-level properties of the original object. It means it share the copies of object, not referring to the same memory location.For the properties like premetives (example: number, boolean, strings), the values itself is copied. but in the case non-premities like(Arrays, nested objects), only reference is copied - not the actual data.

- For example, using Spread operator we can achive Shallow copy

```
  const person1 = {
    name : "Rahul",
    address : {
        city : 'kolkata',
        state : 'west bengal'
    }

}

const person2 = {...person1}  

person2.address.city = "siliguri"
person2.name = "Mohit"
console.log(person2);
console.log(person1)

```
- here both the person refere to the differet memory location, but only top-level properties. nested objects are copies by the actual data.So if we update the `person2.address.city = siliguri` it is also update the person1 nested properties.

- This is the problem occur with shallow copy, So we using the Deep Copy.

# Deep Copy

## What is Deep copy?
- Deep copy means it duplicates every object property and nested object of the original object. This ensure that the copy is completly independent of the original object and changes to the copying object do not effect to the original object.

- Deep copy is essential with complex data-strutures like nested objects or arrays, specailly when integrity of our data is important.

#### How to apply Deep copy
- Using `JSON.string()` and `JSON.parse()`:
- It is basically converts the whole object into JSON string and parses it back into a new object.
- There some limitations
  -  it will not works in circuler refernce
  - it will ignore properties like `functions`, `undefined` and `symbol`

#### Example

  ```
  
const person3 = {
    name : "Rahul",
    address : {
        city : 'kolkata',
        state : 'west bengal'
    }

}

const person4 = JSON.parse(JSON.stringify(person3));
person4.address.city = "mumbai"
console.log(person4);
console.log(person3)

  ```
- Above line of code, both the person pointing to the different memory location and also deep copy in nested objects.

- Along with we can also use `Lodash` libery to robus deep cloning methodes
