// JavaScript to handle active class on large screens
function setActiveLink() {
    if (window.innerWidth > 768) {
        const navLinks = document.querySelectorAll('.nav-item-zyoa');
        const currentPage = window.location.pathname.split('/').pop(); // Get the current page filename

        navLinks.forEach(link => {
            const linkPage = link.getAttribute('href').split('/').pop();
            if (linkPage === currentPage) {
                link.classList.add('active');
            } else {
                link.classList.remove('active');
            }
        });
    }
}

// Call setActiveLink on page load and when the window is resized
window.addEventListener('load', setActiveLink);
window.addEventListener('resize', setActiveLink);

// Toggle mobile menu (same as before)
const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links-zyoa');

menuToggle.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});