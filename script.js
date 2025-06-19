
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

document.addEventListener('DOMContentLoaded', () => {
    const h2Spans = document.querySelectorAll('.main-content h2 span');
    const h1Spans = document.querySelectorAll('.main-content h1 span');

    h2Spans.forEach((span, index) => {
        span.style.setProperty('--word-index', index);
    });

    h1Spans.forEach((span, index) => {
        span.style.setProperty('--word-index', index);
    });
});

// Scroll direction detection

let lastScrollY = window.pageYOffset;

const navbar = document.querySelector('nav');

window.addEventListener('scroll', () => {
    const currentScrollY = window.pageYOffset;

    if (currentScrollY > lastScrollY) {
        // Scrolling down
        navbar.classList.add('hidden');
    } else {
        // Scrolling up
        navbar.classList.remove('hidden');
    }

    lastScrollY = currentScrollY;
});


//.contone h1 transition
document.addEventListener('DOMContentLoaded', function() {
    const words = document.querySelectorAll('.contone h1 .word');
    let lastScrollTop = 0;

    function isElementInViewport(el) {
        const rect = el.getBoundingClientRect();
        return (
            rect.top >= 0 &&
            rect.left >= 0 &&
            rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
            rect.right <= (window.innerWidth || document.documentElement.clientWidth)
        );
    }

    function onScroll() {
        const st = window.pageYOffset || document.documentElement.scrollTop;
        const scrollDown = st > lastScrollTop;
        lastScrollTop = st <= 0 ? 0 : st; // For Mobile or negative scrolling

        words.forEach((word, index) => {
            if (isElementInViewport(word)) {
                if (scrollDown) {
                    setTimeout(() => {
                        word.classList.add('visible');
                    }, index * 100); // Delay for each word
                } else {
                    setTimeout(() => {
                        word.classList.remove('visible');
                    }, index * 100); // Delay for each word
                }
            } else {
                // If the word is out of viewport and we scroll up, hide it
                if (!scrollDown) {
                    setTimeout(() => {
                        word.classList.remove('visible');
                    }, index * 100); // Delay for each word
                }
            }
        });
    }

    window.addEventListener('scroll', onScroll);
});


// Learnmore button js 
const button = document.getElementById('Buttonoftiltfx');

button.addEventListener('mousemove', (e) => {
    const rect = button.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const halfWidth = rect.width / 2;
    const halfHeight = rect.height / 2;
    const moveX = (x - halfWidth) / 4; // Adjusted to reduce movement
    const moveY = (y - halfHeight) / 4; // Adjusted to reduce movement

    button.style.setProperty('--move-x', `${moveX}px`);
    button.style.setProperty('--move-y', `${moveY}px`);

    button.style.animation = 'moveTowardsCursor 0.3s forwards';
});

button.addEventListener('mouseleave', () => {
    button.style.animation = '';
});



// Image transition blur upcoming effect (fx) 
document.addEventListener('DOMContentLoaded', () => {
    const images = document.querySelectorAll('.image-container img');

    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            } else {
                entry.target.classList.remove('visible');
            }
        });
    }, observerOptions);

    images.forEach(image => {
        observer.observe(image);
    });
});


// maxsthree h2 transition
document.addEventListener('DOMContentLoaded', function() {
    const maxsthree = document.querySelector('.maxsthree');
    const h2 = maxsthree.querySelector('h2');
    
    let lastScrollTop = 0;

    window.addEventListener('scroll', function() {
        let st = window.pageYOffset || document.documentElement.scrollTop;

        if (st > lastScrollTop) {
            // Downscroll code
            h2.classList.add('show');
        } else {
            // Upscroll code
            h2.classList.remove('show');
        }

        lastScrollTop = st <= 0 ? 0 : st; // For Mobile or negative scrolling
    });
});



// maxsthree h1 transition
document.addEventListener('DOMContentLoaded', function() {
    const words = document.querySelectorAll('.maxsthree h1 .word');
    let lastScrollTop = 0;

    function isElementInViewport(el) {
        const rect = el.getBoundingClientRect();
        return (
            rect.top >= 0 &&
            rect.left >= 0 &&
            rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
            rect.right <= (window.innerWidth || document.documentElement.clientWidth)
        );
    }

    function onScroll() {
        const st = window.pageYOffset || document.documentElement.scrollTop;
        const scrollDown = st > lastScrollTop;
        lastScrollTop = st <= 0 ? 0 : st; // For Mobile or negative scrolling

        words.forEach((word, index) => {
            if (isElementInViewport(word)) {
                if (scrollDown) {
                    setTimeout(() => {
                        word.classList.add('visible');
                    }, index * 100); // Delay for each word
                } else {
                    setTimeout(() => {
                        word.classList.remove('visible');
                    }, index * 100); // Delay for each word
                }
            } else {
                // If the word is out of viewport and we scroll up, hide it
                if (!scrollDown) {
                    setTimeout(() => {
                        word.classList.remove('visible');
                    }, index * 100); // Delay for each word
                }
            }
        });
    }

    window.addEventListener('scroll', onScroll);
});



// maxsthree h1 transition
document.addEventListener('DOMContentLoaded', function() {
    const words = document.querySelectorAll('.osoone h1 .word');
    let lastScrollTop = 0;

    function isElementInViewport(el) {
        const rect = el.getBoundingClientRect();
        return (
            rect.top >= 0 &&
            rect.left >= 0 &&
            rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
            rect.right <= (window.innerWidth || document.documentElement.clientWidth)
        );
    }

    function onScroll() {
        const st = window.pageYOffset || document.documentElement.scrollTop;
        const scrollDown = st > lastScrollTop;
        lastScrollTop = st <= 0 ? 0 : st; // For Mobile or negative scrolling

        words.forEach((word, index) => {
            if (isElementInViewport(word)) {
                if (scrollDown) {
                    setTimeout(() => {
                        word.classList.add('visible');
                    }, index * 100); // Delay for each word
                } else {
                    setTimeout(() => {
                        word.classList.remove('visible');
                    }, index * 100); // Delay for each word
                }
            } else {
                // If the word is out of viewport and we scroll up, hide it
                if (!scrollDown) {
                    setTimeout(() => {
                        word.classList.remove('visible');
                    }, index * 100); // Delay for each word
                }
            }
        });
    }

    window.addEventListener('scroll', onScroll);
});


// Our services and offers images section js 
document.addEventListener('DOMContentLoaded', () => {
    const images = document.querySelectorAll('.image2 img');

    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            } else {
                entry.target.classList.remove('visible');
            }
        });
    }, observerOptions);

    images.forEach(image => {
        observer.observe(image);
    });
});



// Banner moving of services 
function pauseScroll(selector) {
    document.querySelector(selector).style.animationPlayState = 'paused';
}

function resumeScroll(selector) {
    document.querySelector(selector).style.animationPlayState = 'running';
}

// News heading traansition start 
// maxsthree h1 transition
document.addEventListener('DOMContentLoaded', function() {
    const words = document.querySelectorAll('.newssecone h1 .word');
    let lastScrollTop = 0;

    function isElementInViewport(el) {
        const rect = el.getBoundingClientRect();
        return (
            rect.top >= 0 &&
            rect.left >= 0 &&
            rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
            rect.right <= (window.innerWidth || document.documentElement.clientWidth)
        );
    }

    function onScroll() {
        const st = window.pageYOffset || document.documentElement.scrollTop;
        const scrollDown = st > lastScrollTop;
        lastScrollTop = st <= 0 ? 0 : st; // For Mobile or negative scrolling

        words.forEach((word, index) => {
            if (isElementInViewport(word)) {
                if (scrollDown) {
                    setTimeout(() => {
                        word.classList.add('visible');
                    }, index * 100); // Delay for each word
                } else {
                    setTimeout(() => {
                        word.classList.remove('visible');
                    }, index * 100); // Delay for each word
                }
            } else {
                // If the word is out of viewport and we scroll up, hide it
                if (!scrollDown) {
                    setTimeout(() => {
                        word.classList.remove('visible');
                    }, index * 100); // Delay for each word
                }
            }
        });
    }

    window.addEventListener('scroll', onScroll);
});

// To give news effect without aos 
// Transition swipe to right of news section 
// window.addEventListener('scroll', function() {
//     const swipeContainer = document.getElementById('swipeContainernews1');
//     const rect = swipeContainer.getBoundingClientRect();
//     const windowHeight = window.innerHeight;

//     if (rect.top >= 0 && rect.bottom <= windowHeight) {
//         swipeContainer.classList.remove('hidden');
//         swipeContainer.classList.add('visible');
//     } else {
//         swipeContainer.classList.remove('visible');
//         swipeContainer.classList.add('hidden');
//     }
// });



// 2nd section js for text animation 
document.addEventListener('DOMContentLoaded', () => {
    const images = document.querySelectorAll('.newsimage-container a img');

    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            } else {
                entry.target.classList.remove('visible');
            }
        });
    }, observerOptions);

    images.forEach(image => {
        observer.observe(image);
    });
});


// sLIDER OF logos pause run 
let isPaused = false;
const logoSlider = document.querySelector('.Logo-slider');

function logopausef() {
    if (!isPaused) {
        logoSlider.style.animationPlayState = 'paused';
        isPaused = true;
    }
}

function logoresf() {
    if (isPaused) {
        logoSlider.style.animationPlayState = 'running';
        isPaused = false;
    }
}



document.addEventListener('DOMContentLoaded', () => {
    const navLinks = document.querySelectorAll('.footeropsecone ul li a');

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


// To give news effect without aos 
// // Transition swipe to right of news section 
// window.addEventListener('scroll', function() {
//     const swipeContainer = document.getElementById('swipeContainernews2');
//     const rect = swipeContainer.getBoundingClientRect();
//     const windowHeight = window.innerHeight;

//     if (rect.top >= 0 && rect.bottom <= windowHeight) {
//         swipeContainer.classList.remove('hidden');
//         swipeContainer.classList.add('visible');
//     } else {
//         swipeContainer.classList.remove('visible');
//         swipeContainer.classList.add('hidden');
//     }
// });


// About Section Js Starts here 

// Learnmore button js 


// const VAONBTN = document.getElementById('VAON-BTN');

// button.addEventListener('mousemove', (e) => {
//     const rect = VAONBTN.getBoundingClientRect();
//     const x = e.clientX - rect.left;
//     const y = e.clientY - rect.top;
//     const halfWidth = rect.width / 2;
//     const halfHeight = rect.height / 2;
//     const moveX = (x - halfWidth) / 4; // Adjusted to reduce movement
//     const moveY = (y - halfHeight) / 4; // Adjusted to reduce movement

//     VAONBTN.style.setProperty('--move-x', `${moveX}px`);
//     VAONBTN.style.setProperty('--move-y', `${moveY}px`);

//     VAONBTN.style.animation = 'moveTowardsCursor 0.3s forwards';
// });

// VAONBTN.addEventListener('mouseleave', () => {
//     VAONBTN.style.animation = '';
// });

