
    // Obter o botão
    let backToTopButton = document.getElementById("back-to-top");

    // Mostrar o botão quando o usuário rolar para baixo
    window.onscroll = function() {
        if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
            backToTopButton.style.display = "block";
        } else {
            backToTopButton.style.display = "none";
        }
    };

    // Quando o botão for clicado, rolar para o topo
    backToTopButton.onclick = function() {
        window.scrollTo({top: 0, behavior: 'smooth'});
    };

    const carouselContainer = document.querySelector('.carousel-container');
    let currentIndex = 0;
    const items = document.querySelectorAll('.carousel-item');
    const totalItems = items.length;
    
    function moveToNextSlide() {
        currentIndex = (currentIndex + 1) % totalItems;
        const offset = -100 * currentIndex; // Move a cada 100% de largura de slide
        carouselContainer.style.transform = `translateX(${offset}%)`;
    }
    
    setInterval(moveToNextSlide, 3000); // Passa automaticamente a cada 3 segundos
    