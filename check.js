
const cursorOutline = document.querySelector("[data-cursor-outline]");
const cursorDot = document.querySelector("[data-cursor-dot]");

window.addEventListener("mousemove", function(e){
    const posX = e.clientX;
    const posY = e.clientY;

    cursorDot.style.left = `${posX}px`;
    cursorDot.style.top = `${posY}px`;

    cursorOutline.animate({
        left: `${posX}px`,
        top: `${posY}px`
    }, {duration: 700, fill: "forwards"});
});

// Cursor ended

// for the top scroll auto btn 

const toTop = document.querySelector(".to-top");
window.addEventListener("scroll", ()=> {
    if(window.pageYOffset > 100){
        toTop.classList.add("active");
    } else{
        toTop.classList.remove("active");
    }
});

document.addEventListener('DOMContentLoaded', () => {
    const intro = document.getElementById('intro');
    const content = document.getElementById('content');
    setTimeout(() => {
        intro.style.display = 'none';
        content.style.display = 'block';
        content.style.animationPlayState = 'running';
    }, 2000); // Adjust the timing as needed
});


const goToTopButton = document.getElementById('goToTopButton');

window.addEventListener('scroll', () => {
    if (window.pageYOffset > 300) { // Adjust this value as needed
        goToTopButton.classList.add('visible');
    } else {
        goToTopButton.classList.remove('visible');
    }
});

goToTopButton.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});

document.addEventListener('DOMContentLoaded', () => {
    const navLinks = document.querySelectorAll('nav ul li a');

    navLinks.forEach(link => {
        const staticSpan = link.querySelector('.static');
        const animSpan = link.querySelector('.anim');

        if (staticSpan && animSpan) {
            const staticText = staticSpan.textContent;
            const animText = animSpan.textContent;

            staticSpan.innerHTML = '';
            animSpan.innerHTML = '';

            staticText.split('').forEach((char, index) => {
                const span = document.createElement('span');
                span.textContent = char === ' ' ? '\u00A0' : char; // Use non-breaking space for spaces
                span.style.transitionDelay = `${index * 50}ms`; // Adjust delay as needed
                staticSpan.appendChild(span);
            });

            animText.split('').forEach((char, index) => {
                const span = document.createElement('span');
                span.textContent = char === ' ' ? '\u00A0' : char; // Use non-breaking space for spaces
                span.style.transitionDelay = `${index * 50}ms`; // Adjust delay as needed
                animSpan.appendChild(span);
            });
        }
    });
});