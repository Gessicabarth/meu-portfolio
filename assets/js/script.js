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