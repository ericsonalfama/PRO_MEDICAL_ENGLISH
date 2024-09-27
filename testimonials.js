const testimonials = document.querySelectorAll('.testimonial-block');
const nextButton = document.querySelector('.arrow-right');
const prevButton = document.querySelector('.arrow-left');

let currentIndex = 0;

function updateTestimonials() {
    testimonials.forEach((testimonial, index) => {
        testimonial.style.display = index === currentIndex ? 'block' : 'none';
    });
}

function nextTestimonial() {
    currentIndex = (currentIndex + 1) % testimonials.length;
    updateTestimonials();
}

function prevTestimonial() {
    currentIndex = (currentIndex - 1 + testimonials.length) % testimonials.length;
    updateTestimonials();
}

nextButton.addEventListener('click', nextTestimonial);
prevButton.addEventListener('click', prevTestimonial);

updateTestimonials();
