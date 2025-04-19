function multyply(x) {
    return function (y) {
      return function (z) {
        return x * y*z;
      }
    }
 }
 
 console.log(multyply(5)(5)(5)); 
 