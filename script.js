// Smooth Scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        
        const targetElement = document.querySelector(this.getAttribute('href'));
        
        if (targetElement) {  // Check if the element exists
            targetElement.scrollIntoView({
                behavior: 'smooth'
            });
        } else {
            console.warn(`Element not found: ${this.getAttribute('href')}`);
        }
    });
});

// Testimonials Slider
document.addEventListener('DOMContentLoaded', function() {
    const testimonials = document.querySelectorAll('.testimonial-slide');
    let currentTestimonial = 0;

    function showTestimonial(index) {
        testimonials.forEach((testimonial, i) => {
            testimonial.style.display = i === index ? 'block' : 'none';
        });
    }

    function changeTestimonial(offset) {
        currentTestimonial = (currentTestimonial + offset + testimonials.length) % testimonials.length;
        showTestimonial(currentTestimonial);
    }

    // Initialize the first testimonial
    showTestimonial(currentTestimonial);

    // Automatically switch testimonials every 5 seconds
    setInterval(() => changeTestimonial(1), 5000);

    // Next and Previous buttons
    document.querySelector('.next').addEventListener('click', () => changeTestimonial(1));
    document.querySelector('.prev').addEventListener('click', () => changeTestimonial(-1));
});

// Button Hover Effects for CTA buttons
document.querySelectorAll('.btn-cta').forEach(button => {
    button.addEventListener('mouseover', function() {
        this.style.backgroundColor = '#C7B3E6'; // Lighter shade for hover
    });
    button.addEventListener('mouseout', function() {
        this.style.backgroundColor = '#29ECD'; // Original color
    });
});

// Scroll Down Arrow (Optional)
document.addEventListener('DOMContentLoaded', function() {
    const scrollDownArrow = document.querySelector('.scroll-down-arrow');
    if (scrollDownArrow) {
        window.addEventListener('scroll', function() {
            scrollDownArrow.style.display = window.scrollY > 100 ? 'none' : 'block';
        });
    }
});

// Progress Bar Animation (Optional)
document.addEventListener('scroll', function() {
    const progressBar = document.querySelector('.progress-bar');
    if (progressBar) {
        const windowScrollTop = window.scrollY;
        const documentHeight = document.body.scrollHeight;
        const windowHeight = window.innerHeight;
        const progress = (windowScrollTop / (documentHeight - windowHeight)) * 100;
        progressBar.style.width = `${progress}%`;
    }
});

