let product1 ={
    name: "Nokia 1310",
    price:2300,
    description:"a very old phone",
    rating: 4.7,

    display(){
        console.log(this);
        
    }

}
// this-> key word pointing to the calling site or calling context

let product2 = {
    name: "micromax",
    price:1200,
    description:"nice mobile",
    rating:4.8,

    display(){
        console.log("second product",this);
        
    }
}

product2.display();
