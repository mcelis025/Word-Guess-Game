// Variables
var myWords = ["cell", "chiaotzu", "frieza", "gohan", "goku", "krillin", "majin buu", "piccolo", "tien", "trunks", "vegeta", "yamcha"];
var wins = 0;
var losses = 0;
var guessesLeft = 5;

// Stores what will show in index through wins-text
var winsText = document.getElementById("wins-text");
var currentWord = document.getElementById("current-word");
var guessesRemaining = document.getElementById("guesses-left");
var letterGuessed = document.getElementById("letters-guessed");
var lossesText = document.getElementById("losses-text");
var image = document.getElementById("picture");

var random = resetGame();                                                         // Random has the function to resetGame
var wordLength = random.length;                                                   // Saves the number of letters in random - word