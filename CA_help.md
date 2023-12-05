---
layout: page
title: Binary Challenge
permalink: /challenge/
---
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Binary Conversion Challenge</title>
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
  <h1>Decimal to Binary Conversion Challenge</h1>

  <div id="conversionChallenge">
    <!-- The challenge items will be dynamically generated here -->
    <!-- Each challenge will include a decimal number and input field -->
  </div>

  <h2>Binary Badges</h2>
  <div id="binaryBadge">
    <!-- The binary badges earned by the user will be displayed here -->
    <!-- Example: 110 (representing two badges earned) -->
  </div>

  <script>
    const decimalNumbers = [10, 25, 36, 47, 58, 100]; // Added an extra challenge number
    const numberOfChallenges = decimalNumbers.length;

    const userProgress = {
      challengesCompleted: 0,
      badgesEarned: 0
    };

    function generateConversionChallenge() {
      const challengeSection = document.getElementById('conversionChallenge');

      decimalNumbers.forEach((number, index) => {
        const challengeDiv = document.createElement('div');
        challengeDiv.classList.add('challenge-item');

        let challengeText;
        if (index === numberOfChallenges - 1) {
          // If it's the last challenge, make it a special challenge question
          challengeText = 'What is the binary representation of 100?';
        } else {
          challengeText = `Decimal Number: ${number}`;
        }

        const decimalLabel = document.createElement('label');
        decimalLabel.textContent = challengeText;
        challengeDiv.appendChild(decimalLabel);

        const inputField = document.createElement('input');
        inputField.setAttribute('type', 'text');
        inputField.setAttribute('placeholder', 'Enter Binary');
        inputField.classList.add('binary-input');
        challengeDiv.appendChild(inputField);

        const checkButton = document.createElement('button');
        checkButton.textContent = 'Check Answer';
        checkButton.addEventListener('click', () => {
          const userAnswer = inputField.value.trim();
          const correctAnswer = convertToBinary(number);

          if (userAnswer === correctAnswer) {
            alert('Correct! Great job.');

            userProgress.challengesCompleted++;
            awardBinaryBadge();

            // Check if all challenges are completed
            if (userProgress.challengesCompleted === numberOfChallenges) {
              alert('Congratulations! All challenges completed!');
              // You can add any other action when all challenges are completed here
            }
          } else {
            alert('Incorrect. Try again!');
          }
        });
        challengeDiv.appendChild(checkButton);

        challengeSection.appendChild(challengeDiv);
      });
    }

    function awardBinaryBadge() {
      const binaryBadgeElement = document.getElementById('binaryBadge');
      binaryBadgeElement.innerHTML = '';

      const badgeEarned = checkBadgeCriteria();

      if (badgeEarned) {
        userProgress.badgesEarned++;
      }

      for (let i = 0; i < userProgress.badgesEarned; i++) {
        const span = document.createElement('span');
        span.textContent = '1';
        span.classList.add('binary-digit', 'binary-one');
        binaryBadgeElement.appendChild(span);
      }
    }

    function checkBadgeCriteria() {
      const challengesThreshold = 3; // Threshold for challenges completed for badge earning
      const challengesCompleted = userProgress.challengesCompleted;
      const specialChallengeCompleted = challengesCompleted === numberOfChallenges - 1;
      const threeOutOfFiveCompleted = challengesCompleted >= 3;

      return specialChallengeCompleted || threeOutOfFiveCompleted;
    }

    function convertToBinary(decimalNumber) {
      return (decimalNumber >>> 0).toString(2);
    }

    window.onload = function () {
      generateConversionChallenge();
    };
  </script>
</body>
</html>
