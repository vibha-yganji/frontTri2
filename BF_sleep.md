---
layout: base
title: Sleep 
permalink: /sleep/
---
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Binary Guessing Game</title>
  <style>
    body {
      font-family: Arial, sans-serif;
      background-color: #f4f4f4;
      margin: 0;
      padding: 20px;
    }
    h1 {
      text-align: center;
    }
    .container {
      max-width: 500px;
      margin: 0 auto;
      background-color: #fff;
      border-radius: 8px;
      padding: 20px;
      box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    }
    p {
      margin-bottom: 15px;
    }
    select,
    input[type="number"],
    button {
      padding: 8px 12px;
      font-size: 16px;
      margin-bottom: 10px;
    }
    button {
      cursor: pointer;
      background-color: #4caf50;
      color: white;
      border: none;
      border-radius: 4px;
    }
    button:hover {
      background-color: #45a049;
    }
    #binaryRepresentation {
      font-size: 24px;
      font-weight: bold;
      text-align: center;
      margin-bottom: 20px;
    }
    #result,
    #previousGuesses {
      margin-top: 15px;
      font-style: italic;
    }
  </style>
</head>
<body>
  <div class="container">
    <h1>Binary Guessing Game</h1>
    <p>Select the number of bits for the binary representation:</p>
    <select id="bitSelect" onchange="setupGame()">
      <option value="4">4 bits</option>
      <option value="6">6 bits</option>
      <option value="10">10 bits</option>
    </select>

    <div id="gameSection" style="display:none;">
      <p>Guess the decimal number based on its binary representation:</p>
      
      <!-- Display the binary representation -->
      <p id="binaryRepresentation"></p>
      
      <!-- Input field for the player's guess -->
      <input type="number" id="playerGuess" placeholder="Enter your guess">
      <button onclick="checkGuess()">Submit</button>

      <p id="result"></p>
      <p id="previousGuesses">Previous Guesses:</p>
    </div>
  </div>

  <script>
    // Function to set up the game based on selected bits
    function setupGame() {
      const selectedBits = parseInt(document.getElementById("bitSelect").value);
      const maxNumber = Math.pow(2, selectedBits) - 1;
      const randomNumber = Math.floor(Math.random() * (maxNumber + 1));

      // Display the game section
      document.getElementById("gameSection").style.display = "block";

      // Display the initial hidden binary representation
      let hiddenBinary = "-".repeat(selectedBits);
      document.getElementById("binaryRepresentation").innerText = hiddenBinary;

      // Initialize game variables
      let attempts = 0; // Track the number of attempts
      let previousGuesses = []; // Store previous guesses

      // Function to check the player's guess
      window.checkGuess = function () {
        attempts++;
        const playerGuess = parseInt(document.getElementById("playerGuess").value);

        previousGuesses.push(playerGuess); // Store the guess
        document.getElementById("previousGuesses").innerText = "Previous Guesses: " + previousGuesses.join(', ');

        if (playerGuess === randomNumber) {
          displayCongratulations();
        } else if (playerGuess < randomNumber) {
          document.getElementById("result").innerText = "Try a higher number.";
        } else {
          document.getElementById("result").innerText = "Try a lower number.";
        }

        // Reveal the binary representation for each incorrect guess
        revealBinary(playerGuess);
      };

      // Function to reveal the binary representation
      function revealBinary(playerGuess) {
        if (playerGuess !== randomNumber) {
          hiddenBinary = randomNumber.toString(2).padStart(selectedBits, '0');
          document.getElementById("binaryRepresentation").innerText = hiddenBinary.slice(0, attempts).padEnd(selectedBits, '-');
        }
      }

      // Function to display congratulatory messages based on attempts
      function displayCongratulations() {
        let message = "";
        if (attempts === 1) {
          message = "Amazing! You guessed it on the first try!";
        } else if (attempts <= 3) {
          message = "Congratulations! You guessed it in just a few attempts!";
        } else {
          message = "Congratulations! You guessed it!";
        }
        document.getElementById("result").innerText = message;
      }
    }
  </script>
</body>
</html>
