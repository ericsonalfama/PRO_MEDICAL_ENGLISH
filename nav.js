// Script pour le menu burger
document.addEventListener("DOMContentLoaded", function () {
    const burger = document.querySelector(".burger");
    const burgerIcon = burger.querySelector(".fas"); // Sélectionner uniquement l'icône 'fas fa-bars'
    const navbarNav = document.querySelector(".navbar-nav");
    const navbarCollapse = document.querySelector(".navbar-collapse");
    
    burger.addEventListener("click", function () {
        // Toggle pour afficher/cacher le menu
        navbarNav.classList.toggle("active");
        navbarCollapse.classList.toggle("active");
        
        // Changer l'icône burger en fonction de son état actif ou non
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
        // Ao passar o cursor sobre o item, mostra o dropdown com delay
        item.addEventListener('mouseenter', () => {
            timeout = setTimeout(() => {
                item.querySelector('.dropdown-menu').style.display = 'block';
                item.querySelector('.dropdown-menu').style.top = '190%'; // Ajuste da posição
            }, 300); // Delay de 300ms
        });

        // Ao tirar o cursor do item, esconde o dropdown com delay
        item.addEventListener('mouseleave', () => {
            clearTimeout(timeout);
            setTimeout(() => {
                item.querySelector('.dropdown-menu').style.display = 'none';
            }, 300); // Delay para fechar também
        });
    }

    function handleClick() {
        // Exibir/ocultar o dropdown ao clicar em telas menores
        item.querySelector('.nav-link').addEventListener('click', (e) => {
            e.preventDefault(); // Impede a navegação
            const dropdownMenu = item.querySelector('.dropdown-menu');
            const isVisible = dropdownMenu.style.display === 'block';
            dropdownMenu.style.display = isVisible ? 'none' : 'block';
            dropdownMenu.style.top = '190%'; // Ajuste da posição
        });
    }

    function updateListeners() {
        if (window.innerWidth < 768) {
            handleClick(); // Apenas para dispositivos móveis
        } else {
            item.querySelector('.dropdown-menu').style.display = 'none'; // Esconde o dropdown
            handleHover(); // Para desktops
        }
    }

    updateListeners(); // Chama a função na carga inicial

    // Atualiza os ouvintes ao redimensionar a janela
    window.addEventListener('resize', updateListeners);
});