const bulb = document.getElementById('bulb');
const button = document.querySelector('button');
const body = document.body;
let isOn= false;

body.style.backgroundColor = "black";
button.addEventListener('click', ()=>{
    if (isOn){
        bulb.src = "https://www.w3schools.com/js/pic_bulbon.gif";
        isOn= false;
    }
    else{
        bulb.src = "https://www.w3schools.com/js/pic_bulboff.gif";
        isOn = true;
    }
})