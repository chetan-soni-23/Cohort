let percentage = document.querySelector(".percentage");
let growth = document.querySelector(".growth");
let button = document.querySelector(".details button");

button.addEventListener('click',()=>{
    a = 0; // Reset on each button click

    let interval = setInterval(()=>{
        a++;
        percentage.innerHTML = a + '%';
        growth.style.width = a + '%';
        
        button.innerHTML = "Downloading...";

        if(a >= 100){
            clearInterval(interval); // Stop at 100%
            
            button.style.opacity = '0.5';
            button.innerHTML= "Downloaded";
            button.style.cursor = '';
            button.style.pointerEvents = 'none';
        }

       
    }, 50)
})