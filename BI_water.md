---
layout: base
title: Water 
permalink: /water/
---
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Water Tracker with Progress Bar</title>
  <style>
    .progress-bar {
      width: 100%;
      height: 20px;
      border: 1px solid #ccc;
      margin-bottom: 10px;
      font-family: 'Courier New', monospace;
      line-height: 20px;
    }
    .water-bar {
      width: 100%;
      height: 100%;
      border-radius: 10px;
      background-color: #3498db; /* Water color */
      position: relative;
      overflow: hidden;
    }
    .water-level {
      width: 0;
      height: 100%;
      background-color: #aed6f1; /* Lighter water color */
      position: absolute;
      top: 0;
      left: 0;
    }
     .binary-bar, .ascii-bar {
      width: 100%;
      height: 20px;
      border: 1px solid #ccc;
      margin-bottom: 10px;
      font-family: 'Courier New', monospace;
      line-height: 20px;
      overflow: hidden;
    }
  </style>
  <h1>Water Tracker with Progress Bar</h1>

  <div class="container">
    <div class="box">
      <h2>Water Progress</h2>
      <div class="progress-bar" id="waterProgress">
        <div class="water-bar">
          <div class="water-level" id="waterLevel"></div>
      </div>
      <div class="binary-bar" id="binaryWater"></div>
      <div class="ascii-bar" id="asciiWater"></div>
      </div>
    </div>
    <div class="purple-form">
      <h2>Enter Cups</h2>
      <div class="input-section">
        <input type="number" id="waterIntake" placeholder="Enter amount">
      </div>
      <button onclick="trackWater()">Track</button>
    </div>
    <div class="purple-form">
      <h2>Consumed Cups</h2>
      <div class="counter-box">
        <div class="counter">
          <p>You've consumed <span id="cupsToday">0</span>/8 cups today</p>
        </div>
      </div>
    </div>
  </div>



  <script src="https://cdn.jsdelivr.net/npm/canvas-confetti@1.0.1"></script>
  <script>
    let totalCups = 0;
    function updateCounter() {
      const counterDisplay = document.getElementById('cupsToday');
      counterDisplay.textContent = totalCups;
      if (totalCups > 8) {
        triggerConfetti();
        totalCups = 8; // Limit the total cups to 8
      }
      // Update Binary and ASCII Progress Bars
      updateBinaryProgressBar();
      updateAsciiProgressBar();
    }
    // Function to convert a number to binary
    function toBinary(number) {
      return Number(number).toString(2);
    }
    function updateBinaryProgressBar() {
      const waterBinaryElement = document.getElementById('binaryWater');
      const waterBinary = toBinary(totalCups);
      waterBinaryElement.textContent = waterBinary;
    }
    function updateAsciiProgressBar() {
      const waterAsciiElement = document.getElementById('asciiWater');
      const waterAscii = '='.repeat(totalCups) + '>'.repeat(8 - totalCups);
      waterAsciiElement.textContent = waterAscii;
    }
    function trackWater() {
      const cupsInput = document.getElementById('waterIntake').value;
      const parsedCups = parseFloat(cupsInput);
      if (!isNaN(parsedCups) && parsedCups > 0) {
        totalCups += parsedCups;
        updateCounter();
        // Update the water progress bar
        const waterPercentage = (totalCups / 8) * 100; // Assuming 8 cups as the maximum limit
        const waterLevelElement = document.getElementById('waterLevel');
        waterLevelElement.style.width = waterPercentage + '%';
      } else {
        alert('Please enter a valid amount of water in cups.');
      }}
     function triggerConfetti() {
      confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 }
      });
    }  

  </script>
</html>


