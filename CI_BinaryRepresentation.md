<!---
layout: page
title: Binary Representation
permalink: /Binary Representation/
---> 
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