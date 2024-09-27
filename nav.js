// Script for the burger menu
document.addEventListener("DOMContentLoaded", function () {
    const burger = document.querySelector(".burger");
    const burgerIcon = burger.querySelector(".fas");
    const navbarNav = document.querySelector(".navbar-nav");
    const navbarCollapse = document.querySelector(".navbar-collapse");

    burger.addEventListener("click", function () {
        navbarNav.classList.toggle("active");
        navbarCollapse.classList.toggle("active");
        
        if (burgerIcon.classList.contains('fa-bars')) {
            burgerIcon.classList.replace('fa-bars', 'fa-times-circle');
        } else {
            burgerIcon.classList.replace('fa-times-circle', 'fa-bars');
        }
    });
});

document.querySelectorAll('.nav-item').forEach(item => {
    let timeout;

    function handleHover() {
        item.addEventListener('mouseenter', () => {
            timeout = setTimeout(() => {
                item.querySelector('.dropdown-menu').style.display = 'block';
                item.querySelector('.dropdown-menu').style.top = '190%';
            }, 300);
        });

        item.addEventListener('mouseleave', () => {
            clearTimeout(timeout);
            setTimeout(() => {
                item.querySelector('.dropdown-menu').style.display = 'none';
            }, 300);
        });
    }

    function handleClick() {
        item.querySelector('.nav-link').addEventListener('click', (e) => {
            e.preventDefault();
            const dropdownMenu = item.querySelector('.dropdown-menu');
            const isVisible = dropdownMenu.style.display === 'block';
            dropdownMenu.style.display = isVisible ? 'none' : 'block';
            dropdownMenu.style.top = '190%';
        });
    }

    function updateListeners() {
        if (window.innerWidth < 768) {
            handleClick();
        } else {
            item.querySelector('.dropdown-menu').style.display = 'none';
            handleHover();
        }
    }

    updateListeners();

    window.addEventListener('resize', updateListeners);
});
