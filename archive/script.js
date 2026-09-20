// Smooth scroll for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// CTA Button click handler
document.querySelector('.cta-button').addEventListener('click', function() {
    const featuresSection = document.querySelector('#features');
    featuresSection.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
    });
});

// Contact form submission
document.querySelector('.contact-form').addEventListener('submit', function(e) {
    e.preventDefault();
    alert('Thank you for your message! We\'ll get back to you soon.');
    this.reset();
});

// Add scroll animation to elements
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.animation = 'fadeInUp 0.6s ease forwards';
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

document.querySelectorAll('.feature-card, .pricing-card').forEach(el => {
    el.style.opacity = '0';
    observer.observe(el);
});

// Pricing button handlers
document.querySelectorAll('.pricing-button').forEach(button => {
    button.addEventListener('click', function() {
        const planName = this.parentElement.querySelector('h3').textContent;
        alert(`You selected the ${planName} plan!`);
    });
});
