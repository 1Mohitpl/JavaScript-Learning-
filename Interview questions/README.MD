
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

