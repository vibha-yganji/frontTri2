---
layout: base
title: Binary Quiz
permalink: /BinaryBar/
---
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Binary Quiz</title>
  <style>
    body {
      font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
      background-color: #f7f7f7;
      margin: 0;
      display: flex;
      justify-content: center;
      align-items: center;
      height: 100vh;
    }
    
    .container_stress {
      text-align: center;
    }

    .question {
      margin-top: 20px;
    }

    .btn {
      margin-top: 10px;
    }

    .progress-bar {
      width: 0%;
      height: 20px;
      margin-top: 20px;
      background: #3498db;
      border-radius: 5px;
      transition: width 0.5s;
    }
  </style>
</head>
<body>
  <h1>Binary Quiz</h1>
  <p>Test your knowledge of binary numbers!</p>
  <div class="quiz-container" id="quiz">
    <div class="question-container" id="question1">
      <h2>Question 1: What is the binary representation of 10 in decimal?</h2>
      <input type="radio" name="q1" value="a"> 1010<br>
      <input type="radio" name="q1" value="b"> 1100<br>
      <input type="radio" name="q1" value="c"> 1001<br>
      <input type="radio" name="q1" value="d"> 1110<br>
    </div>

    <div class="question-container" id="question2" style="display: none;">
      <h2>Question 2: What is the binary representation of 5 in decimal?</h2>
      <input type="radio" name="q2" value="a"> 1010<br>
      <input type="radio" name="q2" value="b"> 111<br>
      <input type="radio" name="q2" value="c"> 110<br>
      <input type="radio" name="q2" value="d"> 101<br>
    </div>

    <div class="question-container" id="question3" style="display: none;">
      <h2>Question 3: What is the binary representation of 15 in decimal?</h2>
      <input type="radio" name="q3" value="a"> 1110<br>
      <input type="radio" name="q3" value="b"> 1011<br>
      <input type="radio" name="q3" value="c"> 1111<br>
      <input type="radio" name="q3" value="d"> 1101<br>
    </div>
  </div>

  <button onclick="checkAnswers()">Submit Answers</button>
  <button onclick="nextQuestion()">Next Question</button>
  <div class="progress-bar" id="progress-bar"></div>

  <script>
    let currentQuestion = 1;
    let correctAnswers = 0;

    function showQuestion(questionNumber) {
      document.getElementById(`question${questionNumber}`).style.display = 'block';
    }

    function hideAllQuestions() {
      for (let i = 1; i <= 3; i++) {
        document.getElementById(`question${i}`).style.display = 'none';
      }
    }

    function nextQuestion() {
      hideAllQuestions();
      currentQuestion++;
      if (currentQuestion <= 3) {
        showQuestion(currentQuestion);
        updateProgressBar();
      } else {
        alert('You have completed all questions!');
      }
    }

    function updateProgressBar() {
      const progressBar = document.getElementById('progress-bar');
      const width = (currentQuestion / 3) * 100;
      progressBar.style.width = `${width}%`;
    }

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

      updateProgressBar();

      const totalQuestions = 3;
      progressBar.style.background = correctAnswers === totalQuestions ? '#4CAF50' : '#FF6347';
      
      setTimeout(() => {
        alert(`You got ${correctAnswers} out of ${totalQuestions} correct!`);
      }, 100);
    }

    showQuestion(currentQuestion);
  </script>
</body>
</html>
