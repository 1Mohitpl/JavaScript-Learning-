const teacher1 = {
    name: "john",
    age : "28",
    printname: function () {
        console.log(this.name);

    }
}

// teacher1.printname();

const teacher2 = {
    name : "deepika",
    age : "25",

}

teacher1.printname.call(teacher2);    // call methode

const student1 = {

    name : "ram",
    age : 23,
    x:   () => {
     console.log(this.name);
    }
};

student1.x()

// call apply bind methods (Sharing methods)
const student2 = {
  name: "sam",
  age: 24,
  fun: function () {
    // console.log(this.age);
    const val = () => {
      console.log(this.age);
      const result = () => {
        console.log(this.name);
      };
      result();
    }; // Enclosing lexical context here ;
    val();
  },
};

student2.fun(); // value of this = student2

// "this" inside the dom e

// "this" inside the dom elements => reference to the   HTMLelement
