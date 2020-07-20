function randomNumber() {
	return Math.floor(Math.random() * 6) + 1;
}

var randomDiceImage1 = "images/dice" + randomNumber() + ".png";

var randomDiceImage2 = "images/dice" + randomNumber() + ".png";

var diceImage1 = document.querySelectorAll("img")[0].setAttribute("src", randomDiceImage1);

var diceImage2 = document.querySelectorAll("img")[1].setAttribute("src", randomDiceImage2);

if (randomDiceImage1 > randomDiceImage2) {
	document.querySelector("h1").innerHTML = "Player 1 Won! 🏆"
} else if (randomDiceImage2 > randomDiceImage1) {
	document.querySelector("h1").innerHTML = "Player 2 Won! 🏆"
} else {
	document.querySelector("h1").innerHTML = "Draw, Refresh again"
}