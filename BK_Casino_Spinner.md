---
layout: base
title: Spinner 
permalink: /spiner/
---
<html>
<head>
  <title>Casino Slot Machine</title>
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css">
  <style>
        body {
      font-family: Arial, sans-serif;
      display: flex;
      justify-content: center;
      align-items: center;
      height: 100vh;
      margin: 0;
      background-color: #f5f5f5;
    }

    .slot-machine {
      display: flex;
      flex-direction: column;
      align-items: center;
      background-color: #fff;
      padding: 20px;
      border-radius: 10px;
      box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    }

    .slot {
      display: flex;
      justify-content: space-around;
      width: 300px;
      margin-bottom: 20px;
      border: 1px solid #ccc;
      padding: 10px;
      border-radius: 5px;
    }

    .slot-item {
      font-size: 48px;
    }

    .button {
      padding: 10px 20px;
      background-color: #007bff;
      color: #fff;
      border: none;
      border-radius: 5px;
      font-size: 16px;
      cursor: pointer;
      transition: background-color 0.3s ease;
    }

    .button:hover {
      background-color: #0056b3;
    }

    .free-spin {
      font-size: 14px;
      margin-top: 5px;
      color: #888;
    }
  </style>
</head>
<body>

<div class="slot-machine">
  <h1>Casino Slot Machine</h1>
  <div class="slot">
    <div class="slot-item" id="slot1"><i class="fas fa-dumbbell"></i></div>
    <div class="slot-item" id="slot2"><i class="fas fa-heart"></i></div>
    <div class="slot-item" id="slot3"><i class="fas fa-hamburger"></i></div>
  </div>
  <button class="button" onclick="spin()">Spin (1 coin)</button>
  <span class="free-spin" id="freeSpinIndicator"></span>
  <p>Coins: <span id="coins">0</span></p>
</div>

<script>
  const outcomes = ['dumbbell', 'heart', 'hamburger', 'tint', 'badge'];
  let coins = 0;
  let freeSpin = true;
  let isSpinning = false;

  function spin() {
    if (isSpinning) return;

    const slot1 = document.getElementById('slot1');
    const slot2 = document.getElementById('slot2');
    const slot3 = document.getElementById('slot3');

    const spinDuration = 3000;
    const interval = 100;
    let elapsedTime = 0;

    if (freeSpin) {
      freeSpin = false;
      document.getElementById('freeSpinIndicator').textContent = 'Free daily spin used!';
    } else {
      if (coins < 1) {
        alert('Not enough coins to play. Get more coins!');
        return;
      }
      coins -= 1;
      document.getElementById('coins').textContent = coins;
    }

    isSpinning = true;

    const spinInterval = setInterval(() => {
      slot1.innerHTML = '<i class="fas fa-' + outcomes[Math.floor(Math.random() * outcomes.length)] + '"></i>';
      slot2.innerHTML = '<i class="fas fa-' + outcomes[Math.floor(Math.random() * outcomes.length)] + '"></i>';
      slot3.innerHTML = '<i class="fas fa-' + outcomes[Math.floor(Math.random() * outcomes.length)] + '"></i>';

      elapsedTime += interval;
      if (elapsedTime >= spinDuration) {
        clearInterval(spinInterval);
        stopSpin(slot1.innerHTML, slot2.innerHTML, slot3.innerHTML);
      }
    }, interval);

    toggleSpinAnimation();
  }

  function stopSpin(outcome1, outcome2, outcome3) {
    isSpinning = false;
    toggleSpinAnimation();
    checkWin(outcome1, outcome2, outcome3);
  }

  function toggleSpinAnimation() {
    const slots = document.querySelectorAll('.slot-item');
    slots.forEach(slot => slot.classList.toggle('spinning'));
  }

  function checkWin(outcome1, outcome2, outcome3) {
    if (outcome1 === outcome2 && outcome2 === outcome3) {
      coins += 10;
      alert('Congratulations! You won the jackpot! You earned 10 coins!');
    } else {
      alert('Next time!');
    }
    document.getElementById('coins').textContent = coins;
  }
</script>

</body>
</html>
