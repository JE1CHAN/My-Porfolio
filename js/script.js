// --- Dark Mode Logic with localStorage ---
const toggleBtn = document.getElementById('theme-toggle');
const toggleIcon = toggleBtn.querySelector('i');
const rootElement = document.documentElement;

// Check local storage on load
const savedTheme = localStorage.getItem('theme');
if (savedTheme) {
    rootElement.setAttribute('data-theme', savedTheme);
    updateIcon(savedTheme);
}

toggleBtn.addEventListener('click', () => {
    const currentTheme = rootElement.getAttribute('data-theme');
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    
    rootElement.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
    updateIcon(newTheme);
});

function updateIcon(theme) {
    if (theme === 'dark') {
        toggleIcon.classList.remove('fa-moon');
        toggleIcon.classList.add('fa-sun');
    } else {
        toggleIcon.classList.remove('fa-sun');
        toggleIcon.classList.add('fa-moon');
    }
}

// --- Mobile Menu Toggle ---
const menuBtn = document.getElementById('mobile-menu');
const navLinks = document.getElementById('nav-links');

menuBtn.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});

function closeMenu() {
    if (window.innerWidth <= 768) {
        navLinks.classList.remove('active');
    }
}

// --- Animate on Scroll (Intersection Observer) ---
const observerOptions = {
    threshold: 0.15 
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('active');
        }
    });
}, observerOptions);

const revealElements = document.querySelectorAll('.reveal');
revealElements.forEach(el => observer.observe(el));
