---
layout: page
title: Binary Badges
permalink: /about/
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
    // Sample Decimal Numbers for Conversion
const decimalNumbers = [10, 25, 36, 47, 58];

// Store user progress and badge earning status
const userProgress = {
  challengesCompleted: 0,
  overTenMinutes: 0,
  overThirtyMinutes: 0,
};

function generateConversionChallenge() {
  const challengeSection = document.getElementById('conversionChallenge');

  decimalNumbers.forEach((number, index) => {
    const challengeDiv = document.createElement('div');
    challengeDiv.classList.add('challenge-item');

    const decimalLabel = document.createElement('label');
    decimalLabel.textContent = `Decimal Number: ${number}`;
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

        // Update user progress
        userProgress.challengesCompleted++;
        userProgress.overTenMinutes = isOverTenMinutes(userProgress.challengesCompleted);
        userProgress.overThirtyMinutes = isOverThirtyMinutes(userProgress.challengesCompleted);

        // Check if the user has earned a badge
        awardBinaryBadge();
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

  // Logic gate: AND gate for earning a badge
  const badgeEarned = performOR(userProgress.overThirtyMinutes, performAND(userProgress.overTenMinutes, userProgress.challengesCompleted >= 3));

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

function isOverThirtyMinutes(challengesCompleted) {
  return challengesCompleted >= 5; // Assuming 5 challenges completed equals over 30 minutes
}

function isOverTenMinutes(challengesCompleted) {
  return challengesCompleted >= 2; // Assuming 2 challenges completed equals over 10 minutes
}

function performOR(flag1, flag2) {
  return flag1 || flag2;
}

function performAND(flag1, flag2) {
  return flag1 && flag2;
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


