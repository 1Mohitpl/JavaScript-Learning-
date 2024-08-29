function x(){
    let a = 2;
   return function y (){
        console.log(a);
        
    }
 
}

var c = x();
console.log(c);
c();   // that return whole lexical scope which is function x


function x() {
    for(var i = 1; i<=6; i++){
        function z (a){    // passing argument by value so, everytime creating a new value 
           setTimeout(() => {
                console.log(a);
            }, a *1000);
        }
        z(i);  // passing argument pass by value 
    }
   
  
    console.log("learning js");
    
}

x();