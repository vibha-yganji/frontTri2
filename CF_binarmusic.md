---
layout: page
title: Binary Music
permalink: /music/
---


<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Binary Music Composition</title>
</head>
<body>
  <h1>Binary Music Composition</h1>
  <label for="binaryInput">Enter Binary Pattern (0s and 1s): </label>
  <input type="text" id="binaryInput">
  <button onclick="composeMusic()">Compose Music</button>

  <div id="instructions">
    <h2>Instructions</h2>
    <p>Welcome to the Binary Music Composition tool!</p>
    <p>Enter a binary pattern consisting of '0's and '1's into the input field.</p>
    <p>Each '0' will trigger a musical note, and each '1' will create a brief silence.</p>
    <p>Click the "Compose Music" button to hear the musical composition based on your binary input.</p>
  </div>

  <script>
    function composeMusic() {
      const binaryInput = document.getElementById('binaryInput').value;
      const audioContext = new (window.AudioContext || window.webkitAudioContext)();
      const notes = ['C4', 'D4', 'E4', 'F4', 'G4', 'A4', 'B4']; // Musical notes

      const oscillator = audioContext.createOscillator();
      oscillator.type = 'sine'; // Oscillator type
      oscillator.connect(audioContext.destination); // Connect oscillator to speakers

      const noteDuration = 0.5; // Duration for each note in seconds
      const noteDelay = 0.1; // Delay between notes

      let time = audioContext.currentTime;

      for (let i = 0; i < binaryInput.length; i++) {
        const bit = binaryInput.charAt(i);

        if (bit === '0') {
          // Play a musical note for '0'
          const note = notes[i % notes.length];
          oscillator.frequency.setValueAtTime(noteToFrequency(note), time);
          oscillator.start(time);
          oscillator.stop(time + noteDuration);
        } else if (bit === '1') {
          // Create a short silence for '1'
          time += noteDuration + noteDelay;
        }

        time += noteDuration + noteDelay;
      }
    }

    function noteToFrequency(note) {
      const notesMap = {
        'C4': 261.63,
        'D4': 293.66,
        'E4': 329.63,
        'F4': 349.23,
        'G4': 392.00,
        'A4': 440.00,
        'B4': 493.88
      };
      return notesMap[note];
    }
  </script>
</body>
</html>
