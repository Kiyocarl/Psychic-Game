  //Create variable
  //array of choice for the computer
  var computerChoices = [ "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "_"];
  // letter.length;
  //wins count 
  var wins = 0;
  //losses count
  var losses = 0;
  //guess left
  var guessesLeft = 9;
  // how many quess so far
  var YourGuessSoFar = 0;

  //Grab reference HTML elemnent I'll be writing to
  // var gameHTML = document.getElementById("game")

  //When a key is pressed, alert "pressed a button".
  document.onkeyup = function(event) {

   console.log(event)
   guessesLeft--;

    //capture key from onkeyup event
    var PlayerGuess = event.key;

    //randomly pick a quess for computer
    var computerGuess = computerChoices [Math.floor(Math.random("2" )*
    computerChoices.length)]

    //compare user's guess to computer quess and run with win/loss logic
    if (PlayerGuess === computerGuess) [

    ]
    // write result in the HTML
    document.getElementById("game").innerHTML = "<h2>wins:" +wins + "</h2><h2>losses:" + losses + "</h2><h2>guessLeft: " + guessesLeft + 
    "</h2><h2>YourGuess: " + PlayerGuess +
    "</h2>"
     
    
  
  }