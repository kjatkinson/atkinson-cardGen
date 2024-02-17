window.onload = function() {
  //randomness for suit and number
  const suits = ["♦", "♥", "♠", "♣"];
  const randomSuitIndex = Math.floor(Math.random() * suits.length);
  const randomSuit = suits[randomSuitIndex];
  console.log(randomSuit);

  const values = ["A", 2, 3, 4, 5, 6, 7, 8, 9, 10, "J", "Q", "K"];
  const randomValueIndex = Math.floor(Math.random() * values.length);
  const randomValue = values[randomValueIndex];
  console.log(randomValue);

  //rows and insert icons/value
  const topRow = document.querySelector(".topRow");
  const middleRow = document.querySelector(".middleRow");
  const bottomRow = document.querySelector(".bottomRow");

  const topTextNode = document.createElement("p");
  const middleTextNode = document.createElement("p");
  const bottomTextNode = document.createElement("p");

  topRowElement.appendChild(topTextNode);
  topRow.appendChild(topRowElement);

  middleRowElement.appendChild(middleTextNode);
  middleRow.appendChild(middleRowElement);

  bottomRowElement.appendChild(bottomTextNode);
  bottomRow.appendChild(bottomRowElement);
};
