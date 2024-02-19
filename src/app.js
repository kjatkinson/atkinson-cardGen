window.onload = function() {
  //randomness for suit and number
  const suits = ["♦", "♥", "♠", "♣"];
  const randomSuitIndex = Math.floor(Math.random() * suits.length);
  const randomSuit = suits[randomSuitIndex];

  const values = ["A", 2, 3, 4, 5, 6, 7, 8, 9, 10, "J", "Q", "K"];
  const randomValueIndex = Math.floor(Math.random() * values.length);
  const randomValue = values[randomValueIndex];

  //rows and insert icons/value
  const topRow = document.querySelector(".topRow");
  const middleRow = document.querySelector(".middleRow");
  const bottomRow = document.querySelector(".bottomRow");
  window.onload = function() {
    //randomness for suit and number
    const suits = ["♦", "♥", "♠", "♣"];
    const randomSuitIndex = Math.floor(Math.random() * suits.length);
    const randomSuit = suits[randomSuitIndex];

    const values = ["A", 2, 3, 4, 5, 6, 7, 8, 9, 10, "J", "Q", "K"];
    const randomValueIndex = Math.floor(Math.random() * values.length);
    const randomValue = values[randomValueIndex];

    //rows and insert icons/value
    const topRow = document.querySelector(".topRow");
    const middleRow = document.querySelector(".middleRow");
    const bottomRow = document.querySelector(".bottomRow");

    const topTextNode = document.createTopElement("p");
    const middleTextNode = document.createMiddleElement("p");
    const bottomTextNode = document.createBottomElement("p");

    topRow.appendChild("topElement");
    topRow.appendChild("topRowElement");

    // middleRowElement.appendChild(middleTextNode);
    //middleRow.appendChild(middleRowElement);

    //bottomRowElement.appendChild(bottomTextNode);
    //bottomRow.appendChild(bottomRowElement);
  };
};
