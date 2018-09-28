//variables for game
var wins = 0;
var losses = 0;
var guessesLeft = 9;
var yourGuess = []; 
var computerChoice;
 //to initiate the game
var playAgain = true;
 if (playAgain) {
	testGame();
}
 //letter randomizer
function testGame() {
	var alphabet = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "_"];
	var randomLetter = alphabet[Math.floor(Math.random() * 26)];
	var computerChoice = randomLetter;
 	console.log(computerChoice);
 	document.onkeyup = function(event) {
 		if (userChoice === computerChoice) { 
			console.log("You win.");
			playAgain = false;}
		else { 
			console.log ("You lose. Try again");}
			testGame();
		}
