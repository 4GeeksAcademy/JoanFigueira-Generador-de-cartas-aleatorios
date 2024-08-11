/* eslint-disable */
import "bootstrap";
import "./style.css";

window.onload = function() {
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

  // Generar indices aleatorios para cada Array
  let indexNumbers = Math.floor(Math.random() * numbers.length)
  let indexSymbols = Math.floor(Math.random() * symbols.length)

  //Template literal
  let numberGenerator = `
    ${numbers[indexNumbers]}
  `
  let symbolGenerator = `
    ${symbols[indexSymbols]}
  `

  //Capturamos div e insertamos en HTML
  document.querySelector('#number').innerHTML = numberGenerator;
  document.querySelector('#symboltop').innerHTML = symbolGenerator;
  document.querySelector('#symbolbutton').innerHTML = symbolGenerator;

  let refresh = document.getElementById('refresh');
refresh.addEventListener('click', _ => {
            location.reload();
})
  
};
