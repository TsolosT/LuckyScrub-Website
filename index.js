// Add sticky behavior to navbar on scroll
window.addEventListener('scroll', function () {
    const navbar = document.querySelector('.nav');
    if (window.scrollY > 50) { 
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});
// Function to add fade-up class when the element is in view
function handleScroll() {
    const sections = document.querySelectorAll('.container-sub');
    const windowHeight = window.innerHeight;
    
    sections.forEach(section => {
        const rect = section.getBoundingClientRect();
        if (rect.top <= windowHeight - 100 && rect.bottom >= 0) {
            section.classList.add('fade-up');
        }
    });
}

// Add scroll event listener
window.addEventListener('scroll', handleScroll);

// Initial check on page load
window.addEventListener('load', handleScroll);

// Function to handle the scroll event and trigger fade-up effect
window.addEventListener('scroll', function() {
    const serviceCards = document.querySelectorAll('.service-card');
    
    serviceCards.forEach(card => {
        const cardTop = card.getBoundingClientRect().top; // Get the top position of the card relative to the viewport
        const windowHeight = window.innerHeight; // Get the height of the viewport
        
        // If the card is in the viewport
        if (cardTop < windowHeight * 0.8) {
            card.classList.add('visible'); // Add the visible class to trigger the fade-up
        }
    });
});

