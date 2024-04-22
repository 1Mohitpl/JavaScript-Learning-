const cart  = ["shirts", "shoes","toy"]

// createOrder(cart, function (orderId){
//     procedTopayment(orderId);
// });   // return order detils

createOrder(cart)

  // promise channing                 // console.log(promise);
.then(function (orderId){
    console.log(orderId);
    return orderId;
})
.catch (function(error) {
    console.log(error.message);
})
.then(function(orderId) {
    return procedTopayment(orderId)
})
 .then(function (paymentInfo) {
    console.log(paymentInfo)
 })

// .catch (function(error) {
//     console.log(error.message);
// })   

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

function procedTopayment(orderId){
    return new Promise (function (resolve, reject) {
        resolve("payment is done")
    });
}
function validcart(cart){
    return false;
}