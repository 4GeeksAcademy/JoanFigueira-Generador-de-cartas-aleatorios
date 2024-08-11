/* eslint-disable */
import "bootstrap";
import "./style.css";

window.onload = function() {
  // Domain card Generator
  let numbers = [
    "0",
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "11",
    "12"
  ];
  let symbol = ["♦", "♥", "♠", "♣"];

  // Metodo .Map()
  let cardGenerator = "";
  numbers.map(elementNumbers => {
    symbol.map(elementSymbol => {
      cardGenerator += `
      <div class="col-3">El simbolo ${elementSymbol}, este es el numero ${elementNumbers}</div>
    `;
    });
  });
  document.querySelector("#card").innerHTML = cardGenerator;
};
