document.addEventListener("DOMContentLoaded", () => {
    console.log("JavaScript carregado!"); // Verifica se o script está funcionando
    const containerDeLuz = document.getElementById("feixes-de-luz");
    console.log(containerDeLuz); // Verifica se o contêiner foi encontrado

    const quantidadeDeFeixes = 320; // Número total de feixes de luz

    for (let i = 0; i < quantidadeDeFeixes; i++) {
        const feixeDeLuz = document.createElement("div"); // Cria um elemento para o feixe de luz
        feixeDeLuz.classList.add("luz"); // Usa apenas a classe "light" com brilho.png

        // Define posições e tamanhos aleatórios para os feixes
        const posicaoHorizontal = Math.random() * 100; // Posição horizontal (em %)
        const posicaoVertical = i < 10 ? Math.random() * 20 : Math.random() * 100; // Mais feixes no topo (primeiros 10)
        const tamanhoDoFeixe = Math.random() * 10 + 8; // Tamanho aleatório entre 8px e 18px
        feixeDeLuz.style.left = `${posicaoHorizontal}%`;
        feixeDeLuz.style.top = `${posicaoVertical}%`;
        feixeDeLuz.style.width = `${tamanhoDoFeixe}px`;
        feixeDeLuz.style.height = `${tamanhoDoFeixe}px`;

        containerDeLuz.appendChild(feixeDeLuz); // Adiciona o feixe ao contêiner
    }
});