let btn = document.querySelector('.swapBtn');
let img1 = document.getElementById('img1');
let img2 = document.getElementById('img2');


btn.addEventListener('click', function() {
    let tempSrc = img1.getAttribute('src');
    img1.setAttribute('src', img2.getAttribute('src'));
    img2.setAttribute('src', tempSrc);
});