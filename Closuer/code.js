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
function outest(){
    var s = 20;
    function outer (b) {
       function inner () {
           console.log(a,s,b);
    }
    var a = 10;   // it does not matter of secquence
       return inner;
}
return outer;

}

var closer = outest()("hello world");
closer();


