const textes = [
    "Mon amour, chaque jour passé avec toi est un cadeau. dddddddddddddddddddddddddddddddd",
    "Ton sourire illumine ma vie et réchauffe mon cœur.",
    "Je t’aime plus que les mots ne peuvent le dire."
];

function ouvrirLettre() {
    const overlay = document.getElementById("overlay");
    const lettre = document.getElementById("lettre");

    overlay.classList.add("hide");

    setTimeout(() => {
        overlay.style.display = "none";

        lettre.classList.add("show");

        lancerCoeurs();
        ecrireTexte();
    }, 1000);
}

function lancerCoeurs() {
    const container = document.getElementById("coeurs");

    for (let i = 0; i < 20; i++) {
        setTimeout(() => {
            const coeurs = document.createElement("div");
            coeurs.classList.add("coeur");
            coeurs.innerHTML = "❤️";

            coeurs.style.left = Math.random() * 100 + "%";
            coeurs.style.top = "80%";

            container.appendChild(coeurs);

            setTimeout(() => coeurs.remove(), 2000);
        }, i * 100);
    }
}

function ecrireTexte() {
    const elements = document.querySelectorAll(".typing")

    textes.forEach((textes, index) => {
        let i = 0;

        setTimeout(() => {
            const interval = setInterval(() => {
                elements[index].textContent += textes[i];
                i++;

                if (i >= textes.length) {
                    clearInterval(interval);
                }
            }, 40);
        }, index * 2000);
    })
}