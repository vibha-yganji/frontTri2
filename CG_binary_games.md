---
layout: page
title: Binary Games
permalink: /binary_games/
---
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Binary Guessing Game</title>
  <style>
    select,
    input[type="number"],
    .btn {
      padding: 8px 12px;
      font-size: 16px;
      margin-bottom: 10px;
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
    .cell {
      width: 40px;
      height: 40px;
      border: 1px solid #ccc;
      display: inline-block;
      text-align: center;
      line-height: 40px;
      font-size: 20px;
      cursor: pointer;
      transition: background-color 0.3s, color 0.3s;
    }
    .cell:hover {
      background-color: #f0f0f0;
    }
    .cell.clicked {
      background-color: #007bff;
      color: white;
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
      <button class="btn" onclick="checkGuess()">Submit</button>

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
  <h1>Binary Puzzle</h1>
  <p>Click on the cells to toggle their values and reach a configuration of all 1s.</p>

  <!-- Create a grid using div elements -->
  <div id="puzzle">
    <!-- Each cell is represented by a div with a unique id -->
    <!-- You can expand this for a 5x5 grid -->
    <div class="cell" id="cell-00" onclick="toggleValue('cell-00')">0</div>
    <div class="cell" id="cell-01" onclick="toggleValue('cell-01')">0</div>
    <div class="cell" id="cell-02" onclick="toggleValue('cell-02')">0</div>
    <div class="cell" id="cell-03" onclick="toggleValue('cell-03')">0</div>
    <div class="cell" id="cell-04" onclick="toggleValue('cell-04')">0</div><br>

    <!-- Add more cells as needed -->
    <div class="cell" id="cell-10" onclick="toggleValue('cell-10')">0</div>
    <div class="cell" id="cell-11" onclick="toggleValue('cell-11')">0</div>
    <div class="cell" id="cell-12" onclick="toggleValue('cell-12')">0</div>
    <div class="cell" id="cell-13" onclick="toggleValue('cell-13')">0</div>
    <div class="cell" id="cell-14" onclick="toggleValue('cell-14')">0</div><br>

    <div class="cell" id="cell-20" onclick="toggleValue('cell-20')">0</div>
    <div class="cell" id="cell-21" onclick="toggleValue('cell-21')">0</div>
    <div class="cell" id="cell-22" onclick="toggleValue('cell-22')">0</div>
    <div class="cell" id="cell-23" onclick="toggleValue('cell-23')">0</div>
    <div class="cell" id="cell-24" onclick="toggleValue('cell-24')">0</div><br>

    <div class="cell" id="cell-30" onclick="toggleValue('cell-30')">0</div>
    <div class="cell" id="cell-31" onclick="toggleValue('cell-31')">0</div>
    <div class="cell" id="cell-32" onclick="toggleValue('cell-32')">0</div>
    <div class="cell" id="cell-33" onclick="toggleValue('cell-33')">0</div>
    <div class="cell" id="cell-34" onclick="toggleValue('cell-34')">0</div><br>

    <div class="cell" id="cell-40" onclick="toggleValue('cell-40')">0</div>
    <div class="cell" id="cell-41" onclick="toggleValue('cell-41')">0</div>
    <div class="cell" id="cell-42" onclick="toggleValue('cell-42')">0</div>
    <div class="cell" id="cell-43" onclick="toggleValue('cell-43')">0</div>
    <div class="cell" id="cell-44" onclick="toggleValue('cell-44')">0</div><br>
  </div>

  <script>
    // Function to toggle the value of a cell and its neighboring cells in a specific pattern using XOR and AND logic
    function toggleValue(cellId) {
      var cell = document.getElementById(cellId);
      var row = parseInt(cellId.charAt(5));
      var col = parseInt(cellId.charAt(6));

      // Define the pattern for toggling cell values
      var pattern = [
        [row, col], [row - 1, col], [row + 1, col],
        [row, col - 1], [row, col + 1]
      ];

      // Toggle the values of cells in the specified pattern using XOR and AND with 1
      for (var i = 0; i < pattern.length; i++) {
        var currentRow = pattern[i][0];
        var currentCol = pattern[i][1];
        var currentCell = document.getElementById(`cell-${currentRow}${currentCol}`);

        if (currentCell) { // Check if the cell exists
          var currentValue = parseInt(currentCell.innerHTML); // Get the current cell value

          // Apply XOR and AND operations alternately
          var newValue = i % 2 === 0 ? currentValue ^ 1 : currentValue & 1;
          currentCell.innerHTML = newValue;
          currentCell.classList.toggle('clicked'); // Toggle class for visual feedback
        }
      }
    }
  </script>
</body>
