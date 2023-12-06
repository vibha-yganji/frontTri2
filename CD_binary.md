---
layout: base
title: Binary Challenge
permalink: /challenge/
---
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Binary Logic Gates Challenge</title>
  <style>
    /* Your CSS styles can be placed here */
    /* Example styles for badges */
    .binary-digit {
      font-size: 24px;
      margin: 0 4px;
    }
    .binary-one {
      color: green; /* Color for '1' in the badge */
    }
  </style>
</head>
<body>
  <h1>Binary Logic Gates Challenge</h1>

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
      let badgesHTML = '';

      for (let gate in user.binaryBadges) {
        const binaryBadge = user.binaryBadges[gate].toString(2); // Convert badge count to binary
        badgesHTML += `${gate}: ${binaryBadge.padStart(3, '0')} `;
      }

      badgeSection.innerHTML = `Binary Badges Earned: ${badgesHTML}`;
    }


    // Call the function to generate logic gate challenges on window load
    window.onload = function () {
      generateLogicGateChallenge();
    };
  </script>
</body>
</html>
