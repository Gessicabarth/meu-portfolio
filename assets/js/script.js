// Código para o efeito de estrelas
document.addEventListener("DOMContentLoaded", () => {
    const feixesDeLuz = document.getElementById("feixes-de-luz");
    const totalEstrelas = 400; // Número total de estrelas

    for (let i = 0; i < totalEstrelas; i++) {
        const estrela = document.createElement("div");
        estrela.classList.add("luz");

        // Posicionamento aleatório
        estrela.style.top = Math.random() * 100 + "%";
        estrela.style.left = Math.random() * 100 + "%";

        // Delay aleatório para a animação
        estrela.style.animationDelay = Math.random() * 10 + "s";

        feixesDeLuz.appendChild(estrela);
    }
});

// Código para o menu sanduíche
document.addEventListener('DOMContentLoaded', () => {
    const menuToggle = document.querySelector('.menu-toggle');
    const menu = document.querySelector('.menu');

    if (menuToggle && menu) {
        menuToggle.addEventListener('click', () => {
            menu.classList.toggle('open'); // Alterna a classe 'open'
        });
    }
});

document.getElementById('enviar').addEventListener('click', function () {
    // Captura os valores dos campos do formulário
    const nome = document.getElementById('nome').value;
    const email = document.getElementById('email').value;
    const mensagem = document.getElementById('mensagem').value;

    // Verifica se todos os campos estão preenchidos
    if (!nome || !email || !mensagem) {
        alert('Por favor, preencha todos os campos antes de enviar.');
        return;
    }

    // Monta o link para o Gmail
    const mailtoLink = `https://mail.google.com/mail/?view=cm&fs=1&to=geh.barth@gmail.com&su=Contato%20via%20site&body=Olá%20Gessica,%0A%0AMeu%20nome%20é%20${encodeURIComponent(nome)}.%0A` +
        `Meu%20e-mail%20é%20${encodeURIComponent(email)}.%0A%0A${encodeURIComponent(mensagem)}`;

    // Redireciona para o Gmail
    window.open(mailtoLink, '_blank');
});