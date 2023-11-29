---
layout: base
title: Stress
permalink: /stress/
---

<html>
<head>
  <title>Exercise Tracker</title>
  <style>
    /* CSS for styling purposes (optional) */
    .feature {
      margin-bottom: 10px;
    }
  </style>
</head>
<body>
  <h1>Exercise Tracker</h1>
  
  <!-- Feature: Completed Exercise -->
  <div class="feature">
    <label for="completedExercise">Completed Exercise:</label>
    <input type="checkbox" id="completedExercise">
  </div>

  <!-- Feature: Rest Day -->
  <div class="feature">
    <label for="restDay">Rest Day:</label>
    <input type="checkbox" id="restDay">
  </div>

  <!-- Feature: Favorite Exercise -->
  <div class="feature">
    <label for="favoriteExercise">Favorite Exercise:</label>
    <input type="checkbox" id="favoriteExercise">
  </div>

  <!-- Feature: Warm-up Completed -->
  <div class="feature">
    <label for="warmupCompleted">Warm-up Completed:</label>
    <input type="checkbox" id="warmupCompleted">
  </div>

  <!-- Feature: Cool-down Completed -->
  <div class="feature">
    <label for="cooldownCompleted">Cool-down Completed:</label>
    <input type="checkbox" id="cooldownCompleted">
  </div>

  <script>
    // JavaScript to handle binary features (id)
    const completedExerciseCheckbox = document.getElementById('completedExercise');
    const restDayCheckbox = document.getElementById('restDay');
    const favoriteExerciseCheckbox = document.getElementById('favoriteExercise');
    const warmupCompletedCheckbox = document.getElementById('warmupCompleted');
    const cooldownCompletedCheckbox = document.getElementById('cooldownCompleted');

    // Event listeners for checkboxes
    completedExerciseCheckbox.addEventListener('change', () => {
    });

    restDayCheckbox.addEventListener('change', () => {
    });

    favoriteExerciseCheckbox.addEventListener('change', () => {
    });

    warmupCompletedCheckbox.addEventListener('change', () => {
    });

    cooldownCompletedCheckbox.addEventListener('change', () => {
    });
  </script>
</body>
</html