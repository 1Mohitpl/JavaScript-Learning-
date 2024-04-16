const myobject = {
   
     py : "python",
     cpp : "C++",
     java : "java",
     js : "javascript"


}
for (const key in myobject ) {                          // ForIn loop for iterable object 
  
        // console.log(`${myobject[key]}`);
    }




const programmingLanguage = ["cpp", "java", "python", "Go" , "R"]

          for (const key in programmingLanguage) {                               
   
              console.log(`Learning languages are : ${programmingLanguage[key]}`);
}