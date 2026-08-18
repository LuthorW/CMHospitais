// Efeito de sombra no Header ao rolar a página
const header = document.getElementById('header');

window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        header.style.boxShadow = '0 4px 15px rgba(0, 0, 0, 0.1)';
        header.style.padding = '5px 0';
    } else {
        header.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.05)';
        header.style.padding = '0';
    }
});

// Rolagem suave para os links de navegação
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href');
        if(targetId === '#') return;

        const targetElement = document.querySelector(targetId);
        
        if (targetElement) {
            // Compensa a altura do header fixo
            const headerHeight = header.offsetHeight;
            const elementPosition = targetElement.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - headerHeight;
  
            window.scrollTo({
                 top: offsetPosition,
                 behavior: "smooth"
            });
        }
    });
});