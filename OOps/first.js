class Product{
    // no-need of use let,var,const
    
    #name;
    age;
    discription;

  

    constructor (name, age, desc){
          this.#name = name;
          this.age = age;
          this.discription = desc;
          console.log("constructor is called");
          
    }
    display() {
        // no-need to write function key word"
     console.log(this.#name, this.age, this.discription);
     return;
    }

}

const p = new Product("mohit", 24, "Software enginner"); // default constructor


p.display();

