const newText = function() {
    document.querySelector('h1').innerHTML= 'learn completed'
  }
//   document
//   const Start = setTimeout(newText,2000);             // using setTimeout to change the text 
 let actionId;
// Removing the setTimeout Methode for happend an Event
document.querySelector('#Start').addEventListener('click', function () {
       
      if(!actionId) {
        actionId = setTimeout(newText,3000);
      }
     
    
    

});

document.querySelector('#Stop').addEventListener('click',function() {

      clearTimeout(actionId);
})


const sayDate = function() {
    console.log("hellow world", Date.now())
}
     let nIntervalId;
document.querySelector('#Start').addEventListener('click',function() {
      
      // check the interval is already is preasent or not
       nIntervalId = setInterval(sayDate, 2000);
    

     
})
      // Stope the interval 
document.querySelector('#Stop').addEventListener('click', function() {

    clearInterval(nIntervalId);
    nIntervalId =null;
})           