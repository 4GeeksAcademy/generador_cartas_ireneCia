import "bootstrap";
import "./style.css";


import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function () {
  //write your code here


  const simbolos = ["♠", "♣", "♥", "♦"];
  const palos = ["spade", "club", "heart", "diamond"];
  const numeros = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"];

  function generarCarta() {
    const paloIndex = Math.floor(Math.random() * palos.length);
    const numeroIndex = Math.floor(Math.random() * numeros.length);

    const palo = palos[paloIndex];
    const simbolo = simbolos[paloIndex];
    const numero = numeros[numeroIndex];

    const carta = document.getElementById("carta");

   
    carta.classList.remove("spade", "club", "heart", "diamond");
    carta.classList.add(palo);

  
    document.querySelector(".top-card").textContent = simbolo;
    document.querySelector(".bottom-card").textContent = simbolo;
    document.querySelector(".number-card").textContent = numero;
  }


  generarCarta();

 
const playButton = document.createElement("button")
playButton.textContent = "Cambiar Carta"
playButton.className = 'btn btn-success mt-4'

document.body.appendChild(playButton);
playButton.addEventListener("click", generarCarta);


};


