const newValue = document.querySelector('.main')

// console.log(newValue)
// console.log(newValue.children[2].innerHTML)

for (let i = 0; i < newValue.children.length; i++) {
   console.log(newValue.children[i].innerHTML);
    
}

console.log("nodes :", newValue.childNodes);    //nodelist
