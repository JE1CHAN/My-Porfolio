AOS.init({
    once: true,
    offset: 100,
    duration: 800, 
});


const toggleBtn = document.getElementById('theme-toggle');
const toggleIcon = toggleBtn.querySelector('i');
const rootElement = document.documentElement;


function updateIcon(theme) {
    if (theme === 'dark') {
        toggleIcon.classList.remove('fa-moon');
        toggleIcon.classList.add('fa-sun'); // Sun icon for when Dark mode is active (to switch to light)
    } else {
        toggleIcon.classList.remove('fa-sun');
        toggleIcon.classList.add('fa-moon'); // Moon icon for when Light mode is active
    }
}

// 1. Check local storage on load
const savedTheme = localStorage.getItem('theme');

// 2. Logic: If 'light' is saved, apply it. Otherwise, default to 'dark'.
if (savedTheme === 'light') {
    rootElement.setAttribute('data-theme', 'light');
    updateIcon('light');
} else {
    rootElement.setAttribute('data-theme', 'dark');
    updateIcon('dark');
}

// 3. Toggle Button Event Listener
toggleBtn.addEventListener('click', () => {
    const currentTheme = rootElement.getAttribute('data-theme');
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    
    rootElement.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
    updateIcon(newTheme);
});

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

// --- 3D Perspective Tilt Effect ---
const tiltContainer = document.querySelector('.tilt-box');
const tiltCard = document.querySelector('.tilt-card');

if (tiltContainer && tiltCard) {
    tiltContainer.addEventListener('mousemove', (e) => {
        const rect = tiltContainer.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        const centerX = rect.width / 2;
        const centerY = rect.height / 2;

        const rotateX = ((y - centerY) / centerY) * -20; 
        const rotateY = ((x - centerX) / centerX) * 20;

        tiltCard.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.05)`;
    });

    tiltContainer.addEventListener('mouseleave', () => {
        tiltCard.style.transform = `rotateX(0) rotateY(0) scale(1)`;
    });
}