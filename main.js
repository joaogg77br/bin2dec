const inputBinary = document.querySelector(".binary")
const btn = document.querySelector('button')
const h2 = document.querySelector("h2")
const valor = /[^01]/g;
const inputDecimal = document.querySelector(".decimal")

function writeBinary(){
   let stringIn = inputBinary.value ;
   let arr = stringIn.split("")
   console.log(arr) 
    arr.forEach(element => {
       if(element != 0 && element != 1){
            h2.style.display = "block"
       }else{
            h2.style.display = "none"
       } 
    });
    inputBinary.value = inputBinary.value.replace(valor,'') 
    
}

function isBinary(){
    const binary = inputBinary.value;
    const decimal = parseInt(binary,2);
    inputDecimal.value = decimal
    inputBinary.value = '' 
    
}
inputBinary.addEventListener('input',writeBinary)
btn.addEventListener('click',isBinary)





