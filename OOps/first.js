class Person{
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

    set setName (name) {
           // setname is used for access the private variable into the class of an obect
        if(typeof(name) != 'string'){
            console.log("invalid name passed");
            return;
            
        }
        this.#name = name;
    }

    // setPrice (price){
    //     if(price < 0) return;
    //     this.
    // }

    get getName () {
        // get the 
        return this.#name;
    }

    display() {
        // no-need to write function key word"
     console.log(this.#name, this.age, this.discription);
     return;
    }

}

const p = new Person("mohit", 24, "Software enginner"); // default constructor

p.setName = "tina"

console.log(p.getName);   // with 'get', now don't have to call the function



