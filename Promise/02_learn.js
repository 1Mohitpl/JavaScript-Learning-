const cart = ["shirts", "shoes", "watch"];

createOrder(cart)
  .then(function (orderId) {
    console.log("Order ID:", orderId);
    return ordersummery(orderId);
  })
  .catch(function (error) {
    console.log(error.message);
  })

  .then(function (orderstatus) {
    console.log(orderstatus);
    
    return procedTopayment(orderstatus.orderId);
  })
  .then (function (paymentInfo) {
      return isorderplaced(paymentInfo);
  })

  .then (function (status) {
    console.log(status);
    
  })
  .catch(function (error) {
    console.log(error.message);
  });

function createOrder(cart) {
  return new Promise(function (resolve, reject) {
    if (!validcart(cart)) {
      const error = new Error("Cart is not valid");
      reject(error);
    } else {
      const orderid = "76833";
      setTimeout(function () {
        resolve(orderid);
      }, 4000);
    }
  });
}

function ordersummery(orderId) {
    return new Promise ( (resolve, reject) => {
        resolve (
            {
                orderId : orderId,
                products : cart
            }
        )
    })

}

function procedTopayment(orderId) {
  return new Promise(function (resolve, reject) {
    resolve("Payment is done for order ID: " + orderId);
  });
}



function isorderplaced(paymentInfo) {
    return new Promise ( (resolve, reject) => {
        setTimeout( () => {
            resolve("order is successfully placed", 2000)
        })
    })
}

function validcart(cart) {
  return true; // Ensuring the cart is valid if it contains items
}


 // +++++++++++++++++++++++++++++++++++++++++++++++++++++
// Learning ALL promise API



// const P1 = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         reject("p1 sucess")
//     }, 4000)
// })

// const P2 = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         reject("p2 sucess")
//     }, 5000)
// })

// const P3 = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         reject("p3 fail")
//     }, 3000)
// })

// Promise.any([P1, P2, P3])
//   .then((result) =>{
//     console.log(result);

//   })

//   .catch((err) =>{
//     console.error(err)
//     console.log(err.errors);
//   })



//   const P4 = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve("p1 sucess")
//     }, 4000)
// })

