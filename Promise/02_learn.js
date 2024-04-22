const cart  = ["shirts", "shoes","toy"]

// createOrder(cart, function (orderId){
//     procedTopayment(orderId);
// });   // return order detils

const promise = createOrder(cart);

// console.log(promise);


promise.then(function (orderId){
    console.log(orderId);
    // procedTopayment(orderId)
})

.catch (function(error) {
    console.log(error.message);
})

//proudcer

function createOrder(cart) {

    const prom = new Promise(function (resolve, reject) {
          //createorderid
          //validcart
          //orderid
        if(!validcart(cart)){
          
            const error = new Error("cart is not valid");
            reject(error);
        }

        //logic for orderid

        const orderid  = "76833";
        if(orderid){
            setTimeout(function (){
                resolve(orderid);
            }, 4000);
        }
    });

    return prom;
}

function validcart(cart){
    return false;
}