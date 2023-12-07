<!-- ---
layout: base
title: Stress
permalink: /stress/
--- -->
<html lang="en">
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Are You Stressed?</title>
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
  </style>

  <div class="container_stress">
    <h1>Stress Quiz</h1>

    <form id="stressForm">
      <div class="question" id="question1">
        <label>
          <strong>1. How often do you feel overwhelmed?</strong><br>
          <input type="radio" name="question1" value="1"> Rarely<br>
          <input type="radio" name="question1" value="2"> Occasionally<br>
          <input type="radio" name="question1" value="3"> Frequently<br>
          <input type="radio" name="question1" value="4"> Almost always<br>
        </label>
      </div>

      <div class="question" id="question2" style="display: none;">
        <label>
          <strong>2. Do you have trouble sleeping due to stress?</strong><br>
          <input type="radio" name="question2" value="1"> Never<br>
          <input type="radio" name="question2" value="2"> Rarely<br>
          <input type="radio" name="question2" value="3"> Sometimes<br>
          <input type="radio" name="question2" value="4"> Often<br>
        </label>
      </div>

      <div class="question" id="question3" style="display: none;">
        <label>
          <strong>3. How often do you experience physical symptoms of stress (headaches, muscle tension, etc.)?</strong><br>
          <input type="radio" name="question3" value="1"> Rarely<br>
          <input type="radio" name="question3" value="2"> Occasionally<br>
          <input type="radio" name="question3" value="3"> Frequently<br>
          <input type="radio" name="question3" value="4"> Almost always<br>
        </label>
      </div>

      <div class="buttons">
        <button type="button" onclick="prevQuestion()" class="btn">Previous</button>
        <button type="button" onclick="nextQuestion()" class="btn">Next</button>
      </div>

      <div id="result"></div>

      <div id="progress-bar-container">
        <div id="progress-bar"></div>
      </div>
    </form>
  </div>

  <script>
  let currentQuestion = 1;

  function calculateStress() {
    const form = document.getElementById('stressForm');
    const formData = new FormData(form);
    let totalScore = 0;

    formData.forEach(value => {
      totalScore += parseInt(value);
    });

    const resultDiv = document.getElementById('result');
    let stressLevel;

    if (totalScore <= 6) {
      stressLevel = 'Low stress';
      setProgressBar(25, 'low-stress');
    } else if (totalScore <= 9) {
      stressLevel = 'Moderate stress';
      setProgressBar(50, 'moderate-stress');
    } else if (totalScore <= 12) {
      stressLevel = 'High stress';
      setProgressBar(75, 'high-stress');
    } else {
      stressLevel = 'Very high stress';
      setProgressBar(100, 'very-high-stress');
    }

    resultDiv.innerHTML = `<p>Your stress level is: <strong>${stressLevel}</strong></p>`;
  }

  function setProgressBar(width, styleClass) {
    const progressBar = document.getElementById('progress-bar');
    progressBar.style.width = `${width}%`;
    progressBar.className = styleClass;
    progressBar.innerHTML = width === 100 ? 'MAX' : `${width}%`;
  }

  function nextQuestion() {
    const currentQuestionDiv = document.getElementById(`question${currentQuestion}`);
    currentQuestionDiv.style.display = 'none';

    currentQuestion++;
    const nextQuestionDiv = document.getElementById(`question${currentQuestion}`);
    nextQuestionDiv.style.display = 'block';

    if (currentQuestion === 3) {
      document.querySelector('.buttons button:nth-child(2)').textContent = 'Submit';
      document.querySelector('.buttons button:nth-child(2)').onclick = calculateStress;
    }

    updateProgressBar();
  }

  function prevQuestion() {
    const currentQuestionDiv = document.getElementById(`question${currentQuestion}`);
    currentQuestionDiv.style.display = 'none';

    currentQuestion--;
    const prevQuestionDiv = document.getElementById(`question${currentQuestion}`);
    prevQuestionDiv.style.display = 'block';

    document.querySelector('.buttons button:nth-child(2)').textContent = 'Next';
    document.querySelector('.buttons button:nth-child(2)').onclick = nextQuestion;

    updateProgressBar();
  }

  function updateProgressBar() {
    const progressPercentage = (currentQuestion - 1) * 50; // Assuming two questions per 100%
    setProgressBar(progressPercentage, 'moderate-stress'); // Using moderate-stress color for simplicity
  }
</script>