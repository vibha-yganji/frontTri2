<!DOCTYPE html>
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

  <div id="challengeSection">
    <!-- Challenge items will be dynamically generated here -->
    <!-- Each challenge will include logic gate operation and input fields -->
  </div>

  <h2>Binary Badges</h2>
  <div id="binaryBadge">
    <!-- The binary badges earned by the user will be displayed here -->
    <!-- Example: 110 (representing two badges earned) -->
  </div>

  <script>
    // Define logic gate functions
    function andGate(input1, input2) {
      return input1 === '1' && input2 === '1' ? '1' : '0';
    }

    function orGate(input1, input2) {
      return input1 === '1' || input2 === '1' ? '1' : '0';
    }

    // Function to generate logic gate challenge
    function generateLogicGateChallenge() {
      const challengeSection = document.getElementById('challengeSection');
      const logicGates = ['AND', 'OR']; // Types of logic gates

      logicGates.forEach((gate) => {
        const challengeDiv = document.createElement('div');
        challengeDiv.classList.add('challenge-item');

        const gateLabel = document.createElement('label');
        gateLabel.textContent = `${gate} Gate Operation`;
        challengeDiv.appendChild(gateLabel);

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
          }

          const correctAnswer = gateResult; // Set correct answer based on gate operation

          if (userAnswer1 === '' || userAnswer2 === '') {
            alert('Please enter both binary values.');
          } else if (userAnswer1 !== '0' && userAnswer1 !== '1' && userAnswer2 !== '0' && userAnswer2 !== '1') {
            alert('Please enter valid binary values (0 or 1).');
          } else if (userAnswer1 === correctAnswer && userAnswer2 === correctAnswer) {
            alert('Correct! Great job.');
            // Award badges or progress tracking logic can be added here
          } else {
            alert('Incorrect. Try again!');
          }
        });
        challengeDiv.appendChild(checkButton);

        challengeSection.appendChild(challengeDiv);
      });
    }

    // Call the function to generate logic gate challenges on window load
    window.onload = function () {
      generateLogicGateChallenge();
    };
  </script>
</body>
</html>
