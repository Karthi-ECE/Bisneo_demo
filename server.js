let lastScrollTop = 1;
const navbar = document.getElementById('navbar');

window.addEventListener('scroll', function() {
    const currentScroll = window.pageYOffset || document.documentElement.scrollTop;
    
    if (currentScroll > lastScrollTop) {
        // Scroll down
        navbar.style.top = '-85px'; // Adjust the value to the height of your navbar
    } else {
        // Scroll up
        navbar.style.top = '0';
    }
    
    lastScrollTop = currentScroll <= 0 ? 0 : currentScroll; // For Mobile or negative scrolling
});
