// Smooth Scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => 
    anchor.addEventListener('click', function (e) {
        e.preventDefault(); // Prevent default anchor click behavior

        const targetElement = document.querySelector(this.getAttribute('href'));
        
        // Check if the target element exists
        if (targetElement) {  
            targetElement.scrollIntoView({
                behavior: 'smooth' // Smooth scroll behavior
            });
        } else {
            console.warn(`Element not found: ${this.getAttribute('href')}`);
        }
    })
);

// Testimonials Slider
document.addEventListener('DOMContentLoaded', function() {
    const testimonials = document.querySelectorAll('.testimonial-slide');
    let currentTestimonial = 0;

    function showTestimonial(index) {
        testimonials.forEach((testimonial, i) => {
            testimonial.style.display = (i === index) ? 'block' : 'none'; // Show current testimonial
        });
    }

    function changeTestimonial(offset) {
        currentTestimonial = (currentTestimonial + offset + testimonials.length) % testimonials.length; // Loop testimonials
        showTestimonial(currentTestimonial);
    }

    // Initialize the first testimonial
    showTestimonial(currentTestimonial);

    // Automatically switch testimonials every 5 seconds
    setInterval(() => changeTestimonial(1), 5000);

    // Next and Previous buttons functionality
    const nextButton = document.querySelector('.next');
    const prevButton = document.querySelector('.prev');
    
    if (nextButton) {
        nextButton.addEventListener('click', () => changeTestimonial(1));
    }

    if (prevButton) {
        prevButton.addEventListener('click', () => changeTestimonial(-1));
    }
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

// Scroll Down Arrow Visibility
document.addEventListener('DOMContentLoaded', function() {
    const scrollDownArrow = document.querySelector('.scroll-down-arrow');

    if (scrollDownArrow) {
        window.addEventListener('scroll', function() {
            scrollDownArrow.style.display = window.scrollY > 100 ? 'none' : 'block'; // Hide arrow after scroll
        });
    }
});

// Progress Bar Animation
document.addEventListener('scroll', function() {
    const progressBar = document.querySelector('.progress-bar');

    if (progressBar) {
        const windowScrollTop = window.scrollY;
        const documentHeight = document.body.scrollHeight;
        const windowHeight = window.innerHeight;
        const progress = (windowScrollTop / (documentHeight - windowHeight)) * 100;

        progressBar.style.width = `${progress}%`; // Update progress bar width
    }
});

