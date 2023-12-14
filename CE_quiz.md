<!-----
layout: page
title: Binary Quiz
permalink: /quiz/
--->
<html>
<head>
  <style>
    .progress-bar {
      width: 100%;
      height: 30px;
      margin-top: 20px;
      background: rgb(0, 0, 0);
      border-radius: 5px;
    }
  </style>
</head>
<body>
  <p>Test your knowledge of binary numbers!</p>
  <div id="quiz">
    <h2>Question 1: What is the binary representation of 10 in decimal?</h2>
    <input type="radio" name="q1" value="a"> 1010<br>
    <input type="radio" name="q1" value="b"> 1100<br>
    <input type="radio" name="q1" value="c"> 1001<br>
    <input type="radio" name="q1" value="d"> 1110<br>
    <h2>Question 2: What is the binary representation of 5 in decimal?</h2>
    <input type="radio" name="q2" value="a"> 1010<br>
    <input type="radio" name="q2" value="b"> 111<br>
    <input type="radio" name="q2" value="c"> 110<br>
    <input type="radio" name="q2" value="d"> 101<br>
    <h2>Question 3: What is the binary representation of 15 in decimal?</h2>
    <input type="radio" name="q3" value="a"> 1110<br>
    <input type="radio" name="q3" value="b"> 1011<br>
    <input type="radio" name="q3" value="c"> 1111<br>
    <input type="radio" name="q3" value="d"> 1101<br>
  </div>
  <button onclick="checkAnswers()">Submit Answers</button>
  <div class="progress-bar" id="progress-bar"></div>
  <script>
    let correctAnswers = 0;
    function checkAnswers() {
      const q1Answer = document.querySelector('input[name="q1"]:checked').value;
      const q2Answer = document.querySelector('input[name="q2"]:checked').value;
      const q3Answer = document.querySelector('input[name="q3"]:checked').value;
      if (q1Answer === 'a') {
        correctAnswers++;
      }
      if (q2Answer === 'd') {
        correctAnswers++;
      }
      if (q3Answer === 'c') {
        correctAnswers++;
      }
      const progressBar = document.getElementById('progress-bar');
      const totalQuestions = 3; // Update this if more questions are added
      const percentage = (correctAnswers / totalQuestions) * 100;
      progressBar.style.background = `rgb(${calculateRGB(percentage)})`;
      alert(`You got ${correctAnswers} out of ${totalQuestions} correct!`);
    }
    function calculateRGB(percentage) {
      let red = 255;
      let green = 255;
      let blue = 0;
      if (percentage > 50) {
        red = Math.floor(255 - ((percentage - 50) * 5.1));
      } else {
        green = Math.floor(percentage * 5.1);
      }
      return `${red}, ${green}, ${blue}`;
    }
  </script>
</body>
</html>