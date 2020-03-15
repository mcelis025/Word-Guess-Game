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

// Start Game Event
document.onkeyup = function (event) {                                             // Loop "turns on" on keyup
  var userInput = event.key.toLowerCase();                                        // Makes userInput lowerCase and stores key inputs into userInput

  var t = userInput + " ";                                                        // Adds userInput to 't' 
  letterGuessed.innerHTML += t;                                                   // Takes whats in 't' and puts it in this displays everything typed

  // Wins/Gets a Letter Logic
  if(random.indexOf(userInput) > -1){                                             // Checks if userInput letter is in the random work

    var pos = 0;                                                                  // Sets pos to 0
    var counterOccurance = -1;                                                    // Sets counterOccurance to -1

    while(pos!= -1){                                                              // As long as the pos does not equal -1 run following 
      pos = random.indexOf(userInput, counterOccurance + 1);                      // Checks when in the random word userInput letter us and adds 1 to search for multiples and makes that pos  
      counterOccurance = pos;                                                     // makes counterOccurance equal to pos

      console.log(pos);

      if(pos != -1){                                                              // If pos does not equal -1 run following 
        var replaceLetter = document.getElementById("underscore_" + pos);         // Takes _ and position of letter and makes a var to be able to replace
        replaceLetter.textContent = userInput;                                    // Adds userInput to replaceLetter
        wordLength--;                                                             // Decreases wordLength 
      }
    }


    if(wordLength === 0){                                                         // If wordLength equals 0
      wins++;                                                                     // Increases wins
      image.src = "assets/images/" + random + ".jpg";                             // Switches img to random word character
      winsText.textContent = "Wins: " + wins;                                     // Adds wins to winsText which then shows that to html file
      random = resetGame();                                                       // Resets game
    }
    // we win the game
  } else {
    // lose an attempt or lose the game
    // just lose an attempt, not the whole game
    // no attempts left, so lose the whole game
    if(guessesLeft > 0){                                                          // If guessesLeft is greater 0
      guessesLeft--;                                                              // Decrease guessesLeft
    } else {
      losses++;                                                                   // Adds losses
      // write the number of losses to the div
      image.src = "assets/images/gameOver.jpg";                                   // Shows lose img
      lossesText.textContent = "Losses: " + losses;                               // Adds losses to lossesText which then shows to to html 
      random = resetGame();                                                       // Resets game
      //gameOver();
    }
  }
  // loss logic
  console.log(userInput);
  guessesRemaining.textContent = "Wrong Guesses Left: " + guessesLeft;            // Adds guessesLeft to guessesRemaing which then show to html
}
