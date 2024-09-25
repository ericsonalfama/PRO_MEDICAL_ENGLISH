// Mostrar o botão quando o usuário rolar para baixo 100px
window.onscroll = function() {
    const scrollTopBtn = document.getElementById('scrollTopBtn');
    
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
      scrollTopBtn.style.display = "block";
    } else {
      scrollTopBtn.style.display = "none";
    }
  };
  
  // Adicionar evento ao botão para rolar suavemente ao topo
  document.getElementById('scrollTopBtn').addEventListener('click', function() {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });
  


document.addEventListener('DOMContentLoaded', function () {
    const carousel = document.querySelector('.testimonial-carousel');
    const items = carousel.querySelectorAll('.testimonial-block');
    const navPrev = document.querySelector('.arrow-left');
    const navNext = document.querySelector('.arrow-right');
    let currentIndex = 0;
    let autoPlayInterval;
  
    // Mostrar apenas o item atual
    function showItem(index) {
      items.forEach((item, i) => {
        item.style.display = i === index ? 'block' : 'none';
      });
    }
  
    // Ir para o próximo item
    function nextItem() {
      currentIndex = (currentIndex + 1) % items.length;
      showItem(currentIndex);
    }
  
    // Ir para o item anterior
    function prevItem() {
      currentIndex = (currentIndex - 1 + items.length) % items.length;
      showItem(currentIndex);
    }
  
    // Configurar autoplay
    function startAutoplay() {
      autoPlayInterval = setInterval(nextItem, 7000); // Mudar a cada 7 segundos
    }
  
    // Parar autoplay
    function stopAutoplay() {
      clearInterval(autoPlayInterval);
    }
  
    // Listeners para navegação
    navNext.addEventListener('click', () => {
      stopAutoplay();
      nextItem();
      startAutoplay();
    });
  
    navPrev.addEventListener('click', () => {
      stopAutoplay();
      prevItem();
      startAutoplay();
    });
  
    // Inicializar o carousel
    showItem(currentIndex);
    startAutoplay();
  });
  