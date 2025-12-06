const btn = document.getElementById("btn");
const box = document.getElementById('box');

btn.addEventListener('click', ()=>{
    c1= Math.floor(Math.random()*100);
    c2= Math.floor(Math.random()*100);
    c3= Math.floor(Math.random()*100);
    box.style.backgroundColor = `rgb(${c1}, ${c2}, ${c3})`;
})