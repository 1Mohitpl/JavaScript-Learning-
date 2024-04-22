const cart  = ["shirts", "shoes","toy"]

createOrder(cart, function (orderId){
    procedTopayment(orderId);
});   // return order detils


const promise = createOrder(cart);

promise.then(function (orderId){
    procedTopayment(orderId)
})


