// function-constructor
function Product (name, price, desc) {
    this.name = name;
    this.price = price;
    this.desc = desc;
    
}

const properties =  new Product("kitkat", 10, "a good chockalte");
console.log(properties);
