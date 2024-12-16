document.addEventListener("DOMContentLoaded", function () {
    const scrollable = document.querySelector('.s1-hpb .scrollable');
    const scrollHeight = scrollable.scrollHeight;
    let scrollTop = 0;
    let scrolling;

    function scrollText() {
        if (scrollTop >= scrollHeight) {
            scrollTop = 0; // Reset to the start when it reaches the bottom
        }
        scrollable.scrollTop = scrollTop;
        scrollTop++;
    }

    function startScrolling() {
        scrolling = setInterval(scrollText, 30); // Adjust the speed by changing the interval time
    }

    function stopScrolling() {
        clearInterval(scrolling);
    }

    // Start scrolling when the page loads
    startScrolling();

    // Stop scrolling when the mouse enters the scrollable area
    scrollable.addEventListener('mouseover', stopScrolling);

    // Resume scrolling when the mouse leaves the scrollable area
    scrollable.addEventListener('mouseout', startScrolling);
});



// Get all nav links
const navLinks = document.querySelectorAll('.nav-link');

// Highlight the active link based on the current URL
navLinks.forEach(link => {
    if (link.href === window.location.href) {
        link.classList.add('active');
    } else {
        link.classList.remove('active');
    }
});
