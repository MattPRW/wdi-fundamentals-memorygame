//console.log("Up and running!");

var cards = ['Queen', 'Queen', 'King', 'King'];	
var cardsInPlay = [];
var cardOne = cards[0];
var cardTwo = cards[2];

cardsInPlay.push(cardOne);
cardsInPlay.push(cardTwo);

console.log("User flipped " + cardOne);
console.log("User flipped " + cardTwo);

if (cardsInPlay.length === 2){
	if (cardsInPlay[1] === cardsInPlay[0]) {alert("you found a match")}
	else {alert("No Match")}
}
