const newValue = document.querySelector('.main')

// console.log(newValue)
// console.log(newValue.children[2].innerHTML)

for (let i = 0; i < newValue.children.length; i++) {
   console.log(newValue.children[i].innerHTML);
    
}

// console.log("nodes :", newValue.childNodes);    //nodelist


const result = document.addEventListener('click', function() {

   // console.log('you just cliked')                          // Evenet listener
});


function evenFuntcion() {
   console.log('welcome to the website')
}

document.addEventListener('click',  evenFuntcion);        // event listener


document.removeEventListener('click', evenFuntcion );         // remove eventLister



let links = document.querySelectorAll('a')
let lastLink = document.addEventListener('click', function(event) {

       
        event.preventDefault();
        console.log('it will not perform')                             // preventDefault action where function is not working here 


 })


 // Types, timestamps, defaultPreventd
 //target , toElement, srcElement, currentTarget,