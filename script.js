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

    function nextTestimonial() {
        currentTestimonial = (currentTestimonial + 1) % testimonials.length;
        showTestimonial(currentTestimonial);
    }

    function prevTestimonial() {
        currentTestimonial = (currentTestimonial - 1 + testimonials.length) % testimonials.length;
        showTestimonial(currentTestimonial);
    }

    // Initialize the first testimonial
    showTestimonial(currentTestimonial);

    // Automatically switch testimonials every 5 seconds
    setInterval(nextTestimonial, 5000);

    // Next and Previous buttons
    document.querySelector('.next').addEventListener('click', nextTestimonial);
    document.querySelector('.prev').addEventListener('click', prevTestimonial);
});

// Scroll Down Arrow (Optional)
// You can add a scroll down arrow with fade-out behavior if required
document.addEventListener('DOMContentLoaded', function() {
    const scrollDownArrow = document.querySelector('.scroll-down-arrow');
    if (scrollDownArrow) {
        window.addEventListener('scroll', function() {
            if (window.scrollY > 100) {
                scrollDownArrow.style.display = 'none';
            } else {
                scrollDownArrow.style.display = 'block';
            }
        });
    }
});

// Button Hover Effects
document.querySelectorAll('.btn-cta').forEach(button => {
    button.addEventListener('mouseover', function() {
        this.style.backgroundColor = '#C7B3E6';
    });
    button.addEventListener('mouseout', function() {
        this.style.backgroundColor = '#29ECD';
    });
});

// Progress Bar Animation (Optional)
document.addEventListener('scroll', function() {
    const progressBar = document.querySelector('.progress-bar');
    if (progressBar) {
        const windowScrollTop = window.scrollY;
        const documentHeight = document.body.scrollHeight;
        const windowHeight = window.innerHeight;
        const progress = (windowScrollTop / (documentHeight - windowHeight)) * 100;
        progressBar.style.width = progress + '%';
    }
});
