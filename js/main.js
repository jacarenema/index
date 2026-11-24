// Menu para celular
const botao = document.querySelector('.menu-botao');
const menu = document.getElementById('menu');

botao.addEventListener('click', () => {
  const aberto = menu.classList.toggle('menu--aberto');
  botao.setAttribute('aria-expanded', aberto);
});

menu.querySelectorAll('a').forEach((link) =>
  link.addEventListener('click', () => {
    menu.classList.remove('menu--aberto');
    botao.setAttribute('aria-expanded', 'false');
  })
);

// Ano atual no rodapé
document.getElementById('ano').textContent = new Date().getFullYear();
