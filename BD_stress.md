---
layout: base
title: Stress
permalink: /stress/
---
![Alt text](images/Stress Tracker Logo.png)
<style>
  body {
    align-items: center;
  }
  .container_stress {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 15px;
    background-color: #fff;
  }
    .low-stress {
      background-color: #4CAF50; /* Green */
    }

    .moderate-stress {
      background-color: #FF9800; /* Orange */
    }

    .high-stress,
    .very-high-stress {
      background-color: #F44336; /* Red */
    }

    #progress-bar-container {
      width: 100%;
      background-color: #ddd;
      border-radius: 5px;
      overflow: hidden;
      height: 30px;
      margin-top: 20px;
    }
      #progress-bar {
        height: 100%;
        text-align: center;
        line-height: 30px;
        color: #fff;
        font-weight: bold;
        transition: width 0.3s ease-in-out;
      }

    .buttons {
      display: flex;
      justify-content: space-between;
      align-items: center;
    }

    form {
      padding: 20px;
    }
      .question {
        margin-bottom: 20px;
      }

      input[type="radio"] {
        margin-right: 5px;
      }
</style>

<div id="selectedAscii"></div>
<div class="purple-form"> <!-- questions -->
  <h1>Stress Quiz</h1>
  <form id="purple-form">
    <div class="question" id="question1">
      <label>
        <strong>1. How often do you feel overwhelmed?</strong><br>
        <input type="radio" name="question1" value="1"> Rarely<br> <!-- Value 1 lowest, 4 highest -->
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
    <div class="buttons"> <!--buttons to next and previous questions -->
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
    let stressLevel, progressBarClass;

    if (totalScore <= 3) {
      stressLevel = 'Low stress';
      progressBarClass = 'low-stress';
    } else if (totalScore <= 6) {
      stressLevel = 'Moderate stress';
      progressBarClass = 'moderate-stress';
    } else if (totalScore <= 9) {
      stressLevel = 'High stress';
      progressBarClass = 'high-stress';
    } else if (totalScore <= 12) {
      stressLevel = 'Very high stress';
      progressBarClass = 'very-high-stress';
    }

    setProgressBar((totalScore / 12) * 100, progressBarClass);

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


<script src="https://jplip.github.io/frontTri2/assets/js/exercise.js" defer></script>