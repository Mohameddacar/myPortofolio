// Mobile Menu Toggle
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    hamburger.classList.toggle('active');
});

// Close mobile menu when clicking outside
document.addEventListener('click', (e) => {
    if (!hamburger.contains(e.target) && !navLinks.contains(e.target)) {
        navLinks.classList.remove('active');
        hamburger.classList.remove('active');
    }
});

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth'
            });
            // Close mobile menu after clicking a link
            navLinks.classList.remove('active');
            hamburger.classList.remove('active');
        }
    });
});

// Active navigation link based on scroll position
const sections = document.querySelectorAll('section');
const navItems = document.querySelectorAll('.nav-link');

window.addEventListener('scroll', () => {
    let current = '';
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (pageYOffset >= sectionTop - 60) {
            current = section.getAttribute('id');
        }
    });

    navItems.forEach(item => {
        item.classList.remove('active');
        if (item.getAttribute('href') === `#${current}`) {
            item.classList.add('active');
        }
    });
});

// Project filtering
const filterButtons = document.querySelectorAll('.filter-btn');
const projectCards = document.querySelectorAll('.event-project-card');

filterButtons.forEach(button => {
    button.addEventListener('click', () => {
        // Remove active class from all buttons
        filterButtons.forEach(btn => btn.classList.remove('active'));
        // Add active class to clicked button
        button.classList.add('active');

        const filterValue = button.getAttribute('data-filter');

        projectCards.forEach(card => {
            if (filterValue === 'all' || card.getAttribute('data-category') === filterValue) {
                card.style.display = 'block';
            } else {
                card.style.display = 'none';
            }
        });
    });
});

// Service card toggle
const serviceCards = document.querySelectorAll('.service-card');
const serviceButtons = document.querySelectorAll('.service-btn');

serviceButtons.forEach((button, index) => {
    button.addEventListener('click', () => {
        serviceCards.forEach(card => card.classList.remove('active'));
        serviceCards[index].classList.add('active');
    });
});

// Form submission
const contactForm = document.querySelector('.contact-form');
if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        // Add your form submission logic here
        alert('Thank you for your message! I will get back to you soon.');
        contactForm.reset();
    });
}

document.addEventListener('DOMContentLoaded', () => {

    // --- Hamburger Menu --- 
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');

    if (hamburger && navLinks) {
        hamburger.addEventListener('click', () => {
            navLinks.classList.toggle('active');
            hamburger.classList.toggle('active'); // For styling the 'X' toggle
        });

        // Close menu when a link is clicked (optional)
        navLinks.querySelectorAll('.nav-link').forEach(link => {
            link.addEventListener('click', () => {
                if (navLinks.classList.contains('active')) {
                    navLinks.classList.remove('active');
                    hamburger.classList.remove('active');
                }
            });
        });
    }

    // --- Active Nav Link on Scroll --- 
    const sections = document.querySelectorAll('section[id]'); // Get all sections with an ID
    const navLi = document.querySelectorAll('.nav-links li a'); // Get all nav links
    const headerHeight = document.querySelector('.header')?.offsetHeight || 0; // Get header height

    window.addEventListener('scroll', () => {
        let current = '';

        sections.forEach(section => {
            const sectionTop = section.offsetTop - headerHeight - 50; // Adjust offset as needed
            // const sectionHeight = section.clientHeight;
            // if (pageYOffset >= sectionTop && pageYOffset < sectionTop + sectionHeight)
            if (pageYOffset >= sectionTop) { // Simpler check: if scrolled past the top
                current = section.getAttribute('id');
            }
        });

        navLi.forEach(a => {
            a.classList.remove('active');
            if (a.getAttribute('href') === `#${current}`) {
                a.classList.add('active');
            }
        });
        
        // Handle edge case for top of page
        if (pageYOffset < sections[0].offsetTop - headerHeight - 50) {
             navLi.forEach(a => a.classList.remove('active'));
             const homeLink = document.querySelector('.nav-links li a[href="#home"]');
             if(homeLink) homeLink.classList.add('active');
        }
    });

    // --- Optional: Add Project Filtering/Carousel/Service Modal JS below ---

}); 