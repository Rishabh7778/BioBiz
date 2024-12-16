document.addEventListener("DOMContentLoaded", function () {
    const scrollable = document.querySelector('.s1-hpb .scrollable');
    const scrollHeight = scrollable.scrollHeight;
    let scrollTop = 0;
    let scrolling;

    function scrollText() {
        if (scrollTop >= scrollHeight) {
            scrollTop = 0; 
        }
        scrollable.scrollTop = scrollTop;
        scrollTop++;
    }

    function startScrolling() {
        scrolling = setInterval(scrollText, 30);
    }

    function stopScrolling() {
        clearInterval(scrolling);
    }

    startScrolling();
    scrollable.addEventListener('mouseover', stopScrolling);
    scrollable.addEventListener('mouseout', startScrolling);
});



const navLinks = document.querySelectorAll('.nav-link');

navLinks.forEach(link => {
    if (link.href === window.location.href) {
        link.classList.add('active');
    } else {
        link.classList.remove('active');
    }
});
