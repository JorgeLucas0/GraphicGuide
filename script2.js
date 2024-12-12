
  
    let backToTopButton = document.getElementById("back-to-top");

  
    window.onscroll = function() {
        if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
            backToTopButton.style.display = "block";
        } else {
            backToTopButton.style.display = "none";
        }
    };

  
    backToTopButton.onclick = function() {
        window.scrollTo({top: 0, behavior: 'smooth'});
    };

    const carouselContainer = document.querySelector('.carousel-container');
    let currentIndex = 0;
    const items = document.querySelectorAll('.carousel-item');
    const totalItems = items.length;
    
    function moveToNextSlide() {
        currentIndex = (currentIndex + 1) % totalItems;
        const offset = -100 * currentIndex; 
        carouselContainer.style.transform = `translateX(${offset}%)`;
    }
    
    setInterval(moveToNextSlide, 3000); 
    
