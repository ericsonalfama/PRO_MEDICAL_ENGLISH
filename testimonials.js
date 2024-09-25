// Selecionando os elementos necessários
const testimonials = document.querySelectorAll('.testimonial-block');
const nextButton = document.querySelector('.arrow-right');
const prevButton = document.querySelector('.arrow-left');

let currentIndex = 0; // Índice do depoimento atual

// Função para atualizar os depoimentos
function updateTestimonials() {
    testimonials.forEach((testimonial, index) => {
        testimonial.style.display = index === currentIndex ? 'block' : 'none';
    });
}

// Função para ir para o próximo depoimento
function nextTestimonial() {
    currentIndex = (currentIndex + 1) % testimonials.length; // Aumenta o índice e reinicia se necessário
    updateTestimonials();
}

// Função para ir para o depoimento anterior
function prevTestimonial() {
    currentIndex = (currentIndex - 1 + testimonials.length) % testimonials.length; // Diminui o índice e reinicia se necessário
    updateTestimonials();
}

// Adicionando eventos aos botões
nextButton.addEventListener('click', nextTestimonial);
prevButton.addEventListener('click', prevTestimonial);

// Inicializando a exibição dos depoimentos
updateTestimonials();
