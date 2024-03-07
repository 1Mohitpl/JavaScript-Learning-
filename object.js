// alert("Hello")[1, 2].forEach(alert);


// let reactangle = {           // object create 

//     lenght: 1 ,
//     breadth: "mohit",

//     draw :function(){
//     console.log('drawing reactangle');
//     }
    
// };

//   console.log (reactangle.lenght);
//   console.log (reactangle[draw]);

// factory function 
// function creatReactangle (len, bre) {

//     return reactAngle  = {          

//         lenght: len,
//         breadth: bre,
    
//         draw (){
//         console.log('drawing reactangle');
//         }
        
//     };


//   }
     
    //  reactAngle.draw();
//    let reactAngleobj1 = creatReactangle(5,4)
//    console.log(reactAngleobj1);



  //  let reactangleobj1 = creatReactangle();
  //  console.log(reactangleobj1.draw);



  // constructor function => pascal notation => first letter of every word is capital

  function Mycar (col, collec, len) {
    
    this.color = col;
    this.collection = collec;
    this.lenght = len;
    this.size = 13;
    this.draw = function () {

        console.log(this.size);
    }

  }

  // object creatiion using constructor funtion

let mycarObject  = new Mycar ( "green" , 4, 5 );
console.log(mycarObject);

mycarObject.speed = 40;        // add a new property 
console.log(mycarObject);

delete mycarObject.size;       // delete an property from an object
console.log(mycarObject);

console.log(mycarObject.constructor);
console.log(Mycar.constructor);


let Mycar1 = new Function('len', 'collec', 'col' , 
` 
this.color = col;
this.collection = collec;
this.lenght = len;
this.size = 13;
this.draw = function () {

    console.log(this.size);
}`);

 // object creation using mycar1 
 let rec = new  Mycar1(2);
 console.log(rec);













// let's create another function 

//  function  Myhouse  ( col, price, add) {

//           this.color = col;
//           this.priceofHouse = price;
//           this.address = add;
//  }


//  let MyhouseObject = new Myhouse ("Black" , "1cr" , "India")

//  console.log(MyhouseObject);


//  MyhouseObject.size = "2bhk";
//  console.log(MyhouseObject);     // add new property 



//  delete MyhouseObject.color;
// console.log(MyhouseObject);    // delete an property




// object cloning using iteration methode

let Car = {
   
  color : "Red",

  price : "2cr",

  Model  : "suv"
  

};

let dest = {};


for (let key in Car ){

    dest [key] = Car[key];
}

console.log (dest)