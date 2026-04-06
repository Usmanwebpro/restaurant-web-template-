window.addEventListener('scroll', function() {
    const navbar = document.getElementById('navbar');
    
    if (window.scrollY > 50) {
        // When scrolled down
        navbar.classList.remove('transparent');
        navbar.classList.add('solid');
    } else {
        // When at the top
        navbar.classList.remove('solid');
        navbar.classList.add('transparent');
    }
});
const toggle = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".nav-links");

toggle.addEventListener("click", () => {
    navLinks.classList.toggle("active");
});