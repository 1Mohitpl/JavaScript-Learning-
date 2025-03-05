class Product{
    // no-need of use let,var,const
    name;
    price;
    discription;

    display() {
        // no-need to write function key word"
    }

    constructor (name, price, desc){
          this.name = name;
          this.price = price;
          this.discription = desc;
          console.log("constructor is called");
          
    }


}

const p = new Product("mohit", 100, "a iphone"); // default constructor

console.log(p);

