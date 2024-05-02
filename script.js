const  maximum = document.querySelector('.max');
const  minimum = document.querySelector('.min');
const  box = document.querySelector('.number');
const  button = document.querySelector('.submit');
const  error = document.querySelector('.err');
const  conerr = document.querySelector('.generateNumber');
const  container = document.querySelector('.container');
const  input = document.querySelectorAll('.inputitem input');
// this line is a function that will show error
function showerrors()  {
    error.style.display = "block"
    conerr.style.borderColor =  "red"
    maximum.style.borderColor = "red"
    minimum.style.borderColor = "red"
    container.style.borderColor = "red"
    container.style.boxShadow = "0 0 20px red"
    box.style.display = "none"
}
// this line is a function that will hide error
function hideerrors(){
    error.style.display = "none"
    conerr.style.borderColor =  "black"
    maximum.style.borderColor = "black"
    minimum.style.borderColor = "black"
    container.style.borderColor = "black"
    container.style.boxShadow = "0 0 20px black"
    box.style.display = "block"
    
}
// this line is a function that generate a random number

function generate(){
    let max = parseInt(maximum.value);
    let min = parseInt(minimum.value);
    let random = Math.floor(Math.random() *  (max - min + 1)) + min; 
    input[0].addEventListener('keypress', () => {
        hideerrors()
    })
    input[1].addEventListener('keypress', () => {
        hideerrors()
    })
    if(isNaN(max) || isNaN(min)){
        showerrors()
    }
    else if(max < min || max === min){
        showerrors()
    }  
    else{
        hideerrors() 
        box.innerHTML = random;   
    }
}
button.addEventListener('click', generate)
document.addEventListener('keypress', (e) => e.key === 'Enter' && generate())