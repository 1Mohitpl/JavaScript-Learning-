const newText = function() {
    document.querySelector('h1').innerHTML= 'learn completed'
  }
//   document
//   const Start = setTimeout(newText,2000);             // using setTimeout to change the text 

// Removing the setTimeout Methode for happend an Event
document.querySelector('#Start').addEventListener('click', function () {
   
             setTimeout(newText,3000);
    
    

});

document.querySelector('#Stop').addEventListener('click',function() {

      clearTimeout(newText);
})


