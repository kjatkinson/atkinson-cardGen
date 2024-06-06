window.onload = function() {
  // Randomness for suit and number
  const suits = ["♦", "♥", "♠", "♣"];
  const suitSymbols = ["♦", "♥", "♠", "♣"];
  const randomSuitIndex = Math.floor(Math.random() * suits.length);
  const randomSuit = suits[randomSuitIndex];
  const suitSymbol = suitSymbols[randomSuitIndex];

  const values = [
    "A",
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
    "K"
  ];
  const randomValueIndex = Math.floor(Math.random() * values.length);
  const randomValue = values[randomValueIndex];

  // Insert icons/value into the card
  const topSuit = document.querySelector(".top-suit");
  const number = document.querySelector(".number");
  const bottomSuit = document.querySelector(".bottom-suit");

  topSuit.textContent = suitSymbol;
  number.textContent = randomValue;
  bottomSuit.textContent = suitSymbol;

  // Change color for hearts and diamonds
  if (randomSuit === "♥" || randomSuit === "♦") {
    topSuit.style.color = "red";
    bottomSuit.style.color = "red";
    number.style.color = "red";
  } else {
    topSuit.style.color = "black";
    bottomSuit.style.color = "black";
    number.style.color = "black";
  }
};
