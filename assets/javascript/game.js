//Variables
var myWords = ["cell", "chiaotzu", "frieza", "gohan", "goku", "krillin", "majin buu", "piccolo", "tien", "trunks", "vegeta", "yamcha"];
var wins = 0;
var winsText = document.getElementById("wins-text");
var random = document.getElementById("random-computer");
var guessesLeft = document.getElementById("guesses-left");

//start code
document.onkeyup = function(event) {
var userInput = event.key;
var random = myWords[Math.floor(Math.random() * myWords.length)];


}

