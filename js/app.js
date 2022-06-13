import { frases } from "./frases.js"

const text = document.getElementById("text");
const btn = document.getElementById("btn");


function mudarH1() {
    document.getElementById('title').innerHTML = "Reflita";
}

function mostraFrase() {
    const totalFrases = frases.length;
    const numeroAleatorio = Math.floor(Math.random() * totalFrases);

    mudarH1();
    text.innerHTML = frases[numeroAleatorio];

}

btn.addEventListener("click", mostraFrase);
