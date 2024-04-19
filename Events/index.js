setTimeout(function(){
   
    console.log('mohit')                 // executed after 4 second in console
}, 4000)

const changeText = function() {
  document.querySelector('h1').innerHTML = 'Tap this button'   // change the H1 tag
}

// setTimeout(changeText,3000);

//removing setTimeout 
const change = setTimeout(changeText,3000);
document.querySelector('#clik').addEventListener('click', function () {

      clearTimeout(change);
      console.log('stop the setTimeout')
})