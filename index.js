// Add sticky behavior to navbar on scroll
window.addEventListener('scroll', function () {
    const navbar = document.querySelector('.nav');
    if (window.scrollY > 50) { 
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});
