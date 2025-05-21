document.addEventListener('DOMContentLoaded', function() {
    const mobileNavToggle = document.querySelector('.mobile-nav-toggle');
    const mainNav = document.querySelector('.main-nav');
    const body = document.body;

    // Lógica para abrir/fechar o menu mobile
    if (mobileNavToggle && mainNav) {
        mobileNavToggle.addEventListener('click', () => {
            const isExpanded = mobileNavToggle.getAttribute('aria-expanded') === 'true' || false;
            mobileNavToggle.setAttribute('aria-expanded', !isExpanded);
            body.classList.toggle('nav-open'); // Adiciona/remove classe no body para controlar o menu
        });
    }

    // Lógica para destacar o link ativo na navegação
    const navLinks = document.querySelectorAll('.main-nav ul li a');
    const currentPagePath = window.location.pathname.split('/').pop(); // Obtém o nome do ficheiro atual (ex: index.html, agua.html)

    navLinks.forEach(link => {
        // Remove a classe 'active' de todos os links primeiro
        link.classList.remove('active');

        // Adiciona a classe 'active' se o link corresponde à página atual
        const linkHref = link.getAttribute('href');

        // Lógica para 'index.html' quando a URL é apenas o domínio (ex: localhost:3000/)
        if (currentPagePath === '' && linkHref === 'index.html') {
            link.classList.add('active');
        } 
        // Lógica para outras páginas
        else if (linkHref === currentPagePath) {
            link.classList.add('active');
        }
    });

    // Exemplo de funcionalidade para o formulário de newsletter
    const newsletterForm = document.querySelector('.newsletter-signup form');
    if (newsletterForm) {
        newsletterForm.addEventListener('submit', function(event) {
            event.preventDefault();
            const emailInput = this.querySelector('input[type="email"]');
            if (emailInput && emailInput.value) {
                // Em vez de alert, pode-se mostrar uma mensagem mais amigável na tela
                alert(`Obrigado por assinar com o email: ${emailInput.value}`); // Use um modal customizado em um site real
                emailInput.value = ''; // Limpa o campo após o envio (simulado)
            } else {
                alert('Por favor, insira o seu email.');
            }
        });
    }

    console.log('Script app.js carregado!');
});
