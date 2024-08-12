/* eslint-disable */
import "bootstrap";
import "./style.css";

function newCard() {
  // Card Generator
  let numbers = [
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "J",
    "Q",
    "K",
    "A",
  ];
  let symbols = ["♦", "♥", "♠", "♣"];

  // Generardor de indices aleatorios para cada Array
  let indexNumbers = Math.floor(Math.random() * numbers.length)
  let indexSymbols = Math.floor(Math.random() * symbols.length)

  //calcular el color de los symbols
  let symbolsColor = symbols[indexSymbols] == '♦' || symbols[indexSymbols] == '♥' ? 'text-danger' : 'text-dark'
  //cambiamosla clase de los symbols
  document.querySelector('#symboltop').className = symbolsColor;
  document.querySelector('#symbolbutton').className = symbolsColor;

  document.querySelector('#number').innerHTML = numbers[indexNumbers];
  document.querySelector('#symboltop').innerHTML = symbols[indexSymbols];
  document.querySelector('#symbolbutton').innerHTML = symbols[indexSymbols];

}

window.onload = function () {newCard()};
document.querySelector('#refresh').addEventListener('click', newCard)
//setInterval(newCard, 2000)