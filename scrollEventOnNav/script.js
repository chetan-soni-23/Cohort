let nav = document.querySelector('nav');

let lastScroll = window.scrollY;

window.addEventListener('scroll', () => {
    let currentScroll = window.scrollY;
    if(currentScroll > lastScroll){
        // nav.style.top = '-60px';
         nav.style.transform = 'translateY(-100%)';
    } else {
        // nav.style.top = '0';
        nav.style.transform = 'translateY(0)';
        nav.style.transition = 'transform 0.3s ease';
    }
    
    lastScroll = currentScroll;
});