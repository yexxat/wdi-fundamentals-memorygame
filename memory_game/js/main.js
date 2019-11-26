console.log("Up and running!");


console.log("User flipped queen");
console.log("User flipped king ");
const cards = ['queen', 'queen', 'king', 'king'];
const cardsInPlay = []
var cardsInPlay = [];

var flipCard = function() {
    var cardId = parseInt(this.getAttribute('data-id'),10); 
    console.log("User flipped " + (cards[cardId].rank));
    this.src = cards[cardId].cardImage; 
    cardsInPlay.push(cards[cardId].rank);
    checkForMatch();
    console.log(cards[cardId].cardImage);
    console.log(cards[cardId].suit);
};


if (cardsInPlay.length === 2) { console.log("you have selected two cards"); if (cardsInPlay[0] === cardsInPlay[1]) alert("You found a match!"); else alert("Sorry, try again"); }


