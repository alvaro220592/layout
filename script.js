const menuToggle = document.getElementById('menuToggle');
const sideMenu = document.getElementById('sideMenu');
const overlay = document.getElementById('overlay');
const expandToggle = document.getElementById('expandToggle');

// Função para abrir ou fechar o menu e o overlay no mobile
menuToggle.addEventListener('click', () => {
    sideMenu.classList.toggle('open');
    overlay.classList.toggle('show');
});

// Fechar o menu quando o overlay for clicado no mobile
overlay.addEventListener('click', () => {
    sideMenu.classList.remove('open');
    overlay.classList.remove('show');
});

// Função para expandir ou recolher a sidebar em telas maiores
expandToggle.addEventListener('click', () => {
    sideMenu.classList.toggle('expanded');
    sideMenu.classList.toggle('collapsed');
});
