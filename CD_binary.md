---
layout: base
title: Binary Challenge
permalink: /challenge/
---
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
      <button onclick="applyGate('nand')">NAND (&#172;&#8743;) Gate</button>
      <button onclick="applyGate('nor')">NOR (&#172;&#8744;) Gate</button>
      <button onclick="applyGate('xnor')">XNOR (&#8891;) Gate</button>
    </div>
    <div id="output">
      <h2>Lightbulb</h2>
      <div id="lightbulb"></div>
      <button onclick="testOutput()">Test Output</button>
    </div>
  </div>
  <div id="instructions">
   <div id="instructions">
    <h2>Instructions</h2>
    <p>Welcome to the Binary Logic Gates Challenge!</p>
    <p>Binary operates with two digits: 0 and 1. Use these values to simulate logical operations.</p>
    <p>Input binary values (0 or 1) into the fields and select the correct logic gate operation:</p>
    <ul>
      <li>AND Gate (&#8743;): Produces a 1 output only if both inputs are 1.</li>
      <li>OR Gate (&#8744;): Produces a 1 output if either or both inputs are 1.</li>
      <li>NOT Gate (&#172;): Produces a 1 output for the opposite value of the input.</li>
      <li>XOR Gate (&#8853;): Produces a 1 output if inputs are different.</li>
      <li>NAND Gate (&#172;&#8743;): Produces a 0 output only if both inputs are 1.</li>
      <li>NOR Gate (&#172;&#8744;): Produces a 0 output if either or both inputs are 1.</li>
      <li>XNOR Gate (&#8891;): Produces a 1 output if inputs are the same.</li>
    </ul>
    <p>Click "Test Output" to see the lightbulb illuminate according to the selected logic.</p>
    <p>Click "Check Answer" to verify your result. Earn badges for each correct answer!</p>
    <p> If you want, try you skills with the <strong> Binary Badge Challenge </strong> below </p>
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
    lightbulb = inputA && inputB; // Applying AND gate logic
  } else if (gate === 'or') {
    lightbulb = inputA || inputB; // Applying OR gate logic
  } else if (gate === 'not') {
    lightbulb = !inputA; // Applying NOT gate logic to input A
  } else if (gate === 'xor') {
    lightbulb = inputA !== inputB; // Applying XOR gate logic
  } else if (gate === 'nand') {
    lightbulb = !(inputA && inputB); // Applying NAND gate logic
  } else if (gate === 'nor') {
    lightbulb = !(inputA || inputB); // Applying NOR gate logic
  } else if (gate === 'xnor') {
    lightbulb = inputA === inputB; // Applying XNOR gate logic
  } else {
    // Additional logic for other gates if needed
  }
  
  updateLightbulb(); // Update the lightbulb representation
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

    
    // Define logic gate functions for lightbu;n
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

    function nandGate(input1, input2) {
      return !(input1 === '1' && input2 === '1') ? '1' : '0';
    }

    // Function for NOR gate operation
    function norGate(input1, input2) {
      return !(input1 === '1' || input2 === '1') ? '1' : '0';
    }

    // Function for XNOR gate operation
    function xnorGate(input1, input2) {
      return input1 === input2 ? '1' : '0';
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
<html>
<html>
<head>
  <title>Number Systems</title>
  <style>
    table {
      border-collapse: collapse;
      width: 100%;
      margin-bottom: 20px;
    }
    th, td {
      border: 1px solid #ddd;
      padding: 8px;
      text-align: left;
    }
    th {
      background-color: #f2f2f2;
    }
  </style>
</head>
<body>

<h2>Number Systems Overview</h2>
<table>
  <thead>
    <tr>
      <th>System</th>
      <th>Base</th>
      <th>Digits</th>
      <th>Representation</th>
      <th>Examples</th>
      <th>Usage</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Decimal</td>
      <td>10</td>
      <td>0-9</td>
      <td>Place value (base 10)</td>
      <td>42, 105, 789</td>
      <td>Everyday numbering system</td>
    </tr>
    <tr>
      <td>Binary</td>
      <td>2</td>
      <td>0, 1</td>
      <td>Powers of 2 (base 2)</td>
      <td>1010, 1101, 11110011</td>
      <td>Computers, digital systems</td>
    </tr>
    <tr>
      <td>Hexadecimal</td>
      <td>16</td>
      <td>0-9, A-F</td>
      <td>Powers of 16 (base 16)</td>
      <td>1A, 3D, FF7A</td>
      <td>Memory addressing (computers), colors</td>
    </tr>
  </tbody>
</table>

<h2>Decimal, Binary, and Hexadecimal Equivalents</h2>
<table>
  <thead>
    <tr>
      <th>Decimal</th>
      <th>Binary</th>
      <th>Hexadecimal</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>1</td>
      <td>0001</td>
      <td>1</td>
    </tr>
    <tr>
      <td>2</td>
      <td>0010</td>
      <td>2</td>
    </tr>
    <tr>
      <td>3</td>
      <td>0011</td>
      <td>3</td>
    </tr>
    <tr>
      <td>4</td>
      <td>0100</td>
      <td>4</td>
    </tr>
    <tr>
      <td>5</td>
      <td>0101</td>
      <td>5</td>
    </tr>
    <tr>
      <td>6</td>
      <td>0110</td>
      <td>6</td>
    </tr>
    <tr>
      <td>7</td>
      <td>0111</td>
      <td>7</td>
    </tr>
    <tr>
      <td>8</td>
      <td>1000</td>
      <td>8</td>
    </tr>
    <tr>
      <td>9</td>
      <td>1001</td>
      <td>9</td>
    </tr>
    <tr>
      <td>10</td>
      <td>1010</td>
      <td>A</td>
    </tr>
    <tr>
      <td>11</td>
      <td>1011</td>
      <td>B</td>
    </tr>
    <tr>
      <td>12</td>
      <td>1100</td>
      <td>C</td>
    </tr>
    <tr>
      <td>13</td>
      <td>1101</td>
      <td>D</td>
    </tr>
    <tr>
      <td>14</td>
      <td>1110</td>
      <td>E</td>
    </tr>
    <tr>
      <td>15</td>
      <td>1111</td>
      <td>F</td>
    </tr>
    <tr>
      <td>16</td>
      <td>10000</td>
      <td>10</td>
    </tr>
  </tbody>
</table>

</body>
<html>
<head>
  <title>Binary to Decimal Converter</title>
  <script>
    function binaryToDecimal() {
      var binaryInput = document.getElementById("binaryInput").value;
      var decimalResult = 0;
      var exponent = binaryInput.length - 1;
      var exponentWork = [];

      for (var i = 0; i < binaryInput.length; i++) {
        if (binaryInput[i] === '1') {
          decimalResult += Math.pow(2, exponent);
          exponentWork.push("2^" + exponent);
        }
        exponent--;
      }

      document.getElementById("decimalResult").innerHTML = "Decimal: " + decimalResult;
      document.getElementById("exponentWork").innerHTML = "Exponent work: " + exponentWork.join(" + ");
    }
  </script>
</head>
<body>
  <h2>Binary to Decimal Converter</h2>
  <label for="binaryInput">Enter a binary number: </label>
  <input type="text" id="binaryInput" />
  <button onclick="binaryToDecimal()">Convert</button>

  <p id="decimalResult"></p>
  <p id="exponentWork"></p>
  <h2>ASCII Table</h2>
  <p>Binary numbers can be converted into text characters using ASCII codes, aiding computers in storing information in their memory and processors. ASCII relies on a table of 128 characters, each character associated with a distinct decimal value.</p>
  <!-- <img src="https://github.com/jplip/frontTri2/blob/main/images/ASCII_Codes_1.png">
  <img src="https://github.com/jplip/frontTri2/blob/main/images/printing_ascii_control_characters-f.png"> -->
  <p><a href="https://github.com/jplip/frontTri2/blob/main/images/ASCII_Codes_1.png">Non Printing Codes</a></p>
  <p><a href="https://github.com/jplip/frontTri2/blob/main/images/printing_ascii_control_characters-f.png">Printing Control Characters</a></p>
</body>
</html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Binary Shifting</title>
  <style>
    /* Add your CSS styles here */
    /* This is just a placeholder */
    body {
      font-family: Arial, sans-serif;
      line-height: 1.6;
    }

    h1, h2 {
      color: #333;
    }

    section {
      margin-bottom: 20px;
    }
  </style>
</head>
<body>
  <div class="infographic">
    <h1>Understanding Binary Shift Operations</h1>

    <!-- Section 1: Introduction -->
    <section>
      <h2>Introduction</h2>
      <p>Binary shifting involves moving the digits of a binary number to the left or right. It's crucial in computer science and programming for optimizing calculations and algorithms.</p>
    </section>

    <!-- Section 2: What is Binary Representation? -->
    <section>
      <h2>What is Binary Representation?</h2>
      <p>Binary representation uses only two digits, 0 and 1, to express numbers in the base-2 system. For example, the binary number 101010 represents 42 in decimal.</p>
    </section>

    <!-- Section 3: Binary Shifting -->
    <section>
      <h2>Binary Shifting</h2>
      <p>Binary shifting involves left shift (<<) and right shift (>>). Left shifting a binary number multiplies it by powers of 2, while right shifting divides it.</p>
      <p>For instance, left shifting '1010' by one position results in '10100' (which is 10 * 2), while right shifting '1010' by one position gives '101' (which is 10 / 2).</p>
    </section>

    <!-- Section 4: Common Use Cases -->
    <section>
      <h2>Common Use Cases</h2>
      <p>Binary shifting finds use in programming for optimizing multiplication/division by powers of 2 and in algorithms like bit manipulation and data compression.</p>
    </section>

    <!-- Section 5: Types of Shifts -->
    <section>
      <h2>Types of Shifts</h2>
      <p>Logical Shift: Fills shifted-in positions with 0s. Arithmetic Shift: Preserves the sign bit in signed numbers, filling shifted-in positions accordingly.</p>
      <p>For instance, in an arithmetic right shift of a negative number, the leftmost bit (sign bit) is preserved, maintaining the number's negative value.</p>
    </section>
  </div>
<html>
<!DOCTYPE html>
<html>

<head>
    <title>Binary Shift Table</title>
</head>

<body>
    <h2>Binary Shift Table</h2>

    <label for="binaryInput">Enter a Binary Number:</label>
    <input type="text" id="binaryInput" placeholder="Enter binary number (e.g., 1010)">
    <br><br>
    <label for="shiftType">Select Shift Type:</label>
    <select id="shiftType">
        <option value="left">Left Shift</option>
        <option value="right">Right Shift</option>
    </select>
    <br><br>
    <label for="shiftAmount">Enter Shift Amount:</label>
    <input type="number" id="shiftAmount" placeholder="Enter shift amount">
    <br><br>
    <button onclick="generateTable()">Generate Table</button>

    <h3>Before Shift</h3>
    <table>
        <caption>Before Shift</caption>
        <tr>
            <th>Position</th>
            <th>Bit</th>
            <th>Place Value</th>
        </tr>
        <tbody id="beforeShiftTable"></tbody>
    </table>
    <p id="beforeShiftTotal">Total: </p>

    <h3>After Shift</h3>
    <table>
        <caption>After Shift</caption>
        <tr>
            <th>Position</th>
            <th>Bit</th>
            <th>Place Value</th>
        </tr>
        <tbody id="afterShiftTable"></tbody>
    </table>
    <p id="afterShiftTotal">Total: </p>

    <script>
        function generateTable() {
            let binaryInput = document.getElementById("binaryInput").value;
            let shiftType = document.getElementById("shiftType").value;
            let shiftAmount = parseInt(document.getElementById("shiftAmount").value);

            // Validate binary input
            if (!/^[01]+$/.test(binaryInput)) {
                alert("Please enter a valid binary number (0s and 1s only).");
                return;
            }

            let number = parseInt(binaryInput, 2);

            let beforeShiftTable = document.getElementById("beforeShiftTable");
            let afterShiftTable = document.getElementById("afterShiftTable");
            let beforeShiftTotal = document.getElementById("beforeShiftTotal");
            let afterShiftTotal = document.getElementById("afterShiftTotal");

            let beforeShiftHTML = "";
            let afterShiftHTML = "";
            let beforeShiftSum = 0;
            let afterShiftSum = 0;

            // Before Shift
            for (let i = 7; i >= 0; i--) {
                let bit = (number >> i) & 1;
                let placeValue = 2 ** i;
                beforeShiftHTML += `<tr>
                                        <td>${i}</td>
                                        <td>${bit}</td>
                                        <td>${placeValue}</td>
                                    </tr>`;
                beforeShiftSum += placeValue;
            }

            // After Shift
            let shiftedNumber = shiftType === "left" ? number << shiftAmount : number >> shiftAmount;
            for (let i = 7 + shiftAmount; i >= 0 + shiftAmount; i--) {
                let bit = (shiftedNumber >> i) & 1;
                let placeValue = 2 ** i;
                afterShiftHTML += `<tr>
                                        <td>${i}</td>
                                        <td>${bit}</td>
                                        <td>${placeValue}</td>
                                    </tr>`;
                afterShiftSum += placeValue;
            }

            beforeShiftTable.innerHTML = beforeShiftHTML;
            afterShiftTable.innerHTML = afterShiftHTML;
            beforeShiftTotal.innerHTML = `Total: ${beforeShiftSum}`;
            afterShiftTotal.innerHTML = `Total: ${afterShiftSum}`;
        }
    </script>
</body>

</html>


</body>
</html>

