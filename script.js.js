// ==========================
// 🎮 VARIÁVEIS
// ==========================

let img;

const imagens = {
    normal: "b_n.png",
    feliz: "b_c.png",
    clicado: "b_a.png",
    fome: "b_p.png",
    morto: "b_d.png"
};

let contador = 0;
let estado = "normal";

let timeoutClique;
let timeoutBack;

// 🌍 FUNDOS
const fundoDia = "bg.png";
const fundoNoite = "bg_noite.png";

let horas = 0;


// ==========================
// 🍓 ALIMENTAR
// ==========================
function alimentar() {

    if (estado === "morto") {
        console.log("Ressuscitou!");
    }

    img.src = imagens.clicado;
    contador = 0;
    estado = "feliz";

    if (timeoutClique) clearTimeout(timeoutClique);

    timeoutClique = setTimeout(() => {
        img.src = imagens.feliz;

        timeoutBack = setTimeout(() => {
            img.src = imagens.normal;
            estado = "normal";
        }, 2000);

    }, 1000);
}


// ==========================
// ⏳ CONTROLE DE FOME
// ==========================
function controle() {

    setInterval(() => {

        contador++;

        console.log("Tempo:", contador);

        if (contador > 5 && contador <= 10) {
            img.src = imagens.fome;
            estado = "fome";
        }

        if (contador > 10) {
            img.src = imagens.morto;
            estado = "morto";
        }

    }, 2000);
}


// ==========================
// 🌙 DIA / NOITE
// ==========================
function atualizarFundo() {

    setInterval(() => {

        horas++;

        if (horas >= 12) {
            document.body.style.backgroundImage = `url('${fundoNoite}')`;
        } else {
            document.body.style.backgroundImage = `url('${fundoDia}')`;
        }

        if (horas >= 24) horas = 0;

    }, 1000);
}


// ==========================
// 🚀 INICIAR (ESSENCIAL)
// ==========================
window.onload = function () {

    img = document.getElementById("mainImage");

    img.src = imagens.normal;

    controle();
    atualizarFundo();
};

function mostrarFerlini() {

    let img = document.getElementById("ferlini");
    let msg = document.getElementById("msgFerlini");

    if (img.style.display === "none") {

        img.style.display = "block";
        msg.style.display = "block";

        // animação
        setTimeout(() => {
            img.style.transform = "translate(-50%, -50%) scale(1)";
        }, 50);

    } else {

        img.style.display = "none";
        msg.style.display = "none";
        img.style.transform = "translate(-50%, -50%) scale(0.5)";
    }
};