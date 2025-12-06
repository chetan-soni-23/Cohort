const  button = document.getElementById('btn');

const card = document.getElementById('card');
const h2 = card.querySelector('h2');

let flag = 0;

button.addEventListener('click', () => {

    if(flag===0){
    h2.innerText = 'Request Sent!';
    h2.style.color = 'gold';
    button.style.display = 'none';

    setTimeout(() => {
        h2.innerText = 'Friend';
            h2.style.color = 'green';
            button.style.display = 'block';
            button.style.backgroundColor = 'crimson';
            button.innerText = 'Remove Friend';
            
            flag=1;
    }, 3000);
    }

    else{
            h2.innerText = 'Stranger';
            h2.style.color = 'Red';
            button.innerText= 'Add Friend';
            button.style.backgroundColor = 'green';
            button.style.display = 'block';
            flag=0;
        }
});