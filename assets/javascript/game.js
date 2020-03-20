// Variables
var wins = 0;
var losses = 0;
var guessesLeft = 5;
var userLetter = "";
var userInput = "";
var alpha = "abcdefghijklmnopqrstuvwxyz";
var randomPicked = [];

//Array For Random Word
var myWords = ["cell", "chiaotzu", "frieza", "gohan", "goku", "krillin", "buu", "piccolo", "tien", "trunks", "vegeta", "yamcha"];

//getElementById 
var winsText = document.getElementById("wins-text");
var currentWord = document.getElementById("current-word");
var guessesRemaining = document.getElementById("guesses-left");
var letterGuessed = document.getElementById("letters-guessed");
var lossesText = document.getElementById("losses-text");
var image = document.getElementById("picture");




