---
layout: base
title: Binary Challenge
permalink: /challenge/
---
<!DOCTYPE html>
<html>
<head>
  <title>Logic Gates Game</title>
  <link rel="stylesheet" type="text/css" href="styles.css">
</head>
<body>
  <div class="containerlogicgates">
    <h1>Logic Gates Game</h1>
    <div id="inputs">
      <label>Input A:</label>
      <input type="checkbox" id="inputA">
      <label>Input B:</label>
      <input type="checkbox" id="inputB">
    </div>
    <div id="gates">
      <h2>Gates:</h2>
      <button onclick="applyGate('and')">AND (&#8743;) Gate</button>
      <button onclick="applyGate('or')">OR (&#8744;) Gate</button>
      <button onclick="applyGate('not')">NOT (&#172;) Gate</button>
      <button onclick="applyGate('xor')">XOR (&#8853;) Gate</button>
    </div>
    <div id="output">
      <h2>Lightbulb</h2>
      <div id="lightbulb"></div>
      <button onclick="testOutput()">Test Output</button>
    </div>
  </div>
  <div id="instructions">
    <h2>Instructions</h2>
    <p>Welcome to the Binary Logic Gates Challenge!</p>
    <p>Input binary values (0 or 1) into the fields and select the correct logic gate operation.</p>
    <p>Click "Check Answer" to verify your answer. Earn badges for each correct answer!</p>
  </div>

  <div id="challengeSection">
    <!-- Challenge items will be dynamically generated here -->
    <!-- Each challenge will include logic gate operation and input fields -->
  </div>

  <h2>Binary Badges</h2>
  <div id="binaryBadge">
    <!-- The binary badges earned by the user will be displayed here -->
    <!-- Example: AND: 110, OR: 101, XOR: 010, NOT: 100, NAND: 011 -->
  </div>

  <script>
      // Variables to store inputs A and B, and lightbulb status
let inputA = false;
let inputB = false;
let lightbulb = false;

// Function to apply selected gate logic
function applyGate(gate) {
  if (gate === 'and') {
    lightbulb = inputA && inputB; // Applyng AND gate logic
  } else if (gate === 'or') {
    lightbulb = inputA || inputB; // Applyng OR gate logic
  } else if (gate === 'not') {
    lightbulb = !inputA; // Applyng NOT gate logic to input A
  } else if (gate === 'xor') {
    lightbulb = inputA !== inputB; // Applyng XOR gate logic
  }
  updateLightbulb(); // Updat the lightbulb representation
}

// Function to update the lightbulb representation based on it's status
function updateLightbulb() {
  const lightbulbElement = document.getElementById('lightbulb');
  if (lightbulb) {
    lightbulbElement.style.backgroundColor = 'yellow'; // Light is ONN
  } else {
    lightbulbElement.style.backgroundColor = 'grey'; // Light is OFFF
  }
}


// Function to test and display the current lightbulb outputt
function testOutput() {
  alert(`Output to the lightbulb: ${lightbulb}`);
}

// Event listeners for input checkboxes
document.getElementById('inputA').addEventListener('change', function() {
  inputA = this.checked; // Update input A statuss
  applyGate(); // Apply selected gate logic
});

document.getElementById('inputB').addEventListener('change', function() {
  inputB = this.checked; // Update input B statuss
  applyGate(); // Apply selected gate logic
});

    
    // Define logic gate functions
    function andGate(input1, input2) {
      return input1 === '1' && input2 === '1' ? '1' : '0';
    }

    function orGate(input1, input2) {
      return input1 === '1' || input2 === '1' ? '1' : '0';
    }

    function xorGate(input1, input2) {
      return input1 !== input2 ? '1' : '0';
    }

    function notGate(input) {
      return input === '0' ? '1' : '0';
    }

    function nandGate(input1, input2) {
      return !(input1 === '1' && input2 === '1') ? '1' : '0';
    }

    // User object to track progress and earned binary badges
    let user = {
      binaryBadges: {
        AND: 0,
        OR: 0,
        XOR: 0,
        NOT: 0,
        NAND: 0
        // Add more gates as needed
      },
      challengeCount: 0
    };

    // Function to update earned binary badges
    function updateBadges() {
      const badgeSection = document.getElementById('binaryBadge');
      let badgesHTML = '';

      for (let gate in user.binaryBadges) {
        badgesHTML += `${gate}: ${user.binaryBadges[gate]} `;
      }

      badgeSection.textContent = `Binary Badges Earned: ${badgesHTML}`;
    }

    // Function to generate logic gate challenge
    function generateLogicGateChallenge() {
      const challengeSection = document.getElementById('challengeSection');
      const logicGates = ['AND', 'OR', 'XOR', 'NOT', 'NAND']; // Types of logic gates

      logicGates.forEach((gate) => {
        const challengeDiv = document.createElement('div');
        challengeDiv.classList.add('challenge-item');

        const gateLabel = document.createElement('label');
        gateLabel.textContent = `${gate} Gate Operation`;
        challengeDiv.appendChild(gateLabel);

        // Creating input fields based on the gate type
        if (gate === 'NOT') {
          const inputField = document.createElement('input');
          inputField.setAttribute('type', 'text');
          inputField.setAttribute('placeholder', 'Enter Binary 0 or 1');
          inputField.classList.add('binary-input');
          challengeDiv.appendChild(inputField);

          const checkButton = document.createElement('button');
          checkButton.textContent = 'Check Answer';
          checkButton.addEventListener('click', () => {
            const userAnswer = inputField.value.trim();
            const gateResult = notGate(userAnswer);

            if (userAnswer === '0' || userAnswer === '1') {
              alert('Correct! Great job.');
              user.challengeCount++;
              user.binaryBadges[gate]++;
              updateBadges();
            } else {
              alert('Incorrect. Try again!');
            }
          });
          challengeDiv.appendChild(checkButton);
        } else {
          const inputField1 = document.createElement('input');
          inputField1.setAttribute('type', 'text');
          inputField1.setAttribute('placeholder', 'Enter Binary 0 or 1');
          inputField1.classList.add('binary-input');
          challengeDiv.appendChild(inputField1);

          const inputField2 = document.createElement('input');
          inputField2.setAttribute('type', 'text');
          inputField2.setAttribute('placeholder', 'Enter Binary 0 or 1');
          inputField2.classList.add('binary-input');
          challengeDiv.appendChild(inputField2);

          const checkButton = document.createElement('button');
          checkButton.textContent = 'Check Answer';
          checkButton.addEventListener('click', () => {
            const userAnswer1 = inputField1.value.trim();
            const userAnswer2 = inputField2.value.trim();
            let gateResult;

            if (gate === 'AND') {
              gateResult = andGate(userAnswer1, userAnswer2);
            } else if (gate === 'OR') {
              gateResult = orGate(userAnswer1, userAnswer2);
            } else if (gate === 'XOR') {
              gateResult = xorGate(userAnswer1, userAnswer2);
            } else if (gate === 'NAND') {
              gateResult = nandGate(userAnswer1, userAnswer2);
            }

            if ((userAnswer1 === '0' || userAnswer1 === '1') && (userAnswer2 === '0' || userAnswer2 === '1')) {
              if (gateResult === '1') {
                alert('Correct! Great job.');
                user.challengeCount++;
                user.binaryBadges[gate]++;
                updateBadges();
              } else {
                alert('Incorrect. Try again!');
              }
            } else {
              alert('Please enter valid binary values (0 or 1).');
            }
          });
          challengeDiv.appendChild(checkButton);
        }

        challengeSection.appendChild(challengeDiv);
      });
    }

     function updateBadges() {
    const badgeSection = document.getElementById('binaryBadge');
    badgeSection.innerHTML = ''; // Clear previous badges

    for (let gate in user.binaryBadges) {
      const binaryBadge = user.binaryBadges[gate].toString(2).padStart(3, '0'); // Convert badge count to binary

      const badgeSpan = document.createElement('span');
      badgeSpan.classList.add('binary-badge', `badge-${gate.toLowerCase()}`);
      badgeSpan.textContent = `${gate}: ${binaryBadge} `;
      badgeSection.appendChild(badgeSpan);
    }
     }
    // Call the function to generate logic gate challenges on window load
    window.onload = function () {
      generateLogicGateChallenge();
    };
  </script>
</html>
