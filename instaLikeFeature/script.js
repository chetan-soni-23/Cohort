let img = document.querySelector('img');
let body = document.querySelector('body');
img.addEventListener('dblclick', () => {
    let heart = document.createElement('img');
    heart.src = './igheart.png';
    heart.className=('heart');
    body.appendChild(heart)
    setTimeout(() => {
        body.removeChild(heart);
    }, 1000)});
