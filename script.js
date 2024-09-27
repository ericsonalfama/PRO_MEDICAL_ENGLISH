// Show the button when the user scrolls down 100px
window.onscroll = function() {
    const scrollTopBtn = document.getElementById('scrollTopBtn');
    
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
      scrollTopBtn.style.display = "block";
    } else {
      scrollTopBtn.style.display = "none";
    }
};

// Event to the button for smooth scrolling to the top
document.getElementById('scrollTopBtn').addEventListener('click', function() {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
});

// Testimonial carousel
document.addEventListener('DOMContentLoaded', function () {
    const carousel = document.querySelector('.testimonial-carousel');
    const items = carousel.querySelectorAll('.testimonial-block');
    const navPrev = document.querySelector('.arrow-left');
    const navNext = document.querySelector('.arrow-right');
    let currentIndex = 0;
    let autoPlayInterval;
  
    function showItem(index) {
      items.forEach((item, i) => {
        item.style.display = i === index ? 'block' : 'none';
      });
    }
  
    function nextItem() {
      currentIndex = (currentIndex + 1) % items.length;
      showItem(currentIndex);
    }
  
    function prevItem() {
      currentIndex = (currentIndex - 1 + items.length) % items.length;
      showItem(currentIndex);
    }
  
    function startAutoplay() {
      autoPlayInterval = setInterval(nextItem, 7000);
    }
  
    function stopAutoplay() {
      clearInterval(autoPlayInterval);
    }
  
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
  
    showItem(currentIndex);
    startAutoplay();
});
